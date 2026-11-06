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
		return this.__wbg_ptr = 0, v_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		nt.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = J_(n, nt.__wbindgen_malloc), _ = et, t = nt.aw5batch_new(e, _);
		if (t[2]) throw $_(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, v_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), r = et;
		var i = L_(_) ? 0 : X_(_, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et;
		const c = nt.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw $_(c[1]);
		return $_(c[0]);
	}
	subjects(n) {
		const e = nt.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw $_(e[2]);
		var _ = D_(e[0], e[1]).slice();
		return nt.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
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
		nt.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = nt.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = nt.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = nt.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = nt.streamchunkresult_axisX(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = nt.streamchunkresult_axisY(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = nt.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = nt.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw $_(n[1]);
		return $_(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== nt.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = nt.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = O_(n[0], n[1]).slice(), nt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get enmo5s() {
		const n = nt.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = nt.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = nt.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = M_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = nt.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = M_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = nt.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = x_(e[0], e[1]).slice();
		return nt.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return nt.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = nt.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = nt.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== nt.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = nt.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = O_(n[0], n[1]).slice(), nt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = nt.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = nt.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = nt.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== nt.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return nt.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return nt.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return nt.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = nt.streamchunkresult_temperature(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = nt.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = nt.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = nt.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = nt.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = nt.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = nt.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = x_(n[0], n[1]).slice();
		return nt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n) {
	const e = nt.actiwareIntervalStatistics(n);
	if (e[3]) throw $_(e[2]);
	var _ = D_(e[0], e[1]).slice();
	return nt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function r(n, e, _) {
	const t = J_(e, nt.__wbindgen_malloc), r = et, i = nt.actiwareSleepIntervals(n, t, r, L_(_) ? 0 : A_(_));
	if (i[3]) throw $_(i[2]);
	var o = D_(i[0], i[1]).slice();
	return nt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function i(n, e) {
	const _ = nt.actiwareWakeThreshold(n, L_(e) ? 0 : A_(e));
	if (_[3]) throw $_(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function o(n) {
	const e = nt.aggregateEpochSeries(n);
	if (e[2]) throw $_(e[1]);
	return $_(e[0]);
}
function c(n) {
	const e = H_(n, nt.__wbindgen_malloc), _ = et, t = nt.analysisDatesOf(e, _);
	var r = D_(t[0], t[1]).slice();
	return nt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function l(n, e) {
	const _ = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), t = et, r = nt.analysisWindowBounds(_, t, !L_(e), L_(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = x_(r[0], r[1]).slice(), nt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function a(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), i = et, o = nt.analysisWindowSlice(_, t, r, i);
	var c = I_(o[0], o[1]).slice();
	return nt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function s(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = H_(e, nt.__wbindgen_malloc), c = et, l = H_(_, nt.__wbindgen_malloc), a = et, s = nt.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw $_(s[2]);
	var w = M_(s[0], s[1]).slice();
	return nt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function w(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = H_(e, nt.__wbindgen_malloc), c = et, l = H_(_, nt.__wbindgen_malloc), a = et, s = nt.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw $_(s[2]);
	var w = M_(s[0], s[1]).slice();
	return nt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function g(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = H_(e, nt.__wbindgen_malloc), c = et;
	return nt.clippedUnionHours(r, i, o, c, _, t);
}
function b(n, e) {
	const _ = nt.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw $_(_[1]);
	return $_(_[0]);
}
function u(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = H_(e, nt.__wbindgen_malloc), c = et, l = H_(_, nt.__wbindgen_malloc), a = et, s = nt.computeAnglez5s(r, i, o, c, l, a, t);
	var w = x_(s[0], s[1]).slice();
	return nt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function d(n) {
	let e, _;
	try {
		const i = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et, c = nt.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, $_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		nt.__wbindgen_free(e, _, 1);
	}
}
function f(n, e, _, t, r, i, o) {
	const c = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), l = et, a = H_(e, nt.__wbindgen_malloc), s = et, w = B_(_, nt.__wbindgen_malloc), g = et, b = H_(t, nt.__wbindgen_malloc), u = et, d = B_(r, nt.__wbindgen_malloc), f = et, m = V_(i, nt.__wbindgen_malloc), h = et, p = B_(o, nt.__wbindgen_malloc), y = et, v = nt.computeCircadianTyped(c, l, a, s, w, g, b, u, d, f, m, h, p, y);
	if (v[2]) throw $_(v[1]);
	return $_(v[0]);
}
function m(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = H_(e, nt.__wbindgen_malloc), c = et, l = H_(_, nt.__wbindgen_malloc), a = et, s = nt.computeEnmo5s(r, i, o, c, l, a, t);
	var w = x_(s[0], s[1]).slice();
	return nt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function h(n, e, _, t, r) {
	const i = H_(n, nt.__wbindgen_malloc), o = et, c = H_(e, nt.__wbindgen_malloc), l = et, a = H_(_, nt.__wbindgen_malloc), s = et, w = nt.computeMimsUnit(i, o, c, l, a, s, t, L_(r) ? 0 : A_(r));
	if (w[2]) throw $_(w[1]);
	return $_(w[0]);
}
function p(n, e, _, t, r) {
	const i = H_(n, nt.__wbindgen_malloc), o = et, c = H_(e, nt.__wbindgen_malloc), l = et, a = H_(_, nt.__wbindgen_malloc), s = et, w = H_(t, nt.__wbindgen_malloc), g = et, b = nt.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, L_(r) ? 0 : A_(r));
	if (b[2]) throw $_(b[1]);
	return $_(b[0]);
}
function y(n) {
	let e, _;
	try {
		const i = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et, c = nt.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, $_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		nt.__wbindgen_free(e, _, 1);
	}
}
function v(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h) {
	const p = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), y = et, v = H_(e, nt.__wbindgen_malloc), k = et, S = B_(_, nt.__wbindgen_malloc), A = et, R = H_(t, nt.__wbindgen_malloc), C = et, x = B_(r, nt.__wbindgen_malloc), D = et, I = V_(i, nt.__wbindgen_malloc), M = et, F = B_(o, nt.__wbindgen_malloc), W = et, U = V_(c, nt.__wbindgen_malloc), z = et, P = B_(l, nt.__wbindgen_malloc), O = et, T = H_(a, nt.__wbindgen_malloc), N = et, G = B_(s, nt.__wbindgen_malloc), E = et, j = H_(w, nt.__wbindgen_malloc), L = et, B = B_(g, nt.__wbindgen_malloc), V = et, H = H_(b, nt.__wbindgen_malloc), J = et, X = B_(u, nt.__wbindgen_malloc), $ = et, q = H_(d, nt.__wbindgen_malloc), Z = et, Y = B_(f, nt.__wbindgen_malloc), K = et, Q = V_(m, nt.__wbindgen_malloc), nn = et, en = B_(h, nt.__wbindgen_malloc), _n = et, tn = nt.computeNightDifficultyTyped(p, y, v, k, S, A, R, C, x, D, I, M, F, W, U, z, P, O, T, N, G, E, j, L, B, V, H, J, X, $, q, Z, Y, K, Q, nn, en, _n);
	if (tn[2]) throw $_(tn[1]);
	return $_(tn[0]);
}
function k(n) {
	let e, _;
	try {
		const i = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et, c = nt.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, $_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		nt.__wbindgen_free(e, _, 1);
	}
}
function S(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h) {
	const p = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), y = et, v = H_(e, nt.__wbindgen_malloc), k = et, S = B_(_, nt.__wbindgen_malloc), A = et, R = H_(t, nt.__wbindgen_malloc), C = et, x = B_(r, nt.__wbindgen_malloc), D = et, I = V_(i, nt.__wbindgen_malloc), M = et, F = B_(o, nt.__wbindgen_malloc), W = et, U = V_(c, nt.__wbindgen_malloc), z = et, P = B_(l, nt.__wbindgen_malloc), O = et, T = H_(a, nt.__wbindgen_malloc), N = et, G = B_(s, nt.__wbindgen_malloc), E = et, j = H_(w, nt.__wbindgen_malloc), L = et, B = B_(g, nt.__wbindgen_malloc), V = et, H = H_(b, nt.__wbindgen_malloc), J = et, X = B_(u, nt.__wbindgen_malloc), $ = et, q = H_(d, nt.__wbindgen_malloc), Z = et, Y = B_(f, nt.__wbindgen_malloc), K = et, Q = V_(m, nt.__wbindgen_malloc), nn = et, en = B_(h, nt.__wbindgen_malloc), _n = et, tn = nt.computeNightSignalsTyped(p, y, v, k, S, A, R, C, x, D, I, M, F, W, U, z, P, O, T, N, G, E, j, L, B, V, H, J, X, $, q, Z, Y, K, Q, nn, en, _n);
	if (tn[2]) throw $_(tn[1]);
	return $_(tn[0]);
}
function A(n, e, _) {
	const t = V_(n, nt.__wbindgen_malloc), r = et, i = H_(e, nt.__wbindgen_malloc), o = et, c = nt.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw $_(c[1]);
	return $_(c[0]);
}
function R(n) {
	const e = nt.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw $_(e[1]);
	return $_(e[0]);
}
function C(n) {
	const e = J_(n, nt.__wbindgen_malloc), _ = et, t = nt.consensusDisagreementDetail(e, _);
	if (t[2]) throw $_(t[1]);
	return $_(t[0]);
}
function x(n) {
	const e = nt.consensusDisagreements(n);
	if (e[3]) throw $_(e[2]);
	var _ = D_(e[0], e[1]).slice();
	return nt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function D(n) {
	const e = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), _ = et, t = nt.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw $_(t[1]);
	return $_(t[0]);
}
function I(n) {
	const e = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), _ = et, t = nt.convertScreensRedcapDiary(e, _);
	if (t[2]) throw $_(t[1]);
	return $_(t[0]);
}
function M(n) {
	const e = V_(n, nt.__wbindgen_malloc), _ = et;
	nt.csvBufferAppend(e, _);
}
function F(n) {
	nt.csvBufferClear(n);
}
function W(n, e) {
	const _ = nt.cutpointEpochCompatibility(n, e);
	if (_[2]) throw $_(_[1]);
	return $_(_[0]);
}
function U(n, e, _, t, r) {
	const i = H_(n, nt.__wbindgen_malloc), o = et, c = nt.cutpointToneCodes(i, o, e, _, t, r);
	var l = M_(c[0], c[1]).slice();
	return nt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function z(n, e, _, t) {
	const r = nt.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = O_(r[0], r[1]).slice(), nt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function P(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = B_(e, nt.__wbindgen_malloc), i = et, o = nt.describeColumns(_, t, r, i);
	if (o[3]) throw $_(o[2]);
	var c = D_(o[0], o[1]).slice();
	return nt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function O(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = H_(e, nt.__wbindgen_malloc), i = et, o = nt.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw $_(o[2]);
	var c = M_(o[0], o[1]).slice();
	return nt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function T(n, e) {
	let _, t;
	try {
		const r = V_(n, nt.__wbindgen_malloc), i = et, o = X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), c = et, l = nt.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], O_(l[0], l[1]);
	} finally {
		nt.__wbindgen_free(_, t, 1);
	}
}
function N(n) {
	const e = nt.detectGgirHasptVariant(n);
	if (e[2]) throw $_(e[1]);
	return $_(e[0]);
}
function G(n, e, _, t, r) {
	const i = H_(n, nt.__wbindgen_malloc), o = et;
	var c = L_(e) ? 0 : X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), l = et, a = L_(_) ? 0 : H_(_, nt.__wbindgen_malloc), s = et, w = L_(t) ? 0 : H_(t, nt.__wbindgen_malloc), g = et, b = L_(r) ? 0 : X_(r, nt.__wbindgen_malloc, nt.__wbindgen_realloc), u = et;
	const d = nt.detectHdcza(i, o, c, l, a, s, w, g, b, u);
	if (d[2]) throw $_(d[1]);
	return $_(d[0]);
}
function E(n) {
	const e = H_(n, nt.__wbindgen_malloc), _ = et;
	return 0 !== nt.detectHourClockJumpMs(e, _);
}
function j(n) {
	const e = H_(n, nt.__wbindgen_malloc), _ = et, t = nt.detectNonwear(e, _);
	var r = M_(t[0], t[1]).slice();
	return nt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function L(n) {
	const e = H_(n, nt.__wbindgen_malloc), _ = et, t = nt.detectNonwearChoi2011(e, _);
	var r = M_(t[0], t[1]).slice();
	return nt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function B(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = nt.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw $_(r[2]);
	var i = M_(r[0], r[1]).slice();
	return nt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function V(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = nt.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw $_(r[2]);
	var i = M_(r[0], r[1]).slice();
	return nt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function H(n) {
	let e, _;
	try {
		const i = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et, c = nt.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, $_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		nt.__wbindgen_free(e, _, 1);
	}
}
function J(n, e, _, t, r, i, o) {
	const c = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), l = et, a = X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), s = et, w = H_(_, nt.__wbindgen_malloc), g = et, b = H_(t, nt.__wbindgen_malloc), u = et, d = H_(r, nt.__wbindgen_malloc), f = et, m = nt.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, b, u, d, f, i, o);
	if (m[2]) throw $_(m[1]);
	return $_(m[0]);
}
function X(n, e, _) {
	const t = J_(_, nt.__wbindgen_malloc), r = et, i = nt.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw $_(i[2]);
	var o = D_(i[0], i[1]).slice();
	return nt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function $(n, e, _, t) {
	const r = nt.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = x_(r[0], r[1]).slice(), nt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function q(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = H_(e, nt.__wbindgen_malloc), i = et, o = nt.epochAgreement(_, t, r, i);
	if (o[2]) throw $_(o[1]);
	return $_(o[0]);
}
function Z(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = nt.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = I_(o[0], o[1]).slice(), nt.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function Y(n, e, _) {
	const t = J_(n, nt.__wbindgen_malloc), r = et, i = J_(e, nt.__wbindgen_malloc), o = et, c = J_(_, nt.__wbindgen_malloc), l = et, a = nt.exportFileNightFigures(t, r, i, o, c, l);
	if (a[3]) throw $_(a[2]);
	var s = D_(a[0], a[1]).slice();
	return nt.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function K(n) {
	const e = J_(n, nt.__wbindgen_malloc), _ = et, t = nt.exportNapAggregate(e, _);
	if (t[2]) throw $_(t[1]);
	return $_(t[0]);
}
function Q(n) {
	const e = V_(n, nt.__wbindgen_malloc), _ = et, t = nt.extractCapsense(e, _);
	if (t[3]) throw $_(t[2]);
	var r = D_(t[0], t[1]).slice();
	return nt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function nn(n, e, _, t, r) {
	const i = H_(n, nt.__wbindgen_malloc), o = et, c = H_(e, nt.__wbindgen_malloc), l = et, a = H_(_, nt.__wbindgen_malloc), s = et, w = X_(r, nt.__wbindgen_malloc, nt.__wbindgen_realloc), g = et, b = nt.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (b[3]) throw $_(b[2]);
	var u = x_(b[0], b[1]).slice();
	return nt.__wbindgen_free(b[0], 8 * b[1], 8), u;
}
function en(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = X_(t, nt.__wbindgen_malloc, nt.__wbindgen_realloc), c = et, l = nt.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw $_(l[2]);
	var a = x_(l[0], l[1]).slice();
	return nt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function _n(n, e, _, t, r) {
	const i = V_(_, nt.__wbindgen_malloc), o = et, c = H_(t, nt.__wbindgen_malloc), l = et, a = nt.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw $_(a[1]);
	return $_(a[0]);
}
function tn(n, e, _, t, r, i) {
	const o = H_(_, nt.__wbindgen_malloc), c = et, l = H_(t, nt.__wbindgen_malloc), a = et, s = X_(i, nt.__wbindgen_malloc, nt.__wbindgen_realloc), w = et, g = nt.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw $_(g[2]);
	var b = x_(g[0], g[1]).slice();
	return nt.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function rn(n) {
	const e = nt.fuseNonwearMasks(n);
	if (e[2]) throw $_(e[1]);
	return $_(e[0]);
}
function on(n, e, _) {
	var t = L_(_) ? 0 : X_(_, nt.__wbindgen_malloc, nt.__wbindgen_realloc), r = et;
	const i = nt.generateActiwareRestIntervals(n, L_(e) ? 0 : A_(e), t, r);
	if (i[3]) throw $_(i[2]);
	var o = D_(i[0], i[1]).slice();
	return nt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function cn() {
	const n = nt.getComputeCapabilitiesV1();
	if (n[2]) throw $_(n[1]);
	return $_(n[0]);
}
function ln(n, e, _) {
	const t = J_(_, nt.__wbindgen_malloc), r = et, i = nt.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw $_(i[2]);
	var o = x_(i[0], i[1]).slice();
	return nt.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function an(n, e) {
	var _ = L_(n) ? 0 : X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), t = et;
	const r = nt.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw $_(r[1]);
	return $_(r[0]);
}
function sn(n) {
	const e = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), _ = et, t = nt.ggirConfigValues(e, _);
	if (t[2]) throw $_(t[1]);
	return $_(t[0]);
}
function wn(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = H_(e, nt.__wbindgen_malloc), i = et, o = nt.ggirDayValidFractions(_, t, r, i);
	if (o[2]) throw $_(o[1]);
	return $_(o[0]);
}
function gn(n, e, _) {
	const t = H_(n, nt.__wbindgen_malloc), r = et;
	var i = L_(e) ? 0 : H_(e, nt.__wbindgen_malloc), o = et, c = L_(_) ? 0 : X_(_, nt.__wbindgen_malloc, nt.__wbindgen_realloc), l = et;
	const a = nt.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw $_(a[2]);
	var s = M_(a[0], a[1]).slice();
	return nt.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function bn(n, e) {
	const _ = V_(n, nt.__wbindgen_malloc), t = et;
	var r = L_(e) ? 0 : X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), i = et;
	const o = nt.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw $_(o[1]);
	return $_(o[0]);
}
function un(n, e, _) {
	const t = J_(e, nt.__wbindgen_malloc), r = et;
	var i = L_(_) ? 0 : H_(_, nt.__wbindgen_malloc), o = et;
	const c = nt.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw $_(c[2]);
	var l = D_(c[0], c[1]).slice();
	return nt.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function dn(n) {
	var e = L_(n) ? 0 : X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), _ = et;
	const t = nt.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw $_(t[1]);
	return t[0];
}
function fn(n, e, _, t) {
	const r = B_(n, nt.__wbindgen_malloc), i = et, o = J_(_, nt.__wbindgen_malloc), c = et;
	var l = L_(t) ? 0 : H_(t, nt.__wbindgen_malloc), a = et;
	const s = nt.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw $_(s[2]);
	var w = x_(s[0], s[1]).slice();
	return nt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function mn(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = J_(e, nt.__wbindgen_malloc), i = et, o = nt.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw $_(o[2]);
	var c = x_(o[0], o[1]).slice();
	return nt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function hn(n, e, _, t) {
	const r = J_(n, nt.__wbindgen_malloc), i = et, o = H_(e, nt.__wbindgen_malloc), c = et, l = H_(_, nt.__wbindgen_malloc), a = et, s = H_(t, nt.__wbindgen_malloc), w = et, g = nt.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw $_(g[1]);
	return $_(g[0]);
}
function pn(n) {
	const e = V_(n, nt.__wbindgen_malloc), _ = et, t = nt.ggirMilestoneVersion(e, _);
	if (t[3]) throw $_(t[2]);
	let r;
	return 0 !== t[0] && (r = O_(t[0], t[1]).slice(), nt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function yn(n) {
	const e = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), _ = et, t = nt.ggirNonwearApproach(e, _);
	if (t[3]) throw $_(t[2]);
	let r;
	return 0 !== t[0] && (r = O_(t[0], t[1]).slice(), nt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function vn(n) {
	const e = nt.ggirPersonSummaries(n);
	if (e[2]) throw $_(e[1]);
	return $_(e[0]);
}
function kn() {
	const n = nt.ggirRerunProfiles();
	if (n[3]) throw $_(n[2]);
	var e = D_(n[0], n[1]).slice();
	return nt.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function Sn(n) {
	const e = V_(n, nt.__wbindgen_malloc), _ = et, t = nt.ggirSavedNonwearWindows(e, _);
	if (t[2]) throw $_(t[1]);
	return t[0] >>> 0;
}
function An(n, e, _, t) {
	const r = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), i = et, o = X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), c = et, l = X_(_, nt.__wbindgen_malloc, nt.__wbindgen_realloc), a = et, s = J_(t, nt.__wbindgen_malloc), w = et, g = nt.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw $_(g[2]);
	let b;
	return 0 !== g[0] && (b = D_(g[0], g[1]).slice(), nt.__wbindgen_free(g[0], 4 * g[1], 4)), b;
}
function Rn(n, e) {
	const _ = nt.ggirSummaryDenominator(n, e);
	if (_[2]) throw $_(_[1]);
	return $_(_[0]);
}
function Cn(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = H_(e, nt.__wbindgen_malloc), i = et, o = nt.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function xn(n) {
	let e, _;
	try {
		const i = V_(n, nt.__wbindgen_malloc), o = et, c = nt.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, $_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		nt.__wbindgen_free(e, _, 1);
	}
}
function Dn(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = H_(e, nt.__wbindgen_malloc), c = et, l = H_(_, nt.__wbindgen_malloc), a = et, s = H_(t, nt.__wbindgen_malloc), w = et, g = nt.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw $_(g[1]);
	return $_(g[0]);
}
function In(n) {
	return nt.initThreadPool(n);
}
function Mn() {
	nt.installPanicHook();
}
function Fn(n) {
	const e = J_(n, nt.__wbindgen_malloc), _ = et, t = nt.interRaterReliability(e, _);
	if (t[2]) throw $_(t[1]);
	return $_(t[0]);
}
function Wn(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = nt.irregularInternalDays(_, t, e);
	var i = D_(r[0], r[1]).slice();
	return nt.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Un(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = H_(e, nt.__wbindgen_malloc), c = et, l = H_(_, nt.__wbindgen_malloc), a = et, s = nt.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw $_(s[1]);
	return $_(s[0]);
}
function zn(n, e, _) {
	const t = H_(n, nt.__wbindgen_malloc), r = et, i = nt.markerIndexRange(t, r, e, _);
	var o = I_(i[0], i[1]).slice();
	return nt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Pn(n, e, _, t, r, i, o) {
	const c = H_(n, nt.__wbindgen_malloc), l = et, a = H_(e, nt.__wbindgen_malloc), s = et, w = nt.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw $_(w[1]);
	return $_(w[0]);
}
function On(n) {
	const e = H_(n, nt.__wbindgen_malloc), _ = et, t = nt.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Tn(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = H_(e, nt.__wbindgen_malloc), i = et, o = nt.midSleepClockHours(_, t, r, i);
	var c = x_(o[0], o[1]).slice();
	return nt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Nn(n, e, _, t, r) {
	const i = H_(n, nt.__wbindgen_malloc), o = et, c = H_(e, nt.__wbindgen_malloc), l = et, a = H_(_, nt.__wbindgen_malloc), s = et, w = nt.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw $_(w[1]);
	return $_(w[0]);
}
function Gn(n) {
	const e = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), _ = et, t = nt.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = O_(t[0], t[1]).slice(), nt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function En(n, e, _, t, r) {
	const i = H_(_, nt.__wbindgen_malloc), o = et, c = H_(t, nt.__wbindgen_malloc), l = et, a = H_(r, nt.__wbindgen_malloc), s = et, w = nt.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw $_(w[1]);
	return $_(w[0]);
}
function jn(n, e, _, t) {
	let r, i;
	try {
		const l = B_(n, nt.__wbindgen_malloc), a = et, s = X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), w = et, g = nt.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, $_(g[2]);
		return r = o, i = c, O_(o, c);
	} finally {
		nt.__wbindgen_free(r, i, 1);
	}
}
function Ln(n) {
	const e = H_(n, nt.__wbindgen_malloc), _ = et, t = nt.nonwearInSleepCounts(e, _);
	if (t[2]) throw $_(t[1]);
	return $_(t[0]);
}
function Bn(n) {
	const e = nt.nonwearSleepOverlap(n);
	if (e[2]) throw $_(e[1]);
	return $_(e[0]);
}
function Vn(n, e, _) {
	const t = H_(n, nt.__wbindgen_malloc), r = et, i = H_(e, nt.__wbindgen_malloc), o = et, c = nt.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw $_(c[1]);
	return $_(c[0]);
}
function Hn(n, e, _, t, r, i) {
	const o = X_(r, nt.__wbindgen_malloc, nt.__wbindgen_realloc), c = et, l = nt.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw $_(l[2]);
	var a = x_(l[0], l[1]).slice();
	return nt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function Jn(n) {
	const e = nt.parseActigraphCsvBuffered(n);
	if (e[2]) throw $_(e[1]);
	return $_(e[0]);
}
function Xn(n, e, _, t) {
	const r = V_(n, nt.__wbindgen_malloc), i = et;
	var o = L_(e) ? 0 : X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), c = et, l = L_(_) ? 0 : J_(_, nt.__wbindgen_malloc), a = et, s = L_(t) ? 0 : X_(t, nt.__wbindgen_malloc, nt.__wbindgen_realloc), w = et;
	const g = nt.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw $_(g[1]);
	return $_(g[0]);
}
function $n(n, e) {
	const _ = V_(n, nt.__wbindgen_malloc), t = et, r = X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), i = et, o = nt.parseEpochSeries(_, t, r, i);
	if (o[2]) throw $_(o[1]);
	return $_(o[0]);
}
function qn(n) {
	const e = V_(n, nt.__wbindgen_malloc), _ = et, t = nt.parseGeneactivBin(e, _);
	if (t[2]) throw $_(t[1]);
	return $_(t[0]);
}
function Zn() {
	const n = nt.parseGeneactivCsvBuffered();
	if (n[2]) throw $_(n[1]);
	return $_(n[0]);
}
function Yn(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = V_(e, nt.__wbindgen_malloc), c = et, l = V_(_, nt.__wbindgen_malloc), a = et, s = nt.participantValidity(r, i, o, c, l, a, L_(t) ? 0 : A_(t));
	if (s[2]) throw $_(s[1]);
	return $_(s[0]);
}
function Kn(n, e, _, t, r) {
	const i = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et, c = H_(e, nt.__wbindgen_malloc), l = et;
	var a = L_(_) ? 0 : H_(_, nt.__wbindgen_malloc), s = et;
	const w = nt.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw $_(w[1]);
	return $_(w[0]);
}
function Qn(n) {
	let e, _;
	try {
		const i = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et, c = nt.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, $_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		nt.__wbindgen_free(e, _, 1);
	}
}
function ne(n, e, _, t, r, i) {
	const o = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), c = et, l = H_(e, nt.__wbindgen_malloc), a = et, s = H_(_, nt.__wbindgen_malloc), w = et, g = V_(t, nt.__wbindgen_malloc), b = et, u = V_(r, nt.__wbindgen_malloc), d = et, f = X_(i, nt.__wbindgen_malloc, nt.__wbindgen_realloc), m = et, h = nt.placeMarkersBatch(o, c, l, a, s, w, g, b, u, d, f, m);
	if (h[2]) throw $_(h[1]);
	return $_(h[0]);
}
function ee(n, e, _, t, r, i, o, c, l, a, s, w, g, b, u, d, f, m, h, p) {
	const y = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), v = et, k = H_(e, nt.__wbindgen_malloc), S = et, A = B_(_, nt.__wbindgen_malloc), R = et, C = H_(t, nt.__wbindgen_malloc), x = et, D = B_(r, nt.__wbindgen_malloc), I = et, M = V_(i, nt.__wbindgen_malloc), F = et, W = B_(o, nt.__wbindgen_malloc), U = et, z = V_(c, nt.__wbindgen_malloc), P = et, O = B_(l, nt.__wbindgen_malloc), T = et, N = H_(a, nt.__wbindgen_malloc), G = et, E = B_(s, nt.__wbindgen_malloc), j = et, L = H_(w, nt.__wbindgen_malloc), B = et, V = B_(g, nt.__wbindgen_malloc), H = et, J = H_(b, nt.__wbindgen_malloc), X = et, $ = B_(u, nt.__wbindgen_malloc), q = et, Z = H_(d, nt.__wbindgen_malloc), Y = et, K = B_(f, nt.__wbindgen_malloc), Q = et, nn = V_(m, nt.__wbindgen_malloc), en = et, _n = B_(h, nt.__wbindgen_malloc), tn = et;
	var rn = L_(p) ? 0 : X_(p, nt.__wbindgen_malloc, nt.__wbindgen_realloc), on = et;
	const cn = nt.placeMarkersTyped(y, v, k, S, A, R, C, x, D, I, M, F, W, U, z, P, O, T, N, G, E, j, L, B, V, H, J, X, $, q, Z, Y, K, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw $_(cn[1]);
	return $_(cn[0]);
}
function _e(n) {
	let e, _;
	try {
		const i = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et, c = nt.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, $_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		nt.__wbindgen_free(e, _, 1);
	}
}
function te(n, e, _, t) {
	const r = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), i = et, o = H_(e, nt.__wbindgen_malloc), c = et, l = H_(_, nt.__wbindgen_malloc), a = et, s = V_(t, nt.__wbindgen_malloc), w = et, g = nt.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw $_(g[1]);
	return $_(g[0]);
}
function re(n, e, _, t, r, i, o, c, l, a, s) {
	const w = V_(n, nt.__wbindgen_malloc), g = et, b = X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), u = et;
	var d = L_(_) ? 0 : V_(_, nt.__wbindgen_malloc), f = et, m = L_(t) ? 0 : V_(t, nt.__wbindgen_malloc), h = et, p = L_(r) ? 0 : V_(r, nt.__wbindgen_malloc), y = et, v = L_(i) ? 0 : V_(i, nt.__wbindgen_malloc), k = et, S = L_(o) ? 0 : V_(o, nt.__wbindgen_malloc), A = et, R = L_(c) ? 0 : X_(c, nt.__wbindgen_malloc, nt.__wbindgen_realloc), C = et, x = L_(l) ? 0 : X_(l, nt.__wbindgen_malloc, nt.__wbindgen_realloc), D = et, I = L_(a) ? 0 : X_(a, nt.__wbindgen_malloc, nt.__wbindgen_realloc), M = et, F = L_(s) ? 0 : X_(s, nt.__wbindgen_malloc, nt.__wbindgen_realloc), W = et;
	const U = nt.prepareGgirRecording(w, g, b, u, d, f, m, h, p, y, v, k, S, A, R, C, x, D, I, M, F, W);
	if (U[2]) throw $_(U[1]);
	return $_(U[0]);
}
function ie(n, e) {
	const _ = V_(n, nt.__wbindgen_malloc), t = et;
	var r = L_(e) ? 0 : X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), i = et;
	const o = nt.processGt3xPart1(_, t, r, i);
	if (o[2]) throw $_(o[1]);
	return $_(o[0]);
}
function oe(n, e, _) {
	const t = V_(n, nt.__wbindgen_malloc), r = et;
	var i = L_(_) ? 0 : X_(_, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et;
	const c = nt.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw $_(c[1]);
	return $_(c[0]);
}
function ce(n, e, _, t, r, i, o) {
	const c = H_(n, nt.__wbindgen_malloc), l = et, a = H_(e, nt.__wbindgen_malloc), s = et, w = H_(_, nt.__wbindgen_malloc), g = et;
	var b = L_(i) ? 0 : X_(i, nt.__wbindgen_malloc, nt.__wbindgen_realloc), u = et, d = L_(o) ? 0 : X_(o, nt.__wbindgen_malloc, nt.__wbindgen_realloc), f = et;
	const m = nt.processRawXyz(c, l, a, s, w, g, t, r, b, u, d, f);
	if (m[2]) throw $_(m[1]);
	return $_(m[0]);
}
function le(n, e, _, t, r, i, o, c) {
	const l = H_(n, nt.__wbindgen_malloc), a = et, s = H_(e, nt.__wbindgen_malloc), w = et, g = H_(_, nt.__wbindgen_malloc), b = et, u = H_(t, nt.__wbindgen_malloc), d = et;
	var f = L_(i) ? 0 : X_(i, nt.__wbindgen_malloc, nt.__wbindgen_realloc), m = et, h = L_(o) ? 0 : X_(o, nt.__wbindgen_malloc, nt.__wbindgen_realloc), p = et, y = L_(c) ? 0 : H_(c, nt.__wbindgen_malloc), v = et;
	const k = nt.processRawXyzImputed(l, a, s, w, g, b, u, d, r, f, m, h, p, y, v);
	if (k[2]) throw $_(k[1]);
	return $_(k[0]);
}
function ae(n, e, _, t, r, i, o, c, l, a) {
	const s = H_(n, nt.__wbindgen_malloc), w = et, g = H_(e, nt.__wbindgen_malloc), b = et, u = H_(_, nt.__wbindgen_malloc), d = et, f = H_(t, nt.__wbindgen_malloc), m = et;
	var h = L_(i) ? 0 : X_(i, nt.__wbindgen_malloc, nt.__wbindgen_realloc), p = et, y = L_(c) ? 0 : X_(c, nt.__wbindgen_malloc, nt.__wbindgen_realloc), v = et, k = L_(a) ? 0 : H_(a, nt.__wbindgen_malloc), S = et;
	const A = nt.processRawXyzImputedWithEpoch(s, w, g, b, u, d, f, m, r, h, p, o, y, v, L_(l) ? 16777215 : l ? 1 : 0, k, S);
	if (A[2]) throw $_(A[1]);
	return $_(A[0]);
}
function se(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = V_(e, nt.__wbindgen_malloc), c = et, l = H_(t, nt.__wbindgen_malloc), a = et, s = nt.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = M_(s[0], s[1]).slice();
	return nt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function we(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = H_(e, nt.__wbindgen_malloc), c = et, l = H_(_, nt.__wbindgen_malloc), a = et, s = nt.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw $_(s[1]);
	return $_(s[0]);
}
function ge(n, e, _) {
	const t = V_(n, nt.__wbindgen_malloc), r = et;
	var i = L_(e) ? 0 : X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et;
	const c = nt.readGgirMeta(t, r, i, o, L_(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw $_(c[1]);
	return $_(c[0]);
}
function be(n, e) {
	const _ = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), t = et;
	var r = L_(e) ? 0 : X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), i = et;
	const o = nt.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw $_(o[1]);
	return $_(o[0]);
}
function ue() {
	return nt.recommended_chunk_size_mb() >>> 0;
}
function de(n, e) {
	const _ = J_(e, nt.__wbindgen_malloc), t = et, r = nt.rerunGgirResults(n, _, t);
	if (r[2]) throw $_(r[1]);
	return $_(r[0]);
}
function fe(n) {
	const e = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), _ = et, t = nt.resolveTimezone(e, _);
	if (t[2]) throw $_(t[1]);
	return $_(t[0]);
}
function me(n, e, _) {
	const t = H_(n, nt.__wbindgen_malloc), r = et, i = H_(e, nt.__wbindgen_malloc), o = et, c = B_(_, nt.__wbindgen_malloc), l = et, a = nt.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw $_(a[2]);
	var s = D_(a[0], a[1]).slice();
	return nt.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function he(n, e, _, t, r, i, o, c, l, a, s, w, g, b) {
	const u = V_(n, nt.__wbindgen_malloc), d = et, f = X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), m = et;
	var h = L_(_) ? 0 : V_(_, nt.__wbindgen_malloc), p = et, y = L_(t) ? 0 : V_(t, nt.__wbindgen_malloc), v = et, k = L_(r) ? 0 : V_(r, nt.__wbindgen_malloc), S = et, A = L_(i) ? 0 : V_(i, nt.__wbindgen_malloc), R = et, C = L_(o) ? 0 : V_(o, nt.__wbindgen_malloc), x = et, D = L_(c) ? 0 : X_(c, nt.__wbindgen_malloc, nt.__wbindgen_realloc), I = et, M = L_(l) ? 0 : X_(l, nt.__wbindgen_malloc, nt.__wbindgen_realloc), F = et, W = L_(a) ? 0 : J_(a, nt.__wbindgen_malloc), U = et, z = L_(w) ? 0 : X_(w, nt.__wbindgen_malloc, nt.__wbindgen_realloc), P = et, O = L_(g) ? 0 : X_(g, nt.__wbindgen_malloc, nt.__wbindgen_realloc), T = et;
	const N = nt.reviewGgirResults(u, d, f, m, h, p, y, v, k, S, A, R, C, x, D, I, M, F, W, U, s, z, P, O, T, L_(b) ? 4294967297 : b >>> 0);
	if (N[2]) throw $_(N[1]);
	return $_(N[0]);
}
function pe(n) {
	const e = J_(n, nt.__wbindgen_malloc), _ = et, t = nt.reviewNonwearFile(e, _);
	if (t[2]) throw $_(t[1]);
	return $_(t[0]);
}
function ye(n) {
	const e = J_(n, nt.__wbindgen_malloc), _ = et, t = nt.reviewNonwearTotals(e, _);
	if (t[2]) throw $_(t[1]);
	return $_(t[0]);
}
function ve(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = nt.roundCountStorage(_, t, e);
	var i = x_(r[0], r[1]).slice();
	return nt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function ke(n) {
	const e = nt.runFullPipelineV1(n);
	if (e[2]) throw $_(e[1]);
	return $_(e[0]);
}
function Se(n) {
	const e = nt.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw $_(e[1]);
	return $_(e[0]);
}
function Ae(n) {
	const e = nt.runGgirPart3(n);
	if (e[2]) throw $_(e[1]);
	return $_(e[0]);
}
function Re(n) {
	const e = J_(n, nt.__wbindgen_malloc), _ = et, t = nt.scoreAllDays(e, _);
	if (t[3]) throw $_(t[2]);
	var r = D_(t[0], t[1]).slice();
	return nt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Ce(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = nt.scoreColeKripke(_, t, e);
	var i = M_(r[0], r[1]).slice();
	return nt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function xe(n) {
	let e, _;
	try {
		const i = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et, c = nt.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, $_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		nt.__wbindgen_free(e, _, 1);
	}
}
function De(n, e, _) {
	const t = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), r = et, i = V_(e, nt.__wbindgen_malloc), o = et, c = B_(_, nt.__wbindgen_malloc), l = et, a = nt.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw $_(a[1]);
	return $_(a[0]);
}
function Ie(n) {
	let e, _;
	try {
		const i = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et, c = nt.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, $_(c[2]);
		return e = t, _ = r, O_(t, r);
	} finally {
		nt.__wbindgen_free(e, _, 1);
	}
}
function Me(n, e, _, t, r, i) {
	const o = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), c = et, l = H_(e, nt.__wbindgen_malloc), a = et, s = H_(_, nt.__wbindgen_malloc), w = et, g = H_(t, nt.__wbindgen_malloc), b = et, u = nt.scoreEpochsTyped(o, c, l, a, s, w, g, b, r, i);
	if (u[2]) throw $_(u[1]);
	return $_(u[0]);
}
function Fe(n, e, _) {
	const t = H_(n, nt.__wbindgen_malloc), r = et;
	var i = L_(e) ? 0 : X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et, c = L_(_) ? 0 : H_(_, nt.__wbindgen_malloc), l = et;
	const a = nt.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw $_(a[2]);
	var s = M_(a[0], a[1]).slice();
	return nt.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function We(n) {
	const e = nt.scoreGgirHasibVariant(n);
	if (e[2]) throw $_(e[1]);
	return $_(e[0]);
}
function Ue(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = nt.scoreSadeh(_, t, e);
	var i = M_(r[0], r[1]).slice();
	return nt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function ze(n, e, _) {
	const t = X_(_, nt.__wbindgen_malloc, nt.__wbindgen_realloc), r = et, i = nt.screensRestIntervals(n, L_(e) ? 0 : A_(e), t, r);
	if (i[2]) throw $_(i[1]);
	return $_(i[0]);
}
function Pe(n) {
	const e = J_(n, nt.__wbindgen_malloc), _ = et, t = nt.settleManualNonwearNights(e, _);
	if (t[3]) throw $_(t[2]);
	var r = D_(t[0], t[1]).slice();
	return nt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Oe(n) {
	const e = V_(n, nt.__wbindgen_malloc), _ = et, t = nt.sha256StreamFeed(e, _);
	if (t[1]) throw $_(t[0]);
}
function Te() {
	let n, e;
	try {
		const r = nt.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, $_(r[2]);
		return n = _, e = t, O_(_, t);
	} finally {
		nt.__wbindgen_free(n, e, 1);
	}
}
function Ne() {
	nt.sha256StreamStart();
}
function Ge(n, e) {
	const _ = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), t = et, r = nt.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = O_(r[0], r[1]).slice(), nt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function Ee(n, e, _, t, r) {
	const i = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et, c = H_(e, nt.__wbindgen_malloc), l = et, a = B_(_, nt.__wbindgen_malloc), s = et, w = H_(t, nt.__wbindgen_malloc), g = et, b = B_(r, nt.__wbindgen_malloc), u = et, d = nt.sleepRegularityIndex(i, o, c, l, a, s, w, g, b, u);
	if (d[3]) throw $_(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function je(n, e) {
	const _ = nt.sleepWakeScores(n, L_(e) ? 0 : A_(e));
	if (_[2]) throw $_(_[1]);
	return $_(_[0]);
}
function Le(n) {
	const e = J_(n, nt.__wbindgen_malloc), _ = et, t = nt.sourceLabelsWallClockMs(e, _);
	var r = x_(t[0], t[1]).slice();
	return nt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function Be(n, e, _) {
	const t = H_(n, nt.__wbindgen_malloc), r = et, i = J_(e, nt.__wbindgen_malloc), o = et, c = H_(_, nt.__wbindgen_malloc), l = et, a = nt.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw $_(a[2]);
	let s;
	return 0 !== a[0] && (s = x_(a[0], a[1]).slice(), nt.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function Ve(n) {
	return nt.startThreadPool(n);
}
function He(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = V_(e, nt.__wbindgen_malloc), c = et, l = H_(_, nt.__wbindgen_malloc), a = et, s = H_(t, nt.__wbindgen_malloc), w = et, g = nt.statesInPeriods(r, i, o, c, l, a, s, w);
	var b = M_(g[0], g[1]).slice();
	return nt.__wbindgen_free(g[0], 1 * g[1], 1), b;
}
function Je(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = J_(e, nt.__wbindgen_malloc), i = et, o = nt.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw $_(o[2]);
	var c = x_(o[0], o[1]).slice();
	return nt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Xe(n) {
	const e = V_(n, nt.__wbindgen_malloc), _ = et, t = nt.streamParseFeed(e, _);
	if (t[2]) throw $_(t[1]);
	return t[0] >>> 0;
}
function $e() {
	const n = nt.streamParseFinishChunk();
	if (n[2]) throw $_(n[1]);
	return _.__wrap(n[0]);
}
function qe(n) {
	const e = nt.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw $_(e[1]);
	return _.__wrap(e[0]);
}
function Ze(n, e, _) {
	var t = L_(_) ? 0 : X_(_, nt.__wbindgen_malloc, nt.__wbindgen_realloc), r = et;
	const i = nt.streamParseStart(n, e, t, r);
	if (i[1]) throw $_(i[0]);
}
function Ye(n, e, _, t, r) {
	var i = L_(t) ? 0 : X_(t, nt.__wbindgen_malloc, nt.__wbindgen_realloc), o = et;
	const c = nt.streamParseStartWithEpoch(n, e, _, i, o, !L_(r), L_(r) ? 0 : r);
	if (c[1]) throw $_(c[0]);
}
function Ke(n, e) {
	const _ = V_(n, nt.__wbindgen_malloc), t = et, r = nt.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw $_(r[1]);
	return $_(r[0]);
}
function Qe(n) {
	const e = nt.summarizeExportGroups(n);
	if (e[3]) throw $_(e[2]);
	var _ = D_(e[0], e[1]).slice();
	return nt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function n_(n) {
	const e = nt.summarizePhysicalActivityDays(n);
	if (e[2]) throw $_(e[1]);
	return $_(e[0]);
}
function e_(n) {
	const e = nt.summarizePhysicalActivityTrace(n);
	if (e[2]) throw $_(e[1]);
	return $_(e[0]);
}
function __() {
	return 0 !== nt.threadPoolReady();
}
function t_(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = nt.thresholdProbabilities(_, t, e);
	var i = M_(r[0], r[1]).slice();
	return nt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function r_(n) {
	const e = J_(n, nt.__wbindgen_malloc), _ = et, t = nt.timeSemantics(e, _);
	if (t[3]) throw $_(t[2]);
	var r = D_(t[0], t[1]).slice();
	return nt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function i_(n, e, _) {
	const t = H_(n, nt.__wbindgen_malloc), r = et, i = nt.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw $_(i[2]);
	var o = D_(i[0], i[1]).slice();
	return nt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function o_(n, e, _) {
	const t = nt.uniformTimestamps(n, e, _);
	var r = x_(t[0], t[1]).slice();
	return nt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function c_(n) {
	const e = H_(n, nt.__wbindgen_malloc), _ = et, t = nt.utcDayIndex(e, _);
	if (t[2]) throw $_(t[1]);
	return $_(t[0]);
}
function l_(n) {
	const e = V_(n, nt.__wbindgen_malloc), _ = et, t = nt.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function a_(n, e) {
	const _ = H_(n, nt.__wbindgen_malloc), t = et, r = nt.validWearDays(_, t, L_(e) ? 0 : A_(e));
	if (r[3]) throw $_(r[2]);
	var i = M_(r[0], r[1]).slice();
	return nt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function s_(n, e, _) {
	const t = H_(n, nt.__wbindgen_malloc), r = et, i = nt.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw $_(i[1]);
	return $_(i[0]);
}
function w_(n) {
	const e = H_(n, nt.__wbindgen_malloc), _ = et, t = nt.wallClockLabels(e, _);
	var r = D_(t[0], t[1]).slice();
	return nt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function g_(n, e, _) {
	const t = V_(n, nt.__wbindgen_malloc), r = et, i = J_(_, nt.__wbindgen_malloc), o = et, c = nt.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw $_(c[2]);
	var l = M_(c[0], c[1]).slice();
	return nt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var b_ = class n {
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
		nt.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		nt.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return nt.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return nt.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return nt.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function u_(n) {
	nt.wbg_rayon_start_worker(n);
}
function d_(n, e) {
	const _ = X_(n, nt.__wbindgen_malloc, nt.__wbindgen_realloc), t = et;
	var r = L_(e) ? 0 : X_(e, nt.__wbindgen_malloc, nt.__wbindgen_realloc), i = et;
	const o = nt.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw $_(o[1]);
	return $_(o[0]);
}
function f_(n) {
	const e = J_(n, nt.__wbindgen_malloc), _ = et, t = nt.weekendDates(e, _);
	var r = M_(t[0], t[1]).slice();
	return nt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function m_(n, e, _, t) {
	const r = H_(n, nt.__wbindgen_malloc), i = et, o = nt.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function h_(n, e, _, t, r) {
	const i = H_(n, nt.__wbindgen_malloc), o = et, c = H_(e, nt.__wbindgen_malloc), l = et, a = H_(_, nt.__wbindgen_malloc), s = et, w = nt.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw $_(w[1]);
	return $_(w[0]);
}
function p_(e) {
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
				const _ = X_(String(e), nt.__wbindgen_malloc, nt.__wbindgen_realloc), t = et;
				W_().setInt32(n + 4, t, !0), W_().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				W_().setBigInt64(n + 8, L_(_) ? BigInt(0) : _, !0), W_().setInt32(n + 0, !L_(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return L_(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = X_(C_(e), nt.__wbindgen_malloc, nt.__wbindgen_realloc), t = et;
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
				return nt.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return Q_;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const _ = "number" == typeof e ? e : void 0;
				W_().setFloat64(n + 8, L_(_) ? 0 : _, !0), W_().setInt32(n + 0, !L_(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = L_(_) ? 0 : X_(_, nt.__wbindgen_malloc, nt.__wbindgen_realloc), r = et;
				W_().setInt32(n + 4, r, !0), W_().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(O_(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return j_(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return j_(function(n, e, _, t) {
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
					nt.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return j_(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return j_(function(n, e) {
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
				return new Uint32Array(I_(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(x_(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== U_ && U_.buffer === nt.memory.buffer || (U_ = new Float32Array(nt.memory.buffer)), U_).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return j_(function(n) {
					return n.next();
				}, arguments);
			},
			__wbg_next_7646edaa39458ef7: function(n) {
				return n.next;
			},
			__wbg_ownKeys_0231887680f0f945: function() {
				return j_(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(M_(n, e), _);
			},
			__wbg_prototypesetcall_c5875dab42ff6b97: function(n, e, _) {
				Float64Array.prototype.set.call(x_(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return j_(function(n, e, _) {
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
				const _ = X_(e.stack, nt.__wbindgen_malloc, nt.__wbindgen_realloc), t = et;
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
				}(e, _, b_.__wrap(t));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return L_(n) ? 0 : A_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return L_(n) ? 0 : A_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return L_(n) ? 0 : A_(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return L_(n) ? 0 : A_(n);
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
						0 === --t.cnt && (nt.__wbindgen_destroy_closure(t.a, t.b), t.a = 0, R_.unregister(t));
					}, R_.register(r, t, t), r;
				}(n, e, y_);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return M_(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return O_(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = nt.__wbindgen_externrefs, e = n.grow(4);
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
function y_(n, e, _) {
	nt.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, _);
}
Symbol.dispose && (b_.prototype[Symbol.dispose] = b_.prototype.free);
const v_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => nt.__wbg_aw5batch_free(n >>> 0, 1)), k_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => nt.__wbg_streamchunkresult_free(n >>> 0, 1)), S_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => nt.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function A_(n) {
	const e = nt.__externref_table_alloc();
	return nt.__wbindgen_externrefs.set(e, n), e;
}
const R_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => nt.__wbindgen_destroy_closure(n.a, n.b));
function C_(n) {
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
		e > 0 && (_ += C_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + C_(n[t]);
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
function x_(n, e) {
	return n >>>= 0, P_().subarray(n / 8, n / 8 + e);
}
function D_(n, e) {
	n >>>= 0;
	const _ = W_(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(nt.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return nt.__externref_drop_slice(n, e), t;
}
function I_(n, e) {
	return n >>>= 0, N_().subarray(n / 4, n / 4 + e);
}
function M_(n, e) {
	return n >>>= 0, E_().subarray(n / 1, n / 1 + e);
}
let F_ = null;
function W_() {
	return null !== F_ && F_.buffer === nt.memory.buffer || (F_ = new DataView(nt.memory.buffer)), F_;
}
let U_ = null, z_ = null;
function P_() {
	return null !== z_ && z_.buffer === nt.memory.buffer || (z_ = new Float64Array(nt.memory.buffer)), z_;
}
function O_(n, e) {
	return function(n, e) {
		return Y_ += e, Y_ >= Z_ && (q_ = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), q_.decode(), Y_ = e), q_.decode(E_().slice(n, n + e));
	}(n >>>= 0, e);
}
let T_ = null;
function N_() {
	return null !== T_ && T_.buffer === nt.memory.buffer || (T_ = new Uint32Array(nt.memory.buffer)), T_;
}
let G_ = null;
function E_() {
	return null !== G_ && G_.buffer === nt.memory.buffer || (G_ = new Uint8Array(nt.memory.buffer)), G_;
}
function j_(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = A_(_);
		nt.__wbindgen_exn_store(n);
	}
}
function L_(n) {
	return null == n;
}
function B_(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return N_().set(n, _ / 4), et = n.length, _;
}
function V_(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return E_().set(n, _ / 1), et = n.length, _;
}
function H_(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return P_().set(n, _ / 8), et = n.length, _;
}
function J_(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = A_(n[t]);
		W_().setUint32(_ + 4 * t, e, !0);
	}
	return et = n.length, _;
}
function X_(n, e, _) {
	if (void 0 === _) {
		const _ = K_.encode(n), t = e(_.length, 1) >>> 0;
		return E_().subarray(t, t + _.length).set(_), et = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = E_();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = E_().subarray(r + o, r + t);
		o += K_.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return et = o, r;
}
function $_(n) {
	const e = nt.__wbindgen_externrefs.get(n);
	return nt.__externref_table_dealloc(n), e;
}
let q_ = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
q_ && q_.decode();
const Z_ = 2146435072;
let Y_ = 0;
const K_ = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
K_ && (K_.encodeInto = function(n, e) {
	const _ = K_.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let Q_, nt, et = 0;
function _t(n, e, _) {
	if (nt = n.exports, Q_ = e, F_ = null, U_ = null, z_ = null, T_ = null, G_ = null, void 0 !== _ && ("number" != typeof _ || 0 === _ || _ % 65536 != 0)) throw new Error("invalid stack size");
	return nt.__wbindgen_start(_), nt;
}
function tt(n, e) {
	if (void 0 !== nt) return nt;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const t = p_(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), _t(new WebAssembly.Instance(n, t), n, _);
}
async function rt(n, e) {
	if (void 0 !== nt) return nt;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-D0xInSF_.wasm", "" + import.meta.url));
	const t = p_(e);
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
	return _t(r, i, _);
}
export { e as Aw5Batch, _ as StreamChunkResult, t as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actiwareWakeThreshold, o as aggregateEpochSeries, c as analysisDatesOf, l as analysisWindowBounds, a as analysisWindowSlice, s as classifyActimetricPreschoolWristRf, w as classifyActimetricPreschoolWristRfLagLead, g as clippedUnionHours, b as compareNonwearDetectorMasks, u as computeAnglez5s, d as computeCircadian, f as computeCircadianTyped, m as computeEnmo5s, h as computeMimsUnit, p as computeMimsUnitDataframe, y as computeNightDifficulty, v as computeNightDifficultyTyped, k as computeNightSignals, S as computeNightSignalsTyped, A as computeSleepMetrics, R as configureComputeMemoryBudgetV1, C as consensusDisagreementDetail, x as consensusDisagreements, D as convertBedWakeDaysDiary, I as convertScreensRedcapDiary, M as csvBufferAppend, F as csvBufferClear, W as cutpointEpochCompatibility, U as cutpointToneCodes, z as cutpointsRefusal, rt as default, P as describeColumns, O as detectDetachFromAccelerationG, T as detectDeviceFormat, N as detectGgirHasptVariant, G as detectHdcza, E as detectHourClockJumpMs, j as detectNonwear, L as detectNonwearChoi2011, B as detectNonwearChoi2011Epoch, V as detectNonwearChoi2012Epoch, H as detectNonwearUnified, J as detectNonwearUnifiedBatchTyped, X as dstPlaceholderRuns, $ as effectiveOverrideCutpoints, q as epochAgreement, Z as epochsOverlapping, Y as exportFileNightFigures, K as exportNapAggregate, Q as extractCapsense, nn as foldOntoGrid, en as foldSampleBlocks, _n as foldSleepWakeVotes, tn as foldUniformOntoGrid, rn as fuseNonwearMasks, on as generateActiwareRestIntervals, cn as getComputeCapabilitiesV1, ln as ggir5sWallClockMs, an as ggirAppConfigSummary, sn as ggirConfigValues, wn as ggirDayValidFractions, gn as ggirDaysIncluded, bn as ggirDiaryLogShape, un as ggirDstPlaceholderCuts, dn as ggirIncludeDayCriterionHours, fn as ggirIndicesToWallClockMs, mn as ggirLabelsToStoredMs, hn as ggirManualNightClocks, pn as ggirMilestoneVersion, yn as ggirNonwearApproach, vn as ggirPersonSummaries, kn as ggirRerunProfiles, Sn as ggirSavedNonwearWindows, An as ggirSleeplogStoredClocks, Rn as ggirSummaryDenominator, Cn as gridOffsetWithin, xn as identifyGgirRData, Dn as implausibilityReasons, tt as initSync, In as initThreadPool, Mn as installPanicHook, Fn as interRaterReliability, Wn as irregularInternalDays, Un as lstmSpectralFeatures30s, zn as markerIndexRange, Pn as markerSleepOnsetOffset, On as medianGapSeconds, Tn as midSleepClockHours, Nn as neishabouriCounts, Gn as nextDate, En as nightIntervalOverlap, jn as nonwearContributors, Ln as nonwearInSleepCounts, Bn as nonwearSleepOverlap, Vn as nonwearWeightRuns, Hn as normalizeCutpoints, Jn as parseActigraphCsvBuffered, Xn as parseAw5, $n as parseEpochSeries, qn as parseGeneactivBin, Zn as parseGeneactivCsvBuffered, Yn as participantValidity, Kn as physicalActivitySeriesGrid, Qn as placeMarkers, ne as placeMarkersBatch, ee as placeMarkersTyped, _e as placeNonwearMarkers, te as placeNonwearMarkersTyped, re as prepareGgirRecording, ie as processGt3xPart1, oe as processGt3xPart1WithEpoch, ce as processRawXyz, le as processRawXyzImputed, ae as processRawXyzImputedWithEpoch, se as projectLabelsOntoGrid, we as rasterizePeriods, ge as readGgirMeta, be as readGgirReportCsv, ue as recommended_chunk_size_mb, de as rerunGgirResults, fe as resolveTimezone, me as restoredDstRuns, he as reviewGgirResults, pe as reviewNonwearFile, ye as reviewNonwearTotals, ve as roundCountStorage, ke as runFullPipelineV1, Se as runGgirDeclaredEpochsV1, Ae as runGgirPart3, Re as scoreAllDays, Ce as scoreColeKripke, xe as scoreConsensus, De as scoreConsensusTyped, Ie as scoreEpochs, Me as scoreEpochsTyped, Fe as scoreGgirHasib, We as scoreGgirHasibVariant, Ue as scoreSadeh, ze as screensRestIntervals, Pe as settleManualNonwearNights, Oe as sha256StreamFeed, Te as sha256StreamFinish, Ne as sha256StreamStart, Ge as shiftDate, Ee as sleepRegularityIndex, je as sleepWakeScores, Le as sourceLabelsWallClockMs, Be as spliceDstPlaceholders, Ve as startThreadPool, He as statesInPeriods, Je as storedToGgirLabelsMs, Xe as streamParseFeed, $e as streamParseFinishChunk, qe as streamParseFinishChunkWithProgress, Ze as streamParseStart, Ye as streamParseStartWithEpoch, Ke as summarizeActimetricPreschoolWristRfClasses, Qe as summarizeExportGroups, n_ as summarizePhysicalActivityDays, e_ as summarizePhysicalActivityTrace, __ as threadPoolReady, t_ as thresholdProbabilities, r_ as timeSemantics, i_ as timestampDiscontinuities, o_ as uniformTimestamps, c_ as utcDayIndex, l_ as validStateFraction, a_ as validWearDays, s_ as wallClockDstPlaceholders, w_ as wallClockLabels, g_ as wallMaskOntoGgirGrid, b_ as wbg_rayon_PoolBuilder, u_ as wbg_rayon_start_worker, d_ as wearSiteHasptRouting, f_ as weekendDates, m_ as windowCoverage, h_ as zeroCrossingCounts };
