/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const e = Symbol("Comlink.proxy"), n = Symbol("Comlink.endpoint"), t = Symbol("Comlink.releaseProxy"), r = Symbol("Comlink.finalizer"), o = Symbol("Comlink.thrown"), a = (e) => "object" == typeof e && null !== e || "function" == typeof e, s = /* @__PURE__ */ new Map([["proxy", {
	canHandle: (n) => a(n) && n[e],
	serialize(e) {
		const { port1: n, port2: t } = new MessageChannel();
		return i(e, n), [t, [t]];
	},
	deserialize: (e) => (e.start(), c(e))
}], ["throw", {
	canHandle: (e) => a(e) && o in e,
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
function i(e, n = globalThis, t = ["*"]) {
	n.addEventListener("message", function a(s) {
		if (!s || !s.data) return;
		if (!function(e, n) {
			for (const t of e) {
				if (n === t || "*" === t) return !0;
				if (t instanceof RegExp && t.test(n)) return !0;
			}
			return !1;
		}(t, s.origin)) return void console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
		const { id: c, type: u, path: m } = Object.assign({ path: [] }, s.data), p = (s.data.argumentList || []).map(v);
		let f;
		try {
			const n = m.slice(0, -1).reduce((e, n) => e[n], e), t = m.reduce((e, n) => e[n], e);
			switch (u) {
				case "GET":
					f = t;
					break;
				case "SET":
					n[m.slice(-1)[0]] = v(s.data.value), f = !0;
					break;
				case "APPLY":
					f = t.apply(n, p);
					break;
				case "CONSTRUCT":
					f = h(new t(...p));
					break;
				case "ENDPOINT":
					{
						const { port1: n, port2: t } = new MessageChannel();
						i(e, t), f = y(n, [n]);
					}
					break;
				case "RELEASE":
					f = void 0;
					break;
				default: return;
			}
		} catch (d) {
			f = {
				value: d,
				[o]: 0
			};
		}
		Promise.resolve(f).catch((e) => ({
			value: e,
			[o]: 0
		})).then((t) => {
			const [o, s] = E(t);
			n.postMessage(Object.assign(Object.assign({}, o), { id: c }), s), "RELEASE" === u && (n.removeEventListener("message", a), l(n), r in e && "function" == typeof e[r] && e[r]());
		}).catch((e) => {
			const [t, r] = E({
				value: /* @__PURE__ */ new TypeError("Unserializable return value"),
				[o]: 0
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
function c(e, n) {
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
	}), d(e, t, [], n);
}
function u(e) {
	if (e) throw new Error("Proxy has been released and is not useable");
}
function m(e) {
	return k(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
		l(e);
	});
}
const p = /* @__PURE__ */ new WeakMap(), f = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const n = (p.get(e) || 0) - 1;
	p.set(e, n), 0 === n && m(e);
});
function d(e, r, o = [], a = function() {}) {
	let s = !1;
	const i = new Proxy(a, {
		get(n, a) {
			if (u(s), a === t) return () => {
				(function(e) {
					f && f.unregister(e);
				})(i), m(e), r.clear(), s = !0;
			};
			if ("then" === a) {
				if (0 === o.length) return { then: () => i };
				const n = k(e, r, {
					type: "GET",
					path: o.map((e) => e.toString())
				}).then(v);
				return n.then.bind(n);
			}
			return d(e, r, [...o, a]);
		},
		set(n, t, a) {
			u(s);
			const [i, l] = E(a);
			return k(e, r, {
				type: "SET",
				path: [...o, t].map((e) => e.toString()),
				value: i
			}, l).then(v);
		},
		apply(t, a, i) {
			u(s);
			const l = o[o.length - 1];
			if (l === n) return k(e, r, { type: "ENDPOINT" }).then(v);
			if ("bind" === l) return d(e, r, o.slice(0, -1));
			const [c, m] = w(i);
			return k(e, r, {
				type: "APPLY",
				path: o.map((e) => e.toString()),
				argumentList: c
			}, m).then(v);
		},
		construct(n, t) {
			u(s);
			const [a, i] = w(t);
			return k(e, r, {
				type: "CONSTRUCT",
				path: o.map((e) => e.toString()),
				argumentList: a
			}, i).then(v);
		}
	});
	return function(e, n) {
		const t = (p.get(n) || 0) + 1;
		p.set(n, t), f && f.register(e, n, e);
	}(i, e), i;
}
function w(e) {
	const n = e.map(E);
	return [n.map((e) => e[0]), (t = n.map((e) => e[1]), Array.prototype.concat.apply([], t))];
	var t;
}
const g = /* @__PURE__ */ new WeakMap();
function y(e, n) {
	return g.set(e, n), e;
}
function h(n) {
	return Object.assign(n, { [e]: !0 });
}
function E(e) {
	for (const [n, t] of s) if (t.canHandle(e)) {
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
	}, g.get(e) || []];
}
function v(e) {
	switch (e.type) {
		case "HANDLER": return s.get(e.name).deserialize(e.value);
		case "RAW": return e.value;
	}
}
function k(e, n, t, r) {
	return new Promise((o) => {
		const a = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		n.set(a, o), e.start && e.start(), e.postMessage(Object.assign({ id: a }, t), r);
	});
}
let T = null, b = null, S = null, L = 0, M = null;
const C = /* @__PURE__ */ new WeakMap();
let P = null, R = null, A = null, j = null, W = 0, O = null;
const x = /* @__PURE__ */ new WeakMap();
function z() {
	let e = null;
	return {
		promise: new Promise((n) => {
			e = n;
		}),
		fail(n) {
			e?.(n), e = null;
		}
	};
}
function N(e, n, t, r) {
	return new Proxy(e, { get(e, o, a) {
		const s = Reflect.get(e, o, a);
		return "function" != typeof s ? s : (...o) => {
			let a;
			t?.onStart();
			try {
				a = Reflect.apply(s, e, o);
			} catch (l) {
				throw t?.onSettled(), l;
			}
			const i = Promise.race([Promise.resolve(a), n.then((e) => Promise.reject(e))]);
			return r && i.catch((e) => {
				(function(e) {
					return e instanceof Error && ("RuntimeError" === e.name || e.message.startsWith("WASM panic"));
				})(e) && r();
			}), t ? i.finally(() => {
				t.onSettled();
			}) : i;
		};
	} });
}
function U(e) {
	return /* @__PURE__ */ new Error(`${e} worker stopped before the operation completed.`);
}
function G(e, n) {
	return "error" !== n.type || "undefined" != typeof ErrorEvent && n instanceof ErrorEvent ? function(e) {
		return /* @__PURE__ */ new Error(`${e} worker failed. Retry the operation to use a fresh worker.`);
	}(e) : ("undefined" != typeof window && window.dispatchEvent(new Event("vite:preloadError")), Object.assign(/* @__PURE__ */ new Error(`${e} worker could not load: this tab runs an older version of the app; reload the page.`), { category: "stale-app" }));
}
function X(e, n) {
	null === e.recycleTimer && (e.recycleTimer = setTimeout(() => {
		e.recycleTimer = null, 0 === e.activeCalls && e.recyclePending && (e.recyclePending = !1, F(n));
	}, 5e3));
}
let D = 0, H = 0;
function I() {
	const e = Date.now();
	if (b && (D >= 10 || H > 0 && e - H > 9e5)) {
		const e = P;
		e ? (e.recyclePending = !0, 0 === e.activeCalls && X(e, b)) : F(b);
	}
	if (!b) {
		const e = new Worker(new URL("/sleep-scoring-wasm/assets/wasm-worker-Ck7zyipy.js", "" + import.meta.url), { type: "module" }), n = z();
		let t = !1;
		const r = (r) => {
			t || (t = !0, console.error("[wasm-worker] worker failed"), e.terminate(), n.fail(G("WASM", r)), T === e && (T = null, b = null, S = null, M = null, P = null, D = 0, H = 0));
		};
		e.addEventListener("error", r, { once: !0 }), e.addEventListener("messageerror", r, { once: !0 }), T = e, S = n;
		const o = {
			activeCalls: 0,
			recyclePending: !1,
			recycleTimer: null
		}, a = N(c(e), n.promise, {
			onStart() {
				o.activeCalls += 1, null !== o.recycleTimer && (clearTimeout(o.recycleTimer), o.recycleTimer = null);
			},
			onSettled() {
				o.activeCalls = Math.max(0, o.activeCalls - 1), 0 === o.activeCalls && o.recyclePending && X(o, a);
			}
		}, () => {
			F(a);
		}), s = ++L;
		C.set(a, s), M = s, P = o, b = a;
	}
	return H = e, b;
}
function $() {
	D += 1, H = Date.now();
}
function F(e) {
	if (e) {
		const n = C.get(e);
		if (null == n || n !== M) return;
	}
	const n = T, t = S, r = P;
	T = null, b = null, S = null, M = null, P = null, D = 0, H = 0, r && (r.recyclePending = !1, null !== r.recycleTimer && (clearTimeout(r.recycleTimer), r.recycleTimer = null)), n?.terminate(), t?.fail(U("WASM"));
}
function B(e = {}) {
	const n = !0 === e.singleThread ? new Worker(new URL("/sleep-scoring-wasm/assets/wasm-worker-Ck7zyipy.js", "" + import.meta.url), {
		type: "module",
		name: "actours-single-thread"
	}) : new Worker(new URL("/sleep-scoring-wasm/assets/wasm-worker-Ck7zyipy.js", "" + import.meta.url), { type: "module" }), t = z(), r = N(c(n), t.promise);
	let o = !1;
	const a = (e = U("WASM")) => {
		o || (o = !0, n.terminate(), t.fail(e));
	}, s = (e) => {
		o || (console.error("[wasm-worker] one-shot worker failed"), a(G("WASM", e)));
	};
	return n.addEventListener("error", s, { once: !0 }), n.addEventListener("messageerror", s, { once: !0 }), {
		api: r,
		worker: n,
		terminate: a
	};
}
function Y() {
	const e = new Worker(new URL("/sleep-scoring-wasm/assets/gt3x-worker-CoOZNXMB.js", "" + import.meta.url), { type: "module" }), n = z(), t = N(c(e), n.promise);
	let r = !1;
	const o = (t = U("GT3X")) => {
		r || (r = !0, e.terminate(), n.fail(t));
	}, a = (e) => {
		r || (console.error("[gt3x-worker] one-shot worker failed"), o(G("GT3X", e)));
	};
	return e.addEventListener("error", a, { once: !0 }), e.addEventListener("messageerror", a, { once: !0 }), {
		api: t,
		worker: e,
		terminate: o
	};
}
function Z() {
	if (!A) {
		const e = new Worker(new URL("/sleep-scoring-wasm/assets/gt3x-worker-CoOZNXMB.js", "" + import.meta.url), { type: "module" }), n = z();
		let t = !1;
		const r = (r) => {
			t || (t = !0, console.error("[gt3x-worker] worker failed"), e.terminate(), n.fail(G("GT3X", r)), R === e && (R = null, A = null, j = null, O = null));
		};
		e.addEventListener("error", r, { once: !0 }), e.addEventListener("messageerror", r, { once: !0 }), R = e, j = n;
		const o = N(c(e), n.promise, void 0, () => {
			_(o);
		}), a = ++W;
		x.set(o, a), O = a, A = o;
	}
	return A;
}
function _(e) {
	if (e) {
		const n = x.get(e);
		if (null == n || n !== O) return;
	}
	const n = R, t = j;
	R = null, A = null, j = null, O = null, n?.terminate(), t?.fail(U("GT3X"));
}
export { $ as a, i as c, I as i, h as l, B as n, _ as o, Z as r, F as s, Y as t, y as u };
