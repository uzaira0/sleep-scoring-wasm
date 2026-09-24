function n(n, e) {
	return new Promise((t) => {
		n.addEventListener("message", function _({ data: r }) {
			null != r && r.type === e && (n.removeEventListener("message", _), t(r));
		});
	});
}
n(self, "wasm_bindgen_worker_init").then(async (n) => {
	const e = await import(n.mainJS);
	await e.default(n.module, n.memory), postMessage({ type: "wasm_bindgen_worker_ready" }), e.wbg_rayon_start_worker(n.receiver);
});
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, ce.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ce.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Te.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Te.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Te.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Te.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Te.streamchunkresult_axisX(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Te.streamchunkresult_axisY(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Te.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Te.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Te.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ye(n[0], n[1]).slice(), Te.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Te.streamchunkresult_counts(this.__wbg_ptr);
		var e = be(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Te.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = be(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Te.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Te.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return Te.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Te.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Te.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Te.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Te.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ye(n[0], n[1]).slice(), Te.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Te.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Te.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Te.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Te.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Te.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Te.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Te.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = Te.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = be(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Te.streamchunkresult_temperature(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Te.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Te.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Te.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Te.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Te.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Te.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var t = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, ae.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ae.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Te.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Te.streamparseresult_axisX(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Te.streamparseresult_axisY(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Te.streamparseresult_axisZ(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Te.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Te.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ye(n[0], n[1]).slice(), Te.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return Te.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== Te.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Te.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Te.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Te.streamparseresult_temperature(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Te.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Te.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = ge(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function _(n, e, t) {
	const _ = Te.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw Ue(_[1]);
	return Ue(_[0]);
}
function r() {
	let n, e;
	try {
		const t = Te.actoursVersion();
		return n = t[0], e = t[1], ye(t[0], t[1]);
	} finally {
		Te.__wbindgen_free(n, e, 1);
	}
}
function i(n) {
	const e = Te.aggregateEpochSeries(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function o(n) {
	let e, t;
	try {
		const i = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = Be, c = Te.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ue(c[2]);
		return e = _, t = r, ye(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function c(n, e, t, _) {
	const r = Pe(n, Te.__wbindgen_malloc), i = Be, o = Pe(e, Te.__wbindgen_malloc), c = Be, a = Pe(t, Te.__wbindgen_malloc), s = Be, l = Te.classifyActimetricPreschoolWristRf(r, i, o, c, a, s, _);
	if (l[3]) throw Ue(l[2]);
	var u = fe(l[0], l[1]).slice();
	return Te.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function a(n, e, t, _) {
	const r = Pe(n, Te.__wbindgen_malloc), i = Be, o = Pe(e, Te.__wbindgen_malloc), c = Be, a = Pe(t, Te.__wbindgen_malloc), s = Be, l = Te.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, s, _);
	if (l[3]) throw Ue(l[2]);
	var u = fe(l[0], l[1]).slice();
	return Te.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function s(n, e, t, _) {
	const r = Pe(n, Te.__wbindgen_malloc), i = Be, o = Pe(e, Te.__wbindgen_malloc), c = Be, a = Pe(t, Te.__wbindgen_malloc), s = Be, l = Te.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, s, _);
	if (l[3]) throw Ue(l[2]);
	var u = fe(l[0], l[1]).slice();
	return Te.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function l(n, e, t, _) {
	const r = Pe(n, Te.__wbindgen_malloc), i = Be, o = Pe(e, Te.__wbindgen_malloc), c = Be, a = Pe(t, Te.__wbindgen_malloc), s = Be, l = Te.computeAnglez5s(r, i, o, c, a, s, _);
	var u = ge(l[0], l[1]).slice();
	return Te.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function u(n) {
	let e, t;
	try {
		const i = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = Be, c = Te.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ue(c[2]);
		return e = _, t = r, ye(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function w(n, e, t, _, r, i, o) {
	const c = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), a = Be, s = Pe(e, Te.__wbindgen_malloc), l = Be, u = Ce(t, Te.__wbindgen_malloc), w = Be, g = Pe(_, Te.__wbindgen_malloc), b = Be, f = Ce(r, Te.__wbindgen_malloc), d = Be, m = Fe(i, Te.__wbindgen_malloc), h = Be, p = Ce(o, Te.__wbindgen_malloc), y = Be, v = Te.computeCircadianTyped(c, a, s, l, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw Ue(v[1]);
	return Ue(v[0]);
}
function g(n, e, t, _) {
	const r = Pe(n, Te.__wbindgen_malloc), i = Be, o = Pe(e, Te.__wbindgen_malloc), c = Be, a = Pe(t, Te.__wbindgen_malloc), s = Be, l = Te.computeEnmo5s(r, i, o, c, a, s, _);
	var u = ge(l[0], l[1]).slice();
	return Te.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function b(n, e, t, _, r) {
	const i = Pe(n, Te.__wbindgen_malloc), o = Be, c = Pe(e, Te.__wbindgen_malloc), a = Be, s = Pe(t, Te.__wbindgen_malloc), l = Be, u = Te.computeMimsUnit(i, o, c, a, s, l, _, r);
	if (u[2]) throw Ue(u[1]);
	return Ue(u[0]);
}
function f(n, e, t, _, r) {
	const i = Pe(n, Te.__wbindgen_malloc), o = Be, c = Pe(e, Te.__wbindgen_malloc), a = Be, s = Pe(t, Te.__wbindgen_malloc), l = Be, u = Pe(_, Te.__wbindgen_malloc), w = Be, g = Te.computeMimsUnitDataframe(i, o, c, a, s, l, u, w, r);
	if (g[2]) throw Ue(g[1]);
	return Ue(g[0]);
}
function d(n, e, t, _, r) {
	const i = Pe(n, Te.__wbindgen_malloc), o = Be, c = Pe(e, Te.__wbindgen_malloc), a = Be, s = Pe(t, Te.__wbindgen_malloc), l = Be, u = Te.computeMimsUnitTimingBreakdown(i, o, c, a, s, l, _, r);
	if (u[2]) throw Ue(u[1]);
	return Ue(u[0]);
}
function m(n, e, t, _, r) {
	const i = Pe(n, Te.__wbindgen_malloc), o = Be, c = Pe(e, Te.__wbindgen_malloc), a = Be, s = Pe(t, Te.__wbindgen_malloc), l = Be, u = Te.computeMimsUnitValues(i, o, c, a, s, l, _, r);
	if (u[3]) throw Ue(u[2]);
	var w = ge(u[0], u[1]).slice();
	return Te.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function h(n) {
	let e, t;
	try {
		const i = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = Be, c = Te.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ue(c[2]);
		return e = _, t = r, ye(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function p(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), y = Be, v = Pe(e, Te.__wbindgen_malloc), k = Be, A = Ce(t, Te.__wbindgen_malloc), R = Be, S = Pe(_, Te.__wbindgen_malloc), x = Be, C = Ce(r, Te.__wbindgen_malloc), F = Be, P = Fe(i, Te.__wbindgen_malloc), M = Be, U = Ce(o, Te.__wbindgen_malloc), z = Be, W = Fe(c, Te.__wbindgen_malloc), D = Be, I = Ce(a, Te.__wbindgen_malloc), O = Be, T = Pe(s, Te.__wbindgen_malloc), B = Be, E = Ce(l, Te.__wbindgen_malloc), j = Be, N = Pe(u, Te.__wbindgen_malloc), G = Be, L = Ce(w, Te.__wbindgen_malloc), V = Be, X = Pe(g, Te.__wbindgen_malloc), q = Be, H = Ce(b, Te.__wbindgen_malloc), J = Be, $ = Pe(f, Te.__wbindgen_malloc), Y = Be, Z = Ce(d, Te.__wbindgen_malloc), K = Be, Q = Fe(m, Te.__wbindgen_malloc), nn = Be, en = Ce(h, Te.__wbindgen_malloc), tn = Be, _n = Te.computeNightDifficultyTyped(p, y, v, k, A, R, S, x, C, F, P, M, U, z, W, D, I, O, T, B, E, j, N, G, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw Ue(_n[1]);
	return Ue(_n[0]);
}
function y(n) {
	let e, t;
	try {
		const i = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = Be, c = Te.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ue(c[2]);
		return e = _, t = r, ye(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function v(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), y = Be, v = Pe(e, Te.__wbindgen_malloc), k = Be, A = Ce(t, Te.__wbindgen_malloc), R = Be, S = Pe(_, Te.__wbindgen_malloc), x = Be, C = Ce(r, Te.__wbindgen_malloc), F = Be, P = Fe(i, Te.__wbindgen_malloc), M = Be, U = Ce(o, Te.__wbindgen_malloc), z = Be, W = Fe(c, Te.__wbindgen_malloc), D = Be, I = Ce(a, Te.__wbindgen_malloc), O = Be, T = Pe(s, Te.__wbindgen_malloc), B = Be, E = Ce(l, Te.__wbindgen_malloc), j = Be, N = Pe(u, Te.__wbindgen_malloc), G = Be, L = Ce(w, Te.__wbindgen_malloc), V = Be, X = Pe(g, Te.__wbindgen_malloc), q = Be, H = Ce(b, Te.__wbindgen_malloc), J = Be, $ = Pe(f, Te.__wbindgen_malloc), Y = Be, Z = Ce(d, Te.__wbindgen_malloc), K = Be, Q = Fe(m, Te.__wbindgen_malloc), nn = Be, en = Ce(h, Te.__wbindgen_malloc), tn = Be, _n = Te.computeNightSignalsTyped(p, y, v, k, A, R, S, x, C, F, P, M, U, z, W, D, I, O, T, B, E, j, N, G, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw Ue(_n[1]);
	return Ue(_n[0]);
}
function k(n, e, t) {
	const _ = Fe(n, Te.__wbindgen_malloc), r = Be, i = Pe(e, Te.__wbindgen_malloc), o = Be, c = Te.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw Ue(c[1]);
	return Ue(c[0]);
}
function A(n) {
	const e = Te.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function R(n) {
	const e = Fe(n, Te.__wbindgen_malloc), t = Be;
	Te.csvBufferAppend(e, t);
}
function S(n) {
	Te.csvBufferClear(n);
}
function x(n, e) {
	const t = Pe(n, Te.__wbindgen_malloc), _ = Be, r = Pe(e, Te.__wbindgen_malloc), i = Be, o = Te.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw Ue(o[2]);
	var c = fe(o[0], o[1]).slice();
	return Te.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function C(n, e) {
	let t, _;
	try {
		const r = Fe(n, Te.__wbindgen_malloc), i = Be, o = Me(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), c = Be, a = Te.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], ye(a[0], a[1]);
	} finally {
		Te.__wbindgen_free(t, _, 1);
	}
}
function F(n) {
	const e = Te.detectGgirHasptVariant(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function P(n, e, t, _) {
	const r = Pe(n, Te.__wbindgen_malloc), i = Be;
	var o = xe(e) ? 0 : Me(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), c = Be, a = xe(t) ? 0 : Pe(t, Te.__wbindgen_malloc), s = Be, l = xe(_) ? 0 : Pe(_, Te.__wbindgen_malloc), u = Be;
	return Te.detectHdcza(r, i, o, c, a, s, l, u);
}
function M(n) {
	const e = Pe(n, Te.__wbindgen_malloc), t = Be, _ = Te.detectNonwear(e, t);
	var r = fe(_[0], _[1]).slice();
	return Te.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function U(n) {
	const e = Pe(n, Te.__wbindgen_malloc), t = Be, _ = Te.detectNonwearChoi2011(e, t);
	var r = fe(_[0], _[1]).slice();
	return Te.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function z(n) {
	const e = Pe(n, Te.__wbindgen_malloc), t = Be, _ = Te.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw Ue(_[1]);
	return Ue(_[0]);
}
function W(n, e) {
	const t = Pe(n, Te.__wbindgen_malloc), _ = Be, r = Te.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw Ue(r[2]);
	var i = fe(r[0], r[1]).slice();
	return Te.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function D(n) {
	const e = Pe(n, Te.__wbindgen_malloc), t = Be, _ = Te.detectNonwearChoi2012(e, t);
	var r = fe(_[0], _[1]).slice();
	return Te.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function I(n) {
	const e = Pe(n, Te.__wbindgen_malloc), t = Be, _ = Te.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw Ue(_[1]);
	return Ue(_[0]);
}
function O(n) {
	const e = Pe(n, Te.__wbindgen_malloc), t = Be, _ = Te.detectNonwearChoiBouts(e, t);
	if (_[2]) throw Ue(_[1]);
	return Ue(_[0]);
}
function T(n) {
	let e, t;
	try {
		const i = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = Be, c = Te.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ue(c[2]);
		return e = _, t = r, ye(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function B(n, e, t, _, r, i, o) {
	const c = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), a = Be, s = Me(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), l = Be, u = Pe(t, Te.__wbindgen_malloc), w = Be, g = Pe(_, Te.__wbindgen_malloc), b = Be, f = Pe(r, Te.__wbindgen_malloc), d = Be, m = Te.detectNonwearUnifiedBatchTyped(c, a, s, l, u, w, g, b, f, d, i, o);
	if (m[2]) throw Ue(m[1]);
	return Ue(m[0]);
}
function E(n, e, t, _, r) {
	const i = Pe(n, Te.__wbindgen_malloc), o = Be, c = Pe(e, Te.__wbindgen_malloc), a = Be, s = Pe(t, Te.__wbindgen_malloc), l = Be, u = Pe(_, Te.__wbindgen_malloc), w = Be, g = Te.epochRawData(i, o, c, a, s, l, u, w, r);
	if (g[2]) throw Ue(g[1]);
	return Ue(g[0]);
}
function j(n, e, t) {
	const _ = Pe(n, Te.__wbindgen_malloc), r = Be, i = Pe(e, Te.__wbindgen_malloc), o = Be, c = Te.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw Ue(c[1]);
	return Ue(c[0]);
}
function N(n, e) {
	let t, _;
	try {
		const o = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), c = Be, a = Me(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), s = Be, l = Te.executeHeroRuntime(o, c, a, s);
		var r = l[0], i = l[1];
		if (l[3]) throw r = 0, i = 0, Ue(l[2]);
		return t = r, _ = i, ye(r, i);
	} finally {
		Te.__wbindgen_free(t, _, 1);
	}
}
function G(n) {
	const e = Fe(n, Te.__wbindgen_malloc), t = Be, _ = Te.extractCapsense(e, t);
	if (_[2]) throw Ue(_[1]);
	return Ue(_[0]);
}
function L(n, e) {
	const t = Te.generateActiwareRestIntervals(n, e);
	if (t[2]) throw Ue(t[1]);
	return Ue(t[0]);
}
function V() {
	const n = Te.getComputeCapabilitiesV1();
	if (n[2]) throw Ue(n[1]);
	return Ue(n[0]);
}
function X(n) {
	return Te.initThreadPool(n);
}
function q() {
	Te.installPanicHook();
}
function H(n) {
	const e = Fe(n, Te.__wbindgen_malloc), t = Be;
	return 0 !== Te.isGeneactivFormat(e, t);
}
function J(n, e, t, _) {
	const r = Pe(n, Te.__wbindgen_malloc), i = Be, o = Pe(e, Te.__wbindgen_malloc), c = Be, a = Pe(t, Te.__wbindgen_malloc), s = Be, l = Te.lstmSpectralFeatures30s(r, i, o, c, a, s, _);
	if (l[2]) throw Ue(l[1]);
	return Ue(l[0]);
}
function $(n, e, t, _, r) {
	const i = Pe(n, Te.__wbindgen_malloc), o = Be, c = Pe(e, Te.__wbindgen_malloc), a = Be, s = Pe(t, Te.__wbindgen_malloc), l = Be, u = Te.neishabouriCounts(i, o, c, a, s, l, _, r);
	if (u[2]) throw Ue(u[1]);
	return Ue(u[0]);
}
function Y(n, e) {
	const t = Fe(n, Te.__wbindgen_malloc), _ = Be, r = Te.parseActigraphCsv(t, _, e);
	if (r[2]) throw Ue(r[1]);
	return Ue(r[0]);
}
function Z(n) {
	const e = Te.parseActigraphCsvBuffered(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function K(n, e, t, _) {
	const r = Fe(n, Te.__wbindgen_malloc), i = Be;
	var o = xe(e) ? 0 : Me(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), c = Be, a = xe(_) ? 0 : Me(_, Te.__wbindgen_malloc, Te.__wbindgen_realloc), s = Be;
	const l = Te.parseAw5(r, i, o, c, xe(t) ? 0 : le(t), a, s);
	if (l[2]) throw Ue(l[1]);
	return Ue(l[0]);
}
function Q(n) {
	const e = Fe(n, Te.__wbindgen_malloc), t = Be, _ = Te.parseCwa(e, t);
	if (_[2]) throw Ue(_[1]);
	return Ue(_[0]);
}
function nn(n, e) {
	const t = Fe(n, Te.__wbindgen_malloc), _ = Be, r = Me(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), i = Be, o = Te.parseEpochSeries(t, _, r, i);
	if (o[2]) throw Ue(o[1]);
	return Ue(o[0]);
}
function en(n) {
	const e = Fe(n, Te.__wbindgen_malloc), t = Be, _ = Te.parseGeneactivBin(e, t);
	if (_[2]) throw Ue(_[1]);
	return Ue(_[0]);
}
function tn(n) {
	const e = Fe(n, Te.__wbindgen_malloc), t = Be, _ = Te.parseGeneactivCsv(e, t);
	if (_[2]) throw Ue(_[1]);
	return Ue(_[0]);
}
function _n() {
	const n = Te.parseGeneactivCsvBuffered();
	if (n[2]) throw Ue(n[1]);
	return Ue(n[0]);
}
function rn(n) {
	const e = Fe(n, Te.__wbindgen_malloc), t = Be, _ = Te.parseGt3x(e, t);
	if (_[2]) throw Ue(_[1]);
	return Ue(_[0]);
}
function on(n) {
	let e, t;
	try {
		const i = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = Be, c = Te.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ue(c[2]);
		return e = _, t = r, ye(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function cn(n, e, t, _, r, i) {
	const o = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), c = Be, a = Pe(e, Te.__wbindgen_malloc), s = Be, l = Pe(t, Te.__wbindgen_malloc), u = Be, w = Fe(_, Te.__wbindgen_malloc), g = Be, b = Fe(r, Te.__wbindgen_malloc), f = Be, d = Me(i, Te.__wbindgen_malloc, Te.__wbindgen_realloc), m = Be, h = Te.placeMarkersBatch(o, c, a, s, l, u, w, g, b, f, d, m);
	if (h[2]) throw Ue(h[1]);
	return Ue(h[0]);
}
function an(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), y = Be, v = Pe(e, Te.__wbindgen_malloc), k = Be, A = Ce(t, Te.__wbindgen_malloc), R = Be, S = Pe(_, Te.__wbindgen_malloc), x = Be, C = Ce(r, Te.__wbindgen_malloc), F = Be, P = Fe(i, Te.__wbindgen_malloc), M = Be, U = Ce(o, Te.__wbindgen_malloc), z = Be, W = Fe(c, Te.__wbindgen_malloc), D = Be, I = Ce(a, Te.__wbindgen_malloc), O = Be, T = Pe(s, Te.__wbindgen_malloc), B = Be, E = Ce(l, Te.__wbindgen_malloc), j = Be, N = Pe(u, Te.__wbindgen_malloc), G = Be, L = Ce(w, Te.__wbindgen_malloc), V = Be, X = Pe(g, Te.__wbindgen_malloc), q = Be, H = Ce(b, Te.__wbindgen_malloc), J = Be, $ = Pe(f, Te.__wbindgen_malloc), Y = Be, Z = Ce(d, Te.__wbindgen_malloc), K = Be, Q = Fe(m, Te.__wbindgen_malloc), nn = Be, en = Ce(h, Te.__wbindgen_malloc), tn = Be, _n = Te.placeMarkersTyped(p, y, v, k, A, R, S, x, C, F, P, M, U, z, W, D, I, O, T, B, E, j, N, G, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw Ue(_n[1]);
	return Ue(_n[0]);
}
function sn(n) {
	let e, t;
	try {
		const i = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = Be, c = Te.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ue(c[2]);
		return e = _, t = r, ye(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function ln(n, e, t, _) {
	const r = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), i = Be, o = Pe(e, Te.__wbindgen_malloc), c = Be, a = Pe(t, Te.__wbindgen_malloc), s = Be, l = Fe(_, Te.__wbindgen_malloc), u = Be, w = Te.placeNonwearMarkersTyped(r, i, o, c, a, s, l, u);
	if (w[2]) throw Ue(w[1]);
	return Ue(w[0]);
}
function un(n) {
	const e = Te.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function wn(n) {
	const e = Te.prepareCompactPipelineV1(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function gn(n, e, t, _, r, i, o) {
	const c = Pe(n, Te.__wbindgen_malloc), a = Be, s = Pe(e, Te.__wbindgen_malloc), l = Be, u = Pe(t, Te.__wbindgen_malloc), w = Be, g = Pe(_, Te.__wbindgen_malloc), b = Be;
	var f = xe(o) ? 0 : Me(o, Te.__wbindgen_malloc, Te.__wbindgen_realloc), d = Be;
	const m = Te.processGeneactivRaw(c, a, s, l, u, w, g, b, r, i, f, d);
	if (m[2]) throw Ue(m[1]);
	return Ue(m[0]);
}
function bn(n) {
	const e = Fe(n, Te.__wbindgen_malloc), t = Be, _ = Te.processGt3xFull(e, t);
	if (_[2]) throw Ue(_[1]);
	return Ue(_[0]);
}
function fn(n, e) {
	const t = Fe(n, Te.__wbindgen_malloc), _ = Be, r = Te.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw Ue(r[1]);
	return Ue(r[0]);
}
function dn(n) {
	const e = Fe(n, Te.__wbindgen_malloc), t = Be, _ = Te.processGt3xPart1(e, t);
	if (_[2]) throw Ue(_[1]);
	return Ue(_[0]);
}
function mn(n, e) {
	const t = Fe(n, Te.__wbindgen_malloc), _ = Be, r = Te.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw Ue(r[1]);
	return Ue(r[0]);
}
function hn(n, e, t, _, r, i) {
	const o = Pe(n, Te.__wbindgen_malloc), c = Be, a = Pe(e, Te.__wbindgen_malloc), s = Be, l = Pe(t, Te.__wbindgen_malloc), u = Be;
	var w = xe(i) ? 0 : Me(i, Te.__wbindgen_malloc, Te.__wbindgen_realloc), g = Be;
	const b = Te.processRawXyz(o, c, a, s, l, u, _, r, w, g);
	if (b[2]) throw Ue(b[1]);
	return Ue(b[0]);
}
function pn(n, e, t, _, r, i) {
	const o = Pe(n, Te.__wbindgen_malloc), c = Be, a = Pe(e, Te.__wbindgen_malloc), s = Be, l = Pe(t, Te.__wbindgen_malloc), u = Be, w = Pe(_, Te.__wbindgen_malloc), g = Be;
	var b = xe(i) ? 0 : Me(i, Te.__wbindgen_malloc, Te.__wbindgen_realloc), f = Be;
	const d = Te.processRawXyzImputed(o, c, a, s, l, u, w, g, r, b, f);
	if (d[2]) throw Ue(d[1]);
	return Ue(d[0]);
}
function yn(n, e, t, _, r, i, o) {
	const c = Pe(n, Te.__wbindgen_malloc), a = Be, s = Pe(e, Te.__wbindgen_malloc), l = Be, u = Pe(t, Te.__wbindgen_malloc), w = Be, g = Pe(_, Te.__wbindgen_malloc), b = Be;
	var f = xe(i) ? 0 : Me(i, Te.__wbindgen_malloc, Te.__wbindgen_realloc), d = Be;
	const m = Te.processRawXyzImputedWithEpoch(c, a, s, l, u, w, g, b, r, f, d, o);
	if (m[2]) throw Ue(m[1]);
	return Ue(m[0]);
}
function vn(n) {
	const e = Fe(n, Te.__wbindgen_malloc), t = Be, _ = Te.readGgirMeta(e, t);
	if (_[2]) throw Ue(_[1]);
	return Ue(_[0]);
}
function kn() {
	return Te.recommended_chunk_size_mb() >>> 0;
}
function An(n, e) {
	const t = Pe(n, Te.__wbindgen_malloc), _ = Be, r = Me(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), i = Be, o = Te.reduceF64V1(t, _, r, i);
	if (o[2]) throw Ue(o[1]);
	return o[0];
}
function Rn(n) {
	const e = Te.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function Sn(n) {
	const e = Te.runCompactPipelineV1(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function xn(n, e) {
	const t = Te.runFullPipeline(n, e);
	if (t[2]) throw Ue(t[1]);
	return Ue(t[0]);
}
function Cn(n) {
	const e = Te.runFullPipelineOutcomeV1(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function Fn(n) {
	const e = Te.runFullPipelineV1(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function Pn(n, e) {
	const t = Te.runGgirFromEpoch(n, e);
	if (t[2]) throw Ue(t[1]);
	return Ue(t[0]);
}
function Mn(n) {
	const e = Te.runGgirPart3(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function Un(n) {
	const e = Fe(n, Te.__wbindgen_malloc), t = Be, _ = Te.runMilestone(e, t);
	if (_[2]) throw Ue(_[1]);
	return Ue(_[0]);
}
function zn(n) {
	const e = Te.scoreAllDays(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function Wn(n, e) {
	const t = Pe(n, Te.__wbindgen_malloc), _ = Be, r = Te.scoreColeKripke(t, _, e);
	var i = fe(r[0], r[1]).slice();
	return Te.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Dn(n) {
	let e, t;
	try {
		const i = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = Be, c = Te.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ue(c[2]);
		return e = _, t = r, ye(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function In(n) {
	const e = Te.scoreConsensusMajority(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function On(n, e, t) {
	const _ = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), r = Be, i = Fe(e, Te.__wbindgen_malloc), o = Be, c = Ce(t, Te.__wbindgen_malloc), a = Be, s = Te.scoreConsensusTyped(_, r, i, o, c, a);
	if (s[2]) throw Ue(s[1]);
	return Ue(s[0]);
}
function Tn(n) {
	let e, t;
	try {
		const i = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = Be, c = Te.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ue(c[2]);
		return e = _, t = r, ye(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function Bn(n, e, t, _, r, i) {
	const o = Me(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), c = Be, a = Pe(e, Te.__wbindgen_malloc), s = Be, l = Pe(t, Te.__wbindgen_malloc), u = Be, w = Pe(_, Te.__wbindgen_malloc), g = Be, b = Te.scoreEpochsTyped(o, c, a, s, l, u, w, g, r, i);
	if (b[2]) throw Ue(b[1]);
	return Ue(b[0]);
}
function En(n) {
	const e = Pe(n, Te.__wbindgen_malloc), t = Be, _ = Te.scoreGgirHasib(e, t);
	var r = fe(_[0], _[1]).slice();
	return Te.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function jn(n) {
	const e = Te.scoreGgirHasibVariant(n);
	if (e[2]) throw Ue(e[1]);
	return Ue(e[0]);
}
function Nn(n, e, t) {
	const _ = Pe(n, Te.__wbindgen_malloc), r = Be, i = Pe(e, Te.__wbindgen_malloc), o = Be, c = Te.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw Ue(c[1]);
	return Ue(c[0]);
}
function Gn(n, e) {
	const t = Pe(n, Te.__wbindgen_malloc), _ = Be, r = Te.scoreSadeh(t, _, e);
	var i = fe(r[0], r[1]).slice();
	return Te.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Ln(n) {
	const e = Fe(n, Te.__wbindgen_malloc), t = Be, _ = Te.sha256StreamFeed(e, t);
	if (_[1]) throw Ue(_[0]);
}
function Vn() {
	let n, e;
	try {
		const r = Te.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, Ue(r[2]);
		return n = t, e = _, ye(t, _);
	} finally {
		Te.__wbindgen_free(n, e, 1);
	}
}
function Xn() {
	Te.sha256StreamStart();
}
function qn(n, e) {
	const t = Te.sleepWakeScores(n, e);
	if (t[2]) throw Ue(t[1]);
	return Ue(t[0]);
}
function Hn(n) {
	return Te.startThreadPool(n);
}
function Jn(n) {
	const e = Fe(n, Te.__wbindgen_malloc), t = Be, _ = Te.streamParseFeed(e, t);
	if (_[2]) throw Ue(_[1]);
	return _[0] >>> 0;
}
function $n() {
	const n = Te.streamParseFinish();
	if (n[2]) throw Ue(n[1]);
	return t.__wrap(n[0]);
}
function Yn() {
	const n = Te.streamParseFinishChunk();
	if (n[2]) throw Ue(n[1]);
	return e.__wrap(n[0]);
}
function Zn(n, e) {
	const t = Te.streamParseStart(n, e);
	if (t[1]) throw Ue(t[0]);
}
function Kn(n, e) {
	const t = Te.streamParseStartData(n, e);
	if (t[1]) throw Ue(t[0]);
}
function Qn(n, e, t) {
	const _ = Te.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw Ue(_[0]);
}
function ne(n, e) {
	const t = Fe(n, Te.__wbindgen_malloc), _ = Be, r = Te.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw Ue(r[1]);
	return Ue(r[0]);
}
function ee() {
	return 0 !== Te.threadPoolReady();
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var te = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, se.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, se.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Te.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		Te.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return Te.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return Te.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return Te.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function _e(n) {
	Te.wbg_rayon_start_worker(n);
}
function re(n, e, t, _, r) {
	const i = Pe(n, Te.__wbindgen_malloc), o = Be, c = Pe(e, Te.__wbindgen_malloc), a = Be, s = Pe(t, Te.__wbindgen_malloc), l = Be, u = Te.zeroCrossingCounts(i, o, c, a, s, l, _, r);
	if (u[2]) throw Ue(u[1]);
	return Ue(u[0]);
}
function ie(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(ye(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = Me(String(e), Te.__wbindgen_malloc, Te.__wbindgen_realloc), _ = Be;
				me().setInt32(n + 4, _, !0), me().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				me().setBigInt64(n + 8, xe(t) ? BigInt(0) : t, !0), me().setInt32(n + 0, !xe(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return xe(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = Me(we(e), Te.__wbindgen_malloc, Te.__wbindgen_realloc), _ = Be;
				me().setInt32(n + 4, _, !0), me().setInt32(n + 0, t, !0);
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
				return Te.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return Oe;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const t = "number" == typeof e ? e : void 0;
				me().setFloat64(n + 8, xe(t) ? 0 : t, !0), me().setInt32(n + 0, !xe(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = xe(t) ? 0 : Me(t, Te.__wbindgen_malloc, Te.__wbindgen_realloc), r = Be;
				me().setInt32(n + 4, r, !0), me().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(ye(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return Se(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_done_9158f7cc8751ba32: function(n) {
				return n.done;
			},
			__wbg_entries_e0b73aa8571ddb56: function(n) {
				return Object.entries(n);
			},
			__wbg_error_a6fa202b58aa1cd3: function(n, e) {
				let t, _;
				try {
					t = n, _ = e, console.error(ye(n, e));
				} finally {
					Te.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return Se(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return Se(function(n, e) {
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
				} catch (t) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Float64Array_aa32a9a18a521df4: function(n) {
				let e;
				try {
					e = n instanceof Float64Array;
				} catch (t) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Map_1b76fd4635be43eb: function(n) {
				let e;
				try {
					e = n instanceof Map;
				} catch (t) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Uint8Array_152ba1f289edcf3f: function(n) {
				let e;
				try {
					e = n instanceof Uint8Array;
				} catch (t) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Window_cc64c86c8ef9e02b: function(n) {
				let e;
				try {
					e = n instanceof Window;
				} catch (t) {
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
			__wbg_new_682678e2f47e32bc: function() {
				return new Array();
			},
			__wbg_new_aa8d0fa9762c29bd: function() {
				return /* @__PURE__ */ new Object();
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(ge(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(fe(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return Se(function(n) {
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
				return Se(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(fe(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return Se(function(n, e, t) {
					return Reflect.set(n, e, t);
				}, arguments);
			},
			__wbg_set_3bf1de9fab0cd644: function(n, e, t) {
				n[e >>> 0] = t;
			},
			__wbg_set_6be42768c690e380: function(n, e, t) {
				n[e] = t;
			},
			__wbg_set_index_2ca12d8345f872b3: function(n, e, t) {
				n[e >>> 0] = t;
			},
			__wbg_set_index_805dd976c110cd28: function(n, e, t) {
				n[e >>> 0] = t;
			},
			__wbg_slice_30ddef84546fd9d0: function(n, e, t) {
				return n.slice(e >>> 0, t >>> 0);
			},
			__wbg_slice_fcdcd53ca169108d: function(n, e, t) {
				return n.slice(e >>> 0, t >>> 0);
			},
			__wbg_stack_3b0d974bbf31e44f: function(n, e) {
				const t = Me(e.stack, Te.__wbindgen_malloc, Te.__wbindgen_realloc), _ = Be;
				me().setInt32(n + 4, _, !0), me().setInt32(n + 0, t, !0);
			},
			__wbg_startWorkers_622cedd0d351664e: function(e, t, _) {
				return async function(e, t, _) {
					if (0 === _.numThreads()) throw new Error("num_threads must be > 0.");
					const r = {
						type: "wasm_bindgen_worker_init",
						module: e,
						memory: t,
						receiver: _.receiver(),
						mainJS: _.mainJS()
					};
					await Promise.all(Array.from({ length: _.numThreads() }, async () => {
						let e = await fetch(import.meta.url).then((n) => n.blob()), t = URL.createObjectURL(e);
						const _ = new Worker(t, { type: "module" });
						return _.postMessage(r), await n(_, "wasm_bindgen_worker_ready"), URL.revokeObjectURL(t), _;
					})), _.build();
				}(e, t, te.__wrap(_));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return xe(n) ? 0 : le(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return xe(n) ? 0 : le(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return xe(n) ? 0 : le(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return xe(n) ? 0 : le(n);
			},
			__wbg_then_6701bb8428537e07: function(n, e) {
				return n.then(e);
			},
			__wbg_value_ee3a06f4579184fa: function(n) {
				return n.value;
			},
			__wbindgen_cast_0000000000000001: function(n, e) {
				return function(n, e, t) {
					const _ = {
						a: n,
						b: e,
						cnt: 1
					}, r = (...n) => {
						_.cnt++;
						const e = _.a;
						_.a = 0;
						try {
							return t(e, _.b, ...n);
						} finally {
							_.a = e, r._wbg_cb_unref();
						}
					};
					return r._wbg_cb_unref = () => {
						0 === --_.cnt && (Te.__wbindgen_destroy_closure(_.a, _.b), _.a = 0, ue.unregister(_));
					}, ue.register(r, _, _), r;
				}(n, e, oe);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return fe(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return ye(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Te.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			},
			memory: e || new WebAssembly.Memory({
				initial: 179,
				maximum: 65536,
				shared: !0
			})
		}
	};
}
function oe(n, e, t) {
	Te.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, t);
}
Symbol.dispose && (te.prototype[Symbol.dispose] = te.prototype.free);
const ce = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Te.__wbg_streamchunkresult_free(n >>> 0, 1)), ae = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Te.__wbg_streamparseresult_free(n >>> 0, 1)), se = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Te.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function le(n) {
	const e = Te.__externref_table_alloc();
	return Te.__wbindgen_externrefs.set(e, n), e;
}
const ue = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Te.__wbindgen_destroy_closure(n.a, n.b));
function we(n) {
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
		let t = "[";
		e > 0 && (t += we(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + we(n[_]);
		return t += "]", t;
	}
	const t = /\[object ([^\]]+)\]/.exec(toString.call(n));
	let _;
	if (!(t && t.length > 1)) return toString.call(n);
	if (_ = t[1], "Object" == _) try {
		return "Object(" + JSON.stringify(n) + ")";
	} catch (r) {
		return "Object";
	}
	return n instanceof Error ? `${n.name}: ${n.message}\n${n.stack}` : _;
}
function ge(n, e) {
	return n >>>= 0, pe().subarray(n / 8, n / 8 + e);
}
function be(n, e) {
	return n >>>= 0, ke().subarray(n / 4, n / 4 + e);
}
function fe(n, e) {
	return n >>>= 0, Re().subarray(n / 1, n / 1 + e);
}
let de = null;
function me() {
	return null !== de && de.buffer === Te.memory.buffer || (de = new DataView(Te.memory.buffer)), de;
}
let he = null;
function pe() {
	return null !== he && he.buffer === Te.memory.buffer || (he = new Float64Array(Te.memory.buffer)), he;
}
function ye(n, e) {
	return function(n, e) {
		return De += e, De >= We && (ze = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), ze.decode(), De = e), ze.decode(Re().slice(n, n + e));
	}(n >>>= 0, e);
}
let ve = null;
function ke() {
	return null !== ve && ve.buffer === Te.memory.buffer || (ve = new Uint32Array(Te.memory.buffer)), ve;
}
let Ae = null;
function Re() {
	return null !== Ae && Ae.buffer === Te.memory.buffer || (Ae = new Uint8Array(Te.memory.buffer)), Ae;
}
function Se(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = le(t);
		Te.__wbindgen_exn_store(n);
	}
}
function xe(n) {
	return null == n;
}
function Ce(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return ke().set(n, t / 4), Be = n.length, t;
}
function Fe(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return Re().set(n, t / 1), Be = n.length, t;
}
function Pe(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return pe().set(n, t / 8), Be = n.length, t;
}
function Me(n, e, t) {
	if (void 0 === t) {
		const t = Ie.encode(n), _ = e(t.length, 1) >>> 0;
		return Re().subarray(_, _ + t.length).set(t), Be = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = Re();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = Re().subarray(r + o, r + _);
		o += Ie.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return Be = o, r;
}
function Ue(n) {
	const e = Te.__wbindgen_externrefs.get(n);
	return Te.__externref_table_dealloc(n), e;
}
let ze = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
ze && ze.decode();
const We = 2146435072;
let De = 0;
const Ie = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
Ie && (Ie.encodeInto = function(n, e) {
	const t = Ie.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let Oe, Te, Be = 0;
function Ee(n, e, t) {
	if (Te = n.exports, Oe = e, de = null, he = null, ve = null, Ae = null, void 0 !== t && ("number" != typeof t || 0 === t || t % 65536 != 0)) throw new Error("invalid stack size");
	return Te.__wbindgen_start(t), Te;
}
function je(n, e) {
	if (void 0 !== Te) return Te;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const _ = ie(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Ee(new WebAssembly.Instance(n, _), n, t);
}
async function Ne(n, e) {
	if (void 0 !== Te) return Te;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-DTf4N2WM.wasm", "" + import.meta.url));
	const _ = ie(e);
	("string" == typeof n || "function" == typeof Request && n instanceof Request || "function" == typeof URL && n instanceof URL) && (n = fetch(n));
	const { instance: r, module: i } = await async function(n, e) {
		if ("function" == typeof Response && n instanceof Response) {
			if ("function" == typeof WebAssembly.instantiateStreaming) try {
				return await WebAssembly.instantiateStreaming(n, e);
			} catch (t) {
				if (!n.ok || !function(n) {
					switch (n) {
						case "basic":
						case "cors":
						case "default": return !0;
					}
					return !1;
				}(n.type) || "application/wasm" === n.headers.get("Content-Type")) throw t;
				console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t);
			}
			const _ = await n.arrayBuffer();
			return await WebAssembly.instantiate(_, e);
		}
		{
			const t = await WebAssembly.instantiate(n, e);
			return t instanceof WebAssembly.Instance ? {
				instance: t,
				module: n
			} : t;
		}
	}(await n, _);
	return Ee(r, i, t);
}
export { e as StreamChunkResult, t as StreamParseResult, _ as actiwareSleepIntervals, r as actoursVersion, i as aggregateEpochSeries, o as analyzePhysicalActivityDay, c as classifyActimetricPreschoolWristRf, a as classifyActimetricPreschoolWristRfLagLead, s as classifyActimetricPreschoolWristRfLagLeadCalibrated, l as computeAnglez5s, u as computeCircadian, w as computeCircadianTyped, g as computeEnmo5s, b as computeMimsUnit, f as computeMimsUnitDataframe, d as computeMimsUnitTimingBreakdown, m as computeMimsUnitValues, h as computeNightDifficulty, p as computeNightDifficultyTyped, y as computeNightSignals, v as computeNightSignalsTyped, k as computeSleepMetrics, A as configureComputeMemoryBudgetV1, R as csvBufferAppend, S as csvBufferClear, Ne as default, x as detectDetachFromAccelerationG, C as detectDeviceFormat, F as detectGgirHasptVariant, P as detectHdcza, M as detectNonwear, U as detectNonwearChoi2011, z as detectNonwearChoi2011Bouts, W as detectNonwearChoi2011Epoch, D as detectNonwearChoi2012, I as detectNonwearChoi2012Bouts, O as detectNonwearChoiBouts, T as detectNonwearUnified, B as detectNonwearUnifiedBatchTyped, E as epochRawData, j as epochWithBandpass, N as executeHeroRuntime, G as extractCapsense, L as generateActiwareRestIntervals, V as getComputeCapabilitiesV1, je as initSync, X as initThreadPool, q as installPanicHook, H as isGeneactivFormat, J as lstmSpectralFeatures30s, $ as neishabouriCounts, Y as parseActigraphCsv, Z as parseActigraphCsvBuffered, K as parseAw5, Q as parseCwa, nn as parseEpochSeries, en as parseGeneactivBin, tn as parseGeneactivCsv, _n as parseGeneactivCsvBuffered, rn as parseGt3x, on as placeMarkers, cn as placeMarkersBatch, an as placeMarkersTyped, sn as placeNonwearMarkers, ln as placeNonwearMarkersTyped, un as prepareCompactPipelineOutcomeV1, wn as prepareCompactPipelineV1, gn as processGeneactivRaw, bn as processGt3xFull, fn as processGt3xFullWithEpoch, dn as processGt3xPart1, mn as processGt3xPart1WithEpoch, hn as processRawXyz, pn as processRawXyzImputed, yn as processRawXyzImputedWithEpoch, vn as readGgirMeta, kn as recommended_chunk_size_mb, An as reduceF64V1, Rn as runCompactPipelineOutcomeV1, Sn as runCompactPipelineV1, xn as runFullPipeline, Cn as runFullPipelineOutcomeV1, Fn as runFullPipelineV1, Pn as runGgirFromEpoch, Mn as runGgirPart3, Un as runMilestone, zn as scoreAllDays, Wn as scoreColeKripke, Dn as scoreConsensus, In as scoreConsensusMajority, On as scoreConsensusTyped, Tn as scoreEpochs, Bn as scoreEpochsTyped, En as scoreGgirHasib, jn as scoreGgirHasibVariant, Nn as scoreGgirSib, Gn as scoreSadeh, Ln as sha256StreamFeed, Vn as sha256StreamFinish, Xn as sha256StreamStart, qn as sleepWakeScores, Hn as startThreadPool, Jn as streamParseFeed, $n as streamParseFinish, Yn as streamParseFinishChunk, Zn as streamParseStart, Kn as streamParseStartData, Qn as streamParseStartWithEpoch, ne as summarizeActimetricPreschoolWristRfClasses, ee as threadPoolReady, te as wbg_rayon_PoolBuilder, _e as wbg_rayon_start_worker, re as zeroCrossingCounts };
