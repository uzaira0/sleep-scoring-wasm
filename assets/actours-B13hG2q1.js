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
		return this.__wbg_ptr = 0, Pe.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		ot.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = ot.aw5batch_new(n);
		if (e[2]) throw nt(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, Pe.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, t) {
		const _ = Qe(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), r = ct;
		var i = $e(t) ? 0 : Qe(t, ot.__wbindgen_malloc, ot.__wbindgen_realloc), o = ct;
		const c = ot.aw5batch_recording(this.__wbg_ptr, n, _, r, i, o);
		if (c[2]) throw nt(c[1]);
		return nt(c[0]);
	}
	subjects(n) {
		const e = ot.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw nt(e[1]);
		return nt(e[0]);
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var t = class n {
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
		ot.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = ot.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = ot.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = ot.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = ot.streamchunkresult_axisX(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ot.streamchunkresult_axisY(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ot.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ot.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ot.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Le(n[0], n[1]).slice(), ot.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = ot.streamchunkresult_counts(this.__wbg_ptr);
		var e = Te(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = ot.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = Te(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = ot.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = ot.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = ot.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = Oe(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = ot.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = Oe(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return ot.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = ot.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = ot.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== ot.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = ot.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Le(n[0], n[1]).slice(), ot.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = ot.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = ot.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = ot.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== ot.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ot.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return ot.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ot.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = ot.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = Te(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = ot.streamchunkresult_temperature(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ot.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = ot.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ot.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = ot.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = ot.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = ot.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var _ = class n {
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
		ot.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = ot.streamparseresult_axisX(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ot.streamparseresult_axisY(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ot.streamparseresult_axisZ(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ot.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ot.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Le(n[0], n[1]).slice(), ot.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return ot.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== ot.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ot.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ot.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = ot.streamparseresult_temperature(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ot.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ot.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = Ne(n[0], n[1]).slice();
		return ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function r(n) {
	const e = ot.actiwareIntervalStatistics(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function i(n, e, t) {
	const _ = ot.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function o(n, e) {
	const t = ot.actiwareWakeThreshold(n, e);
	if (t[3]) throw nt(t[2]);
	return 0 === t[0] ? void 0 : t[1];
}
function c() {
	let n, e;
	try {
		const t = ot.actoursVersion();
		return n = t[0], e = t[1], Le(t[0], t[1]);
	} finally {
		ot.__wbindgen_free(n, e, 1);
	}
}
function a(n) {
	const e = ot.aggregateEpochSeries(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function s(n) {
	let e, t;
	try {
		const i = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), o = ct, c = ot.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, nt(c[2]);
		return e = _, t = r, Le(_, r);
	} finally {
		ot.__wbindgen_free(e, t, 1);
	}
}
function l(n, e, t, _) {
	const r = Ke(n, ot.__wbindgen_malloc), i = ct, o = Ke(e, ot.__wbindgen_malloc), c = ct, a = Ke(t, ot.__wbindgen_malloc), s = ct, l = ot.classifyActimetricPreschoolWristRf(r, i, o, c, a, s, _);
	if (l[3]) throw nt(l[2]);
	var u = Oe(l[0], l[1]).slice();
	return ot.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function u(n, e, t, _) {
	const r = Ke(n, ot.__wbindgen_malloc), i = ct, o = Ke(e, ot.__wbindgen_malloc), c = ct, a = Ke(t, ot.__wbindgen_malloc), s = ct, l = ot.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, s, _);
	if (l[3]) throw nt(l[2]);
	var u = Oe(l[0], l[1]).slice();
	return ot.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function w(n, e, t, _) {
	const r = Ke(n, ot.__wbindgen_malloc), i = ct, o = Ke(e, ot.__wbindgen_malloc), c = ct, a = Ke(t, ot.__wbindgen_malloc), s = ct, l = ot.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, s, _);
	if (l[3]) throw nt(l[2]);
	var u = Oe(l[0], l[1]).slice();
	return ot.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function g(n, e) {
	const t = ot.compareNonwearDetectorMasks(n, e);
	if (t[2]) throw nt(t[1]);
	return nt(t[0]);
}
function b(n, e, t, _) {
	const r = Ke(n, ot.__wbindgen_malloc), i = ct, o = Ke(e, ot.__wbindgen_malloc), c = ct, a = Ke(t, ot.__wbindgen_malloc), s = ct, l = ot.computeAnglez5s(r, i, o, c, a, s, _);
	var u = Ne(l[0], l[1]).slice();
	return ot.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function f(n) {
	let e, t;
	try {
		const i = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), o = ct, c = ot.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, nt(c[2]);
		return e = _, t = r, Le(_, r);
	} finally {
		ot.__wbindgen_free(e, t, 1);
	}
}
function d(n, e, t, _, r, i, o) {
	const c = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), a = ct, s = Ke(e, ot.__wbindgen_malloc), l = ct, u = Ye(t, ot.__wbindgen_malloc), w = ct, g = Ke(_, ot.__wbindgen_malloc), b = ct, f = Ye(r, ot.__wbindgen_malloc), d = ct, m = Ze(i, ot.__wbindgen_malloc), h = ct, p = Ye(o, ot.__wbindgen_malloc), y = ct, v = ot.computeCircadianTyped(c, a, s, l, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw nt(v[1]);
	return nt(v[0]);
}
function m(n, e, t, _) {
	const r = Ke(n, ot.__wbindgen_malloc), i = ct, o = Ke(e, ot.__wbindgen_malloc), c = ct, a = Ke(t, ot.__wbindgen_malloc), s = ct, l = ot.computeEnmo5s(r, i, o, c, a, s, _);
	var u = Ne(l[0], l[1]).slice();
	return ot.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function h(n, e, t, _, r) {
	const i = Ke(n, ot.__wbindgen_malloc), o = ct, c = Ke(e, ot.__wbindgen_malloc), a = ct, s = Ke(t, ot.__wbindgen_malloc), l = ct, u = ot.computeMimsUnit(i, o, c, a, s, l, _, r);
	if (u[2]) throw nt(u[1]);
	return nt(u[0]);
}
function p(n, e, t, _, r) {
	const i = Ke(n, ot.__wbindgen_malloc), o = ct, c = Ke(e, ot.__wbindgen_malloc), a = ct, s = Ke(t, ot.__wbindgen_malloc), l = ct, u = Ke(_, ot.__wbindgen_malloc), w = ct, g = ot.computeMimsUnitDataframe(i, o, c, a, s, l, u, w, r);
	if (g[2]) throw nt(g[1]);
	return nt(g[0]);
}
function y(n, e, t, _, r) {
	const i = Ke(n, ot.__wbindgen_malloc), o = ct, c = Ke(e, ot.__wbindgen_malloc), a = ct, s = Ke(t, ot.__wbindgen_malloc), l = ct, u = ot.computeMimsUnitTimingBreakdown(i, o, c, a, s, l, _, r);
	if (u[2]) throw nt(u[1]);
	return nt(u[0]);
}
function v(n, e, t, _, r) {
	const i = Ke(n, ot.__wbindgen_malloc), o = ct, c = Ke(e, ot.__wbindgen_malloc), a = ct, s = Ke(t, ot.__wbindgen_malloc), l = ct, u = ot.computeMimsUnitValues(i, o, c, a, s, l, _, r);
	if (u[3]) throw nt(u[2]);
	var w = Ne(u[0], u[1]).slice();
	return ot.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function k(n) {
	let e, t;
	try {
		const i = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), o = ct, c = ot.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, nt(c[2]);
		return e = _, t = r, Le(_, r);
	} finally {
		ot.__wbindgen_free(e, t, 1);
	}
}
function A(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), y = ct, v = Ke(e, ot.__wbindgen_malloc), k = ct, A = Ye(t, ot.__wbindgen_malloc), R = ct, S = Ke(_, ot.__wbindgen_malloc), x = ct, C = Ye(r, ot.__wbindgen_malloc), F = ct, P = Ze(i, ot.__wbindgen_malloc), z = ct, M = Ye(o, ot.__wbindgen_malloc), U = ct, I = Ze(c, ot.__wbindgen_malloc), W = ct, D = Ye(a, ot.__wbindgen_malloc), N = ct, T = Ke(s, ot.__wbindgen_malloc), O = ct, j = Ye(l, ot.__wbindgen_malloc), E = ct, B = Ke(u, ot.__wbindgen_malloc), G = ct, L = Ye(w, ot.__wbindgen_malloc), V = ct, X = Ke(g, ot.__wbindgen_malloc), q = ct, H = Ye(b, ot.__wbindgen_malloc), J = ct, $ = Ke(f, ot.__wbindgen_malloc), Y = ct, Z = Ye(d, ot.__wbindgen_malloc), K = ct, Q = Ze(m, ot.__wbindgen_malloc), nn = ct, en = Ye(h, ot.__wbindgen_malloc), tn = ct, _n = ot.computeNightDifficultyTyped(p, y, v, k, A, R, S, x, C, F, P, z, M, U, I, W, D, N, T, O, j, E, B, G, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw nt(_n[1]);
	return nt(_n[0]);
}
function R(n) {
	let e, t;
	try {
		const i = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), o = ct, c = ot.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, nt(c[2]);
		return e = _, t = r, Le(_, r);
	} finally {
		ot.__wbindgen_free(e, t, 1);
	}
}
function S(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), y = ct, v = Ke(e, ot.__wbindgen_malloc), k = ct, A = Ye(t, ot.__wbindgen_malloc), R = ct, S = Ke(_, ot.__wbindgen_malloc), x = ct, C = Ye(r, ot.__wbindgen_malloc), F = ct, P = Ze(i, ot.__wbindgen_malloc), z = ct, M = Ye(o, ot.__wbindgen_malloc), U = ct, I = Ze(c, ot.__wbindgen_malloc), W = ct, D = Ye(a, ot.__wbindgen_malloc), N = ct, T = Ke(s, ot.__wbindgen_malloc), O = ct, j = Ye(l, ot.__wbindgen_malloc), E = ct, B = Ke(u, ot.__wbindgen_malloc), G = ct, L = Ye(w, ot.__wbindgen_malloc), V = ct, X = Ke(g, ot.__wbindgen_malloc), q = ct, H = Ye(b, ot.__wbindgen_malloc), J = ct, $ = Ke(f, ot.__wbindgen_malloc), Y = ct, Z = Ye(d, ot.__wbindgen_malloc), K = ct, Q = Ze(m, ot.__wbindgen_malloc), nn = ct, en = Ye(h, ot.__wbindgen_malloc), tn = ct, _n = ot.computeNightSignalsTyped(p, y, v, k, A, R, S, x, C, F, P, z, M, U, I, W, D, N, T, O, j, E, B, G, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw nt(_n[1]);
	return nt(_n[0]);
}
function x(n, e, t) {
	const _ = Ze(n, ot.__wbindgen_malloc), r = ct, i = Ke(e, ot.__wbindgen_malloc), o = ct, c = ot.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw nt(c[1]);
	return nt(c[0]);
}
function C(n) {
	const e = ot.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function F(n) {
	const e = Ze(n, ot.__wbindgen_malloc), t = ct;
	ot.csvBufferAppend(e, t);
}
function P(n) {
	ot.csvBufferClear(n);
}
function z(n, e) {
	const t = Ke(n, ot.__wbindgen_malloc), _ = ct, r = Ke(e, ot.__wbindgen_malloc), i = ct, o = ot.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw nt(o[2]);
	var c = Oe(o[0], o[1]).slice();
	return ot.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function M(n, e) {
	let t, _;
	try {
		const r = Ze(n, ot.__wbindgen_malloc), i = ct, o = Qe(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), c = ct, a = ot.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], Le(a[0], a[1]);
	} finally {
		ot.__wbindgen_free(t, _, 1);
	}
}
function U(n) {
	const e = ot.detectGgirHasptVariant(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function I(n, e, t, _) {
	const r = Ke(n, ot.__wbindgen_malloc), i = ct;
	var o = $e(e) ? 0 : Qe(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), c = ct, a = $e(t) ? 0 : Ke(t, ot.__wbindgen_malloc), s = ct, l = $e(_) ? 0 : Ke(_, ot.__wbindgen_malloc), u = ct;
	return ot.detectHdcza(r, i, o, c, a, s, l, u);
}
function W(n) {
	const e = Ke(n, ot.__wbindgen_malloc), t = ct, _ = ot.detectNonwear(e, t);
	var r = Oe(_[0], _[1]).slice();
	return ot.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function D(n) {
	const e = Ke(n, ot.__wbindgen_malloc), t = ct, _ = ot.detectNonwearChoi2011(e, t);
	var r = Oe(_[0], _[1]).slice();
	return ot.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function N(n) {
	const e = Ke(n, ot.__wbindgen_malloc), t = ct, _ = ot.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function T(n, e) {
	const t = Ke(n, ot.__wbindgen_malloc), _ = ct, r = ot.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw nt(r[2]);
	var i = Oe(r[0], r[1]).slice();
	return ot.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function O(n) {
	const e = Ke(n, ot.__wbindgen_malloc), t = ct, _ = ot.detectNonwearChoi2012(e, t);
	var r = Oe(_[0], _[1]).slice();
	return ot.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function j(n) {
	const e = Ke(n, ot.__wbindgen_malloc), t = ct, _ = ot.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function E(n) {
	const e = Ke(n, ot.__wbindgen_malloc), t = ct, _ = ot.detectNonwearChoiBouts(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function B(n) {
	let e, t;
	try {
		const i = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), o = ct, c = ot.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, nt(c[2]);
		return e = _, t = r, Le(_, r);
	} finally {
		ot.__wbindgen_free(e, t, 1);
	}
}
function G(n, e, t, _, r, i, o) {
	const c = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), a = ct, s = Qe(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), l = ct, u = Ke(t, ot.__wbindgen_malloc), w = ct, g = Ke(_, ot.__wbindgen_malloc), b = ct, f = Ke(r, ot.__wbindgen_malloc), d = ct, m = ot.detectNonwearUnifiedBatchTyped(c, a, s, l, u, w, g, b, f, d, i, o);
	if (m[2]) throw nt(m[1]);
	return nt(m[0]);
}
function L(n, e) {
	const t = Ke(n, ot.__wbindgen_malloc), _ = ct, r = Ke(e, ot.__wbindgen_malloc), i = ct, o = ot.epochAgreement(t, _, r, i);
	if (o[2]) throw nt(o[1]);
	return nt(o[0]);
}
function V(n, e, t, _, r) {
	const i = Ke(n, ot.__wbindgen_malloc), o = ct, c = Ke(e, ot.__wbindgen_malloc), a = ct, s = Ke(t, ot.__wbindgen_malloc), l = ct, u = Ke(_, ot.__wbindgen_malloc), w = ct, g = ot.epochRawData(i, o, c, a, s, l, u, w, r);
	if (g[2]) throw nt(g[1]);
	return nt(g[0]);
}
function X(n, e, t) {
	const _ = Ke(n, ot.__wbindgen_malloc), r = ct, i = Ke(e, ot.__wbindgen_malloc), o = ct, c = ot.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw nt(c[1]);
	return nt(c[0]);
}
function q(n, e) {
	let t, _;
	try {
		const o = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), c = ct, a = Qe(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), s = ct, l = ot.executeHeroRuntime(o, c, a, s);
		var r = l[0], i = l[1];
		if (l[3]) throw r = 0, i = 0, nt(l[2]);
		return t = r, _ = i, Le(r, i);
	} finally {
		ot.__wbindgen_free(t, _, 1);
	}
}
function H(n) {
	const e = ot.exportNapAggregate(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function J(n, e, t) {
	const _ = ot.exportPeriodFigures(!$e(n), $e(n) ? 0 : n, !$e(e), $e(e) ? 0 : e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function $(n) {
	const e = Ze(n, ot.__wbindgen_malloc), t = ct, _ = ot.extractCapsense(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function Y(n) {
	const e = ot.fuseNonwearMasks(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function Z(n, e) {
	const t = ot.generateActiwareRestIntervals(n, e);
	if (t[2]) throw nt(t[1]);
	return nt(t[0]);
}
function K() {
	const n = ot.getComputeCapabilitiesV1();
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function Q(n) {
	const e = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), t = ct, _ = ot.ggirConfigValues(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function nn(n, e) {
	return ot.ggirSptDurationHours(n, e);
}
function en(n, e) {
	const t = ot.ggirSummaryDenominator(n, e);
	if (t[2]) throw nt(t[1]);
	return nt(t[0]);
}
function tn(n) {
	let e, t;
	try {
		const i = Ze(n, ot.__wbindgen_malloc), o = ct, c = ot.identifyGgirRData(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, nt(c[2]);
		return e = _, t = r, Le(_, r);
	} finally {
		ot.__wbindgen_free(e, t, 1);
	}
}
function _n(n) {
	return ot.initThreadPool(n);
}
function rn() {
	ot.installPanicHook();
}
function on(n) {
	const e = Ze(n, ot.__wbindgen_malloc), t = ct;
	return 0 !== ot.isGeneactivFormat(e, t);
}
function cn(n, e, t, _) {
	const r = Ke(n, ot.__wbindgen_malloc), i = ct, o = Ke(e, ot.__wbindgen_malloc), c = ct, a = Ke(t, ot.__wbindgen_malloc), s = ct, l = ot.lstmSpectralFeatures30s(r, i, o, c, a, s, _);
	if (l[2]) throw nt(l[1]);
	return nt(l[0]);
}
function an(n, e, t, _, r) {
	const i = Ke(n, ot.__wbindgen_malloc), o = ct, c = Ke(e, ot.__wbindgen_malloc), a = ct, s = Ke(t, ot.__wbindgen_malloc), l = ct, u = ot.neishabouriCounts(i, o, c, a, s, l, _, r);
	if (u[2]) throw nt(u[1]);
	return nt(u[0]);
}
function sn(n, e, t, _) {
	let r, i;
	try {
		const a = Ye(n, ot.__wbindgen_malloc), s = ct, l = Qe(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), u = ct, w = ot.nonwearContributors(a, s, l, u, t, _);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, nt(w[2]);
		return r = o, i = c, Le(o, c);
	} finally {
		ot.__wbindgen_free(r, i, 1);
	}
}
function ln(n, e) {
	const t = Ze(n, ot.__wbindgen_malloc), _ = ct, r = ot.parseActigraphCsv(t, _, e);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function un(n) {
	const e = ot.parseActigraphCsvBuffered(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function wn(n, e, t, _) {
	const r = Ze(n, ot.__wbindgen_malloc), i = ct;
	var o = $e(e) ? 0 : Qe(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), c = ct, a = $e(_) ? 0 : Qe(_, ot.__wbindgen_malloc, ot.__wbindgen_realloc), s = ct;
	const l = ot.parseAw5(r, i, o, c, $e(t) ? 0 : Ie(t), a, s);
	if (l[2]) throw nt(l[1]);
	return nt(l[0]);
}
function gn(n) {
	const e = Ze(n, ot.__wbindgen_malloc), t = ct, _ = ot.parseCwa(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function bn(n, e) {
	const t = Ze(n, ot.__wbindgen_malloc), _ = ct, r = Qe(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), i = ct, o = ot.parseEpochSeries(t, _, r, i);
	if (o[2]) throw nt(o[1]);
	return nt(o[0]);
}
function fn(n) {
	const e = Ze(n, ot.__wbindgen_malloc), t = ct, _ = ot.parseGeneactivBin(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function dn(n) {
	const e = Ze(n, ot.__wbindgen_malloc), t = ct, _ = ot.parseGeneactivCsv(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function mn() {
	const n = ot.parseGeneactivCsvBuffered();
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function hn(n) {
	const e = Ze(n, ot.__wbindgen_malloc), t = ct, _ = ot.parseGt3x(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function pn(n) {
	let e, t;
	try {
		const i = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), o = ct, c = ot.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, nt(c[2]);
		return e = _, t = r, Le(_, r);
	} finally {
		ot.__wbindgen_free(e, t, 1);
	}
}
function yn(n, e, t, _, r, i) {
	const o = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), c = ct, a = Ke(e, ot.__wbindgen_malloc), s = ct, l = Ke(t, ot.__wbindgen_malloc), u = ct, w = Ze(_, ot.__wbindgen_malloc), g = ct, b = Ze(r, ot.__wbindgen_malloc), f = ct, d = Qe(i, ot.__wbindgen_malloc, ot.__wbindgen_realloc), m = ct, h = ot.placeMarkersBatch(o, c, a, s, l, u, w, g, b, f, d, m);
	if (h[2]) throw nt(h[1]);
	return nt(h[0]);
}
function vn(n, e, t, _, r, i, o, c, a, s, l, u, w, g, b, f, d, m, h) {
	const p = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), y = ct, v = Ke(e, ot.__wbindgen_malloc), k = ct, A = Ye(t, ot.__wbindgen_malloc), R = ct, S = Ke(_, ot.__wbindgen_malloc), x = ct, C = Ye(r, ot.__wbindgen_malloc), F = ct, P = Ze(i, ot.__wbindgen_malloc), z = ct, M = Ye(o, ot.__wbindgen_malloc), U = ct, I = Ze(c, ot.__wbindgen_malloc), W = ct, D = Ye(a, ot.__wbindgen_malloc), N = ct, T = Ke(s, ot.__wbindgen_malloc), O = ct, j = Ye(l, ot.__wbindgen_malloc), E = ct, B = Ke(u, ot.__wbindgen_malloc), G = ct, L = Ye(w, ot.__wbindgen_malloc), V = ct, X = Ke(g, ot.__wbindgen_malloc), q = ct, H = Ye(b, ot.__wbindgen_malloc), J = ct, $ = Ke(f, ot.__wbindgen_malloc), Y = ct, Z = Ye(d, ot.__wbindgen_malloc), K = ct, Q = Ze(m, ot.__wbindgen_malloc), nn = ct, en = Ye(h, ot.__wbindgen_malloc), tn = ct, _n = ot.placeMarkersTyped(p, y, v, k, A, R, S, x, C, F, P, z, M, U, I, W, D, N, T, O, j, E, B, G, L, V, X, q, H, J, $, Y, Z, K, Q, nn, en, tn);
	if (_n[2]) throw nt(_n[1]);
	return nt(_n[0]);
}
function kn(n) {
	let e, t;
	try {
		const i = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), o = ct, c = ot.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, nt(c[2]);
		return e = _, t = r, Le(_, r);
	} finally {
		ot.__wbindgen_free(e, t, 1);
	}
}
function An(n, e, t, _) {
	const r = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), i = ct, o = Ke(e, ot.__wbindgen_malloc), c = ct, a = Ke(t, ot.__wbindgen_malloc), s = ct, l = Ze(_, ot.__wbindgen_malloc), u = ct, w = ot.placeNonwearMarkersTyped(r, i, o, c, a, s, l, u);
	if (w[2]) throw nt(w[1]);
	return nt(w[0]);
}
function Rn(n) {
	const e = ot.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function Sn(n) {
	const e = ot.prepareCompactPipelineV1(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function xn(n, e, t, _, r, i, o) {
	const c = Ke(n, ot.__wbindgen_malloc), a = ct, s = Ke(e, ot.__wbindgen_malloc), l = ct, u = Ke(t, ot.__wbindgen_malloc), w = ct, g = Ke(_, ot.__wbindgen_malloc), b = ct;
	var f = $e(o) ? 0 : Qe(o, ot.__wbindgen_malloc, ot.__wbindgen_realloc), d = ct;
	const m = ot.processGeneactivRaw(c, a, s, l, u, w, g, b, r, i, f, d);
	if (m[2]) throw nt(m[1]);
	return nt(m[0]);
}
function Cn(n) {
	const e = Ze(n, ot.__wbindgen_malloc), t = ct, _ = ot.processGt3xFull(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function Fn(n, e) {
	const t = Ze(n, ot.__wbindgen_malloc), _ = ct, r = ot.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function Pn(n) {
	const e = Ze(n, ot.__wbindgen_malloc), t = ct, _ = ot.processGt3xPart1(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function zn(n, e) {
	const t = Ze(n, ot.__wbindgen_malloc), _ = ct, r = ot.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function Mn(n, e, t, _, r, i) {
	const o = Ke(n, ot.__wbindgen_malloc), c = ct, a = Ke(e, ot.__wbindgen_malloc), s = ct, l = Ke(t, ot.__wbindgen_malloc), u = ct;
	var w = $e(i) ? 0 : Qe(i, ot.__wbindgen_malloc, ot.__wbindgen_realloc), g = ct;
	const b = ot.processRawXyz(o, c, a, s, l, u, _, r, w, g);
	if (b[2]) throw nt(b[1]);
	return nt(b[0]);
}
function Un(n, e, t, _, r, i) {
	const o = Ke(n, ot.__wbindgen_malloc), c = ct, a = Ke(e, ot.__wbindgen_malloc), s = ct, l = Ke(t, ot.__wbindgen_malloc), u = ct, w = Ke(_, ot.__wbindgen_malloc), g = ct;
	var b = $e(i) ? 0 : Qe(i, ot.__wbindgen_malloc, ot.__wbindgen_realloc), f = ct;
	const d = ot.processRawXyzImputed(o, c, a, s, l, u, w, g, r, b, f);
	if (d[2]) throw nt(d[1]);
	return nt(d[0]);
}
function In(n, e, t, _, r, i, o) {
	const c = Ke(n, ot.__wbindgen_malloc), a = ct, s = Ke(e, ot.__wbindgen_malloc), l = ct, u = Ke(t, ot.__wbindgen_malloc), w = ct, g = Ke(_, ot.__wbindgen_malloc), b = ct;
	var f = $e(i) ? 0 : Qe(i, ot.__wbindgen_malloc, ot.__wbindgen_realloc), d = ct;
	const m = ot.processRawXyzImputedWithEpoch(c, a, s, l, u, w, g, b, r, f, d, o);
	if (m[2]) throw nt(m[1]);
	return nt(m[0]);
}
function Wn(n, e, t, _) {
	const r = Ke(n, ot.__wbindgen_malloc), i = ct, o = Ke(e, ot.__wbindgen_malloc), c = ct, a = Ke(t, ot.__wbindgen_malloc), s = ct, l = ot.rasterizePeriods(r, i, o, c, a, s, _);
	if (l[2]) throw nt(l[1]);
	return nt(l[0]);
}
function Dn(n) {
	const e = Ze(n, ot.__wbindgen_malloc), t = ct, _ = ot.readGgirMeta(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function Nn() {
	return ot.recommended_chunk_size_mb() >>> 0;
}
function Tn(n, e) {
	const t = Ke(n, ot.__wbindgen_malloc), _ = ct, r = Qe(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), i = ct, o = ot.reduceF64V1(t, _, r, i);
	if (o[2]) throw nt(o[1]);
	return o[0];
}
function On(n) {
	const e = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), t = ct, _ = ot.resolveTimezone(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function jn(n, e, t, _, r, i, o, c, a, s, l) {
	const u = Ze(n, ot.__wbindgen_malloc), w = ct, g = Qe(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), b = ct;
	var f = $e(t) ? 0 : Ze(t, ot.__wbindgen_malloc), d = ct, m = $e(_) ? 0 : Ze(_, ot.__wbindgen_malloc), h = ct, p = $e(r) ? 0 : Ze(r, ot.__wbindgen_malloc), y = ct, v = $e(i) ? 0 : Ze(i, ot.__wbindgen_malloc), k = ct, A = $e(o) ? 0 : Ze(o, ot.__wbindgen_malloc), R = ct, S = $e(c) ? 0 : Qe(c, ot.__wbindgen_malloc, ot.__wbindgen_realloc), x = ct, C = $e(a) ? 0 : Qe(a, ot.__wbindgen_malloc, ot.__wbindgen_realloc), F = ct;
	const P = ot.reviewGgirResults(u, w, g, b, f, d, m, h, p, y, v, k, A, R, S, x, C, F, s, l);
	if (P[2]) throw nt(P[1]);
	return nt(P[0]);
}
function En(n) {
	const e = ot.reviewNonwearFile(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function Bn(n) {
	const e = ot.reviewNonwearTotals(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function Gn(n) {
	const e = ot.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function Ln(n) {
	const e = ot.runCompactPipelineV1(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function Vn(n, e) {
	const t = ot.runFullPipeline(n, e);
	if (t[2]) throw nt(t[1]);
	return nt(t[0]);
}
function Xn(n) {
	const e = ot.runFullPipelineOutcomeV1(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function qn(n) {
	const e = ot.runFullPipelineV1(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function Hn(n, e) {
	const t = ot.runGgirFromEpoch(n, e);
	if (t[2]) throw nt(t[1]);
	return nt(t[0]);
}
function Jn(n) {
	const e = ot.runGgirPart3(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function $n(n) {
	const e = Ze(n, ot.__wbindgen_malloc), t = ct, _ = ot.runMilestone(e, t);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function Yn(n) {
	const e = ot.scoreAllDays(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function Zn(n, e) {
	const t = Ke(n, ot.__wbindgen_malloc), _ = ct, r = ot.scoreColeKripke(t, _, e);
	var i = Oe(r[0], r[1]).slice();
	return ot.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Kn(n) {
	let e, t;
	try {
		const i = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), o = ct, c = ot.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, nt(c[2]);
		return e = _, t = r, Le(_, r);
	} finally {
		ot.__wbindgen_free(e, t, 1);
	}
}
function Qn(n) {
	const e = ot.scoreConsensusMajority(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function ne(n, e, t) {
	const _ = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), r = ct, i = Ze(e, ot.__wbindgen_malloc), o = ct, c = Ye(t, ot.__wbindgen_malloc), a = ct, s = ot.scoreConsensusTyped(_, r, i, o, c, a);
	if (s[2]) throw nt(s[1]);
	return nt(s[0]);
}
function ee(n) {
	let e, t;
	try {
		const i = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), o = ct, c = ot.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, nt(c[2]);
		return e = _, t = r, Le(_, r);
	} finally {
		ot.__wbindgen_free(e, t, 1);
	}
}
function te(n, e, t, _, r, i) {
	const o = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), c = ct, a = Ke(e, ot.__wbindgen_malloc), s = ct, l = Ke(t, ot.__wbindgen_malloc), u = ct, w = Ke(_, ot.__wbindgen_malloc), g = ct, b = ot.scoreEpochsTyped(o, c, a, s, l, u, w, g, r, i);
	if (b[2]) throw nt(b[1]);
	return nt(b[0]);
}
function _e(n) {
	const e = Ke(n, ot.__wbindgen_malloc), t = ct, _ = ot.scoreGgirHasib(e, t);
	var r = Oe(_[0], _[1]).slice();
	return ot.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function re(n) {
	const e = ot.scoreGgirHasibVariant(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function ie(n, e, t) {
	const _ = Ke(n, ot.__wbindgen_malloc), r = ct, i = Ke(e, ot.__wbindgen_malloc), o = ct, c = ot.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw nt(c[1]);
	return nt(c[0]);
}
function oe(n, e) {
	const t = Ke(n, ot.__wbindgen_malloc), _ = ct, r = ot.scoreSadeh(t, _, e);
	var i = Oe(r[0], r[1]).slice();
	return ot.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function ce(n) {
	const e = Ze(n, ot.__wbindgen_malloc), t = ct, _ = ot.sha256StreamFeed(e, t);
	if (_[1]) throw nt(_[0]);
}
function ae() {
	let n, e;
	try {
		const r = ot.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, nt(r[2]);
		return n = t, e = _, Le(t, _);
	} finally {
		ot.__wbindgen_free(n, e, 1);
	}
}
function se() {
	ot.sha256StreamStart();
}
function le(n, e, t, _, r) {
	const i = Qe(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), o = ct, c = Ke(e, ot.__wbindgen_malloc), a = ct, s = Ye(t, ot.__wbindgen_malloc), l = ct, u = Ke(_, ot.__wbindgen_malloc), w = ct, g = Ye(r, ot.__wbindgen_malloc), b = ct, f = ot.sleepRegularityIndex(i, o, c, a, s, l, u, w, g, b);
	if (f[3]) throw nt(f[2]);
	return 0 === f[0] ? void 0 : f[1];
}
function ue(n, e) {
	const t = ot.sleepWakeScores(n, e);
	if (t[2]) throw nt(t[1]);
	return nt(t[0]);
}
function we(n) {
	return ot.startThreadPool(n);
}
function ge(n) {
	const e = Ze(n, ot.__wbindgen_malloc), t = ct, _ = ot.streamParseFeed(e, t);
	if (_[2]) throw nt(_[1]);
	return _[0] >>> 0;
}
function be() {
	const n = ot.streamParseFinish();
	if (n[2]) throw nt(n[1]);
	return _.__wrap(n[0]);
}
function fe() {
	const n = ot.streamParseFinishChunk();
	if (n[2]) throw nt(n[1]);
	return t.__wrap(n[0]);
}
function de(n) {
	const e = ot.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw nt(e[1]);
	return t.__wrap(e[0]);
}
function me(n, e) {
	const t = ot.streamParseStart(n, e);
	if (t[1]) throw nt(t[0]);
}
function he(n, e) {
	const t = ot.streamParseStartData(n, e);
	if (t[1]) throw nt(t[0]);
}
function pe(n, e, t) {
	const _ = ot.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw nt(_[0]);
}
function ye(n, e) {
	const t = Ze(n, ot.__wbindgen_malloc), _ = ct, r = ot.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function ve(n) {
	const e = ot.summarizeExportGroups(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function ke(n) {
	const e = ot.summarizePhysicalActivityTrace(n);
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function Ae() {
	return 0 !== ot.threadPoolReady();
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var Re = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, Ue.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Ue.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		ot.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		ot.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return ot.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return ot.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return ot.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function Se(n) {
	ot.wbg_rayon_start_worker(n);
}
function xe(n, e, t, _, r) {
	const i = Ke(n, ot.__wbindgen_malloc), o = ct, c = Ke(e, ot.__wbindgen_malloc), a = ct, s = Ke(t, ot.__wbindgen_malloc), l = ct, u = ot.zeroCrossingCounts(i, o, c, a, s, l, _, r);
	if (u[2]) throw nt(u[1]);
	return nt(u[0]);
}
function Ce(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(Le(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = Qe(String(e), ot.__wbindgen_malloc, ot.__wbindgen_realloc), _ = ct;
				Ee().setInt32(n + 4, _, !0), Ee().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				Ee().setBigInt64(n + 8, $e(t) ? BigInt(0) : t, !0), Ee().setInt32(n + 0, !$e(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return $e(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = Qe(De(e), ot.__wbindgen_malloc, ot.__wbindgen_realloc), _ = ct;
				Ee().setInt32(n + 4, _, !0), Ee().setInt32(n + 0, t, !0);
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
				return ot.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return it;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const t = "number" == typeof e ? e : void 0;
				Ee().setFloat64(n + 8, $e(t) ? 0 : t, !0), Ee().setInt32(n + 0, !$e(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = $e(t) ? 0 : Qe(t, ot.__wbindgen_malloc, ot.__wbindgen_realloc), r = ct;
				Ee().setInt32(n + 4, r, !0), Ee().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(Le(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return Je(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return Je(function(n, e, t, _) {
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
					t = n, _ = e, console.error(Le(n, e));
				} finally {
					ot.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return Je(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return Je(function(n, e) {
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
				return new Float64Array(Ne(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(Oe(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return Je(function(n) {
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
				return Je(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(Oe(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return Je(function(n, e, t) {
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
				const t = Qe(e.stack, ot.__wbindgen_malloc, ot.__wbindgen_realloc), _ = ct;
				Ee().setInt32(n + 4, _, !0), Ee().setInt32(n + 0, t, !0);
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
				}(e, t, Re.__wrap(_));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return $e(n) ? 0 : Ie(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return $e(n) ? 0 : Ie(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return $e(n) ? 0 : Ie(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return $e(n) ? 0 : Ie(n);
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
						0 === --_.cnt && (ot.__wbindgen_destroy_closure(_.a, _.b), _.a = 0, We.unregister(_));
					}, We.register(r, _, _), r;
				}(n, e, Fe);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return Oe(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return Le(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = ot.__wbindgen_externrefs, e = n.grow(4);
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
function Fe(n, e, t) {
	ot.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, t);
}
Symbol.dispose && (Re.prototype[Symbol.dispose] = Re.prototype.free);
const Pe = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ot.__wbg_aw5batch_free(n >>> 0, 1)), ze = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ot.__wbg_streamchunkresult_free(n >>> 0, 1)), Me = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ot.__wbg_streamparseresult_free(n >>> 0, 1)), Ue = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ot.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function Ie(n) {
	const e = ot.__externref_table_alloc();
	return ot.__wbindgen_externrefs.set(e, n), e;
}
const We = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ot.__wbindgen_destroy_closure(n.a, n.b));
function De(n) {
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
		e > 0 && (t += De(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + De(n[_]);
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
function Ne(n, e) {
	return n >>>= 0, Ge().subarray(n / 8, n / 8 + e);
}
function Te(n, e) {
	return n >>>= 0, Xe().subarray(n / 4, n / 4 + e);
}
function Oe(n, e) {
	return n >>>= 0, He().subarray(n / 1, n / 1 + e);
}
let je = null;
function Ee() {
	return null !== je && je.buffer === ot.memory.buffer || (je = new DataView(ot.memory.buffer)), je;
}
let Be = null;
function Ge() {
	return null !== Be && Be.buffer === ot.memory.buffer || (Be = new Float64Array(ot.memory.buffer)), Be;
}
function Le(n, e) {
	return function(n, e) {
		return _t += e, _t >= tt && (et = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), et.decode(), _t = e), et.decode(He().slice(n, n + e));
	}(n >>>= 0, e);
}
let Ve = null;
function Xe() {
	return null !== Ve && Ve.buffer === ot.memory.buffer || (Ve = new Uint32Array(ot.memory.buffer)), Ve;
}
let qe = null;
function He() {
	return null !== qe && qe.buffer === ot.memory.buffer || (qe = new Uint8Array(ot.memory.buffer)), qe;
}
function Je(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = Ie(t);
		ot.__wbindgen_exn_store(n);
	}
}
function $e(n) {
	return null == n;
}
function Ye(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return Xe().set(n, t / 4), ct = n.length, t;
}
function Ze(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return He().set(n, t / 1), ct = n.length, t;
}
function Ke(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return Ge().set(n, t / 8), ct = n.length, t;
}
function Qe(n, e, t) {
	if (void 0 === t) {
		const t = rt.encode(n), _ = e(t.length, 1) >>> 0;
		return He().subarray(_, _ + t.length).set(t), ct = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = He();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = He().subarray(r + o, r + _);
		o += rt.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return ct = o, r;
}
function nt(n) {
	const e = ot.__wbindgen_externrefs.get(n);
	return ot.__externref_table_dealloc(n), e;
}
let et = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
et && et.decode();
const tt = 2146435072;
let _t = 0;
const rt = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
rt && (rt.encodeInto = function(n, e) {
	const t = rt.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let it, ot, ct = 0;
function at(n, e, t) {
	if (ot = n.exports, it = e, je = null, Be = null, Ve = null, qe = null, void 0 !== t && ("number" != typeof t || 0 === t || t % 65536 != 0)) throw new Error("invalid stack size");
	return ot.__wbindgen_start(t), ot;
}
function st(n, e) {
	if (void 0 !== ot) return ot;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const _ = Ce(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), at(new WebAssembly.Instance(n, _), n, t);
}
async function lt(n, e) {
	if (void 0 !== ot) return ot;
	let t;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: t} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-Cvly6cg-.wasm", "" + import.meta.url));
	const _ = Ce(e);
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
	return at(r, i, t);
}
export { e as Aw5Batch, t as StreamChunkResult, _ as StreamParseResult, r as actiwareIntervalStatistics, i as actiwareSleepIntervals, o as actiwareWakeThreshold, c as actoursVersion, a as aggregateEpochSeries, s as analyzePhysicalActivityDay, l as classifyActimetricPreschoolWristRf, u as classifyActimetricPreschoolWristRfLagLead, w as classifyActimetricPreschoolWristRfLagLeadCalibrated, g as compareNonwearDetectorMasks, b as computeAnglez5s, f as computeCircadian, d as computeCircadianTyped, m as computeEnmo5s, h as computeMimsUnit, p as computeMimsUnitDataframe, y as computeMimsUnitTimingBreakdown, v as computeMimsUnitValues, k as computeNightDifficulty, A as computeNightDifficultyTyped, R as computeNightSignals, S as computeNightSignalsTyped, x as computeSleepMetrics, C as configureComputeMemoryBudgetV1, F as csvBufferAppend, P as csvBufferClear, lt as default, z as detectDetachFromAccelerationG, M as detectDeviceFormat, U as detectGgirHasptVariant, I as detectHdcza, W as detectNonwear, D as detectNonwearChoi2011, N as detectNonwearChoi2011Bouts, T as detectNonwearChoi2011Epoch, O as detectNonwearChoi2012, j as detectNonwearChoi2012Bouts, E as detectNonwearChoiBouts, B as detectNonwearUnified, G as detectNonwearUnifiedBatchTyped, L as epochAgreement, V as epochRawData, X as epochWithBandpass, q as executeHeroRuntime, H as exportNapAggregate, J as exportPeriodFigures, $ as extractCapsense, Y as fuseNonwearMasks, Z as generateActiwareRestIntervals, K as getComputeCapabilitiesV1, Q as ggirConfigValues, nn as ggirSptDurationHours, en as ggirSummaryDenominator, tn as identifyGgirRData, st as initSync, _n as initThreadPool, rn as installPanicHook, on as isGeneactivFormat, cn as lstmSpectralFeatures30s, an as neishabouriCounts, sn as nonwearContributors, ln as parseActigraphCsv, un as parseActigraphCsvBuffered, wn as parseAw5, gn as parseCwa, bn as parseEpochSeries, fn as parseGeneactivBin, dn as parseGeneactivCsv, mn as parseGeneactivCsvBuffered, hn as parseGt3x, pn as placeMarkers, yn as placeMarkersBatch, vn as placeMarkersTyped, kn as placeNonwearMarkers, An as placeNonwearMarkersTyped, Rn as prepareCompactPipelineOutcomeV1, Sn as prepareCompactPipelineV1, xn as processGeneactivRaw, Cn as processGt3xFull, Fn as processGt3xFullWithEpoch, Pn as processGt3xPart1, zn as processGt3xPart1WithEpoch, Mn as processRawXyz, Un as processRawXyzImputed, In as processRawXyzImputedWithEpoch, Wn as rasterizePeriods, Dn as readGgirMeta, Nn as recommended_chunk_size_mb, Tn as reduceF64V1, On as resolveTimezone, jn as reviewGgirResults, En as reviewNonwearFile, Bn as reviewNonwearTotals, Gn as runCompactPipelineOutcomeV1, Ln as runCompactPipelineV1, Vn as runFullPipeline, Xn as runFullPipelineOutcomeV1, qn as runFullPipelineV1, Hn as runGgirFromEpoch, Jn as runGgirPart3, $n as runMilestone, Yn as scoreAllDays, Zn as scoreColeKripke, Kn as scoreConsensus, Qn as scoreConsensusMajority, ne as scoreConsensusTyped, ee as scoreEpochs, te as scoreEpochsTyped, _e as scoreGgirHasib, re as scoreGgirHasibVariant, ie as scoreGgirSib, oe as scoreSadeh, ce as sha256StreamFeed, ae as sha256StreamFinish, se as sha256StreamStart, le as sleepRegularityIndex, ue as sleepWakeScores, we as startThreadPool, ge as streamParseFeed, be as streamParseFinish, fe as streamParseFinishChunk, de as streamParseFinishChunkWithProgress, me as streamParseStart, he as streamParseStartData, pe as streamParseStartWithEpoch, ye as summarizeActimetricPreschoolWristRfClasses, ve as summarizeExportGroups, ke as summarizePhysicalActivityTrace, Ae as threadPoolReady, Re as wbg_rayon_PoolBuilder, Se as wbg_rayon_start_worker, xe as zeroCrossingCounts };
