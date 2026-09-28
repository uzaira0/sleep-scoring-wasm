var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ve.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Ye.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = Ye.aw5batch_new(n);
		if (e[2]) throw Le(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, ve.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, t) {
		const _ = Ve(e, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), r = Ze;
		var i = Oe(t) ? 0 : Ve(t, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), o = Ze;
		const c = Ye.aw5batch_recording(this.__wbg_ptr, n, _, r, i, o);
		if (c[2]) throw Le(c[1]);
		return Le(c[0]);
	}
	subjects(n) {
		const e = Ye.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw Le(e[1]);
		return Le(e[0]);
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
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
		Ye.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Ye.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Ye.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Ye.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Ye.streamchunkresult_axisX(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ye.streamchunkresult_axisY(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ye.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Ye.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ye.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = De(n[0], n[1]).slice(), Ye.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Ye.streamchunkresult_counts(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Ye.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Ye.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Ye.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = Ye.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = Fe(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = Ye.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = Fe(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return Ye.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Ye.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Ye.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Ye.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Ye.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = De(n[0], n[1]).slice(), Ye.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Ye.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Ye.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Ye.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Ye.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ye.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Ye.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ye.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = Ye.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = Ce(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Ye.streamchunkresult_temperature(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ye.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Ye.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ye.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Ye.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Ye.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Ye.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var t = class n {
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
		Ye.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Ye.streamparseresult_axisX(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ye.streamparseresult_axisY(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ye.streamparseresult_axisZ(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Ye.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ye.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = De(n[0], n[1]).slice(), Ye.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return Ye.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== Ye.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ye.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ye.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Ye.streamparseresult_temperature(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ye.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ye.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = Re(n[0], n[1]).slice();
		return Ye.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function _(n) {
	const e = Ye.actiwareIntervalStatistics(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function r(n, e, t) {
	const _ = Ye.actiwareSleepIntervals(n, e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function i() {
	let n, e;
	try {
		const t = Ye.actoursVersion();
		return n = t[0], e = t[1], De(t[0], t[1]);
	} finally {
		Ye.__wbindgen_free(n, e, 1);
	}
}
function o(n) {
	const e = Ye.aggregateEpochSeries(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function c(n) {
	let e, t;
	try {
		const i = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), o = Ze, c = Ye.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Le(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ye.__wbindgen_free(e, t, 1);
	}
}
function a(n, e, t, _) {
	const r = Te(n, Ye.__wbindgen_malloc), i = Ze, o = Te(e, Ye.__wbindgen_malloc), c = Ze, a = Te(t, Ye.__wbindgen_malloc), l = Ze, s = Ye.classifyActimetricPreschoolWristRf(r, i, o, c, a, l, _);
	if (s[3]) throw Le(s[2]);
	var u = Fe(s[0], s[1]).slice();
	return Ye.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function l(n, e, t, _) {
	const r = Te(n, Ye.__wbindgen_malloc), i = Ze, o = Te(e, Ye.__wbindgen_malloc), c = Ze, a = Te(t, Ye.__wbindgen_malloc), l = Ze, s = Ye.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, a, l, _);
	if (s[3]) throw Le(s[2]);
	var u = Fe(s[0], s[1]).slice();
	return Ye.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function s(n, e, t, _) {
	const r = Te(n, Ye.__wbindgen_malloc), i = Ze, o = Te(e, Ye.__wbindgen_malloc), c = Ze, a = Te(t, Ye.__wbindgen_malloc), l = Ze, s = Ye.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, a, l, _);
	if (s[3]) throw Le(s[2]);
	var u = Fe(s[0], s[1]).slice();
	return Ye.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function u(n, e) {
	const t = Ye.compareNonwearDetectorMasks(n, e);
	if (t[2]) throw Le(t[1]);
	return Le(t[0]);
}
function w(n, e, t, _) {
	const r = Te(n, Ye.__wbindgen_malloc), i = Ze, o = Te(e, Ye.__wbindgen_malloc), c = Ze, a = Te(t, Ye.__wbindgen_malloc), l = Ze, s = Ye.computeAnglez5s(r, i, o, c, a, l, _);
	var u = Re(s[0], s[1]).slice();
	return Ye.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function g(n) {
	let e, t;
	try {
		const i = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), o = Ze, c = Ye.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Le(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ye.__wbindgen_free(e, t, 1);
	}
}
function b(n, e, t, _, r, i, o) {
	const c = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), a = Ze, l = Te(e, Ye.__wbindgen_malloc), s = Ze, u = je(t, Ye.__wbindgen_malloc), w = Ze, g = Te(_, Ye.__wbindgen_malloc), b = Ze, f = je(r, Ye.__wbindgen_malloc), d = Ze, m = Ee(i, Ye.__wbindgen_malloc), h = Ze, p = je(o, Ye.__wbindgen_malloc), y = Ze, v = Ye.computeCircadianTyped(c, a, l, s, u, w, g, b, f, d, m, h, p, y);
	if (v[2]) throw Le(v[1]);
	return Le(v[0]);
}
function f(n, e, t, _) {
	const r = Te(n, Ye.__wbindgen_malloc), i = Ze, o = Te(e, Ye.__wbindgen_malloc), c = Ze, a = Te(t, Ye.__wbindgen_malloc), l = Ze, s = Ye.computeEnmo5s(r, i, o, c, a, l, _);
	var u = Re(s[0], s[1]).slice();
	return Ye.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function d(n, e, t, _, r) {
	const i = Te(n, Ye.__wbindgen_malloc), o = Ze, c = Te(e, Ye.__wbindgen_malloc), a = Ze, l = Te(t, Ye.__wbindgen_malloc), s = Ze, u = Ye.computeMimsUnit(i, o, c, a, l, s, _, r);
	if (u[2]) throw Le(u[1]);
	return Le(u[0]);
}
function m(n, e, t, _, r) {
	const i = Te(n, Ye.__wbindgen_malloc), o = Ze, c = Te(e, Ye.__wbindgen_malloc), a = Ze, l = Te(t, Ye.__wbindgen_malloc), s = Ze, u = Te(_, Ye.__wbindgen_malloc), w = Ze, g = Ye.computeMimsUnitDataframe(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw Le(g[1]);
	return Le(g[0]);
}
function h(n, e, t, _, r) {
	const i = Te(n, Ye.__wbindgen_malloc), o = Ze, c = Te(e, Ye.__wbindgen_malloc), a = Ze, l = Te(t, Ye.__wbindgen_malloc), s = Ze, u = Ye.computeMimsUnitTimingBreakdown(i, o, c, a, l, s, _, r);
	if (u[2]) throw Le(u[1]);
	return Le(u[0]);
}
function p(n, e, t, _, r) {
	const i = Te(n, Ye.__wbindgen_malloc), o = Ze, c = Te(e, Ye.__wbindgen_malloc), a = Ze, l = Te(t, Ye.__wbindgen_malloc), s = Ze, u = Ye.computeMimsUnitValues(i, o, c, a, l, s, _, r);
	if (u[3]) throw Le(u[2]);
	var w = Re(u[0], u[1]).slice();
	return Ye.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function y(n) {
	let e, t;
	try {
		const i = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), o = Ze, c = Ye.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Le(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ye.__wbindgen_free(e, t, 1);
	}
}
function v(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), y = Ze, v = Te(e, Ye.__wbindgen_malloc), k = Ze, A = je(t, Ye.__wbindgen_malloc), S = Ze, x = Te(_, Ye.__wbindgen_malloc), R = Ze, C = je(r, Ye.__wbindgen_malloc), F = Ze, P = Ee(i, Ye.__wbindgen_malloc), M = Ze, I = je(o, Ye.__wbindgen_malloc), z = Ze, D = Ee(c, Ye.__wbindgen_malloc), U = Ze, N = je(a, Ye.__wbindgen_malloc), W = Ze, B = Te(l, Ye.__wbindgen_malloc), G = Ze, O = je(s, Ye.__wbindgen_malloc), j = Ze, E = Te(u, Ye.__wbindgen_malloc), T = Ze, V = je(w, Ye.__wbindgen_malloc), L = Ze, X = Te(g, Ye.__wbindgen_malloc), q = Ze, H = je(b, Ye.__wbindgen_malloc), $ = Ze, Y = Te(f, Ye.__wbindgen_malloc), Z = Ze, K = je(d, Ye.__wbindgen_malloc), Q = Ze, J = Ee(m, Ye.__wbindgen_malloc), nn = Ze, en = je(h, Ye.__wbindgen_malloc), tn = Ze, _n = Ye.computeNightDifficultyTyped(p, y, v, k, A, S, x, R, C, F, P, M, I, z, D, U, N, W, B, G, O, j, E, T, V, L, X, q, H, $, Y, Z, K, Q, J, nn, en, tn);
	if (_n[2]) throw Le(_n[1]);
	return Le(_n[0]);
}
function k(n) {
	let e, t;
	try {
		const i = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), o = Ze, c = Ye.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Le(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ye.__wbindgen_free(e, t, 1);
	}
}
function A(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), y = Ze, v = Te(e, Ye.__wbindgen_malloc), k = Ze, A = je(t, Ye.__wbindgen_malloc), S = Ze, x = Te(_, Ye.__wbindgen_malloc), R = Ze, C = je(r, Ye.__wbindgen_malloc), F = Ze, P = Ee(i, Ye.__wbindgen_malloc), M = Ze, I = je(o, Ye.__wbindgen_malloc), z = Ze, D = Ee(c, Ye.__wbindgen_malloc), U = Ze, N = je(a, Ye.__wbindgen_malloc), W = Ze, B = Te(l, Ye.__wbindgen_malloc), G = Ze, O = je(s, Ye.__wbindgen_malloc), j = Ze, E = Te(u, Ye.__wbindgen_malloc), T = Ze, V = je(w, Ye.__wbindgen_malloc), L = Ze, X = Te(g, Ye.__wbindgen_malloc), q = Ze, H = je(b, Ye.__wbindgen_malloc), $ = Ze, Y = Te(f, Ye.__wbindgen_malloc), Z = Ze, K = je(d, Ye.__wbindgen_malloc), Q = Ze, J = Ee(m, Ye.__wbindgen_malloc), nn = Ze, en = je(h, Ye.__wbindgen_malloc), tn = Ze, _n = Ye.computeNightSignalsTyped(p, y, v, k, A, S, x, R, C, F, P, M, I, z, D, U, N, W, B, G, O, j, E, T, V, L, X, q, H, $, Y, Z, K, Q, J, nn, en, tn);
	if (_n[2]) throw Le(_n[1]);
	return Le(_n[0]);
}
function S(n, e, t) {
	const _ = Ee(n, Ye.__wbindgen_malloc), r = Ze, i = Te(e, Ye.__wbindgen_malloc), o = Ze, c = Ye.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw Le(c[1]);
	return Le(c[0]);
}
function x(n) {
	const e = Ye.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function R(n) {
	const e = Ee(n, Ye.__wbindgen_malloc), t = Ze;
	Ye.csvBufferAppend(e, t);
}
function C(n) {
	Ye.csvBufferClear(n);
}
function F(n, e) {
	const t = Te(n, Ye.__wbindgen_malloc), _ = Ze, r = Te(e, Ye.__wbindgen_malloc), i = Ze, o = Ye.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw Le(o[2]);
	var c = Fe(o[0], o[1]).slice();
	return Ye.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function P(n, e) {
	let t, _;
	try {
		const r = Ee(n, Ye.__wbindgen_malloc), i = Ze, o = Ve(e, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), c = Ze, a = Ye.detectDeviceFormat(r, i, o, c);
		return t = a[0], _ = a[1], De(a[0], a[1]);
	} finally {
		Ye.__wbindgen_free(t, _, 1);
	}
}
function M(n) {
	const e = Ye.detectGgirHasptVariant(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function I(n, e, t, _) {
	const r = Te(n, Ye.__wbindgen_malloc), i = Ze;
	var o = Oe(e) ? 0 : Ve(e, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), c = Ze, a = Oe(t) ? 0 : Te(t, Ye.__wbindgen_malloc), l = Ze, s = Oe(_) ? 0 : Te(_, Ye.__wbindgen_malloc), u = Ze;
	return Ye.detectHdcza(r, i, o, c, a, l, s, u);
}
function z(n) {
	const e = Te(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.detectNonwear(e, t);
	var r = Fe(_[0], _[1]).slice();
	return Ye.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function D(n) {
	const e = Te(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.detectNonwearChoi2011(e, t);
	var r = Fe(_[0], _[1]).slice();
	return Ye.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function U(n) {
	const e = Te(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function N(n, e) {
	const t = Te(n, Ye.__wbindgen_malloc), _ = Ze, r = Ye.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw Le(r[2]);
	var i = Fe(r[0], r[1]).slice();
	return Ye.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function W(n) {
	const e = Te(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.detectNonwearChoi2012(e, t);
	var r = Fe(_[0], _[1]).slice();
	return Ye.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function B(n) {
	const e = Te(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function G(n) {
	const e = Te(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.detectNonwearChoiBouts(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function O(n) {
	let e, t;
	try {
		const i = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), o = Ze, c = Ye.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Le(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ye.__wbindgen_free(e, t, 1);
	}
}
function j(n, e, t, _, r, i, o) {
	const c = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), a = Ze, l = Ve(e, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), s = Ze, u = Te(t, Ye.__wbindgen_malloc), w = Ze, g = Te(_, Ye.__wbindgen_malloc), b = Ze, f = Te(r, Ye.__wbindgen_malloc), d = Ze, m = Ye.detectNonwearUnifiedBatchTyped(c, a, l, s, u, w, g, b, f, d, i, o);
	if (m[2]) throw Le(m[1]);
	return Le(m[0]);
}
function E(n, e) {
	const t = Te(n, Ye.__wbindgen_malloc), _ = Ze, r = Te(e, Ye.__wbindgen_malloc), i = Ze, o = Ye.epochAgreement(t, _, r, i);
	if (o[2]) throw Le(o[1]);
	return Le(o[0]);
}
function T(n, e, t, _, r) {
	const i = Te(n, Ye.__wbindgen_malloc), o = Ze, c = Te(e, Ye.__wbindgen_malloc), a = Ze, l = Te(t, Ye.__wbindgen_malloc), s = Ze, u = Te(_, Ye.__wbindgen_malloc), w = Ze, g = Ye.epochRawData(i, o, c, a, l, s, u, w, r);
	if (g[2]) throw Le(g[1]);
	return Le(g[0]);
}
function V(n, e, t) {
	const _ = Te(n, Ye.__wbindgen_malloc), r = Ze, i = Te(e, Ye.__wbindgen_malloc), o = Ze, c = Ye.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw Le(c[1]);
	return Le(c[0]);
}
function L(n, e) {
	let t, _;
	try {
		const o = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), c = Ze, a = Ve(e, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), l = Ze, s = Ye.executeHeroRuntime(o, c, a, l);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Le(s[2]);
		return t = r, _ = i, De(r, i);
	} finally {
		Ye.__wbindgen_free(t, _, 1);
	}
}
function X(n) {
	const e = Ye.exportNapAggregate(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function q(n, e, t) {
	const _ = Ye.exportPeriodFigures(!Oe(n), Oe(n) ? 0 : n, !Oe(e), Oe(e) ? 0 : e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function H(n) {
	const e = Ee(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.extractCapsense(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function $(n) {
	const e = Ye.fuseNonwearMasks(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function Y(n, e) {
	const t = Ye.generateActiwareRestIntervals(n, e);
	if (t[2]) throw Le(t[1]);
	return Le(t[0]);
}
function Z() {
	const n = Ye.getComputeCapabilitiesV1();
	if (n[2]) throw Le(n[1]);
	return Le(n[0]);
}
function K(n) {
	const e = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), t = Ze, _ = Ye.ggirConfigValues(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function Q(n, e) {
	return Ye.ggirSptDurationHours(n, e);
}
function J(n, e) {
	const t = Ye.ggirSummaryDenominator(n, e);
	if (t[2]) throw Le(t[1]);
	return Le(t[0]);
}
function nn(n) {
	let e, t;
	try {
		const i = Ee(n, Ye.__wbindgen_malloc), o = Ze, c = Ye.identifyGgirRData(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Le(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ye.__wbindgen_free(e, t, 1);
	}
}
function en() {
	Ye.installPanicHook();
}
function tn(n) {
	const e = Ee(n, Ye.__wbindgen_malloc), t = Ze;
	return 0 !== Ye.isGeneactivFormat(e, t);
}
function _n(n, e, t, _) {
	const r = Te(n, Ye.__wbindgen_malloc), i = Ze, o = Te(e, Ye.__wbindgen_malloc), c = Ze, a = Te(t, Ye.__wbindgen_malloc), l = Ze, s = Ye.lstmSpectralFeatures30s(r, i, o, c, a, l, _);
	if (s[2]) throw Le(s[1]);
	return Le(s[0]);
}
function rn(n, e, t, _, r) {
	const i = Te(n, Ye.__wbindgen_malloc), o = Ze, c = Te(e, Ye.__wbindgen_malloc), a = Ze, l = Te(t, Ye.__wbindgen_malloc), s = Ze, u = Ye.neishabouriCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw Le(u[1]);
	return Le(u[0]);
}
function on(n, e, t, _) {
	let r, i;
	try {
		const a = je(n, Ye.__wbindgen_malloc), l = Ze, s = Ve(e, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), u = Ze, w = Ye.nonwearContributors(a, l, s, u, t, _);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, Le(w[2]);
		return r = o, i = c, De(o, c);
	} finally {
		Ye.__wbindgen_free(r, i, 1);
	}
}
function cn(n, e) {
	const t = Ee(n, Ye.__wbindgen_malloc), _ = Ze, r = Ye.parseActigraphCsv(t, _, e);
	if (r[2]) throw Le(r[1]);
	return Le(r[0]);
}
function an(n) {
	const e = Ye.parseActigraphCsvBuffered(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function ln(n, e, t, _) {
	const r = Ee(n, Ye.__wbindgen_malloc), i = Ze;
	var o = Oe(e) ? 0 : Ve(e, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), c = Ze, a = Oe(_) ? 0 : Ve(_, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), l = Ze;
	const s = Ye.parseAw5(r, i, o, c, Oe(t) ? 0 : Se(t), a, l);
	if (s[2]) throw Le(s[1]);
	return Le(s[0]);
}
function sn(n) {
	const e = Ee(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.parseCwa(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function un(n, e) {
	const t = Ee(n, Ye.__wbindgen_malloc), _ = Ze, r = Ve(e, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), i = Ze, o = Ye.parseEpochSeries(t, _, r, i);
	if (o[2]) throw Le(o[1]);
	return Le(o[0]);
}
function wn(n) {
	const e = Ee(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.parseGeneactivBin(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function gn(n) {
	const e = Ee(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.parseGeneactivCsv(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function bn() {
	const n = Ye.parseGeneactivCsvBuffered();
	if (n[2]) throw Le(n[1]);
	return Le(n[0]);
}
function fn(n) {
	const e = Ee(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.parseGt3x(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function dn(n) {
	let e, t;
	try {
		const i = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), o = Ze, c = Ye.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Le(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ye.__wbindgen_free(e, t, 1);
	}
}
function mn(n, e, t, _, r, i) {
	const o = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), c = Ze, a = Te(e, Ye.__wbindgen_malloc), l = Ze, s = Te(t, Ye.__wbindgen_malloc), u = Ze, w = Ee(_, Ye.__wbindgen_malloc), g = Ze, b = Ee(r, Ye.__wbindgen_malloc), f = Ze, d = Ve(i, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), m = Ze, h = Ye.placeMarkersBatch(o, c, a, l, s, u, w, g, b, f, d, m);
	if (h[2]) throw Le(h[1]);
	return Le(h[0]);
}
function hn(n, e, t, _, r, i, o, c, a, l, s, u, w, g, b, f, d, m, h) {
	const p = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), y = Ze, v = Te(e, Ye.__wbindgen_malloc), k = Ze, A = je(t, Ye.__wbindgen_malloc), S = Ze, x = Te(_, Ye.__wbindgen_malloc), R = Ze, C = je(r, Ye.__wbindgen_malloc), F = Ze, P = Ee(i, Ye.__wbindgen_malloc), M = Ze, I = je(o, Ye.__wbindgen_malloc), z = Ze, D = Ee(c, Ye.__wbindgen_malloc), U = Ze, N = je(a, Ye.__wbindgen_malloc), W = Ze, B = Te(l, Ye.__wbindgen_malloc), G = Ze, O = je(s, Ye.__wbindgen_malloc), j = Ze, E = Te(u, Ye.__wbindgen_malloc), T = Ze, V = je(w, Ye.__wbindgen_malloc), L = Ze, X = Te(g, Ye.__wbindgen_malloc), q = Ze, H = je(b, Ye.__wbindgen_malloc), $ = Ze, Y = Te(f, Ye.__wbindgen_malloc), Z = Ze, K = je(d, Ye.__wbindgen_malloc), Q = Ze, J = Ee(m, Ye.__wbindgen_malloc), nn = Ze, en = je(h, Ye.__wbindgen_malloc), tn = Ze, _n = Ye.placeMarkersTyped(p, y, v, k, A, S, x, R, C, F, P, M, I, z, D, U, N, W, B, G, O, j, E, T, V, L, X, q, H, $, Y, Z, K, Q, J, nn, en, tn);
	if (_n[2]) throw Le(_n[1]);
	return Le(_n[0]);
}
function pn(n) {
	let e, t;
	try {
		const i = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), o = Ze, c = Ye.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Le(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ye.__wbindgen_free(e, t, 1);
	}
}
function yn(n, e, t, _) {
	const r = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), i = Ze, o = Te(e, Ye.__wbindgen_malloc), c = Ze, a = Te(t, Ye.__wbindgen_malloc), l = Ze, s = Ee(_, Ye.__wbindgen_malloc), u = Ze, w = Ye.placeNonwearMarkersTyped(r, i, o, c, a, l, s, u);
	if (w[2]) throw Le(w[1]);
	return Le(w[0]);
}
function vn(n) {
	const e = Ye.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function kn(n) {
	const e = Ye.prepareCompactPipelineV1(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function An(n, e, t, _, r, i, o) {
	const c = Te(n, Ye.__wbindgen_malloc), a = Ze, l = Te(e, Ye.__wbindgen_malloc), s = Ze, u = Te(t, Ye.__wbindgen_malloc), w = Ze, g = Te(_, Ye.__wbindgen_malloc), b = Ze;
	var f = Oe(o) ? 0 : Ve(o, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), d = Ze;
	const m = Ye.processGeneactivRaw(c, a, l, s, u, w, g, b, r, i, f, d);
	if (m[2]) throw Le(m[1]);
	return Le(m[0]);
}
function Sn(n) {
	const e = Ee(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.processGt3xFull(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function xn(n, e) {
	const t = Ee(n, Ye.__wbindgen_malloc), _ = Ze, r = Ye.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw Le(r[1]);
	return Le(r[0]);
}
function Rn(n) {
	const e = Ee(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.processGt3xPart1(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function Cn(n, e) {
	const t = Ee(n, Ye.__wbindgen_malloc), _ = Ze, r = Ye.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw Le(r[1]);
	return Le(r[0]);
}
function Fn(n, e, t, _, r, i) {
	const o = Te(n, Ye.__wbindgen_malloc), c = Ze, a = Te(e, Ye.__wbindgen_malloc), l = Ze, s = Te(t, Ye.__wbindgen_malloc), u = Ze;
	var w = Oe(i) ? 0 : Ve(i, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), g = Ze;
	const b = Ye.processRawXyz(o, c, a, l, s, u, _, r, w, g);
	if (b[2]) throw Le(b[1]);
	return Le(b[0]);
}
function Pn(n, e, t, _, r, i) {
	const o = Te(n, Ye.__wbindgen_malloc), c = Ze, a = Te(e, Ye.__wbindgen_malloc), l = Ze, s = Te(t, Ye.__wbindgen_malloc), u = Ze, w = Te(_, Ye.__wbindgen_malloc), g = Ze;
	var b = Oe(i) ? 0 : Ve(i, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), f = Ze;
	const d = Ye.processRawXyzImputed(o, c, a, l, s, u, w, g, r, b, f);
	if (d[2]) throw Le(d[1]);
	return Le(d[0]);
}
function Mn(n, e, t, _, r, i, o) {
	const c = Te(n, Ye.__wbindgen_malloc), a = Ze, l = Te(e, Ye.__wbindgen_malloc), s = Ze, u = Te(t, Ye.__wbindgen_malloc), w = Ze, g = Te(_, Ye.__wbindgen_malloc), b = Ze;
	var f = Oe(i) ? 0 : Ve(i, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), d = Ze;
	const m = Ye.processRawXyzImputedWithEpoch(c, a, l, s, u, w, g, b, r, f, d, o);
	if (m[2]) throw Le(m[1]);
	return Le(m[0]);
}
function In(n, e, t, _) {
	const r = Te(n, Ye.__wbindgen_malloc), i = Ze, o = Te(e, Ye.__wbindgen_malloc), c = Ze, a = Te(t, Ye.__wbindgen_malloc), l = Ze, s = Ye.rasterizePeriods(r, i, o, c, a, l, _);
	if (s[2]) throw Le(s[1]);
	return Le(s[0]);
}
function zn(n) {
	const e = Ee(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.readGgirMeta(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function Dn() {
	return Ye.recommended_chunk_size_mb() >>> 0;
}
function Un(n, e) {
	const t = Te(n, Ye.__wbindgen_malloc), _ = Ze, r = Ve(e, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), i = Ze, o = Ye.reduceF64V1(t, _, r, i);
	if (o[2]) throw Le(o[1]);
	return o[0];
}
function Nn(n) {
	const e = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), t = Ze, _ = Ye.resolveTimezone(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function Wn(n, e, t, _, r, i, o, c, a, l, s) {
	const u = Ee(n, Ye.__wbindgen_malloc), w = Ze, g = Ve(e, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), b = Ze;
	var f = Oe(t) ? 0 : Ee(t, Ye.__wbindgen_malloc), d = Ze, m = Oe(_) ? 0 : Ee(_, Ye.__wbindgen_malloc), h = Ze, p = Oe(r) ? 0 : Ee(r, Ye.__wbindgen_malloc), y = Ze, v = Oe(i) ? 0 : Ee(i, Ye.__wbindgen_malloc), k = Ze, A = Oe(o) ? 0 : Ee(o, Ye.__wbindgen_malloc), S = Ze, x = Oe(c) ? 0 : Ve(c, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), R = Ze, C = Oe(a) ? 0 : Ve(a, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), F = Ze;
	const P = Ye.reviewGgirResults(u, w, g, b, f, d, m, h, p, y, v, k, A, S, x, R, C, F, l, s);
	if (P[2]) throw Le(P[1]);
	return Le(P[0]);
}
function Bn(n) {
	const e = Ye.reviewNonwearFile(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function Gn(n) {
	const e = Ye.reviewNonwearTotals(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function On(n) {
	const e = Ye.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function jn(n) {
	const e = Ye.runCompactPipelineV1(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function En(n, e) {
	const t = Ye.runFullPipeline(n, e);
	if (t[2]) throw Le(t[1]);
	return Le(t[0]);
}
function Tn(n) {
	const e = Ye.runFullPipelineOutcomeV1(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function Vn(n) {
	const e = Ye.runFullPipelineV1(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function Ln(n, e) {
	const t = Ye.runGgirFromEpoch(n, e);
	if (t[2]) throw Le(t[1]);
	return Le(t[0]);
}
function Xn(n) {
	const e = Ye.runGgirPart3(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function qn(n) {
	const e = Ee(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.runMilestone(e, t);
	if (_[2]) throw Le(_[1]);
	return Le(_[0]);
}
function Hn(n) {
	const e = Ye.scoreAllDays(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function $n(n, e) {
	const t = Te(n, Ye.__wbindgen_malloc), _ = Ze, r = Ye.scoreColeKripke(t, _, e);
	var i = Fe(r[0], r[1]).slice();
	return Ye.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Yn(n) {
	let e, t;
	try {
		const i = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), o = Ze, c = Ye.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Le(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ye.__wbindgen_free(e, t, 1);
	}
}
function Zn(n) {
	const e = Ye.scoreConsensusMajority(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function Kn(n, e, t) {
	const _ = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), r = Ze, i = Ee(e, Ye.__wbindgen_malloc), o = Ze, c = je(t, Ye.__wbindgen_malloc), a = Ze, l = Ye.scoreConsensusTyped(_, r, i, o, c, a);
	if (l[2]) throw Le(l[1]);
	return Le(l[0]);
}
function Qn(n) {
	let e, t;
	try {
		const i = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), o = Ze, c = Ye.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, Le(c[2]);
		return e = _, t = r, De(_, r);
	} finally {
		Ye.__wbindgen_free(e, t, 1);
	}
}
function Jn(n, e, t, _, r, i) {
	const o = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), c = Ze, a = Te(e, Ye.__wbindgen_malloc), l = Ze, s = Te(t, Ye.__wbindgen_malloc), u = Ze, w = Te(_, Ye.__wbindgen_malloc), g = Ze, b = Ye.scoreEpochsTyped(o, c, a, l, s, u, w, g, r, i);
	if (b[2]) throw Le(b[1]);
	return Le(b[0]);
}
function ne(n) {
	const e = Te(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.scoreGgirHasib(e, t);
	var r = Fe(_[0], _[1]).slice();
	return Ye.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function ee(n) {
	const e = Ye.scoreGgirHasibVariant(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function te(n, e, t) {
	const _ = Te(n, Ye.__wbindgen_malloc), r = Ze, i = Te(e, Ye.__wbindgen_malloc), o = Ze, c = Ye.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw Le(c[1]);
	return Le(c[0]);
}
function _e(n, e) {
	const t = Te(n, Ye.__wbindgen_malloc), _ = Ze, r = Ye.scoreSadeh(t, _, e);
	var i = Fe(r[0], r[1]).slice();
	return Ye.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function re(n) {
	const e = Ee(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.sha256StreamFeed(e, t);
	if (_[1]) throw Le(_[0]);
}
function ie() {
	let n, e;
	try {
		const r = Ye.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, Le(r[2]);
		return n = t, e = _, De(t, _);
	} finally {
		Ye.__wbindgen_free(n, e, 1);
	}
}
function oe() {
	Ye.sha256StreamStart();
}
function ce(n, e, t, _, r) {
	const i = Ve(n, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), o = Ze, c = Te(e, Ye.__wbindgen_malloc), a = Ze, l = je(t, Ye.__wbindgen_malloc), s = Ze, u = Te(_, Ye.__wbindgen_malloc), w = Ze, g = je(r, Ye.__wbindgen_malloc), b = Ze, f = Ye.sleepRegularityIndex(i, o, c, a, l, s, u, w, g, b);
	if (f[3]) throw Le(f[2]);
	return 0 === f[0] ? void 0 : f[1];
}
function ae(n, e) {
	const t = Ye.sleepWakeScores(n, e);
	if (t[2]) throw Le(t[1]);
	return Le(t[0]);
}
function le(n) {
	const e = Ee(n, Ye.__wbindgen_malloc), t = Ze, _ = Ye.streamParseFeed(e, t);
	if (_[2]) throw Le(_[1]);
	return _[0] >>> 0;
}
function se() {
	const n = Ye.streamParseFinish();
	if (n[2]) throw Le(n[1]);
	return t.__wrap(n[0]);
}
function ue() {
	const n = Ye.streamParseFinishChunk();
	if (n[2]) throw Le(n[1]);
	return e.__wrap(n[0]);
}
function we(n) {
	const t = Ye.streamParseFinishChunkWithProgress(n);
	if (t[2]) throw Le(t[1]);
	return e.__wrap(t[0]);
}
function ge(n, e) {
	const t = Ye.streamParseStart(n, e);
	if (t[1]) throw Le(t[0]);
}
function be(n, e) {
	const t = Ye.streamParseStartData(n, e);
	if (t[1]) throw Le(t[0]);
}
function fe(n, e, t) {
	const _ = Ye.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw Le(_[0]);
}
function de(n, e) {
	const t = Ee(n, Ye.__wbindgen_malloc), _ = Ze, r = Ye.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw Le(r[1]);
	return Le(r[0]);
}
function me(n) {
	const e = Ye.summarizeExportGroups(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function he(n) {
	const e = Ye.summarizePhysicalActivityTrace(n);
	if (e[2]) throw Le(e[1]);
	return Le(e[0]);
}
function pe(n, e, t, _, r) {
	const i = Te(n, Ye.__wbindgen_malloc), o = Ze, c = Te(e, Ye.__wbindgen_malloc), a = Ze, l = Te(t, Ye.__wbindgen_malloc), s = Ze, u = Ye.zeroCrossingCounts(i, o, c, a, l, s, _, r);
	if (u[2]) throw Le(u[1]);
	return Le(u[0]);
}
function ye() {
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
				const t = Ve(String(e), Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), _ = Ze;
				Me().setInt32(n + 4, _, !0), Me().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				Me().setBigInt64(n + 8, Oe(t) ? BigInt(0) : t, !0), Me().setInt32(n + 0, !Oe(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return Oe(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = Ve(xe(e), Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), _ = Ze;
				Me().setInt32(n + 4, _, !0), Me().setInt32(n + 0, t, !0);
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
				Me().setFloat64(n + 8, Oe(t) ? 0 : t, !0), Me().setInt32(n + 0, !Oe(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = Oe(t) ? 0 : Ve(t, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), r = Ze;
				Me().setInt32(n + 4, r, !0), Me().setInt32(n + 0, _, !0);
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
					Ye.__wbindgen_free(t, _, 1);
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
				return new Float64Array(Re(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(Fe(n, e));
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
				Uint8Array.prototype.set.call(Fe(n, e), t);
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
				const t = Ve(e.stack, Ye.__wbindgen_malloc, Ye.__wbindgen_realloc), _ = Ze;
				Me().setInt32(n + 4, _, !0), Me().setInt32(n + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return Oe(n) ? 0 : Se(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return Oe(n) ? 0 : Se(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return Oe(n) ? 0 : Se(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return Oe(n) ? 0 : Se(n);
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
				return Fe(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return De(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Ye.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
const ve = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ye.__wbg_aw5batch_free(n >>> 0, 1)), ke = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ye.__wbg_streamchunkresult_free(n >>> 0, 1)), Ae = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ye.__wbg_streamparseresult_free(n >>> 0, 1));
function Se(n) {
	const e = Ye.__externref_table_alloc();
	return Ye.__wbindgen_externrefs.set(e, n), e;
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
function Re(n, e) {
	return n >>>= 0, ze().subarray(n / 8, n / 8 + e);
}
function Ce(n, e) {
	return n >>>= 0, Ne().subarray(n / 4, n / 4 + e);
}
function Fe(n, e) {
	return n >>>= 0, Be().subarray(n / 1, n / 1 + e);
}
let Pe = null;
function Me() {
	return (null === Pe || !0 === Pe.buffer.detached || void 0 === Pe.buffer.detached && Pe.buffer !== Ye.memory.buffer) && (Pe = new DataView(Ye.memory.buffer)), Pe;
}
let Ie = null;
function ze() {
	return null !== Ie && 0 !== Ie.byteLength || (Ie = new Float64Array(Ye.memory.buffer)), Ie;
}
function De(n, e) {
	return function(n, e) {
		return He += e, He >= qe && (Xe = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Xe.decode(), He = e), Xe.decode(Be().subarray(n, n + e));
	}(n >>>= 0, e);
}
let Ue = null;
function Ne() {
	return null !== Ue && 0 !== Ue.byteLength || (Ue = new Uint32Array(Ye.memory.buffer)), Ue;
}
let We = null;
function Be() {
	return null !== We && 0 !== We.byteLength || (We = new Uint8Array(Ye.memory.buffer)), We;
}
function Ge(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = Se(t);
		Ye.__wbindgen_exn_store(n);
	}
}
function Oe(n) {
	return null == n;
}
function je(n, e) {
	const t = e(4 * n.length, 4) >>> 0;
	return Ne().set(n, t / 4), Ze = n.length, t;
}
function Ee(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return Be().set(n, t / 1), Ze = n.length, t;
}
function Te(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return ze().set(n, t / 8), Ze = n.length, t;
}
function Ve(n, e, t) {
	if (void 0 === t) {
		const t = $e.encode(n), _ = e(t.length, 1) >>> 0;
		return Be().subarray(_, _ + t.length).set(t), Ze = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = Be();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = Be().subarray(r + o, r + _);
		o += $e.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return Ze = o, r;
}
function Le(n) {
	const e = Ye.__wbindgen_externrefs.get(n);
	return Ye.__externref_table_dealloc(n), e;
}
let Xe = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
Xe.decode();
const qe = 2146435072;
let He = 0;
const $e = new TextEncoder();
"encodeInto" in $e || ($e.encodeInto = function(n, e) {
	const t = $e.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let Ye, Ze = 0;
function Ke(n, e) {
	return Ye = n.exports, Pe = null, Ie = null, Ue = null, We = null, Ye.__wbindgen_start(), Ye;
}
function Qe(n) {
	if (void 0 !== Ye) return Ye;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = ye();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Ke(new WebAssembly.Instance(n, e));
}
async function Je(n) {
	if (void 0 !== Ye) return Ye;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-DPQQGSBD.wasm", "" + import.meta.url));
	const e = ye();
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
	return Ke(t);
}
export { n as Aw5Batch, e as StreamChunkResult, t as StreamParseResult, _ as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actoursVersion, o as aggregateEpochSeries, c as analyzePhysicalActivityDay, a as classifyActimetricPreschoolWristRf, l as classifyActimetricPreschoolWristRfLagLead, s as classifyActimetricPreschoolWristRfLagLeadCalibrated, u as compareNonwearDetectorMasks, w as computeAnglez5s, g as computeCircadian, b as computeCircadianTyped, f as computeEnmo5s, d as computeMimsUnit, m as computeMimsUnitDataframe, h as computeMimsUnitTimingBreakdown, p as computeMimsUnitValues, y as computeNightDifficulty, v as computeNightDifficultyTyped, k as computeNightSignals, A as computeNightSignalsTyped, S as computeSleepMetrics, x as configureComputeMemoryBudgetV1, R as csvBufferAppend, C as csvBufferClear, Je as default, F as detectDetachFromAccelerationG, P as detectDeviceFormat, M as detectGgirHasptVariant, I as detectHdcza, z as detectNonwear, D as detectNonwearChoi2011, U as detectNonwearChoi2011Bouts, N as detectNonwearChoi2011Epoch, W as detectNonwearChoi2012, B as detectNonwearChoi2012Bouts, G as detectNonwearChoiBouts, O as detectNonwearUnified, j as detectNonwearUnifiedBatchTyped, E as epochAgreement, T as epochRawData, V as epochWithBandpass, L as executeHeroRuntime, X as exportNapAggregate, q as exportPeriodFigures, H as extractCapsense, $ as fuseNonwearMasks, Y as generateActiwareRestIntervals, Z as getComputeCapabilitiesV1, K as ggirConfigValues, Q as ggirSptDurationHours, J as ggirSummaryDenominator, nn as identifyGgirRData, Qe as initSync, en as installPanicHook, tn as isGeneactivFormat, _n as lstmSpectralFeatures30s, rn as neishabouriCounts, on as nonwearContributors, cn as parseActigraphCsv, an as parseActigraphCsvBuffered, ln as parseAw5, sn as parseCwa, un as parseEpochSeries, wn as parseGeneactivBin, gn as parseGeneactivCsv, bn as parseGeneactivCsvBuffered, fn as parseGt3x, dn as placeMarkers, mn as placeMarkersBatch, hn as placeMarkersTyped, pn as placeNonwearMarkers, yn as placeNonwearMarkersTyped, vn as prepareCompactPipelineOutcomeV1, kn as prepareCompactPipelineV1, An as processGeneactivRaw, Sn as processGt3xFull, xn as processGt3xFullWithEpoch, Rn as processGt3xPart1, Cn as processGt3xPart1WithEpoch, Fn as processRawXyz, Pn as processRawXyzImputed, Mn as processRawXyzImputedWithEpoch, In as rasterizePeriods, zn as readGgirMeta, Dn as recommended_chunk_size_mb, Un as reduceF64V1, Nn as resolveTimezone, Wn as reviewGgirResults, Bn as reviewNonwearFile, Gn as reviewNonwearTotals, On as runCompactPipelineOutcomeV1, jn as runCompactPipelineV1, En as runFullPipeline, Tn as runFullPipelineOutcomeV1, Vn as runFullPipelineV1, Ln as runGgirFromEpoch, Xn as runGgirPart3, qn as runMilestone, Hn as scoreAllDays, $n as scoreColeKripke, Yn as scoreConsensus, Zn as scoreConsensusMajority, Kn as scoreConsensusTyped, Qn as scoreEpochs, Jn as scoreEpochsTyped, ne as scoreGgirHasib, ee as scoreGgirHasibVariant, te as scoreGgirSib, _e as scoreSadeh, re as sha256StreamFeed, ie as sha256StreamFinish, oe as sha256StreamStart, ce as sleepRegularityIndex, ae as sleepWakeScores, le as streamParseFeed, se as streamParseFinish, ue as streamParseFinishChunk, we as streamParseFinishChunkWithProgress, ge as streamParseStart, be as streamParseStartData, fe as streamParseStartWithEpoch, de as summarizeActimetricPreschoolWristRfClasses, me as summarizeExportGroups, he as summarizePhysicalActivityTrace, pe as zeroCrossingCounts };
