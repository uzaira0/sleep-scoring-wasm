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
		return l(e, n), [t, [t]];
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
		}), p(e, n, [], void 0);
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
function l(e, n = globalThis, r = ["*"]) {
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
		let g;
		try {
			const n = f.slice(0, -1).reduce((e, n) => e[n], e), r = f.reduce((e, n) => e[n], e);
			switch (_) {
				case "GET":
					g = r;
					break;
				case "SET":
					n[f.slice(-1)[0]] = h(s.data.value), g = !0;
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
						l(e, t), g = b(n, [n]);
					}
					break;
				case "RELEASE":
					g = void 0;
					break;
				default: return;
			}
		} catch (p) {
			g = {
				value: p,
				[a]: 0
			};
		}
		Promise.resolve(g).catch((e) => ({
			value: e,
			[a]: 0
		})).then((t) => {
			const [r, a] = y(t);
			n.postMessage(Object.assign(Object.assign({}, r), { id: c }), a), "RELEASE" === _ && (n.removeEventListener("message", o), u(n), i in e && "function" == typeof e[i] && e[i]());
		}).catch((e) => {
			const [t, r] = y({
				value: /* @__PURE__ */ new TypeError("Unserializable return value"),
				[a]: 0
			});
			n.postMessage(Object.assign(Object.assign({}, t), { id: c }), r);
		});
	}), n.start && n.start();
}
function u(e) {
	(function(e) {
		return "MessagePort" === e.constructor.name;
	})(e) && e.close();
}
function _(e) {
	if (e) throw new Error("Proxy has been released and is not useable");
}
function f(e) {
	return A(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
		u(e);
	});
}
const d = /* @__PURE__ */ new WeakMap(), g = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const n = (d.get(e) || 0) - 1;
	d.set(e, n), 0 === n && f(e);
});
function p(e, n, t = [], i = function() {}) {
	let a = !1;
	const s = new Proxy(i, {
		get(r, i) {
			if (_(a), i === o) return () => {
				(function(e) {
					g && g.unregister(e);
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
			return p(e, n, [...t, i]);
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
			if ("bind" === c) return p(e, n, t.slice(0, -1));
			const [l, u] = m(s);
			return A(e, n, {
				type: "APPLY",
				path: t.map((e) => e.toString()),
				argumentList: l
			}, u).then(h);
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
		d.set(n, t), g && g.register(e, n, e);
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
}, E = M.diary, k = M.hdcza, N = M.l5, C = M.selected_scorer_first_last, F = M.selected_scorer_longest_bout, P = M.quiet_bout, x = M.none, O = "use_source_a", U = {
	sourceA: "hdcza",
	sourceB: "selected_scorer_first_last",
	fusionPolicy: "source_b_bounded_by_source_a",
	mergeGapMinutes: 45,
	paddingMinutes: 0,
	minOverlapJaccard: .5,
	applyNonwearGate: !1
}, R = {
	[E]: "Diary",
	[k]: "HDCZA SPT",
	[N]: "L5 least active 5h",
	[C]: "Selected scorer first-last sleep",
	[F]: "Selected scorer longest sleep bout",
	[P]: "Quiet-bout least-active window",
	[x]: "None"
};
function T(e) {
	const n = e ?? {};
	return {
		...U,
		sourceA: n.sourceA ?? n.source_a ?? U.sourceA,
		sourceB: n.sourceB ?? n.source_b ?? U.sourceB,
		fusionPolicy: n.fusionPolicy ?? n.fusion_policy ?? U.fusionPolicy,
		mergeGapMinutes: n.mergeGapMinutes ?? n.merge_gap_minutes ?? U.mergeGapMinutes,
		paddingMinutes: n.paddingMinutes ?? n.padding_minutes ?? U.paddingMinutes,
		minOverlapJaccard: n.minOverlapJaccard ?? n.min_overlap_jaccard ?? U.minOverlapJaccard,
		applyNonwearGate: n.applyNonwearGate ?? n.apply_nonwear_gate ?? U.applyNonwearGate
	};
}
Object.values(M).map((e) => ({
	value: e,
	label: R[e]
}));
const W = "diary", G = "none", z = new Set(Object.values({
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
function D(e) {
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
	if (e.algorithm && z.has(e.algorithm) && (n.classifier = e.algorithm), null != e.epochLengthSeconds && (n.epoch_length_seconds = e.epochLengthSeconds), null != e.onsetMinConsecutiveSleep && (n.onset_min_consecutive_sleep = e.onsetMinConsecutiveSleep), null != e.offsetMinConsecutiveMinutes && (n.offset_min_consecutive_minutes = e.offsetMinConsecutiveMinutes), e.scorerPostprocessing && (n.scorer_postprocessing = e.scorerPostprocessing), e.nonwearDetector && "choi_2011" !== e.nonwearDetector && (n.nonwear_detector = e.nonwearDetector), e.sleepPeriodDetection) {
		const t = T(e.sleepPeriodDetection);
		n.merge_gap_minutes = t.mergeGapMinutes, n.padding_minutes = t.paddingMinutes, n.min_overlap_jaccard = t.minOverlapJaccard;
	}
	const t = function(e) {
		if (e.sleepPeriodDetection && !function(e) {
			const n = U;
			return e.sourceA === n.sourceA && e.sourceB === n.sourceB && e.fusionPolicy === n.fusionPolicy && e.mergeGapMinutes === n.mergeGapMinutes && e.paddingMinutes === n.paddingMinutes && e.minOverlapJaccard === n.minOverlapJaccard && e.applyNonwearGate === n.applyNonwearGate;
		}(T(e.sleepPeriodDetection))) {
			const n = function(e) {
				const n = T(e);
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
	const t = D(e.diaryNaps);
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
	const t = D(e.diaryNaps);
	t.length > 0 && (n.diary_naps = t);
	const r = B(e.diaryNonwear);
	return r.length > 0 && (n.diary_nonwear = r), n;
}
function L(e) {
	return e && 0 !== e.length ? e.map(([e, n]) => [e, n]) : null;
}
var $ = n({
	StreamChunkResult: () => H,
	StreamParseResult: () => X,
	actoursVersion: () => J,
	aggregateEpochSeries: () => Y,
	analyzePhysicalActivityDay: () => Z,
	classifyActimetricPreschoolWristRf: () => q,
	classifyActimetricPreschoolWristRfLagLead: () => K,
	classifyActimetricPreschoolWristRfLagLeadCalibrated: () => Q,
	computeAnglez5s: () => ee,
	computeCircadian: () => ne,
	computeCircadianTyped: () => te,
	computeEnmo5s: () => re,
	computeMimsUnit: () => oe,
	computeMimsUnitDataframe: () => ie,
	computeMimsUnitTimingBreakdown: () => ae,
	computeMimsUnitValues: () => se,
	computeNightDifficulty: () => ce,
	computeNightDifficultyTyped: () => le,
	computeNightSignals: () => ue,
	computeNightSignalsTyped: () => _e,
	computeSleepMetrics: () => fe,
	configureComputeMemoryBudgetV1: () => de,
	csvBufferAppend: () => ge,
	csvBufferClear: () => pe,
	default: () => bt,
	detectDetachFromAccelerationG: () => me,
	detectDeviceFormat: () => we,
	detectGgirHasptVariant: () => be,
	detectHdcza: () => ye,
	detectNonwear: () => he,
	detectNonwearChoi2011: () => Ae,
	detectNonwearChoi2011Bouts: () => ve,
	detectNonwearChoi2011Epoch: () => Se,
	detectNonwearChoi2012: () => Me,
	detectNonwearChoi2012Bouts: () => Ee,
	detectNonwearChoiBouts: () => ke,
	detectNonwearUnified: () => Ne,
	detectNonwearUnifiedBatchTyped: () => Ce,
	epochRawData: () => Fe,
	epochWithBandpass: () => Pe,
	executeHeroRuntime: () => xe,
	extractCapsense: () => Oe,
	getComputeCapabilitiesV1: () => Ue,
	initSync: () => wt,
	installPanicHook: () => Re,
	isGeneactivFormat: () => Te,
	lstmSpectralFeatures30s: () => We,
	neishabouriCounts: () => Ge,
	parseActigraphCsv: () => ze,
	parseActigraphCsvBuffered: () => De,
	parseCwa: () => Be,
	parseEpochSeries: () => je,
	parseGeneactivBin: () => Ie,
	parseGeneactivCsv: () => Ve,
	parseGeneactivCsvBuffered: () => Le,
	parseGt3x: () => $e,
	placeMarkers: () => He,
	placeMarkersBatch: () => Xe,
	placeMarkersTyped: () => Je,
	placeNonwearMarkers: () => Ye,
	placeNonwearMarkersTyped: () => Ze,
	prepareCompactPipelineOutcomeV1: () => qe,
	prepareCompactPipelineV1: () => Ke,
	processGeneactivRaw: () => Qe,
	processGt3xFull: () => en,
	processGt3xFullWithEpoch: () => nn,
	processGt3xPart1: () => tn,
	processGt3xPart1WithEpoch: () => rn,
	processRawXyz: () => on,
	processRawXyzImputed: () => an,
	processRawXyzImputedWithEpoch: () => sn,
	readGgirMeta: () => cn,
	recommended_chunk_size_mb: () => ln,
	reduceF64V1: () => un,
	runCompactPipelineOutcomeV1: () => _n,
	runCompactPipelineV1: () => fn,
	runFullPipeline: () => dn,
	runFullPipelineOutcomeV1: () => gn,
	runFullPipelineV1: () => pn,
	runGgirFromEpoch: () => mn,
	runMilestone: () => wn,
	scoreAllDays: () => bn,
	scoreColeKripke: () => yn,
	scoreConsensus: () => hn,
	scoreConsensusMajority: () => An,
	scoreConsensusTyped: () => vn,
	scoreEpochs: () => Sn,
	scoreEpochsTyped: () => Mn,
	scoreGgirHasib: () => En,
	scoreGgirHasibVariant: () => kn,
	scoreGgirSib: () => Nn,
	scoreSadeh: () => Cn,
	sha256StreamFeed: () => Fn,
	sha256StreamFinish: () => Pn,
	sha256StreamStart: () => xn,
	streamParseFeed: () => On,
	streamParseFinish: () => Un,
	streamParseFinishChunk: () => Rn,
	streamParseStart: () => Tn,
	streamParseStartData: () => Wn,
	streamParseStartWithEpoch: () => Gn,
	summarizeActimetricPreschoolWristRfClasses: () => zn,
	zeroCrossingCounts: () => Dn
}), H = class e {
	static __wrap(n) {
		n >>>= 0;
		const t = Object.create(e.prototype);
		return t.__wbg_ptr = n, jn.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return this.__wbg_ptr = 0, jn.unregister(this), e;
	}
	free() {
		const e = this.__destroy_into_raw();
		gt.__wbg_streamchunkresult_free(e, 0);
	}
	get anglex5s() {
		const e = gt.streamchunkresult_anglex5s(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get angley5s() {
		const e = gt.streamchunkresult_angley5s(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get anglez5s() {
		const e = gt.streamchunkresult_anglez5s(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisX() {
		const e = gt.streamchunkresult_axisX(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisY() {
		const e = gt.streamchunkresult_axisY(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisZ() {
		const e = gt.streamchunkresult_axisZ(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get canonicalPassDegraded() {
		return 0 !== gt.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const e = gt.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let n;
		return 0 !== e[0] && (n = Kn(e[0], e[1]).slice(), gt.__wbindgen_free(e[0], 1 * e[1], 1)), n;
	}
	get counts() {
		const e = gt.streamchunkresult_counts(this.__wbg_ptr);
		var n = Hn(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get counts5s() {
		const e = gt.streamchunkresult_counts5s(this.__wbg_ptr);
		var n = Hn(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get enmo5s() {
		const e = gt.streamchunkresult_enmo5s(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get enmoa5s() {
		const e = gt.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get headerRowsSkipped() {
		return gt.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const e = gt.streamchunkresult_mad5s(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnit() {
		const e = gt.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnitAvailable() {
		return 0 !== gt.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const e = gt.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let n;
		return 0 !== e[0] && (n = Kn(e[0], e[1]).slice(), gt.__wbindgen_free(e[0], 1 * e[1], 1)), n;
	}
	get mimsUnitX() {
		const e = gt.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnitY() {
		const e = gt.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnitZ() {
		const e = gt.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get rawRetentionDegraded() {
		return 0 !== gt.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return gt.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return gt.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return gt.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const e = gt.streamchunkresult_tempCounts(this.__wbg_ptr);
		var n = Hn(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get temperature() {
		const e = gt.streamchunkresult_temperature(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs() {
		const e = gt.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs5s() {
		const e = gt.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get vectorMagnitude() {
		const e = gt.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get zcx60s() {
		const e = gt.streamchunkresult_zcx60s(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get zcy60s() {
		const e = gt.streamchunkresult_zcy60s(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get zcz60s() {
		const e = gt.streamchunkresult_zcz60s(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
};
Symbol.dispose && (H.prototype[Symbol.dispose] = H.prototype.free);
var X = class e {
	static __wrap(n) {
		n >>>= 0;
		const t = Object.create(e.prototype);
		return t.__wbg_ptr = n, In.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return this.__wbg_ptr = 0, In.unregister(this), e;
	}
	free() {
		const e = this.__destroy_into_raw();
		gt.__wbg_streamparseresult_free(e, 0);
	}
	get axisX() {
		const e = gt.streamparseresult_axisX(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisY() {
		const e = gt.streamparseresult_axisY(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisZ() {
		const e = gt.streamparseresult_axisZ(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get canonicalPassDegraded() {
		return 0 !== gt.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const e = gt.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let n;
		return 0 !== e[0] && (n = Kn(e[0], e[1]).slice(), gt.__wbindgen_free(e[0], 1 * e[1], 1)), n;
	}
	get headerRowsSkipped() {
		return gt.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== gt.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return gt.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return gt.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const e = gt.streamparseresult_temperature(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs() {
		const e = gt.streamparseresult_timestampsMs(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get vectorMagnitude() {
		const e = gt.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var n = $n(e[0], e[1]).slice();
		return gt.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
};
function J() {
	let e, n;
	try {
		const t = gt.actoursVersion();
		return e = t[0], n = t[1], Kn(t[0], t[1]);
	} finally {
		gt.__wbindgen_free(e, n, 1);
	}
}
function Y(e) {
	const n = gt.aggregateEpochSeries(e);
	if (n[2]) throw lt(n[1]);
	return lt(n[0]);
}
function Z(e) {
	let n, t;
	try {
		const i = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), a = pt, s = gt.analyzePhysicalActivityDay(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, lt(s[2]);
		return n = r, t = o, Kn(r, o);
	} finally {
		gt.__wbindgen_free(n, t, 1);
	}
}
function q(e, n, t, r) {
	const o = st(e, gt.__wbindgen_malloc), i = pt, a = st(n, gt.__wbindgen_malloc), s = pt, c = st(t, gt.__wbindgen_malloc), l = pt, u = gt.classifyActimetricPreschoolWristRf(o, i, a, s, c, l, r);
	if (u[3]) throw lt(u[2]);
	var _ = Xn(u[0], u[1]).slice();
	return gt.__wbindgen_free(u[0], 1 * u[1], 1), _;
}
function K(e, n, t, r) {
	const o = st(e, gt.__wbindgen_malloc), i = pt, a = st(n, gt.__wbindgen_malloc), s = pt, c = st(t, gt.__wbindgen_malloc), l = pt, u = gt.classifyActimetricPreschoolWristRfLagLead(o, i, a, s, c, l, r);
	if (u[3]) throw lt(u[2]);
	var _ = Xn(u[0], u[1]).slice();
	return gt.__wbindgen_free(u[0], 1 * u[1], 1), _;
}
function Q(e, n, t, r) {
	const o = st(e, gt.__wbindgen_malloc), i = pt, a = st(n, gt.__wbindgen_malloc), s = pt, c = st(t, gt.__wbindgen_malloc), l = pt, u = gt.classifyActimetricPreschoolWristRfLagLeadCalibrated(o, i, a, s, c, l, r);
	if (u[3]) throw lt(u[2]);
	var _ = Xn(u[0], u[1]).slice();
	return gt.__wbindgen_free(u[0], 1 * u[1], 1), _;
}
function ee(e, n, t, r) {
	const o = st(e, gt.__wbindgen_malloc), i = pt, a = st(n, gt.__wbindgen_malloc), s = pt, c = st(t, gt.__wbindgen_malloc), l = pt, u = gt.computeAnglez5s(o, i, a, s, c, l, r);
	var _ = $n(u[0], u[1]).slice();
	return gt.__wbindgen_free(u[0], 8 * u[1], 8), _;
}
function ne(e) {
	let n, t;
	try {
		const i = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), a = pt, s = gt.computeCircadian(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, lt(s[2]);
		return n = r, t = o, Kn(r, o);
	} finally {
		gt.__wbindgen_free(n, t, 1);
	}
}
function te(e, n, t, r, o, i, a) {
	const s = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), c = pt, l = st(n, gt.__wbindgen_malloc), u = pt, _ = it(t, gt.__wbindgen_malloc), f = pt, d = st(r, gt.__wbindgen_malloc), g = pt, p = it(o, gt.__wbindgen_malloc), m = pt, w = at(i, gt.__wbindgen_malloc), b = pt, y = it(a, gt.__wbindgen_malloc), h = pt, A = gt.computeCircadianTyped(s, c, l, u, _, f, d, g, p, m, w, b, y, h);
	if (A[2]) throw lt(A[1]);
	return lt(A[0]);
}
function re(e, n, t, r) {
	const o = st(e, gt.__wbindgen_malloc), i = pt, a = st(n, gt.__wbindgen_malloc), s = pt, c = st(t, gt.__wbindgen_malloc), l = pt, u = gt.computeEnmo5s(o, i, a, s, c, l, r);
	var _ = $n(u[0], u[1]).slice();
	return gt.__wbindgen_free(u[0], 8 * u[1], 8), _;
}
function oe(e, n, t, r, o) {
	const i = st(e, gt.__wbindgen_malloc), a = pt, s = st(n, gt.__wbindgen_malloc), c = pt, l = st(t, gt.__wbindgen_malloc), u = pt, _ = gt.computeMimsUnit(i, a, s, c, l, u, r, o);
	if (_[2]) throw lt(_[1]);
	return lt(_[0]);
}
function ie(e, n, t, r, o) {
	const i = st(e, gt.__wbindgen_malloc), a = pt, s = st(n, gt.__wbindgen_malloc), c = pt, l = st(t, gt.__wbindgen_malloc), u = pt, _ = st(r, gt.__wbindgen_malloc), f = pt, d = gt.computeMimsUnitDataframe(i, a, s, c, l, u, _, f, o);
	if (d[2]) throw lt(d[1]);
	return lt(d[0]);
}
function ae(e, n, t, r, o) {
	const i = st(e, gt.__wbindgen_malloc), a = pt, s = st(n, gt.__wbindgen_malloc), c = pt, l = st(t, gt.__wbindgen_malloc), u = pt, _ = gt.computeMimsUnitTimingBreakdown(i, a, s, c, l, u, r, o);
	if (_[2]) throw lt(_[1]);
	return lt(_[0]);
}
function se(e, n, t, r, o) {
	const i = st(e, gt.__wbindgen_malloc), a = pt, s = st(n, gt.__wbindgen_malloc), c = pt, l = st(t, gt.__wbindgen_malloc), u = pt, _ = gt.computeMimsUnitValues(i, a, s, c, l, u, r, o);
	if (_[3]) throw lt(_[2]);
	var f = $n(_[0], _[1]).slice();
	return gt.__wbindgen_free(_[0], 8 * _[1], 8), f;
}
function ce(e) {
	let n, t;
	try {
		const i = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), a = pt, s = gt.computeNightDifficulty(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, lt(s[2]);
		return n = r, t = o, Kn(r, o);
	} finally {
		gt.__wbindgen_free(n, t, 1);
	}
}
function le(e, n, t, r, o, i, a, s, c, l, u, _, f, d, g, p, m, w, b) {
	const y = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), h = pt, A = st(n, gt.__wbindgen_malloc), v = pt, S = it(t, gt.__wbindgen_malloc), M = pt, E = st(r, gt.__wbindgen_malloc), k = pt, N = it(o, gt.__wbindgen_malloc), C = pt, F = at(i, gt.__wbindgen_malloc), P = pt, x = it(a, gt.__wbindgen_malloc), O = pt, U = at(s, gt.__wbindgen_malloc), R = pt, T = it(c, gt.__wbindgen_malloc), W = pt, G = st(l, gt.__wbindgen_malloc), z = pt, D = it(u, gt.__wbindgen_malloc), B = pt, j = st(_, gt.__wbindgen_malloc), I = pt, V = it(f, gt.__wbindgen_malloc), L = pt, $ = st(d, gt.__wbindgen_malloc), H = pt, X = it(g, gt.__wbindgen_malloc), J = pt, Y = st(p, gt.__wbindgen_malloc), Z = pt, q = it(m, gt.__wbindgen_malloc), K = pt, Q = at(w, gt.__wbindgen_malloc), ee = pt, ne = it(b, gt.__wbindgen_malloc), te = pt, re = gt.computeNightDifficultyTyped(y, h, A, v, S, M, E, k, N, C, F, P, x, O, U, R, T, W, G, z, D, B, j, I, V, L, $, H, X, J, Y, Z, q, K, Q, ee, ne, te);
	if (re[2]) throw lt(re[1]);
	return lt(re[0]);
}
function ue(e) {
	let n, t;
	try {
		const i = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), a = pt, s = gt.computeNightSignals(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, lt(s[2]);
		return n = r, t = o, Kn(r, o);
	} finally {
		gt.__wbindgen_free(n, t, 1);
	}
}
function _e(e, n, t, r, o, i, a, s, c, l, u, _, f, d, g, p, m, w, b) {
	const y = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), h = pt, A = st(n, gt.__wbindgen_malloc), v = pt, S = it(t, gt.__wbindgen_malloc), M = pt, E = st(r, gt.__wbindgen_malloc), k = pt, N = it(o, gt.__wbindgen_malloc), C = pt, F = at(i, gt.__wbindgen_malloc), P = pt, x = it(a, gt.__wbindgen_malloc), O = pt, U = at(s, gt.__wbindgen_malloc), R = pt, T = it(c, gt.__wbindgen_malloc), W = pt, G = st(l, gt.__wbindgen_malloc), z = pt, D = it(u, gt.__wbindgen_malloc), B = pt, j = st(_, gt.__wbindgen_malloc), I = pt, V = it(f, gt.__wbindgen_malloc), L = pt, $ = st(d, gt.__wbindgen_malloc), H = pt, X = it(g, gt.__wbindgen_malloc), J = pt, Y = st(p, gt.__wbindgen_malloc), Z = pt, q = it(m, gt.__wbindgen_malloc), K = pt, Q = at(w, gt.__wbindgen_malloc), ee = pt, ne = it(b, gt.__wbindgen_malloc), te = pt, re = gt.computeNightSignalsTyped(y, h, A, v, S, M, E, k, N, C, F, P, x, O, U, R, T, W, G, z, D, B, j, I, V, L, $, H, X, J, Y, Z, q, K, Q, ee, ne, te);
	if (re[2]) throw lt(re[1]);
	return lt(re[0]);
}
function fe(e, n, t) {
	const r = at(e, gt.__wbindgen_malloc), o = pt, i = st(n, gt.__wbindgen_malloc), a = pt, s = gt.computeSleepMetrics(r, o, i, a, t);
	if (s[2]) throw lt(s[1]);
	return lt(s[0]);
}
function de(e) {
	const n = gt.configureComputeMemoryBudgetV1(e);
	if (n[2]) throw lt(n[1]);
	return lt(n[0]);
}
function ge(e) {
	const n = at(e, gt.__wbindgen_malloc), t = pt;
	gt.csvBufferAppend(n, t);
}
function pe(e) {
	gt.csvBufferClear(e);
}
function me(e, n) {
	const t = st(e, gt.__wbindgen_malloc), r = pt, o = st(n, gt.__wbindgen_malloc), i = pt, a = gt.detectDetachFromAccelerationG(t, r, o, i);
	if (a[3]) throw lt(a[2]);
	var s = Xn(a[0], a[1]).slice();
	return gt.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function we(e, n) {
	let t, r;
	try {
		const o = at(e, gt.__wbindgen_malloc), i = pt, a = ct(n, gt.__wbindgen_malloc, gt.__wbindgen_realloc), s = pt, c = gt.detectDeviceFormat(o, i, a, s);
		return t = c[0], r = c[1], Kn(c[0], c[1]);
	} finally {
		gt.__wbindgen_free(t, r, 1);
	}
}
function be(e) {
	const n = gt.detectGgirHasptVariant(e);
	if (n[2]) throw lt(n[1]);
	return lt(n[0]);
}
function ye(e, n, t, r) {
	const o = st(e, gt.__wbindgen_malloc), i = pt;
	var a = ot(n) ? 0 : ct(n, gt.__wbindgen_malloc, gt.__wbindgen_realloc), s = pt, c = ot(t) ? 0 : st(t, gt.__wbindgen_malloc), l = pt, u = ot(r) ? 0 : st(r, gt.__wbindgen_malloc), _ = pt;
	return gt.detectHdcza(o, i, a, s, c, l, u, _);
}
function he(e) {
	const n = st(e, gt.__wbindgen_malloc), t = pt, r = gt.detectNonwear(n, t);
	var o = Xn(r[0], r[1]).slice();
	return gt.__wbindgen_free(r[0], 1 * r[1], 1), o;
}
function Ae(e) {
	const n = st(e, gt.__wbindgen_malloc), t = pt, r = gt.detectNonwearChoi2011(n, t);
	var o = Xn(r[0], r[1]).slice();
	return gt.__wbindgen_free(r[0], 1 * r[1], 1), o;
}
function ve(e) {
	const n = st(e, gt.__wbindgen_malloc), t = pt, r = gt.detectNonwearChoi2011Bouts(n, t);
	if (r[2]) throw lt(r[1]);
	return lt(r[0]);
}
function Se(e, n) {
	const t = st(e, gt.__wbindgen_malloc), r = pt, o = gt.detectNonwearChoi2011Epoch(t, r, n);
	if (o[3]) throw lt(o[2]);
	var i = Xn(o[0], o[1]).slice();
	return gt.__wbindgen_free(o[0], 1 * o[1], 1), i;
}
function Me(e) {
	const n = st(e, gt.__wbindgen_malloc), t = pt, r = gt.detectNonwearChoi2012(n, t);
	var o = Xn(r[0], r[1]).slice();
	return gt.__wbindgen_free(r[0], 1 * r[1], 1), o;
}
function Ee(e) {
	const n = st(e, gt.__wbindgen_malloc), t = pt, r = gt.detectNonwearChoi2012Bouts(n, t);
	if (r[2]) throw lt(r[1]);
	return lt(r[0]);
}
function ke(e) {
	const n = st(e, gt.__wbindgen_malloc), t = pt, r = gt.detectNonwearChoiBouts(n, t);
	if (r[2]) throw lt(r[1]);
	return lt(r[0]);
}
function Ne(e) {
	let n, t;
	try {
		const i = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), a = pt, s = gt.detectNonwearUnified(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, lt(s[2]);
		return n = r, t = o, Kn(r, o);
	} finally {
		gt.__wbindgen_free(n, t, 1);
	}
}
function Ce(e, n, t, r, o, i, a) {
	const s = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), c = pt, l = ct(n, gt.__wbindgen_malloc, gt.__wbindgen_realloc), u = pt, _ = st(t, gt.__wbindgen_malloc), f = pt, d = st(r, gt.__wbindgen_malloc), g = pt, p = st(o, gt.__wbindgen_malloc), m = pt, w = gt.detectNonwearUnifiedBatchTyped(s, c, l, u, _, f, d, g, p, m, i, a);
	if (w[2]) throw lt(w[1]);
	return lt(w[0]);
}
function Fe(e, n, t, r, o) {
	const i = st(e, gt.__wbindgen_malloc), a = pt, s = st(n, gt.__wbindgen_malloc), c = pt, l = st(t, gt.__wbindgen_malloc), u = pt, _ = st(r, gt.__wbindgen_malloc), f = pt, d = gt.epochRawData(i, a, s, c, l, u, _, f, o);
	if (d[2]) throw lt(d[1]);
	return lt(d[0]);
}
function Pe(e, n, t) {
	const r = st(e, gt.__wbindgen_malloc), o = pt, i = st(n, gt.__wbindgen_malloc), a = pt, s = gt.epochWithBandpass(r, o, i, a, t);
	if (s[2]) throw lt(s[1]);
	return lt(s[0]);
}
function xe(e, n) {
	let t, r;
	try {
		const a = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), s = pt, c = ct(n, gt.__wbindgen_malloc, gt.__wbindgen_realloc), l = pt, u = gt.executeHeroRuntime(a, s, c, l);
		var o = u[0], i = u[1];
		if (u[3]) throw o = 0, i = 0, lt(u[2]);
		return t = o, r = i, Kn(o, i);
	} finally {
		gt.__wbindgen_free(t, r, 1);
	}
}
function Oe(e) {
	const n = at(e, gt.__wbindgen_malloc), t = pt, r = gt.extractCapsense(n, t);
	if (r[2]) throw lt(r[1]);
	return lt(r[0]);
}
function Ue() {
	const e = gt.getComputeCapabilitiesV1();
	if (e[2]) throw lt(e[1]);
	return lt(e[0]);
}
function Re() {
	gt.installPanicHook();
}
function Te(e) {
	const n = at(e, gt.__wbindgen_malloc), t = pt;
	return 0 !== gt.isGeneactivFormat(n, t);
}
function We(e, n, t, r) {
	const o = st(e, gt.__wbindgen_malloc), i = pt, a = st(n, gt.__wbindgen_malloc), s = pt, c = st(t, gt.__wbindgen_malloc), l = pt, u = gt.lstmSpectralFeatures30s(o, i, a, s, c, l, r);
	if (u[2]) throw lt(u[1]);
	return lt(u[0]);
}
function Ge(e, n, t, r, o) {
	const i = st(e, gt.__wbindgen_malloc), a = pt, s = st(n, gt.__wbindgen_malloc), c = pt, l = st(t, gt.__wbindgen_malloc), u = pt, _ = gt.neishabouriCounts(i, a, s, c, l, u, r, o);
	if (_[2]) throw lt(_[1]);
	return lt(_[0]);
}
function ze(e, n) {
	const t = at(e, gt.__wbindgen_malloc), r = pt, o = gt.parseActigraphCsv(t, r, n);
	if (o[2]) throw lt(o[1]);
	return lt(o[0]);
}
function De(e) {
	const n = gt.parseActigraphCsvBuffered(e);
	if (n[2]) throw lt(n[1]);
	return lt(n[0]);
}
function Be(e) {
	const n = at(e, gt.__wbindgen_malloc), t = pt, r = gt.parseCwa(n, t);
	if (r[2]) throw lt(r[1]);
	return lt(r[0]);
}
function je(e, n) {
	const t = at(e, gt.__wbindgen_malloc), r = pt, o = ct(n, gt.__wbindgen_malloc, gt.__wbindgen_realloc), i = pt, a = gt.parseEpochSeries(t, r, o, i);
	if (a[2]) throw lt(a[1]);
	return lt(a[0]);
}
function Ie(e) {
	const n = at(e, gt.__wbindgen_malloc), t = pt, r = gt.parseGeneactivBin(n, t);
	if (r[2]) throw lt(r[1]);
	return lt(r[0]);
}
function Ve(e) {
	const n = at(e, gt.__wbindgen_malloc), t = pt, r = gt.parseGeneactivCsv(n, t);
	if (r[2]) throw lt(r[1]);
	return lt(r[0]);
}
function Le() {
	const e = gt.parseGeneactivCsvBuffered();
	if (e[2]) throw lt(e[1]);
	return lt(e[0]);
}
function $e(e) {
	const n = at(e, gt.__wbindgen_malloc), t = pt, r = gt.parseGt3x(n, t);
	if (r[2]) throw lt(r[1]);
	return lt(r[0]);
}
function He(e) {
	let n, t;
	try {
		const i = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), a = pt, s = gt.placeMarkers(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, lt(s[2]);
		return n = r, t = o, Kn(r, o);
	} finally {
		gt.__wbindgen_free(n, t, 1);
	}
}
function Xe(e, n, t, r, o, i) {
	const a = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), s = pt, c = st(n, gt.__wbindgen_malloc), l = pt, u = st(t, gt.__wbindgen_malloc), _ = pt, f = at(r, gt.__wbindgen_malloc), d = pt, g = at(o, gt.__wbindgen_malloc), p = pt, m = ct(i, gt.__wbindgen_malloc, gt.__wbindgen_realloc), w = pt, b = gt.placeMarkersBatch(a, s, c, l, u, _, f, d, g, p, m, w);
	if (b[2]) throw lt(b[1]);
	return lt(b[0]);
}
function Je(e, n, t, r, o, i, a, s, c, l, u, _, f, d, g, p, m, w, b) {
	const y = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), h = pt, A = st(n, gt.__wbindgen_malloc), v = pt, S = it(t, gt.__wbindgen_malloc), M = pt, E = st(r, gt.__wbindgen_malloc), k = pt, N = it(o, gt.__wbindgen_malloc), C = pt, F = at(i, gt.__wbindgen_malloc), P = pt, x = it(a, gt.__wbindgen_malloc), O = pt, U = at(s, gt.__wbindgen_malloc), R = pt, T = it(c, gt.__wbindgen_malloc), W = pt, G = st(l, gt.__wbindgen_malloc), z = pt, D = it(u, gt.__wbindgen_malloc), B = pt, j = st(_, gt.__wbindgen_malloc), I = pt, V = it(f, gt.__wbindgen_malloc), L = pt, $ = st(d, gt.__wbindgen_malloc), H = pt, X = it(g, gt.__wbindgen_malloc), J = pt, Y = st(p, gt.__wbindgen_malloc), Z = pt, q = it(m, gt.__wbindgen_malloc), K = pt, Q = at(w, gt.__wbindgen_malloc), ee = pt, ne = it(b, gt.__wbindgen_malloc), te = pt, re = gt.placeMarkersTyped(y, h, A, v, S, M, E, k, N, C, F, P, x, O, U, R, T, W, G, z, D, B, j, I, V, L, $, H, X, J, Y, Z, q, K, Q, ee, ne, te);
	if (re[2]) throw lt(re[1]);
	return lt(re[0]);
}
function Ye(e) {
	let n, t;
	try {
		const i = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), a = pt, s = gt.placeNonwearMarkers(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, lt(s[2]);
		return n = r, t = o, Kn(r, o);
	} finally {
		gt.__wbindgen_free(n, t, 1);
	}
}
function Ze(e, n, t, r) {
	const o = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), i = pt, a = st(n, gt.__wbindgen_malloc), s = pt, c = st(t, gt.__wbindgen_malloc), l = pt, u = at(r, gt.__wbindgen_malloc), _ = pt, f = gt.placeNonwearMarkersTyped(o, i, a, s, c, l, u, _);
	if (f[2]) throw lt(f[1]);
	return lt(f[0]);
}
function qe(e) {
	const n = gt.prepareCompactPipelineOutcomeV1(e);
	if (n[2]) throw lt(n[1]);
	return lt(n[0]);
}
function Ke(e) {
	const n = gt.prepareCompactPipelineV1(e);
	if (n[2]) throw lt(n[1]);
	return lt(n[0]);
}
function Qe(e, n, t, r, o, i, a) {
	const s = st(e, gt.__wbindgen_malloc), c = pt, l = st(n, gt.__wbindgen_malloc), u = pt, _ = st(t, gt.__wbindgen_malloc), f = pt, d = st(r, gt.__wbindgen_malloc), g = pt;
	var p = ot(a) ? 0 : ct(a, gt.__wbindgen_malloc, gt.__wbindgen_realloc), m = pt;
	const w = gt.processGeneactivRaw(s, c, l, u, _, f, d, g, o, i, p, m);
	if (w[2]) throw lt(w[1]);
	return lt(w[0]);
}
function en(e) {
	const n = at(e, gt.__wbindgen_malloc), t = pt, r = gt.processGt3xFull(n, t);
	if (r[2]) throw lt(r[1]);
	return lt(r[0]);
}
function nn(e, n) {
	const t = at(e, gt.__wbindgen_malloc), r = pt, o = gt.processGt3xFullWithEpoch(t, r, n);
	if (o[2]) throw lt(o[1]);
	return lt(o[0]);
}
function tn(e) {
	const n = at(e, gt.__wbindgen_malloc), t = pt, r = gt.processGt3xPart1(n, t);
	if (r[2]) throw lt(r[1]);
	return lt(r[0]);
}
function rn(e, n) {
	const t = at(e, gt.__wbindgen_malloc), r = pt, o = gt.processGt3xPart1WithEpoch(t, r, n);
	if (o[2]) throw lt(o[1]);
	return lt(o[0]);
}
function on(e, n, t, r, o, i) {
	const a = st(e, gt.__wbindgen_malloc), s = pt, c = st(n, gt.__wbindgen_malloc), l = pt, u = st(t, gt.__wbindgen_malloc), _ = pt;
	var f = ot(i) ? 0 : ct(i, gt.__wbindgen_malloc, gt.__wbindgen_realloc), d = pt;
	const g = gt.processRawXyz(a, s, c, l, u, _, r, o, f, d);
	if (g[2]) throw lt(g[1]);
	return lt(g[0]);
}
function an(e, n, t, r, o, i) {
	const a = st(e, gt.__wbindgen_malloc), s = pt, c = st(n, gt.__wbindgen_malloc), l = pt, u = st(t, gt.__wbindgen_malloc), _ = pt, f = st(r, gt.__wbindgen_malloc), d = pt;
	var g = ot(i) ? 0 : ct(i, gt.__wbindgen_malloc, gt.__wbindgen_realloc), p = pt;
	const m = gt.processRawXyzImputed(a, s, c, l, u, _, f, d, o, g, p);
	if (m[2]) throw lt(m[1]);
	return lt(m[0]);
}
function sn(e, n, t, r, o, i, a) {
	const s = st(e, gt.__wbindgen_malloc), c = pt, l = st(n, gt.__wbindgen_malloc), u = pt, _ = st(t, gt.__wbindgen_malloc), f = pt, d = st(r, gt.__wbindgen_malloc), g = pt;
	var p = ot(i) ? 0 : ct(i, gt.__wbindgen_malloc, gt.__wbindgen_realloc), m = pt;
	const w = gt.processRawXyzImputedWithEpoch(s, c, l, u, _, f, d, g, o, p, m, a);
	if (w[2]) throw lt(w[1]);
	return lt(w[0]);
}
function cn(e) {
	const n = at(e, gt.__wbindgen_malloc), t = pt, r = gt.readGgirMeta(n, t);
	if (r[2]) throw lt(r[1]);
	return lt(r[0]);
}
function ln() {
	return gt.recommended_chunk_size_mb() >>> 0;
}
function un(e, n) {
	const t = st(e, gt.__wbindgen_malloc), r = pt, o = ct(n, gt.__wbindgen_malloc, gt.__wbindgen_realloc), i = pt, a = gt.reduceF64V1(t, r, o, i);
	if (a[2]) throw lt(a[1]);
	return a[0];
}
function _n(e) {
	const n = gt.runCompactPipelineOutcomeV1(e);
	if (n[2]) throw lt(n[1]);
	return lt(n[0]);
}
function fn(e) {
	const n = gt.runCompactPipelineV1(e);
	if (n[2]) throw lt(n[1]);
	return lt(n[0]);
}
function dn(e, n) {
	const t = gt.runFullPipeline(e, n);
	if (t[2]) throw lt(t[1]);
	return lt(t[0]);
}
function gn(e) {
	const n = gt.runFullPipelineOutcomeV1(e);
	if (n[2]) throw lt(n[1]);
	return lt(n[0]);
}
function pn(e) {
	const n = gt.runFullPipelineV1(e);
	if (n[2]) throw lt(n[1]);
	return lt(n[0]);
}
function mn(e, n) {
	const t = gt.runGgirFromEpoch(e, n);
	if (t[2]) throw lt(t[1]);
	return lt(t[0]);
}
function wn(e) {
	const n = at(e, gt.__wbindgen_malloc), t = pt, r = gt.runMilestone(n, t);
	if (r[2]) throw lt(r[1]);
	return lt(r[0]);
}
function bn(e) {
	const n = gt.scoreAllDays(e);
	if (n[2]) throw lt(n[1]);
	return lt(n[0]);
}
function yn(e, n) {
	const t = st(e, gt.__wbindgen_malloc), r = pt, o = gt.scoreColeKripke(t, r, n);
	var i = Xn(o[0], o[1]).slice();
	return gt.__wbindgen_free(o[0], 1 * o[1], 1), i;
}
function hn(e) {
	let n, t;
	try {
		const i = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), a = pt, s = gt.scoreConsensus(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, lt(s[2]);
		return n = r, t = o, Kn(r, o);
	} finally {
		gt.__wbindgen_free(n, t, 1);
	}
}
function An(e) {
	const n = gt.scoreConsensusMajority(e);
	if (n[2]) throw lt(n[1]);
	return lt(n[0]);
}
function vn(e, n, t) {
	const r = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), o = pt, i = at(n, gt.__wbindgen_malloc), a = pt, s = it(t, gt.__wbindgen_malloc), c = pt, l = gt.scoreConsensusTyped(r, o, i, a, s, c);
	if (l[2]) throw lt(l[1]);
	return lt(l[0]);
}
function Sn(e) {
	let n, t;
	try {
		const i = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), a = pt, s = gt.scoreEpochs(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, lt(s[2]);
		return n = r, t = o, Kn(r, o);
	} finally {
		gt.__wbindgen_free(n, t, 1);
	}
}
function Mn(e, n, t, r, o, i) {
	const a = ct(e, gt.__wbindgen_malloc, gt.__wbindgen_realloc), s = pt, c = st(n, gt.__wbindgen_malloc), l = pt, u = st(t, gt.__wbindgen_malloc), _ = pt, f = st(r, gt.__wbindgen_malloc), d = pt, g = gt.scoreEpochsTyped(a, s, c, l, u, _, f, d, o, i);
	if (g[2]) throw lt(g[1]);
	return lt(g[0]);
}
function En(e) {
	const n = st(e, gt.__wbindgen_malloc), t = pt, r = gt.scoreGgirHasib(n, t);
	var o = Xn(r[0], r[1]).slice();
	return gt.__wbindgen_free(r[0], 1 * r[1], 1), o;
}
function kn(e) {
	const n = gt.scoreGgirHasibVariant(e);
	if (n[2]) throw lt(n[1]);
	return lt(n[0]);
}
function Nn(e, n, t) {
	const r = st(e, gt.__wbindgen_malloc), o = pt, i = st(n, gt.__wbindgen_malloc), a = pt, s = gt.scoreGgirSib(r, o, i, a, t);
	if (s[2]) throw lt(s[1]);
	return lt(s[0]);
}
function Cn(e, n) {
	const t = st(e, gt.__wbindgen_malloc), r = pt, o = gt.scoreSadeh(t, r, n);
	var i = Xn(o[0], o[1]).slice();
	return gt.__wbindgen_free(o[0], 1 * o[1], 1), i;
}
function Fn(e) {
	const n = at(e, gt.__wbindgen_malloc), t = pt, r = gt.sha256StreamFeed(n, t);
	if (r[1]) throw lt(r[0]);
}
function Pn() {
	let e, n;
	try {
		const o = gt.sha256StreamFinish();
		var t = o[0], r = o[1];
		if (o[3]) throw t = 0, r = 0, lt(o[2]);
		return e = t, n = r, Kn(t, r);
	} finally {
		gt.__wbindgen_free(e, n, 1);
	}
}
function xn() {
	gt.sha256StreamStart();
}
function On(e) {
	const n = at(e, gt.__wbindgen_malloc), t = pt, r = gt.streamParseFeed(n, t);
	if (r[2]) throw lt(r[1]);
	return r[0] >>> 0;
}
function Un() {
	const e = gt.streamParseFinish();
	if (e[2]) throw lt(e[1]);
	return X.__wrap(e[0]);
}
function Rn() {
	const e = gt.streamParseFinishChunk();
	if (e[2]) throw lt(e[1]);
	return H.__wrap(e[0]);
}
function Tn(e, n) {
	const t = gt.streamParseStart(e, n);
	if (t[1]) throw lt(t[0]);
}
function Wn(e, n) {
	const t = gt.streamParseStartData(e, n);
	if (t[1]) throw lt(t[0]);
}
function Gn(e, n, t) {
	const r = gt.streamParseStartWithEpoch(e, n, t);
	if (r[1]) throw lt(r[0]);
}
function zn(e, n) {
	const t = at(e, gt.__wbindgen_malloc), r = pt, o = gt.summarizeActimetricPreschoolWristRfClasses(t, r, n);
	if (o[2]) throw lt(o[1]);
	return lt(o[0]);
}
function Dn(e, n, t, r, o) {
	const i = st(e, gt.__wbindgen_malloc), a = pt, s = st(n, gt.__wbindgen_malloc), c = pt, l = st(t, gt.__wbindgen_malloc), u = pt, _ = gt.zeroCrossingCounts(i, a, s, c, l, u, r, o);
	if (_[2]) throw lt(_[1]);
	return lt(_[0]);
}
function Bn() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(e, n) {
				return Error(Kn(e, n));
			},
			__wbg_Number_32bf70a599af1d4b: function(e) {
				return Number(e);
			},
			__wbg_String_8564e559799eccda: function(e, n) {
				const t = ct(String(n), gt.__wbindgen_malloc, gt.__wbindgen_realloc), r = pt;
				Yn().setInt32(e + 4, r, !0), Yn().setInt32(e + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(e, n) {
				const t = "bigint" == typeof n ? n : void 0;
				Yn().setBigInt64(e + 8, ot(t) ? BigInt(0) : t, !0), Yn().setInt32(e + 0, !ot(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(e) {
				const n = "boolean" == typeof e ? e : void 0;
				return ot(n) ? 16777215 : n ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(e, n) {
				const t = ct(Ln(n), gt.__wbindgen_malloc, gt.__wbindgen_realloc), r = pt;
				Yn().setInt32(e + 4, r, !0), Yn().setInt32(e + 0, t, !0);
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
				Yn().setFloat64(e + 8, ot(t) ? 0 : t, !0), Yn().setInt32(e + 0, !ot(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(e, n) {
				const t = "string" == typeof n ? n : void 0;
				var r = ot(t) ? 0 : ct(t, gt.__wbindgen_malloc, gt.__wbindgen_realloc), o = pt;
				Yn().setInt32(e + 4, o, !0), Yn().setInt32(e + 0, r, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(e, n) {
				throw new Error(Kn(e, n));
			},
			__wbg_call_14b169f759b26747: function() {
				return rt(function(e, n) {
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
					t = e, r = n, console.error(Kn(e, n));
				} finally {
					gt.__wbindgen_free(t, r, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(e) {
				return Array.from(e);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return rt(function(e, n) {
					return Reflect.get(e, n);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return rt(function(e, n) {
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
				return new Float64Array($n(e, n));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(e, n) {
				return new Uint8Array(Xn(e, n));
			},
			__wbg_new_with_length_5cfd777b51078805: function(e) {
				return new Float64Array(e >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(e) {
				return new Uint8Array(e >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return rt(function(e) {
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
				return rt(function(e) {
					return Reflect.ownKeys(e);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(e, n, t) {
				Uint8Array.prototype.set.call(Xn(e, n), t);
			},
			__wbg_push_471a5b068a5295f6: function(e, n) {
				return e.push(n);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return rt(function(e, n, t) {
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
				const t = ct(n.stack, gt.__wbindgen_malloc, gt.__wbindgen_realloc), r = pt;
				Yn().setInt32(e + 4, r, !0), Yn().setInt32(e + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const e = "undefined" == typeof global ? null : global;
				return ot(e) ? 0 : Vn(e);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const e = "undefined" == typeof globalThis ? null : globalThis;
				return ot(e) ? 0 : Vn(e);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const e = "undefined" == typeof self ? null : self;
				return ot(e) ? 0 : Vn(e);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const e = "undefined" == typeof window ? null : window;
				return ot(e) ? 0 : Vn(e);
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
				return Xn(e, n);
			},
			__wbindgen_cast_0000000000000004: function(e, n) {
				return Kn(e, n);
			},
			__wbindgen_cast_0000000000000005: function(e) {
				return BigInt.asUintN(64, e);
			},
			__wbindgen_init_externref_table: function() {
				const e = gt.__wbindgen_externrefs, n = e.grow(4);
				e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
			}
		}
	};
}
Symbol.dispose && (X.prototype[Symbol.dispose] = X.prototype.free);
const jn = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((e) => gt.__wbg_streamchunkresult_free(e >>> 0, 1)), In = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((e) => gt.__wbg_streamparseresult_free(e >>> 0, 1));
function Vn(e) {
	const n = gt.__externref_table_alloc();
	return gt.__wbindgen_externrefs.set(n, e), n;
}
function Ln(e) {
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
		n > 0 && (t += Ln(e[0]));
		for (let r = 1; r < n; r++) t += ", " + Ln(e[r]);
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
function $n(e, n) {
	return e >>>= 0, qn().subarray(e / 8, e / 8 + n);
}
function Hn(e, n) {
	return e >>>= 0, et().subarray(e / 4, e / 4 + n);
}
function Xn(e, n) {
	return e >>>= 0, tt().subarray(e / 1, e / 1 + n);
}
let Jn = null;
function Yn() {
	return (null === Jn || !0 === Jn.buffer.detached || void 0 === Jn.buffer.detached && Jn.buffer !== gt.memory.buffer) && (Jn = new DataView(gt.memory.buffer)), Jn;
}
let Zn = null;
function qn() {
	return null !== Zn && 0 !== Zn.byteLength || (Zn = new Float64Array(gt.memory.buffer)), Zn;
}
function Kn(e, n) {
	return function(e, n) {
		return ft += n, ft >= _t && (ut = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), ut.decode(), ft = n), ut.decode(tt().subarray(e, e + n));
	}(e >>>= 0, n);
}
let Qn = null;
function et() {
	return null !== Qn && 0 !== Qn.byteLength || (Qn = new Uint32Array(gt.memory.buffer)), Qn;
}
let nt = null;
function tt() {
	return null !== nt && 0 !== nt.byteLength || (nt = new Uint8Array(gt.memory.buffer)), nt;
}
function rt(e, n) {
	try {
		return e.apply(this, n);
	} catch (t) {
		const e = Vn(t);
		gt.__wbindgen_exn_store(e);
	}
}
function ot(e) {
	return null == e;
}
function it(e, n) {
	const t = n(4 * e.length, 4) >>> 0;
	return et().set(e, t / 4), pt = e.length, t;
}
function at(e, n) {
	const t = n(1 * e.length, 1) >>> 0;
	return tt().set(e, t / 1), pt = e.length, t;
}
function st(e, n) {
	const t = n(8 * e.length, 8) >>> 0;
	return qn().set(e, t / 8), pt = e.length, t;
}
function ct(e, n, t) {
	if (void 0 === t) {
		const t = dt.encode(e), r = n(t.length, 1) >>> 0;
		return tt().subarray(r, r + t.length).set(t), pt = t.length, r;
	}
	let r = e.length, o = n(r, 1) >>> 0;
	const i = tt();
	let a = 0;
	for (; a < r; a++) {
		const n = e.charCodeAt(a);
		if (n > 127) break;
		i[o + a] = n;
	}
	if (a !== r) {
		0 !== a && (e = e.slice(a)), o = t(o, r, r = a + 3 * e.length, 1) >>> 0;
		const n = tt().subarray(o + a, o + r);
		a += dt.encodeInto(e, n).written, o = t(o, r, a, 1) >>> 0;
	}
	return pt = a, o;
}
function lt(e) {
	const n = gt.__wbindgen_externrefs.get(e);
	return gt.__externref_table_dealloc(e), n;
}
let ut = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
ut.decode();
const _t = 2146435072;
let ft = 0;
const dt = new TextEncoder();
"encodeInto" in dt || (dt.encodeInto = function(e, n) {
	const t = dt.encode(e);
	return n.set(t), {
		read: e.length,
		written: t.length
	};
});
let gt, pt = 0;
function mt(e, n) {
	return gt = e.exports, Jn = null, Zn = null, Qn = null, nt = null, gt.__wbindgen_start(), gt;
}
function wt(e) {
	if (void 0 !== gt) return gt;
	void 0 !== e && (Object.getPrototypeOf(e) === Object.prototype ? {module: e} = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const n = Bn();
	return e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)), mt(new WebAssembly.Instance(e, n));
}
async function bt(e) {
	if (void 0 !== gt) return gt;
	void 0 !== e && (Object.getPrototypeOf(e) === Object.prototype ? {module_or_path: e} = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === e && (e = new URL("/sleep-scoring-wasm/assets/actours_bg-Cvo5eX3Q.wasm", "" + import.meta.url));
	const n = Bn();
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
	return mt(t);
}
let yt = null;
const ht = /unreachable|RuntimeError|out of bounds|wasm/i;
function At(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function vt(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function St(e) {
	const n = vt(e), t = n?.analysis_date, r = vt(n?.intrinsic), o = r?.state;
	if (!n || "string" != typeof t || 0 === t.length || !r || "string" != typeof o || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(o)) return null;
	const i = r.score, a = r.verdict, s = r.infinite_reason, c = {}, l = [], u = n.per_guider;
	if (Array.isArray(u)) for (const p of u) {
		const e = vt(p);
		if (!e) continue;
		l.push(e);
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
	const _ = vt(r.features), f = _ && Array.isArray(_.feature_values) ? _ : null, d = vt(r.legacy_complexity_features) ?? (null === f ? _ : null) ?? {}, g = n.computed_at;
	return {
		difficulty: "number" == typeof i && Number.isFinite(i) ? i : null,
		state: o,
		verdict: "string" == typeof a ? a : null,
		infiniteReason: "string" == typeof s ? s : null,
		confidenceByGuider: c,
		features: d,
		featureVector: f,
		perGuider: l,
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
const Mt = [
	"skipped_disabled",
	"recalibrated",
	"identity_fallback_no_valid_fit",
	"identity_fallback_error_increased",
	"candidate_retained_below_preferred_quality"
];
function Et(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function kt(e, n) {
	const t = Array.isArray(e) ? e : [], r = (e) => Et(t[e]) ?? n;
	return [
		r(0),
		r(1),
		r(2)
	];
}
function Nt(e, n) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		scale: kt(t.scale, n ? 1 : 0),
		offset: kt(t.offset, 0),
		temperatureOffset: kt(t.temperatureOffset, 0),
		errorStart: Et(t.errorStart),
		errorEnd: Et(t.errorEnd),
		fitAttempted: !0 === t.fitAttempted,
		numPoints: Math.max(0, Math.round(Et(t.numPoints) ?? 0)),
		hoursUsed: Et(t.hoursUsed) ?? 0,
		success: !0 === t.success,
		message: "string" == typeof t.message ? t.message : ""
	};
}
function Ct(e) {
	if ("object" != typeof e || null === e) return null;
	const n = e, t = n.disposition;
	if ("string" != typeof t || !Mt.includes(t)) return null;
	const r = Nt(n, !0);
	return {
		...r,
		disposition: t,
		observed: "observed" in n ? Nt(n.observed, !0) : r,
		applied: "applied" in n ? Nt(n.applied, !0) : r
	};
}
const Ft = 1073741824, Pt = "actours.compute.v1", xt = "actours-corrected-3.3.7-v2";
function Ot(e) {
	return "number" == typeof e ? e : "nan" === e ? NaN : "positive_infinity" === e ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
}
function Ut(e) {
	return null === e ? null : Ot(e);
}
let Rt = null, Tt = !1;
function Wt() {
	return Rt || (Rt = (async () => {
		const e = await Promise.resolve().then(() => $);
		return await e.default(), "configureComputeMemoryBudgetV1" in e && "function" == typeof e.configureComputeMemoryBudgetV1 && e.configureComputeMemoryBudgetV1(function() {
			const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
			if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return Ft;
			const n = Math.floor(1024 * e * 1024 * 1024 / 4);
			return Math.min(2147483648, Math.max(Ft, n));
		}()), "initThreadPool" in e && "function" == typeof e.initThreadPool && "undefined" != typeof SharedArrayBuffer && "undefined" != typeof navigator && navigator.hardwareConcurrency > 1 && await e.initThreadPool(navigator.hardwareConcurrency), Tt || (function(e) {
			const n = /* @__PURE__ */ new Float64Array(16), t = new Uint8Array(e.scoreSadeh(n, -4));
			if (16 !== t.length) throw new Error(`WASM integrity check failed: scoreSadeh length ${t.length}, expected 16`);
			for (let r = 0; r < 16; r++) if (1 !== t[r]) throw new Error(`WASM integrity check failed: scoreSadeh(zeros)[${r}] = ${t[r]}, expected 1. Bundle may be corrupt — clear the site cache and reload.`);
		}(e), Tt = !0), e;
	})().catch((e) => {
		throw Rt = null, e;
	})), Rt;
}
function Gt(e, n = "computeMimsUnit") {
	if ("object" != typeof e || null === e) throw new Error(`${n}: unexpected WASM return shape — got ${typeof e}`);
	const t = e, r = zt(t.mimsUnit);
	if (!r) throw new Error(`${n}: missing mimsUnit array — got ${JSON.stringify(e)}`);
	const o = t.epochSeconds;
	if ("number" != typeof o || !Number.isFinite(o) || o <= 0) throw new Error(`${n}: missing positive epochSeconds — got ${JSON.stringify(e)}`);
	const i = (e) => zt(t[e]) ?? void 0, a = {
		mimsUnit: r,
		epochSeconds: o
	}, s = i("mimsUnitX");
	s && (a.mimsUnitX = s);
	const c = i("mimsUnitY");
	c && (a.mimsUnitY = c);
	const l = i("mimsUnitZ");
	l && (a.mimsUnitZ = l);
	const u = i("headerTimeStamp");
	u && (a.headerTimeStamp = u);
	const _ = i("mimsOrientationTimestamp");
	_ && (a.mimsOrientationTimestamp = _);
	const f = i("mimsOrientationXAngle");
	f && (a.mimsOrientationXAngle = f);
	const d = i("mimsOrientationYAngle");
	d && (a.mimsOrientationYAngle = d);
	const g = i("mimsOrientationZAngle");
	return g && (a.mimsOrientationZAngle = g), a;
}
function zt(e) {
	if (e instanceof Float64Array) return new Float64Array(e);
	if (ArrayBuffer.isView(e)) {
		const n = e;
		if ("number" == typeof n.length) return new Float64Array(Array.from(n, Number));
	}
	return Array.isArray(e) ? new Float64Array(e) : null;
}
function Dt(e) {
	if (e instanceof Uint8Array) return new Uint8Array(e);
	if (ArrayBuffer.isView(e)) {
		const n = e;
		if ("number" == typeof n.length) return new Uint8Array(Array.from(n, Number));
	}
	return Array.isArray(e) ? new Uint8Array(e) : null;
}
function Bt(e, n) {
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
function jt(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
const It = {
	day_summaries: [],
	days_with_signal: 0
};
function Vt(e, n) {
	const t = "object" == typeof e && null !== e ? e : {}, r = t.nonwear, o = r instanceof Uint8Array ? r : null, i = t.element_seconds, a = "number" == typeof i && Number.isFinite(i) && i > 0 ? i : n, s = Boolean(t.available) && null !== o, c = t.reason;
	return {
		nonwear: s ? o : null,
		conformance: "string" == typeof t.conformance ? t.conformance : s ? "conformant" : "unavailable",
		available: s,
		reason: "string" == typeof c ? c : null,
		elementSeconds: a
	};
}
function Lt(e, n, t, r) {
	const o = t.epochSeconds, i = {}, a = (e) => ({
		nonwear: null,
		conformance: "unavailable",
		available: !1,
		reason: e,
		elementSeconds: o
	}), s = e.detectNonwearUnifiedBatchTyped;
	if ("function" != typeof s) {
		console.warn("[wasm-worker] detectNonwearUnifiedBatchTyped export missing — degrading to unavailable.");
		for (const e of n) i[e] = a("detectNonwearUnifiedBatchTyped export missing (stale WASM bundle)");
		return i;
	}
	try {
		const e = s(JSON.stringify(n), JSON.stringify(r ?? null), t.counts ?? /* @__PURE__ */ new Float64Array(), t.raw ?? /* @__PURE__ */ new Float64Array(), t.temperature ?? /* @__PURE__ */ new Float64Array(), t.epochSeconds, t.sampleRate ?? 0);
		for (const t of n) i[t] = Vt(e.results.find((e) => e.algorithm === t), o);
	} catch {
		console.warn("[wasm-worker] detectNonwearUnifiedBatchTyped failed — degrading to unavailable.");
		for (const e of n) i[e] = a("detectNonwearUnifiedBatchTyped failed");
	}
	return i;
}
"undefined" != typeof self && "undefined" == typeof window && (function() {
	const e = console.error.bind(console);
	console.error = (...n) => {
		try {
			const t = n.map((e) => "string" == typeof e ? e : e instanceof Error ? e.stack ?? e.message : String(e)).join(" ");
			if (/panicked at|RuntimeError|unreachable/i.test(t)) {
				const n = /([A-Za-z0-9_.-]+\.rs):(\d+)/.exec(t);
				yt = n ? `Rust trap at ${n[1]}:${n[2]}` : "Rust runtime trap", e("[wasm-worker] WASM runtime trap captured");
				return;
			}
		} catch {}
		e(...n);
	};
}(), l(function(e) {
	const n = {};
	for (const t of Object.keys(e)) {
		const r = e[t];
		if ("function" != typeof r) {
			n[t] = r;
			continue;
		}
		const o = r;
		n[t] = async (...e) => {
			yt = null;
			try {
				return await o(...e);
			} catch (n) {
				const e = n instanceof Error ? n.message : String(n);
				if (yt && ht.test(e)) throw new Error(`WASM panic in ${t}(): ${yt}`, { cause: n });
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
	async detectNonwearUnified(e) {
		const n = function(e, n) {
			return Lt(e, [n.algorithm], n.signals, n.config)[n.algorithm];
		}(await Wt(), e);
		return b(n, n.nonwear ? [n.nonwear.buffer] : []);
	},
	async detectNonwearUnifiedBatch(e, n) {
		const t = Lt(await Wt(), e, n);
		return b(t, Object.values(t).flatMap((e) => e.nonwear ? [e.nonwear.buffer] : []));
	},
	async scoreEpochs(e) {
		const n = function(e, n) {
			const t = n.signals.epochSeconds, r = (e) => ({
				sleepWake: null,
				conformance: "unavailable",
				available: !1,
				reason: e,
				elementSeconds: t
			}), o = e.scoreEpochsTyped;
			if ("function" != typeof o) return console.warn("[wasm-worker] scoreEpochsTyped is not present in this WASM bundle — unified local scoring degrades to unavailable. Rebuild the actours WASM crate to enable it."), r("scoreEpochsTyped export missing (stale WASM bundle)");
			let i;
			try {
				const { signals: e, ...t } = n;
				i = o(JSON.stringify(t), e.counts ?? /* @__PURE__ */ new Float64Array(), e.raw ?? /* @__PURE__ */ new Float64Array(), e.temperature ?? /* @__PURE__ */ new Float64Array(), e.epochSeconds, e.sampleRate ?? 0);
			} catch {
				return console.warn("[wasm-worker] scoreEpochsTyped failed — degrading to unavailable."), r("scoreEpochsTyped failed");
			}
			return function(e, n) {
				const t = "object" == typeof e && null !== e ? e : {}, r = t.sleep_wake, o = r instanceof Uint8Array ? r : null, i = t.element_seconds, a = "number" == typeof i && Number.isFinite(i) && i > 0 ? i : n, s = Boolean(t.available) && null !== o, c = t.reason;
				return {
					sleepWake: s ? o : null,
					conformance: "string" == typeof t.conformance ? t.conformance : s ? "conformant" : "unavailable",
					available: s,
					reason: "string" == typeof c ? c : null,
					elementSeconds: a
				};
			}(i, t);
		}(await Wt(), e);
		return b(n, n.sleepWake ? [n.sleepWake.buffer] : []);
	},
	async scoreSadeh(e, n) {
		const t = await Wt(), r = new Uint8Array(t.scoreSadeh(e, n));
		return b(r, [r.buffer]);
	},
	async scoreColeKripke(e, n) {
		const t = await Wt(), r = new Uint8Array(t.scoreColeKripke(e, n));
		return b(r, [r.buffer]);
	},
	async detectNonwear(e) {
		const n = await Wt(), t = new Uint8Array(n.detectNonwear(e));
		return b(t, [t.buffer]);
	},
	async detectNonwearChoi2011(e, n = 60) {
		const t = await Wt(), r = new Uint8Array("function" == typeof t.detectNonwearChoi2011Epoch ? t.detectNonwearChoi2011Epoch(e, n) : t.detectNonwearChoi2011(e));
		return b(r, [r.buffer]);
	},
	parseActigraphCsv: async (e, n) => Bt((await Wt()).parseActigraphCsv(e, n), "parseActigraphCsv"),
	parseGeneactivCsv: async (e) => Bt((await Wt()).parseGeneactivCsv(e), "parseGeneactivCsv"),
	isGeneactivFormat: async (e) => (await Wt()).isGeneactivFormat(e),
	async csvBufferClear(e) {
		(await Wt()).csvBufferClear(e);
	},
	async csvBufferAppend(e) {
		(await Wt()).csvBufferAppend(e);
	},
	parseGeneactivCsvBuffered: async () => Bt((await Wt()).parseGeneactivCsvBuffered(), "parseGeneactivCsvBuffered"),
	parseActigraphCsvBuffered: async (e) => Bt((await Wt()).parseActigraphCsvBuffered(e), "parseActigraphCsvBuffered"),
	async sha256Start() {
		await Wt(), xn();
	},
	async sha256Feed(e) {
		await Wt(), Fn(e);
	},
	sha256Finish: async () => (await Wt(), Pn()),
	async streamParseStart(e, n, t = 60) {
		const r = await Wt();
		"function" == typeof r.streamParseStartWithEpoch ? r.streamParseStartWithEpoch(e, n, t) : r.streamParseStart(e, n);
	},
	async streamParseStartData(e, n) {
		(await Wt()).streamParseStartData(e, n);
	},
	streamParseFeed: async (e) => (await Wt()).streamParseFeed(e),
	async streamParseFinish() {
		const e = (await Wt()).streamParseFinish();
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
		const e = (await Wt()).streamParseFinishChunk();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinishChunk: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const n = new Float64Array(e.timestampsMs), t = new Float64Array(e.axisX), r = new Float64Array(e.axisY), o = new Float64Array(e.axisZ), i = new Float64Array(e.vectorMagnitude), a = new Float64Array(e.temperature), s = new Uint32Array(e.counts), c = new Uint32Array(e.tempCounts), l = new Float64Array(e.timestampsMs5s), u = new Float64Array(e.enmo5s), _ = new Float64Array(e.anglez5s), f = new Float64Array(e.anglex5s ?? 0), d = new Float64Array(e.angley5s ?? 0), g = new Float64Array(e.mad5s ?? 0), p = new Float64Array(e.enmoa5s ?? 0), m = e, w = new Float64Array(m.zcx60s ?? []), y = new Float64Array(m.zcy60s ?? []), h = new Float64Array(m.zcz60s ?? []), A = new Uint32Array(e.counts5s), v = e, S = new Float64Array(v.mimsUnit ?? []), M = new Float64Array(v.mimsUnitX ?? []), E = new Float64Array(v.mimsUnitY ?? []), k = new Float64Array(v.mimsUnitZ ?? []), N = e;
		return b({
			timestampsMs: n,
			axisX: t,
			axisY: r,
			axisZ: o,
			vectorMagnitude: i,
			temperature: a,
			counts: s,
			tempCounts: c,
			timestampsMs5s: l,
			enmo5s: u,
			anglez5s: _,
			anglex5s: f,
			angley5s: d,
			mad5s: g,
			enmoa5s: p,
			zcx60s: w,
			zcy60s: y,
			zcz60s: h,
			counts5s: A,
			mimsUnit: S,
			mimsUnitX: M,
			mimsUnitY: E,
			mimsUnitZ: k,
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
			o.buffer,
			i.buffer,
			a.buffer,
			s.buffer,
			c.buffer,
			l.buffer,
			u.buffer,
			_.buffer,
			f.buffer,
			d.buffer,
			g.buffer,
			p.buffer,
			w.buffer,
			y.buffer,
			h.buffer,
			A.buffer,
			S.buffer,
			M.buffer,
			E.buffer,
			k.buffer
		]);
	},
	async neishabouriCounts(e, n, t, r, o) {
		const i = (await Wt()).neishabouriCounts(e, n, t, r, o), a = "object" == typeof i && null !== i ? i : null, s = a ? zt(a.x) : null, c = a ? zt(a.y) : null, l = a ? zt(a.z) : null, u = a ? zt(a.vm) : null;
		if (!(s && c && l && u)) throw new Error(`neishabouriCounts: unexpected WASM return shape — got ${JSON.stringify(i)}`);
		return b({
			x: s,
			y: c,
			z: l,
			vm: u
		}, [
			s.buffer,
			c.buffer,
			l.buffer,
			u.buffer
		]);
	},
	async zeroCrossingCounts(e, n, t, r, o) {
		const i = (await Wt()).zeroCrossingCounts(e, n, t, r, o), a = "object" == typeof i && null !== i ? i : null, s = a ? zt(a.zcx) : null, c = a ? zt(a.zcy) : null, l = a ? zt(a.zcz) : null;
		if (!s || !c || !l) throw new Error(`zeroCrossingCounts: unexpected WASM return shape — got ${JSON.stringify(i)}`);
		return b({
			zcx: s,
			zcy: c,
			zcz: l
		}, [
			s.buffer,
			c.buffer,
			l.buffer
		]);
	},
	async computeMimsUnit(e, n, t, r, o = {}) {
		const i = await Wt();
		if (!("computeMimsUnit" in i) || "function" != typeof i.computeMimsUnit) throw new Error("computeMimsUnit: current actours WASM bundle does not export MIMS_UNIT processing");
		const a = Gt(i.computeMimsUnit(e, n, t, r, o), "computeMimsUnit");
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
		const i = await Wt();
		if (!("computeMimsUnitDataframe" in i) || "function" != typeof i.computeMimsUnitDataframe) throw new Error("computeMimsUnitDataframe: current actours WASM bundle does not export MIMS_UNIT processing");
		const a = Gt(i.computeMimsUnitDataframe(e, n, t, r, o), "computeMimsUnitDataframe");
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
		const o = await Wt(), i = "function" == typeof o.classifyActimetricPreschoolWristRfLagLead ? o.classifyActimetricPreschoolWristRfLagLead : "function" == typeof o.classifyActimetricPreschoolWristRf ? o.classifyActimetricPreschoolWristRf : "function" == typeof o.actimetricPreschoolWristRfClasses ? o.actimetricPreschoolWristRfClasses : "function" == typeof o.predictActimetricPreschoolWristRfClasses ? o.predictActimetricPreschoolWristRfClasses : null;
		if (!i) throw new Error("classifyActimetricPreschoolWristRf: current actours WASM bundle does not export actimetric preschool wrist RF inference");
		const a = function(e, n = "classifyActimetricPreschoolWristRf") {
			const t = Dt(e);
			if (t) return {
				classes: t,
				epochSeconds: 15
			};
			const r = "object" == typeof e && null !== e ? e : null, o = r ? Dt(r.classes) ?? Dt(r.activityClasses) ?? Dt(r.predictions) ?? Dt(r.activity) : null;
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
		const o = await Wt(), i = o.lstmSpectralFeatures30s ?? o.spectralFeatures30s;
		if ("function" != typeof i) throw new Error("LSTM spectral feature extractor is not available in this WASM bundle");
		const a = i(e, n, t, r), s = "object" == typeof a && null !== a ? a : null, c = function(e) {
			if (e instanceof Float32Array) return new Float32Array(e);
			if (ArrayBuffer.isView(e)) {
				const n = e;
				if ("number" == typeof n.length) return new Float32Array(Array.from(n, Number));
			}
			return Array.isArray(e) ? new Float32Array(e) : null;
		}(s?.features ?? a), l = "number" == typeof s?.bins ? s.bins : 30, u = "number" == typeof s?.channels ? s.channels : 4, _ = "number" == typeof s?.epochs ? s.epochs : c ? Math.floor(c.length / (l * u)) : 0;
		if (!c || _ * l * u !== c.length) throw new Error(`lstmSpectralFeatures30s: unexpected WASM return shape — got ${JSON.stringify(a)}`);
		return b({
			features: c,
			epochs: _,
			bins: l,
			channels: u
		}, [c.buffer]);
	},
	async scoreConsensus(e, n) {
		const t = await Wt();
		if ("function" != typeof t.scoreConsensusTyped) throw new Error("scoreConsensus is not present in this WASM bundle.");
		const r = new Uint32Array(n.length + 1);
		for (const [s, c] of n.entries()) r[s + 1] = r[s] + c.length;
		const o = 1 === n.length ? n[0] : new Uint8Array(r[n.length]);
		if (1 !== n.length) for (const [s, c] of n.entries()) o.set(c, r[s]);
		const i = t.scoreConsensusTyped(JSON.stringify({ strategy: e }), o, r), a = null != i && "object" == typeof i ? i.consensus : void 0;
		if (!(a instanceof Uint8Array)) throw new Error(`scoreConsensus: unexpected WASM return shape — got ${JSON.stringify(i)}`);
		return b(a, [a.buffer]);
	},
	async computeSleepMetrics(e, n, t) {
		const r = (await Wt()).computeSleepMetrics(e, n, t);
		if (null == r || "object" != typeof r || "number" != typeof r.totalSleepTimeMinutes || "number" != typeof r.sleepEfficiency) throw new Error(`computeSleepMetrics: unexpected WASM return shape ${JSON.stringify(r)}`);
		return r;
	},
	computeFileDifficulty: async (e) => function(e, n) {
		const t = e.computeNightDifficultyTyped;
		return "function" != typeof t ? (console.warn("[wasm-worker] computeNightDifficulty is not present in this WASM bundle — night difficulty degrades to empty. Rebuild the actours WASM crate to enable it."), { byDate: {} }) : function(e) {
			const n = {}, t = /* @__PURE__ */ new Set(), r = jt(e)?.results;
			if (!Array.isArray(r)) return { byDate: n };
			for (const o of r) {
				const e = St(o);
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
		}(t(...n));
	}(await Wt(), e),
	computeFileSignals: async (e) => function(e, n) {
		const t = e.computeNightSignalsTyped;
		if ("function" != typeof t) return console.warn("[wasm-worker] computeNightSignals is not present in this WASM bundle — night-signal detail degrades to empty."), { byDate: {} };
		const [r, ...o] = n;
		return function(e) {
			const n = {}, t = /* @__PURE__ */ new Set(), r = jt(e)?.signals;
			if (!Array.isArray(r)) return { byDate: n };
			for (const o of r) {
				const e = jt(o), r = e?.analysis_date, i = e?.epoch_length_seconds;
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
		}(t(JSON.stringify(function(e) {
			const n = At(e.config), t = At(n?.signals) ?? n;
			return {
				...t ? { config: t } : {},
				days: e.days
			};
		}(JSON.parse(r))), ...o));
	}(await Wt(), e),
	computeCircadian: async (e) => function(e, n) {
		const t = e.computeCircadianTyped;
		if ("function" != typeof t) throw new Error("computeCircadian is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = t(...n);
		return r && "object" == typeof r && Array.isArray(r.day_summaries) ? r : It;
	}(await Wt(), e),
	aggregateEpochSeries: async (e) => function(e, n) {
		const t = e.aggregateEpochSeries;
		if ("function" != typeof t) throw new Error("aggregateEpochSeries is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = t(n);
		if (null == r || "object" != typeof r) throw new Error("aggregateEpochSeries returned an invalid result.");
		const o = r;
		if (!o.series || !Array.isArray(o.series.timestamps_ms)) throw new Error("aggregateEpochSeries returned an invalid result.");
		return r;
	}(await Wt(), e),
	async runScoredVariantBatch(e) {
		const n = await Wt(), t = {}, r = /* @__PURE__ */ new Set();
		let o = 0, i = !1;
		const a = Object.keys(e.classifierOutputs).sort(), s = Object.keys(e.nonwearMasks).filter((n) => null != e.nonwearMasks[n]?.mask).sort(), c = e.variants.filter((n) => {
			if (!e.classifierOutputs[n.classifierConfigId]) return o += 1, !1;
			const t = "none" === n.nonwear ? void 0 : e.nonwearMasks[n.nonwear];
			if ("none" !== n.nonwear && !t?.mask) {
				const e = t?.reason ? ` (${t.reason})` : "";
				r.add(`Nonwear detector "${n.nonwear}" is unavailable for this data — scored without a nonwear mask.${e}`);
			}
			return !0;
		}), l = e.timestamps.length;
		if (0 === l) {
			for (const e of c) t[e.id] = /* @__PURE__ */ new ArrayBuffer(0);
			c.length && r.add("No activity data");
		} else if (c.length) if ("function" != typeof n.placeMarkersBatch) i = !0;
		else {
			const o = new Uint8Array(a.length * l);
			for (const [n, t] of a.entries()) {
				const r = e.classifierOutputs[t];
				if (r.length !== l) throw new Error(`classifier_scores length ${String(r.length)} does not match 1 rows × ${String(l)} epochs`);
				o.set(r, n * l);
			}
			const i = new Uint8Array(s.length * l);
			for (const [n, t] of s.entries()) {
				const r = e.nonwearMasks[t].mask;
				if (r.length !== l) throw new Error(`nonwear_masks length ${String(r.length)} does not match 1 rows × ${String(l)} epochs`);
				i.set(r, n * l);
			}
			const u = function(e) {
				let n;
				if ("variant" in e) {
					const { variant: o, timestamps: i, activityCounts: a, sleepScores: s, analysisDate: c, epochLengthSeconds: l, hdczaWindow: u, diary: _, onsetMinConsecutiveSleep: f, offsetMinConsecutiveMinutes: d, choiNonwear: g } = e, p = o.config.rescoring === S && (r = S) === S ? { preset: r } : void 0;
					n = {
						timestamps: i,
						activityCounts: a,
						sleepScores: s,
						...void 0 !== g ? { choiNonwear: g } : {},
						ruleset: o.config.ruleset,
						...void 0 !== p ? { scorerPostprocessing: p } : {},
						analysisDate: c,
						epochLengthSeconds: l,
						hdczaWindow: u ? {
							startTimestamp: u[0],
							endTimestamp: u[1]
						} : null,
						diaryBedTime: _?.diaryInBedTime ?? null,
						diaryOnsetTime: _?.onsetTime ?? null,
						diaryWakeTime: _?.diaryWakeTime ?? null,
						diaryNaps: L(_?.naps),
						diaryNonwear: L(_?.nonwear),
						...void 0 !== f ? { onsetMinConsecutiveSleep: f } : {},
						...void 0 !== d ? { offsetMinConsecutiveMinutes: d } : {},
						...(t = o.config.periodSource, t === W ? { periodGuider: W } : t === G ? { periodGuider: G } : { sleepPeriodDetection: {
							sourceA: t,
							sourceB: x,
							fusionPolicy: O,
							applyNonwearGate: !1
						} })
					};
				} else n = e;
				var t, r;
				const o = {
					config: j(n),
					days: [I(n), ...(n.contextDays ?? []).filter((e) => e.analysisDate !== (n.analysisDate ?? "")).map(V)]
				}, i = [
					"timestamps",
					"activity_counts",
					"sleep_scores",
					"choi_nonwear",
					"anglez",
					"light",
					"temperature",
					"heart_rate",
					"detach_nonwear"
				], a = i.flatMap((e) => {
					const n = o.days.map((n) => n[e] ?? []), t = new Uint32Array(n.length + 1);
					for (const [o, a] of n.entries()) t[o + 1] = t[o] + a.length;
					const r = "sleep_scores" === e || "choi_nonwear" === e || "detach_nonwear" === e ? Uint8Array : Float64Array, i = 1 === n.length && n[0] instanceof r ? n[0] : new r(t[n.length]);
					if (i !== n[0]) for (const [o, a] of n.entries()) i.set(a, t[o]);
					return [i, t];
				}), s = {
					config: o.config,
					days: o.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !i.includes(e))))
				};
				return [JSON.stringify(s), ...a];
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
			}), _ = JSON.parse(u[0]), f = _.days[0], d = n.placeMarkersBatch(JSON.stringify({
				..._.config,
				...f,
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
			for (const e of d.notes) r.add(e);
			for (const [e, n] of c.entries()) t[n.id] = d.masks.slice(e * l, (e + 1) * l).buffer;
		}
		return b({
			masks: t,
			notes: [...r],
			missingClassifier: o,
			placementUnavailable: i
		}, Object.values(t));
	},
	async placeMarkers(e) {
		const n = await Wt();
		return "function" != typeof n.placeMarkersTyped ? (console.warn("[wasm-worker] placeMarkers is not present in this WASM bundle — local marker placement degrades to null."), null) : n.placeMarkersTyped(...e);
	},
	async placeNonwearMarkers(e) {
		const n = await Wt();
		return "function" != typeof n.placeNonwearMarkersTyped ? (console.warn("[wasm-worker] placeNonwearMarkers is not present in this WASM bundle — local marker placement degrades to null."), null) : n.placeNonwearMarkersTyped(...e);
	},
	epochRawData: async (e, n, t, r, o) => Bt((await Wt()).epochRawData(e, n, t, r, o), "epochRawData"),
	async epochWithBandpass(e, n, t) {
		const r = (await Wt()).epochWithBandpass(e, n, t), o = "object" == typeof r && null !== r ? r : null, i = zt(o?.timestamps), a = zt(o?.counts);
		if (!i || !a) throw new Error("epochWithBandpass: unexpected WASM return shape");
		return b({
			timestamps: i,
			counts: a
		}, [i.buffer, a.buffer]);
	},
	async computeEnmo5s(e, n, t, r) {
		const o = await Wt();
		return new Float64Array(o.computeEnmo5s(e, n, t, r));
	},
	async computeAnglez5s(e, n, t, r) {
		const o = await Wt();
		return new Float64Array(o.computeAnglez5s(e, n, t, r));
	},
	async processRawXyz(e, n, t, r, o, i) {
		const a = (await Wt()).processRawXyz(e, n, t, r, o, i ?? void 0), s = "object" == typeof a && null !== a ? a : null, c = s ? zt(s.enmo5s) : null, l = s ? zt(s.anglez5s) : null, u = s ? zt(s.countsX) : null, _ = s ? zt(s.countsY) : null, f = s ? zt(s.countsZ) : null, d = s ? zt(s.countsVm) : null;
		if (!(c && l && u && _ && f && d)) throw new Error(`processRawXyz: unexpected WASM return shape — got ${JSON.stringify(a)}`);
		const g = (e) => zt(e) ?? /* @__PURE__ */ new Float64Array(0), p = s ? g(s.anglex5s) : /* @__PURE__ */ new Float64Array(0), m = s ? g(s.angley5s) : /* @__PURE__ */ new Float64Array(0), w = s ? g(s.mad5s) : /* @__PURE__ */ new Float64Array(0), y = s ? g(s.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
		return b({
			enmo5s: c,
			anglez5s: l,
			anglex5s: p,
			angley5s: m,
			mad5s: w,
			enmoa5s: y,
			calibration: Ct(s?.calibration),
			counts: {
				x: u,
				y: _,
				z: f,
				vm: d
			}
		}, [
			c.buffer,
			l.buffer,
			p.buffer,
			m.buffer,
			w.buffer,
			y.buffer,
			u.buffer,
			_.buffer,
			f.buffer,
			d.buffer
		]);
	},
	async processRawXyzImputed(e, n, t, r, o, i, a = 60) {
		const s = await Wt(), c = "function" == typeof s.processRawXyzImputedWithEpoch ? s.processRawXyzImputedWithEpoch(e, n, t, r, o, i ?? void 0, a) : s.processRawXyzImputed(e, n, t, r, o, i ?? void 0), l = "object" == typeof c && null !== c ? c : null, u = l ? zt(l.enmo5s) : null, _ = l ? zt(l.anglez5s) : null, f = l ? zt(l.countsX) : null, d = l ? zt(l.countsY) : null, g = l ? zt(l.countsZ) : null, p = l ? zt(l.countsVm) : null;
		if (!(u && _ && f && d && g && p)) throw new Error(`processRawXyzImputed: unexpected WASM return shape — got ${JSON.stringify(c)}`);
		const m = (e) => zt(e) ?? /* @__PURE__ */ new Float64Array(0), w = l ? m(l.anglex5s) : /* @__PURE__ */ new Float64Array(0), y = l ? m(l.angley5s) : /* @__PURE__ */ new Float64Array(0), h = l ? m(l.mad5s) : /* @__PURE__ */ new Float64Array(0), A = l ? m(l.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
		return b({
			enmo5s: u,
			anglez5s: _,
			anglex5s: w,
			angley5s: y,
			mad5s: h,
			enmoa5s: A,
			counts: {
				x: f,
				y: d,
				z: g,
				vm: p
			},
			firstTsMs: "number" == typeof l?.firstTsMs ? l.firstTsMs : 0,
			numGaps: "number" == typeof l?.numGaps ? l.numGaps : 0,
			samplesAdded: "number" == typeof l?.samplesAdded ? l.samplesAdded : 0,
			calibration: Ct(l?.calibration)
		}, [
			u.buffer,
			_.buffer,
			w.buffer,
			y.buffer,
			h.buffer,
			A.buffer,
			f.buffer,
			d.buffer,
			g.buffer,
			p.buffer
		]);
	},
	async detectDetachFromAccelerationG(e, n) {
		const t = await Wt(), r = new Uint8Array(t.detectDetachFromAccelerationG(e, n));
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
	}((await Wt()).detectHdcza(e, n, t ?? null, r ?? null)),
	runFullPipelineV1: async (e, n, t, r, o) => function(e, n, t, r, o, i) {
		const a = e.runFullPipelineV1({
			contractVersion: Pt,
			semanticProfile: xt,
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
					nonwearFraction: Ot(s.metadata.nonwearFraction)
				},
				days: s.days.map((e) => ({
					calendarDate: e.calendarDate,
					dayNumber: e.dayNumber,
					validHours: Ot(e.validHours),
					nonwearHours: Ot(e.nonwearHours),
					totalEpochs: e.totalEpochs,
					sedentaryMinutes: Ot(e.sedentaryMinutes),
					lightMinutes: Ot(e.lightMinutes),
					moderateMinutes: Ot(e.moderateMinutes),
					vigorousMinutes: Ot(e.vigorousMinutes),
					mvpaMinutes: Ot(e.mvpaMinutes),
					l5ValueMg: Ot(e.l5ValueMg),
					l5OnsetEpoch: e.l5OnsetEpoch,
					m5ValueMg: Ot(e.m5ValueMg),
					m5OnsetEpoch: e.m5OnsetEpoch,
					igGradient: Ot(e.igGradient),
					igIntercept: Ot(e.igIntercept),
					igRsquared: Ot(e.igRsquared),
					fragTpIn2ac: Ot(e.fragTpIn2ac),
					fragTpAc2in: Ot(e.fragTpAc2in),
					nFragments: e.nFragments,
					nightNumber: e.nightNumber,
					tstMinutes: Ut(e.tstMinutes),
					wasoMinutes: Ut(e.wasoMinutes),
					sleepEfficiency: Ut(e.sleepEfficiency),
					numberOfAwakenings: e.numberOfAwakenings,
					sptDurationHours: Ut(e.sptDurationHours),
					cleaningCode: e.cleaningCode
				}))
			}),
			execution: a.execution,
			provenance: a.provenance
		} : null;
		var s;
	}(await Wt(), e, n, t, r, o),
	getComputeIdentity: async () => function(e, n) {
		if (!/^[0-9a-f]{64}$/.test(n)) throw new Error("Actours WASM artifact identity is unavailable or invalid; refusing to attest this runtime");
		const t = "object" == typeof e && null !== e ? e : {}, r = (e, n) => {
			const t = e[n];
			if ("string" != typeof t || 0 === t.length) throw new Error(`Actours capability ${n} must be a non-empty string`);
			return t;
		}, o = r(t, "contractVersion");
		if (o !== Pt) throw new Error(`Unsupported Actours compute contract ${o}; expected ${Pt}`);
		const i = r(t, "crateVersion"), a = t.sourceRevision;
		if (null !== a && ("string" != typeof a || 0 === a.length)) throw new Error("Actours capability sourceRevision must be null or a non-empty string");
		const s = t.compiledFeatures;
		if (!Array.isArray(s) || !s.every((e) => "string" == typeof e && e.length > 0)) throw new Error("Actours capability compiledFeatures must be an array of non-empty strings");
		const c = r("object" == typeof t.execution && null !== t.execution ? t.execution : {}, "target");
		if ("wasm" !== c) throw new Error(`Unsupported Actours execution target ${c}; expected wasm`);
		if (!(Array.isArray(t.semanticProfiles) ? t.semanticProfiles : []).includes(xt)) throw new Error(`Actours capability does not provide required semantic profile ${xt}`);
		const l = r(t, "profileProofStatus");
		if ("proof_pending" !== l) throw new Error(`Unsupported Actours profile proof status ${l}; expected proof_pending`);
		const u = r(t, "temporalBasis");
		if ("utc" !== u) throw new Error(`Unsupported Actours temporal basis ${u}; expected utc`);
		return {
			contractVersion: o,
			crateVersion: i,
			sourceRevision: a,
			artifactSha256: n,
			compiledFeatures: s,
			target: c,
			semanticProfile: xt,
			profileProofStatus: l,
			temporalBasis: u
		};
	}((await Wt()).getComputeCapabilitiesV1(), "c12f21e5701c88ee91061f1f6d6b25c3a6a955dce7c626ce4eeb438262c3992b"),
	runGgirFromEpoch: async (e, n, t, r, o) => (await Wt()).runGgirFromEpoch({
		anglez: e,
		enmo: n,
		sampleRateHz: t,
		startTsEpochSec: r,
		...o ? { invalid: o } : {}
	}, { ws3: 5 }),
	async readGgirMeta(e) {
		const n = await Wt();
		if ("function" != typeof n.readGgirMeta) throw new Error("readGgirMeta: current actours WASM bundle does not export GGIR RData import");
		const t = n.readGgirMeta(e), r = "object" == typeof t && null !== t ? t : null, o = r ? zt(r.timestampsMs) : null, i = r ? zt(r.enmo5s) : null, a = r ? zt(r.anglez5s) : null, s = r ? zt(r.anglex5s) : null, c = r ? zt(r.angley5s) : null, l = r ? Dt(r.invalidShort) : null, u = r ? Dt(r.nonwearShort) : null;
		if (!(o && i && a && l && u)) throw new Error(`readGgirMeta: unexpected WASM return shape — got ${JSON.stringify(t)}`);
		return b({
			timestampsMs: o,
			enmo5s: i,
			anglez5s: a,
			...s ? { anglex5s: s } : {},
			...c ? { angley5s: c } : {},
			invalidShort: l,
			nonwearShort: u,
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
			l.buffer,
			u.buffer
		]);
	},
	async scoreGgirSib(e, n, t) {
		const r = (await Wt()).scoreGgirSib(e, n, t);
		if ("object" != typeof r || null === r || !r.sadeh_ggir || !r.ck_ggir) throw new Error(`scoreGgirSib: unexpected WASM return shape — got ${JSON.stringify(r)}`);
		const o = r, i = new Uint8Array(o.sadeh_ggir), a = new Uint8Array(o.ck_ggir);
		return b({
			sadeh_ggir: i,
			ck_ggir: a
		}, [i.buffer, a.buffer]);
	},
	async scoreGgirHasib(e) {
		const n = (await Wt()).scoreGgirHasib(e);
		if (!(n instanceof Uint8Array)) throw new Error("scoreGgirHasib: unexpected WASM return shape — expected Uint8Array, got " + typeof n);
		const t = new Uint8Array(n);
		return b(t, [t.buffer]);
	},
	async scoreGgirHasibVariant(e, n, t) {
		const r = function(e, n) {
			if ("object" != typeof e || null === e) throw new Error("scoreGgirHasibVariant: unexpected WASM return shape — got " + typeof e);
			const t = e, r = Dt(t.sib);
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
		}((await Wt()).scoreGgirHasibVariant({
			data: e,
			algo: n,
			...t ? { config: t } : {}
		}), n);
		return b(r, [r.sib.buffer]);
	},
	async detectGgirHasptVariant(e) {
		const n = function(e, n) {
			if ("object" != typeof e || null === e) throw new Error("detectGgirHasptVariant: unexpected WASM return shape — got " + typeof e);
			const t = e, r = Dt(t.nomov), o = zt(t.rollingMedian);
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
		}((await Wt()).detectGgirHasptVariant(e), e.algo);
		return b(n, [n.nomov.buffer, n.rollingMedian.buffer]);
	},
	async scoreAllDays(e) {
		const n = (await Wt()).scoreAllDays(e);
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
