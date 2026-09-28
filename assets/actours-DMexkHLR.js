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
		return this.__wbg_ptr = 0, Fe.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		it.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = it.aw5batch_new(n);
		if (e[2]) throw Qe(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, Fe.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, t) {
		const _ = Ke(e, it.__wbindgen_malloc, it.__wbindgen_realloc), r = ot;
		var i = Je(t) ? 0 : Ke(t, it.__wbindgen_malloc, it.__wbindgen_realloc), o = ot;
		const c = it.aw5batch_recording(this.__wbg_ptr, n, _, r, i, o);
		if (c[2]) throw Qe(c[1]);
		return Qe(c[0]);
	}
	subjects(n) {
		const e = it.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw Qe(e[1]);
		return Qe(e[0]);
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var t = class n {
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
		it.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = it.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = it.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = it.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = it.streamchunkresult_axisX(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = it.streamchunkresult_axisY(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = it.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== it.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = it.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Ge(n[0], n[1]).slice(), it.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = it.streamchunkresult_counts(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = it.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = it.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = it.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = it.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = Te(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = it.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = Te(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return it.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = it.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = it.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== it.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = it.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Ge(n[0], n[1]).slice(), it.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = it.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = it.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = it.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== it.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return it.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return it.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return it.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = it.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = it.streamchunkresult_temperature(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = it.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = it.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = it.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = it.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = it.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = it.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var _ = class n {
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
		it.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = it.streamparseresult_axisX(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = it.streamparseresult_axisY(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = it.streamparseresult_axisZ(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== it.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = it.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Ge(n[0], n[1]).slice(), it.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return it.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== it.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return it.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return it.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = it.streamparseresult_temperature(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = it.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = it.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = We(n[0], n[1]).slice();
		return it.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function r(n) {
	const e = it.actiwareIntervalStatistics(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function i(n, e, t) {
	const _ = it.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function o() {
	let n, e;
	try {
		const t = it.actoursVersion();
		return n = t[0], e = t[1], Ge(t[0], t[1]);
	} finally {
		it.__wbindgen_free(n, e, 1);
	}
}
function c(n) {
	const e = it.aggregateEpochSeries(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function a(n) {
	let e, t;
	try {
		const i = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), o = ot, c = it.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Qe(c[2]);
		return e = _, t = r, Ge(_, r);
	} finally {
		it.__wbindgen_free(e, t, 1);
	}
}
function s(n, e, t, _) {
	const r = Ze(n, it.__wbindgen_malloc), i = ot, o = Ze(e, it.__wbindgen_malloc), c = ot, a = Ze(t, it.__wbindgen_malloc), s = ot, l = it.classifyActimetricPreschoolWristRf(r, i, o, c, a, s, _);
	if (l[3]) throw Qe(l[2]);
	var u = Te(l[0], l[1]).slice();
	return it.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function l(n, e, t, _) {
	const r = Ze(n, it.__wbindgen_malloc), i = ot, o = Ze(e, it.__wbindgen_malloc), c = ot, a = Ze(t, it.__wbindgen_malloc), s = ot, l = it.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, s, _);
	if (l[3]) throw Qe(l[2]);
	var u = Te(l[0], l[1]).slice();
	return it.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function u(n, e, t, _) {
	const r = Ze(n, it.__wbindgen_malloc), i = ot, o = Ze(e, it.__wbindgen_malloc), c = ot, a = Ze(t, it.__wbindgen_malloc), s = ot, l = it.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, s, _);
	if (l[3]) throw Qe(l[2]);
	var u = Te(l[0], l[1]).slice();
	return it.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function w(n, e) {
	const t = it.compareNonwearDetectorMasks(n, e);
	if (t[2]) throw Qe(t[1]);
	return Qe(t[0]);
}
function g(n, e, t, _) {
	const r = Ze(n, it.__wbindgen_malloc), i = ot, o = Ze(e, it.__wbindgen_malloc), c = ot, a = Ze(t, it.__wbindgen_malloc), s = ot, l = it.computeAnglez5s(r, i, o, c, a, s, _);
	var u = We(l[0], l[1]).slice();
	return it.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function b(n) {
	let e, t;
	try {
		const i = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), o = ot, c = it.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Qe(c[2]);
		return e = _, t = r, Ge(_, r);
	} finally {
		it.__wbindgen_free(e, t, 1);
	}
}
function f(n, e, t, _, r, i, o) {
	const c = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), a = ot, s = Ze(e, it.__wbindgen_malloc), l = ot, u = $e(t, it.__wbindgen_malloc), w = ot, g = Ze(_, it.__wbindgen_malloc), b = ot, f = $e(r, it.__wbindgen_malloc), d = ot, m = Ye(i, it.__wbindgen_malloc), h = ot, p = $e(o, it.__wbindgen_malloc), y = ot, v = it.computeCircadianTyped(c, a, s, l, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw Qe(v[1]);
	return Qe(v[0]);
}
function d(n, e, t, _) {
	const r = Ze(n, it.__wbindgen_malloc), i = ot, o = Ze(e, it.__wbindgen_malloc), c = ot, a = Ze(t, it.__wbindgen_malloc), s = ot, l = it.computeEnmo5s(r, i, o, c, a, s, _);
	var u = We(l[0], l[1]).slice();
	return it.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function m(n, e, t, _, r) {
	const i = Ze(n, it.__wbindgen_malloc), o = ot, c = Ze(e, it.__wbindgen_malloc), a = ot, s = Ze(t, it.__wbindgen_malloc), l = ot, u = it.computeMimsUnit(i, o, c, a, s, l, _, r);
	if (u[2]) throw Qe(u[1]);
	return Qe(u[0]);
}
function h(n, e, t, _, r) {
	const i = Ze(n, it.__wbindgen_malloc), o = ot, c = Ze(e, it.__wbindgen_malloc), a = ot, s = Ze(t, it.__wbindgen_malloc), l = ot, u = Ze(_, it.__wbindgen_malloc), w = ot, g = it.computeMimsUnitDataframe(i, o, c, a, s, l, u, w, r);
	if (g[2]) throw Qe(g[1]);
	return Qe(g[0]);
}
function p(n, e, t, _, r) {
	const i = Ze(n, it.__wbindgen_malloc), o = ot, c = Ze(e, it.__wbindgen_malloc), a = ot, s = Ze(t, it.__wbindgen_malloc), l = ot, u = it.computeMimsUnitTimingBreakdown(i, o, c, a, s, l, _, r);
	if (u[2]) throw Qe(u[1]);
	return Qe(u[0]);
}
function y(n, e, t, _, r) {
	const i = Ze(n, it.__wbindgen_malloc), o = ot, c = Ze(e, it.__wbindgen_malloc), a = ot, s = Ze(t, it.__wbindgen_malloc), l = ot, u = it.computeMimsUnitValues(i, o, c, a, s, l, _, r);
	if (u[3]) throw Qe(u[2]);
	var w = We(u[0], u[1]).slice();
	return it.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function v(n) {
	let e, t;
	try {
		const i = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), o = ot, c = it.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Qe(c[2]);
		return e = _, t = r, Ge(_, r);
	} finally {
		it.__wbindgen_free(e, t, 1);
	}
}
function k(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), y = ot, v = Ze(e, it.__wbindgen_malloc), k = ot, A = $e(t, it.__wbindgen_malloc), R = ot, S = Ze(_, it.__wbindgen_malloc), x = ot, C = $e(r, it.__wbindgen_malloc), F = ot, P = Ye(i, it.__wbindgen_malloc), z = ot, M = $e(o, it.__wbindgen_malloc), U = ot, D = Ye(c, it.__wbindgen_malloc), I = ot, W = $e(a, it.__wbindgen_malloc), N = ot, T = Ze(s, it.__wbindgen_malloc), O = ot, j = $e(l, it.__wbindgen_malloc), B = ot, E = Ze(u, it.__wbindgen_malloc), G = ot, L = $e(w, it.__wbindgen_malloc), V = ot, X = Ze(g, it.__wbindgen_malloc), q = ot, H = $e(b, it.__wbindgen_malloc), J = ot, $ = Ze(f, it.__wbindgen_malloc), Y = ot, Z = $e(d, it.__wbindgen_malloc), K = ot, Q = Ye(m, it.__wbindgen_malloc), nn = ot, en = $e(h, it.__wbindgen_malloc), tn = ot, _n = it.computeNightDifficultyTyped(p, y, v, k, A, R, S, x, C, F, P, z, M, U, D, I, W, N, T, O, j, B, E, G, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw Qe(_n[1]);
	return Qe(_n[0]);
}
function A(n) {
	let e, t;
	try {
		const i = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), o = ot, c = it.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Qe(c[2]);
		return e = _, t = r, Ge(_, r);
	} finally {
		it.__wbindgen_free(e, t, 1);
	}
}
function R(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), y = ot, v = Ze(e, it.__wbindgen_malloc), k = ot, A = $e(t, it.__wbindgen_malloc), R = ot, S = Ze(_, it.__wbindgen_malloc), x = ot, C = $e(r, it.__wbindgen_malloc), F = ot, P = Ye(i, it.__wbindgen_malloc), z = ot, M = $e(o, it.__wbindgen_malloc), U = ot, D = Ye(c, it.__wbindgen_malloc), I = ot, W = $e(a, it.__wbindgen_malloc), N = ot, T = Ze(s, it.__wbindgen_malloc), O = ot, j = $e(l, it.__wbindgen_malloc), B = ot, E = Ze(u, it.__wbindgen_malloc), G = ot, L = $e(w, it.__wbindgen_malloc), V = ot, X = Ze(g, it.__wbindgen_malloc), q = ot, H = $e(b, it.__wbindgen_malloc), J = ot, $ = Ze(f, it.__wbindgen_malloc), Y = ot, Z = $e(d, it.__wbindgen_malloc), K = ot, Q = Ye(m, it.__wbindgen_malloc), nn = ot, en = $e(h, it.__wbindgen_malloc), tn = ot, _n = it.computeNightSignalsTyped(p, y, v, k, A, R, S, x, C, F, P, z, M, U, D, I, W, N, T, O, j, B, E, G, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw Qe(_n[1]);
	return Qe(_n[0]);
}
function S(n, e, t) {
	const _ = Ye(n, it.__wbindgen_malloc), r = ot, i = Ze(e, it.__wbindgen_malloc), o = ot, c = it.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw Qe(c[1]);
	return Qe(c[0]);
}
function x(n) {
	const e = it.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function C(n) {
	const e = Ye(n, it.__wbindgen_malloc), t = ot;
	it.csvBufferAppend(e, t);
}
function F(n) {
	it.csvBufferClear(n);
}
function P(n, e) {
	const t = Ze(n, it.__wbindgen_malloc), _ = ot, r = Ze(e, it.__wbindgen_malloc), i = ot, o = it.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw Qe(o[2]);
	var c = Te(o[0], o[1]).slice();
	return it.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function z(n, e) {
	let t, _;
	try {
		const r = Ye(n, it.__wbindgen_malloc), i = ot, o = Ke(e, it.__wbindgen_malloc, it.__wbindgen_realloc), c = ot, a = it.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], Ge(a[0], a[1]);
	} finally {
		it.__wbindgen_free(t, _, 1);
	}
}
function M(n) {
	const e = it.detectGgirHasptVariant(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function U(n, e, t, _) {
	const r = Ze(n, it.__wbindgen_malloc), i = ot;
	var o = Je(e) ? 0 : Ke(e, it.__wbindgen_malloc, it.__wbindgen_realloc), c = ot, a = Je(t) ? 0 : Ze(t, it.__wbindgen_malloc), s = ot, l = Je(_) ? 0 : Ze(_, it.__wbindgen_malloc), u = ot;
	return it.detectHdcza(r, i, o, c, a, s, l, u);
}
function D(n) {
	const e = Ze(n, it.__wbindgen_malloc), t = ot, _ = it.detectNonwear(e, t);
	var r = Te(_[0], _[1]).slice();
	return it.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function I(n) {
	const e = Ze(n, it.__wbindgen_malloc), t = ot, _ = it.detectNonwearChoi2011(e, t);
	var r = Te(_[0], _[1]).slice();
	return it.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function W(n) {
	const e = Ze(n, it.__wbindgen_malloc), t = ot, _ = it.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function N(n, e) {
	const t = Ze(n, it.__wbindgen_malloc), _ = ot, r = it.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw Qe(r[2]);
	var i = Te(r[0], r[1]).slice();
	return it.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function T(n) {
	const e = Ze(n, it.__wbindgen_malloc), t = ot, _ = it.detectNonwearChoi2012(e, t);
	var r = Te(_[0], _[1]).slice();
	return it.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function O(n) {
	const e = Ze(n, it.__wbindgen_malloc), t = ot, _ = it.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function j(n) {
	const e = Ze(n, it.__wbindgen_malloc), t = ot, _ = it.detectNonwearChoiBouts(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function B(n) {
	let e, t;
	try {
		const i = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), o = ot, c = it.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Qe(c[2]);
		return e = _, t = r, Ge(_, r);
	} finally {
		it.__wbindgen_free(e, t, 1);
	}
}
function E(n, e, t, _, r, i, o) {
	const c = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), a = ot, s = Ke(e, it.__wbindgen_malloc, it.__wbindgen_realloc), l = ot, u = Ze(t, it.__wbindgen_malloc), w = ot, g = Ze(_, it.__wbindgen_malloc), b = ot, f = Ze(r, it.__wbindgen_malloc), d = ot, m = it.detectNonwearUnifiedBatchTyped(c, a, s, l, u, w, g, b, f, d, i, o);
	if (m[2]) throw Qe(m[1]);
	return Qe(m[0]);
}
function G(n, e) {
	const t = Ze(n, it.__wbindgen_malloc), _ = ot, r = Ze(e, it.__wbindgen_malloc), i = ot, o = it.epochAgreement(t, _, r, i);
	if (o[2]) throw Qe(o[1]);
	return Qe(o[0]);
}
function L(n, e, t, _, r) {
	const i = Ze(n, it.__wbindgen_malloc), o = ot, c = Ze(e, it.__wbindgen_malloc), a = ot, s = Ze(t, it.__wbindgen_malloc), l = ot, u = Ze(_, it.__wbindgen_malloc), w = ot, g = it.epochRawData(i, o, c, a, s, l, u, w, r);
	if (g[2]) throw Qe(g[1]);
	return Qe(g[0]);
}
function V(n, e, t) {
	const _ = Ze(n, it.__wbindgen_malloc), r = ot, i = Ze(e, it.__wbindgen_malloc), o = ot, c = it.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw Qe(c[1]);
	return Qe(c[0]);
}
function X(n, e) {
	let t, _;
	try {
		const o = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), c = ot, a = Ke(e, it.__wbindgen_malloc, it.__wbindgen_realloc), s = ot, l = it.executeHeroRuntime(o, c, a, s);
		var r = l[0], i = l[1];
		if (l[3]) throw r = 0, i = 0, Qe(l[2]);
		return t = r, _ = i, Ge(r, i);
	} finally {
		it.__wbindgen_free(t, _, 1);
	}
}
function q(n) {
	const e = it.exportNapAggregate(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function H(n, e, t) {
	const _ = it.exportPeriodFigures(!Je(n), Je(n) ? 0 : n, !Je(e), Je(e) ? 0 : e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function J(n) {
	const e = Ye(n, it.__wbindgen_malloc), t = ot, _ = it.extractCapsense(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function $(n) {
	const e = it.fuseNonwearMasks(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function Y(n, e) {
	const t = it.generateActiwareRestIntervals(n, e);
	if (t[2]) throw Qe(t[1]);
	return Qe(t[0]);
}
function Z() {
	const n = it.getComputeCapabilitiesV1();
	if (n[2]) throw Qe(n[1]);
	return Qe(n[0]);
}
function K(n) {
	const e = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), t = ot, _ = it.ggirConfigValues(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function Q(n, e) {
	return it.ggirSptDurationHours(n, e);
}
function nn(n, e) {
	const t = it.ggirSummaryDenominator(n, e);
	if (t[2]) throw Qe(t[1]);
	return Qe(t[0]);
}
function en(n) {
	let e, t;
	try {
		const i = Ye(n, it.__wbindgen_malloc), o = ot, c = it.identifyGgirRData(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Qe(c[2]);
		return e = _, t = r, Ge(_, r);
	} finally {
		it.__wbindgen_free(e, t, 1);
	}
}
function tn(n) {
	return it.initThreadPool(n);
}
function _n() {
	it.installPanicHook();
}
function rn(n) {
	const e = Ye(n, it.__wbindgen_malloc), t = ot;
	return 0 !== it.isGeneactivFormat(e, t);
}
function on(n, e, t, _) {
	const r = Ze(n, it.__wbindgen_malloc), i = ot, o = Ze(e, it.__wbindgen_malloc), c = ot, a = Ze(t, it.__wbindgen_malloc), s = ot, l = it.lstmSpectralFeatures30s(r, i, o, c, a, s, _);
	if (l[2]) throw Qe(l[1]);
	return Qe(l[0]);
}
function cn(n, e, t, _, r) {
	const i = Ze(n, it.__wbindgen_malloc), o = ot, c = Ze(e, it.__wbindgen_malloc), a = ot, s = Ze(t, it.__wbindgen_malloc), l = ot, u = it.neishabouriCounts(i, o, c, a, s, l, _, r);
	if (u[2]) throw Qe(u[1]);
	return Qe(u[0]);
}
function an(n, e, t, _) {
	let r, i;
	try {
		const a = $e(n, it.__wbindgen_malloc), s = ot, l = Ke(e, it.__wbindgen_malloc, it.__wbindgen_realloc), u = ot, w = it.nonwearContributors(a, s, l, u, t, _);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, Qe(w[2]);
		return r = o, i = c, Ge(o, c);
	} finally {
		it.__wbindgen_free(r, i, 1);
	}
}
function sn(n, e) {
	const t = Ye(n, it.__wbindgen_malloc), _ = ot, r = it.parseActigraphCsv(t, _, e);
	if (r[2]) throw Qe(r[1]);
	return Qe(r[0]);
}
function ln(n) {
	const e = it.parseActigraphCsvBuffered(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function un(n, e, t, _) {
	const r = Ye(n, it.__wbindgen_malloc), i = ot;
	var o = Je(e) ? 0 : Ke(e, it.__wbindgen_malloc, it.__wbindgen_realloc), c = ot, a = Je(_) ? 0 : Ke(_, it.__wbindgen_malloc, it.__wbindgen_realloc), s = ot;
	const l = it.parseAw5(r, i, o, c, Je(t) ? 0 : Ue(t), a, s);
	if (l[2]) throw Qe(l[1]);
	return Qe(l[0]);
}
function wn(n) {
	const e = Ye(n, it.__wbindgen_malloc), t = ot, _ = it.parseCwa(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function gn(n, e) {
	const t = Ye(n, it.__wbindgen_malloc), _ = ot, r = Ke(e, it.__wbindgen_malloc, it.__wbindgen_realloc), i = ot, o = it.parseEpochSeries(t, _, r, i);
	if (o[2]) throw Qe(o[1]);
	return Qe(o[0]);
}
function bn(n) {
	const e = Ye(n, it.__wbindgen_malloc), t = ot, _ = it.parseGeneactivBin(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function fn(n) {
	const e = Ye(n, it.__wbindgen_malloc), t = ot, _ = it.parseGeneactivCsv(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function dn() {
	const n = it.parseGeneactivCsvBuffered();
	if (n[2]) throw Qe(n[1]);
	return Qe(n[0]);
}
function mn(n) {
	const e = Ye(n, it.__wbindgen_malloc), t = ot, _ = it.parseGt3x(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function hn(n) {
	let e, t;
	try {
		const i = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), o = ot, c = it.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Qe(c[2]);
		return e = _, t = r, Ge(_, r);
	} finally {
		it.__wbindgen_free(e, t, 1);
	}
}
function pn(n, e, t, _, r, i) {
	const o = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), c = ot, a = Ze(e, it.__wbindgen_malloc), s = ot, l = Ze(t, it.__wbindgen_malloc), u = ot, w = Ye(_, it.__wbindgen_malloc), g = ot, b = Ye(r, it.__wbindgen_malloc), f = ot, d = Ke(i, it.__wbindgen_malloc, it.__wbindgen_realloc), m = ot, h = it.placeMarkersBatch(o, c, a, s, l, u, w, g, b, f, d, m);
	if (h[2]) throw Qe(h[1]);
	return Qe(h[0]);
}
function yn(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), y = ot, v = Ze(e, it.__wbindgen_malloc), k = ot, A = $e(t, it.__wbindgen_malloc), R = ot, S = Ze(_, it.__wbindgen_malloc), x = ot, C = $e(r, it.__wbindgen_malloc), F = ot, P = Ye(i, it.__wbindgen_malloc), z = ot, M = $e(o, it.__wbindgen_malloc), U = ot, D = Ye(c, it.__wbindgen_malloc), I = ot, W = $e(a, it.__wbindgen_malloc), N = ot, T = Ze(s, it.__wbindgen_malloc), O = ot, j = $e(l, it.__wbindgen_malloc), B = ot, E = Ze(u, it.__wbindgen_malloc), G = ot, L = $e(w, it.__wbindgen_malloc), V = ot, X = Ze(g, it.__wbindgen_malloc), q = ot, H = $e(b, it.__wbindgen_malloc), J = ot, $ = Ze(f, it.__wbindgen_malloc), Y = ot, Z = $e(d, it.__wbindgen_malloc), K = ot, Q = Ye(m, it.__wbindgen_malloc), nn = ot, en = $e(h, it.__wbindgen_malloc), tn = ot, _n = it.placeMarkersTyped(p, y, v, k, A, R, S, x, C, F, P, z, M, U, D, I, W, N, T, O, j, B, E, G, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw Qe(_n[1]);
	return Qe(_n[0]);
}
function vn(n) {
	let e, t;
	try {
		const i = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), o = ot, c = it.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Qe(c[2]);
		return e = _, t = r, Ge(_, r);
	} finally {
		it.__wbindgen_free(e, t, 1);
	}
}
function kn(n, e, t, _) {
	const r = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), i = ot, o = Ze(e, it.__wbindgen_malloc), c = ot, a = Ze(t, it.__wbindgen_malloc), s = ot, l = Ye(_, it.__wbindgen_malloc), u = ot, w = it.placeNonwearMarkersTyped(r, i, o, c, a, s, l, u);
	if (w[2]) throw Qe(w[1]);
	return Qe(w[0]);
}
function An(n) {
	const e = it.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function Rn(n) {
	const e = it.prepareCompactPipelineV1(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function Sn(n, e, t, _, r, i, o) {
	const c = Ze(n, it.__wbindgen_malloc), a = ot, s = Ze(e, it.__wbindgen_malloc), l = ot, u = Ze(t, it.__wbindgen_malloc), w = ot, g = Ze(_, it.__wbindgen_malloc), b = ot;
	var f = Je(o) ? 0 : Ke(o, it.__wbindgen_malloc, it.__wbindgen_realloc), d = ot;
	const m = it.processGeneactivRaw(c, a, s, l, u, w, g, b, r, i, f, d);
	if (m[2]) throw Qe(m[1]);
	return Qe(m[0]);
}
function xn(n) {
	const e = Ye(n, it.__wbindgen_malloc), t = ot, _ = it.processGt3xFull(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function Cn(n, e) {
	const t = Ye(n, it.__wbindgen_malloc), _ = ot, r = it.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw Qe(r[1]);
	return Qe(r[0]);
}
function Fn(n) {
	const e = Ye(n, it.__wbindgen_malloc), t = ot, _ = it.processGt3xPart1(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function Pn(n, e) {
	const t = Ye(n, it.__wbindgen_malloc), _ = ot, r = it.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw Qe(r[1]);
	return Qe(r[0]);
}
function zn(n, e, t, _, r, i) {
	const o = Ze(n, it.__wbindgen_malloc), c = ot, a = Ze(e, it.__wbindgen_malloc), s = ot, l = Ze(t, it.__wbindgen_malloc), u = ot;
	var w = Je(i) ? 0 : Ke(i, it.__wbindgen_malloc, it.__wbindgen_realloc), g = ot;
	const b = it.processRawXyz(o, c, a, s, l, u, _, r, w, g);
	if (b[2]) throw Qe(b[1]);
	return Qe(b[0]);
}
function Mn(n, e, t, _, r, i) {
	const o = Ze(n, it.__wbindgen_malloc), c = ot, a = Ze(e, it.__wbindgen_malloc), s = ot, l = Ze(t, it.__wbindgen_malloc), u = ot, w = Ze(_, it.__wbindgen_malloc), g = ot;
	var b = Je(i) ? 0 : Ke(i, it.__wbindgen_malloc, it.__wbindgen_realloc), f = ot;
	const d = it.processRawXyzImputed(o, c, a, s, l, u, w, g, r, b, f);
	if (d[2]) throw Qe(d[1]);
	return Qe(d[0]);
}
function Un(n, e, t, _, r, i, o) {
	const c = Ze(n, it.__wbindgen_malloc), a = ot, s = Ze(e, it.__wbindgen_malloc), l = ot, u = Ze(t, it.__wbindgen_malloc), w = ot, g = Ze(_, it.__wbindgen_malloc), b = ot;
	var f = Je(i) ? 0 : Ke(i, it.__wbindgen_malloc, it.__wbindgen_realloc), d = ot;
	const m = it.processRawXyzImputedWithEpoch(c, a, s, l, u, w, g, b, r, f, d, o);
	if (m[2]) throw Qe(m[1]);
	return Qe(m[0]);
}
function Dn(n, e, t, _) {
	const r = Ze(n, it.__wbindgen_malloc), i = ot, o = Ze(e, it.__wbindgen_malloc), c = ot, a = Ze(t, it.__wbindgen_malloc), s = ot, l = it.rasterizePeriods(r, i, o, c, a, s, _);
	if (l[2]) throw Qe(l[1]);
	return Qe(l[0]);
}
function In(n) {
	const e = Ye(n, it.__wbindgen_malloc), t = ot, _ = it.readGgirMeta(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function Wn() {
	return it.recommended_chunk_size_mb() >>> 0;
}
function Nn(n, e) {
	const t = Ze(n, it.__wbindgen_malloc), _ = ot, r = Ke(e, it.__wbindgen_malloc, it.__wbindgen_realloc), i = ot, o = it.reduceF64V1(t, _, r, i);
	if (o[2]) throw Qe(o[1]);
	return o[0];
}
function Tn(n) {
	const e = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), t = ot, _ = it.resolveTimezone(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function On(n, e, t, _, r, i, o, c, a, s, l) {
	const u = Ye(n, it.__wbindgen_malloc), w = ot, g = Ke(e, it.__wbindgen_malloc, it.__wbindgen_realloc), b = ot;
	var f = Je(t) ? 0 : Ye(t, it.__wbindgen_malloc), d = ot, m = Je(_) ? 0 : Ye(_, it.__wbindgen_malloc), h = ot, p = Je(r) ? 0 : Ye(r, it.__wbindgen_malloc), y = ot, v = Je(i) ? 0 : Ye(i, it.__wbindgen_malloc), k = ot, A = Je(o) ? 0 : Ye(o, it.__wbindgen_malloc), R = ot, S = Je(c) ? 0 : Ke(c, it.__wbindgen_malloc, it.__wbindgen_realloc), x = ot, C = Je(a) ? 0 : Ke(a, it.__wbindgen_malloc, it.__wbindgen_realloc), F = ot;
	const P = it.reviewGgirResults(u, w, g, b, f, d, m, h, p, y, v, k, A, R, S, x, C, F, s, l);
	if (P[2]) throw Qe(P[1]);
	return Qe(P[0]);
}
function jn(n) {
	const e = it.reviewNonwearFile(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function Bn(n) {
	const e = it.reviewNonwearTotals(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function En(n) {
	const e = it.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function Gn(n) {
	const e = it.runCompactPipelineV1(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function Ln(n, e) {
	const t = it.runFullPipeline(n, e);
	if (t[2]) throw Qe(t[1]);
	return Qe(t[0]);
}
function Vn(n) {
	const e = it.runFullPipelineOutcomeV1(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function Xn(n) {
	const e = it.runFullPipelineV1(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function qn(n, e) {
	const t = it.runGgirFromEpoch(n, e);
	if (t[2]) throw Qe(t[1]);
	return Qe(t[0]);
}
function Hn(n) {
	const e = it.runGgirPart3(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function Jn(n) {
	const e = Ye(n, it.__wbindgen_malloc), t = ot, _ = it.runMilestone(e, t);
	if (_[2]) throw Qe(_[1]);
	return Qe(_[0]);
}
function $n(n) {
	const e = it.scoreAllDays(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function Yn(n, e) {
	const t = Ze(n, it.__wbindgen_malloc), _ = ot, r = it.scoreColeKripke(t, _, e);
	var i = Te(r[0], r[1]).slice();
	return it.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Zn(n) {
	let e, t;
	try {
		const i = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), o = ot, c = it.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Qe(c[2]);
		return e = _, t = r, Ge(_, r);
	} finally {
		it.__wbindgen_free(e, t, 1);
	}
}
function Kn(n) {
	const e = it.scoreConsensusMajority(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function Qn(n, e, t) {
	const _ = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), r = ot, i = Ye(e, it.__wbindgen_malloc), o = ot, c = $e(t, it.__wbindgen_malloc), a = ot, s = it.scoreConsensusTyped(_, r, i, o, c, a);
	if (s[2]) throw Qe(s[1]);
	return Qe(s[0]);
}
function ne(n) {
	let e, t;
	try {
		const i = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), o = ot, c = it.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Qe(c[2]);
		return e = _, t = r, Ge(_, r);
	} finally {
		it.__wbindgen_free(e, t, 1);
	}
}
function ee(n, e, t, _, r, i) {
	const o = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), c = ot, a = Ze(e, it.__wbindgen_malloc), s = ot, l = Ze(t, it.__wbindgen_malloc), u = ot, w = Ze(_, it.__wbindgen_malloc), g = ot, b = it.scoreEpochsTyped(o, c, a, s, l, u, w, g, r, i);
	if (b[2]) throw Qe(b[1]);
	return Qe(b[0]);
}
function te(n) {
	const e = Ze(n, it.__wbindgen_malloc), t = ot, _ = it.scoreGgirHasib(e, t);
	var r = Te(_[0], _[1]).slice();
	return it.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function _e(n) {
	const e = it.scoreGgirHasibVariant(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function re(n, e, t) {
	const _ = Ze(n, it.__wbindgen_malloc), r = ot, i = Ze(e, it.__wbindgen_malloc), o = ot, c = it.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw Qe(c[1]);
	return Qe(c[0]);
}
function ie(n, e) {
	const t = Ze(n, it.__wbindgen_malloc), _ = ot, r = it.scoreSadeh(t, _, e);
	var i = Te(r[0], r[1]).slice();
	return it.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function oe(n) {
	const e = Ye(n, it.__wbindgen_malloc), t = ot, _ = it.sha256StreamFeed(e, t);
	if (_[1]) throw Qe(_[0]);
}
function ce() {
	let n, e;
	try {
		const r = it.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, Qe(r[2]);
		return n = t, e = _, Ge(t, _);
	} finally {
		it.__wbindgen_free(n, e, 1);
	}
}
function ae() {
	it.sha256StreamStart();
}
function se(n, e, t, _, r) {
	const i = Ke(n, it.__wbindgen_malloc, it.__wbindgen_realloc), o = ot, c = Ze(e, it.__wbindgen_malloc), a = ot, s = $e(t, it.__wbindgen_malloc), l = ot, u = Ze(_, it.__wbindgen_malloc), w = ot, g = $e(r, it.__wbindgen_malloc), b = ot, f = it.sleepRegularityIndex(i, o, c, a, s, l, u, w, g, b);
	if (f[3]) throw Qe(f[2]);
	return 0 === f[0] ? void 0 : f[1];
}
function le(n, e) {
	const t = it.sleepWakeScores(n, e);
	if (t[2]) throw Qe(t[1]);
	return Qe(t[0]);
}
function ue(n) {
	return it.startThreadPool(n);
}
function we(n) {
	const e = Ye(n, it.__wbindgen_malloc), t = ot, _ = it.streamParseFeed(e, t);
	if (_[2]) throw Qe(_[1]);
	return _[0] >>> 0;
}
function ge() {
	const n = it.streamParseFinish();
	if (n[2]) throw Qe(n[1]);
	return _.__wrap(n[0]);
}
function be() {
	const n = it.streamParseFinishChunk();
	if (n[2]) throw Qe(n[1]);
	return t.__wrap(n[0]);
}
function fe(n) {
	const e = it.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw Qe(e[1]);
	return t.__wrap(e[0]);
}
function de(n, e) {
	const t = it.streamParseStart(n, e);
	if (t[1]) throw Qe(t[0]);
}
function me(n, e) {
	const t = it.streamParseStartData(n, e);
	if (t[1]) throw Qe(t[0]);
}
function he(n, e, t) {
	const _ = it.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw Qe(_[0]);
}
function pe(n, e) {
	const t = Ye(n, it.__wbindgen_malloc), _ = ot, r = it.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw Qe(r[1]);
	return Qe(r[0]);
}
function ye(n) {
	const e = it.summarizeExportGroups(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function ve(n) {
	const e = it.summarizePhysicalActivityTrace(n);
	if (e[2]) throw Qe(e[1]);
	return Qe(e[0]);
}
function ke() {
	return 0 !== it.threadPoolReady();
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var Ae = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, Me.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Me.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		it.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		it.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return it.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return it.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return it.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function Re(n) {
	it.wbg_rayon_start_worker(n);
}
function Se(n, e, t, _, r) {
	const i = Ze(n, it.__wbindgen_malloc), o = ot, c = Ze(e, it.__wbindgen_malloc), a = ot, s = Ze(t, it.__wbindgen_malloc), l = ot, u = it.zeroCrossingCounts(i, o, c, a, s, l, _, r);
	if (u[2]) throw Qe(u[1]);
	return Qe(u[0]);
}
function xe(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(Ge(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = Ke(String(e), it.__wbindgen_malloc, it.__wbindgen_realloc), _ = ot;
				je().setInt32(n + 4, _, !0), je().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				je().setBigInt64(n + 8, Je(t) ? BigInt(0) : t, !0), je().setInt32(n + 0, !Je(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return Je(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = Ke(Ie(e), it.__wbindgen_malloc, it.__wbindgen_realloc), _ = ot;
				je().setInt32(n + 4, _, !0), je().setInt32(n + 0, t, !0);
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
				return it.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return rt;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const t = "number" == typeof e ? e : void 0;
				je().setFloat64(n + 8, Je(t) ? 0 : t, !0), je().setInt32(n + 0, !Je(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = Je(t) ? 0 : Ke(t, it.__wbindgen_malloc, it.__wbindgen_realloc), r = ot;
				je().setInt32(n + 4, r, !0), je().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(Ge(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return He(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return He(function(n, e, t, _) {
					return n.call(e, t, _);
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
					t = n, _ = e, console.error(Ge(n, e));
				} finally {
					it.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return He(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return He(function(n, e) {
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
				return new Float64Array(We(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(Te(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return He(function(n) {
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
				return He(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(Te(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return He(function(n, e, t) {
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
				const t = Ke(e.stack, it.__wbindgen_malloc, it.__wbindgen_realloc), _ = ot;
				je().setInt32(n + 4, _, !0), je().setInt32(n + 0, t, !0);
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
				}(e, t, Ae.__wrap(_));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return Je(n) ? 0 : Ue(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return Je(n) ? 0 : Ue(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return Je(n) ? 0 : Ue(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return Je(n) ? 0 : Ue(n);
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
						0 === --_.cnt && (it.__wbindgen_destroy_closure(_.a, _.b), _.a = 0, De.unregister(_));
					}, De.register(r, _, _), r;
				}(n, e, Ce);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return Te(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return Ge(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = it.__wbindgen_externrefs, e = n.grow(4);
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
function Ce(n, e, t) {
	it.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, t);
}
Symbol.dispose && (Ae.prototype[Symbol.dispose] = Ae.prototype.free);
const Fe = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => it.__wbg_aw5batch_free(n >>> 0, 1)), Pe = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => it.__wbg_streamchunkresult_free(n >>> 0, 1)), ze = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => it.__wbg_streamparseresult_free(n >>> 0, 1)), Me = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => it.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function Ue(n) {
	const e = it.__externref_table_alloc();
	return it.__wbindgen_externrefs.set(e, n), e;
}
const De = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => it.__wbindgen_destroy_closure(n.a, n.b));
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
function We(n, e) {
	return n >>>= 0, Ee().subarray(n / 8, n / 8 + e);
}
function Ne(n, e) {
	return n >>>= 0, Ve().subarray(n / 4, n / 4 + e);
}
function Te(n, e) {
	return n >>>= 0, qe().subarray(n / 1, n / 1 + e);
}
let Oe = null;
function je() {
	return null !== Oe && Oe.buffer === it.memory.buffer || (Oe = new DataView(it.memory.buffer)), Oe;
}
let Be = null;
function Ee() {
	return null !== Be && Be.buffer === it.memory.buffer || (Be = new Float64Array(it.memory.buffer)), Be;
}
function Ge(n, e) {
	return function(n, e) {
		return tt += e, tt >= et && (nt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), nt.decode(), tt = e), nt.decode(qe().slice(n, n + e));
	}(n >>>= 0, e);
}
let Le = null;
function Ve() {
	return null !== Le && Le.buffer === it.memory.buffer || (Le = new Uint32Array(it.memory.buffer)), Le;
}
let Xe = null;
function qe() {
	return null !== Xe && Xe.buffer === it.memory.buffer || (Xe = new Uint8Array(it.memory.buffer)), Xe;
}
function He(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = Ue(t);
		it.__wbindgen_exn_store(n);
	}
}
function Je(n) {
	return null == n;
}
function $e(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return Ve().set(n, t / 4), ot = n.length, t;
}
function Ye(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return qe().set(n, t / 1), ot = n.length, t;
}
function Ze(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return Ee().set(n, t / 8), ot = n.length, t;
}
function Ke(n, e, t) {
	if (void 0 === t) {
		const t = _t.encode(n), _ = e(t.length, 1) >>> 0;
		return qe().subarray(_, _ + t.length).set(t), ot = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = qe();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = qe().subarray(r + o, r + _);
		o += _t.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return ot = o, r;
}
function Qe(n) {
	const e = it.__wbindgen_externrefs.get(n);
	return it.__externref_table_dealloc(n), e;
}
let nt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
nt && nt.decode();
const et = 2146435072;
let tt = 0;
const _t = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
_t && (_t.encodeInto = function(n, e) {
	const t = _t.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let rt, it, ot = 0;
function ct(n, e, t) {
	if (it = n.exports, rt = e, Oe = null, Be = null, Le = null, Xe = null, void 0 !== t && ("number" != typeof t || 0 === t || t % 65536 != 0)) throw new Error("invalid stack size");
	return it.__wbindgen_start(t), it;
}
function at(n, e) {
	if (void 0 !== it) return it;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const _ = xe(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), ct(new WebAssembly.Instance(n, _), n, t);
}
async function st(n, e) {
	if (void 0 !== it) return it;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-BKvKp28D.wasm", "" + import.meta.url));
	const _ = xe(e);
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
	return ct(r, i, t);
}
export { e as Aw5Batch, t as StreamChunkResult, _ as StreamParseResult, r as actiwareIntervalStatistics, i as actiwareSleepIntervals, o as actoursVersion, c as aggregateEpochSeries, a as analyzePhysicalActivityDay, s as classifyActimetricPreschoolWristRf, l as classifyActimetricPreschoolWristRfLagLead, u as classifyActimetricPreschoolWristRfLagLeadCalibrated, w as compareNonwearDetectorMasks, g as computeAnglez5s, b as computeCircadian, f as computeCircadianTyped, d as computeEnmo5s, m as computeMimsUnit, h as computeMimsUnitDataframe, p as computeMimsUnitTimingBreakdown, y as computeMimsUnitValues, v as computeNightDifficulty, k as computeNightDifficultyTyped, A as computeNightSignals, R as computeNightSignalsTyped, S as computeSleepMetrics, x as configureComputeMemoryBudgetV1, C as csvBufferAppend, F as csvBufferClear, st as default, P as detectDetachFromAccelerationG, z as detectDeviceFormat, M as detectGgirHasptVariant, U as detectHdcza, D as detectNonwear, I as detectNonwearChoi2011, W as detectNonwearChoi2011Bouts, N as detectNonwearChoi2011Epoch, T as detectNonwearChoi2012, O as detectNonwearChoi2012Bouts, j as detectNonwearChoiBouts, B as detectNonwearUnified, E as detectNonwearUnifiedBatchTyped, G as epochAgreement, L as epochRawData, V as epochWithBandpass, X as executeHeroRuntime, q as exportNapAggregate, H as exportPeriodFigures, J as extractCapsense, $ as fuseNonwearMasks, Y as generateActiwareRestIntervals, Z as getComputeCapabilitiesV1, K as ggirConfigValues, Q as ggirSptDurationHours, nn as ggirSummaryDenominator, en as identifyGgirRData, at as initSync, tn as initThreadPool, _n as installPanicHook, rn as isGeneactivFormat, on as lstmSpectralFeatures30s, cn as neishabouriCounts, an as nonwearContributors, sn as parseActigraphCsv, ln as parseActigraphCsvBuffered, un as parseAw5, wn as parseCwa, gn as parseEpochSeries, bn as parseGeneactivBin, fn as parseGeneactivCsv, dn as parseGeneactivCsvBuffered, mn as parseGt3x, hn as placeMarkers, pn as placeMarkersBatch, yn as placeMarkersTyped, vn as placeNonwearMarkers, kn as placeNonwearMarkersTyped, An as prepareCompactPipelineOutcomeV1, Rn as prepareCompactPipelineV1, Sn as processGeneactivRaw, xn as processGt3xFull, Cn as processGt3xFullWithEpoch, Fn as processGt3xPart1, Pn as processGt3xPart1WithEpoch, zn as processRawXyz, Mn as processRawXyzImputed, Un as processRawXyzImputedWithEpoch, Dn as rasterizePeriods, In as readGgirMeta, Wn as recommended_chunk_size_mb, Nn as reduceF64V1, Tn as resolveTimezone, On as reviewGgirResults, jn as reviewNonwearFile, Bn as reviewNonwearTotals, En as runCompactPipelineOutcomeV1, Gn as runCompactPipelineV1, Ln as runFullPipeline, Vn as runFullPipelineOutcomeV1, Xn as runFullPipelineV1, qn as runGgirFromEpoch, Hn as runGgirPart3, Jn as runMilestone, $n as scoreAllDays, Yn as scoreColeKripke, Zn as scoreConsensus, Kn as scoreConsensusMajority, Qn as scoreConsensusTyped, ne as scoreEpochs, ee as scoreEpochsTyped, te as scoreGgirHasib, _e as scoreGgirHasibVariant, re as scoreGgirSib, ie as scoreSadeh, oe as sha256StreamFeed, ce as sha256StreamFinish, ae as sha256StreamStart, se as sleepRegularityIndex, le as sleepWakeScores, ue as startThreadPool, we as streamParseFeed, ge as streamParseFinish, be as streamParseFinishChunk, fe as streamParseFinishChunkWithProgress, de as streamParseStart, me as streamParseStartData, he as streamParseStartWithEpoch, pe as summarizeActimetricPreschoolWristRfClasses, ye as summarizeExportGroups, ve as summarizePhysicalActivityTrace, ke as threadPoolReady, Ae as wbg_rayon_PoolBuilder, Re as wbg_rayon_start_worker, Se as zeroCrossingCounts };
