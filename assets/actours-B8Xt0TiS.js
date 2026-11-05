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
		return this.__wbg_ptr = 0, _t.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Ot.__wbg_aw5batch_free(n, 0);
	}
	constructor(n) {
		const e = xt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.aw5batch_new(e, _);
		if (t[2]) throw Pt(t[1]);
		return this.__wbg_ptr = t[0] >>> 0, _t.register(this, this.__wbg_ptr, this), this;
	}
	recording(n, e, _) {
		const t = Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), r = Nt;
		var i = Rt(_) ? 0 : Mt(_, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt;
		const c = Ot.aw5batch_recording(this.__wbg_ptr, n, t, r, i, o);
		if (c[2]) throw Pt(c[1]);
		return Pt(c[0]);
	}
	subjects(n) {
		const e = Ot.aw5batch_subjects(this.__wbg_ptr, n);
		if (e[3]) throw Pt(e[2]);
		var _ = st(e[0], e[1]).slice();
		return Ot.__wbindgen_free(e[0], 4 * e[1], 4), _;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var _ = class n {
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
		Ot.__wbg_streamchunkresult_free(n, 0);
	}
	get anglex5s() {
		const n = Ot.streamchunkresult_anglex5s(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get angley5s() {
		const n = Ot.streamchunkresult_angley5s(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get anglez5s() {
		const n = Ot.streamchunkresult_anglez5s(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisX() {
		const n = Ot.streamchunkresult_axisX(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ot.streamchunkresult_axisY(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ot.streamchunkresult_axisZ(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = Ot.streamchunkresult_calibration(this.__wbg_ptr);
		if (n[2]) throw Pt(n[1]);
		return Pt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== Ot.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ot.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ht(n[0], n[1]).slice(), Ot.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get counts() {
		const n = Ot.streamchunkresult_counts(this.__wbg_ptr);
		var e = wt(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get counts5s() {
		const n = Ot.streamchunkresult_counts5s(this.__wbg_ptr);
		var e = wt(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get enmo5s() {
		const n = Ot.streamchunkresult_enmo5s(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get enmoa5s() {
		const n = Ot.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get ggirInvalid5s() {
		const n = Ot.streamchunkresult_ggirInvalid5s(this.__wbg_ptr);
		var e = gt(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	get ggirNonwear5s() {
		const n = Ot.streamchunkresult_ggirNonwear5s(this.__wbg_ptr);
		var e = gt(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 1 * n[1], 1), e;
	}
	ggirZeroCrossings5s(n) {
		const e = Ot.streamchunkresult_ggirZeroCrossings5s(this.__wbg_ptr, n);
		var _ = at(e[0], e[1]).slice();
		return Ot.__wbindgen_free(e[0], 8 * e[1], 8), _;
	}
	get headerRowsSkipped() {
		return Ot.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const n = Ot.streamchunkresult_mad5s(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnit() {
		const n = Ot.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitAvailable() {
		return 0 !== Ot.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const n = Ot.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ht(n[0], n[1]).slice(), Ot.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get mimsUnitX() {
		const n = Ot.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitY() {
		const n = Ot.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get mimsUnitZ() {
		const n = Ot.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get rawRetentionDegraded() {
		return 0 !== Ot.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ot.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return Ot.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ot.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const n = Ot.streamchunkresult_tempCounts(this.__wbg_ptr);
		var e = wt(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 4 * n[1], 4), e;
	}
	get temperature() {
		const n = Ot.streamchunkresult_temperature(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ot.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs5s() {
		const n = Ot.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ot.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcx60s() {
		const n = Ot.streamchunkresult_zcx60s(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcy60s() {
		const n = Ot.streamchunkresult_zcy60s(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get zcz60s() {
		const n = Ot.streamchunkresult_zcz60s(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var t = class n {
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
		Ot.__wbg_streamparseresult_free(n, 0);
	}
	get axisX() {
		const n = Ot.streamparseresult_axisX(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisY() {
		const n = Ot.streamparseresult_axisY(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get axisZ() {
		const n = Ot.streamparseresult_axisZ(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get calibration() {
		const n = Ot.streamparseresult_calibration(this.__wbg_ptr);
		if (n[2]) throw Pt(n[1]);
		return Pt(n[0]);
	}
	get canonicalPassDegraded() {
		return 0 !== Ot.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const n = Ot.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let e;
		return 0 !== n[0] && (e = ht(n[0], n[1]).slice(), Ot.__wbindgen_free(n[0], 1 * n[1], 1)), e;
	}
	get headerRowsSkipped() {
		return Ot.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== Ot.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return Ot.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return Ot.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const n = Ot.streamparseresult_temperature(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get timestampsMs() {
		const n = Ot.streamparseresult_timestampsMs(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
	get vectorMagnitude() {
		const n = Ot.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var e = at(n[0], n[1]).slice();
		return Ot.__wbindgen_free(n[0], 8 * n[1], 8), e;
	}
};
function r(n) {
	const e = Ot.actiwareIntervalStatistics(n);
	if (e[3]) throw Pt(e[2]);
	var _ = st(e[0], e[1]).slice();
	return Ot.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function i(n, e, _) {
	const t = xt(e, Ot.__wbindgen_malloc), r = Nt, i = Ot.actiwareSleepIntervals(n, t, r, Rt(_) ? 0 : ot(_));
	if (i[3]) throw Pt(i[2]);
	var o = st(i[0], i[1]).slice();
	return Ot.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function o(n, e) {
	const _ = Ot.actiwareWakeThreshold(n, Rt(e) ? 0 : ot(e));
	if (_[3]) throw Pt(_[2]);
	return 0 === _[0] ? void 0 : _[1];
}
function c() {
	let n, e;
	try {
		const _ = Ot.actoursVersion();
		return n = _[0], e = _[1], ht(_[0], _[1]);
	} finally {
		Ot.__wbindgen_free(n, e, 1);
	}
}
function l(n) {
	const e = Ot.aggregateEpochSeries(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function a(n) {
	const e = Dt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.analysisDatesOf(e, _);
	var r = st(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function s(n, e) {
	const _ = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), t = Nt, r = Ot.analysisWindowBounds(_, t, !Rt(e), Rt(e) ? 0 : e);
	let i;
	return 0 !== r[0] && (i = at(r[0], r[1]).slice(), Ot.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function w(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), i = Nt, o = Ot.analysisWindowSlice(_, t, r, i);
	var c = wt(o[0], o[1]).slice();
	return Ot.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function g(n) {
	let e, _;
	try {
		const i = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt, c = Ot.analyzePhysicalActivityDay(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Pt(c[2]);
		return e = t, _ = r, ht(t, r);
	} finally {
		Ot.__wbindgen_free(e, _, 1);
	}
}
function u(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = Dt(e, Ot.__wbindgen_malloc), c = Nt, l = Dt(_, Ot.__wbindgen_malloc), a = Nt, s = Ot.classifyActimetricPreschoolWristRf(r, i, o, c, l, a, t);
	if (s[3]) throw Pt(s[2]);
	var w = gt(s[0], s[1]).slice();
	return Ot.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function b(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = Dt(e, Ot.__wbindgen_malloc), c = Nt, l = Dt(_, Ot.__wbindgen_malloc), a = Nt, s = Ot.classifyActimetricPreschoolWristRfLagLead(r, i, o, c, l, a, t);
	if (s[3]) throw Pt(s[2]);
	var w = gt(s[0], s[1]).slice();
	return Ot.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function d(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = Dt(e, Ot.__wbindgen_malloc), c = Nt, l = Dt(_, Ot.__wbindgen_malloc), a = Nt, s = Ot.classifyActimetricPreschoolWristRfLagLeadCalibrated(r, i, o, c, l, a, t);
	if (s[3]) throw Pt(s[2]);
	var w = gt(s[0], s[1]).slice();
	return Ot.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function f(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = Dt(e, Ot.__wbindgen_malloc), c = Nt;
	return Ot.clippedUnionHours(r, i, o, c, _, t);
}
function m(n, e) {
	const _ = Ot.compareNonwearDetectorMasks(n, e);
	if (_[2]) throw Pt(_[1]);
	return Pt(_[0]);
}
function h(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = Dt(e, Ot.__wbindgen_malloc), c = Nt, l = Dt(_, Ot.__wbindgen_malloc), a = Nt, s = Ot.computeAnglez5s(r, i, o, c, l, a, t);
	var w = at(s[0], s[1]).slice();
	return Ot.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function p(n) {
	let e, _;
	try {
		const i = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt, c = Ot.computeCircadian(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Pt(c[2]);
		return e = t, _ = r, ht(t, r);
	} finally {
		Ot.__wbindgen_free(e, _, 1);
	}
}
function y(n, e, _, t, r, i, o) {
	const c = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), l = Nt, a = Dt(e, Ot.__wbindgen_malloc), s = Nt, w = Ct(_, Ot.__wbindgen_malloc), g = Nt, u = Dt(t, Ot.__wbindgen_malloc), b = Nt, d = Ct(r, Ot.__wbindgen_malloc), f = Nt, m = At(i, Ot.__wbindgen_malloc), h = Nt, p = Ct(o, Ot.__wbindgen_malloc), y = Nt, v = Ot.computeCircadianTyped(c, l, a, s, w, g, u, b, d, f, m, h, p, y);
	if (v[2]) throw Pt(v[1]);
	return Pt(v[0]);
}
function v(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = Dt(e, Ot.__wbindgen_malloc), c = Nt, l = Dt(_, Ot.__wbindgen_malloc), a = Nt, s = Ot.computeEnmo5s(r, i, o, c, l, a, t);
	var w = at(s[0], s[1]).slice();
	return Ot.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function k(n, e, _, t, r) {
	const i = Dt(n, Ot.__wbindgen_malloc), o = Nt, c = Dt(e, Ot.__wbindgen_malloc), l = Nt, a = Dt(_, Ot.__wbindgen_malloc), s = Nt, w = Ot.computeMimsUnit(i, o, c, l, a, s, t, Rt(r) ? 0 : ot(r));
	if (w[2]) throw Pt(w[1]);
	return Pt(w[0]);
}
function S(n, e, _, t, r) {
	const i = Dt(n, Ot.__wbindgen_malloc), o = Nt, c = Dt(e, Ot.__wbindgen_malloc), l = Nt, a = Dt(_, Ot.__wbindgen_malloc), s = Nt, w = Dt(t, Ot.__wbindgen_malloc), g = Nt, u = Ot.computeMimsUnitDataframe(i, o, c, l, a, s, w, g, Rt(r) ? 0 : ot(r));
	if (u[2]) throw Pt(u[1]);
	return Pt(u[0]);
}
function R(n, e, _, t, r) {
	const i = Dt(n, Ot.__wbindgen_malloc), o = Nt, c = Dt(e, Ot.__wbindgen_malloc), l = Nt, a = Dt(_, Ot.__wbindgen_malloc), s = Nt, w = Ot.computeMimsUnitTimingBreakdown(i, o, c, l, a, s, t, Rt(r) ? 0 : ot(r));
	if (w[2]) throw Pt(w[1]);
	return Pt(w[0]);
}
function C(n, e, _, t, r) {
	const i = Dt(n, Ot.__wbindgen_malloc), o = Nt, c = Dt(e, Ot.__wbindgen_malloc), l = Nt, a = Dt(_, Ot.__wbindgen_malloc), s = Nt, w = Ot.computeMimsUnitValues(i, o, c, l, a, s, t, Rt(r) ? 0 : ot(r));
	if (w[3]) throw Pt(w[2]);
	var g = at(w[0], w[1]).slice();
	return Ot.__wbindgen_free(w[0], 8 * w[1], 8), g;
}
function A(n) {
	let e, _;
	try {
		const i = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt, c = Ot.computeNightDifficulty(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Pt(c[2]);
		return e = t, _ = r, ht(t, r);
	} finally {
		Ot.__wbindgen_free(e, _, 1);
	}
}
function D(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), y = Nt, v = Dt(e, Ot.__wbindgen_malloc), k = Nt, S = Ct(_, Ot.__wbindgen_malloc), R = Nt, C = Dt(t, Ot.__wbindgen_malloc), A = Nt, D = Ct(r, Ot.__wbindgen_malloc), x = Nt, M = At(i, Ot.__wbindgen_malloc), P = Nt, F = Ct(o, Ot.__wbindgen_malloc), I = Nt, W = At(c, Ot.__wbindgen_malloc), z = Nt, U = Ct(l, Ot.__wbindgen_malloc), O = Nt, N = Dt(a, Ot.__wbindgen_malloc), T = Nt, G = Ct(s, Ot.__wbindgen_malloc), B = Nt, j = Dt(w, Ot.__wbindgen_malloc), E = Nt, L = Ct(g, Ot.__wbindgen_malloc), V = Nt, H = Dt(u, Ot.__wbindgen_malloc), X = Nt, Z = Ct(b, Ot.__wbindgen_malloc), q = Nt, J = Dt(d, Ot.__wbindgen_malloc), $ = Nt, Y = Ct(f, Ot.__wbindgen_malloc), K = Nt, Q = At(m, Ot.__wbindgen_malloc), nn = Nt, en = Ct(h, Ot.__wbindgen_malloc), _n = Nt, tn = Ot.computeNightDifficultyTyped(p, y, v, k, S, R, C, A, D, x, M, P, F, I, W, z, U, O, N, T, G, B, j, E, L, V, H, X, Z, q, J, $, Y, K, Q, nn, en, _n);
	if (tn[2]) throw Pt(tn[1]);
	return Pt(tn[0]);
}
function x(n) {
	let e, _;
	try {
		const i = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt, c = Ot.computeNightSignals(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Pt(c[2]);
		return e = t, _ = r, ht(t, r);
	} finally {
		Ot.__wbindgen_free(e, _, 1);
	}
}
function M(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h) {
	const p = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), y = Nt, v = Dt(e, Ot.__wbindgen_malloc), k = Nt, S = Ct(_, Ot.__wbindgen_malloc), R = Nt, C = Dt(t, Ot.__wbindgen_malloc), A = Nt, D = Ct(r, Ot.__wbindgen_malloc), x = Nt, M = At(i, Ot.__wbindgen_malloc), P = Nt, F = Ct(o, Ot.__wbindgen_malloc), I = Nt, W = At(c, Ot.__wbindgen_malloc), z = Nt, U = Ct(l, Ot.__wbindgen_malloc), O = Nt, N = Dt(a, Ot.__wbindgen_malloc), T = Nt, G = Ct(s, Ot.__wbindgen_malloc), B = Nt, j = Dt(w, Ot.__wbindgen_malloc), E = Nt, L = Ct(g, Ot.__wbindgen_malloc), V = Nt, H = Dt(u, Ot.__wbindgen_malloc), X = Nt, Z = Ct(b, Ot.__wbindgen_malloc), q = Nt, J = Dt(d, Ot.__wbindgen_malloc), $ = Nt, Y = Ct(f, Ot.__wbindgen_malloc), K = Nt, Q = At(m, Ot.__wbindgen_malloc), nn = Nt, en = Ct(h, Ot.__wbindgen_malloc), _n = Nt, tn = Ot.computeNightSignalsTyped(p, y, v, k, S, R, C, A, D, x, M, P, F, I, W, z, U, O, N, T, G, B, j, E, L, V, H, X, Z, q, J, $, Y, K, Q, nn, en, _n);
	if (tn[2]) throw Pt(tn[1]);
	return Pt(tn[0]);
}
function P(n, e, _) {
	const t = At(n, Ot.__wbindgen_malloc), r = Nt, i = Dt(e, Ot.__wbindgen_malloc), o = Nt, c = Ot.computeSleepMetrics(t, r, i, o, _);
	if (c[2]) throw Pt(c[1]);
	return Pt(c[0]);
}
function F(n) {
	const e = Ot.configureComputeMemoryBudgetV1(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function I(n) {
	const e = xt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.consensusDisagreementDetail(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function W(n) {
	const e = Ot.consensusDisagreements(n);
	if (e[3]) throw Pt(e[2]);
	var _ = st(e[0], e[1]).slice();
	return Ot.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function z(n) {
	const e = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), _ = Nt, t = Ot.convertBedWakeDaysDiary(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function U(n) {
	const e = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), _ = Nt, t = Ot.convertScreensRedcapDiary(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function O(n) {
	const e = At(n, Ot.__wbindgen_malloc), _ = Nt;
	Ot.csvBufferAppend(e, _);
}
function N(n) {
	Ot.csvBufferClear(n);
}
function T(n, e) {
	const _ = Ot.cutpointEpochCompatibility(n, e);
	if (_[2]) throw Pt(_[1]);
	return Pt(_[0]);
}
function G(n, e, _, t, r) {
	const i = Dt(n, Ot.__wbindgen_malloc), o = Nt, c = Ot.cutpointToneCodes(i, o, e, _, t, r);
	var l = gt(c[0], c[1]).slice();
	return Ot.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
function B(n, e, _, t) {
	const r = Ot.cutpointsRefusal(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = ht(r[0], r[1]).slice(), Ot.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function j(n, e, _, t) {
	return 0 !== Ot.cutpointsValid(n, e, _, t);
}
function E(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Ct(e, Ot.__wbindgen_malloc), i = Nt, o = Ot.describeColumns(_, t, r, i);
	if (o[3]) throw Pt(o[2]);
	var c = st(o[0], o[1]).slice();
	return Ot.__wbindgen_free(o[0], 4 * o[1], 4), c;
}
function L(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Dt(e, Ot.__wbindgen_malloc), i = Nt, o = Ot.detectDetachFromAccelerationG(_, t, r, i);
	if (o[3]) throw Pt(o[2]);
	var c = gt(o[0], o[1]).slice();
	return Ot.__wbindgen_free(o[0], 1 * o[1], 1), c;
}
function V(n, e) {
	let _, t;
	try {
		const r = At(n, Ot.__wbindgen_malloc), i = Nt, o = Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), c = Nt, l = Ot.detectDeviceFormat(r, i, o, c);
		return _ = l[0], t = l[1], ht(l[0], l[1]);
	} finally {
		Ot.__wbindgen_free(_, t, 1);
	}
}
function H(n) {
	const e = Ot.detectGgirHasptVariant(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function X(n, e, _, t, r) {
	const i = Dt(n, Ot.__wbindgen_malloc), o = Nt;
	var c = Rt(e) ? 0 : Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), l = Nt, a = Rt(_) ? 0 : Dt(_, Ot.__wbindgen_malloc), s = Nt, w = Rt(t) ? 0 : Dt(t, Ot.__wbindgen_malloc), g = Nt, u = Rt(r) ? 0 : Mt(r, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), b = Nt;
	const d = Ot.detectHdcza(i, o, c, l, a, s, w, g, u, b);
	if (d[2]) throw Pt(d[1]);
	return Pt(d[0]);
}
function Z(n) {
	const e = Dt(n, Ot.__wbindgen_malloc), _ = Nt;
	return 0 !== Ot.detectHourClockJumpMs(e, _);
}
function q(n) {
	const e = Dt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.detectNonwear(e, _);
	var r = gt(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function J(n) {
	const e = Dt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.detectNonwearChoi2011(e, _);
	var r = gt(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function $(n) {
	const e = Dt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.detectNonwearChoi2011Bouts(e, _);
	if (t[3]) throw Pt(t[2]);
	var r = st(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Y(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Ot.detectNonwearChoi2011Epoch(_, t, e);
	if (r[3]) throw Pt(r[2]);
	var i = gt(r[0], r[1]).slice();
	return Ot.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function K(n) {
	const e = Dt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.detectNonwearChoi2012(e, _);
	var r = gt(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function Q(n) {
	const e = Dt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.detectNonwearChoi2012Bouts(e, _);
	if (t[3]) throw Pt(t[2]);
	var r = st(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function nn(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Ot.detectNonwearChoi2012Epoch(_, t, e);
	if (r[3]) throw Pt(r[2]);
	var i = gt(r[0], r[1]).slice();
	return Ot.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function en(n) {
	const e = Dt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.detectNonwearChoiBouts(e, _);
	if (t[3]) throw Pt(t[2]);
	var r = st(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function _n(n) {
	let e, _;
	try {
		const i = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt, c = Ot.detectNonwearUnified(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Pt(c[2]);
		return e = t, _ = r, ht(t, r);
	} finally {
		Ot.__wbindgen_free(e, _, 1);
	}
}
function tn(n, e, _, t, r, i, o) {
	const c = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), l = Nt, a = Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), s = Nt, w = Dt(_, Ot.__wbindgen_malloc), g = Nt, u = Dt(t, Ot.__wbindgen_malloc), b = Nt, d = Dt(r, Ot.__wbindgen_malloc), f = Nt, m = Ot.detectNonwearUnifiedBatchTyped(c, l, a, s, w, g, u, b, d, f, i, o);
	if (m[2]) throw Pt(m[1]);
	return Pt(m[0]);
}
function rn(n, e, _) {
	const t = xt(_, Ot.__wbindgen_malloc), r = Nt, i = Ot.dstPlaceholderRuns(n, e, t, r);
	if (i[3]) throw Pt(i[2]);
	var o = st(i[0], i[1]).slice();
	return Ot.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function on(n, e, _, t) {
	const r = Ot.effectiveOverrideCutpoints(n, e, _, t);
	let i;
	return 0 !== r[0] && (i = at(r[0], r[1]).slice(), Ot.__wbindgen_free(r[0], 8 * r[1], 8)), i;
}
function cn(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Dt(e, Ot.__wbindgen_malloc), i = Nt, o = Ot.epochAgreement(_, t, r, i);
	if (o[2]) throw Pt(o[1]);
	return Pt(o[0]);
}
function ln(n, e, _, t, r) {
	const i = Dt(n, Ot.__wbindgen_malloc), o = Nt, c = Dt(e, Ot.__wbindgen_malloc), l = Nt, a = Dt(_, Ot.__wbindgen_malloc), s = Nt, w = Dt(t, Ot.__wbindgen_malloc), g = Nt, u = Ot.epochRawData(i, o, c, l, a, s, w, g, r);
	if (u[2]) throw Pt(u[1]);
	return Pt(u[0]);
}
function an(n, e, _) {
	const t = Dt(n, Ot.__wbindgen_malloc), r = Nt, i = Dt(e, Ot.__wbindgen_malloc), o = Nt, c = Ot.epochWithBandpass(t, r, i, o, _);
	if (c[2]) throw Pt(c[1]);
	return Pt(c[0]);
}
function sn(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = Ot.epochsOverlapping(r, i, e, _, t);
	let c;
	return 0 !== o[0] && (c = wt(o[0], o[1]).slice(), Ot.__wbindgen_free(o[0], 4 * o[1], 4)), c;
}
function wn(n, e) {
	let _, t;
	try {
		const o = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), c = Nt, l = Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), a = Nt, s = Ot.executeHeroRuntime(o, c, l, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Pt(s[2]);
		return _ = r, t = i, ht(r, i);
	} finally {
		Ot.__wbindgen_free(_, t, 1);
	}
}
function gn(n) {
	const e = xt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.exportNapAggregate(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function un(n, e, _) {
	const t = xt(_, Ot.__wbindgen_malloc), r = Nt, i = Ot.exportPeriodFigures(!Rt(n), Rt(n) ? 0 : n, !Rt(e), Rt(e) ? 0 : e, t, r);
	if (i[2]) throw Pt(i[1]);
	return Pt(i[0]);
}
function bn(n) {
	const e = At(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.extractCapsense(e, _);
	if (t[3]) throw Pt(t[2]);
	var r = st(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function dn(n, e, _, t, r) {
	const i = Dt(n, Ot.__wbindgen_malloc), o = Nt, c = Dt(e, Ot.__wbindgen_malloc), l = Nt, a = Dt(_, Ot.__wbindgen_malloc), s = Nt, w = Mt(r, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), g = Nt, u = Ot.foldOntoGrid(i, o, c, l, a, s, t, w, g);
	if (u[3]) throw Pt(u[2]);
	var b = at(u[0], u[1]).slice();
	return Ot.__wbindgen_free(u[0], 8 * u[1], 8), b;
}
function fn(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = Mt(t, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), c = Nt, l = Ot.foldSampleBlocks(r, i, e, _, o, c);
	if (l[3]) throw Pt(l[2]);
	var a = at(l[0], l[1]).slice();
	return Ot.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function mn(n, e, _, t, r) {
	const i = At(_, Ot.__wbindgen_malloc), o = Nt, c = Dt(t, Ot.__wbindgen_malloc), l = Nt, a = Ot.foldSleepWakeVotes(n, e, i, o, c, l, r);
	if (a[2]) throw Pt(a[1]);
	return Pt(a[0]);
}
function hn(n, e, _, t, r, i) {
	const o = Dt(_, Ot.__wbindgen_malloc), c = Nt, l = Dt(t, Ot.__wbindgen_malloc), a = Nt, s = Mt(i, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), w = Nt, g = Ot.foldUniformOntoGrid(n, e, o, c, l, a, r, s, w);
	if (g[3]) throw Pt(g[2]);
	var u = at(g[0], g[1]).slice();
	return Ot.__wbindgen_free(g[0], 8 * g[1], 8), u;
}
function pn(n) {
	const e = Ot.fuseNonwearMasks(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function yn(n, e, _) {
	var t = Rt(_) ? 0 : Mt(_, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), r = Nt;
	const i = Ot.generateActiwareRestIntervals(n, Rt(e) ? 0 : ot(e), t, r);
	if (i[3]) throw Pt(i[2]);
	var o = st(i[0], i[1]).slice();
	return Ot.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function vn() {
	const n = Ot.getComputeCapabilitiesV1();
	if (n[2]) throw Pt(n[1]);
	return Pt(n[0]);
}
function kn(n, e, _) {
	const t = xt(_, Ot.__wbindgen_malloc), r = Nt, i = Ot.ggir5sWallClockMs(n, e, t, r);
	if (i[3]) throw Pt(i[2]);
	var o = at(i[0], i[1]).slice();
	return Ot.__wbindgen_free(i[0], 8 * i[1], 8), o;
}
function Sn(n, e) {
	var _ = Rt(n) ? 0 : Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), t = Nt;
	const r = Ot.ggirAppConfigSummary(_, t, e);
	if (r[2]) throw Pt(r[1]);
	return Pt(r[0]);
}
function Rn(n) {
	const e = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), _ = Nt, t = Ot.ggirConfigValues(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function Cn(n, e) {
	const _ = Ot.ggirDayValidFraction(n, e);
	return 0 === _[0] ? void 0 : _[1];
}
function An(n, e, _) {
	const t = Dt(n, Ot.__wbindgen_malloc), r = Nt;
	var i = Rt(e) ? 0 : Dt(e, Ot.__wbindgen_malloc), o = Nt, c = Rt(_) ? 0 : Mt(_, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), l = Nt;
	const a = Ot.ggirDaysIncluded(t, r, i, o, c, l);
	if (a[3]) throw Pt(a[2]);
	var s = gt(a[0], a[1]).slice();
	return Ot.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function Dn(n, e) {
	const _ = At(n, Ot.__wbindgen_malloc), t = Nt;
	var r = Rt(e) ? 0 : Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), i = Nt;
	const o = Ot.ggirDiaryLogShape(_, t, r, i);
	if (o[2]) throw Pt(o[1]);
	return Pt(o[0]);
}
function xn(n, e, _) {
	const t = xt(e, Ot.__wbindgen_malloc), r = Nt;
	var i = Rt(_) ? 0 : Dt(_, Ot.__wbindgen_malloc), o = Nt;
	const c = Ot.ggirDstPlaceholderCuts(n, t, r, i, o);
	if (c[3]) throw Pt(c[2]);
	var l = st(c[0], c[1]).slice();
	return Ot.__wbindgen_free(c[0], 4 * c[1], 4), l;
}
function Mn(n) {
	var e = Rt(n) ? 0 : Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), _ = Nt;
	const t = Ot.ggirIncludeDayCriterionHours(e, _);
	if (t[2]) throw Pt(t[1]);
	return t[0];
}
function Pn(n, e, _, t) {
	const r = Ct(n, Ot.__wbindgen_malloc), i = Nt, o = xt(_, Ot.__wbindgen_malloc), c = Nt;
	var l = Rt(t) ? 0 : Dt(t, Ot.__wbindgen_malloc), a = Nt;
	const s = Ot.ggirIndicesToWallClockMs(r, i, e, o, c, l, a);
	if (s[3]) throw Pt(s[2]);
	var w = at(s[0], s[1]).slice();
	return Ot.__wbindgen_free(s[0], 8 * s[1], 8), w;
}
function Fn(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = xt(e, Ot.__wbindgen_malloc), i = Nt, o = Ot.ggirLabelsToStoredMs(_, t, r, i);
	if (o[3]) throw Pt(o[2]);
	var c = at(o[0], o[1]).slice();
	return Ot.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function In(n, e, _, t) {
	const r = xt(n, Ot.__wbindgen_malloc), i = Nt, o = Dt(e, Ot.__wbindgen_malloc), c = Nt, l = Dt(_, Ot.__wbindgen_malloc), a = Nt, s = Dt(t, Ot.__wbindgen_malloc), w = Nt, g = Ot.ggirManualNightClocks(r, i, o, c, l, a, s, w);
	if (g[2]) throw Pt(g[1]);
	return Pt(g[0]);
}
function Wn(n) {
	const e = At(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.ggirMilestoneVersion(e, _);
	if (t[3]) throw Pt(t[2]);
	let r;
	return 0 !== t[0] && (r = ht(t[0], t[1]).slice(), Ot.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function zn(n) {
	const e = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), _ = Nt, t = Ot.ggirNonwearApproach(e, _);
	if (t[3]) throw Pt(t[2]);
	let r;
	return 0 !== t[0] && (r = ht(t[0], t[1]).slice(), Ot.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function Un(n) {
	const e = Ot.ggirPersonSummaries(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function On() {
	const n = Ot.ggirRerunProfiles();
	if (n[3]) throw Pt(n[2]);
	var e = st(n[0], n[1]).slice();
	return Ot.__wbindgen_free(n[0], 4 * n[1], 4), e;
}
function Nn(n) {
	const e = At(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.ggirSavedNonwearWindows(e, _);
	if (t[2]) throw Pt(t[1]);
	return t[0] >>> 0;
}
function Tn(n, e, _, t) {
	const r = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), i = Nt, o = Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), c = Nt, l = Mt(_, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), a = Nt, s = xt(t, Ot.__wbindgen_malloc), w = Nt, g = Ot.ggirSleeplogStoredClocks(r, i, o, c, l, a, s, w);
	if (g[3]) throw Pt(g[2]);
	let u;
	return 0 !== g[0] && (u = st(g[0], g[1]).slice(), Ot.__wbindgen_free(g[0], 4 * g[1], 4)), u;
}
function Gn(n, e) {
	return Ot.ggirSptDurationHours(n, e);
}
function Bn(n, e) {
	const _ = Ot.ggirSummaryDenominator(n, e);
	if (_[2]) throw Pt(_[1]);
	return Pt(_[0]);
}
function jn(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Dt(e, Ot.__wbindgen_malloc), i = Nt, o = Ot.gridOffsetWithin(_, t, r, i);
	return 4294967297 === o ? void 0 : o;
}
function En(n) {
	let e, _;
	try {
		const i = At(n, Ot.__wbindgen_malloc), o = Nt, c = Ot.identifyGgirRData(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Pt(c[2]);
		return e = t, _ = r, ht(t, r);
	} finally {
		Ot.__wbindgen_free(e, _, 1);
	}
}
function Ln(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = Dt(e, Ot.__wbindgen_malloc), c = Nt, l = Dt(_, Ot.__wbindgen_malloc), a = Nt, s = Dt(t, Ot.__wbindgen_malloc), w = Nt, g = Ot.implausibilityReasons(r, i, o, c, l, a, s, w);
	if (g[2]) throw Pt(g[1]);
	return Pt(g[0]);
}
function Vn(n) {
	return Ot.initThreadPool(n);
}
function Hn() {
	Ot.installPanicHook();
}
function Xn(n) {
	const e = xt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.interRaterReliability(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function Zn(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Ot.irregularInternalDays(_, t, e);
	var i = st(r[0], r[1]).slice();
	return Ot.__wbindgen_free(r[0], 4 * r[1], 4), i;
}
function qn(n) {
	const e = At(n, Ot.__wbindgen_malloc), _ = Nt;
	return 0 !== Ot.isGeneactivFormat(e, _);
}
function Jn() {
	return Ot.linearMemoryBytesV1();
}
function $n(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = Dt(e, Ot.__wbindgen_malloc), c = Nt, l = Dt(_, Ot.__wbindgen_malloc), a = Nt, s = Ot.lstmSpectralFeatures30s(r, i, o, c, l, a, t);
	if (s[2]) throw Pt(s[1]);
	return Pt(s[0]);
}
function Yn(n, e, _) {
	const t = Dt(n, Ot.__wbindgen_malloc), r = Nt, i = Ot.markerIndexRange(t, r, e, _);
	var o = wt(i[0], i[1]).slice();
	return Ot.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function Kn(n, e, _, t, r, i, o) {
	const c = Dt(n, Ot.__wbindgen_malloc), l = Nt, a = Dt(e, Ot.__wbindgen_malloc), s = Nt, w = Ot.markerSleepOnsetOffset(c, l, a, s, _, t, r, i, o);
	if (w[2]) throw Pt(w[1]);
	return Pt(w[0]);
}
function Qn(n) {
	const e = Dt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.medianGapSeconds(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function ne(n, e, _, t) {
	const r = Ot.metricWarnings(n, e, _, t);
	var i = gt(r[0], r[1]).slice();
	return Ot.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function ee(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Dt(e, Ot.__wbindgen_malloc), i = Nt, o = Ot.midSleepClockHours(_, t, r, i);
	var c = at(o[0], o[1]).slice();
	return Ot.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function _e(n, e, _, t, r) {
	const i = Dt(n, Ot.__wbindgen_malloc), o = Nt, c = Dt(e, Ot.__wbindgen_malloc), l = Nt, a = Dt(_, Ot.__wbindgen_malloc), s = Nt, w = Ot.neishabouriCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw Pt(w[1]);
	return Pt(w[0]);
}
function te(n) {
	const e = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), _ = Nt, t = Ot.nextDate(e, _);
	let r;
	return 0 !== t[0] && (r = ht(t[0], t[1]).slice(), Ot.__wbindgen_free(t[0], 1 * t[1], 1)), r;
}
function re(n, e, _, t, r) {
	const i = Dt(_, Ot.__wbindgen_malloc), o = Nt, c = Dt(t, Ot.__wbindgen_malloc), l = Nt, a = Dt(r, Ot.__wbindgen_malloc), s = Nt, w = Ot.nightIntervalOverlap(n, e, i, o, c, l, a, s);
	if (w[2]) throw Pt(w[1]);
	return Pt(w[0]);
}
function ie(n, e, _, t) {
	let r, i;
	try {
		const l = Ct(n, Ot.__wbindgen_malloc), a = Nt, s = Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), w = Nt, g = Ot.nonwearContributors(l, a, s, w, _, t);
		var o = g[0], c = g[1];
		if (g[3]) throw o = 0, c = 0, Pt(g[2]);
		return r = o, i = c, ht(o, c);
	} finally {
		Ot.__wbindgen_free(r, i, 1);
	}
}
function oe(n) {
	const e = Dt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.nonwearInSleepCounts(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function ce(n) {
	const e = Ot.nonwearSleepOverlap(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function le(n, e, _) {
	const t = Dt(n, Ot.__wbindgen_malloc), r = Nt, i = Dt(e, Ot.__wbindgen_malloc), o = Nt, c = Ot.nonwearWeightRuns(t, r, i, o, _);
	if (c[2]) throw Pt(c[1]);
	return Pt(c[0]);
}
function ae(n, e, _, t, r, i) {
	const o = Mt(r, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), c = Nt, l = Ot.normalizeCutpoints(n, e, _, t, o, c, i);
	if (l[3]) throw Pt(l[2]);
	var a = at(l[0], l[1]).slice();
	return Ot.__wbindgen_free(l[0], 8 * l[1], 8), a;
}
function se(n, e) {
	const _ = At(n, Ot.__wbindgen_malloc), t = Nt, r = Ot.parseActigraphCsv(_, t, e);
	if (r[2]) throw Pt(r[1]);
	return Pt(r[0]);
}
function we(n) {
	const e = Ot.parseActigraphCsvBuffered(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function ge(n, e, _, t) {
	const r = At(n, Ot.__wbindgen_malloc), i = Nt;
	var o = Rt(e) ? 0 : Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), c = Nt, l = Rt(_) ? 0 : xt(_, Ot.__wbindgen_malloc), a = Nt, s = Rt(t) ? 0 : Mt(t, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), w = Nt;
	const g = Ot.parseAw5(r, i, o, c, l, a, s, w);
	if (g[2]) throw Pt(g[1]);
	return Pt(g[0]);
}
function ue(n) {
	const e = At(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.parseCwa(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function be(n, e) {
	const _ = At(n, Ot.__wbindgen_malloc), t = Nt, r = Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), i = Nt, o = Ot.parseEpochSeries(_, t, r, i);
	if (o[2]) throw Pt(o[1]);
	return Pt(o[0]);
}
function de(n) {
	const e = At(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.parseGeneactivBin(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function fe(n) {
	const e = At(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.parseGeneactivCsv(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function me() {
	const n = Ot.parseGeneactivCsvBuffered();
	if (n[2]) throw Pt(n[1]);
	return Pt(n[0]);
}
function he(n) {
	const e = At(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.parseGt3x(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function pe(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = At(e, Ot.__wbindgen_malloc), c = Nt, l = At(_, Ot.__wbindgen_malloc), a = Nt, s = Ot.participantValidity(r, i, o, c, l, a, Rt(t) ? 0 : ot(t));
	if (s[2]) throw Pt(s[1]);
	return Pt(s[0]);
}
function ye(n, e, _, t, r) {
	const i = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt, c = Dt(e, Ot.__wbindgen_malloc), l = Nt;
	var a = Rt(_) ? 0 : Dt(_, Ot.__wbindgen_malloc), s = Nt;
	const w = Ot.physicalActivitySeriesGrid(i, o, c, l, a, s, t, r);
	if (w[2]) throw Pt(w[1]);
	return Pt(w[0]);
}
function ve(n) {
	let e, _;
	try {
		const i = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt, c = Ot.placeMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Pt(c[2]);
		return e = t, _ = r, ht(t, r);
	} finally {
		Ot.__wbindgen_free(e, _, 1);
	}
}
function ke(n, e, _, t, r, i) {
	const o = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), c = Nt, l = Dt(e, Ot.__wbindgen_malloc), a = Nt, s = Dt(_, Ot.__wbindgen_malloc), w = Nt, g = At(t, Ot.__wbindgen_malloc), u = Nt, b = At(r, Ot.__wbindgen_malloc), d = Nt, f = Mt(i, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), m = Nt, h = Ot.placeMarkersBatch(o, c, l, a, s, w, g, u, b, d, f, m);
	if (h[2]) throw Pt(h[1]);
	return Pt(h[0]);
}
function Se(n, e, _, t, r, i, o, c, l, a, s, w, g, u, b, d, f, m, h, p) {
	const y = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), v = Nt, k = Dt(e, Ot.__wbindgen_malloc), S = Nt, R = Ct(_, Ot.__wbindgen_malloc), C = Nt, A = Dt(t, Ot.__wbindgen_malloc), D = Nt, x = Ct(r, Ot.__wbindgen_malloc), M = Nt, P = At(i, Ot.__wbindgen_malloc), F = Nt, I = Ct(o, Ot.__wbindgen_malloc), W = Nt, z = At(c, Ot.__wbindgen_malloc), U = Nt, O = Ct(l, Ot.__wbindgen_malloc), N = Nt, T = Dt(a, Ot.__wbindgen_malloc), G = Nt, B = Ct(s, Ot.__wbindgen_malloc), j = Nt, E = Dt(w, Ot.__wbindgen_malloc), L = Nt, V = Ct(g, Ot.__wbindgen_malloc), H = Nt, X = Dt(u, Ot.__wbindgen_malloc), Z = Nt, q = Ct(b, Ot.__wbindgen_malloc), J = Nt, $ = Dt(d, Ot.__wbindgen_malloc), Y = Nt, K = Ct(f, Ot.__wbindgen_malloc), Q = Nt, nn = At(m, Ot.__wbindgen_malloc), en = Nt, _n = Ct(h, Ot.__wbindgen_malloc), tn = Nt;
	var rn = Rt(p) ? 0 : Mt(p, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), on = Nt;
	const cn = Ot.placeMarkersTyped(y, v, k, S, R, C, A, D, x, M, P, F, I, W, z, U, O, N, T, G, B, j, E, L, V, H, X, Z, q, J, $, Y, K, Q, nn, en, _n, tn, rn, on);
	if (cn[2]) throw Pt(cn[1]);
	return Pt(cn[0]);
}
function Re(n) {
	let e, _;
	try {
		const i = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt, c = Ot.placeNonwearMarkers(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Pt(c[2]);
		return e = t, _ = r, ht(t, r);
	} finally {
		Ot.__wbindgen_free(e, _, 1);
	}
}
function Ce(n, e, _, t) {
	const r = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), i = Nt, o = Dt(e, Ot.__wbindgen_malloc), c = Nt, l = Dt(_, Ot.__wbindgen_malloc), a = Nt, s = At(t, Ot.__wbindgen_malloc), w = Nt, g = Ot.placeNonwearMarkersTyped(r, i, o, c, l, a, s, w);
	if (g[2]) throw Pt(g[1]);
	return Pt(g[0]);
}
function Ae(n) {
	const e = Ot.prepareCompactPipelineOutcomeV1(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function De(n) {
	const e = Ot.prepareCompactPipelineV1(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function xe(n, e, _, t, r, i, o, c) {
	const l = Dt(n, Ot.__wbindgen_malloc), a = Nt, s = Dt(e, Ot.__wbindgen_malloc), w = Nt, g = Dt(_, Ot.__wbindgen_malloc), u = Nt, b = Dt(t, Ot.__wbindgen_malloc), d = Nt;
	var f = Rt(o) ? 0 : Mt(o, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), m = Nt, h = Rt(c) ? 0 : Mt(c, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), p = Nt;
	const y = Ot.processGeneactivRaw(l, a, s, w, g, u, b, d, r, i, f, m, h, p);
	if (y[2]) throw Pt(y[1]);
	return Pt(y[0]);
}
function Me(n, e) {
	const _ = At(n, Ot.__wbindgen_malloc), t = Nt;
	var r = Rt(e) ? 0 : Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), i = Nt;
	const o = Ot.processGt3xPart1(_, t, r, i);
	if (o[2]) throw Pt(o[1]);
	return Pt(o[0]);
}
function Pe(n, e, _) {
	const t = At(n, Ot.__wbindgen_malloc), r = Nt;
	var i = Rt(_) ? 0 : Mt(_, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt;
	const c = Ot.processGt3xPart1WithEpoch(t, r, e, i, o);
	if (c[2]) throw Pt(c[1]);
	return Pt(c[0]);
}
function Fe(n, e, _, t, r, i, o) {
	const c = Dt(n, Ot.__wbindgen_malloc), l = Nt, a = Dt(e, Ot.__wbindgen_malloc), s = Nt, w = Dt(_, Ot.__wbindgen_malloc), g = Nt;
	var u = Rt(i) ? 0 : Mt(i, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), b = Nt, d = Rt(o) ? 0 : Mt(o, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), f = Nt;
	const m = Ot.processRawXyz(c, l, a, s, w, g, t, r, u, b, d, f);
	if (m[2]) throw Pt(m[1]);
	return Pt(m[0]);
}
function Ie(n, e, _, t, r, i, o, c) {
	const l = Dt(n, Ot.__wbindgen_malloc), a = Nt, s = Dt(e, Ot.__wbindgen_malloc), w = Nt, g = Dt(_, Ot.__wbindgen_malloc), u = Nt, b = Dt(t, Ot.__wbindgen_malloc), d = Nt;
	var f = Rt(i) ? 0 : Mt(i, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), m = Nt, h = Rt(o) ? 0 : Mt(o, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), p = Nt, y = Rt(c) ? 0 : Dt(c, Ot.__wbindgen_malloc), v = Nt;
	const k = Ot.processRawXyzImputed(l, a, s, w, g, u, b, d, r, f, m, h, p, y, v);
	if (k[2]) throw Pt(k[1]);
	return Pt(k[0]);
}
function We(n, e, _, t, r, i, o, c, l, a) {
	const s = Dt(n, Ot.__wbindgen_malloc), w = Nt, g = Dt(e, Ot.__wbindgen_malloc), u = Nt, b = Dt(_, Ot.__wbindgen_malloc), d = Nt, f = Dt(t, Ot.__wbindgen_malloc), m = Nt;
	var h = Rt(i) ? 0 : Mt(i, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), p = Nt, y = Rt(c) ? 0 : Mt(c, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), v = Nt, k = Rt(a) ? 0 : Dt(a, Ot.__wbindgen_malloc), S = Nt;
	const R = Ot.processRawXyzImputedWithEpoch(s, w, g, u, b, d, f, m, r, h, p, o, y, v, Rt(l) ? 16777215 : l ? 1 : 0, k, S);
	if (R[2]) throw Pt(R[1]);
	return Pt(R[0]);
}
function ze(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = At(e, Ot.__wbindgen_malloc), c = Nt, l = Dt(t, Ot.__wbindgen_malloc), a = Nt, s = Ot.projectLabelsOntoGrid(r, i, o, c, _, l, a);
	var w = gt(s[0], s[1]).slice();
	return Ot.__wbindgen_free(s[0], 1 * s[1], 1), w;
}
function Ue(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = Dt(e, Ot.__wbindgen_malloc), c = Nt, l = Dt(_, Ot.__wbindgen_malloc), a = Nt, s = Ot.rasterizePeriods(r, i, o, c, l, a, t);
	if (s[2]) throw Pt(s[1]);
	return Pt(s[0]);
}
function Oe(n, e, _) {
	const t = At(n, Ot.__wbindgen_malloc), r = Nt;
	var i = Rt(e) ? 0 : Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt;
	const c = Ot.readGgirMeta(t, r, i, o, Rt(_) ? 16777215 : _ ? 1 : 0);
	if (c[2]) throw Pt(c[1]);
	return Pt(c[0]);
}
function Ne(n, e) {
	const _ = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), t = Nt;
	var r = Rt(e) ? 0 : Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), i = Nt;
	const o = Ot.readGgirReportCsv(_, t, r, i);
	if (o[2]) throw Pt(o[1]);
	return Pt(o[0]);
}
function Te() {
	return Ot.recommended_chunk_size_mb() >>> 0;
}
function Ge(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), i = Nt, o = Ot.reduceF64V1(_, t, r, i);
	if (o[2]) throw Pt(o[1]);
	return o[0];
}
function Be(n, e) {
	const _ = xt(e, Ot.__wbindgen_malloc), t = Nt, r = Ot.rerunGgirResults(n, _, t);
	if (r[2]) throw Pt(r[1]);
	return Pt(r[0]);
}
function je(n) {
	const e = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), _ = Nt, t = Ot.resolveTimezone(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function Ee(n, e, _) {
	const t = Dt(n, Ot.__wbindgen_malloc), r = Nt, i = Dt(e, Ot.__wbindgen_malloc), o = Nt, c = Ct(_, Ot.__wbindgen_malloc), l = Nt, a = Ot.restoredDstRuns(t, r, i, o, c, l);
	if (a[3]) throw Pt(a[2]);
	var s = st(a[0], a[1]).slice();
	return Ot.__wbindgen_free(a[0], 4 * a[1], 4), s;
}
function Le(n, e, _, t, r, i, o, c, l, a, s, w, g, u) {
	const b = At(n, Ot.__wbindgen_malloc), d = Nt, f = Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), m = Nt;
	var h = Rt(_) ? 0 : At(_, Ot.__wbindgen_malloc), p = Nt, y = Rt(t) ? 0 : At(t, Ot.__wbindgen_malloc), v = Nt, k = Rt(r) ? 0 : At(r, Ot.__wbindgen_malloc), S = Nt, R = Rt(i) ? 0 : At(i, Ot.__wbindgen_malloc), C = Nt, A = Rt(o) ? 0 : At(o, Ot.__wbindgen_malloc), D = Nt, x = Rt(c) ? 0 : Mt(c, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), M = Nt, P = Rt(l) ? 0 : Mt(l, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), F = Nt, I = Rt(a) ? 0 : xt(a, Ot.__wbindgen_malloc), W = Nt, z = Rt(w) ? 0 : Mt(w, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), U = Nt, O = Rt(g) ? 0 : Mt(g, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), N = Nt;
	const T = Ot.reviewGgirResults(b, d, f, m, h, p, y, v, k, S, R, C, A, D, x, M, P, F, I, W, s, z, U, O, N, Rt(u) ? 4294967297 : u >>> 0);
	if (T[2]) throw Pt(T[1]);
	return Pt(T[0]);
}
function Ve(n) {
	const e = xt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.reviewNonwearFile(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function He(n) {
	const e = xt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.reviewNonwearTotals(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function Xe(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Ot.roundCountStorage(_, t, e);
	var i = at(r[0], r[1]).slice();
	return Ot.__wbindgen_free(r[0], 8 * r[1], 8), i;
}
function Ze(n) {
	const e = Ot.runCompactPipelineOutcomeV1(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function qe(n) {
	const e = Ot.runCompactPipelineV1(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function Je(n) {
	const e = Ot.runFullPipelineOutcomeV1(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function $e(n) {
	const e = Ot.runFullPipelineV1(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function Ye(n) {
	const e = Ot.runGgirDeclaredEpochsV1(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function Ke(n) {
	const e = Ot.runGgirPart3(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function Qe(n, e) {
	const _ = At(n, Ot.__wbindgen_malloc), t = Nt;
	var r = Rt(e) ? 0 : Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), i = Nt;
	const o = Ot.runMilestone(_, t, r, i);
	if (o[2]) throw Pt(o[1]);
	return Pt(o[0]);
}
function n_(n) {
	const e = xt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.scoreAllDays(e, _);
	if (t[3]) throw Pt(t[2]);
	var r = st(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function e_(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Ot.scoreColeKripke(_, t, e);
	var i = gt(r[0], r[1]).slice();
	return Ot.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function __(n) {
	let e, _;
	try {
		const i = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt, c = Ot.scoreConsensus(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Pt(c[2]);
		return e = t, _ = r, ht(t, r);
	} finally {
		Ot.__wbindgen_free(e, _, 1);
	}
}
function t_(n) {
	const e = Ot.scoreConsensusMajority(n);
	if (e[3]) throw Pt(e[2]);
	var _ = gt(e[0], e[1]).slice();
	return Ot.__wbindgen_free(e[0], 1 * e[1], 1), _;
}
function r_(n, e, _) {
	const t = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), r = Nt, i = At(e, Ot.__wbindgen_malloc), o = Nt, c = Ct(_, Ot.__wbindgen_malloc), l = Nt, a = Ot.scoreConsensusTyped(t, r, i, o, c, l);
	if (a[2]) throw Pt(a[1]);
	return Pt(a[0]);
}
function i_(n) {
	let e, _;
	try {
		const i = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt, c = Ot.scoreEpochs(i, o);
		var t = c[0], r = c[1];
		if (c[3]) throw t = 0, r = 0, Pt(c[2]);
		return e = t, _ = r, ht(t, r);
	} finally {
		Ot.__wbindgen_free(e, _, 1);
	}
}
function o_(n, e, _, t, r, i) {
	const o = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), c = Nt, l = Dt(e, Ot.__wbindgen_malloc), a = Nt, s = Dt(_, Ot.__wbindgen_malloc), w = Nt, g = Dt(t, Ot.__wbindgen_malloc), u = Nt, b = Ot.scoreEpochsTyped(o, c, l, a, s, w, g, u, r, i);
	if (b[2]) throw Pt(b[1]);
	return Pt(b[0]);
}
function c_(n, e, _) {
	const t = Dt(n, Ot.__wbindgen_malloc), r = Nt;
	var i = Rt(e) ? 0 : Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt, c = Rt(_) ? 0 : Dt(_, Ot.__wbindgen_malloc), l = Nt;
	const a = Ot.scoreGgirHasib(t, r, i, o, c, l);
	if (a[3]) throw Pt(a[2]);
	var s = gt(a[0], a[1]).slice();
	return Ot.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function l_(n) {
	const e = Ot.scoreGgirHasibVariant(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function a_(n, e, _, t, r) {
	const i = Dt(n, Ot.__wbindgen_malloc), o = Nt, c = Dt(e, Ot.__wbindgen_malloc), l = Nt;
	var a = Rt(t) ? 0 : Mt(t, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), s = Nt, w = Rt(r) ? 0 : Dt(r, Ot.__wbindgen_malloc), g = Nt;
	const u = Ot.scoreGgirSib(i, o, c, l, _, a, s, w, g);
	if (u[2]) throw Pt(u[1]);
	return Pt(u[0]);
}
function s_(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Ot.scoreSadeh(_, t, e);
	var i = gt(r[0], r[1]).slice();
	return Ot.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function w_(n, e, _) {
	const t = Mt(_, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), r = Nt, i = Ot.screensRestIntervals(n, Rt(e) ? 0 : ot(e), t, r);
	if (i[2]) throw Pt(i[1]);
	return Pt(i[0]);
}
function g_(n) {
	const e = xt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.settleManualNonwearNights(e, _);
	if (t[3]) throw Pt(t[2]);
	var r = st(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function u_(n) {
	const e = At(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.sha256StreamFeed(e, _);
	if (t[1]) throw Pt(t[0]);
}
function b_() {
	let n, e;
	try {
		const r = Ot.sha256StreamFinish();
		var _ = r[0], t = r[1];
		if (r[3]) throw _ = 0, t = 0, Pt(r[2]);
		return n = _, e = t, ht(_, t);
	} finally {
		Ot.__wbindgen_free(n, e, 1);
	}
}
function d_() {
	Ot.sha256StreamStart();
}
function f_(n, e) {
	const _ = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), t = Nt, r = Ot.shiftDate(_, t, e);
	let i;
	return 0 !== r[0] && (i = ht(r[0], r[1]).slice(), Ot.__wbindgen_free(r[0], 1 * r[1], 1)), i;
}
function m_(n, e, _, t, r) {
	const i = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt, c = Dt(e, Ot.__wbindgen_malloc), l = Nt, a = Ct(_, Ot.__wbindgen_malloc), s = Nt, w = Dt(t, Ot.__wbindgen_malloc), g = Nt, u = Ct(r, Ot.__wbindgen_malloc), b = Nt, d = Ot.sleepRegularityIndex(i, o, c, l, a, s, w, g, u, b);
	if (d[3]) throw Pt(d[2]);
	return 0 === d[0] ? void 0 : d[1];
}
function h_(n, e) {
	const _ = Ot.sleepWakeScores(n, Rt(e) ? 0 : ot(e));
	if (_[2]) throw Pt(_[1]);
	return Pt(_[0]);
}
function p_(n) {
	const e = xt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.sourceLabelsWallClockMs(e, _);
	var r = at(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function y_(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = Dt(e, Ot.__wbindgen_malloc), c = Nt, l = Ot.spanFiniteMean(r, i, o, c, _, t);
	return 0 === l[0] ? void 0 : l[1];
}
function v_(n, e, _) {
	const t = Dt(n, Ot.__wbindgen_malloc), r = Nt, i = xt(e, Ot.__wbindgen_malloc), o = Nt, c = Dt(_, Ot.__wbindgen_malloc), l = Nt, a = Ot.spliceDstPlaceholders(t, r, i, o, c, l);
	if (a[3]) throw Pt(a[2]);
	let s;
	return 0 !== a[0] && (s = at(a[0], a[1]).slice(), Ot.__wbindgen_free(a[0], 8 * a[1], 8)), s;
}
function k_(n) {
	return Ot.startThreadPool(n);
}
function S_(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = At(e, Ot.__wbindgen_malloc), c = Nt, l = Dt(_, Ot.__wbindgen_malloc), a = Nt, s = Dt(t, Ot.__wbindgen_malloc), w = Nt, g = Ot.statesInPeriods(r, i, o, c, l, a, s, w);
	var u = gt(g[0], g[1]).slice();
	return Ot.__wbindgen_free(g[0], 1 * g[1], 1), u;
}
function R_(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = xt(e, Ot.__wbindgen_malloc), i = Nt, o = Ot.storedToGgirLabelsMs(_, t, r, i);
	if (o[3]) throw Pt(o[2]);
	var c = at(o[0], o[1]).slice();
	return Ot.__wbindgen_free(o[0], 8 * o[1], 8), c;
}
function C_(n) {
	const e = At(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.streamParseFeed(e, _);
	if (t[2]) throw Pt(t[1]);
	return t[0] >>> 0;
}
function A_() {
	const n = Ot.streamParseFinish();
	if (n[2]) throw Pt(n[1]);
	return t.__wrap(n[0]);
}
function D_() {
	const n = Ot.streamParseFinishChunk();
	if (n[2]) throw Pt(n[1]);
	return _.__wrap(n[0]);
}
function x_(n) {
	const e = Ot.streamParseFinishChunkWithProgress(n);
	if (e[2]) throw Pt(e[1]);
	return _.__wrap(e[0]);
}
function M_(n, e, _) {
	var t = Rt(_) ? 0 : Mt(_, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), r = Nt;
	const i = Ot.streamParseStart(n, e, t, r);
	if (i[1]) throw Pt(i[0]);
}
function P_(n, e) {
	const _ = Ot.streamParseStartData(n, e);
	if (_[1]) throw Pt(_[0]);
}
function F_(n, e, _, t, r) {
	var i = Rt(t) ? 0 : Mt(t, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), o = Nt;
	const c = Ot.streamParseStartWithEpoch(n, e, _, i, o, !Rt(r), Rt(r) ? 0 : r);
	if (c[1]) throw Pt(c[0]);
}
function I_(n, e) {
	const _ = At(n, Ot.__wbindgen_malloc), t = Nt, r = Ot.summarizeActimetricPreschoolWristRfClasses(_, t, e);
	if (r[2]) throw Pt(r[1]);
	return Pt(r[0]);
}
function W_(n) {
	const e = Ot.summarizeExportGroups(n);
	if (e[3]) throw Pt(e[2]);
	var _ = st(e[0], e[1]).slice();
	return Ot.__wbindgen_free(e[0], 4 * e[1], 4), _;
}
function z_(n) {
	const e = Ot.summarizePhysicalActivityDays(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function U_(n) {
	const e = Ot.summarizePhysicalActivityTrace(n);
	if (e[2]) throw Pt(e[1]);
	return Pt(e[0]);
}
function O_() {
	return 0 !== Ot.threadPoolReady();
}
function N_(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Ot.thresholdProbabilities(_, t, e);
	var i = gt(r[0], r[1]).slice();
	return Ot.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function T_(n) {
	const e = xt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.timeSemantics(e, _);
	if (t[3]) throw Pt(t[2]);
	var r = st(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function G_(n, e, _) {
	const t = Dt(n, Ot.__wbindgen_malloc), r = Nt, i = Ot.timestampDiscontinuities(t, r, e, _);
	if (i[3]) throw Pt(i[2]);
	var o = st(i[0], i[1]).slice();
	return Ot.__wbindgen_free(i[0], 4 * i[1], 4), o;
}
function B_(n, e, _) {
	const t = Ot.uniformTimestamps(n, e, _);
	var r = at(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 8 * t[1], 8), r;
}
function j_(n, e) {
	const _ = Ot.utcDatesInSpan(n, e);
	var t = st(_[0], _[1]).slice();
	return Ot.__wbindgen_free(_[0], 4 * _[1], 4), t;
}
function E_(n) {
	const e = Dt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.utcDayIndex(e, _);
	if (t[2]) throw Pt(t[1]);
	return Pt(t[0]);
}
function L_(n) {
	const e = At(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.validStateFraction(e, _);
	return 0 === t[0] ? void 0 : t[1];
}
function V_(n, e) {
	const _ = Dt(n, Ot.__wbindgen_malloc), t = Nt, r = Ot.validWearDays(_, t, Rt(e) ? 0 : ot(e));
	if (r[3]) throw Pt(r[2]);
	var i = gt(r[0], r[1]).slice();
	return Ot.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function H_(n, e, _) {
	const t = Dt(n, Ot.__wbindgen_malloc), r = Nt, i = Ot.wallClockDstPlaceholders(t, r, e, _);
	if (i[2]) throw Pt(i[1]);
	return Pt(i[0]);
}
function X_(n) {
	const e = Dt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.wallClockLabels(e, _);
	var r = st(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 4 * t[1], 4), r;
}
function Z_(n, e, _) {
	const t = At(n, Ot.__wbindgen_malloc), r = Nt, i = xt(_, Ot.__wbindgen_malloc), o = Nt, c = Ot.wallMaskOntoGgirGrid(t, r, e, i, o);
	if (c[3]) throw Pt(c[2]);
	var l = gt(c[0], c[1]).slice();
	return Ot.__wbindgen_free(c[0], 1 * c[1], 1), l;
}
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var q_ = class n {
	static __wrap(e) {
		e >>>= 0;
		const _ = Object.create(n.prototype);
		return _.__wbg_ptr = e, it.register(_, _.__wbg_ptr, _), _;
	}
	__destroy_into_raw() {
		const n = this.__wbg_ptr;
		return this.__wbg_ptr = 0, it.unregister(this), n;
	}
	free() {
		const n = this.__destroy_into_raw();
		Ot.__wbg_wbg_rayon_poolbuilder_free(n, 0);
	}
	build() {
		Ot.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
	}
	mainJS() {
		return Ot.wbg_rayon_poolbuilder_mainJS(this.__wbg_ptr);
	}
	numThreads() {
		return Ot.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
	}
	receiver() {
		return Ot.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
	}
};
function J_(n) {
	Ot.wbg_rayon_start_worker(n);
}
function $_(n, e) {
	const _ = Mt(n, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), t = Nt;
	var r = Rt(e) ? 0 : Mt(e, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), i = Nt;
	const o = Ot.wearSiteHasptRouting(_, t, r, i);
	if (o[2]) throw Pt(o[1]);
	return Pt(o[0]);
}
function Y_(n) {
	const e = xt(n, Ot.__wbindgen_malloc), _ = Nt, t = Ot.weekendDates(e, _);
	var r = gt(t[0], t[1]).slice();
	return Ot.__wbindgen_free(t[0], 1 * t[1], 1), r;
}
function K_(n, e, _, t) {
	const r = Dt(n, Ot.__wbindgen_malloc), i = Nt, o = Ot.windowCoverage(r, i, e, _, t);
	return 0 === o[0] ? void 0 : o[1];
}
function Q_(n, e, _, t, r) {
	const i = Dt(n, Ot.__wbindgen_malloc), o = Nt, c = Dt(e, Ot.__wbindgen_malloc), l = Nt, a = Dt(_, Ot.__wbindgen_malloc), s = Nt, w = Ot.zeroCrossingCounts(i, o, c, l, a, s, t, r);
	if (w[2]) throw Pt(w[1]);
	return Pt(w[0]);
}
function nt(e) {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(n, e) {
				return Error(ht(n, e));
			},
			__wbg_Number_32bf70a599af1d4b: function(n) {
				return Number(n);
			},
			__wbg_String_8564e559799eccda: function(n, e) {
				const _ = Mt(String(e), Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), t = Nt;
				bt().setInt32(n + 4, t, !0), bt().setInt32(n + 0, _, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(n, e) {
				const _ = "bigint" == typeof e ? e : void 0;
				bt().setBigInt64(n + 8, Rt(_) ? BigInt(0) : _, !0), bt().setInt32(n + 0, !Rt(_), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(n) {
				const e = "boolean" == typeof n ? n : void 0;
				return Rt(e) ? 16777215 : e ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(n, e) {
				const _ = Mt(lt(e), Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), t = Nt;
				bt().setInt32(n + 4, t, !0), bt().setInt32(n + 0, _, !0);
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
				return Ot.memory;
			},
			__wbg___wbindgen_module_b5e6fb95dbdb7d7e: function() {
				return Ut;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(n, e) {
				const _ = "number" == typeof e ? e : void 0;
				bt().setFloat64(n + 8, Rt(_) ? 0 : _, !0), bt().setInt32(n + 0, !Rt(_), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(n, e) {
				const _ = "string" == typeof e ? e : void 0;
				var t = Rt(_) ? 0 : Mt(_, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), r = Nt;
				bt().setInt32(n + 4, r, !0), bt().setInt32(n + 0, t, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(n, e) {
				throw new Error(ht(n, e));
			},
			__wbg_call_14b169f759b26747: function() {
				return St(function(n, e) {
					return n.call(e);
				}, arguments);
			},
			__wbg_call_bb28efe6b2f55b86: function() {
				return St(function(n, e, _, t) {
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
					_ = n, t = e, console.error(ht(n, e));
				} finally {
					Ot.__wbindgen_free(_, t, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(n) {
				return Array.from(n);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return St(function(n, e) {
					return Reflect.get(n, e);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return St(function(n, e) {
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
				return new Uint32Array(wt(n, e));
			},
			__wbg_new_from_slice_3115b094b1002246: function(n, e) {
				return new Float64Array(at(n, e));
			},
			__wbg_new_from_slice_b6858b485924da4e: function(n, e) {
				return new Float32Array((_ = n, t = e, _ >>>= 0, (null !== dt && dt.buffer === Ot.memory.buffer || (dt = new Float32Array(Ot.memory.buffer)), dt).subarray(_ / 4, _ / 4 + t)));
				var _, t;
			},
			__wbg_new_with_length_5cfd777b51078805: function(n) {
				return new Float64Array(n >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(n) {
				return new Uint8Array(n >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return St(function(n) {
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
				return St(function(n) {
					return Reflect.ownKeys(n);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(n, e, _) {
				Uint8Array.prototype.set.call(gt(n, e), _);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return St(function(n, e, _) {
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
				const _ = Mt(e.stack, Ot.__wbindgen_malloc, Ot.__wbindgen_realloc), t = Nt;
				bt().setInt32(n + 4, t, !0), bt().setInt32(n + 0, _, !0);
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
				return Rt(n) ? 0 : ot(n);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const n = "undefined" == typeof globalThis ? null : globalThis;
				return Rt(n) ? 0 : ot(n);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const n = "undefined" == typeof self ? null : self;
				return Rt(n) ? 0 : ot(n);
			},
			__wbg_static_accessor_URL_151cb8815849ce83: function() {
				return import.meta.url;
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const n = "undefined" == typeof window ? null : window;
				return Rt(n) ? 0 : ot(n);
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
						0 === --t.cnt && (Ot.__wbindgen_destroy_closure(t.a, t.b), t.a = 0, ct.unregister(t));
					}, ct.register(r, t, t), r;
				}(n, e, et);
			},
			__wbindgen_cast_0000000000000002: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000003: function(n) {
				return n;
			},
			__wbindgen_cast_0000000000000004: function(n, e) {
				return gt(n, e);
			},
			__wbindgen_cast_0000000000000005: function(n, e) {
				return ht(n, e);
			},
			__wbindgen_cast_0000000000000006: function(n) {
				return BigInt.asUintN(64, n);
			},
			__wbindgen_init_externref_table: function() {
				const n = Ot.__wbindgen_externrefs, e = n.grow(4);
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
function et(n, e, _) {
	Ot.wasm_bindgen_bf9b4c07088de8fe___convert__closures_____invoke___wasm_bindgen_bf9b4c07088de8fe___JsValue______true_(n, e, _);
}
Symbol.dispose && (q_.prototype[Symbol.dispose] = q_.prototype.free);
const _t = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ot.__wbg_aw5batch_free(n >>> 0, 1)), tt = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ot.__wbg_streamchunkresult_free(n >>> 0, 1)), rt = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ot.__wbg_streamparseresult_free(n >>> 0, 1)), it = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ot.__wbg_wbg_rayon_poolbuilder_free(n >>> 0, 1));
function ot(n) {
	const e = Ot.__externref_table_alloc();
	return Ot.__wbindgen_externrefs.set(e, n), e;
}
const ct = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((n) => Ot.__wbindgen_destroy_closure(n.a, n.b));
function lt(n) {
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
		e > 0 && (_ += lt(n[0]));
		for (let t = 1; t < e; t++) _ += ", " + lt(n[t]);
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
function at(n, e) {
	return n >>>= 0, mt().subarray(n / 8, n / 8 + e);
}
function st(n, e) {
	n >>>= 0;
	const _ = bt(), t = [];
	for (let r = n; r < n + 4 * e; r += 4) t.push(Ot.__wbindgen_externrefs.get(_.getUint32(r, !0)));
	return Ot.__externref_drop_slice(n, e), t;
}
function wt(n, e) {
	return n >>>= 0, yt().subarray(n / 4, n / 4 + e);
}
function gt(n, e) {
	return n >>>= 0, kt().subarray(n / 1, n / 1 + e);
}
let ut = null;
function bt() {
	return null !== ut && ut.buffer === Ot.memory.buffer || (ut = new DataView(Ot.memory.buffer)), ut;
}
let dt = null, ft = null;
function mt() {
	return null !== ft && ft.buffer === Ot.memory.buffer || (ft = new Float64Array(Ot.memory.buffer)), ft;
}
function ht(n, e) {
	return function(n, e) {
		return Wt += e, Wt >= It && (Ft = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), Ft.decode(), Wt = e), Ft.decode(kt().slice(n, n + e));
	}(n >>>= 0, e);
}
let pt = null;
function yt() {
	return null !== pt && pt.buffer === Ot.memory.buffer || (pt = new Uint32Array(Ot.memory.buffer)), pt;
}
let vt = null;
function kt() {
	return null !== vt && vt.buffer === Ot.memory.buffer || (vt = new Uint8Array(Ot.memory.buffer)), vt;
}
function St(n, e) {
	try {
		return n.apply(this, e);
	} catch (_) {
		const n = ot(_);
		Ot.__wbindgen_exn_store(n);
	}
}
function Rt(n) {
	return null == n;
}
function Ct(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	return yt().set(n, _ / 4), Nt = n.length, _;
}
function At(n, e) {
	const _ = e(1 * n.length, 1) >>> 0;
	return kt().set(n, _ / 1), Nt = n.length, _;
}
function Dt(n, e) {
	const _ = e(8 * n.length, 8) >>> 0;
	return mt().set(n, _ / 8), Nt = n.length, _;
}
function xt(n, e) {
	const _ = e(4 * n.length, 4) >>> 0;
	for (let t = 0; t < n.length; t++) {
		const e = ot(n[t]);
		bt().setUint32(_ + 4 * t, e, !0);
	}
	return Nt = n.length, _;
}
function Mt(n, e, _) {
	if (void 0 === _) {
		const _ = zt.encode(n), t = e(_.length, 1) >>> 0;
		return kt().subarray(t, t + _.length).set(_), Nt = _.length, t;
	}
	let t = n.length, r = e(t, 1) >>> 0;
	const i = kt();
	let o = 0;
	for (; o < t; o++) {
		const e = n.charCodeAt(o);
		if (e > 127) break;
		i[r + o] = e;
	}
	if (o !== t) {
		0 !== o && (n = n.slice(o)), r = _(r, t, t = o + 3 * n.length, 1) >>> 0;
		const e = kt().subarray(r + o, r + t);
		o += zt.encodeInto(n, e).written, r = _(r, t, o, 1) >>> 0;
	}
	return Nt = o, r;
}
function Pt(n) {
	const e = Ot.__wbindgen_externrefs.get(n);
	return Ot.__externref_table_dealloc(n), e;
}
let Ft = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
}) : void 0;
Ft && Ft.decode();
const It = 2146435072;
let Wt = 0;
const zt = "undefined" != typeof TextEncoder ? new TextEncoder() : void 0;
zt && (zt.encodeInto = function(n, e) {
	const _ = zt.encode(n);
	return e.set(_), {
		read: n.length,
		written: _.length
	};
});
let Ut, Ot, Nt = 0;
function Tt(n, e, _) {
	if (Ot = n.exports, Ut = e, ut = null, dt = null, ft = null, pt = null, vt = null, void 0 !== _ && ("number" != typeof _ || 0 === _ || _ % 65536 != 0)) throw new Error("invalid stack size");
	return Ot.__wbindgen_start(_), Ot;
}
function Gt(n, e) {
	if (void 0 !== Ot) return Ot;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const t = nt(e);
	return n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)), Tt(new WebAssembly.Instance(n, t), n, _);
}
async function Bt(n, e) {
	if (void 0 !== Ot) return Ot;
	let _;
	void 0 !== n && (Object.getPrototypeOf(n) === Object.prototype ? {module_or_path: n, memory: e, thread_stack_size: _} = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === n && (n = new URL("/sleep-scoring-wasm/assets/actours_threads_bg-Z7CrwpAI.wasm", "" + import.meta.url));
	const t = nt(e);
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
	return Tt(r, i, _);
}
export { e as Aw5Batch, _ as StreamChunkResult, t as StreamParseResult, r as actiwareIntervalStatistics, i as actiwareSleepIntervals, o as actiwareWakeThreshold, c as actoursVersion, l as aggregateEpochSeries, a as analysisDatesOf, s as analysisWindowBounds, w as analysisWindowSlice, g as analyzePhysicalActivityDay, u as classifyActimetricPreschoolWristRf, b as classifyActimetricPreschoolWristRfLagLead, d as classifyActimetricPreschoolWristRfLagLeadCalibrated, f as clippedUnionHours, m as compareNonwearDetectorMasks, h as computeAnglez5s, p as computeCircadian, y as computeCircadianTyped, v as computeEnmo5s, k as computeMimsUnit, S as computeMimsUnitDataframe, R as computeMimsUnitTimingBreakdown, C as computeMimsUnitValues, A as computeNightDifficulty, D as computeNightDifficultyTyped, x as computeNightSignals, M as computeNightSignalsTyped, P as computeSleepMetrics, F as configureComputeMemoryBudgetV1, I as consensusDisagreementDetail, W as consensusDisagreements, z as convertBedWakeDaysDiary, U as convertScreensRedcapDiary, O as csvBufferAppend, N as csvBufferClear, T as cutpointEpochCompatibility, G as cutpointToneCodes, B as cutpointsRefusal, j as cutpointsValid, Bt as default, E as describeColumns, L as detectDetachFromAccelerationG, V as detectDeviceFormat, H as detectGgirHasptVariant, X as detectHdcza, Z as detectHourClockJumpMs, q as detectNonwear, J as detectNonwearChoi2011, $ as detectNonwearChoi2011Bouts, Y as detectNonwearChoi2011Epoch, K as detectNonwearChoi2012, Q as detectNonwearChoi2012Bouts, nn as detectNonwearChoi2012Epoch, en as detectNonwearChoiBouts, _n as detectNonwearUnified, tn as detectNonwearUnifiedBatchTyped, rn as dstPlaceholderRuns, on as effectiveOverrideCutpoints, cn as epochAgreement, ln as epochRawData, an as epochWithBandpass, sn as epochsOverlapping, wn as executeHeroRuntime, gn as exportNapAggregate, un as exportPeriodFigures, bn as extractCapsense, dn as foldOntoGrid, fn as foldSampleBlocks, mn as foldSleepWakeVotes, hn as foldUniformOntoGrid, pn as fuseNonwearMasks, yn as generateActiwareRestIntervals, vn as getComputeCapabilitiesV1, kn as ggir5sWallClockMs, Sn as ggirAppConfigSummary, Rn as ggirConfigValues, Cn as ggirDayValidFraction, An as ggirDaysIncluded, Dn as ggirDiaryLogShape, xn as ggirDstPlaceholderCuts, Mn as ggirIncludeDayCriterionHours, Pn as ggirIndicesToWallClockMs, Fn as ggirLabelsToStoredMs, In as ggirManualNightClocks, Wn as ggirMilestoneVersion, zn as ggirNonwearApproach, Un as ggirPersonSummaries, On as ggirRerunProfiles, Nn as ggirSavedNonwearWindows, Tn as ggirSleeplogStoredClocks, Gn as ggirSptDurationHours, Bn as ggirSummaryDenominator, jn as gridOffsetWithin, En as identifyGgirRData, Ln as implausibilityReasons, Gt as initSync, Vn as initThreadPool, Hn as installPanicHook, Xn as interRaterReliability, Zn as irregularInternalDays, qn as isGeneactivFormat, Jn as linearMemoryBytesV1, $n as lstmSpectralFeatures30s, Yn as markerIndexRange, Kn as markerSleepOnsetOffset, Qn as medianGapSeconds, ne as metricWarnings, ee as midSleepClockHours, _e as neishabouriCounts, te as nextDate, re as nightIntervalOverlap, ie as nonwearContributors, oe as nonwearInSleepCounts, ce as nonwearSleepOverlap, le as nonwearWeightRuns, ae as normalizeCutpoints, se as parseActigraphCsv, we as parseActigraphCsvBuffered, ge as parseAw5, ue as parseCwa, be as parseEpochSeries, de as parseGeneactivBin, fe as parseGeneactivCsv, me as parseGeneactivCsvBuffered, he as parseGt3x, pe as participantValidity, ye as physicalActivitySeriesGrid, ve as placeMarkers, ke as placeMarkersBatch, Se as placeMarkersTyped, Re as placeNonwearMarkers, Ce as placeNonwearMarkersTyped, Ae as prepareCompactPipelineOutcomeV1, De as prepareCompactPipelineV1, xe as processGeneactivRaw, Me as processGt3xPart1, Pe as processGt3xPart1WithEpoch, Fe as processRawXyz, Ie as processRawXyzImputed, We as processRawXyzImputedWithEpoch, ze as projectLabelsOntoGrid, Ue as rasterizePeriods, Oe as readGgirMeta, Ne as readGgirReportCsv, Te as recommended_chunk_size_mb, Ge as reduceF64V1, Be as rerunGgirResults, je as resolveTimezone, Ee as restoredDstRuns, Le as reviewGgirResults, Ve as reviewNonwearFile, He as reviewNonwearTotals, Xe as roundCountStorage, Ze as runCompactPipelineOutcomeV1, qe as runCompactPipelineV1, Je as runFullPipelineOutcomeV1, $e as runFullPipelineV1, Ye as runGgirDeclaredEpochsV1, Ke as runGgirPart3, Qe as runMilestone, n_ as scoreAllDays, e_ as scoreColeKripke, __ as scoreConsensus, t_ as scoreConsensusMajority, r_ as scoreConsensusTyped, i_ as scoreEpochs, o_ as scoreEpochsTyped, c_ as scoreGgirHasib, l_ as scoreGgirHasibVariant, a_ as scoreGgirSib, s_ as scoreSadeh, w_ as screensRestIntervals, g_ as settleManualNonwearNights, u_ as sha256StreamFeed, b_ as sha256StreamFinish, d_ as sha256StreamStart, f_ as shiftDate, m_ as sleepRegularityIndex, h_ as sleepWakeScores, p_ as sourceLabelsWallClockMs, y_ as spanFiniteMean, v_ as spliceDstPlaceholders, k_ as startThreadPool, S_ as statesInPeriods, R_ as storedToGgirLabelsMs, C_ as streamParseFeed, A_ as streamParseFinish, D_ as streamParseFinishChunk, x_ as streamParseFinishChunkWithProgress, M_ as streamParseStart, P_ as streamParseStartData, F_ as streamParseStartWithEpoch, I_ as summarizeActimetricPreschoolWristRfClasses, W_ as summarizeExportGroups, z_ as summarizePhysicalActivityDays, U_ as summarizePhysicalActivityTrace, O_ as threadPoolReady, N_ as thresholdProbabilities, T_ as timeSemantics, G_ as timestampDiscontinuities, B_ as uniformTimestamps, j_ as utcDatesInSpan, E_ as utcDayIndex, L_ as validStateFraction, V_ as validWearDays, H_ as wallClockDstPlaceholders, X_ as wallClockLabels, Z_ as wallMaskOntoGgirGrid, q_ as wbg_rayon_PoolBuilder, J_ as wbg_rayon_start_worker, $_ as wearSiteHasptRouting, Y_ as weekendDates, K_ as windowCoverage, Q_ as zeroCrossingCounts };
