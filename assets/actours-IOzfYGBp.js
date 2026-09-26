var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ye.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		$e.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = $e.aw5batch_new(n);
		if (e[2]) throw Ve(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, ye.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, t) {
		const _ = Te(e, $e.__wbindgen_malloc, $e.__wbindgen_realloc), r = Ye;
		var i = Ge(t) ? 0 : Te(t, $e.__wbindgen_malloc, $e.__wbindgen_realloc), o = Ye;
		const c = $e.aw5batch_recording(this.__wbg_ptr, n, _, r, i, o);
		if (c[2]) throw Ve(c[1]);
		return Ve(c[0]);
	}
	subjects(n) {
		const e = $e.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw Ve(e[1]);
		return Ve(e[0]);
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, ve.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ve.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		$e.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = $e.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = $e.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = $e.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = $e.streamchunkresult_axisX(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = $e.streamchunkresult_axisY(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = $e.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== $e.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = $e.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ze(n[0], n[1]).slice(), $e.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = $e.streamchunkresult_counts(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = $e.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = $e.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = $e.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = $e.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = $e.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return $e.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = $e.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = $e.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== $e.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = $e.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ze(n[0], n[1]).slice(), $e.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = $e.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = $e.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = $e.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== $e.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return $e.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return $e.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return $e.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = $e.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = $e.streamchunkresult_temperature(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = $e.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = $e.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = $e.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = $e.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = $e.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = $e.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var t = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, ke.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ke.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		$e.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = $e.streamparseresult_axisX(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = $e.streamparseresult_axisY(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = $e.streamparseresult_axisZ(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== $e.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = $e.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ze(n[0], n[1]).slice(), $e.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return $e.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== $e.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return $e.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return $e.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = $e.streamparseresult_temperature(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = $e.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = $e.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = Se(n[0], n[1]).slice();
		return $e.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function _(n) {
	const e = $e.actiwareIntervalStatistics(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function r(n, e, t) {
	const _ = $e.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function i() {
	let n, e;
	try {
		const t = $e.actoursVersion();
		return n = t[0], e = t[1], ze(t[0], t[1]);
	} finally {
		$e.__wbindgen_free(n, e, 1);
	}
}
function o(n) {
	const e = $e.aggregateEpochSeries(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function c(n) {
	let e, t;
	try {
		const i = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), o = Ye, c = $e.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ve(c[2]);
		return e = _, t = r, ze(_, r);
	} finally {
		$e.__wbindgen_free(e, t, 1);
	}
}
function a(n, e, t, _) {
	const r = Ee(n, $e.__wbindgen_malloc), i = Ye, o = Ee(e, $e.__wbindgen_malloc), c = Ye, a = Ee(t, $e.__wbindgen_malloc), l = Ye, s = $e.classifyActimetricPreschoolWristRf(r, i, o, c, a, l, _);
	if (s[3]) throw Ve(s[2]);
	var u = Ce(s[0], s[1]).slice();
	return $e.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function l(n, e, t, _) {
	const r = Ee(n, $e.__wbindgen_malloc), i = Ye, o = Ee(e, $e.__wbindgen_malloc), c = Ye, a = Ee(t, $e.__wbindgen_malloc), l = Ye, s = $e.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, l, _);
	if (s[3]) throw Ve(s[2]);
	var u = Ce(s[0], s[1]).slice();
	return $e.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function s(n, e, t, _) {
	const r = Ee(n, $e.__wbindgen_malloc), i = Ye, o = Ee(e, $e.__wbindgen_malloc), c = Ye, a = Ee(t, $e.__wbindgen_malloc), l = Ye, s = $e.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, l, _);
	if (s[3]) throw Ve(s[2]);
	var u = Ce(s[0], s[1]).slice();
	return $e.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function u(n, e) {
	const t = $e.compareNonwearDetectorMasks(n, e);
	if (t[2]) throw Ve(t[1]);
	return Ve(t[0]);
}
function w(n, e, t, _) {
	const r = Ee(n, $e.__wbindgen_malloc), i = Ye, o = Ee(e, $e.__wbindgen_malloc), c = Ye, a = Ee(t, $e.__wbindgen_malloc), l = Ye, s = $e.computeAnglez5s(r, i, o, c, a, l, _);
	var u = Se(s[0], s[1]).slice();
	return $e.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function g(n) {
	let e, t;
	try {
		const i = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), o = Ye, c = $e.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ve(c[2]);
		return e = _, t = r, ze(_, r);
	} finally {
		$e.__wbindgen_free(e, t, 1);
	}
}
function b(n, e, t, _, r, i, o) {
	const c = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), a = Ye, l = Ee(e, $e.__wbindgen_malloc), s = Ye, u = Oe(t, $e.__wbindgen_malloc), w = Ye, g = Ee(_, $e.__wbindgen_malloc), b = Ye, f = Oe(r, $e.__wbindgen_malloc), d = Ye, m = je(i, $e.__wbindgen_malloc), h = Ye, p = Oe(o, $e.__wbindgen_malloc), y = Ye, v = $e.computeCircadianTyped(c, a, l, s, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw Ve(v[1]);
	return Ve(v[0]);
}
function f(n, e, t, _) {
	const r = Ee(n, $e.__wbindgen_malloc), i = Ye, o = Ee(e, $e.__wbindgen_malloc), c = Ye, a = Ee(t, $e.__wbindgen_malloc), l = Ye, s = $e.computeEnmo5s(r, i, o, c, a, l, _);
	var u = Se(s[0], s[1]).slice();
	return $e.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function d(n, e, t, _, r) {
	const i = Ee(n, $e.__wbindgen_malloc), o = Ye, c = Ee(e, $e.__wbindgen_malloc), a = Ye, l = Ee(t, $e.__wbindgen_malloc), s = Ye, u = $e.computeMimsUnit(i, o, c, a, l, s, _, r);
	if (u[2]) throw Ve(u[1]);
	return Ve(u[0]);
}
function m(n, e, t, _, r) {
	const i = Ee(n, $e.__wbindgen_malloc), o = Ye, c = Ee(e, $e.__wbindgen_malloc), a = Ye, l = Ee(t, $e.__wbindgen_malloc), s = Ye, u = Ee(_, $e.__wbindgen_malloc), w = Ye, g = $e.computeMimsUnitDataframe(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw Ve(g[1]);
	return Ve(g[0]);
}
function h(n, e, t, _, r) {
	const i = Ee(n, $e.__wbindgen_malloc), o = Ye, c = Ee(e, $e.__wbindgen_malloc), a = Ye, l = Ee(t, $e.__wbindgen_malloc), s = Ye, u = $e.computeMimsUnitTimingBreakdown(i, o, c, a, l, s, _, r);
	if (u[2]) throw Ve(u[1]);
	return Ve(u[0]);
}
function p(n, e, t, _, r) {
	const i = Ee(n, $e.__wbindgen_malloc), o = Ye, c = Ee(e, $e.__wbindgen_malloc), a = Ye, l = Ee(t, $e.__wbindgen_malloc), s = Ye, u = $e.computeMimsUnitValues(i, o, c, a, l, s, _, r);
	if (u[3]) throw Ve(u[2]);
	var w = Se(u[0], u[1]).slice();
	return $e.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function y(n) {
	let e, t;
	try {
		const i = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), o = Ye, c = $e.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ve(c[2]);
		return e = _, t = r, ze(_, r);
	} finally {
		$e.__wbindgen_free(e, t, 1);
	}
}
function v(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), y = Ye, v = Ee(e, $e.__wbindgen_malloc), k = Ye, A = Oe(t, $e.__wbindgen_malloc), x = Ye, S = Ee(_, $e.__wbindgen_malloc), R = Ye, C = Oe(r, $e.__wbindgen_malloc), F = Ye, P = je(i, $e.__wbindgen_malloc), M = Ye, I = Oe(o, $e.__wbindgen_malloc), z = Ye, U = je(c, $e.__wbindgen_malloc), D = Ye, N = Oe(a, $e.__wbindgen_malloc), W = Ye, B = Ee(l, $e.__wbindgen_malloc), G = Ye, O = Oe(s, $e.__wbindgen_malloc), j = Ye, E = Ee(u, $e.__wbindgen_malloc), T = Ye, V = Oe(w, $e.__wbindgen_malloc), L = Ye, X = Ee(g, $e.__wbindgen_malloc), q = Ye, H = Oe(b, $e.__wbindgen_malloc), $ = Ye, Y = Ee(f, $e.__wbindgen_malloc), Z = Ye, K = Oe(d, $e.__wbindgen_malloc), J = Ye, Q = je(m, $e.__wbindgen_malloc), nn = Ye, en = Oe(h, $e.__wbindgen_malloc), tn = Ye, _n = $e.computeNightDifficultyTyped(p, y, v, k, A, x, S, R, C, F, P, M, I, z, U, D, N, W, B, G, O, j, E, T, V, L, X, q, H, $, Y, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw Ve(_n[1]);
	return Ve(_n[0]);
}
function k(n) {
	let e, t;
	try {
		const i = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), o = Ye, c = $e.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ve(c[2]);
		return e = _, t = r, ze(_, r);
	} finally {
		$e.__wbindgen_free(e, t, 1);
	}
}
function A(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), y = Ye, v = Ee(e, $e.__wbindgen_malloc), k = Ye, A = Oe(t, $e.__wbindgen_malloc), x = Ye, S = Ee(_, $e.__wbindgen_malloc), R = Ye, C = Oe(r, $e.__wbindgen_malloc), F = Ye, P = je(i, $e.__wbindgen_malloc), M = Ye, I = Oe(o, $e.__wbindgen_malloc), z = Ye, U = je(c, $e.__wbindgen_malloc), D = Ye, N = Oe(a, $e.__wbindgen_malloc), W = Ye, B = Ee(l, $e.__wbindgen_malloc), G = Ye, O = Oe(s, $e.__wbindgen_malloc), j = Ye, E = Ee(u, $e.__wbindgen_malloc), T = Ye, V = Oe(w, $e.__wbindgen_malloc), L = Ye, X = Ee(g, $e.__wbindgen_malloc), q = Ye, H = Oe(b, $e.__wbindgen_malloc), $ = Ye, Y = Ee(f, $e.__wbindgen_malloc), Z = Ye, K = Oe(d, $e.__wbindgen_malloc), J = Ye, Q = je(m, $e.__wbindgen_malloc), nn = Ye, en = Oe(h, $e.__wbindgen_malloc), tn = Ye, _n = $e.computeNightSignalsTyped(p, y, v, k, A, x, S, R, C, F, P, M, I, z, U, D, N, W, B, G, O, j, E, T, V, L, X, q, H, $, Y, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw Ve(_n[1]);
	return Ve(_n[0]);
}
function x(n, e, t) {
	const _ = je(n, $e.__wbindgen_malloc), r = Ye, i = Ee(e, $e.__wbindgen_malloc), o = Ye, c = $e.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw Ve(c[1]);
	return Ve(c[0]);
}
function S(n) {
	const e = $e.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function R(n) {
	const e = je(n, $e.__wbindgen_malloc), t = Ye;
	$e.csvBufferAppend(e, t);
}
function C(n) {
	$e.csvBufferClear(n);
}
function F(n, e) {
	const t = Ee(n, $e.__wbindgen_malloc), _ = Ye, r = Ee(e, $e.__wbindgen_malloc), i = Ye, o = $e.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw Ve(o[2]);
	var c = Ce(o[0], o[1]).slice();
	return $e.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function P(n, e) {
	let t, _;
	try {
		const r = je(n, $e.__wbindgen_malloc), i = Ye, o = Te(e, $e.__wbindgen_malloc, $e.__wbindgen_realloc), c = Ye, a = $e.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], ze(a[0], a[1]);
	} finally {
		$e.__wbindgen_free(t, _, 1);
	}
}
function M(n) {
	const e = $e.detectGgirHasptVariant(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function I(n, e, t, _) {
	const r = Ee(n, $e.__wbindgen_malloc), i = Ye;
	var o = Ge(e) ? 0 : Te(e, $e.__wbindgen_malloc, $e.__wbindgen_realloc), c = Ye, a = Ge(t) ? 0 : Ee(t, $e.__wbindgen_malloc), l = Ye, s = Ge(_) ? 0 : Ee(_, $e.__wbindgen_malloc), u = Ye;
	return $e.detectHdcza(r, i, o, c, a, l, s, u);
}
function z(n) {
	const e = Ee(n, $e.__wbindgen_malloc), t = Ye, _ = $e.detectNonwear(e, t);
	var r = Ce(_[0], _[1]).slice();
	return $e.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function U(n) {
	const e = Ee(n, $e.__wbindgen_malloc), t = Ye, _ = $e.detectNonwearChoi2011(e, t);
	var r = Ce(_[0], _[1]).slice();
	return $e.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function D(n) {
	const e = Ee(n, $e.__wbindgen_malloc), t = Ye, _ = $e.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function N(n, e) {
	const t = Ee(n, $e.__wbindgen_malloc), _ = Ye, r = $e.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw Ve(r[2]);
	var i = Ce(r[0], r[1]).slice();
	return $e.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function W(n) {
	const e = Ee(n, $e.__wbindgen_malloc), t = Ye, _ = $e.detectNonwearChoi2012(e, t);
	var r = Ce(_[0], _[1]).slice();
	return $e.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function B(n) {
	const e = Ee(n, $e.__wbindgen_malloc), t = Ye, _ = $e.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function G(n) {
	const e = Ee(n, $e.__wbindgen_malloc), t = Ye, _ = $e.detectNonwearChoiBouts(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function O(n) {
	let e, t;
	try {
		const i = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), o = Ye, c = $e.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ve(c[2]);
		return e = _, t = r, ze(_, r);
	} finally {
		$e.__wbindgen_free(e, t, 1);
	}
}
function j(n, e, t, _, r, i, o) {
	const c = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), a = Ye, l = Te(e, $e.__wbindgen_malloc, $e.__wbindgen_realloc), s = Ye, u = Ee(t, $e.__wbindgen_malloc), w = Ye, g = Ee(_, $e.__wbindgen_malloc), b = Ye, f = Ee(r, $e.__wbindgen_malloc), d = Ye, m = $e.detectNonwearUnifiedBatchTyped(c, a, l, s, u, w, g, b, f, d, i, o);
	if (m[2]) throw Ve(m[1]);
	return Ve(m[0]);
}
function E(n, e) {
	const t = Ee(n, $e.__wbindgen_malloc), _ = Ye, r = Ee(e, $e.__wbindgen_malloc), i = Ye, o = $e.epochAgreement(t, _, r, i);
	if (o[2]) throw Ve(o[1]);
	return Ve(o[0]);
}
function T(n, e, t, _, r) {
	const i = Ee(n, $e.__wbindgen_malloc), o = Ye, c = Ee(e, $e.__wbindgen_malloc), a = Ye, l = Ee(t, $e.__wbindgen_malloc), s = Ye, u = Ee(_, $e.__wbindgen_malloc), w = Ye, g = $e.epochRawData(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw Ve(g[1]);
	return Ve(g[0]);
}
function V(n, e, t) {
	const _ = Ee(n, $e.__wbindgen_malloc), r = Ye, i = Ee(e, $e.__wbindgen_malloc), o = Ye, c = $e.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw Ve(c[1]);
	return Ve(c[0]);
}
function L(n, e) {
	let t, _;
	try {
		const o = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), c = Ye, a = Te(e, $e.__wbindgen_malloc, $e.__wbindgen_realloc), l = Ye, s = $e.executeHeroRuntime(o, c, a, l);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Ve(s[2]);
		return t = r, _ = i, ze(r, i);
	} finally {
		$e.__wbindgen_free(t, _, 1);
	}
}
function X(n) {
	const e = $e.exportNapAggregate(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function q(n, e, t) {
	const _ = $e.exportPeriodFigures(!Ge(n), Ge(n) ? 0 : n, !Ge(e), Ge(e) ? 0 : e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function H(n) {
	const e = je(n, $e.__wbindgen_malloc), t = Ye, _ = $e.extractCapsense(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function $(n) {
	const e = $e.fuseNonwearMasks(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function Y(n, e) {
	const t = $e.generateActiwareRestIntervals(n, e);
	if (t[2]) throw Ve(t[1]);
	return Ve(t[0]);
}
function Z() {
	const n = $e.getComputeCapabilitiesV1();
	if (n[2]) throw Ve(n[1]);
	return Ve(n[0]);
}
function K(n) {
	const e = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), t = Ye, _ = $e.ggirConfigValues(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function J(n, e) {
	return $e.ggirSptDurationHours(n, e);
}
function Q(n, e) {
	const t = $e.ggirSummaryDenominator(n, e);
	if (t[2]) throw Ve(t[1]);
	return Ve(t[0]);
}
function nn(n) {
	let e, t;
	try {
		const i = je(n, $e.__wbindgen_malloc), o = Ye, c = $e.identifyGgirRData(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ve(c[2]);
		return e = _, t = r, ze(_, r);
	} finally {
		$e.__wbindgen_free(e, t, 1);
	}
}
function en() {
	$e.installPanicHook();
}
function tn(n) {
	const e = je(n, $e.__wbindgen_malloc), t = Ye;
	return 0 !== $e.isGeneactivFormat(e, t);
}
function _n(n, e, t, _) {
	const r = Ee(n, $e.__wbindgen_malloc), i = Ye, o = Ee(e, $e.__wbindgen_malloc), c = Ye, a = Ee(t, $e.__wbindgen_malloc), l = Ye, s = $e.lstmSpectralFeatures30s(r, i, o, c, a, l, _);
	if (s[2]) throw Ve(s[1]);
	return Ve(s[0]);
}
function rn(n, e, t, _, r) {
	const i = Ee(n, $e.__wbindgen_malloc), o = Ye, c = Ee(e, $e.__wbindgen_malloc), a = Ye, l = Ee(t, $e.__wbindgen_malloc), s = Ye, u = $e.neishabouriCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw Ve(u[1]);
	return Ve(u[0]);
}
function on(n, e, t, _) {
	let r, i;
	try {
		const a = Oe(n, $e.__wbindgen_malloc), l = Ye, s = Te(e, $e.__wbindgen_malloc, $e.__wbindgen_realloc), u = Ye, w = $e.nonwearContributors(a, l, s, u, t, _);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, Ve(w[2]);
		return r = o, i = c, ze(o, c);
	} finally {
		$e.__wbindgen_free(r, i, 1);
	}
}
function cn(n, e) {
	const t = je(n, $e.__wbindgen_malloc), _ = Ye, r = $e.parseActigraphCsv(t, _, e);
	if (r[2]) throw Ve(r[1]);
	return Ve(r[0]);
}
function an(n) {
	const e = $e.parseActigraphCsvBuffered(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function ln(n, e, t, _) {
	const r = je(n, $e.__wbindgen_malloc), i = Ye;
	var o = Ge(e) ? 0 : Te(e, $e.__wbindgen_malloc, $e.__wbindgen_realloc), c = Ye, a = Ge(_) ? 0 : Te(_, $e.__wbindgen_malloc, $e.__wbindgen_realloc), l = Ye;
	const s = $e.parseAw5(r, i, o, c, Ge(t) ? 0 : Ae(t), a, l);
	if (s[2]) throw Ve(s[1]);
	return Ve(s[0]);
}
function sn(n) {
	const e = je(n, $e.__wbindgen_malloc), t = Ye, _ = $e.parseCwa(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function un(n, e) {
	const t = je(n, $e.__wbindgen_malloc), _ = Ye, r = Te(e, $e.__wbindgen_malloc, $e.__wbindgen_realloc), i = Ye, o = $e.parseEpochSeries(t, _, r, i);
	if (o[2]) throw Ve(o[1]);
	return Ve(o[0]);
}
function wn(n) {
	const e = je(n, $e.__wbindgen_malloc), t = Ye, _ = $e.parseGeneactivBin(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function gn(n) {
	const e = je(n, $e.__wbindgen_malloc), t = Ye, _ = $e.parseGeneactivCsv(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function bn() {
	const n = $e.parseGeneactivCsvBuffered();
	if (n[2]) throw Ve(n[1]);
	return Ve(n[0]);
}
function fn(n) {
	const e = je(n, $e.__wbindgen_malloc), t = Ye, _ = $e.parseGt3x(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function dn(n) {
	let e, t;
	try {
		const i = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), o = Ye, c = $e.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ve(c[2]);
		return e = _, t = r, ze(_, r);
	} finally {
		$e.__wbindgen_free(e, t, 1);
	}
}
function mn(n, e, t, _, r, i) {
	const o = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), c = Ye, a = Ee(e, $e.__wbindgen_malloc), l = Ye, s = Ee(t, $e.__wbindgen_malloc), u = Ye, w = je(_, $e.__wbindgen_malloc), g = Ye, b = je(r, $e.__wbindgen_malloc), f = Ye, d = Te(i, $e.__wbindgen_malloc, $e.__wbindgen_realloc), m = Ye, h = $e.placeMarkersBatch(o, c, a, l, s, u, w, g, b, f, d, m);
	if (h[2]) throw Ve(h[1]);
	return Ve(h[0]);
}
function hn(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), y = Ye, v = Ee(e, $e.__wbindgen_malloc), k = Ye, A = Oe(t, $e.__wbindgen_malloc), x = Ye, S = Ee(_, $e.__wbindgen_malloc), R = Ye, C = Oe(r, $e.__wbindgen_malloc), F = Ye, P = je(i, $e.__wbindgen_malloc), M = Ye, I = Oe(o, $e.__wbindgen_malloc), z = Ye, U = je(c, $e.__wbindgen_malloc), D = Ye, N = Oe(a, $e.__wbindgen_malloc), W = Ye, B = Ee(l, $e.__wbindgen_malloc), G = Ye, O = Oe(s, $e.__wbindgen_malloc), j = Ye, E = Ee(u, $e.__wbindgen_malloc), T = Ye, V = Oe(w, $e.__wbindgen_malloc), L = Ye, X = Ee(g, $e.__wbindgen_malloc), q = Ye, H = Oe(b, $e.__wbindgen_malloc), $ = Ye, Y = Ee(f, $e.__wbindgen_malloc), Z = Ye, K = Oe(d, $e.__wbindgen_malloc), J = Ye, Q = je(m, $e.__wbindgen_malloc), nn = Ye, en = Oe(h, $e.__wbindgen_malloc), tn = Ye, _n = $e.placeMarkersTyped(p, y, v, k, A, x, S, R, C, F, P, M, I, z, U, D, N, W, B, G, O, j, E, T, V, L, X, q, H, $, Y, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw Ve(_n[1]);
	return Ve(_n[0]);
}
function pn(n) {
	let e, t;
	try {
		const i = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), o = Ye, c = $e.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ve(c[2]);
		return e = _, t = r, ze(_, r);
	} finally {
		$e.__wbindgen_free(e, t, 1);
	}
}
function yn(n, e, t, _) {
	const r = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), i = Ye, o = Ee(e, $e.__wbindgen_malloc), c = Ye, a = Ee(t, $e.__wbindgen_malloc), l = Ye, s = je(_, $e.__wbindgen_malloc), u = Ye, w = $e.placeNonwearMarkersTyped(r, i, o, c, a, l, s, u);
	if (w[2]) throw Ve(w[1]);
	return Ve(w[0]);
}
function vn(n) {
	const e = $e.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function kn(n) {
	const e = $e.prepareCompactPipelineV1(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function An(n, e, t, _, r, i, o) {
	const c = Ee(n, $e.__wbindgen_malloc), a = Ye, l = Ee(e, $e.__wbindgen_malloc), s = Ye, u = Ee(t, $e.__wbindgen_malloc), w = Ye, g = Ee(_, $e.__wbindgen_malloc), b = Ye;
	var f = Ge(o) ? 0 : Te(o, $e.__wbindgen_malloc, $e.__wbindgen_realloc), d = Ye;
	const m = $e.processGeneactivRaw(c, a, l, s, u, w, g, b, r, i, f, d);
	if (m[2]) throw Ve(m[1]);
	return Ve(m[0]);
}
function xn(n) {
	const e = je(n, $e.__wbindgen_malloc), t = Ye, _ = $e.processGt3xFull(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function Sn(n, e) {
	const t = je(n, $e.__wbindgen_malloc), _ = Ye, r = $e.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw Ve(r[1]);
	return Ve(r[0]);
}
function Rn(n) {
	const e = je(n, $e.__wbindgen_malloc), t = Ye, _ = $e.processGt3xPart1(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function Cn(n, e) {
	const t = je(n, $e.__wbindgen_malloc), _ = Ye, r = $e.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw Ve(r[1]);
	return Ve(r[0]);
}
function Fn(n, e, t, _, r, i) {
	const o = Ee(n, $e.__wbindgen_malloc), c = Ye, a = Ee(e, $e.__wbindgen_malloc), l = Ye, s = Ee(t, $e.__wbindgen_malloc), u = Ye;
	var w = Ge(i) ? 0 : Te(i, $e.__wbindgen_malloc, $e.__wbindgen_realloc), g = Ye;
	const b = $e.processRawXyz(o, c, a, l, s, u, _, r, w, g);
	if (b[2]) throw Ve(b[1]);
	return Ve(b[0]);
}
function Pn(n, e, t, _, r, i) {
	const o = Ee(n, $e.__wbindgen_malloc), c = Ye, a = Ee(e, $e.__wbindgen_malloc), l = Ye, s = Ee(t, $e.__wbindgen_malloc), u = Ye, w = Ee(_, $e.__wbindgen_malloc), g = Ye;
	var b = Ge(i) ? 0 : Te(i, $e.__wbindgen_malloc, $e.__wbindgen_realloc), f = Ye;
	const d = $e.processRawXyzImputed(o, c, a, l, s, u, w, g, r, b, f);
	if (d[2]) throw Ve(d[1]);
	return Ve(d[0]);
}
function Mn(n, e, t, _, r, i, o) {
	const c = Ee(n, $e.__wbindgen_malloc), a = Ye, l = Ee(e, $e.__wbindgen_malloc), s = Ye, u = Ee(t, $e.__wbindgen_malloc), w = Ye, g = Ee(_, $e.__wbindgen_malloc), b = Ye;
	var f = Ge(i) ? 0 : Te(i, $e.__wbindgen_malloc, $e.__wbindgen_realloc), d = Ye;
	const m = $e.processRawXyzImputedWithEpoch(c, a, l, s, u, w, g, b, r, f, d, o);
	if (m[2]) throw Ve(m[1]);
	return Ve(m[0]);
}
function In(n, e, t, _) {
	const r = Ee(n, $e.__wbindgen_malloc), i = Ye, o = Ee(e, $e.__wbindgen_malloc), c = Ye, a = Ee(t, $e.__wbindgen_malloc), l = Ye, s = $e.rasterizePeriods(r, i, o, c, a, l, _);
	if (s[2]) throw Ve(s[1]);
	return Ve(s[0]);
}
function zn(n) {
	const e = je(n, $e.__wbindgen_malloc), t = Ye, _ = $e.readGgirMeta(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function Un() {
	return $e.recommended_chunk_size_mb() >>> 0;
}
function Dn(n, e) {
	const t = Ee(n, $e.__wbindgen_malloc), _ = Ye, r = Te(e, $e.__wbindgen_malloc, $e.__wbindgen_realloc), i = Ye, o = $e.reduceF64V1(t, _, r, i);
	if (o[2]) throw Ve(o[1]);
	return o[0];
}
function Nn(n) {
	const e = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), t = Ye, _ = $e.resolveTimezone(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function Wn(n, e, t, _, r, i, o, c, a, l, s) {
	const u = je(n, $e.__wbindgen_malloc), w = Ye, g = Te(e, $e.__wbindgen_malloc, $e.__wbindgen_realloc), b = Ye;
	var f = Ge(t) ? 0 : je(t, $e.__wbindgen_malloc), d = Ye, m = Ge(_) ? 0 : je(_, $e.__wbindgen_malloc), h = Ye, p = Ge(r) ? 0 : je(r, $e.__wbindgen_malloc), y = Ye, v = Ge(i) ? 0 : je(i, $e.__wbindgen_malloc), k = Ye, A = Ge(o) ? 0 : je(o, $e.__wbindgen_malloc), x = Ye, S = Ge(c) ? 0 : Te(c, $e.__wbindgen_malloc, $e.__wbindgen_realloc), R = Ye, C = Ge(a) ? 0 : Te(a, $e.__wbindgen_malloc, $e.__wbindgen_realloc), F = Ye;
	const P = $e.reviewGgirResults(u, w, g, b, f, d, m, h, p, y, v, k, A, x, S, R, C, F, l, s);
	if (P[2]) throw Ve(P[1]);
	return Ve(P[0]);
}
function Bn(n) {
	const e = $e.reviewNonwearFile(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function Gn(n) {
	const e = $e.reviewNonwearTotals(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function On(n) {
	const e = $e.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function jn(n) {
	const e = $e.runCompactPipelineV1(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function En(n, e) {
	const t = $e.runFullPipeline(n, e);
	if (t[2]) throw Ve(t[1]);
	return Ve(t[0]);
}
function Tn(n) {
	const e = $e.runFullPipelineOutcomeV1(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function Vn(n) {
	const e = $e.runFullPipelineV1(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function Ln(n, e) {
	const t = $e.runGgirFromEpoch(n, e);
	if (t[2]) throw Ve(t[1]);
	return Ve(t[0]);
}
function Xn(n) {
	const e = $e.runGgirPart3(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function qn(n) {
	const e = je(n, $e.__wbindgen_malloc), t = Ye, _ = $e.runMilestone(e, t);
	if (_[2]) throw Ve(_[1]);
	return Ve(_[0]);
}
function Hn(n) {
	const e = $e.scoreAllDays(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function $n(n, e) {
	const t = Ee(n, $e.__wbindgen_malloc), _ = Ye, r = $e.scoreColeKripke(t, _, e);
	var i = Ce(r[0], r[1]).slice();
	return $e.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Yn(n) {
	let e, t;
	try {
		const i = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), o = Ye, c = $e.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ve(c[2]);
		return e = _, t = r, ze(_, r);
	} finally {
		$e.__wbindgen_free(e, t, 1);
	}
}
function Zn(n) {
	const e = $e.scoreConsensusMajority(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function Kn(n, e, t) {
	const _ = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), r = Ye, i = je(e, $e.__wbindgen_malloc), o = Ye, c = Oe(t, $e.__wbindgen_malloc), a = Ye, l = $e.scoreConsensusTyped(_, r, i, o, c, a);
	if (l[2]) throw Ve(l[1]);
	return Ve(l[0]);
}
function Jn(n) {
	let e, t;
	try {
		const i = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), o = Ye, c = $e.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Ve(c[2]);
		return e = _, t = r, ze(_, r);
	} finally {
		$e.__wbindgen_free(e, t, 1);
	}
}
function Qn(n, e, t, _, r, i) {
	const o = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), c = Ye, a = Ee(e, $e.__wbindgen_malloc), l = Ye, s = Ee(t, $e.__wbindgen_malloc), u = Ye, w = Ee(_, $e.__wbindgen_malloc), g = Ye, b = $e.scoreEpochsTyped(o, c, a, l, s, u, w, g, r, i);
	if (b[2]) throw Ve(b[1]);
	return Ve(b[0]);
}
function ne(n) {
	const e = Ee(n, $e.__wbindgen_malloc), t = Ye, _ = $e.scoreGgirHasib(e, t);
	var r = Ce(_[0], _[1]).slice();
	return $e.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function ee(n) {
	const e = $e.scoreGgirHasibVariant(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function te(n, e, t) {
	const _ = Ee(n, $e.__wbindgen_malloc), r = Ye, i = Ee(e, $e.__wbindgen_malloc), o = Ye, c = $e.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw Ve(c[1]);
	return Ve(c[0]);
}
function _e(n, e) {
	const t = Ee(n, $e.__wbindgen_malloc), _ = Ye, r = $e.scoreSadeh(t, _, e);
	var i = Ce(r[0], r[1]).slice();
	return $e.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function re(n) {
	const e = je(n, $e.__wbindgen_malloc), t = Ye, _ = $e.sha256StreamFeed(e, t);
	if (_[1]) throw Ve(_[0]);
}
function ie() {
	let n, e;
	try {
		const r = $e.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, Ve(r[2]);
		return n = t, e = _, ze(t, _);
	} finally {
		$e.__wbindgen_free(n, e, 1);
	}
}
function oe() {
	$e.sha256StreamStart();
}
function ce(n, e, t, _, r) {
	const i = Te(n, $e.__wbindgen_malloc, $e.__wbindgen_realloc), o = Ye, c = Ee(e, $e.__wbindgen_malloc), a = Ye, l = Oe(t, $e.__wbindgen_malloc), s = Ye, u = Ee(_, $e.__wbindgen_malloc), w = Ye, g = Oe(r, $e.__wbindgen_malloc), b = Ye, f = $e.sleepRegularityIndex(i, o, c, a, l, s, u, w, g, b);
	if (f[3]) throw Ve(f[2]);
	return 0 === f[0] ? void 0 : f[1];
}
function ae(n, e) {
	const t = $e.sleepWakeScores(n, e);
	if (t[2]) throw Ve(t[1]);
	return Ve(t[0]);
}
function le(n) {
	const e = je(n, $e.__wbindgen_malloc), t = Ye, _ = $e.streamParseFeed(e, t);
	if (_[2]) throw Ve(_[1]);
	return _[0] >>> 0;
}
function se() {
	const n = $e.streamParseFinish();
	if (n[2]) throw Ve(n[1]);
	return t.__wrap(n[0]);
}
function ue() {
	const n = $e.streamParseFinishChunk();
	if (n[2]) throw Ve(n[1]);
	return e.__wrap(n[0]);
}
function we(n, e) {
	const t = $e.streamParseStart(n, e);
	if (t[1]) throw Ve(t[0]);
}
function ge(n, e) {
	const t = $e.streamParseStartData(n, e);
	if (t[1]) throw Ve(t[0]);
}
function be(n, e, t) {
	const _ = $e.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw Ve(_[0]);
}
function fe(n, e) {
	const t = je(n, $e.__wbindgen_malloc), _ = Ye, r = $e.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw Ve(r[1]);
	return Ve(r[0]);
}
function de(n) {
	const e = $e.summarizeExportGroups(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function me(n) {
	const e = $e.summarizePhysicalActivityTrace(n);
	if (e[2]) throw Ve(e[1]);
	return Ve(e[0]);
}
function he(n, e, t, _, r) {
	const i = Ee(n, $e.__wbindgen_malloc), o = Ye, c = Ee(e, $e.__wbindgen_malloc), a = Ye, l = Ee(t, $e.__wbindgen_malloc), s = Ye, u = $e.zeroCrossingCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw Ve(u[1]);
	return Ve(u[0]);
}
function pe() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(ze(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = Te(String(e), $e.__wbindgen_malloc, $e.__wbindgen_realloc), _ = Ye;
				Pe().setInt32(n + 4, _, !0), Pe().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				Pe().setBigInt64(n + 8, Ge(t) ? BigInt(0) : t, !0), Pe().setInt32(n + 0, !Ge(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return Ge(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = Te(xe(e), $e.__wbindgen_malloc, $e.__wbindgen_realloc), _ = Ye;
				Pe().setInt32(n + 4, _, !0), Pe().setInt32(n + 0, t, !0);
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
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const t = "number" == typeof e ? e : void 0;
				Pe().setFloat64(n + 8, Ge(t) ? 0 : t, !0), Pe().setInt32(n + 0, !Ge(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = Ge(t) ? 0 : Te(t, $e.__wbindgen_malloc, $e.__wbindgen_realloc), r = Ye;
				Pe().setInt32(n + 4, r, !0), Pe().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(ze(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return Be(function(n, e) {
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
					t = n, _ = e, console.error(ze(n, e));
				} finally {
					$e.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return Be(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return Be(function(n, e) {
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
				return new Float64Array(Se(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(Ce(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return Be(function(n) {
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
				return Be(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(Ce(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return Be(function(n, e, t) {
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
				const t = Te(e.stack, $e.__wbindgen_malloc, $e.__wbindgen_realloc), _ = Ye;
				Pe().setInt32(n + 4, _, !0), Pe().setInt32(n + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return Ge(n) ? 0 : Ae(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return Ge(n) ? 0 : Ae(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return Ge(n) ? 0 : Ae(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return Ge(n) ? 0 : Ae(n);
			},
			__wbg_value_ee3a06f4579184fa: function(n) {
				return n.value;
			},
			__wbindgen_cast_0000000000000001: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n, e) {
				return Ce(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return ze(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = $e.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
const ye = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => $e.__wbg_aw5batch_free(n >>> 0, 1)), ve = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => $e.__wbg_streamchunkresult_free(n >>> 0, 1)), ke = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => $e.__wbg_streamparseresult_free(n >>> 0, 1));
function Ae(n) {
	const e = $e.__externref_table_alloc();
	return $e.__wbindgen_externrefs.set(e, n), e;
}
function xe(n) {
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
		e > 0 && (t += xe(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + xe(n[_]);
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
function Se(n, e) {
	return n >>>= 0, Ie().subarray(n / 8, n / 8 + e);
}
function Re(n, e) {
	return n >>>= 0, De().subarray(n / 4, n / 4 + e);
}
function Ce(n, e) {
	return n >>>= 0, We().subarray(n / 1, n / 1 + e);
}
let Fe = null;
function Pe() {
	return (null === Fe || !0 === Fe.buffer.detached || void 0 === Fe.buffer.detached && Fe.buffer !== $e.memory.buffer) && (Fe = new DataView($e.memory.buffer)), Fe;
}
let Me = null;
function Ie() {
	return null !== Me && 0 !== Me.byteLength || (Me = new Float64Array($e.memory.buffer)), Me;
}
function ze(n, e) {
	return function(n, e) {
		return qe += e, qe >= Xe && (Le = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Le.decode(), qe = e), Le.decode(We().subarray(n, n + e));
	}(n >>>= 0, e);
}
let Ue = null;
function De() {
	return null !== Ue && 0 !== Ue.byteLength || (Ue = new Uint32Array($e.memory.buffer)), Ue;
}
let Ne = null;
function We() {
	return null !== Ne && 0 !== Ne.byteLength || (Ne = new Uint8Array($e.memory.buffer)), Ne;
}
function Be(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = Ae(t);
		$e.__wbindgen_exn_store(n);
	}
}
function Ge(n) {
	return null == n;
}
function Oe(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return De().set(n, t / 4), Ye = n.length, t;
}
function je(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return We().set(n, t / 1), Ye = n.length, t;
}
function Ee(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return Ie().set(n, t / 8), Ye = n.length, t;
}
function Te(n, e, t) {
	if (void 0 === t) {
		const t = He.encode(n), _ = e(t.length, 1) >>> 0;
		return We().subarray(_, _ + t.length).set(t), Ye = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = We();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = We().subarray(r + o, r + _);
		o += He.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return Ye = o, r;
}
function Ve(n) {
	const e = $e.__wbindgen_externrefs.get(n);
	return $e.__externref_table_dealloc(n), e;
}
let Le = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
Le.decode();
const Xe = 2146435072;
let qe = 0;
const He = new TextEncoder();
"encodeInto" in He || (He.encodeInto = function(n, e) {
	const t = He.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let $e, Ye = 0;
function Ze(n, e) {
	return $e = n.exports, Fe = null, Me = null, Ue = null, Ne = null, $e.__wbindgen_start(), $e;
}
function Ke(n) {
	if (void 0 !== $e) return $e;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = pe();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Ze(new WebAssembly.Instance(n, e));
}
async function Je(n) {
	if (void 0 !== $e) return $e;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-dtwfcict.wasm", "" + import.meta.url));
	const e = pe();
	("string" == typeof n || "function" == typeof Request && n instanceof Request || "function" == typeof URL && n instanceof URL) && (n = fetch(n));
	const { instance: t, module: _ } = await async function(n, e) {
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
	}(await n, e);
	return Ze(t);
}
export { n as Aw5Batch, e as StreamChunkResult, t as StreamParseResult, _ as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actoursVersion, o as aggregateEpochSeries, c as analyzePhysicalActivityDay, a as classifyActimetricPreschoolWristRf, l as classifyActimetricPreschoolWristRfLagLead, s as classifyActimetricPreschoolWristRfLagLeadCalibrated, u as compareNonwearDetectorMasks, w as computeAnglez5s, g as computeCircadian, b as computeCircadianTyped, f as computeEnmo5s, d as computeMimsUnit, m as computeMimsUnitDataframe, h as computeMimsUnitTimingBreakdown, p as computeMimsUnitValues, y as computeNightDifficulty, v as computeNightDifficultyTyped, k as computeNightSignals, A as computeNightSignalsTyped, x as computeSleepMetrics, S as configureComputeMemoryBudgetV1, R as csvBufferAppend, C as csvBufferClear, Je as default, F as detectDetachFromAccelerationG, P as detectDeviceFormat, M as detectGgirHasptVariant, I as detectHdcza, z as detectNonwear, U as detectNonwearChoi2011, D as detectNonwearChoi2011Bouts, N as detectNonwearChoi2011Epoch, W as detectNonwearChoi2012, B as detectNonwearChoi2012Bouts, G as detectNonwearChoiBouts, O as detectNonwearUnified, j as detectNonwearUnifiedBatchTyped, E as epochAgreement, T as epochRawData, V as epochWithBandpass, L as executeHeroRuntime, X as exportNapAggregate, q as exportPeriodFigures, H as extractCapsense, $ as fuseNonwearMasks, Y as generateActiwareRestIntervals, Z as getComputeCapabilitiesV1, K as ggirConfigValues, J as ggirSptDurationHours, Q as ggirSummaryDenominator, nn as identifyGgirRData, Ke as initSync, en as installPanicHook, tn as isGeneactivFormat, _n as lstmSpectralFeatures30s, rn as neishabouriCounts, on as nonwearContributors, cn as parseActigraphCsv, an as parseActigraphCsvBuffered, ln as parseAw5, sn as parseCwa, un as parseEpochSeries, wn as parseGeneactivBin, gn as parseGeneactivCsv, bn as parseGeneactivCsvBuffered, fn as parseGt3x, dn as placeMarkers, mn as placeMarkersBatch, hn as placeMarkersTyped, pn as placeNonwearMarkers, yn as placeNonwearMarkersTyped, vn as prepareCompactPipelineOutcomeV1, kn as prepareCompactPipelineV1, An as processGeneactivRaw, xn as processGt3xFull, Sn as processGt3xFullWithEpoch, Rn as processGt3xPart1, Cn as processGt3xPart1WithEpoch, Fn as processRawXyz, Pn as processRawXyzImputed, Mn as processRawXyzImputedWithEpoch, In as rasterizePeriods, zn as readGgirMeta, Un as recommended_chunk_size_mb, Dn as reduceF64V1, Nn as resolveTimezone, Wn as reviewGgirResults, Bn as reviewNonwearFile, Gn as reviewNonwearTotals, On as runCompactPipelineOutcomeV1, jn as runCompactPipelineV1, En as runFullPipeline, Tn as runFullPipelineOutcomeV1, Vn as runFullPipelineV1, Ln as runGgirFromEpoch, Xn as runGgirPart3, qn as runMilestone, Hn as scoreAllDays, $n as scoreColeKripke, Yn as scoreConsensus, Zn as scoreConsensusMajority, Kn as scoreConsensusTyped, Jn as scoreEpochs, Qn as scoreEpochsTyped, ne as scoreGgirHasib, ee as scoreGgirHasibVariant, te as scoreGgirSib, _e as scoreSadeh, re as sha256StreamFeed, ie as sha256StreamFinish, oe as sha256StreamStart, ce as sleepRegularityIndex, ae as sleepWakeScores, le as streamParseFeed, se as streamParseFinish, ue as streamParseFinishChunk, we as streamParseStart, ge as streamParseStartData, be as streamParseStartWithEpoch, fe as summarizeActimetricPreschoolWristRfClasses, de as summarizeExportGroups, me as summarizePhysicalActivityTrace, he as zeroCrossingCounts };
