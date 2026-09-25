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
		return t.__wbg_ptr = e, se.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, se.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		je.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = je.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = je.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = je.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = je.streamchunkresult_axisX(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = je.streamchunkresult_axisY(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = je.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== je.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = je.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Ae(n[0], n[1]).slice(), je.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = je.streamchunkresult_counts(this.__wbg_ptr);
		var e = me(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = je.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = me(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = je.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = je.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return je.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = je.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = je.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== je.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = je.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Ae(n[0], n[1]).slice(), je.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = je.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = je.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = je.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== je.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return je.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return je.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return je.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = je.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = me(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = je.streamchunkresult_temperature(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = je.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = je.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = je.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = je.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = je.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = je.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var t = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, ue.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ue.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		je.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = je.streamparseresult_axisX(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = je.streamparseresult_axisY(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = je.streamparseresult_axisZ(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== je.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = je.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Ae(n[0], n[1]).slice(), je.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return je.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== je.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return je.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return je.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = je.streamparseresult_temperature(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = je.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = je.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return je.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function _(n) {
	const e = je.actiwareIntervalStatistics(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function r(n, e, t) {
	const _ = je.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw Ie(_[1]);
	return Ie(_[0]);
}
function i() {
	let n, e;
	try {
		const t = je.actoursVersion();
		return n = t[0], e = t[1], Ae(t[0], t[1]);
	} finally {
		je.__wbindgen_free(n, e, 1);
	}
}
function o(n) {
	const e = je.aggregateEpochSeries(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function c(n) {
	let e, t;
	try {
		const i = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), o = Ge, c = je.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ie(c[2]);
		return e = _, t = r, Ae(_, r);
	} finally {
		je.__wbindgen_free(e, t, 1);
	}
}
function a(n, e, t, _) {
	const r = ze(n, je.__wbindgen_malloc), i = Ge, o = ze(e, je.__wbindgen_malloc), c = Ge, a = ze(t, je.__wbindgen_malloc), l = Ge, s = je.classifyActimetricPreschoolWristRf(r, i, o, c, a, l, _);
	if (s[3]) throw Ie(s[2]);
	var u = he(s[0], s[1]).slice();
	return je.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function l(n, e, t, _) {
	const r = ze(n, je.__wbindgen_malloc), i = Ge, o = ze(e, je.__wbindgen_malloc), c = Ge, a = ze(t, je.__wbindgen_malloc), l = Ge, s = je.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, l, _);
	if (s[3]) throw Ie(s[2]);
	var u = he(s[0], s[1]).slice();
	return je.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function s(n, e, t, _) {
	const r = ze(n, je.__wbindgen_malloc), i = Ge, o = ze(e, je.__wbindgen_malloc), c = Ge, a = ze(t, je.__wbindgen_malloc), l = Ge, s = je.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, l, _);
	if (s[3]) throw Ie(s[2]);
	var u = he(s[0], s[1]).slice();
	return je.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function u(n, e, t, _) {
	const r = ze(n, je.__wbindgen_malloc), i = Ge, o = ze(e, je.__wbindgen_malloc), c = Ge, a = ze(t, je.__wbindgen_malloc), l = Ge, s = je.computeAnglez5s(r, i, o, c, a, l, _);
	var u = de(s[0], s[1]).slice();
	return je.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function w(n) {
	let e, t;
	try {
		const i = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), o = Ge, c = je.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ie(c[2]);
		return e = _, t = r, Ae(_, r);
	} finally {
		je.__wbindgen_free(e, t, 1);
	}
}
function g(n, e, t, _, r, i, o) {
	const c = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), a = Ge, l = ze(e, je.__wbindgen_malloc), s = Ge, u = Me(t, je.__wbindgen_malloc), w = Ge, g = ze(_, je.__wbindgen_malloc), b = Ge, f = Me(r, je.__wbindgen_malloc), d = Ge, m = Ue(i, je.__wbindgen_malloc), h = Ge, p = Me(o, je.__wbindgen_malloc), y = Ge, v = je.computeCircadianTyped(c, a, l, s, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw Ie(v[1]);
	return Ie(v[0]);
}
function b(n, e, t, _) {
	const r = ze(n, je.__wbindgen_malloc), i = Ge, o = ze(e, je.__wbindgen_malloc), c = Ge, a = ze(t, je.__wbindgen_malloc), l = Ge, s = je.computeEnmo5s(r, i, o, c, a, l, _);
	var u = de(s[0], s[1]).slice();
	return je.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function f(n, e, t, _, r) {
	const i = ze(n, je.__wbindgen_malloc), o = Ge, c = ze(e, je.__wbindgen_malloc), a = Ge, l = ze(t, je.__wbindgen_malloc), s = Ge, u = je.computeMimsUnit(i, o, c, a, l, s, _, r);
	if (u[2]) throw Ie(u[1]);
	return Ie(u[0]);
}
function d(n, e, t, _, r) {
	const i = ze(n, je.__wbindgen_malloc), o = Ge, c = ze(e, je.__wbindgen_malloc), a = Ge, l = ze(t, je.__wbindgen_malloc), s = Ge, u = ze(_, je.__wbindgen_malloc), w = Ge, g = je.computeMimsUnitDataframe(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw Ie(g[1]);
	return Ie(g[0]);
}
function m(n, e, t, _, r) {
	const i = ze(n, je.__wbindgen_malloc), o = Ge, c = ze(e, je.__wbindgen_malloc), a = Ge, l = ze(t, je.__wbindgen_malloc), s = Ge, u = je.computeMimsUnitTimingBreakdown(i, o, c, a, l, s, _, r);
	if (u[2]) throw Ie(u[1]);
	return Ie(u[0]);
}
function h(n, e, t, _, r) {
	const i = ze(n, je.__wbindgen_malloc), o = Ge, c = ze(e, je.__wbindgen_malloc), a = Ge, l = ze(t, je.__wbindgen_malloc), s = Ge, u = je.computeMimsUnitValues(i, o, c, a, l, s, _, r);
	if (u[3]) throw Ie(u[2]);
	var w = de(u[0], u[1]).slice();
	return je.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function p(n) {
	let e, t;
	try {
		const i = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), o = Ge, c = je.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ie(c[2]);
		return e = _, t = r, Ae(_, r);
	} finally {
		je.__wbindgen_free(e, t, 1);
	}
}
function y(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), y = Ge, v = ze(e, je.__wbindgen_malloc), k = Ge, A = Me(t, je.__wbindgen_malloc), R = Ge, S = ze(_, je.__wbindgen_malloc), x = Ge, C = Me(r, je.__wbindgen_malloc), F = Ge, P = Ue(i, je.__wbindgen_malloc), M = Ge, U = Me(o, je.__wbindgen_malloc), z = Ge, W = Ue(c, je.__wbindgen_malloc), I = Ge, B = Me(a, je.__wbindgen_malloc), D = Ge, O = ze(l, je.__wbindgen_malloc), E = Ge, T = Me(s, je.__wbindgen_malloc), j = Ge, G = ze(u, je.__wbindgen_malloc), N = Ge, L = Me(w, je.__wbindgen_malloc), V = Ge, X = ze(g, je.__wbindgen_malloc), q = Ge, H = Me(b, je.__wbindgen_malloc), J = Ge, $ = ze(f, je.__wbindgen_malloc), Y = Ge, Z = Me(d, je.__wbindgen_malloc), K = Ge, Q = Ue(m, je.__wbindgen_malloc), nn = Ge, en = Me(h, je.__wbindgen_malloc), tn = Ge, _n = je.computeNightDifficultyTyped(p, y, v, k, A, R, S, x, C, F, P, M, U, z, W, I, B, D, O, E, T, j, G, N, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw Ie(_n[1]);
	return Ie(_n[0]);
}
function v(n) {
	let e, t;
	try {
		const i = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), o = Ge, c = je.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ie(c[2]);
		return e = _, t = r, Ae(_, r);
	} finally {
		je.__wbindgen_free(e, t, 1);
	}
}
function k(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), y = Ge, v = ze(e, je.__wbindgen_malloc), k = Ge, A = Me(t, je.__wbindgen_malloc), R = Ge, S = ze(_, je.__wbindgen_malloc), x = Ge, C = Me(r, je.__wbindgen_malloc), F = Ge, P = Ue(i, je.__wbindgen_malloc), M = Ge, U = Me(o, je.__wbindgen_malloc), z = Ge, W = Ue(c, je.__wbindgen_malloc), I = Ge, B = Me(a, je.__wbindgen_malloc), D = Ge, O = ze(l, je.__wbindgen_malloc), E = Ge, T = Me(s, je.__wbindgen_malloc), j = Ge, G = ze(u, je.__wbindgen_malloc), N = Ge, L = Me(w, je.__wbindgen_malloc), V = Ge, X = ze(g, je.__wbindgen_malloc), q = Ge, H = Me(b, je.__wbindgen_malloc), J = Ge, $ = ze(f, je.__wbindgen_malloc), Y = Ge, Z = Me(d, je.__wbindgen_malloc), K = Ge, Q = Ue(m, je.__wbindgen_malloc), nn = Ge, en = Me(h, je.__wbindgen_malloc), tn = Ge, _n = je.computeNightSignalsTyped(p, y, v, k, A, R, S, x, C, F, P, M, U, z, W, I, B, D, O, E, T, j, G, N, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw Ie(_n[1]);
	return Ie(_n[0]);
}
function A(n, e, t) {
	const _ = Ue(n, je.__wbindgen_malloc), r = Ge, i = ze(e, je.__wbindgen_malloc), o = Ge, c = je.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw Ie(c[1]);
	return Ie(c[0]);
}
function R(n) {
	const e = je.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function S(n) {
	const e = Ue(n, je.__wbindgen_malloc), t = Ge;
	je.csvBufferAppend(e, t);
}
function x(n) {
	je.csvBufferClear(n);
}
function C(n, e) {
	const t = ze(n, je.__wbindgen_malloc), _ = Ge, r = ze(e, je.__wbindgen_malloc), i = Ge, o = je.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw Ie(o[2]);
	var c = he(o[0], o[1]).slice();
	return je.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function F(n, e) {
	let t, _;
	try {
		const r = Ue(n, je.__wbindgen_malloc), i = Ge, o = We(e, je.__wbindgen_malloc, je.__wbindgen_realloc), c = Ge, a = je.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], Ae(a[0], a[1]);
	} finally {
		je.__wbindgen_free(t, _, 1);
	}
}
function P(n) {
	const e = je.detectGgirHasptVariant(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function M(n, e, t, _) {
	const r = ze(n, je.__wbindgen_malloc), i = Ge;
	var o = Pe(e) ? 0 : We(e, je.__wbindgen_malloc, je.__wbindgen_realloc), c = Ge, a = Pe(t) ? 0 : ze(t, je.__wbindgen_malloc), l = Ge, s = Pe(_) ? 0 : ze(_, je.__wbindgen_malloc), u = Ge;
	return je.detectHdcza(r, i, o, c, a, l, s, u);
}
function U(n) {
	const e = ze(n, je.__wbindgen_malloc), t = Ge, _ = je.detectNonwear(e, t);
	var r = he(_[0], _[1]).slice();
	return je.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function z(n) {
	const e = ze(n, je.__wbindgen_malloc), t = Ge, _ = je.detectNonwearChoi2011(e, t);
	var r = he(_[0], _[1]).slice();
	return je.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function W(n) {
	const e = ze(n, je.__wbindgen_malloc), t = Ge, _ = je.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw Ie(_[1]);
	return Ie(_[0]);
}
function I(n, e) {
	const t = ze(n, je.__wbindgen_malloc), _ = Ge, r = je.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw Ie(r[2]);
	var i = he(r[0], r[1]).slice();
	return je.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function B(n) {
	const e = ze(n, je.__wbindgen_malloc), t = Ge, _ = je.detectNonwearChoi2012(e, t);
	var r = he(_[0], _[1]).slice();
	return je.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function D(n) {
	const e = ze(n, je.__wbindgen_malloc), t = Ge, _ = je.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw Ie(_[1]);
	return Ie(_[0]);
}
function O(n) {
	const e = ze(n, je.__wbindgen_malloc), t = Ge, _ = je.detectNonwearChoiBouts(e, t);
	if (_[2]) throw Ie(_[1]);
	return Ie(_[0]);
}
function E(n) {
	let e, t;
	try {
		const i = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), o = Ge, c = je.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ie(c[2]);
		return e = _, t = r, Ae(_, r);
	} finally {
		je.__wbindgen_free(e, t, 1);
	}
}
function T(n, e, t, _, r, i, o) {
	const c = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), a = Ge, l = We(e, je.__wbindgen_malloc, je.__wbindgen_realloc), s = Ge, u = ze(t, je.__wbindgen_malloc), w = Ge, g = ze(_, je.__wbindgen_malloc), b = Ge, f = ze(r, je.__wbindgen_malloc), d = Ge, m = je.detectNonwearUnifiedBatchTyped(c, a, l, s, u, w, g, b, f, d, i, o);
	if (m[2]) throw Ie(m[1]);
	return Ie(m[0]);
}
function j(n, e, t, _, r) {
	const i = ze(n, je.__wbindgen_malloc), o = Ge, c = ze(e, je.__wbindgen_malloc), a = Ge, l = ze(t, je.__wbindgen_malloc), s = Ge, u = ze(_, je.__wbindgen_malloc), w = Ge, g = je.epochRawData(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw Ie(g[1]);
	return Ie(g[0]);
}
function G(n, e, t) {
	const _ = ze(n, je.__wbindgen_malloc), r = Ge, i = ze(e, je.__wbindgen_malloc), o = Ge, c = je.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw Ie(c[1]);
	return Ie(c[0]);
}
function N(n, e) {
	let t, _;
	try {
		const o = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), c = Ge, a = We(e, je.__wbindgen_malloc, je.__wbindgen_realloc), l = Ge, s = je.executeHeroRuntime(o, c, a, l);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Ie(s[2]);
		return t = r, _ = i, Ae(r, i);
	} finally {
		je.__wbindgen_free(t, _, 1);
	}
}
function L(n) {
	const e = Ue(n, je.__wbindgen_malloc), t = Ge, _ = je.extractCapsense(e, t);
	if (_[2]) throw Ie(_[1]);
	return Ie(_[0]);
}
function V(n, e) {
	const t = je.generateActiwareRestIntervals(n, e);
	if (t[2]) throw Ie(t[1]);
	return Ie(t[0]);
}
function X() {
	const n = je.getComputeCapabilitiesV1();
	if (n[2]) throw Ie(n[1]);
	return Ie(n[0]);
}
function q(n) {
	let e, t;
	try {
		const i = Ue(n, je.__wbindgen_malloc), o = Ge, c = je.identifyGgirRData(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ie(c[2]);
		return e = _, t = r, Ae(_, r);
	} finally {
		je.__wbindgen_free(e, t, 1);
	}
}
function H(n) {
	return je.initThreadPool(n);
}
function J() {
	je.installPanicHook();
}
function $(n) {
	const e = Ue(n, je.__wbindgen_malloc), t = Ge;
	return 0 !== je.isGeneactivFormat(e, t);
}
function Y(n, e, t, _) {
	const r = ze(n, je.__wbindgen_malloc), i = Ge, o = ze(e, je.__wbindgen_malloc), c = Ge, a = ze(t, je.__wbindgen_malloc), l = Ge, s = je.lstmSpectralFeatures30s(r, i, o, c, a, l, _);
	if (s[2]) throw Ie(s[1]);
	return Ie(s[0]);
}
function Z(n, e, t, _, r) {
	const i = ze(n, je.__wbindgen_malloc), o = Ge, c = ze(e, je.__wbindgen_malloc), a = Ge, l = ze(t, je.__wbindgen_malloc), s = Ge, u = je.neishabouriCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw Ie(u[1]);
	return Ie(u[0]);
}
function K(n, e) {
	const t = Ue(n, je.__wbindgen_malloc), _ = Ge, r = je.parseActigraphCsv(t, _, e);
	if (r[2]) throw Ie(r[1]);
	return Ie(r[0]);
}
function Q(n) {
	const e = je.parseActigraphCsvBuffered(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function nn(n, e, t, _) {
	const r = Ue(n, je.__wbindgen_malloc), i = Ge;
	var o = Pe(e) ? 0 : We(e, je.__wbindgen_malloc, je.__wbindgen_realloc), c = Ge, a = Pe(_) ? 0 : We(_, je.__wbindgen_malloc, je.__wbindgen_realloc), l = Ge;
	const s = je.parseAw5(r, i, o, c, Pe(t) ? 0 : ge(t), a, l);
	if (s[2]) throw Ie(s[1]);
	return Ie(s[0]);
}
function en(n) {
	const e = Ue(n, je.__wbindgen_malloc), t = Ge, _ = je.parseCwa(e, t);
	if (_[2]) throw Ie(_[1]);
	return Ie(_[0]);
}
function tn(n, e) {
	const t = Ue(n, je.__wbindgen_malloc), _ = Ge, r = We(e, je.__wbindgen_malloc, je.__wbindgen_realloc), i = Ge, o = je.parseEpochSeries(t, _, r, i);
	if (o[2]) throw Ie(o[1]);
	return Ie(o[0]);
}
function _n(n) {
	const e = Ue(n, je.__wbindgen_malloc), t = Ge, _ = je.parseGeneactivBin(e, t);
	if (_[2]) throw Ie(_[1]);
	return Ie(_[0]);
}
function rn(n) {
	const e = Ue(n, je.__wbindgen_malloc), t = Ge, _ = je.parseGeneactivCsv(e, t);
	if (_[2]) throw Ie(_[1]);
	return Ie(_[0]);
}
function on() {
	const n = je.parseGeneactivCsvBuffered();
	if (n[2]) throw Ie(n[1]);
	return Ie(n[0]);
}
function cn(n) {
	const e = Ue(n, je.__wbindgen_malloc), t = Ge, _ = je.parseGt3x(e, t);
	if (_[2]) throw Ie(_[1]);
	return Ie(_[0]);
}
function an(n) {
	let e, t;
	try {
		const i = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), o = Ge, c = je.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ie(c[2]);
		return e = _, t = r, Ae(_, r);
	} finally {
		je.__wbindgen_free(e, t, 1);
	}
}
function ln(n, e, t, _, r, i) {
	const o = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), c = Ge, a = ze(e, je.__wbindgen_malloc), l = Ge, s = ze(t, je.__wbindgen_malloc), u = Ge, w = Ue(_, je.__wbindgen_malloc), g = Ge, b = Ue(r, je.__wbindgen_malloc), f = Ge, d = We(i, je.__wbindgen_malloc, je.__wbindgen_realloc), m = Ge, h = je.placeMarkersBatch(o, c, a, l, s, u, w, g, b, f, d, m);
	if (h[2]) throw Ie(h[1]);
	return Ie(h[0]);
}
function sn(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), y = Ge, v = ze(e, je.__wbindgen_malloc), k = Ge, A = Me(t, je.__wbindgen_malloc), R = Ge, S = ze(_, je.__wbindgen_malloc), x = Ge, C = Me(r, je.__wbindgen_malloc), F = Ge, P = Ue(i, je.__wbindgen_malloc), M = Ge, U = Me(o, je.__wbindgen_malloc), z = Ge, W = Ue(c, je.__wbindgen_malloc), I = Ge, B = Me(a, je.__wbindgen_malloc), D = Ge, O = ze(l, je.__wbindgen_malloc), E = Ge, T = Me(s, je.__wbindgen_malloc), j = Ge, G = ze(u, je.__wbindgen_malloc), N = Ge, L = Me(w, je.__wbindgen_malloc), V = Ge, X = ze(g, je.__wbindgen_malloc), q = Ge, H = Me(b, je.__wbindgen_malloc), J = Ge, $ = ze(f, je.__wbindgen_malloc), Y = Ge, Z = Me(d, je.__wbindgen_malloc), K = Ge, Q = Ue(m, je.__wbindgen_malloc), nn = Ge, en = Me(h, je.__wbindgen_malloc), tn = Ge, _n = je.placeMarkersTyped(p, y, v, k, A, R, S, x, C, F, P, M, U, z, W, I, B, D, O, E, T, j, G, N, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw Ie(_n[1]);
	return Ie(_n[0]);
}
function un(n) {
	let e, t;
	try {
		const i = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), o = Ge, c = je.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ie(c[2]);
		return e = _, t = r, Ae(_, r);
	} finally {
		je.__wbindgen_free(e, t, 1);
	}
}
function wn(n, e, t, _) {
	const r = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), i = Ge, o = ze(e, je.__wbindgen_malloc), c = Ge, a = ze(t, je.__wbindgen_malloc), l = Ge, s = Ue(_, je.__wbindgen_malloc), u = Ge, w = je.placeNonwearMarkersTyped(r, i, o, c, a, l, s, u);
	if (w[2]) throw Ie(w[1]);
	return Ie(w[0]);
}
function gn(n) {
	const e = je.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function bn(n) {
	const e = je.prepareCompactPipelineV1(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function fn(n, e, t, _, r, i, o) {
	const c = ze(n, je.__wbindgen_malloc), a = Ge, l = ze(e, je.__wbindgen_malloc), s = Ge, u = ze(t, je.__wbindgen_malloc), w = Ge, g = ze(_, je.__wbindgen_malloc), b = Ge;
	var f = Pe(o) ? 0 : We(o, je.__wbindgen_malloc, je.__wbindgen_realloc), d = Ge;
	const m = je.processGeneactivRaw(c, a, l, s, u, w, g, b, r, i, f, d);
	if (m[2]) throw Ie(m[1]);
	return Ie(m[0]);
}
function dn(n) {
	const e = Ue(n, je.__wbindgen_malloc), t = Ge, _ = je.processGt3xFull(e, t);
	if (_[2]) throw Ie(_[1]);
	return Ie(_[0]);
}
function mn(n, e) {
	const t = Ue(n, je.__wbindgen_malloc), _ = Ge, r = je.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw Ie(r[1]);
	return Ie(r[0]);
}
function hn(n) {
	const e = Ue(n, je.__wbindgen_malloc), t = Ge, _ = je.processGt3xPart1(e, t);
	if (_[2]) throw Ie(_[1]);
	return Ie(_[0]);
}
function pn(n, e) {
	const t = Ue(n, je.__wbindgen_malloc), _ = Ge, r = je.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw Ie(r[1]);
	return Ie(r[0]);
}
function yn(n, e, t, _, r, i) {
	const o = ze(n, je.__wbindgen_malloc), c = Ge, a = ze(e, je.__wbindgen_malloc), l = Ge, s = ze(t, je.__wbindgen_malloc), u = Ge;
	var w = Pe(i) ? 0 : We(i, je.__wbindgen_malloc, je.__wbindgen_realloc), g = Ge;
	const b = je.processRawXyz(o, c, a, l, s, u, _, r, w, g);
	if (b[2]) throw Ie(b[1]);
	return Ie(b[0]);
}
function vn(n, e, t, _, r, i) {
	const o = ze(n, je.__wbindgen_malloc), c = Ge, a = ze(e, je.__wbindgen_malloc), l = Ge, s = ze(t, je.__wbindgen_malloc), u = Ge, w = ze(_, je.__wbindgen_malloc), g = Ge;
	var b = Pe(i) ? 0 : We(i, je.__wbindgen_malloc, je.__wbindgen_realloc), f = Ge;
	const d = je.processRawXyzImputed(o, c, a, l, s, u, w, g, r, b, f);
	if (d[2]) throw Ie(d[1]);
	return Ie(d[0]);
}
function kn(n, e, t, _, r, i, o) {
	const c = ze(n, je.__wbindgen_malloc), a = Ge, l = ze(e, je.__wbindgen_malloc), s = Ge, u = ze(t, je.__wbindgen_malloc), w = Ge, g = ze(_, je.__wbindgen_malloc), b = Ge;
	var f = Pe(i) ? 0 : We(i, je.__wbindgen_malloc, je.__wbindgen_realloc), d = Ge;
	const m = je.processRawXyzImputedWithEpoch(c, a, l, s, u, w, g, b, r, f, d, o);
	if (m[2]) throw Ie(m[1]);
	return Ie(m[0]);
}
function An(n) {
	const e = Ue(n, je.__wbindgen_malloc), t = Ge, _ = je.readGgirMeta(e, t);
	if (_[2]) throw Ie(_[1]);
	return Ie(_[0]);
}
function Rn() {
	return je.recommended_chunk_size_mb() >>> 0;
}
function Sn(n, e) {
	const t = ze(n, je.__wbindgen_malloc), _ = Ge, r = We(e, je.__wbindgen_malloc, je.__wbindgen_realloc), i = Ge, o = je.reduceF64V1(t, _, r, i);
	if (o[2]) throw Ie(o[1]);
	return o[0];
}
function xn(n, e, t, _, r, i, o, c, a, l, s) {
	const u = Ue(n, je.__wbindgen_malloc), w = Ge, g = We(e, je.__wbindgen_malloc, je.__wbindgen_realloc), b = Ge;
	var f = Pe(t) ? 0 : Ue(t, je.__wbindgen_malloc), d = Ge, m = Pe(_) ? 0 : Ue(_, je.__wbindgen_malloc), h = Ge, p = Pe(r) ? 0 : Ue(r, je.__wbindgen_malloc), y = Ge, v = Pe(i) ? 0 : Ue(i, je.__wbindgen_malloc), k = Ge, A = Pe(o) ? 0 : Ue(o, je.__wbindgen_malloc), R = Ge, S = Pe(c) ? 0 : We(c, je.__wbindgen_malloc, je.__wbindgen_realloc), x = Ge, C = Pe(a) ? 0 : We(a, je.__wbindgen_malloc, je.__wbindgen_realloc), F = Ge;
	const P = je.reviewGgirResults(u, w, g, b, f, d, m, h, p, y, v, k, A, R, S, x, C, F, l, s);
	if (P[2]) throw Ie(P[1]);
	return Ie(P[0]);
}
function Cn(n) {
	const e = je.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function Fn(n) {
	const e = je.runCompactPipelineV1(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function Pn(n, e) {
	const t = je.runFullPipeline(n, e);
	if (t[2]) throw Ie(t[1]);
	return Ie(t[0]);
}
function Mn(n) {
	const e = je.runFullPipelineOutcomeV1(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function Un(n) {
	const e = je.runFullPipelineV1(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function zn(n, e) {
	const t = je.runGgirFromEpoch(n, e);
	if (t[2]) throw Ie(t[1]);
	return Ie(t[0]);
}
function Wn(n) {
	const e = je.runGgirPart3(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function In(n) {
	const e = Ue(n, je.__wbindgen_malloc), t = Ge, _ = je.runMilestone(e, t);
	if (_[2]) throw Ie(_[1]);
	return Ie(_[0]);
}
function Bn(n) {
	const e = je.scoreAllDays(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function Dn(n, e) {
	const t = ze(n, je.__wbindgen_malloc), _ = Ge, r = je.scoreColeKripke(t, _, e);
	var i = he(r[0], r[1]).slice();
	return je.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function On(n) {
	let e, t;
	try {
		const i = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), o = Ge, c = je.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ie(c[2]);
		return e = _, t = r, Ae(_, r);
	} finally {
		je.__wbindgen_free(e, t, 1);
	}
}
function En(n) {
	const e = je.scoreConsensusMajority(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function Tn(n, e, t) {
	const _ = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), r = Ge, i = Ue(e, je.__wbindgen_malloc), o = Ge, c = Me(t, je.__wbindgen_malloc), a = Ge, l = je.scoreConsensusTyped(_, r, i, o, c, a);
	if (l[2]) throw Ie(l[1]);
	return Ie(l[0]);
}
function jn(n) {
	let e, t;
	try {
		const i = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), o = Ge, c = je.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ie(c[2]);
		return e = _, t = r, Ae(_, r);
	} finally {
		je.__wbindgen_free(e, t, 1);
	}
}
function Gn(n, e, t, _, r, i) {
	const o = We(n, je.__wbindgen_malloc, je.__wbindgen_realloc), c = Ge, a = ze(e, je.__wbindgen_malloc), l = Ge, s = ze(t, je.__wbindgen_malloc), u = Ge, w = ze(_, je.__wbindgen_malloc), g = Ge, b = je.scoreEpochsTyped(o, c, a, l, s, u, w, g, r, i);
	if (b[2]) throw Ie(b[1]);
	return Ie(b[0]);
}
function Nn(n) {
	const e = ze(n, je.__wbindgen_malloc), t = Ge, _ = je.scoreGgirHasib(e, t);
	var r = he(_[0], _[1]).slice();
	return je.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function Ln(n) {
	const e = je.scoreGgirHasibVariant(n);
	if (e[2]) throw Ie(e[1]);
	return Ie(e[0]);
}
function Vn(n, e, t) {
	const _ = ze(n, je.__wbindgen_malloc), r = Ge, i = ze(e, je.__wbindgen_malloc), o = Ge, c = je.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw Ie(c[1]);
	return Ie(c[0]);
}
function Xn(n, e) {
	const t = ze(n, je.__wbindgen_malloc), _ = Ge, r = je.scoreSadeh(t, _, e);
	var i = he(r[0], r[1]).slice();
	return je.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function qn(n) {
	const e = Ue(n, je.__wbindgen_malloc), t = Ge, _ = je.sha256StreamFeed(e, t);
	if (_[1]) throw Ie(_[0]);
}
function Hn() {
	let n, e;
	try {
		const r = je.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, Ie(r[2]);
		return n = t, e = _, Ae(t, _);
	} finally {
		je.__wbindgen_free(n, e, 1);
	}
}
function Jn() {
	je.sha256StreamStart();
}
function $n(n, e) {
	const t = je.sleepWakeScores(n, e);
	if (t[2]) throw Ie(t[1]);
	return Ie(t[0]);
}
function Yn(n) {
	return je.startThreadPool(n);
}
function Zn(n) {
	const e = Ue(n, je.__wbindgen_malloc), t = Ge, _ = je.streamParseFeed(e, t);
	if (_[2]) throw Ie(_[1]);
	return _[0] >>> 0;
}
function Kn() {
	const n = je.streamParseFinish();
	if (n[2]) throw Ie(n[1]);
	return t.__wrap(n[0]);
}
function Qn() {
	const n = je.streamParseFinishChunk();
	if (n[2]) throw Ie(n[1]);
	return e.__wrap(n[0]);
}
function ne(n, e) {
	const t = je.streamParseStart(n, e);
	if (t[1]) throw Ie(t[0]);
}
function ee(n, e) {
	const t = je.streamParseStartData(n, e);
	if (t[1]) throw Ie(t[0]);
}
function te(n, e, t) {
	const _ = je.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw Ie(_[0]);
}
function _e(n, e) {
	const t = Ue(n, je.__wbindgen_malloc), _ = Ge, r = je.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw Ie(r[1]);
	return Ie(r[0]);
}
function re() {
	return 0 !== je.threadPoolReady();
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var ie = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, we.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, we.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		je.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		je.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return je.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return je.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return je.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function oe(n) {
	je.wbg_rayon_start_worker(n);
}
function ce(n, e, t, _, r) {
	const i = ze(n, je.__wbindgen_malloc), o = Ge, c = ze(e, je.__wbindgen_malloc), a = Ge, l = ze(t, je.__wbindgen_malloc), s = Ge, u = je.zeroCrossingCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw Ie(u[1]);
	return Ie(u[0]);
}
function ae(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(Ae(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = We(String(e), je.__wbindgen_malloc, je.__wbindgen_realloc), _ = Ge;
				ye().setInt32(n + 4, _, !0), ye().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				ye().setBigInt64(n + 8, Pe(t) ? BigInt(0) : t, !0), ye().setInt32(n + 0, !Pe(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return Pe(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = We(fe(e), je.__wbindgen_malloc, je.__wbindgen_realloc), _ = Ge;
				ye().setInt32(n + 4, _, !0), ye().setInt32(n + 0, t, !0);
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
				return je.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return Te;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const t = "number" == typeof e ? e : void 0;
				ye().setFloat64(n + 8, Pe(t) ? 0 : t, !0), ye().setInt32(n + 0, !Pe(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = Pe(t) ? 0 : We(t, je.__wbindgen_malloc, je.__wbindgen_realloc), r = Ge;
				ye().setInt32(n + 4, r, !0), ye().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(Ae(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return Fe(function(n, e) {
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
					t = n, _ = e, console.error(Ae(n, e));
				} finally {
					je.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return Fe(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return Fe(function(n, e) {
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
				return new Float64Array(de(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(he(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return Fe(function(n) {
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
				return Fe(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(he(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return Fe(function(n, e, t) {
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
				const t = We(e.stack, je.__wbindgen_malloc, je.__wbindgen_realloc), _ = Ge;
				ye().setInt32(n + 4, _, !0), ye().setInt32(n + 0, t, !0);
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
				}(e, t, ie.__wrap(_));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return Pe(n) ? 0 : ge(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return Pe(n) ? 0 : ge(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return Pe(n) ? 0 : ge(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return Pe(n) ? 0 : ge(n);
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
						0 === --_.cnt && (je.__wbindgen_destroy_closure(_.a, _.b), _.a = 0, be.unregister(_));
					}, be.register(r, _, _), r;
				}(n, e, le);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return he(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return Ae(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = je.__wbindgen_externrefs, e = n.grow(4);
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
function le(n, e, t) {
	je.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, t);
}
Symbol.dispose && (ie.prototype[Symbol.dispose] = ie.prototype.free);
const se = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => je.__wbg_streamchunkresult_free(n >>> 0, 1)), ue = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => je.__wbg_streamparseresult_free(n >>> 0, 1)), we = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => je.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function ge(n) {
	const e = je.__externref_table_alloc();
	return je.__wbindgen_externrefs.set(e, n), e;
}
const be = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => je.__wbindgen_destroy_closure(n.a, n.b));
function fe(n) {
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
		e > 0 && (t += fe(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + fe(n[_]);
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
function de(n, e) {
	return n >>>= 0, ke().subarray(n / 8, n / 8 + e);
}
function me(n, e) {
	return n >>>= 0, Se().subarray(n / 4, n / 4 + e);
}
function he(n, e) {
	return n >>>= 0, Ce().subarray(n / 1, n / 1 + e);
}
let pe = null;
function ye() {
	return null !== pe && pe.buffer === je.memory.buffer || (pe = new DataView(je.memory.buffer)), pe;
}
let ve = null;
function ke() {
	return null !== ve && ve.buffer === je.memory.buffer || (ve = new Float64Array(je.memory.buffer)), ve;
}
function Ae(n, e) {
	return function(n, e) {
		return Oe += e, Oe >= De && (Be = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Be.decode(), Oe = e), Be.decode(Ce().slice(n, n + e));
	}(n >>>= 0, e);
}
let Re = null;
function Se() {
	return null !== Re && Re.buffer === je.memory.buffer || (Re = new Uint32Array(je.memory.buffer)), Re;
}
let xe = null;
function Ce() {
	return null !== xe && xe.buffer === je.memory.buffer || (xe = new Uint8Array(je.memory.buffer)), xe;
}
function Fe(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = ge(t);
		je.__wbindgen_exn_store(n);
	}
}
function Pe(n) {
	return null == n;
}
function Me(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return Se().set(n, t / 4), Ge = n.length, t;
}
function Ue(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return Ce().set(n, t / 1), Ge = n.length, t;
}
function ze(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return ke().set(n, t / 8), Ge = n.length, t;
}
function We(n, e, t) {
	if (void 0 === t) {
		const t = Ee.encode(n), _ = e(t.length, 1) >>> 0;
		return Ce().subarray(_, _ + t.length).set(t), Ge = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = Ce();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = Ce().subarray(r + o, r + _);
		o += Ee.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return Ge = o, r;
}
function Ie(n) {
	const e = je.__wbindgen_externrefs.get(n);
	return je.__externref_table_dealloc(n), e;
}
let Be = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
Be && Be.decode();
const De = 2146435072;
let Oe = 0;
const Ee = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
Ee && (Ee.encodeInto = function(n, e) {
	const t = Ee.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let Te, je, Ge = 0;
function Ne(n, e, t) {
	if (je = n.exports, Te = e, pe = null, ve = null, Re = null, xe = null, void 0 !== t && ("number" != typeof t || 0 === t || t % 65536 != 0)) throw new Error("invalid stack size");
	return je.__wbindgen_start(t), je;
}
function Le(n, e) {
	if (void 0 !== je) return je;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const _ = ae(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Ne(new WebAssembly.Instance(n, _), n, t);
}
async function Ve(n, e) {
	if (void 0 !== je) return je;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-B8Bd_0ix.wasm", "" + import.meta.url));
	const _ = ae(e);
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
	return Ne(r, i, t);
}
export { e as StreamChunkResult, t as StreamParseResult, _ as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actoursVersion, o as aggregateEpochSeries, c as analyzePhysicalActivityDay, a as classifyActimetricPreschoolWristRf, l as classifyActimetricPreschoolWristRfLagLead, s as classifyActimetricPreschoolWristRfLagLeadCalibrated, u as computeAnglez5s, w as computeCircadian, g as computeCircadianTyped, b as computeEnmo5s, f as computeMimsUnit, d as computeMimsUnitDataframe, m as computeMimsUnitTimingBreakdown, h as computeMimsUnitValues, p as computeNightDifficulty, y as computeNightDifficultyTyped, v as computeNightSignals, k as computeNightSignalsTyped, A as computeSleepMetrics, R as configureComputeMemoryBudgetV1, S as csvBufferAppend, x as csvBufferClear, Ve as default, C as detectDetachFromAccelerationG, F as detectDeviceFormat, P as detectGgirHasptVariant, M as detectHdcza, U as detectNonwear, z as detectNonwearChoi2011, W as detectNonwearChoi2011Bouts, I as detectNonwearChoi2011Epoch, B as detectNonwearChoi2012, D as detectNonwearChoi2012Bouts, O as detectNonwearChoiBouts, E as detectNonwearUnified, T as detectNonwearUnifiedBatchTyped, j as epochRawData, G as epochWithBandpass, N as executeHeroRuntime, L as extractCapsense, V as generateActiwareRestIntervals, X as getComputeCapabilitiesV1, q as identifyGgirRData, Le as initSync, H as initThreadPool, J as installPanicHook, $ as isGeneactivFormat, Y as lstmSpectralFeatures30s, Z as neishabouriCounts, K as parseActigraphCsv, Q as parseActigraphCsvBuffered, nn as parseAw5, en as parseCwa, tn as parseEpochSeries, _n as parseGeneactivBin, rn as parseGeneactivCsv, on as parseGeneactivCsvBuffered, cn as parseGt3x, an as placeMarkers, ln as placeMarkersBatch, sn as placeMarkersTyped, un as placeNonwearMarkers, wn as placeNonwearMarkersTyped, gn as prepareCompactPipelineOutcomeV1, bn as prepareCompactPipelineV1, fn as processGeneactivRaw, dn as processGt3xFull, mn as processGt3xFullWithEpoch, hn as processGt3xPart1, pn as processGt3xPart1WithEpoch, yn as processRawXyz, vn as processRawXyzImputed, kn as processRawXyzImputedWithEpoch, An as readGgirMeta, Rn as recommended_chunk_size_mb, Sn as reduceF64V1, xn as reviewGgirResults, Cn as runCompactPipelineOutcomeV1, Fn as runCompactPipelineV1, Pn as runFullPipeline, Mn as runFullPipelineOutcomeV1, Un as runFullPipelineV1, zn as runGgirFromEpoch, Wn as runGgirPart3, In as runMilestone, Bn as scoreAllDays, Dn as scoreColeKripke, On as scoreConsensus, En as scoreConsensusMajority, Tn as scoreConsensusTyped, jn as scoreEpochs, Gn as scoreEpochsTyped, Nn as scoreGgirHasib, Ln as scoreGgirHasibVariant, Vn as scoreGgirSib, Xn as scoreSadeh, qn as sha256StreamFeed, Hn as sha256StreamFinish, Jn as sha256StreamStart, $n as sleepWakeScores, Yn as startThreadPool, Zn as streamParseFeed, Kn as streamParseFinish, Qn as streamParseFinishChunk, ne as streamParseStart, ee as streamParseStartData, te as streamParseStartWithEpoch, _e as summarizeActimetricPreschoolWristRfClasses, re as threadPoolReady, ie as wbg_rayon_PoolBuilder, oe as wbg_rayon_start_worker, ce as zeroCrossingCounts };
