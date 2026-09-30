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
		return this.__wbg_ptr = 0, X_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Ct.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = Ct.aw5batch_new(n);
		if (e[2]) throw pt(e[1]);
		return this.__wbg_ptr = e[0] >>> 0, X_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), r = At;
		var i = gt(_) ? 0 : ht(_, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), o = At;
		const c = Ct.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw pt(c[1]);
		return pt(c[0]);
	}
	subjects(n) {
		const e = Ct.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[2]) throw pt(e[1]);
		return pt(e[0]);
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
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
		Ct.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Ct.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Ct.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Ct.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Ct.streamchunkresult_axisX(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ct.streamchunkresult_axisY(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ct.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Ct.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ct.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ct(n[0], n[1]).slice(), Ct.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Ct.streamchunkresult_counts(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Ct.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Ct.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Ct.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = Ct.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = _t(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = Ct.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = _t(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get headerRowsSkipped() {
		return Ct.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Ct.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Ct.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Ct.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Ct.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ct(n[0], n[1]).slice(), Ct.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Ct.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Ct.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Ct.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Ct.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ct.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Ct.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ct.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = Ct.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = et(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Ct.streamchunkresult_temperature(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ct.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Ct.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ct.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Ct.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Ct.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Ct.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var t = class n {
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
		Ct.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Ct.streamparseresult_axisX(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ct.streamparseresult_axisY(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ct.streamparseresult_axisZ(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== Ct.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ct.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ct(n[0], n[1]).slice(), Ct.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return Ct.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== Ct.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ct.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ct.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Ct.streamparseresult_temperature(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ct.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ct.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = Q_(n[0], n[1]).slice();
		return Ct.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function r(n) {
	const e = Ct.actiwareIntervalStatistics(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function i(n, e, _) {
	const t = Ct.actiwareSleepIntervals(n, e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function o(n, e) {
	const _ = Ct.actiwareWakeThreshold(n, e);
	if (_[3]) throw pt(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function c() {
	let n, e;
	try {
		const _ = Ct.actoursVersion();
		return n = _[0], e = _[1], ct(_[0], _[1]);
	} finally {
		Ct.__wbindgen_free(n, e, 1);
	}
}
function l(n) {
	const e = Ct.aggregateEpochSeries(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function a(n) {
	const e = ft(n, Ct.__wbindgen_malloc), _ = At, t = Ct.analysisDatesOf(e, _);
	var r = nt(t[0], t[1]).slice();
	return Ct.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function s(n, e) {
	const _ = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), t = At, r = Ct.analysisWindowBounds(_, t, !gt(e), gt(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = Q_(r[0], r[1]).slice(), Ct.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function u(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), i = At, o = Ct.analysisWindowSlice(_, t, r, i);
	var c = et(o[0], o[1]).slice();
	return Ct.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function w(n) {
	let e, _;
	try {
		const i = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), o = At, c = Ct.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		Ct.__wbindgen_free(e, _, 1);
	}
}
function g(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = ft(e, Ct.__wbindgen_malloc), c = At, l = ft(_, Ct.__wbindgen_malloc), a = At, s = Ct.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw pt(s[2]);
	var u = _t(s[0], s[1]).slice();
	return Ct.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function b(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = ft(e, Ct.__wbindgen_malloc), c = At, l = ft(_, Ct.__wbindgen_malloc), a = At, s = Ct.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw pt(s[2]);
	var u = _t(s[0], s[1]).slice();
	return Ct.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function d(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = ft(e, Ct.__wbindgen_malloc), c = At, l = ft(_, Ct.__wbindgen_malloc), a = At, s = Ct.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw pt(s[2]);
	var u = _t(s[0], s[1]).slice();
	return Ct.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function f(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = ft(e, Ct.__wbindgen_malloc), c = At;
	return Ct.clippedUnionHours(r, i, o, c, _, t);
}
function m(n, e) {
	const _ = Ct.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw pt(_[1]);
	return pt(_[0]);
}
function h(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = ft(e, Ct.__wbindgen_malloc), c = At, l = ft(_, Ct.__wbindgen_malloc), a = At, s = Ct.computeAnglez5s(r, i, o, c, l, a, t);
	var u = Q_(s[0], s[1]).slice();
	return Ct.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function p(n) {
	let e, _;
	try {
		const i = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), o = At, c = Ct.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		Ct.__wbindgen_free(e, _, 1);
	}
}
function y(n, e, _, t, r, i, o) {
	const c = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), l = At, a = ft(e, Ct.__wbindgen_malloc), s = At, u = bt(_, Ct.__wbindgen_malloc), w = At, g = ft(t, Ct.__wbindgen_malloc), b = At, d = bt(r, Ct.__wbindgen_malloc), f = At, m = dt(i, Ct.__wbindgen_malloc), h = At, p = bt(o, Ct.__wbindgen_malloc), y = At, v = Ct.computeCircadianTyped(c, l, a, s, u, w, g, b, d, f, m, h, p, y);
	if (v[2]) throw pt(v[1]);
	return pt(v[0]);
}
function v(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = ft(e, Ct.__wbindgen_malloc), c = At, l = ft(_, Ct.__wbindgen_malloc), a = At, s = Ct.computeEnmo5s(r, i, o, c, l, a, t);
	var u = Q_(s[0], s[1]).slice();
	return Ct.__wbindgen_free(s[0], 8 * s[1], 8), u;
}
function k(n, e, _, t, r) {
	const i = ft(n, Ct.__wbindgen_malloc), o = At, c = ft(e, Ct.__wbindgen_malloc), l = At, a = ft(_, Ct.__wbindgen_malloc), s = At, u = Ct.computeMimsUnit(i, o, c, l, a, s, t, r);
	if (u[2]) throw pt(u[1]);
	return pt(u[0]);
}
function S(n, e, _, t, r) {
	const i = ft(n, Ct.__wbindgen_malloc), o = At, c = ft(e, Ct.__wbindgen_malloc), l = At, a = ft(_, Ct.__wbindgen_malloc), s = At, u = ft(t, Ct.__wbindgen_malloc), w = At, g = Ct.computeMimsUnitDataframe(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw pt(g[1]);
	return pt(g[0]);
}
function R(n, e, _, t, r) {
	const i = ft(n, Ct.__wbindgen_malloc), o = At, c = ft(e, Ct.__wbindgen_malloc), l = At, a = ft(_, Ct.__wbindgen_malloc), s = At, u = Ct.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, r);
	if (u[2]) throw pt(u[1]);
	return pt(u[0]);
}
function C(n, e, _, t, r) {
	const i = ft(n, Ct.__wbindgen_malloc), o = At, c = ft(e, Ct.__wbindgen_malloc), l = At, a = ft(_, Ct.__wbindgen_malloc), s = At, u = Ct.computeMimsUnitValues(i, o, c, l, a, s, t, r);
	if (u[3]) throw pt(u[2]);
	var w = Q_(u[0], u[1]).slice();
	return Ct.__wbindgen_free(u[0], 8 * u[1], 8), w;
}
function A(n) {
	let e, _;
	try {
		const i = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), o = At, c = Ct.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		Ct.__wbindgen_free(e, _, 1);
	}
}
function x(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), y = At, v = ft(e, Ct.__wbindgen_malloc), k = At, S = bt(_, Ct.__wbindgen_malloc), R = At, C = ft(t, Ct.__wbindgen_malloc), A = At, x = bt(r, Ct.__wbindgen_malloc), D = At, M = dt(i, Ct.__wbindgen_malloc), P = At, F = bt(o, Ct.__wbindgen_malloc), z = At, I = dt(c, Ct.__wbindgen_malloc), U = At, W = bt(l, Ct.__wbindgen_malloc), O = At, T = ft(a, Ct.__wbindgen_malloc), G = At, N = bt(s, Ct.__wbindgen_malloc), j = At, B = ft(u, Ct.__wbindgen_malloc), E = At, L = bt(w, Ct.__wbindgen_malloc), V = At, H = ft(g, Ct.__wbindgen_malloc), X = At, q = bt(b, Ct.__wbindgen_malloc), J = At, $ = ft(d, Ct.__wbindgen_malloc), Y = At, Z = bt(f, Ct.__wbindgen_malloc), K = At, Q = dt(m, Ct.__wbindgen_malloc), nn = At, en = bt(h, Ct.__wbindgen_malloc), _n = At, tn = Ct.computeNightDifficultyTyped(p, y, v, k, S, R, C, A, x, D, M, P, F, z, I, U, W, O, T, G, N, j, B, E, L, V, H, X, q, J, $, Y, Z, K, Q, nn, en, _n);
	if (tn[2]) throw pt(tn[1]);
	return pt(tn[0]);
}
function D(n) {
	let e, _;
	try {
		const i = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), o = At, c = Ct.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		Ct.__wbindgen_free(e, _, 1);
	}
}
function M(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), y = At, v = ft(e, Ct.__wbindgen_malloc), k = At, S = bt(_, Ct.__wbindgen_malloc), R = At, C = ft(t, Ct.__wbindgen_malloc), A = At, x = bt(r, Ct.__wbindgen_malloc), D = At, M = dt(i, Ct.__wbindgen_malloc), P = At, F = bt(o, Ct.__wbindgen_malloc), z = At, I = dt(c, Ct.__wbindgen_malloc), U = At, W = bt(l, Ct.__wbindgen_malloc), O = At, T = ft(a, Ct.__wbindgen_malloc), G = At, N = bt(s, Ct.__wbindgen_malloc), j = At, B = ft(u, Ct.__wbindgen_malloc), E = At, L = bt(w, Ct.__wbindgen_malloc), V = At, H = ft(g, Ct.__wbindgen_malloc), X = At, q = bt(b, Ct.__wbindgen_malloc), J = At, $ = ft(d, Ct.__wbindgen_malloc), Y = At, Z = bt(f, Ct.__wbindgen_malloc), K = At, Q = dt(m, Ct.__wbindgen_malloc), nn = At, en = bt(h, Ct.__wbindgen_malloc), _n = At, tn = Ct.computeNightSignalsTyped(p, y, v, k, S, R, C, A, x, D, M, P, F, z, I, U, W, O, T, G, N, j, B, E, L, V, H, X, q, J, $, Y, Z, K, Q, nn, en, _n);
	if (tn[2]) throw pt(tn[1]);
	return pt(tn[0]);
}
function P(n, e, _) {
	const t = dt(n, Ct.__wbindgen_malloc), r = At, i = ft(e, Ct.__wbindgen_malloc), o = At, c = Ct.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw pt(c[1]);
	return pt(c[0]);
}
function F(n) {
	const e = Ct.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function z(n) {
	const e = Ct.consensusDisagreementDetail(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function I(n) {
	const e = Ct.consensusDisagreements(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function U(n) {
	const e = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), _ = At, t = Ct.convertScreensRedcapDiary(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function W(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At;
	Ct.csvBufferAppend(e, _);
}
function O(n) {
	Ct.csvBufferClear(n);
}
function T(n, e) {
	const _ = Ct.cutpointEpochCompatibility(n, e);
	if (_[2]) throw pt(_[1]);
	return pt(_[0]);
}
function G(n, e, _, t, r) {
	const i = ft(n, Ct.__wbindgen_malloc), o = At, c = Ct.cutpointToneCodes(i, o, e, _, t, r);
	var l = _t(c[0], c[1]).slice();
	return Ct.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function N(n, e, _, t) {
	const r = Ct.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = ct(r[0], r[1]).slice(), Ct.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function j(n, e, _, t) {
	return 0 !== Ct.cutpointsValid(n, e, _, t);
}
function B(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = bt(e, Ct.__wbindgen_malloc), i = At, o = Ct.describeColumns(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return pt(o[0]);
}
function E(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = ft(e, Ct.__wbindgen_malloc), i = At, o = Ct.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw pt(o[2]);
	var c = _t(o[0], o[1]).slice();
	return Ct.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function L(n, e) {
	let _, t;
	try {
		const r = dt(n, Ct.__wbindgen_malloc), i = At, o = ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), c = At, l = Ct.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], ct(l[0], l[1]);
	} finally {
		Ct.__wbindgen_free(_, t, 1);
	}
}
function V(n) {
	const e = Ct.detectGgirHasptVariant(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function H(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At;
	var o = gt(e) ? 0 : ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), c = At, l = gt(_) ? 0 : ft(_, Ct.__wbindgen_malloc), a = At, s = gt(t) ? 0 : ft(t, Ct.__wbindgen_malloc), u = At;
	return Ct.detectHdcza(r, i, o, c, l, a, s, u);
}
function X(n) {
	const e = ft(n, Ct.__wbindgen_malloc), _ = At;
	return 0 !== Ct.detectHourClockJumpMs(e, _);
}
function q(n) {
	const e = ft(n, Ct.__wbindgen_malloc), _ = At, t = Ct.detectNonwear(e, _);
	var r = _t(t[0], t[1]).slice();
	return Ct.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function J(n) {
	const e = ft(n, Ct.__wbindgen_malloc), _ = At, t = Ct.detectNonwearChoi2011(e, _);
	var r = _t(t[0], t[1]).slice();
	return Ct.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = ft(n, Ct.__wbindgen_malloc), _ = At, t = Ct.detectNonwearChoi2011Bouts(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function Y(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = Ct.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw pt(r[2]);
	var i = _t(r[0], r[1]).slice();
	return Ct.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Z(n) {
	const e = ft(n, Ct.__wbindgen_malloc), _ = At, t = Ct.detectNonwearChoi2012(e, _);
	var r = _t(t[0], t[1]).slice();
	return Ct.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function K(n) {
	const e = ft(n, Ct.__wbindgen_malloc), _ = At, t = Ct.detectNonwearChoi2012Bouts(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function Q(n) {
	const e = ft(n, Ct.__wbindgen_malloc), _ = At, t = Ct.detectNonwearChoiBouts(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function nn(n) {
	let e, _;
	try {
		const i = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), o = At, c = Ct.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		Ct.__wbindgen_free(e, _, 1);
	}
}
function en(n, e, _, t, r, i, o) {
	const c = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), l = At, a = ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), s = At, u = ft(_, Ct.__wbindgen_malloc), w = At, g = ft(t, Ct.__wbindgen_malloc), b = At, d = ft(r, Ct.__wbindgen_malloc), f = At, m = Ct.detectNonwearUnifiedBatchTyped(c, l, a, s, u, w, g, b, d, f, i, o);
	if (m[2]) throw pt(m[1]);
	return pt(m[0]);
}
function _n(n, e, _) {
	const t = Ct.dstPlaceholderRuns(n, e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function tn(n, e, _, t) {
	const r = Ct.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = Q_(r[0], r[1]).slice(), Ct.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function rn(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = ft(e, Ct.__wbindgen_malloc), i = At, o = Ct.epochAgreement(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return pt(o[0]);
}
function on(n, e, _, t, r) {
	const i = ft(n, Ct.__wbindgen_malloc), o = At, c = ft(e, Ct.__wbindgen_malloc), l = At, a = ft(_, Ct.__wbindgen_malloc), s = At, u = ft(t, Ct.__wbindgen_malloc), w = At, g = Ct.epochRawData(i, o, c, l, a, s, u, w, r);
	if (g[2]) throw pt(g[1]);
	return pt(g[0]);
}
function cn(n, e, _) {
	const t = ft(n, Ct.__wbindgen_malloc), r = At, i = ft(e, Ct.__wbindgen_malloc), o = At, c = Ct.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw pt(c[1]);
	return pt(c[0]);
}
function ln(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = Ct.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = et(o[0], o[1]).slice(), Ct.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function an(n, e) {
	let _, t;
	try {
		const o = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), c = At, l = ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), a = At, s = Ct.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, pt(s[2]);
		return _ = r, t = i, ct(r, i);
	} finally {
		Ct.__wbindgen_free(_, t, 1);
	}
}
function sn(n) {
	const e = Ct.exportNapAggregate(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function un(n, e, _) {
	const t = Ct.exportPeriodFigures(!gt(n), gt(n) ? 0 : n, !gt(e), gt(e) ? 0 : e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function wn(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.extractCapsense(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function gn(n, e, _, t, r) {
	const i = ft(n, Ct.__wbindgen_malloc), o = At, c = ft(e, Ct.__wbindgen_malloc), l = At, a = ft(_, Ct.__wbindgen_malloc), s = At, u = ht(r, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), w = At, g = Ct.foldOntoGrid(i, o, c, l, a, s, t, u, w);
	if (g[3]) throw pt(g[2]);
	var b = Q_(g[0], g[1]).slice();
	return Ct.__wbindgen_free(g[0], 8 * g[1], 8), b;
}
function bn(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = ht(t, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), c = At, l = Ct.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw pt(l[2]);
	var a = Q_(l[0], l[1]).slice();
	return Ct.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function dn(n, e, _, t, r) {
	const i = dt(_, Ct.__wbindgen_malloc), o = At, c = ft(t, Ct.__wbindgen_malloc), l = At, a = Ct.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw pt(a[1]);
	return pt(a[0]);
}
function fn(n, e, _, t, r, i) {
	const o = ft(_, Ct.__wbindgen_malloc), c = At, l = ft(t, Ct.__wbindgen_malloc), a = At, s = ht(i, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), u = At, w = Ct.foldUniformOntoGrid(n, e, o, c, l, a, r, s, u);
	if (w[3]) throw pt(w[2]);
	var g = Q_(w[0], w[1]).slice();
	return Ct.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function mn(n) {
	const e = Ct.fuseNonwearMasks(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function hn(n, e, _) {
	var t = gt(_) ? 0 : ht(_, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), r = At;
	const i = Ct.generateActiwareRestIntervals(n, e, t, r);
	if (i[2]) throw pt(i[1]);
	return pt(i[0]);
}
function pn() {
	const n = Ct.getComputeCapabilitiesV1();
	if (n[2]) throw pt(n[1]);
	return pt(n[0]);
}
function yn(n, e, _) {
	const t = Ct.ggir5sWallClockMs(n, e, _);
	if (t[3]) throw pt(t[2]);
	var r = Q_(t[0], t[1]).slice();
	return Ct.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function vn(n) {
	const e = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), _ = At, t = Ct.ggirConfigValues(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function kn(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At;
	var r = gt(e) ? 0 : ft(e, Ct.__wbindgen_malloc), i = At;
	const o = Ct.ggirDaysIncluded(_, t, r, i);
	var c = _t(o[0], o[1]).slice();
	return Ct.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function Sn(n, e) {
	const _ = dt(n, Ct.__wbindgen_malloc), t = At;
	var r = gt(e) ? 0 : ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), i = At;
	const o = Ct.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return pt(o[0]);
}
function Rn(n, e, _) {
	var t = gt(_) ? 0 : ft(_, Ct.__wbindgen_malloc), r = At;
	const i = Ct.ggirDstPlaceholderCuts(n, e, t, r);
	if (i[2]) throw pt(i[1]);
	return pt(i[0]);
}
function Cn() {
	return Ct.ggirIncludeDayCriterionHours();
}
function An(n, e, _, t) {
	const r = bt(n, Ct.__wbindgen_malloc), i = At;
	var o = gt(t) ? 0 : ft(t, Ct.__wbindgen_malloc), c = At;
	const l = Ct.ggirIndicesToWallClockMs(r, i, e, _, o, c);
	if (l[3]) throw pt(l[2]);
	var a = Q_(l[0], l[1]).slice();
	return Ct.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function xn(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = Ct.ggirLabelsToStoredMs(_, t, e);
	if (r[3]) throw pt(r[2]);
	var i = Q_(r[0], r[1]).slice();
	return Ct.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Dn(n, e, _, t) {
	const r = mt(n, Ct.__wbindgen_malloc), i = At, o = ft(e, Ct.__wbindgen_malloc), c = At, l = ft(_, Ct.__wbindgen_malloc), a = At, s = ft(t, Ct.__wbindgen_malloc), u = At, w = Ct.ggirManualNightClocks(r, i, o, c, l, a, s, u);
	if (w[2]) throw pt(w[1]);
	return pt(w[0]);
}
function Mn(n, e, _, t) {
	const r = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), i = At, o = ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), c = At, l = ht(_, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), a = At, s = Ct.ggirSleeplogStoredClocks(r, i, o, c, l, a, t);
	if (s[3]) throw pt(s[2]);
	let u;
	return 0 !== s[0] && (u = nt(s[0], s[1]).slice(), Ct.__wbindgen_free(s[0], 4 * s[1], 4)), u;
}
function Pn(n, e) {
	return Ct.ggirSptDurationHours(n, e);
}
function Fn(n, e) {
	const _ = Ct.ggirSummaryDenominator(n, e);
	if (_[2]) throw pt(_[1]);
	return pt(_[0]);
}
function zn(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = ft(e, Ct.__wbindgen_malloc), i = At, o = Ct.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function In(n) {
	let e, _;
	try {
		const i = dt(n, Ct.__wbindgen_malloc), o = At, c = Ct.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		Ct.__wbindgen_free(e, _, 1);
	}
}
function Un(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = ft(e, Ct.__wbindgen_malloc), c = At, l = ft(_, Ct.__wbindgen_malloc), a = At, s = ft(t, Ct.__wbindgen_malloc), u = At, w = Ct.implausibilityReasons(r, i, o, c, l, a, s, u);
	if (w[2]) throw pt(w[1]);
	return pt(w[0]);
}
function Wn(n) {
	return Ct.initThreadPool(n);
}
function On() {
	Ct.installPanicHook();
}
function Tn(n) {
	const e = Ct.interRaterReliability(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Gn(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = Ct.irregularInternalDays(_, t, e);
	var i = nt(r[0], r[1]).slice();
	return Ct.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Nn(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At;
	return 0 !== Ct.isGeneactivFormat(e, _);
}
function jn(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = ft(e, Ct.__wbindgen_malloc), c = At, l = ft(_, Ct.__wbindgen_malloc), a = At, s = Ct.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw pt(s[1]);
	return pt(s[0]);
}
function Bn(n, e, _) {
	const t = ft(n, Ct.__wbindgen_malloc), r = At, i = Ct.markerIndexRange(t, r, e, _);
	var o = et(i[0], i[1]).slice();
	return Ct.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function En(n, e, _, t, r, i, o) {
	const c = ft(n, Ct.__wbindgen_malloc), l = At, a = ft(e, Ct.__wbindgen_malloc), s = At, u = Ct.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (u[2]) throw pt(u[1]);
	return pt(u[0]);
}
function Ln(n) {
	const e = ft(n, Ct.__wbindgen_malloc), _ = At, t = Ct.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Vn(n, e, _, t) {
	const r = Ct.metricWarnings(n, e, _, t);
	var i = _t(r[0], r[1]).slice();
	return Ct.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Hn(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = ft(e, Ct.__wbindgen_malloc), i = At, o = Ct.midSleepClockHours(_, t, r, i);
	var c = Q_(o[0], o[1]).slice();
	return Ct.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Xn(n, e, _, t, r) {
	const i = ft(n, Ct.__wbindgen_malloc), o = At, c = ft(e, Ct.__wbindgen_malloc), l = At, a = ft(_, Ct.__wbindgen_malloc), s = At, u = Ct.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw pt(u[1]);
	return pt(u[0]);
}
function qn(n) {
	const e = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), _ = At, t = Ct.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = ct(t[0], t[1]).slice(), Ct.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Jn(n, e, _, t, r) {
	const i = ft(_, Ct.__wbindgen_malloc), o = At, c = ft(t, Ct.__wbindgen_malloc), l = At, a = ft(r, Ct.__wbindgen_malloc), s = At, u = Ct.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (u[2]) throw pt(u[1]);
	return pt(u[0]);
}
function $n(n, e, _, t) {
	let r, i;
	try {
		const l = bt(n, Ct.__wbindgen_malloc), a = At, s = ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), u = At, w = Ct.nonwearContributors(l, a, s, u, _, t);
		var o = w[0], c = w[1];
		if (w[3]) throw o = 0, c = 0, pt(w[2]);
		return r = o, i = c, ct(o, c);
	} finally {
		Ct.__wbindgen_free(r, i, 1);
	}
}
function Yn(n) {
	const e = ft(n, Ct.__wbindgen_malloc), _ = At, t = Ct.nonwearInSleepCounts(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function Zn(n) {
	const e = Ct.nonwearSleepOverlap(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Kn(n, e, _) {
	const t = ft(n, Ct.__wbindgen_malloc), r = At, i = ft(e, Ct.__wbindgen_malloc), o = At, c = Ct.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw pt(c[1]);
	return pt(c[0]);
}
function Qn(n, e, _, t, r, i) {
	const o = ht(r, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), c = At, l = Ct.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw pt(l[2]);
	var a = Q_(l[0], l[1]).slice();
	return Ct.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function ne(n, e) {
	const _ = dt(n, Ct.__wbindgen_malloc), t = At, r = Ct.parseActigraphCsv(_, t, e);
	if (r[2]) throw pt(r[1]);
	return pt(r[0]);
}
function ee(n) {
	const e = Ct.parseActigraphCsvBuffered(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function _e(n, e, _, t) {
	const r = dt(n, Ct.__wbindgen_malloc), i = At;
	var o = gt(e) ? 0 : ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), c = At, l = gt(t) ? 0 : ht(t, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), a = At;
	const s = Ct.parseAw5(r, i, o, c, gt(_) ? 0 : Y_(_), l, a);
	if (s[2]) throw pt(s[1]);
	return pt(s[0]);
}
function te(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.parseCwa(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function re(n, e) {
	const _ = dt(n, Ct.__wbindgen_malloc), t = At, r = ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), i = At, o = Ct.parseEpochSeries(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return pt(o[0]);
}
function ie(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.parseGeneactivBin(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function oe(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.parseGeneactivCsv(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function ce() {
	const n = Ct.parseGeneactivCsvBuffered();
	if (n[2]) throw pt(n[1]);
	return pt(n[0]);
}
function le(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.parseGt3x(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function ae(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = dt(e, Ct.__wbindgen_malloc), c = At, l = dt(_, Ct.__wbindgen_malloc), a = At, s = Ct.participantValidity(r, i, o, c, l, a, t);
	if (s[2]) throw pt(s[1]);
	return pt(s[0]);
}
function se(n, e, _, t, r) {
	const i = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), o = At, c = ft(e, Ct.__wbindgen_malloc), l = At;
	var a = gt(_) ? 0 : ft(_, Ct.__wbindgen_malloc), s = At;
	const u = Ct.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (u[2]) throw pt(u[1]);
	return pt(u[0]);
}
function ue(n) {
	let e, _;
	try {
		const i = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), o = At, c = Ct.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		Ct.__wbindgen_free(e, _, 1);
	}
}
function we(n, e, _, t, r, i) {
	const o = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), c = At, l = ft(e, Ct.__wbindgen_malloc), a = At, s = ft(_, Ct.__wbindgen_malloc), u = At, w = dt(t, Ct.__wbindgen_malloc), g = At, b = dt(r, Ct.__wbindgen_malloc), d = At, f = ht(i, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), m = At, h = Ct.placeMarkersBatch(o, c, l, a, s, u, w, g, b, d, f, m);
	if (h[2]) throw pt(h[1]);
	return pt(h[0]);
}
function ge(n, e, _, t, r, i, o, c, l, a, s, u, w, g, b, d, f, m, h) {
	const p = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), y = At, v = ft(e, Ct.__wbindgen_malloc), k = At, S = bt(_, Ct.__wbindgen_malloc), R = At, C = ft(t, Ct.__wbindgen_malloc), A = At, x = bt(r, Ct.__wbindgen_malloc), D = At, M = dt(i, Ct.__wbindgen_malloc), P = At, F = bt(o, Ct.__wbindgen_malloc), z = At, I = dt(c, Ct.__wbindgen_malloc), U = At, W = bt(l, Ct.__wbindgen_malloc), O = At, T = ft(a, Ct.__wbindgen_malloc), G = At, N = bt(s, Ct.__wbindgen_malloc), j = At, B = ft(u, Ct.__wbindgen_malloc), E = At, L = bt(w, Ct.__wbindgen_malloc), V = At, H = ft(g, Ct.__wbindgen_malloc), X = At, q = bt(b, Ct.__wbindgen_malloc), J = At, $ = ft(d, Ct.__wbindgen_malloc), Y = At, Z = bt(f, Ct.__wbindgen_malloc), K = At, Q = dt(m, Ct.__wbindgen_malloc), nn = At, en = bt(h, Ct.__wbindgen_malloc), _n = At, tn = Ct.placeMarkersTyped(p, y, v, k, S, R, C, A, x, D, M, P, F, z, I, U, W, O, T, G, N, j, B, E, L, V, H, X, q, J, $, Y, Z, K, Q, nn, en, _n);
	if (tn[2]) throw pt(tn[1]);
	return pt(tn[0]);
}
function be(n) {
	let e, _;
	try {
		const i = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), o = At, c = Ct.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		Ct.__wbindgen_free(e, _, 1);
	}
}
function de(n, e, _, t) {
	const r = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), i = At, o = ft(e, Ct.__wbindgen_malloc), c = At, l = ft(_, Ct.__wbindgen_malloc), a = At, s = dt(t, Ct.__wbindgen_malloc), u = At, w = Ct.placeNonwearMarkersTyped(r, i, o, c, l, a, s, u);
	if (w[2]) throw pt(w[1]);
	return pt(w[0]);
}
function fe(n) {
	const e = Ct.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function me(n) {
	const e = Ct.prepareCompactPipelineV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function he(n, e, _, t, r, i, o) {
	const c = ft(n, Ct.__wbindgen_malloc), l = At, a = ft(e, Ct.__wbindgen_malloc), s = At, u = ft(_, Ct.__wbindgen_malloc), w = At, g = ft(t, Ct.__wbindgen_malloc), b = At;
	var d = gt(o) ? 0 : ht(o, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), f = At;
	const m = Ct.processGeneactivRaw(c, l, a, s, u, w, g, b, r, i, d, f);
	if (m[2]) throw pt(m[1]);
	return pt(m[0]);
}
function pe(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.processGt3xFull(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function ye(n, e) {
	const _ = dt(n, Ct.__wbindgen_malloc), t = At, r = Ct.processGt3xFullWithEpoch(_, t, e);
	if (r[2]) throw pt(r[1]);
	return pt(r[0]);
}
function ve(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.processGt3xPart1(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function ke(n, e) {
	const _ = dt(n, Ct.__wbindgen_malloc), t = At, r = Ct.processGt3xPart1WithEpoch(_, t, e);
	if (r[2]) throw pt(r[1]);
	return pt(r[0]);
}
function Se(n, e, _, t, r, i) {
	const o = ft(n, Ct.__wbindgen_malloc), c = At, l = ft(e, Ct.__wbindgen_malloc), a = At, s = ft(_, Ct.__wbindgen_malloc), u = At;
	var w = gt(i) ? 0 : ht(i, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), g = At;
	const b = Ct.processRawXyz(o, c, l, a, s, u, t, r, w, g);
	if (b[2]) throw pt(b[1]);
	return pt(b[0]);
}
function Re(n, e, _, t, r, i) {
	const o = ft(n, Ct.__wbindgen_malloc), c = At, l = ft(e, Ct.__wbindgen_malloc), a = At, s = ft(_, Ct.__wbindgen_malloc), u = At, w = ft(t, Ct.__wbindgen_malloc), g = At;
	var b = gt(i) ? 0 : ht(i, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), d = At;
	const f = Ct.processRawXyzImputed(o, c, l, a, s, u, w, g, r, b, d);
	if (f[2]) throw pt(f[1]);
	return pt(f[0]);
}
function Ce(n, e, _, t, r, i, o) {
	const c = ft(n, Ct.__wbindgen_malloc), l = At, a = ft(e, Ct.__wbindgen_malloc), s = At, u = ft(_, Ct.__wbindgen_malloc), w = At, g = ft(t, Ct.__wbindgen_malloc), b = At;
	var d = gt(i) ? 0 : ht(i, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), f = At;
	const m = Ct.processRawXyzImputedWithEpoch(c, l, a, s, u, w, g, b, r, d, f, o);
	if (m[2]) throw pt(m[1]);
	return pt(m[0]);
}
function Ae(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = dt(e, Ct.__wbindgen_malloc), c = At, l = ft(t, Ct.__wbindgen_malloc), a = At, s = Ct.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var u = _t(s[0], s[1]).slice();
	return Ct.__wbindgen_free(s[0], 1 * s[1], 1), u;
}
function xe(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = ft(e, Ct.__wbindgen_malloc), c = At, l = ft(_, Ct.__wbindgen_malloc), a = At, s = Ct.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw pt(s[1]);
	return pt(s[0]);
}
function De(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.readGgirMeta(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function Me() {
	return Ct.recommended_chunk_size_mb() >>> 0;
}
function Pe(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), i = At, o = Ct.reduceF64V1(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return o[0];
}
function Fe(n) {
	const e = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), _ = At, t = Ct.resolveTimezone(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function ze(n, e, _) {
	const t = ft(n, Ct.__wbindgen_malloc), r = At, i = ft(e, Ct.__wbindgen_malloc), o = At, c = bt(_, Ct.__wbindgen_malloc), l = At, a = Ct.restoredDstRuns(t, r, i, o, c, l);
	if (a[2]) throw pt(a[1]);
	return pt(a[0]);
}
function Ie(n, e, _, t, r, i, o, c, l, a, s) {
	const u = dt(n, Ct.__wbindgen_malloc), w = At, g = ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), b = At;
	var d = gt(_) ? 0 : dt(_, Ct.__wbindgen_malloc), f = At, m = gt(t) ? 0 : dt(t, Ct.__wbindgen_malloc), h = At, p = gt(r) ? 0 : dt(r, Ct.__wbindgen_malloc), y = At, v = gt(i) ? 0 : dt(i, Ct.__wbindgen_malloc), k = At, S = gt(o) ? 0 : dt(o, Ct.__wbindgen_malloc), R = At, C = gt(c) ? 0 : ht(c, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), A = At, x = gt(l) ? 0 : ht(l, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), D = At;
	const M = Ct.reviewGgirResults(u, w, g, b, d, f, m, h, p, y, v, k, S, R, C, A, x, D, a, s);
	if (M[2]) throw pt(M[1]);
	return pt(M[0]);
}
function Ue(n) {
	const e = Ct.reviewNonwearFile(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function We(n) {
	const e = Ct.reviewNonwearTotals(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Oe(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = Ct.roundCountStorage(_, t, e);
	var i = Q_(r[0], r[1]).slice();
	return Ct.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Te(n) {
	const e = Ct.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Ge(n) {
	const e = Ct.runCompactPipelineV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Ne(n, e) {
	const _ = Ct.runFullPipeline(n, e);
	if (_[2]) throw pt(_[1]);
	return pt(_[0]);
}
function je(n) {
	const e = Ct.runFullPipelineOutcomeV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Be(n) {
	const e = Ct.runFullPipelineV1(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Ee(n, e) {
	const _ = Ct.runGgirFromEpoch(n, e);
	if (_[2]) throw pt(_[1]);
	return pt(_[0]);
}
function Le(n) {
	const e = Ct.runGgirPart3(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Ve(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.runMilestone(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function He(n) {
	const e = Ct.scoreAllDays(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function Xe(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = Ct.scoreColeKripke(_, t, e);
	var i = _t(r[0], r[1]).slice();
	return Ct.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function qe(n) {
	let e, _;
	try {
		const i = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), o = At, c = Ct.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		Ct.__wbindgen_free(e, _, 1);
	}
}
function Je(n) {
	const e = Ct.scoreConsensusMajority(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function $e(n, e, _) {
	const t = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), r = At, i = dt(e, Ct.__wbindgen_malloc), o = At, c = bt(_, Ct.__wbindgen_malloc), l = At, a = Ct.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw pt(a[1]);
	return pt(a[0]);
}
function Ye(n) {
	let e, _;
	try {
		const i = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), o = At, c = Ct.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, pt(c[2]);
		return e = t, _ = r, ct(t, r);
	} finally {
		Ct.__wbindgen_free(e, _, 1);
	}
}
function Ze(n, e, _, t, r, i) {
	const o = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), c = At, l = ft(e, Ct.__wbindgen_malloc), a = At, s = ft(_, Ct.__wbindgen_malloc), u = At, w = ft(t, Ct.__wbindgen_malloc), g = At, b = Ct.scoreEpochsTyped(o, c, l, a, s, u, w, g, r, i);
	if (b[2]) throw pt(b[1]);
	return pt(b[0]);
}
function Ke(n) {
	const e = ft(n, Ct.__wbindgen_malloc), _ = At, t = Ct.scoreGgirHasib(e, _);
	var r = _t(t[0], t[1]).slice();
	return Ct.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Qe(n) {
	const e = Ct.scoreGgirHasibVariant(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function n_(n, e, _) {
	const t = ft(n, Ct.__wbindgen_malloc), r = At, i = ft(e, Ct.__wbindgen_malloc), o = At, c = Ct.scoreGgirSib(t, r, i, o, _);
	if (c[2]) throw pt(c[1]);
	return pt(c[0]);
}
function e_(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = Ct.scoreSadeh(_, t, e);
	var i = _t(r[0], r[1]).slice();
	return Ct.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function __(n) {
	const e = Ct.settleManualNonwearNights(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function t_(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.sha256StreamFeed(e, _);
	if (t[1]) throw pt(t[0]);
}
function r_() {
	let n, e;
	try {
		const r = Ct.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, pt(r[2]);
		return n = _, e = t, ct(_, t);
	} finally {
		Ct.__wbindgen_free(n, e, 1);
	}
}
function i_() {
	Ct.sha256StreamStart();
}
function o_(n, e) {
	const _ = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), t = At, r = Ct.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = ct(r[0], r[1]).slice(), Ct.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function c_(n, e, _, t, r) {
	const i = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), o = At, c = ft(e, Ct.__wbindgen_malloc), l = At, a = bt(_, Ct.__wbindgen_malloc), s = At, u = ft(t, Ct.__wbindgen_malloc), w = At, g = bt(r, Ct.__wbindgen_malloc), b = At, d = Ct.sleepRegularityIndex(i, o, c, l, a, s, u, w, g, b);
	if (d[3]) throw pt(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function l_(n, e) {
	const _ = Ct.sleepWakeScores(n, e);
	if (_[2]) throw pt(_[1]);
	return pt(_[0]);
}
function a_(n) {
	const e = mt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.sourceLabelsWallClockMs(e, _);
	var r = Q_(t[0], t[1]).slice();
	return Ct.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function s_(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = ft(e, Ct.__wbindgen_malloc), c = At, l = Ct.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function u_(n, e, _) {
	const t = ft(n, Ct.__wbindgen_malloc), r = At, i = ft(_, Ct.__wbindgen_malloc), o = At, c = Ct.spliceDstPlaceholders(t, r, e, i, o);
	if (c[3]) throw pt(c[2]);
	let l;
	return 0 !== c[0] && (l = Q_(c[0], c[1]).slice(), Ct.__wbindgen_free(c[0], 8 * c[1], 8)), l;
}
function w_(n) {
	return Ct.startThreadPool(n);
}
function g_(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = dt(e, Ct.__wbindgen_malloc), c = At, l = ft(_, Ct.__wbindgen_malloc), a = At, s = ft(t, Ct.__wbindgen_malloc), u = At, w = Ct.statesInPeriods(r, i, o, c, l, a, s, u);
	var g = _t(w[0], w[1]).slice();
	return Ct.__wbindgen_free(w[0], 1 * w[1], 1), g;
}
function b_(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = Ct.storedToGgirLabelsMs(_, t, e);
	if (r[3]) throw pt(r[2]);
	var i = Q_(r[0], r[1]).slice();
	return Ct.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function d_(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.streamParseFeed(e, _);
	if (t[2]) throw pt(t[1]);
	return t[0] >>> 0;
}
function f_() {
	const n = Ct.streamParseFinish();
	if (n[2]) throw pt(n[1]);
	return t.__wrap(n[0]);
}
function m_() {
	const n = Ct.streamParseFinishChunk();
	if (n[2]) throw pt(n[1]);
	return _.__wrap(n[0]);
}
function h_(n) {
	const e = Ct.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw pt(e[1]);
	return _.__wrap(e[0]);
}
function p_(n, e) {
	const _ = Ct.streamParseStart(n, e);
	if (_[1]) throw pt(_[0]);
}
function y_(n, e) {
	const _ = Ct.streamParseStartData(n, e);
	if (_[1]) throw pt(_[0]);
}
function v_(n, e, _) {
	const t = Ct.streamParseStartWithEpoch(n, e, _);
	if (t[1]) throw pt(t[0]);
}
function k_(n, e) {
	const _ = dt(n, Ct.__wbindgen_malloc), t = At, r = Ct.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw pt(r[1]);
	return pt(r[0]);
}
function S_(n) {
	const e = Ct.summarizeExportGroups(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function R_(n) {
	const e = Ct.summarizePhysicalActivityDays(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function C_(n) {
	const e = Ct.summarizePhysicalActivityTrace(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function A_() {
	return 0 !== Ct.threadPoolReady();
}
function x_(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = Ct.thresholdProbabilities(_, t, e);
	var i = _t(r[0], r[1]).slice();
	return Ct.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function D_(n) {
	const e = Ct.timeSemantics(n);
	if (e[2]) throw pt(e[1]);
	return pt(e[0]);
}
function M_(n, e, _) {
	const t = ft(n, Ct.__wbindgen_malloc), r = At, i = Ct.timestampDiscontinuities(t, r, e, _);
	if (i[2]) throw pt(i[1]);
	return pt(i[0]);
}
function P_(n, e, _) {
	const t = Ct.uniformTimestamps(n, e, _);
	var r = Q_(t[0], t[1]).slice();
	return Ct.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function F_(n, e) {
	const _ = Ct.utcDatesInSpan(n, e);
	var t = nt(_[0], _[1]).slice();
	return Ct.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function z_(n) {
	const e = ft(n, Ct.__wbindgen_malloc), _ = At, t = Ct.utcDayIndex(e, _);
	if (t[2]) throw pt(t[1]);
	return pt(t[0]);
}
function I_(n) {
	const e = dt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function U_(n, e) {
	const _ = ft(n, Ct.__wbindgen_malloc), t = At, r = Ct.validWearDays(_, t, e);
	if (r[3]) throw pt(r[2]);
	var i = _t(r[0], r[1]).slice();
	return Ct.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function W_(n, e, _) {
	const t = ft(n, Ct.__wbindgen_malloc), r = At, i = Ct.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw pt(i[1]);
	return pt(i[0]);
}
function O_(n) {
	const e = ft(n, Ct.__wbindgen_malloc), _ = At, t = Ct.wallClockLabels(e, _);
	var r = nt(t[0], t[1]).slice();
	return Ct.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function T_(n, e, _) {
	const t = dt(n, Ct.__wbindgen_malloc), r = At, i = Ct.wallMaskOntoGgirGrid(t, r, e, _);
	if (i[3]) throw pt(i[2]);
	var o = _t(i[0], i[1]).slice();
	return Ct.__wbindgen_free(i[0], 1 * i[1], 1), o;
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var G_ = class n {
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
		Ct.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		Ct.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return Ct.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return Ct.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return Ct.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function N_(n) {
	Ct.wbg_rayon_start_worker(n);
}
function j_(n, e) {
	const _ = ht(n, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), t = At;
	var r = gt(e) ? 0 : ht(e, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), i = At;
	const o = Ct.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw pt(o[1]);
	return pt(o[0]);
}
function B_(n) {
	const e = mt(n, Ct.__wbindgen_malloc), _ = At, t = Ct.weekendDates(e, _);
	var r = _t(t[0], t[1]).slice();
	return Ct.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function E_(n, e, _, t) {
	const r = ft(n, Ct.__wbindgen_malloc), i = At, o = Ct.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function L_(n, e, _, t, r) {
	const i = ft(n, Ct.__wbindgen_malloc), o = At, c = ft(e, Ct.__wbindgen_malloc), l = At, a = ft(_, Ct.__wbindgen_malloc), s = At, u = Ct.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (u[2]) throw pt(u[1]);
	return pt(u[0]);
}
function V_(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(ct(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = ht(String(e), Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), t = At;
				rt().setInt32(n + 4, t, !0), rt().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				rt().setBigInt64(n + 8, gt(_) ? BigInt(0) : _, !0), rt().setInt32(n + 0, !gt(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return gt(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = ht(K_(e), Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), t = At;
				rt().setInt32(n + 4, t, !0), rt().setInt32(n + 0, _, !0);
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
				return Ct.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return Rt;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const _ = "number" == typeof e ? e : void 0;
				rt().setFloat64(n + 8, gt(_) ? 0 : _, !0), rt().setInt32(n + 0, !gt(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = gt(_) ? 0 : ht(_, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), r = At;
				rt().setInt32(n + 4, r, !0), rt().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(ct(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return wt(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return wt(function(n, e, _, t) {
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
					_ = n, t = e, console.error(ct(n, e));
				} finally {
					Ct.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return wt(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return wt(function(n, e) {
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
				return new Uint32Array(et(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(Q_(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(_t(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return wt(function(n) {
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
				return wt(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(_t(n, e), _);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return wt(function(n, e, _) {
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
				const _ = ht(e.stack, Ct.__wbindgen_malloc, Ct.__wbindgen_realloc), t = At;
				rt().setInt32(n + 4, t, !0), rt().setInt32(n + 0, _, !0);
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
				}(e, _, G_.__wrap(t));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return gt(n) ? 0 : Y_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return gt(n) ? 0 : Y_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return gt(n) ? 0 : Y_(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return gt(n) ? 0 : Y_(n);
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
						0 === --t.cnt && (Ct.__wbindgen_destroy_closure(t.a, t.b), t.a = 0, Z_.unregister(t));
					}, Z_.register(r, t, t), r;
				}(n, e, H_);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return _t(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return ct(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Ct.__wbindgen_externrefs, e = n.grow(4);
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
function H_(n, e, _) {
	Ct.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, _);
}
Symbol.dispose && (G_.prototype[Symbol.dispose] = G_.prototype.free);
const X_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ct.__wbg_aw5batch_free(n >>> 0, 1)), q_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ct.__wbg_streamchunkresult_free(n >>> 0, 1)), J_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ct.__wbg_streamparseresult_free(n >>> 0, 1)), $_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ct.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function Y_(n) {
	const e = Ct.__externref_table_alloc();
	return Ct.__wbindgen_externrefs.set(e, n), e;
}
const Z_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ct.__wbindgen_destroy_closure(n.a, n.b));
function K_(n) {
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
		e > 0 && (_ += K_(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + K_(n[t]);
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
function Q_(n, e) {
	return n >>>= 0, ot().subarray(n / 8, n / 8 + e);
}
function nt(n, e) {
	n >>>= 0;
	const _ = rt(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(Ct.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return Ct.__externref_drop_slice(n, e), t;
}
function et(n, e) {
	return n >>>= 0, at().subarray(n / 4, n / 4 + e);
}
function _t(n, e) {
	return n >>>= 0, ut().subarray(n / 1, n / 1 + e);
}
let tt = null;
function rt() {
	return null !== tt && tt.buffer === Ct.memory.buffer || (tt = new DataView(Ct.memory.buffer)), tt;
}
let it = null;
function ot() {
	return null !== it && it.buffer === Ct.memory.buffer || (it = new Float64Array(Ct.memory.buffer)), it;
}
function ct(n, e) {
	return function(n, e) {
		return kt += e, kt >= vt && (yt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), yt.decode(), kt = e), yt.decode(ut().slice(n, n + e));
	}(n >>>= 0, e);
}
let lt = null;
function at() {
	return null !== lt && lt.buffer === Ct.memory.buffer || (lt = new Uint32Array(Ct.memory.buffer)), lt;
}
let st = null;
function ut() {
	return null !== st && st.buffer === Ct.memory.buffer || (st = new Uint8Array(Ct.memory.buffer)), st;
}
function wt(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = Y_(_);
		Ct.__wbindgen_exn_store(n);
	}
}
function gt(n) {
	return null == n;
}
function bt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return at().set(n, _ / 4), At = n.length, _;
}
function dt(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return ut().set(n, _ / 1), At = n.length, _;
}
function ft(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return ot().set(n, _ / 8), At = n.length, _;
}
function mt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = Y_(n[t]);
		rt().setUint32(_ + 4 * t, e, !0);
	}
	return At = n.length, _;
}
function ht(n, e, _) {
	if (void 0 === _) {
		const _ = St.encode(n), t = e(_.length, 1) >>> 0;
		return ut().subarray(t, t + _.length).set(_), At = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = ut();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = ut().subarray(r + o, r + t);
		o += St.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return At = o, r;
}
function pt(n) {
	const e = Ct.__wbindgen_externrefs.get(n);
	return Ct.__externref_table_dealloc(n), e;
}
let yt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
yt && yt.decode();
const vt = 2146435072;
let kt = 0;
const St = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
St && (St.encodeInto = function(n, e) {
	const _ = St.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let Rt, Ct, At = 0;
function xt(n, e, _) {
	if (Ct = n.exports, Rt = e, tt = null, it = null, lt = null, st = null, void 0 !== _ && ("number" != typeof _ || 0 === _ || _ % 65536 != 0)) throw new Error("invalid stack size");
	return Ct.__wbindgen_start(_), Ct;
}
function Dt(n, e) {
	if (void 0 !== Ct) return Ct;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const t = V_(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), xt(new WebAssembly.Instance(n, t), n, _);
}
async function Mt(n, e) {
	if (void 0 !== Ct) return Ct;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-C8zwfLM7.wasm", "" + import.meta.url));
	const t = V_(e);
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
	return xt(r, i, _);
}
export { e as Aw5Batch, _ as StreamChunkResult, t as StreamParseResult, r as actiwareIntervalStatistics, i as actiwareSleepIntervals, o as actiwareWakeThreshold, c as actoursVersion, l as aggregateEpochSeries, a as analysisDatesOf, s as analysisWindowBounds, u as analysisWindowSlice, w as analyzePhysicalActivityDay, g as classifyActimetricPreschoolWristRf, b as classifyActimetricPreschoolWristRfLagLead, d as classifyActimetricPreschoolWristRfLagLeadCalibrated, f as clippedUnionHours, m as compareNonwearDetectorMasks, h as computeAnglez5s, p as computeCircadian, y as computeCircadianTyped, v as computeEnmo5s, k as computeMimsUnit, S as computeMimsUnitDataframe, R as computeMimsUnitTimingBreakdown, C as computeMimsUnitValues, A as computeNightDifficulty, x as computeNightDifficultyTyped, D as computeNightSignals, M as computeNightSignalsTyped, P as computeSleepMetrics, F as configureComputeMemoryBudgetV1, z as consensusDisagreementDetail, I as consensusDisagreements, U as convertScreensRedcapDiary, W as csvBufferAppend, O as csvBufferClear, T as cutpointEpochCompatibility, G as cutpointToneCodes, N as cutpointsRefusal, j as cutpointsValid, Mt as default, B as describeColumns, E as detectDetachFromAccelerationG, L as detectDeviceFormat, V as detectGgirHasptVariant, H as detectHdcza, X as detectHourClockJumpMs, q as detectNonwear, J as detectNonwearChoi2011, $ as detectNonwearChoi2011Bouts, Y as detectNonwearChoi2011Epoch, Z as detectNonwearChoi2012, K as detectNonwearChoi2012Bouts, Q as detectNonwearChoiBouts, nn as detectNonwearUnified, en as detectNonwearUnifiedBatchTyped, _n as dstPlaceholderRuns, tn as effectiveOverrideCutpoints, rn as epochAgreement, on as epochRawData, cn as epochWithBandpass, ln as epochsOverlapping, an as executeHeroRuntime, sn as exportNapAggregate, un as exportPeriodFigures, wn as extractCapsense, gn as foldOntoGrid, bn as foldSampleBlocks, dn as foldSleepWakeVotes, fn as foldUniformOntoGrid, mn as fuseNonwearMasks, hn as generateActiwareRestIntervals, pn as getComputeCapabilitiesV1, yn as ggir5sWallClockMs, vn as ggirConfigValues, kn as ggirDaysIncluded, Sn as ggirDiaryLogShape, Rn as ggirDstPlaceholderCuts, Cn as ggirIncludeDayCriterionHours, An as ggirIndicesToWallClockMs, xn as ggirLabelsToStoredMs, Dn as ggirManualNightClocks, Mn as ggirSleeplogStoredClocks, Pn as ggirSptDurationHours, Fn as ggirSummaryDenominator, zn as gridOffsetWithin, In as identifyGgirRData, Un as implausibilityReasons, Dt as initSync, Wn as initThreadPool, On as installPanicHook, Tn as interRaterReliability, Gn as irregularInternalDays, Nn as isGeneactivFormat, jn as lstmSpectralFeatures30s, Bn as markerIndexRange, En as markerSleepOnsetOffset, Ln as medianGapSeconds, Vn as metricWarnings, Hn as midSleepClockHours, Xn as neishabouriCounts, qn as nextDate, Jn as nightIntervalOverlap, $n as nonwearContributors, Yn as nonwearInSleepCounts, Zn as nonwearSleepOverlap, Kn as nonwearWeightRuns, Qn as normalizeCutpoints, ne as parseActigraphCsv, ee as parseActigraphCsvBuffered, _e as parseAw5, te as parseCwa, re as parseEpochSeries, ie as parseGeneactivBin, oe as parseGeneactivCsv, ce as parseGeneactivCsvBuffered, le as parseGt3x, ae as participantValidity, se as physicalActivitySeriesGrid, ue as placeMarkers, we as placeMarkersBatch, ge as placeMarkersTyped, be as placeNonwearMarkers, de as placeNonwearMarkersTyped, fe as prepareCompactPipelineOutcomeV1, me as prepareCompactPipelineV1, he as processGeneactivRaw, pe as processGt3xFull, ye as processGt3xFullWithEpoch, ve as processGt3xPart1, ke as processGt3xPart1WithEpoch, Se as processRawXyz, Re as processRawXyzImputed, Ce as processRawXyzImputedWithEpoch, Ae as projectLabelsOntoGrid, xe as rasterizePeriods, De as readGgirMeta, Me as recommended_chunk_size_mb, Pe as reduceF64V1, Fe as resolveTimezone, ze as restoredDstRuns, Ie as reviewGgirResults, Ue as reviewNonwearFile, We as reviewNonwearTotals, Oe as roundCountStorage, Te as runCompactPipelineOutcomeV1, Ge as runCompactPipelineV1, Ne as runFullPipeline, je as runFullPipelineOutcomeV1, Be as runFullPipelineV1, Ee as runGgirFromEpoch, Le as runGgirPart3, Ve as runMilestone, He as scoreAllDays, Xe as scoreColeKripke, qe as scoreConsensus, Je as scoreConsensusMajority, $e as scoreConsensusTyped, Ye as scoreEpochs, Ze as scoreEpochsTyped, Ke as scoreGgirHasib, Qe as scoreGgirHasibVariant, n_ as scoreGgirSib, e_ as scoreSadeh, __ as settleManualNonwearNights, t_ as sha256StreamFeed, r_ as sha256StreamFinish, i_ as sha256StreamStart, o_ as shiftDate, c_ as sleepRegularityIndex, l_ as sleepWakeScores, a_ as sourceLabelsWallClockMs, s_ as spanFiniteMean, u_ as spliceDstPlaceholders, w_ as startThreadPool, g_ as statesInPeriods, b_ as storedToGgirLabelsMs, d_ as streamParseFeed, f_ as streamParseFinish, m_ as streamParseFinishChunk, h_ as streamParseFinishChunkWithProgress, p_ as streamParseStart, y_ as streamParseStartData, v_ as streamParseStartWithEpoch, k_ as summarizeActimetricPreschoolWristRfClasses, S_ as summarizeExportGroups, R_ as summarizePhysicalActivityDays, C_ as summarizePhysicalActivityTrace, A_ as threadPoolReady, x_ as thresholdProbabilities, D_ as timeSemantics, M_ as timestampDiscontinuities, P_ as uniformTimestamps, F_ as utcDatesInSpan, z_ as utcDayIndex, I_ as validStateFraction, U_ as validWearDays, W_ as wallClockDstPlaceholders, O_ as wallClockLabels, T_ as wallMaskOntoGgirGrid, G_ as wbg_rayon_PoolBuilder, N_ as wbg_rayon_start_worker, j_ as wearSiteHasptRouting, B_ as weekendDates, E_ as windowCoverage, L_ as zeroCrossingCounts };
