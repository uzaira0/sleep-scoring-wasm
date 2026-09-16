var n = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, Ln.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Ln.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		ge.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = ge.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = ge.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = ge.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = ge.streamchunkresult_axisX(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ge.streamchunkresult_axisY(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ge.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ge.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ge.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ne(n[0], n[1]).slice(), ge.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = ge.streamchunkresult_counts(this.__wbg_ptr);
		var e = $n(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = ge.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = $n(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = ge.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = ge.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return ge.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = ge.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = ge.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== ge.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = ge.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ne(n[0], n[1]).slice(), ge.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = ge.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = ge.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = ge.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== ge.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ge.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return ge.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ge.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = ge.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = $n(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = ge.streamchunkresult_temperature(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ge.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = ge.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ge.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = ge.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = ge.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = ge.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, Tn.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Tn.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		ge.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = ge.streamparseresult_axisX(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ge.streamparseresult_axisY(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ge.streamparseresult_axisZ(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ge.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ge.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ne(n[0], n[1]).slice(), ge.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return ge.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== ge.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ge.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ge.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = ge.streamparseresult_temperature(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ge.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ge.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = Hn(n[0], n[1]).slice();
		return ge.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t() {
	let n, e;
	try {
		const t = ge.actoursVersion();
		return n = t[0], e = t[1], ne(t[0], t[1]);
	} finally {
		ge.__wbindgen_free(n, e, 1);
	}
}
function _(n) {
	const e = ge.aggregateEpochSeries(n);
	if (e[2]) throw ae(e[1]);
	return ae(e[0]);
}
function r(n) {
	let e, t;
	try {
		const i = se(n, ge.__wbindgen_malloc, ge.__wbindgen_realloc), o = be, c = ge.analyzePhysicalActivityDay(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ae(c[2]);
		return e = _, t = r, ne(_, r);
	} finally {
		ge.__wbindgen_free(e, t, 1);
	}
}
function i(n, e, t, _) {
	const r = ce(n, ge.__wbindgen_malloc), i = be, o = ce(e, ge.__wbindgen_malloc), c = be, s = ce(t, ge.__wbindgen_malloc), a = be, l = ge.classifyActimetricPreschoolWristRf(r, i, o, c, s, a, _);
	if (l[3]) throw ae(l[2]);
	var u = Yn(l[0], l[1]).slice();
	return ge.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function o(n, e, t, _) {
	const r = ce(n, ge.__wbindgen_malloc), i = be, o = ce(e, ge.__wbindgen_malloc), c = be, s = ce(t, ge.__wbindgen_malloc), a = be, l = ge.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, s, a, _);
	if (l[3]) throw ae(l[2]);
	var u = Yn(l[0], l[1]).slice();
	return ge.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function c(n, e, t, _) {
	const r = ce(n, ge.__wbindgen_malloc), i = be, o = ce(e, ge.__wbindgen_malloc), c = be, s = ce(t, ge.__wbindgen_malloc), a = be, l = ge.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, s, a, _);
	if (l[3]) throw ae(l[2]);
	var u = Yn(l[0], l[1]).slice();
	return ge.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function s(n, e, t, _) {
	const r = ce(n, ge.__wbindgen_malloc), i = be, o = ce(e, ge.__wbindgen_malloc), c = be, s = ce(t, ge.__wbindgen_malloc), a = be, l = ge.computeAnglez5s(r, i, o, c, s, a, _);
	var u = Hn(l[0], l[1]).slice();
	return ge.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function a(n) {
	let e, t;
	try {
		const i = se(n, ge.__wbindgen_malloc, ge.__wbindgen_realloc), o = be, c = ge.computeCircadian(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ae(c[2]);
		return e = _, t = r, ne(_, r);
	} finally {
		ge.__wbindgen_free(e, t, 1);
	}
}
function l(n, e, t, _) {
	const r = ce(n, ge.__wbindgen_malloc), i = be, o = ce(e, ge.__wbindgen_malloc), c = be, s = ce(t, ge.__wbindgen_malloc), a = be, l = ge.computeEnmo5s(r, i, o, c, s, a, _);
	var u = Hn(l[0], l[1]).slice();
	return ge.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function u(n, e, t, _, r) {
	const i = ce(n, ge.__wbindgen_malloc), o = be, c = ce(e, ge.__wbindgen_malloc), s = be, a = ce(t, ge.__wbindgen_malloc), l = be, u = ge.computeMimsUnit(i, o, c, s, a, l, _, r);
	if (u[2]) throw ae(u[1]);
	return ae(u[0]);
}
function f(n, e, t, _, r) {
	const i = ce(n, ge.__wbindgen_malloc), o = be, c = ce(e, ge.__wbindgen_malloc), s = be, a = ce(t, ge.__wbindgen_malloc), l = be, u = ce(_, ge.__wbindgen_malloc), f = be, w = ge.computeMimsUnitDataframe(i, o, c, s, a, l, u, f, r);
	if (w[2]) throw ae(w[1]);
	return ae(w[0]);
}
function w(n, e, t, _, r) {
	const i = ce(n, ge.__wbindgen_malloc), o = be, c = ce(e, ge.__wbindgen_malloc), s = be, a = ce(t, ge.__wbindgen_malloc), l = be, u = ge.computeMimsUnitTimingBreakdown(i, o, c, s, a, l, _, r);
	if (u[2]) throw ae(u[1]);
	return ae(u[0]);
}
function g(n, e, t, _, r) {
	const i = ce(n, ge.__wbindgen_malloc), o = be, c = ce(e, ge.__wbindgen_malloc), s = be, a = ce(t, ge.__wbindgen_malloc), l = be, u = ge.computeMimsUnitValues(i, o, c, s, a, l, _, r);
	if (u[3]) throw ae(u[2]);
	var f = Hn(u[0], u[1]).slice();
	return ge.__wbindgen_free(u[0], 8 * u[1], 8), f;
}
function b(n) {
	let e, t;
	try {
		const i = se(n, ge.__wbindgen_malloc, ge.__wbindgen_realloc), o = be, c = ge.computeNightDifficulty(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ae(c[2]);
		return e = _, t = r, ne(_, r);
	} finally {
		ge.__wbindgen_free(e, t, 1);
	}
}
function d(n) {
	let e, t;
	try {
		const i = se(n, ge.__wbindgen_malloc, ge.__wbindgen_realloc), o = be, c = ge.computeNightSignals(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ae(c[2]);
		return e = _, t = r, ne(_, r);
	} finally {
		ge.__wbindgen_free(e, t, 1);
	}
}
function m(n, e, t) {
	const _ = oe(n, ge.__wbindgen_malloc), r = be, i = ce(e, ge.__wbindgen_malloc), o = be, c = ge.computeSleepMetrics(_, r, i, o, t);
	if (c[2]) throw ae(c[1]);
	return ae(c[0]);
}
function h(n) {
	const e = ge.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw ae(e[1]);
	return ae(e[0]);
}
function p(n) {
	const e = oe(n, ge.__wbindgen_malloc), t = be;
	ge.csvBufferAppend(e, t);
}
function y(n) {
	ge.csvBufferClear(n);
}
function v(n, e) {
	const t = ce(n, ge.__wbindgen_malloc), _ = be, r = ce(e, ge.__wbindgen_malloc), i = be, o = ge.detectDetachFromAccelerationG(t, _, r, i);
	if (o[3]) throw ae(o[2]);
	var c = Yn(o[0], o[1]).slice();
	return ge.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function k(n, e) {
	let t, _;
	try {
		const r = oe(n, ge.__wbindgen_malloc), i = be, o = se(e, ge.__wbindgen_malloc, ge.__wbindgen_realloc), c = be, s = ge.detectDeviceFormat(r, i, o, c);
		return t = s[0], _ = s[1], ne(s[0], s[1]);
	} finally {
		ge.__wbindgen_free(t, _, 1);
	}
}
function A(n) {
	const e = ge.detectGgirHasptVariant(n);
	if (e[2]) throw ae(e[1]);
	return ae(e[0]);
}
function x(n, e, t, _) {
	const r = ce(n, ge.__wbindgen_malloc), i = be;
	var o = ie(e) ? 0 : se(e, ge.__wbindgen_malloc, ge.__wbindgen_realloc), c = be, s = ie(t) ? 0 : ce(t, ge.__wbindgen_malloc), a = be, l = ie(_) ? 0 : ce(_, ge.__wbindgen_malloc), u = be;
	return ge.detectHdcza(r, i, o, c, s, a, l, u);
}
function R(n) {
	const e = ce(n, ge.__wbindgen_malloc), t = be, _ = ge.detectNonwear(e, t);
	var r = Yn(_[0], _[1]).slice();
	return ge.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function C(n) {
	const e = ce(n, ge.__wbindgen_malloc), t = be, _ = ge.detectNonwearChoi2011(e, t);
	var r = Yn(_[0], _[1]).slice();
	return ge.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function S(n) {
	const e = ce(n, ge.__wbindgen_malloc), t = be, _ = ge.detectNonwearChoi2011Bouts(e, t);
	if (_[2]) throw ae(_[1]);
	return ae(_[0]);
}
function F(n, e) {
	const t = ce(n, ge.__wbindgen_malloc), _ = be, r = ge.detectNonwearChoi2011Epoch(t, _, e);
	if (r[3]) throw ae(r[2]);
	var i = Yn(r[0], r[1]).slice();
	return ge.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function P(n) {
	const e = ce(n, ge.__wbindgen_malloc), t = be, _ = ge.detectNonwearChoi2012(e, t);
	var r = Yn(_[0], _[1]).slice();
	return ge.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function M(n) {
	const e = ce(n, ge.__wbindgen_malloc), t = be, _ = ge.detectNonwearChoi2012Bouts(e, t);
	if (_[2]) throw ae(_[1]);
	return ae(_[0]);
}
function U(n) {
	const e = ce(n, ge.__wbindgen_malloc), t = be, _ = ge.detectNonwearChoiBouts(e, t);
	if (_[2]) throw ae(_[1]);
	return ae(_[0]);
}
function B(n) {
	let e, t;
	try {
		const i = se(n, ge.__wbindgen_malloc, ge.__wbindgen_realloc), o = be, c = ge.detectNonwearUnified(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ae(c[2]);
		return e = _, t = r, ne(_, r);
	} finally {
		ge.__wbindgen_free(e, t, 1);
	}
}
function I(n, e, t, _, r, i, o) {
	const c = se(n, ge.__wbindgen_malloc, ge.__wbindgen_realloc), s = be, a = se(e, ge.__wbindgen_malloc, ge.__wbindgen_realloc), l = be, u = ce(t, ge.__wbindgen_malloc), f = be, w = ce(_, ge.__wbindgen_malloc), g = be, b = ce(r, ge.__wbindgen_malloc), d = be, m = ge.detectNonwearUnifiedBatchTyped(c, s, a, l, u, f, w, g, b, d, i, o);
	if (m[2]) throw ae(m[1]);
	return ae(m[0]);
}
function z(n, e, t, _, r) {
	const i = ce(n, ge.__wbindgen_malloc), o = be, c = ce(e, ge.__wbindgen_malloc), s = be, a = ce(t, ge.__wbindgen_malloc), l = be, u = ce(_, ge.__wbindgen_malloc), f = be, w = ge.epochRawData(i, o, c, s, a, l, u, f, r);
	if (w[2]) throw ae(w[1]);
	return ae(w[0]);
}
function W(n, e, t) {
	const _ = ce(n, ge.__wbindgen_malloc), r = be, i = ce(e, ge.__wbindgen_malloc), o = be, c = ge.epochWithBandpass(_, r, i, o, t);
	if (c[2]) throw ae(c[1]);
	return ae(c[0]);
}
function D(n, e) {
	let t, _;
	try {
		const o = se(n, ge.__wbindgen_malloc, ge.__wbindgen_realloc), c = be, s = se(e, ge.__wbindgen_malloc, ge.__wbindgen_realloc), a = be, l = ge.executeHeroRuntime(o, c, s, a);
		var r = l[0], i = l[1];
		if (l[3]) throw r = 0, i = 0, ae(l[2]);
		return t = r, _ = i, ne(r, i);
	} finally {
		ge.__wbindgen_free(t, _, 1);
	}
}
function O(n) {
	const e = oe(n, ge.__wbindgen_malloc), t = be, _ = ge.extractCapsense(e, t);
	if (_[2]) throw ae(_[1]);
	return ae(_[0]);
}
function j() {
	const n = ge.getComputeCapabilitiesV1();
	if (n[2]) throw ae(n[1]);
	return ae(n[0]);
}
function E() {
	ge.installPanicHook();
}
function G(n) {
	const e = oe(n, ge.__wbindgen_malloc), t = be;
	return 0 !== ge.isGeneactivFormat(e, t);
}
function N(n, e, t, _) {
	const r = ce(n, ge.__wbindgen_malloc), i = be, o = ce(e, ge.__wbindgen_malloc), c = be, s = ce(t, ge.__wbindgen_malloc), a = be, l = ge.lstmSpectralFeatures30s(r, i, o, c, s, a, _);
	if (l[2]) throw ae(l[1]);
	return ae(l[0]);
}
function V(n, e, t, _, r) {
	const i = ce(n, ge.__wbindgen_malloc), o = be, c = ce(e, ge.__wbindgen_malloc), s = be, a = ce(t, ge.__wbindgen_malloc), l = be, u = ge.neishabouriCounts(i, o, c, s, a, l, _, r);
	if (u[2]) throw ae(u[1]);
	return ae(u[0]);
}
function L(n, e) {
	const t = oe(n, ge.__wbindgen_malloc), _ = be, r = ge.parseActigraphCsv(t, _, e);
	if (r[2]) throw ae(r[1]);
	return ae(r[0]);
}
function T(n) {
	const e = ge.parseActigraphCsvBuffered(n);
	if (e[2]) throw ae(e[1]);
	return ae(e[0]);
}
function X(n) {
	const e = oe(n, ge.__wbindgen_malloc), t = be, _ = ge.parseCwa(e, t);
	if (_[2]) throw ae(_[1]);
	return ae(_[0]);
}
function q(n, e) {
	const t = oe(n, ge.__wbindgen_malloc), _ = be, r = se(e, ge.__wbindgen_malloc, ge.__wbindgen_realloc), i = be, o = ge.parseEpochSeries(t, _, r, i);
	if (o[2]) throw ae(o[1]);
	return ae(o[0]);
}
function H(n) {
	const e = oe(n, ge.__wbindgen_malloc), t = be, _ = ge.parseGeneactivBin(e, t);
	if (_[2]) throw ae(_[1]);
	return ae(_[0]);
}
function $(n) {
	const e = oe(n, ge.__wbindgen_malloc), t = be, _ = ge.parseGeneactivCsv(e, t);
	if (_[2]) throw ae(_[1]);
	return ae(_[0]);
}
function Y() {
	const n = ge.parseGeneactivCsvBuffered();
	if (n[2]) throw ae(n[1]);
	return ae(n[0]);
}
function Z(n) {
	const e = oe(n, ge.__wbindgen_malloc), t = be, _ = ge.parseGt3x(e, t);
	if (_[2]) throw ae(_[1]);
	return ae(_[0]);
}
function K(n) {
	let e, t;
	try {
		const i = se(n, ge.__wbindgen_malloc, ge.__wbindgen_realloc), o = be, c = ge.placeMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ae(c[2]);
		return e = _, t = r, ne(_, r);
	} finally {
		ge.__wbindgen_free(e, t, 1);
	}
}
function J(n, e, t, _, r, i) {
	const o = se(n, ge.__wbindgen_malloc, ge.__wbindgen_realloc), c = be, s = ce(e, ge.__wbindgen_malloc), a = be, l = ce(t, ge.__wbindgen_malloc), u = be, f = oe(_, ge.__wbindgen_malloc), w = be, g = oe(r, ge.__wbindgen_malloc), b = be, d = se(i, ge.__wbindgen_malloc, ge.__wbindgen_realloc), m = be, h = ge.placeMarkersBatch(o, c, s, a, l, u, f, w, g, b, d, m);
	if (h[2]) throw ae(h[1]);
	return ae(h[0]);
}
function Q(n) {
	let e, t;
	try {
		const i = se(n, ge.__wbindgen_malloc, ge.__wbindgen_realloc), o = be, c = ge.placeNonwearMarkers(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ae(c[2]);
		return e = _, t = r, ne(_, r);
	} finally {
		ge.__wbindgen_free(e, t, 1);
	}
}
function nn(n) {
	const e = ge.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw ae(e[1]);
	return ae(e[0]);
}
function en(n) {
	const e = ge.prepareCompactPipelineV1(n);
	if (e[2]) throw ae(e[1]);
	return ae(e[0]);
}
function tn(n, e, t, _, r, i, o) {
	const c = ce(n, ge.__wbindgen_malloc), s = be, a = ce(e, ge.__wbindgen_malloc), l = be, u = ce(t, ge.__wbindgen_malloc), f = be, w = ce(_, ge.__wbindgen_malloc), g = be;
	var b = ie(o) ? 0 : se(o, ge.__wbindgen_malloc, ge.__wbindgen_realloc), d = be;
	const m = ge.processGeneactivRaw(c, s, a, l, u, f, w, g, r, i, b, d);
	if (m[2]) throw ae(m[1]);
	return ae(m[0]);
}
function _n(n) {
	const e = oe(n, ge.__wbindgen_malloc), t = be, _ = ge.processGt3xFull(e, t);
	if (_[2]) throw ae(_[1]);
	return ae(_[0]);
}
function rn(n, e) {
	const t = oe(n, ge.__wbindgen_malloc), _ = be, r = ge.processGt3xFullWithEpoch(t, _, e);
	if (r[2]) throw ae(r[1]);
	return ae(r[0]);
}
function on(n) {
	const e = oe(n, ge.__wbindgen_malloc), t = be, _ = ge.processGt3xPart1(e, t);
	if (_[2]) throw ae(_[1]);
	return ae(_[0]);
}
function cn(n, e) {
	const t = oe(n, ge.__wbindgen_malloc), _ = be, r = ge.processGt3xPart1WithEpoch(t, _, e);
	if (r[2]) throw ae(r[1]);
	return ae(r[0]);
}
function sn(n, e, t, _, r, i) {
	const o = ce(n, ge.__wbindgen_malloc), c = be, s = ce(e, ge.__wbindgen_malloc), a = be, l = ce(t, ge.__wbindgen_malloc), u = be;
	var f = ie(i) ? 0 : se(i, ge.__wbindgen_malloc, ge.__wbindgen_realloc), w = be;
	const g = ge.processRawXyz(o, c, s, a, l, u, _, r, f, w);
	if (g[2]) throw ae(g[1]);
	return ae(g[0]);
}
function an(n, e, t, _, r, i) {
	const o = ce(n, ge.__wbindgen_malloc), c = be, s = ce(e, ge.__wbindgen_malloc), a = be, l = ce(t, ge.__wbindgen_malloc), u = be, f = ce(_, ge.__wbindgen_malloc), w = be;
	var g = ie(i) ? 0 : se(i, ge.__wbindgen_malloc, ge.__wbindgen_realloc), b = be;
	const d = ge.processRawXyzImputed(o, c, s, a, l, u, f, w, r, g, b);
	if (d[2]) throw ae(d[1]);
	return ae(d[0]);
}
function ln(n, e, t, _, r, i, o) {
	const c = ce(n, ge.__wbindgen_malloc), s = be, a = ce(e, ge.__wbindgen_malloc), l = be, u = ce(t, ge.__wbindgen_malloc), f = be, w = ce(_, ge.__wbindgen_malloc), g = be;
	var b = ie(i) ? 0 : se(i, ge.__wbindgen_malloc, ge.__wbindgen_realloc), d = be;
	const m = ge.processRawXyzImputedWithEpoch(c, s, a, l, u, f, w, g, r, b, d, o);
	if (m[2]) throw ae(m[1]);
	return ae(m[0]);
}
function un(n) {
	const e = oe(n, ge.__wbindgen_malloc), t = be, _ = ge.readGgirMeta(e, t);
	if (_[2]) throw ae(_[1]);
	return ae(_[0]);
}
function fn() {
	return ge.recommended_chunk_size_mb() >>> 0;
}
function wn(n, e) {
	const t = ce(n, ge.__wbindgen_malloc), _ = be, r = se(e, ge.__wbindgen_malloc, ge.__wbindgen_realloc), i = be, o = ge.reduceF64V1(t, _, r, i);
	if (o[2]) throw ae(o[1]);
	return o[0];
}
function gn(n) {
	const e = ge.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw ae(e[1]);
	return ae(e[0]);
}
function bn(n) {
	const e = ge.runCompactPipelineV1(n);
	if (e[2]) throw ae(e[1]);
	return ae(e[0]);
}
function dn(n, e) {
	const t = ge.runFullPipeline(n, e);
	if (t[2]) throw ae(t[1]);
	return ae(t[0]);
}
function mn(n) {
	const e = ge.runFullPipelineOutcomeV1(n);
	if (e[2]) throw ae(e[1]);
	return ae(e[0]);
}
function hn(n) {
	const e = ge.runFullPipelineV1(n);
	if (e[2]) throw ae(e[1]);
	return ae(e[0]);
}
function pn(n, e) {
	const t = ge.runGgirFromEpoch(n, e);
	if (t[2]) throw ae(t[1]);
	return ae(t[0]);
}
function yn(n) {
	const e = oe(n, ge.__wbindgen_malloc), t = be, _ = ge.runMilestone(e, t);
	if (_[2]) throw ae(_[1]);
	return ae(_[0]);
}
function vn(n) {
	const e = ge.scoreAllDays(n);
	if (e[2]) throw ae(e[1]);
	return ae(e[0]);
}
function kn(n, e) {
	const t = ce(n, ge.__wbindgen_malloc), _ = be, r = ge.scoreColeKripke(t, _, e);
	var i = Yn(r[0], r[1]).slice();
	return ge.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function An(n) {
	let e, t;
	try {
		const i = se(n, ge.__wbindgen_malloc, ge.__wbindgen_realloc), o = be, c = ge.scoreConsensus(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ae(c[2]);
		return e = _, t = r, ne(_, r);
	} finally {
		ge.__wbindgen_free(e, t, 1);
	}
}
function xn(n) {
	const e = ge.scoreConsensusMajority(n);
	if (e[2]) throw ae(e[1]);
	return ae(e[0]);
}
function Rn(n) {
	let e, t;
	try {
		const i = se(n, ge.__wbindgen_malloc, ge.__wbindgen_realloc), o = be, c = ge.scoreEpochs(i, o);
		var _ = c[0], r = c[1];
		if (c[3]) throw _ = 0, r = 0, ae(c[2]);
		return e = _, t = r, ne(_, r);
	} finally {
		ge.__wbindgen_free(e, t, 1);
	}
}
function Cn(n, e, t, _, r, i) {
	const o = se(n, ge.__wbindgen_malloc, ge.__wbindgen_realloc), c = be, s = ce(e, ge.__wbindgen_malloc), a = be, l = ce(t, ge.__wbindgen_malloc), u = be, f = ce(_, ge.__wbindgen_malloc), w = be, g = ge.scoreEpochsTyped(o, c, s, a, l, u, f, w, r, i);
	if (g[2]) throw ae(g[1]);
	return ae(g[0]);
}
function Sn(n) {
	const e = ce(n, ge.__wbindgen_malloc), t = be, _ = ge.scoreGgirHasib(e, t);
	var r = Yn(_[0], _[1]).slice();
	return ge.__wbindgen_free(_[0], 1 * _[1], 1), r;
}
function Fn(n) {
	const e = ge.scoreGgirHasibVariant(n);
	if (e[2]) throw ae(e[1]);
	return ae(e[0]);
}
function Pn(n, e, t) {
	const _ = ce(n, ge.__wbindgen_malloc), r = be, i = ce(e, ge.__wbindgen_malloc), o = be, c = ge.scoreGgirSib(_, r, i, o, t);
	if (c[2]) throw ae(c[1]);
	return ae(c[0]);
}
function Mn(n, e) {
	const t = ce(n, ge.__wbindgen_malloc), _ = be, r = ge.scoreSadeh(t, _, e);
	var i = Yn(r[0], r[1]).slice();
	return ge.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Un(n) {
	const e = oe(n, ge.__wbindgen_malloc), t = be, _ = ge.sha256StreamFeed(e, t);
	if (_[1]) throw ae(_[0]);
}
function Bn() {
	let n, e;
	try {
		const r = ge.sha256StreamFinish();
		var t = r[0], _ = r[1];
		if (r[3]) throw t = 0, _ = 0, ae(r[2]);
		return n = t, e = _, ne(t, _);
	} finally {
		ge.__wbindgen_free(n, e, 1);
	}
}
function In() {
	ge.sha256StreamStart();
}
function zn(n) {
	const e = oe(n, ge.__wbindgen_malloc), t = be, _ = ge.streamParseFeed(e, t);
	if (_[2]) throw ae(_[1]);
	return _[0] >>> 0;
}
function Wn() {
	const n = ge.streamParseFinish();
	if (n[2]) throw ae(n[1]);
	return e.__wrap(n[0]);
}
function Dn() {
	const e = ge.streamParseFinishChunk();
	if (e[2]) throw ae(e[1]);
	return n.__wrap(e[0]);
}
function On(n, e) {
	const t = ge.streamParseStart(n, e);
	if (t[1]) throw ae(t[0]);
}
function jn(n, e) {
	const t = ge.streamParseStartData(n, e);
	if (t[1]) throw ae(t[0]);
}
function En(n, e, t) {
	const _ = ge.streamParseStartWithEpoch(n, e, t);
	if (_[1]) throw ae(_[0]);
}
function Gn(n, e) {
	const t = oe(n, ge.__wbindgen_malloc), _ = be, r = ge.summarizeActimetricPreschoolWristRfClasses(t, _, e);
	if (r[2]) throw ae(r[1]);
	return ae(r[0]);
}
function Nn(n, e, t, _, r) {
	const i = ce(n, ge.__wbindgen_malloc), o = be, c = ce(e, ge.__wbindgen_malloc), s = be, a = ce(t, ge.__wbindgen_malloc), l = be, u = ge.zeroCrossingCounts(i, o, c, s, a, l, _, r);
	if (u[2]) throw ae(u[1]);
	return ae(u[0]);
}
function Vn() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(ne(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = se(String(e), ge.__wbindgen_malloc, ge.__wbindgen_realloc), _ = be;
				Kn().setInt32(n + 4, _, !0), Kn().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				Kn().setBigInt64(n + 8, ie(t) ? BigInt(0) : t, !0), Kn().setInt32(n + 0, !ie(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return ie(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = se(qn(e), ge.__wbindgen_malloc, ge.__wbindgen_realloc), _ = be;
				Kn().setInt32(n + 4, _, !0), Kn().setInt32(n + 0, t, !0);
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
				Kn().setFloat64(n + 8, ie(t) ? 0 : t, !0), Kn().setInt32(n + 0, !ie(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var _ = ie(t) ? 0 : se(t, ge.__wbindgen_malloc, ge.__wbindgen_realloc), r = be;
				Kn().setInt32(n + 4, r, !0), Kn().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(ne(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return re(function(n, e) {
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
					t = n, _ = e, console.error(ne(n, e));
				} finally {
					ge.__wbindgen_free(t, _, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return re(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return re(function(n, e) {
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
				return new Float64Array(Hn(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(Yn(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return re(function(n) {
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
				return re(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(Yn(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return re(function(n, e, t) {
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
				const t = se(e.stack, ge.__wbindgen_malloc, ge.__wbindgen_realloc), _ = be;
				Kn().setInt32(n + 4, _, !0), Kn().setInt32(n + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return ie(n) ? 0 : Xn(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return ie(n) ? 0 : Xn(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return ie(n) ? 0 : Xn(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return ie(n) ? 0 : Xn(n);
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
				return Yn(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return ne(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = ge.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
const Ln = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ge.__wbg_streamchunkresult_free(n >>> 0, 1)), Tn = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ge.__wbg_streamparseresult_free(n >>> 0, 1));
function Xn(n) {
	const e = ge.__externref_table_alloc();
	return ge.__wbindgen_externrefs.set(e, n), e;
}
function qn(n) {
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
		e > 0 && (t += qn(n[0]));
		for (let _ = 1; _ < e; _++) t += ", " + qn(n[_]);
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
function Hn(n, e) {
	return n >>>= 0, Qn().subarray(n / 8, n / 8 + e);
}
function $n(n, e) {
	return n >>>= 0, (null !== ee && 0 !== ee.byteLength || (ee = new Uint32Array(ge.memory.buffer)), ee).subarray(n / 4, n / 4 + e);
}
function Yn(n, e) {
	return n >>>= 0, _e().subarray(n / 1, n / 1 + e);
}
let Zn = null;
function Kn() {
	return (null === Zn || !0 === Zn.buffer.detached || void 0 === Zn.buffer.detached && Zn.buffer !== ge.memory.buffer) && (Zn = new DataView(ge.memory.buffer)), Zn;
}
let Jn = null;
function Qn() {
	return null !== Jn && 0 !== Jn.byteLength || (Jn = new Float64Array(ge.memory.buffer)), Jn;
}
function ne(n, e) {
	return function(n, e) {
		return fe += e, fe >= ue && (le = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), le.decode(), fe = e), le.decode(_e().subarray(n, n + e));
	}(n >>>= 0, e);
}
let ee = null, te = null;
function _e() {
	return null !== te && 0 !== te.byteLength || (te = new Uint8Array(ge.memory.buffer)), te;
}
function re(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = Xn(t);
		ge.__wbindgen_exn_store(n);
	}
}
function ie(n) {
	return null == n;
}
function oe(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return _e().set(n, t / 1), be = n.length, t;
}
function ce(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return Qn().set(n, t / 8), be = n.length, t;
}
function se(n, e, t) {
	if (void 0 === t) {
		const t = we.encode(n), _ = e(t.length, 1) >>> 0;
		return _e().subarray(_, _ + t.length).set(t), be = t.length, _;
	}
	let _ = n.length, r = e(_, 1) >>> 0;
	const i = _e();
	let o = 0;
	for (; o < _; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== _) {
		0 !== o && (n = n.slice(o)), r = t(r, _, _ = o + 3 * n.length, 1) >>> 0;
		const e = _e().subarray(r + o, r + _);
		o += we.encodeInto(n, e).written, r = t(r, _, o, 1) >>> 0;
	}
	return be = o, r;
}
function ae(n) {
	const e = ge.__wbindgen_externrefs.get(n);
	return ge.__externref_table_dealloc(n), e;
}
let le = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
le.decode();
const ue = 2146435072;
let fe = 0;
const we = new TextEncoder();
"encodeInto" in we || (we.encodeInto = function(n, e) {
	const t = we.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let ge, be = 0;
function de(n, e) {
	return ge = n.exports, Zn = null, Jn = null, ee = null, te = null, ge.__wbindgen_start(), ge;
}
function me(n) {
	if (void 0 !== ge) return ge;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = Vn();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), de(new WebAssembly.Instance(n, e));
}
async function he(n) {
	if (void 0 !== ge) return ge;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-BBlhctE3.wasm", "" + import.meta.url));
	const e = Vn();
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
	return de(t);
}
export { n as StreamChunkResult, e as StreamParseResult, t as actoursVersion, _ as aggregateEpochSeries, r as analyzePhysicalActivityDay, i as classifyActimetricPreschoolWristRf, o as classifyActimetricPreschoolWristRfLagLead, c as classifyActimetricPreschoolWristRfLagLeadCalibrated, s as computeAnglez5s, a as computeCircadian, l as computeEnmo5s, u as computeMimsUnit, f as computeMimsUnitDataframe, w as computeMimsUnitTimingBreakdown, g as computeMimsUnitValues, b as computeNightDifficulty, d as computeNightSignals, m as computeSleepMetrics, h as configureComputeMemoryBudgetV1, p as csvBufferAppend, y as csvBufferClear, he as default, v as detectDetachFromAccelerationG, k as detectDeviceFormat, A as detectGgirHasptVariant, x as detectHdcza, R as detectNonwear, C as detectNonwearChoi2011, S as detectNonwearChoi2011Bouts, F as detectNonwearChoi2011Epoch, P as detectNonwearChoi2012, M as detectNonwearChoi2012Bouts, U as detectNonwearChoiBouts, B as detectNonwearUnified, I as detectNonwearUnifiedBatchTyped, z as epochRawData, W as epochWithBandpass, D as executeHeroRuntime, O as extractCapsense, j as getComputeCapabilitiesV1, me as initSync, E as installPanicHook, G as isGeneactivFormat, N as lstmSpectralFeatures30s, V as neishabouriCounts, L as parseActigraphCsv, T as parseActigraphCsvBuffered, X as parseCwa, q as parseEpochSeries, H as parseGeneactivBin, $ as parseGeneactivCsv, Y as parseGeneactivCsvBuffered, Z as parseGt3x, K as placeMarkers, J as placeMarkersBatch, Q as placeNonwearMarkers, nn as prepareCompactPipelineOutcomeV1, en as prepareCompactPipelineV1, tn as processGeneactivRaw, _n as processGt3xFull, rn as processGt3xFullWithEpoch, on as processGt3xPart1, cn as processGt3xPart1WithEpoch, sn as processRawXyz, an as processRawXyzImputed, ln as processRawXyzImputedWithEpoch, un as readGgirMeta, fn as recommended_chunk_size_mb, wn as reduceF64V1, gn as runCompactPipelineOutcomeV1, bn as runCompactPipelineV1, dn as runFullPipeline, mn as runFullPipelineOutcomeV1, hn as runFullPipelineV1, pn as runGgirFromEpoch, yn as runMilestone, vn as scoreAllDays, kn as scoreColeKripke, An as scoreConsensus, xn as scoreConsensusMajority, Rn as scoreEpochs, Cn as scoreEpochsTyped, Sn as scoreGgirHasib, Fn as scoreGgirHasibVariant, Pn as scoreGgirSib, Mn as scoreSadeh, Un as sha256StreamFeed, Bn as sha256StreamFinish, In as sha256StreamStart, zn as streamParseFeed, Wn as streamParseFinish, Dn as streamParseFinishChunk, On as streamParseStart, jn as streamParseStartData, En as streamParseStartWithEpoch, Gn as summarizeActimetricPreschoolWristRfClasses, Nn as zeroCrossingCounts };
