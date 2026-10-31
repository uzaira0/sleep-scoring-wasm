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
		const { id: c, type: u, path: m } = Object.assign({ path: [] }, s.data), f = (s.data.argumentList || []).map(v);
		let p;
		try {
			const n = m.slice(0, -1).reduce((e, n) => e[n], e), t = m.reduce((e, n) => e[n], e);
			switch (u) {
				case "GET":
					p = t;
					break;
				case "SET":
					n[m.slice(-1)[0]] = v(s.data.value), p = !0;
					break;
				case "APPLY":
					p = t.apply(n, f);
					break;
				case "CONSTRUCT":
					p = h(new t(...f));
					break;
				case "ENDPOINT":
					{
						const { port1: n, port2: t } = new MessageChannel();
						i(e, t), p = y(n, [n]);
					}
					break;
				case "RELEASE":
					p = void 0;
					break;
				default: return;
			}
		} catch (d) {
			p = {
				value: d,
				[o]: 0
			};
		}
		Promise.resolve(p).catch((e) => ({
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
const f = /* @__PURE__ */ new WeakMap(), p = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const n = (f.get(e) || 0) - 1;
	f.set(e, n), 0 === n && m(e);
});
function d(e, r, o = [], a = function() {}) {
	let s = !1;
	const i = new Proxy(a, {
		get(n, a) {
			if (u(s), a === t) return () => {
				(function(e) {
					p && p.unregister(e);
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
		const t = (f.get(n) || 0) + 1;
		f.set(n, t), p && p.register(e, n, e);
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
let b = null, T = null, S = null, L = 0, R = null;
const P = /* @__PURE__ */ new WeakMap();
let M = null, C = null, A = null, j = null, W = 0, x = null;
const O = /* @__PURE__ */ new WeakMap();
function N() {
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
function z(e, n, t, r) {
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
function I(e, n) {
	null === e.recycleTimer && (e.recycleTimer = setTimeout(() => {
		e.recycleTimer = null, 0 === e.activeCalls && e.recyclePending && (e.recyclePending = !1, Y(n));
	}, 5e3));
}
let D = 0, Q = 0;
function H() {
	const e = Date.now();
	if (T && (D >= 10 || Q > 0 && e - Q > 9e5)) {
		const e = M;
		e ? (e.recyclePending = !0, 0 === e.activeCalls && I(e, T)) : Y(T);
	}
	if (!T) {
		const e = new Worker(new URL("/sleep-scoring-wasm/assets/wasm-worker-RfJQ6QbI.js", "" + import.meta.url), { type: "module" }), n = N();
		let t = !1;
		const r = (r) => {
			t || (t = !0, console.error("[wasm-worker] worker failed"), e.terminate(), n.fail(G("WASM", r)), b === e && (b = null, T = null, S = null, R = null, M = null, D = 0, Q = 0));
		};
		e.addEventListener("error", r, { once: !0 }), e.addEventListener("messageerror", r, { once: !0 }), b = e, S = n;
		const o = {
			activeCalls: 0,
			recyclePending: !1,
			recycleTimer: null
		}, a = z(c(e), n.promise, {
			onStart() {
				o.activeCalls += 1, null !== o.recycleTimer && (clearTimeout(o.recycleTimer), o.recycleTimer = null);
			},
			onSettled() {
				o.activeCalls = Math.max(0, o.activeCalls - 1), 0 === o.activeCalls && o.recyclePending && I(o, a);
			}
		}, () => {
			Y(a);
		}), s = ++L;
		P.set(a, s), R = s, M = o, T = a;
	}
	return Q = e, T;
}
function X() {
	D += 1, Q = Date.now();
}
function Y(e) {
	if (e) {
		const n = P.get(e);
		if (null == n || n !== R) return;
	}
	const n = b, t = S, r = M;
	b = null, T = null, S = null, R = null, M = null, D = 0, Q = 0, r && (r.recyclePending = !1, null !== r.recycleTimer && (clearTimeout(r.recycleTimer), r.recycleTimer = null)), n?.terminate(), t?.fail(U("WASM"));
}
function $(e = {}) {
	const n = !0 === e.singleThread ? new Worker(new URL("/sleep-scoring-wasm/assets/wasm-worker-RfJQ6QbI.js", "" + import.meta.url), {
		type: "module",
		name: "actours-single-thread"
	}) : new Worker(new URL("/sleep-scoring-wasm/assets/wasm-worker-RfJQ6QbI.js", "" + import.meta.url), { type: "module" }), t = N(), r = z(c(n), t.promise);
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
function _() {
	const e = new Worker(new URL("/sleep-scoring-wasm/assets/gt3x-worker-C5Yl-_iN.js", "" + import.meta.url), { type: "module" }), n = N(), t = z(c(e), n.promise);
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
function F() {
	if (!A) {
		const e = new Worker(new URL("/sleep-scoring-wasm/assets/gt3x-worker-C5Yl-_iN.js", "" + import.meta.url), { type: "module" }), n = N();
		let t = !1;
		const r = (r) => {
			t || (t = !0, console.error("[gt3x-worker] worker failed"), e.terminate(), n.fail(G("GT3X", r)), C === e && (C = null, A = null, j = null, x = null));
		};
		e.addEventListener("error", r, { once: !0 }), e.addEventListener("messageerror", r, { once: !0 }), C = e, j = n;
		const o = z(c(e), n.promise, void 0, () => {
			J(o);
		}), a = ++W;
		O.set(o, a), x = a, A = o;
	}
	return A;
}
function J(e) {
	if (e) {
		const n = O.get(e);
		if (null == n || n !== x) return;
	}
	const n = C, t = j;
	C = null, A = null, j = null, x = null, n?.terminate(), t?.fail(U("GT3X"));
}
export { X as a, i as c, H as i, h as l, $ as n, J as o, F as r, Y as s, _ as t, y as u };
