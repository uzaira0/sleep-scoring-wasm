var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ke.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Ze.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = Ze.aw5batch_new(n);
		if (e[2]) throw He(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, ke.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, t) {
		const _ = Le(e, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), r = Ke;
		var i = je(t) ? 0 : Le(t, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), o = Ke;
		const c = Ze.aw5batch_recording(this.__wbg_ptr, n, _, r, i, o);
		if (c[2]) throw He(c[1]);
		return He(c[0]);
	}
	subjects(n) {
		const e = Ze.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw He(e[1]);
		return He(e[0]);
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, Ae.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Ae.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Ze.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Ze.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Ze.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Ze.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Ze.streamchunkresult_axisX(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ze.streamchunkresult_axisY(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ze.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Ze.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ze.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = De(n[0], n[1]).slice(), Ze.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Ze.streamchunkresult_counts(this.__wbg_ptr);
		var e = Fe(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Ze.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = Fe(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Ze.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Ze.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = Ze.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = Pe(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = Ze.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = Pe(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return Ze.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Ze.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Ze.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Ze.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Ze.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = De(n[0], n[1]).slice(), Ze.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Ze.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Ze.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Ze.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Ze.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ze.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Ze.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ze.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = Ze.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = Fe(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Ze.streamchunkresult_temperature(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ze.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Ze.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ze.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Ze.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Ze.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Ze.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var t = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, xe.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, xe.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Ze.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Ze.streamparseresult_axisX(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ze.streamparseresult_axisY(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ze.streamparseresult_axisZ(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Ze.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ze.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = De(n[0], n[1]).slice(), Ze.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return Ze.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== Ze.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ze.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ze.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Ze.streamparseresult_temperature(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ze.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ze.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ze.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function _(n) {
	const e = Ze.actiwareIntervalStatistics(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function r(n, e, t) {
	const _ = Ze.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function i(n, e) {
	const t = Ze.actiwareWakeThreshold(n, e);
	if (t[3]) throw He(t[2]);
	return 0 === t[0] ? void 0 : t[1];
}
function o() {
	let n, e;
	try {
		const t = Ze.actoursVersion();
		return n = t[0], e = t[1], De(t[0], t[1]);
	} finally {
		Ze.__wbindgen_free(n, e, 1);
	}
}
function c(n) {
	const e = Ze.aggregateEpochSeries(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function a(n) {
	let e, t;
	try {
		const i = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), o = Ke, c = Ze.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, He(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ze.__wbindgen_free(e, t, 1);
	}
}
function l(n, e, t, _) {
	const r = Ve(n, Ze.__wbindgen_malloc), i = Ke, o = Ve(e, Ze.__wbindgen_malloc), c = Ke, a = Ve(t, Ze.__wbindgen_malloc), l = Ke, s = Ze.classifyActimetricPreschoolWristRf(r, i, o, c, a, l, _);
	if (s[3]) throw He(s[2]);
	var u = Pe(s[0], s[1]).slice();
	return Ze.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function s(n, e, t, _) {
	const r = Ve(n, Ze.__wbindgen_malloc), i = Ke, o = Ve(e, Ze.__wbindgen_malloc), c = Ke, a = Ve(t, Ze.__wbindgen_malloc), l = Ke, s = Ze.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, l, _);
	if (s[3]) throw He(s[2]);
	var u = Pe(s[0], s[1]).slice();
	return Ze.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function u(n, e, t, _) {
	const r = Ve(n, Ze.__wbindgen_malloc), i = Ke, o = Ve(e, Ze.__wbindgen_malloc), c = Ke, a = Ve(t, Ze.__wbindgen_malloc), l = Ke, s = Ze.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, l, _);
	if (s[3]) throw He(s[2]);
	var u = Pe(s[0], s[1]).slice();
	return Ze.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function w(n, e) {
	const t = Ze.compareNonwearDetectorMasks(n, e);
	if (t[2]) throw He(t[1]);
	return He(t[0]);
}
function g(n, e, t, _) {
	const r = Ve(n, Ze.__wbindgen_malloc), i = Ke, o = Ve(e, Ze.__wbindgen_malloc), c = Ke, a = Ve(t, Ze.__wbindgen_malloc), l = Ke, s = Ze.computeAnglez5s(r, i, o, c, a, l, _);
	var u = Ce(s[0], s[1]).slice();
	return Ze.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function b(n) {
	let e, t;
	try {
		const i = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), o = Ke, c = Ze.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, He(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ze.__wbindgen_free(e, t, 1);
	}
}
function f(n, e, t, _, r, i, o) {
	const c = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), a = Ke, l = Ve(e, Ze.__wbindgen_malloc), s = Ke, u = Ee(t, Ze.__wbindgen_malloc), w = Ke, g = Ve(_, Ze.__wbindgen_malloc), b = Ke, f = Ee(r, Ze.__wbindgen_malloc), d = Ke, m = Te(i, Ze.__wbindgen_malloc), h = Ke, p = Ee(o, Ze.__wbindgen_malloc), y = Ke, v = Ze.computeCircadianTyped(c, a, l, s, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw He(v[1]);
	return He(v[0]);
}
function d(n, e, t, _) {
	const r = Ve(n, Ze.__wbindgen_malloc), i = Ke, o = Ve(e, Ze.__wbindgen_malloc), c = Ke, a = Ve(t, Ze.__wbindgen_malloc), l = Ke, s = Ze.computeEnmo5s(r, i, o, c, a, l, _);
	var u = Ce(s[0], s[1]).slice();
	return Ze.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function m(n, e, t, _, r) {
	const i = Ve(n, Ze.__wbindgen_malloc), o = Ke, c = Ve(e, Ze.__wbindgen_malloc), a = Ke, l = Ve(t, Ze.__wbindgen_malloc), s = Ke, u = Ze.computeMimsUnit(i, o, c, a, l, s, _, r);
	if (u[2]) throw He(u[1]);
	return He(u[0]);
}
function h(n, e, t, _, r) {
	const i = Ve(n, Ze.__wbindgen_malloc), o = Ke, c = Ve(e, Ze.__wbindgen_malloc), a = Ke, l = Ve(t, Ze.__wbindgen_malloc), s = Ke, u = Ve(_, Ze.__wbindgen_malloc), w = Ke, g = Ze.computeMimsUnitDataframe(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw He(g[1]);
	return He(g[0]);
}
function p(n, e, t, _, r) {
	const i = Ve(n, Ze.__wbindgen_malloc), o = Ke, c = Ve(e, Ze.__wbindgen_malloc), a = Ke, l = Ve(t, Ze.__wbindgen_malloc), s = Ke, u = Ze.computeMimsUnitTimingBreakdown(i, o, c, a, l, s, _, r);
	if (u[2]) throw He(u[1]);
	return He(u[0]);
}
function y(n, e, t, _, r) {
	const i = Ve(n, Ze.__wbindgen_malloc), o = Ke, c = Ve(e, Ze.__wbindgen_malloc), a = Ke, l = Ve(t, Ze.__wbindgen_malloc), s = Ke, u = Ze.computeMimsUnitValues(i, o, c, a, l, s, _, r);
	if (u[3]) throw He(u[2]);
	var w = Ce(u[0], u[1]).slice();
	return Ze.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function v(n) {
	let e, t;
	try {
		const i = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), o = Ke, c = Ze.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, He(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ze.__wbindgen_free(e, t, 1);
	}
}
function k(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), y = Ke, v = Ve(e, Ze.__wbindgen_malloc), k = Ke, A = Ee(t, Ze.__wbindgen_malloc), x = Ke, S = Ve(_, Ze.__wbindgen_malloc), R = Ke, C = Ee(r, Ze.__wbindgen_malloc), F = Ke, P = Te(i, Ze.__wbindgen_malloc), M = Ke, I = Ee(o, Ze.__wbindgen_malloc), z = Ke, U = Te(c, Ze.__wbindgen_malloc), D = Ke, N = Ee(a, Ze.__wbindgen_malloc), W = Ke, B = Ve(l, Ze.__wbindgen_malloc), O = Ke, G = Ee(s, Ze.__wbindgen_malloc), j = Ke, E = Ve(u, Ze.__wbindgen_malloc), T = Ke, V = Ee(w, Ze.__wbindgen_malloc), L = Ke, H = Ve(g, Ze.__wbindgen_malloc), X = Ke, q = Ee(b, Ze.__wbindgen_malloc), $ = Ke, Y = Ve(f, Ze.__wbindgen_malloc), Z = Ke, K = Ee(d, Ze.__wbindgen_malloc), J = Ke, Q = Te(m, Ze.__wbindgen_malloc), nn = Ke, en = Ee(h, Ze.__wbindgen_malloc), tn = Ke, _n = Ze.computeNightDifficultyTyped(p, y, v, k, A, x, S, R, C, F, P, M, I, z, U, D, N, W, B, O, G, j, E, T, V, L, H, X, q, $, Y, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw He(_n[1]);
	return He(_n[0]);
}
function A(n) {
	let e, t;
	try {
		const i = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), o = Ke, c = Ze.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, He(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ze.__wbindgen_free(e, t, 1);
	}
}
function x(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), y = Ke, v = Ve(e, Ze.__wbindgen_malloc), k = Ke, A = Ee(t, Ze.__wbindgen_malloc), x = Ke, S = Ve(_, Ze.__wbindgen_malloc), R = Ke, C = Ee(r, Ze.__wbindgen_malloc), F = Ke, P = Te(i, Ze.__wbindgen_malloc), M = Ke, I = Ee(o, Ze.__wbindgen_malloc), z = Ke, U = Te(c, Ze.__wbindgen_malloc), D = Ke, N = Ee(a, Ze.__wbindgen_malloc), W = Ke, B = Ve(l, Ze.__wbindgen_malloc), O = Ke, G = Ee(s, Ze.__wbindgen_malloc), j = Ke, E = Ve(u, Ze.__wbindgen_malloc), T = Ke, V = Ee(w, Ze.__wbindgen_malloc), L = Ke, H = Ve(g, Ze.__wbindgen_malloc), X = Ke, q = Ee(b, Ze.__wbindgen_malloc), $ = Ke, Y = Ve(f, Ze.__wbindgen_malloc), Z = Ke, K = Ee(d, Ze.__wbindgen_malloc), J = Ke, Q = Te(m, Ze.__wbindgen_malloc), nn = Ke, en = Ee(h, Ze.__wbindgen_malloc), tn = Ke, _n = Ze.computeNightSignalsTyped(p, y, v, k, A, x, S, R, C, F, P, M, I, z, U, D, N, W, B, O, G, j, E, T, V, L, H, X, q, $, Y, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw He(_n[1]);
	return He(_n[0]);
}
function S(n, e, t) {
	const _ = Te(n, Ze.__wbindgen_malloc), r = Ke, i = Ve(e, Ze.__wbindgen_malloc), o = Ke, c = Ze.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw He(c[1]);
	return He(c[0]);
}
function R(n) {
	const e = Ze.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function C(n) {
	const e = Te(n, Ze.__wbindgen_malloc), t = Ke;
	Ze.csvBufferAppend(e, t);
}
function F(n) {
	Ze.csvBufferClear(n);
}
function P(n, e) {
	const t = Ve(n, Ze.__wbindgen_malloc), _ = Ke, r = Ve(e, Ze.__wbindgen_malloc), i = Ke, o = Ze.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw He(o[2]);
	var c = Pe(o[0], o[1]).slice();
	return Ze.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function M(n, e) {
	let t, _;
	try {
		const r = Te(n, Ze.__wbindgen_malloc), i = Ke, o = Le(e, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), c = Ke, a = Ze.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], De(a[0], a[1]);
	} finally {
		Ze.__wbindgen_free(t, _, 1);
	}
}
function I(n) {
	const e = Ze.detectGgirHasptVariant(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function z(n, e, t, _) {
	const r = Ve(n, Ze.__wbindgen_malloc), i = Ke;
	var o = je(e) ? 0 : Le(e, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), c = Ke, a = je(t) ? 0 : Ve(t, Ze.__wbindgen_malloc), l = Ke, s = je(_) ? 0 : Ve(_, Ze.__wbindgen_malloc), u = Ke;
	return Ze.detectHdcza(r, i, o, c, a, l, s, u);
}
function U(n) {
	const e = Ve(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.detectNonwear(e, t);
	var r = Pe(_[0], _[1]).slice();
	return Ze.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function D(n) {
	const e = Ve(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.detectNonwearChoi2011(e, t);
	var r = Pe(_[0], _[1]).slice();
	return Ze.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function N(n) {
	const e = Ve(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function W(n, e) {
	const t = Ve(n, Ze.__wbindgen_malloc), _ = Ke, r = Ze.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw He(r[2]);
	var i = Pe(r[0], r[1]).slice();
	return Ze.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function B(n) {
	const e = Ve(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.detectNonwearChoi2012(e, t);
	var r = Pe(_[0], _[1]).slice();
	return Ze.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function O(n) {
	const e = Ve(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function G(n) {
	const e = Ve(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.detectNonwearChoiBouts(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function j(n) {
	let e, t;
	try {
		const i = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), o = Ke, c = Ze.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, He(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ze.__wbindgen_free(e, t, 1);
	}
}
function E(n, e, t, _, r, i, o) {
	const c = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), a = Ke, l = Le(e, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), s = Ke, u = Ve(t, Ze.__wbindgen_malloc), w = Ke, g = Ve(_, Ze.__wbindgen_malloc), b = Ke, f = Ve(r, Ze.__wbindgen_malloc), d = Ke, m = Ze.detectNonwearUnifiedBatchTyped(c, a, l, s, u, w, g, b, f, d, i, o);
	if (m[2]) throw He(m[1]);
	return He(m[0]);
}
function T(n, e) {
	const t = Ve(n, Ze.__wbindgen_malloc), _ = Ke, r = Ve(e, Ze.__wbindgen_malloc), i = Ke, o = Ze.epochAgreement(t, _, r, i);
	if (o[2]) throw He(o[1]);
	return He(o[0]);
}
function V(n, e, t, _, r) {
	const i = Ve(n, Ze.__wbindgen_malloc), o = Ke, c = Ve(e, Ze.__wbindgen_malloc), a = Ke, l = Ve(t, Ze.__wbindgen_malloc), s = Ke, u = Ve(_, Ze.__wbindgen_malloc), w = Ke, g = Ze.epochRawData(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw He(g[1]);
	return He(g[0]);
}
function L(n, e, t) {
	const _ = Ve(n, Ze.__wbindgen_malloc), r = Ke, i = Ve(e, Ze.__wbindgen_malloc), o = Ke, c = Ze.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw He(c[1]);
	return He(c[0]);
}
function H(n, e) {
	let t, _;
	try {
		const o = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), c = Ke, a = Le(e, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), l = Ke, s = Ze.executeHeroRuntime(o, c, a, l);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, He(s[2]);
		return t = r, _ = i, De(r, i);
	} finally {
		Ze.__wbindgen_free(t, _, 1);
	}
}
function X(n) {
	const e = Ze.exportNapAggregate(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function q(n, e, t) {
	const _ = Ze.exportPeriodFigures(!je(n), je(n) ? 0 : n, !je(e), je(e) ? 0 : e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function $(n) {
	const e = Te(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.extractCapsense(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function Y(n) {
	const e = Ze.fuseNonwearMasks(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function Z(n, e) {
	const t = Ze.generateActiwareRestIntervals(n, e);
	if (t[2]) throw He(t[1]);
	return He(t[0]);
}
function K() {
	const n = Ze.getComputeCapabilitiesV1();
	if (n[2]) throw He(n[1]);
	return He(n[0]);
}
function J(n) {
	const e = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), t = Ke, _ = Ze.ggirConfigValues(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function Q(n, e) {
	return Ze.ggirSptDurationHours(n, e);
}
function nn(n, e) {
	const t = Ze.ggirSummaryDenominator(n, e);
	if (t[2]) throw He(t[1]);
	return He(t[0]);
}
function en(n) {
	let e, t;
	try {
		const i = Te(n, Ze.__wbindgen_malloc), o = Ke, c = Ze.identifyGgirRData(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, He(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ze.__wbindgen_free(e, t, 1);
	}
}
function tn() {
	Ze.installPanicHook();
}
function _n(n) {
	const e = Te(n, Ze.__wbindgen_malloc), t = Ke;
	return 0 !== Ze.isGeneactivFormat(e, t);
}
function rn(n, e, t, _) {
	const r = Ve(n, Ze.__wbindgen_malloc), i = Ke, o = Ve(e, Ze.__wbindgen_malloc), c = Ke, a = Ve(t, Ze.__wbindgen_malloc), l = Ke, s = Ze.lstmSpectralFeatures30s(r, i, o, c, a, l, _);
	if (s[2]) throw He(s[1]);
	return He(s[0]);
}
function on(n, e, t, _, r) {
	const i = Ve(n, Ze.__wbindgen_malloc), o = Ke, c = Ve(e, Ze.__wbindgen_malloc), a = Ke, l = Ve(t, Ze.__wbindgen_malloc), s = Ke, u = Ze.neishabouriCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw He(u[1]);
	return He(u[0]);
}
function cn(n, e, t, _) {
	let r, i;
	try {
		const a = Ee(n, Ze.__wbindgen_malloc), l = Ke, s = Le(e, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), u = Ke, w = Ze.nonwearContributors(a, l, s, u, t, _);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, He(w[2]);
		return r = o, i = c, De(o, c);
	} finally {
		Ze.__wbindgen_free(r, i, 1);
	}
}
function an(n, e) {
	const t = Te(n, Ze.__wbindgen_malloc), _ = Ke, r = Ze.parseActigraphCsv(t, _, e);
	if (r[2]) throw He(r[1]);
	return He(r[0]);
}
function ln(n) {
	const e = Ze.parseActigraphCsvBuffered(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function sn(n, e, t, _) {
	const r = Te(n, Ze.__wbindgen_malloc), i = Ke;
	var o = je(e) ? 0 : Le(e, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), c = Ke, a = je(_) ? 0 : Le(_, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), l = Ke;
	const s = Ze.parseAw5(r, i, o, c, je(t) ? 0 : Se(t), a, l);
	if (s[2]) throw He(s[1]);
	return He(s[0]);
}
function un(n) {
	const e = Te(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.parseCwa(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function wn(n, e) {
	const t = Te(n, Ze.__wbindgen_malloc), _ = Ke, r = Le(e, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), i = Ke, o = Ze.parseEpochSeries(t, _, r, i);
	if (o[2]) throw He(o[1]);
	return He(o[0]);
}
function gn(n) {
	const e = Te(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.parseGeneactivBin(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function bn(n) {
	const e = Te(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.parseGeneactivCsv(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function fn() {
	const n = Ze.parseGeneactivCsvBuffered();
	if (n[2]) throw He(n[1]);
	return He(n[0]);
}
function dn(n) {
	const e = Te(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.parseGt3x(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function mn(n) {
	let e, t;
	try {
		const i = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), o = Ke, c = Ze.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, He(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ze.__wbindgen_free(e, t, 1);
	}
}
function hn(n, e, t, _, r, i) {
	const o = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), c = Ke, a = Ve(e, Ze.__wbindgen_malloc), l = Ke, s = Ve(t, Ze.__wbindgen_malloc), u = Ke, w = Te(_, Ze.__wbindgen_malloc), g = Ke, b = Te(r, Ze.__wbindgen_malloc), f = Ke, d = Le(i, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), m = Ke, h = Ze.placeMarkersBatch(o, c, a, l, s, u, w, g, b, f, d, m);
	if (h[2]) throw He(h[1]);
	return He(h[0]);
}
function pn(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), y = Ke, v = Ve(e, Ze.__wbindgen_malloc), k = Ke, A = Ee(t, Ze.__wbindgen_malloc), x = Ke, S = Ve(_, Ze.__wbindgen_malloc), R = Ke, C = Ee(r, Ze.__wbindgen_malloc), F = Ke, P = Te(i, Ze.__wbindgen_malloc), M = Ke, I = Ee(o, Ze.__wbindgen_malloc), z = Ke, U = Te(c, Ze.__wbindgen_malloc), D = Ke, N = Ee(a, Ze.__wbindgen_malloc), W = Ke, B = Ve(l, Ze.__wbindgen_malloc), O = Ke, G = Ee(s, Ze.__wbindgen_malloc), j = Ke, E = Ve(u, Ze.__wbindgen_malloc), T = Ke, V = Ee(w, Ze.__wbindgen_malloc), L = Ke, H = Ve(g, Ze.__wbindgen_malloc), X = Ke, q = Ee(b, Ze.__wbindgen_malloc), $ = Ke, Y = Ve(f, Ze.__wbindgen_malloc), Z = Ke, K = Ee(d, Ze.__wbindgen_malloc), J = Ke, Q = Te(m, Ze.__wbindgen_malloc), nn = Ke, en = Ee(h, Ze.__wbindgen_malloc), tn = Ke, _n = Ze.placeMarkersTyped(p, y, v, k, A, x, S, R, C, F, P, M, I, z, U, D, N, W, B, O, G, j, E, T, V, L, H, X, q, $, Y, Z, K, J, Q, nn, en, tn);
	if (_n[2]) throw He(_n[1]);
	return He(_n[0]);
}
function yn(n) {
	let e, t;
	try {
		const i = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), o = Ke, c = Ze.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, He(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ze.__wbindgen_free(e, t, 1);
	}
}
function vn(n, e, t, _) {
	const r = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), i = Ke, o = Ve(e, Ze.__wbindgen_malloc), c = Ke, a = Ve(t, Ze.__wbindgen_malloc), l = Ke, s = Te(_, Ze.__wbindgen_malloc), u = Ke, w = Ze.placeNonwearMarkersTyped(r, i, o, c, a, l, s, u);
	if (w[2]) throw He(w[1]);
	return He(w[0]);
}
function kn(n) {
	const e = Ze.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function An(n) {
	const e = Ze.prepareCompactPipelineV1(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function xn(n, e, t, _, r, i, o) {
	const c = Ve(n, Ze.__wbindgen_malloc), a = Ke, l = Ve(e, Ze.__wbindgen_malloc), s = Ke, u = Ve(t, Ze.__wbindgen_malloc), w = Ke, g = Ve(_, Ze.__wbindgen_malloc), b = Ke;
	var f = je(o) ? 0 : Le(o, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), d = Ke;
	const m = Ze.processGeneactivRaw(c, a, l, s, u, w, g, b, r, i, f, d);
	if (m[2]) throw He(m[1]);
	return He(m[0]);
}
function Sn(n) {
	const e = Te(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.processGt3xFull(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function Rn(n, e) {
	const t = Te(n, Ze.__wbindgen_malloc), _ = Ke, r = Ze.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw He(r[1]);
	return He(r[0]);
}
function Cn(n) {
	const e = Te(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.processGt3xPart1(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function Fn(n, e) {
	const t = Te(n, Ze.__wbindgen_malloc), _ = Ke, r = Ze.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw He(r[1]);
	return He(r[0]);
}
function Pn(n, e, t, _, r, i) {
	const o = Ve(n, Ze.__wbindgen_malloc), c = Ke, a = Ve(e, Ze.__wbindgen_malloc), l = Ke, s = Ve(t, Ze.__wbindgen_malloc), u = Ke;
	var w = je(i) ? 0 : Le(i, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), g = Ke;
	const b = Ze.processRawXyz(o, c, a, l, s, u, _, r, w, g);
	if (b[2]) throw He(b[1]);
	return He(b[0]);
}
function Mn(n, e, t, _, r, i) {
	const o = Ve(n, Ze.__wbindgen_malloc), c = Ke, a = Ve(e, Ze.__wbindgen_malloc), l = Ke, s = Ve(t, Ze.__wbindgen_malloc), u = Ke, w = Ve(_, Ze.__wbindgen_malloc), g = Ke;
	var b = je(i) ? 0 : Le(i, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), f = Ke;
	const d = Ze.processRawXyzImputed(o, c, a, l, s, u, w, g, r, b, f);
	if (d[2]) throw He(d[1]);
	return He(d[0]);
}
function In(n, e, t, _, r, i, o) {
	const c = Ve(n, Ze.__wbindgen_malloc), a = Ke, l = Ve(e, Ze.__wbindgen_malloc), s = Ke, u = Ve(t, Ze.__wbindgen_malloc), w = Ke, g = Ve(_, Ze.__wbindgen_malloc), b = Ke;
	var f = je(i) ? 0 : Le(i, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), d = Ke;
	const m = Ze.processRawXyzImputedWithEpoch(c, a, l, s, u, w, g, b, r, f, d, o);
	if (m[2]) throw He(m[1]);
	return He(m[0]);
}
function zn(n, e, t, _) {
	const r = Ve(n, Ze.__wbindgen_malloc), i = Ke, o = Ve(e, Ze.__wbindgen_malloc), c = Ke, a = Ve(t, Ze.__wbindgen_malloc), l = Ke, s = Ze.rasterizePeriods(r, i, o, c, a, l, _);
	if (s[2]) throw He(s[1]);
	return He(s[0]);
}
function Un(n) {
	const e = Te(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.readGgirMeta(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function Dn() {
	return Ze.recommended_chunk_size_mb() >>> 0;
}
function Nn(n, e) {
	const t = Ve(n, Ze.__wbindgen_malloc), _ = Ke, r = Le(e, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), i = Ke, o = Ze.reduceF64V1(t, _, r, i);
	if (o[2]) throw He(o[1]);
	return o[0];
}
function Wn(n) {
	const e = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), t = Ke, _ = Ze.resolveTimezone(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function Bn(n, e, t, _, r, i, o, c, a, l, s) {
	const u = Te(n, Ze.__wbindgen_malloc), w = Ke, g = Le(e, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), b = Ke;
	var f = je(t) ? 0 : Te(t, Ze.__wbindgen_malloc), d = Ke, m = je(_) ? 0 : Te(_, Ze.__wbindgen_malloc), h = Ke, p = je(r) ? 0 : Te(r, Ze.__wbindgen_malloc), y = Ke, v = je(i) ? 0 : Te(i, Ze.__wbindgen_malloc), k = Ke, A = je(o) ? 0 : Te(o, Ze.__wbindgen_malloc), x = Ke, S = je(c) ? 0 : Le(c, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), R = Ke, C = je(a) ? 0 : Le(a, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), F = Ke;
	const P = Ze.reviewGgirResults(u, w, g, b, f, d, m, h, p, y, v, k, A, x, S, R, C, F, l, s);
	if (P[2]) throw He(P[1]);
	return He(P[0]);
}
function On(n) {
	const e = Ze.reviewNonwearFile(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function Gn(n) {
	const e = Ze.reviewNonwearTotals(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function jn(n) {
	const e = Ze.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function En(n) {
	const e = Ze.runCompactPipelineV1(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function Tn(n, e) {
	const t = Ze.runFullPipeline(n, e);
	if (t[2]) throw He(t[1]);
	return He(t[0]);
}
function Vn(n) {
	const e = Ze.runFullPipelineOutcomeV1(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function Ln(n) {
	const e = Ze.runFullPipelineV1(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function Hn(n, e) {
	const t = Ze.runGgirFromEpoch(n, e);
	if (t[2]) throw He(t[1]);
	return He(t[0]);
}
function Xn(n) {
	const e = Ze.runGgirPart3(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function qn(n) {
	const e = Te(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.runMilestone(e, t);
	if (_[2]) throw He(_[1]);
	return He(_[0]);
}
function $n(n) {
	const e = Ze.scoreAllDays(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function Yn(n, e) {
	const t = Ve(n, Ze.__wbindgen_malloc), _ = Ke, r = Ze.scoreColeKripke(t, _, e);
	var i = Pe(r[0], r[1]).slice();
	return Ze.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Zn(n) {
	let e, t;
	try {
		const i = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), o = Ke, c = Ze.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, He(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ze.__wbindgen_free(e, t, 1);
	}
}
function Kn(n) {
	const e = Ze.scoreConsensusMajority(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function Jn(n, e, t) {
	const _ = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), r = Ke, i = Te(e, Ze.__wbindgen_malloc), o = Ke, c = Ee(t, Ze.__wbindgen_malloc), a = Ke, l = Ze.scoreConsensusTyped(_, r, i, o, c, a);
	if (l[2]) throw He(l[1]);
	return He(l[0]);
}
function Qn(n) {
	let e, t;
	try {
		const i = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), o = Ke, c = Ze.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, He(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ze.__wbindgen_free(e, t, 1);
	}
}
function ne(n, e, t, _, r, i) {
	const o = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), c = Ke, a = Ve(e, Ze.__wbindgen_malloc), l = Ke, s = Ve(t, Ze.__wbindgen_malloc), u = Ke, w = Ve(_, Ze.__wbindgen_malloc), g = Ke, b = Ze.scoreEpochsTyped(o, c, a, l, s, u, w, g, r, i);
	if (b[2]) throw He(b[1]);
	return He(b[0]);
}
function ee(n) {
	const e = Ve(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.scoreGgirHasib(e, t);
	var r = Pe(_[0], _[1]).slice();
	return Ze.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function te(n) {
	const e = Ze.scoreGgirHasibVariant(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function _e(n, e, t) {
	const _ = Ve(n, Ze.__wbindgen_malloc), r = Ke, i = Ve(e, Ze.__wbindgen_malloc), o = Ke, c = Ze.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw He(c[1]);
	return He(c[0]);
}
function re(n, e) {
	const t = Ve(n, Ze.__wbindgen_malloc), _ = Ke, r = Ze.scoreSadeh(t, _, e);
	var i = Pe(r[0], r[1]).slice();
	return Ze.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function ie(n) {
	const e = Te(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.sha256StreamFeed(e, t);
	if (_[1]) throw He(_[0]);
}
function oe() {
	let n, e;
	try {
		const r = Ze.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, He(r[2]);
		return n = t, e = _, De(t, _);
	} finally {
		Ze.__wbindgen_free(n, e, 1);
	}
}
function ce() {
	Ze.sha256StreamStart();
}
function ae(n, e, t, _, r) {
	const i = Le(n, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), o = Ke, c = Ve(e, Ze.__wbindgen_malloc), a = Ke, l = Ee(t, Ze.__wbindgen_malloc), s = Ke, u = Ve(_, Ze.__wbindgen_malloc), w = Ke, g = Ee(r, Ze.__wbindgen_malloc), b = Ke, f = Ze.sleepRegularityIndex(i, o, c, a, l, s, u, w, g, b);
	if (f[3]) throw He(f[2]);
	return 0 === f[0] ? void 0 : f[1];
}
function le(n, e) {
	const t = Ze.sleepWakeScores(n, e);
	if (t[2]) throw He(t[1]);
	return He(t[0]);
}
function se(n) {
	const e = Te(n, Ze.__wbindgen_malloc), t = Ke, _ = Ze.streamParseFeed(e, t);
	if (_[2]) throw He(_[1]);
	return _[0] >>> 0;
}
function ue() {
	const n = Ze.streamParseFinish();
	if (n[2]) throw He(n[1]);
	return t.__wrap(n[0]);
}
function we() {
	const n = Ze.streamParseFinishChunk();
	if (n[2]) throw He(n[1]);
	return e.__wrap(n[0]);
}
function ge(n) {
	const t = Ze.streamParseFinishChunkWithProgress(n);
	if (t[2]) throw He(t[1]);
	return e.__wrap(t[0]);
}
function be(n, e) {
	const t = Ze.streamParseStart(n, e);
	if (t[1]) throw He(t[0]);
}
function fe(n, e) {
	const t = Ze.streamParseStartData(n, e);
	if (t[1]) throw He(t[0]);
}
function de(n, e, t) {
	const _ = Ze.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw He(_[0]);
}
function me(n, e) {
	const t = Te(n, Ze.__wbindgen_malloc), _ = Ke, r = Ze.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw He(r[1]);
	return He(r[0]);
}
function he(n) {
	const e = Ze.summarizeExportGroups(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function pe(n) {
	const e = Ze.summarizePhysicalActivityTrace(n);
	if (e[2]) throw He(e[1]);
	return He(e[0]);
}
function ye(n, e, t, _, r) {
	const i = Ve(n, Ze.__wbindgen_malloc), o = Ke, c = Ve(e, Ze.__wbindgen_malloc), a = Ke, l = Ve(t, Ze.__wbindgen_malloc), s = Ke, u = Ze.zeroCrossingCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw He(u[1]);
	return He(u[0]);
}
function ve() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(De(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = Le(String(e), Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), _ = Ke;
				Ie().setInt32(n + 4, _, !0), Ie().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				Ie().setBigInt64(n + 8, je(t) ? BigInt(0) : t, !0), Ie().setInt32(n + 0, !je(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return je(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = Le(Re(e), Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), _ = Ke;
				Ie().setInt32(n + 4, _, !0), Ie().setInt32(n + 0, t, !0);
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
				Ie().setFloat64(n + 8, je(t) ? 0 : t, !0), Ie().setInt32(n + 0, !je(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = je(t) ? 0 : Le(t, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), r = Ke;
				Ie().setInt32(n + 4, r, !0), Ie().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(De(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return Ge(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return Ge(function(n, e, t, _) {
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
					t = n, _ = e, console.error(De(n, e));
				} finally {
					Ze.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return Ge(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return Ge(function(n, e) {
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
				return new Float64Array(Ce(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(Pe(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return Ge(function(n) {
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
				return Ge(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(Pe(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return Ge(function(n, e, t) {
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
				const t = Le(e.stack, Ze.__wbindgen_malloc, Ze.__wbindgen_realloc), _ = Ke;
				Ie().setInt32(n + 4, _, !0), Ie().setInt32(n + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return je(n) ? 0 : Se(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return je(n) ? 0 : Se(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return je(n) ? 0 : Se(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return je(n) ? 0 : Se(n);
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
				return Pe(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return De(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Ze.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
const ke = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ze.__wbg_aw5batch_free(n >>> 0, 1)), Ae = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ze.__wbg_streamchunkresult_free(n >>> 0, 1)), xe = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ze.__wbg_streamparseresult_free(n >>> 0, 1));
function Se(n) {
	const e = Ze.__externref_table_alloc();
	return Ze.__wbindgen_externrefs.set(e, n), e;
}
function Re(n) {
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
		e > 0 && (t += Re(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + Re(n[_]);
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
function Ce(n, e) {
	return n >>>= 0, Ue().subarray(n / 8, n / 8 + e);
}
function Fe(n, e) {
	return n >>>= 0, We().subarray(n / 4, n / 4 + e);
}
function Pe(n, e) {
	return n >>>= 0, Oe().subarray(n / 1, n / 1 + e);
}
let Me = null;
function Ie() {
	return (null === Me || !0 === Me.buffer.detached || void 0 === Me.buffer.detached && Me.buffer !== Ze.memory.buffer) && (Me = new DataView(Ze.memory.buffer)), Me;
}
let ze = null;
function Ue() {
	return null !== ze && 0 !== ze.byteLength || (ze = new Float64Array(Ze.memory.buffer)), ze;
}
function De(n, e) {
	return function(n, e) {
		return $e += e, $e >= qe && (Xe = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Xe.decode(), $e = e), Xe.decode(Oe().subarray(n, n + e));
	}(n >>>= 0, e);
}
let Ne = null;
function We() {
	return null !== Ne && 0 !== Ne.byteLength || (Ne = new Uint32Array(Ze.memory.buffer)), Ne;
}
let Be = null;
function Oe() {
	return null !== Be && 0 !== Be.byteLength || (Be = new Uint8Array(Ze.memory.buffer)), Be;
}
function Ge(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = Se(t);
		Ze.__wbindgen_exn_store(n);
	}
}
function je(n) {
	return null == n;
}
function Ee(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return We().set(n, t / 4), Ke = n.length, t;
}
function Te(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return Oe().set(n, t / 1), Ke = n.length, t;
}
function Ve(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return Ue().set(n, t / 8), Ke = n.length, t;
}
function Le(n, e, t) {
	if (void 0 === t) {
		const t = Ye.encode(n), _ = e(t.length, 1) >>> 0;
		return Oe().subarray(_, _ + t.length).set(t), Ke = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = Oe();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = Oe().subarray(r + o, r + _);
		o += Ye.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return Ke = o, r;
}
function He(n) {
	const e = Ze.__wbindgen_externrefs.get(n);
	return Ze.__externref_table_dealloc(n), e;
}
let Xe = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
Xe.decode();
const qe = 2146435072;
let $e = 0;
const Ye = new TextEncoder();
"encodeInto" in Ye || (Ye.encodeInto = function(n, e) {
	const t = Ye.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let Ze, Ke = 0;
function Je(n, e) {
	return Ze = n.exports, Me = null, ze = null, Ne = null, Be = null, Ze.__wbindgen_start(), Ze;
}
function Qe(n) {
	if (void 0 !== Ze) return Ze;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = ve();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Je(new WebAssembly.Instance(n, e));
}
async function nt(n) {
	if (void 0 !== Ze) return Ze;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-ClcOpJHo.wasm", "" + import.meta.url));
	const e = ve();
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
	return Je(t);
}
export { n as Aw5Batch, e as StreamChunkResult, t as StreamParseResult, _ as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actiwareWakeThreshold, o as actoursVersion, c as aggregateEpochSeries, a as analyzePhysicalActivityDay, l as classifyActimetricPreschoolWristRf, s as classifyActimetricPreschoolWristRfLagLead, u as classifyActimetricPreschoolWristRfLagLeadCalibrated, w as compareNonwearDetectorMasks, g as computeAnglez5s, b as computeCircadian, f as computeCircadianTyped, d as computeEnmo5s, m as computeMimsUnit, h as computeMimsUnitDataframe, p as computeMimsUnitTimingBreakdown, y as computeMimsUnitValues, v as computeNightDifficulty, k as computeNightDifficultyTyped, A as computeNightSignals, x as computeNightSignalsTyped, S as computeSleepMetrics, R as configureComputeMemoryBudgetV1, C as csvBufferAppend, F as csvBufferClear, nt as default, P as detectDetachFromAccelerationG, M as detectDeviceFormat, I as detectGgirHasptVariant, z as detectHdcza, U as detectNonwear, D as detectNonwearChoi2011, N as detectNonwearChoi2011Bouts, W as detectNonwearChoi2011Epoch, B as detectNonwearChoi2012, O as detectNonwearChoi2012Bouts, G as detectNonwearChoiBouts, j as detectNonwearUnified, E as detectNonwearUnifiedBatchTyped, T as epochAgreement, V as epochRawData, L as epochWithBandpass, H as executeHeroRuntime, X as exportNapAggregate, q as exportPeriodFigures, $ as extractCapsense, Y as fuseNonwearMasks, Z as generateActiwareRestIntervals, K as getComputeCapabilitiesV1, J as ggirConfigValues, Q as ggirSptDurationHours, nn as ggirSummaryDenominator, en as identifyGgirRData, Qe as initSync, tn as installPanicHook, _n as isGeneactivFormat, rn as lstmSpectralFeatures30s, on as neishabouriCounts, cn as nonwearContributors, an as parseActigraphCsv, ln as parseActigraphCsvBuffered, sn as parseAw5, un as parseCwa, wn as parseEpochSeries, gn as parseGeneactivBin, bn as parseGeneactivCsv, fn as parseGeneactivCsvBuffered, dn as parseGt3x, mn as placeMarkers, hn as placeMarkersBatch, pn as placeMarkersTyped, yn as placeNonwearMarkers, vn as placeNonwearMarkersTyped, kn as prepareCompactPipelineOutcomeV1, An as prepareCompactPipelineV1, xn as processGeneactivRaw, Sn as processGt3xFull, Rn as processGt3xFullWithEpoch, Cn as processGt3xPart1, Fn as processGt3xPart1WithEpoch, Pn as processRawXyz, Mn as processRawXyzImputed, In as processRawXyzImputedWithEpoch, zn as rasterizePeriods, Un as readGgirMeta, Dn as recommended_chunk_size_mb, Nn as reduceF64V1, Wn as resolveTimezone, Bn as reviewGgirResults, On as reviewNonwearFile, Gn as reviewNonwearTotals, jn as runCompactPipelineOutcomeV1, En as runCompactPipelineV1, Tn as runFullPipeline, Vn as runFullPipelineOutcomeV1, Ln as runFullPipelineV1, Hn as runGgirFromEpoch, Xn as runGgirPart3, qn as runMilestone, $n as scoreAllDays, Yn as scoreColeKripke, Zn as scoreConsensus, Kn as scoreConsensusMajority, Jn as scoreConsensusTyped, Qn as scoreEpochs, ne as scoreEpochsTyped, ee as scoreGgirHasib, te as scoreGgirHasibVariant, _e as scoreGgirSib, re as scoreSadeh, ie as sha256StreamFeed, oe as sha256StreamFinish, ce as sha256StreamStart, ae as sleepRegularityIndex, le as sleepWakeScores, se as streamParseFeed, ue as streamParseFinish, we as streamParseFinishChunk, ge as streamParseFinishChunkWithProgress, be as streamParseStart, fe as streamParseStartData, de as streamParseStartWithEpoch, me as summarizeActimetricPreschoolWristRfClasses, he as summarizeExportGroups, pe as summarizePhysicalActivityTrace, ye as zeroCrossingCounts };
