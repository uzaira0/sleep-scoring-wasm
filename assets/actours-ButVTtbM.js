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
var e = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Ce.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		rt.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = rt.aw5batch_new(n);
		if (e[2]) throw Ke(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, Ce.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, t) {
		const _ = Ze(e, rt.__wbindgen_malloc, rt.__wbindgen_realloc), r = it;
		var i = He(t) ? 0 : Ze(t, rt.__wbindgen_malloc, rt.__wbindgen_realloc), o = it;
		const c = rt.aw5batch_recording(this.__wbg_ptr, n, _, r, i, o);
		if (c[2]) throw Ke(c[1]);
		return Ke(c[0]);
	}
	subjects(n) {
		const e = rt.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw Ke(e[1]);
		return Ke(e[0]);
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var t = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, Fe.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Fe.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		rt.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = rt.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = rt.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = rt.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = rt.streamchunkresult_axisX(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = rt.streamchunkresult_axisY(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = rt.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== rt.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = rt.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Be(n[0], n[1]).slice(), rt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = rt.streamchunkresult_counts(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = rt.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = rt.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = rt.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = rt.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = rt.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return rt.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = rt.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = rt.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== rt.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = rt.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Be(n[0], n[1]).slice(), rt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = rt.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = rt.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = rt.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== rt.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return rt.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return rt.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return rt.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = rt.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = rt.streamchunkresult_temperature(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = rt.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = rt.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = rt.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = rt.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = rt.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = rt.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, Pe.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Pe.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		rt.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = rt.streamparseresult_axisX(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = rt.streamparseresult_axisY(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = rt.streamparseresult_axisZ(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== rt.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = rt.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Be(n[0], n[1]).slice(), rt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return rt.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== rt.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return rt.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return rt.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = rt.streamparseresult_temperature(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = rt.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = rt.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = De(n[0], n[1]).slice();
		return rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function r(n) {
	const e = rt.actiwareIntervalStatistics(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function i(n, e, t) {
	const _ = rt.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function o() {
	let n, e;
	try {
		const t = rt.actoursVersion();
		return n = t[0], e = t[1], Be(t[0], t[1]);
	} finally {
		rt.__wbindgen_free(n, e, 1);
	}
}
function c(n) {
	const e = rt.aggregateEpochSeries(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function a(n) {
	let e, t;
	try {
		const i = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), o = it, c = rt.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ke(c[2]);
		return e = _, t = r, Be(_, r);
	} finally {
		rt.__wbindgen_free(e, t, 1);
	}
}
function s(n, e, t, _) {
	const r = Ye(n, rt.__wbindgen_malloc), i = it, o = Ye(e, rt.__wbindgen_malloc), c = it, a = Ye(t, rt.__wbindgen_malloc), s = it, l = rt.classifyActimetricPreschoolWristRf(r, i, o, c, a, s, _);
	if (l[3]) throw Ke(l[2]);
	var u = We(l[0], l[1]).slice();
	return rt.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function l(n, e, t, _) {
	const r = Ye(n, rt.__wbindgen_malloc), i = it, o = Ye(e, rt.__wbindgen_malloc), c = it, a = Ye(t, rt.__wbindgen_malloc), s = it, l = rt.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, s, _);
	if (l[3]) throw Ke(l[2]);
	var u = We(l[0], l[1]).slice();
	return rt.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function u(n, e, t, _) {
	const r = Ye(n, rt.__wbindgen_malloc), i = it, o = Ye(e, rt.__wbindgen_malloc), c = it, a = Ye(t, rt.__wbindgen_malloc), s = it, l = rt.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, s, _);
	if (l[3]) throw Ke(l[2]);
	var u = We(l[0], l[1]).slice();
	return rt.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function w(n, e) {
	const t = rt.compareNonwearDetectorMasks(n, e);
	if (t[2]) throw Ke(t[1]);
	return Ke(t[0]);
}
function g(n, e, t, _) {
	const r = Ye(n, rt.__wbindgen_malloc), i = it, o = Ye(e, rt.__wbindgen_malloc), c = it, a = Ye(t, rt.__wbindgen_malloc), s = it, l = rt.computeAnglez5s(r, i, o, c, a, s, _);
	var u = De(l[0], l[1]).slice();
	return rt.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function b(n) {
	let e, t;
	try {
		const i = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), o = it, c = rt.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ke(c[2]);
		return e = _, t = r, Be(_, r);
	} finally {
		rt.__wbindgen_free(e, t, 1);
	}
}
function f(n, e, t, _, r, i, o) {
	const c = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), a = it, s = Ye(e, rt.__wbindgen_malloc), l = it, u = Je(t, rt.__wbindgen_malloc), w = it, g = Ye(_, rt.__wbindgen_malloc), b = it, f = Je(r, rt.__wbindgen_malloc), d = it, m = $e(i, rt.__wbindgen_malloc), h = it, p = Je(o, rt.__wbindgen_malloc), y = it, v = rt.computeCircadianTyped(c, a, s, l, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw Ke(v[1]);
	return Ke(v[0]);
}
function d(n, e, t, _) {
	const r = Ye(n, rt.__wbindgen_malloc), i = it, o = Ye(e, rt.__wbindgen_malloc), c = it, a = Ye(t, rt.__wbindgen_malloc), s = it, l = rt.computeEnmo5s(r, i, o, c, a, s, _);
	var u = De(l[0], l[1]).slice();
	return rt.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function m(n, e, t, _, r) {
	const i = Ye(n, rt.__wbindgen_malloc), o = it, c = Ye(e, rt.__wbindgen_malloc), a = it, s = Ye(t, rt.__wbindgen_malloc), l = it, u = rt.computeMimsUnit(i, o, c, a, s, l, _, r);
	if (u[2]) throw Ke(u[1]);
	return Ke(u[0]);
}
function h(n, e, t, _, r) {
	const i = Ye(n, rt.__wbindgen_malloc), o = it, c = Ye(e, rt.__wbindgen_malloc), a = it, s = Ye(t, rt.__wbindgen_malloc), l = it, u = Ye(_, rt.__wbindgen_malloc), w = it, g = rt.computeMimsUnitDataframe(i, o, c, a, s, l, u, w, r);
	if (g[2]) throw Ke(g[1]);
	return Ke(g[0]);
}
function p(n, e, t, _, r) {
	const i = Ye(n, rt.__wbindgen_malloc), o = it, c = Ye(e, rt.__wbindgen_malloc), a = it, s = Ye(t, rt.__wbindgen_malloc), l = it, u = rt.computeMimsUnitTimingBreakdown(i, o, c, a, s, l, _, r);
	if (u[2]) throw Ke(u[1]);
	return Ke(u[0]);
}
function y(n, e, t, _, r) {
	const i = Ye(n, rt.__wbindgen_malloc), o = it, c = Ye(e, rt.__wbindgen_malloc), a = it, s = Ye(t, rt.__wbindgen_malloc), l = it, u = rt.computeMimsUnitValues(i, o, c, a, s, l, _, r);
	if (u[3]) throw Ke(u[2]);
	var w = De(u[0], u[1]).slice();
	return rt.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function v(n) {
	let e, t;
	try {
		const i = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), o = it, c = rt.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ke(c[2]);
		return e = _, t = r, Be(_, r);
	} finally {
		rt.__wbindgen_free(e, t, 1);
	}
}
function k(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), y = it, v = Ye(e, rt.__wbindgen_malloc), k = it, A = Je(t, rt.__wbindgen_malloc), R = it, S = Ye(_, rt.__wbindgen_malloc), x = it, C = Je(r, rt.__wbindgen_malloc), F = it, P = $e(i, rt.__wbindgen_malloc), z = it, M = Je(o, rt.__wbindgen_malloc), U = it, I = $e(c, rt.__wbindgen_malloc), D = it, N = Je(a, rt.__wbindgen_malloc), W = it, T = Ye(s, rt.__wbindgen_malloc), O = it, j = Je(l, rt.__wbindgen_malloc), E = it, B = Ye(u, rt.__wbindgen_malloc), G = it, L = Je(w, rt.__wbindgen_malloc), V = it, X = Ye(g, rt.__wbindgen_malloc), q = it, H = Je(b, rt.__wbindgen_malloc), J = it, $ = Ye(f, rt.__wbindgen_malloc), Y = it, Z = Je(d, rt.__wbindgen_malloc), K = it, Q = $e(m, rt.__wbindgen_malloc), nn = it, en = Je(h, rt.__wbindgen_malloc), tn = it, _n = rt.computeNightDifficultyTyped(p, y, v, k, A, R, S, x, C, F, P, z, M, U, I, D, N, W, T, O, j, E, B, G, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw Ke(_n[1]);
	return Ke(_n[0]);
}
function A(n) {
	let e, t;
	try {
		const i = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), o = it, c = rt.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ke(c[2]);
		return e = _, t = r, Be(_, r);
	} finally {
		rt.__wbindgen_free(e, t, 1);
	}
}
function R(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), y = it, v = Ye(e, rt.__wbindgen_malloc), k = it, A = Je(t, rt.__wbindgen_malloc), R = it, S = Ye(_, rt.__wbindgen_malloc), x = it, C = Je(r, rt.__wbindgen_malloc), F = it, P = $e(i, rt.__wbindgen_malloc), z = it, M = Je(o, rt.__wbindgen_malloc), U = it, I = $e(c, rt.__wbindgen_malloc), D = it, N = Je(a, rt.__wbindgen_malloc), W = it, T = Ye(s, rt.__wbindgen_malloc), O = it, j = Je(l, rt.__wbindgen_malloc), E = it, B = Ye(u, rt.__wbindgen_malloc), G = it, L = Je(w, rt.__wbindgen_malloc), V = it, X = Ye(g, rt.__wbindgen_malloc), q = it, H = Je(b, rt.__wbindgen_malloc), J = it, $ = Ye(f, rt.__wbindgen_malloc), Y = it, Z = Je(d, rt.__wbindgen_malloc), K = it, Q = $e(m, rt.__wbindgen_malloc), nn = it, en = Je(h, rt.__wbindgen_malloc), tn = it, _n = rt.computeNightSignalsTyped(p, y, v, k, A, R, S, x, C, F, P, z, M, U, I, D, N, W, T, O, j, E, B, G, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw Ke(_n[1]);
	return Ke(_n[0]);
}
function S(n, e, t) {
	const _ = $e(n, rt.__wbindgen_malloc), r = it, i = Ye(e, rt.__wbindgen_malloc), o = it, c = rt.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw Ke(c[1]);
	return Ke(c[0]);
}
function x(n) {
	const e = rt.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function C(n) {
	const e = $e(n, rt.__wbindgen_malloc), t = it;
	rt.csvBufferAppend(e, t);
}
function F(n) {
	rt.csvBufferClear(n);
}
function P(n, e) {
	const t = Ye(n, rt.__wbindgen_malloc), _ = it, r = Ye(e, rt.__wbindgen_malloc), i = it, o = rt.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw Ke(o[2]);
	var c = We(o[0], o[1]).slice();
	return rt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function z(n, e) {
	let t, _;
	try {
		const r = $e(n, rt.__wbindgen_malloc), i = it, o = Ze(e, rt.__wbindgen_malloc, rt.__wbindgen_realloc), c = it, a = rt.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], Be(a[0], a[1]);
	} finally {
		rt.__wbindgen_free(t, _, 1);
	}
}
function M(n) {
	const e = rt.detectGgirHasptVariant(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function U(n, e, t, _) {
	const r = Ye(n, rt.__wbindgen_malloc), i = it;
	var o = He(e) ? 0 : Ze(e, rt.__wbindgen_malloc, rt.__wbindgen_realloc), c = it, a = He(t) ? 0 : Ye(t, rt.__wbindgen_malloc), s = it, l = He(_) ? 0 : Ye(_, rt.__wbindgen_malloc), u = it;
	return rt.detectHdcza(r, i, o, c, a, s, l, u);
}
function I(n) {
	const e = Ye(n, rt.__wbindgen_malloc), t = it, _ = rt.detectNonwear(e, t);
	var r = We(_[0], _[1]).slice();
	return rt.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function D(n) {
	const e = Ye(n, rt.__wbindgen_malloc), t = it, _ = rt.detectNonwearChoi2011(e, t);
	var r = We(_[0], _[1]).slice();
	return rt.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function N(n) {
	const e = Ye(n, rt.__wbindgen_malloc), t = it, _ = rt.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function W(n, e) {
	const t = Ye(n, rt.__wbindgen_malloc), _ = it, r = rt.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw Ke(r[2]);
	var i = We(r[0], r[1]).slice();
	return rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function T(n) {
	const e = Ye(n, rt.__wbindgen_malloc), t = it, _ = rt.detectNonwearChoi2012(e, t);
	var r = We(_[0], _[1]).slice();
	return rt.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function O(n) {
	const e = Ye(n, rt.__wbindgen_malloc), t = it, _ = rt.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function j(n) {
	const e = Ye(n, rt.__wbindgen_malloc), t = it, _ = rt.detectNonwearChoiBouts(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function E(n) {
	let e, t;
	try {
		const i = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), o = it, c = rt.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ke(c[2]);
		return e = _, t = r, Be(_, r);
	} finally {
		rt.__wbindgen_free(e, t, 1);
	}
}
function B(n, e, t, _, r, i, o) {
	const c = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), a = it, s = Ze(e, rt.__wbindgen_malloc, rt.__wbindgen_realloc), l = it, u = Ye(t, rt.__wbindgen_malloc), w = it, g = Ye(_, rt.__wbindgen_malloc), b = it, f = Ye(r, rt.__wbindgen_malloc), d = it, m = rt.detectNonwearUnifiedBatchTyped(c, a, s, l, u, w, g, b, f, d, i, o);
	if (m[2]) throw Ke(m[1]);
	return Ke(m[0]);
}
function G(n, e) {
	const t = Ye(n, rt.__wbindgen_malloc), _ = it, r = Ye(e, rt.__wbindgen_malloc), i = it, o = rt.epochAgreement(t, _, r, i);
	if (o[2]) throw Ke(o[1]);
	return Ke(o[0]);
}
function L(n, e, t, _, r) {
	const i = Ye(n, rt.__wbindgen_malloc), o = it, c = Ye(e, rt.__wbindgen_malloc), a = it, s = Ye(t, rt.__wbindgen_malloc), l = it, u = Ye(_, rt.__wbindgen_malloc), w = it, g = rt.epochRawData(i, o, c, a, s, l, u, w, r);
	if (g[2]) throw Ke(g[1]);
	return Ke(g[0]);
}
function V(n, e, t) {
	const _ = Ye(n, rt.__wbindgen_malloc), r = it, i = Ye(e, rt.__wbindgen_malloc), o = it, c = rt.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw Ke(c[1]);
	return Ke(c[0]);
}
function X(n, e) {
	let t, _;
	try {
		const o = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), c = it, a = Ze(e, rt.__wbindgen_malloc, rt.__wbindgen_realloc), s = it, l = rt.executeHeroRuntime(o, c, a, s);
		var r = l[0], i = l[1];
		if (l[3]) throw r = 0, i = 0, Ke(l[2]);
		return t = r, _ = i, Be(r, i);
	} finally {
		rt.__wbindgen_free(t, _, 1);
	}
}
function q(n) {
	const e = rt.exportNapAggregate(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function H(n, e, t) {
	const _ = rt.exportPeriodFigures(!He(n), He(n) ? 0 : n, !He(e), He(e) ? 0 : e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function J(n) {
	const e = $e(n, rt.__wbindgen_malloc), t = it, _ = rt.extractCapsense(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function $(n) {
	const e = rt.fuseNonwearMasks(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function Y(n, e) {
	const t = rt.generateActiwareRestIntervals(n, e);
	if (t[2]) throw Ke(t[1]);
	return Ke(t[0]);
}
function Z() {
	const n = rt.getComputeCapabilitiesV1();
	if (n[2]) throw Ke(n[1]);
	return Ke(n[0]);
}
function K(n) {
	const e = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), t = it, _ = rt.ggirConfigValues(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function Q(n, e) {
	return rt.ggirSptDurationHours(n, e);
}
function nn(n, e) {
	const t = rt.ggirSummaryDenominator(n, e);
	if (t[2]) throw Ke(t[1]);
	return Ke(t[0]);
}
function en(n) {
	let e, t;
	try {
		const i = $e(n, rt.__wbindgen_malloc), o = it, c = rt.identifyGgirRData(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ke(c[2]);
		return e = _, t = r, Be(_, r);
	} finally {
		rt.__wbindgen_free(e, t, 1);
	}
}
function tn(n) {
	return rt.initThreadPool(n);
}
function _n() {
	rt.installPanicHook();
}
function rn(n) {
	const e = $e(n, rt.__wbindgen_malloc), t = it;
	return 0 !== rt.isGeneactivFormat(e, t);
}
function on(n, e, t, _) {
	const r = Ye(n, rt.__wbindgen_malloc), i = it, o = Ye(e, rt.__wbindgen_malloc), c = it, a = Ye(t, rt.__wbindgen_malloc), s = it, l = rt.lstmSpectralFeatures30s(r, i, o, c, a, s, _);
	if (l[2]) throw Ke(l[1]);
	return Ke(l[0]);
}
function cn(n, e, t, _, r) {
	const i = Ye(n, rt.__wbindgen_malloc), o = it, c = Ye(e, rt.__wbindgen_malloc), a = it, s = Ye(t, rt.__wbindgen_malloc), l = it, u = rt.neishabouriCounts(i, o, c, a, s, l, _, r);
	if (u[2]) throw Ke(u[1]);
	return Ke(u[0]);
}
function an(n, e, t, _) {
	let r, i;
	try {
		const a = Je(n, rt.__wbindgen_malloc), s = it, l = Ze(e, rt.__wbindgen_malloc, rt.__wbindgen_realloc), u = it, w = rt.nonwearContributors(a, s, l, u, t, _);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, Ke(w[2]);
		return r = o, i = c, Be(o, c);
	} finally {
		rt.__wbindgen_free(r, i, 1);
	}
}
function sn(n, e) {
	const t = $e(n, rt.__wbindgen_malloc), _ = it, r = rt.parseActigraphCsv(t, _, e);
	if (r[2]) throw Ke(r[1]);
	return Ke(r[0]);
}
function ln(n) {
	const e = rt.parseActigraphCsvBuffered(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function un(n, e, t, _) {
	const r = $e(n, rt.__wbindgen_malloc), i = it;
	var o = He(e) ? 0 : Ze(e, rt.__wbindgen_malloc, rt.__wbindgen_realloc), c = it, a = He(_) ? 0 : Ze(_, rt.__wbindgen_malloc, rt.__wbindgen_realloc), s = it;
	const l = rt.parseAw5(r, i, o, c, He(t) ? 0 : Me(t), a, s);
	if (l[2]) throw Ke(l[1]);
	return Ke(l[0]);
}
function wn(n) {
	const e = $e(n, rt.__wbindgen_malloc), t = it, _ = rt.parseCwa(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function gn(n, e) {
	const t = $e(n, rt.__wbindgen_malloc), _ = it, r = Ze(e, rt.__wbindgen_malloc, rt.__wbindgen_realloc), i = it, o = rt.parseEpochSeries(t, _, r, i);
	if (o[2]) throw Ke(o[1]);
	return Ke(o[0]);
}
function bn(n) {
	const e = $e(n, rt.__wbindgen_malloc), t = it, _ = rt.parseGeneactivBin(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function fn(n) {
	const e = $e(n, rt.__wbindgen_malloc), t = it, _ = rt.parseGeneactivCsv(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function dn() {
	const n = rt.parseGeneactivCsvBuffered();
	if (n[2]) throw Ke(n[1]);
	return Ke(n[0]);
}
function mn(n) {
	const e = $e(n, rt.__wbindgen_malloc), t = it, _ = rt.parseGt3x(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function hn(n) {
	let e, t;
	try {
		const i = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), o = it, c = rt.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ke(c[2]);
		return e = _, t = r, Be(_, r);
	} finally {
		rt.__wbindgen_free(e, t, 1);
	}
}
function pn(n, e, t, _, r, i) {
	const o = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), c = it, a = Ye(e, rt.__wbindgen_malloc), s = it, l = Ye(t, rt.__wbindgen_malloc), u = it, w = $e(_, rt.__wbindgen_malloc), g = it, b = $e(r, rt.__wbindgen_malloc), f = it, d = Ze(i, rt.__wbindgen_malloc, rt.__wbindgen_realloc), m = it, h = rt.placeMarkersBatch(o, c, a, s, l, u, w, g, b, f, d, m);
	if (h[2]) throw Ke(h[1]);
	return Ke(h[0]);
}
function yn(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), y = it, v = Ye(e, rt.__wbindgen_malloc), k = it, A = Je(t, rt.__wbindgen_malloc), R = it, S = Ye(_, rt.__wbindgen_malloc), x = it, C = Je(r, rt.__wbindgen_malloc), F = it, P = $e(i, rt.__wbindgen_malloc), z = it, M = Je(o, rt.__wbindgen_malloc), U = it, I = $e(c, rt.__wbindgen_malloc), D = it, N = Je(a, rt.__wbindgen_malloc), W = it, T = Ye(s, rt.__wbindgen_malloc), O = it, j = Je(l, rt.__wbindgen_malloc), E = it, B = Ye(u, rt.__wbindgen_malloc), G = it, L = Je(w, rt.__wbindgen_malloc), V = it, X = Ye(g, rt.__wbindgen_malloc), q = it, H = Je(b, rt.__wbindgen_malloc), J = it, $ = Ye(f, rt.__wbindgen_malloc), Y = it, Z = Je(d, rt.__wbindgen_malloc), K = it, Q = $e(m, rt.__wbindgen_malloc), nn = it, en = Je(h, rt.__wbindgen_malloc), tn = it, _n = rt.placeMarkersTyped(p, y, v, k, A, R, S, x, C, F, P, z, M, U, I, D, N, W, T, O, j, E, B, G, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw Ke(_n[1]);
	return Ke(_n[0]);
}
function vn(n) {
	let e, t;
	try {
		const i = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), o = it, c = rt.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ke(c[2]);
		return e = _, t = r, Be(_, r);
	} finally {
		rt.__wbindgen_free(e, t, 1);
	}
}
function kn(n, e, t, _) {
	const r = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), i = it, o = Ye(e, rt.__wbindgen_malloc), c = it, a = Ye(t, rt.__wbindgen_malloc), s = it, l = $e(_, rt.__wbindgen_malloc), u = it, w = rt.placeNonwearMarkersTyped(r, i, o, c, a, s, l, u);
	if (w[2]) throw Ke(w[1]);
	return Ke(w[0]);
}
function An(n) {
	const e = rt.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function Rn(n) {
	const e = rt.prepareCompactPipelineV1(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function Sn(n, e, t, _, r, i, o) {
	const c = Ye(n, rt.__wbindgen_malloc), a = it, s = Ye(e, rt.__wbindgen_malloc), l = it, u = Ye(t, rt.__wbindgen_malloc), w = it, g = Ye(_, rt.__wbindgen_malloc), b = it;
	var f = He(o) ? 0 : Ze(o, rt.__wbindgen_malloc, rt.__wbindgen_realloc), d = it;
	const m = rt.processGeneactivRaw(c, a, s, l, u, w, g, b, r, i, f, d);
	if (m[2]) throw Ke(m[1]);
	return Ke(m[0]);
}
function xn(n) {
	const e = $e(n, rt.__wbindgen_malloc), t = it, _ = rt.processGt3xFull(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function Cn(n, e) {
	const t = $e(n, rt.__wbindgen_malloc), _ = it, r = rt.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw Ke(r[1]);
	return Ke(r[0]);
}
function Fn(n) {
	const e = $e(n, rt.__wbindgen_malloc), t = it, _ = rt.processGt3xPart1(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function Pn(n, e) {
	const t = $e(n, rt.__wbindgen_malloc), _ = it, r = rt.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw Ke(r[1]);
	return Ke(r[0]);
}
function zn(n, e, t, _, r, i) {
	const o = Ye(n, rt.__wbindgen_malloc), c = it, a = Ye(e, rt.__wbindgen_malloc), s = it, l = Ye(t, rt.__wbindgen_malloc), u = it;
	var w = He(i) ? 0 : Ze(i, rt.__wbindgen_malloc, rt.__wbindgen_realloc), g = it;
	const b = rt.processRawXyz(o, c, a, s, l, u, _, r, w, g);
	if (b[2]) throw Ke(b[1]);
	return Ke(b[0]);
}
function Mn(n, e, t, _, r, i) {
	const o = Ye(n, rt.__wbindgen_malloc), c = it, a = Ye(e, rt.__wbindgen_malloc), s = it, l = Ye(t, rt.__wbindgen_malloc), u = it, w = Ye(_, rt.__wbindgen_malloc), g = it;
	var b = He(i) ? 0 : Ze(i, rt.__wbindgen_malloc, rt.__wbindgen_realloc), f = it;
	const d = rt.processRawXyzImputed(o, c, a, s, l, u, w, g, r, b, f);
	if (d[2]) throw Ke(d[1]);
	return Ke(d[0]);
}
function Un(n, e, t, _, r, i, o) {
	const c = Ye(n, rt.__wbindgen_malloc), a = it, s = Ye(e, rt.__wbindgen_malloc), l = it, u = Ye(t, rt.__wbindgen_malloc), w = it, g = Ye(_, rt.__wbindgen_malloc), b = it;
	var f = He(i) ? 0 : Ze(i, rt.__wbindgen_malloc, rt.__wbindgen_realloc), d = it;
	const m = rt.processRawXyzImputedWithEpoch(c, a, s, l, u, w, g, b, r, f, d, o);
	if (m[2]) throw Ke(m[1]);
	return Ke(m[0]);
}
function In(n, e, t, _) {
	const r = Ye(n, rt.__wbindgen_malloc), i = it, o = Ye(e, rt.__wbindgen_malloc), c = it, a = Ye(t, rt.__wbindgen_malloc), s = it, l = rt.rasterizePeriods(r, i, o, c, a, s, _);
	if (l[2]) throw Ke(l[1]);
	return Ke(l[0]);
}
function Dn(n) {
	const e = $e(n, rt.__wbindgen_malloc), t = it, _ = rt.readGgirMeta(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function Nn() {
	return rt.recommended_chunk_size_mb() >>> 0;
}
function Wn(n, e) {
	const t = Ye(n, rt.__wbindgen_malloc), _ = it, r = Ze(e, rt.__wbindgen_malloc, rt.__wbindgen_realloc), i = it, o = rt.reduceF64V1(t, _, r, i);
	if (o[2]) throw Ke(o[1]);
	return o[0];
}
function Tn(n) {
	const e = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), t = it, _ = rt.resolveTimezone(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function On(n, e, t, _, r, i, o, c, a, s, l) {
	const u = $e(n, rt.__wbindgen_malloc), w = it, g = Ze(e, rt.__wbindgen_malloc, rt.__wbindgen_realloc), b = it;
	var f = He(t) ? 0 : $e(t, rt.__wbindgen_malloc), d = it, m = He(_) ? 0 : $e(_, rt.__wbindgen_malloc), h = it, p = He(r) ? 0 : $e(r, rt.__wbindgen_malloc), y = it, v = He(i) ? 0 : $e(i, rt.__wbindgen_malloc), k = it, A = He(o) ? 0 : $e(o, rt.__wbindgen_malloc), R = it, S = He(c) ? 0 : Ze(c, rt.__wbindgen_malloc, rt.__wbindgen_realloc), x = it, C = He(a) ? 0 : Ze(a, rt.__wbindgen_malloc, rt.__wbindgen_realloc), F = it;
	const P = rt.reviewGgirResults(u, w, g, b, f, d, m, h, p, y, v, k, A, R, S, x, C, F, s, l);
	if (P[2]) throw Ke(P[1]);
	return Ke(P[0]);
}
function jn(n) {
	const e = rt.reviewNonwearFile(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function En(n) {
	const e = rt.reviewNonwearTotals(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function Bn(n) {
	const e = rt.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function Gn(n) {
	const e = rt.runCompactPipelineV1(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function Ln(n, e) {
	const t = rt.runFullPipeline(n, e);
	if (t[2]) throw Ke(t[1]);
	return Ke(t[0]);
}
function Vn(n) {
	const e = rt.runFullPipelineOutcomeV1(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function Xn(n) {
	const e = rt.runFullPipelineV1(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function qn(n, e) {
	const t = rt.runGgirFromEpoch(n, e);
	if (t[2]) throw Ke(t[1]);
	return Ke(t[0]);
}
function Hn(n) {
	const e = rt.runGgirPart3(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function Jn(n) {
	const e = $e(n, rt.__wbindgen_malloc), t = it, _ = rt.runMilestone(e, t);
	if (_[2]) throw Ke(_[1]);
	return Ke(_[0]);
}
function $n(n) {
	const e = rt.scoreAllDays(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function Yn(n, e) {
	const t = Ye(n, rt.__wbindgen_malloc), _ = it, r = rt.scoreColeKripke(t, _, e);
	var i = We(r[0], r[1]).slice();
	return rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Zn(n) {
	let e, t;
	try {
		const i = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), o = it, c = rt.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ke(c[2]);
		return e = _, t = r, Be(_, r);
	} finally {
		rt.__wbindgen_free(e, t, 1);
	}
}
function Kn(n) {
	const e = rt.scoreConsensusMajority(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function Qn(n, e, t) {
	const _ = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), r = it, i = $e(e, rt.__wbindgen_malloc), o = it, c = Je(t, rt.__wbindgen_malloc), a = it, s = rt.scoreConsensusTyped(_, r, i, o, c, a);
	if (s[2]) throw Ke(s[1]);
	return Ke(s[0]);
}
function ne(n) {
	let e, t;
	try {
		const i = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), o = it, c = rt.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ke(c[2]);
		return e = _, t = r, Be(_, r);
	} finally {
		rt.__wbindgen_free(e, t, 1);
	}
}
function ee(n, e, t, _, r, i) {
	const o = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), c = it, a = Ye(e, rt.__wbindgen_malloc), s = it, l = Ye(t, rt.__wbindgen_malloc), u = it, w = Ye(_, rt.__wbindgen_malloc), g = it, b = rt.scoreEpochsTyped(o, c, a, s, l, u, w, g, r, i);
	if (b[2]) throw Ke(b[1]);
	return Ke(b[0]);
}
function te(n) {
	const e = Ye(n, rt.__wbindgen_malloc), t = it, _ = rt.scoreGgirHasib(e, t);
	var r = We(_[0], _[1]).slice();
	return rt.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function _e(n) {
	const e = rt.scoreGgirHasibVariant(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function re(n, e, t) {
	const _ = Ye(n, rt.__wbindgen_malloc), r = it, i = Ye(e, rt.__wbindgen_malloc), o = it, c = rt.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw Ke(c[1]);
	return Ke(c[0]);
}
function ie(n, e) {
	const t = Ye(n, rt.__wbindgen_malloc), _ = it, r = rt.scoreSadeh(t, _, e);
	var i = We(r[0], r[1]).slice();
	return rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function oe(n) {
	const e = $e(n, rt.__wbindgen_malloc), t = it, _ = rt.sha256StreamFeed(e, t);
	if (_[1]) throw Ke(_[0]);
}
function ce() {
	let n, e;
	try {
		const r = rt.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, Ke(r[2]);
		return n = t, e = _, Be(t, _);
	} finally {
		rt.__wbindgen_free(n, e, 1);
	}
}
function ae() {
	rt.sha256StreamStart();
}
function se(n, e, t, _, r) {
	const i = Ze(n, rt.__wbindgen_malloc, rt.__wbindgen_realloc), o = it, c = Ye(e, rt.__wbindgen_malloc), a = it, s = Je(t, rt.__wbindgen_malloc), l = it, u = Ye(_, rt.__wbindgen_malloc), w = it, g = Je(r, rt.__wbindgen_malloc), b = it, f = rt.sleepRegularityIndex(i, o, c, a, s, l, u, w, g, b);
	if (f[3]) throw Ke(f[2]);
	return 0 === f[0] ? void 0 : f[1];
}
function le(n, e) {
	const t = rt.sleepWakeScores(n, e);
	if (t[2]) throw Ke(t[1]);
	return Ke(t[0]);
}
function ue(n) {
	return rt.startThreadPool(n);
}
function we(n) {
	const e = $e(n, rt.__wbindgen_malloc), t = it, _ = rt.streamParseFeed(e, t);
	if (_[2]) throw Ke(_[1]);
	return _[0] >>> 0;
}
function ge() {
	const n = rt.streamParseFinish();
	if (n[2]) throw Ke(n[1]);
	return _.__wrap(n[0]);
}
function be() {
	const n = rt.streamParseFinishChunk();
	if (n[2]) throw Ke(n[1]);
	return t.__wrap(n[0]);
}
function fe(n, e) {
	const t = rt.streamParseStart(n, e);
	if (t[1]) throw Ke(t[0]);
}
function de(n, e) {
	const t = rt.streamParseStartData(n, e);
	if (t[1]) throw Ke(t[0]);
}
function me(n, e, t) {
	const _ = rt.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw Ke(_[0]);
}
function he(n, e) {
	const t = $e(n, rt.__wbindgen_malloc), _ = it, r = rt.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw Ke(r[1]);
	return Ke(r[0]);
}
function pe(n) {
	const e = rt.summarizeExportGroups(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function ye(n) {
	const e = rt.summarizePhysicalActivityTrace(n);
	if (e[2]) throw Ke(e[1]);
	return Ke(e[0]);
}
function ve() {
	return 0 !== rt.threadPoolReady();
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var ke = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, ze.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ze.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		rt.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		rt.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return rt.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return rt.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return rt.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function Ae(n) {
	rt.wbg_rayon_start_worker(n);
}
function Re(n, e, t, _, r) {
	const i = Ye(n, rt.__wbindgen_malloc), o = it, c = Ye(e, rt.__wbindgen_malloc), a = it, s = Ye(t, rt.__wbindgen_malloc), l = it, u = rt.zeroCrossingCounts(i, o, c, a, s, l, _, r);
	if (u[2]) throw Ke(u[1]);
	return Ke(u[0]);
}
function Se(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(Be(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = Ze(String(e), rt.__wbindgen_malloc, rt.__wbindgen_realloc), _ = it;
				Oe().setInt32(n + 4, _, !0), Oe().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				Oe().setBigInt64(n + 8, He(t) ? BigInt(0) : t, !0), Oe().setInt32(n + 0, !He(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return He(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = Ze(Ie(e), rt.__wbindgen_malloc, rt.__wbindgen_realloc), _ = it;
				Oe().setInt32(n + 4, _, !0), Oe().setInt32(n + 0, t, !0);
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
				return rt.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return _t;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const t = "number" == typeof e ? e : void 0;
				Oe().setFloat64(n + 8, He(t) ? 0 : t, !0), Oe().setInt32(n + 0, !He(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = He(t) ? 0 : Ze(t, rt.__wbindgen_malloc, rt.__wbindgen_realloc), r = it;
				Oe().setInt32(n + 4, r, !0), Oe().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(Be(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return qe(function(n, e) {
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
					t = n, _ = e, console.error(Be(n, e));
				} finally {
					rt.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return qe(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return qe(function(n, e) {
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
				return new Float64Array(De(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(We(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return qe(function(n) {
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
				return qe(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(We(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return qe(function(n, e, t) {
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
				const t = Ze(e.stack, rt.__wbindgen_malloc, rt.__wbindgen_realloc), _ = it;
				Oe().setInt32(n + 4, _, !0), Oe().setInt32(n + 0, t, !0);
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
				}(e, t, ke.__wrap(_));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return He(n) ? 0 : Me(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return He(n) ? 0 : Me(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return He(n) ? 0 : Me(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return He(n) ? 0 : Me(n);
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
						0 === --_.cnt && (rt.__wbindgen_destroy_closure(_.a, _.b), _.a = 0, Ue.unregister(_));
					}, Ue.register(r, _, _), r;
				}(n, e, xe);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return We(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return Be(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = rt.__wbindgen_externrefs, e = n.grow(4);
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
function xe(n, e, t) {
	rt.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, t);
}
Symbol.dispose && (ke.prototype[Symbol.dispose] = ke.prototype.free);
const Ce = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => rt.__wbg_aw5batch_free(n >>> 0, 1)), Fe = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => rt.__wbg_streamchunkresult_free(n >>> 0, 1)), Pe = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => rt.__wbg_streamparseresult_free(n >>> 0, 1)), ze = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => rt.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function Me(n) {
	const e = rt.__externref_table_alloc();
	return rt.__wbindgen_externrefs.set(e, n), e;
}
const Ue = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => rt.__wbindgen_destroy_closure(n.a, n.b));
function Ie(n) {
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
		e > 0 && (t += Ie(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + Ie(n[_]);
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
function De(n, e) {
	return n >>>= 0, Ee().subarray(n / 8, n / 8 + e);
}
function Ne(n, e) {
	return n >>>= 0, Le().subarray(n / 4, n / 4 + e);
}
function We(n, e) {
	return n >>>= 0, Xe().subarray(n / 1, n / 1 + e);
}
let Te = null;
function Oe() {
	return null !== Te && Te.buffer === rt.memory.buffer || (Te = new DataView(rt.memory.buffer)), Te;
}
let je = null;
function Ee() {
	return null !== je && je.buffer === rt.memory.buffer || (je = new Float64Array(rt.memory.buffer)), je;
}
function Be(n, e) {
	return function(n, e) {
		return et += e, et >= nt && (Qe = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Qe.decode(), et = e), Qe.decode(Xe().slice(n, n + e));
	}(n >>>= 0, e);
}
let Ge = null;
function Le() {
	return null !== Ge && Ge.buffer === rt.memory.buffer || (Ge = new Uint32Array(rt.memory.buffer)), Ge;
}
let Ve = null;
function Xe() {
	return null !== Ve && Ve.buffer === rt.memory.buffer || (Ve = new Uint8Array(rt.memory.buffer)), Ve;
}
function qe(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = Me(t);
		rt.__wbindgen_exn_store(n);
	}
}
function He(n) {
	return null == n;
}
function Je(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return Le().set(n, t / 4), it = n.length, t;
}
function $e(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return Xe().set(n, t / 1), it = n.length, t;
}
function Ye(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return Ee().set(n, t / 8), it = n.length, t;
}
function Ze(n, e, t) {
	if (void 0 === t) {
		const t = tt.encode(n), _ = e(t.length, 1) >>> 0;
		return Xe().subarray(_, _ + t.length).set(t), it = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = Xe();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = Xe().subarray(r + o, r + _);
		o += tt.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return it = o, r;
}
function Ke(n) {
	const e = rt.__wbindgen_externrefs.get(n);
	return rt.__externref_table_dealloc(n), e;
}
let Qe = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
Qe && Qe.decode();
const nt = 2146435072;
let et = 0;
const tt = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
tt && (tt.encodeInto = function(n, e) {
	const t = tt.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let _t, rt, it = 0;
function ot(n, e, t) {
	if (rt = n.exports, _t = e, Te = null, je = null, Ge = null, Ve = null, void 0 !== t && ("number" != typeof t || 0 === t || t % 65536 != 0)) throw new Error("invalid stack size");
	return rt.__wbindgen_start(t), rt;
}
function ct(n, e) {
	if (void 0 !== rt) return rt;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const _ = Se(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), ot(new WebAssembly.Instance(n, _), n, t);
}
async function at(n, e) {
	if (void 0 !== rt) return rt;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-CdrNk-z9.wasm", "" + import.meta.url));
	const _ = Se(e);
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
	return ot(r, i, t);
}
export { e as Aw5Batch, t as StreamChunkResult, _ as StreamParseResult, r as actiwareIntervalStatistics, i as actiwareSleepIntervals, o as actoursVersion, c as aggregateEpochSeries, a as analyzePhysicalActivityDay, s as classifyActimetricPreschoolWristRf, l as classifyActimetricPreschoolWristRfLagLead, u as classifyActimetricPreschoolWristRfLagLeadCalibrated, w as compareNonwearDetectorMasks, g as computeAnglez5s, b as computeCircadian, f as computeCircadianTyped, d as computeEnmo5s, m as computeMimsUnit, h as computeMimsUnitDataframe, p as computeMimsUnitTimingBreakdown, y as computeMimsUnitValues, v as computeNightDifficulty, k as computeNightDifficultyTyped, A as computeNightSignals, R as computeNightSignalsTyped, S as computeSleepMetrics, x as configureComputeMemoryBudgetV1, C as csvBufferAppend, F as csvBufferClear, at as default, P as detectDetachFromAccelerationG, z as detectDeviceFormat, M as detectGgirHasptVariant, U as detectHdcza, I as detectNonwear, D as detectNonwearChoi2011, N as detectNonwearChoi2011Bouts, W as detectNonwearChoi2011Epoch, T as detectNonwearChoi2012, O as detectNonwearChoi2012Bouts, j as detectNonwearChoiBouts, E as detectNonwearUnified, B as detectNonwearUnifiedBatchTyped, G as epochAgreement, L as epochRawData, V as epochWithBandpass, X as executeHeroRuntime, q as exportNapAggregate, H as exportPeriodFigures, J as extractCapsense, $ as fuseNonwearMasks, Y as generateActiwareRestIntervals, Z as getComputeCapabilitiesV1, K as ggirConfigValues, Q as ggirSptDurationHours, nn as ggirSummaryDenominator, en as identifyGgirRData, ct as initSync, tn as initThreadPool, _n as installPanicHook, rn as isGeneactivFormat, on as lstmSpectralFeatures30s, cn as neishabouriCounts, an as nonwearContributors, sn as parseActigraphCsv, ln as parseActigraphCsvBuffered, un as parseAw5, wn as parseCwa, gn as parseEpochSeries, bn as parseGeneactivBin, fn as parseGeneactivCsv, dn as parseGeneactivCsvBuffered, mn as parseGt3x, hn as placeMarkers, pn as placeMarkersBatch, yn as placeMarkersTyped, vn as placeNonwearMarkers, kn as placeNonwearMarkersTyped, An as prepareCompactPipelineOutcomeV1, Rn as prepareCompactPipelineV1, Sn as processGeneactivRaw, xn as processGt3xFull, Cn as processGt3xFullWithEpoch, Fn as processGt3xPart1, Pn as processGt3xPart1WithEpoch, zn as processRawXyz, Mn as processRawXyzImputed, Un as processRawXyzImputedWithEpoch, In as rasterizePeriods, Dn as readGgirMeta, Nn as recommended_chunk_size_mb, Wn as reduceF64V1, Tn as resolveTimezone, On as reviewGgirResults, jn as reviewNonwearFile, En as reviewNonwearTotals, Bn as runCompactPipelineOutcomeV1, Gn as runCompactPipelineV1, Ln as runFullPipeline, Vn as runFullPipelineOutcomeV1, Xn as runFullPipelineV1, qn as runGgirFromEpoch, Hn as runGgirPart3, Jn as runMilestone, $n as scoreAllDays, Yn as scoreColeKripke, Zn as scoreConsensus, Kn as scoreConsensusMajority, Qn as scoreConsensusTyped, ne as scoreEpochs, ee as scoreEpochsTyped, te as scoreGgirHasib, _e as scoreGgirHasibVariant, re as scoreGgirSib, ie as scoreSadeh, oe as sha256StreamFeed, ce as sha256StreamFinish, ae as sha256StreamStart, se as sleepRegularityIndex, le as sleepWakeScores, ue as startThreadPool, we as streamParseFeed, ge as streamParseFinish, be as streamParseFinishChunk, fe as streamParseStart, de as streamParseStartData, me as streamParseStartWithEpoch, he as summarizeActimetricPreschoolWristRfClasses, pe as summarizeExportGroups, ye as summarizePhysicalActivityTrace, ve as threadPoolReady, ke as wbg_rayon_PoolBuilder, Ae as wbg_rayon_start_worker, Re as zeroCrossingCounts };
