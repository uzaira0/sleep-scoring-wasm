/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const e = Symbol("Comlink.proxy"), t = Symbol("Comlink.endpoint"), r = Symbol("Comlink.releaseProxy"), n = Symbol("Comlink.finalizer"), a = Symbol("Comlink.thrown"), o = (e) => "object" == typeof e && null !== e || "function" == typeof e, s = /* @__PURE__ */ new Map([["proxy", {
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
const S = /unreachable|RuntimeError|out of bounds|wasm/i;
function v(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function M(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function E(e) {
	const t = M(e), r = t?.analysis_date, n = M(t?.intrinsic), a = n?.state;
	if (!t || "string" != typeof r || 0 === r.length || !n || "string" != typeof a || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(a)) return null;
	const o = n.score, s = n.verdict, i = n.infinite_reason, c = {}, u = [], l = t.per_guider;
	if (Array.isArray(l)) for (const d of l) {
		const e = M(d);
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
	const f = M(n.features), p = f && Array.isArray(f.feature_values) ? f : null, m = M(n.legacy_complexity_features) ?? (null === p ? f : null) ?? {}, y = t.computed_at;
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
function x(e, t) {
	const r = Array.isArray(e) ? e : [], n = (e) => F(r[e]) ?? t;
	return [
		n(0),
		n(1),
		n(2)
	];
}
function O(e, t) {
	const r = "object" == typeof e && null !== e ? e : {};
	return {
		scale: x(r.scale, t ? 1 : 0),
		offset: x(r.offset, 0),
		temperatureOffset: x(r.temperatureOffset, 0),
		errorStart: F(r.errorStart),
		errorEnd: F(r.errorEnd),
		fitAttempted: !0 === r.fitAttempted,
		numPoints: Math.max(0, Math.round(F(r.numPoints) ?? 0)),
		hoursUsed: F(r.hoursUsed) ?? 0,
		success: !0 === r.success,
		message: "string" == typeof r.message ? r.message : ""
	};
}
function U(e) {
	if ("object" != typeof e || null === e) return null;
	const t = e, r = t.disposition;
	if ("string" != typeof r || !N.includes(r)) return null;
	const n = O(t, !0);
	return {
		...n,
		disposition: r,
		observed: "observed" in t ? O(t.observed, !0) : n,
		applied: "applied" in t ? O(t.applied, !0) : n
	};
}
const W = 1073741824, _ = "actours.compute.v1", k = "actours-corrected-3.3.7-v2";
function R(e) {
	return "number" == typeof e ? e : "nan" === e ? NaN : "positive_infinity" === e ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
}
function C(e) {
	return null === e ? null : R(e);
}
let z = null, P = !1;
function D() {
	return z || (z = (async () => {
		const e = await import("./actours-CtNpqgA6.js");
		return await e.default(), "configureComputeMemoryBudgetV1" in e && "function" == typeof e.configureComputeMemoryBudgetV1 && e.configureComputeMemoryBudgetV1(function() {
			const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
			if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return W;
			const t = Math.floor(1024 * e * 1024 * 1024 / 4);
			return Math.min(2147483648, Math.max(W, t));
		}()), "initThreadPool" in e && "function" == typeof e.initThreadPool && "undefined" != typeof SharedArrayBuffer && "undefined" != typeof navigator && navigator.hardwareConcurrency > 1 && await e.initThreadPool(navigator.hardwareConcurrency), P || (function(e) {
			const t = /* @__PURE__ */ new Float64Array(16), r = new Uint8Array(e.scoreSadeh(t, -4));
			if (16 !== r.length) throw new Error(`WASM integrity check failed: scoreSadeh length ${r.length}, expected 16`);
			for (let n = 0; n < 16; n++) if (1 !== r[n]) throw new Error(`WASM integrity check failed: scoreSadeh(zeros)[${n}] = ${r[n]}, expected 1. Bundle may be corrupt — clear the site cache and reload.`);
		}(e), P = !0), e;
	})().catch((e) => {
		throw z = null, e;
	})), z;
}
function j(e, t = "computeMimsUnit") {
	if ("object" != typeof e || null === e) throw new Error(`${t}: unexpected WASM return shape — got ${typeof e}`);
	const r = e, n = $(r.mimsUnit);
	if (!n) throw new Error(`${t}: missing mimsUnit array — got ${JSON.stringify(e)}`);
	const a = r.epochSeconds;
	if ("number" != typeof a || !Number.isFinite(a) || a <= 0) throw new Error(`${t}: missing positive epochSeconds — got ${JSON.stringify(e)}`);
	const o = (e) => $(r[e]) ?? void 0, s = {
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
function T(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function V(e, t) {
	const r = e.computeNightSignals;
	if ("function" != typeof r) return console.warn("[wasm-worker] computeNightSignals is not present in this WASM bundle — night-signal detail degrades to empty."), { byDate: {} };
	let n;
	try {
		n = JSON.parse(r(function(e) {
			return JSON.stringify(function(e) {
				const t = v(e.config), r = v(t?.signals) ?? t;
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
		const t = {}, r = /* @__PURE__ */ new Set(), n = T(e)?.signals;
		if (!Array.isArray(n)) return { byDate: t };
		for (const a of n) {
			const e = T(a), n = e?.analysis_date, o = e?.epoch_length_seconds;
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
const I = {
	day_summaries: [],
	days_with_signal: 0
};
function B(e, t, r) {
	const n = e[t];
	if ("function" != typeof n) return console.warn(`[wasm-worker] ${t} is not present in this WASM bundle — local marker placement degrades to null. Rebuild the actours WASM crate to enable it.`), null;
	const a = n(JSON.stringify(r));
	try {
		return JSON.parse(a);
	} catch {
		return console.warn(`[wasm-worker] ${t} returned invalid JSON — degrading to null.`), null;
	}
}
function H(e, t) {
	const r = "object" == typeof e && null !== e ? e : {}, n = r.nonwear, a = Array.isArray(n) ? n.map((e) => e ? 1 : 0) : null, o = r.elementSeconds, s = "number" == typeof o && Number.isFinite(o) && o > 0 ? o : t, i = Boolean(r.available) && null !== a, c = r.reason;
	return {
		nonwear: i ? a : null,
		conformance: "string" == typeof r.conformance ? r.conformance : i ? "conformant" : "unavailable",
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
			const r = t.map((e) => "string" == typeof e ? e : e instanceof Error ? e.stack ?? e.message : String(e)).join(" ");
			if (/panicked at|RuntimeError|unreachable/i.test(r)) {
				const t = /([A-Za-z0-9_.-]+\.rs):(\d+)/.exec(r);
				A = t ? `Rust trap at ${t[1]}:${t[2]}` : "Rust runtime trap", e("[wasm-worker] WASM runtime trap captured");
				return;
			}
		} catch {}
		e(...t);
	};
}(), i(function(e) {
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
				if (A && S.test(e)) throw new Error(`WASM panic in ${r}(): ${A}`, { cause: t });
				throw t;
			}
		};
	}
	return t;
}({
	async readDiaryWorkbook(e, t) {
		const { readDiaryWorkbookSheet: r } = await import("./diary-xlsx-adapter-DthwMDD1.js");
		return r(e, t);
	},
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
			o = JSON.parse(a(JSON.stringify(X(t))));
		} catch {
			return console.warn("[wasm-worker] detectNonwearUnified returned invalid JSON — degrading to unavailable."), n("detectNonwearUnified returned invalid JSON");
		}
		return H(o, r);
	}(await D(), e),
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
		const i = s, c = X({
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
			a[p] = H(t, n);
		}
		return a;
	}(await D(), e, t),
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
			o = JSON.parse(a(JSON.stringify(X(t))));
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
	}(await D(), e),
	async scoreSadeh(e, t) {
		const r = await D(), n = new Uint8Array(r.scoreSadeh(e, t));
		return g(n, [n.buffer]);
	},
	async scoreColeKripke(e, t) {
		const r = await D(), n = new Uint8Array(r.scoreColeKripke(e, t));
		return g(n, [n.buffer]);
	},
	async detectNonwear(e) {
		const t = await D(), r = new Uint8Array(t.detectNonwear(e));
		return g(r, [r.buffer]);
	},
	async detectNonwearChoi2011(e, t = 60) {
		const r = await D(), n = new Uint8Array("function" == typeof r.detectNonwearChoi2011Epoch ? r.detectNonwearChoi2011Epoch(e, t) : r.detectNonwearChoi2011(e));
		return g(n, [n.buffer]);
	},
	parseActigraphCsv: async (e, t) => J((await D()).parseActigraphCsv(e, t), "parseActigraphCsv"),
	parseGeneactivCsv: async (e) => J((await D()).parseGeneactivCsv(e), "parseGeneactivCsv"),
	isGeneactivFormat: async (e) => (await D()).isGeneactivFormat(e),
	async csvBufferClear(e) {
		(await D()).csvBufferClear(e);
	},
	async csvBufferAppend(e) {
		(await D()).csvBufferAppend(e);
	},
	parseGeneactivCsvBuffered: async () => J((await D()).parseGeneactivCsvBuffered(), "parseGeneactivCsvBuffered"),
	parseActigraphCsvBuffered: async (e) => J((await D()).parseActigraphCsvBuffered(e), "parseActigraphCsvBuffered"),
	async streamParseStart(e, t, r = 60) {
		const n = await D();
		"function" == typeof n.streamParseStartWithEpoch ? n.streamParseStartWithEpoch(e, t, r) : n.streamParseStart(e, t);
	},
	async streamParseStartData(e, t) {
		(await D()).streamParseStartData(e, t);
	},
	streamParseFeed: async (e) => (await D()).streamParseFeed(e),
	async streamParseFinish() {
		const e = (await D()).streamParseFinish();
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
		const e = (await D()).streamParseFinishChunk();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinishChunk: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const t = new Float64Array(e.timestampsMs), r = new Float64Array(e.axisX), n = new Float64Array(e.axisY), a = new Float64Array(e.axisZ), o = new Float64Array(e.vectorMagnitude), s = new Float64Array(e.temperature), i = new Uint32Array(e.counts), c = new Uint32Array(e.tempCounts), u = new Float64Array(e.timestampsMs5s), l = new Float64Array(e.enmo5s), f = new Float64Array(e.anglez5s), p = new Float64Array(e.anglex5s ?? 0), m = new Float64Array(e.angley5s ?? 0), y = new Float64Array(e.mad5s ?? 0), d = new Float64Array(e.enmoa5s ?? 0), w = e, b = new Float64Array(w.zcx60s ?? []), h = new Float64Array(w.zcy60s ?? []), A = new Float64Array(w.zcz60s ?? []), S = new Uint32Array(e.counts5s), v = e, M = new Float64Array(v.mimsUnit ?? []), E = new Float64Array(v.mimsUnitX ?? []), N = new Float64Array(v.mimsUnitY ?? []), F = new Float64Array(v.mimsUnitZ ?? []), x = e;
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
			rawRetentionDegraded: x.rawRetentionDegraded ?? !1,
			canonicalPassDegraded: x.canonicalPassDegraded ?? !1,
			canonicalPassReason: x.canonicalPassReason ?? null
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
		const o = (await D()).neishabouriCounts(e, t, r, n, a), s = "object" == typeof o && null !== o ? o : null, i = s ? $(s.x) : null, c = s ? $(s.y) : null, u = s ? $(s.z) : null, l = s ? $(s.vm) : null;
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
		const o = (await D()).zeroCrossingCounts(e, t, r, n, a), s = "object" == typeof o && null !== o ? o : null, i = s ? $(s.zcx) : null, c = s ? $(s.zcy) : null, u = s ? $(s.zcz) : null;
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
		const o = await D();
		if (!("computeMimsUnit" in o) || "function" != typeof o.computeMimsUnit) throw new Error("computeMimsUnit: current actours WASM bundle does not export MIMS_UNIT processing");
		const s = j(o.computeMimsUnit(e, t, r, n, a), "computeMimsUnit");
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
		const o = await D();
		if (!("computeMimsUnitDataframe" in o) || "function" != typeof o.computeMimsUnitDataframe) throw new Error("computeMimsUnitDataframe: current actours WASM bundle does not export MIMS_UNIT processing");
		const s = j(o.computeMimsUnitDataframe(e, t, r, n, a), "computeMimsUnitDataframe");
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
		const a = await D(), o = "function" == typeof a.classifyActimetricPreschoolWristRfLagLead ? a.classifyActimetricPreschoolWristRfLagLead : "function" == typeof a.classifyActimetricPreschoolWristRf ? a.classifyActimetricPreschoolWristRf : "function" == typeof a.actimetricPreschoolWristRfClasses ? a.actimetricPreschoolWristRfClasses : "function" == typeof a.predictActimetricPreschoolWristRfClasses ? a.predictActimetricPreschoolWristRfClasses : null;
		if (!o) throw new Error("classifyActimetricPreschoolWristRf: current actours WASM bundle does not export actimetric preschool wrist RF inference");
		const s = function(e, t = "classifyActimetricPreschoolWristRf") {
			const r = G(e);
			if (r) return {
				classes: r,
				epochSeconds: 15
			};
			const n = "object" == typeof e && null !== e ? e : null, a = n ? G(n.classes) ?? G(n.activityClasses) ?? G(n.predictions) ?? G(n.activity) : null;
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
		const a = await D(), o = a.lstmSpectralFeatures30s ?? a.spectralFeatures30s;
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
	async scoreConsensus(e, t) {
		const r = await D(), n = JSON.stringify({
			strategy: e,
			label_sequences: t.map((e) => Array.from(e))
		}), a = JSON.parse(r.scoreConsensus(n)), o = null != a && "object" == typeof a ? a.consensus : void 0;
		if (!Array.isArray(o)) throw new Error(`scoreConsensus: unexpected WASM return shape — got ${JSON.stringify(a)}`);
		const s = new Uint8Array(o);
		return g(s, [s.buffer]);
	},
	async computeSleepMetrics(e, t, r) {
		const n = (await D()).computeSleepMetrics(e, t, r);
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
			const t = {}, r = /* @__PURE__ */ new Set(), n = T(e)?.results;
			if (!Array.isArray(n)) return { byDate: t };
			for (const a of n) {
				const e = E(a);
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
	}(await D(), e),
	computeFileSignals: async (e) => V(await D(), e),
	computeCircadian: async (e) => function(e, t) {
		const r = e.computeCircadian;
		if ("function" != typeof r) throw new Error("computeCircadian is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const n = r(JSON.stringify(t));
		let a;
		try {
			a = JSON.parse(n);
		} catch {
			return console.warn("[wasm-worker] computeCircadian returned invalid JSON — degrading to empty."), I;
		}
		return a && "object" == typeof a && Array.isArray(a.day_summaries) ? a : I;
	}(await D(), e),
	aggregateEpochSeries: async (e) => function(e, t) {
		const r = e.aggregateEpochSeries;
		if ("function" != typeof r) throw new Error("aggregateEpochSeries is not present in this WASM bundle. Rebuild the actours WASM crate.");
		const n = r(t);
		if (null == n || "object" != typeof n) throw new Error("aggregateEpochSeries returned an invalid result.");
		const a = n;
		if (!a.series || !Array.isArray(a.series.timestamps_ms)) throw new Error("aggregateEpochSeries returned an invalid result.");
		return n;
	}(await D(), e),
	placeMarkers: async (e) => B(await D(), "placeMarkers", e),
	placeNonwearMarkers: async (e) => B(await D(), "placeNonwearMarkers", e),
	epochRawData: async (e, t, r, n, a) => J((await D()).epochRawData(e, t, r, n, a), "epochRawData"),
	async epochWithBandpass(e, t, r) {
		const n = (await D()).epochWithBandpass(e, t, r), a = "object" == typeof n && null !== n ? n : null, o = $(a?.timestamps), s = $(a?.counts);
		if (!o || !s) throw new Error("epochWithBandpass: unexpected WASM return shape");
		return g({
			timestamps: o,
			counts: s
		}, [o.buffer, s.buffer]);
	},
	async computeEnmo5s(e, t, r, n) {
		const a = await D();
		return new Float64Array(a.computeEnmo5s(e, t, r, n));
	},
	async computeAnglez5s(e, t, r, n) {
		const a = await D();
		return new Float64Array(a.computeAnglez5s(e, t, r, n));
	},
	async processRawXyz(e, t, r, n, a, o) {
		const s = (await D()).processRawXyz(e, t, r, n, a, o ?? void 0), i = "object" == typeof s && null !== s ? s : null, c = i ? $(i.enmo5s) : null, u = i ? $(i.anglez5s) : null, l = i ? $(i.countsX) : null, f = i ? $(i.countsY) : null, p = i ? $(i.countsZ) : null, m = i ? $(i.countsVm) : null;
		if (!(c && u && l && f && p && m)) throw new Error(`processRawXyz: unexpected WASM return shape — got ${JSON.stringify(s)}`);
		const y = (e) => $(e) ?? /* @__PURE__ */ new Float64Array(0), d = i ? y(i.anglex5s) : /* @__PURE__ */ new Float64Array(0), w = i ? y(i.angley5s) : /* @__PURE__ */ new Float64Array(0), b = i ? y(i.mad5s) : /* @__PURE__ */ new Float64Array(0), h = i ? y(i.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
		return g({
			enmo5s: c,
			anglez5s: u,
			anglex5s: d,
			angley5s: w,
			mad5s: b,
			enmoa5s: h,
			calibration: U(i?.calibration),
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
		const i = await D(), c = "function" == typeof i.processRawXyzImputedWithEpoch ? i.processRawXyzImputedWithEpoch(e, t, r, n, a, o ?? void 0, s) : i.processRawXyzImputed(e, t, r, n, a, o ?? void 0), u = "object" == typeof c && null !== c ? c : null, l = u ? $(u.enmo5s) : null, f = u ? $(u.anglez5s) : null, p = u ? $(u.countsX) : null, m = u ? $(u.countsY) : null, y = u ? $(u.countsZ) : null, d = u ? $(u.countsVm) : null;
		if (!(l && f && p && m && y && d)) throw new Error(`processRawXyzImputed: unexpected WASM return shape — got ${JSON.stringify(c)}`);
		const w = (e) => $(e) ?? /* @__PURE__ */ new Float64Array(0), b = u ? w(u.anglex5s) : /* @__PURE__ */ new Float64Array(0), h = u ? w(u.angley5s) : /* @__PURE__ */ new Float64Array(0), A = u ? w(u.mad5s) : /* @__PURE__ */ new Float64Array(0), S = u ? w(u.enmoa5s) : /* @__PURE__ */ new Float64Array(0);
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
			calibration: U(u?.calibration)
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
	async detectDetachFromAccelerationG(e, t) {
		const r = await D(), n = new Uint8Array(r.detectDetachFromAccelerationG(e, t));
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
	}((await D()).detectHdcza(e, t, r ?? null, n ?? null)),
	runFullPipelineV1: async (e, t, r, n, a) => function(e, t, r, n, a, o) {
		const s = e.runFullPipelineV1({
			contractVersion: _,
			semanticProfile: k,
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
					nonwearFraction: R(i.metadata.nonwearFraction)
				},
				days: i.days.map((e) => ({
					calendarDate: e.calendarDate,
					dayNumber: e.dayNumber,
					validHours: R(e.validHours),
					nonwearHours: R(e.nonwearHours),
					totalEpochs: e.totalEpochs,
					sedentaryMinutes: R(e.sedentaryMinutes),
					lightMinutes: R(e.lightMinutes),
					moderateMinutes: R(e.moderateMinutes),
					vigorousMinutes: R(e.vigorousMinutes),
					mvpaMinutes: R(e.mvpaMinutes),
					l5ValueMg: R(e.l5ValueMg),
					l5OnsetEpoch: e.l5OnsetEpoch,
					m5ValueMg: R(e.m5ValueMg),
					m5OnsetEpoch: e.m5OnsetEpoch,
					igGradient: R(e.igGradient),
					igIntercept: R(e.igIntercept),
					igRsquared: R(e.igRsquared),
					fragTpIn2ac: R(e.fragTpIn2ac),
					fragTpAc2in: R(e.fragTpAc2in),
					nFragments: e.nFragments,
					nightNumber: e.nightNumber,
					tstMinutes: C(e.tstMinutes),
					wasoMinutes: C(e.wasoMinutes),
					sleepEfficiency: C(e.sleepEfficiency),
					numberOfAwakenings: e.numberOfAwakenings,
					sptDurationHours: C(e.sptDurationHours),
					cleaningCode: e.cleaningCode
				}))
			}),
			execution: s.execution,
			provenance: s.provenance
		} : null;
		var i;
	}(await D(), e, t, r, n, a),
	getComputeIdentity: async () => function(e, t) {
		if (!/^[0-9a-f]{64}$/.test(t)) throw new Error("Actours WASM artifact identity is unavailable or invalid; refusing to attest this runtime");
		const r = "object" == typeof e && null !== e ? e : {}, n = (e, t) => {
			const r = e[t];
			if ("string" != typeof r || 0 === r.length) throw new Error(`Actours capability ${t} must be a non-empty string`);
			return r;
		}, a = n(r, "contractVersion");
		if (a !== _) throw new Error(`Unsupported Actours compute contract ${a}; expected ${_}`);
		const o = n(r, "crateVersion"), s = r.sourceRevision;
		if (null !== s && ("string" != typeof s || 0 === s.length)) throw new Error("Actours capability sourceRevision must be null or a non-empty string");
		const i = r.compiledFeatures;
		if (!Array.isArray(i) || !i.every((e) => "string" == typeof e && e.length > 0)) throw new Error("Actours capability compiledFeatures must be an array of non-empty strings");
		const c = n("object" == typeof r.execution && null !== r.execution ? r.execution : {}, "target");
		if ("wasm" !== c) throw new Error(`Unsupported Actours execution target ${c}; expected wasm`);
		if (!(Array.isArray(r.semanticProfiles) ? r.semanticProfiles : []).includes(k)) throw new Error(`Actours capability does not provide required semantic profile ${k}`);
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
			semanticProfile: k,
			profileProofStatus: u,
			temporalBasis: l
		};
	}((await D()).getComputeCapabilitiesV1(), "68a0f599b5956455baed96f4bef41cfe6cfed9dd4798dedd064fd638d166b449"),
	runGgirFromEpoch: async (e, t, r, n, a) => (await D()).runGgirFromEpoch({
		anglez: e,
		enmo: t,
		sampleRateHz: r,
		startTsEpochSec: n,
		...a ? { invalid: a } : {}
	}, { ws3: 5 }),
	async readGgirMeta(e) {
		const t = await D();
		if ("function" != typeof t.readGgirMeta) throw new Error("readGgirMeta: current actours WASM bundle does not export GGIR RData import");
		const r = t.readGgirMeta(e), n = "object" == typeof r && null !== r ? r : null, a = n ? $(n.timestampsMs) : null, o = n ? $(n.enmo5s) : null, s = n ? $(n.anglez5s) : null, i = n ? $(n.anglex5s) : null, c = n ? $(n.angley5s) : null, u = n ? G(n.invalidShort) : null, l = n ? G(n.nonwearShort) : null;
		if (!(a && o && s && u && l)) throw new Error(`readGgirMeta: unexpected WASM return shape — got ${JSON.stringify(r)}`);
		return g({
			timestampsMs: a,
			enmo5s: o,
			anglez5s: s,
			...i ? { anglex5s: i } : {},
			...c ? { angley5s: c } : {},
			invalidShort: u,
			nonwearShort: l,
			epochSeconds: "number" == typeof n?.epochSeconds ? n.epochSeconds : 5,
			longEpochSeconds: "number" == typeof n?.longEpochSeconds ? n.longEpochSeconds : 900,
			nShort: "number" == typeof n?.nShort ? n.nShort : o.length,
			nLong: "number" == typeof n?.nLong ? n.nLong : 0
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
	async scoreGgirSib(e, t, r) {
		const n = (await D()).scoreGgirSib(e, t, r);
		if ("object" != typeof n || null === n || !n.sadeh_ggir || !n.ck_ggir) throw new Error(`scoreGgirSib: unexpected WASM return shape — got ${JSON.stringify(n)}`);
		const a = n, o = new Uint8Array(a.sadeh_ggir), s = new Uint8Array(a.ck_ggir);
		return g({
			sadeh_ggir: o,
			ck_ggir: s
		}, [o.buffer, s.buffer]);
	},
	async scoreGgirHasib(e) {
		const t = (await D()).scoreGgirHasib(e);
		if (!(t instanceof Uint8Array)) throw new Error("scoreGgirHasib: unexpected WASM return shape — expected Uint8Array, got " + typeof t);
		const r = new Uint8Array(t);
		return g(r, [r.buffer]);
	},
	async scoreGgirHasibVariant(e, t, r) {
		const n = function(e, t) {
			if ("object" != typeof e || null === e) throw new Error("scoreGgirHasibVariant: unexpected WASM return shape — got " + typeof e);
			const r = e, n = G(r.sib);
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
		}((await D()).scoreGgirHasibVariant({
			data: e,
			algo: t,
			...r ? { config: r } : {}
		}), t);
		return g(n, [n.sib.buffer]);
	},
	async detectGgirHasptVariant(e) {
		const t = function(e, t) {
			if ("object" != typeof e || null === e) throw new Error("detectGgirHasptVariant: unexpected WASM return shape — got " + typeof e);
			const r = e, n = G(r.nomov), a = $(r.rollingMedian);
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
		}((await D()).detectGgirHasptVariant(e), e.algo);
		return g(t, [t.nomov.buffer, t.rollingMedian.buffer]);
	},
	async scoreAllDays(e) {
		const t = (await D()).scoreAllDays(e);
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
