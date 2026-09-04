var n = class n {
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
		se.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = se.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = se.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = se.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = se.streamchunkresult_axisX(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = se.streamchunkresult_axisY(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = se.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== se.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = se.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Yn(n[0], n[1]).slice(), se.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = se.streamchunkresult_counts(this.__wbg_ptr);
		var e = Vn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = se.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = Vn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = se.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = se.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return se.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = se.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = se.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== se.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = se.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Yn(n[0], n[1]).slice(), se.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = se.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = se.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = se.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== se.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return se.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return se.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return se.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = se.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = Vn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = se.streamchunkresult_temperature(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = se.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = se.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = se.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = se.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = se.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = se.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, jn.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, jn.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		se.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = se.streamparseresult_axisX(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = se.streamparseresult_axisY(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = se.streamparseresult_axisZ(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== se.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = se.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Yn(n[0], n[1]).slice(), se.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return se.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== se.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return se.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return se.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = se.streamparseresult_temperature(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = se.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = se.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = Nn(n[0], n[1]).slice();
		return se.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t() {
	let n, e;
	try {
		const t = se.actoursVersion();
		return n = t[0], e = t[1], Yn(t[0], t[1]);
	} finally {
		se.__wbindgen_free(n, e, 1);
	}
}
function r(n) {
	const e = se.aggregateEpochSeries(n);
	if (e[2]) throw re(e[1]);
	return re(e[0]);
}
function _(n) {
	let e, t;
	try {
		const i = te(n, se.__wbindgen_malloc, se.__wbindgen_realloc), o = ae, c = se.analyzePhysicalActivityDay(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, re(c[2]);
		return e = r, t = _, Yn(r, _);
	} finally {
		se.__wbindgen_free(e, t, 1);
	}
}
function i(n, e, t, r) {
	const _ = ee(n, se.__wbindgen_malloc), i = ae, o = ee(e, se.__wbindgen_malloc), c = ae, s = ee(t, se.__wbindgen_malloc), a = ae, l = se.classifyActimetricPreschoolWristRf(_, i, o, c, s, a, r);
	if (l[3]) throw re(l[2]);
	var u = Ln(l[0], l[1]).slice();
	return se.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function o(n, e, t, r) {
	const _ = ee(n, se.__wbindgen_malloc), i = ae, o = ee(e, se.__wbindgen_malloc), c = ae, s = ee(t, se.__wbindgen_malloc), a = ae, l = se.classifyActimetricPreschoolWristRfLagLead(_, i, o, c, s, a, r);
	if (l[3]) throw re(l[2]);
	var u = Ln(l[0], l[1]).slice();
	return se.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function c(n, e, t, r) {
	const _ = ee(n, se.__wbindgen_malloc), i = ae, o = ee(e, se.__wbindgen_malloc), c = ae, s = ee(t, se.__wbindgen_malloc), a = ae, l = se.classifyActimetricPreschoolWristRfLagLeadCalibrated(_, i, o, c, s, a, r);
	if (l[3]) throw re(l[2]);
	var u = Ln(l[0], l[1]).slice();
	return se.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function s(n, e, t, r) {
	const _ = ee(n, se.__wbindgen_malloc), i = ae, o = ee(e, se.__wbindgen_malloc), c = ae, s = ee(t, se.__wbindgen_malloc), a = ae, l = se.computeAnglez5s(_, i, o, c, s, a, r);
	var u = Nn(l[0], l[1]).slice();
	return se.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function a(n) {
	let e, t;
	try {
		const i = te(n, se.__wbindgen_malloc, se.__wbindgen_realloc), o = ae, c = se.computeCircadian(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, re(c[2]);
		return e = r, t = _, Yn(r, _);
	} finally {
		se.__wbindgen_free(e, t, 1);
	}
}
function l(n, e, t, r) {
	const _ = ee(n, se.__wbindgen_malloc), i = ae, o = ee(e, se.__wbindgen_malloc), c = ae, s = ee(t, se.__wbindgen_malloc), a = ae, l = se.computeEnmo5s(_, i, o, c, s, a, r);
	var u = Nn(l[0], l[1]).slice();
	return se.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function u(n, e, t, r, _) {
	const i = ee(n, se.__wbindgen_malloc), o = ae, c = ee(e, se.__wbindgen_malloc), s = ae, a = ee(t, se.__wbindgen_malloc), l = ae, u = se.computeMimsUnit(i, o, c, s, a, l, r, _);
	if (u[2]) throw re(u[1]);
	return re(u[0]);
}
function f(n, e, t, r, _) {
	const i = ee(n, se.__wbindgen_malloc), o = ae, c = ee(e, se.__wbindgen_malloc), s = ae, a = ee(t, se.__wbindgen_malloc), l = ae, u = ee(r, se.__wbindgen_malloc), f = ae, g = se.computeMimsUnitDataframe(i, o, c, s, a, l, u, f, _);
	if (g[2]) throw re(g[1]);
	return re(g[0]);
}
function g(n, e, t, r, _) {
	const i = ee(n, se.__wbindgen_malloc), o = ae, c = ee(e, se.__wbindgen_malloc), s = ae, a = ee(t, se.__wbindgen_malloc), l = ae, u = se.computeMimsUnitTimingBreakdown(i, o, c, s, a, l, r, _);
	if (u[2]) throw re(u[1]);
	return re(u[0]);
}
function w(n, e, t, r, _) {
	const i = ee(n, se.__wbindgen_malloc), o = ae, c = ee(e, se.__wbindgen_malloc), s = ae, a = ee(t, se.__wbindgen_malloc), l = ae, u = se.computeMimsUnitValues(i, o, c, s, a, l, r, _);
	if (u[3]) throw re(u[2]);
	var f = Nn(u[0], u[1]).slice();
	return se.__wbindgen_free(u[0], 8 * u[1], 8), f;
}
function b(n) {
	let e, t;
	try {
		const i = te(n, se.__wbindgen_malloc, se.__wbindgen_realloc), o = ae, c = se.computeNightDifficulty(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, re(c[2]);
		return e = r, t = _, Yn(r, _);
	} finally {
		se.__wbindgen_free(e, t, 1);
	}
}
function d(n) {
	let e, t;
	try {
		const i = te(n, se.__wbindgen_malloc, se.__wbindgen_realloc), o = ae, c = se.computeNightSignals(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, re(c[2]);
		return e = r, t = _, Yn(r, _);
	} finally {
		se.__wbindgen_free(e, t, 1);
	}
}
function m(n, e, t) {
	const r = ne(n, se.__wbindgen_malloc), _ = ae, i = ee(e, se.__wbindgen_malloc), o = ae, c = se.computeSleepMetrics(r, _, i, o, t);
	if (c[2]) throw re(c[1]);
	return re(c[0]);
}
function h(n) {
	const e = se.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw re(e[1]);
	return re(e[0]);
}
function p(n) {
	const e = ne(n, se.__wbindgen_malloc), t = ae;
	se.csvBufferAppend(e, t);
}
function y(n) {
	se.csvBufferClear(n);
}
function v(n, e) {
	const t = ee(n, se.__wbindgen_malloc), r = ae, _ = ee(e, se.__wbindgen_malloc), i = ae, o = se.detectDetachFromAccelerationG(t, r, _, i);
	if (o[3]) throw re(o[2]);
	var c = Ln(o[0], o[1]).slice();
	return se.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function k(n, e) {
	let t, r;
	try {
		const _ = ne(n, se.__wbindgen_malloc), i = ae, o = te(e, se.__wbindgen_malloc, se.__wbindgen_realloc), c = ae, s = se.detectDeviceFormat(_, i, o, c);
		return t = s[0], r = s[1], Yn(s[0], s[1]);
	} finally {
		se.__wbindgen_free(t, r, 1);
	}
}
function A(n) {
	const e = se.detectGgirHasptVariant(n);
	if (e[2]) throw re(e[1]);
	return re(e[0]);
}
function x(n, e, t, r) {
	const _ = ee(n, se.__wbindgen_malloc), i = ae;
	var o = Qn(e) ? 0 : te(e, se.__wbindgen_malloc, se.__wbindgen_realloc), c = ae, s = Qn(t) ? 0 : ee(t, se.__wbindgen_malloc), a = ae, l = Qn(r) ? 0 : ee(r, se.__wbindgen_malloc), u = ae;
	return se.detectHdcza(_, i, o, c, s, a, l, u);
}
function C(n) {
	const e = ee(n, se.__wbindgen_malloc), t = ae, r = se.detectNonwear(e, t);
	var _ = Ln(r[0], r[1]).slice();
	return se.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function R(n) {
	const e = ee(n, se.__wbindgen_malloc), t = ae, r = se.detectNonwearChoi2011(e, t);
	var _ = Ln(r[0], r[1]).slice();
	return se.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function S(n) {
	const e = ee(n, se.__wbindgen_malloc), t = ae, r = se.detectNonwearChoi2011Bouts(e, t);
	if (r[2]) throw re(r[1]);
	return re(r[0]);
}
function F(n, e) {
	const t = ee(n, se.__wbindgen_malloc), r = ae, _ = se.detectNonwearChoi2011Epoch(t, r, e);
	if (_[3]) throw re(_[2]);
	var i = Ln(_[0], _[1]).slice();
	return se.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function P(n) {
	const e = ee(n, se.__wbindgen_malloc), t = ae, r = se.detectNonwearChoi2012(e, t);
	var _ = Ln(r[0], r[1]).slice();
	return se.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function M(n) {
	const e = ee(n, se.__wbindgen_malloc), t = ae, r = se.detectNonwearChoi2012Bouts(e, t);
	if (r[2]) throw re(r[1]);
	return re(r[0]);
}
function U(n) {
	const e = ee(n, se.__wbindgen_malloc), t = ae, r = se.detectNonwearChoiBouts(e, t);
	if (r[2]) throw re(r[1]);
	return re(r[0]);
}
function I(n) {
	let e, t;
	try {
		const i = te(n, se.__wbindgen_malloc, se.__wbindgen_realloc), o = ae, c = se.detectNonwearUnified(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, re(c[2]);
		return e = r, t = _, Yn(r, _);
	} finally {
		se.__wbindgen_free(e, t, 1);
	}
}
function z(n, e, t, r, _) {
	const i = ee(n, se.__wbindgen_malloc), o = ae, c = ee(e, se.__wbindgen_malloc), s = ae, a = ee(t, se.__wbindgen_malloc), l = ae, u = ee(r, se.__wbindgen_malloc), f = ae, g = se.epochRawData(i, o, c, s, a, l, u, f, _);
	if (g[2]) throw re(g[1]);
	return re(g[0]);
}
function W(n, e, t) {
	const r = ee(n, se.__wbindgen_malloc), _ = ae, i = ee(e, se.__wbindgen_malloc), o = ae, c = se.epochWithBandpass(r, _, i, o, t);
	if (c[2]) throw re(c[1]);
	return re(c[0]);
}
function D(n, e) {
	let t, r;
	try {
		const o = te(n, se.__wbindgen_malloc, se.__wbindgen_realloc), c = ae, s = te(e, se.__wbindgen_malloc, se.__wbindgen_realloc), a = ae, l = se.executeHeroRuntime(o, c, s, a);
		var _ = l[0], i = l[1];
		if (l[3]) throw _ = 0, i = 0, re(l[2]);
		return t = _, r = i, Yn(_, i);
	} finally {
		se.__wbindgen_free(t, r, 1);
	}
}
function O(n) {
	const e = ne(n, se.__wbindgen_malloc), t = ae, r = se.extractCapsense(e, t);
	if (r[2]) throw re(r[1]);
	return re(r[0]);
}
function B() {
	const n = se.getComputeCapabilitiesV1();
	if (n[2]) throw re(n[1]);
	return re(n[0]);
}
function j() {
	se.installPanicHook();
}
function E(n) {
	const e = ne(n, se.__wbindgen_malloc), t = ae;
	return 0 !== se.isGeneactivFormat(e, t);
}
function G(n, e, t, r) {
	const _ = ee(n, se.__wbindgen_malloc), i = ae, o = ee(e, se.__wbindgen_malloc), c = ae, s = ee(t, se.__wbindgen_malloc), a = ae, l = se.lstmSpectralFeatures30s(_, i, o, c, s, a, r);
	if (l[2]) throw re(l[1]);
	return re(l[0]);
}
function N(n, e, t, r, _) {
	const i = ee(n, se.__wbindgen_malloc), o = ae, c = ee(e, se.__wbindgen_malloc), s = ae, a = ee(t, se.__wbindgen_malloc), l = ae, u = se.neishabouriCounts(i, o, c, s, a, l, r, _);
	if (u[2]) throw re(u[1]);
	return re(u[0]);
}
function V(n, e) {
	const t = ne(n, se.__wbindgen_malloc), r = ae, _ = se.parseActigraphCsv(t, r, e);
	if (_[2]) throw re(_[1]);
	return re(_[0]);
}
function L(n) {
	const e = se.parseActigraphCsvBuffered(n);
	if (e[2]) throw re(e[1]);
	return re(e[0]);
}
function X(n) {
	const e = ne(n, se.__wbindgen_malloc), t = ae, r = se.parseCwa(e, t);
	if (r[2]) throw re(r[1]);
	return re(r[0]);
}
function q(n, e) {
	const t = ne(n, se.__wbindgen_malloc), r = ae, _ = te(e, se.__wbindgen_malloc, se.__wbindgen_realloc), i = ae, o = se.parseEpochSeries(t, r, _, i);
	if (o[2]) throw re(o[1]);
	return re(o[0]);
}
function T(n) {
	const e = ne(n, se.__wbindgen_malloc), t = ae, r = se.parseGeneactivBin(e, t);
	if (r[2]) throw re(r[1]);
	return re(r[0]);
}
function H(n) {
	const e = ne(n, se.__wbindgen_malloc), t = ae, r = se.parseGeneactivCsv(e, t);
	if (r[2]) throw re(r[1]);
	return re(r[0]);
}
function Y() {
	const n = se.parseGeneactivCsvBuffered();
	if (n[2]) throw re(n[1]);
	return re(n[0]);
}
function $(n) {
	const e = ne(n, se.__wbindgen_malloc), t = ae, r = se.parseGt3x(e, t);
	if (r[2]) throw re(r[1]);
	return re(r[0]);
}
function Z(n) {
	let e, t;
	try {
		const i = te(n, se.__wbindgen_malloc, se.__wbindgen_realloc), o = ae, c = se.placeMarkers(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, re(c[2]);
		return e = r, t = _, Yn(r, _);
	} finally {
		se.__wbindgen_free(e, t, 1);
	}
}
function K(n) {
	let e, t;
	try {
		const i = te(n, se.__wbindgen_malloc, se.__wbindgen_realloc), o = ae, c = se.placeNonwearMarkers(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, re(c[2]);
		return e = r, t = _, Yn(r, _);
	} finally {
		se.__wbindgen_free(e, t, 1);
	}
}
function J(n) {
	const e = se.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw re(e[1]);
	return re(e[0]);
}
function Q(n) {
	const e = se.prepareCompactPipelineV1(n);
	if (e[2]) throw re(e[1]);
	return re(e[0]);
}
function nn(n, e, t, r, _, i, o) {
	const c = ee(n, se.__wbindgen_malloc), s = ae, a = ee(e, se.__wbindgen_malloc), l = ae, u = ee(t, se.__wbindgen_malloc), f = ae, g = ee(r, se.__wbindgen_malloc), w = ae;
	var b = Qn(o) ? 0 : te(o, se.__wbindgen_malloc, se.__wbindgen_realloc), d = ae;
	const m = se.processGeneactivRaw(c, s, a, l, u, f, g, w, _, i, b, d);
	if (m[2]) throw re(m[1]);
	return re(m[0]);
}
function en(n) {
	const e = ne(n, se.__wbindgen_malloc), t = ae, r = se.processGt3xFull(e, t);
	if (r[2]) throw re(r[1]);
	return re(r[0]);
}
function tn(n, e) {
	const t = ne(n, se.__wbindgen_malloc), r = ae, _ = se.processGt3xFullWithEpoch(t, r, e);
	if (_[2]) throw re(_[1]);
	return re(_[0]);
}
function rn(n) {
	const e = ne(n, se.__wbindgen_malloc), t = ae, r = se.processGt3xPart1(e, t);
	if (r[2]) throw re(r[1]);
	return re(r[0]);
}
function _n(n, e) {
	const t = ne(n, se.__wbindgen_malloc), r = ae, _ = se.processGt3xPart1WithEpoch(t, r, e);
	if (_[2]) throw re(_[1]);
	return re(_[0]);
}
function on(n, e, t, r, _, i) {
	const o = ee(n, se.__wbindgen_malloc), c = ae, s = ee(e, se.__wbindgen_malloc), a = ae, l = ee(t, se.__wbindgen_malloc), u = ae;
	var f = Qn(i) ? 0 : te(i, se.__wbindgen_malloc, se.__wbindgen_realloc), g = ae;
	const w = se.processRawXyz(o, c, s, a, l, u, r, _, f, g);
	if (w[2]) throw re(w[1]);
	return re(w[0]);
}
function cn(n, e, t, r, _, i) {
	const o = ee(n, se.__wbindgen_malloc), c = ae, s = ee(e, se.__wbindgen_malloc), a = ae, l = ee(t, se.__wbindgen_malloc), u = ae, f = ee(r, se.__wbindgen_malloc), g = ae;
	var w = Qn(i) ? 0 : te(i, se.__wbindgen_malloc, se.__wbindgen_realloc), b = ae;
	const d = se.processRawXyzImputed(o, c, s, a, l, u, f, g, _, w, b);
	if (d[2]) throw re(d[1]);
	return re(d[0]);
}
function sn(n, e, t, r, _, i, o) {
	const c = ee(n, se.__wbindgen_malloc), s = ae, a = ee(e, se.__wbindgen_malloc), l = ae, u = ee(t, se.__wbindgen_malloc), f = ae, g = ee(r, se.__wbindgen_malloc), w = ae;
	var b = Qn(i) ? 0 : te(i, se.__wbindgen_malloc, se.__wbindgen_realloc), d = ae;
	const m = se.processRawXyzImputedWithEpoch(c, s, a, l, u, f, g, w, _, b, d, o);
	if (m[2]) throw re(m[1]);
	return re(m[0]);
}
function an(n) {
	const e = ne(n, se.__wbindgen_malloc), t = ae, r = se.readGgirMeta(e, t);
	if (r[2]) throw re(r[1]);
	return re(r[0]);
}
function ln() {
	return se.recommended_chunk_size_mb() >>> 0;
}
function un(n, e) {
	const t = ee(n, se.__wbindgen_malloc), r = ae, _ = te(e, se.__wbindgen_malloc, se.__wbindgen_realloc), i = ae, o = se.reduceF64V1(t, r, _, i);
	if (o[2]) throw re(o[1]);
	return o[0];
}
function fn(n) {
	const e = se.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw re(e[1]);
	return re(e[0]);
}
function gn(n) {
	const e = se.runCompactPipelineV1(n);
	if (e[2]) throw re(e[1]);
	return re(e[0]);
}
function wn(n, e) {
	const t = se.runFullPipeline(n, e);
	if (t[2]) throw re(t[1]);
	return re(t[0]);
}
function bn(n) {
	const e = se.runFullPipelineOutcomeV1(n);
	if (e[2]) throw re(e[1]);
	return re(e[0]);
}
function dn(n) {
	const e = se.runFullPipelineV1(n);
	if (e[2]) throw re(e[1]);
	return re(e[0]);
}
function mn(n, e) {
	const t = se.runGgirFromEpoch(n, e);
	if (t[2]) throw re(t[1]);
	return re(t[0]);
}
function hn(n) {
	const e = ne(n, se.__wbindgen_malloc), t = ae, r = se.runMilestone(e, t);
	if (r[2]) throw re(r[1]);
	return re(r[0]);
}
function pn(n) {
	const e = se.scoreAllDays(n);
	if (e[2]) throw re(e[1]);
	return re(e[0]);
}
function yn(n, e) {
	const t = ee(n, se.__wbindgen_malloc), r = ae, _ = se.scoreColeKripke(t, r, e);
	var i = Ln(_[0], _[1]).slice();
	return se.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function vn(n) {
	let e, t;
	try {
		const i = te(n, se.__wbindgen_malloc, se.__wbindgen_realloc), o = ae, c = se.scoreConsensus(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, re(c[2]);
		return e = r, t = _, Yn(r, _);
	} finally {
		se.__wbindgen_free(e, t, 1);
	}
}
function kn(n) {
	const e = se.scoreConsensusMajority(n);
	if (e[2]) throw re(e[1]);
	return re(e[0]);
}
function An(n) {
	let e, t;
	try {
		const i = te(n, se.__wbindgen_malloc, se.__wbindgen_realloc), o = ae, c = se.scoreEpochs(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, re(c[2]);
		return e = r, t = _, Yn(r, _);
	} finally {
		se.__wbindgen_free(e, t, 1);
	}
}
function xn(n) {
	const e = ee(n, se.__wbindgen_malloc), t = ae, r = se.scoreGgirHasib(e, t);
	var _ = Ln(r[0], r[1]).slice();
	return se.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function Cn(n) {
	const e = se.scoreGgirHasibVariant(n);
	if (e[2]) throw re(e[1]);
	return re(e[0]);
}
function Rn(n, e, t) {
	const r = ee(n, se.__wbindgen_malloc), _ = ae, i = ee(e, se.__wbindgen_malloc), o = ae, c = se.scoreGgirSib(r, _, i, o, t);
	if (c[2]) throw re(c[1]);
	return re(c[0]);
}
function Sn(n, e) {
	const t = ee(n, se.__wbindgen_malloc), r = ae, _ = se.scoreSadeh(t, r, e);
	var i = Ln(_[0], _[1]).slice();
	return se.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function Fn(n) {
	const e = ne(n, se.__wbindgen_malloc), t = ae, r = se.streamParseFeed(e, t);
	if (r[2]) throw re(r[1]);
	return r[0] >>> 0;
}
function Pn() {
	const n = se.streamParseFinish();
	if (n[2]) throw re(n[1]);
	return e.__wrap(n[0]);
}
function Mn() {
	const e = se.streamParseFinishChunk();
	if (e[2]) throw re(e[1]);
	return n.__wrap(e[0]);
}
function Un(n, e) {
	const t = se.streamParseStart(n, e);
	if (t[1]) throw re(t[0]);
}
function In(n, e) {
	const t = se.streamParseStartData(n, e);
	if (t[1]) throw re(t[0]);
}
function zn(n, e, t) {
	const r = se.streamParseStartWithEpoch(n, e, t);
	if (r[1]) throw re(r[0]);
}
function Wn(n, e) {
	const t = ne(n, se.__wbindgen_malloc), r = ae, _ = se.summarizeActimetricPreschoolWristRfClasses(t, r, e);
	if (_[2]) throw re(_[1]);
	return re(_[0]);
}
function Dn(n, e, t, r, _) {
	const i = ee(n, se.__wbindgen_malloc), o = ae, c = ee(e, se.__wbindgen_malloc), s = ae, a = ee(t, se.__wbindgen_malloc), l = ae, u = se.zeroCrossingCounts(i, o, c, s, a, l, r, _);
	if (u[2]) throw re(u[1]);
	return re(u[0]);
}
function On() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(Yn(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = te(String(e), se.__wbindgen_malloc, se.__wbindgen_realloc), r = ae;
				qn().setInt32(n + 4, r, !0), qn().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				qn().setBigInt64(n + 8, Qn(t) ? BigInt(0) : t, !0), qn().setInt32(n + 0, !Qn(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return Qn(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = te(Gn(e), se.__wbindgen_malloc, se.__wbindgen_realloc), r = ae;
				qn().setInt32(n + 4, r, !0), qn().setInt32(n + 0, t, !0);
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
				qn().setFloat64(n + 8, Qn(t) ? 0 : t, !0), qn().setInt32(n + 0, !Qn(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var r = Qn(t) ? 0 : te(t, se.__wbindgen_malloc, se.__wbindgen_realloc), _ = ae;
				qn().setInt32(n + 4, _, !0), qn().setInt32(n + 0, r, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(Yn(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return Jn(function(n, e) {
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
					t = n, r = e, console.error(Yn(n, e));
				} finally {
					se.__wbindgen_free(t, r, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return Jn(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return Jn(function(n, e) {
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
				return new Float64Array(Nn(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(Ln(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return Jn(function(n) {
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
				return Jn(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(Ln(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return Jn(function(n, e, t) {
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
				const t = te(e.stack, se.__wbindgen_malloc, se.__wbindgen_realloc), r = ae;
				qn().setInt32(n + 4, r, !0), qn().setInt32(n + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return Qn(n) ? 0 : En(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return Qn(n) ? 0 : En(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return Qn(n) ? 0 : En(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return Qn(n) ? 0 : En(n);
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
				return Ln(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return Yn(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = se.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
const Bn = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => se.__wbg_streamchunkresult_free(n >>> 0, 1)), jn = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => se.__wbg_streamparseresult_free(n >>> 0, 1));
function En(n) {
	const e = se.__externref_table_alloc();
	return se.__wbindgen_externrefs.set(e, n), e;
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
function Nn(n, e) {
	return n >>>= 0, Hn().subarray(n / 8, n / 8 + e);
}
function Vn(n, e) {
	return n >>>= 0, (null !== $n && 0 !== $n.byteLength || ($n = new Uint32Array(se.memory.buffer)), $n).subarray(n / 4, n / 4 + e);
}
function Ln(n, e) {
	return n >>>= 0, Kn().subarray(n / 1, n / 1 + e);
}
let Xn = null;
function qn() {
	return (null === Xn || !0 === Xn.buffer.detached || void 0 === Xn.buffer.detached && Xn.buffer !== se.memory.buffer) && (Xn = new DataView(se.memory.buffer)), Xn;
}
let Tn = null;
function Hn() {
	return null !== Tn && 0 !== Tn.byteLength || (Tn = new Float64Array(se.memory.buffer)), Tn;
}
function Yn(n, e) {
	return function(n, e) {
		return oe += e, oe >= ie && (_e = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), _e.decode(), oe = e), _e.decode(Kn().subarray(n, n + e));
	}(n >>>= 0, e);
}
let $n = null, Zn = null;
function Kn() {
	return null !== Zn && 0 !== Zn.byteLength || (Zn = new Uint8Array(se.memory.buffer)), Zn;
}
function Jn(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = En(t);
		se.__wbindgen_exn_store(n);
	}
}
function Qn(n) {
	return null == n;
}
function ne(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return Kn().set(n, t / 1), ae = n.length, t;
}
function ee(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return Hn().set(n, t / 8), ae = n.length, t;
}
function te(n, e, t) {
	if (void 0 === t) {
		const t = ce.encode(n), r = e(t.length, 1) >>> 0;
		return Kn().subarray(r, r + t.length).set(t), ae = t.length, r;
	}
	let r = n.length, _ = e(r, 1) >>> 0;
	const i = Kn();
	let o = 0;
	for (; o < r; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[_ + o] = e;
	}
	if (o !== r) {
		0 !== o && (n = n.slice(o)), _ = t(_, r, r = o + 3 * n.length, 1) >>> 0;
		const e = Kn().subarray(_ + o, _ + r);
		o += ce.encodeInto(n, e).written, _ = t(_, r, o, 1) >>> 0;
	}
	return ae = o, _;
}
function re(n) {
	const e = se.__wbindgen_externrefs.get(n);
	return se.__externref_table_dealloc(n), e;
}
let _e = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
_e.decode();
const ie = 2146435072;
let oe = 0;
const ce = new TextEncoder();
"encodeInto" in ce || (ce.encodeInto = function(n, e) {
	const t = ce.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let se, ae = 0;
function le(n, e) {
	return se = n.exports, Xn = null, Tn = null, $n = null, Zn = null, se.__wbindgen_start(), se;
}
function ue(n) {
	if (void 0 !== se) return se;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = On();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), le(new WebAssembly.Instance(n, e));
}
async function fe(n) {
	if (void 0 !== se) return se;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-CwEPaY7X.wasm", "" + import.meta.url));
	const e = On();
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
	return le(t);
}
export { n as StreamChunkResult, e as StreamParseResult, t as actoursVersion, r as aggregateEpochSeries, _ as analyzePhysicalActivityDay, i as classifyActimetricPreschoolWristRf, o as classifyActimetricPreschoolWristRfLagLead, c as classifyActimetricPreschoolWristRfLagLeadCalibrated, s as computeAnglez5s, a as computeCircadian, l as computeEnmo5s, u as computeMimsUnit, f as computeMimsUnitDataframe, g as computeMimsUnitTimingBreakdown, w as computeMimsUnitValues, b as computeNightDifficulty, d as computeNightSignals, m as computeSleepMetrics, h as configureComputeMemoryBudgetV1, p as csvBufferAppend, y as csvBufferClear, fe as default, v as detectDetachFromAccelerationG, k as detectDeviceFormat, A as detectGgirHasptVariant, x as detectHdcza, C as detectNonwear, R as detectNonwearChoi2011, S as detectNonwearChoi2011Bouts, F as detectNonwearChoi2011Epoch, P as detectNonwearChoi2012, M as detectNonwearChoi2012Bouts, U as detectNonwearChoiBouts, I as detectNonwearUnified, z as epochRawData, W as epochWithBandpass, D as executeHeroRuntime, O as extractCapsense, B as getComputeCapabilitiesV1, ue as initSync, j as installPanicHook, E as isGeneactivFormat, G as lstmSpectralFeatures30s, N as neishabouriCounts, V as parseActigraphCsv, L as parseActigraphCsvBuffered, X as parseCwa, q as parseEpochSeries, T as parseGeneactivBin, H as parseGeneactivCsv, Y as parseGeneactivCsvBuffered, $ as parseGt3x, Z as placeMarkers, K as placeNonwearMarkers, J as prepareCompactPipelineOutcomeV1, Q as prepareCompactPipelineV1, nn as processGeneactivRaw, en as processGt3xFull, tn as processGt3xFullWithEpoch, rn as processGt3xPart1, _n as processGt3xPart1WithEpoch, on as processRawXyz, cn as processRawXyzImputed, sn as processRawXyzImputedWithEpoch, an as readGgirMeta, ln as recommended_chunk_size_mb, un as reduceF64V1, fn as runCompactPipelineOutcomeV1, gn as runCompactPipelineV1, wn as runFullPipeline, bn as runFullPipelineOutcomeV1, dn as runFullPipelineV1, mn as runGgirFromEpoch, hn as runMilestone, pn as scoreAllDays, yn as scoreColeKripke, vn as scoreConsensus, kn as scoreConsensusMajority, An as scoreEpochs, xn as scoreGgirHasib, Cn as scoreGgirHasibVariant, Rn as scoreGgirSib, Sn as scoreSadeh, Fn as streamParseFeed, Pn as streamParseFinish, Mn as streamParseFinishChunk, Un as streamParseStart, In as streamParseStartData, zn as streamParseStartWithEpoch, Wn as summarizeActimetricPreschoolWristRfClasses, Dn as zeroCrossingCounts };
