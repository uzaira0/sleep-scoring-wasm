/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const e = Symbol("Comlink.proxy"), t = Symbol("Comlink.endpoint"), n = Symbol("Comlink.releaseProxy"), r = Symbol("Comlink.finalizer"), a = Symbol("Comlink.thrown"), o = (e) => "object" == typeof e && null !== e || "function" == typeof e, s = /* @__PURE__ */ new Map([["proxy", {
	canHandle: (t) => o(t) && t[e],
	serialize(e) {
		const { port1: t, port2: n } = new MessageChannel();
		return i(e, t), [n, [n]];
	},
	deserialize: (e) => (e.start(), function(e) {
		const t = /* @__PURE__ */ new Map();
		return e.addEventListener("message", function(e) {
			const { data: n } = e;
			if (!n || !n.id) return;
			const r = t.get(n.id);
			if (r) try {
				r(n);
			} finally {
				t.delete(n.id);
			}
		}), d(e, t, [], void 0);
	}(e))
}], ["throw", {
	canHandle: (e) => o(e) && a in e,
	serialize({ value: e }) {
		let t;
		return t = e instanceof Error ? {
			isError: !0,
			value: {
				message: e.message,
				name: e.name,
				stack: e.stack
			}
		} : {
			isError: !1,
			value: e
		}, [t, []];
	},
	deserialize(e) {
		if (e.isError) throw Object.assign(new Error(e.value.message), e.value);
		throw e.value;
	}
}]]);
function i(t, n = globalThis, o = ["*"]) {
	n.addEventListener("message", function s(u) {
		if (!u || !u.data) return;
		if (!function(e, t) {
			for (const n of e) {
				if (t === n || "*" === n) return !0;
				if (n instanceof RegExp && n.test(t)) return !0;
			}
			return !1;
		}(o, u.origin)) return void console.warn(`Invalid origin '${u.origin}' for comlink proxy`);
		const { id: l, type: f, path: p } = Object.assign({ path: [] }, u.data), d = (u.data.argumentList || []).map(w);
		let m;
		try {
			const n = p.slice(0, -1).reduce((e, t) => e[t], t), r = p.reduce((e, t) => e[t], t);
			switch (f) {
				case "GET":
					m = r;
					break;
				case "SET":
					n[p.slice(-1)[0]] = w(u.data.value), m = !0;
					break;
				case "APPLY":
					m = r.apply(n, d);
					break;
				case "CONSTRUCT":
					m = function(t) {
						return Object.assign(t, { [e]: !0 });
					}(new r(...d));
					break;
				case "ENDPOINT":
					{
						const { port1: e, port2: n } = new MessageChannel();
						i(t, n), m = g(e, [e]);
					}
					break;
				case "RELEASE":
					m = void 0;
					break;
				default: return;
			}
		} catch (y) {
			m = {
				value: y,
				[a]: 0
			};
		}
		Promise.resolve(m).catch((e) => ({
			value: e,
			[a]: 0
		})).then((e) => {
			const [a, o] = h(e);
			n.postMessage(Object.assign(Object.assign({}, a), { id: l }), o), "RELEASE" === f && (n.removeEventListener("message", s), c(n), r in t && "function" == typeof t[r] && t[r]());
		}).catch((e) => {
			const [t, r] = h({
				value: /* @__PURE__ */ new TypeError("Unserializable return value"),
				[a]: 0
			});
			n.postMessage(Object.assign(Object.assign({}, t), { id: l }), r);
		});
	}), n.start && n.start();
}
function c(e) {
	(function(e) {
		return "MessagePort" === e.constructor.name;
	})(e) && e.close();
}
function u(e) {
	if (e) throw new Error("Proxy has been released and is not useable");
}
function l(e) {
	return b(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
		c(e);
	});
}
const f = /* @__PURE__ */ new WeakMap(), p = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const t = (f.get(e) || 0) - 1;
	f.set(e, t), 0 === t && l(e);
});
function d(e, r, a = [], o = function() {}) {
	let s = !1;
	const i = new Proxy(o, {
		get(t, o) {
			if (u(s), o === n) return () => {
				(function(e) {
					p && p.unregister(e);
				})(i), l(e), r.clear(), s = !0;
			};
			if ("then" === o) {
				if (0 === a.length) return { then: () => i };
				const t = b(e, r, {
					type: "GET",
					path: a.map((e) => e.toString())
				}).then(w);
				return t.then.bind(t);
			}
			return d(e, r, [...a, o]);
		},
		set(t, n, o) {
			u(s);
			const [i, c] = h(o);
			return b(e, r, {
				type: "SET",
				path: [...a, n].map((e) => e.toString()),
				value: i
			}, c).then(w);
		},
		apply(n, o, i) {
			u(s);
			const c = a[a.length - 1];
			if (c === t) return b(e, r, { type: "ENDPOINT" }).then(w);
			if ("bind" === c) return d(e, r, a.slice(0, -1));
			const [l, f] = m(i);
			return b(e, r, {
				type: "APPLY",
				path: a.map((e) => e.toString()),
				argumentList: l
			}, f).then(w);
		},
		construct(t, n) {
			u(s);
			const [o, i] = m(n);
			return b(e, r, {
				type: "CONSTRUCT",
				path: a.map((e) => e.toString()),
				argumentList: o
			}, i).then(w);
		}
	});
	return function(e, t) {
		const n = (f.get(t) || 0) + 1;
		f.set(t, n), p && p.register(e, t, e);
	}(i, e), i;
}
function m(e) {
	const t = e.map(h);
	return [t.map((e) => e[0]), (n = t.map((e) => e[1]), Array.prototype.concat.apply([], n))];
	var n;
}
const y = /* @__PURE__ */ new WeakMap();
function g(e, t) {
	return y.set(e, t), e;
}
function h(e) {
	for (const [t, n] of s) if (n.canHandle(e)) {
		const [r, a] = n.serialize(e);
		return [{
			type: "HANDLER",
			name: t,
			value: r
		}, a];
	}
	return [{
		type: "RAW",
		value: e
	}, y.get(e) || []];
}
function w(e) {
	switch (e.type) {
		case "HANDLER": return s.get(e.name).deserialize(e.value);
		case "RAW": return e.value;
	}
}
function b(e, t, n, r) {
	return new Promise((a) => {
		const o = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		t.set(o, a), e.start && e.start(), e.postMessage(Object.assign({ id: o }, n), r);
	});
}
const _ = "smart", A = "webster", S = {
	diary: "diary",
	hdcza: "hdcza",
	l5: "l5",
	selected_scorer_first_last: "selected_scorer_first_last",
	selected_scorer_longest_bout: "selected_scorer_longest_bout",
	quiet_bout: "quiet_bout",
	none: "none"
}, v = S.diary, M = S.hdcza, E = S.l5, N = S.selected_scorer_first_last, F = S.selected_scorer_longest_bout, k = S.quiet_bout, O = S.none, T = "use_source_a", U = {
	sourceA: "hdcza",
	sourceB: "selected_scorer_first_last",
	fusionPolicy: "source_b_bounded_by_source_a",
	mergeGapMinutes: 45,
	paddingMinutes: 0,
	minOverlapJaccard: .5,
	applyNonwearGate: !1
}, C = {
	[v]: "Diary",
	[M]: "HDCZA SPT",
	[E]: "L5 least active 5h",
	[N]: "Selected scorer first-last sleep",
	[F]: "Selected scorer longest sleep bout",
	[k]: "Quiet-bout least-active window",
	[O]: "None"
};
function x(e) {
	const t = e ?? {};
	return {
		...U,
		sourceA: t.sourceA ?? t.source_a ?? U.sourceA,
		sourceB: t.sourceB ?? t.source_b ?? U.sourceB,
		fusionPolicy: t.fusionPolicy ?? t.fusion_policy ?? U.fusionPolicy,
		mergeGapMinutes: t.mergeGapMinutes ?? t.merge_gap_minutes ?? U.mergeGapMinutes,
		paddingMinutes: t.paddingMinutes ?? t.padding_minutes ?? U.paddingMinutes,
		minOverlapJaccard: t.minOverlapJaccard ?? t.min_overlap_jaccard ?? U.minOverlapJaccard,
		applyNonwearGate: t.applyNonwearGate ?? t.apply_nonwear_gate ?? U.applyNonwearGate
	};
}
Object.values(S).map((e) => ({
	value: e,
	label: C[e]
}));
const W = "diary", P = "none", R = new Set(Object.values({
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
function z(e) {
	if (!e) return [];
	const t = [];
	for (const [n, r] of e) null != n && "" !== n.trim() && t.push({
		onset_time: n,
		offset_time: r ?? null
	});
	return t;
}
function G(e) {
	if (!e) return [];
	const t = [];
	for (const [n, r] of e) null != n && null != r && "" !== n.trim() && "" !== r.trim() && t.push({
		start_time: n,
		end_time: r
	});
	return t;
}
function D(e) {
	const t = { ruleset: e.ruleset ?? "legacy" };
	if (e.algorithm && R.has(e.algorithm) && (t.classifier = e.algorithm), null != e.epochLengthSeconds && (t.epoch_length_seconds = e.epochLengthSeconds), null != e.onsetMinConsecutiveSleep && (t.onset_min_consecutive_sleep = e.onsetMinConsecutiveSleep), null != e.offsetMinConsecutiveMinutes && (t.offset_min_consecutive_minutes = e.offsetMinConsecutiveMinutes), e.scorerPostprocessing && (t.scorer_postprocessing = e.scorerPostprocessing), e.nonwearDetector && "choi_2011" !== e.nonwearDetector && (t.nonwear_detector = e.nonwearDetector), e.sleepPeriodDetection) {
		const n = x(e.sleepPeriodDetection);
		t.merge_gap_minutes = n.mergeGapMinutes, t.padding_minutes = n.paddingMinutes, t.min_overlap_jaccard = n.minOverlapJaccard;
	}
	const n = function(e) {
		if (e.sleepPeriodDetection && !function(e) {
			const t = U;
			return e.sourceA === t.sourceA && e.sourceB === t.sourceB && e.fusionPolicy === t.fusionPolicy && e.mergeGapMinutes === t.mergeGapMinutes && e.paddingMinutes === t.paddingMinutes && e.minOverlapJaccard === t.minOverlapJaccard && e.applyNonwearGate === t.applyNonwearGate;
		}(x(e.sleepPeriodDetection))) {
			const t = function(e) {
				const t = x(e);
				return {
					source_a: t.sourceA,
					source_b: t.sourceB,
					fusion_policy: t.fusionPolicy,
					merge_gap_minutes: t.mergeGapMinutes,
					padding_minutes: t.paddingMinutes,
					min_overlap_jaccard: t.minOverlapJaccard,
					apply_nonwear_gate: t.applyNonwearGate
				};
			}(e.sleepPeriodDetection);
			return {
				source_a: t.source_a,
				source_b: t.source_b,
				fusion_policy: t.fusion_policy,
				apply_nonwear_gate: t.apply_nonwear_gate
			};
		}
		const t = e.periodGuider ?? _, n = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime);
		return function(e, t) {
			const n = (e) => ({
				source_a: e,
				source_b: "none",
				fusion_policy: "use_source_a",
				apply_nonwear_gate: !1
			});
			switch (e) {
				case "diary": return;
				case "hdcza": return n("hdcza");
				case "l5": return n("l5");
				case "longest_bout": return n("selected_scorer_longest_bout");
				case "none": return n("none");
				case _:
					if (t.hasDiary) return;
					return n("lstm_sleep_wake" === t.algorithm ? "selected_scorer_longest_bout" : "l5");
				default: return;
			}
		}(t, {
			algorithm: e.algorithm ?? null,
			hasDiary: n
		});
	}(e);
	return n && (t.detection = n), t;
}
function j(e) {
	const t = {
		analysis_date: e.analysisDate ?? "",
		epoch_length_seconds: e.epochLengthSeconds ?? 60,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (t.choi_nonwear = e.choiNonwear), e.sensorNonwear && e.sensorNonwear.length > 0 && (t.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (t.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (t.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (t.diary_in_bed_time = e.diaryBedTime);
	const n = z(e.diaryNaps);
	n.length > 0 && (t.diary_naps = n);
	const r = G(e.diaryNonwear);
	return r.length > 0 && (t.diary_nonwear = r), e.hdczaWindow && (t.hdcza_window = [e.hdczaWindow.startTimestamp, e.hdczaWindow.endTimestamp]), t;
}
function B(e) {
	const t = {
		analysis_date: e.analysisDate,
		epoch_length_seconds: e.epochLengthSeconds,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (t.choi_nonwear = e.choiNonwear), e.sensorNonwear && e.sensorNonwear.length > 0 && (t.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (t.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (t.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (t.diary_in_bed_time = e.diaryBedTime);
	const n = z(e.diaryNaps);
	n.length > 0 && (t.diary_naps = n);
	const r = G(e.diaryNonwear);
	return r.length > 0 && (t.diary_nonwear = r), t;
}
function I(e) {
	return e && 0 !== e.length ? e.map(([e, t]) => [e, t]) : null;
}
let $ = null;
const L = /unreachable|RuntimeError|out of bounds|wasm/i;
function H(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function V(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function J(e) {
	const t = V(e), n = t?.analysis_date, r = V(t?.intrinsic), a = r?.state;
	if (!t || "string" != typeof n || 0 === n.length || !r || "string" != typeof a || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(a)) return null;
	const o = r.score, s = r.verdict, i = r.infinite_reason, c = {}, u = [], l = t.per_guider;
	if (Array.isArray(l)) for (const y of l) {
		const e = V(y);
		if (!e) continue;
		u.push(e);
		const t = e.guider;
		if ("string" != typeof t) continue;
		const n = e.confidence;
		Object.defineProperty(c, t, {
			value: "number" == typeof n && Number.isFinite(n) ? n : null,
			enumerable: !0,
			configurable: !0,
			writable: !0
		});
	}
	const f = V(r.features), p = f && Array.isArray(f.feature_values) ? f : null, d = V(r.legacy_complexity_features) ?? (null === p ? f : null) ?? {}, m = t.computed_at;
	return {
		difficulty: "number" == typeof o && Number.isFinite(o) ? o : null,
		state: a,
		verdict: "string" == typeof s ? s : null,
		infiniteReason: "string" == typeof i ? i : null,
		confidenceByGuider: c,
		features: d,
		featureVector: p,
		perGuider: u,
		computedAt: "string" == typeof m ? m : null,
		canonicalResult: t,
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
const X = [
	"skipped_disabled",
	"recalibrated",
	"identity_fallback_no_valid_fit",
	"identity_fallback_error_increased",
	"candidate_retained_below_preferred_quality"
];
function Y(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function Z(e, t) {
	const n = Array.isArray(e) ? e : [], r = (e) => Y(n[e]) ?? t;
	return [
		r(0),
		r(1),
		r(2)
	];
}
function q(e, t) {
	const n = "object" == typeof e && null !== e ? e : {};
	return {
		scale: Z(n.scale, t ? 1 : 0),
		offset: Z(n.offset, 0),
		temperatureOffset: Z(n.temperatureOffset, 0),
		errorStart: Y(n.errorStart),
		errorEnd: Y(n.errorEnd),
		fitAttempted: !0 === n.fitAttempted,
		numPoints: Math.max(0, Math.round(Y(n.numPoints) ?? 0)),
		hoursUsed: Y(n.hoursUsed) ?? 0,
		success: !0 === n.success,
		message: "string" == typeof n.message ? n.message : ""
	};
}
function K(e) {
	if ("object" != typeof e || null === e) return null;
	const t = e, n = t.disposition;
	if ("string" != typeof n || !X.includes(n)) return null;
	const r = q(t, !0);
	return {
		...r,
		disposition: n,
		observed: "observed" in t ? q(t.observed, !0) : r,
		applied: "applied" in t ? q(t.applied, !0) : r
	};
}
const Q = 1073741824, ee = "actours.compute.v1", te = "actours-corrected-3.3.7-v2";
function ne(e) {
	return "number" == typeof e ? e : "nan" === e ? NaN : "positive_infinity" === e ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
}
function re(e) {
	return null === e ? null : ne(e);
}
let ae = null, oe = !1;
function se() {
	return ae || (ae = (async () => {
		const { mod: e, runtime: t } = await async function(e) {
			if ((t = e.scope).sharedArrayBuffer && t.crossOriginIsolated && t.cores > 1) try {
				const t = await e.loadThreaded();
				await t.default();
				const n = Math.min(4, e.scope.cores);
				return t.threadPoolReady() || await function(e, t) {
					let n;
					const r = new Promise((e, r) => {
						n = setTimeout(() => {
							r(/* @__PURE__ */ new Error(`thread pool did not start within ${String(t)} ms`));
						}, t);
					});
					return Promise.race([e, r]).finally(() => {
						clearTimeout(n);
					});
				}(t.startThreadPool(n), e.poolStartTimeoutMs ?? 15e3), {
					mod: t,
					runtime: {
						threaded: !0,
						threads: n
					}
				};
			} catch (r) {
				e.warn("[wasm] threaded runtime unavailable, using the single-thread package", r);
			}
			var t;
			const n = await e.loadSingle();
			return await n.default(), {
				mod: n,
				runtime: {
					threaded: !1,
					threads: 1
				}
			};
		}({
			scope: {
				sharedArrayBuffer: "undefined" != typeof SharedArrayBuffer,
				crossOriginIsolated: "undefined" != typeof crossOriginIsolated && crossOriginIsolated,
				cores: "undefined" != typeof navigator ? navigator.hardwareConcurrency : 1
			},
			loadThreaded: () => import("./actours-2TG4mha5.js"),
			loadSingle: () => import("./actours-DaiuHmZj.js"),
			warn: (e, t) => {
				console.warn(e, t);
			}
		});
		return "configureComputeMemoryBudgetV1" in e && "function" == typeof e.configureComputeMemoryBudgetV1 && e.configureComputeMemoryBudgetV1(function() {
			const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
			if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return Q;
			const t = Math.floor(1024 * e * 1024 * 1024 / 4);
			return Math.min(2147483648, Math.max(Q, t));
		}()), oe || (function(e) {
			const t = /* @__PURE__ */ new Float64Array(16), n = new Uint8Array(e.scoreSadeh(t, -4));
			if (16 !== n.length) throw new Error(`WASM integrity check failed: scoreSadeh length ${n.length}, expected 16`);
			for (let r = 0; r < 16; r++) if (1 !== n[r]) throw new Error(`WASM integrity check failed: scoreSadeh(zeros)[${r}] = ${n[r]}, expected 1. Bundle may be corrupt — clear the site cache and reload.`);
		}(e), oe = !0), e;
	})().catch((e) => {
		throw ae = null, e;
	})), ae;
}
function ie(e, t = "computeMimsUnit") {
	if ("object" != typeof e || null === e) throw new Error(`${t}: unexpected WASM return shape — got ${typeof e}`);
	const n = e, r = ce(n.mimsUnit);
	if (!r) throw new Error(`${t}: missing mimsUnit array — got ${JSON.stringify(e)}`);
	const a = n.epochSeconds;
	if ("number" != typeof a || !Number.isFinite(a) || a <= 0) throw new Error(`${t}: missing positive epochSeconds — got ${JSON.stringify(e)}`);
	const o = (e) => ce(n[e]) ?? void 0, s = {
		mimsUnit: r,
		epochSeconds: a
	}, i = o("mimsUnitX");
	i && (s.mimsUnitX = i);
	const c = o("mimsUnitY");
	c && (s.mimsUnitY = c);
	const u = o("mimsUnitZ");
	u && (s.mimsUnitZ = u);
	const l = o("headerTimeStamp");
	l && (s.headerTimeStamp = l);
	const f = o("mimsOrientationTimestamp");
	f && (s.mimsOrientationTimestamp = f);
	const p = o("mimsOrientationXAngle");
	p && (s.mimsOrientationXAngle = p);
	const d = o("mimsOrientationYAngle");
	d && (s.mimsOrientationYAngle = d);
	const m = o("mimsOrientationZAngle");
	return m && (s.mimsOrientationZAngle = m), s;
}
function ce(e) {
	if (e instanceof Float64Array) return new Float64Array(e);
	if (ArrayBuffer.isView(e)) {
		const t = e;
		if ("number" == typeof t.length) return new Float64Array(Array.from(t, Number));
	}
	return Array.isArray(e) ? new Float64Array(e) : null;
}
function ue(e) {
	if (e instanceof Uint8Array) return new Uint8Array(e);
	if (ArrayBuffer.isView(e)) {
		const t = e;
		if ("number" == typeof t.length) return new Uint8Array(Array.from(t, Number));
	}
	return Array.isArray(e) ? new Uint8Array(e) : null;
}
function le(e, t) {
	if ("object" != typeof e || null === e) throw new Error(`${t}: unexpected WASM return shape — got ${JSON.stringify(e)}`);
	const n = e, r = {}, a = [];
	for (const o of Object.keys(n)) {
		const e = n[o];
		if (Array.isArray(e)) {
			const t = new Float64Array(e);
			r[o] = t, a.push(t.buffer);
		} else r[o] = e;
	}
	return g(r, a);
}
function fe(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
const pe = {
	day_summaries: [],
	days_with_signal: 0
};
function de(e, t) {
	const n = "object" == typeof e && null !== e ? e : {}, r = n.nonwear, a = r instanceof Uint8Array ? r : null, o = n.element_seconds, s = "number" == typeof o && Number.isFinite(o) && o > 0 ? o : t, i = Boolean(n.available) && null !== a, c = n.reason;
	return {
		nonwear: i ? a : null,
		conformance: "string" == typeof n.conformance ? n.conformance : i ? "conformant" : "unavailable",
		available: i,
		reason: "string" == typeof c ? c : null,
		elementSeconds: s
	};
}
function me(e, t, n, r) {
	const a = n.epochSeconds, o = {}, s = (e) => ({
		nonwear: null,
		conformance: "unavailable",
		available: !1,
		reason: e,
		elementSeconds: a
	}), i = e.detectNonwearUnifiedBatchTyped;
	if ("function" != typeof i) {
		console.warn("[wasm-worker] detectNonwearUnifiedBatchTyped export missing — degrading to unavailable.");
		for (const e of t) o[e] = s("detectNonwearUnifiedBatchTyped export missing (stale WASM bundle)");
		return o;
	}
	try {
		const e = i(JSON.stringify(t), JSON.stringify(r ?? null), n.counts ?? /* @__PURE__ */ new Float64Array(), n.raw ?? /* @__PURE__ */ new Float64Array(), n.temperature ?? /* @__PURE__ */ new Float64Array(), n.epochSeconds, n.sampleRate ?? 0);
		for (const n of t) o[n] = de(e.results.find((e) => e.algorithm === n), a);
	} catch {
		console.warn("[wasm-worker] detectNonwearUnifiedBatchTyped failed — degrading to unavailable.");
		for (const e of t) o[e] = s("detectNonwearUnifiedBatchTyped failed");
	}
	return o;
}
"undefined" != typeof self && "undefined" == typeof window && (function() {
	const e = console.error.bind(console);
	console.error = (...t) => {
		try {
			const n = t.map((e) => "string" == typeof e ? e : e instanceof Error ? e.stack ?? e.message : String(e)).join(" ");
			if (/panicked at|RuntimeError|unreachable/i.test(n)) {
				const t = /([A-Za-z0-9_.-]+\.rs):(\d+)/.exec(n);
				$ = t ? `Rust trap at ${t[1]}:${t[2]}` : "Rust runtime trap", e("[wasm-worker] WASM runtime trap captured");
				return;
			}
		} catch {}
		e(...t);
	};
}(), i(function(e) {
	const t = {};
	for (const n of Object.keys(e)) {
		const r = e[n];
		if ("function" != typeof r) {
			t[n] = r;
			continue;
		}
		const a = r;
		t[n] = async (...e) => {
			$ = null;
			try {
				return await a(...e);
			} catch (t) {
				const e = t instanceof Error ? t.message : String(t);
				if ($ && L.test(e)) throw new Error(`WASM panic in ${n}(): ${$}`, { cause: t });
				throw t;
			}
		};
	}
	return t;
}({
	async readDiaryWorkbook(e, t) {
		const { readDiaryWorkbookSheet: n } = await import("./diary-xlsx-adapter-DthwMDD1.js");
		return n(e, t);
	},
	async detectNonwearUnified(e) {
		const t = function(e, t) {
			return me(e, [t.algorithm], t.signals, t.config)[t.algorithm];
		}(await se(), e);
		return g(t, t.nonwear ? [t.nonwear.buffer] : []);
	},
	async detectNonwearUnifiedBatch(e, t) {
		const n = me(await se(), e, t);
		return g(n, Object.values(n).flatMap((e) => e.nonwear ? [e.nonwear.buffer] : []));
	},
	async scoreEpochs(e) {
		const t = function(e, t) {
			const n = t.signals.epochSeconds, r = (e) => ({
				sleepWake: null,
				conformance: "unavailable",
				available: !1,
				reason: e,
				elementSeconds: n
			}), a = e.scoreEpochsTyped;
			if ("function" != typeof a) return console.warn("[wasm-worker] scoreEpochsTyped is not present in this WASM bundle — unified local scoring degrades to unavailable. Rebuild the actours WASM crate to enable it."), r("scoreEpochsTyped export missing (stale WASM bundle)");
			let o;
			try {
				const { signals: e, ...n } = t;
				o = a(JSON.stringify(n), e.counts ?? /* @__PURE__ */ new Float64Array(), e.raw ?? /* @__PURE__ */ new Float64Array(), e.temperature ?? /* @__PURE__ */ new Float64Array(), e.epochSeconds, e.sampleRate ?? 0);
			} catch {
				return console.warn("[wasm-worker] scoreEpochsTyped failed — degrading to unavailable."), r("scoreEpochsTyped failed");
			}
			return function(e, t) {
				const n = "object" == typeof e && null !== e ? e : {}, r = n.sleep_wake, a = r instanceof Uint8Array ? r : null, o = n.element_seconds, s = "number" == typeof o && Number.isFinite(o) && o > 0 ? o : t, i = Boolean(n.available) && null !== a, c = n.reason;
				return {
					sleepWake: i ? a : null,
					conformance: "string" == typeof n.conformance ? n.conformance : i ? "conformant" : "unavailable",
					available: i,
					reason: "string" == typeof c ? c : null,
					elementSeconds: s
				};
			}(o, n);
		}(await se(), e);
		return g(t, t.sleepWake ? [t.sleepWake.buffer] : []);
	},
	async scoreSadeh(e, t) {
		const n = await se(), r = new Uint8Array(n.scoreSadeh(e, t));
		return g(r, [r.buffer]);
	},
	async scoreColeKripke(e, t) {
		const n = await se(), r = new Uint8Array(n.scoreColeKripke(e, t));
		return g(r, [r.buffer]);
	},
	async detectNonwear(e) {
		const t = await se(), n = new Uint8Array(t.detectNonwear(e));
		return g(n, [n.buffer]);
	},
	async detectNonwearChoi2011(e, t = 60) {
		const n = await se(), r = new Uint8Array("function" == typeof n.detectNonwearChoi2011Epoch ? n.detectNonwearChoi2011Epoch(e, t) : n.detectNonwearChoi2011(e));
		return g(r, [r.buffer]);
	},
	parseActigraphCsv: async (e, t) => le((await se()).parseActigraphCsv(e, t), "parseActigraphCsv"),
	parseGeneactivCsv: async (e) => le((await se()).parseGeneactivCsv(e), "parseGeneactivCsv"),
	isGeneactivFormat: async (e) => (await se()).isGeneactivFormat(e),
	async csvBufferClear(e) {
		(await se()).csvBufferClear(e);
	},
	async csvBufferAppend(e) {
		(await se()).csvBufferAppend(e);
	},
	parseGeneactivCsvBuffered: async () => le((await se()).parseGeneactivCsvBuffered(), "parseGeneactivCsvBuffered"),
	parseActigraphCsvBuffered: async (e) => le((await se()).parseActigraphCsvBuffered(e), "parseActigraphCsvBuffered"),
	async sha256Start() {
		(await se()).sha256StreamStart();
	},
	async sha256Feed(e) {
		(await se()).sha256StreamFeed(e);
	},
	sha256Finish: async () => (await se()).sha256StreamFinish(),
	async streamParseStart(e, t, n = 60) {
		const r = await se();
		"function" == typeof r.streamParseStartWithEpoch ? r.streamParseStartWithEpoch(e, t, n) : r.streamParseStart(e, t);
	},
	async streamParseStartData(e, t) {
		(await se()).streamParseStartData(e, t);
	},
	streamParseFeed: async (e) => (await se()).streamParseFeed(e),
	async streamParseFinish() {
		const e = (await se()).streamParseFinish();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinish: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const t = new Float64Array(e.timestampsMs), n = new Float64Array(e.axisX), r = new Float64Array(e.axisY), a = new Float64Array(e.axisZ), o = new Float64Array(e.vectorMagnitude), s = new Float64Array(e.temperature);
		return g({
			timestampsMs: t,
			axisX: n,
			axisY: r,
			axisZ: a,
			vectorMagnitude: o,
			temperature: s,
			sampleFrequency: e.sampleFrequency,
			headerRowsSkipped: e.headerRowsSkipped
		}, [
			t.buffer,
			n.buffer,
			r.buffer,
			a.buffer,
			o.buffer,
			s.buffer
		]);
	},
	async streamParseFinishChunk() {
		const e = (await se()).streamParseFinishChunk();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinishChunk: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const t = new Float64Array(e.timestampsMs), n = new Float64Array(e.axisX), r = new Float64Array(e.axisY), a = new Float64Array(e.axisZ), o = new Float64Array(e.vectorMagnitude), s = new Float64Array(e.temperature), i = new Uint32Array(e.counts), c = new Uint32Array(e.tempCounts), u = new Float64Array(e.timestampsMs5s), l = new Float64Array(e.enmo5s), f = new Float64Array(e.anglez5s), p = new Float64Array(e.anglex5s ?? 0), d = new Float64Array(e.angley5s ?? 0), m = new Float64Array(e.mad5s ?? 0), y = new Float64Array(e.enmoa5s ?? 0), h = e, w = new Float64Array(h.zcx60s ?? []), b = new Float64Array(h.zcy60s ?? []), _ = new Float64Array(h.zcz60s ?? []), A = new Uint32Array(e.counts5s), S = e, v = new Float64Array(S.mimsUnit ?? []), M = new Float64Array(S.mimsUnitX ?? []), E = new Float64Array(S.mimsUnitY ?? []), N = new Float64Array(S.mimsUnitZ ?? []), F = e;
		return g({
			timestampsMs: t,
			axisX: n,
			axisY: r,
			axisZ: a,
			vectorMagnitude: o,
			temperature: s,
			counts: i,
			tempCounts: c,
			timestampsMs5s: u,
			enmo5s: l,
			anglez5s: f,
			anglex5s: p,
			angley5s: d,
			mad5s: m,
			enmoa5s: y,
			zcx60s: w,
			zcy60s: b,
			zcz60s: _,
			counts5s: A,
			mimsUnit: v,
			mimsUnitX: M,
			mimsUnitY: E,
			mimsUnitZ: N,
			sampleFrequency: e.sampleFrequency,
			headerRowsSkipped: e.headerRowsSkipped,
			rowsDropped: e.rowsDropped,
			rawRetentionDegraded: F.rawRetentionDegraded ?? !1,
			canonicalPassDegraded: F.canonicalPassDegraded ?? !1,
			canonicalPassReason: F.canonicalPassReason ?? null
		}, [
			t.buffer,
			n.buffer,
			r.buffer,
			a.buffer,
			o.buffer,
			s.buffer,
			i.buffer,
			c.buffer,
			u.buffer,
			l.buffer,
			f.buffer,
			p.buffer,
			d.buffer,
			m.buffer,
			y.buffer,
			w.buffer,
			b.buffer,
			_.buffer,
			A.buffer,
			v.buffer,
			M.buffer,
			E.buffer,
			N.buffer
		]);
	},
	async neishabouriCounts(e, t, n, r, a) {
		const o = (await se()).neishabouriCounts(e, t, n, r, a), s = "object" == typeof o && null !== o ? o : null, i = s ? ce(s.x) : null, c = s ? ce(s.y) : null, u = s ? ce(s.z) : null, l = s ? ce(s.vm) : null;
		if (!(i && c && u && l)) throw new Error(`neishabouriCounts: unexpected WASM return shape — got ${JSON.stringify(o)}`);
		return g({
			x: i,
			y: c,
			z: u,
			vm: l
		}, [
			i.buffer,
			c.buffer,
			u.buffer,
			l.buffer
		]);
	},
	async zeroCrossingCounts(e, t, n, r, a) {
		const o = (await se()).zeroCrossingCounts(e, t, n, r, a), s = "object" == typeof o && null !== o ? o : null, i = s ? ce(s.zcx) : null, c = s ? ce(s.zcy) : null, u = s ? ce(s.zcz) : null;
		if (!i || !c || !u) throw new Error(`zeroCrossingCounts: unexpected WASM return shape — got ${JSON.stringify(o)}`);
		return g({
			zcx: i,
			zcy: c,
			zcz: u
		}, [
			i.buffer,
			c.buffer,
			u.buffer
		]);
	},
	async computeMimsUnit(e, t, n, r, a = {}) {
		const o = await se();
		if (!("computeMimsUnit" in o) || "function" != typeof o.computeMimsUnit) throw new Error("computeMimsUnit: current actours WASM bundle does not export MIMS_UNIT processing");
		const s = ie(o.computeMimsUnit(e, t, n, r, a), "computeMimsUnit");
		return g(s, [
			s.mimsUnit.buffer,
			s.mimsUnitX?.buffer,
			s.mimsUnitY?.buffer,
			s.mimsUnitZ?.buffer,
			s.headerTimeStamp?.buffer,
			s.mimsOrientationTimestamp?.buffer,
			s.mimsOrientationXAngle?.buffer,
			s.mimsOrientationYAngle?.buffer,
			s.mimsOrientationZAngle?.buffer
		].filter((e) => e instanceof ArrayBuffer));
	},
	async computeMimsUnitDataframe(e, t, n, r, a = {}) {
		const o = await se();
		if (!("computeMimsUnitDataframe" in o) || "function" != typeof o.computeMimsUnitDataframe) throw new Error("computeMimsUnitDataframe: current actours WASM bundle does not export MIMS_UNIT processing");
		const s = ie(o.computeMimsUnitDataframe(e, t, n, r, a), "computeMimsUnitDataframe");
		return g(s, [
			s.mimsUnit.buffer,
			s.mimsUnitX?.buffer,
			s.mimsUnitY?.buffer,
			s.mimsUnitZ?.buffer,
			s.headerTimeStamp?.buffer,
			s.mimsOrientationTimestamp?.buffer,
			s.mimsOrientationXAngle?.buffer,
			s.mimsOrientationYAngle?.buffer,
			s.mimsOrientationZAngle?.buffer
		].filter((e) => e instanceof ArrayBuffer));
	},
	async classifyActimetricPreschoolWristRf(e, t, n, r) {
		const a = await se(), o = "function" == typeof a.classifyActimetricPreschoolWristRfLagLead ? a.classifyActimetricPreschoolWristRfLagLead : "function" == typeof a.classifyActimetricPreschoolWristRf ? a.classifyActimetricPreschoolWristRf : "function" == typeof a.actimetricPreschoolWristRfClasses ? a.actimetricPreschoolWristRfClasses : "function" == typeof a.predictActimetricPreschoolWristRfClasses ? a.predictActimetricPreschoolWristRfClasses : null;
		if (!o) throw new Error("classifyActimetricPreschoolWristRf: current actours WASM bundle does not export actimetric preschool wrist RF inference");
		const s = function(e, t = "classifyActimetricPreschoolWristRf") {
			const n = ue(e);
			if (n) return {
				classes: n,
				epochSeconds: 15
			};
			const r = "object" == typeof e && null !== e ? e : null, a = r ? ue(r.classes) ?? ue(r.activityClasses) ?? ue(r.predictions) ?? ue(r.activity) : null;
			if (!a) throw new Error(`${t}: unexpected WASM return shape — expected Uint8Array or { classes }`);
			const o = "number" == typeof r?.epochSeconds && Number.isFinite(r.epochSeconds) ? r.epochSeconds : "number" == typeof r?.epoch_seconds && Number.isFinite(r.epoch_seconds) ? r.epoch_seconds : 15, s = "string" == typeof r?.classifier ? r.classifier : void 0, i = "string" == typeof r?.model ? r.model : void 0;
			return {
				classes: a,
				epochSeconds: o,
				...s ? { classifier: s } : {},
				...i ? { model: i } : {}
			};
		}(o(e, t, n, r), "classifyActimetricPreschoolWristRf");
		return g(s, [s.classes.buffer]);
	},
	async lstmSpectralFeatures30s(e, t, n, r) {
		const a = await se(), o = a.lstmSpectralFeatures30s ?? a.spectralFeatures30s;
		if ("function" != typeof o) throw new Error("LSTM spectral feature extractor is not available in this WASM bundle");
		const s = o(e, t, n, r), i = "object" == typeof s && null !== s ? s : null, c = function(e) {
			if (e instanceof Float32Array) return new Float32Array(e);
			if (ArrayBuffer.isView(e)) {
				const t = e;
				if ("number" == typeof t.length) return new Float32Array(Array.from(t, Number));
			}
			return Array.isArray(e) ? new Float32Array(e) : null;
		}(i?.features ?? s), u = "number" == typeof i?.bins ? i.bins : 30, l = "number" == typeof i?.channels ? i.channels : 4, f = "number" == typeof i?.epochs ? i.epochs : c ? Math.floor(c.length / (u * l)) : 0;
		if (!c || f * u * l !== c.length) throw new Error(`lstmSpectralFeatures30s: unexpected WASM return shape — got ${JSON.stringify(s)}`);
		return g({
			features: c,
			epochs: f,
			bins: u,
			channels: l
		}, [c.buffer]);
	},
	async scoreConsensus(e, t) {
		const n = await se();
		if ("function" != typeof n.scoreConsensusTyped) throw new Error("scoreConsensus is not present in this WASM bundle.");
		const r = new Uint32Array(t.length + 1);
		for (const [i, c] of t.entries()) r[i + 1] = r[i] + c.length;
		const a = 1 === t.length ? t[0] : new Uint8Array(r[t.length]);
		if (1 !== t.length) for (const [i, c] of t.entries()) a.set(c, r[i]);
		const o = n.scoreConsensusTyped(JSON.stringify({ strategy: e }), a, r), s = null != o && "object" == typeof o ? o.consensus : void 0;
		if (!(s instanceof Uint8Array)) throw new Error(`scoreConsensus: unexpected WASM return shape — got ${JSON.stringify(o)}`);
		return g(s, [s.buffer]);
	},
	async computeSleepMetrics(e, t, n) {
		const r = (await se()).computeSleepMetrics(e, t, n);
		if (null == r || "object" != typeof r || "number" != typeof r.totalSleepTimeMinutes || "number" != typeof r.sleepEfficiency) throw new Error(`computeSleepMetrics: unexpected WASM return shape ${JSON.stringify(r)}`);
		return r;
	},
	computeFileDifficulty: async (e) => function(e, t) {
		const n = e.computeNightDifficultyTyped;
		return "function" != typeof n ? (console.warn("[wasm-worker] computeNightDifficulty is not present in this WASM bundle — night difficulty degrades to empty. Rebuild the actours WASM crate to enable it."), { byDate: {} }) : function(e) {
			const t = {}, n = /* @__PURE__ */ new Set(), r = fe(e)?.results;
			if (!Array.isArray(r)) return { byDate: t };
			for (const a of r) {
				const e = J(a);
				if (!e) return { byDate: {} };
				const r = e.canonicalResult.analysis_date;
				if (n.has(r)) return { byDate: {} };
				n.add(r), Object.defineProperty(t, r, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				});
			}
			return { byDate: t };
		}(n(...t));
	}(await se(), e),
	computeFileSignals: async (e) => function(e, t) {
		const n = e.computeNightSignalsTyped;
		if ("function" != typeof n) return console.warn("[wasm-worker] computeNightSignals is not present in this WASM bundle — night-signal detail degrades to empty."), { byDate: {} };
		const [r, ...a] = t;
		return function(e) {
			const t = {}, n = /* @__PURE__ */ new Set(), r = fe(e)?.signals;
			if (!Array.isArray(r)) return { byDate: t };
			for (const a of r) {
				const e = fe(a), r = e?.analysis_date, o = e?.epoch_length_seconds;
				if (!e || "string" != typeof r || 0 === r.length || !Number.isInteger(o) || o <= 0) return { byDate: {} };
				if (n.has(r)) return { byDate: {} };
				n.add(r), Object.defineProperty(t, r, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				});
			}
			return { byDate: t };
		}(n(JSON.stringify(function(e) {
			const t = H(e.config), n = H(t?.signals) ?? t;
			return {
				...n ? { config: n } : {},
				days: e.days
			};
		}(JSON.parse(r))), ...a));
	}(await se(), e),
	computeCircadian: async (e) => function(e, t) {
		const n = e.computeCircadianTyped;
		if ("function" != typeof n) throw new Error("computeCircadian is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = n(...t);
		return r && "object" == typeof r && Array.isArray(r.day_summaries) ? r : pe;
	}(await se(), e),
	aggregateEpochSeries: async (e) => function(e, t) {
		const n = e.aggregateEpochSeries;
		if ("function" != typeof n) throw new Error("aggregateEpochSeries is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = n(t);
		if (null == r || "object" != typeof r) throw new Error("aggregateEpochSeries returned an invalid result.");
		const a = r;
		if (!a.series || !Array.isArray(a.series.timestamps_ms)) throw new Error("aggregateEpochSeries returned an invalid result.");
		return r;
	}(await se(), e),
	async runScoredVariantBatch(e) {
		const t = await se(), n = {}, r = /* @__PURE__ */ new Set();
		let a = 0, o = !1;
		const s = Object.keys(e.classifierOutputs).filter((t) => e.classifierOutputs[t]?.length === e.timestamps.length).sort(), i = new Set(s), c = Object.keys(e.nonwearMasks).filter((t) => null != e.nonwearMasks[t]?.mask).sort(), u = e.variants.filter((t) => {
			if (!i.has(t.classifierConfigId)) return a += 1, !1;
			const n = "none" === t.nonwear ? void 0 : e.nonwearMasks[t.nonwear];
			if ("none" !== t.nonwear && !n?.mask) {
				const e = n?.reason ? ` (${n.reason})` : "";
				r.add(`Nonwear detector "${t.nonwear}" is unavailable for this data — scored without a nonwear mask.${e}`);
			}
			return !0;
		}), l = e.timestamps.length;
		if (0 === l) {
			for (const e of u) n[e.id] = /* @__PURE__ */ new ArrayBuffer(0);
			u.length && r.add("No activity data");
		} else if (u.length) if ("function" != typeof t.placeMarkersBatch) o = !0;
		else {
			const a = new Uint8Array(s.length * l);
			for (const [t, n] of s.entries()) {
				const r = e.classifierOutputs[n];
				if (r.length !== l) throw new Error(`classifier_scores length ${String(r.length)} does not match 1 rows × ${String(l)} epochs`);
				a.set(r, t * l);
			}
			const o = new Uint8Array(c.length * l);
			for (const [t, n] of c.entries()) {
				const r = e.nonwearMasks[n].mask;
				if (r.length !== l) throw new Error(`nonwear_masks length ${String(r.length)} does not match 1 rows × ${String(l)} epochs`);
				o.set(r, t * l);
			}
			const i = function(e) {
				let t;
				if ("variant" in e) {
					const { variant: a, timestamps: o, activityCounts: s, sleepScores: i, analysisDate: c, epochLengthSeconds: u, hdczaWindow: l, diary: f, onsetMinConsecutiveSleep: p, offsetMinConsecutiveMinutes: d, choiNonwear: m } = e, y = a.config.rescoring === A && (r = A) === A ? { preset: r } : void 0;
					t = {
						timestamps: o,
						activityCounts: s,
						sleepScores: i,
						...void 0 !== m ? { choiNonwear: m } : {},
						ruleset: a.config.ruleset,
						...void 0 !== y ? { scorerPostprocessing: y } : {},
						analysisDate: c,
						epochLengthSeconds: u,
						hdczaWindow: l ? {
							startTimestamp: l[0],
							endTimestamp: l[1]
						} : null,
						diaryBedTime: f?.diaryInBedTime ?? null,
						diaryOnsetTime: f?.onsetTime ?? null,
						diaryWakeTime: f?.diaryWakeTime ?? null,
						diaryNaps: I(f?.naps),
						diaryNonwear: I(f?.nonwear),
						...void 0 !== p ? { onsetMinConsecutiveSleep: p } : {},
						...void 0 !== d ? { offsetMinConsecutiveMinutes: d } : {},
						...(n = a.config.periodSource, n === W ? { periodGuider: W } : n === P ? { periodGuider: P } : { sleepPeriodDetection: {
							sourceA: n,
							sourceB: O,
							fusionPolicy: T,
							applyNonwearGate: !1
						} })
					};
				} else t = e;
				var n, r;
				const a = {
					config: D(t),
					days: [j(t), ...(t.contextDays ?? []).filter((e) => e.analysisDate !== (t.analysisDate ?? "")).map(B)]
				}, o = [
					"timestamps",
					"activity_counts",
					"sleep_scores",
					"choi_nonwear",
					"anglez",
					"light",
					"temperature",
					"heart_rate",
					"detach_nonwear"
				], s = o.flatMap((e) => {
					const t = a.days.map((t) => t[e] ?? []), n = new Uint32Array(t.length + 1);
					for (const [a, s] of t.entries()) n[a + 1] = n[a] + s.length;
					const r = "sleep_scores" === e || "choi_nonwear" === e || "detach_nonwear" === e ? Uint8Array : Float64Array, o = 1 === t.length && t[0] instanceof r ? t[0] : new r(n[t.length]);
					if (o !== t[0]) for (const [a, s] of t.entries()) o.set(s, n[a]);
					return [o, n];
				}), i = {
					config: a.config,
					days: a.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !o.includes(e))))
				};
				return [JSON.stringify(i), ...s];
			}({
				...e,
				timestamps: [],
				activityCounts: [],
				sleepScores: [],
				variant: { config: {
					...u[0],
					periodSource: "l5",
					rescoring: "none"
				} }
			}), f = JSON.parse(i[0]), p = f.days[0], d = t.placeMarkersBatch(JSON.stringify({
				...f.config,
				...p,
				classifier_ids: s,
				nonwear_ids: c
			}), Float64Array.from(e.timestamps), Float64Array.from(e.activityCounts), a, o, JSON.stringify(u.map((e) => ({
				id: e.id,
				classifier_index: s.indexOf(e.classifierConfigId),
				nonwear_index: "none" === e.nonwear ? -1 : c.indexOf(e.nonwear),
				ruleset: e.ruleset,
				period_source: e.periodSource,
				rescoring: e.rescoring
			}))));
			for (const e of d.notes) r.add(e);
			for (const [e, t] of u.entries()) n[t.id] = d.masks.slice(e * l, (e + 1) * l).buffer;
		}
		return g({
			masks: n,
			notes: [...r],
			missingClassifier: a,
			placementUnavailable: o
		}, Object.values(n));
	},
	async placeMarkers(e) {
		const t = await se();
		return "function" != typeof t.placeMarkersTyped ? (console.warn("[wasm-worker] placeMarkers is not present in this WASM bundle — local marker placement degrades to null."), null) : t.placeMarkersTyped(...e);
	},
	async placeNonwearMarkers(e) {
		const t = await se();
		return "function" != typeof t.placeNonwearMarkersTyped ? (console.warn("[wasm-worker] placeNonwearMarkers is not present in this WASM bundle — local marker placement degrades to null."), null) : t.placeNonwearMarkersTyped(...e);
	},
	epochRawData: async (e, t, n, r, a) => le((await se()).epochRawData(e, t, n, r, a), "epochRawData"),
	async epochWithBandpass(e, t, n) {
		const r = (await se()).epochWithBandpass(e, t, n), a = "object" == typeof r && null !== r ? r : null, o = ce(a?.timestamps), s = ce(a?.counts);
		if (!o || !s) throw new Error("epochWithBandpass: unexpected WASM return shape");
		return g({
			timestamps: o,
			counts: s
		}, [o.buffer, s.buffer]);
	},
	async computeEnmo5s(e, t, n, r) {
		const a = await se();
		return new Float64Array(a.computeEnmo5s(e, t, n, r));
	},
	async computeAnglez5s(e, t, n, r) {
		const a = await se();
		return new Float64Array(a.computeAnglez5s(e, t, n, r));
	},
	async processRawXyz(e, t, n, r, a, o) {
		const s = (await se()).processRawXyz(e, t, n, r, a, o ?? void 0), i = "object" == typeof s && null !== s ? s : null, c = i ? ce(i.enmo5s) : null, u = i ? ce(i.anglez5s) : null, l = i ? ce(i.countsX) : null, f = i ? ce(i.countsY) : null, p = i ? ce(i.countsZ) : null, d = i ? ce(i.countsVm) : null;
		if (!(c && u && l && f && p && d)) throw new Error(`processRawXyz: unexpected WASM return shape — got ${JSON.stringify(s)}`);
		const m = (e) => ce(e) ?? /* @__PURE__ */ new Float64Array(0), y = i ? m(i.anglex5s) : /* @__PURE__ */ new Float64Array(0), h = i ? m(i.angley5s) : /* @__PURE__ */ new Float64Array(0), w = i ? m(i.mad5s) : /* @__PURE__ */ new Float64Array(0), b = i ? m(i.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
		return g({
			enmo5s: c,
			anglez5s: u,
			anglex5s: y,
			angley5s: h,
			mad5s: w,
			enmoa5s: b,
			calibration: K(i?.calibration),
			counts: {
				x: l,
				y: f,
				z: p,
				vm: d
			}
		}, [
			c.buffer,
			u.buffer,
			y.buffer,
			h.buffer,
			w.buffer,
			b.buffer,
			l.buffer,
			f.buffer,
			p.buffer,
			d.buffer
		]);
	},
	async processRawXyzImputed(e, t, n, r, a, o, s = 60) {
		const i = await se(), c = "function" == typeof i.processRawXyzImputedWithEpoch ? i.processRawXyzImputedWithEpoch(e, t, n, r, a, o ?? void 0, s) : i.processRawXyzImputed(e, t, n, r, a, o ?? void 0), u = "object" == typeof c && null !== c ? c : null, l = u ? ce(u.enmo5s) : null, f = u ? ce(u.anglez5s) : null, p = u ? ce(u.countsX) : null, d = u ? ce(u.countsY) : null, m = u ? ce(u.countsZ) : null, y = u ? ce(u.countsVm) : null;
		if (!(l && f && p && d && m && y)) throw new Error(`processRawXyzImputed: unexpected WASM return shape — got ${JSON.stringify(c)}`);
		const h = (e) => ce(e) ?? /* @__PURE__ */ new Float64Array(0), w = u ? h(u.anglex5s) : /* @__PURE__ */ new Float64Array(0), b = u ? h(u.angley5s) : /* @__PURE__ */ new Float64Array(0), _ = u ? h(u.mad5s) : /* @__PURE__ */ new Float64Array(0), A = u ? h(u.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
		return g({
			enmo5s: l,
			anglez5s: f,
			anglex5s: w,
			angley5s: b,
			mad5s: _,
			enmoa5s: A,
			counts: {
				x: p,
				y: d,
				z: m,
				vm: y
			},
			firstTsMs: "number" == typeof u?.firstTsMs ? u.firstTsMs : 0,
			numGaps: "number" == typeof u?.numGaps ? u.numGaps : 0,
			samplesAdded: "number" == typeof u?.samplesAdded ? u.samplesAdded : 0,
			calibration: K(u?.calibration)
		}, [
			l.buffer,
			f.buffer,
			w.buffer,
			b.buffer,
			_.buffer,
			A.buffer,
			p.buffer,
			d.buffer,
			m.buffer,
			y.buffer
		]);
	},
	async detectDetachFromAccelerationG(e, t) {
		const n = await se(), r = new Uint8Array(n.detectDetachFromAccelerationG(e, t));
		return g(r, [r.buffer]);
	},
	detectHdcza: async (e, t = "wrist", n, r) => function(e) {
		if (!e) return null;
		const t = e;
		if ("object" != typeof e || "number" != typeof t.start_epoch || "number" != typeof t.end_epoch) throw new Error(`detectHdcza: unexpected WASM return shape — expected {start_epoch, end_epoch}, got ${JSON.stringify(e)}`);
		return {
			startEpoch: t.start_epoch,
			endEpoch: t.end_epoch
		};
	}((await se()).detectHdcza(e, t, n ?? null, r ?? null)),
	runFullPipelineV1: async (e, t, n, r, a) => function(e, t, n, r, a, o) {
		const s = e.runFullPipelineV1({
			contractVersion: ee,
			semanticProfile: te,
			signal: {
				x: t,
				y: n,
				z: r,
				sampleRateHz: a,
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
		return s ? {
			result: (i = s.result, {
				metadata: {
					sampleRateHz: i.metadata.sampleRateHz,
					startTsEpochSec: i.metadata.startTsEpochMs / 1e3,
					ws3: i.metadata.ws3,
					nEpochs: i.metadata.nEpochs,
					nMidnights: i.metadata.nMidnights,
					nNights: i.metadata.nNights,
					nonwearFraction: ne(i.metadata.nonwearFraction)
				},
				days: i.days.map((e) => ({
					calendarDate: e.calendarDate,
					dayNumber: e.dayNumber,
					validHours: ne(e.validHours),
					nonwearHours: ne(e.nonwearHours),
					totalEpochs: e.totalEpochs,
					sedentaryMinutes: ne(e.sedentaryMinutes),
					lightMinutes: ne(e.lightMinutes),
					moderateMinutes: ne(e.moderateMinutes),
					vigorousMinutes: ne(e.vigorousMinutes),
					mvpaMinutes: ne(e.mvpaMinutes),
					l5ValueMg: ne(e.l5ValueMg),
					l5OnsetEpoch: e.l5OnsetEpoch,
					m5ValueMg: ne(e.m5ValueMg),
					m5OnsetEpoch: e.m5OnsetEpoch,
					igGradient: ne(e.igGradient),
					igIntercept: ne(e.igIntercept),
					igRsquared: ne(e.igRsquared),
					fragTpIn2ac: ne(e.fragTpIn2ac),
					fragTpAc2in: ne(e.fragTpAc2in),
					nFragments: e.nFragments,
					nightNumber: e.nightNumber,
					tstMinutes: re(e.tstMinutes),
					wasoMinutes: re(e.wasoMinutes),
					sleepEfficiency: re(e.sleepEfficiency),
					numberOfAwakenings: e.numberOfAwakenings,
					sptDurationHours: re(e.sptDurationHours),
					cleaningCode: e.cleaningCode
				}))
			}),
			execution: s.execution,
			provenance: s.provenance
		} : null;
		var i;
	}(await se(), e, t, n, r, a),
	getComputeIdentity: async () => function(e, t) {
		if (!/^[0-9a-f]{64}$/.test(t)) throw new Error("Actours WASM artifact identity is unavailable or invalid; refusing to attest this runtime");
		const n = "object" == typeof e && null !== e ? e : {}, r = (e, t) => {
			const n = e[t];
			if ("string" != typeof n || 0 === n.length) throw new Error(`Actours capability ${t} must be a non-empty string`);
			return n;
		}, a = r(n, "contractVersion");
		if (a !== ee) throw new Error(`Unsupported Actours compute contract ${a}; expected ${ee}`);
		const o = r(n, "crateVersion"), s = n.sourceRevision;
		if (null !== s && ("string" != typeof s || 0 === s.length)) throw new Error("Actours capability sourceRevision must be null or a non-empty string");
		const i = n.compiledFeatures;
		if (!Array.isArray(i) || !i.every((e) => "string" == typeof e && e.length > 0)) throw new Error("Actours capability compiledFeatures must be an array of non-empty strings");
		const c = r("object" == typeof n.execution && null !== n.execution ? n.execution : {}, "target");
		if ("wasm" !== c) throw new Error(`Unsupported Actours execution target ${c}; expected wasm`);
		if (!(Array.isArray(n.semanticProfiles) ? n.semanticProfiles : []).includes(te)) throw new Error(`Actours capability does not provide required semantic profile ${te}`);
		const u = r(n, "profileProofStatus");
		if ("proof_pending" !== u) throw new Error(`Unsupported Actours profile proof status ${u}; expected proof_pending`);
		const l = r(n, "temporalBasis");
		if ("utc" !== l) throw new Error(`Unsupported Actours temporal basis ${l}; expected utc`);
		return {
			contractVersion: a,
			crateVersion: o,
			sourceRevision: s,
			artifactSha256: t,
			compiledFeatures: i,
			target: c,
			semanticProfile: te,
			profileProofStatus: u,
			temporalBasis: l
		};
	}((await se()).getComputeCapabilitiesV1(), "9ee486e333eff78a7367fa1372a9118c8405ed0a905b59b2eeb011bb06722ce8"),
	runGgirFromEpoch: async (e, t, n, r, a) => (await se()).runGgirFromEpoch({
		anglez: e,
		enmo: t,
		sampleRateHz: n,
		startTsEpochSec: r,
		...a ? { invalid: a } : {}
	}, { ws3: 5 }),
	async readGgirMeta(e) {
		const t = await se();
		if ("function" != typeof t.readGgirMeta) throw new Error("readGgirMeta: current actours WASM bundle does not export GGIR RData import");
		const n = t.readGgirMeta(e), r = "object" == typeof n && null !== n ? n : null, a = r ? ce(r.timestampsMs) : null, o = r ? ce(r.enmo5s) : null, s = r ? ce(r.anglez5s) : null, i = r ? ce(r.anglex5s) : null, c = r ? ce(r.angley5s) : null, u = r ? ue(r.invalidShort) : null, l = r ? ue(r.nonwearShort) : null;
		if (!(a && o && s && u && l)) throw new Error(`readGgirMeta: unexpected WASM return shape — got ${JSON.stringify(n)}`);
		return g({
			timestampsMs: a,
			enmo5s: o,
			anglez5s: s,
			...i ? { anglex5s: i } : {},
			...c ? { angley5s: c } : {},
			invalidShort: u,
			nonwearShort: l,
			epochSeconds: "number" == typeof r?.epochSeconds ? r.epochSeconds : 5,
			longEpochSeconds: "number" == typeof r?.longEpochSeconds ? r.longEpochSeconds : 900,
			nShort: "number" == typeof r?.nShort ? r.nShort : o.length,
			nLong: "number" == typeof r?.nLong ? r.nLong : 0
		}, [
			a.buffer,
			o.buffer,
			s.buffer,
			...i ? [i.buffer] : [],
			...c ? [c.buffer] : [],
			u.buffer,
			l.buffer
		]);
	},
	async scoreGgirSib(e, t, n) {
		const r = (await se()).scoreGgirSib(e, t, n);
		if ("object" != typeof r || null === r || !r.sadeh_ggir || !r.ck_ggir) throw new Error(`scoreGgirSib: unexpected WASM return shape — got ${JSON.stringify(r)}`);
		const a = r, o = new Uint8Array(a.sadeh_ggir), s = new Uint8Array(a.ck_ggir);
		return g({
			sadeh_ggir: o,
			ck_ggir: s
		}, [o.buffer, s.buffer]);
	},
	async scoreGgirHasib(e) {
		const t = (await se()).scoreGgirHasib(e);
		if (!(t instanceof Uint8Array)) throw new Error("scoreGgirHasib: unexpected WASM return shape — expected Uint8Array, got " + typeof t);
		const n = new Uint8Array(t);
		return g(n, [n.buffer]);
	},
	async scoreGgirHasibVariant(e, t, n) {
		const r = function(e, t) {
			if ("object" != typeof e || null === e) throw new Error("scoreGgirHasibVariant: unexpected WASM return shape — got " + typeof e);
			const n = e, r = ue(n.sib);
			if (!r) throw new Error(`scoreGgirHasibVariant: missing sib array — got ${JSON.stringify(e)}`);
			return {
				algo: "string" == typeof n.algo ? n.algo : t,
				sib: r,
				nPostch: "number" == typeof n.nPostch ? n.nPostch : 0,
				nGaps: "number" == typeof n.nGaps ? n.nGaps : 0,
				nWake: "number" == typeof n.nWake ? n.nWake : 0,
				nSleep: "number" == typeof n.nSleep ? n.nSleep : 0,
				sleepFraction: "number" == typeof n.sleepFraction ? n.sleepFraction : 0,
				columnName: "string" == typeof n.columnName ? n.columnName : ""
			};
		}((await se()).scoreGgirHasibVariant({
			data: e,
			algo: t,
			...n ? { config: n } : {}
		}), t);
		return g(r, [r.sib.buffer]);
	},
	async detectGgirHasptVariant(e) {
		const t = function(e, t) {
			if ("object" != typeof e || null === e) throw new Error("detectGgirHasptVariant: unexpected WASM return shape — got " + typeof e);
			const n = e, r = ue(n.nomov), a = ce(n.rollingMedian);
			if (!r || !a) throw new Error(`detectGgirHasptVariant: missing output arrays — got ${JSON.stringify(e)}`);
			return {
				algo: "string" == typeof n.algo ? n.algo : t,
				guider: "string" == typeof n.guider ? n.guider : "",
				startEpoch: "number" == typeof n.startEpoch ? n.startEpoch : null,
				endEpoch: "number" == typeof n.endEpoch ? n.endEpoch : null,
				threshold: "number" == typeof n.threshold ? n.threshold : NaN,
				nomov: r,
				rollingMedian: a
			};
		}((await se()).detectGgirHasptVariant(e), e.algo);
		return g(t, [t.nomov.buffer, t.rollingMedian.buffer]);
	},
	async scoreAllDays(e) {
		const t = (await se()).scoreAllDays(e);
		if (!Array.isArray(t)) throw new Error("scoreAllDays: expected array from WASM, got " + typeof t);
		const n = (e) => e instanceof Uint8Array || Array.isArray(e), r = t[0];
		if (t.length > 0 && ("object" != typeof r || null === r || !n(r.sadeh_actilife) || !n(r.nonwear))) throw new Error(`scoreAllDays: unexpected element shape — got ${JSON.stringify(r)}`);
		const a = t.map((e) => ({
			sadeh_actilife: new Uint8Array(e.sadeh_actilife),
			sadeh_original: new Uint8Array(e.sadeh_original),
			ck_actilife: new Uint8Array(e.ck_actilife),
			ck_original: new Uint8Array(e.ck_original),
			nonwear: new Uint8Array(e.nonwear)
		}));
		return g(a, a.flatMap((e) => [
			e.sadeh_actilife.buffer,
			e.sadeh_original.buffer,
			e.ck_actilife.buffer,
			e.ck_original.buffer,
			e.nonwear.buffer
		]));
	}
})));
