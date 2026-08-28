/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const e = Symbol("Comlink.proxy"), t = Symbol("Comlink.endpoint"), r = Symbol("Comlink.releaseProxy"), n = Symbol("Comlink.finalizer"), a = Symbol("Comlink.thrown"), o = (e) => "object" == typeof e && null !== e || "function" == typeof e, s = new Map([["proxy", {
	canHandle: (t) => o(t) && t[e],
	serialize(e) {
		const { port1: t, port2: r } = new MessageChannel();
		return i(e, t), [r, [r]];
	},
	deserialize: (e) => (e.start(), function(e) {
		const t = /* @__PURE__ */ new Map();
		return e.addEventListener("message", function(e) {
			const { data: r } = e;
			if (!r || !r.id) return;
			const n = t.get(r.id);
			if (n) try {
				n(r);
			} finally {
				t.delete(r.id);
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
function i(t, r = globalThis, o = ["*"]) {
	r.addEventListener("message", function s(u) {
		if (!u || !u.data) return;
		if (!function(e, t) {
			for (const r of e) {
				if (t === r || "*" === r) return !0;
				if (r instanceof RegExp && r.test(t)) return !0;
			}
			return !1;
		}(o, u.origin)) return void console.warn(`Invalid origin '${u.origin}' for comlink proxy`);
		const { id: l, type: f, path: p } = Object.assign({ path: [] }, u.data), m = (u.data.argumentList || []).map(b);
		let y;
		try {
			const r = p.slice(0, -1).reduce((e, t) => e[t], t), n = p.reduce((e, t) => e[t], t);
			switch (f) {
				case "GET":
					y = n;
					break;
				case "SET":
					r[p.slice(-1)[0]] = b(u.data.value), y = !0;
					break;
				case "APPLY":
					y = n.apply(r, m);
					break;
				case "CONSTRUCT":
					y = function(t) {
						return Object.assign(t, { [e]: !0 });
					}(new n(...m));
					break;
				case "ENDPOINT":
					{
						const { port1: e, port2: r } = new MessageChannel();
						i(t, r), y = g(e, [e]);
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
			r.postMessage(Object.assign(Object.assign({}, a), { id: l }), o), "RELEASE" === f && (r.removeEventListener("message", s), c(r), n in t && "function" == typeof t[n] && t[n]());
		}).catch((e) => {
			const [t, n] = w({
				value: /* @__PURE__ */ new TypeError("Unserializable return value"),
				[a]: 0
			});
			r.postMessage(Object.assign(Object.assign({}, t), { id: l }), n);
		});
	}), r.start && r.start();
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
function m(e, n, a = [], o = function() {}) {
	let s = !1;
	const i = new Proxy(o, {
		get(t, o) {
			if (u(s), o === r) return () => {
				(function(e) {
					p && p.unregister(e);
				})(i), l(e), n.clear(), s = !0;
			};
			if ("then" === o) {
				if (0 === a.length) return { then: () => i };
				const t = h(e, n, {
					type: "GET",
					path: a.map((e) => e.toString())
				}).then(b);
				return t.then.bind(t);
			}
			return m(e, n, [...a, o]);
		},
		set(t, r, o) {
			u(s);
			const [i, c] = w(o);
			return h(e, n, {
				type: "SET",
				path: [...a, r].map((e) => e.toString()),
				value: i
			}, c).then(b);
		},
		apply(r, o, i) {
			u(s);
			const c = a[a.length - 1];
			if (c === t) return h(e, n, { type: "ENDPOINT" }).then(b);
			if ("bind" === c) return m(e, n, a.slice(0, -1));
			const [l, f] = y(i);
			return h(e, n, {
				type: "APPLY",
				path: a.map((e) => e.toString()),
				argumentList: l
			}, f).then(b);
		},
		construct(t, r) {
			u(s);
			const [o, i] = y(r);
			return h(e, n, {
				type: "CONSTRUCT",
				path: a.map((e) => e.toString()),
				argumentList: o
			}, i).then(b);
		}
	});
	return function(e, t) {
		const r = (f.get(t) || 0) + 1;
		f.set(t, r), p && p.register(e, t, e);
	}(i, e), i;
}
function y(e) {
	const t = e.map(w);
	return [t.map((e) => e[0]), (r = t.map((e) => e[1]), Array.prototype.concat.apply([], r))];
	var r;
}
const d = /* @__PURE__ */ new WeakMap();
function g(e, t) {
	return d.set(e, t), e;
}
function w(e) {
	for (const [t, r] of s) if (r.canHandle(e)) {
		const [n, a] = r.serialize(e);
		return [{
			type: "HANDLER",
			name: t,
			value: n
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
function h(e, t, r, n) {
	return new Promise((a) => {
		const o = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		t.set(o, a), e.start && e.start(), e.postMessage(Object.assign({ id: o }, r), n);
	});
}
let A = null;
function S() {
	const e = console.error.bind(console);
	console.error = (...t) => {
		try {
			const r = t.map((e) => "string" == typeof e ? e : e instanceof Error ? e.stack ?? e.message : String(e)).join(" ");
			if (/panicked at|RuntimeError|unreachable/i.test(r)) {
				const t = /([A-Za-z0-9_.-]+\.rs):(\d+)/.exec(r);
				A = t ? `Rust trap at ${t[1]}:${t[2]}` : "Rust runtime trap", e("[wasm-worker] WASM runtime trap captured");
				return;
			}
		} catch {}
		e(...t);
	};
}
const v = /unreachable|RuntimeError|out of bounds|wasm/i;
function M(e) {
	const t = {};
	for (const r of Object.keys(e)) {
		const n = e[r];
		if ("function" != typeof n) {
			t[r] = n;
			continue;
		}
		const a = n;
		t[r] = async (...e) => {
			A = null;
			try {
				return await a(...e);
			} catch (t) {
				const e = t instanceof Error ? t.message : String(t);
				if (A && v.test(e)) throw new Error(`WASM panic in ${r}(): ${A}`, { cause: t });
				throw t;
			}
		};
	}
	return t;
}
function E(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function N(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function F(e) {
	const t = N(e), r = t?.analysis_date, n = N(t?.intrinsic), a = n?.state;
	if (!t || "string" != typeof r || 0 === r.length || !n || "string" != typeof a || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(a)) return null;
	const o = n.score, s = n.verdict, i = n.infinite_reason, c = {}, u = [], l = t.per_guider;
	if (Array.isArray(l)) for (const d of l) {
		const e = N(d);
		if (!e) continue;
		u.push(e);
		const t = e.guider;
		if ("string" != typeof t) continue;
		const r = e.confidence;
		Object.defineProperty(c, t, {
			value: "number" == typeof r && Number.isFinite(r) ? r : null,
			enumerable: !0,
			configurable: !0,
			writable: !0
		});
	}
	const f = N(n.features), p = f && Array.isArray(f.feature_values) ? f : null, m = N(n.legacy_complexity_features) ?? (null === p ? f : null) ?? {}, y = t.computed_at;
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
		canonicalIntrinsic: n
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
const U = [
	"skipped_disabled",
	"recalibrated",
	"identity_fallback_no_valid_fit",
	"identity_fallback_error_increased",
	"candidate_retained_below_preferred_quality"
];
function x(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function O(e, t) {
	const r = Array.isArray(e) ? e : [], n = (e) => x(r[e]) ?? t;
	return [
		n(0),
		n(1),
		n(2)
	];
}
function W(e, t) {
	const r = "object" == typeof e && null !== e ? e : {};
	return {
		scale: O(r.scale, t ? 1 : 0),
		offset: O(r.offset, 0),
		temperatureOffset: O(r.temperatureOffset, 0),
		errorStart: x(r.errorStart),
		errorEnd: x(r.errorEnd),
		fitAttempted: !0 === r.fitAttempted,
		numPoints: Math.max(0, Math.round(x(r.numPoints) ?? 0)),
		hoursUsed: x(r.hoursUsed) ?? 0,
		success: !0 === r.success,
		message: "string" == typeof r.message ? r.message : ""
	};
}
function C(e) {
	if ("object" != typeof e || null === e) return null;
	const t = e, r = t.disposition;
	if ("string" != typeof r || !U.includes(r)) return null;
	const n = W(t, !0);
	return {
		...n,
		disposition: r,
		observed: "observed" in t ? W(t.observed, !0) : n,
		applied: "applied" in t ? W(t.applied, !0) : n
	};
}
const R = "actours.compute.v1", z = "actours-corrected-3.3.7-v2";
function _(e) {
	return "number" == typeof e ? e : "nan" === e ? NaN : "positive_infinity" === e ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
}
function k(e) {
	return null === e ? null : _(e);
}
let P = null, G = !1;
const j = 1073741824;
function D() {
	const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
	if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return j;
	const t = Math.floor(1024 * e * 1024 * 1024 / 4);
	return Math.min(2147483648, Math.max(j, t));
}
function $() {
	return P || (P = (async () => {
		const e = await import("./actours-wn2f92dD.js");
		return await e.default(), "configureComputeMemoryBudgetV1" in e && "function" == typeof e.configureComputeMemoryBudgetV1 && e.configureComputeMemoryBudgetV1(D()), "initThreadPool" in e && "function" == typeof e.initThreadPool && "undefined" != typeof SharedArrayBuffer && "undefined" != typeof navigator && navigator.hardwareConcurrency > 1 && await e.initThreadPool(navigator.hardwareConcurrency), G || (function(e) {
			const t = new Float64Array(16), r = new Uint8Array(e.scoreSadeh(t, -4));
			if (16 !== r.length) throw new Error(`WASM integrity check failed: scoreSadeh length ${r.length}, expected 16`);
			for (let n = 0; n < 16; n++) if (1 !== r[n]) throw new Error(`WASM integrity check failed: scoreSadeh(zeros)[${n}] = ${r[n]}, expected 1. Bundle may be corrupt — clear the site cache and reload.`);
		}(e), G = !0), e;
	})().catch((e) => {
		throw P = null, e;
	})), P;
}
function J(e, t = "computeMimsUnit") {
	if ("object" != typeof e || null === e) throw new Error(`${t}: unexpected WASM return shape — got ${typeof e}`);
	const r = e, n = T(r.mimsUnit);
	if (!n) throw new Error(`${t}: missing mimsUnit array — got ${JSON.stringify(e)}`);
	const a = r.epochSeconds;
	if ("number" != typeof a || !Number.isFinite(a) || a <= 0) throw new Error(`${t}: missing positive epochSeconds — got ${JSON.stringify(e)}`);
	const o = (e) => T(r[e]) ?? void 0, s = {
		mimsUnit: n,
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
function T(e) {
	if (e instanceof Float64Array) return new Float64Array(e);
	if (ArrayBuffer.isView(e)) {
		const t = e;
		if ("number" == typeof t.length) return new Float64Array(Array.from(t, Number));
	}
	return Array.isArray(e) ? new Float64Array(e) : null;
}
function B(e) {
	if (e instanceof Uint8Array) return new Uint8Array(e);
	if (ArrayBuffer.isView(e)) {
		const t = e;
		if ("number" == typeof t.length) return new Uint8Array(Array.from(t, Number));
	}
	return Array.isArray(e) ? new Uint8Array(e) : null;
}
function V(e, t) {
	if ("object" != typeof e || null === e) throw new Error(`${t}: unexpected WASM return shape — got ${JSON.stringify(e)}`);
	const r = e, n = {}, a = [];
	for (const o of Object.keys(r)) {
		const e = r[o];
		if (Array.isArray(e)) {
			const t = new Float64Array(e);
			n[o] = t, a.push(t.buffer);
		} else n[o] = e;
	}
	return g(n, a);
}
function I(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function H(e, t) {
	const r = e.computeNightSignals;
	if ("function" != typeof r) return console.warn("[wasm-worker] computeNightSignals is not present in this WASM bundle — night-signal detail degrades to empty."), { byDate: {} };
	let n;
	try {
		n = JSON.parse(r(function(e) {
			return JSON.stringify(function(e) {
				const t = E(e.config), r = E(t?.signals) ?? t;
				return {
					...r ? { config: r } : {},
					days: e.days
				};
			}(e));
		}(t)));
	} catch {
		return console.warn("[wasm-worker] computeNightSignals returned invalid JSON — degrading to empty."), { byDate: {} };
	}
	return function(e) {
		const t = {}, r = /* @__PURE__ */ new Set(), n = I(e)?.signals;
		if (!Array.isArray(n)) return { byDate: t };
		for (const a of n) {
			const e = I(a), n = e?.analysis_date, o = e?.epoch_length_seconds;
			if (!e || "string" != typeof n || 0 === n.length || !Number.isInteger(o) || o <= 0) return { byDate: {} };
			if (r.has(n)) return { byDate: {} };
			r.add(n), Object.defineProperty(t, n, {
				value: e,
				enumerable: !0,
				configurable: !0,
				writable: !0
			});
		}
		return { byDate: t };
	}(n);
}
const X = {
	day_summaries: [],
	days_with_signal: 0
};
function Y(e, t, r) {
	const n = e[t];
	if ("function" != typeof n) return console.warn(`[wasm-worker] ${t} is not present in this WASM bundle — local marker placement degrades to null. Rebuild the actours WASM crate to enable it.`), null;
	const a = n(JSON.stringify(r));
	try {
		return JSON.parse(a);
	} catch {
		return console.warn(`[wasm-worker] ${t} returned invalid JSON — degrading to null.`), null;
	}
}
function L(e, t) {
	const r = "object" == typeof e && null !== e ? e : {}, n = r.nonwear, a = Array.isArray(n) ? n.map((e) => e ? 1 : 0) : null, o = r.elementSeconds, s = "number" == typeof o && Number.isFinite(o) && o > 0 ? o : t, i = Boolean(r.available) && null !== a, c = r.reason;
	return {
		nonwear: i ? a : null,
		conformance: "string" == typeof r.conformance ? r.conformance : i ? "conformant" : "unavailable",
		available: i,
		reason: "string" == typeof c ? c : null,
		elementSeconds: s
	};
}
function Z(e) {
	const { sampleRate: t } = e.signals;
	return null == t ? e : {
		...e,
		config: {
			...e.config ?? {},
			sampleRate: t
		}
	};
}
"undefined" != typeof self && "undefined" == typeof window && (S(), i(M({
	detectNonwearUnified: async (e) => function(e, t) {
		const r = t.signals.epochSeconds, n = (e) => ({
			nonwear: null,
			conformance: "unavailable",
			available: !1,
			reason: e,
			elementSeconds: r
		}), a = e.detectNonwearUnified;
		if ("function" != typeof a) return console.warn("[wasm-worker] detectNonwearUnified is not present in this WASM bundle — local raw nonwear degrades to unavailable. Rebuild the actours WASM crate to enable it."), n("detectNonwearUnified export missing (stale WASM bundle)");
		let o;
		try {
			o = JSON.parse(a(JSON.stringify(Z(t))));
		} catch {
			return console.warn("[wasm-worker] detectNonwearUnified returned invalid JSON — degrading to unavailable."), n("detectNonwearUnified returned invalid JSON");
		}
		return L(o, r);
	}(await $(), e),
	detectNonwearUnifiedBatch: async (e, t) => function(e, t, r) {
		const n = r.epochSeconds, a = {}, o = (e) => ({
			nonwear: null,
			conformance: "unavailable",
			available: !1,
			reason: e,
			elementSeconds: n
		}), s = e.detectNonwearUnified;
		if ("function" != typeof s) {
			console.warn("[wasm-worker] detectNonwearUnified is not present in this WASM bundle — local raw nonwear degrades to unavailable. Rebuild the actours WASM crate to enable it.");
			for (const e of t) a[e] = o("detectNonwearUnified export missing (stale WASM bundle)");
			return a;
		}
		const i = s, c = Z({
			algorithm: "",
			signals: r
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
			a[p] = L(t, n);
		}
		return a;
	}(await $(), e, t),
	scoreEpochs: async (e) => function(e, t) {
		const r = t.signals.epochSeconds, n = (e) => ({
			sleepWake: null,
			conformance: "unavailable",
			available: !1,
			reason: e,
			elementSeconds: r
		}), a = e.scoreEpochs;
		if ("function" != typeof a) return console.warn("[wasm-worker] scoreEpochs is not present in this WASM bundle — unified local scoring degrades to unavailable. Rebuild the actours WASM crate to enable it."), n("scoreEpochs export missing (stale WASM bundle)");
		let o;
		try {
			o = JSON.parse(a(JSON.stringify(Z(t))));
		} catch {
			return console.warn("[wasm-worker] scoreEpochs returned invalid JSON — degrading to unavailable."), n("scoreEpochs returned invalid JSON");
		}
		return function(e, t) {
			const r = "object" == typeof e && null !== e ? e : {}, n = r.sleepWake, a = Array.isArray(n) ? n.map((e) => e ? 1 : 0) : null, o = r.elementSeconds, s = "number" == typeof o && Number.isFinite(o) && o > 0 ? o : t, i = Boolean(r.available) && null !== a, c = r.reason;
			return {
				sleepWake: i ? a : null,
				conformance: "string" == typeof r.conformance ? r.conformance : i ? "conformant" : "unavailable",
				available: i,
				reason: "string" == typeof c ? c : null,
				elementSeconds: s
			};
		}(o, r);
	}(await $(), e),
	async scoreSadeh(e, t) {
		const r = await $(), n = new Uint8Array(r.scoreSadeh(e, t));
		return g(n, [n.buffer]);
	},
	async scoreColeKripke(e, t) {
		const r = await $(), n = new Uint8Array(r.scoreColeKripke(e, t));
		return g(n, [n.buffer]);
	},
	async detectNonwear(e) {
		const t = await $(), r = new Uint8Array(t.detectNonwear(e));
		return g(r, [r.buffer]);
	},
	async detectNonwearChoi2011(e, t = 60) {
		const r = await $(), n = new Uint8Array("function" == typeof r.detectNonwearChoi2011Epoch ? r.detectNonwearChoi2011Epoch(e, t) : r.detectNonwearChoi2011(e));
		return g(n, [n.buffer]);
	},
	parseActigraphCsv: async (e, t) => V((await $()).parseActigraphCsv(e, t), "parseActigraphCsv"),
	parseGeneactivCsv: async (e) => V((await $()).parseGeneactivCsv(e), "parseGeneactivCsv"),
	isGeneactivFormat: async (e) => (await $()).isGeneactivFormat(e),
	async csvBufferClear(e) {
		(await $()).csvBufferClear(e);
	},
	async csvBufferAppend(e) {
		(await $()).csvBufferAppend(e);
	},
	parseGeneactivCsvBuffered: async () => V((await $()).parseGeneactivCsvBuffered(), "parseGeneactivCsvBuffered"),
	parseActigraphCsvBuffered: async (e) => V((await $()).parseActigraphCsvBuffered(e), "parseActigraphCsvBuffered"),
	async streamParseStart(e, t, r = 60) {
		const n = await $();
		"function" == typeof n.streamParseStartWithEpoch ? n.streamParseStartWithEpoch(e, t, r) : n.streamParseStart(e, t);
	},
	async streamParseStartData(e, t) {
		(await $()).streamParseStartData(e, t);
	},
	streamParseFeed: async (e) => (await $()).streamParseFeed(e),
	async streamParseFinish() {
		const e = (await $()).streamParseFinish();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinish: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const t = new Float64Array(e.timestampsMs), r = new Float64Array(e.axisX), n = new Float64Array(e.axisY), a = new Float64Array(e.axisZ), o = new Float64Array(e.vectorMagnitude), s = new Float64Array(e.temperature);
		return g({
			timestampsMs: t,
			axisX: r,
			axisY: n,
			axisZ: a,
			vectorMagnitude: o,
			temperature: s,
			sampleFrequency: e.sampleFrequency,
			headerRowsSkipped: e.headerRowsSkipped
		}, [
			t.buffer,
			r.buffer,
			n.buffer,
			a.buffer,
			o.buffer,
			s.buffer
		]);
	},
	async streamParseFinishChunk() {
		const e = (await $()).streamParseFinishChunk();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinishChunk: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const t = new Float64Array(e.timestampsMs), r = new Float64Array(e.axisX), n = new Float64Array(e.axisY), a = new Float64Array(e.axisZ), o = new Float64Array(e.vectorMagnitude), s = new Float64Array(e.temperature), i = new Uint32Array(e.counts), c = new Uint32Array(e.tempCounts), u = new Float64Array(e.timestampsMs5s), l = new Float64Array(e.enmo5s), f = new Float64Array(e.anglez5s), p = new Float64Array(e.anglex5s ?? 0), m = new Float64Array(e.angley5s ?? 0), y = new Float64Array(e.mad5s ?? 0), d = new Float64Array(e.enmoa5s ?? 0), w = e, b = new Float64Array(w.zcx60s ?? []), h = new Float64Array(w.zcy60s ?? []), A = new Float64Array(w.zcz60s ?? []), S = new Uint32Array(e.counts5s), v = e, M = new Float64Array(v.mimsUnit ?? []), E = new Float64Array(v.mimsUnitX ?? []), N = new Float64Array(v.mimsUnitY ?? []), F = new Float64Array(v.mimsUnitZ ?? []), U = e;
		return g({
			timestampsMs: t,
			axisX: r,
			axisY: n,
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
			r.buffer,
			n.buffer,
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
	async neishabouriCounts(e, t, r, n, a) {
		const o = (await $()).neishabouriCounts(e, t, r, n, a), s = "object" == typeof o && null !== o ? o : null, i = s ? T(s.x) : null, c = s ? T(s.y) : null, u = s ? T(s.z) : null, l = s ? T(s.vm) : null;
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
	async zeroCrossingCounts(e, t, r, n, a) {
		const o = (await $()).zeroCrossingCounts(e, t, r, n, a), s = "object" == typeof o && null !== o ? o : null, i = s ? T(s.zcx) : null, c = s ? T(s.zcy) : null, u = s ? T(s.zcz) : null;
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
	async computeMimsUnit(e, t, r, n, a = {}) {
		const o = await $();
		if (!("computeMimsUnit" in o) || "function" != typeof o.computeMimsUnit) throw new Error("computeMimsUnit: current actours WASM bundle does not export MIMS_UNIT processing");
		const s = J(o.computeMimsUnit(e, t, r, n, a), "computeMimsUnit");
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
	async computeMimsUnitDataframe(e, t, r, n, a = {}) {
		const o = await $();
		if (!("computeMimsUnitDataframe" in o) || "function" != typeof o.computeMimsUnitDataframe) throw new Error("computeMimsUnitDataframe: current actours WASM bundle does not export MIMS_UNIT processing");
		const s = J(o.computeMimsUnitDataframe(e, t, r, n, a), "computeMimsUnitDataframe");
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
	async classifyActimetricPreschoolWristRf(e, t, r, n) {
		const a = await $(), o = "function" == typeof a.classifyActimetricPreschoolWristRfLagLead ? a.classifyActimetricPreschoolWristRfLagLead : "function" == typeof a.classifyActimetricPreschoolWristRf ? a.classifyActimetricPreschoolWristRf : "function" == typeof a.actimetricPreschoolWristRfClasses ? a.actimetricPreschoolWristRfClasses : "function" == typeof a.predictActimetricPreschoolWristRfClasses ? a.predictActimetricPreschoolWristRfClasses : null;
		if (!o) throw new Error("classifyActimetricPreschoolWristRf: current actours WASM bundle does not export actimetric preschool wrist RF inference");
		const s = function(e, t = "classifyActimetricPreschoolWristRf") {
			const r = B(e);
			if (r) return {
				classes: r,
				epochSeconds: 15
			};
			const n = "object" == typeof e && null !== e ? e : null, a = n ? B(n.classes) ?? B(n.activityClasses) ?? B(n.predictions) ?? B(n.activity) : null;
			if (!a) throw new Error(`${t}: unexpected WASM return shape — expected Uint8Array or { classes }`);
			const o = "number" == typeof n?.epochSeconds && Number.isFinite(n.epochSeconds) ? n.epochSeconds : "number" == typeof n?.epoch_seconds && Number.isFinite(n.epoch_seconds) ? n.epoch_seconds : 15, s = "string" == typeof n?.classifier ? n.classifier : void 0, i = "string" == typeof n?.model ? n.model : void 0;
			return {
				classes: a,
				epochSeconds: o,
				...s ? { classifier: s } : {},
				...i ? { model: i } : {}
			};
		}(o(e, t, r, n), "classifyActimetricPreschoolWristRf");
		return g(s, [s.classes.buffer]);
	},
	async lstmSpectralFeatures30s(e, t, r, n) {
		const a = await $(), o = a.lstmSpectralFeatures30s ?? a.spectralFeatures30s;
		if ("function" != typeof o) throw new Error("LSTM spectral feature extractor is not available in this WASM bundle");
		const s = o(e, t, r, n), i = "object" == typeof s && null !== s ? s : null, c = function(e) {
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
		const t = (await $()).scoreConsensusMajority(e), r = t instanceof Uint8Array ? t : new Uint8Array(t);
		return g(r, [r.buffer]);
	},
	async scoreConsensus(e, t) {
		const r = await $(), n = JSON.stringify({
			strategy: e,
			label_sequences: t.map((e) => Array.from(e))
		}), a = JSON.parse(r.scoreConsensus(n)), o = null != a && "object" == typeof a ? a.consensus : void 0;
		if (!Array.isArray(o)) throw new Error(`scoreConsensus: unexpected WASM return shape — got ${JSON.stringify(a)}`);
		const s = new Uint8Array(o);
		return g(s, [s.buffer]);
	},
	async computeSleepMetrics(e, t, r) {
		const n = (await $()).computeSleepMetrics(e, t, r);
		if (null == n || "object" != typeof n || "number" != typeof n.totalSleepTimeMinutes || "number" != typeof n.sleepEfficiency) throw new Error(`computeSleepMetrics: unexpected WASM return shape ${JSON.stringify(n)}`);
		return n;
	},
	computeFileDifficulty: async (e) => function(e, t) {
		const r = e.computeNightDifficulty;
		if ("function" != typeof r) return console.warn("[wasm-worker] computeNightDifficulty is not present in this WASM bundle — night difficulty degrades to empty. Rebuild the actours WASM crate to enable it."), { byDate: {} };
		const n = r(function(e) {
			return JSON.stringify(e);
		}(t));
		let a;
		try {
			a = JSON.parse(n);
		} catch {
			return console.warn("[wasm-worker] computeNightDifficulty returned invalid JSON — degrading to empty."), { byDate: {} };
		}
		return function(e) {
			const t = {}, r = /* @__PURE__ */ new Set(), n = I(e)?.results;
			if (!Array.isArray(n)) return { byDate: t };
			for (const a of n) {
				const e = F(a);
				if (!e) return { byDate: {} };
				const n = e.canonicalResult.analysis_date;
				if (r.has(n)) return { byDate: {} };
				r.add(n), Object.defineProperty(t, n, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				});
			}
			return { byDate: t };
		}(a);
	}(await $(), e),
	computeFileSignals: async (e) => H(await $(), e),
	computeCircadian: async (e) => function(e, t) {
		const r = e.computeCircadian;
		if ("function" != typeof r) return console.warn("[wasm-worker] computeCircadian is not present in this WASM bundle — circadian analysis degrades to empty. Rebuild the actours WASM crate to enable it."), X;
		const n = r(JSON.stringify(t));
		let a;
		try {
			a = JSON.parse(n);
		} catch {
			return console.warn("[wasm-worker] computeCircadian returned invalid JSON — degrading to empty."), X;
		}
		return a && "object" == typeof a && Array.isArray(a.day_summaries) ? a : X;
	}(await $(), e),
	placeMarkers: async (e) => Y(await $(), "placeMarkers", e),
	placeNonwearMarkers: async (e) => Y(await $(), "placeNonwearMarkers", e),
	epochRawData: async (e, t, r, n, a) => V((await $()).epochRawData(e, t, r, n, a), "epochRawData"),
	async epochWithBandpass(e, t, r) {
		const n = (await $()).epochWithBandpass(e, t, r), a = "object" == typeof n && null !== n ? n : null, o = T(a?.timestamps), s = T(a?.counts);
		if (!o || !s) throw new Error("epochWithBandpass: unexpected WASM return shape");
		return g({
			timestamps: o,
			counts: s
		}, [o.buffer, s.buffer]);
	},
	async computeEnmo5s(e, t, r, n) {
		const a = await $();
		return new Float64Array(a.computeEnmo5s(e, t, r, n));
	},
	async computeAnglez5s(e, t, r, n) {
		const a = await $();
		return new Float64Array(a.computeAnglez5s(e, t, r, n));
	},
	async processRawXyz(e, t, r, n, a, o) {
		const s = (await $()).processRawXyz(e, t, r, n, a, o ?? void 0), i = "object" == typeof s && null !== s ? s : null, c = i ? T(i.enmo5s) : null, u = i ? T(i.anglez5s) : null, l = i ? T(i.countsX) : null, f = i ? T(i.countsY) : null, p = i ? T(i.countsZ) : null, m = i ? T(i.countsVm) : null;
		if (!(c && u && l && f && p && m)) throw new Error(`processRawXyz: unexpected WASM return shape — got ${JSON.stringify(s)}`);
		const y = (e) => T(e) ?? new Float64Array(0), d = i ? y(i.anglex5s) : new Float64Array(0), w = i ? y(i.angley5s) : new Float64Array(0), b = i ? y(i.mad5s) : new Float64Array(0), h = i ? y(i.enmoa5s) : new Float64Array(0);
		return g({
			enmo5s: c,
			anglez5s: u,
			anglex5s: d,
			angley5s: w,
			mad5s: b,
			enmoa5s: h,
			calibration: C(i?.calibration),
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
	async processRawXyzImputed(e, t, r, n, a, o, s = 60) {
		const i = await $(), c = "function" == typeof i.processRawXyzImputedWithEpoch ? i.processRawXyzImputedWithEpoch(e, t, r, n, a, o ?? void 0, s) : i.processRawXyzImputed(e, t, r, n, a, o ?? void 0), u = "object" == typeof c && null !== c ? c : null, l = u ? T(u.enmo5s) : null, f = u ? T(u.anglez5s) : null, p = u ? T(u.countsX) : null, m = u ? T(u.countsY) : null, y = u ? T(u.countsZ) : null, d = u ? T(u.countsVm) : null;
		if (!(l && f && p && m && y && d)) throw new Error(`processRawXyzImputed: unexpected WASM return shape — got ${JSON.stringify(c)}`);
		const w = (e) => T(e) ?? new Float64Array(0), b = u ? w(u.anglex5s) : new Float64Array(0), h = u ? w(u.angley5s) : new Float64Array(0), A = u ? w(u.mad5s) : new Float64Array(0), S = u ? w(u.enmoa5s) : new Float64Array(0);
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
			calibration: C(u?.calibration)
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
		const r = await $(), n = new Uint8Array(r.detectDetach(e, t));
		return g(n, [n.buffer]);
	},
	detectHdcza: async (e, t = "wrist", r, n) => function(e) {
		if (!e) return null;
		const t = e;
		if ("object" != typeof e || "number" != typeof t.start_epoch || "number" != typeof t.end_epoch) throw new Error(`detectHdcza: unexpected WASM return shape — expected {start_epoch, end_epoch}, got ${JSON.stringify(e)}`);
		return {
			startEpoch: t.start_epoch,
			endEpoch: t.end_epoch
		};
	}((await $()).detectHdcza(e, t, r ?? null, n ?? null)),
	runFullPipelineV1: async (e, t, r, n, a) => function(e, t, r, n, a, o) {
		const s = e.runFullPipelineV1({
			contractVersion: R,
			semanticProfile: z,
			signal: {
				x: t,
				y: r,
				z: n,
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
					nonwearFraction: _(i.metadata.nonwearFraction)
				},
				days: i.days.map((e) => ({
					calendarDate: e.calendarDate,
					dayNumber: e.dayNumber,
					validHours: _(e.validHours),
					nonwearHours: _(e.nonwearHours),
					totalEpochs: e.totalEpochs,
					sedentaryMinutes: _(e.sedentaryMinutes),
					lightMinutes: _(e.lightMinutes),
					moderateMinutes: _(e.moderateMinutes),
					vigorousMinutes: _(e.vigorousMinutes),
					mvpaMinutes: _(e.mvpaMinutes),
					l5ValueMg: _(e.l5ValueMg),
					l5OnsetEpoch: e.l5OnsetEpoch,
					m5ValueMg: _(e.m5ValueMg),
					m5OnsetEpoch: e.m5OnsetEpoch,
					igGradient: _(e.igGradient),
					igIntercept: _(e.igIntercept),
					igRsquared: _(e.igRsquared),
					fragTpIn2ac: _(e.fragTpIn2ac),
					fragTpAc2in: _(e.fragTpAc2in),
					nFragments: e.nFragments,
					nightNumber: e.nightNumber,
					tstMinutes: k(e.tstMinutes),
					wasoMinutes: k(e.wasoMinutes),
					sleepEfficiency: k(e.sleepEfficiency),
					numberOfAwakenings: e.numberOfAwakenings,
					sptDurationHours: k(e.sptDurationHours),
					cleaningCode: e.cleaningCode
				}))
			}),
			execution: s.execution,
			provenance: s.provenance
		} : null;
		var i;
	}(await $(), e, t, r, n, a),
	getComputeIdentity: async () => function(e, t) {
		if (!/^[0-9a-f]{64}$/.test(t)) throw new Error("Actours WASM artifact identity is unavailable or invalid; refusing to attest this runtime");
		const r = "object" == typeof e && null !== e ? e : {}, n = (e, t) => {
			const r = e[t];
			if ("string" != typeof r || 0 === r.length) throw new Error(`Actours capability ${t} must be a non-empty string`);
			return r;
		}, a = n(r, "contractVersion");
		if (a !== R) throw new Error(`Unsupported Actours compute contract ${a}; expected ${R}`);
		const o = n(r, "crateVersion"), s = r.sourceRevision;
		if (null !== s && ("string" != typeof s || 0 === s.length)) throw new Error("Actours capability sourceRevision must be null or a non-empty string");
		const i = r.compiledFeatures;
		if (!Array.isArray(i) || !i.every((e) => "string" == typeof e && e.length > 0)) throw new Error("Actours capability compiledFeatures must be an array of non-empty strings");
		const c = n("object" == typeof r.execution && null !== r.execution ? r.execution : {}, "target");
		if ("wasm" !== c) throw new Error(`Unsupported Actours execution target ${c}; expected wasm`);
		if (!(Array.isArray(r.semanticProfiles) ? r.semanticProfiles : []).includes(z)) throw new Error(`Actours capability does not provide required semantic profile ${z}`);
		const u = n(r, "profileProofStatus");
		if ("proof_pending" !== u) throw new Error(`Unsupported Actours profile proof status ${u}; expected proof_pending`);
		const l = n(r, "temporalBasis");
		if ("utc" !== l) throw new Error(`Unsupported Actours temporal basis ${l}; expected utc`);
		return {
			contractVersion: a,
			crateVersion: o,
			sourceRevision: s,
			artifactSha256: t,
			compiledFeatures: i,
			target: c,
			semanticProfile: z,
			profileProofStatus: u,
			temporalBasis: l
		};
	}((await $()).getComputeCapabilitiesV1(), "6907515690d4bf0953e74e71f6ddfce4d55bd375dfeea0b7ca03b328e511862d"),
	runGgirFromEpoch: async (e, t, r, n, a) => (await $()).runGgirFromEpoch({
		anglez: e,
		enmo: t,
		sampleRateHz: r,
		startTsEpochSec: n,
		...a ? { invalid: a } : {}
	}, { ws3: 5 }),
	async readGgirMeta(e) {
		const t = await $();
		if ("function" != typeof t.readGgirMeta) throw new Error("readGgirMeta: current actours WASM bundle does not export GGIR RData import");
		const r = t.readGgirMeta(e), n = "object" == typeof r && null !== r ? r : null, a = n ? T(n.timestampsMs) : null, o = n ? T(n.enmo5s) : null, s = n ? T(n.anglez5s) : null, i = n ? B(n.invalidShort) : null, c = n ? B(n.nonwearShort) : null;
		if (!(a && o && s && i && c)) throw new Error(`readGgirMeta: unexpected WASM return shape — got ${JSON.stringify(r)}`);
		return g({
			timestampsMs: a,
			enmo5s: o,
			anglez5s: s,
			invalidShort: i,
			nonwearShort: c,
			epochSeconds: "number" == typeof n?.epochSeconds ? n.epochSeconds : 5,
			longEpochSeconds: "number" == typeof n?.longEpochSeconds ? n.longEpochSeconds : 900,
			nShort: "number" == typeof n?.nShort ? n.nShort : o.length,
			nLong: "number" == typeof n?.nLong ? n.nLong : 0
		}, [
			a.buffer,
			o.buffer,
			s.buffer,
			i.buffer,
			c.buffer
		]);
	},
	async scoreGgirSib(e, t, r) {
		const n = (await $()).scoreGgirSib(e, t, r);
		if ("object" != typeof n || null === n || !n.sadeh_ggir || !n.ck_ggir) throw new Error(`scoreGgirSib: unexpected WASM return shape — got ${JSON.stringify(n)}`);
		const a = n, o = new Uint8Array(a.sadeh_ggir), s = new Uint8Array(a.ck_ggir);
		return g({
			sadeh_ggir: o,
			ck_ggir: s
		}, [o.buffer, s.buffer]);
	},
	async scoreGgirHasib(e) {
		const t = (await $()).scoreGgirHasib(e);
		if (!(t instanceof Uint8Array)) throw new Error("scoreGgirHasib: unexpected WASM return shape — expected Uint8Array, got " + typeof t);
		const r = new Uint8Array(t);
		return g(r, [r.buffer]);
	},
	async scoreGgirHasibVariant(e, t, r) {
		const n = function(e, t) {
			if ("object" != typeof e || null === e) throw new Error("scoreGgirHasibVariant: unexpected WASM return shape — got " + typeof e);
			const r = e, n = B(r.sib);
			if (!n) throw new Error(`scoreGgirHasibVariant: missing sib array — got ${JSON.stringify(e)}`);
			return {
				algo: "string" == typeof r.algo ? r.algo : t,
				sib: n,
				nPostch: "number" == typeof r.nPostch ? r.nPostch : 0,
				nGaps: "number" == typeof r.nGaps ? r.nGaps : 0,
				nWake: "number" == typeof r.nWake ? r.nWake : 0,
				nSleep: "number" == typeof r.nSleep ? r.nSleep : 0,
				sleepFraction: "number" == typeof r.sleepFraction ? r.sleepFraction : 0,
				columnName: "string" == typeof r.columnName ? r.columnName : ""
			};
		}((await $()).scoreGgirHasibVariant({
			data: e,
			algo: t,
			...r ? { config: r } : {}
		}), t);
		return g(n, [n.sib.buffer]);
	},
	async detectGgirHasptVariant(e) {
		const t = function(e, t) {
			if ("object" != typeof e || null === e) throw new Error("detectGgirHasptVariant: unexpected WASM return shape — got " + typeof e);
			const r = e, n = B(r.nomov), a = T(r.rollingMedian);
			if (!n || !a) throw new Error(`detectGgirHasptVariant: missing output arrays — got ${JSON.stringify(e)}`);
			return {
				algo: "string" == typeof r.algo ? r.algo : t,
				guider: "string" == typeof r.guider ? r.guider : "",
				startEpoch: "number" == typeof r.startEpoch ? r.startEpoch : null,
				endEpoch: "number" == typeof r.endEpoch ? r.endEpoch : null,
				threshold: "number" == typeof r.threshold ? r.threshold : NaN,
				nomov: n,
				rollingMedian: a
			};
		}((await $()).detectGgirHasptVariant(e), e.algo);
		return g(t, [t.nomov.buffer, t.rollingMedian.buffer]);
	},
	async scoreAllDays(e) {
		const t = (await $()).scoreAllDays(e);
		if (!Array.isArray(t)) throw new Error("scoreAllDays: expected array from WASM, got " + typeof t);
		const r = (e) => e instanceof Uint8Array || Array.isArray(e), n = t[0];
		if (t.length > 0 && ("object" != typeof n || null === n || !r(n.sadeh_actilife) || !r(n.nonwear))) throw new Error(`scoreAllDays: unexpected element shape — got ${JSON.stringify(n)}`);
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
let K = null;
function Q() {
	return K || (K = (async () => {
		const e = await import("./actours-wn2f92dD.js");
		return await e.default(), "function" == typeof e.configureComputeMemoryBudgetV1 && e.configureComputeMemoryBudgetV1(D()), e;
	})().catch((e) => {
		throw K = null, e;
	})), K;
}
S(), i(M({
	parseGt3x: async (e) => (await Q()).parseGt3x(new Uint8Array(e)),
	extractCapsense: async (e) => (await Q()).extractCapsense(new Uint8Array(e)),
	parseGeneactivBin: async (e) => (await Q()).parseGeneactivBin(new Uint8Array(e)),
	async processGt3xFull(e, t = 60) {
		const r = await Q(), n = "function" == typeof r.processGt3xPart1WithEpoch ? () => r.processGt3xPart1WithEpoch(new Uint8Array(e), t) : "function" == typeof r.processGt3xPart1 ? () => r.processGt3xPart1(new Uint8Array(e)) : null, a = n ? n() : "function" == typeof r.processGt3xFullWithEpoch ? r.processGt3xFullWithEpoch(new Uint8Array(e), t) : r.processGt3xFull(new Uint8Array(e)), o = (e) => e instanceof Float64Array ? e : new Float64Array(e), s = (e) => e ? o(e) : new Float64Array(0), i = o(a.enmo5s), c = o(a.anglez5s), u = s(a.anglex5s), l = s(a.angley5s), f = s(a.mad5s), p = s(a.enmoa5s), m = o(a.countsX), y = o(a.countsY), d = o(a.countsZ), w = o(a.countsVm), b = s(a.zcx60s), h = s(a.zcy60s), A = s(a.zcz60s), S = s(a.mimsUnit), v = s(a.mimsUnitX), M = s(a.mimsUnitY), E = s(a.mimsUnitZ), N = (F = a.preschoolWristRfClasses) instanceof Uint8Array ? F : F ? new Uint8Array(F) : new Uint8Array(0);
		var F;
		const U = ((e) => e instanceof Float32Array ? e : e ? new Float32Array(e) : new Float32Array(0))(a.lstmFeatures30s);
		return g({
			enmo5s: i,
			anglez5s: c,
			anglex5s: u,
			angley5s: l,
			mad5s: f,
			enmoa5s: p,
			countsX: m,
			countsY: y,
			countsZ: d,
			countsVm: w,
			zcx60s: b,
			zcy60s: h,
			zcz60s: A,
			mimsUnit: S,
			mimsUnitX: v,
			mimsUnitY: M,
			mimsUnitZ: E,
			mimsAvailability: a.mimsAvailability ?? null,
			preschoolWristRfClasses: N,
			preschoolWristRfEpochSeconds: a.preschoolWristRfEpochSeconds ?? 15,
			lstmFeatures30s: U,
			lstmFeatureEpochs: a.lstmFeatureEpochs ?? 0,
			lstmFeatureBins: a.lstmFeatureBins ?? 0,
			lstmFeatureChannels: a.lstmFeatureChannels ?? 0,
			sampleRate: a.sampleRate,
			firstTsMs: a.firstTsMs,
			tzJump: a.tzJump,
			ggir: a.ggir ?? null,
			ggirError: a.ggirError ?? (n && !a.ggir ? "deferred: ordered Part-1 import; Parts 3-5 run on the saved 5 s series" : null),
			capsense: a.capsense,
			calibration: C(a.calibration)
		}, [
			i.buffer,
			c.buffer,
			u.buffer,
			l.buffer,
			f.buffer,
			p.buffer,
			m.buffer,
			y.buffer,
			d.buffer,
			w.buffer,
			b.buffer,
			h.buffer,
			A.buffer,
			S.buffer,
			v.buffer,
			M.buffer,
			E.buffer,
			N.buffer,
			U.buffer
		]);
	}
}));
