var n = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, On.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, On.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		ce.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = ce.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = ce.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = ce.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = ce.streamchunkresult_axisX(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ce.streamchunkresult_axisY(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ce.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ce.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ce.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Hn(n[0], n[1]).slice(), ce.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = ce.streamchunkresult_counts(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = ce.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = ce.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = ce.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return ce.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = ce.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = ce.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== ce.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = ce.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Hn(n[0], n[1]).slice(), ce.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = ce.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = ce.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = ce.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== ce.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ce.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return ce.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ce.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = ce.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = ce.streamchunkresult_temperature(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ce.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = ce.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ce.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = ce.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = ce.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = ce.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, Bn.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Bn.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		ce.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = ce.streamparseresult_axisX(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ce.streamparseresult_axisY(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ce.streamparseresult_axisZ(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ce.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ce.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Hn(n[0], n[1]).slice(), ce.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return ce.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== ce.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ce.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ce.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = ce.streamparseresult_temperature(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ce.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ce.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = En(n[0], n[1]).slice();
		return ce.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t() {
	let n, e;
	try {
		const t = ce.actoursVersion();
		return n = t[0], e = t[1], Hn(t[0], t[1]);
	} finally {
		ce.__wbindgen_free(n, e, 1);
	}
}
function r(n) {
	let e, t;
	try {
		const i = ee(n, ce.__wbindgen_malloc, ce.__wbindgen_realloc), o = se, c = ce.analyzePhysicalActivityDay(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, te(c[2]);
		return e = r, t = _, Hn(r, _);
	} finally {
		ce.__wbindgen_free(e, t, 1);
	}
}
function _(n, e, t, r) {
	const _ = ne(n, ce.__wbindgen_malloc), i = se, o = ne(e, ce.__wbindgen_malloc), c = se, s = ne(t, ce.__wbindgen_malloc), a = se, l = ce.classifyActimetricPreschoolWristRf(_, i, o, c, s, a, r);
	if (l[3]) throw te(l[2]);
	var u = Vn(l[0], l[1]).slice();
	return ce.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function i(n, e, t, r) {
	const _ = ne(n, ce.__wbindgen_malloc), i = se, o = ne(e, ce.__wbindgen_malloc), c = se, s = ne(t, ce.__wbindgen_malloc), a = se, l = ce.classifyActimetricPreschoolWristRfLagLead(_, i, o, c, s, a, r);
	if (l[3]) throw te(l[2]);
	var u = Vn(l[0], l[1]).slice();
	return ce.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function o(n, e, t, r) {
	const _ = ne(n, ce.__wbindgen_malloc), i = se, o = ne(e, ce.__wbindgen_malloc), c = se, s = ne(t, ce.__wbindgen_malloc), a = se, l = ce.classifyActimetricPreschoolWristRfLagLeadCalibrated(_, i, o, c, s, a, r);
	if (l[3]) throw te(l[2]);
	var u = Vn(l[0], l[1]).slice();
	return ce.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function c(n, e, t, r) {
	const _ = ne(n, ce.__wbindgen_malloc), i = se, o = ne(e, ce.__wbindgen_malloc), c = se, s = ne(t, ce.__wbindgen_malloc), a = se, l = ce.computeAnglez5s(_, i, o, c, s, a, r);
	var u = En(l[0], l[1]).slice();
	return ce.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function s(n) {
	let e, t;
	try {
		const i = ee(n, ce.__wbindgen_malloc, ce.__wbindgen_realloc), o = se, c = ce.computeCircadian(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, te(c[2]);
		return e = r, t = _, Hn(r, _);
	} finally {
		ce.__wbindgen_free(e, t, 1);
	}
}
function a(n, e, t, r) {
	const _ = ne(n, ce.__wbindgen_malloc), i = se, o = ne(e, ce.__wbindgen_malloc), c = se, s = ne(t, ce.__wbindgen_malloc), a = se, l = ce.computeEnmo5s(_, i, o, c, s, a, r);
	var u = En(l[0], l[1]).slice();
	return ce.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function l(n, e, t, r, _) {
	const i = ne(n, ce.__wbindgen_malloc), o = se, c = ne(e, ce.__wbindgen_malloc), s = se, a = ne(t, ce.__wbindgen_malloc), l = se, u = ce.computeMimsUnit(i, o, c, s, a, l, r, _);
	if (u[2]) throw te(u[1]);
	return te(u[0]);
}
function u(n, e, t, r, _) {
	const i = ne(n, ce.__wbindgen_malloc), o = se, c = ne(e, ce.__wbindgen_malloc), s = se, a = ne(t, ce.__wbindgen_malloc), l = se, u = ne(r, ce.__wbindgen_malloc), f = se, g = ce.computeMimsUnitDataframe(i, o, c, s, a, l, u, f, _);
	if (g[2]) throw te(g[1]);
	return te(g[0]);
}
function f(n, e, t, r, _) {
	const i = ne(n, ce.__wbindgen_malloc), o = se, c = ne(e, ce.__wbindgen_malloc), s = se, a = ne(t, ce.__wbindgen_malloc), l = se, u = ce.computeMimsUnitTimingBreakdown(i, o, c, s, a, l, r, _);
	if (u[2]) throw te(u[1]);
	return te(u[0]);
}
function g(n, e, t, r, _) {
	const i = ne(n, ce.__wbindgen_malloc), o = se, c = ne(e, ce.__wbindgen_malloc), s = se, a = ne(t, ce.__wbindgen_malloc), l = se, u = ce.computeMimsUnitValues(i, o, c, s, a, l, r, _);
	if (u[3]) throw te(u[2]);
	var f = En(u[0], u[1]).slice();
	return ce.__wbindgen_free(u[0], 8 * u[1], 8), f;
}
function w(n) {
	let e, t;
	try {
		const i = ee(n, ce.__wbindgen_malloc, ce.__wbindgen_realloc), o = se, c = ce.computeNightDifficulty(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, te(c[2]);
		return e = r, t = _, Hn(r, _);
	} finally {
		ce.__wbindgen_free(e, t, 1);
	}
}
function b(n) {
	let e, t;
	try {
		const i = ee(n, ce.__wbindgen_malloc, ce.__wbindgen_realloc), o = se, c = ce.computeNightSignals(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, te(c[2]);
		return e = r, t = _, Hn(r, _);
	} finally {
		ce.__wbindgen_free(e, t, 1);
	}
}
function d(n, e, t) {
	const r = Qn(n, ce.__wbindgen_malloc), _ = se, i = ne(e, ce.__wbindgen_malloc), o = se, c = ce.computeSleepMetrics(r, _, i, o, t);
	if (c[2]) throw te(c[1]);
	return te(c[0]);
}
function m(n) {
	const e = ce.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw te(e[1]);
	return te(e[0]);
}
function h(n) {
	const e = Qn(n, ce.__wbindgen_malloc), t = se;
	ce.csvBufferAppend(e, t);
}
function p(n) {
	ce.csvBufferClear(n);
}
function y(n, e) {
	const t = ne(n, ce.__wbindgen_malloc), r = se, _ = ne(e, ce.__wbindgen_malloc), i = se, o = ce.detectDetachFromAccelerationG(t, r, _, i);
	if (o[3]) throw te(o[2]);
	var c = Vn(o[0], o[1]).slice();
	return ce.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function v(n, e) {
	let t, r;
	try {
		const _ = Qn(n, ce.__wbindgen_malloc), i = se, o = ee(e, ce.__wbindgen_malloc, ce.__wbindgen_realloc), c = se, s = ce.detectDeviceFormat(_, i, o, c);
		return t = s[0], r = s[1], Hn(s[0], s[1]);
	} finally {
		ce.__wbindgen_free(t, r, 1);
	}
}
function k(n) {
	const e = ce.detectGgirHasptVariant(n);
	if (e[2]) throw te(e[1]);
	return te(e[0]);
}
function A(n, e, t, r) {
	const _ = ne(n, ce.__wbindgen_malloc), i = se;
	var o = Jn(e) ? 0 : ee(e, ce.__wbindgen_malloc, ce.__wbindgen_realloc), c = se, s = Jn(t) ? 0 : ne(t, ce.__wbindgen_malloc), a = se, l = Jn(r) ? 0 : ne(r, ce.__wbindgen_malloc), u = se;
	return ce.detectHdcza(_, i, o, c, s, a, l, u);
}
function x(n) {
	const e = ne(n, ce.__wbindgen_malloc), t = se, r = ce.detectNonwear(e, t);
	var _ = Vn(r[0], r[1]).slice();
	return ce.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function C(n) {
	const e = ne(n, ce.__wbindgen_malloc), t = se, r = ce.detectNonwearChoi2011(e, t);
	var _ = Vn(r[0], r[1]).slice();
	return ce.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function R(n) {
	const e = ne(n, ce.__wbindgen_malloc), t = se, r = ce.detectNonwearChoi2011Bouts(e, t);
	if (r[2]) throw te(r[1]);
	return te(r[0]);
}
function S(n, e) {
	const t = ne(n, ce.__wbindgen_malloc), r = se, _ = ce.detectNonwearChoi2011Epoch(t, r, e);
	if (_[3]) throw te(_[2]);
	var i = Vn(_[0], _[1]).slice();
	return ce.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function F(n) {
	const e = ne(n, ce.__wbindgen_malloc), t = se, r = ce.detectNonwearChoi2012(e, t);
	var _ = Vn(r[0], r[1]).slice();
	return ce.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function P(n) {
	const e = ne(n, ce.__wbindgen_malloc), t = se, r = ce.detectNonwearChoi2012Bouts(e, t);
	if (r[2]) throw te(r[1]);
	return te(r[0]);
}
function M(n) {
	const e = ne(n, ce.__wbindgen_malloc), t = se, r = ce.detectNonwearChoiBouts(e, t);
	if (r[2]) throw te(r[1]);
	return te(r[0]);
}
function U(n) {
	let e, t;
	try {
		const i = ee(n, ce.__wbindgen_malloc, ce.__wbindgen_realloc), o = se, c = ce.detectNonwearUnified(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, te(c[2]);
		return e = r, t = _, Hn(r, _);
	} finally {
		ce.__wbindgen_free(e, t, 1);
	}
}
function I(n, e, t, r, _) {
	const i = ne(n, ce.__wbindgen_malloc), o = se, c = ne(e, ce.__wbindgen_malloc), s = se, a = ne(t, ce.__wbindgen_malloc), l = se, u = ne(r, ce.__wbindgen_malloc), f = se, g = ce.epochRawData(i, o, c, s, a, l, u, f, _);
	if (g[2]) throw te(g[1]);
	return te(g[0]);
}
function z(n, e, t) {
	const r = ne(n, ce.__wbindgen_malloc), _ = se, i = ne(e, ce.__wbindgen_malloc), o = se, c = ce.epochWithBandpass(r, _, i, o, t);
	if (c[2]) throw te(c[1]);
	return te(c[0]);
}
function W(n, e) {
	let t, r;
	try {
		const o = ee(n, ce.__wbindgen_malloc, ce.__wbindgen_realloc), c = se, s = ee(e, ce.__wbindgen_malloc, ce.__wbindgen_realloc), a = se, l = ce.executeHeroRuntime(o, c, s, a);
		var _ = l[0], i = l[1];
		if (l[3]) throw _ = 0, i = 0, te(l[2]);
		return t = _, r = i, Hn(_, i);
	} finally {
		ce.__wbindgen_free(t, r, 1);
	}
}
function D(n) {
	const e = Qn(n, ce.__wbindgen_malloc), t = se, r = ce.extractCapsense(e, t);
	if (r[2]) throw te(r[1]);
	return te(r[0]);
}
function O() {
	const n = ce.getComputeCapabilitiesV1();
	if (n[2]) throw te(n[1]);
	return te(n[0]);
}
function B() {
	ce.installPanicHook();
}
function j(n) {
	const e = Qn(n, ce.__wbindgen_malloc), t = se;
	return 0 !== ce.isGeneactivFormat(e, t);
}
function G(n, e, t, r) {
	const _ = ne(n, ce.__wbindgen_malloc), i = se, o = ne(e, ce.__wbindgen_malloc), c = se, s = ne(t, ce.__wbindgen_malloc), a = se, l = ce.lstmSpectralFeatures30s(_, i, o, c, s, a, r);
	if (l[2]) throw te(l[1]);
	return te(l[0]);
}
function E(n, e, t, r, _) {
	const i = ne(n, ce.__wbindgen_malloc), o = se, c = ne(e, ce.__wbindgen_malloc), s = se, a = ne(t, ce.__wbindgen_malloc), l = se, u = ce.neishabouriCounts(i, o, c, s, a, l, r, _);
	if (u[2]) throw te(u[1]);
	return te(u[0]);
}
function N(n, e) {
	const t = Qn(n, ce.__wbindgen_malloc), r = se, _ = ce.parseActigraphCsv(t, r, e);
	if (_[2]) throw te(_[1]);
	return te(_[0]);
}
function V(n) {
	const e = ce.parseActigraphCsvBuffered(n);
	if (e[2]) throw te(e[1]);
	return te(e[0]);
}
function L(n) {
	const e = Qn(n, ce.__wbindgen_malloc), t = se, r = ce.parseCwa(e, t);
	if (r[2]) throw te(r[1]);
	return te(r[0]);
}
function X(n, e) {
	const t = Qn(n, ce.__wbindgen_malloc), r = se, _ = ee(e, ce.__wbindgen_malloc, ce.__wbindgen_realloc), i = se, o = ce.parseEpochSeries(t, r, _, i);
	if (o[2]) throw te(o[1]);
	return te(o[0]);
}
function q(n) {
	const e = Qn(n, ce.__wbindgen_malloc), t = se, r = ce.parseGeneactivBin(e, t);
	if (r[2]) throw te(r[1]);
	return te(r[0]);
}
function T(n) {
	const e = Qn(n, ce.__wbindgen_malloc), t = se, r = ce.parseGeneactivCsv(e, t);
	if (r[2]) throw te(r[1]);
	return te(r[0]);
}
function H() {
	const n = ce.parseGeneactivCsvBuffered();
	if (n[2]) throw te(n[1]);
	return te(n[0]);
}
function $(n) {
	const e = Qn(n, ce.__wbindgen_malloc), t = se, r = ce.parseGt3x(e, t);
	if (r[2]) throw te(r[1]);
	return te(r[0]);
}
function Y(n) {
	let e, t;
	try {
		const i = ee(n, ce.__wbindgen_malloc, ce.__wbindgen_realloc), o = se, c = ce.placeMarkers(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, te(c[2]);
		return e = r, t = _, Hn(r, _);
	} finally {
		ce.__wbindgen_free(e, t, 1);
	}
}
function Z(n) {
	let e, t;
	try {
		const i = ee(n, ce.__wbindgen_malloc, ce.__wbindgen_realloc), o = se, c = ce.placeNonwearMarkers(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, te(c[2]);
		return e = r, t = _, Hn(r, _);
	} finally {
		ce.__wbindgen_free(e, t, 1);
	}
}
function K(n) {
	const e = ce.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw te(e[1]);
	return te(e[0]);
}
function J(n) {
	const e = ce.prepareCompactPipelineV1(n);
	if (e[2]) throw te(e[1]);
	return te(e[0]);
}
function Q(n, e, t, r, _, i, o) {
	const c = ne(n, ce.__wbindgen_malloc), s = se, a = ne(e, ce.__wbindgen_malloc), l = se, u = ne(t, ce.__wbindgen_malloc), f = se, g = ne(r, ce.__wbindgen_malloc), w = se;
	var b = Jn(o) ? 0 : ee(o, ce.__wbindgen_malloc, ce.__wbindgen_realloc), d = se;
	const m = ce.processGeneactivRaw(c, s, a, l, u, f, g, w, _, i, b, d);
	if (m[2]) throw te(m[1]);
	return te(m[0]);
}
function nn(n) {
	const e = Qn(n, ce.__wbindgen_malloc), t = se, r = ce.processGt3xFull(e, t);
	if (r[2]) throw te(r[1]);
	return te(r[0]);
}
function en(n, e) {
	const t = Qn(n, ce.__wbindgen_malloc), r = se, _ = ce.processGt3xFullWithEpoch(t, r, e);
	if (_[2]) throw te(_[1]);
	return te(_[0]);
}
function tn(n) {
	const e = Qn(n, ce.__wbindgen_malloc), t = se, r = ce.processGt3xPart1(e, t);
	if (r[2]) throw te(r[1]);
	return te(r[0]);
}
function rn(n, e) {
	const t = Qn(n, ce.__wbindgen_malloc), r = se, _ = ce.processGt3xPart1WithEpoch(t, r, e);
	if (_[2]) throw te(_[1]);
	return te(_[0]);
}
function _n(n, e, t, r, _, i) {
	const o = ne(n, ce.__wbindgen_malloc), c = se, s = ne(e, ce.__wbindgen_malloc), a = se, l = ne(t, ce.__wbindgen_malloc), u = se;
	var f = Jn(i) ? 0 : ee(i, ce.__wbindgen_malloc, ce.__wbindgen_realloc), g = se;
	const w = ce.processRawXyz(o, c, s, a, l, u, r, _, f, g);
	if (w[2]) throw te(w[1]);
	return te(w[0]);
}
function on(n, e, t, r, _, i) {
	const o = ne(n, ce.__wbindgen_malloc), c = se, s = ne(e, ce.__wbindgen_malloc), a = se, l = ne(t, ce.__wbindgen_malloc), u = se, f = ne(r, ce.__wbindgen_malloc), g = se;
	var w = Jn(i) ? 0 : ee(i, ce.__wbindgen_malloc, ce.__wbindgen_realloc), b = se;
	const d = ce.processRawXyzImputed(o, c, s, a, l, u, f, g, _, w, b);
	if (d[2]) throw te(d[1]);
	return te(d[0]);
}
function cn(n, e, t, r, _, i, o) {
	const c = ne(n, ce.__wbindgen_malloc), s = se, a = ne(e, ce.__wbindgen_malloc), l = se, u = ne(t, ce.__wbindgen_malloc), f = se, g = ne(r, ce.__wbindgen_malloc), w = se;
	var b = Jn(i) ? 0 : ee(i, ce.__wbindgen_malloc, ce.__wbindgen_realloc), d = se;
	const m = ce.processRawXyzImputedWithEpoch(c, s, a, l, u, f, g, w, _, b, d, o);
	if (m[2]) throw te(m[1]);
	return te(m[0]);
}
function sn(n) {
	const e = Qn(n, ce.__wbindgen_malloc), t = se, r = ce.readGgirMeta(e, t);
	if (r[2]) throw te(r[1]);
	return te(r[0]);
}
function an() {
	return ce.recommended_chunk_size_mb() >>> 0;
}
function ln(n, e) {
	const t = ne(n, ce.__wbindgen_malloc), r = se, _ = ee(e, ce.__wbindgen_malloc, ce.__wbindgen_realloc), i = se, o = ce.reduceF64V1(t, r, _, i);
	if (o[2]) throw te(o[1]);
	return o[0];
}
function un(n) {
	const e = ce.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw te(e[1]);
	return te(e[0]);
}
function fn(n) {
	const e = ce.runCompactPipelineV1(n);
	if (e[2]) throw te(e[1]);
	return te(e[0]);
}
function gn(n, e) {
	const t = ce.runFullPipeline(n, e);
	if (t[2]) throw te(t[1]);
	return te(t[0]);
}
function wn(n) {
	const e = ce.runFullPipelineOutcomeV1(n);
	if (e[2]) throw te(e[1]);
	return te(e[0]);
}
function bn(n) {
	const e = ce.runFullPipelineV1(n);
	if (e[2]) throw te(e[1]);
	return te(e[0]);
}
function dn(n, e) {
	const t = ce.runGgirFromEpoch(n, e);
	if (t[2]) throw te(t[1]);
	return te(t[0]);
}
function mn(n) {
	const e = Qn(n, ce.__wbindgen_malloc), t = se, r = ce.runMilestone(e, t);
	if (r[2]) throw te(r[1]);
	return te(r[0]);
}
function hn(n) {
	const e = ce.scoreAllDays(n);
	if (e[2]) throw te(e[1]);
	return te(e[0]);
}
function pn(n, e) {
	const t = ne(n, ce.__wbindgen_malloc), r = se, _ = ce.scoreColeKripke(t, r, e);
	var i = Vn(_[0], _[1]).slice();
	return ce.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function yn(n) {
	let e, t;
	try {
		const i = ee(n, ce.__wbindgen_malloc, ce.__wbindgen_realloc), o = se, c = ce.scoreConsensus(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, te(c[2]);
		return e = r, t = _, Hn(r, _);
	} finally {
		ce.__wbindgen_free(e, t, 1);
	}
}
function vn(n) {
	const e = ce.scoreConsensusMajority(n);
	if (e[2]) throw te(e[1]);
	return te(e[0]);
}
function kn(n) {
	let e, t;
	try {
		const i = ee(n, ce.__wbindgen_malloc, ce.__wbindgen_realloc), o = se, c = ce.scoreEpochs(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, te(c[2]);
		return e = r, t = _, Hn(r, _);
	} finally {
		ce.__wbindgen_free(e, t, 1);
	}
}
function An(n) {
	const e = ne(n, ce.__wbindgen_malloc), t = se, r = ce.scoreGgirHasib(e, t);
	var _ = Vn(r[0], r[1]).slice();
	return ce.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function xn(n) {
	const e = ce.scoreGgirHasibVariant(n);
	if (e[2]) throw te(e[1]);
	return te(e[0]);
}
function Cn(n, e, t) {
	const r = ne(n, ce.__wbindgen_malloc), _ = se, i = ne(e, ce.__wbindgen_malloc), o = se, c = ce.scoreGgirSib(r, _, i, o, t);
	if (c[2]) throw te(c[1]);
	return te(c[0]);
}
function Rn(n, e) {
	const t = ne(n, ce.__wbindgen_malloc), r = se, _ = ce.scoreSadeh(t, r, e);
	var i = Vn(_[0], _[1]).slice();
	return ce.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function Sn(n) {
	const e = Qn(n, ce.__wbindgen_malloc), t = se, r = ce.streamParseFeed(e, t);
	if (r[2]) throw te(r[1]);
	return r[0] >>> 0;
}
function Fn() {
	const n = ce.streamParseFinish();
	if (n[2]) throw te(n[1]);
	return e.__wrap(n[0]);
}
function Pn() {
	const e = ce.streamParseFinishChunk();
	if (e[2]) throw te(e[1]);
	return n.__wrap(e[0]);
}
function Mn(n, e) {
	const t = ce.streamParseStart(n, e);
	if (t[1]) throw te(t[0]);
}
function Un(n, e) {
	const t = ce.streamParseStartData(n, e);
	if (t[1]) throw te(t[0]);
}
function In(n, e, t) {
	const r = ce.streamParseStartWithEpoch(n, e, t);
	if (r[1]) throw te(r[0]);
}
function zn(n, e) {
	const t = Qn(n, ce.__wbindgen_malloc), r = se, _ = ce.summarizeActimetricPreschoolWristRfClasses(t, r, e);
	if (_[2]) throw te(_[1]);
	return te(_[0]);
}
function Wn(n, e, t, r, _) {
	const i = ne(n, ce.__wbindgen_malloc), o = se, c = ne(e, ce.__wbindgen_malloc), s = se, a = ne(t, ce.__wbindgen_malloc), l = se, u = ce.zeroCrossingCounts(i, o, c, s, a, l, r, _);
	if (u[2]) throw te(u[1]);
	return te(u[0]);
}
function Dn() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(Hn(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = ee(String(e), ce.__wbindgen_malloc, ce.__wbindgen_realloc), r = se;
				Xn().setInt32(n + 4, r, !0), Xn().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				Xn().setBigInt64(n + 8, Jn(t) ? BigInt(0) : t, !0), Xn().setInt32(n + 0, !Jn(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return Jn(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = ee(Gn(e), ce.__wbindgen_malloc, ce.__wbindgen_realloc), r = se;
				Xn().setInt32(n + 4, r, !0), Xn().setInt32(n + 0, t, !0);
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
				Xn().setFloat64(n + 8, Jn(t) ? 0 : t, !0), Xn().setInt32(n + 0, !Jn(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var r = Jn(t) ? 0 : ee(t, ce.__wbindgen_malloc, ce.__wbindgen_realloc), _ = se;
				Xn().setInt32(n + 4, _, !0), Xn().setInt32(n + 0, r, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(Hn(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return Kn(function(n, e) {
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
					t = n, r = e, console.error(Hn(n, e));
				} finally {
					ce.__wbindgen_free(t, r, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return Kn(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return Kn(function(n, e) {
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
				return new Float64Array(En(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(Vn(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return Kn(function(n) {
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
				return Kn(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(Vn(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return Kn(function(n, e, t) {
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
				const t = ee(e.stack, ce.__wbindgen_malloc, ce.__wbindgen_realloc), r = se;
				Xn().setInt32(n + 4, r, !0), Xn().setInt32(n + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return Jn(n) ? 0 : jn(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return Jn(n) ? 0 : jn(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return Jn(n) ? 0 : jn(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return Jn(n) ? 0 : jn(n);
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
				return Vn(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return Hn(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = ce.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
const On = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ce.__wbg_streamchunkresult_free(n >>> 0, 1)), Bn = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ce.__wbg_streamparseresult_free(n >>> 0, 1));
function jn(n) {
	const e = ce.__externref_table_alloc();
	return ce.__wbindgen_externrefs.set(e, n), e;
}
function Gn(n) {
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
		e > 0 && (t += Gn(n[0]));
		for (let r = 1; r < e; r++) t += ", " + Gn(n[r]);
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
function En(n, e) {
	return n >>>= 0, Tn().subarray(n / 8, n / 8 + e);
}
function Nn(n, e) {
	return n >>>= 0, (null !== $n && 0 !== $n.byteLength || ($n = new Uint32Array(ce.memory.buffer)), $n).subarray(n / 4, n / 4 + e);
}
function Vn(n, e) {
	return n >>>= 0, Zn().subarray(n / 1, n / 1 + e);
}
let Ln = null;
function Xn() {
	return (null === Ln || !0 === Ln.buffer.detached || void 0 === Ln.buffer.detached && Ln.buffer !== ce.memory.buffer) && (Ln = new DataView(ce.memory.buffer)), Ln;
}
let qn = null;
function Tn() {
	return null !== qn && 0 !== qn.byteLength || (qn = new Float64Array(ce.memory.buffer)), qn;
}
function Hn(n, e) {
	return function(n, e) {
		return ie += e, ie >= _e && (re = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), re.decode(), ie = e), re.decode(Zn().subarray(n, n + e));
	}(n >>>= 0, e);
}
let $n = null, Yn = null;
function Zn() {
	return null !== Yn && 0 !== Yn.byteLength || (Yn = new Uint8Array(ce.memory.buffer)), Yn;
}
function Kn(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = jn(t);
		ce.__wbindgen_exn_store(n);
	}
}
function Jn(n) {
	return null == n;
}
function Qn(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return Zn().set(n, t / 1), se = n.length, t;
}
function ne(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return Tn().set(n, t / 8), se = n.length, t;
}
function ee(n, e, t) {
	if (void 0 === t) {
		const t = oe.encode(n), r = e(t.length, 1) >>> 0;
		return Zn().subarray(r, r + t.length).set(t), se = t.length, r;
	}
	let r = n.length, _ = e(r, 1) >>> 0;
	const i = Zn();
	let o = 0;
	for (; o < r; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[_ + o] = e;
	}
	if (o !== r) {
		0 !== o && (n = n.slice(o)), _ = t(_, r, r = o + 3 * n.length, 1) >>> 0;
		const e = Zn().subarray(_ + o, _ + r);
		o += oe.encodeInto(n, e).written, _ = t(_, r, o, 1) >>> 0;
	}
	return se = o, _;
}
function te(n) {
	const e = ce.__wbindgen_externrefs.get(n);
	return ce.__externref_table_dealloc(n), e;
}
let re = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
re.decode();
const _e = 2146435072;
let ie = 0;
const oe = new TextEncoder();
"encodeInto" in oe || (oe.encodeInto = function(n, e) {
	const t = oe.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let ce, se = 0;
function ae(n, e) {
	return ce = n.exports, Ln = null, qn = null, $n = null, Yn = null, ce.__wbindgen_start(), ce;
}
function le(n) {
	if (void 0 !== ce) return ce;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = Dn();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), ae(new WebAssembly.Instance(n, e));
}
async function ue(n) {
	if (void 0 !== ce) return ce;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-C654y_G-.wasm", "" + import.meta.url));
	const e = Dn();
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
	return ae(t);
}
export { n as StreamChunkResult, e as StreamParseResult, t as actoursVersion, r as analyzePhysicalActivityDay, _ as classifyActimetricPreschoolWristRf, i as classifyActimetricPreschoolWristRfLagLead, o as classifyActimetricPreschoolWristRfLagLeadCalibrated, c as computeAnglez5s, s as computeCircadian, a as computeEnmo5s, l as computeMimsUnit, u as computeMimsUnitDataframe, f as computeMimsUnitTimingBreakdown, g as computeMimsUnitValues, w as computeNightDifficulty, b as computeNightSignals, d as computeSleepMetrics, m as configureComputeMemoryBudgetV1, h as csvBufferAppend, p as csvBufferClear, ue as default, y as detectDetachFromAccelerationG, v as detectDeviceFormat, k as detectGgirHasptVariant, A as detectHdcza, x as detectNonwear, C as detectNonwearChoi2011, R as detectNonwearChoi2011Bouts, S as detectNonwearChoi2011Epoch, F as detectNonwearChoi2012, P as detectNonwearChoi2012Bouts, M as detectNonwearChoiBouts, U as detectNonwearUnified, I as epochRawData, z as epochWithBandpass, W as executeHeroRuntime, D as extractCapsense, O as getComputeCapabilitiesV1, le as initSync, B as installPanicHook, j as isGeneactivFormat, G as lstmSpectralFeatures30s, E as neishabouriCounts, N as parseActigraphCsv, V as parseActigraphCsvBuffered, L as parseCwa, X as parseEpochSeries, q as parseGeneactivBin, T as parseGeneactivCsv, H as parseGeneactivCsvBuffered, $ as parseGt3x, Y as placeMarkers, Z as placeNonwearMarkers, K as prepareCompactPipelineOutcomeV1, J as prepareCompactPipelineV1, Q as processGeneactivRaw, nn as processGt3xFull, en as processGt3xFullWithEpoch, tn as processGt3xPart1, rn as processGt3xPart1WithEpoch, _n as processRawXyz, on as processRawXyzImputed, cn as processRawXyzImputedWithEpoch, sn as readGgirMeta, an as recommended_chunk_size_mb, ln as reduceF64V1, un as runCompactPipelineOutcomeV1, fn as runCompactPipelineV1, gn as runFullPipeline, wn as runFullPipelineOutcomeV1, bn as runFullPipelineV1, dn as runGgirFromEpoch, mn as runMilestone, hn as scoreAllDays, pn as scoreColeKripke, yn as scoreConsensus, vn as scoreConsensusMajority, kn as scoreEpochs, An as scoreGgirHasib, xn as scoreGgirHasibVariant, Cn as scoreGgirSib, Rn as scoreSadeh, Sn as streamParseFeed, Fn as streamParseFinish, Pn as streamParseFinishChunk, Mn as streamParseStart, Un as streamParseStartData, In as streamParseStartWithEpoch, zn as summarizeActimetricPreschoolWristRfClasses, Wn as zeroCrossingCounts };
