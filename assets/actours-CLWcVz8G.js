function n(n, e) {
	return new Promise((_) => {
		n.addEventListener("message", function t({ data: r }) {
			null != r && r.type === e && (n.removeEventListener("message", t), _(r));
		});
	});
}
n(self, "wasm_bindgen_worker_init").then(async (n) => {
	const e = await import(n.mainJS);
	await e.default({
		module_or_path: n.module,
		memory: n.memory
	}), postMessage({ type: "wasm_bindgen_worker_ready" }), e.wbg_rayon_start_worker(n.receiver);
});
var e = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, J_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		xt.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = xt.aw5batch_new(n);
		if (e[2]) throw vt(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, J_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), r = Dt;
		var i = dt(_) ? 0 : yt(_, xt.__wbindgen_malloc, xt.__wbindgen_realloc), o = Dt;
		const c = xt.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw vt(c[1]);
		return vt(c[0]);
	}
	subjects(n) {
		const e = xt.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw vt(e[1]);
		return vt(e[0]);
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, $_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, $_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		xt.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = xt.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = xt.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = xt.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = xt.streamchunkresult_axisX(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = xt.streamchunkresult_axisY(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = xt.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== xt.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = xt.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = at(n[0], n[1]).slice(), xt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = xt.streamchunkresult_counts(this.__wbg_ptr);
		var e = tt(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = xt.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = tt(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = xt.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = xt.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = xt.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = xt.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return xt.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = xt.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = xt.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== xt.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = xt.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = at(n[0], n[1]).slice(), xt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = xt.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = xt.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = xt.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== xt.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return xt.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return xt.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return xt.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = xt.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = tt(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = xt.streamchunkresult_temperature(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = xt.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = xt.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = xt.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = xt.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = xt.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = xt.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var t = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, Y_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Y_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		xt.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = xt.streamparseresult_axisX(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = xt.streamparseresult_axisY(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = xt.streamparseresult_axisZ(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== xt.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = xt.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = at(n[0], n[1]).slice(), xt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return xt.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== xt.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return xt.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return xt.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = xt.streamparseresult_temperature(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = xt.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = xt.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return xt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function r(n) {
	const e = xt.actiwareIntervalStatistics(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function i(n, e, _) {
	const t = xt.actiwareSleepIntervals(n, e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function o(n, e) {
	const _ = xt.actiwareWakeThreshold(n, e);
	if (_[3]) throw vt(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function c() {
	let n, e;
	try {
		const _ = xt.actoursVersion();
		return n = _[0], e = _[1], at(_[0], _[1]);
	} finally {
		xt.__wbindgen_free(n, e, 1);
	}
}
function l(n) {
	const e = xt.aggregateEpochSeries(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function a(n) {
	const e = ht(n, xt.__wbindgen_malloc), _ = Dt, t = xt.analysisDatesOf(e, _);
	var r = _t(t[0], t[1]).slice();
	return xt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function s(n, e) {
	const _ = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), t = Dt, r = xt.analysisWindowBounds(_, t, !dt(e), dt(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = et(r[0], r[1]).slice(), xt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function u(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), i = Dt, o = xt.analysisWindowSlice(_, t, r, i);
	var c = tt(o[0], o[1]).slice();
	return xt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function w(n) {
	let e, _;
	try {
		const i = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), o = Dt, c = xt.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		xt.__wbindgen_free(e, _, 1);
	}
}
function g(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = ht(e, xt.__wbindgen_malloc), c = Dt, l = ht(_, xt.__wbindgen_malloc), a = Dt, s = xt.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw vt(s[2]);
	var u = rt(s[0], s[1]).slice();
	return xt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function b(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = ht(e, xt.__wbindgen_malloc), c = Dt, l = ht(_, xt.__wbindgen_malloc), a = Dt, s = xt.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw vt(s[2]);
	var u = rt(s[0], s[1]).slice();
	return xt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function d(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = ht(e, xt.__wbindgen_malloc), c = Dt, l = ht(_, xt.__wbindgen_malloc), a = Dt, s = xt.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw vt(s[2]);
	var u = rt(s[0], s[1]).slice();
	return xt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function f(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = ht(e, xt.__wbindgen_malloc), c = Dt;
	return xt.clippedUnionHours(r, i, o, c, _, t);
}
function m(n, e) {
	const _ = xt.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw vt(_[1]);
	return vt(_[0]);
}
function h(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = ht(e, xt.__wbindgen_malloc), c = Dt, l = ht(_, xt.__wbindgen_malloc), a = Dt, s = xt.computeAnglez5s(r, i, o, c, l, a, t);
	var u = et(s[0], s[1]).slice();
	return xt.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function p(n) {
	let e, _;
	try {
		const i = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), o = Dt, c = xt.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		xt.__wbindgen_free(e, _, 1);
	}
}
function y(n, e, _, t, r, i, o) {
	const c = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), l = Dt, a = ht(e, xt.__wbindgen_malloc), s = Dt, u = ft(_, xt.__wbindgen_malloc), w = Dt, g = ht(t, xt.__wbindgen_malloc), b = Dt, d = ft(r, xt.__wbindgen_malloc), f = Dt, m = mt(i, xt.__wbindgen_malloc), h = Dt, p = ft(o, xt.__wbindgen_malloc), y = Dt, v = xt.computeCircadianTyped(c, l, a, s, u, w, g, b, d, f, m, h, p, y);
	if (v[2]) throw vt(v[1]);
	return vt(v[0]);
}
function v(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = ht(e, xt.__wbindgen_malloc), c = Dt, l = ht(_, xt.__wbindgen_malloc), a = Dt, s = xt.computeEnmo5s(r, i, o, c, l, a, t);
	var u = et(s[0], s[1]).slice();
	return xt.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function k(n, e, _, t, r) {
	const i = ht(n, xt.__wbindgen_malloc), o = Dt, c = ht(e, xt.__wbindgen_malloc), l = Dt, a = ht(_, xt.__wbindgen_malloc), s = Dt, u = xt.computeMimsUnit(i, o, c, l, a, s, t, r);
	if (u[2]) throw vt(u[1]);
	return vt(u[0]);
}
function S(n, e, _, t, r) {
	const i = ht(n, xt.__wbindgen_malloc), o = Dt, c = ht(e, xt.__wbindgen_malloc), l = Dt, a = ht(_, xt.__wbindgen_malloc), s = Dt, u = ht(t, xt.__wbindgen_malloc), w = Dt, g = xt.computeMimsUnitDataframe(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw vt(g[1]);
	return vt(g[0]);
}
function R(n, e, _, t, r) {
	const i = ht(n, xt.__wbindgen_malloc), o = Dt, c = ht(e, xt.__wbindgen_malloc), l = Dt, a = ht(_, xt.__wbindgen_malloc), s = Dt, u = xt.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, r);
	if (u[2]) throw vt(u[1]);
	return vt(u[0]);
}
function C(n, e, _, t, r) {
	const i = ht(n, xt.__wbindgen_malloc), o = Dt, c = ht(e, xt.__wbindgen_malloc), l = Dt, a = ht(_, xt.__wbindgen_malloc), s = Dt, u = xt.computeMimsUnitValues(i, o, c, l, a, s, t, r);
	if (u[3]) throw vt(u[2]);
	var w = et(u[0], u[1]).slice();
	return xt.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function A(n) {
	let e, _;
	try {
		const i = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), o = Dt, c = xt.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		xt.__wbindgen_free(e, _, 1);
	}
}
function x(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), y = Dt, v = ht(e, xt.__wbindgen_malloc), k = Dt, S = ft(_, xt.__wbindgen_malloc), R = Dt, C = ht(t, xt.__wbindgen_malloc), A = Dt, x = ft(r, xt.__wbindgen_malloc), D = Dt, P = mt(i, xt.__wbindgen_malloc), M = Dt, F = ft(o, xt.__wbindgen_malloc), W = Dt, I = mt(c, xt.__wbindgen_malloc), U = Dt, z = ft(l, xt.__wbindgen_malloc), O = Dt, N = ht(a, xt.__wbindgen_malloc), T = Dt, G = ft(s, xt.__wbindgen_malloc), B = Dt, E = ht(u, xt.__wbindgen_malloc), j = Dt, L = ft(w, xt.__wbindgen_malloc), V = Dt, H = ht(g, xt.__wbindgen_malloc), X = Dt, q = ft(b, xt.__wbindgen_malloc), J = Dt, $ = ht(d, xt.__wbindgen_malloc), Y = Dt, Z = ft(f, xt.__wbindgen_malloc), K = Dt, Q = mt(m, xt.__wbindgen_malloc), nn = Dt, en = ft(h, xt.__wbindgen_malloc), _n = Dt, tn = xt.computeNightDifficultyTyped(p, y, v, k, S, R, C, A, x, D, P, M, F, W, I, U, z, O, N, T, G, B, E, j, L, V, H, X, q, J, $, Y, Z, K, Q, nn, en, _n);
	if (tn[2]) throw vt(tn[1]);
	return vt(tn[0]);
}
function D(n) {
	let e, _;
	try {
		const i = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), o = Dt, c = xt.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		xt.__wbindgen_free(e, _, 1);
	}
}
function P(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), y = Dt, v = ht(e, xt.__wbindgen_malloc), k = Dt, S = ft(_, xt.__wbindgen_malloc), R = Dt, C = ht(t, xt.__wbindgen_malloc), A = Dt, x = ft(r, xt.__wbindgen_malloc), D = Dt, P = mt(i, xt.__wbindgen_malloc), M = Dt, F = ft(o, xt.__wbindgen_malloc), W = Dt, I = mt(c, xt.__wbindgen_malloc), U = Dt, z = ft(l, xt.__wbindgen_malloc), O = Dt, N = ht(a, xt.__wbindgen_malloc), T = Dt, G = ft(s, xt.__wbindgen_malloc), B = Dt, E = ht(u, xt.__wbindgen_malloc), j = Dt, L = ft(w, xt.__wbindgen_malloc), V = Dt, H = ht(g, xt.__wbindgen_malloc), X = Dt, q = ft(b, xt.__wbindgen_malloc), J = Dt, $ = ht(d, xt.__wbindgen_malloc), Y = Dt, Z = ft(f, xt.__wbindgen_malloc), K = Dt, Q = mt(m, xt.__wbindgen_malloc), nn = Dt, en = ft(h, xt.__wbindgen_malloc), _n = Dt, tn = xt.computeNightSignalsTyped(p, y, v, k, S, R, C, A, x, D, P, M, F, W, I, U, z, O, N, T, G, B, E, j, L, V, H, X, q, J, $, Y, Z, K, Q, nn, en, _n);
	if (tn[2]) throw vt(tn[1]);
	return vt(tn[0]);
}
function M(n, e, _) {
	const t = mt(n, xt.__wbindgen_malloc), r = Dt, i = ht(e, xt.__wbindgen_malloc), o = Dt, c = xt.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw vt(c[1]);
	return vt(c[0]);
}
function F(n) {
	const e = xt.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function W(n) {
	const e = xt.consensusDisagreementDetail(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function I(n) {
	const e = xt.consensusDisagreements(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function U(n) {
	const e = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), _ = Dt, t = xt.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function z(n) {
	const e = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), _ = Dt, t = xt.convertScreensRedcapDiary(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function O(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt;
	xt.csvBufferAppend(e, _);
}
function N(n) {
	xt.csvBufferClear(n);
}
function T(n, e) {
	const _ = xt.cutpointEpochCompatibility(n, e);
	if (_[2]) throw vt(_[1]);
	return vt(_[0]);
}
function G(n, e, _, t, r) {
	const i = ht(n, xt.__wbindgen_malloc), o = Dt, c = xt.cutpointToneCodes(i, o, e, _, t, r);
	var l = rt(c[0], c[1]).slice();
	return xt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = xt.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = at(r[0], r[1]).slice(), xt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function E(n, e, _, t) {
	return 0 !== xt.cutpointsValid(n, e, _, t);
}
function j(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = ft(e, xt.__wbindgen_malloc), i = Dt, o = xt.describeColumns(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return vt(o[0]);
}
function L(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = ht(e, xt.__wbindgen_malloc), i = Dt, o = xt.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw vt(o[2]);
	var c = rt(o[0], o[1]).slice();
	return xt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function V(n, e) {
	let _, t;
	try {
		const r = mt(n, xt.__wbindgen_malloc), i = Dt, o = yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), c = Dt, l = xt.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], at(l[0], l[1]);
	} finally {
		xt.__wbindgen_free(_, t, 1);
	}
}
function H(n) {
	const e = xt.detectGgirHasptVariant(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function X(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt;
	var o = dt(e) ? 0 : yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), c = Dt, l = dt(_) ? 0 : ht(_, xt.__wbindgen_malloc), a = Dt, s = dt(t) ? 0 : ht(t, xt.__wbindgen_malloc), u = Dt;
	return xt.detectHdcza(r, i, o, c, l, a, s, u);
}
function q(n) {
	const e = ht(n, xt.__wbindgen_malloc), _ = Dt;
	return 0 !== xt.detectHourClockJumpMs(e, _);
}
function J(n) {
	const e = ht(n, xt.__wbindgen_malloc), _ = Dt, t = xt.detectNonwear(e, _);
	var r = rt(t[0], t[1]).slice();
	return xt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = ht(n, xt.__wbindgen_malloc), _ = Dt, t = xt.detectNonwearChoi2011(e, _);
	var r = rt(t[0], t[1]).slice();
	return xt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Y(n) {
	const e = ht(n, xt.__wbindgen_malloc), _ = Dt, t = xt.detectNonwearChoi2011Bouts(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function Z(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = xt.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw vt(r[2]);
	var i = rt(r[0], r[1]).slice();
	return xt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = ht(n, xt.__wbindgen_malloc), _ = Dt, t = xt.detectNonwearChoi2012(e, _);
	var r = rt(t[0], t[1]).slice();
	return xt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Q(n) {
	const e = ht(n, xt.__wbindgen_malloc), _ = Dt, t = xt.detectNonwearChoi2012Bouts(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function nn(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = xt.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw vt(r[2]);
	var i = rt(r[0], r[1]).slice();
	return xt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function en(n) {
	const e = ht(n, xt.__wbindgen_malloc), _ = Dt, t = xt.detectNonwearChoiBouts(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function _n(n) {
	let e, _;
	try {
		const i = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), o = Dt, c = xt.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		xt.__wbindgen_free(e, _, 1);
	}
}
function tn(n, e, _, t, r, i, o) {
	const c = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), l = Dt, a = yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), s = Dt, u = ht(_, xt.__wbindgen_malloc), w = Dt, g = ht(t, xt.__wbindgen_malloc), b = Dt, d = ht(r, xt.__wbindgen_malloc), f = Dt, m = xt.detectNonwearUnifiedBatchTyped(c, l, a, s, u, w, g, b, d, f, i, o);
	if (m[2]) throw vt(m[1]);
	return vt(m[0]);
}
function rn(n, e, _) {
	const t = xt.dstPlaceholderRuns(n, e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function on(n, e, _, t) {
	const r = xt.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = et(r[0], r[1]).slice(), xt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function cn(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = ht(e, xt.__wbindgen_malloc), i = Dt, o = xt.epochAgreement(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return vt(o[0]);
}
function ln(n, e, _, t, r) {
	const i = ht(n, xt.__wbindgen_malloc), o = Dt, c = ht(e, xt.__wbindgen_malloc), l = Dt, a = ht(_, xt.__wbindgen_malloc), s = Dt, u = ht(t, xt.__wbindgen_malloc), w = Dt, g = xt.epochRawData(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw vt(g[1]);
	return vt(g[0]);
}
function an(n, e, _) {
	const t = ht(n, xt.__wbindgen_malloc), r = Dt, i = ht(e, xt.__wbindgen_malloc), o = Dt, c = xt.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw vt(c[1]);
	return vt(c[0]);
}
function sn(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = xt.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = tt(o[0], o[1]).slice(), xt.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function un(n, e) {
	let _, t;
	try {
		const o = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), c = Dt, l = yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), a = Dt, s = xt.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, vt(s[2]);
		return _ = r, t = i, at(r, i);
	} finally {
		xt.__wbindgen_free(_, t, 1);
	}
}
function wn(n) {
	const e = xt.exportNapAggregate(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function gn(n, e, _) {
	const t = xt.exportPeriodFigures(!dt(n), dt(n) ? 0 : n, !dt(e), dt(e) ? 0 : e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function bn(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.extractCapsense(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function dn(n, e, _, t, r) {
	const i = ht(n, xt.__wbindgen_malloc), o = Dt, c = ht(e, xt.__wbindgen_malloc), l = Dt, a = ht(_, xt.__wbindgen_malloc), s = Dt, u = yt(r, xt.__wbindgen_malloc, xt.__wbindgen_realloc), w = Dt, g = xt.foldOntoGrid(i, o, c, l, a, s, t, u, w);
	if (g[3]) throw vt(g[2]);
	var b = et(g[0], g[1]).slice();
	return xt.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function fn(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = yt(t, xt.__wbindgen_malloc, xt.__wbindgen_realloc), c = Dt, l = xt.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw vt(l[2]);
	var a = et(l[0], l[1]).slice();
	return xt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function mn(n, e, _, t, r) {
	const i = mt(_, xt.__wbindgen_malloc), o = Dt, c = ht(t, xt.__wbindgen_malloc), l = Dt, a = xt.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw vt(a[1]);
	return vt(a[0]);
}
function hn(n, e, _, t, r, i) {
	const o = ht(_, xt.__wbindgen_malloc), c = Dt, l = ht(t, xt.__wbindgen_malloc), a = Dt, s = yt(i, xt.__wbindgen_malloc, xt.__wbindgen_realloc), u = Dt, w = xt.foldUniformOntoGrid(n, e, o, c, l, a, r, s, u);
	if (w[3]) throw vt(w[2]);
	var g = et(w[0], w[1]).slice();
	return xt.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function pn(n) {
	const e = xt.fuseNonwearMasks(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function yn(n, e, _) {
	var t = dt(_) ? 0 : yt(_, xt.__wbindgen_malloc, xt.__wbindgen_realloc), r = Dt;
	const i = xt.generateActiwareRestIntervals(n, e, t, r);
	if (i[2]) throw vt(i[1]);
	return vt(i[0]);
}
function vn() {
	const n = xt.getComputeCapabilitiesV1();
	if (n[2]) throw vt(n[1]);
	return vt(n[0]);
}
function kn(n, e, _) {
	const t = xt.ggir5sWallClockMs(n, e, _);
	if (t[3]) throw vt(t[2]);
	var r = et(t[0], t[1]).slice();
	return xt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function Sn(n) {
	const e = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), _ = Dt, t = xt.ggirConfigValues(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function Rn(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt;
	var r = dt(e) ? 0 : ht(e, xt.__wbindgen_malloc), i = Dt;
	const o = xt.ggirDaysIncluded(_, t, r, i);
	var c = rt(o[0], o[1]).slice();
	return xt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function Cn(n, e) {
	const _ = mt(n, xt.__wbindgen_malloc), t = Dt;
	var r = dt(e) ? 0 : yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), i = Dt;
	const o = xt.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return vt(o[0]);
}
function An(n, e, _) {
	var t = dt(_) ? 0 : ht(_, xt.__wbindgen_malloc), r = Dt;
	const i = xt.ggirDstPlaceholderCuts(n, e, t, r);
	if (i[2]) throw vt(i[1]);
	return vt(i[0]);
}
function xn() {
	return xt.ggirIncludeDayCriterionHours();
}
function Dn(n, e, _, t) {
	const r = ft(n, xt.__wbindgen_malloc), i = Dt;
	var o = dt(t) ? 0 : ht(t, xt.__wbindgen_malloc), c = Dt;
	const l = xt.ggirIndicesToWallClockMs(r, i, e, _, o, c);
	if (l[3]) throw vt(l[2]);
	var a = et(l[0], l[1]).slice();
	return xt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function Pn(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = xt.ggirLabelsToStoredMs(_, t, e);
	if (r[3]) throw vt(r[2]);
	var i = et(r[0], r[1]).slice();
	return xt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Mn(n, e, _, t) {
	const r = pt(n, xt.__wbindgen_malloc), i = Dt, o = ht(e, xt.__wbindgen_malloc), c = Dt, l = ht(_, xt.__wbindgen_malloc), a = Dt, s = ht(t, xt.__wbindgen_malloc), u = Dt, w = xt.ggirManualNightClocks(r, i, o, c, l, a, s, u);
	if (w[2]) throw vt(w[1]);
	return vt(w[0]);
}
function Fn(n, e, _, t) {
	const r = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), i = Dt, o = yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), c = Dt, l = yt(_, xt.__wbindgen_malloc, xt.__wbindgen_realloc), a = Dt, s = xt.ggirSleeplogStoredClocks(r, i, o, c, l, a, t);
	if (s[3]) throw vt(s[2]);
	let u;
	return 0 !== s[0] && (u = _t(s[0], s[1]).slice(), xt.__wbindgen_free(s[0], 4 * s[1], 4)), u;
}
function Wn(n, e) {
	return xt.ggirSptDurationHours(n, e);
}
function In(n, e) {
	const _ = xt.ggirSummaryDenominator(n, e);
	if (_[2]) throw vt(_[1]);
	return vt(_[0]);
}
function Un(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = ht(e, xt.__wbindgen_malloc), i = Dt, o = xt.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function zn(n) {
	let e, _;
	try {
		const i = mt(n, xt.__wbindgen_malloc), o = Dt, c = xt.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		xt.__wbindgen_free(e, _, 1);
	}
}
function On(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = ht(e, xt.__wbindgen_malloc), c = Dt, l = ht(_, xt.__wbindgen_malloc), a = Dt, s = ht(t, xt.__wbindgen_malloc), u = Dt, w = xt.implausibilityReasons(r, i, o, c, l, a, s, u);
	if (w[2]) throw vt(w[1]);
	return vt(w[0]);
}
function Nn(n) {
	return xt.initThreadPool(n);
}
function Tn() {
	xt.installPanicHook();
}
function Gn(n) {
	const e = xt.interRaterReliability(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Bn(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = xt.irregularInternalDays(_, t, e);
	var i = _t(r[0], r[1]).slice();
	return xt.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function En(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt;
	return 0 !== xt.isGeneactivFormat(e, _);
}
function jn(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = ht(e, xt.__wbindgen_malloc), c = Dt, l = ht(_, xt.__wbindgen_malloc), a = Dt, s = xt.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw vt(s[1]);
	return vt(s[0]);
}
function Ln(n, e, _) {
	const t = ht(n, xt.__wbindgen_malloc), r = Dt, i = xt.markerIndexRange(t, r, e, _);
	var o = tt(i[0], i[1]).slice();
	return xt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Vn(n, e, _, t, r, i, o) {
	const c = ht(n, xt.__wbindgen_malloc), l = Dt, a = ht(e, xt.__wbindgen_malloc), s = Dt, u = xt.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (u[2]) throw vt(u[1]);
	return vt(u[0]);
}
function Hn(n) {
	const e = ht(n, xt.__wbindgen_malloc), _ = Dt, t = xt.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Xn(n, e, _, t) {
	const r = xt.metricWarnings(n, e, _, t);
	var i = rt(r[0], r[1]).slice();
	return xt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function qn(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = ht(e, xt.__wbindgen_malloc), i = Dt, o = xt.midSleepClockHours(_, t, r, i);
	var c = et(o[0], o[1]).slice();
	return xt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Jn(n, e, _, t, r) {
	const i = ht(n, xt.__wbindgen_malloc), o = Dt, c = ht(e, xt.__wbindgen_malloc), l = Dt, a = ht(_, xt.__wbindgen_malloc), s = Dt, u = xt.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw vt(u[1]);
	return vt(u[0]);
}
function $n(n) {
	const e = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), _ = Dt, t = xt.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = at(t[0], t[1]).slice(), xt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Yn(n, e, _, t, r) {
	const i = ht(_, xt.__wbindgen_malloc), o = Dt, c = ht(t, xt.__wbindgen_malloc), l = Dt, a = ht(r, xt.__wbindgen_malloc), s = Dt, u = xt.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (u[2]) throw vt(u[1]);
	return vt(u[0]);
}
function Zn(n, e, _, t) {
	let r, i;
	try {
		const l = ft(n, xt.__wbindgen_malloc), a = Dt, s = yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), u = Dt, w = xt.nonwearContributors(l, a, s, u, _, t);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, vt(w[2]);
		return r = o, i = c, at(o, c);
	} finally {
		xt.__wbindgen_free(r, i, 1);
	}
}
function Kn(n) {
	const e = ht(n, xt.__wbindgen_malloc), _ = Dt, t = xt.nonwearInSleepCounts(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function Qn(n) {
	const e = xt.nonwearSleepOverlap(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function ne(n, e, _) {
	const t = ht(n, xt.__wbindgen_malloc), r = Dt, i = ht(e, xt.__wbindgen_malloc), o = Dt, c = xt.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw vt(c[1]);
	return vt(c[0]);
}
function ee(n, e, _, t, r, i) {
	const o = yt(r, xt.__wbindgen_malloc, xt.__wbindgen_realloc), c = Dt, l = xt.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw vt(l[2]);
	var a = et(l[0], l[1]).slice();
	return xt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function _e(n, e) {
	const _ = mt(n, xt.__wbindgen_malloc), t = Dt, r = xt.parseActigraphCsv(_, t, e);
	if (r[2]) throw vt(r[1]);
	return vt(r[0]);
}
function te(n) {
	const e = xt.parseActigraphCsvBuffered(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function re(n, e, _, t) {
	const r = mt(n, xt.__wbindgen_malloc), i = Dt;
	var o = dt(e) ? 0 : yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), c = Dt, l = dt(t) ? 0 : yt(t, xt.__wbindgen_malloc, xt.__wbindgen_realloc), a = Dt;
	const s = xt.parseAw5(r, i, o, c, dt(_) ? 0 : K_(_), l, a);
	if (s[2]) throw vt(s[1]);
	return vt(s[0]);
}
function ie(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.parseCwa(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function oe(n, e) {
	const _ = mt(n, xt.__wbindgen_malloc), t = Dt, r = yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), i = Dt, o = xt.parseEpochSeries(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return vt(o[0]);
}
function ce(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.parseGeneactivBin(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function le(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.parseGeneactivCsv(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function ae() {
	const n = xt.parseGeneactivCsvBuffered();
	if (n[2]) throw vt(n[1]);
	return vt(n[0]);
}
function se(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.parseGt3x(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function ue(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = mt(e, xt.__wbindgen_malloc), c = Dt, l = mt(_, xt.__wbindgen_malloc), a = Dt, s = xt.participantValidity(r, i, o, c, l, a, t);
	if (s[2]) throw vt(s[1]);
	return vt(s[0]);
}
function we(n, e, _, t, r) {
	const i = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), o = Dt, c = ht(e, xt.__wbindgen_malloc), l = Dt;
	var a = dt(_) ? 0 : ht(_, xt.__wbindgen_malloc), s = Dt;
	const u = xt.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (u[2]) throw vt(u[1]);
	return vt(u[0]);
}
function ge(n) {
	let e, _;
	try {
		const i = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), o = Dt, c = xt.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		xt.__wbindgen_free(e, _, 1);
	}
}
function be(n, e, _, t, r, i) {
	const o = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), c = Dt, l = ht(e, xt.__wbindgen_malloc), a = Dt, s = ht(_, xt.__wbindgen_malloc), u = Dt, w = mt(t, xt.__wbindgen_malloc), g = Dt, b = mt(r, xt.__wbindgen_malloc), d = Dt, f = yt(i, xt.__wbindgen_malloc, xt.__wbindgen_realloc), m = Dt, h = xt.placeMarkersBatch(o, c, l, a, s, u, w, g, b, d, f, m);
	if (h[2]) throw vt(h[1]);
	return vt(h[0]);
}
function de(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), y = Dt, v = ht(e, xt.__wbindgen_malloc), k = Dt, S = ft(_, xt.__wbindgen_malloc), R = Dt, C = ht(t, xt.__wbindgen_malloc), A = Dt, x = ft(r, xt.__wbindgen_malloc), D = Dt, P = mt(i, xt.__wbindgen_malloc), M = Dt, F = ft(o, xt.__wbindgen_malloc), W = Dt, I = mt(c, xt.__wbindgen_malloc), U = Dt, z = ft(l, xt.__wbindgen_malloc), O = Dt, N = ht(a, xt.__wbindgen_malloc), T = Dt, G = ft(s, xt.__wbindgen_malloc), B = Dt, E = ht(u, xt.__wbindgen_malloc), j = Dt, L = ft(w, xt.__wbindgen_malloc), V = Dt, H = ht(g, xt.__wbindgen_malloc), X = Dt, q = ft(b, xt.__wbindgen_malloc), J = Dt, $ = ht(d, xt.__wbindgen_malloc), Y = Dt, Z = ft(f, xt.__wbindgen_malloc), K = Dt, Q = mt(m, xt.__wbindgen_malloc), nn = Dt, en = ft(h, xt.__wbindgen_malloc), _n = Dt, tn = xt.placeMarkersTyped(p, y, v, k, S, R, C, A, x, D, P, M, F, W, I, U, z, O, N, T, G, B, E, j, L, V, H, X, q, J, $, Y, Z, K, Q, nn, en, _n);
	if (tn[2]) throw vt(tn[1]);
	return vt(tn[0]);
}
function fe(n) {
	let e, _;
	try {
		const i = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), o = Dt, c = xt.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		xt.__wbindgen_free(e, _, 1);
	}
}
function me(n, e, _, t) {
	const r = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), i = Dt, o = ht(e, xt.__wbindgen_malloc), c = Dt, l = ht(_, xt.__wbindgen_malloc), a = Dt, s = mt(t, xt.__wbindgen_malloc), u = Dt, w = xt.placeNonwearMarkersTyped(r, i, o, c, l, a, s, u);
	if (w[2]) throw vt(w[1]);
	return vt(w[0]);
}
function he(n) {
	const e = xt.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function pe(n) {
	const e = xt.prepareCompactPipelineV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function ye(n, e, _, t, r, i, o) {
	const c = ht(n, xt.__wbindgen_malloc), l = Dt, a = ht(e, xt.__wbindgen_malloc), s = Dt, u = ht(_, xt.__wbindgen_malloc), w = Dt, g = ht(t, xt.__wbindgen_malloc), b = Dt;
	var d = dt(o) ? 0 : yt(o, xt.__wbindgen_malloc, xt.__wbindgen_realloc), f = Dt;
	const m = xt.processGeneactivRaw(c, l, a, s, u, w, g, b, r, i, d, f);
	if (m[2]) throw vt(m[1]);
	return vt(m[0]);
}
function ve(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.processGt3xFull(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function ke(n, e) {
	const _ = mt(n, xt.__wbindgen_malloc), t = Dt, r = xt.processGt3xFullWithEpoch(_, t, e);
	if (r[2]) throw vt(r[1]);
	return vt(r[0]);
}
function Se(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.processGt3xPart1(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function Re(n, e) {
	const _ = mt(n, xt.__wbindgen_malloc), t = Dt, r = xt.processGt3xPart1WithEpoch(_, t, e);
	if (r[2]) throw vt(r[1]);
	return vt(r[0]);
}
function Ce(n, e, _, t, r, i) {
	const o = ht(n, xt.__wbindgen_malloc), c = Dt, l = ht(e, xt.__wbindgen_malloc), a = Dt, s = ht(_, xt.__wbindgen_malloc), u = Dt;
	var w = dt(i) ? 0 : yt(i, xt.__wbindgen_malloc, xt.__wbindgen_realloc), g = Dt;
	const b = xt.processRawXyz(o, c, l, a, s, u, t, r, w, g);
	if (b[2]) throw vt(b[1]);
	return vt(b[0]);
}
function Ae(n, e, _, t, r, i) {
	const o = ht(n, xt.__wbindgen_malloc), c = Dt, l = ht(e, xt.__wbindgen_malloc), a = Dt, s = ht(_, xt.__wbindgen_malloc), u = Dt, w = ht(t, xt.__wbindgen_malloc), g = Dt;
	var b = dt(i) ? 0 : yt(i, xt.__wbindgen_malloc, xt.__wbindgen_realloc), d = Dt;
	const f = xt.processRawXyzImputed(o, c, l, a, s, u, w, g, r, b, d);
	if (f[2]) throw vt(f[1]);
	return vt(f[0]);
}
function xe(n, e, _, t, r, i, o) {
	const c = ht(n, xt.__wbindgen_malloc), l = Dt, a = ht(e, xt.__wbindgen_malloc), s = Dt, u = ht(_, xt.__wbindgen_malloc), w = Dt, g = ht(t, xt.__wbindgen_malloc), b = Dt;
	var d = dt(i) ? 0 : yt(i, xt.__wbindgen_malloc, xt.__wbindgen_realloc), f = Dt;
	const m = xt.processRawXyzImputedWithEpoch(c, l, a, s, u, w, g, b, r, d, f, o);
	if (m[2]) throw vt(m[1]);
	return vt(m[0]);
}
function De(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = mt(e, xt.__wbindgen_malloc), c = Dt, l = ht(t, xt.__wbindgen_malloc), a = Dt, s = xt.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var u = rt(s[0], s[1]).slice();
	return xt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function Pe(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = ht(e, xt.__wbindgen_malloc), c = Dt, l = ht(_, xt.__wbindgen_malloc), a = Dt, s = xt.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw vt(s[1]);
	return vt(s[0]);
}
function Me(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.readGgirMeta(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function Fe() {
	return xt.recommended_chunk_size_mb() >>> 0;
}
function We(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), i = Dt, o = xt.reduceF64V1(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return o[0];
}
function Ie(n) {
	const e = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), _ = Dt, t = xt.resolveTimezone(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function Ue(n, e, _) {
	const t = ht(n, xt.__wbindgen_malloc), r = Dt, i = ht(e, xt.__wbindgen_malloc), o = Dt, c = ft(_, xt.__wbindgen_malloc), l = Dt, a = xt.restoredDstRuns(t, r, i, o, c, l);
	if (a[2]) throw vt(a[1]);
	return vt(a[0]);
}
function ze(n, e, _, t, r, i, o, c, l, a, s) {
	const u = mt(n, xt.__wbindgen_malloc), w = Dt, g = yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), b = Dt;
	var d = dt(_) ? 0 : mt(_, xt.__wbindgen_malloc), f = Dt, m = dt(t) ? 0 : mt(t, xt.__wbindgen_malloc), h = Dt, p = dt(r) ? 0 : mt(r, xt.__wbindgen_malloc), y = Dt, v = dt(i) ? 0 : mt(i, xt.__wbindgen_malloc), k = Dt, S = dt(o) ? 0 : mt(o, xt.__wbindgen_malloc), R = Dt, C = dt(c) ? 0 : yt(c, xt.__wbindgen_malloc, xt.__wbindgen_realloc), A = Dt, x = dt(l) ? 0 : yt(l, xt.__wbindgen_malloc, xt.__wbindgen_realloc), D = Dt;
	const P = xt.reviewGgirResults(u, w, g, b, d, f, m, h, p, y, v, k, S, R, C, A, x, D, a, s);
	if (P[2]) throw vt(P[1]);
	return vt(P[0]);
}
function Oe(n) {
	const e = xt.reviewNonwearFile(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Ne(n) {
	const e = xt.reviewNonwearTotals(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Te(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = xt.roundCountStorage(_, t, e);
	var i = et(r[0], r[1]).slice();
	return xt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Ge(n) {
	const e = xt.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Be(n) {
	const e = xt.runCompactPipelineV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Ee(n, e) {
	const _ = xt.runFullPipeline(n, e);
	if (_[2]) throw vt(_[1]);
	return vt(_[0]);
}
function je(n) {
	const e = xt.runFullPipelineOutcomeV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Le(n) {
	const e = xt.runFullPipelineV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Ve(n, e) {
	const _ = xt.runGgirFromEpoch(n, e);
	if (_[2]) throw vt(_[1]);
	return vt(_[0]);
}
function He(n) {
	const e = xt.runGgirPart3(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Xe(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.runMilestone(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function qe(n) {
	const e = xt.scoreAllDays(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Je(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = xt.scoreColeKripke(_, t, e);
	var i = rt(r[0], r[1]).slice();
	return xt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function $e(n) {
	let e, _;
	try {
		const i = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), o = Dt, c = xt.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		xt.__wbindgen_free(e, _, 1);
	}
}
function Ye(n) {
	const e = xt.scoreConsensusMajority(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Ze(n, e, _) {
	const t = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), r = Dt, i = mt(e, xt.__wbindgen_malloc), o = Dt, c = ft(_, xt.__wbindgen_malloc), l = Dt, a = xt.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw vt(a[1]);
	return vt(a[0]);
}
function Ke(n) {
	let e, _;
	try {
		const i = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), o = Dt, c = xt.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		xt.__wbindgen_free(e, _, 1);
	}
}
function Qe(n, e, _, t, r, i) {
	const o = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), c = Dt, l = ht(e, xt.__wbindgen_malloc), a = Dt, s = ht(_, xt.__wbindgen_malloc), u = Dt, w = ht(t, xt.__wbindgen_malloc), g = Dt, b = xt.scoreEpochsTyped(o, c, l, a, s, u, w, g, r, i);
	if (b[2]) throw vt(b[1]);
	return vt(b[0]);
}
function n_(n) {
	const e = ht(n, xt.__wbindgen_malloc), _ = Dt, t = xt.scoreGgirHasib(e, _);
	var r = rt(t[0], t[1]).slice();
	return xt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function e_(n) {
	const e = xt.scoreGgirHasibVariant(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function __(n, e, _) {
	const t = ht(n, xt.__wbindgen_malloc), r = Dt, i = ht(e, xt.__wbindgen_malloc), o = Dt, c = xt.scoreGgirSib(t, r, i, o, _);
	if (c[2]) throw vt(c[1]);
	return vt(c[0]);
}
function t_(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = xt.scoreSadeh(_, t, e);
	var i = rt(r[0], r[1]).slice();
	return xt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function r_(n) {
	const e = xt.settleManualNonwearNights(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function i_(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.sha256StreamFeed(e, _);
	if (t[1]) throw vt(t[0]);
}
function o_() {
	let n, e;
	try {
		const r = xt.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, vt(r[2]);
		return n = _, e = t, at(_, t);
	} finally {
		xt.__wbindgen_free(n, e, 1);
	}
}
function c_() {
	xt.sha256StreamStart();
}
function l_(n, e) {
	const _ = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), t = Dt, r = xt.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = at(r[0], r[1]).slice(), xt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function a_(n, e, _, t, r) {
	const i = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), o = Dt, c = ht(e, xt.__wbindgen_malloc), l = Dt, a = ft(_, xt.__wbindgen_malloc), s = Dt, u = ht(t, xt.__wbindgen_malloc), w = Dt, g = ft(r, xt.__wbindgen_malloc), b = Dt, d = xt.sleepRegularityIndex(i, o, c, l, a, s, u, w, g, b);
	if (d[3]) throw vt(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function s_(n, e) {
	const _ = xt.sleepWakeScores(n, e);
	if (_[2]) throw vt(_[1]);
	return vt(_[0]);
}
function u_(n) {
	const e = pt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.sourceLabelsWallClockMs(e, _);
	var r = et(t[0], t[1]).slice();
	return xt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function w_(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = ht(e, xt.__wbindgen_malloc), c = Dt, l = xt.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function g_(n, e, _) {
	const t = ht(n, xt.__wbindgen_malloc), r = Dt, i = ht(_, xt.__wbindgen_malloc), o = Dt, c = xt.spliceDstPlaceholders(t, r, e, i, o);
	if (c[3]) throw vt(c[2]);
	let l;
	return 0 !== c[0] && (l = et(c[0], c[1]).slice(), xt.__wbindgen_free(c[0], 8 * c[1], 8)), l;
}
function b_(n) {
	return xt.startThreadPool(n);
}
function d_(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = mt(e, xt.__wbindgen_malloc), c = Dt, l = ht(_, xt.__wbindgen_malloc), a = Dt, s = ht(t, xt.__wbindgen_malloc), u = Dt, w = xt.statesInPeriods(r, i, o, c, l, a, s, u);
	var g = rt(w[0], w[1]).slice();
	return xt.__wbindgen_free(w[0], 1 * w[1], 1), g;
}
function f_(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = xt.storedToGgirLabelsMs(_, t, e);
	if (r[3]) throw vt(r[2]);
	var i = et(r[0], r[1]).slice();
	return xt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function m_(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.streamParseFeed(e, _);
	if (t[2]) throw vt(t[1]);
	return t[0] >>> 0;
}
function h_() {
	const n = xt.streamParseFinish();
	if (n[2]) throw vt(n[1]);
	return t.__wrap(n[0]);
}
function p_() {
	const n = xt.streamParseFinishChunk();
	if (n[2]) throw vt(n[1]);
	return _.__wrap(n[0]);
}
function y_(n) {
	const e = xt.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw vt(e[1]);
	return _.__wrap(e[0]);
}
function v_(n, e) {
	const _ = xt.streamParseStart(n, e);
	if (_[1]) throw vt(_[0]);
}
function k_(n, e) {
	const _ = xt.streamParseStartData(n, e);
	if (_[1]) throw vt(_[0]);
}
function S_(n, e, _) {
	const t = xt.streamParseStartWithEpoch(n, e, _);
	if (t[1]) throw vt(t[0]);
}
function R_(n, e) {
	const _ = mt(n, xt.__wbindgen_malloc), t = Dt, r = xt.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw vt(r[1]);
	return vt(r[0]);
}
function C_(n) {
	const e = xt.summarizeExportGroups(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function A_(n) {
	const e = xt.summarizePhysicalActivityDays(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function x_(n) {
	const e = xt.summarizePhysicalActivityTrace(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function D_() {
	return 0 !== xt.threadPoolReady();
}
function P_(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = xt.thresholdProbabilities(_, t, e);
	var i = rt(r[0], r[1]).slice();
	return xt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function M_(n) {
	const e = xt.timeSemantics(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function F_(n, e, _) {
	const t = ht(n, xt.__wbindgen_malloc), r = Dt, i = xt.timestampDiscontinuities(t, r, e, _);
	if (i[2]) throw vt(i[1]);
	return vt(i[0]);
}
function W_(n, e, _) {
	const t = xt.uniformTimestamps(n, e, _);
	var r = et(t[0], t[1]).slice();
	return xt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function I_(n, e) {
	const _ = xt.utcDatesInSpan(n, e);
	var t = _t(_[0], _[1]).slice();
	return xt.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function U_(n) {
	const e = ht(n, xt.__wbindgen_malloc), _ = Dt, t = xt.utcDayIndex(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function z_(n) {
	const e = mt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function O_(n, e) {
	const _ = ht(n, xt.__wbindgen_malloc), t = Dt, r = xt.validWearDays(_, t, e);
	if (r[3]) throw vt(r[2]);
	var i = rt(r[0], r[1]).slice();
	return xt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function N_(n, e, _) {
	const t = ht(n, xt.__wbindgen_malloc), r = Dt, i = xt.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw vt(i[1]);
	return vt(i[0]);
}
function T_(n) {
	const e = ht(n, xt.__wbindgen_malloc), _ = Dt, t = xt.wallClockLabels(e, _);
	var r = _t(t[0], t[1]).slice();
	return xt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function G_(n, e, _) {
	const t = mt(n, xt.__wbindgen_malloc), r = Dt, i = xt.wallMaskOntoGgirGrid(t, r, e, _);
	if (i[3]) throw vt(i[2]);
	var o = rt(i[0], i[1]).slice();
	return xt.__wbindgen_free(i[0], 1 * i[1], 1), o;
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var B_ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, Z_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Z_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		xt.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		xt.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return xt.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return xt.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return xt.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function E_(n) {
	xt.wbg_rayon_start_worker(n);
}
function j_(n, e) {
	const _ = yt(n, xt.__wbindgen_malloc, xt.__wbindgen_realloc), t = Dt;
	var r = dt(e) ? 0 : yt(e, xt.__wbindgen_malloc, xt.__wbindgen_realloc), i = Dt;
	const o = xt.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return vt(o[0]);
}
function L_(n) {
	const e = pt(n, xt.__wbindgen_malloc), _ = Dt, t = xt.weekendDates(e, _);
	var r = rt(t[0], t[1]).slice();
	return xt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function V_(n, e, _, t) {
	const r = ht(n, xt.__wbindgen_malloc), i = Dt, o = xt.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function H_(n, e, _, t, r) {
	const i = ht(n, xt.__wbindgen_malloc), o = Dt, c = ht(e, xt.__wbindgen_malloc), l = Dt, a = ht(_, xt.__wbindgen_malloc), s = Dt, u = xt.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw vt(u[1]);
	return vt(u[0]);
}
function X_(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(at(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = yt(String(e), xt.__wbindgen_malloc, xt.__wbindgen_realloc), t = Dt;
				ot().setInt32(n + 4, t, !0), ot().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				ot().setBigInt64(n + 8, dt(_) ? BigInt(0) : _, !0), ot().setInt32(n + 0, !dt(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return dt(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = yt(nt(e), xt.__wbindgen_malloc, xt.__wbindgen_realloc), t = Dt;
				ot().setInt32(n + 4, t, !0), ot().setInt32(n + 0, _, !0);
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
				return xt.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return At;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const _ = "number" == typeof e ? e : void 0;
				ot().setFloat64(n + 8, dt(_) ? 0 : _, !0), ot().setInt32(n + 0, !dt(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = dt(_) ? 0 : yt(_, xt.__wbindgen_malloc, xt.__wbindgen_realloc), r = Dt;
				ot().setInt32(n + 4, r, !0), ot().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(at(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return bt(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return bt(function(n, e, _, t) {
					return n.call(e, _, t);
				}, arguments);
			},
			__wbg_done_9158f7cc8751ba32: function(n) {
				return n.done;
			},
			__wbg_entries_e0b73aa8571ddb56: function(n) {
				return Object.entries(n);
			},
			__wbg_error_a6fa202b58aa1cd3: function(n, e) {
				let _, t;
				try {
					_ = n, t = e, console.error(at(n, e));
				} finally {
					xt.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return bt(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return bt(function(n, e) {
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
				} catch (_) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Float64Array_aa32a9a18a521df4: function(n) {
				let e;
				try {
					e = n instanceof Float64Array;
				} catch (_) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Map_1b76fd4635be43eb: function(n) {
				let e;
				try {
					e = n instanceof Map;
				} catch (_) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Uint8Array_152ba1f289edcf3f: function(n) {
				let e;
				try {
					e = n instanceof Uint8Array;
				} catch (_) {
					e = !1;
				}
				return e;
			},
			__wbg_instanceof_Window_cc64c86c8ef9e02b: function(n) {
				let e;
				try {
					e = n instanceof Window;
				} catch (_) {
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
			__wbg_new_34d45cc8e36aaead: function() {
				return /* @__PURE__ */ new Map();
			},
			__wbg_new_682678e2f47e32bc: function() {
				return new Array();
			},
			__wbg_new_aa8d0fa9762c29bd: function() {
				return /* @__PURE__ */ new Object();
			},
			__wbg_new_from_slice_01793f7edd3b321a: function(n, e) {
				return new Uint32Array(tt(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(et(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(rt(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return bt(function(n) {
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
				return bt(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(rt(n, e), _);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return bt(function(n, e, _) {
					return Reflect.set(n, e, _);
				}, arguments);
			},
			__wbg_set_3bf1de9fab0cd644: function(n, e, _) {
				n[e >>> 0] = _;
			},
			__wbg_set_6be42768c690e380: function(n, e, _) {
				n[e] = _;
			},
			__wbg_set_fde2cec06c23692b: function(n, e, _) {
				return n.set(e, _);
			},
			__wbg_set_index_2ca12d8345f872b3: function(n, e, _) {
				n[e >>> 0] = _;
			},
			__wbg_set_index_805dd976c110cd28: function(n, e, _) {
				n[e >>> 0] = _;
			},
			__wbg_slice_30ddef84546fd9d0: function(n, e, _) {
				return n.slice(e >>> 0, _ >>> 0);
			},
			__wbg_slice_fcdcd53ca169108d: function(n, e, _) {
				return n.slice(e >>> 0, _ >>> 0);
			},
			__wbg_stack_3b0d974bbf31e44f: function(n, e) {
				const _ = yt(e.stack, xt.__wbindgen_malloc, xt.__wbindgen_realloc), t = Dt;
				ot().setInt32(n + 4, t, !0), ot().setInt32(n + 0, _, !0);
			},
			__wbg_startWorkers_622cedd0d351664e: function(e, _, t) {
				return async function(e, _, t) {
					if (0 === t.numThreads()) throw new Error("num_threads must be > 0.");
					const r = {
						type: "wasm_bindgen_worker_init",
						module: e,
						memory: _,
						receiver: t.receiver(),
						mainJS: t.mainJS()
					};
					await Promise.all(Array.from({ length: t.numThreads() }, async () => {
						let e = await fetch(import.meta.url).then((n) => n.blob()), _ = URL.createObjectURL(e);
						const t = new Worker(_, { type: "module" });
						return t.postMessage(r), await n(t, "wasm_bindgen_worker_ready"), URL.revokeObjectURL(_), t;
					})), t.build();
				}(e, _, B_.__wrap(t));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return dt(n) ? 0 : K_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return dt(n) ? 0 : K_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return dt(n) ? 0 : K_(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return dt(n) ? 0 : K_(n);
			},
			__wbg_then_6701bb8428537e07: function(n, e) {
				return n.then(e);
			},
			__wbg_value_ee3a06f4579184fa: function(n) {
				return n.value;
			},
			__wbindgen_cast_0000000000000001: function(n, e) {
				return function(n, e, _) {
					const t = {
						a: n,
						b: e,
						cnt: 1
					}, r = (...n) => {
						t.cnt++;
						const e = t.a;
						t.a = 0;
						try {
							return _(e, t.b, ...n);
						} finally {
							t.a = e, r._wbg_cb_unref();
						}
					};
					return r._wbg_cb_unref = () => {
						0 === --t.cnt && (xt.__wbindgen_destroy_closure(t.a, t.b), t.a = 0, Q_.unregister(t));
					}, Q_.register(r, t, t), r;
				}(n, e, q_);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return rt(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return at(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = xt.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			},
			memory: e || new WebAssembly.Memory({
				initial: 180,
				maximum: 65536,
				shared: !0
			})
		}
	};
}
function q_(n, e, _) {
	xt.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, _);
}
Symbol.dispose && (B_.prototype[Symbol.dispose] = B_.prototype.free);
const J_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => xt.__wbg_aw5batch_free(n >>> 0, 1)), $_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => xt.__wbg_streamchunkresult_free(n >>> 0, 1)), Y_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => xt.__wbg_streamparseresult_free(n >>> 0, 1)), Z_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => xt.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function K_(n) {
	const e = xt.__externref_table_alloc();
	return xt.__wbindgen_externrefs.set(e, n), e;
}
const Q_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => xt.__wbindgen_destroy_closure(n.a, n.b));
function nt(n) {
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
		let _ = "[";
		e > 0 && (_ += nt(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + nt(n[t]);
		return _ += "]", _;
	}
	const _ = /\[object ([^\]]+)\]/.exec(toString.call(n));
	let t;
	if (!(_ && _.length > 1)) return toString.call(n);
	if (t = _[1], "Object" == t) try {
		return "Object(" + JSON.stringify(n) + ")";
	} catch (r) {
		return "Object";
	}
	return n instanceof Error ? `${n.name}: ${n.message}\n${n.stack}` : t;
}
function et(n, e) {
	return n >>>= 0, lt().subarray(n / 8, n / 8 + e);
}
function _t(n, e) {
	n >>>= 0;
	const _ = ot(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(xt.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return xt.__externref_drop_slice(n, e), t;
}
function tt(n, e) {
	return n >>>= 0, ut().subarray(n / 4, n / 4 + e);
}
function rt(n, e) {
	return n >>>= 0, gt().subarray(n / 1, n / 1 + e);
}
let it = null;
function ot() {
	return null !== it && it.buffer === xt.memory.buffer || (it = new DataView(xt.memory.buffer)), it;
}
let ct = null;
function lt() {
	return null !== ct && ct.buffer === xt.memory.buffer || (ct = new Float64Array(xt.memory.buffer)), ct;
}
function at(n, e) {
	return function(n, e) {
		return Rt += e, Rt >= St && (kt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), kt.decode(), Rt = e), kt.decode(gt().slice(n, n + e));
	}(n >>>= 0, e);
}
let st = null;
function ut() {
	return null !== st && st.buffer === xt.memory.buffer || (st = new Uint32Array(xt.memory.buffer)), st;
}
let wt = null;
function gt() {
	return null !== wt && wt.buffer === xt.memory.buffer || (wt = new Uint8Array(xt.memory.buffer)), wt;
}
function bt(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = K_(_);
		xt.__wbindgen_exn_store(n);
	}
}
function dt(n) {
	return null == n;
}
function ft(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return ut().set(n, _ / 4), Dt = n.length, _;
}
function mt(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return gt().set(n, _ / 1), Dt = n.length, _;
}
function ht(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return lt().set(n, _ / 8), Dt = n.length, _;
}
function pt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = K_(n[t]);
		ot().setUint32(_ + 4 * t, e, !0);
	}
	return Dt = n.length, _;
}
function yt(n, e, _) {
	if (void 0 === _) {
		const _ = Ct.encode(n), t = e(_.length, 1) >>> 0;
		return gt().subarray(t, t + _.length).set(_), Dt = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = gt();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = gt().subarray(r + o, r + t);
		o += Ct.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return Dt = o, r;
}
function vt(n) {
	const e = xt.__wbindgen_externrefs.get(n);
	return xt.__externref_table_dealloc(n), e;
}
let kt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
kt && kt.decode();
const St = 2146435072;
let Rt = 0;
const Ct = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
Ct && (Ct.encodeInto = function(n, e) {
	const _ = Ct.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let At, xt, Dt = 0;
function Pt(n, e, _) {
	if (xt = n.exports, At = e, it = null, ct = null, st = null, wt = null, void 0 !== _ && ("number" != typeof _ || 0 === _ || _ % 65536 != 0)) throw new Error("invalid stack size");
	return xt.__wbindgen_start(_), xt;
}
function Mt(n, e) {
	if (void 0 !== xt) return xt;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const t = X_(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Pt(new WebAssembly.Instance(n, t), n, _);
}
async function Ft(n, e) {
	if (void 0 !== xt) return xt;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-B1461Nh2.wasm", "" + import.meta.url));
	const t = X_(e);
	("string" == typeof n || "function" == typeof Request && n instanceof Request || "function" == typeof URL && n instanceof URL) && (n = fetch(n));
	const { instance: r, module: i } = await async function(n, e) {
		if ("function" == typeof Response && n instanceof Response) {
			if ("function" == typeof WebAssembly.instantiateStreaming) try {
				return await WebAssembly.instantiateStreaming(n, e);
			} catch (_) {
				if (!n.ok || !function(n) {
					switch (n) {
						case "basic":
						case "cors":
						case "default": return !0;
					}
					return !1;
				}(n.type) || "application/wasm" === n.headers.get("Content-Type")) throw _;
				console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _);
			}
			const t = await n.arrayBuffer();
			return await WebAssembly.instantiate(t, e);
		}
		{
			const _ = await WebAssembly.instantiate(n, e);
			return _ instanceof WebAssembly.Instance ? {
				instance: _,
				module: n
			} : _;
		}
	}(await n, t);
	return Pt(r, i, _);
}
export { e as Aw5Batch, _ as StreamChunkResult, t as StreamParseResult, r as actiwareIntervalStatistics, i as actiwareSleepIntervals, o as actiwareWakeThreshold, c as actoursVersion, l as aggregateEpochSeries, a as analysisDatesOf, s as analysisWindowBounds, u as analysisWindowSlice, w as analyzePhysicalActivityDay, g as classifyActimetricPreschoolWristRf, b as classifyActimetricPreschoolWristRfLagLead, d as classifyActimetricPreschoolWristRfLagLeadCalibrated, f as clippedUnionHours, m as compareNonwearDetectorMasks, h as computeAnglez5s, p as computeCircadian, y as computeCircadianTyped, v as computeEnmo5s, k as computeMimsUnit, S as computeMimsUnitDataframe, R as computeMimsUnitTimingBreakdown, C as computeMimsUnitValues, A as computeNightDifficulty, x as computeNightDifficultyTyped, D as computeNightSignals, P as computeNightSignalsTyped, M as computeSleepMetrics, F as configureComputeMemoryBudgetV1, W as consensusDisagreementDetail, I as consensusDisagreements, U as convertBedWakeDaysDiary, z as convertScreensRedcapDiary, O as csvBufferAppend, N as csvBufferClear, T as cutpointEpochCompatibility, G as cutpointToneCodes, B as cutpointsRefusal, E as cutpointsValid, Ft as default, j as describeColumns, L as detectDetachFromAccelerationG, V as detectDeviceFormat, H as detectGgirHasptVariant, X as detectHdcza, q as detectHourClockJumpMs, J as detectNonwear, $ as detectNonwearChoi2011, Y as detectNonwearChoi2011Bouts, Z as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, Q as detectNonwearChoi2012Bouts, nn as detectNonwearChoi2012Epoch, en as detectNonwearChoiBouts, _n as detectNonwearUnified, tn as detectNonwearUnifiedBatchTyped, rn as dstPlaceholderRuns, on as effectiveOverrideCutpoints, cn as epochAgreement, ln as epochRawData, an as epochWithBandpass, sn as epochsOverlapping, un as executeHeroRuntime, wn as exportNapAggregate, gn as exportPeriodFigures, bn as extractCapsense, dn as foldOntoGrid, fn as foldSampleBlocks, mn as foldSleepWakeVotes, hn as foldUniformOntoGrid, pn as fuseNonwearMasks, yn as generateActiwareRestIntervals, vn as getComputeCapabilitiesV1, kn as ggir5sWallClockMs, Sn as ggirConfigValues, Rn as ggirDaysIncluded, Cn as ggirDiaryLogShape, An as ggirDstPlaceholderCuts, xn as ggirIncludeDayCriterionHours, Dn as ggirIndicesToWallClockMs, Pn as ggirLabelsToStoredMs, Mn as ggirManualNightClocks, Fn as ggirSleeplogStoredClocks, Wn as ggirSptDurationHours, In as ggirSummaryDenominator, Un as gridOffsetWithin, zn as identifyGgirRData, On as implausibilityReasons, Mt as initSync, Nn as initThreadPool, Tn as installPanicHook, Gn as interRaterReliability, Bn as irregularInternalDays, En as isGeneactivFormat, jn as lstmSpectralFeatures30s, Ln as markerIndexRange, Vn as markerSleepOnsetOffset, Hn as medianGapSeconds, Xn as metricWarnings, qn as midSleepClockHours, Jn as neishabouriCounts, $n as nextDate, Yn as nightIntervalOverlap, Zn as nonwearContributors, Kn as nonwearInSleepCounts, Qn as nonwearSleepOverlap, ne as nonwearWeightRuns, ee as normalizeCutpoints, _e as parseActigraphCsv, te as parseActigraphCsvBuffered, re as parseAw5, ie as parseCwa, oe as parseEpochSeries, ce as parseGeneactivBin, le as parseGeneactivCsv, ae as parseGeneactivCsvBuffered, se as parseGt3x, ue as participantValidity, we as physicalActivitySeriesGrid, ge as placeMarkers, be as placeMarkersBatch, de as placeMarkersTyped, fe as placeNonwearMarkers, me as placeNonwearMarkersTyped, he as prepareCompactPipelineOutcomeV1, pe as prepareCompactPipelineV1, ye as processGeneactivRaw, ve as processGt3xFull, ke as processGt3xFullWithEpoch, Se as processGt3xPart1, Re as processGt3xPart1WithEpoch, Ce as processRawXyz, Ae as processRawXyzImputed, xe as processRawXyzImputedWithEpoch, De as projectLabelsOntoGrid, Pe as rasterizePeriods, Me as readGgirMeta, Fe as recommended_chunk_size_mb, We as reduceF64V1, Ie as resolveTimezone, Ue as restoredDstRuns, ze as reviewGgirResults, Oe as reviewNonwearFile, Ne as reviewNonwearTotals, Te as roundCountStorage, Ge as runCompactPipelineOutcomeV1, Be as runCompactPipelineV1, Ee as runFullPipeline, je as runFullPipelineOutcomeV1, Le as runFullPipelineV1, Ve as runGgirFromEpoch, He as runGgirPart3, Xe as runMilestone, qe as scoreAllDays, Je as scoreColeKripke, $e as scoreConsensus, Ye as scoreConsensusMajority, Ze as scoreConsensusTyped, Ke as scoreEpochs, Qe as scoreEpochsTyped, n_ as scoreGgirHasib, e_ as scoreGgirHasibVariant, __ as scoreGgirSib, t_ as scoreSadeh, r_ as settleManualNonwearNights, i_ as sha256StreamFeed, o_ as sha256StreamFinish, c_ as sha256StreamStart, l_ as shiftDate, a_ as sleepRegularityIndex, s_ as sleepWakeScores, u_ as sourceLabelsWallClockMs, w_ as spanFiniteMean, g_ as spliceDstPlaceholders, b_ as startThreadPool, d_ as statesInPeriods, f_ as storedToGgirLabelsMs, m_ as streamParseFeed, h_ as streamParseFinish, p_ as streamParseFinishChunk, y_ as streamParseFinishChunkWithProgress, v_ as streamParseStart, k_ as streamParseStartData, S_ as streamParseStartWithEpoch, R_ as summarizeActimetricPreschoolWristRfClasses, C_ as summarizeExportGroups, A_ as summarizePhysicalActivityDays, x_ as summarizePhysicalActivityTrace, D_ as threadPoolReady, P_ as thresholdProbabilities, M_ as timeSemantics, F_ as timestampDiscontinuities, W_ as uniformTimestamps, I_ as utcDatesInSpan, U_ as utcDayIndex, z_ as validStateFraction, O_ as validWearDays, N_ as wallClockDstPlaceholders, T_ as wallClockLabels, G_ as wallMaskOntoGgirGrid, B_ as wbg_rayon_PoolBuilder, E_ as wbg_rayon_start_worker, j_ as wearSiteHasptRouting, L_ as weekendDates, V_ as windowCoverage, H_ as zeroCrossingCounts };
