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
		return this.__wbg_ptr = 0, nt.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		zt.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = At(n, zt.__wbindgen_malloc), _ = Ut, t = zt.aw5batch_new(e, _);
		if (t[2]) throw xt(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, nt.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), r = Ut;
		var i = kt(_) ? 0 : Dt(_, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut;
		const c = zt.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw xt(c[1]);
		return xt(c[0]);
	}
	subjects(n) {
		const e = zt.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw xt(e[2]);
		var _ = lt(e[0], e[1]).slice();
		return zt.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, et.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, et.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		zt.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = zt.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = zt.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = zt.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = zt.streamchunkresult_axisX(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = zt.streamchunkresult_axisY(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = zt.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = zt.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw xt(n[1]);
		return xt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== zt.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = zt.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ft(n[0], n[1]).slice(), zt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = zt.streamchunkresult_counts(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = zt.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = zt.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = zt.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = zt.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = st(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = zt.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = st(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = zt.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = ct(e[0], e[1]).slice();
		return zt.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return zt.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = zt.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = zt.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== zt.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = zt.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ft(n[0], n[1]).slice(), zt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = zt.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = zt.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = zt.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== zt.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return zt.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return zt.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return zt.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = zt.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = zt.streamchunkresult_temperature(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = zt.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = zt.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = zt.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = zt.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = zt.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = zt.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var t = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, _t.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, _t.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		zt.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = zt.streamparseresult_axisX(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = zt.streamparseresult_axisY(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = zt.streamparseresult_axisZ(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = zt.streamparseresult_calibration(this.__wbg_ptr);
		if (n[2]) throw xt(n[1]);
		return xt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== zt.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = zt.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ft(n[0], n[1]).slice(), zt.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return zt.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== zt.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return zt.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return zt.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = zt.streamparseresult_temperature(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = zt.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = zt.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return zt.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function r(n) {
	const e = zt.actiwareIntervalStatistics(n);
	if (e[3]) throw xt(e[2]);
	var _ = lt(e[0], e[1]).slice();
	return zt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function i(n, e, _) {
	const t = At(e, zt.__wbindgen_malloc), r = Ut, i = zt.actiwareSleepIntervals(n, t, r, kt(_) ? 0 : rt(_));
	if (i[3]) throw xt(i[2]);
	var o = lt(i[0], i[1]).slice();
	return zt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function o(n, e) {
	const _ = zt.actiwareWakeThreshold(n, kt(e) ? 0 : rt(e));
	if (_[3]) throw xt(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function c() {
	let n, e;
	try {
		const _ = zt.actoursVersion();
		return n = _[0], e = _[1], ft(_[0], _[1]);
	} finally {
		zt.__wbindgen_free(n, e, 1);
	}
}
function l(n) {
	const e = zt.aggregateEpochSeries(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function a(n) {
	const e = Ct(n, zt.__wbindgen_malloc), _ = Ut, t = zt.analysisDatesOf(e, _);
	var r = lt(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function s(n, e) {
	const _ = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), t = Ut, r = zt.analysisWindowBounds(_, t, !kt(e), kt(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = ct(r[0], r[1]).slice(), zt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function w(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), i = Ut, o = zt.analysisWindowSlice(_, t, r, i);
	var c = at(o[0], o[1]).slice();
	return zt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function g(n) {
	let e, _;
	try {
		const i = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut, c = zt.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, xt(c[2]);
		return e = t, _ = r, ft(t, r);
	} finally {
		zt.__wbindgen_free(e, _, 1);
	}
}
function u(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Ct(e, zt.__wbindgen_malloc), c = Ut, l = Ct(_, zt.__wbindgen_malloc), a = Ut, s = zt.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw xt(s[2]);
	var w = st(s[0], s[1]).slice();
	return zt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function b(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Ct(e, zt.__wbindgen_malloc), c = Ut, l = Ct(_, zt.__wbindgen_malloc), a = Ut, s = zt.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw xt(s[2]);
	var w = st(s[0], s[1]).slice();
	return zt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function d(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Ct(e, zt.__wbindgen_malloc), c = Ut, l = Ct(_, zt.__wbindgen_malloc), a = Ut, s = zt.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw xt(s[2]);
	var w = st(s[0], s[1]).slice();
	return zt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function f(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Ct(e, zt.__wbindgen_malloc), c = Ut;
	return zt.clippedUnionHours(r, i, o, c, _, t);
}
function m(n, e) {
	const _ = zt.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw xt(_[1]);
	return xt(_[0]);
}
function h(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Ct(e, zt.__wbindgen_malloc), c = Ut, l = Ct(_, zt.__wbindgen_malloc), a = Ut, s = zt.computeAnglez5s(r, i, o, c, l, a, t);
	var w = ct(s[0], s[1]).slice();
	return zt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function p(n) {
	let e, _;
	try {
		const i = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut, c = zt.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, xt(c[2]);
		return e = t, _ = r, ft(t, r);
	} finally {
		zt.__wbindgen_free(e, _, 1);
	}
}
function y(n, e, _, t, r, i, o) {
	const c = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), l = Ut, a = Ct(e, zt.__wbindgen_malloc), s = Ut, w = St(_, zt.__wbindgen_malloc), g = Ut, u = Ct(t, zt.__wbindgen_malloc), b = Ut, d = St(r, zt.__wbindgen_malloc), f = Ut, m = Rt(i, zt.__wbindgen_malloc), h = Ut, p = St(o, zt.__wbindgen_malloc), y = Ut, v = zt.computeCircadianTyped(c, l, a, s, w, g, u, b, d, f, m, h, p, y);
	if (v[2]) throw xt(v[1]);
	return xt(v[0]);
}
function v(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Ct(e, zt.__wbindgen_malloc), c = Ut, l = Ct(_, zt.__wbindgen_malloc), a = Ut, s = zt.computeEnmo5s(r, i, o, c, l, a, t);
	var w = ct(s[0], s[1]).slice();
	return zt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function k(n, e, _, t, r) {
	const i = Ct(n, zt.__wbindgen_malloc), o = Ut, c = Ct(e, zt.__wbindgen_malloc), l = Ut, a = Ct(_, zt.__wbindgen_malloc), s = Ut, w = zt.computeMimsUnit(i, o, c, l, a, s, t, kt(r) ? 0 : rt(r));
	if (w[2]) throw xt(w[1]);
	return xt(w[0]);
}
function S(n, e, _, t, r) {
	const i = Ct(n, zt.__wbindgen_malloc), o = Ut, c = Ct(e, zt.__wbindgen_malloc), l = Ut, a = Ct(_, zt.__wbindgen_malloc), s = Ut, w = Ct(t, zt.__wbindgen_malloc), g = Ut, u = zt.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, kt(r) ? 0 : rt(r));
	if (u[2]) throw xt(u[1]);
	return xt(u[0]);
}
function R(n, e, _, t, r) {
	const i = Ct(n, zt.__wbindgen_malloc), o = Ut, c = Ct(e, zt.__wbindgen_malloc), l = Ut, a = Ct(_, zt.__wbindgen_malloc), s = Ut, w = zt.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, kt(r) ? 0 : rt(r));
	if (w[2]) throw xt(w[1]);
	return xt(w[0]);
}
function C(n, e, _, t, r) {
	const i = Ct(n, zt.__wbindgen_malloc), o = Ut, c = Ct(e, zt.__wbindgen_malloc), l = Ut, a = Ct(_, zt.__wbindgen_malloc), s = Ut, w = zt.computeMimsUnitValues(i, o, c, l, a, s, t, kt(r) ? 0 : rt(r));
	if (w[3]) throw xt(w[2]);
	var g = ct(w[0], w[1]).slice();
	return zt.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function A(n) {
	let e, _;
	try {
		const i = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut, c = zt.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, xt(c[2]);
		return e = t, _ = r, ft(t, r);
	} finally {
		zt.__wbindgen_free(e, _, 1);
	}
}
function D(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), y = Ut, v = Ct(e, zt.__wbindgen_malloc), k = Ut, S = St(_, zt.__wbindgen_malloc), R = Ut, C = Ct(t, zt.__wbindgen_malloc), A = Ut, D = St(r, zt.__wbindgen_malloc), x = Ut, M = Rt(i, zt.__wbindgen_malloc), P = Ut, F = St(o, zt.__wbindgen_malloc), I = Ut, W = Rt(c, zt.__wbindgen_malloc), z = Ut, U = St(l, zt.__wbindgen_malloc), O = Ut, N = Ct(a, zt.__wbindgen_malloc), T = Ut, G = St(s, zt.__wbindgen_malloc), B = Ut, j = Ct(w, zt.__wbindgen_malloc), E = Ut, L = St(g, zt.__wbindgen_malloc), V = Ut, H = Ct(u, zt.__wbindgen_malloc), X = Ut, q = St(b, zt.__wbindgen_malloc), J = Ut, Z = Ct(d, zt.__wbindgen_malloc), $ = Ut, Y = St(f, zt.__wbindgen_malloc), K = Ut, Q = Rt(m, zt.__wbindgen_malloc), nn = Ut, en = St(h, zt.__wbindgen_malloc), _n = Ut, tn = zt.computeNightDifficultyTyped(p, y, v, k, S, R, C, A, D, x, M, P, F, I, W, z, U, O, N, T, G, B, j, E, L, V, H, X, q, J, Z, $, Y, K, Q, nn, en, _n);
	if (tn[2]) throw xt(tn[1]);
	return xt(tn[0]);
}
function x(n) {
	let e, _;
	try {
		const i = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut, c = zt.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, xt(c[2]);
		return e = t, _ = r, ft(t, r);
	} finally {
		zt.__wbindgen_free(e, _, 1);
	}
}
function M(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), y = Ut, v = Ct(e, zt.__wbindgen_malloc), k = Ut, S = St(_, zt.__wbindgen_malloc), R = Ut, C = Ct(t, zt.__wbindgen_malloc), A = Ut, D = St(r, zt.__wbindgen_malloc), x = Ut, M = Rt(i, zt.__wbindgen_malloc), P = Ut, F = St(o, zt.__wbindgen_malloc), I = Ut, W = Rt(c, zt.__wbindgen_malloc), z = Ut, U = St(l, zt.__wbindgen_malloc), O = Ut, N = Ct(a, zt.__wbindgen_malloc), T = Ut, G = St(s, zt.__wbindgen_malloc), B = Ut, j = Ct(w, zt.__wbindgen_malloc), E = Ut, L = St(g, zt.__wbindgen_malloc), V = Ut, H = Ct(u, zt.__wbindgen_malloc), X = Ut, q = St(b, zt.__wbindgen_malloc), J = Ut, Z = Ct(d, zt.__wbindgen_malloc), $ = Ut, Y = St(f, zt.__wbindgen_malloc), K = Ut, Q = Rt(m, zt.__wbindgen_malloc), nn = Ut, en = St(h, zt.__wbindgen_malloc), _n = Ut, tn = zt.computeNightSignalsTyped(p, y, v, k, S, R, C, A, D, x, M, P, F, I, W, z, U, O, N, T, G, B, j, E, L, V, H, X, q, J, Z, $, Y, K, Q, nn, en, _n);
	if (tn[2]) throw xt(tn[1]);
	return xt(tn[0]);
}
function P(n, e, _) {
	const t = Rt(n, zt.__wbindgen_malloc), r = Ut, i = Ct(e, zt.__wbindgen_malloc), o = Ut, c = zt.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw xt(c[1]);
	return xt(c[0]);
}
function F(n) {
	const e = zt.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function I(n) {
	const e = At(n, zt.__wbindgen_malloc), _ = Ut, t = zt.consensusDisagreementDetail(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function W(n) {
	const e = zt.consensusDisagreements(n);
	if (e[3]) throw xt(e[2]);
	var _ = lt(e[0], e[1]).slice();
	return zt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function z(n) {
	const e = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), _ = Ut, t = zt.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function U(n) {
	const e = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), _ = Ut, t = zt.convertScreensRedcapDiary(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function O(n) {
	const e = Rt(n, zt.__wbindgen_malloc), _ = Ut;
	zt.csvBufferAppend(e, _);
}
function N(n) {
	zt.csvBufferClear(n);
}
function T(n, e) {
	const _ = zt.cutpointEpochCompatibility(n, e);
	if (_[2]) throw xt(_[1]);
	return xt(_[0]);
}
function G(n, e, _, t, r) {
	const i = Ct(n, zt.__wbindgen_malloc), o = Ut, c = zt.cutpointToneCodes(i, o, e, _, t, r);
	var l = st(c[0], c[1]).slice();
	return zt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = zt.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = ft(r[0], r[1]).slice(), zt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function j(n, e, _, t) {
	return 0 !== zt.cutpointsValid(n, e, _, t);
}
function E(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = St(e, zt.__wbindgen_malloc), i = Ut, o = zt.describeColumns(_, t, r, i);
	if (o[3]) throw xt(o[2]);
	var c = lt(o[0], o[1]).slice();
	return zt.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function L(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = Ct(e, zt.__wbindgen_malloc), i = Ut, o = zt.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw xt(o[2]);
	var c = st(o[0], o[1]).slice();
	return zt.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function V(n, e) {
	let _, t;
	try {
		const r = Rt(n, zt.__wbindgen_malloc), i = Ut, o = Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), c = Ut, l = zt.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], ft(l[0], l[1]);
	} finally {
		zt.__wbindgen_free(_, t, 1);
	}
}
function H(n) {
	const e = zt.detectGgirHasptVariant(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function X(n, e, _, t, r) {
	const i = Ct(n, zt.__wbindgen_malloc), o = Ut;
	var c = kt(e) ? 0 : Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), l = Ut, a = kt(_) ? 0 : Ct(_, zt.__wbindgen_malloc), s = Ut, w = kt(t) ? 0 : Ct(t, zt.__wbindgen_malloc), g = Ut, u = kt(r) ? 0 : Dt(r, zt.__wbindgen_malloc, zt.__wbindgen_realloc), b = Ut;
	const d = zt.detectHdcza(i, o, c, l, a, s, w, g, u, b);
	if (d[2]) throw xt(d[1]);
	return xt(d[0]);
}
function q(n) {
	const e = Ct(n, zt.__wbindgen_malloc), _ = Ut;
	return 0 !== zt.detectHourClockJumpMs(e, _);
}
function J(n) {
	const e = Ct(n, zt.__wbindgen_malloc), _ = Ut, t = zt.detectNonwear(e, _);
	var r = st(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Z(n) {
	const e = Ct(n, zt.__wbindgen_malloc), _ = Ut, t = zt.detectNonwearChoi2011(e, _);
	var r = st(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = Ct(n, zt.__wbindgen_malloc), _ = Ut, t = zt.detectNonwearChoi2011Bouts(e, _);
	if (t[3]) throw xt(t[2]);
	var r = lt(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Y(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = zt.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw xt(r[2]);
	var i = st(r[0], r[1]).slice();
	return zt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = Ct(n, zt.__wbindgen_malloc), _ = Ut, t = zt.detectNonwearChoi2012(e, _);
	var r = st(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Q(n) {
	const e = Ct(n, zt.__wbindgen_malloc), _ = Ut, t = zt.detectNonwearChoi2012Bouts(e, _);
	if (t[3]) throw xt(t[2]);
	var r = lt(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function nn(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = zt.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw xt(r[2]);
	var i = st(r[0], r[1]).slice();
	return zt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function en(n) {
	const e = Ct(n, zt.__wbindgen_malloc), _ = Ut, t = zt.detectNonwearChoiBouts(e, _);
	if (t[3]) throw xt(t[2]);
	var r = lt(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function _n(n) {
	let e, _;
	try {
		const i = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut, c = zt.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, xt(c[2]);
		return e = t, _ = r, ft(t, r);
	} finally {
		zt.__wbindgen_free(e, _, 1);
	}
}
function tn(n, e, _, t, r, i, o) {
	const c = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), l = Ut, a = Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), s = Ut, w = Ct(_, zt.__wbindgen_malloc), g = Ut, u = Ct(t, zt.__wbindgen_malloc), b = Ut, d = Ct(r, zt.__wbindgen_malloc), f = Ut, m = zt.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, u, b, d, f, i, o);
	if (m[2]) throw xt(m[1]);
	return xt(m[0]);
}
function rn(n, e, _) {
	const t = At(_, zt.__wbindgen_malloc), r = Ut, i = zt.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw xt(i[2]);
	var o = lt(i[0], i[1]).slice();
	return zt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function on(n, e, _, t) {
	const r = zt.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = ct(r[0], r[1]).slice(), zt.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function cn(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = Ct(e, zt.__wbindgen_malloc), i = Ut, o = zt.epochAgreement(_, t, r, i);
	if (o[2]) throw xt(o[1]);
	return xt(o[0]);
}
function ln(n, e, _, t, r) {
	const i = Ct(n, zt.__wbindgen_malloc), o = Ut, c = Ct(e, zt.__wbindgen_malloc), l = Ut, a = Ct(_, zt.__wbindgen_malloc), s = Ut, w = Ct(t, zt.__wbindgen_malloc), g = Ut, u = zt.epochRawData(i, o, c, l, a, s, w, g, r);
	if (u[2]) throw xt(u[1]);
	return xt(u[0]);
}
function an(n, e, _) {
	const t = Ct(n, zt.__wbindgen_malloc), r = Ut, i = Ct(e, zt.__wbindgen_malloc), o = Ut, c = zt.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw xt(c[1]);
	return xt(c[0]);
}
function sn(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = zt.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = at(o[0], o[1]).slice(), zt.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function wn(n, e) {
	let _, t;
	try {
		const o = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), c = Ut, l = Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), a = Ut, s = zt.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, xt(s[2]);
		return _ = r, t = i, ft(r, i);
	} finally {
		zt.__wbindgen_free(_, t, 1);
	}
}
function gn(n) {
	const e = At(n, zt.__wbindgen_malloc), _ = Ut, t = zt.exportNapAggregate(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function un(n, e, _) {
	const t = At(_, zt.__wbindgen_malloc), r = Ut, i = zt.exportPeriodFigures(!kt(n), kt(n) ? 0 : n, !kt(e), kt(e) ? 0 : e, t, r);
	if (i[2]) throw xt(i[1]);
	return xt(i[0]);
}
function bn(n) {
	const e = Rt(n, zt.__wbindgen_malloc), _ = Ut, t = zt.extractCapsense(e, _);
	if (t[3]) throw xt(t[2]);
	var r = lt(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function dn(n, e, _, t, r) {
	const i = Ct(n, zt.__wbindgen_malloc), o = Ut, c = Ct(e, zt.__wbindgen_malloc), l = Ut, a = Ct(_, zt.__wbindgen_malloc), s = Ut, w = Dt(r, zt.__wbindgen_malloc, zt.__wbindgen_realloc), g = Ut, u = zt.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (u[3]) throw xt(u[2]);
	var b = ct(u[0], u[1]).slice();
	return zt.__wbindgen_free(u[0], 8 * u[1], 8), b;
}
function fn(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Dt(t, zt.__wbindgen_malloc, zt.__wbindgen_realloc), c = Ut, l = zt.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw xt(l[2]);
	var a = ct(l[0], l[1]).slice();
	return zt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function mn(n, e, _, t, r) {
	const i = Rt(_, zt.__wbindgen_malloc), o = Ut, c = Ct(t, zt.__wbindgen_malloc), l = Ut, a = zt.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw xt(a[1]);
	return xt(a[0]);
}
function hn(n, e, _, t, r, i) {
	const o = Ct(_, zt.__wbindgen_malloc), c = Ut, l = Ct(t, zt.__wbindgen_malloc), a = Ut, s = Dt(i, zt.__wbindgen_malloc, zt.__wbindgen_realloc), w = Ut, g = zt.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw xt(g[2]);
	var u = ct(g[0], g[1]).slice();
	return zt.__wbindgen_free(g[0], 8 * g[1], 8), u;
}
function pn(n) {
	const e = zt.fuseNonwearMasks(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function yn(n, e, _) {
	var t = kt(_) ? 0 : Dt(_, zt.__wbindgen_malloc, zt.__wbindgen_realloc), r = Ut;
	const i = zt.generateActiwareRestIntervals(n, kt(e) ? 0 : rt(e), t, r);
	if (i[3]) throw xt(i[2]);
	var o = lt(i[0], i[1]).slice();
	return zt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function vn() {
	const n = zt.getComputeCapabilitiesV1();
	if (n[2]) throw xt(n[1]);
	return xt(n[0]);
}
function kn(n, e, _) {
	const t = At(_, zt.__wbindgen_malloc), r = Ut, i = zt.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw xt(i[2]);
	var o = ct(i[0], i[1]).slice();
	return zt.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function Sn(n, e) {
	var _ = kt(n) ? 0 : Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), t = Ut;
	const r = zt.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw xt(r[1]);
	return xt(r[0]);
}
function Rn(n) {
	const e = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), _ = Ut, t = zt.ggirConfigValues(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function Cn(n, e) {
	const _ = zt.ggirDayValidFraction(n, e);
	return 0 === _[0] ? void 0 : _[1];
}
function An(n, e, _) {
	const t = Ct(n, zt.__wbindgen_malloc), r = Ut;
	var i = kt(e) ? 0 : Ct(e, zt.__wbindgen_malloc), o = Ut, c = kt(_) ? 0 : Dt(_, zt.__wbindgen_malloc, zt.__wbindgen_realloc), l = Ut;
	const a = zt.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw xt(a[2]);
	var s = st(a[0], a[1]).slice();
	return zt.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function Dn(n, e) {
	const _ = Rt(n, zt.__wbindgen_malloc), t = Ut;
	var r = kt(e) ? 0 : Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), i = Ut;
	const o = zt.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw xt(o[1]);
	return xt(o[0]);
}
function xn(n, e, _) {
	const t = At(e, zt.__wbindgen_malloc), r = Ut;
	var i = kt(_) ? 0 : Ct(_, zt.__wbindgen_malloc), o = Ut;
	const c = zt.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw xt(c[2]);
	var l = lt(c[0], c[1]).slice();
	return zt.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function Mn(n) {
	var e = kt(n) ? 0 : Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), _ = Ut;
	const t = zt.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw xt(t[1]);
	return t[0];
}
function Pn(n, e, _, t) {
	const r = St(n, zt.__wbindgen_malloc), i = Ut, o = At(_, zt.__wbindgen_malloc), c = Ut;
	var l = kt(t) ? 0 : Ct(t, zt.__wbindgen_malloc), a = Ut;
	const s = zt.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw xt(s[2]);
	var w = ct(s[0], s[1]).slice();
	return zt.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function Fn(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = At(e, zt.__wbindgen_malloc), i = Ut, o = zt.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw xt(o[2]);
	var c = ct(o[0], o[1]).slice();
	return zt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function In(n, e, _, t) {
	const r = At(n, zt.__wbindgen_malloc), i = Ut, o = Ct(e, zt.__wbindgen_malloc), c = Ut, l = Ct(_, zt.__wbindgen_malloc), a = Ut, s = Ct(t, zt.__wbindgen_malloc), w = Ut, g = zt.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw xt(g[1]);
	return xt(g[0]);
}
function Wn(n) {
	const e = Rt(n, zt.__wbindgen_malloc), _ = Ut, t = zt.ggirMilestoneVersion(e, _);
	if (t[3]) throw xt(t[2]);
	let r;
	return 0 !== t[0] && (r = ft(t[0], t[1]).slice(), zt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function zn(n) {
	const e = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), _ = Ut, t = zt.ggirNonwearApproach(e, _);
	if (t[3]) throw xt(t[2]);
	let r;
	return 0 !== t[0] && (r = ft(t[0], t[1]).slice(), zt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Un() {
	const n = zt.ggirRerunProfiles();
	if (n[3]) throw xt(n[2]);
	var e = lt(n[0], n[1]).slice();
	return zt.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function On(n) {
	const e = Rt(n, zt.__wbindgen_malloc), _ = Ut, t = zt.ggirSavedNonwearWindows(e, _);
	if (t[2]) throw xt(t[1]);
	return t[0] >>> 0;
}
function Nn(n, e, _, t) {
	const r = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), i = Ut, o = Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), c = Ut, l = Dt(_, zt.__wbindgen_malloc, zt.__wbindgen_realloc), a = Ut, s = At(t, zt.__wbindgen_malloc), w = Ut, g = zt.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw xt(g[2]);
	let u;
	return 0 !== g[0] && (u = lt(g[0], g[1]).slice(), zt.__wbindgen_free(g[0], 4 * g[1], 4)), u;
}
function Tn(n, e) {
	return zt.ggirSptDurationHours(n, e);
}
function Gn(n, e) {
	const _ = zt.ggirSummaryDenominator(n, e);
	if (_[2]) throw xt(_[1]);
	return xt(_[0]);
}
function Bn(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = Ct(e, zt.__wbindgen_malloc), i = Ut, o = zt.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function jn(n) {
	let e, _;
	try {
		const i = Rt(n, zt.__wbindgen_malloc), o = Ut, c = zt.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, xt(c[2]);
		return e = t, _ = r, ft(t, r);
	} finally {
		zt.__wbindgen_free(e, _, 1);
	}
}
function En(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Ct(e, zt.__wbindgen_malloc), c = Ut, l = Ct(_, zt.__wbindgen_malloc), a = Ut, s = Ct(t, zt.__wbindgen_malloc), w = Ut, g = zt.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw xt(g[1]);
	return xt(g[0]);
}
function Ln(n) {
	return zt.initThreadPool(n);
}
function Vn() {
	zt.installPanicHook();
}
function Hn(n) {
	const e = At(n, zt.__wbindgen_malloc), _ = Ut, t = zt.interRaterReliability(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function Xn(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = zt.irregularInternalDays(_, t, e);
	var i = lt(r[0], r[1]).slice();
	return zt.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function qn(n) {
	const e = Rt(n, zt.__wbindgen_malloc), _ = Ut;
	return 0 !== zt.isGeneactivFormat(e, _);
}
function Jn() {
	return zt.linearMemoryBytesV1();
}
function Zn(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Ct(e, zt.__wbindgen_malloc), c = Ut, l = Ct(_, zt.__wbindgen_malloc), a = Ut, s = zt.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw xt(s[1]);
	return xt(s[0]);
}
function $n(n, e, _) {
	const t = Ct(n, zt.__wbindgen_malloc), r = Ut, i = zt.markerIndexRange(t, r, e, _);
	var o = at(i[0], i[1]).slice();
	return zt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Yn(n, e, _, t, r, i, o) {
	const c = Ct(n, zt.__wbindgen_malloc), l = Ut, a = Ct(e, zt.__wbindgen_malloc), s = Ut, w = zt.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw xt(w[1]);
	return xt(w[0]);
}
function Kn(n) {
	const e = Ct(n, zt.__wbindgen_malloc), _ = Ut, t = zt.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Qn(n, e, _, t) {
	const r = zt.metricWarnings(n, e, _, t);
	var i = st(r[0], r[1]).slice();
	return zt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function ne(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = Ct(e, zt.__wbindgen_malloc), i = Ut, o = zt.midSleepClockHours(_, t, r, i);
	var c = ct(o[0], o[1]).slice();
	return zt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function ee(n, e, _, t, r) {
	const i = Ct(n, zt.__wbindgen_malloc), o = Ut, c = Ct(e, zt.__wbindgen_malloc), l = Ut, a = Ct(_, zt.__wbindgen_malloc), s = Ut, w = zt.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw xt(w[1]);
	return xt(w[0]);
}
function _e(n) {
	const e = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), _ = Ut, t = zt.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = ft(t[0], t[1]).slice(), zt.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function te(n, e, _, t, r) {
	const i = Ct(_, zt.__wbindgen_malloc), o = Ut, c = Ct(t, zt.__wbindgen_malloc), l = Ut, a = Ct(r, zt.__wbindgen_malloc), s = Ut, w = zt.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw xt(w[1]);
	return xt(w[0]);
}
function re(n, e, _, t) {
	let r, i;
	try {
		const l = St(n, zt.__wbindgen_malloc), a = Ut, s = Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), w = Ut, g = zt.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, xt(g[2]);
		return r = o, i = c, ft(o, c);
	} finally {
		zt.__wbindgen_free(r, i, 1);
	}
}
function ie(n) {
	const e = Ct(n, zt.__wbindgen_malloc), _ = Ut, t = zt.nonwearInSleepCounts(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function oe(n) {
	const e = zt.nonwearSleepOverlap(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function ce(n, e, _) {
	const t = Ct(n, zt.__wbindgen_malloc), r = Ut, i = Ct(e, zt.__wbindgen_malloc), o = Ut, c = zt.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw xt(c[1]);
	return xt(c[0]);
}
function le(n, e, _, t, r, i) {
	const o = Dt(r, zt.__wbindgen_malloc, zt.__wbindgen_realloc), c = Ut, l = zt.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw xt(l[2]);
	var a = ct(l[0], l[1]).slice();
	return zt.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function ae(n, e) {
	const _ = Rt(n, zt.__wbindgen_malloc), t = Ut, r = zt.parseActigraphCsv(_, t, e);
	if (r[2]) throw xt(r[1]);
	return xt(r[0]);
}
function se(n) {
	const e = zt.parseActigraphCsvBuffered(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function we(n, e, _, t) {
	const r = Rt(n, zt.__wbindgen_malloc), i = Ut;
	var o = kt(e) ? 0 : Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), c = Ut, l = kt(_) ? 0 : At(_, zt.__wbindgen_malloc), a = Ut, s = kt(t) ? 0 : Dt(t, zt.__wbindgen_malloc, zt.__wbindgen_realloc), w = Ut;
	const g = zt.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw xt(g[1]);
	return xt(g[0]);
}
function ge(n) {
	const e = Rt(n, zt.__wbindgen_malloc), _ = Ut, t = zt.parseCwa(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function ue(n, e) {
	const _ = Rt(n, zt.__wbindgen_malloc), t = Ut, r = Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), i = Ut, o = zt.parseEpochSeries(_, t, r, i);
	if (o[2]) throw xt(o[1]);
	return xt(o[0]);
}
function be(n) {
	const e = Rt(n, zt.__wbindgen_malloc), _ = Ut, t = zt.parseGeneactivBin(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function de(n) {
	const e = Rt(n, zt.__wbindgen_malloc), _ = Ut, t = zt.parseGeneactivCsv(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function fe() {
	const n = zt.parseGeneactivCsvBuffered();
	if (n[2]) throw xt(n[1]);
	return xt(n[0]);
}
function me(n) {
	const e = Rt(n, zt.__wbindgen_malloc), _ = Ut, t = zt.parseGt3x(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function he(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Rt(e, zt.__wbindgen_malloc), c = Ut, l = Rt(_, zt.__wbindgen_malloc), a = Ut, s = zt.participantValidity(r, i, o, c, l, a, kt(t) ? 0 : rt(t));
	if (s[2]) throw xt(s[1]);
	return xt(s[0]);
}
function pe(n, e, _, t, r) {
	const i = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut, c = Ct(e, zt.__wbindgen_malloc), l = Ut;
	var a = kt(_) ? 0 : Ct(_, zt.__wbindgen_malloc), s = Ut;
	const w = zt.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw xt(w[1]);
	return xt(w[0]);
}
function ye(n) {
	let e, _;
	try {
		const i = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut, c = zt.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, xt(c[2]);
		return e = t, _ = r, ft(t, r);
	} finally {
		zt.__wbindgen_free(e, _, 1);
	}
}
function ve(n, e, _, t, r, i) {
	const o = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), c = Ut, l = Ct(e, zt.__wbindgen_malloc), a = Ut, s = Ct(_, zt.__wbindgen_malloc), w = Ut, g = Rt(t, zt.__wbindgen_malloc), u = Ut, b = Rt(r, zt.__wbindgen_malloc), d = Ut, f = Dt(i, zt.__wbindgen_malloc, zt.__wbindgen_realloc), m = Ut, h = zt.placeMarkersBatch(o, c, l, a, s, w, g, u, b, d, f, m);
	if (h[2]) throw xt(h[1]);
	return xt(h[0]);
}
function ke(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h, p) {
	const y = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), v = Ut, k = Ct(e, zt.__wbindgen_malloc), S = Ut, R = St(_, zt.__wbindgen_malloc), C = Ut, A = Ct(t, zt.__wbindgen_malloc), D = Ut, x = St(r, zt.__wbindgen_malloc), M = Ut, P = Rt(i, zt.__wbindgen_malloc), F = Ut, I = St(o, zt.__wbindgen_malloc), W = Ut, z = Rt(c, zt.__wbindgen_malloc), U = Ut, O = St(l, zt.__wbindgen_malloc), N = Ut, T = Ct(a, zt.__wbindgen_malloc), G = Ut, B = St(s, zt.__wbindgen_malloc), j = Ut, E = Ct(w, zt.__wbindgen_malloc), L = Ut, V = St(g, zt.__wbindgen_malloc), H = Ut, X = Ct(u, zt.__wbindgen_malloc), q = Ut, J = St(b, zt.__wbindgen_malloc), Z = Ut, $ = Ct(d, zt.__wbindgen_malloc), Y = Ut, K = St(f, zt.__wbindgen_malloc), Q = Ut, nn = Rt(m, zt.__wbindgen_malloc), en = Ut, _n = St(h, zt.__wbindgen_malloc), tn = Ut;
	var rn = kt(p) ? 0 : Dt(p, zt.__wbindgen_malloc, zt.__wbindgen_realloc), on = Ut;
	const cn = zt.placeMarkersTyped(y, v, k, S, R, C, A, D, x, M, P, F, I, W, z, U, O, N, T, G, B, j, E, L, V, H, X, q, J, Z, $, Y, K, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw xt(cn[1]);
	return xt(cn[0]);
}
function Se(n) {
	let e, _;
	try {
		const i = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut, c = zt.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, xt(c[2]);
		return e = t, _ = r, ft(t, r);
	} finally {
		zt.__wbindgen_free(e, _, 1);
	}
}
function Re(n, e, _, t) {
	const r = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), i = Ut, o = Ct(e, zt.__wbindgen_malloc), c = Ut, l = Ct(_, zt.__wbindgen_malloc), a = Ut, s = Rt(t, zt.__wbindgen_malloc), w = Ut, g = zt.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw xt(g[1]);
	return xt(g[0]);
}
function Ce(n) {
	const e = zt.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function Ae(n) {
	const e = zt.prepareCompactPipelineV1(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function De(n, e, _, t, r, i, o, c) {
	const l = Ct(n, zt.__wbindgen_malloc), a = Ut, s = Ct(e, zt.__wbindgen_malloc), w = Ut, g = Ct(_, zt.__wbindgen_malloc), u = Ut, b = Ct(t, zt.__wbindgen_malloc), d = Ut;
	var f = kt(o) ? 0 : Dt(o, zt.__wbindgen_malloc, zt.__wbindgen_realloc), m = Ut, h = kt(c) ? 0 : Dt(c, zt.__wbindgen_malloc, zt.__wbindgen_realloc), p = Ut;
	const y = zt.processGeneactivRaw(l, a, s, w, g, u, b, d, r, i, f, m, h, p);
	if (y[2]) throw xt(y[1]);
	return xt(y[0]);
}
function xe(n, e) {
	const _ = Rt(n, zt.__wbindgen_malloc), t = Ut;
	var r = kt(e) ? 0 : Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), i = Ut;
	const o = zt.processGt3xPart1(_, t, r, i);
	if (o[2]) throw xt(o[1]);
	return xt(o[0]);
}
function Me(n, e, _) {
	const t = Rt(n, zt.__wbindgen_malloc), r = Ut;
	var i = kt(_) ? 0 : Dt(_, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut;
	const c = zt.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw xt(c[1]);
	return xt(c[0]);
}
function Pe(n, e, _, t, r, i, o) {
	const c = Ct(n, zt.__wbindgen_malloc), l = Ut, a = Ct(e, zt.__wbindgen_malloc), s = Ut, w = Ct(_, zt.__wbindgen_malloc), g = Ut;
	var u = kt(i) ? 0 : Dt(i, zt.__wbindgen_malloc, zt.__wbindgen_realloc), b = Ut, d = kt(o) ? 0 : Dt(o, zt.__wbindgen_malloc, zt.__wbindgen_realloc), f = Ut;
	const m = zt.processRawXyz(c, l, a, s, w, g, t, r, u, b, d, f);
	if (m[2]) throw xt(m[1]);
	return xt(m[0]);
}
function Fe(n, e, _, t, r, i, o, c) {
	const l = Ct(n, zt.__wbindgen_malloc), a = Ut, s = Ct(e, zt.__wbindgen_malloc), w = Ut, g = Ct(_, zt.__wbindgen_malloc), u = Ut, b = Ct(t, zt.__wbindgen_malloc), d = Ut;
	var f = kt(i) ? 0 : Dt(i, zt.__wbindgen_malloc, zt.__wbindgen_realloc), m = Ut, h = kt(o) ? 0 : Dt(o, zt.__wbindgen_malloc, zt.__wbindgen_realloc), p = Ut, y = kt(c) ? 0 : Ct(c, zt.__wbindgen_malloc), v = Ut;
	const k = zt.processRawXyzImputed(l, a, s, w, g, u, b, d, r, f, m, h, p, y, v);
	if (k[2]) throw xt(k[1]);
	return xt(k[0]);
}
function Ie(n, e, _, t, r, i, o, c, l, a) {
	const s = Ct(n, zt.__wbindgen_malloc), w = Ut, g = Ct(e, zt.__wbindgen_malloc), u = Ut, b = Ct(_, zt.__wbindgen_malloc), d = Ut, f = Ct(t, zt.__wbindgen_malloc), m = Ut;
	var h = kt(i) ? 0 : Dt(i, zt.__wbindgen_malloc, zt.__wbindgen_realloc), p = Ut, y = kt(c) ? 0 : Dt(c, zt.__wbindgen_malloc, zt.__wbindgen_realloc), v = Ut, k = kt(a) ? 0 : Ct(a, zt.__wbindgen_malloc), S = Ut;
	const R = zt.processRawXyzImputedWithEpoch(s, w, g, u, b, d, f, m, r, h, p, o, y, v, kt(l) ? 16777215 : l ? 1 : 0, k, S);
	if (R[2]) throw xt(R[1]);
	return xt(R[0]);
}
function We(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Rt(e, zt.__wbindgen_malloc), c = Ut, l = Ct(t, zt.__wbindgen_malloc), a = Ut, s = zt.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = st(s[0], s[1]).slice();
	return zt.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function ze(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Ct(e, zt.__wbindgen_malloc), c = Ut, l = Ct(_, zt.__wbindgen_malloc), a = Ut, s = zt.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw xt(s[1]);
	return xt(s[0]);
}
function Ue(n, e, _) {
	const t = Rt(n, zt.__wbindgen_malloc), r = Ut;
	var i = kt(e) ? 0 : Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut;
	const c = zt.readGgirMeta(t, r, i, o, kt(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw xt(c[1]);
	return xt(c[0]);
}
function Oe(n, e) {
	const _ = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), t = Ut;
	var r = kt(e) ? 0 : Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), i = Ut;
	const o = zt.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw xt(o[1]);
	return xt(o[0]);
}
function Ne() {
	return zt.recommended_chunk_size_mb() >>> 0;
}
function Te(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), i = Ut, o = zt.reduceF64V1(_, t, r, i);
	if (o[2]) throw xt(o[1]);
	return o[0];
}
function Ge(n, e) {
	const _ = At(e, zt.__wbindgen_malloc), t = Ut, r = zt.rerunGgirResults(n, _, t);
	if (r[2]) throw xt(r[1]);
	return xt(r[0]);
}
function Be(n) {
	const e = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), _ = Ut, t = zt.resolveTimezone(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function je(n, e, _) {
	const t = Ct(n, zt.__wbindgen_malloc), r = Ut, i = Ct(e, zt.__wbindgen_malloc), o = Ut, c = St(_, zt.__wbindgen_malloc), l = Ut, a = zt.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw xt(a[2]);
	var s = lt(a[0], a[1]).slice();
	return zt.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function Ee(n, e, _, t, r, i, o, c, l, a, s, w, g, u) {
	const b = Rt(n, zt.__wbindgen_malloc), d = Ut, f = Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), m = Ut;
	var h = kt(_) ? 0 : Rt(_, zt.__wbindgen_malloc), p = Ut, y = kt(t) ? 0 : Rt(t, zt.__wbindgen_malloc), v = Ut, k = kt(r) ? 0 : Rt(r, zt.__wbindgen_malloc), S = Ut, R = kt(i) ? 0 : Rt(i, zt.__wbindgen_malloc), C = Ut, A = kt(o) ? 0 : Rt(o, zt.__wbindgen_malloc), D = Ut, x = kt(c) ? 0 : Dt(c, zt.__wbindgen_malloc, zt.__wbindgen_realloc), M = Ut, P = kt(l) ? 0 : Dt(l, zt.__wbindgen_malloc, zt.__wbindgen_realloc), F = Ut, I = kt(a) ? 0 : At(a, zt.__wbindgen_malloc), W = Ut, z = kt(w) ? 0 : Dt(w, zt.__wbindgen_malloc, zt.__wbindgen_realloc), U = Ut, O = kt(g) ? 0 : Dt(g, zt.__wbindgen_malloc, zt.__wbindgen_realloc), N = Ut;
	const T = zt.reviewGgirResults(b, d, f, m, h, p, y, v, k, S, R, C, A, D, x, M, P, F, I, W, s, z, U, O, N, kt(u) ? 4294967297 : u >>> 0);
	if (T[2]) throw xt(T[1]);
	return xt(T[0]);
}
function Le(n) {
	const e = At(n, zt.__wbindgen_malloc), _ = Ut, t = zt.reviewNonwearFile(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function Ve(n) {
	const e = At(n, zt.__wbindgen_malloc), _ = Ut, t = zt.reviewNonwearTotals(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function He(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = zt.roundCountStorage(_, t, e);
	var i = ct(r[0], r[1]).slice();
	return zt.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Xe(n) {
	const e = zt.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function qe(n) {
	const e = zt.runCompactPipelineV1(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function Je(n) {
	const e = zt.runFullPipelineOutcomeV1(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function Ze(n) {
	const e = zt.runFullPipelineV1(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function $e(n) {
	const e = zt.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function Ye(n) {
	const e = zt.runGgirPart3(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function Ke(n, e) {
	const _ = Rt(n, zt.__wbindgen_malloc), t = Ut;
	var r = kt(e) ? 0 : Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), i = Ut;
	const o = zt.runMilestone(_, t, r, i);
	if (o[2]) throw xt(o[1]);
	return xt(o[0]);
}
function Qe(n) {
	const e = At(n, zt.__wbindgen_malloc), _ = Ut, t = zt.scoreAllDays(e, _);
	if (t[3]) throw xt(t[2]);
	var r = lt(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function n_(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = zt.scoreColeKripke(_, t, e);
	var i = st(r[0], r[1]).slice();
	return zt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function e_(n) {
	let e, _;
	try {
		const i = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut, c = zt.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, xt(c[2]);
		return e = t, _ = r, ft(t, r);
	} finally {
		zt.__wbindgen_free(e, _, 1);
	}
}
function __(n) {
	const e = zt.scoreConsensusMajority(n);
	if (e[3]) throw xt(e[2]);
	var _ = st(e[0], e[1]).slice();
	return zt.__wbindgen_free(e[0], 1 * e[1], 1), _;
}
function t_(n, e, _) {
	const t = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), r = Ut, i = Rt(e, zt.__wbindgen_malloc), o = Ut, c = St(_, zt.__wbindgen_malloc), l = Ut, a = zt.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw xt(a[1]);
	return xt(a[0]);
}
function r_(n) {
	let e, _;
	try {
		const i = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut, c = zt.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, xt(c[2]);
		return e = t, _ = r, ft(t, r);
	} finally {
		zt.__wbindgen_free(e, _, 1);
	}
}
function i_(n, e, _, t, r, i) {
	const o = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), c = Ut, l = Ct(e, zt.__wbindgen_malloc), a = Ut, s = Ct(_, zt.__wbindgen_malloc), w = Ut, g = Ct(t, zt.__wbindgen_malloc), u = Ut, b = zt.scoreEpochsTyped(o, c, l, a, s, w, g, u, r, i);
	if (b[2]) throw xt(b[1]);
	return xt(b[0]);
}
function o_(n, e, _) {
	const t = Ct(n, zt.__wbindgen_malloc), r = Ut;
	var i = kt(e) ? 0 : Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut, c = kt(_) ? 0 : Ct(_, zt.__wbindgen_malloc), l = Ut;
	const a = zt.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw xt(a[2]);
	var s = st(a[0], a[1]).slice();
	return zt.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function c_(n) {
	const e = zt.scoreGgirHasibVariant(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function l_(n, e, _, t, r) {
	const i = Ct(n, zt.__wbindgen_malloc), o = Ut, c = Ct(e, zt.__wbindgen_malloc), l = Ut;
	var a = kt(t) ? 0 : Dt(t, zt.__wbindgen_malloc, zt.__wbindgen_realloc), s = Ut, w = kt(r) ? 0 : Ct(r, zt.__wbindgen_malloc), g = Ut;
	const u = zt.scoreGgirSib(i, o, c, l, _, a, s, w, g);
	if (u[2]) throw xt(u[1]);
	return xt(u[0]);
}
function a_(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = zt.scoreSadeh(_, t, e);
	var i = st(r[0], r[1]).slice();
	return zt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function s_(n) {
	const e = At(n, zt.__wbindgen_malloc), _ = Ut, t = zt.settleManualNonwearNights(e, _);
	if (t[3]) throw xt(t[2]);
	var r = lt(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function w_(n) {
	const e = Rt(n, zt.__wbindgen_malloc), _ = Ut, t = zt.sha256StreamFeed(e, _);
	if (t[1]) throw xt(t[0]);
}
function g_() {
	let n, e;
	try {
		const r = zt.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, xt(r[2]);
		return n = _, e = t, ft(_, t);
	} finally {
		zt.__wbindgen_free(n, e, 1);
	}
}
function u_() {
	zt.sha256StreamStart();
}
function b_(n, e) {
	const _ = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), t = Ut, r = zt.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = ft(r[0], r[1]).slice(), zt.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function d_(n, e, _, t, r) {
	const i = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut, c = Ct(e, zt.__wbindgen_malloc), l = Ut, a = St(_, zt.__wbindgen_malloc), s = Ut, w = Ct(t, zt.__wbindgen_malloc), g = Ut, u = St(r, zt.__wbindgen_malloc), b = Ut, d = zt.sleepRegularityIndex(i, o, c, l, a, s, w, g, u, b);
	if (d[3]) throw xt(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function f_(n, e) {
	const _ = zt.sleepWakeScores(n, kt(e) ? 0 : rt(e));
	if (_[2]) throw xt(_[1]);
	return xt(_[0]);
}
function m_(n) {
	const e = At(n, zt.__wbindgen_malloc), _ = Ut, t = zt.sourceLabelsWallClockMs(e, _);
	var r = ct(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function h_(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Ct(e, zt.__wbindgen_malloc), c = Ut, l = zt.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function p_(n, e, _) {
	const t = Ct(n, zt.__wbindgen_malloc), r = Ut, i = At(e, zt.__wbindgen_malloc), o = Ut, c = Ct(_, zt.__wbindgen_malloc), l = Ut, a = zt.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw xt(a[2]);
	let s;
	return 0 !== a[0] && (s = ct(a[0], a[1]).slice(), zt.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function y_(n) {
	return zt.startThreadPool(n);
}
function v_(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = Rt(e, zt.__wbindgen_malloc), c = Ut, l = Ct(_, zt.__wbindgen_malloc), a = Ut, s = Ct(t, zt.__wbindgen_malloc), w = Ut, g = zt.statesInPeriods(r, i, o, c, l, a, s, w);
	var u = st(g[0], g[1]).slice();
	return zt.__wbindgen_free(g[0], 1 * g[1], 1), u;
}
function k_(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = At(e, zt.__wbindgen_malloc), i = Ut, o = zt.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw xt(o[2]);
	var c = ct(o[0], o[1]).slice();
	return zt.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function S_(n) {
	const e = Rt(n, zt.__wbindgen_malloc), _ = Ut, t = zt.streamParseFeed(e, _);
	if (t[2]) throw xt(t[1]);
	return t[0] >>> 0;
}
function R_() {
	const n = zt.streamParseFinish();
	if (n[2]) throw xt(n[1]);
	return t.__wrap(n[0]);
}
function C_() {
	const n = zt.streamParseFinishChunk();
	if (n[2]) throw xt(n[1]);
	return _.__wrap(n[0]);
}
function A_(n) {
	const e = zt.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw xt(e[1]);
	return _.__wrap(e[0]);
}
function D_(n, e, _) {
	var t = kt(_) ? 0 : Dt(_, zt.__wbindgen_malloc, zt.__wbindgen_realloc), r = Ut;
	const i = zt.streamParseStart(n, e, t, r);
	if (i[1]) throw xt(i[0]);
}
function x_(n, e) {
	const _ = zt.streamParseStartData(n, e);
	if (_[1]) throw xt(_[0]);
}
function M_(n, e, _, t, r) {
	var i = kt(t) ? 0 : Dt(t, zt.__wbindgen_malloc, zt.__wbindgen_realloc), o = Ut;
	const c = zt.streamParseStartWithEpoch(n, e, _, i, o, !kt(r), kt(r) ? 0 : r);
	if (c[1]) throw xt(c[0]);
}
function P_(n, e) {
	const _ = Rt(n, zt.__wbindgen_malloc), t = Ut, r = zt.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw xt(r[1]);
	return xt(r[0]);
}
function F_(n) {
	const e = zt.summarizeExportGroups(n);
	if (e[3]) throw xt(e[2]);
	var _ = lt(e[0], e[1]).slice();
	return zt.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function I_(n) {
	const e = zt.summarizePhysicalActivityDays(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function W_(n) {
	const e = zt.summarizePhysicalActivityTrace(n);
	if (e[2]) throw xt(e[1]);
	return xt(e[0]);
}
function z_() {
	return 0 !== zt.threadPoolReady();
}
function U_(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = zt.thresholdProbabilities(_, t, e);
	var i = st(r[0], r[1]).slice();
	return zt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function O_(n) {
	const e = At(n, zt.__wbindgen_malloc), _ = Ut, t = zt.timeSemantics(e, _);
	if (t[3]) throw xt(t[2]);
	var r = lt(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function N_(n, e, _) {
	const t = Ct(n, zt.__wbindgen_malloc), r = Ut, i = zt.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw xt(i[2]);
	var o = lt(i[0], i[1]).slice();
	return zt.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function T_(n, e, _) {
	const t = zt.uniformTimestamps(n, e, _);
	var r = ct(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function G_(n, e) {
	const _ = zt.utcDatesInSpan(n, e);
	var t = lt(_[0], _[1]).slice();
	return zt.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function B_(n) {
	const e = Ct(n, zt.__wbindgen_malloc), _ = Ut, t = zt.utcDayIndex(e, _);
	if (t[2]) throw xt(t[1]);
	return xt(t[0]);
}
function j_(n) {
	const e = Rt(n, zt.__wbindgen_malloc), _ = Ut, t = zt.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function E_(n, e) {
	const _ = Ct(n, zt.__wbindgen_malloc), t = Ut, r = zt.validWearDays(_, t, kt(e) ? 0 : rt(e));
	if (r[3]) throw xt(r[2]);
	var i = st(r[0], r[1]).slice();
	return zt.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function L_(n, e, _) {
	const t = Ct(n, zt.__wbindgen_malloc), r = Ut, i = zt.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw xt(i[1]);
	return xt(i[0]);
}
function V_(n) {
	const e = Ct(n, zt.__wbindgen_malloc), _ = Ut, t = zt.wallClockLabels(e, _);
	var r = lt(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function H_(n, e, _) {
	const t = Rt(n, zt.__wbindgen_malloc), r = Ut, i = At(_, zt.__wbindgen_malloc), o = Ut, c = zt.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw xt(c[2]);
	var l = st(c[0], c[1]).slice();
	return zt.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var X_ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, tt.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, tt.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		zt.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		zt.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return zt.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return zt.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return zt.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function q_(n) {
	zt.wbg_rayon_start_worker(n);
}
function J_(n, e) {
	const _ = Dt(n, zt.__wbindgen_malloc, zt.__wbindgen_realloc), t = Ut;
	var r = kt(e) ? 0 : Dt(e, zt.__wbindgen_malloc, zt.__wbindgen_realloc), i = Ut;
	const o = zt.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw xt(o[1]);
	return xt(o[0]);
}
function Z_(n) {
	const e = At(n, zt.__wbindgen_malloc), _ = Ut, t = zt.weekendDates(e, _);
	var r = st(t[0], t[1]).slice();
	return zt.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $_(n, e, _, t) {
	const r = Ct(n, zt.__wbindgen_malloc), i = Ut, o = zt.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function Y_(n, e, _, t, r) {
	const i = Ct(n, zt.__wbindgen_malloc), o = Ut, c = Ct(e, zt.__wbindgen_malloc), l = Ut, a = Ct(_, zt.__wbindgen_malloc), s = Ut, w = zt.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw xt(w[1]);
	return xt(w[0]);
}
function K_(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(ft(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = Dt(String(e), zt.__wbindgen_malloc, zt.__wbindgen_realloc), t = Ut;
				gt().setInt32(n + 4, t, !0), gt().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				gt().setBigInt64(n + 8, kt(_) ? BigInt(0) : _, !0), gt().setInt32(n + 0, !kt(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return kt(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = Dt(ot(e), zt.__wbindgen_malloc, zt.__wbindgen_realloc), t = Ut;
				gt().setInt32(n + 4, t, !0), gt().setInt32(n + 0, _, !0);
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
				return zt.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return Wt;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const _ = "number" == typeof e ? e : void 0;
				gt().setFloat64(n + 8, kt(_) ? 0 : _, !0), gt().setInt32(n + 0, !kt(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = kt(_) ? 0 : Dt(_, zt.__wbindgen_malloc, zt.__wbindgen_realloc), r = Ut;
				gt().setInt32(n + 4, r, !0), gt().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(ft(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return vt(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return vt(function(n, e, _, t) {
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
					_ = n, t = e, console.error(ft(n, e));
				} finally {
					zt.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return vt(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return vt(function(n, e) {
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
				return new Uint32Array(at(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(ct(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== ut && ut.buffer === zt.memory.buffer || (ut = new Float32Array(zt.memory.buffer)), ut).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return vt(function(n) {
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
				return vt(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(st(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return vt(function(n, e, _) {
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
				const _ = Dt(e.stack, zt.__wbindgen_malloc, zt.__wbindgen_realloc), t = Ut;
				gt().setInt32(n + 4, t, !0), gt().setInt32(n + 0, _, !0);
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
				}(e, _, X_.__wrap(t));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return kt(n) ? 0 : rt(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return kt(n) ? 0 : rt(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return kt(n) ? 0 : rt(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return kt(n) ? 0 : rt(n);
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
						0 === --t.cnt && (zt.__wbindgen_destroy_closure(t.a, t.b), t.a = 0, it.unregister(t));
					}, it.register(r, t, t), r;
				}(n, e, Q_);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return st(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return ft(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = zt.__wbindgen_externrefs, e = n.grow(4);
				n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, !0), n.set(e + 3, !1);
			},
			memory: e || new WebAssembly.Memory({
				initial: 181,
				maximum: 65536,
				shared: !0
			})
		}
	};
}
function Q_(n, e, _) {
	zt.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, _);
}
Symbol.dispose && (X_.prototype[Symbol.dispose] = X_.prototype.free);
const nt = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => zt.__wbg_aw5batch_free(n >>> 0, 1)), et = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => zt.__wbg_streamchunkresult_free(n >>> 0, 1)), _t = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => zt.__wbg_streamparseresult_free(n >>> 0, 1)), tt = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => zt.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function rt(n) {
	const e = zt.__externref_table_alloc();
	return zt.__wbindgen_externrefs.set(e, n), e;
}
const it = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => zt.__wbindgen_destroy_closure(n.a, n.b));
function ot(n) {
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
		e > 0 && (_ += ot(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + ot(n[t]);
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
function ct(n, e) {
	return n >>>= 0, dt().subarray(n / 8, n / 8 + e);
}
function lt(n, e) {
	n >>>= 0;
	const _ = gt(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(zt.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return zt.__externref_drop_slice(n, e), t;
}
function at(n, e) {
	return n >>>= 0, ht().subarray(n / 4, n / 4 + e);
}
function st(n, e) {
	return n >>>= 0, yt().subarray(n / 1, n / 1 + e);
}
let wt = null;
function gt() {
	return null !== wt && wt.buffer === zt.memory.buffer || (wt = new DataView(zt.memory.buffer)), wt;
}
let ut = null, bt = null;
function dt() {
	return null !== bt && bt.buffer === zt.memory.buffer || (bt = new Float64Array(zt.memory.buffer)), bt;
}
function ft(n, e) {
	return function(n, e) {
		return Ft += e, Ft >= Pt && (Mt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Mt.decode(), Ft = e), Mt.decode(yt().slice(n, n + e));
	}(n >>>= 0, e);
}
let mt = null;
function ht() {
	return null !== mt && mt.buffer === zt.memory.buffer || (mt = new Uint32Array(zt.memory.buffer)), mt;
}
let pt = null;
function yt() {
	return null !== pt && pt.buffer === zt.memory.buffer || (pt = new Uint8Array(zt.memory.buffer)), pt;
}
function vt(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = rt(_);
		zt.__wbindgen_exn_store(n);
	}
}
function kt(n) {
	return null == n;
}
function St(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return ht().set(n, _ / 4), Ut = n.length, _;
}
function Rt(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return yt().set(n, _ / 1), Ut = n.length, _;
}
function Ct(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return dt().set(n, _ / 8), Ut = n.length, _;
}
function At(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = rt(n[t]);
		gt().setUint32(_ + 4 * t, e, !0);
	}
	return Ut = n.length, _;
}
function Dt(n, e, _) {
	if (void 0 === _) {
		const _ = It.encode(n), t = e(_.length, 1) >>> 0;
		return yt().subarray(t, t + _.length).set(_), Ut = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = yt();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = yt().subarray(r + o, r + t);
		o += It.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return Ut = o, r;
}
function xt(n) {
	const e = zt.__wbindgen_externrefs.get(n);
	return zt.__externref_table_dealloc(n), e;
}
let Mt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
Mt && Mt.decode();
const Pt = 2146435072;
let Ft = 0;
const It = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
It && (It.encodeInto = function(n, e) {
	const _ = It.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let Wt, zt, Ut = 0;
function Ot(n, e, _) {
	if (zt = n.exports, Wt = e, wt = null, ut = null, bt = null, mt = null, pt = null, void 0 !== _ && ("number" != typeof _ || 0 === _ || _ % 65536 != 0)) throw new Error("invalid stack size");
	return zt.__wbindgen_start(_), zt;
}
function Nt(n, e) {
	if (void 0 !== zt) return zt;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const t = K_(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Ot(new WebAssembly.Instance(n, t), n, _);
}
async function Tt(n, e) {
	if (void 0 !== zt) return zt;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-cB5IP0Sx.wasm", "" + import.meta.url));
	const t = K_(e);
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
	return Ot(r, i, _);
}
export { e as Aw5Batch, _ as StreamChunkResult, t as StreamParseResult, r as actiwareIntervalStatistics, i as actiwareSleepIntervals, o as actiwareWakeThreshold, c as actoursVersion, l as aggregateEpochSeries, a as analysisDatesOf, s as analysisWindowBounds, w as analysisWindowSlice, g as analyzePhysicalActivityDay, u as classifyActimetricPreschoolWristRf, b as classifyActimetricPreschoolWristRfLagLead, d as classifyActimetricPreschoolWristRfLagLeadCalibrated, f as clippedUnionHours, m as compareNonwearDetectorMasks, h as computeAnglez5s, p as computeCircadian, y as computeCircadianTyped, v as computeEnmo5s, k as computeMimsUnit, S as computeMimsUnitDataframe, R as computeMimsUnitTimingBreakdown, C as computeMimsUnitValues, A as computeNightDifficulty, D as computeNightDifficultyTyped, x as computeNightSignals, M as computeNightSignalsTyped, P as computeSleepMetrics, F as configureComputeMemoryBudgetV1, I as consensusDisagreementDetail, W as consensusDisagreements, z as convertBedWakeDaysDiary, U as convertScreensRedcapDiary, O as csvBufferAppend, N as csvBufferClear, T as cutpointEpochCompatibility, G as cutpointToneCodes, B as cutpointsRefusal, j as cutpointsValid, Tt as default, E as describeColumns, L as detectDetachFromAccelerationG, V as detectDeviceFormat, H as detectGgirHasptVariant, X as detectHdcza, q as detectHourClockJumpMs, J as detectNonwear, Z as detectNonwearChoi2011, $ as detectNonwearChoi2011Bouts, Y as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, Q as detectNonwearChoi2012Bouts, nn as detectNonwearChoi2012Epoch, en as detectNonwearChoiBouts, _n as detectNonwearUnified, tn as detectNonwearUnifiedBatchTyped, rn as dstPlaceholderRuns, on as effectiveOverrideCutpoints, cn as epochAgreement, ln as epochRawData, an as epochWithBandpass, sn as epochsOverlapping, wn as executeHeroRuntime, gn as exportNapAggregate, un as exportPeriodFigures, bn as extractCapsense, dn as foldOntoGrid, fn as foldSampleBlocks, mn as foldSleepWakeVotes, hn as foldUniformOntoGrid, pn as fuseNonwearMasks, yn as generateActiwareRestIntervals, vn as getComputeCapabilitiesV1, kn as ggir5sWallClockMs, Sn as ggirAppConfigSummary, Rn as ggirConfigValues, Cn as ggirDayValidFraction, An as ggirDaysIncluded, Dn as ggirDiaryLogShape, xn as ggirDstPlaceholderCuts, Mn as ggirIncludeDayCriterionHours, Pn as ggirIndicesToWallClockMs, Fn as ggirLabelsToStoredMs, In as ggirManualNightClocks, Wn as ggirMilestoneVersion, zn as ggirNonwearApproach, Un as ggirRerunProfiles, On as ggirSavedNonwearWindows, Nn as ggirSleeplogStoredClocks, Tn as ggirSptDurationHours, Gn as ggirSummaryDenominator, Bn as gridOffsetWithin, jn as identifyGgirRData, En as implausibilityReasons, Nt as initSync, Ln as initThreadPool, Vn as installPanicHook, Hn as interRaterReliability, Xn as irregularInternalDays, qn as isGeneactivFormat, Jn as linearMemoryBytesV1, Zn as lstmSpectralFeatures30s, $n as markerIndexRange, Yn as markerSleepOnsetOffset, Kn as medianGapSeconds, Qn as metricWarnings, ne as midSleepClockHours, ee as neishabouriCounts, _e as nextDate, te as nightIntervalOverlap, re as nonwearContributors, ie as nonwearInSleepCounts, oe as nonwearSleepOverlap, ce as nonwearWeightRuns, le as normalizeCutpoints, ae as parseActigraphCsv, se as parseActigraphCsvBuffered, we as parseAw5, ge as parseCwa, ue as parseEpochSeries, be as parseGeneactivBin, de as parseGeneactivCsv, fe as parseGeneactivCsvBuffered, me as parseGt3x, he as participantValidity, pe as physicalActivitySeriesGrid, ye as placeMarkers, ve as placeMarkersBatch, ke as placeMarkersTyped, Se as placeNonwearMarkers, Re as placeNonwearMarkersTyped, Ce as prepareCompactPipelineOutcomeV1, Ae as prepareCompactPipelineV1, De as processGeneactivRaw, xe as processGt3xPart1, Me as processGt3xPart1WithEpoch, Pe as processRawXyz, Fe as processRawXyzImputed, Ie as processRawXyzImputedWithEpoch, We as projectLabelsOntoGrid, ze as rasterizePeriods, Ue as readGgirMeta, Oe as readGgirReportCsv, Ne as recommended_chunk_size_mb, Te as reduceF64V1, Ge as rerunGgirResults, Be as resolveTimezone, je as restoredDstRuns, Ee as reviewGgirResults, Le as reviewNonwearFile, Ve as reviewNonwearTotals, He as roundCountStorage, Xe as runCompactPipelineOutcomeV1, qe as runCompactPipelineV1, Je as runFullPipelineOutcomeV1, Ze as runFullPipelineV1, $e as runGgirDeclaredEpochsV1, Ye as runGgirPart3, Ke as runMilestone, Qe as scoreAllDays, n_ as scoreColeKripke, e_ as scoreConsensus, __ as scoreConsensusMajority, t_ as scoreConsensusTyped, r_ as scoreEpochs, i_ as scoreEpochsTyped, o_ as scoreGgirHasib, c_ as scoreGgirHasibVariant, l_ as scoreGgirSib, a_ as scoreSadeh, s_ as settleManualNonwearNights, w_ as sha256StreamFeed, g_ as sha256StreamFinish, u_ as sha256StreamStart, b_ as shiftDate, d_ as sleepRegularityIndex, f_ as sleepWakeScores, m_ as sourceLabelsWallClockMs, h_ as spanFiniteMean, p_ as spliceDstPlaceholders, y_ as startThreadPool, v_ as statesInPeriods, k_ as storedToGgirLabelsMs, S_ as streamParseFeed, R_ as streamParseFinish, C_ as streamParseFinishChunk, A_ as streamParseFinishChunkWithProgress, D_ as streamParseStart, x_ as streamParseStartData, M_ as streamParseStartWithEpoch, P_ as summarizeActimetricPreschoolWristRfClasses, F_ as summarizeExportGroups, I_ as summarizePhysicalActivityDays, W_ as summarizePhysicalActivityTrace, z_ as threadPoolReady, U_ as thresholdProbabilities, O_ as timeSemantics, N_ as timestampDiscontinuities, T_ as uniformTimestamps, G_ as utcDatesInSpan, B_ as utcDayIndex, j_ as validStateFraction, E_ as validWearDays, L_ as wallClockDstPlaceholders, V_ as wallClockLabels, H_ as wallMaskOntoGgirGrid, X_ as wbg_rayon_PoolBuilder, q_ as wbg_rayon_start_worker, J_ as wearSiteHasptRouting, Z_ as weekendDates, $_ as windowCoverage, Y_ as zeroCrossingCounts };
