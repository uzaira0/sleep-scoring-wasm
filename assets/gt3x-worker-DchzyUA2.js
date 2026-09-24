/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const e = Symbol("Comlink.proxy"), t = Symbol("Comlink.endpoint"), r = Symbol("Comlink.releaseProxy"), n = Symbol("Comlink.finalizer"), a = Symbol("Comlink.thrown"), s = (e) => "object" == typeof e && null !== e || "function" == typeof e, o = /* @__PURE__ */ new Map([["proxy", {
	canHandle: (t) => s(t) && t[e],
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
		}), p(e, t, [], void 0);
	}(e))
}], ["throw", {
	canHandle: (e) => s(e) && a in e,
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
function i(t, r = globalThis, s = ["*"]) {
	r.addEventListener("message", function o(u) {
		if (!u || !u.data) return;
		if (!function(e, t) {
			for (const r of e) {
				if (t === r || "*" === r) return !0;
				if (r instanceof RegExp && r.test(t)) return !0;
			}
			return !1;
		}(s, u.origin)) return void console.warn(`Invalid origin '${u.origin}' for comlink proxy`);
		const { id: l, type: f, path: d } = Object.assign({ path: [] }, u.data), p = (u.data.argumentList || []).map(b);
		let m;
		try {
			const r = d.slice(0, -1).reduce((e, t) => e[t], t), n = d.reduce((e, t) => e[t], t);
			switch (f) {
				case "GET":
					m = n;
					break;
				case "SET":
					r[d.slice(-1)[0]] = b(u.data.value), m = !0;
					break;
				case "APPLY":
					m = n.apply(r, p);
					break;
				case "CONSTRUCT":
					m = function(t) {
						return Object.assign(t, { [e]: !0 });
					}(new n(...p));
					break;
				case "ENDPOINT":
					{
						const { port1: e, port2: r } = new MessageChannel();
						i(t, r), m = y(e, [e]);
					}
					break;
				case "RELEASE":
					m = void 0;
					break;
				default: return;
			}
		} catch (h) {
			m = {
				value: h,
				[a]: 0
			};
		}
		Promise.resolve(m).catch((e) => ({
			value: e,
			[a]: 0
		})).then((e) => {
			const [a, s] = g(e);
			r.postMessage(Object.assign(Object.assign({}, a), { id: l }), s), "RELEASE" === f && (r.removeEventListener("message", o), c(r), n in t && "function" == typeof t[n] && t[n]());
		}).catch((e) => {
			const [t, n] = g({
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
	return w(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
		c(e);
	});
}
const f = /* @__PURE__ */ new WeakMap(), d = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const t = (f.get(e) || 0) - 1;
	f.set(e, t), 0 === t && l(e);
});
function p(e, n, a = [], s = function() {}) {
	let o = !1;
	const i = new Proxy(s, {
		get(t, s) {
			if (u(o), s === r) return () => {
				(function(e) {
					d && d.unregister(e);
				})(i), l(e), n.clear(), o = !0;
			};
			if ("then" === s) {
				if (0 === a.length) return { then: () => i };
				const t = w(e, n, {
					type: "GET",
					path: a.map((e) => e.toString())
				}).then(b);
				return t.then.bind(t);
			}
			return p(e, n, [...a, s]);
		},
		set(t, r, s) {
			u(o);
			const [i, c] = g(s);
			return w(e, n, {
				type: "SET",
				path: [...a, r].map((e) => e.toString()),
				value: i
			}, c).then(b);
		},
		apply(r, s, i) {
			u(o);
			const c = a[a.length - 1];
			if (c === t) return w(e, n, { type: "ENDPOINT" }).then(b);
			if ("bind" === c) return p(e, n, a.slice(0, -1));
			const [l, f] = m(i);
			return w(e, n, {
				type: "APPLY",
				path: a.map((e) => e.toString()),
				argumentList: l
			}, f).then(b);
		},
		construct(t, r) {
			u(o);
			const [s, i] = m(r);
			return w(e, n, {
				type: "CONSTRUCT",
				path: a.map((e) => e.toString()),
				argumentList: s
			}, i).then(b);
		}
	});
	return function(e, t) {
		const r = (f.get(t) || 0) + 1;
		f.set(t, r), d && d.register(e, t, e);
	}(i, e), i;
}
function m(e) {
	const t = e.map(g);
	return [t.map((e) => e[0]), (r = t.map((e) => e[1]), Array.prototype.concat.apply([], r))];
	var r;
}
const h = /* @__PURE__ */ new WeakMap();
function y(e, t) {
	return h.set(e, t), e;
}
function g(e) {
	for (const [t, r] of o) if (r.canHandle(e)) {
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
	}, h.get(e) || []];
}
function b(e) {
	switch (e.type) {
		case "HANDLER": return o.get(e.name).deserialize(e.value);
		case "RAW": return e.value;
	}
}
function w(e, t, r, n) {
	return new Promise((a) => {
		const s = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		t.set(s, a), e.start && e.start(), e.postMessage(Object.assign({ id: s }, r), n);
	});
}
let E = null;
const v = /unreachable|RuntimeError|out of bounds|wasm/i, A = 1073741824, S = /* @__PURE__ */ new WeakSet();
async function M() {
	const e = await async function(e) {
		if (!0 !== (t = e.scope).pinnedSingleThread && t.sharedArrayBuffer && t.crossOriginIsolated && t.cores > 1) {
			let t;
			try {
				const r = await e.loadThreaded();
				if (t = r, S.has(r)) throw new Error("thread pool start was abandoned earlier in this worker");
				await r.default();
				const n = Math.min(4, e.scope.cores);
				return r.threadPoolReady() || await function(e, t) {
					let r;
					const n = new Promise((e, n) => {
						r = setTimeout(() => {
							n(/* @__PURE__ */ new Error(`thread pool did not start within ${String(t)} ms`));
						}, t);
					});
					return Promise.race([e, n]).finally(() => {
						clearTimeout(r);
					});
				}(r.startThreadPool(n), e.poolStartTimeoutMs ?? 15e3), {
					mod: r,
					runtime: {
						threaded: !0,
						threads: n
					}
				};
			} catch (n) {
				void 0 !== t && S.add(t), e.warn("[wasm] threaded runtime unavailable, using the single-thread package", n);
			}
		}
		var t;
		const r = await e.loadSingle();
		return await r.default(), {
			mod: r,
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
		loadThreaded: () => import("./actours-B98QMZMa.js"),
		loadSingle: () => import("./actours-13q558xm.js"),
		warn: (e, t) => {
			console.warn(e, t);
		}
	});
	return function(e) {
		const t = /* @__PURE__ */ new Float64Array(16), r = new Uint8Array(e.scoreSadeh(t, -4));
		if (16 !== r.length) throw new Error(`WASM integrity check failed: scoreSadeh length ${String(r.length)}, expected ${String(16)}`);
		for (let n = 0; n < 16; n++) if (1 !== r[n]) throw new Error(`WASM integrity check failed: scoreSadeh(zeros)[${String(n)}] = ${String(r[n])}, expected 1. Bundle may be corrupt — clear the site cache and reload.`);
	}(e.mod), e;
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
const k = [
	"skipped_disabled",
	"recalibrated",
	"identity_fallback_no_valid_fit",
	"identity_fallback_error_increased",
	"candidate_retained_below_preferred_quality"
];
function x(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function T(e, t) {
	const r = Array.isArray(e) ? e : [], n = (e) => x(r[e]) ?? t;
	return [
		n(0),
		n(1),
		n(2)
	];
}
function z(e, t) {
	const r = "object" == typeof e && null !== e ? e : {};
	return {
		scale: T(r.scale, t ? 1 : 0),
		offset: T(r.offset, 0),
		temperatureOffset: T(r.temperatureOffset, 0),
		errorStart: x(r.errorStart),
		errorEnd: x(r.errorEnd),
		fitAttempted: !0 === r.fitAttempted,
		numPoints: Math.max(0, Math.round(x(r.numPoints) ?? 0)),
		hoursUsed: x(r.hoursUsed) ?? 0,
		success: !0 === r.success,
		message: "string" == typeof r.message ? r.message : ""
	};
}
function F(e) {
	if ("object" != typeof e || null === e) return null;
	const t = e, r = t.disposition;
	if ("string" != typeof r || !k.includes(r)) return null;
	const n = z(t, !0);
	return {
		...n,
		disposition: r,
		observed: "observed" in t ? z(t.observed, !0) : n,
		applied: "applied" in t ? z(t.applied, !0) : n
	};
}
let P = null;
function R() {
	return P || (P = (async () => {
		const { mod: e, runtime: t } = await M();
		return "function" == typeof e.configureComputeMemoryBudgetV1 && e.configureComputeMemoryBudgetV1(function() {
			const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
			if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return A;
			const t = Math.floor(1024 * e * 1024 * 1024 / 4);
			return Math.min(2147483648, Math.max(A, t));
		}()), e;
	})().catch((e) => {
		throw P = null, e;
	})), P;
}
(function() {
	const e = console.error.bind(console);
	console.error = (...t) => {
		try {
			const r = t.map((e) => "string" == typeof e ? e : e instanceof Error ? e.stack ?? e.message : String(e)).join(" ");
			if (/panicked at|RuntimeError|unreachable/i.test(r)) {
				const t = /([A-Za-z0-9_.-]+\.rs):(\d+)/.exec(r);
				E = t ? `Rust trap at ${t[1]}:${t[2]}` : "Rust runtime trap", e("[wasm-worker] WASM runtime trap captured");
				return;
			}
		} catch {}
		e(...t);
	};
})(), i(function(e) {
	const t = {};
	for (const r of Object.keys(e)) {
		const n = e[r];
		if ("function" != typeof n) {
			t[r] = n;
			continue;
		}
		const a = n;
		t[r] = async (...e) => {
			E = null;
			try {
				return await a(...e);
			} catch (t) {
				const e = t instanceof Error ? t.message : String(t);
				if (E && v.test(e)) throw new Error(`WASM panic in ${r}(): ${E}`, { cause: t });
				throw t;
			}
		};
	}
	return t;
}({
	parseGt3x: async (e) => (await R()).parseGt3x(new Uint8Array(e)),
	extractCapsense: async (e) => (await R()).extractCapsense(new Uint8Array(e)),
	parseGeneactivBin: async (e) => (await R()).parseGeneactivBin(new Uint8Array(e)),
	async processGt3xFull(e, t = 60) {
		const r = await R(), n = "function" == typeof r.processGt3xPart1WithEpoch ? () => r.processGt3xPart1WithEpoch(new Uint8Array(e), t) : "function" == typeof r.processGt3xPart1 ? () => r.processGt3xPart1(new Uint8Array(e)) : null, a = n ? n() : "function" == typeof r.processGt3xFullWithEpoch ? r.processGt3xFullWithEpoch(new Uint8Array(e), t) : r.processGt3xFull(new Uint8Array(e)), s = (e) => e instanceof Float64Array ? e : new Float64Array(e), o = (e) => e ? s(e) : /* @__PURE__ */ new Float64Array(0), i = s(a.enmo5s), c = s(a.anglez5s), u = o(a.anglex5s), l = o(a.angley5s), f = o(a.mad5s), d = o(a.enmoa5s), p = s(a.countsX), m = s(a.countsY), h = s(a.countsZ), g = s(a.countsVm), b = o(a.zcx60s), w = o(a.zcy60s), E = o(a.zcz60s), v = o(a.mimsUnit), A = o(a.mimsUnitX), S = o(a.mimsUnitY), M = o(a.mimsUnitZ), k = (x = a.preschoolWristRfClasses) instanceof Uint8Array ? x : x ? new Uint8Array(x) : /* @__PURE__ */ new Uint8Array(0);
		var x;
		const T = ((e) => e instanceof Float32Array ? e : e ? new Float32Array(e) : /* @__PURE__ */ new Float32Array(0))(a.lstmFeatures30s);
		return y({
			enmo5s: i,
			anglez5s: c,
			anglex5s: u,
			angley5s: l,
			mad5s: f,
			enmoa5s: d,
			countsX: p,
			countsY: m,
			countsZ: h,
			countsVm: g,
			zcx60s: b,
			zcy60s: w,
			zcz60s: E,
			mimsUnit: v,
			mimsUnitX: A,
			mimsUnitY: S,
			mimsUnitZ: M,
			mimsAvailability: a.mimsAvailability ?? null,
			preschoolWristRfClasses: k,
			preschoolWristRfEpochSeconds: a.preschoolWristRfEpochSeconds ?? 15,
			lstmFeatures30s: T,
			lstmFeatureEpochs: a.lstmFeatureEpochs ?? 0,
			lstmFeatureBins: a.lstmFeatureBins ?? 0,
			lstmFeatureChannels: a.lstmFeatureChannels ?? 0,
			sampleRate: a.sampleRate,
			firstTsMs: a.firstTsMs,
			tzJump: a.tzJump,
			ggir: a.ggir ?? null,
			ggirError: a.ggirError ?? (n && !a.ggir ? "deferred: ordered Part-1 import; Parts 3-5 run on the saved 5 s series" : null),
			capsense: a.capsense,
			calibration: F(a.calibration)
		}, [
			i.buffer,
			c.buffer,
			u.buffer,
			l.buffer,
			f.buffer,
			d.buffer,
			p.buffer,
			m.buffer,
			h.buffer,
			g.buffer,
			b.buffer,
			w.buffer,
			E.buffer,
			v.buffer,
			A.buffer,
			S.buffer,
			M.buffer,
			k.buffer,
			T.buffer
		]);
	}
}));
