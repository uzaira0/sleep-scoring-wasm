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
function $(e) {
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
}
function J(e, n, t) {
	const r = n.length, o = new Array(r).fill(0);
	if (0 === e.length || 0 === r) return o;
	for (const i of e) for (let e = 0; e < r; e++) {
		const r = n[e];
		r < i.endTsSec && r + t > i.startTsSec && (o[e] = 1);
	}
	return o;
}
function H(e) {
	const n = Uint8Array.from(e, (e) => e ? 1 : 0);
	return n.buffer.slice(n.byteOffset, n.byteOffset + n.byteLength);
}
var X = n({
	StreamChunkResult: () => Y,
	StreamParseResult: () => Z,
	actoursVersion: () => q,
	aggregateEpochSeries: () => K,
	analyzePhysicalActivityDay: () => Q,
	classifyActimetricPreschoolWristRf: () => ee,
	classifyActimetricPreschoolWristRfLagLead: () => ne,
	classifyActimetricPreschoolWristRfLagLeadCalibrated: () => te,
	computeAnglez5s: () => re,
	computeCircadian: () => oe,
	computeEnmo5s: () => ie,
	computeMimsUnit: () => ae,
	computeMimsUnitDataframe: () => se,
	computeMimsUnitTimingBreakdown: () => ce,
	computeMimsUnitValues: () => ue,
	computeNightDifficulty: () => le,
	computeNightSignals: () => _e,
	computeSleepMetrics: () => fe,
	configureComputeMemoryBudgetV1: () => de,
	csvBufferAppend: () => pe,
	csvBufferClear: () => ge,
	default: () => lt,
	detectDetachFromAccelerationG: () => me,
	detectDeviceFormat: () => we,
	detectGgirHasptVariant: () => be,
	detectHdcza: () => ye,
	detectNonwear: () => he,
	detectNonwearChoi2011: () => Ae,
	detectNonwearChoi2011Bouts: () => ve,
	detectNonwearChoi2011Epoch: () => Se,
	detectNonwearChoi2012: () => Me,
	detectNonwearChoi2012Bouts: () => Ne,
	detectNonwearChoiBouts: () => Ee,
	detectNonwearUnified: () => ke,
	epochRawData: () => Ce,
	epochWithBandpass: () => Fe,
	executeHeroRuntime: () => Oe,
	extractCapsense: () => Pe,
	getComputeCapabilitiesV1: () => xe,
	initSync: () => ut,
	installPanicHook: () => Re,
	isGeneactivFormat: () => Ue,
	lstmSpectralFeatures30s: () => We,
	neishabouriCounts: () => Ge,
	parseActigraphCsv: () => ze,
	parseActigraphCsvBuffered: () => De,
	parseCwa: () => Te,
	parseEpochSeries: () => Be,
	parseGeneactivBin: () => je,
	parseGeneactivCsv: () => Ie,
	parseGeneactivCsvBuffered: () => Ve,
	parseGt3x: () => Le,
	placeMarkers: () => $e,
	placeNonwearMarkers: () => Je,
	prepareCompactPipelineOutcomeV1: () => He,
	prepareCompactPipelineV1: () => Xe,
	processGeneactivRaw: () => Ye,
	processGt3xFull: () => Ze,
	processGt3xFullWithEpoch: () => qe,
	processGt3xPart1: () => Ke,
	processGt3xPart1WithEpoch: () => Qe,
	processRawXyz: () => en,
	processRawXyzImputed: () => nn,
	processRawXyzImputedWithEpoch: () => tn,
	readGgirMeta: () => rn,
	recommended_chunk_size_mb: () => on,
	reduceF64V1: () => an,
	runCompactPipelineOutcomeV1: () => sn,
	runCompactPipelineV1: () => cn,
	runFullPipeline: () => un,
	runFullPipelineOutcomeV1: () => ln,
	runFullPipelineV1: () => _n,
	runGgirFromEpoch: () => fn,
	runMilestone: () => dn,
	scoreAllDays: () => pn,
	scoreColeKripke: () => gn,
	scoreConsensus: () => mn,
	scoreConsensusMajority: () => wn,
	scoreEpochs: () => bn,
	scoreGgirHasib: () => yn,
	scoreGgirHasibVariant: () => hn,
	scoreGgirSib: () => An,
	scoreSadeh: () => vn,
	sha256StreamFeed: () => Sn,
	sha256StreamFinish: () => Mn,
	sha256StreamStart: () => Nn,
	streamParseFeed: () => En,
	streamParseFinish: () => kn,
	streamParseFinishChunk: () => Cn,
	streamParseStart: () => Fn,
	streamParseStartData: () => On,
	streamParseStartWithEpoch: () => Pn,
	summarizeActimetricPreschoolWristRfClasses: () => xn,
	zeroCrossingCounts: () => Rn
}), Y = class e {
	static __wrap(n) {
		n >>>= 0;
		const t = Object.create(e.prototype);
		return t.__wbg_ptr = n, Wn.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Wn.unregister(this), e;
	}
	free() {
		const e = this.__destroy_into_raw();
		at.__wbg_streamchunkresult_free(e, 0);
	}
	get anglex5s() {
		const e = at.streamchunkresult_anglex5s(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get angley5s() {
		const e = at.streamchunkresult_angley5s(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get anglez5s() {
		const e = at.streamchunkresult_anglez5s(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisX() {
		const e = at.streamchunkresult_axisX(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisY() {
		const e = at.streamchunkresult_axisY(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisZ() {
		const e = at.streamchunkresult_axisZ(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get canonicalPassDegraded() {
		return 0 !== at.streamchunkresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const e = at.streamchunkresult_canonicalPassReason(this.__wbg_ptr);
		let n;
		return 0 !== e[0] && (n = Jn(e[0], e[1]).slice(), at.__wbindgen_free(e[0], 1 * e[1], 1)), n;
	}
	get counts() {
		const e = at.streamchunkresult_counts(this.__wbg_ptr);
		var n = Bn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get counts5s() {
		const e = at.streamchunkresult_counts5s(this.__wbg_ptr);
		var n = Bn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get enmo5s() {
		const e = at.streamchunkresult_enmo5s(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get enmoa5s() {
		const e = at.streamchunkresult_enmoa5s(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get headerRowsSkipped() {
		return at.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get mad5s() {
		const e = at.streamchunkresult_mad5s(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnit() {
		const e = at.streamchunkresult_mimsUnit(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnitAvailable() {
		return 0 !== at.streamchunkresult_mimsUnitAvailable(this.__wbg_ptr);
	}
	get mimsUnitReason() {
		const e = at.streamchunkresult_mimsUnitReason(this.__wbg_ptr);
		let n;
		return 0 !== e[0] && (n = Jn(e[0], e[1]).slice(), at.__wbindgen_free(e[0], 1 * e[1], 1)), n;
	}
	get mimsUnitX() {
		const e = at.streamchunkresult_mimsUnitX(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnitY() {
		const e = at.streamchunkresult_mimsUnitY(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get mimsUnitZ() {
		const e = at.streamchunkresult_mimsUnitZ(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get rawRetentionDegraded() {
		return 0 !== at.streamchunkresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return at.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return at.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return at.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const e = at.streamchunkresult_tempCounts(this.__wbg_ptr);
		var n = Bn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get temperature() {
		const e = at.streamchunkresult_temperature(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs() {
		const e = at.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs5s() {
		const e = at.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get vectorMagnitude() {
		const e = at.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get zcx60s() {
		const e = at.streamchunkresult_zcx60s(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get zcy60s() {
		const e = at.streamchunkresult_zcy60s(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get zcz60s() {
		const e = at.streamchunkresult_zcz60s(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
};
Symbol.dispose && (Y.prototype[Symbol.dispose] = Y.prototype.free);
var Z = class e {
	static __wrap(n) {
		n >>>= 0;
		const t = Object.create(e.prototype);
		return t.__wbg_ptr = n, Gn.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Gn.unregister(this), e;
	}
	free() {
		const e = this.__destroy_into_raw();
		at.__wbg_streamparseresult_free(e, 0);
	}
	get axisX() {
		const e = at.streamparseresult_axisX(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisY() {
		const e = at.streamparseresult_axisY(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisZ() {
		const e = at.streamparseresult_axisZ(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get canonicalPassDegraded() {
		return 0 !== at.streamparseresult_canonicalPassDegraded(this.__wbg_ptr);
	}
	get canonicalPassReason() {
		const e = at.streamparseresult_canonicalPassReason(this.__wbg_ptr);
		let n;
		return 0 !== e[0] && (n = Jn(e[0], e[1]).slice(), at.__wbindgen_free(e[0], 1 * e[1], 1)), n;
	}
	get headerRowsSkipped() {
		return at.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rawRetentionDegraded() {
		return 0 !== at.streamparseresult_rawRetentionDegraded(this.__wbg_ptr);
	}
	get rowCount() {
		return at.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return at.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const e = at.streamparseresult_temperature(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs() {
		const e = at.streamparseresult_timestampsMs(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get vectorMagnitude() {
		const e = at.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var n = Tn(e[0], e[1]).slice();
		return at.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
};
function q() {
	let e, n;
	try {
		const t = at.actoursVersion();
		return e = t[0], n = t[1], Jn(t[0], t[1]);
	} finally {
		at.__wbindgen_free(e, n, 1);
	}
}
function K(e) {
	const n = at.aggregateEpochSeries(e);
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function Q(e) {
	let n, t;
	try {
		const i = et(e, at.__wbindgen_malloc, at.__wbindgen_realloc), a = st, s = at.analyzePhysicalActivityDay(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, nt(s[2]);
		return n = r, t = o, Jn(r, o);
	} finally {
		at.__wbindgen_free(n, t, 1);
	}
}
function ee(e, n, t, r) {
	const o = Qn(e, at.__wbindgen_malloc), i = st, a = Qn(n, at.__wbindgen_malloc), s = st, c = Qn(t, at.__wbindgen_malloc), u = st, l = at.classifyActimetricPreschoolWristRf(o, i, a, s, c, u, r);
	if (l[3]) throw nt(l[2]);
	var _ = jn(l[0], l[1]).slice();
	return at.__wbindgen_free(l[0], 1 * l[1], 1), _;
}
function ne(e, n, t, r) {
	const o = Qn(e, at.__wbindgen_malloc), i = st, a = Qn(n, at.__wbindgen_malloc), s = st, c = Qn(t, at.__wbindgen_malloc), u = st, l = at.classifyActimetricPreschoolWristRfLagLead(o, i, a, s, c, u, r);
	if (l[3]) throw nt(l[2]);
	var _ = jn(l[0], l[1]).slice();
	return at.__wbindgen_free(l[0], 1 * l[1], 1), _;
}
function te(e, n, t, r) {
	const o = Qn(e, at.__wbindgen_malloc), i = st, a = Qn(n, at.__wbindgen_malloc), s = st, c = Qn(t, at.__wbindgen_malloc), u = st, l = at.classifyActimetricPreschoolWristRfLagLeadCalibrated(o, i, a, s, c, u, r);
	if (l[3]) throw nt(l[2]);
	var _ = jn(l[0], l[1]).slice();
	return at.__wbindgen_free(l[0], 1 * l[1], 1), _;
}
function re(e, n, t, r) {
	const o = Qn(e, at.__wbindgen_malloc), i = st, a = Qn(n, at.__wbindgen_malloc), s = st, c = Qn(t, at.__wbindgen_malloc), u = st, l = at.computeAnglez5s(o, i, a, s, c, u, r);
	var _ = Tn(l[0], l[1]).slice();
	return at.__wbindgen_free(l[0], 8 * l[1], 8), _;
}
function oe(e) {
	let n, t;
	try {
		const i = et(e, at.__wbindgen_malloc, at.__wbindgen_realloc), a = st, s = at.computeCircadian(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, nt(s[2]);
		return n = r, t = o, Jn(r, o);
	} finally {
		at.__wbindgen_free(n, t, 1);
	}
}
function ie(e, n, t, r) {
	const o = Qn(e, at.__wbindgen_malloc), i = st, a = Qn(n, at.__wbindgen_malloc), s = st, c = Qn(t, at.__wbindgen_malloc), u = st, l = at.computeEnmo5s(o, i, a, s, c, u, r);
	var _ = Tn(l[0], l[1]).slice();
	return at.__wbindgen_free(l[0], 8 * l[1], 8), _;
}
function ae(e, n, t, r, o) {
	const i = Qn(e, at.__wbindgen_malloc), a = st, s = Qn(n, at.__wbindgen_malloc), c = st, u = Qn(t, at.__wbindgen_malloc), l = st, _ = at.computeMimsUnit(i, a, s, c, u, l, r, o);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function se(e, n, t, r, o) {
	const i = Qn(e, at.__wbindgen_malloc), a = st, s = Qn(n, at.__wbindgen_malloc), c = st, u = Qn(t, at.__wbindgen_malloc), l = st, _ = Qn(r, at.__wbindgen_malloc), f = st, d = at.computeMimsUnitDataframe(i, a, s, c, u, l, _, f, o);
	if (d[2]) throw nt(d[1]);
	return nt(d[0]);
}
function ce(e, n, t, r, o) {
	const i = Qn(e, at.__wbindgen_malloc), a = st, s = Qn(n, at.__wbindgen_malloc), c = st, u = Qn(t, at.__wbindgen_malloc), l = st, _ = at.computeMimsUnitTimingBreakdown(i, a, s, c, u, l, r, o);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function ue(e, n, t, r, o) {
	const i = Qn(e, at.__wbindgen_malloc), a = st, s = Qn(n, at.__wbindgen_malloc), c = st, u = Qn(t, at.__wbindgen_malloc), l = st, _ = at.computeMimsUnitValues(i, a, s, c, u, l, r, o);
	if (_[3]) throw nt(_[2]);
	var f = Tn(_[0], _[1]).slice();
	return at.__wbindgen_free(_[0], 8 * _[1], 8), f;
}
function le(e) {
	let n, t;
	try {
		const i = et(e, at.__wbindgen_malloc, at.__wbindgen_realloc), a = st, s = at.computeNightDifficulty(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, nt(s[2]);
		return n = r, t = o, Jn(r, o);
	} finally {
		at.__wbindgen_free(n, t, 1);
	}
}
function _e(e) {
	let n, t;
	try {
		const i = et(e, at.__wbindgen_malloc, at.__wbindgen_realloc), a = st, s = at.computeNightSignals(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, nt(s[2]);
		return n = r, t = o, Jn(r, o);
	} finally {
		at.__wbindgen_free(n, t, 1);
	}
}
function fe(e, n, t) {
	const r = Kn(e, at.__wbindgen_malloc), o = st, i = Qn(n, at.__wbindgen_malloc), a = st, s = at.computeSleepMetrics(r, o, i, a, t);
	if (s[2]) throw nt(s[1]);
	return nt(s[0]);
}
function de(e) {
	const n = at.configureComputeMemoryBudgetV1(e);
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function pe(e) {
	const n = Kn(e, at.__wbindgen_malloc), t = st;
	at.csvBufferAppend(n, t);
}
function ge(e) {
	at.csvBufferClear(e);
}
function me(e, n) {
	const t = Qn(e, at.__wbindgen_malloc), r = st, o = Qn(n, at.__wbindgen_malloc), i = st, a = at.detectDetachFromAccelerationG(t, r, o, i);
	if (a[3]) throw nt(a[2]);
	var s = jn(a[0], a[1]).slice();
	return at.__wbindgen_free(a[0], 1 * a[1], 1), s;
}
function we(e, n) {
	let t, r;
	try {
		const o = Kn(e, at.__wbindgen_malloc), i = st, a = et(n, at.__wbindgen_malloc, at.__wbindgen_realloc), s = st, c = at.detectDeviceFormat(o, i, a, s);
		return t = c[0], r = c[1], Jn(c[0], c[1]);
	} finally {
		at.__wbindgen_free(t, r, 1);
	}
}
function be(e) {
	const n = at.detectGgirHasptVariant(e);
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function ye(e, n, t, r) {
	const o = Qn(e, at.__wbindgen_malloc), i = st;
	var a = qn(n) ? 0 : et(n, at.__wbindgen_malloc, at.__wbindgen_realloc), s = st, c = qn(t) ? 0 : Qn(t, at.__wbindgen_malloc), u = st, l = qn(r) ? 0 : Qn(r, at.__wbindgen_malloc), _ = st;
	return at.detectHdcza(o, i, a, s, c, u, l, _);
}
function he(e) {
	const n = Qn(e, at.__wbindgen_malloc), t = st, r = at.detectNonwear(n, t);
	var o = jn(r[0], r[1]).slice();
	return at.__wbindgen_free(r[0], 1 * r[1], 1), o;
}
function Ae(e) {
	const n = Qn(e, at.__wbindgen_malloc), t = st, r = at.detectNonwearChoi2011(n, t);
	var o = jn(r[0], r[1]).slice();
	return at.__wbindgen_free(r[0], 1 * r[1], 1), o;
}
function ve(e) {
	const n = Qn(e, at.__wbindgen_malloc), t = st, r = at.detectNonwearChoi2011Bouts(n, t);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function Se(e, n) {
	const t = Qn(e, at.__wbindgen_malloc), r = st, o = at.detectNonwearChoi2011Epoch(t, r, n);
	if (o[3]) throw nt(o[2]);
	var i = jn(o[0], o[1]).slice();
	return at.__wbindgen_free(o[0], 1 * o[1], 1), i;
}
function Me(e) {
	const n = Qn(e, at.__wbindgen_malloc), t = st, r = at.detectNonwearChoi2012(n, t);
	var o = jn(r[0], r[1]).slice();
	return at.__wbindgen_free(r[0], 1 * r[1], 1), o;
}
function Ne(e) {
	const n = Qn(e, at.__wbindgen_malloc), t = st, r = at.detectNonwearChoi2012Bouts(n, t);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function Ee(e) {
	const n = Qn(e, at.__wbindgen_malloc), t = st, r = at.detectNonwearChoiBouts(n, t);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function ke(e) {
	let n, t;
	try {
		const i = et(e, at.__wbindgen_malloc, at.__wbindgen_realloc), a = st, s = at.detectNonwearUnified(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, nt(s[2]);
		return n = r, t = o, Jn(r, o);
	} finally {
		at.__wbindgen_free(n, t, 1);
	}
}
function Ce(e, n, t, r, o) {
	const i = Qn(e, at.__wbindgen_malloc), a = st, s = Qn(n, at.__wbindgen_malloc), c = st, u = Qn(t, at.__wbindgen_malloc), l = st, _ = Qn(r, at.__wbindgen_malloc), f = st, d = at.epochRawData(i, a, s, c, u, l, _, f, o);
	if (d[2]) throw nt(d[1]);
	return nt(d[0]);
}
function Fe(e, n, t) {
	const r = Qn(e, at.__wbindgen_malloc), o = st, i = Qn(n, at.__wbindgen_malloc), a = st, s = at.epochWithBandpass(r, o, i, a, t);
	if (s[2]) throw nt(s[1]);
	return nt(s[0]);
}
function Oe(e, n) {
	let t, r;
	try {
		const a = et(e, at.__wbindgen_malloc, at.__wbindgen_realloc), s = st, c = et(n, at.__wbindgen_malloc, at.__wbindgen_realloc), u = st, l = at.executeHeroRuntime(a, s, c, u);
		var o = l[0], i = l[1];
		if (l[3]) throw o = 0, i = 0, nt(l[2]);
		return t = o, r = i, Jn(o, i);
	} finally {
		at.__wbindgen_free(t, r, 1);
	}
}
function Pe(e) {
	const n = Kn(e, at.__wbindgen_malloc), t = st, r = at.extractCapsense(n, t);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function xe() {
	const e = at.getComputeCapabilitiesV1();
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function Re() {
	at.installPanicHook();
}
function Ue(e) {
	const n = Kn(e, at.__wbindgen_malloc), t = st;
	return 0 !== at.isGeneactivFormat(n, t);
}
function We(e, n, t, r) {
	const o = Qn(e, at.__wbindgen_malloc), i = st, a = Qn(n, at.__wbindgen_malloc), s = st, c = Qn(t, at.__wbindgen_malloc), u = st, l = at.lstmSpectralFeatures30s(o, i, a, s, c, u, r);
	if (l[2]) throw nt(l[1]);
	return nt(l[0]);
}
function Ge(e, n, t, r, o) {
	const i = Qn(e, at.__wbindgen_malloc), a = st, s = Qn(n, at.__wbindgen_malloc), c = st, u = Qn(t, at.__wbindgen_malloc), l = st, _ = at.neishabouriCounts(i, a, s, c, u, l, r, o);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function ze(e, n) {
	const t = Kn(e, at.__wbindgen_malloc), r = st, o = at.parseActigraphCsv(t, r, n);
	if (o[2]) throw nt(o[1]);
	return nt(o[0]);
}
function De(e) {
	const n = at.parseActigraphCsvBuffered(e);
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function Te(e) {
	const n = Kn(e, at.__wbindgen_malloc), t = st, r = at.parseCwa(n, t);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function Be(e, n) {
	const t = Kn(e, at.__wbindgen_malloc), r = st, o = et(n, at.__wbindgen_malloc, at.__wbindgen_realloc), i = st, a = at.parseEpochSeries(t, r, o, i);
	if (a[2]) throw nt(a[1]);
	return nt(a[0]);
}
function je(e) {
	const n = Kn(e, at.__wbindgen_malloc), t = st, r = at.parseGeneactivBin(n, t);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function Ie(e) {
	const n = Kn(e, at.__wbindgen_malloc), t = st, r = at.parseGeneactivCsv(n, t);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function Ve() {
	const e = at.parseGeneactivCsvBuffered();
	if (e[2]) throw nt(e[1]);
	return nt(e[0]);
}
function Le(e) {
	const n = Kn(e, at.__wbindgen_malloc), t = st, r = at.parseGt3x(n, t);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function $e(e) {
	let n, t;
	try {
		const i = et(e, at.__wbindgen_malloc, at.__wbindgen_realloc), a = st, s = at.placeMarkers(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, nt(s[2]);
		return n = r, t = o, Jn(r, o);
	} finally {
		at.__wbindgen_free(n, t, 1);
	}
}
function Je(e) {
	let n, t;
	try {
		const i = et(e, at.__wbindgen_malloc, at.__wbindgen_realloc), a = st, s = at.placeNonwearMarkers(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, nt(s[2]);
		return n = r, t = o, Jn(r, o);
	} finally {
		at.__wbindgen_free(n, t, 1);
	}
}
function He(e) {
	const n = at.prepareCompactPipelineOutcomeV1(e);
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function Xe(e) {
	const n = at.prepareCompactPipelineV1(e);
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function Ye(e, n, t, r, o, i, a) {
	const s = Qn(e, at.__wbindgen_malloc), c = st, u = Qn(n, at.__wbindgen_malloc), l = st, _ = Qn(t, at.__wbindgen_malloc), f = st, d = Qn(r, at.__wbindgen_malloc), p = st;
	var g = qn(a) ? 0 : et(a, at.__wbindgen_malloc, at.__wbindgen_realloc), m = st;
	const w = at.processGeneactivRaw(s, c, u, l, _, f, d, p, o, i, g, m);
	if (w[2]) throw nt(w[1]);
	return nt(w[0]);
}
function Ze(e) {
	const n = Kn(e, at.__wbindgen_malloc), t = st, r = at.processGt3xFull(n, t);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function qe(e, n) {
	const t = Kn(e, at.__wbindgen_malloc), r = st, o = at.processGt3xFullWithEpoch(t, r, n);
	if (o[2]) throw nt(o[1]);
	return nt(o[0]);
}
function Ke(e) {
	const n = Kn(e, at.__wbindgen_malloc), t = st, r = at.processGt3xPart1(n, t);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function Qe(e, n) {
	const t = Kn(e, at.__wbindgen_malloc), r = st, o = at.processGt3xPart1WithEpoch(t, r, n);
	if (o[2]) throw nt(o[1]);
	return nt(o[0]);
}
function en(e, n, t, r, o, i) {
	const a = Qn(e, at.__wbindgen_malloc), s = st, c = Qn(n, at.__wbindgen_malloc), u = st, l = Qn(t, at.__wbindgen_malloc), _ = st;
	var f = qn(i) ? 0 : et(i, at.__wbindgen_malloc, at.__wbindgen_realloc), d = st;
	const p = at.processRawXyz(a, s, c, u, l, _, r, o, f, d);
	if (p[2]) throw nt(p[1]);
	return nt(p[0]);
}
function nn(e, n, t, r, o, i) {
	const a = Qn(e, at.__wbindgen_malloc), s = st, c = Qn(n, at.__wbindgen_malloc), u = st, l = Qn(t, at.__wbindgen_malloc), _ = st, f = Qn(r, at.__wbindgen_malloc), d = st;
	var p = qn(i) ? 0 : et(i, at.__wbindgen_malloc, at.__wbindgen_realloc), g = st;
	const m = at.processRawXyzImputed(a, s, c, u, l, _, f, d, o, p, g);
	if (m[2]) throw nt(m[1]);
	return nt(m[0]);
}
function tn(e, n, t, r, o, i, a) {
	const s = Qn(e, at.__wbindgen_malloc), c = st, u = Qn(n, at.__wbindgen_malloc), l = st, _ = Qn(t, at.__wbindgen_malloc), f = st, d = Qn(r, at.__wbindgen_malloc), p = st;
	var g = qn(i) ? 0 : et(i, at.__wbindgen_malloc, at.__wbindgen_realloc), m = st;
	const w = at.processRawXyzImputedWithEpoch(s, c, u, l, _, f, d, p, o, g, m, a);
	if (w[2]) throw nt(w[1]);
	return nt(w[0]);
}
function rn(e) {
	const n = Kn(e, at.__wbindgen_malloc), t = st, r = at.readGgirMeta(n, t);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function on() {
	return at.recommended_chunk_size_mb() >>> 0;
}
function an(e, n) {
	const t = Qn(e, at.__wbindgen_malloc), r = st, o = et(n, at.__wbindgen_malloc, at.__wbindgen_realloc), i = st, a = at.reduceF64V1(t, r, o, i);
	if (a[2]) throw nt(a[1]);
	return a[0];
}
function sn(e) {
	const n = at.runCompactPipelineOutcomeV1(e);
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function cn(e) {
	const n = at.runCompactPipelineV1(e);
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function un(e, n) {
	const t = at.runFullPipeline(e, n);
	if (t[2]) throw nt(t[1]);
	return nt(t[0]);
}
function ln(e) {
	const n = at.runFullPipelineOutcomeV1(e);
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function _n(e) {
	const n = at.runFullPipelineV1(e);
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function fn(e, n) {
	const t = at.runGgirFromEpoch(e, n);
	if (t[2]) throw nt(t[1]);
	return nt(t[0]);
}
function dn(e) {
	const n = Kn(e, at.__wbindgen_malloc), t = st, r = at.runMilestone(n, t);
	if (r[2]) throw nt(r[1]);
	return nt(r[0]);
}
function pn(e) {
	const n = at.scoreAllDays(e);
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function gn(e, n) {
	const t = Qn(e, at.__wbindgen_malloc), r = st, o = at.scoreColeKripke(t, r, n);
	var i = jn(o[0], o[1]).slice();
	return at.__wbindgen_free(o[0], 1 * o[1], 1), i;
}
function mn(e) {
	let n, t;
	try {
		const i = et(e, at.__wbindgen_malloc, at.__wbindgen_realloc), a = st, s = at.scoreConsensus(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, nt(s[2]);
		return n = r, t = o, Jn(r, o);
	} finally {
		at.__wbindgen_free(n, t, 1);
	}
}
function wn(e) {
	const n = at.scoreConsensusMajority(e);
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function bn(e) {
	let n, t;
	try {
		const i = et(e, at.__wbindgen_malloc, at.__wbindgen_realloc), a = st, s = at.scoreEpochs(i, a);
		var r = s[0], o = s[1];
		if (s[3]) throw r = 0, o = 0, nt(s[2]);
		return n = r, t = o, Jn(r, o);
	} finally {
		at.__wbindgen_free(n, t, 1);
	}
}
function yn(e) {
	const n = Qn(e, at.__wbindgen_malloc), t = st, r = at.scoreGgirHasib(n, t);
	var o = jn(r[0], r[1]).slice();
	return at.__wbindgen_free(r[0], 1 * r[1], 1), o;
}
function hn(e) {
	const n = at.scoreGgirHasibVariant(e);
	if (n[2]) throw nt(n[1]);
	return nt(n[0]);
}
function An(e, n, t) {
	const r = Qn(e, at.__wbindgen_malloc), o = st, i = Qn(n, at.__wbindgen_malloc), a = st, s = at.scoreGgirSib(r, o, i, a, t);
	if (s[2]) throw nt(s[1]);
	return nt(s[0]);
}
function vn(e, n) {
	const t = Qn(e, at.__wbindgen_malloc), r = st, o = at.scoreSadeh(t, r, n);
	var i = jn(o[0], o[1]).slice();
	return at.__wbindgen_free(o[0], 1 * o[1], 1), i;
}
function Sn(e) {
	const n = Kn(e, at.__wbindgen_malloc), t = st, r = at.sha256StreamFeed(n, t);
	if (r[1]) throw nt(r[0]);
}
function Mn() {
	let e, n;
	try {
		const o = at.sha256StreamFinish();
		var t = o[0], r = o[1];
		if (o[3]) throw t = 0, r = 0, nt(o[2]);
		return e = t, n = r, Jn(t, r);
	} finally {
		at.__wbindgen_free(e, n, 1);
	}
}
function Nn() {
	at.sha256StreamStart();
}
function En(e) {
	const n = Kn(e, at.__wbindgen_malloc), t = st, r = at.streamParseFeed(n, t);
	if (r[2]) throw nt(r[1]);
	return r[0] >>> 0;
}
function kn() {
	const e = at.streamParseFinish();
	if (e[2]) throw nt(e[1]);
	return Z.__wrap(e[0]);
}
function Cn() {
	const e = at.streamParseFinishChunk();
	if (e[2]) throw nt(e[1]);
	return Y.__wrap(e[0]);
}
function Fn(e, n) {
	const t = at.streamParseStart(e, n);
	if (t[1]) throw nt(t[0]);
}
function On(e, n) {
	const t = at.streamParseStartData(e, n);
	if (t[1]) throw nt(t[0]);
}
function Pn(e, n, t) {
	const r = at.streamParseStartWithEpoch(e, n, t);
	if (r[1]) throw nt(r[0]);
}
function xn(e, n) {
	const t = Kn(e, at.__wbindgen_malloc), r = st, o = at.summarizeActimetricPreschoolWristRfClasses(t, r, n);
	if (o[2]) throw nt(o[1]);
	return nt(o[0]);
}
function Rn(e, n, t, r, o) {
	const i = Qn(e, at.__wbindgen_malloc), a = st, s = Qn(n, at.__wbindgen_malloc), c = st, u = Qn(t, at.__wbindgen_malloc), l = st, _ = at.zeroCrossingCounts(i, a, s, c, u, l, r, o);
	if (_[2]) throw nt(_[1]);
	return nt(_[0]);
}
function Un() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(e, n) {
				return Error(Jn(e, n));
			},
			__wbg_Number_32bf70a599af1d4b: function(e) {
				return Number(e);
			},
			__wbg_String_8564e559799eccda: function(e, n) {
				const t = et(String(n), at.__wbindgen_malloc, at.__wbindgen_realloc), r = st;
				Vn().setInt32(e + 4, r, !0), Vn().setInt32(e + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(e, n) {
				const t = "bigint" == typeof n ? n : void 0;
				Vn().setBigInt64(e + 8, qn(t) ? BigInt(0) : t, !0), Vn().setInt32(e + 0, !qn(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(e) {
				const n = "boolean" == typeof e ? e : void 0;
				return qn(n) ? 16777215 : n ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(e, n) {
				const t = et(Dn(n), at.__wbindgen_malloc, at.__wbindgen_realloc), r = st;
				Vn().setInt32(e + 4, r, !0), Vn().setInt32(e + 0, t, !0);
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
				Vn().setFloat64(e + 8, qn(t) ? 0 : t, !0), Vn().setInt32(e + 0, !qn(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(e, n) {
				const t = "string" == typeof n ? n : void 0;
				var r = qn(t) ? 0 : et(t, at.__wbindgen_malloc, at.__wbindgen_realloc), o = st;
				Vn().setInt32(e + 4, o, !0), Vn().setInt32(e + 0, r, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(e, n) {
				throw new Error(Jn(e, n));
			},
			__wbg_call_14b169f759b26747: function() {
				return Zn(function(e, n) {
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
					t = e, r = n, console.error(Jn(e, n));
				} finally {
					at.__wbindgen_free(t, r, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(e) {
				return Array.from(e);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return Zn(function(e, n) {
					return Reflect.get(e, n);
				}, arguments);
			},
			__wbg_get_6011fa3a58f61074: function() {
				return Zn(function(e, n) {
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
				return new Float64Array(Tn(e, n));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(e, n) {
				return new Uint8Array(jn(e, n));
			},
			__wbg_new_with_length_5cfd777b51078805: function(e) {
				return new Float64Array(e >>> 0);
			},
			__wbg_new_with_length_8c854e41ea4dae9b: function(e) {
				return new Uint8Array(e >>> 0);
			},
			__wbg_next_0340c4ae324393c3: function() {
				return Zn(function(e) {
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
				return Zn(function(e) {
					return Reflect.ownKeys(e);
				}, arguments);
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(e, n, t) {
				Uint8Array.prototype.set.call(jn(e, n), t);
			},
			__wbg_push_471a5b068a5295f6: function(e, n) {
				return e.push(n);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return Zn(function(e, n, t) {
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
				const t = et(n.stack, at.__wbindgen_malloc, at.__wbindgen_realloc), r = st;
				Vn().setInt32(e + 4, r, !0), Vn().setInt32(e + 0, t, !0);
			},
			__wbg_static_accessor_GLOBAL_8cfadc87a297ca02: function() {
				const e = "undefined" == typeof global ? null : global;
				return qn(e) ? 0 : zn(e);
			},
			__wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: function() {
				const e = "undefined" == typeof globalThis ? null : globalThis;
				return qn(e) ? 0 : zn(e);
			},
			__wbg_static_accessor_SELF_e445c1c7484aecc3: function() {
				const e = "undefined" == typeof self ? null : self;
				return qn(e) ? 0 : zn(e);
			},
			__wbg_static_accessor_WINDOW_f20e8576ef1e0f17: function() {
				const e = "undefined" == typeof window ? null : window;
				return qn(e) ? 0 : zn(e);
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
				return jn(e, n);
			},
			__wbindgen_cast_0000000000000004: function(e, n) {
				return Jn(e, n);
			},
			__wbindgen_cast_0000000000000005: function(e) {
				return BigInt.asUintN(64, e);
			},
			__wbindgen_init_externref_table: function() {
				const e = at.__wbindgen_externrefs, n = e.grow(4);
				e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
			}
		}
	};
}
Symbol.dispose && (Z.prototype[Symbol.dispose] = Z.prototype.free);
const Wn = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((e) => at.__wbg_streamchunkresult_free(e >>> 0, 1)), Gn = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((e) => at.__wbg_streamparseresult_free(e >>> 0, 1));
function zn(e) {
	const n = at.__externref_table_alloc();
	return at.__wbindgen_externrefs.set(n, e), n;
}
function Dn(e) {
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
		n > 0 && (t += Dn(e[0]));
		for (let r = 1; r < n; r++) t += ", " + Dn(e[r]);
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
function Tn(e, n) {
	return e >>>= 0, $n().subarray(e / 8, e / 8 + n);
}
function Bn(e, n) {
	return e >>>= 0, (null !== Hn && 0 !== Hn.byteLength || (Hn = new Uint32Array(at.memory.buffer)), Hn).subarray(e / 4, e / 4 + n);
}
function jn(e, n) {
	return e >>>= 0, Yn().subarray(e / 1, e / 1 + n);
}
let In = null;
function Vn() {
	return (null === In || !0 === In.buffer.detached || void 0 === In.buffer.detached && In.buffer !== at.memory.buffer) && (In = new DataView(at.memory.buffer)), In;
}
let Ln = null;
function $n() {
	return null !== Ln && 0 !== Ln.byteLength || (Ln = new Float64Array(at.memory.buffer)), Ln;
}
function Jn(e, n) {
	return function(e, n) {
		return ot += n, ot >= rt && (tt = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), tt.decode(), ot = n), tt.decode(Yn().subarray(e, e + n));
	}(e >>>= 0, n);
}
let Hn = null, Xn = null;
function Yn() {
	return null !== Xn && 0 !== Xn.byteLength || (Xn = new Uint8Array(at.memory.buffer)), Xn;
}
function Zn(e, n) {
	try {
		return e.apply(this, n);
	} catch (t) {
		const e = zn(t);
		at.__wbindgen_exn_store(e);
	}
}
function qn(e) {
	return null == e;
}
function Kn(e, n) {
	const t = n(1 * e.length, 1) >>> 0;
	return Yn().set(e, t / 1), st = e.length, t;
}
function Qn(e, n) {
	const t = n(8 * e.length, 8) >>> 0;
	return $n().set(e, t / 8), st = e.length, t;
}
function et(e, n, t) {
	if (void 0 === t) {
		const t = it.encode(e), r = n(t.length, 1) >>> 0;
		return Yn().subarray(r, r + t.length).set(t), st = t.length, r;
	}
	let r = e.length, o = n(r, 1) >>> 0;
	const i = Yn();
	let a = 0;
	for (; a < r; a++) {
		const n = e.charCodeAt(a);
		if (n > 127) break;
		i[o + a] = n;
	}
	if (a !== r) {
		0 !== a && (e = e.slice(a)), o = t(o, r, r = a + 3 * e.length, 1) >>> 0;
		const n = Yn().subarray(o + a, o + r);
		a += it.encodeInto(e, n).written, o = t(o, r, a, 1) >>> 0;
	}
	return st = a, o;
}
function nt(e) {
	const n = at.__wbindgen_externrefs.get(e);
	return at.__externref_table_dealloc(e), n;
}
let tt = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
tt.decode();
const rt = 2146435072;
let ot = 0;
const it = new TextEncoder();
"encodeInto" in it || (it.encodeInto = function(e, n) {
	const t = it.encode(e);
	return n.set(t), {
		read: e.length,
		written: t.length
	};
});
let at, st = 0;
function ct(e, n) {
	return at = e.exports, In = null, Ln = null, Hn = null, Xn = null, at.__wbindgen_start(), at;
}
function ut(e) {
	if (void 0 !== at) return at;
	void 0 !== e && (Object.getPrototypeOf(e) === Object.prototype ? {module: e} = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const n = Un();
	return e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)), ct(new WebAssembly.Instance(e, n));
}
async function lt(e) {
	if (void 0 !== at) return at;
	void 0 !== e && (Object.getPrototypeOf(e) === Object.prototype ? {module_or_path: e} = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === e && (e = new URL("/sleep-scoring-wasm/assets/actours_bg-Bvm80hwQ.wasm", "" + import.meta.url));
	const n = Un();
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
	return ct(t);
}
let _t = null;
const ft = /unreachable|RuntimeError|out of bounds|wasm/i;
function dt(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function pt(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function gt(e) {
	const n = pt(e), t = n?.analysis_date, r = pt(n?.intrinsic), o = r?.state;
	if (!n || "string" != typeof t || 0 === t.length || !r || "string" != typeof o || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(o)) return null;
	const i = r.score, a = r.verdict, s = r.infinite_reason, c = {}, u = [], l = n.per_guider;
	if (Array.isArray(l)) for (const g of l) {
		const e = pt(g);
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
	const _ = pt(r.features), f = _ && Array.isArray(_.feature_values) ? _ : null, d = pt(r.legacy_complexity_features) ?? (null === f ? _ : null) ?? {}, p = n.computed_at;
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
const mt = [
	"skipped_disabled",
	"recalibrated",
	"identity_fallback_no_valid_fit",
	"identity_fallback_error_increased",
	"candidate_retained_below_preferred_quality"
];
function wt(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function bt(e, n) {
	const t = Array.isArray(e) ? e : [], r = (e) => wt(t[e]) ?? n;
	return [
		r(0),
		r(1),
		r(2)
	];
}
function yt(e, n) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		scale: bt(t.scale, n ? 1 : 0),
		offset: bt(t.offset, 0),
		temperatureOffset: bt(t.temperatureOffset, 0),
		errorStart: wt(t.errorStart),
		errorEnd: wt(t.errorEnd),
		fitAttempted: !0 === t.fitAttempted,
		numPoints: Math.max(0, Math.round(wt(t.numPoints) ?? 0)),
		hoursUsed: wt(t.hoursUsed) ?? 0,
		success: !0 === t.success,
		message: "string" == typeof t.message ? t.message : ""
	};
}
function ht(e) {
	if ("object" != typeof e || null === e) return null;
	const n = e, t = n.disposition;
	if ("string" != typeof t || !mt.includes(t)) return null;
	const r = yt(n, !0);
	return {
		...r,
		disposition: t,
		observed: "observed" in n ? yt(n.observed, !0) : r,
		applied: "applied" in n ? yt(n.applied, !0) : r
	};
}
const At = 1073741824, vt = "actours.compute.v1", St = "actours-corrected-3.3.7-v2";
function Mt(e) {
	return "number" == typeof e ? e : "nan" === e ? NaN : "positive_infinity" === e ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
}
function Nt(e) {
	return null === e ? null : Mt(e);
}
let Et = null, kt = !1;
function Ct() {
	return Et || (Et = (async () => {
		const e = await Promise.resolve().then(() => X);
		return await e.default(), "configureComputeMemoryBudgetV1" in e && "function" == typeof e.configureComputeMemoryBudgetV1 && e.configureComputeMemoryBudgetV1(function() {
			const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
			if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return At;
			const n = Math.floor(1024 * e * 1024 * 1024 / 4);
			return Math.min(2147483648, Math.max(At, n));
		}()), "initThreadPool" in e && "function" == typeof e.initThreadPool && "undefined" != typeof SharedArrayBuffer && "undefined" != typeof navigator && navigator.hardwareConcurrency > 1 && await e.initThreadPool(navigator.hardwareConcurrency), kt || (function(e) {
			const n = /* @__PURE__ */ new Float64Array(16), t = new Uint8Array(e.scoreSadeh(n, -4));
			if (16 !== t.length) throw new Error(`WASM integrity check failed: scoreSadeh length ${t.length}, expected 16`);
			for (let r = 0; r < 16; r++) if (1 !== t[r]) throw new Error(`WASM integrity check failed: scoreSadeh(zeros)[${r}] = ${t[r]}, expected 1. Bundle may be corrupt — clear the site cache and reload.`);
		}(e), kt = !0), e;
	})().catch((e) => {
		throw Et = null, e;
	})), Et;
}
function Ft(e, n = "computeMimsUnit") {
	if ("object" != typeof e || null === e) throw new Error(`${n}: unexpected WASM return shape — got ${typeof e}`);
	const t = e, r = Ot(t.mimsUnit);
	if (!r) throw new Error(`${n}: missing mimsUnit array — got ${JSON.stringify(e)}`);
	const o = t.epochSeconds;
	if ("number" != typeof o || !Number.isFinite(o) || o <= 0) throw new Error(`${n}: missing positive epochSeconds — got ${JSON.stringify(e)}`);
	const i = (e) => Ot(t[e]) ?? void 0, a = {
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
function Ot(e) {
	if (e instanceof Float64Array) return new Float64Array(e);
	if (ArrayBuffer.isView(e)) {
		const n = e;
		if ("number" == typeof n.length) return new Float64Array(Array.from(n, Number));
	}
	return Array.isArray(e) ? new Float64Array(e) : null;
}
function Pt(e) {
	if (e instanceof Uint8Array) return new Uint8Array(e);
	if (ArrayBuffer.isView(e)) {
		const n = e;
		if ("number" == typeof n.length) return new Uint8Array(Array.from(n, Number));
	}
	return Array.isArray(e) ? new Uint8Array(e) : null;
}
function xt(e, n) {
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
function Rt(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function Ut(e, n) {
	const t = e.computeNightSignals;
	if ("function" != typeof t) return console.warn("[wasm-worker] computeNightSignals is not present in this WASM bundle — night-signal detail degrades to empty."), { byDate: {} };
	let r;
	try {
		r = JSON.parse(t(function(e) {
			return JSON.stringify(function(e) {
				const n = dt(e.config), t = dt(n?.signals) ?? n;
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
		const n = {}, t = /* @__PURE__ */ new Set(), r = Rt(e)?.signals;
		if (!Array.isArray(r)) return { byDate: n };
		for (const o of r) {
			const e = Rt(o), r = e?.analysis_date, i = e?.epoch_length_seconds;
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
const Wt = {
	day_summaries: [],
	days_with_signal: 0
};
function Gt(e, n, t) {
	const r = e[n];
	if ("function" != typeof r) return console.warn(`[wasm-worker] ${n} is not present in this WASM bundle — local marker placement degrades to null. Rebuild the actours WASM crate to enable it.`), null;
	const o = r(JSON.stringify(t));
	try {
		return JSON.parse(o);
	} catch {
		return console.warn(`[wasm-worker] ${n} returned invalid JSON — degrading to null.`), null;
	}
}
function zt(e, n) {
	const t = "object" == typeof e && null !== e ? e : {}, r = t.nonwear, o = Array.isArray(r) ? r.map((e) => e ? 1 : 0) : null, i = t.elementSeconds, a = "number" == typeof i && Number.isFinite(i) && i > 0 ? i : n, s = Boolean(t.available) && null !== o, c = t.reason;
	return {
		nonwear: s ? o : null,
		conformance: "string" == typeof t.conformance ? t.conformance : s ? "conformant" : "unavailable",
		available: s,
		reason: "string" == typeof c ? c : null,
		elementSeconds: a
	};
}
function Dt(e) {
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
				_t = n ? `Rust trap at ${n[1]}:${n[2]}` : "Rust runtime trap", e("[wasm-worker] WASM runtime trap captured");
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
			_t = null;
			try {
				return await o(...e);
			} catch (n) {
				const e = n instanceof Error ? n.message : String(n);
				if (_t && ft.test(e)) throw new Error(`WASM panic in ${t}(): ${_t}`, { cause: n });
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
			i = JSON.parse(o(JSON.stringify(Dt(n))));
		} catch {
			return console.warn("[wasm-worker] detectNonwearUnified returned invalid JSON — degrading to unavailable."), r("detectNonwearUnified returned invalid JSON");
		}
		return zt(i, t);
	}(await Ct(), e),
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
		const s = a, c = Dt({
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
			o[f] = zt(n, r);
		}
		return o;
	}(await Ct(), e, n),
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
			i = JSON.parse(o(JSON.stringify(Dt(n))));
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
	}(await Ct(), e),
	async scoreSadeh(e, n) {
		const t = await Ct(), r = new Uint8Array(t.scoreSadeh(e, n));
		return b(r, [r.buffer]);
	},
	async scoreColeKripke(e, n) {
		const t = await Ct(), r = new Uint8Array(t.scoreColeKripke(e, n));
		return b(r, [r.buffer]);
	},
	async detectNonwear(e) {
		const n = await Ct(), t = new Uint8Array(n.detectNonwear(e));
		return b(t, [t.buffer]);
	},
	async detectNonwearChoi2011(e, n = 60) {
		const t = await Ct(), r = new Uint8Array("function" == typeof t.detectNonwearChoi2011Epoch ? t.detectNonwearChoi2011Epoch(e, n) : t.detectNonwearChoi2011(e));
		return b(r, [r.buffer]);
	},
	parseActigraphCsv: async (e, n) => xt((await Ct()).parseActigraphCsv(e, n), "parseActigraphCsv"),
	parseGeneactivCsv: async (e) => xt((await Ct()).parseGeneactivCsv(e), "parseGeneactivCsv"),
	isGeneactivFormat: async (e) => (await Ct()).isGeneactivFormat(e),
	async csvBufferClear(e) {
		(await Ct()).csvBufferClear(e);
	},
	async csvBufferAppend(e) {
		(await Ct()).csvBufferAppend(e);
	},
	parseGeneactivCsvBuffered: async () => xt((await Ct()).parseGeneactivCsvBuffered(), "parseGeneactivCsvBuffered"),
	parseActigraphCsvBuffered: async (e) => xt((await Ct()).parseActigraphCsvBuffered(e), "parseActigraphCsvBuffered"),
	async sha256Start() {
		await Ct(), Nn();
	},
	async sha256Feed(e) {
		await Ct(), Sn(e);
	},
	sha256Finish: async () => (await Ct(), Mn()),
	async streamParseStart(e, n, t = 60) {
		const r = await Ct();
		"function" == typeof r.streamParseStartWithEpoch ? r.streamParseStartWithEpoch(e, n, t) : r.streamParseStart(e, n);
	},
	async streamParseStartData(e, n) {
		(await Ct()).streamParseStartData(e, n);
	},
	streamParseFeed: async (e) => (await Ct()).streamParseFeed(e),
	async streamParseFinish() {
		const e = (await Ct()).streamParseFinish();
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
		const e = (await Ct()).streamParseFinishChunk();
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
		const i = (await Ct()).neishabouriCounts(e, n, t, r, o), a = "object" == typeof i && null !== i ? i : null, s = a ? Ot(a.x) : null, c = a ? Ot(a.y) : null, u = a ? Ot(a.z) : null, l = a ? Ot(a.vm) : null;
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
		const i = (await Ct()).zeroCrossingCounts(e, n, t, r, o), a = "object" == typeof i && null !== i ? i : null, s = a ? Ot(a.zcx) : null, c = a ? Ot(a.zcy) : null, u = a ? Ot(a.zcz) : null;
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
		const i = await Ct();
		if (!("computeMimsUnit" in i) || "function" != typeof i.computeMimsUnit) throw new Error("computeMimsUnit: current actours WASM bundle does not export MIMS_UNIT processing");
		const a = Ft(i.computeMimsUnit(e, n, t, r, o), "computeMimsUnit");
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
		const i = await Ct();
		if (!("computeMimsUnitDataframe" in i) || "function" != typeof i.computeMimsUnitDataframe) throw new Error("computeMimsUnitDataframe: current actours WASM bundle does not export MIMS_UNIT processing");
		const a = Ft(i.computeMimsUnitDataframe(e, n, t, r, o), "computeMimsUnitDataframe");
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
		const o = await Ct(), i = "function" == typeof o.classifyActimetricPreschoolWristRfLagLead ? o.classifyActimetricPreschoolWristRfLagLead : "function" == typeof o.classifyActimetricPreschoolWristRf ? o.classifyActimetricPreschoolWristRf : "function" == typeof o.actimetricPreschoolWristRfClasses ? o.actimetricPreschoolWristRfClasses : "function" == typeof o.predictActimetricPreschoolWristRfClasses ? o.predictActimetricPreschoolWristRfClasses : null;
		if (!i) throw new Error("classifyActimetricPreschoolWristRf: current actours WASM bundle does not export actimetric preschool wrist RF inference");
		const a = function(e, n = "classifyActimetricPreschoolWristRf") {
			const t = Pt(e);
			if (t) return {
				classes: t,
				epochSeconds: 15
			};
			const r = "object" == typeof e && null !== e ? e : null, o = r ? Pt(r.classes) ?? Pt(r.activityClasses) ?? Pt(r.predictions) ?? Pt(r.activity) : null;
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
		const o = await Ct(), i = o.lstmSpectralFeatures30s ?? o.spectralFeatures30s;
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
		const t = await Ct(), r = JSON.stringify({
			strategy: e,
			label_sequences: n.map((e) => Array.from(e))
		}), o = JSON.parse(t.scoreConsensus(r)), i = null != o && "object" == typeof o ? o.consensus : void 0;
		if (!Array.isArray(i)) throw new Error(`scoreConsensus: unexpected WASM return shape — got ${JSON.stringify(o)}`);
		const a = new Uint8Array(i);
		return b(a, [a.buffer]);
	},
	async computeSleepMetrics(e, n, t) {
		const r = (await Ct()).computeSleepMetrics(e, n, t);
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
			const n = {}, t = /* @__PURE__ */ new Set(), r = Rt(e)?.results;
			if (!Array.isArray(r)) return { byDate: n };
			for (const o of r) {
				const e = gt(o);
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
	}(await Ct(), e),
	computeFileSignals: async (e) => Ut(await Ct(), e),
	computeCircadian: async (e) => function(e, n) {
		const t = e.computeCircadian;
		if ("function" != typeof t) throw new Error("computeCircadian is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = t(JSON.stringify(n));
		let o;
		try {
			o = JSON.parse(r);
		} catch {
			return console.warn("[wasm-worker] computeCircadian returned invalid JSON — degrading to empty."), Wt;
		}
		return o && "object" == typeof o && Array.isArray(o.day_summaries) ? o : Wt;
	}(await Ct(), e),
	aggregateEpochSeries: async (e) => function(e, n) {
		const t = e.aggregateEpochSeries;
		if ("function" != typeof t) throw new Error("aggregateEpochSeries is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = t(n);
		if (null == r || "object" != typeof r) throw new Error("aggregateEpochSeries returned an invalid result.");
		const o = r;
		if (!o.series || !Array.isArray(o.series.timestamps_ms)) throw new Error("aggregateEpochSeries returned an invalid result.");
		return r;
	}(await Ct(), e),
	async runScoredVariantBatch(e) {
		const n = await Ct(), t = {}, r = /* @__PURE__ */ new Set();
		let o = 0, i = !1;
		for (const a of e.variants) {
			const s = e.classifierOutputs[a.classifierConfigId];
			if (!s) {
				o += 1;
				continue;
			}
			const c = "none" === a.nonwear ? void 0 : e.nonwearMasks[a.nonwear];
			if ("none" !== a.nonwear && !c?.mask) {
				const e = c?.reason ? ` (${c.reason})` : "";
				r.add(`Nonwear detector "${a.nonwear}" is unavailable for this data — scored without a nonwear mask.${e}`);
			}
			const u = $({
				...e,
				sleepScores: s,
				variant: { config: a },
				...c?.mask ? { choiNonwear: c.mask } : {}
			}), l = 0 === e.timestamps.length ? { results: [] } : Gt(n, "placeMarkers", u);
			if (!l) {
				i = !0;
				break;
			}
			const _ = l.results.find((n) => n.analysis_date === e.analysisDate) ?? l.results[0];
			for (const n of _?.notes ?? (0 === e.timestamps.length ? ["No activity data"] : [])) r.add(n);
			const f = [..._?.sleep_markers ?? [], ..._?.nap_markers ?? []];
			t[a.id] = H(J(f.map((e) => ({
				startTsSec: e.onset_timestamp,
				endTsSec: e.offset_timestamp
			})), e.timestamps, e.epochLengthSeconds));
		}
		return b({
			masks: t,
			notes: [...r],
			missingClassifier: o,
			placementUnavailable: i
		}, Object.values(t));
	},
	placeMarkers: async (e) => Gt(await Ct(), "placeMarkers", e),
	placeNonwearMarkers: async (e) => Gt(await Ct(), "placeNonwearMarkers", e),
	epochRawData: async (e, n, t, r, o) => xt((await Ct()).epochRawData(e, n, t, r, o), "epochRawData"),
	async epochWithBandpass(e, n, t) {
		const r = (await Ct()).epochWithBandpass(e, n, t), o = "object" == typeof r && null !== r ? r : null, i = Ot(o?.timestamps), a = Ot(o?.counts);
		if (!i || !a) throw new Error("epochWithBandpass: unexpected WASM return shape");
		return b({
			timestamps: i,
			counts: a
		}, [i.buffer, a.buffer]);
	},
	async computeEnmo5s(e, n, t, r) {
		const o = await Ct();
		return new Float64Array(o.computeEnmo5s(e, n, t, r));
	},
	async computeAnglez5s(e, n, t, r) {
		const o = await Ct();
		return new Float64Array(o.computeAnglez5s(e, n, t, r));
	},
	async processRawXyz(e, n, t, r, o, i) {
		const a = (await Ct()).processRawXyz(e, n, t, r, o, i ?? void 0), s = "object" == typeof a && null !== a ? a : null, c = s ? Ot(s.enmo5s) : null, u = s ? Ot(s.anglez5s) : null, l = s ? Ot(s.countsX) : null, _ = s ? Ot(s.countsY) : null, f = s ? Ot(s.countsZ) : null, d = s ? Ot(s.countsVm) : null;
		if (!(c && u && l && _ && f && d)) throw new Error(`processRawXyz: unexpected WASM return shape — got ${JSON.stringify(a)}`);
		const p = (e) => Ot(e) ?? /* @__PURE__ */ new Float64Array(0), g = s ? p(s.anglex5s) : /* @__PURE__ */ new Float64Array(0), m = s ? p(s.angley5s) : /* @__PURE__ */ new Float64Array(0), w = s ? p(s.mad5s) : /* @__PURE__ */ new Float64Array(0), y = s ? p(s.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
		return b({
			enmo5s: c,
			anglez5s: u,
			anglex5s: g,
			angley5s: m,
			mad5s: w,
			enmoa5s: y,
			calibration: ht(s?.calibration),
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
		const s = await Ct(), c = "function" == typeof s.processRawXyzImputedWithEpoch ? s.processRawXyzImputedWithEpoch(e, n, t, r, o, i ?? void 0, a) : s.processRawXyzImputed(e, n, t, r, o, i ?? void 0), u = "object" == typeof c && null !== c ? c : null, l = u ? Ot(u.enmo5s) : null, _ = u ? Ot(u.anglez5s) : null, f = u ? Ot(u.countsX) : null, d = u ? Ot(u.countsY) : null, p = u ? Ot(u.countsZ) : null, g = u ? Ot(u.countsVm) : null;
		if (!(l && _ && f && d && p && g)) throw new Error(`processRawXyzImputed: unexpected WASM return shape — got ${JSON.stringify(c)}`);
		const m = (e) => Ot(e) ?? /* @__PURE__ */ new Float64Array(0), w = u ? m(u.anglex5s) : /* @__PURE__ */ new Float64Array(0), y = u ? m(u.angley5s) : /* @__PURE__ */ new Float64Array(0), h = u ? m(u.mad5s) : /* @__PURE__ */ new Float64Array(0), A = u ? m(u.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
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
			calibration: ht(u?.calibration)
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
		const t = await Ct(), r = new Uint8Array(t.detectDetachFromAccelerationG(e, n));
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
	}((await Ct()).detectHdcza(e, n, t ?? null, r ?? null)),
	runFullPipelineV1: async (e, n, t, r, o) => function(e, n, t, r, o, i) {
		const a = e.runFullPipelineV1({
			contractVersion: vt,
			semanticProfile: St,
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
					nonwearFraction: Mt(s.metadata.nonwearFraction)
				},
				days: s.days.map((e) => ({
					calendarDate: e.calendarDate,
					dayNumber: e.dayNumber,
					validHours: Mt(e.validHours),
					nonwearHours: Mt(e.nonwearHours),
					totalEpochs: e.totalEpochs,
					sedentaryMinutes: Mt(e.sedentaryMinutes),
					lightMinutes: Mt(e.lightMinutes),
					moderateMinutes: Mt(e.moderateMinutes),
					vigorousMinutes: Mt(e.vigorousMinutes),
					mvpaMinutes: Mt(e.mvpaMinutes),
					l5ValueMg: Mt(e.l5ValueMg),
					l5OnsetEpoch: e.l5OnsetEpoch,
					m5ValueMg: Mt(e.m5ValueMg),
					m5OnsetEpoch: e.m5OnsetEpoch,
					igGradient: Mt(e.igGradient),
					igIntercept: Mt(e.igIntercept),
					igRsquared: Mt(e.igRsquared),
					fragTpIn2ac: Mt(e.fragTpIn2ac),
					fragTpAc2in: Mt(e.fragTpAc2in),
					nFragments: e.nFragments,
					nightNumber: e.nightNumber,
					tstMinutes: Nt(e.tstMinutes),
					wasoMinutes: Nt(e.wasoMinutes),
					sleepEfficiency: Nt(e.sleepEfficiency),
					numberOfAwakenings: e.numberOfAwakenings,
					sptDurationHours: Nt(e.sptDurationHours),
					cleaningCode: e.cleaningCode
				}))
			}),
			execution: a.execution,
			provenance: a.provenance
		} : null;
		var s;
	}(await Ct(), e, n, t, r, o),
	getComputeIdentity: async () => function(e, n) {
		if (!/^[0-9a-f]{64}$/.test(n)) throw new Error("Actours WASM artifact identity is unavailable or invalid; refusing to attest this runtime");
		const t = "object" == typeof e && null !== e ? e : {}, r = (e, n) => {
			const t = e[n];
			if ("string" != typeof t || 0 === t.length) throw new Error(`Actours capability ${n} must be a non-empty string`);
			return t;
		}, o = r(t, "contractVersion");
		if (o !== vt) throw new Error(`Unsupported Actours compute contract ${o}; expected ${vt}`);
		const i = r(t, "crateVersion"), a = t.sourceRevision;
		if (null !== a && ("string" != typeof a || 0 === a.length)) throw new Error("Actours capability sourceRevision must be null or a non-empty string");
		const s = t.compiledFeatures;
		if (!Array.isArray(s) || !s.every((e) => "string" == typeof e && e.length > 0)) throw new Error("Actours capability compiledFeatures must be an array of non-empty strings");
		const c = r("object" == typeof t.execution && null !== t.execution ? t.execution : {}, "target");
		if ("wasm" !== c) throw new Error(`Unsupported Actours execution target ${c}; expected wasm`);
		if (!(Array.isArray(t.semanticProfiles) ? t.semanticProfiles : []).includes(St)) throw new Error(`Actours capability does not provide required semantic profile ${St}`);
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
			semanticProfile: St,
			profileProofStatus: u,
			temporalBasis: l
		};
	}((await Ct()).getComputeCapabilitiesV1(), "9cc30be1f97c1717c7d982e68c060e2faf702b41ec108ff67b48f1a230ee8d7e"),
	runGgirFromEpoch: async (e, n, t, r, o) => (await Ct()).runGgirFromEpoch({
		anglez: e,
		enmo: n,
		sampleRateHz: t,
		startTsEpochSec: r,
		...o ? { invalid: o } : {}
	}, { ws3: 5 }),
	async readGgirMeta(e) {
		const n = await Ct();
		if ("function" != typeof n.readGgirMeta) throw new Error("readGgirMeta: current actours WASM bundle does not export GGIR RData import");
		const t = n.readGgirMeta(e), r = "object" == typeof t && null !== t ? t : null, o = r ? Ot(r.timestampsMs) : null, i = r ? Ot(r.enmo5s) : null, a = r ? Ot(r.anglez5s) : null, s = r ? Ot(r.anglex5s) : null, c = r ? Ot(r.angley5s) : null, u = r ? Pt(r.invalidShort) : null, l = r ? Pt(r.nonwearShort) : null;
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
		const r = (await Ct()).scoreGgirSib(e, n, t);
		if ("object" != typeof r || null === r || !r.sadeh_ggir || !r.ck_ggir) throw new Error(`scoreGgirSib: unexpected WASM return shape — got ${JSON.stringify(r)}`);
		const o = r, i = new Uint8Array(o.sadeh_ggir), a = new Uint8Array(o.ck_ggir);
		return b({
			sadeh_ggir: i,
			ck_ggir: a
		}, [i.buffer, a.buffer]);
	},
	async scoreGgirHasib(e) {
		const n = (await Ct()).scoreGgirHasib(e);
		if (!(n instanceof Uint8Array)) throw new Error("scoreGgirHasib: unexpected WASM return shape — expected Uint8Array, got " + typeof n);
		const t = new Uint8Array(n);
		return b(t, [t.buffer]);
	},
	async scoreGgirHasibVariant(e, n, t) {
		const r = function(e, n) {
			if ("object" != typeof e || null === e) throw new Error("scoreGgirHasibVariant: unexpected WASM return shape — got " + typeof e);
			const t = e, r = Pt(t.sib);
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
		}((await Ct()).scoreGgirHasibVariant({
			data: e,
			algo: n,
			...t ? { config: t } : {}
		}), n);
		return b(r, [r.sib.buffer]);
	},
	async detectGgirHasptVariant(e) {
		const n = function(e, n) {
			if ("object" != typeof e || null === e) throw new Error("detectGgirHasptVariant: unexpected WASM return shape — got " + typeof e);
			const t = e, r = Pt(t.nomov), o = Ot(t.rollingMedian);
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
		}((await Ct()).detectGgirHasptVariant(e), e.algo);
		return b(n, [n.nomov.buffer, n.rollingMedian.buffer]);
	},
	async scoreAllDays(e) {
		const n = (await Ct()).scoreAllDays(e);
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
