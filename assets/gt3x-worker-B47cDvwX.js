/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const e = Symbol("Comlink.proxy"), t = Symbol("Comlink.endpoint"), n = Symbol("Comlink.releaseProxy"), r = Symbol("Comlink.finalizer"), a = Symbol("Comlink.thrown"), s = (e) => "object" == typeof e && null !== e || "function" == typeof e, o = new Map([["proxy", {
	canHandle: (t) => s(t) && t[e],
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
		}), g(e, t, [], void 0);
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
function i(t, n = globalThis, s = ["*"]) {
	n.addEventListener("message", function o(u) {
		if (!u || !u.data) return;
		if (!function(e, t) {
			for (const n of e) {
				if (t === n || "*" === n) return !0;
				if (n instanceof RegExp && n.test(t)) return !0;
			}
			return !1;
		}(s, u.origin)) return void console.warn(`Invalid origin '${u.origin}' for comlink proxy`);
		const { id: l, type: p, path: f } = Object.assign({ path: [] }, u.data), g = (u.data.argumentList || []).map(w);
		let m;
		try {
			const n = f.slice(0, -1).reduce((e, t) => e[t], t), r = f.reduce((e, t) => e[t], t);
			switch (p) {
				case "GET":
					m = r;
					break;
				case "SET":
					n[f.slice(-1)[0]] = w(u.data.value), m = !0;
					break;
				case "APPLY":
					m = r.apply(n, g);
					break;
				case "CONSTRUCT":
					m = function(t) {
						return Object.assign(t, { [e]: !0 });
					}(new r(...g));
					break;
				case "ENDPOINT":
					{
						const { port1: e, port2: n } = new MessageChannel();
						i(t, n), m = d(e, [e]);
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
			const [a, s] = h(e);
			n.postMessage(Object.assign(Object.assign({}, a), { id: l }), s), "RELEASE" === p && (n.removeEventListener("message", o), c(n), r in t && "function" == typeof t[r] && t[r]());
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
const p = /* @__PURE__ */ new WeakMap(), f = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const t = (p.get(e) || 0) - 1;
	p.set(e, t), 0 === t && l(e);
});
function g(e, r, a = [], s = function() {}) {
	let o = !1;
	const i = new Proxy(s, {
		get(t, s) {
			if (u(o), s === n) return () => {
				(function(e) {
					f && f.unregister(e);
				})(i), l(e), r.clear(), o = !0;
			};
			if ("then" === s) {
				if (0 === a.length) return { then: () => i };
				const t = b(e, r, {
					type: "GET",
					path: a.map((e) => e.toString())
				}).then(w);
				return t.then.bind(t);
			}
			return g(e, r, [...a, s]);
		},
		set(t, n, s) {
			u(o);
			const [i, c] = h(s);
			return b(e, r, {
				type: "SET",
				path: [...a, n].map((e) => e.toString()),
				value: i
			}, c).then(w);
		},
		apply(n, s, i) {
			u(o);
			const c = a[a.length - 1];
			if (c === t) return b(e, r, { type: "ENDPOINT" }).then(w);
			if ("bind" === c) return g(e, r, a.slice(0, -1));
			const [l, p] = m(i);
			return b(e, r, {
				type: "APPLY",
				path: a.map((e) => e.toString()),
				argumentList: l
			}, p).then(w);
		},
		construct(t, n) {
			u(o);
			const [s, i] = m(n);
			return b(e, r, {
				type: "CONSTRUCT",
				path: a.map((e) => e.toString()),
				argumentList: s
			}, i).then(w);
		}
	});
	return function(e, t) {
		const n = (p.get(t) || 0) + 1;
		p.set(t, n), f && f.register(e, t, e);
	}(i, e), i;
}
function m(e) {
	const t = e.map(h);
	return [t.map((e) => e[0]), (n = t.map((e) => e[1]), Array.prototype.concat.apply([], n))];
	var n;
}
const y = /* @__PURE__ */ new WeakMap();
function d(e, t) {
	return y.set(e, t), e;
}
function h(e) {
	for (const [t, n] of o) if (n.canHandle(e)) {
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
		case "HANDLER": return o.get(e.name).deserialize(e.value);
		case "RAW": return e.value;
	}
}
function b(e, t, n, r) {
	return new Promise((a) => {
		const s = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		t.set(s, a), e.start && e.start(), e.postMessage(Object.assign({ id: s }, n), r);
	});
}
let E = null;
function v() {
	return E || (E = (async () => {
		const e = await import("./actours-BxkXg9Up.js");
		return await e.default(), e;
	})().catch((e) => {
		throw E = null, e;
	})), E;
}
i({
	parseGt3x: async (e) => (await v()).parseGt3x(new Uint8Array(e)),
	extractCapsense: async (e) => (await v()).extractCapsense(new Uint8Array(e)),
	parseGeneactivBin: async (e) => (await v()).parseGeneactivBin(new Uint8Array(e)),
	async processGt3xFull(e) {
		const t = (await v()).processGt3xFull(new Uint8Array(e)), n = (e) => e instanceof Float64Array ? e : new Float64Array(e), r = n(t.enmo5s), a = n(t.anglez5s), s = n(t.countsX), o = n(t.countsY), i = n(t.countsZ), c = n(t.countsVm);
		return d({
			enmo5s: r,
			anglez5s: a,
			countsX: s,
			countsY: o,
			countsZ: i,
			countsVm: c,
			sampleRate: t.sampleRate,
			firstTsMs: t.firstTsMs,
			tzJump: t.tzJump,
			ggir: t.ggir ?? null,
			ggirError: t.ggirError ?? null,
			capsense: t.capsense
		}, [
			r.buffer,
			a.buffer,
			s.buffer,
			o.buffer,
			i.buffer,
			c.buffer
		]);
	}
});
