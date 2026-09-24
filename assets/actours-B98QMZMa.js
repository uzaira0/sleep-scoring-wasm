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
		return t.__wbg_ptr = e, le.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, le.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Te.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Te.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Te.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Te.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Te.streamchunkresult_axisX(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Te.streamchunkresult_axisY(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Te.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Te.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Te.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ke(n[0], n[1]).slice(), Te.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Te.streamchunkresult_counts(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Te.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = de(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Te.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Te.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return Te.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Te.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Te.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Te.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Te.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ke(n[0], n[1]).slice(), Te.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Te.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Te.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Te.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
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
		var e = de(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Te.streamchunkresult_temperature(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Te.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Te.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Te.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Te.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Te.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Te.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var t = class n {
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
		Te.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Te.streamparseresult_axisX(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Te.streamparseresult_axisY(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Te.streamparseresult_axisZ(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Te.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Te.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ke(n[0], n[1]).slice(), Te.__wbindgen_free(n[0], 1 * n[1], 1)), e;
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
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Te.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Te.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = fe(n[0], n[1]).slice();
		return Te.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function _(n, e, t) {
	const _ = Te.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw We(_[1]);
	return We(_[0]);
}
function r() {
	let n, e;
	try {
		const t = Te.actoursVersion();
		return n = t[0], e = t[1], ke(t[0], t[1]);
	} finally {
		Te.__wbindgen_free(n, e, 1);
	}
}
function i(n) {
	const e = Te.aggregateEpochSeries(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function o(n) {
	let e, t;
	try {
		const i = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = je, c = Te.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, We(c[2]);
		return e = _, t = r, ke(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function c(n, e, t, _) {
	const r = Ue(n, Te.__wbindgen_malloc), i = je, o = Ue(e, Te.__wbindgen_malloc), c = je, a = Ue(t, Te.__wbindgen_malloc), l = je, s = Te.classifyActimetricPreschoolWristRf(r, i, o, c, a, l, _);
	if (s[3]) throw We(s[2]);
	var u = me(s[0], s[1]).slice();
	return Te.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function a(n, e, t, _) {
	const r = Ue(n, Te.__wbindgen_malloc), i = je, o = Ue(e, Te.__wbindgen_malloc), c = je, a = Ue(t, Te.__wbindgen_malloc), l = je, s = Te.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, l, _);
	if (s[3]) throw We(s[2]);
	var u = me(s[0], s[1]).slice();
	return Te.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function l(n, e, t, _) {
	const r = Ue(n, Te.__wbindgen_malloc), i = je, o = Ue(e, Te.__wbindgen_malloc), c = je, a = Ue(t, Te.__wbindgen_malloc), l = je, s = Te.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, l, _);
	if (s[3]) throw We(s[2]);
	var u = me(s[0], s[1]).slice();
	return Te.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function s(n, e, t, _) {
	const r = Ue(n, Te.__wbindgen_malloc), i = je, o = Ue(e, Te.__wbindgen_malloc), c = je, a = Ue(t, Te.__wbindgen_malloc), l = je, s = Te.computeAnglez5s(r, i, o, c, a, l, _);
	var u = fe(s[0], s[1]).slice();
	return Te.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function u(n) {
	let e, t;
	try {
		const i = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = je, c = Te.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, We(c[2]);
		return e = _, t = r, ke(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function w(n, e, t, _, r, i, o) {
	const c = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), a = je, l = Ue(e, Te.__wbindgen_malloc), s = je, u = Pe(t, Te.__wbindgen_malloc), w = je, g = Ue(_, Te.__wbindgen_malloc), b = je, f = Pe(r, Te.__wbindgen_malloc), d = je, m = Me(i, Te.__wbindgen_malloc), h = je, p = Pe(o, Te.__wbindgen_malloc), y = je, v = Te.computeCircadianTyped(c, a, l, s, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw We(v[1]);
	return We(v[0]);
}
function g(n, e, t, _) {
	const r = Ue(n, Te.__wbindgen_malloc), i = je, o = Ue(e, Te.__wbindgen_malloc), c = je, a = Ue(t, Te.__wbindgen_malloc), l = je, s = Te.computeEnmo5s(r, i, o, c, a, l, _);
	var u = fe(s[0], s[1]).slice();
	return Te.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function b(n, e, t, _, r) {
	const i = Ue(n, Te.__wbindgen_malloc), o = je, c = Ue(e, Te.__wbindgen_malloc), a = je, l = Ue(t, Te.__wbindgen_malloc), s = je, u = Te.computeMimsUnit(i, o, c, a, l, s, _, r);
	if (u[2]) throw We(u[1]);
	return We(u[0]);
}
function f(n, e, t, _, r) {
	const i = Ue(n, Te.__wbindgen_malloc), o = je, c = Ue(e, Te.__wbindgen_malloc), a = je, l = Ue(t, Te.__wbindgen_malloc), s = je, u = Ue(_, Te.__wbindgen_malloc), w = je, g = Te.computeMimsUnitDataframe(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw We(g[1]);
	return We(g[0]);
}
function d(n, e, t, _, r) {
	const i = Ue(n, Te.__wbindgen_malloc), o = je, c = Ue(e, Te.__wbindgen_malloc), a = je, l = Ue(t, Te.__wbindgen_malloc), s = je, u = Te.computeMimsUnitTimingBreakdown(i, o, c, a, l, s, _, r);
	if (u[2]) throw We(u[1]);
	return We(u[0]);
}
function m(n, e, t, _, r) {
	const i = Ue(n, Te.__wbindgen_malloc), o = je, c = Ue(e, Te.__wbindgen_malloc), a = je, l = Ue(t, Te.__wbindgen_malloc), s = je, u = Te.computeMimsUnitValues(i, o, c, a, l, s, _, r);
	if (u[3]) throw We(u[2]);
	var w = fe(u[0], u[1]).slice();
	return Te.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function h(n) {
	let e, t;
	try {
		const i = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = je, c = Te.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, We(c[2]);
		return e = _, t = r, ke(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function p(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), y = je, v = Ue(e, Te.__wbindgen_malloc), k = je, A = Pe(t, Te.__wbindgen_malloc), R = je, S = Ue(_, Te.__wbindgen_malloc), x = je, C = Pe(r, Te.__wbindgen_malloc), F = je, P = Me(i, Te.__wbindgen_malloc), M = je, U = Pe(o, Te.__wbindgen_malloc), z = je, W = Me(c, Te.__wbindgen_malloc), D = je, I = Pe(a, Te.__wbindgen_malloc), O = je, B = Ue(l, Te.__wbindgen_malloc), E = je, T = Pe(s, Te.__wbindgen_malloc), j = je, G = Ue(u, Te.__wbindgen_malloc), N = je, L = Pe(w, Te.__wbindgen_malloc), V = je, X = Ue(g, Te.__wbindgen_malloc), q = je, H = Pe(b, Te.__wbindgen_malloc), J = je, $ = Ue(f, Te.__wbindgen_malloc), Y = je, Z = Pe(d, Te.__wbindgen_malloc), K = je, Q = Me(m, Te.__wbindgen_malloc), nn = je, en = Pe(h, Te.__wbindgen_malloc), tn = je, _n = Te.computeNightDifficultyTyped(p, y, v, k, A, R, S, x, C, F, P, M, U, z, W, D, I, O, B, E, T, j, G, N, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw We(_n[1]);
	return We(_n[0]);
}
function y(n) {
	let e, t;
	try {
		const i = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = je, c = Te.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, We(c[2]);
		return e = _, t = r, ke(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function v(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), y = je, v = Ue(e, Te.__wbindgen_malloc), k = je, A = Pe(t, Te.__wbindgen_malloc), R = je, S = Ue(_, Te.__wbindgen_malloc), x = je, C = Pe(r, Te.__wbindgen_malloc), F = je, P = Me(i, Te.__wbindgen_malloc), M = je, U = Pe(o, Te.__wbindgen_malloc), z = je, W = Me(c, Te.__wbindgen_malloc), D = je, I = Pe(a, Te.__wbindgen_malloc), O = je, B = Ue(l, Te.__wbindgen_malloc), E = je, T = Pe(s, Te.__wbindgen_malloc), j = je, G = Ue(u, Te.__wbindgen_malloc), N = je, L = Pe(w, Te.__wbindgen_malloc), V = je, X = Ue(g, Te.__wbindgen_malloc), q = je, H = Pe(b, Te.__wbindgen_malloc), J = je, $ = Ue(f, Te.__wbindgen_malloc), Y = je, Z = Pe(d, Te.__wbindgen_malloc), K = je, Q = Me(m, Te.__wbindgen_malloc), nn = je, en = Pe(h, Te.__wbindgen_malloc), tn = je, _n = Te.computeNightSignalsTyped(p, y, v, k, A, R, S, x, C, F, P, M, U, z, W, D, I, O, B, E, T, j, G, N, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw We(_n[1]);
	return We(_n[0]);
}
function k(n, e, t) {
	const _ = Me(n, Te.__wbindgen_malloc), r = je, i = Ue(e, Te.__wbindgen_malloc), o = je, c = Te.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw We(c[1]);
	return We(c[0]);
}
function A(n) {
	const e = Te.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function R(n) {
	const e = Me(n, Te.__wbindgen_malloc), t = je;
	Te.csvBufferAppend(e, t);
}
function S(n) {
	Te.csvBufferClear(n);
}
function x(n, e) {
	const t = Ue(n, Te.__wbindgen_malloc), _ = je, r = Ue(e, Te.__wbindgen_malloc), i = je, o = Te.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw We(o[2]);
	var c = me(o[0], o[1]).slice();
	return Te.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function C(n, e) {
	let t, _;
	try {
		const r = Me(n, Te.__wbindgen_malloc), i = je, o = ze(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), c = je, a = Te.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], ke(a[0], a[1]);
	} finally {
		Te.__wbindgen_free(t, _, 1);
	}
}
function F(n) {
	const e = Te.detectGgirHasptVariant(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function P(n, e, t, _) {
	const r = Ue(n, Te.__wbindgen_malloc), i = je;
	var o = Fe(e) ? 0 : ze(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), c = je, a = Fe(t) ? 0 : Ue(t, Te.__wbindgen_malloc), l = je, s = Fe(_) ? 0 : Ue(_, Te.__wbindgen_malloc), u = je;
	return Te.detectHdcza(r, i, o, c, a, l, s, u);
}
function M(n) {
	const e = Ue(n, Te.__wbindgen_malloc), t = je, _ = Te.detectNonwear(e, t);
	var r = me(_[0], _[1]).slice();
	return Te.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function U(n) {
	const e = Ue(n, Te.__wbindgen_malloc), t = je, _ = Te.detectNonwearChoi2011(e, t);
	var r = me(_[0], _[1]).slice();
	return Te.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function z(n) {
	const e = Ue(n, Te.__wbindgen_malloc), t = je, _ = Te.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw We(_[1]);
	return We(_[0]);
}
function W(n, e) {
	const t = Ue(n, Te.__wbindgen_malloc), _ = je, r = Te.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw We(r[2]);
	var i = me(r[0], r[1]).slice();
	return Te.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function D(n) {
	const e = Ue(n, Te.__wbindgen_malloc), t = je, _ = Te.detectNonwearChoi2012(e, t);
	var r = me(_[0], _[1]).slice();
	return Te.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function I(n) {
	const e = Ue(n, Te.__wbindgen_malloc), t = je, _ = Te.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw We(_[1]);
	return We(_[0]);
}
function O(n) {
	const e = Ue(n, Te.__wbindgen_malloc), t = je, _ = Te.detectNonwearChoiBouts(e, t);
	if (_[2]) throw We(_[1]);
	return We(_[0]);
}
function B(n) {
	let e, t;
	try {
		const i = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = je, c = Te.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, We(c[2]);
		return e = _, t = r, ke(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function E(n, e, t, _, r, i, o) {
	const c = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), a = je, l = ze(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), s = je, u = Ue(t, Te.__wbindgen_malloc), w = je, g = Ue(_, Te.__wbindgen_malloc), b = je, f = Ue(r, Te.__wbindgen_malloc), d = je, m = Te.detectNonwearUnifiedBatchTyped(c, a, l, s, u, w, g, b, f, d, i, o);
	if (m[2]) throw We(m[1]);
	return We(m[0]);
}
function T(n, e, t, _, r) {
	const i = Ue(n, Te.__wbindgen_malloc), o = je, c = Ue(e, Te.__wbindgen_malloc), a = je, l = Ue(t, Te.__wbindgen_malloc), s = je, u = Ue(_, Te.__wbindgen_malloc), w = je, g = Te.epochRawData(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw We(g[1]);
	return We(g[0]);
}
function j(n, e, t) {
	const _ = Ue(n, Te.__wbindgen_malloc), r = je, i = Ue(e, Te.__wbindgen_malloc), o = je, c = Te.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw We(c[1]);
	return We(c[0]);
}
function G(n, e) {
	let t, _;
	try {
		const o = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), c = je, a = ze(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), l = je, s = Te.executeHeroRuntime(o, c, a, l);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, We(s[2]);
		return t = r, _ = i, ke(r, i);
	} finally {
		Te.__wbindgen_free(t, _, 1);
	}
}
function N(n) {
	const e = Me(n, Te.__wbindgen_malloc), t = je, _ = Te.extractCapsense(e, t);
	if (_[2]) throw We(_[1]);
	return We(_[0]);
}
function L(n, e) {
	const t = Te.generateActiwareRestIntervals(n, e);
	if (t[2]) throw We(t[1]);
	return We(t[0]);
}
function V() {
	const n = Te.getComputeCapabilitiesV1();
	if (n[2]) throw We(n[1]);
	return We(n[0]);
}
function X(n) {
	let e, t;
	try {
		const i = Me(n, Te.__wbindgen_malloc), o = je, c = Te.identifyGgirRData(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, We(c[2]);
		return e = _, t = r, ke(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function q(n) {
	return Te.initThreadPool(n);
}
function H() {
	Te.installPanicHook();
}
function J(n) {
	const e = Me(n, Te.__wbindgen_malloc), t = je;
	return 0 !== Te.isGeneactivFormat(e, t);
}
function $(n, e, t, _) {
	const r = Ue(n, Te.__wbindgen_malloc), i = je, o = Ue(e, Te.__wbindgen_malloc), c = je, a = Ue(t, Te.__wbindgen_malloc), l = je, s = Te.lstmSpectralFeatures30s(r, i, o, c, a, l, _);
	if (s[2]) throw We(s[1]);
	return We(s[0]);
}
function Y(n, e, t, _, r) {
	const i = Ue(n, Te.__wbindgen_malloc), o = je, c = Ue(e, Te.__wbindgen_malloc), a = je, l = Ue(t, Te.__wbindgen_malloc), s = je, u = Te.neishabouriCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw We(u[1]);
	return We(u[0]);
}
function Z(n, e) {
	const t = Me(n, Te.__wbindgen_malloc), _ = je, r = Te.parseActigraphCsv(t, _, e);
	if (r[2]) throw We(r[1]);
	return We(r[0]);
}
function K(n) {
	const e = Te.parseActigraphCsvBuffered(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function Q(n, e, t, _) {
	const r = Me(n, Te.__wbindgen_malloc), i = je;
	var o = Fe(e) ? 0 : ze(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), c = je, a = Fe(_) ? 0 : ze(_, Te.__wbindgen_malloc, Te.__wbindgen_realloc), l = je;
	const s = Te.parseAw5(r, i, o, c, Fe(t) ? 0 : we(t), a, l);
	if (s[2]) throw We(s[1]);
	return We(s[0]);
}
function nn(n) {
	const e = Me(n, Te.__wbindgen_malloc), t = je, _ = Te.parseCwa(e, t);
	if (_[2]) throw We(_[1]);
	return We(_[0]);
}
function en(n, e) {
	const t = Me(n, Te.__wbindgen_malloc), _ = je, r = ze(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), i = je, o = Te.parseEpochSeries(t, _, r, i);
	if (o[2]) throw We(o[1]);
	return We(o[0]);
}
function tn(n) {
	const e = Me(n, Te.__wbindgen_malloc), t = je, _ = Te.parseGeneactivBin(e, t);
	if (_[2]) throw We(_[1]);
	return We(_[0]);
}
function _n(n) {
	const e = Me(n, Te.__wbindgen_malloc), t = je, _ = Te.parseGeneactivCsv(e, t);
	if (_[2]) throw We(_[1]);
	return We(_[0]);
}
function rn() {
	const n = Te.parseGeneactivCsvBuffered();
	if (n[2]) throw We(n[1]);
	return We(n[0]);
}
function on(n) {
	const e = Me(n, Te.__wbindgen_malloc), t = je, _ = Te.parseGt3x(e, t);
	if (_[2]) throw We(_[1]);
	return We(_[0]);
}
function cn(n) {
	let e, t;
	try {
		const i = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = je, c = Te.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, We(c[2]);
		return e = _, t = r, ke(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function an(n, e, t, _, r, i) {
	const o = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), c = je, a = Ue(e, Te.__wbindgen_malloc), l = je, s = Ue(t, Te.__wbindgen_malloc), u = je, w = Me(_, Te.__wbindgen_malloc), g = je, b = Me(r, Te.__wbindgen_malloc), f = je, d = ze(i, Te.__wbindgen_malloc, Te.__wbindgen_realloc), m = je, h = Te.placeMarkersBatch(o, c, a, l, s, u, w, g, b, f, d, m);
	if (h[2]) throw We(h[1]);
	return We(h[0]);
}
function ln(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), y = je, v = Ue(e, Te.__wbindgen_malloc), k = je, A = Pe(t, Te.__wbindgen_malloc), R = je, S = Ue(_, Te.__wbindgen_malloc), x = je, C = Pe(r, Te.__wbindgen_malloc), F = je, P = Me(i, Te.__wbindgen_malloc), M = je, U = Pe(o, Te.__wbindgen_malloc), z = je, W = Me(c, Te.__wbindgen_malloc), D = je, I = Pe(a, Te.__wbindgen_malloc), O = je, B = Ue(l, Te.__wbindgen_malloc), E = je, T = Pe(s, Te.__wbindgen_malloc), j = je, G = Ue(u, Te.__wbindgen_malloc), N = je, L = Pe(w, Te.__wbindgen_malloc), V = je, X = Ue(g, Te.__wbindgen_malloc), q = je, H = Pe(b, Te.__wbindgen_malloc), J = je, $ = Ue(f, Te.__wbindgen_malloc), Y = je, Z = Pe(d, Te.__wbindgen_malloc), K = je, Q = Me(m, Te.__wbindgen_malloc), nn = je, en = Pe(h, Te.__wbindgen_malloc), tn = je, _n = Te.placeMarkersTyped(p, y, v, k, A, R, S, x, C, F, P, M, U, z, W, D, I, O, B, E, T, j, G, N, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw We(_n[1]);
	return We(_n[0]);
}
function sn(n) {
	let e, t;
	try {
		const i = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = je, c = Te.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, We(c[2]);
		return e = _, t = r, ke(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function un(n, e, t, _) {
	const r = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), i = je, o = Ue(e, Te.__wbindgen_malloc), c = je, a = Ue(t, Te.__wbindgen_malloc), l = je, s = Me(_, Te.__wbindgen_malloc), u = je, w = Te.placeNonwearMarkersTyped(r, i, o, c, a, l, s, u);
	if (w[2]) throw We(w[1]);
	return We(w[0]);
}
function wn(n) {
	const e = Te.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function gn(n) {
	const e = Te.prepareCompactPipelineV1(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function bn(n, e, t, _, r, i, o) {
	const c = Ue(n, Te.__wbindgen_malloc), a = je, l = Ue(e, Te.__wbindgen_malloc), s = je, u = Ue(t, Te.__wbindgen_malloc), w = je, g = Ue(_, Te.__wbindgen_malloc), b = je;
	var f = Fe(o) ? 0 : ze(o, Te.__wbindgen_malloc, Te.__wbindgen_realloc), d = je;
	const m = Te.processGeneactivRaw(c, a, l, s, u, w, g, b, r, i, f, d);
	if (m[2]) throw We(m[1]);
	return We(m[0]);
}
function fn(n) {
	const e = Me(n, Te.__wbindgen_malloc), t = je, _ = Te.processGt3xFull(e, t);
	if (_[2]) throw We(_[1]);
	return We(_[0]);
}
function dn(n, e) {
	const t = Me(n, Te.__wbindgen_malloc), _ = je, r = Te.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw We(r[1]);
	return We(r[0]);
}
function mn(n) {
	const e = Me(n, Te.__wbindgen_malloc), t = je, _ = Te.processGt3xPart1(e, t);
	if (_[2]) throw We(_[1]);
	return We(_[0]);
}
function hn(n, e) {
	const t = Me(n, Te.__wbindgen_malloc), _ = je, r = Te.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw We(r[1]);
	return We(r[0]);
}
function pn(n, e, t, _, r, i) {
	const o = Ue(n, Te.__wbindgen_malloc), c = je, a = Ue(e, Te.__wbindgen_malloc), l = je, s = Ue(t, Te.__wbindgen_malloc), u = je;
	var w = Fe(i) ? 0 : ze(i, Te.__wbindgen_malloc, Te.__wbindgen_realloc), g = je;
	const b = Te.processRawXyz(o, c, a, l, s, u, _, r, w, g);
	if (b[2]) throw We(b[1]);
	return We(b[0]);
}
function yn(n, e, t, _, r, i) {
	const o = Ue(n, Te.__wbindgen_malloc), c = je, a = Ue(e, Te.__wbindgen_malloc), l = je, s = Ue(t, Te.__wbindgen_malloc), u = je, w = Ue(_, Te.__wbindgen_malloc), g = je;
	var b = Fe(i) ? 0 : ze(i, Te.__wbindgen_malloc, Te.__wbindgen_realloc), f = je;
	const d = Te.processRawXyzImputed(o, c, a, l, s, u, w, g, r, b, f);
	if (d[2]) throw We(d[1]);
	return We(d[0]);
}
function vn(n, e, t, _, r, i, o) {
	const c = Ue(n, Te.__wbindgen_malloc), a = je, l = Ue(e, Te.__wbindgen_malloc), s = je, u = Ue(t, Te.__wbindgen_malloc), w = je, g = Ue(_, Te.__wbindgen_malloc), b = je;
	var f = Fe(i) ? 0 : ze(i, Te.__wbindgen_malloc, Te.__wbindgen_realloc), d = je;
	const m = Te.processRawXyzImputedWithEpoch(c, a, l, s, u, w, g, b, r, f, d, o);
	if (m[2]) throw We(m[1]);
	return We(m[0]);
}
function kn(n) {
	const e = Me(n, Te.__wbindgen_malloc), t = je, _ = Te.readGgirMeta(e, t);
	if (_[2]) throw We(_[1]);
	return We(_[0]);
}
function An() {
	return Te.recommended_chunk_size_mb() >>> 0;
}
function Rn(n, e) {
	const t = Ue(n, Te.__wbindgen_malloc), _ = je, r = ze(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), i = je, o = Te.reduceF64V1(t, _, r, i);
	if (o[2]) throw We(o[1]);
	return o[0];
}
function Sn(n, e, t, _, r, i, o, c, a, l, s) {
	const u = Me(n, Te.__wbindgen_malloc), w = je, g = ze(e, Te.__wbindgen_malloc, Te.__wbindgen_realloc), b = je;
	var f = Fe(t) ? 0 : Me(t, Te.__wbindgen_malloc), d = je, m = Fe(_) ? 0 : Me(_, Te.__wbindgen_malloc), h = je, p = Fe(r) ? 0 : Me(r, Te.__wbindgen_malloc), y = je, v = Fe(i) ? 0 : Me(i, Te.__wbindgen_malloc), k = je, A = Fe(o) ? 0 : Me(o, Te.__wbindgen_malloc), R = je, S = Fe(c) ? 0 : ze(c, Te.__wbindgen_malloc, Te.__wbindgen_realloc), x = je, C = Fe(a) ? 0 : ze(a, Te.__wbindgen_malloc, Te.__wbindgen_realloc), F = je;
	const P = Te.reviewGgirResults(u, w, g, b, f, d, m, h, p, y, v, k, A, R, S, x, C, F, l, s);
	if (P[2]) throw We(P[1]);
	return We(P[0]);
}
function xn(n) {
	const e = Te.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function Cn(n) {
	const e = Te.runCompactPipelineV1(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function Fn(n, e) {
	const t = Te.runFullPipeline(n, e);
	if (t[2]) throw We(t[1]);
	return We(t[0]);
}
function Pn(n) {
	const e = Te.runFullPipelineOutcomeV1(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function Mn(n) {
	const e = Te.runFullPipelineV1(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function Un(n, e) {
	const t = Te.runGgirFromEpoch(n, e);
	if (t[2]) throw We(t[1]);
	return We(t[0]);
}
function zn(n) {
	const e = Te.runGgirPart3(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function Wn(n) {
	const e = Me(n, Te.__wbindgen_malloc), t = je, _ = Te.runMilestone(e, t);
	if (_[2]) throw We(_[1]);
	return We(_[0]);
}
function Dn(n) {
	const e = Te.scoreAllDays(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function In(n, e) {
	const t = Ue(n, Te.__wbindgen_malloc), _ = je, r = Te.scoreColeKripke(t, _, e);
	var i = me(r[0], r[1]).slice();
	return Te.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function On(n) {
	let e, t;
	try {
		const i = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = je, c = Te.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, We(c[2]);
		return e = _, t = r, ke(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function Bn(n) {
	const e = Te.scoreConsensusMajority(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function En(n, e, t) {
	const _ = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), r = je, i = Me(e, Te.__wbindgen_malloc), o = je, c = Pe(t, Te.__wbindgen_malloc), a = je, l = Te.scoreConsensusTyped(_, r, i, o, c, a);
	if (l[2]) throw We(l[1]);
	return We(l[0]);
}
function Tn(n) {
	let e, t;
	try {
		const i = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), o = je, c = Te.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, We(c[2]);
		return e = _, t = r, ke(_, r);
	} finally {
		Te.__wbindgen_free(e, t, 1);
	}
}
function jn(n, e, t, _, r, i) {
	const o = ze(n, Te.__wbindgen_malloc, Te.__wbindgen_realloc), c = je, a = Ue(e, Te.__wbindgen_malloc), l = je, s = Ue(t, Te.__wbindgen_malloc), u = je, w = Ue(_, Te.__wbindgen_malloc), g = je, b = Te.scoreEpochsTyped(o, c, a, l, s, u, w, g, r, i);
	if (b[2]) throw We(b[1]);
	return We(b[0]);
}
function Gn(n) {
	const e = Ue(n, Te.__wbindgen_malloc), t = je, _ = Te.scoreGgirHasib(e, t);
	var r = me(_[0], _[1]).slice();
	return Te.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function Nn(n) {
	const e = Te.scoreGgirHasibVariant(n);
	if (e[2]) throw We(e[1]);
	return We(e[0]);
}
function Ln(n, e, t) {
	const _ = Ue(n, Te.__wbindgen_malloc), r = je, i = Ue(e, Te.__wbindgen_malloc), o = je, c = Te.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw We(c[1]);
	return We(c[0]);
}
function Vn(n, e) {
	const t = Ue(n, Te.__wbindgen_malloc), _ = je, r = Te.scoreSadeh(t, _, e);
	var i = me(r[0], r[1]).slice();
	return Te.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Xn(n) {
	const e = Me(n, Te.__wbindgen_malloc), t = je, _ = Te.sha256StreamFeed(e, t);
	if (_[1]) throw We(_[0]);
}
function qn() {
	let n, e;
	try {
		const r = Te.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, We(r[2]);
		return n = t, e = _, ke(t, _);
	} finally {
		Te.__wbindgen_free(n, e, 1);
	}
}
function Hn() {
	Te.sha256StreamStart();
}
function Jn(n, e) {
	const t = Te.sleepWakeScores(n, e);
	if (t[2]) throw We(t[1]);
	return We(t[0]);
}
function $n(n) {
	return Te.startThreadPool(n);
}
function Yn(n) {
	const e = Me(n, Te.__wbindgen_malloc), t = je, _ = Te.streamParseFeed(e, t);
	if (_[2]) throw We(_[1]);
	return _[0] >>> 0;
}
function Zn() {
	const n = Te.streamParseFinish();
	if (n[2]) throw We(n[1]);
	return t.__wrap(n[0]);
}
function Kn() {
	const n = Te.streamParseFinishChunk();
	if (n[2]) throw We(n[1]);
	return e.__wrap(n[0]);
}
function Qn(n, e) {
	const t = Te.streamParseStart(n, e);
	if (t[1]) throw We(t[0]);
}
function ne(n, e) {
	const t = Te.streamParseStartData(n, e);
	if (t[1]) throw We(t[0]);
}
function ee(n, e, t) {
	const _ = Te.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw We(_[0]);
}
function te(n, e) {
	const t = Me(n, Te.__wbindgen_malloc), _ = je, r = Te.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw We(r[1]);
	return We(r[0]);
}
function _e() {
	return 0 !== Te.threadPoolReady();
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var re = class n {
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
function ie(n) {
	Te.wbg_rayon_start_worker(n);
}
function oe(n, e, t, _, r) {
	const i = Ue(n, Te.__wbindgen_malloc), o = je, c = Ue(e, Te.__wbindgen_malloc), a = je, l = Ue(t, Te.__wbindgen_malloc), s = je, u = Te.zeroCrossingCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw We(u[1]);
	return We(u[0]);
}
function ce(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(ke(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = ze(String(e), Te.__wbindgen_malloc, Te.__wbindgen_realloc), _ = je;
				pe().setInt32(n + 4, _, !0), pe().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				pe().setBigInt64(n + 8, Fe(t) ? BigInt(0) : t, !0), pe().setInt32(n + 0, !Fe(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return Fe(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = ze(be(e), Te.__wbindgen_malloc, Te.__wbindgen_realloc), _ = je;
				pe().setInt32(n + 4, _, !0), pe().setInt32(n + 0, t, !0);
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
				return Ee;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const t = "number" == typeof e ? e : void 0;
				pe().setFloat64(n + 8, Fe(t) ? 0 : t, !0), pe().setInt32(n + 0, !Fe(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = Fe(t) ? 0 : ze(t, Te.__wbindgen_malloc, Te.__wbindgen_realloc), r = je;
				pe().setInt32(n + 4, r, !0), pe().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(ke(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return Ce(function(n, e) {
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
					t = n, _ = e, console.error(ke(n, e));
				} finally {
					Te.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return Ce(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return Ce(function(n, e) {
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
				return new Float64Array(fe(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(me(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return Ce(function(n) {
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
				return Ce(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(me(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return Ce(function(n, e, t) {
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
				const t = ze(e.stack, Te.__wbindgen_malloc, Te.__wbindgen_realloc), _ = je;
				pe().setInt32(n + 4, _, !0), pe().setInt32(n + 0, t, !0);
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
				}(e, t, re.__wrap(_));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return Fe(n) ? 0 : we(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return Fe(n) ? 0 : we(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return Fe(n) ? 0 : we(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return Fe(n) ? 0 : we(n);
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
						0 === --_.cnt && (Te.__wbindgen_destroy_closure(_.a, _.b), _.a = 0, ge.unregister(_));
					}, ge.register(r, _, _), r;
				}(n, e, ae);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return me(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return ke(n, e);
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
function ae(n, e, t) {
	Te.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, t);
}
Symbol.dispose && (re.prototype[Symbol.dispose] = re.prototype.free);
const le = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Te.__wbg_streamchunkresult_free(n >>> 0, 1)), se = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Te.__wbg_streamparseresult_free(n >>> 0, 1)), ue = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Te.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function we(n) {
	const e = Te.__externref_table_alloc();
	return Te.__wbindgen_externrefs.set(e, n), e;
}
const ge = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Te.__wbindgen_destroy_closure(n.a, n.b));
function be(n) {
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
		e > 0 && (t += be(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + be(n[_]);
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
function fe(n, e) {
	return n >>>= 0, ve().subarray(n / 8, n / 8 + e);
}
function de(n, e) {
	return n >>>= 0, Re().subarray(n / 4, n / 4 + e);
}
function me(n, e) {
	return n >>>= 0, xe().subarray(n / 1, n / 1 + e);
}
let he = null;
function pe() {
	return null !== he && he.buffer === Te.memory.buffer || (he = new DataView(Te.memory.buffer)), he;
}
let ye = null;
function ve() {
	return null !== ye && ye.buffer === Te.memory.buffer || (ye = new Float64Array(Te.memory.buffer)), ye;
}
function ke(n, e) {
	return function(n, e) {
		return Oe += e, Oe >= Ie && (De = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), De.decode(), Oe = e), De.decode(xe().slice(n, n + e));
	}(n >>>= 0, e);
}
let Ae = null;
function Re() {
	return null !== Ae && Ae.buffer === Te.memory.buffer || (Ae = new Uint32Array(Te.memory.buffer)), Ae;
}
let Se = null;
function xe() {
	return null !== Se && Se.buffer === Te.memory.buffer || (Se = new Uint8Array(Te.memory.buffer)), Se;
}
function Ce(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = we(t);
		Te.__wbindgen_exn_store(n);
	}
}
function Fe(n) {
	return null == n;
}
function Pe(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return Re().set(n, t / 4), je = n.length, t;
}
function Me(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return xe().set(n, t / 1), je = n.length, t;
}
function Ue(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return ve().set(n, t / 8), je = n.length, t;
}
function ze(n, e, t) {
	if (void 0 === t) {
		const t = Be.encode(n), _ = e(t.length, 1) >>> 0;
		return xe().subarray(_, _ + t.length).set(t), je = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = xe();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = xe().subarray(r + o, r + _);
		o += Be.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return je = o, r;
}
function We(n) {
	const e = Te.__wbindgen_externrefs.get(n);
	return Te.__externref_table_dealloc(n), e;
}
let De = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
De && De.decode();
const Ie = 2146435072;
let Oe = 0;
const Be = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
Be && (Be.encodeInto = function(n, e) {
	const t = Be.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let Ee, Te, je = 0;
function Ge(n, e, t) {
	if (Te = n.exports, Ee = e, he = null, ye = null, Ae = null, Se = null, void 0 !== t && ("number" != typeof t || 0 === t || t % 65536 != 0)) throw new Error("invalid stack size");
	return Te.__wbindgen_start(t), Te;
}
function Ne(n, e) {
	if (void 0 !== Te) return Te;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const _ = ce(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Ge(new WebAssembly.Instance(n, _), n, t);
}
async function Le(n, e) {
	if (void 0 !== Te) return Te;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-DF5MkSIu.wasm", "" + import.meta.url));
	const _ = ce(e);
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
	return Ge(r, i, t);
}
export { e as StreamChunkResult, t as StreamParseResult, _ as actiwareSleepIntervals, r as actoursVersion, i as aggregateEpochSeries, o as analyzePhysicalActivityDay, c as classifyActimetricPreschoolWristRf, a as classifyActimetricPreschoolWristRfLagLead, l as classifyActimetricPreschoolWristRfLagLeadCalibrated, s as computeAnglez5s, u as computeCircadian, w as computeCircadianTyped, g as computeEnmo5s, b as computeMimsUnit, f as computeMimsUnitDataframe, d as computeMimsUnitTimingBreakdown, m as computeMimsUnitValues, h as computeNightDifficulty, p as computeNightDifficultyTyped, y as computeNightSignals, v as computeNightSignalsTyped, k as computeSleepMetrics, A as configureComputeMemoryBudgetV1, R as csvBufferAppend, S as csvBufferClear, Le as default, x as detectDetachFromAccelerationG, C as detectDeviceFormat, F as detectGgirHasptVariant, P as detectHdcza, M as detectNonwear, U as detectNonwearChoi2011, z as detectNonwearChoi2011Bouts, W as detectNonwearChoi2011Epoch, D as detectNonwearChoi2012, I as detectNonwearChoi2012Bouts, O as detectNonwearChoiBouts, B as detectNonwearUnified, E as detectNonwearUnifiedBatchTyped, T as epochRawData, j as epochWithBandpass, G as executeHeroRuntime, N as extractCapsense, L as generateActiwareRestIntervals, V as getComputeCapabilitiesV1, X as identifyGgirRData, Ne as initSync, q as initThreadPool, H as installPanicHook, J as isGeneactivFormat, $ as lstmSpectralFeatures30s, Y as neishabouriCounts, Z as parseActigraphCsv, K as parseActigraphCsvBuffered, Q as parseAw5, nn as parseCwa, en as parseEpochSeries, tn as parseGeneactivBin, _n as parseGeneactivCsv, rn as parseGeneactivCsvBuffered, on as parseGt3x, cn as placeMarkers, an as placeMarkersBatch, ln as placeMarkersTyped, sn as placeNonwearMarkers, un as placeNonwearMarkersTyped, wn as prepareCompactPipelineOutcomeV1, gn as prepareCompactPipelineV1, bn as processGeneactivRaw, fn as processGt3xFull, dn as processGt3xFullWithEpoch, mn as processGt3xPart1, hn as processGt3xPart1WithEpoch, pn as processRawXyz, yn as processRawXyzImputed, vn as processRawXyzImputedWithEpoch, kn as readGgirMeta, An as recommended_chunk_size_mb, Rn as reduceF64V1, Sn as reviewGgirResults, xn as runCompactPipelineOutcomeV1, Cn as runCompactPipelineV1, Fn as runFullPipeline, Pn as runFullPipelineOutcomeV1, Mn as runFullPipelineV1, Un as runGgirFromEpoch, zn as runGgirPart3, Wn as runMilestone, Dn as scoreAllDays, In as scoreColeKripke, On as scoreConsensus, Bn as scoreConsensusMajority, En as scoreConsensusTyped, Tn as scoreEpochs, jn as scoreEpochsTyped, Gn as scoreGgirHasib, Nn as scoreGgirHasibVariant, Ln as scoreGgirSib, Vn as scoreSadeh, Xn as sha256StreamFeed, qn as sha256StreamFinish, Hn as sha256StreamStart, Jn as sleepWakeScores, $n as startThreadPool, Yn as streamParseFeed, Zn as streamParseFinish, Kn as streamParseFinishChunk, Qn as streamParseStart, ne as streamParseStartData, ee as streamParseStartWithEpoch, te as summarizeActimetricPreschoolWristRfClasses, _e as threadPoolReady, re as wbg_rayon_PoolBuilder, ie as wbg_rayon_start_worker, oe as zeroCrossingCounts };
