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
		return t.__wbg_ptr = e, te.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, te.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		ze.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = ze.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = ze.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = ze.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = ze.streamchunkresult_axisX(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ze.streamchunkresult_axisY(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ze.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ze.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ze.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = fe(n[0], n[1]).slice(), ze.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = ze.streamchunkresult_counts(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = ze.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = ze.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = ze.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return ze.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = ze.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = ze.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== ze.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = ze.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = fe(n[0], n[1]).slice(), ze.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = ze.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = ze.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = ze.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== ze.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ze.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return ze.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ze.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = ze.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = se(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = ze.streamchunkresult_temperature(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ze.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = ze.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ze.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = ze.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = ze.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = ze.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var t = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, _e.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, _e.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		ze.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = ze.streamparseresult_axisX(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ze.streamparseresult_axisY(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ze.streamparseresult_axisZ(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ze.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ze.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = fe(n[0], n[1]).slice(), ze.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return ze.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== ze.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ze.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ze.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = ze.streamparseresult_temperature(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ze.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ze.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = ae(n[0], n[1]).slice();
		return ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function _() {
	let n, e;
	try {
		const t = ze.actoursVersion();
		return n = t[0], e = t[1], fe(t[0], t[1]);
	} finally {
		ze.__wbindgen_free(n, e, 1);
	}
}
function r(n) {
	const e = ze.aggregateEpochSeries(n);
	if (e[2]) throw xe(e[1]);
	return xe(e[0]);
}
function i(n) {
	let e, t;
	try {
		const i = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), o = Oe, c = ze.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, xe(c[2]);
		return e = _, t = r, fe(_, r);
	} finally {
		ze.__wbindgen_free(e, t, 1);
	}
}
function o(n, e, t, _) {
	const r = Re(n, ze.__wbindgen_malloc), i = Oe, o = Re(e, ze.__wbindgen_malloc), c = Oe, a = Re(t, ze.__wbindgen_malloc), s = Oe, l = ze.classifyActimetricPreschoolWristRf(r, i, o, c, a, s, _);
	if (l[3]) throw xe(l[2]);
	var u = le(l[0], l[1]).slice();
	return ze.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function c(n, e, t, _) {
	const r = Re(n, ze.__wbindgen_malloc), i = Oe, o = Re(e, ze.__wbindgen_malloc), c = Oe, a = Re(t, ze.__wbindgen_malloc), s = Oe, l = ze.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, s, _);
	if (l[3]) throw xe(l[2]);
	var u = le(l[0], l[1]).slice();
	return ze.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function a(n, e, t, _) {
	const r = Re(n, ze.__wbindgen_malloc), i = Oe, o = Re(e, ze.__wbindgen_malloc), c = Oe, a = Re(t, ze.__wbindgen_malloc), s = Oe, l = ze.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, s, _);
	if (l[3]) throw xe(l[2]);
	var u = le(l[0], l[1]).slice();
	return ze.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function s(n, e, t, _) {
	const r = Re(n, ze.__wbindgen_malloc), i = Oe, o = Re(e, ze.__wbindgen_malloc), c = Oe, a = Re(t, ze.__wbindgen_malloc), s = Oe, l = ze.computeAnglez5s(r, i, o, c, a, s, _);
	var u = ae(l[0], l[1]).slice();
	return ze.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function l(n) {
	let e, t;
	try {
		const i = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), o = Oe, c = ze.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, xe(c[2]);
		return e = _, t = r, fe(_, r);
	} finally {
		ze.__wbindgen_free(e, t, 1);
	}
}
function u(n, e, t, _, r, i, o) {
	const c = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), a = Oe, s = Re(e, ze.__wbindgen_malloc), l = Oe, u = ke(t, ze.__wbindgen_malloc), w = Oe, b = Re(_, ze.__wbindgen_malloc), g = Oe, f = ke(r, ze.__wbindgen_malloc), d = Oe, m = Ae(i, ze.__wbindgen_malloc), h = Oe, p = ke(o, ze.__wbindgen_malloc), y = Oe, v = ze.computeCircadianTyped(c, a, s, l, u, w, b, g, f, d, m, h, p, y);
	if (v[2]) throw xe(v[1]);
	return xe(v[0]);
}
function w(n, e, t, _) {
	const r = Re(n, ze.__wbindgen_malloc), i = Oe, o = Re(e, ze.__wbindgen_malloc), c = Oe, a = Re(t, ze.__wbindgen_malloc), s = Oe, l = ze.computeEnmo5s(r, i, o, c, a, s, _);
	var u = ae(l[0], l[1]).slice();
	return ze.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function b(n, e, t, _, r) {
	const i = Re(n, ze.__wbindgen_malloc), o = Oe, c = Re(e, ze.__wbindgen_malloc), a = Oe, s = Re(t, ze.__wbindgen_malloc), l = Oe, u = ze.computeMimsUnit(i, o, c, a, s, l, _, r);
	if (u[2]) throw xe(u[1]);
	return xe(u[0]);
}
function g(n, e, t, _, r) {
	const i = Re(n, ze.__wbindgen_malloc), o = Oe, c = Re(e, ze.__wbindgen_malloc), a = Oe, s = Re(t, ze.__wbindgen_malloc), l = Oe, u = Re(_, ze.__wbindgen_malloc), w = Oe, b = ze.computeMimsUnitDataframe(i, o, c, a, s, l, u, w, r);
	if (b[2]) throw xe(b[1]);
	return xe(b[0]);
}
function f(n, e, t, _, r) {
	const i = Re(n, ze.__wbindgen_malloc), o = Oe, c = Re(e, ze.__wbindgen_malloc), a = Oe, s = Re(t, ze.__wbindgen_malloc), l = Oe, u = ze.computeMimsUnitTimingBreakdown(i, o, c, a, s, l, _, r);
	if (u[2]) throw xe(u[1]);
	return xe(u[0]);
}
function d(n, e, t, _, r) {
	const i = Re(n, ze.__wbindgen_malloc), o = Oe, c = Re(e, ze.__wbindgen_malloc), a = Oe, s = Re(t, ze.__wbindgen_malloc), l = Oe, u = ze.computeMimsUnitValues(i, o, c, a, s, l, _, r);
	if (u[3]) throw xe(u[2]);
	var w = ae(u[0], u[1]).slice();
	return ze.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function m(n) {
	let e, t;
	try {
		const i = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), o = Oe, c = ze.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, xe(c[2]);
		return e = _, t = r, fe(_, r);
	} finally {
		ze.__wbindgen_free(e, t, 1);
	}
}
function h(n, e, t, _, r, i, o, c, a, s, l, u, w, b, g, f, d, m, h) {
	const p = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), y = Oe, v = Re(e, ze.__wbindgen_malloc), k = Oe, A = ke(t, ze.__wbindgen_malloc), R = Oe, S = Re(_, ze.__wbindgen_malloc), x = Oe, C = ke(r, ze.__wbindgen_malloc), F = Oe, P = Ae(i, ze.__wbindgen_malloc), M = Oe, U = ke(o, ze.__wbindgen_malloc), z = Oe, O = Ae(c, ze.__wbindgen_malloc), W = Oe, D = ke(a, ze.__wbindgen_malloc), B = Oe, E = Re(s, ze.__wbindgen_malloc), I = Oe, T = ke(l, ze.__wbindgen_malloc), j = Oe, N = Re(u, ze.__wbindgen_malloc), G = Oe, L = ke(w, ze.__wbindgen_malloc), V = Oe, q = Re(b, ze.__wbindgen_malloc), X = Oe, H = ke(g, ze.__wbindgen_malloc), J = Oe, $ = Re(f, ze.__wbindgen_malloc), Y = Oe, Z = ke(d, ze.__wbindgen_malloc), K = Oe, Q = Ae(m, ze.__wbindgen_malloc), nn = Oe, en = ke(h, ze.__wbindgen_malloc), tn = Oe, _n = ze.computeNightDifficultyTyped(p, y, v, k, A, R, S, x, C, F, P, M, U, z, O, W, D, B, E, I, T, j, N, G, L, V, q, X, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw xe(_n[1]);
	return xe(_n[0]);
}
function p(n) {
	let e, t;
	try {
		const i = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), o = Oe, c = ze.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, xe(c[2]);
		return e = _, t = r, fe(_, r);
	} finally {
		ze.__wbindgen_free(e, t, 1);
	}
}
function y(n, e, t, _, r, i, o, c, a, s, l, u, w, b, g, f, d, m, h) {
	const p = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), y = Oe, v = Re(e, ze.__wbindgen_malloc), k = Oe, A = ke(t, ze.__wbindgen_malloc), R = Oe, S = Re(_, ze.__wbindgen_malloc), x = Oe, C = ke(r, ze.__wbindgen_malloc), F = Oe, P = Ae(i, ze.__wbindgen_malloc), M = Oe, U = ke(o, ze.__wbindgen_malloc), z = Oe, O = Ae(c, ze.__wbindgen_malloc), W = Oe, D = ke(a, ze.__wbindgen_malloc), B = Oe, E = Re(s, ze.__wbindgen_malloc), I = Oe, T = ke(l, ze.__wbindgen_malloc), j = Oe, N = Re(u, ze.__wbindgen_malloc), G = Oe, L = ke(w, ze.__wbindgen_malloc), V = Oe, q = Re(b, ze.__wbindgen_malloc), X = Oe, H = ke(g, ze.__wbindgen_malloc), J = Oe, $ = Re(f, ze.__wbindgen_malloc), Y = Oe, Z = ke(d, ze.__wbindgen_malloc), K = Oe, Q = Ae(m, ze.__wbindgen_malloc), nn = Oe, en = ke(h, ze.__wbindgen_malloc), tn = Oe, _n = ze.computeNightSignalsTyped(p, y, v, k, A, R, S, x, C, F, P, M, U, z, O, W, D, B, E, I, T, j, N, G, L, V, q, X, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw xe(_n[1]);
	return xe(_n[0]);
}
function v(n, e, t) {
	const _ = Ae(n, ze.__wbindgen_malloc), r = Oe, i = Re(e, ze.__wbindgen_malloc), o = Oe, c = ze.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw xe(c[1]);
	return xe(c[0]);
}
function k(n) {
	const e = ze.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw xe(e[1]);
	return xe(e[0]);
}
function A(n) {
	const e = Ae(n, ze.__wbindgen_malloc), t = Oe;
	ze.csvBufferAppend(e, t);
}
function R(n) {
	ze.csvBufferClear(n);
}
function S(n, e) {
	const t = Re(n, ze.__wbindgen_malloc), _ = Oe, r = Re(e, ze.__wbindgen_malloc), i = Oe, o = ze.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw xe(o[2]);
	var c = le(o[0], o[1]).slice();
	return ze.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function x(n, e) {
	let t, _;
	try {
		const r = Ae(n, ze.__wbindgen_malloc), i = Oe, o = Se(e, ze.__wbindgen_malloc, ze.__wbindgen_realloc), c = Oe, a = ze.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], fe(a[0], a[1]);
	} finally {
		ze.__wbindgen_free(t, _, 1);
	}
}
function C(n) {
	const e = ze.detectGgirHasptVariant(n);
	if (e[2]) throw xe(e[1]);
	return xe(e[0]);
}
function F(n, e, t, _) {
	const r = Re(n, ze.__wbindgen_malloc), i = Oe;
	var o = ve(e) ? 0 : Se(e, ze.__wbindgen_malloc, ze.__wbindgen_realloc), c = Oe, a = ve(t) ? 0 : Re(t, ze.__wbindgen_malloc), s = Oe, l = ve(_) ? 0 : Re(_, ze.__wbindgen_malloc), u = Oe;
	return ze.detectHdcza(r, i, o, c, a, s, l, u);
}
function P(n) {
	const e = Re(n, ze.__wbindgen_malloc), t = Oe, _ = ze.detectNonwear(e, t);
	var r = le(_[0], _[1]).slice();
	return ze.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function M(n) {
	const e = Re(n, ze.__wbindgen_malloc), t = Oe, _ = ze.detectNonwearChoi2011(e, t);
	var r = le(_[0], _[1]).slice();
	return ze.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function U(n) {
	const e = Re(n, ze.__wbindgen_malloc), t = Oe, _ = ze.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw xe(_[1]);
	return xe(_[0]);
}
function z(n, e) {
	const t = Re(n, ze.__wbindgen_malloc), _ = Oe, r = ze.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw xe(r[2]);
	var i = le(r[0], r[1]).slice();
	return ze.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function O(n) {
	const e = Re(n, ze.__wbindgen_malloc), t = Oe, _ = ze.detectNonwearChoi2012(e, t);
	var r = le(_[0], _[1]).slice();
	return ze.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function W(n) {
	const e = Re(n, ze.__wbindgen_malloc), t = Oe, _ = ze.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw xe(_[1]);
	return xe(_[0]);
}
function D(n) {
	const e = Re(n, ze.__wbindgen_malloc), t = Oe, _ = ze.detectNonwearChoiBouts(e, t);
	if (_[2]) throw xe(_[1]);
	return xe(_[0]);
}
function B(n) {
	let e, t;
	try {
		const i = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), o = Oe, c = ze.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, xe(c[2]);
		return e = _, t = r, fe(_, r);
	} finally {
		ze.__wbindgen_free(e, t, 1);
	}
}
function E(n, e, t, _, r, i, o) {
	const c = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), a = Oe, s = Se(e, ze.__wbindgen_malloc, ze.__wbindgen_realloc), l = Oe, u = Re(t, ze.__wbindgen_malloc), w = Oe, b = Re(_, ze.__wbindgen_malloc), g = Oe, f = Re(r, ze.__wbindgen_malloc), d = Oe, m = ze.detectNonwearUnifiedBatchTyped(c, a, s, l, u, w, b, g, f, d, i, o);
	if (m[2]) throw xe(m[1]);
	return xe(m[0]);
}
function I(n, e, t, _, r) {
	const i = Re(n, ze.__wbindgen_malloc), o = Oe, c = Re(e, ze.__wbindgen_malloc), a = Oe, s = Re(t, ze.__wbindgen_malloc), l = Oe, u = Re(_, ze.__wbindgen_malloc), w = Oe, b = ze.epochRawData(i, o, c, a, s, l, u, w, r);
	if (b[2]) throw xe(b[1]);
	return xe(b[0]);
}
function T(n, e, t) {
	const _ = Re(n, ze.__wbindgen_malloc), r = Oe, i = Re(e, ze.__wbindgen_malloc), o = Oe, c = ze.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw xe(c[1]);
	return xe(c[0]);
}
function j(n, e) {
	let t, _;
	try {
		const o = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), c = Oe, a = Se(e, ze.__wbindgen_malloc, ze.__wbindgen_realloc), s = Oe, l = ze.executeHeroRuntime(o, c, a, s);
		var r = l[0], i = l[1];
		if (l[3]) throw r = 0, i = 0, xe(l[2]);
		return t = r, _ = i, fe(r, i);
	} finally {
		ze.__wbindgen_free(t, _, 1);
	}
}
function N(n) {
	const e = Ae(n, ze.__wbindgen_malloc), t = Oe, _ = ze.extractCapsense(e, t);
	if (_[2]) throw xe(_[1]);
	return xe(_[0]);
}
function G() {
	const n = ze.getComputeCapabilitiesV1();
	if (n[2]) throw xe(n[1]);
	return xe(n[0]);
}
function L(n) {
	return ze.initThreadPool(n);
}
function V() {
	ze.installPanicHook();
}
function q(n) {
	const e = Ae(n, ze.__wbindgen_malloc), t = Oe;
	return 0 !== ze.isGeneactivFormat(e, t);
}
function X(n, e, t, _) {
	const r = Re(n, ze.__wbindgen_malloc), i = Oe, o = Re(e, ze.__wbindgen_malloc), c = Oe, a = Re(t, ze.__wbindgen_malloc), s = Oe, l = ze.lstmSpectralFeatures30s(r, i, o, c, a, s, _);
	if (l[2]) throw xe(l[1]);
	return xe(l[0]);
}
function H(n, e, t, _, r) {
	const i = Re(n, ze.__wbindgen_malloc), o = Oe, c = Re(e, ze.__wbindgen_malloc), a = Oe, s = Re(t, ze.__wbindgen_malloc), l = Oe, u = ze.neishabouriCounts(i, o, c, a, s, l, _, r);
	if (u[2]) throw xe(u[1]);
	return xe(u[0]);
}
function J(n, e) {
	const t = Ae(n, ze.__wbindgen_malloc), _ = Oe, r = ze.parseActigraphCsv(t, _, e);
	if (r[2]) throw xe(r[1]);
	return xe(r[0]);
}
function $(n) {
	const e = ze.parseActigraphCsvBuffered(n);
	if (e[2]) throw xe(e[1]);
	return xe(e[0]);
}
function Y(n) {
	const e = Ae(n, ze.__wbindgen_malloc), t = Oe, _ = ze.parseCwa(e, t);
	if (_[2]) throw xe(_[1]);
	return xe(_[0]);
}
function Z(n, e) {
	const t = Ae(n, ze.__wbindgen_malloc), _ = Oe, r = Se(e, ze.__wbindgen_malloc, ze.__wbindgen_realloc), i = Oe, o = ze.parseEpochSeries(t, _, r, i);
	if (o[2]) throw xe(o[1]);
	return xe(o[0]);
}
function K(n) {
	const e = Ae(n, ze.__wbindgen_malloc), t = Oe, _ = ze.parseGeneactivBin(e, t);
	if (_[2]) throw xe(_[1]);
	return xe(_[0]);
}
function Q(n) {
	const e = Ae(n, ze.__wbindgen_malloc), t = Oe, _ = ze.parseGeneactivCsv(e, t);
	if (_[2]) throw xe(_[1]);
	return xe(_[0]);
}
function nn() {
	const n = ze.parseGeneactivCsvBuffered();
	if (n[2]) throw xe(n[1]);
	return xe(n[0]);
}
function en(n) {
	const e = Ae(n, ze.__wbindgen_malloc), t = Oe, _ = ze.parseGt3x(e, t);
	if (_[2]) throw xe(_[1]);
	return xe(_[0]);
}
function tn(n) {
	let e, t;
	try {
		const i = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), o = Oe, c = ze.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, xe(c[2]);
		return e = _, t = r, fe(_, r);
	} finally {
		ze.__wbindgen_free(e, t, 1);
	}
}
function _n(n, e, t, _, r, i) {
	const o = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), c = Oe, a = Re(e, ze.__wbindgen_malloc), s = Oe, l = Re(t, ze.__wbindgen_malloc), u = Oe, w = Ae(_, ze.__wbindgen_malloc), b = Oe, g = Ae(r, ze.__wbindgen_malloc), f = Oe, d = Se(i, ze.__wbindgen_malloc, ze.__wbindgen_realloc), m = Oe, h = ze.placeMarkersBatch(o, c, a, s, l, u, w, b, g, f, d, m);
	if (h[2]) throw xe(h[1]);
	return xe(h[0]);
}
function rn(n, e, t, _, r, i, o, c, a, s, l, u, w, b, g, f, d, m, h) {
	const p = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), y = Oe, v = Re(e, ze.__wbindgen_malloc), k = Oe, A = ke(t, ze.__wbindgen_malloc), R = Oe, S = Re(_, ze.__wbindgen_malloc), x = Oe, C = ke(r, ze.__wbindgen_malloc), F = Oe, P = Ae(i, ze.__wbindgen_malloc), M = Oe, U = ke(o, ze.__wbindgen_malloc), z = Oe, O = Ae(c, ze.__wbindgen_malloc), W = Oe, D = ke(a, ze.__wbindgen_malloc), B = Oe, E = Re(s, ze.__wbindgen_malloc), I = Oe, T = ke(l, ze.__wbindgen_malloc), j = Oe, N = Re(u, ze.__wbindgen_malloc), G = Oe, L = ke(w, ze.__wbindgen_malloc), V = Oe, q = Re(b, ze.__wbindgen_malloc), X = Oe, H = ke(g, ze.__wbindgen_malloc), J = Oe, $ = Re(f, ze.__wbindgen_malloc), Y = Oe, Z = ke(d, ze.__wbindgen_malloc), K = Oe, Q = Ae(m, ze.__wbindgen_malloc), nn = Oe, en = ke(h, ze.__wbindgen_malloc), tn = Oe, _n = ze.placeMarkersTyped(p, y, v, k, A, R, S, x, C, F, P, M, U, z, O, W, D, B, E, I, T, j, N, G, L, V, q, X, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw xe(_n[1]);
	return xe(_n[0]);
}
function on(n) {
	let e, t;
	try {
		const i = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), o = Oe, c = ze.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, xe(c[2]);
		return e = _, t = r, fe(_, r);
	} finally {
		ze.__wbindgen_free(e, t, 1);
	}
}
function cn(n, e, t, _) {
	const r = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), i = Oe, o = Re(e, ze.__wbindgen_malloc), c = Oe, a = Re(t, ze.__wbindgen_malloc), s = Oe, l = Ae(_, ze.__wbindgen_malloc), u = Oe, w = ze.placeNonwearMarkersTyped(r, i, o, c, a, s, l, u);
	if (w[2]) throw xe(w[1]);
	return xe(w[0]);
}
function an(n) {
	const e = ze.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw xe(e[1]);
	return xe(e[0]);
}
function sn(n) {
	const e = ze.prepareCompactPipelineV1(n);
	if (e[2]) throw xe(e[1]);
	return xe(e[0]);
}
function ln(n, e, t, _, r, i, o) {
	const c = Re(n, ze.__wbindgen_malloc), a = Oe, s = Re(e, ze.__wbindgen_malloc), l = Oe, u = Re(t, ze.__wbindgen_malloc), w = Oe, b = Re(_, ze.__wbindgen_malloc), g = Oe;
	var f = ve(o) ? 0 : Se(o, ze.__wbindgen_malloc, ze.__wbindgen_realloc), d = Oe;
	const m = ze.processGeneactivRaw(c, a, s, l, u, w, b, g, r, i, f, d);
	if (m[2]) throw xe(m[1]);
	return xe(m[0]);
}
function un(n) {
	const e = Ae(n, ze.__wbindgen_malloc), t = Oe, _ = ze.processGt3xFull(e, t);
	if (_[2]) throw xe(_[1]);
	return xe(_[0]);
}
function wn(n, e) {
	const t = Ae(n, ze.__wbindgen_malloc), _ = Oe, r = ze.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw xe(r[1]);
	return xe(r[0]);
}
function bn(n) {
	const e = Ae(n, ze.__wbindgen_malloc), t = Oe, _ = ze.processGt3xPart1(e, t);
	if (_[2]) throw xe(_[1]);
	return xe(_[0]);
}
function gn(n, e) {
	const t = Ae(n, ze.__wbindgen_malloc), _ = Oe, r = ze.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw xe(r[1]);
	return xe(r[0]);
}
function fn(n, e, t, _, r, i) {
	const o = Re(n, ze.__wbindgen_malloc), c = Oe, a = Re(e, ze.__wbindgen_malloc), s = Oe, l = Re(t, ze.__wbindgen_malloc), u = Oe;
	var w = ve(i) ? 0 : Se(i, ze.__wbindgen_malloc, ze.__wbindgen_realloc), b = Oe;
	const g = ze.processRawXyz(o, c, a, s, l, u, _, r, w, b);
	if (g[2]) throw xe(g[1]);
	return xe(g[0]);
}
function dn(n, e, t, _, r, i) {
	const o = Re(n, ze.__wbindgen_malloc), c = Oe, a = Re(e, ze.__wbindgen_malloc), s = Oe, l = Re(t, ze.__wbindgen_malloc), u = Oe, w = Re(_, ze.__wbindgen_malloc), b = Oe;
	var g = ve(i) ? 0 : Se(i, ze.__wbindgen_malloc, ze.__wbindgen_realloc), f = Oe;
	const d = ze.processRawXyzImputed(o, c, a, s, l, u, w, b, r, g, f);
	if (d[2]) throw xe(d[1]);
	return xe(d[0]);
}
function mn(n, e, t, _, r, i, o) {
	const c = Re(n, ze.__wbindgen_malloc), a = Oe, s = Re(e, ze.__wbindgen_malloc), l = Oe, u = Re(t, ze.__wbindgen_malloc), w = Oe, b = Re(_, ze.__wbindgen_malloc), g = Oe;
	var f = ve(i) ? 0 : Se(i, ze.__wbindgen_malloc, ze.__wbindgen_realloc), d = Oe;
	const m = ze.processRawXyzImputedWithEpoch(c, a, s, l, u, w, b, g, r, f, d, o);
	if (m[2]) throw xe(m[1]);
	return xe(m[0]);
}
function hn(n) {
	const e = Ae(n, ze.__wbindgen_malloc), t = Oe, _ = ze.readGgirMeta(e, t);
	if (_[2]) throw xe(_[1]);
	return xe(_[0]);
}
function pn() {
	return ze.recommended_chunk_size_mb() >>> 0;
}
function yn(n, e) {
	const t = Re(n, ze.__wbindgen_malloc), _ = Oe, r = Se(e, ze.__wbindgen_malloc, ze.__wbindgen_realloc), i = Oe, o = ze.reduceF64V1(t, _, r, i);
	if (o[2]) throw xe(o[1]);
	return o[0];
}
function vn(n) {
	const e = ze.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw xe(e[1]);
	return xe(e[0]);
}
function kn(n) {
	const e = ze.runCompactPipelineV1(n);
	if (e[2]) throw xe(e[1]);
	return xe(e[0]);
}
function An(n, e) {
	const t = ze.runFullPipeline(n, e);
	if (t[2]) throw xe(t[1]);
	return xe(t[0]);
}
function Rn(n) {
	const e = ze.runFullPipelineOutcomeV1(n);
	if (e[2]) throw xe(e[1]);
	return xe(e[0]);
}
function Sn(n) {
	const e = ze.runFullPipelineV1(n);
	if (e[2]) throw xe(e[1]);
	return xe(e[0]);
}
function xn(n, e) {
	const t = ze.runGgirFromEpoch(n, e);
	if (t[2]) throw xe(t[1]);
	return xe(t[0]);
}
function Cn(n) {
	const e = Ae(n, ze.__wbindgen_malloc), t = Oe, _ = ze.runMilestone(e, t);
	if (_[2]) throw xe(_[1]);
	return xe(_[0]);
}
function Fn(n) {
	const e = ze.scoreAllDays(n);
	if (e[2]) throw xe(e[1]);
	return xe(e[0]);
}
function Pn(n, e) {
	const t = Re(n, ze.__wbindgen_malloc), _ = Oe, r = ze.scoreColeKripke(t, _, e);
	var i = le(r[0], r[1]).slice();
	return ze.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Mn(n) {
	let e, t;
	try {
		const i = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), o = Oe, c = ze.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, xe(c[2]);
		return e = _, t = r, fe(_, r);
	} finally {
		ze.__wbindgen_free(e, t, 1);
	}
}
function Un(n) {
	const e = ze.scoreConsensusMajority(n);
	if (e[2]) throw xe(e[1]);
	return xe(e[0]);
}
function zn(n, e, t) {
	const _ = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), r = Oe, i = Ae(e, ze.__wbindgen_malloc), o = Oe, c = ke(t, ze.__wbindgen_malloc), a = Oe, s = ze.scoreConsensusTyped(_, r, i, o, c, a);
	if (s[2]) throw xe(s[1]);
	return xe(s[0]);
}
function On(n) {
	let e, t;
	try {
		const i = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), o = Oe, c = ze.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, xe(c[2]);
		return e = _, t = r, fe(_, r);
	} finally {
		ze.__wbindgen_free(e, t, 1);
	}
}
function Wn(n, e, t, _, r, i) {
	const o = Se(n, ze.__wbindgen_malloc, ze.__wbindgen_realloc), c = Oe, a = Re(e, ze.__wbindgen_malloc), s = Oe, l = Re(t, ze.__wbindgen_malloc), u = Oe, w = Re(_, ze.__wbindgen_malloc), b = Oe, g = ze.scoreEpochsTyped(o, c, a, s, l, u, w, b, r, i);
	if (g[2]) throw xe(g[1]);
	return xe(g[0]);
}
function Dn(n) {
	const e = Re(n, ze.__wbindgen_malloc), t = Oe, _ = ze.scoreGgirHasib(e, t);
	var r = le(_[0], _[1]).slice();
	return ze.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function Bn(n) {
	const e = ze.scoreGgirHasibVariant(n);
	if (e[2]) throw xe(e[1]);
	return xe(e[0]);
}
function En(n, e, t) {
	const _ = Re(n, ze.__wbindgen_malloc), r = Oe, i = Re(e, ze.__wbindgen_malloc), o = Oe, c = ze.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw xe(c[1]);
	return xe(c[0]);
}
function In(n, e) {
	const t = Re(n, ze.__wbindgen_malloc), _ = Oe, r = ze.scoreSadeh(t, _, e);
	var i = le(r[0], r[1]).slice();
	return ze.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Tn(n) {
	const e = Ae(n, ze.__wbindgen_malloc), t = Oe, _ = ze.sha256StreamFeed(e, t);
	if (_[1]) throw xe(_[0]);
}
function jn() {
	let n, e;
	try {
		const r = ze.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, xe(r[2]);
		return n = t, e = _, fe(t, _);
	} finally {
		ze.__wbindgen_free(n, e, 1);
	}
}
function Nn() {
	ze.sha256StreamStart();
}
function Gn(n) {
	return ze.startThreadPool(n);
}
function Ln(n) {
	const e = Ae(n, ze.__wbindgen_malloc), t = Oe, _ = ze.streamParseFeed(e, t);
	if (_[2]) throw xe(_[1]);
	return _[0] >>> 0;
}
function Vn() {
	const n = ze.streamParseFinish();
	if (n[2]) throw xe(n[1]);
	return t.__wrap(n[0]);
}
function qn() {
	const n = ze.streamParseFinishChunk();
	if (n[2]) throw xe(n[1]);
	return e.__wrap(n[0]);
}
function Xn(n, e) {
	const t = ze.streamParseStart(n, e);
	if (t[1]) throw xe(t[0]);
}
function Hn(n, e) {
	const t = ze.streamParseStartData(n, e);
	if (t[1]) throw xe(t[0]);
}
function Jn(n, e, t) {
	const _ = ze.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw xe(_[0]);
}
function $n(n, e) {
	const t = Ae(n, ze.__wbindgen_malloc), _ = Oe, r = ze.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw xe(r[1]);
	return xe(r[0]);
}
function Yn() {
	return 0 !== ze.threadPoolReady();
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var Zn = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, re.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, re.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		ze.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		ze.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return ze.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return ze.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return ze.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function Kn(n) {
	ze.wbg_rayon_start_worker(n);
}
function Qn(n, e, t, _, r) {
	const i = Re(n, ze.__wbindgen_malloc), o = Oe, c = Re(e, ze.__wbindgen_malloc), a = Oe, s = Re(t, ze.__wbindgen_malloc), l = Oe, u = ze.zeroCrossingCounts(i, o, c, a, s, l, _, r);
	if (u[2]) throw xe(u[1]);
	return xe(u[0]);
}
function ne(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(fe(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = Se(String(e), ze.__wbindgen_malloc, ze.__wbindgen_realloc), _ = Oe;
				we().setInt32(n + 4, _, !0), we().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				we().setBigInt64(n + 8, ve(t) ? BigInt(0) : t, !0), we().setInt32(n + 0, !ve(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return ve(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = Se(ce(e), ze.__wbindgen_malloc, ze.__wbindgen_realloc), _ = Oe;
				we().setInt32(n + 4, _, !0), we().setInt32(n + 0, t, !0);
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
				return ze.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return Ue;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const t = "number" == typeof e ? e : void 0;
				we().setFloat64(n + 8, ve(t) ? 0 : t, !0), we().setInt32(n + 0, !ve(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = ve(t) ? 0 : Se(t, ze.__wbindgen_malloc, ze.__wbindgen_realloc), r = Oe;
				we().setInt32(n + 4, r, !0), we().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(fe(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return ye(function(n, e) {
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
					t = n, _ = e, console.error(fe(n, e));
				} finally {
					ze.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return ye(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return ye(function(n, e) {
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
				return new Float64Array(ae(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(le(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return ye(function(n) {
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
				return ye(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(le(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return ye(function(n, e, t) {
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
				const t = Se(e.stack, ze.__wbindgen_malloc, ze.__wbindgen_realloc), _ = Oe;
				we().setInt32(n + 4, _, !0), we().setInt32(n + 0, t, !0);
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
				}(e, t, Zn.__wrap(_));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return ve(n) ? 0 : ie(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return ve(n) ? 0 : ie(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return ve(n) ? 0 : ie(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return ve(n) ? 0 : ie(n);
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
						0 === --_.cnt && (ze.__wbindgen_destroy_closure(_.a, _.b), _.a = 0, oe.unregister(_));
					}, oe.register(r, _, _), r;
				}(n, e, ee);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return le(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return fe(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = ze.__wbindgen_externrefs, e = n.grow(4);
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
function ee(n, e, t) {
	ze.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, t);
}
Symbol.dispose && (Zn.prototype[Symbol.dispose] = Zn.prototype.free);
const te = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ze.__wbg_streamchunkresult_free(n >>> 0, 1)), _e = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ze.__wbg_streamparseresult_free(n >>> 0, 1)), re = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ze.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function ie(n) {
	const e = ze.__externref_table_alloc();
	return ze.__wbindgen_externrefs.set(e, n), e;
}
const oe = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ze.__wbindgen_destroy_closure(n.a, n.b));
function ce(n) {
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
		e > 0 && (t += ce(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + ce(n[_]);
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
function ae(n, e) {
	return n >>>= 0, ge().subarray(n / 8, n / 8 + e);
}
function se(n, e) {
	return n >>>= 0, me().subarray(n / 4, n / 4 + e);
}
function le(n, e) {
	return n >>>= 0, pe().subarray(n / 1, n / 1 + e);
}
let ue = null;
function we() {
	return null !== ue && ue.buffer === ze.memory.buffer || (ue = new DataView(ze.memory.buffer)), ue;
}
let be = null;
function ge() {
	return null !== be && be.buffer === ze.memory.buffer || (be = new Float64Array(ze.memory.buffer)), be;
}
function fe(n, e) {
	return function(n, e) {
		return Pe += e, Pe >= Fe && (Ce = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Ce.decode(), Pe = e), Ce.decode(pe().slice(n, n + e));
	}(n >>>= 0, e);
}
let de = null;
function me() {
	return null !== de && de.buffer === ze.memory.buffer || (de = new Uint32Array(ze.memory.buffer)), de;
}
let he = null;
function pe() {
	return null !== he && he.buffer === ze.memory.buffer || (he = new Uint8Array(ze.memory.buffer)), he;
}
function ye(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = ie(t);
		ze.__wbindgen_exn_store(n);
	}
}
function ve(n) {
	return null == n;
}
function ke(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return me().set(n, t / 4), Oe = n.length, t;
}
function Ae(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return pe().set(n, t / 1), Oe = n.length, t;
}
function Re(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return ge().set(n, t / 8), Oe = n.length, t;
}
function Se(n, e, t) {
	if (void 0 === t) {
		const t = Me.encode(n), _ = e(t.length, 1) >>> 0;
		return pe().subarray(_, _ + t.length).set(t), Oe = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = pe();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = pe().subarray(r + o, r + _);
		o += Me.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return Oe = o, r;
}
function xe(n) {
	const e = ze.__wbindgen_externrefs.get(n);
	return ze.__externref_table_dealloc(n), e;
}
let Ce = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
Ce && Ce.decode();
const Fe = 2146435072;
let Pe = 0;
const Me = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
Me && (Me.encodeInto = function(n, e) {
	const t = Me.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let Ue, ze, Oe = 0;
function We(n, e, t) {
	if (ze = n.exports, Ue = e, ue = null, be = null, de = null, he = null, void 0 !== t && ("number" != typeof t || 0 === t || t % 65536 != 0)) throw new Error("invalid stack size");
	return ze.__wbindgen_start(t), ze;
}
function De(n, e) {
	if (void 0 !== ze) return ze;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const _ = ne(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), We(new WebAssembly.Instance(n, _), n, t);
}
async function Be(n, e) {
	if (void 0 !== ze) return ze;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-DLqc8GOc.wasm", "" + import.meta.url));
	const _ = ne(e);
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
	return We(r, i, t);
}
export { e as StreamChunkResult, t as StreamParseResult, _ as actoursVersion, r as aggregateEpochSeries, i as analyzePhysicalActivityDay, o as classifyActimetricPreschoolWristRf, c as classifyActimetricPreschoolWristRfLagLead, a as classifyActimetricPreschoolWristRfLagLeadCalibrated, s as computeAnglez5s, l as computeCircadian, u as computeCircadianTyped, w as computeEnmo5s, b as computeMimsUnit, g as computeMimsUnitDataframe, f as computeMimsUnitTimingBreakdown, d as computeMimsUnitValues, m as computeNightDifficulty, h as computeNightDifficultyTyped, p as computeNightSignals, y as computeNightSignalsTyped, v as computeSleepMetrics, k as configureComputeMemoryBudgetV1, A as csvBufferAppend, R as csvBufferClear, Be as default, S as detectDetachFromAccelerationG, x as detectDeviceFormat, C as detectGgirHasptVariant, F as detectHdcza, P as detectNonwear, M as detectNonwearChoi2011, U as detectNonwearChoi2011Bouts, z as detectNonwearChoi2011Epoch, O as detectNonwearChoi2012, W as detectNonwearChoi2012Bouts, D as detectNonwearChoiBouts, B as detectNonwearUnified, E as detectNonwearUnifiedBatchTyped, I as epochRawData, T as epochWithBandpass, j as executeHeroRuntime, N as extractCapsense, G as getComputeCapabilitiesV1, De as initSync, L as initThreadPool, V as installPanicHook, q as isGeneactivFormat, X as lstmSpectralFeatures30s, H as neishabouriCounts, J as parseActigraphCsv, $ as parseActigraphCsvBuffered, Y as parseCwa, Z as parseEpochSeries, K as parseGeneactivBin, Q as parseGeneactivCsv, nn as parseGeneactivCsvBuffered, en as parseGt3x, tn as placeMarkers, _n as placeMarkersBatch, rn as placeMarkersTyped, on as placeNonwearMarkers, cn as placeNonwearMarkersTyped, an as prepareCompactPipelineOutcomeV1, sn as prepareCompactPipelineV1, ln as processGeneactivRaw, un as processGt3xFull, wn as processGt3xFullWithEpoch, bn as processGt3xPart1, gn as processGt3xPart1WithEpoch, fn as processRawXyz, dn as processRawXyzImputed, mn as processRawXyzImputedWithEpoch, hn as readGgirMeta, pn as recommended_chunk_size_mb, yn as reduceF64V1, vn as runCompactPipelineOutcomeV1, kn as runCompactPipelineV1, An as runFullPipeline, Rn as runFullPipelineOutcomeV1, Sn as runFullPipelineV1, xn as runGgirFromEpoch, Cn as runMilestone, Fn as scoreAllDays, Pn as scoreColeKripke, Mn as scoreConsensus, Un as scoreConsensusMajority, zn as scoreConsensusTyped, On as scoreEpochs, Wn as scoreEpochsTyped, Dn as scoreGgirHasib, Bn as scoreGgirHasibVariant, En as scoreGgirSib, In as scoreSadeh, Tn as sha256StreamFeed, jn as sha256StreamFinish, Nn as sha256StreamStart, Gn as startThreadPool, Ln as streamParseFeed, Vn as streamParseFinish, qn as streamParseFinishChunk, Xn as streamParseStart, Hn as streamParseStartData, Jn as streamParseStartWithEpoch, $n as summarizeActimetricPreschoolWristRfClasses, Yn as threadPoolReady, Zn as wbg_rayon_PoolBuilder, Kn as wbg_rayon_start_worker, Qn as zeroCrossingCounts };
