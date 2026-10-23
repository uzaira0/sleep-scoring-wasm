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
		return this.__wbg_ptr = 0, Y_.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Ft.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = St(n, Ft.__wbindgen_malloc), _ = It, t = Ft.aw5batch_new(e, _);
		if (t[2]) throw Ct(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, Y_.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), r = It;
		var i = pt(_) ? 0 : Rt(_, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It;
		const c = Ft.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw Ct(c[1]);
		return Ct(c[0]);
	}
	subjects(n) {
		const e = Ft.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw Ct(e[2]);
		var _ = it(e[0], e[1]).slice();
		return Ft.__wbindgen_free(e[0], 4 * e[1], 4), _;
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
		Ft.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Ft.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Ft.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Ft.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Ft.streamchunkresult_axisX(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ft.streamchunkresult_axisY(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ft.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = Ft.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw Ct(n[1]);
		return Ct(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== Ft.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ft.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ut(n[0], n[1]).slice(), Ft.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Ft.streamchunkresult_counts(this.__wbg_ptr);
		var e = ot(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Ft.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = ot(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Ft.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Ft.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = Ft.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = Ft.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = ct(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = Ft.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = rt(e[0], e[1]).slice();
		return Ft.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return Ft.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Ft.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Ft.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Ft.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Ft.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ut(n[0], n[1]).slice(), Ft.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Ft.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Ft.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Ft.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Ft.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ft.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Ft.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ft.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = Ft.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = ot(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Ft.streamchunkresult_temperature(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ft.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Ft.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ft.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Ft.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Ft.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Ft.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var t = class n {
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
		Ft.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Ft.streamparseresult_axisX(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ft.streamparseresult_axisY(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ft.streamparseresult_axisZ(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = Ft.streamparseresult_calibration(this.__wbg_ptr);
		if (n[2]) throw Ct(n[1]);
		return Ct(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== Ft.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ft.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ut(n[0], n[1]).slice(), Ft.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return Ft.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== Ft.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ft.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ft.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Ft.streamparseresult_temperature(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ft.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ft.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = rt(n[0], n[1]).slice();
		return Ft.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function r(n) {
	const e = Ft.actiwareIntervalStatistics(n);
	if (e[3]) throw Ct(e[2]);
	var _ = it(e[0], e[1]).slice();
	return Ft.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function i(n, e, _) {
	const t = St(e, Ft.__wbindgen_malloc), r = It, i = Ft.actiwareSleepIntervals(n, t, r, pt(_) ? 0 : et(_));
	if (i[3]) throw Ct(i[2]);
	var o = it(i[0], i[1]).slice();
	return Ft.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function o(n, e) {
	const _ = Ft.actiwareWakeThreshold(n, pt(e) ? 0 : et(e));
	if (_[3]) throw Ct(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function c() {
	let n, e;
	try {
		const _ = Ft.actoursVersion();
		return n = _[0], e = _[1], ut(_[0], _[1]);
	} finally {
		Ft.__wbindgen_free(n, e, 1);
	}
}
function l(n) {
	const e = Ft.aggregateEpochSeries(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function a(n) {
	const e = kt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.analysisDatesOf(e, _);
	var r = it(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function s(n, e) {
	const _ = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), t = It, r = Ft.analysisWindowBounds(_, t, !pt(e), pt(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = rt(r[0], r[1]).slice(), Ft.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function w(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), i = It, o = Ft.analysisWindowSlice(_, t, r, i);
	var c = ot(o[0], o[1]).slice();
	return Ft.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function g(n) {
	let e, _;
	try {
		const i = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It, c = Ft.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Ct(c[2]);
		return e = t, _ = r, ut(t, r);
	} finally {
		Ft.__wbindgen_free(e, _, 1);
	}
}
function u(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = kt(e, Ft.__wbindgen_malloc), c = It, l = kt(_, Ft.__wbindgen_malloc), a = It, s = Ft.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw Ct(s[2]);
	var w = ct(s[0], s[1]).slice();
	return Ft.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function b(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = kt(e, Ft.__wbindgen_malloc), c = It, l = kt(_, Ft.__wbindgen_malloc), a = It, s = Ft.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw Ct(s[2]);
	var w = ct(s[0], s[1]).slice();
	return Ft.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function d(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = kt(e, Ft.__wbindgen_malloc), c = It, l = kt(_, Ft.__wbindgen_malloc), a = It, s = Ft.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw Ct(s[2]);
	var w = ct(s[0], s[1]).slice();
	return Ft.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function f(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = kt(e, Ft.__wbindgen_malloc), c = It;
	return Ft.clippedUnionHours(r, i, o, c, _, t);
}
function m(n, e) {
	const _ = Ft.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw Ct(_[1]);
	return Ct(_[0]);
}
function h(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = kt(e, Ft.__wbindgen_malloc), c = It, l = kt(_, Ft.__wbindgen_malloc), a = It, s = Ft.computeAnglez5s(r, i, o, c, l, a, t);
	var w = rt(s[0], s[1]).slice();
	return Ft.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function p(n) {
	let e, _;
	try {
		const i = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It, c = Ft.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Ct(c[2]);
		return e = t, _ = r, ut(t, r);
	} finally {
		Ft.__wbindgen_free(e, _, 1);
	}
}
function y(n, e, _, t, r, i, o) {
	const c = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), l = It, a = kt(e, Ft.__wbindgen_malloc), s = It, w = yt(_, Ft.__wbindgen_malloc), g = It, u = kt(t, Ft.__wbindgen_malloc), b = It, d = yt(r, Ft.__wbindgen_malloc), f = It, m = vt(i, Ft.__wbindgen_malloc), h = It, p = yt(o, Ft.__wbindgen_malloc), y = It, v = Ft.computeCircadianTyped(c, l, a, s, w, g, u, b, d, f, m, h, p, y);
	if (v[2]) throw Ct(v[1]);
	return Ct(v[0]);
}
function v(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = kt(e, Ft.__wbindgen_malloc), c = It, l = kt(_, Ft.__wbindgen_malloc), a = It, s = Ft.computeEnmo5s(r, i, o, c, l, a, t);
	var w = rt(s[0], s[1]).slice();
	return Ft.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function k(n, e, _, t, r) {
	const i = kt(n, Ft.__wbindgen_malloc), o = It, c = kt(e, Ft.__wbindgen_malloc), l = It, a = kt(_, Ft.__wbindgen_malloc), s = It, w = Ft.computeMimsUnit(i, o, c, l, a, s, t, pt(r) ? 0 : et(r));
	if (w[2]) throw Ct(w[1]);
	return Ct(w[0]);
}
function S(n, e, _, t, r) {
	const i = kt(n, Ft.__wbindgen_malloc), o = It, c = kt(e, Ft.__wbindgen_malloc), l = It, a = kt(_, Ft.__wbindgen_malloc), s = It, w = kt(t, Ft.__wbindgen_malloc), g = It, u = Ft.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, pt(r) ? 0 : et(r));
	if (u[2]) throw Ct(u[1]);
	return Ct(u[0]);
}
function R(n, e, _, t, r) {
	const i = kt(n, Ft.__wbindgen_malloc), o = It, c = kt(e, Ft.__wbindgen_malloc), l = It, a = kt(_, Ft.__wbindgen_malloc), s = It, w = Ft.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, pt(r) ? 0 : et(r));
	if (w[2]) throw Ct(w[1]);
	return Ct(w[0]);
}
function C(n, e, _, t, r) {
	const i = kt(n, Ft.__wbindgen_malloc), o = It, c = kt(e, Ft.__wbindgen_malloc), l = It, a = kt(_, Ft.__wbindgen_malloc), s = It, w = Ft.computeMimsUnitValues(i, o, c, l, a, s, t, pt(r) ? 0 : et(r));
	if (w[3]) throw Ct(w[2]);
	var g = rt(w[0], w[1]).slice();
	return Ft.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function A(n) {
	let e, _;
	try {
		const i = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It, c = Ft.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Ct(c[2]);
		return e = t, _ = r, ut(t, r);
	} finally {
		Ft.__wbindgen_free(e, _, 1);
	}
}
function D(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), y = It, v = kt(e, Ft.__wbindgen_malloc), k = It, S = yt(_, Ft.__wbindgen_malloc), R = It, C = kt(t, Ft.__wbindgen_malloc), A = It, D = yt(r, Ft.__wbindgen_malloc), x = It, M = vt(i, Ft.__wbindgen_malloc), P = It, F = yt(o, Ft.__wbindgen_malloc), I = It, W = vt(c, Ft.__wbindgen_malloc), z = It, U = yt(l, Ft.__wbindgen_malloc), O = It, T = kt(a, Ft.__wbindgen_malloc), N = It, G = yt(s, Ft.__wbindgen_malloc), B = It, j = kt(w, Ft.__wbindgen_malloc), E = It, L = yt(g, Ft.__wbindgen_malloc), V = It, H = kt(u, Ft.__wbindgen_malloc), X = It, q = yt(b, Ft.__wbindgen_malloc), J = It, Z = kt(d, Ft.__wbindgen_malloc), $ = It, Y = yt(f, Ft.__wbindgen_malloc), K = It, Q = vt(m, Ft.__wbindgen_malloc), nn = It, en = yt(h, Ft.__wbindgen_malloc), _n = It, tn = Ft.computeNightDifficultyTyped(p, y, v, k, S, R, C, A, D, x, M, P, F, I, W, z, U, O, T, N, G, B, j, E, L, V, H, X, q, J, Z, $, Y, K, Q, nn, en, _n);
	if (tn[2]) throw Ct(tn[1]);
	return Ct(tn[0]);
}
function x(n) {
	let e, _;
	try {
		const i = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It, c = Ft.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Ct(c[2]);
		return e = t, _ = r, ut(t, r);
	} finally {
		Ft.__wbindgen_free(e, _, 1);
	}
}
function M(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), y = It, v = kt(e, Ft.__wbindgen_malloc), k = It, S = yt(_, Ft.__wbindgen_malloc), R = It, C = kt(t, Ft.__wbindgen_malloc), A = It, D = yt(r, Ft.__wbindgen_malloc), x = It, M = vt(i, Ft.__wbindgen_malloc), P = It, F = yt(o, Ft.__wbindgen_malloc), I = It, W = vt(c, Ft.__wbindgen_malloc), z = It, U = yt(l, Ft.__wbindgen_malloc), O = It, T = kt(a, Ft.__wbindgen_malloc), N = It, G = yt(s, Ft.__wbindgen_malloc), B = It, j = kt(w, Ft.__wbindgen_malloc), E = It, L = yt(g, Ft.__wbindgen_malloc), V = It, H = kt(u, Ft.__wbindgen_malloc), X = It, q = yt(b, Ft.__wbindgen_malloc), J = It, Z = kt(d, Ft.__wbindgen_malloc), $ = It, Y = yt(f, Ft.__wbindgen_malloc), K = It, Q = vt(m, Ft.__wbindgen_malloc), nn = It, en = yt(h, Ft.__wbindgen_malloc), _n = It, tn = Ft.computeNightSignalsTyped(p, y, v, k, S, R, C, A, D, x, M, P, F, I, W, z, U, O, T, N, G, B, j, E, L, V, H, X, q, J, Z, $, Y, K, Q, nn, en, _n);
	if (tn[2]) throw Ct(tn[1]);
	return Ct(tn[0]);
}
function P(n, e, _) {
	const t = vt(n, Ft.__wbindgen_malloc), r = It, i = kt(e, Ft.__wbindgen_malloc), o = It, c = Ft.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw Ct(c[1]);
	return Ct(c[0]);
}
function F(n) {
	const e = Ft.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function I(n) {
	const e = St(n, Ft.__wbindgen_malloc), _ = It, t = Ft.consensusDisagreementDetail(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function W(n) {
	const e = Ft.consensusDisagreements(n);
	if (e[3]) throw Ct(e[2]);
	var _ = it(e[0], e[1]).slice();
	return Ft.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function z(n) {
	const e = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), _ = It, t = Ft.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function U(n) {
	const e = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), _ = It, t = Ft.convertScreensRedcapDiary(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function O(n) {
	const e = vt(n, Ft.__wbindgen_malloc), _ = It;
	Ft.csvBufferAppend(e, _);
}
function T(n) {
	Ft.csvBufferClear(n);
}
function N(n, e) {
	const _ = Ft.cutpointEpochCompatibility(n, e);
	if (_[2]) throw Ct(_[1]);
	return Ct(_[0]);
}
function G(n, e, _, t, r) {
	const i = kt(n, Ft.__wbindgen_malloc), o = It, c = Ft.cutpointToneCodes(i, o, e, _, t, r);
	var l = ct(c[0], c[1]).slice();
	return Ft.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = Ft.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = ut(r[0], r[1]).slice(), Ft.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function j(n, e, _, t) {
	return 0 !== Ft.cutpointsValid(n, e, _, t);
}
function E(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = yt(e, Ft.__wbindgen_malloc), i = It, o = Ft.describeColumns(_, t, r, i);
	if (o[3]) throw Ct(o[2]);
	var c = it(o[0], o[1]).slice();
	return Ft.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function L(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = kt(e, Ft.__wbindgen_malloc), i = It, o = Ft.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw Ct(o[2]);
	var c = ct(o[0], o[1]).slice();
	return Ft.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function V(n, e) {
	let _, t;
	try {
		const r = vt(n, Ft.__wbindgen_malloc), i = It, o = Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), c = It, l = Ft.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], ut(l[0], l[1]);
	} finally {
		Ft.__wbindgen_free(_, t, 1);
	}
}
function H(n) {
	const e = Ft.detectGgirHasptVariant(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function X(n, e, _, t, r) {
	const i = kt(n, Ft.__wbindgen_malloc), o = It;
	var c = pt(e) ? 0 : Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), l = It, a = pt(_) ? 0 : kt(_, Ft.__wbindgen_malloc), s = It, w = pt(t) ? 0 : kt(t, Ft.__wbindgen_malloc), g = It, u = pt(r) ? 0 : Rt(r, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), b = It;
	const d = Ft.detectHdcza(i, o, c, l, a, s, w, g, u, b);
	if (d[2]) throw Ct(d[1]);
	return Ct(d[0]);
}
function q(n) {
	const e = kt(n, Ft.__wbindgen_malloc), _ = It;
	return 0 !== Ft.detectHourClockJumpMs(e, _);
}
function J(n) {
	const e = kt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.detectNonwear(e, _);
	var r = ct(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Z(n) {
	const e = kt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.detectNonwearChoi2011(e, _);
	var r = ct(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = kt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.detectNonwearChoi2011Bouts(e, _);
	if (t[3]) throw Ct(t[2]);
	var r = it(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Y(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = Ft.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw Ct(r[2]);
	var i = ct(r[0], r[1]).slice();
	return Ft.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = kt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.detectNonwearChoi2012(e, _);
	var r = ct(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Q(n) {
	const e = kt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.detectNonwearChoi2012Bouts(e, _);
	if (t[3]) throw Ct(t[2]);
	var r = it(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function nn(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = Ft.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw Ct(r[2]);
	var i = ct(r[0], r[1]).slice();
	return Ft.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function en(n) {
	const e = kt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.detectNonwearChoiBouts(e, _);
	if (t[3]) throw Ct(t[2]);
	var r = it(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function _n(n) {
	let e, _;
	try {
		const i = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It, c = Ft.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Ct(c[2]);
		return e = t, _ = r, ut(t, r);
	} finally {
		Ft.__wbindgen_free(e, _, 1);
	}
}
function tn(n, e, _, t, r, i, o) {
	const c = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), l = It, a = Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), s = It, w = kt(_, Ft.__wbindgen_malloc), g = It, u = kt(t, Ft.__wbindgen_malloc), b = It, d = kt(r, Ft.__wbindgen_malloc), f = It, m = Ft.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, u, b, d, f, i, o);
	if (m[2]) throw Ct(m[1]);
	return Ct(m[0]);
}
function rn(n, e, _) {
	const t = St(_, Ft.__wbindgen_malloc), r = It, i = Ft.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw Ct(i[2]);
	var o = it(i[0], i[1]).slice();
	return Ft.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function on(n, e, _, t) {
	const r = Ft.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = rt(r[0], r[1]).slice(), Ft.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function cn(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = kt(e, Ft.__wbindgen_malloc), i = It, o = Ft.epochAgreement(_, t, r, i);
	if (o[2]) throw Ct(o[1]);
	return Ct(o[0]);
}
function ln(n, e, _, t, r) {
	const i = kt(n, Ft.__wbindgen_malloc), o = It, c = kt(e, Ft.__wbindgen_malloc), l = It, a = kt(_, Ft.__wbindgen_malloc), s = It, w = kt(t, Ft.__wbindgen_malloc), g = It, u = Ft.epochRawData(i, o, c, l, a, s, w, g, r);
	if (u[2]) throw Ct(u[1]);
	return Ct(u[0]);
}
function an(n, e, _) {
	const t = kt(n, Ft.__wbindgen_malloc), r = It, i = kt(e, Ft.__wbindgen_malloc), o = It, c = Ft.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw Ct(c[1]);
	return Ct(c[0]);
}
function sn(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = Ft.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = ot(o[0], o[1]).slice(), Ft.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function wn(n, e) {
	let _, t;
	try {
		const o = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), c = It, l = Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), a = It, s = Ft.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Ct(s[2]);
		return _ = r, t = i, ut(r, i);
	} finally {
		Ft.__wbindgen_free(_, t, 1);
	}
}
function gn(n) {
	const e = St(n, Ft.__wbindgen_malloc), _ = It, t = Ft.exportNapAggregate(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function un(n, e, _) {
	const t = St(_, Ft.__wbindgen_malloc), r = It, i = Ft.exportPeriodFigures(!pt(n), pt(n) ? 0 : n, !pt(e), pt(e) ? 0 : e, t, r);
	if (i[2]) throw Ct(i[1]);
	return Ct(i[0]);
}
function bn(n) {
	const e = vt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.extractCapsense(e, _);
	if (t[3]) throw Ct(t[2]);
	var r = it(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function dn(n, e, _, t, r) {
	const i = kt(n, Ft.__wbindgen_malloc), o = It, c = kt(e, Ft.__wbindgen_malloc), l = It, a = kt(_, Ft.__wbindgen_malloc), s = It, w = Rt(r, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), g = It, u = Ft.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (u[3]) throw Ct(u[2]);
	var b = rt(u[0], u[1]).slice();
	return Ft.__wbindgen_free(u[0], 8 * u[1], 8), b;
}
function fn(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = Rt(t, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), c = It, l = Ft.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw Ct(l[2]);
	var a = rt(l[0], l[1]).slice();
	return Ft.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function mn(n, e, _, t, r) {
	const i = vt(_, Ft.__wbindgen_malloc), o = It, c = kt(t, Ft.__wbindgen_malloc), l = It, a = Ft.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw Ct(a[1]);
	return Ct(a[0]);
}
function hn(n, e, _, t, r, i) {
	const o = kt(_, Ft.__wbindgen_malloc), c = It, l = kt(t, Ft.__wbindgen_malloc), a = It, s = Rt(i, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), w = It, g = Ft.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw Ct(g[2]);
	var u = rt(g[0], g[1]).slice();
	return Ft.__wbindgen_free(g[0], 8 * g[1], 8), u;
}
function pn(n) {
	const e = Ft.fuseNonwearMasks(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function yn(n, e, _) {
	var t = pt(_) ? 0 : Rt(_, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), r = It;
	const i = Ft.generateActiwareRestIntervals(n, pt(e) ? 0 : et(e), t, r);
	if (i[3]) throw Ct(i[2]);
	var o = it(i[0], i[1]).slice();
	return Ft.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function vn() {
	const n = Ft.getComputeCapabilitiesV1();
	if (n[2]) throw Ct(n[1]);
	return Ct(n[0]);
}
function kn(n, e, _) {
	const t = St(_, Ft.__wbindgen_malloc), r = It, i = Ft.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw Ct(i[2]);
	var o = rt(i[0], i[1]).slice();
	return Ft.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function Sn(n, e) {
	var _ = pt(n) ? 0 : Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), t = It;
	const r = Ft.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw Ct(r[1]);
	return Ct(r[0]);
}
function Rn(n) {
	const e = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), _ = It, t = Ft.ggirConfigValues(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function Cn(n, e, _) {
	const t = kt(n, Ft.__wbindgen_malloc), r = It;
	var i = pt(e) ? 0 : kt(e, Ft.__wbindgen_malloc), o = It, c = pt(_) ? 0 : Rt(_, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), l = It;
	const a = Ft.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw Ct(a[2]);
	var s = ct(a[0], a[1]).slice();
	return Ft.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function An(n, e) {
	const _ = vt(n, Ft.__wbindgen_malloc), t = It;
	var r = pt(e) ? 0 : Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), i = It;
	const o = Ft.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw Ct(o[1]);
	return Ct(o[0]);
}
function Dn(n, e, _) {
	const t = St(e, Ft.__wbindgen_malloc), r = It;
	var i = pt(_) ? 0 : kt(_, Ft.__wbindgen_malloc), o = It;
	const c = Ft.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw Ct(c[2]);
	var l = it(c[0], c[1]).slice();
	return Ft.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function xn(n) {
	var e = pt(n) ? 0 : Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), _ = It;
	const t = Ft.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw Ct(t[1]);
	return t[0];
}
function Mn(n, e, _, t) {
	const r = yt(n, Ft.__wbindgen_malloc), i = It, o = St(_, Ft.__wbindgen_malloc), c = It;
	var l = pt(t) ? 0 : kt(t, Ft.__wbindgen_malloc), a = It;
	const s = Ft.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw Ct(s[2]);
	var w = rt(s[0], s[1]).slice();
	return Ft.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function Pn(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = St(e, Ft.__wbindgen_malloc), i = It, o = Ft.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw Ct(o[2]);
	var c = rt(o[0], o[1]).slice();
	return Ft.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Fn(n, e, _, t) {
	const r = St(n, Ft.__wbindgen_malloc), i = It, o = kt(e, Ft.__wbindgen_malloc), c = It, l = kt(_, Ft.__wbindgen_malloc), a = It, s = kt(t, Ft.__wbindgen_malloc), w = It, g = Ft.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw Ct(g[1]);
	return Ct(g[0]);
}
function In(n) {
	const e = vt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.ggirMilestoneVersion(e, _);
	if (t[3]) throw Ct(t[2]);
	let r;
	return 0 !== t[0] && (r = ut(t[0], t[1]).slice(), Ft.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Wn() {
	const n = Ft.ggirRerunProfiles();
	if (n[3]) throw Ct(n[2]);
	var e = it(n[0], n[1]).slice();
	return Ft.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function zn(n, e, _, t) {
	const r = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), i = It, o = Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), c = It, l = Rt(_, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), a = It, s = St(t, Ft.__wbindgen_malloc), w = It, g = Ft.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw Ct(g[2]);
	let u;
	return 0 !== g[0] && (u = it(g[0], g[1]).slice(), Ft.__wbindgen_free(g[0], 4 * g[1], 4)), u;
}
function Un(n, e) {
	return Ft.ggirSptDurationHours(n, e);
}
function On(n, e) {
	const _ = Ft.ggirSummaryDenominator(n, e);
	if (_[2]) throw Ct(_[1]);
	return Ct(_[0]);
}
function Tn(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = kt(e, Ft.__wbindgen_malloc), i = It, o = Ft.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function Nn(n) {
	let e, _;
	try {
		const i = vt(n, Ft.__wbindgen_malloc), o = It, c = Ft.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Ct(c[2]);
		return e = t, _ = r, ut(t, r);
	} finally {
		Ft.__wbindgen_free(e, _, 1);
	}
}
function Gn(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = kt(e, Ft.__wbindgen_malloc), c = It, l = kt(_, Ft.__wbindgen_malloc), a = It, s = kt(t, Ft.__wbindgen_malloc), w = It, g = Ft.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw Ct(g[1]);
	return Ct(g[0]);
}
function Bn(n) {
	return Ft.initThreadPool(n);
}
function jn() {
	Ft.installPanicHook();
}
function En(n) {
	const e = St(n, Ft.__wbindgen_malloc), _ = It, t = Ft.interRaterReliability(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function Ln(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = Ft.irregularInternalDays(_, t, e);
	var i = it(r[0], r[1]).slice();
	return Ft.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function Vn(n) {
	const e = vt(n, Ft.__wbindgen_malloc), _ = It;
	return 0 !== Ft.isGeneactivFormat(e, _);
}
function Hn() {
	return Ft.linearMemoryBytesV1();
}
function Xn(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = kt(e, Ft.__wbindgen_malloc), c = It, l = kt(_, Ft.__wbindgen_malloc), a = It, s = Ft.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw Ct(s[1]);
	return Ct(s[0]);
}
function qn(n, e, _) {
	const t = kt(n, Ft.__wbindgen_malloc), r = It, i = Ft.markerIndexRange(t, r, e, _);
	var o = ot(i[0], i[1]).slice();
	return Ft.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Jn(n, e, _, t, r, i, o) {
	const c = kt(n, Ft.__wbindgen_malloc), l = It, a = kt(e, Ft.__wbindgen_malloc), s = It, w = Ft.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw Ct(w[1]);
	return Ct(w[0]);
}
function Zn(n) {
	const e = kt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function $n(n, e, _, t) {
	const r = Ft.metricWarnings(n, e, _, t);
	var i = ct(r[0], r[1]).slice();
	return Ft.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Yn(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = kt(e, Ft.__wbindgen_malloc), i = It, o = Ft.midSleepClockHours(_, t, r, i);
	var c = rt(o[0], o[1]).slice();
	return Ft.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function Kn(n, e, _, t, r) {
	const i = kt(n, Ft.__wbindgen_malloc), o = It, c = kt(e, Ft.__wbindgen_malloc), l = It, a = kt(_, Ft.__wbindgen_malloc), s = It, w = Ft.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw Ct(w[1]);
	return Ct(w[0]);
}
function Qn(n) {
	const e = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), _ = It, t = Ft.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = ut(t[0], t[1]).slice(), Ft.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function ne(n, e, _, t, r) {
	const i = kt(_, Ft.__wbindgen_malloc), o = It, c = kt(t, Ft.__wbindgen_malloc), l = It, a = kt(r, Ft.__wbindgen_malloc), s = It, w = Ft.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw Ct(w[1]);
	return Ct(w[0]);
}
function ee(n, e, _, t) {
	let r, i;
	try {
		const l = yt(n, Ft.__wbindgen_malloc), a = It, s = Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), w = It, g = Ft.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, Ct(g[2]);
		return r = o, i = c, ut(o, c);
	} finally {
		Ft.__wbindgen_free(r, i, 1);
	}
}
function _e(n) {
	const e = kt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.nonwearInSleepCounts(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function te(n) {
	const e = Ft.nonwearSleepOverlap(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function re(n, e, _) {
	const t = kt(n, Ft.__wbindgen_malloc), r = It, i = kt(e, Ft.__wbindgen_malloc), o = It, c = Ft.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw Ct(c[1]);
	return Ct(c[0]);
}
function ie(n, e, _, t, r, i) {
	const o = Rt(r, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), c = It, l = Ft.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw Ct(l[2]);
	var a = rt(l[0], l[1]).slice();
	return Ft.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function oe(n, e) {
	const _ = vt(n, Ft.__wbindgen_malloc), t = It, r = Ft.parseActigraphCsv(_, t, e);
	if (r[2]) throw Ct(r[1]);
	return Ct(r[0]);
}
function ce(n) {
	const e = Ft.parseActigraphCsvBuffered(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function le(n, e, _, t) {
	const r = vt(n, Ft.__wbindgen_malloc), i = It;
	var o = pt(e) ? 0 : Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), c = It, l = pt(_) ? 0 : St(_, Ft.__wbindgen_malloc), a = It, s = pt(t) ? 0 : Rt(t, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), w = It;
	const g = Ft.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw Ct(g[1]);
	return Ct(g[0]);
}
function ae(n) {
	const e = vt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.parseCwa(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function se(n, e) {
	const _ = vt(n, Ft.__wbindgen_malloc), t = It, r = Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), i = It, o = Ft.parseEpochSeries(_, t, r, i);
	if (o[2]) throw Ct(o[1]);
	return Ct(o[0]);
}
function we(n) {
	const e = vt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.parseGeneactivBin(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function ge(n) {
	const e = vt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.parseGeneactivCsv(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function ue() {
	const n = Ft.parseGeneactivCsvBuffered();
	if (n[2]) throw Ct(n[1]);
	return Ct(n[0]);
}
function be(n) {
	const e = vt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.parseGt3x(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function de(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = vt(e, Ft.__wbindgen_malloc), c = It, l = vt(_, Ft.__wbindgen_malloc), a = It, s = Ft.participantValidity(r, i, o, c, l, a, pt(t) ? 0 : et(t));
	if (s[2]) throw Ct(s[1]);
	return Ct(s[0]);
}
function fe(n, e, _, t, r) {
	const i = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It, c = kt(e, Ft.__wbindgen_malloc), l = It;
	var a = pt(_) ? 0 : kt(_, Ft.__wbindgen_malloc), s = It;
	const w = Ft.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw Ct(w[1]);
	return Ct(w[0]);
}
function me(n) {
	let e, _;
	try {
		const i = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It, c = Ft.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Ct(c[2]);
		return e = t, _ = r, ut(t, r);
	} finally {
		Ft.__wbindgen_free(e, _, 1);
	}
}
function he(n, e, _, t, r, i) {
	const o = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), c = It, l = kt(e, Ft.__wbindgen_malloc), a = It, s = kt(_, Ft.__wbindgen_malloc), w = It, g = vt(t, Ft.__wbindgen_malloc), u = It, b = vt(r, Ft.__wbindgen_malloc), d = It, f = Rt(i, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), m = It, h = Ft.placeMarkersBatch(o, c, l, a, s, w, g, u, b, d, f, m);
	if (h[2]) throw Ct(h[1]);
	return Ct(h[0]);
}
function pe(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h, p) {
	const y = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), v = It, k = kt(e, Ft.__wbindgen_malloc), S = It, R = yt(_, Ft.__wbindgen_malloc), C = It, A = kt(t, Ft.__wbindgen_malloc), D = It, x = yt(r, Ft.__wbindgen_malloc), M = It, P = vt(i, Ft.__wbindgen_malloc), F = It, I = yt(o, Ft.__wbindgen_malloc), W = It, z = vt(c, Ft.__wbindgen_malloc), U = It, O = yt(l, Ft.__wbindgen_malloc), T = It, N = kt(a, Ft.__wbindgen_malloc), G = It, B = yt(s, Ft.__wbindgen_malloc), j = It, E = kt(w, Ft.__wbindgen_malloc), L = It, V = yt(g, Ft.__wbindgen_malloc), H = It, X = kt(u, Ft.__wbindgen_malloc), q = It, J = yt(b, Ft.__wbindgen_malloc), Z = It, $ = kt(d, Ft.__wbindgen_malloc), Y = It, K = yt(f, Ft.__wbindgen_malloc), Q = It, nn = vt(m, Ft.__wbindgen_malloc), en = It, _n = yt(h, Ft.__wbindgen_malloc), tn = It;
	var rn = pt(p) ? 0 : Rt(p, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), on = It;
	const cn = Ft.placeMarkersTyped(y, v, k, S, R, C, A, D, x, M, P, F, I, W, z, U, O, T, N, G, B, j, E, L, V, H, X, q, J, Z, $, Y, K, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw Ct(cn[1]);
	return Ct(cn[0]);
}
function ye(n) {
	let e, _;
	try {
		const i = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It, c = Ft.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Ct(c[2]);
		return e = t, _ = r, ut(t, r);
	} finally {
		Ft.__wbindgen_free(e, _, 1);
	}
}
function ve(n, e, _, t) {
	const r = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), i = It, o = kt(e, Ft.__wbindgen_malloc), c = It, l = kt(_, Ft.__wbindgen_malloc), a = It, s = vt(t, Ft.__wbindgen_malloc), w = It, g = Ft.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw Ct(g[1]);
	return Ct(g[0]);
}
function ke(n) {
	const e = Ft.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function Se(n) {
	const e = Ft.prepareCompactPipelineV1(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function Re(n, e, _, t, r, i, o, c) {
	const l = kt(n, Ft.__wbindgen_malloc), a = It, s = kt(e, Ft.__wbindgen_malloc), w = It, g = kt(_, Ft.__wbindgen_malloc), u = It, b = kt(t, Ft.__wbindgen_malloc), d = It;
	var f = pt(o) ? 0 : Rt(o, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), m = It, h = pt(c) ? 0 : Rt(c, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), p = It;
	const y = Ft.processGeneactivRaw(l, a, s, w, g, u, b, d, r, i, f, m, h, p);
	if (y[2]) throw Ct(y[1]);
	return Ct(y[0]);
}
function Ce(n, e) {
	const _ = vt(n, Ft.__wbindgen_malloc), t = It;
	var r = pt(e) ? 0 : Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), i = It;
	const o = Ft.processGt3xPart1(_, t, r, i);
	if (o[2]) throw Ct(o[1]);
	return Ct(o[0]);
}
function Ae(n, e, _) {
	const t = vt(n, Ft.__wbindgen_malloc), r = It;
	var i = pt(_) ? 0 : Rt(_, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It;
	const c = Ft.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw Ct(c[1]);
	return Ct(c[0]);
}
function De(n, e, _, t, r, i, o) {
	const c = kt(n, Ft.__wbindgen_malloc), l = It, a = kt(e, Ft.__wbindgen_malloc), s = It, w = kt(_, Ft.__wbindgen_malloc), g = It;
	var u = pt(i) ? 0 : Rt(i, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), b = It, d = pt(o) ? 0 : Rt(o, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), f = It;
	const m = Ft.processRawXyz(c, l, a, s, w, g, t, r, u, b, d, f);
	if (m[2]) throw Ct(m[1]);
	return Ct(m[0]);
}
function xe(n, e, _, t, r, i, o, c) {
	const l = kt(n, Ft.__wbindgen_malloc), a = It, s = kt(e, Ft.__wbindgen_malloc), w = It, g = kt(_, Ft.__wbindgen_malloc), u = It, b = kt(t, Ft.__wbindgen_malloc), d = It;
	var f = pt(i) ? 0 : Rt(i, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), m = It, h = pt(o) ? 0 : Rt(o, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), p = It, y = pt(c) ? 0 : kt(c, Ft.__wbindgen_malloc), v = It;
	const k = Ft.processRawXyzImputed(l, a, s, w, g, u, b, d, r, f, m, h, p, y, v);
	if (k[2]) throw Ct(k[1]);
	return Ct(k[0]);
}
function Me(n, e, _, t, r, i, o, c, l, a) {
	const s = kt(n, Ft.__wbindgen_malloc), w = It, g = kt(e, Ft.__wbindgen_malloc), u = It, b = kt(_, Ft.__wbindgen_malloc), d = It, f = kt(t, Ft.__wbindgen_malloc), m = It;
	var h = pt(i) ? 0 : Rt(i, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), p = It, y = pt(c) ? 0 : Rt(c, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), v = It, k = pt(a) ? 0 : kt(a, Ft.__wbindgen_malloc), S = It;
	const R = Ft.processRawXyzImputedWithEpoch(s, w, g, u, b, d, f, m, r, h, p, o, y, v, pt(l) ? 16777215 : l ? 1 : 0, k, S);
	if (R[2]) throw Ct(R[1]);
	return Ct(R[0]);
}
function Pe(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = vt(e, Ft.__wbindgen_malloc), c = It, l = kt(t, Ft.__wbindgen_malloc), a = It, s = Ft.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = ct(s[0], s[1]).slice();
	return Ft.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function Fe(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = kt(e, Ft.__wbindgen_malloc), c = It, l = kt(_, Ft.__wbindgen_malloc), a = It, s = Ft.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw Ct(s[1]);
	return Ct(s[0]);
}
function Ie(n, e, _) {
	const t = vt(n, Ft.__wbindgen_malloc), r = It;
	var i = pt(e) ? 0 : Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It;
	const c = Ft.readGgirMeta(t, r, i, o, pt(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw Ct(c[1]);
	return Ct(c[0]);
}
function We(n, e) {
	const _ = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), t = It;
	var r = pt(e) ? 0 : Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), i = It;
	const o = Ft.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw Ct(o[1]);
	return Ct(o[0]);
}
function ze() {
	return Ft.recommended_chunk_size_mb() >>> 0;
}
function Ue(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), i = It, o = Ft.reduceF64V1(_, t, r, i);
	if (o[2]) throw Ct(o[1]);
	return o[0];
}
function Oe(n, e) {
	const _ = St(e, Ft.__wbindgen_malloc), t = It, r = Ft.rerunGgirResults(n, _, t);
	if (r[2]) throw Ct(r[1]);
	return Ct(r[0]);
}
function Te(n) {
	const e = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), _ = It, t = Ft.resolveTimezone(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function Ne(n, e, _) {
	const t = kt(n, Ft.__wbindgen_malloc), r = It, i = kt(e, Ft.__wbindgen_malloc), o = It, c = yt(_, Ft.__wbindgen_malloc), l = It, a = Ft.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw Ct(a[2]);
	var s = it(a[0], a[1]).slice();
	return Ft.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function Ge(n, e, _, t, r, i, o, c, l, a, s, w, g, u) {
	const b = vt(n, Ft.__wbindgen_malloc), d = It, f = Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), m = It;
	var h = pt(_) ? 0 : vt(_, Ft.__wbindgen_malloc), p = It, y = pt(t) ? 0 : vt(t, Ft.__wbindgen_malloc), v = It, k = pt(r) ? 0 : vt(r, Ft.__wbindgen_malloc), S = It, R = pt(i) ? 0 : vt(i, Ft.__wbindgen_malloc), C = It, A = pt(o) ? 0 : vt(o, Ft.__wbindgen_malloc), D = It, x = pt(c) ? 0 : Rt(c, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), M = It, P = pt(l) ? 0 : Rt(l, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), F = It, I = pt(a) ? 0 : St(a, Ft.__wbindgen_malloc), W = It, z = pt(w) ? 0 : Rt(w, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), U = It, O = pt(g) ? 0 : Rt(g, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), T = It;
	const N = Ft.reviewGgirResults(b, d, f, m, h, p, y, v, k, S, R, C, A, D, x, M, P, F, I, W, s, z, U, O, T, pt(u) ? 4294967297 : u >>> 0);
	if (N[2]) throw Ct(N[1]);
	return Ct(N[0]);
}
function Be(n) {
	const e = St(n, Ft.__wbindgen_malloc), _ = It, t = Ft.reviewNonwearFile(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function je(n) {
	const e = St(n, Ft.__wbindgen_malloc), _ = It, t = Ft.reviewNonwearTotals(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function Ee(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = Ft.roundCountStorage(_, t, e);
	var i = rt(r[0], r[1]).slice();
	return Ft.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Le(n) {
	const e = Ft.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function Ve(n) {
	const e = Ft.runCompactPipelineV1(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function He(n) {
	const e = Ft.runFullPipelineOutcomeV1(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function Xe(n) {
	const e = Ft.runFullPipelineV1(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function qe(n) {
	const e = Ft.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function Je(n) {
	const e = Ft.runGgirPart3(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function Ze(n, e) {
	const _ = vt(n, Ft.__wbindgen_malloc), t = It;
	var r = pt(e) ? 0 : Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), i = It;
	const o = Ft.runMilestone(_, t, r, i);
	if (o[2]) throw Ct(o[1]);
	return Ct(o[0]);
}
function $e(n) {
	const e = St(n, Ft.__wbindgen_malloc), _ = It, t = Ft.scoreAllDays(e, _);
	if (t[3]) throw Ct(t[2]);
	var r = it(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Ye(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = Ft.scoreColeKripke(_, t, e);
	var i = ct(r[0], r[1]).slice();
	return Ft.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Ke(n) {
	let e, _;
	try {
		const i = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It, c = Ft.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Ct(c[2]);
		return e = t, _ = r, ut(t, r);
	} finally {
		Ft.__wbindgen_free(e, _, 1);
	}
}
function Qe(n) {
	const e = Ft.scoreConsensusMajority(n);
	if (e[3]) throw Ct(e[2]);
	var _ = ct(e[0], e[1]).slice();
	return Ft.__wbindgen_free(e[0], 1 * e[1], 1), _;
}
function n_(n, e, _) {
	const t = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), r = It, i = vt(e, Ft.__wbindgen_malloc), o = It, c = yt(_, Ft.__wbindgen_malloc), l = It, a = Ft.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw Ct(a[1]);
	return Ct(a[0]);
}
function e_(n) {
	let e, _;
	try {
		const i = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It, c = Ft.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Ct(c[2]);
		return e = t, _ = r, ut(t, r);
	} finally {
		Ft.__wbindgen_free(e, _, 1);
	}
}
function __(n, e, _, t, r, i) {
	const o = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), c = It, l = kt(e, Ft.__wbindgen_malloc), a = It, s = kt(_, Ft.__wbindgen_malloc), w = It, g = kt(t, Ft.__wbindgen_malloc), u = It, b = Ft.scoreEpochsTyped(o, c, l, a, s, w, g, u, r, i);
	if (b[2]) throw Ct(b[1]);
	return Ct(b[0]);
}
function t_(n, e, _) {
	const t = kt(n, Ft.__wbindgen_malloc), r = It;
	var i = pt(e) ? 0 : Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It, c = pt(_) ? 0 : kt(_, Ft.__wbindgen_malloc), l = It;
	const a = Ft.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw Ct(a[2]);
	var s = ct(a[0], a[1]).slice();
	return Ft.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function r_(n) {
	const e = Ft.scoreGgirHasibVariant(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function i_(n, e, _, t, r) {
	const i = kt(n, Ft.__wbindgen_malloc), o = It, c = kt(e, Ft.__wbindgen_malloc), l = It;
	var a = pt(t) ? 0 : Rt(t, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), s = It, w = pt(r) ? 0 : kt(r, Ft.__wbindgen_malloc), g = It;
	const u = Ft.scoreGgirSib(i, o, c, l, _, a, s, w, g);
	if (u[2]) throw Ct(u[1]);
	return Ct(u[0]);
}
function o_(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = Ft.scoreSadeh(_, t, e);
	var i = ct(r[0], r[1]).slice();
	return Ft.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function c_(n) {
	const e = St(n, Ft.__wbindgen_malloc), _ = It, t = Ft.settleManualNonwearNights(e, _);
	if (t[3]) throw Ct(t[2]);
	var r = it(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function l_(n) {
	const e = vt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.sha256StreamFeed(e, _);
	if (t[1]) throw Ct(t[0]);
}
function a_() {
	let n, e;
	try {
		const r = Ft.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, Ct(r[2]);
		return n = _, e = t, ut(_, t);
	} finally {
		Ft.__wbindgen_free(n, e, 1);
	}
}
function s_() {
	Ft.sha256StreamStart();
}
function w_(n, e) {
	const _ = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), t = It, r = Ft.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = ut(r[0], r[1]).slice(), Ft.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function g_(n, e, _, t, r) {
	const i = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It, c = kt(e, Ft.__wbindgen_malloc), l = It, a = yt(_, Ft.__wbindgen_malloc), s = It, w = kt(t, Ft.__wbindgen_malloc), g = It, u = yt(r, Ft.__wbindgen_malloc), b = It, d = Ft.sleepRegularityIndex(i, o, c, l, a, s, w, g, u, b);
	if (d[3]) throw Ct(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function u_(n, e) {
	const _ = Ft.sleepWakeScores(n, pt(e) ? 0 : et(e));
	if (_[2]) throw Ct(_[1]);
	return Ct(_[0]);
}
function b_(n) {
	const e = St(n, Ft.__wbindgen_malloc), _ = It, t = Ft.sourceLabelsWallClockMs(e, _);
	var r = rt(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function d_(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = kt(e, Ft.__wbindgen_malloc), c = It, l = Ft.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function f_(n, e, _) {
	const t = kt(n, Ft.__wbindgen_malloc), r = It, i = St(e, Ft.__wbindgen_malloc), o = It, c = kt(_, Ft.__wbindgen_malloc), l = It, a = Ft.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw Ct(a[2]);
	let s;
	return 0 !== a[0] && (s = rt(a[0], a[1]).slice(), Ft.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function m_(n) {
	return Ft.startThreadPool(n);
}
function h_(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = vt(e, Ft.__wbindgen_malloc), c = It, l = kt(_, Ft.__wbindgen_malloc), a = It, s = kt(t, Ft.__wbindgen_malloc), w = It, g = Ft.statesInPeriods(r, i, o, c, l, a, s, w);
	var u = ct(g[0], g[1]).slice();
	return Ft.__wbindgen_free(g[0], 1 * g[1], 1), u;
}
function p_(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = St(e, Ft.__wbindgen_malloc), i = It, o = Ft.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw Ct(o[2]);
	var c = rt(o[0], o[1]).slice();
	return Ft.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function y_(n) {
	const e = vt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.streamParseFeed(e, _);
	if (t[2]) throw Ct(t[1]);
	return t[0] >>> 0;
}
function v_() {
	const n = Ft.streamParseFinish();
	if (n[2]) throw Ct(n[1]);
	return t.__wrap(n[0]);
}
function k_() {
	const n = Ft.streamParseFinishChunk();
	if (n[2]) throw Ct(n[1]);
	return _.__wrap(n[0]);
}
function S_(n) {
	const e = Ft.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw Ct(e[1]);
	return _.__wrap(e[0]);
}
function R_(n, e, _) {
	var t = pt(_) ? 0 : Rt(_, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), r = It;
	const i = Ft.streamParseStart(n, e, t, r);
	if (i[1]) throw Ct(i[0]);
}
function C_(n, e) {
	const _ = Ft.streamParseStartData(n, e);
	if (_[1]) throw Ct(_[0]);
}
function A_(n, e, _, t, r) {
	var i = pt(t) ? 0 : Rt(t, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), o = It;
	const c = Ft.streamParseStartWithEpoch(n, e, _, i, o, !pt(r), pt(r) ? 0 : r);
	if (c[1]) throw Ct(c[0]);
}
function D_(n, e) {
	const _ = vt(n, Ft.__wbindgen_malloc), t = It, r = Ft.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw Ct(r[1]);
	return Ct(r[0]);
}
function x_(n) {
	const e = Ft.summarizeExportGroups(n);
	if (e[3]) throw Ct(e[2]);
	var _ = it(e[0], e[1]).slice();
	return Ft.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function M_(n) {
	const e = Ft.summarizePhysicalActivityDays(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function P_(n) {
	const e = Ft.summarizePhysicalActivityTrace(n);
	if (e[2]) throw Ct(e[1]);
	return Ct(e[0]);
}
function F_() {
	return 0 !== Ft.threadPoolReady();
}
function I_(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = Ft.thresholdProbabilities(_, t, e);
	var i = ct(r[0], r[1]).slice();
	return Ft.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function W_(n) {
	const e = St(n, Ft.__wbindgen_malloc), _ = It, t = Ft.timeSemantics(e, _);
	if (t[3]) throw Ct(t[2]);
	var r = it(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function z_(n, e, _) {
	const t = kt(n, Ft.__wbindgen_malloc), r = It, i = Ft.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw Ct(i[2]);
	var o = it(i[0], i[1]).slice();
	return Ft.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function U_(n, e, _) {
	const t = Ft.uniformTimestamps(n, e, _);
	var r = rt(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function O_(n, e) {
	const _ = Ft.utcDatesInSpan(n, e);
	var t = it(_[0], _[1]).slice();
	return Ft.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function T_(n) {
	const e = kt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.utcDayIndex(e, _);
	if (t[2]) throw Ct(t[1]);
	return Ct(t[0]);
}
function N_(n) {
	const e = vt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function G_(n, e) {
	const _ = kt(n, Ft.__wbindgen_malloc), t = It, r = Ft.validWearDays(_, t, pt(e) ? 0 : et(e));
	if (r[3]) throw Ct(r[2]);
	var i = ct(r[0], r[1]).slice();
	return Ft.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function B_(n, e, _) {
	const t = kt(n, Ft.__wbindgen_malloc), r = It, i = Ft.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw Ct(i[1]);
	return Ct(i[0]);
}
function j_(n) {
	const e = kt(n, Ft.__wbindgen_malloc), _ = It, t = Ft.wallClockLabels(e, _);
	var r = it(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function E_(n, e, _) {
	const t = vt(n, Ft.__wbindgen_malloc), r = It, i = St(_, Ft.__wbindgen_malloc), o = It, c = Ft.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw Ct(c[2]);
	var l = ct(c[0], c[1]).slice();
	return Ft.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var L_ = class n {
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
		Ft.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		Ft.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return Ft.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return Ft.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return Ft.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function V_(n) {
	Ft.wbg_rayon_start_worker(n);
}
function H_(n, e) {
	const _ = Rt(n, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), t = It;
	var r = pt(e) ? 0 : Rt(e, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), i = It;
	const o = Ft.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw Ct(o[1]);
	return Ct(o[0]);
}
function X_(n) {
	const e = St(n, Ft.__wbindgen_malloc), _ = It, t = Ft.weekendDates(e, _);
	var r = ct(t[0], t[1]).slice();
	return Ft.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function q_(n, e, _, t) {
	const r = kt(n, Ft.__wbindgen_malloc), i = It, o = Ft.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function J_(n, e, _, t, r) {
	const i = kt(n, Ft.__wbindgen_malloc), o = It, c = kt(e, Ft.__wbindgen_malloc), l = It, a = kt(_, Ft.__wbindgen_malloc), s = It, w = Ft.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw Ct(w[1]);
	return Ct(w[0]);
}
function Z_(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(ut(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = Rt(String(e), Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), t = It;
				at().setInt32(n + 4, t, !0), at().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				at().setBigInt64(n + 8, pt(_) ? BigInt(0) : _, !0), at().setInt32(n + 0, !pt(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return pt(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = Rt(tt(e), Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), t = It;
				at().setInt32(n + 4, t, !0), at().setInt32(n + 0, _, !0);
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
				return Ft.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return Pt;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const _ = "number" == typeof e ? e : void 0;
				at().setFloat64(n + 8, pt(_) ? 0 : _, !0), at().setInt32(n + 0, !pt(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = pt(_) ? 0 : Rt(_, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), r = It;
				at().setInt32(n + 4, r, !0), at().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(ut(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return ht(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return ht(function(n, e, _, t) {
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
					_ = n, t = e, console.error(ut(n, e));
				} finally {
					Ft.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return ht(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return ht(function(n, e) {
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
				return new Uint32Array(ot(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(rt(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== st && st.buffer === Ft.memory.buffer || (st = new Float32Array(Ft.memory.buffer)), st).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return ht(function(n) {
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
				return ht(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(ct(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return ht(function(n, e, _) {
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
				const _ = Rt(e.stack, Ft.__wbindgen_malloc, Ft.__wbindgen_realloc), t = It;
				at().setInt32(n + 4, t, !0), at().setInt32(n + 0, _, !0);
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
				}(e, _, L_.__wrap(t));
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const n = "undefined" == typeof global ? null : global;
				return pt(n) ? 0 : et(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return pt(n) ? 0 : et(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return pt(n) ? 0 : et(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return pt(n) ? 0 : et(n);
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
						0 === --t.cnt && (Ft.__wbindgen_destroy_closure(t.a, t.b), t.a = 0, _t.unregister(t));
					}, _t.register(r, t, t), r;
				}(n, e, $_);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return ct(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return ut(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Ft.__wbindgen_externrefs, e = n.grow(4);
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
function $_(n, e, _) {
	Ft.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, _);
}
Symbol.dispose && (L_.prototype[Symbol.dispose] = L_.prototype.free);
const Y_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ft.__wbg_aw5batch_free(n >>> 0, 1)), K_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ft.__wbg_streamchunkresult_free(n >>> 0, 1)), Q_ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ft.__wbg_streamparseresult_free(n >>> 0, 1)), nt = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ft.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function et(n) {
	const e = Ft.__externref_table_alloc();
	return Ft.__wbindgen_externrefs.set(e, n), e;
}
const _t = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ft.__wbindgen_destroy_closure(n.a, n.b));
function tt(n) {
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
		e > 0 && (_ += tt(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + tt(n[t]);
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
function rt(n, e) {
	return n >>>= 0, gt().subarray(n / 8, n / 8 + e);
}
function it(n, e) {
	n >>>= 0;
	const _ = at(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(Ft.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return Ft.__externref_drop_slice(n, e), t;
}
function ot(n, e) {
	return n >>>= 0, dt().subarray(n / 4, n / 4 + e);
}
function ct(n, e) {
	return n >>>= 0, mt().subarray(n / 1, n / 1 + e);
}
let lt = null;
function at() {
	return null !== lt && lt.buffer === Ft.memory.buffer || (lt = new DataView(Ft.memory.buffer)), lt;
}
let st = null, wt = null;
function gt() {
	return null !== wt && wt.buffer === Ft.memory.buffer || (wt = new Float64Array(Ft.memory.buffer)), wt;
}
function ut(n, e) {
	return function(n, e) {
		return xt += e, xt >= Dt && (At = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), At.decode(), xt = e), At.decode(mt().slice(n, n + e));
	}(n >>>= 0, e);
}
let bt = null;
function dt() {
	return null !== bt && bt.buffer === Ft.memory.buffer || (bt = new Uint32Array(Ft.memory.buffer)), bt;
}
let ft = null;
function mt() {
	return null !== ft && ft.buffer === Ft.memory.buffer || (ft = new Uint8Array(Ft.memory.buffer)), ft;
}
function ht(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = et(_);
		Ft.__wbindgen_exn_store(n);
	}
}
function pt(n) {
	return null == n;
}
function yt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return dt().set(n, _ / 4), It = n.length, _;
}
function vt(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return mt().set(n, _ / 1), It = n.length, _;
}
function kt(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return gt().set(n, _ / 8), It = n.length, _;
}
function St(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = et(n[t]);
		at().setUint32(_ + 4 * t, e, !0);
	}
	return It = n.length, _;
}
function Rt(n, e, _) {
	if (void 0 === _) {
		const _ = Mt.encode(n), t = e(_.length, 1) >>> 0;
		return mt().subarray(t, t + _.length).set(_), It = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = mt();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = mt().subarray(r + o, r + t);
		o += Mt.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return It = o, r;
}
function Ct(n) {
	const e = Ft.__wbindgen_externrefs.get(n);
	return Ft.__externref_table_dealloc(n), e;
}
let At = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
At && At.decode();
const Dt = 2146435072;
let xt = 0;
const Mt = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
Mt && (Mt.encodeInto = function(n, e) {
	const _ = Mt.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let Pt, Ft, It = 0;
function Wt(n, e, _) {
	if (Ft = n.exports, Pt = e, lt = null, st = null, wt = null, bt = null, ft = null, void 0 !== _ && ("number" != typeof _ || 0 === _ || _ % 65536 != 0)) throw new Error("invalid stack size");
	return Ft.__wbindgen_start(_), Ft;
}
function zt(n, e) {
	if (void 0 !== Ft) return Ft;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const t = Z_(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Wt(new WebAssembly.Instance(n, t), n, _);
}
async function Ut(n, e) {
	if (void 0 !== Ft) return Ft;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-Dg5sfM2a.wasm", "" + import.meta.url));
	const t = Z_(e);
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
	return Wt(r, i, _);
}
export { e as Aw5Batch, _ as StreamChunkResult, t as StreamParseResult, r as actiwareIntervalStatistics, i as actiwareSleepIntervals, o as actiwareWakeThreshold, c as actoursVersion, l as aggregateEpochSeries, a as analysisDatesOf, s as analysisWindowBounds, w as analysisWindowSlice, g as analyzePhysicalActivityDay, u as classifyActimetricPreschoolWristRf, b as classifyActimetricPreschoolWristRfLagLead, d as classifyActimetricPreschoolWristRfLagLeadCalibrated, f as clippedUnionHours, m as compareNonwearDetectorMasks, h as computeAnglez5s, p as computeCircadian, y as computeCircadianTyped, v as computeEnmo5s, k as computeMimsUnit, S as computeMimsUnitDataframe, R as computeMimsUnitTimingBreakdown, C as computeMimsUnitValues, A as computeNightDifficulty, D as computeNightDifficultyTyped, x as computeNightSignals, M as computeNightSignalsTyped, P as computeSleepMetrics, F as configureComputeMemoryBudgetV1, I as consensusDisagreementDetail, W as consensusDisagreements, z as convertBedWakeDaysDiary, U as convertScreensRedcapDiary, O as csvBufferAppend, T as csvBufferClear, N as cutpointEpochCompatibility, G as cutpointToneCodes, B as cutpointsRefusal, j as cutpointsValid, Ut as default, E as describeColumns, L as detectDetachFromAccelerationG, V as detectDeviceFormat, H as detectGgirHasptVariant, X as detectHdcza, q as detectHourClockJumpMs, J as detectNonwear, Z as detectNonwearChoi2011, $ as detectNonwearChoi2011Bouts, Y as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, Q as detectNonwearChoi2012Bouts, nn as detectNonwearChoi2012Epoch, en as detectNonwearChoiBouts, _n as detectNonwearUnified, tn as detectNonwearUnifiedBatchTyped, rn as dstPlaceholderRuns, on as effectiveOverrideCutpoints, cn as epochAgreement, ln as epochRawData, an as epochWithBandpass, sn as epochsOverlapping, wn as executeHeroRuntime, gn as exportNapAggregate, un as exportPeriodFigures, bn as extractCapsense, dn as foldOntoGrid, fn as foldSampleBlocks, mn as foldSleepWakeVotes, hn as foldUniformOntoGrid, pn as fuseNonwearMasks, yn as generateActiwareRestIntervals, vn as getComputeCapabilitiesV1, kn as ggir5sWallClockMs, Sn as ggirAppConfigSummary, Rn as ggirConfigValues, Cn as ggirDaysIncluded, An as ggirDiaryLogShape, Dn as ggirDstPlaceholderCuts, xn as ggirIncludeDayCriterionHours, Mn as ggirIndicesToWallClockMs, Pn as ggirLabelsToStoredMs, Fn as ggirManualNightClocks, In as ggirMilestoneVersion, Wn as ggirRerunProfiles, zn as ggirSleeplogStoredClocks, Un as ggirSptDurationHours, On as ggirSummaryDenominator, Tn as gridOffsetWithin, Nn as identifyGgirRData, Gn as implausibilityReasons, zt as initSync, Bn as initThreadPool, jn as installPanicHook, En as interRaterReliability, Ln as irregularInternalDays, Vn as isGeneactivFormat, Hn as linearMemoryBytesV1, Xn as lstmSpectralFeatures30s, qn as markerIndexRange, Jn as markerSleepOnsetOffset, Zn as medianGapSeconds, $n as metricWarnings, Yn as midSleepClockHours, Kn as neishabouriCounts, Qn as nextDate, ne as nightIntervalOverlap, ee as nonwearContributors, _e as nonwearInSleepCounts, te as nonwearSleepOverlap, re as nonwearWeightRuns, ie as normalizeCutpoints, oe as parseActigraphCsv, ce as parseActigraphCsvBuffered, le as parseAw5, ae as parseCwa, se as parseEpochSeries, we as parseGeneactivBin, ge as parseGeneactivCsv, ue as parseGeneactivCsvBuffered, be as parseGt3x, de as participantValidity, fe as physicalActivitySeriesGrid, me as placeMarkers, he as placeMarkersBatch, pe as placeMarkersTyped, ye as placeNonwearMarkers, ve as placeNonwearMarkersTyped, ke as prepareCompactPipelineOutcomeV1, Se as prepareCompactPipelineV1, Re as processGeneactivRaw, Ce as processGt3xPart1, Ae as processGt3xPart1WithEpoch, De as processRawXyz, xe as processRawXyzImputed, Me as processRawXyzImputedWithEpoch, Pe as projectLabelsOntoGrid, Fe as rasterizePeriods, Ie as readGgirMeta, We as readGgirReportCsv, ze as recommended_chunk_size_mb, Ue as reduceF64V1, Oe as rerunGgirResults, Te as resolveTimezone, Ne as restoredDstRuns, Ge as reviewGgirResults, Be as reviewNonwearFile, je as reviewNonwearTotals, Ee as roundCountStorage, Le as runCompactPipelineOutcomeV1, Ve as runCompactPipelineV1, He as runFullPipelineOutcomeV1, Xe as runFullPipelineV1, qe as runGgirDeclaredEpochsV1, Je as runGgirPart3, Ze as runMilestone, $e as scoreAllDays, Ye as scoreColeKripke, Ke as scoreConsensus, Qe as scoreConsensusMajority, n_ as scoreConsensusTyped, e_ as scoreEpochs, __ as scoreEpochsTyped, t_ as scoreGgirHasib, r_ as scoreGgirHasibVariant, i_ as scoreGgirSib, o_ as scoreSadeh, c_ as settleManualNonwearNights, l_ as sha256StreamFeed, a_ as sha256StreamFinish, s_ as sha256StreamStart, w_ as shiftDate, g_ as sleepRegularityIndex, u_ as sleepWakeScores, b_ as sourceLabelsWallClockMs, d_ as spanFiniteMean, f_ as spliceDstPlaceholders, m_ as startThreadPool, h_ as statesInPeriods, p_ as storedToGgirLabelsMs, y_ as streamParseFeed, v_ as streamParseFinish, k_ as streamParseFinishChunk, S_ as streamParseFinishChunkWithProgress, R_ as streamParseStart, C_ as streamParseStartData, A_ as streamParseStartWithEpoch, D_ as summarizeActimetricPreschoolWristRfClasses, x_ as summarizeExportGroups, M_ as summarizePhysicalActivityDays, P_ as summarizePhysicalActivityTrace, F_ as threadPoolReady, I_ as thresholdProbabilities, W_ as timeSemantics, z_ as timestampDiscontinuities, U_ as uniformTimestamps, O_ as utcDatesInSpan, T_ as utcDayIndex, N_ as validStateFraction, G_ as validWearDays, B_ as wallClockDstPlaceholders, j_ as wallClockLabels, E_ as wallMaskOntoGgirGrid, L_ as wbg_rayon_PoolBuilder, V_ as wbg_rayon_start_worker, H_ as wearSiteHasptRouting, X_ as weekendDates, q_ as windowCoverage, J_ as zeroCrossingCounts };
