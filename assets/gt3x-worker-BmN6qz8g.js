/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const e = Symbol("Comlink.proxy"), t = Symbol("Comlink.endpoint"), n = Symbol("Comlink.releaseProxy"), r = Symbol("Comlink.finalizer"), s = Symbol("Comlink.thrown"), a = (e) => "object" == typeof e && null !== e || "function" == typeof e, o = new Map([["proxy", {
	canHandle: (t) => a(t) && t[e],
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
	canHandle: (e) => a(e) && s in e,
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
function i(t, n = globalThis, a = ["*"]) {
	n.addEventListener("message", function o(u) {
		if (!u || !u.data) return;
		if (!function(e, t) {
			for (const n of e) {
				if (t === n || "*" === n) return !0;
				if (n instanceof RegExp && n.test(t)) return !0;
			}
			return !1;
		}(a, u.origin)) return void console.warn(`Invalid origin '${u.origin}' for comlink proxy`);
		const { id: l, type: f, path: p } = Object.assign({ path: [] }, u.data), m = (u.data.argumentList || []).map(h);
		let d;
		try {
			const n = p.slice(0, -1).reduce((e, t) => e[t], t), r = p.reduce((e, t) => e[t], t);
			switch (f) {
				case "GET":
					d = r;
					break;
				case "SET":
					n[p.slice(-1)[0]] = h(u.data.value), d = !0;
					break;
				case "APPLY":
					d = r.apply(n, m);
					break;
				case "CONSTRUCT":
					d = function(t) {
						return Object.assign(t, { [e]: !0 });
					}(new r(...m));
					break;
				case "ENDPOINT":
					{
						const { port1: e, port2: n } = new MessageChannel();
						i(t, n), d = g(e, [e]);
					}
					break;
				case "RELEASE":
					d = void 0;
					break;
				default: return;
			}
		} catch (y) {
			d = {
				value: y,
				[s]: 0
			};
		}
		Promise.resolve(d).catch((e) => ({
			value: e,
			[s]: 0
		})).then((e) => {
			const [s, a] = b(e);
			n.postMessage(Object.assign(Object.assign({}, s), { id: l }), a), "RELEASE" === f && (n.removeEventListener("message", o), c(n), r in t && "function" == typeof t[r] && t[r]());
		}).catch((e) => {
			const [t, r] = b({
				value: /* @__PURE__ */ new TypeError("Unserializable return value"),
				[s]: 0
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
	return w(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
		c(e);
	});
}
const f = /* @__PURE__ */ new WeakMap(), p = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const t = (f.get(e) || 0) - 1;
	f.set(e, t), 0 === t && l(e);
});
function m(e, r, s = [], a = function() {}) {
	let o = !1;
	const i = new Proxy(a, {
		get(t, a) {
			if (u(o), a === n) return () => {
				(function(e) {
					p && p.unregister(e);
				})(i), l(e), r.clear(), o = !0;
			};
			if ("then" === a) {
				if (0 === s.length) return { then: () => i };
				const t = w(e, r, {
					type: "GET",
					path: s.map((e) => e.toString())
				}).then(h);
				return t.then.bind(t);
			}
			return m(e, r, [...s, a]);
		},
		set(t, n, a) {
			u(o);
			const [i, c] = b(a);
			return w(e, r, {
				type: "SET",
				path: [...s, n].map((e) => e.toString()),
				value: i
			}, c).then(h);
		},
		apply(n, a, i) {
			u(o);
			const c = s[s.length - 1];
			if (c === t) return w(e, r, { type: "ENDPOINT" }).then(h);
			if ("bind" === c) return m(e, r, s.slice(0, -1));
			const [l, f] = d(i);
			return w(e, r, {
				type: "APPLY",
				path: s.map((e) => e.toString()),
				argumentList: l
			}, f).then(h);
		},
		construct(t, n) {
			u(o);
			const [a, i] = d(n);
			return w(e, r, {
				type: "CONSTRUCT",
				path: s.map((e) => e.toString()),
				argumentList: a
			}, i).then(h);
		}
	});
	return function(e, t) {
		const n = (f.get(t) || 0) + 1;
		f.set(t, n), p && p.register(e, t, e);
	}(i, e), i;
}
function d(e) {
	const t = e.map(b);
	return [t.map((e) => e[0]), (n = t.map((e) => e[1]), Array.prototype.concat.apply([], n))];
	var n;
}
const y = /* @__PURE__ */ new WeakMap();
function g(e, t) {
	return y.set(e, t), e;
}
function b(e) {
	for (const [t, n] of o) if (n.canHandle(e)) {
		const [r, s] = n.serialize(e);
		return [{
			type: "HANDLER",
			name: t,
			value: r
		}, s];
	}
	return [{
		type: "RAW",
		value: e
	}, y.get(e) || []];
}
function h(e) {
	switch (e.type) {
		case "HANDLER": return o.get(e.name).deserialize(e.value);
		case "RAW": return e.value;
	}
}
function w(e, t, n, r) {
	return new Promise((s) => {
		const a = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		t.set(a, s), e.start && e.start(), e.postMessage(Object.assign({ id: a }, n), r);
	});
}
let E = null;
const v = /unreachable|RuntimeError|out of bounds|wasm/i, A = 1073741824;
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
const x = [
	"skipped_disabled",
	"recalibrated",
	"identity_fallback_no_valid_fit",
	"identity_fallback_error_increased",
	"candidate_retained_below_preferred_quality"
];
function M(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function S(e, t) {
	const n = Array.isArray(e) ? e : [], r = (e) => M(n[e]) ?? t;
	return [
		r(0),
		r(1),
		r(2)
	];
}
function k(e, t) {
	const n = "object" == typeof e && null !== e ? e : {};
	return {
		scale: S(n.scale, t ? 1 : 0),
		offset: S(n.offset, 0),
		temperatureOffset: S(n.temperatureOffset, 0),
		errorStart: M(n.errorStart),
		errorEnd: M(n.errorEnd),
		fitAttempted: !0 === n.fitAttempted,
		numPoints: Math.max(0, Math.round(M(n.numPoints) ?? 0)),
		hoursUsed: M(n.hoursUsed) ?? 0,
		success: !0 === n.success,
		message: "string" == typeof n.message ? n.message : ""
	};
}
function z(e) {
	if ("object" != typeof e || null === e) return null;
	const t = e, n = t.disposition;
	if ("string" != typeof n || !x.includes(n)) return null;
	const r = k(t, !0);
	return {
		...r,
		disposition: n,
		observed: "observed" in t ? k(t.observed, !0) : r,
		applied: "applied" in t ? k(t.applied, !0) : r
	};
}
let F = null;
function R() {
	return F || (F = (async () => {
		const e = await import("./actours-wn2f92dD.js");
		return await e.default(), "function" == typeof e.configureComputeMemoryBudgetV1 && e.configureComputeMemoryBudgetV1(function() {
			const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
			if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return A;
			const t = Math.floor(1024 * e * 1024 * 1024 / 4);
			return Math.min(2147483648, Math.max(A, t));
		}()), e;
	})().catch((e) => {
		throw F = null, e;
	})), F;
}
(function() {
	const e = console.error.bind(console);
	console.error = (...t) => {
		try {
			const n = t.map((e) => "string" == typeof e ? e : e instanceof Error ? e.stack ?? e.message : String(e)).join(" ");
			if (/panicked at|RuntimeError|unreachable/i.test(n)) {
				const t = /([A-Za-z0-9_.-]+\.rs):(\d+)/.exec(n);
				E = t ? `Rust trap at ${t[1]}:${t[2]}` : "Rust runtime trap", e("[wasm-worker] WASM runtime trap captured");
				return;
			}
		} catch {}
		e(...t);
	};
})(), i(function(e) {
	const t = {};
	for (const n of Object.keys(e)) {
		const r = e[n];
		if ("function" != typeof r) {
			t[n] = r;
			continue;
		}
		const s = r;
		t[n] = async (...e) => {
			E = null;
			try {
				return await s(...e);
			} catch (t) {
				const e = t instanceof Error ? t.message : String(t);
				if (E && v.test(e)) throw new Error(`WASM panic in ${n}(): ${E}`, { cause: t });
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
		const n = await R(), r = "function" == typeof n.processGt3xPart1WithEpoch ? () => n.processGt3xPart1WithEpoch(new Uint8Array(e), t) : "function" == typeof n.processGt3xPart1 ? () => n.processGt3xPart1(new Uint8Array(e)) : null, s = r ? r() : "function" == typeof n.processGt3xFullWithEpoch ? n.processGt3xFullWithEpoch(new Uint8Array(e), t) : n.processGt3xFull(new Uint8Array(e)), a = (e) => e instanceof Float64Array ? e : new Float64Array(e), o = (e) => e ? a(e) : new Float64Array(0), i = a(s.enmo5s), c = a(s.anglez5s), u = o(s.anglex5s), l = o(s.angley5s), f = o(s.mad5s), p = o(s.enmoa5s), m = a(s.countsX), d = a(s.countsY), y = a(s.countsZ), b = a(s.countsVm), h = o(s.zcx60s), w = o(s.zcy60s), E = o(s.zcz60s), v = o(s.mimsUnit), A = o(s.mimsUnitX), x = o(s.mimsUnitY), M = o(s.mimsUnitZ), S = (k = s.preschoolWristRfClasses) instanceof Uint8Array ? k : k ? new Uint8Array(k) : new Uint8Array(0);
		var k;
		const F = ((e) => e instanceof Float32Array ? e : e ? new Float32Array(e) : new Float32Array(0))(s.lstmFeatures30s);
		return g({
			enmo5s: i,
			anglez5s: c,
			anglex5s: u,
			angley5s: l,
			mad5s: f,
			enmoa5s: p,
			countsX: m,
			countsY: d,
			countsZ: y,
			countsVm: b,
			zcx60s: h,
			zcy60s: w,
			zcz60s: E,
			mimsUnit: v,
			mimsUnitX: A,
			mimsUnitY: x,
			mimsUnitZ: M,
			mimsAvailability: s.mimsAvailability ?? null,
			preschoolWristRfClasses: S,
			preschoolWristRfEpochSeconds: s.preschoolWristRfEpochSeconds ?? 15,
			lstmFeatures30s: F,
			lstmFeatureEpochs: s.lstmFeatureEpochs ?? 0,
			lstmFeatureBins: s.lstmFeatureBins ?? 0,
			lstmFeatureChannels: s.lstmFeatureChannels ?? 0,
			sampleRate: s.sampleRate,
			firstTsMs: s.firstTsMs,
			tzJump: s.tzJump,
			ggir: s.ggir ?? null,
			ggirError: s.ggirError ?? (r && !s.ggir ? "deferred: ordered Part-1 import; Parts 3-5 run on the saved 5 s series" : null),
			capsense: s.capsense,
			calibration: z(s.calibration)
		}, [
			i.buffer,
			c.buffer,
			u.buffer,
			l.buffer,
			f.buffer,
			p.buffer,
			m.buffer,
			d.buffer,
			y.buffer,
			b.buffer,
			h.buffer,
			w.buffer,
			E.buffer,
			v.buffer,
			A.buffer,
			x.buffer,
			M.buffer,
			S.buffer,
			F.buffer
		]);
	}
}));
