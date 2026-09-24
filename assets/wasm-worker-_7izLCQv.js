/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const e = Symbol("Comlink.proxy"), n = Symbol("Comlink.endpoint"), t = Symbol("Comlink.releaseProxy"), r = Symbol("Comlink.finalizer"), a = Symbol("Comlink.thrown"), o = (e) => "object" == typeof e && null !== e || "function" == typeof e, i = /* @__PURE__ */ new Map([["proxy", {
	canHandle: (n) => o(n) && n[e],
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
		}), m(e, n, [], void 0);
	}(e))
}], ["throw", {
	canHandle: (e) => o(e) && a in e,
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
function s(n, t = globalThis, o = ["*"]) {
	t.addEventListener("message", function i(l) {
		if (!l || !l.data) return;
		if (!function(e, n) {
			for (const t of e) {
				if (n === t || "*" === t) return !0;
				if (t instanceof RegExp && t.test(n)) return !0;
			}
			return !1;
		}(o, l.origin)) return void console.warn(`Invalid origin '${l.origin}' for comlink proxy`);
		const { id: u, type: d, path: p } = Object.assign({ path: [] }, l.data), m = (l.data.argumentList || []).map(h);
		let f;
		try {
			const t = p.slice(0, -1).reduce((e, n) => e[n], n), r = p.reduce((e, n) => e[n], n);
			switch (d) {
				case "GET":
					f = r;
					break;
				case "SET":
					t[p.slice(-1)[0]] = h(l.data.value), f = !0;
					break;
				case "APPLY":
					f = r.apply(t, m);
					break;
				case "CONSTRUCT":
					f = function(n) {
						return Object.assign(n, { [e]: !0 });
					}(new r(...m));
					break;
				case "ENDPOINT":
					{
						const { port1: e, port2: t } = new MessageChannel();
						s(n, t), f = _(e, [e]);
					}
					break;
				case "RELEASE":
					f = void 0;
					break;
				default: return;
			}
		} catch (y) {
			f = {
				value: y,
				[a]: 0
			};
		}
		Promise.resolve(f).catch((e) => ({
			value: e,
			[a]: 0
		})).then((e) => {
			const [a, o] = g(e);
			t.postMessage(Object.assign(Object.assign({}, a), { id: u }), o), "RELEASE" === d && (t.removeEventListener("message", i), c(t), r in n && "function" == typeof n[r] && n[r]());
		}).catch((e) => {
			const [n, r] = g({
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
function m(e, r, a = [], o = function() {}) {
	let i = !1;
	const s = new Proxy(o, {
		get(n, o) {
			if (l(i), o === t) return () => {
				(function(e) {
					p && p.unregister(e);
				})(s), u(e), r.clear(), i = !0;
			};
			if ("then" === o) {
				if (0 === a.length) return { then: () => s };
				const n = w(e, r, {
					type: "GET",
					path: a.map((e) => e.toString())
				}).then(h);
				return n.then.bind(n);
			}
			return m(e, r, [...a, o]);
		},
		set(n, t, o) {
			l(i);
			const [s, c] = g(o);
			return w(e, r, {
				type: "SET",
				path: [...a, t].map((e) => e.toString()),
				value: s
			}, c).then(h);
		},
		apply(t, o, s) {
			l(i);
			const c = a[a.length - 1];
			if (c === n) return w(e, r, { type: "ENDPOINT" }).then(h);
			if ("bind" === c) return m(e, r, a.slice(0, -1));
			const [u, d] = f(s);
			return w(e, r, {
				type: "APPLY",
				path: a.map((e) => e.toString()),
				argumentList: u
			}, d).then(h);
		},
		construct(n, t) {
			l(i);
			const [o, s] = f(t);
			return w(e, r, {
				type: "CONSTRUCT",
				path: a.map((e) => e.toString()),
				argumentList: o
			}, s).then(h);
		}
	});
	return function(e, n) {
		const t = (d.get(n) || 0) + 1;
		d.set(n, t), p && p.register(e, n, e);
	}(s, e), s;
}
function f(e) {
	const n = e.map(g);
	return [n.map((e) => e[0]), (t = n.map((e) => e[1]), Array.prototype.concat.apply([], t))];
	var t;
}
const y = /* @__PURE__ */ new WeakMap();
function _(e, n) {
	return y.set(e, n), e;
}
function g(e) {
	for (const [n, t] of i) if (t.canHandle(e)) {
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
function h(e) {
	switch (e.type) {
		case "HANDLER": return i.get(e.name).deserialize(e.value);
		case "RAW": return e.value;
	}
}
function w(e, n, t, r) {
	return new Promise((a) => {
		const o = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		n.set(o, a), e.start && e.start(), e.postMessage(Object.assign({ id: o }, t), r);
	});
}
const b = "smart", S = "webster", v = {
	diary: "diary",
	hdcza: "hdcza",
	l5: "l5",
	selected_scorer_first_last: "selected_scorer_first_last",
	selected_scorer_longest_bout: "selected_scorer_longest_bout",
	quiet_bout: "quiet_bout",
	event_marker: "event_marker",
	actiware_rest_interval: "actiware_rest_interval",
	none: "none"
}, A = v.diary, M = v.hdcza, E = v.l5, x = v.selected_scorer_first_last, k = v.selected_scorer_longest_bout, I = v.quiet_bout, C = v.event_marker, T = v.actiware_rest_interval, N = v.none, z = "use_source_a", F = {
	sourceA: "hdcza",
	sourceB: "selected_scorer_first_last",
	fusionPolicy: "source_b_bounded_by_source_a",
	mergeGapMinutes: 45,
	paddingMinutes: 0,
	minOverlapJaccard: .5,
	applyNonwearGate: !1
}, U = {
	[A]: "Diary",
	[M]: "HDCZA SPT",
	[E]: "L5 least active 5h",
	[x]: "Selected scorer first-last sleep",
	[k]: "Selected scorer longest sleep bout",
	[I]: "Quiet-bout least-active window",
	[C]: "Event markers (button presses)",
	[T]: "Actiware rest interval",
	[N]: "None"
};
function O(e) {
	const n = e ?? {};
	return {
		...F,
		sourceA: n.sourceA ?? n.source_a ?? F.sourceA,
		sourceB: n.sourceB ?? n.source_b ?? F.sourceB,
		fusionPolicy: n.fusionPolicy ?? n.fusion_policy ?? F.fusionPolicy,
		mergeGapMinutes: n.mergeGapMinutes ?? n.merge_gap_minutes ?? F.mergeGapMinutes,
		paddingMinutes: n.paddingMinutes ?? n.padding_minutes ?? F.paddingMinutes,
		minOverlapJaccard: n.minOverlapJaccard ?? n.min_overlap_jaccard ?? F.minOverlapJaccard,
		applyNonwearGate: n.applyNonwearGate ?? n.apply_nonwear_gate ?? F.applyNonwearGate
	};
}
Object.values(v).map((e) => ({
	value: e,
	label: U[e]
}));
const R = [
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
], W = ([
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
].map((e) => e.id), R.map((e) => e.id), [{
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
	const t = e.segmentSeparator, r = e.segments, a = n.split(t), o = r.findIndex((e) => !0 === e.greedy);
	let i, s;
	if (o >= 0) {
		const e = r.length - o - 1;
		if (a.length < r.length) return null;
		s = a.slice(0, o).map((e) => [e]), s.push(a.slice(o, a.length - e));
		for (const n of a.slice(a.length - e)) s.push([n]);
		i = r;
	} else {
		const e = r.flatMap((e, n) => !0 === e.optional ? [n] : []), n = r.length - a.length;
		if (n < 0 || n > e.length) return null;
		const t = new Set(e.slice(e.length - n));
		i = r.filter((e, n) => !t.has(n)), s = a.map((e) => [e]);
	}
	const c = {};
	for (let l = 0; l < i.length; l += 1) {
		const e = i[l], n = s[l];
		if (void 0 === e || void 0 === n) return null;
		let r = n.join(t);
		if (void 0 === e.literalValue) {
			if (void 0 !== e.tagPrefix) {
				if (!r.startsWith(e.tagPrefix)) return null;
				r = r.slice(e.tagPrefix.length);
			}
			if (0 === r.length) return null;
			if (void 0 !== e.valueEnumerationId) {
				const n = W[e.valueEnumerationId]?.[r];
				if (void 0 === n) return null;
				for (const [e, t] of Object.entries(n)) c[e] = t;
			}
			c[e.segmentRole] = r;
		} else if (r !== e.literalValue) return null;
	}
	return c;
}
P.filter((e) => "planner_output_cell" === e.cellRole).map((e) => `${e.segments[0]?.literalValue ?? ""}${e.segmentSeparator}`).filter((e, n, t) => t.indexOf(e) === n).sort();
const D = { family: "unknown" };
function j(e, n) {
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
const L = R.filter((e) => "sleep_wake" === e.kind).map((e) => ({
	id: e.id,
	displayGrid: e.displayGrid,
	execution: e.execution,
	requiredSignal: e.requiredSignal,
	family: e.family
})), B = new Map(L.map((e) => [e.id, e]));
function H(e) {
	if (!e) return !1;
	const n = B.get(e);
	return n ? "angle_spt" === n.execution : "angle_hasib" === function(e) {
		if ("string" != typeof e || 0 === e.length) return D;
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
		if (null === n) return D;
		const t = n.values;
		switch (n.grammarId) {
			case "count_cell": {
				const e = j(t, "method_family"), n = j(t, "count_family"), r = j(t, "axis"), a = j(t, "epoch_seconds");
				if (void 0 === e || void 0 === n || void 0 === r || void 0 === a) return D;
				const o = j(t, "implementation_variant");
				return {
					family: "count_hasib",
					scorer: e,
					...void 0 !== o ? { provenance: o } : {},
					countSource: n,
					signalAxis: r,
					epoch: a
				};
			}
			case "angle_cell": {
				const e = j(t, "method_family"), n = j(t, "epoch_seconds");
				return void 0 === e || void 0 === n ? D : {
					family: "angle_hasib",
					scorer: e,
					signalAxis: "anglez",
					epoch: n
				};
			}
			case "model_cell": {
				const e = j(t, "model_slug"), n = j(t, "preset_slug");
				return void 0 === e || void 0 === n ? D : {
					family: "lstm",
					lstmModel: e,
					lstmThreshold: n
				};
			}
			case "consensus_cell": {
				const e = j(t, "strategy"), n = j(t, "epoch_seconds");
				return void 0 === e || void 0 === n ? D : {
					family: "consensus",
					consensusStrategy: e,
					epoch: n
				};
			}
			default: return D;
		}
	}(e).family;
}
new Map([...L].reverse().flatMap((e) => e.family ? [[e.family, e]] : [])), Math.max(...G.map((e) => 86400 / e.epochSeconds * 3));
const V = "diary", $ = "none", J = new Set(Object.values({
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
function X(e) {
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
function K(e) {
	if (e.sleepPeriodDetection && !function(e) {
		const n = F;
		return e.sourceA === n.sourceA && e.sourceB === n.sourceB && e.fusionPolicy === n.fusionPolicy && e.mergeGapMinutes === n.mergeGapMinutes && e.paddingMinutes === n.paddingMinutes && e.minOverlapJaccard === n.minOverlapJaccard && e.applyNonwearGate === n.applyNonwearGate;
	}(O(e.sleepPeriodDetection))) {
		const n = function(e) {
			const n = O(e);
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
				return t("lstm_sleep_wake" === (r = n.algorithm) ? "selected_scorer_longest_bout" : H(r) ? "hdcza" : "l5");
			default: return;
		}
		var r;
	}(n, {
		algorithm: e.algorithm ?? null,
		hasDiary: t
	});
}
function Z(e) {
	const n = { ruleset: H(e.algorithm) ? "ggir_part4" : e.ruleset ?? "legacy" };
	if (e.algorithm && J.has(e.algorithm) && (n.classifier = e.algorithm), null != e.epochLengthSeconds && (n.epoch_length_seconds = e.epochLengthSeconds), null != e.onsetMinConsecutiveSleep && (n.onset_min_consecutive_sleep = e.onsetMinConsecutiveSleep), null != e.offsetMinConsecutiveMinutes && (n.offset_min_consecutive_minutes = e.offsetMinConsecutiveMinutes), e.scorerPostprocessing && (n.scorer_postprocessing = e.scorerPostprocessing), e.nonwearDetector && "choi_2011" !== e.nonwearDetector && (n.nonwear_detector = e.nonwearDetector), e.sleepPeriodDetection) {
		const t = O(e.sleepPeriodDetection);
		n.merge_gap_minutes = t.mergeGapMinutes, n.padding_minutes = t.paddingMinutes, n.min_overlap_jaccard = t.minOverlapJaccard;
	}
	const t = K(e);
	return t && (n.detection = t), n;
}
function Q(e) {
	const n = {
		analysis_date: e.analysisDate ?? "",
		epoch_length_seconds: e.epochLengthSeconds ?? 60,
		timestamps: e.timestamps,
		activity_counts: e.activityCounts,
		sleep_scores: e.sleepScores
	};
	e.choiNonwear && (n.choi_nonwear = e.choiNonwear), e.ggirInvalid && (n.ggir_invalid = Array.from(e.ggirInvalid)), e.ggirHasptAlgo && (n.ggir_haspt_algo = e.ggirHasptAlgo), e.ggirDiaryHasBedlog && (n.ggir_diary_has_bedlog = !0), e.ggirDiaryHasSleeplog && (n.ggir_diary_has_sleeplog = !0), e.sensorNonwear && e.sensorNonwear.length > 0 && (n.sensor_nonwear = e.sensorNonwear.map((e) => ({
		start_ts: e.startTimestamp,
		end_ts: e.endTimestamp
	}))), null != e.diaryOnsetTime && (n.diary_onset_time = e.diaryOnsetTime), null != e.diaryWakeTime && (n.diary_wake_time = e.diaryWakeTime), null != e.diaryBedTime && (n.diary_in_bed_time = e.diaryBedTime), null != e.diaryOutBedTime && (n.diary_out_bed_time = e.diaryOutBedTime);
	const t = X(e.diaryNaps);
	t.length > 0 && (n.diary_naps = t);
	const r = Y(e.diaryNonwear);
	return r.length > 0 && (n.diary_nonwear = r), e.hdczaWindow && (n.hdcza_window = [e.hdczaWindow.startTimestamp, e.hdczaWindow.endTimestamp]), e.eventMarkerTimestamps && e.eventMarkerTimestamps.length > 0 && (n.event_marker_timestamps = Array.from(e.eventMarkerTimestamps)), e.actiwareRestWindow && (n.actiware_rest_window = [e.actiwareRestWindow.startTimestamp, e.actiwareRestWindow.endTimestamp]), null != e.nightStartHour && (n.night_start_hour = e.nightStartHour), null != e.nightEndHour && (n.night_end_hour = e.nightEndHour), n;
}
function ee(e) {
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
	const t = X(e.diaryNaps);
	t.length > 0 && (n.diary_naps = t);
	const r = Y(e.diaryNonwear);
	return r.length > 0 && (n.diary_nonwear = r), n;
}
function ne(e) {
	return e && 0 !== e.length ? e.map(([e, n]) => [e, n]) : null;
}
let te = null;
const re = /unreachable|RuntimeError|out of bounds|wasm/i, ae = /* @__PURE__ */ new WeakSet();
async function oe() {
	const e = await async function(e) {
		if (!0 !== (n = e.scope).pinnedSingleThread && n.sharedArrayBuffer && n.crossOriginIsolated && n.cores > 1) {
			let n;
			try {
				const t = await e.loadThreaded();
				if (n = t, ae.has(t)) throw new Error("thread pool start was abandoned earlier in this worker");
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
				void 0 !== n && ae.add(n), e.warn("[wasm] threaded runtime unavailable, using the single-thread package", r);
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
		loadThreaded: () => import("./actours-C94W5321.js"),
		loadSingle: () => import("./actours-FB4c7KK0.js"),
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
function ie(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function se(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function ce(e) {
	const n = se(e), t = n?.analysis_date, r = se(n?.intrinsic), a = r?.state;
	if (!n || "string" != typeof t || 0 === t.length || !r || "string" != typeof a || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(a)) return null;
	const o = r.score, i = r.verdict, s = r.infinite_reason, c = {}, l = [], u = n.per_guider;
	if (Array.isArray(u)) for (const y of u) {
		const e = se(y);
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
	const d = se(r.features), p = d && Array.isArray(d.feature_values) ? d : null, m = se(r.legacy_complexity_features) ?? (null === p ? d : null) ?? {}, f = n.computed_at;
	return {
		difficulty: "number" == typeof o && Number.isFinite(o) ? o : null,
		state: a,
		verdict: "string" == typeof i ? i : null,
		infiniteReason: "string" == typeof s ? s : null,
		confidenceByGuider: c,
		features: m,
		featureVector: p,
		perGuider: l,
		computedAt: "string" == typeof f ? f : null,
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
const le = [
	"skipped_disabled",
	"recalibrated",
	"identity_fallback_no_valid_fit",
	"identity_fallback_error_increased",
	"candidate_retained_below_preferred_quality"
];
function ue(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function de(e, n) {
	const t = Array.isArray(e) ? e : [], r = (e) => ue(t[e]) ?? n;
	return [
		r(0),
		r(1),
		r(2)
	];
}
function pe(e, n) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		scale: de(t.scale, n ? 1 : 0),
		offset: de(t.offset, 0),
		temperatureOffset: de(t.temperatureOffset, 0),
		errorStart: ue(t.errorStart),
		errorEnd: ue(t.errorEnd),
		fitAttempted: !0 === t.fitAttempted,
		numPoints: Math.max(0, Math.round(ue(t.numPoints) ?? 0)),
		hoursUsed: ue(t.hoursUsed) ?? 0,
		success: !0 === t.success,
		message: "string" == typeof t.message ? t.message : ""
	};
}
function me(e) {
	if ("object" != typeof e || null === e) return null;
	const n = e, t = n.disposition;
	if ("string" != typeof t || !le.includes(t)) return null;
	const r = pe(n, !0);
	return {
		...r,
		disposition: t,
		observed: "observed" in n ? pe(n.observed, !0) : r,
		applied: "applied" in n ? pe(n.applied, !0) : r
	};
}
const fe = 1073741824, ye = "actours.compute.v1", _e = "actours-corrected-3.3.7-v2";
function ge(e) {
	return "number" == typeof e ? e : "nan" === e ? NaN : "positive_infinity" === e ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
}
function he(e) {
	return null === e ? null : ge(e);
}
let we = null;
function be() {
	return we || (we = (async () => {
		const { mod: e, runtime: n } = await oe();
		return "configureComputeMemoryBudgetV1" in e && "function" == typeof e.configureComputeMemoryBudgetV1 && e.configureComputeMemoryBudgetV1(function() {
			const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
			if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return fe;
			const n = Math.floor(1024 * e * 1024 * 1024 / 4);
			return Math.min(2147483648, Math.max(fe, n));
		}()), e;
	})().catch((e) => {
		throw we = null, e;
	})), we;
}
function Se(e, n = "computeMimsUnit") {
	if ("object" != typeof e || null === e) throw new Error(`${n}: unexpected WASM return shape — got ${typeof e}`);
	const t = e, r = ve(t.mimsUnit);
	if (!r) throw new Error(`${n}: missing mimsUnit array — got ${JSON.stringify(e)}`);
	const a = t.epochSeconds;
	if ("number" != typeof a || !Number.isFinite(a) || a <= 0) throw new Error(`${n}: missing positive epochSeconds — got ${JSON.stringify(e)}`);
	const o = (e) => ve(t[e]) ?? void 0, i = {
		mimsUnit: r,
		epochSeconds: a
	}, s = o("mimsUnitX");
	s && (i.mimsUnitX = s);
	const c = o("mimsUnitY");
	c && (i.mimsUnitY = c);
	const l = o("mimsUnitZ");
	l && (i.mimsUnitZ = l);
	const u = o("headerTimeStamp");
	u && (i.headerTimeStamp = u);
	const d = o("mimsOrientationTimestamp");
	d && (i.mimsOrientationTimestamp = d);
	const p = o("mimsOrientationXAngle");
	p && (i.mimsOrientationXAngle = p);
	const m = o("mimsOrientationYAngle");
	m && (i.mimsOrientationYAngle = m);
	const f = o("mimsOrientationZAngle");
	return f && (i.mimsOrientationZAngle = f), i;
}
function ve(e) {
	if (e instanceof Float64Array) return new Float64Array(e);
	if (ArrayBuffer.isView(e)) {
		const n = e;
		if ("number" == typeof n.length) return new Float64Array(Array.from(n, Number));
	}
	return Array.isArray(e) ? new Float64Array(e) : null;
}
function Ae(e) {
	if (e instanceof Uint8Array) return new Uint8Array(e);
	if (ArrayBuffer.isView(e)) {
		const n = e;
		if ("number" == typeof n.length) return new Uint8Array(Array.from(n, Number));
	}
	return Array.isArray(e) ? new Uint8Array(e) : null;
}
function Me(e, n) {
	if ("object" != typeof e || null === e) throw new Error(`${n}: unexpected WASM return shape — got ${JSON.stringify(e)}`);
	const t = e, r = {}, a = [];
	for (const o of Object.keys(t)) {
		const e = t[o];
		if (Array.isArray(e)) {
			const n = new Float64Array(e);
			r[o] = n, a.push(n.buffer);
		} else r[o] = e;
	}
	return _(r, a);
}
function Ee(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
const xe = {
	day_summaries: [],
	days_with_signal: 0
};
function ke(e, n) {
	const t = "object" == typeof e && null !== e ? e : {}, r = t.nonwear, a = r instanceof Uint8Array ? r : null, o = t.element_seconds, i = "number" == typeof o && Number.isFinite(o) && o > 0 ? o : n, s = Boolean(t.available) && null !== a, c = t.reason;
	return {
		nonwear: s ? a : null,
		conformance: "string" == typeof t.conformance ? t.conformance : s ? "conformant" : "unavailable",
		available: s,
		reason: "string" == typeof c ? c : null,
		elementSeconds: i
	};
}
function Ie(e, n, t, r) {
	const a = t.epochSeconds, o = {}, i = (e) => ({
		nonwear: null,
		conformance: "unavailable",
		available: !1,
		reason: e,
		elementSeconds: a
	}), s = e.detectNonwearUnifiedBatchTyped;
	if ("function" != typeof s) {
		console.warn("[wasm-worker] detectNonwearUnifiedBatchTyped export missing — degrading to unavailable.");
		for (const e of n) o[e] = i("detectNonwearUnifiedBatchTyped export missing (stale WASM bundle)");
		return o;
	}
	try {
		const e = s(JSON.stringify(n), JSON.stringify(r ?? null), t.counts ?? /* @__PURE__ */ new Float64Array(), t.raw ?? /* @__PURE__ */ new Float64Array(), t.temperature ?? /* @__PURE__ */ new Float64Array(), t.epochSeconds, t.sampleRate ?? 0);
		for (const t of n) o[t] = ke(e.results.find((e) => e.algorithm === t), a);
	} catch {
		console.warn("[wasm-worker] detectNonwearUnifiedBatchTyped failed — degrading to unavailable.");
		for (const e of n) o[e] = i("detectNonwearUnifiedBatchTyped failed");
	}
	return o;
}
"undefined" != typeof self && "undefined" == typeof window && (function() {
	const e = console.error.bind(console);
	console.error = (...n) => {
		try {
			const t = n.map((e) => "string" == typeof e ? e : e instanceof Error ? e.stack ?? e.message : String(e)).join(" ");
			if (/panicked at|RuntimeError|unreachable/i.test(t)) {
				const n = /([A-Za-z0-9_.-]+\.rs):(\d+)/.exec(t);
				te = n ? `Rust trap at ${n[1]}:${n[2]}` : "Rust runtime trap", e("[wasm-worker] WASM runtime trap captured");
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
			te = null;
			try {
				return await a(...e);
			} catch (n) {
				const e = n instanceof Error ? n.message : String(n);
				if (te && re.test(e)) throw new Error(`WASM panic in ${t}(): ${te}`, { cause: n });
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
			return Ie(e, [n.algorithm], n.signals, n.config)[n.algorithm];
		}(await be(), e);
		return _(n, n.nonwear ? [n.nonwear.buffer] : []);
	},
	async detectNonwearUnifiedBatch(e, n) {
		const t = Ie(await be(), e, n);
		return _(t, Object.values(t).flatMap((e) => e.nonwear ? [e.nonwear.buffer] : []));
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
			let o;
			try {
				const { signals: e, ...t } = n;
				o = a(JSON.stringify(t), e.counts ?? /* @__PURE__ */ new Float64Array(), e.raw ?? /* @__PURE__ */ new Float64Array(), e.temperature ?? /* @__PURE__ */ new Float64Array(), e.epochSeconds, e.sampleRate ?? 0);
			} catch {
				return console.warn("[wasm-worker] scoreEpochsTyped failed — degrading to unavailable."), r("scoreEpochsTyped failed");
			}
			return function(e, n) {
				const t = "object" == typeof e && null !== e ? e : {}, r = t.sleep_wake, a = r instanceof Uint8Array ? r : null, o = t.element_seconds, i = "number" == typeof o && Number.isFinite(o) && o > 0 ? o : n, s = Boolean(t.available) && null !== a, c = t.reason;
				return {
					sleepWake: s ? a : null,
					conformance: "string" == typeof t.conformance ? t.conformance : s ? "conformant" : "unavailable",
					available: s,
					reason: "string" == typeof c ? c : null,
					elementSeconds: i
				};
			}(o, t);
		}(await be(), e);
		return _(n, n.sleepWake ? [n.sleepWake.buffer] : []);
	},
	async scoreSadeh(e, n) {
		const t = await be(), r = new Uint8Array(t.scoreSadeh(e, n));
		return _(r, [r.buffer]);
	},
	async scoreColeKripke(e, n) {
		const t = await be(), r = new Uint8Array(t.scoreColeKripke(e, n));
		return _(r, [r.buffer]);
	},
	async detectNonwear(e) {
		const n = await be(), t = new Uint8Array(n.detectNonwear(e));
		return _(t, [t.buffer]);
	},
	async detectNonwearChoi2011(e, n = 60) {
		const t = await be(), r = new Uint8Array("function" == typeof t.detectNonwearChoi2011Epoch ? t.detectNonwearChoi2011Epoch(e, n) : t.detectNonwearChoi2011(e));
		return _(r, [r.buffer]);
	},
	parseActigraphCsv: async (e, n) => Me((await be()).parseActigraphCsv(e, n), "parseActigraphCsv"),
	parseGeneactivCsv: async (e) => Me((await be()).parseGeneactivCsv(e), "parseGeneactivCsv"),
	isGeneactivFormat: async (e) => (await be()).isGeneactivFormat(e),
	async csvBufferClear(e) {
		(await be()).csvBufferClear(e);
	},
	async csvBufferAppend(e) {
		(await be()).csvBufferAppend(e);
	},
	parseGeneactivCsvBuffered: async () => Me((await be()).parseGeneactivCsvBuffered(), "parseGeneactivCsvBuffered"),
	parseActigraphCsvBuffered: async (e) => Me((await be()).parseActigraphCsvBuffered(e), "parseActigraphCsvBuffered"),
	async sha256Start() {
		(await be()).sha256StreamStart();
	},
	async sha256Feed(e) {
		(await be()).sha256StreamFeed(e);
	},
	sha256Finish: async () => (await be()).sha256StreamFinish(),
	async streamParseStart(e, n, t = 60) {
		const r = await be();
		"function" == typeof r.streamParseStartWithEpoch ? r.streamParseStartWithEpoch(e, n, t) : r.streamParseStart(e, n);
	},
	async streamParseStartData(e, n) {
		(await be()).streamParseStartData(e, n);
	},
	streamParseFeed: async (e) => (await be()).streamParseFeed(e),
	async streamParseFinish() {
		const e = (await be()).streamParseFinish();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinish: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const n = new Float64Array(e.timestampsMs), t = new Float64Array(e.axisX), r = new Float64Array(e.axisY), a = new Float64Array(e.axisZ), o = new Float64Array(e.vectorMagnitude), i = new Float64Array(e.temperature);
		return _({
			timestampsMs: n,
			axisX: t,
			axisY: r,
			axisZ: a,
			vectorMagnitude: o,
			temperature: i,
			sampleFrequency: e.sampleFrequency,
			headerRowsSkipped: e.headerRowsSkipped
		}, [
			n.buffer,
			t.buffer,
			r.buffer,
			a.buffer,
			o.buffer,
			i.buffer
		]);
	},
	async streamParseFinishChunk() {
		const e = (await be()).streamParseFinishChunk();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinishChunk: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const n = new Float64Array(e.timestampsMs), t = new Float64Array(e.axisX), r = new Float64Array(e.axisY), a = new Float64Array(e.axisZ), o = new Float64Array(e.vectorMagnitude), i = new Float64Array(e.temperature), s = new Uint32Array(e.counts), c = new Uint32Array(e.tempCounts), l = new Float64Array(e.timestampsMs5s), u = new Float64Array(e.enmo5s), d = new Float64Array(e.anglez5s), p = new Float64Array(e.anglex5s ?? 0), m = new Float64Array(e.angley5s ?? 0), f = new Float64Array(e.mad5s ?? 0), y = new Float64Array(e.enmoa5s ?? 0), g = e, h = new Float64Array(g.zcx60s ?? []), w = new Float64Array(g.zcy60s ?? []), b = new Float64Array(g.zcz60s ?? []), S = new Uint32Array(e.counts5s), v = e, A = new Float64Array(v.mimsUnit ?? []), M = new Float64Array(v.mimsUnitX ?? []), E = new Float64Array(v.mimsUnitY ?? []), x = new Float64Array(v.mimsUnitZ ?? []), k = e;
		return _({
			timestampsMs: n,
			axisX: t,
			axisY: r,
			axisZ: a,
			vectorMagnitude: o,
			temperature: i,
			counts: s,
			tempCounts: c,
			timestampsMs5s: l,
			enmo5s: u,
			anglez5s: d,
			anglex5s: p,
			angley5s: m,
			mad5s: f,
			enmoa5s: y,
			zcx60s: h,
			zcy60s: w,
			zcz60s: b,
			counts5s: S,
			mimsUnit: A,
			mimsUnitX: M,
			mimsUnitY: E,
			mimsUnitZ: x,
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
			a.buffer,
			o.buffer,
			i.buffer,
			s.buffer,
			c.buffer,
			l.buffer,
			u.buffer,
			d.buffer,
			p.buffer,
			m.buffer,
			f.buffer,
			y.buffer,
			h.buffer,
			w.buffer,
			b.buffer,
			S.buffer,
			A.buffer,
			M.buffer,
			E.buffer,
			x.buffer
		]);
	},
	async neishabouriCounts(e, n, t, r, a) {
		const o = (await be()).neishabouriCounts(e, n, t, r, a), i = "object" == typeof o && null !== o ? o : null, s = i ? ve(i.x) : null, c = i ? ve(i.y) : null, l = i ? ve(i.z) : null, u = i ? ve(i.vm) : null;
		if (!(s && c && l && u)) throw new Error(`neishabouriCounts: unexpected WASM return shape — got ${JSON.stringify(o)}`);
		return _({
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
		const o = (await be()).zeroCrossingCounts(e, n, t, r, a), i = "object" == typeof o && null !== o ? o : null, s = i ? ve(i.zcx) : null, c = i ? ve(i.zcy) : null, l = i ? ve(i.zcz) : null;
		if (!s || !c || !l) throw new Error(`zeroCrossingCounts: unexpected WASM return shape — got ${JSON.stringify(o)}`);
		return _({
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
		const o = await be();
		if (!("computeMimsUnit" in o) || "function" != typeof o.computeMimsUnit) throw new Error("computeMimsUnit: current actours WASM bundle does not export MIMS_UNIT processing");
		const i = Se(o.computeMimsUnit(e, n, t, r, a), "computeMimsUnit");
		return _(i, [
			i.mimsUnit.buffer,
			i.mimsUnitX?.buffer,
			i.mimsUnitY?.buffer,
			i.mimsUnitZ?.buffer,
			i.headerTimeStamp?.buffer,
			i.mimsOrientationTimestamp?.buffer,
			i.mimsOrientationXAngle?.buffer,
			i.mimsOrientationYAngle?.buffer,
			i.mimsOrientationZAngle?.buffer
		].filter((e) => e instanceof ArrayBuffer));
	},
	async computeMimsUnitDataframe(e, n, t, r, a = {}) {
		const o = await be();
		if (!("computeMimsUnitDataframe" in o) || "function" != typeof o.computeMimsUnitDataframe) throw new Error("computeMimsUnitDataframe: current actours WASM bundle does not export MIMS_UNIT processing");
		const i = Se(o.computeMimsUnitDataframe(e, n, t, r, a), "computeMimsUnitDataframe");
		return _(i, [
			i.mimsUnit.buffer,
			i.mimsUnitX?.buffer,
			i.mimsUnitY?.buffer,
			i.mimsUnitZ?.buffer,
			i.headerTimeStamp?.buffer,
			i.mimsOrientationTimestamp?.buffer,
			i.mimsOrientationXAngle?.buffer,
			i.mimsOrientationYAngle?.buffer,
			i.mimsOrientationZAngle?.buffer
		].filter((e) => e instanceof ArrayBuffer));
	},
	async classifyActimetricPreschoolWristRf(e, n, t, r) {
		const a = await be(), o = "function" == typeof a.classifyActimetricPreschoolWristRfLagLead ? a.classifyActimetricPreschoolWristRfLagLead : "function" == typeof a.classifyActimetricPreschoolWristRf ? a.classifyActimetricPreschoolWristRf : "function" == typeof a.actimetricPreschoolWristRfClasses ? a.actimetricPreschoolWristRfClasses : "function" == typeof a.predictActimetricPreschoolWristRfClasses ? a.predictActimetricPreschoolWristRfClasses : null;
		if (!o) throw new Error("classifyActimetricPreschoolWristRf: current actours WASM bundle does not export actimetric preschool wrist RF inference");
		const i = function(e, n = "classifyActimetricPreschoolWristRf") {
			const t = Ae(e);
			if (t) return {
				classes: t,
				epochSeconds: 15
			};
			const r = "object" == typeof e && null !== e ? e : null, a = r ? Ae(r.classes) ?? Ae(r.activityClasses) ?? Ae(r.predictions) ?? Ae(r.activity) : null;
			if (!a) throw new Error(`${n}: unexpected WASM return shape — expected Uint8Array or { classes }`);
			const o = "number" == typeof r?.epochSeconds && Number.isFinite(r.epochSeconds) ? r.epochSeconds : "number" == typeof r?.epoch_seconds && Number.isFinite(r.epoch_seconds) ? r.epoch_seconds : 15, i = "string" == typeof r?.classifier ? r.classifier : void 0, s = "string" == typeof r?.model ? r.model : void 0;
			return {
				classes: a,
				epochSeconds: o,
				...i ? { classifier: i } : {},
				...s ? { model: s } : {}
			};
		}(o(e, n, t, r), "classifyActimetricPreschoolWristRf");
		return _(i, [i.classes.buffer]);
	},
	async lstmSpectralFeatures30s(e, n, t, r) {
		const a = await be(), o = a.lstmSpectralFeatures30s ?? a.spectralFeatures30s;
		if ("function" != typeof o) throw new Error("LSTM spectral feature extractor is not available in this WASM bundle");
		const i = o(e, n, t, r), s = "object" == typeof i && null !== i ? i : null, c = function(e) {
			if (e instanceof Float32Array) return new Float32Array(e);
			if (ArrayBuffer.isView(e)) {
				const n = e;
				if ("number" == typeof n.length) return new Float32Array(Array.from(n, Number));
			}
			return Array.isArray(e) ? new Float32Array(e) : null;
		}(s?.features ?? i), l = "number" == typeof s?.bins ? s.bins : 30, u = "number" == typeof s?.channels ? s.channels : 4, d = "number" == typeof s?.epochs ? s.epochs : c ? Math.floor(c.length / (l * u)) : 0;
		if (!c || d * l * u !== c.length) throw new Error(`lstmSpectralFeatures30s: unexpected WASM return shape — got ${JSON.stringify(i)}`);
		return _({
			features: c,
			epochs: d,
			bins: l,
			channels: u
		}, [c.buffer]);
	},
	async scoreConsensus(e, n) {
		const t = await be();
		if ("function" != typeof t.scoreConsensusTyped) throw new Error("scoreConsensus is not present in this WASM bundle.");
		const r = new Uint32Array(n.length + 1);
		for (const [s, c] of n.entries()) r[s + 1] = r[s] + c.length;
		const a = 1 === n.length ? n[0] : new Uint8Array(r[n.length]);
		if (1 !== n.length) for (const [s, c] of n.entries()) a.set(c, r[s]);
		const o = t.scoreConsensusTyped(JSON.stringify({ strategy: e }), a, r), i = null != o && "object" == typeof o ? o.consensus : void 0;
		if (!(i instanceof Uint8Array)) throw new Error(`scoreConsensus: unexpected WASM return shape — got ${JSON.stringify(o)}`);
		return _(i, [i.buffer]);
	},
	async computeSleepMetrics(e, n, t) {
		const r = (await be()).computeSleepMetrics(e, n, t);
		if (null == r || "object" != typeof r || "number" != typeof r.totalSleepTimeMinutes || "number" != typeof r.sleepEfficiency) throw new Error(`computeSleepMetrics: unexpected WASM return shape ${JSON.stringify(r)}`);
		return r;
	},
	computeFileDifficulty: async (e) => function(e, n) {
		const t = e.computeNightDifficultyTyped;
		return "function" != typeof t ? (console.warn("[wasm-worker] computeNightDifficulty is not present in this WASM bundle — night difficulty degrades to empty. Rebuild the actours WASM crate to enable it."), { byDate: {} }) : function(e) {
			const n = {}, t = /* @__PURE__ */ new Set(), r = Ee(e)?.results;
			if (!Array.isArray(r)) return { byDate: n };
			for (const a of r) {
				const e = ce(a);
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
	}(await be(), e),
	computeFileSignals: async (e) => function(e, n) {
		const t = e.computeNightSignalsTyped;
		if ("function" != typeof t) return console.warn("[wasm-worker] computeNightSignals is not present in this WASM bundle — night-signal detail degrades to empty."), { byDate: {} };
		const [r, ...a] = n;
		return function(e) {
			const n = {}, t = /* @__PURE__ */ new Set(), r = Ee(e)?.signals;
			if (!Array.isArray(r)) return { byDate: n };
			for (const a of r) {
				const e = Ee(a), r = e?.analysis_date, o = e?.epoch_length_seconds;
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
		}(t(JSON.stringify(function(e) {
			const n = ie(e.config), t = ie(n?.signals) ?? n;
			return {
				...t ? { config: t } : {},
				days: e.days
			};
		}(JSON.parse(r))), ...a));
	}(await be(), e),
	computeCircadian: async (e) => function(e, n) {
		const t = e.computeCircadianTyped;
		if ("function" != typeof t) throw new Error("computeCircadian is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = t(...n);
		return r && "object" == typeof r && Array.isArray(r.day_summaries) ? r : xe;
	}(await be(), e),
	aggregateEpochSeries: async (e) => function(e, n) {
		const t = e.aggregateEpochSeries;
		if ("function" != typeof t) throw new Error("aggregateEpochSeries is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const r = t(n);
		if (null == r || "object" != typeof r) throw new Error("aggregateEpochSeries returned an invalid result.");
		const a = r;
		if (!a.series || !Array.isArray(a.series.timestamps_ms)) throw new Error("aggregateEpochSeries returned an invalid result.");
		return r;
	}(await be(), e),
	async detectDeviceFormat(e, n) {
		const t = (await be()).detectDeviceFormat;
		if ("function" != typeof t) return null;
		try {
			return t(e, n);
		} catch {
			return null;
		}
	},
	async parseEpochSeries(e, n) {
		const t = (await be()).parseEpochSeries;
		if ("function" != typeof t) throw new Error("parseEpochSeries is not present in this WASM bundle.");
		return t(e, n);
	},
	async actiwareIntervals(e, n, t) {
		const r = await be(), a = r.generateActiwareRestIntervals, o = r.actiwareSleepIntervals;
		if ("function" != typeof a || "function" != typeof o) return null;
		if (n.length > 0) {
			const r = o(e, n, t);
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
		const t = (await be()).sleepWakeScores;
		return "function" != typeof t ? null : t(e, n);
	},
	hasParseAw5: async () => "function" == typeof (await be()).parseAw5,
	async parseAw5(e) {
		const n = (await be()).parseAw5;
		return "function" != typeof n ? null : n(e, null);
	},
	async runScoredVariantBatch(e) {
		const n = await be(), t = {}, r = /* @__PURE__ */ new Set();
		let a = 0, o = !1;
		const i = Object.keys(e.classifierOutputs).filter((n) => e.classifierOutputs[n]?.length === e.timestamps.length).sort(), s = new Set(i), c = Object.keys(e.nonwearMasks).filter((n) => null != e.nonwearMasks[n]?.mask).sort(), l = e.variants.filter((n) => {
			if (!s.has(n.classifierConfigId)) return a += 1, !1;
			const t = "none" === n.nonwear ? void 0 : e.nonwearMasks[n.nonwear];
			if ("none" !== n.nonwear && !t?.mask) {
				const e = t?.reason ? ` (${t.reason})` : "";
				r.add(`Nonwear detector "${n.nonwear}" is unavailable for this data — scored without a nonwear mask.${e}`);
			}
			return !0;
		}), u = e.timestamps.length;
		if (0 === u) {
			for (const e of l) t[e.id] = /* @__PURE__ */ new ArrayBuffer(0);
			l.length && r.add("No activity data");
		} else if (l.length) if ("function" != typeof n.placeMarkersBatch) o = !0;
		else {
			const a = new Uint8Array(i.length * u);
			for (const [n, t] of i.entries()) {
				const r = e.classifierOutputs[t];
				if (r.length !== u) throw new Error(`classifier_scores length ${String(r.length)} does not match 1 rows × ${String(u)} epochs`);
				a.set(r, n * u);
			}
			const o = new Uint8Array(c.length * u);
			for (const [n, t] of c.entries()) {
				const r = e.nonwearMasks[t].mask;
				if (r.length !== u) throw new Error(`nonwear_masks length ${String(r.length)} does not match 1 rows × ${String(u)} epochs`);
				o.set(r, n * u);
			}
			const s = function(e) {
				let n;
				if ("variant" in e) {
					const { variant: a, timestamps: o, activityCounts: i, sleepScores: s, analysisDate: c, epochLengthSeconds: l, hdczaWindow: u, diary: d, onsetMinConsecutiveSleep: p, offsetMinConsecutiveMinutes: m, choiNonwear: f, eventMarkerTimestamps: y, actiwareRestWindow: _ } = e, g = a.config.rescoring === S && (r = S) === S ? { preset: r } : void 0;
					n = {
						timestamps: o,
						activityCounts: i,
						sleepScores: s,
						...void 0 !== f ? { choiNonwear: f } : {},
						ruleset: a.config.ruleset,
						...void 0 !== g ? { scorerPostprocessing: g } : {},
						analysisDate: c,
						epochLengthSeconds: l,
						hdczaWindow: u ? {
							startTimestamp: u[0],
							endTimestamp: u[1]
						} : null,
						...y ? { eventMarkerTimestamps: y } : {},
						..._ ? { actiwareRestWindow: _ } : {},
						diaryBedTime: d?.diaryInBedTime ?? null,
						diaryOnsetTime: d?.onsetTime ?? null,
						diaryWakeTime: d?.diaryWakeTime ?? null,
						diaryNaps: ne(d?.naps),
						diaryNonwear: ne(d?.nonwear),
						...void 0 !== p ? { onsetMinConsecutiveSleep: p } : {},
						...void 0 !== m ? { offsetMinConsecutiveMinutes: m } : {},
						...(t = a.config.periodSource, t === V ? { periodGuider: V } : t === $ ? { periodGuider: $ } : { sleepPeriodDetection: {
							sourceA: t,
							sourceB: N,
							fusionPolicy: z,
							applyNonwearGate: !1
						} })
					};
				} else n = e;
				var t, r;
				const a = {
					config: Z(n),
					days: [Q(n), ...(n.contextDays ?? []).filter((e) => e.analysisDate !== (n.analysisDate ?? "")).map(ee)]
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
				], i = o.flatMap((e) => {
					const n = a.days.map((n) => n[e] ?? []), t = new Uint32Array(n.length + 1);
					for (const [a, i] of n.entries()) t[a + 1] = t[a] + i.length;
					const r = "sleep_scores" === e || "choi_nonwear" === e || "detach_nonwear" === e ? Uint8Array : Float64Array, o = 1 === n.length && n[0] instanceof r ? n[0] : new r(t[n.length]);
					if (o !== n[0]) for (const [a, i] of n.entries()) o.set(i, t[a]);
					return [o, t];
				}), s = {
					config: a.config,
					days: a.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !o.includes(e))))
				};
				return [JSON.stringify(s), ...i];
			}({
				...e,
				timestamps: [],
				activityCounts: [],
				sleepScores: [],
				variant: { config: {
					...l[0],
					periodSource: "l5",
					rescoring: "none"
				} }
			}), d = JSON.parse(s[0]), p = d.days[0], m = n.placeMarkersBatch(JSON.stringify({
				...d.config,
				...p,
				classifier_ids: i,
				nonwear_ids: c
			}), Float64Array.from(e.timestamps), Float64Array.from(e.activityCounts), a, o, JSON.stringify(l.map((e) => ({
				id: e.id,
				classifier_index: i.indexOf(e.classifierConfigId),
				nonwear_index: "none" === e.nonwear ? -1 : c.indexOf(e.nonwear),
				ruleset: e.ruleset,
				period_source: e.periodSource,
				rescoring: e.rescoring
			}))));
			for (const e of m.notes) r.add(e);
			for (const [e, n] of l.entries()) t[n.id] = m.masks.slice(e * u, (e + 1) * u).buffer;
		}
		return _({
			masks: t,
			notes: [...r],
			missingClassifier: a,
			placementUnavailable: o
		}, Object.values(t));
	},
	async placeMarkers(e) {
		const n = await be();
		return "function" != typeof n.placeMarkersTyped ? (console.warn("[wasm-worker] placeMarkers is not present in this WASM bundle — local marker placement degrades to null."), null) : n.placeMarkersTyped(...e);
	},
	async placeNonwearMarkers(e) {
		const n = await be();
		return "function" != typeof n.placeNonwearMarkersTyped ? (console.warn("[wasm-worker] placeNonwearMarkers is not present in this WASM bundle — local marker placement degrades to null."), null) : n.placeNonwearMarkersTyped(...e);
	},
	epochRawData: async (e, n, t, r, a) => Me((await be()).epochRawData(e, n, t, r, a), "epochRawData"),
	async epochWithBandpass(e, n, t) {
		const r = (await be()).epochWithBandpass(e, n, t), a = "object" == typeof r && null !== r ? r : null, o = ve(a?.timestamps), i = ve(a?.counts);
		if (!o || !i) throw new Error("epochWithBandpass: unexpected WASM return shape");
		return _({
			timestamps: o,
			counts: i
		}, [o.buffer, i.buffer]);
	},
	async computeEnmo5s(e, n, t, r) {
		const a = await be();
		return new Float64Array(a.computeEnmo5s(e, n, t, r));
	},
	async computeAnglez5s(e, n, t, r) {
		const a = await be();
		return new Float64Array(a.computeAnglez5s(e, n, t, r));
	},
	async processRawXyz(e, n, t, r, a, o) {
		const i = (await be()).processRawXyz(e, n, t, r, a, o ?? void 0), s = "object" == typeof i && null !== i ? i : null, c = s ? ve(s.enmo5s) : null, l = s ? ve(s.anglez5s) : null, u = s ? ve(s.countsX) : null, d = s ? ve(s.countsY) : null, p = s ? ve(s.countsZ) : null, m = s ? ve(s.countsVm) : null;
		if (!(c && l && u && d && p && m)) throw new Error(`processRawXyz: unexpected WASM return shape — got ${JSON.stringify(i)}`);
		const f = (e) => ve(e) ?? /* @__PURE__ */ new Float64Array(0), y = s ? f(s.anglex5s) : /* @__PURE__ */ new Float64Array(0), g = s ? f(s.angley5s) : /* @__PURE__ */ new Float64Array(0), h = s ? f(s.mad5s) : /* @__PURE__ */ new Float64Array(0), w = s ? f(s.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
		return _({
			enmo5s: c,
			anglez5s: l,
			anglex5s: y,
			angley5s: g,
			mad5s: h,
			enmoa5s: w,
			calibration: me(s?.calibration),
			counts: {
				x: u,
				y: d,
				z: p,
				vm: m
			}
		}, [
			c.buffer,
			l.buffer,
			y.buffer,
			g.buffer,
			h.buffer,
			w.buffer,
			u.buffer,
			d.buffer,
			p.buffer,
			m.buffer
		]);
	},
	async processRawXyzImputed(e, n, t, r, a, o, i = 60) {
		const s = await be(), c = "function" == typeof s.processRawXyzImputedWithEpoch ? s.processRawXyzImputedWithEpoch(e, n, t, r, a, o ?? void 0, i) : s.processRawXyzImputed(e, n, t, r, a, o ?? void 0), l = "object" == typeof c && null !== c ? c : null, u = l ? ve(l.enmo5s) : null, d = l ? ve(l.anglez5s) : null, p = l ? ve(l.countsX) : null, m = l ? ve(l.countsY) : null, f = l ? ve(l.countsZ) : null, y = l ? ve(l.countsVm) : null;
		if (!(u && d && p && m && f && y)) throw new Error(`processRawXyzImputed: unexpected WASM return shape — got ${JSON.stringify(c)}`);
		const g = (e) => ve(e) ?? /* @__PURE__ */ new Float64Array(0), h = l ? g(l.anglex5s) : /* @__PURE__ */ new Float64Array(0), w = l ? g(l.angley5s) : /* @__PURE__ */ new Float64Array(0), b = l ? g(l.mad5s) : /* @__PURE__ */ new Float64Array(0), S = l ? g(l.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
		return _({
			enmo5s: u,
			anglez5s: d,
			anglex5s: h,
			angley5s: w,
			mad5s: b,
			enmoa5s: S,
			counts: {
				x: p,
				y: m,
				z: f,
				vm: y
			},
			firstTsMs: "number" == typeof l?.firstTsMs ? l.firstTsMs : 0,
			numGaps: "number" == typeof l?.numGaps ? l.numGaps : 0,
			samplesAdded: "number" == typeof l?.samplesAdded ? l.samplesAdded : 0,
			calibration: me(l?.calibration)
		}, [
			u.buffer,
			d.buffer,
			h.buffer,
			w.buffer,
			b.buffer,
			S.buffer,
			p.buffer,
			m.buffer,
			f.buffer,
			y.buffer
		]);
	},
	async detectDetachFromAccelerationG(e, n) {
		const t = await be(), r = new Uint8Array(t.detectDetachFromAccelerationG(e, n));
		return _(r, [r.buffer]);
	},
	runFullPipelineV1: async (e, n, t, r, a) => function(e, n, t, r, a, o) {
		const i = e.runFullPipelineV1({
			contractVersion: ye,
			semanticProfile: _e,
			signal: {
				x: n,
				y: t,
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
		return i ? {
			result: (s = i.result, {
				metadata: {
					sampleRateHz: s.metadata.sampleRateHz,
					startTsEpochSec: s.metadata.startTsEpochMs / 1e3,
					ws3: s.metadata.ws3,
					nEpochs: s.metadata.nEpochs,
					nMidnights: s.metadata.nMidnights,
					nNights: s.metadata.nNights,
					nonwearFraction: ge(s.metadata.nonwearFraction)
				},
				days: s.days.map((e) => ({
					calendarDate: e.calendarDate,
					dayNumber: e.dayNumber,
					validHours: ge(e.validHours),
					nonwearHours: ge(e.nonwearHours),
					totalEpochs: e.totalEpochs,
					sedentaryMinutes: ge(e.sedentaryMinutes),
					lightMinutes: ge(e.lightMinutes),
					moderateMinutes: ge(e.moderateMinutes),
					vigorousMinutes: ge(e.vigorousMinutes),
					mvpaMinutes: ge(e.mvpaMinutes),
					l5ValueMg: ge(e.l5ValueMg),
					l5OnsetEpoch: e.l5OnsetEpoch,
					m5ValueMg: ge(e.m5ValueMg),
					m5OnsetEpoch: e.m5OnsetEpoch,
					igGradient: ge(e.igGradient),
					igIntercept: ge(e.igIntercept),
					igRsquared: ge(e.igRsquared),
					fragTpIn2ac: ge(e.fragTpIn2ac),
					fragTpAc2in: ge(e.fragTpAc2in),
					nFragments: e.nFragments,
					nightNumber: e.nightNumber,
					tstMinutes: he(e.tstMinutes),
					wasoMinutes: he(e.wasoMinutes),
					sleepEfficiency: he(e.sleepEfficiency),
					numberOfAwakenings: e.numberOfAwakenings,
					sptDurationHours: he(e.sptDurationHours),
					cleaningCode: e.cleaningCode
				}))
			}),
			execution: i.execution,
			provenance: i.provenance
		} : null;
		var s;
	}(await be(), e, n, t, r, a),
	getComputeIdentity: async () => function(e, n) {
		if (!/^[0-9a-f]{64}$/.test(n)) throw new Error("Actours WASM artifact identity is unavailable or invalid; refusing to attest this runtime");
		const t = "object" == typeof e && null !== e ? e : {}, r = (e, n) => {
			const t = e[n];
			if ("string" != typeof t || 0 === t.length) throw new Error(`Actours capability ${n} must be a non-empty string`);
			return t;
		}, a = r(t, "contractVersion");
		if (a !== ye) throw new Error(`Unsupported Actours compute contract ${a}; expected ${ye}`);
		const o = r(t, "crateVersion"), i = t.sourceRevision;
		if (null !== i && ("string" != typeof i || 0 === i.length)) throw new Error("Actours capability sourceRevision must be null or a non-empty string");
		const s = t.compiledFeatures;
		if (!Array.isArray(s) || !s.every((e) => "string" == typeof e && e.length > 0)) throw new Error("Actours capability compiledFeatures must be an array of non-empty strings");
		const c = r("object" == typeof t.execution && null !== t.execution ? t.execution : {}, "target");
		if ("wasm" !== c) throw new Error(`Unsupported Actours execution target ${c}; expected wasm`);
		if (!(Array.isArray(t.semanticProfiles) ? t.semanticProfiles : []).includes(_e)) throw new Error(`Actours capability does not provide required semantic profile ${_e}`);
		const l = r(t, "profileProofStatus");
		if ("proof_pending" !== l) throw new Error(`Unsupported Actours profile proof status ${l}; expected proof_pending`);
		const u = r(t, "temporalBasis");
		if ("utc" !== u) throw new Error(`Unsupported Actours temporal basis ${u}; expected utc`);
		return {
			contractVersion: a,
			crateVersion: o,
			sourceRevision: i,
			artifactSha256: n,
			compiledFeatures: s,
			target: c,
			semanticProfile: _e,
			profileProofStatus: l,
			temporalBasis: u
		};
	}((await be()).getComputeCapabilitiesV1(), "46c9d5ad774242692f333f18a9415a0e53483441c9b122bd65f5e791b0e00d85"),
	runGgirFromEpoch: async (e, n, t, r, a) => (await be()).runGgirFromEpoch({
		anglez: e,
		enmo: n,
		sampleRateHz: t,
		startTsEpochSec: r,
		...a ? { invalid: a } : {}
	}, { ws3: 5 }),
	async readGgirMeta(e) {
		const n = await be();
		if ("function" != typeof n.readGgirMeta) throw new Error("readGgirMeta: current actours WASM bundle does not export GGIR RData import");
		const t = n.readGgirMeta(e), r = "object" == typeof t && null !== t ? t : null, a = r ? ve(r.timestampsMs) : null, o = r ? ve(r.enmo5s) : null, i = r ? ve(r.anglez5s) : null, s = r ? ve(r.anglex5s) : null, c = r ? ve(r.angley5s) : null, l = r ? Ae(r.invalidShort) : null, u = r ? Ae(r.nonwearShort) : null, d = r ? Ae(r.part3Sib5s) : null, p = r ? ve(r.anglez5sImputed) : null, m = r ? ve(r.enmo5sImputed) : null, f = r?.part3SptNights, y = Array.isArray(f) ? f : null;
		if (!(a && o && i && l && u)) throw new Error(`readGgirMeta: unexpected WASM return shape — got ${JSON.stringify(t)}`);
		return _({
			timestampsMs: a,
			enmo5s: o,
			anglez5s: i,
			...s ? { anglex5s: s } : {},
			...c ? { angley5s: c } : {},
			invalidShort: l,
			nonwearShort: u,
			...d ? { part3Sib5s: d } : {},
			...p ? { anglez5sImputed: p } : {},
			...m ? { enmo5sImputed: m } : {},
			...y ? { part3SptNights: y } : {},
			epochSeconds: "number" == typeof r?.epochSeconds ? r.epochSeconds : 5,
			longEpochSeconds: "number" == typeof r?.longEpochSeconds ? r.longEpochSeconds : 900,
			nShort: "number" == typeof r?.nShort ? r.nShort : o.length,
			nLong: "number" == typeof r?.nLong ? r.nLong : 0
		}, [
			a.buffer,
			o.buffer,
			i.buffer,
			...s ? [s.buffer] : [],
			...c ? [c.buffer] : [],
			l.buffer,
			u.buffer,
			...d ? [d.buffer] : [],
			...p ? [p.buffer] : [],
			...m ? [m.buffer] : []
		]);
	},
	async scoreGgirSib(e, n, t) {
		const r = (await be()).scoreGgirSib(e, n, t);
		if ("object" != typeof r || null === r || !r.sadeh_ggir || !r.ck_ggir) throw new Error(`scoreGgirSib: unexpected WASM return shape — got ${JSON.stringify(r)}`);
		const a = r, o = new Uint8Array(a.sadeh_ggir), i = new Uint8Array(a.ck_ggir);
		return _({
			sadeh_ggir: o,
			ck_ggir: i
		}, [o.buffer, i.buffer]);
	},
	async scoreGgirHasib(e) {
		const n = (await be()).scoreGgirHasib(e);
		if (!(n instanceof Uint8Array)) throw new Error("scoreGgirHasib: unexpected WASM return shape — expected Uint8Array, got " + typeof n);
		const t = new Uint8Array(n);
		return _(t, [t.buffer]);
	},
	async scoreGgirHasibVariant(e, n, t) {
		const r = function(e, n) {
			if ("object" != typeof e || null === e) throw new Error("scoreGgirHasibVariant: unexpected WASM return shape — got " + typeof e);
			const t = e, r = Ae(t.sib);
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
		}((await be()).scoreGgirHasibVariant({
			data: e,
			algo: n,
			...t ? { config: t } : {}
		}), n);
		return _(r, [r.sib.buffer]);
	},
	async runGgirPart3(e) {
		const n = (await be()).runGgirPart3(e), t = "object" == typeof n && null !== n ? n : null, r = t ? Ae(t.part3Sib5s) : null, a = t?.part3SptNights;
		if (!r || !Array.isArray(a)) throw new Error("runGgirPart3: unexpected WASM return shape — got " + typeof n);
		return _({
			part3Sib5s: r,
			part3SptNights: a
		}, [r.buffer]);
	},
	async detectGgirHasptVariant(e) {
		const n = function(e, n) {
			if ("object" != typeof e || null === e) throw new Error("detectGgirHasptVariant: unexpected WASM return shape — got " + typeof e);
			const t = e, r = Ae(t.nomov), a = ve(t.rollingMedian);
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
		}((await be()).detectGgirHasptVariant(e), e.algo);
		return _(n, [n.nomov.buffer, n.rollingMedian.buffer]);
	},
	async scoreAllDays(e) {
		const n = (await be()).scoreAllDays(e);
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
		return _(a, a.flatMap((e) => [
			e.sadeh_actilife.buffer,
			e.sadeh_original.buffer,
			e.ck_actilife.buffer,
			e.ck_original.buffer,
			e.nonwear.buffer
		]));
	}
})));
