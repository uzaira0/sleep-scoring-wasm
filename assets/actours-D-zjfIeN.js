var n = class n {
	static __wrap(e) {
		e >>>= 0;
		const t = Object.create(n.prototype);
		return t.__wbg_ptr = e, En.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, En.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		ue.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = ue.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = ue.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = ue.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = ue.streamchunkresult_axisX(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ue.streamchunkresult_axisY(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ue.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ue.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ue.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Kn(n[0], n[1]).slice(), ue.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = ue.streamchunkresult_counts(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = ue.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = ue.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = ue.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get headerRowsSkipped() {
		return ue.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = ue.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = ue.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== ue.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = ue.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Kn(n[0], n[1]).slice(), ue.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = ue.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = ue.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = ue.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== ue.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ue.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return ue.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ue.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = ue.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = qn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = ue.streamchunkresult_temperature(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ue.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = ue.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ue.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = ue.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = ue.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = ue.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var e = class n {
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
		ue.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = ue.streamparseresult_axisX(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = ue.streamparseresult_axisY(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = ue.streamparseresult_axisZ(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get canonicalPassDegraded() {
		return 0 !== ue.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = ue.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = Kn(n[0], n[1]).slice(), ue.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return ue.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== ue.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ue.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ue.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = ue.streamparseresult_temperature(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = ue.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = ue.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = Xn(n[0], n[1]).slice();
		return ue.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function t() {
	let n, e;
	try {
		const t = ue.actoursVersion();
		return n = t[0], e = t[1], Kn(t[0], t[1]);
	} finally {
		ue.__wbindgen_free(n, e, 1);
	}
}
function r(n) {
	const e = ue.aggregateEpochSeries(n);
	if (e[2]) throw oe(e[1]);
	return oe(e[0]);
}
function _(n) {
	let e, t;
	try {
		const i = ie(n, ue.__wbindgen_malloc, ue.__wbindgen_realloc), o = fe, c = ue.analyzePhysicalActivityDay(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, oe(c[2]);
		return e = r, t = _, Kn(r, _);
	} finally {
		ue.__wbindgen_free(e, t, 1);
	}
}
function i(n, e, t, r) {
	const _ = _e(n, ue.__wbindgen_malloc), i = fe, o = _e(e, ue.__wbindgen_malloc), c = fe, s = _e(t, ue.__wbindgen_malloc), a = fe, l = ue.classifyActimetricPreschoolWristRf(_, i, o, c, s, a, r);
	if (l[3]) throw oe(l[2]);
	var u = Tn(l[0], l[1]).slice();
	return ue.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function o(n, e, t, r) {
	const _ = _e(n, ue.__wbindgen_malloc), i = fe, o = _e(e, ue.__wbindgen_malloc), c = fe, s = _e(t, ue.__wbindgen_malloc), a = fe, l = ue.classifyActimetricPreschoolWristRfLagLead(_, i, o, c, s, a, r);
	if (l[3]) throw oe(l[2]);
	var u = Tn(l[0], l[1]).slice();
	return ue.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function c(n, e, t, r) {
	const _ = _e(n, ue.__wbindgen_malloc), i = fe, o = _e(e, ue.__wbindgen_malloc), c = fe, s = _e(t, ue.__wbindgen_malloc), a = fe, l = ue.classifyActimetricPreschoolWristRfLagLeadCalibrated(_, i, o, c, s, a, r);
	if (l[3]) throw oe(l[2]);
	var u = Tn(l[0], l[1]).slice();
	return ue.__wbindgen_free(l[0], 1 * l[1], 1), u;
}
function s(n, e, t, r) {
	const _ = _e(n, ue.__wbindgen_malloc), i = fe, o = _e(e, ue.__wbindgen_malloc), c = fe, s = _e(t, ue.__wbindgen_malloc), a = fe, l = ue.computeAnglez5s(_, i, o, c, s, a, r);
	var u = Xn(l[0], l[1]).slice();
	return ue.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function a(n) {
	let e, t;
	try {
		const i = ie(n, ue.__wbindgen_malloc, ue.__wbindgen_realloc), o = fe, c = ue.computeCircadian(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, oe(c[2]);
		return e = r, t = _, Kn(r, _);
	} finally {
		ue.__wbindgen_free(e, t, 1);
	}
}
function l(n, e, t, r) {
	const _ = _e(n, ue.__wbindgen_malloc), i = fe, o = _e(e, ue.__wbindgen_malloc), c = fe, s = _e(t, ue.__wbindgen_malloc), a = fe, l = ue.computeEnmo5s(_, i, o, c, s, a, r);
	var u = Xn(l[0], l[1]).slice();
	return ue.__wbindgen_free(l[0], 8 * l[1], 8), u;
}
function u(n, e, t, r, _) {
	const i = _e(n, ue.__wbindgen_malloc), o = fe, c = _e(e, ue.__wbindgen_malloc), s = fe, a = _e(t, ue.__wbindgen_malloc), l = fe, u = ue.computeMimsUnit(i, o, c, s, a, l, r, _);
	if (u[2]) throw oe(u[1]);
	return oe(u[0]);
}
function f(n, e, t, r, _) {
	const i = _e(n, ue.__wbindgen_malloc), o = fe, c = _e(e, ue.__wbindgen_malloc), s = fe, a = _e(t, ue.__wbindgen_malloc), l = fe, u = _e(r, ue.__wbindgen_malloc), f = fe, w = ue.computeMimsUnitDataframe(i, o, c, s, a, l, u, f, _);
	if (w[2]) throw oe(w[1]);
	return oe(w[0]);
}
function w(n, e, t, r, _) {
	const i = _e(n, ue.__wbindgen_malloc), o = fe, c = _e(e, ue.__wbindgen_malloc), s = fe, a = _e(t, ue.__wbindgen_malloc), l = fe, u = ue.computeMimsUnitTimingBreakdown(i, o, c, s, a, l, r, _);
	if (u[2]) throw oe(u[1]);
	return oe(u[0]);
}
function g(n, e, t, r, _) {
	const i = _e(n, ue.__wbindgen_malloc), o = fe, c = _e(e, ue.__wbindgen_malloc), s = fe, a = _e(t, ue.__wbindgen_malloc), l = fe, u = ue.computeMimsUnitValues(i, o, c, s, a, l, r, _);
	if (u[3]) throw oe(u[2]);
	var f = Xn(u[0], u[1]).slice();
	return ue.__wbindgen_free(u[0], 8 * u[1], 8), f;
}
function b(n) {
	let e, t;
	try {
		const i = ie(n, ue.__wbindgen_malloc, ue.__wbindgen_realloc), o = fe, c = ue.computeNightDifficulty(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, oe(c[2]);
		return e = r, t = _, Kn(r, _);
	} finally {
		ue.__wbindgen_free(e, t, 1);
	}
}
function d(n) {
	let e, t;
	try {
		const i = ie(n, ue.__wbindgen_malloc, ue.__wbindgen_realloc), o = fe, c = ue.computeNightSignals(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, oe(c[2]);
		return e = r, t = _, Kn(r, _);
	} finally {
		ue.__wbindgen_free(e, t, 1);
	}
}
function m(n, e, t) {
	const r = re(n, ue.__wbindgen_malloc), _ = fe, i = _e(e, ue.__wbindgen_malloc), o = fe, c = ue.computeSleepMetrics(r, _, i, o, t);
	if (c[2]) throw oe(c[1]);
	return oe(c[0]);
}
function h(n) {
	const e = ue.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw oe(e[1]);
	return oe(e[0]);
}
function p(n) {
	const e = re(n, ue.__wbindgen_malloc), t = fe;
	ue.csvBufferAppend(e, t);
}
function y(n) {
	ue.csvBufferClear(n);
}
function v(n, e) {
	const t = _e(n, ue.__wbindgen_malloc), r = fe, _ = _e(e, ue.__wbindgen_malloc), i = fe, o = ue.detectDetachFromAccelerationG(t, r, _, i);
	if (o[3]) throw oe(o[2]);
	var c = Tn(o[0], o[1]).slice();
	return ue.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function k(n, e) {
	let t, r;
	try {
		const _ = re(n, ue.__wbindgen_malloc), i = fe, o = ie(e, ue.__wbindgen_malloc, ue.__wbindgen_realloc), c = fe, s = ue.detectDeviceFormat(_, i, o, c);
		return t = s[0], r = s[1], Kn(s[0], s[1]);
	} finally {
		ue.__wbindgen_free(t, r, 1);
	}
}
function A(n) {
	const e = ue.detectGgirHasptVariant(n);
	if (e[2]) throw oe(e[1]);
	return oe(e[0]);
}
function x(n, e, t, r) {
	const _ = _e(n, ue.__wbindgen_malloc), i = fe;
	var o = te(e) ? 0 : ie(e, ue.__wbindgen_malloc, ue.__wbindgen_realloc), c = fe, s = te(t) ? 0 : _e(t, ue.__wbindgen_malloc), a = fe, l = te(r) ? 0 : _e(r, ue.__wbindgen_malloc), u = fe;
	return ue.detectHdcza(_, i, o, c, s, a, l, u);
}
function R(n) {
	const e = _e(n, ue.__wbindgen_malloc), t = fe, r = ue.detectNonwear(e, t);
	var _ = Tn(r[0], r[1]).slice();
	return ue.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function C(n) {
	const e = _e(n, ue.__wbindgen_malloc), t = fe, r = ue.detectNonwearChoi2011(e, t);
	var _ = Tn(r[0], r[1]).slice();
	return ue.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function S(n) {
	const e = _e(n, ue.__wbindgen_malloc), t = fe, r = ue.detectNonwearChoi2011Bouts(e, t);
	if (r[2]) throw oe(r[1]);
	return oe(r[0]);
}
function F(n, e) {
	const t = _e(n, ue.__wbindgen_malloc), r = fe, _ = ue.detectNonwearChoi2011Epoch(t, r, e);
	if (_[3]) throw oe(_[2]);
	var i = Tn(_[0], _[1]).slice();
	return ue.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function P(n) {
	const e = _e(n, ue.__wbindgen_malloc), t = fe, r = ue.detectNonwearChoi2012(e, t);
	var _ = Tn(r[0], r[1]).slice();
	return ue.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function M(n) {
	const e = _e(n, ue.__wbindgen_malloc), t = fe, r = ue.detectNonwearChoi2012Bouts(e, t);
	if (r[2]) throw oe(r[1]);
	return oe(r[0]);
}
function U(n) {
	const e = _e(n, ue.__wbindgen_malloc), t = fe, r = ue.detectNonwearChoiBouts(e, t);
	if (r[2]) throw oe(r[1]);
	return oe(r[0]);
}
function I(n) {
	let e, t;
	try {
		const i = ie(n, ue.__wbindgen_malloc, ue.__wbindgen_realloc), o = fe, c = ue.detectNonwearUnified(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, oe(c[2]);
		return e = r, t = _, Kn(r, _);
	} finally {
		ue.__wbindgen_free(e, t, 1);
	}
}
function z(n, e, t, r, _) {
	const i = _e(n, ue.__wbindgen_malloc), o = fe, c = _e(e, ue.__wbindgen_malloc), s = fe, a = _e(t, ue.__wbindgen_malloc), l = fe, u = _e(r, ue.__wbindgen_malloc), f = fe, w = ue.epochRawData(i, o, c, s, a, l, u, f, _);
	if (w[2]) throw oe(w[1]);
	return oe(w[0]);
}
function W(n, e, t) {
	const r = _e(n, ue.__wbindgen_malloc), _ = fe, i = _e(e, ue.__wbindgen_malloc), o = fe, c = ue.epochWithBandpass(r, _, i, o, t);
	if (c[2]) throw oe(c[1]);
	return oe(c[0]);
}
function B(n, e) {
	let t, r;
	try {
		const o = ie(n, ue.__wbindgen_malloc, ue.__wbindgen_realloc), c = fe, s = ie(e, ue.__wbindgen_malloc, ue.__wbindgen_realloc), a = fe, l = ue.executeHeroRuntime(o, c, s, a);
		var _ = l[0], i = l[1];
		if (l[3]) throw _ = 0, i = 0, oe(l[2]);
		return t = _, r = i, Kn(_, i);
	} finally {
		ue.__wbindgen_free(t, r, 1);
	}
}
function D(n) {
	const e = re(n, ue.__wbindgen_malloc), t = fe, r = ue.extractCapsense(e, t);
	if (r[2]) throw oe(r[1]);
	return oe(r[0]);
}
function O() {
	const n = ue.getComputeCapabilitiesV1();
	if (n[2]) throw oe(n[1]);
	return oe(n[0]);
}
function j() {
	ue.installPanicHook();
}
function G(n) {
	const e = re(n, ue.__wbindgen_malloc), t = fe;
	return 0 !== ue.isGeneactivFormat(e, t);
}
function E(n, e, t, r) {
	const _ = _e(n, ue.__wbindgen_malloc), i = fe, o = _e(e, ue.__wbindgen_malloc), c = fe, s = _e(t, ue.__wbindgen_malloc), a = fe, l = ue.lstmSpectralFeatures30s(_, i, o, c, s, a, r);
	if (l[2]) throw oe(l[1]);
	return oe(l[0]);
}
function N(n, e, t, r, _) {
	const i = _e(n, ue.__wbindgen_malloc), o = fe, c = _e(e, ue.__wbindgen_malloc), s = fe, a = _e(t, ue.__wbindgen_malloc), l = fe, u = ue.neishabouriCounts(i, o, c, s, a, l, r, _);
	if (u[2]) throw oe(u[1]);
	return oe(u[0]);
}
function V(n, e) {
	const t = re(n, ue.__wbindgen_malloc), r = fe, _ = ue.parseActigraphCsv(t, r, e);
	if (_[2]) throw oe(_[1]);
	return oe(_[0]);
}
function L(n) {
	const e = ue.parseActigraphCsvBuffered(n);
	if (e[2]) throw oe(e[1]);
	return oe(e[0]);
}
function X(n) {
	const e = re(n, ue.__wbindgen_malloc), t = fe, r = ue.parseCwa(e, t);
	if (r[2]) throw oe(r[1]);
	return oe(r[0]);
}
function q(n, e) {
	const t = re(n, ue.__wbindgen_malloc), r = fe, _ = ie(e, ue.__wbindgen_malloc, ue.__wbindgen_realloc), i = fe, o = ue.parseEpochSeries(t, r, _, i);
	if (o[2]) throw oe(o[1]);
	return oe(o[0]);
}
function T(n) {
	const e = re(n, ue.__wbindgen_malloc), t = fe, r = ue.parseGeneactivBin(e, t);
	if (r[2]) throw oe(r[1]);
	return oe(r[0]);
}
function H(n) {
	const e = re(n, ue.__wbindgen_malloc), t = fe, r = ue.parseGeneactivCsv(e, t);
	if (r[2]) throw oe(r[1]);
	return oe(r[0]);
}
function $() {
	const n = ue.parseGeneactivCsvBuffered();
	if (n[2]) throw oe(n[1]);
	return oe(n[0]);
}
function Y(n) {
	const e = re(n, ue.__wbindgen_malloc), t = fe, r = ue.parseGt3x(e, t);
	if (r[2]) throw oe(r[1]);
	return oe(r[0]);
}
function Z(n) {
	let e, t;
	try {
		const i = ie(n, ue.__wbindgen_malloc, ue.__wbindgen_realloc), o = fe, c = ue.placeMarkers(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, oe(c[2]);
		return e = r, t = _, Kn(r, _);
	} finally {
		ue.__wbindgen_free(e, t, 1);
	}
}
function K(n) {
	let e, t;
	try {
		const i = ie(n, ue.__wbindgen_malloc, ue.__wbindgen_realloc), o = fe, c = ue.placeNonwearMarkers(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, oe(c[2]);
		return e = r, t = _, Kn(r, _);
	} finally {
		ue.__wbindgen_free(e, t, 1);
	}
}
function J(n) {
	const e = ue.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw oe(e[1]);
	return oe(e[0]);
}
function Q(n) {
	const e = ue.prepareCompactPipelineV1(n);
	if (e[2]) throw oe(e[1]);
	return oe(e[0]);
}
function nn(n, e, t, r, _, i, o) {
	const c = _e(n, ue.__wbindgen_malloc), s = fe, a = _e(e, ue.__wbindgen_malloc), l = fe, u = _e(t, ue.__wbindgen_malloc), f = fe, w = _e(r, ue.__wbindgen_malloc), g = fe;
	var b = te(o) ? 0 : ie(o, ue.__wbindgen_malloc, ue.__wbindgen_realloc), d = fe;
	const m = ue.processGeneactivRaw(c, s, a, l, u, f, w, g, _, i, b, d);
	if (m[2]) throw oe(m[1]);
	return oe(m[0]);
}
function en(n) {
	const e = re(n, ue.__wbindgen_malloc), t = fe, r = ue.processGt3xFull(e, t);
	if (r[2]) throw oe(r[1]);
	return oe(r[0]);
}
function tn(n, e) {
	const t = re(n, ue.__wbindgen_malloc), r = fe, _ = ue.processGt3xFullWithEpoch(t, r, e);
	if (_[2]) throw oe(_[1]);
	return oe(_[0]);
}
function rn(n) {
	const e = re(n, ue.__wbindgen_malloc), t = fe, r = ue.processGt3xPart1(e, t);
	if (r[2]) throw oe(r[1]);
	return oe(r[0]);
}
function _n(n, e) {
	const t = re(n, ue.__wbindgen_malloc), r = fe, _ = ue.processGt3xPart1WithEpoch(t, r, e);
	if (_[2]) throw oe(_[1]);
	return oe(_[0]);
}
function on(n, e, t, r, _, i) {
	const o = _e(n, ue.__wbindgen_malloc), c = fe, s = _e(e, ue.__wbindgen_malloc), a = fe, l = _e(t, ue.__wbindgen_malloc), u = fe;
	var f = te(i) ? 0 : ie(i, ue.__wbindgen_malloc, ue.__wbindgen_realloc), w = fe;
	const g = ue.processRawXyz(o, c, s, a, l, u, r, _, f, w);
	if (g[2]) throw oe(g[1]);
	return oe(g[0]);
}
function cn(n, e, t, r, _, i) {
	const o = _e(n, ue.__wbindgen_malloc), c = fe, s = _e(e, ue.__wbindgen_malloc), a = fe, l = _e(t, ue.__wbindgen_malloc), u = fe, f = _e(r, ue.__wbindgen_malloc), w = fe;
	var g = te(i) ? 0 : ie(i, ue.__wbindgen_malloc, ue.__wbindgen_realloc), b = fe;
	const d = ue.processRawXyzImputed(o, c, s, a, l, u, f, w, _, g, b);
	if (d[2]) throw oe(d[1]);
	return oe(d[0]);
}
function sn(n, e, t, r, _, i, o) {
	const c = _e(n, ue.__wbindgen_malloc), s = fe, a = _e(e, ue.__wbindgen_malloc), l = fe, u = _e(t, ue.__wbindgen_malloc), f = fe, w = _e(r, ue.__wbindgen_malloc), g = fe;
	var b = te(i) ? 0 : ie(i, ue.__wbindgen_malloc, ue.__wbindgen_realloc), d = fe;
	const m = ue.processRawXyzImputedWithEpoch(c, s, a, l, u, f, w, g, _, b, d, o);
	if (m[2]) throw oe(m[1]);
	return oe(m[0]);
}
function an(n) {
	const e = re(n, ue.__wbindgen_malloc), t = fe, r = ue.readGgirMeta(e, t);
	if (r[2]) throw oe(r[1]);
	return oe(r[0]);
}
function ln() {
	return ue.recommended_chunk_size_mb() >>> 0;
}
function un(n, e) {
	const t = _e(n, ue.__wbindgen_malloc), r = fe, _ = ie(e, ue.__wbindgen_malloc, ue.__wbindgen_realloc), i = fe, o = ue.reduceF64V1(t, r, _, i);
	if (o[2]) throw oe(o[1]);
	return o[0];
}
function fn(n) {
	const e = ue.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw oe(e[1]);
	return oe(e[0]);
}
function wn(n) {
	const e = ue.runCompactPipelineV1(n);
	if (e[2]) throw oe(e[1]);
	return oe(e[0]);
}
function gn(n, e) {
	const t = ue.runFullPipeline(n, e);
	if (t[2]) throw oe(t[1]);
	return oe(t[0]);
}
function bn(n) {
	const e = ue.runFullPipelineOutcomeV1(n);
	if (e[2]) throw oe(e[1]);
	return oe(e[0]);
}
function dn(n) {
	const e = ue.runFullPipelineV1(n);
	if (e[2]) throw oe(e[1]);
	return oe(e[0]);
}
function mn(n, e) {
	const t = ue.runGgirFromEpoch(n, e);
	if (t[2]) throw oe(t[1]);
	return oe(t[0]);
}
function hn(n) {
	const e = re(n, ue.__wbindgen_malloc), t = fe, r = ue.runMilestone(e, t);
	if (r[2]) throw oe(r[1]);
	return oe(r[0]);
}
function pn(n) {
	const e = ue.scoreAllDays(n);
	if (e[2]) throw oe(e[1]);
	return oe(e[0]);
}
function yn(n, e) {
	const t = _e(n, ue.__wbindgen_malloc), r = fe, _ = ue.scoreColeKripke(t, r, e);
	var i = Tn(_[0], _[1]).slice();
	return ue.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function vn(n) {
	let e, t;
	try {
		const i = ie(n, ue.__wbindgen_malloc, ue.__wbindgen_realloc), o = fe, c = ue.scoreConsensus(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, oe(c[2]);
		return e = r, t = _, Kn(r, _);
	} finally {
		ue.__wbindgen_free(e, t, 1);
	}
}
function kn(n) {
	const e = ue.scoreConsensusMajority(n);
	if (e[2]) throw oe(e[1]);
	return oe(e[0]);
}
function An(n) {
	let e, t;
	try {
		const i = ie(n, ue.__wbindgen_malloc, ue.__wbindgen_realloc), o = fe, c = ue.scoreEpochs(i, o);
		var r = c[0], _ = c[1];
		if (c[3]) throw r = 0, _ = 0, oe(c[2]);
		return e = r, t = _, Kn(r, _);
	} finally {
		ue.__wbindgen_free(e, t, 1);
	}
}
function xn(n) {
	const e = _e(n, ue.__wbindgen_malloc), t = fe, r = ue.scoreGgirHasib(e, t);
	var _ = Tn(r[0], r[1]).slice();
	return ue.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function Rn(n) {
	const e = ue.scoreGgirHasibVariant(n);
	if (e[2]) throw oe(e[1]);
	return oe(e[0]);
}
function Cn(n, e, t) {
	const r = _e(n, ue.__wbindgen_malloc), _ = fe, i = _e(e, ue.__wbindgen_malloc), o = fe, c = ue.scoreGgirSib(r, _, i, o, t);
	if (c[2]) throw oe(c[1]);
	return oe(c[0]);
}
function Sn(n, e) {
	const t = _e(n, ue.__wbindgen_malloc), r = fe, _ = ue.scoreSadeh(t, r, e);
	var i = Tn(_[0], _[1]).slice();
	return ue.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function Fn(n) {
	const e = re(n, ue.__wbindgen_malloc), t = fe, r = ue.sha256StreamFeed(e, t);
	if (r[1]) throw oe(r[0]);
}
function Pn() {
	let n, e;
	try {
		const _ = ue.sha256StreamFinish();
		var t = _[0], r = _[1];
		if (_[3]) throw t = 0, r = 0, oe(_[2]);
		return n = t, e = r, Kn(t, r);
	} finally {
		ue.__wbindgen_free(n, e, 1);
	}
}
function Mn() {
	ue.sha256StreamStart();
}
function Un(n) {
	const e = re(n, ue.__wbindgen_malloc), t = fe, r = ue.streamParseFeed(e, t);
	if (r[2]) throw oe(r[1]);
	return r[0] >>> 0;
}
function In() {
	const n = ue.streamParseFinish();
	if (n[2]) throw oe(n[1]);
	return e.__wrap(n[0]);
}
function zn() {
	const e = ue.streamParseFinishChunk();
	if (e[2]) throw oe(e[1]);
	return n.__wrap(e[0]);
}
function Wn(n, e) {
	const t = ue.streamParseStart(n, e);
	if (t[1]) throw oe(t[0]);
}
function Bn(n, e) {
	const t = ue.streamParseStartData(n, e);
	if (t[1]) throw oe(t[0]);
}
function Dn(n, e, t) {
	const r = ue.streamParseStartWithEpoch(n, e, t);
	if (r[1]) throw oe(r[0]);
}
function On(n, e) {
	const t = re(n, ue.__wbindgen_malloc), r = fe, _ = ue.summarizeActimetricPreschoolWristRfClasses(t, r, e);
	if (_[2]) throw oe(_[1]);
	return oe(_[0]);
}
function jn(n, e, t, r, _) {
	const i = _e(n, ue.__wbindgen_malloc), o = fe, c = _e(e, ue.__wbindgen_malloc), s = fe, a = _e(t, ue.__wbindgen_malloc), l = fe, u = ue.zeroCrossingCounts(i, o, c, s, a, l, r, _);
	if (u[2]) throw oe(u[1]);
	return oe(u[0]);
}
function Gn() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(Kn(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const t = ie(String(e), ue.__wbindgen_malloc, ue.__wbindgen_realloc), r = fe;
				$n().setInt32(n + 4, r, !0), $n().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const t = "bigint" == typeof e ? e : void 0;
				$n().setBigInt64(n + 8, te(t) ? BigInt(0) : t, !0), $n().setInt32(n + 0, !te(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return te(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const t = ie(Ln(e), ue.__wbindgen_malloc, ue.__wbindgen_realloc), r = fe;
				$n().setInt32(n + 4, r, !0), $n().setInt32(n + 0, t, !0);
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
				$n().setFloat64(n + 8, te(t) ? 0 : t, !0), $n().setInt32(n + 0, !te(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const t = "string" == typeof e ? e : void 0;
				var r = te(t) ? 0 : ie(t, ue.__wbindgen_malloc, ue.__wbindgen_realloc), _ = fe;
				$n().setInt32(n + 4, _, !0), $n().setInt32(n + 0, r, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(Kn(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return ee(function(n, e) {
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
					t = n, r = e, console.error(Kn(n, e));
				} finally {
					ue.__wbindgen_free(t, r, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return ee(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return ee(function(n, e) {
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
				return new Float64Array(Xn(n, e));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(n, e) {
				return new Uint8Array(Tn(n, e));
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return ee(function(n) {
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
				return ee(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, t) {
				Uint8Array.prototype.set.call(Tn(n, e), t);
			},
			__wbg_push_471a5b068a5295f6: function(n, e) {
				return n.push(e);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return ee(function(n, e, t) {
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
				const t = ie(e.stack, ue.__wbindgen_malloc, ue.__wbindgen_realloc), r = fe;
				$n().setInt32(n + 4, r, !0), $n().setInt32(n + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return te(n) ? 0 : Vn(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return te(n) ? 0 : Vn(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return te(n) ? 0 : Vn(n);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return te(n) ? 0 : Vn(n);
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
				return Tn(n, e);
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return Kn(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = ue.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			}
		}
	};
}
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
const En = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ue.__wbg_streamchunkresult_free(n >>> 0, 1)), Nn = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => ue.__wbg_streamparseresult_free(n >>> 0, 1));
function Vn(n) {
	const e = ue.__externref_table_alloc();
	return ue.__wbindgen_externrefs.set(e, n), e;
}
function Ln(n) {
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
		e > 0 && (t += Ln(n[0]));
		for (let r = 1; r < e; r++) t += ", " + Ln(n[r]);
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
function Xn(n, e) {
	return n >>>= 0, Zn().subarray(n / 8, n / 8 + e);
}
function qn(n, e) {
	return n >>>= 0, (null !== Jn && 0 !== Jn.byteLength || (Jn = new Uint32Array(ue.memory.buffer)), Jn).subarray(n / 4, n / 4 + e);
}
function Tn(n, e) {
	return n >>>= 0, ne().subarray(n / 1, n / 1 + e);
}
let Hn = null;
function $n() {
	return (null === Hn || !0 === Hn.buffer.detached || void 0 === Hn.buffer.detached && Hn.buffer !== ue.memory.buffer) && (Hn = new DataView(ue.memory.buffer)), Hn;
}
let Yn = null;
function Zn() {
	return null !== Yn && 0 !== Yn.byteLength || (Yn = new Float64Array(ue.memory.buffer)), Yn;
}
function Kn(n, e) {
	return function(n, e) {
		return ae += e, ae >= se && (ce = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), ce.decode(), ae = e), ce.decode(ne().subarray(n, n + e));
	}(n >>>= 0, e);
}
let Jn = null, Qn = null;
function ne() {
	return null !== Qn && 0 !== Qn.byteLength || (Qn = new Uint8Array(ue.memory.buffer)), Qn;
}
function ee(n, e) {
	try {
		return n.apply(this, e);
	} catch (t) {
		const n = Vn(t);
		ue.__wbindgen_exn_store(n);
	}
}
function te(n) {
	return null == n;
}
function re(n, e) {
	const t = e(1 * n.length, 1) >>> 0;
	return ne().set(n, t / 1), fe = n.length, t;
}
function _e(n, e) {
	const t = e(8 * n.length, 8) >>> 0;
	return Zn().set(n, t / 8), fe = n.length, t;
}
function ie(n, e, t) {
	if (void 0 === t) {
		const t = le.encode(n), r = e(t.length, 1) >>> 0;
		return ne().subarray(r, r + t.length).set(t), fe = t.length, r;
	}
	let r = n.length, _ = e(r, 1) >>> 0;
	const i = ne();
	let o = 0;
	for (; o < r; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[_ + o] = e;
	}
	if (o !== r) {
		0 !== o && (n = n.slice(o)), _ = t(_, r, r = o + 3 * n.length, 1) >>> 0;
		const e = ne().subarray(_ + o, _ + r);
		o += le.encodeInto(n, e).written, _ = t(_, r, o, 1) >>> 0;
	}
	return fe = o, _;
}
function oe(n) {
	const e = ue.__wbindgen_externrefs.get(n);
	return ue.__externref_table_dealloc(n), e;
}
let ce = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
ce.decode();
const se = 2146435072;
let ae = 0;
const le = new TextEncoder();
"encodeInto" in le || (le.encodeInto = function(n, e) {
	const t = le.encode(n);
	return e.set(t), {
		read: n.length,
		written: t.length
	};
});
let ue, fe = 0;
function we(n, e) {
	return ue = n.exports, Hn = null, Yn = null, Jn = null, Qn = null, ue.__wbindgen_start(), ue;
}
function ge(n) {
	if (void 0 !== ue) return ue;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = Gn();
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), we(new WebAssembly.Instance(n, e));
}
async function be(n) {
	if (void 0 !== ue) return ue;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_bg-Bvm80hwQ.wasm", "" + import.meta.url));
	const e = Gn();
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
	return we(t);
}
export { n as StreamChunkResult, e as StreamParseResult, t as actoursVersion, r as aggregateEpochSeries, _ as analyzePhysicalActivityDay, i as classifyActimetricPreschoolWristRf, o as classifyActimetricPreschoolWristRfLagLead, c as classifyActimetricPreschoolWristRfLagLeadCalibrated, s as computeAnglez5s, a as computeCircadian, l as computeEnmo5s, u as computeMimsUnit, f as computeMimsUnitDataframe, w as computeMimsUnitTimingBreakdown, g as computeMimsUnitValues, b as computeNightDifficulty, d as computeNightSignals, m as computeSleepMetrics, h as configureComputeMemoryBudgetV1, p as csvBufferAppend, y as csvBufferClear, be as default, v as detectDetachFromAccelerationG, k as detectDeviceFormat, A as detectGgirHasptVariant, x as detectHdcza, R as detectNonwear, C as detectNonwearChoi2011, S as detectNonwearChoi2011Bouts, F as detectNonwearChoi2011Epoch, P as detectNonwearChoi2012, M as detectNonwearChoi2012Bouts, U as detectNonwearChoiBouts, I as detectNonwearUnified, z as epochRawData, W as epochWithBandpass, B as executeHeroRuntime, D as extractCapsense, O as getComputeCapabilitiesV1, ge as initSync, j as installPanicHook, G as isGeneactivFormat, E as lstmSpectralFeatures30s, N as neishabouriCounts, V as parseActigraphCsv, L as parseActigraphCsvBuffered, X as parseCwa, q as parseEpochSeries, T as parseGeneactivBin, H as parseGeneactivCsv, $ as parseGeneactivCsvBuffered, Y as parseGt3x, Z as placeMarkers, K as placeNonwearMarkers, J as prepareCompactPipelineOutcomeV1, Q as prepareCompactPipelineV1, nn as processGeneactivRaw, en as processGt3xFull, tn as processGt3xFullWithEpoch, rn as processGt3xPart1, _n as processGt3xPart1WithEpoch, on as processRawXyz, cn as processRawXyzImputed, sn as processRawXyzImputedWithEpoch, an as readGgirMeta, ln as recommended_chunk_size_mb, un as reduceF64V1, fn as runCompactPipelineOutcomeV1, wn as runCompactPipelineV1, gn as runFullPipeline, bn as runFullPipelineOutcomeV1, dn as runFullPipelineV1, mn as runGgirFromEpoch, hn as runMilestone, pn as scoreAllDays, yn as scoreColeKripke, vn as scoreConsensus, kn as scoreConsensusMajority, An as scoreEpochs, xn as scoreGgirHasib, Rn as scoreGgirHasibVariant, Cn as scoreGgirSib, Sn as scoreSadeh, Fn as sha256StreamFeed, Pn as sha256StreamFinish, Mn as sha256StreamStart, Un as streamParseFeed, In as streamParseFinish, zn as streamParseFinishChunk, Wn as streamParseStart, Bn as streamParseStartData, Dn as streamParseStartWithEpoch, On as summarizeActimetricPreschoolWristRfClasses, jn as zeroCrossingCounts };
