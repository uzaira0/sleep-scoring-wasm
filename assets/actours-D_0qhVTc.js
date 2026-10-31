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
		return this.__wbg_ptr = 0, et.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Ut.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = Dt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.aw5batch_new(e, _);
		if (t[2]) throw Mt(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, et.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), r = Ot;
		var i = St(_) ? 0 : xt(_, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot;
		const c = Ut.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw Mt(c[1]);
		return Mt(c[0]);
	}
	subjects(n) {
		const e = Ut.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw Mt(e[2]);
		var _ = at(e[0], e[1]).slice();
		return Ut.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
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
		Ut.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Ut.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Ut.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Ut.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Ut.streamchunkresult_axisX(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ut.streamchunkresult_axisY(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ut.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = Ut.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw Mt(n[1]);
		return Mt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== Ut.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ut.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = mt(n[0], n[1]).slice(), Ut.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Ut.streamchunkresult_counts(this.__wbg_ptr);
		var e = st(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Ut.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = st(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Ut.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Ut.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = Ut.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = wt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = Ut.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = wt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = Ut.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = lt(e[0], e[1]).slice();
		return Ut.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return Ut.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Ut.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Ut.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Ut.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Ut.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = mt(n[0], n[1]).slice(), Ut.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Ut.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Ut.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Ut.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Ut.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ut.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Ut.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ut.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = Ut.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = st(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Ut.streamchunkresult_temperature(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ut.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Ut.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ut.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Ut.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Ut.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Ut.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var t = class n {
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
		Ut.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Ut.streamparseresult_axisX(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ut.streamparseresult_axisY(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ut.streamparseresult_axisZ(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = Ut.streamparseresult_calibration(this.__wbg_ptr);
		if (n[2]) throw Mt(n[1]);
		return Mt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== Ut.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ut.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = mt(n[0], n[1]).slice(), Ut.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return Ut.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== Ut.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ut.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ut.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Ut.streamparseresult_temperature(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ut.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ut.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return Ut.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function r(n) {
	const e = Ut.actiwareIntervalStatistics(n);
	if (e[3]) throw Mt(e[2]);
	var _ = at(e[0], e[1]).slice();
	return Ut.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function i(n, e, _) {
	const t = Dt(e, Ut.__wbindgen_malloc), r = Ot, i = Ut.actiwareSleepIntervals(n, t, r, St(_) ? 0 : it(_));
	if (i[3]) throw Mt(i[2]);
	var o = at(i[0], i[1]).slice();
	return Ut.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function o(n, e) {
	const _ = Ut.actiwareWakeThreshold(n, St(e) ? 0 : it(e));
	if (_[3]) throw Mt(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function c() {
	let n, e;
	try {
		const _ = Ut.actoursVersion();
		return n = _[0], e = _[1], mt(_[0], _[1]);
	} finally {
		Ut.__wbindgen_free(n, e, 1);
	}
}
function l(n) {
	const e = Ut.aggregateEpochSeries(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function a(n) {
	const e = At(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.analysisDatesOf(e, _);
	var r = at(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function s(n, e) {
	const _ = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), t = Ot, r = Ut.analysisWindowBounds(_, t, !St(e), St(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = lt(r[0], r[1]).slice(), Ut.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function w(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), i = Ot, o = Ut.analysisWindowSlice(_, t, r, i);
	var c = st(o[0], o[1]).slice();
	return Ut.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function g(n) {
	let e, _;
	try {
		const i = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot, c = Ut.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Mt(c[2]);
		return e = t, _ = r, mt(t, r);
	} finally {
		Ut.__wbindgen_free(e, _, 1);
	}
}
function u(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = At(e, Ut.__wbindgen_malloc), c = Ot, l = At(_, Ut.__wbindgen_malloc), a = Ot, s = Ut.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw Mt(s[2]);
	var w = wt(s[0], s[1]).slice();
	return Ut.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function b(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = At(e, Ut.__wbindgen_malloc), c = Ot, l = At(_, Ut.__wbindgen_malloc), a = Ot, s = Ut.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw Mt(s[2]);
	var w = wt(s[0], s[1]).slice();
	return Ut.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function d(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = At(e, Ut.__wbindgen_malloc), c = Ot, l = At(_, Ut.__wbindgen_malloc), a = Ot, s = Ut.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw Mt(s[2]);
	var w = wt(s[0], s[1]).slice();
	return Ut.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function f(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = At(e, Ut.__wbindgen_malloc), c = Ot;
	return Ut.clippedUnionHours(r, i, o, c, _, t);
}
function m(n, e) {
	const _ = Ut.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw Mt(_[1]);
	return Mt(_[0]);
}
function h(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = At(e, Ut.__wbindgen_malloc), c = Ot, l = At(_, Ut.__wbindgen_malloc), a = Ot, s = Ut.computeAnglez5s(r, i, o, c, l, a, t);
	var w = lt(s[0], s[1]).slice();
	return Ut.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function p(n) {
	let e, _;
	try {
		const i = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot, c = Ut.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Mt(c[2]);
		return e = t, _ = r, mt(t, r);
	} finally {
		Ut.__wbindgen_free(e, _, 1);
	}
}
function y(n, e, _, t, r, i, o) {
	const c = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), l = Ot, a = At(e, Ut.__wbindgen_malloc), s = Ot, w = Ct(_, Ut.__wbindgen_malloc), g = Ot, u = At(t, Ut.__wbindgen_malloc), b = Ot, d = Ct(r, Ut.__wbindgen_malloc), f = Ot, m = Rt(i, Ut.__wbindgen_malloc), h = Ot, p = Ct(o, Ut.__wbindgen_malloc), y = Ot, v = Ut.computeCircadianTyped(c, l, a, s, w, g, u, b, d, f, m, h, p, y);
	if (v[2]) throw Mt(v[1]);
	return Mt(v[0]);
}
function v(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = At(e, Ut.__wbindgen_malloc), c = Ot, l = At(_, Ut.__wbindgen_malloc), a = Ot, s = Ut.computeEnmo5s(r, i, o, c, l, a, t);
	var w = lt(s[0], s[1]).slice();
	return Ut.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function k(n, e, _, t, r) {
	const i = At(n, Ut.__wbindgen_malloc), o = Ot, c = At(e, Ut.__wbindgen_malloc), l = Ot, a = At(_, Ut.__wbindgen_malloc), s = Ot, w = Ut.computeMimsUnit(i, o, c, l, a, s, t, St(r) ? 0 : it(r));
	if (w[2]) throw Mt(w[1]);
	return Mt(w[0]);
}
function S(n, e, _, t, r) {
	const i = At(n, Ut.__wbindgen_malloc), o = Ot, c = At(e, Ut.__wbindgen_malloc), l = Ot, a = At(_, Ut.__wbindgen_malloc), s = Ot, w = At(t, Ut.__wbindgen_malloc), g = Ot, u = Ut.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, St(r) ? 0 : it(r));
	if (u[2]) throw Mt(u[1]);
	return Mt(u[0]);
}
function C(n, e, _, t, r) {
	const i = At(n, Ut.__wbindgen_malloc), o = Ot, c = At(e, Ut.__wbindgen_malloc), l = Ot, a = At(_, Ut.__wbindgen_malloc), s = Ot, w = Ut.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, St(r) ? 0 : it(r));
	if (w[2]) throw Mt(w[1]);
	return Mt(w[0]);
}
function R(n, e, _, t, r) {
	const i = At(n, Ut.__wbindgen_malloc), o = Ot, c = At(e, Ut.__wbindgen_malloc), l = Ot, a = At(_, Ut.__wbindgen_malloc), s = Ot, w = Ut.computeMimsUnitValues(i, o, c, l, a, s, t, St(r) ? 0 : it(r));
	if (w[3]) throw Mt(w[2]);
	var g = lt(w[0], w[1]).slice();
	return Ut.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function A(n) {
	let e, _;
	try {
		const i = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot, c = Ut.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Mt(c[2]);
		return e = t, _ = r, mt(t, r);
	} finally {
		Ut.__wbindgen_free(e, _, 1);
	}
}
function D(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), y = Ot, v = At(e, Ut.__wbindgen_malloc), k = Ot, S = Ct(_, Ut.__wbindgen_malloc), C = Ot, R = At(t, Ut.__wbindgen_malloc), A = Ot, D = Ct(r, Ut.__wbindgen_malloc), x = Ot, M = Rt(i, Ut.__wbindgen_malloc), P = Ot, F = Ct(o, Ut.__wbindgen_malloc), W = Ot, I = Rt(c, Ut.__wbindgen_malloc), z = Ot, U = Ct(l, Ut.__wbindgen_malloc), O = Ot, N = At(a, Ut.__wbindgen_malloc), T = Ot, G = Ct(s, Ut.__wbindgen_malloc), B = Ot, j = At(w, Ut.__wbindgen_malloc), E = Ot, L = Ct(g, Ut.__wbindgen_malloc), V = Ot, H = At(u, Ut.__wbindgen_malloc), X = Ot, q = Ct(b, Ut.__wbindgen_malloc), J = Ot, Z = At(d, Ut.__wbindgen_malloc), $ = Ot, Y = Ct(f, Ut.__wbindgen_malloc), K = Ot, Q = Rt(m, Ut.__wbindgen_malloc), nn = Ot, en = Ct(h, Ut.__wbindgen_malloc), _n = Ot, tn = Ut.computeNightDifficultyTyped(p, y, v, k, S, C, R, A, D, x, M, P, F, W, I, z, U, O, N, T, G, B, j, E, L, V, H, X, q, J, Z, $, Y, K, Q, nn, en, _n);
	if (tn[2]) throw Mt(tn[1]);
	return Mt(tn[0]);
}
function x(n) {
	let e, _;
	try {
		const i = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot, c = Ut.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Mt(c[2]);
		return e = t, _ = r, mt(t, r);
	} finally {
		Ut.__wbindgen_free(e, _, 1);
	}
}
function M(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), y = Ot, v = At(e, Ut.__wbindgen_malloc), k = Ot, S = Ct(_, Ut.__wbindgen_malloc), C = Ot, R = At(t, Ut.__wbindgen_malloc), A = Ot, D = Ct(r, Ut.__wbindgen_malloc), x = Ot, M = Rt(i, Ut.__wbindgen_malloc), P = Ot, F = Ct(o, Ut.__wbindgen_malloc), W = Ot, I = Rt(c, Ut.__wbindgen_malloc), z = Ot, U = Ct(l, Ut.__wbindgen_malloc), O = Ot, N = At(a, Ut.__wbindgen_malloc), T = Ot, G = Ct(s, Ut.__wbindgen_malloc), B = Ot, j = At(w, Ut.__wbindgen_malloc), E = Ot, L = Ct(g, Ut.__wbindgen_malloc), V = Ot, H = At(u, Ut.__wbindgen_malloc), X = Ot, q = Ct(b, Ut.__wbindgen_malloc), J = Ot, Z = At(d, Ut.__wbindgen_malloc), $ = Ot, Y = Ct(f, Ut.__wbindgen_malloc), K = Ot, Q = Rt(m, Ut.__wbindgen_malloc), nn = Ot, en = Ct(h, Ut.__wbindgen_malloc), _n = Ot, tn = Ut.computeNightSignalsTyped(p, y, v, k, S, C, R, A, D, x, M, P, F, W, I, z, U, O, N, T, G, B, j, E, L, V, H, X, q, J, Z, $, Y, K, Q, nn, en, _n);
	if (tn[2]) throw Mt(tn[1]);
	return Mt(tn[0]);
}
function P(n, e, _) {
	const t = Rt(n, Ut.__wbindgen_malloc), r = Ot, i = At(e, Ut.__wbindgen_malloc), o = Ot, c = Ut.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw Mt(c[1]);
	return Mt(c[0]);
}
function F(n) {
	const e = Ut.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function W(n) {
	const e = Dt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.consensusDisagreementDetail(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function I(n) {
	const e = Ut.consensusDisagreements(n);
	if (e[3]) throw Mt(e[2]);
	var _ = at(e[0], e[1]).slice();
	return Ut.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function z(n) {
	const e = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), _ = Ot, t = Ut.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function U(n) {
	const e = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), _ = Ot, t = Ut.convertScreensRedcapDiary(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function O(n) {
	const e = Rt(n, Ut.__wbindgen_malloc), _ = Ot;
	Ut.csvBufferAppend(e, _);
}
function N(n) {
	Ut.csvBufferClear(n);
}
function T(n, e) {
	const _ = Ut.cutpointEpochCompatibility(n, e);
	if (_[2]) throw Mt(_[1]);
	return Mt(_[0]);
}
function G(n, e, _, t, r) {
	const i = At(n, Ut.__wbindgen_malloc), o = Ot, c = Ut.cutpointToneCodes(i, o, e, _, t, r);
	var l = wt(c[0], c[1]).slice();
	return Ut.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = Ut.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = mt(r[0], r[1]).slice(), Ut.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function j(n, e, _, t) {
	return 0 !== Ut.cutpointsValid(n, e, _, t);
}
function E(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = Ct(e, Ut.__wbindgen_malloc), i = Ot, o = Ut.describeColumns(_, t, r, i);
	if (o[3]) throw Mt(o[2]);
	var c = at(o[0], o[1]).slice();
	return Ut.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function L(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = At(e, Ut.__wbindgen_malloc), i = Ot, o = Ut.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw Mt(o[2]);
	var c = wt(o[0], o[1]).slice();
	return Ut.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function V(n, e) {
	let _, t;
	try {
		const r = Rt(n, Ut.__wbindgen_malloc), i = Ot, o = xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), c = Ot, l = Ut.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], mt(l[0], l[1]);
	} finally {
		Ut.__wbindgen_free(_, t, 1);
	}
}
function H(n) {
	const e = Ut.detectGgirHasptVariant(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function X(n, e, _, t, r) {
	const i = At(n, Ut.__wbindgen_malloc), o = Ot;
	var c = St(e) ? 0 : xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), l = Ot, a = St(_) ? 0 : At(_, Ut.__wbindgen_malloc), s = Ot, w = St(t) ? 0 : At(t, Ut.__wbindgen_malloc), g = Ot, u = St(r) ? 0 : xt(r, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), b = Ot;
	const d = Ut.detectHdcza(i, o, c, l, a, s, w, g, u, b);
	if (d[2]) throw Mt(d[1]);
	return Mt(d[0]);
}
function q(n) {
	const e = At(n, Ut.__wbindgen_malloc), _ = Ot;
	return 0 !== Ut.detectHourClockJumpMs(e, _);
}
function J(n) {
	const e = At(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.detectNonwear(e, _);
	var r = wt(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Z(n) {
	const e = At(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.detectNonwearChoi2011(e, _);
	var r = wt(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = At(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.detectNonwearChoi2011Bouts(e, _);
	if (t[3]) throw Mt(t[2]);
	var r = at(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Y(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = Ut.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw Mt(r[2]);
	var i = wt(r[0], r[1]).slice();
	return Ut.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = At(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.detectNonwearChoi2012(e, _);
	var r = wt(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Q(n) {
	const e = At(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.detectNonwearChoi2012Bouts(e, _);
	if (t[3]) throw Mt(t[2]);
	var r = at(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function nn(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = Ut.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw Mt(r[2]);
	var i = wt(r[0], r[1]).slice();
	return Ut.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function en(n) {
	const e = At(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.detectNonwearChoiBouts(e, _);
	if (t[3]) throw Mt(t[2]);
	var r = at(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function _n(n) {
	let e, _;
	try {
		const i = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot, c = Ut.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Mt(c[2]);
		return e = t, _ = r, mt(t, r);
	} finally {
		Ut.__wbindgen_free(e, _, 1);
	}
}
function tn(n, e, _, t, r, i, o) {
	const c = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), l = Ot, a = xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), s = Ot, w = At(_, Ut.__wbindgen_malloc), g = Ot, u = At(t, Ut.__wbindgen_malloc), b = Ot, d = At(r, Ut.__wbindgen_malloc), f = Ot, m = Ut.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, u, b, d, f, i, o);
	if (m[2]) throw Mt(m[1]);
	return Mt(m[0]);
}
function rn(n, e, _) {
	const t = Dt(_, Ut.__wbindgen_malloc), r = Ot, i = Ut.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw Mt(i[2]);
	var o = at(i[0], i[1]).slice();
	return Ut.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function on(n, e, _, t) {
	const r = Ut.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = lt(r[0], r[1]).slice(), Ut.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function cn(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = At(e, Ut.__wbindgen_malloc), i = Ot, o = Ut.epochAgreement(_, t, r, i);
	if (o[2]) throw Mt(o[1]);
	return Mt(o[0]);
}
function ln(n, e, _, t, r) {
	const i = At(n, Ut.__wbindgen_malloc), o = Ot, c = At(e, Ut.__wbindgen_malloc), l = Ot, a = At(_, Ut.__wbindgen_malloc), s = Ot, w = At(t, Ut.__wbindgen_malloc), g = Ot, u = Ut.epochRawData(i, o, c, l, a, s, w, g, r);
	if (u[2]) throw Mt(u[1]);
	return Mt(u[0]);
}
function an(n, e, _) {
	const t = At(n, Ut.__wbindgen_malloc), r = Ot, i = At(e, Ut.__wbindgen_malloc), o = Ot, c = Ut.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw Mt(c[1]);
	return Mt(c[0]);
}
function sn(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = Ut.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = st(o[0], o[1]).slice(), Ut.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function wn(n, e) {
	let _, t;
	try {
		const o = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), c = Ot, l = xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), a = Ot, s = Ut.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Mt(s[2]);
		return _ = r, t = i, mt(r, i);
	} finally {
		Ut.__wbindgen_free(_, t, 1);
	}
}
function gn(n) {
	const e = Dt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.exportNapAggregate(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function un(n, e, _) {
	const t = Dt(_, Ut.__wbindgen_malloc), r = Ot, i = Ut.exportPeriodFigures(!St(n), St(n) ? 0 : n, !St(e), St(e) ? 0 : e, t, r);
	if (i[2]) throw Mt(i[1]);
	return Mt(i[0]);
}
function bn(n) {
	const e = Rt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.extractCapsense(e, _);
	if (t[3]) throw Mt(t[2]);
	var r = at(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function dn(n, e, _, t, r) {
	const i = At(n, Ut.__wbindgen_malloc), o = Ot, c = At(e, Ut.__wbindgen_malloc), l = Ot, a = At(_, Ut.__wbindgen_malloc), s = Ot, w = xt(r, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), g = Ot, u = Ut.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (u[3]) throw Mt(u[2]);
	var b = lt(u[0], u[1]).slice();
	return Ut.__wbindgen_free(u[0], 8 * u[1], 8), b;
}
function fn(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = xt(t, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), c = Ot, l = Ut.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw Mt(l[2]);
	var a = lt(l[0], l[1]).slice();
	return Ut.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function mn(n, e, _, t, r) {
	const i = Rt(_, Ut.__wbindgen_malloc), o = Ot, c = At(t, Ut.__wbindgen_malloc), l = Ot, a = Ut.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw Mt(a[1]);
	return Mt(a[0]);
}
function hn(n, e, _, t, r, i) {
	const o = At(_, Ut.__wbindgen_malloc), c = Ot, l = At(t, Ut.__wbindgen_malloc), a = Ot, s = xt(i, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), w = Ot, g = Ut.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw Mt(g[2]);
	var u = lt(g[0], g[1]).slice();
	return Ut.__wbindgen_free(g[0], 8 * g[1], 8), u;
}
function pn(n) {
	const e = Ut.fuseNonwearMasks(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function yn(n, e, _) {
	var t = St(_) ? 0 : xt(_, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), r = Ot;
	const i = Ut.generateActiwareRestIntervals(n, St(e) ? 0 : it(e), t, r);
	if (i[3]) throw Mt(i[2]);
	var o = at(i[0], i[1]).slice();
	return Ut.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function vn() {
	const n = Ut.getComputeCapabilitiesV1();
	if (n[2]) throw Mt(n[1]);
	return Mt(n[0]);
}
function kn(n, e, _) {
	const t = Dt(_, Ut.__wbindgen_malloc), r = Ot, i = Ut.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw Mt(i[2]);
	var o = lt(i[0], i[1]).slice();
	return Ut.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function Sn(n, e) {
	var _ = St(n) ? 0 : xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), t = Ot;
	const r = Ut.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw Mt(r[1]);
	return Mt(r[0]);
}
function Cn(n) {
	const e = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), _ = Ot, t = Ut.ggirConfigValues(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function Rn(n, e) {
	const _ = Ut.ggirDayValidFraction(n, e);
	return 0 === _[0] ? void 0 : _[1];
}
function An(n, e, _) {
	const t = At(n, Ut.__wbindgen_malloc), r = Ot;
	var i = St(e) ? 0 : At(e, Ut.__wbindgen_malloc), o = Ot, c = St(_) ? 0 : xt(_, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), l = Ot;
	const a = Ut.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw Mt(a[2]);
	var s = wt(a[0], a[1]).slice();
	return Ut.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function Dn(n, e) {
	const _ = Rt(n, Ut.__wbindgen_malloc), t = Ot;
	var r = St(e) ? 0 : xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), i = Ot;
	const o = Ut.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw Mt(o[1]);
	return Mt(o[0]);
}
function xn(n, e, _) {
	const t = Dt(e, Ut.__wbindgen_malloc), r = Ot;
	var i = St(_) ? 0 : At(_, Ut.__wbindgen_malloc), o = Ot;
	const c = Ut.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw Mt(c[2]);
	var l = at(c[0], c[1]).slice();
	return Ut.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function Mn(n) {
	var e = St(n) ? 0 : xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), _ = Ot;
	const t = Ut.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw Mt(t[1]);
	return t[0];
}
function Pn(n, e, _, t) {
	const r = Ct(n, Ut.__wbindgen_malloc), i = Ot, o = Dt(_, Ut.__wbindgen_malloc), c = Ot;
	var l = St(t) ? 0 : At(t, Ut.__wbindgen_malloc), a = Ot;
	const s = Ut.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw Mt(s[2]);
	var w = lt(s[0], s[1]).slice();
	return Ut.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function Fn(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = Dt(e, Ut.__wbindgen_malloc), i = Ot, o = Ut.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw Mt(o[2]);
	var c = lt(o[0], o[1]).slice();
	return Ut.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Wn(n, e, _, t) {
	const r = Dt(n, Ut.__wbindgen_malloc), i = Ot, o = At(e, Ut.__wbindgen_malloc), c = Ot, l = At(_, Ut.__wbindgen_malloc), a = Ot, s = At(t, Ut.__wbindgen_malloc), w = Ot, g = Ut.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw Mt(g[1]);
	return Mt(g[0]);
}
function In(n) {
	const e = Rt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.ggirMilestoneVersion(e, _);
	if (t[3]) throw Mt(t[2]);
	let r;
	return 0 !== t[0] && (r = mt(t[0], t[1]).slice(), Ut.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function zn(n) {
	const e = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), _ = Ot, t = Ut.ggirNonwearApproach(e, _);
	if (t[3]) throw Mt(t[2]);
	let r;
	return 0 !== t[0] && (r = mt(t[0], t[1]).slice(), Ut.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Un(n) {
	const e = Ut.ggirPersonSummaries(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function On() {
	const n = Ut.ggirRerunProfiles();
	if (n[3]) throw Mt(n[2]);
	var e = at(n[0], n[1]).slice();
	return Ut.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function Nn(n) {
	const e = Rt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.ggirSavedNonwearWindows(e, _);
	if (t[2]) throw Mt(t[1]);
	return t[0] >>> 0;
}
function Tn(n, e, _, t) {
	const r = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), i = Ot, o = xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), c = Ot, l = xt(_, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), a = Ot, s = Dt(t, Ut.__wbindgen_malloc), w = Ot, g = Ut.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw Mt(g[2]);
	let u;
	return 0 !== g[0] && (u = at(g[0], g[1]).slice(), Ut.__wbindgen_free(g[0], 4 * g[1], 4)), u;
}
function Gn(n, e) {
	return Ut.ggirSptDurationHours(n, e);
}
function Bn(n, e) {
	const _ = Ut.ggirSummaryDenominator(n, e);
	if (_[2]) throw Mt(_[1]);
	return Mt(_[0]);
}
function jn(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = At(e, Ut.__wbindgen_malloc), i = Ot, o = Ut.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function En(n) {
	let e, _;
	try {
		const i = Rt(n, Ut.__wbindgen_malloc), o = Ot, c = Ut.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Mt(c[2]);
		return e = t, _ = r, mt(t, r);
	} finally {
		Ut.__wbindgen_free(e, _, 1);
	}
}
function Ln(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = At(e, Ut.__wbindgen_malloc), c = Ot, l = At(_, Ut.__wbindgen_malloc), a = Ot, s = At(t, Ut.__wbindgen_malloc), w = Ot, g = Ut.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw Mt(g[1]);
	return Mt(g[0]);
}
function Vn(n) {
	return Ut.initThreadPool(n);
}
function Hn() {
	Ut.installPanicHook();
}
function Xn(n) {
	const e = Dt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.interRaterReliability(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function qn(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = Ut.irregularInternalDays(_, t, e);
	var i = at(r[0], r[1]).slice();
	return Ut.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Jn(n) {
	const e = Rt(n, Ut.__wbindgen_malloc), _ = Ot;
	return 0 !== Ut.isGeneactivFormat(e, _);
}
function Zn() {
	return Ut.linearMemoryBytesV1();
}
function $n(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = At(e, Ut.__wbindgen_malloc), c = Ot, l = At(_, Ut.__wbindgen_malloc), a = Ot, s = Ut.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw Mt(s[1]);
	return Mt(s[0]);
}
function Yn(n, e, _) {
	const t = At(n, Ut.__wbindgen_malloc), r = Ot, i = Ut.markerIndexRange(t, r, e, _);
	var o = st(i[0], i[1]).slice();
	return Ut.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Kn(n, e, _, t, r, i, o) {
	const c = At(n, Ut.__wbindgen_malloc), l = Ot, a = At(e, Ut.__wbindgen_malloc), s = Ot, w = Ut.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw Mt(w[1]);
	return Mt(w[0]);
}
function Qn(n) {
	const e = At(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function ne(n, e, _, t) {
	const r = Ut.metricWarnings(n, e, _, t);
	var i = wt(r[0], r[1]).slice();
	return Ut.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function ee(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = At(e, Ut.__wbindgen_malloc), i = Ot, o = Ut.midSleepClockHours(_, t, r, i);
	var c = lt(o[0], o[1]).slice();
	return Ut.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function _e(n, e, _, t, r) {
	const i = At(n, Ut.__wbindgen_malloc), o = Ot, c = At(e, Ut.__wbindgen_malloc), l = Ot, a = At(_, Ut.__wbindgen_malloc), s = Ot, w = Ut.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw Mt(w[1]);
	return Mt(w[0]);
}
function te(n) {
	const e = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), _ = Ot, t = Ut.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = mt(t[0], t[1]).slice(), Ut.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function re(n, e, _, t, r) {
	const i = At(_, Ut.__wbindgen_malloc), o = Ot, c = At(t, Ut.__wbindgen_malloc), l = Ot, a = At(r, Ut.__wbindgen_malloc), s = Ot, w = Ut.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw Mt(w[1]);
	return Mt(w[0]);
}
function ie(n, e, _, t) {
	let r, i;
	try {
		const l = Ct(n, Ut.__wbindgen_malloc), a = Ot, s = xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), w = Ot, g = Ut.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, Mt(g[2]);
		return r = o, i = c, mt(o, c);
	} finally {
		Ut.__wbindgen_free(r, i, 1);
	}
}
function oe(n) {
	const e = At(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.nonwearInSleepCounts(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function ce(n) {
	const e = Ut.nonwearSleepOverlap(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function le(n, e, _) {
	const t = At(n, Ut.__wbindgen_malloc), r = Ot, i = At(e, Ut.__wbindgen_malloc), o = Ot, c = Ut.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw Mt(c[1]);
	return Mt(c[0]);
}
function ae(n, e, _, t, r, i) {
	const o = xt(r, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), c = Ot, l = Ut.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw Mt(l[2]);
	var a = lt(l[0], l[1]).slice();
	return Ut.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function se(n, e) {
	const _ = Rt(n, Ut.__wbindgen_malloc), t = Ot, r = Ut.parseActigraphCsv(_, t, e);
	if (r[2]) throw Mt(r[1]);
	return Mt(r[0]);
}
function we(n) {
	const e = Ut.parseActigraphCsvBuffered(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function ge(n, e, _, t) {
	const r = Rt(n, Ut.__wbindgen_malloc), i = Ot;
	var o = St(e) ? 0 : xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), c = Ot, l = St(_) ? 0 : Dt(_, Ut.__wbindgen_malloc), a = Ot, s = St(t) ? 0 : xt(t, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), w = Ot;
	const g = Ut.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw Mt(g[1]);
	return Mt(g[0]);
}
function ue(n) {
	const e = Rt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.parseCwa(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function be(n, e) {
	const _ = Rt(n, Ut.__wbindgen_malloc), t = Ot, r = xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), i = Ot, o = Ut.parseEpochSeries(_, t, r, i);
	if (o[2]) throw Mt(o[1]);
	return Mt(o[0]);
}
function de(n) {
	const e = Rt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.parseGeneactivBin(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function fe(n) {
	const e = Rt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.parseGeneactivCsv(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function me() {
	const n = Ut.parseGeneactivCsvBuffered();
	if (n[2]) throw Mt(n[1]);
	return Mt(n[0]);
}
function he(n) {
	const e = Rt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.parseGt3x(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function pe(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = Rt(e, Ut.__wbindgen_malloc), c = Ot, l = Rt(_, Ut.__wbindgen_malloc), a = Ot, s = Ut.participantValidity(r, i, o, c, l, a, St(t) ? 0 : it(t));
	if (s[2]) throw Mt(s[1]);
	return Mt(s[0]);
}
function ye(n, e, _, t, r) {
	const i = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot, c = At(e, Ut.__wbindgen_malloc), l = Ot;
	var a = St(_) ? 0 : At(_, Ut.__wbindgen_malloc), s = Ot;
	const w = Ut.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw Mt(w[1]);
	return Mt(w[0]);
}
function ve(n) {
	let e, _;
	try {
		const i = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot, c = Ut.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Mt(c[2]);
		return e = t, _ = r, mt(t, r);
	} finally {
		Ut.__wbindgen_free(e, _, 1);
	}
}
function ke(n, e, _, t, r, i) {
	const o = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), c = Ot, l = At(e, Ut.__wbindgen_malloc), a = Ot, s = At(_, Ut.__wbindgen_malloc), w = Ot, g = Rt(t, Ut.__wbindgen_malloc), u = Ot, b = Rt(r, Ut.__wbindgen_malloc), d = Ot, f = xt(i, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), m = Ot, h = Ut.placeMarkersBatch(o, c, l, a, s, w, g, u, b, d, f, m);
	if (h[2]) throw Mt(h[1]);
	return Mt(h[0]);
}
function Se(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h, p) {
	const y = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), v = Ot, k = At(e, Ut.__wbindgen_malloc), S = Ot, C = Ct(_, Ut.__wbindgen_malloc), R = Ot, A = At(t, Ut.__wbindgen_malloc), D = Ot, x = Ct(r, Ut.__wbindgen_malloc), M = Ot, P = Rt(i, Ut.__wbindgen_malloc), F = Ot, W = Ct(o, Ut.__wbindgen_malloc), I = Ot, z = Rt(c, Ut.__wbindgen_malloc), U = Ot, O = Ct(l, Ut.__wbindgen_malloc), N = Ot, T = At(a, Ut.__wbindgen_malloc), G = Ot, B = Ct(s, Ut.__wbindgen_malloc), j = Ot, E = At(w, Ut.__wbindgen_malloc), L = Ot, V = Ct(g, Ut.__wbindgen_malloc), H = Ot, X = At(u, Ut.__wbindgen_malloc), q = Ot, J = Ct(b, Ut.__wbindgen_malloc), Z = Ot, $ = At(d, Ut.__wbindgen_malloc), Y = Ot, K = Ct(f, Ut.__wbindgen_malloc), Q = Ot, nn = Rt(m, Ut.__wbindgen_malloc), en = Ot, _n = Ct(h, Ut.__wbindgen_malloc), tn = Ot;
	var rn = St(p) ? 0 : xt(p, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), on = Ot;
	const cn = Ut.placeMarkersTyped(y, v, k, S, C, R, A, D, x, M, P, F, W, I, z, U, O, N, T, G, B, j, E, L, V, H, X, q, J, Z, $, Y, K, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw Mt(cn[1]);
	return Mt(cn[0]);
}
function Ce(n) {
	let e, _;
	try {
		const i = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot, c = Ut.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Mt(c[2]);
		return e = t, _ = r, mt(t, r);
	} finally {
		Ut.__wbindgen_free(e, _, 1);
	}
}
function Re(n, e, _, t) {
	const r = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), i = Ot, o = At(e, Ut.__wbindgen_malloc), c = Ot, l = At(_, Ut.__wbindgen_malloc), a = Ot, s = Rt(t, Ut.__wbindgen_malloc), w = Ot, g = Ut.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw Mt(g[1]);
	return Mt(g[0]);
}
function Ae(n) {
	const e = Ut.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function De(n) {
	const e = Ut.prepareCompactPipelineV1(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function xe(n, e, _, t, r, i, o, c) {
	const l = At(n, Ut.__wbindgen_malloc), a = Ot, s = At(e, Ut.__wbindgen_malloc), w = Ot, g = At(_, Ut.__wbindgen_malloc), u = Ot, b = At(t, Ut.__wbindgen_malloc), d = Ot;
	var f = St(o) ? 0 : xt(o, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), m = Ot, h = St(c) ? 0 : xt(c, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), p = Ot;
	const y = Ut.processGeneactivRaw(l, a, s, w, g, u, b, d, r, i, f, m, h, p);
	if (y[2]) throw Mt(y[1]);
	return Mt(y[0]);
}
function Me(n, e) {
	const _ = Rt(n, Ut.__wbindgen_malloc), t = Ot;
	var r = St(e) ? 0 : xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), i = Ot;
	const o = Ut.processGt3xPart1(_, t, r, i);
	if (o[2]) throw Mt(o[1]);
	return Mt(o[0]);
}
function Pe(n, e, _) {
	const t = Rt(n, Ut.__wbindgen_malloc), r = Ot;
	var i = St(_) ? 0 : xt(_, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot;
	const c = Ut.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw Mt(c[1]);
	return Mt(c[0]);
}
function Fe(n, e, _, t, r, i, o) {
	const c = At(n, Ut.__wbindgen_malloc), l = Ot, a = At(e, Ut.__wbindgen_malloc), s = Ot, w = At(_, Ut.__wbindgen_malloc), g = Ot;
	var u = St(i) ? 0 : xt(i, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), b = Ot, d = St(o) ? 0 : xt(o, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), f = Ot;
	const m = Ut.processRawXyz(c, l, a, s, w, g, t, r, u, b, d, f);
	if (m[2]) throw Mt(m[1]);
	return Mt(m[0]);
}
function We(n, e, _, t, r, i, o, c) {
	const l = At(n, Ut.__wbindgen_malloc), a = Ot, s = At(e, Ut.__wbindgen_malloc), w = Ot, g = At(_, Ut.__wbindgen_malloc), u = Ot, b = At(t, Ut.__wbindgen_malloc), d = Ot;
	var f = St(i) ? 0 : xt(i, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), m = Ot, h = St(o) ? 0 : xt(o, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), p = Ot, y = St(c) ? 0 : At(c, Ut.__wbindgen_malloc), v = Ot;
	const k = Ut.processRawXyzImputed(l, a, s, w, g, u, b, d, r, f, m, h, p, y, v);
	if (k[2]) throw Mt(k[1]);
	return Mt(k[0]);
}
function Ie(n, e, _, t, r, i, o, c, l, a) {
	const s = At(n, Ut.__wbindgen_malloc), w = Ot, g = At(e, Ut.__wbindgen_malloc), u = Ot, b = At(_, Ut.__wbindgen_malloc), d = Ot, f = At(t, Ut.__wbindgen_malloc), m = Ot;
	var h = St(i) ? 0 : xt(i, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), p = Ot, y = St(c) ? 0 : xt(c, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), v = Ot, k = St(a) ? 0 : At(a, Ut.__wbindgen_malloc), S = Ot;
	const C = Ut.processRawXyzImputedWithEpoch(s, w, g, u, b, d, f, m, r, h, p, o, y, v, St(l) ? 16777215 : l ? 1 : 0, k, S);
	if (C[2]) throw Mt(C[1]);
	return Mt(C[0]);
}
function ze(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = Rt(e, Ut.__wbindgen_malloc), c = Ot, l = At(t, Ut.__wbindgen_malloc), a = Ot, s = Ut.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = wt(s[0], s[1]).slice();
	return Ut.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function Ue(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = At(e, Ut.__wbindgen_malloc), c = Ot, l = At(_, Ut.__wbindgen_malloc), a = Ot, s = Ut.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw Mt(s[1]);
	return Mt(s[0]);
}
function Oe(n, e, _) {
	const t = Rt(n, Ut.__wbindgen_malloc), r = Ot;
	var i = St(e) ? 0 : xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot;
	const c = Ut.readGgirMeta(t, r, i, o, St(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw Mt(c[1]);
	return Mt(c[0]);
}
function Ne(n, e) {
	const _ = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), t = Ot;
	var r = St(e) ? 0 : xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), i = Ot;
	const o = Ut.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw Mt(o[1]);
	return Mt(o[0]);
}
function Te() {
	return Ut.recommended_chunk_size_mb() >>> 0;
}
function Ge(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), i = Ot, o = Ut.reduceF64V1(_, t, r, i);
	if (o[2]) throw Mt(o[1]);
	return o[0];
}
function Be(n, e) {
	const _ = Dt(e, Ut.__wbindgen_malloc), t = Ot, r = Ut.rerunGgirResults(n, _, t);
	if (r[2]) throw Mt(r[1]);
	return Mt(r[0]);
}
function je(n) {
	const e = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), _ = Ot, t = Ut.resolveTimezone(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function Ee(n, e, _) {
	const t = At(n, Ut.__wbindgen_malloc), r = Ot, i = At(e, Ut.__wbindgen_malloc), o = Ot, c = Ct(_, Ut.__wbindgen_malloc), l = Ot, a = Ut.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw Mt(a[2]);
	var s = at(a[0], a[1]).slice();
	return Ut.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function Le(n, e, _, t, r, i, o, c, l, a, s, w, g, u) {
	const b = Rt(n, Ut.__wbindgen_malloc), d = Ot, f = xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), m = Ot;
	var h = St(_) ? 0 : Rt(_, Ut.__wbindgen_malloc), p = Ot, y = St(t) ? 0 : Rt(t, Ut.__wbindgen_malloc), v = Ot, k = St(r) ? 0 : Rt(r, Ut.__wbindgen_malloc), S = Ot, C = St(i) ? 0 : Rt(i, Ut.__wbindgen_malloc), R = Ot, A = St(o) ? 0 : Rt(o, Ut.__wbindgen_malloc), D = Ot, x = St(c) ? 0 : xt(c, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), M = Ot, P = St(l) ? 0 : xt(l, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), F = Ot, W = St(a) ? 0 : Dt(a, Ut.__wbindgen_malloc), I = Ot, z = St(w) ? 0 : xt(w, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), U = Ot, O = St(g) ? 0 : xt(g, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), N = Ot;
	const T = Ut.reviewGgirResults(b, d, f, m, h, p, y, v, k, S, C, R, A, D, x, M, P, F, W, I, s, z, U, O, N, St(u) ? 4294967297 : u >>> 0);
	if (T[2]) throw Mt(T[1]);
	return Mt(T[0]);
}
function Ve(n) {
	const e = Dt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.reviewNonwearFile(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function He(n) {
	const e = Dt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.reviewNonwearTotals(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function Xe(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = Ut.roundCountStorage(_, t, e);
	var i = lt(r[0], r[1]).slice();
	return Ut.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function qe(n) {
	const e = Ut.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function Je(n) {
	const e = Ut.runCompactPipelineV1(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function Ze(n) {
	const e = Ut.runFullPipelineOutcomeV1(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function $e(n) {
	const e = Ut.runFullPipelineV1(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function Ye(n) {
	const e = Ut.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function Ke(n) {
	const e = Ut.runGgirPart3(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function Qe(n, e) {
	const _ = Rt(n, Ut.__wbindgen_malloc), t = Ot;
	var r = St(e) ? 0 : xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), i = Ot;
	const o = Ut.runMilestone(_, t, r, i);
	if (o[2]) throw Mt(o[1]);
	return Mt(o[0]);
}
function n_(n) {
	const e = Dt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.scoreAllDays(e, _);
	if (t[3]) throw Mt(t[2]);
	var r = at(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function e_(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = Ut.scoreColeKripke(_, t, e);
	var i = wt(r[0], r[1]).slice();
	return Ut.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function __(n) {
	let e, _;
	try {
		const i = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot, c = Ut.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Mt(c[2]);
		return e = t, _ = r, mt(t, r);
	} finally {
		Ut.__wbindgen_free(e, _, 1);
	}
}
function t_(n) {
	const e = Ut.scoreConsensusMajority(n);
	if (e[3]) throw Mt(e[2]);
	var _ = wt(e[0], e[1]).slice();
	return Ut.__wbindgen_free(e[0], 1 * e[1], 1), _;
}
function r_(n, e, _) {
	const t = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), r = Ot, i = Rt(e, Ut.__wbindgen_malloc), o = Ot, c = Ct(_, Ut.__wbindgen_malloc), l = Ot, a = Ut.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw Mt(a[1]);
	return Mt(a[0]);
}
function i_(n) {
	let e, _;
	try {
		const i = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot, c = Ut.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Mt(c[2]);
		return e = t, _ = r, mt(t, r);
	} finally {
		Ut.__wbindgen_free(e, _, 1);
	}
}
function o_(n, e, _, t, r, i) {
	const o = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), c = Ot, l = At(e, Ut.__wbindgen_malloc), a = Ot, s = At(_, Ut.__wbindgen_malloc), w = Ot, g = At(t, Ut.__wbindgen_malloc), u = Ot, b = Ut.scoreEpochsTyped(o, c, l, a, s, w, g, u, r, i);
	if (b[2]) throw Mt(b[1]);
	return Mt(b[0]);
}
function c_(n, e, _) {
	const t = At(n, Ut.__wbindgen_malloc), r = Ot;
	var i = St(e) ? 0 : xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot, c = St(_) ? 0 : At(_, Ut.__wbindgen_malloc), l = Ot;
	const a = Ut.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw Mt(a[2]);
	var s = wt(a[0], a[1]).slice();
	return Ut.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function l_(n) {
	const e = Ut.scoreGgirHasibVariant(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function a_(n, e, _, t, r) {
	const i = At(n, Ut.__wbindgen_malloc), o = Ot, c = At(e, Ut.__wbindgen_malloc), l = Ot;
	var a = St(t) ? 0 : xt(t, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), s = Ot, w = St(r) ? 0 : At(r, Ut.__wbindgen_malloc), g = Ot;
	const u = Ut.scoreGgirSib(i, o, c, l, _, a, s, w, g);
	if (u[2]) throw Mt(u[1]);
	return Mt(u[0]);
}
function s_(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = Ut.scoreSadeh(_, t, e);
	var i = wt(r[0], r[1]).slice();
	return Ut.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function w_(n) {
	const e = Dt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.settleManualNonwearNights(e, _);
	if (t[3]) throw Mt(t[2]);
	var r = at(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function g_(n) {
	const e = Rt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.sha256StreamFeed(e, _);
	if (t[1]) throw Mt(t[0]);
}
function u_() {
	let n, e;
	try {
		const r = Ut.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, Mt(r[2]);
		return n = _, e = t, mt(_, t);
	} finally {
		Ut.__wbindgen_free(n, e, 1);
	}
}
function b_() {
	Ut.sha256StreamStart();
}
function d_(n, e) {
	const _ = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), t = Ot, r = Ut.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = mt(r[0], r[1]).slice(), Ut.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function f_(n, e, _, t, r) {
	const i = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot, c = At(e, Ut.__wbindgen_malloc), l = Ot, a = Ct(_, Ut.__wbindgen_malloc), s = Ot, w = At(t, Ut.__wbindgen_malloc), g = Ot, u = Ct(r, Ut.__wbindgen_malloc), b = Ot, d = Ut.sleepRegularityIndex(i, o, c, l, a, s, w, g, u, b);
	if (d[3]) throw Mt(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function m_(n, e) {
	const _ = Ut.sleepWakeScores(n, St(e) ? 0 : it(e));
	if (_[2]) throw Mt(_[1]);
	return Mt(_[0]);
}
function h_(n) {
	const e = Dt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.sourceLabelsWallClockMs(e, _);
	var r = lt(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function p_(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = At(e, Ut.__wbindgen_malloc), c = Ot, l = Ut.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function y_(n, e, _) {
	const t = At(n, Ut.__wbindgen_malloc), r = Ot, i = Dt(e, Ut.__wbindgen_malloc), o = Ot, c = At(_, Ut.__wbindgen_malloc), l = Ot, a = Ut.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw Mt(a[2]);
	let s;
	return 0 !== a[0] && (s = lt(a[0], a[1]).slice(), Ut.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function v_(n) {
	return Ut.startThreadPool(n);
}
function k_(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = Rt(e, Ut.__wbindgen_malloc), c = Ot, l = At(_, Ut.__wbindgen_malloc), a = Ot, s = At(t, Ut.__wbindgen_malloc), w = Ot, g = Ut.statesInPeriods(r, i, o, c, l, a, s, w);
	var u = wt(g[0], g[1]).slice();
	return Ut.__wbindgen_free(g[0], 1 * g[1], 1), u;
}
function S_(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = Dt(e, Ut.__wbindgen_malloc), i = Ot, o = Ut.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw Mt(o[2]);
	var c = lt(o[0], o[1]).slice();
	return Ut.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function C_(n) {
	const e = Rt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.streamParseFeed(e, _);
	if (t[2]) throw Mt(t[1]);
	return t[0] >>> 0;
}
function R_() {
	const n = Ut.streamParseFinish();
	if (n[2]) throw Mt(n[1]);
	return t.__wrap(n[0]);
}
function A_() {
	const n = Ut.streamParseFinishChunk();
	if (n[2]) throw Mt(n[1]);
	return _.__wrap(n[0]);
}
function D_(n) {
	const e = Ut.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw Mt(e[1]);
	return _.__wrap(e[0]);
}
function x_(n, e, _) {
	var t = St(_) ? 0 : xt(_, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), r = Ot;
	const i = Ut.streamParseStart(n, e, t, r);
	if (i[1]) throw Mt(i[0]);
}
function M_(n, e) {
	const _ = Ut.streamParseStartData(n, e);
	if (_[1]) throw Mt(_[0]);
}
function P_(n, e, _, t, r) {
	var i = St(t) ? 0 : xt(t, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), o = Ot;
	const c = Ut.streamParseStartWithEpoch(n, e, _, i, o, !St(r), St(r) ? 0 : r);
	if (c[1]) throw Mt(c[0]);
}
function F_(n, e) {
	const _ = Rt(n, Ut.__wbindgen_malloc), t = Ot, r = Ut.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw Mt(r[1]);
	return Mt(r[0]);
}
function W_(n) {
	const e = Ut.summarizeExportGroups(n);
	if (e[3]) throw Mt(e[2]);
	var _ = at(e[0], e[1]).slice();
	return Ut.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function I_(n) {
	const e = Ut.summarizePhysicalActivityDays(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function z_(n) {
	const e = Ut.summarizePhysicalActivityTrace(n);
	if (e[2]) throw Mt(e[1]);
	return Mt(e[0]);
}
function U_() {
	return 0 !== Ut.threadPoolReady();
}
function O_(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = Ut.thresholdProbabilities(_, t, e);
	var i = wt(r[0], r[1]).slice();
	return Ut.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function N_(n) {
	const e = Dt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.timeSemantics(e, _);
	if (t[3]) throw Mt(t[2]);
	var r = at(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function T_(n, e, _) {
	const t = At(n, Ut.__wbindgen_malloc), r = Ot, i = Ut.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw Mt(i[2]);
	var o = at(i[0], i[1]).slice();
	return Ut.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function G_(n, e, _) {
	const t = Ut.uniformTimestamps(n, e, _);
	var r = lt(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function B_(n, e) {
	const _ = Ut.utcDatesInSpan(n, e);
	var t = at(_[0], _[1]).slice();
	return Ut.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function j_(n) {
	const e = At(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.utcDayIndex(e, _);
	if (t[2]) throw Mt(t[1]);
	return Mt(t[0]);
}
function E_(n) {
	const e = Rt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function L_(n, e) {
	const _ = At(n, Ut.__wbindgen_malloc), t = Ot, r = Ut.validWearDays(_, t, St(e) ? 0 : it(e));
	if (r[3]) throw Mt(r[2]);
	var i = wt(r[0], r[1]).slice();
	return Ut.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function V_(n, e, _) {
	const t = At(n, Ut.__wbindgen_malloc), r = Ot, i = Ut.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw Mt(i[1]);
	return Mt(i[0]);
}
function H_(n) {
	const e = At(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.wallClockLabels(e, _);
	var r = at(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function X_(n, e, _) {
	const t = Rt(n, Ut.__wbindgen_malloc), r = Ot, i = Dt(_, Ut.__wbindgen_malloc), o = Ot, c = Ut.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw Mt(c[2]);
	var l = wt(c[0], c[1]).slice();
	return Ut.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var q_ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, rt.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, rt.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Ut.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		Ut.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return Ut.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return Ut.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return Ut.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function J_(n) {
	Ut.wbg_rayon_start_worker(n);
}
function Z_(n, e) {
	const _ = xt(n, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), t = Ot;
	var r = St(e) ? 0 : xt(e, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), i = Ot;
	const o = Ut.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw Mt(o[1]);
	return Mt(o[0]);
}
function $_(n) {
	const e = Dt(n, Ut.__wbindgen_malloc), _ = Ot, t = Ut.weekendDates(e, _);
	var r = wt(t[0], t[1]).slice();
	return Ut.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Y_(n, e, _, t) {
	const r = At(n, Ut.__wbindgen_malloc), i = Ot, o = Ut.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function K_(n, e, _, t, r) {
	const i = At(n, Ut.__wbindgen_malloc), o = Ot, c = At(e, Ut.__wbindgen_malloc), l = Ot, a = At(_, Ut.__wbindgen_malloc), s = Ot, w = Ut.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw Mt(w[1]);
	return Mt(w[0]);
}
function Q_(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(mt(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = xt(String(e), Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), t = Ot;
				ut().setInt32(n + 4, t, !0), ut().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				ut().setBigInt64(n + 8, St(_) ? BigInt(0) : _, !0), ut().setInt32(n + 0, !St(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return St(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = xt(ct(e), Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), t = Ot;
				ut().setInt32(n + 4, t, !0), ut().setInt32(n + 0, _, !0);
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
				return Ut.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return zt;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const _ = "number" == typeof e ? e : void 0;
				ut().setFloat64(n + 8, St(_) ? 0 : _, !0), ut().setInt32(n + 0, !St(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = St(_) ? 0 : xt(_, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), r = Ot;
				ut().setInt32(n + 4, r, !0), ut().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(mt(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return kt(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return kt(function(n, e, _, t) {
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
					_ = n, t = e, console.error(mt(n, e));
				} finally {
					Ut.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return kt(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return kt(function(n, e) {
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
				return new Uint32Array(st(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(lt(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== bt && bt.buffer === Ut.memory.buffer || (bt = new Float32Array(Ut.memory.buffer)), bt).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return kt(function(n) {
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
				return kt(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(wt(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return kt(function(n, e, _) {
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
				const _ = xt(e.stack, Ut.__wbindgen_malloc, Ut.__wbindgen_realloc), t = Ot;
				ut().setInt32(n + 4, t, !0), ut().setInt32(n + 0, _, !0);
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
				}(e, _, q_.__wrap(t));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return St(n) ? 0 : it(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return St(n) ? 0 : it(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return St(n) ? 0 : it(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return St(n) ? 0 : it(n);
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
						0 === --t.cnt && (Ut.__wbindgen_destroy_closure(t.a, t.b), t.a = 0, ot.unregister(t));
					}, ot.register(r, t, t), r;
				}(n, e, nt);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return wt(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return mt(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Ut.__wbindgen_externrefs, e = n.grow(4);
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
function nt(n, e, _) {
	Ut.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, _);
}
Symbol.dispose && (q_.prototype[Symbol.dispose] = q_.prototype.free);
const et = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ut.__wbg_aw5batch_free(n >>> 0, 1)), _t = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ut.__wbg_streamchunkresult_free(n >>> 0, 1)), tt = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ut.__wbg_streamparseresult_free(n >>> 0, 1)), rt = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ut.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function it(n) {
	const e = Ut.__externref_table_alloc();
	return Ut.__wbindgen_externrefs.set(e, n), e;
}
const ot = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ut.__wbindgen_destroy_closure(n.a, n.b));
function ct(n) {
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
		e > 0 && (_ += ct(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + ct(n[t]);
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
function lt(n, e) {
	return n >>>= 0, ft().subarray(n / 8, n / 8 + e);
}
function at(n, e) {
	n >>>= 0;
	const _ = ut(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(Ut.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return Ut.__externref_drop_slice(n, e), t;
}
function st(n, e) {
	return n >>>= 0, pt().subarray(n / 4, n / 4 + e);
}
function wt(n, e) {
	return n >>>= 0, vt().subarray(n / 1, n / 1 + e);
}
let gt = null;
function ut() {
	return null !== gt && gt.buffer === Ut.memory.buffer || (gt = new DataView(Ut.memory.buffer)), gt;
}
let bt = null, dt = null;
function ft() {
	return null !== dt && dt.buffer === Ut.memory.buffer || (dt = new Float64Array(Ut.memory.buffer)), dt;
}
function mt(n, e) {
	return function(n, e) {
		return Wt += e, Wt >= Ft && (Pt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Pt.decode(), Wt = e), Pt.decode(vt().slice(n, n + e));
	}(n >>>= 0, e);
}
let ht = null;
function pt() {
	return null !== ht && ht.buffer === Ut.memory.buffer || (ht = new Uint32Array(Ut.memory.buffer)), ht;
}
let yt = null;
function vt() {
	return null !== yt && yt.buffer === Ut.memory.buffer || (yt = new Uint8Array(Ut.memory.buffer)), yt;
}
function kt(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = it(_);
		Ut.__wbindgen_exn_store(n);
	}
}
function St(n) {
	return null == n;
}
function Ct(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return pt().set(n, _ / 4), Ot = n.length, _;
}
function Rt(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return vt().set(n, _ / 1), Ot = n.length, _;
}
function At(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return ft().set(n, _ / 8), Ot = n.length, _;
}
function Dt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = it(n[t]);
		ut().setUint32(_ + 4 * t, e, !0);
	}
	return Ot = n.length, _;
}
function xt(n, e, _) {
	if (void 0 === _) {
		const _ = It.encode(n), t = e(_.length, 1) >>> 0;
		return vt().subarray(t, t + _.length).set(_), Ot = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = vt();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = vt().subarray(r + o, r + t);
		o += It.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return Ot = o, r;
}
function Mt(n) {
	const e = Ut.__wbindgen_externrefs.get(n);
	return Ut.__externref_table_dealloc(n), e;
}
let Pt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
Pt && Pt.decode();
const Ft = 2146435072;
let Wt = 0;
const It = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
It && (It.encodeInto = function(n, e) {
	const _ = It.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let zt, Ut, Ot = 0;
function Nt(n, e, _) {
	if (Ut = n.exports, zt = e, gt = null, bt = null, dt = null, ht = null, yt = null, void 0 !== _ && ("number" != typeof _ || 0 === _ || _ % 65536 != 0)) throw new Error("invalid stack size");
	return Ut.__wbindgen_start(_), Ut;
}
function Tt(n, e) {
	if (void 0 !== Ut) return Ut;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const t = Q_(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Nt(new WebAssembly.Instance(n, t), n, _);
}
async function Gt(n, e) {
	if (void 0 !== Ut) return Ut;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-C56r05iT.wasm", "" + import.meta.url));
	const t = Q_(e);
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
	return Nt(r, i, _);
}
export { e as Aw5Batch, _ as StreamChunkResult, t as StreamParseResult, r as actiwareIntervalStatistics, i as actiwareSleepIntervals, o as actiwareWakeThreshold, c as actoursVersion, l as aggregateEpochSeries, a as analysisDatesOf, s as analysisWindowBounds, w as analysisWindowSlice, g as analyzePhysicalActivityDay, u as classifyActimetricPreschoolWristRf, b as classifyActimetricPreschoolWristRfLagLead, d as classifyActimetricPreschoolWristRfLagLeadCalibrated, f as clippedUnionHours, m as compareNonwearDetectorMasks, h as computeAnglez5s, p as computeCircadian, y as computeCircadianTyped, v as computeEnmo5s, k as computeMimsUnit, S as computeMimsUnitDataframe, C as computeMimsUnitTimingBreakdown, R as computeMimsUnitValues, A as computeNightDifficulty, D as computeNightDifficultyTyped, x as computeNightSignals, M as computeNightSignalsTyped, P as computeSleepMetrics, F as configureComputeMemoryBudgetV1, W as consensusDisagreementDetail, I as consensusDisagreements, z as convertBedWakeDaysDiary, U as convertScreensRedcapDiary, O as csvBufferAppend, N as csvBufferClear, T as cutpointEpochCompatibility, G as cutpointToneCodes, B as cutpointsRefusal, j as cutpointsValid, Gt as default, E as describeColumns, L as detectDetachFromAccelerationG, V as detectDeviceFormat, H as detectGgirHasptVariant, X as detectHdcza, q as detectHourClockJumpMs, J as detectNonwear, Z as detectNonwearChoi2011, $ as detectNonwearChoi2011Bouts, Y as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, Q as detectNonwearChoi2012Bouts, nn as detectNonwearChoi2012Epoch, en as detectNonwearChoiBouts, _n as detectNonwearUnified, tn as detectNonwearUnifiedBatchTyped, rn as dstPlaceholderRuns, on as effectiveOverrideCutpoints, cn as epochAgreement, ln as epochRawData, an as epochWithBandpass, sn as epochsOverlapping, wn as executeHeroRuntime, gn as exportNapAggregate, un as exportPeriodFigures, bn as extractCapsense, dn as foldOntoGrid, fn as foldSampleBlocks, mn as foldSleepWakeVotes, hn as foldUniformOntoGrid, pn as fuseNonwearMasks, yn as generateActiwareRestIntervals, vn as getComputeCapabilitiesV1, kn as ggir5sWallClockMs, Sn as ggirAppConfigSummary, Cn as ggirConfigValues, Rn as ggirDayValidFraction, An as ggirDaysIncluded, Dn as ggirDiaryLogShape, xn as ggirDstPlaceholderCuts, Mn as ggirIncludeDayCriterionHours, Pn as ggirIndicesToWallClockMs, Fn as ggirLabelsToStoredMs, Wn as ggirManualNightClocks, In as ggirMilestoneVersion, zn as ggirNonwearApproach, Un as ggirPersonSummaries, On as ggirRerunProfiles, Nn as ggirSavedNonwearWindows, Tn as ggirSleeplogStoredClocks, Gn as ggirSptDurationHours, Bn as ggirSummaryDenominator, jn as gridOffsetWithin, En as identifyGgirRData, Ln as implausibilityReasons, Tt as initSync, Vn as initThreadPool, Hn as installPanicHook, Xn as interRaterReliability, qn as irregularInternalDays, Jn as isGeneactivFormat, Zn as linearMemoryBytesV1, $n as lstmSpectralFeatures30s, Yn as markerIndexRange, Kn as markerSleepOnsetOffset, Qn as medianGapSeconds, ne as metricWarnings, ee as midSleepClockHours, _e as neishabouriCounts, te as nextDate, re as nightIntervalOverlap, ie as nonwearContributors, oe as nonwearInSleepCounts, ce as nonwearSleepOverlap, le as nonwearWeightRuns, ae as normalizeCutpoints, se as parseActigraphCsv, we as parseActigraphCsvBuffered, ge as parseAw5, ue as parseCwa, be as parseEpochSeries, de as parseGeneactivBin, fe as parseGeneactivCsv, me as parseGeneactivCsvBuffered, he as parseGt3x, pe as participantValidity, ye as physicalActivitySeriesGrid, ve as placeMarkers, ke as placeMarkersBatch, Se as placeMarkersTyped, Ce as placeNonwearMarkers, Re as placeNonwearMarkersTyped, Ae as prepareCompactPipelineOutcomeV1, De as prepareCompactPipelineV1, xe as processGeneactivRaw, Me as processGt3xPart1, Pe as processGt3xPart1WithEpoch, Fe as processRawXyz, We as processRawXyzImputed, Ie as processRawXyzImputedWithEpoch, ze as projectLabelsOntoGrid, Ue as rasterizePeriods, Oe as readGgirMeta, Ne as readGgirReportCsv, Te as recommended_chunk_size_mb, Ge as reduceF64V1, Be as rerunGgirResults, je as resolveTimezone, Ee as restoredDstRuns, Le as reviewGgirResults, Ve as reviewNonwearFile, He as reviewNonwearTotals, Xe as roundCountStorage, qe as runCompactPipelineOutcomeV1, Je as runCompactPipelineV1, Ze as runFullPipelineOutcomeV1, $e as runFullPipelineV1, Ye as runGgirDeclaredEpochsV1, Ke as runGgirPart3, Qe as runMilestone, n_ as scoreAllDays, e_ as scoreColeKripke, __ as scoreConsensus, t_ as scoreConsensusMajority, r_ as scoreConsensusTyped, i_ as scoreEpochs, o_ as scoreEpochsTyped, c_ as scoreGgirHasib, l_ as scoreGgirHasibVariant, a_ as scoreGgirSib, s_ as scoreSadeh, w_ as settleManualNonwearNights, g_ as sha256StreamFeed, u_ as sha256StreamFinish, b_ as sha256StreamStart, d_ as shiftDate, f_ as sleepRegularityIndex, m_ as sleepWakeScores, h_ as sourceLabelsWallClockMs, p_ as spanFiniteMean, y_ as spliceDstPlaceholders, v_ as startThreadPool, k_ as statesInPeriods, S_ as storedToGgirLabelsMs, C_ as streamParseFeed, R_ as streamParseFinish, A_ as streamParseFinishChunk, D_ as streamParseFinishChunkWithProgress, x_ as streamParseStart, M_ as streamParseStartData, P_ as streamParseStartWithEpoch, F_ as summarizeActimetricPreschoolWristRfClasses, W_ as summarizeExportGroups, I_ as summarizePhysicalActivityDays, z_ as summarizePhysicalActivityTrace, U_ as threadPoolReady, O_ as thresholdProbabilities, N_ as timeSemantics, T_ as timestampDiscontinuities, G_ as uniformTimestamps, B_ as utcDatesInSpan, j_ as utcDayIndex, E_ as validStateFraction, L_ as validWearDays, V_ as wallClockDstPlaceholders, H_ as wallClockLabels, X_ as wallMaskOntoGgirGrid, q_ as wbg_rayon_PoolBuilder, J_ as wbg_rayon_start_worker, Z_ as wearSiteHasptRouting, $_ as weekendDates, Y_ as windowCoverage, K_ as zeroCrossingCounts };
