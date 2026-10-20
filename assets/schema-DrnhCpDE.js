import { a as e, r as t, t as n } from "./rolldown-runtime-BAJaJb8v.js";
import { c as i, i as a, n as r, o as s, s as o } from "./legacy-invalid-night-BxvRkrkV.js";
var l = e(n((e, t) => {
	var n = e, i = function() {
		var e = function(t, n) {
			return (e = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e, t) {
				e.__proto__ = t;
			} : function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			}))(t, n);
		}, t = function() {
			return (t = Object.assign || function(e) {
				for (var t, n = 1, i = arguments.length; n < i; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
				return e;
			}).apply(this, arguments);
		};
		function n(e, t, n) {
			if (n || 2 === arguments.length) for (var i, a = 0, r = t.length; a < r; a++) !i && a in t || ((i = i || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
			return e.concat(i || Array.prototype.slice.call(t));
		}
		var i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global, a = Object.keys, r = Array.isArray;
		function s(e, t) {
			return "object" == typeof t && a(t).forEach(function(n) {
				e[n] = t[n];
			}), e;
		}
		"undefined" == typeof Promise || i.Promise || (i.Promise = Promise);
		var o = Object.getPrototypeOf, l = {}.hasOwnProperty;
		function c(e, t) {
			return l.call(e, t);
		}
		function u(e, t) {
			"function" == typeof t && (t = t(o(e))), ("undefined" == typeof Reflect ? a : Reflect.ownKeys)(t).forEach(function(n) {
				p(e, n, t[n]);
			});
		}
		var d = Object.defineProperty;
		function p(e, t, n, i) {
			d(e, t, s(n && c(n, "get") && "function" == typeof n.get ? {
				get: n.get,
				set: n.set,
				configurable: !0
			} : {
				value: n,
				configurable: !0,
				writable: !0
			}, i));
		}
		function f(e) {
			return { from: function(t) {
				return e.prototype = Object.create(t.prototype), p(e.prototype, "constructor", e), { extend: u.bind(null, e.prototype) };
			} };
		}
		var m = Object.getOwnPropertyDescriptor, h = [].slice;
		function y(e, t, n) {
			return h.call(e, t, n);
		}
		function _(e, t) {
			return t(e);
		}
		function g(e) {
			if (!e) throw new Error("Assertion Failed");
		}
		function v(e) {
			i.setImmediate ? setImmediate(e) : setTimeout(e, 0);
		}
		function I(e, t) {
			if ("string" == typeof t && c(e, t)) return e[t];
			if (!t) return e;
			if ("string" != typeof t) {
				for (var n = [], i = 0, a = t.length; i < a; ++i) {
					var r = I(e, t[i]);
					n.push(r);
				}
				return n;
			}
			var s, o = t.indexOf(".");
			return -1 === o || null == (s = e[t.substr(0, o)]) ? void 0 : I(s, t.substr(o + 1));
		}
		function b(e, t, n) {
			if (e && void 0 !== t && (!("isFrozen" in Object) || !Object.isFrozen(e))) if ("string" != typeof t && "length" in t) {
				g("string" != typeof n && "length" in n);
				for (var i = 0, a = t.length; i < a; ++i) b(e, t[i], n[i]);
			} else if (-1 !== (s = t.indexOf("."))) {
				var s, o = t.substr(0, s);
				if ("" === (s = t.substr(s + 1))) void 0 === n ? r(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n;
				else {
					var l = e[o];
					if (!l || !c(e, o)) {
						if (void 0 === n) return;
						l = e[o] = {};
					}
					b(l, s, n);
				}
			} else void 0 === n ? r(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
		}
		function w(e) {
			var t, n = {};
			for (t in e) c(e, t) && (n[t] = e[t]);
			return n;
		}
		var S = [].concat;
		function x(e) {
			return S.apply([], e);
		}
		var k = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(x([
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
			return i[e];
		}), A = new Set(k.map(function(e) {
			return i[e];
		})), E = null;
		function C(e) {
			return E = /* @__PURE__ */ new WeakMap(), e = function e(t) {
				if (!t || "object" != typeof t) return t;
				var n = E.get(t);
				if (n) return n;
				if (r(t)) {
					n = [], E.set(t, n);
					for (var i = 0, a = t.length; i < a; ++i) n.push(e(t[i]));
				} else if (A.has(t.constructor)) n = t;
				else {
					var s, l = o(t);
					for (s in n = l === Object.prototype ? {} : Object.create(l), E.set(t, n), t) c(t, s) && (n[s] = e(t[s]));
				}
				return n;
			}(e), E = null, e;
		}
		var D = {}.toString;
		function M(e) {
			return D.call(e).slice(8, -1);
		}
		var T = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator", K = "symbol" == typeof T ? function(e) {
			var t;
			return null != e && (t = e[T]) && t.apply(e);
		} : function() {
			return null;
		};
		function R(e, t) {
			0 <= (t = e.indexOf(t)) && e.splice(t, 1);
		}
		var O = {};
		function P(e) {
			var t, n, i, a;
			if (1 === arguments.length) {
				if (r(e)) return e.slice();
				if (this === O && "string" == typeof e) return [e];
				if (a = K(e)) for (n = []; !(i = a.next()).done;) n.push(i.value);
				else {
					if (null == e) return [e];
					if ("number" != typeof (t = e.length)) return [e];
					for (n = new Array(t); t--;) n[t] = e[t];
				}
			} else for (t = arguments.length, n = new Array(t); t--;) n[t] = arguments[t];
			return n;
		}
		var z = "undefined" != typeof Symbol ? function(e) {
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
		]), j = {
			VersionChanged: "Database version changed by other database connection",
			DatabaseClosed: "Database has been closed",
			Abort: "Transaction aborted",
			TransactionInactive: "Transaction has already completed or failed",
			MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
		};
		function L(e, t) {
			this.name = e, this.message = t;
		}
		function q(e, t) {
			return e + ". Errors: " + Object.keys(t).map(function(e) {
				return t[e].toString();
			}).filter(function(e, t, n) {
				return n.indexOf(e) === t;
			}).join("\n");
		}
		function H(e, t, n, i) {
			this.failures = t, this.failedKeys = i, this.successCount = n, this.message = q(e, t);
		}
		function V(e, t) {
			this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
				return t[e];
			}), this.failuresByPos = t, this.message = q(e, this.failures);
		}
		f(L).from(Error).extend({ toString: function() {
			return this.name + ": " + this.message;
		} }), f(H).from(L), f(V).from(L);
		var G = N.reduce(function(e, t) {
			return e[t] = t + "Error", e;
		}, {}), F = L, U = N.reduce(function(e, t) {
			var n = t + "Error";
			function i(e, i) {
				this.name = n, e ? "string" == typeof e ? (this.message = "".concat(e).concat(i ? "\n " + i : ""), this.inner = i || null) : "object" == typeof e && (this.message = "".concat(e.name, " ").concat(e.message), this.inner = e) : (this.message = j[t] || n, this.inner = null);
			}
			return f(i).from(F), e[t] = i, e;
		}, {}), B = (U.Syntax = SyntaxError, U.Type = TypeError, U.Range = RangeError, k.reduce(function(e, t) {
			return e[t + "Error"] = U[t], e;
		}, {}));
		function W() {}
		function Y(e) {
			return e;
		}
		function $(e, t) {
			return null == e || e === Y ? t : function(n) {
				return t(e(n));
			};
		}
		function X(e, t) {
			return function() {
				e.apply(this, arguments), t.apply(this, arguments);
			};
		}
		function Z(e, t) {
			return e === W ? t : function() {
				var n = e.apply(this, arguments), i = (void 0 !== n && (arguments[0] = n), this.onsuccess), a = this.onerror, r = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return i && (this.onsuccess = this.onsuccess ? X(i, this.onsuccess) : i), a && (this.onerror = this.onerror ? X(a, this.onerror) : a), void 0 !== r ? r : n;
			};
		}
		function Q(e, t) {
			return e === W ? t : function() {
				e.apply(this, arguments);
				var n = this.onsuccess, i = this.onerror;
				this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? X(n, this.onsuccess) : n), i && (this.onerror = this.onerror ? X(i, this.onerror) : i);
			};
		}
		function J(e, t) {
			return e === W ? t : function(n) {
				var i = e.apply(this, arguments), a = (s(n, i), n = this.onsuccess, this.onerror), r = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return n && (this.onsuccess = this.onsuccess ? X(n, this.onsuccess) : n), a && (this.onerror = this.onerror ? X(a, this.onerror) : a), void 0 === i ? void 0 === r ? void 0 : r : s(i, r);
			};
		}
		function ee(e, t) {
			return e === W ? t : function() {
				return !1 !== t.apply(this, arguments) && e.apply(this, arguments);
			};
		}
		function te(e, t) {
			return e === W ? t : function() {
				var n = e.apply(this, arguments);
				if (n && "function" == typeof n.then) {
					for (var i = this, a = arguments.length, r = new Array(a); a--;) r[a] = arguments[a];
					return n.then(function() {
						return t.apply(i, r);
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
			].indexOf(t) && (e[t + "Error"] = U[t]), e;
		}, {})).ModifyError = H, k.DexieError = L, k.BulkError = V;
		var ne = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
		function ie(e) {
			ne = e;
		}
		var ae = {}, re = "undefined" == typeof Promise ? [] : (N = Promise.resolve(), "undefined" != typeof crypto && crypto.subtle ? [
			re = crypto.subtle.digest("SHA-512", new Uint8Array([0])),
			o(re),
			N
		] : [
			N,
			o(N),
			N
		]), se = (N = re[0], (se = re[1]) && se.then), oe = N && N.constructor, le = !!re[2], ce = function(e, t) {
			_e.push([e, t]), de && (queueMicrotask(Ee), de = !1);
		}, ue = !0, de = !0, pe = [], fe = [], me = Y, he = {
			id: "global",
			global: !0,
			ref: 0,
			unhandleds: [],
			onunhandled: W,
			pgp: !1,
			env: {},
			finalize: W
		}, ye = he, _e = [], ge = 0, ve = [];
		function Ie(e) {
			if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
			this._listeners = [], this._lib = !1;
			var t = this._PSD = ye;
			if ("function" != typeof e) {
				if (e !== ae) throw new TypeError("Not a function");
				this._state = arguments[1], this._value = arguments[2], !1 === this._state && Se(this, this._value);
			} else this._state = null, this._value = null, ++t.ref, function e(t, n) {
				try {
					n(function(n) {
						if (null === t._state) {
							if (n === t) throw new TypeError("A promise cannot be resolved with itself.");
							var i = t._lib && Ce();
							n && "function" == typeof n.then ? e(t, function(e, t) {
								n instanceof Ie ? n._then(e, t) : n.then(e, t);
							}) : (t._state = !0, t._value = n, xe(t)), i && De();
						}
					}, Se.bind(null, t));
				} catch (n) {
					Se(t, n);
				}
			}(this, e);
		}
		var be = {
			get: function() {
				var e = ye, t = Ne;
				function n(n, i) {
					var a = this, r = !e.global && (e !== ye || t !== Ne), s = r && !He(), o = new Ie(function(t, o) {
						ke(a, new we(We(n, e, r, s), We(i, e, r, s), t, o, e));
					});
					return this._consoleTask && (o._consoleTask = this._consoleTask), o;
				}
				return n.prototype = ae, n;
			},
			set: function(e) {
				p(this, "then", e && e.prototype === ae ? be : {
					get: function() {
						return e;
					},
					set: be.set
				});
			}
		};
		function we(e, t, n, i, a) {
			this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = i, this.psd = a;
		}
		function Se(e, t) {
			var n, i;
			fe.push(t), null === e._state && (n = e._lib && Ce(), t = me(t), e._state = !1, e._value = t, i = e, pe.some(function(e) {
				return e._value === i._value;
			}) || pe.push(i), xe(e), n) && De();
		}
		function xe(e) {
			var t = e._listeners;
			e._listeners = [];
			for (var n = 0, i = t.length; n < i; ++n) ke(e, t[n]);
			var a = e._PSD;
			--a.ref || a.finalize(), 0 === ge && (++ge, ce(function() {
				0 == --ge && Me();
			}, []));
		}
		function ke(e, t) {
			if (null === e._state) e._listeners.push(t);
			else {
				var n = e._state ? t.onFulfilled : t.onRejected;
				if (null === n) return (e._state ? t.resolve : t.reject)(e._value);
				++t.psd.ref, ++ge, ce(Ae, [
					n,
					e,
					t
				]);
			}
		}
		function Ae(e, t, n) {
			try {
				var i, a = t._value;
				!t._state && fe.length && (fe = []), i = ne && t._consoleTask ? t._consoleTask.run(function() {
					return e(a);
				}) : e(a), t._state || -1 !== fe.indexOf(a) || ((e) => {
					for (var t = pe.length; t;) if (pe[--t]._value === e._value) return pe.splice(t, 1);
				})(t), n.resolve(i);
			} catch (e) {
				n.reject(e);
			} finally {
				0 == --ge && Me(), --n.psd.ref || n.psd.finalize();
			}
		}
		function Ee() {
			Be(he, function() {
				Ce() && De();
			});
		}
		function Ce() {
			var e = ue;
			return de = ue = !1, e;
		}
		function De() {
			var e, t, n;
			do
				for (; 0 < _e.length;) for (e = _e, _e = [], n = e.length, t = 0; t < n; ++t) {
					var i = e[t];
					i[0].apply(null, i[1]);
				}
			while (0 < _e.length);
			de = ue = !0;
		}
		function Me() {
			for (var e = pe, t = (pe = [], e.forEach(function(e) {
				e._PSD.onunhandled.call(null, e._value, e);
			}), ve.slice(0)), n = t.length; n;) t[--n]();
		}
		function Te(e) {
			return new Ie(ae, !1, e);
		}
		function Ke(e, t) {
			var n = ye;
			return function() {
				var i = Ce(), a = ye;
				try {
					return Fe(n, !0), e.apply(this, arguments);
				} catch (i) {
					t && t(i);
				} finally {
					Fe(a, !1), i && De();
				}
			};
		}
		u(Ie.prototype, {
			then: be,
			_then: function(e, t) {
				ke(this, new we(null, null, e, t, ye));
			},
			catch: function(e) {
				var t, n;
				return 1 === arguments.length ? this.then(null, e) : (n = arguments[1], "function" == typeof (t = e) ? this.then(null, function(e) {
					return (e instanceof t ? n : Te)(e);
				}) : this.then(null, function(e) {
					return (e && e.name === t ? n : Te)(e);
				}));
			},
			finally: function(e) {
				return this.then(function(t) {
					return Ie.resolve(e()).then(function() {
						return t;
					});
				}, function(t) {
					return Ie.resolve(e()).then(function() {
						return Te(t);
					});
				});
			},
			timeout: function(e, t) {
				var n = this;
				return e < 1 / 0 ? new Ie(function(i, a) {
					var r = setTimeout(function() {
						return a(new U.Timeout(t));
					}, e);
					n.then(i, a).finally(clearTimeout.bind(null, r));
				}) : this;
			}
		}), "undefined" != typeof Symbol && Symbol.toStringTag && p(Ie.prototype, Symbol.toStringTag, "Dexie.Promise"), he.env = Ue(), u(Ie, {
			all: function() {
				var e = P.apply(null, arguments).map(Ve);
				return new Ie(function(t, n) {
					0 === e.length && t([]);
					var i = e.length;
					e.forEach(function(a, r) {
						return Ie.resolve(a).then(function(n) {
							e[r] = n, --i || t(e);
						}, n);
					});
				});
			},
			resolve: function(e) {
				return e instanceof Ie ? e : e && "function" == typeof e.then ? new Ie(function(t, n) {
					e.then(t, n);
				}) : new Ie(ae, !0, e);
			},
			reject: Te,
			race: function() {
				var e = P.apply(null, arguments).map(Ve);
				return new Ie(function(t, n) {
					e.map(function(e) {
						return Ie.resolve(e).then(t, n);
					});
				});
			},
			PSD: {
				get: function() {
					return ye;
				},
				set: function(e) {
					return ye = e;
				}
			},
			totalEchoes: { get: function() {
				return Ne;
			} },
			newPSD: Le,
			usePSD: Be,
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
				return new Ie(function(n, i) {
					return Le(function(t, n) {
						var i = ye;
						i.unhandleds = [], i.onunhandled = n, i.finalize = X(function() {
							var e, i = this;
							e = function() {
								0 === i.unhandleds.length ? t() : n(i.unhandleds[0]);
							}, ve.push(function t() {
								e(), ve.splice(ve.indexOf(t), 1);
							}), ++ge, ce(function() {
								0 == --ge && Me();
							}, []);
						}, i.finalize), e();
					}, t, n, i);
				});
			}
		}), oe && (oe.allSettled && p(Ie, "allSettled", function() {
			var e = P.apply(null, arguments).map(Ve);
			return new Ie(function(t) {
				0 === e.length && t([]);
				var n = e.length, i = new Array(n);
				e.forEach(function(e, a) {
					return Ie.resolve(e).then(function(e) {
						return i[a] = {
							status: "fulfilled",
							value: e
						};
					}, function(e) {
						return i[a] = {
							status: "rejected",
							reason: e
						};
					}).then(function() {
						return --n || t(i);
					});
				});
			});
		}), oe.any && "undefined" != typeof AggregateError && p(Ie, "any", function() {
			var e = P.apply(null, arguments).map(Ve);
			return new Ie(function(t, n) {
				0 === e.length && n(/* @__PURE__ */ new AggregateError([]));
				var i = e.length, a = new Array(i);
				e.forEach(function(e, r) {
					return Ie.resolve(e).then(function(e) {
						return t(e);
					}, function(e) {
						a[r] = e, --i || n(new AggregateError(a));
					});
				});
			});
		}), oe.withResolvers) && (Ie.withResolvers = oe.withResolvers);
		var Re = {
			awaits: 0,
			echoes: 0,
			id: 0
		}, Oe = 0, Pe = [], ze = 0, Ne = 0, je = 0;
		function Le(e, t, n, i) {
			var a = ye, r = Object.create(a);
			return r.parent = a, r.ref = 0, r.global = !1, r.id = ++je, he.env, r.env = le ? {
				Promise: Ie,
				PromiseProp: {
					value: Ie,
					configurable: !0,
					writable: !0
				},
				all: Ie.all,
				race: Ie.race,
				allSettled: Ie.allSettled,
				any: Ie.any,
				resolve: Ie.resolve,
				reject: Ie.reject
			} : {}, t && s(r, t), ++a.ref, r.finalize = function() {
				--this.parent.ref || this.parent.finalize();
			}, t = Be(r, e, n, i), 0 === r.ref && r.finalize(), t;
		}
		function qe() {
			return Re.id || (Re.id = ++Oe), ++Re.awaits, Re.echoes += 100, Re.id;
		}
		function He() {
			return !!Re.awaits && (0 == --Re.awaits && (Re.id = 0), Re.echoes = 100 * Re.awaits, !0);
		}
		function Ve(e) {
			return Re.echoes && e && e.constructor === oe ? (qe(), e.then(function(e) {
				return He(), e;
			}, function(e) {
				return He(), $e(e);
			})) : e;
		}
		function Ge() {
			var e = Pe[Pe.length - 1];
			Pe.pop(), Fe(e, !1);
		}
		function Fe(e, t) {
			var n, a, r = ye;
			(t ? !Re.echoes || ze++ && e === ye : !ze || --ze && e === ye) || queueMicrotask(t ? function(e) {
				++Ne, Re.echoes && 0 != --Re.echoes || (Re.echoes = Re.awaits = Re.id = 0), Pe.push(ye), Fe(e, !0);
			}.bind(null, e) : Ge), e !== ye && (ye = e, r === he && (he.env = Ue()), le) && (n = he.env.Promise, a = e.env, r.global || e.global) && (Object.defineProperty(i, "Promise", a.PromiseProp), n.all = a.all, n.race = a.race, n.resolve = a.resolve, n.reject = a.reject, a.allSettled && (n.allSettled = a.allSettled), a.any) && (n.any = a.any);
		}
		function Ue() {
			var e = i.Promise;
			return le ? {
				Promise: e,
				PromiseProp: Object.getOwnPropertyDescriptor(i, "Promise"),
				all: e.all,
				race: e.race,
				allSettled: e.allSettled,
				any: e.any,
				resolve: e.resolve,
				reject: e.reject
			} : {};
		}
		function Be(e, t, n, i, a) {
			var r = ye;
			try {
				return Fe(e, !0), t(n, i, a);
			} finally {
				Fe(r, !1);
			}
		}
		function We(e, t, n, i) {
			return "function" != typeof e ? e : function() {
				var a = ye;
				n && qe(), Fe(t, !0);
				try {
					return e.apply(this, arguments);
				} finally {
					Fe(a, !1), i && queueMicrotask(He);
				}
			};
		}
		function Ye(e) {
			Promise === oe && 0 === Re.echoes ? 0 === ze ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
		}
		-1 === ("" + se).indexOf("[native code]") && (qe = He = W);
		var $e = Ie.reject, Xe = String.fromCharCode(65535), Ze = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Qe = "String expected.", Je = "__dbnames", et = "readonly", tt = "readwrite";
		function nt(e, t) {
			return e ? t ? function() {
				return e.apply(this, arguments) && t.apply(this, arguments);
			} : e : t;
		}
		var it = {
			type: 3,
			lower: -1 / 0,
			lowerOpen: !1,
			upper: [[]],
			upperOpen: !1
		};
		function at(e) {
			return "string" != typeof e || /\./.test(e) ? function(e) {
				return e;
			} : function(t) {
				return void 0 === t[e] && e in t && delete (t = C(t))[e], t;
			};
		}
		function rt() {
			throw U.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
		}
		function st(e, t) {
			try {
				var n = ot(e), i = ot(t);
				if (n !== i) return "Array" === n ? 1 : "Array" === i ? -1 : "binary" === n ? 1 : "binary" === i ? -1 : "string" === n ? 1 : "string" === i ? -1 : "Date" === n ? 1 : "Date" !== i ? NaN : -1;
				switch (n) {
					case "number":
					case "Date":
					case "string": return t < e ? 1 : e < t ? -1 : 0;
					case "binary":
						for (var a = lt(e), r = lt(t), s = a.length, o = r.length, l = s < o ? s : o, c = 0; c < l; ++c) if (a[c] !== r[c]) return a[c] < r[c] ? -1 : 1;
						return s === o ? 0 : s < o ? -1 : 1;
					case "Array":
						for (var u = e, d = t, p = u.length, f = d.length, m = p < f ? p : f, h = 0; h < m; ++h) {
							var y = st(u[h], d[h]);
							if (0 !== y) return y;
						}
						return p === f ? 0 : p < f ? -1 : 1;
				}
			} catch (e) {}
			return NaN;
		}
		function ot(e) {
			var t = typeof e;
			return "object" != t || !ArrayBuffer.isView(e) && "ArrayBuffer" !== (t = M(e)) ? t : "binary";
		}
		function lt(e) {
			return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
		}
		function ct(e, t, n) {
			var i = e.schema.yProps;
			return i ? (t && 0 < n.numFailures && (t = t.filter(function(e, t) {
				return !n.failures[t];
			})), Promise.all(i.map(function(n) {
				return n = n.updatesTable, t ? e.db.table(n).where("k").anyOf(t).delete() : e.db.table(n).clear();
			})).then(function() {
				return n;
			})) : n;
		}
		dt.prototype.execute = function(e) {
			var t = this["@@propmod"];
			if (void 0 !== t.add) {
				var i = t.add;
				if (r(i)) return n(n([], r(e) ? e : [], !0), i, !0).sort();
				if ("number" == typeof i) return (Number(e) || 0) + i;
				if ("bigint" == typeof i) try {
					return BigInt(e) + i;
				} catch (e) {
					return BigInt(0) + i;
				}
				throw new TypeError("Invalid term ".concat(i));
			}
			if (void 0 !== t.remove) {
				var a = t.remove;
				if (r(a)) return r(e) ? e.filter(function(e) {
					return !a.includes(e);
				}).sort() : [];
				if ("number" == typeof a) return Number(e) - a;
				if ("bigint" == typeof a) try {
					return BigInt(e) - a;
				} catch (e) {
					return BigInt(0) - a;
				}
				throw new TypeError("Invalid subtrahend ".concat(a));
			}
			return (i = null == (i = t.replacePrefix) ? void 0 : i[0]) && "string" == typeof e && e.startsWith(i) ? t.replacePrefix[1] + e.substring(i.length) : e;
		};
		var ut = dt;
		function dt(e) {
			this["@@propmod"] = e;
		}
		function pt(e, t) {
			for (var n = a(t), i = n.length, r = !1, s = 0; s < i; ++s) {
				var o = n[s], l = t[o], c = I(e, o);
				l instanceof ut ? (b(e, o, l.execute(c)), r = !0) : c !== l && (b(e, o, l), r = !0);
			}
			return r;
		}
		mt.prototype._trans = function(e, t, n) {
			var i = this._tx || ye.trans, a = this.name, r = ne && "undefined" != typeof console && console.createTask && console.createTask("Dexie: ".concat("readonly" === e ? "read" : "write", " ").concat(this.name));
			function s(e, n, i) {
				if (i.schema[a]) return t(i.idbtrans, i);
				throw new U.NotFound("Table " + a + " not part of transaction");
			}
			var o = Ce();
			try {
				var l = i && i.db._novip === this.db._novip ? i === ye.trans ? i._promise(e, s, n) : Le(function() {
					return i._promise(e, s, n);
				}, {
					trans: i,
					transless: ye.transless || ye
				}) : function t(n, i, a, r) {
					if (n.idbdb && (n._state.openComplete || ye.letThrough || n._vip)) {
						var s = n._createTransaction(i, a, n._dbSchema);
						try {
							s.create(), n._state.PR1398_maxLoop = 3;
						} catch (e) {
							return e.name === G.InvalidState && n.isOpen() && 0 < --n._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), n.close({ disableAutoOpen: !1 }), n.open().then(function() {
								return t(n, i, a, r);
							})) : $e(e);
						}
						return s._promise(i, function(e, t) {
							return Le(function() {
								return ye.trans = s, r(e, t, s);
							});
						}).then(function(e) {
							if ("readwrite" === i) try {
								s.idbtrans.commit();
							} catch (e) {}
							return "readonly" === i ? e : s._completion.then(function() {
								return e;
							});
						});
					}
					if (n._state.openComplete) return $e(new U.DatabaseClosed(n._state.dbOpenError));
					if (!n._state.isBeingOpened) {
						if (!n._state.autoOpen) return $e(new U.DatabaseClosed());
						n.open().catch(W);
					}
					return n._state.dbReadyPromise.then(function() {
						return t(n, i, a, r);
					});
				}(this.db, e, [this.name], s);
				return r && (l._consoleTask = r, l = l.catch(function(e) {
					return $e(e);
				})), l;
			} finally {
				o && De();
			}
		}, mt.prototype.get = function(e, t) {
			var n = this;
			return e && e.constructor === Object ? this.where(e).first(t) : null == e ? $e(new U.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(t) {
				return n.core.get({
					trans: t,
					key: e
				}).then(function(e) {
					return n.hook.reading.fire(e);
				});
			}).then(t);
		}, mt.prototype.where = function(e) {
			if ("string" == typeof e) return new this.db.WhereClause(this, e);
			if (r(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
			var t = a(e);
			if (1 === t.length) return this.where(t[0]).equals(e[t[0]]);
			var n = this.schema.indexes.concat(this.schema.primKey).filter(function(e) {
				if (e.compound && t.every(function(t) {
					return 0 <= e.keyPath.indexOf(t);
				})) {
					for (var n = 0; n < t.length; ++n) if (-1 === t.indexOf(e.keyPath[n])) return !1;
					return !0;
				}
				return !1;
			}).sort(function(e, t) {
				return e.keyPath.length - t.keyPath.length;
			})[0];
			if (n && this.db._maxKey !== Xe) return o = n.keyPath.slice(0, t.length), this.where(o).equals(o.map(function(t) {
				return e[t];
			}));
			!n && ne && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
			var i = this.schema.idxByName;
			function s(e, t) {
				return 0 === st(e, t);
			}
			var o = t.reduce(function(t, n) {
				var a = t[0], o = (t = t[1], i[n]), l = e[n];
				return [a || o, a || !o ? nt(t, o && o.multi ? function(e) {
					return e = I(e, n), r(e) && e.some(function(e) {
						return s(l, e);
					});
				} : function(e) {
					return s(l, I(e, n));
				}) : t];
			}, [null, null]), l = o[0];
			return o = o[1], l ? this.where(l.name).equals(e[l.keyPath]).filter(o) : n ? this.filter(o) : this.where(t).equals("");
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
			return new this.db.Collection(new this.db.WhereClause(this, r(e) ? "[".concat(e.join("+"), "]") : e));
		}, mt.prototype.reverse = function() {
			return this.toCollection().reverse();
		}, mt.prototype.mapToClass = function(t) {
			for (var n = this.db, i = this.name, a = ((this.schema.mappedClass = t).prototype instanceof rt && (t = ((t) => {
				var a = o, r = t;
				if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
				function s() {
					this.constructor = a;
				}
				function o() {
					return null !== t && t.apply(this, arguments) || this;
				}
				return e(a, r), a.prototype = null === r ? Object.create(r) : (s.prototype = r.prototype, new s()), Object.defineProperty(o.prototype, "db", {
					get: function() {
						return n;
					},
					enumerable: !1,
					configurable: !0
				}), o.prototype.table = function() {
					return i;
				}, o;
			})(t)), /* @__PURE__ */ new Set()), r = t.prototype; r; r = o(r)) Object.getOwnPropertyNames(r).forEach(function(e) {
				return a.add(e);
			});
			function s(e) {
				if (!e) return e;
				var n, i = Object.create(t.prototype);
				for (n in e) if (!a.has(n)) try {
					i[n] = e[n];
				} catch (e) {}
				return i;
			}
			return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = s, this.hook("reading", s), t;
		}, mt.prototype.defineClass = function() {
			return this.mapToClass(function(e) {
				s(this, e);
			});
		}, mt.prototype.add = function(e, t) {
			var n = this, i = this.schema.primKey, a = i.auto, r = i.keyPath, s = e;
			return r && a && (s = at(r)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "add",
					keys: null != t ? [t] : null,
					values: [s]
				});
			}).then(function(e) {
				return e.numFailures ? Ie.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (r) try {
					b(e, r, t);
				} catch (t) {}
				return t;
			});
		}, mt.prototype.upsert = function(e, t) {
			var n = this, i = this.schema.primKey.keyPath;
			return this._trans("readwrite", function(a) {
				return n.core.get({
					trans: a,
					key: e
				}).then(function(r) {
					var s = null != r ? r : {};
					return pt(s, t), i && b(s, i, e), n.core.mutate({
						trans: a,
						type: "put",
						values: [s],
						keys: [e],
						upsert: !0,
						updates: {
							keys: [e],
							changeSpecs: [t]
						}
					}).then(function(e) {
						return e.numFailures ? Ie.reject(e.failures[0]) : !!r;
					});
				});
			});
		}, mt.prototype.update = function(e, t) {
			return "object" != typeof e || r(e) ? this.where(":id").equals(e).modify(t) : void 0 === (e = I(e, this.schema.primKey.keyPath)) ? $e(new U.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t);
		}, mt.prototype.put = function(e, t) {
			var n = this, i = this.schema.primKey, a = i.auto, r = i.keyPath, s = e;
			return r && a && (s = at(r)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "put",
					values: [s],
					keys: null != t ? [t] : null
				});
			}).then(function(e) {
				return e.numFailures ? Ie.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (r) try {
					b(e, r, t);
				} catch (t) {}
				return t;
			});
		}, mt.prototype.delete = function(e) {
			var t = this;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: [e]
				}).then(function(n) {
					return ct(t, [e], n);
				}).then(function(e) {
					return e.numFailures ? Ie.reject(e.failures[0]) : void 0;
				});
			});
		}, mt.prototype.clear = function() {
			var e = this;
			return this._trans("readwrite", function(t) {
				return e.core.mutate({
					trans: t,
					type: "deleteRange",
					range: it
				}).then(function(t) {
					return ct(e, null, t);
				});
			}).then(function(e) {
				return e.numFailures ? Ie.reject(e.failures[0]) : void 0;
			});
		}, mt.prototype.bulkGet = function(e) {
			var t = this;
			return this._trans("readonly", function(n) {
				return t.core.getMany({
					keys: e,
					trans: n
				}).then(function(e) {
					return e.map(function(e) {
						return t.hook.reading.fire(e);
					});
				});
			});
		}, mt.prototype.bulkAdd = function(e, t, n) {
			var i = this, a = Array.isArray(t) ? t : void 0, r = (n = n || (a ? void 0 : t)) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n, s = (n = i.schema.primKey).auto;
				if ((n = n.keyPath) && a) throw new U.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
				if (a && a.length !== e.length) throw new U.InvalidArgument("Arguments objects and keys must have the same length");
				var o = e.length;
				return s = n && s ? e.map(at(n)) : e, i.core.mutate({
					trans: t,
					type: "add",
					keys: a,
					values: s,
					wantResults: r
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (0 === t) return r ? e.results : e.lastResult;
					throw new V("".concat(i.name, ".bulkAdd(): ").concat(t, " of ").concat(o, " operations failed"), n);
				});
			});
		}, mt.prototype.bulkPut = function(e, t, n) {
			var i = this, a = Array.isArray(t) ? t : void 0, r = (n = n || (a ? void 0 : t)) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n, s = (n = i.schema.primKey).auto;
				if ((n = n.keyPath) && a) throw new U.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
				if (a && a.length !== e.length) throw new U.InvalidArgument("Arguments objects and keys must have the same length");
				var o = e.length;
				return s = n && s ? e.map(at(n)) : e, i.core.mutate({
					trans: t,
					type: "put",
					keys: a,
					values: s,
					wantResults: r
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (0 === t) return r ? e.results : e.lastResult;
					throw new V("".concat(i.name, ".bulkPut(): ").concat(t, " of ").concat(o, " operations failed"), n);
				});
			});
		}, mt.prototype.bulkUpdate = function(e) {
			var t = this, n = this.core, i = e.map(function(e) {
				return e.key;
			}), a = e.map(function(e) {
				return e.changes;
			}), r = [];
			return this._trans("readwrite", function(s) {
				return n.getMany({
					trans: s,
					keys: i,
					cache: "clone"
				}).then(function(o) {
					var l = [], c = [], u = (e.forEach(function(e, n) {
						var i = e.key, a = e.changes, s = o[n];
						if (s) {
							for (var u = 0, d = Object.keys(a); u < d.length; u++) {
								var p = d[u], f = a[p];
								if (p === t.schema.primKey.keyPath) {
									if (0 !== st(f, i)) throw new U.Constraint("Cannot update primary key in bulkUpdate()");
								} else b(s, p, f);
							}
							r.push(n), l.push(i), c.push(s);
						}
					}), l.length);
					return n.mutate({
						trans: s,
						type: "put",
						keys: l,
						values: c,
						updates: {
							keys: i,
							changeSpecs: a
						}
					}).then(function(e) {
						var n = e.numFailures, i = e.failures;
						if (0 === n) return u;
						for (var a = 0, s = Object.keys(i); a < s.length; a++) {
							var o, l = s[a], c = r[Number(l)];
							null != c && (o = i[l], delete i[l], i[c] = o);
						}
						throw new V("".concat(t.name, ".bulkUpdate(): ").concat(n, " of ").concat(u, " operations failed"), i);
					});
				});
			});
		}, mt.prototype.bulkDelete = function(e) {
			var t = this, n = e.length;
			return this._trans("readwrite", function(n) {
				return t.core.mutate({
					trans: n,
					type: "delete",
					keys: e
				}).then(function(n) {
					return ct(t, e, n);
				});
			}).then(function(e) {
				var i = e.numFailures, a = e.failures;
				if (0 === i) return e.lastResult;
				throw new V("".concat(t.name, ".bulkDelete(): ").concat(i, " of ").concat(n, " operations failed"), a);
			});
		};
		var ft = mt;
		function mt() {}
		function ht(e) {
			function t(t, i) {
				if (i) {
					for (var a = arguments.length, r = new Array(a - 1); --a;) r[a - 1] = arguments[a];
					return n[t].subscribe.apply(null, r), e;
				}
				if ("string" == typeof t) return n[t];
			}
			var n = {};
			t.addEventType = o;
			for (var i = 1, s = arguments.length; i < s; ++i) o(arguments[i]);
			return t;
			function o(e, i, s) {
				var l, c;
				if ("object" != typeof e) return i = i || ee, c = {
					subscribers: [],
					fire: s = s || W,
					subscribe: function(e) {
						-1 === c.subscribers.indexOf(e) && (c.subscribers.push(e), c.fire = i(c.fire, e));
					},
					unsubscribe: function(e) {
						c.subscribers = c.subscribers.filter(function(t) {
							return t !== e;
						}), c.fire = c.subscribers.reduce(i, s);
					}
				}, n[e] = t[e] = c;
				a(l = e).forEach(function(e) {
					var t = l[e];
					if (r(t)) o(e, l[e][0], l[e][1]);
					else {
						if ("asap" !== t) throw new U.InvalidArgument("Invalid event config");
						var n = o(e, Y, function() {
							for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
							n.subscribers.forEach(function(e) {
								v(function() {
									e.apply(null, t);
								});
							});
						});
					}
				});
			}
		}
		function yt(e, t) {
			return f(t).from({ prototype: e }), t;
		}
		function _t(e, t) {
			return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
		}
		function gt(e, t) {
			e.filter = nt(e.filter, t);
		}
		function vt(e, t, n) {
			var i = e.replayFilter;
			e.replayFilter = i ? function() {
				return nt(i(), t());
			} : t, e.justLimit = n && !i;
		}
		function It(e, t) {
			if (e.isPrimKey) return t.primaryKey;
			var n = t.getIndexByKeyPath(e.index);
			if (n) return n;
			throw new U.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
		}
		function bt(e, t, n) {
			var i = It(e, t.schema);
			return t.openCursor({
				trans: n,
				values: !e.keysOnly,
				reverse: "prev" === e.dir,
				unique: !!e.unique,
				query: {
					index: i,
					range: e.range
				}
			});
		}
		function wt(e, t, n, i) {
			var a, r, s = e.replayFilter ? nt(e.filter, e.replayFilter()) : e.filter;
			return e.or ? (a = {}, r = function(e, n, i) {
				var r, o;
				s && !s(n, i, function(e) {
					return n.stop(e);
				}, function(e) {
					return n.fail(e);
				}) || ("[object ArrayBuffer]" == (o = "" + (r = n.primaryKey)) && (o = "" + new Uint8Array(r)), c(a, o)) || (a[o] = !0, t(e, n, i));
			}, Promise.all([e.or._iterate(r, n), St(bt(e, i, n), e.algorithm, r, !e.keysOnly && e.valueMapper)])) : St(bt(e, i, n), nt(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
		}
		function St(e, t, n, i) {
			var a = Ke(i ? function(e, t, a) {
				return n(i(e), t, a);
			} : n);
			return e.then(function(e) {
				if (e) return e.start(function() {
					var n = function() {
						return e.continue();
					};
					t && !t(e, function(e) {
						return n = e;
					}, function(t) {
						e.stop(t), n = W;
					}, function(t) {
						e.fail(t), n = W;
					}) || a(e.value, e, function(e) {
						return n = e;
					}), n();
				});
			});
		}
		kt.prototype._read = function(e, t) {
			var n = this._ctx;
			return n.error ? n.table._trans(null, $e.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
		}, kt.prototype._write = function(e) {
			var t = this._ctx;
			return t.error ? t.table._trans(null, $e.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
		}, kt.prototype._addAlgorithm = function(e) {
			var t = this._ctx;
			t.algorithm = nt(t.algorithm, e);
		}, kt.prototype._iterate = function(e, t) {
			return wt(this._ctx, e, t, this._ctx.table.core);
		}, kt.prototype.clone = function(e) {
			var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
			return e && s(n, e), t._ctx = n, t;
		}, kt.prototype.raw = function() {
			return this._ctx.valueMapper = null, this;
		}, kt.prototype.each = function(e) {
			var t = this._ctx;
			return this._read(function(n) {
				return wt(t, e, n, t.table.core);
			});
		}, kt.prototype.count = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, i = t._ctx, a = i.table.core;
				return _t(i, !0) ? a.count({
					trans: e,
					query: {
						index: It(i, a.schema),
						range: i.range
					}
				}).then(function(e) {
					return Math.min(e, i.limit);
				}) : (n = 0, wt(i, function() {
					return ++n, !1;
				}, e, a).then(function() {
					return n;
				}));
			}).then(e);
		}, kt.prototype.sortBy = function(e, t) {
			var n = e.split(".").reverse(), i = n[0], a = n.length - 1;
			function r(e, t) {
				return t ? r(e[n[t]], t - 1) : e[i];
			}
			var s = "next" === this._ctx.dir ? 1 : -1;
			function o(e, t) {
				return st(r(e, a), r(t, a)) * s;
			}
			return this.toArray(function(e) {
				return e.slice().sort(o);
			}).then(t);
		}, kt.prototype.toArray = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, i, a, r = t._ctx;
				return _t(r, !0) && 0 < r.limit ? (n = r.valueMapper, i = It(r, r.table.core.schema), r.table.core.query({
					trans: e,
					limit: r.limit,
					values: !0,
					direction: "prev" === r.dir ? "prev" : void 0,
					query: {
						index: i,
						range: r.range
					}
				}).then(function(e) {
					return e = e.result, n ? e.map(n) : e;
				})) : (a = [], wt(r, function(e) {
					return a.push(e);
				}, e, r.table.core).then(function() {
					return a;
				}));
			}, e);
		}, kt.prototype.offset = function(e) {
			var t = this._ctx;
			return e <= 0 || (t.offset += e, _t(t) ? vt(t, function() {
				var t = e;
				return function(e, n) {
					return 0 === t || (1 === t ? --t : n(function() {
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
				return function(e, n, i) {
					return --t <= 0 && n(i), 0 <= t;
				};
			}, !0), this;
		}, kt.prototype.until = function(e, t) {
			return gt(this._ctx, function(n, i, a) {
				return !e(n.value) || (i(a), t);
			}), this;
		}, kt.prototype.first = function(e) {
			return this.limit(1).toArray(function(e) {
				return e[0];
			}).then(e);
		}, kt.prototype.last = function(e) {
			return this.reverse().first(e);
		}, kt.prototype.filter = function(e) {
			var t;
			return gt(this._ctx, function(t) {
				return e(t.value);
			}), (t = this._ctx).isMatch = nt(t.isMatch, e), this;
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
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.key, n);
			});
		}, kt.prototype.eachUniqueKey = function(e) {
			return this._ctx.unique = "unique", this.eachKey(e);
		}, kt.prototype.eachPrimaryKey = function(e) {
			var t = this._ctx;
			return t.keysOnly = !t.isMatch, this.each(function(t, n) {
				e(n.primaryKey, n);
			});
		}, kt.prototype.keys = function(e) {
			var t = this._ctx, n = (t.keysOnly = !t.isMatch, []);
			return this.each(function(e, t) {
				n.push(t.key);
			}).then(function() {
				return n;
			}).then(e);
		}, kt.prototype.primaryKeys = function(e) {
			var t = this._ctx;
			if (_t(t, !0) && 0 < t.limit) return this._read(function(e) {
				var n = It(t, t.table.core.schema);
				return t.table.core.query({
					trans: e,
					values: !1,
					limit: t.limit,
					direction: "prev" === t.dir ? "prev" : void 0,
					query: {
						index: n,
						range: t.range
					}
				});
			}).then(function(e) {
				return e.result;
			}).then(e);
			t.keysOnly = !t.isMatch;
			var n = [];
			return this.each(function(e, t) {
				n.push(t.primaryKey);
			}).then(function() {
				return n;
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
			return (t = (t = this._ctx).index && t.table.schema.idxByName[t.index]) && t.multi && (e = {}, gt(this._ctx, function(t) {
				t = t.primaryKey.toString();
				var n = c(e, t);
				return e[t] = !0, !n;
			})), this;
		}, kt.prototype.modify = function(e) {
			var t = this, n = this._ctx;
			return this._write(function(i) {
				function r(e, t) {
					var n = t.failures;
					f += e - t.numFailures;
					for (var i = 0, r = a(n); i < r.length; i++) {
						var s = r[i];
						p.push(n[s]);
					}
				}
				var s, o = "function" == typeof e ? e : function(t) {
					return pt(t, e);
				}, l = n.table.core, c = (s = l.schema.primaryKey).outbound, u = s.extractKey, d = 200, p = ((s = t.db._options.modifyChunkSize) && (d = "object" == typeof s ? s[l.name] || s["*"] || 200 : s), []), f = 0, m = [], h = e === At;
				return t.clone().primaryKeys().then(function(t) {
					var a = _t(n) && n.limit === 1 / 0 && ("function" != typeof e || h) && {
						index: n.index,
						range: n.range
					};
					return function s(p) {
						var f = Math.min(d, t.length - p), m = t.slice(p, p + f);
						return (h ? Promise.resolve([]) : l.getMany({
							trans: i,
							keys: m,
							cache: "immutable"
						})).then(function(y) {
							var _ = [], g = [], v = c ? [] : null, I = h ? m : [];
							if (!h) for (var b = 0; b < f; ++b) {
								var w = y[b], S = {
									value: C(w),
									primKey: t[p + b]
								};
								!1 !== o.call(S, S.value, S) && (null == S.value ? I.push(t[p + b]) : c || 0 === st(u(w), u(S.value)) ? (g.push(S.value), c && v.push(t[p + b])) : (I.push(t[p + b]), _.push(S.value)));
							}
							return Promise.resolve(0 < _.length && l.mutate({
								trans: i,
								type: "add",
								values: _
							}).then(function(e) {
								for (var t in e.failures) I.splice(parseInt(t), 1);
								r(_.length, e);
							})).then(function() {
								return (0 < g.length || a && "object" == typeof e) && l.mutate({
									trans: i,
									type: "put",
									keys: v,
									values: g,
									criteria: a,
									changeSpec: "function" != typeof e && e,
									isAdditionalChunk: 0 < p
								}).then(function(e) {
									return r(g.length, e);
								});
							}).then(function() {
								return (0 < I.length || a && h) && l.mutate({
									trans: i,
									type: "delete",
									keys: I,
									criteria: a,
									isAdditionalChunk: 0 < p
								}).then(function(e) {
									return ct(n.table, I, e);
								}).then(function(e) {
									return r(I.length, e);
								});
							}).then(function() {
								return t.length > p + f && s(p + d);
							});
						});
					}(0).then(function() {
						if (0 < p.length) throw new H("Error modifying one or more objects", p, f, m);
						return t.length;
					});
				});
			});
		}, kt.prototype.delete = function() {
			var e = this._ctx, t = e.range;
			return !_t(e) || e.table.schema.yProps || !e.isPrimKey && 3 !== t.type ? this.modify(At) : this._write(function(n) {
				var i = e.table.core.schema.primaryKey, a = t;
				return e.table.core.count({
					trans: n,
					query: {
						index: i,
						range: a
					}
				}).then(function(t) {
					return e.table.core.mutate({
						trans: n,
						type: "deleteRange",
						range: a
					}).then(function(e) {
						var n = e.failures;
						if (e = e.numFailures) throw new H("Could not delete some values", Object.keys(n).map(function(e) {
							return n[e];
						}), t - e);
						return t - e;
					});
				});
			});
		};
		var xt = kt;
		function kt() {}
		var At = function(e, t) {
			return t.value = null;
		};
		function Et(e, t) {
			return e < t ? -1 : e === t ? 0 : 1;
		}
		function Ct(e, t) {
			return t < e ? -1 : e === t ? 0 : 1;
		}
		function Dt(e, t, n) {
			return (e = e instanceof Ot ? new e.Collection(e) : e)._ctx.error = new (n || TypeError)(t), e;
		}
		function Mt(e) {
			return new e.Collection(e, function() {
				return Rt("");
			}).limit(0);
		}
		function Tt(e, t, n, i) {
			var a, r, s, o, l, c, u, d = n.length;
			if (!n.every(function(e) {
				return "string" == typeof e;
			})) return Dt(e, Qe);
			function p(e) {
				a = "next" === e ? function(e) {
					return e.toUpperCase();
				} : function(e) {
					return e.toLowerCase();
				}, r = "next" === e ? function(e) {
					return e.toLowerCase();
				} : function(e) {
					return e.toUpperCase();
				}, s = "next" === e ? Et : Ct;
				var t = n.map(function(e) {
					return {
						lower: r(e),
						upper: a(e)
					};
				}).sort(function(e, t) {
					return s(e.lower, t.lower);
				});
				o = t.map(function(e) {
					return e.upper;
				}), l = t.map(function(e) {
					return e.lower;
				}), u = "next" === (c = e) ? "" : i;
			}
			p("next");
			var f = ((e = new e.Collection(e, function() {
				return Kt(o[0], l[d - 1] + i);
			}))._ondirectionchange = function(e) {
				p(e);
			}, 0);
			return e._addAlgorithm(function(e, n, i) {
				var a = e.key;
				if ("string" == typeof a) {
					var p = r(a);
					if (t(p, l, f)) return !0;
					for (var m = null, h = f; h < d; ++h) {
						var y = ((e, t, n, i, a, r) => {
							for (var s = Math.min(e.length, i.length), o = -1, l = 0; l < s; ++l) {
								var c = t[l];
								if (c !== i[l]) return a(e[l], n[l]) < 0 ? e.substr(0, l) + n[l] + n.substr(l + 1) : a(e[l], i[l]) < 0 ? e.substr(0, l) + i[l] + n.substr(l + 1) : 0 <= o ? e.substr(0, o) + t[o] + n.substr(o + 1) : null;
								a(e[l], c) < 0 && (o = l);
							}
							return s < i.length && "next" === r ? e + n.substr(e.length) : s < e.length && "prev" === r ? e.substr(0, n.length) : o < 0 ? null : e.substr(0, o) + i[o] + n.substr(o + 1);
						})(a, p, o[h], l[h], s, c);
						null === y && null === m ? f = h + 1 : (null === m || 0 < s(m, y)) && (m = y);
					}
					n(null !== m ? function() {
						e.continue(m + u);
					} : i);
				}
				return !1;
			}), e;
		}
		function Kt(e, t, n, i) {
			return {
				type: 2,
				lower: e,
				upper: t,
				lowerOpen: n,
				upperOpen: i
			};
		}
		function Rt(e) {
			return {
				type: 1,
				lower: e,
				upper: e
			};
		}
		Object.defineProperty(Pt.prototype, "Collection", {
			get: function() {
				return this._ctx.table.db.Collection;
			},
			enumerable: !1,
			configurable: !0
		}), Pt.prototype.between = function(e, t, n, i) {
			n = !1 !== n, i = !0 === i;
			try {
				return 0 < this._cmp(e, t) || 0 === this._cmp(e, t) && (n || i) && (!n || !i) ? Mt(this) : new this.Collection(this, function() {
					return Kt(e, t, !n, !i);
				});
			} catch (e) {
				return Dt(this, Ze);
			}
		}, Pt.prototype.equals = function(e) {
			return null == e ? Dt(this, Ze) : new this.Collection(this, function() {
				return Rt(e);
			});
		}, Pt.prototype.above = function(e) {
			return null == e ? Dt(this, Ze) : new this.Collection(this, function() {
				return Kt(e, void 0, !0);
			});
		}, Pt.prototype.aboveOrEqual = function(e) {
			return null == e ? Dt(this, Ze) : new this.Collection(this, function() {
				return Kt(e, void 0, !1);
			});
		}, Pt.prototype.below = function(e) {
			return null == e ? Dt(this, Ze) : new this.Collection(this, function() {
				return Kt(void 0, e, !1, !0);
			});
		}, Pt.prototype.belowOrEqual = function(e) {
			return null == e ? Dt(this, Ze) : new this.Collection(this, function() {
				return Kt(void 0, e);
			});
		}, Pt.prototype.startsWith = function(e) {
			return "string" != typeof e ? Dt(this, Qe) : this.between(e, e + Xe, !0, !0);
		}, Pt.prototype.startsWithIgnoreCase = function(e) {
			return "" === e ? this.startsWith(e) : Tt(this, function(e, t) {
				return 0 === e.indexOf(t[0]);
			}, [e], Xe);
		}, Pt.prototype.equalsIgnoreCase = function(e) {
			return Tt(this, function(e, t) {
				return e === t[0];
			}, [e], "");
		}, Pt.prototype.anyOfIgnoreCase = function() {
			var e = P.apply(O, arguments);
			return 0 === e.length ? Mt(this) : Tt(this, function(e, t) {
				return -1 !== t.indexOf(e);
			}, e, "");
		}, Pt.prototype.startsWithAnyOfIgnoreCase = function() {
			var e = P.apply(O, arguments);
			return 0 === e.length ? Mt(this) : Tt(this, function(e, t) {
				return t.some(function(t) {
					return 0 === e.indexOf(t);
				});
			}, e, Xe);
		}, Pt.prototype.anyOf = function() {
			var e, t, n = this, i = P.apply(O, arguments), a = this._cmp;
			try {
				i.sort(a);
			} catch (e) {
				return Dt(this, Ze);
			}
			return 0 === i.length ? Mt(this) : ((e = new this.Collection(this, function() {
				return Kt(i[0], i[i.length - 1]);
			}))._ondirectionchange = function(e) {
				a = "next" === e ? n._ascending : n._descending, i.sort(a);
			}, t = 0, e._addAlgorithm(function(e, n, r) {
				for (var s = e.key; 0 < a(s, i[t]);) if (++t === i.length) return n(r), !1;
				return 0 === a(s, i[t]) || (n(function() {
					e.continue(i[t]);
				}), !1);
			}), e);
		}, Pt.prototype.notEqual = function(e) {
			return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], {
				includeLowers: !1,
				includeUppers: !1
			});
		}, Pt.prototype.noneOf = function() {
			var e = P.apply(O, arguments);
			if (0 === e.length) return new this.Collection(this);
			try {
				e.sort(this._ascending);
			} catch (e) {
				return Dt(this, Ze);
			}
			var t = e.reduce(function(e, t) {
				return e ? e.concat([[e[e.length - 1][1], t]]) : [[-1 / 0, t]];
			}, null);
			return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
				includeLowers: !1,
				includeUppers: !1
			});
		}, Pt.prototype.inAnyRange = function(e, t) {
			var n = this, i = this._cmp, a = this._ascending, r = this._descending, s = this._min, o = this._max;
			if (0 === e.length) return Mt(this);
			if (!e.every(function(e) {
				return void 0 !== e[0] && void 0 !== e[1] && a(e[0], e[1]) <= 0;
			})) return Dt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", U.InvalidArgument);
			var l, c = !t || !1 !== t.includeLowers, u = t && !0 === t.includeUppers, d = a;
			function p(e, t) {
				return d(e[0], t[0]);
			}
			try {
				(l = e.reduce(function(e, t) {
					for (var n = 0, a = e.length; n < a; ++n) {
						var r = e[n];
						if (i(t[0], r[1]) < 0 && 0 < i(t[1], r[0])) {
							r[0] = s(r[0], t[0]), r[1] = o(r[1], t[1]);
							break;
						}
					}
					return n === a && e.push(t), e;
				}, [])).sort(p);
			} catch (e) {
				return Dt(this, Ze);
			}
			var f = 0, m = u ? function(e) {
				return 0 < a(e, l[f][1]);
			} : function(e) {
				return 0 <= a(e, l[f][1]);
			}, h = c ? function(e) {
				return 0 < r(e, l[f][0]);
			} : function(e) {
				return 0 <= r(e, l[f][0]);
			}, y = m;
			return (t = new this.Collection(this, function() {
				return Kt(l[0][0], l[l.length - 1][1], !c, !u);
			}))._ondirectionchange = function(e) {
				d = "next" === e ? (y = m, a) : (y = h, r), l.sort(p);
			}, t._addAlgorithm(function(e, t, i) {
				for (var r, s = e.key; y(s);) if (++f === l.length) return t(i), !1;
				return !m(r = s) && !h(r) || (0 === n._cmp(s, l[f][1]) || 0 === n._cmp(s, l[f][0]) || t(function() {
					d === a ? e.continue(l[f][0]) : e.continue(l[f][1]);
				}), !1);
			}), t;
		}, Pt.prototype.startsWithAnyOf = function() {
			var e = P.apply(O, arguments);
			return e.every(function(e) {
				return "string" == typeof e;
			}) ? 0 === e.length ? Mt(this) : this.inAnyRange(e.map(function(e) {
				return [e, e + Xe];
			})) : Dt(this, "startsWithAnyOf() only works with strings");
		};
		var Ot = Pt;
		function Pt() {}
		function zt(e) {
			return Ke(function(t) {
				return Nt(t), e(t.target.error), !1;
			});
		}
		function Nt(e) {
			e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
		}
		var jt = "storagemutated", Lt = "x-storagemutated-1", qt = ht(null, jt), Ht = (Vt.prototype._lock = function() {
			return g(!ye.global), ++this._reculock, 1 !== this._reculock || ye.global || (ye.lockOwnerFor = this), this;
		}, Vt.prototype._unlock = function() {
			if (g(!ye.global), 0 == --this._reculock) for (ye.global || (ye.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
				var e = this._blockedFuncs.shift();
				try {
					Be(e[1], e[0]);
				} catch (e) {}
			}
			return this;
		}, Vt.prototype._locked = function() {
			return this._reculock && ye.lockOwnerFor !== this;
		}, Vt.prototype.create = function(e) {
			var t = this;
			if (this.mode) {
				var n = this.db.idbdb, i = this.db._state.dbOpenError;
				if (g(!this.idbtrans), !e && !n) switch (i && i.name) {
					case "DatabaseClosedError": throw new U.DatabaseClosed(i);
					case "MissingAPIError": throw new U.MissingAPI(i.message, i);
					default: throw new U.OpenFailed(i);
				}
				if (!this.active) throw new U.TransactionInactive();
				g(null === this._completion._state), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Ke(function(n) {
					Nt(n), t._reject(e.error);
				}), e.onabort = Ke(function(n) {
					Nt(n), t.active && t._reject(new U.Abort(e.error)), t.active = !1, t.on("abort").fire(n);
				}), e.oncomplete = Ke(function() {
					t.active = !1, t._resolve(), "mutatedParts" in e && qt.storagemutated.fire(e.mutatedParts);
				});
			}
			return this;
		}, Vt.prototype._promise = function(e, t, n) {
			var i, a = this;
			return "readwrite" === e && "readwrite" !== this.mode ? $e(new U.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new Ie(function(i, r) {
				a._blockedFuncs.push([function() {
					a._promise(e, t, n).then(i, r);
				}, ye]);
			}) : n ? Le(function() {
				var e = new Ie(function(e, n) {
					a._lock();
					var i = t(e, n, a);
					i && i.then && i.then(e, n);
				});
				return e.finally(function() {
					return a._unlock();
				}), e._lib = !0, e;
			}) : ((i = new Ie(function(e, n) {
				var i = t(e, n, a);
				i && i.then && i.then(e, n);
			}))._lib = !0, i) : $e(new U.TransactionInactive());
		}, Vt.prototype._root = function() {
			return this.parent ? this.parent._root() : this;
		}, Vt.prototype.waitFor = function(e) {
			var t, n = this._root(), i = Ie.resolve(e), a = (n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
				return i;
			}) : (n._waitingFor = i, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function e() {
				for (++n._spinCount; n._waitingQueue.length;) n._waitingQueue.shift()();
				n._waitingFor && (t.get(-1 / 0).onsuccess = e);
			}()), n._waitingFor);
			return new Ie(function(e, t) {
				i.then(function(t) {
					return n._waitingQueue.push(Ke(e.bind(null, t)));
				}, function(e) {
					return n._waitingQueue.push(Ke(t.bind(null, e)));
				}).finally(function() {
					n._waitingFor === a && (n._waitingFor = null);
				});
			});
		}, Vt.prototype.abort = function() {
			this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new U.Abort()));
		}, Vt.prototype.table = function(e) {
			var t = this._memoizedTables || (this._memoizedTables = {});
			if (c(t, e)) return t[e];
			var n = this.schema[e];
			if (n) return (n = new this.db.Table(e, n, this)).core = this.db.core.table(e), t[e] = n;
			throw new U.NotFound("Table " + e + " not part of transaction");
		}, Vt);
		function Vt() {}
		function Gt(e, t, n, i, a, r, s, o) {
			return {
				name: e,
				keyPath: t,
				unique: n,
				multi: i,
				auto: a,
				compound: r,
				src: (n && !s ? "&" : "") + (i ? "*" : "") + (a ? "++" : "") + Ft(t),
				type: o
			};
		}
		function Ft(e) {
			return "string" == typeof e ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
		}
		function Ut(e, t, n) {
			return {
				name: e,
				primKey: t,
				indexes: n,
				mappedClass: null,
				idxByName: (i = function(e) {
					return [e.name, e];
				}, n.reduce(function(e, t, n) {
					return (t = i(t)) && (e[t[0]] = t[1]), e;
				}, {}))
			};
			var i;
		}
		var Bt = function(e) {
			try {
				return e.only([[]]), Bt = function() {
					return [[]];
				}, [[]];
			} catch (e) {
				return Bt = function() {
					return Xe;
				}, Xe;
			}
		};
		function Wt(e) {
			return null == e ? function() {} : "string" == typeof e ? 1 === (t = e).split(".").length ? function(e) {
				return e[t];
			} : function(e) {
				return I(e, t);
			} : function(t) {
				return I(t, e);
			};
			var t;
		}
		function Yt(e) {
			return [].slice.call(e);
		}
		var $t = 0;
		function Xt(e) {
			return null == e ? ":id" : "string" == typeof e ? e : "[".concat(e.join("+"), "]");
		}
		function Zt(e, n) {
			var i = n.db;
			i = function(e, n, i, a) {
				return n = function(e, t, n) {
					function i(e) {
						if (3 === e.type) return null;
						if (4 === e.type) throw new Error("Cannot convert never type to IDBKeyRange");
						var n = e.lower, i = e.upper, a = e.lowerOpen;
						return e = e.upperOpen, void 0 === n ? void 0 === i ? null : t.upperBound(i, !!e) : void 0 === i ? t.lowerBound(n, !!a) : t.bound(n, i, !!a, !!e);
					}
					a = n, c = 0 < (s = Yt((n = e).objectStoreNames)).length ? a.objectStore(s[0]) : {}, n = {
						schema: {
							name: n.name,
							tables: s.map(function(e) {
								return a.objectStore(e);
							}).map(function(e) {
								var t = e.keyPath, n = e.autoIncrement, i = r(t), a = {};
								return i = {
									name: e.name,
									primaryKey: {
										name: null,
										isPrimaryKey: !0,
										outbound: null == t,
										compound: i,
										keyPath: t,
										autoIncrement: n,
										unique: !0,
										extractKey: Wt(t)
									},
									indexes: Yt(e.indexNames).map(function(t) {
										return e.index(t);
									}).map(function(e) {
										var t = e.name, n = e.unique, i = e.multiEntry;
										return e = e.keyPath, t = {
											name: t,
											compound: r(e),
											keyPath: e,
											unique: n,
											multiEntry: i,
											extractKey: Wt(e)
										}, a[Xt(e)] = t;
									}),
									getIndexByKeyPath: function(e) {
										return a[Xt(e)];
									}
								}, a[":id"] = i.primaryKey, null != t && (a[Xt(t)] = i.primaryKey), i;
							})
						},
						hasGetAll: 0 < s.length && "getAll" in c && !("undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604),
						hasIdb3Features: "getAllRecords" in c
					};
					var a, s = n.schema, o = n.hasGetAll, l = n.hasIdb3Features, c = s.tables.map(function(e) {
						var t, n, a = e.name;
						return {
							name: a,
							schema: e,
							mutate: function(e) {
								var t = e.trans, n = e.type, r = e.keys, s = e.values, o = e.range;
								return new Promise(function(e, l) {
									e = Ke(e);
									var c = t.objectStore(a), u = null == c.keyPath, d = "put" === n || "add" === n;
									if (!d && "delete" !== n && "deleteRange" !== n) throw new Error("Invalid operation type: " + n);
									var p, f = (r || s || { length: 1 }).length;
									if (r && s && r.length !== s.length) throw new Error("Given keys array must have same length as given values array.");
									if (0 === f) return e({
										numFailures: 0,
										failures: {},
										results: [],
										lastResult: void 0
									});
									function m(e) {
										++_, Nt(e);
									}
									var h = [], y = [], _ = 0;
									if ("deleteRange" === n) {
										if (4 === o.type) return e({
											numFailures: _,
											failures: y,
											results: [],
											lastResult: void 0
										});
										3 === o.type ? h.push(p = c.clear()) : h.push(p = c.delete(i(o)));
									} else {
										var g = (u = d ? u ? [s, r] : [s, null] : [r, null])[0], v = u[1];
										if (d) for (var I = 0; I < f; ++I) h.push(p = v && void 0 !== v[I] ? c[n](g[I], v[I]) : c[n](g[I])), p.onerror = m;
										else for (I = 0; I < f; ++I) h.push(p = c[n](g[I])), p.onerror = m;
									}
									function b(t) {
										t = t.target.result, h.forEach(function(e, t) {
											return null != e.error && (y[t] = e.error);
										}), e({
											numFailures: _,
											failures: y,
											results: "delete" === n ? r : h.map(function(e) {
												return e.result;
											}),
											lastResult: t
										});
									}
									p.onerror = function(e) {
										m(e), b(e);
									}, p.onsuccess = b;
								});
							},
							getMany: function(e) {
								var t = e.trans, n = e.keys;
								return new Promise(function(e, i) {
									e = Ke(e);
									for (var r, s = t.objectStore(a), o = n.length, l = new Array(o), c = 0, u = 0, d = function(t) {
										t = t.target, l[t._pos] = t.result, ++u === c && e(l);
									}, p = zt(i), f = 0; f < o; ++f) null != n[f] && ((r = s.get(n[f]))._pos = f, r.onsuccess = d, r.onerror = p, ++c);
									0 === c && e(l);
								});
							},
							get: function(e) {
								var t = e.trans, n = e.key;
								return new Promise(function(e, i) {
									e = Ke(e);
									var r = t.objectStore(a).get(n);
									r.onsuccess = function(t) {
										return e(t.target.result);
									}, r.onerror = zt(i);
								});
							},
							query: (t = o, n = l, function(e) {
								return new Promise(function(r, s) {
									r = Ke(r);
									var o, l, c, u, d = e.trans, p = e.values, f = e.limit, m = e.query, h = null != (h = e.direction) ? h : "next", y = f === 1 / 0 ? void 0 : f, _ = m.index;
									if (m = m.range, d = d.objectStore(a), d = _.isPrimaryKey ? d : d.index(_.name), _ = i(m), 0 === f) return r({ result: [] });
									n ? (m = {
										query: _,
										count: y,
										direction: h
									}, (o = p ? d.getAll(m) : d.getAllKeys(m)).onsuccess = function(e) {
										return r({ result: e.target.result });
									}, o.onerror = zt(s)) : t && "next" === h ? ((o = p ? d.getAll(_, y) : d.getAllKeys(_, y)).onsuccess = function(e) {
										return r({ result: e.target.result });
									}, o.onerror = zt(s)) : (l = 0, c = !p && "openKeyCursor" in d ? d.openKeyCursor(_, h) : d.openCursor(_, h), u = [], c.onsuccess = function() {
										var e = c.result;
										return e && (u.push(p ? e.value : e.primaryKey), ++l !== f) ? void e.continue() : r({ result: u });
									}, c.onerror = zt(s));
								});
							}),
							openCursor: function(e) {
								var t = e.trans, n = e.values, r = e.query, s = e.reverse, o = e.unique;
								return new Promise(function(e, l) {
									e = Ke(e);
									var c = r.index, u = r.range, d = t.objectStore(a), p = (d = c.isPrimaryKey ? d : d.index(c.name), c = s ? o ? "prevunique" : "prev" : o ? "nextunique" : "next", !n && "openKeyCursor" in d ? d.openKeyCursor(i(u), c) : d.openCursor(i(u), c));
									p.onerror = zt(l), p.onsuccess = Ke(function(n) {
										var i, a, r, s, o = p.result;
										o ? (o.___id = ++$t, o.done = !1, i = o.continue.bind(o), a = (a = o.continuePrimaryKey) && a.bind(o), r = o.advance.bind(o), s = function() {
											throw new Error("Cursor not stopped");
										}, o.trans = t, o.stop = o.continue = o.continuePrimaryKey = o.advance = function() {
											throw new Error("Cursor not started");
										}, o.fail = Ke(l), o.next = function() {
											var e = this, t = 1;
											return this.start(function() {
												return t-- ? e.continue() : e.stop();
											}).then(function() {
												return e;
											});
										}, o.start = function(e) {
											function t() {
												if (p.result) try {
													e();
												} catch (e) {
													o.fail(e);
												}
												else o.done = !0, o.start = function() {
													throw new Error("Cursor behind last entry");
												}, o.stop();
											}
											var n = new Promise(function(e, t) {
												e = Ke(e), p.onerror = zt(t), o.fail = t, o.stop = function(t) {
													o.stop = o.continue = o.continuePrimaryKey = o.advance = s, e(t);
												};
											});
											return p.onsuccess = Ke(function(e) {
												p.onsuccess = t, t();
											}), o.continue = i, o.continuePrimaryKey = a, o.advance = r, t(), n;
										}, e(o)) : e(null);
									}, l);
								});
							},
							count: function(e) {
								var t = e.query, n = e.trans, r = t.index, s = t.range;
								return new Promise(function(e, t) {
									var o, l = n.objectStore(a);
									l = r.isPrimaryKey ? l : l.index(r.name), (o = (o = i(s)) ? l.count(o) : l.count()).onsuccess = Ke(function(t) {
										return e(t.target.result);
									}), o.onerror = zt(t);
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
						MAX_KEY: Bt(t),
						schema: s
					};
				}(n, i = i.IDBKeyRange, a), { dbcore: e.dbcore.reduce(function(e, n) {
					return n = n.create, t(t({}, e), n(e));
				}, n) };
			}(e._middlewares, i, e._deps, n), e.core = i.dbcore, e.tables.forEach(function(t) {
				var n = t.name;
				e.core.schema.tables.some(function(e) {
					return e.name === n;
				}) && (t.core = e.core.table(n), e[n] instanceof e.Table) && (e[n].core = t.core);
			});
		}
		function Qt(e, t, n, i) {
			n.forEach(function(n) {
				var a = i[n];
				t.forEach(function(t) {
					var i = function e(t, n) {
						return m(t, n) || (t = o(t)) && e(t, n);
					}(t, n);
					(!i || "value" in i && void 0 === i.value) && (t === e.Transaction.prototype || t instanceof e.Transaction ? p(t, n, {
						get: function() {
							return this.table(n);
						},
						set: function(e) {
							d(this, n, {
								value: e,
								writable: !0,
								configurable: !0,
								enumerable: !0
							});
						}
					}) : t[n] = new e.Table(n, a));
				});
			});
		}
		function Jt(e, t) {
			t.forEach(function(t) {
				for (var n in t) t[n] instanceof e.Table && delete t[n];
			});
		}
		function en(e, t) {
			return e._cfg.version - t._cfg.version;
		}
		function tn(e, t, n, i) {
			var r = e._dbSchema, s = (n.objectStoreNames.contains("$meta") && !r.$meta && (r.$meta = Ut("$meta", cn("")[0], []), e._storeNames.push("$meta")), e._createTransaction("readwrite", e._storeNames, r)), o = (s.create(n), s._completion.catch(i), s._reject.bind(s)), l = ye.transless || ye;
			Le(function() {
				if (ye.trans = s, ye.transless = l, 0 !== t) return Zt(e, n), c = t, ((i = s).storeNames.includes("$meta") ? i.table("$meta").get("version").then(function(e) {
					return null != e ? e : c;
				}) : Ie.resolve(c)).then(function(t) {
					var i = e, r = t, o = s, l = n, c = [], u = (t = i._versions, i._dbSchema = on(0, i.idbdb, l));
					return 0 === (t = t.filter(function(e) {
						return e._cfg.version >= r;
					})).length ? Ie.resolve() : (t.forEach(function(e) {
						c.push(function() {
							var t, n, s, c = u, d = e._cfg.dbschema, p = (ln(i, c, l), ln(i, d, l), u = i._dbSchema = d, nn(c, d)), f = (p.add.forEach(function(e) {
								an(l, e[0], e[1].primKey, e[1].indexes);
							}), p.change.forEach(function(e) {
								if (e.recreate) throw new U.Upgrade("Not yet support for changing primary key");
								var t = l.objectStore(e.name);
								e.add.forEach(function(e) {
									return sn(t, e);
								}), e.change.forEach(function(e) {
									t.deleteIndex(e.name), sn(t, e);
								}), e.del.forEach(function(e) {
									return t.deleteIndex(e);
								});
							}), e._cfg.contentUpgrade);
							if (f && e._cfg.version > r) return Zt(i, l), o._memoizedTables = {}, t = w(d), p.del.forEach(function(e) {
								t[e] = c[e];
							}), Jt(i, [i.Transaction.prototype]), Qt(i, [i.Transaction.prototype], a(t), t), o.schema = t, (n = z(f)) && qe(), d = Ie.follow(function() {
								var e;
								(s = f(o)) && n && (e = He.bind(null, null), s.then(e, e));
							}), s && "function" == typeof s.then ? Ie.resolve(s) : d.then(function() {
								return s;
							});
						}), c.push(function(t) {
							var n = e._cfg.dbschema, a = t;
							[].slice.call(a.db.objectStoreNames).forEach(function(e) {
								return null == n[e] && a.db.deleteObjectStore(e);
							}), Jt(i, [i.Transaction.prototype]), Qt(i, [i.Transaction.prototype], i._storeNames, i._dbSchema), o.schema = i._dbSchema;
						}), c.push(function(t) {
							i.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(i.idbdb.version / 10) === e._cfg.version ? (i.idbdb.deleteObjectStore("$meta"), delete i._dbSchema.$meta, i._storeNames = i._storeNames.filter(function(e) {
								return "$meta" !== e;
							})) : t.objectStore("$meta").put(e._cfg.version, "version"));
						});
					}), function e() {
						return c.length ? Ie.resolve(c.shift()(o.idbtrans)).then(e) : Ie.resolve();
					}().then(function() {
						rn(u, l);
					}));
				}).catch(o);
				var i, c;
				a(r).forEach(function(e) {
					an(n, e, r[e].primKey, r[e].indexes);
				}), Zt(e, n), Ie.follow(function() {
					return e.on.populate.fire(s);
				}).catch(o);
			});
		}
		function nn(e, t) {
			var n, i = {
				del: [],
				add: [],
				change: []
			};
			for (n in e) t[n] || i.del.push(n);
			for (n in t) {
				var a = e[n], r = t[n];
				if (a) {
					var s = {
						name: n,
						def: r,
						recreate: !1,
						del: [],
						add: [],
						change: []
					};
					if ("" + (a.primKey.keyPath || "") != "" + (r.primKey.keyPath || "") || a.primKey.auto !== r.primKey.auto) s.recreate = !0, i.change.push(s);
					else {
						var o = a.idxByName, l = r.idxByName, c = void 0;
						for (c in o) l[c] || s.del.push(c);
						for (c in l) {
							var u = o[c], d = l[c];
							u ? u.src !== d.src && s.change.push(d) : s.add.push(d);
						}
						(0 < s.del.length || 0 < s.add.length || 0 < s.change.length) && i.change.push(s);
					}
				} else i.add.push([n, r]);
			}
			return i;
		}
		function an(e, t, n, i) {
			var a = e.db.createObjectStore(t, n.keyPath ? {
				keyPath: n.keyPath,
				autoIncrement: n.auto
			} : { autoIncrement: n.auto });
			i.forEach(function(e) {
				return sn(a, e);
			});
		}
		function rn(e, t) {
			a(e).forEach(function(n) {
				t.db.objectStoreNames.contains(n) || an(t, n, e[n].primKey, e[n].indexes);
			});
		}
		function sn(e, t) {
			e.createIndex(t.name, t.keyPath, {
				unique: t.unique,
				multiEntry: t.multi
			});
		}
		function on(e, t, n) {
			var i = {};
			return y(t.objectStoreNames, 0).forEach(function(e) {
				for (var t = n.objectStore(e), a = Gt(Ft(o = t.keyPath), o || "", !0, !1, !!t.autoIncrement, o && "string" != typeof o, !0), r = [], s = 0; s < t.indexNames.length; ++s) {
					var o = (l = t.index(t.indexNames[s])).keyPath, l = Gt(l.name, o, !!l.unique, !!l.multiEntry, !1, o && "string" != typeof o, !1);
					r.push(l);
				}
				i[e] = Ut(e, a, r);
			}), i;
		}
		function ln(e, t, n) {
			for (var a = n.db.objectStoreNames, r = 0; r < a.length; ++r) {
				var s = a[r], o = n.objectStore(s);
				e._hasGetAll = "getAll" in o;
				for (var l = 0; l < o.indexNames.length; ++l) {
					var c, u = o.indexNames[l], d = "string" == typeof (d = o.index(u).keyPath) ? d : "[" + y(d).join("+") + "]";
					t[s] && (c = t[s].idxByName[d]) && (c.name = u, delete t[s].idxByName[d], t[s].idxByName[u] = c);
				}
			}
			"undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && i.WorkerGlobalScope && i instanceof i.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
		}
		function cn(e) {
			return e.split(",").map(function(e, t) {
				var n = null == (n = (i = e.split(":"))[1]) ? void 0 : n.trim(), i = (e = i[0].trim()).replace(/([&*]|\+\+)/g, ""), a = /^\[/.test(i) ? i.match(/^\[(.*)\]$/)[1].split("+") : i;
				return Gt(i, a || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), r(a), 0 === t, n);
			});
		}
		dn.prototype._createTableSchema = Ut, dn.prototype._parseIndexSyntax = cn, dn.prototype._parseStoresSpec = function(e, t) {
			var n = this;
			a(e).forEach(function(i) {
				if (null !== e[i]) {
					var a = n._parseIndexSyntax(e[i]), r = a.shift();
					if (!r) throw new U.Schema("Invalid schema for table " + i + ": " + e[i]);
					if (r.unique = !0, r.multi) throw new U.Schema("Primary key cannot be multiEntry*");
					a.forEach(function(e) {
						if (e.auto) throw new U.Schema("Only primary key can be marked as autoIncrement (++)");
						if (!e.keyPath) throw new U.Schema("Index must have a name and cannot be an empty string");
					}), r = n._createTableSchema(i, r, a), t[i] = r;
				}
			});
		}, dn.prototype.stores = function(e) {
			var t = this.db, n = (this._cfg.storesSource = this._cfg.storesSource ? s(this._cfg.storesSource, e) : e, e = t._versions, {}), i = {};
			return e.forEach(function(e) {
				s(n, e._cfg.storesSource), i = e._cfg.dbschema = {}, e._parseStoresSpec(n, i);
			}), t._dbSchema = i, Jt(t, [
				t._allTables,
				t,
				t.Transaction.prototype
			]), Qt(t, [
				t._allTables,
				t,
				t.Transaction.prototype,
				this._cfg.tables
			], a(i), i), t._storeNames = a(i), this;
		}, dn.prototype.upgrade = function(e) {
			return this._cfg.contentUpgrade = te(this._cfg.contentUpgrade || W, e), this;
		};
		var un = dn;
		function dn() {}
		var pn = (() => {
			var e, t, n;
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
				add: function(n) {
					var i = new WeakRef(n._novip);
					e.add(i), t.register(n._novip, i, i), e.size > n._options.maxConnections && (i = e.values().next().value, e.delete(i), t.unregister(i));
				},
				remove: function(n) {
					if (n) for (var i = e.values(), a = i.next(); !a.done;) {
						var r = a.value;
						if (r.deref() === n._novip) return e.delete(r), void t.unregister(r);
						a = i.next();
					}
				}
			}) : (n = [], {
				toArray: function() {
					return n;
				},
				add: function(e) {
					n.push(e._novip);
				},
				remove: function(e) {
					e && -1 !== (e = n.indexOf(e._novip)) && n.splice(e, 1);
				}
			});
		})();
		function fn(e, t) {
			var n = e._dbNamesDB;
			return n || (n = e._dbNamesDB = new Xn(Je, {
				addons: [],
				indexedDB: e,
				IDBKeyRange: t
			})).version(1).stores({ dbnames: "name" }), n.table("dbnames");
		}
		function mn(e) {
			return e && "function" == typeof e.databases;
		}
		function hn(e) {
			return Le(function() {
				return ye.letThrough = !0, e();
			});
		}
		function yn(e) {
			return !("from" in e);
		}
		var _n = function(e, t) {
			var n;
			if (!this) return n = new _n(), e && "d" in e && s(n, e), n;
			s(this, arguments.length ? {
				d: 1,
				from: e,
				to: 1 < arguments.length ? t : e
			} : { d: 0 });
		};
		function gn(e, t, n) {
			var i = st(t, n);
			if (!isNaN(i)) {
				if (0 < i) throw RangeError();
				if (yn(e)) return s(e, {
					from: t,
					to: n,
					d: 1
				});
				i = e.l;
				var a = e.r;
				if (st(n, e.from) < 0) return i ? gn(i, t, n) : e.l = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, wn(e);
				if (0 < st(t, e.to)) return a ? gn(a, t, n) : e.r = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, wn(e);
				st(t, e.from) < 0 && (e.from = t, e.l = null, e.d = a ? a.d + 1 : 1), 0 < st(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, i && !e.l && vn(e, i), a && t && vn(e, a);
			}
		}
		function vn(e, t) {
			yn(t) || function e(t, n) {
				var i = n.from, a = n.l, r = n.r;
				gn(t, i, n.to), a && e(t, a), r && e(t, r);
			}(e, t);
		}
		function In(e, t) {
			var n = bn(t), i = n.next();
			if (!i.done) for (var a = i.value, r = bn(e), s = r.next(a.from), o = s.value; !i.done && !s.done;) {
				if (st(o.from, a.to) <= 0 && 0 <= st(o.to, a.from)) return !0;
				st(a.from, o.from) < 0 ? a = (i = n.next(o.from)).value : o = (s = r.next(a.from)).value;
			}
			return !1;
		}
		function bn(e) {
			var t = yn(e) ? null : {
				s: 0,
				n: e
			};
			return { next: function(e) {
				for (var n = 0 < arguments.length; t;) switch (t.s) {
					case 0: if (t.s = 1, n) for (; t.n.l && st(e, t.n.from) < 0;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					else for (; t.n.l;) t = {
						up: t,
						n: t.n.l,
						s: 1
					};
					case 1: if (t.s = 2, !n || st(e, t.n.to) <= 0) return {
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
		function wn(e) {
			var n, i, a, r;
			(r = 1 < (r = ((null == (r = e.r) ? void 0 : r.d) || 0) - ((null == (r = e.l) ? void 0 : r.d) || 0)) ? "r" : r < -1 ? "l" : "") && (n = "r" == r ? "l" : "r", i = t({}, e), a = e[r], e.from = a.from, e.to = a.to, e[r] = a[r], i[r] = a[n], (e[n] = i).d = Sn(i)), e.d = Sn(e);
		}
		function Sn(e) {
			var t = e.r;
			return e = e.l, (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1;
		}
		function xn(e, t) {
			return a(t).forEach(function(n) {
				e[n] ? vn(e[n], t[n]) : e[n] = function e(t) {
					var n, i, a = {};
					for (n in t) c(t, n) && (i = t[n], a[n] = !i || "object" != typeof i || A.has(i.constructor) ? i : e(i));
					return a;
				}(t[n]);
			}), e;
		}
		function kn(e, t) {
			return e.all || t.all || Object.keys(e).some(function(n) {
				return t[n] && In(t[n], e[n]);
			});
		}
		u(_n.prototype, ((N = {
			add: function(e) {
				return vn(this, e), this;
			},
			addKey: function(e) {
				return gn(this, e, e), this;
			},
			addKeys: function(e) {
				var t = this;
				return e.forEach(function(e) {
					return gn(t, e, e);
				}), this;
			},
			hasKey: function(e) {
				var t = bn(this).next(e).value;
				return t && st(t.from, e) <= 0 && 0 <= st(t.to, e);
			}
		})[T] = function() {
			return bn(this);
		}, N));
		var An = {}, En = {}, Cn = !1;
		function Dn(e) {
			xn(En, e), Cn || (Cn = !0, setTimeout(function() {
				Cn = !1, Mn(En, !(En = {}));
			}, 0));
		}
		function Mn(e, t) {
			void 0 === t && (t = !1);
			var n = /* @__PURE__ */ new Set();
			if (e.all) for (var i = 0, a = Object.values(An); i < a.length; i++) Tn(o = a[i], e, n, t);
			else for (var r in e) {
				var s, o;
				(r = /^idb\:\/\/(.*)\/(.*)\//.exec(r)) && (s = r[1], r = r[2], o = An["idb://".concat(s, "/").concat(r)]) && Tn(o, e, n, t);
			}
			n.forEach(function(e) {
				return e();
			});
		}
		function Tn(e, t, n, i) {
			for (var a = [], r = 0, s = Object.entries(e.queries.query); r < s.length; r++) {
				for (var o = s[r], l = o[0], c = [], u = 0, d = o[1]; u < d.length; u++) {
					var p = d[u];
					kn(t, p.obsSet) ? p.subscribers.forEach(function(e) {
						return n.add(e);
					}) : i && c.push(p);
				}
				i && a.push([l, c]);
			}
			if (i) for (var f = 0, m = a; f < m.length; f++) {
				var h = m[f];
				l = h[0], c = h[1], e.queries.query[l] = c;
			}
		}
		function Kn(e) {
			var t = e._state, n = e._deps.indexedDB;
			if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
				return t.dbOpenError ? $e(t.dbOpenError) : e;
			});
			t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
			var i = t.openCanceller, r = Math.round(10 * e.verno), s = !1;
			function o() {
				if (t.openCanceller !== i) throw new U.DatabaseClosed("db.open() was cancelled");
			}
			var l, c = t.dbReadyResolve, u = null, d = !1;
			return Ie.race([i, ("undefined" == typeof navigator ? Ie.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e) {
				function t() {
					return indexedDB.databases().finally(e);
				}
				l = setInterval(t, 100), t();
			}).finally(function() {
				return clearInterval(l);
			}) : Promise.resolve()).then(function i() {
				return new Ie(function(l, c) {
					if (o(), !n) throw new U.MissingAPI();
					var p = e.name, f = t.autoSchema || !r ? n.open(p) : n.open(p, r);
					if (!f) throw new U.MissingAPI();
					f.onerror = zt(c), f.onblocked = Ke(e._fireOnBlocked), f.onupgradeneeded = Ke(function(i) {
						var a;
						u = f.transaction, t.autoSchema && !e._options.allowEmptyDB ? (f.onerror = Nt, u.abort(), f.result.close(), (a = n.deleteDatabase(p)).onsuccess = a.onerror = Ke(function() {
							c(new U.NoSuchDatabase("Database ".concat(p, " doesnt exist")));
						})) : (u.onerror = zt(c), a = i.oldVersion > Math.pow(2, 62) ? 0 : i.oldVersion, d = a < 1, e.idbdb = f.result, s && function(e, t) {
							rn(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
							var n = on(0, e.idbdb, t);
							ln(e, e._dbSchema, t);
							for (var i = 0, a = nn(n, e._dbSchema).change; i < a.length; i++) {
								var r = ((e) => {
									if (e.change.length || e.recreate) return console.warn("Unable to patch indexes of table ".concat(e.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
									var n = t.objectStore(e.name);
									e.add.forEach(function(e) {
										sn(n, e);
									});
								})(a[i]);
								if ("object" == typeof r) return r.value;
							}
						}(e, u), tn(e, a / 10, u, c));
					}, c), f.onsuccess = Ke(function() {
						u = null;
						var n, o, c, m, h, _, g = e.idbdb = f.result, v = y(g.objectStoreNames);
						if (0 < v.length) try {
							var I = g.transaction(1 === (h = v).length ? h[0] : h, "readonly");
							if (t.autoSchema) _ = g, m = I, (c = e).verno = _.version / 10, m = c._dbSchema = on(0, _, m), c._storeNames = y(_.objectStoreNames, 0), Qt(c, [c._allTables], a(m), m);
							else if (ln(e, e._dbSchema, I), o = I, ((o = nn(on(0, (n = e).idbdb, o), n._dbSchema)).add.length || o.change.some(function(e) {
								return e.add.length || e.change.length;
							})) && !s) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), g.close(), r = g.version + 1, s = !0, l(i());
							Zt(e, I);
						} catch (n) {}
						pn.add(e), g.onversionchange = Ke(function(n) {
							t.vcFired = !0, e.on("versionchange").fire(n);
						}), g.onclose = Ke(function() {
							e.close({ disableAutoOpen: !1 });
						}), d && (v = e._deps, h = p, mn(_ = v.indexedDB) || h === Je || fn(_, v.IDBKeyRange).put({ name: h }).catch(W)), l();
					}, c);
				}).catch(function(e) {
					switch (null == e ? void 0 : e.name) {
						case "UnknownError":
							if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), i();
							break;
						case "VersionError": if (0 < r) return r = 0, i();
					}
					return Ie.reject(e);
				});
			})]).then(function() {
				return o(), t.onReadyBeingFired = [], Ie.resolve(hn(function() {
					return e.on.ready.fire(e.vip);
				})).then(function n() {
					var i;
					if (0 < t.onReadyBeingFired.length) return i = t.onReadyBeingFired.reduce(te, W), t.onReadyBeingFired = [], Ie.resolve(hn(function() {
						return i(e.vip);
					})).then(n);
				});
			}).finally(function() {
				t.openCanceller === i && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
			}).catch(function(n) {
				t.dbOpenError = n;
				try {
					u && u.abort();
				} catch (n) {}
				return i === t.openCanceller && e._close(), $e(n);
			}).finally(function() {
				t.openComplete = !0, c();
			}).then(function() {
				var t;
				return d && (t = {}, e.tables.forEach(function(n) {
					n.schema.indexes.forEach(function(i) {
						i.name && (t["idb://".concat(e.name, "/").concat(n.name, "/").concat(i.name)] = new _n(-1 / 0, [[[]]]));
					}), t["idb://".concat(e.name, "/").concat(n.name, "/")] = t["idb://".concat(e.name, "/").concat(n.name, "/:dels")] = new _n(-1 / 0, [[[]]]);
				}), qt(jt).fire(t), Mn(t, !0)), e;
			});
		}
		function Rn(e) {
			function t(t) {
				return e.next(t);
			}
			var n = a(t), i = a(function(t) {
				return e.throw(t);
			});
			function a(e) {
				return function(t) {
					var a = (t = e(t)).value;
					return t.done ? a : a && "function" == typeof a.then ? a.then(n, i) : r(a) ? Promise.all(a).then(n, i) : n(a);
				};
			}
			return a(t)();
		}
		function On(e, t, n) {
			for (var i = r(e) ? e.slice() : [e], a = 0; a < n; ++a) i.push(t);
			return i;
		}
		var Pn = {
			stack: "dbcore",
			name: "VirtualIndexMiddleware",
			level: 1,
			create: function(e) {
				return t(t({}, e), { table: function(n) {
					var i = e.table(n), a = (n = i.schema, Object.create(null)), r = [];
					function s(e, n, i) {
						var o = Xt(e), l = a[o] = a[o] || [], c = null == e ? 0 : "string" == typeof e ? 1 : e.length, u = 0 < n;
						return o = t(t({}, i), {
							name: u ? "".concat(o, "(virtual-from:").concat(i.name, ")") : i.name,
							lowLevelIndex: i,
							isVirtual: u,
							keyTail: n,
							keyLength: c,
							extractKey: Wt(e),
							unique: !u && i.unique
						}), l.push(o), o.isPrimaryKey || r.push(o), 1 < c && s(2 === c ? e[0] : e.slice(0, c - 1), n + 1, i), l.sort(function(e, t) {
							return e.keyTail - t.keyTail;
						}), o;
					}
					var o = s(n.primaryKey.keyPath, 0, n.primaryKey);
					a[":id"] = [o];
					for (var l = 0, c = n.indexes; l < c.length; l++) {
						var u = c[l];
						s(u.keyPath, 0, u);
					}
					function d(n) {
						var i, a = n.query.index;
						return a.isVirtual ? t(t({}, n), { query: {
							index: a.lowLevelIndex,
							range: (i = n.query.range, a = a.keyTail, {
								type: 1 === i.type ? 2 : i.type,
								lower: On(i.lower, i.lowerOpen ? e.MAX_KEY : e.MIN_KEY, a),
								lowerOpen: !0,
								upper: On(i.upper, i.upperOpen ? e.MIN_KEY : e.MAX_KEY, a),
								upperOpen: !0
							})
						} }) : n;
					}
					return t(t({}, i), {
						schema: t(t({}, n), {
							primaryKey: o,
							indexes: r,
							getIndexByKeyPath: function(e) {
								return (e = a[Xt(e)]) && e[0];
							}
						}),
						count: function(e) {
							return i.count(d(e));
						},
						query: function(e) {
							return i.query(d(e));
						},
						openCursor: function(t) {
							var n = t.query.index, a = n.keyTail, r = n.keyLength;
							return n.isVirtual ? i.openCursor(d(t)).then(function(n) {
								return n && function(n) {
									return Object.create(n, {
										continue: { value: function(i) {
											null != i ? n.continue(On(i, t.reverse ? e.MAX_KEY : e.MIN_KEY, a)) : t.unique ? n.continue(n.key.slice(0, r).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, a)) : n.continue();
										} },
										continuePrimaryKey: { value: function(t, i) {
											n.continuePrimaryKey(On(t, e.MAX_KEY, a), i);
										} },
										primaryKey: { get: function() {
											return n.primaryKey;
										} },
										key: { get: function() {
											var e = n.key;
											return 1 === r ? e[0] : e.slice(0, r);
										} },
										value: { get: function() {
											return n.value;
										} }
									});
								}(n);
							}) : i.openCursor(t);
						}
					});
				} });
			}
		};
		function zn(e, t, n, i) {
			return n = n || {}, i = i || "", a(e).forEach(function(a) {
				var r, s, o;
				c(t, a) ? (r = e[a], s = t[a], "object" == typeof r && "object" == typeof s && r && s ? (o = M(r)) !== M(s) ? n[i + a] = t[a] : "Object" === o ? zn(r, s, n, i + a + ".") : r !== s && (n[i + a] = t[a]) : r !== s && (n[i + a] = t[a])) : n[i + a] = void 0;
			}), a(t).forEach(function(a) {
				c(e, a) || (n[i + a] = t[a]);
			}), n;
		}
		function Nn(e, t) {
			return "delete" === t.type ? t.keys : t.keys || t.values.map(e.extractKey);
		}
		var jn = {
			stack: "dbcore",
			name: "HooksMiddleware",
			level: 2,
			create: function(e) {
				return t(t({}, e), { table: function(i) {
					var a = e.table(i), r = a.schema.primaryKey;
					return t(t({}, a), { mutate: function(e) {
						var s = ye.trans, o = s.table(i).hook, l = o.deleting, u = o.creating, d = o.updating;
						switch (e.type) {
							case "add":
								if (u.fire === W) break;
								return s._promise("readwrite", function() {
									return p(e);
								}, !0);
							case "put":
								if (u.fire === W && d.fire === W) break;
								return s._promise("readwrite", function() {
									return p(e);
								}, !0);
							case "delete":
								if (l.fire === W) break;
								return s._promise("readwrite", function() {
									return p(e);
								}, !0);
							case "deleteRange":
								if (l.fire === W) break;
								return s._promise("readwrite", function() {
									return function e(n, i, s) {
										return a.query({
											trans: n,
											values: !1,
											query: {
												index: r,
												range: i
											},
											limit: s
										}).then(function(a) {
											var r = a.result;
											return p({
												type: "delete",
												keys: r,
												trans: n
											}).then(function(a) {
												return 0 < a.numFailures ? Promise.reject(a.failures[0]) : r.length < s ? {
													failures: [],
													numFailures: 0,
													lastResult: void 0
												} : e(n, t(t({}, i), {
													lower: r[r.length - 1],
													lowerOpen: !0
												}), s);
											});
										});
									}(e.trans, e.range, 1e4);
								}, !0);
						}
						return a.mutate(e);
						function p(e) {
							var i, s, o, p = ye.trans, f = e.keys || Nn(r, e);
							if (f) return "delete" !== (e = "add" === e.type || "put" === e.type ? t(t({}, e), { keys: f }) : t({}, e)).type && (e.values = n([], e.values, !0)), e.keys && (e.keys = n([], e.keys, !0)), i = a, o = f, ("add" === (s = e).type ? Promise.resolve([]) : i.getMany({
								trans: s.trans,
								keys: o,
								cache: "immutable"
							})).then(function(t) {
								var n = f.map(function(n, i) {
									var a, s, o, f = t[i], m = {
										onerror: null,
										onsuccess: null
									};
									return "delete" === e.type ? l.fire.call(m, n, f, p) : "add" === e.type || void 0 === f ? (a = u.fire.call(m, n, e.values[i], p), null == n && null != a && (e.keys[i] = n = a, r.outbound || b(e.values[i], r.keyPath, n))) : (a = zn(f, e.values[i]), (s = d.fire.call(m, a, n, f, p)) && (o = e.values[i], Object.keys(s).forEach(function(e) {
										c(o, e) ? o[e] = s[e] : b(o, e, s[e]);
									}))), m;
								});
								return a.mutate(e).then(function(i) {
									for (var a = i.failures, r = i.results, s = i.numFailures, o = (i = i.lastResult, 0); o < f.length; ++o) {
										var l = (r || f)[o], c = n[o];
										null == l ? c.onerror && c.onerror(a[o]) : c.onsuccess && c.onsuccess("put" === e.type && t[o] ? e.values[o] : l);
									}
									return {
										failures: a,
										results: r,
										numFailures: s,
										lastResult: i
									};
								}).catch(function(e) {
									return n.forEach(function(t) {
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
		function Ln(e, t, n) {
			try {
				if (!t) return null;
				if (t.keys.length < e.length) return null;
				for (var i = [], a = 0, r = 0; a < t.keys.length && r < e.length; ++a) 0 === st(t.keys[a], e[r]) && (i.push(n ? C(t.values[a]) : t.values[a]), ++r);
				return i.length === e.length ? i : null;
			} catch (e) {
				return null;
			}
		}
		var qn = {
			stack: "dbcore",
			level: -1,
			create: function(e) {
				return { table: function(n) {
					var i = e.table(n);
					return t(t({}, i), {
						getMany: function(e) {
							var t;
							return e.cache ? (t = Ln(e.keys, e.trans._cache, "clone" === e.cache)) ? Ie.resolve(t) : i.getMany(e).then(function(t) {
								return e.trans._cache = {
									keys: e.keys,
									values: "clone" === e.cache ? C(t) : t
								}, t;
							}) : i.getMany(e);
						},
						mutate: function(e) {
							return "add" !== e.type && (e.trans._cache = null), i.mutate(e);
						}
					});
				} };
			}
		};
		function Hn(e, t) {
			return "readonly" === e.trans.mode && !!e.subscr && !e.trans.explicit && "disabled" !== e.trans.db._options.cache && !t.schema.primaryKey.outbound;
		}
		function Vn(e, t) {
			switch (e) {
				case "query": return t.values && !t.unique;
				case "get":
				case "getMany":
				case "count":
				case "openCursor": return !1;
			}
		}
		var Gn = {
			stack: "dbcore",
			level: 0,
			name: "Observability",
			create: function(e) {
				var n = e.schema.name, i = new _n(e.MIN_KEY, e.MAX_KEY);
				return t(t({}, e), {
					transaction: function(t, n, i) {
						if (ye.subscr && "readonly" !== n) throw new U.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ye.querier));
						return e.transaction(t, n, i);
					},
					table: function(s) {
						function o(t) {
							var n;
							return [n = (t = t.query).index, new _n(null != (n = (t = t.range).lower) ? n : e.MIN_KEY, null != (n = t.upper) ? n : e.MAX_KEY)];
						}
						var l = e.table(s), c = l.schema, u = c.primaryKey, d = c.indexes, p = u.extractKey, f = u.outbound, m = u.autoIncrement && d.filter(function(e) {
							return e.compound && e.keyPath.includes(u.keyPath);
						}), h = t(t({}, l), { mutate: function(t) {
							function a(e) {
								return e = "idb://".concat(n, "/").concat(s, "/").concat(e), h[e] || (h[e] = new _n());
							}
							var o, d, p, f = t.trans, h = t.mutatedParts || (t.mutatedParts = {}), y = a(""), _ = a(":dels"), g = t.type, v = "deleteRange" === t.type ? [t.range] : "delete" === t.type ? [t.keys] : t.values.length < 50 ? [Nn(u, t).filter(function(e) {
								return e;
							}), t.values] : [], I = v[0], b = (v = v[1], t.trans._cache);
							return r(I) ? (y.addKeys(I), (g = "delete" === g || I.length === v.length ? Ln(I, b) : null) || _.addKeys(I), (g || v) && (o = a, d = g, p = v, c.indexes.forEach(function(e) {
								var t = o(e.name || "");
								function n(t) {
									return null != t ? e.extractKey(t) : null;
								}
								function i(n) {
									e.multiEntry && r(n) ? n.forEach(function(e) {
										return t.addKey(e);
									}) : t.addKey(n);
								}
								(d || p).forEach(function(e, t) {
									var a = d && n(d[t]);
									0 !== st(a, t = p && n(p[t])) && (null != a && i(a), null != t) && i(t);
								});
							}))) : I ? (v = {
								from: null != (b = I.lower) ? b : e.MIN_KEY,
								to: null != (g = I.upper) ? g : e.MAX_KEY
							}, _.add(v), y.add(v)) : (y.add(i), _.add(i), c.indexes.forEach(function(e) {
								return a(e.name).add(i);
							})), l.mutate(t).then(function(e) {
								return !I || "add" !== t.type && "put" !== t.type || (y.addKeys(e.results), m && m.forEach(function(n) {
									for (var i = t.values.map(function(e) {
										return n.extractKey(e);
									}), r = n.keyPath.findIndex(function(e) {
										return e === u.keyPath;
									}), s = 0, o = e.results.length; s < o; ++s) i[s][r] = e.results[s];
									a(n.name).addKeys(i);
								})), f.mutatedParts = xn(f.mutatedParts || {}, h), e;
							});
						} }), y = {
							get: function(e) {
								return [u, new _n(e.key)];
							},
							getMany: function(e) {
								return [u, new _n().addKeys(e.keys)];
							},
							count: o,
							query: o,
							openCursor: o
						};
						return a(y).forEach(function(e) {
							h[e] = function(a) {
								var r = !!(u = ye.subscr), o = Hn(ye, l) && Vn(e, a) ? a.obsSet = {} : u;
								if (r) {
									var c, u, d = (u = function(e) {
										return e = "idb://".concat(n, "/").concat(s, "/").concat(e), o[e] || (o[e] = new _n());
									})(""), m = u(":dels"), h = (r = y[e](a))[0];
									if (r = r[1], ("query" === e && h.isPrimaryKey && !a.values ? m : u(h.name || "")).add(r), !h.isPrimaryKey) {
										if ("count" !== e) return c = "query" === e && f && a.values && l.query(t(t({}, a), { values: !1 })), l[e].apply(this, arguments).then(function(t) {
											if ("query" === e) {
												if (f && a.values) return c.then(function(e) {
													return e = e.result, d.addKeys(e), t;
												});
												var n = a.values ? t.result.map(p) : t.result;
												(a.values ? d : m).addKeys(n);
											} else {
												var i, r;
												if ("openCursor" === e) return r = a.values, (i = t) && Object.create(i, {
													key: { get: function() {
														return m.addKey(i.primaryKey), i.key;
													} },
													primaryKey: { get: function() {
														var e = i.primaryKey;
														return m.addKey(e), e;
													} },
													value: { get: function() {
														return r && d.addKey(i.primaryKey), i.value;
													} }
												});
											}
											return t;
										});
										m.add(i);
									}
								}
								return l[e].apply(this, arguments);
							};
						}), h;
					}
				});
			}
		};
		function Fn(e, n, i) {
			var a;
			return 0 === i.numFailures ? n : "deleteRange" === n.type || (a = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1, i.numFailures === a) ? null : (a = t({}, n), r(a.keys) && (a.keys = a.keys.filter(function(e, t) {
				return !(t in i.failures);
			})), "values" in a && r(a.values) && (a.values = a.values.filter(function(e, t) {
				return !(t in i.failures);
			})), a);
		}
		function Un(e, t) {
			return n = e, (void 0 === (i = t).lower || (i.lowerOpen ? 0 < st(n, i.lower) : 0 <= st(n, i.lower))) && (n = e, void 0 === (i = t).upper || (i.upperOpen ? st(n, i.upper) < 0 : st(n, i.upper) <= 0));
			var n, i;
		}
		function Bn(e, t, n, i, a, s) {
			var o, l, c, u, d, p, f;
			return n && 0 !== n.length && (o = t.query.index, l = o.multiEntry, c = t.query.range, u = i.schema.primaryKey.extractKey, d = o.extractKey, p = (o.lowLevelIndex || o).extractKey, (i = n.reduce(function(e, n) {
				var i = e, a = [];
				if ("add" === n.type || "put" === n.type) for (var s = new _n(), o = n.values.length - 1; 0 <= o; --o) {
					var p, f = n.values[o], m = u(f);
					!s.hasKey(m) && (p = d(f), l && r(p) ? p.some(function(e) {
						return Un(e, c);
					}) : Un(p, c)) && (s.addKey(m), a.push(f));
				}
				switch (n.type) {
					case "add":
						var h = new _n().addKeys(t.values ? e.map(function(e) {
							return u(e);
						}) : e);
						i = e.concat(t.values ? a.filter(function(e) {
							return e = u(e), !h.hasKey(e) && (h.addKey(e), !0);
						}) : a.map(function(e) {
							return u(e);
						}).filter(function(e) {
							return !h.hasKey(e) && (h.addKey(e), !0);
						}));
						break;
					case "put":
						var y = new _n().addKeys(n.values.map(function(e) {
							return u(e);
						}));
						i = e.filter(function(e) {
							return !y.hasKey(t.values ? u(e) : e);
						}).concat(t.values ? a : a.map(function(e) {
							return u(e);
						}));
						break;
					case "delete":
						var _ = new _n().addKeys(n.keys);
						i = e.filter(function(e) {
							return !_.hasKey(t.values ? u(e) : e);
						});
						break;
					case "deleteRange":
						var g = n.range;
						i = e.filter(function(e) {
							return !Un(u(e), g);
						});
				}
				return i;
			}, e)) !== e) ? (f = function(e, t) {
				return st(p(e), p(t)) || st(u(e), u(t));
			}, i.sort("prev" === t.direction || "prevunique" === t.direction ? function(e, t) {
				return f(t, e);
			} : f), t.limit && t.limit < 1 / 0 && (i.length > t.limit ? i.length = t.limit : e.length === t.limit && i.length < t.limit && (a.dirty = !0)), s ? Object.freeze(i) : i) : e;
		}
		function Wn(e, t) {
			return 0 === st(e.lower, t.lower) && 0 === st(e.upper, t.upper) && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
		}
		var Yn = {
			stack: "dbcore",
			level: 0,
			name: "Cache",
			create: function(e) {
				var n = e.schema.name;
				return t(t({}, e), {
					transaction: function(t, i, a) {
						var r, s, o = e.transaction(t, i, a);
						return "readwrite" === i && (a = (r = new AbortController()).signal, o.addEventListener("abort", (s = function(a) {
							return function() {
								if (r.abort(), "readwrite" === i) {
									for (var s = /* @__PURE__ */ new Set(), l = 0, c = t; l < c.length; l++) {
										var u = c[l], d = An["idb://".concat(n, "/").concat(u)];
										if (d) {
											var p = e.table(u), f = d.optimisticOps.filter(function(e) {
												return e.trans === o;
											});
											if (o._explicit && a && o.mutatedParts) for (var m = 0, h = Object.values(d.queries.query); m < h.length; m++) for (var y = 0, _ = (I = h[m]).slice(); y < _.length; y++) kn((b = _[y]).obsSet, o.mutatedParts) && (R(I, b), b.subscribers.forEach(function(e) {
												return s.add(e);
											}));
											else if (0 < f.length) {
												d.optimisticOps = d.optimisticOps.filter(function(e) {
													return e.trans !== o;
												});
												for (var g = 0, v = Object.values(d.queries.query); g < v.length; g++) for (var I, b, w, S = 0, x = (I = v[g]).slice(); S < x.length; S++) null != (b = x[S]).res && o.mutatedParts && (a && !b.dirty ? (w = Object.isFrozen(b.res), w = Bn(b.res, b.req, f, p, b, w), b.dirty ? (R(I, b), b.subscribers.forEach(function(e) {
													return s.add(e);
												})) : w !== b.res && (b.res = w, b.promise = Ie.resolve({ result: w }))) : (b.dirty && R(I, b), b.subscribers.forEach(function(e) {
													return s.add(e);
												})));
											}
										}
									}
									s.forEach(function(e) {
										return e();
									});
								}
							};
						})(!1), { signal: a }), o.addEventListener("error", s(!1), { signal: a }), o.addEventListener("complete", s(!0), { signal: a })), o;
					},
					table: function(i) {
						var a = e.table(i), r = a.schema.primaryKey;
						return t(t({}, a), {
							mutate: function(e) {
								var s, o = ye.trans;
								return r.outbound || "disabled" === o.db._options.cache || o.explicit || "readwrite" !== o.idbtrans.mode || !(s = An["idb://".concat(n, "/").concat(i)]) ? a.mutate(e) : (o = a.mutate(e), "add" !== e.type && "put" !== e.type || !(50 <= e.values.length || Nn(r, e).some(function(e) {
									return null == e;
								})) ? (s.optimisticOps.push(e), e.mutatedParts && Dn(e.mutatedParts), o.then(function(t) {
									0 < t.numFailures && (R(s.optimisticOps, e), (t = Fn(0, e, t)) && s.optimisticOps.push(t), e.mutatedParts) && Dn(e.mutatedParts);
								}), o.catch(function() {
									R(s.optimisticOps, e), e.mutatedParts && Dn(e.mutatedParts);
								})) : o.then(function(n) {
									var i = Fn(0, t(t({}, e), { values: e.values.map(function(e, i) {
										var a;
										return n.failures[i] ? e : (b(a = null != (a = r.keyPath) && a.includes(".") ? C(e) : t({}, e), r.keyPath, n.results[i]), a);
									}) }), n);
									s.optimisticOps.push(i), queueMicrotask(function() {
										return e.mutatedParts && Dn(e.mutatedParts);
									});
								}), o);
							},
							query: function(e) {
								var t, r, s, o, l, c, u;
								return Hn(ye, a) && Vn("query", e) ? (t = "immutable" === (null == (s = ye.trans) ? void 0 : s.db._options.cache), r = (s = ye).requery, s = s.signal, c = ((e, t, n, i) => {
									var a = An["idb://".concat(e, "/").concat(t)];
									if (!a) return [];
									if (!(e = a.queries[n])) return [
										null,
										!1,
										a,
										null
									];
									var r = e[(i.query ? i.query.index.name : null) || ""];
									if (!r) return [
										null,
										!1,
										a,
										null
									];
									switch (n) {
										case "query":
											var s = null != (o = i.direction) ? o : "next", o = r.find(function(e) {
												var t;
												return e.req.limit === i.limit && e.req.values === i.values && (null != (t = e.req.direction) ? t : "next") === s && Wn(e.req.query.range, i.query.range);
											});
											return o ? [
												o,
												!0,
												a,
												r
											] : [
												r.find(function(e) {
													var t;
													return ("limit" in e.req ? e.req.limit : 1 / 0) >= i.limit && (null != (t = e.req.direction) ? t : "next") === s && (!i.values || e.req.values) && function(e, t) {
														return ((e, t, n, i) => {
															if (void 0 === e) return void 0 !== t ? -1 : 0;
															if (void 0 === t) return 1;
															if (0 === (e = st(e, t))) {
																if (n && i) return 0;
																if (n) return 1;
																if (i) return -1;
															}
															return e;
														})(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= ((e, t, n, i) => {
															if (void 0 === e) return void 0 !== t ? 1 : 0;
															if (void 0 === t) return -1;
															if (0 === (e = st(e, t))) {
																if (n && i) return 0;
																if (n) return -1;
																if (i) return 1;
															}
															return e;
														})(e.upper, t.upper, e.upperOpen, t.upperOpen);
													}(e.req.query.range, i.query.range);
												}),
												!1,
												a,
												r
											];
										case "count": return o = r.find(function(e) {
											return Wn(e.req.query.range, i.query.range);
										}), [
											o,
											!!o,
											a,
											r
										];
									}
								})(n, i, "query", e), u = c[0], o = c[2], l = c[3], u && c[1] ? u.obsSet = e.obsSet : (c = a.query(e).then(function(e) {
									var n = e.result;
									if (u && (u.res = n), t) {
										for (var i = 0, a = n.length; i < a; ++i) Object.freeze(n[i]);
										Object.freeze(n);
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
								}, l ? l.push(u) : (l = [u], (o = o || (An["idb://".concat(n, "/").concat(i)] = {
									queries: {
										query: {},
										count: {}
									},
									objs: /* @__PURE__ */ new Map(),
									optimisticOps: [],
									unsignaledParts: {}
								})).queries.query[e.query.index.name || ""] = l)), function(e, t, n, i) {
									e.subscribers.add(n), i.addEventListener("abort", function() {
										var i, a;
										e.subscribers.delete(n), 0 === e.subscribers.size && (i = e, a = t, setTimeout(function() {
											0 === i.subscribers.size && R(a, i);
										}, 3e3));
									});
								}(u, l, r, s), u.promise.then(function(n) {
									return n = Bn(n.result, e, null == o ? void 0 : o.optimisticOps, a, u, t), { result: t ? n : C(n) };
								})) : a.query(e);
							}
						});
					}
				});
			}
		};
		function $n(e, t) {
			return new Proxy(e, { get: function(e, n, i) {
				return "db" === n ? t : Reflect.get(e, n, i);
			} });
		}
		Zn.prototype.version = function(e) {
			if (isNaN(e) || e < .1) throw new U.Type("Given version is not a positive number");
			if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new U.Schema("Cannot add version when database is open");
			this.verno = Math.max(this.verno, e);
			var t = this._versions, n = t.filter(function(t) {
				return t._cfg.version === e;
			})[0];
			return n || (n = new this.Version(e), t.push(n), t.sort(en), n.stores({}), this._state.autoSchema = !1), n;
		}, Zn.prototype._whenReady = function(e) {
			var t = this;
			return this.idbdb && (this._state.openComplete || ye.letThrough || this._vip) ? e() : new Ie(function(e, n) {
				if (t._state.openComplete) return n(new U.DatabaseClosed(t._state.dbOpenError));
				if (!t._state.isBeingOpened) {
					if (!t._state.autoOpen) return void n(new U.DatabaseClosed());
					t.open().catch(W);
				}
				t._state.dbReadyPromise.then(e, n);
			}).then(e);
		}, Zn.prototype.use = function(e) {
			var t = e.stack, n = e.create, i = e.level, a = ((e = e.name) && this.unuse({
				stack: t,
				name: e
			}), this._middlewares[t] || (this._middlewares[t] = []));
			return a.push({
				stack: t,
				create: n,
				level: null == i ? 10 : i,
				name: e
			}), a.sort(function(e, t) {
				return e.level - t.level;
			}), this;
		}, Zn.prototype.unuse = function(e) {
			var t = e.stack, n = e.name, i = e.create;
			return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
				return i ? e.create !== i : !!n && e.name !== n;
			})), this;
		}, Zn.prototype.open = function() {
			var e = this;
			return Be(he, function() {
				return Kn(e);
			});
		}, Zn.prototype._close = function() {
			this.on.close.fire(new CustomEvent("close"));
			var e = this._state;
			if (pn.remove(this), this.idbdb) {
				try {
					this.idbdb.close();
				} catch (k) {}
				this.idbdb = null;
			}
			e.isBeingOpened || (e.dbReadyPromise = new Ie(function(t) {
				e.dbReadyResolve = t;
			}), e.openCanceller = new Ie(function(t, n) {
				e.cancelOpen = n;
			}));
		}, Zn.prototype.close = function(e) {
			e = (void 0 === e ? { disableAutoOpen: !0 } : e).disableAutoOpen;
			var t = this._state;
			e ? (t.isBeingOpened && t.cancelOpen(new U.DatabaseClosed()), this._close(), t.autoOpen = !1, t.dbOpenError = new U.DatabaseClosed()) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null);
		}, Zn.prototype.delete = function(e) {
			var t = this, n = (void 0 === e && (e = { disableAutoOpen: !0 }), 0 < arguments.length && "object" != typeof arguments[0]), i = this._state;
			return new Ie(function(a, r) {
				function s() {
					t.close(e);
					var n = t._deps.indexedDB.deleteDatabase(t.name);
					n.onsuccess = Ke(function() {
						var e, n = t._deps, i = t.name;
						mn(e = n.indexedDB) || i === Je || fn(e, n.IDBKeyRange).delete(i).catch(W), a();
					}), n.onerror = zt(r), n.onblocked = t._fireOnBlocked;
				}
				if (n) throw new U.InvalidArgument("Invalid closeOptions argument to db.delete()");
				i.isBeingOpened ? i.dbReadyPromise.then(s) : s();
			});
		}, Zn.prototype.backendDB = function() {
			return this.idbdb;
		}, Zn.prototype.isOpen = function() {
			return null !== this.idbdb;
		}, Zn.prototype.hasBeenClosed = function() {
			var e = this._state.dbOpenError;
			return e && "DatabaseClosed" === e.name;
		}, Zn.prototype.hasFailed = function() {
			return null !== this._state.dbOpenError;
		}, Zn.prototype.dynamicallyOpened = function() {
			return this._state.autoSchema;
		}, Object.defineProperty(Zn.prototype, "tables", {
			get: function() {
				var e = this;
				return a(this._allTables).map(function(t) {
					return e._allTables[t];
				});
			},
			enumerable: !1,
			configurable: !0
		}), Zn.prototype.transaction = function() {
			var e = function(e, t, n) {
				var i = arguments.length;
				if (i < 2) throw new U.InvalidArgument("Too few arguments");
				for (var a = new Array(i - 1); --i;) a[i - 1] = arguments[i];
				return n = a.pop(), [
					e,
					x(a),
					n
				];
			}.apply(this, arguments);
			return this._transaction.apply(this, e);
		}, Zn.prototype._transaction = function(e, t, n) {
			var i, a, r = this, s = ye.trans, o = (s && s.db === this && -1 === e.indexOf("!") || (s = null), -1 !== e.indexOf("?"));
			e = e.replace("!", "").replace("?", "");
			try {
				if (a = t.map(function(e) {
					if ("string" != typeof (e = e instanceof r.Table ? e.name : e)) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
					return e;
				}), "r" == e || e === et) i = et;
				else {
					if ("rw" != e && e != tt) throw new U.InvalidArgument("Invalid transaction mode: " + e);
					i = tt;
				}
				if (s) {
					if (s.mode === et && i === tt) {
						if (!o) throw new U.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
						s = null;
					}
					s && a.forEach(function(e) {
						if (s && -1 === s.storeNames.indexOf(e)) {
							if (!o) throw new U.SubTransaction("Table " + e + " not included in parent transaction.");
							s = null;
						}
					}), o && s && !s.active && (s = null);
				}
			} catch (n) {
				return s ? s._promise(null, function(e, t) {
					t(n);
				}) : $e(n);
			}
			var l = function e(t, n, i, a, r) {
				return Ie.resolve().then(function() {
					var s = ye.transless || ye, o = t._createTransaction(n, i, t._dbSchema, a);
					if (o.explicit = !0, s = {
						trans: o,
						transless: s
					}, a) o.idbtrans = a.idbtrans;
					else try {
						o.create(), o.idbtrans._explicit = !0, t._state.PR1398_maxLoop = 3;
					} catch (s) {
						return s.name === G.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
							return e(t, n, i, null, r);
						})) : $e(s);
					}
					var l, c = z(r);
					return c && qe(), s = Ie.follow(function() {
						var e;
						(l = r.call(o, o)) && (c ? (e = He.bind(null, null), l.then(e, e)) : "function" == typeof l.next && "function" == typeof l.throw && (l = Rn(l)));
					}, s), (l && "function" == typeof l.then ? Ie.resolve(l).then(function(e) {
						return o.active ? e : $e(new U.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
					}) : s.then(function() {
						return l;
					})).then(function(e) {
						return a && o._resolve(), o._completion.then(function() {
							return e;
						});
					}).catch(function(e) {
						return o._reject(e), $e(e);
					});
				});
			}.bind(null, this, i, a, s, n);
			return s ? s._promise(i, l, "lock") : ye.trans ? Be(ye.transless, function() {
				return r._whenReady(l);
			}) : this._whenReady(l);
		}, Zn.prototype.table = function(e) {
			if (c(this._allTables, e)) return this._allTables[e];
			throw new U.InvalidTable("Table ".concat(e, " does not exist"));
		};
		var Xn = Zn;
		function Zn(e, n) {
			var i, a, r, s, o, l = this, c = (this._middlewares = {}, this.verno = 0, Zn.dependencies), u = (this._options = n = t({
				addons: Zn.addons,
				autoOpen: !0,
				indexedDB: c.indexedDB,
				IDBKeyRange: c.IDBKeyRange,
				cache: "cloned",
				maxConnections: 1e3
			}, n), this._deps = {
				indexedDB: n.indexedDB,
				IDBKeyRange: n.IDBKeyRange
			}, c = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, {
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
				autoOpen: n.autoOpen
			}), d = (u.dbReadyPromise = new Ie(function(e) {
				u.dbReadyResolve = e;
			}), u.openCanceller = new Ie(function(e, t) {
				u.cancelOpen = t;
			}), this._state = u, this.name = e, this.on = ht(this, "populate", "blocked", "versionchange", "close", { ready: [te, W] }), this.once = function(e, t) {
				var n = function() {
					for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
					l.on(e).unsubscribe(n), t.apply(l, i);
				};
				return l.on(e, n);
			}, this.on.ready.subscribe = _(this.on.ready.subscribe, function(e) {
				return function(t, n) {
					Zn.vip(function() {
						var i, a = l._state;
						a.openComplete ? (a.dbOpenError || Ie.resolve().then(t), n && e(t)) : a.onReadyBeingFired ? (a.onReadyBeingFired.push(t), n && e(t)) : (e(t), i = l, n || e(function e() {
							i.on.ready.unsubscribe(t), i.on.ready.unsubscribe(e);
						}));
					});
				};
			}), this.Collection = (i = this, yt(xt.prototype, function(e, t) {
				this.db = i;
				var n = it, a = null;
				if (t) try {
					n = t();
				} catch (e) {
					a = e;
				}
				var r = (e = (t = e._ctx).table).hook.reading.fire;
				this._ctx = {
					table: e,
					index: t.index,
					isPrimKey: !t.index || e.schema.primKey.keyPath && t.index === e.schema.primKey.name,
					range: n,
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
					error: a,
					or: t.or,
					valueMapper: r !== Y ? r : null
				};
			})), this.Table = (a = this, yt(ft.prototype, function(e, t, n) {
				this.db = a, this._tx = n, this.name = e, this.schema = t, this.hook = a._allTables[e] ? a._allTables[e].hook : ht(null, {
					creating: [Z, W],
					reading: [$, Y],
					updating: [J, W],
					deleting: [Q, W]
				});
			})), this.Transaction = (r = this, yt(Ht.prototype, function(e, t, n, i, a) {
				var s = this;
				"readonly" !== e && t.forEach(function(e) {
					(e = null == (e = n[e]) ? void 0 : e.yProps) && (t = t.concat(e.map(function(e) {
						return e.updatesTable;
					})));
				}), this.db = r, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = i, this.idbtrans = null, this.on = ht(this, "complete", "error", "abort"), this.parent = a || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Ie(function(e, t) {
					s._resolve = e, s._reject = t;
				}), this._completion.then(function() {
					s.active = !1, s.on.complete.fire();
				}, function(e) {
					var t = s.active;
					return s.active = !1, s.on.error.fire(e), s.parent ? s.parent._reject(e) : t && s.idbtrans && s.idbtrans.abort(), $e(e);
				});
			})), this.Version = (s = this, yt(un.prototype, function(e) {
				this.db = s, this._cfg = {
					version: e,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				};
			})), this.WhereClause = (o = this, yt(Ot.prototype, function(e, t, n) {
				if (this.db = o, this._ctx = {
					table: e,
					index: ":id" === t ? null : t,
					or: n
				}, this._cmp = this._ascending = st, this._descending = function(e, t) {
					return st(t, e);
				}, this._max = function(e, t) {
					return 0 < st(e, t) ? e : t;
				}, this._min = function(e, t) {
					return st(e, t) < 0 ? e : t;
				}, this._IDBKeyRange = o._deps.IDBKeyRange, !this._IDBKeyRange) throw new U.MissingAPI();
			})), this.on("versionchange", function(e) {
				0 < e.newVersion ? console.warn("Another connection wants to upgrade database '".concat(l.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(l.name, "'. Closing db now to resume the delete request.")), l.close({ disableAutoOpen: !1 });
			}), this.on("blocked", function(e) {
				!e.newVersion || e.newVersion < e.oldVersion ? console.warn("Dexie.delete('".concat(l.name, "') was blocked")) : console.warn("Upgrade '".concat(l.name, "' blocked by other connection holding version ").concat(e.oldVersion / 10));
			}), this._maxKey = Bt(n.IDBKeyRange), this._createTransaction = function(e, t, n, i) {
				return new l.Transaction(e, t, n, l._options.chromeTransactionDurability, i);
			}, this._fireOnBlocked = function(e) {
				l.on("blocked").fire(e), pn.toArray().filter(function(e) {
					return e.name === l.name && e !== l && !e._state.vcFired;
				}).map(function(t) {
					return t.on("versionchange").fire(e);
				});
			}, this.use(qn), this.use(Yn), this.use(Gn), this.use(Pn), this.use(jn), new Proxy(this, { get: function(e, t, n) {
				var i;
				return "_vip" === t || ("table" === t ? function(e) {
					return $n(l.table(e), d);
				} : (i = Reflect.get(e, t, n)) instanceof ft ? $n(i, d) : "tables" === t ? i.map(function(e) {
					return $n(e, d);
				}) : "_createTransaction" === t ? function() {
					return $n(i.apply(this, arguments), d);
				} : i);
			} }));
			this.vip = d, c.forEach(function(e) {
				return e(l);
			});
		}
		se = "undefined" != typeof Symbol && "observable" in Symbol ? Symbol.observable : "@@observable";
		var Qn, Jn = (ei.prototype.subscribe = function(e, t, n) {
			return this._subscribe(e && "function" != typeof e ? e : {
				next: e,
				error: t,
				complete: n
			});
		}, ei.prototype[se] = function() {
			return this;
		}, ei);
		function ei(e) {
			this._subscribe = e;
		}
		try {
			Qn = {
				indexedDB: i.indexedDB || i.mozIndexedDB || i.webkitIndexedDB || i.msIndexedDB,
				IDBKeyRange: i.IDBKeyRange || i.webkitIDBKeyRange
			};
		} catch (k) {
			Qn = {
				indexedDB: null,
				IDBKeyRange: null
			};
		}
		function ti(e) {
			var t, n = !1, i = new Jn(function(i) {
				var a, r = z(e), s = !1, o = {}, l = {}, c = {
					get closed() {
						return s;
					},
					unsubscribe: function() {
						s || (s = !0, a && a.abort(), u && qt.storagemutated.unsubscribe(f));
					}
				}, u = (i.start && i.start(c), !1), d = function() {
					return Ye(m);
				};
				function p() {
					return kn(l, o);
				}
				var f = function(e) {
					xn(o, e), p() && d();
				}, m = function() {
					var c, m, h;
					!s && Qn.indexedDB && (o = {}, c = {}, a && a.abort(), a = new AbortController(), h = ((t) => {
						var n = Ce();
						try {
							r && qe();
							var i = Le(e, t);
							return i = r ? i.finally(He) : i;
						} finally {
							n && De();
						}
					})(m = {
						subscr: c,
						signal: a.signal,
						requery: d,
						querier: e,
						trans: null
					}), u || (qt.storagemutated.subscribe(f), u = !0), Promise.resolve(h).then(function(e) {
						n = !0, t = e, s || m.signal.aborted || (p() || (l = c, p()) ? d() : (o = {}, Ye(function() {
							return !s && i.next && i.next(e);
						})));
					}, function(e) {
						n = !1, ["DatabaseClosedError", "AbortError"].includes(null == e ? void 0 : e.name) || s || Ye(function() {
							s || i.error && i.error(e);
						});
					}));
				};
				return setTimeout(d, 0), c;
			});
			return i.hasValue = function() {
				return n;
			}, i.getValue = function() {
				return t;
			}, i;
		}
		var ni = Xn;
		function ii(e) {
			var t = ri;
			try {
				ri = !0, qt.storagemutated.fire(e), Mn(e, !0);
			} finally {
				ri = t;
			}
		}
		u(ni, t(t({}, k), {
			delete: function(e) {
				return new ni(e, { addons: [] }).delete();
			},
			exists: function(e) {
				return new ni(e, { addons: [] }).open().then(function(e) {
					return e.close(), !0;
				}).catch("NoSuchDatabaseError", function() {
					return !1;
				});
			},
			getDatabaseNames: function(e) {
				try {
					return n = (t = ni.dependencies).indexedDB, t = t.IDBKeyRange, (mn(n) ? Promise.resolve(n.databases()).then(function(e) {
						return e.map(function(e) {
							return e.name;
						}).filter(function(e) {
							return e !== Je;
						});
					}) : fn(n, t).toCollection().primaryKeys()).then(e);
				} catch (e) {
					return $e(new U.MissingAPI());
				}
				var t, n;
			},
			defineClass: function() {
				return function(e) {
					s(this, e);
				};
			},
			ignoreTransaction: function(e) {
				return ye.trans ? Be(ye.transless || he, e) : e();
			},
			vip: hn,
			async: function(e) {
				return function() {
					try {
						var t = Rn(e.apply(this, arguments));
						return t && "function" == typeof t.then ? t : Ie.resolve(t);
					} catch (t) {
						return $e(t);
					}
				};
			},
			spawn: function(e, t, n) {
				try {
					var i = Rn(e.apply(n, t || []));
					return i && "function" == typeof i.then ? i : Ie.resolve(i);
				} catch (e) {
					return $e(e);
				}
			},
			currentTransaction: { get: function() {
				return ye.trans || null;
			} },
			waitFor: function(e, t) {
				return e = Ie.resolve("function" == typeof e ? ni.ignoreTransaction(e) : e).timeout(t || 6e4), ye.trans ? ye.trans.waitFor(e) : e;
			},
			Promise: Ie,
			debug: {
				get: function() {
					return ne;
				},
				set: function(e) {
					ie(e);
				}
			},
			derive: f,
			extend: s,
			props: u,
			override: _,
			Events: ht,
			on: qt,
			liveQuery: ti,
			extendObservabilitySet: xn,
			getByKeyPath: I,
			setByKeyPath: b,
			delByKeyPath: function(e, t) {
				"string" == typeof t ? b(e, t, void 0) : "length" in t && [].map.call(t, function(t) {
					b(e, t, void 0);
				});
			},
			shallowClone: w,
			deepClone: C,
			getObjectDiff: zn,
			cmp: st,
			asap: v,
			minKey: -1 / 0,
			addons: [],
			connections: { get: pn.toArray },
			errnames: G,
			dependencies: Qn,
			cache: An,
			semVer: "4.4.5",
			version: "4.4.5".split(".").map(function(e) {
				return parseInt(e);
			}).reduce(function(e, t, n) {
				return e + t / Math.pow(10, 2 * n);
			})
		})), ni.maxKey = Bt(ni.dependencies.IDBKeyRange), "undefined" != typeof dispatchEvent && "undefined" != typeof addEventListener && (qt(jt, function(e) {
			ri || (e = new CustomEvent(Lt, { detail: e }), ri = !0, dispatchEvent(e), ri = !1);
		}), addEventListener(Lt, function(e) {
			e = e.detail, ri || ii(e);
		}));
		var ai, ri = !1, si = function() {};
		return "undefined" != typeof BroadcastChannel && ((si = function() {
			(ai = new BroadcastChannel(Lt)).onmessage = function(e) {
				return e.data && ii(e.data);
			};
		})(), "function" == typeof ai.unref && ai.unref(), qt(jt, function(e) {
			ri || ai.postMessage(e);
		})), "undefined" != typeof addEventListener && (addEventListener("pagehide", function(e) {
			if (!Xn.disableBfCache && e.persisted) {
				ai?.close();
				for (var t = 0, n = pn.toArray(); t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
			}
		}), addEventListener("pageshow", function(e) {
			!Xn.disableBfCache && e.persisted && (si(), ii({ all: new _n(-1 / 0, [[]]) }));
		})), Ie.rejectionMapper = function(e, t) {
			return !e || e instanceof L || e instanceof TypeError || e instanceof SyntaxError || !e.name || !B[e.name] ? e : (t = new B[e.name](t || e.message, e), "stack" in e && p(t, "stack", { get: function() {
				return this.inner.stack;
			} }), t);
		}, ie(ne), t(Xn, Object.freeze({
			__proto__: null,
			DEFAULT_MAX_CONNECTIONS: 1e3,
			Dexie: Xn,
			Entity: rt,
			PropModification: ut,
			RangeSet: _n,
			add: function(e) {
				return new ut({ add: e });
			},
			cmp: st,
			default: Xn,
			liveQuery: ti,
			mergeRanges: vn,
			rangesOverlap: In,
			remove: function(e) {
				return new ut({ remove: e });
			},
			replacePrefix: function(e, t) {
				return new ut({ replacePrefix: [e, t] });
			}
		}), { default: Xn }), Xn;
	};
	"object" == typeof e && void 0 !== t ? t.exports = i() : "function" == typeof define && define.amd ? define(i) : (n = "undefined" != typeof globalThis ? globalThis : n || self).Dexie = i();
})(), 1);
const c = Symbol.for("Dexie"), u = globalThis[c] || (globalThis[c] = l.default);
if (l.default.semVer !== u.semVer) throw new Error(`Two different versions of Dexie loaded in the same app: ${l.default.semVer} and ${u.semVer}`);
const { liveQuery: d, mergeRanges: p, rangesOverlap: f, RangeSet: m, cmp: h, Entity: y, PropModification: _, replacePrefix: g, add: v, remove: I, DexieYProvider: b } = u, w = [
	"actiware_analysis",
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
	"ggir_hasib_count_epoch_seconds",
	"ggir_hasib_count_source",
	"ggir_hasib_variants",
	"ggir_hasib_variants_enabled",
	"ggir_haspt_variant",
	"ggir_import_corrected_values",
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
], S = {
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
}, x = [
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
], k = "actigraph", A = {
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
		members: []
	},
	physical_activity_mask_policy_object: {
		kind: "object",
		members: []
	}
}, E = {
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
		perUserCompute: !1
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
		perUserCompute: !1
	},
	ggir_import_corrected_values: {
		authority: "study",
		plane: "local",
		projections: ["extras"],
		storeKeys: { extras: "ggir_import_corrected_values" },
		range: "boolean_flag",
		surface: "ggir",
		persisted: !0,
		status: "live",
		propagation: ["keyed"],
		consumers: ["auto_sleep_markers"],
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
		perUserCompute: !1
	}
}, C = {
	actiware_analysis: {},
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
		activityLine: "#2F3B36"
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
	ggir_import_corrected_values: !1,
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
	nonwear_detectors_ggir: ["van_hees_2023"],
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
}, D = [
	"autoNonwearOnNavigate",
	"autoScoreOnNavigate",
	"colorTheme",
	"columnMapping",
	"currentAlgorithm",
	"devicePreset",
	"epochLengthSeconds",
	"nightEndHour",
	"nightStartHour",
	"preferredActivityColumn",
	"preferredDisplayColumn",
	"showAdjacentMarkers",
	"showNonwearOverlays",
	"skipRows",
	"sleepDetectionRule",
	"viewModeHours"
], M = [
	"HDCZA",
	"HorAngle",
	"NotWorn",
	"MotionWare",
	"HLRB"
], T = [
	"Sadeh1994",
	"Galland2012",
	"ColeKripke1992",
	"Oakley1997",
	"NotWorn"
], K = ["zero_crossing_y_60s", "neishabouri_vm_60s"], R = {
	default_algorithm: "sadeh_1994_actilife",
	nonwear_detectors_counts: [
		"choi_2011",
		"choi_2012",
		"gt3x_capsense",
		"detach_nonwear",
		"actiware_off_wrist"
	],
	nonwear_detectors_ggir: ["van_hees_2023"],
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
function O(e, t) {
	return A[E[e].range] ? z(E[e].range, t) : `unknown range for ${e}`;
}
function P(e, t) {
	const n = A[e];
	if ("integer" !== n?.kind) return null;
	const i = "number" == typeof t ? t : "string" == typeof t ? Number.parseFloat(t) : NaN;
	if (!Number.isFinite(i)) return null;
	const a = Math.floor(i);
	return void 0 !== n.minimum && a < n.minimum ? null : void 0 === n.maximum ? a : Math.min(n.maximum, a);
}
function z(e, t) {
	const n = A[e];
	if (!n) return `unknown range ${e}`;
	switch (n.kind) {
		case "boolean": return "boolean" == typeof t ? null : "expected true or false";
		case "integer": return "number" == typeof t && Number.isInteger(t) ? void 0 !== n.minimum && t < n.minimum ? `below the minimum ${String(n.minimum)}` : void 0 !== n.maximum && t > n.maximum ? `above the maximum ${String(n.maximum)}` : null : "expected an integer";
		case "open_enum":
		case "enum": return "string" == typeof t && n.members.includes(t) ? null : `not one of ${n.members.join(", ")}`;
		case "string": return "string" != typeof t ? "expected a string" : n.pattern && !new RegExp(n.pattern).test(t) ? `does not match ${n.pattern}` : null;
		case "list": {
			if (!Array.isArray(t)) return "expected a list";
			if (0 === n.members.length) return null;
			const e = t.filter((e) => "string" != typeof e || !n.members.includes(e));
			return 0 === e.length ? null : `${e.map(String).join(", ")} are not among ${n.members.join(", ")}`;
		}
		case "object": return null === t || "object" != typeof t || Array.isArray(t) ? "expected an object" : function(e, t) {
			if (void 0 !== e.values) for (const [a, r] of Object.entries(t)) {
				const t = z(e.values, r);
				if (null !== t) return `${a}: ${t}`;
			}
			for (const [a, r] of Object.entries(e.fields ?? {})) {
				const n = t[a];
				if ((null == n || n === Number.POSITIVE_INFINITY) && e.optionalFields?.includes(a)) continue;
				const i = z(r, n);
				if (null !== i) return `${a} ${i}`;
			}
			let n = null, i = null;
			for (const a of e.ladder ?? []) {
				const e = t[a];
				if (null != e && e !== Number.POSITIVE_INFINITY) {
					if (null !== i) return `${a} needs ${i}`;
					if (null !== n && e <= n[1]) return `${a} must be above ${n[0]}`;
					n = [a, e];
				} else i ??= a;
			}
			return null;
		}(n, t);
		default: return "unhandled range kind";
	}
}
const N = "__legacy__", j = "__legacy_dr__", L = "__persisted_store_state", q = Object.values(E).flatMap((e) => {
	const t = A[e.range];
	return "list" === t?.kind && t.members.length > 0 ? [{
		extras: e.storeKeys.extras,
		zustand: e.storeKeys.zustand,
		members: new Set(t.members)
	}] : [];
});
function H(e, t) {
	let n = e;
	for (const i of q) {
		const a = i[t], r = void 0 === a ? void 0 : e[a];
		if (void 0 === a || !Array.isArray(r)) continue;
		const s = r.filter((e) => "string" == typeof e && i.members.has(e));
		s.length !== r.length && (n = {
			...n,
			[a]: s
		});
	}
	return n;
}
function V(e) {
	if (void 0 === e) return e;
	const t = e.extraSettings;
	if (null === t || "object" != typeof t) return e;
	let n = H(t, "extras");
	if ("__persisted_store_state" in n) {
		const e = function(e) {
			if ("string" != typeof e) return e;
			try {
				const t = JSON.parse(e), n = t?.state;
				if (null === n || "object" != typeof n || Array.isArray(n)) return e;
				const i = H(n, "zustand");
				return i === n ? e : JSON.stringify({
					...t,
					state: i
				});
			} catch {
				return e;
			}
		}(n[L]);
		e !== n.__persisted_store_state && (n = {
			...n,
			[L]: e
		});
	}
	return n === t ? e : {
		...e,
		extraSettings: n
	};
}
const G = {
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
}, F = {
	CHOI_2011: "choi_2011",
	CHOI_2012: "choi_2012",
	BOTH: "both"
}, U = { PROOF_PENDING: "proof_pending" }, B = { UTC: "utc" }, W = {
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
}, Y = {
	MAIN_SLEEP: "MAIN_SLEEP",
	NAP: "NAP",
	MANUAL: "manual",
	SENSOR: "sensor"
}, $ = {
	CHOI_2011: "choi_2011",
	FLAT_ACTIVITY: "flat_activity",
	GT3X_CAPSENSE: "gt3x_capsense",
	ACTIWARE_OFF_WRIST: "actiware_off_wrist",
	DETACH_NONWEAR: "detach_nonwear",
	VAN_HEES_2013: "van_hees_2013",
	VAN_HEES_2023: "van_hees_2023",
	GGIR_PART2_INVALID: "ggir_part2_invalid",
	CHOI_2012: "choi_2012",
	TROIANO_2008: "troiano_2008",
	AHMADI_2020: "ahmadi_2020",
	SKOVGAARD_2023: "skovgaard_2023"
}, X = {
	DIARY: "diary",
	L5: "l5",
	HDCZA: "hdcza",
	SMART: "smart",
	LONGEST_BOUT: "longest_bout",
	EVENT_MARKER: "event_marker",
	ACTIWARE_REST_INTERVAL: "actiware_rest_interval",
	NONE: "none"
}, Z = {
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
}, Q = {
	LEGACY: "legacy",
	REGULARITY_V2: "regularity_v2",
	GGIR_PART4: "ggir_part4"
}, J = {
	NONE: "none",
	WEBSTER: "webster"
}, ee = {
	WRIST: "wrist",
	HIP: "hip"
}, te = {
	CONSECUTIVE_ONSET3S_OFFSET5S: "consecutive_onset3s_offset5s",
	CONSECUTIVE_ONSET5S_OFFSET10S: "consecutive_onset5s_offset10s",
	TUDOR_LOCKE_2014: "tudor_locke_2014"
};
function ne(e) {
	const t = e.replace(/\\/g, "/").split("/");
	return (t[t.length - 1] ?? e).toLowerCase();
}
function ie(e) {
	const t = ne(e), n = t.lastIndexOf(".");
	return n > 0 ? t.slice(0, n) : t;
}
const ae = /* @__PURE__ */ new Set([
	"",
	"nan",
	"none",
	"null",
	"nat"
]), re = /^sc[-_ ]*0*(\d+)$/i;
function se(e) {
	let t = e.trim();
	if (ae.has(t.toLowerCase())) return null;
	t = t.replace(/\s+/gu, " "), /^\d+\.0+$/u.test(t) && (t = t.split(".", 1)[0]);
	const n = re.exec(t);
	return n ? `sc-${n[1].replace(/^0+(?=\d)/u, "")}` : t.toLowerCase();
}
function oe(e) {
	return se(e) ?? "";
}
const le = [".rdata", ".rda"];
function ce(e) {
	const t = e.replace(/\\/g, "/").split("/"), n = t[t.length - 1] ?? e, i = n.toLowerCase();
	if (!i.startsWith("meta_")) return e;
	for (const a of le) if (i.endsWith(a)) return n.slice(5, n.length - a.length) || e;
	return e;
}
const ue = /^sc[-_ ]*0*\d+(?=$|[-_\s.])/i, de = /(?:^|[-_\s])(T\d{1,2})(?=$|[-_\s(])/i;
function pe(e) {
	const t = ce(e).replace(/\\/g, "/"), n = t.split("/").pop() ?? t, i = n.lastIndexOf("."), a = (i > 0 ? n.slice(0, i) : n).trim();
	if (!a) return null;
	const r = (a.split(/\s*\(/, 1)[0] ?? a).trim(), s = ue.exec(r);
	if (s) return s[0];
	const o = de.exec(r);
	return void 0 !== o?.index ? r.slice(0, r.indexOf(o[1] ?? "", o.index)).replace(/[\s\-_]+$/, "") || null : (r.split(/\s+/, 1)[0] ?? "").replace(/[-_]?T\d{1,2}$/i, "").replace(/[-_]+$/, "") || null;
}
function fe(e) {
	return se((e.participantId?.length ? e.participantId : pe(e.filename)) ?? "") ?? "";
}
function me(e) {
	const t = ce(e.filename);
	return [...new Set([
		fe(e),
		...e.participantId ? [e.participantId] : [],
		ne(e.filename),
		ne(t),
		ie(e.filename),
		ie(t)
	].map((e) => e.trim().toLowerCase()))];
}
function he(e) {
	const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), r = (e, t) => {
		const n = a.get(e) ?? [];
		n.includes(t) || n.push(t), a.set(e, n);
	}, s = (e, t, n) => {
		e.has(t) || e.set(t, n);
	};
	for (const o of e) {
		t.set(ne(o.filename), o), n.set(ie(o.filename), o);
		const e = ce(o.filename);
		if (e !== o.filename && (s(t, ne(e), o), s(n, ie(e), o)), "incomplete" !== o.ingestState) if (o.participantId) {
			const e = fe(o);
			e && (i.set(e, o), r(e, o));
		} else {
			const e = fe(o);
			e && (s(i, e, o), r(e, o));
		}
	}
	return {
		byFilename: t,
		byStem: n,
		byParticipantId: {
			all: (e) => a.get(e) ?? [],
			covering(e, t) {
				return this.all(e).filter((e) => e.availableDates.includes(t));
			},
			get(e, t) {
				if (t) {
					const n = this.covering(e, t);
					if (1 === n.length) return n[0];
				}
				return i.get(e);
			}
		}
	};
}
const ye = {
	MATCHED: "matched",
	AMBIGUOUS: "ambiguous",
	UNMATCHED: "unmatched"
};
function _e(e, t, { byFilename: n, byStem: i, byParticipantId: a }, r) {
	const s = e.trim();
	if (!s) return { status: ye.UNMATCHED };
	const o = n.get(ne(s)) ?? i.get(ne(s)) ?? i.get(ie(s)), l = o ? fe(o) : se(s) ?? "", c = a.all(l), u = a.covering(l, t), d = u.find((e) => e.id === r);
	if (u.length > 1 && !d) return {
		status: ye.AMBIGUOUS,
		count: u.length,
		candidates: u
	};
	const p = d ?? u[0] ?? o ?? (1 === c.length ? c[0] : void 0);
	return p?.id && "incomplete" !== p.ingestState && (0 === p.availableDates.length || p.availableDates.includes(t)) ? {
		status: ye.MATCHED,
		file: p
	} : {
		status: ye.UNMATCHED,
		candidate: p ?? a.get(l)
	};
}
const ge = /* @__PURE__ */ new Set([
	"",
	"nan",
	"none",
	"null",
	"nat"
]);
function ve(e) {
	return ge.has(e.trim().toLowerCase());
}
function Ie(e) {
	return 65279 === e.charCodeAt(0) ? e.slice(1) : e;
}
function be(e, t = !0) {
	const n = [];
	let i = "", a = !1, r = 1, s = 1;
	for (let o = 0; o < e.length; o++) {
		const l = e.charAt(o);
		if ("\"" === l) {
			i += l, a && "\"" === e.charAt(o + 1) ? (i += "\"", o++) : a = !a;
			continue;
		}
		if ("\r" !== l && "\n" !== l) {
			i += l;
			continue;
		}
		if (!t && "\r" === l && o === e.length - 1) {
			i += l;
			break;
		}
		const c = "\r" === l && "\n" === e.charAt(o + 1) ? "\r\n" : l;
		"\r\n" === c && o++, a ? i += c : (n.push({
			text: i,
			sourceRow: s
		}), i = "", s = r + 1), r++;
	}
	return t && i.length > 0 && !a && n.push({
		text: i,
		sourceRow: s
	}), {
		records: n,
		unterminatedQuotedField: a,
		...t ? {} : { remainder: i }
	};
}
const we = [
	",",
	"	",
	";"
];
function Se(e) {
	const t = Ie(e).split(/\r\n|\r|\n/).find((e) => e.trim().length > 0) ?? "", n = new Map(we.map((e) => [e, 0]));
	let i = !1;
	for (const r of t) "\"" === r ? i = !i : !i && n.has(r) && n.set(r, (n.get(r) ?? 0) + 1);
	let a = ",";
	for (const r of we) (n.get(r) ?? 0) > (n.get(a) ?? 0) && (a = r);
	return a;
}
function xe(e, t) {
	const n = [];
	let i = "", a = !1;
	for (let r = 0; r < e.length; r++) {
		const s = e.charAt(r);
		"\"" === s ? a && "\"" === e.charAt(r + 1) ? (i += "\"", r++) : a = !a : s !== t || a ? i += s : (n.push(i), i = "");
	}
	return n.push(i), n;
}
function ke(e, t = ",") {
	return xe(e, t);
}
function Ae(e, t = ",") {
	return xe(e, t).map((e) => e.trim());
}
function Ee(e) {
	const t = function(e) {
		return e.length > 0 && /^[=+\-@\t\r]/.test(e) ? `'${e}` : e;
	}(e);
	return t.includes(",") || t.includes("\"") || t.includes("\n") || t.includes("\r") ? `"${t.replace(/"/g, "\"\"")}"` : t;
}
const Ce = [
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
], De = Ce.map((e) => e.method), Me = {
	actigraph: "ActiGraph counts",
	philips_actiwatch: "Philips Actiwatch counts",
	camntech_actiwatch: "CamNtech Actiwatch counts",
	condor: "Condor ActLumus/ActTrust counts",
	source_declared: "counts on the study's stated scale"
}, Te = {
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
}, Ke = {
	ggir_daily_summary: ["enmo_epoch_values"],
	axis_y_counts: ["count_epochs_60s", "count_epochs_30s"],
	vector_magnitude_counts: ["count_epochs_60s", "count_epochs_30s"],
	mims_epoch_values: ["mims_epoch_values"],
	preschool_activity_class_epochs: ["raw_acceleration"],
	enmo_mg_epochs: ["enmo_epoch_values"]
}, Re = {
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
}, Oe = [
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
], Pe = {
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
}, ze = [
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
], Ne = [
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
], je = [
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
], Le = [
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
], qe = (Ne.map((e) => e.id), Oe.map((e) => e.id)), He = ([{
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
}), Ve = [30, 60], Ge = [
	"count_hasib",
	"angle_hasib",
	"lstm",
	"consensus"
], Fe = ["majority_tie_sleep", "strict_majority"], Ue = "algorithm-output-cube/v1", Be = ["counts_axis_y", "counts_vm"], We = ["neural_model"], Ye = "count_hasib", $e = "lstm", Xe = "consensus", Ze = "sadeh_1994", Qe = "neishabouri", Je = "sleep_wake_epoch", et = "exploratory", tt = "ggir_parity_default", nt = "literature_reference", it = "sleep_wake_epoch", at = "local_model_validated", rt = "sleep_wake_epoch", st = "derived_consensus", ot = ["sadeh_1994", "cole_kripke_1992"], lt = "zero_crossing", ct = {
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
}, ut = {
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
}, dt = {
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
}, pt = [
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
], ft = { angle_hasib: {
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
} }, mt = {
	id: "default",
	label: "Default threshold",
	threshold: .5
}, ht = {
	count_cell_label: "{method_label} on {input_label}",
	count_provenance_cell_label: "{method_label} {implementation_label} on {input_label}",
	model_cell_label: "{model_label} ({preset_label})",
	consensus_cell_label: "{scope_label} sleep/wake outputs, {strategy_label} ({suffix})",
	skipped_method_reason: "{algorithm_value} excluded from the plan by caller request.",
	count_30_warning: "30s count-HASIB outputs are planned for sensitivity analysis; literature/default GGIR parity is still 60s.",
	no_lstm_warning: "No LSTM model projections were supplied, so the plan contains no ONNX sleep/wake outputs.",
	unavailable_lstm_warning: "LSTM model artifact(s) not found on disk ({model_ids}); the ONNX projection cannot be loaded until the asset ships.",
	count_consensus_scope_label: "Count-HASIB",
	lstm_consensus_scope_label: "LSTM ({model_ids})",
	count_lstm_consensus_scope_label: "Count-HASIB + LSTM ({model_ids})",
	all_consensus_scope_label: "All"
}, yt = [
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
], _t = {
	majority_tie_sleep: "majority",
	strict_majority: "strict majority",
	intersection_sleep: "intersection",
	union_sleep: "union"
}, gt = {
	output_family: "count_hasib",
	count_family: "zero_crossing",
	axis: "y",
	epoch_seconds: 60,
	model_threshold: .5,
	implementation_variant: "hasib",
	neishabouri_cap_300: !0,
	consensus_strategy: "majority_tie_sleep"
}, vt = {
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
}, It = {
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
}, bt = {
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
}, wt = [
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
], St = wt.filter((e) => "planner_output_cell" === e.cellRole).map((e) => `${e.segments[0]?.literalValue ?? ""}${e.segmentSeparator}`).filter((e, t, n) => n.indexOf(e) === t).sort();
function xt(e, t, n) {
	const i = ct[e];
	if (!i.compatibleAxisIds.includes(t)) throw new Error(`${e} does not provide ${t} count input.`);
	return i.seriesKeyTemplate.replace("{axis}", t).replace("{epoch_seconds}", String(n));
}
function kt(e, t, n, i) {
	return ot.includes(e) && "zero_crossing" === t && "y" === n && 60 === i;
}
function At(e, t) {
	return "sadeh_1994" === e && "neishabouri" === t;
}
function Et(e, t) {
	const n = e.segmentSeparator, i = e.segments, a = t.split(n), r = i.findIndex((e) => !0 === e.greedy);
	let s, o;
	if (r >= 0) {
		const e = i.length - r - 1;
		if (a.length < i.length) return null;
		o = a.slice(0, r).map((e) => [e]), o.push(a.slice(r, a.length - e));
		for (const t of a.slice(a.length - e)) o.push([t]);
		s = i;
	} else {
		const e = i.flatMap((e, t) => !0 === e.optional ? [t] : []), t = i.length - a.length;
		if (t < 0 || t > e.length) return null;
		const n = new Set(e.slice(e.length - t));
		s = i.filter((e, t) => !n.has(t)), o = a.map((e) => [e]);
	}
	const l = {};
	for (let c = 0; c < s.length; c += 1) {
		const e = s[c], t = o[c];
		if (void 0 === e || void 0 === t) return null;
		let i = t.join(n);
		if (void 0 === e.literalValue) {
			if (void 0 !== e.tagPrefix) {
				if (!i.startsWith(e.tagPrefix)) return null;
				i = i.slice(e.tagPrefix.length);
			}
			if (0 === i.length) return null;
			if (void 0 !== e.valueEnumerationId) {
				const t = bt[e.valueEnumerationId]?.[i];
				if (void 0 === t) return null;
				for (const [e, n] of Object.entries(t)) l[e] = n;
			}
			l[e.segmentRole] = i;
		} else if (i !== e.literalValue) return null;
	}
	return l;
}
function Ct(e) {
	let t = null;
	for (const n of wt) {
		const i = Et(n, e);
		if (null !== i) {
			if (null !== t) return null;
			t = {
				grammarId: n.grammarId,
				values: i
			};
		}
	}
	return t;
}
function Dt(e, t) {
	const n = wt.find((t) => t.grammarId === e);
	if (void 0 === n) throw new Error(`Unknown cell id grammar ${e}.`);
	const i = [];
	for (const a of n.segments) {
		if (void 0 !== a.literalValue) {
			i.push(a.literalValue);
			continue;
		}
		const e = a.valueEnumerationId;
		let n = t[a.segmentRole];
		if (void 0 === n && void 0 !== e) {
			const i = Object.entries(bt[e] ?? {}).filter(([, e]) => {
				const n = Object.entries(e);
				return n.length > 0 && n.every(([e, n]) => String(t[e]) === String(n));
			});
			n = (1 === i.length ? i[0] : void 0)?.[0];
		}
		if (void 0 === n) {
			if (!0 === a.optional) continue;
			throw new Error(`Cell id segment ${a.segmentRole} has no value.`);
		}
		const r = String(n);
		if (void 0 !== e && void 0 === bt[e]?.[r]) throw new Error(`Cell id segment ${a.segmentRole} value ${r} is outside its declared enumeration.`);
		i.push(void 0 === a.tagPrefix ? r : `${a.tagPrefix}${r}`);
	}
	return i.join(n.segmentSeparator);
}
const Mt = { family: "unknown" };
function Tt(e, t) {
	const n = e[t];
	return void 0 === n ? void 0 : String(n);
}
function Kt(e) {
	if ("string" != typeof e || 0 === e.length) return Mt;
	const t = Ct(e);
	if (null === t) return Mt;
	const n = t.values;
	switch (t.grammarId) {
		case "count_cell": {
			const e = Tt(n, "method_family"), t = Tt(n, "count_family"), i = Tt(n, "axis"), a = Tt(n, "epoch_seconds");
			if (void 0 === e || void 0 === t || void 0 === i || void 0 === a) return Mt;
			const r = Tt(n, "implementation_variant");
			return {
				family: "count_hasib",
				scorer: e,
				...void 0 !== r ? { provenance: r } : {},
				countSource: t,
				signalAxis: i,
				epoch: a
			};
		}
		case "angle_cell": {
			const e = Tt(n, "method_family"), t = Tt(n, "epoch_seconds");
			return void 0 === e || void 0 === t ? Mt : {
				family: "angle_hasib",
				scorer: e,
				signalAxis: "anglez",
				epoch: t
			};
		}
		case "model_cell": {
			const e = Tt(n, "model_slug"), t = Tt(n, "preset_slug");
			return void 0 === e || void 0 === t ? Mt : {
				family: "lstm",
				lstmModel: e,
				lstmThreshold: t
			};
		}
		case "consensus_cell": {
			const e = Tt(n, "strategy"), t = Tt(n, "epoch_seconds");
			return void 0 === e || void 0 === t ? Mt : {
				family: "consensus",
				consensusStrategy: e,
				epoch: t
			};
		}
		default: return Mt;
	}
}
const Rt = new Map(je.map((e) => [e.id, e]));
new Map(Le.map((e) => [e.id, e]));
const Ot = Oe.filter((e) => "sleep_wake" === e.kind).map((e) => ({
	id: e.id,
	displayGrid: e.displayGrid,
	execution: e.execution,
	requiredSignal: e.requiredSignal,
	family: e.family
})), Pt = new Map(Ot.map((e) => [e.id, e])), zt = new Map([...Ot].reverse().flatMap((e) => e.family ? [[e.family, e]] : []));
function Nt() {
	const e = Le.find((e) => null != e.countAxis);
	if (e) return e.grid;
	const t = [...je].sort((e, t) => t.epochSeconds - e.epochSeconds)[0];
	if (!t) throw new Error("ontology declares no epoch grids");
	return t.id;
}
function jt(e) {
	return t = function(e) {
		if (!e) return Nt();
		const t = Pt.get(e);
		if (t) return t.displayGrid;
		const n = Kt(e);
		switch (n.family) {
			case "angle_hasib":
			case "lstm": {
				const e = n.scorer ?? n.lstmModel;
				return (e ? Pt.get(e) ?? zt.get(e) : void 0)?.displayGrid ?? Nt();
			}
			case "count_hasib":
			case "consensus":
			case "unknown": return Nt();
		}
	}(e), function(e) {
		const t = Rt.get(e);
		if (!t) throw new Error(`unknown epoch grid: ${e}`);
		return t;
	}(t).epochSeconds;
	var t;
}
function Lt(e) {
	if (!e) return !1;
	const t = Pt.get(e);
	return t ? "angle_spt" === t.execution : "angle_hasib" === Kt(e).family;
}
Math.max(...je.map((e) => 86400 / e.epochSeconds * 3));
const qt = W, Ht = /* @__PURE__ */ new Set([
	qt.EPOCHS_60S,
	qt.EPOCHS_5S_GGIR,
	qt.GGIR_5S_UPLOAD
]), Vt = Le.filter((e) => e.sourceSelectable).map((e) => ({
	value: e.id,
	label: e.label
})), Gt = /_(5|10|15|20|30)sec\.csv$/i, Ft = /RAW\.csv$/i;
function Ut(e) {
	return !!Ft.test(e) && e.replace(/\.csv$/i, "").endsWith("RAW");
}
function Bt(e) {
	const t = e.source_type ?? e.sourceType;
	if (t) return t;
	const n = e.metadata_json ?? {}, i = n.type;
	if ("gt3x" === i) return qt.GT3X_BINARY;
	if ("geneactiv_bin" === i) return qt.GENEACTIV_BIN;
	if ("raw_geneactiv" === i) return qt.GENEACTIV_RAW_CSV;
	if ("actigraph_raw" === i) return qt.ACTIGRAPH_RAW_CSV;
	if ("actlumus" === i) return qt.ACTLUMUS_TXT;
	if ("acttrust" === i) return qt.ACTTRUST_TXT;
	const a = (e.filename ?? "").toLowerCase();
	if (a.endsWith(".gt3x")) return qt.GT3X_BINARY;
	if (a.endsWith(".bin")) return qt.GENEACTIV_BIN;
	if (Ut(e.filename ?? "")) return qt.ACTIGRAPH_RAW_CSV;
	if (a.endsWith("_60sec.csv")) return qt.EPOCHS_60S;
	if (a.endsWith("_5sec_ggir.csv")) return qt.GGIR_5S_UPLOAD;
	if (a.endsWith(".rdata") || a.endsWith(".rda")) return qt.GGIR_5S_UPLOAD;
	if (Gt.test(a)) return qt.ACTIGRAPH_EPOCHED_CSV;
	const r = n.epoch_length_seconds;
	if (60 === r) return qt.EPOCHS_60S;
	if (5 === r) return qt.EPOCHS_5S_GGIR;
	if ("raw" === e.status) {
		if (Ut(e.filename ?? "")) return qt.ACTIGRAPH_RAW_CSV;
		if (a.endsWith(".csv")) return qt.GENEACTIV_RAW_CSV;
	}
	return "gt3x" === e.devicePreset ? qt.GT3X_BINARY : "geneactiv" !== e.devicePreset || a.endsWith("_60sec.csv") ? (e.epochLengthSeconds, qt.EPOCHS_60S) : qt.GENEACTIV_RAW_CSV;
}
function Wt(e) {
	return null != e && !function(e) {
		return Ht.has(e);
	}(e);
}
const Yt = {
	[qt.GT3X_BINARY]: [[qt.EPOCHS_60S, "60 s"], [qt.EPOCHS_5S_GGIR, "5 s GGIR"]],
	[qt.ACTIGRAPH_RAW_CSV]: [
		[qt.ACTIGRAPH_RAW_CSV, "Raw"],
		[qt.EPOCHS_60S, "60 s"],
		[qt.EPOCHS_5S_GGIR, "5 s GGIR"]
	],
	[qt.GENEACTIV_BIN]: [[qt.EPOCHS_60S, "60 s"], [qt.EPOCHS_5S_GGIR, "5 s GGIR"]],
	[qt.GENEACTIV_RAW_CSV]: [[qt.EPOCHS_60S, "60 s"], [qt.EPOCHS_5S_GGIR, "5 s GGIR"]],
	[qt.EPOCHS_60S]: [[qt.EPOCHS_60S, "60 s"]],
	[qt.ACTIGRAPH_EPOCHED_CSV]: [[qt.EPOCHS_60S, "60 s"]],
	[qt.ACTLUMUS_TXT]: [[qt.EPOCHS_60S, "60 s"]],
	[qt.ACTTRUST_TXT]: [[qt.EPOCHS_60S, "60 s"]],
	[qt.EPOCHS_5S_GGIR]: [[qt.EPOCHS_5S_GGIR, "5 s GGIR"]],
	[qt.GGIR_5S_UPLOAD]: [[qt.GGIR_5S_UPLOAD, "5 s GGIR"]]
};
function $t(e, t, n = /* @__PURE__ */ new Set(), i = 60) {
	const a = 30 === i ? "30 s" : "60 s";
	return (Yt[t] ?? Yt[qt.EPOCHS_60S]).map(([t, i]) => ({
		file_id: e,
		source_type: t,
		label: t === qt.EPOCHS_60S ? a : i,
		available: !n.has(t)
	}));
}
function Xt(e) {
	return !!e && (!!s(e) || Array.isArray(e.sleepMarkers) && e.sleepMarkers.length > 0);
}
function Zt(e, t, n, i) {
	return !(!e || e.fileId !== t || e.date !== n) && i.length > 0 && i.length === e.sleepMarkers.length && i.every((t, n) => {
		const i = e.sleepMarkers[n];
		return void 0 !== i && t.onsetTimestamp === i.onsetTimestamp && t.offsetTimestamp === i.offsetTimestamp && t.markerType === i.markerType;
	});
}
function Qt(e) {
	return (e?.nonwearMarkers?.some((e) => null != e.startTimestamp && null != e.endTimestamp) ?? !1) || (e?.explicitNoNonwear ?? !1);
}
function Jt(e) {
	const t = /* @__PURE__ */ new Set();
	for (const i of Array.isArray(e.sleepMarkers) ? e.sleepMarkers : []) "auto" === i.source && void 0 !== i.settingsHash && t.add(i.settingsHash);
	const n = e.sleepPeriodDetectionConfig?.haspt_variant;
	return {
		id: e.id,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm,
		detectionRule: e.detectionRule ?? null,
		autoSettingsHashes: [...t],
		hasptVariant: "string" == typeof n ? n : null,
		lastModifiedAt: e.lastModifiedAt,
		scored: Xt(e),
		nonwearDecided: Qt(e),
		nonwearSpans: JSON.stringify((Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : []).flatMap((e) => null != e.startTimestamp && null != e.endTimestamp ? [[e.startTimestamp, e.endTimestamp]] : []))
	};
}
function en(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (null == n.id) continue;
		let e = t.get(n.fileId);
		e || t.set(n.fileId, e = []), e.push(Jt(n));
	}
	return [...t].map(([e, t]) => ({
		fileId: e,
		rows: t
	}));
}
function tn() {
	if ("undefined" != typeof crypto && "function" == typeof crypto.randomUUID) return crypto.randomUUID();
	const e = /* @__PURE__ */ new Uint8Array(16);
	crypto.getRandomValues(e);
	const t = e[6] ?? 0, n = e[8] ?? 0;
	e[6] = 15 & t | 64, e[8] = 63 & n | 128;
	const i = [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
	return `${i.slice(0, 8)}-${i.slice(8, 12)}-${i.slice(12, 16)}-${i.slice(16, 20)}-${i.slice(20)}`;
}
function nn(e) {
	e.on("versionchange", (t) => {
		if (null !== t.newVersion) return async function() {
			try {
				const { useSleepScoringStore: e, flushSaveWithTimeout: t } = await import("./store-B5F9spZt.js").then((e) => e.r), { isDirty: n, _flushSave: i } = e.getState();
				n && i && await t(i);
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
var an = t({
	DIARY_CLOCK_KEY_RENAMES: () => dn,
	DIARY_DIRTY_PARTICIPANT_PREFIX: () => ln,
	FILE_DIARY_BINDING_INDEX: () => on,
	FILE_DIARY_PARTICIPANT_INDEX: () => rn,
	FILE_DIARY_SOURCE_INDEX: () => sn,
	LATEST_SCHEMA_VERSION: () => 45,
	SleepScoringDB: () => yn,
	UNCACHED_INDEX_SPEC_PARSER: () => mn,
	isCompletedFileRecord: () => cn,
	memoizeIndexSpecParsing: () => hn,
	renameDiaryClockKeysInPlace: () => pn,
	takeActiwareFileData: () => fn
});
const rn = "diaryParticipantKey", sn = "diarySourceKeys", on = "[id+source+diaryParticipantKey]", ln = "diary-dirty:";
function cn(e) {
	return "incomplete" !== e.ingestState;
}
const un = new Set(Object.keys(i).filter((e) => i[e].nightDecision)), dn = [
	["bedTime", "diaryInBedTime"],
	["lightsOut", "diaryOnsetTime"],
	["wakeTime", "diaryWakeTime"],
	["gotUp", "diaryOutOfBedTime"]
];
function pn(e) {
	let t = !1;
	for (const [n, i] of dn) Object.hasOwn(e, n) && (Object.hasOwn(e, i) || (e[i] = e[n]), Reflect.deleteProperty(e, n), t = !0);
	return t;
}
function fn(e) {
	const { actiwareIntervals: t, actiwareStatistics: n, actiwareStatisticsNeedsRecompute: i, actiwareSleepWake: a, actiwareRecording: r, actiwareWakeThreshold: s, oakleyThreshold: o } = e;
	delete e.actiwareIntervals, delete e.actiwareStatistics, delete e.actiwareStatisticsNeedsRecompute, delete e.actiwareSleepWake, delete e.actiwareRecording, delete e.actiwareWakeThreshold, delete e.oakleyThreshold;
	const l = {
		...t ? { actiwareIntervals: t } : {},
		...n ? { actiwareStatistics: n } : {},
		...null != i ? { actiwareStatisticsNeedsRecompute: i } : {},
		...a ? { actiwareSleepWake: a } : {},
		...r ? { actiwareRecording: r } : {},
		...null != s ? { actiwareWakeThreshold: s } : {},
		...null != o ? { oakleyThreshold: o } : {}
	};
	return Object.keys(l).length > 0 ? l : null;
}
const mn = Symbol.for("sleep-scoring.dexie.uncached-parse-index-syntax");
function hn(e) {
	const t = Object.getPrototypeOf(e.Version.prototype), n = Reflect.get(t, "_parseIndexSyntax");
	if (n[mn]) return;
	const i = /* @__PURE__ */ new Map(), a = function(e) {
		let t = i.get(e);
		return t || (t = n.call(this, e), i.set(e, t)), t.map((e) => ({
			...e,
			keyPath: Array.isArray(e.keyPath) ? [...e.keyPath] : e.keyPath
		}));
	};
	a[mn] = n, t._parseIndexSyntax = a;
}
var yn = class extends u {
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
	ggirScorerReviews;
	actiwareStatisticsInputs;
	physicalActivityFileSummaries;
	markerProvenance;
	actiwareFileData;
	placementResults;
	constructor(e = "SleepScoringDB") {
		super(e), hn(this), this.version(1).stores({
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
			for (const i of t) {
				const t = new Float64Array(i.timestamps);
				if (t.length > 0 && (t[0] ?? 0) > 1e10) {
					const n = new Float64Array(t.length);
					for (let e = 0; e < t.length; e++) n[e] = (t[e] ?? 0) / 1e3;
					await e.table("activityDays").put({
						...i,
						timestamps: n.buffer
					});
				}
			}
			const n = await e.table("markers").toArray();
			for (const i of n) {
				let t = !1;
				const n = i.sleepMarkers?.map((e) => {
					const n = null != e.onsetTimestamp && e.onsetTimestamp > 1e10, i = null != e.offsetTimestamp && e.offsetTimestamp > 1e10;
					return n || i ? (t = !0, {
						...e,
						onsetTimestamp: n ? (e.onsetTimestamp ?? 0) / 1e3 : e.onsetTimestamp,
						offsetTimestamp: i ? (e.offsetTimestamp ?? 0) / 1e3 : e.offsetTimestamp
					}) : e;
				}) ?? [], a = i.nonwearMarkers?.map((e) => {
					const n = null != e.startTimestamp && e.startTimestamp > 1e10, i = null != e.endTimestamp && e.endTimestamp > 1e10;
					return n || i ? (t = !0, {
						...e,
						startTimestamp: n ? (e.startTimestamp ?? 0) / 1e3 : e.startTimestamp,
						endTimestamp: i ? (e.endTimestamp ?? 0) / 1e3 : e.endTimestamp
					}) : e;
				}) ?? [];
				t && await e.table("markers").put({
					...i,
					sleepMarkers: n,
					nonwearMarkers: a
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
			for (const i of t) {
				if (i.sourceType) continue;
				const t = Bt({
					filename: i.filename,
					devicePreset: i.devicePreset,
					epochLengthSeconds: i.epochLengthSeconds
				});
				await e.table("files").put({
					...i,
					sourceType: t
				});
			}
			const n = await e.table("markers").toArray();
			for (const i of n) "string" == typeof i.algorithm && i.algorithm.length > 0 || await e.table("markers").put({
				...i,
				algorithm: N
			});
		});
		const t = G.SADEH_1994_ACTILIFE;
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
			const n = await e.table("markers").toArray(), i = (/* @__PURE__ */ new Date()).toISOString(), a = /* @__PURE__ */ new Map(), r = [], s = [];
			for (const o of n) {
				const e = "string" == typeof o.algorithm && o.algorithm.length > 0 ? o.algorithm : t, n = "__legacy__" === e ? t : e, l = `${o.fileId}:${o.date}:${o.username}:${n}`;
				let c = a.get(l);
				c || (c = tn(), a.set(l, c), r.push({
					sessionId: c,
					fileId: o.fileId,
					date: o.date,
					username: o.username,
					algorithm: n,
					startedAt: i,
					syncStatus: "pending",
					contentHash: "",
					lastModifiedAt: i
				})), s.push({
					...o,
					scoringSessionId: c
				});
			}
			s.length > 0 && await e.table("markers").bulkPut(s), r.length > 0 && await e.table("scoringSessions").bulkPut(r);
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
			const t = e.table("files"), n = await t.where("sourceType").equals("epochs_60s").toArray(), i = [];
			for (const a of n) {
				const { sourceType: e, ...n } = a, r = Bt(n);
				"epochs_60s" !== r && i.push(t.update(a.id, { sourceType: r }));
			}
			await Promise.all(i);
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
			const t = e.table("files"), n = {
				raw_csv: "geneactiv_raw_csv",
				actigraph_counts_csv: "actigraph_epoched_csv"
			}, i = [];
			for (const [a, r] of Object.entries(n)) {
				const e = await t.where("sourceType").equals(a).toArray();
				for (const n of e) i.push(t.update(n.id, { sourceType: r }));
			}
			await Promise.all(i);
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
			const t = e.table("markers"), n = await t.toArray(), i = [];
			for (const a of n) a.detectionRule || i.push(t.update(a.id, { detectionRule: j }));
			await Promise.all(i);
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
			const t = pn, n = (n) => e.table(n).toCollection().modify((e) => {
				t(e);
			});
			await Promise.all([n("diaryEntries"), n("stagedDiaryEntries")]), await e.table("walLog").toCollection().modify((e) => {
				const n = e.payload;
				if (null === n || "object" != typeof n) return;
				const i = n.entry;
				null !== i && "object" == typeof i && t(i);
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
			const t = e.table("diaryImportSessions"), n = e.table("diaryImportSessionBytes"), i = await t.toArray(), a = [];
			for (const r of i) {
				const e = r.sourceSha256;
				if ("string" != typeof e) continue;
				const t = r.sourceBytes;
				t instanceof ArrayBuffer && a.push({
					sourceSha256: e,
					sizeBytes: "number" == typeof r.sizeBytes ? r.sizeBytes : t.byteLength,
					sourceBytes: t
				}), delete r.sourceBytes;
			}
			await n.bulkPut(a), await t.bulkPut(i);
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
			const t = e.table("activityDays"), n = e.table("scoredVariantMasks");
			for (const i of await t.toCollection().primaryKeys()) {
				let e;
				await t.where(":id").equals(i).modify((t) => {
					null == t.scoredVariantResults && void 0 === t.scoredVariantDiaryFingerprint || (e = {
						fileId: t.fileId,
						date: t.date,
						masks: t.scoredVariantResults ?? {},
						...void 0 !== t.scoredVariantDiaryFingerprint ? { diaryFingerprint: t.scoredVariantDiaryFingerprint } : {}
					}), delete t.scoredVariantResults, delete t.scoredVariantDiaryFingerprint;
				}), e && await n.put(e);
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
			const t = e.table("files"), n = e.table("actiwareStatisticsInputs");
			for (const i of await t.toCollection().primaryKeys()) {
				let e;
				await t.where(":id").equals(i).modify((t) => {
					t.actiwareStatisticsInput && (e = {
						fileId: i,
						input: t.actiwareStatisticsInput
					}), delete t.actiwareStatisticsInput;
				}), e && await n.put(e);
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
			const t = en(await e.table("markers").toArray());
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
			const t = e.table("files"), n = e.table("actiwareFileData");
			for (const i of await t.toCollection().primaryKeys()) {
				let e;
				await t.where(":id").equals(i).modify((t) => {
					const n = fn(t);
					n && (e = {
						fileId: i,
						...n
					}), null == t.sourceEpochSeconds && n?.actiwareSleepWake && (t.sourceEpochSeconds = n.actiwareSleepWake.epochSeconds);
				}), e && await n.put(e);
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
			await t.clear(), await t.bulkPut(en(await e.table("markers").toArray()));
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
			const t = e.table("files"), n = e.table("actiwareFileData");
			for (const i of await t.toCollection().primaryKeys()) {
				const e = await t.get(i);
				if (!e) continue;
				const a = fn(e);
				if (a) {
					const r = await n.get(i);
					await t.put(e), await n.put({
						fileId: i,
						...a,
						...r
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
			await e.table("auditLog").each((e) => {
				un.has(r(e.action)) && t.add(`${String(e.fileId)}|${e.analysisDate}|${e.username}`);
			});
			const n = e.table("markers"), i = await n.filter((e) => "auto_score" !== e.username && !s(e) && !e.explicitNoNonwear && !e.needsConsensus && Array.isArray(e.sleepMarkers) && e.sleepMarkers.length > 0 && e.sleepMarkers.every((e) => "auto" === e.source && !e.edited) && (!Array.isArray(e.nonwearMarkers) || 0 === e.nonwearMarkers.length) && !t.has(`${String(e.fileId)}|${e.date}|${e.username}`)).toArray(), a = /* @__PURE__ */ new Set();
			for (const r of i) {
				const e = await n.where("[fileId+date+username+algorithm+detectionRule]").equals([
					r.fileId,
					r.date,
					"auto_score",
					r.algorithm ?? "",
					r.detectionRule ?? ""
				]).primaryKeys();
				await n.bulkDelete(e), await n.update(r.id, { username: "auto_score" }), a.add(r.fileId);
			}
			a.size > 0 && await e.table("markerProvenance").bulkPut(en(await n.where("fileId").anyOf([...a]).toArray()));
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
			const t = e.table("ggirResultsBundles"), n = e.table("files");
			for (const i of await t.toCollection().primaryKeys()) {
				const e = await t.get(i), a = crypto.randomUUID();
				await n.update(i, { ggirBundleRevision: a }), e?.reviewsByScorer && (delete e.reviewsByScorer, await t.put(e));
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
				e.diaryParticipantKey = fe(e);
			});
		});
		const n = (e) => [.../* @__PURE__ */ new Set([...me({ filename: e }), oe(e)])];
		this.version(41).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash, diaryParticipantKey, *diarySourceKeys, [id+source+diaryParticipantKey]",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt, [fileId+analysisDate]",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId, *diarySourceKeys"
		});
		const i = (e, t) => {
			("versionchange" !== t.idbtrans.mode || t.idbtrans.objectStoreNames.contains("diaryBindingDirty")) && t.idbtrans.objectStore("diaryBindingDirty").put({ key: "number" == typeof e ? e : ln + e });
		}, l = (e, t) => {
			e.diaryParticipantKey = fe(e), e.diarySourceKeys = me(e), "local" === e.source && i(e.diaryParticipantKey, t);
		};
		this.version(42).stores({ diaryBindingDirty: "key" }).upgrade(async (e) => {
			const t = e.table("projectMeta").where("key").between(ln, "diary-dirty:￿", !0, !0);
			await e.table("diaryBindingDirty").bulkPut(await t.toArray()), await t.delete(), await e.table("files").toCollection().modify((t) => {
				l(t, e);
			}), await e.table("stagedDiaryEntries").toCollection().modify((t) => {
				t.diarySourceKeys = n(t.sourceKey ??= t.normalizedSourceKey), i(t.normalizedSourceKey, e);
			});
		}), this.version(43).stores({ files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash, diaryParticipantKey, *diarySourceKeys, [id+source+diaryParticipantKey], aw5RecordingKey" }), this.version(44).upgrade(async (e) => {
			const t = e.table("markers");
			await t.toCollection().modify((e) => {
				o(e);
			}), await e.table("placementResults").toCollection().modify((e) => {
				e.byDate = a(e.byDate);
			});
			const n = e.table("markerProvenance");
			await n.clear(), await n.bulkPut(en(await t.toArray()));
		}), this.version(45).stores({ diaryEntries: "++id, &[fileId+analysisDate], fileId, analysisDate" }), this.use({
			stack: "dbcore",
			name: "diary-dirty",
			create: (e) => ({
				...e,
				transaction: (t, n, i) => e.transaction("readwrite" === n && t.some((e) => [
					"files",
					"stagedDiaryEntries",
					"diaryEntries",
					"diaryOccurrences"
				].includes(e)) ? [.../* @__PURE__ */ new Set([...t, "diaryBindingDirty"])] : t, n, i)
			})
		}), this.files.hook("creating", (e, t, n) => {
			l(t, n);
		}), this.files.hook("updating", (e, t, n, a) => {
			const r = {
				...n,
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
			].some((t) => t in e && JSON.stringify(n[t]) !== JSON.stringify(r[t])) && ("local" === n.source && i(fe(n), a), "local" === r.source && i(fe(r), a)), {
				diaryParticipantKey: fe(r),
				diarySourceKeys: me(r)
			};
		}), this.files.hook("deleting", (e, t, n) => {
			"local" === t.source && i(fe(t), n), n.idbtrans.objectStore("diaryBindingDirty").delete(e);
		}), this.stagedDiaryEntries.hook("creating", (e, t, a) => {
			t.diarySourceKeys = n(t.sourceKey), i(t.normalizedSourceKey, a);
		}), this.stagedDiaryEntries.hook("updating", (e, t, a, r) => {
			if (a.sourceKey || e.sourceKey) return i(a.normalizedSourceKey, r), i(e.normalizedSourceKey ?? a.normalizedSourceKey, r), { diarySourceKeys: n(e.sourceKey ?? a.sourceKey) };
		}), this.stagedDiaryEntries.hook("deleting", (e, t, n) => {
			i(t.normalizedSourceKey, n);
		}), this.diaryEntries.hook("creating", (e, t, n) => {
			i(t.fileId, n);
		}), this.diaryEntries.hook("updating", (e, t, n, a) => {
			i(n.fileId, a), void 0 !== e.fileId && i(e.fileId, a);
		}), this.diaryEntries.hook("deleting", (e, t, n) => {
			i(t.fileId, n);
		});
		const c = (e, t, n) => {
			i(t.normalizedSourceKey, n), null !== t.fileId && i(t.fileId, n);
		};
		this.diaryOccurrences.hook("creating", c), this.diaryOccurrences.hook("updating", (e, t, n, i) => {
			c(0, n, i), c(0, {
				...n,
				...e
			}, i);
		}), this.diaryOccurrences.hook("deleting", c), this.studySettings.hook("reading", V), nn(this);
	}
};
export { Qe as $, k as $t, ut as A, ne as At, Ve as B, B as Bt, wt as C, Ee as Ct, st as D, ve as Dt, _t as E, pe as Et, nt as F, Ie as Ft, lt as G, Z as Gt, Ge as H, Y as Ht, Be as I, ce as It, dt as J, ee as Jt, It as K, Q as Kt, St as L, G as Lt, Ye as M, Ae as Mt, Je as N, ke as Nt, et as O, _e as Ot, pt as P, be as Pt, it as Q, L as Qt, gt as R, F as Rt, bt as S, Se as St, rt as T, me as Tt, We as U, $ as Ut, Ue as V, W as Vt, ft as W, X as Wt, mt as X, N as Xt, at as Y, te as Yt, $e as Z, j as Zt, $t as _, Ke as _t, yn as a, D as an, Dt as at, Lt as b, ye as bt, nn as c, C as cn, Pe as ct, Jt as d, P as dn, Oe as dt, S as en, Ze as et, Xt as f, z as fn, qe as ft, Bt as g, De as gt, qt as h, Ce as ht, sn as i, M as in, Ct as it, ct as j, se as jt, tt as k, oe as kt, tn as l, w as ln, ze as lt, Vt as m, u as mn, Me as mt, on as n, K as nn, yt as nt, cn as o, R as on, kt as ot, Zt as p, O as pn, Ne as pt, ht as q, J as qt, rn as r, T as rn, xt as rt, an as s, E as sn, At as st, ln as t, x as tn, vt as tt, Qt as u, A as un, He as ut, Wt as v, Te as vt, Xe as w, fe as wt, Kt as x, he as xt, jt as y, Re as yt, Fe as z, U as zt };
