/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const e = Symbol("Comlink.proxy"), n = Symbol("Comlink.endpoint"), t = Symbol("Comlink.releaseProxy"), r = Symbol("Comlink.finalizer"), a = Symbol("Comlink.thrown"), i = (e) => "object" == typeof e && null !== e || "function" == typeof e, o = /* @__PURE__ */ new Map([["proxy", {
	canHandle: (n) => i(n) && n[e],
	serialize(e) {
		const { port1: n, port2: t } = new MessageChannel();
		return s(e, n), [t, [t]];
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
		}), f(e, n, [], void 0);
	}(e))
}], ["throw", {
	canHandle: (e) => i(e) && a in e,
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
function s(n, t = globalThis, i = ["*"]) {
	t.addEventListener("message", function o(l) {
		if (!l || !l.data) return;
		if (!function(e, n) {
			for (const t of e) {
				if (n === t || "*" === t) return !0;
				if (t instanceof RegExp && t.test(n)) return !0;
			}
			return !1;
		}(i, l.origin)) return void console.warn(`Invalid origin '${l.origin}' for comlink proxy`);
		const { id: u, type: d, path: p } = Object.assign({ path: [] }, l.data), f = (l.data.argumentList || []).map(_);
		let m;
		try {
			const t = p.slice(0, -1).reduce((e, n) => e[n], n), r = p.reduce((e, n) => e[n], n);
			switch (d) {
				case "GET":
					m = r;
					break;
				case "SET":
					t[p.slice(-1)[0]] = _(l.data.value), m = !0;
					break;
				case "APPLY":
					m = r.apply(t, f);
					break;
				case "CONSTRUCT":
					m = function(n) {
						return Object.assign(n, { [e]: !0 });
					}(new r(...f));
					break;
				case "ENDPOINT":
					{
						const { port1: e, port2: t } = new MessageChannel();
						s(n, t), m = g(e, [e]);
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
			const [a, i] = h(e);
			t.postMessage(Object.assign(Object.assign({}, a), { id: u }), i), "RELEASE" === d && (t.removeEventListener("message", o), c(t), r in n && "function" == typeof n[r] && n[r]());
		}).catch((e) => {
			const [n, r] = h({
				value: /* @__PURE__ */ new TypeError("Unserializable return value"),
				[a]: 0
			});
			t.postMessage(Object.assign(Object.assign({}, n), { id: u }), r);
		});
	}), t.start && t.start();
}
function c(e) {
	(function(e) {
		return "MessagePort" === e.constructor.name;
	})(e) && e.close();
}
function l(e) {
	if (e) throw new Error("Proxy has been released and is not useable");
}
function u(e) {
	return w(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
		c(e);
	});
}
const d = /* @__PURE__ */ new WeakMap(), p = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const n = (d.get(e) || 0) - 1;
	d.set(e, n), 0 === n && u(e);
});
function f(e, r, a = [], i = function() {}) {
	let o = !1;
	const s = new Proxy(i, {
		get(n, i) {
			if (l(o), i === t) return () => {
				(function(e) {
					p && p.unregister(e);
				})(s), u(e), r.clear(), o = !0;
			};
			if ("then" === i) {
				if (0 === a.length) return { then: () => s };
				const n = w(e, r, {
					type: "GET",
					path: a.map((e) => e.toString())
				}).then(_);
				return n.then.bind(n);
			}
			return f(e, r, [...a, i]);
		},
		set(n, t, i) {
			l(o);
			const [s, c] = h(i);
			return w(e, r, {
				type: "SET",
				path: [...a, t].map((e) => e.toString()),
				value: s
			}, c).then(_);
		},
		apply(t, i, s) {
			l(o);
			const c = a[a.length - 1];
			if (c === n) return w(e, r, { type: "ENDPOINT" }).then(_);
			if ("bind" === c) return f(e, r, a.slice(0, -1));
			const [u, d] = m(s);
			return w(e, r, {
				type: "APPLY",
				path: a.map((e) => e.toString()),
				argumentList: u
			}, d).then(_);
		},
		construct(n, t) {
			l(o);
			const [i, s] = m(t);
			return w(e, r, {
				type: "CONSTRUCT",
				path: a.map((e) => e.toString()),
				argumentList: i
			}, s).then(_);
		}
	});
	return function(e, n) {
		const t = (d.get(n) || 0) + 1;
		d.set(n, t), p && p.register(e, n, e);
	}(s, e), s;
}
function m(e) {
	const n = e.map(h);
	return [n.map((e) => e[0]), (t = n.map((e) => e[1]), Array.prototype.concat.apply([], t))];
	var t;
}
const y = /* @__PURE__ */ new WeakMap();
function g(e, n) {
	return y.set(e, n), e;
}
function h(e) {
	for (const [n, t] of o) if (t.canHandle(e)) {
		const [r, a] = t.serialize(e);
		return [{
			type: "HANDLER",
			name: n,
			value: r
		}, a];
	}
	return [{
		type: "RAW",
		value: e
	}, y.get(e) || []];
}
function _(e) {
	switch (e.type) {
		case "HANDLER": return o.get(e.name).deserialize(e.value);
		case "RAW": return e.value;
	}
}
function w(e, n, t, r) {
	return new Promise((a) => {
		const i = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		n.set(i, a), e.start && e.start(), e.postMessage(Object.assign({ id: i }, t), r);
	});
}
const b = "smart", v = "webster", S = {
	choi_2011: "choi_2011",
	flat_activity: "flat_activity",
	gt3x_capsense: "gt3x_capsense",
	actiware_off_wrist: "actiware_off_wrist",
	detach_nonwear: "detach_nonwear",
	van_hees_2013: "van_hees_2013",
	van_hees_2023: "van_hees_2023",
	ggir_part2_invalid: "ggir_part2_invalid",
	choi_2012: "choi_2012",
	troiano_2008: "troiano_2008",
	notworn_hasib: "notworn_hasib",
	ahmadi_2020: "ahmadi_2020",
	skovgaard_2023: "skovgaard_2023"
}, A = {
	diary: "diary",
	hdcza: "hdcza",
	l5: "l5",
	selected_scorer_first_last: "selected_scorer_first_last",
	selected_scorer_longest_bout: "selected_scorer_longest_bout",
	quiet_bout: "quiet_bout",
	event_marker: "event_marker",
	actiware_rest_interval: "actiware_rest_interval",
	none: "none"
}, M = A.diary, E = A.hdcza, x = A.l5, k = A.selected_scorer_first_last, C = A.selected_scorer_longest_bout, I = A.quiet_bout, T = A.event_marker, N = A.actiware_rest_interval, z = A.none, F = "use_source_a", R = {
	sourceA: "hdcza",
	sourceB: "selected_scorer_first_last",
	fusionPolicy: "source_b_bounded_by_source_a",
	mergeGapMinutes: 45,
	paddingMinutes: 0,
	minOverlapJaccard: .5,
	applyNonwearGate: !1
}, O = {
	[M]: "Diary",
	[E]: "HDCZA SPT",
	[x]: "L5 least active 5h",
	[k]: "Selected scorer first-last sleep",
	[C]: "Selected scorer longest sleep bout",
	[I]: "Quiet-bout least-active window",
	[T]: "Event markers (button presses)",
	[N]: "Actiware rest interval",
	[z]: "None"
};
function D(e) {
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
Object.values(A).map((e) => ({
	value: e,
	label: O[e]
}));
const W = [
	{
		id: "sadeh_1994_original",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "sadeh_1994::original",
		family: "sadeh_1994",
		implementation: "original",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "sadeh_1994_actilife",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "sadeh_1994::actilife",
		family: "sadeh_1994",
		implementation: "actilife",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "cole_kripke_1992_original",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "cole_kripke_1992::original",
		family: "cole_kripke_1992",
		implementation: "original",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "cole_kripke_1992_actilife",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "cole_kripke_1992::actilife",
		family: "cole_kripke_1992",
		implementation: "actilife",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "sadeh_1994_ggir",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "sadeh_1994::ggir",
		family: "sadeh_1994",
		implementation: "ggir",
		defaultCountMetric: "neishabouri",
		compatibleCountMetrics: ["neishabouri", "zero_crossing"],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "cole_kripke_1992_ggir",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "cole_kripke_1992::ggir",
		family: "cole_kripke_1992",
		implementation: "ggir",
		defaultCountMetric: "neishabouri",
		compatibleCountMetrics: ["neishabouri", "zero_crossing"],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "van_hees_2015",
		kind: "sleep_wake",
		requiredSignal: "angle_z",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "angle_spt",
		methodImplementationId: "van_hees_2015::ggir",
		family: "van_hees_2015",
		implementation: "ggir",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_5s"
	},
	{
		id: "van_hees_hasib_2015",
		kind: "sleep_wake",
		requiredSignal: "angle_z",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "angle_spt",
		methodImplementationId: "van_hees_hasib_2015::hasib",
		family: "van_hees_hasib_2015",
		implementation: "hasib",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_5s"
	},
	{
		id: "natural_language",
		kind: "sleep_wake",
		requiredSignal: "none",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "natural_language",
		methodImplementationId: "natural_language::reference",
		family: "natural_language",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "consensus_majority_vote",
		kind: "sleep_wake",
		requiredSignal: "epoch_scores",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "consensus_majority_vote::reference",
		family: "consensus_majority_vote",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "lstm_sleep_wake",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "neural_model",
		methodImplementationId: "lstm_sleep_wake::reference",
		family: "lstm_sleep_wake",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_5s"
	},
	{
		id: "manual",
		kind: "sleep_wake",
		requiredSignal: "none",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "manual",
		methodImplementationId: "manual::reference",
		family: "manual",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "oakley_1997",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [
			15,
			30,
			60
		],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "oakley_1997::hasib",
		family: "oakley_1997",
		implementation: "hasib",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "actiware_sleep_wake",
		kind: "sleep_wake",
		requiredSignal: "none",
		requiresTemperature: !1,
		nativeEpochSeconds: 30,
		supportedEpochSeconds: [30],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "vendor_analysis",
		methodImplementationId: "actiware_sleep_wake::actiware",
		family: "actiware_sleep_wake",
		implementation: "actiware",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "galland_2012",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "galland_2012::hasib",
		family: "galland_2012",
		implementation: "hasib",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "ucsd_scripps_2010",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 30,
		supportedEpochSeconds: [30],
		bindingEntry: "score_epochs",
		conformance: "conformant",
		execution: "count_scorer",
		methodImplementationId: "ucsd_scripps_2010::reference",
		family: "ucsd_scripps_2010",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "sazonov_2004",
		kind: "sleep_wake",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 30,
		supportedEpochSeconds: [30],
		bindingEntry: "score_epochs",
		conformance: "provisional",
		execution: "count_scorer",
		methodImplementationId: "sazonov_2004::reference",
		family: "sazonov_2004",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: "epoch_60s"
	},
	{
		id: "syed_cnn",
		kind: "sleep_wake",
		requiredSignal: "raw_accel",
		requiresTemperature: !1,
		nativeEpochSeconds: 30,
		supportedEpochSeconds: [30],
		bindingEntry: "score_epochs",
		conformance: "needs_model",
		execution: "neural_model",
		methodImplementationId: "syed_cnn::reference",
		family: "syed_cnn",
		implementation: "reference",
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: "syed_cnn trained sleep/wake CNN checkpoint (weights + preprocessing spec)",
		displayGrid: "epoch_60s"
	},
	{
		id: "choi_2011",
		kind: "nonwear",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "count_detector",
		methodImplementationId: "choi_2011",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "flat_activity",
		kind: "nonwear",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "count_detector",
		methodImplementationId: "flat_activity",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "gt3x_capsense",
		kind: "nonwear",
		requiredSignal: "raw_accel",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "raw_detector",
		methodImplementationId: "gt3x_capsense",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "actiware_off_wrist",
		kind: "nonwear",
		requiredSignal: "none",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "device_statement",
		methodImplementationId: "actiware_off_wrist",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "detach_nonwear",
		kind: "nonwear",
		requiredSignal: "raw_accel",
		requiresTemperature: !0,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "count_detector",
		methodImplementationId: "detach_nonwear",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "van_hees_2013",
		kind: "nonwear",
		requiredSignal: "raw_accel",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "raw_detector",
		methodImplementationId: "van_hees_2013",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "van_hees_2023",
		kind: "nonwear",
		requiredSignal: "raw_accel",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "raw_detector",
		methodImplementationId: "van_hees_2023",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "ggir_part2_invalid",
		kind: "nonwear",
		requiredSignal: "none",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "ggir_part2",
		methodImplementationId: "ggir_part2_invalid",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "choi_2012",
		kind: "nonwear",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "count_detector",
		methodImplementationId: "choi_2012",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "troiano_2008",
		kind: "nonwear",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 60,
		supportedEpochSeconds: [60],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "count_detector",
		methodImplementationId: "troiano_2008",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "notworn_hasib",
		kind: "nonwear",
		requiredSignal: "counts_axis_y",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "count_detector",
		methodImplementationId: "notworn_hasib",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "ahmadi_2020",
		kind: "nonwear",
		requiredSignal: "raw_accel",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "detect_nonwear",
		conformance: "provisional",
		execution: "raw_detector",
		methodImplementationId: "ahmadi_2020",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null
	},
	{
		id: "skovgaard_2023",
		kind: "nonwear",
		requiredSignal: "raw_accel",
		requiresTemperature: !0,
		nativeEpochSeconds: 30,
		supportedEpochSeconds: [30],
		bindingEntry: "detect_nonwear",
		conformance: "needs_model",
		execution: "raw_detector",
		methodImplementationId: "skovgaard_2023",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: "skovgaard_2023 trained temperature-nonwear model (weights + feature spec)",
		displayGrid: null
	}
], G = [
	{
		id: "epoch_60s",
		epochSeconds: 60,
		timestampsKey: "timestamps"
	},
	{
		id: "epoch_5s",
		epochSeconds: 5,
		timestampsKey: "ggirTimestamps"
	},
	{
		id: "epoch_30s",
		epochSeconds: 30,
		timestampsKey: "timestamps30s"
	}
], U = ([
	{
		id: "consecutive_onset3s_offset5s",
		onsetMinConsecutiveSleep: 3,
		offsetMinConsecutiveMinutes: 5,
		offsetScanState: "sleep",
		label: "3-min Onset / 5-min Offset (Default)"
	},
	{
		id: "consecutive_onset5s_offset10s",
		onsetMinConsecutiveSleep: 5,
		offsetMinConsecutiveMinutes: 10,
		offsetScanState: "sleep",
		label: "5-min Onset / 10-min Offset"
	},
	{
		id: "tudor_locke_2014",
		onsetMinConsecutiveSleep: 5,
		offsetMinConsecutiveMinutes: 10,
		offsetScanState: "wake",
		label: "Tudor-Locke (2014)"
	}
].map((e) => e.id), W.map((e) => e.id), [{
	id: "choi_plus_flat",
	components: ["choi_2011", "flat_activity"],
	combine: "union"
}, {
	id: "diary_anchored",
	components: ["choi_2011"],
	combine: "priority"
}].map((e) => e.id), {
	method_family_ids: {
		sadeh_1994: {},
		cole_kripke_1992: {},
		oakley_1997: {},
		galland_2012: {},
		ucsd_scripps_2010: {},
		sazonov_2004: {}
	},
	fixed_output_method_binding_ids: { van_hees_2015: {} },
	count_provenance_implementation_variant_ids: {
		actilife: {},
		original: {}
	},
	consensus_strategy_ids: {
		majority_tie_sleep: {},
		strict_majority: {},
		intersection_sleep: {},
		union_sleep: {}
	},
	count_input_series_keys: {
		neishabouri_x_30s: {
			count_family: "neishabouri",
			axis: "x",
			epoch_seconds: 30
		},
		neishabouri_x_60s: {
			count_family: "neishabouri",
			axis: "x",
			epoch_seconds: 60
		},
		neishabouri_y_30s: {
			count_family: "neishabouri",
			axis: "y",
			epoch_seconds: 30
		},
		neishabouri_y_60s: {
			count_family: "neishabouri",
			axis: "y",
			epoch_seconds: 60
		},
		neishabouri_z_30s: {
			count_family: "neishabouri",
			axis: "z",
			epoch_seconds: 30
		},
		neishabouri_z_60s: {
			count_family: "neishabouri",
			axis: "z",
			epoch_seconds: 60
		},
		neishabouri_vm_30s: {
			count_family: "neishabouri",
			axis: "vm",
			epoch_seconds: 30
		},
		neishabouri_vm_60s: {
			count_family: "neishabouri",
			axis: "vm",
			epoch_seconds: 60
		},
		zero_crossing_x_30s: {
			count_family: "zero_crossing",
			axis: "x",
			epoch_seconds: 30
		},
		zero_crossing_x_60s: {
			count_family: "zero_crossing",
			axis: "x",
			epoch_seconds: 60
		},
		zero_crossing_y_30s: {
			count_family: "zero_crossing",
			axis: "y",
			epoch_seconds: 30
		},
		zero_crossing_y_60s: {
			count_family: "zero_crossing",
			axis: "y",
			epoch_seconds: 60
		},
		zero_crossing_z_30s: {
			count_family: "zero_crossing",
			axis: "z",
			epoch_seconds: 30
		},
		zero_crossing_z_60s: {
			count_family: "zero_crossing",
			axis: "z",
			epoch_seconds: 60
		}
	},
	fixed_output_series_keys: { anglez_5s: {
		axis: "z",
		epoch_seconds: 5
	} },
	epoch_suffixes: {
		"30s": { epoch_seconds: 30 },
		"60s": { epoch_seconds: 60 }
	}
}), P = [
	{
		grammarId: "count_cell",
		cellRole: "planner_output_cell",
		outputFamilyId: "count_hasib",
		segmentSeparator: "__",
		legacyTemplateFieldIds: ["count_config_id_template", "count_provenance_config_id_template"],
		segments: [
			{
				segmentRole: "root",
				literalValue: "hasib"
			},
			{
				segmentRole: "method_family",
				parameterId: "algorithm_id",
				valueEnumerationId: "method_family_ids"
			},
			{
				segmentRole: "implementation_variant",
				parameterId: "implementation_variant",
				valueEnumerationId: "count_provenance_implementation_variant_ids",
				optional: !0
			},
			{
				segmentRole: "series_key",
				valueEnumerationId: "count_input_series_keys",
				captures: [
					{
						captureId: "count_family",
						parameterId: "count_family"
					},
					{
						captureId: "axis",
						parameterId: "axis"
					},
					{
						captureId: "epoch_seconds",
						parameterId: "epoch_seconds"
					}
				]
			}
		]
	},
	{
		grammarId: "angle_cell",
		cellRole: "planner_output_cell",
		outputFamilyId: "angle_hasib",
		segmentSeparator: "__",
		segments: [
			{
				segmentRole: "root",
				literalValue: "hasib"
			},
			{
				segmentRole: "method_family",
				valueEnumerationId: "fixed_output_method_binding_ids"
			},
			{
				segmentRole: "series_key",
				valueEnumerationId: "fixed_output_series_keys",
				captures: [{
					captureId: "axis",
					parameterId: "axis"
				}, {
					captureId: "epoch_seconds",
					parameterId: "epoch_seconds"
				}]
			}
		]
	},
	{
		grammarId: "model_cell",
		cellRole: "planner_output_cell",
		outputFamilyId: "lstm",
		segmentSeparator: "__",
		legacyTemplateFieldIds: ["model_config_id_template"],
		segments: [
			{
				segmentRole: "root",
				literalValue: "lstm"
			},
			{
				segmentRole: "model_slug",
				parameterId: "model_id"
			},
			{
				segmentRole: "preset_slug",
				tagPrefix: "threshold_"
			}
		]
	},
	{
		grammarId: "consensus_cell",
		cellRole: "planner_output_cell",
		outputFamilyId: "consensus",
		segmentSeparator: "__",
		legacyTemplateFieldIds: ["consensus_config_id_template"],
		segments: [
			{
				segmentRole: "root",
				literalValue: "consensus"
			},
			{ segmentRole: "scope" },
			{
				segmentRole: "strategy",
				parameterId: "consensus_strategy",
				valueEnumerationId: "consensus_strategy_ids"
			},
			{
				segmentRole: "suffix",
				valueEnumerationId: "epoch_suffixes",
				captures: [{
					captureId: "epoch_seconds",
					parameterId: "epoch_seconds"
				}]
			}
		]
	},
	{
		grammarId: "count_skip_entry",
		cellRole: "planner_skip_entry",
		outputFamilyId: "count_hasib",
		segmentSeparator: "__",
		segments: [{
			segmentRole: "root",
			literalValue: "count_hasib"
		}, {
			segmentRole: "method_family",
			parameterId: "algorithm_id",
			valueEnumerationId: "method_family_ids"
		}]
	},
	{
		grammarId: "scored_variant",
		cellRole: "scored_variant",
		segmentSeparator: "__",
		segments: [
			{
				segmentRole: "root",
				literalValue: "variant"
			},
			{
				segmentRole: "classifier_config_id",
				greedy: !0
			},
			{
				segmentRole: "nonwear",
				tagPrefix: "nw_"
			},
			{
				segmentRole: "period_source",
				tagPrefix: "pg_"
			},
			{
				segmentRole: "ruleset",
				tagPrefix: "rs_"
			},
			{
				segmentRole: "rescoring",
				tagPrefix: "pp_"
			}
		]
	}
];
function q(e, n) {
	const t = e.segmentSeparator, r = e.segments, a = n.split(t), i = r.findIndex((e) => !0 === e.greedy);
	let o, s;
	if (i >= 0) {
		const e = r.length - i - 1;
		if (a.length < r.length) return null;
		s = a.slice(0, i).map((e) => [e]), s.push(a.slice(i, a.length - e));
		for (const n of a.slice(a.length - e)) s.push([n]);
		o = r;
	} else {
		const e = r.flatMap((e, n) => !0 === e.optional ? [n] : []), n = r.length - a.length;
		if (n < 0 || n > e.length) return null;
		const t = new Set(e.slice(e.length - n));
		o = r.filter((e, n) => !t.has(n)), s = a.map((e) => [e]);
	}
	const c = {};
	for (let l = 0; l < o.length; l += 1) {
		const e = o[l], n = s[l];
		if (void 0 === e || void 0 === n) return null;
		let r = n.join(t);
		if (void 0 === e.literalValue) {
			if (void 0 !== e.tagPrefix) {
				if (!r.startsWith(e.tagPrefix)) return null;
				r = r.slice(e.tagPrefix.length);
			}
			if (0 === r.length) return null;
			if (void 0 !== e.valueEnumerationId) {
				const n = U[e.valueEnumerationId]?.[r];
				if (void 0 === n) return null;
				for (const [e, t] of Object.entries(n)) c[e] = t;
			}
			c[e.segmentRole] = r;
		} else if (r !== e.literalValue) return null;
	}
	return c;
}
P.filter((e) => "planner_output_cell" === e.cellRole).map((e) => `${e.segments[0]?.literalValue ?? ""}${e.segmentSeparator}`).filter((e, n, t) => t.indexOf(e) === n).sort();
const j = { family: "unknown" };
function L(e, n) {
	const t = e[n];
	return void 0 === t ? void 0 : String(t);
}
new Map(G.map((e) => [e.id, e])), new Map([
	{
		id: "axis_y",
		grid: "epoch_60s",
		seriesKey: "axisY",
		quantity: "activity_counts",
		countAxis: "y",
		label: "Y-Axis (Vertical, bandpass counts)",
		shortLabel: "Y-axis",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 7e3,
		sourceSelectable: !0,
		csvHeaderAliases: [
			"axis_y",
			"axis1",
			"y",
			"axis 1",
			"y-axis",
			"activity",
			"activity counts",
			"activitycounts",
			"counts",
			"activity_counts"
		],
		realizesSignal: "counts_axis_y"
	},
	{
		id: "axis_x",
		grid: "epoch_60s",
		seriesKey: "axisX",
		quantity: "activity_counts",
		countAxis: "x",
		label: "X-Axis (Lateral, bandpass counts)",
		shortLabel: "X-axis",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 7e3,
		sourceSelectable: !0,
		csvHeaderAliases: [
			"axis_x",
			"axis2",
			"x",
			"axis 2"
		],
		realizesSignal: null
	},
	{
		id: "axis_z",
		grid: "epoch_60s",
		seriesKey: "axisZ",
		quantity: "activity_counts",
		countAxis: "z",
		label: "Z-Axis (Forward, bandpass counts)",
		shortLabel: "Z-axis",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 7e3,
		sourceSelectable: !0,
		csvHeaderAliases: [
			"axis_z",
			"axis3",
			"z",
			"axis 3"
		],
		realizesSignal: null
	},
	{
		id: "vector_magnitude",
		grid: "epoch_60s",
		seriesKey: "vectorMagnitude",
		quantity: "activity_counts",
		countAxis: "vm",
		label: "Vector Magnitude",
		shortLabel: "VM",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 12e3,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: "counts_vm"
	},
	{
		id: "axis_y_30s",
		grid: "epoch_30s",
		seriesKey: "axisY30s",
		quantity: "activity_counts",
		countAxis: "y",
		label: "Y-Axis (Vertical, 30 s counts)",
		shortLabel: "Y-axis 30s",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 5e3,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: null
	},
	{
		id: "axis_x_30s",
		grid: "epoch_30s",
		seriesKey: "axisX30s",
		quantity: "activity_counts",
		countAxis: "x",
		label: "X-Axis (Lateral, 30 s counts)",
		shortLabel: "X-axis 30s",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 5e3,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: null
	},
	{
		id: "axis_z_30s",
		grid: "epoch_30s",
		seriesKey: "axisZ30s",
		quantity: "activity_counts",
		countAxis: "z",
		label: "Z-Axis (Forward, 30 s counts)",
		shortLabel: "Z-axis 30s",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 5e3,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: null
	},
	{
		id: "vector_magnitude_30s",
		grid: "epoch_30s",
		seriesKey: "vectorMagnitude30s",
		quantity: "activity_counts",
		countAxis: "vm",
		label: "Vector Magnitude (30 s counts)",
		shortLabel: "VM 30s",
		storedUnit: "counts",
		displayUnit: "counts",
		displayScale: 1,
		valueMin: 0,
		valueMax: 8e3,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: null
	},
	{
		id: "enmo",
		grid: "epoch_5s",
		seriesKey: "ggirEnmo",
		quantity: "enmo",
		countAxis: null,
		label: "ENMO (5 s, GGIR, mg)",
		shortLabel: "ENMO",
		storedUnit: "g",
		displayUnit: "mg",
		displayScale: 1e3,
		valueMin: 0,
		valueMax: 1e3,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: null
	},
	{
		id: "anglez",
		grid: "epoch_5s",
		seriesKey: "ggirAnglez",
		quantity: "anglez",
		countAxis: null,
		label: "Anglez (5 s, GGIR)",
		shortLabel: "AngleZ",
		storedUnit: "deg",
		displayUnit: "deg",
		displayScale: 1,
		valueMin: -90,
		valueMax: 90,
		sourceSelectable: !0,
		csvHeaderAliases: [],
		realizesSignal: "angle_z"
	},
	{
		id: "temperature",
		grid: "epoch_60s",
		seriesKey: "temperature",
		quantity: "temperature",
		countAxis: null,
		label: "Temperature",
		shortLabel: "Temp",
		storedUnit: "Cel",
		displayUnit: "Cel",
		displayScale: 1,
		valueMin: null,
		valueMax: null,
		sourceSelectable: !1,
		csvHeaderAliases: [
			"temperature",
			"temp",
			"skin_temp",
			"mean_temp"
		],
		realizesSignal: null
	},
	{
		id: "lux",
		grid: "epoch_60s",
		seriesKey: "lux",
		quantity: "lux",
		countAxis: null,
		label: "Light (photopic lux)",
		shortLabel: "Lux",
		storedUnit: "lx",
		displayUnit: "lx",
		displayScale: 1,
		valueMin: null,
		valueMax: null,
		sourceSelectable: !1,
		csvHeaderAliases: [],
		realizesSignal: null
	},
	{
		id: "melanopic_lux",
		grid: "epoch_60s",
		seriesKey: "melanopicLux",
		quantity: "melanopic_lux",
		countAxis: null,
		label: "Melanopic EDI",
		shortLabel: "mEDI",
		storedUnit: "lx",
		displayUnit: "lx",
		displayScale: 1,
		valueMin: null,
		valueMax: null,
		sourceSelectable: !1,
		csvHeaderAliases: [],
		realizesSignal: null
	}
].map((e) => [e.id, e]));
const B = W.filter((e) => "sleep_wake" === e.kind).map((e) => ({
	id: e.id,
	displayGrid: e.displayGrid,
	execution: e.execution,
	requiredSignal: e.requiredSignal,
	family: e.family
})), H = new Map(B.map((e) => [e.id, e]));
function V(e) {
	if (!e) return !1;
	const n = H.get(e);
	return n ? "angle_spt" === n.execution : "angle_hasib" === function(e) {
		if ("string" != typeof e || 0 === e.length) return j;
		const n = function(e) {
			let n = null;
			for (const t of P) {
				const r = q(t, e);
				if (null !== r) {
					if (null !== n) return null;
					n = {
						grammarId: t.grammarId,
						values: r
					};
				}
			}
			return n;
		}(e);
		if (null === n) return j;
		const t = n.values;
		switch (n.grammarId) {
			case "count_cell": {
				const e = L(t, "method_family"), n = L(t, "count_family"), r = L(t, "axis"), a = L(t, "epoch_seconds");
				if (void 0 === e || void 0 === n || void 0 === r || void 0 === a) return j;
				const i = L(t, "implementation_variant");
				return {
					family: "count_hasib",
					scorer: e,
					...void 0 !== i ? { provenance: i } : {},
					countSource: n,
					signalAxis: r,
					epoch: a
				};
			}
			case "angle_cell": {
				const e = L(t, "method_family"), n = L(t, "epoch_seconds");
				return void 0 === e || void 0 === n ? j : {
					family: "angle_hasib",
					scorer: e,
					signalAxis: "anglez",
					epoch: n
				};
			}
			case "model_cell": {
				const e = L(t, "model_slug"), n = L(t, "preset_slug");
				return void 0 === e || void 0 === n ? j : {
					family: "lstm",
					lstmModel: e,
					lstmThreshold: n
				};
			}
			case "consensus_cell": {
				const e = L(t, "strategy"), n = L(t, "epoch_seconds");
				return void 0 === e || void 0 === n ? j : {
					family: "consensus",
					consensusStrategy: e,
					epoch: n
				};
			}
			default: return j;
		}
	}(e).family;
}
new Map([...B].reverse().flatMap((e) => e.family ? [[e.family, e]] : [])), Math.max(...G.map((e) => 86400 / e.epochSeconds * 3));
const $ = "diary", J = "none", X = new Set(Object.values({
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
	ACTIWARE_SLEEP_WAKE: "actiware_sleep_wake",
	GALLAND_2012: "galland_2012",
	UCSD_SCRIPPS_2010: "ucsd_scripps_2010",
	SAZONOV_2004: "sazonov_2004",
	SYED_CNN: "syed_cnn"
}));
function K(e) {
	if (!e) return [];
	const n = [];
	for (const [t, r] of e) null != t && "" !== t.trim() && n.push({
		onset_time: t,
		offset_time: r ?? null
	});
	return n;
}
function Y(e) {
	if (!e) return [];
	const n = [];
	for (const [t, r] of e) null != t && null != r && "" !== t.trim() && "" !== r.trim() && n.push({
		start_time: t,
		end_time: r
	});
	return n;
}
function Z(e) {
	if (e.sleepPeriodDetection && !function(e) {
		const n = R;
		return e.sourceA === n.sourceA && e.sourceB === n.sourceB && e.fusionPolicy === n.fusionPolicy && e.mergeGapMinutes === n.mergeGapMinutes && e.paddingMinutes === n.paddingMinutes && e.minOverlapJaccard === n.minOverlapJaccard && e.applyNonwearGate === n.applyNonwearGate;
	}(D(e.sleepPeriodDetection))) {
		const n = function(e) {
			const n = D(e);
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
	const n = e.periodGuider ?? b, t = Boolean(e.diaryOnsetTime) && Boolean(e.diaryWakeTime);
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
			case "event_marker": return t("event_marker");
			case "actiware_rest_interval": return t("actiware_rest_interval");
			case "none": return t("none");
			case b:
				if (n.hasDiary) return;
				return t("lstm_sleep_wake" === (r = n.algorithm) ? "selected_scorer_longest_bout" : V(r) ? "hdcza" : "l5");
			default: return;
		}
		var r;
	}(n, {
		algorithm: e.algorithm ?? null,
		hasDiary: t
	});
}
function Q(e) {
	const n = { ruleset: V(e.algorithm) ? "ggir_part4" : e.ruleset ?? "legacy" };
	e.algorithm && X.has(e.algorithm) && (n.classifier = e.algorithm), null != e.epochLengthSeconds && (n.epoch_length_seconds = e.epochLengthSeconds), null != e.onsetMinConsecutiveSleep && (n.onset_min_consecutive_sleep = e.onsetMinConsecutiveSleep), null != e.offsetMinConsecutiveMinutes && (n.offset_min_consecutive_minutes = e.offsetMinConsecutiveMinutes), e.scorerPostprocessing && (n.scorer_postprocessing = e.scorerPostprocessing);
	const { nonwear_detector: t, nonwear_detectors: r } = te(e.nonwearDetectors, null, { alwaysNameSingle: !1 });
	if (t && (n.nonwear_detector = t), r && (n.nonwear_detectors = r), e.sleepPeriodDetection) {
		const t = D(e.sleepPeriodDetection);
		n.merge_gap_minutes = t.mergeGapMinutes, n.padding_minutes = t.paddingMinutes, n.min_overlap_jaccard = t.minOverlapJaccard;
	}
	const a = Z(e);
	return a && (n.detection = a), n;
}
const ee = Object.values(S);
function ne(e) {
	const n = (e) => {
		const n = ee.indexOf(e);
		return -1 === n ? ee.length : n;
	};
	return [...e].sort((e, t) => n(e) - n(t));
}
function te(e, n, { alwaysNameSingle: t, memberFlags: r }) {
	if (!e || 0 === e.length) return {};
	if (1 === e.length) {
		const [n] = e;
		return t || n !== S.choi_2011 ? { nonwear_detector: n } : {};
	}
	return {
		nonwear_detectors: ne(e),
		...n ? { nonwear_weight: [...n] } : {},
		...n && r ? { nonwear_member_flags: [...r] } : {}
	};
}
function re(e) {
	const n = {
		analysis_date: e.analysisDate ?? "",
		epoch_length_seconds: e.epochLengthSeconds ?? 60,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (n.choi_nonwear = e.choiNonwear);
	const { nonwear_weight: t, nonwear_member_flags: r } = te(e.nonwearDetectors, e.nonwearWeight, {
		alwaysNameSingle: !1,
		memberFlags: e.nonwearMemberFlags
	});
	t && (n.nonwear_weight = t), r && (n.nonwear_member_flags = r), e.ggirInvalid && (n.ggir_invalid = Array.from(e.ggirInvalid)), e.ggirHasptAlgo && (n.ggir_haspt_algo = e.ggirHasptAlgo), e.ggirDiaryHasBedlog && (n.ggir_diary_has_bedlog = !0), e.ggirDiaryHasSleeplog && (n.ggir_diary_has_sleeplog = !0), e.sensorNonwear && e.sensorNonwear.length > 0 && (n.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (n.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (n.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (n.diary_in_bed_time = e.diaryBedTime), null != e.diaryOutBedTime && (n.diary_out_bed_time = e.diaryOutBedTime);
	const a = K(e.diaryNaps);
	a.length > 0 && (n.diary_naps = a);
	const i = Y(e.diaryNonwear);
	return i.length > 0 && (n.diary_nonwear = i), e.hdczaWindow && (n.hdcza_window = [e.hdczaWindow.startTimestamp, e.hdczaWindow.endTimestamp]), e.eventMarkerTimestamps && e.eventMarkerTimestamps.length > 0 && (n.event_marker_timestamps = Array.from(e.eventMarkerTimestamps)), e.actiwareRestWindow && (n.actiware_rest_window = [e.actiwareRestWindow.startTimestamp, e.actiwareRestWindow.endTimestamp]), null != e.nightStartHour && (n.night_start_hour = e.nightStartHour), null != e.nightEndHour && (n.night_end_hour = e.nightEndHour), n;
}
function ae(e) {
	const n = {
		analysis_date: e.analysisDate,
		epoch_length_seconds: e.epochLengthSeconds,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (n.choi_nonwear = e.choiNonwear), e.nonwearWeight && (n.nonwear_weight = [...e.nonwearWeight]), e.nonwearWeight && e.nonwearMemberFlags && (n.nonwear_member_flags = [...e.nonwearMemberFlags]), e.sensorNonwear && e.sensorNonwear.length > 0 && (n.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (n.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (n.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (n.diary_in_bed_time = e.diaryBedTime);
	const t = K(e.diaryNaps);
	t.length > 0 && (n.diary_naps = t);
	const r = Y(e.diaryNonwear);
	return r.length > 0 && (n.diary_nonwear = r), n;
}
function ie(e) {
	return e && 0 !== e.length ? e.map(([e, n]) => [e, n]) : null;
}
let oe = null;
const se = /unreachable|RuntimeError|out of bounds|wasm/i, ce = /* @__PURE__ */ new WeakSet();
async function le() {
	const e = await async function(e) {
		if (!0 !== (n = e.scope).pinnedSingleThread && n.sharedArrayBuffer && n.crossOriginIsolated && n.cores > 1) {
			let n;
			try {
				const t = await e.loadThreaded();
				if (n = t, ce.has(t)) throw new Error("thread pool start was abandoned earlier in this worker");
				await t.default();
				const r = Math.min(4, e.scope.cores);
				return t.threadPoolReady() || await function(e, n) {
					let t;
					const r = new Promise((e, r) => {
						t = setTimeout(() => {
							r(/* @__PURE__ */ new Error(`thread pool did not start within ${String(n)} ms`));
						}, n);
					});
					return Promise.race([e, r]).finally(() => {
						clearTimeout(t);
					});
				}(t.startThreadPool(r), e.poolStartTimeoutMs ?? 15e3), {
					mod: t,
					runtime: {
						threaded: !0,
						threads: r
					}
				};
			} catch (r) {
				void 0 !== n && ce.add(n), e.warn("[wasm] threaded runtime unavailable, using the single-thread package", r);
			}
		}
		var n;
		const t = await e.loadSingle();
		return await t.default(), {
			mod: t,
			runtime: {
				threaded: !1,
				threads: 1
			}
		};
	}({
		scope: {
			pinnedSingleThread: "actours-single-thread" === globalThis.name,
			sharedArrayBuffer: "undefined" != typeof SharedArrayBuffer,
			crossOriginIsolated: "undefined" != typeof crossOriginIsolated && crossOriginIsolated,
			cores: "undefined" != typeof navigator ? navigator.hardwareConcurrency : 1
		},
		loadThreaded: () => import("./actours-iPnt9wj4.js"),
		loadSingle: () => import("./actours-BOfGkHMN.js"),
		warn: (e, n) => {
			console.warn(e, n);
		}
	});
	return function(e) {
		const n = /* @__PURE__ */ new Float64Array(16), t = new Uint8Array(e.scoreSadeh(n, -4));
		if (16 !== t.length) throw new Error(`WASM integrity check failed: scoreSadeh length ${String(t.length)}, expected ${String(16)}`);
		for (let r = 0; r < 16; r++) if (1 !== t[r]) throw new Error(`WASM integrity check failed: scoreSadeh(zeros)[${String(r)}] = ${String(t[r])}, expected 1. Bundle may be corrupt — clear the site cache and reload.`);
	}(e.mod), e;
}
function ue(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function de(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function pe(e) {
	const n = de(e), t = n?.analysis_date, r = de(n?.intrinsic), a = r?.state;
	if (!n || "string" != typeof t || 0 === t.length || !r || "string" != typeof a || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(a)) return null;
	const i = r.score, o = r.verdict, s = r.infinite_reason, c = {}, l = [], u = n.per_guider;
	if (Array.isArray(u)) for (const y of u) {
		const e = de(y);
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
	const d = de(r.features), p = d && Array.isArray(d.feature_values) ? d : null, f = de(r.legacy_complexity_features) ?? (null === p ? d : null) ?? {}, m = n.computed_at;
	return {
		difficulty: "number" == typeof i && Number.isFinite(i) ? i : null,
		state: a,
		verdict: "string" == typeof o ? o : null,
		infiniteReason: "string" == typeof s ? s : null,
		confidenceByGuider: c,
		features: f,
		featureVector: p,
		perGuider: l,
		computedAt: "string" == typeof m ? m : null,
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
const fe = [
	"skipped_disabled",
	"recalibrated",
	"identity_fallback_no_valid_fit",
	"identity_fallback_error_increased",
	"candidate_retained_below_preferred_quality"
];
function me(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function ye(e, n) {
	const t = Array.isArray(e) ? e : [], r = (e) => me(t[e]) ?? n;
	return [
		r(0),
		r(1),
		r(2)
	];
}
function ge(e, n) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		scale: ye(t.scale, n ? 1 : 0),
		offset: ye(t.offset, 0),
		temperatureOffset: ye(t.temperatureOffset, 0),
		errorStart: me(t.errorStart),
		errorEnd: me(t.errorEnd),
		fitAttempted: !0 === t.fitAttempted,
		numPoints: Math.max(0, Math.round(me(t.numPoints) ?? 0)),
		hoursUsed: me(t.hoursUsed) ?? 0,
		success: !0 === t.success,
		message: "string" == typeof t.message ? t.message : ""
	};
}
function he(e) {
	if ("object" != typeof e || null === e) return null;
	const n = e, t = n.disposition;
	if ("string" != typeof t || !fe.includes(t)) return null;
	const r = ge(n, !0);
	return {
		...r,
		disposition: t,
		observed: "observed" in n ? ge(n.observed, !0) : r,
		applied: "applied" in n ? ge(n.applied, !0) : r
	};
}
const _e = 1073741824, we = "actours.compute.v1", be = "actours-corrected-3.3.7-v2";
function ve(e) {
	return "number" == typeof e ? e : "nan" === e ? NaN : "positive_infinity" === e ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
}
function Se(e) {
	return null === e ? null : ve(e);
}
let Ae = null;
function Me() {
	return Ae || (Ae = (async () => {
		const { mod: e, runtime: n } = await le();
		return "configureComputeMemoryBudgetV1" in e && "function" == typeof e.configureComputeMemoryBudgetV1 && e.configureComputeMemoryBudgetV1(function() {
			const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
			if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return _e;
			const n = Math.floor(1024 * e * 1024 * 1024 / 4);
			return Math.min(2147483648, Math.max(_e, n));
		}()), e;
	})().catch((e) => {
		throw Ae = null, e;
	})), Ae;
}
function Ee(e, n = "computeMimsUnit") {
	if ("object" != typeof e || null === e) throw new Error(`${n}: unexpected WASM return shape — got ${typeof e}`);
	const t = e, r = xe(t.mimsUnit);
	if (!r) throw new Error(`${n}: missing mimsUnit array — got ${JSON.stringify(e)}`);
	const a = t.epochSeconds;
	if ("number" != typeof a || !Number.isFinite(a) || a <= 0) throw new Error(`${n}: missing positive epochSeconds — got ${JSON.stringify(e)}`);
	const i = (e) => xe(t[e]) ?? void 0, o = {
		mimsUnit: r,
		epochSeconds: a
	}, s = i("mimsUnitX");
	s && (o.mimsUnitX = s);
	const c = i("mimsUnitY");
	c && (o.mimsUnitY = c);
	const l = i("mimsUnitZ");
	l && (o.mimsUnitZ = l);
	const u = i("headerTimeStamp");
	u && (o.headerTimeStamp = u);
	const d = i("mimsOrientationTimestamp");
	d && (o.mimsOrientationTimestamp = d);
	const p = i("mimsOrientationXAngle");
	p && (o.mimsOrientationXAngle = p);
	const f = i("mimsOrientationYAngle");
	f && (o.mimsOrientationYAngle = f);
	const m = i("mimsOrientationZAngle");
	return m && (o.mimsOrientationZAngle = m), o;
}
function xe(e) {
	if (e instanceof Float64Array) return new Float64Array(e);
	if (ArrayBuffer.isView(e)) {
		const n = e;
		if ("number" == typeof n.length) return new Float64Array(Array.from(n, Number));
	}
	return Array.isArray(e) ? new Float64Array(e) : null;
}
function ke(e) {
	if (e instanceof Uint8Array) return new Uint8Array(e);
	if (ArrayBuffer.isView(e)) {
		const n = e;
		if ("number" == typeof n.length) return new Uint8Array(Array.from(n, Number));
	}
	return Array.isArray(e) ? new Uint8Array(e) : null;
}
function Ce(e, n) {
	if ("object" != typeof e || null === e) throw new Error(`${n}: unexpected WASM return shape — got ${JSON.stringify(e)}`);
	const t = e, r = {}, a = [];
	for (const i of Object.keys(t)) {
		const e = t[i];
		if (Array.isArray(e)) {
			const n = new Float64Array(e);
			r[i] = n, a.push(n.buffer);
		} else r[i] = e;
	}
	return g(r, a);
}
function Ie(e, n) {
	const t = n;
	return t.tz_jump = t.timestamps_ms instanceof Float64Array && e.detectHourClockJumpMs(t.timestamps_ms), t;
}
function Te(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
const Ne = {
	day_summaries: [],
	days_with_signal: 0
}, ze = [];
function Fe(e, n) {
	const t = "object" == typeof e && null !== e ? e : {}, r = t.nonwear, a = r instanceof Uint8Array ? r : null, i = t.element_seconds, o = "number" == typeof i && Number.isFinite(i) && i > 0 ? i : n, s = Boolean(t.available) && null !== a, c = t.reason;
	return {
		nonwear: s ? a : null,
		conformance: "string" == typeof t.conformance ? t.conformance : s ? "conformant" : "unavailable",
		available: s,
		reason: "string" == typeof c ? c : null,
		elementSeconds: o
	};
}
function Re(e, n, t, r) {
	const a = t.epochSeconds, i = {}, o = (e) => ({
		nonwear: null,
		conformance: "unavailable",
		available: !1,
		reason: e,
		elementSeconds: a
	}), s = e.detectNonwearUnifiedBatchTyped;
	if ("function" != typeof s) {
		console.warn("[wasm-worker] detectNonwearUnifiedBatchTyped export missing — degrading to unavailable.");
		for (const e of n) i[e] = o("detectNonwearUnifiedBatchTyped export missing (stale WASM bundle)");
		return i;
	}
	try {
		const e = s(JSON.stringify(n), JSON.stringify(r ?? null), t.counts ?? /* @__PURE__ */ new Float64Array(), t.raw ?? /* @__PURE__ */ new Float64Array(), t.temperature ?? /* @__PURE__ */ new Float64Array(), t.epochSeconds, t.sampleRate ?? 0);
		for (const t of n) i[t] = Fe(e.results.find((e) => e.algorithm === t), a);
	} catch {
		console.warn("[wasm-worker] detectNonwearUnifiedBatchTyped failed — degrading to unavailable.");
		for (const e of n) i[e] = o("detectNonwearUnifiedBatchTyped failed");
	}
	return i;
}
function Oe(e, n, t, r) {
	return function(e, n) {
		if ("object" != typeof e || null === e) throw new Error("scoreGgirHasibVariant: unexpected WASM return shape — got " + typeof e);
		const t = e, r = ke(t.sib);
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
	}(e.scoreGgirHasibVariant({
		data: n,
		algo: t,
		...r ? { config: r } : {}
	}), t);
}
function De(e, n) {
	switch (n.kind) {
		case "hasib": return Oe(e, n.data, n.algo, n.config);
		case "sadeh": return new Uint8Array(e.scoreSadeh(n.activity, n.threshold));
		case "coleKripke": return new Uint8Array(e.scoreColeKripke(n.activity, n.useActilifeScaling));
	}
}
"undefined" != typeof self && "undefined" == typeof window && (function() {
	const e = console.error.bind(console);
	console.error = (...n) => {
		try {
			const t = n.map((e) => "string" == typeof e ? e : e instanceof Error ? e.stack ?? e.message : String(e)).join(" ");
			if (/panicked at|RuntimeError|unreachable/i.test(t)) {
				const n = /([A-Za-z0-9_.-]+\.rs):(\d+)/.exec(t);
				oe = n ? `Rust trap at ${n[1]}:${n[2]}` : "Rust runtime trap", e("[wasm-worker] WASM runtime trap captured");
				return;
			}
		} catch {}
		e(...n);
	};
}(), s(function(e) {
	const n = {};
	for (const t of Object.keys(e)) {
		const r = e[t];
		if ("function" != typeof r) {
			n[t] = r;
			continue;
		}
		const a = r;
		n[t] = async (...e) => {
			oe = null;
			try {
				return await a(...e);
			} catch (n) {
				const e = n instanceof Error ? n.message : String(n);
				if (oe && se.test(e)) throw new Error(`WASM panic in ${t}(): ${oe}`, { cause: n });
				throw n;
			}
		};
	}
	return n;
}({
	async readDiaryWorkbook(e, n) {
		const { readDiaryWorkbookSheet: t } = await import("./diary-xlsx-adapter-DCIm-Mnw.js");
		return t(e, n);
	},
	async detectNonwearUnified(e) {
		const n = function(e, n) {
			return Re(e, [n.algorithm], n.signals, n.config)[n.algorithm];
		}(await Me(), e);
		return g(n, n.nonwear ? [n.nonwear.buffer] : []);
	},
	async detectNonwearUnifiedBatch(e, n) {
		const t = Re(await Me(), e, n);
		return g(t, Object.values(t).flatMap((e) => e.nonwear ? [e.nonwear.buffer] : []));
	},
	async scoreEpochs(e) {
		const n = function(e, n) {
			const t = n.signals.epochSeconds, r = (e) => ({
				sleepWake: null,
				conformance: "unavailable",
				available: !1,
				reason: e,
				elementSeconds: t
			}), a = e.scoreEpochsTyped;
			if ("function" != typeof a) return console.warn("[wasm-worker] scoreEpochsTyped is not present in this WASM bundle — unified local scoring degrades to unavailable. Rebuild the actours WASM crate to enable it."), r("scoreEpochsTyped export missing (stale WASM bundle)");
			let i;
			try {
				const { signals: e, ...t } = n;
				i = a(JSON.stringify(t), e.counts ?? /* @__PURE__ */ new Float64Array(), e.raw ?? /* @__PURE__ */ new Float64Array(), e.temperature ?? /* @__PURE__ */ new Float64Array(), e.epochSeconds, e.sampleRate ?? 0);
			} catch {
				return console.warn("[wasm-worker] scoreEpochsTyped failed — degrading to unavailable."), r("scoreEpochsTyped failed");
			}
			return function(e, n) {
				const t = "object" == typeof e && null !== e ? e : {}, r = t.sleep_wake, a = r instanceof Uint8Array ? r : null, i = t.element_seconds, o = "number" == typeof i && Number.isFinite(i) && i > 0 ? i : n, s = Boolean(t.available) && null !== a, c = t.reason;
				return {
					sleepWake: s ? a : null,
					conformance: "string" == typeof t.conformance ? t.conformance : s ? "conformant" : "unavailable",
					available: s,
					reason: "string" == typeof c ? c : null,
					elementSeconds: o
				};
			}(i, t);
		}(await Me(), e);
		return g(n, n.sleepWake ? [n.sleepWake.buffer] : []);
	},
	async scoreSadeh(e, n) {
		const t = De(await Me(), {
			kind: "sadeh",
			activity: e,
			threshold: n
		});
		return g(t, [t.buffer]);
	},
	async scoreColeKripke(e, n) {
		const t = De(await Me(), {
			kind: "coleKripke",
			activity: e,
			useActilifeScaling: n
		});
		return g(t, [t.buffer]);
	},
	async scoreCountScorerBatch(e) {
		const n = await Me(), t = [];
		return g(e.map((e) => {
			try {
				const r = De(n, e);
				return t.push((r instanceof Uint8Array ? r : r.sib).buffer), { result: r };
			} catch (r) {
				return { error: r instanceof Error ? r.message : String(r) };
			}
		}), t);
	},
	async epochAgreement(e, n) {
		const t = (await Me()).epochAgreement(e, n);
		if ("object" != typeof t || null === t) throw new Error("actours returned invalid epoch agreement");
		const r = t;
		for (const a of [
			"n",
			"agree",
			"agreement",
			"cohenKappa",
			"bothSleep",
			"bothWake",
			"aSleepBWake",
			"aWakeBSleep"
		]) if ("number" != typeof r[a]) throw new Error(`actours returned invalid epoch agreement field ${a}`);
		return r;
	},
	async rasterizePeriods(e, n, t, r) {
		const a = (await Me()).rasterizePeriods(e, n, t, r);
		if (!(a?.mask instanceof Uint8Array) || "number" != typeof a.coveredEpochs) throw new Error("actours returned an invalid period raster");
		return g(a, [a.mask.buffer]);
	},
	async foldOntoGrid(e, n, t, r, a) {
		const i = (await Me()).foldOntoGrid(e, n, t, r, a);
		return g(i, [i.buffer]);
	},
	async foldUniformOntoGrid(e, n, t, r, a, i) {
		const o = (await Me()).foldUniformOntoGrid(e, n, t, r, a, i);
		return g(o, [o.buffer]);
	},
	async foldSampleBlocks(e, n, t, r) {
		const a = (await Me()).foldSampleBlocks(e, n, t, r);
		return g(a, [a.buffer]);
	},
	medianGapSeconds: async (e) => (await Me()).medianGapSeconds(e) ?? null,
	async utcDayIndex(e) {
		const n = (await Me()).utcDayIndex(e);
		return g(n, [n.day.buffer]);
	},
	irregularInternalDays: async (e, n) => (await Me()).irregularInternalDays(e, n),
	async roundCountStorage(e, n) {
		const t = (await Me()).roundCountStorage(e, n);
		return g(t, [t.buffer]);
	},
	async uniformTimestamps(e, n, t) {
		const r = (await Me()).uniformTimestamps(e, n, t);
		return g(r, [r.buffer]);
	},
	gridOffsetWithin: async (e, n) => (await Me()).gridOffsetWithin(e, n),
	detectHourClockJumpMs: async (e) => (await Me()).detectHourClockJumpMs(e),
	async projectLabelsOntoGrid(e, n, t, r) {
		const a = (await Me()).projectLabelsOntoGrid(e, n, t, r);
		return g(a, [a.buffer]);
	},
	spanFiniteMean: async (e, n, t, r) => (await Me()).spanFiniteMean(e, n, t, r),
	nextDate: async (e) => (await Me()).nextDate(e),
	shiftDate: async (e, n) => (await Me()).shiftDate(e, n),
	utcDatesInSpan: async (e, n) => (await Me()).utcDatesInSpan(e, n),
	dstPlaceholderRuns: async (e, n, t) => (await Me()).dstPlaceholderRuns(e, n, t),
	wallClockDstPlaceholders: async (e, n, t) => (await Me()).wallClockDstPlaceholders(e, n, t),
	ggir5sWallClockMs: async (e, n, t) => (await Me()).ggir5sWallClockMs(e, n, t),
	ggirIndicesToWallClockMs: async (e, n, t, r) => (await Me()).ggirIndicesToWallClockMs(e, n, t, r),
	wallMaskOntoGgirGrid: async (e, n, t) => (await Me()).wallMaskOntoGgirGrid(e, n, t),
	ggirDstPlaceholderCuts: async (e, n, t) => (await Me()).ggirDstPlaceholderCuts(e, n, t),
	restoredDstRuns: async (e, n, t) => (await Me()).restoredDstRuns(e, n, t),
	spliceDstPlaceholders: async (e, n, t) => (await Me()).spliceDstPlaceholders(e, n, t),
	ggirLabelsToStoredMs: async (e, n) => (await Me()).ggirLabelsToStoredMs(e, [...n]),
	storedToGgirLabelsMs: async (e, n) => (await Me()).storedToGgirLabelsMs(e, [...n]),
	wallClockLabels: async (e) => (await Me()).wallClockLabels(e),
	async ggirSleeplogStoredClocks(e, n, t, r) {
		const a = (await Me()).ggirSleeplogStoredClocks(e, n, t, [...r]);
		return a ? [a[0], a[1]] : void 0;
	},
	analysisWindowBounds: async (e, n) => (await Me()).analysisWindowBounds(e, n),
	analysisWindowSlice: async (e, n) => (await Me()).analysisWindowSlice(e, n),
	analysisDatesOf: async (e) => (await Me()).analysisDatesOf(e),
	nightIntervalOverlap: async (e, n, t, r, a) => (await Me()).nightIntervalOverlap(e, n, t, r, a),
	nonwearWeightRuns: async (e, n, t) => (await Me()).nonwearWeightRuns(e, n, t),
	epochsOverlapping: async (e, n, t, r) => (await Me()).epochsOverlapping(e, n, t, r),
	validStateFraction: async (e) => (await Me()).validStateFraction(e),
	clippedUnionHours: async (e, n, t, r) => (await Me()).clippedUnionHours(e, n, t, r),
	windowCoverage: async (e, n, t, r) => (await Me()).windowCoverage(e, n, t, r),
	ggirDiaryLogShape: async (e, n) => (await Me()).ggirDiaryLogShape(e, n),
	ggirManualNightClocks: async (e, n, t, r) => (await Me()).ggirManualNightClocks(e, n, t, r),
	settleManualNonwearNights: async (e) => (await Me()).settleManualNonwearNights(e),
	convertScreensRedcapDiary: async (e) => (await Me()).convertScreensRedcapDiary(e),
	convertBedWakeDaysDiary: async (e) => (await Me()).convertBedWakeDaysDiary(e),
	cutpointsRefusal: async (e, n, t, r) => (await Me()).cutpointsRefusal(e, n, t, r),
	normalizeCutpoints: async (e, n, t, r, a, i) => (await Me()).normalizeCutpoints(e, n, t, r, a, i),
	effectiveOverrideCutpoints: async (e, n, t, r) => (await Me()).effectiveOverrideCutpoints(e, n, t, r),
	ggirIncludeDayCriterionHours: async () => (await Me()).ggirIncludeDayCriterionHours(),
	ggirDaysIncluded: async (e, n) => (await Me()).ggirDaysIncluded(e, n),
	describeColumns: async (e, n) => (await Me()).describeColumns(e, n),
	midSleepClockHours: async (e, n) => (await Me()).midSleepClockHours(e, n),
	timestampDiscontinuities: async (e, n, t) => (await Me()).timestampDiscontinuities(e, n, t),
	nonwearInSleepCounts: async (e) => (await Me()).nonwearInSleepCounts(e),
	statesInPeriods: async (e, n, t, r) => (await Me()).statesInPeriods(e, n, t, r),
	weekendDates: async (e) => (await Me()).weekendDates(e),
	validWearDays: async (e, n) => (await Me()).validWearDays(e, n),
	participantValidity: async (e, n, t, r) => (await Me()).participantValidity(e, n, t, r),
	implausibilityReasons: async (e, n, t, r) => (await Me()).implausibilityReasons(e, n, t, r),
	metricWarnings: async (e, n, t, r) => (await Me()).metricWarnings(e, n, t, r),
	consensusDisagreements: async (e) => (await Me()).consensusDisagreements(e),
	consensusDisagreementDetail: async (e) => (await Me()).consensusDisagreementDetail(e),
	timeSemantics: async (e) => (await Me()).timeSemantics(e),
	wearSiteHasptRouting: async (e, n) => (await Me()).wearSiteHasptRouting(e, n),
	markerSleepOnsetOffset: async (e, n, t, r, a, i, o) => (await Me()).markerSleepOnsetOffset(e, n, t, r, a, i, o),
	markerIndexRange: async (e, n, t) => (await Me()).markerIndexRange(e, n, t),
	interRaterReliability: async (e) => (await Me()).interRaterReliability(e),
	foldSleepWakeVotes: async (e, n, t, r, a) => (await Me()).foldSleepWakeVotes(e, n, t, r, a),
	async thresholdProbabilities(e, n) {
		const t = (await Me()).thresholdProbabilities(e, n);
		return g(t, [t.buffer]);
	},
	exportNapAggregate: async (e) => (await Me()).exportNapAggregate(e),
	exportPeriodFigures: async (e, n, t) => (await Me()).exportPeriodFigures(e, n, t),
	summarizeExportGroups: async (e) => (await Me()).summarizeExportGroups(e),
	compareNonwearDetectorMasks: async (e, n) => (await Me()).compareNonwearDetectorMasks(e, n),
	reviewNonwearFile: async (e) => (await Me()).reviewNonwearFile(e),
	fuseNonwearMasks: async (e) => (await Me()).fuseNonwearMasks(e),
	nonwearSleepOverlap: async (e) => (await Me()).nonwearSleepOverlap(e),
	summarizePhysicalActivityTrace: async (e) => (await Me()).summarizePhysicalActivityTrace(e),
	summarizePhysicalActivityDays: async (e) => (await Me()).summarizePhysicalActivityDays(e),
	cutpointEpochCompatibility: async (e, n) => (await Me()).cutpointEpochCompatibility(e, n),
	sourceLabelsWallClockMs: async (e) => (await Me()).sourceLabelsWallClockMs(e),
	async cutpointToneCodes(e, n) {
		const t = (await Me()).cutpointToneCodes(e, n.sedentaryMax, n.lightMin, n.moderateMin, n.vigorousMin);
		return g(t, [t.buffer]);
	},
	ggirSummaryDenominator: async (e, n) => (await Me()).ggirSummaryDenominator(e, n),
	reviewNonwearTotals: async (e) => (await Me()).reviewNonwearTotals(e),
	async detectNonwear(e, n = 60) {
		const t = await Me(), r = new Uint8Array(60 === n ? t.detectNonwear(e) : t.detectNonwearChoi2012Epoch(e, n));
		return g(r, [r.buffer]);
	},
	async detectNonwearChoi2011(e, n = 60) {
		const t = await Me(), r = new Uint8Array("function" == typeof t.detectNonwearChoi2011Epoch ? t.detectNonwearChoi2011Epoch(e, n) : t.detectNonwearChoi2011(e));
		return g(r, [r.buffer]);
	},
	parseActigraphCsv: async (e, n) => Ce((await Me()).parseActigraphCsv(e, n), "parseActigraphCsv"),
	parseGeneactivCsv: async (e) => Ce((await Me()).parseGeneactivCsv(e), "parseGeneactivCsv"),
	isGeneactivFormat: async (e) => (await Me()).isGeneactivFormat(e),
	async csvBufferClear(e) {
		(await Me()).csvBufferClear(e);
	},
	async csvBufferAppend(e) {
		(await Me()).csvBufferAppend(e);
	},
	async csvBufferAppendHashed(e) {
		const n = await Me();
		n.sha256StreamFeed(e), n.csvBufferAppend(e);
	},
	async parseGeneactivCsvBuffered() {
		const e = await Me();
		return Ie(e, Ce(e.parseGeneactivCsvBuffered(), "parseGeneactivCsvBuffered"));
	},
	async parseActigraphCsvBuffered(e) {
		const n = await Me();
		return Ie(n, Ce(n.parseActigraphCsvBuffered(e), "parseActigraphCsvBuffered"));
	},
	async sha256Start() {
		(await Me()).sha256StreamStart();
	},
	async sha256Feed(e) {
		(await Me()).sha256StreamFeed(e);
	},
	sha256Finish: async () => (await Me()).sha256StreamFinish(),
	async streamParseStart(e, n, t = 60) {
		const r = await Me();
		"function" == typeof r.streamParseStartWithEpoch ? r.streamParseStartWithEpoch(e, n, t) : r.streamParseStart(e, n);
	},
	async streamParseStartData(e, n) {
		(await Me()).streamParseStartData(e, n);
	},
	streamParseFeed: async (e) => (await Me()).streamParseFeed(e),
	async streamParseFeedHashed(e) {
		const n = await Me();
		return n.sha256StreamFeed(e), n.streamParseFeed(e);
	},
	async streamParseFinish() {
		const e = (await Me()).streamParseFinish();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinish: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const n = new Float64Array(e.timestampsMs), t = new Float64Array(e.axisX), r = new Float64Array(e.axisY), a = new Float64Array(e.axisZ), i = new Float64Array(e.vectorMagnitude), o = new Float64Array(e.temperature);
		return g({
			timestampsMs: n,
			axisX: t,
			axisY: r,
			axisZ: a,
			vectorMagnitude: i,
			temperature: o,
			sampleFrequency: e.sampleFrequency,
			headerRowsSkipped: e.headerRowsSkipped
		}, [
			n.buffer,
			t.buffer,
			r.buffer,
			a.buffer,
			i.buffer,
			o.buffer
		]);
	},
	async streamParseFinishChunk(e) {
		const n = await Me(), t = e && "function" == typeof n.streamParseFinishChunkWithProgress ? n.streamParseFinishChunkWithProgress((n, t) => {
			Promise.resolve(e(n, t)).catch(() => {});
		}) : n.streamParseFinishChunk();
		if (null == t || "object" != typeof t) throw new Error(`streamParseFinishChunk: unexpected WASM return shape (${typeof t}) — bundle may be corrupt`);
		const r = new Float64Array(t.timestampsMs), a = new Float64Array(t.axisX), i = new Float64Array(t.axisY), o = new Float64Array(t.axisZ), s = new Float64Array(t.vectorMagnitude), c = new Float64Array(t.temperature), l = new Uint32Array(t.counts), u = new Uint32Array(t.tempCounts), d = new Float64Array(t.timestampsMs5s), p = new Float64Array(t.enmo5s), f = new Float64Array(t.anglez5s), m = new Float64Array(t.anglex5s ?? 0), y = new Float64Array(t.angley5s ?? 0), h = new Float64Array(t.mad5s ?? 0), _ = new Float64Array(t.enmoa5s ?? 0), w = new Uint8Array(t.ggirInvalid5s), b = new Uint8Array(t.ggirNonwear5s), v = t, S = new Float64Array(v.zcx60s ?? []), A = new Float64Array(v.zcy60s ?? []), M = new Float64Array(v.zcz60s ?? []), E = new Uint32Array(t.counts5s), x = t, k = new Float64Array(x.mimsUnit ?? []), C = new Float64Array(x.mimsUnitX ?? []), I = new Float64Array(x.mimsUnitY ?? []), T = new Float64Array(x.mimsUnitZ ?? []), N = t;
		return g({
			timestampsMs: r,
			axisX: a,
			axisY: i,
			axisZ: o,
			vectorMagnitude: s,
			temperature: c,
			counts: l,
			tempCounts: u,
			timestampsMs5s: d,
			enmo5s: p,
			anglez5s: f,
			anglex5s: m,
			angley5s: y,
			mad5s: h,
			enmoa5s: _,
			ggirInvalid5s: w,
			ggirNonwear5s: b,
			zcx60s: S,
			zcy60s: A,
			zcz60s: M,
			counts5s: E,
			mimsUnit: k,
			mimsUnitX: C,
			mimsUnitY: I,
			mimsUnitZ: T,
			sampleFrequency: t.sampleFrequency,
			headerRowsSkipped: t.headerRowsSkipped,
			rowsDropped: t.rowsDropped,
			rawRetentionDegraded: N.rawRetentionDegraded ?? !1,
			canonicalPassDegraded: N.canonicalPassDegraded ?? !1,
			canonicalPassReason: N.canonicalPassReason ?? null
		}, [
			r.buffer,
			a.buffer,
			i.buffer,
			o.buffer,
			s.buffer,
			c.buffer,
			l.buffer,
			u.buffer,
			d.buffer,
			p.buffer,
			f.buffer,
			m.buffer,
			y.buffer,
			h.buffer,
			_.buffer,
			w.buffer,
			b.buffer,
			S.buffer,
			A.buffer,
			M.buffer,
			E.buffer,
			k.buffer,
			C.buffer,
			I.buffer,
			T.buffer
		]);
	},
	async neishabouriCounts(e, n, t, r, a) {
		const i = (await Me()).neishabouriCounts(e, n, t, r, a), o = "object" == typeof i && null !== i ? i : null, s = o ? xe(o.x) : null, c = o ? xe(o.y) : null, l = o ? xe(o.z) : null, u = o ? xe(o.vm) : null;
		if (!(s && c && l && u)) throw new Error(`neishabouriCounts: unexpected WASM return shape — got ${JSON.stringify(i)}`);
		return g({
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
	async zeroCrossingCounts(e, n, t, r, a) {
		const i = (await Me()).zeroCrossingCounts(e, n, t, r, a), o = "object" == typeof i && null !== i ? i : null, s = o ? xe(o.zcx) : null, c = o ? xe(o.zcy) : null, l = o ? xe(o.zcz) : null;
		if (!s || !c || !l) throw new Error(`zeroCrossingCounts: unexpected WASM return shape — got ${JSON.stringify(i)}`);
		return g({
			zcx: s,
			zcy: c,
			zcz: l
		}, [
			s.buffer,
			c.buffer,
			l.buffer
		]);
	},
	async computeMimsUnit(e, n, t, r, a = {}) {
		const i = await Me();
		if (!("computeMimsUnit" in i) || "function" != typeof i.computeMimsUnit) throw new Error("computeMimsUnit: current actours WASM bundle does not export MIMS_UNIT processing");
		const o = Ee(i.computeMimsUnit(e, n, t, r, a), "computeMimsUnit");
		return g(o, [
			o.mimsUnit.buffer,
			o.mimsUnitX?.buffer,
			o.mimsUnitY?.buffer,
			o.mimsUnitZ?.buffer,
			o.headerTimeStamp?.buffer,
			o.mimsOrientationTimestamp?.buffer,
			o.mimsOrientationXAngle?.buffer,
			o.mimsOrientationYAngle?.buffer,
			o.mimsOrientationZAngle?.buffer
		].filter((e) => e instanceof ArrayBuffer));
	},
	async computeMimsUnitDataframe(e, n, t, r, a = {}) {
		const i = await Me();
		if (!("computeMimsUnitDataframe" in i) || "function" != typeof i.computeMimsUnitDataframe) throw new Error("computeMimsUnitDataframe: current actours WASM bundle does not export MIMS_UNIT processing");
		const o = Ee(i.computeMimsUnitDataframe(e, n, t, r, a), "computeMimsUnitDataframe");
		return g(o, [
			o.mimsUnit.buffer,
			o.mimsUnitX?.buffer,
			o.mimsUnitY?.buffer,
			o.mimsUnitZ?.buffer,
			o.headerTimeStamp?.buffer,
			o.mimsOrientationTimestamp?.buffer,
			o.mimsOrientationXAngle?.buffer,
			o.mimsOrientationYAngle?.buffer,
			o.mimsOrientationZAngle?.buffer
		].filter((e) => e instanceof ArrayBuffer));
	},
	async classifyActimetricPreschoolWristRf(e, n, t, r) {
		const a = await Me(), i = "function" == typeof a.classifyActimetricPreschoolWristRfLagLead ? a.classifyActimetricPreschoolWristRfLagLead : "function" == typeof a.classifyActimetricPreschoolWristRf ? a.classifyActimetricPreschoolWristRf : "function" == typeof a.actimetricPreschoolWristRfClasses ? a.actimetricPreschoolWristRfClasses : "function" == typeof a.predictActimetricPreschoolWristRfClasses ? a.predictActimetricPreschoolWristRfClasses : null;
		if (!i) throw new Error("classifyActimetricPreschoolWristRf: current actours WASM bundle does not export actimetric preschool wrist RF inference");
		const o = function(e, n = "classifyActimetricPreschoolWristRf") {
			const t = ke(e);
			if (t) return {
				classes: t,
				epochSeconds: 15
			};
			const r = "object" == typeof e && null !== e ? e : null, a = r ? ke(r.classes) ?? ke(r.activityClasses) ?? ke(r.predictions) ?? ke(r.activity) : null;
			if (!a) throw new Error(`${n}: unexpected WASM return shape — expected Uint8Array or { classes }`);
			const i = "number" == typeof r?.epochSeconds && Number.isFinite(r.epochSeconds) ? r.epochSeconds : "number" == typeof r?.epoch_seconds && Number.isFinite(r.epoch_seconds) ? r.epoch_seconds : 15, o = "string" == typeof r?.classifier ? r.classifier : void 0, s = "string" == typeof r?.model ? r.model : void 0;
			return {
				classes: a,
				epochSeconds: i,
				...o ? { classifier: o } : {},
				...s ? { model: s } : {}
			};
		}(i(e, n, t, r), "classifyActimetricPreschoolWristRf");
		return g(o, [o.classes.buffer]);
	},
	async lstmSpectralFeatures30s(e, n, t, r) {
		const a = await Me(), i = a.lstmSpectralFeatures30s ?? a.spectralFeatures30s;
		if ("function" != typeof i) throw new Error("LSTM spectral feature extractor is not available in this WASM bundle");
		const o = i(e, n, t, r), s = "object" == typeof o && null !== o ? o : null, c = function(e) {
			if (e instanceof Float32Array) return new Float32Array(e);
			if (ArrayBuffer.isView(e)) {
				const n = e;
				if ("number" == typeof n.length) return new Float32Array(Array.from(n, Number));
			}
			return Array.isArray(e) ? new Float32Array(e) : null;
		}(s?.features ?? o), l = "number" == typeof s?.bins ? s.bins : 30, u = "number" == typeof s?.channels ? s.channels : 4, d = "number" == typeof s?.epochs ? s.epochs : c ? Math.floor(c.length / (l * u)) : 0;
		if (!c || d * l * u !== c.length) throw new Error(`lstmSpectralFeatures30s: unexpected WASM return shape — got ${JSON.stringify(o)}`);
		return g({
			features: c,
			epochs: d,
			bins: l,
			channels: u
		}, [c.buffer]);
	},
	async scoreConsensus(e, n) {
		const t = await Me();
		if ("function" != typeof t.scoreConsensusTyped) throw new Error("scoreConsensus is not present in this WASM bundle.");
		const r = new Uint32Array(n.length + 1);
		for (const [s, c] of n.entries()) r[s + 1] = r[s] + c.length;
		const a = 1 === n.length ? n[0] : new Uint8Array(r[n.length]);
		if (1 !== n.length) for (const [s, c] of n.entries()) a.set(c, r[s]);
		const i = t.scoreConsensusTyped(JSON.stringify({ strategy: e }), a, r), o = null != i && "object" == typeof i ? i.consensus : void 0;
		if (!(o instanceof Uint8Array)) throw new Error(`scoreConsensus: unexpected WASM return shape — got ${JSON.stringify(i)}`);
		return g(o, [o.buffer]);
	},
	ggirSptDurationHours: async (e, n) => (await Me()).ggirSptDurationHours(e, n),
	async computeSleepMetrics(e, n, t) {
		const r = (await Me()).computeSleepMetrics(e, n, t);
		if (null == r || "object" != typeof r || "number" != typeof r.totalSleepTimeMinutes || "number" != typeof r.sleepEfficiency) throw new Error(`computeSleepMetrics: unexpected WASM return shape ${JSON.stringify(r)}`);
		return r;
	},
	computeFileDifficulty: async (e) => function(e, n) {
		const t = e.computeNightDifficultyTyped;
		return "function" != typeof t ? (console.warn("[wasm-worker] computeNightDifficulty is not present in this WASM bundle — night difficulty degrades to empty. Rebuild the actours WASM crate to enable it."), { byDate: {} }) : function(e) {
			const n = {}, t = /* @__PURE__ */ new Set(), r = Te(e)?.results;
			if (!Array.isArray(r)) return { byDate: n };
			for (const a of r) {
				const e = pe(a);
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
	}(await Me(), e),
	computeFileSignals: async (e) => function(e, n) {
		const t = e.computeNightSignalsTyped;
		if ("function" != typeof t) return console.warn("[wasm-worker] computeNightSignals is not present in this WASM bundle — night-signal detail degrades to empty."), { byDate: {} };
		const [r, ...a] = n;
		return function(e) {
			const n = {}, t = /* @__PURE__ */ new Set(), r = Te(e)?.signals;
			if (!Array.isArray(r)) return { byDate: n };
			for (const a of r) {
				const e = Te(a), r = e?.analysis_date, i = e?.epoch_length_seconds;
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
			const n = ue(e.config), t = ue(n?.signals) ?? n;
			return {
				...t ? { config: t } : {},
				days: e.days
			};
		}(JSON.parse(r))), ...a));
	}(await Me(), e),
	sleepRegularityIndex: async (e) => function(e, n) {
		const t = e.sleepRegularityIndex;
		if ("function" != typeof t) throw new Error("sleepRegularityIndex is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = t(...n);
		if (null != r && "number" != typeof r) throw new Error("actours returned an invalid SRI");
		return r ?? null;
	}(await Me(), e),
	computeCircadian: async (e) => function(e, n) {
		const t = e.computeCircadianTyped;
		if ("function" != typeof t) throw new Error("computeCircadian is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = t(...n);
		return r && "object" == typeof r && Array.isArray(r.day_summaries) ? r : Ne;
	}(await Me(), e),
	aggregateEpochSeries: async (e) => function(e, n) {
		const t = e.aggregateEpochSeries;
		if ("function" != typeof t) throw new Error("aggregateEpochSeries is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = t(n);
		if (null == r || "object" != typeof r) throw new Error("aggregateEpochSeries returned an invalid result.");
		const a = r;
		if (!a.series || !Array.isArray(a.series.timestamps_ms)) throw new Error("aggregateEpochSeries returned an invalid result.");
		return r;
	}(await Me(), e),
	async detectDeviceFormat(e, n) {
		const t = (await Me()).detectDeviceFormat;
		if ("function" != typeof t) return null;
		try {
			return t(e, n);
		} catch {
			return null;
		}
	},
	async parseEpochSeries(e, n) {
		const t = (await Me()).parseEpochSeries;
		if ("function" != typeof t) throw new Error("parseEpochSeries is not present in this WASM bundle.");
		return t(e, n);
	},
	async actiwareIntervals(e, n, t) {
		const r = await Me(), a = r.generateActiwareRestIntervals, i = r.actiwareSleepIntervals;
		if ("function" != typeof a || "function" != typeof i) return null;
		if (n.length > 0) {
			const r = i(e, n, t);
			return {
				intervals: [...n, ...r],
				generated: !1
			};
		}
		return {
			intervals: a(e, t),
			generated: !0
		};
	},
	async actiwareSleepWake(e, n) {
		const t = (await Me()).sleepWakeScores;
		return "function" != typeof t ? null : t(e, n);
	},
	async actiwareWakeThreshold(e, n) {
		const t = (await Me()).actiwareWakeThreshold;
		return "function" != typeof t ? null : t(e, n) ?? null;
	},
	async actiwareIntervalStatistics(e) {
		const n = (await Me()).actiwareIntervalStatistics;
		return "function" != typeof n ? null : n(e);
	},
	hasParseAw5: async () => "function" == typeof (await Me()).parseAw5,
	async parseAw5(e) {
		const n = (await Me()).parseAw5;
		return "function" != typeof n ? null : n(e, null);
	},
	async openAw5Batch(e) {
		const n = (await Me()).Aw5Batch;
		if ("function" != typeof n) return null;
		const t = new n(e);
		return {
			handle: ze.push(t) - 1,
			subjects: e.map((e, n) => t.subjects(n))
		};
	},
	aw5BatchRecording(e, n, t) {
		const r = ze[e];
		return r ? Promise.resolve(r.recording(n, t, null)) : Promise.reject(/* @__PURE__ */ new Error("The .AW5 batch is not open in this worker."));
	},
	async runScoredVariantBatch(e) {
		const n = await Me(), t = {}, r = /* @__PURE__ */ new Set();
		let a = 0, i = !1;
		const o = Object.keys(e.classifierOutputs).filter((n) => e.classifierOutputs[n]?.length === e.timestamps.length).sort(), s = new Set(o), c = Object.keys(e.nonwearMasks).filter((n) => null != e.nonwearMasks[n]?.mask).sort(), l = await async function(e, t) {
			const r = [...new Set(e)].filter((e) => null != t[e]?.mask);
			if (0 === r.length) return null;
			const a = await ((e) => n.fuseNonwearMasks(e))(ne(r).map((e) => Uint8Array.from(t[e].mask)));
			return {
				weight: a.weight,
				flagged: a.flagged,
				available: r,
				memberFlags: a.memberFlags
			};
		}(e.studyNonwearDetectors ?? [], e.nonwearMasks), u = (e) => "none" === e ? -1 : "study_selection" !== e ? c.indexOf(e) : l ? 1 === l.available.length ? c.indexOf(l.available[0]) : -2 : -1, d = e.variants.filter((n) => {
			if (!s.has(n.classifierConfigId)) return a += 1, !1;
			if ("study_selection" === n.nonwear) return l || r.add("None of the study's nonwear detectors can run for this data — scored without a nonwear mask."), !0;
			const t = "none" === n.nonwear ? void 0 : e.nonwearMasks[n.nonwear];
			if ("none" !== n.nonwear && !t?.mask) {
				const e = t?.reason ? ` (${t.reason})` : "";
				r.add(`Nonwear detector "${n.nonwear}" is unavailable for this data — scored without a nonwear mask.${e}`);
			}
			return !0;
		}), p = e.timestamps.length;
		if (0 === p) {
			for (const e of d) t[e.id] = /* @__PURE__ */ new ArrayBuffer(0);
			d.length && r.add("No activity data");
		} else if (d.length) if ("function" != typeof n.placeMarkersBatch) i = !0;
		else {
			const a = new Uint8Array(o.length * p);
			for (const [n, t] of o.entries()) {
				const r = e.classifierOutputs[t];
				if (r.length !== p) throw new Error(`classifier_scores length ${String(r.length)} does not match 1 rows × ${String(p)} epochs`);
				a.set(r, n * p);
			}
			const i = new Uint8Array(c.length * p);
			for (const [n, t] of c.entries()) {
				const r = e.nonwearMasks[t].mask;
				if (r.length !== p) throw new Error(`nonwear_masks length ${String(r.length)} does not match 1 rows × ${String(p)} epochs`);
				i.set(r, n * p);
			}
			const s = function(e) {
				let n;
				if ("variant" in e) {
					const { variant: a, timestamps: i, activityCounts: o, sleepScores: s, analysisDate: c, epochLengthSeconds: l, hdczaWindow: u, diary: d, onsetMinConsecutiveSleep: p, offsetMinConsecutiveMinutes: f, choiNonwear: m, nonwearDetectors: y, nonwearWeight: g, nonwearMemberFlags: h, eventMarkerTimestamps: _, actiwareRestWindow: w } = e, b = a.config.rescoring === v && (r = v) === v ? { preset: r } : void 0;
					n = {
						timestamps: i,
						activityCounts: o,
						sleepScores: s,
						...void 0 !== m ? { choiNonwear: m } : {},
						...void 0 !== y ? { nonwearDetectors: y } : {},
						...void 0 !== g ? { nonwearWeight: g } : {},
						...void 0 !== h ? { nonwearMemberFlags: h } : {},
						ruleset: a.config.ruleset,
						...void 0 !== b ? { scorerPostprocessing: b } : {},
						analysisDate: c,
						epochLengthSeconds: l,
						hdczaWindow: u ? {
							startTimestamp: u[0],
							endTimestamp: u[1]
						} : null,
						..._ ? { eventMarkerTimestamps: _ } : {},
						...w ? { actiwareRestWindow: w } : {},
						diaryBedTime: d?.diaryInBedTime ?? null,
						diaryOnsetTime: d?.onsetTime ?? null,
						diaryWakeTime: d?.diaryWakeTime ?? null,
						diaryNaps: ie(d?.naps),
						diaryNonwear: ie(d?.nonwear),
						...void 0 !== p ? { onsetMinConsecutiveSleep: p } : {},
						...void 0 !== f ? { offsetMinConsecutiveMinutes: f } : {},
						...(t = a.config.periodSource, t === $ ? { periodGuider: $ } : t === J ? { periodGuider: J } : { sleepPeriodDetection: {
							sourceA: t,
							sourceB: z,
							fusionPolicy: F,
							applyNonwearGate: !1
						} })
					};
				} else n = e;
				var t, r;
				return function(e) {
					const n = [
						"timestamps",
						"activity_counts",
						"sleep_scores",
						"choi_nonwear",
						"anglez",
						"light",
						"temperature",
						"heart_rate",
						"detach_nonwear"
					], t = n.flatMap((n) => {
						const t = e.days.map((e) => e[n] ?? []), r = new Uint32Array(t.length + 1);
						for (const [e, o] of t.entries()) r[e + 1] = r[e] + o.length;
						const a = "sleep_scores" === n || "choi_nonwear" === n || "detach_nonwear" === n ? Uint8Array : Float64Array, i = 1 === t.length && t[0] instanceof a ? t[0] : new a(r[t.length]);
						if (i !== t[0]) for (const [e, o] of t.entries()) i.set(o, r[e]);
						return [i, r];
					}), r = {
						config: e.config,
						days: e.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !n.includes(e))))
					};
					return [JSON.stringify(r), ...t];
				}({
					config: Q(n),
					days: [re(n), ...(n.contextDays ?? []).filter((e) => e.analysisDate !== (n.analysisDate ?? "")).map(ae)]
				});
			}({
				...e,
				timestamps: [],
				activityCounts: [],
				sleepScores: [],
				variant: { config: {
					...d[0],
					periodSource: "l5",
					rescoring: "none"
				} }
			}), m = JSON.parse(s[0]), y = m.days[0], g = l && l.available.length > 1 ? l : null, h = (t) => n.placeMarkersBatch(JSON.stringify({
				...m.config,
				...y,
				classifier_ids: o,
				nonwear_ids: c,
				...g ? {
					nonwear_weight: g.weight,
					nonwear_member_flags: g.memberFlags,
					nonwear_detectors: ne(g.available)
				} : {}
			}), Float64Array.from(e.timestamps), Float64Array.from(e.activityCounts), a, i, JSON.stringify(t.map((e) => ({
				id: e.id,
				classifier_index: o.indexOf(e.classifierConfigId),
				nonwear_index: u(e.nonwear),
				ruleset: e.ruleset,
				period_source: e.periodSource,
				rescoring: e.rescoring
			}))));
			let _, w = d;
			try {
				_ = h(w);
			} catch (f) {
				if (!g) throw f;
				w = d.filter((e) => -2 !== u(e.nonwear)), r.add("The loaded placement core predates weighted nonwear; the study-selection variants were not scored."), _ = h(w);
			}
			for (const e of _.notes) r.add(e);
			for (const [e, n] of w.entries()) t[n.id] = _.masks.slice(e * p, (e + 1) * p).buffer;
		}
		return g({
			masks: t,
			notes: [...r],
			missingClassifier: a,
			placementUnavailable: i
		}, Object.values(t));
	},
	async placeMarkers(e) {
		const n = await Me();
		return "function" != typeof n.placeMarkersTyped ? (console.warn("[wasm-worker] placeMarkers is not present in this WASM bundle — local marker placement degrades to null."), null) : n.placeMarkersTyped(...e);
	},
	async placeNonwearMarkers(e) {
		const n = await Me();
		return "function" != typeof n.placeNonwearMarkersTyped ? (console.warn("[wasm-worker] placeNonwearMarkers is not present in this WASM bundle — local marker placement degrades to null."), null) : n.placeNonwearMarkersTyped(...e);
	},
	async nonwearContributors(e, n, t, r) {
		const a = await Me();
		return JSON.parse(a.nonwearContributors(Uint32Array.from(e), JSON.stringify(n), t, r));
	},
	epochRawData: async (e, n, t, r, a) => Ce((await Me()).epochRawData(e, n, t, r, a), "epochRawData"),
	async epochWithBandpass(e, n, t) {
		const r = (await Me()).epochWithBandpass(e, n, t), a = "object" == typeof r && null !== r ? r : null, i = xe(a?.timestamps), o = xe(a?.counts);
		if (!i || !o) throw new Error("epochWithBandpass: unexpected WASM return shape");
		return g({
			timestamps: i,
			counts: o
		}, [i.buffer, o.buffer]);
	},
	async computeEnmo5s(e, n, t, r) {
		const a = await Me();
		return new Float64Array(a.computeEnmo5s(e, n, t, r));
	},
	async computeAnglez5s(e, n, t, r) {
		const a = await Me();
		return new Float64Array(a.computeAnglez5s(e, n, t, r));
	},
	async processRawXyz(e, n, t, r, a, i) {
		const o = (await Me()).processRawXyz(e, n, t, r, a, i ?? void 0), s = "object" == typeof o && null !== o ? o : null, c = s ? xe(s.enmo5s) : null, l = s ? xe(s.anglez5s) : null, u = s ? xe(s.countsX) : null, d = s ? xe(s.countsY) : null, p = s ? xe(s.countsZ) : null, f = s ? xe(s.countsVm) : null;
		if (!(c && l && u && d && p && f)) throw new Error(`processRawXyz: unexpected WASM return shape — got ${JSON.stringify(o)}`);
		const m = (e) => xe(e) ?? /* @__PURE__ */ new Float64Array(0), y = s ? m(s.anglex5s) : /* @__PURE__ */ new Float64Array(0), h = s ? m(s.angley5s) : /* @__PURE__ */ new Float64Array(0), _ = s ? m(s.mad5s) : /* @__PURE__ */ new Float64Array(0), w = s ? m(s.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
		return g({
			enmo5s: c,
			anglez5s: l,
			anglex5s: y,
			angley5s: h,
			mad5s: _,
			enmoa5s: w,
			calibration: he(s?.calibration),
			counts: {
				x: u,
				y: d,
				z: p,
				vm: f
			}
		}, [
			c.buffer,
			l.buffer,
			y.buffer,
			h.buffer,
			_.buffer,
			w.buffer,
			u.buffer,
			d.buffer,
			p.buffer,
			f.buffer
		]);
	},
	async processRawXyzImputed(e, n, t, r, a, i, o = 60) {
		const s = await Me(), c = "function" == typeof s.processRawXyzImputedWithEpoch ? s.processRawXyzImputedWithEpoch(e, n, t, r, a, i ?? void 0, o) : s.processRawXyzImputed(e, n, t, r, a, i ?? void 0), l = "object" == typeof c && null !== c ? c : null, u = l ? xe(l.enmo5s) : null, d = l ? xe(l.anglez5s) : null, p = l ? xe(l.countsX) : null, f = l ? xe(l.countsY) : null, m = l ? xe(l.countsZ) : null, y = l ? xe(l.countsVm) : null;
		if (!(u && d && p && f && m && y)) throw new Error(`processRawXyzImputed: unexpected WASM return shape — got ${JSON.stringify(c)}`);
		const h = (e) => xe(e) ?? /* @__PURE__ */ new Float64Array(0), _ = l ? h(l.anglex5s) : /* @__PURE__ */ new Float64Array(0), w = l ? h(l.angley5s) : /* @__PURE__ */ new Float64Array(0), b = l ? h(l.mad5s) : /* @__PURE__ */ new Float64Array(0), v = l ? h(l.enmoa5s) : /* @__PURE__ */ new Float64Array(0), S = (e) => Array.isArray(e) || ArrayBuffer.isView(e) ? Uint8Array.from(e) : /* @__PURE__ */ new Uint8Array(0), A = S(l?.ggirInvalid5s), M = S(l?.ggirNonwear5s);
		return g({
			enmo5s: u,
			anglez5s: d,
			anglex5s: _,
			angley5s: w,
			mad5s: b,
			enmoa5s: v,
			counts: {
				x: p,
				y: f,
				z: m,
				vm: y
			},
			ggirInvalid5s: A,
			ggirNonwear5s: M,
			firstTsMs: "number" == typeof l?.firstTsMs ? l.firstTsMs : 0,
			numGaps: "number" == typeof l?.numGaps ? l.numGaps : 0,
			samplesAdded: "number" == typeof l?.samplesAdded ? l.samplesAdded : 0,
			calibration: he(l?.calibration)
		}, [
			u.buffer,
			d.buffer,
			_.buffer,
			w.buffer,
			b.buffer,
			v.buffer,
			A.buffer,
			M.buffer,
			p.buffer,
			f.buffer,
			m.buffer,
			y.buffer
		]);
	},
	async detectDetachFromAccelerationG(e, n) {
		const t = await Me(), r = new Uint8Array(t.detectDetachFromAccelerationG(e, n));
		return g(r, [r.buffer]);
	},
	runFullPipelineV1: async (e, n, t, r, a) => function(e, n, t, r, a, i) {
		const o = e.runFullPipelineV1({
			contractVersion: we,
			semanticProfile: be,
			signal: {
				x: n,
				y: t,
				z: r,
				sampleRateHz: a,
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
		return o ? {
			result: (s = o.result, {
				metadata: {
					sampleRateHz: s.metadata.sampleRateHz,
					startTsEpochSec: s.metadata.startTsEpochMs / 1e3,
					ws3: s.metadata.ws3,
					nEpochs: s.metadata.nEpochs,
					nMidnights: s.metadata.nMidnights,
					nNights: s.metadata.nNights,
					nonwearFraction: ve(s.metadata.nonwearFraction)
				},
				days: s.days.map((e) => ({
					calendarDate: e.calendarDate,
					dayNumber: e.dayNumber,
					validHours: ve(e.validHours),
					nonwearHours: ve(e.nonwearHours),
					totalEpochs: e.totalEpochs,
					sedentaryMinutes: ve(e.sedentaryMinutes),
					lightMinutes: ve(e.lightMinutes),
					moderateMinutes: ve(e.moderateMinutes),
					vigorousMinutes: ve(e.vigorousMinutes),
					mvpaMinutes: ve(e.mvpaMinutes),
					l5ValueMg: ve(e.l5ValueMg),
					l5OnsetEpoch: e.l5OnsetEpoch,
					m5ValueMg: ve(e.m5ValueMg),
					m5OnsetEpoch: e.m5OnsetEpoch,
					l5MidpointHour: ve(e.l5MidpointHour),
					m5MidpointHour: ve(e.m5MidpointHour),
					igGradient: ve(e.igGradient),
					igIntercept: ve(e.igIntercept),
					igRsquared: ve(e.igRsquared),
					fragTpIn2ac: ve(e.fragTpIn2ac),
					fragTpAc2in: ve(e.fragTpAc2in),
					nFragments: e.nFragments,
					nightNumber: e.nightNumber,
					tstMinutes: Se(e.tstMinutes),
					wasoMinutes: Se(e.wasoMinutes),
					sleepEfficiency: Se(e.sleepEfficiency),
					numberOfAwakenings: e.numberOfAwakenings,
					sptDurationHours: Se(e.sptDurationHours),
					cleaningCode: e.cleaningCode,
					includeDayCriterionHours: ve(e.includeDayCriterionHours),
					meetsIncludeDayCriterion: e.meetsIncludeDayCriterion
				}))
			}),
			execution: o.execution,
			provenance: o.provenance
		} : null;
		var s;
	}(await Me(), e, n, t, r, a),
	getComputeIdentity: async () => function(e, n) {
		if (!/^[0-9a-f]{64}$/.test(n)) throw new Error("Actours WASM artifact identity is unavailable or invalid; refusing to attest this runtime");
		const t = "object" == typeof e && null !== e ? e : {}, r = (e, n) => {
			const t = e[n];
			if ("string" != typeof t || 0 === t.length) throw new Error(`Actours capability ${n} must be a non-empty string`);
			return t;
		}, a = r(t, "contractVersion");
		if (a !== we) throw new Error(`Unsupported Actours compute contract ${a}; expected ${we}`);
		const i = r(t, "crateVersion"), o = t.sourceRevision;
		if (null !== o && ("string" != typeof o || 0 === o.length)) throw new Error("Actours capability sourceRevision must be null or a non-empty string");
		const s = t.compiledFeatures;
		if (!Array.isArray(s) || !s.every((e) => "string" == typeof e && e.length > 0)) throw new Error("Actours capability compiledFeatures must be an array of non-empty strings");
		const c = r("object" == typeof t.execution && null !== t.execution ? t.execution : {}, "target");
		if ("wasm" !== c) throw new Error(`Unsupported Actours execution target ${c}; expected wasm`);
		if (!(Array.isArray(t.semanticProfiles) ? t.semanticProfiles : []).includes(be)) throw new Error(`Actours capability does not provide required semantic profile ${be}`);
		const l = r(t, "profileProofStatus");
		if ("proof_pending" !== l) throw new Error(`Unsupported Actours profile proof status ${l}; expected proof_pending`);
		const u = r(t, "temporalBasis");
		if ("utc" !== u) throw new Error(`Unsupported Actours temporal basis ${u}; expected utc`);
		return {
			contractVersion: a,
			crateVersion: i,
			sourceRevision: o,
			artifactSha256: n,
			compiledFeatures: s,
			target: c,
			semanticProfile: be,
			profileProofStatus: l,
			temporalBasis: u
		};
	}((await Me()).getComputeCapabilitiesV1(), "8319aec719fb180b798cc15d19d26f4f661b3d627f2eaca8555cb7cf0f921b34"),
	runGgirFromEpoch: async (e, n, t, r, a, i) => (await Me()).runGgirFromEpoch({
		anglez: e,
		enmo: n,
		sampleRateHz: t,
		startTsEpochSec: r,
		...a ? { invalid: a } : {}
	}, {
		ws3: 5,
		...i ? { timezone: i } : {}
	}),
	async resolveTimezone(e) {
		const n = await Me();
		if ("function" != typeof n.resolveTimezone) throw new Error("resolveTimezone: current actours WASM bundle does not export timezone resolution");
		return n.resolveTimezone(e);
	},
	async readGgirMeta(e) {
		const n = await Me();
		if ("function" != typeof n.readGgirMeta) throw new Error("readGgirMeta: current actours WASM bundle does not export GGIR RData import");
		const t = n.readGgirMeta(e), r = "object" == typeof t && null !== t ? t : null, a = r ? xe(r.timestampsMs) : null, i = r ? xe(r.enmo5s) : null, o = r ? xe(r.anglez5s) : null, s = r ? xe(r.anglex5s) : null, c = r ? xe(r.angley5s) : null, l = r ? ke(r.invalidShort) : null, u = r ? ke(r.nonwearShort) : null, d = r ? ke(r.part3Sib5s) : null, p = r ? xe(r.anglez5sImputed) : null, f = r ? xe(r.enmo5sImputed) : null, m = r?.part3SptNights, y = Array.isArray(m) ? m : null;
		if (!(a && i && o && l && u)) throw new Error(`readGgirMeta: unexpected WASM return shape — got ${JSON.stringify(t)}`);
		const h = "number" == typeof r?.epochSeconds ? r.epochSeconds : 5, _ = "number" == typeof r?.longEpochSeconds ? r.longEpochSeconds : 900, w = "number" == typeof r?.nShort ? r.nShort : i.length, b = "number" == typeof r?.nLong ? r.nLong : 0, v = "string" == typeof r?.desiredtz ? r.desiredtz : void 0, S = r?.inspection, A = "number" == typeof S?.dformc ? S.dformc : void 0;
		return g({
			...v ? { desiredtz: v } : {},
			...null != A ? { dataFormat: A } : {},
			timestampsMs: a,
			enmo5s: i,
			anglez5s: o,
			...s ? { anglex5s: s } : {},
			...c ? { angley5s: c } : {},
			invalidShort: l,
			nonwearShort: u,
			...d ? { part3Sib5s: d } : {},
			...p ? { anglez5sImputed: p } : {},
			...f ? { enmo5sImputed: f } : {},
			...y ? { part3SptNights: y } : {},
			epochSeconds: h,
			longEpochSeconds: _,
			nShort: w,
			nLong: b
		}, [
			a.buffer,
			i.buffer,
			o.buffer,
			...s ? [s.buffer] : [],
			...c ? [c.buffer] : [],
			l.buffer,
			u.buffer,
			...d ? [d.buffer] : [],
			...p ? [p.buffer] : [],
			...f ? [f.buffer] : []
		]);
	},
	identifyGgirRData: async (e) => (await Me()).identifyGgirRData(e),
	ggirConfigValues: async (e) => function(e) {
		if ("object" != typeof e || null === e) throw new Error("actours returned invalid GGIR config values");
		const n = e, t = (e, t) => {
			const r = n[e] ?? null;
			if (null !== r && typeof r !== t) throw new Error(`actours returned an invalid GGIR config value ${e}`);
			return r;
		};
		return {
			desiredTz: t("desiredTz", "string"),
			configTz: t("configTz", "string"),
			imputeTimegaps: t("imputeTimegaps", "boolean"),
			logLocation: t("logLocation", "string")
		};
	}((await Me()).ggirConfigValues(e)),
	async reviewGgirResults(e) {
		const n = (await Me()).reviewGgirResults(e.part1, e.configCsv, e.ms2, e.ms3, e.ms4, e.ms5, e.sleeplogRData, e.sleeplogCsv, e.recordingId, e.edits, e.crossCheck);
		return g(n, [n.sib.buffer, n.invalid.buffer]);
	},
	async scoreGgirSib(e, n, t) {
		const r = (await Me()).scoreGgirSib(e, n, t);
		if ("object" != typeof r || null === r || !r.sadeh_ggir || !r.ck_ggir) throw new Error(`scoreGgirSib: unexpected WASM return shape — got ${JSON.stringify(r)}`);
		const a = r, i = new Uint8Array(a.sadeh_ggir), o = new Uint8Array(a.ck_ggir);
		return g({
			sadeh_ggir: i,
			ck_ggir: o
		}, [i.buffer, o.buffer]);
	},
	async scoreGgirHasib(e) {
		const n = (await Me()).scoreGgirHasib(e);
		if (!(n instanceof Uint8Array)) throw new Error("scoreGgirHasib: unexpected WASM return shape — expected Uint8Array, got " + typeof n);
		const t = new Uint8Array(n);
		return g(t, [t.buffer]);
	},
	async scoreGgirHasibVariant(e, n, t) {
		const r = Oe(await Me(), e, n, t);
		return g(r, [r.sib.buffer]);
	},
	async runGgirPart3(e) {
		const n = (await Me()).runGgirPart3(e), t = "object" == typeof n && null !== n ? n : null, r = t ? ke(t.part3Sib5s) : null, a = t?.part3SptNights;
		if (!r || !Array.isArray(a)) throw new Error("runGgirPart3: unexpected WASM return shape — got " + typeof n);
		return g({
			part3Sib5s: r,
			part3SptNights: a
		}, [r.buffer]);
	},
	async detectGgirHasptVariant(e) {
		const n = function(e, n) {
			if ("object" != typeof e || null === e) throw new Error("detectGgirHasptVariant: unexpected WASM return shape — got " + typeof e);
			const t = e, r = ke(t.nomov), a = xe(t.rollingMedian);
			if (!r || !a) throw new Error(`detectGgirHasptVariant: missing output arrays — got ${JSON.stringify(e)}`);
			return {
				algo: "string" == typeof t.algo ? t.algo : n,
				guider: "string" == typeof t.guider ? t.guider : "",
				startEpoch: "number" == typeof t.startEpoch ? t.startEpoch : null,
				endEpoch: "number" == typeof t.endEpoch ? t.endEpoch : null,
				threshold: "number" == typeof t.threshold ? t.threshold : NaN,
				nomov: r,
				rollingMedian: a
			};
		}((await Me()).detectGgirHasptVariant(e), e.algo);
		return g(n, [n.nomov.buffer, n.rollingMedian.buffer]);
	},
	async scoreAllDays(e) {
		const n = (await Me()).scoreAllDays(e);
		if (!Array.isArray(n)) throw new Error("scoreAllDays: expected array from WASM, got " + typeof n);
		const t = (e) => e instanceof Uint8Array || Array.isArray(e), r = n[0];
		if (n.length > 0 && ("object" != typeof r || null === r || !t(r.sadeh_actilife) || !t(r.nonwear))) throw new Error(`scoreAllDays: unexpected element shape — got ${JSON.stringify(r)}`);
		const a = n.map((e) => ({
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
