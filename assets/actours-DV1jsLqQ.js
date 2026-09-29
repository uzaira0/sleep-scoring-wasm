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
		return this.__wbg_ptr = 0, H_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Rt.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = Rt.aw5batch_new(n);
		if (e[2]) throw ht(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, H_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), r = Ct;
		var i = wt(_) ? 0 : mt(_, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Ct;
		const c = Rt.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw ht(c[1]);
		return ht(c[0]);
	}
	subjects(n) {
		const e = Rt.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw ht(e[1]);
		return ht(e[0]);
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, X_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, X_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Rt.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Rt.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Rt.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Rt.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Rt.streamchunkresult_axisX(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Rt.streamchunkresult_axisY(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Rt.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Rt.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Rt.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ot(n[0], n[1]).slice(), Rt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Rt.streamchunkresult_counts(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Rt.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Rt.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Rt.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = Rt.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = Rt.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return Rt.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Rt.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Rt.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Rt.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Rt.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ot(n[0], n[1]).slice(), Rt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Rt.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Rt.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Rt.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Rt.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Rt.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Rt.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Rt.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = Rt.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Rt.streamchunkresult_temperature(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Rt.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Rt.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Rt.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Rt.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Rt.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Rt.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var t = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, q_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, q_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Rt.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Rt.streamparseresult_axisX(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Rt.streamparseresult_axisY(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Rt.streamparseresult_axisZ(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Rt.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Rt.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ot(n[0], n[1]).slice(), Rt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return Rt.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== Rt.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Rt.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Rt.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Rt.streamparseresult_temperature(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Rt.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Rt.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = K_(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function r(n) {
	const e = Rt.actiwareIntervalStatistics(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function i(n, e, _) {
	const t = Rt.actiwareSleepIntervals(n, e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function o(n, e) {
	const _ = Rt.actiwareWakeThreshold(n, e);
	if (_[3]) throw ht(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function c() {
	let n, e;
	try {
		const _ = Rt.actoursVersion();
		return n = _[0], e = _[1], ot(_[0], _[1]);
	} finally {
		Rt.__wbindgen_free(n, e, 1);
	}
}
function l(n) {
	const e = Rt.aggregateEpochSeries(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function a(n) {
	const e = dt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.analysisDatesOf(e, _);
	var r = Q_(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function s(n, e) {
	const _ = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Ct, r = Rt.analysisWindowBounds(_, t, !wt(e), wt(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = K_(r[0], r[1]).slice(), Rt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function u(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Ct, o = Rt.analysisWindowSlice(_, t, r, i);
	var c = nt(o[0], o[1]).slice();
	return Rt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function w(n) {
	let e, _;
	try {
		const i = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Ct, c = Rt.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ht(c[2]);
		return e = t, _ = r, ot(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function g(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = dt(e, Rt.__wbindgen_malloc), c = Ct, l = dt(_, Rt.__wbindgen_malloc), a = Ct, s = Rt.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw ht(s[2]);
	var u = et(s[0], s[1]).slice();
	return Rt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function b(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = dt(e, Rt.__wbindgen_malloc), c = Ct, l = dt(_, Rt.__wbindgen_malloc), a = Ct, s = Rt.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw ht(s[2]);
	var u = et(s[0], s[1]).slice();
	return Rt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function d(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = dt(e, Rt.__wbindgen_malloc), c = Ct, l = dt(_, Rt.__wbindgen_malloc), a = Ct, s = Rt.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw ht(s[2]);
	var u = et(s[0], s[1]).slice();
	return Rt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function f(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = dt(e, Rt.__wbindgen_malloc), c = Ct;
	return Rt.clippedUnionHours(r, i, o, c, _, t);
}
function m(n, e) {
	const _ = Rt.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw ht(_[1]);
	return ht(_[0]);
}
function h(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = dt(e, Rt.__wbindgen_malloc), c = Ct, l = dt(_, Rt.__wbindgen_malloc), a = Ct, s = Rt.computeAnglez5s(r, i, o, c, l, a, t);
	var u = K_(s[0], s[1]).slice();
	return Rt.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function p(n) {
	let e, _;
	try {
		const i = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Ct, c = Rt.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ht(c[2]);
		return e = t, _ = r, ot(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function y(n, e, _, t, r, i, o) {
	const c = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), l = Ct, a = dt(e, Rt.__wbindgen_malloc), s = Ct, u = gt(_, Rt.__wbindgen_malloc), w = Ct, g = dt(t, Rt.__wbindgen_malloc), b = Ct, d = gt(r, Rt.__wbindgen_malloc), f = Ct, m = bt(i, Rt.__wbindgen_malloc), h = Ct, p = gt(o, Rt.__wbindgen_malloc), y = Ct, v = Rt.computeCircadianTyped(c, l, a, s, u, w, g, b, d, f, m, h, p, y);
	if (v[2]) throw ht(v[1]);
	return ht(v[0]);
}
function v(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = dt(e, Rt.__wbindgen_malloc), c = Ct, l = dt(_, Rt.__wbindgen_malloc), a = Ct, s = Rt.computeEnmo5s(r, i, o, c, l, a, t);
	var u = K_(s[0], s[1]).slice();
	return Rt.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function k(n, e, _, t, r) {
	const i = dt(n, Rt.__wbindgen_malloc), o = Ct, c = dt(e, Rt.__wbindgen_malloc), l = Ct, a = dt(_, Rt.__wbindgen_malloc), s = Ct, u = Rt.computeMimsUnit(i, o, c, l, a, s, t, r);
	if (u[2]) throw ht(u[1]);
	return ht(u[0]);
}
function S(n, e, _, t, r) {
	const i = dt(n, Rt.__wbindgen_malloc), o = Ct, c = dt(e, Rt.__wbindgen_malloc), l = Ct, a = dt(_, Rt.__wbindgen_malloc), s = Ct, u = dt(t, Rt.__wbindgen_malloc), w = Ct, g = Rt.computeMimsUnitDataframe(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw ht(g[1]);
	return ht(g[0]);
}
function R(n, e, _, t, r) {
	const i = dt(n, Rt.__wbindgen_malloc), o = Ct, c = dt(e, Rt.__wbindgen_malloc), l = Ct, a = dt(_, Rt.__wbindgen_malloc), s = Ct, u = Rt.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, r);
	if (u[2]) throw ht(u[1]);
	return ht(u[0]);
}
function C(n, e, _, t, r) {
	const i = dt(n, Rt.__wbindgen_malloc), o = Ct, c = dt(e, Rt.__wbindgen_malloc), l = Ct, a = dt(_, Rt.__wbindgen_malloc), s = Ct, u = Rt.computeMimsUnitValues(i, o, c, l, a, s, t, r);
	if (u[3]) throw ht(u[2]);
	var w = K_(u[0], u[1]).slice();
	return Rt.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function A(n) {
	let e, _;
	try {
		const i = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Ct, c = Rt.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ht(c[2]);
		return e = t, _ = r, ot(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function x(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), y = Ct, v = dt(e, Rt.__wbindgen_malloc), k = Ct, S = gt(_, Rt.__wbindgen_malloc), R = Ct, C = dt(t, Rt.__wbindgen_malloc), A = Ct, x = gt(r, Rt.__wbindgen_malloc), D = Ct, P = bt(i, Rt.__wbindgen_malloc), M = Ct, F = gt(o, Rt.__wbindgen_malloc), I = Ct, U = bt(c, Rt.__wbindgen_malloc), W = Ct, z = gt(l, Rt.__wbindgen_malloc), O = Ct, T = dt(a, Rt.__wbindgen_malloc), G = Ct, N = gt(s, Rt.__wbindgen_malloc), B = Ct, E = dt(u, Rt.__wbindgen_malloc), j = Ct, L = gt(w, Rt.__wbindgen_malloc), V = Ct, H = dt(g, Rt.__wbindgen_malloc), X = Ct, q = gt(b, Rt.__wbindgen_malloc), J = Ct, $ = dt(d, Rt.__wbindgen_malloc), Y = Ct, Z = gt(f, Rt.__wbindgen_malloc), K = Ct, Q = bt(m, Rt.__wbindgen_malloc), nn = Ct, en = gt(h, Rt.__wbindgen_malloc), _n = Ct, tn = Rt.computeNightDifficultyTyped(p, y, v, k, S, R, C, A, x, D, P, M, F, I, U, W, z, O, T, G, N, B, E, j, L, V, H, X, q, J, $, Y, Z, K, Q, nn, en, _n);
	if (tn[2]) throw ht(tn[1]);
	return ht(tn[0]);
}
function D(n) {
	let e, _;
	try {
		const i = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Ct, c = Rt.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ht(c[2]);
		return e = t, _ = r, ot(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function P(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), y = Ct, v = dt(e, Rt.__wbindgen_malloc), k = Ct, S = gt(_, Rt.__wbindgen_malloc), R = Ct, C = dt(t, Rt.__wbindgen_malloc), A = Ct, x = gt(r, Rt.__wbindgen_malloc), D = Ct, P = bt(i, Rt.__wbindgen_malloc), M = Ct, F = gt(o, Rt.__wbindgen_malloc), I = Ct, U = bt(c, Rt.__wbindgen_malloc), W = Ct, z = gt(l, Rt.__wbindgen_malloc), O = Ct, T = dt(a, Rt.__wbindgen_malloc), G = Ct, N = gt(s, Rt.__wbindgen_malloc), B = Ct, E = dt(u, Rt.__wbindgen_malloc), j = Ct, L = gt(w, Rt.__wbindgen_malloc), V = Ct, H = dt(g, Rt.__wbindgen_malloc), X = Ct, q = gt(b, Rt.__wbindgen_malloc), J = Ct, $ = dt(d, Rt.__wbindgen_malloc), Y = Ct, Z = gt(f, Rt.__wbindgen_malloc), K = Ct, Q = bt(m, Rt.__wbindgen_malloc), nn = Ct, en = gt(h, Rt.__wbindgen_malloc), _n = Ct, tn = Rt.computeNightSignalsTyped(p, y, v, k, S, R, C, A, x, D, P, M, F, I, U, W, z, O, T, G, N, B, E, j, L, V, H, X, q, J, $, Y, Z, K, Q, nn, en, _n);
	if (tn[2]) throw ht(tn[1]);
	return ht(tn[0]);
}
function M(n, e, _) {
	const t = bt(n, Rt.__wbindgen_malloc), r = Ct, i = dt(e, Rt.__wbindgen_malloc), o = Ct, c = Rt.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw ht(c[1]);
	return ht(c[0]);
}
function F(n) {
	const e = Rt.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function I(n) {
	const e = Rt.consensusDisagreementDetail(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function U(n) {
	const e = Rt.consensusDisagreements(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function W(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct;
	Rt.csvBufferAppend(e, _);
}
function z(n) {
	Rt.csvBufferClear(n);
}
function O(n, e) {
	const _ = Rt.cutpointEpochCompatibility(n, e);
	if (_[2]) throw ht(_[1]);
	return ht(_[0]);
}
function T(n, e, _, t, r) {
	const i = dt(n, Rt.__wbindgen_malloc), o = Ct, c = Rt.cutpointToneCodes(i, o, e, _, t, r);
	var l = et(c[0], c[1]).slice();
	return Rt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function G(n, e, _, t) {
	const r = Rt.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = ot(r[0], r[1]).slice(), Rt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function N(n, e, _, t) {
	return 0 !== Rt.cutpointsValid(n, e, _, t);
}
function B(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = gt(e, Rt.__wbindgen_malloc), i = Ct, o = Rt.describeColumns(_, t, r, i);
	if (o[2]) throw ht(o[1]);
	return ht(o[0]);
}
function E(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = dt(e, Rt.__wbindgen_malloc), i = Ct, o = Rt.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw ht(o[2]);
	var c = et(o[0], o[1]).slice();
	return Rt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function j(n, e) {
	let _, t;
	try {
		const r = bt(n, Rt.__wbindgen_malloc), i = Ct, o = mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Ct, l = Rt.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], ot(l[0], l[1]);
	} finally {
		Rt.__wbindgen_free(_, t, 1);
	}
}
function L(n) {
	const e = Rt.detectGgirHasptVariant(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function V(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct;
	var o = wt(e) ? 0 : mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Ct, l = wt(_) ? 0 : dt(_, Rt.__wbindgen_malloc), a = Ct, s = wt(t) ? 0 : dt(t, Rt.__wbindgen_malloc), u = Ct;
	return Rt.detectHdcza(r, i, o, c, l, a, s, u);
}
function H(n) {
	const e = dt(n, Rt.__wbindgen_malloc), _ = Ct;
	return 0 !== Rt.detectHourClockJumpMs(e, _);
}
function X(n) {
	const e = dt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.detectNonwear(e, _);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function q(n) {
	const e = dt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.detectNonwearChoi2011(e, _);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function J(n) {
	const e = dt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.detectNonwearChoi2011Bouts(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function $(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = Rt.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw ht(r[2]);
	var i = et(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Y(n) {
	const e = dt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.detectNonwearChoi2012(e, _);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Z(n) {
	const e = dt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.detectNonwearChoi2012Bouts(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function K(n) {
	const e = dt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.detectNonwearChoiBouts(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function Q(n) {
	let e, _;
	try {
		const i = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Ct, c = Rt.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ht(c[2]);
		return e = t, _ = r, ot(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function nn(n, e, _, t, r, i, o) {
	const c = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), l = Ct, a = mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), s = Ct, u = dt(_, Rt.__wbindgen_malloc), w = Ct, g = dt(t, Rt.__wbindgen_malloc), b = Ct, d = dt(r, Rt.__wbindgen_malloc), f = Ct, m = Rt.detectNonwearUnifiedBatchTyped(c, l, a, s, u, w, g, b, d, f, i, o);
	if (m[2]) throw ht(m[1]);
	return ht(m[0]);
}
function en(n, e, _) {
	const t = Rt.dstPlaceholderRuns(n, e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function _n(n, e, _, t) {
	const r = Rt.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = K_(r[0], r[1]).slice(), Rt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function tn(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = dt(e, Rt.__wbindgen_malloc), i = Ct, o = Rt.epochAgreement(_, t, r, i);
	if (o[2]) throw ht(o[1]);
	return ht(o[0]);
}
function rn(n, e, _, t, r) {
	const i = dt(n, Rt.__wbindgen_malloc), o = Ct, c = dt(e, Rt.__wbindgen_malloc), l = Ct, a = dt(_, Rt.__wbindgen_malloc), s = Ct, u = dt(t, Rt.__wbindgen_malloc), w = Ct, g = Rt.epochRawData(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw ht(g[1]);
	return ht(g[0]);
}
function on(n, e, _) {
	const t = dt(n, Rt.__wbindgen_malloc), r = Ct, i = dt(e, Rt.__wbindgen_malloc), o = Ct, c = Rt.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw ht(c[1]);
	return ht(c[0]);
}
function cn(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = Rt.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = nt(o[0], o[1]).slice(), Rt.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function ln(n, e) {
	let _, t;
	try {
		const o = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Ct, l = mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), a = Ct, s = Rt.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, ht(s[2]);
		return _ = r, t = i, ot(r, i);
	} finally {
		Rt.__wbindgen_free(_, t, 1);
	}
}
function an(n) {
	const e = Rt.exportNapAggregate(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function sn(n, e, _) {
	const t = Rt.exportPeriodFigures(!wt(n), wt(n) ? 0 : n, !wt(e), wt(e) ? 0 : e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function un(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.extractCapsense(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function wn(n, e, _, t, r) {
	const i = dt(n, Rt.__wbindgen_malloc), o = Ct, c = dt(e, Rt.__wbindgen_malloc), l = Ct, a = dt(_, Rt.__wbindgen_malloc), s = Ct, u = mt(r, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), w = Ct, g = Rt.foldOntoGrid(i, o, c, l, a, s, t, u, w);
	if (g[3]) throw ht(g[2]);
	var b = K_(g[0], g[1]).slice();
	return Rt.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function gn(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = mt(t, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Ct, l = Rt.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw ht(l[2]);
	var a = K_(l[0], l[1]).slice();
	return Rt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function bn(n, e, _, t, r) {
	const i = bt(_, Rt.__wbindgen_malloc), o = Ct, c = dt(t, Rt.__wbindgen_malloc), l = Ct, a = Rt.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw ht(a[1]);
	return ht(a[0]);
}
function dn(n, e, _, t, r, i) {
	const o = dt(_, Rt.__wbindgen_malloc), c = Ct, l = dt(t, Rt.__wbindgen_malloc), a = Ct, s = mt(i, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), u = Ct, w = Rt.foldUniformOntoGrid(n, e, o, c, l, a, r, s, u);
	if (w[3]) throw ht(w[2]);
	var g = K_(w[0], w[1]).slice();
	return Rt.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function fn(n) {
	const e = Rt.fuseNonwearMasks(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function mn(n, e) {
	const _ = Rt.generateActiwareRestIntervals(n, e);
	if (_[2]) throw ht(_[1]);
	return ht(_[0]);
}
function hn() {
	const n = Rt.getComputeCapabilitiesV1();
	if (n[2]) throw ht(n[1]);
	return ht(n[0]);
}
function pn(n, e, _) {
	const t = Rt.ggir5sWallClockMs(n, e, _);
	if (t[3]) throw ht(t[2]);
	var r = K_(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function yn(n) {
	const e = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), _ = Ct, t = Rt.ggirConfigValues(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function vn(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct;
	var r = wt(e) ? 0 : dt(e, Rt.__wbindgen_malloc), i = Ct;
	const o = Rt.ggirDaysIncluded(_, t, r, i);
	var c = et(o[0], o[1]).slice();
	return Rt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function kn(n, e) {
	const _ = bt(n, Rt.__wbindgen_malloc), t = Ct;
	var r = wt(e) ? 0 : mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Ct;
	const o = Rt.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw ht(o[1]);
	return ht(o[0]);
}
function Sn(n, e, _) {
	var t = wt(_) ? 0 : dt(_, Rt.__wbindgen_malloc), r = Ct;
	const i = Rt.ggirDstPlaceholderCuts(n, e, t, r);
	if (i[2]) throw ht(i[1]);
	return ht(i[0]);
}
function Rn() {
	return Rt.ggirIncludeDayCriterionHours();
}
function Cn(n, e, _, t) {
	const r = gt(n, Rt.__wbindgen_malloc), i = Ct;
	var o = wt(t) ? 0 : dt(t, Rt.__wbindgen_malloc), c = Ct;
	const l = Rt.ggirIndicesToWallClockMs(r, i, e, _, o, c);
	if (l[3]) throw ht(l[2]);
	var a = K_(l[0], l[1]).slice();
	return Rt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function An(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = Rt.ggirLabelsToStoredMs(_, t, e);
	if (r[3]) throw ht(r[2]);
	var i = K_(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function xn(n, e, _, t) {
	const r = ft(n, Rt.__wbindgen_malloc), i = Ct, o = dt(e, Rt.__wbindgen_malloc), c = Ct, l = dt(_, Rt.__wbindgen_malloc), a = Ct, s = dt(t, Rt.__wbindgen_malloc), u = Ct, w = Rt.ggirManualNightClocks(r, i, o, c, l, a, s, u);
	if (w[2]) throw ht(w[1]);
	return ht(w[0]);
}
function Dn(n, e, _, t) {
	const r = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Ct, o = mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Ct, l = mt(_, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), a = Ct, s = Rt.ggirSleeplogStoredClocks(r, i, o, c, l, a, t);
	if (s[3]) throw ht(s[2]);
	let u;
	return 0 !== s[0] && (u = Q_(s[0], s[1]).slice(), Rt.__wbindgen_free(s[0], 4 * s[1], 4)), u;
}
function Pn(n, e) {
	return Rt.ggirSptDurationHours(n, e);
}
function Mn(n, e) {
	const _ = Rt.ggirSummaryDenominator(n, e);
	if (_[2]) throw ht(_[1]);
	return ht(_[0]);
}
function Fn(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = dt(e, Rt.__wbindgen_malloc), i = Ct, o = Rt.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function In(n) {
	let e, _;
	try {
		const i = bt(n, Rt.__wbindgen_malloc), o = Ct, c = Rt.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ht(c[2]);
		return e = t, _ = r, ot(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function Un(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = dt(e, Rt.__wbindgen_malloc), c = Ct, l = dt(_, Rt.__wbindgen_malloc), a = Ct, s = dt(t, Rt.__wbindgen_malloc), u = Ct, w = Rt.implausibilityReasons(r, i, o, c, l, a, s, u);
	if (w[2]) throw ht(w[1]);
	return ht(w[0]);
}
function Wn(n) {
	return Rt.initThreadPool(n);
}
function zn() {
	Rt.installPanicHook();
}
function On(n) {
	const e = Rt.interRaterReliability(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function Tn(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = Rt.irregularInternalDays(_, t, e);
	var i = Q_(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Gn(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct;
	return 0 !== Rt.isGeneactivFormat(e, _);
}
function Nn(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = dt(e, Rt.__wbindgen_malloc), c = Ct, l = dt(_, Rt.__wbindgen_malloc), a = Ct, s = Rt.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw ht(s[1]);
	return ht(s[0]);
}
function Bn(n, e, _) {
	const t = dt(n, Rt.__wbindgen_malloc), r = Ct, i = Rt.markerIndexRange(t, r, e, _);
	var o = nt(i[0], i[1]).slice();
	return Rt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function En(n, e, _, t, r, i, o) {
	const c = dt(n, Rt.__wbindgen_malloc), l = Ct, a = dt(e, Rt.__wbindgen_malloc), s = Ct, u = Rt.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (u[2]) throw ht(u[1]);
	return ht(u[0]);
}
function jn(n) {
	const e = dt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Ln(n, e, _, t) {
	const r = Rt.metricWarnings(n, e, _, t);
	var i = et(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Vn(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = dt(e, Rt.__wbindgen_malloc), i = Ct, o = Rt.midSleepClockHours(_, t, r, i);
	var c = K_(o[0], o[1]).slice();
	return Rt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Hn(n, e, _, t, r) {
	const i = dt(n, Rt.__wbindgen_malloc), o = Ct, c = dt(e, Rt.__wbindgen_malloc), l = Ct, a = dt(_, Rt.__wbindgen_malloc), s = Ct, u = Rt.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw ht(u[1]);
	return ht(u[0]);
}
function Xn(n) {
	const e = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), _ = Ct, t = Rt.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = ot(t[0], t[1]).slice(), Rt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function qn(n, e, _, t, r) {
	const i = dt(_, Rt.__wbindgen_malloc), o = Ct, c = dt(t, Rt.__wbindgen_malloc), l = Ct, a = dt(r, Rt.__wbindgen_malloc), s = Ct, u = Rt.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (u[2]) throw ht(u[1]);
	return ht(u[0]);
}
function Jn(n, e, _, t) {
	let r, i;
	try {
		const l = gt(n, Rt.__wbindgen_malloc), a = Ct, s = mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), u = Ct, w = Rt.nonwearContributors(l, a, s, u, _, t);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, ht(w[2]);
		return r = o, i = c, ot(o, c);
	} finally {
		Rt.__wbindgen_free(r, i, 1);
	}
}
function $n(n) {
	const e = dt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.nonwearInSleepCounts(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function Yn(n) {
	const e = Rt.nonwearSleepOverlap(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function Zn(n, e, _) {
	const t = dt(n, Rt.__wbindgen_malloc), r = Ct, i = dt(e, Rt.__wbindgen_malloc), o = Ct, c = Rt.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw ht(c[1]);
	return ht(c[0]);
}
function Kn(n, e, _, t, r, i) {
	const o = mt(r, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Ct, l = Rt.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw ht(l[2]);
	var a = K_(l[0], l[1]).slice();
	return Rt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function Qn(n, e) {
	const _ = bt(n, Rt.__wbindgen_malloc), t = Ct, r = Rt.parseActigraphCsv(_, t, e);
	if (r[2]) throw ht(r[1]);
	return ht(r[0]);
}
function ne(n) {
	const e = Rt.parseActigraphCsvBuffered(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function ee(n, e, _, t) {
	const r = bt(n, Rt.__wbindgen_malloc), i = Ct;
	var o = wt(e) ? 0 : mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Ct, l = wt(t) ? 0 : mt(t, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), a = Ct;
	const s = Rt.parseAw5(r, i, o, c, wt(_) ? 0 : $_(_), l, a);
	if (s[2]) throw ht(s[1]);
	return ht(s[0]);
}
function _e(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.parseCwa(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function te(n, e) {
	const _ = bt(n, Rt.__wbindgen_malloc), t = Ct, r = mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Ct, o = Rt.parseEpochSeries(_, t, r, i);
	if (o[2]) throw ht(o[1]);
	return ht(o[0]);
}
function re(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.parseGeneactivBin(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function ie(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.parseGeneactivCsv(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function oe() {
	const n = Rt.parseGeneactivCsvBuffered();
	if (n[2]) throw ht(n[1]);
	return ht(n[0]);
}
function ce(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.parseGt3x(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function le(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = bt(e, Rt.__wbindgen_malloc), c = Ct, l = bt(_, Rt.__wbindgen_malloc), a = Ct, s = Rt.participantValidity(r, i, o, c, l, a, t);
	if (s[2]) throw ht(s[1]);
	return ht(s[0]);
}
function ae(n, e, _, t, r) {
	const i = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Ct, c = dt(e, Rt.__wbindgen_malloc), l = Ct;
	var a = wt(_) ? 0 : dt(_, Rt.__wbindgen_malloc), s = Ct;
	const u = Rt.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (u[2]) throw ht(u[1]);
	return ht(u[0]);
}
function se(n) {
	let e, _;
	try {
		const i = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Ct, c = Rt.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ht(c[2]);
		return e = t, _ = r, ot(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function ue(n, e, _, t, r, i) {
	const o = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Ct, l = dt(e, Rt.__wbindgen_malloc), a = Ct, s = dt(_, Rt.__wbindgen_malloc), u = Ct, w = bt(t, Rt.__wbindgen_malloc), g = Ct, b = bt(r, Rt.__wbindgen_malloc), d = Ct, f = mt(i, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), m = Ct, h = Rt.placeMarkersBatch(o, c, l, a, s, u, w, g, b, d, f, m);
	if (h[2]) throw ht(h[1]);
	return ht(h[0]);
}
function we(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), y = Ct, v = dt(e, Rt.__wbindgen_malloc), k = Ct, S = gt(_, Rt.__wbindgen_malloc), R = Ct, C = dt(t, Rt.__wbindgen_malloc), A = Ct, x = gt(r, Rt.__wbindgen_malloc), D = Ct, P = bt(i, Rt.__wbindgen_malloc), M = Ct, F = gt(o, Rt.__wbindgen_malloc), I = Ct, U = bt(c, Rt.__wbindgen_malloc), W = Ct, z = gt(l, Rt.__wbindgen_malloc), O = Ct, T = dt(a, Rt.__wbindgen_malloc), G = Ct, N = gt(s, Rt.__wbindgen_malloc), B = Ct, E = dt(u, Rt.__wbindgen_malloc), j = Ct, L = gt(w, Rt.__wbindgen_malloc), V = Ct, H = dt(g, Rt.__wbindgen_malloc), X = Ct, q = gt(b, Rt.__wbindgen_malloc), J = Ct, $ = dt(d, Rt.__wbindgen_malloc), Y = Ct, Z = gt(f, Rt.__wbindgen_malloc), K = Ct, Q = bt(m, Rt.__wbindgen_malloc), nn = Ct, en = gt(h, Rt.__wbindgen_malloc), _n = Ct, tn = Rt.placeMarkersTyped(p, y, v, k, S, R, C, A, x, D, P, M, F, I, U, W, z, O, T, G, N, B, E, j, L, V, H, X, q, J, $, Y, Z, K, Q, nn, en, _n);
	if (tn[2]) throw ht(tn[1]);
	return ht(tn[0]);
}
function ge(n) {
	let e, _;
	try {
		const i = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Ct, c = Rt.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ht(c[2]);
		return e = t, _ = r, ot(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function be(n, e, _, t) {
	const r = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Ct, o = dt(e, Rt.__wbindgen_malloc), c = Ct, l = dt(_, Rt.__wbindgen_malloc), a = Ct, s = bt(t, Rt.__wbindgen_malloc), u = Ct, w = Rt.placeNonwearMarkersTyped(r, i, o, c, l, a, s, u);
	if (w[2]) throw ht(w[1]);
	return ht(w[0]);
}
function de(n) {
	const e = Rt.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function fe(n) {
	const e = Rt.prepareCompactPipelineV1(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function me(n, e, _, t, r, i, o) {
	const c = dt(n, Rt.__wbindgen_malloc), l = Ct, a = dt(e, Rt.__wbindgen_malloc), s = Ct, u = dt(_, Rt.__wbindgen_malloc), w = Ct, g = dt(t, Rt.__wbindgen_malloc), b = Ct;
	var d = wt(o) ? 0 : mt(o, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), f = Ct;
	const m = Rt.processGeneactivRaw(c, l, a, s, u, w, g, b, r, i, d, f);
	if (m[2]) throw ht(m[1]);
	return ht(m[0]);
}
function he(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.processGt3xFull(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function pe(n, e) {
	const _ = bt(n, Rt.__wbindgen_malloc), t = Ct, r = Rt.processGt3xFullWithEpoch(_, t, e);
	if (r[2]) throw ht(r[1]);
	return ht(r[0]);
}
function ye(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.processGt3xPart1(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function ve(n, e) {
	const _ = bt(n, Rt.__wbindgen_malloc), t = Ct, r = Rt.processGt3xPart1WithEpoch(_, t, e);
	if (r[2]) throw ht(r[1]);
	return ht(r[0]);
}
function ke(n, e, _, t, r, i) {
	const o = dt(n, Rt.__wbindgen_malloc), c = Ct, l = dt(e, Rt.__wbindgen_malloc), a = Ct, s = dt(_, Rt.__wbindgen_malloc), u = Ct;
	var w = wt(i) ? 0 : mt(i, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), g = Ct;
	const b = Rt.processRawXyz(o, c, l, a, s, u, t, r, w, g);
	if (b[2]) throw ht(b[1]);
	return ht(b[0]);
}
function Se(n, e, _, t, r, i) {
	const o = dt(n, Rt.__wbindgen_malloc), c = Ct, l = dt(e, Rt.__wbindgen_malloc), a = Ct, s = dt(_, Rt.__wbindgen_malloc), u = Ct, w = dt(t, Rt.__wbindgen_malloc), g = Ct;
	var b = wt(i) ? 0 : mt(i, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), d = Ct;
	const f = Rt.processRawXyzImputed(o, c, l, a, s, u, w, g, r, b, d);
	if (f[2]) throw ht(f[1]);
	return ht(f[0]);
}
function Re(n, e, _, t, r, i, o) {
	const c = dt(n, Rt.__wbindgen_malloc), l = Ct, a = dt(e, Rt.__wbindgen_malloc), s = Ct, u = dt(_, Rt.__wbindgen_malloc), w = Ct, g = dt(t, Rt.__wbindgen_malloc), b = Ct;
	var d = wt(i) ? 0 : mt(i, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), f = Ct;
	const m = Rt.processRawXyzImputedWithEpoch(c, l, a, s, u, w, g, b, r, d, f, o);
	if (m[2]) throw ht(m[1]);
	return ht(m[0]);
}
function Ce(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = bt(e, Rt.__wbindgen_malloc), c = Ct, l = dt(t, Rt.__wbindgen_malloc), a = Ct, s = Rt.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var u = et(s[0], s[1]).slice();
	return Rt.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function Ae(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = dt(e, Rt.__wbindgen_malloc), c = Ct, l = dt(_, Rt.__wbindgen_malloc), a = Ct, s = Rt.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw ht(s[1]);
	return ht(s[0]);
}
function xe(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.readGgirMeta(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function De() {
	return Rt.recommended_chunk_size_mb() >>> 0;
}
function Pe(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Ct, o = Rt.reduceF64V1(_, t, r, i);
	if (o[2]) throw ht(o[1]);
	return o[0];
}
function Me(n) {
	const e = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), _ = Ct, t = Rt.resolveTimezone(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function Fe(n, e, _) {
	const t = dt(n, Rt.__wbindgen_malloc), r = Ct, i = dt(e, Rt.__wbindgen_malloc), o = Ct, c = gt(_, Rt.__wbindgen_malloc), l = Ct, a = Rt.restoredDstRuns(t, r, i, o, c, l);
	if (a[2]) throw ht(a[1]);
	return ht(a[0]);
}
function Ie(n, e, _, t, r, i, o, c, l, a, s) {
	const u = bt(n, Rt.__wbindgen_malloc), w = Ct, g = mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), b = Ct;
	var d = wt(_) ? 0 : bt(_, Rt.__wbindgen_malloc), f = Ct, m = wt(t) ? 0 : bt(t, Rt.__wbindgen_malloc), h = Ct, p = wt(r) ? 0 : bt(r, Rt.__wbindgen_malloc), y = Ct, v = wt(i) ? 0 : bt(i, Rt.__wbindgen_malloc), k = Ct, S = wt(o) ? 0 : bt(o, Rt.__wbindgen_malloc), R = Ct, C = wt(c) ? 0 : mt(c, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), A = Ct, x = wt(l) ? 0 : mt(l, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), D = Ct;
	const P = Rt.reviewGgirResults(u, w, g, b, d, f, m, h, p, y, v, k, S, R, C, A, x, D, a, s);
	if (P[2]) throw ht(P[1]);
	return ht(P[0]);
}
function Ue(n) {
	const e = Rt.reviewNonwearFile(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function We(n) {
	const e = Rt.reviewNonwearTotals(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function ze(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = Rt.roundCountStorage(_, t, e);
	var i = K_(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Oe(n) {
	const e = Rt.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function Te(n) {
	const e = Rt.runCompactPipelineV1(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function Ge(n, e) {
	const _ = Rt.runFullPipeline(n, e);
	if (_[2]) throw ht(_[1]);
	return ht(_[0]);
}
function Ne(n) {
	const e = Rt.runFullPipelineOutcomeV1(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function Be(n) {
	const e = Rt.runFullPipelineV1(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function Ee(n, e) {
	const _ = Rt.runGgirFromEpoch(n, e);
	if (_[2]) throw ht(_[1]);
	return ht(_[0]);
}
function je(n) {
	const e = Rt.runGgirPart3(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function Le(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.runMilestone(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function Ve(n) {
	const e = Rt.scoreAllDays(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function He(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = Rt.scoreColeKripke(_, t, e);
	var i = et(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Xe(n) {
	let e, _;
	try {
		const i = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Ct, c = Rt.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ht(c[2]);
		return e = t, _ = r, ot(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function qe(n) {
	const e = Rt.scoreConsensusMajority(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function Je(n, e, _) {
	const t = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), r = Ct, i = bt(e, Rt.__wbindgen_malloc), o = Ct, c = gt(_, Rt.__wbindgen_malloc), l = Ct, a = Rt.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw ht(a[1]);
	return ht(a[0]);
}
function $e(n) {
	let e, _;
	try {
		const i = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Ct, c = Rt.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, ht(c[2]);
		return e = t, _ = r, ot(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function Ye(n, e, _, t, r, i) {
	const o = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Ct, l = dt(e, Rt.__wbindgen_malloc), a = Ct, s = dt(_, Rt.__wbindgen_malloc), u = Ct, w = dt(t, Rt.__wbindgen_malloc), g = Ct, b = Rt.scoreEpochsTyped(o, c, l, a, s, u, w, g, r, i);
	if (b[2]) throw ht(b[1]);
	return ht(b[0]);
}
function Ze(n) {
	const e = dt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.scoreGgirHasib(e, _);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Ke(n) {
	const e = Rt.scoreGgirHasibVariant(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function Qe(n, e, _) {
	const t = dt(n, Rt.__wbindgen_malloc), r = Ct, i = dt(e, Rt.__wbindgen_malloc), o = Ct, c = Rt.scoreGgirSib(t, r, i, o, _);
	if (c[2]) throw ht(c[1]);
	return ht(c[0]);
}
function n_(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = Rt.scoreSadeh(_, t, e);
	var i = et(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function e_(n) {
	const e = Rt.settleManualNonwearNights(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function __(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.sha256StreamFeed(e, _);
	if (t[1]) throw ht(t[0]);
}
function t_() {
	let n, e;
	try {
		const r = Rt.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, ht(r[2]);
		return n = _, e = t, ot(_, t);
	} finally {
		Rt.__wbindgen_free(n, e, 1);
	}
}
function r_() {
	Rt.sha256StreamStart();
}
function i_(n, e) {
	const _ = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Ct, r = Rt.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = ot(r[0], r[1]).slice(), Rt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function o_(n, e, _, t, r) {
	const i = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Ct, c = dt(e, Rt.__wbindgen_malloc), l = Ct, a = gt(_, Rt.__wbindgen_malloc), s = Ct, u = dt(t, Rt.__wbindgen_malloc), w = Ct, g = gt(r, Rt.__wbindgen_malloc), b = Ct, d = Rt.sleepRegularityIndex(i, o, c, l, a, s, u, w, g, b);
	if (d[3]) throw ht(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function c_(n, e) {
	const _ = Rt.sleepWakeScores(n, e);
	if (_[2]) throw ht(_[1]);
	return ht(_[0]);
}
function l_(n) {
	const e = ft(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.sourceLabelsWallClockMs(e, _);
	var r = K_(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function a_(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = dt(e, Rt.__wbindgen_malloc), c = Ct, l = Rt.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function s_(n, e, _) {
	const t = dt(n, Rt.__wbindgen_malloc), r = Ct, i = dt(_, Rt.__wbindgen_malloc), o = Ct, c = Rt.spliceDstPlaceholders(t, r, e, i, o);
	if (c[3]) throw ht(c[2]);
	let l;
	return 0 !== c[0] && (l = K_(c[0], c[1]).slice(), Rt.__wbindgen_free(c[0], 8 * c[1], 8)), l;
}
function u_(n) {
	return Rt.startThreadPool(n);
}
function w_(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = bt(e, Rt.__wbindgen_malloc), c = Ct, l = dt(_, Rt.__wbindgen_malloc), a = Ct, s = dt(t, Rt.__wbindgen_malloc), u = Ct, w = Rt.statesInPeriods(r, i, o, c, l, a, s, u);
	var g = et(w[0], w[1]).slice();
	return Rt.__wbindgen_free(w[0], 1 * w[1], 1), g;
}
function g_(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = Rt.storedToGgirLabelsMs(_, t, e);
	if (r[3]) throw ht(r[2]);
	var i = K_(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function b_(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.streamParseFeed(e, _);
	if (t[2]) throw ht(t[1]);
	return t[0] >>> 0;
}
function d_() {
	const n = Rt.streamParseFinish();
	if (n[2]) throw ht(n[1]);
	return t.__wrap(n[0]);
}
function f_() {
	const n = Rt.streamParseFinishChunk();
	if (n[2]) throw ht(n[1]);
	return _.__wrap(n[0]);
}
function m_(n) {
	const e = Rt.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw ht(e[1]);
	return _.__wrap(e[0]);
}
function h_(n, e) {
	const _ = Rt.streamParseStart(n, e);
	if (_[1]) throw ht(_[0]);
}
function p_(n, e) {
	const _ = Rt.streamParseStartData(n, e);
	if (_[1]) throw ht(_[0]);
}
function y_(n, e, _) {
	const t = Rt.streamParseStartWithEpoch(n, e, _);
	if (t[1]) throw ht(t[0]);
}
function v_(n, e) {
	const _ = bt(n, Rt.__wbindgen_malloc), t = Ct, r = Rt.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw ht(r[1]);
	return ht(r[0]);
}
function k_(n) {
	const e = Rt.summarizeExportGroups(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function S_(n) {
	const e = Rt.summarizePhysicalActivityDays(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function R_(n) {
	const e = Rt.summarizePhysicalActivityTrace(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function C_() {
	return 0 !== Rt.threadPoolReady();
}
function A_(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = Rt.thresholdProbabilities(_, t, e);
	var i = et(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function x_(n) {
	const e = Rt.timeSemantics(n);
	if (e[2]) throw ht(e[1]);
	return ht(e[0]);
}
function D_(n, e, _) {
	const t = dt(n, Rt.__wbindgen_malloc), r = Ct, i = Rt.timestampDiscontinuities(t, r, e, _);
	if (i[2]) throw ht(i[1]);
	return ht(i[0]);
}
function P_(n, e, _) {
	const t = Rt.uniformTimestamps(n, e, _);
	var r = K_(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function M_(n, e) {
	const _ = Rt.utcDatesInSpan(n, e);
	var t = Q_(_[0], _[1]).slice();
	return Rt.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function F_(n) {
	const e = dt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.utcDayIndex(e, _);
	if (t[2]) throw ht(t[1]);
	return ht(t[0]);
}
function I_(n) {
	const e = bt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function U_(n, e) {
	const _ = dt(n, Rt.__wbindgen_malloc), t = Ct, r = Rt.validWearDays(_, t, e);
	if (r[3]) throw ht(r[2]);
	var i = et(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function W_(n, e, _) {
	const t = dt(n, Rt.__wbindgen_malloc), r = Ct, i = Rt.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw ht(i[1]);
	return ht(i[0]);
}
function z_(n) {
	const e = dt(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.wallClockLabels(e, _);
	var r = Q_(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function O_(n, e, _) {
	const t = bt(n, Rt.__wbindgen_malloc), r = Ct, i = Rt.wallMaskOntoGgirGrid(t, r, e, _);
	if (i[3]) throw ht(i[2]);
	var o = et(i[0], i[1]).slice();
	return Rt.__wbindgen_free(i[0], 1 * i[1], 1), o;
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var T_ = class n {
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
		Rt.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		Rt.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return Rt.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return Rt.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return Rt.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function G_(n) {
	Rt.wbg_rayon_start_worker(n);
}
function N_(n, e) {
	const _ = mt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Ct;
	var r = wt(e) ? 0 : mt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Ct;
	const o = Rt.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw ht(o[1]);
	return ht(o[0]);
}
function B_(n) {
	const e = ft(n, Rt.__wbindgen_malloc), _ = Ct, t = Rt.weekendDates(e, _);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function E_(n, e, _, t) {
	const r = dt(n, Rt.__wbindgen_malloc), i = Ct, o = Rt.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function j_(n, e, _, t, r) {
	const i = dt(n, Rt.__wbindgen_malloc), o = Ct, c = dt(e, Rt.__wbindgen_malloc), l = Ct, a = dt(_, Rt.__wbindgen_malloc), s = Ct, u = Rt.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw ht(u[1]);
	return ht(u[0]);
}
function L_(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(ot(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = mt(String(e), Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Ct;
				tt().setInt32(n + 4, t, !0), tt().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				tt().setBigInt64(n + 8, wt(_) ? BigInt(0) : _, !0), tt().setInt32(n + 0, !wt(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return wt(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = mt(Z_(e), Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Ct;
				tt().setInt32(n + 4, t, !0), tt().setInt32(n + 0, _, !0);
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
				return Rt.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return St;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const _ = "number" == typeof e ? e : void 0;
				tt().setFloat64(n + 8, wt(_) ? 0 : _, !0), tt().setInt32(n + 0, !wt(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = wt(_) ? 0 : mt(_, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), r = Ct;
				tt().setInt32(n + 4, r, !0), tt().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(ot(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return ut(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return ut(function(n, e, _, t) {
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
					_ = n, t = e, console.error(ot(n, e));
				} finally {
					Rt.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return ut(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return ut(function(n, e) {
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
				return new Uint32Array(nt(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(K_(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(et(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return ut(function(n) {
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
				return ut(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(et(n, e), _);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return ut(function(n, e, _) {
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
				const _ = mt(e.stack, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Ct;
				tt().setInt32(n + 4, t, !0), tt().setInt32(n + 0, _, !0);
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
				}(e, _, T_.__wrap(t));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return wt(n) ? 0 : $_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return wt(n) ? 0 : $_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return wt(n) ? 0 : $_(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return wt(n) ? 0 : $_(n);
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
						0 === --t.cnt && (Rt.__wbindgen_destroy_closure(t.a, t.b), t.a = 0, Y_.unregister(t));
					}, Y_.register(r, t, t), r;
				}(n, e, V_);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return et(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return ot(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Rt.__wbindgen_externrefs, e = n.grow(4);
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
function V_(n, e, _) {
	Rt.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, _);
}
Symbol.dispose && (T_.prototype[Symbol.dispose] = T_.prototype.free);
const H_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Rt.__wbg_aw5batch_free(n >>> 0, 1)), X_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Rt.__wbg_streamchunkresult_free(n >>> 0, 1)), q_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Rt.__wbg_streamparseresult_free(n >>> 0, 1)), J_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Rt.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function $_(n) {
	const e = Rt.__externref_table_alloc();
	return Rt.__wbindgen_externrefs.set(e, n), e;
}
const Y_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Rt.__wbindgen_destroy_closure(n.a, n.b));
function Z_(n) {
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
		e > 0 && (_ += Z_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + Z_(n[t]);
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
function K_(n, e) {
	return n >>>= 0, it().subarray(n / 8, n / 8 + e);
}
function Q_(n, e) {
	n >>>= 0;
	const _ = tt(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(Rt.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return Rt.__externref_drop_slice(n, e), t;
}
function nt(n, e) {
	return n >>>= 0, lt().subarray(n / 4, n / 4 + e);
}
function et(n, e) {
	return n >>>= 0, st().subarray(n / 1, n / 1 + e);
}
let _t = null;
function tt() {
	return null !== _t && _t.buffer === Rt.memory.buffer || (_t = new DataView(Rt.memory.buffer)), _t;
}
let rt = null;
function it() {
	return null !== rt && rt.buffer === Rt.memory.buffer || (rt = new Float64Array(Rt.memory.buffer)), rt;
}
function ot(n, e) {
	return function(n, e) {
		return vt += e, vt >= yt && (pt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), pt.decode(), vt = e), pt.decode(st().slice(n, n + e));
	}(n >>>= 0, e);
}
let ct = null;
function lt() {
	return null !== ct && ct.buffer === Rt.memory.buffer || (ct = new Uint32Array(Rt.memory.buffer)), ct;
}
let at = null;
function st() {
	return null !== at && at.buffer === Rt.memory.buffer || (at = new Uint8Array(Rt.memory.buffer)), at;
}
function ut(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = $_(_);
		Rt.__wbindgen_exn_store(n);
	}
}
function wt(n) {
	return null == n;
}
function gt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return lt().set(n, _ / 4), Ct = n.length, _;
}
function bt(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return st().set(n, _ / 1), Ct = n.length, _;
}
function dt(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return it().set(n, _ / 8), Ct = n.length, _;
}
function ft(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = $_(n[t]);
		tt().setUint32(_ + 4 * t, e, !0);
	}
	return Ct = n.length, _;
}
function mt(n, e, _) {
	if (void 0 === _) {
		const _ = kt.encode(n), t = e(_.length, 1) >>> 0;
		return st().subarray(t, t + _.length).set(_), Ct = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = st();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = st().subarray(r + o, r + t);
		o += kt.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return Ct = o, r;
}
function ht(n) {
	const e = Rt.__wbindgen_externrefs.get(n);
	return Rt.__externref_table_dealloc(n), e;
}
let pt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
pt && pt.decode();
const yt = 2146435072;
let vt = 0;
const kt = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
kt && (kt.encodeInto = function(n, e) {
	const _ = kt.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let St, Rt, Ct = 0;
function At(n, e, _) {
	if (Rt = n.exports, St = e, _t = null, rt = null, ct = null, at = null, void 0 !== _ && ("number" != typeof _ || 0 === _ || _ % 65536 != 0)) throw new Error("invalid stack size");
	return Rt.__wbindgen_start(_), Rt;
}
function xt(n, e) {
	if (void 0 !== Rt) return Rt;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const t = L_(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), At(new WebAssembly.Instance(n, t), n, _);
}
async function Dt(n, e) {
	if (void 0 !== Rt) return Rt;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-B7ER4wTk.wasm", "" + import.meta.url));
	const t = L_(e);
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
	return At(r, i, _);
}
export { e as Aw5Batch, _ as StreamChunkResult, t as StreamParseResult, r as actiwareIntervalStatistics, i as actiwareSleepIntervals, o as actiwareWakeThreshold, c as actoursVersion, l as aggregateEpochSeries, a as analysisDatesOf, s as analysisWindowBounds, u as analysisWindowSlice, w as analyzePhysicalActivityDay, g as classifyActimetricPreschoolWristRf, b as classifyActimetricPreschoolWristRfLagLead, d as classifyActimetricPreschoolWristRfLagLeadCalibrated, f as clippedUnionHours, m as compareNonwearDetectorMasks, h as computeAnglez5s, p as computeCircadian, y as computeCircadianTyped, v as computeEnmo5s, k as computeMimsUnit, S as computeMimsUnitDataframe, R as computeMimsUnitTimingBreakdown, C as computeMimsUnitValues, A as computeNightDifficulty, x as computeNightDifficultyTyped, D as computeNightSignals, P as computeNightSignalsTyped, M as computeSleepMetrics, F as configureComputeMemoryBudgetV1, I as consensusDisagreementDetail, U as consensusDisagreements, W as csvBufferAppend, z as csvBufferClear, O as cutpointEpochCompatibility, T as cutpointToneCodes, G as cutpointsRefusal, N as cutpointsValid, Dt as default, B as describeColumns, E as detectDetachFromAccelerationG, j as detectDeviceFormat, L as detectGgirHasptVariant, V as detectHdcza, H as detectHourClockJumpMs, X as detectNonwear, q as detectNonwearChoi2011, J as detectNonwearChoi2011Bouts, $ as detectNonwearChoi2011Epoch, Y as detectNonwearChoi2012, Z as detectNonwearChoi2012Bouts, K as detectNonwearChoiBouts, Q as detectNonwearUnified, nn as detectNonwearUnifiedBatchTyped, en as dstPlaceholderRuns, _n as effectiveOverrideCutpoints, tn as epochAgreement, rn as epochRawData, on as epochWithBandpass, cn as epochsOverlapping, ln as executeHeroRuntime, an as exportNapAggregate, sn as exportPeriodFigures, un as extractCapsense, wn as foldOntoGrid, gn as foldSampleBlocks, bn as foldSleepWakeVotes, dn as foldUniformOntoGrid, fn as fuseNonwearMasks, mn as generateActiwareRestIntervals, hn as getComputeCapabilitiesV1, pn as ggir5sWallClockMs, yn as ggirConfigValues, vn as ggirDaysIncluded, kn as ggirDiaryLogShape, Sn as ggirDstPlaceholderCuts, Rn as ggirIncludeDayCriterionHours, Cn as ggirIndicesToWallClockMs, An as ggirLabelsToStoredMs, xn as ggirManualNightClocks, Dn as ggirSleeplogStoredClocks, Pn as ggirSptDurationHours, Mn as ggirSummaryDenominator, Fn as gridOffsetWithin, In as identifyGgirRData, Un as implausibilityReasons, xt as initSync, Wn as initThreadPool, zn as installPanicHook, On as interRaterReliability, Tn as irregularInternalDays, Gn as isGeneactivFormat, Nn as lstmSpectralFeatures30s, Bn as markerIndexRange, En as markerSleepOnsetOffset, jn as medianGapSeconds, Ln as metricWarnings, Vn as midSleepClockHours, Hn as neishabouriCounts, Xn as nextDate, qn as nightIntervalOverlap, Jn as nonwearContributors, $n as nonwearInSleepCounts, Yn as nonwearSleepOverlap, Zn as nonwearWeightRuns, Kn as normalizeCutpoints, Qn as parseActigraphCsv, ne as parseActigraphCsvBuffered, ee as parseAw5, _e as parseCwa, te as parseEpochSeries, re as parseGeneactivBin, ie as parseGeneactivCsv, oe as parseGeneactivCsvBuffered, ce as parseGt3x, le as participantValidity, ae as physicalActivitySeriesGrid, se as placeMarkers, ue as placeMarkersBatch, we as placeMarkersTyped, ge as placeNonwearMarkers, be as placeNonwearMarkersTyped, de as prepareCompactPipelineOutcomeV1, fe as prepareCompactPipelineV1, me as processGeneactivRaw, he as processGt3xFull, pe as processGt3xFullWithEpoch, ye as processGt3xPart1, ve as processGt3xPart1WithEpoch, ke as processRawXyz, Se as processRawXyzImputed, Re as processRawXyzImputedWithEpoch, Ce as projectLabelsOntoGrid, Ae as rasterizePeriods, xe as readGgirMeta, De as recommended_chunk_size_mb, Pe as reduceF64V1, Me as resolveTimezone, Fe as restoredDstRuns, Ie as reviewGgirResults, Ue as reviewNonwearFile, We as reviewNonwearTotals, ze as roundCountStorage, Oe as runCompactPipelineOutcomeV1, Te as runCompactPipelineV1, Ge as runFullPipeline, Ne as runFullPipelineOutcomeV1, Be as runFullPipelineV1, Ee as runGgirFromEpoch, je as runGgirPart3, Le as runMilestone, Ve as scoreAllDays, He as scoreColeKripke, Xe as scoreConsensus, qe as scoreConsensusMajority, Je as scoreConsensusTyped, $e as scoreEpochs, Ye as scoreEpochsTyped, Ze as scoreGgirHasib, Ke as scoreGgirHasibVariant, Qe as scoreGgirSib, n_ as scoreSadeh, e_ as settleManualNonwearNights, __ as sha256StreamFeed, t_ as sha256StreamFinish, r_ as sha256StreamStart, i_ as shiftDate, o_ as sleepRegularityIndex, c_ as sleepWakeScores, l_ as sourceLabelsWallClockMs, a_ as spanFiniteMean, s_ as spliceDstPlaceholders, u_ as startThreadPool, w_ as statesInPeriods, g_ as storedToGgirLabelsMs, b_ as streamParseFeed, d_ as streamParseFinish, f_ as streamParseFinishChunk, m_ as streamParseFinishChunkWithProgress, h_ as streamParseStart, p_ as streamParseStartData, y_ as streamParseStartWithEpoch, v_ as summarizeActimetricPreschoolWristRfClasses, k_ as summarizeExportGroups, S_ as summarizePhysicalActivityDays, R_ as summarizePhysicalActivityTrace, C_ as threadPoolReady, A_ as thresholdProbabilities, x_ as timeSemantics, D_ as timestampDiscontinuities, P_ as uniformTimestamps, M_ as utcDatesInSpan, F_ as utcDayIndex, I_ as validStateFraction, U_ as validWearDays, W_ as wallClockDstPlaceholders, z_ as wallClockLabels, O_ as wallMaskOntoGgirGrid, T_ as wbg_rayon_PoolBuilder, G_ as wbg_rayon_start_worker, N_ as wearSiteHasptRouting, B_ as weekendDates, E_ as windowCoverage, j_ as zeroCrossingCounts };
