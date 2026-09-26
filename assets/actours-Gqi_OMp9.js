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
		return this.__wbg_ptr = 0, we.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Le.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = Le.aw5batch_new(n);
		if (e[2]) throw je(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, we.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, t) {
		const _ = Oe(e, Le.__wbindgen_malloc, Le.__wbindgen_realloc), r = Ve;
		var i = ze(t) ? 0 : Oe(t, Le.__wbindgen_malloc, Le.__wbindgen_realloc), o = Ve;
		const c = Le.aw5batch_recording(this.__wbg_ptr, n, _, r, i, o);
		if (c[2]) throw je(c[1]);
		return je(c[0]);
	}
	subjects(n) {
		const e = Le.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw je(e[1]);
		return je(e[0]);
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var t = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, ge.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ge.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Le.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Le.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Le.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Le.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Le.streamchunkresult_axisX(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Le.streamchunkresult_axisY(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Le.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Le.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Le.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = xe(n[0], n[1]).slice(), Le.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Le.streamchunkresult_counts(this.__wbg_ptr);
		var e = ye(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Le.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = ye(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Le.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Le.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return Le.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Le.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Le.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Le.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Le.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = xe(n[0], n[1]).slice(), Le.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Le.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Le.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Le.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Le.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Le.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Le.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Le.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = Le.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = ye(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Le.streamchunkresult_temperature(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Le.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Le.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Le.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Le.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Le.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Le.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, be.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, be.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Le.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Le.streamparseresult_axisX(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Le.streamparseresult_axisY(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Le.streamparseresult_axisZ(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Le.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Le.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = xe(n[0], n[1]).slice(), Le.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return Le.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== Le.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Le.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Le.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Le.streamparseresult_temperature(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Le.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Le.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = pe(n[0], n[1]).slice();
		return Le.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function r(n) {
	const e = Le.actiwareIntervalStatistics(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function i(n, e, t) {
	const _ = Le.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function o() {
	let n, e;
	try {
		const t = Le.actoursVersion();
		return n = t[0], e = t[1], xe(t[0], t[1]);
	} finally {
		Le.__wbindgen_free(n, e, 1);
	}
}
function c(n) {
	const e = Le.aggregateEpochSeries(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function a(n) {
	let e, t;
	try {
		const i = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), o = Ve, c = Le.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, je(c[2]);
		return e = _, t = r, xe(_, r);
	} finally {
		Le.__wbindgen_free(e, t, 1);
	}
}
function s(n, e, t, _) {
	const r = De(n, Le.__wbindgen_malloc), i = Ve, o = De(e, Le.__wbindgen_malloc), c = Ve, a = De(t, Le.__wbindgen_malloc), s = Ve, l = Le.classifyActimetricPreschoolWristRf(r, i, o, c, a, s, _);
	if (l[3]) throw je(l[2]);
	var u = ve(l[0], l[1]).slice();
	return Le.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function l(n, e, t, _) {
	const r = De(n, Le.__wbindgen_malloc), i = Ve, o = De(e, Le.__wbindgen_malloc), c = Ve, a = De(t, Le.__wbindgen_malloc), s = Ve, l = Le.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, s, _);
	if (l[3]) throw je(l[2]);
	var u = ve(l[0], l[1]).slice();
	return Le.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function u(n, e, t, _) {
	const r = De(n, Le.__wbindgen_malloc), i = Ve, o = De(e, Le.__wbindgen_malloc), c = Ve, a = De(t, Le.__wbindgen_malloc), s = Ve, l = Le.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, s, _);
	if (l[3]) throw je(l[2]);
	var u = ve(l[0], l[1]).slice();
	return Le.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function w(n, e, t, _) {
	const r = De(n, Le.__wbindgen_malloc), i = Ve, o = De(e, Le.__wbindgen_malloc), c = Ve, a = De(t, Le.__wbindgen_malloc), s = Ve, l = Le.computeAnglez5s(r, i, o, c, a, s, _);
	var u = pe(l[0], l[1]).slice();
	return Le.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function g(n) {
	let e, t;
	try {
		const i = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), o = Ve, c = Le.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, je(c[2]);
		return e = _, t = r, xe(_, r);
	} finally {
		Le.__wbindgen_free(e, t, 1);
	}
}
function b(n, e, t, _, r, i, o) {
	const c = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), a = Ve, s = De(e, Le.__wbindgen_malloc), l = Ve, u = We(t, Le.__wbindgen_malloc), w = Ve, g = De(_, Le.__wbindgen_malloc), b = Ve, f = We(r, Le.__wbindgen_malloc), d = Ve, m = Ie(i, Le.__wbindgen_malloc), h = Ve, p = We(o, Le.__wbindgen_malloc), y = Ve, v = Le.computeCircadianTyped(c, a, s, l, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw je(v[1]);
	return je(v[0]);
}
function f(n, e, t, _) {
	const r = De(n, Le.__wbindgen_malloc), i = Ve, o = De(e, Le.__wbindgen_malloc), c = Ve, a = De(t, Le.__wbindgen_malloc), s = Ve, l = Le.computeEnmo5s(r, i, o, c, a, s, _);
	var u = pe(l[0], l[1]).slice();
	return Le.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function d(n, e, t, _, r) {
	const i = De(n, Le.__wbindgen_malloc), o = Ve, c = De(e, Le.__wbindgen_malloc), a = Ve, s = De(t, Le.__wbindgen_malloc), l = Ve, u = Le.computeMimsUnit(i, o, c, a, s, l, _, r);
	if (u[2]) throw je(u[1]);
	return je(u[0]);
}
function m(n, e, t, _, r) {
	const i = De(n, Le.__wbindgen_malloc), o = Ve, c = De(e, Le.__wbindgen_malloc), a = Ve, s = De(t, Le.__wbindgen_malloc), l = Ve, u = De(_, Le.__wbindgen_malloc), w = Ve, g = Le.computeMimsUnitDataframe(i, o, c, a, s, l, u, w, r);
	if (g[2]) throw je(g[1]);
	return je(g[0]);
}
function h(n, e, t, _, r) {
	const i = De(n, Le.__wbindgen_malloc), o = Ve, c = De(e, Le.__wbindgen_malloc), a = Ve, s = De(t, Le.__wbindgen_malloc), l = Ve, u = Le.computeMimsUnitTimingBreakdown(i, o, c, a, s, l, _, r);
	if (u[2]) throw je(u[1]);
	return je(u[0]);
}
function p(n, e, t, _, r) {
	const i = De(n, Le.__wbindgen_malloc), o = Ve, c = De(e, Le.__wbindgen_malloc), a = Ve, s = De(t, Le.__wbindgen_malloc), l = Ve, u = Le.computeMimsUnitValues(i, o, c, a, s, l, _, r);
	if (u[3]) throw je(u[2]);
	var w = pe(u[0], u[1]).slice();
	return Le.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function y(n) {
	let e, t;
	try {
		const i = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), o = Ve, c = Le.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, je(c[2]);
		return e = _, t = r, xe(_, r);
	} finally {
		Le.__wbindgen_free(e, t, 1);
	}
}
function v(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), y = Ve, v = De(e, Le.__wbindgen_malloc), k = Ve, R = We(t, Le.__wbindgen_malloc), A = Ve, S = De(_, Le.__wbindgen_malloc), x = Ve, C = We(r, Le.__wbindgen_malloc), F = Ve, P = Ie(i, Le.__wbindgen_malloc), U = Ve, M = We(o, Le.__wbindgen_malloc), z = Ve, W = Ie(c, Le.__wbindgen_malloc), I = Ve, D = We(a, Le.__wbindgen_malloc), O = Ve, j = De(s, Le.__wbindgen_malloc), E = Ve, T = We(l, Le.__wbindgen_malloc), B = Ve, G = De(u, Le.__wbindgen_malloc), N = Ve, L = We(w, Le.__wbindgen_malloc), V = Ve, X = De(g, Le.__wbindgen_malloc), q = Ve, H = We(b, Le.__wbindgen_malloc), J = Ve, $ = De(f, Le.__wbindgen_malloc), Y = Ve, Z = We(d, Le.__wbindgen_malloc), K = Ve, Q = Ie(m, Le.__wbindgen_malloc), nn = Ve, en = We(h, Le.__wbindgen_malloc), tn = Ve, _n = Le.computeNightDifficultyTyped(p, y, v, k, R, A, S, x, C, F, P, U, M, z, W, I, D, O, j, E, T, B, G, N, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw je(_n[1]);
	return je(_n[0]);
}
function k(n) {
	let e, t;
	try {
		const i = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), o = Ve, c = Le.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, je(c[2]);
		return e = _, t = r, xe(_, r);
	} finally {
		Le.__wbindgen_free(e, t, 1);
	}
}
function R(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), y = Ve, v = De(e, Le.__wbindgen_malloc), k = Ve, R = We(t, Le.__wbindgen_malloc), A = Ve, S = De(_, Le.__wbindgen_malloc), x = Ve, C = We(r, Le.__wbindgen_malloc), F = Ve, P = Ie(i, Le.__wbindgen_malloc), U = Ve, M = We(o, Le.__wbindgen_malloc), z = Ve, W = Ie(c, Le.__wbindgen_malloc), I = Ve, D = We(a, Le.__wbindgen_malloc), O = Ve, j = De(s, Le.__wbindgen_malloc), E = Ve, T = We(l, Le.__wbindgen_malloc), B = Ve, G = De(u, Le.__wbindgen_malloc), N = Ve, L = We(w, Le.__wbindgen_malloc), V = Ve, X = De(g, Le.__wbindgen_malloc), q = Ve, H = We(b, Le.__wbindgen_malloc), J = Ve, $ = De(f, Le.__wbindgen_malloc), Y = Ve, Z = We(d, Le.__wbindgen_malloc), K = Ve, Q = Ie(m, Le.__wbindgen_malloc), nn = Ve, en = We(h, Le.__wbindgen_malloc), tn = Ve, _n = Le.computeNightSignalsTyped(p, y, v, k, R, A, S, x, C, F, P, U, M, z, W, I, D, O, j, E, T, B, G, N, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw je(_n[1]);
	return je(_n[0]);
}
function A(n, e, t) {
	const _ = Ie(n, Le.__wbindgen_malloc), r = Ve, i = De(e, Le.__wbindgen_malloc), o = Ve, c = Le.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw je(c[1]);
	return je(c[0]);
}
function S(n) {
	const e = Le.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function x(n) {
	const e = Ie(n, Le.__wbindgen_malloc), t = Ve;
	Le.csvBufferAppend(e, t);
}
function C(n) {
	Le.csvBufferClear(n);
}
function F(n, e) {
	const t = De(n, Le.__wbindgen_malloc), _ = Ve, r = De(e, Le.__wbindgen_malloc), i = Ve, o = Le.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw je(o[2]);
	var c = ve(o[0], o[1]).slice();
	return Le.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function P(n, e) {
	let t, _;
	try {
		const r = Ie(n, Le.__wbindgen_malloc), i = Ve, o = Oe(e, Le.__wbindgen_malloc, Le.__wbindgen_realloc), c = Ve, a = Le.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], xe(a[0], a[1]);
	} finally {
		Le.__wbindgen_free(t, _, 1);
	}
}
function U(n) {
	const e = Le.detectGgirHasptVariant(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function M(n, e, t, _) {
	const r = De(n, Le.__wbindgen_malloc), i = Ve;
	var o = ze(e) ? 0 : Oe(e, Le.__wbindgen_malloc, Le.__wbindgen_realloc), c = Ve, a = ze(t) ? 0 : De(t, Le.__wbindgen_malloc), s = Ve, l = ze(_) ? 0 : De(_, Le.__wbindgen_malloc), u = Ve;
	return Le.detectHdcza(r, i, o, c, a, s, l, u);
}
function z(n) {
	const e = De(n, Le.__wbindgen_malloc), t = Ve, _ = Le.detectNonwear(e, t);
	var r = ve(_[0], _[1]).slice();
	return Le.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function W(n) {
	const e = De(n, Le.__wbindgen_malloc), t = Ve, _ = Le.detectNonwearChoi2011(e, t);
	var r = ve(_[0], _[1]).slice();
	return Le.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function I(n) {
	const e = De(n, Le.__wbindgen_malloc), t = Ve, _ = Le.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function D(n, e) {
	const t = De(n, Le.__wbindgen_malloc), _ = Ve, r = Le.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw je(r[2]);
	var i = ve(r[0], r[1]).slice();
	return Le.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function O(n) {
	const e = De(n, Le.__wbindgen_malloc), t = Ve, _ = Le.detectNonwearChoi2012(e, t);
	var r = ve(_[0], _[1]).slice();
	return Le.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function j(n) {
	const e = De(n, Le.__wbindgen_malloc), t = Ve, _ = Le.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function E(n) {
	const e = De(n, Le.__wbindgen_malloc), t = Ve, _ = Le.detectNonwearChoiBouts(e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function T(n) {
	let e, t;
	try {
		const i = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), o = Ve, c = Le.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, je(c[2]);
		return e = _, t = r, xe(_, r);
	} finally {
		Le.__wbindgen_free(e, t, 1);
	}
}
function B(n, e, t, _, r, i, o) {
	const c = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), a = Ve, s = Oe(e, Le.__wbindgen_malloc, Le.__wbindgen_realloc), l = Ve, u = De(t, Le.__wbindgen_malloc), w = Ve, g = De(_, Le.__wbindgen_malloc), b = Ve, f = De(r, Le.__wbindgen_malloc), d = Ve, m = Le.detectNonwearUnifiedBatchTyped(c, a, s, l, u, w, g, b, f, d, i, o);
	if (m[2]) throw je(m[1]);
	return je(m[0]);
}
function G(n, e, t, _, r) {
	const i = De(n, Le.__wbindgen_malloc), o = Ve, c = De(e, Le.__wbindgen_malloc), a = Ve, s = De(t, Le.__wbindgen_malloc), l = Ve, u = De(_, Le.__wbindgen_malloc), w = Ve, g = Le.epochRawData(i, o, c, a, s, l, u, w, r);
	if (g[2]) throw je(g[1]);
	return je(g[0]);
}
function N(n, e, t) {
	const _ = De(n, Le.__wbindgen_malloc), r = Ve, i = De(e, Le.__wbindgen_malloc), o = Ve, c = Le.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw je(c[1]);
	return je(c[0]);
}
function L(n, e) {
	let t, _;
	try {
		const o = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), c = Ve, a = Oe(e, Le.__wbindgen_malloc, Le.__wbindgen_realloc), s = Ve, l = Le.executeHeroRuntime(o, c, a, s);
		var r = l[0], i = l[1];
		if (l[3]) throw r = 0, i = 0, je(l[2]);
		return t = r, _ = i, xe(r, i);
	} finally {
		Le.__wbindgen_free(t, _, 1);
	}
}
function V(n) {
	const e = Ie(n, Le.__wbindgen_malloc), t = Ve, _ = Le.extractCapsense(e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function X(n, e) {
	const t = Le.generateActiwareRestIntervals(n, e);
	if (t[2]) throw je(t[1]);
	return je(t[0]);
}
function q() {
	const n = Le.getComputeCapabilitiesV1();
	if (n[2]) throw je(n[1]);
	return je(n[0]);
}
function H(n) {
	let e, t;
	try {
		const i = Ie(n, Le.__wbindgen_malloc), o = Ve, c = Le.identifyGgirRData(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, je(c[2]);
		return e = _, t = r, xe(_, r);
	} finally {
		Le.__wbindgen_free(e, t, 1);
	}
}
function J(n) {
	return Le.initThreadPool(n);
}
function $() {
	Le.installPanicHook();
}
function Y(n) {
	const e = Ie(n, Le.__wbindgen_malloc), t = Ve;
	return 0 !== Le.isGeneactivFormat(e, t);
}
function Z(n, e, t, _) {
	const r = De(n, Le.__wbindgen_malloc), i = Ve, o = De(e, Le.__wbindgen_malloc), c = Ve, a = De(t, Le.__wbindgen_malloc), s = Ve, l = Le.lstmSpectralFeatures30s(r, i, o, c, a, s, _);
	if (l[2]) throw je(l[1]);
	return je(l[0]);
}
function K(n, e, t, _, r) {
	const i = De(n, Le.__wbindgen_malloc), o = Ve, c = De(e, Le.__wbindgen_malloc), a = Ve, s = De(t, Le.__wbindgen_malloc), l = Ve, u = Le.neishabouriCounts(i, o, c, a, s, l, _, r);
	if (u[2]) throw je(u[1]);
	return je(u[0]);
}
function Q(n, e) {
	const t = Ie(n, Le.__wbindgen_malloc), _ = Ve, r = Le.parseActigraphCsv(t, _, e);
	if (r[2]) throw je(r[1]);
	return je(r[0]);
}
function nn(n) {
	const e = Le.parseActigraphCsvBuffered(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function en(n, e, t, _) {
	const r = Ie(n, Le.__wbindgen_malloc), i = Ve;
	var o = ze(e) ? 0 : Oe(e, Le.__wbindgen_malloc, Le.__wbindgen_realloc), c = Ve, a = ze(_) ? 0 : Oe(_, Le.__wbindgen_malloc, Le.__wbindgen_realloc), s = Ve;
	const l = Le.parseAw5(r, i, o, c, ze(t) ? 0 : de(t), a, s);
	if (l[2]) throw je(l[1]);
	return je(l[0]);
}
function tn(n) {
	const e = Ie(n, Le.__wbindgen_malloc), t = Ve, _ = Le.parseCwa(e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function _n(n, e) {
	const t = Ie(n, Le.__wbindgen_malloc), _ = Ve, r = Oe(e, Le.__wbindgen_malloc, Le.__wbindgen_realloc), i = Ve, o = Le.parseEpochSeries(t, _, r, i);
	if (o[2]) throw je(o[1]);
	return je(o[0]);
}
function rn(n) {
	const e = Ie(n, Le.__wbindgen_malloc), t = Ve, _ = Le.parseGeneactivBin(e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function on(n) {
	const e = Ie(n, Le.__wbindgen_malloc), t = Ve, _ = Le.parseGeneactivCsv(e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function cn() {
	const n = Le.parseGeneactivCsvBuffered();
	if (n[2]) throw je(n[1]);
	return je(n[0]);
}
function an(n) {
	const e = Ie(n, Le.__wbindgen_malloc), t = Ve, _ = Le.parseGt3x(e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function sn(n) {
	let e, t;
	try {
		const i = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), o = Ve, c = Le.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, je(c[2]);
		return e = _, t = r, xe(_, r);
	} finally {
		Le.__wbindgen_free(e, t, 1);
	}
}
function ln(n, e, t, _, r, i) {
	const o = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), c = Ve, a = De(e, Le.__wbindgen_malloc), s = Ve, l = De(t, Le.__wbindgen_malloc), u = Ve, w = Ie(_, Le.__wbindgen_malloc), g = Ve, b = Ie(r, Le.__wbindgen_malloc), f = Ve, d = Oe(i, Le.__wbindgen_malloc, Le.__wbindgen_realloc), m = Ve, h = Le.placeMarkersBatch(o, c, a, s, l, u, w, g, b, f, d, m);
	if (h[2]) throw je(h[1]);
	return je(h[0]);
}
function un(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), y = Ve, v = De(e, Le.__wbindgen_malloc), k = Ve, R = We(t, Le.__wbindgen_malloc), A = Ve, S = De(_, Le.__wbindgen_malloc), x = Ve, C = We(r, Le.__wbindgen_malloc), F = Ve, P = Ie(i, Le.__wbindgen_malloc), U = Ve, M = We(o, Le.__wbindgen_malloc), z = Ve, W = Ie(c, Le.__wbindgen_malloc), I = Ve, D = We(a, Le.__wbindgen_malloc), O = Ve, j = De(s, Le.__wbindgen_malloc), E = Ve, T = We(l, Le.__wbindgen_malloc), B = Ve, G = De(u, Le.__wbindgen_malloc), N = Ve, L = We(w, Le.__wbindgen_malloc), V = Ve, X = De(g, Le.__wbindgen_malloc), q = Ve, H = We(b, Le.__wbindgen_malloc), J = Ve, $ = De(f, Le.__wbindgen_malloc), Y = Ve, Z = We(d, Le.__wbindgen_malloc), K = Ve, Q = Ie(m, Le.__wbindgen_malloc), nn = Ve, en = We(h, Le.__wbindgen_malloc), tn = Ve, _n = Le.placeMarkersTyped(p, y, v, k, R, A, S, x, C, F, P, U, M, z, W, I, D, O, j, E, T, B, G, N, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw je(_n[1]);
	return je(_n[0]);
}
function wn(n) {
	let e, t;
	try {
		const i = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), o = Ve, c = Le.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, je(c[2]);
		return e = _, t = r, xe(_, r);
	} finally {
		Le.__wbindgen_free(e, t, 1);
	}
}
function gn(n, e, t, _) {
	const r = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), i = Ve, o = De(e, Le.__wbindgen_malloc), c = Ve, a = De(t, Le.__wbindgen_malloc), s = Ve, l = Ie(_, Le.__wbindgen_malloc), u = Ve, w = Le.placeNonwearMarkersTyped(r, i, o, c, a, s, l, u);
	if (w[2]) throw je(w[1]);
	return je(w[0]);
}
function bn(n) {
	const e = Le.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function fn(n) {
	const e = Le.prepareCompactPipelineV1(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function dn(n, e, t, _, r, i, o) {
	const c = De(n, Le.__wbindgen_malloc), a = Ve, s = De(e, Le.__wbindgen_malloc), l = Ve, u = De(t, Le.__wbindgen_malloc), w = Ve, g = De(_, Le.__wbindgen_malloc), b = Ve;
	var f = ze(o) ? 0 : Oe(o, Le.__wbindgen_malloc, Le.__wbindgen_realloc), d = Ve;
	const m = Le.processGeneactivRaw(c, a, s, l, u, w, g, b, r, i, f, d);
	if (m[2]) throw je(m[1]);
	return je(m[0]);
}
function mn(n) {
	const e = Ie(n, Le.__wbindgen_malloc), t = Ve, _ = Le.processGt3xFull(e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function hn(n, e) {
	const t = Ie(n, Le.__wbindgen_malloc), _ = Ve, r = Le.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw je(r[1]);
	return je(r[0]);
}
function pn(n) {
	const e = Ie(n, Le.__wbindgen_malloc), t = Ve, _ = Le.processGt3xPart1(e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function yn(n, e) {
	const t = Ie(n, Le.__wbindgen_malloc), _ = Ve, r = Le.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw je(r[1]);
	return je(r[0]);
}
function vn(n, e, t, _, r, i) {
	const o = De(n, Le.__wbindgen_malloc), c = Ve, a = De(e, Le.__wbindgen_malloc), s = Ve, l = De(t, Le.__wbindgen_malloc), u = Ve;
	var w = ze(i) ? 0 : Oe(i, Le.__wbindgen_malloc, Le.__wbindgen_realloc), g = Ve;
	const b = Le.processRawXyz(o, c, a, s, l, u, _, r, w, g);
	if (b[2]) throw je(b[1]);
	return je(b[0]);
}
function kn(n, e, t, _, r, i) {
	const o = De(n, Le.__wbindgen_malloc), c = Ve, a = De(e, Le.__wbindgen_malloc), s = Ve, l = De(t, Le.__wbindgen_malloc), u = Ve, w = De(_, Le.__wbindgen_malloc), g = Ve;
	var b = ze(i) ? 0 : Oe(i, Le.__wbindgen_malloc, Le.__wbindgen_realloc), f = Ve;
	const d = Le.processRawXyzImputed(o, c, a, s, l, u, w, g, r, b, f);
	if (d[2]) throw je(d[1]);
	return je(d[0]);
}
function Rn(n, e, t, _, r, i, o) {
	const c = De(n, Le.__wbindgen_malloc), a = Ve, s = De(e, Le.__wbindgen_malloc), l = Ve, u = De(t, Le.__wbindgen_malloc), w = Ve, g = De(_, Le.__wbindgen_malloc), b = Ve;
	var f = ze(i) ? 0 : Oe(i, Le.__wbindgen_malloc, Le.__wbindgen_realloc), d = Ve;
	const m = Le.processRawXyzImputedWithEpoch(c, a, s, l, u, w, g, b, r, f, d, o);
	if (m[2]) throw je(m[1]);
	return je(m[0]);
}
function An(n) {
	const e = Ie(n, Le.__wbindgen_malloc), t = Ve, _ = Le.readGgirMeta(e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function Sn() {
	return Le.recommended_chunk_size_mb() >>> 0;
}
function xn(n, e) {
	const t = De(n, Le.__wbindgen_malloc), _ = Ve, r = Oe(e, Le.__wbindgen_malloc, Le.__wbindgen_realloc), i = Ve, o = Le.reduceF64V1(t, _, r, i);
	if (o[2]) throw je(o[1]);
	return o[0];
}
function Cn(n) {
	const e = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), t = Ve, _ = Le.resolveTimezone(e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function Fn(n, e, t, _, r, i, o, c, a, s, l) {
	const u = Ie(n, Le.__wbindgen_malloc), w = Ve, g = Oe(e, Le.__wbindgen_malloc, Le.__wbindgen_realloc), b = Ve;
	var f = ze(t) ? 0 : Ie(t, Le.__wbindgen_malloc), d = Ve, m = ze(_) ? 0 : Ie(_, Le.__wbindgen_malloc), h = Ve, p = ze(r) ? 0 : Ie(r, Le.__wbindgen_malloc), y = Ve, v = ze(i) ? 0 : Ie(i, Le.__wbindgen_malloc), k = Ve, R = ze(o) ? 0 : Ie(o, Le.__wbindgen_malloc), A = Ve, S = ze(c) ? 0 : Oe(c, Le.__wbindgen_malloc, Le.__wbindgen_realloc), x = Ve, C = ze(a) ? 0 : Oe(a, Le.__wbindgen_malloc, Le.__wbindgen_realloc), F = Ve;
	const P = Le.reviewGgirResults(u, w, g, b, f, d, m, h, p, y, v, k, R, A, S, x, C, F, s, l);
	if (P[2]) throw je(P[1]);
	return je(P[0]);
}
function Pn(n) {
	const e = Le.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function Un(n) {
	const e = Le.runCompactPipelineV1(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function Mn(n, e) {
	const t = Le.runFullPipeline(n, e);
	if (t[2]) throw je(t[1]);
	return je(t[0]);
}
function zn(n) {
	const e = Le.runFullPipelineOutcomeV1(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function Wn(n) {
	const e = Le.runFullPipelineV1(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function In(n, e) {
	const t = Le.runGgirFromEpoch(n, e);
	if (t[2]) throw je(t[1]);
	return je(t[0]);
}
function Dn(n) {
	const e = Le.runGgirPart3(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function On(n) {
	const e = Ie(n, Le.__wbindgen_malloc), t = Ve, _ = Le.runMilestone(e, t);
	if (_[2]) throw je(_[1]);
	return je(_[0]);
}
function jn(n) {
	const e = Le.scoreAllDays(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function En(n, e) {
	const t = De(n, Le.__wbindgen_malloc), _ = Ve, r = Le.scoreColeKripke(t, _, e);
	var i = ve(r[0], r[1]).slice();
	return Le.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Tn(n) {
	let e, t;
	try {
		const i = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), o = Ve, c = Le.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, je(c[2]);
		return e = _, t = r, xe(_, r);
	} finally {
		Le.__wbindgen_free(e, t, 1);
	}
}
function Bn(n) {
	const e = Le.scoreConsensusMajority(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function Gn(n, e, t) {
	const _ = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), r = Ve, i = Ie(e, Le.__wbindgen_malloc), o = Ve, c = We(t, Le.__wbindgen_malloc), a = Ve, s = Le.scoreConsensusTyped(_, r, i, o, c, a);
	if (s[2]) throw je(s[1]);
	return je(s[0]);
}
function Nn(n) {
	let e, t;
	try {
		const i = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), o = Ve, c = Le.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, je(c[2]);
		return e = _, t = r, xe(_, r);
	} finally {
		Le.__wbindgen_free(e, t, 1);
	}
}
function Ln(n, e, t, _, r, i) {
	const o = Oe(n, Le.__wbindgen_malloc, Le.__wbindgen_realloc), c = Ve, a = De(e, Le.__wbindgen_malloc), s = Ve, l = De(t, Le.__wbindgen_malloc), u = Ve, w = De(_, Le.__wbindgen_malloc), g = Ve, b = Le.scoreEpochsTyped(o, c, a, s, l, u, w, g, r, i);
	if (b[2]) throw je(b[1]);
	return je(b[0]);
}
function Vn(n) {
	const e = De(n, Le.__wbindgen_malloc), t = Ve, _ = Le.scoreGgirHasib(e, t);
	var r = ve(_[0], _[1]).slice();
	return Le.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function Xn(n) {
	const e = Le.scoreGgirHasibVariant(n);
	if (e[2]) throw je(e[1]);
	return je(e[0]);
}
function qn(n, e, t) {
	const _ = De(n, Le.__wbindgen_malloc), r = Ve, i = De(e, Le.__wbindgen_malloc), o = Ve, c = Le.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw je(c[1]);
	return je(c[0]);
}
function Hn(n, e) {
	const t = De(n, Le.__wbindgen_malloc), _ = Ve, r = Le.scoreSadeh(t, _, e);
	var i = ve(r[0], r[1]).slice();
	return Le.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Jn(n) {
	const e = Ie(n, Le.__wbindgen_malloc), t = Ve, _ = Le.sha256StreamFeed(e, t);
	if (_[1]) throw je(_[0]);
}
function $n() {
	let n, e;
	try {
		const r = Le.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, je(r[2]);
		return n = t, e = _, xe(t, _);
	} finally {
		Le.__wbindgen_free(n, e, 1);
	}
}
function Yn() {
	Le.sha256StreamStart();
}
function Zn(n, e) {
	const t = Le.sleepWakeScores(n, e);
	if (t[2]) throw je(t[1]);
	return je(t[0]);
}
function Kn(n) {
	return Le.startThreadPool(n);
}
function Qn(n) {
	const e = Ie(n, Le.__wbindgen_malloc), t = Ve, _ = Le.streamParseFeed(e, t);
	if (_[2]) throw je(_[1]);
	return _[0] >>> 0;
}
function ne() {
	const n = Le.streamParseFinish();
	if (n[2]) throw je(n[1]);
	return _.__wrap(n[0]);
}
function ee() {
	const n = Le.streamParseFinishChunk();
	if (n[2]) throw je(n[1]);
	return t.__wrap(n[0]);
}
function te(n, e) {
	const t = Le.streamParseStart(n, e);
	if (t[1]) throw je(t[0]);
}
function _e(n, e) {
	const t = Le.streamParseStartData(n, e);
	if (t[1]) throw je(t[0]);
}
function re(n, e, t) {
	const _ = Le.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw je(_[0]);
}
function ie(n, e) {
	const t = Ie(n, Le.__wbindgen_malloc), _ = Ve, r = Le.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw je(r[1]);
	return je(r[0]);
}
function oe() {
	return 0 !== Le.threadPoolReady();
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var ce = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, fe.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, fe.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Le.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		Le.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return Le.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return Le.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return Le.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function ae(n) {
	Le.wbg_rayon_start_worker(n);
}
function se(n, e, t, _, r) {
	const i = De(n, Le.__wbindgen_malloc), o = Ve, c = De(e, Le.__wbindgen_malloc), a = Ve, s = De(t, Le.__wbindgen_malloc), l = Ve, u = Le.zeroCrossingCounts(i, o, c, a, s, l, _, r);
	if (u[2]) throw je(u[1]);
	return je(u[0]);
}
function le(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(xe(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = Oe(String(e), Le.__wbindgen_malloc, Le.__wbindgen_realloc), _ = Ve;
				Re().setInt32(n + 4, _, !0), Re().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				Re().setBigInt64(n + 8, ze(t) ? BigInt(0) : t, !0), Re().setInt32(n + 0, !ze(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return ze(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = Oe(he(e), Le.__wbindgen_malloc, Le.__wbindgen_realloc), _ = Ve;
				Re().setInt32(n + 4, _, !0), Re().setInt32(n + 0, t, !0);
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
				return Le.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return Ne;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const t = "number" == typeof e ? e : void 0;
				Re().setFloat64(n + 8, ze(t) ? 0 : t, !0), Re().setInt32(n + 0, !ze(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = ze(t) ? 0 : Oe(t, Le.__wbindgen_malloc, Le.__wbindgen_realloc), r = Ve;
				Re().setInt32(n + 4, r, !0), Re().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(xe(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return Me(function(n, e) {
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
					t = n, _ = e, console.error(xe(n, e));
				} finally {
					Le.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return Me(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return Me(function(n, e) {
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
				return new Float64Array(pe(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(ve(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return Me(function(n) {
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
				return Me(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(ve(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return Me(function(n, e, t) {
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
				const t = Oe(e.stack, Le.__wbindgen_malloc, Le.__wbindgen_realloc), _ = Ve;
				Re().setInt32(n + 4, _, !0), Re().setInt32(n + 0, t, !0);
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
				}(e, t, ce.__wrap(_));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return ze(n) ? 0 : de(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return ze(n) ? 0 : de(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return ze(n) ? 0 : de(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return ze(n) ? 0 : de(n);
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
						0 === --_.cnt && (Le.__wbindgen_destroy_closure(_.a, _.b), _.a = 0, me.unregister(_));
					}, me.register(r, _, _), r;
				}(n, e, ue);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return ve(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return xe(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Le.__wbindgen_externrefs, e = n.grow(4);
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
function ue(n, e, t) {
	Le.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, t);
}
Symbol.dispose && (ce.prototype[Symbol.dispose] = ce.prototype.free);
const we = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Le.__wbg_aw5batch_free(n >>> 0, 1)), ge = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Le.__wbg_streamchunkresult_free(n >>> 0, 1)), be = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Le.__wbg_streamparseresult_free(n >>> 0, 1)), fe = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Le.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function de(n) {
	const e = Le.__externref_table_alloc();
	return Le.__wbindgen_externrefs.set(e, n), e;
}
const me = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Le.__wbindgen_destroy_closure(n.a, n.b));
function he(n) {
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
		e > 0 && (t += he(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + he(n[_]);
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
function pe(n, e) {
	return n >>>= 0, Se().subarray(n / 8, n / 8 + e);
}
function ye(n, e) {
	return n >>>= 0, Fe().subarray(n / 4, n / 4 + e);
}
function ve(n, e) {
	return n >>>= 0, Ue().subarray(n / 1, n / 1 + e);
}
let ke = null;
function Re() {
	return null !== ke && ke.buffer === Le.memory.buffer || (ke = new DataView(Le.memory.buffer)), ke;
}
let Ae = null;
function Se() {
	return null !== Ae && Ae.buffer === Le.memory.buffer || (Ae = new Float64Array(Le.memory.buffer)), Ae;
}
function xe(n, e) {
	return function(n, e) {
		return Be += e, Be >= Te && (Ee = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Ee.decode(), Be = e), Ee.decode(Ue().slice(n, n + e));
	}(n >>>= 0, e);
}
let Ce = null;
function Fe() {
	return null !== Ce && Ce.buffer === Le.memory.buffer || (Ce = new Uint32Array(Le.memory.buffer)), Ce;
}
let Pe = null;
function Ue() {
	return null !== Pe && Pe.buffer === Le.memory.buffer || (Pe = new Uint8Array(Le.memory.buffer)), Pe;
}
function Me(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = de(t);
		Le.__wbindgen_exn_store(n);
	}
}
function ze(n) {
	return null == n;
}
function We(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return Fe().set(n, t / 4), Ve = n.length, t;
}
function Ie(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return Ue().set(n, t / 1), Ve = n.length, t;
}
function De(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return Se().set(n, t / 8), Ve = n.length, t;
}
function Oe(n, e, t) {
	if (void 0 === t) {
		const t = Ge.encode(n), _ = e(t.length, 1) >>> 0;
		return Ue().subarray(_, _ + t.length).set(t), Ve = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = Ue();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = Ue().subarray(r + o, r + _);
		o += Ge.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return Ve = o, r;
}
function je(n) {
	const e = Le.__wbindgen_externrefs.get(n);
	return Le.__externref_table_dealloc(n), e;
}
let Ee = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
Ee && Ee.decode();
const Te = 2146435072;
let Be = 0;
const Ge = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
Ge && (Ge.encodeInto = function(n, e) {
	const t = Ge.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let Ne, Le, Ve = 0;
function Xe(n, e, t) {
	if (Le = n.exports, Ne = e, ke = null, Ae = null, Ce = null, Pe = null, void 0 !== t && ("number" != typeof t || 0 === t || t % 65536 != 0)) throw new Error("invalid stack size");
	return Le.__wbindgen_start(t), Le;
}
function qe(n, e) {
	if (void 0 !== Le) return Le;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const _ = le(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Xe(new WebAssembly.Instance(n, _), n, t);
}
async function He(n, e) {
	if (void 0 !== Le) return Le;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-HSREGUhs.wasm", "" + import.meta.url));
	const _ = le(e);
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
	return Xe(r, i, t);
}
export { e as Aw5Batch, t as StreamChunkResult, _ as StreamParseResult, r as actiwareIntervalStatistics, i as actiwareSleepIntervals, o as actoursVersion, c as aggregateEpochSeries, a as analyzePhysicalActivityDay, s as classifyActimetricPreschoolWristRf, l as classifyActimetricPreschoolWristRfLagLead, u as classifyActimetricPreschoolWristRfLagLeadCalibrated, w as computeAnglez5s, g as computeCircadian, b as computeCircadianTyped, f as computeEnmo5s, d as computeMimsUnit, m as computeMimsUnitDataframe, h as computeMimsUnitTimingBreakdown, p as computeMimsUnitValues, y as computeNightDifficulty, v as computeNightDifficultyTyped, k as computeNightSignals, R as computeNightSignalsTyped, A as computeSleepMetrics, S as configureComputeMemoryBudgetV1, x as csvBufferAppend, C as csvBufferClear, He as default, F as detectDetachFromAccelerationG, P as detectDeviceFormat, U as detectGgirHasptVariant, M as detectHdcza, z as detectNonwear, W as detectNonwearChoi2011, I as detectNonwearChoi2011Bouts, D as detectNonwearChoi2011Epoch, O as detectNonwearChoi2012, j as detectNonwearChoi2012Bouts, E as detectNonwearChoiBouts, T as detectNonwearUnified, B as detectNonwearUnifiedBatchTyped, G as epochRawData, N as epochWithBandpass, L as executeHeroRuntime, V as extractCapsense, X as generateActiwareRestIntervals, q as getComputeCapabilitiesV1, H as identifyGgirRData, qe as initSync, J as initThreadPool, $ as installPanicHook, Y as isGeneactivFormat, Z as lstmSpectralFeatures30s, K as neishabouriCounts, Q as parseActigraphCsv, nn as parseActigraphCsvBuffered, en as parseAw5, tn as parseCwa, _n as parseEpochSeries, rn as parseGeneactivBin, on as parseGeneactivCsv, cn as parseGeneactivCsvBuffered, an as parseGt3x, sn as placeMarkers, ln as placeMarkersBatch, un as placeMarkersTyped, wn as placeNonwearMarkers, gn as placeNonwearMarkersTyped, bn as prepareCompactPipelineOutcomeV1, fn as prepareCompactPipelineV1, dn as processGeneactivRaw, mn as processGt3xFull, hn as processGt3xFullWithEpoch, pn as processGt3xPart1, yn as processGt3xPart1WithEpoch, vn as processRawXyz, kn as processRawXyzImputed, Rn as processRawXyzImputedWithEpoch, An as readGgirMeta, Sn as recommended_chunk_size_mb, xn as reduceF64V1, Cn as resolveTimezone, Fn as reviewGgirResults, Pn as runCompactPipelineOutcomeV1, Un as runCompactPipelineV1, Mn as runFullPipeline, zn as runFullPipelineOutcomeV1, Wn as runFullPipelineV1, In as runGgirFromEpoch, Dn as runGgirPart3, On as runMilestone, jn as scoreAllDays, En as scoreColeKripke, Tn as scoreConsensus, Bn as scoreConsensusMajority, Gn as scoreConsensusTyped, Nn as scoreEpochs, Ln as scoreEpochsTyped, Vn as scoreGgirHasib, Xn as scoreGgirHasibVariant, qn as scoreGgirSib, Hn as scoreSadeh, Jn as sha256StreamFeed, $n as sha256StreamFinish, Yn as sha256StreamStart, Zn as sleepWakeScores, Kn as startThreadPool, Qn as streamParseFeed, ne as streamParseFinish, ee as streamParseFinishChunk, te as streamParseStart, _e as streamParseStartData, re as streamParseStartWithEpoch, ie as summarizeActimetricPreschoolWristRfClasses, oe as threadPoolReady, ce as wbg_rayon_PoolBuilder, ae as wbg_rayon_start_worker, se as zeroCrossingCounts };
