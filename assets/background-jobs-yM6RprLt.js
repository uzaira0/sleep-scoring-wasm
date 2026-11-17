import { b as e, g as t, v as a } from "./ggir-results-types-kmrkPkJO.js";
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const r = Symbol("Comlink.proxy"), i = Symbol("Comlink.endpoint"), n = Symbol("Comlink.releaseProxy"), o = Symbol("Comlink.finalizer"), s = Symbol("Comlink.thrown"), l = (e) => "object" == typeof e && null !== e || "function" == typeof e, c = /* @__PURE__ */ new Map([["proxy", {
	canHandle: (e) => l(e) && e[r],
	serialize(e) {
		const { port1: t, port2: a } = new MessageChannel();
		return u(e, t), [a, [a]];
	},
	deserialize: (e) => (e.start(), p(e))
}], ["throw", {
	canHandle: (e) => l(e) && s in e,
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
function u(e, t = globalThis, a = ["*"]) {
	t.addEventListener("message", function r(i) {
		if (!i || !i.data) return;
		if (!function(e, t) {
			for (const a of e) {
				if (t === a || "*" === a) return !0;
				if (a instanceof RegExp && a.test(t)) return !0;
			}
			return !1;
		}(a, i.origin)) return void console.warn(`Invalid origin '${i.origin}' for comlink proxy`);
		const { id: n, type: l, path: c } = Object.assign({ path: [] }, i.data), p = (i.data.argumentList || []).map(C);
		let _;
		try {
			const t = c.slice(0, -1).reduce((e, t) => e[t], e), a = c.reduce((e, t) => e[t], e);
			switch (l) {
				case "GET":
					_ = a;
					break;
				case "SET":
					t[c.slice(-1)[0]] = C(i.data.value), _ = !0;
					break;
				case "APPLY":
					_ = a.apply(t, p);
					break;
				case "CONSTRUCT":
					_ = w(new a(...p));
					break;
				case "ENDPOINT":
					{
						const { port1: t, port2: a } = new MessageChannel();
						u(e, a), _ = b(t, [t]);
					}
					break;
				case "RELEASE":
					_ = void 0;
					break;
				default: return;
			}
		} catch (m) {
			_ = {
				value: m,
				[s]: 0
			};
		}
		Promise.resolve(_).catch((e) => ({
			value: e,
			[s]: 0
		})).then((a) => {
			const [i, s] = S(a);
			t.postMessage(Object.assign(Object.assign({}, i), { id: n }), s), "RELEASE" === l && (t.removeEventListener("message", r), d(t), o in e && "function" == typeof e[o] && e[o]());
		}).catch((e) => {
			const [a, r] = S({
				value: /* @__PURE__ */ new TypeError("Unserializable return value"),
				[s]: 0
			});
			t.postMessage(Object.assign(Object.assign({}, a), { id: n }), r);
		});
	}), t.start && t.start();
}
function d(e) {
	(function(e) {
		return "MessagePort" === e.constructor.name;
	})(e) && e.close();
}
function p(e, t) {
	const a = /* @__PURE__ */ new Map();
	return e.addEventListener("message", function(e) {
		const { data: t } = e;
		if (!t || !t.id) return;
		const r = a.get(t.id);
		if (r) try {
			r(t);
		} finally {
			a.delete(t.id);
		}
	}), g(e, a, [], t);
}
function _(e) {
	if (e) throw new Error("Proxy has been released and is not useable");
}
function m(e) {
	return I(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
		d(e);
	});
}
const y = /* @__PURE__ */ new WeakMap(), f = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const t = (y.get(e) || 0) - 1;
	y.set(e, t), 0 === t && m(e);
});
function g(e, t, a = [], r = function() {}) {
	let o = !1;
	const s = new Proxy(r, {
		get(r, i) {
			if (_(o), i === n) return () => {
				(function(e) {
					f && f.unregister(e);
				})(s), m(e), t.clear(), o = !0;
			};
			if ("then" === i) {
				if (0 === a.length) return { then: () => s };
				const r = I(e, t, {
					type: "GET",
					path: a.map((e) => e.toString())
				}).then(C);
				return r.then.bind(r);
			}
			return g(e, t, [...a, i]);
		},
		set(r, i, n) {
			_(o);
			const [s, l] = S(n);
			return I(e, t, {
				type: "SET",
				path: [...a, i].map((e) => e.toString()),
				value: s
			}, l).then(C);
		},
		apply(r, n, s) {
			_(o);
			const l = a[a.length - 1];
			if (l === i) return I(e, t, { type: "ENDPOINT" }).then(C);
			if ("bind" === l) return g(e, t, a.slice(0, -1));
			const [c, u] = h(s);
			return I(e, t, {
				type: "APPLY",
				path: a.map((e) => e.toString()),
				argumentList: c
			}, u).then(C);
		},
		construct(r, i) {
			_(o);
			const [n, s] = h(i);
			return I(e, t, {
				type: "CONSTRUCT",
				path: a.map((e) => e.toString()),
				argumentList: n
			}, s).then(C);
		}
	});
	return function(e, t) {
		const a = (y.get(t) || 0) + 1;
		y.set(t, a), f && f.register(e, t, e);
	}(s, e), s;
}
function h(e) {
	const t = e.map(S);
	return [t.map((e) => e[0]), (a = t.map((e) => e[1]), Array.prototype.concat.apply([], a))];
	var a;
}
const v = /* @__PURE__ */ new WeakMap();
function b(e, t) {
	return v.set(e, t), e;
}
function w(e) {
	return Object.assign(e, { [r]: !0 });
}
function S(e) {
	for (const [t, a] of c) if (a.canHandle(e)) {
		const [r, i] = a.serialize(e);
		return [{
			type: "HANDLER",
			name: t,
			value: r
		}, i];
	}
	return [{
		type: "RAW",
		value: e
	}, v.get(e) || []];
}
function C(e) {
	switch (e.type) {
		case "HANDLER": return c.get(e.name).deserialize(e.value);
		case "RAW": return e.value;
	}
}
function I(e, t, a, r) {
	return new Promise((i) => {
		const n = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		t.set(n, i), e.start && e.start(), e.postMessage(Object.assign({ id: n }, a), r);
	});
}
var k = class extends Error {
	name = "MissingHostFactError";
	fact;
	constructor(e, t) {
		super(`The host fact "${e}" is not available: ${t}.`), this.fact = e;
	}
};
let A = null;
function x() {
	if (null === A) throw new k("host facts", "no host has installed them yet");
	return A;
}
function E(e) {
	if (null !== A) throw new Error("Host facts are already installed in this thread; a host installs them once.");
	A = e;
}
var D = t((e, t) => {
	var a = e, r = function() {
		var e = function(t, a) {
			return (e = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e, t) {
				e.__proto__ = t;
			} : function(e, t) {
				for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
			}))(t, a);
		}, t = function() {
			return (t = Object.assign || function(e) {
				for (var t, a = 1, r = arguments.length; a < r; a++) for (var i in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e;
			}).apply(this, arguments);
		};
		function a(e, t, a) {
			if (a || 2 === arguments.length) for (var r, i = 0, n = t.length; i < n; i++) !r && i in t || ((r = r || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
			return e.concat(r || Array.prototype.slice.call(t));
		}
		var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global, i = Object.keys, n = Array.isArray;
		function o(e, t) {
			return "object" == typeof t && i(t).forEach(function(a) {
				e[a] = t[a];
			}), e;
		}
		"undefined" == typeof Promise || r.Promise || (r.Promise = Promise);
		var s = Object.getPrototypeOf, l = {}.hasOwnProperty;
		function c(e, t) {
			return l.call(e, t);
		}
		function u(e, t) {
			"function" == typeof t && (t = t(s(e))), ("undefined" == typeof Reflect ? i : Reflect.ownKeys)(t).forEach(function(a) {
				p(e, a, t[a]);
			});
		}
		var d = Object.defineProperty;
		function p(e, t, a, r) {
			d(e, t, o(a && c(a, "get") && "function" == typeof a.get ? {
				get: a.get,
				set: a.set,
				configurable: !0
			} : {
				value: a,
				configurable: !0,
				writable: !0
			}, r));
		}
		function _(e) {
			return { from: function(t) {
				return e.prototype = Object.create(t.prototype), p(e.prototype, "constructor", e), { extend: u.bind(null, e.prototype) };
			} };
		}
		var m = Object.getOwnPropertyDescriptor, y = [].slice;
		function f(e, t, a) {
			return y.call(e, t, a);
		}
		function g(e, t) {
			return t(e);
		}
		function h(e) {
			if (!e) throw new Error("Assertion Failed");
		}
		function v(e) {
			r.setImmediate ? setImmediate(e) : setTimeout(e, 0);
		}
		function b(e, t) {
			if ("string" == typeof t && c(e, t)) return e[t];
			if (!t) return e;
			if ("string" != typeof t) {
				for (var a = [], r = 0, i = t.length; r < i; ++r) {
					var n = b(e, t[r]);
					a.push(n);
				}
				return a;
			}
			var o, s = t.indexOf(".");
			return -1 === s || null == (o = e[t.substr(0, s)]) ? void 0 : b(o, t.substr(s + 1));
		}
		function w(e, t, a) {
			if (e && void 0 !== t && (!("isFrozen" in Object) || !Object.isFrozen(e))) if ("string" != typeof t && "length" in t) {
				h("string" != typeof a && "length" in a);
				for (var r = 0, i = t.length; r < i; ++r) w(e, t[r], a[r]);
			} else if (-1 !== (o = t.indexOf("."))) {
				var o, s = t.substr(0, o);
				if ("" === (o = t.substr(o + 1))) void 0 === a ? n(e) && !isNaN(parseInt(s)) ? e.splice(s, 1) : delete e[s] : e[s] = a;
				else {
					var l = e[s];
					if (!l || !c(e, s)) {
						if (void 0 === a) return;
						l = e[s] = {};
					}
					w(l, o, a);
				}
			} else void 0 === a ? n(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = a;
		}
		function S(e) {
			var t, a = {};
			for (t in e) c(e, t) && (a[t] = e[t]);
			return a;
		}
		var C = [].concat;
		function I(e) {
			return C.apply([], e);
		}
		var k = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(I([
			8,
			16,
			32,
			64
		].map(function(e) {
			return [
				"Int",
				"Uint",
				"Float"
			].map(function(t) {
				return t + e + "Array";
			});
		}))).filter(function(e) {
			return r[e];
		}), A = new Set(k.map(function(e) {
			return r[e];
		})), x = null;
		function E(e) {
			return x = /* @__PURE__ */ new WeakMap(), e = function e(t) {
				if (!t || "object" != typeof t) return t;
				var a = x.get(t);
				if (a) return a;
				if (n(t)) {
					a = [], x.set(t, a);
					for (var r = 0, i = t.length; r < i; ++r) a.push(e(t[r]));
				} else if (A.has(t.constructor)) a = t;
				else {
					var o, l = s(t);
					for (o in a = l === Object.prototype ? {} : Object.create(l), x.set(t, a), t) c(t, o) && (a[o] = e(t[o]));
				}
				return a;
			}(e), x = null, e;
		}
		var D = {}.toString;
		function T(e) {
			return D.call(e).slice(8, -1);
		}
		var B = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator", z = "symbol" == typeof B ? function(e) {
			var t;
			return null != e && (t = e[B]) && t.apply(e);
		} : function() {
			return null;
		};
		function R(e, t) {
			0 <= (t = e.indexOf(t)) && e.splice(t, 1);
		}
		var M = {};
		function O(e) {
			var t, a, r, i;
			if (1 === arguments.length) {
				if (n(e)) return e.slice();
				if (this === M && "string" == typeof e) return [e];
				if (i = z(e)) for (a = []; !(r = i.next()).done;) a.push(r.value);
				else {
					if (null == e) return [e];
					if ("number" != typeof (t = e.length)) return [e];
					for (a = new Array(t); t--;) a[t] = e[t];
				}
			} else for (t = arguments.length, a = new Array(t); t--;) a[t] = arguments[t];
			return a;
		}
		var P = "undefined" != typeof Symbol ? function(e) {
			return "AsyncFunction" === e[Symbol.toStringTag];
		} : function() {
			return !1;
		}, N = [
			"Modify",
			"Bulk",
			"OpenFailed",
			"VersionChange",
			"Schema",
			"Upgrade",
			"InvalidTable",
			"MissingAPI",
			"NoSuchDatabase",
			"InvalidArgument",
			"SubTransaction",
			"Unsupported",
			"Internal",
			"DatabaseClosed",
			"PrematureCommit",
			"ForeignAwait"
		].concat(k = [
			"Unknown",
			"Constraint",
			"Data",
			"TransactionInactive",
			"ReadOnly",
			"Version",
			"NotFound",
			"InvalidState",
			"InvalidAccess",
			"Abort",
			"Timeout",
			"QuotaExceeded",
			"Syntax",
			"DataClone"
		]), K = {
			VersionChanged: "Database version changed by other database connection",
			DatabaseClosed: "Database has been closed",
			Abort: "Transaction aborted",
			TransactionInactive: "Transaction has already completed or failed",
			MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
		};
		function L(e, t) {
			this.name = e, this.message = t;
		}
		function j(e, t) {
			return e + ". Errors: " + Object.keys(t).map(function(e) {
				return t[e].toString();
			}).filter(function(e, t, a) {
				return a.indexOf(e) === t;
			}).join("\n");
		}
		function U(e, t, a, r) {
			this.failures = t, this.failedKeys = r, this.successCount = a, this.message = j(e, t);
		}
		function G(e, t) {
			this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
				return t[e];
			}), this.failuresByPos = t, this.message = j(e, this.failures);
		}
		_(L).from(Error).extend({ toString: function() {
			return this.name + ": " + this.message;
		} }), _(U).from(L), _(G).from(L);
		var F = N.reduce(function(e, t) {
			return e[t] = t + "Error", e;
		}, {}), V = L, q = N.reduce(function(e, t) {
			var a = t + "Error";
			function r(e, r) {
				this.name = a, e ? "string" == typeof e ? (this.message = "".concat(e).concat(r ? "\n " + r : ""), this.inner = r || null) : "object" == typeof e && (this.message = "".concat(e.name, " ").concat(e.message), this.inner = e) : (this.message = K[t] || a, this.inner = null);
			}
			return _(r).from(V), e[t] = r, e;
		}, {}), H = (q.Syntax = SyntaxError, q.Type = TypeError, q.Range = RangeError, k.reduce(function(e, t) {
			return e[t + "Error"] = q[t], e;
		}, {}));
		function W() {}
		function $(e) {
			return e;
		}
		function Y(e, t) {
			return null == e || e === $ ? t : function(a) {
				return t(e(a));
			};
		}
		function X(e, t) {
			return function() {
				e.apply(this, arguments), t.apply(this, arguments);
			};
		}
		function J(e, t) {
			return e === W ? t : function() {
				var a = e.apply(this, arguments), r = (void 0 !== a && (arguments[0] = a), this.onsuccess), i = this.onerror, n = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return r && (this.onsuccess = this.onsuccess ? X(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? X(i, this.onerror) : i), void 0 !== n ? n : a;
			};
		}
		function Z(e, t) {
			return e === W ? t : function() {
				e.apply(this, arguments);
				var a = this.onsuccess, r = this.onerror;
				this.onsuccess = this.onerror = null, t.apply(this, arguments), a && (this.onsuccess = this.onsuccess ? X(a, this.onsuccess) : a), r && (this.onerror = this.onerror ? X(r, this.onerror) : r);
			};
		}
		function Q(e, t) {
			return e === W ? t : function(a) {
				var r = e.apply(this, arguments), i = (o(a, r), a = this.onsuccess, this.onerror), n = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return a && (this.onsuccess = this.onsuccess ? X(a, this.onsuccess) : a), i && (this.onerror = this.onerror ? X(i, this.onerror) : i), void 0 === r ? void 0 === n ? void 0 : n : o(r, n);
			};
		}
		function ee(e, t) {
			return e === W ? t : function() {
				return !1 !== t.apply(this, arguments) && e.apply(this, arguments);
			};
		}
		function te(e, t) {
			return e === W ? t : function() {
				var a = e.apply(this, arguments);
				if (a && "function" == typeof a.then) {
					for (var r = this, i = arguments.length, n = new Array(i); i--;) n[i] = arguments[i];
					return a.then(function() {
						return t.apply(r, n);
					});
				}
				return t.apply(this, arguments);
			};
		}
		(k = N.reduce(function(e, t) {
			return -1 === [
				"Syntax",
				"Type",
				"Range"
			].indexOf(t) && (e[t + "Error"] = q[t]), e;
		}, {})).ModifyError = U, k.DexieError = L, k.BulkError = G;
		var ae = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
		function re(e) {
			ae = e;
		}
		var ie = {}, ne = "undefined" == typeof Promise ? [] : (N = Promise.resolve(), "undefined" != typeof crypto && crypto.subtle ? [
			ne = crypto.subtle.digest("SHA-512", new Uint8Array([0])),
			s(ne),
			N
		] : [
			N,
			s(N),
			N
		]), oe = (N = ne[0], (oe = ne[1]) && oe.then), se = N && N.constructor, le = !!ne[2], ce = function(e, t) {
			ge.push([e, t]), de && (queueMicrotask(xe), de = !1);
		}, ue = !0, de = !0, pe = [], _e = [], me = $, ye = {
			id: "global",
			global: !0,
			ref: 0,
			unhandleds: [],
			onunhandled: W,
			pgp: !1,
			env: {},
			finalize: W
		}, fe = ye, ge = [], he = 0, ve = [];
		function be(e) {
			if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
			this._listeners = [], this._lib = !1;
			var t = this._PSD = fe;
			if ("function" != typeof e) {
				if (e !== ie) throw new TypeError("Not a function");
				this._state = arguments[1], this._value = arguments[2], !1 === this._state && Ce(this, this._value);
			} else this._state = null, this._value = null, ++t.ref, function e(t, a) {
				try {
					a(function(a) {
						if (null === t._state) {
							if (a === t) throw new TypeError("A promise cannot be resolved with itself.");
							var r = t._lib && Ee();
							a && "function" == typeof a.then ? e(t, function(e, t) {
								a instanceof be ? a._then(e, t) : a.then(e, t);
							}) : (t._state = !0, t._value = a, Ie(t)), r && De();
						}
					}, Ce.bind(null, t));
				} catch (a) {
					Ce(t, a);
				}
			}(this, e);
		}
		var we = {
			get: function() {
				var e = fe, t = Ne;
				function a(a, r) {
					var i = this, n = !e.global && (e !== fe || t !== Ne), o = n && !Ue(), s = new be(function(t, s) {
						ke(i, new Se(We(a, e, n, o), We(r, e, n, o), t, s, e));
					});
					return this._consoleTask && (s._consoleTask = this._consoleTask), s;
				}
				return a.prototype = ie, a;
			},
			set: function(e) {
				p(this, "then", e && e.prototype === ie ? we : {
					get: function() {
						return e;
					},
					set: we.set
				});
			}
		};
		function Se(e, t, a, r, i) {
			this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = a, this.reject = r, this.psd = i;
		}
		function Ce(e, t) {
			var a, r;
			_e.push(t), null === e._state && (a = e._lib && Ee(), t = me(t), e._state = !1, e._value = t, r = e, pe.some(function(e) {
				return e._value === r._value;
			}) || pe.push(r), Ie(e), a) && De();
		}
		function Ie(e) {
			var t = e._listeners;
			e._listeners = [];
			for (var a = 0, r = t.length; a < r; ++a) ke(e, t[a]);
			var i = e._PSD;
			--i.ref || i.finalize(), 0 === he && (++he, ce(function() {
				0 == --he && Te();
			}, []));
		}
		function ke(e, t) {
			if (null === e._state) e._listeners.push(t);
			else {
				var a = e._state ? t.onFulfilled : t.onRejected;
				if (null === a) return (e._state ? t.resolve : t.reject)(e._value);
				++t.psd.ref, ++he, ce(Ae, [
					a,
					e,
					t
				]);
			}
		}
		function Ae(e, t, a) {
			try {
				var r, i = t._value;
				!t._state && _e.length && (_e = []), r = ae && t._consoleTask ? t._consoleTask.run(function() {
					return e(i);
				}) : e(i), t._state || -1 !== _e.indexOf(i) || ((e) => {
					for (var t = pe.length; t;) if (pe[--t]._value === e._value) return pe.splice(t, 1);
				})(t), a.resolve(r);
			} catch (e) {
				a.reject(e);
			} finally {
				0 == --he && Te(), --a.psd.ref || a.psd.finalize();
			}
		}
		function xe() {
			He(ye, function() {
				Ee() && De();
			});
		}
		function Ee() {
			var e = ue;
			return de = ue = !1, e;
		}
		function De() {
			var e, t, a;
			do
				for (; 0 < ge.length;) for (e = ge, ge = [], a = e.length, t = 0; t < a; ++t) {
					var r = e[t];
					r[0].apply(null, r[1]);
				}
			while (0 < ge.length);
			de = ue = !0;
		}
		function Te() {
			for (var e = pe, t = (pe = [], e.forEach(function(e) {
				e._PSD.onunhandled.call(null, e._value, e);
			}), ve.slice(0)), a = t.length; a;) t[--a]();
		}
		function Be(e) {
			return new be(ie, !1, e);
		}
		function ze(e, t) {
			var a = fe;
			return function() {
				var r = Ee(), i = fe;
				try {
					return Ve(a, !0), e.apply(this, arguments);
				} catch (r) {
					t && t(r);
				} finally {
					Ve(i, !1), r && De();
				}
			};
		}
		u(be.prototype, {
			then: we,
			_then: function(e, t) {
				ke(this, new Se(null, null, e, t, fe));
			},
			catch: function(e) {
				var t, a;
				return 1 === arguments.length ? this.then(null, e) : (a = arguments[1], "function" == typeof (t = e) ? this.then(null, function(e) {
					return (e instanceof t ? a : Be)(e);
				}) : this.then(null, function(e) {
					return (e && e.name === t ? a : Be)(e);
				}));
			},
			finally: function(e) {
				return this.then(function(t) {
					return be.resolve(e()).then(function() {
						return t;
					});
				}, function(t) {
					return be.resolve(e()).then(function() {
						return Be(t);
					});
				});
			},
			timeout: function(e, t) {
				var a = this;
				return e < 1 / 0 ? new be(function(r, i) {
					var n = setTimeout(function() {
						return i(new q.Timeout(t));
					}, e);
					a.then(r, i).finally(clearTimeout.bind(null, n));
				}) : this;
			}
		}), "undefined" != typeof Symbol && Symbol.toStringTag && p(be.prototype, Symbol.toStringTag, "Dexie.Promise"), ye.env = qe(), u(be, {
			all: function() {
				var e = O.apply(null, arguments).map(Ge);
				return new be(function(t, a) {
					0 === e.length && t([]);
					var r = e.length;
					e.forEach(function(i, n) {
						return be.resolve(i).then(function(a) {
							e[n] = a, --r || t(e);
						}, a);
					});
				});
			},
			resolve: function(e) {
				return e instanceof be ? e : e && "function" == typeof e.then ? new be(function(t, a) {
					e.then(t, a);
				}) : new be(ie, !0, e);
			},
			reject: Be,
			race: function() {
				var e = O.apply(null, arguments).map(Ge);
				return new be(function(t, a) {
					e.map(function(e) {
						return be.resolve(e).then(t, a);
					});
				});
			},
			PSD: {
				get: function() {
					return fe;
				},
				set: function(e) {
					return fe = e;
				}
			},
			totalEchoes: { get: function() {
				return Ne;
			} },
			newPSD: Le,
			usePSD: He,
			scheduler: {
				get: function() {
					return ce;
				},
				set: function(e) {
					ce = e;
				}
			},
			rejectionMapper: {
				get: function() {
					return me;
				},
				set: function(e) {
					me = e;
				}
			},
			follow: function(e, t) {
				return new be(function(a, r) {
					return Le(function(t, a) {
						var r = fe;
						r.unhandleds = [], r.onunhandled = a, r.finalize = X(function() {
							var e, r = this;
							e = function() {
								0 === r.unhandleds.length ? t() : a(r.unhandleds[0]);
							}, ve.push(function t() {
								e(), ve.splice(ve.indexOf(t), 1);
							}), ++he, ce(function() {
								0 == --he && Te();
							}, []);
						}, r.finalize), e();
					}, t, a, r);
				});
			}
		}), se && (se.allSettled && p(be, "allSettled", function() {
			var e = O.apply(null, arguments).map(Ge);
			return new be(function(t) {
				0 === e.length && t([]);
				var a = e.length, r = new Array(a);
				e.forEach(function(e, i) {
					return be.resolve(e).then(function(e) {
						return r[i] = {
							status: "fulfilled",
							value: e
						};
					}, function(e) {
						return r[i] = {
							status: "rejected",
							reason: e
						};
					}).then(function() {
						return --a || t(r);
					});
				});
			});
		}), se.any && "undefined" != typeof AggregateError && p(be, "any", function() {
			var e = O.apply(null, arguments).map(Ge);
			return new be(function(t, a) {
				0 === e.length && a(/* @__PURE__ */ new AggregateError([]));
				var r = e.length, i = new Array(r);
				e.forEach(function(e, n) {
					return be.resolve(e).then(function(e) {
						return t(e);
					}, function(e) {
						i[n] = e, --r || a(new AggregateError(i));
					});
				});
			});
		}), se.withResolvers) && (be.withResolvers = se.withResolvers);
		var Re = {
			awaits: 0,
			echoes: 0,
			id: 0
		}, Me = 0, Oe = [], Pe = 0, Ne = 0, Ke = 0;
		function Le(e, t, a, r) {
			var i = fe, n = Object.create(i);
			return n.parent = i, n.ref = 0, n.global = !1, n.id = ++Ke, ye.env, n.env = le ? {
				Promise: be,
				PromiseProp: {
					value: be,
					configurable: !0,
					writable: !0
				},
				all: be.all,
				race: be.race,
				allSettled: be.allSettled,
				any: be.any,
				resolve: be.resolve,
				reject: be.reject
			} : {}, t && o(n, t), ++i.ref, n.finalize = function() {
				--this.parent.ref || this.parent.finalize();
			}, t = He(n, e, a, r), 0 === n.ref && n.finalize(), t;
		}
		function je() {
			return Re.id || (Re.id = ++Me), ++Re.awaits, Re.echoes += 100, Re.id;
		}
		function Ue() {
			return !!Re.awaits && (0 == --Re.awaits && (Re.id = 0), Re.echoes = 100 * Re.awaits, !0);
		}
		function Ge(e) {
			return Re.echoes && e && e.constructor === se ? (je(), e.then(function(e) {
				return Ue(), e;
			}, function(e) {
				return Ue(), Ye(e);
			})) : e;
		}
		function Fe() {
			var e = Oe[Oe.length - 1];
			Oe.pop(), Ve(e, !1);
		}
		function Ve(e, t) {
			var a, i, n = fe;
			(t ? !Re.echoes || Pe++ && e === fe : !Pe || --Pe && e === fe) || queueMicrotask(t ? function(e) {
				++Ne, Re.echoes && 0 != --Re.echoes || (Re.echoes = Re.awaits = Re.id = 0), Oe.push(fe), Ve(e, !0);
			}.bind(null, e) : Fe), e !== fe && (fe = e, n === ye && (ye.env = qe()), le) && (a = ye.env.Promise, i = e.env, n.global || e.global) && (Object.defineProperty(r, "Promise", i.PromiseProp), a.all = i.all, a.race = i.race, a.resolve = i.resolve, a.reject = i.reject, i.allSettled && (a.allSettled = i.allSettled), i.any) && (a.any = i.any);
		}
		function qe() {
			var e = r.Promise;
			return le ? {
				Promise: e,
				PromiseProp: Object.getOwnPropertyDescriptor(r, "Promise"),
				all: e.all,
				race: e.race,
				allSettled: e.allSettled,
				any: e.any,
				resolve: e.resolve,
				reject: e.reject
			} : {};
		}
		function He(e, t, a, r, i) {
			var n = fe;
			try {
				return Ve(e, !0), t(a, r, i);
			} finally {
				Ve(n, !1);
			}
		}
		function We(e, t, a, r) {
			return "function" != typeof e ? e : function() {
				var i = fe;
				a && je(), Ve(t, !0);
				try {
					return e.apply(this, arguments);
				} finally {
					Ve(i, !1), r && queueMicrotask(Ue);
				}
			};
		}
		function $e(e) {
			Promise === se && 0 === Re.echoes ? 0 === Pe ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
		}
		-1 === ("" + oe).indexOf("[native code]") && (je = Ue = W);
		var Ye = be.reject, Xe = String.fromCharCode(65535), Je = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Ze = "String expected.", Qe = "__dbnames", et = "readonly", tt = "readwrite";
		function at(e, t) {
			return e ? t ? function() {
				return e.apply(this, arguments) && t.apply(this, arguments);
			} : e : t;
		}
		var rt = {
			type: 3,
			lower: -1 / 0,
			lowerOpen: !1,
			upper: [[]],
			upperOpen: !1
		};
		function it(e) {
			return "string" != typeof e || /\./.test(e) ? function(e) {
				return e;
			} : function(t) {
				return void 0 === t[e] && e in t && delete (t = E(t))[e], t;
			};
		}
		function nt() {
			throw q.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
		}
		function ot(e, t) {
			try {
				var a = st(e), r = st(t);
				if (a !== r) return "Array" === a ? 1 : "Array" === r ? -1 : "binary" === a ? 1 : "binary" === r ? -1 : "string" === a ? 1 : "string" === r ? -1 : "Date" === a ? 1 : "Date" !== r ? NaN : -1;
				switch (a) {
					case "number":
					case "Date":
					case "string": return t < e ? 1 : e < t ? -1 : 0;
					case "binary":
						for (var i = lt(e), n = lt(t), o = i.length, s = n.length, l = o < s ? o : s, c = 0; c < l; ++c) if (i[c] !== n[c]) return i[c] < n[c] ? -1 : 1;
						return o === s ? 0 : o < s ? -1 : 1;
					case "Array":
						for (var u = e, d = t, p = u.length, _ = d.length, m = p < _ ? p : _, y = 0; y < m; ++y) {
							var f = ot(u[y], d[y]);
							if (0 !== f) return f;
						}
						return p === _ ? 0 : p < _ ? -1 : 1;
				}
			} catch (e) {}
			return NaN;
		}
		function st(e) {
			var t = typeof e;
			return "object" != t || !ArrayBuffer.isView(e) && "ArrayBuffer" !== (t = T(e)) ? t : "binary";
		}
		function lt(e) {
			return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
		}
		function ct(e, t, a) {
			var r = e.schema.yProps;
			return r ? (t && 0 < a.numFailures && (t = t.filter(function(e, t) {
				return !a.failures[t];
			})), Promise.all(r.map(function(a) {
				return a = a.updatesTable, t ? e.db.table(a).where("k").anyOf(t).delete() : e.db.table(a).clear();
			})).then(function() {
				return a;
			})) : a;
		}
		dt.prototype.execute = function(e) {
			var t = this["@@propmod"];
			if (void 0 !== t.add) {
				var r = t.add;
				if (n(r)) return a(a([], n(e) ? e : [], !0), r, !0).sort();
				if ("number" == typeof r) return (Number(e) || 0) + r;
				if ("bigint" == typeof r) try {
					return BigInt(e) + r;
				} catch (e) {
					return BigInt(0) + r;
				}
				throw new TypeError("Invalid term ".concat(r));
			}
			if (void 0 !== t.remove) {
				var i = t.remove;
				if (n(i)) return n(e) ? e.filter(function(e) {
					return !i.includes(e);
				}).sort() : [];
				if ("number" == typeof i) return Number(e) - i;
				if ("bigint" == typeof i) try {
					return BigInt(e) - i;
				} catch (e) {
					return BigInt(0) - i;
				}
				throw new TypeError("Invalid subtrahend ".concat(i));
			}
			return (r = null == (r = t.replacePrefix) ? void 0 : r[0]) && "string" == typeof e && e.startsWith(r) ? t.replacePrefix[1] + e.substring(r.length) : e;
		};
		var ut = dt;
		function dt(e) {
			this["@@propmod"] = e;
		}
		function pt(e, t) {
			for (var a = i(t), r = a.length, n = !1, o = 0; o < r; ++o) {
				var s = a[o], l = t[s], c = b(e, s);
				l instanceof ut ? (w(e, s, l.execute(c)), n = !0) : c !== l && (w(e, s, l), n = !0);
			}
			return n;
		}
		mt.prototype._trans = function(e, t, a) {
			var r = this._tx || fe.trans, i = this.name, n = ae && "undefined" != typeof console && console.createTask && console.createTask("Dexie: ".concat("readonly" === e ? "read" : "write", " ").concat(this.name));
			function o(e, a, r) {
				if (r.schema[i]) return t(r.idbtrans, r);
				throw new q.NotFound("Table " + i + " not part of transaction");
			}
			var s = Ee();
			try {
				var l = r && r.db._novip === this.db._novip ? r === fe.trans ? r._promise(e, o, a) : Le(function() {
					return r._promise(e, o, a);
				}, {
					trans: r,
					transless: fe.transless || fe
				}) : function t(a, r, i, n) {
					if (a.idbdb && (a._state.openComplete || fe.letThrough || a._vip)) {
						var o = a._createTransaction(r, i, a._dbSchema);
						try {
							o.create(), a._state.PR1398_maxLoop = 3;
						} catch (e) {
							return e.name === F.InvalidState && a.isOpen() && 0 < --a._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), a.close({ disableAutoOpen: !1 }), a.open().then(function() {
								return t(a, r, i, n);
							})) : Ye(e);
						}
						return o._promise(r, function(e, t) {
							return Le(function() {
								return fe.trans = o, n(e, t, o);
							});
						}).then(function(e) {
							if ("readwrite" === r) try {
								o.idbtrans.commit();
							} catch (e) {}
							return "readonly" === r ? e : o._completion.then(function() {
								return e;
							});
						});
					}
					if (a._state.openComplete) return Ye(new q.DatabaseClosed(a._state.dbOpenError));
					if (!a._state.isBeingOpened) {
						if (!a._state.autoOpen) return Ye(new q.DatabaseClosed());
						a.open().catch(W);
					}
					return a._state.dbReadyPromise.then(function() {
						return t(a, r, i, n);
					});
				}(this.db, e, [this.name], o);
				return n && (l._consoleTask = n, l = l.catch(function(e) {
					return Ye(e);
				})), l;
			} finally {
				s && De();
			}
		}, mt.prototype.get = function(e, t) {
			var a = this;
			return e && e.constructor === Object ? this.where(e).first(t) : null == e ? Ye(new q.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(t) {
				return a.core.get({
					trans: t,
					key: e
				}).then(function(e) {
					return a.hook.reading.fire(e);
				});
			}).then(t);
		}, mt.prototype.where = function(e) {
			if ("string" == typeof e) return new this.db.WhereClause(this, e);
			if (n(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
			var t = i(e);
			if (1 === t.length) return this.where(t[0]).equals(e[t[0]]);
			var a = this.schema.indexes.concat(this.schema.primKey).filter(function(e) {
				if (e.compound && t.every(function(t) {
					return 0 <= e.keyPath.indexOf(t);
				})) {
					for (var a = 0; a < t.length; ++a) if (-1 === t.indexOf(e.keyPath[a])) return !1;
					return !0;
				}
				return !1;
			}).sort(function(e, t) {
				return e.keyPath.length - t.keyPath.length;
			})[0];
			if (a && this.db._maxKey !== Xe) return s = a.keyPath.slice(0, t.length), this.where(s).equals(s.map(function(t) {
				return e[t];
			}));
			!a && ae && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
			var r = this.schema.idxByName;
			function o(e, t) {
				return 0 === ot(e, t);
			}
			var s = t.reduce(function(t, a) {
				var i = t[0], s = (t = t[1], r[a]), l = e[a];
				return [i || s, i || !s ? at(t, s && s.multi ? function(e) {
					return e = b(e, a), n(e) && e.some(function(e) {
						return o(l, e);
					});
				} : function(e) {
					return o(l, b(e, a));
				}) : t];
			}, [null, null]), l = s[0];
			return s = s[1], l ? this.where(l.name).equals(e[l.keyPath]).filter(s) : a ? this.filter(s) : this.where(t).equals("");
		}, mt.prototype.filter = function(e) {
			return this.toCollection().and(e);
		}, mt.prototype.count = function(e) {
			return this.toCollection().count(e);
		}, mt.prototype.offset = function(e) {
			return this.toCollection().offset(e);
		}, mt.prototype.limit = function(e) {
			return this.toCollection().limit(e);
		}, mt.prototype.each = function(e) {
			return this.toCollection().each(e);
		}, mt.prototype.toArray = function(e) {
			return this.toCollection().toArray(e);
		}, mt.prototype.toCollection = function() {
			return new this.db.Collection(new this.db.WhereClause(this));
		}, mt.prototype.orderBy = function(e) {
			return new this.db.Collection(new this.db.WhereClause(this, n(e) ? "[".concat(e.join("+"), "]") : e));
		}, mt.prototype.reverse = function() {
			return this.toCollection().reverse();
		}, mt.prototype.mapToClass = function(t) {
			for (var a = this.db, r = this.name, i = ((this.schema.mappedClass = t).prototype instanceof nt && (t = ((t) => {
				var i = s, n = t;
				if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				function o() {
					this.constructor = i;
				}
				function s() {
					return null !== t && t.apply(this, arguments) || this;
				}
				return e(i, n), i.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o()), Object.defineProperty(s.prototype, "db", {
					get: function() {
						return a;
					},
					enumerable: !1,
					configurable: !0
				}), s.prototype.table = function() {
					return r;
				}, s;
			})(t)), /* @__PURE__ */ new Set()), n = t.prototype; n; n = s(n)) Object.getOwnPropertyNames(n).forEach(function(e) {
				return i.add(e);
			});
			function o(e) {
				if (!e) return e;
				var a, r = Object.create(t.prototype);
				for (a in e) if (!i.has(a)) try {
					r[a] = e[a];
				} catch (e) {}
				return r;
			}
			return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = o, this.hook("reading", o), t;
		}, mt.prototype.defineClass = function() {
			return this.mapToClass(function(e) {
				o(this, e);
			});
		}, mt.prototype.add = function(e, t) {
			var a = this, r = this.schema.primKey, i = r.auto, n = r.keyPath, o = e;
			return n && i && (o = it(n)(e)), this._trans("readwrite", function(e) {
				return a.core.mutate({
					trans: e,
					type: "add",
					keys: null != t ? [t] : null,
					values: [o]
				});
			}).then(function(e) {
				return e.numFailures ? be.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (n) try {
					w(e, n, t);
				} catch (t) {}
				return t;
			});
		}, mt.prototype.upsert = function(e, t) {
			var a = this, r = this.schema.primKey.keyPath;
			return this._trans("readwrite", function(i) {
				return a.core.get({
					trans: i,
					key: e
				}).then(function(n) {
					var o = null != n ? n : {};
					return pt(o, t), r && w(o, r, e), a.core.mutate({
						trans: i,
						type: "put",
						values: [o],
						keys: [e],
						upsert: !0,
						updates: {
							keys: [e],
							changeSpecs: [t]
						}
					}).then(function(e) {
						return e.numFailures ? be.reject(e.failures[0]) : !!n;
					});
				});
			});
		}, mt.prototype.update = function(e, t) {
			return "object" != typeof e || n(e) ? this.where(":id").equals(e).modify(t) : void 0 === (e = b(e, this.schema.primKey.keyPath)) ? Ye(new q.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t);
		}, mt.prototype.put = function(e, t) {
			var a = this, r = this.schema.primKey, i = r.auto, n = r.keyPath, o = e;
			return n && i && (o = it(n)(e)), this._trans("readwrite", function(e) {
				return a.core.mutate({
					trans: e,
					type: "put",
					values: [o],
					keys: null != t ? [t] : null
				});
			}).then(function(e) {
				return e.numFailures ? be.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (n) try {
					w(e, n, t);
				} catch (t) {}
				return t;
			});
		}, mt.prototype.delete = function(e) {
			var t = this;
			return this._trans("readwrite", function(a) {
				return t.core.mutate({
					trans: a,
					type: "delete",
					keys: [e]
				}).then(function(a) {
					return ct(t, [e], a);
				}).then(function(e) {
					return e.numFailures ? be.reject(e.failures[0]) : void 0;
				});
			});
		}, mt.prototype.clear = function() {
			var e = this;
			return this._trans("readwrite", function(t) {
				return e.core.mutate({
					trans: t,
					type: "deleteRange",
					range: rt
				}).then(function(t) {
					return ct(e, null, t);
				});
			}).then(function(e) {
				return e.numFailures ? be.reject(e.failures[0]) : void 0;
			});
		}, mt.prototype.bulkGet = function(e) {
			var t = this;
			return this._trans("readonly", function(a) {
				return t.core.getMany({
					keys: e,
					trans: a
				}).then(function(e) {
					return e.map(function(e) {
						return t.hook.reading.fire(e);
					});
				});
			});
		}, mt.prototype.bulkAdd = function(e, t, a) {
			var r = this, i = Array.isArray(t) ? t : void 0, n = (a = a || (i ? void 0 : t)) ? a.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var a, o = (a = r.schema.primKey).auto;
				if ((a = a.keyPath) && i) throw new q.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new q.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length;
				return o = a && o ? e.map(it(a)) : e, r.core.mutate({
					trans: t,
					type: "add",
					keys: i,
					values: o,
					wantResults: n
				}).then(function(e) {
					var t = e.numFailures, a = e.failures;
					if (0 === t) return n ? e.results : e.lastResult;
					throw new G("".concat(r.name, ".bulkAdd(): ").concat(t, " of ").concat(s, " operations failed"), a);
				});
			});
		}, mt.prototype.bulkPut = function(e, t, a) {
			var r = this, i = Array.isArray(t) ? t : void 0, n = (a = a || (i ? void 0 : t)) ? a.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var a, o = (a = r.schema.primKey).auto;
				if ((a = a.keyPath) && i) throw new q.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
				if (i && i.length !== e.length) throw new q.InvalidArgument("Arguments objects and keys must have the same length");
				var s = e.length;
				return o = a && o ? e.map(it(a)) : e, r.core.mutate({
					trans: t,
					type: "put",
					keys: i,
					values: o,
					wantResults: n
				}).then(function(e) {
					var t = e.numFailures, a = e.failures;
					if (0 === t) return n ? e.results : e.lastResult;
					throw new G("".concat(r.name, ".bulkPut(): ").concat(t, " of ").concat(s, " operations failed"), a);
				});
			});
		}, mt.prototype.bulkUpdate = function(e) {
			var t = this, a = this.core, r = e.map(function(e) {
				return e.key;
			}), i = e.map(function(e) {
				return e.changes;
			}), n = [];
			return this._trans("readwrite", function(o) {
				return a.getMany({
					trans: o,
					keys: r,
					cache: "clone"
				}).then(function(s) {
					var l = [], c = [], u = (e.forEach(function(e, a) {
						var r = e.key, i = e.changes, o = s[a];
						if (o) {
							for (var u = 0, d = Object.keys(i); u < d.length; u++) {
								var p = d[u], _ = i[p];
								if (p === t.schema.primKey.keyPath) {
									if (0 !== ot(_, r)) throw new q.Constraint("Cannot update primary key in bulkUpdate()");
								} else w(o, p, _);
							}
							n.push(a), l.push(r), c.push(o);
						}
					}), l.length);
					return a.mutate({
						trans: o,
						type: "put",
						keys: l,
						values: c,
						updates: {
							keys: r,
							changeSpecs: i
						}
					}).then(function(e) {
						var a = e.numFailures, r = e.failures;
						if (0 === a) return u;
						for (var i = 0, o = Object.keys(r); i < o.length; i++) {
							var s, l = o[i], c = n[Number(l)];
							null != c && (s = r[l], delete r[l], r[c] = s);
						}
						throw new G("".concat(t.name, ".bulkUpdate(): ").concat(a, " of ").concat(u, " operations failed"), r);
					});
				});
			});
		}, mt.prototype.bulkDelete = function(e) {
			var t = this, a = e.length;
			return this._trans("readwrite", function(a) {
				return t.core.mutate({
					trans: a,
					type: "delete",
					keys: e
				}).then(function(a) {
					return ct(t, e, a);
				});
			}).then(function(e) {
				var r = e.numFailures, i = e.failures;
				if (0 === r) return e.lastResult;
				throw new G("".concat(t.name, ".bulkDelete(): ").concat(r, " of ").concat(a, " operations failed"), i);
			});
		};
		var _t = mt;
		function mt() {}
		function yt(e) {
			function t(t, r) {
				if (r) {
					for (var i = arguments.length, n = new Array(i - 1); --i;) n[i - 1] = arguments[i];
					return a[t].subscribe.apply(null, n), e;
				}
				if ("string" == typeof t) return a[t];
			}
			var a = {};
			t.addEventType = s;
			for (var r = 1, o = arguments.length; r < o; ++r) s(arguments[r]);
			return t;
			function s(e, r, o) {
				var l, c;
				if ("object" != typeof e) return r = r || ee, c = {
					subscribers: [],
					fire: o = o || W,
					subscribe: function(e) {
						-1 === c.subscribers.indexOf(e) && (c.subscribers.push(e), c.fire = r(c.fire, e));
					},
					unsubscribe: function(e) {
						c.subscribers = c.subscribers.filter(function(t) {
							return t !== e;
						}), c.fire = c.subscribers.reduce(r, o);
					}
				}, a[e] = t[e] = c;
				i(l = e).forEach(function(e) {
					var t = l[e];
					if (n(t)) s(e, l[e][0], l[e][1]);
					else {
						if ("asap" !== t) throw new q.InvalidArgument("Invalid event config");
						var a = s(e, $, function() {
							for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
							a.subscribers.forEach(function(e) {
								v(function() {
									e.apply(null, t);
								});
							});
						});
					}
				});
			}
		}
		function ft(e, t) {
			return _(t).from({ prototype: e }), t;
		}
		function gt(e, t) {
			return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
		}
		function ht(e, t) {
			e.filter = at(e.filter, t);
		}
		function vt(e, t, a) {
			var r = e.replayFilter;
			e.replayFilter = r ? function() {
				return at(r(), t());
			} : t, e.justLimit = a && !r;
		}
		function bt(e, t) {
			if (e.isPrimKey) return t.primaryKey;
			var a = t.getIndexByKeyPath(e.index);
			if (a) return a;
			throw new q.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
		}
		function wt(e, t, a) {
			var r = bt(e, t.schema);
			return t.openCursor({
				trans: a,
				values: !e.keysOnly,
				reverse: "prev" === e.dir,
				unique: !!e.unique,
				query: {
					index: r,
					range: e.range
				}
			});
		}
		function St(e, t, a, r) {
			var i, n, o = e.replayFilter ? at(e.filter, e.replayFilter()) : e.filter;
			return e.or ? (i = {}, n = function(e, a, r) {
				var n, s;
				o && !o(a, r, function(e) {
					return a.stop(e);
				}, function(e) {
					return a.fail(e);
				}) || ("[object ArrayBuffer]" == (s = "" + (n = a.primaryKey)) && (s = "" + new Uint8Array(n)), c(i, s)) || (i[s] = !0, t(e, a, r));
			}, Promise.all([e.or._iterate(n, a), Ct(wt(e, r, a), e.algorithm, n, !e.keysOnly && e.valueMapper)])) : Ct(wt(e, r, a), at(e.algorithm, o), t, !e.keysOnly && e.valueMapper);
		}
		function Ct(e, t, a, r) {
			var i = ze(r ? function(e, t, i) {
				return a(r(e), t, i);
			} : a);
			return e.then(function(e) {
				if (e) return e.start(function() {
					var a = function() {
						return e.continue();
					};
					t && !t(e, function(e) {
						return a = e;
					}, function(t) {
						e.stop(t), a = W;
					}, function(t) {
						e.fail(t), a = W;
					}) || i(e.value, e, function(e) {
						return a = e;
					}), a();
				});
			});
		}
		kt.prototype._read = function(e, t) {
			var a = this._ctx;
			return a.error ? a.table._trans(null, Ye.bind(null, a.error)) : a.table._trans("readonly", e).then(t);
		}, kt.prototype._write = function(e) {
			var t = this._ctx;
			return t.error ? t.table._trans(null, Ye.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
		}, kt.prototype._addAlgorithm = function(e) {
			var t = this._ctx;
			t.algorithm = at(t.algorithm, e);
		}, kt.prototype._iterate = function(e, t) {
			return St(this._ctx, e, t, this._ctx.table.core);
		}, kt.prototype.clone = function(e) {
			var t = Object.create(this.constructor.prototype), a = Object.create(this._ctx);
			return e && o(a, e), t._ctx = a, t;
		}, kt.prototype.raw = function() {
			return this._ctx.valueMapper = null, this;
		}, kt.prototype.each = function(e) {
			var t = this._ctx;
			return this._read(function(a) {
				return St(t, e, a, t.table.core);
			});
		}, kt.prototype.count = function(e) {
			var t = this;
			return this._read(function(e) {
				var a, r = t._ctx, i = r.table.core;
				return gt(r, !0) ? i.count({
					trans: e,
					query: {
						index: bt(r, i.schema),
						range: r.range
					}
				}).then(function(e) {
					return Math.min(e, r.limit);
				}) : (a = 0, St(r, function() {
					return ++a, !1;
				}, e, i).then(function() {
					return a;
				}));
			}).then(e);
		}, kt.prototype.sortBy = function(e, t) {
			var a = e.split(".").reverse(), r = a[0], i = a.length - 1;
			function n(e, t) {
				return t ? n(e[a[t]], t - 1) : e[r];
			}
			var o = "next" === this._ctx.dir ? 1 : -1;
			function s(e, t) {
				return ot(n(e, i), n(t, i)) * o;
			}
			return this.toArray(function(e) {
				return e.slice().sort(s);
			}).then(t);
		}, kt.prototype.toArray = function(e) {
			var t = this;
			return this._read(function(e) {
				var a, r, i, n = t._ctx;
				return gt(n, !0) && 0 < n.limit ? (a = n.valueMapper, r = bt(n, n.table.core.schema), n.table.core.query({
					trans: e,
					limit: n.limit,
					values: !0,
					direction: "prev" === n.dir ? "prev" : void 0,
					query: {
						index: r,
						range: n.range
					}
				}).then(function(e) {
					return e = e.result, a ? e.map(a) : e;
				})) : (i = [], St(n, function(e) {
					return i.push(e);
				}, e, n.table.core).then(function() {
					return i;
				}));
			}, e);
		}, kt.prototype.offset = function(e) {
			var t = this._ctx;
			return e <= 0 || (t.offset += e, gt(t) ? vt(t, function() {
				var t = e;
				return function(e, a) {
					return 0 === t || (1 === t ? --t : a(function() {
						e.advance(t), t = 0;
					}), !1);
				};
			}) : vt(t, function() {
				var t = e;
				return function() {
					return --t < 0;
				};
			})), this;
		}, kt.prototype.limit = function(e) {
			return this._ctx.limit = Math.min(this._ctx.limit, e), vt(this._ctx, function() {
				var t = e;
				return function(e, a, r) {
					return --t <= 0 && a(r), 0 <= t;
				};
			}, !0), this;
		}, kt.prototype.until = function(e, t) {
			return ht(this._ctx, function(a, r, i) {
				return !e(a.value) || (r(i), t);
			}), this;
		}, kt.prototype.first = function(e) {
			return this.limit(1).toArray(function(e) {
				return e[0];
			}).then(e);
		}, kt.prototype.last = function(e) {
			return this.reverse().first(e);
		}, kt.prototype.filter = function(e) {
			var t;
			return ht(this._ctx, function(t) {
				return e(t.value);
			}), (t = this._ctx).isMatch = at(t.isMatch, e), this;
		}, kt.prototype.and = function(e) {
			return this.filter(e);
		}, kt.prototype.or = function(e) {
			return new this.db.WhereClause(this._ctx.table, e, this);
		}, kt.prototype.reverse = function() {
			return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
		}, kt.prototype.desc = function() {
			return this.reverse();
		}, kt.prototype.eachKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, a) {
				e(a.key, a);
			});
		}, kt.prototype.eachUniqueKey = function(e) {
			return this._ctx.unique = "unique", this.eachKey(e);
		}, kt.prototype.eachPrimaryKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, a) {
				e(a.primaryKey, a);
			});
		}, kt.prototype.keys = function(e) {
			var t = this._ctx, a = (t.keysOnly = !t.isMatch, []);
			return this.each(function(e, t) {
				a.push(t.key);
			}).then(function() {
				return a;
			}).then(e);
		}, kt.prototype.primaryKeys = function(e) {
			var t = this._ctx;
			if (gt(t, !0) && 0 < t.limit) return this._read(function(e) {
				var a = bt(t, t.table.core.schema);
				return t.table.core.query({
					trans: e,
					values: !1,
					limit: t.limit,
					direction: "prev" === t.dir ? "prev" : void 0,
					query: {
						index: a,
						range: t.range
					}
				});
			}).then(function(e) {
				return e.result;
			}).then(e);
			t.keysOnly = !t.isMatch;
			var a = [];
			return this.each(function(e, t) {
				a.push(t.primaryKey);
			}).then(function() {
				return a;
			}).then(e);
		}, kt.prototype.uniqueKeys = function(e) {
			return this._ctx.unique = "unique", this.keys(e);
		}, kt.prototype.firstKey = function(e) {
			return this.limit(1).keys(function(e) {
				return e[0];
			}).then(e);
		}, kt.prototype.lastKey = function(e) {
			return this.reverse().firstKey(e);
		}, kt.prototype.distinct = function() {
			var e, t;
			return (t = (t = this._ctx).index && t.table.schema.idxByName[t.index]) && t.multi && (e = {}, ht(this._ctx, function(t) {
				t = t.primaryKey.toString();
				var a = c(e, t);
				return e[t] = !0, !a;
			})), this;
		}, kt.prototype.modify = function(e) {
			var t = this, a = this._ctx;
			return this._write(function(r) {
				function n(e, t) {
					var a = t.failures;
					_ += e - t.numFailures;
					for (var r = 0, n = i(a); r < n.length; r++) {
						var o = n[r];
						p.push(a[o]);
					}
				}
				var o, s = "function" == typeof e ? e : function(t) {
					return pt(t, e);
				}, l = a.table.core, c = (o = l.schema.primaryKey).outbound, u = o.extractKey, d = 200, p = ((o = t.db._options.modifyChunkSize) && (d = "object" == typeof o ? o[l.name] || o["*"] || 200 : o), []), _ = 0, m = [], y = e === At;
				return t.clone().primaryKeys().then(function(t) {
					var i = gt(a) && a.limit === 1 / 0 && ("function" != typeof e || y) && {
						index: a.index,
						range: a.range
					};
					return function o(p) {
						var _ = Math.min(d, t.length - p), m = t.slice(p, p + _);
						return (y ? Promise.resolve([]) : l.getMany({
							trans: r,
							keys: m,
							cache: "immutable"
						})).then(function(f) {
							var g = [], h = [], v = c ? [] : null, b = y ? m : [];
							if (!y) for (var w = 0; w < _; ++w) {
								var S = f[w], C = {
									value: E(S),
									primKey: t[p + w]
								};
								!1 !== s.call(C, C.value, C) && (null == C.value ? b.push(t[p + w]) : c || 0 === ot(u(S), u(C.value)) ? (h.push(C.value), c && v.push(t[p + w])) : (b.push(t[p + w]), g.push(C.value)));
							}
							return Promise.resolve(0 < g.length && l.mutate({
								trans: r,
								type: "add",
								values: g
							}).then(function(e) {
								for (var t in e.failures) b.splice(parseInt(t), 1);
								n(g.length, e);
							})).then(function() {
								return (0 < h.length || i && "object" == typeof e) && l.mutate({
									trans: r,
									type: "put",
									keys: v,
									values: h,
									criteria: i,
									changeSpec: "function" != typeof e && e,
									isAdditionalChunk: 0 < p
								}).then(function(e) {
									return n(h.length, e);
								});
							}).then(function() {
								return (0 < b.length || i && y) && l.mutate({
									trans: r,
									type: "delete",
									keys: b,
									criteria: i,
									isAdditionalChunk: 0 < p
								}).then(function(e) {
									return ct(a.table, b, e);
								}).then(function(e) {
									return n(b.length, e);
								});
							}).then(function() {
								return t.length > p + _ && o(p + d);
							});
						});
					}(0).then(function() {
						if (0 < p.length) throw new U("Error modifying one or more objects", p, _, m);
						return t.length;
					});
				});
			});
		}, kt.prototype.delete = function() {
			var e = this._ctx, t = e.range;
			return !gt(e) || e.table.schema.yProps || !e.isPrimKey && 3 !== t.type ? this.modify(At) : this._write(function(a) {
				var r = e.table.core.schema.primaryKey, i = t;
				return e.table.core.count({
					trans: a,
					query: {
						index: r,
						range: i
					}
				}).then(function(t) {
					return e.table.core.mutate({
						trans: a,
						type: "deleteRange",
						range: i
					}).then(function(e) {
						var a = e.failures;
						if (e = e.numFailures) throw new U("Could not delete some values", Object.keys(a).map(function(e) {
							return a[e];
						}), t - e);
						return t - e;
					});
				});
			});
		};
		var It = kt;
		function kt() {}
		var At = function(e, t) {
			return t.value = null;
		};
		function xt(e, t) {
			return e < t ? -1 : e === t ? 0 : 1;
		}
		function Et(e, t) {
			return t < e ? -1 : e === t ? 0 : 1;
		}
		function Dt(e, t, a) {
			return (e = e instanceof Mt ? new e.Collection(e) : e)._ctx.error = new (a || TypeError)(t), e;
		}
		function Tt(e) {
			return new e.Collection(e, function() {
				return Rt("");
			}).limit(0);
		}
		function Bt(e, t, a, r) {
			var i, n, o, s, l, c, u, d = a.length;
			if (!a.every(function(e) {
				return "string" == typeof e;
			})) return Dt(e, Ze);
			function p(e) {
				i = "next" === e ? function(e) {
					return e.toUpperCase();
				} : function(e) {
					return e.toLowerCase();
				}, n = "next" === e ? function(e) {
					return e.toLowerCase();
				} : function(e) {
					return e.toUpperCase();
				}, o = "next" === e ? xt : Et;
				var t = a.map(function(e) {
					return {
						lower: n(e),
						upper: i(e)
					};
				}).sort(function(e, t) {
					return o(e.lower, t.lower);
				});
				s = t.map(function(e) {
					return e.upper;
				}), l = t.map(function(e) {
					return e.lower;
				}), u = "next" === (c = e) ? "" : r;
			}
			p("next");
			var _ = ((e = new e.Collection(e, function() {
				return zt(s[0], l[d - 1] + r);
			}))._ondirectionchange = function(e) {
				p(e);
			}, 0);
			return e._addAlgorithm(function(e, a, r) {
				var i = e.key;
				if ("string" == typeof i) {
					var p = n(i);
					if (t(p, l, _)) return !0;
					for (var m = null, y = _; y < d; ++y) {
						var f = ((e, t, a, r, i, n) => {
							for (var o = Math.min(e.length, r.length), s = -1, l = 0; l < o; ++l) {
								var c = t[l];
								if (c !== r[l]) return i(e[l], a[l]) < 0 ? e.substr(0, l) + a[l] + a.substr(l + 1) : i(e[l], r[l]) < 0 ? e.substr(0, l) + r[l] + a.substr(l + 1) : 0 <= s ? e.substr(0, s) + t[s] + a.substr(s + 1) : null;
								i(e[l], c) < 0 && (s = l);
							}
							return o < r.length && "next" === n ? e + a.substr(e.length) : o < e.length && "prev" === n ? e.substr(0, a.length) : s < 0 ? null : e.substr(0, s) + r[s] + a.substr(s + 1);
						})(i, p, s[y], l[y], o, c);
						null === f && null === m ? _ = y + 1 : (null === m || 0 < o(m, f)) && (m = f);
					}
					a(null !== m ? function() {
						e.continue(m + u);
					} : r);
				}
				return !1;
			}), e;
		}
		function zt(e, t, a, r) {
			return {
				type: 2,
				lower: e,
				upper: t,
				lowerOpen: a,
				upperOpen: r
			};
		}
		function Rt(e) {
			return {
				type: 1,
				lower: e,
				upper: e
			};
		}
		Object.defineProperty(Ot.prototype, "Collection", {
			get: function() {
				return this._ctx.table.db.Collection;
			},
			enumerable: !1,
			configurable: !0
		}), Ot.prototype.between = function(e, t, a, r) {
			a = !1 !== a, r = !0 === r;
			try {
				return 0 < this._cmp(e, t) || 0 === this._cmp(e, t) && (a || r) && (!a || !r) ? Tt(this) : new this.Collection(this, function() {
					return zt(e, t, !a, !r);
				});
			} catch (e) {
				return Dt(this, Je);
			}
		}, Ot.prototype.equals = function(e) {
			return null == e ? Dt(this, Je) : new this.Collection(this, function() {
				return Rt(e);
			});
		}, Ot.prototype.above = function(e) {
			return null == e ? Dt(this, Je) : new this.Collection(this, function() {
				return zt(e, void 0, !0);
			});
		}, Ot.prototype.aboveOrEqual = function(e) {
			return null == e ? Dt(this, Je) : new this.Collection(this, function() {
				return zt(e, void 0, !1);
			});
		}, Ot.prototype.below = function(e) {
			return null == e ? Dt(this, Je) : new this.Collection(this, function() {
				return zt(void 0, e, !1, !0);
			});
		}, Ot.prototype.belowOrEqual = function(e) {
			return null == e ? Dt(this, Je) : new this.Collection(this, function() {
				return zt(void 0, e);
			});
		}, Ot.prototype.startsWith = function(e) {
			return "string" != typeof e ? Dt(this, Ze) : this.between(e, e + Xe, !0, !0);
		}, Ot.prototype.startsWithIgnoreCase = function(e) {
			return "" === e ? this.startsWith(e) : Bt(this, function(e, t) {
				return 0 === e.indexOf(t[0]);
			}, [e], Xe);
		}, Ot.prototype.equalsIgnoreCase = function(e) {
			return Bt(this, function(e, t) {
				return e === t[0];
			}, [e], "");
		}, Ot.prototype.anyOfIgnoreCase = function() {
			var e = O.apply(M, arguments);
			return 0 === e.length ? Tt(this) : Bt(this, function(e, t) {
				return -1 !== t.indexOf(e);
			}, e, "");
		}, Ot.prototype.startsWithAnyOfIgnoreCase = function() {
			var e = O.apply(M, arguments);
			return 0 === e.length ? Tt(this) : Bt(this, function(e, t) {
				return t.some(function(t) {
					return 0 === e.indexOf(t);
				});
			}, e, Xe);
		}, Ot.prototype.anyOf = function() {
			var e, t, a = this, r = O.apply(M, arguments), i = this._cmp;
			try {
				r.sort(i);
			} catch (e) {
				return Dt(this, Je);
			}
			return 0 === r.length ? Tt(this) : ((e = new this.Collection(this, function() {
				return zt(r[0], r[r.length - 1]);
			}))._ondirectionchange = function(e) {
				i = "next" === e ? a._ascending : a._descending, r.sort(i);
			}, t = 0, e._addAlgorithm(function(e, a, n) {
				for (var o = e.key; 0 < i(o, r[t]);) if (++t === r.length) return a(n), !1;
				return 0 === i(o, r[t]) || (a(function() {
					e.continue(r[t]);
				}), !1);
			}), e);
		}, Ot.prototype.notEqual = function(e) {
			return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], {
				includeLowers: !1,
				includeUppers: !1
			});
		}, Ot.prototype.noneOf = function() {
			var e = O.apply(M, arguments);
			if (0 === e.length) return new this.Collection(this);
			try {
				e.sort(this._ascending);
			} catch (e) {
				return Dt(this, Je);
			}
			var t = e.reduce(function(e, t) {
				return e ? e.concat([[e[e.length - 1][1], t]]) : [[-1 / 0, t]];
			}, null);
			return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
				includeLowers: !1,
				includeUppers: !1
			});
		}, Ot.prototype.inAnyRange = function(e, t) {
			var a = this, r = this._cmp, i = this._ascending, n = this._descending, o = this._min, s = this._max;
			if (0 === e.length) return Tt(this);
			if (!e.every(function(e) {
				return void 0 !== e[0] && void 0 !== e[1] && i(e[0], e[1]) <= 0;
			})) return Dt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", q.InvalidArgument);
			var l, c = !t || !1 !== t.includeLowers, u = t && !0 === t.includeUppers, d = i;
			function p(e, t) {
				return d(e[0], t[0]);
			}
			try {
				(l = e.reduce(function(e, t) {
					for (var a = 0, i = e.length; a < i; ++a) {
						var n = e[a];
						if (r(t[0], n[1]) < 0 && 0 < r(t[1], n[0])) {
							n[0] = o(n[0], t[0]), n[1] = s(n[1], t[1]);
							break;
						}
					}
					return a === i && e.push(t), e;
				}, [])).sort(p);
			} catch (e) {
				return Dt(this, Je);
			}
			var _ = 0, m = u ? function(e) {
				return 0 < i(e, l[_][1]);
			} : function(e) {
				return 0 <= i(e, l[_][1]);
			}, y = c ? function(e) {
				return 0 < n(e, l[_][0]);
			} : function(e) {
				return 0 <= n(e, l[_][0]);
			}, f = m;
			return (t = new this.Collection(this, function() {
				return zt(l[0][0], l[l.length - 1][1], !c, !u);
			}))._ondirectionchange = function(e) {
				d = "next" === e ? (f = m, i) : (f = y, n), l.sort(p);
			}, t._addAlgorithm(function(e, t, r) {
				for (var n, o = e.key; f(o);) if (++_ === l.length) return t(r), !1;
				return !m(n = o) && !y(n) || (0 === a._cmp(o, l[_][1]) || 0 === a._cmp(o, l[_][0]) || t(function() {
					d === i ? e.continue(l[_][0]) : e.continue(l[_][1]);
				}), !1);
			}), t;
		}, Ot.prototype.startsWithAnyOf = function() {
			var e = O.apply(M, arguments);
			return e.every(function(e) {
				return "string" == typeof e;
			}) ? 0 === e.length ? Tt(this) : this.inAnyRange(e.map(function(e) {
				return [e, e + Xe];
			})) : Dt(this, "startsWithAnyOf() only works with strings");
		};
		var Mt = Ot;
		function Ot() {}
		function Pt(e) {
			return ze(function(t) {
				return Nt(t), e(t.target.error), !1;
			});
		}
		function Nt(e) {
			e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
		}
		var Kt = "storagemutated", Lt = "x-storagemutated-1", jt = yt(null, Kt), Ut = (Gt.prototype._lock = function() {
			return h(!fe.global), ++this._reculock, 1 !== this._reculock || fe.global || (fe.lockOwnerFor = this), this;
		}, Gt.prototype._unlock = function() {
			if (h(!fe.global), 0 == --this._reculock) for (fe.global || (fe.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
				var e = this._blockedFuncs.shift();
				try {
					He(e[1], e[0]);
				} catch (e) {}
			}
			return this;
		}, Gt.prototype._locked = function() {
			return this._reculock && fe.lockOwnerFor !== this;
		}, Gt.prototype.create = function(e) {
			var t = this;
			if (this.mode) {
				var a = this.db.idbdb, r = this.db._state.dbOpenError;
				if (h(!this.idbtrans), !e && !a) switch (r && r.name) {
					case "DatabaseClosedError": throw new q.DatabaseClosed(r);
					case "MissingAPIError": throw new q.MissingAPI(r.message, r);
					default: throw new q.OpenFailed(r);
				}
				if (!this.active) throw new q.TransactionInactive();
				h(null === this._completion._state), (e = this.idbtrans = e || (this.db.core || a).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = ze(function(a) {
					Nt(a), t._reject(e.error);
				}), e.onabort = ze(function(a) {
					Nt(a), t.active && t._reject(new q.Abort(e.error)), t.active = !1, t.on("abort").fire(a);
				}), e.oncomplete = ze(function() {
					t.active = !1, t._resolve(), "mutatedParts" in e && jt.storagemutated.fire(e.mutatedParts);
				});
			}
			return this;
		}, Gt.prototype._promise = function(e, t, a) {
			var r, i = this;
			return "readwrite" === e && "readwrite" !== this.mode ? Ye(new q.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new be(function(r, n) {
				i._blockedFuncs.push([function() {
					i._promise(e, t, a).then(r, n);
				}, fe]);
			}) : a ? Le(function() {
				var e = new be(function(e, a) {
					i._lock();
					var r = t(e, a, i);
					r && r.then && r.then(e, a);
				});
				return e.finally(function() {
					return i._unlock();
				}), e._lib = !0, e;
			}) : ((r = new be(function(e, a) {
				var r = t(e, a, i);
				r && r.then && r.then(e, a);
			}))._lib = !0, r) : Ye(new q.TransactionInactive());
		}, Gt.prototype._root = function() {
			return this.parent ? this.parent._root() : this;
		}, Gt.prototype.waitFor = function(e) {
			var t, a = this._root(), r = be.resolve(e), i = (a._waitingFor ? a._waitingFor = a._waitingFor.then(function() {
				return r;
			}) : (a._waitingFor = r, a._waitingQueue = [], t = a.idbtrans.objectStore(a.storeNames[0]), function e() {
				for (++a._spinCount; a._waitingQueue.length;) a._waitingQueue.shift()();
				a._waitingFor && (t.get(-1 / 0).onsuccess = e);
			}()), a._waitingFor);
			return new be(function(e, t) {
				r.then(function(t) {
					return a._waitingQueue.push(ze(e.bind(null, t)));
				}, function(e) {
					return a._waitingQueue.push(ze(t.bind(null, e)));
				}).finally(function() {
					a._waitingFor === i && (a._waitingFor = null);
				});
			});
		}, Gt.prototype.abort = function() {
			this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new q.Abort()));
		}, Gt.prototype.table = function(e) {
			var t = this._memoizedTables || (this._memoizedTables = {});
			if (c(t, e)) return t[e];
			var a = this.schema[e];
			if (a) return (a = new this.db.Table(e, a, this)).core = this.db.core.table(e), t[e] = a;
			throw new q.NotFound("Table " + e + " not part of transaction");
		}, Gt);
		function Gt() {}
		function Ft(e, t, a, r, i, n, o, s) {
			return {
				name: e,
				keyPath: t,
				unique: a,
				multi: r,
				auto: i,
				compound: n,
				src: (a && !o ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + Vt(t),
				type: s
			};
		}
		function Vt(e) {
			return "string" == typeof e ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
		}
		function qt(e, t, a) {
			return {
				name: e,
				primKey: t,
				indexes: a,
				mappedClass: null,
				idxByName: (r = function(e) {
					return [e.name, e];
				}, a.reduce(function(e, t, a) {
					return (t = r(t)) && (e[t[0]] = t[1]), e;
				}, {}))
			};
			var r;
		}
		var Ht = function(e) {
			try {
				return e.only([[]]), Ht = function() {
					return [[]];
				}, [[]];
			} catch (e) {
				return Ht = function() {
					return Xe;
				}, Xe;
			}
		};
		function Wt(e) {
			return null == e ? function() {} : "string" == typeof e ? 1 === (t = e).split(".").length ? function(e) {
				return e[t];
			} : function(e) {
				return b(e, t);
			} : function(t) {
				return b(t, e);
			};
			var t;
		}
		function $t(e) {
			return [].slice.call(e);
		}
		var Yt = 0;
		function Xt(e) {
			return null == e ? ":id" : "string" == typeof e ? e : "[".concat(e.join("+"), "]");
		}
		function Jt(e, a) {
			var r = a.db;
			r = function(e, a, r, i) {
				return a = function(e, t, a) {
					function r(e) {
						if (3 === e.type) return null;
						if (4 === e.type) throw new Error("Cannot convert never type to IDBKeyRange");
						var a = e.lower, r = e.upper, i = e.lowerOpen;
						return e = e.upperOpen, void 0 === a ? void 0 === r ? null : t.upperBound(r, !!e) : void 0 === r ? t.lowerBound(a, !!i) : t.bound(a, r, !!i, !!e);
					}
					i = a, c = 0 < (o = $t((a = e).objectStoreNames)).length ? i.objectStore(o[0]) : {}, a = {
						schema: {
							name: a.name,
							tables: o.map(function(e) {
								return i.objectStore(e);
							}).map(function(e) {
								var t = e.keyPath, a = e.autoIncrement, r = n(t), i = {};
								return r = {
									name: e.name,
									primaryKey: {
										name: null,
										isPrimaryKey: !0,
										outbound: null == t,
										compound: r,
										keyPath: t,
										autoIncrement: a,
										unique: !0,
										extractKey: Wt(t)
									},
									indexes: $t(e.indexNames).map(function(t) {
										return e.index(t);
									}).map(function(e) {
										var t = e.name, a = e.unique, r = e.multiEntry;
										return e = e.keyPath, t = {
											name: t,
											compound: n(e),
											keyPath: e,
											unique: a,
											multiEntry: r,
											extractKey: Wt(e)
										}, i[Xt(e)] = t;
									}),
									getIndexByKeyPath: function(e) {
										return i[Xt(e)];
									}
								}, i[":id"] = r.primaryKey, null != t && (i[Xt(t)] = r.primaryKey), r;
							})
						},
						hasGetAll: 0 < o.length && "getAll" in c && !("undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604),
						hasIdb3Features: "getAllRecords" in c
					};
					var i, o = a.schema, s = a.hasGetAll, l = a.hasIdb3Features, c = o.tables.map(function(e) {
						var t, a, i = e.name;
						return {
							name: i,
							schema: e,
							mutate: function(e) {
								var t = e.trans, a = e.type, n = e.keys, o = e.values, s = e.range;
								return new Promise(function(e, l) {
									e = ze(e);
									var c = t.objectStore(i), u = null == c.keyPath, d = "put" === a || "add" === a;
									if (!d && "delete" !== a && "deleteRange" !== a) throw new Error("Invalid operation type: " + a);
									var p, _ = (n || o || { length: 1 }).length;
									if (n && o && n.length !== o.length) throw new Error("Given keys array must have same length as given values array.");
									if (0 === _) return e({
										numFailures: 0,
										failures: {},
										results: [],
										lastResult: void 0
									});
									function m(e) {
										++g, Nt(e);
									}
									var y = [], f = [], g = 0;
									if ("deleteRange" === a) {
										if (4 === s.type) return e({
											numFailures: g,
											failures: f,
											results: [],
											lastResult: void 0
										});
										3 === s.type ? y.push(p = c.clear()) : y.push(p = c.delete(r(s)));
									} else {
										var h = (u = d ? u ? [o, n] : [o, null] : [n, null])[0], v = u[1];
										if (d) for (var b = 0; b < _; ++b) y.push(p = v && void 0 !== v[b] ? c[a](h[b], v[b]) : c[a](h[b])), p.onerror = m;
										else for (b = 0; b < _; ++b) y.push(p = c[a](h[b])), p.onerror = m;
									}
									function w(t) {
										t = t.target.result, y.forEach(function(e, t) {
											return null != e.error && (f[t] = e.error);
										}), e({
											numFailures: g,
											failures: f,
											results: "delete" === a ? n : y.map(function(e) {
												return e.result;
											}),
											lastResult: t
										});
									}
									p.onerror = function(e) {
										m(e), w(e);
									}, p.onsuccess = w;
								});
							},
							getMany: function(e) {
								var t = e.trans, a = e.keys;
								return new Promise(function(e, r) {
									e = ze(e);
									for (var n, o = t.objectStore(i), s = a.length, l = new Array(s), c = 0, u = 0, d = function(t) {
										t = t.target, l[t._pos] = t.result, ++u === c && e(l);
									}, p = Pt(r), _ = 0; _ < s; ++_) null != a[_] && ((n = o.get(a[_]))._pos = _, n.onsuccess = d, n.onerror = p, ++c);
									0 === c && e(l);
								});
							},
							get: function(e) {
								var t = e.trans, a = e.key;
								return new Promise(function(e, r) {
									e = ze(e);
									var n = t.objectStore(i).get(a);
									n.onsuccess = function(t) {
										return e(t.target.result);
									}, n.onerror = Pt(r);
								});
							},
							query: (t = s, a = l, function(e) {
								return new Promise(function(n, o) {
									n = ze(n);
									var s, l, c, u, d = e.trans, p = e.values, _ = e.limit, m = e.query, y = null != (y = e.direction) ? y : "next", f = _ === 1 / 0 ? void 0 : _, g = m.index;
									if (m = m.range, d = d.objectStore(i), d = g.isPrimaryKey ? d : d.index(g.name), g = r(m), 0 === _) return n({ result: [] });
									a ? (m = {
										query: g,
										count: f,
										direction: y
									}, (s = p ? d.getAll(m) : d.getAllKeys(m)).onsuccess = function(e) {
										return n({ result: e.target.result });
									}, s.onerror = Pt(o)) : t && "next" === y ? ((s = p ? d.getAll(g, f) : d.getAllKeys(g, f)).onsuccess = function(e) {
										return n({ result: e.target.result });
									}, s.onerror = Pt(o)) : (l = 0, c = !p && "openKeyCursor" in d ? d.openKeyCursor(g, y) : d.openCursor(g, y), u = [], c.onsuccess = function() {
										var e = c.result;
										return e && (u.push(p ? e.value : e.primaryKey), ++l !== _) ? void e.continue() : n({ result: u });
									}, c.onerror = Pt(o));
								});
							}),
							openCursor: function(e) {
								var t = e.trans, a = e.values, n = e.query, o = e.reverse, s = e.unique;
								return new Promise(function(e, l) {
									e = ze(e);
									var c = n.index, u = n.range, d = t.objectStore(i), p = (d = c.isPrimaryKey ? d : d.index(c.name), c = o ? s ? "prevunique" : "prev" : s ? "nextunique" : "next", !a && "openKeyCursor" in d ? d.openKeyCursor(r(u), c) : d.openCursor(r(u), c));
									p.onerror = Pt(l), p.onsuccess = ze(function(a) {
										var r, i, n, o, s = p.result;
										s ? (s.___id = ++Yt, s.done = !1, r = s.continue.bind(s), i = (i = s.continuePrimaryKey) && i.bind(s), n = s.advance.bind(s), o = function() {
											throw new Error("Cursor not stopped");
										}, s.trans = t, s.stop = s.continue = s.continuePrimaryKey = s.advance = function() {
											throw new Error("Cursor not started");
										}, s.fail = ze(l), s.next = function() {
											var e = this, t = 1;
											return this.start(function() {
												return t-- ? e.continue() : e.stop();
											}).then(function() {
												return e;
											});
										}, s.start = function(e) {
											function t() {
												if (p.result) try {
													e();
												} catch (e) {
													s.fail(e);
												}
												else s.done = !0, s.start = function() {
													throw new Error("Cursor behind last entry");
												}, s.stop();
											}
											var a = new Promise(function(e, t) {
												e = ze(e), p.onerror = Pt(t), s.fail = t, s.stop = function(t) {
													s.stop = s.continue = s.continuePrimaryKey = s.advance = o, e(t);
												};
											});
											return p.onsuccess = ze(function(e) {
												p.onsuccess = t, t();
											}), s.continue = r, s.continuePrimaryKey = i, s.advance = n, t(), a;
										}, e(s)) : e(null);
									}, l);
								});
							},
							count: function(e) {
								var t = e.query, a = e.trans, n = t.index, o = t.range;
								return new Promise(function(e, t) {
									var s, l = a.objectStore(i);
									l = n.isPrimaryKey ? l : l.index(n.name), (s = (s = r(o)) ? l.count(s) : l.count()).onsuccess = ze(function(t) {
										return e(t.target.result);
									}), s.onerror = Pt(t);
								});
							}
						};
					}), u = {};
					return c.forEach(function(e) {
						return u[e.name] = e;
					}), {
						stack: "dbcore",
						transaction: e.transaction.bind(e),
						table: function(e) {
							if (u[e]) return u[e];
							throw new Error("Table '".concat(e, "' not found"));
						},
						MIN_KEY: -1 / 0,
						MAX_KEY: Ht(t),
						schema: o
					};
				}(a, r = r.IDBKeyRange, i), { dbcore: e.dbcore.reduce(function(e, a) {
					return a = a.create, t(t({}, e), a(e));
				}, a) };
			}(e._middlewares, r, e._deps, a), e.core = r.dbcore, e.tables.forEach(function(t) {
				var a = t.name;
				e.core.schema.tables.some(function(e) {
					return e.name === a;
				}) && (t.core = e.core.table(a), e[a] instanceof e.Table) && (e[a].core = t.core);
			});
		}
		function Zt(e, t, a, r) {
			a.forEach(function(a) {
				var i = r[a];
				t.forEach(function(t) {
					var r = function e(t, a) {
						return m(t, a) || (t = s(t)) && e(t, a);
					}(t, a);
					(!r || "value" in r && void 0 === r.value) && (t === e.Transaction.prototype || t instanceof e.Transaction ? p(t, a, {
						get: function() {
							return this.table(a);
						},
						set: function(e) {
							d(this, a, {
								value: e,
								writable: !0,
								configurable: !0,
								enumerable: !0
							});
						}
					}) : t[a] = new e.Table(a, i));
				});
			});
		}
		function Qt(e, t) {
			t.forEach(function(t) {
				for (var a in t) t[a] instanceof e.Table && delete t[a];
			});
		}
		function ea(e, t) {
			return e._cfg.version - t._cfg.version;
		}
		function ta(e, t, a, r) {
			var n = e._dbSchema, o = (a.objectStoreNames.contains("$meta") && !n.$meta && (n.$meta = qt("$meta", la("")[0], []), e._storeNames.push("$meta")), e._createTransaction("readwrite", e._storeNames, n)), s = (o.create(a), o._completion.catch(r), o._reject.bind(o)), l = fe.transless || fe;
			Le(function() {
				if (fe.trans = o, fe.transless = l, 0 !== t) return Jt(e, a), c = t, ((r = o).storeNames.includes("$meta") ? r.table("$meta").get("version").then(function(e) {
					return null != e ? e : c;
				}) : be.resolve(c)).then(function(t) {
					var r = e, n = t, s = o, l = a, c = [], u = (t = r._versions, r._dbSchema = oa(0, r.idbdb, l));
					return 0 === (t = t.filter(function(e) {
						return e._cfg.version >= n;
					})).length ? be.resolve() : (t.forEach(function(e) {
						c.push(function() {
							var t, a, o, c = u, d = e._cfg.dbschema, p = (sa(r, c, l), sa(r, d, l), u = r._dbSchema = d, aa(c, d)), _ = (p.add.forEach(function(e) {
								ra(l, e[0], e[1].primKey, e[1].indexes);
							}), p.change.forEach(function(e) {
								if (e.recreate) throw new q.Upgrade("Not yet support for changing primary key");
								var t = l.objectStore(e.name);
								e.add.forEach(function(e) {
									return na(t, e);
								}), e.change.forEach(function(e) {
									t.deleteIndex(e.name), na(t, e);
								}), e.del.forEach(function(e) {
									return t.deleteIndex(e);
								});
							}), e._cfg.contentUpgrade);
							if (_ && e._cfg.version > n) return Jt(r, l), s._memoizedTables = {}, t = S(d), p.del.forEach(function(e) {
								t[e] = c[e];
							}), Qt(r, [r.Transaction.prototype]), Zt(r, [r.Transaction.prototype], i(t), t), s.schema = t, (a = P(_)) && je(), d = be.follow(function() {
								var e;
								(o = _(s)) && a && (e = Ue.bind(null, null), o.then(e, e));
							}), o && "function" == typeof o.then ? be.resolve(o) : d.then(function() {
								return o;
							});
						}), c.push(function(t) {
							var a = e._cfg.dbschema, i = t;
							[].slice.call(i.db.objectStoreNames).forEach(function(e) {
								return null == a[e] && i.db.deleteObjectStore(e);
							}), Qt(r, [r.Transaction.prototype]), Zt(r, [r.Transaction.prototype], r._storeNames, r._dbSchema), s.schema = r._dbSchema;
						}), c.push(function(t) {
							r.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(r.idbdb.version / 10) === e._cfg.version ? (r.idbdb.deleteObjectStore("$meta"), delete r._dbSchema.$meta, r._storeNames = r._storeNames.filter(function(e) {
								return "$meta" !== e;
							})) : t.objectStore("$meta").put(e._cfg.version, "version"));
						});
					}), function e() {
						return c.length ? be.resolve(c.shift()(s.idbtrans)).then(e) : be.resolve();
					}().then(function() {
						ia(u, l);
					}));
				}).catch(s);
				var r, c;
				i(n).forEach(function(e) {
					ra(a, e, n[e].primKey, n[e].indexes);
				}), Jt(e, a), be.follow(function() {
					return e.on.populate.fire(o);
				}).catch(s);
			});
		}
		function aa(e, t) {
			var a, r = {
				del: [],
				add: [],
				change: []
			};
			for (a in e) t[a] || r.del.push(a);
			for (a in t) {
				var i = e[a], n = t[a];
				if (i) {
					var o = {
						name: a,
						def: n,
						recreate: !1,
						del: [],
						add: [],
						change: []
					};
					if ("" + (i.primKey.keyPath || "") != "" + (n.primKey.keyPath || "") || i.primKey.auto !== n.primKey.auto) o.recreate = !0, r.change.push(o);
					else {
						var s = i.idxByName, l = n.idxByName, c = void 0;
						for (c in s) l[c] || o.del.push(c);
						for (c in l) {
							var u = s[c], d = l[c];
							u ? u.src !== d.src && o.change.push(d) : o.add.push(d);
						}
						(0 < o.del.length || 0 < o.add.length || 0 < o.change.length) && r.change.push(o);
					}
				} else r.add.push([a, n]);
			}
			return r;
		}
		function ra(e, t, a, r) {
			var i = e.db.createObjectStore(t, a.keyPath ? {
				keyPath: a.keyPath,
				autoIncrement: a.auto
			} : { autoIncrement: a.auto });
			r.forEach(function(e) {
				return na(i, e);
			});
		}
		function ia(e, t) {
			i(e).forEach(function(a) {
				t.db.objectStoreNames.contains(a) || ra(t, a, e[a].primKey, e[a].indexes);
			});
		}
		function na(e, t) {
			e.createIndex(t.name, t.keyPath, {
				unique: t.unique,
				multiEntry: t.multi
			});
		}
		function oa(e, t, a) {
			var r = {};
			return f(t.objectStoreNames, 0).forEach(function(e) {
				for (var t = a.objectStore(e), i = Ft(Vt(s = t.keyPath), s || "", !0, !1, !!t.autoIncrement, s && "string" != typeof s, !0), n = [], o = 0; o < t.indexNames.length; ++o) {
					var s = (l = t.index(t.indexNames[o])).keyPath, l = Ft(l.name, s, !!l.unique, !!l.multiEntry, !1, s && "string" != typeof s, !1);
					n.push(l);
				}
				r[e] = qt(e, i, n);
			}), r;
		}
		function sa(e, t, a) {
			for (var i = a.db.objectStoreNames, n = 0; n < i.length; ++n) {
				var o = i[n], s = a.objectStore(o);
				e._hasGetAll = "getAll" in s;
				for (var l = 0; l < s.indexNames.length; ++l) {
					var c, u = s.indexNames[l], d = "string" == typeof (d = s.index(u).keyPath) ? d : "[" + f(d).join("+") + "]";
					t[o] && (c = t[o].idxByName[d]) && (c.name = u, delete t[o].idxByName[d], t[o].idxByName[u] = c);
				}
			}
			"undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && r.WorkerGlobalScope && r instanceof r.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
		}
		function la(e) {
			return e.split(",").map(function(e, t) {
				var a = null == (a = (r = e.split(":"))[1]) ? void 0 : a.trim(), r = (e = r[0].trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
				return Ft(r, i || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), n(i), 0 === t, a);
			});
		}
		ua.prototype._createTableSchema = qt, ua.prototype._parseIndexSyntax = la, ua.prototype._parseStoresSpec = function(e, t) {
			var a = this;
			i(e).forEach(function(r) {
				if (null !== e[r]) {
					var i = a._parseIndexSyntax(e[r]), n = i.shift();
					if (!n) throw new q.Schema("Invalid schema for table " + r + ": " + e[r]);
					if (n.unique = !0, n.multi) throw new q.Schema("Primary key cannot be multiEntry*");
					i.forEach(function(e) {
						if (e.auto) throw new q.Schema("Only primary key can be marked as autoIncrement (++)");
						if (!e.keyPath) throw new q.Schema("Index must have a name and cannot be an empty string");
					}), n = a._createTableSchema(r, n, i), t[r] = n;
				}
			});
		}, ua.prototype.stores = function(e) {
			var t = this.db, a = (this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, e) : e, e = t._versions, {}), r = {};
			return e.forEach(function(e) {
				o(a, e._cfg.storesSource), r = e._cfg.dbschema = {}, e._parseStoresSpec(a, r);
			}), t._dbSchema = r, Qt(t, [
				t._allTables,
				t,
				t.Transaction.prototype
			]), Zt(t, [
				t._allTables,
				t,
				t.Transaction.prototype,
				this._cfg.tables
			], i(r), r), t._storeNames = i(r), this;
		}, ua.prototype.upgrade = function(e) {
			return this._cfg.contentUpgrade = te(this._cfg.contentUpgrade || W, e), this;
		};
		var ca = ua;
		function ua() {}
		var da = (() => {
			var e, t, a;
			return "undefined" != typeof FinalizationRegistry && "undefined" != typeof WeakRef ? (e = /* @__PURE__ */ new Set(), t = new FinalizationRegistry(function(t) {
				e.delete(t);
			}), {
				toArray: function() {
					return Array.from(e).map(function(e) {
						return e.deref();
					}).filter(function(e) {
						return void 0 !== e;
					});
				},
				add: function(a) {
					var r = new WeakRef(a._novip);
					e.add(r), t.register(a._novip, r, r), e.size > a._options.maxConnections && (r = e.values().next().value, e.delete(r), t.unregister(r));
				},
				remove: function(a) {
					if (a) for (var r = e.values(), i = r.next(); !i.done;) {
						var n = i.value;
						if (n.deref() === a._novip) return e.delete(n), void t.unregister(n);
						i = r.next();
					}
				}
			}) : (a = [], {
				toArray: function() {
					return a;
				},
				add: function(e) {
					a.push(e._novip);
				},
				remove: function(e) {
					e && -1 !== (e = a.indexOf(e._novip)) && a.splice(e, 1);
				}
			});
		})();
		function pa(e, t) {
			var a = e._dbNamesDB;
			return a || (a = e._dbNamesDB = new Ya(Qe, {
				addons: [],
				indexedDB: e,
				IDBKeyRange: t
			})).version(1).stores({ dbnames: "name" }), a.table("dbnames");
		}
		function _a(e) {
			return e && "function" == typeof e.databases;
		}
		function ma(e) {
			return Le(function() {
				return fe.letThrough = !0, e();
			});
		}
		function ya(e) {
			return !("from" in e);
		}
		var fa = function(e, t) {
			var a;
			if (!this) return a = new fa(), e && "d" in e && o(a, e), a;
			o(this, arguments.length ? {
				d: 1,
				from: e,
				to: 1 < arguments.length ? t : e
			} : { d: 0 });
		};
		function ga(e, t, a) {
			var r = ot(t, a);
			if (!isNaN(r)) {
				if (0 < r) throw RangeError();
				if (ya(e)) return o(e, {
					from: t,
					to: a,
					d: 1
				});
				r = e.l;
				var i = e.r;
				if (ot(a, e.from) < 0) return r ? ga(r, t, a) : e.l = {
					from: t,
					to: a,
					d: 1,
					l: null,
					r: null
				}, wa(e);
				if (0 < ot(t, e.to)) return i ? ga(i, t, a) : e.r = {
					from: t,
					to: a,
					d: 1,
					l: null,
					r: null
				}, wa(e);
				ot(t, e.from) < 0 && (e.from = t, e.l = null, e.d = i ? i.d + 1 : 1), 0 < ot(a, e.to) && (e.to = a, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, r && !e.l && ha(e, r), i && t && ha(e, i);
			}
		}
		function ha(e, t) {
			ya(t) || function e(t, a) {
				var r = a.from, i = a.l, n = a.r;
				ga(t, r, a.to), i && e(t, i), n && e(t, n);
			}(e, t);
		}
		function va(e, t) {
			var a = ba(t), r = a.next();
			if (!r.done) for (var i = r.value, n = ba(e), o = n.next(i.from), s = o.value; !r.done && !o.done;) {
				if (ot(s.from, i.to) <= 0 && 0 <= ot(s.to, i.from)) return !0;
				ot(i.from, s.from) < 0 ? i = (r = a.next(s.from)).value : s = (o = n.next(i.from)).value;
			}
			return !1;
		}
		function ba(e) {
			var t = ya(e) ? null : {
				s: 0,
				n: e
			};
			return { next: function(e) {
				for (var a = 0 < arguments.length; t;) switch (t.s) {
					case 0: if (t.s = 1, a) for (; t.n.l && ot(e, t.n.from) < 0;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					else for (; t.n.l;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					case 1: if (t.s = 2, !a || ot(e, t.n.to) <= 0) return {
						value: t.n,
						done: !1
					};
					case 2: if (t.n.r) {
						t.s = 3, t = {
							up: t,
							n: t.n.r,
							s: 0
						};
						continue;
					}
					case 3: t = t.up;
				}
				return { done: !0 };
			} };
		}
		function wa(e) {
			var a, r, i, n;
			(n = 1 < (n = ((null == (n = e.r) ? void 0 : n.d) || 0) - ((null == (n = e.l) ? void 0 : n.d) || 0)) ? "r" : n < -1 ? "l" : "") && (a = "r" == n ? "l" : "r", r = t({}, e), i = e[n], e.from = i.from, e.to = i.to, e[n] = i[n], r[n] = i[a], (e[a] = r).d = Sa(r)), e.d = Sa(e);
		}
		function Sa(e) {
			var t = e.r;
			return e = e.l, (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1;
		}
		function Ca(e, t) {
			return i(t).forEach(function(a) {
				e[a] ? ha(e[a], t[a]) : e[a] = function e(t) {
					var a, r, i = {};
					for (a in t) c(t, a) && (r = t[a], i[a] = !r || "object" != typeof r || A.has(r.constructor) ? r : e(r));
					return i;
				}(t[a]);
			}), e;
		}
		function Ia(e, t) {
			return e.all || t.all || Object.keys(e).some(function(a) {
				return t[a] && va(t[a], e[a]);
			});
		}
		u(fa.prototype, ((N = {
			add: function(e) {
				return ha(this, e), this;
			},
			addKey: function(e) {
				return ga(this, e, e), this;
			},
			addKeys: function(e) {
				var t = this;
				return e.forEach(function(e) {
					return ga(t, e, e);
				}), this;
			},
			hasKey: function(e) {
				var t = ba(this).next(e).value;
				return t && ot(t.from, e) <= 0 && 0 <= ot(t.to, e);
			}
		})[B] = function() {
			return ba(this);
		}, N));
		var ka = {}, Aa = {}, xa = !1;
		function Ea(e) {
			Ca(Aa, e), xa || (xa = !0, setTimeout(function() {
				xa = !1, Da(Aa, !(Aa = {}));
			}, 0));
		}
		function Da(e, t) {
			void 0 === t && (t = !1);
			var a = /* @__PURE__ */ new Set();
			if (e.all) for (var r = 0, i = Object.values(ka); r < i.length; r++) Ta(s = i[r], e, a, t);
			else for (var n in e) {
				var o, s;
				(n = /^idb\:\/\/(.*)\/(.*)\//.exec(n)) && (o = n[1], n = n[2], s = ka["idb://".concat(o, "/").concat(n)]) && Ta(s, e, a, t);
			}
			a.forEach(function(e) {
				return e();
			});
		}
		function Ta(e, t, a, r) {
			for (var i = [], n = 0, o = Object.entries(e.queries.query); n < o.length; n++) {
				for (var s = o[n], l = s[0], c = [], u = 0, d = s[1]; u < d.length; u++) {
					var p = d[u];
					Ia(t, p.obsSet) ? p.subscribers.forEach(function(e) {
						return a.add(e);
					}) : r && c.push(p);
				}
				r && i.push([l, c]);
			}
			if (r) for (var _ = 0, m = i; _ < m.length; _++) {
				var y = m[_];
				l = y[0], c = y[1], e.queries.query[l] = c;
			}
		}
		function Ba(e) {
			var t = e._state, a = e._deps.indexedDB;
			if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
				return t.dbOpenError ? Ye(t.dbOpenError) : e;
			});
			t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
			var r = t.openCanceller, n = Math.round(10 * e.verno), o = !1;
			function s() {
				if (t.openCanceller !== r) throw new q.DatabaseClosed("db.open() was cancelled");
			}
			var l, c = t.dbReadyResolve, u = null, d = !1;
			return be.race([r, ("undefined" == typeof navigator ? be.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e) {
				function t() {
					return indexedDB.databases().finally(e);
				}
				l = setInterval(t, 100), t();
			}).finally(function() {
				return clearInterval(l);
			}) : Promise.resolve()).then(function r() {
				return new be(function(l, c) {
					if (s(), !a) throw new q.MissingAPI();
					var p = e.name, _ = t.autoSchema || !n ? a.open(p) : a.open(p, n);
					if (!_) throw new q.MissingAPI();
					_.onerror = Pt(c), _.onblocked = ze(e._fireOnBlocked), _.onupgradeneeded = ze(function(r) {
						var i;
						u = _.transaction, t.autoSchema && !e._options.allowEmptyDB ? (_.onerror = Nt, u.abort(), _.result.close(), (i = a.deleteDatabase(p)).onsuccess = i.onerror = ze(function() {
							c(new q.NoSuchDatabase("Database ".concat(p, " doesnt exist")));
						})) : (u.onerror = Pt(c), i = r.oldVersion > Math.pow(2, 62) ? 0 : r.oldVersion, d = i < 1, e.idbdb = _.result, o && function(e, t) {
							ia(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
							var a = oa(0, e.idbdb, t);
							sa(e, e._dbSchema, t);
							for (var r = 0, i = aa(a, e._dbSchema).change; r < i.length; r++) {
								var n = ((e) => {
									if (e.change.length || e.recreate) return console.warn("Unable to patch indexes of table ".concat(e.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
									var a = t.objectStore(e.name);
									e.add.forEach(function(e) {
										na(a, e);
									});
								})(i[r]);
								if ("object" == typeof n) return n.value;
							}
						}(e, u), ta(e, i / 10, u, c));
					}, c), _.onsuccess = ze(function() {
						u = null;
						var a, s, c, m, y, g, h = e.idbdb = _.result, v = f(h.objectStoreNames);
						if (0 < v.length) try {
							var b = h.transaction(1 === (y = v).length ? y[0] : y, "readonly");
							if (t.autoSchema) g = h, m = b, (c = e).verno = g.version / 10, m = c._dbSchema = oa(0, g, m), c._storeNames = f(g.objectStoreNames, 0), Zt(c, [c._allTables], i(m), m);
							else if (sa(e, e._dbSchema, b), s = b, ((s = aa(oa(0, (a = e).idbdb, s), a._dbSchema)).add.length || s.change.some(function(e) {
								return e.add.length || e.change.length;
							})) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), h.close(), n = h.version + 1, o = !0, l(r());
							Jt(e, b);
						} catch (a) {}
						da.add(e), h.onversionchange = ze(function(a) {
							t.vcFired = !0, e.on("versionchange").fire(a);
						}), h.onclose = ze(function() {
							e.close({ disableAutoOpen: !1 });
						}), d && (v = e._deps, y = p, _a(g = v.indexedDB) || y === Qe || pa(g, v.IDBKeyRange).put({ name: y }).catch(W)), l();
					}, c);
				}).catch(function(e) {
					switch (null == e ? void 0 : e.name) {
						case "UnknownError":
							if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), r();
							break;
						case "VersionError": if (0 < n) return n = 0, r();
					}
					return be.reject(e);
				});
			})]).then(function() {
				return s(), t.onReadyBeingFired = [], be.resolve(ma(function() {
					return e.on.ready.fire(e.vip);
				})).then(function a() {
					var r;
					if (0 < t.onReadyBeingFired.length) return r = t.onReadyBeingFired.reduce(te, W), t.onReadyBeingFired = [], be.resolve(ma(function() {
						return r(e.vip);
					})).then(a);
				});
			}).finally(function() {
				t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
			}).catch(function(a) {
				t.dbOpenError = a;
				try {
					u && u.abort();
				} catch (a) {}
				return r === t.openCanceller && e._close(), Ye(a);
			}).finally(function() {
				t.openComplete = !0, c();
			}).then(function() {
				var t;
				return d && (t = {}, e.tables.forEach(function(a) {
					a.schema.indexes.forEach(function(r) {
						r.name && (t["idb://".concat(e.name, "/").concat(a.name, "/").concat(r.name)] = new fa(-1 / 0, [[[]]]));
					}), t["idb://".concat(e.name, "/").concat(a.name, "/")] = t["idb://".concat(e.name, "/").concat(a.name, "/:dels")] = new fa(-1 / 0, [[[]]]);
				}), jt(Kt).fire(t), Da(t, !0)), e;
			});
		}
		function za(e) {
			function t(t) {
				return e.next(t);
			}
			var a = i(t), r = i(function(t) {
				return e.throw(t);
			});
			function i(e) {
				return function(t) {
					var i = (t = e(t)).value;
					return t.done ? i : i && "function" == typeof i.then ? i.then(a, r) : n(i) ? Promise.all(i).then(a, r) : a(i);
				};
			}
			return i(t)();
		}
		function Ra(e, t, a) {
			for (var r = n(e) ? e.slice() : [e], i = 0; i < a; ++i) r.push(t);
			return r;
		}
		var Ma = {
			stack: "dbcore",
			name: "VirtualIndexMiddleware",
			level: 1,
			create: function(e) {
				return t(t({}, e), { table: function(a) {
					var r = e.table(a), i = (a = r.schema, Object.create(null)), n = [];
					function o(e, a, r) {
						var s = Xt(e), l = i[s] = i[s] || [], c = null == e ? 0 : "string" == typeof e ? 1 : e.length, u = 0 < a;
						return s = t(t({}, r), {
							name: u ? "".concat(s, "(virtual-from:").concat(r.name, ")") : r.name,
							lowLevelIndex: r,
							isVirtual: u,
							keyTail: a,
							keyLength: c,
							extractKey: Wt(e),
							unique: !u && r.unique
						}), l.push(s), s.isPrimaryKey || n.push(s), 1 < c && o(2 === c ? e[0] : e.slice(0, c - 1), a + 1, r), l.sort(function(e, t) {
							return e.keyTail - t.keyTail;
						}), s;
					}
					var s = o(a.primaryKey.keyPath, 0, a.primaryKey);
					i[":id"] = [s];
					for (var l = 0, c = a.indexes; l < c.length; l++) {
						var u = c[l];
						o(u.keyPath, 0, u);
					}
					function d(a) {
						var r, i = a.query.index;
						return i.isVirtual ? t(t({}, a), { query: {
							index: i.lowLevelIndex,
							range: (r = a.query.range, i = i.keyTail, {
								type: 1 === r.type ? 2 : r.type,
								lower: Ra(r.lower, r.lowerOpen ? e.MAX_KEY : e.MIN_KEY, i),
								lowerOpen: !0,
								upper: Ra(r.upper, r.upperOpen ? e.MIN_KEY : e.MAX_KEY, i),
								upperOpen: !0
							})
						} }) : a;
					}
					return t(t({}, r), {
						schema: t(t({}, a), {
							primaryKey: s,
							indexes: n,
							getIndexByKeyPath: function(e) {
								return (e = i[Xt(e)]) && e[0];
							}
						}),
						count: function(e) {
							return r.count(d(e));
						},
						query: function(e) {
							return r.query(d(e));
						},
						openCursor: function(t) {
							var a = t.query.index, i = a.keyTail, n = a.keyLength;
							return a.isVirtual ? r.openCursor(d(t)).then(function(a) {
								return a && function(a) {
									return Object.create(a, {
										continue: { value: function(r) {
											null != r ? a.continue(Ra(r, t.reverse ? e.MAX_KEY : e.MIN_KEY, i)) : t.unique ? a.continue(a.key.slice(0, n).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, i)) : a.continue();
										} },
										continuePrimaryKey: { value: function(t, r) {
											a.continuePrimaryKey(Ra(t, e.MAX_KEY, i), r);
										} },
										primaryKey: { get: function() {
											return a.primaryKey;
										} },
										key: { get: function() {
											var e = a.key;
											return 1 === n ? e[0] : e.slice(0, n);
										} },
										value: { get: function() {
											return a.value;
										} }
									});
								}(a);
							}) : r.openCursor(t);
						}
					});
				} });
			}
		};
		function Oa(e, t, a, r) {
			return a = a || {}, r = r || "", i(e).forEach(function(i) {
				var n, o, s;
				c(t, i) ? (n = e[i], o = t[i], "object" == typeof n && "object" == typeof o && n && o ? (s = T(n)) !== T(o) ? a[r + i] = t[i] : "Object" === s ? Oa(n, o, a, r + i + ".") : n !== o && (a[r + i] = t[i]) : n !== o && (a[r + i] = t[i])) : a[r + i] = void 0;
			}), i(t).forEach(function(i) {
				c(e, i) || (a[r + i] = t[i]);
			}), a;
		}
		function Pa(e, t) {
			return "delete" === t.type ? t.keys : t.keys || t.values.map(e.extractKey);
		}
		var Na = {
			stack: "dbcore",
			name: "HooksMiddleware",
			level: 2,
			create: function(e) {
				return t(t({}, e), { table: function(r) {
					var i = e.table(r), n = i.schema.primaryKey;
					return t(t({}, i), { mutate: function(e) {
						var o = fe.trans, s = o.table(r).hook, l = s.deleting, u = s.creating, d = s.updating;
						switch (e.type) {
							case "add":
								if (u.fire === W) break;
								return o._promise("readwrite", function() {
									return p(e);
								}, !0);
							case "put":
								if (u.fire === W && d.fire === W) break;
								return o._promise("readwrite", function() {
									return p(e);
								}, !0);
							case "delete":
								if (l.fire === W) break;
								return o._promise("readwrite", function() {
									return p(e);
								}, !0);
							case "deleteRange":
								if (l.fire === W) break;
								return o._promise("readwrite", function() {
									return function e(a, r, o) {
										return i.query({
											trans: a,
											values: !1,
											query: {
												index: n,
												range: r
											},
											limit: o
										}).then(function(i) {
											var n = i.result;
											return p({
												type: "delete",
												keys: n,
												trans: a
											}).then(function(i) {
												return 0 < i.numFailures ? Promise.reject(i.failures[0]) : n.length < o ? {
													failures: [],
													numFailures: 0,
													lastResult: void 0
												} : e(a, t(t({}, r), {
													lower: n[n.length - 1],
													lowerOpen: !0
												}), o);
											});
										});
									}(e.trans, e.range, 1e4);
								}, !0);
						}
						return i.mutate(e);
						function p(e) {
							var r, o, s, p = fe.trans, _ = e.keys || Pa(n, e);
							if (_) return "delete" !== (e = "add" === e.type || "put" === e.type ? t(t({}, e), { keys: _ }) : t({}, e)).type && (e.values = a([], e.values, !0)), e.keys && (e.keys = a([], e.keys, !0)), r = i, s = _, ("add" === (o = e).type ? Promise.resolve([]) : r.getMany({
								trans: o.trans,
								keys: s,
								cache: "immutable"
							})).then(function(t) {
								var a = _.map(function(a, r) {
									var i, o, s, _ = t[r], m = {
										onerror: null,
										onsuccess: null
									};
									return "delete" === e.type ? l.fire.call(m, a, _, p) : "add" === e.type || void 0 === _ ? (i = u.fire.call(m, a, e.values[r], p), null == a && null != i && (e.keys[r] = a = i, n.outbound || w(e.values[r], n.keyPath, a))) : (i = Oa(_, e.values[r]), (o = d.fire.call(m, i, a, _, p)) && (s = e.values[r], Object.keys(o).forEach(function(e) {
										c(s, e) ? s[e] = o[e] : w(s, e, o[e]);
									}))), m;
								});
								return i.mutate(e).then(function(r) {
									for (var i = r.failures, n = r.results, o = r.numFailures, s = (r = r.lastResult, 0); s < _.length; ++s) {
										var l = (n || _)[s], c = a[s];
										null == l ? c.onerror && c.onerror(i[s]) : c.onsuccess && c.onsuccess("put" === e.type && t[s] ? e.values[s] : l);
									}
									return {
										failures: i,
										results: n,
										numFailures: o,
										lastResult: r
									};
								}).catch(function(e) {
									return a.forEach(function(t) {
										return t.onerror && t.onerror(e);
									}), Promise.reject(e);
								});
							});
							throw new Error("Keys missing");
						}
					} });
				} });
			}
		};
		function Ka(e, t, a) {
			try {
				if (!t) return null;
				if (t.keys.length < e.length) return null;
				for (var r = [], i = 0, n = 0; i < t.keys.length && n < e.length; ++i) 0 === ot(t.keys[i], e[n]) && (r.push(a ? E(t.values[i]) : t.values[i]), ++n);
				return r.length === e.length ? r : null;
			} catch (e) {
				return null;
			}
		}
		var La = {
			stack: "dbcore",
			level: -1,
			create: function(e) {
				return { table: function(a) {
					var r = e.table(a);
					return t(t({}, r), {
						getMany: function(e) {
							var t;
							return e.cache ? (t = Ka(e.keys, e.trans._cache, "clone" === e.cache)) ? be.resolve(t) : r.getMany(e).then(function(t) {
								return e.trans._cache = {
									keys: e.keys,
									values: "clone" === e.cache ? E(t) : t
								}, t;
							}) : r.getMany(e);
						},
						mutate: function(e) {
							return "add" !== e.type && (e.trans._cache = null), r.mutate(e);
						}
					});
				} };
			}
		};
		function ja(e, t) {
			return "readonly" === e.trans.mode && !!e.subscr && !e.trans.explicit && "disabled" !== e.trans.db._options.cache && !t.schema.primaryKey.outbound;
		}
		function Ua(e, t) {
			switch (e) {
				case "query": return t.values && !t.unique;
				case "get":
				case "getMany":
				case "count":
				case "openCursor": return !1;
			}
		}
		var Ga = {
			stack: "dbcore",
			level: 0,
			name: "Observability",
			create: function(e) {
				var a = e.schema.name, r = new fa(e.MIN_KEY, e.MAX_KEY);
				return t(t({}, e), {
					transaction: function(t, a, r) {
						if (fe.subscr && "readonly" !== a) throw new q.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(fe.querier));
						return e.transaction(t, a, r);
					},
					table: function(o) {
						function s(t) {
							var a;
							return [a = (t = t.query).index, new fa(null != (a = (t = t.range).lower) ? a : e.MIN_KEY, null != (a = t.upper) ? a : e.MAX_KEY)];
						}
						var l = e.table(o), c = l.schema, u = c.primaryKey, d = c.indexes, p = u.extractKey, _ = u.outbound, m = u.autoIncrement && d.filter(function(e) {
							return e.compound && e.keyPath.includes(u.keyPath);
						}), y = t(t({}, l), { mutate: function(t) {
							function i(e) {
								return e = "idb://".concat(a, "/").concat(o, "/").concat(e), y[e] || (y[e] = new fa());
							}
							var s, d, p, _ = t.trans, y = t.mutatedParts || (t.mutatedParts = {}), f = i(""), g = i(":dels"), h = t.type, v = "deleteRange" === t.type ? [t.range] : "delete" === t.type ? [t.keys] : t.values.length < 50 ? [Pa(u, t).filter(function(e) {
								return e;
							}), t.values] : [], b = v[0], w = (v = v[1], t.trans._cache);
							return n(b) ? (f.addKeys(b), (h = "delete" === h || b.length === v.length ? Ka(b, w) : null) || g.addKeys(b), (h || v) && (s = i, d = h, p = v, c.indexes.forEach(function(e) {
								var t = s(e.name || "");
								function a(t) {
									return null != t ? e.extractKey(t) : null;
								}
								function r(a) {
									e.multiEntry && n(a) ? a.forEach(function(e) {
										return t.addKey(e);
									}) : t.addKey(a);
								}
								(d || p).forEach(function(e, t) {
									var i = d && a(d[t]);
									0 !== ot(i, t = p && a(p[t])) && (null != i && r(i), null != t) && r(t);
								});
							}))) : b ? (v = {
								from: null != (w = b.lower) ? w : e.MIN_KEY,
								to: null != (h = b.upper) ? h : e.MAX_KEY
							}, g.add(v), f.add(v)) : (f.add(r), g.add(r), c.indexes.forEach(function(e) {
								return i(e.name).add(r);
							})), l.mutate(t).then(function(e) {
								return !b || "add" !== t.type && "put" !== t.type || (f.addKeys(e.results), m && m.forEach(function(a) {
									for (var r = t.values.map(function(e) {
										return a.extractKey(e);
									}), n = a.keyPath.findIndex(function(e) {
										return e === u.keyPath;
									}), o = 0, s = e.results.length; o < s; ++o) r[o][n] = e.results[o];
									i(a.name).addKeys(r);
								})), _.mutatedParts = Ca(_.mutatedParts || {}, y), e;
							});
						} }), f = {
							get: function(e) {
								return [u, new fa(e.key)];
							},
							getMany: function(e) {
								return [u, new fa().addKeys(e.keys)];
							},
							count: s,
							query: s,
							openCursor: s
						};
						return i(f).forEach(function(e) {
							y[e] = function(i) {
								var n = !!(u = fe.subscr), s = ja(fe, l) && Ua(e, i) ? i.obsSet = {} : u;
								if (n) {
									var c, u, d = (u = function(e) {
										return e = "idb://".concat(a, "/").concat(o, "/").concat(e), s[e] || (s[e] = new fa());
									})(""), m = u(":dels"), y = (n = f[e](i))[0];
									if (n = n[1], ("query" === e && y.isPrimaryKey && !i.values ? m : u(y.name || "")).add(n), !y.isPrimaryKey) {
										if ("count" !== e) return c = "query" === e && _ && i.values && l.query(t(t({}, i), { values: !1 })), l[e].apply(this, arguments).then(function(t) {
											if ("query" === e) {
												if (_ && i.values) return c.then(function(e) {
													return e = e.result, d.addKeys(e), t;
												});
												var a = i.values ? t.result.map(p) : t.result;
												(i.values ? d : m).addKeys(a);
											} else {
												var r, n;
												if ("openCursor" === e) return n = i.values, (r = t) && Object.create(r, {
													key: { get: function() {
														return m.addKey(r.primaryKey), r.key;
													} },
													primaryKey: { get: function() {
														var e = r.primaryKey;
														return m.addKey(e), e;
													} },
													value: { get: function() {
														return n && d.addKey(r.primaryKey), r.value;
													} }
												});
											}
											return t;
										});
										m.add(r);
									}
								}
								return l[e].apply(this, arguments);
							};
						}), y;
					}
				});
			}
		};
		function Fa(e, a, r) {
			var i;
			return 0 === r.numFailures ? a : "deleteRange" === a.type || (i = a.keys ? a.keys.length : "values" in a && a.values ? a.values.length : 1, r.numFailures === i) ? null : (i = t({}, a), n(i.keys) && (i.keys = i.keys.filter(function(e, t) {
				return !(t in r.failures);
			})), "values" in i && n(i.values) && (i.values = i.values.filter(function(e, t) {
				return !(t in r.failures);
			})), i);
		}
		function Va(e, t) {
			return a = e, (void 0 === (r = t).lower || (r.lowerOpen ? 0 < ot(a, r.lower) : 0 <= ot(a, r.lower))) && (a = e, void 0 === (r = t).upper || (r.upperOpen ? ot(a, r.upper) < 0 : ot(a, r.upper) <= 0));
			var a, r;
		}
		function qa(e, t, a, r, i, o) {
			var s, l, c, u, d, p, _;
			return a && 0 !== a.length && (s = t.query.index, l = s.multiEntry, c = t.query.range, u = r.schema.primaryKey.extractKey, d = s.extractKey, p = (s.lowLevelIndex || s).extractKey, (r = a.reduce(function(e, a) {
				var r = e, i = [];
				if ("add" === a.type || "put" === a.type) for (var o = new fa(), s = a.values.length - 1; 0 <= s; --s) {
					var p, _ = a.values[s], m = u(_);
					!o.hasKey(m) && (p = d(_), l && n(p) ? p.some(function(e) {
						return Va(e, c);
					}) : Va(p, c)) && (o.addKey(m), i.push(_));
				}
				switch (a.type) {
					case "add":
						var y = new fa().addKeys(t.values ? e.map(function(e) {
							return u(e);
						}) : e);
						r = e.concat(t.values ? i.filter(function(e) {
							return e = u(e), !y.hasKey(e) && (y.addKey(e), !0);
						}) : i.map(function(e) {
							return u(e);
						}).filter(function(e) {
							return !y.hasKey(e) && (y.addKey(e), !0);
						}));
						break;
					case "put":
						var f = new fa().addKeys(a.values.map(function(e) {
							return u(e);
						}));
						r = e.filter(function(e) {
							return !f.hasKey(t.values ? u(e) : e);
						}).concat(t.values ? i : i.map(function(e) {
							return u(e);
						}));
						break;
					case "delete":
						var g = new fa().addKeys(a.keys);
						r = e.filter(function(e) {
							return !g.hasKey(t.values ? u(e) : e);
						});
						break;
					case "deleteRange":
						var h = a.range;
						r = e.filter(function(e) {
							return !Va(u(e), h);
						});
				}
				return r;
			}, e)) !== e) ? (_ = function(e, t) {
				return ot(p(e), p(t)) || ot(u(e), u(t));
			}, r.sort("prev" === t.direction || "prevunique" === t.direction ? function(e, t) {
				return _(t, e);
			} : _), t.limit && t.limit < 1 / 0 && (r.length > t.limit ? r.length = t.limit : e.length === t.limit && r.length < t.limit && (i.dirty = !0)), o ? Object.freeze(r) : r) : e;
		}
		function Ha(e, t) {
			return 0 === ot(e.lower, t.lower) && 0 === ot(e.upper, t.upper) && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
		}
		var Wa = {
			stack: "dbcore",
			level: 0,
			name: "Cache",
			create: function(e) {
				var a = e.schema.name;
				return t(t({}, e), {
					transaction: function(t, r, i) {
						var n, o, s = e.transaction(t, r, i);
						return "readwrite" === r && (i = (n = new AbortController()).signal, s.addEventListener("abort", (o = function(i) {
							return function() {
								if (n.abort(), "readwrite" === r) {
									for (var o = /* @__PURE__ */ new Set(), l = 0, c = t; l < c.length; l++) {
										var u = c[l], d = ka["idb://".concat(a, "/").concat(u)];
										if (d) {
											var p = e.table(u), _ = d.optimisticOps.filter(function(e) {
												return e.trans === s;
											});
											if (s._explicit && i && s.mutatedParts) for (var m = 0, y = Object.values(d.queries.query); m < y.length; m++) for (var f = 0, g = (b = y[m]).slice(); f < g.length; f++) Ia((w = g[f]).obsSet, s.mutatedParts) && (R(b, w), w.subscribers.forEach(function(e) {
												return o.add(e);
											}));
											else if (0 < _.length) {
												d.optimisticOps = d.optimisticOps.filter(function(e) {
													return e.trans !== s;
												});
												for (var h = 0, v = Object.values(d.queries.query); h < v.length; h++) for (var b, w, S, C = 0, I = (b = v[h]).slice(); C < I.length; C++) null != (w = I[C]).res && s.mutatedParts && (i && !w.dirty ? (S = Object.isFrozen(w.res), S = qa(w.res, w.req, _, p, w, S), w.dirty ? (R(b, w), w.subscribers.forEach(function(e) {
													return o.add(e);
												})) : S !== w.res && (w.res = S, w.promise = be.resolve({ result: S }))) : (w.dirty && R(b, w), w.subscribers.forEach(function(e) {
													return o.add(e);
												})));
											}
										}
									}
									o.forEach(function(e) {
										return e();
									});
								}
							};
						})(!1), { signal: i }), s.addEventListener("error", o(!1), { signal: i }), s.addEventListener("complete", o(!0), { signal: i })), s;
					},
					table: function(r) {
						var i = e.table(r), n = i.schema.primaryKey;
						return t(t({}, i), {
							mutate: function(e) {
								var o, s = fe.trans;
								return n.outbound || "disabled" === s.db._options.cache || s.explicit || "readwrite" !== s.idbtrans.mode || !(o = ka["idb://".concat(a, "/").concat(r)]) ? i.mutate(e) : (s = i.mutate(e), "add" !== e.type && "put" !== e.type || !(50 <= e.values.length || Pa(n, e).some(function(e) {
									return null == e;
								})) ? (o.optimisticOps.push(e), e.mutatedParts && Ea(e.mutatedParts), s.then(function(t) {
									0 < t.numFailures && (R(o.optimisticOps, e), (t = Fa(0, e, t)) && o.optimisticOps.push(t), e.mutatedParts) && Ea(e.mutatedParts);
								}), s.catch(function() {
									R(o.optimisticOps, e), e.mutatedParts && Ea(e.mutatedParts);
								})) : s.then(function(a) {
									var r = Fa(0, t(t({}, e), { values: e.values.map(function(e, r) {
										var i;
										return a.failures[r] ? e : (w(i = null != (i = n.keyPath) && i.includes(".") ? E(e) : t({}, e), n.keyPath, a.results[r]), i);
									}) }), a);
									o.optimisticOps.push(r), queueMicrotask(function() {
										return e.mutatedParts && Ea(e.mutatedParts);
									});
								}), s);
							},
							query: function(e) {
								var t, n, o, s, l, c, u;
								return ja(fe, i) && Ua("query", e) ? (t = "immutable" === (null == (o = fe.trans) ? void 0 : o.db._options.cache), n = (o = fe).requery, o = o.signal, c = ((e, t, a, r) => {
									var i = ka["idb://".concat(e, "/").concat(t)];
									if (!i) return [];
									if (!(e = i.queries[a])) return [
										null,
										!1,
										i,
										null
									];
									var n = e[(r.query ? r.query.index.name : null) || ""];
									if (!n) return [
										null,
										!1,
										i,
										null
									];
									switch (a) {
										case "query":
											var o = null != (s = r.direction) ? s : "next", s = n.find(function(e) {
												var t;
												return e.req.limit === r.limit && e.req.values === r.values && (null != (t = e.req.direction) ? t : "next") === o && Ha(e.req.query.range, r.query.range);
											});
											return s ? [
												s,
												!0,
												i,
												n
											] : [
												n.find(function(e) {
													var t;
													return ("limit" in e.req ? e.req.limit : 1 / 0) >= r.limit && (null != (t = e.req.direction) ? t : "next") === o && (!r.values || e.req.values) && function(e, t) {
														return ((e, t, a, r) => {
															if (void 0 === e) return void 0 !== t ? -1 : 0;
															if (void 0 === t) return 1;
															if (0 === (e = ot(e, t))) {
																if (a && r) return 0;
																if (a) return 1;
																if (r) return -1;
															}
															return e;
														})(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= ((e, t, a, r) => {
															if (void 0 === e) return void 0 !== t ? 1 : 0;
															if (void 0 === t) return -1;
															if (0 === (e = ot(e, t))) {
																if (a && r) return 0;
																if (a) return -1;
																if (r) return 1;
															}
															return e;
														})(e.upper, t.upper, e.upperOpen, t.upperOpen);
													}(e.req.query.range, r.query.range);
												}),
												!1,
												i,
												n
											];
										case "count": return s = n.find(function(e) {
											return Ha(e.req.query.range, r.query.range);
										}), [
											s,
											!!s,
											i,
											n
										];
									}
								})(a, r, "query", e), u = c[0], s = c[2], l = c[3], u && c[1] ? u.obsSet = e.obsSet : (c = i.query(e).then(function(e) {
									var a = e.result;
									if (u && (u.res = a), t) {
										for (var r = 0, i = a.length; r < i; ++r) Object.freeze(a[r]);
										Object.freeze(a);
									}
									return e;
								}).catch(function(e) {
									return l && u && R(l, u), Promise.reject(e);
								}), u = {
									obsSet: e.obsSet,
									promise: c,
									subscribers: /* @__PURE__ */ new Set(),
									type: "query",
									req: e,
									dirty: !1
								}, l ? l.push(u) : (l = [u], (s = s || (ka["idb://".concat(a, "/").concat(r)] = {
									queries: {
										query: {},
										count: {}
									},
									objs: /* @__PURE__ */ new Map(),
									optimisticOps: [],
									unsignaledParts: {}
								})).queries.query[e.query.index.name || ""] = l)), function(e, t, a, r) {
									e.subscribers.add(a), r.addEventListener("abort", function() {
										var r, i;
										e.subscribers.delete(a), 0 === e.subscribers.size && (r = e, i = t, setTimeout(function() {
											0 === r.subscribers.size && R(i, r);
										}, 3e3));
									});
								}(u, l, n, o), u.promise.then(function(a) {
									return a = qa(a.result, e, null == s ? void 0 : s.optimisticOps, i, u, t), { result: t ? a : E(a) };
								})) : i.query(e);
							}
						});
					}
				});
			}
		};
		function $a(e, t) {
			return new Proxy(e, { get: function(e, a, r) {
				return "db" === a ? t : Reflect.get(e, a, r);
			} });
		}
		Xa.prototype.version = function(e) {
			if (isNaN(e) || e < .1) throw new q.Type("Given version is not a positive number");
			if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new q.Schema("Cannot add version when database is open");
			this.verno = Math.max(this.verno, e);
			var t = this._versions, a = t.filter(function(t) {
				return t._cfg.version === e;
			})[0];
			return a || (a = new this.Version(e), t.push(a), t.sort(ea), a.stores({}), this._state.autoSchema = !1), a;
		}, Xa.prototype._whenReady = function(e) {
			var t = this;
			return this.idbdb && (this._state.openComplete || fe.letThrough || this._vip) ? e() : new be(function(e, a) {
				if (t._state.openComplete) return a(new q.DatabaseClosed(t._state.dbOpenError));
				if (!t._state.isBeingOpened) {
					if (!t._state.autoOpen) return void a(new q.DatabaseClosed());
					t.open().catch(W);
				}
				t._state.dbReadyPromise.then(e, a);
			}).then(e);
		}, Xa.prototype.use = function(e) {
			var t = e.stack, a = e.create, r = e.level, i = ((e = e.name) && this.unuse({
				stack: t,
				name: e
			}), this._middlewares[t] || (this._middlewares[t] = []));
			return i.push({
				stack: t,
				create: a,
				level: null == r ? 10 : r,
				name: e
			}), i.sort(function(e, t) {
				return e.level - t.level;
			}), this;
		}, Xa.prototype.unuse = function(e) {
			var t = e.stack, a = e.name, r = e.create;
			return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
				return r ? e.create !== r : !!a && e.name !== a;
			})), this;
		}, Xa.prototype.open = function() {
			var e = this;
			return He(ye, function() {
				return Ba(e);
			});
		}, Xa.prototype._close = function() {
			this.on.close.fire(new CustomEvent("close"));
			var e = this._state;
			if (da.remove(this), this.idbdb) {
				try {
					this.idbdb.close();
				} catch (k) {}
				this.idbdb = null;
			}
			e.isBeingOpened || (e.dbReadyPromise = new be(function(t) {
				e.dbReadyResolve = t;
			}), e.openCanceller = new be(function(t, a) {
				e.cancelOpen = a;
			}));
		}, Xa.prototype.close = function(e) {
			e = (void 0 === e ? { disableAutoOpen: !0 } : e).disableAutoOpen;
			var t = this._state;
			e ? (t.isBeingOpened && t.cancelOpen(new q.DatabaseClosed()), this._close(), t.autoOpen = !1, t.dbOpenError = new q.DatabaseClosed()) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null);
		}, Xa.prototype.delete = function(e) {
			var t = this, a = (void 0 === e && (e = { disableAutoOpen: !0 }), 0 < arguments.length && "object" != typeof arguments[0]), r = this._state;
			return new be(function(i, n) {
				function o() {
					t.close(e);
					var a = t._deps.indexedDB.deleteDatabase(t.name);
					a.onsuccess = ze(function() {
						var e, a = t._deps, r = t.name;
						_a(e = a.indexedDB) || r === Qe || pa(e, a.IDBKeyRange).delete(r).catch(W), i();
					}), a.onerror = Pt(n), a.onblocked = t._fireOnBlocked;
				}
				if (a) throw new q.InvalidArgument("Invalid closeOptions argument to db.delete()");
				r.isBeingOpened ? r.dbReadyPromise.then(o) : o();
			});
		}, Xa.prototype.backendDB = function() {
			return this.idbdb;
		}, Xa.prototype.isOpen = function() {
			return null !== this.idbdb;
		}, Xa.prototype.hasBeenClosed = function() {
			var e = this._state.dbOpenError;
			return e && "DatabaseClosed" === e.name;
		}, Xa.prototype.hasFailed = function() {
			return null !== this._state.dbOpenError;
		}, Xa.prototype.dynamicallyOpened = function() {
			return this._state.autoSchema;
		}, Object.defineProperty(Xa.prototype, "tables", {
			get: function() {
				var e = this;
				return i(this._allTables).map(function(t) {
					return e._allTables[t];
				});
			},
			enumerable: !1,
			configurable: !0
		}), Xa.prototype.transaction = function() {
			var e = function(e, t, a) {
				var r = arguments.length;
				if (r < 2) throw new q.InvalidArgument("Too few arguments");
				for (var i = new Array(r - 1); --r;) i[r - 1] = arguments[r];
				return a = i.pop(), [
					e,
					I(i),
					a
				];
			}.apply(this, arguments);
			return this._transaction.apply(this, e);
		}, Xa.prototype._transaction = function(e, t, a) {
			var r, i, n = this, o = fe.trans, s = (o && o.db === this && -1 === e.indexOf("!") || (o = null), -1 !== e.indexOf("?"));
			e = e.replace("!", "").replace("?", "");
			try {
				if (i = t.map(function(e) {
					if ("string" != typeof (e = e instanceof n.Table ? e.name : e)) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
					return e;
				}), "r" == e || e === et) r = et;
				else {
					if ("rw" != e && e != tt) throw new q.InvalidArgument("Invalid transaction mode: " + e);
					r = tt;
				}
				if (o) {
					if (o.mode === et && r === tt) {
						if (!s) throw new q.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
						o = null;
					}
					o && i.forEach(function(e) {
						if (o && -1 === o.storeNames.indexOf(e)) {
							if (!s) throw new q.SubTransaction("Table " + e + " not included in parent transaction.");
							o = null;
						}
					}), s && o && !o.active && (o = null);
				}
			} catch (a) {
				return o ? o._promise(null, function(e, t) {
					t(a);
				}) : Ye(a);
			}
			var l = function e(t, a, r, i, n) {
				return be.resolve().then(function() {
					var o = fe.transless || fe, s = t._createTransaction(a, r, t._dbSchema, i);
					if (s.explicit = !0, o = {
						trans: s,
						transless: o
					}, i) s.idbtrans = i.idbtrans;
					else try {
						s.create(), s.idbtrans._explicit = !0, t._state.PR1398_maxLoop = 3;
					} catch (o) {
						return o.name === F.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
							return e(t, a, r, null, n);
						})) : Ye(o);
					}
					var l, c = P(n);
					return c && je(), o = be.follow(function() {
						var e;
						(l = n.call(s, s)) && (c ? (e = Ue.bind(null, null), l.then(e, e)) : "function" == typeof l.next && "function" == typeof l.throw && (l = za(l)));
					}, o), (l && "function" == typeof l.then ? be.resolve(l).then(function(e) {
						return s.active ? e : Ye(new q.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
					}) : o.then(function() {
						return l;
					})).then(function(e) {
						return i && s._resolve(), s._completion.then(function() {
							return e;
						});
					}).catch(function(e) {
						return s._reject(e), Ye(e);
					});
				});
			}.bind(null, this, r, i, o, a);
			return o ? o._promise(r, l, "lock") : fe.trans ? He(fe.transless, function() {
				return n._whenReady(l);
			}) : this._whenReady(l);
		}, Xa.prototype.table = function(e) {
			if (c(this._allTables, e)) return this._allTables[e];
			throw new q.InvalidTable("Table ".concat(e, " does not exist"));
		};
		var Ya = Xa;
		function Xa(e, a) {
			var r, i, n, o, s, l = this, c = (this._middlewares = {}, this.verno = 0, Xa.dependencies), u = (this._options = a = t({
				addons: Xa.addons,
				autoOpen: !0,
				indexedDB: c.indexedDB,
				IDBKeyRange: c.IDBKeyRange,
				cache: "cloned",
				maxConnections: 1e3
			}, a), this._deps = {
				indexedDB: a.indexedDB,
				IDBKeyRange: a.IDBKeyRange
			}, c = a.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, {
				dbOpenError: null,
				isBeingOpened: !1,
				onReadyBeingFired: null,
				openComplete: !1,
				dbReadyResolve: W,
				dbReadyPromise: null,
				cancelOpen: W,
				openCanceller: null,
				autoSchema: !0,
				PR1398_maxLoop: 3,
				autoOpen: a.autoOpen
			}), d = (u.dbReadyPromise = new be(function(e) {
				u.dbReadyResolve = e;
			}), u.openCanceller = new be(function(e, t) {
				u.cancelOpen = t;
			}), this._state = u, this.name = e, this.on = yt(this, "populate", "blocked", "versionchange", "close", { ready: [te, W] }), this.once = function(e, t) {
				var a = function() {
					for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
					l.on(e).unsubscribe(a), t.apply(l, r);
				};
				return l.on(e, a);
			}, this.on.ready.subscribe = g(this.on.ready.subscribe, function(e) {
				return function(t, a) {
					Xa.vip(function() {
						var r, i = l._state;
						i.openComplete ? (i.dbOpenError || be.resolve().then(t), a && e(t)) : i.onReadyBeingFired ? (i.onReadyBeingFired.push(t), a && e(t)) : (e(t), r = l, a || e(function e() {
							r.on.ready.unsubscribe(t), r.on.ready.unsubscribe(e);
						}));
					});
				};
			}), this.Collection = (r = this, ft(It.prototype, function(e, t) {
				this.db = r;
				var a = rt, i = null;
				if (t) try {
					a = t();
				} catch (e) {
					i = e;
				}
				var n = (e = (t = e._ctx).table).hook.reading.fire;
				this._ctx = {
					table: e,
					index: t.index,
					isPrimKey: !t.index || e.schema.primKey.keyPath && t.index === e.schema.primKey.name,
					range: a,
					keysOnly: !1,
					dir: "next",
					unique: "",
					algorithm: null,
					filter: null,
					replayFilter: null,
					justLimit: !0,
					isMatch: null,
					offset: 0,
					limit: 1 / 0,
					error: i,
					or: t.or,
					valueMapper: n !== $ ? n : null
				};
			})), this.Table = (i = this, ft(_t.prototype, function(e, t, a) {
				this.db = i, this._tx = a, this.name = e, this.schema = t, this.hook = i._allTables[e] ? i._allTables[e].hook : yt(null, {
					creating: [J, W],
					reading: [Y, $],
					updating: [Q, W],
					deleting: [Z, W]
				});
			})), this.Transaction = (n = this, ft(Ut.prototype, function(e, t, a, r, i) {
				var o = this;
				"readonly" !== e && t.forEach(function(e) {
					(e = null == (e = a[e]) ? void 0 : e.yProps) && (t = t.concat(e.map(function(e) {
						return e.updatesTable;
					})));
				}), this.db = n, this.mode = e, this.storeNames = t, this.schema = a, this.chromeTransactionDurability = r, this.idbtrans = null, this.on = yt(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new be(function(e, t) {
					o._resolve = e, o._reject = t;
				}), this._completion.then(function() {
					o.active = !1, o.on.complete.fire();
				}, function(e) {
					var t = o.active;
					return o.active = !1, o.on.error.fire(e), o.parent ? o.parent._reject(e) : t && o.idbtrans && o.idbtrans.abort(), Ye(e);
				});
			})), this.Version = (o = this, ft(ca.prototype, function(e) {
				this.db = o, this._cfg = {
					version: e,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				};
			})), this.WhereClause = (s = this, ft(Mt.prototype, function(e, t, a) {
				if (this.db = s, this._ctx = {
					table: e,
					index: ":id" === t ? null : t,
					or: a
				}, this._cmp = this._ascending = ot, this._descending = function(e, t) {
					return ot(t, e);
				}, this._max = function(e, t) {
					return 0 < ot(e, t) ? e : t;
				}, this._min = function(e, t) {
					return ot(e, t) < 0 ? e : t;
				}, this._IDBKeyRange = s._deps.IDBKeyRange, !this._IDBKeyRange) throw new q.MissingAPI();
			})), this.on("versionchange", function(e) {
				0 < e.newVersion ? console.warn("Another connection wants to upgrade database '".concat(l.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(l.name, "'. Closing db now to resume the delete request.")), l.close({ disableAutoOpen: !1 });
			}), this.on("blocked", function(e) {
				!e.newVersion || e.newVersion < e.oldVersion ? console.warn("Dexie.delete('".concat(l.name, "') was blocked")) : console.warn("Upgrade '".concat(l.name, "' blocked by other connection holding version ").concat(e.oldVersion / 10));
			}), this._maxKey = Ht(a.IDBKeyRange), this._createTransaction = function(e, t, a, r) {
				return new l.Transaction(e, t, a, l._options.chromeTransactionDurability, r);
			}, this._fireOnBlocked = function(e) {
				l.on("blocked").fire(e), da.toArray().filter(function(e) {
					return e.name === l.name && e !== l && !e._state.vcFired;
				}).map(function(t) {
					return t.on("versionchange").fire(e);
				});
			}, this.use(La), this.use(Wa), this.use(Ga), this.use(Ma), this.use(Na), new Proxy(this, { get: function(e, t, a) {
				var r;
				return "_vip" === t || ("table" === t ? function(e) {
					return $a(l.table(e), d);
				} : (r = Reflect.get(e, t, a)) instanceof _t ? $a(r, d) : "tables" === t ? r.map(function(e) {
					return $a(e, d);
				}) : "_createTransaction" === t ? function() {
					return $a(r.apply(this, arguments), d);
				} : r);
			} }));
			this.vip = d, c.forEach(function(e) {
				return e(l);
			});
		}
		oe = "undefined" != typeof Symbol && "observable" in Symbol ? Symbol.observable : "@@observable";
		var Ja, Za = (Qa.prototype.subscribe = function(e, t, a) {
			return this._subscribe(e && "function" != typeof e ? e : {
				next: e,
				error: t,
				complete: a
			});
		}, Qa.prototype[oe] = function() {
			return this;
		}, Qa);
		function Qa(e) {
			this._subscribe = e;
		}
		try {
			Ja = {
				indexedDB: r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB,
				IDBKeyRange: r.IDBKeyRange || r.webkitIDBKeyRange
			};
		} catch (k) {
			Ja = {
				indexedDB: null,
				IDBKeyRange: null
			};
		}
		function er(e) {
			var t, a = !1, r = new Za(function(r) {
				var i, n = P(e), o = !1, s = {}, l = {}, c = {
					get closed() {
						return o;
					},
					unsubscribe: function() {
						o || (o = !0, i && i.abort(), u && jt.storagemutated.unsubscribe(_));
					}
				}, u = (r.start && r.start(c), !1), d = function() {
					return $e(m);
				};
				function p() {
					return Ia(l, s);
				}
				var _ = function(e) {
					Ca(s, e), p() && d();
				}, m = function() {
					var c, m, y;
					!o && Ja.indexedDB && (s = {}, c = {}, i && i.abort(), i = new AbortController(), y = ((t) => {
						var a = Ee();
						try {
							n && je();
							var r = Le(e, t);
							return r = n ? r.finally(Ue) : r;
						} finally {
							a && De();
						}
					})(m = {
						subscr: c,
						signal: i.signal,
						requery: d,
						querier: e,
						trans: null
					}), u || (jt.storagemutated.subscribe(_), u = !0), Promise.resolve(y).then(function(e) {
						a = !0, t = e, o || m.signal.aborted || (p() || (l = c, p()) ? d() : (s = {}, $e(function() {
							return !o && r.next && r.next(e);
						})));
					}, function(e) {
						a = !1, ["DatabaseClosedError", "AbortError"].includes(null == e ? void 0 : e.name) || o || $e(function() {
							o || r.error && r.error(e);
						});
					}));
				};
				return setTimeout(d, 0), c;
			});
			return r.hasValue = function() {
				return a;
			}, r.getValue = function() {
				return t;
			}, r;
		}
		var tr = Ya;
		function ar(e) {
			var t = ir;
			try {
				ir = !0, jt.storagemutated.fire(e), Da(e, !0);
			} finally {
				ir = t;
			}
		}
		u(tr, t(t({}, k), {
			delete: function(e) {
				return new tr(e, { addons: [] }).delete();
			},
			exists: function(e) {
				return new tr(e, { addons: [] }).open().then(function(e) {
					return e.close(), !0;
				}).catch("NoSuchDatabaseError", function() {
					return !1;
				});
			},
			getDatabaseNames: function(e) {
				try {
					return a = (t = tr.dependencies).indexedDB, t = t.IDBKeyRange, (_a(a) ? Promise.resolve(a.databases()).then(function(e) {
						return e.map(function(e) {
							return e.name;
						}).filter(function(e) {
							return e !== Qe;
						});
					}) : pa(a, t).toCollection().primaryKeys()).then(e);
				} catch (e) {
					return Ye(new q.MissingAPI());
				}
				var t, a;
			},
			defineClass: function() {
				return function(e) {
					o(this, e);
				};
			},
			ignoreTransaction: function(e) {
				return fe.trans ? He(fe.transless || ye, e) : e();
			},
			vip: ma,
			async: function(e) {
				return function() {
					try {
						var t = za(e.apply(this, arguments));
						return t && "function" == typeof t.then ? t : be.resolve(t);
					} catch (t) {
						return Ye(t);
					}
				};
			},
			spawn: function(e, t, a) {
				try {
					var r = za(e.apply(a, t || []));
					return r && "function" == typeof r.then ? r : be.resolve(r);
				} catch (e) {
					return Ye(e);
				}
			},
			currentTransaction: { get: function() {
				return fe.trans || null;
			} },
			waitFor: function(e, t) {
				return e = be.resolve("function" == typeof e ? tr.ignoreTransaction(e) : e).timeout(t || 6e4), fe.trans ? fe.trans.waitFor(e) : e;
			},
			Promise: be,
			debug: {
				get: function() {
					return ae;
				},
				set: function(e) {
					re(e);
				}
			},
			derive: _,
			extend: o,
			props: u,
			override: g,
			Events: yt,
			on: jt,
			liveQuery: er,
			extendObservabilitySet: Ca,
			getByKeyPath: b,
			setByKeyPath: w,
			delByKeyPath: function(e, t) {
				"string" == typeof t ? w(e, t, void 0) : "length" in t && [].map.call(t, function(t) {
					w(e, t, void 0);
				});
			},
			shallowClone: S,
			deepClone: E,
			getObjectDiff: Oa,
			cmp: ot,
			asap: v,
			minKey: -1 / 0,
			addons: [],
			connections: { get: da.toArray },
			errnames: F,
			dependencies: Ja,
			cache: ka,
			semVer: "4.4.5",
			version: "4.4.5".split(".").map(function(e) {
				return parseInt(e);
			}).reduce(function(e, t, a) {
				return e + t / Math.pow(10, 2 * a);
			})
		})), tr.maxKey = Ht(tr.dependencies.IDBKeyRange), "undefined" != typeof dispatchEvent && "undefined" != typeof addEventListener && (jt(Kt, function(e) {
			ir || (e = new CustomEvent(Lt, { detail: e }), ir = !0, dispatchEvent(e), ir = !1);
		}), addEventListener(Lt, function(e) {
			e = e.detail, ir || ar(e);
		}));
		var rr, ir = !1, nr = function() {};
		return "undefined" != typeof BroadcastChannel && ((nr = function() {
			(rr = new BroadcastChannel(Lt)).onmessage = function(e) {
				return e.data && ar(e.data);
			};
		})(), "function" == typeof rr.unref && rr.unref(), jt(Kt, function(e) {
			ir || rr.postMessage(e);
		})), "undefined" != typeof addEventListener && (addEventListener("pagehide", function(e) {
			if (!Ya.disableBfCache && e.persisted) {
				rr?.close();
				for (var t = 0, a = da.toArray(); t < a.length; t++) a[t].close({ disableAutoOpen: !1 });
			}
		}), addEventListener("pageshow", function(e) {
			!Ya.disableBfCache && e.persisted && (nr(), ar({ all: new fa(-1 / 0, [[]]) }));
		})), be.rejectionMapper = function(e, t) {
			return !e || e instanceof L || e instanceof TypeError || e instanceof SyntaxError || !e.name || !H[e.name] ? e : (t = new H[e.name](t || e.message, e), "stack" in e && p(t, "stack", { get: function() {
				return this.inner.stack;
			} }), t);
		}, re(ae), t(Ya, Object.freeze({
			__proto__: null,
			DEFAULT_MAX_CONNECTIONS: 1e3,
			Dexie: Ya,
			Entity: nt,
			PropModification: ut,
			RangeSet: fa,
			add: function(e) {
				return new ut({ add: e });
			},
			cmp: ot,
			default: Ya,
			liveQuery: er,
			mergeRanges: ha,
			rangesOverlap: va,
			remove: function(e) {
				return new ut({ remove: e });
			},
			replacePrefix: function(e, t) {
				return new ut({ replacePrefix: [e, t] });
			}
		}), { default: Ya }), Ya;
	};
	"object" == typeof e && void 0 !== t ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : (a = "undefined" != typeof globalThis ? globalThis : a || self).Dexie = r();
}), T = e(D(), 1);
const B = Symbol.for("Dexie"), z = globalThis[B] || (globalThis[B] = T.default);
if (T.default.semVer !== z.semVer) throw new Error(`Two different versions of Dexie loaded in the same app: ${T.default.semVer} and ${z.semVer}`);
const { liveQuery: R, mergeRanges: M, rangesOverlap: O, RangeSet: P, cmp: N, Entity: K, PropModification: L, replacePrefix: j, add: U, remove: G, DexieYProvider: F } = z, V = [
	"actiware_analysis",
	"actiware_rest_proposal",
	"analysis_paradigm",
	"auto_nonwear_on_navigate",
	"auto_score_on_navigate",
	"choi_axis",
	"choi_variant",
	"color_theme",
	"column_mapping",
	"default_algorithm",
	"default_group",
	"default_timepoint",
	"device_preset",
	"diary_day_boundary_hour",
	"diary_dst_fold_policy",
	"diary_dst_gap_policy",
	"diary_main_sleep_date_rule",
	"diary_nap_date_rule",
	"diary_nonwear_date_rule",
	"epoch_lane_synthesis",
	"epoch_length_seconds",
	"extraction_path",
	"ggir_config",
	"ggir_export_corrected_values",
	"ggir_hasib_count_epoch_seconds",
	"ggir_hasib_count_source",
	"ggir_hasib_variants",
	"ggir_hasib_variants_enabled",
	"ggir_haspt_variant",
	"group_pattern",
	"hide_filenames",
	"id_pattern",
	"lstm_model_selection",
	"marker_mode",
	"night_end_hour",
	"night_start_hour",
	"nonwear_detectors_counts",
	"nonwear_detectors_ggir",
	"nonwear_threshold",
	"participant_laterality",
	"participant_population",
	"period_guider",
	"physical_activity_cutpoints",
	"physical_activity_enabled_classes",
	"physical_activity_mask_policy",
	"physical_activity_method",
	"physical_activity_nonwear_class",
	"placement_ruleset",
	"preferred_activity_column",
	"preferred_display_column",
	"scorer_postprocessing",
	"scoring_epoch_policy",
	"sensor_location",
	"show_adjacent_markers",
	"show_auto_score_proposal",
	"show_choi_nonwear",
	"show_diary_overlay",
	"show_event_markers",
	"show_light",
	"show_nonwear_overlays",
	"skip_rows",
	"sleep_detection_rule",
	"sleep_period_detection",
	"study_timezone",
	"timepoint_pattern",
	"unknown_value",
	"valid_day_criteria",
	"valid_groups",
	"valid_timepoints",
	"view_mode_hours"
], q = {
	generic: {
		label: "Generic / column-mapped CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: Generic CSV",
		guidanceDescription: "Use column mapping for any CSV layout with timestamp plus activity, axis, ENMO, anglez, or MIMS columns. This is the fallback for brands or exports without a native WASM parser.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	actigraph: {
		label: "ActiGraph CSV / GT3X",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 10,
		guidanceTitle: "Source profile: ActiGraph",
		guidanceDescription: "ActiLife epoch CSVs, recognized ActiGraph raw CSV layouts, and GT3X raw files use the native local pipeline where supported. Manual mapping is optional unless headers are unusual.",
		supportMode: "native",
		csvImportMode: "optional"
	},
	gt3x: {
		label: "ActiGraph GT3X raw",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: ActiGraph GT3X raw",
		guidanceDescription: "GT3X files are decoded through the native local raw-file path. CSV column mapping is not used for GT3X archives.",
		supportMode: "native",
		csvImportMode: "optional"
	},
	geneactiv: {
		label: "GENEActiv raw CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 100,
		guidanceTitle: "Source profile: GENEActiv raw CSV",
		guidanceDescription: "GENEActiv raw CSV exports use the local WASM raw-data path. Column mapping is not used for native GENEActiv raw exports.",
		supportMode: "native",
		csvImportMode: "optional"
	},
	geneactiv_bin: {
		label: "GENEActiv BIN",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: GENEActiv BIN",
		guidanceDescription: "GENEActiv .bin recordings use the local raw-data path and stream through the same downstream scoring pipeline as GENEActiv raw CSV.",
		supportMode: "native",
		csvImportMode: "optional"
	},
	nhanes: {
		label: "NHANES PAX80 archive",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: NHANES PAX80 archive",
		guidanceDescription: "NHANES PAX80 .tar.bz2/.tbz2 archives are recognized locally and do not require CSV column mapping.",
		supportMode: "native",
		csvImportMode: "optional"
	},
	nhanes_csv: {
		label: "NHANES PAX-G CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: NHANES PAX-G CSV",
		guidanceDescription: "NHANES-style CSV exports can use column mapping when they are provided outside the PAX80 archive workflow.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	actlumus: {
		label: "ActLumus CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: ActLumus CSV",
		guidanceDescription: "ActLumus exports use column mapping in this frontend. Map timestamp plus activity, axes, ENMO, anglez, MIMS, or sleep/nonwear flags from the exported CSV.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	acttrust: {
		label: "ActTrust CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: ActTrust CSV",
		guidanceDescription: "ActTrust exports use column mapping in this frontend. Use the sample preview to align timestamp, activity, and optional derived columns.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	axivity: {
		label: "Axivity CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: Axivity CSV",
		guidanceDescription: "Axivity CSV layouts are handled as column-mapped CSV in this frontend until the actours RMC profile is exposed through the WASM import surface.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	activpal: {
		label: "ActivPAL CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: ActivPAL CSV",
		guidanceDescription: "ActivPAL CSV layouts are handled as column-mapped CSV in this frontend until the actours RMC profile is exposed through the WASM import surface.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	actical: {
		label: "Actical CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: Actical CSV",
		guidanceDescription: "Actical exports use column mapping in this frontend. Map the activity/counts column and timestamp columns from the export preview.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	actiwatch: {
		label: "Actiwatch CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 7,
		guidanceTitle: "Source profile: Actiwatch CSV",
		guidanceDescription: "Actiwatch-style CSV imports use preset skip-row defaults plus column mapping, so users can align exported activity and timestamp columns before import.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	actiwatch_spectrum: {
		label: "Actiwatch Spectrum CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 7,
		guidanceTitle: "Source profile: Actiwatch Spectrum CSV",
		guidanceDescription: "Actiwatch Spectrum exports use preset skip-row defaults plus column mapping for activity, timestamp, and optional light or derived columns.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	motionwatch: {
		label: "MotionWatch CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 8,
		guidanceTitle: "Source profile: MotionWatch CSV",
		guidanceDescription: "MotionWatch-style CSV imports use preset skip-row defaults plus column mapping, so users can align exported activity and timestamp columns before import.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	activinsights: {
		label: "Activinsights CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: Activinsights CSV",
		guidanceDescription: "Activinsights exports use column mapping unless the file is a native GENEActiv raw CSV or .bin handled by the local raw parser.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	movisens: {
		label: "Movisens CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: Movisens CSV",
		guidanceDescription: "Movisens exports use column mapping in this frontend. Align timestamp, activity, and optional raw or derived metric columns from the preview.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	shimmer: {
		label: "Shimmer CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: Shimmer CSV",
		guidanceDescription: "Shimmer exports use column mapping in this frontend. Map the timestamp and activity or axis columns before import.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	gaitup: {
		label: "GaitUp CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: GaitUp CSV",
		guidanceDescription: "GaitUp exports use column mapping in this frontend. Map the timestamp and activity or axis columns before import.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	consumer_wearable: {
		label: "Consumer wearable CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: Consumer wearable CSV",
		guidanceDescription: "Consumer wearable exports use column mapping for timestamp plus activity-like columns. Use this for Fitbit, Garmin, Apple Watch, Polar, and similar exports.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	mims_metrics: {
		label: "MIMS metric table",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: MIMS metric table",
		guidanceDescription: "MIMS metric tables use column mapping for timestamp plus MIMS_UNIT or axis-specific MIMS columns. This is separate from GGIR imports; MIMS is normally computed by the app from raw acceleration.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	ggir_epoch: {
		label: "GGIR 60s epoch CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: GGIR 60s epoch CSV",
		guidanceDescription: "GGIR-derived 60s epoch tables can be imported through column mapping when they expose timestamp plus activity-like columns.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	},
	ggir_5s_meta: {
		label: "GGIR output (RData)",
		defaultEpochLengthSeconds: 5,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: GGIR output",
		guidanceDescription: "Import a GGIR output folder (config.csv plus meta/basic), or a lone Part 1 meta RData, which the app runs through GGIR with the study's settings. CSV column mapping is not used for GGIR.",
		supportMode: "native",
		csvImportMode: "optional"
	},
	ggir_part5_daysummary: {
		label: "GGIR Part 5 day summary CSV",
		defaultEpochLengthSeconds: 86400,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: GGIR Part 5 day summary CSV",
		guidanceDescription: "GGIR Part 5 day summaries use column mapping for daily aggregate fields. They are metadata imports, not raw activity recordings.",
		supportMode: "mapped_csv",
		csvImportMode: "daily_summary"
	},
	vendor_epoch: {
		label: "Other vendor epoch CSV",
		defaultEpochLengthSeconds: 60,
		defaultSkipRows: 0,
		guidanceTitle: "Source profile: Other vendor epoch CSV",
		guidanceDescription: "Use this for vendor exports that are not native raw formats. The saved mapping defines which columns become timestamp, activity, axes, ENMO, anglez, or MIMS.",
		supportMode: "mapped_csv",
		csvImportMode: "activity_epoch"
	}
}, H = [
	"generic",
	"actigraph",
	"gt3x",
	"geneactiv",
	"geneactiv_bin",
	"nhanes",
	"nhanes_csv",
	"actlumus",
	"acttrust",
	"axivity",
	"activpal",
	"actical",
	"actiwatch",
	"actiwatch_spectrum",
	"motionwatch",
	"activinsights",
	"movisens",
	"shimmer",
	"gaitup",
	"consumer_wearable",
	"mims_metrics",
	"ggir_epoch",
	"ggir_5s_meta",
	"ggir_part5_daysummary",
	"vendor_epoch"
], W = {
	boolean_flag: {
		kind: "boolean",
		members: []
	},
	clock_hhmm: {
		kind: "string",
		members: [],
		pattern: "^([01][0-9]|2[0-3]):[0-5][0-9]$"
	},
	free_text: {
		kind: "string",
		members: []
	},
	string_list: {
		kind: "list",
		members: []
	},
	algorithm_key: {
		kind: "open_enum",
		members: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"sadeh_1994_ggir",
			"cole_kripke_1992_ggir",
			"van_hees_2015",
			"van_hees_hasib_2015",
			"natural_language",
			"consensus_majority_vote",
			"lstm_sleep_wake",
			"manual",
			"oakley_1997",
			"actiware_sleep_wake",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"syed_cnn"
		],
		vocabularyOwner: "core.yaml AlgorithmType"
	},
	nonwear_algorithm: {
		kind: "open_enum",
		members: [
			"choi_2011",
			"flat_activity",
			"gt3x_capsense",
			"actiware_off_wrist",
			"detach_nonwear",
			"van_hees_2013",
			"van_hees_2023",
			"ggir_saved",
			"ggir_part2_invalid",
			"choi_2012",
			"troiano_2008",
			"ahmadi_2020",
			"skovgaard_2023"
		],
		vocabularyOwner: "core.yaml NonwearAlgorithm"
	},
	device_preset: {
		kind: "enum",
		members: [
			"generic",
			"actigraph",
			"gt3x",
			"geneactiv",
			"geneactiv_bin",
			"nhanes",
			"nhanes_csv",
			"actlumus",
			"acttrust",
			"axivity",
			"activpal",
			"actical",
			"actiwatch",
			"actiwatch_spectrum",
			"motionwatch",
			"activinsights",
			"movisens",
			"shimmer",
			"gaitup",
			"consumer_wearable",
			"mims_metrics",
			"ggir_epoch",
			"ggir_5s_meta",
			"ggir_part5_daysummary",
			"vendor_epoch"
		]
	},
	epoch_seconds: {
		kind: "integer",
		members: [],
		minimum: 1,
		maximum: 86400
	},
	skip_rows_count: {
		kind: "integer",
		members: [],
		minimum: 0,
		maximum: 200
	},
	view_hours: {
		kind: "integer",
		members: [],
		minimum: 1,
		maximum: 168
	},
	nonwear_threshold_count: {
		kind: "integer",
		members: [],
		minimum: 0,
		maximum: 1e3
	},
	wear_minutes_per_day: {
		kind: "integer",
		members: [],
		minimum: 0,
		maximum: 1440
	},
	valid_days_per_participant: {
		kind: "integer",
		members: [],
		minimum: 0,
		maximum: 366
	},
	cutpoint_counts_per_minute: {
		kind: "integer",
		members: [],
		minimum: 0
	},
	cutpoint_boundary_counts_per_minute: {
		kind: "integer",
		members: [],
		minimum: 1
	},
	physical_activity_cutpoint_thresholds: {
		kind: "object",
		members: [],
		fields: {
			sedentaryMax: "cutpoint_counts_per_minute",
			lightMin: "cutpoint_boundary_counts_per_minute",
			moderateMin: "cutpoint_boundary_counts_per_minute",
			vigorousMin: "cutpoint_boundary_counts_per_minute"
		},
		optionalFields: ["moderateMin", "vigorousMin"],
		ladder: [
			"sedentaryMax",
			"lightMin",
			"moderateMin",
			"vigorousMin"
		]
	},
	sleep_period_detector_type: {
		kind: "enum",
		members: [
			"consecutive_onset3s_offset5s",
			"consecutive_onset5s_offset10s",
			"tudor_locke_2014"
		]
	},
	period_guider_type: {
		kind: "open_enum",
		members: [
			"diary",
			"l5",
			"hdcza",
			"smart",
			"longest_bout",
			"event_marker",
			"actiware_rest_interval",
			"none"
		],
		vocabularyOwner: "core.yaml PeriodGuiderType"
	},
	diary_day_boundary_hour: {
		kind: "integer",
		members: [],
		minimum: 0,
		maximum: 23
	},
	diary_group_date_rule: {
		kind: "enum",
		members: [
			"night_date",
			"period_start_day",
			"explicit_only",
			"ask_per_night"
		]
	},
	diary_dst_fold_policy: {
		kind: "enum",
		members: [
			"ask",
			"first_occurrence",
			"mark_unusable"
		]
	},
	diary_dst_gap_policy: {
		kind: "enum",
		members: ["mark_unusable", "shift_forward_hour"]
	},
	placement_ruleset: {
		kind: "open_enum",
		members: [
			"legacy",
			"regularity_v2",
			"ggir_part4"
		],
		vocabularyOwner: "auto-scoring.yaml PlacementRuleset"
	},
	scorer_postprocessing_preset: {
		kind: "enum",
		members: ["none", "webster"]
	},
	choi_variant: {
		kind: "enum",
		members: [
			"choi_2011",
			"choi_2012",
			"both"
		]
	},
	sensor_location_type: {
		kind: "enum",
		members: ["wrist", "hip"]
	},
	laterality_type: {
		kind: "open_enum",
		members: [
			"non_dominant",
			"dominant",
			"left",
			"right",
			"unknown"
		],
		vocabularyOwner: "core.yaml LateralityType"
	},
	study_population_type: {
		kind: "open_enum",
		members: [
			"preschool_3_5",
			"child_5_11",
			"child_8_12",
			"adolescent",
			"adult",
			"older_adult",
			"unknown"
		],
		vocabularyOwner: "core.yaml StudyPopulationType"
	},
	activity_data_preference: {
		kind: "enum",
		members: [
			"axis_x",
			"axis_y",
			"axis_z",
			"vector_magnitude"
		]
	},
	activity_column_preference: {
		kind: "enum",
		members: [
			"axis_y",
			"axis_x",
			"axis_z",
			"vector_magnitude",
			"enmo",
			"anglez"
		]
	},
	extraction_path: {
		kind: "enum",
		members: ["60s_epochs", "ggir_5s"]
	},
	scoring_epoch_policy: {
		kind: "enum",
		members: ["native_when_available", "canonical_60s"]
	},
	epoch_lane_synthesis_policy: {
		kind: "enum",
		members: ["verbatim_only", "aggregate_divisors"]
	},
	marker_mode: {
		kind: "enum",
		members: ["sleep", "nonwear"]
	},
	ggir_config_object: {
		kind: "object",
		members: []
	},
	ggir_haspt_variant: {
		kind: "enum",
		members: [
			"HDCZA",
			"HorAngle",
			"NotWorn",
			"MotionWare",
			"HLRB"
		]
	},
	ggir_hasib_variant_list: {
		kind: "list",
		members: [
			"Sadeh1994",
			"Galland2012",
			"ColeKripke1992",
			"Oakley1997",
			"NotWorn"
		]
	},
	nonwear_algorithm_list: {
		kind: "list",
		members: [
			"ggir_saved",
			"gt3x_capsense",
			"actiware_off_wrist",
			"detach_nonwear",
			"choi_2011",
			"choi_2012",
			"van_hees_2013",
			"van_hees_2023",
			"troiano_2008",
			"ahmadi_2020"
		]
	},
	ggir_hasib_count_source: {
		kind: "enum",
		members: ["zero_crossing_y_60s", "neishabouri_vm_60s"]
	},
	sleep_period_detection_config: {
		kind: "object",
		members: []
	},
	column_mapping_object: {
		kind: "object",
		members: []
	},
	valid_day_criteria_object: {
		kind: "object",
		members: []
	},
	lstm_selection_object: {
		kind: "object",
		members: []
	},
	color_theme_object: {
		kind: "object",
		members: []
	},
	physical_activity_method_key: {
		kind: "open_enum",
		members: [
			"ggir_enmo",
			"freedson_adult_1952",
			"sasaki_vm_2011",
			"chandler_wrist_va_8_12_2015",
			"johansson_preschool_wrist_vm_2016",
			"preschool_free_living_rf_3_5",
			"chandler_wrist_vm_8_12_2015",
			"chandler_wrist_sedentary_5_11_2018",
			"chandler_wrist_axis1_sedentary_5_11_2018",
			"chandler_wrist_axis1_sedentary_dominant_5_11_2018",
			"chandler_wrist_vm_sedentary_dominant_5_11_2018",
			"evenson_children_2008",
			"neil_sztramko_actiwatch2_adult_2017",
			"kemp_actiwatch2_adult_2020",
			"hildebrand_enmo_wrist_2014",
			"mims"
		],
		vocabularyOwner: "activity/activity.yaml PhysicalActivityMethodId"
	},
	physical_activity_cutpoints_object: {
		kind: "object",
		members: [],
		values: "physical_activity_cutpoint_thresholds"
	},
	analysis_paradigm_type: {
		kind: "enum",
		members: ["configured_scoring", "actiware"]
	},
	actiware_analysis_settings_object: {
		kind: "object",
		members: [],
		schemaClass: "ActiwareAnalysisSettings"
	},
	actiware_rest_proposal_settings_object: {
		kind: "object",
		members: [],
		schemaClass: "ActiwareRestProposalSettings"
	},
	physical_activity_mask_policy_object: {
		kind: "object",
		members: []
	}
}, $ = {
	actiware_analysis: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "actiware_analysis",
			zustand: "actiwareAnalysis"
		},
		range: "actiware_analysis_settings_object",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["materialized"],
		consumers: ["auto_sleep_markers", "export_columns"],
		appliesUnderParadigm: "actiware",
		ggirFolder: "N/A: retained GGIR output",
		ggirRaw: "N/A: Actiware profiles only",
		ggirEvidence: "frontend/src/services/per-source-defaults.ts",
		perUserCompute: !1
	},
	actiware_rest_proposal: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "actiware_rest_proposal",
			zustand: "actiwareRestProposal"
		},
		range: "actiware_rest_proposal_settings_object",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["materialized"],
		consumers: ["auto_sleep_markers", "export_columns"],
		appliesUnderParadigm: "actiware",
		ggirFolder: "N/A: retained GGIR output",
		ggirRaw: "N/A: Actiware profiles only",
		ggirEvidence: "frontend/src/services/per-source-defaults.ts",
		perUserCompute: !1
	},
	analysis_paradigm: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "analysis_paradigm",
			zustand: "analysisParadigm"
		},
		range: "analysis_paradigm_type",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["materialized"],
		consumers: ["auto_sleep_markers", "export_columns"],
		appliesUnderParadigm: null,
		ggirFolder: "Saved GGIR windows and values remain authoritative",
		ggirRaw: "Configured scoring; GGIR angle requests use Part 4",
		ggirEvidence: "frontend/src/services/placement-request.ts",
		perUserCompute: !1,
		uiDescription: "Whether files are scored with this study's own scoring, or Actiwatch files are scored as Actiware scores them. Under Actiware, its analysis settings default to each recording's own and can be changed here."
	},
	auto_nonwear_on_navigate: {
		authority: "user",
		plane: "local",
		projections: ["localstorage", "zustand"],
		storeKeys: {
			localstorage: "autoNonwearOnNavigate",
			zustand: "autoNonwearOnNavigate"
		},
		range: "boolean_flag",
		surface: "scoring",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App proposal display only; defaults false; no GGIR recomputation",
		ggirRaw: "App proposal display only; defaults false",
		ggirEvidence: "frontend/src/pages/scoring/scoring-page.tsx",
		perUserCompute: !0,
		perUserComputeRationale: "Same as `auto_score_on_navigate` — a when, not a what. Keys no compute cache."
	},
	auto_score_on_navigate: {
		authority: "user",
		plane: "local",
		projections: ["localstorage", "zustand"],
		storeKeys: {
			localstorage: "autoScoreOnNavigate",
			zustand: "autoScoreOnNavigate"
		},
		range: "boolean_flag",
		surface: "scoring",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App proposal display only; defaults false; no GGIR recomputation",
		ggirRaw: "App proposal display only; defaults false",
		ggirEvidence: "frontend/src/pages/scoring/scoring-page.tsx",
		perUserCompute: !0,
		perUserComputeRationale: "A navigation convenience, not a scoring input: it decides WHEN the shared engine runs, never WHAT it computes, and it keys no compute cache. R11 bans username-keyed compute caches, which this is not."
	},
	choi_axis: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "choi_axis",
			zustand: "choiAxis"
		},
		range: "activity_data_preference",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["choi_mask"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: GGIR source selection uses GGIR set",
		ggirRaw: "Counts masks/display only; GGIR cleaning uses its config",
		ggirEvidence: "frontend/src/services/local-nonwear-unified.ts; frontend/src/services/placement-request.ts",
		perUserCompute: !1
	},
	choi_variant: {
		authority: "study",
		plane: "both",
		projections: [
			"column",
			"extras",
			"zustand"
		],
		storeKeys: {
			column: "choi_variant",
			extras: "choi_variant",
			zustand: "choiVariant"
		},
		range: "choi_variant",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["choi_mask"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: GGIR source selection uses GGIR set",
		ggirRaw: "Counts masks/display only; GGIR cleaning uses its config",
		ggirEvidence: "frontend/src/services/local-nonwear-unified.ts; frontend/src/services/placement-request.ts",
		perUserCompute: !1
	},
	color_theme: {
		authority: "user",
		plane: "both",
		projections: [
			"extras",
			"localstorage",
			"zustand"
		],
		storeKeys: {
			extras: "color_theme",
			localstorage: "colorTheme",
			zustand: "colorTheme"
		},
		range: "color_theme_object",
		surface: "display",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App display preference; no GGIR numeric counterpart",
		ggirRaw: "App display preference; no GGIR numeric counterpart",
		ggirEvidence: "frontend/src/hooks/useActivityData.ts; frontend/src/components/activity-plot.tsx",
		perUserCompute: !1
	},
	column_mapping: {
		authority: "study",
		plane: "both",
		projections: [
			"extras",
			"localstorage",
			"zustand"
		],
		storeKeys: {
			extras: "column_mapping",
			localstorage: "columnMapping",
			zustand: "columnMapping"
		},
		range: "column_mapping_object",
		surface: "ingest",
		persisted: !0,
		status: "live",
		propagation: ["frozen_at_ingest"],
		consumers: ["ingest_only"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: native RData folder import",
		ggirRaw: "Native raw readers; mapping/skip only for explicitly mapped CSV",
		ggirEvidence: "frontend/src/services/local-processing/ggir-import.ts; frontend/src/services/local-processing/raw-pipeline.ts",
		perUserCompute: !1
	},
	default_algorithm: {
		authority: "study",
		plane: "both",
		projections: [
			"column",
			"dexie",
			"localstorage",
			"zustand"
		],
		storeKeys: {
			column: "default_algorithm",
			dexie: "defaultAlgorithm",
			localstorage: "currentAlgorithm",
			zustand: "currentAlgorithm"
		},
		range: "algorithm_key",
		surface: "scoring",
		persisted: !0,
		status: "live",
		propagation: ["keyed", "materialized"],
		consumers: ["auto_sleep_markers", "export_columns"],
		appliesUnderParadigm: null,
		ggirFolder: "Folder appliedHasibAlgo, via ggirMarkerAlgorithm; no second scorer",
		ggirRaw: "Angle scorer: GGIR Part 4; counts scorers remain a separate configured analysis",
		ggirEvidence: "frontend/src/services/local-processing/ggir-results-import.ts; frontend/src/services/placement-request.ts",
		perUserCompute: !1
	},
	default_group: {
		authority: "study",
		plane: "server",
		projections: ["extras"],
		storeKeys: { extras: "default_group" },
		range: "free_text",
		surface: "study",
		persisted: !0,
		status: "round_trip_only",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: server metadata settings",
		ggirRaw: "N/A: server metadata settings",
		ggirEvidence: "frontend/src/generated/settings-registry.ts; frontend/src/pages/study-settings-layout.ts",
		perUserCompute: !1
	},
	default_timepoint: {
		authority: "study",
		plane: "server",
		projections: ["extras"],
		storeKeys: { extras: "default_timepoint" },
		range: "free_text",
		surface: "study",
		persisted: !0,
		status: "round_trip_only",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: server metadata settings",
		ggirRaw: "N/A: server metadata settings",
		ggirEvidence: "frontend/src/generated/settings-registry.ts; frontend/src/pages/study-settings-layout.ts",
		perUserCompute: !1
	},
	device_preset: {
		authority: "study",
		plane: "both",
		projections: [
			"column",
			"extras",
			"localstorage",
			"zustand"
		],
		storeKeys: {
			column: "device_preset",
			extras: "device_preset",
			localstorage: "devicePreset",
			zustand: "devicePreset"
		},
		range: "device_preset",
		surface: "ingest",
		persisted: !0,
		status: "live",
		propagation: ["frozen_at_ingest"],
		consumers: ["ingest_only"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: native RData folder import",
		ggirRaw: "Native raw readers; mapping/skip only for explicitly mapped CSV",
		ggirEvidence: "frontend/src/services/local-processing/ggir-import.ts; frontend/src/services/local-processing/raw-pipeline.ts",
		perUserCompute: !1
	},
	diary_day_boundary_hour: {
		authority: "study",
		plane: "local",
		projections: ["zustand"],
		storeKeys: { zustand: "diaryDayBoundaryHour" },
		range: "diary_day_boundary_hour",
		surface: "ingest",
		persisted: !0,
		status: "live",
		propagation: ["frozen_at_ingest"],
		consumers: ["ingest_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App diary import only; folder windows and metrics remain saved",
		ggirRaw: "App diary import policy; config-supplied GGIR log remains a distinct input",
		ggirEvidence: "frontend/src/services/local-processing/ggir-night-rules.ts; frontend/src/hooks/useDiaryDayGeometry.ts",
		perUserCompute: !1
	},
	diary_dst_fold_policy: {
		authority: "study",
		plane: "local",
		projections: ["zustand"],
		storeKeys: { zustand: "diaryDstFoldPolicy" },
		range: "diary_dst_fold_policy",
		surface: "ingest",
		persisted: !0,
		status: "live",
		propagation: ["frozen_at_ingest"],
		consumers: ["ingest_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App diary import only; folder windows and metrics remain saved",
		ggirRaw: "App diary import policy; config-supplied GGIR log remains a distinct input",
		ggirEvidence: "frontend/src/services/local-processing/ggir-night-rules.ts; frontend/src/hooks/useDiaryDayGeometry.ts",
		perUserCompute: !1
	},
	diary_dst_gap_policy: {
		authority: "study",
		plane: "local",
		projections: ["zustand"],
		storeKeys: { zustand: "diaryDstGapPolicy" },
		range: "diary_dst_gap_policy",
		surface: "ingest",
		persisted: !0,
		status: "live",
		propagation: ["frozen_at_ingest"],
		consumers: ["ingest_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App diary import only; folder windows and metrics remain saved",
		ggirRaw: "App diary import policy; config-supplied GGIR log remains a distinct input",
		ggirEvidence: "frontend/src/services/local-processing/ggir-night-rules.ts; frontend/src/hooks/useDiaryDayGeometry.ts",
		perUserCompute: !1
	},
	diary_main_sleep_date_rule: {
		authority: "study",
		plane: "local",
		projections: ["zustand"],
		storeKeys: { zustand: "diaryMainSleepDateRule" },
		range: "diary_group_date_rule",
		surface: "ingest",
		persisted: !0,
		status: "live",
		propagation: ["frozen_at_ingest"],
		consumers: ["ingest_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App diary import only; folder windows and metrics remain saved",
		ggirRaw: "App diary import policy; config-supplied GGIR log remains a distinct input",
		ggirEvidence: "frontend/src/services/local-processing/ggir-night-rules.ts; frontend/src/hooks/useDiaryDayGeometry.ts",
		perUserCompute: !1
	},
	diary_nap_date_rule: {
		authority: "study",
		plane: "local",
		projections: ["zustand"],
		storeKeys: { zustand: "diaryNapDateRule" },
		range: "diary_group_date_rule",
		surface: "ingest",
		persisted: !0,
		status: "live",
		propagation: ["frozen_at_ingest"],
		consumers: ["ingest_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App diary import only; folder windows and metrics remain saved",
		ggirRaw: "App diary import policy; config-supplied GGIR log remains a distinct input",
		ggirEvidence: "frontend/src/services/local-processing/ggir-night-rules.ts; frontend/src/hooks/useDiaryDayGeometry.ts",
		perUserCompute: !1
	},
	diary_nonwear_date_rule: {
		authority: "study",
		plane: "local",
		projections: ["zustand"],
		storeKeys: { zustand: "diaryNonwearDateRule" },
		range: "diary_group_date_rule",
		surface: "ingest",
		persisted: !0,
		status: "live",
		propagation: ["frozen_at_ingest"],
		consumers: ["ingest_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App diary import only; folder windows and metrics remain saved",
		ggirRaw: "App diary import policy; config-supplied GGIR log remains a distinct input",
		ggirEvidence: "frontend/src/services/local-processing/ggir-night-rules.ts; frontend/src/hooks/useDiaryDayGeometry.ts",
		perUserCompute: !1
	},
	epoch_lane_synthesis: {
		authority: "study",
		plane: "server",
		projections: ["extras"],
		storeKeys: { extras: "epoch_lane_synthesis" },
		range: "epoch_lane_synthesis_policy",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["auto_sleep_markers", "choi_mask"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: server-only epoch lane settings",
		ggirRaw: "N/A: server-only epoch lane settings",
		ggirEvidence: "frontend/src/pages/study-settings-layout.ts; frontend/src/generated/settings-registry.ts",
		perUserCompute: !1
	},
	epoch_length_seconds: {
		authority: "study",
		plane: "both",
		projections: [
			"column",
			"extras",
			"localstorage",
			"zustand"
		],
		storeKeys: {
			column: "epoch_length_seconds",
			extras: "epoch_length_seconds",
			localstorage: "epochLengthSeconds",
			zustand: "epochLengthSeconds"
		},
		range: "epoch_seconds",
		surface: "ingest",
		persisted: !0,
		status: "live",
		propagation: ["frozen_at_ingest"],
		consumers: ["ingest_only"],
		appliesUnderParadigm: null,
		ggirFolder: "Folder native 5-second epochs; counts extraction setting N/A",
		ggirRaw: "GGIR native 5-second stream; 60-second setting controls additional counts lane",
		ggirEvidence: "frontend/src/services/local-processing/ggir-import.ts; frontend/src/services/local-processing/raw-pipeline.ts",
		perUserCompute: !1
	},
	extraction_path: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "extraction_path",
			zustand: "extractionPath"
		},
		range: "extraction_path",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["materialized"],
		consumers: ["ggir_metrics", "auto_sleep_markers"],
		appliesUnderParadigm: null,
		ggirFolder: "Folder native 5-second epochs; counts extraction setting N/A",
		ggirRaw: "GGIR native 5-second stream; 60-second setting controls additional counts lane",
		ggirEvidence: "frontend/src/services/local-processing/ggir-import.ts; frontend/src/services/local-processing/raw-pipeline.ts",
		perUserCompute: !1
	},
	ggir_config: {
		authority: "study",
		plane: "local",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "ggir_config",
			zustand: "ggirConfig"
		},
		range: "ggir_config_object",
		surface: "ggir",
		persisted: !0,
		status: "live",
		propagation: ["materialized"],
		consumers: ["ggir_metrics", "hdcza_windows"],
		appliesUnderParadigm: null,
		ggirFolder: "Retained folder config.csv",
		ggirRaw: "Study config.csv, default ELEMENT; supported computation values applied by actours; recorder-clock and summary-window policies differ from configurable GGIR (blocked at pinned core)",
		ggirEvidence: "frontend/src/lib/study-ggir-config.ts; actours crates/actours/src/config/app_ggir.rs",
		perUserCompute: !1
	},
	ggir_export_corrected_values: {
		authority: "study",
		plane: "local",
		projections: ["extras"],
		storeKeys: { extras: "ggir_export_corrected_values" },
		range: "boolean_flag",
		surface: "ggir",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["export_columns"],
		appliesUnderParadigm: null,
		ggirFolder: "Default true: GGIR's own files plus the _corrected files; off writes GGIR's own only",
		ggirRaw: "N/A: GGIR folder export option",
		ggirEvidence: "frontend/src/services/ggir-corrected-values.ts",
		perUserCompute: !1
	},
	ggir_hasib_count_epoch_seconds: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "ggir_hasib_count_epoch_seconds",
			zustand: "ggirHasibCountEpochSeconds"
		},
		range: "epoch_seconds",
		surface: "ggir",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["ggir_metrics"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: saved HASIB output; extra variants default off",
		ggirRaw: "Extra variants default off; canonical HASIB.algo and Sadeh_axis come from config",
		ggirEvidence: "frontend/src/lib/local-processing-options.ts; frontend/src/services/local-processing/raw-pipeline.ts",
		perUserCompute: !1
	},
	ggir_hasib_count_source: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "ggir_hasib_count_source",
			zustand: "ggirHasibCountSource"
		},
		range: "ggir_hasib_count_source",
		surface: "ggir",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["ggir_metrics"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: saved HASIB output; extra variants default off",
		ggirRaw: "Extra variants default off; canonical HASIB.algo and Sadeh_axis come from config",
		ggirEvidence: "frontend/src/lib/local-processing-options.ts; frontend/src/services/local-processing/raw-pipeline.ts",
		perUserCompute: !1
	},
	ggir_hasib_variants: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "ggir_hasib_variants",
			zustand: "ggirHasibVariants"
		},
		range: "ggir_hasib_variant_list",
		surface: "ggir",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["ggir_metrics"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: saved HASIB output; extra variants default off",
		ggirRaw: "Extra variants default off; canonical HASIB.algo and Sadeh_axis come from config",
		ggirEvidence: "frontend/src/lib/local-processing-options.ts; frontend/src/services/local-processing/raw-pipeline.ts",
		perUserCompute: !1
	},
	ggir_hasib_variants_enabled: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "ggir_hasib_variants_enabled",
			zustand: "ggirHasibVariantsEnabled"
		},
		range: "boolean_flag",
		surface: "ggir",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["ggir_metrics"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: saved HASIB output; extra variants default off",
		ggirRaw: "Extra variants default off; canonical HASIB.algo and Sadeh_axis come from config",
		ggirEvidence: "frontend/src/lib/local-processing-options.ts; frontend/src/services/local-processing/raw-pipeline.ts",
		perUserCompute: !1
	},
	ggir_haspt_variant: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "ggir_haspt_variant",
			zustand: "ggirHasptVariant"
		},
		range: "ggir_haspt_variant",
		surface: "ggir",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["hdcza_windows"],
		appliesUnderParadigm: null,
		ggirFolder: "Saved HASPT.algo and folder windows",
		ggirRaw: "HDCZA sentinel supplies no override at import; config HASPT.algo; recorded variant on subsequent placement",
		ggirEvidence: "frontend/src/lib/local-processing-options.ts; frontend/src/services/data-source/local-data-source.ts",
		perUserCompute: !1
	},
	group_pattern: {
		authority: "study",
		plane: "server",
		projections: ["extras"],
		storeKeys: { extras: "group_pattern" },
		range: "free_text",
		surface: "study",
		persisted: !0,
		status: "round_trip_only",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: server metadata settings",
		ggirRaw: "N/A: server metadata settings",
		ggirEvidence: "frontend/src/generated/settings-registry.ts; frontend/src/pages/study-settings-layout.ts",
		perUserCompute: !1
	},
	hide_filenames: {
		authority: "user",
		plane: "local",
		projections: ["zustand"],
		storeKeys: { zustand: "hideFilenames" },
		range: "boolean_flag",
		surface: "display",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App display preference; no GGIR numeric counterpart",
		ggirRaw: "App display preference; no GGIR numeric counterpart",
		ggirEvidence: "frontend/src/hooks/useActivityData.ts; frontend/src/components/activity-plot.tsx",
		perUserCompute: !1
	},
	id_pattern: {
		authority: "study",
		plane: "server",
		projections: ["extras"],
		storeKeys: { extras: "id_pattern" },
		range: "free_text",
		surface: "study",
		persisted: !0,
		status: "round_trip_only",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: server metadata settings",
		ggirRaw: "N/A: server metadata settings",
		ggirEvidence: "frontend/src/generated/settings-registry.ts; frontend/src/pages/study-settings-layout.ts",
		perUserCompute: !1
	},
	lstm_model_selection: {
		authority: "study",
		plane: "both",
		projections: ["extras"],
		storeKeys: { extras: "lstm_model_selection" },
		range: "lstm_selection_object",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["auto_sleep_markers"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: GGIR saved output",
		ggirRaw: "N/A: GGIR HDCZA/HASIB processing",
		ggirEvidence: "frontend/src/services/placement-request.ts",
		perUserCompute: !1
	},
	marker_mode: {
		authority: "user",
		plane: "local",
		projections: ["zustand"],
		storeKeys: { zustand: "markerMode" },
		range: "marker_mode",
		surface: "scoring",
		persisted: !1,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App display preference; no GGIR numeric counterpart",
		ggirRaw: "App display preference; no GGIR numeric counterpart",
		ggirEvidence: "frontend/src/hooks/useActivityData.ts; frontend/src/components/activity-plot.tsx",
		perUserCompute: !0,
		perUserComputeRationale: "Transient per-session toolbar state, scoped to one scorer's own hands. It keys no compute cache and no stored artifact."
	},
	night_end_hour: {
		authority: "study",
		plane: "both",
		projections: [
			"column",
			"dexie",
			"localstorage",
			"zustand"
		],
		storeKeys: {
			column: "night_end_hour",
			dexie: "nightEndHour",
			localstorage: "nightEndHour",
			zustand: "nightEndHour"
		},
		range: "clock_hhmm",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["materialized"],
		consumers: ["auto_sleep_markers", "export_columns"],
		appliesUnderParadigm: null,
		ggirFolder: "Saved GGIR windows retained; app sleep-window card hidden for an imported-GGIR study and app auto-score refuses replacement",
		ggirRaw: "Core GGIR noon windows and def.noc.sleep; 21-09 is app quality annotation only",
		ggirEvidence: "frontend/src/services/navigation-facts.ts; frontend/src/services/local-processing/hdcza-markers.ts",
		perUserCompute: !1
	},
	night_start_hour: {
		authority: "study",
		plane: "both",
		projections: [
			"column",
			"dexie",
			"localstorage",
			"zustand"
		],
		storeKeys: {
			column: "night_start_hour",
			dexie: "nightStartHour",
			localstorage: "nightStartHour",
			zustand: "nightStartHour"
		},
		range: "clock_hhmm",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["materialized"],
		consumers: ["auto_sleep_markers", "export_columns"],
		appliesUnderParadigm: null,
		ggirFolder: "Saved GGIR windows retained; app sleep-window card hidden for an imported-GGIR study and app auto-score refuses replacement",
		ggirRaw: "Core GGIR noon windows and def.noc.sleep; 21-09 is app quality annotation only",
		ggirEvidence: "frontend/src/services/navigation-facts.ts; frontend/src/services/local-processing/hdcza-markers.ts",
		perUserCompute: !1
	},
	nonwear_detectors_counts: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "nonwear_detectors_counts",
			zustand: "nonwearDetectorsCounts"
		},
		range: "nonwear_algorithm_list",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed", "materialized"],
		consumers: [
			"auto_sleep_markers",
			"choi_mask",
			"detach_mask"
		],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: GGIR source selection uses GGIR set",
		ggirRaw: "Counts masks/display only; GGIR cleaning uses its config",
		ggirEvidence: "frontend/src/services/local-nonwear-unified.ts; frontend/src/services/placement-request.ts",
		perUserCompute: !1
	},
	nonwear_detectors_ggir: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "nonwear_detectors_ggir",
			zustand: "nonwearDetectorsGgir"
		},
		range: "nonwear_algorithm_list",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed", "materialized"],
		consumers: ["auto_sleep_markers", "hdcza_windows"],
		appliesUnderParadigm: null,
		ggirFolder: "Selected saved GGIR source; method label from folder config.csv; user may disable",
		ggirRaw: "Default selection follows the retained raw config nonwear_approach via the core; van Hees 2023 when the config uses its default; an explicit detector set remains explicit",
		ggirEvidence: "frontend/src/services/per-source-defaults.ts; frontend/src/services/local-nonwear-unified.ts; frontend/src/services/local-processing/ggir-import.ts",
		perUserCompute: !1
	},
	nonwear_threshold: {
		authority: "study",
		plane: "server",
		projections: ["extras"],
		storeKeys: { extras: "nonwear_threshold" },
		range: "nonwear_threshold_count",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["choi_mask"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: server-only setting",
		ggirRaw: "N/A: server-only setting; nonwear_approach/racriter/sdcriter from config",
		ggirEvidence: "frontend/src/generated/settings-registry.ts; frontend/src/services/local-processing/raw-pipeline.ts",
		perUserCompute: !1
	},
	participant_laterality: {
		authority: "study",
		plane: "local",
		projections: ["dexie", "zustand"],
		storeKeys: {
			dexie: "participantLaterality",
			zustand: "participantLaterality"
		},
		range: "laterality_type",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "Header laterality is retained and used; the import paradigm fills only an absent value; saved GGIR outputs stay authoritative",
		ggirRaw: "Header laterality is retained and used; the import paradigm fills only an absent value; no GGIR numeric parameter",
		ggirEvidence: "frontend/src/lib/recording-facts.ts; frontend/src/lib/file-sensor-location.ts",
		perUserCompute: !1
	},
	participant_population: {
		authority: "study",
		plane: "local",
		projections: ["dexie", "zustand"],
		storeKeys: {
			dexie: "participantPopulation",
			zustand: "participantPopulation"
		},
		range: "study_population_type",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App method eligibility/provenance only; saved output authoritative",
		ggirRaw: "App method eligibility/provenance; no GGIR parameter",
		ggirEvidence: "frontend/src/lib/variant-dials.ts",
		perUserCompute: !1
	},
	period_guider: {
		authority: "study",
		plane: "local",
		projections: ["zustand"],
		storeKeys: { zustand: "periodGuider" },
		range: "period_guider_type",
		surface: "scoring",
		persisted: !0,
		status: "live",
		propagation: ["materialized"],
		consumers: ["auto_sleep_markers"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: saved GGIR windows and values; edits reviewed with folder config",
		ggirRaw: "Angle requests use GGIR Part 4; default structured config defers to smart guide; postprocessing none",
		ggirEvidence: "frontend/src/services/placement-request.ts; frontend/src/services/data-source/local-data-source.ts",
		perUserCompute: !1
	},
	physical_activity_cutpoints: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "physical_activity_cutpoints",
			zustand: "physicalActivityCutpointOverrides"
		},
		range: "physical_activity_cutpoints_object",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["pa_classification"],
		appliesUnderParadigm: null,
		ggirFolder: "Parked: app PA settings are not GGIR sleep defaults",
		ggirRaw: "Parked: app PA settings are not GGIR sleep defaults",
		ggirEvidence: "frontend/src/services/data-source/local-data-source.ts",
		perUserCompute: !1
	},
	physical_activity_enabled_classes: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "physical_activity_enabled_classes",
			zustand: "physicalActivityEnabledClasses"
		},
		range: "string_list",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["pa_classification"],
		appliesUnderParadigm: null,
		ggirFolder: "Parked: app PA settings are not GGIR sleep defaults",
		ggirRaw: "Parked: app PA settings are not GGIR sleep defaults",
		ggirEvidence: "frontend/src/services/data-source/local-data-source.ts",
		perUserCompute: !1
	},
	physical_activity_mask_policy: {
		authority: "study",
		plane: "both",
		projections: ["zustand"],
		storeKeys: { zustand: "physicalActivityMaskPolicy" },
		range: "physical_activity_mask_policy_object",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["pa_classification"],
		appliesUnderParadigm: null,
		ggirFolder: "Parked: app PA settings are not GGIR sleep defaults",
		ggirRaw: "Parked: app PA settings are not GGIR sleep defaults",
		ggirEvidence: "frontend/src/services/data-source/local-data-source.ts",
		perUserCompute: !1
	},
	physical_activity_method: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "physical_activity_method",
			zustand: "physicalActivityMethod"
		},
		range: "physical_activity_method_key",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["pa_classification"],
		appliesUnderParadigm: null,
		ggirFolder: "Parked: app PA settings are not GGIR sleep defaults",
		ggirRaw: "Parked: app PA settings are not GGIR sleep defaults",
		ggirEvidence: "frontend/src/services/data-source/local-data-source.ts",
		perUserCompute: !1
	},
	physical_activity_nonwear_class: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "physical_activity_nonwear_class",
			zustand: "physicalActivityNonwearAsClass"
		},
		range: "boolean_flag",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["pa_classification"],
		appliesUnderParadigm: null,
		ggirFolder: "Parked: app PA settings are not GGIR sleep defaults",
		ggirRaw: "Parked: app PA settings are not GGIR sleep defaults",
		ggirEvidence: "frontend/src/services/data-source/local-data-source.ts",
		perUserCompute: !1
	},
	placement_ruleset: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "placement_ruleset",
			zustand: "placementRuleset"
		},
		range: "placement_ruleset",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed", "materialized"],
		consumers: ["auto_sleep_markers"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: saved GGIR windows and values; edits reviewed with folder config",
		ggirRaw: "Angle requests use GGIR Part 4; default structured config defers to smart guide; postprocessing none",
		ggirEvidence: "frontend/src/services/placement-request.ts; frontend/src/services/data-source/local-data-source.ts",
		perUserCompute: !1
	},
	preferred_activity_column: {
		authority: "study",
		plane: "both",
		projections: [
			"extras",
			"localstorage",
			"zustand"
		],
		storeKeys: {
			extras: "preferred_activity_column",
			localstorage: "preferredActivityColumn",
			zustand: "preferredActivityColumn"
		},
		range: "activity_column_preference",
		surface: "ingest",
		persisted: !0,
		status: "live",
		propagation: ["frozen_at_ingest"],
		consumers: ["ingest_only"],
		appliesUnderParadigm: null,
		ggirFolder: "Servable GGIR ENMO/angle-z; counts axis_y unavailable",
		ggirRaw: "Servable source channels selected by scorer; axis_y belongs to counts view",
		ggirEvidence: "frontend/src/hooks/useActivityData.ts",
		perUserCompute: !1
	},
	preferred_display_column: {
		authority: "user",
		plane: "both",
		projections: [
			"column",
			"localstorage",
			"zustand"
		],
		storeKeys: {
			column: "preferred_display_column",
			localstorage: "preferredDisplayColumn",
			zustand: "preferredDisplayColumn"
		},
		range: "activity_data_preference",
		surface: "display",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "Servable GGIR ENMO/angle-z; counts axis_y unavailable",
		ggirRaw: "Servable source channels selected by scorer; axis_y belongs to counts view",
		ggirEvidence: "frontend/src/hooks/useActivityData.ts",
		perUserCompute: !1
	},
	scorer_postprocessing: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "scorer_postprocessing",
			zustand: "scorerPostprocessingPreset"
		},
		range: "scorer_postprocessing_preset",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed", "materialized"],
		consumers: ["auto_sleep_markers", "export_columns"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: saved GGIR windows and values; edits reviewed with folder config",
		ggirRaw: "Angle requests use GGIR Part 4; default structured config defers to smart guide; postprocessing none",
		ggirEvidence: "frontend/src/services/placement-request.ts; frontend/src/services/data-source/local-data-source.ts",
		perUserCompute: !1
	},
	scoring_epoch_policy: {
		authority: "study",
		plane: "server",
		projections: ["extras"],
		storeKeys: { extras: "scoring_epoch_policy" },
		range: "scoring_epoch_policy",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["auto_sleep_markers"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: server-only epoch lane settings",
		ggirRaw: "N/A: server-only epoch lane settings",
		ggirEvidence: "frontend/src/pages/study-settings-layout.ts; frontend/src/generated/settings-registry.ts",
		perUserCompute: !1
	},
	sensor_location: {
		authority: "study",
		plane: "both",
		projections: [
			"column",
			"extras",
			"zustand"
		],
		storeKeys: {
			column: "sensor_location",
			extras: "sensor_location",
			zustand: "sensorLocation"
		},
		range: "sensor_location_type",
		surface: "ingest",
		persisted: !0,
		status: "live",
		propagation: ["frozen_at_ingest"],
		consumers: ["ingest_only"],
		appliesUnderParadigm: null,
		ggirFolder: "Saved outputs retained; body site currently freezes the study paradigm. Blocked: the pinned browser config reader does not expose sensor.location for folder metadata",
		ggirRaw: "Body site freezes the import paradigm; header body site is retained separately. The core reads sensor.location for computation; reconciling config and frozen metadata is blocked by the missing browser config getter",
		ggirEvidence: "frontend/src/services/local-processing/persistence.ts; frontend/src/lib/recording-facts.ts; frontend/src/wasm/pkg/actours.d.ts",
		perUserCompute: !1
	},
	show_adjacent_markers: {
		authority: "user",
		plane: "local",
		projections: ["localstorage", "zustand"],
		storeKeys: {
			localstorage: "showAdjacentMarkers",
			zustand: "showAdjacentMarkers"
		},
		range: "boolean_flag",
		surface: "display",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App display preference; no GGIR numeric counterpart",
		ggirRaw: "App display preference; no GGIR numeric counterpart",
		ggirEvidence: "frontend/src/hooks/useActivityData.ts; frontend/src/components/activity-plot.tsx",
		perUserCompute: !1
	},
	show_auto_score_proposal: {
		authority: "user",
		plane: "local",
		projections: ["zustand"],
		storeKeys: { zustand: "showAutoScoreProposal" },
		range: "boolean_flag",
		surface: "display",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App display preference; no GGIR numeric counterpart",
		ggirRaw: "App display preference; no GGIR numeric counterpart",
		ggirEvidence: "frontend/src/hooks/useActivityData.ts; frontend/src/components/activity-plot.tsx",
		perUserCompute: !1
	},
	show_choi_nonwear: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "show_choi_nonwear",
			zustand: "showChoiNonwear"
		},
		range: "boolean_flag",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: GGIR source selection uses GGIR set",
		ggirRaw: "Counts masks/display only; GGIR cleaning uses its config",
		ggirEvidence: "frontend/src/services/local-nonwear-unified.ts; frontend/src/services/placement-request.ts",
		perUserCompute: !1
	},
	show_diary_overlay: {
		authority: "user",
		plane: "local",
		projections: ["zustand"],
		storeKeys: { zustand: "showDiaryOverlay" },
		range: "boolean_flag",
		surface: "display",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App display preference; no GGIR numeric counterpart",
		ggirRaw: "App display preference; no GGIR numeric counterpart",
		ggirEvidence: "frontend/src/hooks/useActivityData.ts; frontend/src/components/activity-plot.tsx",
		perUserCompute: !1
	},
	show_event_markers: {
		authority: "user",
		plane: "local",
		projections: ["zustand"],
		storeKeys: { zustand: "showEventMarkers" },
		range: "boolean_flag",
		surface: "display",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App display preference; no GGIR numeric counterpart",
		ggirRaw: "App display preference; no GGIR numeric counterpart",
		ggirEvidence: "frontend/src/hooks/useActivityData.ts; frontend/src/components/activity-plot.tsx",
		perUserCompute: !1
	},
	show_light: {
		authority: "user",
		plane: "local",
		projections: ["zustand"],
		storeKeys: { zustand: "showLight" },
		range: "boolean_flag",
		surface: "display",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App display preference; no GGIR numeric counterpart",
		ggirRaw: "App display preference; no GGIR numeric counterpart",
		ggirEvidence: "frontend/src/hooks/useActivityData.ts; frontend/src/components/activity-plot.tsx",
		perUserCompute: !1
	},
	show_nonwear_overlays: {
		authority: "user",
		plane: "local",
		projections: ["localstorage", "zustand"],
		storeKeys: {
			localstorage: "showNonwearOverlays",
			zustand: "showNonwearOverlays"
		},
		range: "boolean_flag",
		surface: "display",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App display preference; no GGIR numeric counterpart",
		ggirRaw: "App display preference; no GGIR numeric counterpart",
		ggirEvidence: "frontend/src/hooks/useActivityData.ts; frontend/src/components/activity-plot.tsx",
		perUserCompute: !1
	},
	skip_rows: {
		authority: "study",
		plane: "both",
		projections: [
			"column",
			"extras",
			"localstorage",
			"zustand"
		],
		storeKeys: {
			column: "skip_rows",
			extras: "skip_rows",
			localstorage: "skipRows",
			zustand: "skipRows"
		},
		range: "skip_rows_count",
		surface: "ingest",
		persisted: !0,
		status: "live",
		propagation: ["frozen_at_ingest"],
		consumers: ["ingest_only"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: native RData folder import",
		ggirRaw: "Native raw readers; mapping/skip only for explicitly mapped CSV",
		ggirEvidence: "frontend/src/services/local-processing/ggir-import.ts; frontend/src/services/local-processing/raw-pipeline.ts",
		perUserCompute: !1
	},
	sleep_detection_rule: {
		authority: "study",
		plane: "both",
		projections: [
			"column",
			"dexie",
			"localstorage",
			"zustand"
		],
		storeKeys: {
			column: "sleep_detection_rule",
			dexie: "sleepDetectionRule",
			localstorage: "sleepDetectionRule",
			zustand: "sleepDetectionRule"
		},
		range: "sleep_period_detector_type",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["materialized"],
		consumers: ["auto_sleep_markers", "export_columns"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: saved GGIR windows and values; edits reviewed with folder config",
		ggirRaw: "Angle requests use GGIR Part 4; default structured config defers to smart guide; postprocessing none",
		ggirEvidence: "frontend/src/services/placement-request.ts; frontend/src/services/data-source/local-data-source.ts",
		perUserCompute: !1
	},
	sleep_period_detection: {
		authority: "study",
		plane: "both",
		projections: [
			"column",
			"extras",
			"dexie",
			"zustand"
		],
		storeKeys: {
			column: "sleep_period_detection_config_json",
			extras: "sleep_period_detection",
			dexie: "sleepPeriodDetection",
			zustand: "sleepPeriodDetection"
		},
		range: "sleep_period_detection_config",
		surface: "scoring",
		persisted: !0,
		status: "live",
		propagation: ["keyed", "materialized"],
		consumers: ["hdcza_windows", "auto_sleep_markers"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: saved GGIR windows and values; edits reviewed with folder config",
		ggirRaw: "Angle requests use GGIR Part 4; default structured config defers to smart guide; postprocessing none",
		ggirEvidence: "frontend/src/services/placement-request.ts; frontend/src/services/data-source/local-data-source.ts",
		perUserCompute: !1
	},
	study_timezone: {
		authority: "study",
		plane: "local",
		projections: ["extras"],
		storeKeys: { extras: "study_timezone" },
		range: "free_text",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["export_columns"],
		appliesUnderParadigm: null,
		ggirFolder: "The saved timezone and clock basis govern DST flags; a folder without a saved timezone or recording offset shows an explicit explanation",
		ggirRaw: "Study zone annotates; app-run core retains recorder-clock labels instead of configtz/desiredtz (blocked GGIR config parity)",
		ggirEvidence: "frontend/src/services/navigation-facts.ts; actours crates/actours/src/config/app_ggir.rs",
		perUserCompute: !1
	},
	timepoint_pattern: {
		authority: "study",
		plane: "server",
		projections: ["extras"],
		storeKeys: { extras: "timepoint_pattern" },
		range: "free_text",
		surface: "study",
		persisted: !0,
		status: "round_trip_only",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: server metadata settings",
		ggirRaw: "N/A: server metadata settings",
		ggirEvidence: "frontend/src/generated/settings-registry.ts; frontend/src/pages/study-settings-layout.ts",
		perUserCompute: !1
	},
	unknown_value: {
		authority: "study",
		plane: "server",
		projections: ["extras"],
		storeKeys: { extras: "unknown_value" },
		range: "free_text",
		surface: "study",
		persisted: !0,
		status: "round_trip_only",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: server metadata settings",
		ggirRaw: "N/A: server metadata settings",
		ggirEvidence: "frontend/src/generated/settings-registry.ts; frontend/src/pages/study-settings-layout.ts",
		perUserCompute: !1
	},
	valid_day_criteria: {
		authority: "study",
		plane: "both",
		projections: ["extras", "zustand"],
		storeKeys: {
			extras: "valid_day_criteria",
			zustand: "validDayCriteria"
		},
		range: "valid_day_criteria_object",
		surface: "study",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["export_columns"],
		appliesUnderParadigm: null,
		ggirFolder: "Analysis Issues and Day Validity use the stored GGIR includeDayCriterionHours verdict; app participant criteria do not judge folder files",
		ggirRaw: "GGIR includedaycrit/includenightcrit from config; app validity policy separate PA summary",
		ggirEvidence: "frontend/src/services/local-processing/ggir-results-import.ts; frontend/src/services/data-source/local-data-source.ts",
		perUserCompute: !1
	},
	valid_groups: {
		authority: "study",
		plane: "server",
		projections: ["extras"],
		storeKeys: { extras: "valid_groups" },
		range: "string_list",
		surface: "study",
		persisted: !0,
		status: "round_trip_only",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: server metadata settings",
		ggirRaw: "N/A: server metadata settings",
		ggirEvidence: "frontend/src/generated/settings-registry.ts; frontend/src/pages/study-settings-layout.ts",
		perUserCompute: !1
	},
	valid_timepoints: {
		authority: "study",
		plane: "server",
		projections: ["extras"],
		storeKeys: { extras: "valid_timepoints" },
		range: "string_list",
		surface: "study",
		persisted: !0,
		status: "round_trip_only",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "N/A: server metadata settings",
		ggirRaw: "N/A: server metadata settings",
		ggirEvidence: "frontend/src/generated/settings-registry.ts; frontend/src/pages/study-settings-layout.ts",
		perUserCompute: !1
	},
	view_mode_hours: {
		authority: "user",
		plane: "both",
		projections: [
			"column",
			"localstorage",
			"zustand"
		],
		storeKeys: {
			column: "view_mode_hours",
			localstorage: "viewModeHours",
			zustand: "viewModeHours"
		},
		range: "view_hours",
		surface: "display",
		persisted: !0,
		status: "live",
		propagation: ["view"],
		consumers: ["display_only"],
		appliesUnderParadigm: null,
		ggirFolder: "App display preference; no GGIR numeric counterpart",
		ggirRaw: "App display preference; no GGIR numeric counterpart",
		ggirEvidence: "frontend/src/hooks/useActivityData.ts; frontend/src/components/activity-plot.tsx",
		perUserCompute: !1
	}
}, Y = {
	actiware_analysis: {},
	actiware_rest_proposal: {},
	analysis_paradigm: "configured_scoring",
	auto_nonwear_on_navigate: !1,
	auto_score_on_navigate: !1,
	choi_axis: "vector_magnitude",
	choi_variant: "both",
	color_theme: {
		preset: "default",
		onset: "#0080FF",
		offset: "#FF8000",
		sleepOverlay: "#00A99D",
		nonwear: "#DC143C",
		sensorNonwear: "#FFD700",
		choiNonwear: "#8B3FA8",
		activityLine: "#0EA5E9"
	},
	column_mapping: {
		date_column: "",
		time_column: "",
		datetime_column: "",
		activity_column: "",
		axis_x_column: "",
		axis_z_column: "",
		vector_magnitude_column: ""
	},
	default_algorithm: "sadeh_1994_actilife",
	default_group: "",
	default_timepoint: "",
	device_preset: "actigraph",
	diary_day_boundary_hour: 12,
	diary_dst_fold_policy: "ask",
	diary_dst_gap_policy: "mark_unusable",
	diary_main_sleep_date_rule: "night_date",
	diary_nap_date_rule: "night_date",
	diary_nonwear_date_rule: "period_start_day",
	epoch_lane_synthesis: "verbatim_only",
	epoch_length_seconds: 60,
	extraction_path: "60s_epochs",
	ggir_config: {},
	ggir_export_corrected_values: !0,
	ggir_hasib_count_epoch_seconds: 60,
	ggir_hasib_count_source: "zero_crossing_y_60s",
	ggir_hasib_variants: [
		"Sadeh1994",
		"Galland2012",
		"ColeKripke1992",
		"Oakley1997",
		"NotWorn"
	],
	ggir_hasib_variants_enabled: !1,
	ggir_haspt_variant: "HDCZA",
	group_pattern: "^([A-Z]+)-",
	hide_filenames: !1,
	id_pattern: "([A-Z]+-\\d+)",
	lstm_model_selection: {
		modelId: null,
		threshold: null
	},
	marker_mode: "sleep",
	night_end_hour: "09:00",
	night_start_hour: "21:00",
	nonwear_detectors_counts: [
		"choi_2011",
		"choi_2012",
		"gt3x_capsense",
		"detach_nonwear",
		"actiware_off_wrist"
	],
	nonwear_detectors_ggir: ["ggir_saved", "van_hees_2023"],
	nonwear_threshold: 0,
	participant_laterality: "non_dominant",
	participant_population: "unknown",
	period_guider: "smart",
	physical_activity_cutpoints: {},
	physical_activity_enabled_classes: [
		"sedentary",
		"light",
		"moderate",
		"vigorous",
		"nonwear"
	],
	physical_activity_mask_policy: {
		excludeNonwear: !0,
		excludeMainSleep: !0,
		excludeNaps: !0,
		useAlgorithmNonwear: !1,
		useManualNonwear: !0,
		minimumWakeWearMinutes: 600,
		nonwearDetector: "union_all"
	},
	physical_activity_method: "sasaki_vm_2011",
	physical_activity_nonwear_class: !0,
	placement_ruleset: "legacy",
	preferred_activity_column: "axis_y",
	preferred_display_column: "axis_y",
	scorer_postprocessing: "none",
	scoring_epoch_policy: "native_when_available",
	sensor_location: "wrist",
	show_adjacent_markers: !0,
	show_auto_score_proposal: !0,
	show_choi_nonwear: !0,
	show_diary_overlay: !1,
	show_event_markers: !0,
	show_light: !1,
	show_nonwear_overlays: !0,
	skip_rows: 10,
	sleep_detection_rule: "consecutive_onset3s_offset5s",
	sleep_period_detection: {
		source_a: "hdcza",
		source_b: "selected_scorer_first_last",
		fusion_policy: "source_b_bounded_by_source_a",
		merge_gap_minutes: 45,
		padding_minutes: 0,
		min_overlap_jaccard: .5,
		apply_nonwear_gate: !1
	},
	study_timezone: "",
	timepoint_pattern: "_(T\\d+)_",
	unknown_value: "UNKNOWN",
	valid_day_criteria: {
		minWearMinutesPerDay: 600,
		minValidDaysPerParticipant: 4,
		requireWeekendDay: !1,
		partialDayPolicy: "exclude"
	},
	valid_groups: [],
	valid_timepoints: [],
	view_mode_hours: 24
}, X = {
	configured_scoring: [],
	actiware: ["actiware_analysis", "actiware_rest_proposal"]
}, J = [
	"HDCZA",
	"HorAngle",
	"NotWorn",
	"MotionWare",
	"HLRB"
], Z = [
	"Sadeh1994",
	"Galland2012",
	"ColeKripke1992",
	"Oakley1997",
	"NotWorn"
], Q = ["zero_crossing_y_60s", "neishabouri_vm_60s"], ee = {
	default_algorithm: "sadeh_1994_actilife",
	nonwear_detectors_counts: [
		"choi_2011",
		"choi_2012",
		"gt3x_capsense",
		"detach_nonwear",
		"actiware_off_wrist"
	],
	nonwear_detectors_ggir: ["ggir_saved", "van_hees_2023"],
	sleep_detection_rule: "consecutive_onset3s_offset5s",
	placement_ruleset: "legacy",
	period_guider: "smart",
	choi_variant: "both",
	choi_axis: "vector_magnitude",
	epoch_length_seconds: 60,
	skip_rows: 10,
	preferred_display_column: "axis_y",
	view_mode_hours: 24,
	night_start_hour: "21:00",
	night_end_hour: "09:00",
	sleep_period_detection: {
		source_a: "hdcza",
		source_b: "selected_scorer_first_last",
		fusion_policy: "source_b_bounded_by_source_a",
		merge_gap_minutes: 45,
		padding_minutes: 0,
		min_overlap_jaccard: .5,
		apply_nonwear_gate: !1
	},
	diary_day_boundary_hour: 12,
	diary_main_sleep_date_rule: "night_date",
	diary_nap_date_rule: "night_date",
	diary_nonwear_date_rule: "period_start_day",
	diary_dst_fold_policy: "ask",
	diary_dst_gap_policy: "mark_unusable"
};
function te(e, t) {
	return W[$[e].range] ? re($[e].range, t) : `unknown range for ${e}`;
}
function ae(e, t, a) {
	return "study" === $[e].authority && void 0 !== t && null === te(e, t) ? {
		value: t,
		provenance: "study"
	} : void 0 !== a && null === te(e, a) ? {
		value: a,
		provenance: "user"
	} : {
		value: Y[e],
		provenance: "default"
	};
}
function re(e, t) {
	const a = W[e];
	if (!a) return `unknown range ${e}`;
	switch (a.kind) {
		case "boolean": return "boolean" == typeof t ? null : "expected true or false";
		case "integer": return "number" == typeof t && Number.isInteger(t) ? void 0 !== a.minimum && t < a.minimum ? `below the minimum ${String(a.minimum)}` : void 0 !== a.maximum && t > a.maximum ? `above the maximum ${String(a.maximum)}` : null : "expected an integer";
		case "open_enum":
		case "enum": return "string" == typeof t && a.members.includes(t) ? null : `not one of ${a.members.join(", ")}`;
		case "string": return "string" != typeof t ? "expected a string" : a.pattern && !new RegExp(a.pattern).test(t) ? `does not match ${a.pattern}` : null;
		case "list": {
			if (!Array.isArray(t)) return "expected a list";
			if (0 === a.members.length) return null;
			const e = t.filter((e) => "string" != typeof e || !a.members.includes(e));
			return 0 === e.length ? null : `${e.map(String).join(", ")} are not among ${a.members.join(", ")}`;
		}
		case "object": return null === t || "object" != typeof t || Array.isArray(t) ? "expected an object" : function(e, t) {
			if (void 0 !== e.values) for (const [i, n] of Object.entries(t)) {
				const t = re(e.values, n);
				if (null !== t) return `${i}: ${t}`;
			}
			for (const [i, n] of Object.entries(e.fields ?? {})) {
				const a = t[i];
				if ((null == a || a === Number.POSITIVE_INFINITY) && e.optionalFields?.includes(i)) continue;
				const r = re(n, a);
				if (null !== r) return `${i} ${r}`;
			}
			let a = null, r = null;
			for (const i of e.ladder ?? []) {
				const e = t[i];
				if (null != e && e !== Number.POSITIVE_INFINITY) {
					if (null !== r) return `${i} needs ${r}`;
					if (null !== a && e <= a[1]) return `${i} must be above ${a[0]}`;
					a = [i, e];
				} else r ??= i;
			}
			return null;
		}(a, t);
		default: return "unhandled range kind";
	}
}
const ie = "__legacy__", ne = "__legacy_dr__", oe = "__persisted_store_state", se = Object.values($).flatMap((e) => {
	const t = W[e.range];
	return "list" === t?.kind && t.members.length > 0 ? [{
		extras: e.storeKeys.extras,
		zustand: e.storeKeys.zustand,
		members: new Set(t.members)
	}] : [];
});
function le(e, t) {
	let a = e;
	for (const r of se) {
		const i = r[t], n = void 0 === i ? void 0 : e[i];
		if (void 0 === i || !Array.isArray(n)) continue;
		const o = n.filter((e) => "string" == typeof e && r.members.has(e));
		o.length !== n.length && (a = {
			...a,
			[i]: o
		});
	}
	return a;
}
function ce(e) {
	if (void 0 === e) return e;
	const t = e.extraSettings;
	if (null === t || "object" != typeof t) return e;
	let a = le(t, "extras");
	if ("__persisted_store_state" in a) {
		const e = function(e) {
			if ("string" != typeof e) return e;
			try {
				const t = JSON.parse(e), a = t?.state;
				if (null === a || "object" != typeof a || Array.isArray(a)) return e;
				const r = le(a, "zustand");
				return r === a ? e : JSON.stringify({
					...t,
					state: r
				});
			} catch {
				return e;
			}
		}(a[oe]);
		e !== a.__persisted_store_state && (a = {
			...a,
			[oe]: e
		});
	}
	return a === t ? e : {
		...e,
		extraSettings: a
	};
}
const ue = {
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
}, de = { PROOF_PENDING: "proof_pending" }, pe = { UTC: "utc" }, _e = {
	GT3X_BINARY: "gt3x_binary",
	ACTIGRAPH_RAW_CSV: "actigraph_raw_csv",
	ACTIGRAPH_EPOCHED_CSV: "actigraph_epoched_csv",
	GENEACTIV_BIN: "geneactiv_bin",
	GENEACTIV_RAW_CSV: "geneactiv_raw_csv",
	EPOCHS_60S: "epochs_60s",
	EPOCHS_5S_GGIR: "epochs_5s_ggir",
	GGIR_5S_UPLOAD: "ggir_5s_upload",
	ACTLUMUS_TXT: "actlumus_txt",
	ACTTRUST_TXT: "acttrust_txt"
}, me = {
	MAIN_SLEEP: "MAIN_SLEEP",
	NAP: "NAP",
	MANUAL: "manual",
	SENSOR: "sensor"
}, ye = {
	CHOI_2011: "choi_2011",
	FLAT_ACTIVITY: "flat_activity",
	GT3X_CAPSENSE: "gt3x_capsense",
	ACTIWARE_OFF_WRIST: "actiware_off_wrist",
	DETACH_NONWEAR: "detach_nonwear",
	VAN_HEES_2013: "van_hees_2013",
	VAN_HEES_2023: "van_hees_2023",
	GGIR_SAVED: "ggir_saved",
	GGIR_PART2_INVALID: "ggir_part2_invalid",
	CHOI_2012: "choi_2012",
	TROIANO_2008: "troiano_2008",
	AHMADI_2020: "ahmadi_2020",
	SKOVGAARD_2023: "skovgaard_2023"
}, fe = {
	DIARY: "diary",
	L5: "l5",
	HDCZA: "hdcza",
	SMART: "smart",
	LONGEST_BOUT: "longest_bout",
	EVENT_MARKER: "event_marker",
	ACTIWARE_REST_INTERVAL: "actiware_rest_interval",
	NONE: "none"
}, ge = {
	RULE_1_INCLUDE_ACTIVITY: "rule_1_include_activity",
	RULE_2_SMALL_PERIODS: "rule_2_small_periods",
	RULE_3_EXTEND_BEFORE_DIARY: "rule_3_extend_before_diary",
	RULE_4_NAP_VARIATION: "rule_4_nap_variation",
	RULE_5_CHOI_SPIKE: "rule_5_choi_spike",
	RULE_6_EQUIDISTANT: "rule_6_equidistant",
	RULE_7_CROSS_DAY_NONWEAR: "rule_7_cross_day_nonwear",
	RULE_8_ONSET_BEFORE_INBED: "rule_8_onset_before_inbed",
	RULE_9_NAP_REGULARITY: "rule_9_nap_regularity",
	RULE_10_REGULARITY_OVERRIDE: "rule_10_regularity_override",
	RULE_11_RELIABILITY_FALLBACK: "rule_11_reliability_fallback"
}, he = {
	LEGACY: "legacy",
	REGULARITY_V2: "regularity_v2",
	GGIR_PART4: "ggir_part4"
}, ve = {
	NONE: "none",
	WEBSTER: "webster"
}, be = {
	CONSECUTIVE_ONSET3S_OFFSET5S: "consecutive_onset3s_offset5s",
	CONSECUTIVE_ONSET5S_OFFSET10S: "consecutive_onset5s_offset10s",
	TUDOR_LOCKE_2014: "tudor_locke_2014"
};
function we(e, t, a) {
	const r = Number(e), i = Number(t), n = Number(a), o = /* @__PURE__ */ new Date(0);
	return o.setUTCFullYear(r, i - 1, n), r < 1 || o.getUTCFullYear() !== r || o.getUTCMonth() !== i - 1 || o.getUTCDate() !== n ? null : `${String(e).padStart(4, "0")}-${t.padStart(2, "0")}-${a.padStart(2, "0")}`;
}
function Se(e) {
	const t = e.trim().split(/[T ]/)[0] ?? "";
	let a;
	if (a = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(t), a) return we(a[1] ?? "", a[2] ?? "", a[3] ?? "");
	if (a = /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/.exec(t), a && Number.parseInt(a[1] ?? "0", 10) > 12) return we(a[3] ?? "", a[2] ?? "", a[1] ?? "");
	if (a = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(t), a) return we(a[3] ?? "", a[1] ?? "", a[2] ?? "");
	if (a = /^(\d{1,2})\/(\d{1,2})\/(\d{2})$/.exec(t), a) {
		const e = parseInt(a[3] ?? "0", 10);
		return we(e >= 50 ? 1900 + e : 2e3 + e, a[1] ?? "", a[2] ?? "");
	}
	return a = /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/.exec(t), a ? we(a[1] ?? "", a[2] ?? "", a[3] ?? "") : (a = /^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec(t), a ? we(a[3] ?? "", a[1] ?? "", a[2] ?? "") : null);
}
function Ce(e) {
	const t = e.replace(/\\/g, "/").split("/");
	return (t[t.length - 1] ?? e).toLowerCase();
}
function Ie(e) {
	const t = Ce(e), a = t.lastIndexOf(".");
	return a > 0 ? t.slice(0, a) : t;
}
function ke(e) {
	return e.replace(/\.RData$/i, "").replace(/\.(csv|gt3x|bin|cwa)(\.gz)?$/i, "");
}
const Ae = /* @__PURE__ */ new Set([
	"",
	"nan",
	"none",
	"null",
	"nat"
]), xe = /^sc[-_ ]*0*(\d+)$/i;
function Ee(e) {
	let t = e.trim();
	if (Ae.has(t.toLowerCase())) return null;
	t = t.replace(/\s+/gu, " "), /^\d+\.0+$/u.test(t) && (t = t.split(".", 1)[0]);
	const a = xe.exec(t);
	return a ? `sc-${a[1].replace(/^0+(?=\d)/u, "")}` : t.toLowerCase();
}
function De(e) {
	return Ee(e) ?? "";
}
const Te = [".rdata", ".rda"];
function Be(e) {
	const t = e.replace(/\\/g, "/").split("/"), a = t[t.length - 1] ?? e, r = a.toLowerCase();
	if (!r.startsWith("meta_")) return e;
	for (const i of Te) if (r.endsWith(i)) return a.slice(5, a.length - i.length) || e;
	return e;
}
const ze = /^sc[-_ ]*0*\d+(?=$|[-_\s.])/i, Re = /(?:^|[-_\s])(T\d{1,2})(?=$|[-_\s(])/i;
function Me(e) {
	const t = Be(e).replace(/\\/g, "/"), a = t.split("/").pop() ?? t, r = a.lastIndexOf("."), i = (r > 0 ? a.slice(0, r) : a).trim();
	if (!i) return null;
	const n = (i.split(/\s*\(/, 1)[0] ?? i).trim(), o = ze.exec(n);
	if (o) return o[0];
	const s = Re.exec(n);
	return void 0 !== s?.index ? n.slice(0, n.indexOf(s[1] ?? "", s.index)).replace(/[\s\-_]+$/, "") || null : (n.split(/\s+/, 1)[0] ?? "").replace(/[-_]?T\d{1,2}$/i, "").replace(/[-_]+$/, "") || null;
}
function Oe(e) {
	return Ee((e.participantId?.length ? e.participantId : Me(e.filename)) ?? "") ?? "";
}
function Pe(e) {
	const t = Be(e.filename);
	return [...new Set([
		Oe(e),
		...e.participantId ? [e.participantId] : [],
		Ce(e.filename),
		Ce(t),
		Ie(e.filename),
		Ie(t)
	].map((e) => e.trim().toLowerCase()))];
}
function Ne(e) {
	return 65279 === e.charCodeAt(0) ? e.slice(1) : e;
}
function Ke(e, t = !0, a = Number.POSITIVE_INFINITY) {
	const r = [];
	let i = "", n = !1, o = 1, s = 1;
	for (let l = 0; l < e.length; l++) {
		const c = e.charAt(l);
		if ("\"" === c) {
			i += c, n && "\"" === e.charAt(l + 1) ? (i += "\"", l++) : n = !n;
			continue;
		}
		if ("\r" !== c && "\n" !== c) {
			i += c;
			continue;
		}
		if (!t && "\r" === c && l === e.length - 1) {
			i += c;
			break;
		}
		const u = "\r" === c && "\n" === e.charAt(l + 1) ? "\r\n" : c;
		if ("\r\n" === u && l++, n) i += u;
		else {
			if (r.push({
				text: i,
				sourceRow: s
			}), r.length >= a) return {
				records: r,
				unterminatedQuotedField: !1
			};
			i = "", s = o + 1;
		}
		o++;
	}
	return t && i.length > 0 && !n && r.push({
		text: i,
		sourceRow: s
	}), {
		records: r,
		unterminatedQuotedField: n,
		...t ? {} : { remainder: i }
	};
}
const Le = [
	",",
	"	",
	";"
];
function je(e) {
	const t = Ne(e).split(/\r\n|\r|\n/).find((e) => e.trim().length > 0) ?? "", a = new Map(Le.map((e) => [e, 0]));
	let r = !1;
	for (const n of t) "\"" === n ? r = !r : !r && a.has(n) && a.set(n, (a.get(n) ?? 0) + 1);
	let i = ",";
	for (const n of Le) (a.get(n) ?? 0) > (a.get(i) ?? 0) && (i = n);
	return i;
}
function Ue(e, t) {
	const a = [];
	let r = "", i = !1;
	for (let n = 0; n < e.length; n++) {
		const o = e.charAt(n);
		"\"" === o ? i && "\"" === e.charAt(n + 1) ? (r += "\"", n++) : i = !i : o !== t || i ? r += o : (a.push(r), r = "");
	}
	return a.push(r), a;
}
function Ge(e, t = ",") {
	return Ue(e, t);
}
function Fe(e, t = ",") {
	return Ue(e, t).map((e) => e.trim());
}
function Ve(e) {
	const t = function(e) {
		return e.length > 0 && /^[=+\-@\t\r]/.test(e) ? `'${e}` : e;
	}(e);
	return t.includes(",") || t.includes("\"") || t.includes("\n") || t.includes("\r") ? `"${t.replace(/"/g, "\"\"")}"` : t;
}
const qe = {
	main_sleep_on_invalid_night: {
		severity: "error",
		replayOnly: !1
	},
	multiple_main_sleep: {
		severity: "error",
		replayOnly: !1
	},
	first_marker_not_main_sleep: {
		severity: "warn",
		replayOnly: !1
	},
	marker_index_noncontiguous: {
		severity: "error",
		replayOnly: !1
	},
	boundaries_disordered: {
		severity: "error",
		replayOnly: !1
	},
	nonwear_flag_with_markers: {
		severity: "error",
		replayOnly: !1
	},
	manual_nonwear_in_sleep: {
		severity: "error",
		replayOnly: !1
	},
	marker_limit_exceeded: {
		severity: "error",
		replayOnly: !1
	},
	split_not_strictly_inside: {
		severity: "error",
		replayOnly: !1
	},
	merge_no_neighbor: {
		severity: "error",
		replayOnly: !1
	},
	mutation_on_read_only_view: {
		severity: "error",
		replayOnly: !1
	},
	undo_beyond_history: {
		severity: "error",
		replayOnly: !0
	},
	redo_beyond_history: {
		severity: "error",
		replayOnly: !0
	}
}, He = {
	access_changed: {
		anchor: "workspace",
		payloadKeys: [
			"subject",
			"scope",
			"before",
			"after"
		],
		payloadTypes: {
			subject: "string",
			scope: "string",
			before: "json",
			after: "json"
		},
		localPayloadKeys: [
			"subject",
			"scope",
			"before",
			"after"
		],
		localPayloadTypes: {
			subject: "string",
			scope: "string",
			before: "json",
			after: "json"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "access_control",
		label: "Access Changed",
		icon: "🔑",
		severity: "mutation",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	actiware_rest_edited: {
		anchor: "file",
		payloadKeys: [
			"edit",
			"from",
			"to"
		],
		payloadTypes: {
			edit: "string",
			from: "json",
			to: "json"
		},
		localPayloadKeys: [
			"edit",
			"from",
			"to"
		],
		localPayloadTypes: {
			edit: "string",
			from: "json",
			to: "json"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "marker_mutation",
		label: "Actiware Rest Edited",
		icon: "↔",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	app_version_changed: {
		anchor: "workspace",
		payloadKeys: ["before", "after"],
		payloadTypes: {
			before: "json",
			after: "json"
		},
		localPayloadKeys: ["before", "after"],
		localPayloadTypes: {
			before: "json",
			after: "json"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "App Version Changed",
		icon: "🏷",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	assignment_changed: {
		anchor: "workspace",
		payloadKeys: [
			"subject",
			"scope",
			"change",
			"fileIds",
			"fileCount"
		],
		payloadTypes: {
			subject: "string",
			scope: "string",
			change: "string",
			fileIds: "json",
			fileCount: "nullable_integer"
		},
		localPayloadKeys: [
			"subject",
			"scope",
			"change",
			"fileIds",
			"fileCount"
		],
		localPayloadTypes: {
			subject: "string",
			scope: "string",
			change: "string",
			fileIds: "json",
			fileCount: "nullable_integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "access_control",
		label: "File Assignment Changed",
		icon: "🔗",
		severity: "mutation",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	audit_chain_reanchored: {
		anchor: "workspace",
		payloadKeys: [
			"restoreId",
			"restoredRows",
			"firstRestoredHash",
			"lastRestoredHash"
		],
		payloadTypes: {
			restoreId: "string",
			restoredRows: "integer",
			firstRestoredHash: "string",
			lastRestoredHash: "string"
		},
		localPayloadKeys: [
			"restoreId",
			"restoredRows",
			"firstRestoredHash",
			"lastRestoredHash"
		],
		localPayloadTypes: {
			restoreId: "string",
			restoredRows: "integer",
			firstRestoredHash: "string",
			lastRestoredHash: "string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Audit Chain Re-anchored",
		icon: "⛓",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	auto_nonwear_applied: {
		anchor: "session",
		payloadKeys: ["count", "markers"],
		payloadTypes: {
			count: "integer",
			markers: "json"
		},
		localPayloadKeys: ["count", "markers"],
		localPayloadTypes: {
			count: "integer",
			markers: "json"
		},
		stateEffect: ["nonwear_markers", "explicit_no_nonwear"],
		stateDeltaKeys: [],
		guards: [
			"marker_limit_exceeded",
			"nonwear_flag_with_markers",
			"marker_index_noncontiguous"
		],
		stateKeyframe: !0,
		nightDecision: !0,
		category: "algorithm_execution",
		label: "Auto-Nonwear Applied",
		icon: "⚡",
		severity: "mutation",
		planes: "both",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	auto_score_applied: {
		anchor: "session",
		payloadKeys: [
			"algorithm",
			"sleepCount",
			"napCount",
			"markers",
			"sleepPeriodDetectionConfig"
		],
		payloadTypes: {
			algorithm: "string",
			sleepCount: "integer",
			napCount: "integer",
			markers: "json",
			sleepPeriodDetectionConfig: "json"
		},
		localPayloadKeys: [
			"algorithm",
			"sleepCount",
			"napCount",
			"markers",
			"sleepPeriodDetectionConfig"
		],
		localPayloadTypes: {
			algorithm: "string",
			sleepCount: "integer",
			napCount: "integer",
			markers: "json",
			sleepPeriodDetectionConfig: "json"
		},
		stateEffect: ["sleep_markers"],
		stateDeltaKeys: [],
		guards: [
			"marker_limit_exceeded",
			"multiple_main_sleep",
			"main_sleep_on_invalid_night",
			"marker_index_noncontiguous"
		],
		stateKeyframe: !0,
		nightDecision: !0,
		category: "algorithm_execution",
		label: "Auto-Score Applied",
		icon: "⚡",
		severity: "mutation",
		planes: "both",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	candidate_copied: {
		anchor: "session",
		payloadKeys: [
			"kind",
			"candidateId",
			"label",
			"sleepCount",
			"nonwearCount"
		],
		payloadTypes: {
			kind: "string",
			candidateId: "nullable_integer",
			label: "string",
			sleepCount: "integer",
			nonwearCount: "integer"
		},
		localPayloadKeys: [
			"kind",
			"candidateId",
			"label",
			"sleepCount",
			"nonwearCount"
		],
		localPayloadTypes: {
			kind: "string",
			candidateId: "nullable_integer",
			label: "string",
			sleepCount: "integer",
			nonwearCount: "integer"
		},
		stateEffect: [
			"sleep_markers",
			"nonwear_markers",
			"is_invalid_night",
			"explicit_no_nonwear"
		],
		stateDeltaKeys: [],
		guards: [
			"marker_limit_exceeded",
			"multiple_main_sleep",
			"main_sleep_on_invalid_night",
			"marker_index_noncontiguous",
			"nonwear_flag_with_markers"
		],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "annotation",
		label: "Candidate Copied",
		icon: "📋",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	consensus_resolved: {
		anchor: "file",
		payloadKeys: ["kind"],
		payloadTypes: { kind: "string" },
		localPayloadKeys: ["kind"],
		localPayloadTypes: { kind: "string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "consensus",
		label: "Consensus Resolved",
		icon: "✔",
		severity: "lifecycle",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	consensus_toggled: {
		anchor: "session",
		payloadKeys: ["value"],
		payloadTypes: { value: "boolean" },
		localPayloadKeys: ["value"],
		localPayloadTypes: { value: "boolean" },
		stateEffect: ["needs_consensus"],
		stateDeltaKeys: ["value"],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "consensus",
		label: "Consensus Toggled",
		icon: "🤝",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	consensus_vote_cast: {
		anchor: "session",
		payloadKeys: [
			"kind",
			"candidateId",
			"leadingCandidateId",
			"totalVotes"
		],
		payloadTypes: {
			kind: "string",
			candidateId: "nullable_integer",
			leadingCandidateId: "nullable_integer",
			totalVotes: "integer"
		},
		localPayloadKeys: [
			"kind",
			"candidateId",
			"leadingCandidateId",
			"totalVotes"
		],
		localPayloadTypes: {
			kind: "string",
			candidateId: "nullable_integer",
			leadingCandidateId: "nullable_integer",
			totalVotes: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "consensus",
		label: "Consensus Vote Cast",
		icon: "🗳",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	data_exported: {
		anchor: "workspace",
		payloadKeys: [
			"subject",
			"scope",
			"format",
			"filename",
			"byteSize",
			"rowCount",
			"dayCount",
			"fileCount",
			"exportId"
		],
		payloadTypes: {
			subject: "string",
			scope: "string",
			format: "string",
			filename: "string",
			byteSize: "integer",
			rowCount: "nullable_integer",
			dayCount: "nullable_integer",
			fileCount: "nullable_integer",
			exportId: "nullable_string"
		},
		localPayloadKeys: [
			"subject",
			"scope",
			"format",
			"filename",
			"byteSize",
			"rowCount",
			"dayCount",
			"fileCount",
			"exportId"
		],
		localPayloadTypes: {
			subject: "string",
			scope: "string",
			format: "string",
			filename: "string",
			byteSize: "integer",
			rowCount: "nullable_integer",
			dayCount: "nullable_integer",
			fileCount: "nullable_integer",
			exportId: "nullable_string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "data_egress",
		label: "Data Exported",
		icon: "⤴",
		severity: "lifecycle",
		planes: "both",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_attached: {
		anchor: "file",
		payloadKeys: ["sourceKey"],
		payloadTypes: { sourceKey: "nullable_string" },
		localPayloadKeys: ["sourceKey"],
		localPayloadTypes: { sourceKey: "nullable_string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Attached",
		icon: "🔗",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_changed: {
		anchor: "file",
		payloadKeys: ["change", "fields"],
		payloadTypes: {
			change: "string",
			fields: "string_list"
		},
		localPayloadKeys: ["sourceKey", "fields"],
		localPayloadTypes: {
			sourceKey: "nullable_string",
			fields: "string_list"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Changed",
		icon: "✏",
		severity: "mutation",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_decision_recorded: {
		anchor: "workspace",
		payloadKeys: [
			"sourceSha256",
			"ruleKind",
			"scope",
			"outcome",
			"nights"
		],
		payloadTypes: {
			sourceSha256: "string",
			ruleKind: "json",
			scope: "string",
			outcome: "json",
			nights: "integer"
		},
		localPayloadKeys: [
			"sourceSha256",
			"ruleKind",
			"scope",
			"outcome",
			"nights"
		],
		localPayloadTypes: {
			sourceSha256: "string",
			ruleKind: "json",
			scope: "string",
			outcome: "json",
			nights: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Decision Recorded",
		icon: "🗳",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_decision_state_restored: {
		anchor: "workspace",
		payloadKeys: [
			"sourceSha256",
			"restorePoint",
			"reflagged",
			"unflagged",
			"nights"
		],
		payloadTypes: {
			sourceSha256: "string",
			restorePoint: "string",
			reflagged: "integer",
			unflagged: "integer",
			nights: "integer"
		},
		localPayloadKeys: [
			"sourceSha256",
			"restorePoint",
			"reflagged",
			"unflagged",
			"nights"
		],
		localPayloadTypes: {
			sourceSha256: "string",
			restorePoint: "string",
			reflagged: "integer",
			unflagged: "integer",
			nights: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Decision State Restored",
		icon: "⏮",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_decision_state_saved: {
		anchor: "workspace",
		payloadKeys: [
			"sourceSha256",
			"restorePoint",
			"decisions"
		],
		payloadTypes: {
			sourceSha256: "string",
			restorePoint: "string",
			decisions: "json"
		},
		localPayloadKeys: [
			"sourceSha256",
			"restorePoint",
			"decisions"
		],
		localPayloadTypes: {
			sourceSha256: "string",
			restorePoint: "string",
			decisions: "json"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Decision State Saved",
		icon: "📌",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_decisions_reset: {
		anchor: "workspace",
		payloadKeys: [
			"sourceSha256",
			"decisions",
			"nights"
		],
		payloadTypes: {
			sourceSha256: "string",
			decisions: "json",
			nights: "integer"
		},
		localPayloadKeys: [
			"sourceSha256",
			"decisions",
			"nights"
		],
		localPayloadTypes: {
			sourceSha256: "string",
			decisions: "json",
			nights: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Decisions Reset",
		icon: "♻",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_discarded: {
		anchor: "workspace",
		payloadKeys: ["sourceKey", "analysisDate"],
		payloadTypes: {
			sourceKey: "nullable_string",
			analysisDate: "nullable_string"
		},
		localPayloadKeys: ["sourceKey", "analysisDate"],
		localPayloadTypes: {
			sourceKey: "nullable_string",
			analysisDate: "nullable_string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Discarded",
		icon: "🗑",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_repaired: {
		anchor: "workspace",
		payloadKeys: ["applied", "fields"],
		payloadTypes: {
			applied: "integer",
			fields: "string_list"
		},
		localPayloadKeys: ["applied", "fields"],
		localPayloadTypes: {
			applied: "integer",
			fields: "string_list"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Repaired",
		icon: "🩹",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_session_saved: {
		anchor: "workspace",
		payloadKeys: [
			"sourceSha256Prefix",
			"status",
			"step"
		],
		payloadTypes: {
			sourceSha256Prefix: "string",
			status: "string",
			step: "string"
		},
		localPayloadKeys: [
			"sourceSha256Prefix",
			"status",
			"step"
		],
		localPayloadTypes: {
			sourceSha256Prefix: "string",
			status: "string",
			step: "string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary session saved",
		icon: "🧪",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_staged: {
		anchor: "workspace",
		payloadKeys: [
			"staged",
			"replaced",
			"skipped"
		],
		payloadTypes: {
			staged: "integer",
			replaced: "integer",
			skipped: "integer"
		},
		localPayloadKeys: [
			"staged",
			"replaced",
			"skipped"
		],
		localPayloadTypes: {
			staged: "integer",
			replaced: "integer",
			skipped: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Staged",
		icon: "🛏",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_workspace_cleared: {
		anchor: "workspace",
		payloadKeys: [
			"staged",
			"canonical",
			"occurrences"
		],
		payloadTypes: {
			staged: "integer",
			canonical: "integer",
			occurrences: "integer"
		},
		localPayloadKeys: [
			"staged",
			"canonical",
			"occurrences"
		],
		localPayloadTypes: {
			staged: "integer",
			canonical: "integer",
			occurrences: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Workspace Cleared",
		icon: "🧹",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	export_cancelled: {
		anchor: "workspace",
		payloadKeys: [
			"exportId",
			"filename",
			"reason"
		],
		payloadTypes: {
			exportId: "string",
			filename: "string",
			reason: "string"
		},
		localPayloadKeys: [
			"exportId",
			"filename",
			"reason"
		],
		localPayloadTypes: {
			exportId: "string",
			filename: "string",
			reason: "string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "data_egress",
		label: "Export Cancelled",
		icon: "⤫",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	export_started: {
		anchor: "workspace",
		payloadKeys: [
			"subject",
			"scope",
			"format",
			"filename",
			"byteSize",
			"rowCount",
			"dayCount",
			"fileCount",
			"exportId"
		],
		payloadTypes: {
			subject: "string",
			scope: "string",
			format: "string",
			filename: "string",
			byteSize: "integer",
			rowCount: "nullable_integer",
			dayCount: "nullable_integer",
			fileCount: "nullable_integer",
			exportId: "string"
		},
		localPayloadKeys: [
			"subject",
			"scope",
			"format",
			"filename",
			"byteSize",
			"rowCount",
			"dayCount",
			"fileCount",
			"exportId"
		],
		localPayloadTypes: {
			subject: "string",
			scope: "string",
			format: "string",
			filename: "string",
			byteSize: "integer",
			rowCount: "nullable_integer",
			dayCount: "nullable_integer",
			fileCount: "nullable_integer",
			exportId: "string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "data_egress",
		label: "Export Started",
		icon: "⇢",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	file_deleted: {
		anchor: "file",
		payloadKeys: ["filename"],
		payloadTypes: { filename: "string" },
		localPayloadKeys: ["filename"],
		localPayloadTypes: { filename: "string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "file_operation",
		label: "File Deleted",
		icon: "🗑",
		severity: "lifecycle",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	file_processed: {
		anchor: "file",
		payloadKeys: ["filename"],
		payloadTypes: { filename: "string" },
		localPayloadKeys: ["filename"],
		localPayloadTypes: { filename: "string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "file_operation",
		label: "File Processed",
		icon: "⚙",
		severity: "lifecycle",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	file_reprocessed: {
		anchor: "file",
		payloadKeys: ["filename"],
		payloadTypes: { filename: "string" },
		localPayloadKeys: ["filename"],
		localPayloadTypes: { filename: "string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "file_operation",
		label: "File Reprocessed",
		icon: "🔁",
		severity: "lifecycle",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	file_uploaded: {
		anchor: "file",
		payloadKeys: ["filename"],
		payloadTypes: { filename: "string" },
		localPayloadKeys: ["filename"],
		localPayloadTypes: { filename: "string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "file_operation",
		label: "File Uploaded",
		icon: "⬆",
		severity: "lifecycle",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	invalid_night_toggled: {
		anchor: "session",
		payloadKeys: ["value", "clearedSleepMarkers"],
		payloadTypes: {
			value: "boolean",
			clearedSleepMarkers: "json"
		},
		localPayloadKeys: ["value", "clearedSleepMarkers"],
		localPayloadTypes: {
			value: "boolean",
			clearedSleepMarkers: "json"
		},
		stateEffect: ["is_invalid_night", "sleep_markers"],
		stateDeltaKeys: ["value", "clearedSleepMarkers"],
		guards: ["main_sleep_on_invalid_night", "first_marker_not_main_sleep"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "annotation",
		label: "Invalid Night Toggled",
		icon: "⏸",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	marker_adjusted: {
		anchor: "session",
		payloadKeys: [
			"category",
			"periodIndex",
			"updates"
		],
		payloadTypes: {
			category: "string",
			periodIndex: "integer",
			updates: "json"
		},
		localPayloadKeys: [
			"category",
			"periodIndex",
			"updates"
		],
		localPayloadTypes: {
			category: "string",
			periodIndex: "integer",
			updates: "json"
		},
		stateEffect: [
			"sleep_markers",
			"nonwear_markers",
			"explicit_no_nonwear"
		],
		stateDeltaKeys: [
			"category",
			"periodIndex",
			"updates"
		],
		guards: ["mutation_on_read_only_view", "boundaries_disordered"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Marker Adjusted",
		icon: "⇄",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	marker_deleted: {
		anchor: "session",
		payloadKeys: [
			"category",
			"periodIndex",
			"before"
		],
		payloadTypes: {
			category: "string",
			periodIndex: "integer",
			before: "json"
		},
		localPayloadKeys: [
			"category",
			"periodIndex",
			"before"
		],
		localPayloadTypes: {
			category: "string",
			periodIndex: "integer",
			before: "json"
		},
		stateEffect: ["sleep_markers", "nonwear_markers"],
		stateDeltaKeys: [
			"category",
			"periodIndex",
			"before"
		],
		guards: [
			"mutation_on_read_only_view",
			"first_marker_not_main_sleep",
			"marker_index_noncontiguous"
		],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Marker Deleted",
		icon: "×",
		severity: "mutation",
		planes: "both",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	marker_moved: {
		anchor: "session",
		payloadKeys: ["before", "after"],
		payloadTypes: {
			before: "json",
			after: "json"
		},
		localPayloadKeys: ["before", "after"],
		localPayloadTypes: {
			before: "json",
			after: "json"
		},
		stateEffect: ["sleep_markers", "nonwear_markers"],
		stateDeltaKeys: [],
		guards: ["boundaries_disordered", "marker_index_noncontiguous"],
		stateKeyframe: !0,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Marker Moved",
		icon: "↔",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	marker_placed: {
		anchor: "session",
		payloadKeys: ["category", "periodIndex"],
		payloadTypes: {
			category: "string",
			periodIndex: "integer"
		},
		localPayloadKeys: ["category", "periodIndex"],
		localPayloadTypes: {
			category: "string",
			periodIndex: "integer"
		},
		stateEffect: [
			"sleep_markers",
			"nonwear_markers",
			"explicit_no_nonwear"
		],
		stateDeltaKeys: ["category", "periodIndex"],
		guards: [
			"mutation_on_read_only_view",
			"marker_limit_exceeded",
			"multiple_main_sleep",
			"main_sleep_on_invalid_night",
			"boundaries_disordered",
			"marker_index_noncontiguous"
		],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Marker Placed",
		icon: "+",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	markers_cleared: {
		anchor: "session",
		payloadKeys: ["sleepCount", "nonwearCount"],
		payloadTypes: {
			sleepCount: "integer",
			nonwearCount: "integer"
		},
		localPayloadKeys: ["sleepCount", "nonwearCount"],
		localPayloadTypes: {
			sleepCount: "integer",
			nonwearCount: "integer"
		},
		stateEffect: ["sleep_markers", "nonwear_markers"],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Markers Cleared",
		icon: "⌫",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	markers_saved: {
		anchor: "session",
		payloadKeys: [
			"sleepCount",
			"nonwearCount",
			"notes",
			"isInvalidNight",
			"explicitNoNonwear",
			"sleepPeriodDetectionConfig"
		],
		payloadTypes: {
			sleepCount: "integer",
			nonwearCount: "integer",
			notes: "json",
			isInvalidNight: "boolean",
			explicitNoNonwear: "boolean",
			sleepPeriodDetectionConfig: "json"
		},
		localPayloadKeys: [
			"sleepCount",
			"nonwearCount",
			"notes",
			"isInvalidNight",
			"explicitNoNonwear",
			"sleepPeriodDetectionConfig"
		],
		localPayloadTypes: {
			sleepCount: "integer",
			nonwearCount: "integer",
			notes: "json",
			isInvalidNight: "boolean",
			explicitNoNonwear: "boolean",
			sleepPeriodDetectionConfig: "json"
		},
		stateEffect: ["saved"],
		stateDeltaKeys: ["sleepCount", "nonwearCount"],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "scoring_lifecycle",
		label: "Markers Saved",
		icon: "💾",
		severity: "lifecycle",
		planes: "both",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	markers_synced: {
		anchor: "workspace",
		payloadKeys: [
			"pushed",
			"pulled",
			"conflicts",
			"errorCount"
		],
		payloadTypes: {
			pushed: "integer",
			pulled: "integer",
			conflicts: "integer",
			errorCount: "integer"
		},
		localPayloadKeys: [
			"pushed",
			"pulled",
			"conflicts",
			"errorCount"
		],
		localPayloadTypes: {
			pushed: "integer",
			pulled: "integer",
			conflicts: "integer",
			errorCount: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Markers Synced",
		icon: "🔄",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	no_nonwear_toggled: {
		anchor: "session",
		payloadKeys: ["value"],
		payloadTypes: { value: "boolean" },
		localPayloadKeys: ["value"],
		localPayloadTypes: { value: "boolean" },
		stateEffect: ["explicit_no_nonwear", "nonwear_markers"],
		stateDeltaKeys: ["value"],
		guards: ["nonwear_flag_with_markers"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "annotation",
		label: "No Nonwear Toggled",
		icon: "⏭",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	notes_changed: {
		anchor: "session",
		payloadKeys: [
			"before",
			"after",
			"beforeLength",
			"afterLength"
		],
		payloadTypes: {
			before: "string",
			after: "string",
			beforeLength: "integer",
			afterLength: "integer"
		},
		localPayloadKeys: [
			"before",
			"after",
			"beforeLength",
			"afterLength"
		],
		localPayloadTypes: {
			before: "string",
			after: "string",
			beforeLength: "integer",
			afterLength: "integer"
		},
		stateEffect: ["notes"],
		stateDeltaKeys: ["before", "after"],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "annotation",
		label: "Notes Changed",
		icon: "📝",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	preset_changed: {
		anchor: "workspace",
		payloadKeys: [
			"family",
			"change",
			"preset",
			"before",
			"count"
		],
		payloadTypes: {
			family: "string",
			change: "string",
			preset: "json",
			before: "json",
			count: "integer"
		},
		localPayloadKeys: [
			"family",
			"change",
			"preset",
			"before",
			"count"
		],
		localPayloadTypes: {
			family: "string",
			change: "string",
			preset: "json",
			before: "json",
			count: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Preset Changed",
		icon: "🎛",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	redo: {
		anchor: "session",
		payloadKeys: [],
		payloadTypes: {},
		localPayloadKeys: [],
		localPayloadTypes: {},
		stateEffect: [
			"sleep_markers",
			"nonwear_markers",
			"is_invalid_night",
			"explicit_no_nonwear",
			"needs_consensus",
			"notes"
		],
		stateDeltaKeys: [],
		guards: ["mutation_on_read_only_view", "redo_beyond_history"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "scoring_lifecycle",
		label: "Redo",
		icon: "↪",
		severity: "navigation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	session_end: {
		anchor: "session",
		payloadKeys: [],
		payloadTypes: {},
		localPayloadKeys: [],
		localPayloadTypes: {},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "scoring_lifecycle",
		label: "Session End",
		icon: "■",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	session_start: {
		anchor: "session",
		payloadKeys: [
			"sleepMarkers",
			"nonwearMarkers",
			"isInvalidNight",
			"explicitNoNonwear",
			"needsConsensus",
			"notes"
		],
		payloadTypes: {
			sleepMarkers: "json",
			nonwearMarkers: "json",
			isInvalidNight: "boolean",
			explicitNoNonwear: "boolean",
			needsConsensus: "boolean",
			notes: "json"
		},
		localPayloadKeys: [
			"sleepMarkers",
			"nonwearMarkers",
			"isInvalidNight",
			"explicitNoNonwear",
			"needsConsensus",
			"notes"
		],
		localPayloadTypes: {
			sleepMarkers: "json",
			nonwearMarkers: "json",
			isInvalidNight: "boolean",
			explicitNoNonwear: "boolean",
			needsConsensus: "boolean",
			notes: "json"
		},
		stateEffect: [
			"sleep_markers",
			"nonwear_markers",
			"is_invalid_night",
			"explicit_no_nonwear",
			"needs_consensus",
			"notes"
		],
		stateDeltaKeys: [],
		guards: [
			"main_sleep_on_invalid_night",
			"multiple_main_sleep",
			"marker_index_noncontiguous",
			"boundaries_disordered",
			"nonwear_flag_with_markers",
			"manual_nonwear_in_sleep"
		],
		stateKeyframe: !0,
		nightDecision: !1,
		category: "scoring_lifecycle",
		label: "Session Start",
		icon: "▶",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	settings_changed: {
		anchor: "workspace",
		payloadKeys: [
			"scope",
			"key",
			"before",
			"after"
		],
		payloadTypes: {
			scope: "string",
			key: "string",
			before: "json",
			after: "json"
		},
		localPayloadKeys: [
			"scope",
			"key",
			"before",
			"after"
		],
		localPayloadTypes: {
			scope: "string",
			key: "string",
			before: "json",
			after: "json"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Setting Changed",
		icon: "⚙",
		severity: "mutation",
		planes: "both",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	settings_reset: {
		anchor: "workspace",
		payloadKeys: ["scope", "changed"],
		payloadTypes: {
			scope: "string",
			changed: "json"
		},
		localPayloadKeys: ["scope", "changed"],
		localPayloadTypes: {
			scope: "string",
			changed: "json"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Settings Reset",
		icon: "♻",
		severity: "mutation",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	sleep_period_merged: {
		anchor: "session",
		payloadKeys: ["periodIndex", "direction"],
		payloadTypes: {
			periodIndex: "integer",
			direction: "json"
		},
		localPayloadKeys: ["periodIndex", "direction"],
		localPayloadTypes: {
			periodIndex: "integer",
			direction: "json"
		},
		stateEffect: ["sleep_markers"],
		stateDeltaKeys: ["periodIndex", "direction"],
		guards: ["mutation_on_read_only_view", "merge_no_neighbor"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Sleep Period Merged",
		icon: "⑃",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	sleep_period_split: {
		anchor: "session",
		payloadKeys: [
			"periodIndex",
			"at",
			"firstOffset"
		],
		payloadTypes: {
			periodIndex: "integer",
			at: "integer",
			firstOffset: "integer"
		},
		localPayloadKeys: [
			"periodIndex",
			"at",
			"firstOffset"
		],
		localPayloadTypes: {
			periodIndex: "integer",
			at: "integer",
			firstOffset: "integer"
		},
		stateEffect: ["sleep_markers"],
		stateDeltaKeys: [
			"periodIndex",
			"at",
			"firstOffset"
		],
		guards: ["mutation_on_read_only_view", "split_not_strictly_inside"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Sleep Period Split",
		icon: "⑂",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	system_migration: {
		anchor: "workspace",
		payloadKeys: [
			"before",
			"after",
			"subject"
		],
		payloadTypes: {
			before: "json",
			after: "json",
			subject: "string"
		},
		localPayloadKeys: [
			"before",
			"after",
			"subject"
		],
		localPayloadTypes: {
			before: "json",
			after: "json",
			subject: "string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "system",
		label: "System Migration",
		icon: "🛠",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	system_recalculation: {
		anchor: "workspace",
		payloadKeys: ["subject"],
		payloadTypes: { subject: "string" },
		localPayloadKeys: ["subject"],
		localPayloadTypes: { subject: "string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "system",
		label: "System Recalculation",
		icon: "∑",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	transition_flagged: {
		anchor: "session",
		payloadKeys: [
			"intent",
			"guard",
			"disposition"
		],
		payloadTypes: {
			intent: "string",
			guard: "string",
			disposition: "string"
		},
		localPayloadKeys: [
			"intent",
			"guard",
			"disposition"
		],
		localPayloadTypes: {
			intent: "string",
			guard: "string",
			disposition: "string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "scoring_lifecycle",
		label: "Transition Flagged",
		icon: "⚠",
		severity: "info",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	undo: {
		anchor: "session",
		payloadKeys: [],
		payloadTypes: {},
		localPayloadKeys: [],
		localPayloadTypes: {},
		stateEffect: [
			"sleep_markers",
			"nonwear_markers",
			"is_invalid_night",
			"explicit_no_nonwear",
			"needs_consensus",
			"notes"
		],
		stateDeltaKeys: [],
		guards: ["mutation_on_read_only_view", "undo_beyond_history"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "scoring_lifecycle",
		label: "Undo",
		icon: "↩",
		severity: "navigation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	workspace_deleted: {
		anchor: "workspace",
		payloadKeys: [
			"workspaceId",
			"displayName",
			"auditRowsTotal",
			"auditRowsReplicated",
			"auditRowsDestroyed"
		],
		payloadTypes: {
			workspaceId: "string",
			displayName: "string",
			auditRowsTotal: "integer",
			auditRowsReplicated: "integer",
			auditRowsDestroyed: "integer"
		},
		localPayloadKeys: [
			"workspaceId",
			"displayName",
			"auditRowsTotal",
			"auditRowsReplicated",
			"auditRowsDestroyed"
		],
		localPayloadTypes: {
			workspaceId: "string",
			displayName: "string",
			auditRowsTotal: "integer",
			auditRowsReplicated: "integer",
			auditRowsDestroyed: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Workspace Deleted",
		icon: "🧨",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	workspace_recovered: {
		anchor: "workspace",
		payloadKeys: [
			"backupSha256",
			"fromSeq",
			"throughSeq",
			"applied",
			"notReplayed",
			"skipped",
			"recordingsToReimport"
		],
		payloadTypes: {
			backupSha256: "string",
			fromSeq: "integer",
			throughSeq: "integer",
			applied: "integer",
			notReplayed: "integer",
			skipped: "integer",
			recordingsToReimport: "integer"
		},
		localPayloadKeys: [
			"backupSha256",
			"fromSeq",
			"throughSeq",
			"applied",
			"notReplayed",
			"skipped",
			"recordingsToReimport"
		],
		localPayloadTypes: {
			backupSha256: "string",
			fromSeq: "integer",
			throughSeq: "integer",
			applied: "integer",
			notReplayed: "integer",
			skipped: "integer",
			recordingsToReimport: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Workspace Recovered",
		icon: "🛟",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	}
}, We = {
	ACCESS_CHANGED: "access_changed",
	ACTIWARE_REST_EDITED: "actiware_rest_edited",
	APP_VERSION_CHANGED: "app_version_changed",
	ASSIGNMENT_CHANGED: "assignment_changed",
	AUDIT_CHAIN_REANCHORED: "audit_chain_reanchored",
	AUTO_NONWEAR_APPLIED: "auto_nonwear_applied",
	AUTO_SCORE_APPLIED: "auto_score_applied",
	CANDIDATE_COPIED: "candidate_copied",
	CONSENSUS_RESOLVED: "consensus_resolved",
	CONSENSUS_TOGGLED: "consensus_toggled",
	CONSENSUS_VOTE_CAST: "consensus_vote_cast",
	DATA_EXPORTED: "data_exported",
	DIARY_ATTACHED: "diary_attached",
	DIARY_CHANGED: "diary_changed",
	DIARY_DECISION_RECORDED: "diary_decision_recorded",
	DIARY_DECISION_STATE_RESTORED: "diary_decision_state_restored",
	DIARY_DECISION_STATE_SAVED: "diary_decision_state_saved",
	DIARY_DECISIONS_RESET: "diary_decisions_reset",
	DIARY_DISCARDED: "diary_discarded",
	DIARY_REPAIRED: "diary_repaired",
	DIARY_SESSION_SAVED: "diary_session_saved",
	DIARY_STAGED: "diary_staged",
	DIARY_WORKSPACE_CLEARED: "diary_workspace_cleared",
	EXPORT_CANCELLED: "export_cancelled",
	EXPORT_STARTED: "export_started",
	FILE_DELETED: "file_deleted",
	FILE_PROCESSED: "file_processed",
	FILE_REPROCESSED: "file_reprocessed",
	FILE_UPLOADED: "file_uploaded",
	INVALID_NIGHT_TOGGLED: "invalid_night_toggled",
	MARKER_ADJUSTED: "marker_adjusted",
	MARKER_DELETED: "marker_deleted",
	MARKER_MOVED: "marker_moved",
	MARKER_PLACED: "marker_placed",
	MARKERS_CLEARED: "markers_cleared",
	MARKERS_SAVED: "markers_saved",
	MARKERS_SYNCED: "markers_synced",
	NO_NONWEAR_TOGGLED: "no_nonwear_toggled",
	NOTES_CHANGED: "notes_changed",
	PRESET_CHANGED: "preset_changed",
	REDO: "redo",
	SESSION_END: "session_end",
	SESSION_START: "session_start",
	SETTINGS_CHANGED: "settings_changed",
	SETTINGS_RESET: "settings_reset",
	SLEEP_PERIOD_MERGED: "sleep_period_merged",
	SLEEP_PERIOD_SPLIT: "sleep_period_split",
	SYSTEM_MIGRATION: "system_migration",
	SYSTEM_RECALCULATION: "system_recalculation",
	TRANSITION_FLAGGED: "transition_flagged",
	UNDO: "undo",
	WORKSPACE_DELETED: "workspace_deleted",
	WORKSPACE_RECOVERED: "workspace_recovered"
}, $e = "isNoSleep", Ye = "is_no_sleep", Xe = "no_sleep", Je = "no_sleep_toggled", Ze = "main_sleep_on_no_sleep_night", Qe = Object.freeze({ [Je]: "invalid_night_toggled" }), et = Object.freeze({ [Ze]: "main_sleep_on_invalid_night" }), tt = ["stateBefore", "stateAfter"], at = ["before", "after"], rt = [[Ye, "is_invalid_night"], ["no_sleep_dates", "invalid_night_dates"]], it = ["annotations", "candidates"], nt = (Object.freeze({
	camel: $e,
	snake: Ye,
	placement: Xe,
	auditAction: Je,
	exportHeader: "Is No Sleep",
	guard: Ze
}), $e), ot = [
	"isInvalidNight",
	"is_invalid_night",
	$e,
	Ye
];
function st(e) {
	if ("object" != typeof e || null === e) return;
	const t = e;
	for (const a of ot) {
		const e = t[a];
		if ("boolean" == typeof e) return e;
	}
}
function lt(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
function ct(e, t, a) {
	if (!lt(e) || !Object.hasOwn(e, t)) return e;
	const r = Object.entries(e).filter(([e]) => e !== t);
	return Object.hasOwn(e, a) || r.push([a, e[t]]), Object.fromEntries(r);
}
function ut(e, t) {
	const a = e.map(t);
	return a.some((t, a) => t !== e[a]) ? a : e;
}
function dt(e, t, a) {
	return e[t] === a ? e : {
		...e,
		[t]: a
	};
}
function pt(e) {
	return ct(ct(e, $e, "isInvalidNight"), Ye, "is_invalid_night");
}
function _t(e, t) {
	let a = pt(e);
	const r = function(e) {
		return Object.hasOwn(He, e) && He[e].nightDecision;
	}(t) ? [...tt, ...at] : tt;
	for (const n of r) Object.hasOwn(a, n) && (a = dt(a, n, pt(a[n])));
	const i = a.guard;
	return "string" == typeof i && Object.hasOwn(et, i) && (a = dt(a, "guard", et[i])), a;
}
function mt(e, t) {
	const a = _t(e, t), r = a.extra;
	return lt(r) ? dt(a, "extra", _t(r, t)) : a;
}
function yt(e) {
	if (!lt(e)) return e;
	let t = e;
	for (const [n, o] of rt) t = ct(t, n, o);
	const a = t.type, r = t.data, i = t.event_type;
	if ("string" == typeof i && (t = dt(t, "event_type", ht(i))), "string" == typeof a && lt(r)) {
		const e = ht(a);
		t = dt(dt(t, "type", e), "data", mt(r, e));
	}
	return t;
}
const ft = /no_?sleep|NoSleep/i;
function gt(e) {
	if (!ft.test(e)) return null;
	let t;
	try {
		t = JSON.parse(e);
	} catch {
		return null;
	}
	const a = function(e) {
		if (Array.isArray(e)) return ut(e, yt);
		const t = yt(e);
		if (!lt(t)) return t;
		let a = t;
		for (const r of it) {
			const e = a[r];
			Array.isArray(e) && (a = dt(a, r, ut(e, yt)));
		}
		return a;
	}(t);
	return a === t ? null : JSON.stringify(a);
}
function ht(e) {
	return Object.hasOwn(Qe, e) ? Qe[e] : e;
}
function vt(e) {
	const t = ht(e.action), a = e.payload ? mt(e.payload, t) : e.payload;
	return t === e.action && a === e.payload ? e : {
		...e,
		action: t,
		payload: a
	};
}
const bt = {
	actigraph_epoched_csv: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	actigraph_raw_csv: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"sadeh_1994_ggir",
			"cole_kripke_1992_ggir",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"van_hees_2015",
			"van_hees_hasib_2015"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"detach_nonwear"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	actlumus_txt: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: [
			"pim",
			"zcm",
			"tat"
		]
	},
	acttrust_txt: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: [
			"pim",
			"zcm",
			"tat"
		]
	},
	geneactiv_bin: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"sadeh_1994_ggir",
			"cole_kripke_1992_ggir",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"van_hees_2015",
			"van_hees_hasib_2015"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"detach_nonwear",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	geneactiv_raw_csv: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"sadeh_1994_ggir",
			"cole_kripke_1992_ggir",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"van_hees_2015",
			"van_hees_hasib_2015"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"detach_nonwear",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	gt3x_binary: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"sadeh_1994_ggir",
			"cole_kripke_1992_ggir",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"van_hees_2015",
			"van_hees_hasib_2015"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020",
			"gt3x_capsense"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	}
}, wt = {
	actigraph_epoched_csv: {
		sourceProfileId: "actoglance.source.actigraph_epoched_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable", "provenance_receipt_unavailable"]
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable", "provenance_receipt_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	},
	actigraph_raw_csv: {
		sourceProfileId: "actoglance.source.actigraph_raw_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			mims_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["raw_signal_retained"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	actlumus_txt: {
		sourceProfileId: "actoglance.source.condor_actlumus_txt.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			melanopic_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			spectral_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	acttrust_txt: {
		sourceProfileId: "actoglance.source.condor_acttrust_txt.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	geneactiv_bin: {
		sourceProfileId: "actoglance.source.geneactiv_bin.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable", "server_output_materialization_unavailable"]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			daily_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable"]
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			mims_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["method_binding_unavailable", "runtime_proof_missing"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable", "server_output_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_event_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			temperature_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	},
	geneactiv_raw_csv: {
		sourceProfileId: "actoglance.source.geneactiv_raw_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable", "server_output_materialization_unavailable"]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			daily_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"method_binding_unavailable",
					"runtime_proof_missing",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			mims_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["raw_signal_retained"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable", "server_output_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"method_binding_unavailable",
					"runtime_proof_missing",
					"server_output_materialization_unavailable"
				]
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_event_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			temperature_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			}
		}
	},
	gt3x_binary: {
		sourceProfileId: "actoglance.source.actigraph_gt3x_binary.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			daily_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			device_wear_state_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			mims_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable", "runtime_proof_missing"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable", "runtime_proof_missing"]
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	}
}, St = {
	"actoglance.source.actical_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.actigraph_agd.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.activinsights_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.activpal_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.axivity_cwa.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.camntech_actiwatch_awd.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.empatica_embraceplus_avro.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: []
	},
	"actoglance.source.gaitup_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.geneactiv_epoch_csv.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !0,
		countMetrics: []
	},
	"actoglance.source.generic_consumer_wearable_table.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.generic_epoch_csv.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.generic_epoch_excel.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.generic_raw_xyz_table.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	"actoglance.source.generic_vendor_activity_table.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.ggir_generic_epoch_csv.v1": {
		sleepAlgorithms: ["van_hees_2015", "van_hees_hasib_2015"],
		nonwearAlgorithms: [
			"ggir_saved",
			"van_hees_2013",
			"van_hees_2023"
		],
		hasAnglez: !0,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.ggir_map_csv.v1": {
		sleepAlgorithms: ["van_hees_2015", "van_hees_hasib_2015"],
		nonwearAlgorithms: [],
		hasAnglez: !0,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.ggir_metashort_csv.v1": {
		sleepAlgorithms: ["van_hees_2015", "van_hees_hasib_2015"],
		nonwearAlgorithms: [
			"ggir_saved",
			"van_hees_2013",
			"van_hees_2023"
		],
		hasAnglez: !0,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.ggir_rdata.v1": {
		sleepAlgorithms: ["van_hees_2015", "van_hees_hasib_2015"],
		nonwearAlgorithms: [
			"ggir_saved",
			"van_hees_2013",
			"van_hees_2023"
		],
		hasAnglez: !0,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.mims_metric_table.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.motionwatch_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.movisens_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.nhanes_pax_minute.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.nhanes_pax_raw.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	"actoglance.source.philips_actiware_csv.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"actiware_sleep_wake"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"actiware_off_wrist"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.philips_actiwatch_aw5.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"actiware_sleep_wake"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"actiware_off_wrist"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.shimmer_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	}
}, Ct = {
	"actoglance.source.actical_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.actical_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.actigraph_agd.v1": {
		sourceProfileId: "actoglance.source.actigraph_agd.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"output_eligibility_unresolved",
					"server_source_profile_adapter_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"output_eligibility_unresolved",
					"server_source_profile_adapter_unavailable"
				]
			}
		}
	},
	"actoglance.source.activinsights_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.activinsights_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.activpal_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.activpal_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.axivity_cwa.v1": {
		sourceProfileId: "actoglance.source.axivity_cwa.v1",
		capabilities: {
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"unclassified_source_semantics",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"unclassified_source_semantics",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"unclassified_source_semantics",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.camntech_actiwatch_awd.v1": {
		sourceProfileId: "actoglance.source.camntech_actiwatch_awd.v1",
		capabilities: {
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.empatica_embraceplus_avro.v1": {
		sourceProfileId: "actoglance.source.empatica_embraceplus_avro.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			mims_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	"actoglance.source.gaitup_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.gaitup_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.geneactiv_epoch_csv.v1": {
		sourceProfileId: "actoglance.source.geneactiv_epoch_csv.v1",
		capabilities: {
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.generic_consumer_wearable_table.v1": {
		sourceProfileId: "actoglance.source.generic_consumer_wearable_table.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.generic_epoch_csv.v1": {
		sourceProfileId: "actoglance.source.generic_epoch_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	"actoglance.source.generic_epoch_excel.v1": {
		sourceProfileId: "actoglance.source.generic_epoch_excel.v1",
		capabilities: {
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	"actoglance.source.generic_raw_xyz_table.v1": {
		sourceProfileId: "actoglance.source.generic_raw_xyz_table.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			mims_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.generic_vendor_activity_table.v1": {
		sourceProfileId: "actoglance.source.generic_vendor_activity_table.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["explicit_source_mapping_required", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"parser_realization_unavailable",
					"output_eligibility_unresolved",
					"server_source_profile_adapter_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["explicit_source_mapping_required", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"parser_realization_unavailable",
					"output_eligibility_unresolved",
					"server_source_profile_adapter_unavailable"
				]
			}
		}
	},
	"actoglance.source.ggir_generic_epoch_csv.v1": {
		sourceProfileId: "actoglance.source.ggir_generic_epoch_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			daily_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_period_time_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.ggir_map_csv.v1": {
		sourceProfileId: "actoglance.source.ggir_map_csv.v1",
		capabilities: {
			daily_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_period_time_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.ggir_metashort_csv.v1": {
		sourceProfileId: "actoglance.source.ggir_metashort_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			daily_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_period_time_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	},
	"actoglance.source.ggir_rdata.v1": {
		sourceProfileId: "actoglance.source.ggir_rdata.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			daily_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["parser_realization_partial", "server_output_materialization_unavailable"]
			}
		}
	},
	"actoglance.source.mims_metric_table.v1": {
		sourceProfileId: "actoglance.source.mims_metric_table.v1",
		capabilities: {
			mims_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.motionwatch_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.motionwatch_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.movisens_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.movisens_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.nhanes_pax_minute.v1": {
		sourceProfileId: "actoglance.source.nhanes_pax_minute.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.nhanes_pax_raw.v1": {
		sourceProfileId: "actoglance.source.nhanes_pax_raw.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			mims_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.philips_actiware_csv.v1": {
		sourceProfileId: "actoglance.source.philips_actiware_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			broadband_light_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			device_wear_state_evidence_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_event_evidence_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	},
	"actoglance.source.philips_actiwatch_aw5.v1": {
		sourceProfileId: "actoglance.source.philips_actiwatch_aw5.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			broadband_light_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			device_wear_state_evidence_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			sleep_wake_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			source_event_evidence_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			}
		}
	},
	"actoglance.source.shimmer_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.shimmer_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	}
}, It = {
	"actoglance.source.philips_actiware_csv.v1": {
		paradigm: "actiware",
		sleepAlgorithm: "actiware_sleep_wake",
		periodGuider: "actiware_rest_interval",
		nonwearDetectors: [
			"actiware_off_wrist",
			"choi_2011",
			"choi_2012"
		],
		placementFromSource: !0,
		editedRecord: "rest_intervals",
		wakeThresholdFromRecording: !0
	},
	"actoglance.source.philips_actiwatch_aw5.v1": {
		paradigm: "actiware",
		sleepAlgorithm: "actiware_sleep_wake",
		periodGuider: "actiware_rest_interval",
		nonwearDetectors: [
			"actiware_off_wrist",
			"choi_2011",
			"choi_2012"
		],
		placementFromSource: !0,
		editedRecord: "rest_intervals",
		wakeThresholdFromRecording: !0
	}
}, kt = {
	"actoglance.source.actical_vendor_artifact.v1": [],
	"actoglance.source.actigraph_agd.v1": [],
	"actoglance.source.actigraph_epoched_csv.v1": [],
	"actoglance.source.actigraph_gt3x_binary.v1": ["gt3x_capsense"],
	"actoglance.source.actigraph_raw_csv.v1": [],
	"actoglance.source.activinsights_vendor_artifact.v1": [],
	"actoglance.source.activpal_vendor_artifact.v1": [],
	"actoglance.source.axivity_cwa.v1": [],
	"actoglance.source.camntech_actiwatch_awd.v1": [],
	"actoglance.source.condor_actlumus_txt.v1": [],
	"actoglance.source.condor_acttrust_txt.v1": [],
	"actoglance.source.empatica_embraceplus_avro.v1": [],
	"actoglance.source.gaitup_vendor_artifact.v1": [],
	"actoglance.source.geneactiv_bin.v1": [],
	"actoglance.source.geneactiv_epoch_csv.v1": [],
	"actoglance.source.geneactiv_raw_csv.v1": [],
	"actoglance.source.generic_consumer_wearable_table.v1": [],
	"actoglance.source.generic_epoch_csv.v1": [],
	"actoglance.source.generic_epoch_excel.v1": [],
	"actoglance.source.generic_raw_xyz_table.v1": [],
	"actoglance.source.generic_vendor_activity_table.v1": [],
	"actoglance.source.ggir_generic_epoch_csv.v1": [],
	"actoglance.source.ggir_map_csv.v1": [],
	"actoglance.source.ggir_metashort_csv.v1": [],
	"actoglance.source.ggir_rdata.v1": [],
	"actoglance.source.mims_metric_table.v1": [],
	"actoglance.source.motionwatch_vendor_artifact.v1": [],
	"actoglance.source.movisens_vendor_artifact.v1": [],
	"actoglance.source.nhanes_pax_minute.v1": [],
	"actoglance.source.nhanes_pax_raw.v1": [],
	"actoglance.source.philips_actiware_csv.v1": ["actiware_off_wrist"],
	"actoglance.source.philips_actiwatch_aw5.v1": ["actiware_off_wrist"],
	"actoglance.source.shimmer_vendor_artifact.v1": []
}, At = {
	actiware_sleep_wake: [["sleep_analysis_window_stream"], ["sleep_wake_epoch_stream"]],
	cole_kripke_1992_actilife: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	cole_kripke_1992_ggir: [["sleep_analysis_window_stream"], ["neishabouri_count_epoch_stream_60s"]],
	cole_kripke_1992_original: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	consensus_majority_vote: [["sleep_analysis_window_stream"]],
	galland_2012: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	oakley_1997: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	sadeh_1994_actilife: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	sadeh_1994_ggir: [["sleep_analysis_window_stream"], ["neishabouri_count_epoch_stream_60s"]],
	sadeh_1994_original: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	sazonov_2004: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	ucsd_scripps_2010: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	van_hees_2015: [
		["sleep_analysis_window_stream"],
		["ggir_metric_epoch_stream"],
		["sleep_period_time_window_stream"]
	],
	van_hees_hasib_2015: [
		["sleep_analysis_window_stream"],
		["ggir_metric_epoch_stream"],
		["sleep_in_bed_epoch_stream"]
	]
}, xt = {
	actiware_off_wrist: [["device_wear_state_evidence_stream"]],
	ahmadi_2020: [["algorithmic_nonwear_evidence_stream"], []],
	choi_2011: [["algorithmic_nonwear_evidence_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	choi_2012: [["algorithmic_nonwear_evidence_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	detach_nonwear: [
		["algorithmic_nonwear_evidence_stream"],
		[],
		["temperature_epoch_stream"]
	],
	ggir_saved: [["algorithmic_nonwear_evidence_stream"]],
	gt3x_capsense: [["device_wear_state_evidence_stream"]],
	troiano_2008: [["algorithmic_nonwear_evidence_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	van_hees_2013: [["algorithmic_nonwear_evidence_stream"], []],
	van_hees_2023: [["algorithmic_nonwear_evidence_stream"], []]
}, Et = {
	diary: [],
	hdcza: [["ggir_metric_epoch_stream"]],
	l5: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	selected_scorer_first_last: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	selected_scorer_longest_bout: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	quiet_bout: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	event_marker: [["source_event_evidence_stream"]],
	actiware_rest_interval: [],
	none: []
}, Dt = ["diary"], Tt = {
	hdcza: "hdcza_window",
	actiware_rest_interval: "actiware_rest_window"
}, Bt = {
	hdcza: "no HDCZA window stored for this day",
	actiware_rest_interval: "no Actiware rest interval for this day"
}, zt = {
	count_epoch_stream_60s: "has60sCounts",
	neishabouri_count_epoch_stream_60s: "has60sCounts",
	ggir_metric_epoch_stream: "hasAnglez"
};
function Rt(e, t) {
	if (void 0 === t) return [];
	for (const a of t) {
		if (0 === a.length) return [];
		const t = a.flatMap((e) => zt[e] ?? []);
		if (t.length > 0 && !t.some((t) => !0 === e[t])) return [...new Set(t)];
	}
	return null;
}
function Mt(e) {
	return St[e] ?? bt[e];
}
function Ot(e, t, a) {
	const r = function(e, t) {
		const a = Ct[e];
		return a ? a.capabilities[t] : wt[e]?.capabilities[t];
	}(e, t);
	return "local" === a ? "implemented" === r?.localStatus : "implemented" === r?.serverStatus;
}
function Pt(e, t, a) {
	return void 0 !== t && t.every((t) => t.some((t) => Ot(e, t, a)));
}
function Nt(e, t) {
	const a = Mt(e);
	if (!a || !Ot(e, "source_profile_realization", t)) return;
	const r = Ot(e, "ggir_metric_epoch_stream", t), i = Ot(e, "neishabouri_count_epoch_stream_60s", t), n = Ot(e, "count_epoch_stream_60s", t) || i, o = Ot(e, "raw_acceleration_stream", t);
	return {
		sleepAlgorithms: a.sleepAlgorithms.filter((a) => function(e, t, a) {
			return function(e, t) {
				return Mt(e)?.sleepAlgorithms.includes(t) ?? !1;
			}(e, t) && Pt(e, At[t], a);
		}(e, a, t)),
		nonwearAlgorithms: a.nonwearAlgorithms.filter((a) => function(e, t, a) {
			return function(e, t) {
				return Mt(e)?.nonwearAlgorithms.includes(t) ?? !1;
			}(e, t) && Pt(e, xt[t], a);
		}(e, a, t)),
		hasAnglez: a.hasAnglez && r,
		has60sCounts: a.has60sCounts && n,
		hasRawAccel: a.hasRawAccel && o,
		countMetrics: a.countMetrics.filter((e) => "neishabouri" === e ? i : "zero_crossing" !== e && n)
	};
}
const Kt = [
	{
		method: "ggir_enmo",
		family: "daily_summary",
		requiredSignal: "ggir_daily_summary",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !1,
		backendOwner: "GGIR upstream import",
		cutpoint: null
	},
	{
		method: "freedson_adult_1952",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !0,
		backendOwner: null,
		cutpoint: {
			axis: "axisY",
			sedentaryMax: 99,
			lightMin: 100,
			moderateMin: 1952,
			vigorousMin: 5725,
			ruleLabel: "Sed <=99, light 100-1951, moderate 1952-5724, vigorous >=5725 counts/min",
			unavailableAction: "Open or map local CSV files that include a valid Y-axis activity/counts column.",
			cutpointBands: [
				{
					label: "Sed",
					min: 0,
					max: 99,
					tone: "sedentary"
				},
				{
					label: "Light",
					min: 100,
					max: 1951,
					tone: "light"
				},
				{
					label: "Moderate",
					min: 1952,
					max: 5724,
					tone: "moderate"
				},
				{
					label: "Vigorous",
					min: 5725,
					max: null,
					tone: "vigorous"
				}
			],
			cutpointScaleMax: 7e3,
			nativeEpochSeconds: 60,
			countScale: "actigraph"
		}
	},
	{
		method: "sasaki_vm_2011",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !0,
		backendOwner: null,
		cutpoint: {
			axis: "vectorMagnitude",
			sedentaryMax: 199,
			lightMin: 200,
			moderateMin: 2690,
			vigorousMin: 6167,
			ruleLabel: "Sed <=199, light 200-2689, moderate 2690-6166, vigorous >=6167 counts/min",
			unavailableAction: "Open or map local CSV files that include vector-magnitude counts.",
			cutpointBands: [
				{
					label: "Sed",
					min: 0,
					max: 199,
					tone: "sedentary"
				},
				{
					label: "Light",
					min: 200,
					max: 2689,
					tone: "light"
				},
				{
					label: "Moderate",
					min: 2690,
					max: 6166,
					tone: "moderate"
				},
				{
					label: "Vigorous",
					min: 6167,
					max: null,
					tone: "vigorous"
				}
			],
			cutpointScaleMax: 8e3,
			nativeEpochSeconds: 60,
			countScale: "actigraph"
		}
	},
	{
		method: "chandler_wrist_va_8_12_2015",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !0,
		backendOwner: null,
		cutpoint: {
			axis: "axisY",
			sedentaryMax: 1931,
			lightMin: 1932,
			moderateMin: 6360,
			vigorousMin: 17544,
			ruleLabel: "Sed <1932, light 1932-6359, moderate 6360-17543, vigorous >=17544 counts/min (Chandler ROC vertical-axis 5 s thresholds converted to counts/min)",
			unavailableAction: "Open or map local CSV files that include valid Y-axis activity/counts.",
			cutpointBands: [
				{
					label: "Sed",
					min: 0,
					max: 1931,
					tone: "sedentary"
				},
				{
					label: "Light",
					min: 1932,
					max: 6359,
					tone: "light"
				},
				{
					label: "Moderate",
					min: 6360,
					max: 17543,
					tone: "moderate"
				},
				{
					label: "Vigorous",
					min: 17544,
					max: null,
					tone: "vigorous"
				}
			],
			cutpointScaleMax: 21e3,
			nativeEpochSeconds: 5,
			countScale: "actigraph"
		}
	},
	{
		method: "johansson_preschool_wrist_vm_2016",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !0,
		backendOwner: null,
		cutpoint: {
			axis: "vectorMagnitude",
			sedentaryMax: 3936,
			lightMin: 3937,
			moderateMin: 16716,
			vigorousMin: Number.POSITIVE_INFINITY,
			ruleLabel: "Sed <=3936, light 3937-16715, MVPA >=16716 counts/min (Johansson 5 s thresholds converted to counts/min)",
			unavailableAction: "Open or map local CSV files that include vector-magnitude counts.",
			cutpointBands: [
				{
					label: "Sed",
					min: 0,
					max: 3936,
					tone: "sedentary"
				},
				{
					label: "Light",
					min: 3937,
					max: 16715,
					tone: "light"
				},
				{
					label: "MVPA",
					min: 16716,
					max: null,
					tone: "moderate"
				}
			],
			cutpointScaleMax: 22e3,
			nativeEpochSeconds: 5,
			countScale: "actigraph"
		}
	},
	{
		method: "preschool_free_living_rf_3_5",
		family: "backend_classifier",
		requiredSignal: "preschool_activity_class_epochs",
		statusWhenMissing: "backend_required",
		frontendComputesMetric: !1,
		backendOwner: "actours/actimetric-compatible preschool wrist RF classifier",
		cutpoint: null
	},
	{
		method: "chandler_wrist_vm_8_12_2015",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !0,
		backendOwner: null,
		cutpoint: {
			axis: "vectorMagnitude",
			sedentaryMax: 3659,
			lightMin: 3660,
			moderateMin: 9816,
			vigorousMin: 23628,
			ruleLabel: "Sed <3660, light 3660-9815, moderate 9816-23627, vigorous >=23628 counts/min (Chandler 5 s thresholds converted to counts/min)",
			unavailableAction: "Open or map local CSV files that include vector-magnitude counts.",
			cutpointBands: [
				{
					label: "Sed",
					min: 0,
					max: 3659,
					tone: "sedentary"
				},
				{
					label: "Light",
					min: 3660,
					max: 9815,
					tone: "light"
				},
				{
					label: "Moderate",
					min: 9816,
					max: 23627,
					tone: "moderate"
				},
				{
					label: "Vigorous",
					min: 23628,
					max: null,
					tone: "vigorous"
				}
			],
			cutpointScaleMax: 28e3,
			nativeEpochSeconds: 5,
			countScale: "actigraph"
		}
	},
	{
		method: "chandler_wrist_sedentary_5_11_2018",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !0,
		backendOwner: null,
		cutpoint: {
			axis: "vectorMagnitude",
			sedentaryMax: 4764,
			lightMin: 4765,
			moderateMin: Number.POSITIVE_INFINITY,
			vigorousMin: Number.POSITIVE_INFINITY,
			ruleLabel: "Sed <=4764, non-sedentary >4764 counts/min (397 VM counts/5 s converted; non-sedentary minutes are shown as Light)",
			unavailableAction: "Open or map local CSV files that include vector-magnitude counts.",
			cutpointBands: [{
				label: "Sed",
				min: 0,
				max: 4764,
				tone: "sedentary"
			}, {
				label: "Non-sed",
				min: 4765,
				max: null,
				tone: "light"
			}],
			cutpointScaleMax: 6500,
			nativeEpochSeconds: 5,
			countScale: "actigraph"
		}
	},
	{
		method: "chandler_wrist_axis1_sedentary_5_11_2018",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !0,
		backendOwner: null,
		cutpoint: {
			axis: "axisY",
			sedentaryMax: 2436,
			lightMin: 2437,
			moderateMin: Number.POSITIVE_INFINITY,
			vigorousMin: Number.POSITIVE_INFINITY,
			ruleLabel: "Sed <=2436, non-sedentary >2436 counts/min (203 axis-1 counts/5 s converted; non-sedentary minutes are shown as Light)",
			unavailableAction: "Open or map local CSV files that include valid Y-axis activity/counts.",
			cutpointBands: [{
				label: "Sed",
				min: 0,
				max: 2436,
				tone: "sedentary"
			}, {
				label: "Non-sed",
				min: 2437,
				max: null,
				tone: "light"
			}],
			cutpointScaleMax: 3600,
			nativeEpochSeconds: 5,
			countScale: "actigraph"
		}
	},
	{
		method: "chandler_wrist_axis1_sedentary_dominant_5_11_2018",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !0,
		backendOwner: null,
		cutpoint: {
			axis: "axisY",
			sedentaryMax: 2748,
			lightMin: 2749,
			moderateMin: Number.POSITIVE_INFINITY,
			vigorousMin: Number.POSITIVE_INFINITY,
			ruleLabel: "Sed <=2748, non-sedentary >2748 counts/min (229 axis-1 counts/5 s converted; non-sedentary minutes are shown as Light)",
			unavailableAction: "Open or map local CSV files that include valid Y-axis activity/counts.",
			cutpointBands: [{
				label: "Sed",
				min: 0,
				max: 2748,
				tone: "sedentary"
			}, {
				label: "Non-sed",
				min: 2749,
				max: null,
				tone: "light"
			}],
			cutpointScaleMax: 4e3,
			nativeEpochSeconds: 5,
			countScale: "actigraph"
		}
	},
	{
		method: "chandler_wrist_vm_sedentary_dominant_5_11_2018",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !0,
		backendOwner: null,
		cutpoint: {
			axis: "vectorMagnitude",
			sedentaryMax: 5136,
			lightMin: 5137,
			moderateMin: Number.POSITIVE_INFINITY,
			vigorousMin: Number.POSITIVE_INFINITY,
			ruleLabel: "Sed <=5136, non-sedentary >5136 counts/min (428 VM counts/5 s converted; non-sedentary minutes are shown as Light)",
			unavailableAction: "Open or map local CSV files that include vector-magnitude counts.",
			cutpointBands: [{
				label: "Sed",
				min: 0,
				max: 5136,
				tone: "sedentary"
			}, {
				label: "Non-sed",
				min: 5137,
				max: null,
				tone: "light"
			}],
			cutpointScaleMax: 7e3,
			nativeEpochSeconds: 5,
			countScale: "actigraph"
		}
	},
	{
		method: "evenson_children_2008",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !0,
		backendOwner: null,
		cutpoint: {
			axis: "axisY",
			sedentaryMax: 103,
			lightMin: 104,
			moderateMin: 2296,
			vigorousMin: 4012,
			ruleLabel: "Sed <=25, light 26-573, moderate 574-1002, vigorous >=1003 counts/15 s (Evenson 2008 vertical-axis children thresholds converted x4 to counts/min; band edges follow the sibling convention sedentaryMax = lightMin-1, so counts/min bands are Sed <=103, light 104-2295, moderate 2296-4011, vigorous >=4012)",
			unavailableAction: "Open or map local CSV files that include a valid Y-axis activity/counts column.",
			cutpointBands: [
				{
					label: "Sed",
					min: 0,
					max: 103,
					tone: "sedentary"
				},
				{
					label: "Light",
					min: 104,
					max: 2295,
					tone: "light"
				},
				{
					label: "Moderate",
					min: 2296,
					max: 4011,
					tone: "moderate"
				},
				{
					label: "Vigorous",
					min: 4012,
					max: null,
					tone: "vigorous"
				}
			],
			cutpointScaleMax: 5e3,
			nativeEpochSeconds: 15,
			countScale: "actigraph"
		}
	},
	{
		method: "neil_sztramko_actiwatch2_adult_2017",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !0,
		backendOwner: null,
		cutpoint: {
			axis: "axisY",
			sedentaryMax: 144,
			lightMin: 145,
			moderateMin: 274,
			vigorousMin: 597,
			ruleLabel: "Sed <145, light 145-273, moderate 274-596, vigorous >=597 Actiwatch counts/min (Neil-Sztramko 2017; each threshold starts the class above it)",
			unavailableAction: "Open Philips Actiwatch (Actiware CSV or .AW5) files.",
			cutpointBands: [
				{
					label: "Sed",
					min: 0,
					max: 144,
					tone: "sedentary"
				},
				{
					label: "Light",
					min: 145,
					max: 273,
					tone: "light"
				},
				{
					label: "Moderate",
					min: 274,
					max: 596,
					tone: "moderate"
				},
				{
					label: "Vigorous",
					min: 597,
					max: null,
					tone: "vigorous"
				}
			],
			cutpointScaleMax: 1e3,
			nativeEpochSeconds: 60,
			countScale: "philips_actiwatch"
		}
	},
	{
		method: "kemp_actiwatch2_adult_2020",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !0,
		backendOwner: null,
		cutpoint: {
			axis: "axisY",
			sedentaryMax: 255,
			lightMin: 256,
			moderateMin: 418,
			vigorousMin: 720,
			ruleLabel: "Sed <256, light 256-417, moderate 418-719, vigorous >=720 Actiwatch counts/min (Kemp 2020; each threshold starts the class above it)",
			unavailableAction: "Open Philips Actiwatch (Actiware CSV or .AW5) files.",
			cutpointBands: [
				{
					label: "Sed",
					min: 0,
					max: 255,
					tone: "sedentary"
				},
				{
					label: "Light",
					min: 256,
					max: 417,
					tone: "light"
				},
				{
					label: "Moderate",
					min: 418,
					max: 719,
					tone: "moderate"
				},
				{
					label: "Vigorous",
					min: 720,
					max: null,
					tone: "vigorous"
				}
			],
			cutpointScaleMax: 1200,
			nativeEpochSeconds: 60,
			countScale: "philips_actiwatch"
		}
	},
	{
		method: "hildebrand_enmo_wrist_2014",
		family: "enmo_cutpoint",
		requiredSignal: "enmo_mg_epochs",
		statusWhenMissing: "needs_signal",
		frontendComputesMetric: !1,
		backendOwner: "Raw/GGIR ENMO (mg) epoch pipeline (actours/WASM); browser count pipeline does not produce ENMO mg.",
		cutpoint: null
	},
	{
		method: "mims",
		family: "backend_volume",
		requiredSignal: "mims_epoch_values",
		statusWhenMissing: "backend_required",
		frontendComputesMetric: !1,
		backendOwner: "actours/WASM",
		cutpoint: null
	}
], Lt = Kt.map((e) => e.method), jt = [
	"daily_summary",
	"count_cutpoint",
	"enmo_cutpoint",
	"backend_volume",
	"backend_classifier"
], Ut = {
	actigraph: "ActiGraph counts",
	philips_actiwatch: "Philips Actiwatch counts",
	camntech_actiwatch: "CamNtech Actiwatch counts",
	condor: "Condor ActLumus/ActTrust counts",
	source_declared: "counts on the study's stated scale"
}, Gt = {
	"actoglance.source.actigraph_epoched_csv.v1": "actigraph",
	"actoglance.source.actigraph_gt3x_binary.v1": "actigraph",
	"actoglance.source.actigraph_raw_csv.v1": "actigraph",
	"actoglance.source.camntech_actiwatch_awd.v1": "camntech_actiwatch",
	"actoglance.source.condor_actlumus_txt.v1": "condor",
	"actoglance.source.condor_acttrust_txt.v1": "condor",
	"actoglance.source.empatica_embraceplus_avro.v1": "actigraph",
	"actoglance.source.geneactiv_bin.v1": "actigraph",
	"actoglance.source.geneactiv_raw_csv.v1": "actigraph",
	"actoglance.source.generic_epoch_csv.v1": "source_declared",
	"actoglance.source.generic_epoch_excel.v1": "source_declared",
	"actoglance.source.generic_raw_xyz_table.v1": "actigraph",
	"actoglance.source.nhanes_pax_minute.v1": "actigraph",
	"actoglance.source.nhanes_pax_raw.v1": "actigraph",
	"actoglance.source.philips_actiware_csv.v1": "philips_actiwatch",
	"actoglance.source.philips_actiwatch_aw5.v1": "philips_actiwatch"
}, Ft = {
	ggir_daily_summary: ["enmo_epoch_values"],
	axis_y_counts: ["count_epochs_60s", "count_epochs_30s"],
	vector_magnitude_counts: ["count_epochs_60s", "count_epochs_30s"],
	mims_epoch_values: ["mims_epoch_values"],
	preschool_activity_class_epochs: ["raw_acceleration"],
	enmo_mg_epochs: ["enmo_epoch_values"]
}, Vt = {
	"actoglance.source.actical_vendor_artifact.v1": [],
	"actoglance.source.actigraph_agd.v1": [],
	"actoglance.source.actigraph_epoched_csv.v1": ["count_epochs_60s", "count_epochs_30s"],
	"actoglance.source.actigraph_gt3x_binary.v1": [
		"raw_acceleration",
		"count_epochs_60s",
		"count_epochs_30s",
		"enmo_epoch_values",
		"anglez_epoch_values",
		"mims_epoch_values",
		"device_wear_state_values"
	],
	"actoglance.source.actigraph_raw_csv.v1": [
		"raw_acceleration",
		"count_epochs_60s",
		"count_epochs_30s",
		"enmo_epoch_values",
		"anglez_epoch_values",
		"mims_epoch_values"
	],
	"actoglance.source.activinsights_vendor_artifact.v1": [],
	"actoglance.source.activpal_vendor_artifact.v1": [],
	"actoglance.source.axivity_cwa.v1": [],
	"actoglance.source.camntech_actiwatch_awd.v1": ["count_epochs_60s", "temperature_epoch_values"],
	"actoglance.source.condor_actlumus_txt.v1": [
		"count_epochs_60s",
		"broadband_light_epoch_values",
		"melanopic_light_epoch_values",
		"spectral_light_epoch_values",
		"temperature_epoch_values"
	],
	"actoglance.source.condor_acttrust_txt.v1": [
		"count_epochs_60s",
		"broadband_light_epoch_values",
		"temperature_epoch_values"
	],
	"actoglance.source.empatica_embraceplus_avro.v1": [
		"raw_acceleration",
		"count_epochs_60s",
		"enmo_epoch_values",
		"anglez_epoch_values",
		"mims_epoch_values",
		"temperature_epoch_values"
	],
	"actoglance.source.gaitup_vendor_artifact.v1": [],
	"actoglance.source.geneactiv_bin.v1": [
		"raw_acceleration",
		"count_epochs_60s",
		"count_epochs_30s",
		"enmo_epoch_values",
		"anglez_epoch_values",
		"mims_epoch_values",
		"temperature_epoch_values",
		"broadband_light_epoch_values",
		"source_event_values"
	],
	"actoglance.source.geneactiv_epoch_csv.v1": [
		"raw_acceleration",
		"source_reported_observations",
		"temperature_epoch_values",
		"broadband_light_epoch_values"
	],
	"actoglance.source.geneactiv_raw_csv.v1": [
		"raw_acceleration",
		"count_epochs_60s",
		"count_epochs_30s",
		"enmo_epoch_values",
		"anglez_epoch_values",
		"mims_epoch_values",
		"temperature_epoch_values",
		"broadband_light_epoch_values",
		"source_event_values"
	],
	"actoglance.source.generic_consumer_wearable_table.v1": [],
	"actoglance.source.generic_epoch_csv.v1": [
		"count_epochs_60s",
		"count_epochs_30s",
		"source_reported_observations"
	],
	"actoglance.source.generic_epoch_excel.v1": ["count_epochs_60s", "source_reported_observations"],
	"actoglance.source.generic_raw_xyz_table.v1": [
		"raw_acceleration",
		"count_epochs_60s",
		"enmo_epoch_values",
		"anglez_epoch_values",
		"mims_epoch_values"
	],
	"actoglance.source.generic_vendor_activity_table.v1": [],
	"actoglance.source.ggir_generic_epoch_csv.v1": [
		"enmo_epoch_values",
		"anglez_epoch_values",
		"mims_epoch_values"
	],
	"actoglance.source.ggir_map_csv.v1": ["enmo_epoch_values", "anglez_epoch_values"],
	"actoglance.source.ggir_metashort_csv.v1": ["enmo_epoch_values", "anglez_epoch_values"],
	"actoglance.source.ggir_rdata.v1": [
		"enmo_epoch_values",
		"anglez_epoch_values",
		"source_reported_observations"
	],
	"actoglance.source.mims_metric_table.v1": ["mims_epoch_values"],
	"actoglance.source.motionwatch_vendor_artifact.v1": [],
	"actoglance.source.movisens_vendor_artifact.v1": [],
	"actoglance.source.nhanes_pax_minute.v1": ["count_epochs_60s"],
	"actoglance.source.nhanes_pax_raw.v1": [
		"raw_acceleration",
		"count_epochs_60s",
		"enmo_epoch_values",
		"anglez_epoch_values",
		"mims_epoch_values"
	],
	"actoglance.source.philips_actiware_csv.v1": [
		"count_epochs_60s",
		"count_epochs_30s",
		"broadband_light_epoch_values",
		"device_wear_state_values",
		"source_event_values"
	],
	"actoglance.source.philips_actiwatch_aw5.v1": [
		"count_epochs_60s",
		"count_epochs_30s",
		"broadband_light_epoch_values",
		"device_wear_state_values",
		"source_event_values"
	],
	"actoglance.source.shimmer_vendor_artifact.v1": []
}, qt = [
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: "epoch_5s",
		sourceVendorLabel: null
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
		displayGrid: "epoch_5s",
		sourceVendorLabel: null
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: "epoch_5s",
		sourceVendorLabel: null
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: "Actiware"
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: "recording_epoch",
		sourceVendorLabel: null
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
		displayGrid: null,
		sourceVendorLabel: null
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
		displayGrid: null,
		sourceVendorLabel: null
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
		displayGrid: null,
		sourceVendorLabel: null
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
		displayGrid: null,
		sourceVendorLabel: null
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
		displayGrid: null,
		sourceVendorLabel: null
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
		displayGrid: null,
		sourceVendorLabel: null
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
		displayGrid: null,
		sourceVendorLabel: null
	},
	{
		id: "ggir_saved",
		kind: "nonwear",
		requiredSignal: "none",
		requiresTemperature: !1,
		nativeEpochSeconds: 5,
		supportedEpochSeconds: [5],
		bindingEntry: "detect_nonwear",
		conformance: "conformant",
		execution: "ggir_part2",
		methodImplementationId: "ggir_saved",
		family: null,
		implementation: null,
		defaultCountMetric: null,
		compatibleCountMetrics: [],
		needsModelArtifact: null,
		displayGrid: null,
		sourceVendorLabel: null
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
		displayGrid: null,
		sourceVendorLabel: null
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
		displayGrid: null,
		sourceVendorLabel: null
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
		displayGrid: null,
		sourceVendorLabel: null
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
		displayGrid: null,
		sourceVendorLabel: null
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
		displayGrid: null,
		sourceVendorLabel: null
	}
], Ht = {
	"sadeh_1994::original": "sadeh_1994_original",
	"sadeh_1994::actilife": "sadeh_1994_actilife",
	"cole_kripke_1992::original": "cole_kripke_1992_original",
	"cole_kripke_1992::actilife": "cole_kripke_1992_actilife",
	"sadeh_1994::ggir": "sadeh_1994_ggir",
	"cole_kripke_1992::ggir": "cole_kripke_1992_ggir",
	"van_hees_2015::ggir": "van_hees_2015",
	"van_hees_hasib_2015::hasib": "van_hees_hasib_2015",
	"natural_language::reference": "natural_language",
	"consensus_majority_vote::reference": "consensus_majority_vote",
	"lstm_sleep_wake::reference": "lstm_sleep_wake",
	"manual::reference": "manual",
	"oakley_1997::hasib": "oakley_1997",
	"actiware_sleep_wake::actiware": "actiware_sleep_wake",
	"galland_2012::hasib": "galland_2012",
	"ucsd_scripps_2010::reference": "ucsd_scripps_2010",
	"sazonov_2004::reference": "sazonov_2004",
	"syed_cnn::reference": "syed_cnn"
}, Wt = [
	{
		value: "epoch_5s",
		seconds: 5,
		lineage: "raw"
	},
	{
		value: "epoch_15s",
		seconds: 15,
		lineage: "counts"
	},
	{
		value: "epoch_30s",
		seconds: 30,
		lineage: "counts"
	},
	{
		value: "epoch_60s",
		seconds: 60,
		lineage: "counts"
	}
], $t = [
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
], Yt = [
	{
		id: "recording_epoch",
		epochSeconds: null,
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
], Xt = [
	{
		id: "axis_y",
		grid: "recording_epoch",
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
		grid: "recording_epoch",
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
		grid: "recording_epoch",
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
		grid: "recording_epoch",
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
		grid: "recording_epoch",
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
		grid: "recording_epoch",
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
		grid: "recording_epoch",
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
], Jt = [
	"gt3x_capsense",
	"detach_nonwear",
	"actiware_off_wrist",
	"uploaded_wear_sensor"
], Zt = {
	gt3x_capsense: {
		detector: "gt3x_capsense",
		slotLabel: "CAPSENSE",
		reviewLabel: "GT3X CAPSENSE",
		carriedBySourceType: "gt3x_binary",
		capabilityFromSensorRows: !1,
		fusedIntoBand: !0
	},
	detach_nonwear: {
		detector: "detach_nonwear",
		slotLabel: "DETACH",
		reviewLabel: "DETACH",
		carriedBySourceType: "geneactiv_bin",
		capabilityFromSensorRows: !1,
		fusedIntoBand: !0
	},
	actiware_off_wrist: {
		detector: "actiware_off_wrist",
		slotLabel: "Actiwatch off-wrist",
		reviewLabel: "Actiwatch off-wrist",
		carriedBySourceType: null,
		capabilityFromSensorRows: !0,
		fusedIntoBand: !1
	},
	uploaded_wear_sensor: {
		detector: null,
		slotLabel: "Wear log",
		reviewLabel: "Uploaded wear sensor",
		carriedBySourceType: null,
		capabilityFromSensorRows: !1,
		fusedIntoBand: !1
	}
}, Qt = {
	gt3x_binary: "gt3x_capsense",
	geneactiv_bin: "detach_nonwear"
}, ea = {
	choi_2011: {
		uiLabel: "Choi 2011 (60 min)",
		inputDescription: null,
		storedAs: null
	},
	flat_activity: {
		uiLabel: "Flat activity",
		inputDescription: null,
		storedAs: null
	},
	gt3x_capsense: {
		uiLabel: "GT3X CAPSENSE",
		inputDescription: "the GT3X CAPSENSE wear-sensor stream",
		storedAs: null
	},
	actiware_off_wrist: {
		uiLabel: "Actiwatch off-wrist",
		inputDescription: null,
		storedAs: null
	},
	detach_nonwear: {
		uiLabel: "DETACH",
		inputDescription: null,
		storedAs: "detach_mask"
	},
	van_hees_2013: {
		uiLabel: "van Hees 2013",
		inputDescription: null,
		storedAs: null
	},
	van_hees_2023: {
		uiLabel: "van Hees 2023",
		inputDescription: null,
		storedAs: null
	},
	ggir_saved: {
		uiLabel: "GGIR nonwear (as saved by the folder)",
		inputDescription: null,
		storedAs: null
	},
	ggir_part2_invalid: {
		uiLabel: "GGIR invalid (Part 2)",
		inputDescription: null,
		storedAs: null
	},
	choi_2012: {
		uiLabel: "Choi 2012 (90 min)",
		inputDescription: null,
		storedAs: null
	},
	troiano_2008: {
		uiLabel: "Troiano 2008",
		inputDescription: null,
		storedAs: null
	},
	ahmadi_2020: {
		uiLabel: "Ahmadi 2020",
		inputDescription: null,
		storedAs: null
	},
	skovgaard_2023: {
		uiLabel: "Skovgaard 2023",
		inputDescription: null,
		storedAs: null
	}
}, ta = {
	AlgorithmType: {
		sadeh_1994_original: "Sadeh (1994) Original",
		sadeh_1994_actilife: "Sadeh (1994) ActiLife - Recommended",
		cole_kripke_1992_original: "Cole-Kripke (1992) Original",
		cole_kripke_1992_actilife: "Cole-Kripke (1992) ActiLife",
		sadeh_1994_ggir: "Sadeh (1994) GGIR / zero-crossing Y",
		cole_kripke_1992_ggir: "Cole-Kripke (1992) GGIR / zero-crossing Y",
		van_hees_2015: "van Hees (2015)",
		van_hees_hasib_2015: "Van Hees HASIB 2015",
		natural_language: "Natural Language",
		consensus_majority_vote: "Consensus Majority Vote",
		lstm_sleep_wake: "LSTM Sleep/Wake (ONNX spectral)",
		manual: "Manual",
		oakley_1997: "Oakley 1997",
		actiware_sleep_wake: "Actiware Sleep/Wake",
		galland_2012: "Galland 2012",
		ucsd_scripps_2010: "UCSD / Scripps (2010)",
		sazonov_2004: "Sazonov (2004) — provisional",
		syed_cnn: "Syed CNN — needs model"
	},
	PeriodGuiderType: {
		diary: "Diary only",
		l5: "L5 (rest window)",
		hdcza: "HDCZA (angle)",
		smart: "Smart (diary first)",
		longest_bout: "Longest bout",
		event_marker: "Event markers (button presses)",
		actiware_rest_interval: "Actiware rest interval",
		none: "None (whole day)"
	},
	SleepPeriodWindowSourceType: {
		diary: "Diary",
		hdcza: "HDCZA SPT",
		l5: "L5 least active 5h",
		selected_scorer_first_last: "Selected scorer first-last sleep",
		selected_scorer_longest_bout: "Selected scorer longest sleep bout",
		quiet_bout: "Quiet-bout least-active window",
		event_marker: "Event markers (button presses)",
		actiware_rest_interval: "Actiware rest interval",
		none: "None"
	},
	ScoringMethodFamily: {
		sadeh_1994: "Sadeh 1994",
		cole_kripke_1992: "Cole-Kripke (1992)",
		oakley_1997: "Oakley 1997",
		actiware_sleep_wake: "Actiware Sleep/Wake",
		galland_2012: "Galland 2012",
		ucsd_scripps_2010: "UCSD / Scripps (2010)",
		sazonov_2004: "Sazonov 2004",
		van_hees_2015: "van Hees (2015)",
		van_hees_hasib_2015: "van Hees HASIB (2015)",
		lstm_sleep_wake: "LSTM Sleep/Wake",
		natural_language: "Natural Language",
		consensus_majority_vote: "Consensus Majority Vote",
		manual: "Manual",
		syed_cnn: "Syed CNN"
	},
	ScoringImplementationVariant: {
		original: "Original",
		actilife: "ActiLife",
		ggir: "GGIR",
		hasib: "HASIB",
		reference: "Reference",
		actiware: "Actiware"
	}
}, aa = ($t.map((e) => e.id), qt.map((e) => e.id)), ra = ([{
	id: "choi_plus_flat",
	components: ["choi_2011", "flat_activity"],
	combine: "union"
}, {
	id: "diary_anchored",
	components: ["choi_2011"],
	combine: "priority"
}].map((e) => e.id), {
	onset_min_consecutive_sleep: 3,
	offset_min_consecutive_minutes: 5,
	diary_tolerance_minutes: 15,
	nap_min_consecutive_epochs: 10,
	epoch_length_seconds: 60
}), ia = [30, 60], na = [
	"count_hasib",
	"angle_hasib",
	"lstm",
	"consensus"
], oa = ["majority_tie_sleep", "strict_majority"], sa = "algorithm-output-cube/v1", la = ["counts_axis_y", "counts_vm"], ca = ["neural_model"], ua = "count_hasib", da = "lstm", pa = "consensus", _a = "sadeh_1994", ma = "neishabouri", ya = "sleep_wake_epoch", fa = "exploratory", ga = "ggir_parity_default", ha = "literature_reference", va = "sleep_wake_epoch", ba = "local_model_validated", wa = "sleep_wake_epoch", Sa = "derived_consensus", Ca = ["sadeh_1994", "cole_kripke_1992"], Ia = "zero_crossing", ka = {
	neishabouri: {
		countFamilyId: "neishabouri",
		compatibleAxisIds: [
			"x",
			"y",
			"z",
			"vm"
		],
		seriesKeyTemplate: "neishabouri_{axis}_{epoch_seconds}s",
		labelTemplate: "Neishabouri {axis_label} {epoch_seconds}s counts"
	},
	zero_crossing: {
		countFamilyId: "zero_crossing",
		compatibleAxisIds: [
			"x",
			"y",
			"z"
		],
		seriesKeyTemplate: "zero_crossing_{axis}_{epoch_seconds}s",
		labelTemplate: "zero-crossing {axis_label} {epoch_seconds}s counts"
	}
}, Aa = {
	neishabouri: [
		"x",
		"y",
		"z",
		"vm"
	],
	zero_crossing: [
		"x",
		"y",
		"z"
	]
}, xa = {
	sadeh_1994: {
		methodFamilyId: "sadeh_1994",
		algorithmValue: "Sadeh1994",
		label: "Sadeh 1994"
	},
	cole_kripke_1992: {
		methodFamilyId: "cole_kripke_1992",
		algorithmValue: "ColeKripke1992",
		label: "Cole-Kripke 1992"
	},
	oakley_1997: {
		methodFamilyId: "oakley_1997",
		algorithmValue: "Oakley1997",
		label: "Oakley 1997"
	},
	galland_2012: {
		methodFamilyId: "galland_2012",
		algorithmValue: "Galland2012",
		label: "Galland 2012"
	},
	ucsd_scripps_2010: {
		methodFamilyId: "ucsd_scripps_2010",
		algorithmValue: "UcsdScripps2010",
		label: "UCSD Scripps 2010"
	},
	sazonov_2004: {
		methodFamilyId: "sazonov_2004",
		algorithmValue: "Sazonov2004",
		label: "Sazonov 2004"
	}
}, Ea = [
	{
		methodFamilyId: "sadeh_1994",
		implementationVariantId: "actilife",
		primitiveId: "sadeh",
		label: "ActiLife",
		parameters: { threshold: -4 },
		configurationAssignments: {
			implementation_variant: "actilife",
			scoring_threshold: -4
		}
	},
	{
		methodFamilyId: "sadeh_1994",
		implementationVariantId: "original",
		primitiveId: "sadeh",
		label: "Original",
		parameters: { threshold: 0 },
		configurationAssignments: {
			implementation_variant: "original",
			scoring_threshold: 0
		}
	},
	{
		methodFamilyId: "cole_kripke_1992",
		implementationVariantId: "actilife",
		primitiveId: "cole_kripke",
		label: "ActiLife",
		parameters: { useActilifeScaling: !0 },
		configurationAssignments: {
			implementation_variant: "actilife",
			use_actilife_scaling: !0
		}
	},
	{
		methodFamilyId: "cole_kripke_1992",
		implementationVariantId: "original",
		primitiveId: "cole_kripke",
		label: "Original",
		parameters: { useActilifeScaling: !1 },
		configurationAssignments: {
			implementation_variant: "original",
			use_actilife_scaling: !1
		}
	}
], Da = { angle_hasib: {
	familyId: "angle_hasib",
	configId: "hasib__van_hees_2015__anglez_5s",
	label: "van Hees 2015 on AngleZ 5s",
	algorithmValue: "vanHees2015",
	methodBindingId: "van_hees_2015",
	outputKind: "sleep_period_mask",
	epochSeconds: 5,
	inputFamily: "anglez",
	inputAxis: "z",
	inputSeriesKey: "anglez_5s",
	parameters: {},
	validationStatus: "literature_reference",
	defaultIncluded: !0,
	exploratory: !1,
	lineageIds: ["anglez_5s"]
} }, Ta = {
	id: "default",
	label: "Default threshold",
	threshold: .5
}, Ba = {
	count_cell_label: "{method_label} on {input_label}",
	count_provenance_cell_label: "{method_label} {implementation_label} on {input_label}",
	model_cell_label: "{model_label} ({preset_label})",
	consensus_cell_label: "{scope_label} sleep/wake outputs, {strategy_label} ({suffix})",
	skipped_method_reason: "{algorithm_value} excluded from the plan by caller request.",
	unsupported_epoch_reason: "{cell_label} is not planned: {method_label} is valid only at {supported_epochs} s.",
	count_30_warning: "30s count-HASIB outputs are planned for sensitivity analysis; literature/default GGIR parity is still 60s.",
	no_lstm_warning: "No LSTM model projections were supplied, so the plan contains no ONNX sleep/wake outputs.",
	unavailable_lstm_warning: "LSTM model artifact(s) not found on disk ({model_ids}); the ONNX projection cannot be loaded until the asset ships.",
	count_consensus_scope_label: "Count-HASIB",
	lstm_consensus_scope_label: "LSTM ({model_ids})",
	count_lstm_consensus_scope_label: "Count-HASIB + LSTM ({model_ids})",
	all_consensus_scope_label: "All"
}, za = [
	{
		optionId: "ggir_parity_default",
		value: "ggir_parity_default",
		label: "GGIR parity default"
	},
	{
		optionId: "literature_reference",
		value: "literature_reference",
		label: "Literature reference"
	},
	{
		optionId: "local_model_validated",
		value: "local_model_validated",
		label: "Local model validated"
	},
	{
		optionId: "exploratory",
		value: "exploratory",
		label: "Exploratory"
	},
	{
		optionId: "derived_consensus",
		value: "derived_consensus",
		label: "Derived consensus"
	}
], Ra = {
	majority_tie_sleep: "majority",
	strict_majority: "strict majority",
	intersection_sleep: "intersection",
	union_sleep: "union"
}, Ma = {
	output_family: "count_hasib",
	count_family: "zero_crossing",
	axis: "y",
	epoch_seconds: 60,
	model_threshold: .5,
	implementation_variant: "hasib",
	neishabouri_cap_300: !0,
	consensus_strategy: "majority_tie_sleep"
}, Oa = {
	output_family: {
		count_hasib: "Count HASIB",
		angle_hasib: "Angle HASIB",
		lstm: "LSTM",
		consensus: "Consensus"
	},
	algorithm_id: {},
	count_family: {
		neishabouri: "Neishabouri",
		zero_crossing: "zero-crossing"
	},
	axis: {
		x: "X",
		y: "Y",
		z: "Z",
		vm: "VM"
	},
	epoch_seconds: {
		5: "5s",
		30: "30s",
		60: "60s"
	},
	model_id: {},
	model_threshold: {},
	implementation_variant: {
		hasib: "HASIB",
		actilife: "ActiLife",
		original: "Original"
	},
	scoring_threshold: {
		"-4": "-4",
		0: "0"
	},
	use_actilife_scaling: {
		False: "Original scaling",
		True: "ActiLife scaling"
	},
	neishabouri_cap_300: { True: "Enabled" },
	consensus_input_config_ids: {},
	consensus_strategy: {
		majority_tie_sleep: "majority",
		strict_majority: "strict majority",
		intersection_sleep: "intersection",
		union_sleep: "union"
	}
}, Pa = {
	hashContractId: "actoglance.hash.algorithm-output-cell.fnv1a32-json-v1",
	algorithm: "fnv1a_32",
	sortKeys: !0,
	itemSeparator: ",",
	keySeparator: ":",
	ensureAscii: !0,
	initialValue: 2166136261,
	prime: 16777619,
	unsignedWidthBits: 32,
	lowercaseHexWidth: 8,
	excludedFieldNames: ["configHash", "conformance"]
}, Na = {
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
}, Ka = [
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
], La = Ka.filter((e) => "planner_output_cell" === e.cellRole).map((e) => `${e.segments[0]?.literalValue ?? ""}${e.segmentSeparator}`).filter((e, t, a) => a.indexOf(e) === t).sort();
function ja(e, t, a) {
	const r = ka[e];
	if (!r.compatibleAxisIds.includes(t)) throw new Error(`${e} does not provide ${t} count input.`);
	return r.seriesKeyTemplate.replace("{axis}", t).replace("{epoch_seconds}", String(a));
}
function Ua(e, t, a, r) {
	return Ca.includes(e) && "zero_crossing" === t && "y" === a && 60 === r;
}
function Ga(e, t) {
	return "sadeh_1994" === e && "neishabouri" === t;
}
function Fa(e, t) {
	const a = e.segmentSeparator, r = e.segments, i = t.split(a), n = r.findIndex((e) => !0 === e.greedy);
	let o, s;
	if (n >= 0) {
		const e = r.length - n - 1;
		if (i.length < r.length) return null;
		s = i.slice(0, n).map((e) => [e]), s.push(i.slice(n, i.length - e));
		for (const t of i.slice(i.length - e)) s.push([t]);
		o = r;
	} else {
		const e = r.flatMap((e, t) => !0 === e.optional ? [t] : []), t = r.length - i.length;
		if (t < 0 || t > e.length) return null;
		const a = new Set(e.slice(e.length - t));
		o = r.filter((e, t) => !a.has(t)), s = i.map((e) => [e]);
	}
	const l = {};
	for (let c = 0; c < o.length; c += 1) {
		const e = o[c], t = s[c];
		if (void 0 === e || void 0 === t) return null;
		let r = t.join(a);
		if (void 0 === e.literalValue) {
			if (void 0 !== e.tagPrefix) {
				if (!r.startsWith(e.tagPrefix)) return null;
				r = r.slice(e.tagPrefix.length);
			}
			if (0 === r.length) return null;
			if (void 0 !== e.valueEnumerationId) {
				const t = Na[e.valueEnumerationId]?.[r];
				if (void 0 === t) return null;
				for (const [e, a] of Object.entries(t)) l[e] = a;
			}
			l[e.segmentRole] = r;
		} else if (r !== e.literalValue) return null;
	}
	return l;
}
function Va(e) {
	let t = null;
	for (const a of Ka) {
		const r = Fa(a, e);
		if (null !== r) {
			if (null !== t) return null;
			t = {
				grammarId: a.grammarId,
				values: r
			};
		}
	}
	return t;
}
function qa(e, t) {
	const a = Ka.find((t) => t.grammarId === e);
	if (void 0 === a) throw new Error(`Unknown cell id grammar ${e}.`);
	const r = [];
	for (const i of a.segments) {
		if (void 0 !== i.literalValue) {
			r.push(i.literalValue);
			continue;
		}
		const e = i.valueEnumerationId;
		let a = t[i.segmentRole];
		if (void 0 === a && void 0 !== e) {
			const r = Object.entries(Na[e] ?? {}).filter(([, e]) => {
				const a = Object.entries(e);
				return a.length > 0 && a.every(([e, a]) => String(t[e]) === String(a));
			});
			a = (1 === r.length ? r[0] : void 0)?.[0];
		}
		if (void 0 === a) {
			if (!0 === i.optional) continue;
			throw new Error(`Cell id segment ${i.segmentRole} has no value.`);
		}
		const n = String(a);
		if (void 0 !== e && void 0 === Na[e]?.[n]) throw new Error(`Cell id segment ${i.segmentRole} value ${n} is outside its declared enumeration.`);
		r.push(void 0 === i.tagPrefix ? n : `${i.tagPrefix}${n}`);
	}
	return r.join(a.segmentSeparator);
}
const Ha = { family: "unknown" };
function Wa(e, t) {
	const a = e[t];
	return void 0 === a ? void 0 : String(a);
}
function $a(e) {
	if ("string" != typeof e || 0 === e.length) return Ha;
	const t = Va(e);
	if (null === t) return Ha;
	const a = t.values;
	switch (t.grammarId) {
		case "count_cell": {
			const e = Wa(a, "method_family"), t = Wa(a, "count_family"), r = Wa(a, "axis"), i = Wa(a, "epoch_seconds");
			if (void 0 === e || void 0 === t || void 0 === r || void 0 === i) return Ha;
			const n = Wa(a, "implementation_variant");
			return {
				family: "count_hasib",
				scorer: e,
				...void 0 !== n ? { provenance: n } : {},
				countSource: t,
				signalAxis: r,
				epoch: i
			};
		}
		case "angle_cell": {
			const e = Wa(a, "method_family"), t = Wa(a, "epoch_seconds");
			return void 0 === e || void 0 === t ? Ha : {
				family: "angle_hasib",
				scorer: e,
				signalAxis: "anglez",
				epoch: t
			};
		}
		case "model_cell": {
			const e = Wa(a, "model_slug"), t = Wa(a, "preset_slug");
			return void 0 === e || void 0 === t ? Ha : {
				family: "lstm",
				lstmModel: e,
				lstmThreshold: t
			};
		}
		case "consensus_cell": {
			const e = Wa(a, "strategy"), t = Wa(a, "epoch_seconds");
			return void 0 === e || void 0 === t ? Ha : {
				family: "consensus",
				consensusStrategy: e,
				epoch: t
			};
		}
		default: return Ha;
	}
}
const Ya = new Map(Yt.map((e) => [e.id, e])), Xa = new Map(Xt.map((e) => [e.id, e]));
function Ja(e) {
	const t = Xa.get(e);
	if (!t) throw new Error(`unknown signal channel: ${e}`);
	return t;
}
function Za(e) {
	const t = Wt.find((t) => t.value === e);
	if (!t) throw new Error(`unknown epoch length: ${e}`);
	return t.seconds;
}
const Qa = [
	30,
	60,
	120
], er = Za("epoch_60s");
function tr(e, t) {
	const a = function(e) {
		const t = Ya.get(e);
		if (!t) throw new Error(`unknown epoch grid: ${e}`);
		return t;
	}(e).epochSeconds;
	return null !== a ? a : t && t > 0 ? t : er;
}
function ar(e) {
	return Qa.includes(e);
}
const rr = Za("epoch_60s");
function ir(e) {
	return ar(e) || e > 0 && e < rr && rr % e === 0;
}
const nr = qt.filter((e) => "sleep_wake" === e.kind).map((e) => ({
	id: e.id,
	displayGrid: e.displayGrid,
	execution: e.execution,
	requiredSignal: e.requiredSignal,
	family: e.family
})), or = new Map(nr.map((e) => [e.id, e])), sr = new Map([...nr].reverse().flatMap((e) => e.family ? [[e.family, e]] : []));
function lr() {
	const e = Xt.find((e) => null != e.countAxis);
	if (e) return e.grid;
	const t = [...Yt].sort((e, t) => tr(t.id) - tr(e.id))[0];
	if (!t) throw new Error("ontology declares no epoch grids");
	return t.id;
}
function cr(e, t) {
	return tr(function(e) {
		if (!e) return lr();
		const t = or.get(e);
		if (t) return t.displayGrid;
		const a = $a(e);
		switch (a.family) {
			case "angle_hasib":
			case "lstm": {
				const e = a.scorer ?? a.lstmModel;
				return (e ? or.get(e) ?? sr.get(e) : void 0)?.displayGrid ?? lr();
			}
			case "count_hasib":
			case "consensus":
			case "unknown": return lr();
		}
	}(e), t);
}
function ur(e) {
	if (!e) return !1;
	const t = or.get(e);
	return t ? "angle_spt" === t.execution : "angle_hasib" === $a(e).family;
}
Math.max(...Yt.map((e) => 86400 / tr(e.id, Math.min(...Qa)) * 3));
const dr = _e, pr = new Map(Object.entries({
	gt3x_binary: {
		badge: "gt3x",
		sortGroup: 0,
		formatLabel: "GT3X binary",
		epochFamily: null,
		labelIsCountEpoch: !1,
		scorable: !1,
		rawSignal: !0,
		defaultSleepAlgorithm: null,
		importWorkerBudget: null
	},
	actigraph_raw_csv: {
		badge: "actigraph raw",
		sortGroup: 0,
		formatLabel: "ActiGraph raw CSV",
		epochFamily: null,
		labelIsCountEpoch: !1,
		scorable: !1,
		rawSignal: !0,
		defaultSleepAlgorithm: null,
		importWorkerBudget: null
	},
	actigraph_epoched_csv: {
		badge: "actigraph epoch",
		sortGroup: 1,
		formatLabel: "ActiGraph epoch CSV",
		epochFamily: "sixty_s",
		labelIsCountEpoch: !1,
		scorable: !1,
		rawSignal: !1,
		defaultSleepAlgorithm: null,
		importWorkerBudget: null
	},
	geneactiv_bin: {
		badge: "geneactiv bin",
		sortGroup: 0,
		formatLabel: "GENEActiv BIN",
		epochFamily: null,
		labelIsCountEpoch: !1,
		scorable: !1,
		rawSignal: !0,
		defaultSleepAlgorithm: null,
		importWorkerBudget: null
	},
	geneactiv_raw_csv: {
		badge: "geneactiv raw",
		sortGroup: 0,
		formatLabel: "GENEActiv raw CSV",
		epochFamily: null,
		labelIsCountEpoch: !1,
		scorable: !1,
		rawSignal: !0,
		defaultSleepAlgorithm: null,
		importWorkerBudget: null
	},
	epochs_60s: {
		badge: "activity counts",
		sortGroup: 1,
		formatLabel: null,
		epochFamily: "sixty_s",
		labelIsCountEpoch: !0,
		scorable: !0,
		rawSignal: !1,
		defaultSleepAlgorithm: null,
		importWorkerBudget: null
	},
	epochs_5s_ggir: {
		badge: "5 s GGIR",
		sortGroup: 2,
		formatLabel: "GGIR 5 s epochs",
		epochFamily: "five_s",
		labelIsCountEpoch: !1,
		scorable: !0,
		rawSignal: !1,
		defaultSleepAlgorithm: "van_hees_2015",
		importWorkerBudget: null
	},
	ggir_5s_upload: {
		badge: "ggir",
		sortGroup: 2,
		formatLabel: "GGIR 5 s upload",
		epochFamily: "five_s",
		labelIsCountEpoch: !1,
		scorable: !0,
		rawSignal: !1,
		defaultSleepAlgorithm: "van_hees_2015",
		importWorkerBudget: "ggir_part1"
	},
	actlumus_txt: {
		badge: "actlumus",
		sortGroup: 1,
		formatLabel: "ActLumus TXT",
		epochFamily: null,
		labelIsCountEpoch: !1,
		scorable: !1,
		rawSignal: !1,
		defaultSleepAlgorithm: null,
		importWorkerBudget: null
	},
	acttrust_txt: {
		badge: "acttrust",
		sortGroup: 1,
		formatLabel: "ActTrust TXT",
		epochFamily: null,
		labelIsCountEpoch: !1,
		scorable: !1,
		rawSignal: !1,
		defaultSleepAlgorithm: null,
		importWorkerBudget: null
	}
}));
function _r(e) {
	return null == e ? void 0 : pr.get(e);
}
const mr = new Map(Object.entries({
	"actoglance.source.actical_vendor_artifact.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.actigraph_agd.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.actigraph_epoched_csv.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.actigraph_gt3x_binary.v1": {
		coreEpochSource: "gt3x_stream",
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.actigraph_raw_csv.v1": {
		coreEpochSource: "raw_csv_stream",
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.activinsights_vendor_artifact.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.activpal_vendor_artifact.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.axivity_cwa.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.camntech_actiwatch_awd.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.condor_actlumus_txt.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.condor_acttrust_txt.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.empatica_embraceplus_avro.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.gaitup_vendor_artifact.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.geneactiv_bin.v1": {
		coreEpochSource: "bin_stream",
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.geneactiv_epoch_csv.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.geneactiv_raw_csv.v1": {
		coreEpochSource: "raw_csv_stream",
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.generic_consumer_wearable_table.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.generic_epoch_csv.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.generic_epoch_excel.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.generic_raw_xyz_table.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.generic_vendor_activity_table.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.ggir_generic_epoch_csv.v1": {
		coreEpochSource: "mapped_ggir_csv",
		epochGapsNeedInvalidMask: !0,
		restoresWithGgirResults: !1
	},
	"actoglance.source.ggir_map_csv.v1": {
		coreEpochSource: "mapped_ggir_csv",
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.ggir_metashort_csv.v1": {
		coreEpochSource: "mapped_ggir_csv",
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.ggir_rdata.v1": {
		coreEpochSource: "ggir_part1_rdata",
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !0
	},
	"actoglance.source.mims_metric_table.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.motionwatch_vendor_artifact.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.movisens_vendor_artifact.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.nhanes_pax_minute.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.nhanes_pax_raw.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.philips_actiware_csv.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.philips_actiwatch_aw5.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	},
	"actoglance.source.shimmer_vendor_artifact.v1": {
		coreEpochSource: null,
		epochGapsNeedInvalidMask: !1,
		restoresWithGgirResults: !1
	}
}));
function yr(e) {
	return null == e ? void 0 : mr.get(e);
}
new Map(Object.entries({
	actigraph_epoched_csv: "actoglance.source.actigraph_epoched_csv.v1",
	actigraph_raw_csv: "actoglance.source.actigraph_raw_csv.v1",
	actlumus_txt: "actoglance.source.condor_actlumus_txt.v1",
	acttrust_txt: "actoglance.source.condor_acttrust_txt.v1",
	geneactiv_bin: "actoglance.source.geneactiv_bin.v1",
	geneactiv_raw_csv: "actoglance.source.geneactiv_raw_csv.v1",
	ggir_5s_upload: "actoglance.source.ggir_metashort_csv.v1",
	gt3x_binary: "actoglance.source.actigraph_gt3x_binary.v1"
}));
const fr = new Map(Object.entries({
	".agd": "head_text",
	".avro": "head_text",
	".aw5": "none",
	".awd": "head_text",
	".bin": "head_text",
	".csv": "head_text",
	".cwa": "head_text",
	".gt3x": "gt3x_info_entry",
	".json": "head_text",
	".rda": "none",
	".rdata": "none",
	".tsv": "head_text",
	".txt": "head_text",
	".xls": "head_text",
	".xlsx": "head_text"
}));
function gr(e) {
	const t = e.lastIndexOf(".");
	return (t < 0 ? void 0 : fr.get(e.slice(t).toLowerCase())) ?? "head_text";
}
const hr = new Map(Object.entries({
	"actoglance.source.actical_vendor_artifact.v1": "head_text",
	"actoglance.source.actigraph_agd.v1": "head_text",
	"actoglance.source.actigraph_epoched_csv.v1": "head_text",
	"actoglance.source.actigraph_gt3x_binary.v1": "gt3x_info_entry",
	"actoglance.source.actigraph_raw_csv.v1": "head_text",
	"actoglance.source.activinsights_vendor_artifact.v1": "head_text",
	"actoglance.source.activpal_vendor_artifact.v1": "head_text",
	"actoglance.source.axivity_cwa.v1": "head_text",
	"actoglance.source.camntech_actiwatch_awd.v1": "head_text",
	"actoglance.source.condor_actlumus_txt.v1": "head_text",
	"actoglance.source.condor_acttrust_txt.v1": "head_text",
	"actoglance.source.empatica_embraceplus_avro.v1": "head_text",
	"actoglance.source.gaitup_vendor_artifact.v1": "head_text",
	"actoglance.source.geneactiv_bin.v1": "head_text",
	"actoglance.source.geneactiv_epoch_csv.v1": "head_text",
	"actoglance.source.geneactiv_raw_csv.v1": "head_text",
	"actoglance.source.generic_consumer_wearable_table.v1": "head_text",
	"actoglance.source.generic_epoch_csv.v1": "head_text",
	"actoglance.source.generic_epoch_excel.v1": "head_text",
	"actoglance.source.generic_raw_xyz_table.v1": "head_text",
	"actoglance.source.generic_vendor_activity_table.v1": "head_text",
	"actoglance.source.ggir_generic_epoch_csv.v1": "head_text",
	"actoglance.source.ggir_map_csv.v1": "head_text",
	"actoglance.source.ggir_metashort_csv.v1": "head_text",
	"actoglance.source.ggir_rdata.v1": "none",
	"actoglance.source.mims_metric_table.v1": "head_text",
	"actoglance.source.motionwatch_vendor_artifact.v1": "head_text",
	"actoglance.source.movisens_vendor_artifact.v1": "head_text",
	"actoglance.source.nhanes_pax_minute.v1": "head_text",
	"actoglance.source.nhanes_pax_raw.v1": "head_text",
	"actoglance.source.philips_actiware_csv.v1": "head_text",
	"actoglance.source.philips_actiwatch_aw5.v1": "none",
	"actoglance.source.shimmer_vendor_artifact.v1": "head_text"
}));
function vr(e) {
	return hr.get(e) ?? "head_text";
}
const br = Xt.filter((e) => e.sourceSelectable).map((e) => ({
	value: e.id,
	label: e.label
})), wr = /_(5|10|15|20|30)sec\.csv$/i, Sr = /RAW\.csv$/i;
function Cr(e) {
	return !!Sr.test(e) && e.replace(/\.csv$/i, "").endsWith("RAW");
}
function Ir(e) {
	const t = e.source_type ?? e.sourceType;
	if (t) return t;
	const a = e.metadata_json ?? {}, r = a.type;
	if ("gt3x" === r) return dr.GT3X_BINARY;
	if ("geneactiv_bin" === r) return dr.GENEACTIV_BIN;
	if ("raw_geneactiv" === r) return dr.GENEACTIV_RAW_CSV;
	if ("actigraph_raw" === r) return dr.ACTIGRAPH_RAW_CSV;
	if ("actlumus" === r) return dr.ACTLUMUS_TXT;
	if ("acttrust" === r) return dr.ACTTRUST_TXT;
	const i = (e.filename ?? "").toLowerCase();
	if (i.endsWith(".gt3x")) return dr.GT3X_BINARY;
	if (i.endsWith(".bin")) return dr.GENEACTIV_BIN;
	if (Cr(e.filename ?? "")) return dr.ACTIGRAPH_RAW_CSV;
	if (i.endsWith("_60sec.csv")) return dr.EPOCHS_60S;
	if (i.endsWith("_5sec_ggir.csv")) return dr.GGIR_5S_UPLOAD;
	if (i.endsWith(".rdata") || i.endsWith(".rda")) return dr.GGIR_5S_UPLOAD;
	if (wr.test(i)) return dr.ACTIGRAPH_EPOCHED_CSV;
	const n = a.epoch_length_seconds;
	if (60 === n) return dr.EPOCHS_60S;
	if (5 === n) return dr.EPOCHS_5S_GGIR;
	if ("raw" === e.status) {
		if (Cr(e.filename ?? "")) return dr.ACTIGRAPH_RAW_CSV;
		if (i.endsWith(".csv")) return dr.GENEACTIV_RAW_CSV;
	}
	return "gt3x" === e.devicePreset ? dr.GT3X_BINARY : "geneactiv" !== e.devicePreset || i.endsWith("_60sec.csv") ? (e.epochLengthSeconds, dr.EPOCHS_60S) : dr.GENEACTIV_RAW_CSV;
}
const kr = {
	"actoglance.source.philips_actiware_csv.v1": "Actiwatch activity counts",
	"actoglance.source.philips_actiwatch_aw5.v1": "Actiwatch activity counts"
};
function Ar(e, t) {
	const a = Ja(e);
	return t && "activity_counts" === a.quantity ? "axisY" !== a.seriesKey && "axisY30s" !== a.seriesKey ? null : "epoch_30s" === a.grid ? `${t} (30 s)` : t : a.label;
}
const xr = {
	[dr.GT3X_BINARY]: [[dr.EPOCHS_60S, "60 s"], [dr.EPOCHS_5S_GGIR, "5 s GGIR"]],
	[dr.ACTIGRAPH_RAW_CSV]: [
		[dr.ACTIGRAPH_RAW_CSV, "Raw"],
		[dr.EPOCHS_60S, "60 s"],
		[dr.EPOCHS_5S_GGIR, "5 s GGIR"]
	],
	[dr.GENEACTIV_BIN]: [[dr.EPOCHS_60S, "60 s"], [dr.EPOCHS_5S_GGIR, "5 s GGIR"]],
	[dr.GENEACTIV_RAW_CSV]: [[dr.EPOCHS_60S, "60 s"], [dr.EPOCHS_5S_GGIR, "5 s GGIR"]],
	[dr.EPOCHS_60S]: [[dr.EPOCHS_60S, "60 s"]],
	[dr.ACTIGRAPH_EPOCHED_CSV]: [[dr.EPOCHS_60S, "60 s"]],
	[dr.ACTLUMUS_TXT]: [[dr.EPOCHS_60S, "60 s"]],
	[dr.ACTTRUST_TXT]: [[dr.EPOCHS_60S, "60 s"]],
	[dr.EPOCHS_5S_GGIR]: [[dr.EPOCHS_5S_GGIR, "5 s GGIR"]],
	[dr.GGIR_5S_UPLOAD]: [[dr.GGIR_5S_UPLOAD, "5 s GGIR"]]
};
function Er(e, t, a = /* @__PURE__ */ new Set(), r = 60) {
	return (xr[t] ?? xr[dr.EPOCHS_60S]).map(([t, i]) => ({
		file_id: e,
		source_type: t,
		label: Dr({
			source_type: t,
			label: i
		}, r),
		available: !a.has(t)
	}));
}
function Dr(e, t) {
	return !0 === _r(e.source_type)?.labelIsCountEpoch ? `${String(t)} s` : e.label;
}
function Tr(e) {
	return !!e && (!!st(e) || Array.isArray(e.sleepMarkers) && e.sleepMarkers.length > 0);
}
function Br(e) {
	return (e?.nonwearMarkers?.some((e) => null != e.startTimestamp && null != e.endTimestamp) ?? !1) || (e?.explicitNoNonwear ?? !1);
}
function zr(e) {
	const t = /* @__PURE__ */ new Set();
	for (const r of Array.isArray(e.sleepMarkers) ? e.sleepMarkers : []) "auto" === r.source && void 0 !== r.settingsHash && t.add(r.settingsHash);
	const a = e.sleepPeriodDetectionConfig?.haspt_variant;
	return {
		id: e.id,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm,
		detectionRule: e.detectionRule ?? null,
		autoSettingsHashes: [...t],
		hasptVariant: "string" == typeof a ? a : null,
		lastModifiedAt: e.lastModifiedAt,
		scored: Tr(e),
		nonwearDecided: Br(e),
		nonwearSpans: JSON.stringify((Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : []).flatMap((e) => null != e.startTimestamp && null != e.endTimestamp ? [[e.startTimestamp, e.endTimestamp]] : []))
	};
}
function Rr(e) {
	const t = /* @__PURE__ */ new Map();
	for (const a of e) {
		if (null == a.id) continue;
		let e = t.get(a.fileId);
		e || t.set(a.fileId, e = []), e.push(zr(a));
	}
	return [...t].map(([e, t]) => ({
		fileId: e,
		rows: t
	}));
}
function Mr() {
	if ("undefined" != typeof crypto && "function" == typeof crypto.randomUUID) return crypto.randomUUID();
	const e = /* @__PURE__ */ new Uint8Array(16);
	crypto.getRandomValues(e);
	const t = e[6] ?? 0, a = e[8] ?? 0;
	e[6] = 15 & t | 64, e[8] = 63 & a | 128;
	const r = [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
	return `${r.slice(0, 8)}-${r.slice(8, 12)}-${r.slice(12, 16)}-${r.slice(16, 20)}-${r.slice(20)}`;
}
function Or(e) {
	e.on("versionchange", (t) => {
		if (null !== t.newVersion) return async function() {
			try {
				await x().flushPendingSave();
			} catch {}
		}().then(() => {
			e.close();
			try {
				globalThis.location?.reload();
			} catch {}
		}), !1;
	}), e.on("blocked", () => {
		console.warn(`[idb] "${e.name}" upgrade is blocked by another open connection (another tab on an older version?). Close other tabs to continue.`);
	});
}
async function Pr(e, t) {
	let a;
	if (await e.each((e) => {
		if (!a) try {
			t(e);
		} catch (r) {
			a = { error: r };
		}
	}), a) throw a.error;
}
const Nr = "diaryParticipantKey", Kr = "diarySourceKeys", Lr = "diary-dirty:";
function jr(e) {
	const t = Object.fromEntries(qr.flatMap((t) => e[t] ? [[t, e[t]]] : []));
	for (const a of qr) Reflect.deleteProperty(e, a);
	return Object.keys(t).length > 0 ? t : null;
}
function Ur(e) {
	return "incomplete" !== e.ingestState;
}
const Gr = new Set(Object.keys(He).filter((e) => He[e].nightDecision)), Fr = [
	["bedTime", "diaryInBedTime"],
	["lightsOut", "diaryOnsetTime"],
	["wakeTime", "diaryWakeTime"],
	["gotUp", "diaryOutOfBedTime"]
];
function Vr(e) {
	let t = !1;
	for (const [a, r] of Fr) Object.hasOwn(e, a) && (Object.hasOwn(e, r) || (e[r] = e[a]), Reflect.deleteProperty(e, a), t = !0);
	return t;
}
const qr = [
	"part1",
	"ms2",
	"ms3",
	"ms4",
	"ms5",
	"sleeplogRData",
	"stockMs2",
	"stockMs3",
	"stockMs4",
	"stockMs5",
	"qwindowCsv",
	"resultsCsv"
];
async function Hr(e, t) {
	const [a, r] = await Promise.all([e.ggirResultsBundles.get(t), e.ggirResultsBlobs.get(t)]);
	return a ? Wr(a, r) : void 0;
}
function Wr(e, t) {
	return {
		...e,
		...Object.fromEntries(qr.flatMap((e) => {
			const a = t?.[e];
			return a ? [[e, a]] : [];
		}))
	};
}
async function $r(e, t) {
	const a = await e.ggirCorrectedValues.where("[fileId+key]").between([z.minKey, z.minKey], [z.maxKey, z.maxKey]).keys(), r = new Set(t);
	return new Map(a.filter(([e]) => r.has(e)));
}
const Yr = { actiwareFileData: Object.keys({
	actiwareIntervals: !0,
	actiwareStatistics: !0,
	actiwareStatisticsNeedsRecompute: !0,
	actiwareSleepWake: !0,
	actiwareRecording: !0,
	actiwareWakeThreshold: !0,
	actiwareRestProposal: !0,
	actiwareIntervalsRefusal: !0,
	oakleyThreshold: !0
}) };
function Xr(e) {
	return function(e, t) {
		const a = t, r = {};
		for (const i of Yr.actiwareFileData) null != a[i] && (r[i] = a[i]), Reflect.deleteProperty(a, i);
		return Object.keys(r).length > 0 ? r : null;
	}(0, e);
}
const Jr = Symbol.for("sleep-scoring.dexie.uncached-parse-index-syntax");
var Zr = class extends z {
	files;
	activityDays;
	scoredVariantMasks;
	markers;
	studySettings;
	sensorNonwear;
	diaryEntries;
	stagedDiaryEntries;
	auditLog;
	scoringSessions;
	walLog;
	algorithmRuns;
	dailyGgirSummaries;
	viewLogs;
	localExecutions;
	complexityEvidence;
	projectMeta;
	diaryBindingDirty;
	presetFamilies;
	diaryOccurrences;
	diaryDecisionLogs;
	diaryImportSessions;
	diaryImportSessionBytes;
	ggirResultsBundles;
	ggirResultsBlobs;
	ggirCorrectedValues;
	ggirScorerReviews;
	actiwareStatisticsInputs;
	physicalActivityFileSummaries;
	markerProvenance;
	actiwareFileData;
	placementResults;
	constructor(e = "SleepScoringDB") {
		super(e), function(e) {
			const t = Object.getPrototypeOf(e.Version.prototype), a = Reflect.get(t, "_parseIndexSyntax");
			if (a[Jr]) return;
			const r = /* @__PURE__ */ new Map(), i = function(e) {
				let t = r.get(e);
				return t || (t = a.call(this, e), r.set(e, t)), t.map((e) => ({
					...e,
					keyPath: Array.isArray(e.keyPath) ? [...e.keyPath] : e.keyPath
				}));
			};
			i[Jr] = a, t._parseIndexSyntax = i;
		}(this), this.version(1).stores({
			files: "++id, &filename, fileHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username], fileId, syncStatus"
		}), this.version(2).stores({
			files: "++id, &filename, fileHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username], fileId, syncStatus",
			studySettings: "++id, &key"
		}), this.version(3).stores({
			files: "++id, &filename, fileHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username], fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId"
		}), this.version(4).stores({
			files: "++id, &filename, fileHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username], fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId"
		}), this.version(5).stores({
			files: "++id, &filename, fileHash, source",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username], fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId"
		}), this.version(6).stores({
			files: "++id, &filename, fileHash, source",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username], fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId"
		}).upgrade(async (e) => {
			const t = await e.table("activityDays").toArray();
			for (const r of t) {
				const t = new Float64Array(r.timestamps);
				if (t.length > 0 && (t[0] ?? 0) > 1e10) {
					const a = new Float64Array(t.length);
					for (let e = 0; e < t.length; e++) a[e] = (t[e] ?? 0) / 1e3;
					await e.table("activityDays").put({
						...r,
						timestamps: a.buffer
					});
				}
			}
			const a = await e.table("markers").toArray();
			for (const r of a) {
				let t = !1;
				const a = r.sleepMarkers?.map((e) => {
					const a = null != e.onsetTimestamp && e.onsetTimestamp > 1e10, r = null != e.offsetTimestamp && e.offsetTimestamp > 1e10;
					return a || r ? (t = !0, {
						...e,
						onsetTimestamp: a ? (e.onsetTimestamp ?? 0) / 1e3 : e.onsetTimestamp,
						offsetTimestamp: r ? (e.offsetTimestamp ?? 0) / 1e3 : e.offsetTimestamp
					}) : e;
				}) ?? [], i = r.nonwearMarkers?.map((e) => {
					const a = null != e.startTimestamp && e.startTimestamp > 1e10, r = null != e.endTimestamp && e.endTimestamp > 1e10;
					return a || r ? (t = !0, {
						...e,
						startTimestamp: a ? (e.startTimestamp ?? 0) / 1e3 : e.startTimestamp,
						endTimestamp: r ? (e.endTimestamp ?? 0) / 1e3 : e.endTimestamp
					}) : e;
				}) ?? [];
				t && await e.table("markers").put({
					...r,
					sleepMarkers: a,
					nonwearMarkers: i
				});
			}
		}), this.version(7).stores({
			files: "++id, &filename, fileHash, source",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username], fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId"
		}), this.version(8).stores({
			files: "++id, &filename, fileHash, source, participantId",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username], fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId"
		}), this.version(9).stores({
			files: "++id, &filename, fileHash, source, participantId",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username], fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId"
		}), this.version(10).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm], [fileId+date+username], fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId"
		}).upgrade(async (e) => {
			const t = await e.table("files").toArray();
			for (const r of t) {
				if (r.sourceType) continue;
				const t = Ir({
					filename: r.filename,
					devicePreset: r.devicePreset,
					epochLengthSeconds: r.epochLengthSeconds
				});
				await e.table("files").put({
					...r,
					sourceType: t
				});
			}
			const a = await e.table("markers").toArray();
			for (const r of a) "string" == typeof r.algorithm && r.algorithm.length > 0 || await e.table("markers").put({
				...r,
				algorithm: ie
			});
		});
		const t = ue.SADEH_1994_ACTILIFE;
		this.version(11).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus"
		}).upgrade(async (e) => {
			const a = await e.table("markers").toArray(), r = (/* @__PURE__ */ new Date()).toISOString(), i = /* @__PURE__ */ new Map(), n = [], o = [];
			for (const s of a) {
				const e = "string" == typeof s.algorithm && s.algorithm.length > 0 ? s.algorithm : t, a = "__legacy__" === e ? t : e, l = `${s.fileId}:${s.date}:${s.username}:${a}`;
				let c = i.get(l);
				c || (c = Mr(), i.set(l, c), n.push({
					sessionId: c,
					fileId: s.fileId,
					date: s.date,
					username: s.username,
					algorithm: a,
					startedAt: r,
					syncStatus: "pending",
					contentHash: "",
					lastModifiedAt: r
				})), o.push({
					...s,
					scoringSessionId: c
				});
			}
			o.length > 0 && await e.table("markers").bulkPut(o), n.length > 0 && await e.table("scoringSessions").bulkPut(n);
		}), this.version(12).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts"
		}), this.version(13).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash"
		}), this.version(14).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId"
		}), this.version(15).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId"
		}).upgrade(async (e) => {
			const t = e.table("files"), a = await t.where("sourceType").equals("epochs_60s").toArray(), r = [];
			for (const i of a) {
				const { sourceType: e, ...a } = i, n = Ir(a);
				"epochs_60s" !== n && r.push(t.update(i.id, { sourceType: n }));
			}
			await Promise.all(r);
		}), this.version(16).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId"
		}).upgrade(async (e) => {
			const t = e.table("files"), a = {
				raw_csv: "geneactiv_raw_csv",
				actigraph_counts_csv: "actigraph_epoched_csv"
			}, r = [];
			for (const [i, n] of Object.entries(a)) {
				const e = await t.where("sourceType").equals(i).toArray();
				for (const a of e) r.push(t.update(a.id, { sourceType: n }));
			}
			await Promise.all(r);
		}), this.version(17).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId"
		}).upgrade(async (e) => {
			const t = e.table("markers"), a = await t.toArray(), r = [];
			for (const i of a) i.detectionRule || r.push(t.update(i.id, { detectionRule: ne }));
			await Promise.all(r);
		}), this.version(18).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId"
		}), this.version(19).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId"
		}), this.version(20).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser"
		}), this.version(21).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt"
		}), this.version(22).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt"
		}), this.version(23).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key"
		}), this.version(24).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash"
		}), this.version(25).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash"
		}).upgrade(async (e) => {
			const t = Vr, a = (a) => e.table(a).toCollection().modify((e) => {
				t(e);
			});
			await Promise.all([a("diaryEntries"), a("stagedDiaryEntries")]), await e.table("walLog").toCollection().modify((e) => {
				const a = e.payload;
				if (null === a || "object" != typeof a) return;
				const r = a.entry;
				null !== r && "object" == typeof r && t(r);
			});
		}), this.version(26).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash"
		}), this.version(27).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash"
		}), this.version(28).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash",
			diaryImportSessions: "sourceSha256, updatedAt, status"
		}), this.version(29).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash",
			diaryImportSessions: "sourceSha256, updatedAt, status",
			diaryImportSessionBytes: "sourceSha256"
		}).upgrade(async (e) => {
			const t = e.table("diaryImportSessions"), a = e.table("diaryImportSessionBytes"), r = await t.toArray(), i = [];
			for (const n of r) {
				const e = n.sourceSha256;
				if ("string" != typeof e) continue;
				const t = n.sourceBytes;
				t instanceof ArrayBuffer && i.push({
					sourceSha256: e,
					sizeBytes: "number" == typeof n.sizeBytes ? n.sizeBytes : t.byteLength,
					sourceBytes: t
				}), delete n.sourceBytes;
			}
			await a.bulkPut(i), await t.bulkPut(r);
		}), this.version(30).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			scoredVariantMasks: "&[fileId+date], fileId",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash",
			diaryImportSessions: "sourceSha256, updatedAt, status",
			diaryImportSessionBytes: "sourceSha256"
		}).upgrade(async (e) => {
			const t = e.table("activityDays"), a = e.table("scoredVariantMasks");
			for (const r of await t.toCollection().primaryKeys()) {
				let e;
				await t.where(":id").equals(r).modify((t) => {
					null == t.scoredVariantResults && void 0 === t.scoredVariantDiaryFingerprint || (e = {
						fileId: t.fileId,
						date: t.date,
						masks: t.scoredVariantResults ?? {},
						...void 0 !== t.scoredVariantDiaryFingerprint ? { diaryFingerprint: t.scoredVariantDiaryFingerprint } : {}
					}), delete t.scoredVariantResults, delete t.scoredVariantDiaryFingerprint;
				}), e && await a.put(e);
			}
		}), this.version(31).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			scoredVariantMasks: "&[fileId+date], fileId",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash",
			diaryImportSessions: "sourceSha256, updatedAt, status",
			diaryImportSessionBytes: "sourceSha256",
			ggirResultsBundles: "&fileId"
		}), this.version(32).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			scoredVariantMasks: "&[fileId+date], fileId",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash",
			diaryImportSessions: "sourceSha256, updatedAt, status",
			diaryImportSessionBytes: "sourceSha256",
			ggirResultsBundles: "&fileId",
			actiwareStatisticsInputs: "&fileId"
		}).upgrade(async (e) => {
			const t = e.table("files"), a = e.table("actiwareStatisticsInputs");
			for (const r of await t.toCollection().primaryKeys()) {
				let e;
				await t.where(":id").equals(r).modify((t) => {
					t.actiwareStatisticsInput && (e = {
						fileId: r,
						input: t.actiwareStatisticsInput
					}), delete t.actiwareStatisticsInput;
				}), e && await a.put(e);
			}
		}), this.version(33).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			scoredVariantMasks: "&[fileId+date], fileId",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash",
			diaryImportSessions: "sourceSha256, updatedAt, status",
			diaryImportSessionBytes: "sourceSha256",
			ggirResultsBundles: "&fileId",
			actiwareStatisticsInputs: "&fileId",
			markerProvenance: "&fileId"
		}).upgrade(async (e) => {
			const t = Rr(await e.table("markers").toArray());
			await e.table("markerProvenance").bulkPut(t);
		}), this.version(34).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			scoredVariantMasks: "&[fileId+date], fileId",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash",
			diaryImportSessions: "sourceSha256, updatedAt, status",
			diaryImportSessionBytes: "sourceSha256",
			ggirResultsBundles: "&fileId",
			actiwareStatisticsInputs: "&fileId",
			markerProvenance: "&fileId",
			actiwareFileData: "&fileId"
		}).upgrade(async (e) => {
			const t = e.table("files"), a = e.table("actiwareFileData");
			for (const r of await t.toCollection().primaryKeys()) {
				let e;
				await t.where(":id").equals(r).modify((t) => {
					const a = Xr(t);
					a && (e = {
						fileId: r,
						...a
					}), null == t.sourceEpochSeconds && a?.actiwareSleepWake && (t.sourceEpochSeconds = a.actiwareSleepWake.epochSeconds);
				}), e && await a.put(e);
			}
		}), this.version(35).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			scoredVariantMasks: "&[fileId+date], fileId",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash",
			diaryImportSessions: "sourceSha256, updatedAt, status",
			diaryImportSessionBytes: "sourceSha256",
			ggirResultsBundles: "&fileId",
			actiwareStatisticsInputs: "&fileId",
			markerProvenance: "&fileId",
			actiwareFileData: "&fileId",
			placementResults: "&fileId"
		}).upgrade(async (e) => {
			const t = e.table("markerProvenance");
			await t.clear(), await t.bulkPut(Rr(await e.table("markers").toArray()));
		}), this.version(36).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			scoredVariantMasks: "&[fileId+date], fileId",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash",
			diaryImportSessions: "sourceSha256, updatedAt, status",
			diaryImportSessionBytes: "sourceSha256",
			ggirResultsBundles: "&fileId",
			actiwareStatisticsInputs: "&fileId",
			markerProvenance: "&fileId",
			actiwareFileData: "&fileId",
			placementResults: "&fileId",
			physicalActivityFileSummaries: "&[fileId+kind], fileId"
		}), this.version(37).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			scoredVariantMasks: "&[fileId+date], fileId",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash",
			diaryImportSessions: "sourceSha256, updatedAt, status",
			diaryImportSessionBytes: "sourceSha256",
			ggirResultsBundles: "&fileId",
			actiwareStatisticsInputs: "&fileId",
			markerProvenance: "&fileId",
			actiwareFileData: "&fileId",
			placementResults: "&fileId",
			physicalActivityFileSummaries: "&[fileId+kind], fileId"
		}).upgrade(async (e) => {
			const t = e.table("files"), a = e.table("actiwareFileData");
			for (const r of await t.toCollection().primaryKeys()) {
				const e = await t.get(r);
				if (!e) continue;
				const i = Xr(e);
				if (i) {
					const n = await a.get(r);
					await t.put(e), await a.put({
						fileId: r,
						...i,
						...n
					});
				}
			}
		}), this.version(38).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			scoredVariantMasks: "&[fileId+date], fileId",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash",
			diaryImportSessions: "sourceSha256, updatedAt, status",
			diaryImportSessionBytes: "sourceSha256",
			ggirResultsBundles: "&fileId",
			actiwareStatisticsInputs: "&fileId",
			markerProvenance: "&fileId",
			actiwareFileData: "&fileId",
			placementResults: "&fileId",
			physicalActivityFileSummaries: "&[fileId+kind], fileId"
		}).upgrade(async (e) => {
			const t = /* @__PURE__ */ new Set();
			await Pr(e.table("auditLog"), (e) => {
				Gr.has(ht(e.action)) && t.add(`${String(e.fileId)}|${e.analysisDate}|${e.username}`);
			});
			const a = e.table("markers"), r = await a.filter((e) => "auto_score" !== e.username && !st(e) && !e.explicitNoNonwear && !e.needsConsensus && Array.isArray(e.sleepMarkers) && e.sleepMarkers.length > 0 && e.sleepMarkers.every((e) => "auto" === e.source && !e.edited) && (!Array.isArray(e.nonwearMarkers) || 0 === e.nonwearMarkers.length) && !t.has(`${String(e.fileId)}|${e.date}|${e.username}`)).toArray(), i = /* @__PURE__ */ new Set();
			for (const n of r) {
				const e = await a.where("[fileId+date+username+algorithm+detectionRule]").equals([
					n.fileId,
					n.date,
					"auto_score",
					n.algorithm ?? "",
					n.detectionRule ?? ""
				]).primaryKeys();
				await a.bulkDelete(e), await a.update(n.id, { username: "auto_score" }), i.add(n.fileId);
			}
			i.size > 0 && await e.table("markerProvenance").bulkPut(Rr(await a.where("fileId").anyOf([...i]).toArray()));
		}), this.version(39).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash",
			scoredVariantMasks: "&[fileId+date], fileId",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash",
			diaryImportSessions: "sourceSha256, updatedAt, status",
			diaryImportSessionBytes: "sourceSha256",
			ggirResultsBundles: "&fileId",
			ggirScorerReviews: "&[fileId+scorer], fileId",
			actiwareStatisticsInputs: "&fileId",
			markerProvenance: "&fileId",
			actiwareFileData: "&fileId",
			placementResults: "&fileId",
			physicalActivityFileSummaries: "&[fileId+kind], fileId"
		}).upgrade(async (e) => {
			const t = e.table("ggirResultsBundles"), a = e.table("files");
			for (const r of await t.toCollection().primaryKeys()) {
				const e = await t.get(r), i = crypto.randomUUID();
				await a.update(r, { ggirBundleRevision: i }), e?.reviewsByScorer && (delete e.reviewsByScorer, await t.put(e));
			}
		}), this.version(40).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash, diaryParticipantKey",
			scoredVariantMasks: "&[fileId+date], fileId",
			activityDays: "++id, [fileId+date], fileId",
			markers: "++id, [fileId+date+username+algorithm+detectionRule], [fileId+date+username+algorithm], [fileId+date+username], scoringSessionId, fileId, syncStatus",
			studySettings: "++id, &key",
			sensorNonwear: "++id, [fileId+analysisDate], fileId",
			diaryEntries: "++id, &[fileId+analysisDate], fileId",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt",
			diaryDecisionLogs: "id, sourceSha256, updatedAt",
			auditLog: "++id, [fileId+analysisDate+username], sessionId",
			scoringSessions: "sessionId, &[fileId+date+username+algorithm], [fileId+date+username], syncStatus",
			walLog: "++id, seq, fileId, [fileId+seq], sessionId, ts",
			algorithmRuns: "++id, [fileId+date+algoKey], [fileId+date+algoKey+algoVersion+paramsHash], fileId, contentHash",
			dailyGgirSummaries: "++id, &[fileId+analysisDate], fileId",
			viewLogs: "++id, viewedAt, targetType, [targetType+targetId], viewerUser",
			localExecutions: "++id, &attestationId, fileId, createdAt",
			complexityEvidence: "++id, &[fileId+generationKey], fileId, createdAt",
			projectMeta: "key",
			presetFamilies: "family, updatedAt, contentHash",
			diaryImportSessions: "sourceSha256, updatedAt, status",
			diaryImportSessionBytes: "sourceSha256",
			ggirResultsBundles: "&fileId",
			ggirScorerReviews: "&[fileId+scorer], fileId",
			actiwareStatisticsInputs: "&fileId",
			markerProvenance: "&fileId",
			actiwareFileData: "&fileId",
			placementResults: "&fileId",
			physicalActivityFileSummaries: "&[fileId+kind], fileId"
		}).upgrade(async (e) => {
			await e.table("files").toCollection().modify((e) => {
				e.diaryParticipantKey = Oe(e);
			});
		});
		const a = (e) => [.../* @__PURE__ */ new Set([...Pe({ filename: e }), De(e)])];
		this.version(41).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash, diaryParticipantKey, *diarySourceKeys, [id+source+diaryParticipantKey]",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt, [fileId+analysisDate]",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId, *diarySourceKeys"
		});
		const r = (e, t) => {
			("versionchange" !== t.idbtrans.mode || t.idbtrans.objectStoreNames.contains("diaryBindingDirty")) && t.idbtrans.objectStore("diaryBindingDirty").put({ key: "number" == typeof e ? e : Lr + e });
		}, i = (e, t) => {
			e.diaryParticipantKey = Oe(e), e.diarySourceKeys = Pe(e), "local" === e.source && r(e.diaryParticipantKey, t);
		};
		this.version(42).stores({ diaryBindingDirty: "key" }).upgrade(async (e) => {
			const t = e.table("projectMeta").where("key").between(Lr, "diary-dirty:￿", !0, !0);
			await e.table("diaryBindingDirty").bulkPut(await t.toArray()), await t.delete(), await e.table("files").toCollection().modify((t) => {
				i(t, e);
			}), await e.table("stagedDiaryEntries").toCollection().modify((t) => {
				t.diarySourceKeys = a(t.sourceKey ??= t.normalizedSourceKey), r(t.normalizedSourceKey, e);
			});
		}), this.version(43).stores({ files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash, diaryParticipantKey, *diarySourceKeys, [id+source+diaryParticipantKey], aw5RecordingKey" }), this.version(44).upgrade(async (e) => {
			const t = e.table("markers");
			await t.toCollection().modify((e) => {
				(function(e) {
					const t = st(e) ?? !1;
					Object.hasOwn(e, $e) || e.isInvalidNight;
					Reflect.deleteProperty(e, $e), e.isInvalidNight = t;
				})(e);
			}), await e.table("placementResults").toCollection().modify((e) => {
				e.byDate = function(e) {
					const t = Object.entries(e).map(([e, t]) => [e, ct(t, Xe, "invalid_night")]);
					return t.some(([t, a]) => a !== e[t]) ? Object.fromEntries(t) : e;
				}(e.byDate);
			});
			const a = e.table("markerProvenance");
			await a.clear(), await a.bulkPut(Rr(await t.toArray()));
		}), this.version(45).stores({ diaryEntries: "++id, &[fileId+analysisDate], fileId, analysisDate" }), this.version(49).stores({ ggirResultsBlobs: "&fileId" }).upgrade(async (e) => {
			const t = e.table("ggirResultsBundles"), a = e.table("ggirResultsBlobs");
			for (const r of await t.toCollection().primaryKeys()) {
				const e = await t.get(r);
				if (!e) continue;
				const i = jr(e);
				i && (await a.put({
					fileId: r,
					...i
				}), await t.put(e));
			}
		}), this.version(50).stores({ ggirCorrectedValues: "&fileId" }), this.version(51).stores({ ggirCorrectedValues: "&fileId, [fileId+key]" }), this.use({
			stack: "dbcore",
			name: "diary-dirty",
			create: (e) => ({
				...e,
				transaction: (t, a, r) => e.transaction("readwrite" === a && t.some((e) => [
					"files",
					"stagedDiaryEntries",
					"diaryEntries",
					"diaryOccurrences"
				].includes(e)) ? [.../* @__PURE__ */ new Set([...t, "diaryBindingDirty"])] : t, a, r)
			})
		}), this.use({
			stack: "dbcore",
			name: "ggir-results-blobs",
			create: (e) => ({
				...e,
				transaction: (t, a, r) => e.transaction("readwrite" === a && t.includes("ggirResultsBundles") ? [.../* @__PURE__ */ new Set([...t, "ggirResultsBlobs"])] : t, a, r),
				table: (t) => {
					const a = e.table(t);
					return "ggirResultsBundles" !== t ? a : {
						...a,
						mutate: (e) => a.mutate("add" === e.type || "put" === e.type ? {
							...e,
							values: e.values.map((e) => ({ ...e }))
						} : e)
					};
				}
			})
		});
		const n = (e) => "versionchange" === e.idbtrans.mode ? null : e.idbtrans.objectStore("ggirResultsBlobs");
		this.ggirResultsBundles.hook("creating", (e, t, a) => {
			const r = n(a), i = r ? jr(t) : null;
			r && i && r.put({
				fileId: t.fileId,
				...i
			});
		}), this.ggirResultsBundles.hook("updating", (e, t, a, r) => {
			const i = n(r), o = qr.filter((t) => t in e);
			if (!i || 0 === o.length) return;
			const s = (a) => {
				const r = {
					...e.part1 ? {} : a,
					fileId: t
				};
				Object.assign(r, Object.fromEntries(o.flatMap((t) => e[t] ? [[t, e[t]]] : []))), i.put(r);
			};
			return e.part1 ? s(void 0) : i.get(t).onsuccess = (e) => {
				s(e.target.result);
			}, Object.fromEntries(o.map((e) => [e, void 0]));
		}), this.files.hook("creating", (e, t, a) => {
			i(t, a);
		}), this.files.hook("updating", (e, t, a, i) => {
			const n = {
				...a,
				...e
			};
			return [
				"filename",
				"participantId",
				"diaryParticipantKey",
				"availableDates",
				"ingestState",
				"source",
				"fileHash",
				"sourceContentHash",
				"nonwearReview"
			].some((t) => t in e && JSON.stringify(a[t]) !== JSON.stringify(n[t])) && ("local" === a.source && r(Oe(a), i), "local" === n.source && r(Oe(n), i)), {
				diaryParticipantKey: Oe(n),
				diarySourceKeys: Pe(n)
			};
		}), this.files.hook("deleting", (e, t, a) => {
			"local" === t.source && r(Oe(t), a), a.idbtrans.objectStore("diaryBindingDirty").delete(e);
		}), this.stagedDiaryEntries.hook("creating", (e, t, i) => {
			t.diarySourceKeys = a(t.sourceKey), r(t.normalizedSourceKey, i);
		}), this.stagedDiaryEntries.hook("updating", (e, t, i, n) => {
			if (i.sourceKey || e.sourceKey) return r(i.normalizedSourceKey, n), r(e.normalizedSourceKey ?? i.normalizedSourceKey, n), { diarySourceKeys: a(e.sourceKey ?? i.sourceKey) };
		}), this.stagedDiaryEntries.hook("deleting", (e, t, a) => {
			r(t.normalizedSourceKey, a);
		}), this.diaryEntries.hook("creating", (e, t, a) => {
			r(t.fileId, a);
		}), this.diaryEntries.hook("updating", (e, t, a, i) => {
			r(a.fileId, i), void 0 !== e.fileId && r(e.fileId, i);
		}), this.diaryEntries.hook("deleting", (e, t, a) => {
			r(t.fileId, a);
		});
		const o = (e, t, a) => {
			r(t.normalizedSourceKey, a), null !== t.fileId && r(t.fileId, a);
		};
		this.diaryOccurrences.hook("creating", o), this.diaryOccurrences.hook("updating", (e, t, a, r) => {
			o(0, a, r), o(0, {
				...a,
				...e
			}, r);
		}), this.diaryOccurrences.hook("deleting", o), this.studySettings.hook("reading", ce), Or(this);
	}
};
function Qr(e) {
	const t = e?.reason;
	return t instanceof Error ? t : new DOMException("Job cancelled", "AbortError");
}
function ei(e, t) {
	return t ? t.aborted ? Promise.reject(Qr(t)) : new Promise((a, r) => {
		const i = () => r(Qr(t));
		t.addEventListener("abort", i, { once: !0 }), e.then(a, r).finally(() => t.removeEventListener("abort", i));
	}) : e;
}
let ti = null, ai = null, ri = null, ii = 0, ni = null;
const oi = /* @__PURE__ */ new WeakMap();
let si = null;
function li() {
	let e = null;
	return {
		promise: new Promise((t) => {
			e = t;
		}),
		fail(t) {
			e?.(t), e = null;
		}
	};
}
function ci(e, t, a, r) {
	const i = function(e) {
		const t = /* @__PURE__ */ new Set();
		let a = null;
		return e.then((e) => {
			a = e;
			for (const a of t) a(e);
			t.clear();
		}), {
			race: (e) => new Promise((r, i) => {
				a ? i(a) : (t.add(i), Promise.resolve(e).then(r, i).finally(() => {
					t.delete(i);
				}));
			}),
			pending: () => t.size
		};
	}(t);
	return new Proxy(e, { get(e, t, n) {
		const o = Reflect.get(e, t, n);
		return "function" != typeof o ? o : (...t) => {
			let n;
			a?.onStart();
			try {
				n = Reflect.apply(o, e, t);
			} catch (l) {
				throw a?.onSettled(), l;
			}
			const s = i.race(n);
			return r && s.catch((e) => {
				(function(e) {
					return e instanceof Error && ("RuntimeError" === e.name || e.message.startsWith("WASM panic"));
				})(e) && r();
			}), a ? s.finally(() => {
				a.onSettled();
			}) : s;
		};
	} });
}
function ui(e) {
	return /* @__PURE__ */ new Error(`${e} worker stopped before the operation completed.`);
}
function di(e, t) {
	return "error" !== t.type || "undefined" != typeof ErrorEvent && t instanceof ErrorEvent ? function(e) {
		return /* @__PURE__ */ new Error(`${e} worker failed. Retry the operation to use a fresh worker.`);
	}(e) : ("undefined" != typeof window && window.dispatchEvent(new Event("vite:preloadError")), Object.assign(/* @__PURE__ */ new Error(`${e} worker could not load: this tab runs an older version of the app; reload the page.`), { category: "stale-app" }));
}
function pi(e, t) {
	null === e.recycleTimer && (e.recycleTimer = setTimeout(() => {
		e.recycleTimer = null, 0 === e.activeCalls && e.recyclePending && (e.recyclePending = !1, yi(t));
	}, 5e3));
}
let _i = 0;
function mi() {
	const e = Date.now();
	if (ai && _i > 0 && e - _i > 9e5) {
		const e = si;
		e ? (e.recyclePending = !0, 0 === e.activeCalls && pi(e, ai)) : yi(ai);
	}
	if (!ai) {
		const e = new Worker(new URL("/sleep-scoring-wasm/assets/wasm-worker-DFAdYhp3.js", "" + import.meta.url), { type: "module" }), t = li();
		let a = !1;
		const r = (r) => {
			a || (a = !0, console.error("[wasm-worker] worker failed"), e.terminate(), t.fail(di("WASM", r)), ti === e && (ti = null, ai = null, ri = null, ni = null, si = null, _i = 0));
		};
		e.addEventListener("error", r, { once: !0 }), e.addEventListener("messageerror", r, { once: !0 }), ti = e, ri = t;
		const i = {
			activeCalls: 0,
			recyclePending: !1,
			recycleTimer: null
		}, n = ci(p(e), t.promise, {
			onStart() {
				i.activeCalls += 1, null !== i.recycleTimer && (clearTimeout(i.recycleTimer), i.recycleTimer = null);
			},
			onSettled() {
				i.activeCalls = Math.max(0, i.activeCalls - 1), 0 === i.activeCalls && i.recyclePending && pi(i, n);
			}
		}, () => {
			yi(n);
		}), o = ++ii;
		oi.set(n, o), ni = o, si = i, ai = n;
	}
	return _i = e, ai;
}
function yi(e) {
	if (e) {
		const t = oi.get(e);
		if (null == t || t !== ni) return;
	}
	const t = ti, a = ri, r = si;
	ti = null, ai = null, ri = null, ni = null, si = null, _i = 0, r && (r.recyclePending = !1, null !== r.recycleTimer && (clearTimeout(r.recycleTimer), r.recycleTimer = null)), t?.terminate(), a?.fail(ui("WASM"));
}
function fi(e = {}) {
	const t = !0 === e.singleThread ? new Worker(new URL("/sleep-scoring-wasm/assets/wasm-worker-DFAdYhp3.js", "" + import.meta.url), {
		type: "module",
		name: "actours-single-thread"
	}) : new Worker(new URL("/sleep-scoring-wasm/assets/wasm-worker-DFAdYhp3.js", "" + import.meta.url), { type: "module" }), a = li(), r = ci(p(t), a.promise);
	let i = !1;
	const n = (e = ui("WASM")) => {
		i || (i = !0, t.terminate(), a.fail(e));
	}, o = (e) => {
		i || (console.error("[wasm-worker] one-shot worker failed"), n(di("WASM", e)));
	};
	return t.addEventListener("error", o, { once: !0 }), t.addEventListener("messageerror", o, { once: !0 }), {
		api: r,
		worker: t,
		terminate: n
	};
}
function gi() {
	const e = new Worker(new URL("/sleep-scoring-wasm/assets/gt3x-worker-fPwcNZuW.js", "" + import.meta.url), { type: "module" }), t = li(), a = ci(p(e), t.promise);
	let r = !1;
	const i = (a = ui("GT3X")) => {
		r || (r = !0, e.terminate(), t.fail(a));
	}, n = (e) => {
		r || (console.error("[gt3x-worker] one-shot worker failed"), i(di("GT3X", e)));
	};
	return e.addEventListener("error", n, { once: !0 }), e.addEventListener("messageerror", n, { once: !0 }), {
		api: a,
		worker: e,
		terminate: i
	};
}
async function hi(e) {
	return {
		source: e,
		bytes: new Uint8Array(await e.slice(0, Math.min(e.size, 65536)).arrayBuffer())
	};
}
async function vi(e, t, a) {
	const r = Math.min(e.size, t);
	return a?.source === e && a.bytes.length >= r ? a.bytes.subarray(0, r) : new Uint8Array(await e.slice(0, r).arrayBuffer());
}
async function bi(e, t, a) {
	return new TextDecoder("utf-8", { fatal: !1 }).decode(await vi(e, t, a));
}
function wi(e) {
	const t = e instanceof Uint8Array ? e : new Uint8Array(e);
	let a = "";
	for (const r of t) a += r.toString(16).padStart(2, "0");
	return a;
}
const Si = new Int32Array([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]), Ci = /* @__PURE__ */ new Int32Array(64);
function Ii(e, t, a, r) {
	let i = 0 | e[0], n = 0 | e[1], o = 0 | e[2], s = 0 | e[3], l = 0 | e[4], c = 0 | e[5], u = 0 | e[6], d = 0 | e[7];
	for (let p = a; p + 64 <= r; p += 64) {
		for (let i = 0, n = p; i < 16; i++, n += 4) Ci[i] = t[n] << 24 | t[n + 1] << 16 | t[n + 2] << 8 | t[n + 3];
		for (let t = 16; t < 64; t++) {
			const e = Ci[t - 15], a = Ci[t - 2], r = (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3, i = (a >>> 17 | a << 15) ^ (a >>> 19 | a << 13) ^ a >>> 10;
			Ci[t] = Ci[t - 16] + r + Ci[t - 7] + i | 0;
		}
		let e = i, a = n, r = o, _ = s, m = l, y = c, f = u, g = d;
		for (let t = 0; t < 64; t++) {
			const i = g + ((m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) + (m & y ^ ~m & f) + Si[t] + Ci[t] | 0, n = ((e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)) + (e & a ^ e & r ^ a & r) | 0;
			g = f, f = y, y = m, m = _ + i | 0, _ = r, r = a, a = e, e = i + n | 0;
		}
		i = i + e | 0, n = n + a | 0, o = o + r | 0, s = s + _ | 0, l = l + m | 0, c = c + y | 0, u = u + f | 0, d = d + g | 0;
	}
	e[0] = i, e[1] = n, e[2] = o, e[3] = s, e[4] = l, e[5] = c, e[6] = u, e[7] = d;
}
function ki(e) {
	const t = new Uint32Array([
		1779033703,
		3144134277,
		1013904242,
		2773480762,
		1359893119,
		2600822924,
		528734635,
		1541459225
	]), a = 8n * BigInt(e.length), r = 64 * Math.ceil((e.length + 9) / 64), i = new Uint8Array(r);
	i.set(e), i[e.length] = 128, new DataView(i.buffer).setBigUint64(r - 8, a, !1), Ii(t, i, 0, r);
	const n = /* @__PURE__ */ new Uint8Array(32), o = new DataView(n.buffer);
	for (let s = 0; s < 8; s++) o.setUint32(4 * s, t[s], !1);
	return n;
}
function Ai(e) {
	return wi(ki(new TextEncoder().encode(e)));
}
async function xi(e) {
	const t = void 0 !== globalThis.crypto ? globalThis.crypto.subtle : void 0;
	if (t?.digest) {
		const a = e.slice(), r = await t.digest("SHA-256", a);
		return new Uint8Array(r);
	}
	return ki(e);
}
async function Ei(e) {
	return wi(await xi(new TextEncoder().encode(e)));
}
async function Di(e) {
	return wi(await xi(e instanceof Uint8Array ? e : new Uint8Array(e)));
}
async function Ti(e) {
	const { isInvalidNight: t, ...a } = e, r = {
		...a,
		[nt]: t
	}, i = {};
	for (const n of Object.keys(r).sort()) {
		const e = r[n];
		Array.isArray(e) ? i[n] = [...e].sort((e, t) => {
			const a = e, r = t, i = (a.markerIndex ?? 0) - (r.markerIndex ?? 0);
			return 0 !== i ? i : (a.onsetTimestamp ?? a.startTimestamp ?? 0) - (r.onsetTimestamp ?? r.startTimestamp ?? 0);
		}) : i[n] = e;
	}
	return Ei(JSON.stringify(i));
}
async function Bi(e, t) {
	return wi(await xi(await vi(e, 65536, t)));
}
var zi = class {
	H = new Uint32Array([
		1779033703,
		3144134277,
		1013904242,
		2773480762,
		1359893119,
		2600822924,
		528734635,
		1541459225
	]);
	carry = /* @__PURE__ */ new Uint8Array(64);
	carryLen = 0;
	totalLen = 0n;
	update(e) {
		this.totalLen += BigInt(e.length);
		let t = 0;
		if (this.carryLen > 0) {
			const a = 64 - this.carryLen, r = Math.min(a, e.length);
			this.carry.set(e.subarray(0, r), this.carryLen), this.carryLen += r, t += r, 64 === this.carryLen && (Ii(this.H, this.carry, 0, 64), this.carryLen = 0);
		}
		const a = t + 64 * Math.floor((e.length - t) / 64);
		Ii(this.H, e, t, a), t = a, t < e.length && (this.carry.set(e.subarray(t), 0), this.carryLen = e.length - t);
	}
	finalize() {
		const e = 8n * this.totalLen;
		if (this.carry[this.carryLen] = 128, this.carryLen++, this.carryLen > 56) {
			for (; this.carryLen < 64;) this.carry[this.carryLen++] = 0;
			Ii(this.H, this.carry, 0, 64), this.carryLen = 0;
		}
		for (; this.carryLen < 56;) this.carry[this.carryLen++] = 0;
		new DataView(this.carry.buffer).setBigUint64(56, e, !1), Ii(this.H, this.carry, 0, 64);
		const t = /* @__PURE__ */ new Uint8Array(32), a = new DataView(t.buffer);
		for (let r = 0; r < 8; r++) a.setUint32(4 * r, this.H[r], !1);
		return t;
	}
};
const Ri = 65536;
async function Mi(e, t, a, r) {
	const i = e instanceof ArrayBuffer ? e.byteLength : e.size, n = e instanceof ArrayBuffer ? (t, a) => Promise.resolve(new Uint8Array(e.slice(t, a))) : async (t, a) => new Uint8Array(await e.slice(t, a).arrayBuffer());
	if (a?.throwIfAborted(), await r?.start(), a?.throwIfAborted(), 0 === i) {
		const e = wi(await xi(/* @__PURE__ */ new Uint8Array(0))), i = r ? await r.finish() : e;
		return a?.throwIfAborted(), t?.(1), {
			prefixHash: e,
			fullHash: i
		};
	}
	const o = Ri, s = new Uint8Array(Math.min(o, i)), l = new zi();
	let c = 0;
	for (; c < i;) {
		a?.throwIfAborted();
		const e = Math.min(c + 2097152, i), o = await n(c, e);
		if (a?.throwIfAborted(), c < s.length) {
			const t = Math.min(s.length, e);
			s.set(o.subarray(0, t - c), c);
		}
		r ? (await r.feed(o), a?.throwIfAborted()) : l.update(o), c = e, t?.(c / i);
	}
	a?.throwIfAborted();
	const u = r ? await r.finish() : wi(l.finalize()), d = i <= o && !r ? u : wi(await xi(s));
	return a?.throwIfAborted(), {
		prefixHash: d,
		fullHash: u
	};
}
const Oi = new TextDecoder("utf-8"), Pi = Oi.decode.bind(Oi), Ni = new TextEncoder(), Ki = (e) => Ni.encode(e), Li = (e) => "function" == typeof e, ji = (e) => null != e && Object(e) === e, Ui = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer;
function Gi(e, t) {
	let a = ji(r = t) && "done" in r && "value" in r ? t.value : t;
	var r;
	return a instanceof e ? e === Uint8Array ? new e(a.buffer, a.byteOffset, a.byteLength) : a : a ? ("string" == typeof a && (a = Ki(a)), a instanceof ArrayBuffer || a instanceof Ui ? new e(a) : ((e) => ji(e) && Li(e.clear) && Li(e.bytes) && Li(e.position) && Li(e.setPosition) && Li(e.capacity) && Li(e.getBufferIdentifier) && Li(e.createLong))(a) ? Gi(e, a.bytes()) : ArrayBuffer.isView(a) ? a.byteLength <= 0 ? new e(0) : new e(a.buffer, a.byteOffset, a.byteLength / e.BYTES_PER_ELEMENT) : e.from(a)) : new e(0);
}
const Fi = (e) => Gi(Int32Array, e), Vi = (e) => Gi(BigInt64Array, e), qi = (e) => Gi(Uint8Array, e);
var Hi, Wi, $i, Yi, Xi, Ji, Zi, Qi;
function en(e) {
	if (null === e) return "null";
	if (void 0 === e) return "undefined";
	switch (typeof e) {
		case "number":
		case "bigint": return `${e}`;
		case "string": return `"${e}"`;
	}
	return "function" == typeof e[Symbol.toPrimitive] ? e[Symbol.toPrimitive]("string") : ArrayBuffer.isView(e) ? e instanceof BigInt64Array || e instanceof BigUint64Array ? `[${[...e].map((e) => en(e))}]` : `[${e}]` : ArrayBuffer.isView(e) ? `[${e}]` : JSON.stringify(e, (e, t) => "bigint" == typeof t ? `${t}` : t);
}
function tn(e) {
	if ("bigint" == typeof e && (e < Number.MIN_SAFE_INTEGER || e > Number.MAX_SAFE_INTEGER)) throw new TypeError(`${e} is not safe to convert to a number.`);
	return Number(e);
}
function an(e, t) {
	return tn(e / t) + tn(e % t) / tn(t);
}
(function(e) {
	e[e.V1 = 0] = "V1", e[e.V2 = 1] = "V2", e[e.V3 = 2] = "V3", e[e.V4 = 3] = "V4", e[e.V5 = 4] = "V5";
})(Hi || (Hi = {})), function(e) {
	e[e.Sparse = 0] = "Sparse", e[e.Dense = 1] = "Dense";
}(Wi || (Wi = {})), function(e) {
	e[e.HALF = 0] = "HALF", e[e.SINGLE = 1] = "SINGLE", e[e.DOUBLE = 2] = "DOUBLE";
}($i || ($i = {})), function(e) {
	e[e.DAY = 0] = "DAY", e[e.MILLISECOND = 1] = "MILLISECOND";
}(Yi || (Yi = {})), function(e) {
	e[e.SECOND = 0] = "SECOND", e[e.MILLISECOND = 1] = "MILLISECOND", e[e.MICROSECOND = 2] = "MICROSECOND", e[e.NANOSECOND = 3] = "NANOSECOND";
}(Xi || (Xi = {})), function(e) {
	e[e.YEAR_MONTH = 0] = "YEAR_MONTH", e[e.DAY_TIME = 1] = "DAY_TIME", e[e.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
}(Ji || (Ji = {})), function(e) {
	e[e.NONE = 0] = "NONE", e[e.Null = 1] = "Null", e[e.Int = 2] = "Int", e[e.Float = 3] = "Float", e[e.Binary = 4] = "Binary", e[e.Utf8 = 5] = "Utf8", e[e.Bool = 6] = "Bool", e[e.Decimal = 7] = "Decimal", e[e.Date = 8] = "Date", e[e.Time = 9] = "Time", e[e.Timestamp = 10] = "Timestamp", e[e.Interval = 11] = "Interval", e[e.List = 12] = "List", e[e.Struct = 13] = "Struct", e[e.Union = 14] = "Union", e[e.FixedSizeBinary = 15] = "FixedSizeBinary", e[e.FixedSizeList = 16] = "FixedSizeList", e[e.Map = 17] = "Map", e[e.Duration = 18] = "Duration", e[e.LargeBinary = 19] = "LargeBinary", e[e.LargeUtf8 = 20] = "LargeUtf8", e[e.LargeList = 21] = "LargeList", e[e.BinaryView = 23] = "BinaryView", e[e.Utf8View = 24] = "Utf8View", e[e.Dictionary = -1] = "Dictionary", e[e.Int8 = -2] = "Int8", e[e.Int16 = -3] = "Int16", e[e.Int32 = -4] = "Int32", e[e.Int64 = -5] = "Int64", e[e.Uint8 = -6] = "Uint8", e[e.Uint16 = -7] = "Uint16", e[e.Uint32 = -8] = "Uint32", e[e.Uint64 = -9] = "Uint64", e[e.Float16 = -10] = "Float16", e[e.Float32 = -11] = "Float32", e[e.Float64 = -12] = "Float64", e[e.DateDay = -13] = "DateDay", e[e.DateMillisecond = -14] = "DateMillisecond", e[e.TimestampSecond = -15] = "TimestampSecond", e[e.TimestampMillisecond = -16] = "TimestampMillisecond", e[e.TimestampMicrosecond = -17] = "TimestampMicrosecond", e[e.TimestampNanosecond = -18] = "TimestampNanosecond", e[e.TimeSecond = -19] = "TimeSecond", e[e.TimeMillisecond = -20] = "TimeMillisecond", e[e.TimeMicrosecond = -21] = "TimeMicrosecond", e[e.TimeNanosecond = -22] = "TimeNanosecond", e[e.DenseUnion = -23] = "DenseUnion", e[e.SparseUnion = -24] = "SparseUnion", e[e.IntervalDayTime = -25] = "IntervalDayTime", e[e.IntervalYearMonth = -26] = "IntervalYearMonth", e[e.DurationSecond = -27] = "DurationSecond", e[e.DurationMillisecond = -28] = "DurationMillisecond", e[e.DurationMicrosecond = -29] = "DurationMicrosecond", e[e.DurationNanosecond = -30] = "DurationNanosecond", e[e.IntervalMonthDayNano = -31] = "IntervalMonthDayNano";
}(Zi || (Zi = {})), function(e) {
	e[e.OFFSET = 0] = "OFFSET", e[e.DATA = 1] = "DATA", e[e.VALIDITY = 2] = "VALIDITY", e[e.TYPE = 3] = "TYPE";
}(Qi || (Qi = {}));
const rn = Symbol.for("isArrowBigNum");
function nn(e, ...t) {
	return 0 === t.length ? Object.setPrototypeOf(Gi(this.TypedArray, e), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(e, ...t), this.constructor.prototype);
}
function on(...e) {
	return nn.apply(this, e);
}
function sn(...e) {
	return nn.apply(this, e);
}
function ln(...e) {
	return nn.apply(this, e);
}
nn.prototype[rn] = !0, nn.prototype.toJSON = function() {
	return `"${dn(this)}"`;
}, nn.prototype.valueOf = function(e) {
	return un(this, e);
}, nn.prototype.toString = function() {
	return dn(this);
}, nn.prototype[Symbol.toPrimitive] = function(e = "default") {
	switch (e) {
		case "number": return un(this);
		case "string": return dn(this);
		case "default": return 8 === (t = this).byteLength ? new t.BigIntArray(t.buffer, t.byteOffset, 1)[0] : dn(t);
	}
	var t;
	return dn(this);
}, Object.setPrototypeOf(on.prototype, Object.create(Int32Array.prototype)), Object.setPrototypeOf(sn.prototype, Object.create(Uint32Array.prototype)), Object.setPrototypeOf(ln.prototype, Object.create(Uint32Array.prototype)), Object.assign(on.prototype, nn.prototype, {
	constructor: on,
	signed: !0,
	TypedArray: Int32Array,
	BigIntArray: BigInt64Array
}), Object.assign(sn.prototype, nn.prototype, {
	constructor: sn,
	signed: !1,
	TypedArray: Uint32Array,
	BigIntArray: BigUint64Array
}), Object.assign(ln.prototype, nn.prototype, {
	constructor: ln,
	signed: !0,
	TypedArray: Uint32Array,
	BigIntArray: BigUint64Array
});
const cn = BigInt(4294967296) * BigInt(4294967296) - BigInt(1);
function un(e, t) {
	const { buffer: a, byteOffset: r, byteLength: i, signed: n } = e, o = new BigUint64Array(a, r, i / 8), s = n && o.at(-1) & BigInt(1) << BigInt(63);
	let l = BigInt(0), c = 0;
	if (s) {
		for (const e of o) l |= (e ^ cn) * (BigInt(1) << BigInt(64 * c++));
		l *= BigInt(-1), l -= BigInt(1);
	} else for (const u of o) l |= u * (BigInt(1) << BigInt(64 * c++));
	if ("number" == typeof t && t > 0) {
		const e = BigInt("1".padEnd(t + 1, "0")), a = s ? -l % e : l % e, r = tn(l / e);
		return +`${s && 0 === r ? "-" : ""}${r}.${`${a}`.padStart(t, "0")}`;
	}
	return tn(l);
}
function dn(e) {
	if (8 === e.byteLength) return `${new e.BigIntArray(e.buffer, e.byteOffset, 1)[0]}`;
	if (!e.signed) return pn(e);
	let t = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2);
	if (new Int16Array([t.at(-1)])[0] >= 0) return pn(e);
	t = t.slice();
	let a = 1;
	for (let r = 0; r < t.length; r++) {
		const e = t[r], i = ~e + a;
		t[r] = i, a &= 0 === e ? 1 : 0;
	}
	return `-${pn(t)}`;
}
function pn(e) {
	let t = "";
	const a = /* @__PURE__ */ new Uint32Array(2);
	let r = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2);
	const i = new Uint32Array((r = new Uint16Array(r).reverse()).buffer);
	let n = -1;
	const o = r.length - 1;
	do {
		for (a[0] = r[n = 0]; n < o;) r[n++] = a[1] = a[0] / 10, a[0] = (a[0] - 10 * a[1] << 16) + r[n];
		r[n] = a[1] = a[0] / 10, a[0] = a[0] - 10 * a[1], t = `${a[0]}${t}`;
	} while (i[0] || i[1] || i[2] || i[3]);
	return null != t ? t : "0";
}
var _n, mn, yn, fn, gn, hn, vn, bn = class e {
	static new(e, t) {
		switch (t) {
			case !0: return new on(e);
			case !1: return new sn(e);
		}
		switch (e.constructor) {
			case Int8Array:
			case Int16Array:
			case Int32Array:
			case BigInt64Array: return new on(e);
		}
		return 16 === e.byteLength ? new ln(e) : new sn(e);
	}
	static signed(e) {
		return new on(e);
	}
	static unsigned(e) {
		return new sn(e);
	}
	static decimal(e) {
		return new ln(e);
	}
	constructor(t, a) {
		return e.new(t, a);
	}
};
const wn = Symbol.for("apache-arrow/DataType");
var Sn, Cn = class e {
	static isDataType(e) {
		return !0 === (null == e ? void 0 : e[wn]);
	}
	static isNull(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Null;
	}
	static isInt(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Int;
	}
	static isFloat(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Float;
	}
	static isBinary(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Binary;
	}
	static isBinaryView(e) {
		return (null == e ? void 0 : e.typeId) === Zi.BinaryView;
	}
	static isLargeBinary(e) {
		return (null == e ? void 0 : e.typeId) === Zi.LargeBinary;
	}
	static isUtf8(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Utf8;
	}
	static isUtf8View(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Utf8View;
	}
	static isLargeUtf8(e) {
		return (null == e ? void 0 : e.typeId) === Zi.LargeUtf8;
	}
	static isBool(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Bool;
	}
	static isDecimal(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Decimal;
	}
	static isDate(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Date;
	}
	static isTime(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Time;
	}
	static isTimestamp(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Timestamp;
	}
	static isInterval(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Interval;
	}
	static isDuration(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Duration;
	}
	static isList(e) {
		return (null == e ? void 0 : e.typeId) === Zi.List;
	}
	static isLargeList(e) {
		return (null == e ? void 0 : e.typeId) === Zi.LargeList;
	}
	static isStruct(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Struct;
	}
	static isUnion(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Union;
	}
	static isFixedSizeBinary(e) {
		return (null == e ? void 0 : e.typeId) === Zi.FixedSizeBinary;
	}
	static isFixedSizeList(e) {
		return (null == e ? void 0 : e.typeId) === Zi.FixedSizeList;
	}
	static isMap(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Map;
	}
	static isDictionary(e) {
		return (null == e ? void 0 : e.typeId) === Zi.Dictionary;
	}
	static isDenseUnion(t) {
		return e.isUnion(t) && t.mode === Wi.Dense;
	}
	static isSparseUnion(t) {
		return e.isUnion(t) && t.mode === Wi.Sparse;
	}
	constructor(e) {
		this.typeId = e;
	}
};
_n = Symbol.toStringTag, Cn[_n] = ((Sn = Cn.prototype).children = null, Sn.ArrayType = Array, Sn.OffsetArrayType = Int32Array, Sn[wn] = !0, Sn[Symbol.toStringTag] = "DataType");
var In = class extends Cn {
	constructor() {
		super(Zi.Null);
	}
	toString() {
		return "Null";
	}
};
mn = Symbol.toStringTag, In[mn] = In.prototype[Symbol.toStringTag] = "Null";
var kn = class extends Cn {
	constructor(e, t) {
		super(Zi.Int), this.isSigned = e, this.bitWidth = t;
	}
	get ArrayType() {
		switch (this.bitWidth) {
			case 8: return this.isSigned ? Int8Array : Uint8Array;
			case 16: return this.isSigned ? Int16Array : Uint16Array;
			case 32: return this.isSigned ? Int32Array : Uint32Array;
			case 64: return this.isSigned ? BigInt64Array : BigUint64Array;
		}
		throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
	toString() {
		return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`;
	}
};
yn = Symbol.toStringTag, kn[yn] = ((e) => (e.isSigned = null, e.bitWidth = null, e[Symbol.toStringTag] = "Int"))(kn.prototype);
var An = class extends kn {
	constructor() {
		super(!0, 8);
	}
	get ArrayType() {
		return Int8Array;
	}
}, xn = class extends kn {
	constructor() {
		super(!0, 16);
	}
	get ArrayType() {
		return Int16Array;
	}
}, En = class extends kn {
	constructor() {
		super(!0, 32);
	}
	get ArrayType() {
		return Int32Array;
	}
}, Dn = class extends kn {
	constructor() {
		super(!0, 64);
	}
	get ArrayType() {
		return BigInt64Array;
	}
}, Tn = class extends kn {
	constructor() {
		super(!1, 8);
	}
	get ArrayType() {
		return Uint8Array;
	}
}, Bn = class extends kn {
	constructor() {
		super(!1, 16);
	}
	get ArrayType() {
		return Uint16Array;
	}
}, zn = class extends kn {
	constructor() {
		super(!1, 32);
	}
	get ArrayType() {
		return Uint32Array;
	}
}, Rn = class extends kn {
	constructor() {
		super(!1, 64);
	}
	get ArrayType() {
		return BigUint64Array;
	}
};
Object.defineProperty(An.prototype, "ArrayType", { value: Int8Array }), Object.defineProperty(xn.prototype, "ArrayType", { value: Int16Array }), Object.defineProperty(En.prototype, "ArrayType", { value: Int32Array }), Object.defineProperty(Dn.prototype, "ArrayType", { value: BigInt64Array }), Object.defineProperty(Tn.prototype, "ArrayType", { value: Uint8Array }), Object.defineProperty(Bn.prototype, "ArrayType", { value: Uint16Array }), Object.defineProperty(zn.prototype, "ArrayType", { value: Uint32Array }), Object.defineProperty(Rn.prototype, "ArrayType", { value: BigUint64Array });
var Mn = class extends Cn {
	constructor(e) {
		super(Zi.Float), this.precision = e;
	}
	get ArrayType() {
		switch (this.precision) {
			case $i.HALF: return Uint16Array;
			case $i.SINGLE: return Float32Array;
			case $i.DOUBLE: return Float64Array;
		}
		throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
	toString() {
		return `Float${this.precision << 5 || 16}`;
	}
};
fn = Symbol.toStringTag, Mn[fn] = ((e) => (e.precision = null, e[Symbol.toStringTag] = "Float"))(Mn.prototype);
var On = class extends Mn {
	constructor() {
		super($i.SINGLE);
	}
}, Pn = class extends Mn {
	constructor() {
		super($i.DOUBLE);
	}
};
Object.defineProperty(class extends Mn {
	constructor() {
		super($i.HALF);
	}
}.prototype, "ArrayType", { value: Uint16Array }), Object.defineProperty(On.prototype, "ArrayType", { value: Float32Array }), Object.defineProperty(Pn.prototype, "ArrayType", { value: Float64Array });
var Nn = class extends Cn {
	constructor() {
		super(Zi.Binary);
	}
	toString() {
		return "Binary";
	}
};
Nn[Symbol.toStringTag] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Binary"))(Nn.prototype);
var Kn = class extends Cn {
	constructor() {
		super(Zi.BinaryView);
	}
	toString() {
		return "BinaryView";
	}
};
gn = Symbol.toStringTag, Kn.ELEMENT_WIDTH = 16, Kn.INLINE_CAPACITY = 12, Kn.LENGTH_OFFSET = 0, Kn.INLINE_OFFSET = 4, Kn.BUFFER_INDEX_OFFSET = 8, Kn.BUFFER_OFFSET_OFFSET = 12, Kn[gn] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "BinaryView"))(Kn.prototype);
var Ln = class extends Cn {
	constructor() {
		super(Zi.LargeBinary);
	}
	toString() {
		return "LargeBinary";
	}
};
Ln[Symbol.toStringTag] = ((e) => (e.ArrayType = Uint8Array, e.OffsetArrayType = BigInt64Array, e[Symbol.toStringTag] = "LargeBinary"))(Ln.prototype);
var jn = class extends Cn {
	constructor() {
		super(Zi.Utf8);
	}
	toString() {
		return "Utf8";
	}
};
jn[Symbol.toStringTag] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Utf8"))(jn.prototype);
var Un = class extends Cn {
	constructor() {
		super(Zi.Utf8View);
	}
	toString() {
		return "Utf8View";
	}
};
hn = Symbol.toStringTag, Un.ELEMENT_WIDTH = Kn.ELEMENT_WIDTH, Un.INLINE_CAPACITY = Kn.INLINE_CAPACITY, Un[hn] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Utf8View"))(Un.prototype);
var Gn = class extends Cn {
	constructor() {
		super(Zi.LargeUtf8);
	}
	toString() {
		return "LargeUtf8";
	}
};
Gn[Symbol.toStringTag] = ((e) => (e.ArrayType = Uint8Array, e.OffsetArrayType = BigInt64Array, e[Symbol.toStringTag] = "LargeUtf8"))(Gn.prototype);
var Fn = class extends Cn {
	constructor() {
		super(Zi.Bool);
	}
	toString() {
		return "Bool";
	}
};
Fn[Symbol.toStringTag] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Bool"))(Fn.prototype);
var Vn = class extends Cn {
	constructor(e, t, a = 128) {
		super(Zi.Decimal), this.scale = e, this.precision = t, this.bitWidth = a;
	}
	toString() {
		return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
	}
};
Vn[Symbol.toStringTag] = ((e) => (e.scale = null, e.precision = null, e.ArrayType = Uint32Array, e[Symbol.toStringTag] = "Decimal"))(Vn.prototype);
var qn = class extends Cn {
	constructor(e) {
		super(Zi.Date), this.unit = e;
	}
	toString() {
		return `Date${32 * (this.unit + 1)}<${Yi[this.unit]}>`;
	}
	get ArrayType() {
		return this.unit === Yi.DAY ? Int32Array : BigInt64Array;
	}
};
qn[Symbol.toStringTag] = ((e) => (e.unit = null, e[Symbol.toStringTag] = "Date"))(qn.prototype);
var Hn = class extends Cn {
	constructor(e, t) {
		super(Zi.Time), this.unit = e, this.bitWidth = t;
	}
	toString() {
		return `Time${this.bitWidth}<${Xi[this.unit]}>`;
	}
	get ArrayType() {
		switch (this.bitWidth) {
			case 32: return Int32Array;
			case 64: return BigInt64Array;
		}
		throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
};
Hn[Symbol.toStringTag] = ((e) => (e.unit = null, e.bitWidth = null, e[Symbol.toStringTag] = "Time"))(Hn.prototype);
var Wn = class extends Cn {
	constructor(e, t) {
		super(Zi.Timestamp), this.unit = e, this.timezone = t;
	}
	toString() {
		return `Timestamp<${Xi[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
	}
};
Wn[Symbol.toStringTag] = ((e) => (e.unit = null, e.timezone = null, e.ArrayType = BigInt64Array, e[Symbol.toStringTag] = "Timestamp"))(Wn.prototype);
var $n = class extends Cn {
	constructor(e) {
		super(Zi.Interval), this.unit = e;
	}
	toString() {
		return `Interval<${Ji[this.unit]}>`;
	}
};
$n[Symbol.toStringTag] = ((e) => (e.unit = null, e.ArrayType = Int32Array, e[Symbol.toStringTag] = "Interval"))($n.prototype);
var Yn = class extends Cn {
	constructor(e) {
		super(Zi.Duration), this.unit = e;
	}
	toString() {
		return `Duration<${Xi[this.unit]}>`;
	}
};
Yn[Symbol.toStringTag] = ((e) => (e.unit = null, e.ArrayType = BigInt64Array, e[Symbol.toStringTag] = "Duration"))(Yn.prototype);
var Xn = class extends Cn {
	constructor(e) {
		super(Zi.List), this.children = [e];
	}
	toString() {
		return `List<${this.valueType}>`;
	}
	get valueType() {
		return this.children[0].type;
	}
	get valueField() {
		return this.children[0];
	}
	get ArrayType() {
		return this.valueType.ArrayType;
	}
};
Xn[Symbol.toStringTag] = ((e) => (e.children = null, e[Symbol.toStringTag] = "List"))(Xn.prototype);
var Jn = class extends Cn {
	constructor(e) {
		super(Zi.LargeList), this.children = [e];
	}
	toString() {
		return `LargeList<${this.valueType}>`;
	}
	get valueType() {
		return this.children[0].type;
	}
	get valueField() {
		return this.children[0];
	}
	get ArrayType() {
		return this.valueType.ArrayType;
	}
};
Jn[Symbol.toStringTag] = ((e) => (e.children = null, e.OffsetArrayType = BigInt64Array, e[Symbol.toStringTag] = "LargeList"))(Jn.prototype);
var Zn = class extends Cn {
	constructor(e) {
		super(Zi.Struct), this.children = e;
	}
	toString() {
		return `Struct<{${this.children.map((e) => `${e.name}:${e.type}`).join(", ")}}>`;
	}
};
vn = Symbol.toStringTag, Zn[vn] = ((e) => (e.children = null, e[Symbol.toStringTag] = "Struct"))(Zn.prototype);
var Qn = class extends Cn {
	constructor(e, t, a) {
		super(Zi.Union), this.mode = e, this.children = a, this.typeIds = t = Int32Array.from(t), this.typeIdToChildIndex = t.reduce((e, t, a) => (e[t] = a) && e || e, Object.create(null));
	}
	toString() {
		return `${this[Symbol.toStringTag]}<${this.children.map((e) => `${e.type}`).join(" | ")}>`;
	}
};
Qn[Symbol.toStringTag] = ((e) => (e.mode = null, e.typeIds = null, e.children = null, e.typeIdToChildIndex = null, e.ArrayType = Int8Array, e[Symbol.toStringTag] = "Union"))(Qn.prototype);
var eo = class extends Cn {
	constructor(e) {
		super(Zi.FixedSizeBinary), this.byteWidth = e;
	}
	toString() {
		return `FixedSizeBinary[${this.byteWidth}]`;
	}
};
eo[Symbol.toStringTag] = ((e) => (e.byteWidth = null, e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "FixedSizeBinary"))(eo.prototype);
var to = class extends Cn {
	constructor(e, t) {
		super(Zi.FixedSizeList), this.listSize = e, this.children = [t];
	}
	get valueType() {
		return this.children[0].type;
	}
	get valueField() {
		return this.children[0];
	}
	get ArrayType() {
		return this.valueType.ArrayType;
	}
	toString() {
		return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
	}
};
to[Symbol.toStringTag] = ((e) => (e.children = null, e.listSize = null, e[Symbol.toStringTag] = "FixedSizeList"))(to.prototype);
var ao = class extends Cn {
	constructor(e, t = !1) {
		var a, r, i;
		if (super(Zi.Map), this.children = [e], this.keysSorted = t, e && (e.name = "entries", null === (a = null == e ? void 0 : e.type) || void 0 === a ? void 0 : a.children)) {
			const t = null === (r = null == e ? void 0 : e.type) || void 0 === r ? void 0 : r.children[0];
			t && (t.name = "key");
			const a = null === (i = null == e ? void 0 : e.type) || void 0 === i ? void 0 : i.children[1];
			a && (a.name = "value");
		}
	}
	get keyType() {
		return this.children[0].type.children[0].type;
	}
	get valueType() {
		return this.children[0].type.children[1].type;
	}
	get childType() {
		return this.children[0].type;
	}
	toString() {
		return `Map<{${this.children[0].type.children.map((e) => `${e.name}:${e.type}`).join(", ")}}>`;
	}
};
ao[Symbol.toStringTag] = ((e) => (e.children = null, e.keysSorted = null, e[Symbol.toStringTag] = "Map_"))(ao.prototype);
const ro = (io = -1, () => ++io);
var io, no = class extends Cn {
	constructor(e, t, a, r) {
		super(Zi.Dictionary), this.indices = t, this.dictionary = e, this.isOrdered = r || !1, this.id = null == a ? ro() : tn(a);
	}
	get children() {
		return this.dictionary.children;
	}
	get valueType() {
		return this.dictionary;
	}
	get ArrayType() {
		return this.dictionary.ArrayType;
	}
	toString() {
		return `Dictionary<${this.indices}, ${this.dictionary}>`;
	}
};
function oo(e) {
	const t = e;
	switch (e.typeId) {
		case Zi.Decimal: return e.bitWidth / 32;
		case Zi.Interval: return t.unit === Ji.MONTH_DAY_NANO ? 4 : 1 + t.unit;
		case Zi.BinaryView:
		case Zi.Utf8View: return 16;
		case Zi.FixedSizeList: return t.listSize;
		case Zi.FixedSizeBinary: return t.byteWidth;
		default: return 1;
	}
}
no[Symbol.toStringTag] = ((e) => (e.id = null, e.indices = null, e.isOrdered = null, e.dictionary = null, e[Symbol.toStringTag] = "Dictionary"))(no.prototype);
var so = class {
	visitMany(e, ...t) {
		return e.map((e, a) => this.visit(e, ...t.map((e) => e[a])));
	}
	visit(...e) {
		return this.getVisitFn(e[0], !1).apply(this, e);
	}
	getVisitFn(e, t = !0) {
		return function(e, t, a = !0) {
			return "number" == typeof t ? lo(e, t, a) : "string" == typeof t && t in Zi ? lo(e, Zi[t], a) : t && t instanceof Cn ? lo(e, co(t), a) : (null == t ? void 0 : t.type) && t.type instanceof Cn ? lo(e, co(t.type), a) : lo(e, Zi.NONE, a);
		}(this, e, t);
	}
	getVisitFnByTypeId(e, t = !0) {
		return lo(this, e, t);
	}
	visitNull(e, ...t) {
		return null;
	}
	visitBool(e, ...t) {
		return null;
	}
	visitInt(e, ...t) {
		return null;
	}
	visitFloat(e, ...t) {
		return null;
	}
	visitUtf8(e, ...t) {
		return null;
	}
	visitLargeUtf8(e, ...t) {
		return null;
	}
	visitUtf8View(e, ...t) {
		return null;
	}
	visitBinary(e, ...t) {
		return null;
	}
	visitLargeBinary(e, ...t) {
		return null;
	}
	visitBinaryView(e, ...t) {
		return null;
	}
	visitFixedSizeBinary(e, ...t) {
		return null;
	}
	visitDate(e, ...t) {
		return null;
	}
	visitTimestamp(e, ...t) {
		return null;
	}
	visitTime(e, ...t) {
		return null;
	}
	visitDecimal(e, ...t) {
		return null;
	}
	visitList(e, ...t) {
		return null;
	}
	visitLargeList(e, ...t) {
		return null;
	}
	visitStruct(e, ...t) {
		return null;
	}
	visitUnion(e, ...t) {
		return null;
	}
	visitDictionary(e, ...t) {
		return null;
	}
	visitInterval(e, ...t) {
		return null;
	}
	visitDuration(e, ...t) {
		return null;
	}
	visitFixedSizeList(e, ...t) {
		return null;
	}
	visitMap(e, ...t) {
		return null;
	}
};
function lo(e, t, a = !0) {
	let r = null;
	switch (t) {
		case Zi.Null:
			r = e.visitNull;
			break;
		case Zi.Bool:
			r = e.visitBool;
			break;
		case Zi.Int:
			r = e.visitInt;
			break;
		case Zi.Int8:
			r = e.visitInt8 || e.visitInt;
			break;
		case Zi.Int16:
			r = e.visitInt16 || e.visitInt;
			break;
		case Zi.Int32:
			r = e.visitInt32 || e.visitInt;
			break;
		case Zi.Int64:
			r = e.visitInt64 || e.visitInt;
			break;
		case Zi.Uint8:
			r = e.visitUint8 || e.visitInt;
			break;
		case Zi.Uint16:
			r = e.visitUint16 || e.visitInt;
			break;
		case Zi.Uint32:
			r = e.visitUint32 || e.visitInt;
			break;
		case Zi.Uint64:
			r = e.visitUint64 || e.visitInt;
			break;
		case Zi.Float:
			r = e.visitFloat;
			break;
		case Zi.Float16:
			r = e.visitFloat16 || e.visitFloat;
			break;
		case Zi.Float32:
			r = e.visitFloat32 || e.visitFloat;
			break;
		case Zi.Float64:
			r = e.visitFloat64 || e.visitFloat;
			break;
		case Zi.Utf8:
			r = e.visitUtf8;
			break;
		case Zi.LargeUtf8:
			r = e.visitLargeUtf8;
			break;
		case Zi.Utf8View:
			r = e.visitUtf8View || e.visitUtf8;
			break;
		case Zi.Binary:
			r = e.visitBinary;
			break;
		case Zi.LargeBinary:
			r = e.visitLargeBinary;
			break;
		case Zi.BinaryView:
			r = e.visitBinaryView || e.visitBinary;
			break;
		case Zi.FixedSizeBinary:
			r = e.visitFixedSizeBinary;
			break;
		case Zi.Date:
			r = e.visitDate;
			break;
		case Zi.DateDay:
			r = e.visitDateDay || e.visitDate;
			break;
		case Zi.DateMillisecond:
			r = e.visitDateMillisecond || e.visitDate;
			break;
		case Zi.Timestamp:
			r = e.visitTimestamp;
			break;
		case Zi.TimestampSecond:
			r = e.visitTimestampSecond || e.visitTimestamp;
			break;
		case Zi.TimestampMillisecond:
			r = e.visitTimestampMillisecond || e.visitTimestamp;
			break;
		case Zi.TimestampMicrosecond:
			r = e.visitTimestampMicrosecond || e.visitTimestamp;
			break;
		case Zi.TimestampNanosecond:
			r = e.visitTimestampNanosecond || e.visitTimestamp;
			break;
		case Zi.Time:
			r = e.visitTime;
			break;
		case Zi.TimeSecond:
			r = e.visitTimeSecond || e.visitTime;
			break;
		case Zi.TimeMillisecond:
			r = e.visitTimeMillisecond || e.visitTime;
			break;
		case Zi.TimeMicrosecond:
			r = e.visitTimeMicrosecond || e.visitTime;
			break;
		case Zi.TimeNanosecond:
			r = e.visitTimeNanosecond || e.visitTime;
			break;
		case Zi.Decimal:
			r = e.visitDecimal;
			break;
		case Zi.List:
			r = e.visitList;
			break;
		case Zi.LargeList:
			r = e.visitLargeList;
			break;
		case Zi.Struct:
			r = e.visitStruct;
			break;
		case Zi.Union:
			r = e.visitUnion;
			break;
		case Zi.DenseUnion:
			r = e.visitDenseUnion || e.visitUnion;
			break;
		case Zi.SparseUnion:
			r = e.visitSparseUnion || e.visitUnion;
			break;
		case Zi.Dictionary:
			r = e.visitDictionary;
			break;
		case Zi.Interval:
			r = e.visitInterval;
			break;
		case Zi.IntervalDayTime:
			r = e.visitIntervalDayTime || e.visitInterval;
			break;
		case Zi.IntervalYearMonth:
			r = e.visitIntervalYearMonth || e.visitInterval;
			break;
		case Zi.IntervalMonthDayNano:
			r = e.visitIntervalMonthDayNano || e.visitInterval;
			break;
		case Zi.Duration:
			r = e.visitDuration;
			break;
		case Zi.DurationSecond:
			r = e.visitDurationSecond || e.visitDuration;
			break;
		case Zi.DurationMillisecond:
			r = e.visitDurationMillisecond || e.visitDuration;
			break;
		case Zi.DurationMicrosecond:
			r = e.visitDurationMicrosecond || e.visitDuration;
			break;
		case Zi.DurationNanosecond:
			r = e.visitDurationNanosecond || e.visitDuration;
			break;
		case Zi.FixedSizeList:
			r = e.visitFixedSizeList;
			break;
		case Zi.Map: r = e.visitMap;
	}
	if ("function" == typeof r) return r;
	if (!a) return () => null;
	throw new Error(`Unrecognized type '${Zi[t]}'`);
}
function co(e) {
	switch (e.typeId) {
		case Zi.Null: return Zi.Null;
		case Zi.Int: {
			const { bitWidth: t, isSigned: a } = e;
			switch (t) {
				case 8: return a ? Zi.Int8 : Zi.Uint8;
				case 16: return a ? Zi.Int16 : Zi.Uint16;
				case 32: return a ? Zi.Int32 : Zi.Uint32;
				case 64: return a ? Zi.Int64 : Zi.Uint64;
			}
			return Zi.Int;
		}
		case Zi.Float:
			switch (e.precision) {
				case $i.HALF: return Zi.Float16;
				case $i.SINGLE: return Zi.Float32;
				case $i.DOUBLE: return Zi.Float64;
			}
			return Zi.Float;
		case Zi.Binary: return Zi.Binary;
		case Zi.LargeBinary: return Zi.LargeBinary;
		case Zi.BinaryView: return Zi.BinaryView;
		case Zi.Utf8: return Zi.Utf8;
		case Zi.LargeUtf8: return Zi.LargeUtf8;
		case Zi.Utf8View: return Zi.Utf8View;
		case Zi.Bool: return Zi.Bool;
		case Zi.Decimal: return Zi.Decimal;
		case Zi.Time:
			switch (e.unit) {
				case Xi.SECOND: return Zi.TimeSecond;
				case Xi.MILLISECOND: return Zi.TimeMillisecond;
				case Xi.MICROSECOND: return Zi.TimeMicrosecond;
				case Xi.NANOSECOND: return Zi.TimeNanosecond;
			}
			return Zi.Time;
		case Zi.Timestamp:
			switch (e.unit) {
				case Xi.SECOND: return Zi.TimestampSecond;
				case Xi.MILLISECOND: return Zi.TimestampMillisecond;
				case Xi.MICROSECOND: return Zi.TimestampMicrosecond;
				case Xi.NANOSECOND: return Zi.TimestampNanosecond;
			}
			return Zi.Timestamp;
		case Zi.Date:
			switch (e.unit) {
				case Yi.DAY: return Zi.DateDay;
				case Yi.MILLISECOND: return Zi.DateMillisecond;
			}
			return Zi.Date;
		case Zi.Interval:
			switch (e.unit) {
				case Ji.DAY_TIME: return Zi.IntervalDayTime;
				case Ji.YEAR_MONTH: return Zi.IntervalYearMonth;
				case Ji.MONTH_DAY_NANO: return Zi.IntervalMonthDayNano;
			}
			return Zi.Interval;
		case Zi.Duration:
			switch (e.unit) {
				case Xi.SECOND: return Zi.DurationSecond;
				case Xi.MILLISECOND: return Zi.DurationMillisecond;
				case Xi.MICROSECOND: return Zi.DurationMicrosecond;
				case Xi.NANOSECOND: return Zi.DurationNanosecond;
			}
			return Zi.Duration;
		case Zi.Map: return Zi.Map;
		case Zi.List: return Zi.List;
		case Zi.LargeList: return Zi.LargeList;
		case Zi.Struct: return Zi.Struct;
		case Zi.Union:
			switch (e.mode) {
				case Wi.Dense: return Zi.DenseUnion;
				case Wi.Sparse: return Zi.SparseUnion;
			}
			return Zi.Union;
		case Zi.FixedSizeBinary: return Zi.FixedSizeBinary;
		case Zi.FixedSizeList: return Zi.FixedSizeList;
		case Zi.Dictionary: return Zi.Dictionary;
	}
	throw new Error(`Unrecognized type '${Zi[e.typeId]}'`);
}
so.prototype.visitInt8 = null, so.prototype.visitInt16 = null, so.prototype.visitInt32 = null, so.prototype.visitInt64 = null, so.prototype.visitUint8 = null, so.prototype.visitUint16 = null, so.prototype.visitUint32 = null, so.prototype.visitUint64 = null, so.prototype.visitFloat16 = null, so.prototype.visitFloat32 = null, so.prototype.visitFloat64 = null, so.prototype.visitDateDay = null, so.prototype.visitDateMillisecond = null, so.prototype.visitTimestampSecond = null, so.prototype.visitTimestampMillisecond = null, so.prototype.visitTimestampMicrosecond = null, so.prototype.visitTimestampNanosecond = null, so.prototype.visitTimeSecond = null, so.prototype.visitTimeMillisecond = null, so.prototype.visitTimeMicrosecond = null, so.prototype.visitTimeNanosecond = null, so.prototype.visitDenseUnion = null, so.prototype.visitSparseUnion = null, so.prototype.visitIntervalDayTime = null, so.prototype.visitIntervalYearMonth = null, so.prototype.visitIntervalMonthDayNano = null, so.prototype.visitDuration = null, so.prototype.visitDurationSecond = null, so.prototype.visitDurationMillisecond = null, so.prototype.visitDurationMicrosecond = null, so.prototype.visitDurationNanosecond = null;
const uo = /* @__PURE__ */ new Float64Array(1), po = new Uint32Array(uo.buffer);
function _o(e) {
	const t = (31744 & e) >> 10, a = (1023 & e) / 1024, r = Math.pow(-1, (32768 & e) >> 15);
	switch (t) {
		case 31: return r * (a ? NaN : 1 / 0);
		case 0: return r * (a ? 6103515625e-14 * a : 0);
	}
	return r * Math.pow(2, t - 15) * (1 + a);
}
var mo = class extends so {};
function yo(e) {
	return (t, a, r) => {
		if (t.setValid(a, null != r)) return e(t, a, r);
	};
}
const fo = (e, t, a, r) => {
	if (a + 1 < t.length) {
		const i = tn(t[a]), n = tn(t[a + 1]);
		e.set(r.subarray(0, n - i), i);
	}
}, go = ({ values: e }, t, a) => {
	e[t] = a;
}, ho = ({ values: e }, t, a) => {
	e[t] = a;
}, vo = ({ values: e }, t, a) => {
	e[t] = function(e) {
		if (e != e) return 32256;
		uo[0] = e;
		const t = (2147483648 & po[1]) >> 16 & 65535;
		let a = 2146435072 & po[1], r = 0;
		return a >= 1089470464 ? po[0] > 0 ? a = 31744 : (a = (2080374784 & a) >> 16, r = (1048575 & po[1]) >> 10) : a <= 1056964608 ? (r = 1048576 + (1048575 & po[1]), r = 1048576 + (r << (a >> 20) - 998) >> 21, a = 0) : (a = a - 1056964608 >> 10, r = 512 + (1048575 & po[1]) >> 10), t | a | 65535 & r;
	}(a);
}, bo = ({ values: e }, t, a) => {
	((e, t, a) => {
		e[t] = Math.floor(a / 864e5);
	})(e, t, a.valueOf());
}, wo = ({ values: e }, t, a) => {
	e[t] = BigInt(a);
}, So = ({ values: e, valueOffsets: t }, a, r) => fo(e, t, a, r), Co = (e, t, a) => {
	var r, i, n, o;
	const s = e.values;
	if (!s) throw new Error("BinaryView data is missing view buffer");
	const l = Kn.ELEMENT_WIDTH, c = t * l, u = c + l;
	if (c < 0 || u > s.length) throw new RangeError(`BinaryView index ${t} out of bounds`);
	s.fill(0, c, u);
	const d = new DataView(s.buffer, s.byteOffset + c, l), p = a.length;
	if (d.setInt32(Kn.LENGTH_OFFSET, p, !0), p <= Kn.INLINE_CAPACITY) return void s.set(a, c + Kn.INLINE_OFFSET);
	const _ = (null !== (r = a[0]) && void 0 !== r ? r : 0) | (null !== (i = a[1]) && void 0 !== i ? i : 0) << 8 | (null !== (n = a[2]) && void 0 !== n ? n : 0) << 16 | (null !== (o = a[3]) && void 0 !== o ? o : 0) << 24;
	d.setUint32(Kn.INLINE_OFFSET, _ >>> 0, !0);
	const m = ((e) => {
		let t = e.variadicBuffers;
		return Array.isArray(t) && !Object.isFrozen(t) || (t = Array.from(t), e.variadicBuffers = t), t;
	})(e), y = a.slice(), f = m.push(y) - 1;
	d.setInt32(Kn.BUFFER_INDEX_OFFSET, f, !0), d.setInt32(Kn.BUFFER_OFFSET_OFFSET, 0, !0);
}, Io = ({ values: e, valueOffsets: t }, a, r) => fo(e, t, a, Ki(r)), ko = ({ values: e }, t, a) => {
	e[t] = BigInt(a / 1e3);
}, Ao = ({ values: e }, t, a) => {
	e[t] = BigInt(a);
}, xo = ({ values: e }, t, a) => {
	e[t] = BigInt(1e3 * a);
}, Eo = ({ values: e }, t, a) => {
	e[t] = BigInt(1e6 * a);
}, Do = ({ values: e }, t, a) => {
	e[t] = a;
}, To = ({ values: e }, t, a) => {
	e[t] = a;
}, Bo = ({ values: e }, t, a) => {
	e[t] = a;
}, zo = ({ values: e }, t, a) => {
	e[t] = a;
}, Ro = (e, t, a) => {
	const r = e.children[0], i = e.valueOffsets, n = Fo.getVisitFn(r), o = tn(i[t]), s = tn(i[t + 1]);
	if (Array.isArray(a)) for (let l = -1, c = o; c < s;) n(r, c++, a[++l]);
	else for (let l = -1, c = o; c < s;) n(r, c++, a.get(++l));
}, Mo = (e, t, a) => {
	const r = e.type.typeIdToChildIndex[e.typeIds[t]], i = e.children[r];
	Fo.visit(i, e.valueOffsets[t], a);
}, Oo = (e, t, a) => {
	const r = e.type.typeIdToChildIndex[e.typeIds[t]], i = e.children[r];
	Fo.visit(i, t, a);
}, Po = ({ values: e }, t, a) => {
	e.set(a.subarray(0, 2), 2 * t);
}, No = ({ values: e }, t, a) => {
	e[t] = 12 * a[0] + a[1] % 12;
}, Ko = ({ values: e, stride: t }, a, r) => {
	e.set(r.subarray(0, t), t * a);
}, Lo = ({ values: e }, t, a) => {
	e[t] = a;
}, jo = ({ values: e }, t, a) => {
	e[t] = a;
}, Uo = ({ values: e }, t, a) => {
	e[t] = a;
}, Go = ({ values: e }, t, a) => {
	e[t] = a;
};
mo.prototype.visitBool = yo(({ offset: e, values: t }, a, r) => {
	const i = e + a;
	r ? t[i >> 3] |= 1 << i % 8 : t[i >> 3] &= ~(1 << i % 8);
}), mo.prototype.visitInt = yo(go), mo.prototype.visitInt8 = yo(go), mo.prototype.visitInt16 = yo(go), mo.prototype.visitInt32 = yo(go), mo.prototype.visitInt64 = yo(go), mo.prototype.visitUint8 = yo(go), mo.prototype.visitUint16 = yo(go), mo.prototype.visitUint32 = yo(go), mo.prototype.visitUint64 = yo(go), mo.prototype.visitFloat = yo((e, t, a) => {
	switch (e.type.precision) {
		case $i.HALF: return vo(e, t, a);
		case $i.SINGLE:
		case $i.DOUBLE: return ho(e, t, a);
	}
}), mo.prototype.visitFloat16 = yo(vo), mo.prototype.visitFloat32 = yo(ho), mo.prototype.visitFloat64 = yo(ho), mo.prototype.visitUtf8 = yo(Io), mo.prototype.visitLargeUtf8 = yo(Io), mo.prototype.visitUtf8View = yo((e, t, a) => {
	const r = Ki(a);
	Co(e, t, r);
}), mo.prototype.visitBinary = yo(So), mo.prototype.visitLargeBinary = yo(So), mo.prototype.visitBinaryView = yo((e, t, a) => {
	const r = a instanceof Uint8Array ? a : new Uint8Array(a);
	Co(e, t, r);
}), mo.prototype.visitFixedSizeBinary = yo(({ stride: e, values: t }, a, r) => {
	t.set(r.subarray(0, e), e * a);
}), mo.prototype.visitDate = yo((e, t, a) => {
	e.type.unit === Yi.DAY ? bo(e, t, a) : wo(e, t, a);
}), mo.prototype.visitDateDay = yo(bo), mo.prototype.visitDateMillisecond = yo(wo), mo.prototype.visitTimestamp = yo((e, t, a) => {
	switch (e.type.unit) {
		case Xi.SECOND: return ko(e, t, a);
		case Xi.MILLISECOND: return Ao(e, t, a);
		case Xi.MICROSECOND: return xo(e, t, a);
		case Xi.NANOSECOND: return Eo(e, t, a);
	}
}), mo.prototype.visitTimestampSecond = yo(ko), mo.prototype.visitTimestampMillisecond = yo(Ao), mo.prototype.visitTimestampMicrosecond = yo(xo), mo.prototype.visitTimestampNanosecond = yo(Eo), mo.prototype.visitTime = yo((e, t, a) => {
	switch (e.type.unit) {
		case Xi.SECOND: return Do(e, t, a);
		case Xi.MILLISECOND: return To(e, t, a);
		case Xi.MICROSECOND: return Bo(e, t, a);
		case Xi.NANOSECOND: return zo(e, t, a);
	}
}), mo.prototype.visitTimeSecond = yo(Do), mo.prototype.visitTimeMillisecond = yo(To), mo.prototype.visitTimeMicrosecond = yo(Bo), mo.prototype.visitTimeNanosecond = yo(zo), mo.prototype.visitDecimal = yo(({ values: e, stride: t }, a, r) => {
	e.set(r.subarray(0, t), t * a);
}), mo.prototype.visitList = yo(Ro), mo.prototype.visitLargeList = yo(Ro), mo.prototype.visitStruct = yo((e, t, a) => {
	const r = e.type.children.map((e) => Fo.getVisitFn(e.type)), i = a instanceof Map ? (n = t, o = a, (e, t, a, r) => t && e(t, n, o.get(a.name))) : a instanceof yl ? ((e, t) => (a, r, i, n) => r && a(r, e, t.get(n)))(t, a) : Array.isArray(a) ? ((e, t) => (a, r, i, n) => r && a(r, e, t[n]))(t, a) : ((e, t) => (a, r, i, n) => r && a(r, e, t[i.name]))(t, a);
	var n, o;
	e.type.children.forEach((t, a) => i(r[a], e.children[a], t, a));
}), mo.prototype.visitUnion = yo((e, t, a) => {
	e.type.mode === Wi.Dense ? Mo(e, t, a) : Oo(e, t, a);
}), mo.prototype.visitDenseUnion = yo(Mo), mo.prototype.visitSparseUnion = yo(Oo), mo.prototype.visitDictionary = yo((e, t, a) => {
	var r;
	null === (r = e.dictionary) || void 0 === r || r.set(e.values[t], a);
}), mo.prototype.visitInterval = yo((e, t, a) => {
	switch (e.type.unit) {
		case Ji.YEAR_MONTH: return No(e, t, a);
		case Ji.DAY_TIME: return Po(e, t, a);
		case Ji.MONTH_DAY_NANO: return Ko(e, t, a);
	}
}), mo.prototype.visitIntervalDayTime = yo(Po), mo.prototype.visitIntervalYearMonth = yo(No), mo.prototype.visitIntervalMonthDayNano = yo(Ko), mo.prototype.visitDuration = yo((e, t, a) => {
	switch (e.type.unit) {
		case Xi.SECOND: return Lo(e, t, a);
		case Xi.MILLISECOND: return jo(e, t, a);
		case Xi.MICROSECOND: return Uo(e, t, a);
		case Xi.NANOSECOND: return Go(e, t, a);
	}
}), mo.prototype.visitDurationSecond = yo(Lo), mo.prototype.visitDurationMillisecond = yo(jo), mo.prototype.visitDurationMicrosecond = yo(Uo), mo.prototype.visitDurationNanosecond = yo(Go), mo.prototype.visitFixedSizeList = yo((e, t, a) => {
	const { stride: r } = e, i = e.children[0], n = Fo.getVisitFn(i);
	if (Array.isArray(a)) for (let o = -1, s = t * r; ++o < r;) n(i, s + o, a[o]);
	else for (let o = -1, s = t * r; ++o < r;) n(i, s + o, a.get(o));
}), mo.prototype.visitMap = yo((e, t, a) => {
	const r = e.children[0], { valueOffsets: i } = e, n = Fo.getVisitFn(r);
	let { [t]: o, [t + 1]: s } = i;
	const l = a instanceof Map ? a.entries() : Object.entries(a);
	for (const c of l) if (n(r, o, c), ++o >= s) break;
});
const Fo = new mo(), Vo = Symbol.for("parent"), qo = Symbol.for("rowIndex");
var Ho = class {
	constructor(e, t) {
		return this[Vo] = e, this[qo] = t, new Proxy(this, $o);
	}
	toArray() {
		return Object.values(this.toJSON());
	}
	toJSON() {
		const e = this[qo], t = this[Vo], a = t.type.children, r = {};
		for (let i = -1, n = a.length; ++i < n;) r[a[i].name] = Cs.visit(t.children[i], e);
		return r;
	}
	toString() {
		return `{${[...this].map(([e, t]) => `${en(e)}: ${en(t)}`).join(", ")}}`;
	}
	[Symbol.for("nodejs.util.inspect.custom")]() {
		return this.toString();
	}
	[Symbol.iterator]() {
		return new Wo(this[Vo], this[qo]);
	}
}, Wo = class {
	constructor(e, t) {
		this.childIndex = 0, this.children = e.children, this.rowIndex = t, this.childFields = e.type.children, this.numChildren = this.childFields.length;
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		const e = this.childIndex;
		return e < this.numChildren ? (this.childIndex = e + 1, {
			done: !1,
			value: [this.childFields[e].name, Cs.visit(this.children[e], this.rowIndex)]
		}) : {
			done: !0,
			value: null
		};
	}
};
Object.defineProperties(Ho.prototype, {
	[Symbol.toStringTag]: {
		enumerable: !1,
		configurable: !1,
		value: "Row"
	},
	[Vo]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[qo]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: -1
	}
});
const $o = new class {
	isExtensible() {
		return !1;
	}
	deleteProperty() {
		return !1;
	}
	preventExtensions() {
		return !0;
	}
	ownKeys(e) {
		return e[Vo].type.children.map((e) => e.name);
	}
	has(e, t) {
		return e[Vo].type.children.some((e) => e.name === t);
	}
	getOwnPropertyDescriptor(e, t) {
		if (e[Vo].type.children.some((e) => e.name === t)) return {
			writable: !0,
			enumerable: !0,
			configurable: !0
		};
	}
	get(e, t) {
		if (Reflect.has(e, t)) return e[t];
		const a = e[Vo].type.children.findIndex((e) => e.name === t);
		if (-1 !== a) {
			const r = Cs.visit(e[Vo].children[a], e[qo]);
			return Reflect.set(e, t, r), r;
		}
	}
	set(e, t, a) {
		const r = e[Vo].type.children.findIndex((e) => e.name === t);
		return -1 !== r ? (Fo.visit(e[Vo].children[r], e[qo], a), Reflect.set(e, t, a)) : !(!Reflect.has(e, t) && "symbol" != typeof t) && Reflect.set(e, t, a);
	}
}();
var Yo = class extends so {};
function Xo(e) {
	return (t, a) => t.getValid(a) ? e(t, a) : null;
}
const Jo = (e, t, a) => {
	if (a + 1 >= t.length) return null;
	const r = tn(t[a]), i = tn(t[a + 1]);
	return e.subarray(r, i);
}, Zo = ({ values: e }, t) => ((e, t) => 864e5 * e[t])(e, t), Qo = ({ values: e }, t) => tn(e[t]), es = ({ stride: e, values: t }, a) => t[e * a], ts = ({ values: e }, t) => e[t], as = ({ values: e, valueOffsets: t }, a) => Jo(e, t, a), rs = (e, t) => {
	var a;
	const r = e.values;
	if (!r) throw new Error("BinaryView data is missing view buffer");
	const i = 16 * t, n = i + 16;
	if (i < 0 || n > r.length) throw new Error(`BinaryView data buffer is too short: expected 16 bytes, got ${Math.max(0, r.length - i)}`);
	const o = r.subarray(i, n);
	if (o.length < 16) throw new Error(`BinaryView data buffer is too short: expected 16 bytes, got ${o.length}`);
	const s = new DataView(r.buffer, o.byteOffset, 16), l = s.getInt32(0, !0);
	if (l <= 0) return /* @__PURE__ */ new Uint8Array(0);
	if (l <= 12) return o.subarray(4, 4 + l);
	const c = s.getInt32(8, !0), u = s.getInt32(12, !0), d = null === (a = e.variadicBuffers) || void 0 === a ? void 0 : a[c];
	if (!d) throw new Error(`BinaryView variadic buffer ${c} is missing`);
	return d.subarray(u, u + l);
}, is = ({ values: e, valueOffsets: t }, a) => {
	const r = Jo(e, t, a);
	return null !== r ? Pi(r) : null;
}, ns = ({ values: e }, t) => 1e3 * tn(e[t]), os = ({ values: e }, t) => tn(e[t]), ss = ({ values: e }, t) => an(e[t], BigInt(1e3)), ls = ({ values: e }, t) => an(e[t], BigInt(1e6)), cs = ({ values: e }, t) => e[t], us = ({ values: e }, t) => e[t], ds = ({ values: e }, t) => e[t], ps = ({ values: e }, t) => e[t], _s = (e, t) => {
	const { valueOffsets: a, stride: r, children: i } = e, n = tn(a[t * r]), o = tn(a[t * r + 1]);
	return new yl([i[0].slice(n, o - n)]);
}, ms = (e, t) => {
	const a = e.type.typeIdToChildIndex[e.typeIds[t]], r = e.children[a];
	return Cs.visit(r, e.valueOffsets[t]);
}, ys = (e, t) => {
	const a = e.type.typeIdToChildIndex[e.typeIds[t]], r = e.children[a];
	return Cs.visit(r, t);
}, fs = ({ values: e }, t) => e.subarray(2 * t, 2 * (t + 1)), gs = ({ values: e }, t) => {
	const a = e[t], r = /* @__PURE__ */ new Int32Array(2);
	return r[0] = Math.trunc(a / 12), r[1] = Math.trunc(a % 12), r;
}, hs = ({ values: e }, t) => e.subarray(4 * t, 4 * (t + 1)), vs = ({ values: e }, t) => e[t], bs = ({ values: e }, t) => e[t], ws = ({ values: e }, t) => e[t], Ss = ({ values: e }, t) => e[t];
Yo.prototype.visitNull = Xo((e, t) => null), Yo.prototype.visitBool = Xo(({ offset: e, values: t }, a) => {
	const r = e + a;
	return !!(t[r >> 3] & 1 << r % 8);
}), Yo.prototype.visitInt = Xo(({ values: e }, t) => e[t]), Yo.prototype.visitInt8 = Xo(es), Yo.prototype.visitInt16 = Xo(es), Yo.prototype.visitInt32 = Xo(es), Yo.prototype.visitInt64 = Xo(ts), Yo.prototype.visitUint8 = Xo(es), Yo.prototype.visitUint16 = Xo(es), Yo.prototype.visitUint32 = Xo(es), Yo.prototype.visitUint64 = Xo(ts), Yo.prototype.visitFloat = Xo(({ type: e, values: t }, a) => e.precision !== $i.HALF ? t[a] : _o(t[a])), Yo.prototype.visitFloat16 = Xo(({ stride: e, values: t }, a) => _o(t[e * a])), Yo.prototype.visitFloat32 = Xo(es), Yo.prototype.visitFloat64 = Xo(es), Yo.prototype.visitUtf8 = Xo(is), Yo.prototype.visitLargeUtf8 = Xo(is), Yo.prototype.visitUtf8View = Xo((e, t) => {
	const a = rs(e, t);
	return Pi(a);
}), Yo.prototype.visitBinary = Xo(as), Yo.prototype.visitLargeBinary = Xo(as), Yo.prototype.visitBinaryView = Xo((e, t) => rs(e, t)), Yo.prototype.visitFixedSizeBinary = Xo(({ stride: e, values: t }, a) => t.subarray(e * a, e * (a + 1))), Yo.prototype.visitDate = Xo((e, t) => e.type.unit === Yi.DAY ? Zo(e, t) : Qo(e, t)), Yo.prototype.visitDateDay = Xo(Zo), Yo.prototype.visitDateMillisecond = Xo(Qo), Yo.prototype.visitTimestamp = Xo((e, t) => {
	switch (e.type.unit) {
		case Xi.SECOND: return ns(e, t);
		case Xi.MILLISECOND: return os(e, t);
		case Xi.MICROSECOND: return ss(e, t);
		case Xi.NANOSECOND: return ls(e, t);
	}
}), Yo.prototype.visitTimestampSecond = Xo(ns), Yo.prototype.visitTimestampMillisecond = Xo(os), Yo.prototype.visitTimestampMicrosecond = Xo(ss), Yo.prototype.visitTimestampNanosecond = Xo(ls), Yo.prototype.visitTime = Xo((e, t) => {
	switch (e.type.unit) {
		case Xi.SECOND: return cs(e, t);
		case Xi.MILLISECOND: return us(e, t);
		case Xi.MICROSECOND: return ds(e, t);
		case Xi.NANOSECOND: return ps(e, t);
	}
}), Yo.prototype.visitTimeSecond = Xo(cs), Yo.prototype.visitTimeMillisecond = Xo(us), Yo.prototype.visitTimeMicrosecond = Xo(ds), Yo.prototype.visitTimeNanosecond = Xo(ps), Yo.prototype.visitDecimal = Xo(({ values: e, stride: t }, a) => bn.decimal(e.subarray(t * a, t * (a + 1)))), Yo.prototype.visitList = Xo(_s), Yo.prototype.visitLargeList = Xo(_s), Yo.prototype.visitStruct = Xo((e, t) => new Ho(e, t)), Yo.prototype.visitUnion = Xo((e, t) => e.type.mode === Wi.Dense ? ms(e, t) : ys(e, t)), Yo.prototype.visitDenseUnion = Xo(ms), Yo.prototype.visitSparseUnion = Xo(ys), Yo.prototype.visitDictionary = Xo((e, t) => {
	var a;
	return null === (a = e.dictionary) || void 0 === a ? void 0 : a.get(e.values[t]);
}), Yo.prototype.visitInterval = Xo((e, t) => e.type.unit === Ji.MONTH_DAY_NANO ? hs(e, t) : e.type.unit === Ji.DAY_TIME ? fs(e, t) : gs(e, t)), Yo.prototype.visitIntervalDayTime = Xo(fs), Yo.prototype.visitIntervalYearMonth = Xo(gs), Yo.prototype.visitIntervalMonthDayNano = Xo(hs), Yo.prototype.visitDuration = Xo((e, t) => {
	switch (e.type.unit) {
		case Xi.SECOND: return vs(e, t);
		case Xi.MILLISECOND: return bs(e, t);
		case Xi.MICROSECOND: return ws(e, t);
		case Xi.NANOSECOND: return Ss(e, t);
	}
}), Yo.prototype.visitDurationSecond = Xo(vs), Yo.prototype.visitDurationMillisecond = Xo(bs), Yo.prototype.visitDurationMicrosecond = Xo(ws), Yo.prototype.visitDurationNanosecond = Xo(Ss), Yo.prototype.visitFixedSizeList = Xo((e, t) => {
	const { stride: a, children: r } = e;
	return new yl([r[0].slice(t * a, a)]);
}), Yo.prototype.visitMap = Xo((e, t) => {
	const { valueOffsets: a, children: r } = e, { [t]: i, [t + 1]: n } = a, o = r[0];
	return new Es(o.slice(i, n - i));
});
const Cs = new Yo(), Is = Symbol.for("keys"), ks = Symbol.for("vals"), As = Symbol.for("kKeysAsStrings"), xs = Symbol.for("_kKeysAsStrings");
var Es = class {
	constructor(e) {
		return this[Is] = new yl([e.children[0]]).memoize(), this[ks] = e.children[1], new Proxy(this, new Ts());
	}
	get [As]() {
		return this[xs] || (this[xs] = Array.from(this[Is].toArray(), String));
	}
	[Symbol.iterator]() {
		return new Ds(this[Is], this[ks]);
	}
	get size() {
		return this[Is].length;
	}
	toArray() {
		return Object.values(this.toJSON());
	}
	toJSON() {
		const e = this[Is], t = this[ks], a = {};
		for (let r = -1, i = e.length; ++r < i;) a[e.get(r)] = Cs.visit(t, r);
		return a;
	}
	toString() {
		return `{${[...this].map(([e, t]) => `${en(e)}: ${en(t)}`).join(", ")}}`;
	}
	[Symbol.for("nodejs.util.inspect.custom")]() {
		return this.toString();
	}
}, Ds = class {
	constructor(e, t) {
		this.keys = e, this.vals = t, this.keyIndex = 0, this.numKeys = e.length;
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		const e = this.keyIndex;
		return e === this.numKeys ? {
			done: !0,
			value: null
		} : (this.keyIndex++, {
			done: !1,
			value: [this.keys.get(e), Cs.visit(this.vals, e)]
		});
	}
}, Ts = class {
	isExtensible() {
		return !1;
	}
	deleteProperty() {
		return !1;
	}
	preventExtensions() {
		return !0;
	}
	ownKeys(e) {
		return e[As];
	}
	has(e, t) {
		return e[As].includes(t);
	}
	getOwnPropertyDescriptor(e, t) {
		if (-1 !== e[As].indexOf(t)) return {
			writable: !0,
			enumerable: !0,
			configurable: !0
		};
	}
	get(e, t) {
		if (Reflect.has(e, t)) return e[t];
		const a = e[As].indexOf(t);
		if (-1 !== a) {
			const r = Cs.visit(Reflect.get(e, ks), a);
			return Reflect.set(e, t, r), r;
		}
	}
	set(e, t, a) {
		const r = e[As].indexOf(t);
		return -1 !== r ? (Fo.visit(Reflect.get(e, ks), r, a), Reflect.set(e, t, a)) : !!Reflect.has(e, t) && Reflect.set(e, t, a);
	}
};
let Bs;
function zs(e, t, a, r) {
	const { length: i = 0 } = e;
	let n = "number" != typeof t ? 0 : t, o = "number" != typeof a ? i : a;
	return n < 0 && (n = (n % i + i) % i), o < 0 && (o = (o % i + i) % i), o < n && (Bs = n, n = o, o = Bs), o > i && (o = i), r ? r(e, n, o) : [n, o];
}
Object.defineProperties(Es.prototype, {
	[Symbol.toStringTag]: {
		enumerable: !1,
		configurable: !1,
		value: "Row"
	},
	[Is]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[ks]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[xs]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	}
});
const Rs = (e, t) => e < 0 ? t + e : e, Ms = (e) => e != e;
function Os(e) {
	if ("object" != typeof e || null === e) return Ms(e) ? Ms : (t) => t === e;
	if (e instanceof Date) {
		const t = e.valueOf();
		return (e) => e instanceof Date && e.valueOf() === t;
	}
	return ArrayBuffer.isView(e) ? (t) => !!t && function(e, t) {
		let a = 0;
		const r = e.length;
		if (r !== t.length) return !1;
		if (r > 0) do
			if (e[a] !== t[a]) return !1;
		while (++a < r);
		return !0;
	}(e, t) : e instanceof Map ? function(e) {
		let t = -1;
		const a = [];
		for (const r of e.values()) a[++t] = Os(r);
		return Ps(a);
	}(e) : Array.isArray(e) ? function(e) {
		const t = [];
		for (let a = -1, r = e.length; ++a < r;) t[a] = Os(e[a]);
		return Ps(t);
	}(e) : e instanceof yl ? function(e) {
		const t = [];
		for (let a = -1, r = e.length; ++a < r;) t[a] = Os(e.get(a));
		return Ps(t);
	}(e) : function(e, t = !1) {
		const a = Object.keys(e);
		if (!t && 0 === a.length) return () => !1;
		const r = [];
		for (let i = -1, n = a.length; ++i < n;) r[i] = Os(e[a[i]]);
		return Ps(r, a);
	}(e, !0);
}
function Ps(e, t) {
	return (a) => {
		if (!a || "object" != typeof a) return !1;
		switch (a.constructor) {
			case Array: return function(e, t) {
				const a = e.length;
				if (t.length !== a) return !1;
				for (let r = -1; ++r < a;) if (!e[r](t[r])) return !1;
				return !0;
			}(e, a);
			case Map: return Ns(e, a, a.keys());
			case Es:
			case Ho:
			case Object:
			case void 0: return Ns(e, a, t || Object.keys(a));
		}
		return a instanceof yl && function(e, t) {
			const a = e.length;
			if (t.length !== a) return !1;
			for (let r = -1; ++r < a;) if (!e[r](t.get(r))) return !1;
			return !0;
		}(e, a);
	};
}
function Ns(e, t, a) {
	const r = a[Symbol.iterator](), i = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), n = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
	let o = 0;
	const s = e.length;
	let l = n.next(), c = r.next(), u = i.next();
	for (; o < s && !c.done && !u.done && !l.done && c.value === u.value && e[o](l.value); ++o, c = r.next(), u = i.next(), l = n.next());
	return !!(o === s && c.done && u.done && l.done) || (r.return && r.return(), i.return && i.return(), n.return && n.return(), !1);
}
function Ks(e, t, a, r) {
	return !!(a & 1 << r);
}
function Ls(e, t, a, r) {
	return (a & 1 << r) >> r;
}
function js(e, t, a) {
	const r = a.byteLength + 7 & -8;
	if (e > 0 || a.byteLength < r) {
		const i = new Uint8Array(r);
		return i.set(e % 8 == 0 ? a.subarray(e >> 3) : function(e) {
			const t = [];
			let a = 0, r = 0, i = 0;
			for (const o of e) o && (i |= 1 << r), 8 === ++r && (t[a++] = i, i = r = 0);
			(0 === a || r > 0) && (t[a++] = i);
			const n = new Uint8Array(t.length + 7 & -8);
			return n.set(t), n;
		}(new Us(a, e, t, null, Ks)).subarray(0, r)), i;
	}
	return a;
}
var Us = class {
	constructor(e, t, a, r, i) {
		this.bytes = e, this.length = a, this.context = r, this.get = i, this.bit = t % 8, this.byteIndex = t >> 3, this.byte = e[this.byteIndex++], this.index = 0;
	}
	next() {
		return this.index < this.length ? (8 === this.bit && (this.bit = 0, this.byte = this.bytes[this.byteIndex++]), { value: this.get(this.context, this.index++, this.byte, this.bit++) }) : {
			done: !0,
			value: null
		};
	}
	[Symbol.iterator]() {
		return this;
	}
};
function Gs(e, t, a) {
	if (a - t <= 0) return 0;
	if (a - t < 8) {
		let r = 0;
		for (const i of new Us(e, t, a - t, e, Ls)) r += i;
		return r;
	}
	const r = a >> 3 << 3, i = t + (t % 8 == 0 ? 0 : 8 - t % 8);
	return Gs(e, t, i) + Gs(e, r, a) + function(e, t, a) {
		let r = 0, i = Math.trunc(t);
		const n = new DataView(e.buffer, e.byteOffset, e.byteLength), o = void 0 === a ? e.byteLength : i + a;
		for (; o - i >= 4;) r += Fs(n.getUint32(i)), i += 4;
		for (; o - i >= 2;) r += Fs(n.getUint16(i)), i += 2;
		for (; o - i >= 1;) r += Fs(n.getUint8(i)), i += 1;
		return r;
	}(e, i >> 3, r - i >> 3);
}
function Fs(e) {
	let t = Math.trunc(e);
	return t -= t >>> 1 & 1431655765, t = (858993459 & t) + (t >>> 2 & 858993459), 16843009 * (t + (t >>> 4) & 252645135) >>> 24;
}
const Vs = Symbol.for("apache-arrow/Data");
var qs = class e {
	static isData(e) {
		return !0 === (null == e ? void 0 : e[Vs]);
	}
	get typeId() {
		return this.type.typeId;
	}
	get ArrayType() {
		return this.type.ArrayType;
	}
	get buffers() {
		return [
			this.valueOffsets,
			this.values,
			this.nullBitmap,
			this.typeIds
		];
	}
	get nullable() {
		if (0 !== this._nullCount) {
			const { type: e } = this;
			return Cn.isSparseUnion(e) || Cn.isDenseUnion(e) ? this.children.some((e) => e.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
		}
		return !0;
	}
	get byteLength() {
		let e = 0;
		const { valueOffsets: t, values: a, nullBitmap: r, typeIds: i } = this;
		return t && (e += t.byteLength), a && (e += a.byteLength), r && (e += r.byteLength), i && (e += i.byteLength), e += this.variadicBuffers.reduce((e, t) => {
			var a;
			return e + (null !== (a = null == t ? void 0 : t.byteLength) && void 0 !== a ? a : 0);
		}, 0), this.children.reduce((e, t) => e + t.byteLength, e);
	}
	get nullCount() {
		if (Cn.isUnion(this.type)) return this.children.reduce((e, t) => e + t.nullCount, 0);
		let e, t = this._nullCount;
		return t <= -1 && (e = this.nullBitmap) && (this._nullCount = t = 0 === e.length ? 0 : this.length - Gs(e, this.offset, this.offset + this.length)), t;
	}
	constructor(t, a, r, i, n, o = [], s, l = []) {
		var c;
		let u;
		this.type = t, this.children = o, this.dictionary = s, this.offset = Math.floor(Math.max(a || 0, 0)), this.length = Math.floor(Math.max(r || 0, 0)), this._nullCount = Math.floor(Math.max(i || 0, -1)), n instanceof e ? (this.stride = n.stride, this.values = n.values, this.typeIds = n.typeIds, this.nullBitmap = n.nullBitmap, this.valueOffsets = n.valueOffsets, this.variadicBuffers = n.variadicBuffers) : (this.stride = oo(t), n && ((u = n[0]) && (this.valueOffsets = u), (u = n[1]) && (this.values = u), (u = n[2]) && (this.nullBitmap = u), (u = n[3]) && (this.typeIds = u)), this.variadicBuffers = l), null !== (c = this.variadicBuffers) && void 0 !== c || (this.variadicBuffers = []);
	}
	getValid(e) {
		const { type: t } = this;
		if (Cn.isUnion(t)) {
			const a = t, r = this.typeIds[e], i = a.typeIdToChildIndex[r], n = this.children[i], o = this.valueOffsets, s = a.mode === Wi.Dense && o ? Number(o[e]) : e;
			return n.getValid(s);
		}
		if (this.nullable && this.nullCount > 0) {
			const t = this.offset + e;
			return !!(this.nullBitmap[t >> 3] & 1 << t % 8);
		}
		return !0;
	}
	setValid(e, t) {
		let a;
		const { type: r } = this;
		if (Cn.isUnion(r)) {
			const i = r, n = this.typeIds[e], o = i.typeIdToChildIndex[n], s = this.children[o], l = this.valueOffsets, c = i.mode === Wi.Dense && l ? Number(l[e]) : e;
			a = s.getValid(c), s.setValid(c, t);
		} else {
			let { nullBitmap: r } = this;
			const { offset: i, length: n } = this, o = i + e, s = 1 << o % 8, l = o >> 3;
			(!r || r.byteLength <= l) && (r = new Uint8Array((i + n + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (r.set(js(i, n, this.nullBitmap), 0), Object.assign(this, { nullBitmap: r })) : Object.assign(this, {
				nullBitmap: r,
				_nullCount: 0
			}));
			const c = r[l];
			a = 0 !== (c & s), r[l] = t ? c | s : c & ~s;
		}
		return a !== !!t && (this._nullCount = this.nullCount + (t ? -1 : 1)), t;
	}
	clone(t = this.type, a = this.offset, r = this.length, i = this._nullCount, n = this, o = this.children, s = this.variadicBuffers) {
		return new e(t, a, r, i, n, o, this.dictionary, s);
	}
	slice(e, t) {
		const { stride: a, typeId: r, children: i } = this, n = +(0 === this._nullCount) - 1, o = 16 === r ? a : 1, s = this._sliceBuffers(e, t, a, r);
		return this.clone(this.type, this.offset + e, t, n, s, 0 === i.length || this.valueOffsets ? i : this._sliceChildren(i, o * e, o * t), this.variadicBuffers);
	}
	_changeLengthAndBackfillNullBitmap(e) {
		if (this.typeId === Zi.Null) return this.clone(this.type, 0, e, 0, this.buffers, this.children, this.variadicBuffers);
		const { length: t, nullCount: a } = this, r = new Uint8Array((e + 63 & -64) >> 3).fill(255, 0, t >> 3);
		r[t >> 3] = (1 << t - (-8 & t)) - 1, a > 0 && r.set(js(this.offset, t, this.nullBitmap), 0);
		const i = this.buffers;
		return i[Qi.VALIDITY] = r, this.clone(this.type, 0, e, a + (e - t), i, this.children, this.variadicBuffers);
	}
	_sliceBuffers(e, t, a, r) {
		let i;
		const { buffers: n } = this;
		if ((i = n[Qi.TYPE]) && (n[Qi.TYPE] = i.subarray(e, e + t)), Cn.isBinaryView(this.type) || Cn.isUtf8View(this.type)) {
			const a = Kn.ELEMENT_WIDTH;
			(i = n[Qi.DATA]) && (n[Qi.DATA] = i.subarray(e * a, (e + t) * a));
		} else (i = n[Qi.OFFSET]) && (n[Qi.OFFSET] = i.subarray(e, e + t + 1)) || (i = n[Qi.DATA]) && (n[Qi.DATA] = 6 === r ? i : i.subarray(a * e, a * (e + t)));
		return n;
	}
	_sliceChildren(e, t, a) {
		return e.map((e) => e.slice(t, a));
	}
};
qs.prototype.children = Object.freeze([]), qs.prototype[Vs] = !0, Object.defineProperty(qs, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === qs && qs.isData(e);
} });
const Hs = new class e extends so {
	visit(e) {
		return this.getVisitFn(e.type).call(this, e);
	}
	visitNull(e) {
		const { type: t, offset: a = 0, length: r = 0 } = e;
		return new qs(t, a, r, r);
	}
	visitBool(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.nullBitmap), i = Gi(t.ArrayType, e.data), { length: n = i.length >> 3, nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, n, o, [
			void 0,
			i,
			r
		]);
	}
	visitInt(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.nullBitmap), i = Gi(t.ArrayType, e.data), { length: n = i.length, nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, n, o, [
			void 0,
			i,
			r
		]);
	}
	visitFloat(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.nullBitmap), i = Gi(t.ArrayType, e.data), { length: n = i.length, nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, n, o, [
			void 0,
			i,
			r
		]);
	}
	visitUtf8(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.data), i = qi(e.nullBitmap), n = Fi(e.valueOffsets), { length: o = n.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, o, s, [
			n,
			r,
			i
		]);
	}
	visitUtf8View(e) {
		var t;
		const { type: a, offset: r = 0 } = e, i = Gi(a.ArrayType, e.views), n = qi(e.nullBitmap), o = (e.variadicBuffers || []).map((e) => qi(e));
		return new qs(a, r, null !== (t = e.length) && void 0 !== t ? t : Math.trunc(i.length / Un.ELEMENT_WIDTH), e.nullBitmap ? -1 : 0, [
			void 0,
			i,
			n
		], [], void 0, o);
	}
	visitLargeUtf8(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.data), i = qi(e.nullBitmap), n = Vi(e.valueOffsets), { length: o = n.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, o, s, [
			n,
			r,
			i
		]);
	}
	visitBinary(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.data), i = qi(e.nullBitmap), n = Fi(e.valueOffsets), { length: o = n.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, o, s, [
			n,
			r,
			i
		]);
	}
	visitBinaryView(e) {
		var t;
		const { type: a, offset: r = 0 } = e, i = Gi(a.ArrayType, e.views), n = qi(e.nullBitmap), o = (e.variadicBuffers || []).map((e) => qi(e));
		return new qs(a, r, null !== (t = e.length) && void 0 !== t ? t : Math.trunc(i.length / Kn.ELEMENT_WIDTH), e.nullBitmap ? -1 : 0, [
			void 0,
			i,
			n
		], [], void 0, o);
	}
	visitLargeBinary(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.data), i = qi(e.nullBitmap), n = Vi(e.valueOffsets), { length: o = n.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, o, s, [
			n,
			r,
			i
		]);
	}
	visitFixedSizeBinary(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.nullBitmap), i = Gi(t.ArrayType, e.data), { length: n = i.length / oo(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, n, o, [
			void 0,
			i,
			r
		]);
	}
	visitDate(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.nullBitmap), i = Gi(t.ArrayType, e.data), { length: n = i.length / oo(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, n, o, [
			void 0,
			i,
			r
		]);
	}
	visitTimestamp(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.nullBitmap), i = Gi(t.ArrayType, e.data), { length: n = i.length / oo(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, n, o, [
			void 0,
			i,
			r
		]);
	}
	visitTime(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.nullBitmap), i = Gi(t.ArrayType, e.data), { length: n = i.length / oo(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, n, o, [
			void 0,
			i,
			r
		]);
	}
	visitDecimal(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.nullBitmap), i = Gi(t.ArrayType, e.data), { length: n = i.length / oo(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, n, o, [
			void 0,
			i,
			r
		]);
	}
	visitList(e) {
		const { type: t, offset: a = 0, child: r } = e, i = qi(e.nullBitmap), n = Fi(e.valueOffsets), { length: o = n.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, o, s, [
			n,
			void 0,
			i
		], [r]);
	}
	visitLargeList(e) {
		const { type: t, offset: a = 0, child: r } = e, i = qi(e.nullBitmap), n = Vi(e.valueOffsets), { length: o = n.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, o, s, [
			n,
			void 0,
			i
		], [r]);
	}
	visitStruct(e) {
		const { type: t, offset: a = 0, children: r = [] } = e, i = qi(e.nullBitmap), { length: n = r.reduce((e, { length: t }) => Math.max(e, t), 0), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, n, o, [
			void 0,
			void 0,
			i
		], r);
	}
	visitUnion(e) {
		const { type: t, offset: a = 0, children: r = [] } = e, i = Gi(t.ArrayType, e.typeIds), { length: n = i.length, nullCount: o = -1 } = e;
		if (Cn.isSparseUnion(t)) return new qs(t, a, n, o, [
			void 0,
			void 0,
			void 0,
			i
		], r);
		return new qs(t, a, n, o, [
			Fi(e.valueOffsets),
			void 0,
			void 0,
			i
		], r);
	}
	visitDictionary(t) {
		const { type: a, offset: r = 0 } = t, i = qi(t.nullBitmap), n = Gi(a.indices.ArrayType, t.data), { dictionary: o = new yl([new e().visit({ type: a.dictionary })]) } = t, { length: s = n.length, nullCount: l = t.nullBitmap ? -1 : 0 } = t;
		return new qs(a, r, s, l, [
			void 0,
			n,
			i
		], [], o);
	}
	visitInterval(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.nullBitmap), i = Gi(t.ArrayType, e.data), { length: n = i.length / oo(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, n, o, [
			void 0,
			i,
			r
		]);
	}
	visitDuration(e) {
		const { type: t, offset: a = 0 } = e, r = qi(e.nullBitmap), i = Gi(t.ArrayType, e.data), { length: n = i.length, nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new qs(t, a, n, o, [
			void 0,
			i,
			r
		]);
	}
	visitFixedSizeList(t) {
		const { type: a, offset: r = 0, child: i = new e().visit({ type: a.valueType }) } = t, n = qi(t.nullBitmap), { length: o = i.length / oo(a), nullCount: s = t.nullBitmap ? -1 : 0 } = t;
		return new qs(a, r, o, s, [
			void 0,
			void 0,
			n
		], [i]);
	}
	visitMap(t) {
		const { type: a, offset: r = 0, child: i = new e().visit({ type: a.childType }) } = t, n = qi(t.nullBitmap), o = Fi(t.valueOffsets), { length: s = o.length - 1, nullCount: l = t.nullBitmap ? -1 : 0 } = t;
		return new qs(a, r, s, l, [
			o,
			void 0,
			n
		], [i]);
	}
}();
function Ws(e) {
	return Hs.visit(e);
}
var $s = class {
	constructor(e = 0, t) {
		this.numChunks = e, this.getChunkIterator = t, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0);
	}
	next() {
		for (; this.chunkIndex < this.numChunks;) {
			const e = this.chunkIterator.next();
			if (!e.done) return e;
			++this.chunkIndex < this.numChunks && (this.chunkIterator = this.getChunkIterator(this.chunkIndex));
		}
		return {
			done: !0,
			value: null
		};
	}
	[Symbol.iterator]() {
		return this;
	}
};
function Ys(e) {
	return e.reduce((e, t) => e + t.nullCount, 0);
}
function Xs(e) {
	return e.reduce((e, t, a) => (e[a + 1] = e[a] + t.length, e), new Uint32Array(e.length + 1));
}
function Js(e, t, a, r) {
	const i = [];
	for (let n = -1, o = e.length; ++n < o;) {
		const o = e[n], s = t[n], { length: l } = o;
		if (s >= r) break;
		if (a >= s + l) continue;
		if (s >= a && s + l <= r) {
			i.push(o);
			continue;
		}
		const c = Math.max(0, a - s), u = Math.min(r - s, l);
		i.push(o.slice(c, u - c));
	}
	return 0 === i.length && i.push(e[0].slice(0, 0)), i;
}
function Zs(e, t, a, r) {
	let i = 0, n = 0, o = t.length - 1;
	do {
		if (i >= o - 1) return a < t[o] ? r(e, i, a - t[i]) : null;
		n = i + Math.trunc(.5 * (o - i)), a < t[n] ? o = n : i = n;
	} while (i < o);
}
function Qs(e, t) {
	return e.getValid(t);
}
function el(e) {
	function t(t, a, r) {
		return e(t[a], r);
	}
	return function(e) {
		return Zs(this.data, this._offsets, e, t);
	};
}
function tl(e) {
	let t;
	function a(a, r, i) {
		return e(a[r], i, t);
	}
	return function(e, r) {
		const i = this.data;
		t = r;
		const n = Zs(i, this._offsets, e, a);
		return t = void 0, n;
	};
}
function al(e) {
	let t;
	function a(a, r, i) {
		let n = i, o = 0, s = 0;
		for (let l = r - 1, c = a.length; ++l < c;) {
			const r = a[l];
			if (~(o = e(r, t, n))) return s + o;
			n = 0, s += r.length;
		}
		return -1;
	}
	return function(e, r) {
		t = e;
		const i = this.data, n = "number" != typeof r ? a(i, 0, 0) : Zs(i, this._offsets, r, a);
		return t = void 0, n;
	};
}
var rl = class extends so {};
function il(e, t, a) {
	if (void 0 === t) return -1;
	if (null === t) switch (e.typeId) {
		case Zi.Union:
		case Zi.Dictionary: break;
		default: return function(e, t) {
			const { nullBitmap: a } = e;
			if (!a || e.nullCount <= 0) return -1;
			let r = 0;
			for (const i of new Us(a, e.offset + (t || 0), e.length, a, Ks)) {
				if (!i) return r;
				++r;
			}
			return -1;
		}(e, a);
	}
	const r = Cs.getVisitFn(e), i = Os(t);
	for (let n = (a || 0) - 1, o = e.length; ++n < o;) if (i(r(e, n))) return n;
	return -1;
}
function nl(e, t, a) {
	const r = Cs.getVisitFn(e), i = Os(t);
	for (let n = (a || 0) - 1, o = e.length; ++n < o;) if (i(r(e, n))) return n;
	return -1;
}
rl.prototype.visitNull = function(e, t) {
	return null === t && e.length > 0 ? 0 : -1;
}, rl.prototype.visitBool = il, rl.prototype.visitInt = il, rl.prototype.visitInt8 = il, rl.prototype.visitInt16 = il, rl.prototype.visitInt32 = il, rl.prototype.visitInt64 = il, rl.prototype.visitUint8 = il, rl.prototype.visitUint16 = il, rl.prototype.visitUint32 = il, rl.prototype.visitUint64 = il, rl.prototype.visitFloat = il, rl.prototype.visitFloat16 = il, rl.prototype.visitFloat32 = il, rl.prototype.visitFloat64 = il, rl.prototype.visitUtf8 = il, rl.prototype.visitLargeUtf8 = il, rl.prototype.visitUtf8View = il, rl.prototype.visitBinary = il, rl.prototype.visitLargeBinary = il, rl.prototype.visitBinaryView = il, rl.prototype.visitFixedSizeBinary = il, rl.prototype.visitDate = il, rl.prototype.visitDateDay = il, rl.prototype.visitDateMillisecond = il, rl.prototype.visitTimestamp = il, rl.prototype.visitTimestampSecond = il, rl.prototype.visitTimestampMillisecond = il, rl.prototype.visitTimestampMicrosecond = il, rl.prototype.visitTimestampNanosecond = il, rl.prototype.visitTime = il, rl.prototype.visitTimeSecond = il, rl.prototype.visitTimeMillisecond = il, rl.prototype.visitTimeMicrosecond = il, rl.prototype.visitTimeNanosecond = il, rl.prototype.visitDecimal = il, rl.prototype.visitList = il, rl.prototype.visitLargeList = il, rl.prototype.visitStruct = il, rl.prototype.visitUnion = il, rl.prototype.visitDenseUnion = nl, rl.prototype.visitSparseUnion = nl, rl.prototype.visitDictionary = il, rl.prototype.visitInterval = il, rl.prototype.visitIntervalDayTime = il, rl.prototype.visitIntervalYearMonth = il, rl.prototype.visitIntervalMonthDayNano = il, rl.prototype.visitDuration = il, rl.prototype.visitDurationSecond = il, rl.prototype.visitDurationMillisecond = il, rl.prototype.visitDurationMicrosecond = il, rl.prototype.visitDurationNanosecond = il, rl.prototype.visitFixedSizeList = il, rl.prototype.visitMap = il;
const ol = new rl();
var sl = class extends so {};
function ll(e) {
	const { type: t } = e;
	if (0 === e.nullCount && 1 === e.stride && (Cn.isInt(t) && 64 !== t.bitWidth || Cn.isTime(t) && 64 !== t.bitWidth || Cn.isFloat(t) && t.precision !== $i.HALF)) return new $s(e.data.length, (t) => {
		const a = e.data[t];
		return a.values.subarray(0, a.length)[Symbol.iterator]();
	});
	let a = 0;
	return new $s(e.data.length, (t) => {
		const r = e.data[t].length, i = e.slice(a, a + r);
		return a += r, new cl(i);
	});
}
var cl = class {
	constructor(e) {
		this.vector = e, this.index = 0;
	}
	next() {
		return this.index < this.vector.length ? { value: this.vector.get(this.index++) } : {
			done: !0,
			value: null
		};
	}
	[Symbol.iterator]() {
		return this;
	}
};
sl.prototype.visitNull = ll, sl.prototype.visitBool = ll, sl.prototype.visitInt = ll, sl.prototype.visitInt8 = ll, sl.prototype.visitInt16 = ll, sl.prototype.visitInt32 = ll, sl.prototype.visitInt64 = ll, sl.prototype.visitUint8 = ll, sl.prototype.visitUint16 = ll, sl.prototype.visitUint32 = ll, sl.prototype.visitUint64 = ll, sl.prototype.visitFloat = ll, sl.prototype.visitFloat16 = ll, sl.prototype.visitFloat32 = ll, sl.prototype.visitFloat64 = ll, sl.prototype.visitUtf8 = ll, sl.prototype.visitLargeUtf8 = ll, sl.prototype.visitUtf8View = ll, sl.prototype.visitBinary = ll, sl.prototype.visitLargeBinary = ll, sl.prototype.visitBinaryView = ll, sl.prototype.visitFixedSizeBinary = ll, sl.prototype.visitDate = ll, sl.prototype.visitDateDay = ll, sl.prototype.visitDateMillisecond = ll, sl.prototype.visitTimestamp = ll, sl.prototype.visitTimestampSecond = ll, sl.prototype.visitTimestampMillisecond = ll, sl.prototype.visitTimestampMicrosecond = ll, sl.prototype.visitTimestampNanosecond = ll, sl.prototype.visitTime = ll, sl.prototype.visitTimeSecond = ll, sl.prototype.visitTimeMillisecond = ll, sl.prototype.visitTimeMicrosecond = ll, sl.prototype.visitTimeNanosecond = ll, sl.prototype.visitDecimal = ll, sl.prototype.visitList = ll, sl.prototype.visitLargeList = ll, sl.prototype.visitStruct = ll, sl.prototype.visitUnion = ll, sl.prototype.visitDenseUnion = ll, sl.prototype.visitSparseUnion = ll, sl.prototype.visitDictionary = ll, sl.prototype.visitInterval = ll, sl.prototype.visitIntervalDayTime = ll, sl.prototype.visitIntervalYearMonth = ll, sl.prototype.visitIntervalMonthDayNano = ll, sl.prototype.visitDuration = ll, sl.prototype.visitDurationSecond = ll, sl.prototype.visitDurationMillisecond = ll, sl.prototype.visitDurationMicrosecond = ll, sl.prototype.visitDurationNanosecond = ll, sl.prototype.visitFixedSizeList = ll, sl.prototype.visitMap = ll;
const ul = new sl();
var dl;
const pl = Symbol.for("apache-arrow/Vector"), _l = {}, ml = {};
var yl = class e {
	static isVector(e) {
		return !0 === (null == e ? void 0 : e[pl]);
	}
	constructor(t) {
		var a, r, i;
		const n = t[0] instanceof e ? t.flatMap((e) => e.data) : t;
		if (0 === n.length || n.some((e) => !(e instanceof qs))) throw new TypeError("Vector constructor expects an Array of Data instances.");
		const o = null === (a = n[0]) || void 0 === a ? void 0 : a.type;
		switch (n.length) {
			case 0:
				this._offsets = [0];
				break;
			case 1: {
				const { get: e, set: t, indexOf: a } = _l[o.typeId], r = n[0];
				this.isValid = (e) => Qs(r, e), this.get = (t) => e(r, t), this.set = (e, a) => t(r, e, a), this.indexOf = (e) => a(r, e), this._offsets = [0, r.length];
				break;
			}
			default: Object.setPrototypeOf(this, ml[o.typeId]), this._offsets = Xs(n);
		}
		this.data = n, this.type = o, this.stride = oo(o), this.numChildren = null !== (i = null === (r = o.children) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0, this.length = this._offsets.at(-1);
	}
	get byteLength() {
		return this.data.reduce((e, t) => e + t.byteLength, 0);
	}
	get nullable() {
		return this.data.some((e) => e.nullable);
	}
	get nullCount() {
		return Ys(this.data);
	}
	get ArrayType() {
		return this.type.ArrayType;
	}
	get [Symbol.toStringTag]() {
		return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
	}
	get VectorName() {
		return `${Zi[this.type.typeId]}Vector`;
	}
	isValid(e) {
		return !1;
	}
	get(e) {
		return null;
	}
	at(e) {
		return this.get(Rs(e, this.length));
	}
	set(e, t) {}
	indexOf(e, t) {
		return -1;
	}
	includes(e, t) {
		return this.indexOf(e, t) > -1;
	}
	[Symbol.iterator]() {
		return ul.visit(this);
	}
	concat(...t) {
		return new e(this.data.concat(t.flatMap((e) => e.data).flat(Number.POSITIVE_INFINITY)));
	}
	slice(t, a) {
		return new e(zs(this, t, a, ({ data: e, _offsets: t }, a, r) => Js(e, t, a, r)));
	}
	toJSON() {
		return [...this];
	}
	toArray() {
		const { type: e, data: t, length: a, stride: r, ArrayType: i } = this;
		switch (e.typeId) {
			case Zi.Int:
			case Zi.Float:
			case Zi.Decimal:
			case Zi.Time:
			case Zi.Timestamp: switch (t.length) {
				case 0: return new i();
				case 1: return t[0].values.subarray(0, a * r);
				default: return t.reduce((e, { values: t, length: a }) => (e.array.set(t.subarray(0, a * r), e.offset), e.offset += a * r, e), {
					array: new i(a * r),
					offset: 0
				}).array;
			}
		}
		return [...this];
	}
	toString() {
		return `[${[...this].join(",")}]`;
	}
	getChild(e) {
		var t;
		return this.getChildAt(null === (t = this.type.children) || void 0 === t ? void 0 : t.findIndex((t) => t.name === e));
	}
	getChildAt(t) {
		return t > -1 && t < this.numChildren ? new e(this.data.map(({ children: e }) => e[t])) : null;
	}
	get isMemoized() {
		return !!Cn.isDictionary(this.type) && this.data[0].dictionary.isMemoized;
	}
	memoize() {
		if (Cn.isDictionary(this.type)) {
			const t = new fl(this.data[0].dictionary), a = this.data.map((e) => {
				const a = e.clone();
				return a.dictionary = t, a;
			});
			return new e(a);
		}
		return new fl(this);
	}
	unmemoize() {
		if (Cn.isDictionary(this.type) && this.isMemoized) {
			const t = this.data[0].dictionary.unmemoize(), a = this.data.map((e) => {
				const a = e.clone();
				return a.dictionary = t, a;
			});
			return new e(a);
		}
		return this;
	}
};
dl = Symbol.toStringTag, yl[dl] = ((e) => {
	e.type = Cn.prototype, e.data = [], e.length = 0, e.stride = 1, e.numChildren = 0, e._offsets = new Uint32Array([0]), e[Symbol.isConcatSpreadable] = !0, e[pl] = !0;
	const t = Object.keys(Zi).map((e) => Zi[e]).filter((e) => "number" == typeof e && e !== Zi.NONE);
	for (const a of t) {
		const t = Cs.getVisitFnByTypeId(a), r = Fo.getVisitFnByTypeId(a), i = ol.getVisitFnByTypeId(a);
		_l[a] = {
			get: t,
			set: r,
			indexOf: i
		}, ml[a] = Object.create(e, {
			isValid: { value: el(Qs) },
			get: { value: el(Cs.getVisitFnByTypeId(a)) },
			set: { value: tl(Fo.getVisitFnByTypeId(a)) },
			indexOf: { value: al(ol.getVisitFnByTypeId(a)) }
		});
	}
	return "Vector";
})(yl.prototype), Object.defineProperty(yl, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === yl && yl.isVector(e);
} });
var fl = class e extends yl {
	constructor(t) {
		super(t.data);
		const a = this.get, r = this.set, i = this.slice, n = new Array(this.length);
		Object.defineProperty(this, "get", { value(e) {
			const t = n[e];
			if (void 0 !== t) return t;
			const r = a.call(this, e);
			return n[e] = r, r;
		} }), Object.defineProperty(this, "set", { value(e, t) {
			r.call(this, e, t), n[e] = t;
		} }), Object.defineProperty(this, "slice", { value: (t, a) => new e(i.call(this, t, a)) }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", { value: () => new yl(this.data) }), Object.defineProperty(this, "memoize", { value: () => this });
	}
};
function gl(e) {
	if (e) {
		if (e instanceof qs) return new yl([e]);
		if (e instanceof yl) return new yl(e.data);
		if (e.type instanceof Cn) return new yl([Ws(e)]);
		if (Array.isArray(e)) return new yl(e.flatMap((e) => {
			return (t = e) instanceof qs ? [t] : t instanceof yl ? t.data : gl(t).data;
			var t;
		}));
		if (ArrayBuffer.isView(e)) {
			e instanceof DataView && (e = new Uint8Array(e.buffer));
			const t = {
				offset: 0,
				length: e.length,
				nullCount: -1,
				data: e
			};
			if (e instanceof Int8Array) return new yl([Ws(Object.assign(Object.assign({}, t), { type: new An() }))]);
			if (e instanceof Int16Array) return new yl([Ws(Object.assign(Object.assign({}, t), { type: new xn() }))]);
			if (e instanceof Int32Array) return new yl([Ws(Object.assign(Object.assign({}, t), { type: new En() }))]);
			if (e instanceof BigInt64Array) return new yl([Ws(Object.assign(Object.assign({}, t), { type: new Dn() }))]);
			if (e instanceof Uint8Array || e instanceof Uint8ClampedArray) return new yl([Ws(Object.assign(Object.assign({}, t), { type: new Tn() }))]);
			if (e instanceof Uint16Array) return new yl([Ws(Object.assign(Object.assign({}, t), { type: new Bn() }))]);
			if (e instanceof Uint32Array) return new yl([Ws(Object.assign(Object.assign({}, t), { type: new zn() }))]);
			if (e instanceof BigUint64Array) return new yl([Ws(Object.assign(Object.assign({}, t), { type: new Rn() }))]);
			if (e instanceof Float32Array) return new yl([Ws(Object.assign(Object.assign({}, t), { type: new On() }))]);
			if (e instanceof Float64Array) return new yl([Ws(Object.assign(Object.assign({}, t), { type: new Pn() }))]);
			throw new Error("Unrecognized input");
		}
	}
	throw new Error("Unrecognized input");
}
const hl = Symbol.for("apache-arrow/Schema"), vl = Symbol.for("apache-arrow/Field");
var bl = class e {
	static isSchema(e) {
		return !0 === (null == e ? void 0 : e[hl]);
	}
	constructor(e = [], t, a, r = Hi.V5) {
		this.fields = e || [], this.metadata = t || /* @__PURE__ */ new Map(), a || (a = Cl(this.fields)), this.dictionaries = a, this.metadataVersion = r;
	}
	get [Symbol.toStringTag]() {
		return "Schema";
	}
	get names() {
		return this.fields.map((e) => e.name);
	}
	toString() {
		return `Schema<{ ${this.fields.map((e, t) => `${t}: ${e}`).join(", ")} }>`;
	}
	select(t) {
		const a = new Set(t), r = this.fields.filter((e) => a.has(e.name));
		return new e(r, this.metadata);
	}
	selectAt(t) {
		const a = t.map((e) => this.fields[e]).filter(Boolean);
		return new e(a, this.metadata);
	}
	assign(...t) {
		const a = t[0] instanceof e ? t[0] : Array.isArray(t[0]) ? new e(t[0]) : new e(t), r = [...this.fields], i = Sl(Sl(/* @__PURE__ */ new Map(), this.metadata), a.metadata), n = a.fields.filter((e) => {
			const t = r.findIndex((t) => t.name === e.name);
			return !~t || (r[t] = e.clone({ metadata: Sl(Sl(/* @__PURE__ */ new Map(), r[t].metadata), e.metadata) })) && !1;
		}), o = Cl(n, /* @__PURE__ */ new Map());
		return new e([...r, ...n], i, new Map([...this.dictionaries, ...o]));
	}
};
bl.prototype.fields = null, bl.prototype.metadata = null, bl.prototype.dictionaries = null, bl.prototype[hl] = !0, Object.defineProperty(bl, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === bl && bl.isSchema(e);
} });
var wl = class e {
	static isField(e) {
		return !0 === (null == e ? void 0 : e[vl]);
	}
	static new(...t) {
		let [a, r, i, n] = t;
		return t[0] && "object" == typeof t[0] && ({name: a} = t[0], void 0 === r && (r = t[0].type), void 0 === i && (i = t[0].nullable), void 0 === n && (n = t[0].metadata)), new e(`${a}`, r, i, n);
	}
	constructor(e, t, a = !1, r) {
		this.name = e, this.type = t, this.nullable = a, this.metadata = r || /* @__PURE__ */ new Map();
	}
	get typeId() {
		return this.type.typeId;
	}
	get [Symbol.toStringTag]() {
		return "Field";
	}
	toString() {
		return `${this.name}: ${this.type}`;
	}
	clone(...t) {
		let [a, r, i, n] = t;
		return t[0] && "object" == typeof t[0] ? {name: a = this.name, type: r = this.type, nullable: i = this.nullable, metadata: n = this.metadata} = t[0] : [a = this.name, r = this.type, i = this.nullable, n = this.metadata] = t, e.new(a, r, i, n);
	}
};
function Sl(e, t) {
	return new Map([...e || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function Cl(e, t = /* @__PURE__ */ new Map()) {
	for (let a = -1, r = e.length; ++a < r;) {
		const r = e[a].type;
		if (Cn.isDictionary(r)) if (t.has(r.id)) {
			if (t.get(r.id) !== r.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
		} else t.set(r.id, r.dictionary);
		r.children && r.children.length > 0 && Cl(r.children, t);
	}
	return t;
}
wl.prototype.type = null, wl.prototype.name = null, wl.prototype.nullable = null, wl.prototype.metadata = null, wl.prototype[vl] = !0, Object.defineProperty(wl, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === wl && wl.isField(e);
} });
var Il = class extends so {
	compareSchemas(e, t) {
		return e === t || t instanceof e.constructor && this.compareManyFields(e.fields, t.fields);
	}
	compareManyFields(e, t) {
		return e === t || Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every((e, a) => this.compareFields(e, t[a]));
	}
	compareFields(e, t) {
		return e === t || t instanceof e.constructor && e.name === t.name && e.nullable === t.nullable && this.visit(e.type, t.type);
	}
};
function kl(e, t) {
	return t instanceof e.constructor;
}
function Al(e, t) {
	return e === t || kl(e, t);
}
function xl(e, t) {
	return e === t || kl(e, t) && e.bitWidth === t.bitWidth && e.isSigned === t.isSigned;
}
function El(e, t) {
	return e === t || kl(e, t) && e.precision === t.precision;
}
function Dl(e, t) {
	return e === t || kl(e, t) && e.unit === t.unit;
}
function Tl(e, t) {
	return e === t || kl(e, t) && e.unit === t.unit && e.timezone === t.timezone;
}
function Bl(e, t) {
	return e === t || kl(e, t) && e.unit === t.unit && e.bitWidth === t.bitWidth;
}
function zl(e, t) {
	return e === t || kl(e, t) && e.children.length === t.children.length && Pl.compareManyFields(e.children, t.children);
}
function Rl(e, t) {
	return e === t || kl(e, t) && e.mode === t.mode && e.typeIds.every((e, a) => e === t.typeIds[a]) && Pl.compareManyFields(e.children, t.children);
}
function Ml(e, t) {
	return e === t || kl(e, t) && e.unit === t.unit;
}
function Ol(e, t) {
	return e === t || kl(e, t) && e.unit === t.unit;
}
Il.prototype.visitNull = Al, Il.prototype.visitBool = Al, Il.prototype.visitInt = xl, Il.prototype.visitInt8 = xl, Il.prototype.visitInt16 = xl, Il.prototype.visitInt32 = xl, Il.prototype.visitInt64 = xl, Il.prototype.visitUint8 = xl, Il.prototype.visitUint16 = xl, Il.prototype.visitUint32 = xl, Il.prototype.visitUint64 = xl, Il.prototype.visitFloat = El, Il.prototype.visitFloat16 = El, Il.prototype.visitFloat32 = El, Il.prototype.visitFloat64 = El, Il.prototype.visitUtf8 = Al, Il.prototype.visitLargeUtf8 = Al, Il.prototype.visitUtf8View = Al, Il.prototype.visitBinary = Al, Il.prototype.visitLargeBinary = Al, Il.prototype.visitBinaryView = Al, Il.prototype.visitFixedSizeBinary = function(e, t) {
	return e === t || kl(e, t) && e.byteWidth === t.byteWidth;
}, Il.prototype.visitDate = Dl, Il.prototype.visitDateDay = Dl, Il.prototype.visitDateMillisecond = Dl, Il.prototype.visitTimestamp = Tl, Il.prototype.visitTimestampSecond = Tl, Il.prototype.visitTimestampMillisecond = Tl, Il.prototype.visitTimestampMicrosecond = Tl, Il.prototype.visitTimestampNanosecond = Tl, Il.prototype.visitTime = Bl, Il.prototype.visitTimeSecond = Bl, Il.prototype.visitTimeMillisecond = Bl, Il.prototype.visitTimeMicrosecond = Bl, Il.prototype.visitTimeNanosecond = Bl, Il.prototype.visitDecimal = Al, Il.prototype.visitList = zl, Il.prototype.visitLargeList = zl, Il.prototype.visitStruct = function(e, t) {
	return e === t || kl(e, t) && e.children.length === t.children.length && Pl.compareManyFields(e.children, t.children);
}, Il.prototype.visitUnion = Rl, Il.prototype.visitDenseUnion = Rl, Il.prototype.visitSparseUnion = Rl, Il.prototype.visitDictionary = function(e, t) {
	return e === t || kl(e, t) && e.id === t.id && e.isOrdered === t.isOrdered && Pl.visit(e.indices, t.indices) && Pl.visit(e.dictionary, t.dictionary);
}, Il.prototype.visitInterval = Ml, Il.prototype.visitIntervalDayTime = Ml, Il.prototype.visitIntervalYearMonth = Ml, Il.prototype.visitIntervalMonthDayNano = Ml, Il.prototype.visitDuration = Ol, Il.prototype.visitDurationSecond = Ol, Il.prototype.visitDurationMillisecond = Ol, Il.prototype.visitDurationMicrosecond = Ol, Il.prototype.visitDurationNanosecond = Ol, Il.prototype.visitFixedSizeList = function(e, t) {
	return e === t || kl(e, t) && e.listSize === t.listSize && e.children.length === t.children.length && Pl.compareManyFields(e.children, t.children);
}, Il.prototype.visitMap = function(e, t) {
	return e === t || kl(e, t) && e.keysSorted === t.keysSorted && e.children.length === t.children.length && Pl.compareManyFields(e.children, t.children);
};
const Pl = new Il();
function Nl(e, t) {
	return Pl.compareSchemas(e, t);
}
function Kl(e, t) {
	return function(e, t) {
		const a = [...e.fields], r = [], i = { numBatches: t.reduce((e, t) => Math.max(e, t.length), 0) };
		let n = 0, o = 0, s = -1;
		const l = t.length;
		let c, u = [];
		for (; i.numBatches-- > 0;) {
			for (o = Number.POSITIVE_INFINITY, s = -1; ++s < l;) u[s] = c = t[s].shift(), o = Math.min(o, c ? c.length : o);
			Number.isFinite(o) && (u = Ll(a, o, u, t, i), o > 0 && (r[n++] = Ws({
				type: new Zn(a),
				length: o,
				nullCount: 0,
				children: u.slice()
			})));
		}
		return [e = e.assign(a), r.map((t) => new ql(e, t))];
	}(e, t.map((e) => e.data.concat()));
}
function Ll(e, t, a, r, i) {
	var n;
	const o = (t + 63 & -64) >> 3;
	for (let s = -1, l = r.length; ++s < l;) {
		const l = a[s], c = null == l ? void 0 : l.length;
		if (c >= t) c === t ? a[s] = l : (a[s] = l.slice(0, t), i.numBatches = Math.max(i.numBatches, r[s].unshift(l.slice(t, c - t))));
		else {
			const r = e[s];
			e[s] = r.clone({ nullable: !0 }), a[s] = null !== (n = null == l ? void 0 : l._changeLengthAndBackfillNullBitmap(t)) && void 0 !== n ? n : Ws({
				type: r.type,
				length: t,
				nullCount: t,
				nullBitmap: new Uint8Array(o)
			});
		}
	}
	return a;
}
var jl;
const Ul = Symbol.for("apache-arrow/Table");
var Gl, Fl = class e {
	static isTable(e) {
		return !0 === (null == e ? void 0 : e[Ul]);
	}
	constructor(...t) {
		var a, r;
		if (0 === t.length) return this.batches = [], this.schema = new bl([]), this._offsets = [0], this;
		let i, n;
		t[0] instanceof bl && (i = t.shift()), t.at(-1) instanceof Uint32Array && (n = t.pop());
		const o = (t) => {
			if (t) {
				if (t instanceof ql) return [t];
				if (t instanceof e) return t.batches;
				if (t instanceof qs) {
					if (t.type instanceof Zn) return [new ql(new bl(t.type.children), t)];
				} else {
					if (Array.isArray(t)) return t.flatMap((e) => o(e));
					if ("function" == typeof t[Symbol.iterator]) return [...t].flatMap((e) => o(e));
					if ("object" == typeof t) {
						const e = Object.keys(t), a = e.map((e) => new yl([t[e]])), [, n] = Kl(null != i ? i : new bl(e.map((e, t) => new wl(String(e), a[t].type, a[t].nullable))), a);
						return 0 === n.length ? [new ql(t)] : n;
					}
				}
			}
			return [];
		}, s = t.flatMap((e) => o(e));
		if (i = null !== (r = null != i ? i : null === (a = s[0]) || void 0 === a ? void 0 : a.schema) && void 0 !== r ? r : new bl([]), !(i instanceof bl)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
		for (const e of s) {
			if (!(e instanceof ql)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
			if (!Nl(i, e.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
		}
		this.schema = i, this.batches = s, this._offsets = null != n ? n : Xs(this.data);
	}
	get data() {
		return this.batches.map(({ data: e }) => e);
	}
	get numCols() {
		return this.schema.fields.length;
	}
	get numRows() {
		return this.data.reduce((e, t) => e + t.length, 0);
	}
	get nullCount() {
		return -1 === this._nullCount && (this._nullCount = Ys(this.data)), this._nullCount;
	}
	isValid(e) {
		return !1;
	}
	get(e) {
		return null;
	}
	at(e) {
		return this.get(Rs(e, this.numRows));
	}
	set(e, t) {}
	indexOf(e, t) {
		return -1;
	}
	[Symbol.iterator]() {
		return this.batches.length > 0 ? ul.visit(new yl(this.data)) : new Array(0)[Symbol.iterator]();
	}
	toArray() {
		return [...this];
	}
	toString() {
		return `[\n  ${this.toArray().join(",\n  ")}\n]`;
	}
	concat(...t) {
		const a = this.schema, r = this.data.concat(t.flatMap(({ data: e }) => e));
		return new e(a, r.map((e) => new ql(a, e)));
	}
	slice(t, a) {
		const r = this.schema;
		[t, a] = zs({ length: this.numRows }, t, a);
		const i = Js(this.data, this._offsets, t, a);
		return new e(r, i.map((e) => new ql(r, e)));
	}
	getChild(e) {
		return this.getChildAt(this.schema.fields.findIndex((t) => t.name === e));
	}
	getChildAt(e) {
		if (e > -1 && e < this.schema.fields.length) {
			const t = this.data.map((t) => t.children[e]);
			if (0 === t.length) {
				const { type: a } = this.schema.fields[e], r = Ws({
					type: a,
					length: 0,
					nullCount: 0
				});
				t.push(r._changeLengthAndBackfillNullBitmap(this.numRows));
			}
			return new yl(t);
		}
		return null;
	}
	setChild(e, t) {
		var a;
		return this.setChildAt(null === (a = this.schema.fields) || void 0 === a ? void 0 : a.findIndex((t) => t.name === e), t);
	}
	setChildAt(t, a) {
		let r = this.schema, i = [...this.batches];
		if (t > -1 && t < this.numCols) {
			a || (a = new yl([Ws({
				type: new In(),
				length: this.numRows
			})]));
			const e = r.fields.slice(), n = e[t].clone({ type: a.type }), o = this.schema.fields.map((e, t) => this.getChildAt(t));
			[e[t], o[t]] = [n, a], [r, i] = Kl(r, o);
		}
		return new e(r, i);
	}
	select(e) {
		const t = this.schema.fields.reduce((e, t, a) => e.set(t.name, a), /* @__PURE__ */ new Map());
		return this.selectAt(e.map((e) => t.get(e)).filter((e) => e > -1));
	}
	selectAt(t) {
		const a = this.schema.selectAt(t), r = this.batches.map((e) => e.selectAt(t));
		return new e(a, r);
	}
	assign(t) {
		const a = this.schema.fields, [r, i] = t.schema.fields.reduce((e, t, r) => {
			const [i, n] = e, o = a.findIndex((e) => e.name === t.name);
			return ~o ? n[o] = r : i.push(r), e;
		}, [[], []]), n = this.schema.assign(t.schema), o = [...a.map((e, t) => [t, i[t]]).map(([e, a]) => void 0 === a ? this.getChildAt(e) : t.getChildAt(a)), ...r.map((e) => t.getChildAt(e))].filter(Boolean);
		return new e(...Kl(n, o));
	}
};
jl = Symbol.toStringTag, Fl[jl] = ((e) => (e.schema = null, e.batches = [], e._offsets = new Uint32Array([0]), e._nullCount = -1, e[Symbol.isConcatSpreadable] = !0, e[Ul] = !0, e.isValid = el(Qs), e.get = el(Cs.getVisitFn(Zi.Struct)), e.set = tl(Fo.getVisitFn(Zi.Struct)), e.indexOf = al(ol.getVisitFn(Zi.Struct)), "Table"))(Fl.prototype), Object.defineProperty(Fl, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === Fl && Fl.isTable(e);
} });
const Vl = Symbol.for("apache-arrow/RecordBatch");
var ql = class e {
	static isRecordBatch(e) {
		return !0 === (null == e ? void 0 : e[Vl]);
	}
	constructor(...e) {
		switch (e.length) {
			case 3:
			case 2:
				if ([this.schema] = e, !(this.schema instanceof bl)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
				if ([, this.data = Ws({
					nullCount: 0,
					type: new Zn(this.schema.fields),
					children: this.schema.fields.map((e) => Ws({
						type: e.type,
						nullCount: 0
					}))
				}), this._metadata = /* @__PURE__ */ new Map()] = e, !(this.data instanceof qs)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
				[this.schema, this.data] = Hl(this.schema, this.data.children, this.data.length);
				break;
			case 1: {
				const [t] = e, { fields: a, children: r, length: i } = Object.keys(t).reduce((e, a, r) => (e.children[r] = t[a], e.length = Math.max(e.length, t[a].length), e.fields[r] = wl.new({
					name: a,
					type: t[a].type,
					nullable: !0
				}), e), {
					length: 0,
					fields: new Array(),
					children: new Array()
				}), n = new bl(a), o = Ws({
					type: new Zn(a),
					length: i,
					children: r,
					nullCount: 0
				});
				[this.schema, this.data] = Hl(n, o.children, i), this._metadata = /* @__PURE__ */ new Map();
				break;
			}
			default: throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
		}
	}
	get metadata() {
		return this._metadata;
	}
	get dictionaries() {
		return this._dictionaries || (this._dictionaries = Wl(this.schema.fields, this.data.children));
	}
	get numCols() {
		return this.schema.fields.length;
	}
	get numRows() {
		return this.data.length;
	}
	get nullCount() {
		return this.data.nullCount;
	}
	isValid(e) {
		return this.data.getValid(e);
	}
	get(e) {
		return Cs.visit(this.data, e);
	}
	at(e) {
		return this.get(Rs(e, this.numRows));
	}
	set(e, t) {
		return Fo.visit(this.data, e, t);
	}
	indexOf(e, t) {
		return ol.visit(this.data, e, t);
	}
	[Symbol.iterator]() {
		return ul.visit(new yl([this.data]));
	}
	toArray() {
		return [...this];
	}
	concat(...e) {
		return new Fl(this.schema, [this, ...e]);
	}
	slice(t, a) {
		const [r] = new yl([this.data]).slice(t, a).data;
		return new e(this.schema, r, this._metadata);
	}
	getChild(e) {
		var t;
		return this.getChildAt(null === (t = this.schema.fields) || void 0 === t ? void 0 : t.findIndex((t) => t.name === e));
	}
	getChildAt(e) {
		return e > -1 && e < this.schema.fields.length ? new yl([this.data.children[e]]) : null;
	}
	setChild(e, t) {
		var a;
		return this.setChildAt(null === (a = this.schema.fields) || void 0 === a ? void 0 : a.findIndex((t) => t.name === e), t);
	}
	setChildAt(t, a) {
		let r = this.schema, i = this.data;
		if (t > -1 && t < this.numCols) {
			a || (a = new yl([Ws({
				type: new In(),
				length: this.numRows
			})]));
			const e = r.fields.slice(), n = i.children.slice(), o = e[t].clone({ type: a.type });
			[e[t], n[t]] = [o, a.data[0]], r = new bl(e, new Map(this.schema.metadata)), i = Ws({
				type: new Zn(e),
				length: i.length,
				children: n
			});
		}
		return new e(r, i, this._metadata);
	}
	select(t) {
		const a = this.schema.select(t), r = new Zn(a.fields), i = [];
		for (const e of t) {
			const t = this.schema.fields.findIndex((t) => t.name === e);
			~t && (i[t] = this.data.children[t]);
		}
		return new e(a, Ws({
			type: r,
			length: this.numRows,
			children: i
		}), this._metadata);
	}
	selectAt(t) {
		const a = this.schema.selectAt(t), r = t.map((e) => this.data.children[e]).filter(Boolean), i = Ws({
			type: new Zn(a.fields),
			length: this.numRows,
			children: r
		});
		return new e(a, i, this._metadata);
	}
};
function Hl(e, t, a = t.reduce((e, t) => Math.max(e, t.length), 0)) {
	var r;
	const i = [...e.fields], n = [...t], o = (a + 63 & -64) >> 3;
	for (const [s, l] of e.fields.entries()) {
		const e = t[s];
		e && e.length === a || (i[s] = l.clone({ nullable: !0 }), n[s] = null !== (r = null == e ? void 0 : e._changeLengthAndBackfillNullBitmap(a)) && void 0 !== r ? r : Ws({
			type: l.type,
			length: a,
			nullCount: a,
			nullBitmap: new Uint8Array(o)
		}));
	}
	return [e.assign(i), Ws({
		type: new Zn(i),
		length: a,
		children: n
	})];
}
function Wl(e, t, a = /* @__PURE__ */ new Map()) {
	var r, i;
	if ((null !== (r = null == e ? void 0 : e.length) && void 0 !== r ? r : 0) > 0 && (null == e ? void 0 : e.length) === (null == t ? void 0 : t.length)) for (let n = -1, o = e.length; ++n < o;) {
		const { type: r } = e[n], o = t[n];
		for (const e of [o, ...(null === (i = null == o ? void 0 : o.dictionary) || void 0 === i ? void 0 : i.data) || []]) Wl(r.children, null == e ? void 0 : e.children, a);
		if (Cn.isDictionary(r)) {
			const { id: e } = r;
			if (a.has(e)) {
				if (a.get(e) !== o.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
			} else null != o && o.dictionary && a.set(e, o.dictionary);
		}
	}
	return a;
}
Gl = Symbol.toStringTag, ql[Gl] = ((e) => (e._nullCount = -1, e[Symbol.isConcatSpreadable] = !0, e[Vl] = !0, "RecordBatch"))(ql.prototype), Object.defineProperty(ql, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === ql && ql.isRecordBatch(e);
} });
const $l = {
	TIMESTAMP_MS: "timestamp_ms",
	AXIS_X: "axis_x",
	AXIS_Y: "axis_y",
	AXIS_Z: "axis_z",
	VECTOR_MAGNITUDE: "vector_magnitude",
	TEMPERATURE: "temperature"
};
function Yl(e) {
	const t = (e) => gl(Ws({
		type: new Pn(),
		length: e.length,
		data: e
	}));
	return new Fl({
		timestamp_ms: t(e.timestamp_ms),
		axis_x: t(e.axis_x),
		axis_y: t(e.axis_y),
		axis_z: t(e.axis_z),
		vector_magnitude: t(e.vector_magnitude),
		temperature: t(e.temperature)
	});
}
function Xl(e) {
	const t = (t) => {
		const a = e.getChild(t);
		if (!a) return /* @__PURE__ */ new Float64Array();
		const r = a.toArray();
		return r instanceof Float64Array ? r : new Float64Array(r);
	};
	return {
		timestamp_ms: t($l.TIMESTAMP_MS),
		axis_x: t($l.AXIS_X),
		axis_y: t($l.AXIS_Y),
		axis_z: t($l.AXIS_Z),
		vector_magnitude: t($l.VECTOR_MAGNITUDE),
		temperature: t($l.TEMPERATURE)
	};
}
const Jl = {
	GENEACTIV: 0,
	ACTIGRAPH_RAW: 1,
	GENEACTIV_BIN: 2
}, Zl = {
	[Jl.GENEACTIV]: 100,
	[Jl.ACTIGRAPH_RAW]: 30,
	[Jl.GENEACTIV_BIN]: 86
}, Ql = 33554432;
async function ec(e, t, a, r, i, n, o, s = !1, l) {
	const c = e.size;
	let u = 0, d = 0;
	const p = s ? new Uint8Array(Math.min(Ri, c)) : null;
	for (await o.streamParseStart(r, t, n, l), s && await o.sha256Start(); u < c;) {
		if (i?.aborted) throw new DOMException("Aborted: streamParseRaw", "AbortError");
		const t = Math.min(u + Ql, c), r = new Uint8Array(await e.slice(u, t).arrayBuffer());
		p && u < p.length && p.set(r.subarray(0, p.length - u), u);
		const n = await (p ? o.streamParseFeedHashed(b(r, [r.buffer])) : o.streamParseFeed(b(r, [r.buffer])));
		d += n, u = t, a?.({
			bytesRead: u,
			totalBytes: c,
			percent: u / c * 100,
			epochsEmitted: d,
			stage: "feed"
		});
	}
	const _ = p ? {
		prefixHash: await Di(p),
		fullHash: await o.sha256Finish()
	} : void 0;
	a?.({
		bytesRead: c,
		totalBytes: c,
		percent: 100,
		epochsEmitted: d,
		stage: "finalize"
	});
	const m = await o.streamParseFinishChunk(a ? w((e, t) => {
		a({
			bytesRead: c,
			totalBytes: c,
			percent: 100,
			epochsEmitted: d,
			stage: "finalize",
			finalizeStage: e,
			finalizeFraction: t
		});
	}) : void 0);
	m.rawRetentionDegraded ? console.warn(`[local-streaming] recording exceeded the WASM retained-signal memory cap; fell back to streaming wall-clock counts (no byte-exact counts / 5 s GGIR series). size=${String(c)} bytes, sampleFrequency=${String(m.sampleFrequency)} Hz`) : m.canonicalPassDegraded && console.warn(`[local-streaming] canonical whole-signal pass replaced by a degraded tier: ${m.canonicalPassReason ?? "no reason reported (stale wasm bundle?)"} size=${String(c)} bytes, sampleFrequency=${String(m.sampleFrequency)} Hz`);
	const { timestampsMs: y, axisX: f, axisY: g, axisZ: h, vectorMagnitude: v, temperature: S, ...C } = m;
	return {
		...C,
		table: Yl({
			timestamp_ms: y,
			axis_x: f,
			axis_y: g,
			axis_z: h,
			vector_magnitude: v,
			temperature: S
		}),
		..._ ? { contentHashes: _ } : {}
	};
}
async function tc(e, t) {
	const a = (await bi(e, 65536, t)).toLowerCase();
	if (a.includes("geneactiv") || a.includes("activinsights")) return a.includes("recorded data") ? Jl.GENEACTIV_BIN : Jl.GENEACTIV;
	if (a.includes("actigraph")) {
		const e = a.includes("epoch period") && !a.includes("epoch period (hh:mm:ss) 00:00:00") || /date\s*,\s*time\s*,\s*axis1[\s,]/u.test(a) || a.includes("vector magnitude");
		if ((/timestamp\s*,\s*(?:axis1\s*,\s*axis2\s*,\s*axis3|accelerometer x\s*,\s*accelerometer y\s*,\s*accelerometer z)/u.test(a) || /^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}(?:[.:]\d{1,3})?\s*,/mu.test(a) || /^\d{1,2}\/\d{1,2}\/\d{4}\s+\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?\s*,/mu.test(a)) && !e) return Jl.ACTIGRAPH_RAW;
	}
	return null;
}
const ac = 1073741824;
function rc() {
	return "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
}
const ic = 15e8, nc = "This file is too large for in-browser memory. Import a shorter recording, or use a computer with more memory.";
function oc() {
	return Math.min(ic, function() {
		const e = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
		if ("number" != typeof e || !Number.isFinite(e) || e <= 0) return ac;
		const t = Math.floor(1024 * e * 1024 * 1024 / 4);
		return Math.min(2147483648, Math.max(ac, t));
	}());
}
function sc(e) {
	return e instanceof Error && ("workerLost" in e && !0 === e.workerLost || /timed out during|worker stopped|worker failed/u.test(e.message));
}
const lc = 3e5;
async function cc(e, t, a, r, i, n = !1) {
	if (dc(a, "before buffered file streaming"), e.size > oc()) throw new Error(nc);
	const o = r ?? mi(), s = i ?? (() => yi(o)), { withWasmDeadline: l } = await Promise.resolve().then(() => Hc), c = e.size, u = n ? new Uint8Array(Math.min(Ri, c)) : null;
	n && await o.sha256Start(), await l(o, (e) => e.csvBufferClear(c), {
		ms: lc,
		label: "csvBufferClear",
		signal: a,
		cancel: s
	});
	let d = 0;
	for (; d < c;) {
		dc(a, "before buffered file chunk read");
		const r = Math.min(d + Ql, c), i = await e.slice(d, r).arrayBuffer();
		dc(a, "after buffered file chunk read");
		const n = new Uint8Array(i);
		u && d < u.length && u.set(n.subarray(0, u.length - d), d), await l(o, (e) => u ? e.csvBufferAppendHashed(b(n, [n.buffer])) : e.csvBufferAppend(b(n, [n.buffer])), {
			ms: lc,
			label: "csvBufferAppend",
			signal: a,
			cancel: s
		}), dc(a, "after buffered file chunk append"), d = r, t({
			bytesRead: d,
			totalBytes: c,
			percent: d / c * 100
		});
	}
	return u ? {
		prefixHash: await Di(u),
		fullHash: await o.sha256Finish()
	} : null;
}
function uc(e, t, a, r, i) {
	return r?.aborted ? Promise.reject(new DOMException(`Aborted: ${a}`, "AbortError")) : new Promise((n, o) => {
		let s = !1, l = null, c = null;
		const u = () => {
			null !== l && (clearTimeout(l), l = null), c && r && (r.removeEventListener("abort", c), c = null);
		}, d = (e) => {
			s || (s = !0, u(), o(function(e) {
				return e instanceof Error ? e : "string" == typeof e && e.trim() ? new Error(e) : e && "object" == typeof e && "string" == typeof e.message ? new Error(e.message) : /* @__PURE__ */ new Error(`In-browser processing failed: ${String(e)}`);
			}(e)));
		}, p = (e) => {
			if (!s) {
				s = !0, u();
				try {
					i();
				} catch {}
				o(e);
			}
		};
		if (c = () => {
			p(new DOMException(`Aborted: ${a}`, "AbortError"));
		}, r?.addEventListener("abort", c, { once: !0 }), r?.aborted) return void d(new DOMException(`Aborted: ${a}`, "AbortError"));
		let _;
		try {
			_ = e();
		} catch (m) {
			d(m);
			return;
		}
		s || (l = setTimeout(() => {
			p(/* @__PURE__ */ new Error(`In-browser processing timed out during "${a}". Try a shorter recording.`));
		}, t)), Promise.resolve(_).then((e) => {
			s || (s = !0, u(), n(e));
		}, d);
	});
}
function dc(e, t = "processing") {
	if (e?.aborted) throw new DOMException(`Aborted: ${t}`, "AbortError");
}
function pc(e) {
	const t = new AbortController();
	if (!e) return {
		controller: t,
		release: () => {}
	};
	const a = () => {
		t.abort(e.reason);
	};
	return e.aborted ? a() : e.addEventListener("abort", a, { once: !0 }), {
		controller: t,
		release: () => {
			e.removeEventListener("abort", a);
		}
	};
}
function _c(e, t, a = "processing") {
	if (t?.aborted) throw new DOMException(`Aborted: ${a}`, "AbortError");
	if (e instanceof Error && "AbortError" === e.name) throw e;
}
const mc = "undefined" != typeof process && !1;
let yc = !1;
const fc = {
	get basePath() {
		const e = "/sleep-scoring-wasm/", t = e.replace(/\/$/, ""), a = "undefined" != typeof window ? window.__CONFIG__?.basePath : void 0;
		return null == a ? t : "" !== t && a !== t ? (yc || (yc = !0, console.error(`[config] config.js basePath "${a}" does not match the build base "${e}"; using "${t}". Fix config.js or rebuild with VITE_BASE_PATH="${a}/".`)), t) : a;
	},
	get apiBaseUrl() {
		return `${this.basePath}/api/v1`;
	},
	get isDev() {
		return mc;
	},
	get isProd() {
		return !mc;
	}
}, gc = new class extends z {
	workspaces;
	uiSettings;
	constructor(e) {
		super(e), this.version(1).stores({
			workspaces: "id, lastAccessedAt",
			uiSettings: "key, updatedAt"
		}), Or(this);
	}
}("SleepScoringGlobal-wasm"), hc = "sleep-scoring:project-revision-signal:v1";
let vc = null;
const bc = /* @__PURE__ */ new Set(), wc = /* @__PURE__ */ new Set(), Sc = /* @__PURE__ */ new Set();
function Cc(e) {
	wc.add(e);
	for (const t of Object.values(x().jobs().jobs)) t.workspaceId === e && t.controller.abort();
	for (const t of bc) {
		const a = t.deref();
		a && a.name !== e || bc.delete(t), a?.name === e && a.close({ disableAutoOpen: !0 });
	}
}
function Ic(e) {
	vc?.name === e && (x().workspaces.clearActiveId(), vc && (vc.close(), vc = null), Ec());
}
function kc(e) {
	if (wc.has(e)) return !0;
	const t = x().workspaces.hasDatabase(e);
	return t && Sc.add(e), !t && Sc.has(e);
}
z.addons.push((e) => {
	bc.add(new WeakRef(e));
	const t = e.open.bind(e);
	e.open = () => wc.has(e.name) ? z.Promise.reject(new z.DatabaseClosedError()) : t().catch((t) => {
		throw wc.has(e.name) && (Cc(e.name), Ic(e.name)), t;
	});
	const a = () => {
		var t;
		if (e instanceof Zr) return z.waitFor(gc.uiSettings.get((t = e.name, `workspace-deleted:${t}`))).then((t) => {
			if (t) throw wc.add(e.name), new z.DatabaseClosedError();
		});
	};
	e.on("populate", a), e.on("ready", a, !0), e.on("versionchange", (t) => {
		if (null === t.newVersion && e instanceof Zr) return Cc(e.name), Ic(e.name), !1;
	}), wc.has(e.name) && e.close({ disableAutoOpen: !0 });
});
const Ac = /* @__PURE__ */ new Set();
function xc(e) {
	return Ac.add(e), () => Ac.delete(e);
}
function Ec() {
	for (const e of Ac) try {
		e();
	} catch {}
}
function Dc() {
	if (!vc) {
		const e = x().workspaces.activeId();
		if (e) return vc = new Zr(x().workspaces.workspace(e)?.dbName ?? `SleepScoringDB-${e}`), Ec(), vc;
		throw new Error("No workspace database is active. Call switchDb() first.");
	}
	return vc;
}
function Tc() {
	return null !== vc;
}
const Bc = /* @__PURE__ */ new Set(), zc = /* @__PURE__ */ new WeakMap(), Rc = /* @__PURE__ */ new Set(), Mc = /* @__PURE__ */ new WeakMap();
function Oc(e, t) {
	const a = t ? Mc.get(t) : void 0;
	a && e && Mc.get(e)?.joiners.add(a);
}
function Pc(e, t, a = /* @__PURE__ */ new Set()) {
	for (let r = e; r && !a.has(r); r = r.parent) {
		a.add(r), r.committed.add(t);
		for (const e of r.joiners) Pc(e, t, a);
	}
}
function Nc(e) {
	if (!Number.isSafeInteger(e) || e < 0) throw new Error("Local project revision is invalid");
}
function Kc(e, t) {
	for (const a of Bc) try {
		a(e, t);
	} catch {}
	(function(e) {
		try {
			if ("undefined" != typeof BroadcastChannel) {
				const t = new BroadcastChannel("sleep-scoring:project-revision:v1");
				t.postMessage(e), t.close();
			}
		} catch {}
		try {
			"undefined" != typeof localStorage && (localStorage.setItem(hc, JSON.stringify(e)), localStorage.removeItem(hc));
		} catch {}
	})(function(e) {
		return Nc(e), Object.freeze({
			type: "project-revision",
			revision: e
		});
	}(t));
}
const Lc = /* @__PURE__ */ new WeakSet();
async function jc(e, t, a, r) {
	const i = r ?? (z.currentTransaction ? zc.get(z.currentTransaction) : void 0);
	let n;
	i?.throwIfAborted();
	try {
		return n = e.transaction("rw", t.map((t) => e.table(t.name)), async (t) => {
			if (i?.throwIfAborted(), i) {
				let a = t;
				for (; a.parent;) a = a.parent;
				if (zc.get(a) !== i) {
					zc.set(a, i);
					const e = () => {
						a.abort();
					}, t = () => {
						i.removeEventListener("abort", e);
					};
					i.addEventListener("abort", e, { once: !0 }), a.on("complete", t), a.on("abort", t);
				}
				zc.set(t, i);
				const r = Mc.get(i);
				r && a.on("complete", () => {
					Pc(r, e.name);
				});
			}
			const r = await a(t);
			return i?.throwIfAborted(), r;
		}), Rc.add(n), await n;
	} catch (o) {
		throw i?.throwIfAborted(), o;
	} finally {
		n && Rc.delete(n);
	}
}
async function Uc(e, t, a, r) {
	const i = /* @__PURE__ */ new Set([e.projectMeta.name]);
	for (const d of t) i.add(d.name);
	const n = [...i].map((t) => e.table(t));
	let o = z.currentTransaction;
	for (; o?.parent;) o = o.parent;
	const s = o?.db === e ? o : null;
	if (s && Lc.has(s) && n.every((e) => s.storeNames.includes(e.name))) return jc(e, n, a, r);
	const l = jc(e, n, async (t) => {
		Lc.add(s ?? t);
		const r = t.table(e.projectMeta.name), i = ((await r.get("project-revision"))?.revision ?? 0) + 1;
		Nc(i);
		const n = await a(t);
		return await r.put({
			key: "project-revision",
			revision: i
		}), {
			value: n,
			revision: i
		};
	}, r), c = s ? new Promise((e) => {
		s.on("complete", e), s.on("abort", e);
	}) : l;
	Rc.add(c), c.then(() => Rc.delete(c), () => Rc.delete(c));
	const u = await l;
	return s ? s.idbtrans.addEventListener("complete", () => Kc(e, u.revision), { once: !0 }) : Kc(e, u.revision), u.value;
}
const Gc = {
	IMPORT: "import",
	REPROCESS: "reprocess",
	SCORED_VARIANT_WARM: "scored-variant-warm",
	VARIANT_RECOVERY: "variant-recovery",
	GGIR_RECOMPUTE: "ggir-recompute",
	GGIR_RECOVERY: "ggir-recovery",
	GGIR_CORRECTED_WARM: "ggir-corrected-warm",
	NIGHT_DIFFICULTY: "night-difficulty",
	PHYSICAL_ACTIVITY: "physical-activity",
	PLACEMENT: "placement",
	AUTO_SCORE: "auto-score",
	PLACEMENT_RECOVERY: "placement-recovery",
	BACKUP_EXPORT: "backup-export",
	BACKUP_RESTORE: "backup-restore",
	RESCORE: "rescore",
	EXPORT: "export",
	DIARY_VALIDATE: "diary-validate",
	DIARY_REPAIR: "diary-repair",
	DIARY_IMPORT: "diary-import",
	HDCZA_REFRESH: "hdcza-refresh",
	SYNC: "sync",
	WAL_TRIM: "wal-trim",
	MODEL_DOWNLOAD: "model-download",
	NONWEAR_IMPORT: "nonwear-import",
	AUDIT_EXPORT: "audit-export"
}, Fc = {
	QUEUED: "queued",
	RUNNING: "running",
	JOINED: "joined",
	RERUN: "rerun",
	CANCELLED: "cancelled",
	COMMITTED: "committed",
	DONE: "done",
	FAILED: "failed",
	ELSEWHERE: "elsewhere"
}, Vc = {
	[Gc.IMPORT]: "user",
	[Gc.REPROCESS]: "user",
	[Gc.SCORED_VARIANT_WARM]: "automatic",
	[Gc.VARIANT_RECOVERY]: "automatic",
	[Gc.GGIR_RECOMPUTE]: "automatic",
	[Gc.GGIR_RECOVERY]: "automatic",
	[Gc.GGIR_CORRECTED_WARM]: "user",
	[Gc.NIGHT_DIFFICULTY]: "automatic",
	[Gc.PHYSICAL_ACTIVITY]: "automatic",
	[Gc.PLACEMENT]: "automatic",
	[Gc.AUTO_SCORE]: "automatic",
	[Gc.PLACEMENT_RECOVERY]: "automatic",
	[Gc.BACKUP_EXPORT]: "user",
	[Gc.BACKUP_RESTORE]: "user",
	[Gc.RESCORE]: "user",
	[Gc.EXPORT]: "user",
	[Gc.DIARY_VALIDATE]: "user",
	[Gc.DIARY_REPAIR]: "user",
	[Gc.DIARY_IMPORT]: "user",
	[Gc.HDCZA_REFRESH]: "automatic",
	[Gc.SYNC]: "automatic",
	[Gc.WAL_TRIM]: "automatic",
	[Gc.MODEL_DOWNLOAD]: "user",
	[Gc.NONWEAR_IMPORT]: "user",
	[Gc.AUDIT_EXPORT]: "user"
};
function qc(e) {
	return !e.noticeOnly;
}
var Hc = a({
	BackgroundJobBusyError: () => Wc,
	awaitBackgroundJobs: () => lu,
	backgroundWasmApi: () => nu,
	runBackgroundJob: () => su,
	wasmApiWithDeadline: () => iu,
	withBackgroundWasm: () => au,
	withWasmDeadline: () => ru,
	yieldBackgroundJob: () => $c
}), Wc = class extends Error {
	name = "BackgroundJobBusyError";
	kind;
	constructor(e) {
		super("This job is running in another tab."), this.kind = e;
	}
};
async function $c(e) {
	e?.throwIfAborted();
	const t = globalThis.scheduler;
	t?.yield ? await t.yield() : await new Promise((e) => {
		const t = new MessageChannel();
		t.port1.onmessage = () => {
			t.port1.close(), t.port2.close(), e();
		}, t.port2.postMessage(null);
	}), e?.throwIfAborted();
}
const Yc = /* @__PURE__ */ new Map(), Xc = 100, Jc = /* @__PURE__ */ new Map();
let Qc, eu = Promise.resolve();
const tu = /* @__PURE__ */ new WeakMap();
function au(e, t, { ms: a, label: r } = {
	ms: lc,
	label: "background computation"
}, i) {
	if (!e) {
		const n = mi();
		return uc(() => t(n), a, r, e, () => {
			yi(n), i?.();
		});
	}
	const n = eu, o = ei(n, e).then(async () => {
		e.throwIfAborted();
		const n = Qc ??= fi();
		let o = !1;
		const s = () => {
			o || (o = !0, Qc === n && (Qc = void 0), n.terminate());
		};
		try {
			return await uc(() => t(n.api), a, r, e, () => {
				s(), i?.();
			});
		} catch (l) {
			throw s(), l;
		}
	});
	return eu = Promise.allSettled([n, o]).then(() => {}), o;
}
function ru(e, t, { signal: a, cancel: r, ...i }) {
	const n = tu.get(e);
	return n ? au(a ?? n, async (e) => await t(e), i, r) : uc(() => t(e), i.ms, i.label, a, r);
}
function iu(e, t) {
	const a = tu.get(e), r = new Proxy(e, { get: (r, i) => {
		if ("string" == typeof i && "then" !== i) return a || "function" == typeof Reflect.get(e, i) ? (...a) => ru(e, (e) => Reflect.apply(Reflect.get(e, i), e, a), {
			...t,
			label: t.label ?? i
		}) : Reflect.get(e, i);
	} });
	return a && tu.set(r, a), r;
}
function nu(e, t) {
	if (!e) {
		const e = mi();
		return iu(e, {
			ms: lc,
			...t,
			cancel: () => {
				yi(e);
			}
		});
	}
	const a = {};
	return tu.set(a, e), iu(a, {
		ms: lc,
		...t,
		signal: e,
		cancel: () => {}
	});
}
function ou(e) {
	if ("undefined" == typeof document || "hidden" !== document.visibilityState) return;
	document.title = `${e ? "[Failed]" : "[Done]"} ${document.title.replace(/^\[(Done|Failed)\] /, "")}`;
	const t = () => {
		"hidden" !== document.visibilityState && (document.title = document.title.replace(/^\[(Done|Failed)\] /, ""), document.removeEventListener("visibilitychange", t));
	};
	document.addEventListener("visibilitychange", t);
}
function su({ kind: e, key: t, label: a, filename: r, run: i, workspaceId: n = Dc().name, rerun: o = !1, lockKey: s = t, signal: l }) {
	const c = `${n}:${t}`, u = Yc.get(c);
	if (u && !o) return Oc(u.controller.signal, l), ei(u.promise, l);
	if (l?.aborted) return Promise.reject(Qr(l));
	if (u) {
		const o = () => su({
			kind: e,
			key: t,
			label: a,
			...void 0 === r ? {} : { filename: r },
			run: i,
			workspaceId: n,
			lockKey: s,
			signal: l
		});
		if (u.pending?.signal?.aborted && delete u.pending, u.pending) return u.pending.requests.push({
			run: o,
			signal: l
		}), ei(u.pending.promise, l);
		const d = u.controller.signal.aborted ? void 0 : u.controller.signal, p = {
			requests: [{
				run: o,
				signal: l
			}],
			signal: d,
			promise: Promise.resolve()
		};
		return p.promise = ei(Promise.allSettled([u.promise]).then(() => {
			d?.throwIfAborted(), p.requests = p.requests.filter((e) => !e.signal?.aborted);
			const e = p.requests.at(-1);
			if (!e) throw Qr();
			const t = e.run();
			for (const a of p.requests) Oc(Yc.get(c)?.controller.signal, a.signal);
			return t;
		}), d), u.pending = p, ei(p.promise, l);
	}
	const d = new AbortController(), p = function(e, t) {
		const a = t ? Mc.get(t) : void 0;
		return Mc.set(e, {
			committed: /* @__PURE__ */ new Set(),
			parent: a,
			joiners: /* @__PURE__ */ new Set()
		}), () => {
			Mc.delete(e);
		};
	}(d.signal, l), _ = () => d.abort(l?.reason);
	l?.addEventListener("abort", _, { once: !0 });
	const m = x().jobs(), y = function(e) {
		return [
			Gc.WAL_TRIM,
			Gc.PLACEMENT,
			Gc.PLACEMENT_RECOVERY,
			Gc.NIGHT_DIFFICULTY,
			Gc.PHYSICAL_ACTIVITY,
			Gc.VARIANT_RECOVERY,
			Gc.GGIR_RECOVERY
		].includes(e);
	}(e), f = function(e) {
		return "automatic" === Vc[e];
	}(e), g = (e) => {
		x().jobs().jobs[c]?.controller === d && m.update(c, e);
	};
	m.update(c, {
		id: c,
		workspaceId: n,
		kind: e,
		key: t,
		label: a,
		filename: r,
		controller: d,
		status: Fc.QUEUED,
		done: 0,
		total: 0,
		visible: !f,
		message: void 0,
		detail: void 0
	}), e !== Gc.IMPORT && e !== Gc.REPROCESS || m.startLocalProcessing(c);
	const h = `${n}:${e}`, v = Jc.get(h) ?? [];
	let b, w;
	Jc.set(h, v);
	let S = -1 / 0;
	const C = () => {
		clearTimeout(b), b = void 0, w && !d.signal.aborted && (g(w), w = void 0, S = Date.now());
	}, I = async () => (d.signal.throwIfAborted(), g({ status: Fc.RUNNING }), i({
		signal: d.signal,
		progress: (e, t, a, r) => {
			if (d.signal.aborted) return;
			const i = w?.detail ?? x().jobs().jobs[c]?.detail;
			w = {
				done: e,
				total: t,
				message: a,
				...void 0 !== r ? { detail: r } : {}
			}, S === -1 / 0 || e >= t || null === r || void 0 !== r && (r?.step !== i?.step || r?.warning !== i?.warning) || "save" === r?.step || "done" === r?.step || Date.now() - S >= Xc ? C() : b ??= setTimeout(C, Xc - (Date.now() - S));
		},
		yieldNow: () => $c(d.signal)
	}));
	let k, A = !1;
	const E = new Promise((e, t) => {
		k = () => {
			A = !0, e();
		}, d.signal.addEventListener("abort", () => {
			A || t(Qr(d.signal));
		}, { once: !0 });
	}), D = {
		key: t,
		start: k,
		bypassed: !1
	}, T = E.then(async () => (d.signal.throwIfAborted(), "undefined" != typeof navigator && navigator.locks?.request ? navigator.locks.request(`${n}:${s}`, { ifAvailable: !0 }, async (t) => {
		if (!t) {
			if (y) return;
			throw g({
				status: Fc.ELSEWHERE,
				message: "running in another tab"
			}), new Wc(e);
		}
		return I();
	}) : I())).then((e) => {
		C();
		const t = x().jobs().jobs[c]?.status === Fc.FAILED;
		return g({ status: d.signal.aborted ? Fc.CANCELLED : t ? Fc.FAILED : Fc.DONE }), d.signal.aborted || f && !t || ou(t), e;
	}, (e) => {
		if (x().jobs().jobs[c]?.status !== Fc.ELSEWHERE) {
			const t = d.signal.aborted || e instanceof Error && "AbortError" === e.name;
			g({ status: t ? Fc.CANCELLED : Fc.FAILED }), t || ou(!0);
		}
		throw e;
	}).finally(() => {
		p(), l?.removeEventListener("abort", _), clearTimeout(b);
		const e = x().jobs().jobs[c];
		var t;
		y && e?.controller === d && e.status !== Fc.FAILED && m.dismiss(c), (t = x().jobs(), t.localProcessingJobId ? t.jobs[t.localProcessingJobId] : void 0)?.controller === d && m.setIsLocalProcessing(!1), Yc.get(c)?.promise === T && Yc.delete(c);
		const a = v.indexOf(D);
		if (a >= 0 && v.splice(a, 1), 0 === a) try {
			if (v.length > 1 && !v[0].bypassed && false);
		} catch {} finally {
			v[0]?.start();
		}
		0 === v.length && Jc.delete(h);
	});
	return Yc.set(c, {
		kind: e,
		promise: T,
		controller: d
	}), v.push(D), 1 === v.length && k(), T;
}
async function lu(e) {
	for (;;) {
		const t = [...Yc.values()].filter((t) => t.kind === e);
		if (0 === t.length) return;
		await Promise.allSettled(t.map((e) => e.promise.finally(() => e.pending?.promise)));
	}
}
export { qr as $, Oe as $n, Pa as $t, Jl as A, Ft as An, $ as Ar, Ka as At, Di as B, It as Bn, b as Br, ya as Bt, pc as C, aa as Cn, q as Cr, cr as Ct, uc as D, jt as Dn, J as Dr, ir as Dt, cc as E, Ut as En, Z as Er, ar as Et, zi as F, xt as Fn, z as Fr, fa as Ft, bi as G, ht as Gn, Ma as Gt, wi as H, Nt as Hn, ha as Ht, Bi as I, Dt as In, k as Ir, ga as It, mi as J, He as Jn, sa as Jt, gi as K, vt as Kn, oa as Kt, Mi as L, Bt as Ln, x as Lr, Aa as Lt, ec as M, Vt as Mn, V as Mr, wa as Mt, $l as N, kt as Nn, ae as Nr, Ra as Nt, rc as O, Kt as On, X as Or, $a as Ot, Xl as P, Tt as Pn, te as Pr, Sa as Pt, Kr as Q, Ve as Qn, Ia as Qt, Ti as R, Et as Rn, E as Rr, ka as Rt, dc as S, qt as Sn, oe as Sr, Ja as St, _c as T, ta as Tn, Q as Tr, ur as Tt, hi as U, Mt as Un, la as Ut, Ai as V, Rt as Vn, p as Vr, Ea as Vt, vi as W, Ot as Wn, La as Wt, ei as X, qe as Xn, ca as Xt, yi as Y, We as Yn, na as Yt, Nr as Z, je as Zn, Da as Zt, fc as _, Jt as _n, he as _r, yr as _t, au as a, va as an, Ke as ar, Pr as at, lc as b, Wt as bn, ie as br, Qa as bt, qc as c, Oa as cn, Ne as cr, zr as ct, Uc as d, Va as dn, pe as dr, kr as dt, Ba as en, Pe as er, Zr as et, jc as f, qa as fn, _e as fr, Ir as ft, xc as g, Zt as gn, ge as gr, Ar as gt, kc as h, Qt as hn, fe as hr, vr as ht, iu as i, da as in, Ge as ir, Wr as it, tc as j, Gt as jn, Y as jr, pa as jt, Zl as k, Lt as kn, ee as kr, Na as kt, Gc as l, za as ln, ue as lr, Tr as lt, Tc as m, Ga as mn, ye as mr, gr as mt, nu as n, ba as nn, De as nr, $r as nt, ru as o, ma as on, Se as or, Mr as ot, Dc as p, Ua as pn, me as pr, Er as pt, fi as q, gt as qn, ia as qt, su as r, Ta as rn, Fe as rr, Ur as rt, $c as s, _a as sn, ke as sr, Br as st, lu as t, xa as tn, Me as tr, Hr as tt, Fc as u, ja as un, de as ur, br as ut, nc as v, ea as vn, ve as vr, _r as vt, sc as w, $t as wn, H as wr, tr as wt, oc as x, ra as xn, ne as xr, er as xt, ic as y, Ht as yn, be as yr, rr as yt, Ei as z, bt as zn, u as zr, ua as zt };
