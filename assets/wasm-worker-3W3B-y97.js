/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const e = Symbol("Comlink.proxy"), t = Symbol("Comlink.endpoint"), n = Symbol("Comlink.releaseProxy"), r = Symbol("Comlink.finalizer"), a = Symbol("Comlink.thrown"), o = (e) => "object" == typeof e && null !== e || "function" == typeof e, s = new Map([["proxy", {
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
		}), m(e, t, [], void 0);
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
		const { id: l, type: f, path: p } = Object.assign({ path: [] }, u.data), m = (u.data.argumentList || []).map(b);
		let y;
		try {
			const n = p.slice(0, -1).reduce((e, t) => e[t], t), r = p.reduce((e, t) => e[t], t);
			switch (f) {
				case "GET":
					y = r;
					break;
				case "SET":
					n[p.slice(-1)[0]] = b(u.data.value), y = !0;
					break;
				case "APPLY":
					y = r.apply(n, m);
					break;
				case "CONSTRUCT":
					y = function(t) {
						return Object.assign(t, { [e]: !0 });
					}(new r(...m));
					break;
				case "ENDPOINT":
					{
						const { port1: e, port2: n } = new MessageChannel();
						i(t, n), y = g(e, [e]);
					}
					break;
				case "RELEASE":
					y = void 0;
					break;
				default: return;
			}
		} catch (d) {
			y = {
				value: d,
				[a]: 0
			};
		}
		Promise.resolve(y).catch((e) => ({
			value: e,
			[a]: 0
		})).then((e) => {
			const [a, o] = w(e);
			n.postMessage(Object.assign(Object.assign({}, a), { id: l }), o), "RELEASE" === f && (n.removeEventListener("message", s), c(n), r in t && "function" == typeof t[r] && t[r]());
		}).catch((e) => {
			const [t, r] = w({
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
	return h(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
		c(e);
	});
}
const f = /* @__PURE__ */ new WeakMap(), p = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const t = (f.get(e) || 0) - 1;
	f.set(e, t), 0 === t && l(e);
});
function m(e, r, a = [], o = function() {}) {
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
				const t = h(e, r, {
					type: "GET",
					path: a.map((e) => e.toString())
				}).then(b);
				return t.then.bind(t);
			}
			return m(e, r, [...a, o]);
		},
		set(t, n, o) {
			u(s);
			const [i, c] = w(o);
			return h(e, r, {
				type: "SET",
				path: [...a, n].map((e) => e.toString()),
				value: i
			}, c).then(b);
		},
		apply(n, o, i) {
			u(s);
			const c = a[a.length - 1];
			if (c === t) return h(e, r, { type: "ENDPOINT" }).then(b);
			if ("bind" === c) return m(e, r, a.slice(0, -1));
			const [l, f] = y(i);
			return h(e, r, {
				type: "APPLY",
				path: a.map((e) => e.toString()),
				argumentList: l
			}, f).then(b);
		},
		construct(t, n) {
			u(s);
			const [o, i] = y(n);
			return h(e, r, {
				type: "CONSTRUCT",
				path: a.map((e) => e.toString()),
				argumentList: o
			}, i).then(b);
		}
	});
	return function(e, t) {
		const n = (f.get(t) || 0) + 1;
		f.set(t, n), p && p.register(e, t, e);
	}(i, e), i;
}
function y(e) {
	const t = e.map(w);
	return [t.map((e) => e[0]), (n = t.map((e) => e[1]), Array.prototype.concat.apply([], n))];
	var n;
}
const d = /* @__PURE__ */ new WeakMap();
function g(e, t) {
	return d.set(e, t), e;
}
function w(e) {
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
	}, d.get(e) || []];
}
function b(e) {
	switch (e.type) {
		case "HANDLER": return s.get(e.name).deserialize(e.value);
		case "RAW": return e.value;
	}
}
function h(e, t, n, r) {
	return new Promise((a) => {
		const o = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		t.set(o, a), e.start && e.start(), e.postMessage(Object.assign({ id: o }, n), r);
	});
}
let A = null;
const S = /unreachable|RuntimeError|out of bounds|wasm/i;
function v(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function M(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function E(e) {
	const t = M(e), n = t?.analysis_date, r = M(t?.intrinsic), a = r?.state;
	if (!t || "string" != typeof n || 0 === n.length || !r || "string" != typeof a || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(a)) return null;
	const o = r.score, s = r.verdict, i = r.infinite_reason, c = {}, u = [], l = t.per_guider;
	if (Array.isArray(l)) for (const d of l) {
		const e = M(d);
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
	const f = M(r.features), p = f && Array.isArray(f.feature_values) ? f : null, m = M(r.legacy_complexity_features) ?? (null === p ? f : null) ?? {}, y = t.computed_at;
	return {
		difficulty: "number" == typeof o && Number.isFinite(o) ? o : null,
		state: a,
		verdict: "string" == typeof s ? s : null,
		infiniteReason: "string" == typeof i ? i : null,
		confidenceByGuider: c,
		features: m,
		featureVector: p,
		perGuider: u,
		computedAt: "string" == typeof y ? y : null,
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
const N = [
	"skipped_disabled",
	"recalibrated",
	"identity_fallback_no_valid_fit",
	"identity_fallback_error_increased",
	"candidate_retained_below_preferred_quality"
];
function F(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function U(e, t) {
	const n = Array.isArray(e) ? e : [], r = (e) => F(n[e]) ?? t;
	return [
		r(0),
		r(1),
		r(2)
	];
}
function O(e, t) {
	const n = "object" == typeof e && null !== e ? e : {};
	return {
		scale: U(n.scale, t ? 1 : 0),
		offset: U(n.offset, 0),
		temperatureOffset: U(n.temperatureOffset, 0),
		errorStart: F(n.errorStart),
		errorEnd: F(n.errorEnd),
		fitAttempted: !0 === n.fitAttempted,
		numPoints: Math.max(0, Math.round(F(n.numPoints) ?? 0)),
		hoursUsed: F(n.hoursUsed) ?? 0,
		success: !0 === n.success,
		message: "string" == typeof n.message ? n.message : ""
	};
}
function x(e) {
	if ("object" != typeof e || null === e) return null;
	const t = e, n = t.disposition;
	if ("string" != typeof n || !N.includes(n)) return null;
	const r = O(t, !0);
	return {
		...r,
		disposition: n,
		observed: "observed" in t ? O(t.observed, !0) : r,
		applied: "applied" in t ? O(t.applied, !0) : r
	};
}
const W = "actours.compute.v1", _ = "actours-corrected-3.3.7-v2";
function k(e) {
	return "number" == typeof e ? e : "nan" === e ? NaN : "positive_infinity" === e ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
}
function R(e) {
	return null === e ? null : k(e);
}
let C = null, z = !1;
const P = 1073741824;
function j() {
	return C || (C = (async () => {
		const e = await import("./actours-wn2f92dD.js");
		return await e.default(), "configureComputeMemoryBudgetV1" in e && "function" == typeof e.configureComputeMemoryBudgetV1 && e.configureComputeMemoryBudgetV1(function() {
			const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
			if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return P;
			const t = Math.floor(1024 * e * 1024 * 1024 / 4);
			return Math.min(2147483648, Math.max(P, t));
		}()), "initThreadPool" in e && "function" == typeof e.initThreadPool && "undefined" != typeof SharedArrayBuffer && "undefined" != typeof navigator && navigator.hardwareConcurrency > 1 && await e.initThreadPool(navigator.hardwareConcurrency), z || (function(e) {
			const t = new Float64Array(16), n = new Uint8Array(e.scoreSadeh(t, -4));
			if (16 !== n.length) throw new Error(`WASM integrity check failed: scoreSadeh length ${n.length}, expected 16`);
			for (let r = 0; r < 16; r++) if (1 !== n[r]) throw new Error(`WASM integrity check failed: scoreSadeh(zeros)[${r}] = ${n[r]}, expected 1. Bundle may be corrupt — clear the site cache and reload.`);
		}(e), z = !0), e;
	})().catch((e) => {
		throw C = null, e;
	})), C;
}
function D(e, t = "computeMimsUnit") {
	if ("object" != typeof e || null === e) throw new Error(`${t}: unexpected WASM return shape — got ${typeof e}`);
	const n = e, r = $(n.mimsUnit);
	if (!r) throw new Error(`${t}: missing mimsUnit array — got ${JSON.stringify(e)}`);
	const a = n.epochSeconds;
	if ("number" != typeof a || !Number.isFinite(a) || a <= 0) throw new Error(`${t}: missing positive epochSeconds — got ${JSON.stringify(e)}`);
	const o = (e) => $(n[e]) ?? void 0, s = {
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
	const m = o("mimsOrientationYAngle");
	m && (s.mimsOrientationYAngle = m);
	const y = o("mimsOrientationZAngle");
	return y && (s.mimsOrientationZAngle = y), s;
}
function $(e) {
	if (e instanceof Float64Array) return new Float64Array(e);
	if (ArrayBuffer.isView(e)) {
		const t = e;
		if ("number" == typeof t.length) return new Float64Array(Array.from(t, Number));
	}
	return Array.isArray(e) ? new Float64Array(e) : null;
}
function G(e) {
	if (e instanceof Uint8Array) return new Uint8Array(e);
	if (ArrayBuffer.isView(e)) {
		const t = e;
		if ("number" == typeof t.length) return new Uint8Array(Array.from(t, Number));
	}
	return Array.isArray(e) ? new Uint8Array(e) : null;
}
function J(e, t) {
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
function T(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function V(e, t) {
	const n = e.computeNightSignals;
	if ("function" != typeof n) return console.warn("[wasm-worker] computeNightSignals is not present in this WASM bundle — night-signal detail degrades to empty."), { byDate: {} };
	let r;
	try {
		r = JSON.parse(n(function(e) {
			return JSON.stringify(function(e) {
				const t = v(e.config), n = v(t?.signals) ?? t;
				return {
					...n ? { config: n } : {},
					days: e.days
				};
			}(e));
		}(t)));
	} catch {
		return console.warn("[wasm-worker] computeNightSignals returned invalid JSON — degrading to empty."), { byDate: {} };
	}
	return function(e) {
		const t = {}, n = /* @__PURE__ */ new Set(), r = T(e)?.signals;
		if (!Array.isArray(r)) return { byDate: t };
		for (const a of r) {
			const e = T(a), r = e?.analysis_date, o = e?.epoch_length_seconds;
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
	}(r);
}
const I = {
	day_summaries: [],
	days_with_signal: 0
};
function B(e, t, n) {
	const r = e[t];
	if ("function" != typeof r) return console.warn(`[wasm-worker] ${t} is not present in this WASM bundle — local marker placement degrades to null. Rebuild the actours WASM crate to enable it.`), null;
	const a = r(JSON.stringify(n));
	try {
		return JSON.parse(a);
	} catch {
		return console.warn(`[wasm-worker] ${t} returned invalid JSON — degrading to null.`), null;
	}
}
function H(e, t) {
	const n = "object" == typeof e && null !== e ? e : {}, r = n.nonwear, a = Array.isArray(r) ? r.map((e) => e ? 1 : 0) : null, o = n.elementSeconds, s = "number" == typeof o && Number.isFinite(o) && o > 0 ? o : t, i = Boolean(n.available) && null !== a, c = n.reason;
	return {
		nonwear: i ? a : null,
		conformance: "string" == typeof n.conformance ? n.conformance : i ? "conformant" : "unavailable",
		available: i,
		reason: "string" == typeof c ? c : null,
		elementSeconds: s
	};
}
function X(e) {
	const { sampleRate: t } = e.signals;
	return null == t ? e : {
		...e,
		config: {
			...e.config ?? {},
			sampleRate: t
		}
	};
}
"undefined" != typeof self && "undefined" == typeof window && (function() {
	const e = console.error.bind(console);
	console.error = (...t) => {
		try {
			const n = t.map((e) => "string" == typeof e ? e : e instanceof Error ? e.stack ?? e.message : String(e)).join(" ");
			if (/panicked at|RuntimeError|unreachable/i.test(n)) {
				const t = /([A-Za-z0-9_.-]+\.rs):(\d+)/.exec(n);
				A = t ? `Rust trap at ${t[1]}:${t[2]}` : "Rust runtime trap", e("[wasm-worker] WASM runtime trap captured");
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
			A = null;
			try {
				return await a(...e);
			} catch (t) {
				const e = t instanceof Error ? t.message : String(t);
				if (A && S.test(e)) throw new Error(`WASM panic in ${n}(): ${A}`, { cause: t });
				throw t;
			}
		};
	}
	return t;
}({
	detectNonwearUnified: async (e) => function(e, t) {
		const n = t.signals.epochSeconds, r = (e) => ({
			nonwear: null,
			conformance: "unavailable",
			available: !1,
			reason: e,
			elementSeconds: n
		}), a = e.detectNonwearUnified;
		if ("function" != typeof a) return console.warn("[wasm-worker] detectNonwearUnified is not present in this WASM bundle — local raw nonwear degrades to unavailable. Rebuild the actours WASM crate to enable it."), r("detectNonwearUnified export missing (stale WASM bundle)");
		let o;
		try {
			o = JSON.parse(a(JSON.stringify(X(t))));
		} catch {
			return console.warn("[wasm-worker] detectNonwearUnified returned invalid JSON — degrading to unavailable."), r("detectNonwearUnified returned invalid JSON");
		}
		return H(o, n);
	}(await j(), e),
	detectNonwearUnifiedBatch: async (e, t) => function(e, t, n) {
		const r = n.epochSeconds, a = {}, o = (e) => ({
			nonwear: null,
			conformance: "unavailable",
			available: !1,
			reason: e,
			elementSeconds: r
		}), s = e.detectNonwearUnified;
		if ("function" != typeof s) {
			console.warn("[wasm-worker] detectNonwearUnified is not present in this WASM bundle — local raw nonwear degrades to unavailable. Rebuild the actours WASM crate to enable it.");
			for (const e of t) a[e] = o("detectNonwearUnified export missing (stale WASM bundle)");
			return a;
		}
		const i = s, c = X({
			algorithm: "",
			signals: n
		}), u = JSON.stringify(c.signals), l = void 0 === c.config ? null : JSON.stringify(c.config);
		for (const p of t) {
			const e = null === l ? `{"algorithm":${JSON.stringify(p)},"signals":${u}}` : `{"algorithm":${JSON.stringify(p)},"signals":${u},"config":${l}}`;
			let t;
			try {
				t = JSON.parse(i(e));
			} catch (f) {
				console.warn(`[wasm-worker] detectNonwearUnified(${p}) returned invalid JSON — degrading to unavailable.`, f), a[p] = o("detectNonwearUnified returned invalid JSON");
				continue;
			}
			a[p] = H(t, r);
		}
		return a;
	}(await j(), e, t),
	scoreEpochs: async (e) => function(e, t) {
		const n = t.signals.epochSeconds, r = (e) => ({
			sleepWake: null,
			conformance: "unavailable",
			available: !1,
			reason: e,
			elementSeconds: n
		}), a = e.scoreEpochs;
		if ("function" != typeof a) return console.warn("[wasm-worker] scoreEpochs is not present in this WASM bundle — unified local scoring degrades to unavailable. Rebuild the actours WASM crate to enable it."), r("scoreEpochs export missing (stale WASM bundle)");
		let o;
		try {
			o = JSON.parse(a(JSON.stringify(X(t))));
		} catch {
			return console.warn("[wasm-worker] scoreEpochs returned invalid JSON — degrading to unavailable."), r("scoreEpochs returned invalid JSON");
		}
		return function(e, t) {
			const n = "object" == typeof e && null !== e ? e : {}, r = n.sleepWake, a = Array.isArray(r) ? r.map((e) => e ? 1 : 0) : null, o = n.elementSeconds, s = "number" == typeof o && Number.isFinite(o) && o > 0 ? o : t, i = Boolean(n.available) && null !== a, c = n.reason;
			return {
				sleepWake: i ? a : null,
				conformance: "string" == typeof n.conformance ? n.conformance : i ? "conformant" : "unavailable",
				available: i,
				reason: "string" == typeof c ? c : null,
				elementSeconds: s
			};
		}(o, n);
	}(await j(), e),
	async scoreSadeh(e, t) {
		const n = await j(), r = new Uint8Array(n.scoreSadeh(e, t));
		return g(r, [r.buffer]);
	},
	async scoreColeKripke(e, t) {
		const n = await j(), r = new Uint8Array(n.scoreColeKripke(e, t));
		return g(r, [r.buffer]);
	},
	async detectNonwear(e) {
		const t = await j(), n = new Uint8Array(t.detectNonwear(e));
		return g(n, [n.buffer]);
	},
	async detectNonwearChoi2011(e, t = 60) {
		const n = await j(), r = new Uint8Array("function" == typeof n.detectNonwearChoi2011Epoch ? n.detectNonwearChoi2011Epoch(e, t) : n.detectNonwearChoi2011(e));
		return g(r, [r.buffer]);
	},
	parseActigraphCsv: async (e, t) => J((await j()).parseActigraphCsv(e, t), "parseActigraphCsv"),
	parseGeneactivCsv: async (e) => J((await j()).parseGeneactivCsv(e), "parseGeneactivCsv"),
	isGeneactivFormat: async (e) => (await j()).isGeneactivFormat(e),
	async csvBufferClear(e) {
		(await j()).csvBufferClear(e);
	},
	async csvBufferAppend(e) {
		(await j()).csvBufferAppend(e);
	},
	parseGeneactivCsvBuffered: async () => J((await j()).parseGeneactivCsvBuffered(), "parseGeneactivCsvBuffered"),
	parseActigraphCsvBuffered: async (e) => J((await j()).parseActigraphCsvBuffered(e), "parseActigraphCsvBuffered"),
	async streamParseStart(e, t, n = 60) {
		const r = await j();
		"function" == typeof r.streamParseStartWithEpoch ? r.streamParseStartWithEpoch(e, t, n) : r.streamParseStart(e, t);
	},
	async streamParseStartData(e, t) {
		(await j()).streamParseStartData(e, t);
	},
	streamParseFeed: async (e) => (await j()).streamParseFeed(e),
	async streamParseFinish() {
		const e = (await j()).streamParseFinish();
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
		const e = (await j()).streamParseFinishChunk();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinishChunk: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const t = new Float64Array(e.timestampsMs), n = new Float64Array(e.axisX), r = new Float64Array(e.axisY), a = new Float64Array(e.axisZ), o = new Float64Array(e.vectorMagnitude), s = new Float64Array(e.temperature), i = new Uint32Array(e.counts), c = new Uint32Array(e.tempCounts), u = new Float64Array(e.timestampsMs5s), l = new Float64Array(e.enmo5s), f = new Float64Array(e.anglez5s), p = new Float64Array(e.anglex5s ?? 0), m = new Float64Array(e.angley5s ?? 0), y = new Float64Array(e.mad5s ?? 0), d = new Float64Array(e.enmoa5s ?? 0), w = e, b = new Float64Array(w.zcx60s ?? []), h = new Float64Array(w.zcy60s ?? []), A = new Float64Array(w.zcz60s ?? []), S = new Uint32Array(e.counts5s), v = e, M = new Float64Array(v.mimsUnit ?? []), E = new Float64Array(v.mimsUnitX ?? []), N = new Float64Array(v.mimsUnitY ?? []), F = new Float64Array(v.mimsUnitZ ?? []), U = e;
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
			angley5s: m,
			mad5s: y,
			enmoa5s: d,
			zcx60s: b,
			zcy60s: h,
			zcz60s: A,
			counts5s: S,
			mimsUnit: M,
			mimsUnitX: E,
			mimsUnitY: N,
			mimsUnitZ: F,
			sampleFrequency: e.sampleFrequency,
			headerRowsSkipped: e.headerRowsSkipped,
			rowsDropped: e.rowsDropped,
			rawRetentionDegraded: U.rawRetentionDegraded ?? !1,
			canonicalPassDegraded: U.canonicalPassDegraded ?? !1,
			canonicalPassReason: U.canonicalPassReason ?? null
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
			m.buffer,
			y.buffer,
			d.buffer,
			b.buffer,
			h.buffer,
			A.buffer,
			S.buffer,
			M.buffer,
			E.buffer,
			N.buffer,
			F.buffer
		]);
	},
	async neishabouriCounts(e, t, n, r, a) {
		const o = (await j()).neishabouriCounts(e, t, n, r, a), s = "object" == typeof o && null !== o ? o : null, i = s ? $(s.x) : null, c = s ? $(s.y) : null, u = s ? $(s.z) : null, l = s ? $(s.vm) : null;
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
		const o = (await j()).zeroCrossingCounts(e, t, n, r, a), s = "object" == typeof o && null !== o ? o : null, i = s ? $(s.zcx) : null, c = s ? $(s.zcy) : null, u = s ? $(s.zcz) : null;
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
		const o = await j();
		if (!("computeMimsUnit" in o) || "function" != typeof o.computeMimsUnit) throw new Error("computeMimsUnit: current actours WASM bundle does not export MIMS_UNIT processing");
		const s = D(o.computeMimsUnit(e, t, n, r, a), "computeMimsUnit");
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
		const o = await j();
		if (!("computeMimsUnitDataframe" in o) || "function" != typeof o.computeMimsUnitDataframe) throw new Error("computeMimsUnitDataframe: current actours WASM bundle does not export MIMS_UNIT processing");
		const s = D(o.computeMimsUnitDataframe(e, t, n, r, a), "computeMimsUnitDataframe");
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
		const a = await j(), o = "function" == typeof a.classifyActimetricPreschoolWristRfLagLead ? a.classifyActimetricPreschoolWristRfLagLead : "function" == typeof a.classifyActimetricPreschoolWristRf ? a.classifyActimetricPreschoolWristRf : "function" == typeof a.actimetricPreschoolWristRfClasses ? a.actimetricPreschoolWristRfClasses : "function" == typeof a.predictActimetricPreschoolWristRfClasses ? a.predictActimetricPreschoolWristRfClasses : null;
		if (!o) throw new Error("classifyActimetricPreschoolWristRf: current actours WASM bundle does not export actimetric preschool wrist RF inference");
		const s = function(e, t = "classifyActimetricPreschoolWristRf") {
			const n = G(e);
			if (n) return {
				classes: n,
				epochSeconds: 15
			};
			const r = "object" == typeof e && null !== e ? e : null, a = r ? G(r.classes) ?? G(r.activityClasses) ?? G(r.predictions) ?? G(r.activity) : null;
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
		const a = await j(), o = a.lstmSpectralFeatures30s ?? a.spectralFeatures30s;
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
	async scoreConsensusMajority(e) {
		const t = (await j()).scoreConsensusMajority(e), n = t instanceof Uint8Array ? t : new Uint8Array(t);
		return g(n, [n.buffer]);
	},
	async scoreConsensus(e, t) {
		const n = await j(), r = JSON.stringify({
			strategy: e,
			label_sequences: t.map((e) => Array.from(e))
		}), a = JSON.parse(n.scoreConsensus(r)), o = null != a && "object" == typeof a ? a.consensus : void 0;
		if (!Array.isArray(o)) throw new Error(`scoreConsensus: unexpected WASM return shape — got ${JSON.stringify(a)}`);
		const s = new Uint8Array(o);
		return g(s, [s.buffer]);
	},
	async computeSleepMetrics(e, t, n) {
		const r = (await j()).computeSleepMetrics(e, t, n);
		if (null == r || "object" != typeof r || "number" != typeof r.totalSleepTimeMinutes || "number" != typeof r.sleepEfficiency) throw new Error(`computeSleepMetrics: unexpected WASM return shape ${JSON.stringify(r)}`);
		return r;
	},
	computeFileDifficulty: async (e) => function(e, t) {
		const n = e.computeNightDifficulty;
		if ("function" != typeof n) return console.warn("[wasm-worker] computeNightDifficulty is not present in this WASM bundle — night difficulty degrades to empty. Rebuild the actours WASM crate to enable it."), { byDate: {} };
		const r = n(function(e) {
			return JSON.stringify(e);
		}(t));
		let a;
		try {
			a = JSON.parse(r);
		} catch {
			return console.warn("[wasm-worker] computeNightDifficulty returned invalid JSON — degrading to empty."), { byDate: {} };
		}
		return function(e) {
			const t = {}, n = /* @__PURE__ */ new Set(), r = T(e)?.results;
			if (!Array.isArray(r)) return { byDate: t };
			for (const a of r) {
				const e = E(a);
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
		}(a);
	}(await j(), e),
	computeFileSignals: async (e) => V(await j(), e),
	computeCircadian: async (e) => function(e, t) {
		const n = e.computeCircadian;
		if ("function" != typeof n) return console.warn("[wasm-worker] computeCircadian is not present in this WASM bundle — circadian analysis degrades to empty. Rebuild the actours WASM crate to enable it."), I;
		const r = n(JSON.stringify(t));
		let a;
		try {
			a = JSON.parse(r);
		} catch {
			return console.warn("[wasm-worker] computeCircadian returned invalid JSON — degrading to empty."), I;
		}
		return a && "object" == typeof a && Array.isArray(a.day_summaries) ? a : I;
	}(await j(), e),
	placeMarkers: async (e) => B(await j(), "placeMarkers", e),
	placeNonwearMarkers: async (e) => B(await j(), "placeNonwearMarkers", e),
	epochRawData: async (e, t, n, r, a) => J((await j()).epochRawData(e, t, n, r, a), "epochRawData"),
	async epochWithBandpass(e, t, n) {
		const r = (await j()).epochWithBandpass(e, t, n), a = "object" == typeof r && null !== r ? r : null, o = $(a?.timestamps), s = $(a?.counts);
		if (!o || !s) throw new Error("epochWithBandpass: unexpected WASM return shape");
		return g({
			timestamps: o,
			counts: s
		}, [o.buffer, s.buffer]);
	},
	async computeEnmo5s(e, t, n, r) {
		const a = await j();
		return new Float64Array(a.computeEnmo5s(e, t, n, r));
	},
	async computeAnglez5s(e, t, n, r) {
		const a = await j();
		return new Float64Array(a.computeAnglez5s(e, t, n, r));
	},
	async processRawXyz(e, t, n, r, a, o) {
		const s = (await j()).processRawXyz(e, t, n, r, a, o ?? void 0), i = "object" == typeof s && null !== s ? s : null, c = i ? $(i.enmo5s) : null, u = i ? $(i.anglez5s) : null, l = i ? $(i.countsX) : null, f = i ? $(i.countsY) : null, p = i ? $(i.countsZ) : null, m = i ? $(i.countsVm) : null;
		if (!(c && u && l && f && p && m)) throw new Error(`processRawXyz: unexpected WASM return shape — got ${JSON.stringify(s)}`);
		const y = (e) => $(e) ?? new Float64Array(0), d = i ? y(i.anglex5s) : new Float64Array(0), w = i ? y(i.angley5s) : new Float64Array(0), b = i ? y(i.mad5s) : new Float64Array(0), h = i ? y(i.enmoa5s) : new Float64Array(0);
		return g({
			enmo5s: c,
			anglez5s: u,
			anglex5s: d,
			angley5s: w,
			mad5s: b,
			enmoa5s: h,
			calibration: x(i?.calibration),
			counts: {
				x: l,
				y: f,
				z: p,
				vm: m
			}
		}, [
			c.buffer,
			u.buffer,
			d.buffer,
			w.buffer,
			b.buffer,
			h.buffer,
			l.buffer,
			f.buffer,
			p.buffer,
			m.buffer
		]);
	},
	async processRawXyzImputed(e, t, n, r, a, o, s = 60) {
		const i = await j(), c = "function" == typeof i.processRawXyzImputedWithEpoch ? i.processRawXyzImputedWithEpoch(e, t, n, r, a, o ?? void 0, s) : i.processRawXyzImputed(e, t, n, r, a, o ?? void 0), u = "object" == typeof c && null !== c ? c : null, l = u ? $(u.enmo5s) : null, f = u ? $(u.anglez5s) : null, p = u ? $(u.countsX) : null, m = u ? $(u.countsY) : null, y = u ? $(u.countsZ) : null, d = u ? $(u.countsVm) : null;
		if (!(l && f && p && m && y && d)) throw new Error(`processRawXyzImputed: unexpected WASM return shape — got ${JSON.stringify(c)}`);
		const w = (e) => $(e) ?? new Float64Array(0), b = u ? w(u.anglex5s) : new Float64Array(0), h = u ? w(u.angley5s) : new Float64Array(0), A = u ? w(u.mad5s) : new Float64Array(0), S = u ? w(u.enmoa5s) : new Float64Array(0);
		return g({
			enmo5s: l,
			anglez5s: f,
			anglex5s: b,
			angley5s: h,
			mad5s: A,
			enmoa5s: S,
			counts: {
				x: p,
				y: m,
				z: y,
				vm: d
			},
			firstTsMs: "number" == typeof u?.firstTsMs ? u.firstTsMs : 0,
			numGaps: "number" == typeof u?.numGaps ? u.numGaps : 0,
			samplesAdded: "number" == typeof u?.samplesAdded ? u.samplesAdded : 0,
			calibration: x(u?.calibration)
		}, [
			l.buffer,
			f.buffer,
			b.buffer,
			h.buffer,
			A.buffer,
			S.buffer,
			p.buffer,
			m.buffer,
			y.buffer,
			d.buffer
		]);
	},
	async detectDetach(e, t) {
		const n = await j(), r = new Uint8Array(n.detectDetach(e, t));
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
	}((await j()).detectHdcza(e, t, n ?? null, r ?? null)),
	runFullPipelineV1: async (e, t, n, r, a) => function(e, t, n, r, a, o) {
		const s = e.runFullPipelineV1({
			contractVersion: W,
			semanticProfile: _,
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
					nonwearFraction: k(i.metadata.nonwearFraction)
				},
				days: i.days.map((e) => ({
					calendarDate: e.calendarDate,
					dayNumber: e.dayNumber,
					validHours: k(e.validHours),
					nonwearHours: k(e.nonwearHours),
					totalEpochs: e.totalEpochs,
					sedentaryMinutes: k(e.sedentaryMinutes),
					lightMinutes: k(e.lightMinutes),
					moderateMinutes: k(e.moderateMinutes),
					vigorousMinutes: k(e.vigorousMinutes),
					mvpaMinutes: k(e.mvpaMinutes),
					l5ValueMg: k(e.l5ValueMg),
					l5OnsetEpoch: e.l5OnsetEpoch,
					m5ValueMg: k(e.m5ValueMg),
					m5OnsetEpoch: e.m5OnsetEpoch,
					igGradient: k(e.igGradient),
					igIntercept: k(e.igIntercept),
					igRsquared: k(e.igRsquared),
					fragTpIn2ac: k(e.fragTpIn2ac),
					fragTpAc2in: k(e.fragTpAc2in),
					nFragments: e.nFragments,
					nightNumber: e.nightNumber,
					tstMinutes: R(e.tstMinutes),
					wasoMinutes: R(e.wasoMinutes),
					sleepEfficiency: R(e.sleepEfficiency),
					numberOfAwakenings: e.numberOfAwakenings,
					sptDurationHours: R(e.sptDurationHours),
					cleaningCode: e.cleaningCode
				}))
			}),
			execution: s.execution,
			provenance: s.provenance
		} : null;
		var i;
	}(await j(), e, t, n, r, a),
	getComputeIdentity: async () => function(e, t) {
		if (!/^[0-9a-f]{64}$/.test(t)) throw new Error("Actours WASM artifact identity is unavailable or invalid; refusing to attest this runtime");
		const n = "object" == typeof e && null !== e ? e : {}, r = (e, t) => {
			const n = e[t];
			if ("string" != typeof n || 0 === n.length) throw new Error(`Actours capability ${t} must be a non-empty string`);
			return n;
		}, a = r(n, "contractVersion");
		if (a !== W) throw new Error(`Unsupported Actours compute contract ${a}; expected ${W}`);
		const o = r(n, "crateVersion"), s = n.sourceRevision;
		if (null !== s && ("string" != typeof s || 0 === s.length)) throw new Error("Actours capability sourceRevision must be null or a non-empty string");
		const i = n.compiledFeatures;
		if (!Array.isArray(i) || !i.every((e) => "string" == typeof e && e.length > 0)) throw new Error("Actours capability compiledFeatures must be an array of non-empty strings");
		const c = r("object" == typeof n.execution && null !== n.execution ? n.execution : {}, "target");
		if ("wasm" !== c) throw new Error(`Unsupported Actours execution target ${c}; expected wasm`);
		if (!(Array.isArray(n.semanticProfiles) ? n.semanticProfiles : []).includes(_)) throw new Error(`Actours capability does not provide required semantic profile ${_}`);
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
			semanticProfile: _,
			profileProofStatus: u,
			temporalBasis: l
		};
	}((await j()).getComputeCapabilitiesV1(), "6907515690d4bf0953e74e71f6ddfce4d55bd375dfeea0b7ca03b328e511862d"),
	runGgirFromEpoch: async (e, t, n, r, a) => (await j()).runGgirFromEpoch({
		anglez: e,
		enmo: t,
		sampleRateHz: n,
		startTsEpochSec: r,
		...a ? { invalid: a } : {}
	}, { ws3: 5 }),
	async readGgirMeta(e) {
		const t = await j();
		if ("function" != typeof t.readGgirMeta) throw new Error("readGgirMeta: current actours WASM bundle does not export GGIR RData import");
		const n = t.readGgirMeta(e), r = "object" == typeof n && null !== n ? n : null, a = r ? $(r.timestampsMs) : null, o = r ? $(r.enmo5s) : null, s = r ? $(r.anglez5s) : null, i = r ? G(r.invalidShort) : null, c = r ? G(r.nonwearShort) : null;
		if (!(a && o && s && i && c)) throw new Error(`readGgirMeta: unexpected WASM return shape — got ${JSON.stringify(n)}`);
		return g({
			timestampsMs: a,
			enmo5s: o,
			anglez5s: s,
			invalidShort: i,
			nonwearShort: c,
			epochSeconds: "number" == typeof r?.epochSeconds ? r.epochSeconds : 5,
			longEpochSeconds: "number" == typeof r?.longEpochSeconds ? r.longEpochSeconds : 900,
			nShort: "number" == typeof r?.nShort ? r.nShort : o.length,
			nLong: "number" == typeof r?.nLong ? r.nLong : 0
		}, [
			a.buffer,
			o.buffer,
			s.buffer,
			i.buffer,
			c.buffer
		]);
	},
	async scoreGgirSib(e, t, n) {
		const r = (await j()).scoreGgirSib(e, t, n);
		if ("object" != typeof r || null === r || !r.sadeh_ggir || !r.ck_ggir) throw new Error(`scoreGgirSib: unexpected WASM return shape — got ${JSON.stringify(r)}`);
		const a = r, o = new Uint8Array(a.sadeh_ggir), s = new Uint8Array(a.ck_ggir);
		return g({
			sadeh_ggir: o,
			ck_ggir: s
		}, [o.buffer, s.buffer]);
	},
	async scoreGgirHasib(e) {
		const t = (await j()).scoreGgirHasib(e);
		if (!(t instanceof Uint8Array)) throw new Error("scoreGgirHasib: unexpected WASM return shape — expected Uint8Array, got " + typeof t);
		const n = new Uint8Array(t);
		return g(n, [n.buffer]);
	},
	async scoreGgirHasibVariant(e, t, n) {
		const r = function(e, t) {
			if ("object" != typeof e || null === e) throw new Error("scoreGgirHasibVariant: unexpected WASM return shape — got " + typeof e);
			const n = e, r = G(n.sib);
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
		}((await j()).scoreGgirHasibVariant({
			data: e,
			algo: t,
			...n ? { config: n } : {}
		}), t);
		return g(r, [r.sib.buffer]);
	},
	async detectGgirHasptVariant(e) {
		const t = function(e, t) {
			if ("object" != typeof e || null === e) throw new Error("detectGgirHasptVariant: unexpected WASM return shape — got " + typeof e);
			const n = e, r = G(n.nomov), a = $(n.rollingMedian);
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
		}((await j()).detectGgirHasptVariant(e), e.algo);
		return g(t, [t.nomov.buffer, t.rollingMedian.buffer]);
	},
	async scoreAllDays(e) {
		const t = (await j()).scoreAllDays(e);
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
