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
		return this.__wbg_ptr = 0, q_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		At.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = At.aw5batch_new(n);
		if (e[2]) throw yt(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, q_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), r = xt;
		var i = bt(_) ? 0 : pt(_, At.__wbindgen_malloc, At.__wbindgen_realloc), o = xt;
		const c = At.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw yt(c[1]);
		return yt(c[0]);
	}
	subjects(n) {
		const e = At.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw yt(e[1]);
		return yt(e[0]);
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, J_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, J_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		At.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = At.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = At.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = At.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = At.streamchunkresult_axisX(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = At.streamchunkresult_axisY(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = At.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== At.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = At.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = lt(n[0], n[1]).slice(), At.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = At.streamchunkresult_counts(this.__wbg_ptr);
		var e = _t(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = At.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = _t(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = At.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = At.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = At.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = tt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = At.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = tt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return At.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = At.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = At.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== At.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = At.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = lt(n[0], n[1]).slice(), At.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = At.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = At.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = At.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== At.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return At.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return At.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return At.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = At.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = _t(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = At.streamchunkresult_temperature(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = At.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = At.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = At.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = At.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = At.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = At.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var t = class n {
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
		At.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = At.streamparseresult_axisX(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = At.streamparseresult_axisY(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = At.streamparseresult_axisZ(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== At.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = At.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = lt(n[0], n[1]).slice(), At.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return At.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== At.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return At.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return At.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = At.streamparseresult_temperature(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = At.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = At.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return At.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function r(n) {
	const e = At.actiwareIntervalStatistics(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function i(n, e, _) {
	const t = At.actiwareSleepIntervals(n, e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function o(n, e) {
	const _ = At.actiwareWakeThreshold(n, e);
	if (_[3]) throw yt(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function c() {
	let n, e;
	try {
		const _ = At.actoursVersion();
		return n = _[0], e = _[1], lt(_[0], _[1]);
	} finally {
		At.__wbindgen_free(n, e, 1);
	}
}
function l(n) {
	const e = At.aggregateEpochSeries(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function a(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = xt, t = At.analysisDatesOf(e, _);
	var r = et(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function s(n, e) {
	const _ = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), t = xt, r = At.analysisWindowBounds(_, t, !bt(e), bt(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = nt(r[0], r[1]).slice(), At.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function u(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), i = xt, o = At.analysisWindowSlice(_, t, r, i);
	var c = _t(o[0], o[1]).slice();
	return At.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function w(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = xt, c = At.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function g(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = mt(e, At.__wbindgen_malloc), c = xt, l = mt(_, At.__wbindgen_malloc), a = xt, s = At.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw yt(s[2]);
	var u = tt(s[0], s[1]).slice();
	return At.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function b(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = mt(e, At.__wbindgen_malloc), c = xt, l = mt(_, At.__wbindgen_malloc), a = xt, s = At.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw yt(s[2]);
	var u = tt(s[0], s[1]).slice();
	return At.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function d(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = mt(e, At.__wbindgen_malloc), c = xt, l = mt(_, At.__wbindgen_malloc), a = xt, s = At.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw yt(s[2]);
	var u = tt(s[0], s[1]).slice();
	return At.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function f(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = mt(e, At.__wbindgen_malloc), c = xt;
	return At.clippedUnionHours(r, i, o, c, _, t);
}
function m(n, e) {
	const _ = At.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw yt(_[1]);
	return yt(_[0]);
}
function h(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = mt(e, At.__wbindgen_malloc), c = xt, l = mt(_, At.__wbindgen_malloc), a = xt, s = At.computeAnglez5s(r, i, o, c, l, a, t);
	var u = nt(s[0], s[1]).slice();
	return At.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function p(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = xt, c = At.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function y(n, e, _, t, r, i, o) {
	const c = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), l = xt, a = mt(e, At.__wbindgen_malloc), s = xt, u = dt(_, At.__wbindgen_malloc), w = xt, g = mt(t, At.__wbindgen_malloc), b = xt, d = dt(r, At.__wbindgen_malloc), f = xt, m = ft(i, At.__wbindgen_malloc), h = xt, p = dt(o, At.__wbindgen_malloc), y = xt, v = At.computeCircadianTyped(c, l, a, s, u, w, g, b, d, f, m, h, p, y);
	if (v[2]) throw yt(v[1]);
	return yt(v[0]);
}
function v(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = mt(e, At.__wbindgen_malloc), c = xt, l = mt(_, At.__wbindgen_malloc), a = xt, s = At.computeEnmo5s(r, i, o, c, l, a, t);
	var u = nt(s[0], s[1]).slice();
	return At.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function k(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = xt, c = mt(e, At.__wbindgen_malloc), l = xt, a = mt(_, At.__wbindgen_malloc), s = xt, u = At.computeMimsUnit(i, o, c, l, a, s, t, r);
	if (u[2]) throw yt(u[1]);
	return yt(u[0]);
}
function S(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = xt, c = mt(e, At.__wbindgen_malloc), l = xt, a = mt(_, At.__wbindgen_malloc), s = xt, u = mt(t, At.__wbindgen_malloc), w = xt, g = At.computeMimsUnitDataframe(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw yt(g[1]);
	return yt(g[0]);
}
function R(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = xt, c = mt(e, At.__wbindgen_malloc), l = xt, a = mt(_, At.__wbindgen_malloc), s = xt, u = At.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, r);
	if (u[2]) throw yt(u[1]);
	return yt(u[0]);
}
function C(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = xt, c = mt(e, At.__wbindgen_malloc), l = xt, a = mt(_, At.__wbindgen_malloc), s = xt, u = At.computeMimsUnitValues(i, o, c, l, a, s, t, r);
	if (u[3]) throw yt(u[2]);
	var w = nt(u[0], u[1]).slice();
	return At.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function A(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = xt, c = At.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function x(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), y = xt, v = mt(e, At.__wbindgen_malloc), k = xt, S = dt(_, At.__wbindgen_malloc), R = xt, C = mt(t, At.__wbindgen_malloc), A = xt, x = dt(r, At.__wbindgen_malloc), D = xt, P = ft(i, At.__wbindgen_malloc), M = xt, F = dt(o, At.__wbindgen_malloc), U = xt, W = ft(c, At.__wbindgen_malloc), I = xt, z = dt(l, At.__wbindgen_malloc), O = xt, T = mt(a, At.__wbindgen_malloc), G = xt, N = dt(s, At.__wbindgen_malloc), B = xt, j = mt(u, At.__wbindgen_malloc), E = xt, L = dt(w, At.__wbindgen_malloc), V = xt, H = mt(g, At.__wbindgen_malloc), X = xt, q = dt(b, At.__wbindgen_malloc), J = xt, $ = mt(d, At.__wbindgen_malloc), Y = xt, Z = dt(f, At.__wbindgen_malloc), K = xt, Q = ft(m, At.__wbindgen_malloc), nn = xt, en = dt(h, At.__wbindgen_malloc), _n = xt, tn = At.computeNightDifficultyTyped(p, y, v, k, S, R, C, A, x, D, P, M, F, U, W, I, z, O, T, G, N, B, j, E, L, V, H, X, q, J, $, Y, Z, K, Q, nn, en, _n);
	if (tn[2]) throw yt(tn[1]);
	return yt(tn[0]);
}
function D(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = xt, c = At.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function P(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), y = xt, v = mt(e, At.__wbindgen_malloc), k = xt, S = dt(_, At.__wbindgen_malloc), R = xt, C = mt(t, At.__wbindgen_malloc), A = xt, x = dt(r, At.__wbindgen_malloc), D = xt, P = ft(i, At.__wbindgen_malloc), M = xt, F = dt(o, At.__wbindgen_malloc), U = xt, W = ft(c, At.__wbindgen_malloc), I = xt, z = dt(l, At.__wbindgen_malloc), O = xt, T = mt(a, At.__wbindgen_malloc), G = xt, N = dt(s, At.__wbindgen_malloc), B = xt, j = mt(u, At.__wbindgen_malloc), E = xt, L = dt(w, At.__wbindgen_malloc), V = xt, H = mt(g, At.__wbindgen_malloc), X = xt, q = dt(b, At.__wbindgen_malloc), J = xt, $ = mt(d, At.__wbindgen_malloc), Y = xt, Z = dt(f, At.__wbindgen_malloc), K = xt, Q = ft(m, At.__wbindgen_malloc), nn = xt, en = dt(h, At.__wbindgen_malloc), _n = xt, tn = At.computeNightSignalsTyped(p, y, v, k, S, R, C, A, x, D, P, M, F, U, W, I, z, O, T, G, N, B, j, E, L, V, H, X, q, J, $, Y, Z, K, Q, nn, en, _n);
	if (tn[2]) throw yt(tn[1]);
	return yt(tn[0]);
}
function M(n, e, _) {
	const t = ft(n, At.__wbindgen_malloc), r = xt, i = mt(e, At.__wbindgen_malloc), o = xt, c = At.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw yt(c[1]);
	return yt(c[0]);
}
function F(n) {
	const e = At.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function U(n) {
	const e = At.consensusDisagreementDetail(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function W(n) {
	const e = At.consensusDisagreements(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function I(n) {
	const e = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), _ = xt, t = At.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function z(n) {
	const e = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), _ = xt, t = At.convertScreensRedcapDiary(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function O(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt;
	At.csvBufferAppend(e, _);
}
function T(n) {
	At.csvBufferClear(n);
}
function G(n, e) {
	const _ = At.cutpointEpochCompatibility(n, e);
	if (_[2]) throw yt(_[1]);
	return yt(_[0]);
}
function N(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = xt, c = At.cutpointToneCodes(i, o, e, _, t, r);
	var l = tt(c[0], c[1]).slice();
	return At.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = At.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = lt(r[0], r[1]).slice(), At.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function j(n, e, _, t) {
	return 0 !== At.cutpointsValid(n, e, _, t);
}
function E(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = dt(e, At.__wbindgen_malloc), i = xt, o = At.describeColumns(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return yt(o[0]);
}
function L(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = mt(e, At.__wbindgen_malloc), i = xt, o = At.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw yt(o[2]);
	var c = tt(o[0], o[1]).slice();
	return At.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function V(n, e) {
	let _, t;
	try {
		const r = ft(n, At.__wbindgen_malloc), i = xt, o = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), c = xt, l = At.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], lt(l[0], l[1]);
	} finally {
		At.__wbindgen_free(_, t, 1);
	}
}
function H(n) {
	const e = At.detectGgirHasptVariant(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function X(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt;
	var o = bt(e) ? 0 : pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), c = xt, l = bt(_) ? 0 : mt(_, At.__wbindgen_malloc), a = xt, s = bt(t) ? 0 : mt(t, At.__wbindgen_malloc), u = xt;
	return At.detectHdcza(r, i, o, c, l, a, s, u);
}
function q(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = xt;
	return 0 !== At.detectHourClockJumpMs(e, _);
}
function J(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = xt, t = At.detectNonwear(e, _);
	var r = tt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = xt, t = At.detectNonwearChoi2011(e, _);
	var r = tt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Y(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = xt, t = At.detectNonwearChoi2011Bouts(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function Z(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = At.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw yt(r[2]);
	var i = tt(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = xt, t = At.detectNonwearChoi2012(e, _);
	var r = tt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Q(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = xt, t = At.detectNonwearChoi2012Bouts(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function nn(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = xt, t = At.detectNonwearChoiBouts(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function en(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = xt, c = At.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function _n(n, e, _, t, r, i, o) {
	const c = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), l = xt, a = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), s = xt, u = mt(_, At.__wbindgen_malloc), w = xt, g = mt(t, At.__wbindgen_malloc), b = xt, d = mt(r, At.__wbindgen_malloc), f = xt, m = At.detectNonwearUnifiedBatchTyped(c, l, a, s, u, w, g, b, d, f, i, o);
	if (m[2]) throw yt(m[1]);
	return yt(m[0]);
}
function tn(n, e, _) {
	const t = At.dstPlaceholderRuns(n, e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function rn(n, e, _, t) {
	const r = At.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = nt(r[0], r[1]).slice(), At.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function on(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = mt(e, At.__wbindgen_malloc), i = xt, o = At.epochAgreement(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return yt(o[0]);
}
function cn(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = xt, c = mt(e, At.__wbindgen_malloc), l = xt, a = mt(_, At.__wbindgen_malloc), s = xt, u = mt(t, At.__wbindgen_malloc), w = xt, g = At.epochRawData(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw yt(g[1]);
	return yt(g[0]);
}
function ln(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = xt, i = mt(e, At.__wbindgen_malloc), o = xt, c = At.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw yt(c[1]);
	return yt(c[0]);
}
function an(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = At.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = _t(o[0], o[1]).slice(), At.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function sn(n, e) {
	let _, t;
	try {
		const o = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), c = xt, l = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), a = xt, s = At.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, yt(s[2]);
		return _ = r, t = i, lt(r, i);
	} finally {
		At.__wbindgen_free(_, t, 1);
	}
}
function un(n) {
	const e = At.exportNapAggregate(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function wn(n, e, _) {
	const t = At.exportPeriodFigures(!bt(n), bt(n) ? 0 : n, !bt(e), bt(e) ? 0 : e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function gn(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt, t = At.extractCapsense(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function bn(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = xt, c = mt(e, At.__wbindgen_malloc), l = xt, a = mt(_, At.__wbindgen_malloc), s = xt, u = pt(r, At.__wbindgen_malloc, At.__wbindgen_realloc), w = xt, g = At.foldOntoGrid(i, o, c, l, a, s, t, u, w);
	if (g[3]) throw yt(g[2]);
	var b = nt(g[0], g[1]).slice();
	return At.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function dn(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = pt(t, At.__wbindgen_malloc, At.__wbindgen_realloc), c = xt, l = At.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw yt(l[2]);
	var a = nt(l[0], l[1]).slice();
	return At.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function fn(n, e, _, t, r) {
	const i = ft(_, At.__wbindgen_malloc), o = xt, c = mt(t, At.__wbindgen_malloc), l = xt, a = At.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw yt(a[1]);
	return yt(a[0]);
}
function mn(n, e, _, t, r, i) {
	const o = mt(_, At.__wbindgen_malloc), c = xt, l = mt(t, At.__wbindgen_malloc), a = xt, s = pt(i, At.__wbindgen_malloc, At.__wbindgen_realloc), u = xt, w = At.foldUniformOntoGrid(n, e, o, c, l, a, r, s, u);
	if (w[3]) throw yt(w[2]);
	var g = nt(w[0], w[1]).slice();
	return At.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function hn(n) {
	const e = At.fuseNonwearMasks(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function pn(n, e, _) {
	var t = bt(_) ? 0 : pt(_, At.__wbindgen_malloc, At.__wbindgen_realloc), r = xt;
	const i = At.generateActiwareRestIntervals(n, e, t, r);
	if (i[2]) throw yt(i[1]);
	return yt(i[0]);
}
function yn() {
	const n = At.getComputeCapabilitiesV1();
	if (n[2]) throw yt(n[1]);
	return yt(n[0]);
}
function vn(n, e, _) {
	const t = At.ggir5sWallClockMs(n, e, _);
	if (t[3]) throw yt(t[2]);
	var r = nt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function kn(n) {
	const e = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), _ = xt, t = At.ggirConfigValues(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function Sn(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt;
	var r = bt(e) ? 0 : mt(e, At.__wbindgen_malloc), i = xt;
	const o = At.ggirDaysIncluded(_, t, r, i);
	var c = tt(o[0], o[1]).slice();
	return At.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function Rn(n, e) {
	const _ = ft(n, At.__wbindgen_malloc), t = xt;
	var r = bt(e) ? 0 : pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), i = xt;
	const o = At.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return yt(o[0]);
}
function Cn(n, e, _) {
	var t = bt(_) ? 0 : mt(_, At.__wbindgen_malloc), r = xt;
	const i = At.ggirDstPlaceholderCuts(n, e, t, r);
	if (i[2]) throw yt(i[1]);
	return yt(i[0]);
}
function An() {
	return At.ggirIncludeDayCriterionHours();
}
function xn(n, e, _, t) {
	const r = dt(n, At.__wbindgen_malloc), i = xt;
	var o = bt(t) ? 0 : mt(t, At.__wbindgen_malloc), c = xt;
	const l = At.ggirIndicesToWallClockMs(r, i, e, _, o, c);
	if (l[3]) throw yt(l[2]);
	var a = nt(l[0], l[1]).slice();
	return At.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function Dn(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = At.ggirLabelsToStoredMs(_, t, e);
	if (r[3]) throw yt(r[2]);
	var i = nt(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Pn(n, e, _, t) {
	const r = ht(n, At.__wbindgen_malloc), i = xt, o = mt(e, At.__wbindgen_malloc), c = xt, l = mt(_, At.__wbindgen_malloc), a = xt, s = mt(t, At.__wbindgen_malloc), u = xt, w = At.ggirManualNightClocks(r, i, o, c, l, a, s, u);
	if (w[2]) throw yt(w[1]);
	return yt(w[0]);
}
function Mn(n, e, _, t) {
	const r = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), i = xt, o = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), c = xt, l = pt(_, At.__wbindgen_malloc, At.__wbindgen_realloc), a = xt, s = At.ggirSleeplogStoredClocks(r, i, o, c, l, a, t);
	if (s[3]) throw yt(s[2]);
	let u;
	return 0 !== s[0] && (u = et(s[0], s[1]).slice(), At.__wbindgen_free(s[0], 4 * s[1], 4)), u;
}
function Fn(n, e) {
	return At.ggirSptDurationHours(n, e);
}
function Un(n, e) {
	const _ = At.ggirSummaryDenominator(n, e);
	if (_[2]) throw yt(_[1]);
	return yt(_[0]);
}
function Wn(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = mt(e, At.__wbindgen_malloc), i = xt, o = At.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function In(n) {
	let e, _;
	try {
		const i = ft(n, At.__wbindgen_malloc), o = xt, c = At.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function zn(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = mt(e, At.__wbindgen_malloc), c = xt, l = mt(_, At.__wbindgen_malloc), a = xt, s = mt(t, At.__wbindgen_malloc), u = xt, w = At.implausibilityReasons(r, i, o, c, l, a, s, u);
	if (w[2]) throw yt(w[1]);
	return yt(w[0]);
}
function On(n) {
	return At.initThreadPool(n);
}
function Tn() {
	At.installPanicHook();
}
function Gn(n) {
	const e = At.interRaterReliability(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Nn(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = At.irregularInternalDays(_, t, e);
	var i = et(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Bn(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt;
	return 0 !== At.isGeneactivFormat(e, _);
}
function jn(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = mt(e, At.__wbindgen_malloc), c = xt, l = mt(_, At.__wbindgen_malloc), a = xt, s = At.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw yt(s[1]);
	return yt(s[0]);
}
function En(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = xt, i = At.markerIndexRange(t, r, e, _);
	var o = _t(i[0], i[1]).slice();
	return At.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Ln(n, e, _, t, r, i, o) {
	const c = mt(n, At.__wbindgen_malloc), l = xt, a = mt(e, At.__wbindgen_malloc), s = xt, u = At.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (u[2]) throw yt(u[1]);
	return yt(u[0]);
}
function Vn(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = xt, t = At.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Hn(n, e, _, t) {
	const r = At.metricWarnings(n, e, _, t);
	var i = tt(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Xn(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = mt(e, At.__wbindgen_malloc), i = xt, o = At.midSleepClockHours(_, t, r, i);
	var c = nt(o[0], o[1]).slice();
	return At.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function qn(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = xt, c = mt(e, At.__wbindgen_malloc), l = xt, a = mt(_, At.__wbindgen_malloc), s = xt, u = At.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw yt(u[1]);
	return yt(u[0]);
}
function Jn(n) {
	const e = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), _ = xt, t = At.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = lt(t[0], t[1]).slice(), At.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function $n(n, e, _, t, r) {
	const i = mt(_, At.__wbindgen_malloc), o = xt, c = mt(t, At.__wbindgen_malloc), l = xt, a = mt(r, At.__wbindgen_malloc), s = xt, u = At.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (u[2]) throw yt(u[1]);
	return yt(u[0]);
}
function Yn(n, e, _, t) {
	let r, i;
	try {
		const l = dt(n, At.__wbindgen_malloc), a = xt, s = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), u = xt, w = At.nonwearContributors(l, a, s, u, _, t);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, yt(w[2]);
		return r = o, i = c, lt(o, c);
	} finally {
		At.__wbindgen_free(r, i, 1);
	}
}
function Zn(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = xt, t = At.nonwearInSleepCounts(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function Kn(n) {
	const e = At.nonwearSleepOverlap(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Qn(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = xt, i = mt(e, At.__wbindgen_malloc), o = xt, c = At.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw yt(c[1]);
	return yt(c[0]);
}
function ne(n, e, _, t, r, i) {
	const o = pt(r, At.__wbindgen_malloc, At.__wbindgen_realloc), c = xt, l = At.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw yt(l[2]);
	var a = nt(l[0], l[1]).slice();
	return At.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function ee(n, e) {
	const _ = ft(n, At.__wbindgen_malloc), t = xt, r = At.parseActigraphCsv(_, t, e);
	if (r[2]) throw yt(r[1]);
	return yt(r[0]);
}
function _e(n) {
	const e = At.parseActigraphCsvBuffered(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function te(n, e, _, t) {
	const r = ft(n, At.__wbindgen_malloc), i = xt;
	var o = bt(e) ? 0 : pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), c = xt, l = bt(t) ? 0 : pt(t, At.__wbindgen_malloc, At.__wbindgen_realloc), a = xt;
	const s = At.parseAw5(r, i, o, c, bt(_) ? 0 : Z_(_), l, a);
	if (s[2]) throw yt(s[1]);
	return yt(s[0]);
}
function re(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt, t = At.parseCwa(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function ie(n, e) {
	const _ = ft(n, At.__wbindgen_malloc), t = xt, r = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), i = xt, o = At.parseEpochSeries(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return yt(o[0]);
}
function oe(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt, t = At.parseGeneactivBin(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function ce(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt, t = At.parseGeneactivCsv(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function le() {
	const n = At.parseGeneactivCsvBuffered();
	if (n[2]) throw yt(n[1]);
	return yt(n[0]);
}
function ae(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt, t = At.parseGt3x(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function se(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = ft(e, At.__wbindgen_malloc), c = xt, l = ft(_, At.__wbindgen_malloc), a = xt, s = At.participantValidity(r, i, o, c, l, a, t);
	if (s[2]) throw yt(s[1]);
	return yt(s[0]);
}
function ue(n, e, _, t, r) {
	const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = xt, c = mt(e, At.__wbindgen_malloc), l = xt;
	var a = bt(_) ? 0 : mt(_, At.__wbindgen_malloc), s = xt;
	const u = At.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (u[2]) throw yt(u[1]);
	return yt(u[0]);
}
function we(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = xt, c = At.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function ge(n, e, _, t, r, i) {
	const o = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), c = xt, l = mt(e, At.__wbindgen_malloc), a = xt, s = mt(_, At.__wbindgen_malloc), u = xt, w = ft(t, At.__wbindgen_malloc), g = xt, b = ft(r, At.__wbindgen_malloc), d = xt, f = pt(i, At.__wbindgen_malloc, At.__wbindgen_realloc), m = xt, h = At.placeMarkersBatch(o, c, l, a, s, u, w, g, b, d, f, m);
	if (h[2]) throw yt(h[1]);
	return yt(h[0]);
}
function be(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), y = xt, v = mt(e, At.__wbindgen_malloc), k = xt, S = dt(_, At.__wbindgen_malloc), R = xt, C = mt(t, At.__wbindgen_malloc), A = xt, x = dt(r, At.__wbindgen_malloc), D = xt, P = ft(i, At.__wbindgen_malloc), M = xt, F = dt(o, At.__wbindgen_malloc), U = xt, W = ft(c, At.__wbindgen_malloc), I = xt, z = dt(l, At.__wbindgen_malloc), O = xt, T = mt(a, At.__wbindgen_malloc), G = xt, N = dt(s, At.__wbindgen_malloc), B = xt, j = mt(u, At.__wbindgen_malloc), E = xt, L = dt(w, At.__wbindgen_malloc), V = xt, H = mt(g, At.__wbindgen_malloc), X = xt, q = dt(b, At.__wbindgen_malloc), J = xt, $ = mt(d, At.__wbindgen_malloc), Y = xt, Z = dt(f, At.__wbindgen_malloc), K = xt, Q = ft(m, At.__wbindgen_malloc), nn = xt, en = dt(h, At.__wbindgen_malloc), _n = xt, tn = At.placeMarkersTyped(p, y, v, k, S, R, C, A, x, D, P, M, F, U, W, I, z, O, T, G, N, B, j, E, L, V, H, X, q, J, $, Y, Z, K, Q, nn, en, _n);
	if (tn[2]) throw yt(tn[1]);
	return yt(tn[0]);
}
function de(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = xt, c = At.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function fe(n, e, _, t) {
	const r = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), i = xt, o = mt(e, At.__wbindgen_malloc), c = xt, l = mt(_, At.__wbindgen_malloc), a = xt, s = ft(t, At.__wbindgen_malloc), u = xt, w = At.placeNonwearMarkersTyped(r, i, o, c, l, a, s, u);
	if (w[2]) throw yt(w[1]);
	return yt(w[0]);
}
function me(n) {
	const e = At.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function he(n) {
	const e = At.prepareCompactPipelineV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function pe(n, e, _, t, r, i, o) {
	const c = mt(n, At.__wbindgen_malloc), l = xt, a = mt(e, At.__wbindgen_malloc), s = xt, u = mt(_, At.__wbindgen_malloc), w = xt, g = mt(t, At.__wbindgen_malloc), b = xt;
	var d = bt(o) ? 0 : pt(o, At.__wbindgen_malloc, At.__wbindgen_realloc), f = xt;
	const m = At.processGeneactivRaw(c, l, a, s, u, w, g, b, r, i, d, f);
	if (m[2]) throw yt(m[1]);
	return yt(m[0]);
}
function ye(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt, t = At.processGt3xFull(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function ve(n, e) {
	const _ = ft(n, At.__wbindgen_malloc), t = xt, r = At.processGt3xFullWithEpoch(_, t, e);
	if (r[2]) throw yt(r[1]);
	return yt(r[0]);
}
function ke(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt, t = At.processGt3xPart1(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function Se(n, e) {
	const _ = ft(n, At.__wbindgen_malloc), t = xt, r = At.processGt3xPart1WithEpoch(_, t, e);
	if (r[2]) throw yt(r[1]);
	return yt(r[0]);
}
function Re(n, e, _, t, r, i) {
	const o = mt(n, At.__wbindgen_malloc), c = xt, l = mt(e, At.__wbindgen_malloc), a = xt, s = mt(_, At.__wbindgen_malloc), u = xt;
	var w = bt(i) ? 0 : pt(i, At.__wbindgen_malloc, At.__wbindgen_realloc), g = xt;
	const b = At.processRawXyz(o, c, l, a, s, u, t, r, w, g);
	if (b[2]) throw yt(b[1]);
	return yt(b[0]);
}
function Ce(n, e, _, t, r, i) {
	const o = mt(n, At.__wbindgen_malloc), c = xt, l = mt(e, At.__wbindgen_malloc), a = xt, s = mt(_, At.__wbindgen_malloc), u = xt, w = mt(t, At.__wbindgen_malloc), g = xt;
	var b = bt(i) ? 0 : pt(i, At.__wbindgen_malloc, At.__wbindgen_realloc), d = xt;
	const f = At.processRawXyzImputed(o, c, l, a, s, u, w, g, r, b, d);
	if (f[2]) throw yt(f[1]);
	return yt(f[0]);
}
function Ae(n, e, _, t, r, i, o) {
	const c = mt(n, At.__wbindgen_malloc), l = xt, a = mt(e, At.__wbindgen_malloc), s = xt, u = mt(_, At.__wbindgen_malloc), w = xt, g = mt(t, At.__wbindgen_malloc), b = xt;
	var d = bt(i) ? 0 : pt(i, At.__wbindgen_malloc, At.__wbindgen_realloc), f = xt;
	const m = At.processRawXyzImputedWithEpoch(c, l, a, s, u, w, g, b, r, d, f, o);
	if (m[2]) throw yt(m[1]);
	return yt(m[0]);
}
function xe(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = ft(e, At.__wbindgen_malloc), c = xt, l = mt(t, At.__wbindgen_malloc), a = xt, s = At.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var u = tt(s[0], s[1]).slice();
	return At.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function De(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = mt(e, At.__wbindgen_malloc), c = xt, l = mt(_, At.__wbindgen_malloc), a = xt, s = At.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw yt(s[1]);
	return yt(s[0]);
}
function Pe(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt, t = At.readGgirMeta(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function Me() {
	return At.recommended_chunk_size_mb() >>> 0;
}
function Fe(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), i = xt, o = At.reduceF64V1(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return o[0];
}
function Ue(n) {
	const e = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), _ = xt, t = At.resolveTimezone(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function We(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = xt, i = mt(e, At.__wbindgen_malloc), o = xt, c = dt(_, At.__wbindgen_malloc), l = xt, a = At.restoredDstRuns(t, r, i, o, c, l);
	if (a[2]) throw yt(a[1]);
	return yt(a[0]);
}
function Ie(n, e, _, t, r, i, o, c, l, a, s) {
	const u = ft(n, At.__wbindgen_malloc), w = xt, g = pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), b = xt;
	var d = bt(_) ? 0 : ft(_, At.__wbindgen_malloc), f = xt, m = bt(t) ? 0 : ft(t, At.__wbindgen_malloc), h = xt, p = bt(r) ? 0 : ft(r, At.__wbindgen_malloc), y = xt, v = bt(i) ? 0 : ft(i, At.__wbindgen_malloc), k = xt, S = bt(o) ? 0 : ft(o, At.__wbindgen_malloc), R = xt, C = bt(c) ? 0 : pt(c, At.__wbindgen_malloc, At.__wbindgen_realloc), A = xt, x = bt(l) ? 0 : pt(l, At.__wbindgen_malloc, At.__wbindgen_realloc), D = xt;
	const P = At.reviewGgirResults(u, w, g, b, d, f, m, h, p, y, v, k, S, R, C, A, x, D, a, s);
	if (P[2]) throw yt(P[1]);
	return yt(P[0]);
}
function ze(n) {
	const e = At.reviewNonwearFile(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Oe(n) {
	const e = At.reviewNonwearTotals(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Te(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = At.roundCountStorage(_, t, e);
	var i = nt(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Ge(n) {
	const e = At.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Ne(n) {
	const e = At.runCompactPipelineV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Be(n, e) {
	const _ = At.runFullPipeline(n, e);
	if (_[2]) throw yt(_[1]);
	return yt(_[0]);
}
function je(n) {
	const e = At.runFullPipelineOutcomeV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Ee(n) {
	const e = At.runFullPipelineV1(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Le(n, e) {
	const _ = At.runGgirFromEpoch(n, e);
	if (_[2]) throw yt(_[1]);
	return yt(_[0]);
}
function Ve(n) {
	const e = At.runGgirPart3(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function He(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt, t = At.runMilestone(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function Xe(n) {
	const e = At.scoreAllDays(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function qe(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = At.scoreColeKripke(_, t, e);
	var i = tt(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Je(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = xt, c = At.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function $e(n) {
	const e = At.scoreConsensusMajority(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function Ye(n, e, _) {
	const t = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), r = xt, i = ft(e, At.__wbindgen_malloc), o = xt, c = dt(_, At.__wbindgen_malloc), l = xt, a = At.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw yt(a[1]);
	return yt(a[0]);
}
function Ze(n) {
	let e, _;
	try {
		const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = xt, c = At.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, yt(c[2]);
		return e = t, _ = r, lt(t, r);
	} finally {
		At.__wbindgen_free(e, _, 1);
	}
}
function Ke(n, e, _, t, r, i) {
	const o = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), c = xt, l = mt(e, At.__wbindgen_malloc), a = xt, s = mt(_, At.__wbindgen_malloc), u = xt, w = mt(t, At.__wbindgen_malloc), g = xt, b = At.scoreEpochsTyped(o, c, l, a, s, u, w, g, r, i);
	if (b[2]) throw yt(b[1]);
	return yt(b[0]);
}
function Qe(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = xt, t = At.scoreGgirHasib(e, _);
	var r = tt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function n_(n) {
	const e = At.scoreGgirHasibVariant(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function e_(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = xt, i = mt(e, At.__wbindgen_malloc), o = xt, c = At.scoreGgirSib(t, r, i, o, _);
	if (c[2]) throw yt(c[1]);
	return yt(c[0]);
}
function __(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = At.scoreSadeh(_, t, e);
	var i = tt(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function t_(n) {
	const e = At.settleManualNonwearNights(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function r_(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt, t = At.sha256StreamFeed(e, _);
	if (t[1]) throw yt(t[0]);
}
function i_() {
	let n, e;
	try {
		const r = At.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, yt(r[2]);
		return n = _, e = t, lt(_, t);
	} finally {
		At.__wbindgen_free(n, e, 1);
	}
}
function o_() {
	At.sha256StreamStart();
}
function c_(n, e) {
	const _ = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), t = xt, r = At.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = lt(r[0], r[1]).slice(), At.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function l_(n, e, _, t, r) {
	const i = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), o = xt, c = mt(e, At.__wbindgen_malloc), l = xt, a = dt(_, At.__wbindgen_malloc), s = xt, u = mt(t, At.__wbindgen_malloc), w = xt, g = dt(r, At.__wbindgen_malloc), b = xt, d = At.sleepRegularityIndex(i, o, c, l, a, s, u, w, g, b);
	if (d[3]) throw yt(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function a_(n, e) {
	const _ = At.sleepWakeScores(n, e);
	if (_[2]) throw yt(_[1]);
	return yt(_[0]);
}
function s_(n) {
	const e = ht(n, At.__wbindgen_malloc), _ = xt, t = At.sourceLabelsWallClockMs(e, _);
	var r = nt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function u_(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = mt(e, At.__wbindgen_malloc), c = xt, l = At.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function w_(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = xt, i = mt(_, At.__wbindgen_malloc), o = xt, c = At.spliceDstPlaceholders(t, r, e, i, o);
	if (c[3]) throw yt(c[2]);
	let l;
	return 0 !== c[0] && (l = nt(c[0], c[1]).slice(), At.__wbindgen_free(c[0], 8 * c[1], 8)), l;
}
function g_(n) {
	return At.startThreadPool(n);
}
function b_(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = ft(e, At.__wbindgen_malloc), c = xt, l = mt(_, At.__wbindgen_malloc), a = xt, s = mt(t, At.__wbindgen_malloc), u = xt, w = At.statesInPeriods(r, i, o, c, l, a, s, u);
	var g = tt(w[0], w[1]).slice();
	return At.__wbindgen_free(w[0], 1 * w[1], 1), g;
}
function d_(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = At.storedToGgirLabelsMs(_, t, e);
	if (r[3]) throw yt(r[2]);
	var i = nt(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function f_(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt, t = At.streamParseFeed(e, _);
	if (t[2]) throw yt(t[1]);
	return t[0] >>> 0;
}
function m_() {
	const n = At.streamParseFinish();
	if (n[2]) throw yt(n[1]);
	return t.__wrap(n[0]);
}
function h_() {
	const n = At.streamParseFinishChunk();
	if (n[2]) throw yt(n[1]);
	return _.__wrap(n[0]);
}
function p_(n) {
	const e = At.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw yt(e[1]);
	return _.__wrap(e[0]);
}
function y_(n, e) {
	const _ = At.streamParseStart(n, e);
	if (_[1]) throw yt(_[0]);
}
function v_(n, e) {
	const _ = At.streamParseStartData(n, e);
	if (_[1]) throw yt(_[0]);
}
function k_(n, e, _) {
	const t = At.streamParseStartWithEpoch(n, e, _);
	if (t[1]) throw yt(t[0]);
}
function S_(n, e) {
	const _ = ft(n, At.__wbindgen_malloc), t = xt, r = At.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw yt(r[1]);
	return yt(r[0]);
}
function R_(n) {
	const e = At.summarizeExportGroups(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function C_(n) {
	const e = At.summarizePhysicalActivityDays(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function A_(n) {
	const e = At.summarizePhysicalActivityTrace(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function x_() {
	return 0 !== At.threadPoolReady();
}
function D_(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = At.thresholdProbabilities(_, t, e);
	var i = tt(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function P_(n) {
	const e = At.timeSemantics(n);
	if (e[2]) throw yt(e[1]);
	return yt(e[0]);
}
function M_(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = xt, i = At.timestampDiscontinuities(t, r, e, _);
	if (i[2]) throw yt(i[1]);
	return yt(i[0]);
}
function F_(n, e, _) {
	const t = At.uniformTimestamps(n, e, _);
	var r = nt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function U_(n, e) {
	const _ = At.utcDatesInSpan(n, e);
	var t = et(_[0], _[1]).slice();
	return At.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function W_(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = xt, t = At.utcDayIndex(e, _);
	if (t[2]) throw yt(t[1]);
	return yt(t[0]);
}
function I_(n) {
	const e = ft(n, At.__wbindgen_malloc), _ = xt, t = At.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function z_(n, e) {
	const _ = mt(n, At.__wbindgen_malloc), t = xt, r = At.validWearDays(_, t, e);
	if (r[3]) throw yt(r[2]);
	var i = tt(r[0], r[1]).slice();
	return At.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function O_(n, e, _) {
	const t = mt(n, At.__wbindgen_malloc), r = xt, i = At.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw yt(i[1]);
	return yt(i[0]);
}
function T_(n) {
	const e = mt(n, At.__wbindgen_malloc), _ = xt, t = At.wallClockLabels(e, _);
	var r = et(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function G_(n, e, _) {
	const t = ft(n, At.__wbindgen_malloc), r = xt, i = At.wallMaskOntoGgirGrid(t, r, e, _);
	if (i[3]) throw yt(i[2]);
	var o = tt(i[0], i[1]).slice();
	return At.__wbindgen_free(i[0], 1 * i[1], 1), o;
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var N_ = class n {
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
		At.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		At.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return At.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return At.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return At.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function B_(n) {
	At.wbg_rayon_start_worker(n);
}
function j_(n, e) {
	const _ = pt(n, At.__wbindgen_malloc, At.__wbindgen_realloc), t = xt;
	var r = bt(e) ? 0 : pt(e, At.__wbindgen_malloc, At.__wbindgen_realloc), i = xt;
	const o = At.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw yt(o[1]);
	return yt(o[0]);
}
function E_(n) {
	const e = ht(n, At.__wbindgen_malloc), _ = xt, t = At.weekendDates(e, _);
	var r = tt(t[0], t[1]).slice();
	return At.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function L_(n, e, _, t) {
	const r = mt(n, At.__wbindgen_malloc), i = xt, o = At.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function V_(n, e, _, t, r) {
	const i = mt(n, At.__wbindgen_malloc), o = xt, c = mt(e, At.__wbindgen_malloc), l = xt, a = mt(_, At.__wbindgen_malloc), s = xt, u = At.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw yt(u[1]);
	return yt(u[0]);
}
function H_(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(lt(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = pt(String(e), At.__wbindgen_malloc, At.__wbindgen_realloc), t = xt;
				it().setInt32(n + 4, t, !0), it().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				it().setBigInt64(n + 8, bt(_) ? BigInt(0) : _, !0), it().setInt32(n + 0, !bt(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return bt(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = pt(Q_(e), At.__wbindgen_malloc, At.__wbindgen_realloc), t = xt;
				it().setInt32(n + 4, t, !0), it().setInt32(n + 0, _, !0);
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
				return At.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return Ct;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const _ = "number" == typeof e ? e : void 0;
				it().setFloat64(n + 8, bt(_) ? 0 : _, !0), it().setInt32(n + 0, !bt(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = bt(_) ? 0 : pt(_, At.__wbindgen_malloc, At.__wbindgen_realloc), r = xt;
				it().setInt32(n + 4, r, !0), it().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(lt(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return gt(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return gt(function(n, e, _, t) {
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
					_ = n, t = e, console.error(lt(n, e));
				} finally {
					At.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return gt(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return gt(function(n, e) {
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
				return new Uint32Array(_t(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(nt(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(tt(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return gt(function(n) {
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
				return gt(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(tt(n, e), _);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return gt(function(n, e, _) {
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
				const _ = pt(e.stack, At.__wbindgen_malloc, At.__wbindgen_realloc), t = xt;
				it().setInt32(n + 4, t, !0), it().setInt32(n + 0, _, !0);
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
				}(e, _, N_.__wrap(t));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return bt(n) ? 0 : Z_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return bt(n) ? 0 : Z_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return bt(n) ? 0 : Z_(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return bt(n) ? 0 : Z_(n);
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
						0 === --t.cnt && (At.__wbindgen_destroy_closure(t.a, t.b), t.a = 0, K_.unregister(t));
					}, K_.register(r, t, t), r;
				}(n, e, X_);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return tt(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return lt(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = At.__wbindgen_externrefs, e = n.grow(4);
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
function X_(n, e, _) {
	At.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, _);
}
Symbol.dispose && (N_.prototype[Symbol.dispose] = N_.prototype.free);
const q_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => At.__wbg_aw5batch_free(n >>> 0, 1)), J_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => At.__wbg_streamchunkresult_free(n >>> 0, 1)), $_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => At.__wbg_streamparseresult_free(n >>> 0, 1)), Y_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => At.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function Z_(n) {
	const e = At.__externref_table_alloc();
	return At.__wbindgen_externrefs.set(e, n), e;
}
const K_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => At.__wbindgen_destroy_closure(n.a, n.b));
function Q_(n) {
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
		e > 0 && (_ += Q_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + Q_(n[t]);
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
function nt(n, e) {
	return n >>>= 0, ct().subarray(n / 8, n / 8 + e);
}
function et(n, e) {
	n >>>= 0;
	const _ = it(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(At.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return At.__externref_drop_slice(n, e), t;
}
function _t(n, e) {
	return n >>>= 0, st().subarray(n / 4, n / 4 + e);
}
function tt(n, e) {
	return n >>>= 0, wt().subarray(n / 1, n / 1 + e);
}
let rt = null;
function it() {
	return null !== rt && rt.buffer === At.memory.buffer || (rt = new DataView(At.memory.buffer)), rt;
}
let ot = null;
function ct() {
	return null !== ot && ot.buffer === At.memory.buffer || (ot = new Float64Array(At.memory.buffer)), ot;
}
function lt(n, e) {
	return function(n, e) {
		return St += e, St >= kt && (vt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), vt.decode(), St = e), vt.decode(wt().slice(n, n + e));
	}(n >>>= 0, e);
}
let at = null;
function st() {
	return null !== at && at.buffer === At.memory.buffer || (at = new Uint32Array(At.memory.buffer)), at;
}
let ut = null;
function wt() {
	return null !== ut && ut.buffer === At.memory.buffer || (ut = new Uint8Array(At.memory.buffer)), ut;
}
function gt(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = Z_(_);
		At.__wbindgen_exn_store(n);
	}
}
function bt(n) {
	return null == n;
}
function dt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return st().set(n, _ / 4), xt = n.length, _;
}
function ft(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return wt().set(n, _ / 1), xt = n.length, _;
}
function mt(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return ct().set(n, _ / 8), xt = n.length, _;
}
function ht(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = Z_(n[t]);
		it().setUint32(_ + 4 * t, e, !0);
	}
	return xt = n.length, _;
}
function pt(n, e, _) {
	if (void 0 === _) {
		const _ = Rt.encode(n), t = e(_.length, 1) >>> 0;
		return wt().subarray(t, t + _.length).set(_), xt = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = wt();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = wt().subarray(r + o, r + t);
		o += Rt.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return xt = o, r;
}
function yt(n) {
	const e = At.__wbindgen_externrefs.get(n);
	return At.__externref_table_dealloc(n), e;
}
let vt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
vt && vt.decode();
const kt = 2146435072;
let St = 0;
const Rt = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
Rt && (Rt.encodeInto = function(n, e) {
	const _ = Rt.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let Ct, At, xt = 0;
function Dt(n, e, _) {
	if (At = n.exports, Ct = e, rt = null, ot = null, at = null, ut = null, void 0 !== _ && ("number" != typeof _ || 0 === _ || _ % 65536 != 0)) throw new Error("invalid stack size");
	return At.__wbindgen_start(_), At;
}
function Pt(n, e) {
	if (void 0 !== At) return At;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const t = H_(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Dt(new WebAssembly.Instance(n, t), n, _);
}
async function Mt(n, e) {
	if (void 0 !== At) return At;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-okdU-_iV.wasm", "" + import.meta.url));
	const t = H_(e);
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
	return Dt(r, i, _);
}
export { e as Aw5Batch, _ as StreamChunkResult, t as StreamParseResult, r as actiwareIntervalStatistics, i as actiwareSleepIntervals, o as actiwareWakeThreshold, c as actoursVersion, l as aggregateEpochSeries, a as analysisDatesOf, s as analysisWindowBounds, u as analysisWindowSlice, w as analyzePhysicalActivityDay, g as classifyActimetricPreschoolWristRf, b as classifyActimetricPreschoolWristRfLagLead, d as classifyActimetricPreschoolWristRfLagLeadCalibrated, f as clippedUnionHours, m as compareNonwearDetectorMasks, h as computeAnglez5s, p as computeCircadian, y as computeCircadianTyped, v as computeEnmo5s, k as computeMimsUnit, S as computeMimsUnitDataframe, R as computeMimsUnitTimingBreakdown, C as computeMimsUnitValues, A as computeNightDifficulty, x as computeNightDifficultyTyped, D as computeNightSignals, P as computeNightSignalsTyped, M as computeSleepMetrics, F as configureComputeMemoryBudgetV1, U as consensusDisagreementDetail, W as consensusDisagreements, I as convertBedWakeDaysDiary, z as convertScreensRedcapDiary, O as csvBufferAppend, T as csvBufferClear, G as cutpointEpochCompatibility, N as cutpointToneCodes, B as cutpointsRefusal, j as cutpointsValid, Mt as default, E as describeColumns, L as detectDetachFromAccelerationG, V as detectDeviceFormat, H as detectGgirHasptVariant, X as detectHdcza, q as detectHourClockJumpMs, J as detectNonwear, $ as detectNonwearChoi2011, Y as detectNonwearChoi2011Bouts, Z as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, Q as detectNonwearChoi2012Bouts, nn as detectNonwearChoiBouts, en as detectNonwearUnified, _n as detectNonwearUnifiedBatchTyped, tn as dstPlaceholderRuns, rn as effectiveOverrideCutpoints, on as epochAgreement, cn as epochRawData, ln as epochWithBandpass, an as epochsOverlapping, sn as executeHeroRuntime, un as exportNapAggregate, wn as exportPeriodFigures, gn as extractCapsense, bn as foldOntoGrid, dn as foldSampleBlocks, fn as foldSleepWakeVotes, mn as foldUniformOntoGrid, hn as fuseNonwearMasks, pn as generateActiwareRestIntervals, yn as getComputeCapabilitiesV1, vn as ggir5sWallClockMs, kn as ggirConfigValues, Sn as ggirDaysIncluded, Rn as ggirDiaryLogShape, Cn as ggirDstPlaceholderCuts, An as ggirIncludeDayCriterionHours, xn as ggirIndicesToWallClockMs, Dn as ggirLabelsToStoredMs, Pn as ggirManualNightClocks, Mn as ggirSleeplogStoredClocks, Fn as ggirSptDurationHours, Un as ggirSummaryDenominator, Wn as gridOffsetWithin, In as identifyGgirRData, zn as implausibilityReasons, Pt as initSync, On as initThreadPool, Tn as installPanicHook, Gn as interRaterReliability, Nn as irregularInternalDays, Bn as isGeneactivFormat, jn as lstmSpectralFeatures30s, En as markerIndexRange, Ln as markerSleepOnsetOffset, Vn as medianGapSeconds, Hn as metricWarnings, Xn as midSleepClockHours, qn as neishabouriCounts, Jn as nextDate, $n as nightIntervalOverlap, Yn as nonwearContributors, Zn as nonwearInSleepCounts, Kn as nonwearSleepOverlap, Qn as nonwearWeightRuns, ne as normalizeCutpoints, ee as parseActigraphCsv, _e as parseActigraphCsvBuffered, te as parseAw5, re as parseCwa, ie as parseEpochSeries, oe as parseGeneactivBin, ce as parseGeneactivCsv, le as parseGeneactivCsvBuffered, ae as parseGt3x, se as participantValidity, ue as physicalActivitySeriesGrid, we as placeMarkers, ge as placeMarkersBatch, be as placeMarkersTyped, de as placeNonwearMarkers, fe as placeNonwearMarkersTyped, me as prepareCompactPipelineOutcomeV1, he as prepareCompactPipelineV1, pe as processGeneactivRaw, ye as processGt3xFull, ve as processGt3xFullWithEpoch, ke as processGt3xPart1, Se as processGt3xPart1WithEpoch, Re as processRawXyz, Ce as processRawXyzImputed, Ae as processRawXyzImputedWithEpoch, xe as projectLabelsOntoGrid, De as rasterizePeriods, Pe as readGgirMeta, Me as recommended_chunk_size_mb, Fe as reduceF64V1, Ue as resolveTimezone, We as restoredDstRuns, Ie as reviewGgirResults, ze as reviewNonwearFile, Oe as reviewNonwearTotals, Te as roundCountStorage, Ge as runCompactPipelineOutcomeV1, Ne as runCompactPipelineV1, Be as runFullPipeline, je as runFullPipelineOutcomeV1, Ee as runFullPipelineV1, Le as runGgirFromEpoch, Ve as runGgirPart3, He as runMilestone, Xe as scoreAllDays, qe as scoreColeKripke, Je as scoreConsensus, $e as scoreConsensusMajority, Ye as scoreConsensusTyped, Ze as scoreEpochs, Ke as scoreEpochsTyped, Qe as scoreGgirHasib, n_ as scoreGgirHasibVariant, e_ as scoreGgirSib, __ as scoreSadeh, t_ as settleManualNonwearNights, r_ as sha256StreamFeed, i_ as sha256StreamFinish, o_ as sha256StreamStart, c_ as shiftDate, l_ as sleepRegularityIndex, a_ as sleepWakeScores, s_ as sourceLabelsWallClockMs, u_ as spanFiniteMean, w_ as spliceDstPlaceholders, g_ as startThreadPool, b_ as statesInPeriods, d_ as storedToGgirLabelsMs, f_ as streamParseFeed, m_ as streamParseFinish, h_ as streamParseFinishChunk, p_ as streamParseFinishChunkWithProgress, y_ as streamParseStart, v_ as streamParseStartData, k_ as streamParseStartWithEpoch, S_ as summarizeActimetricPreschoolWristRfClasses, R_ as summarizeExportGroups, C_ as summarizePhysicalActivityDays, A_ as summarizePhysicalActivityTrace, x_ as threadPoolReady, D_ as thresholdProbabilities, P_ as timeSemantics, M_ as timestampDiscontinuities, F_ as uniformTimestamps, U_ as utcDatesInSpan, W_ as utcDayIndex, I_ as validStateFraction, z_ as validWearDays, O_ as wallClockDstPlaceholders, T_ as wallClockLabels, G_ as wallMaskOntoGgirGrid, N_ as wbg_rayon_PoolBuilder, B_ as wbg_rayon_start_worker, j_ as wearSiteHasptRouting, E_ as weekendDates, L_ as windowCoverage, V_ as zeroCrossingCounts };
