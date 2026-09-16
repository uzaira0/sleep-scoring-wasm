var n = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, Nn.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Nn.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		fe.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = fe.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = fe.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = fe.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = fe.streamchunkresult_axisX(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = fe.streamchunkresult_axisY(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = fe.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== fe.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = fe.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Jn(n[0], n[1]).slice(), fe.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = fe.streamchunkresult_counts(this.__wbg_ptr);
		var e = Tn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = fe.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = Tn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = fe.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = fe.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return fe.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = fe.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = fe.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== fe.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = fe.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Jn(n[0], n[1]).slice(), fe.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = fe.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = fe.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = fe.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== fe.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return fe.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return fe.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return fe.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = fe.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = Tn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = fe.streamchunkresult_temperature(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = fe.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = fe.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = fe.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = fe.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = fe.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = fe.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, Vn.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Vn.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		fe.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = fe.streamparseresult_axisX(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = fe.streamparseresult_axisY(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = fe.streamparseresult_axisZ(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== fe.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = fe.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Jn(n[0], n[1]).slice(), fe.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return fe.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== fe.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return fe.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return fe.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = fe.streamparseresult_temperature(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = fe.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = fe.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return fe.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t() {
	let n, e;
	try {
		const t = fe.actoursVersion();
		return n = t[0], e = t[1], Jn(t[0], t[1]);
	} finally {
		fe.__wbindgen_free(n, e, 1);
	}
}
function r(n) {
	const e = fe.aggregateEpochSeries(n);
	if (e[2]) throw ce(e[1]);
	return ce(e[0]);
}
function _(n) {
	let e, t;
	try {
		const i = oe(n, fe.__wbindgen_malloc, fe.__wbindgen_realloc), o = we, c = fe.analyzePhysicalActivityDay(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, ce(c[2]);
		return e = r, t = _, Jn(r, _);
	} finally {
		fe.__wbindgen_free(e, t, 1);
	}
}
function i(n, e, t, r) {
	const _ = ie(n, fe.__wbindgen_malloc), i = we, o = ie(e, fe.__wbindgen_malloc), c = we, s = ie(t, fe.__wbindgen_malloc), a = we, l = fe.classifyActimetricPreschoolWristRf(_, i, o, c, s, a, r);
	if (l[3]) throw ce(l[2]);
	var u = Hn(l[0], l[1]).slice();
	return fe.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function o(n, e, t, r) {
	const _ = ie(n, fe.__wbindgen_malloc), i = we, o = ie(e, fe.__wbindgen_malloc), c = we, s = ie(t, fe.__wbindgen_malloc), a = we, l = fe.classifyActimetricPreschoolWristRfLagLead(_, i, o, c, s, a, r);
	if (l[3]) throw ce(l[2]);
	var u = Hn(l[0], l[1]).slice();
	return fe.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function c(n, e, t, r) {
	const _ = ie(n, fe.__wbindgen_malloc), i = we, o = ie(e, fe.__wbindgen_malloc), c = we, s = ie(t, fe.__wbindgen_malloc), a = we, l = fe.classifyActimetricPreschoolWristRfLagLeadCalibrated(_, i, o, c, s, a, r);
	if (l[3]) throw ce(l[2]);
	var u = Hn(l[0], l[1]).slice();
	return fe.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function s(n, e, t, r) {
	const _ = ie(n, fe.__wbindgen_malloc), i = we, o = ie(e, fe.__wbindgen_malloc), c = we, s = ie(t, fe.__wbindgen_malloc), a = we, l = fe.computeAnglez5s(_, i, o, c, s, a, r);
	var u = qn(l[0], l[1]).slice();
	return fe.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function a(n) {
	let e, t;
	try {
		const i = oe(n, fe.__wbindgen_malloc, fe.__wbindgen_realloc), o = we, c = fe.computeCircadian(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, ce(c[2]);
		return e = r, t = _, Jn(r, _);
	} finally {
		fe.__wbindgen_free(e, t, 1);
	}
}
function l(n, e, t, r) {
	const _ = ie(n, fe.__wbindgen_malloc), i = we, o = ie(e, fe.__wbindgen_malloc), c = we, s = ie(t, fe.__wbindgen_malloc), a = we, l = fe.computeEnmo5s(_, i, o, c, s, a, r);
	var u = qn(l[0], l[1]).slice();
	return fe.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function u(n, e, t, r, _) {
	const i = ie(n, fe.__wbindgen_malloc), o = we, c = ie(e, fe.__wbindgen_malloc), s = we, a = ie(t, fe.__wbindgen_malloc), l = we, u = fe.computeMimsUnit(i, o, c, s, a, l, r, _);
	if (u[2]) throw ce(u[1]);
	return ce(u[0]);
}
function f(n, e, t, r, _) {
	const i = ie(n, fe.__wbindgen_malloc), o = we, c = ie(e, fe.__wbindgen_malloc), s = we, a = ie(t, fe.__wbindgen_malloc), l = we, u = ie(r, fe.__wbindgen_malloc), f = we, w = fe.computeMimsUnitDataframe(i, o, c, s, a, l, u, f, _);
	if (w[2]) throw ce(w[1]);
	return ce(w[0]);
}
function w(n, e, t, r, _) {
	const i = ie(n, fe.__wbindgen_malloc), o = we, c = ie(e, fe.__wbindgen_malloc), s = we, a = ie(t, fe.__wbindgen_malloc), l = we, u = fe.computeMimsUnitTimingBreakdown(i, o, c, s, a, l, r, _);
	if (u[2]) throw ce(u[1]);
	return ce(u[0]);
}
function g(n, e, t, r, _) {
	const i = ie(n, fe.__wbindgen_malloc), o = we, c = ie(e, fe.__wbindgen_malloc), s = we, a = ie(t, fe.__wbindgen_malloc), l = we, u = fe.computeMimsUnitValues(i, o, c, s, a, l, r, _);
	if (u[3]) throw ce(u[2]);
	var f = qn(u[0], u[1]).slice();
	return fe.__wbindgen_free(u[0], 8 * u[1], 8), f;
}
function b(n) {
	let e, t;
	try {
		const i = oe(n, fe.__wbindgen_malloc, fe.__wbindgen_realloc), o = we, c = fe.computeNightDifficulty(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, ce(c[2]);
		return e = r, t = _, Jn(r, _);
	} finally {
		fe.__wbindgen_free(e, t, 1);
	}
}
function d(n) {
	let e, t;
	try {
		const i = oe(n, fe.__wbindgen_malloc, fe.__wbindgen_realloc), o = we, c = fe.computeNightSignals(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, ce(c[2]);
		return e = r, t = _, Jn(r, _);
	} finally {
		fe.__wbindgen_free(e, t, 1);
	}
}
function m(n, e, t) {
	const r = _e(n, fe.__wbindgen_malloc), _ = we, i = ie(e, fe.__wbindgen_malloc), o = we, c = fe.computeSleepMetrics(r, _, i, o, t);
	if (c[2]) throw ce(c[1]);
	return ce(c[0]);
}
function h(n) {
	const e = fe.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw ce(e[1]);
	return ce(e[0]);
}
function p(n) {
	const e = _e(n, fe.__wbindgen_malloc), t = we;
	fe.csvBufferAppend(e, t);
}
function y(n) {
	fe.csvBufferClear(n);
}
function v(n, e) {
	const t = ie(n, fe.__wbindgen_malloc), r = we, _ = ie(e, fe.__wbindgen_malloc), i = we, o = fe.detectDetachFromAccelerationG(t, r, _, i);
	if (o[3]) throw ce(o[2]);
	var c = Hn(o[0], o[1]).slice();
	return fe.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function k(n, e) {
	let t, r;
	try {
		const _ = _e(n, fe.__wbindgen_malloc), i = we, o = oe(e, fe.__wbindgen_malloc, fe.__wbindgen_realloc), c = we, s = fe.detectDeviceFormat(_, i, o, c);
		return t = s[0], r = s[1], Jn(s[0], s[1]);
	} finally {
		fe.__wbindgen_free(t, r, 1);
	}
}
function A(n) {
	const e = fe.detectGgirHasptVariant(n);
	if (e[2]) throw ce(e[1]);
	return ce(e[0]);
}
function x(n, e, t, r) {
	const _ = ie(n, fe.__wbindgen_malloc), i = we;
	var o = re(e) ? 0 : oe(e, fe.__wbindgen_malloc, fe.__wbindgen_realloc), c = we, s = re(t) ? 0 : ie(t, fe.__wbindgen_malloc), a = we, l = re(r) ? 0 : ie(r, fe.__wbindgen_malloc), u = we;
	return fe.detectHdcza(_, i, o, c, s, a, l, u);
}
function R(n) {
	const e = ie(n, fe.__wbindgen_malloc), t = we, r = fe.detectNonwear(e, t);
	var _ = Hn(r[0], r[1]).slice();
	return fe.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function C(n) {
	const e = ie(n, fe.__wbindgen_malloc), t = we, r = fe.detectNonwearChoi2011(e, t);
	var _ = Hn(r[0], r[1]).slice();
	return fe.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function S(n) {
	const e = ie(n, fe.__wbindgen_malloc), t = we, r = fe.detectNonwearChoi2011Bouts(e, t);
	if (r[2]) throw ce(r[1]);
	return ce(r[0]);
}
function F(n, e) {
	const t = ie(n, fe.__wbindgen_malloc), r = we, _ = fe.detectNonwearChoi2011Epoch(t, r, e);
	if (_[3]) throw ce(_[2]);
	var i = Hn(_[0], _[1]).slice();
	return fe.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function M(n) {
	const e = ie(n, fe.__wbindgen_malloc), t = we, r = fe.detectNonwearChoi2012(e, t);
	var _ = Hn(r[0], r[1]).slice();
	return fe.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function P(n) {
	const e = ie(n, fe.__wbindgen_malloc), t = we, r = fe.detectNonwearChoi2012Bouts(e, t);
	if (r[2]) throw ce(r[1]);
	return ce(r[0]);
}
function U(n) {
	const e = ie(n, fe.__wbindgen_malloc), t = we, r = fe.detectNonwearChoiBouts(e, t);
	if (r[2]) throw ce(r[1]);
	return ce(r[0]);
}
function I(n) {
	let e, t;
	try {
		const i = oe(n, fe.__wbindgen_malloc, fe.__wbindgen_realloc), o = we, c = fe.detectNonwearUnified(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, ce(c[2]);
		return e = r, t = _, Jn(r, _);
	} finally {
		fe.__wbindgen_free(e, t, 1);
	}
}
function z(n, e, t, r, _) {
	const i = ie(n, fe.__wbindgen_malloc), o = we, c = ie(e, fe.__wbindgen_malloc), s = we, a = ie(t, fe.__wbindgen_malloc), l = we, u = ie(r, fe.__wbindgen_malloc), f = we, w = fe.epochRawData(i, o, c, s, a, l, u, f, _);
	if (w[2]) throw ce(w[1]);
	return ce(w[0]);
}
function D(n, e, t) {
	const r = ie(n, fe.__wbindgen_malloc), _ = we, i = ie(e, fe.__wbindgen_malloc), o = we, c = fe.epochWithBandpass(r, _, i, o, t);
	if (c[2]) throw ce(c[1]);
	return ce(c[0]);
}
function W(n, e) {
	let t, r;
	try {
		const o = oe(n, fe.__wbindgen_malloc, fe.__wbindgen_realloc), c = we, s = oe(e, fe.__wbindgen_malloc, fe.__wbindgen_realloc), a = we, l = fe.executeHeroRuntime(o, c, s, a);
		var _ = l[0], i = l[1];
		if (l[3]) throw _ = 0, i = 0, ce(l[2]);
		return t = _, r = i, Jn(_, i);
	} finally {
		fe.__wbindgen_free(t, r, 1);
	}
}
function B(n) {
	const e = _e(n, fe.__wbindgen_malloc), t = we, r = fe.extractCapsense(e, t);
	if (r[2]) throw ce(r[1]);
	return ce(r[0]);
}
function O() {
	const n = fe.getComputeCapabilitiesV1();
	if (n[2]) throw ce(n[1]);
	return ce(n[0]);
}
function j() {
	fe.installPanicHook();
}
function G(n) {
	const e = _e(n, fe.__wbindgen_malloc), t = we;
	return 0 !== fe.isGeneactivFormat(e, t);
}
function E(n, e, t, r) {
	const _ = ie(n, fe.__wbindgen_malloc), i = we, o = ie(e, fe.__wbindgen_malloc), c = we, s = ie(t, fe.__wbindgen_malloc), a = we, l = fe.lstmSpectralFeatures30s(_, i, o, c, s, a, r);
	if (l[2]) throw ce(l[1]);
	return ce(l[0]);
}
function N(n, e, t, r, _) {
	const i = ie(n, fe.__wbindgen_malloc), o = we, c = ie(e, fe.__wbindgen_malloc), s = we, a = ie(t, fe.__wbindgen_malloc), l = we, u = fe.neishabouriCounts(i, o, c, s, a, l, r, _);
	if (u[2]) throw ce(u[1]);
	return ce(u[0]);
}
function V(n, e) {
	const t = _e(n, fe.__wbindgen_malloc), r = we, _ = fe.parseActigraphCsv(t, r, e);
	if (_[2]) throw ce(_[1]);
	return ce(_[0]);
}
function L(n) {
	const e = fe.parseActigraphCsvBuffered(n);
	if (e[2]) throw ce(e[1]);
	return ce(e[0]);
}
function X(n) {
	const e = _e(n, fe.__wbindgen_malloc), t = we, r = fe.parseCwa(e, t);
	if (r[2]) throw ce(r[1]);
	return ce(r[0]);
}
function q(n, e) {
	const t = _e(n, fe.__wbindgen_malloc), r = we, _ = oe(e, fe.__wbindgen_malloc, fe.__wbindgen_realloc), i = we, o = fe.parseEpochSeries(t, r, _, i);
	if (o[2]) throw ce(o[1]);
	return ce(o[0]);
}
function T(n) {
	const e = _e(n, fe.__wbindgen_malloc), t = we, r = fe.parseGeneactivBin(e, t);
	if (r[2]) throw ce(r[1]);
	return ce(r[0]);
}
function H(n) {
	const e = _e(n, fe.__wbindgen_malloc), t = we, r = fe.parseGeneactivCsv(e, t);
	if (r[2]) throw ce(r[1]);
	return ce(r[0]);
}
function $() {
	const n = fe.parseGeneactivCsvBuffered();
	if (n[2]) throw ce(n[1]);
	return ce(n[0]);
}
function Y(n) {
	const e = _e(n, fe.__wbindgen_malloc), t = we, r = fe.parseGt3x(e, t);
	if (r[2]) throw ce(r[1]);
	return ce(r[0]);
}
function Z(n) {
	let e, t;
	try {
		const i = oe(n, fe.__wbindgen_malloc, fe.__wbindgen_realloc), o = we, c = fe.placeMarkers(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, ce(c[2]);
		return e = r, t = _, Jn(r, _);
	} finally {
		fe.__wbindgen_free(e, t, 1);
	}
}
function K(n, e, t, r, _, i) {
	const o = oe(n, fe.__wbindgen_malloc, fe.__wbindgen_realloc), c = we, s = ie(e, fe.__wbindgen_malloc), a = we, l = ie(t, fe.__wbindgen_malloc), u = we, f = _e(r, fe.__wbindgen_malloc), w = we, g = _e(_, fe.__wbindgen_malloc), b = we, d = oe(i, fe.__wbindgen_malloc, fe.__wbindgen_realloc), m = we, h = fe.placeMarkersBatch(o, c, s, a, l, u, f, w, g, b, d, m);
	if (h[2]) throw ce(h[1]);
	return ce(h[0]);
}
function J(n) {
	let e, t;
	try {
		const i = oe(n, fe.__wbindgen_malloc, fe.__wbindgen_realloc), o = we, c = fe.placeNonwearMarkers(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, ce(c[2]);
		return e = r, t = _, Jn(r, _);
	} finally {
		fe.__wbindgen_free(e, t, 1);
	}
}
function Q(n) {
	const e = fe.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw ce(e[1]);
	return ce(e[0]);
}
function nn(n) {
	const e = fe.prepareCompactPipelineV1(n);
	if (e[2]) throw ce(e[1]);
	return ce(e[0]);
}
function en(n, e, t, r, _, i, o) {
	const c = ie(n, fe.__wbindgen_malloc), s = we, a = ie(e, fe.__wbindgen_malloc), l = we, u = ie(t, fe.__wbindgen_malloc), f = we, w = ie(r, fe.__wbindgen_malloc), g = we;
	var b = re(o) ? 0 : oe(o, fe.__wbindgen_malloc, fe.__wbindgen_realloc), d = we;
	const m = fe.processGeneactivRaw(c, s, a, l, u, f, w, g, _, i, b, d);
	if (m[2]) throw ce(m[1]);
	return ce(m[0]);
}
function tn(n) {
	const e = _e(n, fe.__wbindgen_malloc), t = we, r = fe.processGt3xFull(e, t);
	if (r[2]) throw ce(r[1]);
	return ce(r[0]);
}
function rn(n, e) {
	const t = _e(n, fe.__wbindgen_malloc), r = we, _ = fe.processGt3xFullWithEpoch(t, r, e);
	if (_[2]) throw ce(_[1]);
	return ce(_[0]);
}
function _n(n) {
	const e = _e(n, fe.__wbindgen_malloc), t = we, r = fe.processGt3xPart1(e, t);
	if (r[2]) throw ce(r[1]);
	return ce(r[0]);
}
function on(n, e) {
	const t = _e(n, fe.__wbindgen_malloc), r = we, _ = fe.processGt3xPart1WithEpoch(t, r, e);
	if (_[2]) throw ce(_[1]);
	return ce(_[0]);
}
function cn(n, e, t, r, _, i) {
	const o = ie(n, fe.__wbindgen_malloc), c = we, s = ie(e, fe.__wbindgen_malloc), a = we, l = ie(t, fe.__wbindgen_malloc), u = we;
	var f = re(i) ? 0 : oe(i, fe.__wbindgen_malloc, fe.__wbindgen_realloc), w = we;
	const g = fe.processRawXyz(o, c, s, a, l, u, r, _, f, w);
	if (g[2]) throw ce(g[1]);
	return ce(g[0]);
}
function sn(n, e, t, r, _, i) {
	const o = ie(n, fe.__wbindgen_malloc), c = we, s = ie(e, fe.__wbindgen_malloc), a = we, l = ie(t, fe.__wbindgen_malloc), u = we, f = ie(r, fe.__wbindgen_malloc), w = we;
	var g = re(i) ? 0 : oe(i, fe.__wbindgen_malloc, fe.__wbindgen_realloc), b = we;
	const d = fe.processRawXyzImputed(o, c, s, a, l, u, f, w, _, g, b);
	if (d[2]) throw ce(d[1]);
	return ce(d[0]);
}
function an(n, e, t, r, _, i, o) {
	const c = ie(n, fe.__wbindgen_malloc), s = we, a = ie(e, fe.__wbindgen_malloc), l = we, u = ie(t, fe.__wbindgen_malloc), f = we, w = ie(r, fe.__wbindgen_malloc), g = we;
	var b = re(i) ? 0 : oe(i, fe.__wbindgen_malloc, fe.__wbindgen_realloc), d = we;
	const m = fe.processRawXyzImputedWithEpoch(c, s, a, l, u, f, w, g, _, b, d, o);
	if (m[2]) throw ce(m[1]);
	return ce(m[0]);
}
function ln(n) {
	const e = _e(n, fe.__wbindgen_malloc), t = we, r = fe.readGgirMeta(e, t);
	if (r[2]) throw ce(r[1]);
	return ce(r[0]);
}
function un() {
	return fe.recommended_chunk_size_mb() >>> 0;
}
function fn(n, e) {
	const t = ie(n, fe.__wbindgen_malloc), r = we, _ = oe(e, fe.__wbindgen_malloc, fe.__wbindgen_realloc), i = we, o = fe.reduceF64V1(t, r, _, i);
	if (o[2]) throw ce(o[1]);
	return o[0];
}
function wn(n) {
	const e = fe.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw ce(e[1]);
	return ce(e[0]);
}
function gn(n) {
	const e = fe.runCompactPipelineV1(n);
	if (e[2]) throw ce(e[1]);
	return ce(e[0]);
}
function bn(n, e) {
	const t = fe.runFullPipeline(n, e);
	if (t[2]) throw ce(t[1]);
	return ce(t[0]);
}
function dn(n) {
	const e = fe.runFullPipelineOutcomeV1(n);
	if (e[2]) throw ce(e[1]);
	return ce(e[0]);
}
function mn(n) {
	const e = fe.runFullPipelineV1(n);
	if (e[2]) throw ce(e[1]);
	return ce(e[0]);
}
function hn(n, e) {
	const t = fe.runGgirFromEpoch(n, e);
	if (t[2]) throw ce(t[1]);
	return ce(t[0]);
}
function pn(n) {
	const e = _e(n, fe.__wbindgen_malloc), t = we, r = fe.runMilestone(e, t);
	if (r[2]) throw ce(r[1]);
	return ce(r[0]);
}
function yn(n) {
	const e = fe.scoreAllDays(n);
	if (e[2]) throw ce(e[1]);
	return ce(e[0]);
}
function vn(n, e) {
	const t = ie(n, fe.__wbindgen_malloc), r = we, _ = fe.scoreColeKripke(t, r, e);
	var i = Hn(_[0], _[1]).slice();
	return fe.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function kn(n) {
	let e, t;
	try {
		const i = oe(n, fe.__wbindgen_malloc, fe.__wbindgen_realloc), o = we, c = fe.scoreConsensus(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, ce(c[2]);
		return e = r, t = _, Jn(r, _);
	} finally {
		fe.__wbindgen_free(e, t, 1);
	}
}
function An(n) {
	const e = fe.scoreConsensusMajority(n);
	if (e[2]) throw ce(e[1]);
	return ce(e[0]);
}
function xn(n) {
	let e, t;
	try {
		const i = oe(n, fe.__wbindgen_malloc, fe.__wbindgen_realloc), o = we, c = fe.scoreEpochs(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, ce(c[2]);
		return e = r, t = _, Jn(r, _);
	} finally {
		fe.__wbindgen_free(e, t, 1);
	}
}
function Rn(n) {
	const e = ie(n, fe.__wbindgen_malloc), t = we, r = fe.scoreGgirHasib(e, t);
	var _ = Hn(r[0], r[1]).slice();
	return fe.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function Cn(n) {
	const e = fe.scoreGgirHasibVariant(n);
	if (e[2]) throw ce(e[1]);
	return ce(e[0]);
}
function Sn(n, e, t) {
	const r = ie(n, fe.__wbindgen_malloc), _ = we, i = ie(e, fe.__wbindgen_malloc), o = we, c = fe.scoreGgirSib(r, _, i, o, t);
	if (c[2]) throw ce(c[1]);
	return ce(c[0]);
}
function Fn(n, e) {
	const t = ie(n, fe.__wbindgen_malloc), r = we, _ = fe.scoreSadeh(t, r, e);
	var i = Hn(_[0], _[1]).slice();
	return fe.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function Mn(n) {
	const e = _e(n, fe.__wbindgen_malloc), t = we, r = fe.sha256StreamFeed(e, t);
	if (r[1]) throw ce(r[0]);
}
function Pn() {
	let n, e;
	try {
		const _ = fe.sha256StreamFinish();
		var t = _[0], r = _[1];
		if (_[3]) throw t = 0, r = 0, ce(_[2]);
		return n = t, e = r, Jn(t, r);
	} finally {
		fe.__wbindgen_free(n, e, 1);
	}
}
function Un() {
	fe.sha256StreamStart();
}
function In(n) {
	const e = _e(n, fe.__wbindgen_malloc), t = we, r = fe.streamParseFeed(e, t);
	if (r[2]) throw ce(r[1]);
	return r[0] >>> 0;
}
function zn() {
	const n = fe.streamParseFinish();
	if (n[2]) throw ce(n[1]);
	return e.__wrap(n[0]);
}
function Dn() {
	const e = fe.streamParseFinishChunk();
	if (e[2]) throw ce(e[1]);
	return n.__wrap(e[0]);
}
function Wn(n, e) {
	const t = fe.streamParseStart(n, e);
	if (t[1]) throw ce(t[0]);
}
function Bn(n, e) {
	const t = fe.streamParseStartData(n, e);
	if (t[1]) throw ce(t[0]);
}
function On(n, e, t) {
	const r = fe.streamParseStartWithEpoch(n, e, t);
	if (r[1]) throw ce(r[0]);
}
function jn(n, e) {
	const t = _e(n, fe.__wbindgen_malloc), r = we, _ = fe.summarizeActimetricPreschoolWristRfClasses(t, r, e);
	if (_[2]) throw ce(_[1]);
	return ce(_[0]);
}
function Gn(n, e, t, r, _) {
	const i = ie(n, fe.__wbindgen_malloc), o = we, c = ie(e, fe.__wbindgen_malloc), s = we, a = ie(t, fe.__wbindgen_malloc), l = we, u = fe.zeroCrossingCounts(i, o, c, s, a, l, r, _);
	if (u[2]) throw ce(u[1]);
	return ce(u[0]);
}
function En() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(Jn(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = oe(String(e), fe.__wbindgen_malloc, fe.__wbindgen_realloc), r = we;
				Yn().setInt32(n + 4, r, !0), Yn().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				Yn().setBigInt64(n + 8, re(t) ? BigInt(0) : t, !0), Yn().setInt32(n + 0, !re(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return re(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = oe(Xn(e), fe.__wbindgen_malloc, fe.__wbindgen_realloc), r = we;
				Yn().setInt32(n + 4, r, !0), Yn().setInt32(n + 0, t, !0);
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
				Yn().setFloat64(n + 8, re(t) ? 0 : t, !0), Yn().setInt32(n + 0, !re(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var r = re(t) ? 0 : oe(t, fe.__wbindgen_malloc, fe.__wbindgen_realloc), _ = we;
				Yn().setInt32(n + 4, _, !0), Yn().setInt32(n + 0, r, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(Jn(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return te(function(n, e) {
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
				let t, r;
				try {
					t = n, r = e, console.error(Jn(n, e));
				} finally {
					fe.__wbindgen_free(t, r, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return te(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return te(function(n, e) {
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
				return new Float64Array(qn(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(Hn(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return te(function(n) {
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
				return te(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(Hn(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return te(function(n, e, t) {
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
				const t = oe(e.stack, fe.__wbindgen_malloc, fe.__wbindgen_realloc), r = we;
				Yn().setInt32(n + 4, r, !0), Yn().setInt32(n + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return re(n) ? 0 : Ln(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return re(n) ? 0 : Ln(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return re(n) ? 0 : Ln(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return re(n) ? 0 : Ln(n);
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
				return Hn(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return Jn(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = fe.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
const Nn = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => fe.__wbg_streamchunkresult_free(n >>> 0, 1)), Vn = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => fe.__wbg_streamparseresult_free(n >>> 0, 1));
function Ln(n) {
	const e = fe.__externref_table_alloc();
	return fe.__wbindgen_externrefs.set(e, n), e;
}
function Xn(n) {
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
		e > 0 && (t += Xn(n[0]));
		for (let r = 1; r < e; r++) t += ", " + Xn(n[r]);
		return t += "]", t;
	}
	const t = /\[object ([^\]]+)\]/.exec(toString.call(n));
	let r;
	if (!(t && t.length > 1)) return toString.call(n);
	if (r = t[1], "Object" == r) try {
		return "Object(" + JSON.stringify(n) + ")";
	} catch (_) {
		return "Object";
	}
	return n instanceof Error ? `${n.name}: ${n.message}\n${n.stack}` : r;
}
function qn(n, e) {
	return n >>>= 0, Kn().subarray(n / 8, n / 8 + e);
}
function Tn(n, e) {
	return n >>>= 0, (null !== Qn && 0 !== Qn.byteLength || (Qn = new Uint32Array(fe.memory.buffer)), Qn).subarray(n / 4, n / 4 + e);
}
function Hn(n, e) {
	return n >>>= 0, ee().subarray(n / 1, n / 1 + e);
}
let $n = null;
function Yn() {
	return (null === $n || !0 === $n.buffer.detached || void 0 === $n.buffer.detached && $n.buffer !== fe.memory.buffer) && ($n = new DataView(fe.memory.buffer)), $n;
}
let Zn = null;
function Kn() {
	return null !== Zn && 0 !== Zn.byteLength || (Zn = new Float64Array(fe.memory.buffer)), Zn;
}
function Jn(n, e) {
	return function(n, e) {
		return le += e, le >= ae && (se = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), se.decode(), le = e), se.decode(ee().subarray(n, n + e));
	}(n >>>= 0, e);
}
let Qn = null, ne = null;
function ee() {
	return null !== ne && 0 !== ne.byteLength || (ne = new Uint8Array(fe.memory.buffer)), ne;
}
function te(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = Ln(t);
		fe.__wbindgen_exn_store(n);
	}
}
function re(n) {
	return null == n;
}
function _e(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return ee().set(n, t / 1), we = n.length, t;
}
function ie(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return Kn().set(n, t / 8), we = n.length, t;
}
function oe(n, e, t) {
	if (void 0 === t) {
		const t = ue.encode(n), r = e(t.length, 1) >>> 0;
		return ee().subarray(r, r + t.length).set(t), we = t.length, r;
	}
	let r = n.length, _ = e(r, 1) >>> 0;
	const i = ee();
	let o = 0;
	for (; o < r; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[_ + o] = e;
	}
	if (o !== r) {
		0 !== o && (n = n.slice(o)), _ = t(_, r, r = o + 3 * n.length, 1) >>> 0;
		const e = ee().subarray(_ + o, _ + r);
		o += ue.encodeInto(n, e).written, _ = t(_, r, o, 1) >>> 0;
	}
	return we = o, _;
}
function ce(n) {
	const e = fe.__wbindgen_externrefs.get(n);
	return fe.__externref_table_dealloc(n), e;
}
let se = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
se.decode();
const ae = 2146435072;
let le = 0;
const ue = new TextEncoder();
"encodeInto" in ue || (ue.encodeInto = function(n, e) {
	const t = ue.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let fe, we = 0;
function ge(n, e) {
	return fe = n.exports, $n = null, Zn = null, Qn = null, ne = null, fe.__wbindgen_start(), fe;
}
function be(n) {
	if (void 0 !== fe) return fe;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = En();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), ge(new WebAssembly.Instance(n, e));
}
async function de(n) {
	if (void 0 !== fe) return fe;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-DtKeMNM8.wasm", "" + import.meta.url));
	const e = En();
	("string" == typeof n || "function" == typeof Request && n instanceof Request || "function" == typeof URL && n instanceof URL) && (n = fetch(n));
	const { instance: t, module: r } = await async function(n, e) {
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
			const r = await n.arrayBuffer();
			return await WebAssembly.instantiate(r, e);
		}
		{
			const t = await WebAssembly.instantiate(n, e);
			return t instanceof WebAssembly.Instance ? {
				instance: t,
				module: n
			} : t;
		}
	}(await n, e);
	return ge(t);
}
export { n as StreamChunkResult, e as StreamParseResult, t as actoursVersion, r as aggregateEpochSeries, _ as analyzePhysicalActivityDay, i as classifyActimetricPreschoolWristRf, o as classifyActimetricPreschoolWristRfLagLead, c as classifyActimetricPreschoolWristRfLagLeadCalibrated, s as computeAnglez5s, a as computeCircadian, l as computeEnmo5s, u as computeMimsUnit, f as computeMimsUnitDataframe, w as computeMimsUnitTimingBreakdown, g as computeMimsUnitValues, b as computeNightDifficulty, d as computeNightSignals, m as computeSleepMetrics, h as configureComputeMemoryBudgetV1, p as csvBufferAppend, y as csvBufferClear, de as default, v as detectDetachFromAccelerationG, k as detectDeviceFormat, A as detectGgirHasptVariant, x as detectHdcza, R as detectNonwear, C as detectNonwearChoi2011, S as detectNonwearChoi2011Bouts, F as detectNonwearChoi2011Epoch, M as detectNonwearChoi2012, P as detectNonwearChoi2012Bouts, U as detectNonwearChoiBouts, I as detectNonwearUnified, z as epochRawData, D as epochWithBandpass, W as executeHeroRuntime, B as extractCapsense, O as getComputeCapabilitiesV1, be as initSync, j as installPanicHook, G as isGeneactivFormat, E as lstmSpectralFeatures30s, N as neishabouriCounts, V as parseActigraphCsv, L as parseActigraphCsvBuffered, X as parseCwa, q as parseEpochSeries, T as parseGeneactivBin, H as parseGeneactivCsv, $ as parseGeneactivCsvBuffered, Y as parseGt3x, Z as placeMarkers, K as placeMarkersBatch, J as placeNonwearMarkers, Q as prepareCompactPipelineOutcomeV1, nn as prepareCompactPipelineV1, en as processGeneactivRaw, tn as processGt3xFull, rn as processGt3xFullWithEpoch, _n as processGt3xPart1, on as processGt3xPart1WithEpoch, cn as processRawXyz, sn as processRawXyzImputed, an as processRawXyzImputedWithEpoch, ln as readGgirMeta, un as recommended_chunk_size_mb, fn as reduceF64V1, wn as runCompactPipelineOutcomeV1, gn as runCompactPipelineV1, bn as runFullPipeline, dn as runFullPipelineOutcomeV1, mn as runFullPipelineV1, hn as runGgirFromEpoch, pn as runMilestone, yn as scoreAllDays, vn as scoreColeKripke, kn as scoreConsensus, An as scoreConsensusMajority, xn as scoreEpochs, Rn as scoreGgirHasib, Cn as scoreGgirHasibVariant, Sn as scoreGgirSib, Fn as scoreSadeh, Mn as sha256StreamFeed, Pn as sha256StreamFinish, Un as sha256StreamStart, In as streamParseFeed, zn as streamParseFinish, Dn as streamParseFinishChunk, Wn as streamParseStart, Bn as streamParseStartData, On as streamParseStartWithEpoch, jn as summarizeActimetricPreschoolWristRfClasses, Gn as zeroCrossingCounts };
