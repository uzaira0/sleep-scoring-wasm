import { a as e, l as t, s as n } from "./ggir-results-types-WB8axvb-.js";
import { c as i, i as r, n as a, o as s, s as o } from "./legacy-invalid-night-BxvRkrkV.js";
var l = t(e((e, t) => {
	var n = e, i = function() {
		var e = function(t, n) {
			return (e = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e, t) {
				e.__proto__ = t;
			} : function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			}))(t, n);
		}, t = function() {
			return (t = Object.assign || function(e) {
				for (var t, n = 1, i = arguments.length; n < i; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e;
			}).apply(this, arguments);
		};
		function n(e, t, n) {
			if (n || 2 === arguments.length) for (var i, r = 0, a = t.length; r < a; r++) !i && r in t || ((i = i || Array.prototype.slice.call(t, 0, r))[r] = t[r]);
			return e.concat(i || Array.prototype.slice.call(t));
		}
		var i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global, r = Object.keys, a = Array.isArray;
		function s(e, t) {
			return "object" == typeof t && r(t).forEach(function(n) {
				e[n] = t[n];
			}), e;
		}
		"undefined" == typeof Promise || i.Promise || (i.Promise = Promise);
		var o = Object.getPrototypeOf, l = {}.hasOwnProperty;
		function c(e, t) {
			return l.call(e, t);
		}
		function u(e, t) {
			"function" == typeof t && (t = t(o(e))), ("undefined" == typeof Reflect ? r : Reflect.ownKeys)(t).forEach(function(n) {
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
		var m = Object.getOwnPropertyDescriptor, g = [].slice;
		function y(e, t, n) {
			return g.call(e, t, n);
		}
		function h(e, t) {
			return t(e);
		}
		function _(e) {
			if (!e) throw new Error("Assertion Failed");
		}
		function v(e) {
			i.setImmediate ? setImmediate(e) : setTimeout(e, 0);
		}
		function I(e, t) {
			if ("string" == typeof t && c(e, t)) return e[t];
			if (!t) return e;
			if ("string" != typeof t) {
				for (var n = [], i = 0, r = t.length; i < r; ++i) {
					var a = I(e, t[i]);
					n.push(a);
				}
				return n;
			}
			var s, o = t.indexOf(".");
			return -1 === o || null == (s = e[t.substr(0, o)]) ? void 0 : I(s, t.substr(o + 1));
		}
		function b(e, t, n) {
			if (e && void 0 !== t && (!("isFrozen" in Object) || !Object.isFrozen(e))) if ("string" != typeof t && "length" in t) {
				_("string" != typeof n && "length" in n);
				for (var i = 0, r = t.length; i < r; ++i) b(e, t[i], n[i]);
			} else if (-1 !== (s = t.indexOf("."))) {
				var s, o = t.substr(0, s);
				if ("" === (s = t.substr(s + 1))) void 0 === n ? a(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n;
				else {
					var l = e[o];
					if (!l || !c(e, o)) {
						if (void 0 === n) return;
						l = e[o] = {};
					}
					b(l, s, n);
				}
			} else void 0 === n ? a(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
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
		function R(e) {
			return E = /* @__PURE__ */ new WeakMap(), e = function e(t) {
				if (!t || "object" != typeof t) return t;
				var n = E.get(t);
				if (n) return n;
				if (a(t)) {
					n = [], E.set(t, n);
					for (var i = 0, r = t.length; i < r; ++i) n.push(e(t[i]));
				} else if (A.has(t.constructor)) n = t;
				else {
					var s, l = o(t);
					for (s in n = l === Object.prototype ? {} : Object.create(l), E.set(t, n), t) c(t, s) && (n[s] = e(t[s]));
				}
				return n;
			}(e), E = null, e;
		}
		var C = {}.toString;
		function D(e) {
			return C.call(e).slice(8, -1);
		}
		var M = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator", T = "symbol" == typeof M ? function(e) {
			var t;
			return null != e && (t = e[M]) && t.apply(e);
		} : function() {
			return null;
		};
		function K(e, t) {
			0 <= (t = e.indexOf(t)) && e.splice(t, 1);
		}
		var G = {};
		function O(e) {
			var t, n, i, r;
			if (1 === arguments.length) {
				if (a(e)) return e.slice();
				if (this === G && "string" == typeof e) return [e];
				if (r = T(e)) for (n = []; !(i = r.next()).done;) n.push(i.value);
				else {
					if (null == e) return [e];
					if ("number" != typeof (t = e.length)) return [e];
					for (n = new Array(t); t--;) n[t] = e[t];
				}
			} else for (t = arguments.length, n = new Array(t); t--;) n[t] = arguments[t];
			return n;
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
		]), z = {
			VersionChanged: "Database version changed by other database connection",
			DatabaseClosed: "Database has been closed",
			Abort: "Transaction aborted",
			TransactionInactive: "Transaction has already completed or failed",
			MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
		};
		function j(e, t) {
			this.name = e, this.message = t;
		}
		function L(e, t) {
			return e + ". Errors: " + Object.keys(t).map(function(e) {
				return t[e].toString();
			}).filter(function(e, t, n) {
				return n.indexOf(e) === t;
			}).join("\n");
		}
		function q(e, t, n, i) {
			this.failures = t, this.failedKeys = i, this.successCount = n, this.message = L(e, t);
		}
		function F(e, t) {
			this.name = "BulkError", this.failures = Object.keys(t).map(function(e) {
				return t[e];
			}), this.failuresByPos = t, this.message = L(e, this.failures);
		}
		f(j).from(Error).extend({ toString: function() {
			return this.name + ": " + this.message;
		} }), f(q).from(j), f(F).from(j);
		var H = N.reduce(function(e, t) {
			return e[t] = t + "Error", e;
		}, {}), V = j, B = N.reduce(function(e, t) {
			var n = t + "Error";
			function i(e, i) {
				this.name = n, e ? "string" == typeof e ? (this.message = "".concat(e).concat(i ? "\n " + i : ""), this.inner = i || null) : "object" == typeof e && (this.message = "".concat(e.name, " ").concat(e.message), this.inner = e) : (this.message = z[t] || n, this.inner = null);
			}
			return f(i).from(V), e[t] = i, e;
		}, {}), U = (B.Syntax = SyntaxError, B.Type = TypeError, B.Range = RangeError, k.reduce(function(e, t) {
			return e[t + "Error"] = B[t], e;
		}, {}));
		function W() {}
		function $(e) {
			return e;
		}
		function Y(e, t) {
			return null == e || e === $ ? t : function(n) {
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
				var n = e.apply(this, arguments), i = (void 0 !== n && (arguments[0] = n), this.onsuccess), r = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return i && (this.onsuccess = this.onsuccess ? X(i, this.onsuccess) : i), r && (this.onerror = this.onerror ? X(r, this.onerror) : r), void 0 !== a ? a : n;
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
				var i = e.apply(this, arguments), r = (s(n, i), n = this.onsuccess, this.onerror), a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
				return n && (this.onsuccess = this.onsuccess ? X(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? X(r, this.onerror) : r), void 0 === i ? void 0 === a ? void 0 : a : s(i, a);
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
					for (var i = this, r = arguments.length, a = new Array(r); r--;) a[r] = arguments[r];
					return n.then(function() {
						return t.apply(i, a);
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
			].indexOf(t) && (e[t + "Error"] = B[t]), e;
		}, {})).ModifyError = q, k.DexieError = j, k.BulkError = F;
		var ne = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
		function ie(e) {
			ne = e;
		}
		var re = {}, ae = "undefined" == typeof Promise ? [] : (N = Promise.resolve(), "undefined" != typeof crypto && crypto.subtle ? [
			ae = crypto.subtle.digest("SHA-512", new Uint8Array([0])),
			o(ae),
			N
		] : [
			N,
			o(N),
			N
		]), se = (N = ae[0], (se = ae[1]) && se.then), oe = N && N.constructor, le = !!ae[2], ce = function(e, t) {
			he.push([e, t]), de && (queueMicrotask(Ee), de = !1);
		}, ue = !0, de = !0, pe = [], fe = [], me = $, ge = {
			id: "global",
			global: !0,
			ref: 0,
			unhandleds: [],
			onunhandled: W,
			pgp: !1,
			env: {},
			finalize: W
		}, ye = ge, he = [], _e = 0, ve = [];
		function Ie(e) {
			if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
			this._listeners = [], this._lib = !1;
			var t = this._PSD = ye;
			if ("function" != typeof e) {
				if (e !== re) throw new TypeError("Not a function");
				this._state = arguments[1], this._value = arguments[2], !1 === this._state && Se(this, this._value);
			} else this._state = null, this._value = null, ++t.ref, function e(t, n) {
				try {
					n(function(n) {
						if (null === t._state) {
							if (n === t) throw new TypeError("A promise cannot be resolved with itself.");
							var i = t._lib && Re();
							n && "function" == typeof n.then ? e(t, function(e, t) {
								n instanceof Ie ? n._then(e, t) : n.then(e, t);
							}) : (t._state = !0, t._value = n, xe(t)), i && Ce();
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
					var r = this, a = !e.global && (e !== ye || t !== Ne), s = a && !qe(), o = new Ie(function(t, o) {
						ke(r, new we(We(n, e, a, s), We(i, e, a, s), t, o, e));
					});
					return this._consoleTask && (o._consoleTask = this._consoleTask), o;
				}
				return n.prototype = re, n;
			},
			set: function(e) {
				p(this, "then", e && e.prototype === re ? be : {
					get: function() {
						return e;
					},
					set: be.set
				});
			}
		};
		function we(e, t, n, i, r) {
			this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = i, this.psd = r;
		}
		function Se(e, t) {
			var n, i;
			fe.push(t), null === e._state && (n = e._lib && Re(), t = me(t), e._state = !1, e._value = t, i = e, pe.some(function(e) {
				return e._value === i._value;
			}) || pe.push(i), xe(e), n) && Ce();
		}
		function xe(e) {
			var t = e._listeners;
			e._listeners = [];
			for (var n = 0, i = t.length; n < i; ++n) ke(e, t[n]);
			var r = e._PSD;
			--r.ref || r.finalize(), 0 === _e && (++_e, ce(function() {
				0 == --_e && De();
			}, []));
		}
		function ke(e, t) {
			if (null === e._state) e._listeners.push(t);
			else {
				var n = e._state ? t.onFulfilled : t.onRejected;
				if (null === n) return (e._state ? t.resolve : t.reject)(e._value);
				++t.psd.ref, ++_e, ce(Ae, [
					n,
					e,
					t
				]);
			}
		}
		function Ae(e, t, n) {
			try {
				var i, r = t._value;
				!t._state && fe.length && (fe = []), i = ne && t._consoleTask ? t._consoleTask.run(function() {
					return e(r);
				}) : e(r), t._state || -1 !== fe.indexOf(r) || ((e) => {
					for (var t = pe.length; t;) if (pe[--t]._value === e._value) return pe.splice(t, 1);
				})(t), n.resolve(i);
			} catch (e) {
				n.reject(e);
			} finally {
				0 == --_e && De(), --n.psd.ref || n.psd.finalize();
			}
		}
		function Ee() {
			Ue(ge, function() {
				Re() && Ce();
			});
		}
		function Re() {
			var e = ue;
			return de = ue = !1, e;
		}
		function Ce() {
			var e, t, n;
			do
				for (; 0 < he.length;) for (e = he, he = [], n = e.length, t = 0; t < n; ++t) {
					var i = e[t];
					i[0].apply(null, i[1]);
				}
			while (0 < he.length);
			de = ue = !0;
		}
		function De() {
			for (var e = pe, t = (pe = [], e.forEach(function(e) {
				e._PSD.onunhandled.call(null, e._value, e);
			}), ve.slice(0)), n = t.length; n;) t[--n]();
		}
		function Me(e) {
			return new Ie(re, !1, e);
		}
		function Te(e, t) {
			var n = ye;
			return function() {
				var i = Re(), r = ye;
				try {
					return Ve(n, !0), e.apply(this, arguments);
				} catch (i) {
					t && t(i);
				} finally {
					Ve(r, !1), i && Ce();
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
					return (e instanceof t ? n : Me)(e);
				}) : this.then(null, function(e) {
					return (e && e.name === t ? n : Me)(e);
				}));
			},
			finally: function(e) {
				return this.then(function(t) {
					return Ie.resolve(e()).then(function() {
						return t;
					});
				}, function(t) {
					return Ie.resolve(e()).then(function() {
						return Me(t);
					});
				});
			},
			timeout: function(e, t) {
				var n = this;
				return e < 1 / 0 ? new Ie(function(i, r) {
					var a = setTimeout(function() {
						return r(new B.Timeout(t));
					}, e);
					n.then(i, r).finally(clearTimeout.bind(null, a));
				}) : this;
			}
		}), "undefined" != typeof Symbol && Symbol.toStringTag && p(Ie.prototype, Symbol.toStringTag, "Dexie.Promise"), ge.env = Be(), u(Ie, {
			all: function() {
				var e = O.apply(null, arguments).map(Fe);
				return new Ie(function(t, n) {
					0 === e.length && t([]);
					var i = e.length;
					e.forEach(function(r, a) {
						return Ie.resolve(r).then(function(n) {
							e[a] = n, --i || t(e);
						}, n);
					});
				});
			},
			resolve: function(e) {
				return e instanceof Ie ? e : e && "function" == typeof e.then ? new Ie(function(t, n) {
					e.then(t, n);
				}) : new Ie(re, !0, e);
			},
			reject: Me,
			race: function() {
				var e = O.apply(null, arguments).map(Fe);
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
			newPSD: je,
			usePSD: Ue,
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
					return je(function(t, n) {
						var i = ye;
						i.unhandleds = [], i.onunhandled = n, i.finalize = X(function() {
							var e, i = this;
							e = function() {
								0 === i.unhandleds.length ? t() : n(i.unhandleds[0]);
							}, ve.push(function t() {
								e(), ve.splice(ve.indexOf(t), 1);
							}), ++_e, ce(function() {
								0 == --_e && De();
							}, []);
						}, i.finalize), e();
					}, t, n, i);
				});
			}
		}), oe && (oe.allSettled && p(Ie, "allSettled", function() {
			var e = O.apply(null, arguments).map(Fe);
			return new Ie(function(t) {
				0 === e.length && t([]);
				var n = e.length, i = new Array(n);
				e.forEach(function(e, r) {
					return Ie.resolve(e).then(function(e) {
						return i[r] = {
							status: "fulfilled",
							value: e
						};
					}, function(e) {
						return i[r] = {
							status: "rejected",
							reason: e
						};
					}).then(function() {
						return --n || t(i);
					});
				});
			});
		}), oe.any && "undefined" != typeof AggregateError && p(Ie, "any", function() {
			var e = O.apply(null, arguments).map(Fe);
			return new Ie(function(t, n) {
				0 === e.length && n(/* @__PURE__ */ new AggregateError([]));
				var i = e.length, r = new Array(i);
				e.forEach(function(e, a) {
					return Ie.resolve(e).then(function(e) {
						return t(e);
					}, function(e) {
						r[a] = e, --i || n(new AggregateError(r));
					});
				});
			});
		}), oe.withResolvers) && (Ie.withResolvers = oe.withResolvers);
		var Ke = {
			awaits: 0,
			echoes: 0,
			id: 0
		}, Ge = 0, Oe = [], Pe = 0, Ne = 0, ze = 0;
		function je(e, t, n, i) {
			var r = ye, a = Object.create(r);
			return a.parent = r, a.ref = 0, a.global = !1, a.id = ++ze, ge.env, a.env = le ? {
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
			} : {}, t && s(a, t), ++r.ref, a.finalize = function() {
				--this.parent.ref || this.parent.finalize();
			}, t = Ue(a, e, n, i), 0 === a.ref && a.finalize(), t;
		}
		function Le() {
			return Ke.id || (Ke.id = ++Ge), ++Ke.awaits, Ke.echoes += 100, Ke.id;
		}
		function qe() {
			return !!Ke.awaits && (0 == --Ke.awaits && (Ke.id = 0), Ke.echoes = 100 * Ke.awaits, !0);
		}
		function Fe(e) {
			return Ke.echoes && e && e.constructor === oe ? (Le(), e.then(function(e) {
				return qe(), e;
			}, function(e) {
				return qe(), Ye(e);
			})) : e;
		}
		function He() {
			var e = Oe[Oe.length - 1];
			Oe.pop(), Ve(e, !1);
		}
		function Ve(e, t) {
			var n, r, a = ye;
			(t ? !Ke.echoes || Pe++ && e === ye : !Pe || --Pe && e === ye) || queueMicrotask(t ? function(e) {
				++Ne, Ke.echoes && 0 != --Ke.echoes || (Ke.echoes = Ke.awaits = Ke.id = 0), Oe.push(ye), Ve(e, !0);
			}.bind(null, e) : He), e !== ye && (ye = e, a === ge && (ge.env = Be()), le) && (n = ge.env.Promise, r = e.env, a.global || e.global) && (Object.defineProperty(i, "Promise", r.PromiseProp), n.all = r.all, n.race = r.race, n.resolve = r.resolve, n.reject = r.reject, r.allSettled && (n.allSettled = r.allSettled), r.any) && (n.any = r.any);
		}
		function Be() {
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
		function Ue(e, t, n, i, r) {
			var a = ye;
			try {
				return Ve(e, !0), t(n, i, r);
			} finally {
				Ve(a, !1);
			}
		}
		function We(e, t, n, i) {
			return "function" != typeof e ? e : function() {
				var r = ye;
				n && Le(), Ve(t, !0);
				try {
					return e.apply(this, arguments);
				} finally {
					Ve(r, !1), i && queueMicrotask(qe);
				}
			};
		}
		function $e(e) {
			Promise === oe && 0 === Ke.echoes ? 0 === Pe ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
		}
		-1 === ("" + se).indexOf("[native code]") && (Le = qe = W);
		var Ye = Ie.reject, Xe = String.fromCharCode(65535), Ze = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Qe = "String expected.", Je = "__dbnames", et = "readonly", tt = "readwrite";
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
		function rt(e) {
			return "string" != typeof e || /\./.test(e) ? function(e) {
				return e;
			} : function(t) {
				return void 0 === t[e] && e in t && delete (t = R(t))[e], t;
			};
		}
		function at() {
			throw B.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
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
						for (var r = lt(e), a = lt(t), s = r.length, o = a.length, l = s < o ? s : o, c = 0; c < l; ++c) if (r[c] !== a[c]) return r[c] < a[c] ? -1 : 1;
						return s === o ? 0 : s < o ? -1 : 1;
					case "Array":
						for (var u = e, d = t, p = u.length, f = d.length, m = p < f ? p : f, g = 0; g < m; ++g) {
							var y = st(u[g], d[g]);
							if (0 !== y) return y;
						}
						return p === f ? 0 : p < f ? -1 : 1;
				}
			} catch (e) {}
			return NaN;
		}
		function ot(e) {
			var t = typeof e;
			return "object" != t || !ArrayBuffer.isView(e) && "ArrayBuffer" !== (t = D(e)) ? t : "binary";
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
				if (a(i)) return n(n([], a(e) ? e : [], !0), i, !0).sort();
				if ("number" == typeof i) return (Number(e) || 0) + i;
				if ("bigint" == typeof i) try {
					return BigInt(e) + i;
				} catch (e) {
					return BigInt(0) + i;
				}
				throw new TypeError("Invalid term ".concat(i));
			}
			if (void 0 !== t.remove) {
				var r = t.remove;
				if (a(r)) return a(e) ? e.filter(function(e) {
					return !r.includes(e);
				}).sort() : [];
				if ("number" == typeof r) return Number(e) - r;
				if ("bigint" == typeof r) try {
					return BigInt(e) - r;
				} catch (e) {
					return BigInt(0) - r;
				}
				throw new TypeError("Invalid subtrahend ".concat(r));
			}
			return (i = null == (i = t.replacePrefix) ? void 0 : i[0]) && "string" == typeof e && e.startsWith(i) ? t.replacePrefix[1] + e.substring(i.length) : e;
		};
		var ut = dt;
		function dt(e) {
			this["@@propmod"] = e;
		}
		function pt(e, t) {
			for (var n = r(t), i = n.length, a = !1, s = 0; s < i; ++s) {
				var o = n[s], l = t[o], c = I(e, o);
				l instanceof ut ? (b(e, o, l.execute(c)), a = !0) : c !== l && (b(e, o, l), a = !0);
			}
			return a;
		}
		mt.prototype._trans = function(e, t, n) {
			var i = this._tx || ye.trans, r = this.name, a = ne && "undefined" != typeof console && console.createTask && console.createTask("Dexie: ".concat("readonly" === e ? "read" : "write", " ").concat(this.name));
			function s(e, n, i) {
				if (i.schema[r]) return t(i.idbtrans, i);
				throw new B.NotFound("Table " + r + " not part of transaction");
			}
			var o = Re();
			try {
				var l = i && i.db._novip === this.db._novip ? i === ye.trans ? i._promise(e, s, n) : je(function() {
					return i._promise(e, s, n);
				}, {
					trans: i,
					transless: ye.transless || ye
				}) : function t(n, i, r, a) {
					if (n.idbdb && (n._state.openComplete || ye.letThrough || n._vip)) {
						var s = n._createTransaction(i, r, n._dbSchema);
						try {
							s.create(), n._state.PR1398_maxLoop = 3;
						} catch (e) {
							return e.name === H.InvalidState && n.isOpen() && 0 < --n._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), n.close({ disableAutoOpen: !1 }), n.open().then(function() {
								return t(n, i, r, a);
							})) : Ye(e);
						}
						return s._promise(i, function(e, t) {
							return je(function() {
								return ye.trans = s, a(e, t, s);
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
					if (n._state.openComplete) return Ye(new B.DatabaseClosed(n._state.dbOpenError));
					if (!n._state.isBeingOpened) {
						if (!n._state.autoOpen) return Ye(new B.DatabaseClosed());
						n.open().catch(W);
					}
					return n._state.dbReadyPromise.then(function() {
						return t(n, i, r, a);
					});
				}(this.db, e, [this.name], s);
				return a && (l._consoleTask = a, l = l.catch(function(e) {
					return Ye(e);
				})), l;
			} finally {
				o && Ce();
			}
		}, mt.prototype.get = function(e, t) {
			var n = this;
			return e && e.constructor === Object ? this.where(e).first(t) : null == e ? Ye(new B.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(t) {
				return n.core.get({
					trans: t,
					key: e
				}).then(function(e) {
					return n.hook.reading.fire(e);
				});
			}).then(t);
		}, mt.prototype.where = function(e) {
			if ("string" == typeof e) return new this.db.WhereClause(this, e);
			if (a(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
			var t = r(e);
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
				var r = t[0], o = (t = t[1], i[n]), l = e[n];
				return [r || o, r || !o ? nt(t, o && o.multi ? function(e) {
					return e = I(e, n), a(e) && e.some(function(e) {
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
			return new this.db.Collection(new this.db.WhereClause(this, a(e) ? "[".concat(e.join("+"), "]") : e));
		}, mt.prototype.reverse = function() {
			return this.toCollection().reverse();
		}, mt.prototype.mapToClass = function(t) {
			for (var n = this.db, i = this.name, r = ((this.schema.mappedClass = t).prototype instanceof at && (t = ((t) => {
				var r = o, a = t;
				if ("function" != typeof a && null !== a) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
				function s() {
					this.constructor = r;
				}
				function o() {
					return null !== t && t.apply(this, arguments) || this;
				}
				return e(r, a), r.prototype = null === a ? Object.create(a) : (s.prototype = a.prototype, new s()), Object.defineProperty(o.prototype, "db", {
					get: function() {
						return n;
					},
					enumerable: !1,
					configurable: !0
				}), o.prototype.table = function() {
					return i;
				}, o;
			})(t)), /* @__PURE__ */ new Set()), a = t.prototype; a; a = o(a)) Object.getOwnPropertyNames(a).forEach(function(e) {
				return r.add(e);
			});
			function s(e) {
				if (!e) return e;
				var n, i = Object.create(t.prototype);
				for (n in e) if (!r.has(n)) try {
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
			var n = this, i = this.schema.primKey, r = i.auto, a = i.keyPath, s = e;
			return a && r && (s = rt(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "add",
					keys: null != t ? [t] : null,
					values: [s]
				});
			}).then(function(e) {
				return e.numFailures ? Ie.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					b(e, a, t);
				} catch (t) {}
				return t;
			});
		}, mt.prototype.upsert = function(e, t) {
			var n = this, i = this.schema.primKey.keyPath;
			return this._trans("readwrite", function(r) {
				return n.core.get({
					trans: r,
					key: e
				}).then(function(a) {
					var s = null != a ? a : {};
					return pt(s, t), i && b(s, i, e), n.core.mutate({
						trans: r,
						type: "put",
						values: [s],
						keys: [e],
						upsert: !0,
						updates: {
							keys: [e],
							changeSpecs: [t]
						}
					}).then(function(e) {
						return e.numFailures ? Ie.reject(e.failures[0]) : !!a;
					});
				});
			});
		}, mt.prototype.update = function(e, t) {
			return "object" != typeof e || a(e) ? this.where(":id").equals(e).modify(t) : void 0 === (e = I(e, this.schema.primKey.keyPath)) ? Ye(new B.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t);
		}, mt.prototype.put = function(e, t) {
			var n = this, i = this.schema.primKey, r = i.auto, a = i.keyPath, s = e;
			return a && r && (s = rt(a)(e)), this._trans("readwrite", function(e) {
				return n.core.mutate({
					trans: e,
					type: "put",
					values: [s],
					keys: null != t ? [t] : null
				});
			}).then(function(e) {
				return e.numFailures ? Ie.reject(e.failures[0]) : e.lastResult;
			}).then(function(t) {
				if (a) try {
					b(e, a, t);
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
			var i = this, r = Array.isArray(t) ? t : void 0, a = (n = n || (r ? void 0 : t)) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n, s = (n = i.schema.primKey).auto;
				if ((n = n.keyPath) && r) throw new B.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
				if (r && r.length !== e.length) throw new B.InvalidArgument("Arguments objects and keys must have the same length");
				var o = e.length;
				return s = n && s ? e.map(rt(n)) : e, i.core.mutate({
					trans: t,
					type: "add",
					keys: r,
					values: s,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (0 === t) return a ? e.results : e.lastResult;
					throw new F("".concat(i.name, ".bulkAdd(): ").concat(t, " of ").concat(o, " operations failed"), n);
				});
			});
		}, mt.prototype.bulkPut = function(e, t, n) {
			var i = this, r = Array.isArray(t) ? t : void 0, a = (n = n || (r ? void 0 : t)) ? n.allKeys : void 0;
			return this._trans("readwrite", function(t) {
				var n, s = (n = i.schema.primKey).auto;
				if ((n = n.keyPath) && r) throw new B.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
				if (r && r.length !== e.length) throw new B.InvalidArgument("Arguments objects and keys must have the same length");
				var o = e.length;
				return s = n && s ? e.map(rt(n)) : e, i.core.mutate({
					trans: t,
					type: "put",
					keys: r,
					values: s,
					wantResults: a
				}).then(function(e) {
					var t = e.numFailures, n = e.failures;
					if (0 === t) return a ? e.results : e.lastResult;
					throw new F("".concat(i.name, ".bulkPut(): ").concat(t, " of ").concat(o, " operations failed"), n);
				});
			});
		}, mt.prototype.bulkUpdate = function(e) {
			var t = this, n = this.core, i = e.map(function(e) {
				return e.key;
			}), r = e.map(function(e) {
				return e.changes;
			}), a = [];
			return this._trans("readwrite", function(s) {
				return n.getMany({
					trans: s,
					keys: i,
					cache: "clone"
				}).then(function(o) {
					var l = [], c = [], u = (e.forEach(function(e, n) {
						var i = e.key, r = e.changes, s = o[n];
						if (s) {
							for (var u = 0, d = Object.keys(r); u < d.length; u++) {
								var p = d[u], f = r[p];
								if (p === t.schema.primKey.keyPath) {
									if (0 !== st(f, i)) throw new B.Constraint("Cannot update primary key in bulkUpdate()");
								} else b(s, p, f);
							}
							a.push(n), l.push(i), c.push(s);
						}
					}), l.length);
					return n.mutate({
						trans: s,
						type: "put",
						keys: l,
						values: c,
						updates: {
							keys: i,
							changeSpecs: r
						}
					}).then(function(e) {
						var n = e.numFailures, i = e.failures;
						if (0 === n) return u;
						for (var r = 0, s = Object.keys(i); r < s.length; r++) {
							var o, l = s[r], c = a[Number(l)];
							null != c && (o = i[l], delete i[l], i[c] = o);
						}
						throw new F("".concat(t.name, ".bulkUpdate(): ").concat(n, " of ").concat(u, " operations failed"), i);
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
				var i = e.numFailures, r = e.failures;
				if (0 === i) return e.lastResult;
				throw new F("".concat(t.name, ".bulkDelete(): ").concat(i, " of ").concat(n, " operations failed"), r);
			});
		};
		var ft = mt;
		function mt() {}
		function gt(e) {
			function t(t, i) {
				if (i) {
					for (var r = arguments.length, a = new Array(r - 1); --r;) a[r - 1] = arguments[r];
					return n[t].subscribe.apply(null, a), e;
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
				r(l = e).forEach(function(e) {
					var t = l[e];
					if (a(t)) o(e, l[e][0], l[e][1]);
					else {
						if ("asap" !== t) throw new B.InvalidArgument("Invalid event config");
						var n = o(e, $, function() {
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
		function ht(e, t) {
			return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
		}
		function _t(e, t) {
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
			throw new B.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
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
			var r, a, s = e.replayFilter ? nt(e.filter, e.replayFilter()) : e.filter;
			return e.or ? (r = {}, a = function(e, n, i) {
				var a, o;
				s && !s(n, i, function(e) {
					return n.stop(e);
				}, function(e) {
					return n.fail(e);
				}) || ("[object ArrayBuffer]" == (o = "" + (a = n.primaryKey)) && (o = "" + new Uint8Array(a)), c(r, o)) || (r[o] = !0, t(e, n, i));
			}, Promise.all([e.or._iterate(a, n), St(bt(e, i, n), e.algorithm, a, !e.keysOnly && e.valueMapper)])) : St(bt(e, i, n), nt(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
		}
		function St(e, t, n, i) {
			var r = Te(i ? function(e, t, r) {
				return n(i(e), t, r);
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
					}) || r(e.value, e, function(e) {
						return n = e;
					}), n();
				});
			});
		}
		kt.prototype._read = function(e, t) {
			var n = this._ctx;
			return n.error ? n.table._trans(null, Ye.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
		}, kt.prototype._write = function(e) {
			var t = this._ctx;
			return t.error ? t.table._trans(null, Ye.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
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
				var n, i = t._ctx, r = i.table.core;
				return ht(i, !0) ? r.count({
					trans: e,
					query: {
						index: It(i, r.schema),
						range: i.range
					}
				}).then(function(e) {
					return Math.min(e, i.limit);
				}) : (n = 0, wt(i, function() {
					return ++n, !1;
				}, e, r).then(function() {
					return n;
				}));
			}).then(e);
		}, kt.prototype.sortBy = function(e, t) {
			var n = e.split(".").reverse(), i = n[0], r = n.length - 1;
			function a(e, t) {
				return t ? a(e[n[t]], t - 1) : e[i];
			}
			var s = "next" === this._ctx.dir ? 1 : -1;
			function o(e, t) {
				return st(a(e, r), a(t, r)) * s;
			}
			return this.toArray(function(e) {
				return e.slice().sort(o);
			}).then(t);
		}, kt.prototype.toArray = function(e) {
			var t = this;
			return this._read(function(e) {
				var n, i, r, a = t._ctx;
				return ht(a, !0) && 0 < a.limit ? (n = a.valueMapper, i = It(a, a.table.core.schema), a.table.core.query({
					trans: e,
					limit: a.limit,
					values: !0,
					direction: "prev" === a.dir ? "prev" : void 0,
					query: {
						index: i,
						range: a.range
					}
				}).then(function(e) {
					return e = e.result, n ? e.map(n) : e;
				})) : (r = [], wt(a, function(e) {
					return r.push(e);
				}, e, a.table.core).then(function() {
					return r;
				}));
			}, e);
		}, kt.prototype.offset = function(e) {
			var t = this._ctx;
			return e <= 0 || (t.offset += e, ht(t) ? vt(t, function() {
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
			return _t(this._ctx, function(n, i, r) {
				return !e(n.value) || (i(r), t);
			}), this;
		}, kt.prototype.first = function(e) {
			return this.limit(1).toArray(function(e) {
				return e[0];
			}).then(e);
		}, kt.prototype.last = function(e) {
			return this.reverse().first(e);
		}, kt.prototype.filter = function(e) {
			var t;
			return _t(this._ctx, function(t) {
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
			if (ht(t, !0) && 0 < t.limit) return this._read(function(e) {
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
			return (t = (t = this._ctx).index && t.table.schema.idxByName[t.index]) && t.multi && (e = {}, _t(this._ctx, function(t) {
				t = t.primaryKey.toString();
				var n = c(e, t);
				return e[t] = !0, !n;
			})), this;
		}, kt.prototype.modify = function(e) {
			var t = this, n = this._ctx;
			return this._write(function(i) {
				function a(e, t) {
					var n = t.failures;
					f += e - t.numFailures;
					for (var i = 0, a = r(n); i < a.length; i++) {
						var s = a[i];
						p.push(n[s]);
					}
				}
				var s, o = "function" == typeof e ? e : function(t) {
					return pt(t, e);
				}, l = n.table.core, c = (s = l.schema.primaryKey).outbound, u = s.extractKey, d = 200, p = ((s = t.db._options.modifyChunkSize) && (d = "object" == typeof s ? s[l.name] || s["*"] || 200 : s), []), f = 0, m = [], g = e === At;
				return t.clone().primaryKeys().then(function(t) {
					var r = ht(n) && n.limit === 1 / 0 && ("function" != typeof e || g) && {
						index: n.index,
						range: n.range
					};
					return function s(p) {
						var f = Math.min(d, t.length - p), m = t.slice(p, p + f);
						return (g ? Promise.resolve([]) : l.getMany({
							trans: i,
							keys: m,
							cache: "immutable"
						})).then(function(y) {
							var h = [], _ = [], v = c ? [] : null, I = g ? m : [];
							if (!g) for (var b = 0; b < f; ++b) {
								var w = y[b], S = {
									value: R(w),
									primKey: t[p + b]
								};
								!1 !== o.call(S, S.value, S) && (null == S.value ? I.push(t[p + b]) : c || 0 === st(u(w), u(S.value)) ? (_.push(S.value), c && v.push(t[p + b])) : (I.push(t[p + b]), h.push(S.value)));
							}
							return Promise.resolve(0 < h.length && l.mutate({
								trans: i,
								type: "add",
								values: h
							}).then(function(e) {
								for (var t in e.failures) I.splice(parseInt(t), 1);
								a(h.length, e);
							})).then(function() {
								return (0 < _.length || r && "object" == typeof e) && l.mutate({
									trans: i,
									type: "put",
									keys: v,
									values: _,
									criteria: r,
									changeSpec: "function" != typeof e && e,
									isAdditionalChunk: 0 < p
								}).then(function(e) {
									return a(_.length, e);
								});
							}).then(function() {
								return (0 < I.length || r && g) && l.mutate({
									trans: i,
									type: "delete",
									keys: I,
									criteria: r,
									isAdditionalChunk: 0 < p
								}).then(function(e) {
									return ct(n.table, I, e);
								}).then(function(e) {
									return a(I.length, e);
								});
							}).then(function() {
								return t.length > p + f && s(p + d);
							});
						});
					}(0).then(function() {
						if (0 < p.length) throw new q("Error modifying one or more objects", p, f, m);
						return t.length;
					});
				});
			});
		}, kt.prototype.delete = function() {
			var e = this._ctx, t = e.range;
			return !ht(e) || e.table.schema.yProps || !e.isPrimKey && 3 !== t.type ? this.modify(At) : this._write(function(n) {
				var i = e.table.core.schema.primaryKey, r = t;
				return e.table.core.count({
					trans: n,
					query: {
						index: i,
						range: r
					}
				}).then(function(t) {
					return e.table.core.mutate({
						trans: n,
						type: "deleteRange",
						range: r
					}).then(function(e) {
						var n = e.failures;
						if (e = e.numFailures) throw new q("Could not delete some values", Object.keys(n).map(function(e) {
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
		function Rt(e, t) {
			return t < e ? -1 : e === t ? 0 : 1;
		}
		function Ct(e, t, n) {
			return (e = e instanceof Gt ? new e.Collection(e) : e)._ctx.error = new (n || TypeError)(t), e;
		}
		function Dt(e) {
			return new e.Collection(e, function() {
				return Kt("");
			}).limit(0);
		}
		function Mt(e, t, n, i) {
			var r, a, s, o, l, c, u, d = n.length;
			if (!n.every(function(e) {
				return "string" == typeof e;
			})) return Ct(e, Qe);
			function p(e) {
				r = "next" === e ? function(e) {
					return e.toUpperCase();
				} : function(e) {
					return e.toLowerCase();
				}, a = "next" === e ? function(e) {
					return e.toLowerCase();
				} : function(e) {
					return e.toUpperCase();
				}, s = "next" === e ? Et : Rt;
				var t = n.map(function(e) {
					return {
						lower: a(e),
						upper: r(e)
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
				return Tt(o[0], l[d - 1] + i);
			}))._ondirectionchange = function(e) {
				p(e);
			}, 0);
			return e._addAlgorithm(function(e, n, i) {
				var r = e.key;
				if ("string" == typeof r) {
					var p = a(r);
					if (t(p, l, f)) return !0;
					for (var m = null, g = f; g < d; ++g) {
						var y = ((e, t, n, i, r, a) => {
							for (var s = Math.min(e.length, i.length), o = -1, l = 0; l < s; ++l) {
								var c = t[l];
								if (c !== i[l]) return r(e[l], n[l]) < 0 ? e.substr(0, l) + n[l] + n.substr(l + 1) : r(e[l], i[l]) < 0 ? e.substr(0, l) + i[l] + n.substr(l + 1) : 0 <= o ? e.substr(0, o) + t[o] + n.substr(o + 1) : null;
								r(e[l], c) < 0 && (o = l);
							}
							return s < i.length && "next" === a ? e + n.substr(e.length) : s < e.length && "prev" === a ? e.substr(0, n.length) : o < 0 ? null : e.substr(0, o) + i[o] + n.substr(o + 1);
						})(r, p, o[g], l[g], s, c);
						null === y && null === m ? f = g + 1 : (null === m || 0 < s(m, y)) && (m = y);
					}
					n(null !== m ? function() {
						e.continue(m + u);
					} : i);
				}
				return !1;
			}), e;
		}
		function Tt(e, t, n, i) {
			return {
				type: 2,
				lower: e,
				upper: t,
				lowerOpen: n,
				upperOpen: i
			};
		}
		function Kt(e) {
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
		}), Ot.prototype.between = function(e, t, n, i) {
			n = !1 !== n, i = !0 === i;
			try {
				return 0 < this._cmp(e, t) || 0 === this._cmp(e, t) && (n || i) && (!n || !i) ? Dt(this) : new this.Collection(this, function() {
					return Tt(e, t, !n, !i);
				});
			} catch (e) {
				return Ct(this, Ze);
			}
		}, Ot.prototype.equals = function(e) {
			return null == e ? Ct(this, Ze) : new this.Collection(this, function() {
				return Kt(e);
			});
		}, Ot.prototype.above = function(e) {
			return null == e ? Ct(this, Ze) : new this.Collection(this, function() {
				return Tt(e, void 0, !0);
			});
		}, Ot.prototype.aboveOrEqual = function(e) {
			return null == e ? Ct(this, Ze) : new this.Collection(this, function() {
				return Tt(e, void 0, !1);
			});
		}, Ot.prototype.below = function(e) {
			return null == e ? Ct(this, Ze) : new this.Collection(this, function() {
				return Tt(void 0, e, !1, !0);
			});
		}, Ot.prototype.belowOrEqual = function(e) {
			return null == e ? Ct(this, Ze) : new this.Collection(this, function() {
				return Tt(void 0, e);
			});
		}, Ot.prototype.startsWith = function(e) {
			return "string" != typeof e ? Ct(this, Qe) : this.between(e, e + Xe, !0, !0);
		}, Ot.prototype.startsWithIgnoreCase = function(e) {
			return "" === e ? this.startsWith(e) : Mt(this, function(e, t) {
				return 0 === e.indexOf(t[0]);
			}, [e], Xe);
		}, Ot.prototype.equalsIgnoreCase = function(e) {
			return Mt(this, function(e, t) {
				return e === t[0];
			}, [e], "");
		}, Ot.prototype.anyOfIgnoreCase = function() {
			var e = O.apply(G, arguments);
			return 0 === e.length ? Dt(this) : Mt(this, function(e, t) {
				return -1 !== t.indexOf(e);
			}, e, "");
		}, Ot.prototype.startsWithAnyOfIgnoreCase = function() {
			var e = O.apply(G, arguments);
			return 0 === e.length ? Dt(this) : Mt(this, function(e, t) {
				return t.some(function(t) {
					return 0 === e.indexOf(t);
				});
			}, e, Xe);
		}, Ot.prototype.anyOf = function() {
			var e, t, n = this, i = O.apply(G, arguments), r = this._cmp;
			try {
				i.sort(r);
			} catch (e) {
				return Ct(this, Ze);
			}
			return 0 === i.length ? Dt(this) : ((e = new this.Collection(this, function() {
				return Tt(i[0], i[i.length - 1]);
			}))._ondirectionchange = function(e) {
				r = "next" === e ? n._ascending : n._descending, i.sort(r);
			}, t = 0, e._addAlgorithm(function(e, n, a) {
				for (var s = e.key; 0 < r(s, i[t]);) if (++t === i.length) return n(a), !1;
				return 0 === r(s, i[t]) || (n(function() {
					e.continue(i[t]);
				}), !1);
			}), e);
		}, Ot.prototype.notEqual = function(e) {
			return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], {
				includeLowers: !1,
				includeUppers: !1
			});
		}, Ot.prototype.noneOf = function() {
			var e = O.apply(G, arguments);
			if (0 === e.length) return new this.Collection(this);
			try {
				e.sort(this._ascending);
			} catch (e) {
				return Ct(this, Ze);
			}
			var t = e.reduce(function(e, t) {
				return e ? e.concat([[e[e.length - 1][1], t]]) : [[-1 / 0, t]];
			}, null);
			return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
				includeLowers: !1,
				includeUppers: !1
			});
		}, Ot.prototype.inAnyRange = function(e, t) {
			var n = this, i = this._cmp, r = this._ascending, a = this._descending, s = this._min, o = this._max;
			if (0 === e.length) return Dt(this);
			if (!e.every(function(e) {
				return void 0 !== e[0] && void 0 !== e[1] && r(e[0], e[1]) <= 0;
			})) return Ct(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", B.InvalidArgument);
			var l, c = !t || !1 !== t.includeLowers, u = t && !0 === t.includeUppers, d = r;
			function p(e, t) {
				return d(e[0], t[0]);
			}
			try {
				(l = e.reduce(function(e, t) {
					for (var n = 0, r = e.length; n < r; ++n) {
						var a = e[n];
						if (i(t[0], a[1]) < 0 && 0 < i(t[1], a[0])) {
							a[0] = s(a[0], t[0]), a[1] = o(a[1], t[1]);
							break;
						}
					}
					return n === r && e.push(t), e;
				}, [])).sort(p);
			} catch (e) {
				return Ct(this, Ze);
			}
			var f = 0, m = u ? function(e) {
				return 0 < r(e, l[f][1]);
			} : function(e) {
				return 0 <= r(e, l[f][1]);
			}, g = c ? function(e) {
				return 0 < a(e, l[f][0]);
			} : function(e) {
				return 0 <= a(e, l[f][0]);
			}, y = m;
			return (t = new this.Collection(this, function() {
				return Tt(l[0][0], l[l.length - 1][1], !c, !u);
			}))._ondirectionchange = function(e) {
				d = "next" === e ? (y = m, r) : (y = g, a), l.sort(p);
			}, t._addAlgorithm(function(e, t, i) {
				for (var a, s = e.key; y(s);) if (++f === l.length) return t(i), !1;
				return !m(a = s) && !g(a) || (0 === n._cmp(s, l[f][1]) || 0 === n._cmp(s, l[f][0]) || t(function() {
					d === r ? e.continue(l[f][0]) : e.continue(l[f][1]);
				}), !1);
			}), t;
		}, Ot.prototype.startsWithAnyOf = function() {
			var e = O.apply(G, arguments);
			return e.every(function(e) {
				return "string" == typeof e;
			}) ? 0 === e.length ? Dt(this) : this.inAnyRange(e.map(function(e) {
				return [e, e + Xe];
			})) : Ct(this, "startsWithAnyOf() only works with strings");
		};
		var Gt = Ot;
		function Ot() {}
		function Pt(e) {
			return Te(function(t) {
				return Nt(t), e(t.target.error), !1;
			});
		}
		function Nt(e) {
			e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
		}
		var zt = "storagemutated", jt = "x-storagemutated-1", Lt = gt(null, zt), qt = (Ft.prototype._lock = function() {
			return _(!ye.global), ++this._reculock, 1 !== this._reculock || ye.global || (ye.lockOwnerFor = this), this;
		}, Ft.prototype._unlock = function() {
			if (_(!ye.global), 0 == --this._reculock) for (ye.global || (ye.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
				var e = this._blockedFuncs.shift();
				try {
					Ue(e[1], e[0]);
				} catch (e) {}
			}
			return this;
		}, Ft.prototype._locked = function() {
			return this._reculock && ye.lockOwnerFor !== this;
		}, Ft.prototype.create = function(e) {
			var t = this;
			if (this.mode) {
				var n = this.db.idbdb, i = this.db._state.dbOpenError;
				if (_(!this.idbtrans), !e && !n) switch (i && i.name) {
					case "DatabaseClosedError": throw new B.DatabaseClosed(i);
					case "MissingAPIError": throw new B.MissingAPI(i.message, i);
					default: throw new B.OpenFailed(i);
				}
				if (!this.active) throw new B.TransactionInactive();
				_(null === this._completion._state), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Te(function(n) {
					Nt(n), t._reject(e.error);
				}), e.onabort = Te(function(n) {
					Nt(n), t.active && t._reject(new B.Abort(e.error)), t.active = !1, t.on("abort").fire(n);
				}), e.oncomplete = Te(function() {
					t.active = !1, t._resolve(), "mutatedParts" in e && Lt.storagemutated.fire(e.mutatedParts);
				});
			}
			return this;
		}, Ft.prototype._promise = function(e, t, n) {
			var i, r = this;
			return "readwrite" === e && "readwrite" !== this.mode ? Ye(new B.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new Ie(function(i, a) {
				r._blockedFuncs.push([function() {
					r._promise(e, t, n).then(i, a);
				}, ye]);
			}) : n ? je(function() {
				var e = new Ie(function(e, n) {
					r._lock();
					var i = t(e, n, r);
					i && i.then && i.then(e, n);
				});
				return e.finally(function() {
					return r._unlock();
				}), e._lib = !0, e;
			}) : ((i = new Ie(function(e, n) {
				var i = t(e, n, r);
				i && i.then && i.then(e, n);
			}))._lib = !0, i) : Ye(new B.TransactionInactive());
		}, Ft.prototype._root = function() {
			return this.parent ? this.parent._root() : this;
		}, Ft.prototype.waitFor = function(e) {
			var t, n = this._root(), i = Ie.resolve(e), r = (n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
				return i;
			}) : (n._waitingFor = i, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function e() {
				for (++n._spinCount; n._waitingQueue.length;) n._waitingQueue.shift()();
				n._waitingFor && (t.get(-1 / 0).onsuccess = e);
			}()), n._waitingFor);
			return new Ie(function(e, t) {
				i.then(function(t) {
					return n._waitingQueue.push(Te(e.bind(null, t)));
				}, function(e) {
					return n._waitingQueue.push(Te(t.bind(null, e)));
				}).finally(function() {
					n._waitingFor === r && (n._waitingFor = null);
				});
			});
		}, Ft.prototype.abort = function() {
			this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new B.Abort()));
		}, Ft.prototype.table = function(e) {
			var t = this._memoizedTables || (this._memoizedTables = {});
			if (c(t, e)) return t[e];
			var n = this.schema[e];
			if (n) return (n = new this.db.Table(e, n, this)).core = this.db.core.table(e), t[e] = n;
			throw new B.NotFound("Table " + e + " not part of transaction");
		}, Ft);
		function Ft() {}
		function Ht(e, t, n, i, r, a, s, o) {
			return {
				name: e,
				keyPath: t,
				unique: n,
				multi: i,
				auto: r,
				compound: a,
				src: (n && !s ? "&" : "") + (i ? "*" : "") + (r ? "++" : "") + Vt(t),
				type: o
			};
		}
		function Vt(e) {
			return "string" == typeof e ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
		}
		function Bt(e, t, n) {
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
		var Ut = function(e) {
			try {
				return e.only([[]]), Ut = function() {
					return [[]];
				}, [[]];
			} catch (e) {
				return Ut = function() {
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
		function $t(e) {
			return [].slice.call(e);
		}
		var Yt = 0;
		function Xt(e) {
			return null == e ? ":id" : "string" == typeof e ? e : "[".concat(e.join("+"), "]");
		}
		function Zt(e, n) {
			var i = n.db;
			i = function(e, n, i, r) {
				return n = function(e, t, n) {
					function i(e) {
						if (3 === e.type) return null;
						if (4 === e.type) throw new Error("Cannot convert never type to IDBKeyRange");
						var n = e.lower, i = e.upper, r = e.lowerOpen;
						return e = e.upperOpen, void 0 === n ? void 0 === i ? null : t.upperBound(i, !!e) : void 0 === i ? t.lowerBound(n, !!r) : t.bound(n, i, !!r, !!e);
					}
					r = n, c = 0 < (s = $t((n = e).objectStoreNames)).length ? r.objectStore(s[0]) : {}, n = {
						schema: {
							name: n.name,
							tables: s.map(function(e) {
								return r.objectStore(e);
							}).map(function(e) {
								var t = e.keyPath, n = e.autoIncrement, i = a(t), r = {};
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
									indexes: $t(e.indexNames).map(function(t) {
										return e.index(t);
									}).map(function(e) {
										var t = e.name, n = e.unique, i = e.multiEntry;
										return e = e.keyPath, t = {
											name: t,
											compound: a(e),
											keyPath: e,
											unique: n,
											multiEntry: i,
											extractKey: Wt(e)
										}, r[Xt(e)] = t;
									}),
									getIndexByKeyPath: function(e) {
										return r[Xt(e)];
									}
								}, r[":id"] = i.primaryKey, null != t && (r[Xt(t)] = i.primaryKey), i;
							})
						},
						hasGetAll: 0 < s.length && "getAll" in c && !("undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604),
						hasIdb3Features: "getAllRecords" in c
					};
					var r, s = n.schema, o = n.hasGetAll, l = n.hasIdb3Features, c = s.tables.map(function(e) {
						var t, n, r = e.name;
						return {
							name: r,
							schema: e,
							mutate: function(e) {
								var t = e.trans, n = e.type, a = e.keys, s = e.values, o = e.range;
								return new Promise(function(e, l) {
									e = Te(e);
									var c = t.objectStore(r), u = null == c.keyPath, d = "put" === n || "add" === n;
									if (!d && "delete" !== n && "deleteRange" !== n) throw new Error("Invalid operation type: " + n);
									var p, f = (a || s || { length: 1 }).length;
									if (a && s && a.length !== s.length) throw new Error("Given keys array must have same length as given values array.");
									if (0 === f) return e({
										numFailures: 0,
										failures: {},
										results: [],
										lastResult: void 0
									});
									function m(e) {
										++h, Nt(e);
									}
									var g = [], y = [], h = 0;
									if ("deleteRange" === n) {
										if (4 === o.type) return e({
											numFailures: h,
											failures: y,
											results: [],
											lastResult: void 0
										});
										3 === o.type ? g.push(p = c.clear()) : g.push(p = c.delete(i(o)));
									} else {
										var _ = (u = d ? u ? [s, a] : [s, null] : [a, null])[0], v = u[1];
										if (d) for (var I = 0; I < f; ++I) g.push(p = v && void 0 !== v[I] ? c[n](_[I], v[I]) : c[n](_[I])), p.onerror = m;
										else for (I = 0; I < f; ++I) g.push(p = c[n](_[I])), p.onerror = m;
									}
									function b(t) {
										t = t.target.result, g.forEach(function(e, t) {
											return null != e.error && (y[t] = e.error);
										}), e({
											numFailures: h,
											failures: y,
											results: "delete" === n ? a : g.map(function(e) {
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
									e = Te(e);
									for (var a, s = t.objectStore(r), o = n.length, l = new Array(o), c = 0, u = 0, d = function(t) {
										t = t.target, l[t._pos] = t.result, ++u === c && e(l);
									}, p = Pt(i), f = 0; f < o; ++f) null != n[f] && ((a = s.get(n[f]))._pos = f, a.onsuccess = d, a.onerror = p, ++c);
									0 === c && e(l);
								});
							},
							get: function(e) {
								var t = e.trans, n = e.key;
								return new Promise(function(e, i) {
									e = Te(e);
									var a = t.objectStore(r).get(n);
									a.onsuccess = function(t) {
										return e(t.target.result);
									}, a.onerror = Pt(i);
								});
							},
							query: (t = o, n = l, function(e) {
								return new Promise(function(a, s) {
									a = Te(a);
									var o, l, c, u, d = e.trans, p = e.values, f = e.limit, m = e.query, g = null != (g = e.direction) ? g : "next", y = f === 1 / 0 ? void 0 : f, h = m.index;
									if (m = m.range, d = d.objectStore(r), d = h.isPrimaryKey ? d : d.index(h.name), h = i(m), 0 === f) return a({ result: [] });
									n ? (m = {
										query: h,
										count: y,
										direction: g
									}, (o = p ? d.getAll(m) : d.getAllKeys(m)).onsuccess = function(e) {
										return a({ result: e.target.result });
									}, o.onerror = Pt(s)) : t && "next" === g ? ((o = p ? d.getAll(h, y) : d.getAllKeys(h, y)).onsuccess = function(e) {
										return a({ result: e.target.result });
									}, o.onerror = Pt(s)) : (l = 0, c = !p && "openKeyCursor" in d ? d.openKeyCursor(h, g) : d.openCursor(h, g), u = [], c.onsuccess = function() {
										var e = c.result;
										return e && (u.push(p ? e.value : e.primaryKey), ++l !== f) ? void e.continue() : a({ result: u });
									}, c.onerror = Pt(s));
								});
							}),
							openCursor: function(e) {
								var t = e.trans, n = e.values, a = e.query, s = e.reverse, o = e.unique;
								return new Promise(function(e, l) {
									e = Te(e);
									var c = a.index, u = a.range, d = t.objectStore(r), p = (d = c.isPrimaryKey ? d : d.index(c.name), c = s ? o ? "prevunique" : "prev" : o ? "nextunique" : "next", !n && "openKeyCursor" in d ? d.openKeyCursor(i(u), c) : d.openCursor(i(u), c));
									p.onerror = Pt(l), p.onsuccess = Te(function(n) {
										var i, r, a, s, o = p.result;
										o ? (o.___id = ++Yt, o.done = !1, i = o.continue.bind(o), r = (r = o.continuePrimaryKey) && r.bind(o), a = o.advance.bind(o), s = function() {
											throw new Error("Cursor not stopped");
										}, o.trans = t, o.stop = o.continue = o.continuePrimaryKey = o.advance = function() {
											throw new Error("Cursor not started");
										}, o.fail = Te(l), o.next = function() {
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
												e = Te(e), p.onerror = Pt(t), o.fail = t, o.stop = function(t) {
													o.stop = o.continue = o.continuePrimaryKey = o.advance = s, e(t);
												};
											});
											return p.onsuccess = Te(function(e) {
												p.onsuccess = t, t();
											}), o.continue = i, o.continuePrimaryKey = r, o.advance = a, t(), n;
										}, e(o)) : e(null);
									}, l);
								});
							},
							count: function(e) {
								var t = e.query, n = e.trans, a = t.index, s = t.range;
								return new Promise(function(e, t) {
									var o, l = n.objectStore(r);
									l = a.isPrimaryKey ? l : l.index(a.name), (o = (o = i(s)) ? l.count(o) : l.count()).onsuccess = Te(function(t) {
										return e(t.target.result);
									}), o.onerror = Pt(t);
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
						MAX_KEY: Ut(t),
						schema: s
					};
				}(n, i = i.IDBKeyRange, r), { dbcore: e.dbcore.reduce(function(e, n) {
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
				var r = i[n];
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
					}) : t[n] = new e.Table(n, r));
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
			var a = e._dbSchema, s = (n.objectStoreNames.contains("$meta") && !a.$meta && (a.$meta = Bt("$meta", cn("")[0], []), e._storeNames.push("$meta")), e._createTransaction("readwrite", e._storeNames, a)), o = (s.create(n), s._completion.catch(i), s._reject.bind(s)), l = ye.transless || ye;
			je(function() {
				if (ye.trans = s, ye.transless = l, 0 !== t) return Zt(e, n), c = t, ((i = s).storeNames.includes("$meta") ? i.table("$meta").get("version").then(function(e) {
					return null != e ? e : c;
				}) : Ie.resolve(c)).then(function(t) {
					var i = e, a = t, o = s, l = n, c = [], u = (t = i._versions, i._dbSchema = on(0, i.idbdb, l));
					return 0 === (t = t.filter(function(e) {
						return e._cfg.version >= a;
					})).length ? Ie.resolve() : (t.forEach(function(e) {
						c.push(function() {
							var t, n, s, c = u, d = e._cfg.dbschema, p = (ln(i, c, l), ln(i, d, l), u = i._dbSchema = d, nn(c, d)), f = (p.add.forEach(function(e) {
								rn(l, e[0], e[1].primKey, e[1].indexes);
							}), p.change.forEach(function(e) {
								if (e.recreate) throw new B.Upgrade("Not yet support for changing primary key");
								var t = l.objectStore(e.name);
								e.add.forEach(function(e) {
									return sn(t, e);
								}), e.change.forEach(function(e) {
									t.deleteIndex(e.name), sn(t, e);
								}), e.del.forEach(function(e) {
									return t.deleteIndex(e);
								});
							}), e._cfg.contentUpgrade);
							if (f && e._cfg.version > a) return Zt(i, l), o._memoizedTables = {}, t = w(d), p.del.forEach(function(e) {
								t[e] = c[e];
							}), Jt(i, [i.Transaction.prototype]), Qt(i, [i.Transaction.prototype], r(t), t), o.schema = t, (n = P(f)) && Le(), d = Ie.follow(function() {
								var e;
								(s = f(o)) && n && (e = qe.bind(null, null), s.then(e, e));
							}), s && "function" == typeof s.then ? Ie.resolve(s) : d.then(function() {
								return s;
							});
						}), c.push(function(t) {
							var n = e._cfg.dbschema, r = t;
							[].slice.call(r.db.objectStoreNames).forEach(function(e) {
								return null == n[e] && r.db.deleteObjectStore(e);
							}), Jt(i, [i.Transaction.prototype]), Qt(i, [i.Transaction.prototype], i._storeNames, i._dbSchema), o.schema = i._dbSchema;
						}), c.push(function(t) {
							i.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(i.idbdb.version / 10) === e._cfg.version ? (i.idbdb.deleteObjectStore("$meta"), delete i._dbSchema.$meta, i._storeNames = i._storeNames.filter(function(e) {
								return "$meta" !== e;
							})) : t.objectStore("$meta").put(e._cfg.version, "version"));
						});
					}), function e() {
						return c.length ? Ie.resolve(c.shift()(o.idbtrans)).then(e) : Ie.resolve();
					}().then(function() {
						an(u, l);
					}));
				}).catch(o);
				var i, c;
				r(a).forEach(function(e) {
					rn(n, e, a[e].primKey, a[e].indexes);
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
				var r = e[n], a = t[n];
				if (r) {
					var s = {
						name: n,
						def: a,
						recreate: !1,
						del: [],
						add: [],
						change: []
					};
					if ("" + (r.primKey.keyPath || "") != "" + (a.primKey.keyPath || "") || r.primKey.auto !== a.primKey.auto) s.recreate = !0, i.change.push(s);
					else {
						var o = r.idxByName, l = a.idxByName, c = void 0;
						for (c in o) l[c] || s.del.push(c);
						for (c in l) {
							var u = o[c], d = l[c];
							u ? u.src !== d.src && s.change.push(d) : s.add.push(d);
						}
						(0 < s.del.length || 0 < s.add.length || 0 < s.change.length) && i.change.push(s);
					}
				} else i.add.push([n, a]);
			}
			return i;
		}
		function rn(e, t, n, i) {
			var r = e.db.createObjectStore(t, n.keyPath ? {
				keyPath: n.keyPath,
				autoIncrement: n.auto
			} : { autoIncrement: n.auto });
			i.forEach(function(e) {
				return sn(r, e);
			});
		}
		function an(e, t) {
			r(e).forEach(function(n) {
				t.db.objectStoreNames.contains(n) || rn(t, n, e[n].primKey, e[n].indexes);
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
				for (var t = n.objectStore(e), r = Ht(Vt(o = t.keyPath), o || "", !0, !1, !!t.autoIncrement, o && "string" != typeof o, !0), a = [], s = 0; s < t.indexNames.length; ++s) {
					var o = (l = t.index(t.indexNames[s])).keyPath, l = Ht(l.name, o, !!l.unique, !!l.multiEntry, !1, o && "string" != typeof o, !1);
					a.push(l);
				}
				i[e] = Bt(e, r, a);
			}), i;
		}
		function ln(e, t, n) {
			for (var r = n.db.objectStoreNames, a = 0; a < r.length; ++a) {
				var s = r[a], o = n.objectStore(s);
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
				var n = null == (n = (i = e.split(":"))[1]) ? void 0 : n.trim(), i = (e = i[0].trim()).replace(/([&*]|\+\+)/g, ""), r = /^\[/.test(i) ? i.match(/^\[(.*)\]$/)[1].split("+") : i;
				return Ht(i, r || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), a(r), 0 === t, n);
			});
		}
		dn.prototype._createTableSchema = Bt, dn.prototype._parseIndexSyntax = cn, dn.prototype._parseStoresSpec = function(e, t) {
			var n = this;
			r(e).forEach(function(i) {
				if (null !== e[i]) {
					var r = n._parseIndexSyntax(e[i]), a = r.shift();
					if (!a) throw new B.Schema("Invalid schema for table " + i + ": " + e[i]);
					if (a.unique = !0, a.multi) throw new B.Schema("Primary key cannot be multiEntry*");
					r.forEach(function(e) {
						if (e.auto) throw new B.Schema("Only primary key can be marked as autoIncrement (++)");
						if (!e.keyPath) throw new B.Schema("Index must have a name and cannot be an empty string");
					}), a = n._createTableSchema(i, a, r), t[i] = a;
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
			], r(i), i), t._storeNames = r(i), this;
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
					if (n) for (var i = e.values(), r = i.next(); !r.done;) {
						var a = r.value;
						if (a.deref() === n._novip) return e.delete(a), void t.unregister(a);
						r = i.next();
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
		function gn(e) {
			return je(function() {
				return ye.letThrough = !0, e();
			});
		}
		function yn(e) {
			return !("from" in e);
		}
		var hn = function(e, t) {
			var n;
			if (!this) return n = new hn(), e && "d" in e && s(n, e), n;
			s(this, arguments.length ? {
				d: 1,
				from: e,
				to: 1 < arguments.length ? t : e
			} : { d: 0 });
		};
		function _n(e, t, n) {
			var i = st(t, n);
			if (!isNaN(i)) {
				if (0 < i) throw RangeError();
				if (yn(e)) return s(e, {
					from: t,
					to: n,
					d: 1
				});
				i = e.l;
				var r = e.r;
				if (st(n, e.from) < 0) return i ? _n(i, t, n) : e.l = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, wn(e);
				if (0 < st(t, e.to)) return r ? _n(r, t, n) : e.r = {
					from: t,
					to: n,
					d: 1,
					l: null,
					r: null
				}, wn(e);
				st(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < st(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, i && !e.l && vn(e, i), r && t && vn(e, r);
			}
		}
		function vn(e, t) {
			yn(t) || function e(t, n) {
				var i = n.from, r = n.l, a = n.r;
				_n(t, i, n.to), r && e(t, r), a && e(t, a);
			}(e, t);
		}
		function In(e, t) {
			var n = bn(t), i = n.next();
			if (!i.done) for (var r = i.value, a = bn(e), s = a.next(r.from), o = s.value; !i.done && !s.done;) {
				if (st(o.from, r.to) <= 0 && 0 <= st(o.to, r.from)) return !0;
				st(r.from, o.from) < 0 ? r = (i = n.next(o.from)).value : o = (s = a.next(r.from)).value;
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
			var n, i, r, a;
			(a = 1 < (a = ((null == (a = e.r) ? void 0 : a.d) || 0) - ((null == (a = e.l) ? void 0 : a.d) || 0)) ? "r" : a < -1 ? "l" : "") && (n = "r" == a ? "l" : "r", i = t({}, e), r = e[a], e.from = r.from, e.to = r.to, e[a] = r[a], i[a] = r[n], (e[n] = i).d = Sn(i)), e.d = Sn(e);
		}
		function Sn(e) {
			var t = e.r;
			return e = e.l, (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1;
		}
		function xn(e, t) {
			return r(t).forEach(function(n) {
				e[n] ? vn(e[n], t[n]) : e[n] = function e(t) {
					var n, i, r = {};
					for (n in t) c(t, n) && (i = t[n], r[n] = !i || "object" != typeof i || A.has(i.constructor) ? i : e(i));
					return r;
				}(t[n]);
			}), e;
		}
		function kn(e, t) {
			return e.all || t.all || Object.keys(e).some(function(n) {
				return t[n] && In(t[n], e[n]);
			});
		}
		u(hn.prototype, ((N = {
			add: function(e) {
				return vn(this, e), this;
			},
			addKey: function(e) {
				return _n(this, e, e), this;
			},
			addKeys: function(e) {
				var t = this;
				return e.forEach(function(e) {
					return _n(t, e, e);
				}), this;
			},
			hasKey: function(e) {
				var t = bn(this).next(e).value;
				return t && st(t.from, e) <= 0 && 0 <= st(t.to, e);
			}
		})[M] = function() {
			return bn(this);
		}, N));
		var An = {}, En = {}, Rn = !1;
		function Cn(e) {
			xn(En, e), Rn || (Rn = !0, setTimeout(function() {
				Rn = !1, Dn(En, !(En = {}));
			}, 0));
		}
		function Dn(e, t) {
			void 0 === t && (t = !1);
			var n = /* @__PURE__ */ new Set();
			if (e.all) for (var i = 0, r = Object.values(An); i < r.length; i++) Mn(o = r[i], e, n, t);
			else for (var a in e) {
				var s, o;
				(a = /^idb\:\/\/(.*)\/(.*)\//.exec(a)) && (s = a[1], a = a[2], o = An["idb://".concat(s, "/").concat(a)]) && Mn(o, e, n, t);
			}
			n.forEach(function(e) {
				return e();
			});
		}
		function Mn(e, t, n, i) {
			for (var r = [], a = 0, s = Object.entries(e.queries.query); a < s.length; a++) {
				for (var o = s[a], l = o[0], c = [], u = 0, d = o[1]; u < d.length; u++) {
					var p = d[u];
					kn(t, p.obsSet) ? p.subscribers.forEach(function(e) {
						return n.add(e);
					}) : i && c.push(p);
				}
				i && r.push([l, c]);
			}
			if (i) for (var f = 0, m = r; f < m.length; f++) {
				var g = m[f];
				l = g[0], c = g[1], e.queries.query[l] = c;
			}
		}
		function Tn(e) {
			var t = e._state, n = e._deps.indexedDB;
			if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
				return t.dbOpenError ? Ye(t.dbOpenError) : e;
			});
			t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
			var i = t.openCanceller, a = Math.round(10 * e.verno), s = !1;
			function o() {
				if (t.openCanceller !== i) throw new B.DatabaseClosed("db.open() was cancelled");
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
					if (o(), !n) throw new B.MissingAPI();
					var p = e.name, f = t.autoSchema || !a ? n.open(p) : n.open(p, a);
					if (!f) throw new B.MissingAPI();
					f.onerror = Pt(c), f.onblocked = Te(e._fireOnBlocked), f.onupgradeneeded = Te(function(i) {
						var r;
						u = f.transaction, t.autoSchema && !e._options.allowEmptyDB ? (f.onerror = Nt, u.abort(), f.result.close(), (r = n.deleteDatabase(p)).onsuccess = r.onerror = Te(function() {
							c(new B.NoSuchDatabase("Database ".concat(p, " doesnt exist")));
						})) : (u.onerror = Pt(c), r = i.oldVersion > Math.pow(2, 62) ? 0 : i.oldVersion, d = r < 1, e.idbdb = f.result, s && function(e, t) {
							an(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
							var n = on(0, e.idbdb, t);
							ln(e, e._dbSchema, t);
							for (var i = 0, r = nn(n, e._dbSchema).change; i < r.length; i++) {
								var a = ((e) => {
									if (e.change.length || e.recreate) return console.warn("Unable to patch indexes of table ".concat(e.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
									var n = t.objectStore(e.name);
									e.add.forEach(function(e) {
										sn(n, e);
									});
								})(r[i]);
								if ("object" == typeof a) return a.value;
							}
						}(e, u), tn(e, r / 10, u, c));
					}, c), f.onsuccess = Te(function() {
						u = null;
						var n, o, c, m, g, h, _ = e.idbdb = f.result, v = y(_.objectStoreNames);
						if (0 < v.length) try {
							var I = _.transaction(1 === (g = v).length ? g[0] : g, "readonly");
							if (t.autoSchema) h = _, m = I, (c = e).verno = h.version / 10, m = c._dbSchema = on(0, h, m), c._storeNames = y(h.objectStoreNames, 0), Qt(c, [c._allTables], r(m), m);
							else if (ln(e, e._dbSchema, I), o = I, ((o = nn(on(0, (n = e).idbdb, o), n._dbSchema)).add.length || o.change.some(function(e) {
								return e.add.length || e.change.length;
							})) && !s) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), _.close(), a = _.version + 1, s = !0, l(i());
							Zt(e, I);
						} catch (n) {}
						pn.add(e), _.onversionchange = Te(function(n) {
							t.vcFired = !0, e.on("versionchange").fire(n);
						}), _.onclose = Te(function() {
							e.close({ disableAutoOpen: !1 });
						}), d && (v = e._deps, g = p, mn(h = v.indexedDB) || g === Je || fn(h, v.IDBKeyRange).put({ name: g }).catch(W)), l();
					}, c);
				}).catch(function(e) {
					switch (null == e ? void 0 : e.name) {
						case "UnknownError":
							if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), i();
							break;
						case "VersionError": if (0 < a) return a = 0, i();
					}
					return Ie.reject(e);
				});
			})]).then(function() {
				return o(), t.onReadyBeingFired = [], Ie.resolve(gn(function() {
					return e.on.ready.fire(e.vip);
				})).then(function n() {
					var i;
					if (0 < t.onReadyBeingFired.length) return i = t.onReadyBeingFired.reduce(te, W), t.onReadyBeingFired = [], Ie.resolve(gn(function() {
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
				return i === t.openCanceller && e._close(), Ye(n);
			}).finally(function() {
				t.openComplete = !0, c();
			}).then(function() {
				var t;
				return d && (t = {}, e.tables.forEach(function(n) {
					n.schema.indexes.forEach(function(i) {
						i.name && (t["idb://".concat(e.name, "/").concat(n.name, "/").concat(i.name)] = new hn(-1 / 0, [[[]]]));
					}), t["idb://".concat(e.name, "/").concat(n.name, "/")] = t["idb://".concat(e.name, "/").concat(n.name, "/:dels")] = new hn(-1 / 0, [[[]]]);
				}), Lt(zt).fire(t), Dn(t, !0)), e;
			});
		}
		function Kn(e) {
			function t(t) {
				return e.next(t);
			}
			var n = r(t), i = r(function(t) {
				return e.throw(t);
			});
			function r(e) {
				return function(t) {
					var r = (t = e(t)).value;
					return t.done ? r : r && "function" == typeof r.then ? r.then(n, i) : a(r) ? Promise.all(r).then(n, i) : n(r);
				};
			}
			return r(t)();
		}
		function Gn(e, t, n) {
			for (var i = a(e) ? e.slice() : [e], r = 0; r < n; ++r) i.push(t);
			return i;
		}
		var On = {
			stack: "dbcore",
			name: "VirtualIndexMiddleware",
			level: 1,
			create: function(e) {
				return t(t({}, e), { table: function(n) {
					var i = e.table(n), r = (n = i.schema, Object.create(null)), a = [];
					function s(e, n, i) {
						var o = Xt(e), l = r[o] = r[o] || [], c = null == e ? 0 : "string" == typeof e ? 1 : e.length, u = 0 < n;
						return o = t(t({}, i), {
							name: u ? "".concat(o, "(virtual-from:").concat(i.name, ")") : i.name,
							lowLevelIndex: i,
							isVirtual: u,
							keyTail: n,
							keyLength: c,
							extractKey: Wt(e),
							unique: !u && i.unique
						}), l.push(o), o.isPrimaryKey || a.push(o), 1 < c && s(2 === c ? e[0] : e.slice(0, c - 1), n + 1, i), l.sort(function(e, t) {
							return e.keyTail - t.keyTail;
						}), o;
					}
					var o = s(n.primaryKey.keyPath, 0, n.primaryKey);
					r[":id"] = [o];
					for (var l = 0, c = n.indexes; l < c.length; l++) {
						var u = c[l];
						s(u.keyPath, 0, u);
					}
					function d(n) {
						var i, r = n.query.index;
						return r.isVirtual ? t(t({}, n), { query: {
							index: r.lowLevelIndex,
							range: (i = n.query.range, r = r.keyTail, {
								type: 1 === i.type ? 2 : i.type,
								lower: Gn(i.lower, i.lowerOpen ? e.MAX_KEY : e.MIN_KEY, r),
								lowerOpen: !0,
								upper: Gn(i.upper, i.upperOpen ? e.MIN_KEY : e.MAX_KEY, r),
								upperOpen: !0
							})
						} }) : n;
					}
					return t(t({}, i), {
						schema: t(t({}, n), {
							primaryKey: o,
							indexes: a,
							getIndexByKeyPath: function(e) {
								return (e = r[Xt(e)]) && e[0];
							}
						}),
						count: function(e) {
							return i.count(d(e));
						},
						query: function(e) {
							return i.query(d(e));
						},
						openCursor: function(t) {
							var n = t.query.index, r = n.keyTail, a = n.keyLength;
							return n.isVirtual ? i.openCursor(d(t)).then(function(n) {
								return n && function(n) {
									return Object.create(n, {
										continue: { value: function(i) {
											null != i ? n.continue(Gn(i, t.reverse ? e.MAX_KEY : e.MIN_KEY, r)) : t.unique ? n.continue(n.key.slice(0, a).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, r)) : n.continue();
										} },
										continuePrimaryKey: { value: function(t, i) {
											n.continuePrimaryKey(Gn(t, e.MAX_KEY, r), i);
										} },
										primaryKey: { get: function() {
											return n.primaryKey;
										} },
										key: { get: function() {
											var e = n.key;
											return 1 === a ? e[0] : e.slice(0, a);
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
		function Pn(e, t, n, i) {
			return n = n || {}, i = i || "", r(e).forEach(function(r) {
				var a, s, o;
				c(t, r) ? (a = e[r], s = t[r], "object" == typeof a && "object" == typeof s && a && s ? (o = D(a)) !== D(s) ? n[i + r] = t[r] : "Object" === o ? Pn(a, s, n, i + r + ".") : a !== s && (n[i + r] = t[r]) : a !== s && (n[i + r] = t[r])) : n[i + r] = void 0;
			}), r(t).forEach(function(r) {
				c(e, r) || (n[i + r] = t[r]);
			}), n;
		}
		function Nn(e, t) {
			return "delete" === t.type ? t.keys : t.keys || t.values.map(e.extractKey);
		}
		var zn = {
			stack: "dbcore",
			name: "HooksMiddleware",
			level: 2,
			create: function(e) {
				return t(t({}, e), { table: function(i) {
					var r = e.table(i), a = r.schema.primaryKey;
					return t(t({}, r), { mutate: function(e) {
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
										return r.query({
											trans: n,
											values: !1,
											query: {
												index: a,
												range: i
											},
											limit: s
										}).then(function(r) {
											var a = r.result;
											return p({
												type: "delete",
												keys: a,
												trans: n
											}).then(function(r) {
												return 0 < r.numFailures ? Promise.reject(r.failures[0]) : a.length < s ? {
													failures: [],
													numFailures: 0,
													lastResult: void 0
												} : e(n, t(t({}, i), {
													lower: a[a.length - 1],
													lowerOpen: !0
												}), s);
											});
										});
									}(e.trans, e.range, 1e4);
								}, !0);
						}
						return r.mutate(e);
						function p(e) {
							var i, s, o, p = ye.trans, f = e.keys || Nn(a, e);
							if (f) return "delete" !== (e = "add" === e.type || "put" === e.type ? t(t({}, e), { keys: f }) : t({}, e)).type && (e.values = n([], e.values, !0)), e.keys && (e.keys = n([], e.keys, !0)), i = r, o = f, ("add" === (s = e).type ? Promise.resolve([]) : i.getMany({
								trans: s.trans,
								keys: o,
								cache: "immutable"
							})).then(function(t) {
								var n = f.map(function(n, i) {
									var r, s, o, f = t[i], m = {
										onerror: null,
										onsuccess: null
									};
									return "delete" === e.type ? l.fire.call(m, n, f, p) : "add" === e.type || void 0 === f ? (r = u.fire.call(m, n, e.values[i], p), null == n && null != r && (e.keys[i] = n = r, a.outbound || b(e.values[i], a.keyPath, n))) : (r = Pn(f, e.values[i]), (s = d.fire.call(m, r, n, f, p)) && (o = e.values[i], Object.keys(s).forEach(function(e) {
										c(o, e) ? o[e] = s[e] : b(o, e, s[e]);
									}))), m;
								});
								return r.mutate(e).then(function(i) {
									for (var r = i.failures, a = i.results, s = i.numFailures, o = (i = i.lastResult, 0); o < f.length; ++o) {
										var l = (a || f)[o], c = n[o];
										null == l ? c.onerror && c.onerror(r[o]) : c.onsuccess && c.onsuccess("put" === e.type && t[o] ? e.values[o] : l);
									}
									return {
										failures: r,
										results: a,
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
		function jn(e, t, n) {
			try {
				if (!t) return null;
				if (t.keys.length < e.length) return null;
				for (var i = [], r = 0, a = 0; r < t.keys.length && a < e.length; ++r) 0 === st(t.keys[r], e[a]) && (i.push(n ? R(t.values[r]) : t.values[r]), ++a);
				return i.length === e.length ? i : null;
			} catch (e) {
				return null;
			}
		}
		var Ln = {
			stack: "dbcore",
			level: -1,
			create: function(e) {
				return { table: function(n) {
					var i = e.table(n);
					return t(t({}, i), {
						getMany: function(e) {
							var t;
							return e.cache ? (t = jn(e.keys, e.trans._cache, "clone" === e.cache)) ? Ie.resolve(t) : i.getMany(e).then(function(t) {
								return e.trans._cache = {
									keys: e.keys,
									values: "clone" === e.cache ? R(t) : t
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
		function qn(e, t) {
			return "readonly" === e.trans.mode && !!e.subscr && !e.trans.explicit && "disabled" !== e.trans.db._options.cache && !t.schema.primaryKey.outbound;
		}
		function Fn(e, t) {
			switch (e) {
				case "query": return t.values && !t.unique;
				case "get":
				case "getMany":
				case "count":
				case "openCursor": return !1;
			}
		}
		var Hn = {
			stack: "dbcore",
			level: 0,
			name: "Observability",
			create: function(e) {
				var n = e.schema.name, i = new hn(e.MIN_KEY, e.MAX_KEY);
				return t(t({}, e), {
					transaction: function(t, n, i) {
						if (ye.subscr && "readonly" !== n) throw new B.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ye.querier));
						return e.transaction(t, n, i);
					},
					table: function(s) {
						function o(t) {
							var n;
							return [n = (t = t.query).index, new hn(null != (n = (t = t.range).lower) ? n : e.MIN_KEY, null != (n = t.upper) ? n : e.MAX_KEY)];
						}
						var l = e.table(s), c = l.schema, u = c.primaryKey, d = c.indexes, p = u.extractKey, f = u.outbound, m = u.autoIncrement && d.filter(function(e) {
							return e.compound && e.keyPath.includes(u.keyPath);
						}), g = t(t({}, l), { mutate: function(t) {
							function r(e) {
								return e = "idb://".concat(n, "/").concat(s, "/").concat(e), g[e] || (g[e] = new hn());
							}
							var o, d, p, f = t.trans, g = t.mutatedParts || (t.mutatedParts = {}), y = r(""), h = r(":dels"), _ = t.type, v = "deleteRange" === t.type ? [t.range] : "delete" === t.type ? [t.keys] : t.values.length < 50 ? [Nn(u, t).filter(function(e) {
								return e;
							}), t.values] : [], I = v[0], b = (v = v[1], t.trans._cache);
							return a(I) ? (y.addKeys(I), (_ = "delete" === _ || I.length === v.length ? jn(I, b) : null) || h.addKeys(I), (_ || v) && (o = r, d = _, p = v, c.indexes.forEach(function(e) {
								var t = o(e.name || "");
								function n(t) {
									return null != t ? e.extractKey(t) : null;
								}
								function i(n) {
									e.multiEntry && a(n) ? n.forEach(function(e) {
										return t.addKey(e);
									}) : t.addKey(n);
								}
								(d || p).forEach(function(e, t) {
									var r = d && n(d[t]);
									0 !== st(r, t = p && n(p[t])) && (null != r && i(r), null != t) && i(t);
								});
							}))) : I ? (v = {
								from: null != (b = I.lower) ? b : e.MIN_KEY,
								to: null != (_ = I.upper) ? _ : e.MAX_KEY
							}, h.add(v), y.add(v)) : (y.add(i), h.add(i), c.indexes.forEach(function(e) {
								return r(e.name).add(i);
							})), l.mutate(t).then(function(e) {
								return !I || "add" !== t.type && "put" !== t.type || (y.addKeys(e.results), m && m.forEach(function(n) {
									for (var i = t.values.map(function(e) {
										return n.extractKey(e);
									}), a = n.keyPath.findIndex(function(e) {
										return e === u.keyPath;
									}), s = 0, o = e.results.length; s < o; ++s) i[s][a] = e.results[s];
									r(n.name).addKeys(i);
								})), f.mutatedParts = xn(f.mutatedParts || {}, g), e;
							});
						} }), y = {
							get: function(e) {
								return [u, new hn(e.key)];
							},
							getMany: function(e) {
								return [u, new hn().addKeys(e.keys)];
							},
							count: o,
							query: o,
							openCursor: o
						};
						return r(y).forEach(function(e) {
							g[e] = function(r) {
								var a = !!(u = ye.subscr), o = qn(ye, l) && Fn(e, r) ? r.obsSet = {} : u;
								if (a) {
									var c, u, d = (u = function(e) {
										return e = "idb://".concat(n, "/").concat(s, "/").concat(e), o[e] || (o[e] = new hn());
									})(""), m = u(":dels"), g = (a = y[e](r))[0];
									if (a = a[1], ("query" === e && g.isPrimaryKey && !r.values ? m : u(g.name || "")).add(a), !g.isPrimaryKey) {
										if ("count" !== e) return c = "query" === e && f && r.values && l.query(t(t({}, r), { values: !1 })), l[e].apply(this, arguments).then(function(t) {
											if ("query" === e) {
												if (f && r.values) return c.then(function(e) {
													return e = e.result, d.addKeys(e), t;
												});
												var n = r.values ? t.result.map(p) : t.result;
												(r.values ? d : m).addKeys(n);
											} else {
												var i, a;
												if ("openCursor" === e) return a = r.values, (i = t) && Object.create(i, {
													key: { get: function() {
														return m.addKey(i.primaryKey), i.key;
													} },
													primaryKey: { get: function() {
														var e = i.primaryKey;
														return m.addKey(e), e;
													} },
													value: { get: function() {
														return a && d.addKey(i.primaryKey), i.value;
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
						}), g;
					}
				});
			}
		};
		function Vn(e, n, i) {
			var r;
			return 0 === i.numFailures ? n : "deleteRange" === n.type || (r = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1, i.numFailures === r) ? null : (r = t({}, n), a(r.keys) && (r.keys = r.keys.filter(function(e, t) {
				return !(t in i.failures);
			})), "values" in r && a(r.values) && (r.values = r.values.filter(function(e, t) {
				return !(t in i.failures);
			})), r);
		}
		function Bn(e, t) {
			return n = e, (void 0 === (i = t).lower || (i.lowerOpen ? 0 < st(n, i.lower) : 0 <= st(n, i.lower))) && (n = e, void 0 === (i = t).upper || (i.upperOpen ? st(n, i.upper) < 0 : st(n, i.upper) <= 0));
			var n, i;
		}
		function Un(e, t, n, i, r, s) {
			var o, l, c, u, d, p, f;
			return n && 0 !== n.length && (o = t.query.index, l = o.multiEntry, c = t.query.range, u = i.schema.primaryKey.extractKey, d = o.extractKey, p = (o.lowLevelIndex || o).extractKey, (i = n.reduce(function(e, n) {
				var i = e, r = [];
				if ("add" === n.type || "put" === n.type) for (var s = new hn(), o = n.values.length - 1; 0 <= o; --o) {
					var p, f = n.values[o], m = u(f);
					!s.hasKey(m) && (p = d(f), l && a(p) ? p.some(function(e) {
						return Bn(e, c);
					}) : Bn(p, c)) && (s.addKey(m), r.push(f));
				}
				switch (n.type) {
					case "add":
						var g = new hn().addKeys(t.values ? e.map(function(e) {
							return u(e);
						}) : e);
						i = e.concat(t.values ? r.filter(function(e) {
							return e = u(e), !g.hasKey(e) && (g.addKey(e), !0);
						}) : r.map(function(e) {
							return u(e);
						}).filter(function(e) {
							return !g.hasKey(e) && (g.addKey(e), !0);
						}));
						break;
					case "put":
						var y = new hn().addKeys(n.values.map(function(e) {
							return u(e);
						}));
						i = e.filter(function(e) {
							return !y.hasKey(t.values ? u(e) : e);
						}).concat(t.values ? r : r.map(function(e) {
							return u(e);
						}));
						break;
					case "delete":
						var h = new hn().addKeys(n.keys);
						i = e.filter(function(e) {
							return !h.hasKey(t.values ? u(e) : e);
						});
						break;
					case "deleteRange":
						var _ = n.range;
						i = e.filter(function(e) {
							return !Bn(u(e), _);
						});
				}
				return i;
			}, e)) !== e) ? (f = function(e, t) {
				return st(p(e), p(t)) || st(u(e), u(t));
			}, i.sort("prev" === t.direction || "prevunique" === t.direction ? function(e, t) {
				return f(t, e);
			} : f), t.limit && t.limit < 1 / 0 && (i.length > t.limit ? i.length = t.limit : e.length === t.limit && i.length < t.limit && (r.dirty = !0)), s ? Object.freeze(i) : i) : e;
		}
		function Wn(e, t) {
			return 0 === st(e.lower, t.lower) && 0 === st(e.upper, t.upper) && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
		}
		var $n = {
			stack: "dbcore",
			level: 0,
			name: "Cache",
			create: function(e) {
				var n = e.schema.name;
				return t(t({}, e), {
					transaction: function(t, i, r) {
						var a, s, o = e.transaction(t, i, r);
						return "readwrite" === i && (r = (a = new AbortController()).signal, o.addEventListener("abort", (s = function(r) {
							return function() {
								if (a.abort(), "readwrite" === i) {
									for (var s = /* @__PURE__ */ new Set(), l = 0, c = t; l < c.length; l++) {
										var u = c[l], d = An["idb://".concat(n, "/").concat(u)];
										if (d) {
											var p = e.table(u), f = d.optimisticOps.filter(function(e) {
												return e.trans === o;
											});
											if (o._explicit && r && o.mutatedParts) for (var m = 0, g = Object.values(d.queries.query); m < g.length; m++) for (var y = 0, h = (I = g[m]).slice(); y < h.length; y++) kn((b = h[y]).obsSet, o.mutatedParts) && (K(I, b), b.subscribers.forEach(function(e) {
												return s.add(e);
											}));
											else if (0 < f.length) {
												d.optimisticOps = d.optimisticOps.filter(function(e) {
													return e.trans !== o;
												});
												for (var _ = 0, v = Object.values(d.queries.query); _ < v.length; _++) for (var I, b, w, S = 0, x = (I = v[_]).slice(); S < x.length; S++) null != (b = x[S]).res && o.mutatedParts && (r && !b.dirty ? (w = Object.isFrozen(b.res), w = Un(b.res, b.req, f, p, b, w), b.dirty ? (K(I, b), b.subscribers.forEach(function(e) {
													return s.add(e);
												})) : w !== b.res && (b.res = w, b.promise = Ie.resolve({ result: w }))) : (b.dirty && K(I, b), b.subscribers.forEach(function(e) {
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
						})(!1), { signal: r }), o.addEventListener("error", s(!1), { signal: r }), o.addEventListener("complete", s(!0), { signal: r })), o;
					},
					table: function(i) {
						var r = e.table(i), a = r.schema.primaryKey;
						return t(t({}, r), {
							mutate: function(e) {
								var s, o = ye.trans;
								return a.outbound || "disabled" === o.db._options.cache || o.explicit || "readwrite" !== o.idbtrans.mode || !(s = An["idb://".concat(n, "/").concat(i)]) ? r.mutate(e) : (o = r.mutate(e), "add" !== e.type && "put" !== e.type || !(50 <= e.values.length || Nn(a, e).some(function(e) {
									return null == e;
								})) ? (s.optimisticOps.push(e), e.mutatedParts && Cn(e.mutatedParts), o.then(function(t) {
									0 < t.numFailures && (K(s.optimisticOps, e), (t = Vn(0, e, t)) && s.optimisticOps.push(t), e.mutatedParts) && Cn(e.mutatedParts);
								}), o.catch(function() {
									K(s.optimisticOps, e), e.mutatedParts && Cn(e.mutatedParts);
								})) : o.then(function(n) {
									var i = Vn(0, t(t({}, e), { values: e.values.map(function(e, i) {
										var r;
										return n.failures[i] ? e : (b(r = null != (r = a.keyPath) && r.includes(".") ? R(e) : t({}, e), a.keyPath, n.results[i]), r);
									}) }), n);
									s.optimisticOps.push(i), queueMicrotask(function() {
										return e.mutatedParts && Cn(e.mutatedParts);
									});
								}), o);
							},
							query: function(e) {
								var t, a, s, o, l, c, u;
								return qn(ye, r) && Fn("query", e) ? (t = "immutable" === (null == (s = ye.trans) ? void 0 : s.db._options.cache), a = (s = ye).requery, s = s.signal, c = ((e, t, n, i) => {
									var r = An["idb://".concat(e, "/").concat(t)];
									if (!r) return [];
									if (!(e = r.queries[n])) return [
										null,
										!1,
										r,
										null
									];
									var a = e[(i.query ? i.query.index.name : null) || ""];
									if (!a) return [
										null,
										!1,
										r,
										null
									];
									switch (n) {
										case "query":
											var s = null != (o = i.direction) ? o : "next", o = a.find(function(e) {
												var t;
												return e.req.limit === i.limit && e.req.values === i.values && (null != (t = e.req.direction) ? t : "next") === s && Wn(e.req.query.range, i.query.range);
											});
											return o ? [
												o,
												!0,
												r,
												a
											] : [
												a.find(function(e) {
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
												r,
												a
											];
										case "count": return o = a.find(function(e) {
											return Wn(e.req.query.range, i.query.range);
										}), [
											o,
											!!o,
											r,
											a
										];
									}
								})(n, i, "query", e), u = c[0], o = c[2], l = c[3], u && c[1] ? u.obsSet = e.obsSet : (c = r.query(e).then(function(e) {
									var n = e.result;
									if (u && (u.res = n), t) {
										for (var i = 0, r = n.length; i < r; ++i) Object.freeze(n[i]);
										Object.freeze(n);
									}
									return e;
								}).catch(function(e) {
									return l && u && K(l, u), Promise.reject(e);
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
										var i, r;
										e.subscribers.delete(n), 0 === e.subscribers.size && (i = e, r = t, setTimeout(function() {
											0 === i.subscribers.size && K(r, i);
										}, 3e3));
									});
								}(u, l, a, s), u.promise.then(function(n) {
									return n = Un(n.result, e, null == o ? void 0 : o.optimisticOps, r, u, t), { result: t ? n : R(n) };
								})) : r.query(e);
							}
						});
					}
				});
			}
		};
		function Yn(e, t) {
			return new Proxy(e, { get: function(e, n, i) {
				return "db" === n ? t : Reflect.get(e, n, i);
			} });
		}
		Zn.prototype.version = function(e) {
			if (isNaN(e) || e < .1) throw new B.Type("Given version is not a positive number");
			if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new B.Schema("Cannot add version when database is open");
			this.verno = Math.max(this.verno, e);
			var t = this._versions, n = t.filter(function(t) {
				return t._cfg.version === e;
			})[0];
			return n || (n = new this.Version(e), t.push(n), t.sort(en), n.stores({}), this._state.autoSchema = !1), n;
		}, Zn.prototype._whenReady = function(e) {
			var t = this;
			return this.idbdb && (this._state.openComplete || ye.letThrough || this._vip) ? e() : new Ie(function(e, n) {
				if (t._state.openComplete) return n(new B.DatabaseClosed(t._state.dbOpenError));
				if (!t._state.isBeingOpened) {
					if (!t._state.autoOpen) return void n(new B.DatabaseClosed());
					t.open().catch(W);
				}
				t._state.dbReadyPromise.then(e, n);
			}).then(e);
		}, Zn.prototype.use = function(e) {
			var t = e.stack, n = e.create, i = e.level, r = ((e = e.name) && this.unuse({
				stack: t,
				name: e
			}), this._middlewares[t] || (this._middlewares[t] = []));
			return r.push({
				stack: t,
				create: n,
				level: null == i ? 10 : i,
				name: e
			}), r.sort(function(e, t) {
				return e.level - t.level;
			}), this;
		}, Zn.prototype.unuse = function(e) {
			var t = e.stack, n = e.name, i = e.create;
			return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
				return i ? e.create !== i : !!n && e.name !== n;
			})), this;
		}, Zn.prototype.open = function() {
			var e = this;
			return Ue(ge, function() {
				return Tn(e);
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
			e ? (t.isBeingOpened && t.cancelOpen(new B.DatabaseClosed()), this._close(), t.autoOpen = !1, t.dbOpenError = new B.DatabaseClosed()) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null);
		}, Zn.prototype.delete = function(e) {
			var t = this, n = (void 0 === e && (e = { disableAutoOpen: !0 }), 0 < arguments.length && "object" != typeof arguments[0]), i = this._state;
			return new Ie(function(r, a) {
				function s() {
					t.close(e);
					var n = t._deps.indexedDB.deleteDatabase(t.name);
					n.onsuccess = Te(function() {
						var e, n = t._deps, i = t.name;
						mn(e = n.indexedDB) || i === Je || fn(e, n.IDBKeyRange).delete(i).catch(W), r();
					}), n.onerror = Pt(a), n.onblocked = t._fireOnBlocked;
				}
				if (n) throw new B.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
				return r(this._allTables).map(function(t) {
					return e._allTables[t];
				});
			},
			enumerable: !1,
			configurable: !0
		}), Zn.prototype.transaction = function() {
			var e = function(e, t, n) {
				var i = arguments.length;
				if (i < 2) throw new B.InvalidArgument("Too few arguments");
				for (var r = new Array(i - 1); --i;) r[i - 1] = arguments[i];
				return n = r.pop(), [
					e,
					x(r),
					n
				];
			}.apply(this, arguments);
			return this._transaction.apply(this, e);
		}, Zn.prototype._transaction = function(e, t, n) {
			var i, r, a = this, s = ye.trans, o = (s && s.db === this && -1 === e.indexOf("!") || (s = null), -1 !== e.indexOf("?"));
			e = e.replace("!", "").replace("?", "");
			try {
				if (r = t.map(function(e) {
					if ("string" != typeof (e = e instanceof a.Table ? e.name : e)) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
					return e;
				}), "r" == e || e === et) i = et;
				else {
					if ("rw" != e && e != tt) throw new B.InvalidArgument("Invalid transaction mode: " + e);
					i = tt;
				}
				if (s) {
					if (s.mode === et && i === tt) {
						if (!o) throw new B.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
						s = null;
					}
					s && r.forEach(function(e) {
						if (s && -1 === s.storeNames.indexOf(e)) {
							if (!o) throw new B.SubTransaction("Table " + e + " not included in parent transaction.");
							s = null;
						}
					}), o && s && !s.active && (s = null);
				}
			} catch (n) {
				return s ? s._promise(null, function(e, t) {
					t(n);
				}) : Ye(n);
			}
			var l = function e(t, n, i, r, a) {
				return Ie.resolve().then(function() {
					var s = ye.transless || ye, o = t._createTransaction(n, i, t._dbSchema, r);
					if (o.explicit = !0, s = {
						trans: o,
						transless: s
					}, r) o.idbtrans = r.idbtrans;
					else try {
						o.create(), o.idbtrans._explicit = !0, t._state.PR1398_maxLoop = 3;
					} catch (s) {
						return s.name === H.InvalidState && t.isOpen() && 0 < --t._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), t.close({ disableAutoOpen: !1 }), t.open().then(function() {
							return e(t, n, i, null, a);
						})) : Ye(s);
					}
					var l, c = P(a);
					return c && Le(), s = Ie.follow(function() {
						var e;
						(l = a.call(o, o)) && (c ? (e = qe.bind(null, null), l.then(e, e)) : "function" == typeof l.next && "function" == typeof l.throw && (l = Kn(l)));
					}, s), (l && "function" == typeof l.then ? Ie.resolve(l).then(function(e) {
						return o.active ? e : Ye(new B.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
					}) : s.then(function() {
						return l;
					})).then(function(e) {
						return r && o._resolve(), o._completion.then(function() {
							return e;
						});
					}).catch(function(e) {
						return o._reject(e), Ye(e);
					});
				});
			}.bind(null, this, i, r, s, n);
			return s ? s._promise(i, l, "lock") : ye.trans ? Ue(ye.transless, function() {
				return a._whenReady(l);
			}) : this._whenReady(l);
		}, Zn.prototype.table = function(e) {
			if (c(this._allTables, e)) return this._allTables[e];
			throw new B.InvalidTable("Table ".concat(e, " does not exist"));
		};
		var Xn = Zn;
		function Zn(e, n) {
			var i, r, a, s, o, l = this, c = (this._middlewares = {}, this.verno = 0, Zn.dependencies), u = (this._options = n = t({
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
			}), this._state = u, this.name = e, this.on = gt(this, "populate", "blocked", "versionchange", "close", { ready: [te, W] }), this.once = function(e, t) {
				var n = function() {
					for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
					l.on(e).unsubscribe(n), t.apply(l, i);
				};
				return l.on(e, n);
			}, this.on.ready.subscribe = h(this.on.ready.subscribe, function(e) {
				return function(t, n) {
					Zn.vip(function() {
						var i, r = l._state;
						r.openComplete ? (r.dbOpenError || Ie.resolve().then(t), n && e(t)) : r.onReadyBeingFired ? (r.onReadyBeingFired.push(t), n && e(t)) : (e(t), i = l, n || e(function e() {
							i.on.ready.unsubscribe(t), i.on.ready.unsubscribe(e);
						}));
					});
				};
			}), this.Collection = (i = this, yt(xt.prototype, function(e, t) {
				this.db = i;
				var n = it, r = null;
				if (t) try {
					n = t();
				} catch (e) {
					r = e;
				}
				var a = (e = (t = e._ctx).table).hook.reading.fire;
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
					error: r,
					or: t.or,
					valueMapper: a !== $ ? a : null
				};
			})), this.Table = (r = this, yt(ft.prototype, function(e, t, n) {
				this.db = r, this._tx = n, this.name = e, this.schema = t, this.hook = r._allTables[e] ? r._allTables[e].hook : gt(null, {
					creating: [Z, W],
					reading: [Y, $],
					updating: [J, W],
					deleting: [Q, W]
				});
			})), this.Transaction = (a = this, yt(qt.prototype, function(e, t, n, i, r) {
				var s = this;
				"readonly" !== e && t.forEach(function(e) {
					(e = null == (e = n[e]) ? void 0 : e.yProps) && (t = t.concat(e.map(function(e) {
						return e.updatesTable;
					})));
				}), this.db = a, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = i, this.idbtrans = null, this.on = gt(this, "complete", "error", "abort"), this.parent = r || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Ie(function(e, t) {
					s._resolve = e, s._reject = t;
				}), this._completion.then(function() {
					s.active = !1, s.on.complete.fire();
				}, function(e) {
					var t = s.active;
					return s.active = !1, s.on.error.fire(e), s.parent ? s.parent._reject(e) : t && s.idbtrans && s.idbtrans.abort(), Ye(e);
				});
			})), this.Version = (s = this, yt(un.prototype, function(e) {
				this.db = s, this._cfg = {
					version: e,
					storesSource: null,
					dbschema: {},
					tables: {},
					contentUpgrade: null
				};
			})), this.WhereClause = (o = this, yt(Gt.prototype, function(e, t, n) {
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
				}, this._IDBKeyRange = o._deps.IDBKeyRange, !this._IDBKeyRange) throw new B.MissingAPI();
			})), this.on("versionchange", function(e) {
				0 < e.newVersion ? console.warn("Another connection wants to upgrade database '".concat(l.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(l.name, "'. Closing db now to resume the delete request.")), l.close({ disableAutoOpen: !1 });
			}), this.on("blocked", function(e) {
				!e.newVersion || e.newVersion < e.oldVersion ? console.warn("Dexie.delete('".concat(l.name, "') was blocked")) : console.warn("Upgrade '".concat(l.name, "' blocked by other connection holding version ").concat(e.oldVersion / 10));
			}), this._maxKey = Ut(n.IDBKeyRange), this._createTransaction = function(e, t, n, i) {
				return new l.Transaction(e, t, n, l._options.chromeTransactionDurability, i);
			}, this._fireOnBlocked = function(e) {
				l.on("blocked").fire(e), pn.toArray().filter(function(e) {
					return e.name === l.name && e !== l && !e._state.vcFired;
				}).map(function(t) {
					return t.on("versionchange").fire(e);
				});
			}, this.use(Ln), this.use($n), this.use(Hn), this.use(On), this.use(zn), new Proxy(this, { get: function(e, t, n) {
				var i;
				return "_vip" === t || ("table" === t ? function(e) {
					return Yn(l.table(e), d);
				} : (i = Reflect.get(e, t, n)) instanceof ft ? Yn(i, d) : "tables" === t ? i.map(function(e) {
					return Yn(e, d);
				}) : "_createTransaction" === t ? function() {
					return Yn(i.apply(this, arguments), d);
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
				var r, a = P(e), s = !1, o = {}, l = {}, c = {
					get closed() {
						return s;
					},
					unsubscribe: function() {
						s || (s = !0, r && r.abort(), u && Lt.storagemutated.unsubscribe(f));
					}
				}, u = (i.start && i.start(c), !1), d = function() {
					return $e(m);
				};
				function p() {
					return kn(l, o);
				}
				var f = function(e) {
					xn(o, e), p() && d();
				}, m = function() {
					var c, m, g;
					!s && Qn.indexedDB && (o = {}, c = {}, r && r.abort(), r = new AbortController(), g = ((t) => {
						var n = Re();
						try {
							a && Le();
							var i = je(e, t);
							return i = a ? i.finally(qe) : i;
						} finally {
							n && Ce();
						}
					})(m = {
						subscr: c,
						signal: r.signal,
						requery: d,
						querier: e,
						trans: null
					}), u || (Lt.storagemutated.subscribe(f), u = !0), Promise.resolve(g).then(function(e) {
						n = !0, t = e, s || m.signal.aborted || (p() || (l = c, p()) ? d() : (o = {}, $e(function() {
							return !s && i.next && i.next(e);
						})));
					}, function(e) {
						n = !1, ["DatabaseClosedError", "AbortError"].includes(null == e ? void 0 : e.name) || s || $e(function() {
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
			var t = ai;
			try {
				ai = !0, Lt.storagemutated.fire(e), Dn(e, !0);
			} finally {
				ai = t;
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
					return Ye(new B.MissingAPI());
				}
				var t, n;
			},
			defineClass: function() {
				return function(e) {
					s(this, e);
				};
			},
			ignoreTransaction: function(e) {
				return ye.trans ? Ue(ye.transless || ge, e) : e();
			},
			vip: gn,
			async: function(e) {
				return function() {
					try {
						var t = Kn(e.apply(this, arguments));
						return t && "function" == typeof t.then ? t : Ie.resolve(t);
					} catch (t) {
						return Ye(t);
					}
				};
			},
			spawn: function(e, t, n) {
				try {
					var i = Kn(e.apply(n, t || []));
					return i && "function" == typeof i.then ? i : Ie.resolve(i);
				} catch (e) {
					return Ye(e);
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
			override: h,
			Events: gt,
			on: Lt,
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
			deepClone: R,
			getObjectDiff: Pn,
			cmp: st,
			asap: v,
			minKey: -1 / 0,
			addons: [],
			connections: { get: pn.toArray },
			errnames: H,
			dependencies: Qn,
			cache: An,
			semVer: "4.4.5",
			version: "4.4.5".split(".").map(function(e) {
				return parseInt(e);
			}).reduce(function(e, t, n) {
				return e + t / Math.pow(10, 2 * n);
			})
		})), ni.maxKey = Ut(ni.dependencies.IDBKeyRange), "undefined" != typeof dispatchEvent && "undefined" != typeof addEventListener && (Lt(zt, function(e) {
			ai || (e = new CustomEvent(jt, { detail: e }), ai = !0, dispatchEvent(e), ai = !1);
		}), addEventListener(jt, function(e) {
			e = e.detail, ai || ii(e);
		}));
		var ri, ai = !1, si = function() {};
		return "undefined" != typeof BroadcastChannel && ((si = function() {
			(ri = new BroadcastChannel(jt)).onmessage = function(e) {
				return e.data && ii(e.data);
			};
		})(), "function" == typeof ri.unref && ri.unref(), Lt(zt, function(e) {
			ai || ri.postMessage(e);
		})), "undefined" != typeof addEventListener && (addEventListener("pagehide", function(e) {
			if (!Xn.disableBfCache && e.persisted) {
				ri?.close();
				for (var t = 0, n = pn.toArray(); t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
			}
		}), addEventListener("pageshow", function(e) {
			!Xn.disableBfCache && e.persisted && (si(), ii({ all: new hn(-1 / 0, [[]]) }));
		})), Ie.rejectionMapper = function(e, t) {
			return !e || e instanceof j || e instanceof TypeError || e instanceof SyntaxError || !e.name || !U[e.name] ? e : (t = new U[e.name](t || e.message, e), "stack" in e && p(t, "stack", { get: function() {
				return this.inner.stack;
			} }), t);
		}, ie(ne), t(Xn, Object.freeze({
			__proto__: null,
			DEFAULT_MAX_CONNECTIONS: 1e3,
			Dexie: Xn,
			Entity: at,
			PropModification: ut,
			RangeSet: hn,
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
const { liveQuery: d, mergeRanges: p, rangesOverlap: f, RangeSet: m, cmp: g, Entity: y, PropModification: h, replacePrefix: _, add: v, remove: I, DexieYProvider: b } = u, w = [
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
		ggirFolder: "Saved GGIR windows and values remain authoritative",
		ggirRaw: "Configured scoring; GGIR angle requests use Part 4",
		ggirEvidence: "frontend/src/services/placement-request.ts",
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
		ggirFolder: "App display preference; no GGIR numeric counterpart",
		ggirRaw: "App display preference; no GGIR numeric counterpart",
		ggirEvidence: "frontend/src/hooks/useActivityData.ts; frontend/src/components/activity-plot.tsx",
		perUserCompute: !1
	}
}, R = {
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
}, C = [
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
], D = [
	"HDCZA",
	"HorAngle",
	"NotWorn",
	"MotionWare",
	"HLRB"
], M = [
	"Sadeh1994",
	"Galland2012",
	"ColeKripke1992",
	"Oakley1997",
	"NotWorn"
], T = ["zero_crossing_y_60s", "neishabouri_vm_60s"], K = {
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
function G(e, t) {
	return A[E[e].range] ? N(E[e].range, t) : `unknown range for ${e}`;
}
function O(e, t, n) {
	return "study" === E[e].authority && void 0 !== t && null === G(e, t) ? {
		value: t,
		provenance: "study"
	} : void 0 !== n && null === G(e, n) ? {
		value: n,
		provenance: "user"
	} : {
		value: R[e],
		provenance: "default"
	};
}
function P(e, t) {
	const n = A[e];
	if ("integer" !== n?.kind) return null;
	const i = "number" == typeof t ? t : "string" == typeof t ? Number.parseFloat(t) : NaN;
	if (!Number.isFinite(i)) return null;
	const r = Math.floor(i);
	return void 0 !== n.minimum && r < n.minimum ? null : void 0 === n.maximum ? r : Math.min(n.maximum, r);
}
function N(e, t) {
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
			if (void 0 !== e.values) for (const [r, a] of Object.entries(t)) {
				const t = N(e.values, a);
				if (null !== t) return `${r}: ${t}`;
			}
			for (const [r, a] of Object.entries(e.fields ?? {})) {
				const n = t[r];
				if ((null == n || n === Number.POSITIVE_INFINITY) && e.optionalFields?.includes(r)) continue;
				const i = N(a, n);
				if (null !== i) return `${r} ${i}`;
			}
			let n = null, i = null;
			for (const r of e.ladder ?? []) {
				const e = t[r];
				if (null != e && e !== Number.POSITIVE_INFINITY) {
					if (null !== i) return `${r} needs ${i}`;
					if (null !== n && e <= n[1]) return `${r} must be above ${n[0]}`;
					n = [r, e];
				} else i ??= r;
			}
			return null;
		}(n, t);
		default: return "unhandled range kind";
	}
}
const z = "__legacy__", j = "__legacy_dr__", L = "__persisted_store_state", q = Object.values(E).flatMap((e) => {
	const t = A[e.range];
	return "list" === t?.kind && t.members.length > 0 ? [{
		extras: e.storeKeys.extras,
		zustand: e.storeKeys.zustand,
		members: new Set(t.members)
	}] : [];
});
function F(e, t) {
	let n = e;
	for (const i of q) {
		const r = i[t], a = void 0 === r ? void 0 : e[r];
		if (void 0 === r || !Array.isArray(a)) continue;
		const s = a.filter((e) => "string" == typeof e && i.members.has(e));
		s.length !== a.length && (n = {
			...n,
			[r]: s
		});
	}
	return n;
}
function H(e) {
	if (void 0 === e) return e;
	const t = e.extraSettings;
	if (null === t || "object" != typeof t) return e;
	let n = F(t, "extras");
	if ("__persisted_store_state" in n) {
		const e = function(e) {
			if ("string" != typeof e) return e;
			try {
				const t = JSON.parse(e), n = t?.state;
				if (null === n || "object" != typeof n || Array.isArray(n)) return e;
				const i = F(n, "zustand");
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
const V = {
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
}, B = {
	CHOI_2011: "choi_2011",
	CHOI_2012: "choi_2012",
	BOTH: "both"
}, U = { PROOF_PENDING: "proof_pending" }, W = { UTC: "utc" }, $ = {
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
}, X = {
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
}, Z = {
	DIARY: "diary",
	L5: "l5",
	HDCZA: "hdcza",
	SMART: "smart",
	LONGEST_BOUT: "longest_bout",
	EVENT_MARKER: "event_marker",
	ACTIWARE_REST_INTERVAL: "actiware_rest_interval",
	NONE: "none"
}, Q = {
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
}, J = {
	LEGACY: "legacy",
	REGULARITY_V2: "regularity_v2",
	GGIR_PART4: "ggir_part4"
}, ee = {
	NONE: "none",
	WEBSTER: "webster"
}, te = {
	WRIST: "wrist",
	HIP: "hip"
}, ne = {
	CONSECUTIVE_ONSET3S_OFFSET5S: "consecutive_onset3s_offset5s",
	CONSECUTIVE_ONSET5S_OFFSET10S: "consecutive_onset5s_offset10s",
	TUDOR_LOCKE_2014: "tudor_locke_2014"
}, ie = [
	".csv",
	".gt3x",
	".bin",
	".rdata",
	".rda",
	".tar.bz2",
	".tbz2",
	".zip",
	".aw5"
];
function re(e, t, n) {
	const i = Number(e), r = Number(t), a = Number(n), s = /* @__PURE__ */ new Date(0);
	return s.setUTCFullYear(i, r - 1, a), i < 1 || s.getUTCFullYear() !== i || s.getUTCMonth() !== r - 1 || s.getUTCDate() !== a ? null : `${String(e).padStart(4, "0")}-${t.padStart(2, "0")}-${n.padStart(2, "0")}`;
}
function ae(e) {
	const t = e.trim().split(/[T ]/)[0] ?? "";
	let n;
	if (n = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(t), n) return re(n[1] ?? "", n[2] ?? "", n[3] ?? "");
	if (n = /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/.exec(t), n && Number.parseInt(n[1] ?? "0", 10) > 12) return re(n[3] ?? "", n[2] ?? "", n[1] ?? "");
	if (n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(t), n) return re(n[3] ?? "", n[1] ?? "", n[2] ?? "");
	if (n = /^(\d{1,2})\/(\d{1,2})\/(\d{2})$/.exec(t), n) {
		const e = parseInt(n[3] ?? "0", 10);
		return re(e >= 50 ? 1900 + e : 2e3 + e, n[1] ?? "", n[2] ?? "");
	}
	return n = /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/.exec(t), n ? re(n[1] ?? "", n[2] ?? "", n[3] ?? "") : (n = /^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec(t), n ? re(n[3] ?? "", n[1] ?? "", n[2] ?? "") : null);
}
function se(e) {
	const t = e.replace(/\\/g, "/").split("/");
	return (t[t.length - 1] ?? e).toLowerCase();
}
function oe(e) {
	const t = se(e), n = t.lastIndexOf(".");
	return n > 0 ? t.slice(0, n) : t;
}
function le(e) {
	return e.replace(/\.RData$/i, "").replace(/\.(csv|gt3x|bin|cwa)(\.gz)?$/i, "");
}
const ce = /* @__PURE__ */ new Set([
	"",
	"nan",
	"none",
	"null",
	"nat"
]), ue = /^sc[-_ ]*0*(\d+)$/i;
function de(e) {
	let t = e.trim();
	if (ce.has(t.toLowerCase())) return null;
	t = t.replace(/\s+/gu, " "), /^\d+\.0+$/u.test(t) && (t = t.split(".", 1)[0]);
	const n = ue.exec(t);
	return n ? `sc-${n[1].replace(/^0+(?=\d)/u, "")}` : t.toLowerCase();
}
function pe(e) {
	return de(e) ?? "";
}
const fe = [".rdata", ".rda"];
function me(e) {
	const t = e.replace(/\\/g, "/").split("/"), n = t[t.length - 1] ?? e, i = n.toLowerCase();
	if (!i.startsWith("meta_")) return e;
	for (const r of fe) if (i.endsWith(r)) return n.slice(5, n.length - r.length) || e;
	return e;
}
const ge = /^sc[-_ ]*0*\d+(?=$|[-_\s.])/i, ye = /(?:^|[-_\s])(T\d{1,2})(?=$|[-_\s(])/i;
function he(e) {
	const t = me(e).replace(/\\/g, "/"), n = t.split("/").pop() ?? t, i = n.lastIndexOf("."), r = (i > 0 ? n.slice(0, i) : n).trim();
	if (!r) return null;
	const a = (r.split(/\s*\(/, 1)[0] ?? r).trim(), s = ge.exec(a);
	if (s) return s[0];
	const o = ye.exec(a);
	return void 0 !== o?.index ? a.slice(0, a.indexOf(o[1] ?? "", o.index)).replace(/[\s\-_]+$/, "") || null : (a.split(/\s+/, 1)[0] ?? "").replace(/[-_]?T\d{1,2}$/i, "").replace(/[-_]+$/, "") || null;
}
function _e(e) {
	return se(me(e.filename));
}
function ve(e) {
	return de((e.participantId?.length ? e.participantId : he(e.filename)) ?? "") ?? "";
}
function Ie(e) {
	const t = me(e.filename);
	return [...new Set([
		ve(e),
		...e.participantId ? [e.participantId] : [],
		se(e.filename),
		se(t),
		oe(e.filename),
		oe(t)
	].map((e) => e.trim().toLowerCase()))];
}
function be(e) {
	const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = (e, t) => {
		const n = s.get(e) ?? [];
		n.includes(t) || n.push(t), s.set(e, n);
	}, l = (e, t, n) => {
		e.has(t) || e.set(t, n);
	};
	for (const c of e) {
		t.set(se(c.filename), c), i.set(oe(c.filename), c);
		const e = me(c.filename);
		e !== c.filename && (l(t, se(e), c), l(i, oe(e), c));
		const s = ve(c);
		if (r.add(s), "incomplete" === c.ingestState) continue;
		const u = _e(c), d = n.get(u) ?? [];
		d.push(c), n.set(u, d), c.participantId ? s && (a.set(s, c), o(s, c)) : s && (l(a, s, c), o(s, c));
	}
	return {
		byFilename: t,
		byStem: i,
		byParticipantId: {
			has: (e) => r.has(e),
			all: (e) => s.get(e) ?? [],
			covering(e, t) {
				return this.all(e).filter((e) => e.availableDates.includes(t));
			},
			get(e, t) {
				if (t) {
					const n = this.covering(e, t);
					if (1 === n.length) return n[0];
				}
				return a.get(e);
			}
		},
		byRecording: n
	};
}
const we = {
	MATCHED: "matched",
	AMBIGUOUS: "ambiguous",
	UNMATCHED: "unmatched"
};
function Se(e, t, { byFilename: n, byStem: i, byParticipantId: r, byRecording: a }, s) {
	const o = e.trim();
	if (!o) return { status: we.UNMATCHED };
	const l = de(o) ?? "", c = r.all(l), u = se(o), d = function(e) {
		const t = ie.some((t) => e.endsWith(t)) ? oe(e) : le(e);
		return t === e ? void 0 : t;
	}(u), p = n.get(u) ?? i.get(u) ?? (r.has(l) || void 0 === d ? void 0 : i.get(d)), f = p ? [] : c, m = p ? [] : r.covering(l, t), g = m.find((e) => e.id === s);
	if (m.length > 1 && !g) return {
		status: we.AMBIGUOUS,
		count: m.length,
		candidates: m
	};
	const y = p ?? g ?? m[0] ?? (1 === f.length ? f[0] : void 0);
	return y?.id && "incomplete" !== y.ingestState && function(e, t) {
		return e.every((e) => 0 === e.availableDates.length) || e.some((e) => e.availableDates.includes(t));
	}(a.get(_e(y)) ?? [y], t) ? {
		status: we.MATCHED,
		file: y,
		basis: p ? "named" : "participant"
	} : {
		status: we.UNMATCHED,
		candidate: y ?? r.get(l)
	};
}
const xe = /* @__PURE__ */ new Set([
	"",
	"nan",
	"none",
	"null",
	"nat"
]);
function ke(e) {
	return xe.has(e.trim().toLowerCase());
}
function Ae(e) {
	return 65279 === e.charCodeAt(0) ? e.slice(1) : e;
}
function Ee(e, t = !0) {
	const n = [];
	let i = "", r = !1, a = 1, s = 1;
	for (let o = 0; o < e.length; o++) {
		const l = e.charAt(o);
		if ("\"" === l) {
			i += l, r && "\"" === e.charAt(o + 1) ? (i += "\"", o++) : r = !r;
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
		"\r\n" === c && o++, r ? i += c : (n.push({
			text: i,
			sourceRow: s
		}), i = "", s = a + 1), a++;
	}
	return t && i.length > 0 && !r && n.push({
		text: i,
		sourceRow: s
	}), {
		records: n,
		unterminatedQuotedField: r,
		...t ? {} : { remainder: i }
	};
}
const Re = [
	",",
	"	",
	";"
];
function Ce(e) {
	const t = Ae(e).split(/\r\n|\r|\n/).find((e) => e.trim().length > 0) ?? "", n = new Map(Re.map((e) => [e, 0]));
	let i = !1;
	for (const a of t) "\"" === a ? i = !i : !i && n.has(a) && n.set(a, (n.get(a) ?? 0) + 1);
	let r = ",";
	for (const a of Re) (n.get(a) ?? 0) > (n.get(r) ?? 0) && (r = a);
	return r;
}
function De(e, t) {
	const n = [];
	let i = "", r = !1;
	for (let a = 0; a < e.length; a++) {
		const s = e.charAt(a);
		"\"" === s ? r && "\"" === e.charAt(a + 1) ? (i += "\"", a++) : r = !r : s !== t || r ? i += s : (n.push(i), i = "");
	}
	return n.push(i), n;
}
function Me(e, t = ",") {
	return De(e, t);
}
function Te(e, t = ",") {
	return De(e, t).map((e) => e.trim());
}
function Ke(e) {
	const t = function(e) {
		return e.length > 0 && /^[=+\-@\t\r]/.test(e) ? `'${e}` : e;
	}(e);
	return t.includes(",") || t.includes("\"") || t.includes("\n") || t.includes("\r") ? `"${t.replace(/"/g, "\"\"")}"` : t;
}
const Ge = [
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
], Oe = Ge.map((e) => e.method), Pe = {
	actigraph: "ActiGraph counts",
	philips_actiwatch: "Philips Actiwatch counts",
	camntech_actiwatch: "CamNtech Actiwatch counts",
	condor: "Condor ActLumus/ActTrust counts",
	source_declared: "counts on the study's stated scale"
}, Ne = {
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
}, ze = {
	ggir_daily_summary: ["enmo_epoch_values"],
	axis_y_counts: ["count_epochs_60s", "count_epochs_30s"],
	vector_magnitude_counts: ["count_epochs_60s", "count_epochs_30s"],
	mims_epoch_values: ["mims_epoch_values"],
	preschool_activity_class_epochs: ["raw_acceleration"],
	enmo_mg_epochs: ["enmo_epoch_values"]
}, je = {
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
}, Le = [
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
], qe = {
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
}, Fe = [
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
], He = [
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
], Ve = [
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
], Be = [
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
], Ue = (He.map((e) => e.id), Le.map((e) => e.id)), We = ([{
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
}), $e = [30, 60], Ye = [
	"count_hasib",
	"angle_hasib",
	"lstm",
	"consensus"
], Xe = ["majority_tie_sleep", "strict_majority"], Ze = "algorithm-output-cube/v1", Qe = ["counts_axis_y", "counts_vm"], Je = ["neural_model"], et = "count_hasib", tt = "lstm", nt = "consensus", it = "sadeh_1994", rt = "neishabouri", at = "sleep_wake_epoch", st = "exploratory", ot = "ggir_parity_default", lt = "literature_reference", ct = "sleep_wake_epoch", ut = "local_model_validated", dt = "sleep_wake_epoch", pt = "derived_consensus", ft = ["sadeh_1994", "cole_kripke_1992"], mt = "zero_crossing", gt = {
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
}, yt = {
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
}, ht = {
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
}, _t = [
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
], vt = { angle_hasib: {
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
} }, It = {
	id: "default",
	label: "Default threshold",
	threshold: .5
}, bt = {
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
}, wt = [
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
], St = {
	majority_tie_sleep: "majority",
	strict_majority: "strict majority",
	intersection_sleep: "intersection",
	union_sleep: "union"
}, xt = {
	output_family: "count_hasib",
	count_family: "zero_crossing",
	axis: "y",
	epoch_seconds: 60,
	model_threshold: .5,
	implementation_variant: "hasib",
	neishabouri_cap_300: !0,
	consensus_strategy: "majority_tie_sleep"
}, kt = {
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
}, At = {
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
}, Et = {
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
}, Rt = [
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
], Ct = Rt.filter((e) => "planner_output_cell" === e.cellRole).map((e) => `${e.segments[0]?.literalValue ?? ""}${e.segmentSeparator}`).filter((e, t, n) => n.indexOf(e) === t).sort();
function Dt(e, t, n) {
	const i = gt[e];
	if (!i.compatibleAxisIds.includes(t)) throw new Error(`${e} does not provide ${t} count input.`);
	return i.seriesKeyTemplate.replace("{axis}", t).replace("{epoch_seconds}", String(n));
}
function Mt(e, t, n, i) {
	return ft.includes(e) && "zero_crossing" === t && "y" === n && 60 === i;
}
function Tt(e, t) {
	return "sadeh_1994" === e && "neishabouri" === t;
}
function Kt(e, t) {
	const n = e.segmentSeparator, i = e.segments, r = t.split(n), a = i.findIndex((e) => !0 === e.greedy);
	let s, o;
	if (a >= 0) {
		const e = i.length - a - 1;
		if (r.length < i.length) return null;
		o = r.slice(0, a).map((e) => [e]), o.push(r.slice(a, r.length - e));
		for (const t of r.slice(r.length - e)) o.push([t]);
		s = i;
	} else {
		const e = i.flatMap((e, t) => !0 === e.optional ? [t] : []), t = i.length - r.length;
		if (t < 0 || t > e.length) return null;
		const n = new Set(e.slice(e.length - t));
		s = i.filter((e, t) => !n.has(t)), o = r.map((e) => [e]);
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
				const t = Et[e.valueEnumerationId]?.[i];
				if (void 0 === t) return null;
				for (const [e, n] of Object.entries(t)) l[e] = n;
			}
			l[e.segmentRole] = i;
		} else if (i !== e.literalValue) return null;
	}
	return l;
}
function Gt(e) {
	let t = null;
	for (const n of Rt) {
		const i = Kt(n, e);
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
function Ot(e, t) {
	const n = Rt.find((t) => t.grammarId === e);
	if (void 0 === n) throw new Error(`Unknown cell id grammar ${e}.`);
	const i = [];
	for (const r of n.segments) {
		if (void 0 !== r.literalValue) {
			i.push(r.literalValue);
			continue;
		}
		const e = r.valueEnumerationId;
		let n = t[r.segmentRole];
		if (void 0 === n && void 0 !== e) {
			const i = Object.entries(Et[e] ?? {}).filter(([, e]) => {
				const n = Object.entries(e);
				return n.length > 0 && n.every(([e, n]) => String(t[e]) === String(n));
			});
			n = (1 === i.length ? i[0] : void 0)?.[0];
		}
		if (void 0 === n) {
			if (!0 === r.optional) continue;
			throw new Error(`Cell id segment ${r.segmentRole} has no value.`);
		}
		const a = String(n);
		if (void 0 !== e && void 0 === Et[e]?.[a]) throw new Error(`Cell id segment ${r.segmentRole} value ${a} is outside its declared enumeration.`);
		i.push(void 0 === r.tagPrefix ? a : `${r.tagPrefix}${a}`);
	}
	return i.join(n.segmentSeparator);
}
const Pt = { family: "unknown" };
function Nt(e, t) {
	const n = e[t];
	return void 0 === n ? void 0 : String(n);
}
function zt(e) {
	if ("string" != typeof e || 0 === e.length) return Pt;
	const t = Gt(e);
	if (null === t) return Pt;
	const n = t.values;
	switch (t.grammarId) {
		case "count_cell": {
			const e = Nt(n, "method_family"), t = Nt(n, "count_family"), i = Nt(n, "axis"), r = Nt(n, "epoch_seconds");
			if (void 0 === e || void 0 === t || void 0 === i || void 0 === r) return Pt;
			const a = Nt(n, "implementation_variant");
			return {
				family: "count_hasib",
				scorer: e,
				...void 0 !== a ? { provenance: a } : {},
				countSource: t,
				signalAxis: i,
				epoch: r
			};
		}
		case "angle_cell": {
			const e = Nt(n, "method_family"), t = Nt(n, "epoch_seconds");
			return void 0 === e || void 0 === t ? Pt : {
				family: "angle_hasib",
				scorer: e,
				signalAxis: "anglez",
				epoch: t
			};
		}
		case "model_cell": {
			const e = Nt(n, "model_slug"), t = Nt(n, "preset_slug");
			return void 0 === e || void 0 === t ? Pt : {
				family: "lstm",
				lstmModel: e,
				lstmThreshold: t
			};
		}
		case "consensus_cell": {
			const e = Nt(n, "strategy"), t = Nt(n, "epoch_seconds");
			return void 0 === e || void 0 === t ? Pt : {
				family: "consensus",
				consensusStrategy: e,
				epoch: t
			};
		}
		default: return Pt;
	}
}
const jt = new Map(Ve.map((e) => [e.id, e]));
new Map(Be.map((e) => [e.id, e]));
const Lt = Le.filter((e) => "sleep_wake" === e.kind).map((e) => ({
	id: e.id,
	displayGrid: e.displayGrid,
	execution: e.execution,
	requiredSignal: e.requiredSignal,
	family: e.family
})), qt = new Map(Lt.map((e) => [e.id, e])), Ft = new Map([...Lt].reverse().flatMap((e) => e.family ? [[e.family, e]] : []));
function Ht() {
	const e = Be.find((e) => null != e.countAxis);
	if (e) return e.grid;
	const t = [...Ve].sort((e, t) => t.epochSeconds - e.epochSeconds)[0];
	if (!t) throw new Error("ontology declares no epoch grids");
	return t.id;
}
function Vt(e) {
	return t = function(e) {
		if (!e) return Ht();
		const t = qt.get(e);
		if (t) return t.displayGrid;
		const n = zt(e);
		switch (n.family) {
			case "angle_hasib":
			case "lstm": {
				const e = n.scorer ?? n.lstmModel;
				return (e ? qt.get(e) ?? Ft.get(e) : void 0)?.displayGrid ?? Ht();
			}
			case "count_hasib":
			case "consensus":
			case "unknown": return Ht();
		}
	}(e), function(e) {
		const t = jt.get(e);
		if (!t) throw new Error(`unknown epoch grid: ${e}`);
		return t;
	}(t).epochSeconds;
	var t;
}
function Bt(e) {
	if (!e) return !1;
	const t = qt.get(e);
	return t ? "angle_spt" === t.execution : "angle_hasib" === zt(e).family;
}
Math.max(...Ve.map((e) => 86400 / e.epochSeconds * 3));
const Ut = $, Wt = /* @__PURE__ */ new Set([
	Ut.EPOCHS_60S,
	Ut.EPOCHS_5S_GGIR,
	Ut.GGIR_5S_UPLOAD
]), $t = Be.filter((e) => e.sourceSelectable).map((e) => ({
	value: e.id,
	label: e.label
})), Yt = /_(5|10|15|20|30)sec\.csv$/i, Xt = /RAW\.csv$/i;
function Zt(e) {
	return !!Xt.test(e) && e.replace(/\.csv$/i, "").endsWith("RAW");
}
function Qt(e) {
	const t = e.source_type ?? e.sourceType;
	if (t) return t;
	const n = e.metadata_json ?? {}, i = n.type;
	if ("gt3x" === i) return Ut.GT3X_BINARY;
	if ("geneactiv_bin" === i) return Ut.GENEACTIV_BIN;
	if ("raw_geneactiv" === i) return Ut.GENEACTIV_RAW_CSV;
	if ("actigraph_raw" === i) return Ut.ACTIGRAPH_RAW_CSV;
	if ("actlumus" === i) return Ut.ACTLUMUS_TXT;
	if ("acttrust" === i) return Ut.ACTTRUST_TXT;
	const r = (e.filename ?? "").toLowerCase();
	if (r.endsWith(".gt3x")) return Ut.GT3X_BINARY;
	if (r.endsWith(".bin")) return Ut.GENEACTIV_BIN;
	if (Zt(e.filename ?? "")) return Ut.ACTIGRAPH_RAW_CSV;
	if (r.endsWith("_60sec.csv")) return Ut.EPOCHS_60S;
	if (r.endsWith("_5sec_ggir.csv")) return Ut.GGIR_5S_UPLOAD;
	if (r.endsWith(".rdata") || r.endsWith(".rda")) return Ut.GGIR_5S_UPLOAD;
	if (Yt.test(r)) return Ut.ACTIGRAPH_EPOCHED_CSV;
	const a = n.epoch_length_seconds;
	if (60 === a) return Ut.EPOCHS_60S;
	if (5 === a) return Ut.EPOCHS_5S_GGIR;
	if ("raw" === e.status) {
		if (Zt(e.filename ?? "")) return Ut.ACTIGRAPH_RAW_CSV;
		if (r.endsWith(".csv")) return Ut.GENEACTIV_RAW_CSV;
	}
	return "gt3x" === e.devicePreset ? Ut.GT3X_BINARY : "geneactiv" !== e.devicePreset || r.endsWith("_60sec.csv") ? (e.epochLengthSeconds, Ut.EPOCHS_60S) : Ut.GENEACTIV_RAW_CSV;
}
function Jt(e) {
	return null != e && !function(e) {
		return Wt.has(e);
	}(e);
}
const en = {
	[Ut.GT3X_BINARY]: [[Ut.EPOCHS_60S, "60 s"], [Ut.EPOCHS_5S_GGIR, "5 s GGIR"]],
	[Ut.ACTIGRAPH_RAW_CSV]: [
		[Ut.ACTIGRAPH_RAW_CSV, "Raw"],
		[Ut.EPOCHS_60S, "60 s"],
		[Ut.EPOCHS_5S_GGIR, "5 s GGIR"]
	],
	[Ut.GENEACTIV_BIN]: [[Ut.EPOCHS_60S, "60 s"], [Ut.EPOCHS_5S_GGIR, "5 s GGIR"]],
	[Ut.GENEACTIV_RAW_CSV]: [[Ut.EPOCHS_60S, "60 s"], [Ut.EPOCHS_5S_GGIR, "5 s GGIR"]],
	[Ut.EPOCHS_60S]: [[Ut.EPOCHS_60S, "60 s"]],
	[Ut.ACTIGRAPH_EPOCHED_CSV]: [[Ut.EPOCHS_60S, "60 s"]],
	[Ut.ACTLUMUS_TXT]: [[Ut.EPOCHS_60S, "60 s"]],
	[Ut.ACTTRUST_TXT]: [[Ut.EPOCHS_60S, "60 s"]],
	[Ut.EPOCHS_5S_GGIR]: [[Ut.EPOCHS_5S_GGIR, "5 s GGIR"]],
	[Ut.GGIR_5S_UPLOAD]: [[Ut.GGIR_5S_UPLOAD, "5 s GGIR"]]
};
function tn(e, t, n = /* @__PURE__ */ new Set(), i = 60) {
	const r = 30 === i ? "30 s" : "60 s";
	return (en[t] ?? en[Ut.EPOCHS_60S]).map(([t, i]) => ({
		file_id: e,
		source_type: t,
		label: t === Ut.EPOCHS_60S ? r : i,
		available: !n.has(t)
	}));
}
function nn(e) {
	return !!e && (!!s(e) || Array.isArray(e.sleepMarkers) && e.sleepMarkers.length > 0);
}
function rn(e, t, n, i) {
	return !(!e || e.fileId !== t || e.date !== n) && i.length > 0 && i.length === e.sleepMarkers.length && i.every((t, n) => {
		const i = e.sleepMarkers[n];
		return void 0 !== i && t.onsetTimestamp === i.onsetTimestamp && t.offsetTimestamp === i.offsetTimestamp && t.markerType === i.markerType;
	});
}
function an(e) {
	return (e?.nonwearMarkers?.some((e) => null != e.startTimestamp && null != e.endTimestamp) ?? !1) || (e?.explicitNoNonwear ?? !1);
}
function sn(e) {
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
		scored: nn(e),
		nonwearDecided: an(e),
		nonwearSpans: JSON.stringify((Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : []).flatMap((e) => null != e.startTimestamp && null != e.endTimestamp ? [[e.startTimestamp, e.endTimestamp]] : []))
	};
}
function on(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (null == n.id) continue;
		let e = t.get(n.fileId);
		e || t.set(n.fileId, e = []), e.push(sn(n));
	}
	return [...t].map(([e, t]) => ({
		fileId: e,
		rows: t
	}));
}
function ln() {
	if ("undefined" != typeof crypto && "function" == typeof crypto.randomUUID) return crypto.randomUUID();
	const e = /* @__PURE__ */ new Uint8Array(16);
	crypto.getRandomValues(e);
	const t = e[6] ?? 0, n = e[8] ?? 0;
	e[6] = 15 & t | 64, e[8] = 63 & n | 128;
	const i = [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
	return `${i.slice(0, 8)}-${i.slice(8, 12)}-${i.slice(12, 16)}-${i.slice(16, 20)}-${i.slice(20)}`;
}
function cn(e) {
	e.on("versionchange", (t) => {
		if (null !== t.newVersion) return async function() {
			try {
				const { useSleepScoringStore: e, flushSaveWithTimeout: t } = await import("./store-J-gecDpt.js").then((e) => e.r), { isDirty: n, _flushSave: i } = e.getState();
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
var un = n({
	DIARY_CLOCK_KEY_RENAMES: () => _n,
	DIARY_DIRTY_PARTICIPANT_PREFIX: () => mn,
	FILE_DIARY_BINDING_INDEX: () => fn,
	FILE_DIARY_PARTICIPANT_INDEX: () => dn,
	FILE_DIARY_SOURCE_INDEX: () => pn,
	GGIR_RESULTS_BLOB_FIELDS: () => In,
	LATEST_SCHEMA_VERSION: () => 50,
	SleepScoringDB: () => An,
	UNCACHED_INDEX_SPEC_PARSER: () => xn,
	getGgirResultsBundle: () => bn,
	isCompletedFileRecord: () => yn,
	joinGgirResultsBlobs: () => wn,
	memoizeIndexSpecParsing: () => kn,
	renameDiaryClockKeysInPlace: () => vn,
	takeActiwareFileData: () => Sn,
	takeGgirResultsBlobs: () => gn
});
const dn = "diaryParticipantKey", pn = "diarySourceKeys", fn = "[id+source+diaryParticipantKey]", mn = "diary-dirty:";
function gn(e) {
	const t = Object.fromEntries(In.flatMap((t) => e[t] ? [[t, e[t]]] : []));
	for (const n of In) Reflect.deleteProperty(e, n);
	return Object.keys(t).length > 0 ? t : null;
}
function yn(e) {
	return "incomplete" !== e.ingestState;
}
const hn = new Set(Object.keys(i).filter((e) => i[e].nightDecision)), _n = [
	["bedTime", "diaryInBedTime"],
	["lightsOut", "diaryOnsetTime"],
	["wakeTime", "diaryWakeTime"],
	["gotUp", "diaryOutOfBedTime"]
];
function vn(e) {
	let t = !1;
	for (const [n, i] of _n) Object.hasOwn(e, n) && (Object.hasOwn(e, i) || (e[i] = e[n]), Reflect.deleteProperty(e, n), t = !0);
	return t;
}
const In = [
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
async function bn(e, t) {
	const [n, i] = await Promise.all([e.ggirResultsBundles.get(t), e.ggirResultsBlobs.get(t)]);
	return n ? wn(n, i) : void 0;
}
function wn(e, t) {
	return {
		...e,
		...Object.fromEntries(In.flatMap((e) => t?.[e] ? [[e, t[e]]] : []))
	};
}
function Sn(e) {
	const { actiwareIntervals: t, actiwareStatistics: n, actiwareStatisticsNeedsRecompute: i, actiwareSleepWake: r, actiwareRecording: a, actiwareWakeThreshold: s, oakleyThreshold: o } = e;
	delete e.actiwareIntervals, delete e.actiwareStatistics, delete e.actiwareStatisticsNeedsRecompute, delete e.actiwareSleepWake, delete e.actiwareRecording, delete e.actiwareWakeThreshold, delete e.oakleyThreshold;
	const l = {
		...t ? { actiwareIntervals: t } : {},
		...n ? { actiwareStatistics: n } : {},
		...null != i ? { actiwareStatisticsNeedsRecompute: i } : {},
		...r ? { actiwareSleepWake: r } : {},
		...a ? { actiwareRecording: a } : {},
		...null != s ? { actiwareWakeThreshold: s } : {},
		...null != o ? { oakleyThreshold: o } : {}
	};
	return Object.keys(l).length > 0 ? l : null;
}
const xn = Symbol.for("sleep-scoring.dexie.uncached-parse-index-syntax");
function kn(e) {
	const t = Object.getPrototypeOf(e.Version.prototype), n = Reflect.get(t, "_parseIndexSyntax");
	if (n[xn]) return;
	const i = /* @__PURE__ */ new Map(), r = function(e) {
		let t = i.get(e);
		return t || (t = n.call(this, e), i.set(e, t)), t.map((e) => ({
			...e,
			keyPath: Array.isArray(e.keyPath) ? [...e.keyPath] : e.keyPath
		}));
	};
	r[xn] = n, t._parseIndexSyntax = r;
}
var An = class extends u {
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
		super(e), kn(this), this.version(1).stores({
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
				}) ?? [], r = i.nonwearMarkers?.map((e) => {
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
					nonwearMarkers: r
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
				const t = Qt({
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
				algorithm: z
			});
		});
		const t = V.SADEH_1994_ACTILIFE;
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
			const n = await e.table("markers").toArray(), i = (/* @__PURE__ */ new Date()).toISOString(), r = /* @__PURE__ */ new Map(), a = [], s = [];
			for (const o of n) {
				const e = "string" == typeof o.algorithm && o.algorithm.length > 0 ? o.algorithm : t, n = "__legacy__" === e ? t : e, l = `${o.fileId}:${o.date}:${o.username}:${n}`;
				let c = r.get(l);
				c || (c = ln(), r.set(l, c), a.push({
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
			s.length > 0 && await e.table("markers").bulkPut(s), a.length > 0 && await e.table("scoringSessions").bulkPut(a);
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
			for (const r of n) {
				const { sourceType: e, ...n } = r, a = Qt(n);
				"epochs_60s" !== a && i.push(t.update(r.id, { sourceType: a }));
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
			for (const [r, a] of Object.entries(n)) {
				const e = await t.where("sourceType").equals(r).toArray();
				for (const n of e) i.push(t.update(n.id, { sourceType: a }));
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
			for (const r of n) r.detectionRule || i.push(t.update(r.id, { detectionRule: j }));
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
			const t = vn, n = (n) => e.table(n).toCollection().modify((e) => {
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
			const t = e.table("diaryImportSessions"), n = e.table("diaryImportSessionBytes"), i = await t.toArray(), r = [];
			for (const a of i) {
				const e = a.sourceSha256;
				if ("string" != typeof e) continue;
				const t = a.sourceBytes;
				t instanceof ArrayBuffer && r.push({
					sourceSha256: e,
					sizeBytes: "number" == typeof a.sizeBytes ? a.sizeBytes : t.byteLength,
					sourceBytes: t
				}), delete a.sourceBytes;
			}
			await n.bulkPut(r), await t.bulkPut(i);
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
			const t = on(await e.table("markers").toArray());
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
					const n = Sn(t);
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
			await t.clear(), await t.bulkPut(on(await e.table("markers").toArray()));
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
				const r = Sn(e);
				if (r) {
					const a = await n.get(i);
					await t.put(e), await n.put({
						fileId: i,
						...r,
						...a
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
				hn.has(a(e.action)) && t.add(`${String(e.fileId)}|${e.analysisDate}|${e.username}`);
			});
			const n = e.table("markers"), i = await n.filter((e) => "auto_score" !== e.username && !s(e) && !e.explicitNoNonwear && !e.needsConsensus && Array.isArray(e.sleepMarkers) && e.sleepMarkers.length > 0 && e.sleepMarkers.every((e) => "auto" === e.source && !e.edited) && (!Array.isArray(e.nonwearMarkers) || 0 === e.nonwearMarkers.length) && !t.has(`${String(e.fileId)}|${e.date}|${e.username}`)).toArray(), r = /* @__PURE__ */ new Set();
			for (const a of i) {
				const e = await n.where("[fileId+date+username+algorithm+detectionRule]").equals([
					a.fileId,
					a.date,
					"auto_score",
					a.algorithm ?? "",
					a.detectionRule ?? ""
				]).primaryKeys();
				await n.bulkDelete(e), await n.update(a.id, { username: "auto_score" }), r.add(a.fileId);
			}
			r.size > 0 && await e.table("markerProvenance").bulkPut(on(await n.where("fileId").anyOf([...r]).toArray()));
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
				const e = await t.get(i), r = crypto.randomUUID();
				await n.update(i, { ggirBundleRevision: r }), e?.reviewsByScorer && (delete e.reviewsByScorer, await t.put(e));
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
				e.diaryParticipantKey = ve(e);
			});
		});
		const n = (e) => [.../* @__PURE__ */ new Set([...Ie({ filename: e }), pe(e)])];
		this.version(41).stores({
			files: "++id, &filename, fileHash, source, participantId, sourceType, sourceContentHash, diaryParticipantKey, *diarySourceKeys, [id+source+diaryParticipantKey]",
			diaryOccurrences: "recordSha256, occurrenceIdentitySha256, profileIdentity.profileSha256, [normalizedSourceKey+analysisDate], fileId, createdAt, [fileId+analysisDate]",
			stagedDiaryEntries: "++id, &[normalizedSourceKey+analysisDate], normalizedSourceKey, analysisDate, attachedFileId, *diarySourceKeys"
		});
		const i = (e, t) => {
			("versionchange" !== t.idbtrans.mode || t.idbtrans.objectStoreNames.contains("diaryBindingDirty")) && t.idbtrans.objectStore("diaryBindingDirty").put({ key: "number" == typeof e ? e : mn + e });
		}, l = (e, t) => {
			e.diaryParticipantKey = ve(e), e.diarySourceKeys = Ie(e), "local" === e.source && i(e.diaryParticipantKey, t);
		};
		this.version(42).stores({ diaryBindingDirty: "key" }).upgrade(async (e) => {
			const t = e.table("projectMeta").where("key").between(mn, "diary-dirty:￿", !0, !0);
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
				e.byDate = r(e.byDate);
			});
			const n = e.table("markerProvenance");
			await n.clear(), await n.bulkPut(on(await t.toArray()));
		}), this.version(45).stores({ diaryEntries: "++id, &[fileId+analysisDate], fileId, analysisDate" }), this.version(49).stores({ ggirResultsBlobs: "&fileId" }).upgrade(async (e) => {
			const t = e.table("ggirResultsBundles"), n = e.table("ggirResultsBlobs");
			for (const i of await t.toCollection().primaryKeys()) {
				const e = await t.get(i);
				if (!e) continue;
				const r = gn(e);
				r && (await n.put({
					fileId: i,
					...r
				}), await t.put(e));
			}
		}), this.version(50).stores({ ggirCorrectedValues: "&fileId" }), this.use({
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
		}), this.use({
			stack: "dbcore",
			name: "ggir-results-blobs",
			create: (e) => ({
				...e,
				transaction: (t, n, i) => e.transaction("readwrite" === n && t.includes("ggirResultsBundles") ? [.../* @__PURE__ */ new Set([...t, "ggirResultsBlobs"])] : t, n, i),
				table: (t) => {
					const n = e.table(t);
					return "ggirResultsBundles" !== t ? n : {
						...n,
						mutate: (e) => n.mutate("add" === e.type || "put" === e.type ? {
							...e,
							values: e.values.map((e) => ({ ...e }))
						} : e)
					};
				}
			})
		});
		const c = (e) => "versionchange" === e.idbtrans.mode ? null : e.idbtrans.objectStore("ggirResultsBlobs");
		this.ggirResultsBundles.hook("creating", (e, t, n) => {
			const i = c(n), r = i ? gn(t) : null;
			i && r && i.put({
				fileId: t.fileId,
				...r
			});
		}), this.ggirResultsBundles.hook("updating", (e, t, n, i) => {
			const r = c(i), a = In.filter((t) => t in e);
			if (!r || 0 === a.length) return;
			const s = (n) => {
				const i = {
					...e.part1 ? {} : n,
					fileId: t
				};
				Object.assign(i, Object.fromEntries(a.flatMap((t) => e[t] ? [[t, e[t]]] : []))), r.put(i);
			};
			return e.part1 ? s(void 0) : r.get(t).onsuccess = (e) => {
				s(e.target.result);
			}, Object.fromEntries(a.map((e) => [e, void 0]));
		}), this.files.hook("creating", (e, t, n) => {
			l(t, n);
		}), this.files.hook("updating", (e, t, n, r) => {
			const a = {
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
			].some((t) => t in e && JSON.stringify(n[t]) !== JSON.stringify(a[t])) && ("local" === n.source && i(ve(n), r), "local" === a.source && i(ve(a), r)), {
				diaryParticipantKey: ve(a),
				diarySourceKeys: Ie(a)
			};
		}), this.files.hook("deleting", (e, t, n) => {
			"local" === t.source && i(ve(t), n), n.idbtrans.objectStore("diaryBindingDirty").delete(e);
		}), this.stagedDiaryEntries.hook("creating", (e, t, r) => {
			t.diarySourceKeys = n(t.sourceKey), i(t.normalizedSourceKey, r);
		}), this.stagedDiaryEntries.hook("updating", (e, t, r, a) => {
			if (r.sourceKey || e.sourceKey) return i(r.normalizedSourceKey, a), i(e.normalizedSourceKey ?? r.normalizedSourceKey, a), { diarySourceKeys: n(e.sourceKey ?? r.sourceKey) };
		}), this.stagedDiaryEntries.hook("deleting", (e, t, n) => {
			i(t.normalizedSourceKey, n);
		}), this.diaryEntries.hook("creating", (e, t, n) => {
			i(t.fileId, n);
		}), this.diaryEntries.hook("updating", (e, t, n, r) => {
			i(n.fileId, r), void 0 !== e.fileId && i(e.fileId, r);
		}), this.diaryEntries.hook("deleting", (e, t, n) => {
			i(t.fileId, n);
		});
		const u = (e, t, n) => {
			i(t.normalizedSourceKey, n), null !== t.fileId && i(t.fileId, n);
		};
		this.diaryOccurrences.hook("creating", u), this.diaryOccurrences.hook("updating", (e, t, n, i) => {
			u(0, n, i), u(0, {
				...n,
				...e
			}, i);
		}), this.diaryOccurrences.hook("deleting", u), this.studySettings.hook("reading", H), cn(this);
	}
};
export { It as $, ee as $t, pt as A, he as At, Ct as B, Ae as Bt, Bt as C, we as Ct, nt as D, Ke as Dt, Rt as E, _e as Et, et as F, Te as Ft, Ye as G, U as Gt, Xe as H, ie as Ht, at as I, Me as It, mt as J, Y as Jt, Je as K, W as Kt, _t as L, Ee as Lt, ot as M, Se as Mt, yt as N, pe as Nt, dt as O, ve as Ot, gt as P, de as Pt, ut as Q, J as Qt, lt as R, ae as Rt, Vt as S, je as St, Et as T, Ce as Tt, $e as U, V as Ut, xt as V, me as Vt, Ze as W, B as Wt, bt as X, Z as Xt, At as Y, X as Yt, ht as Z, Q as Zt, $t as _, P as _n, Pe as _t, In as a, k as an, wt as at, tn as b, G as bn, ze as bt, yn as c, T as cn, Ot as ct, cn as d, C as dn, qe as dt, te as en, tt as et, ln as f, K as fn, Fe as ft, rn as g, A as gn, He as gt, nn as h, w as hn, Ue as ht, pn as i, L as in, kt as it, st as j, ke as jt, St as k, Ie as kt, wn as l, M as ln, Mt as lt, sn as m, R as mn, Le as mt, fn as n, z as nn, rt as nt, An as o, S as on, Dt as ot, an as p, E as pn, We as pt, vt as q, $ as qt, dn as r, j as rn, it as rt, bn as s, x as sn, Gt as st, mn as t, ne as tn, ct as tt, un as u, D as un, Tt as ut, Ut as v, O as vn, Ge as vt, zt as w, be as wt, Jt as x, u as xn, Ne as xt, Qt as y, N as yn, Oe as yt, Qe as z, le as zt };
