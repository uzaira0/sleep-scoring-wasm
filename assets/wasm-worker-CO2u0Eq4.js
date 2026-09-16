var e = Object.defineProperty, n = (n, t) => {
	let r = {};
	for (var i in n) e(r, i, {
		get: n[i],
		enumerable: !0
	});
	return t || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const t = Symbol("Comlink.proxy"), r = Symbol("Comlink.endpoint"), i = Symbol("Comlink.releaseProxy"), o = Symbol("Comlink.finalizer"), a = Symbol("Comlink.thrown"), s = (e) => "object" == typeof e && null !== e || "function" == typeof e, c = /* @__PURE__ */ new Map([["proxy", {
	canHandle: (e) => s(e) && e[t],
	serialize(e) {
		const { port1: n, port2: t } = new MessageChannel();
		return u(e, n), [t, [t]];
	},
	deserialize: (e) => (e.start(), function(e) {
		const n = /* @__PURE__ */ new Map();
		return e.addEventListener("message", function(e) {
			const { data: t } = e;
			if (!t || !t.id) return;
			const r = n.get(t.id);
			if (r) try {
				r(t);
			} finally {
				n.delete(t.id);
			}
		}), w(e, n, [], void 0);
	}(e))
}], ["throw", {
	canHandle: (e) => s(e) && a in e,
	serialize({ value: e }) {
		let n;
		return n = e instanceof Error ? {
			isError: !0,
			value: {
				message: e.message,
				name: e.name,
				stack: e.stack
			}
		} : {
			isError: !1,
			value: e
		}, [n, []];
	},
	deserialize(e) {
		if (e.isError) throw Object.assign(new Error(e.value.message), e.value);
		throw e.value;
	}
}]]);
function u(e, n = globalThis, r = ["*"]) {
	n.addEventListener("message", function i(s) {
		if (!s || !s.data) return;
		if (!function(e, n) {
			for (const t of e) {
				if (n === t || "*" === t) return !0;
				if (t instanceof RegExp && t.test(n)) return !0;
			}
			return !1;
		}(r, s.origin)) return void console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
		const { id: c, type: f, path: _ } = Object.assign({ path: [] }, s.data), d = (s.data.argumentList || []).map(h);
		let g;
		try {
			const n = _.slice(0, -1).reduce((e, n) => e[n], e), r = _.reduce((e, n) => e[n], e);
			switch (f) {
				case "GET":
					g = r;
					break;
				case "SET":
					n[_.slice(-1)[0]] = h(s.data.value), g = !0;
					break;
				case "APPLY":
					g = r.apply(n, d);
					break;
				case "CONSTRUCT":
					g = function(e) {
						return Object.assign(e, { [t]: !0 });
					}(new r(...d));
					break;
				case "ENDPOINT":
					{
						const { port1: n, port2: t } = new MessageChannel();
						u(e, t), g = b(n, [n]);
					}
					break;
				case "RELEASE":
					g = void 0;
					break;
				default: return;
			}
		} catch (w) {
			g = {
				value: w,
				[a]: 0
			};
		}
		Promise.resolve(g).catch((e) => ({
			value: e,
			[a]: 0
		})).then((t) => {
			const [r, a] = y(t);
			n.postMessage(Object.assign(Object.assign({}, r), { id: c }), a), "RELEASE" === f && (n.removeEventListener("message", i), l(n), o in e && "function" == typeof e[o] && e[o]());
		}).catch((e) => {
			const [t, r] = y({
				value: /* @__PURE__ */ new TypeError("Unserializable return value"),
				[a]: 0
			});
			n.postMessage(Object.assign(Object.assign({}, t), { id: c }), r);
		});
	}), n.start && n.start();
}
function l(e) {
	(function(e) {
		return "MessagePort" === e.constructor.name;
	})(e) && e.close();
}
function f(e) {
	if (e) throw new Error("Proxy has been released and is not useable");
}
function _(e) {
	return A(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
		l(e);
	});
}
const d = /* @__PURE__ */ new WeakMap(), g = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const n = (d.get(e) || 0) - 1;
	d.set(e, n), 0 === n && _(e);
});
function w(e, n, t = [], o = function() {}) {
	let a = !1;
	const s = new Proxy(o, {
		get(r, o) {
			if (f(a), o === i) return () => {
				(function(e) {
					g && g.unregister(e);
				})(s), _(e), n.clear(), a = !0;
			};
			if ("then" === o) {
				if (0 === t.length) return { then: () => s };
				const r = A(e, n, {
					type: "GET",
					path: t.map((e) => e.toString())
				}).then(h);
				return r.then.bind(r);
			}
			return w(e, n, [...t, o]);
		},
		set(r, i, o) {
			f(a);
			const [s, c] = y(o);
			return A(e, n, {
				type: "SET",
				path: [...t, i].map((e) => e.toString()),
				value: s
			}, c).then(h);
		},
		apply(i, o, s) {
			f(a);
			const c = t[t.length - 1];
			if (c === r) return A(e, n, { type: "ENDPOINT" }).then(h);
			if ("bind" === c) return w(e, n, t.slice(0, -1));
			const [u, l] = p(s);
			return A(e, n, {
				type: "APPLY",
				path: t.map((e) => e.toString()),
				argumentList: u
			}, l).then(h);
		},
		construct(r, i) {
			f(a);
			const [o, s] = p(i);
			return A(e, n, {
				type: "CONSTRUCT",
				path: t.map((e) => e.toString()),
				argumentList: o
			}, s).then(h);
		}
	});
	return function(e, n) {
		const t = (d.get(n) || 0) + 1;
		d.set(n, t), g && g.register(e, n, e);
	}(s, e), s;
}
function p(e) {
	const n = e.map(y);
	return [n.map((e) => e[0]), (t = n.map((e) => e[1]), Array.prototype.concat.apply([], t))];
	var t;
}
const m = /* @__PURE__ */ new WeakMap();
function b(e, n) {
	return m.set(e, n), e;
}
function y(e) {
	for (const [n, t] of c) if (t.canHandle(e)) {
		const [r, i] = t.serialize(e);
		return [{
			type: "HANDLER",
			name: n,
			value: r
		}, i];
	}
	return [{
		type: "RAW",
		value: e
	}, m.get(e) || []];
}
function h(e) {
	switch (e.type) {
		case "HANDLER": return c.get(e.name).deserialize(e.value);
		case "RAW": return e.value;
	}
}
function A(e, n, t, r) {
	return new Promise((i) => {
		const o = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		n.set(o, i), e.start && e.start(), e.postMessage(Object.assign({ id: o }, t), r);
	});
}
var v = n({
	StreamChunkResult: () => S,
	StreamParseResult: () => M,
	actoursVersion: () => E,
	aggregateEpochSeries: () => F,
	analyzePhysicalActivityDay: () => N,
	classifyActimetricPreschoolWristRf: () => k,
	classifyActimetricPreschoolWristRfLagLead: () => C,
	classifyActimetricPreschoolWristRfLagLeadCalibrated: () => x,
	computeAnglez5s: () => R,
	computeCircadian: () => U,
	computeEnmo5s: () => P,
	computeMimsUnit: () => O,
	computeMimsUnitDataframe: () => W,
	computeMimsUnitTimingBreakdown: () => z,
	computeMimsUnitValues: () => G,
	computeNightDifficulty: () => D,
	computeNightSignals: () => j,
	computeSleepMetrics: () => B,
	configureComputeMemoryBudgetV1: () => V,
	csvBufferAppend: () => I,
	csvBufferClear: () => $,
	default: () => Dn,
	detectDetachFromAccelerationG: () => T,
	detectDeviceFormat: () => J,
	detectGgirHasptVariant: () => H,
	detectHdcza: () => L,
	detectNonwear: () => X,
	detectNonwearChoi2011: () => Y,
	detectNonwearChoi2011Bouts: () => Z,
	detectNonwearChoi2011Epoch: () => q,
	detectNonwearChoi2012: () => K,
	detectNonwearChoi2012Bouts: () => Q,
	detectNonwearChoiBouts: () => ee,
	detectNonwearUnified: () => ne,
	epochRawData: () => te,
	epochWithBandpass: () => re,
	executeHeroRuntime: () => ie,
	extractCapsense: () => oe,
	getComputeCapabilitiesV1: () => ae,
	initSync: () => Gn,
	installPanicHook: () => se,
	isGeneactivFormat: () => ce,
	lstmSpectralFeatures30s: () => ue,
	neishabouriCounts: () => le,
	parseActigraphCsv: () => fe,
	parseActigraphCsvBuffered: () => _e,
	parseCwa: () => de,
	parseEpochSeries: () => ge,
	parseGeneactivBin: () => we,
	parseGeneactivCsv: () => pe,
	parseGeneactivCsvBuffered: () => me,
	parseGt3x: () => be,
	placeMarkers: () => ye,
	placeNonwearMarkers: () => he,
	prepareCompactPipelineOutcomeV1: () => Ae,
	prepareCompactPipelineV1: () => ve,
	processGeneactivRaw: () => Se,
	processGt3xFull: () => Me,
	processGt3xFullWithEpoch: () => Ee,
	processGt3xPart1: () => Fe,
	processGt3xPart1WithEpoch: () => Ne,
	processRawXyz: () => ke,
	processRawXyzImputed: () => Ce,
	processRawXyzImputedWithEpoch: () => xe,
	readGgirMeta: () => Re,
	recommended_chunk_size_mb: () => Ue,
	reduceF64V1: () => Pe,
	runCompactPipelineOutcomeV1: () => Oe,
	runCompactPipelineV1: () => We,
	runFullPipeline: () => ze,
	runFullPipelineOutcomeV1: () => Ge,
	runFullPipelineV1: () => De,
	runGgirFromEpoch: () => je,
	runMilestone: () => Be,
	scoreAllDays: () => Ve,
	scoreColeKripke: () => Ie,
	scoreConsensus: () => $e,
	scoreConsensusMajority: () => Te,
	scoreEpochs: () => Je,
	scoreGgirHasib: () => He,
	scoreGgirHasibVariant: () => Le,
	scoreGgirSib: () => Xe,
	scoreSadeh: () => Ye,
	sha256StreamFeed: () => Ze,
	sha256StreamFinish: () => qe,
	sha256StreamStart: () => Ke,
	streamParseFeed: () => Qe,
	streamParseFinish: () => en,
	streamParseFinishChunk: () => nn,
	streamParseStart: () => tn,
	streamParseStartData: () => rn,
	streamParseStartWithEpoch: () => on,
	summarizeActimetricPreschoolWristRfClasses: () => an,
	zeroCrossingCounts: () => sn
}), S = class e {
	static __wrap(n) {
		n >>>= 0;
		const t = Object.create(e.prototype);
		return t.__wbg_ptr = n, un.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return this.__wbg_ptr = 0, un.unregister(this), e;
	}
	free() {
		const e = this.__destroy_into_raw();
		On.__wbg_streamchunkresult_free(e, 0);
	}
	get anglex5s() {
		const e = On.streamchunkresult_anglex5s(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get angley5s() {
		const e = On.streamchunkresult_angley5s(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get anglez5s() {
		const e = On.streamchunkresult_anglez5s(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisX() {
		const e = On.streamchunkresult_axisX(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisY() {
		const e = On.streamchunkresult_axisY(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisZ() {
		const e = On.streamchunkresult_axisZ(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get canonicalPassDegraded() {
		return 0 !== On.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const e = On.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let n;
		return 0 !== e[0] && (n = hn(e[0], e[1]).slice(), On.__wbindgen_free(e[0], 1 * e[1], 1)), n;
	}
	get counts() {
		const e = On.streamchunkresult_counts(this.__wbg_ptr);
		var n = gn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get counts5s() {
		const e = On.streamchunkresult_counts5s(this.__wbg_ptr);
		var n = gn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get enmo5s() {
		const e = On.streamchunkresult_enmo5s(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get enmoa5s() {
		const e = On.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get headerRowsSkipped() {
		return On.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const e = On.streamchunkresult_mad5s(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnit() {
		const e = On.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnitAvailable() {
		return 0 !== On.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const e = On.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let n;
		return 0 !== e[0] && (n = hn(e[0], e[1]).slice(), On.__wbindgen_free(e[0], 1 * e[1], 1)), n;
	}
	get mimsUnitX() {
		const e = On.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnitY() {
		const e = On.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnitZ() {
		const e = On.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get rawRetentionDegraded() {
		return 0 !== On.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return On.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return On.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return On.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const e = On.streamchunkresult_tempCounts(this.__wbg_ptr);
		var n = gn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get temperature() {
		const e = On.streamchunkresult_temperature(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs() {
		const e = On.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs5s() {
		const e = On.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get vectorMagnitude() {
		const e = On.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get zcx60s() {
		const e = On.streamchunkresult_zcx60s(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get zcy60s() {
		const e = On.streamchunkresult_zcy60s(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get zcz60s() {
		const e = On.streamchunkresult_zcz60s(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
};
Symbol.dispose && (S.prototype[Symbol.dispose] = S.prototype.free);
var M = class e {
	static __wrap(n) {
		n >>>= 0;
		const t = Object.create(e.prototype);
		return t.__wbg_ptr = n, ln.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return this.__wbg_ptr = 0, ln.unregister(this), e;
	}
	free() {
		const e = this.__destroy_into_raw();
		On.__wbg_streamparseresult_free(e, 0);
	}
	get axisX() {
		const e = On.streamparseresult_axisX(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisY() {
		const e = On.streamparseresult_axisY(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisZ() {
		const e = On.streamparseresult_axisZ(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get canonicalPassDegraded() {
		return 0 !== On.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const e = On.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let n;
		return 0 !== e[0] && (n = hn(e[0], e[1]).slice(), On.__wbindgen_free(e[0], 1 * e[1], 1)), n;
	}
	get headerRowsSkipped() {
		return On.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== On.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return On.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return On.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const e = On.streamparseresult_temperature(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs() {
		const e = On.streamparseresult_timestampsMs(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get vectorMagnitude() {
		const e = On.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var n = dn(e[0], e[1]).slice();
		return On.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
};
function E() {
	let e, n;
	try {
		const t = On.actoursVersion();
		return e = t[0], n = t[1], hn(t[0], t[1]);
	} finally {
		On.__wbindgen_free(e, n, 1);
	}
}
function F(e) {
	const n = On.aggregateEpochSeries(e);
	if (n[2]) throw Cn(n[1]);
	return Cn(n[0]);
}
function N(e) {
	let n, t;
	try {
		const o = kn(e, On.__wbindgen_malloc, On.__wbindgen_realloc), a = Wn, s = On.analyzePhysicalActivityDay(o, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Cn(s[2]);
		return n = r, t = i, hn(r, i);
	} finally {
		On.__wbindgen_free(n, t, 1);
	}
}
function k(e, n, t, r) {
	const i = Nn(e, On.__wbindgen_malloc), o = Wn, a = Nn(n, On.__wbindgen_malloc), s = Wn, c = Nn(t, On.__wbindgen_malloc), u = Wn, l = On.classifyActimetricPreschoolWristRf(i, o, a, s, c, u, r);
	if (l[3]) throw Cn(l[2]);
	var f = wn(l[0], l[1]).slice();
	return On.__wbindgen_free(l[0], 1 * l[1], 1), f;
}
function C(e, n, t, r) {
	const i = Nn(e, On.__wbindgen_malloc), o = Wn, a = Nn(n, On.__wbindgen_malloc), s = Wn, c = Nn(t, On.__wbindgen_malloc), u = Wn, l = On.classifyActimetricPreschoolWristRfLagLead(i, o, a, s, c, u, r);
	if (l[3]) throw Cn(l[2]);
	var f = wn(l[0], l[1]).slice();
	return On.__wbindgen_free(l[0], 1 * l[1], 1), f;
}
function x(e, n, t, r) {
	const i = Nn(e, On.__wbindgen_malloc), o = Wn, a = Nn(n, On.__wbindgen_malloc), s = Wn, c = Nn(t, On.__wbindgen_malloc), u = Wn, l = On.classifyActimetricPreschoolWristRfLagLeadCalibrated(i, o, a, s, c, u, r);
	if (l[3]) throw Cn(l[2]);
	var f = wn(l[0], l[1]).slice();
	return On.__wbindgen_free(l[0], 1 * l[1], 1), f;
}
function R(e, n, t, r) {
	const i = Nn(e, On.__wbindgen_malloc), o = Wn, a = Nn(n, On.__wbindgen_malloc), s = Wn, c = Nn(t, On.__wbindgen_malloc), u = Wn, l = On.computeAnglez5s(i, o, a, s, c, u, r);
	var f = dn(l[0], l[1]).slice();
	return On.__wbindgen_free(l[0], 8 * l[1], 8), f;
}
function U(e) {
	let n, t;
	try {
		const o = kn(e, On.__wbindgen_malloc, On.__wbindgen_realloc), a = Wn, s = On.computeCircadian(o, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Cn(s[2]);
		return n = r, t = i, hn(r, i);
	} finally {
		On.__wbindgen_free(n, t, 1);
	}
}
function P(e, n, t, r) {
	const i = Nn(e, On.__wbindgen_malloc), o = Wn, a = Nn(n, On.__wbindgen_malloc), s = Wn, c = Nn(t, On.__wbindgen_malloc), u = Wn, l = On.computeEnmo5s(i, o, a, s, c, u, r);
	var f = dn(l[0], l[1]).slice();
	return On.__wbindgen_free(l[0], 8 * l[1], 8), f;
}
function O(e, n, t, r, i) {
	const o = Nn(e, On.__wbindgen_malloc), a = Wn, s = Nn(n, On.__wbindgen_malloc), c = Wn, u = Nn(t, On.__wbindgen_malloc), l = Wn, f = On.computeMimsUnit(o, a, s, c, u, l, r, i);
	if (f[2]) throw Cn(f[1]);
	return Cn(f[0]);
}
function W(e, n, t, r, i) {
	const o = Nn(e, On.__wbindgen_malloc), a = Wn, s = Nn(n, On.__wbindgen_malloc), c = Wn, u = Nn(t, On.__wbindgen_malloc), l = Wn, f = Nn(r, On.__wbindgen_malloc), _ = Wn, d = On.computeMimsUnitDataframe(o, a, s, c, u, l, f, _, i);
	if (d[2]) throw Cn(d[1]);
	return Cn(d[0]);
}
function z(e, n, t, r, i) {
	const o = Nn(e, On.__wbindgen_malloc), a = Wn, s = Nn(n, On.__wbindgen_malloc), c = Wn, u = Nn(t, On.__wbindgen_malloc), l = Wn, f = On.computeMimsUnitTimingBreakdown(o, a, s, c, u, l, r, i);
	if (f[2]) throw Cn(f[1]);
	return Cn(f[0]);
}
function G(e, n, t, r, i) {
	const o = Nn(e, On.__wbindgen_malloc), a = Wn, s = Nn(n, On.__wbindgen_malloc), c = Wn, u = Nn(t, On.__wbindgen_malloc), l = Wn, f = On.computeMimsUnitValues(o, a, s, c, u, l, r, i);
	if (f[3]) throw Cn(f[2]);
	var _ = dn(f[0], f[1]).slice();
	return On.__wbindgen_free(f[0], 8 * f[1], 8), _;
}
function D(e) {
	let n, t;
	try {
		const o = kn(e, On.__wbindgen_malloc, On.__wbindgen_realloc), a = Wn, s = On.computeNightDifficulty(o, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Cn(s[2]);
		return n = r, t = i, hn(r, i);
	} finally {
		On.__wbindgen_free(n, t, 1);
	}
}
function j(e) {
	let n, t;
	try {
		const o = kn(e, On.__wbindgen_malloc, On.__wbindgen_realloc), a = Wn, s = On.computeNightSignals(o, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Cn(s[2]);
		return n = r, t = i, hn(r, i);
	} finally {
		On.__wbindgen_free(n, t, 1);
	}
}
function B(e, n, t) {
	const r = Fn(e, On.__wbindgen_malloc), i = Wn, o = Nn(n, On.__wbindgen_malloc), a = Wn, s = On.computeSleepMetrics(r, i, o, a, t);
	if (s[2]) throw Cn(s[1]);
	return Cn(s[0]);
}
function V(e) {
	const n = On.configureComputeMemoryBudgetV1(e);
	if (n[2]) throw Cn(n[1]);
	return Cn(n[0]);
}
function I(e) {
	const n = Fn(e, On.__wbindgen_malloc), t = Wn;
	On.csvBufferAppend(n, t);
}
function $(e) {
	On.csvBufferClear(e);
}
function T(e, n) {
	const t = Nn(e, On.__wbindgen_malloc), r = Wn, i = Nn(n, On.__wbindgen_malloc), o = Wn, a = On.detectDetachFromAccelerationG(t, r, i, o);
	if (a[3]) throw Cn(a[2]);
	var s = wn(a[0], a[1]).slice();
	return On.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function J(e, n) {
	let t, r;
	try {
		const i = Fn(e, On.__wbindgen_malloc), o = Wn, a = kn(n, On.__wbindgen_malloc, On.__wbindgen_realloc), s = Wn, c = On.detectDeviceFormat(i, o, a, s);
		return t = c[0], r = c[1], hn(c[0], c[1]);
	} finally {
		On.__wbindgen_free(t, r, 1);
	}
}
function H(e) {
	const n = On.detectGgirHasptVariant(e);
	if (n[2]) throw Cn(n[1]);
	return Cn(n[0]);
}
function L(e, n, t, r) {
	const i = Nn(e, On.__wbindgen_malloc), o = Wn;
	var a = En(n) ? 0 : kn(n, On.__wbindgen_malloc, On.__wbindgen_realloc), s = Wn, c = En(t) ? 0 : Nn(t, On.__wbindgen_malloc), u = Wn, l = En(r) ? 0 : Nn(r, On.__wbindgen_malloc), f = Wn;
	return On.detectHdcza(i, o, a, s, c, u, l, f);
}
function X(e) {
	const n = Nn(e, On.__wbindgen_malloc), t = Wn, r = On.detectNonwear(n, t);
	var i = wn(r[0], r[1]).slice();
	return On.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Y(e) {
	const n = Nn(e, On.__wbindgen_malloc), t = Wn, r = On.detectNonwearChoi2011(n, t);
	var i = wn(r[0], r[1]).slice();
	return On.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Z(e) {
	const n = Nn(e, On.__wbindgen_malloc), t = Wn, r = On.detectNonwearChoi2011Bouts(n, t);
	if (r[2]) throw Cn(r[1]);
	return Cn(r[0]);
}
function q(e, n) {
	const t = Nn(e, On.__wbindgen_malloc), r = Wn, i = On.detectNonwearChoi2011Epoch(t, r, n);
	if (i[3]) throw Cn(i[2]);
	var o = wn(i[0], i[1]).slice();
	return On.__wbindgen_free(i[0], 1 * i[1], 1), o;
}
function K(e) {
	const n = Nn(e, On.__wbindgen_malloc), t = Wn, r = On.detectNonwearChoi2012(n, t);
	var i = wn(r[0], r[1]).slice();
	return On.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Q(e) {
	const n = Nn(e, On.__wbindgen_malloc), t = Wn, r = On.detectNonwearChoi2012Bouts(n, t);
	if (r[2]) throw Cn(r[1]);
	return Cn(r[0]);
}
function ee(e) {
	const n = Nn(e, On.__wbindgen_malloc), t = Wn, r = On.detectNonwearChoiBouts(n, t);
	if (r[2]) throw Cn(r[1]);
	return Cn(r[0]);
}
function ne(e) {
	let n, t;
	try {
		const o = kn(e, On.__wbindgen_malloc, On.__wbindgen_realloc), a = Wn, s = On.detectNonwearUnified(o, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Cn(s[2]);
		return n = r, t = i, hn(r, i);
	} finally {
		On.__wbindgen_free(n, t, 1);
	}
}
function te(e, n, t, r, i) {
	const o = Nn(e, On.__wbindgen_malloc), a = Wn, s = Nn(n, On.__wbindgen_malloc), c = Wn, u = Nn(t, On.__wbindgen_malloc), l = Wn, f = Nn(r, On.__wbindgen_malloc), _ = Wn, d = On.epochRawData(o, a, s, c, u, l, f, _, i);
	if (d[2]) throw Cn(d[1]);
	return Cn(d[0]);
}
function re(e, n, t) {
	const r = Nn(e, On.__wbindgen_malloc), i = Wn, o = Nn(n, On.__wbindgen_malloc), a = Wn, s = On.epochWithBandpass(r, i, o, a, t);
	if (s[2]) throw Cn(s[1]);
	return Cn(s[0]);
}
function ie(e, n) {
	let t, r;
	try {
		const a = kn(e, On.__wbindgen_malloc, On.__wbindgen_realloc), s = Wn, c = kn(n, On.__wbindgen_malloc, On.__wbindgen_realloc), u = Wn, l = On.executeHeroRuntime(a, s, c, u);
		var i = l[0], o = l[1];
		if (l[3]) throw i = 0, o = 0, Cn(l[2]);
		return t = i, r = o, hn(i, o);
	} finally {
		On.__wbindgen_free(t, r, 1);
	}
}
function oe(e) {
	const n = Fn(e, On.__wbindgen_malloc), t = Wn, r = On.extractCapsense(n, t);
	if (r[2]) throw Cn(r[1]);
	return Cn(r[0]);
}
function ae() {
	const e = On.getComputeCapabilitiesV1();
	if (e[2]) throw Cn(e[1]);
	return Cn(e[0]);
}
function se() {
	On.installPanicHook();
}
function ce(e) {
	const n = Fn(e, On.__wbindgen_malloc), t = Wn;
	return 0 !== On.isGeneactivFormat(n, t);
}
function ue(e, n, t, r) {
	const i = Nn(e, On.__wbindgen_malloc), o = Wn, a = Nn(n, On.__wbindgen_malloc), s = Wn, c = Nn(t, On.__wbindgen_malloc), u = Wn, l = On.lstmSpectralFeatures30s(i, o, a, s, c, u, r);
	if (l[2]) throw Cn(l[1]);
	return Cn(l[0]);
}
function le(e, n, t, r, i) {
	const o = Nn(e, On.__wbindgen_malloc), a = Wn, s = Nn(n, On.__wbindgen_malloc), c = Wn, u = Nn(t, On.__wbindgen_malloc), l = Wn, f = On.neishabouriCounts(o, a, s, c, u, l, r, i);
	if (f[2]) throw Cn(f[1]);
	return Cn(f[0]);
}
function fe(e, n) {
	const t = Fn(e, On.__wbindgen_malloc), r = Wn, i = On.parseActigraphCsv(t, r, n);
	if (i[2]) throw Cn(i[1]);
	return Cn(i[0]);
}
function _e(e) {
	const n = On.parseActigraphCsvBuffered(e);
	if (n[2]) throw Cn(n[1]);
	return Cn(n[0]);
}
function de(e) {
	const n = Fn(e, On.__wbindgen_malloc), t = Wn, r = On.parseCwa(n, t);
	if (r[2]) throw Cn(r[1]);
	return Cn(r[0]);
}
function ge(e, n) {
	const t = Fn(e, On.__wbindgen_malloc), r = Wn, i = kn(n, On.__wbindgen_malloc, On.__wbindgen_realloc), o = Wn, a = On.parseEpochSeries(t, r, i, o);
	if (a[2]) throw Cn(a[1]);
	return Cn(a[0]);
}
function we(e) {
	const n = Fn(e, On.__wbindgen_malloc), t = Wn, r = On.parseGeneactivBin(n, t);
	if (r[2]) throw Cn(r[1]);
	return Cn(r[0]);
}
function pe(e) {
	const n = Fn(e, On.__wbindgen_malloc), t = Wn, r = On.parseGeneactivCsv(n, t);
	if (r[2]) throw Cn(r[1]);
	return Cn(r[0]);
}
function me() {
	const e = On.parseGeneactivCsvBuffered();
	if (e[2]) throw Cn(e[1]);
	return Cn(e[0]);
}
function be(e) {
	const n = Fn(e, On.__wbindgen_malloc), t = Wn, r = On.parseGt3x(n, t);
	if (r[2]) throw Cn(r[1]);
	return Cn(r[0]);
}
function ye(e) {
	let n, t;
	try {
		const o = kn(e, On.__wbindgen_malloc, On.__wbindgen_realloc), a = Wn, s = On.placeMarkers(o, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Cn(s[2]);
		return n = r, t = i, hn(r, i);
	} finally {
		On.__wbindgen_free(n, t, 1);
	}
}
function he(e) {
	let n, t;
	try {
		const o = kn(e, On.__wbindgen_malloc, On.__wbindgen_realloc), a = Wn, s = On.placeNonwearMarkers(o, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Cn(s[2]);
		return n = r, t = i, hn(r, i);
	} finally {
		On.__wbindgen_free(n, t, 1);
	}
}
function Ae(e) {
	const n = On.prepareCompactPipelineOutcomeV1(e);
	if (n[2]) throw Cn(n[1]);
	return Cn(n[0]);
}
function ve(e) {
	const n = On.prepareCompactPipelineV1(e);
	if (n[2]) throw Cn(n[1]);
	return Cn(n[0]);
}
function Se(e, n, t, r, i, o, a) {
	const s = Nn(e, On.__wbindgen_malloc), c = Wn, u = Nn(n, On.__wbindgen_malloc), l = Wn, f = Nn(t, On.__wbindgen_malloc), _ = Wn, d = Nn(r, On.__wbindgen_malloc), g = Wn;
	var w = En(a) ? 0 : kn(a, On.__wbindgen_malloc, On.__wbindgen_realloc), p = Wn;
	const m = On.processGeneactivRaw(s, c, u, l, f, _, d, g, i, o, w, p);
	if (m[2]) throw Cn(m[1]);
	return Cn(m[0]);
}
function Me(e) {
	const n = Fn(e, On.__wbindgen_malloc), t = Wn, r = On.processGt3xFull(n, t);
	if (r[2]) throw Cn(r[1]);
	return Cn(r[0]);
}
function Ee(e, n) {
	const t = Fn(e, On.__wbindgen_malloc), r = Wn, i = On.processGt3xFullWithEpoch(t, r, n);
	if (i[2]) throw Cn(i[1]);
	return Cn(i[0]);
}
function Fe(e) {
	const n = Fn(e, On.__wbindgen_malloc), t = Wn, r = On.processGt3xPart1(n, t);
	if (r[2]) throw Cn(r[1]);
	return Cn(r[0]);
}
function Ne(e, n) {
	const t = Fn(e, On.__wbindgen_malloc), r = Wn, i = On.processGt3xPart1WithEpoch(t, r, n);
	if (i[2]) throw Cn(i[1]);
	return Cn(i[0]);
}
function ke(e, n, t, r, i, o) {
	const a = Nn(e, On.__wbindgen_malloc), s = Wn, c = Nn(n, On.__wbindgen_malloc), u = Wn, l = Nn(t, On.__wbindgen_malloc), f = Wn;
	var _ = En(o) ? 0 : kn(o, On.__wbindgen_malloc, On.__wbindgen_realloc), d = Wn;
	const g = On.processRawXyz(a, s, c, u, l, f, r, i, _, d);
	if (g[2]) throw Cn(g[1]);
	return Cn(g[0]);
}
function Ce(e, n, t, r, i, o) {
	const a = Nn(e, On.__wbindgen_malloc), s = Wn, c = Nn(n, On.__wbindgen_malloc), u = Wn, l = Nn(t, On.__wbindgen_malloc), f = Wn, _ = Nn(r, On.__wbindgen_malloc), d = Wn;
	var g = En(o) ? 0 : kn(o, On.__wbindgen_malloc, On.__wbindgen_realloc), w = Wn;
	const p = On.processRawXyzImputed(a, s, c, u, l, f, _, d, i, g, w);
	if (p[2]) throw Cn(p[1]);
	return Cn(p[0]);
}
function xe(e, n, t, r, i, o, a) {
	const s = Nn(e, On.__wbindgen_malloc), c = Wn, u = Nn(n, On.__wbindgen_malloc), l = Wn, f = Nn(t, On.__wbindgen_malloc), _ = Wn, d = Nn(r, On.__wbindgen_malloc), g = Wn;
	var w = En(o) ? 0 : kn(o, On.__wbindgen_malloc, On.__wbindgen_realloc), p = Wn;
	const m = On.processRawXyzImputedWithEpoch(s, c, u, l, f, _, d, g, i, w, p, a);
	if (m[2]) throw Cn(m[1]);
	return Cn(m[0]);
}
function Re(e) {
	const n = Fn(e, On.__wbindgen_malloc), t = Wn, r = On.readGgirMeta(n, t);
	if (r[2]) throw Cn(r[1]);
	return Cn(r[0]);
}
function Ue() {
	return On.recommended_chunk_size_mb() >>> 0;
}
function Pe(e, n) {
	const t = Nn(e, On.__wbindgen_malloc), r = Wn, i = kn(n, On.__wbindgen_malloc, On.__wbindgen_realloc), o = Wn, a = On.reduceF64V1(t, r, i, o);
	if (a[2]) throw Cn(a[1]);
	return a[0];
}
function Oe(e) {
	const n = On.runCompactPipelineOutcomeV1(e);
	if (n[2]) throw Cn(n[1]);
	return Cn(n[0]);
}
function We(e) {
	const n = On.runCompactPipelineV1(e);
	if (n[2]) throw Cn(n[1]);
	return Cn(n[0]);
}
function ze(e, n) {
	const t = On.runFullPipeline(e, n);
	if (t[2]) throw Cn(t[1]);
	return Cn(t[0]);
}
function Ge(e) {
	const n = On.runFullPipelineOutcomeV1(e);
	if (n[2]) throw Cn(n[1]);
	return Cn(n[0]);
}
function De(e) {
	const n = On.runFullPipelineV1(e);
	if (n[2]) throw Cn(n[1]);
	return Cn(n[0]);
}
function je(e, n) {
	const t = On.runGgirFromEpoch(e, n);
	if (t[2]) throw Cn(t[1]);
	return Cn(t[0]);
}
function Be(e) {
	const n = Fn(e, On.__wbindgen_malloc), t = Wn, r = On.runMilestone(n, t);
	if (r[2]) throw Cn(r[1]);
	return Cn(r[0]);
}
function Ve(e) {
	const n = On.scoreAllDays(e);
	if (n[2]) throw Cn(n[1]);
	return Cn(n[0]);
}
function Ie(e, n) {
	const t = Nn(e, On.__wbindgen_malloc), r = Wn, i = On.scoreColeKripke(t, r, n);
	var o = wn(i[0], i[1]).slice();
	return On.__wbindgen_free(i[0], 1 * i[1], 1), o;
}
function $e(e) {
	let n, t;
	try {
		const o = kn(e, On.__wbindgen_malloc, On.__wbindgen_realloc), a = Wn, s = On.scoreConsensus(o, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Cn(s[2]);
		return n = r, t = i, hn(r, i);
	} finally {
		On.__wbindgen_free(n, t, 1);
	}
}
function Te(e) {
	const n = On.scoreConsensusMajority(e);
	if (n[2]) throw Cn(n[1]);
	return Cn(n[0]);
}
function Je(e) {
	let n, t;
	try {
		const o = kn(e, On.__wbindgen_malloc, On.__wbindgen_realloc), a = Wn, s = On.scoreEpochs(o, a);
		var r = s[0], i = s[1];
		if (s[3]) throw r = 0, i = 0, Cn(s[2]);
		return n = r, t = i, hn(r, i);
	} finally {
		On.__wbindgen_free(n, t, 1);
	}
}
function He(e) {
	const n = Nn(e, On.__wbindgen_malloc), t = Wn, r = On.scoreGgirHasib(n, t);
	var i = wn(r[0], r[1]).slice();
	return On.__wbindgen_free(r[0], 1 * r[1], 1), i;
}
function Le(e) {
	const n = On.scoreGgirHasibVariant(e);
	if (n[2]) throw Cn(n[1]);
	return Cn(n[0]);
}
function Xe(e, n, t) {
	const r = Nn(e, On.__wbindgen_malloc), i = Wn, o = Nn(n, On.__wbindgen_malloc), a = Wn, s = On.scoreGgirSib(r, i, o, a, t);
	if (s[2]) throw Cn(s[1]);
	return Cn(s[0]);
}
function Ye(e, n) {
	const t = Nn(e, On.__wbindgen_malloc), r = Wn, i = On.scoreSadeh(t, r, n);
	var o = wn(i[0], i[1]).slice();
	return On.__wbindgen_free(i[0], 1 * i[1], 1), o;
}
function Ze(e) {
	const n = Fn(e, On.__wbindgen_malloc), t = Wn, r = On.sha256StreamFeed(n, t);
	if (r[1]) throw Cn(r[0]);
}
function qe() {
	let e, n;
	try {
		const i = On.sha256StreamFinish();
		var t = i[0], r = i[1];
		if (i[3]) throw t = 0, r = 0, Cn(i[2]);
		return e = t, n = r, hn(t, r);
	} finally {
		On.__wbindgen_free(e, n, 1);
	}
}
function Ke() {
	On.sha256StreamStart();
}
function Qe(e) {
	const n = Fn(e, On.__wbindgen_malloc), t = Wn, r = On.streamParseFeed(n, t);
	if (r[2]) throw Cn(r[1]);
	return r[0] >>> 0;
}
function en() {
	const e = On.streamParseFinish();
	if (e[2]) throw Cn(e[1]);
	return M.__wrap(e[0]);
}
function nn() {
	const e = On.streamParseFinishChunk();
	if (e[2]) throw Cn(e[1]);
	return S.__wrap(e[0]);
}
function tn(e, n) {
	const t = On.streamParseStart(e, n);
	if (t[1]) throw Cn(t[0]);
}
function rn(e, n) {
	const t = On.streamParseStartData(e, n);
	if (t[1]) throw Cn(t[0]);
}
function on(e, n, t) {
	const r = On.streamParseStartWithEpoch(e, n, t);
	if (r[1]) throw Cn(r[0]);
}
function an(e, n) {
	const t = Fn(e, On.__wbindgen_malloc), r = Wn, i = On.summarizeActimetricPreschoolWristRfClasses(t, r, n);
	if (i[2]) throw Cn(i[1]);
	return Cn(i[0]);
}
function sn(e, n, t, r, i) {
	const o = Nn(e, On.__wbindgen_malloc), a = Wn, s = Nn(n, On.__wbindgen_malloc), c = Wn, u = Nn(t, On.__wbindgen_malloc), l = Wn, f = On.zeroCrossingCounts(o, a, s, c, u, l, r, i);
	if (f[2]) throw Cn(f[1]);
	return Cn(f[0]);
}
function cn() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(e, n) {
				return Error(hn(e, n));
			},
			__wbg_Number_32bf70a599af1d4b: function(e) {
				return Number(e);
			},
			__wbg_String_8564e559799eccda: function(e, n) {
				const t = kn(String(n), On.__wbindgen_malloc, On.__wbindgen_realloc), r = Wn;
				mn().setInt32(e + 4, r, !0), mn().setInt32(e + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(e, n) {
				const t = "bigint" == typeof n ? n : void 0;
				mn().setBigInt64(e + 8, En(t) ? BigInt(0) : t, !0), mn().setInt32(e + 0, !En(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(e) {
				const n = "boolean" == typeof e ? e : void 0;
				return En(n) ? 16777215 : n ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(e, n) {
				const t = kn(_n(n), On.__wbindgen_malloc, On.__wbindgen_realloc), r = Wn;
				mn().setInt32(e + 4, r, !0), mn().setInt32(e + 0, t, !0);
			},
			__wbg___wbindgen_in_a5d8b22e52b24dd1: function(e, n) {
				return e in n;
			},
			__wbg___wbindgen_is_bigint_ec25c7f91b4d9e93: function(e) {
				return "bigint" == typeof e;
			},
			__wbg___wbindgen_is_function_3baa9db1a987f47d: function(e) {
				return "function" == typeof e;
			},
			__wbg___wbindgen_is_null_52ff4ec04186736f: function(e) {
				return null === e;
			},
			__wbg___wbindgen_is_object_63322ec0cd6ea4ef: function(e) {
				return "object" == typeof e && null !== e;
			},
			__wbg___wbindgen_is_string_6df3bf7ef1164ed3: function(e) {
				return "string" == typeof e;
			},
			__wbg___wbindgen_is_undefined_29a43b4d42920abd: function(e) {
				return void 0 === e;
			},
			__wbg___wbindgen_jsval_eq_d3465d8a07697228: function(e, n) {
				return e === n;
			},
			__wbg___wbindgen_jsval_loose_eq_cac3565e89b4134c: function(e, n) {
				return e == n;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(e, n) {
				const t = "number" == typeof n ? n : void 0;
				mn().setFloat64(e + 8, En(t) ? 0 : t, !0), mn().setInt32(e + 0, !En(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(e, n) {
				const t = "string" == typeof n ? n : void 0;
				var r = En(t) ? 0 : kn(t, On.__wbindgen_malloc, On.__wbindgen_realloc), i = Wn;
				mn().setInt32(e + 4, i, !0), mn().setInt32(e + 0, r, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(e, n) {
				throw new Error(hn(e, n));
			},
			__wbg_call_14b169f759b26747: function() {
				return Mn(function(e, n) {
					return e.call(n);
				}, arguments);
			},
			__wbg_done_9158f7cc8751ba32: function(e) {
				return e.done;
			},
			__wbg_entries_e0b73aa8571ddb56: function(e) {
				return Object.entries(e);
			},
			__wbg_error_a6fa202b58aa1cd3: function(e, n) {
				let t, r;
				try {
					t = e, r = n, console.error(hn(e, n));
				} finally {
					On.__wbindgen_free(t, r, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(e) {
				return Array.from(e);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return Mn(function(e, n) {
					return Reflect.get(e, n);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return Mn(function(e, n) {
					return Reflect.get(e, n);
				}, arguments);
			},
			__wbg_get_8360291721e2339f: function(e, n) {
				return e[n >>> 0];
			},
			__wbg_get_unchecked_17f53dad852b9588: function(e, n) {
				return e[n >>> 0];
			},
			__wbg_get_with_ref_key_6412cf3094599694: function(e, n) {
				return e[n];
			},
			__wbg_instanceof_ArrayBuffer_7c8433c6ed14ffe3: function(e) {
				let n;
				try {
					n = e instanceof ArrayBuffer;
				} catch (t) {
					n = !1;
				}
				return n;
			},
			__wbg_instanceof_Float64Array_aa32a9a18a521df4: function(e) {
				let n;
				try {
					n = e instanceof Float64Array;
				} catch (t) {
					n = !1;
				}
				return n;
			},
			__wbg_instanceof_Map_1b76fd4635be43eb: function(e) {
				let n;
				try {
					n = e instanceof Map;
				} catch (t) {
					n = !1;
				}
				return n;
			},
			__wbg_instanceof_Uint8Array_152ba1f289edcf3f: function(e) {
				let n;
				try {
					n = e instanceof Uint8Array;
				} catch (t) {
					n = !1;
				}
				return n;
			},
			__wbg_instanceof_Window_cc64c86c8ef9e02b: function(e) {
				let n;
				try {
					n = e instanceof Window;
				} catch (t) {
					n = !1;
				}
				return n;
			},
			__wbg_isArray_c3109d14ffc06469: function(e) {
				return Array.isArray(e);
			},
			__wbg_isSafeInteger_4fc213d1989d6d2a: function(e) {
				return Number.isSafeInteger(e);
			},
			__wbg_isView_39f565da64ddb4dd: function(e) {
				return ArrayBuffer.isView(e);
			},
			__wbg_iterator_013bc09ec998c2a7: function() {
				return Symbol.iterator;
			},
			__wbg_length_3d4ecd04bd8d22f1: function(e) {
				return e.length;
			},
			__wbg_length_9f1775224cf1d815: function(e) {
				return e.length;
			},
			__wbg_navigator_bc077756492232c5: function(e) {
				return e.navigator;
			},
			__wbg_new_0c7403db6e782f19: function(e) {
				return new Uint8Array(e);
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
			__wbg_new_from_slice_3115b094b1002246: function(e, n) {
				return new Float64Array(dn(e, n));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(e, n) {
				return new Uint8Array(wn(e, n));
			},
			__wbg_new_with_length_5cfd777b51078805: function(e) {
				return new Float64Array(e >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(e) {
				return new Uint8Array(e >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return Mn(function(e) {
					return e.next();
				}, arguments);
			},
			__wbg_next_7646edaa39458ef7: function(e) {
				return e.next;
			},
			__wbg_now_a9b7df1cbee90986: function() {
				return Date.now();
			},
			__wbg_ownKeys_0231887680f0f945: function() {
				return Mn(function(e) {
					return Reflect.ownKeys(e);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(e, n, t) {
				Uint8Array.prototype.set.call(wn(e, n), t);
			},
			__wbg_push_471a5b068a5295f6: function(e, n) {
				return e.push(n);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return Mn(function(e, n, t) {
					return Reflect.set(e, n, t);
				}, arguments);
			},
			__wbg_set_3bf1de9fab0cd644: function(e, n, t) {
				e[n >>> 0] = t;
			},
			__wbg_set_6be42768c690e380: function(e, n, t) {
				e[n] = t;
			},
			__wbg_set_index_2ca12d8345f872b3: function(e, n, t) {
				e[n >>> 0] = t;
			},
			__wbg_set_index_805dd976c110cd28: function(e, n, t) {
				e[n >>> 0] = t;
			},
			__wbg_slice_30ddef84546fd9d0: function(e, n, t) {
				return e.slice(n >>> 0, t >>> 0);
			},
			__wbg_slice_fcdcd53ca169108d: function(e, n, t) {
				return e.slice(n >>> 0, t >>> 0);
			},
			__wbg_stack_3b0d974bbf31e44f: function(e, n) {
				const t = kn(n.stack, On.__wbindgen_malloc, On.__wbindgen_realloc), r = Wn;
				mn().setInt32(e + 4, r, !0), mn().setInt32(e + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const e = "undefined" == typeof global ? null : global;
				return En(e) ? 0 : fn(e);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const e = "undefined" == typeof globalThis ? null : globalThis;
				return En(e) ? 0 : fn(e);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const e = "undefined" == typeof self ? null : self;
				return En(e) ? 0 : fn(e);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const e = "undefined" == typeof window ? null : window;
				return En(e) ? 0 : fn(e);
			},
			__wbg_value_ee3a06f4579184fa: function(e) {
				return e.value;
			},
			__wbindgen_cast_0000000000000001: function(e) {
				return e;
			},
			__wbindgen_cast_0000000000000002: function(e) {
				return e;
			},
			__wbindgen_cast_0000000000000003: function(e, n) {
				return wn(e, n);
			},
			__wbindgen_cast_0000000000000004: function(e, n) {
				return hn(e, n);
			},
			__wbindgen_cast_0000000000000005: function(e) {
				return BigInt.asUintN(64, e);
			},
			__wbindgen_init_externref_table: function() {
				const e = On.__wbindgen_externrefs, n = e.grow(4);
				e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
			}
		}
	};
}
Symbol.dispose && (M.prototype[Symbol.dispose] = M.prototype.free);
const un = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((e) => On.__wbg_streamchunkresult_free(e >>> 0, 1)), ln = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((e) => On.__wbg_streamparseresult_free(e >>> 0, 1));
function fn(e) {
	const n = On.__externref_table_alloc();
	return On.__wbindgen_externrefs.set(n, e), n;
}
function _n(e) {
	const n = typeof e;
	if ("number" == n || "boolean" == n || null == e) return `${e}`;
	if ("string" == n) return `"${e}"`;
	if ("symbol" == n) {
		const n = e.description;
		return null == n ? "Symbol" : `Symbol(${n})`;
	}
	if ("function" == n) {
		const n = e.name;
		return "string" == typeof n && n.length > 0 ? `Function(${n})` : "Function";
	}
	if (Array.isArray(e)) {
		const n = e.length;
		let t = "[";
		n > 0 && (t += _n(e[0]));
		for (let r = 1; r < n; r++) t += ", " + _n(e[r]);
		return t += "]", t;
	}
	const t = /\[object ([^\]]+)\]/.exec(toString.call(e));
	let r;
	if (!(t && t.length > 1)) return toString.call(e);
	if (r = t[1], "Object" == r) try {
		return "Object(" + JSON.stringify(e) + ")";
	} catch (i) {
		return "Object";
	}
	return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : r;
}
function dn(e, n) {
	return e >>>= 0, yn().subarray(e / 8, e / 8 + n);
}
function gn(e, n) {
	return e >>>= 0, (null !== An && 0 !== An.byteLength || (An = new Uint32Array(On.memory.buffer)), An).subarray(e / 4, e / 4 + n);
}
function wn(e, n) {
	return e >>>= 0, Sn().subarray(e / 1, e / 1 + n);
}
let pn = null;
function mn() {
	return (null === pn || !0 === pn.buffer.detached || void 0 === pn.buffer.detached && pn.buffer !== On.memory.buffer) && (pn = new DataView(On.memory.buffer)), pn;
}
let bn = null;
function yn() {
	return null !== bn && 0 !== bn.byteLength || (bn = new Float64Array(On.memory.buffer)), bn;
}
function hn(e, n) {
	return function(e, n) {
		return Un += n, Un >= Rn && (xn = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), xn.decode(), Un = n), xn.decode(Sn().subarray(e, e + n));
	}(e >>>= 0, n);
}
let An = null, vn = null;
function Sn() {
	return null !== vn && 0 !== vn.byteLength || (vn = new Uint8Array(On.memory.buffer)), vn;
}
function Mn(e, n) {
	try {
		return e.apply(this, n);
	} catch (t) {
		const e = fn(t);
		On.__wbindgen_exn_store(e);
	}
}
function En(e) {
	return null == e;
}
function Fn(e, n) {
	const t = n(1 * e.length, 1) >>> 0;
	return Sn().set(e, t / 1), Wn = e.length, t;
}
function Nn(e, n) {
	const t = n(8 * e.length, 8) >>> 0;
	return yn().set(e, t / 8), Wn = e.length, t;
}
function kn(e, n, t) {
	if (void 0 === t) {
		const t = Pn.encode(e), r = n(t.length, 1) >>> 0;
		return Sn().subarray(r, r + t.length).set(t), Wn = t.length, r;
	}
	let r = e.length, i = n(r, 1) >>> 0;
	const o = Sn();
	let a = 0;
	for (; a < r; a++) {
		const n = e.charCodeAt(a);
		if (n > 127) break;
		o[i + a] = n;
	}
	if (a !== r) {
		0 !== a && (e = e.slice(a)), i = t(i, r, r = a + 3 * e.length, 1) >>> 0;
		const n = Sn().subarray(i + a, i + r);
		a += Pn.encodeInto(e, n).written, i = t(i, r, a, 1) >>> 0;
	}
	return Wn = a, i;
}
function Cn(e) {
	const n = On.__wbindgen_externrefs.get(e);
	return On.__externref_table_dealloc(e), n;
}
let xn = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
xn.decode();
const Rn = 2146435072;
let Un = 0;
const Pn = new TextEncoder();
"encodeInto" in Pn || (Pn.encodeInto = function(e, n) {
	const t = Pn.encode(e);
	return n.set(t), {
		read: e.length,
		written: t.length
	};
});
let On, Wn = 0;
function zn(e, n) {
	return On = e.exports, pn = null, bn = null, An = null, vn = null, On.__wbindgen_start(), On;
}
function Gn(e) {
	if (void 0 !== On) return On;
	void 0 !== e && (Object.getPrototypeOf(e) === Object.prototype ? {module: e} = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const n = cn();
	return e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)), zn(new WebAssembly.Instance(e, n));
}
async function Dn(e) {
	if (void 0 !== On) return On;
	void 0 !== e && (Object.getPrototypeOf(e) === Object.prototype ? {module_or_path: e} = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === e && (e = new URL("/sleep-scoring-wasm/assets/actours_bg-Bvm80hwQ.wasm", "" + import.meta.url));
	const n = cn();
	("string" == typeof e || "function" == typeof Request && e instanceof Request || "function" == typeof URL && e instanceof URL) && (e = fetch(e));
	const { instance: t, module: r } = await async function(e, n) {
		if ("function" == typeof Response && e instanceof Response) {
			if ("function" == typeof WebAssembly.instantiateStreaming) try {
				return await WebAssembly.instantiateStreaming(e, n);
			} catch (t) {
				if (!e.ok || !function(e) {
					switch (e) {
						case "basic":
						case "cors":
						case "default": return !0;
					}
					return !1;
				}(e.type) || "application/wasm" === e.headers.get("Content-Type")) throw t;
				console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t);
			}
			const r = await e.arrayBuffer();
			return await WebAssembly.instantiate(r, n);
		}
		{
			const t = await WebAssembly.instantiate(e, n);
			return t instanceof WebAssembly.Instance ? {
				instance: t,
				module: e
			} : t;
		}
	}(await e, n);
	return zn(t);
}
let jn = null;
const Bn = /unreachable|RuntimeError|out of bounds|wasm/i;
function Vn(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function In(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function $n(e) {
	const n = In(e), t = n?.analysis_date, r = In(n?.intrinsic), i = r?.state;
	if (!n || "string" != typeof t || 0 === t.length || !r || "string" != typeof i || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(i)) return null;
	const o = r.score, a = r.verdict, s = r.infinite_reason, c = {}, u = [], l = n.per_guider;
	if (Array.isArray(l)) for (const w of l) {
		const e = In(w);
		if (!e) continue;
		u.push(e);
		const n = e.guider;
		if ("string" != typeof n) continue;
		const t = e.confidence;
		Object.defineProperty(c, n, {
			value: "number" == typeof t && Number.isFinite(t) ? t : null,
			enumerable: !0,
			configurable: !0,
			writable: !0
		});
	}
	const f = In(r.features), _ = f && Array.isArray(f.feature_values) ? f : null, d = In(r.legacy_complexity_features) ?? (null === _ ? f : null) ?? {}, g = n.computed_at;
	return {
		difficulty: "number" == typeof o && Number.isFinite(o) ? o : null,
		state: i,
		verdict: "string" == typeof a ? a : null,
		infiniteReason: "string" == typeof s ? s : null,
		confidenceByGuider: c,
		features: d,
		featureVector: _,
		perGuider: u,
		computedAt: "string" == typeof g ? g : null,
		canonicalResult: n,
		canonicalIntrinsic: r
	};
}
[
	"observed",
	"not_collected",
	"structurally_absent",
	"not_applicable",
	"nonresponse",
	"technically_unusable",
	"corrupt",
	"censored",
	"below_detection",
	"redacted",
	"mapping_unresolved",
	"unknown"
].filter((e) => "observed" !== e && "technically_unusable" !== e && "corrupt" !== e);
const Tn = [
	"skipped_disabled",
	"recalibrated",
	"identity_fallback_no_valid_fit",
	"identity_fallback_error_increased",
	"candidate_retained_below_preferred_quality"
];
function Jn(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function Hn(e, n) {
	const t = Array.isArray(e) ? e : [], r = (e) => Jn(t[e]) ?? n;
	return [
		r(0),
		r(1),
		r(2)
	];
}
function Ln(e, n) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		scale: Hn(t.scale, n ? 1 : 0),
		offset: Hn(t.offset, 0),
		temperatureOffset: Hn(t.temperatureOffset, 0),
		errorStart: Jn(t.errorStart),
		errorEnd: Jn(t.errorEnd),
		fitAttempted: !0 === t.fitAttempted,
		numPoints: Math.max(0, Math.round(Jn(t.numPoints) ?? 0)),
		hoursUsed: Jn(t.hoursUsed) ?? 0,
		success: !0 === t.success,
		message: "string" == typeof t.message ? t.message : ""
	};
}
function Xn(e) {
	if ("object" != typeof e || null === e) return null;
	const n = e, t = n.disposition;
	if ("string" != typeof t || !Tn.includes(t)) return null;
	const r = Ln(n, !0);
	return {
		...r,
		disposition: t,
		observed: "observed" in n ? Ln(n.observed, !0) : r,
		applied: "applied" in n ? Ln(n.applied, !0) : r
	};
}
const Yn = 1073741824, Zn = "actours.compute.v1", qn = "actours-corrected-3.3.7-v2";
function Kn(e) {
	return "number" == typeof e ? e : "nan" === e ? NaN : "positive_infinity" === e ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
}
function Qn(e) {
	return null === e ? null : Kn(e);
}
let et = null, nt = !1;
function tt() {
	return et || (et = (async () => {
		const e = await Promise.resolve().then(() => v);
		return await e.default(), "configureComputeMemoryBudgetV1" in e && "function" == typeof e.configureComputeMemoryBudgetV1 && e.configureComputeMemoryBudgetV1(function() {
			const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
			if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return Yn;
			const n = Math.floor(1024 * e * 1024 * 1024 / 4);
			return Math.min(2147483648, Math.max(Yn, n));
		}()), "initThreadPool" in e && "function" == typeof e.initThreadPool && "undefined" != typeof SharedArrayBuffer && "undefined" != typeof navigator && navigator.hardwareConcurrency > 1 && await e.initThreadPool(navigator.hardwareConcurrency), nt || (function(e) {
			const n = /* @__PURE__ */ new Float64Array(16), t = new Uint8Array(e.scoreSadeh(n, -4));
			if (16 !== t.length) throw new Error(`WASM integrity check failed: scoreSadeh length ${t.length}, expected 16`);
			for (let r = 0; r < 16; r++) if (1 !== t[r]) throw new Error(`WASM integrity check failed: scoreSadeh(zeros)[${r}] = ${t[r]}, expected 1. Bundle may be corrupt — clear the site cache and reload.`);
		}(e), nt = !0), e;
	})().catch((e) => {
		throw et = null, e;
	})), et;
}
function rt(e, n = "computeMimsUnit") {
	if ("object" != typeof e || null === e) throw new Error(`${n}: unexpected WASM return shape — got ${typeof e}`);
	const t = e, r = it(t.mimsUnit);
	if (!r) throw new Error(`${n}: missing mimsUnit array — got ${JSON.stringify(e)}`);
	const i = t.epochSeconds;
	if ("number" != typeof i || !Number.isFinite(i) || i <= 0) throw new Error(`${n}: missing positive epochSeconds — got ${JSON.stringify(e)}`);
	const o = (e) => it(t[e]) ?? void 0, a = {
		mimsUnit: r,
		epochSeconds: i
	}, s = o("mimsUnitX");
	s && (a.mimsUnitX = s);
	const c = o("mimsUnitY");
	c && (a.mimsUnitY = c);
	const u = o("mimsUnitZ");
	u && (a.mimsUnitZ = u);
	const l = o("headerTimeStamp");
	l && (a.headerTimeStamp = l);
	const f = o("mimsOrientationTimestamp");
	f && (a.mimsOrientationTimestamp = f);
	const _ = o("mimsOrientationXAngle");
	_ && (a.mimsOrientationXAngle = _);
	const d = o("mimsOrientationYAngle");
	d && (a.mimsOrientationYAngle = d);
	const g = o("mimsOrientationZAngle");
	return g && (a.mimsOrientationZAngle = g), a;
}
function it(e) {
	if (e instanceof Float64Array) return new Float64Array(e);
	if (ArrayBuffer.isView(e)) {
		const n = e;
		if ("number" == typeof n.length) return new Float64Array(Array.from(n, Number));
	}
	return Array.isArray(e) ? new Float64Array(e) : null;
}
function ot(e) {
	if (e instanceof Uint8Array) return new Uint8Array(e);
	if (ArrayBuffer.isView(e)) {
		const n = e;
		if ("number" == typeof n.length) return new Uint8Array(Array.from(n, Number));
	}
	return Array.isArray(e) ? new Uint8Array(e) : null;
}
function at(e, n) {
	if ("object" != typeof e || null === e) throw new Error(`${n}: unexpected WASM return shape — got ${JSON.stringify(e)}`);
	const t = e, r = {}, i = [];
	for (const o of Object.keys(t)) {
		const e = t[o];
		if (Array.isArray(e)) {
			const n = new Float64Array(e);
			r[o] = n, i.push(n.buffer);
		} else r[o] = e;
	}
	return b(r, i);
}
function st(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function ct(e, n) {
	const t = e.computeNightSignals;
	if ("function" != typeof t) return console.warn("[wasm-worker] computeNightSignals is not present in this WASM bundle — night-signal detail degrades to empty."), { byDate: {} };
	let r;
	try {
		r = JSON.parse(t(function(e) {
			return JSON.stringify(function(e) {
				const n = Vn(e.config), t = Vn(n?.signals) ?? n;
				return {
					...t ? { config: t } : {},
					days: e.days
				};
			}(e));
		}(n)));
	} catch {
		return console.warn("[wasm-worker] computeNightSignals returned invalid JSON — degrading to empty."), { byDate: {} };
	}
	return function(e) {
		const n = {}, t = /* @__PURE__ */ new Set(), r = st(e)?.signals;
		if (!Array.isArray(r)) return { byDate: n };
		for (const i of r) {
			const e = st(i), r = e?.analysis_date, o = e?.epoch_length_seconds;
			if (!e || "string" != typeof r || 0 === r.length || !Number.isInteger(o) || o <= 0) return { byDate: {} };
			if (t.has(r)) return { byDate: {} };
			t.add(r), Object.defineProperty(n, r, {
				value: e,
				enumerable: !0,
				configurable: !0,
				writable: !0
			});
		}
		return { byDate: n };
	}(r);
}
const ut = {
	day_summaries: [],
	days_with_signal: 0
};
function lt(e, n, t) {
	const r = e[n];
	if ("function" != typeof r) return console.warn(`[wasm-worker] ${n} is not present in this WASM bundle — local marker placement degrades to null. Rebuild the actours WASM crate to enable it.`), null;
	const i = r(JSON.stringify(t));
	try {
		return JSON.parse(i);
	} catch {
		return console.warn(`[wasm-worker] ${n} returned invalid JSON — degrading to null.`), null;
	}
}
function ft(e, n) {
	const t = "object" == typeof e && null !== e ? e : {}, r = t.nonwear, i = Array.isArray(r) ? r.map((e) => e ? 1 : 0) : null, o = t.elementSeconds, a = "number" == typeof o && Number.isFinite(o) && o > 0 ? o : n, s = Boolean(t.available) && null !== i, c = t.reason;
	return {
		nonwear: s ? i : null,
		conformance: "string" == typeof t.conformance ? t.conformance : s ? "conformant" : "unavailable",
		available: s,
		reason: "string" == typeof c ? c : null,
		elementSeconds: a
	};
}
function _t(e) {
	const { sampleRate: n } = e.signals;
	return null == n ? e : {
		...e,
		config: {
			...e.config ?? {},
			sampleRate: n
		}
	};
}
"undefined" != typeof self && "undefined" == typeof window && (function() {
	const e = console.error.bind(console);
	console.error = (...n) => {
		try {
			const t = n.map((e) => "string" == typeof e ? e : e instanceof Error ? e.stack ?? e.message : String(e)).join(" ");
			if (/panicked at|RuntimeError|unreachable/i.test(t)) {
				const n = /([A-Za-z0-9_.-]+\.rs):(\d+)/.exec(t);
				jn = n ? `Rust trap at ${n[1]}:${n[2]}` : "Rust runtime trap", e("[wasm-worker] WASM runtime trap captured");
				return;
			}
		} catch {}
		e(...n);
	};
}(), u(function(e) {
	const n = {};
	for (const t of Object.keys(e)) {
		const r = e[t];
		if ("function" != typeof r) {
			n[t] = r;
			continue;
		}
		const i = r;
		n[t] = async (...e) => {
			jn = null;
			try {
				return await i(...e);
			} catch (n) {
				const e = n instanceof Error ? n.message : String(n);
				if (jn && Bn.test(e)) throw new Error(`WASM panic in ${t}(): ${jn}`, { cause: n });
				throw n;
			}
		};
	}
	return n;
}({
	async readDiaryWorkbook(e, n) {
		const { readDiaryWorkbookSheet: t } = await import("./diary-xlsx-adapter-DthwMDD1.js");
		return t(e, n);
	},
	detectNonwearUnified: async (e) => function(e, n) {
		const t = n.signals.epochSeconds, r = (e) => ({
			nonwear: null,
			conformance: "unavailable",
			available: !1,
			reason: e,
			elementSeconds: t
		}), i = e.detectNonwearUnified;
		if ("function" != typeof i) return console.warn("[wasm-worker] detectNonwearUnified is not present in this WASM bundle — local raw nonwear degrades to unavailable. Rebuild the actours WASM crate to enable it."), r("detectNonwearUnified export missing (stale WASM bundle)");
		let o;
		try {
			o = JSON.parse(i(JSON.stringify(_t(n))));
		} catch {
			return console.warn("[wasm-worker] detectNonwearUnified returned invalid JSON — degrading to unavailable."), r("detectNonwearUnified returned invalid JSON");
		}
		return ft(o, t);
	}(await tt(), e),
	detectNonwearUnifiedBatch: async (e, n) => function(e, n, t) {
		const r = t.epochSeconds, i = {}, o = (e) => ({
			nonwear: null,
			conformance: "unavailable",
			available: !1,
			reason: e,
			elementSeconds: r
		}), a = e.detectNonwearUnified;
		if ("function" != typeof a) {
			console.warn("[wasm-worker] detectNonwearUnified is not present in this WASM bundle — local raw nonwear degrades to unavailable. Rebuild the actours WASM crate to enable it.");
			for (const e of n) i[e] = o("detectNonwearUnified export missing (stale WASM bundle)");
			return i;
		}
		const s = a, c = _t({
			algorithm: "",
			signals: t
		}), u = JSON.stringify(c.signals), l = void 0 === c.config ? null : JSON.stringify(c.config);
		for (const _ of n) {
			const e = null === l ? `{"algorithm":${JSON.stringify(_)},"signals":${u}}` : `{"algorithm":${JSON.stringify(_)},"signals":${u},"config":${l}}`;
			let n;
			try {
				n = JSON.parse(s(e));
			} catch (f) {
				console.warn(`[wasm-worker] detectNonwearUnified(${_}) returned invalid JSON — degrading to unavailable.`, f), i[_] = o("detectNonwearUnified returned invalid JSON");
				continue;
			}
			i[_] = ft(n, r);
		}
		return i;
	}(await tt(), e, n),
	scoreEpochs: async (e) => function(e, n) {
		const t = n.signals.epochSeconds, r = (e) => ({
			sleepWake: null,
			conformance: "unavailable",
			available: !1,
			reason: e,
			elementSeconds: t
		}), i = e.scoreEpochs;
		if ("function" != typeof i) return console.warn("[wasm-worker] scoreEpochs is not present in this WASM bundle — unified local scoring degrades to unavailable. Rebuild the actours WASM crate to enable it."), r("scoreEpochs export missing (stale WASM bundle)");
		let o;
		try {
			o = JSON.parse(i(JSON.stringify(_t(n))));
		} catch {
			return console.warn("[wasm-worker] scoreEpochs returned invalid JSON — degrading to unavailable."), r("scoreEpochs returned invalid JSON");
		}
		return function(e, n) {
			const t = "object" == typeof e && null !== e ? e : {}, r = t.sleepWake, i = Array.isArray(r) ? r.map((e) => e ? 1 : 0) : null, o = t.elementSeconds, a = "number" == typeof o && Number.isFinite(o) && o > 0 ? o : n, s = Boolean(t.available) && null !== i, c = t.reason;
			return {
				sleepWake: s ? i : null,
				conformance: "string" == typeof t.conformance ? t.conformance : s ? "conformant" : "unavailable",
				available: s,
				reason: "string" == typeof c ? c : null,
				elementSeconds: a
			};
		}(o, t);
	}(await tt(), e),
	async scoreSadeh(e, n) {
		const t = await tt(), r = new Uint8Array(t.scoreSadeh(e, n));
		return b(r, [r.buffer]);
	},
	async scoreColeKripke(e, n) {
		const t = await tt(), r = new Uint8Array(t.scoreColeKripke(e, n));
		return b(r, [r.buffer]);
	},
	async detectNonwear(e) {
		const n = await tt(), t = new Uint8Array(n.detectNonwear(e));
		return b(t, [t.buffer]);
	},
	async detectNonwearChoi2011(e, n = 60) {
		const t = await tt(), r = new Uint8Array("function" == typeof t.detectNonwearChoi2011Epoch ? t.detectNonwearChoi2011Epoch(e, n) : t.detectNonwearChoi2011(e));
		return b(r, [r.buffer]);
	},
	parseActigraphCsv: async (e, n) => at((await tt()).parseActigraphCsv(e, n), "parseActigraphCsv"),
	parseGeneactivCsv: async (e) => at((await tt()).parseGeneactivCsv(e), "parseGeneactivCsv"),
	isGeneactivFormat: async (e) => (await tt()).isGeneactivFormat(e),
	async csvBufferClear(e) {
		(await tt()).csvBufferClear(e);
	},
	async csvBufferAppend(e) {
		(await tt()).csvBufferAppend(e);
	},
	parseGeneactivCsvBuffered: async () => at((await tt()).parseGeneactivCsvBuffered(), "parseGeneactivCsvBuffered"),
	parseActigraphCsvBuffered: async (e) => at((await tt()).parseActigraphCsvBuffered(e), "parseActigraphCsvBuffered"),
	async sha256Start() {
		await tt(), Ke();
	},
	async sha256Feed(e) {
		await tt(), Ze(e);
	},
	sha256Finish: async () => (await tt(), qe()),
	async streamParseStart(e, n, t = 60) {
		const r = await tt();
		"function" == typeof r.streamParseStartWithEpoch ? r.streamParseStartWithEpoch(e, n, t) : r.streamParseStart(e, n);
	},
	async streamParseStartData(e, n) {
		(await tt()).streamParseStartData(e, n);
	},
	streamParseFeed: async (e) => (await tt()).streamParseFeed(e),
	async streamParseFinish() {
		const e = (await tt()).streamParseFinish();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinish: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const n = new Float64Array(e.timestampsMs), t = new Float64Array(e.axisX), r = new Float64Array(e.axisY), i = new Float64Array(e.axisZ), o = new Float64Array(e.vectorMagnitude), a = new Float64Array(e.temperature);
		return b({
			timestampsMs: n,
			axisX: t,
			axisY: r,
			axisZ: i,
			vectorMagnitude: o,
			temperature: a,
			sampleFrequency: e.sampleFrequency,
			headerRowsSkipped: e.headerRowsSkipped
		}, [
			n.buffer,
			t.buffer,
			r.buffer,
			i.buffer,
			o.buffer,
			a.buffer
		]);
	},
	async streamParseFinishChunk() {
		const e = (await tt()).streamParseFinishChunk();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinishChunk: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const n = new Float64Array(e.timestampsMs), t = new Float64Array(e.axisX), r = new Float64Array(e.axisY), i = new Float64Array(e.axisZ), o = new Float64Array(e.vectorMagnitude), a = new Float64Array(e.temperature), s = new Uint32Array(e.counts), c = new Uint32Array(e.tempCounts), u = new Float64Array(e.timestampsMs5s), l = new Float64Array(e.enmo5s), f = new Float64Array(e.anglez5s), _ = new Float64Array(e.anglex5s ?? 0), d = new Float64Array(e.angley5s ?? 0), g = new Float64Array(e.mad5s ?? 0), w = new Float64Array(e.enmoa5s ?? 0), p = e, m = new Float64Array(p.zcx60s ?? []), y = new Float64Array(p.zcy60s ?? []), h = new Float64Array(p.zcz60s ?? []), A = new Uint32Array(e.counts5s), v = e, S = new Float64Array(v.mimsUnit ?? []), M = new Float64Array(v.mimsUnitX ?? []), E = new Float64Array(v.mimsUnitY ?? []), F = new Float64Array(v.mimsUnitZ ?? []), N = e;
		return b({
			timestampsMs: n,
			axisX: t,
			axisY: r,
			axisZ: i,
			vectorMagnitude: o,
			temperature: a,
			counts: s,
			tempCounts: c,
			timestampsMs5s: u,
			enmo5s: l,
			anglez5s: f,
			anglex5s: _,
			angley5s: d,
			mad5s: g,
			enmoa5s: w,
			zcx60s: m,
			zcy60s: y,
			zcz60s: h,
			counts5s: A,
			mimsUnit: S,
			mimsUnitX: M,
			mimsUnitY: E,
			mimsUnitZ: F,
			sampleFrequency: e.sampleFrequency,
			headerRowsSkipped: e.headerRowsSkipped,
			rowsDropped: e.rowsDropped,
			rawRetentionDegraded: N.rawRetentionDegraded ?? !1,
			canonicalPassDegraded: N.canonicalPassDegraded ?? !1,
			canonicalPassReason: N.canonicalPassReason ?? null
		}, [
			n.buffer,
			t.buffer,
			r.buffer,
			i.buffer,
			o.buffer,
			a.buffer,
			s.buffer,
			c.buffer,
			u.buffer,
			l.buffer,
			f.buffer,
			_.buffer,
			d.buffer,
			g.buffer,
			w.buffer,
			m.buffer,
			y.buffer,
			h.buffer,
			A.buffer,
			S.buffer,
			M.buffer,
			E.buffer,
			F.buffer
		]);
	},
	async neishabouriCounts(e, n, t, r, i) {
		const o = (await tt()).neishabouriCounts(e, n, t, r, i), a = "object" == typeof o && null !== o ? o : null, s = a ? it(a.x) : null, c = a ? it(a.y) : null, u = a ? it(a.z) : null, l = a ? it(a.vm) : null;
		if (!(s && c && u && l)) throw new Error(`neishabouriCounts: unexpected WASM return shape — got ${JSON.stringify(o)}`);
		return b({
			x: s,
			y: c,
			z: u,
			vm: l
		}, [
			s.buffer,
			c.buffer,
			u.buffer,
			l.buffer
		]);
	},
	async zeroCrossingCounts(e, n, t, r, i) {
		const o = (await tt()).zeroCrossingCounts(e, n, t, r, i), a = "object" == typeof o && null !== o ? o : null, s = a ? it(a.zcx) : null, c = a ? it(a.zcy) : null, u = a ? it(a.zcz) : null;
		if (!s || !c || !u) throw new Error(`zeroCrossingCounts: unexpected WASM return shape — got ${JSON.stringify(o)}`);
		return b({
			zcx: s,
			zcy: c,
			zcz: u
		}, [
			s.buffer,
			c.buffer,
			u.buffer
		]);
	},
	async computeMimsUnit(e, n, t, r, i = {}) {
		const o = await tt();
		if (!("computeMimsUnit" in o) || "function" != typeof o.computeMimsUnit) throw new Error("computeMimsUnit: current actours WASM bundle does not export MIMS_UNIT processing");
		const a = rt(o.computeMimsUnit(e, n, t, r, i), "computeMimsUnit");
		return b(a, [
			a.mimsUnit.buffer,
			a.mimsUnitX?.buffer,
			a.mimsUnitY?.buffer,
			a.mimsUnitZ?.buffer,
			a.headerTimeStamp?.buffer,
			a.mimsOrientationTimestamp?.buffer,
			a.mimsOrientationXAngle?.buffer,
			a.mimsOrientationYAngle?.buffer,
			a.mimsOrientationZAngle?.buffer
		].filter((e) => e instanceof ArrayBuffer));
	},
	async computeMimsUnitDataframe(e, n, t, r, i = {}) {
		const o = await tt();
		if (!("computeMimsUnitDataframe" in o) || "function" != typeof o.computeMimsUnitDataframe) throw new Error("computeMimsUnitDataframe: current actours WASM bundle does not export MIMS_UNIT processing");
		const a = rt(o.computeMimsUnitDataframe(e, n, t, r, i), "computeMimsUnitDataframe");
		return b(a, [
			a.mimsUnit.buffer,
			a.mimsUnitX?.buffer,
			a.mimsUnitY?.buffer,
			a.mimsUnitZ?.buffer,
			a.headerTimeStamp?.buffer,
			a.mimsOrientationTimestamp?.buffer,
			a.mimsOrientationXAngle?.buffer,
			a.mimsOrientationYAngle?.buffer,
			a.mimsOrientationZAngle?.buffer
		].filter((e) => e instanceof ArrayBuffer));
	},
	async classifyActimetricPreschoolWristRf(e, n, t, r) {
		const i = await tt(), o = "function" == typeof i.classifyActimetricPreschoolWristRfLagLead ? i.classifyActimetricPreschoolWristRfLagLead : "function" == typeof i.classifyActimetricPreschoolWristRf ? i.classifyActimetricPreschoolWristRf : "function" == typeof i.actimetricPreschoolWristRfClasses ? i.actimetricPreschoolWristRfClasses : "function" == typeof i.predictActimetricPreschoolWristRfClasses ? i.predictActimetricPreschoolWristRfClasses : null;
		if (!o) throw new Error("classifyActimetricPreschoolWristRf: current actours WASM bundle does not export actimetric preschool wrist RF inference");
		const a = function(e, n = "classifyActimetricPreschoolWristRf") {
			const t = ot(e);
			if (t) return {
				classes: t,
				epochSeconds: 15
			};
			const r = "object" == typeof e && null !== e ? e : null, i = r ? ot(r.classes) ?? ot(r.activityClasses) ?? ot(r.predictions) ?? ot(r.activity) : null;
			if (!i) throw new Error(`${n}: unexpected WASM return shape — expected Uint8Array or { classes }`);
			const o = "number" == typeof r?.epochSeconds && Number.isFinite(r.epochSeconds) ? r.epochSeconds : "number" == typeof r?.epoch_seconds && Number.isFinite(r.epoch_seconds) ? r.epoch_seconds : 15, a = "string" == typeof r?.classifier ? r.classifier : void 0, s = "string" == typeof r?.model ? r.model : void 0;
			return {
				classes: i,
				epochSeconds: o,
				...a ? { classifier: a } : {},
				...s ? { model: s } : {}
			};
		}(o(e, n, t, r), "classifyActimetricPreschoolWristRf");
		return b(a, [a.classes.buffer]);
	},
	async lstmSpectralFeatures30s(e, n, t, r) {
		const i = await tt(), o = i.lstmSpectralFeatures30s ?? i.spectralFeatures30s;
		if ("function" != typeof o) throw new Error("LSTM spectral feature extractor is not available in this WASM bundle");
		const a = o(e, n, t, r), s = "object" == typeof a && null !== a ? a : null, c = function(e) {
			if (e instanceof Float32Array) return new Float32Array(e);
			if (ArrayBuffer.isView(e)) {
				const n = e;
				if ("number" == typeof n.length) return new Float32Array(Array.from(n, Number));
			}
			return Array.isArray(e) ? new Float32Array(e) : null;
		}(s?.features ?? a), u = "number" == typeof s?.bins ? s.bins : 30, l = "number" == typeof s?.channels ? s.channels : 4, f = "number" == typeof s?.epochs ? s.epochs : c ? Math.floor(c.length / (u * l)) : 0;
		if (!c || f * u * l !== c.length) throw new Error(`lstmSpectralFeatures30s: unexpected WASM return shape — got ${JSON.stringify(a)}`);
		return b({
			features: c,
			epochs: f,
			bins: u,
			channels: l
		}, [c.buffer]);
	},
	async scoreConsensus(e, n) {
		const t = await tt(), r = JSON.stringify({
			strategy: e,
			label_sequences: n.map((e) => Array.from(e))
		}), i = JSON.parse(t.scoreConsensus(r)), o = null != i && "object" == typeof i ? i.consensus : void 0;
		if (!Array.isArray(o)) throw new Error(`scoreConsensus: unexpected WASM return shape — got ${JSON.stringify(i)}`);
		const a = new Uint8Array(o);
		return b(a, [a.buffer]);
	},
	async computeSleepMetrics(e, n, t) {
		const r = (await tt()).computeSleepMetrics(e, n, t);
		if (null == r || "object" != typeof r || "number" != typeof r.totalSleepTimeMinutes || "number" != typeof r.sleepEfficiency) throw new Error(`computeSleepMetrics: unexpected WASM return shape ${JSON.stringify(r)}`);
		return r;
	},
	computeFileDifficulty: async (e) => function(e, n) {
		const t = e.computeNightDifficulty;
		if ("function" != typeof t) return console.warn("[wasm-worker] computeNightDifficulty is not present in this WASM bundle — night difficulty degrades to empty. Rebuild the actours WASM crate to enable it."), { byDate: {} };
		const r = t(function(e) {
			return JSON.stringify(e);
		}(n));
		let i;
		try {
			i = JSON.parse(r);
		} catch {
			return console.warn("[wasm-worker] computeNightDifficulty returned invalid JSON — degrading to empty."), { byDate: {} };
		}
		return function(e) {
			const n = {}, t = /* @__PURE__ */ new Set(), r = st(e)?.results;
			if (!Array.isArray(r)) return { byDate: n };
			for (const i of r) {
				const e = $n(i);
				if (!e) return { byDate: {} };
				const r = e.canonicalResult.analysis_date;
				if (t.has(r)) return { byDate: {} };
				t.add(r), Object.defineProperty(n, r, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				});
			}
			return { byDate: n };
		}(i);
	}(await tt(), e),
	computeFileSignals: async (e) => ct(await tt(), e),
	computeCircadian: async (e) => function(e, n) {
		const t = e.computeCircadian;
		if ("function" != typeof t) throw new Error("computeCircadian is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = t(JSON.stringify(n));
		let i;
		try {
			i = JSON.parse(r);
		} catch {
			return console.warn("[wasm-worker] computeCircadian returned invalid JSON — degrading to empty."), ut;
		}
		return i && "object" == typeof i && Array.isArray(i.day_summaries) ? i : ut;
	}(await tt(), e),
	aggregateEpochSeries: async (e) => function(e, n) {
		const t = e.aggregateEpochSeries;
		if ("function" != typeof t) throw new Error("aggregateEpochSeries is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = t(n);
		if (null == r || "object" != typeof r) throw new Error("aggregateEpochSeries returned an invalid result.");
		const i = r;
		if (!i.series || !Array.isArray(i.series.timestamps_ms)) throw new Error("aggregateEpochSeries returned an invalid result.");
		return r;
	}(await tt(), e),
	placeMarkers: async (e) => lt(await tt(), "placeMarkers", e),
	placeNonwearMarkers: async (e) => lt(await tt(), "placeNonwearMarkers", e),
	epochRawData: async (e, n, t, r, i) => at((await tt()).epochRawData(e, n, t, r, i), "epochRawData"),
	async epochWithBandpass(e, n, t) {
		const r = (await tt()).epochWithBandpass(e, n, t), i = "object" == typeof r && null !== r ? r : null, o = it(i?.timestamps), a = it(i?.counts);
		if (!o || !a) throw new Error("epochWithBandpass: unexpected WASM return shape");
		return b({
			timestamps: o,
			counts: a
		}, [o.buffer, a.buffer]);
	},
	async computeEnmo5s(e, n, t, r) {
		const i = await tt();
		return new Float64Array(i.computeEnmo5s(e, n, t, r));
	},
	async computeAnglez5s(e, n, t, r) {
		const i = await tt();
		return new Float64Array(i.computeAnglez5s(e, n, t, r));
	},
	async processRawXyz(e, n, t, r, i, o) {
		const a = (await tt()).processRawXyz(e, n, t, r, i, o ?? void 0), s = "object" == typeof a && null !== a ? a : null, c = s ? it(s.enmo5s) : null, u = s ? it(s.anglez5s) : null, l = s ? it(s.countsX) : null, f = s ? it(s.countsY) : null, _ = s ? it(s.countsZ) : null, d = s ? it(s.countsVm) : null;
		if (!(c && u && l && f && _ && d)) throw new Error(`processRawXyz: unexpected WASM return shape — got ${JSON.stringify(a)}`);
		const g = (e) => it(e) ?? /* @__PURE__ */ new Float64Array(0), w = s ? g(s.anglex5s) : /* @__PURE__ */ new Float64Array(0), p = s ? g(s.angley5s) : /* @__PURE__ */ new Float64Array(0), m = s ? g(s.mad5s) : /* @__PURE__ */ new Float64Array(0), y = s ? g(s.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
		return b({
			enmo5s: c,
			anglez5s: u,
			anglex5s: w,
			angley5s: p,
			mad5s: m,
			enmoa5s: y,
			calibration: Xn(s?.calibration),
			counts: {
				x: l,
				y: f,
				z: _,
				vm: d
			}
		}, [
			c.buffer,
			u.buffer,
			w.buffer,
			p.buffer,
			m.buffer,
			y.buffer,
			l.buffer,
			f.buffer,
			_.buffer,
			d.buffer
		]);
	},
	async processRawXyzImputed(e, n, t, r, i, o, a = 60) {
		const s = await tt(), c = "function" == typeof s.processRawXyzImputedWithEpoch ? s.processRawXyzImputedWithEpoch(e, n, t, r, i, o ?? void 0, a) : s.processRawXyzImputed(e, n, t, r, i, o ?? void 0), u = "object" == typeof c && null !== c ? c : null, l = u ? it(u.enmo5s) : null, f = u ? it(u.anglez5s) : null, _ = u ? it(u.countsX) : null, d = u ? it(u.countsY) : null, g = u ? it(u.countsZ) : null, w = u ? it(u.countsVm) : null;
		if (!(l && f && _ && d && g && w)) throw new Error(`processRawXyzImputed: unexpected WASM return shape — got ${JSON.stringify(c)}`);
		const p = (e) => it(e) ?? /* @__PURE__ */ new Float64Array(0), m = u ? p(u.anglex5s) : /* @__PURE__ */ new Float64Array(0), y = u ? p(u.angley5s) : /* @__PURE__ */ new Float64Array(0), h = u ? p(u.mad5s) : /* @__PURE__ */ new Float64Array(0), A = u ? p(u.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
		return b({
			enmo5s: l,
			anglez5s: f,
			anglex5s: m,
			angley5s: y,
			mad5s: h,
			enmoa5s: A,
			counts: {
				x: _,
				y: d,
				z: g,
				vm: w
			},
			firstTsMs: "number" == typeof u?.firstTsMs ? u.firstTsMs : 0,
			numGaps: "number" == typeof u?.numGaps ? u.numGaps : 0,
			samplesAdded: "number" == typeof u?.samplesAdded ? u.samplesAdded : 0,
			calibration: Xn(u?.calibration)
		}, [
			l.buffer,
			f.buffer,
			m.buffer,
			y.buffer,
			h.buffer,
			A.buffer,
			_.buffer,
			d.buffer,
			g.buffer,
			w.buffer
		]);
	},
	async detectDetachFromAccelerationG(e, n) {
		const t = await tt(), r = new Uint8Array(t.detectDetachFromAccelerationG(e, n));
		return b(r, [r.buffer]);
	},
	detectHdcza: async (e, n = "wrist", t, r) => function(e) {
		if (!e) return null;
		const n = e;
		if ("object" != typeof e || "number" != typeof n.start_epoch || "number" != typeof n.end_epoch) throw new Error(`detectHdcza: unexpected WASM return shape — expected {start_epoch, end_epoch}, got ${JSON.stringify(e)}`);
		return {
			startEpoch: n.start_epoch,
			endEpoch: n.end_epoch
		};
	}((await tt()).detectHdcza(e, n, t ?? null, r ?? null)),
	runFullPipelineV1: async (e, n, t, r, i) => function(e, n, t, r, i, o) {
		const a = e.runFullPipelineV1({
			contractVersion: Zn,
			semanticProfile: qn,
			signal: {
				x: n,
				y: t,
				z: r,
				sampleRateHz: i,
				startTsEpochMs: 1e3 * o,
				preparation: "calibrated_g"
			},
			config: {
				ws3: 5,
				deviceSerialNumber: null
			},
			execution: {
				concurrency: { mode: "serial" },
				vectorization: "baseline",
				accelerator: "cpu_only"
			}
		});
		return a ? {
			result: (s = a.result, {
				metadata: {
					sampleRateHz: s.metadata.sampleRateHz,
					startTsEpochSec: s.metadata.startTsEpochMs / 1e3,
					ws3: s.metadata.ws3,
					nEpochs: s.metadata.nEpochs,
					nMidnights: s.metadata.nMidnights,
					nNights: s.metadata.nNights,
					nonwearFraction: Kn(s.metadata.nonwearFraction)
				},
				days: s.days.map((e) => ({
					calendarDate: e.calendarDate,
					dayNumber: e.dayNumber,
					validHours: Kn(e.validHours),
					nonwearHours: Kn(e.nonwearHours),
					totalEpochs: e.totalEpochs,
					sedentaryMinutes: Kn(e.sedentaryMinutes),
					lightMinutes: Kn(e.lightMinutes),
					moderateMinutes: Kn(e.moderateMinutes),
					vigorousMinutes: Kn(e.vigorousMinutes),
					mvpaMinutes: Kn(e.mvpaMinutes),
					l5ValueMg: Kn(e.l5ValueMg),
					l5OnsetEpoch: e.l5OnsetEpoch,
					m5ValueMg: Kn(e.m5ValueMg),
					m5OnsetEpoch: e.m5OnsetEpoch,
					igGradient: Kn(e.igGradient),
					igIntercept: Kn(e.igIntercept),
					igRsquared: Kn(e.igRsquared),
					fragTpIn2ac: Kn(e.fragTpIn2ac),
					fragTpAc2in: Kn(e.fragTpAc2in),
					nFragments: e.nFragments,
					nightNumber: e.nightNumber,
					tstMinutes: Qn(e.tstMinutes),
					wasoMinutes: Qn(e.wasoMinutes),
					sleepEfficiency: Qn(e.sleepEfficiency),
					numberOfAwakenings: e.numberOfAwakenings,
					sptDurationHours: Qn(e.sptDurationHours),
					cleaningCode: e.cleaningCode
				}))
			}),
			execution: a.execution,
			provenance: a.provenance
		} : null;
		var s;
	}(await tt(), e, n, t, r, i),
	getComputeIdentity: async () => function(e, n) {
		if (!/^[0-9a-f]{64}$/.test(n)) throw new Error("Actours WASM artifact identity is unavailable or invalid; refusing to attest this runtime");
		const t = "object" == typeof e && null !== e ? e : {}, r = (e, n) => {
			const t = e[n];
			if ("string" != typeof t || 0 === t.length) throw new Error(`Actours capability ${n} must be a non-empty string`);
			return t;
		}, i = r(t, "contractVersion");
		if (i !== Zn) throw new Error(`Unsupported Actours compute contract ${i}; expected ${Zn}`);
		const o = r(t, "crateVersion"), a = t.sourceRevision;
		if (null !== a && ("string" != typeof a || 0 === a.length)) throw new Error("Actours capability sourceRevision must be null or a non-empty string");
		const s = t.compiledFeatures;
		if (!Array.isArray(s) || !s.every((e) => "string" == typeof e && e.length > 0)) throw new Error("Actours capability compiledFeatures must be an array of non-empty strings");
		const c = r("object" == typeof t.execution && null !== t.execution ? t.execution : {}, "target");
		if ("wasm" !== c) throw new Error(`Unsupported Actours execution target ${c}; expected wasm`);
		if (!(Array.isArray(t.semanticProfiles) ? t.semanticProfiles : []).includes(qn)) throw new Error(`Actours capability does not provide required semantic profile ${qn}`);
		const u = r(t, "profileProofStatus");
		if ("proof_pending" !== u) throw new Error(`Unsupported Actours profile proof status ${u}; expected proof_pending`);
		const l = r(t, "temporalBasis");
		if ("utc" !== l) throw new Error(`Unsupported Actours temporal basis ${l}; expected utc`);
		return {
			contractVersion: i,
			crateVersion: o,
			sourceRevision: a,
			artifactSha256: n,
			compiledFeatures: s,
			target: c,
			semanticProfile: qn,
			profileProofStatus: u,
			temporalBasis: l
		};
	}((await tt()).getComputeCapabilitiesV1(), "9cc30be1f97c1717c7d982e68c060e2faf702b41ec108ff67b48f1a230ee8d7e"),
	runGgirFromEpoch: async (e, n, t, r, i) => (await tt()).runGgirFromEpoch({
		anglez: e,
		enmo: n,
		sampleRateHz: t,
		startTsEpochSec: r,
		...i ? { invalid: i } : {}
	}, { ws3: 5 }),
	async readGgirMeta(e) {
		const n = await tt();
		if ("function" != typeof n.readGgirMeta) throw new Error("readGgirMeta: current actours WASM bundle does not export GGIR RData import");
		const t = n.readGgirMeta(e), r = "object" == typeof t && null !== t ? t : null, i = r ? it(r.timestampsMs) : null, o = r ? it(r.enmo5s) : null, a = r ? it(r.anglez5s) : null, s = r ? it(r.anglex5s) : null, c = r ? it(r.angley5s) : null, u = r ? ot(r.invalidShort) : null, l = r ? ot(r.nonwearShort) : null;
		if (!(i && o && a && u && l)) throw new Error(`readGgirMeta: unexpected WASM return shape — got ${JSON.stringify(t)}`);
		return b({
			timestampsMs: i,
			enmo5s: o,
			anglez5s: a,
			...s ? { anglex5s: s } : {},
			...c ? { angley5s: c } : {},
			invalidShort: u,
			nonwearShort: l,
			epochSeconds: "number" == typeof r?.epochSeconds ? r.epochSeconds : 5,
			longEpochSeconds: "number" == typeof r?.longEpochSeconds ? r.longEpochSeconds : 900,
			nShort: "number" == typeof r?.nShort ? r.nShort : o.length,
			nLong: "number" == typeof r?.nLong ? r.nLong : 0
		}, [
			i.buffer,
			o.buffer,
			a.buffer,
			...s ? [s.buffer] : [],
			...c ? [c.buffer] : [],
			u.buffer,
			l.buffer
		]);
	},
	async scoreGgirSib(e, n, t) {
		const r = (await tt()).scoreGgirSib(e, n, t);
		if ("object" != typeof r || null === r || !r.sadeh_ggir || !r.ck_ggir) throw new Error(`scoreGgirSib: unexpected WASM return shape — got ${JSON.stringify(r)}`);
		const i = r, o = new Uint8Array(i.sadeh_ggir), a = new Uint8Array(i.ck_ggir);
		return b({
			sadeh_ggir: o,
			ck_ggir: a
		}, [o.buffer, a.buffer]);
	},
	async scoreGgirHasib(e) {
		const n = (await tt()).scoreGgirHasib(e);
		if (!(n instanceof Uint8Array)) throw new Error("scoreGgirHasib: unexpected WASM return shape — expected Uint8Array, got " + typeof n);
		const t = new Uint8Array(n);
		return b(t, [t.buffer]);
	},
	async scoreGgirHasibVariant(e, n, t) {
		const r = function(e, n) {
			if ("object" != typeof e || null === e) throw new Error("scoreGgirHasibVariant: unexpected WASM return shape — got " + typeof e);
			const t = e, r = ot(t.sib);
			if (!r) throw new Error(`scoreGgirHasibVariant: missing sib array — got ${JSON.stringify(e)}`);
			return {
				algo: "string" == typeof t.algo ? t.algo : n,
				sib: r,
				nPostch: "number" == typeof t.nPostch ? t.nPostch : 0,
				nGaps: "number" == typeof t.nGaps ? t.nGaps : 0,
				nWake: "number" == typeof t.nWake ? t.nWake : 0,
				nSleep: "number" == typeof t.nSleep ? t.nSleep : 0,
				sleepFraction: "number" == typeof t.sleepFraction ? t.sleepFraction : 0,
				columnName: "string" == typeof t.columnName ? t.columnName : ""
			};
		}((await tt()).scoreGgirHasibVariant({
			data: e,
			algo: n,
			...t ? { config: t } : {}
		}), n);
		return b(r, [r.sib.buffer]);
	},
	async detectGgirHasptVariant(e) {
		const n = function(e, n) {
			if ("object" != typeof e || null === e) throw new Error("detectGgirHasptVariant: unexpected WASM return shape — got " + typeof e);
			const t = e, r = ot(t.nomov), i = it(t.rollingMedian);
			if (!r || !i) throw new Error(`detectGgirHasptVariant: missing output arrays — got ${JSON.stringify(e)}`);
			return {
				algo: "string" == typeof t.algo ? t.algo : n,
				guider: "string" == typeof t.guider ? t.guider : "",
				startEpoch: "number" == typeof t.startEpoch ? t.startEpoch : null,
				endEpoch: "number" == typeof t.endEpoch ? t.endEpoch : null,
				threshold: "number" == typeof t.threshold ? t.threshold : NaN,
				nomov: r,
				rollingMedian: i
			};
		}((await tt()).detectGgirHasptVariant(e), e.algo);
		return b(n, [n.nomov.buffer, n.rollingMedian.buffer]);
	},
	async scoreAllDays(e) {
		const n = (await tt()).scoreAllDays(e);
		if (!Array.isArray(n)) throw new Error("scoreAllDays: expected array from WASM, got " + typeof n);
		const t = (e) => e instanceof Uint8Array || Array.isArray(e), r = n[0];
		if (n.length > 0 && ("object" != typeof r || null === r || !t(r.sadeh_actilife) || !t(r.nonwear))) throw new Error(`scoreAllDays: unexpected element shape — got ${JSON.stringify(r)}`);
		const i = n.map((e) => ({
			sadeh_actilife: new Uint8Array(e.sadeh_actilife),
			sadeh_original: new Uint8Array(e.sadeh_original),
			ck_actilife: new Uint8Array(e.ck_actilife),
			ck_original: new Uint8Array(e.ck_original),
			nonwear: new Uint8Array(e.nonwear)
		}));
		return b(i, i.flatMap((e) => [
			e.sadeh_actilife.buffer,
			e.sadeh_original.buffer,
			e.ck_actilife.buffer,
			e.ck_original.buffer,
			e.nonwear.buffer
		]));
	}
})));
