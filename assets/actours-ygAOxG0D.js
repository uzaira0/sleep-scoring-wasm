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
		return this.__wbg_ptr = 0, K_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		It.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = Rt(n, It.__wbindgen_malloc), _ = Wt, t = It.aw5batch_new(e, _);
		if (t[2]) throw At(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, K_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), r = Wt;
		var i = yt(_) ? 0 : Ct(_, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt;
		const c = It.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw At(c[1]);
		return At(c[0]);
	}
	subjects(n) {
		const e = It.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw At(e[2]);
		var _ = ot(e[0], e[1]).slice();
		return It.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, Q_.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Q_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		It.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = It.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = It.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = It.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = It.streamchunkresult_axisX(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = It.streamchunkresult_axisY(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = It.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = It.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw At(n[1]);
		return At(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== It.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = It.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = bt(n[0], n[1]).slice(), It.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = It.streamchunkresult_counts(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = It.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = It.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = It.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = It.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = It.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = lt(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = It.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = it(e[0], e[1]).slice();
		return It.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return It.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = It.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = It.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== It.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = It.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = bt(n[0], n[1]).slice(), It.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = It.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = It.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = It.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== It.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return It.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return It.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return It.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = It.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = It.streamchunkresult_temperature(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = It.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = It.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = It.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = It.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = It.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = It.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var t = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, nt.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, nt.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		It.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = It.streamparseresult_axisX(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = It.streamparseresult_axisY(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = It.streamparseresult_axisZ(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = It.streamparseresult_calibration(this.__wbg_ptr);
		if (n[2]) throw At(n[1]);
		return At(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== It.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = It.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = bt(n[0], n[1]).slice(), It.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return It.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== It.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return It.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return It.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = It.streamparseresult_temperature(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = It.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = It.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = it(n[0], n[1]).slice();
		return It.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function r(n) {
	const e = It.actiwareIntervalStatistics(n);
	if (e[3]) throw At(e[2]);
	var _ = ot(e[0], e[1]).slice();
	return It.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function i(n, e, _) {
	const t = Rt(e, It.__wbindgen_malloc), r = Wt, i = It.actiwareSleepIntervals(n, t, r, yt(_) ? 0 : _t(_));
	if (i[3]) throw At(i[2]);
	var o = ot(i[0], i[1]).slice();
	return It.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function o(n, e) {
	const _ = It.actiwareWakeThreshold(n, yt(e) ? 0 : _t(e));
	if (_[3]) throw At(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function c() {
	let n, e;
	try {
		const _ = It.actoursVersion();
		return n = _[0], e = _[1], bt(_[0], _[1]);
	} finally {
		It.__wbindgen_free(n, e, 1);
	}
}
function l(n) {
	const e = It.aggregateEpochSeries(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function a(n) {
	const e = St(n, It.__wbindgen_malloc), _ = Wt, t = It.analysisDatesOf(e, _);
	var r = ot(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function s(n, e) {
	const _ = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), t = Wt, r = It.analysisWindowBounds(_, t, !yt(e), yt(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = it(r[0], r[1]).slice(), It.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function w(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), i = Wt, o = It.analysisWindowSlice(_, t, r, i);
	var c = ct(o[0], o[1]).slice();
	return It.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function g(n) {
	let e, _;
	try {
		const i = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt, c = It.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, At(c[2]);
		return e = t, _ = r, bt(t, r);
	} finally {
		It.__wbindgen_free(e, _, 1);
	}
}
function u(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = St(e, It.__wbindgen_malloc), c = Wt, l = St(_, It.__wbindgen_malloc), a = Wt, s = It.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw At(s[2]);
	var w = lt(s[0], s[1]).slice();
	return It.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function b(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = St(e, It.__wbindgen_malloc), c = Wt, l = St(_, It.__wbindgen_malloc), a = Wt, s = It.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw At(s[2]);
	var w = lt(s[0], s[1]).slice();
	return It.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function d(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = St(e, It.__wbindgen_malloc), c = Wt, l = St(_, It.__wbindgen_malloc), a = Wt, s = It.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw At(s[2]);
	var w = lt(s[0], s[1]).slice();
	return It.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function f(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = St(e, It.__wbindgen_malloc), c = Wt;
	return It.clippedUnionHours(r, i, o, c, _, t);
}
function m(n, e) {
	const _ = It.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw At(_[1]);
	return At(_[0]);
}
function h(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = St(e, It.__wbindgen_malloc), c = Wt, l = St(_, It.__wbindgen_malloc), a = Wt, s = It.computeAnglez5s(r, i, o, c, l, a, t);
	var w = it(s[0], s[1]).slice();
	return It.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function p(n) {
	let e, _;
	try {
		const i = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt, c = It.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, At(c[2]);
		return e = t, _ = r, bt(t, r);
	} finally {
		It.__wbindgen_free(e, _, 1);
	}
}
function y(n, e, _, t, r, i, o) {
	const c = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), l = Wt, a = St(e, It.__wbindgen_malloc), s = Wt, w = vt(_, It.__wbindgen_malloc), g = Wt, u = St(t, It.__wbindgen_malloc), b = Wt, d = vt(r, It.__wbindgen_malloc), f = Wt, m = kt(i, It.__wbindgen_malloc), h = Wt, p = vt(o, It.__wbindgen_malloc), y = Wt, v = It.computeCircadianTyped(c, l, a, s, w, g, u, b, d, f, m, h, p, y);
	if (v[2]) throw At(v[1]);
	return At(v[0]);
}
function v(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = St(e, It.__wbindgen_malloc), c = Wt, l = St(_, It.__wbindgen_malloc), a = Wt, s = It.computeEnmo5s(r, i, o, c, l, a, t);
	var w = it(s[0], s[1]).slice();
	return It.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function k(n, e, _, t, r) {
	const i = St(n, It.__wbindgen_malloc), o = Wt, c = St(e, It.__wbindgen_malloc), l = Wt, a = St(_, It.__wbindgen_malloc), s = Wt, w = It.computeMimsUnit(i, o, c, l, a, s, t, yt(r) ? 0 : _t(r));
	if (w[2]) throw At(w[1]);
	return At(w[0]);
}
function S(n, e, _, t, r) {
	const i = St(n, It.__wbindgen_malloc), o = Wt, c = St(e, It.__wbindgen_malloc), l = Wt, a = St(_, It.__wbindgen_malloc), s = Wt, w = St(t, It.__wbindgen_malloc), g = Wt, u = It.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, yt(r) ? 0 : _t(r));
	if (u[2]) throw At(u[1]);
	return At(u[0]);
}
function R(n, e, _, t, r) {
	const i = St(n, It.__wbindgen_malloc), o = Wt, c = St(e, It.__wbindgen_malloc), l = Wt, a = St(_, It.__wbindgen_malloc), s = Wt, w = It.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, yt(r) ? 0 : _t(r));
	if (w[2]) throw At(w[1]);
	return At(w[0]);
}
function C(n, e, _, t, r) {
	const i = St(n, It.__wbindgen_malloc), o = Wt, c = St(e, It.__wbindgen_malloc), l = Wt, a = St(_, It.__wbindgen_malloc), s = Wt, w = It.computeMimsUnitValues(i, o, c, l, a, s, t, yt(r) ? 0 : _t(r));
	if (w[3]) throw At(w[2]);
	var g = it(w[0], w[1]).slice();
	return It.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function A(n) {
	let e, _;
	try {
		const i = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt, c = It.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, At(c[2]);
		return e = t, _ = r, bt(t, r);
	} finally {
		It.__wbindgen_free(e, _, 1);
	}
}
function D(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), y = Wt, v = St(e, It.__wbindgen_malloc), k = Wt, S = vt(_, It.__wbindgen_malloc), R = Wt, C = St(t, It.__wbindgen_malloc), A = Wt, D = vt(r, It.__wbindgen_malloc), x = Wt, M = kt(i, It.__wbindgen_malloc), P = Wt, F = vt(o, It.__wbindgen_malloc), I = Wt, W = kt(c, It.__wbindgen_malloc), z = Wt, U = vt(l, It.__wbindgen_malloc), O = Wt, T = St(a, It.__wbindgen_malloc), N = Wt, G = vt(s, It.__wbindgen_malloc), B = Wt, j = St(w, It.__wbindgen_malloc), E = Wt, L = vt(g, It.__wbindgen_malloc), V = Wt, H = St(u, It.__wbindgen_malloc), X = Wt, q = vt(b, It.__wbindgen_malloc), J = Wt, Z = St(d, It.__wbindgen_malloc), $ = Wt, Y = vt(f, It.__wbindgen_malloc), K = Wt, Q = kt(m, It.__wbindgen_malloc), nn = Wt, en = vt(h, It.__wbindgen_malloc), _n = Wt, tn = It.computeNightDifficultyTyped(p, y, v, k, S, R, C, A, D, x, M, P, F, I, W, z, U, O, T, N, G, B, j, E, L, V, H, X, q, J, Z, $, Y, K, Q, nn, en, _n);
	if (tn[2]) throw At(tn[1]);
	return At(tn[0]);
}
function x(n) {
	let e, _;
	try {
		const i = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt, c = It.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, At(c[2]);
		return e = t, _ = r, bt(t, r);
	} finally {
		It.__wbindgen_free(e, _, 1);
	}
}
function M(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), y = Wt, v = St(e, It.__wbindgen_malloc), k = Wt, S = vt(_, It.__wbindgen_malloc), R = Wt, C = St(t, It.__wbindgen_malloc), A = Wt, D = vt(r, It.__wbindgen_malloc), x = Wt, M = kt(i, It.__wbindgen_malloc), P = Wt, F = vt(o, It.__wbindgen_malloc), I = Wt, W = kt(c, It.__wbindgen_malloc), z = Wt, U = vt(l, It.__wbindgen_malloc), O = Wt, T = St(a, It.__wbindgen_malloc), N = Wt, G = vt(s, It.__wbindgen_malloc), B = Wt, j = St(w, It.__wbindgen_malloc), E = Wt, L = vt(g, It.__wbindgen_malloc), V = Wt, H = St(u, It.__wbindgen_malloc), X = Wt, q = vt(b, It.__wbindgen_malloc), J = Wt, Z = St(d, It.__wbindgen_malloc), $ = Wt, Y = vt(f, It.__wbindgen_malloc), K = Wt, Q = kt(m, It.__wbindgen_malloc), nn = Wt, en = vt(h, It.__wbindgen_malloc), _n = Wt, tn = It.computeNightSignalsTyped(p, y, v, k, S, R, C, A, D, x, M, P, F, I, W, z, U, O, T, N, G, B, j, E, L, V, H, X, q, J, Z, $, Y, K, Q, nn, en, _n);
	if (tn[2]) throw At(tn[1]);
	return At(tn[0]);
}
function P(n, e, _) {
	const t = kt(n, It.__wbindgen_malloc), r = Wt, i = St(e, It.__wbindgen_malloc), o = Wt, c = It.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw At(c[1]);
	return At(c[0]);
}
function F(n) {
	const e = It.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function I(n) {
	const e = Rt(n, It.__wbindgen_malloc), _ = Wt, t = It.consensusDisagreementDetail(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function W(n) {
	const e = It.consensusDisagreements(n);
	if (e[3]) throw At(e[2]);
	var _ = ot(e[0], e[1]).slice();
	return It.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function z(n) {
	const e = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), _ = Wt, t = It.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function U(n) {
	const e = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), _ = Wt, t = It.convertScreensRedcapDiary(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function O(n) {
	const e = kt(n, It.__wbindgen_malloc), _ = Wt;
	It.csvBufferAppend(e, _);
}
function T(n) {
	It.csvBufferClear(n);
}
function N(n, e) {
	const _ = It.cutpointEpochCompatibility(n, e);
	if (_[2]) throw At(_[1]);
	return At(_[0]);
}
function G(n, e, _, t, r) {
	const i = St(n, It.__wbindgen_malloc), o = Wt, c = It.cutpointToneCodes(i, o, e, _, t, r);
	var l = lt(c[0], c[1]).slice();
	return It.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = It.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = bt(r[0], r[1]).slice(), It.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function j(n, e, _, t) {
	return 0 !== It.cutpointsValid(n, e, _, t);
}
function E(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = vt(e, It.__wbindgen_malloc), i = Wt, o = It.describeColumns(_, t, r, i);
	if (o[3]) throw At(o[2]);
	var c = ot(o[0], o[1]).slice();
	return It.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function L(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = St(e, It.__wbindgen_malloc), i = Wt, o = It.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw At(o[2]);
	var c = lt(o[0], o[1]).slice();
	return It.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function V(n, e) {
	let _, t;
	try {
		const r = kt(n, It.__wbindgen_malloc), i = Wt, o = Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), c = Wt, l = It.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], bt(l[0], l[1]);
	} finally {
		It.__wbindgen_free(_, t, 1);
	}
}
function H(n) {
	const e = It.detectGgirHasptVariant(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function X(n, e, _, t, r) {
	const i = St(n, It.__wbindgen_malloc), o = Wt;
	var c = yt(e) ? 0 : Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), l = Wt, a = yt(_) ? 0 : St(_, It.__wbindgen_malloc), s = Wt, w = yt(t) ? 0 : St(t, It.__wbindgen_malloc), g = Wt, u = yt(r) ? 0 : Ct(r, It.__wbindgen_malloc, It.__wbindgen_realloc), b = Wt;
	const d = It.detectHdcza(i, o, c, l, a, s, w, g, u, b);
	if (d[2]) throw At(d[1]);
	return At(d[0]);
}
function q(n) {
	const e = St(n, It.__wbindgen_malloc), _ = Wt;
	return 0 !== It.detectHourClockJumpMs(e, _);
}
function J(n) {
	const e = St(n, It.__wbindgen_malloc), _ = Wt, t = It.detectNonwear(e, _);
	var r = lt(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Z(n) {
	const e = St(n, It.__wbindgen_malloc), _ = Wt, t = It.detectNonwearChoi2011(e, _);
	var r = lt(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = St(n, It.__wbindgen_malloc), _ = Wt, t = It.detectNonwearChoi2011Bouts(e, _);
	if (t[3]) throw At(t[2]);
	var r = ot(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Y(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = It.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw At(r[2]);
	var i = lt(r[0], r[1]).slice();
	return It.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = St(n, It.__wbindgen_malloc), _ = Wt, t = It.detectNonwearChoi2012(e, _);
	var r = lt(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Q(n) {
	const e = St(n, It.__wbindgen_malloc), _ = Wt, t = It.detectNonwearChoi2012Bouts(e, _);
	if (t[3]) throw At(t[2]);
	var r = ot(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function nn(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = It.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw At(r[2]);
	var i = lt(r[0], r[1]).slice();
	return It.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function en(n) {
	const e = St(n, It.__wbindgen_malloc), _ = Wt, t = It.detectNonwearChoiBouts(e, _);
	if (t[3]) throw At(t[2]);
	var r = ot(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function _n(n) {
	let e, _;
	try {
		const i = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt, c = It.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, At(c[2]);
		return e = t, _ = r, bt(t, r);
	} finally {
		It.__wbindgen_free(e, _, 1);
	}
}
function tn(n, e, _, t, r, i, o) {
	const c = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), l = Wt, a = Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), s = Wt, w = St(_, It.__wbindgen_malloc), g = Wt, u = St(t, It.__wbindgen_malloc), b = Wt, d = St(r, It.__wbindgen_malloc), f = Wt, m = It.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, u, b, d, f, i, o);
	if (m[2]) throw At(m[1]);
	return At(m[0]);
}
function rn(n, e, _) {
	const t = Rt(_, It.__wbindgen_malloc), r = Wt, i = It.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw At(i[2]);
	var o = ot(i[0], i[1]).slice();
	return It.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function on(n, e, _, t) {
	const r = It.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = it(r[0], r[1]).slice(), It.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function cn(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = St(e, It.__wbindgen_malloc), i = Wt, o = It.epochAgreement(_, t, r, i);
	if (o[2]) throw At(o[1]);
	return At(o[0]);
}
function ln(n, e, _, t, r) {
	const i = St(n, It.__wbindgen_malloc), o = Wt, c = St(e, It.__wbindgen_malloc), l = Wt, a = St(_, It.__wbindgen_malloc), s = Wt, w = St(t, It.__wbindgen_malloc), g = Wt, u = It.epochRawData(i, o, c, l, a, s, w, g, r);
	if (u[2]) throw At(u[1]);
	return At(u[0]);
}
function an(n, e, _) {
	const t = St(n, It.__wbindgen_malloc), r = Wt, i = St(e, It.__wbindgen_malloc), o = Wt, c = It.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw At(c[1]);
	return At(c[0]);
}
function sn(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = It.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = ct(o[0], o[1]).slice(), It.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function wn(n, e) {
	let _, t;
	try {
		const o = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), c = Wt, l = Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), a = Wt, s = It.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, At(s[2]);
		return _ = r, t = i, bt(r, i);
	} finally {
		It.__wbindgen_free(_, t, 1);
	}
}
function gn(n) {
	const e = Rt(n, It.__wbindgen_malloc), _ = Wt, t = It.exportNapAggregate(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function un(n, e, _) {
	const t = Rt(_, It.__wbindgen_malloc), r = Wt, i = It.exportPeriodFigures(!yt(n), yt(n) ? 0 : n, !yt(e), yt(e) ? 0 : e, t, r);
	if (i[2]) throw At(i[1]);
	return At(i[0]);
}
function bn(n) {
	const e = kt(n, It.__wbindgen_malloc), _ = Wt, t = It.extractCapsense(e, _);
	if (t[3]) throw At(t[2]);
	var r = ot(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function dn(n, e, _, t, r) {
	const i = St(n, It.__wbindgen_malloc), o = Wt, c = St(e, It.__wbindgen_malloc), l = Wt, a = St(_, It.__wbindgen_malloc), s = Wt, w = Ct(r, It.__wbindgen_malloc, It.__wbindgen_realloc), g = Wt, u = It.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (u[3]) throw At(u[2]);
	var b = it(u[0], u[1]).slice();
	return It.__wbindgen_free(u[0], 8 * u[1], 8), b;
}
function fn(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = Ct(t, It.__wbindgen_malloc, It.__wbindgen_realloc), c = Wt, l = It.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw At(l[2]);
	var a = it(l[0], l[1]).slice();
	return It.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function mn(n, e, _, t, r) {
	const i = kt(_, It.__wbindgen_malloc), o = Wt, c = St(t, It.__wbindgen_malloc), l = Wt, a = It.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw At(a[1]);
	return At(a[0]);
}
function hn(n, e, _, t, r, i) {
	const o = St(_, It.__wbindgen_malloc), c = Wt, l = St(t, It.__wbindgen_malloc), a = Wt, s = Ct(i, It.__wbindgen_malloc, It.__wbindgen_realloc), w = Wt, g = It.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw At(g[2]);
	var u = it(g[0], g[1]).slice();
	return It.__wbindgen_free(g[0], 8 * g[1], 8), u;
}
function pn(n) {
	const e = It.fuseNonwearMasks(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function yn(n, e, _) {
	var t = yt(_) ? 0 : Ct(_, It.__wbindgen_malloc, It.__wbindgen_realloc), r = Wt;
	const i = It.generateActiwareRestIntervals(n, yt(e) ? 0 : _t(e), t, r);
	if (i[3]) throw At(i[2]);
	var o = ot(i[0], i[1]).slice();
	return It.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function vn() {
	const n = It.getComputeCapabilitiesV1();
	if (n[2]) throw At(n[1]);
	return At(n[0]);
}
function kn(n, e, _) {
	const t = Rt(_, It.__wbindgen_malloc), r = Wt, i = It.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw At(i[2]);
	var o = it(i[0], i[1]).slice();
	return It.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function Sn(n, e) {
	var _ = yt(n) ? 0 : Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), t = Wt;
	const r = It.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw At(r[1]);
	return At(r[0]);
}
function Rn(n) {
	const e = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), _ = Wt, t = It.ggirConfigValues(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function Cn(n, e) {
	const _ = It.ggirDayValidFraction(n, e);
	return 0 === _[0] ? void 0 : _[1];
}
function An(n, e, _) {
	const t = St(n, It.__wbindgen_malloc), r = Wt;
	var i = yt(e) ? 0 : St(e, It.__wbindgen_malloc), o = Wt, c = yt(_) ? 0 : Ct(_, It.__wbindgen_malloc, It.__wbindgen_realloc), l = Wt;
	const a = It.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw At(a[2]);
	var s = lt(a[0], a[1]).slice();
	return It.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function Dn(n, e) {
	const _ = kt(n, It.__wbindgen_malloc), t = Wt;
	var r = yt(e) ? 0 : Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), i = Wt;
	const o = It.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw At(o[1]);
	return At(o[0]);
}
function xn(n, e, _) {
	const t = Rt(e, It.__wbindgen_malloc), r = Wt;
	var i = yt(_) ? 0 : St(_, It.__wbindgen_malloc), o = Wt;
	const c = It.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw At(c[2]);
	var l = ot(c[0], c[1]).slice();
	return It.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function Mn(n) {
	var e = yt(n) ? 0 : Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), _ = Wt;
	const t = It.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw At(t[1]);
	return t[0];
}
function Pn(n, e, _, t) {
	const r = vt(n, It.__wbindgen_malloc), i = Wt, o = Rt(_, It.__wbindgen_malloc), c = Wt;
	var l = yt(t) ? 0 : St(t, It.__wbindgen_malloc), a = Wt;
	const s = It.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw At(s[2]);
	var w = it(s[0], s[1]).slice();
	return It.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function Fn(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = Rt(e, It.__wbindgen_malloc), i = Wt, o = It.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw At(o[2]);
	var c = it(o[0], o[1]).slice();
	return It.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function In(n, e, _, t) {
	const r = Rt(n, It.__wbindgen_malloc), i = Wt, o = St(e, It.__wbindgen_malloc), c = Wt, l = St(_, It.__wbindgen_malloc), a = Wt, s = St(t, It.__wbindgen_malloc), w = Wt, g = It.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw At(g[1]);
	return At(g[0]);
}
function Wn(n) {
	const e = kt(n, It.__wbindgen_malloc), _ = Wt, t = It.ggirMilestoneVersion(e, _);
	if (t[3]) throw At(t[2]);
	let r;
	return 0 !== t[0] && (r = bt(t[0], t[1]).slice(), It.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function zn() {
	const n = It.ggirRerunProfiles();
	if (n[3]) throw At(n[2]);
	var e = ot(n[0], n[1]).slice();
	return It.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function Un(n, e, _, t) {
	const r = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), i = Wt, o = Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), c = Wt, l = Ct(_, It.__wbindgen_malloc, It.__wbindgen_realloc), a = Wt, s = Rt(t, It.__wbindgen_malloc), w = Wt, g = It.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw At(g[2]);
	let u;
	return 0 !== g[0] && (u = ot(g[0], g[1]).slice(), It.__wbindgen_free(g[0], 4 * g[1], 4)), u;
}
function On(n, e) {
	return It.ggirSptDurationHours(n, e);
}
function Tn(n, e) {
	const _ = It.ggirSummaryDenominator(n, e);
	if (_[2]) throw At(_[1]);
	return At(_[0]);
}
function Nn(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = St(e, It.__wbindgen_malloc), i = Wt, o = It.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Gn(n) {
	let e, _;
	try {
		const i = kt(n, It.__wbindgen_malloc), o = Wt, c = It.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, At(c[2]);
		return e = t, _ = r, bt(t, r);
	} finally {
		It.__wbindgen_free(e, _, 1);
	}
}
function Bn(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = St(e, It.__wbindgen_malloc), c = Wt, l = St(_, It.__wbindgen_malloc), a = Wt, s = St(t, It.__wbindgen_malloc), w = Wt, g = It.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw At(g[1]);
	return At(g[0]);
}
function jn(n) {
	return It.initThreadPool(n);
}
function En() {
	It.installPanicHook();
}
function Ln(n) {
	const e = Rt(n, It.__wbindgen_malloc), _ = Wt, t = It.interRaterReliability(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function Vn(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = It.irregularInternalDays(_, t, e);
	var i = ot(r[0], r[1]).slice();
	return It.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Hn(n) {
	const e = kt(n, It.__wbindgen_malloc), _ = Wt;
	return 0 !== It.isGeneactivFormat(e, _);
}
function Xn() {
	return It.linearMemoryBytesV1();
}
function qn(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = St(e, It.__wbindgen_malloc), c = Wt, l = St(_, It.__wbindgen_malloc), a = Wt, s = It.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw At(s[1]);
	return At(s[0]);
}
function Jn(n, e, _) {
	const t = St(n, It.__wbindgen_malloc), r = Wt, i = It.markerIndexRange(t, r, e, _);
	var o = ct(i[0], i[1]).slice();
	return It.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Zn(n, e, _, t, r, i, o) {
	const c = St(n, It.__wbindgen_malloc), l = Wt, a = St(e, It.__wbindgen_malloc), s = Wt, w = It.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw At(w[1]);
	return At(w[0]);
}
function $n(n) {
	const e = St(n, It.__wbindgen_malloc), _ = Wt, t = It.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function Yn(n, e, _, t) {
	const r = It.metricWarnings(n, e, _, t);
	var i = lt(r[0], r[1]).slice();
	return It.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Kn(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = St(e, It.__wbindgen_malloc), i = Wt, o = It.midSleepClockHours(_, t, r, i);
	var c = it(o[0], o[1]).slice();
	return It.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Qn(n, e, _, t, r) {
	const i = St(n, It.__wbindgen_malloc), o = Wt, c = St(e, It.__wbindgen_malloc), l = Wt, a = St(_, It.__wbindgen_malloc), s = Wt, w = It.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw At(w[1]);
	return At(w[0]);
}
function ne(n) {
	const e = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), _ = Wt, t = It.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = bt(t[0], t[1]).slice(), It.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function ee(n, e, _, t, r) {
	const i = St(_, It.__wbindgen_malloc), o = Wt, c = St(t, It.__wbindgen_malloc), l = Wt, a = St(r, It.__wbindgen_malloc), s = Wt, w = It.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw At(w[1]);
	return At(w[0]);
}
function _e(n, e, _, t) {
	let r, i;
	try {
		const l = vt(n, It.__wbindgen_malloc), a = Wt, s = Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), w = Wt, g = It.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, At(g[2]);
		return r = o, i = c, bt(o, c);
	} finally {
		It.__wbindgen_free(r, i, 1);
	}
}
function te(n) {
	const e = St(n, It.__wbindgen_malloc), _ = Wt, t = It.nonwearInSleepCounts(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function re(n) {
	const e = It.nonwearSleepOverlap(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function ie(n, e, _) {
	const t = St(n, It.__wbindgen_malloc), r = Wt, i = St(e, It.__wbindgen_malloc), o = Wt, c = It.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw At(c[1]);
	return At(c[0]);
}
function oe(n, e, _, t, r, i) {
	const o = Ct(r, It.__wbindgen_malloc, It.__wbindgen_realloc), c = Wt, l = It.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw At(l[2]);
	var a = it(l[0], l[1]).slice();
	return It.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function ce(n, e) {
	const _ = kt(n, It.__wbindgen_malloc), t = Wt, r = It.parseActigraphCsv(_, t, e);
	if (r[2]) throw At(r[1]);
	return At(r[0]);
}
function le(n) {
	const e = It.parseActigraphCsvBuffered(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function ae(n, e, _, t) {
	const r = kt(n, It.__wbindgen_malloc), i = Wt;
	var o = yt(e) ? 0 : Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), c = Wt, l = yt(_) ? 0 : Rt(_, It.__wbindgen_malloc), a = Wt, s = yt(t) ? 0 : Ct(t, It.__wbindgen_malloc, It.__wbindgen_realloc), w = Wt;
	const g = It.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw At(g[1]);
	return At(g[0]);
}
function se(n) {
	const e = kt(n, It.__wbindgen_malloc), _ = Wt, t = It.parseCwa(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function we(n, e) {
	const _ = kt(n, It.__wbindgen_malloc), t = Wt, r = Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), i = Wt, o = It.parseEpochSeries(_, t, r, i);
	if (o[2]) throw At(o[1]);
	return At(o[0]);
}
function ge(n) {
	const e = kt(n, It.__wbindgen_malloc), _ = Wt, t = It.parseGeneactivBin(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function ue(n) {
	const e = kt(n, It.__wbindgen_malloc), _ = Wt, t = It.parseGeneactivCsv(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function be() {
	const n = It.parseGeneactivCsvBuffered();
	if (n[2]) throw At(n[1]);
	return At(n[0]);
}
function de(n) {
	const e = kt(n, It.__wbindgen_malloc), _ = Wt, t = It.parseGt3x(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function fe(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = kt(e, It.__wbindgen_malloc), c = Wt, l = kt(_, It.__wbindgen_malloc), a = Wt, s = It.participantValidity(r, i, o, c, l, a, yt(t) ? 0 : _t(t));
	if (s[2]) throw At(s[1]);
	return At(s[0]);
}
function me(n, e, _, t, r) {
	const i = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt, c = St(e, It.__wbindgen_malloc), l = Wt;
	var a = yt(_) ? 0 : St(_, It.__wbindgen_malloc), s = Wt;
	const w = It.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw At(w[1]);
	return At(w[0]);
}
function he(n) {
	let e, _;
	try {
		const i = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt, c = It.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, At(c[2]);
		return e = t, _ = r, bt(t, r);
	} finally {
		It.__wbindgen_free(e, _, 1);
	}
}
function pe(n, e, _, t, r, i) {
	const o = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), c = Wt, l = St(e, It.__wbindgen_malloc), a = Wt, s = St(_, It.__wbindgen_malloc), w = Wt, g = kt(t, It.__wbindgen_malloc), u = Wt, b = kt(r, It.__wbindgen_malloc), d = Wt, f = Ct(i, It.__wbindgen_malloc, It.__wbindgen_realloc), m = Wt, h = It.placeMarkersBatch(o, c, l, a, s, w, g, u, b, d, f, m);
	if (h[2]) throw At(h[1]);
	return At(h[0]);
}
function ye(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h, p) {
	const y = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), v = Wt, k = St(e, It.__wbindgen_malloc), S = Wt, R = vt(_, It.__wbindgen_malloc), C = Wt, A = St(t, It.__wbindgen_malloc), D = Wt, x = vt(r, It.__wbindgen_malloc), M = Wt, P = kt(i, It.__wbindgen_malloc), F = Wt, I = vt(o, It.__wbindgen_malloc), W = Wt, z = kt(c, It.__wbindgen_malloc), U = Wt, O = vt(l, It.__wbindgen_malloc), T = Wt, N = St(a, It.__wbindgen_malloc), G = Wt, B = vt(s, It.__wbindgen_malloc), j = Wt, E = St(w, It.__wbindgen_malloc), L = Wt, V = vt(g, It.__wbindgen_malloc), H = Wt, X = St(u, It.__wbindgen_malloc), q = Wt, J = vt(b, It.__wbindgen_malloc), Z = Wt, $ = St(d, It.__wbindgen_malloc), Y = Wt, K = vt(f, It.__wbindgen_malloc), Q = Wt, nn = kt(m, It.__wbindgen_malloc), en = Wt, _n = vt(h, It.__wbindgen_malloc), tn = Wt;
	var rn = yt(p) ? 0 : Ct(p, It.__wbindgen_malloc, It.__wbindgen_realloc), on = Wt;
	const cn = It.placeMarkersTyped(y, v, k, S, R, C, A, D, x, M, P, F, I, W, z, U, O, T, N, G, B, j, E, L, V, H, X, q, J, Z, $, Y, K, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw At(cn[1]);
	return At(cn[0]);
}
function ve(n) {
	let e, _;
	try {
		const i = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt, c = It.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, At(c[2]);
		return e = t, _ = r, bt(t, r);
	} finally {
		It.__wbindgen_free(e, _, 1);
	}
}
function ke(n, e, _, t) {
	const r = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), i = Wt, o = St(e, It.__wbindgen_malloc), c = Wt, l = St(_, It.__wbindgen_malloc), a = Wt, s = kt(t, It.__wbindgen_malloc), w = Wt, g = It.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw At(g[1]);
	return At(g[0]);
}
function Se(n) {
	const e = It.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function Re(n) {
	const e = It.prepareCompactPipelineV1(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function Ce(n, e, _, t, r, i, o, c) {
	const l = St(n, It.__wbindgen_malloc), a = Wt, s = St(e, It.__wbindgen_malloc), w = Wt, g = St(_, It.__wbindgen_malloc), u = Wt, b = St(t, It.__wbindgen_malloc), d = Wt;
	var f = yt(o) ? 0 : Ct(o, It.__wbindgen_malloc, It.__wbindgen_realloc), m = Wt, h = yt(c) ? 0 : Ct(c, It.__wbindgen_malloc, It.__wbindgen_realloc), p = Wt;
	const y = It.processGeneactivRaw(l, a, s, w, g, u, b, d, r, i, f, m, h, p);
	if (y[2]) throw At(y[1]);
	return At(y[0]);
}
function Ae(n, e) {
	const _ = kt(n, It.__wbindgen_malloc), t = Wt;
	var r = yt(e) ? 0 : Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), i = Wt;
	const o = It.processGt3xPart1(_, t, r, i);
	if (o[2]) throw At(o[1]);
	return At(o[0]);
}
function De(n, e, _) {
	const t = kt(n, It.__wbindgen_malloc), r = Wt;
	var i = yt(_) ? 0 : Ct(_, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt;
	const c = It.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw At(c[1]);
	return At(c[0]);
}
function xe(n, e, _, t, r, i, o) {
	const c = St(n, It.__wbindgen_malloc), l = Wt, a = St(e, It.__wbindgen_malloc), s = Wt, w = St(_, It.__wbindgen_malloc), g = Wt;
	var u = yt(i) ? 0 : Ct(i, It.__wbindgen_malloc, It.__wbindgen_realloc), b = Wt, d = yt(o) ? 0 : Ct(o, It.__wbindgen_malloc, It.__wbindgen_realloc), f = Wt;
	const m = It.processRawXyz(c, l, a, s, w, g, t, r, u, b, d, f);
	if (m[2]) throw At(m[1]);
	return At(m[0]);
}
function Me(n, e, _, t, r, i, o, c) {
	const l = St(n, It.__wbindgen_malloc), a = Wt, s = St(e, It.__wbindgen_malloc), w = Wt, g = St(_, It.__wbindgen_malloc), u = Wt, b = St(t, It.__wbindgen_malloc), d = Wt;
	var f = yt(i) ? 0 : Ct(i, It.__wbindgen_malloc, It.__wbindgen_realloc), m = Wt, h = yt(o) ? 0 : Ct(o, It.__wbindgen_malloc, It.__wbindgen_realloc), p = Wt, y = yt(c) ? 0 : St(c, It.__wbindgen_malloc), v = Wt;
	const k = It.processRawXyzImputed(l, a, s, w, g, u, b, d, r, f, m, h, p, y, v);
	if (k[2]) throw At(k[1]);
	return At(k[0]);
}
function Pe(n, e, _, t, r, i, o, c, l, a) {
	const s = St(n, It.__wbindgen_malloc), w = Wt, g = St(e, It.__wbindgen_malloc), u = Wt, b = St(_, It.__wbindgen_malloc), d = Wt, f = St(t, It.__wbindgen_malloc), m = Wt;
	var h = yt(i) ? 0 : Ct(i, It.__wbindgen_malloc, It.__wbindgen_realloc), p = Wt, y = yt(c) ? 0 : Ct(c, It.__wbindgen_malloc, It.__wbindgen_realloc), v = Wt, k = yt(a) ? 0 : St(a, It.__wbindgen_malloc), S = Wt;
	const R = It.processRawXyzImputedWithEpoch(s, w, g, u, b, d, f, m, r, h, p, o, y, v, yt(l) ? 16777215 : l ? 1 : 0, k, S);
	if (R[2]) throw At(R[1]);
	return At(R[0]);
}
function Fe(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = kt(e, It.__wbindgen_malloc), c = Wt, l = St(t, It.__wbindgen_malloc), a = Wt, s = It.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = lt(s[0], s[1]).slice();
	return It.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function Ie(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = St(e, It.__wbindgen_malloc), c = Wt, l = St(_, It.__wbindgen_malloc), a = Wt, s = It.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw At(s[1]);
	return At(s[0]);
}
function We(n, e, _) {
	const t = kt(n, It.__wbindgen_malloc), r = Wt;
	var i = yt(e) ? 0 : Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt;
	const c = It.readGgirMeta(t, r, i, o, yt(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw At(c[1]);
	return At(c[0]);
}
function ze(n, e) {
	const _ = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), t = Wt;
	var r = yt(e) ? 0 : Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), i = Wt;
	const o = It.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw At(o[1]);
	return At(o[0]);
}
function Ue() {
	return It.recommended_chunk_size_mb() >>> 0;
}
function Oe(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), i = Wt, o = It.reduceF64V1(_, t, r, i);
	if (o[2]) throw At(o[1]);
	return o[0];
}
function Te(n, e) {
	const _ = Rt(e, It.__wbindgen_malloc), t = Wt, r = It.rerunGgirResults(n, _, t);
	if (r[2]) throw At(r[1]);
	return At(r[0]);
}
function Ne(n) {
	const e = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), _ = Wt, t = It.resolveTimezone(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function Ge(n, e, _) {
	const t = St(n, It.__wbindgen_malloc), r = Wt, i = St(e, It.__wbindgen_malloc), o = Wt, c = vt(_, It.__wbindgen_malloc), l = Wt, a = It.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw At(a[2]);
	var s = ot(a[0], a[1]).slice();
	return It.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function Be(n, e, _, t, r, i, o, c, l, a, s, w, g, u) {
	const b = kt(n, It.__wbindgen_malloc), d = Wt, f = Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), m = Wt;
	var h = yt(_) ? 0 : kt(_, It.__wbindgen_malloc), p = Wt, y = yt(t) ? 0 : kt(t, It.__wbindgen_malloc), v = Wt, k = yt(r) ? 0 : kt(r, It.__wbindgen_malloc), S = Wt, R = yt(i) ? 0 : kt(i, It.__wbindgen_malloc), C = Wt, A = yt(o) ? 0 : kt(o, It.__wbindgen_malloc), D = Wt, x = yt(c) ? 0 : Ct(c, It.__wbindgen_malloc, It.__wbindgen_realloc), M = Wt, P = yt(l) ? 0 : Ct(l, It.__wbindgen_malloc, It.__wbindgen_realloc), F = Wt, I = yt(a) ? 0 : Rt(a, It.__wbindgen_malloc), W = Wt, z = yt(w) ? 0 : Ct(w, It.__wbindgen_malloc, It.__wbindgen_realloc), U = Wt, O = yt(g) ? 0 : Ct(g, It.__wbindgen_malloc, It.__wbindgen_realloc), T = Wt;
	const N = It.reviewGgirResults(b, d, f, m, h, p, y, v, k, S, R, C, A, D, x, M, P, F, I, W, s, z, U, O, T, yt(u) ? 4294967297 : u >>> 0);
	if (N[2]) throw At(N[1]);
	return At(N[0]);
}
function je(n) {
	const e = Rt(n, It.__wbindgen_malloc), _ = Wt, t = It.reviewNonwearFile(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function Ee(n) {
	const e = Rt(n, It.__wbindgen_malloc), _ = Wt, t = It.reviewNonwearTotals(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function Le(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = It.roundCountStorage(_, t, e);
	var i = it(r[0], r[1]).slice();
	return It.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Ve(n) {
	const e = It.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function He(n) {
	const e = It.runCompactPipelineV1(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function Xe(n) {
	const e = It.runFullPipelineOutcomeV1(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function qe(n) {
	const e = It.runFullPipelineV1(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function Je(n) {
	const e = It.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function Ze(n) {
	const e = It.runGgirPart3(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function $e(n, e) {
	const _ = kt(n, It.__wbindgen_malloc), t = Wt;
	var r = yt(e) ? 0 : Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), i = Wt;
	const o = It.runMilestone(_, t, r, i);
	if (o[2]) throw At(o[1]);
	return At(o[0]);
}
function Ye(n) {
	const e = Rt(n, It.__wbindgen_malloc), _ = Wt, t = It.scoreAllDays(e, _);
	if (t[3]) throw At(t[2]);
	var r = ot(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Ke(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = It.scoreColeKripke(_, t, e);
	var i = lt(r[0], r[1]).slice();
	return It.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Qe(n) {
	let e, _;
	try {
		const i = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt, c = It.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, At(c[2]);
		return e = t, _ = r, bt(t, r);
	} finally {
		It.__wbindgen_free(e, _, 1);
	}
}
function n_(n) {
	const e = It.scoreConsensusMajority(n);
	if (e[3]) throw At(e[2]);
	var _ = lt(e[0], e[1]).slice();
	return It.__wbindgen_free(e[0], 1 * e[1], 1), _;
}
function e_(n, e, _) {
	const t = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), r = Wt, i = kt(e, It.__wbindgen_malloc), o = Wt, c = vt(_, It.__wbindgen_malloc), l = Wt, a = It.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw At(a[1]);
	return At(a[0]);
}
function __(n) {
	let e, _;
	try {
		const i = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt, c = It.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, At(c[2]);
		return e = t, _ = r, bt(t, r);
	} finally {
		It.__wbindgen_free(e, _, 1);
	}
}
function t_(n, e, _, t, r, i) {
	const o = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), c = Wt, l = St(e, It.__wbindgen_malloc), a = Wt, s = St(_, It.__wbindgen_malloc), w = Wt, g = St(t, It.__wbindgen_malloc), u = Wt, b = It.scoreEpochsTyped(o, c, l, a, s, w, g, u, r, i);
	if (b[2]) throw At(b[1]);
	return At(b[0]);
}
function r_(n, e, _) {
	const t = St(n, It.__wbindgen_malloc), r = Wt;
	var i = yt(e) ? 0 : Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt, c = yt(_) ? 0 : St(_, It.__wbindgen_malloc), l = Wt;
	const a = It.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw At(a[2]);
	var s = lt(a[0], a[1]).slice();
	return It.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function i_(n) {
	const e = It.scoreGgirHasibVariant(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function o_(n, e, _, t, r) {
	const i = St(n, It.__wbindgen_malloc), o = Wt, c = St(e, It.__wbindgen_malloc), l = Wt;
	var a = yt(t) ? 0 : Ct(t, It.__wbindgen_malloc, It.__wbindgen_realloc), s = Wt, w = yt(r) ? 0 : St(r, It.__wbindgen_malloc), g = Wt;
	const u = It.scoreGgirSib(i, o, c, l, _, a, s, w, g);
	if (u[2]) throw At(u[1]);
	return At(u[0]);
}
function c_(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = It.scoreSadeh(_, t, e);
	var i = lt(r[0], r[1]).slice();
	return It.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function l_(n) {
	const e = Rt(n, It.__wbindgen_malloc), _ = Wt, t = It.settleManualNonwearNights(e, _);
	if (t[3]) throw At(t[2]);
	var r = ot(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function a_(n) {
	const e = kt(n, It.__wbindgen_malloc), _ = Wt, t = It.sha256StreamFeed(e, _);
	if (t[1]) throw At(t[0]);
}
function s_() {
	let n, e;
	try {
		const r = It.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, At(r[2]);
		return n = _, e = t, bt(_, t);
	} finally {
		It.__wbindgen_free(n, e, 1);
	}
}
function w_() {
	It.sha256StreamStart();
}
function g_(n, e) {
	const _ = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), t = Wt, r = It.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = bt(r[0], r[1]).slice(), It.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function u_(n, e, _, t, r) {
	const i = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt, c = St(e, It.__wbindgen_malloc), l = Wt, a = vt(_, It.__wbindgen_malloc), s = Wt, w = St(t, It.__wbindgen_malloc), g = Wt, u = vt(r, It.__wbindgen_malloc), b = Wt, d = It.sleepRegularityIndex(i, o, c, l, a, s, w, g, u, b);
	if (d[3]) throw At(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function b_(n, e) {
	const _ = It.sleepWakeScores(n, yt(e) ? 0 : _t(e));
	if (_[2]) throw At(_[1]);
	return At(_[0]);
}
function d_(n) {
	const e = Rt(n, It.__wbindgen_malloc), _ = Wt, t = It.sourceLabelsWallClockMs(e, _);
	var r = it(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function f_(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = St(e, It.__wbindgen_malloc), c = Wt, l = It.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function m_(n, e, _) {
	const t = St(n, It.__wbindgen_malloc), r = Wt, i = Rt(e, It.__wbindgen_malloc), o = Wt, c = St(_, It.__wbindgen_malloc), l = Wt, a = It.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw At(a[2]);
	let s;
	return 0 !== a[0] && (s = it(a[0], a[1]).slice(), It.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function h_(n) {
	return It.startThreadPool(n);
}
function p_(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = kt(e, It.__wbindgen_malloc), c = Wt, l = St(_, It.__wbindgen_malloc), a = Wt, s = St(t, It.__wbindgen_malloc), w = Wt, g = It.statesInPeriods(r, i, o, c, l, a, s, w);
	var u = lt(g[0], g[1]).slice();
	return It.__wbindgen_free(g[0], 1 * g[1], 1), u;
}
function y_(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = Rt(e, It.__wbindgen_malloc), i = Wt, o = It.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw At(o[2]);
	var c = it(o[0], o[1]).slice();
	return It.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function v_(n) {
	const e = kt(n, It.__wbindgen_malloc), _ = Wt, t = It.streamParseFeed(e, _);
	if (t[2]) throw At(t[1]);
	return t[0] >>> 0;
}
function k_() {
	const n = It.streamParseFinish();
	if (n[2]) throw At(n[1]);
	return t.__wrap(n[0]);
}
function S_() {
	const n = It.streamParseFinishChunk();
	if (n[2]) throw At(n[1]);
	return _.__wrap(n[0]);
}
function R_(n) {
	const e = It.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw At(e[1]);
	return _.__wrap(e[0]);
}
function C_(n, e, _) {
	var t = yt(_) ? 0 : Ct(_, It.__wbindgen_malloc, It.__wbindgen_realloc), r = Wt;
	const i = It.streamParseStart(n, e, t, r);
	if (i[1]) throw At(i[0]);
}
function A_(n, e) {
	const _ = It.streamParseStartData(n, e);
	if (_[1]) throw At(_[0]);
}
function D_(n, e, _, t, r) {
	var i = yt(t) ? 0 : Ct(t, It.__wbindgen_malloc, It.__wbindgen_realloc), o = Wt;
	const c = It.streamParseStartWithEpoch(n, e, _, i, o, !yt(r), yt(r) ? 0 : r);
	if (c[1]) throw At(c[0]);
}
function x_(n, e) {
	const _ = kt(n, It.__wbindgen_malloc), t = Wt, r = It.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw At(r[1]);
	return At(r[0]);
}
function M_(n) {
	const e = It.summarizeExportGroups(n);
	if (e[3]) throw At(e[2]);
	var _ = ot(e[0], e[1]).slice();
	return It.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function P_(n) {
	const e = It.summarizePhysicalActivityDays(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function F_(n) {
	const e = It.summarizePhysicalActivityTrace(n);
	if (e[2]) throw At(e[1]);
	return At(e[0]);
}
function I_() {
	return 0 !== It.threadPoolReady();
}
function W_(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = It.thresholdProbabilities(_, t, e);
	var i = lt(r[0], r[1]).slice();
	return It.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function z_(n) {
	const e = Rt(n, It.__wbindgen_malloc), _ = Wt, t = It.timeSemantics(e, _);
	if (t[3]) throw At(t[2]);
	var r = ot(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function U_(n, e, _) {
	const t = St(n, It.__wbindgen_malloc), r = Wt, i = It.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw At(i[2]);
	var o = ot(i[0], i[1]).slice();
	return It.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function O_(n, e, _) {
	const t = It.uniformTimestamps(n, e, _);
	var r = it(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function T_(n, e) {
	const _ = It.utcDatesInSpan(n, e);
	var t = ot(_[0], _[1]).slice();
	return It.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function N_(n) {
	const e = St(n, It.__wbindgen_malloc), _ = Wt, t = It.utcDayIndex(e, _);
	if (t[2]) throw At(t[1]);
	return At(t[0]);
}
function G_(n) {
	const e = kt(n, It.__wbindgen_malloc), _ = Wt, t = It.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function B_(n, e) {
	const _ = St(n, It.__wbindgen_malloc), t = Wt, r = It.validWearDays(_, t, yt(e) ? 0 : _t(e));
	if (r[3]) throw At(r[2]);
	var i = lt(r[0], r[1]).slice();
	return It.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function j_(n, e, _) {
	const t = St(n, It.__wbindgen_malloc), r = Wt, i = It.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw At(i[1]);
	return At(i[0]);
}
function E_(n) {
	const e = St(n, It.__wbindgen_malloc), _ = Wt, t = It.wallClockLabels(e, _);
	var r = ot(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function L_(n, e, _) {
	const t = kt(n, It.__wbindgen_malloc), r = Wt, i = Rt(_, It.__wbindgen_malloc), o = Wt, c = It.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw At(c[2]);
	var l = lt(c[0], c[1]).slice();
	return It.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var V_ = class n {
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
		It.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		It.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return It.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return It.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return It.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function H_(n) {
	It.wbg_rayon_start_worker(n);
}
function X_(n, e) {
	const _ = Ct(n, It.__wbindgen_malloc, It.__wbindgen_realloc), t = Wt;
	var r = yt(e) ? 0 : Ct(e, It.__wbindgen_malloc, It.__wbindgen_realloc), i = Wt;
	const o = It.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw At(o[1]);
	return At(o[0]);
}
function q_(n) {
	const e = Rt(n, It.__wbindgen_malloc), _ = Wt, t = It.weekendDates(e, _);
	var r = lt(t[0], t[1]).slice();
	return It.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function J_(n, e, _, t) {
	const r = St(n, It.__wbindgen_malloc), i = Wt, o = It.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function Z_(n, e, _, t, r) {
	const i = St(n, It.__wbindgen_malloc), o = Wt, c = St(e, It.__wbindgen_malloc), l = Wt, a = St(_, It.__wbindgen_malloc), s = Wt, w = It.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw At(w[1]);
	return At(w[0]);
}
function $_(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(bt(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = Ct(String(e), It.__wbindgen_malloc, It.__wbindgen_realloc), t = Wt;
				st().setInt32(n + 4, t, !0), st().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				st().setBigInt64(n + 8, yt(_) ? BigInt(0) : _, !0), st().setInt32(n + 0, !yt(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return yt(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = Ct(rt(e), It.__wbindgen_malloc, It.__wbindgen_realloc), t = Wt;
				st().setInt32(n + 4, t, !0), st().setInt32(n + 0, _, !0);
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
				return It.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return Ft;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const _ = "number" == typeof e ? e : void 0;
				st().setFloat64(n + 8, yt(_) ? 0 : _, !0), st().setInt32(n + 0, !yt(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = yt(_) ? 0 : Ct(_, It.__wbindgen_malloc, It.__wbindgen_realloc), r = Wt;
				st().setInt32(n + 4, r, !0), st().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(bt(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return pt(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return pt(function(n, e, _, t) {
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
					_ = n, t = e, console.error(bt(n, e));
				} finally {
					It.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return pt(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return pt(function(n, e) {
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
				return new Uint32Array(ct(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(it(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== wt && wt.buffer === It.memory.buffer || (wt = new Float32Array(It.memory.buffer)), wt).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return pt(function(n) {
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
				return pt(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(lt(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return pt(function(n, e, _) {
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
				const _ = Ct(e.stack, It.__wbindgen_malloc, It.__wbindgen_realloc), t = Wt;
				st().setInt32(n + 4, t, !0), st().setInt32(n + 0, _, !0);
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
				}(e, _, V_.__wrap(t));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return yt(n) ? 0 : _t(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return yt(n) ? 0 : _t(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return yt(n) ? 0 : _t(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return yt(n) ? 0 : _t(n);
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
						0 === --t.cnt && (It.__wbindgen_destroy_closure(t.a, t.b), t.a = 0, tt.unregister(t));
					}, tt.register(r, t, t), r;
				}(n, e, Y_);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return lt(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return bt(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = It.__wbindgen_externrefs, e = n.grow(4);
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
function Y_(n, e, _) {
	It.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, _);
}
Symbol.dispose && (V_.prototype[Symbol.dispose] = V_.prototype.free);
const K_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => It.__wbg_aw5batch_free(n >>> 0, 1)), Q_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => It.__wbg_streamchunkresult_free(n >>> 0, 1)), nt = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => It.__wbg_streamparseresult_free(n >>> 0, 1)), et = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => It.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function _t(n) {
	const e = It.__externref_table_alloc();
	return It.__wbindgen_externrefs.set(e, n), e;
}
const tt = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => It.__wbindgen_destroy_closure(n.a, n.b));
function rt(n) {
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
		e > 0 && (_ += rt(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + rt(n[t]);
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
function it(n, e) {
	return n >>>= 0, ut().subarray(n / 8, n / 8 + e);
}
function ot(n, e) {
	n >>>= 0;
	const _ = st(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(It.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return It.__externref_drop_slice(n, e), t;
}
function ct(n, e) {
	return n >>>= 0, ft().subarray(n / 4, n / 4 + e);
}
function lt(n, e) {
	return n >>>= 0, ht().subarray(n / 1, n / 1 + e);
}
let at = null;
function st() {
	return null !== at && at.buffer === It.memory.buffer || (at = new DataView(It.memory.buffer)), at;
}
let wt = null, gt = null;
function ut() {
	return null !== gt && gt.buffer === It.memory.buffer || (gt = new Float64Array(It.memory.buffer)), gt;
}
function bt(n, e) {
	return function(n, e) {
		return Mt += e, Mt >= xt && (Dt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Dt.decode(), Mt = e), Dt.decode(ht().slice(n, n + e));
	}(n >>>= 0, e);
}
let dt = null;
function ft() {
	return null !== dt && dt.buffer === It.memory.buffer || (dt = new Uint32Array(It.memory.buffer)), dt;
}
let mt = null;
function ht() {
	return null !== mt && mt.buffer === It.memory.buffer || (mt = new Uint8Array(It.memory.buffer)), mt;
}
function pt(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = _t(_);
		It.__wbindgen_exn_store(n);
	}
}
function yt(n) {
	return null == n;
}
function vt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return ft().set(n, _ / 4), Wt = n.length, _;
}
function kt(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return ht().set(n, _ / 1), Wt = n.length, _;
}
function St(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return ut().set(n, _ / 8), Wt = n.length, _;
}
function Rt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = _t(n[t]);
		st().setUint32(_ + 4 * t, e, !0);
	}
	return Wt = n.length, _;
}
function Ct(n, e, _) {
	if (void 0 === _) {
		const _ = Pt.encode(n), t = e(_.length, 1) >>> 0;
		return ht().subarray(t, t + _.length).set(_), Wt = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = ht();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = ht().subarray(r + o, r + t);
		o += Pt.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return Wt = o, r;
}
function At(n) {
	const e = It.__wbindgen_externrefs.get(n);
	return It.__externref_table_dealloc(n), e;
}
let Dt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
Dt && Dt.decode();
const xt = 2146435072;
let Mt = 0;
const Pt = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
Pt && (Pt.encodeInto = function(n, e) {
	const _ = Pt.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let Ft, It, Wt = 0;
function zt(n, e, _) {
	if (It = n.exports, Ft = e, at = null, wt = null, gt = null, dt = null, mt = null, void 0 !== _ && ("number" != typeof _ || 0 === _ || _ % 65536 != 0)) throw new Error("invalid stack size");
	return It.__wbindgen_start(_), It;
}
function Ut(n, e) {
	if (void 0 !== It) return It;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const t = $_(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), zt(new WebAssembly.Instance(n, t), n, _);
}
async function Ot(n, e) {
	if (void 0 !== It) return It;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-D338blL5.wasm", "" + import.meta.url));
	const t = $_(e);
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
	return zt(r, i, _);
}
export { e as Aw5Batch, _ as StreamChunkResult, t as StreamParseResult, r as actiwareIntervalStatistics, i as actiwareSleepIntervals, o as actiwareWakeThreshold, c as actoursVersion, l as aggregateEpochSeries, a as analysisDatesOf, s as analysisWindowBounds, w as analysisWindowSlice, g as analyzePhysicalActivityDay, u as classifyActimetricPreschoolWristRf, b as classifyActimetricPreschoolWristRfLagLead, d as classifyActimetricPreschoolWristRfLagLeadCalibrated, f as clippedUnionHours, m as compareNonwearDetectorMasks, h as computeAnglez5s, p as computeCircadian, y as computeCircadianTyped, v as computeEnmo5s, k as computeMimsUnit, S as computeMimsUnitDataframe, R as computeMimsUnitTimingBreakdown, C as computeMimsUnitValues, A as computeNightDifficulty, D as computeNightDifficultyTyped, x as computeNightSignals, M as computeNightSignalsTyped, P as computeSleepMetrics, F as configureComputeMemoryBudgetV1, I as consensusDisagreementDetail, W as consensusDisagreements, z as convertBedWakeDaysDiary, U as convertScreensRedcapDiary, O as csvBufferAppend, T as csvBufferClear, N as cutpointEpochCompatibility, G as cutpointToneCodes, B as cutpointsRefusal, j as cutpointsValid, Ot as default, E as describeColumns, L as detectDetachFromAccelerationG, V as detectDeviceFormat, H as detectGgirHasptVariant, X as detectHdcza, q as detectHourClockJumpMs, J as detectNonwear, Z as detectNonwearChoi2011, $ as detectNonwearChoi2011Bouts, Y as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, Q as detectNonwearChoi2012Bouts, nn as detectNonwearChoi2012Epoch, en as detectNonwearChoiBouts, _n as detectNonwearUnified, tn as detectNonwearUnifiedBatchTyped, rn as dstPlaceholderRuns, on as effectiveOverrideCutpoints, cn as epochAgreement, ln as epochRawData, an as epochWithBandpass, sn as epochsOverlapping, wn as executeHeroRuntime, gn as exportNapAggregate, un as exportPeriodFigures, bn as extractCapsense, dn as foldOntoGrid, fn as foldSampleBlocks, mn as foldSleepWakeVotes, hn as foldUniformOntoGrid, pn as fuseNonwearMasks, yn as generateActiwareRestIntervals, vn as getComputeCapabilitiesV1, kn as ggir5sWallClockMs, Sn as ggirAppConfigSummary, Rn as ggirConfigValues, Cn as ggirDayValidFraction, An as ggirDaysIncluded, Dn as ggirDiaryLogShape, xn as ggirDstPlaceholderCuts, Mn as ggirIncludeDayCriterionHours, Pn as ggirIndicesToWallClockMs, Fn as ggirLabelsToStoredMs, In as ggirManualNightClocks, Wn as ggirMilestoneVersion, zn as ggirRerunProfiles, Un as ggirSleeplogStoredClocks, On as ggirSptDurationHours, Tn as ggirSummaryDenominator, Nn as gridOffsetWithin, Gn as identifyGgirRData, Bn as implausibilityReasons, Ut as initSync, jn as initThreadPool, En as installPanicHook, Ln as interRaterReliability, Vn as irregularInternalDays, Hn as isGeneactivFormat, Xn as linearMemoryBytesV1, qn as lstmSpectralFeatures30s, Jn as markerIndexRange, Zn as markerSleepOnsetOffset, $n as medianGapSeconds, Yn as metricWarnings, Kn as midSleepClockHours, Qn as neishabouriCounts, ne as nextDate, ee as nightIntervalOverlap, _e as nonwearContributors, te as nonwearInSleepCounts, re as nonwearSleepOverlap, ie as nonwearWeightRuns, oe as normalizeCutpoints, ce as parseActigraphCsv, le as parseActigraphCsvBuffered, ae as parseAw5, se as parseCwa, we as parseEpochSeries, ge as parseGeneactivBin, ue as parseGeneactivCsv, be as parseGeneactivCsvBuffered, de as parseGt3x, fe as participantValidity, me as physicalActivitySeriesGrid, he as placeMarkers, pe as placeMarkersBatch, ye as placeMarkersTyped, ve as placeNonwearMarkers, ke as placeNonwearMarkersTyped, Se as prepareCompactPipelineOutcomeV1, Re as prepareCompactPipelineV1, Ce as processGeneactivRaw, Ae as processGt3xPart1, De as processGt3xPart1WithEpoch, xe as processRawXyz, Me as processRawXyzImputed, Pe as processRawXyzImputedWithEpoch, Fe as projectLabelsOntoGrid, Ie as rasterizePeriods, We as readGgirMeta, ze as readGgirReportCsv, Ue as recommended_chunk_size_mb, Oe as reduceF64V1, Te as rerunGgirResults, Ne as resolveTimezone, Ge as restoredDstRuns, Be as reviewGgirResults, je as reviewNonwearFile, Ee as reviewNonwearTotals, Le as roundCountStorage, Ve as runCompactPipelineOutcomeV1, He as runCompactPipelineV1, Xe as runFullPipelineOutcomeV1, qe as runFullPipelineV1, Je as runGgirDeclaredEpochsV1, Ze as runGgirPart3, $e as runMilestone, Ye as scoreAllDays, Ke as scoreColeKripke, Qe as scoreConsensus, n_ as scoreConsensusMajority, e_ as scoreConsensusTyped, __ as scoreEpochs, t_ as scoreEpochsTyped, r_ as scoreGgirHasib, i_ as scoreGgirHasibVariant, o_ as scoreGgirSib, c_ as scoreSadeh, l_ as settleManualNonwearNights, a_ as sha256StreamFeed, s_ as sha256StreamFinish, w_ as sha256StreamStart, g_ as shiftDate, u_ as sleepRegularityIndex, b_ as sleepWakeScores, d_ as sourceLabelsWallClockMs, f_ as spanFiniteMean, m_ as spliceDstPlaceholders, h_ as startThreadPool, p_ as statesInPeriods, y_ as storedToGgirLabelsMs, v_ as streamParseFeed, k_ as streamParseFinish, S_ as streamParseFinishChunk, R_ as streamParseFinishChunkWithProgress, C_ as streamParseStart, A_ as streamParseStartData, D_ as streamParseStartWithEpoch, x_ as summarizeActimetricPreschoolWristRfClasses, M_ as summarizeExportGroups, P_ as summarizePhysicalActivityDays, F_ as summarizePhysicalActivityTrace, I_ as threadPoolReady, W_ as thresholdProbabilities, z_ as timeSemantics, U_ as timestampDiscontinuities, O_ as uniformTimestamps, T_ as utcDatesInSpan, N_ as utcDayIndex, G_ as validStateFraction, B_ as validWearDays, j_ as wallClockDstPlaceholders, E_ as wallClockLabels, L_ as wallMaskOntoGgirGrid, V_ as wbg_rayon_PoolBuilder, H_ as wbg_rayon_start_worker, X_ as wearSiteHasptRouting, q_ as weekendDates, J_ as windowCoverage, Z_ as zeroCrossingCounts };
