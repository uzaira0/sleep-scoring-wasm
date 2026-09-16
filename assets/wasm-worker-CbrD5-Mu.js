var e = Object.defineProperty, n = (n, t) => {
	let r = {};
	for (var o in n) e(r, o, {
		get: n[o],
		enumerable: !0
	});
	return t || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const t = Symbol("Comlink.proxy"), r = Symbol("Comlink.endpoint"), o = Symbol("Comlink.releaseProxy"), i = Symbol("Comlink.finalizer"), a = Symbol("Comlink.thrown"), s = (e) => "object" == typeof e && null !== e || "function" == typeof e, c = /* @__PURE__ */ new Map([["proxy", {
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
		}), g(e, n, [], void 0);
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
	n.addEventListener("message", function o(s) {
		if (!s || !s.data) return;
		if (!function(e, n) {
			for (const t of e) {
				if (n === t || "*" === t) return !0;
				if (t instanceof RegExp && t.test(n)) return !0;
			}
			return !1;
		}(r, s.origin)) return void console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
		const { id: c, type: _, path: f } = Object.assign({ path: [] }, s.data), d = (s.data.argumentList || []).map(h);
		let p;
		try {
			const n = f.slice(0, -1).reduce((e, n) => e[n], e), r = f.reduce((e, n) => e[n], e);
			switch (_) {
				case "GET":
					p = r;
					break;
				case "SET":
					n[f.slice(-1)[0]] = h(s.data.value), p = !0;
					break;
				case "APPLY":
					p = r.apply(n, d);
					break;
				case "CONSTRUCT":
					p = function(e) {
						return Object.assign(e, { [t]: !0 });
					}(new r(...d));
					break;
				case "ENDPOINT":
					{
						const { port1: n, port2: t } = new MessageChannel();
						u(e, t), p = b(n, [n]);
					}
					break;
				case "RELEASE":
					p = void 0;
					break;
				default: return;
			}
		} catch (g) {
			p = {
				value: g,
				[a]: 0
			};
		}
		Promise.resolve(p).catch((e) => ({
			value: e,
			[a]: 0
		})).then((t) => {
			const [r, a] = y(t);
			n.postMessage(Object.assign(Object.assign({}, r), { id: c }), a), "RELEASE" === _ && (n.removeEventListener("message", o), l(n), i in e && "function" == typeof e[i] && e[i]());
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
function _(e) {
	if (e) throw new Error("Proxy has been released and is not useable");
}
function f(e) {
	return A(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
		l(e);
	});
}
const d = /* @__PURE__ */ new WeakMap(), p = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const n = (d.get(e) || 0) - 1;
	d.set(e, n), 0 === n && f(e);
});
function g(e, n, t = [], i = function() {}) {
	let a = !1;
	const s = new Proxy(i, {
		get(r, i) {
			if (_(a), i === o) return () => {
				(function(e) {
					p && p.unregister(e);
				})(s), f(e), n.clear(), a = !0;
			};
			if ("then" === i) {
				if (0 === t.length) return { then: () => s };
				const r = A(e, n, {
					type: "GET",
					path: t.map((e) => e.toString())
				}).then(h);
				return r.then.bind(r);
			}
			return g(e, n, [...t, i]);
		},
		set(r, o, i) {
			_(a);
			const [s, c] = y(i);
			return A(e, n, {
				type: "SET",
				path: [...t, o].map((e) => e.toString()),
				value: s
			}, c).then(h);
		},
		apply(o, i, s) {
			_(a);
			const c = t[t.length - 1];
			if (c === r) return A(e, n, { type: "ENDPOINT" }).then(h);
			if ("bind" === c) return g(e, n, t.slice(0, -1));
			const [u, l] = m(s);
			return A(e, n, {
				type: "APPLY",
				path: t.map((e) => e.toString()),
				argumentList: u
			}, l).then(h);
		},
		construct(r, o) {
			_(a);
			const [i, s] = m(o);
			return A(e, n, {
				type: "CONSTRUCT",
				path: t.map((e) => e.toString()),
				argumentList: i
			}, s).then(h);
		}
	});
	return function(e, n) {
		const t = (d.get(n) || 0) + 1;
		d.set(n, t), p && p.register(e, n, e);
	}(s, e), s;
}
function m(e) {
	const n = e.map(y);
	return [n.map((e) => e[0]), (t = n.map((e) => e[1]), Array.prototype.concat.apply([], t))];
	var t;
}
const w = /* @__PURE__ */ new WeakMap();
function b(e, n) {
	return w.set(e, n), e;
}
function y(e) {
	for (const [n, t] of c) if (t.canHandle(e)) {
		const [r, o] = t.serialize(e);
		return [{
			type: "HANDLER",
			name: n,
			value: r
		}, o];
	}
	return [{
		type: "RAW",
		value: e
	}, w.get(e) || []];
}
function h(e) {
	switch (e.type) {
		case "HANDLER": return c.get(e.name).deserialize(e.value);
		case "RAW": return e.value;
	}
}
function A(e, n, t, r) {
	return new Promise((o) => {
		const i = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		n.set(i, o), e.start && e.start(), e.postMessage(Object.assign({ id: i }, t), r);
	});
}
const v = "smart", S = "webster", M = {
	diary: "diary",
	hdcza: "hdcza",
	l5: "l5",
	selected_scorer_first_last: "selected_scorer_first_last",
	selected_scorer_longest_bout: "selected_scorer_longest_bout",
	quiet_bout: "quiet_bout",
	none: "none"
}, N = M.diary, E = M.hdcza, k = M.l5, C = M.selected_scorer_first_last, F = M.selected_scorer_longest_bout, O = M.quiet_bout, P = M.none, x = "use_source_a", R = {
	sourceA: "hdcza",
	sourceB: "selected_scorer_first_last",
	fusionPolicy: "source_b_bounded_by_source_a",
	mergeGapMinutes: 45,
	paddingMinutes: 0,
	minOverlapJaccard: .5,
	applyNonwearGate: !1
}, U = {
	[N]: "Diary",
	[E]: "HDCZA SPT",
	[k]: "L5 least active 5h",
	[C]: "Selected scorer first-last sleep",
	[F]: "Selected scorer longest sleep bout",
	[O]: "Quiet-bout least-active window",
	[P]: "None"
};
function W(e) {
	const n = e ?? {};
	return {
		...R,
		sourceA: n.sourceA ?? n.source_a ?? R.sourceA,
		sourceB: n.sourceB ?? n.source_b ?? R.sourceB,
		fusionPolicy: n.fusionPolicy ?? n.fusion_policy ?? R.fusionPolicy,
		mergeGapMinutes: n.mergeGapMinutes ?? n.merge_gap_minutes ?? R.mergeGapMinutes,
		paddingMinutes: n.paddingMinutes ?? n.padding_minutes ?? R.paddingMinutes,
		minOverlapJaccard: n.minOverlapJaccard ?? n.min_overlap_jaccard ?? R.minOverlapJaccard,
		applyNonwearGate: n.applyNonwearGate ?? n.apply_nonwear_gate ?? R.applyNonwearGate
	};
}
Object.values(M).map((e) => ({
	value: e,
	label: U[e]
}));
const G = "diary", z = "none", D = new Set(Object.values({
	SADEH_1994_ORIGINAL: "sadeh_1994_original",
	SADEH_1994_ACTILIFE: "sadeh_1994_actilife",
	COLE_KRIPKE_1992_ORIGINAL: "cole_kripke_1992_original",
	COLE_KRIPKE_1992_ACTILIFE: "cole_kripke_1992_actilife",
	SADEH_1994_GGIR: "sadeh_1994_ggir",
	COLE_KRIPKE_1992_GGIR: "cole_kripke_1992_ggir",
	VAN_HEES_2015: "van_hees_2015",
	VAN_HEES_HASIB_2015: "van_hees_hasib_2015",
	NATURAL_LANGUAGE: "natural_language",
	CONSENSUS_MAJORITY_VOTE: "consensus_majority_vote",
	LSTM_SLEEP_WAKE: "lstm_sleep_wake",
	MANUAL: "manual",
	OAKLEY_1997: "oakley_1997",
	GALLAND_2012: "galland_2012",
	UCSD_SCRIPPS_2010: "ucsd_scripps_2010",
	SAZONOV_2004: "sazonov_2004",
	SYED_CNN: "syed_cnn"
}));
function T(e) {
	if (!e) return [];
	const n = [];
	for (const [t, r] of e) null != t && "" !== t.trim() && n.push({
		onset_time: t,
		offset_time: r ?? null
	});
	return n;
}
function B(e) {
	if (!e) return [];
	const n = [];
	for (const [t, r] of e) null != t && null != r && "" !== t.trim() && "" !== r.trim() && n.push({
		start_time: t,
		end_time: r
	});
	return n;
}
function j(e) {
	const n = { ruleset: e.ruleset ?? "legacy" };
	if (e.algorithm && D.has(e.algorithm) && (n.classifier = e.algorithm), null != e.epochLengthSeconds && (n.epoch_length_seconds = e.epochLengthSeconds), null != e.onsetMinConsecutiveSleep && (n.onset_min_consecutive_sleep = e.onsetMinConsecutiveSleep), null != e.offsetMinConsecutiveMinutes && (n.offset_min_consecutive_minutes = e.offsetMinConsecutiveMinutes), e.scorerPostprocessing && (n.scorer_postprocessing = e.scorerPostprocessing), e.nonwearDetector && "choi_2011" !== e.nonwearDetector && (n.nonwear_detector = e.nonwearDetector), e.sleepPeriodDetection) {
		const t = W(e.sleepPeriodDetection);
		n.merge_gap_minutes = t.mergeGapMinutes, n.padding_minutes = t.paddingMinutes, n.min_overlap_jaccard = t.minOverlapJaccard;
	}
	const t = function(e) {
		if (e.sleepPeriodDetection && !function(e) {
			const n = R;
			return e.sourceA === n.sourceA && e.sourceB === n.sourceB && e.fusionPolicy === n.fusionPolicy && e.mergeGapMinutes === n.mergeGapMinutes && e.paddingMinutes === n.paddingMinutes && e.minOverlapJaccard === n.minOverlapJaccard && e.applyNonwearGate === n.applyNonwearGate;
		}(W(e.sleepPeriodDetection))) {
			const n = function(e) {
				const n = W(e);
				return {
					source_a: n.sourceA,
					source_b: n.sourceB,
					fusion_policy: n.fusionPolicy,
					merge_gap_minutes: n.mergeGapMinutes,
					padding_minutes: n.paddingMinutes,
					min_overlap_jaccard: n.minOverlapJaccard,
					apply_nonwear_gate: n.applyNonwearGate
				};
			}(e.sleepPeriodDetection);
			return {
				source_a: n.source_a,
				source_b: n.source_b,
				fusion_policy: n.fusion_policy,
				apply_nonwear_gate: n.apply_nonwear_gate
			};
		}
		const n = e.periodGuider ?? v, t = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime);
		return function(e, n) {
			const t = (e) => ({
				source_a: e,
				source_b: "none",
				fusion_policy: "use_source_a",
				apply_nonwear_gate: !1
			});
			switch (e) {
				case "diary": return;
				case "hdcza": return t("hdcza");
				case "l5": return t("l5");
				case "longest_bout": return t("selected_scorer_longest_bout");
				case "none": return t("none");
				case v:
					if (n.hasDiary) return;
					return t("lstm_sleep_wake" === n.algorithm ? "selected_scorer_longest_bout" : "l5");
				default: return;
			}
		}(n, {
			algorithm: e.algorithm ?? null,
			hasDiary: t
		});
	}(e);
	return t && (n.detection = t), n;
}
function I(e) {
	const n = {
		analysis_date: e.analysisDate ?? "",
		epoch_length_seconds: e.epochLengthSeconds ?? 60,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (n.choi_nonwear = e.choiNonwear), e.sensorNonwear && e.sensorNonwear.length > 0 && (n.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (n.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (n.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (n.diary_in_bed_time = e.diaryBedTime);
	const t = T(e.diaryNaps);
	t.length > 0 && (n.diary_naps = t);
	const r = B(e.diaryNonwear);
	return r.length > 0 && (n.diary_nonwear = r), e.hdczaWindow && (n.hdcza_window = [e.hdczaWindow.startTimestamp, e.hdczaWindow.endTimestamp]), n;
}
function V(e) {
	const n = {
		analysis_date: e.analysisDate,
		epoch_length_seconds: e.epochLengthSeconds,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (n.choi_nonwear = e.choiNonwear), e.sensorNonwear && e.sensorNonwear.length > 0 && (n.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (n.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (n.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (n.diary_in_bed_time = e.diaryBedTime);
	const t = T(e.diaryNaps);
	t.length > 0 && (n.diary_naps = t);
	const r = B(e.diaryNonwear);
	return r.length > 0 && (n.diary_nonwear = r), n;
}
function L(e) {
	return e && 0 !== e.length ? e.map(([e, n]) => [e, n]) : null;
}
var $ = n({
	StreamChunkResult: () => J,
	StreamParseResult: () => H,
	actoursVersion: () => X,
	aggregateEpochSeries: () => Y,
	analyzePhysicalActivityDay: () => Z,
	classifyActimetricPreschoolWristRf: () => q,
	classifyActimetricPreschoolWristRfLagLead: () => K,
	classifyActimetricPreschoolWristRfLagLeadCalibrated: () => Q,
	computeAnglez5s: () => ee,
	computeCircadian: () => ne,
	computeEnmo5s: () => te,
	computeMimsUnit: () => re,
	computeMimsUnitDataframe: () => oe,
	computeMimsUnitTimingBreakdown: () => ie,
	computeMimsUnitValues: () => ae,
	computeNightDifficulty: () => se,
	computeNightSignals: () => ce,
	computeSleepMetrics: () => ue,
	configureComputeMemoryBudgetV1: () => le,
	csvBufferAppend: () => _e,
	csvBufferClear: () => fe,
	default: () => ct,
	detectDetachFromAccelerationG: () => de,
	detectDeviceFormat: () => pe,
	detectGgirHasptVariant: () => ge,
	detectHdcza: () => me,
	detectNonwear: () => we,
	detectNonwearChoi2011: () => be,
	detectNonwearChoi2011Bouts: () => ye,
	detectNonwearChoi2011Epoch: () => he,
	detectNonwearChoi2012: () => Ae,
	detectNonwearChoi2012Bouts: () => ve,
	detectNonwearChoiBouts: () => Se,
	detectNonwearUnified: () => Me,
	epochRawData: () => Ne,
	epochWithBandpass: () => Ee,
	executeHeroRuntime: () => ke,
	extractCapsense: () => Ce,
	getComputeCapabilitiesV1: () => Fe,
	initSync: () => st,
	installPanicHook: () => Oe,
	isGeneactivFormat: () => Pe,
	lstmSpectralFeatures30s: () => xe,
	neishabouriCounts: () => Re,
	parseActigraphCsv: () => Ue,
	parseActigraphCsvBuffered: () => We,
	parseCwa: () => Ge,
	parseEpochSeries: () => ze,
	parseGeneactivBin: () => De,
	parseGeneactivCsv: () => Te,
	parseGeneactivCsvBuffered: () => Be,
	parseGt3x: () => je,
	placeMarkers: () => Ie,
	placeMarkersBatch: () => Ve,
	placeNonwearMarkers: () => Le,
	prepareCompactPipelineOutcomeV1: () => $e,
	prepareCompactPipelineV1: () => Je,
	processGeneactivRaw: () => He,
	processGt3xFull: () => Xe,
	processGt3xFullWithEpoch: () => Ye,
	processGt3xPart1: () => Ze,
	processGt3xPart1WithEpoch: () => qe,
	processRawXyz: () => Ke,
	processRawXyzImputed: () => Qe,
	processRawXyzImputedWithEpoch: () => en,
	readGgirMeta: () => nn,
	recommended_chunk_size_mb: () => tn,
	reduceF64V1: () => rn,
	runCompactPipelineOutcomeV1: () => on,
	runCompactPipelineV1: () => an,
	runFullPipeline: () => sn,
	runFullPipelineOutcomeV1: () => cn,
	runFullPipelineV1: () => un,
	runGgirFromEpoch: () => ln,
	runMilestone: () => _n,
	scoreAllDays: () => fn,
	scoreColeKripke: () => dn,
	scoreConsensus: () => pn,
	scoreConsensusMajority: () => gn,
	scoreEpochs: () => mn,
	scoreGgirHasib: () => wn,
	scoreGgirHasibVariant: () => bn,
	scoreGgirSib: () => yn,
	scoreSadeh: () => hn,
	sha256StreamFeed: () => An,
	sha256StreamFinish: () => vn,
	sha256StreamStart: () => Sn,
	streamParseFeed: () => Mn,
	streamParseFinish: () => Nn,
	streamParseFinishChunk: () => En,
	streamParseStart: () => kn,
	streamParseStartData: () => Cn,
	streamParseStartWithEpoch: () => Fn,
	summarizeActimetricPreschoolWristRfClasses: () => On,
	zeroCrossingCounts: () => Pn
}), J = class e {
	static __wrap(n) {
		n >>>= 0;
		const t = Object.create(e.prototype);
		return t.__wbg_ptr = n, Rn.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Rn.unregister(this), e;
	}
	free() {
		const e = this.__destroy_into_raw();
		ot.__wbg_streamchunkresult_free(e, 0);
	}
	get anglex5s() {
		const e = ot.streamchunkresult_anglex5s(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get angley5s() {
		const e = ot.streamchunkresult_angley5s(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get anglez5s() {
		const e = ot.streamchunkresult_anglez5s(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisX() {
		const e = ot.streamchunkresult_axisX(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisY() {
		const e = ot.streamchunkresult_axisY(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisZ() {
		const e = ot.streamchunkresult_axisZ(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get canonicalPassDegraded() {
		return 0 !== ot.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const e = ot.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let n;
		return 0 !== e[0] && (n = Ln(e[0], e[1]).slice(), ot.__wbindgen_free(e[0], 1 * e[1], 1)), n;
	}
	get counts() {
		const e = ot.streamchunkresult_counts(this.__wbg_ptr);
		var n = Dn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get counts5s() {
		const e = ot.streamchunkresult_counts5s(this.__wbg_ptr);
		var n = Dn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get enmo5s() {
		const e = ot.streamchunkresult_enmo5s(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get enmoa5s() {
		const e = ot.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get headerRowsSkipped() {
		return ot.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const e = ot.streamchunkresult_mad5s(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnit() {
		const e = ot.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnitAvailable() {
		return 0 !== ot.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const e = ot.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let n;
		return 0 !== e[0] && (n = Ln(e[0], e[1]).slice(), ot.__wbindgen_free(e[0], 1 * e[1], 1)), n;
	}
	get mimsUnitX() {
		const e = ot.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnitY() {
		const e = ot.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnitZ() {
		const e = ot.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get rawRetentionDegraded() {
		return 0 !== ot.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ot.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return ot.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ot.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const e = ot.streamchunkresult_tempCounts(this.__wbg_ptr);
		var n = Dn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get temperature() {
		const e = ot.streamchunkresult_temperature(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs() {
		const e = ot.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs5s() {
		const e = ot.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get vectorMagnitude() {
		const e = ot.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get zcx60s() {
		const e = ot.streamchunkresult_zcx60s(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get zcy60s() {
		const e = ot.streamchunkresult_zcy60s(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get zcz60s() {
		const e = ot.streamchunkresult_zcz60s(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
};
Symbol.dispose && (J.prototype[Symbol.dispose] = J.prototype.free);
var H = class e {
	static __wrap(n) {
		n >>>= 0;
		const t = Object.create(e.prototype);
		return t.__wbg_ptr = n, Un.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Un.unregister(this), e;
	}
	free() {
		const e = this.__destroy_into_raw();
		ot.__wbg_streamparseresult_free(e, 0);
	}
	get axisX() {
		const e = ot.streamparseresult_axisX(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisY() {
		const e = ot.streamparseresult_axisY(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisZ() {
		const e = ot.streamparseresult_axisZ(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get canonicalPassDegraded() {
		return 0 !== ot.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const e = ot.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let n;
		return 0 !== e[0] && (n = Ln(e[0], e[1]).slice(), ot.__wbindgen_free(e[0], 1 * e[1], 1)), n;
	}
	get headerRowsSkipped() {
		return ot.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== ot.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return ot.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return ot.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const e = ot.streamparseresult_temperature(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs() {
		const e = ot.streamparseresult_timestampsMs(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get vectorMagnitude() {
		const e = ot.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var n = zn(e[0], e[1]).slice();
		return ot.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
};
function X() {
	let e, n;
	try {
		const t = ot.actoursVersion();
		return e = t[0], n = t[1], Ln(t[0], t[1]);
	} finally {
		ot.__wbindgen_free(e, n, 1);
	}
}
function Y(e) {
	const n = ot.aggregateEpochSeries(e);
	if (n[2]) throw Qn(n[1]);
	return Qn(n[0]);
}
function Z(e) {
	let n, t;
	try {
		const i = Kn(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), a = it, s = ot.analyzePhysicalActivityDay(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, Qn(s[2]);
		return n = r, t = o, Ln(r, o);
	} finally {
		ot.__wbindgen_free(n, t, 1);
	}
}
function q(e, n, t, r) {
	const o = qn(e, ot.__wbindgen_malloc), i = it, a = qn(n, ot.__wbindgen_malloc), s = it, c = qn(t, ot.__wbindgen_malloc), u = it, l = ot.classifyActimetricPreschoolWristRf(o, i, a, s, c, u, r);
	if (l[3]) throw Qn(l[2]);
	var _ = Tn(l[0], l[1]).slice();
	return ot.__wbindgen_free(l[0], 1 * l[1], 1), _;
}
function K(e, n, t, r) {
	const o = qn(e, ot.__wbindgen_malloc), i = it, a = qn(n, ot.__wbindgen_malloc), s = it, c = qn(t, ot.__wbindgen_malloc), u = it, l = ot.classifyActimetricPreschoolWristRfLagLead(o, i, a, s, c, u, r);
	if (l[3]) throw Qn(l[2]);
	var _ = Tn(l[0], l[1]).slice();
	return ot.__wbindgen_free(l[0], 1 * l[1], 1), _;
}
function Q(e, n, t, r) {
	const o = qn(e, ot.__wbindgen_malloc), i = it, a = qn(n, ot.__wbindgen_malloc), s = it, c = qn(t, ot.__wbindgen_malloc), u = it, l = ot.classifyActimetricPreschoolWristRfLagLeadCalibrated(o, i, a, s, c, u, r);
	if (l[3]) throw Qn(l[2]);
	var _ = Tn(l[0], l[1]).slice();
	return ot.__wbindgen_free(l[0], 1 * l[1], 1), _;
}
function ee(e, n, t, r) {
	const o = qn(e, ot.__wbindgen_malloc), i = it, a = qn(n, ot.__wbindgen_malloc), s = it, c = qn(t, ot.__wbindgen_malloc), u = it, l = ot.computeAnglez5s(o, i, a, s, c, u, r);
	var _ = zn(l[0], l[1]).slice();
	return ot.__wbindgen_free(l[0], 8 * l[1], 8), _;
}
function ne(e) {
	let n, t;
	try {
		const i = Kn(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), a = it, s = ot.computeCircadian(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, Qn(s[2]);
		return n = r, t = o, Ln(r, o);
	} finally {
		ot.__wbindgen_free(n, t, 1);
	}
}
function te(e, n, t, r) {
	const o = qn(e, ot.__wbindgen_malloc), i = it, a = qn(n, ot.__wbindgen_malloc), s = it, c = qn(t, ot.__wbindgen_malloc), u = it, l = ot.computeEnmo5s(o, i, a, s, c, u, r);
	var _ = zn(l[0], l[1]).slice();
	return ot.__wbindgen_free(l[0], 8 * l[1], 8), _;
}
function re(e, n, t, r, o) {
	const i = qn(e, ot.__wbindgen_malloc), a = it, s = qn(n, ot.__wbindgen_malloc), c = it, u = qn(t, ot.__wbindgen_malloc), l = it, _ = ot.computeMimsUnit(i, a, s, c, u, l, r, o);
	if (_[2]) throw Qn(_[1]);
	return Qn(_[0]);
}
function oe(e, n, t, r, o) {
	const i = qn(e, ot.__wbindgen_malloc), a = it, s = qn(n, ot.__wbindgen_malloc), c = it, u = qn(t, ot.__wbindgen_malloc), l = it, _ = qn(r, ot.__wbindgen_malloc), f = it, d = ot.computeMimsUnitDataframe(i, a, s, c, u, l, _, f, o);
	if (d[2]) throw Qn(d[1]);
	return Qn(d[0]);
}
function ie(e, n, t, r, o) {
	const i = qn(e, ot.__wbindgen_malloc), a = it, s = qn(n, ot.__wbindgen_malloc), c = it, u = qn(t, ot.__wbindgen_malloc), l = it, _ = ot.computeMimsUnitTimingBreakdown(i, a, s, c, u, l, r, o);
	if (_[2]) throw Qn(_[1]);
	return Qn(_[0]);
}
function ae(e, n, t, r, o) {
	const i = qn(e, ot.__wbindgen_malloc), a = it, s = qn(n, ot.__wbindgen_malloc), c = it, u = qn(t, ot.__wbindgen_malloc), l = it, _ = ot.computeMimsUnitValues(i, a, s, c, u, l, r, o);
	if (_[3]) throw Qn(_[2]);
	var f = zn(_[0], _[1]).slice();
	return ot.__wbindgen_free(_[0], 8 * _[1], 8), f;
}
function se(e) {
	let n, t;
	try {
		const i = Kn(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), a = it, s = ot.computeNightDifficulty(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, Qn(s[2]);
		return n = r, t = o, Ln(r, o);
	} finally {
		ot.__wbindgen_free(n, t, 1);
	}
}
function ce(e) {
	let n, t;
	try {
		const i = Kn(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), a = it, s = ot.computeNightSignals(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, Qn(s[2]);
		return n = r, t = o, Ln(r, o);
	} finally {
		ot.__wbindgen_free(n, t, 1);
	}
}
function ue(e, n, t) {
	const r = Zn(e, ot.__wbindgen_malloc), o = it, i = qn(n, ot.__wbindgen_malloc), a = it, s = ot.computeSleepMetrics(r, o, i, a, t);
	if (s[2]) throw Qn(s[1]);
	return Qn(s[0]);
}
function le(e) {
	const n = ot.configureComputeMemoryBudgetV1(e);
	if (n[2]) throw Qn(n[1]);
	return Qn(n[0]);
}
function _e(e) {
	const n = Zn(e, ot.__wbindgen_malloc), t = it;
	ot.csvBufferAppend(n, t);
}
function fe(e) {
	ot.csvBufferClear(e);
}
function de(e, n) {
	const t = qn(e, ot.__wbindgen_malloc), r = it, o = qn(n, ot.__wbindgen_malloc), i = it, a = ot.detectDetachFromAccelerationG(t, r, o, i);
	if (a[3]) throw Qn(a[2]);
	var s = Tn(a[0], a[1]).slice();
	return ot.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function pe(e, n) {
	let t, r;
	try {
		const o = Zn(e, ot.__wbindgen_malloc), i = it, a = Kn(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), s = it, c = ot.detectDeviceFormat(o, i, a, s);
		return t = c[0], r = c[1], Ln(c[0], c[1]);
	} finally {
		ot.__wbindgen_free(t, r, 1);
	}
}
function ge(e) {
	const n = ot.detectGgirHasptVariant(e);
	if (n[2]) throw Qn(n[1]);
	return Qn(n[0]);
}
function me(e, n, t, r) {
	const o = qn(e, ot.__wbindgen_malloc), i = it;
	var a = Yn(n) ? 0 : Kn(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), s = it, c = Yn(t) ? 0 : qn(t, ot.__wbindgen_malloc), u = it, l = Yn(r) ? 0 : qn(r, ot.__wbindgen_malloc), _ = it;
	return ot.detectHdcza(o, i, a, s, c, u, l, _);
}
function we(e) {
	const n = qn(e, ot.__wbindgen_malloc), t = it, r = ot.detectNonwear(n, t);
	var o = Tn(r[0], r[1]).slice();
	return ot.__wbindgen_free(r[0], 1 * r[1], 1), o;
}
function be(e) {
	const n = qn(e, ot.__wbindgen_malloc), t = it, r = ot.detectNonwearChoi2011(n, t);
	var o = Tn(r[0], r[1]).slice();
	return ot.__wbindgen_free(r[0], 1 * r[1], 1), o;
}
function ye(e) {
	const n = qn(e, ot.__wbindgen_malloc), t = it, r = ot.detectNonwearChoi2011Bouts(n, t);
	if (r[2]) throw Qn(r[1]);
	return Qn(r[0]);
}
function he(e, n) {
	const t = qn(e, ot.__wbindgen_malloc), r = it, o = ot.detectNonwearChoi2011Epoch(t, r, n);
	if (o[3]) throw Qn(o[2]);
	var i = Tn(o[0], o[1]).slice();
	return ot.__wbindgen_free(o[0], 1 * o[1], 1), i;
}
function Ae(e) {
	const n = qn(e, ot.__wbindgen_malloc), t = it, r = ot.detectNonwearChoi2012(n, t);
	var o = Tn(r[0], r[1]).slice();
	return ot.__wbindgen_free(r[0], 1 * r[1], 1), o;
}
function ve(e) {
	const n = qn(e, ot.__wbindgen_malloc), t = it, r = ot.detectNonwearChoi2012Bouts(n, t);
	if (r[2]) throw Qn(r[1]);
	return Qn(r[0]);
}
function Se(e) {
	const n = qn(e, ot.__wbindgen_malloc), t = it, r = ot.detectNonwearChoiBouts(n, t);
	if (r[2]) throw Qn(r[1]);
	return Qn(r[0]);
}
function Me(e) {
	let n, t;
	try {
		const i = Kn(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), a = it, s = ot.detectNonwearUnified(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, Qn(s[2]);
		return n = r, t = o, Ln(r, o);
	} finally {
		ot.__wbindgen_free(n, t, 1);
	}
}
function Ne(e, n, t, r, o) {
	const i = qn(e, ot.__wbindgen_malloc), a = it, s = qn(n, ot.__wbindgen_malloc), c = it, u = qn(t, ot.__wbindgen_malloc), l = it, _ = qn(r, ot.__wbindgen_malloc), f = it, d = ot.epochRawData(i, a, s, c, u, l, _, f, o);
	if (d[2]) throw Qn(d[1]);
	return Qn(d[0]);
}
function Ee(e, n, t) {
	const r = qn(e, ot.__wbindgen_malloc), o = it, i = qn(n, ot.__wbindgen_malloc), a = it, s = ot.epochWithBandpass(r, o, i, a, t);
	if (s[2]) throw Qn(s[1]);
	return Qn(s[0]);
}
function ke(e, n) {
	let t, r;
	try {
		const a = Kn(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), s = it, c = Kn(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), u = it, l = ot.executeHeroRuntime(a, s, c, u);
		var o = l[0], i = l[1];
		if (l[3]) throw o = 0, i = 0, Qn(l[2]);
		return t = o, r = i, Ln(o, i);
	} finally {
		ot.__wbindgen_free(t, r, 1);
	}
}
function Ce(e) {
	const n = Zn(e, ot.__wbindgen_malloc), t = it, r = ot.extractCapsense(n, t);
	if (r[2]) throw Qn(r[1]);
	return Qn(r[0]);
}
function Fe() {
	const e = ot.getComputeCapabilitiesV1();
	if (e[2]) throw Qn(e[1]);
	return Qn(e[0]);
}
function Oe() {
	ot.installPanicHook();
}
function Pe(e) {
	const n = Zn(e, ot.__wbindgen_malloc), t = it;
	return 0 !== ot.isGeneactivFormat(n, t);
}
function xe(e, n, t, r) {
	const o = qn(e, ot.__wbindgen_malloc), i = it, a = qn(n, ot.__wbindgen_malloc), s = it, c = qn(t, ot.__wbindgen_malloc), u = it, l = ot.lstmSpectralFeatures30s(o, i, a, s, c, u, r);
	if (l[2]) throw Qn(l[1]);
	return Qn(l[0]);
}
function Re(e, n, t, r, o) {
	const i = qn(e, ot.__wbindgen_malloc), a = it, s = qn(n, ot.__wbindgen_malloc), c = it, u = qn(t, ot.__wbindgen_malloc), l = it, _ = ot.neishabouriCounts(i, a, s, c, u, l, r, o);
	if (_[2]) throw Qn(_[1]);
	return Qn(_[0]);
}
function Ue(e, n) {
	const t = Zn(e, ot.__wbindgen_malloc), r = it, o = ot.parseActigraphCsv(t, r, n);
	if (o[2]) throw Qn(o[1]);
	return Qn(o[0]);
}
function We(e) {
	const n = ot.parseActigraphCsvBuffered(e);
	if (n[2]) throw Qn(n[1]);
	return Qn(n[0]);
}
function Ge(e) {
	const n = Zn(e, ot.__wbindgen_malloc), t = it, r = ot.parseCwa(n, t);
	if (r[2]) throw Qn(r[1]);
	return Qn(r[0]);
}
function ze(e, n) {
	const t = Zn(e, ot.__wbindgen_malloc), r = it, o = Kn(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), i = it, a = ot.parseEpochSeries(t, r, o, i);
	if (a[2]) throw Qn(a[1]);
	return Qn(a[0]);
}
function De(e) {
	const n = Zn(e, ot.__wbindgen_malloc), t = it, r = ot.parseGeneactivBin(n, t);
	if (r[2]) throw Qn(r[1]);
	return Qn(r[0]);
}
function Te(e) {
	const n = Zn(e, ot.__wbindgen_malloc), t = it, r = ot.parseGeneactivCsv(n, t);
	if (r[2]) throw Qn(r[1]);
	return Qn(r[0]);
}
function Be() {
	const e = ot.parseGeneactivCsvBuffered();
	if (e[2]) throw Qn(e[1]);
	return Qn(e[0]);
}
function je(e) {
	const n = Zn(e, ot.__wbindgen_malloc), t = it, r = ot.parseGt3x(n, t);
	if (r[2]) throw Qn(r[1]);
	return Qn(r[0]);
}
function Ie(e) {
	let n, t;
	try {
		const i = Kn(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), a = it, s = ot.placeMarkers(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, Qn(s[2]);
		return n = r, t = o, Ln(r, o);
	} finally {
		ot.__wbindgen_free(n, t, 1);
	}
}
function Ve(e, n, t, r, o, i) {
	const a = Kn(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), s = it, c = qn(n, ot.__wbindgen_malloc), u = it, l = qn(t, ot.__wbindgen_malloc), _ = it, f = Zn(r, ot.__wbindgen_malloc), d = it, p = Zn(o, ot.__wbindgen_malloc), g = it, m = Kn(i, ot.__wbindgen_malloc, ot.__wbindgen_realloc), w = it, b = ot.placeMarkersBatch(a, s, c, u, l, _, f, d, p, g, m, w);
	if (b[2]) throw Qn(b[1]);
	return Qn(b[0]);
}
function Le(e) {
	let n, t;
	try {
		const i = Kn(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), a = it, s = ot.placeNonwearMarkers(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, Qn(s[2]);
		return n = r, t = o, Ln(r, o);
	} finally {
		ot.__wbindgen_free(n, t, 1);
	}
}
function $e(e) {
	const n = ot.prepareCompactPipelineOutcomeV1(e);
	if (n[2]) throw Qn(n[1]);
	return Qn(n[0]);
}
function Je(e) {
	const n = ot.prepareCompactPipelineV1(e);
	if (n[2]) throw Qn(n[1]);
	return Qn(n[0]);
}
function He(e, n, t, r, o, i, a) {
	const s = qn(e, ot.__wbindgen_malloc), c = it, u = qn(n, ot.__wbindgen_malloc), l = it, _ = qn(t, ot.__wbindgen_malloc), f = it, d = qn(r, ot.__wbindgen_malloc), p = it;
	var g = Yn(a) ? 0 : Kn(a, ot.__wbindgen_malloc, ot.__wbindgen_realloc), m = it;
	const w = ot.processGeneactivRaw(s, c, u, l, _, f, d, p, o, i, g, m);
	if (w[2]) throw Qn(w[1]);
	return Qn(w[0]);
}
function Xe(e) {
	const n = Zn(e, ot.__wbindgen_malloc), t = it, r = ot.processGt3xFull(n, t);
	if (r[2]) throw Qn(r[1]);
	return Qn(r[0]);
}
function Ye(e, n) {
	const t = Zn(e, ot.__wbindgen_malloc), r = it, o = ot.processGt3xFullWithEpoch(t, r, n);
	if (o[2]) throw Qn(o[1]);
	return Qn(o[0]);
}
function Ze(e) {
	const n = Zn(e, ot.__wbindgen_malloc), t = it, r = ot.processGt3xPart1(n, t);
	if (r[2]) throw Qn(r[1]);
	return Qn(r[0]);
}
function qe(e, n) {
	const t = Zn(e, ot.__wbindgen_malloc), r = it, o = ot.processGt3xPart1WithEpoch(t, r, n);
	if (o[2]) throw Qn(o[1]);
	return Qn(o[0]);
}
function Ke(e, n, t, r, o, i) {
	const a = qn(e, ot.__wbindgen_malloc), s = it, c = qn(n, ot.__wbindgen_malloc), u = it, l = qn(t, ot.__wbindgen_malloc), _ = it;
	var f = Yn(i) ? 0 : Kn(i, ot.__wbindgen_malloc, ot.__wbindgen_realloc), d = it;
	const p = ot.processRawXyz(a, s, c, u, l, _, r, o, f, d);
	if (p[2]) throw Qn(p[1]);
	return Qn(p[0]);
}
function Qe(e, n, t, r, o, i) {
	const a = qn(e, ot.__wbindgen_malloc), s = it, c = qn(n, ot.__wbindgen_malloc), u = it, l = qn(t, ot.__wbindgen_malloc), _ = it, f = qn(r, ot.__wbindgen_malloc), d = it;
	var p = Yn(i) ? 0 : Kn(i, ot.__wbindgen_malloc, ot.__wbindgen_realloc), g = it;
	const m = ot.processRawXyzImputed(a, s, c, u, l, _, f, d, o, p, g);
	if (m[2]) throw Qn(m[1]);
	return Qn(m[0]);
}
function en(e, n, t, r, o, i, a) {
	const s = qn(e, ot.__wbindgen_malloc), c = it, u = qn(n, ot.__wbindgen_malloc), l = it, _ = qn(t, ot.__wbindgen_malloc), f = it, d = qn(r, ot.__wbindgen_malloc), p = it;
	var g = Yn(i) ? 0 : Kn(i, ot.__wbindgen_malloc, ot.__wbindgen_realloc), m = it;
	const w = ot.processRawXyzImputedWithEpoch(s, c, u, l, _, f, d, p, o, g, m, a);
	if (w[2]) throw Qn(w[1]);
	return Qn(w[0]);
}
function nn(e) {
	const n = Zn(e, ot.__wbindgen_malloc), t = it, r = ot.readGgirMeta(n, t);
	if (r[2]) throw Qn(r[1]);
	return Qn(r[0]);
}
function tn() {
	return ot.recommended_chunk_size_mb() >>> 0;
}
function rn(e, n) {
	const t = qn(e, ot.__wbindgen_malloc), r = it, o = Kn(n, ot.__wbindgen_malloc, ot.__wbindgen_realloc), i = it, a = ot.reduceF64V1(t, r, o, i);
	if (a[2]) throw Qn(a[1]);
	return a[0];
}
function on(e) {
	const n = ot.runCompactPipelineOutcomeV1(e);
	if (n[2]) throw Qn(n[1]);
	return Qn(n[0]);
}
function an(e) {
	const n = ot.runCompactPipelineV1(e);
	if (n[2]) throw Qn(n[1]);
	return Qn(n[0]);
}
function sn(e, n) {
	const t = ot.runFullPipeline(e, n);
	if (t[2]) throw Qn(t[1]);
	return Qn(t[0]);
}
function cn(e) {
	const n = ot.runFullPipelineOutcomeV1(e);
	if (n[2]) throw Qn(n[1]);
	return Qn(n[0]);
}
function un(e) {
	const n = ot.runFullPipelineV1(e);
	if (n[2]) throw Qn(n[1]);
	return Qn(n[0]);
}
function ln(e, n) {
	const t = ot.runGgirFromEpoch(e, n);
	if (t[2]) throw Qn(t[1]);
	return Qn(t[0]);
}
function _n(e) {
	const n = Zn(e, ot.__wbindgen_malloc), t = it, r = ot.runMilestone(n, t);
	if (r[2]) throw Qn(r[1]);
	return Qn(r[0]);
}
function fn(e) {
	const n = ot.scoreAllDays(e);
	if (n[2]) throw Qn(n[1]);
	return Qn(n[0]);
}
function dn(e, n) {
	const t = qn(e, ot.__wbindgen_malloc), r = it, o = ot.scoreColeKripke(t, r, n);
	var i = Tn(o[0], o[1]).slice();
	return ot.__wbindgen_free(o[0], 1 * o[1], 1), i;
}
function pn(e) {
	let n, t;
	try {
		const i = Kn(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), a = it, s = ot.scoreConsensus(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, Qn(s[2]);
		return n = r, t = o, Ln(r, o);
	} finally {
		ot.__wbindgen_free(n, t, 1);
	}
}
function gn(e) {
	const n = ot.scoreConsensusMajority(e);
	if (n[2]) throw Qn(n[1]);
	return Qn(n[0]);
}
function mn(e) {
	let n, t;
	try {
		const i = Kn(e, ot.__wbindgen_malloc, ot.__wbindgen_realloc), a = it, s = ot.scoreEpochs(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, Qn(s[2]);
		return n = r, t = o, Ln(r, o);
	} finally {
		ot.__wbindgen_free(n, t, 1);
	}
}
function wn(e) {
	const n = qn(e, ot.__wbindgen_malloc), t = it, r = ot.scoreGgirHasib(n, t);
	var o = Tn(r[0], r[1]).slice();
	return ot.__wbindgen_free(r[0], 1 * r[1], 1), o;
}
function bn(e) {
	const n = ot.scoreGgirHasibVariant(e);
	if (n[2]) throw Qn(n[1]);
	return Qn(n[0]);
}
function yn(e, n, t) {
	const r = qn(e, ot.__wbindgen_malloc), o = it, i = qn(n, ot.__wbindgen_malloc), a = it, s = ot.scoreGgirSib(r, o, i, a, t);
	if (s[2]) throw Qn(s[1]);
	return Qn(s[0]);
}
function hn(e, n) {
	const t = qn(e, ot.__wbindgen_malloc), r = it, o = ot.scoreSadeh(t, r, n);
	var i = Tn(o[0], o[1]).slice();
	return ot.__wbindgen_free(o[0], 1 * o[1], 1), i;
}
function An(e) {
	const n = Zn(e, ot.__wbindgen_malloc), t = it, r = ot.sha256StreamFeed(n, t);
	if (r[1]) throw Qn(r[0]);
}
function vn() {
	let e, n;
	try {
		const o = ot.sha256StreamFinish();
		var t = o[0], r = o[1];
		if (o[3]) throw t = 0, r = 0, Qn(o[2]);
		return e = t, n = r, Ln(t, r);
	} finally {
		ot.__wbindgen_free(e, n, 1);
	}
}
function Sn() {
	ot.sha256StreamStart();
}
function Mn(e) {
	const n = Zn(e, ot.__wbindgen_malloc), t = it, r = ot.streamParseFeed(n, t);
	if (r[2]) throw Qn(r[1]);
	return r[0] >>> 0;
}
function Nn() {
	const e = ot.streamParseFinish();
	if (e[2]) throw Qn(e[1]);
	return H.__wrap(e[0]);
}
function En() {
	const e = ot.streamParseFinishChunk();
	if (e[2]) throw Qn(e[1]);
	return J.__wrap(e[0]);
}
function kn(e, n) {
	const t = ot.streamParseStart(e, n);
	if (t[1]) throw Qn(t[0]);
}
function Cn(e, n) {
	const t = ot.streamParseStartData(e, n);
	if (t[1]) throw Qn(t[0]);
}
function Fn(e, n, t) {
	const r = ot.streamParseStartWithEpoch(e, n, t);
	if (r[1]) throw Qn(r[0]);
}
function On(e, n) {
	const t = Zn(e, ot.__wbindgen_malloc), r = it, o = ot.summarizeActimetricPreschoolWristRfClasses(t, r, n);
	if (o[2]) throw Qn(o[1]);
	return Qn(o[0]);
}
function Pn(e, n, t, r, o) {
	const i = qn(e, ot.__wbindgen_malloc), a = it, s = qn(n, ot.__wbindgen_malloc), c = it, u = qn(t, ot.__wbindgen_malloc), l = it, _ = ot.zeroCrossingCounts(i, a, s, c, u, l, r, o);
	if (_[2]) throw Qn(_[1]);
	return Qn(_[0]);
}
function xn() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(e, n) {
				return Error(Ln(e, n));
			},
			__wbg_Number_32bf70a599af1d4b: function(e) {
				return Number(e);
			},
			__wbg_String_8564e559799eccda: function(e, n) {
				const t = Kn(String(n), ot.__wbindgen_malloc, ot.__wbindgen_realloc), r = it;
				jn().setInt32(e + 4, r, !0), jn().setInt32(e + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(e, n) {
				const t = "bigint" == typeof n ? n : void 0;
				jn().setBigInt64(e + 8, Yn(t) ? BigInt(0) : t, !0), jn().setInt32(e + 0, !Yn(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(e) {
				const n = "boolean" == typeof e ? e : void 0;
				return Yn(n) ? 16777215 : n ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(e, n) {
				const t = Kn(Gn(n), ot.__wbindgen_malloc, ot.__wbindgen_realloc), r = it;
				jn().setInt32(e + 4, r, !0), jn().setInt32(e + 0, t, !0);
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
				jn().setFloat64(e + 8, Yn(t) ? 0 : t, !0), jn().setInt32(e + 0, !Yn(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(e, n) {
				const t = "string" == typeof n ? n : void 0;
				var r = Yn(t) ? 0 : Kn(t, ot.__wbindgen_malloc, ot.__wbindgen_realloc), o = it;
				jn().setInt32(e + 4, o, !0), jn().setInt32(e + 0, r, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(e, n) {
				throw new Error(Ln(e, n));
			},
			__wbg_call_14b169f759b26747: function() {
				return Xn(function(e, n) {
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
					t = e, r = n, console.error(Ln(e, n));
				} finally {
					ot.__wbindgen_free(t, r, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(e) {
				return Array.from(e);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return Xn(function(e, n) {
					return Reflect.get(e, n);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return Xn(function(e, n) {
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
				return new Float64Array(zn(e, n));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(e, n) {
				return new Uint8Array(Tn(e, n));
			},
			__wbg_new_with_length_5cfd777b51078805: function(e) {
				return new Float64Array(e >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(e) {
				return new Uint8Array(e >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return Xn(function(e) {
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
				return Xn(function(e) {
					return Reflect.ownKeys(e);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(e, n, t) {
				Uint8Array.prototype.set.call(Tn(e, n), t);
			},
			__wbg_push_471a5b068a5295f6: function(e, n) {
				return e.push(n);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return Xn(function(e, n, t) {
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
				const t = Kn(n.stack, ot.__wbindgen_malloc, ot.__wbindgen_realloc), r = it;
				jn().setInt32(e + 4, r, !0), jn().setInt32(e + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const e = "undefined" == typeof global ? null : global;
				return Yn(e) ? 0 : Wn(e);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const e = "undefined" == typeof globalThis ? null : globalThis;
				return Yn(e) ? 0 : Wn(e);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const e = "undefined" == typeof self ? null : self;
				return Yn(e) ? 0 : Wn(e);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const e = "undefined" == typeof window ? null : window;
				return Yn(e) ? 0 : Wn(e);
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
				return Tn(e, n);
			},
			__wbindgen_cast_0000000000000004: function(e, n) {
				return Ln(e, n);
			},
			__wbindgen_cast_0000000000000005: function(e) {
				return BigInt.asUintN(64, e);
			},
			__wbindgen_init_externref_table: function() {
				const e = ot.__wbindgen_externrefs, n = e.grow(4);
				e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
			}
		}
	};
}
Symbol.dispose && (H.prototype[Symbol.dispose] = H.prototype.free);
const Rn = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((e) => ot.__wbg_streamchunkresult_free(e >>> 0, 1)), Un = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((e) => ot.__wbg_streamparseresult_free(e >>> 0, 1));
function Wn(e) {
	const n = ot.__externref_table_alloc();
	return ot.__wbindgen_externrefs.set(n, e), n;
}
function Gn(e) {
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
		n > 0 && (t += Gn(e[0]));
		for (let r = 1; r < n; r++) t += ", " + Gn(e[r]);
		return t += "]", t;
	}
	const t = /\[object ([^\]]+)\]/.exec(toString.call(e));
	let r;
	if (!(t && t.length > 1)) return toString.call(e);
	if (r = t[1], "Object" == r) try {
		return "Object(" + JSON.stringify(e) + ")";
	} catch (o) {
		return "Object";
	}
	return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : r;
}
function zn(e, n) {
	return e >>>= 0, Vn().subarray(e / 8, e / 8 + n);
}
function Dn(e, n) {
	return e >>>= 0, (null !== $n && 0 !== $n.byteLength || ($n = new Uint32Array(ot.memory.buffer)), $n).subarray(e / 4, e / 4 + n);
}
function Tn(e, n) {
	return e >>>= 0, Hn().subarray(e / 1, e / 1 + n);
}
let Bn = null;
function jn() {
	return (null === Bn || !0 === Bn.buffer.detached || void 0 === Bn.buffer.detached && Bn.buffer !== ot.memory.buffer) && (Bn = new DataView(ot.memory.buffer)), Bn;
}
let In = null;
function Vn() {
	return null !== In && 0 !== In.byteLength || (In = new Float64Array(ot.memory.buffer)), In;
}
function Ln(e, n) {
	return function(e, n) {
		return tt += n, tt >= nt && (et = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), et.decode(), tt = n), et.decode(Hn().subarray(e, e + n));
	}(e >>>= 0, n);
}
let $n = null, Jn = null;
function Hn() {
	return null !== Jn && 0 !== Jn.byteLength || (Jn = new Uint8Array(ot.memory.buffer)), Jn;
}
function Xn(e, n) {
	try {
		return e.apply(this, n);
	} catch (t) {
		const e = Wn(t);
		ot.__wbindgen_exn_store(e);
	}
}
function Yn(e) {
	return null == e;
}
function Zn(e, n) {
	const t = n(1 * e.length, 1) >>> 0;
	return Hn().set(e, t / 1), it = e.length, t;
}
function qn(e, n) {
	const t = n(8 * e.length, 8) >>> 0;
	return Vn().set(e, t / 8), it = e.length, t;
}
function Kn(e, n, t) {
	if (void 0 === t) {
		const t = rt.encode(e), r = n(t.length, 1) >>> 0;
		return Hn().subarray(r, r + t.length).set(t), it = t.length, r;
	}
	let r = e.length, o = n(r, 1) >>> 0;
	const i = Hn();
	let a = 0;
	for (; a < r; a++) {
		const n = e.charCodeAt(a);
		if (n > 127) break;
		i[o + a] = n;
	}
	if (a !== r) {
		0 !== a && (e = e.slice(a)), o = t(o, r, r = a + 3 * e.length, 1) >>> 0;
		const n = Hn().subarray(o + a, o + r);
		a += rt.encodeInto(e, n).written, o = t(o, r, a, 1) >>> 0;
	}
	return it = a, o;
}
function Qn(e) {
	const n = ot.__wbindgen_externrefs.get(e);
	return ot.__externref_table_dealloc(e), n;
}
let et = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
et.decode();
const nt = 2146435072;
let tt = 0;
const rt = new TextEncoder();
"encodeInto" in rt || (rt.encodeInto = function(e, n) {
	const t = rt.encode(e);
	return n.set(t), {
		read: e.length,
		written: t.length
	};
});
let ot, it = 0;
function at(e, n) {
	return ot = e.exports, Bn = null, In = null, $n = null, Jn = null, ot.__wbindgen_start(), ot;
}
function st(e) {
	if (void 0 !== ot) return ot;
	void 0 !== e && (Object.getPrototypeOf(e) === Object.prototype ? {module: e} = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const n = xn();
	return e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)), at(new WebAssembly.Instance(e, n));
}
async function ct(e) {
	if (void 0 !== ot) return ot;
	void 0 !== e && (Object.getPrototypeOf(e) === Object.prototype ? {module_or_path: e} = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === e && (e = new URL("/sleep-scoring-wasm/assets/actours_bg-DtKeMNM8.wasm", "" + import.meta.url));
	const n = xn();
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
	return at(t);
}
let ut = null;
const lt = /unreachable|RuntimeError|out of bounds|wasm/i;
function _t(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function ft(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function dt(e) {
	const n = ft(e), t = n?.analysis_date, r = ft(n?.intrinsic), o = r?.state;
	if (!n || "string" != typeof t || 0 === t.length || !r || "string" != typeof o || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(o)) return null;
	const i = r.score, a = r.verdict, s = r.infinite_reason, c = {}, u = [], l = n.per_guider;
	if (Array.isArray(l)) for (const g of l) {
		const e = ft(g);
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
	const _ = ft(r.features), f = _ && Array.isArray(_.feature_values) ? _ : null, d = ft(r.legacy_complexity_features) ?? (null === f ? _ : null) ?? {}, p = n.computed_at;
	return {
		difficulty: "number" == typeof i && Number.isFinite(i) ? i : null,
		state: o,
		verdict: "string" == typeof a ? a : null,
		infiniteReason: "string" == typeof s ? s : null,
		confidenceByGuider: c,
		features: d,
		featureVector: f,
		perGuider: u,
		computedAt: "string" == typeof p ? p : null,
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
const pt = [
	"skipped_disabled",
	"recalibrated",
	"identity_fallback_no_valid_fit",
	"identity_fallback_error_increased",
	"candidate_retained_below_preferred_quality"
];
function gt(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function mt(e, n) {
	const t = Array.isArray(e) ? e : [], r = (e) => gt(t[e]) ?? n;
	return [
		r(0),
		r(1),
		r(2)
	];
}
function wt(e, n) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		scale: mt(t.scale, n ? 1 : 0),
		offset: mt(t.offset, 0),
		temperatureOffset: mt(t.temperatureOffset, 0),
		errorStart: gt(t.errorStart),
		errorEnd: gt(t.errorEnd),
		fitAttempted: !0 === t.fitAttempted,
		numPoints: Math.max(0, Math.round(gt(t.numPoints) ?? 0)),
		hoursUsed: gt(t.hoursUsed) ?? 0,
		success: !0 === t.success,
		message: "string" == typeof t.message ? t.message : ""
	};
}
function bt(e) {
	if ("object" != typeof e || null === e) return null;
	const n = e, t = n.disposition;
	if ("string" != typeof t || !pt.includes(t)) return null;
	const r = wt(n, !0);
	return {
		...r,
		disposition: t,
		observed: "observed" in n ? wt(n.observed, !0) : r,
		applied: "applied" in n ? wt(n.applied, !0) : r
	};
}
const yt = 1073741824, ht = "actours.compute.v1", At = "actours-corrected-3.3.7-v2";
function vt(e) {
	return "number" == typeof e ? e : "nan" === e ? NaN : "positive_infinity" === e ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
}
function St(e) {
	return null === e ? null : vt(e);
}
let Mt = null, Nt = !1;
function Et() {
	return Mt || (Mt = (async () => {
		const e = await Promise.resolve().then(() => $);
		return await e.default(), "configureComputeMemoryBudgetV1" in e && "function" == typeof e.configureComputeMemoryBudgetV1 && e.configureComputeMemoryBudgetV1(function() {
			const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
			if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return yt;
			const n = Math.floor(1024 * e * 1024 * 1024 / 4);
			return Math.min(2147483648, Math.max(yt, n));
		}()), "initThreadPool" in e && "function" == typeof e.initThreadPool && "undefined" != typeof SharedArrayBuffer && "undefined" != typeof navigator && navigator.hardwareConcurrency > 1 && await e.initThreadPool(navigator.hardwareConcurrency), Nt || (function(e) {
			const n = /* @__PURE__ */ new Float64Array(16), t = new Uint8Array(e.scoreSadeh(n, -4));
			if (16 !== t.length) throw new Error(`WASM integrity check failed: scoreSadeh length ${t.length}, expected 16`);
			for (let r = 0; r < 16; r++) if (1 !== t[r]) throw new Error(`WASM integrity check failed: scoreSadeh(zeros)[${r}] = ${t[r]}, expected 1. Bundle may be corrupt — clear the site cache and reload.`);
		}(e), Nt = !0), e;
	})().catch((e) => {
		throw Mt = null, e;
	})), Mt;
}
function kt(e, n = "computeMimsUnit") {
	if ("object" != typeof e || null === e) throw new Error(`${n}: unexpected WASM return shape — got ${typeof e}`);
	const t = e, r = Ct(t.mimsUnit);
	if (!r) throw new Error(`${n}: missing mimsUnit array — got ${JSON.stringify(e)}`);
	const o = t.epochSeconds;
	if ("number" != typeof o || !Number.isFinite(o) || o <= 0) throw new Error(`${n}: missing positive epochSeconds — got ${JSON.stringify(e)}`);
	const i = (e) => Ct(t[e]) ?? void 0, a = {
		mimsUnit: r,
		epochSeconds: o
	}, s = i("mimsUnitX");
	s && (a.mimsUnitX = s);
	const c = i("mimsUnitY");
	c && (a.mimsUnitY = c);
	const u = i("mimsUnitZ");
	u && (a.mimsUnitZ = u);
	const l = i("headerTimeStamp");
	l && (a.headerTimeStamp = l);
	const _ = i("mimsOrientationTimestamp");
	_ && (a.mimsOrientationTimestamp = _);
	const f = i("mimsOrientationXAngle");
	f && (a.mimsOrientationXAngle = f);
	const d = i("mimsOrientationYAngle");
	d && (a.mimsOrientationYAngle = d);
	const p = i("mimsOrientationZAngle");
	return p && (a.mimsOrientationZAngle = p), a;
}
function Ct(e) {
	if (e instanceof Float64Array) return new Float64Array(e);
	if (ArrayBuffer.isView(e)) {
		const n = e;
		if ("number" == typeof n.length) return new Float64Array(Array.from(n, Number));
	}
	return Array.isArray(e) ? new Float64Array(e) : null;
}
function Ft(e) {
	if (e instanceof Uint8Array) return new Uint8Array(e);
	if (ArrayBuffer.isView(e)) {
		const n = e;
		if ("number" == typeof n.length) return new Uint8Array(Array.from(n, Number));
	}
	return Array.isArray(e) ? new Uint8Array(e) : null;
}
function Ot(e, n) {
	if ("object" != typeof e || null === e) throw new Error(`${n}: unexpected WASM return shape — got ${JSON.stringify(e)}`);
	const t = e, r = {}, o = [];
	for (const i of Object.keys(t)) {
		const e = t[i];
		if (Array.isArray(e)) {
			const n = new Float64Array(e);
			r[i] = n, o.push(n.buffer);
		} else r[i] = e;
	}
	return b(r, o);
}
function Pt(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function xt(e, n) {
	const t = e.computeNightSignals;
	if ("function" != typeof t) return console.warn("[wasm-worker] computeNightSignals is not present in this WASM bundle — night-signal detail degrades to empty."), { byDate: {} };
	let r;
	try {
		r = JSON.parse(t(function(e) {
			return JSON.stringify(function(e) {
				const n = _t(e.config), t = _t(n?.signals) ?? n;
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
		const n = {}, t = /* @__PURE__ */ new Set(), r = Pt(e)?.signals;
		if (!Array.isArray(r)) return { byDate: n };
		for (const o of r) {
			const e = Pt(o), r = e?.analysis_date, i = e?.epoch_length_seconds;
			if (!e || "string" != typeof r || 0 === r.length || !Number.isInteger(i) || i <= 0) return { byDate: {} };
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
const Rt = {
	day_summaries: [],
	days_with_signal: 0
};
function Ut(e, n, t) {
	const r = e[n];
	if ("function" != typeof r) return console.warn(`[wasm-worker] ${n} is not present in this WASM bundle — local marker placement degrades to null. Rebuild the actours WASM crate to enable it.`), null;
	const o = r(JSON.stringify(t));
	try {
		return JSON.parse(o);
	} catch {
		return console.warn(`[wasm-worker] ${n} returned invalid JSON — degrading to null.`), null;
	}
}
function Wt(e, n) {
	const t = "object" == typeof e && null !== e ? e : {}, r = t.nonwear, o = Array.isArray(r) ? r.map((e) => e ? 1 : 0) : null, i = t.elementSeconds, a = "number" == typeof i && Number.isFinite(i) && i > 0 ? i : n, s = Boolean(t.available) && null !== o, c = t.reason;
	return {
		nonwear: s ? o : null,
		conformance: "string" == typeof t.conformance ? t.conformance : s ? "conformant" : "unavailable",
		available: s,
		reason: "string" == typeof c ? c : null,
		elementSeconds: a
	};
}
function Gt(e) {
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
				ut = n ? `Rust trap at ${n[1]}:${n[2]}` : "Rust runtime trap", e("[wasm-worker] WASM runtime trap captured");
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
		const o = r;
		n[t] = async (...e) => {
			ut = null;
			try {
				return await o(...e);
			} catch (n) {
				const e = n instanceof Error ? n.message : String(n);
				if (ut && lt.test(e)) throw new Error(`WASM panic in ${t}(): ${ut}`, { cause: n });
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
		}), o = e.detectNonwearUnified;
		if ("function" != typeof o) return console.warn("[wasm-worker] detectNonwearUnified is not present in this WASM bundle — local raw nonwear degrades to unavailable. Rebuild the actours WASM crate to enable it."), r("detectNonwearUnified export missing (stale WASM bundle)");
		let i;
		try {
			i = JSON.parse(o(JSON.stringify(Gt(n))));
		} catch {
			return console.warn("[wasm-worker] detectNonwearUnified returned invalid JSON — degrading to unavailable."), r("detectNonwearUnified returned invalid JSON");
		}
		return Wt(i, t);
	}(await Et(), e),
	detectNonwearUnifiedBatch: async (e, n) => function(e, n, t) {
		const r = t.epochSeconds, o = {}, i = (e) => ({
			nonwear: null,
			conformance: "unavailable",
			available: !1,
			reason: e,
			elementSeconds: r
		}), a = e.detectNonwearUnified;
		if ("function" != typeof a) {
			console.warn("[wasm-worker] detectNonwearUnified is not present in this WASM bundle — local raw nonwear degrades to unavailable. Rebuild the actours WASM crate to enable it.");
			for (const e of n) o[e] = i("detectNonwearUnified export missing (stale WASM bundle)");
			return o;
		}
		const s = a, c = Gt({
			algorithm: "",
			signals: t
		}), u = JSON.stringify(c.signals), l = void 0 === c.config ? null : JSON.stringify(c.config);
		for (const f of n) {
			const e = null === l ? `{"algorithm":${JSON.stringify(f)},"signals":${u}}` : `{"algorithm":${JSON.stringify(f)},"signals":${u},"config":${l}}`;
			let n;
			try {
				n = JSON.parse(s(e));
			} catch (_) {
				console.warn(`[wasm-worker] detectNonwearUnified(${f}) returned invalid JSON — degrading to unavailable.`, _), o[f] = i("detectNonwearUnified returned invalid JSON");
				continue;
			}
			o[f] = Wt(n, r);
		}
		return o;
	}(await Et(), e, n),
	scoreEpochs: async (e) => function(e, n) {
		const t = n.signals.epochSeconds, r = (e) => ({
			sleepWake: null,
			conformance: "unavailable",
			available: !1,
			reason: e,
			elementSeconds: t
		}), o = e.scoreEpochs;
		if ("function" != typeof o) return console.warn("[wasm-worker] scoreEpochs is not present in this WASM bundle — unified local scoring degrades to unavailable. Rebuild the actours WASM crate to enable it."), r("scoreEpochs export missing (stale WASM bundle)");
		let i;
		try {
			i = JSON.parse(o(JSON.stringify(Gt(n))));
		} catch {
			return console.warn("[wasm-worker] scoreEpochs returned invalid JSON — degrading to unavailable."), r("scoreEpochs returned invalid JSON");
		}
		return function(e, n) {
			const t = "object" == typeof e && null !== e ? e : {}, r = t.sleepWake, o = Array.isArray(r) ? r.map((e) => e ? 1 : 0) : null, i = t.elementSeconds, a = "number" == typeof i && Number.isFinite(i) && i > 0 ? i : n, s = Boolean(t.available) && null !== o, c = t.reason;
			return {
				sleepWake: s ? o : null,
				conformance: "string" == typeof t.conformance ? t.conformance : s ? "conformant" : "unavailable",
				available: s,
				reason: "string" == typeof c ? c : null,
				elementSeconds: a
			};
		}(i, t);
	}(await Et(), e),
	async scoreSadeh(e, n) {
		const t = await Et(), r = new Uint8Array(t.scoreSadeh(e, n));
		return b(r, [r.buffer]);
	},
	async scoreColeKripke(e, n) {
		const t = await Et(), r = new Uint8Array(t.scoreColeKripke(e, n));
		return b(r, [r.buffer]);
	},
	async detectNonwear(e) {
		const n = await Et(), t = new Uint8Array(n.detectNonwear(e));
		return b(t, [t.buffer]);
	},
	async detectNonwearChoi2011(e, n = 60) {
		const t = await Et(), r = new Uint8Array("function" == typeof t.detectNonwearChoi2011Epoch ? t.detectNonwearChoi2011Epoch(e, n) : t.detectNonwearChoi2011(e));
		return b(r, [r.buffer]);
	},
	parseActigraphCsv: async (e, n) => Ot((await Et()).parseActigraphCsv(e, n), "parseActigraphCsv"),
	parseGeneactivCsv: async (e) => Ot((await Et()).parseGeneactivCsv(e), "parseGeneactivCsv"),
	isGeneactivFormat: async (e) => (await Et()).isGeneactivFormat(e),
	async csvBufferClear(e) {
		(await Et()).csvBufferClear(e);
	},
	async csvBufferAppend(e) {
		(await Et()).csvBufferAppend(e);
	},
	parseGeneactivCsvBuffered: async () => Ot((await Et()).parseGeneactivCsvBuffered(), "parseGeneactivCsvBuffered"),
	parseActigraphCsvBuffered: async (e) => Ot((await Et()).parseActigraphCsvBuffered(e), "parseActigraphCsvBuffered"),
	async sha256Start() {
		await Et(), Sn();
	},
	async sha256Feed(e) {
		await Et(), An(e);
	},
	sha256Finish: async () => (await Et(), vn()),
	async streamParseStart(e, n, t = 60) {
		const r = await Et();
		"function" == typeof r.streamParseStartWithEpoch ? r.streamParseStartWithEpoch(e, n, t) : r.streamParseStart(e, n);
	},
	async streamParseStartData(e, n) {
		(await Et()).streamParseStartData(e, n);
	},
	streamParseFeed: async (e) => (await Et()).streamParseFeed(e),
	async streamParseFinish() {
		const e = (await Et()).streamParseFinish();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinish: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const n = new Float64Array(e.timestampsMs), t = new Float64Array(e.axisX), r = new Float64Array(e.axisY), o = new Float64Array(e.axisZ), i = new Float64Array(e.vectorMagnitude), a = new Float64Array(e.temperature);
		return b({
			timestampsMs: n,
			axisX: t,
			axisY: r,
			axisZ: o,
			vectorMagnitude: i,
			temperature: a,
			sampleFrequency: e.sampleFrequency,
			headerRowsSkipped: e.headerRowsSkipped
		}, [
			n.buffer,
			t.buffer,
			r.buffer,
			o.buffer,
			i.buffer,
			a.buffer
		]);
	},
	async streamParseFinishChunk() {
		const e = (await Et()).streamParseFinishChunk();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinishChunk: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const n = new Float64Array(e.timestampsMs), t = new Float64Array(e.axisX), r = new Float64Array(e.axisY), o = new Float64Array(e.axisZ), i = new Float64Array(e.vectorMagnitude), a = new Float64Array(e.temperature), s = new Uint32Array(e.counts), c = new Uint32Array(e.tempCounts), u = new Float64Array(e.timestampsMs5s), l = new Float64Array(e.enmo5s), _ = new Float64Array(e.anglez5s), f = new Float64Array(e.anglex5s ?? 0), d = new Float64Array(e.angley5s ?? 0), p = new Float64Array(e.mad5s ?? 0), g = new Float64Array(e.enmoa5s ?? 0), m = e, w = new Float64Array(m.zcx60s ?? []), y = new Float64Array(m.zcy60s ?? []), h = new Float64Array(m.zcz60s ?? []), A = new Uint32Array(e.counts5s), v = e, S = new Float64Array(v.mimsUnit ?? []), M = new Float64Array(v.mimsUnitX ?? []), N = new Float64Array(v.mimsUnitY ?? []), E = new Float64Array(v.mimsUnitZ ?? []), k = e;
		return b({
			timestampsMs: n,
			axisX: t,
			axisY: r,
			axisZ: o,
			vectorMagnitude: i,
			temperature: a,
			counts: s,
			tempCounts: c,
			timestampsMs5s: u,
			enmo5s: l,
			anglez5s: _,
			anglex5s: f,
			angley5s: d,
			mad5s: p,
			enmoa5s: g,
			zcx60s: w,
			zcy60s: y,
			zcz60s: h,
			counts5s: A,
			mimsUnit: S,
			mimsUnitX: M,
			mimsUnitY: N,
			mimsUnitZ: E,
			sampleFrequency: e.sampleFrequency,
			headerRowsSkipped: e.headerRowsSkipped,
			rowsDropped: e.rowsDropped,
			rawRetentionDegraded: k.rawRetentionDegraded ?? !1,
			canonicalPassDegraded: k.canonicalPassDegraded ?? !1,
			canonicalPassReason: k.canonicalPassReason ?? null
		}, [
			n.buffer,
			t.buffer,
			r.buffer,
			o.buffer,
			i.buffer,
			a.buffer,
			s.buffer,
			c.buffer,
			u.buffer,
			l.buffer,
			_.buffer,
			f.buffer,
			d.buffer,
			p.buffer,
			g.buffer,
			w.buffer,
			y.buffer,
			h.buffer,
			A.buffer,
			S.buffer,
			M.buffer,
			N.buffer,
			E.buffer
		]);
	},
	async neishabouriCounts(e, n, t, r, o) {
		const i = (await Et()).neishabouriCounts(e, n, t, r, o), a = "object" == typeof i && null !== i ? i : null, s = a ? Ct(a.x) : null, c = a ? Ct(a.y) : null, u = a ? Ct(a.z) : null, l = a ? Ct(a.vm) : null;
		if (!(s && c && u && l)) throw new Error(`neishabouriCounts: unexpected WASM return shape — got ${JSON.stringify(i)}`);
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
	async zeroCrossingCounts(e, n, t, r, o) {
		const i = (await Et()).zeroCrossingCounts(e, n, t, r, o), a = "object" == typeof i && null !== i ? i : null, s = a ? Ct(a.zcx) : null, c = a ? Ct(a.zcy) : null, u = a ? Ct(a.zcz) : null;
		if (!s || !c || !u) throw new Error(`zeroCrossingCounts: unexpected WASM return shape — got ${JSON.stringify(i)}`);
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
	async computeMimsUnit(e, n, t, r, o = {}) {
		const i = await Et();
		if (!("computeMimsUnit" in i) || "function" != typeof i.computeMimsUnit) throw new Error("computeMimsUnit: current actours WASM bundle does not export MIMS_UNIT processing");
		const a = kt(i.computeMimsUnit(e, n, t, r, o), "computeMimsUnit");
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
	async computeMimsUnitDataframe(e, n, t, r, o = {}) {
		const i = await Et();
		if (!("computeMimsUnitDataframe" in i) || "function" != typeof i.computeMimsUnitDataframe) throw new Error("computeMimsUnitDataframe: current actours WASM bundle does not export MIMS_UNIT processing");
		const a = kt(i.computeMimsUnitDataframe(e, n, t, r, o), "computeMimsUnitDataframe");
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
		const o = await Et(), i = "function" == typeof o.classifyActimetricPreschoolWristRfLagLead ? o.classifyActimetricPreschoolWristRfLagLead : "function" == typeof o.classifyActimetricPreschoolWristRf ? o.classifyActimetricPreschoolWristRf : "function" == typeof o.actimetricPreschoolWristRfClasses ? o.actimetricPreschoolWristRfClasses : "function" == typeof o.predictActimetricPreschoolWristRfClasses ? o.predictActimetricPreschoolWristRfClasses : null;
		if (!i) throw new Error("classifyActimetricPreschoolWristRf: current actours WASM bundle does not export actimetric preschool wrist RF inference");
		const a = function(e, n = "classifyActimetricPreschoolWristRf") {
			const t = Ft(e);
			if (t) return {
				classes: t,
				epochSeconds: 15
			};
			const r = "object" == typeof e && null !== e ? e : null, o = r ? Ft(r.classes) ?? Ft(r.activityClasses) ?? Ft(r.predictions) ?? Ft(r.activity) : null;
			if (!o) throw new Error(`${n}: unexpected WASM return shape — expected Uint8Array or { classes }`);
			const i = "number" == typeof r?.epochSeconds && Number.isFinite(r.epochSeconds) ? r.epochSeconds : "number" == typeof r?.epoch_seconds && Number.isFinite(r.epoch_seconds) ? r.epoch_seconds : 15, a = "string" == typeof r?.classifier ? r.classifier : void 0, s = "string" == typeof r?.model ? r.model : void 0;
			return {
				classes: o,
				epochSeconds: i,
				...a ? { classifier: a } : {},
				...s ? { model: s } : {}
			};
		}(i(e, n, t, r), "classifyActimetricPreschoolWristRf");
		return b(a, [a.classes.buffer]);
	},
	async lstmSpectralFeatures30s(e, n, t, r) {
		const o = await Et(), i = o.lstmSpectralFeatures30s ?? o.spectralFeatures30s;
		if ("function" != typeof i) throw new Error("LSTM spectral feature extractor is not available in this WASM bundle");
		const a = i(e, n, t, r), s = "object" == typeof a && null !== a ? a : null, c = function(e) {
			if (e instanceof Float32Array) return new Float32Array(e);
			if (ArrayBuffer.isView(e)) {
				const n = e;
				if ("number" == typeof n.length) return new Float32Array(Array.from(n, Number));
			}
			return Array.isArray(e) ? new Float32Array(e) : null;
		}(s?.features ?? a), u = "number" == typeof s?.bins ? s.bins : 30, l = "number" == typeof s?.channels ? s.channels : 4, _ = "number" == typeof s?.epochs ? s.epochs : c ? Math.floor(c.length / (u * l)) : 0;
		if (!c || _ * u * l !== c.length) throw new Error(`lstmSpectralFeatures30s: unexpected WASM return shape — got ${JSON.stringify(a)}`);
		return b({
			features: c,
			epochs: _,
			bins: u,
			channels: l
		}, [c.buffer]);
	},
	async scoreConsensus(e, n) {
		const t = await Et(), r = JSON.stringify({
			strategy: e,
			label_sequences: n.map((e) => Array.from(e))
		}), o = JSON.parse(t.scoreConsensus(r)), i = null != o && "object" == typeof o ? o.consensus : void 0;
		if (!Array.isArray(i)) throw new Error(`scoreConsensus: unexpected WASM return shape — got ${JSON.stringify(o)}`);
		const a = new Uint8Array(i);
		return b(a, [a.buffer]);
	},
	async computeSleepMetrics(e, n, t) {
		const r = (await Et()).computeSleepMetrics(e, n, t);
		if (null == r || "object" != typeof r || "number" != typeof r.totalSleepTimeMinutes || "number" != typeof r.sleepEfficiency) throw new Error(`computeSleepMetrics: unexpected WASM return shape ${JSON.stringify(r)}`);
		return r;
	},
	computeFileDifficulty: async (e) => function(e, n) {
		const t = e.computeNightDifficulty;
		if ("function" != typeof t) return console.warn("[wasm-worker] computeNightDifficulty is not present in this WASM bundle — night difficulty degrades to empty. Rebuild the actours WASM crate to enable it."), { byDate: {} };
		const r = t(function(e) {
			return JSON.stringify(e);
		}(n));
		let o;
		try {
			o = JSON.parse(r);
		} catch {
			return console.warn("[wasm-worker] computeNightDifficulty returned invalid JSON — degrading to empty."), { byDate: {} };
		}
		return function(e) {
			const n = {}, t = /* @__PURE__ */ new Set(), r = Pt(e)?.results;
			if (!Array.isArray(r)) return { byDate: n };
			for (const o of r) {
				const e = dt(o);
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
		}(o);
	}(await Et(), e),
	computeFileSignals: async (e) => xt(await Et(), e),
	computeCircadian: async (e) => function(e, n) {
		const t = e.computeCircadian;
		if ("function" != typeof t) throw new Error("computeCircadian is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = t(JSON.stringify(n));
		let o;
		try {
			o = JSON.parse(r);
		} catch {
			return console.warn("[wasm-worker] computeCircadian returned invalid JSON — degrading to empty."), Rt;
		}
		return o && "object" == typeof o && Array.isArray(o.day_summaries) ? o : Rt;
	}(await Et(), e),
	aggregateEpochSeries: async (e) => function(e, n) {
		const t = e.aggregateEpochSeries;
		if ("function" != typeof t) throw new Error("aggregateEpochSeries is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = t(n);
		if (null == r || "object" != typeof r) throw new Error("aggregateEpochSeries returned an invalid result.");
		const o = r;
		if (!o.series || !Array.isArray(o.series.timestamps_ms)) throw new Error("aggregateEpochSeries returned an invalid result.");
		return r;
	}(await Et(), e),
	async runScoredVariantBatch(e) {
		const n = await Et(), t = {}, r = /* @__PURE__ */ new Set();
		let o = 0, i = !1;
		const a = Object.keys(e.classifierOutputs).sort(), s = Object.keys(e.nonwearMasks).filter((n) => null != e.nonwearMasks[n]?.mask).sort(), c = e.variants.filter((n) => {
			if (!e.classifierOutputs[n.classifierConfigId]) return o += 1, !1;
			const t = "none" === n.nonwear ? void 0 : e.nonwearMasks[n.nonwear];
			if ("none" !== n.nonwear && !t?.mask) {
				const e = t?.reason ? ` (${t.reason})` : "";
				r.add(`Nonwear detector "${n.nonwear}" is unavailable for this data — scored without a nonwear mask.${e}`);
			}
			return !0;
		}), u = e.timestamps.length;
		if (0 === u) {
			for (const e of c) t[e.id] = /* @__PURE__ */ new ArrayBuffer(0);
			c.length && r.add("No activity data");
		} else if (c.length) if ("function" != typeof n.placeMarkersBatch) i = !0;
		else {
			const o = new Uint8Array(a.length * u);
			for (const [n, t] of a.entries()) {
				const r = e.classifierOutputs[t];
				if (r.length !== u) throw new Error(`classifier_scores length ${String(r.length)} does not match 1 rows × ${String(u)} epochs`);
				o.set(r, n * u);
			}
			const i = new Uint8Array(s.length * u);
			for (const [n, t] of s.entries()) {
				const r = e.nonwearMasks[t].mask;
				if (r.length !== u) throw new Error(`nonwear_masks length ${String(r.length)} does not match 1 rows × ${String(u)} epochs`);
				i.set(r, n * u);
			}
			const l = function(e) {
				let n;
				if ("variant" in e) {
					const { variant: o, timestamps: i, activityCounts: a, sleepScores: s, analysisDate: c, epochLengthSeconds: u, hdczaWindow: l, diary: _, onsetMinConsecutiveSleep: f, offsetMinConsecutiveMinutes: d, choiNonwear: p } = e, g = o.config.rescoring === S && (r = S) === S ? { preset: r } : void 0;
					n = {
						timestamps: i,
						activityCounts: a,
						sleepScores: s,
						...void 0 !== p ? { choiNonwear: p } : {},
						ruleset: o.config.ruleset,
						...void 0 !== g ? { scorerPostprocessing: g } : {},
						analysisDate: c,
						epochLengthSeconds: u,
						hdczaWindow: l ? {
							startTimestamp: l[0],
							endTimestamp: l[1]
						} : null,
						diaryBedTime: _?.diaryInBedTime ?? null,
						diaryOnsetTime: _?.onsetTime ?? null,
						diaryWakeTime: _?.diaryWakeTime ?? null,
						diaryNaps: L(_?.naps),
						diaryNonwear: L(_?.nonwear),
						...void 0 !== f ? { onsetMinConsecutiveSleep: f } : {},
						...void 0 !== d ? { offsetMinConsecutiveMinutes: d } : {},
						...(t = o.config.periodSource, t === G ? { periodGuider: G } : t === z ? { periodGuider: z } : { sleepPeriodDetection: {
							sourceA: t,
							sourceB: P,
							fusionPolicy: x,
							applyNonwearGate: !1
						} })
					};
				} else n = e;
				var t, r;
				return {
					config: j(n),
					days: [I(n), ...(n.contextDays ?? []).filter((e) => e.analysisDate !== (n.analysisDate ?? "")).map(V)]
				};
			}({
				...e,
				timestamps: [],
				activityCounts: [],
				sleepScores: [],
				variant: { config: {
					...c[0],
					periodSource: "l5",
					rescoring: "none"
				} }
			}), { timestamps: _, activity_counts: f, sleep_scores: d, ...p } = l.days[0], g = n.placeMarkersBatch(JSON.stringify({
				...l.config,
				...p,
				classifier_ids: a,
				nonwear_ids: s
			}), Float64Array.from(e.timestamps), Float64Array.from(e.activityCounts), o, i, JSON.stringify(c.map((e) => ({
				id: e.id,
				classifier_index: a.indexOf(e.classifierConfigId),
				nonwear_index: "none" === e.nonwear ? -1 : s.indexOf(e.nonwear),
				ruleset: e.ruleset,
				period_source: e.periodSource,
				rescoring: e.rescoring
			}))));
			for (const e of g.notes) r.add(e);
			for (const [e, n] of c.entries()) t[n.id] = g.masks.slice(e * u, (e + 1) * u).buffer;
		}
		return b({
			masks: t,
			notes: [...r],
			missingClassifier: o,
			placementUnavailable: i
		}, Object.values(t));
	},
	placeMarkers: async (e) => Ut(await Et(), "placeMarkers", e),
	placeNonwearMarkers: async (e) => Ut(await Et(), "placeNonwearMarkers", e),
	epochRawData: async (e, n, t, r, o) => Ot((await Et()).epochRawData(e, n, t, r, o), "epochRawData"),
	async epochWithBandpass(e, n, t) {
		const r = (await Et()).epochWithBandpass(e, n, t), o = "object" == typeof r && null !== r ? r : null, i = Ct(o?.timestamps), a = Ct(o?.counts);
		if (!i || !a) throw new Error("epochWithBandpass: unexpected WASM return shape");
		return b({
			timestamps: i,
			counts: a
		}, [i.buffer, a.buffer]);
	},
	async computeEnmo5s(e, n, t, r) {
		const o = await Et();
		return new Float64Array(o.computeEnmo5s(e, n, t, r));
	},
	async computeAnglez5s(e, n, t, r) {
		const o = await Et();
		return new Float64Array(o.computeAnglez5s(e, n, t, r));
	},
	async processRawXyz(e, n, t, r, o, i) {
		const a = (await Et()).processRawXyz(e, n, t, r, o, i ?? void 0), s = "object" == typeof a && null !== a ? a : null, c = s ? Ct(s.enmo5s) : null, u = s ? Ct(s.anglez5s) : null, l = s ? Ct(s.countsX) : null, _ = s ? Ct(s.countsY) : null, f = s ? Ct(s.countsZ) : null, d = s ? Ct(s.countsVm) : null;
		if (!(c && u && l && _ && f && d)) throw new Error(`processRawXyz: unexpected WASM return shape — got ${JSON.stringify(a)}`);
		const p = (e) => Ct(e) ?? /* @__PURE__ */ new Float64Array(0), g = s ? p(s.anglex5s) : /* @__PURE__ */ new Float64Array(0), m = s ? p(s.angley5s) : /* @__PURE__ */ new Float64Array(0), w = s ? p(s.mad5s) : /* @__PURE__ */ new Float64Array(0), y = s ? p(s.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
		return b({
			enmo5s: c,
			anglez5s: u,
			anglex5s: g,
			angley5s: m,
			mad5s: w,
			enmoa5s: y,
			calibration: bt(s?.calibration),
			counts: {
				x: l,
				y: _,
				z: f,
				vm: d
			}
		}, [
			c.buffer,
			u.buffer,
			g.buffer,
			m.buffer,
			w.buffer,
			y.buffer,
			l.buffer,
			_.buffer,
			f.buffer,
			d.buffer
		]);
	},
	async processRawXyzImputed(e, n, t, r, o, i, a = 60) {
		const s = await Et(), c = "function" == typeof s.processRawXyzImputedWithEpoch ? s.processRawXyzImputedWithEpoch(e, n, t, r, o, i ?? void 0, a) : s.processRawXyzImputed(e, n, t, r, o, i ?? void 0), u = "object" == typeof c && null !== c ? c : null, l = u ? Ct(u.enmo5s) : null, _ = u ? Ct(u.anglez5s) : null, f = u ? Ct(u.countsX) : null, d = u ? Ct(u.countsY) : null, p = u ? Ct(u.countsZ) : null, g = u ? Ct(u.countsVm) : null;
		if (!(l && _ && f && d && p && g)) throw new Error(`processRawXyzImputed: unexpected WASM return shape — got ${JSON.stringify(c)}`);
		const m = (e) => Ct(e) ?? /* @__PURE__ */ new Float64Array(0), w = u ? m(u.anglex5s) : /* @__PURE__ */ new Float64Array(0), y = u ? m(u.angley5s) : /* @__PURE__ */ new Float64Array(0), h = u ? m(u.mad5s) : /* @__PURE__ */ new Float64Array(0), A = u ? m(u.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
		return b({
			enmo5s: l,
			anglez5s: _,
			anglex5s: w,
			angley5s: y,
			mad5s: h,
			enmoa5s: A,
			counts: {
				x: f,
				y: d,
				z: p,
				vm: g
			},
			firstTsMs: "number" == typeof u?.firstTsMs ? u.firstTsMs : 0,
			numGaps: "number" == typeof u?.numGaps ? u.numGaps : 0,
			samplesAdded: "number" == typeof u?.samplesAdded ? u.samplesAdded : 0,
			calibration: bt(u?.calibration)
		}, [
			l.buffer,
			_.buffer,
			w.buffer,
			y.buffer,
			h.buffer,
			A.buffer,
			f.buffer,
			d.buffer,
			p.buffer,
			g.buffer
		]);
	},
	async detectDetachFromAccelerationG(e, n) {
		const t = await Et(), r = new Uint8Array(t.detectDetachFromAccelerationG(e, n));
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
	}((await Et()).detectHdcza(e, n, t ?? null, r ?? null)),
	runFullPipelineV1: async (e, n, t, r, o) => function(e, n, t, r, o, i) {
		const a = e.runFullPipelineV1({
			contractVersion: ht,
			semanticProfile: At,
			signal: {
				x: n,
				y: t,
				z: r,
				sampleRateHz: o,
				startTsEpochMs: 1e3 * i,
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
					nonwearFraction: vt(s.metadata.nonwearFraction)
				},
				days: s.days.map((e) => ({
					calendarDate: e.calendarDate,
					dayNumber: e.dayNumber,
					validHours: vt(e.validHours),
					nonwearHours: vt(e.nonwearHours),
					totalEpochs: e.totalEpochs,
					sedentaryMinutes: vt(e.sedentaryMinutes),
					lightMinutes: vt(e.lightMinutes),
					moderateMinutes: vt(e.moderateMinutes),
					vigorousMinutes: vt(e.vigorousMinutes),
					mvpaMinutes: vt(e.mvpaMinutes),
					l5ValueMg: vt(e.l5ValueMg),
					l5OnsetEpoch: e.l5OnsetEpoch,
					m5ValueMg: vt(e.m5ValueMg),
					m5OnsetEpoch: e.m5OnsetEpoch,
					igGradient: vt(e.igGradient),
					igIntercept: vt(e.igIntercept),
					igRsquared: vt(e.igRsquared),
					fragTpIn2ac: vt(e.fragTpIn2ac),
					fragTpAc2in: vt(e.fragTpAc2in),
					nFragments: e.nFragments,
					nightNumber: e.nightNumber,
					tstMinutes: St(e.tstMinutes),
					wasoMinutes: St(e.wasoMinutes),
					sleepEfficiency: St(e.sleepEfficiency),
					numberOfAwakenings: e.numberOfAwakenings,
					sptDurationHours: St(e.sptDurationHours),
					cleaningCode: e.cleaningCode
				}))
			}),
			execution: a.execution,
			provenance: a.provenance
		} : null;
		var s;
	}(await Et(), e, n, t, r, o),
	getComputeIdentity: async () => function(e, n) {
		if (!/^[0-9a-f]{64}$/.test(n)) throw new Error("Actours WASM artifact identity is unavailable or invalid; refusing to attest this runtime");
		const t = "object" == typeof e && null !== e ? e : {}, r = (e, n) => {
			const t = e[n];
			if ("string" != typeof t || 0 === t.length) throw new Error(`Actours capability ${n} must be a non-empty string`);
			return t;
		}, o = r(t, "contractVersion");
		if (o !== ht) throw new Error(`Unsupported Actours compute contract ${o}; expected ${ht}`);
		const i = r(t, "crateVersion"), a = t.sourceRevision;
		if (null !== a && ("string" != typeof a || 0 === a.length)) throw new Error("Actours capability sourceRevision must be null or a non-empty string");
		const s = t.compiledFeatures;
		if (!Array.isArray(s) || !s.every((e) => "string" == typeof e && e.length > 0)) throw new Error("Actours capability compiledFeatures must be an array of non-empty strings");
		const c = r("object" == typeof t.execution && null !== t.execution ? t.execution : {}, "target");
		if ("wasm" !== c) throw new Error(`Unsupported Actours execution target ${c}; expected wasm`);
		if (!(Array.isArray(t.semanticProfiles) ? t.semanticProfiles : []).includes(At)) throw new Error(`Actours capability does not provide required semantic profile ${At}`);
		const u = r(t, "profileProofStatus");
		if ("proof_pending" !== u) throw new Error(`Unsupported Actours profile proof status ${u}; expected proof_pending`);
		const l = r(t, "temporalBasis");
		if ("utc" !== l) throw new Error(`Unsupported Actours temporal basis ${l}; expected utc`);
		return {
			contractVersion: o,
			crateVersion: i,
			sourceRevision: a,
			artifactSha256: n,
			compiledFeatures: s,
			target: c,
			semanticProfile: At,
			profileProofStatus: u,
			temporalBasis: l
		};
	}((await Et()).getComputeCapabilitiesV1(), "cb1932844f06d63c264ac82217adf8bba78f723b1d51019d08e2934f8253515b"),
	runGgirFromEpoch: async (e, n, t, r, o) => (await Et()).runGgirFromEpoch({
		anglez: e,
		enmo: n,
		sampleRateHz: t,
		startTsEpochSec: r,
		...o ? { invalid: o } : {}
	}, { ws3: 5 }),
	async readGgirMeta(e) {
		const n = await Et();
		if ("function" != typeof n.readGgirMeta) throw new Error("readGgirMeta: current actours WASM bundle does not export GGIR RData import");
		const t = n.readGgirMeta(e), r = "object" == typeof t && null !== t ? t : null, o = r ? Ct(r.timestampsMs) : null, i = r ? Ct(r.enmo5s) : null, a = r ? Ct(r.anglez5s) : null, s = r ? Ct(r.anglex5s) : null, c = r ? Ct(r.angley5s) : null, u = r ? Ft(r.invalidShort) : null, l = r ? Ft(r.nonwearShort) : null;
		if (!(o && i && a && u && l)) throw new Error(`readGgirMeta: unexpected WASM return shape — got ${JSON.stringify(t)}`);
		return b({
			timestampsMs: o,
			enmo5s: i,
			anglez5s: a,
			...s ? { anglex5s: s } : {},
			...c ? { angley5s: c } : {},
			invalidShort: u,
			nonwearShort: l,
			epochSeconds: "number" == typeof r?.epochSeconds ? r.epochSeconds : 5,
			longEpochSeconds: "number" == typeof r?.longEpochSeconds ? r.longEpochSeconds : 900,
			nShort: "number" == typeof r?.nShort ? r.nShort : i.length,
			nLong: "number" == typeof r?.nLong ? r.nLong : 0
		}, [
			o.buffer,
			i.buffer,
			a.buffer,
			...s ? [s.buffer] : [],
			...c ? [c.buffer] : [],
			u.buffer,
			l.buffer
		]);
	},
	async scoreGgirSib(e, n, t) {
		const r = (await Et()).scoreGgirSib(e, n, t);
		if ("object" != typeof r || null === r || !r.sadeh_ggir || !r.ck_ggir) throw new Error(`scoreGgirSib: unexpected WASM return shape — got ${JSON.stringify(r)}`);
		const o = r, i = new Uint8Array(o.sadeh_ggir), a = new Uint8Array(o.ck_ggir);
		return b({
			sadeh_ggir: i,
			ck_ggir: a
		}, [i.buffer, a.buffer]);
	},
	async scoreGgirHasib(e) {
		const n = (await Et()).scoreGgirHasib(e);
		if (!(n instanceof Uint8Array)) throw new Error("scoreGgirHasib: unexpected WASM return shape — expected Uint8Array, got " + typeof n);
		const t = new Uint8Array(n);
		return b(t, [t.buffer]);
	},
	async scoreGgirHasibVariant(e, n, t) {
		const r = function(e, n) {
			if ("object" != typeof e || null === e) throw new Error("scoreGgirHasibVariant: unexpected WASM return shape — got " + typeof e);
			const t = e, r = Ft(t.sib);
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
		}((await Et()).scoreGgirHasibVariant({
			data: e,
			algo: n,
			...t ? { config: t } : {}
		}), n);
		return b(r, [r.sib.buffer]);
	},
	async detectGgirHasptVariant(e) {
		const n = function(e, n) {
			if ("object" != typeof e || null === e) throw new Error("detectGgirHasptVariant: unexpected WASM return shape — got " + typeof e);
			const t = e, r = Ft(t.nomov), o = Ct(t.rollingMedian);
			if (!r || !o) throw new Error(`detectGgirHasptVariant: missing output arrays — got ${JSON.stringify(e)}`);
			return {
				algo: "string" == typeof t.algo ? t.algo : n,
				guider: "string" == typeof t.guider ? t.guider : "",
				startEpoch: "number" == typeof t.startEpoch ? t.startEpoch : null,
				endEpoch: "number" == typeof t.endEpoch ? t.endEpoch : null,
				threshold: "number" == typeof t.threshold ? t.threshold : NaN,
				nomov: r,
				rollingMedian: o
			};
		}((await Et()).detectGgirHasptVariant(e), e.algo);
		return b(n, [n.nomov.buffer, n.rollingMedian.buffer]);
	},
	async scoreAllDays(e) {
		const n = (await Et()).scoreAllDays(e);
		if (!Array.isArray(n)) throw new Error("scoreAllDays: expected array from WASM, got " + typeof n);
		const t = (e) => e instanceof Uint8Array || Array.isArray(e), r = n[0];
		if (n.length > 0 && ("object" != typeof r || null === r || !t(r.sadeh_actilife) || !t(r.nonwear))) throw new Error(`scoreAllDays: unexpected element shape — got ${JSON.stringify(r)}`);
		const o = n.map((e) => ({
			sadeh_actilife: new Uint8Array(e.sadeh_actilife),
			sadeh_original: new Uint8Array(e.sadeh_original),
			ck_actilife: new Uint8Array(e.ck_actilife),
			ck_original: new Uint8Array(e.ck_original),
			nonwear: new Uint8Array(e.nonwear)
		}));
		return b(o, o.flatMap((e) => [
			e.sadeh_actilife.buffer,
			e.sadeh_original.buffer,
			e.ck_actilife.buffer,
			e.ck_original.buffer,
			e.nonwear.buffer
		]));
	}
})));
