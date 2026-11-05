var n = class {
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, $_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Rt.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = pt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.aw5batch_new(e, _);
		if (t[2]) throw vt(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, $_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), r = Dt;
		var i = dt(_) ? 0 : yt(_, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt;
		const c = Rt.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw vt(c[1]);
		return vt(c[0]);
	}
	subjects(n) {
		const e = Rt.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw vt(e[2]);
		var _ = et(e[0], e[1]).slice();
		return Rt.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
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
		Rt.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Rt.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Rt.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Rt.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Rt.streamchunkresult_axisX(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Rt.streamchunkresult_axisY(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Rt.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = Rt.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw vt(n[1]);
		return vt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== Rt.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Rt.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = at(n[0], n[1]).slice(), Rt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Rt.streamchunkresult_counts(this.__wbg_ptr);
		var e = _t(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Rt.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = _t(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Rt.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Rt.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = Rt.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = tt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = Rt.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = tt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = Rt.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = nt(e[0], e[1]).slice();
		return Rt.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return Rt.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Rt.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Rt.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Rt.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Rt.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = at(n[0], n[1]).slice(), Rt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Rt.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Rt.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Rt.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
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
		var e = _t(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Rt.streamchunkresult_temperature(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Rt.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Rt.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Rt.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Rt.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Rt.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Rt.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, K_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, K_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Rt.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Rt.streamparseresult_axisX(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Rt.streamparseresult_axisY(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Rt.streamparseresult_axisZ(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = Rt.streamparseresult_calibration(this.__wbg_ptr);
		if (n[2]) throw vt(n[1]);
		return vt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== Rt.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Rt.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = at(n[0], n[1]).slice(), Rt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
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
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Rt.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Rt.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = nt(n[0], n[1]).slice();
		return Rt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t(n) {
	const e = Rt.actiwareIntervalStatistics(n);
	if (e[3]) throw vt(e[2]);
	var _ = et(e[0], e[1]).slice();
	return Rt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function r(n, e, _) {
	const t = pt(e, Rt.__wbindgen_malloc), r = Dt, i = Rt.actiwareSleepIntervals(n, t, r, dt(_) ? 0 : J_(_));
	if (i[3]) throw vt(i[2]);
	var o = et(i[0], i[1]).slice();
	return Rt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function i(n, e) {
	const _ = Rt.actiwareWakeThreshold(n, dt(e) ? 0 : J_(e));
	if (_[3]) throw vt(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function o() {
	let n, e;
	try {
		const _ = Rt.actoursVersion();
		return n = _[0], e = _[1], at(_[0], _[1]);
	} finally {
		Rt.__wbindgen_free(n, e, 1);
	}
}
function c(n) {
	const e = Rt.aggregateEpochSeries(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function l(n) {
	const e = ht(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.analysisDatesOf(e, _);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function a(n, e) {
	const _ = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Dt, r = Rt.analysisWindowBounds(_, t, !dt(e), dt(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = nt(r[0], r[1]).slice(), Rt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function s(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Dt, o = Rt.analysisWindowSlice(_, t, r, i);
	var c = _t(o[0], o[1]).slice();
	return Rt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function w(n) {
	let e, _;
	try {
		const i = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt, c = Rt.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function g(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = ht(e, Rt.__wbindgen_malloc), c = Dt, l = ht(_, Rt.__wbindgen_malloc), a = Dt, s = Rt.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw vt(s[2]);
	var w = tt(s[0], s[1]).slice();
	return Rt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function u(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = ht(e, Rt.__wbindgen_malloc), c = Dt, l = ht(_, Rt.__wbindgen_malloc), a = Dt, s = Rt.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw vt(s[2]);
	var w = tt(s[0], s[1]).slice();
	return Rt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function b(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = ht(e, Rt.__wbindgen_malloc), c = Dt, l = ht(_, Rt.__wbindgen_malloc), a = Dt, s = Rt.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw vt(s[2]);
	var w = tt(s[0], s[1]).slice();
	return Rt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function d(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = ht(e, Rt.__wbindgen_malloc), c = Dt;
	return Rt.clippedUnionHours(r, i, o, c, _, t);
}
function f(n, e) {
	const _ = Rt.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw vt(_[1]);
	return vt(_[0]);
}
function m(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = ht(e, Rt.__wbindgen_malloc), c = Dt, l = ht(_, Rt.__wbindgen_malloc), a = Dt, s = Rt.computeAnglez5s(r, i, o, c, l, a, t);
	var w = nt(s[0], s[1]).slice();
	return Rt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function h(n) {
	let e, _;
	try {
		const i = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt, c = Rt.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function p(n, e, _, t, r, i, o) {
	const c = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), l = Dt, a = ht(e, Rt.__wbindgen_malloc), s = Dt, w = ft(_, Rt.__wbindgen_malloc), g = Dt, u = ht(t, Rt.__wbindgen_malloc), b = Dt, d = ft(r, Rt.__wbindgen_malloc), f = Dt, m = mt(i, Rt.__wbindgen_malloc), h = Dt, p = ft(o, Rt.__wbindgen_malloc), y = Dt, v = Rt.computeCircadianTyped(c, l, a, s, w, g, u, b, d, f, m, h, p, y);
	if (v[2]) throw vt(v[1]);
	return vt(v[0]);
}
function y(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = ht(e, Rt.__wbindgen_malloc), c = Dt, l = ht(_, Rt.__wbindgen_malloc), a = Dt, s = Rt.computeEnmo5s(r, i, o, c, l, a, t);
	var w = nt(s[0], s[1]).slice();
	return Rt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function v(n, e, _, t, r) {
	const i = ht(n, Rt.__wbindgen_malloc), o = Dt, c = ht(e, Rt.__wbindgen_malloc), l = Dt, a = ht(_, Rt.__wbindgen_malloc), s = Dt, w = Rt.computeMimsUnit(i, o, c, l, a, s, t, dt(r) ? 0 : J_(r));
	if (w[2]) throw vt(w[1]);
	return vt(w[0]);
}
function k(n, e, _, t, r) {
	const i = ht(n, Rt.__wbindgen_malloc), o = Dt, c = ht(e, Rt.__wbindgen_malloc), l = Dt, a = ht(_, Rt.__wbindgen_malloc), s = Dt, w = ht(t, Rt.__wbindgen_malloc), g = Dt, u = Rt.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, dt(r) ? 0 : J_(r));
	if (u[2]) throw vt(u[1]);
	return vt(u[0]);
}
function C(n, e, _, t, r) {
	const i = ht(n, Rt.__wbindgen_malloc), o = Dt, c = ht(e, Rt.__wbindgen_malloc), l = Dt, a = ht(_, Rt.__wbindgen_malloc), s = Dt, w = Rt.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, dt(r) ? 0 : J_(r));
	if (w[2]) throw vt(w[1]);
	return vt(w[0]);
}
function S(n, e, _, t, r) {
	const i = ht(n, Rt.__wbindgen_malloc), o = Dt, c = ht(e, Rt.__wbindgen_malloc), l = Dt, a = ht(_, Rt.__wbindgen_malloc), s = Dt, w = Rt.computeMimsUnitValues(i, o, c, l, a, s, t, dt(r) ? 0 : J_(r));
	if (w[3]) throw vt(w[2]);
	var g = nt(w[0], w[1]).slice();
	return Rt.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function A(n) {
	let e, _;
	try {
		const i = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt, c = Rt.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function R(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), y = Dt, v = ht(e, Rt.__wbindgen_malloc), k = Dt, C = ft(_, Rt.__wbindgen_malloc), S = Dt, A = ht(t, Rt.__wbindgen_malloc), R = Dt, D = ft(r, Rt.__wbindgen_malloc), x = Dt, M = mt(i, Rt.__wbindgen_malloc), P = Dt, I = ft(o, Rt.__wbindgen_malloc), F = Dt, W = mt(c, Rt.__wbindgen_malloc), O = Dt, N = ft(l, Rt.__wbindgen_malloc), U = Dt, z = ht(a, Rt.__wbindgen_malloc), G = Dt, B = ft(s, Rt.__wbindgen_malloc), T = Dt, V = ht(w, Rt.__wbindgen_malloc), j = Dt, E = ft(g, Rt.__wbindgen_malloc), L = Dt, H = ht(u, Rt.__wbindgen_malloc), X = Dt, q = ft(b, Rt.__wbindgen_malloc), Z = Dt, $ = ht(d, Rt.__wbindgen_malloc), Y = Dt, K = ft(f, Rt.__wbindgen_malloc), J = Dt, Q = mt(m, Rt.__wbindgen_malloc), nn = Dt, en = ft(h, Rt.__wbindgen_malloc), _n = Dt, tn = Rt.computeNightDifficultyTyped(p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, N, U, z, G, B, T, V, j, E, L, H, X, q, Z, $, Y, K, J, Q, nn, en, _n);
	if (tn[2]) throw vt(tn[1]);
	return vt(tn[0]);
}
function D(n) {
	let e, _;
	try {
		const i = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt, c = Rt.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function x(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), y = Dt, v = ht(e, Rt.__wbindgen_malloc), k = Dt, C = ft(_, Rt.__wbindgen_malloc), S = Dt, A = ht(t, Rt.__wbindgen_malloc), R = Dt, D = ft(r, Rt.__wbindgen_malloc), x = Dt, M = mt(i, Rt.__wbindgen_malloc), P = Dt, I = ft(o, Rt.__wbindgen_malloc), F = Dt, W = mt(c, Rt.__wbindgen_malloc), O = Dt, N = ft(l, Rt.__wbindgen_malloc), U = Dt, z = ht(a, Rt.__wbindgen_malloc), G = Dt, B = ft(s, Rt.__wbindgen_malloc), T = Dt, V = ht(w, Rt.__wbindgen_malloc), j = Dt, E = ft(g, Rt.__wbindgen_malloc), L = Dt, H = ht(u, Rt.__wbindgen_malloc), X = Dt, q = ft(b, Rt.__wbindgen_malloc), Z = Dt, $ = ht(d, Rt.__wbindgen_malloc), Y = Dt, K = ft(f, Rt.__wbindgen_malloc), J = Dt, Q = mt(m, Rt.__wbindgen_malloc), nn = Dt, en = ft(h, Rt.__wbindgen_malloc), _n = Dt, tn = Rt.computeNightSignalsTyped(p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, N, U, z, G, B, T, V, j, E, L, H, X, q, Z, $, Y, K, J, Q, nn, en, _n);
	if (tn[2]) throw vt(tn[1]);
	return vt(tn[0]);
}
function M(n, e, _) {
	const t = mt(n, Rt.__wbindgen_malloc), r = Dt, i = ht(e, Rt.__wbindgen_malloc), o = Dt, c = Rt.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw vt(c[1]);
	return vt(c[0]);
}
function P(n) {
	const e = Rt.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function I(n) {
	const e = pt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.consensusDisagreementDetail(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function F(n) {
	const e = Rt.consensusDisagreements(n);
	if (e[3]) throw vt(e[2]);
	var _ = et(e[0], e[1]).slice();
	return Rt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function W(n) {
	const e = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), _ = Dt, t = Rt.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function O(n) {
	const e = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), _ = Dt, t = Rt.convertScreensRedcapDiary(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function N(n) {
	const e = mt(n, Rt.__wbindgen_malloc), _ = Dt;
	Rt.csvBufferAppend(e, _);
}
function U(n) {
	Rt.csvBufferClear(n);
}
function z(n, e) {
	const _ = Rt.cutpointEpochCompatibility(n, e);
	if (_[2]) throw vt(_[1]);
	return vt(_[0]);
}
function G(n, e, _, t, r) {
	const i = ht(n, Rt.__wbindgen_malloc), o = Dt, c = Rt.cutpointToneCodes(i, o, e, _, t, r);
	var l = tt(c[0], c[1]).slice();
	return Rt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = Rt.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = at(r[0], r[1]).slice(), Rt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function T(n, e, _, t) {
	return 0 !== Rt.cutpointsValid(n, e, _, t);
}
function V(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = ft(e, Rt.__wbindgen_malloc), i = Dt, o = Rt.describeColumns(_, t, r, i);
	if (o[3]) throw vt(o[2]);
	var c = et(o[0], o[1]).slice();
	return Rt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function j(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = ht(e, Rt.__wbindgen_malloc), i = Dt, o = Rt.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw vt(o[2]);
	var c = tt(o[0], o[1]).slice();
	return Rt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function E(n, e) {
	let _, t;
	try {
		const r = mt(n, Rt.__wbindgen_malloc), i = Dt, o = yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Dt, l = Rt.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], at(l[0], l[1]);
	} finally {
		Rt.__wbindgen_free(_, t, 1);
	}
}
function L(n) {
	const e = Rt.detectGgirHasptVariant(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function H(n, e, _, t, r) {
	const i = ht(n, Rt.__wbindgen_malloc), o = Dt;
	var c = dt(e) ? 0 : yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), l = Dt, a = dt(_) ? 0 : ht(_, Rt.__wbindgen_malloc), s = Dt, w = dt(t) ? 0 : ht(t, Rt.__wbindgen_malloc), g = Dt, u = dt(r) ? 0 : yt(r, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), b = Dt;
	const d = Rt.detectHdcza(i, o, c, l, a, s, w, g, u, b);
	if (d[2]) throw vt(d[1]);
	return vt(d[0]);
}
function X(n) {
	const e = ht(n, Rt.__wbindgen_malloc), _ = Dt;
	return 0 !== Rt.detectHourClockJumpMs(e, _);
}
function q(n) {
	const e = ht(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.detectNonwear(e, _);
	var r = tt(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Z(n) {
	const e = ht(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.detectNonwearChoi2011(e, _);
	var r = tt(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = ht(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.detectNonwearChoi2011Bouts(e, _);
	if (t[3]) throw vt(t[2]);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Y(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = Rt.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw vt(r[2]);
	var i = tt(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = ht(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.detectNonwearChoi2012(e, _);
	var r = tt(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function J(n) {
	const e = ht(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.detectNonwearChoi2012Bouts(e, _);
	if (t[3]) throw vt(t[2]);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Q(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = Rt.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw vt(r[2]);
	var i = tt(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function nn(n) {
	const e = ht(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.detectNonwearChoiBouts(e, _);
	if (t[3]) throw vt(t[2]);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function en(n) {
	let e, _;
	try {
		const i = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt, c = Rt.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function _n(n, e, _, t, r, i, o) {
	const c = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), l = Dt, a = yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), s = Dt, w = ht(_, Rt.__wbindgen_malloc), g = Dt, u = ht(t, Rt.__wbindgen_malloc), b = Dt, d = ht(r, Rt.__wbindgen_malloc), f = Dt, m = Rt.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, u, b, d, f, i, o);
	if (m[2]) throw vt(m[1]);
	return vt(m[0]);
}
function tn(n, e, _) {
	const t = pt(_, Rt.__wbindgen_malloc), r = Dt, i = Rt.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw vt(i[2]);
	var o = et(i[0], i[1]).slice();
	return Rt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function rn(n, e, _, t) {
	const r = Rt.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = nt(r[0], r[1]).slice(), Rt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function on(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = ht(e, Rt.__wbindgen_malloc), i = Dt, o = Rt.epochAgreement(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return vt(o[0]);
}
function cn(n, e, _, t, r) {
	const i = ht(n, Rt.__wbindgen_malloc), o = Dt, c = ht(e, Rt.__wbindgen_malloc), l = Dt, a = ht(_, Rt.__wbindgen_malloc), s = Dt, w = ht(t, Rt.__wbindgen_malloc), g = Dt, u = Rt.epochRawData(i, o, c, l, a, s, w, g, r);
	if (u[2]) throw vt(u[1]);
	return vt(u[0]);
}
function ln(n, e, _) {
	const t = ht(n, Rt.__wbindgen_malloc), r = Dt, i = ht(e, Rt.__wbindgen_malloc), o = Dt, c = Rt.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw vt(c[1]);
	return vt(c[0]);
}
function an(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = Rt.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = _t(o[0], o[1]).slice(), Rt.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function sn(n, e) {
	let _, t;
	try {
		const o = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Dt, l = yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), a = Dt, s = Rt.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, vt(s[2]);
		return _ = r, t = i, at(r, i);
	} finally {
		Rt.__wbindgen_free(_, t, 1);
	}
}
function wn(n) {
	const e = pt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.exportNapAggregate(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function gn(n, e, _) {
	const t = pt(_, Rt.__wbindgen_malloc), r = Dt, i = Rt.exportPeriodFigures(!dt(n), dt(n) ? 0 : n, !dt(e), dt(e) ? 0 : e, t, r);
	if (i[2]) throw vt(i[1]);
	return vt(i[0]);
}
function un(n) {
	const e = mt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.extractCapsense(e, _);
	if (t[3]) throw vt(t[2]);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function bn(n, e, _, t, r) {
	const i = ht(n, Rt.__wbindgen_malloc), o = Dt, c = ht(e, Rt.__wbindgen_malloc), l = Dt, a = ht(_, Rt.__wbindgen_malloc), s = Dt, w = yt(r, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), g = Dt, u = Rt.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (u[3]) throw vt(u[2]);
	var b = nt(u[0], u[1]).slice();
	return Rt.__wbindgen_free(u[0], 8 * u[1], 8), b;
}
function dn(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = yt(t, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Dt, l = Rt.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw vt(l[2]);
	var a = nt(l[0], l[1]).slice();
	return Rt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function fn(n, e, _, t, r) {
	const i = mt(_, Rt.__wbindgen_malloc), o = Dt, c = ht(t, Rt.__wbindgen_malloc), l = Dt, a = Rt.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw vt(a[1]);
	return vt(a[0]);
}
function mn(n, e, _, t, r, i) {
	const o = ht(_, Rt.__wbindgen_malloc), c = Dt, l = ht(t, Rt.__wbindgen_malloc), a = Dt, s = yt(i, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), w = Dt, g = Rt.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw vt(g[2]);
	var u = nt(g[0], g[1]).slice();
	return Rt.__wbindgen_free(g[0], 8 * g[1], 8), u;
}
function hn(n) {
	const e = Rt.fuseNonwearMasks(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function pn(n, e, _) {
	var t = dt(_) ? 0 : yt(_, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), r = Dt;
	const i = Rt.generateActiwareRestIntervals(n, dt(e) ? 0 : J_(e), t, r);
	if (i[3]) throw vt(i[2]);
	var o = et(i[0], i[1]).slice();
	return Rt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function yn() {
	const n = Rt.getComputeCapabilitiesV1();
	if (n[2]) throw vt(n[1]);
	return vt(n[0]);
}
function vn(n, e, _) {
	const t = pt(_, Rt.__wbindgen_malloc), r = Dt, i = Rt.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw vt(i[2]);
	var o = nt(i[0], i[1]).slice();
	return Rt.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function kn(n, e) {
	var _ = dt(n) ? 0 : yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Dt;
	const r = Rt.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw vt(r[1]);
	return vt(r[0]);
}
function Cn(n) {
	const e = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), _ = Dt, t = Rt.ggirConfigValues(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function Sn(n, e) {
	const _ = Rt.ggirDayValidFraction(n, e);
	return 0 === _[0] ? void 0 : _[1];
}
function An(n, e, _) {
	const t = ht(n, Rt.__wbindgen_malloc), r = Dt;
	var i = dt(e) ? 0 : ht(e, Rt.__wbindgen_malloc), o = Dt, c = dt(_) ? 0 : yt(_, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), l = Dt;
	const a = Rt.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw vt(a[2]);
	var s = tt(a[0], a[1]).slice();
	return Rt.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function Rn(n, e) {
	const _ = mt(n, Rt.__wbindgen_malloc), t = Dt;
	var r = dt(e) ? 0 : yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Dt;
	const o = Rt.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return vt(o[0]);
}
function Dn(n, e, _) {
	const t = pt(e, Rt.__wbindgen_malloc), r = Dt;
	var i = dt(_) ? 0 : ht(_, Rt.__wbindgen_malloc), o = Dt;
	const c = Rt.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw vt(c[2]);
	var l = et(c[0], c[1]).slice();
	return Rt.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function xn(n) {
	var e = dt(n) ? 0 : yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), _ = Dt;
	const t = Rt.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw vt(t[1]);
	return t[0];
}
function Mn(n, e, _, t) {
	const r = ft(n, Rt.__wbindgen_malloc), i = Dt, o = pt(_, Rt.__wbindgen_malloc), c = Dt;
	var l = dt(t) ? 0 : ht(t, Rt.__wbindgen_malloc), a = Dt;
	const s = Rt.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw vt(s[2]);
	var w = nt(s[0], s[1]).slice();
	return Rt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function Pn(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = pt(e, Rt.__wbindgen_malloc), i = Dt, o = Rt.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw vt(o[2]);
	var c = nt(o[0], o[1]).slice();
	return Rt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function In(n, e, _, t) {
	const r = pt(n, Rt.__wbindgen_malloc), i = Dt, o = ht(e, Rt.__wbindgen_malloc), c = Dt, l = ht(_, Rt.__wbindgen_malloc), a = Dt, s = ht(t, Rt.__wbindgen_malloc), w = Dt, g = Rt.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw vt(g[1]);
	return vt(g[0]);
}
function Fn(n) {
	const e = mt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.ggirMilestoneVersion(e, _);
	if (t[3]) throw vt(t[2]);
	let r;
	return 0 !== t[0] && (r = at(t[0], t[1]).slice(), Rt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Wn(n) {
	const e = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), _ = Dt, t = Rt.ggirNonwearApproach(e, _);
	if (t[3]) throw vt(t[2]);
	let r;
	return 0 !== t[0] && (r = at(t[0], t[1]).slice(), Rt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function On(n) {
	const e = Rt.ggirPersonSummaries(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Nn() {
	const n = Rt.ggirRerunProfiles();
	if (n[3]) throw vt(n[2]);
	var e = et(n[0], n[1]).slice();
	return Rt.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function Un(n) {
	const e = mt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.ggirSavedNonwearWindows(e, _);
	if (t[2]) throw vt(t[1]);
	return t[0] >>> 0;
}
function zn(n, e, _, t) {
	const r = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Dt, o = yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Dt, l = yt(_, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), a = Dt, s = pt(t, Rt.__wbindgen_malloc), w = Dt, g = Rt.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw vt(g[2]);
	let u;
	return 0 !== g[0] && (u = et(g[0], g[1]).slice(), Rt.__wbindgen_free(g[0], 4 * g[1], 4)), u;
}
function Gn(n, e) {
	return Rt.ggirSptDurationHours(n, e);
}
function Bn(n, e) {
	const _ = Rt.ggirSummaryDenominator(n, e);
	if (_[2]) throw vt(_[1]);
	return vt(_[0]);
}
function Tn(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = ht(e, Rt.__wbindgen_malloc), i = Dt, o = Rt.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Vn(n) {
	let e, _;
	try {
		const i = mt(n, Rt.__wbindgen_malloc), o = Dt, c = Rt.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function jn(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = ht(e, Rt.__wbindgen_malloc), c = Dt, l = ht(_, Rt.__wbindgen_malloc), a = Dt, s = ht(t, Rt.__wbindgen_malloc), w = Dt, g = Rt.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw vt(g[1]);
	return vt(g[0]);
}
function En() {
	Rt.installPanicHook();
}
function Ln(n) {
	const e = pt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.interRaterReliability(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function Hn(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = Rt.irregularInternalDays(_, t, e);
	var i = et(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Xn(n) {
	const e = mt(n, Rt.__wbindgen_malloc), _ = Dt;
	return 0 !== Rt.isGeneactivFormat(e, _);
}
function qn() {
	return Rt.linearMemoryBytesV1();
}
function Zn(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = ht(e, Rt.__wbindgen_malloc), c = Dt, l = ht(_, Rt.__wbindgen_malloc), a = Dt, s = Rt.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw vt(s[1]);
	return vt(s[0]);
}
function $n(n, e, _) {
	const t = ht(n, Rt.__wbindgen_malloc), r = Dt, i = Rt.markerIndexRange(t, r, e, _);
	var o = _t(i[0], i[1]).slice();
	return Rt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Yn(n, e, _, t, r, i, o) {
	const c = ht(n, Rt.__wbindgen_malloc), l = Dt, a = ht(e, Rt.__wbindgen_malloc), s = Dt, w = Rt.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw vt(w[1]);
	return vt(w[0]);
}
function Kn(n) {
	const e = ht(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Jn(n, e, _, t) {
	const r = Rt.metricWarnings(n, e, _, t);
	var i = tt(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Qn(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = ht(e, Rt.__wbindgen_malloc), i = Dt, o = Rt.midSleepClockHours(_, t, r, i);
	var c = nt(o[0], o[1]).slice();
	return Rt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function ne(n, e, _, t, r) {
	const i = ht(n, Rt.__wbindgen_malloc), o = Dt, c = ht(e, Rt.__wbindgen_malloc), l = Dt, a = ht(_, Rt.__wbindgen_malloc), s = Dt, w = Rt.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw vt(w[1]);
	return vt(w[0]);
}
function ee(n) {
	const e = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), _ = Dt, t = Rt.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = at(t[0], t[1]).slice(), Rt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function _e(n, e, _, t, r) {
	const i = ht(_, Rt.__wbindgen_malloc), o = Dt, c = ht(t, Rt.__wbindgen_malloc), l = Dt, a = ht(r, Rt.__wbindgen_malloc), s = Dt, w = Rt.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw vt(w[1]);
	return vt(w[0]);
}
function te(n, e, _, t) {
	let r, i;
	try {
		const l = ft(n, Rt.__wbindgen_malloc), a = Dt, s = yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), w = Dt, g = Rt.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, vt(g[2]);
		return r = o, i = c, at(o, c);
	} finally {
		Rt.__wbindgen_free(r, i, 1);
	}
}
function re(n) {
	const e = ht(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.nonwearInSleepCounts(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function ie(n) {
	const e = Rt.nonwearSleepOverlap(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function oe(n, e, _) {
	const t = ht(n, Rt.__wbindgen_malloc), r = Dt, i = ht(e, Rt.__wbindgen_malloc), o = Dt, c = Rt.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw vt(c[1]);
	return vt(c[0]);
}
function ce(n, e, _, t, r, i) {
	const o = yt(r, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Dt, l = Rt.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw vt(l[2]);
	var a = nt(l[0], l[1]).slice();
	return Rt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function le(n, e) {
	const _ = mt(n, Rt.__wbindgen_malloc), t = Dt, r = Rt.parseActigraphCsv(_, t, e);
	if (r[2]) throw vt(r[1]);
	return vt(r[0]);
}
function ae(n) {
	const e = Rt.parseActigraphCsvBuffered(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function se(n, e, _, t) {
	const r = mt(n, Rt.__wbindgen_malloc), i = Dt;
	var o = dt(e) ? 0 : yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Dt, l = dt(_) ? 0 : pt(_, Rt.__wbindgen_malloc), a = Dt, s = dt(t) ? 0 : yt(t, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), w = Dt;
	const g = Rt.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw vt(g[1]);
	return vt(g[0]);
}
function we(n) {
	const e = mt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.parseCwa(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function ge(n, e) {
	const _ = mt(n, Rt.__wbindgen_malloc), t = Dt, r = yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Dt, o = Rt.parseEpochSeries(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return vt(o[0]);
}
function ue(n) {
	const e = mt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.parseGeneactivBin(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function be(n) {
	const e = mt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.parseGeneactivCsv(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function de() {
	const n = Rt.parseGeneactivCsvBuffered();
	if (n[2]) throw vt(n[1]);
	return vt(n[0]);
}
function fe(n) {
	const e = mt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.parseGt3x(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function me(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = mt(e, Rt.__wbindgen_malloc), c = Dt, l = mt(_, Rt.__wbindgen_malloc), a = Dt, s = Rt.participantValidity(r, i, o, c, l, a, dt(t) ? 0 : J_(t));
	if (s[2]) throw vt(s[1]);
	return vt(s[0]);
}
function he(n, e, _, t, r) {
	const i = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt, c = ht(e, Rt.__wbindgen_malloc), l = Dt;
	var a = dt(_) ? 0 : ht(_, Rt.__wbindgen_malloc), s = Dt;
	const w = Rt.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw vt(w[1]);
	return vt(w[0]);
}
function pe(n) {
	let e, _;
	try {
		const i = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt, c = Rt.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function ye(n, e, _, t, r, i) {
	const o = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Dt, l = ht(e, Rt.__wbindgen_malloc), a = Dt, s = ht(_, Rt.__wbindgen_malloc), w = Dt, g = mt(t, Rt.__wbindgen_malloc), u = Dt, b = mt(r, Rt.__wbindgen_malloc), d = Dt, f = yt(i, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), m = Dt, h = Rt.placeMarkersBatch(o, c, l, a, s, w, g, u, b, d, f, m);
	if (h[2]) throw vt(h[1]);
	return vt(h[0]);
}
function ve(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h, p) {
	const y = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), v = Dt, k = ht(e, Rt.__wbindgen_malloc), C = Dt, S = ft(_, Rt.__wbindgen_malloc), A = Dt, R = ht(t, Rt.__wbindgen_malloc), D = Dt, x = ft(r, Rt.__wbindgen_malloc), M = Dt, P = mt(i, Rt.__wbindgen_malloc), I = Dt, F = ft(o, Rt.__wbindgen_malloc), W = Dt, O = mt(c, Rt.__wbindgen_malloc), N = Dt, U = ft(l, Rt.__wbindgen_malloc), z = Dt, G = ht(a, Rt.__wbindgen_malloc), B = Dt, T = ft(s, Rt.__wbindgen_malloc), V = Dt, j = ht(w, Rt.__wbindgen_malloc), E = Dt, L = ft(g, Rt.__wbindgen_malloc), H = Dt, X = ht(u, Rt.__wbindgen_malloc), q = Dt, Z = ft(b, Rt.__wbindgen_malloc), $ = Dt, Y = ht(d, Rt.__wbindgen_malloc), K = Dt, J = ft(f, Rt.__wbindgen_malloc), Q = Dt, nn = mt(m, Rt.__wbindgen_malloc), en = Dt, _n = ft(h, Rt.__wbindgen_malloc), tn = Dt;
	var rn = dt(p) ? 0 : yt(p, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), on = Dt;
	const cn = Rt.placeMarkersTyped(y, v, k, C, S, A, R, D, x, M, P, I, F, W, O, N, U, z, G, B, T, V, j, E, L, H, X, q, Z, $, Y, K, J, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw vt(cn[1]);
	return vt(cn[0]);
}
function ke(n) {
	let e, _;
	try {
		const i = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt, c = Rt.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function Ce(n, e, _, t) {
	const r = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Dt, o = ht(e, Rt.__wbindgen_malloc), c = Dt, l = ht(_, Rt.__wbindgen_malloc), a = Dt, s = mt(t, Rt.__wbindgen_malloc), w = Dt, g = Rt.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw vt(g[1]);
	return vt(g[0]);
}
function Se(n) {
	const e = Rt.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Ae(n) {
	const e = Rt.prepareCompactPipelineV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Re(n, e, _, t, r, i, o, c) {
	const l = ht(n, Rt.__wbindgen_malloc), a = Dt, s = ht(e, Rt.__wbindgen_malloc), w = Dt, g = ht(_, Rt.__wbindgen_malloc), u = Dt, b = ht(t, Rt.__wbindgen_malloc), d = Dt;
	var f = dt(o) ? 0 : yt(o, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), m = Dt, h = dt(c) ? 0 : yt(c, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), p = Dt;
	const y = Rt.processGeneactivRaw(l, a, s, w, g, u, b, d, r, i, f, m, h, p);
	if (y[2]) throw vt(y[1]);
	return vt(y[0]);
}
function De(n, e) {
	const _ = mt(n, Rt.__wbindgen_malloc), t = Dt;
	var r = dt(e) ? 0 : yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Dt;
	const o = Rt.processGt3xPart1(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return vt(o[0]);
}
function xe(n, e, _) {
	const t = mt(n, Rt.__wbindgen_malloc), r = Dt;
	var i = dt(_) ? 0 : yt(_, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt;
	const c = Rt.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw vt(c[1]);
	return vt(c[0]);
}
function Me(n, e, _, t, r, i, o) {
	const c = ht(n, Rt.__wbindgen_malloc), l = Dt, a = ht(e, Rt.__wbindgen_malloc), s = Dt, w = ht(_, Rt.__wbindgen_malloc), g = Dt;
	var u = dt(i) ? 0 : yt(i, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), b = Dt, d = dt(o) ? 0 : yt(o, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), f = Dt;
	const m = Rt.processRawXyz(c, l, a, s, w, g, t, r, u, b, d, f);
	if (m[2]) throw vt(m[1]);
	return vt(m[0]);
}
function Pe(n, e, _, t, r, i, o, c) {
	const l = ht(n, Rt.__wbindgen_malloc), a = Dt, s = ht(e, Rt.__wbindgen_malloc), w = Dt, g = ht(_, Rt.__wbindgen_malloc), u = Dt, b = ht(t, Rt.__wbindgen_malloc), d = Dt;
	var f = dt(i) ? 0 : yt(i, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), m = Dt, h = dt(o) ? 0 : yt(o, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), p = Dt, y = dt(c) ? 0 : ht(c, Rt.__wbindgen_malloc), v = Dt;
	const k = Rt.processRawXyzImputed(l, a, s, w, g, u, b, d, r, f, m, h, p, y, v);
	if (k[2]) throw vt(k[1]);
	return vt(k[0]);
}
function Ie(n, e, _, t, r, i, o, c, l, a) {
	const s = ht(n, Rt.__wbindgen_malloc), w = Dt, g = ht(e, Rt.__wbindgen_malloc), u = Dt, b = ht(_, Rt.__wbindgen_malloc), d = Dt, f = ht(t, Rt.__wbindgen_malloc), m = Dt;
	var h = dt(i) ? 0 : yt(i, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), p = Dt, y = dt(c) ? 0 : yt(c, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), v = Dt, k = dt(a) ? 0 : ht(a, Rt.__wbindgen_malloc), C = Dt;
	const S = Rt.processRawXyzImputedWithEpoch(s, w, g, u, b, d, f, m, r, h, p, o, y, v, dt(l) ? 16777215 : l ? 1 : 0, k, C);
	if (S[2]) throw vt(S[1]);
	return vt(S[0]);
}
function Fe(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = mt(e, Rt.__wbindgen_malloc), c = Dt, l = ht(t, Rt.__wbindgen_malloc), a = Dt, s = Rt.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = tt(s[0], s[1]).slice();
	return Rt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function We(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = ht(e, Rt.__wbindgen_malloc), c = Dt, l = ht(_, Rt.__wbindgen_malloc), a = Dt, s = Rt.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw vt(s[1]);
	return vt(s[0]);
}
function Oe(n, e, _) {
	const t = mt(n, Rt.__wbindgen_malloc), r = Dt;
	var i = dt(e) ? 0 : yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt;
	const c = Rt.readGgirMeta(t, r, i, o, dt(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw vt(c[1]);
	return vt(c[0]);
}
function Ne(n, e) {
	const _ = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Dt;
	var r = dt(e) ? 0 : yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Dt;
	const o = Rt.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return vt(o[0]);
}
function Ue() {
	return Rt.recommended_chunk_size_mb() >>> 0;
}
function ze(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Dt, o = Rt.reduceF64V1(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return o[0];
}
function Ge(n, e) {
	const _ = pt(e, Rt.__wbindgen_malloc), t = Dt, r = Rt.rerunGgirResults(n, _, t);
	if (r[2]) throw vt(r[1]);
	return vt(r[0]);
}
function Be(n) {
	const e = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), _ = Dt, t = Rt.resolveTimezone(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function Te(n, e, _) {
	const t = ht(n, Rt.__wbindgen_malloc), r = Dt, i = ht(e, Rt.__wbindgen_malloc), o = Dt, c = ft(_, Rt.__wbindgen_malloc), l = Dt, a = Rt.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw vt(a[2]);
	var s = et(a[0], a[1]).slice();
	return Rt.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function Ve(n, e, _, t, r, i, o, c, l, a, s, w, g, u) {
	const b = mt(n, Rt.__wbindgen_malloc), d = Dt, f = yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), m = Dt;
	var h = dt(_) ? 0 : mt(_, Rt.__wbindgen_malloc), p = Dt, y = dt(t) ? 0 : mt(t, Rt.__wbindgen_malloc), v = Dt, k = dt(r) ? 0 : mt(r, Rt.__wbindgen_malloc), C = Dt, S = dt(i) ? 0 : mt(i, Rt.__wbindgen_malloc), A = Dt, R = dt(o) ? 0 : mt(o, Rt.__wbindgen_malloc), D = Dt, x = dt(c) ? 0 : yt(c, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), M = Dt, P = dt(l) ? 0 : yt(l, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), I = Dt, F = dt(a) ? 0 : pt(a, Rt.__wbindgen_malloc), W = Dt, O = dt(w) ? 0 : yt(w, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), N = Dt, U = dt(g) ? 0 : yt(g, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), z = Dt;
	const G = Rt.reviewGgirResults(b, d, f, m, h, p, y, v, k, C, S, A, R, D, x, M, P, I, F, W, s, O, N, U, z, dt(u) ? 4294967297 : u >>> 0);
	if (G[2]) throw vt(G[1]);
	return vt(G[0]);
}
function je(n) {
	const e = pt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.reviewNonwearFile(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function Ee(n) {
	const e = pt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.reviewNonwearTotals(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function Le(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = Rt.roundCountStorage(_, t, e);
	var i = nt(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function He(n) {
	const e = Rt.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Xe(n) {
	const e = Rt.runCompactPipelineV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function qe(n) {
	const e = Rt.runFullPipelineOutcomeV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Ze(n) {
	const e = Rt.runFullPipelineV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function $e(n) {
	const e = Rt.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Ye(n) {
	const e = Rt.runGgirPart3(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function Ke(n, e) {
	const _ = mt(n, Rt.__wbindgen_malloc), t = Dt;
	var r = dt(e) ? 0 : yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Dt;
	const o = Rt.runMilestone(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return vt(o[0]);
}
function Je(n) {
	const e = pt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.scoreAllDays(e, _);
	if (t[3]) throw vt(t[2]);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Qe(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = Rt.scoreColeKripke(_, t, e);
	var i = tt(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function n_(n) {
	let e, _;
	try {
		const i = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt, c = Rt.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function e_(n) {
	const e = Rt.scoreConsensusMajority(n);
	if (e[3]) throw vt(e[2]);
	var _ = tt(e[0], e[1]).slice();
	return Rt.__wbindgen_free(e[0], 1 * e[1], 1), _;
}
function __(n, e, _) {
	const t = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), r = Dt, i = mt(e, Rt.__wbindgen_malloc), o = Dt, c = ft(_, Rt.__wbindgen_malloc), l = Dt, a = Rt.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw vt(a[1]);
	return vt(a[0]);
}
function t_(n) {
	let e, _;
	try {
		const i = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt, c = Rt.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, vt(c[2]);
		return e = t, _ = r, at(t, r);
	} finally {
		Rt.__wbindgen_free(e, _, 1);
	}
}
function r_(n, e, _, t, r, i) {
	const o = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), c = Dt, l = ht(e, Rt.__wbindgen_malloc), a = Dt, s = ht(_, Rt.__wbindgen_malloc), w = Dt, g = ht(t, Rt.__wbindgen_malloc), u = Dt, b = Rt.scoreEpochsTyped(o, c, l, a, s, w, g, u, r, i);
	if (b[2]) throw vt(b[1]);
	return vt(b[0]);
}
function i_(n, e, _) {
	const t = ht(n, Rt.__wbindgen_malloc), r = Dt;
	var i = dt(e) ? 0 : yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt, c = dt(_) ? 0 : ht(_, Rt.__wbindgen_malloc), l = Dt;
	const a = Rt.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw vt(a[2]);
	var s = tt(a[0], a[1]).slice();
	return Rt.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function o_(n) {
	const e = Rt.scoreGgirHasibVariant(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function c_(n, e, _, t, r) {
	const i = ht(n, Rt.__wbindgen_malloc), o = Dt, c = ht(e, Rt.__wbindgen_malloc), l = Dt;
	var a = dt(t) ? 0 : yt(t, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), s = Dt, w = dt(r) ? 0 : ht(r, Rt.__wbindgen_malloc), g = Dt;
	const u = Rt.scoreGgirSib(i, o, c, l, _, a, s, w, g);
	if (u[2]) throw vt(u[1]);
	return vt(u[0]);
}
function l_(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = Rt.scoreSadeh(_, t, e);
	var i = tt(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function a_(n, e, _) {
	const t = yt(_, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), r = Dt, i = Rt.screensRestIntervals(n, dt(e) ? 0 : J_(e), t, r);
	if (i[2]) throw vt(i[1]);
	return vt(i[0]);
}
function s_(n) {
	const e = pt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.settleManualNonwearNights(e, _);
	if (t[3]) throw vt(t[2]);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function w_(n) {
	const e = mt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.sha256StreamFeed(e, _);
	if (t[1]) throw vt(t[0]);
}
function g_() {
	let n, e;
	try {
		const r = Rt.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, vt(r[2]);
		return n = _, e = t, at(_, t);
	} finally {
		Rt.__wbindgen_free(n, e, 1);
	}
}
function u_() {
	Rt.sha256StreamStart();
}
function b_(n, e) {
	const _ = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Dt, r = Rt.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = at(r[0], r[1]).slice(), Rt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function d_(n, e, _, t, r) {
	const i = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt, c = ht(e, Rt.__wbindgen_malloc), l = Dt, a = ft(_, Rt.__wbindgen_malloc), s = Dt, w = ht(t, Rt.__wbindgen_malloc), g = Dt, u = ft(r, Rt.__wbindgen_malloc), b = Dt, d = Rt.sleepRegularityIndex(i, o, c, l, a, s, w, g, u, b);
	if (d[3]) throw vt(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function f_(n, e) {
	const _ = Rt.sleepWakeScores(n, dt(e) ? 0 : J_(e));
	if (_[2]) throw vt(_[1]);
	return vt(_[0]);
}
function m_(n) {
	const e = pt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.sourceLabelsWallClockMs(e, _);
	var r = nt(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function h_(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = ht(e, Rt.__wbindgen_malloc), c = Dt, l = Rt.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function p_(n, e, _) {
	const t = ht(n, Rt.__wbindgen_malloc), r = Dt, i = pt(e, Rt.__wbindgen_malloc), o = Dt, c = ht(_, Rt.__wbindgen_malloc), l = Dt, a = Rt.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw vt(a[2]);
	let s;
	return 0 !== a[0] && (s = nt(a[0], a[1]).slice(), Rt.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function y_(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = mt(e, Rt.__wbindgen_malloc), c = Dt, l = ht(_, Rt.__wbindgen_malloc), a = Dt, s = ht(t, Rt.__wbindgen_malloc), w = Dt, g = Rt.statesInPeriods(r, i, o, c, l, a, s, w);
	var u = tt(g[0], g[1]).slice();
	return Rt.__wbindgen_free(g[0], 1 * g[1], 1), u;
}
function v_(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = pt(e, Rt.__wbindgen_malloc), i = Dt, o = Rt.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw vt(o[2]);
	var c = nt(o[0], o[1]).slice();
	return Rt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function k_(n) {
	const e = mt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.streamParseFeed(e, _);
	if (t[2]) throw vt(t[1]);
	return t[0] >>> 0;
}
function C_() {
	const n = Rt.streamParseFinish();
	if (n[2]) throw vt(n[1]);
	return _.__wrap(n[0]);
}
function S_() {
	const n = Rt.streamParseFinishChunk();
	if (n[2]) throw vt(n[1]);
	return e.__wrap(n[0]);
}
function A_(n) {
	const _ = Rt.streamParseFinishChunkWithProgress(n);
	if (_[2]) throw vt(_[1]);
	return e.__wrap(_[0]);
}
function R_(n, e, _) {
	var t = dt(_) ? 0 : yt(_, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), r = Dt;
	const i = Rt.streamParseStart(n, e, t, r);
	if (i[1]) throw vt(i[0]);
}
function D_(n, e) {
	const _ = Rt.streamParseStartData(n, e);
	if (_[1]) throw vt(_[0]);
}
function x_(n, e, _, t, r) {
	var i = dt(t) ? 0 : yt(t, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), o = Dt;
	const c = Rt.streamParseStartWithEpoch(n, e, _, i, o, !dt(r), dt(r) ? 0 : r);
	if (c[1]) throw vt(c[0]);
}
function M_(n, e) {
	const _ = mt(n, Rt.__wbindgen_malloc), t = Dt, r = Rt.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw vt(r[1]);
	return vt(r[0]);
}
function P_(n) {
	const e = Rt.summarizeExportGroups(n);
	if (e[3]) throw vt(e[2]);
	var _ = et(e[0], e[1]).slice();
	return Rt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function I_(n) {
	const e = Rt.summarizePhysicalActivityDays(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function F_(n) {
	const e = Rt.summarizePhysicalActivityTrace(n);
	if (e[2]) throw vt(e[1]);
	return vt(e[0]);
}
function W_(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = Rt.thresholdProbabilities(_, t, e);
	var i = tt(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function O_(n) {
	const e = pt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.timeSemantics(e, _);
	if (t[3]) throw vt(t[2]);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function N_(n, e, _) {
	const t = ht(n, Rt.__wbindgen_malloc), r = Dt, i = Rt.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw vt(i[2]);
	var o = et(i[0], i[1]).slice();
	return Rt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function U_(n, e, _) {
	const t = Rt.uniformTimestamps(n, e, _);
	var r = nt(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function z_(n, e) {
	const _ = Rt.utcDatesInSpan(n, e);
	var t = et(_[0], _[1]).slice();
	return Rt.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function G_(n) {
	const e = ht(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.utcDayIndex(e, _);
	if (t[2]) throw vt(t[1]);
	return vt(t[0]);
}
function B_(n) {
	const e = mt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function T_(n, e) {
	const _ = ht(n, Rt.__wbindgen_malloc), t = Dt, r = Rt.validWearDays(_, t, dt(e) ? 0 : J_(e));
	if (r[3]) throw vt(r[2]);
	var i = tt(r[0], r[1]).slice();
	return Rt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function V_(n, e, _) {
	const t = ht(n, Rt.__wbindgen_malloc), r = Dt, i = Rt.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw vt(i[1]);
	return vt(i[0]);
}
function j_(n) {
	const e = ht(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.wallClockLabels(e, _);
	var r = et(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function E_(n, e, _) {
	const t = mt(n, Rt.__wbindgen_malloc), r = Dt, i = pt(_, Rt.__wbindgen_malloc), o = Dt, c = Rt.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw vt(c[2]);
	var l = tt(c[0], c[1]).slice();
	return Rt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function L_(n, e) {
	const _ = yt(n, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Dt;
	var r = dt(e) ? 0 : yt(e, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), i = Dt;
	const o = Rt.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw vt(o[1]);
	return vt(o[0]);
}
function H_(n) {
	const e = pt(n, Rt.__wbindgen_malloc), _ = Dt, t = Rt.weekendDates(e, _);
	var r = tt(t[0], t[1]).slice();
	return Rt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function X_(n, e, _, t) {
	const r = ht(n, Rt.__wbindgen_malloc), i = Dt, o = Rt.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function q_(n, e, _, t, r) {
	const i = ht(n, Rt.__wbindgen_malloc), o = Dt, c = ht(e, Rt.__wbindgen_malloc), l = Dt, a = ht(_, Rt.__wbindgen_malloc), s = Dt, w = Rt.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw vt(w[1]);
	return vt(w[0]);
}
function Z_() {
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
				const _ = yt(String(e), Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Dt;
				it().setInt32(n + 4, t, !0), it().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				it().setBigInt64(n + 8, dt(_) ? BigInt(0) : _, !0), it().setInt32(n + 0, !dt(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return dt(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = yt(Q_(e), Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Dt;
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
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const _ = "number" == typeof e ? e : void 0;
				it().setFloat64(n + 8, dt(_) ? 0 : _, !0), it().setInt32(n + 0, !dt(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = dt(_) ? 0 : yt(_, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), r = Dt;
				it().setInt32(n + 4, r, !0), it().setInt32(n + 0, t, !0);
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
					Rt.__wbindgen_free(_, t, 1);
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
				return new Uint32Array(_t(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(nt(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== ot && 0 !== ot.byteLength || (ot = new Float32Array(Rt.memory.buffer)), ot).subarray(_ / 4, _ / 4 + t)));
				var _, t;
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
				Uint8Array.prototype.set.call(tt(n, e), _);
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
				const _ = yt(e.stack, Rt.__wbindgen_malloc, Rt.__wbindgen_realloc), t = Dt;
				it().setInt32(n + 4, t, !0), it().setInt32(n + 0, _, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return dt(n) ? 0 : J_(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return dt(n) ? 0 : J_(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return dt(n) ? 0 : J_(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return dt(n) ? 0 : J_(n);
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
				return tt(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return at(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Rt.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
const $_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Rt.__wbg_aw5batch_free(n >>> 0, 1)), Y_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Rt.__wbg_streamchunkresult_free(n >>> 0, 1)), K_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Rt.__wbg_streamparseresult_free(n >>> 0, 1));
function J_(n) {
	const e = Rt.__externref_table_alloc();
	return Rt.__wbindgen_externrefs.set(e, n), e;
}
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
	return n >>>= 0, lt().subarray(n / 8, n / 8 + e);
}
function et(n, e) {
	n >>>= 0;
	const _ = it(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(Rt.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return Rt.__externref_drop_slice(n, e), t;
}
function _t(n, e) {
	return n >>>= 0, wt().subarray(n / 4, n / 4 + e);
}
function tt(n, e) {
	return n >>>= 0, ut().subarray(n / 1, n / 1 + e);
}
let rt = null;
function it() {
	return (null === rt || !0 === rt.buffer.detached || void 0 === rt.buffer.detached && rt.buffer !== Rt.memory.buffer) && (rt = new DataView(Rt.memory.buffer)), rt;
}
let ot = null, ct = null;
function lt() {
	return null !== ct && 0 !== ct.byteLength || (ct = new Float64Array(Rt.memory.buffer)), ct;
}
function at(n, e) {
	return function(n, e) {
		return St += e, St >= Ct && (kt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), kt.decode(), St = e), kt.decode(ut().subarray(n, n + e));
	}(n >>>= 0, e);
}
let st = null;
function wt() {
	return null !== st && 0 !== st.byteLength || (st = new Uint32Array(Rt.memory.buffer)), st;
}
let gt = null;
function ut() {
	return null !== gt && 0 !== gt.byteLength || (gt = new Uint8Array(Rt.memory.buffer)), gt;
}
function bt(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = J_(_);
		Rt.__wbindgen_exn_store(n);
	}
}
function dt(n) {
	return null == n;
}
function ft(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return wt().set(n, _ / 4), Dt = n.length, _;
}
function mt(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return ut().set(n, _ / 1), Dt = n.length, _;
}
function ht(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return lt().set(n, _ / 8), Dt = n.length, _;
}
function pt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = J_(n[t]);
		it().setUint32(_ + 4 * t, e, !0);
	}
	return Dt = n.length, _;
}
function yt(n, e, _) {
	if (void 0 === _) {
		const _ = At.encode(n), t = e(_.length, 1) >>> 0;
		return ut().subarray(t, t + _.length).set(_), Dt = _.length, t;
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
		o += At.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return Dt = o, r;
}
function vt(n) {
	const e = Rt.__wbindgen_externrefs.get(n);
	return Rt.__externref_table_dealloc(n), e;
}
let kt = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
kt.decode();
const Ct = 2146435072;
let St = 0;
const At = new TextEncoder();
"encodeInto" in At || (At.encodeInto = function(n, e) {
	const _ = At.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let Rt, Dt = 0;
function xt(n, e) {
	return Rt = n.exports, rt = null, ot = null, ct = null, st = null, gt = null, Rt.__wbindgen_start(), Rt;
}
function Mt(n) {
	if (void 0 !== Rt) return Rt;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = Z_();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), xt(new WebAssembly.Instance(n, e));
}
async function Pt(n) {
	if (void 0 !== Rt) return Rt;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-CVEplK3P.wasm", "" + import.meta.url));
	const e = Z_();
	("string" == typeof n || "function" == typeof Request && n instanceof Request || "function" == typeof URL && n instanceof URL) && (n = fetch(n));
	const { instance: _, module: t } = await async function(n, e) {
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
	}(await n, e);
	return xt(_);
}
export { n as Aw5Batch, e as StreamChunkResult, _ as StreamParseResult, t as actiwareIntervalStatistics, r as actiwareSleepIntervals, i as actiwareWakeThreshold, o as actoursVersion, c as aggregateEpochSeries, l as analysisDatesOf, a as analysisWindowBounds, s as analysisWindowSlice, w as analyzePhysicalActivityDay, g as classifyActimetricPreschoolWristRf, u as classifyActimetricPreschoolWristRfLagLead, b as classifyActimetricPreschoolWristRfLagLeadCalibrated, d as clippedUnionHours, f as compareNonwearDetectorMasks, m as computeAnglez5s, h as computeCircadian, p as computeCircadianTyped, y as computeEnmo5s, v as computeMimsUnit, k as computeMimsUnitDataframe, C as computeMimsUnitTimingBreakdown, S as computeMimsUnitValues, A as computeNightDifficulty, R as computeNightDifficultyTyped, D as computeNightSignals, x as computeNightSignalsTyped, M as computeSleepMetrics, P as configureComputeMemoryBudgetV1, I as consensusDisagreementDetail, F as consensusDisagreements, W as convertBedWakeDaysDiary, O as convertScreensRedcapDiary, N as csvBufferAppend, U as csvBufferClear, z as cutpointEpochCompatibility, G as cutpointToneCodes, B as cutpointsRefusal, T as cutpointsValid, Pt as default, V as describeColumns, j as detectDetachFromAccelerationG, E as detectDeviceFormat, L as detectGgirHasptVariant, H as detectHdcza, X as detectHourClockJumpMs, q as detectNonwear, Z as detectNonwearChoi2011, $ as detectNonwearChoi2011Bouts, Y as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, J as detectNonwearChoi2012Bouts, Q as detectNonwearChoi2012Epoch, nn as detectNonwearChoiBouts, en as detectNonwearUnified, _n as detectNonwearUnifiedBatchTyped, tn as dstPlaceholderRuns, rn as effectiveOverrideCutpoints, on as epochAgreement, cn as epochRawData, ln as epochWithBandpass, an as epochsOverlapping, sn as executeHeroRuntime, wn as exportNapAggregate, gn as exportPeriodFigures, un as extractCapsense, bn as foldOntoGrid, dn as foldSampleBlocks, fn as foldSleepWakeVotes, mn as foldUniformOntoGrid, hn as fuseNonwearMasks, pn as generateActiwareRestIntervals, yn as getComputeCapabilitiesV1, vn as ggir5sWallClockMs, kn as ggirAppConfigSummary, Cn as ggirConfigValues, Sn as ggirDayValidFraction, An as ggirDaysIncluded, Rn as ggirDiaryLogShape, Dn as ggirDstPlaceholderCuts, xn as ggirIncludeDayCriterionHours, Mn as ggirIndicesToWallClockMs, Pn as ggirLabelsToStoredMs, In as ggirManualNightClocks, Fn as ggirMilestoneVersion, Wn as ggirNonwearApproach, On as ggirPersonSummaries, Nn as ggirRerunProfiles, Un as ggirSavedNonwearWindows, zn as ggirSleeplogStoredClocks, Gn as ggirSptDurationHours, Bn as ggirSummaryDenominator, Tn as gridOffsetWithin, Vn as identifyGgirRData, jn as implausibilityReasons, Mt as initSync, En as installPanicHook, Ln as interRaterReliability, Hn as irregularInternalDays, Xn as isGeneactivFormat, qn as linearMemoryBytesV1, Zn as lstmSpectralFeatures30s, $n as markerIndexRange, Yn as markerSleepOnsetOffset, Kn as medianGapSeconds, Jn as metricWarnings, Qn as midSleepClockHours, ne as neishabouriCounts, ee as nextDate, _e as nightIntervalOverlap, te as nonwearContributors, re as nonwearInSleepCounts, ie as nonwearSleepOverlap, oe as nonwearWeightRuns, ce as normalizeCutpoints, le as parseActigraphCsv, ae as parseActigraphCsvBuffered, se as parseAw5, we as parseCwa, ge as parseEpochSeries, ue as parseGeneactivBin, be as parseGeneactivCsv, de as parseGeneactivCsvBuffered, fe as parseGt3x, me as participantValidity, he as physicalActivitySeriesGrid, pe as placeMarkers, ye as placeMarkersBatch, ve as placeMarkersTyped, ke as placeNonwearMarkers, Ce as placeNonwearMarkersTyped, Se as prepareCompactPipelineOutcomeV1, Ae as prepareCompactPipelineV1, Re as processGeneactivRaw, De as processGt3xPart1, xe as processGt3xPart1WithEpoch, Me as processRawXyz, Pe as processRawXyzImputed, Ie as processRawXyzImputedWithEpoch, Fe as projectLabelsOntoGrid, We as rasterizePeriods, Oe as readGgirMeta, Ne as readGgirReportCsv, Ue as recommended_chunk_size_mb, ze as reduceF64V1, Ge as rerunGgirResults, Be as resolveTimezone, Te as restoredDstRuns, Ve as reviewGgirResults, je as reviewNonwearFile, Ee as reviewNonwearTotals, Le as roundCountStorage, He as runCompactPipelineOutcomeV1, Xe as runCompactPipelineV1, qe as runFullPipelineOutcomeV1, Ze as runFullPipelineV1, $e as runGgirDeclaredEpochsV1, Ye as runGgirPart3, Ke as runMilestone, Je as scoreAllDays, Qe as scoreColeKripke, n_ as scoreConsensus, e_ as scoreConsensusMajority, __ as scoreConsensusTyped, t_ as scoreEpochs, r_ as scoreEpochsTyped, i_ as scoreGgirHasib, o_ as scoreGgirHasibVariant, c_ as scoreGgirSib, l_ as scoreSadeh, a_ as screensRestIntervals, s_ as settleManualNonwearNights, w_ as sha256StreamFeed, g_ as sha256StreamFinish, u_ as sha256StreamStart, b_ as shiftDate, d_ as sleepRegularityIndex, f_ as sleepWakeScores, m_ as sourceLabelsWallClockMs, h_ as spanFiniteMean, p_ as spliceDstPlaceholders, y_ as statesInPeriods, v_ as storedToGgirLabelsMs, k_ as streamParseFeed, C_ as streamParseFinish, S_ as streamParseFinishChunk, A_ as streamParseFinishChunkWithProgress, R_ as streamParseStart, D_ as streamParseStartData, x_ as streamParseStartWithEpoch, M_ as summarizeActimetricPreschoolWristRfClasses, P_ as summarizeExportGroups, I_ as summarizePhysicalActivityDays, F_ as summarizePhysicalActivityTrace, W_ as thresholdProbabilities, O_ as timeSemantics, N_ as timestampDiscontinuities, U_ as uniformTimestamps, z_ as utcDatesInSpan, G_ as utcDayIndex, B_ as validStateFraction, T_ as validWearDays, V_ as wallClockDstPlaceholders, j_ as wallClockLabels, E_ as wallMaskOntoGgirGrid, L_ as wearSiteHasptRouting, H_ as weekendDates, X_ as windowCoverage, q_ as zeroCrossingCounts };
