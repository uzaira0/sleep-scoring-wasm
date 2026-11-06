import { $t as e, An as t, Dn as n, En as r, On as i, Zt as s, dn as a, f as o, kn as l, qt as c, un as u } from "./schema-B0CR2EpS.js";
import { i as f, n as h, r as p, s as g, t as m } from "./workers-D4og5Jak.js";
import { _ as d, a as w, c as y, d as b, f as _, i as v, l as A, o as S, s as C, u as E } from "./local-data-source-Vom-dl1p.js";
import { c as I, ct as R, et as T, g as k, l as U, st as B, t as F, u as O } from "./workspace-db-CwhwLMaR.js";
import { n as x, r as M } from "./content-hash-SuSXU120.js";
import { C as z, _ as N, b as G, d as P, f as D, h as $, i as H, l as j, m as V, o as W, t as X, u as K, x as Z, y as Y } from "./background-jobs-BvDFFUGv.js";
import { a as q, i as J, r as Q } from "./api-errors-BdS5Sib6.js";
import { n as ee } from "./nonwear-display-slots-3gROIlhe.js";
import { $t as te, Jt as ne, Ut as re, _ as ie, bt as se, c as ae, en as oe, et as le, g as ce, i as ue, k as fe, lt as he, pt as pe, q as ge, u as me, yt as de } from "./store-DvfXJTpe.js";
import { A as we } from "./sleep-period-detection-BnH8xZoy.js";
import { t as ye } from "./audit-log-mBb24FKg.js";
import { T as be } from "./ggir-results-import-DD2olz8s.js";
import { D as _e, _ as ve, f as Ae, g as Se, i as Ce, k as Ee, l as Ie, u as Re, y as Te } from "./local-nonwear-unified-DPuDqwyk.js";
import { F as ke, I as Ue, L as Be, d as Fe, u as Oe } from "./valid-day-criteria-CIJnTk0q.js";
import { C as xe, S as Me, _ as ze, b as Ne, g as Ge, v as Le, x as Pe, y as De } from "./local-export-shard-worker-CRWHMs-Y.js";
import { t as $e } from "./physical-activity-classifier-output-B2Vk-vTP.js";
import { A as He, B as je, C as Ve, D as We, E as Xe, F as Ke, G as Ze, H as Ye, I as qe, K as Je, L as Qe, M as et, N as tt, O as nt, P as rt, R as it, S as st, T as at, U as ot, V as lt, W as ct, _ as ut, a as ft, b as ht, c as pt, d as gt, f as mt, g as dt, h as wt, i as yt, j as bt, k as _t, l as vt, m as At, n as St, o as Ct, p as Et, q as It, r as Rt, s as Tt, u as kt, v as Ut, w as Bt, x as Ft, y as Ot, z as xt } from "./ggir-import-CoXrw_Cd.js";
import { n as Mt, r as zt, t as Nt } from "./lstm-model-manager-BenKZ4vQ.js";
import { computeTensorConsensusForDay as Lt, finalizeAndAuditScoredVariantWarm as Pt, rewarmFileScoredVariants as Dt, runAlgorithmCubeForDay as $t, scoreBuiltinGgirSadehColeForDay as Ht, scoreCountBasedHasibVariantsForDay as jt, sleepWakeToPersistedOutputs as Vt, t as Wt, warmFileScoredVariants as Xt, withRecordingWakeThreshold as Kt } from "./cube-variants-c4XYvBRd.js";
async function Zt(e, t, n) {
	if (!t || 5 !== t.epochSeconds) return null;
	if (0 === n.length) return null;
	let r = 0;
	if (t.headerTimeStamp && t.headerTimeStamp.length > 0) {
		const i = await e.gridOffsetWithin(Float64Array.from(t.headerTimeStamp), n);
		if (void 0 === i) return null;
		r = i;
	} else if (t.mimsUnit.length !== n.length) return null;
	const i = r + n.length;
	return t.mimsUnit.length < i ? null : {
		unit: t.mimsUnit.slice(r, i),
		...t.mimsUnitX && t.mimsUnitX.length >= i ? { unitX: t.mimsUnitX.slice(r, i) } : {},
		...t.mimsUnitY && t.mimsUnitY.length >= i ? { unitY: t.mimsUnitY.slice(r, i) } : {},
		...t.mimsUnitZ && t.mimsUnitZ.length >= i ? { unitZ: t.mimsUnitZ.slice(r, i) } : {}
	};
}
function Yt(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const r of t) {
		const t = new Date(r.startMs), i = `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(t.getUTCDate()).padStart(2, "0")}`, s = n.get(i) ?? [];
		s.push({
			fileId: e,
			analysisDate: i,
			startTimestamp: r.startMs / 1e3,
			endTimestamp: r.endMs / 1e3,
			periodIndex: s.length
		}), n.set(i, s);
	}
	return n;
}
function qt(e) {
	const t = {
		skipRows: e.skipRows,
		columnMapping: e.columnMapping ?? {},
		...void 0 === e.preferredActivityColumn ? {} : { preferredActivityColumn: e.preferredActivityColumn }
	};
	return {
		...t,
		settingsHash: we(t),
		at: e.at ?? (/* @__PURE__ */ new Date()).toISOString()
	};
}
a.map((e) => ({
	value: e,
	label: u[e].label
}));
const Jt = /* @__PURE__ */ new Set(["x,y,z", "x,y,z,label"]);
function Qt(e) {
	const t = e.trim();
	if (0 === t.length) return null;
	const n = Number.parseFloat(t);
	return Number.isFinite(n) ? n : null;
}
var en, tn, nn, rn, sn, an, on, ln, cn, un, fn, hn, pn = r((e) => {
	e.byteLength = function(e) {
		var t = a(e), n = t[0], r = t[1];
		return 3 * (n + r) / 4 - r;
	}, e.toByteArray = function(e) {
		for (var t, i = a(e), s = i[0], o = i[1], l = new r(function(e, t, n) {
			return 3 * (t + n) / 4 - n;
		}(0, s, o)), c = 0, u = o > 0 ? s - 4 : s, f = 0; f < u; f += 4) t = n[e.charCodeAt(f)] << 18 | n[e.charCodeAt(f + 1)] << 12 | n[e.charCodeAt(f + 2)] << 6 | n[e.charCodeAt(f + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = 255 & t;
		return 2 === o && (t = n[e.charCodeAt(f)] << 2 | n[e.charCodeAt(f + 1)] >> 4, l[c++] = 255 & t), 1 === o && (t = n[e.charCodeAt(f)] << 10 | n[e.charCodeAt(f + 1)] << 4 | n[e.charCodeAt(f + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = 255 & t), l;
	}, e.fromByteArray = function(e) {
		for (var n, r = e.length, i = r % 3, s = [], a = 16383, o = 0, c = r - i; o < c; o += a) s.push(l(e, o, o + a > c ? c : o + a));
		return 1 === i ? (n = e[r - 1], s.push(t[n >> 2] + t[n << 4 & 63] + "==")) : 2 === i && (n = (e[r - 2] << 8) + e[r - 1], s.push(t[n >> 10] + t[n >> 4 & 63] + t[n << 2 & 63] + "=")), s.join("");
	};
	for (var t = [], n = [], r = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0; s < 64; ++s) t[s] = i[s], n[i.charCodeAt(s)] = s;
	function a(e) {
		var t = e.length;
		if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
		var n = e.indexOf("=");
		return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4];
	}
	function o(e) {
		return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[63 & e];
	}
	function l(e, t, n) {
		for (var r, i = [], s = t; s < n; s += 3) r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), i.push(o(r));
		return i.join("");
	}
	n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63;
}), gn = r((e) => {
	/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
	e.read = function(e, t, n, r, i) {
		var s, a, o = 8 * i - r - 1, l = (1 << o) - 1, c = l >> 1, u = -7, f = n ? i - 1 : 0, h = n ? -1 : 1, p = e[t + f];
		for (f += h, s = p & (1 << -u) - 1, p >>= -u, u += o; u > 0; s = 256 * s + e[t + f], f += h, u -= 8);
		for (a = s & (1 << -u) - 1, s >>= -u, u += r; u > 0; a = 256 * a + e[t + f], f += h, u -= 8);
		if (0 === s) s = 1 - c;
		else {
			if (s === l) return a ? NaN : 1 / 0 * (p ? -1 : 1);
			a += Math.pow(2, r), s -= c;
		}
		return (p ? -1 : 1) * a * Math.pow(2, s - r);
	}, e.write = function(e, t, n, r, i, s) {
		var a, o, l, c = 8 * s - i - 1, u = (1 << c) - 1, f = u >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : s - 1, g = r ? 1 : -1, m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
		for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), (t += a + f >= 1 ? h / l : h * Math.pow(2, 1 - f)) * l >= 2 && (a++, l /= 2), a + f >= u ? (o = 0, a = u) : a + f >= 1 ? (o = (t * l - 1) * Math.pow(2, i), a += f) : (o = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + p] = 255 & o, p += g, o /= 256, i -= 8);
		for (a = a << i | o, c += i; c > 0; e[n + p] = 255 & a, p += g, a /= 256, c -= 8);
		e[n + p - g] |= 128 * m;
	};
}), mn = r((e) => {
	const t = pn(), n = gn(), r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
	e.Buffer = a, e.SlowBuffer = function(e) {
		return +e != e && (e = 0), a.alloc(+e);
	}, e.INSPECT_MAX_BYTES = 50;
	const i = 2147483647;
	function s(e) {
		if (e > i) throw new RangeError("The value \"" + e + "\" is invalid for option \"size\"");
		const t = new Uint8Array(e);
		return Object.setPrototypeOf(t, a.prototype), t;
	}
	function a(e, t, n) {
		if ("number" == typeof e) {
			if ("string" == typeof t) throw new TypeError("The \"string\" argument must be of type string. Received type number");
			return c(e);
		}
		return o(e, t, n);
	}
	function o(e, t, n) {
		if ("string" == typeof e) return function(e, t) {
			if ("string" == typeof t && "" !== t || (t = "utf8"), !a.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
			const n = 0 | p(e, t);
			let r = s(n);
			const i = r.write(e, t);
			return i !== n && (r = r.slice(0, i)), r;
		}(e, t);
		if (ArrayBuffer.isView(e)) return function(e) {
			if (X(e, Uint8Array)) {
				const t = new Uint8Array(e);
				return f(t.buffer, t.byteOffset, t.byteLength);
			}
			return u(e);
		}(e);
		if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
		if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer)) return f(e, t, n);
		if ("undefined" != typeof SharedArrayBuffer && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return f(e, t, n);
		if ("number" == typeof e) throw new TypeError("The \"value\" argument must not be of type number. Received type number");
		const r = e.valueOf && e.valueOf();
		if (null != r && r !== e) return a.from(r, t, n);
		const i = function(e) {
			if (a.isBuffer(e)) {
				const t = 0 | h(e.length), n = s(t);
				return 0 === n.length || e.copy(n, 0, 0, t), n;
			}
			return void 0 !== e.length ? "number" != typeof e.length || K(e.length) ? s(0) : u(e) : "Buffer" === e.type && Array.isArray(e.data) ? u(e.data) : void 0;
		}(e);
		if (i) return i;
		if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return a.from(e[Symbol.toPrimitive]("string"), t, n);
		throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
	}
	function l(e) {
		if ("number" != typeof e) throw new TypeError("\"size\" argument must be of type number");
		if (e < 0) throw new RangeError("The value \"" + e + "\" is invalid for option \"size\"");
	}
	function c(e) {
		return l(e), s(e < 0 ? 0 : 0 | h(e));
	}
	function u(e) {
		const t = e.length < 0 ? 0 : 0 | h(e.length), n = s(t);
		for (let r = 0; r < t; r += 1) n[r] = 255 & e[r];
		return n;
	}
	function f(e, t, n) {
		if (t < 0 || e.byteLength < t) throw new RangeError("\"offset\" is outside of buffer bounds");
		if (e.byteLength < t + (n || 0)) throw new RangeError("\"length\" is outside of buffer bounds");
		let r;
		return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, a.prototype), r;
	}
	function h(e) {
		if (e >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
		return 0 | e;
	}
	function p(e, t) {
		if (a.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
		if ("string" != typeof e) throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		const n = e.length, r = arguments.length > 2 && !0 === arguments[2];
		if (!r && 0 === n) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return j(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return 2 * n;
			case "hex": return n >>> 1;
			case "base64": return V(e).length;
			default:
				if (i) return r ? -1 : j(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	function g(e, t, n) {
		let r = !1;
		if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
		if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
		if ((n >>>= 0) <= (t >>>= 0)) return "";
		for (e || (e = "utf8");;) switch (e) {
			case "hex": return T(this, t, n);
			case "utf8":
			case "utf-8": return C(this, t, n);
			case "ascii": return I(this, t, n);
			case "latin1":
			case "binary": return R(this, t, n);
			case "base64": return S(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return k(this, t, n);
			default:
				if (r) throw new TypeError("Unknown encoding: " + e);
				e = (e + "").toLowerCase(), r = !0;
		}
	}
	function m(e, t, n) {
		const r = e[t];
		e[t] = e[n], e[n] = r;
	}
	function d(e, t, n, r, i) {
		if (0 === e.length) return -1;
		if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), K(n = +n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
			if (i) return -1;
			n = e.length - 1;
		} else if (n < 0) {
			if (!i) return -1;
			n = 0;
		}
		if ("string" == typeof t && (t = a.from(t, r)), a.isBuffer(t)) return 0 === t.length ? -1 : w(e, t, n, r, i);
		if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : w(e, [t], n, r, i);
		throw new TypeError("val must be string, number or Buffer");
	}
	function w(e, t, n, r, i) {
		let s, a = 1, o = e.length, l = t.length;
		if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
			if (e.length < 2 || t.length < 2) return -1;
			a = 2, o /= 2, l /= 2, n /= 2;
		}
		function c(e, t) {
			return 1 === a ? e[t] : e.readUInt16BE(t * a);
		}
		if (i) {
			let r = -1;
			for (s = n; s < o; s++) if (c(e, s) === c(t, -1 === r ? 0 : s - r)) {
				if (-1 === r && (r = s), s - r + 1 === l) return r * a;
			} else -1 !== r && (s -= s - r), r = -1;
		} else for (n + l > o && (n = o - l), s = n; s >= 0; s--) {
			let n = !0;
			for (let r = 0; r < l; r++) if (c(e, s + r) !== c(t, r)) {
				n = !1;
				break;
			}
			if (n) return s;
		}
		return -1;
	}
	function y(e, t, n, r) {
		n = Number(n) || 0;
		const i = e.length - n;
		r ? (r = Number(r)) > i && (r = i) : r = i;
		const s = t.length;
		r > s / 2 && (r = s / 2);
		let a = 0;
		for (; a < r; ++a) {
			const r = parseInt(t.substr(2 * a, 2), 16);
			if (K(r)) return a;
			e[n + a] = r;
		}
		return a;
	}
	function b(e, t, n, r) {
		return W(j(t, e.length - n), e, n, r);
	}
	function _(e, t, n, r) {
		return W(function(e) {
			const t = [];
			for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
			return t;
		}(t), e, n, r);
	}
	function v(e, t, n, r) {
		return W(V(t), e, n, r);
	}
	function A(e, t, n, r) {
		return W(function(e, t) {
			let n, r, i;
			const s = [];
			for (let a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, i = n % 256, s.push(i), s.push(r);
			return s;
		}(t, e.length - n), e, n, r);
	}
	function S(e, n, r) {
		return 0 === n && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function C(e, t, n) {
		n = Math.min(e.length, n);
		const r = [];
		let i = t;
		for (; i < n;) {
			const t = e[i];
			let s = null, a = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
			if (i + a <= n) {
				let n, r, o, l;
				switch (a) {
					case 1:
						t < 128 && (s = t);
						break;
					case 2:
						n = e[i + 1], 128 == (192 & n) && (l = (31 & t) << 6 | 63 & n, l > 127 && (s = l));
						break;
					case 3:
						n = e[i + 1], r = e[i + 2], 128 == (192 & n) && 128 == (192 & r) && (l = (15 & t) << 12 | (63 & n) << 6 | 63 & r, l > 2047 && (l < 55296 || l > 57343) && (s = l));
						break;
					case 4: n = e[i + 1], r = e[i + 2], o = e[i + 3], 128 == (192 & n) && 128 == (192 & r) && 128 == (192 & o) && (l = (15 & t) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & o, l > 65535 && l < 1114112 && (s = l));
				}
			}
			null === s ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, r.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), r.push(s), i += a;
		}
		return function(e) {
			const t = e.length;
			if (t <= E) return String.fromCharCode.apply(String, e);
			let n = "", r = 0;
			for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += E));
			return n;
		}(r);
	}
	e.kMaxLength = i, a.TYPED_ARRAY_SUPPORT = function() {
		try {
			const e = /* @__PURE__ */ new Uint8Array(1), t = { foo: function() {
				return 42;
			} };
			return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
		} catch (e) {
			return !1;
		}
	}(), a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
		enumerable: !0,
		get: function() {
			if (a.isBuffer(this)) return this.buffer;
		}
	}), Object.defineProperty(a.prototype, "offset", {
		enumerable: !0,
		get: function() {
			if (a.isBuffer(this)) return this.byteOffset;
		}
	}), a.poolSize = 8192, a.from = function(e, t, n) {
		return o(e, t, n);
	}, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(e, t, n) {
		return function(e, t, n) {
			return l(e), e <= 0 ? s(e) : void 0 !== t ? "string" == typeof n ? s(e).fill(t, n) : s(e).fill(t) : s(e);
		}(e, t, n);
	}, a.allocUnsafe = function(e) {
		return c(e);
	}, a.allocUnsafeSlow = function(e) {
		return c(e);
	}, a.isBuffer = function(e) {
		return null != e && !0 === e._isBuffer && e !== a.prototype;
	}, a.compare = function(e, t) {
		if (X(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(e) || !a.isBuffer(t)) throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, s = Math.min(n, r); i < s; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : r < n ? 1 : 0;
	}, a.isEncoding = function(e) {
		switch (String(e).toLowerCase()) {
			case "hex":
			case "utf8":
			case "utf-8":
			case "ascii":
			case "latin1":
			case "binary":
			case "base64":
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return !0;
			default: return !1;
		}
	}, a.concat = function(e, t) {
		if (!Array.isArray(e)) throw new TypeError("\"list\" argument must be an Array of Buffers");
		if (0 === e.length) return a.alloc(0);
		let n;
		if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
		const r = a.allocUnsafe(t);
		let i = 0;
		for (n = 0; n < e.length; ++n) {
			let t = e[n];
			if (X(t, Uint8Array)) i + t.length > r.length ? (a.isBuffer(t) || (t = a.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else {
				if (!a.isBuffer(t)) throw new TypeError("\"list\" argument must be an Array of Buffers");
				t.copy(r, i);
			}
			i += t.length;
		}
		return r;
	}, a.byteLength = p, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
		const e = this.length;
		if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
		for (let t = 0; t < e; t += 2) m(this, t, t + 1);
		return this;
	}, a.prototype.swap32 = function() {
		const e = this.length;
		if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
		for (let t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
		return this;
	}, a.prototype.swap64 = function() {
		const e = this.length;
		if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
		for (let t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
		return this;
	}, a.prototype.toString = function() {
		const e = this.length;
		return 0 === e ? "" : 0 === arguments.length ? C(this, 0, e) : g.apply(this, arguments);
	}, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(e) {
		if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
		return this === e || 0 === a.compare(this, e);
	}, a.prototype.inspect = function() {
		let t = "";
		const n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (a.prototype[r] = a.prototype.inspect), a.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(e)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
		if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
		if (r >= i && t >= n) return 0;
		if (r >= i) return -1;
		if (t >= n) return 1;
		if (this === e) return 0;
		let s = (i >>>= 0) - (r >>>= 0), o = (n >>>= 0) - (t >>>= 0);
		const l = Math.min(s, o), c = this.slice(r, i), u = e.slice(t, n);
		for (let a = 0; a < l; ++a) if (c[a] !== u[a]) {
			s = c[a], o = u[a];
			break;
		}
		return s < o ? -1 : o < s ? 1 : 0;
	}, a.prototype.includes = function(e, t, n) {
		return -1 !== this.indexOf(e, t, n);
	}, a.prototype.indexOf = function(e, t, n) {
		return d(this, e, t, n, !0);
	}, a.prototype.lastIndexOf = function(e, t, n) {
		return d(this, e, t, n, !1);
	}, a.prototype.write = function(e, t, n, r) {
		if (void 0 === t) r = "utf8", n = this.length, t = 0;
		else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
		else {
			if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
			t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
		}
		const i = this.length - t;
		if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
		r || (r = "utf8");
		let s = !1;
		for (;;) switch (r) {
			case "hex": return y(this, e, t, n);
			case "utf8":
			case "utf-8": return b(this, e, t, n);
			case "ascii":
			case "latin1":
			case "binary": return _(this, e, t, n);
			case "base64": return v(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return A(this, e, t, n);
			default:
				if (s) throw new TypeError("Unknown encoding: " + r);
				r = ("" + r).toLowerCase(), s = !0;
		}
	}, a.prototype.toJSON = function() {
		return {
			type: "Buffer",
			data: Array.prototype.slice.call(this._arr || this, 0)
		};
	};
	const E = 4096;
	function I(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
		return r;
	}
	function R(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function T(e, t, n) {
		const r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let s = t; s < n; ++s) i += Z[e[s]];
		return i;
	}
	function k(e, t, n) {
		const r = e.slice(t, n);
		let i = "";
		for (let s = 0; s < r.length - 1; s += 2) i += String.fromCharCode(r[s] + 256 * r[s + 1]);
		return i;
	}
	function U(e, t, n) {
		if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
		if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
	}
	function B(e, t, n, r, i, s) {
		if (!a.isBuffer(e)) throw new TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < s) throw new RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw new RangeError("Index out of range");
	}
	function F(e, t, n, r, i) {
		P(t, r, i, e, n, 7);
		let s = Number(t & BigInt(4294967295));
		e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s;
		let a = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, n;
	}
	function O(e, t, n, r, i) {
		P(t, r, i, e, n, 7);
		let s = Number(t & BigInt(4294967295));
		e[n + 7] = s, s >>= 8, e[n + 6] = s, s >>= 8, e[n + 5] = s, s >>= 8, e[n + 4] = s;
		let a = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = a, a >>= 8, e[n + 2] = a, a >>= 8, e[n + 1] = a, a >>= 8, e[n] = a, n + 8;
	}
	function x(e, t, n, r, i, s) {
		if (n + r > e.length) throw new RangeError("Index out of range");
		if (n < 0) throw new RangeError("Index out of range");
	}
	function M(e, t, r, i, s) {
		return t = +t, r >>>= 0, s || x(e, 0, r, 4), n.write(e, t, r, i, 23, 4), r + 4;
	}
	function z(e, t, r, i, s) {
		return t = +t, r >>>= 0, s || x(e, 0, r, 8), n.write(e, t, r, i, 52, 8), r + 8;
	}
	a.prototype.slice = function(e, t) {
		const n = this.length;
		(e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
		const r = this.subarray(e, t);
		return Object.setPrototypeOf(r, a.prototype), r;
	}, a.prototype.readUintLE = a.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || U(e, t, this.length);
		let r = this[e], i = 1, s = 0;
		for (; ++s < t && (i *= 256);) r += this[e + s] * i;
		return r;
	}, a.prototype.readUintBE = a.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || U(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, a.prototype.readUint8 = a.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || U(e, 1, this.length), this[e];
	}, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || U(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || U(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || U(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
	}, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || U(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, a.prototype.readBigUInt64LE = Y(function(e) {
		D(e >>>= 0, "offset");
		const t = this[e], n = this[e + 7];
		void 0 !== t && void 0 !== n || $(e, this.length - 8);
		const r = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24, i = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), a.prototype.readBigUInt64BE = Y(function(e) {
		D(e >>>= 0, "offset");
		const t = this[e], n = this[e + 7];
		void 0 !== t && void 0 !== n || $(e, this.length - 8);
		const r = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e], i = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), a.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || U(e, t, this.length);
		let r = this[e], i = 1, s = 0;
		for (; ++s < t && (i *= 256);) r += this[e + s] * i;
		return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r;
	}, a.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || U(e, t, this.length);
		let r = t, i = 1, s = this[e + --r];
		for (; r > 0 && (i *= 256);) s += this[e + --r] * i;
		return i *= 128, s >= i && (s -= Math.pow(2, 8 * t)), s;
	}, a.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || U(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
	}, a.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || U(e, 2, this.length);
		const n = this[e] | this[e + 1] << 8;
		return 32768 & n ? 4294901760 | n : n;
	}, a.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || U(e, 2, this.length);
		const n = this[e + 1] | this[e] << 8;
		return 32768 & n ? 4294901760 | n : n;
	}, a.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || U(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, a.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || U(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, a.prototype.readBigInt64LE = Y(function(e) {
		D(e >>>= 0, "offset");
		const t = this[e], n = this[e + 7];
		void 0 !== t && void 0 !== n || $(e, this.length - 8);
		const r = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24);
	}), a.prototype.readBigInt64BE = Y(function(e) {
		D(e >>>= 0, "offset");
		const t = this[e], n = this[e + 7];
		void 0 !== t && void 0 !== n || $(e, this.length - 8);
		const r = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n);
	}), a.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || U(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, a.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || U(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, a.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || U(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, a.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || U(e, 8, this.length), n.read(this, e, !1, 52, 8);
	}, a.prototype.writeUintLE = a.prototype.writeUIntLE = function(e, t, n, r) {
		e = +e, t >>>= 0, n >>>= 0, r || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
		let i = 1, s = 0;
		for (this[t] = 255 & e; ++s < n && (i *= 256);) this[t + s] = e / i & 255;
		return t + n;
	}, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(e, t, n, r) {
		e = +e, t >>>= 0, n >>>= 0, r || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
		let i = n - 1, s = 1;
		for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) this[t + i] = e / s & 255;
		return t + n;
	}, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || B(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
	}, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || B(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
	}, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || B(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
	}, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || B(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4;
	}, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || B(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
	}, a.prototype.writeBigUInt64LE = Y(function(e, t = 0) {
		return F(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), a.prototype.writeBigUInt64BE = Y(function(e, t = 0) {
		return O(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), a.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			const r = Math.pow(2, 8 * n - 1);
			B(this, e, t, n, r - 1, -r);
		}
		let i = 0, s = 1, a = 0;
		for (this[t] = 255 & e; ++i < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (e / s | 0) - a & 255;
		return t + n;
	}, a.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			const r = Math.pow(2, 8 * n - 1);
			B(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, s = 1, a = 0;
		for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (e / s | 0) - a & 255;
		return t + n;
	}, a.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || B(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
	}, a.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || B(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
	}, a.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || B(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
	}, a.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || B(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, a.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || B(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
	}, a.prototype.writeBigInt64LE = Y(function(e, t = 0) {
		return F(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), a.prototype.writeBigInt64BE = Y(function(e, t = 0) {
		return O(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), a.prototype.writeFloatLE = function(e, t, n) {
		return M(this, e, t, !0, n);
	}, a.prototype.writeFloatBE = function(e, t, n) {
		return M(this, e, t, !1, n);
	}, a.prototype.writeDoubleLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, a.prototype.writeDoubleBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	}, a.prototype.copy = function(e, t, n, r) {
		if (!a.isBuffer(e)) throw new TypeError("argument should be a Buffer");
		if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
		if (0 === e.length || 0 === this.length) return 0;
		if (t < 0) throw new RangeError("targetStart out of bounds");
		if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
		if (r < 0) throw new RangeError("sourceEnd out of bounds");
		r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
		const i = r - n;
		return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i;
	}, a.prototype.fill = function(e, t, n, r) {
		if ("string" == typeof e) {
			if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
			if ("string" == typeof r && !a.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
			if (1 === e.length) {
				const t = e.charCodeAt(0);
				("utf8" === r && t < 128 || "latin1" === r) && (e = t);
			}
		} else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
		if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
		if (n <= t) return this;
		let i;
		if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (i = t; i < n; ++i) this[i] = e;
		else {
			const s = a.isBuffer(e) ? e : a.from(e, r), o = s.length;
			if (0 === o) throw new TypeError("The value \"" + e + "\" is invalid for argument \"value\"");
			for (i = 0; i < n - t; ++i) this[i + t] = s[i % o];
		}
		return this;
	};
	const N = {};
	function G(e, t, n) {
		N[e] = class extends n {
			constructor() {
				super(), Object.defineProperty(this, "message", {
					value: t.apply(this, arguments),
					writable: !0,
					configurable: !0
				}), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
			}
			get code() {
				return e;
			}
			set code(e) {
				Object.defineProperty(this, "code", {
					configurable: !0,
					enumerable: !0,
					value: e,
					writable: !0
				});
			}
			toString() {
				return `${this.name} [${e}]: ${this.message}`;
			}
		};
	}
	function L(e) {
		let t = "", n = e.length;
		const r = "-" === e[0] ? 1 : 0;
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function P(e, t, n, r, i, s) {
		if (e > n || e < t) {
			const r = "bigint" == typeof t ? "n" : "";
			let i;
			throw i = s > 3 ? 0 === t || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8 * (s + 1)}${r}` : `>= -(2${r} ** ${8 * (s + 1) - 1}${r}) and < 2 ** ${8 * (s + 1) - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new N.ERR_OUT_OF_RANGE("value", i, e);
		}
		(function(e, t, n) {
			D(t, "offset"), void 0 !== e[t] && void 0 !== e[t + n] || $(t, e.length - (n + 1));
		})(r, i, s);
	}
	function D(e, t) {
		if ("number" != typeof e) throw new N.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function $(e, t, n) {
		if (Math.floor(e) !== e) throw D(e, n), new N.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
		if (t < 0) throw new N.ERR_BUFFER_OUT_OF_BOUNDS();
		throw new N.ERR_OUT_OF_RANGE(n || "offset", `>= ${n ? 1 : 0} and <= ${t}`, e);
	}
	G("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), G("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), G("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = L(String(n)) : "bigint" == typeof n && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = L(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	const H = /[^+/0-9A-Za-z-_]/g;
	function j(e, t) {
		let n;
		t = t || 1 / 0;
		const r = e.length;
		let i = null;
		const s = [];
		for (let a = 0; a < r; ++a) {
			if (n = e.charCodeAt(a), n > 55295 && n < 57344) {
				if (!i) {
					if (n > 56319) {
						(t -= 3) > -1 && s.push(239, 191, 189);
						continue;
					}
					if (a + 1 === r) {
						(t -= 3) > -1 && s.push(239, 191, 189);
						continue;
					}
					i = n;
					continue;
				}
				if (n < 56320) {
					(t -= 3) > -1 && s.push(239, 191, 189), i = n;
					continue;
				}
				n = 65536 + (i - 55296 << 10 | n - 56320);
			} else i && (t -= 3) > -1 && s.push(239, 191, 189);
			if (i = null, n < 128) {
				if ((t -= 1) < 0) break;
				s.push(n);
			} else if (n < 2048) {
				if ((t -= 2) < 0) break;
				s.push(n >> 6 | 192, 63 & n | 128);
			} else if (n < 65536) {
				if ((t -= 3) < 0) break;
				s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
			} else {
				if (!(n < 1114112)) throw new Error("Invalid code point");
				if ((t -= 4) < 0) break;
				s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
			}
		}
		return s;
	}
	function V(e) {
		return t.toByteArray(function(e) {
			if ((e = (e = e.split("=")[0]).trim().replace(H, "")).length < 2) return "";
			for (; e.length % 4 != 0;) e += "=";
			return e;
		}(e));
	}
	function W(e, t, n, r) {
		let i = 0;
		for (; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name;
	}
	function K(e) {
		return e != e;
	}
	const Z = function() {
		const e = "0123456789abcdef", t = new Array(256);
		for (let n = 0; n < 16; ++n) {
			const r = 16 * n;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	}();
	function Y(e) {
		return "undefined" == typeof BigInt ? q : e;
	}
	function q() {
		throw new Error("BigInt not supported");
	}
}), dn = r((e, t) => {
	var n = [
		0,
		1,
		3,
		7,
		15,
		31,
		63,
		127,
		255
	], r = function(e) {
		this.stream = e, this.bitOffset = 0, this.curByte = 0, this.hasByte = !1;
	};
	r.prototype._ensureByte = function() {
		this.hasByte || (this.curByte = this.stream.readByte(), this.hasByte = !0);
	}, r.prototype.read = function(e) {
		for (var t = 0; e > 0;) {
			this._ensureByte();
			var r = 8 - this.bitOffset;
			if (e >= r) t <<= r, t |= n[r] & this.curByte, this.hasByte = !1, this.bitOffset = 0, e -= r;
			else {
				t <<= e;
				var i = r - e;
				t |= (this.curByte & n[e] << i) >> i, this.bitOffset += e, e = 0;
			}
		}
		return t;
	}, r.prototype.seek = function(e) {
		var t = e % 8, n = (e - t) / 8;
		this.bitOffset = t, this.stream.seek(n), this.hasByte = !1;
	}, r.prototype.pi = function() {
		for (var e = new Buffer(6), t = 0; t < e.length; t++) e[t] = this.read(8);
		return e.toString("hex");
	}, t.exports = r;
}), wn = r((e, t) => {
	var n = function() {};
	n.prototype.readByte = function() {
		throw new Error("abstract method readByte() not implemented");
	}, n.prototype.read = function(e, t, n) {
		for (var r = 0; r < n;) {
			var i = this.readByte();
			if (i < 0) return 0 === r ? -1 : r;
			e[t++] = i, r++;
		}
		return r;
	}, n.prototype.seek = function(e) {
		throw new Error("abstract method seek() not implemented");
	}, n.prototype.writeByte = function(e) {
		throw new Error("abstract method readByte() not implemented");
	}, n.prototype.write = function(e, t, n) {
		for (var r = 0; r < n; r++) this.writeByte(e[t++]);
		return n;
	}, n.prototype.flush = function() {}, t.exports = n;
}), yn = r((e, t) => {
	var n;
	t.exports = (n = new Uint32Array([
		0,
		79764919,
		159529838,
		222504665,
		319059676,
		398814059,
		445009330,
		507990021,
		638119352,
		583659535,
		797628118,
		726387553,
		890018660,
		835552979,
		1015980042,
		944750013,
		1276238704,
		1221641927,
		1167319070,
		1095957929,
		1595256236,
		1540665371,
		1452775106,
		1381403509,
		1780037320,
		1859660671,
		1671105958,
		1733955601,
		2031960084,
		2111593891,
		1889500026,
		1952343757,
		2552477408,
		2632100695,
		2443283854,
		2506133561,
		2334638140,
		2414271883,
		2191915858,
		2254759653,
		3190512472,
		3135915759,
		3081330742,
		3009969537,
		2905550212,
		2850959411,
		2762807018,
		2691435357,
		3560074640,
		3505614887,
		3719321342,
		3648080713,
		3342211916,
		3287746299,
		3467911202,
		3396681109,
		4063920168,
		4143685023,
		4223187782,
		4286162673,
		3779000052,
		3858754371,
		3904687514,
		3967668269,
		881225847,
		809987520,
		1023691545,
		969234094,
		662832811,
		591600412,
		771767749,
		717299826,
		311336399,
		374308984,
		453813921,
		533576470,
		25881363,
		88864420,
		134795389,
		214552010,
		2023205639,
		2086057648,
		1897238633,
		1976864222,
		1804852699,
		1867694188,
		1645340341,
		1724971778,
		1587496639,
		1516133128,
		1461550545,
		1406951526,
		1302016099,
		1230646740,
		1142491917,
		1087903418,
		2896545431,
		2825181984,
		2770861561,
		2716262478,
		3215044683,
		3143675388,
		3055782693,
		3001194130,
		2326604591,
		2389456536,
		2200899649,
		2280525302,
		2578013683,
		2640855108,
		2418763421,
		2498394922,
		3769900519,
		3832873040,
		3912640137,
		3992402750,
		4088425275,
		4151408268,
		4197601365,
		4277358050,
		3334271071,
		3263032808,
		3476998961,
		3422541446,
		3585640067,
		3514407732,
		3694837229,
		3640369242,
		1762451694,
		1842216281,
		1619975040,
		1682949687,
		2047383090,
		2127137669,
		1938468188,
		2001449195,
		1325665622,
		1271206113,
		1183200824,
		1111960463,
		1543535498,
		1489069629,
		1434599652,
		1363369299,
		622672798,
		568075817,
		748617968,
		677256519,
		907627842,
		853037301,
		1067152940,
		995781531,
		51762726,
		131386257,
		177728840,
		240578815,
		269590778,
		349224269,
		429104020,
		491947555,
		4046411278,
		4126034873,
		4172115296,
		4234965207,
		3794477266,
		3874110821,
		3953728444,
		4016571915,
		3609705398,
		3555108353,
		3735388376,
		3664026991,
		3290680682,
		3236090077,
		3449943556,
		3378572211,
		3174993278,
		3120533705,
		3032266256,
		2961025959,
		2923101090,
		2868635157,
		2813903052,
		2742672763,
		2604032198,
		2683796849,
		2461293480,
		2524268063,
		2284983834,
		2364738477,
		2175806836,
		2238787779,
		1569362073,
		1498123566,
		1409854455,
		1355396672,
		1317987909,
		1246755826,
		1192025387,
		1137557660,
		2072149281,
		2135122070,
		1912620623,
		1992383480,
		1753615357,
		1816598090,
		1627664531,
		1707420964,
		295390185,
		358241886,
		404320391,
		483945776,
		43990325,
		106832002,
		186451547,
		266083308,
		932423249,
		861060070,
		1041341759,
		986742920,
		613929101,
		542559546,
		756411363,
		701822548,
		3316196985,
		3244833742,
		3425377559,
		3370778784,
		3601682597,
		3530312978,
		3744426955,
		3689838204,
		3819031489,
		3881883254,
		3928223919,
		4007849240,
		4037393693,
		4100235434,
		4180117107,
		4259748804,
		2310601993,
		2373574846,
		2151335527,
		2231098320,
		2596047829,
		2659030626,
		2470359227,
		2550115596,
		2947551409,
		2876312838,
		2788305887,
		2733848168,
		3165939309,
		3094707162,
		3040238851,
		2985771188
	]), function() {
		var e = 4294967295;
		this.getCRC = function() {
			return ~e >>> 0;
		}, this.updateCRC = function(t) {
			e = e << 8 ^ n[255 & (e >>> 24 ^ t)];
		}, this.updateCRCRun = function(t, r) {
			for (; r-- > 0;) e = e << 8 ^ n[255 & (e >>> 24 ^ t)];
		};
	});
}), bn = i({
	bin: () => on,
	contributors: () => nn,
	default: () => hn,
	dependencies: () => cn,
	description: () => rn,
	devDependencies: () => un,
	directories: () => ln,
	license: () => "MIT",
	main: () => sn,
	name: () => en,
	repository: () => an,
	scripts: () => fn,
	version: () => tn
}), _n = n(() => {
	hn = {
		name: en = "seek-bzip",
		version: tn = "2.0.0",
		contributors: nn = [
			"C. Scott Ananian (http://cscott.net)",
			"Eli Skeggs",
			"Kevin Kwok",
			"Rob Landley (http://landley.net)"
		],
		description: rn = "a pure-JavaScript Node.JS module for random-access decoding bzip2 data",
		main: sn = "./lib/index.js",
		repository: an = {
			type: "git",
			url: "https://github.com/cscott/seek-bzip.git"
		},
		license: "MIT",
		bin: on = {
			"seek-bunzip": "./bin/seek-bunzip",
			"seek-table": "./bin/seek-bzip-table"
		},
		directories: ln = { test: "test" },
		dependencies: cn = { commander: "^6.0.0" },
		devDependencies: un = {
			fibers: "^5.0.0",
			mocha: "^8.1.0"
		},
		scripts: fn = { test: "mocha" }
	};
}), vn = r((e, t) => {
	var n = dn(), r = wn(), i = yn(), s = (_n(), l(bn).default), a = function(e, t) {
		for (var n = e[t], r = t; r > 0; r--) e[r] = e[r - 1];
		return e[0] = n, n;
	}, o = {
		OK: 0,
		LAST_BLOCK: -1,
		NOT_BZIP_DATA: -2,
		UNEXPECTED_INPUT_EOF: -3,
		UNEXPECTED_OUTPUT_EOF: -4,
		DATA_ERROR: -5,
		OUT_OF_MEMORY: -6,
		OBSOLETE_INPUT: -7,
		END_OF_BLOCK: -8
	}, c = {};
	c[o.LAST_BLOCK] = "Bad file checksum", c[o.NOT_BZIP_DATA] = "Not bzip data", c[o.UNEXPECTED_INPUT_EOF] = "Unexpected input EOF", c[o.UNEXPECTED_OUTPUT_EOF] = "Unexpected output EOF", c[o.DATA_ERROR] = "Data error", c[o.OUT_OF_MEMORY] = "Out of memory", c[o.OBSOLETE_INPUT] = "Obsolete (pre 0.9.5) bzip format not supported.";
	var u = function(e, t) {
		var n = c[e] || "unknown error";
		t && (n += ": " + t);
		var r = new TypeError(n);
		throw r.errorCode = e, r;
	}, f = function(e, t) {
		this.writePos = this.writeCurrent = this.writeCount = 0, this._start_bunzip(e, t);
	};
	f.prototype._init_block = function() {
		return this._get_next_block() ? (this.blockCRC = new i(), !0) : (this.writeCount = -1, !1);
	}, f.prototype._start_bunzip = function(e, t) {
		var r = new Buffer(4);
		4 === e.read(r, 0, 4) && "BZh" === String.fromCharCode(r[0], r[1], r[2]) || u(o.NOT_BZIP_DATA, "bad magic");
		var i = r[3] - 48;
		(i < 1 || i > 9) && u(o.NOT_BZIP_DATA, "level out of range"), this.reader = new n(e), this.dbufSize = 1e5 * i, this.nextoutput = 0, this.outputStream = t, this.streamCRC = 0;
	}, f.prototype._get_next_block = function() {
		var e, t, n, r = this.reader, i = r.pi();
		if ("177245385090" === i) return !1;
		"314159265359" !== i && u(o.NOT_BZIP_DATA), this.targetBlockCRC = r.read(32) >>> 0, this.streamCRC = (this.targetBlockCRC ^ (this.streamCRC << 1 | this.streamCRC >>> 31)) >>> 0, r.read(1) && u(o.OBSOLETE_INPUT);
		var s = r.read(24);
		s > this.dbufSize && u(o.DATA_ERROR, "initial position out of bounds");
		var l = r.read(16), c = new Buffer(256), f = 0;
		for (e = 0; e < 16; e++) if (l & 1 << 15 - e) {
			var h = 16 * e;
			for (n = r.read(16), t = 0; t < 16; t++) n & 1 << 15 - t && (c[f++] = h + t);
		}
		var p = r.read(3);
		(p < 2 || p > 6) && u(o.DATA_ERROR);
		var g = r.read(15);
		0 === g && u(o.DATA_ERROR);
		var m = new Buffer(256);
		for (e = 0; e < p; e++) m[e] = e;
		var d = new Buffer(g);
		for (e = 0; e < g; e++) {
			for (t = 0; r.read(1); t++) t >= p && u(o.DATA_ERROR);
			d[e] = a(m, t);
		}
		var w, y = f + 2, b = [];
		for (t = 0; t < p; t++) {
			var _ = new Buffer(y), v = /* @__PURE__ */ new Uint16Array(21);
			for (l = r.read(5), e = 0; e < y; e++) {
				for (; (l < 1 || l > 20) && u(o.DATA_ERROR), r.read(1);) r.read(1) ? l-- : l++;
				_[e] = l;
			}
			var A, S = A = _[0];
			for (e = 1; e < y; e++) _[e] > A ? A = _[e] : _[e] < S && (S = _[e]);
			w = {}, b.push(w), w.permute = /* @__PURE__ */ new Uint16Array(258), w.limit = /* @__PURE__ */ new Uint32Array(22), w.base = /* @__PURE__ */ new Uint32Array(21), w.minLen = S, w.maxLen = A;
			var C = 0;
			for (e = S; e <= A; e++) for (v[e] = w.limit[e] = 0, l = 0; l < y; l++) _[l] === e && (w.permute[C++] = l);
			for (e = 0; e < y; e++) v[_[e]]++;
			for (C = l = 0, e = S; e < A; e++) C += v[e], w.limit[e] = C - 1, C <<= 1, l += v[e], w.base[e + 1] = C - l;
			w.limit[A + 1] = Number.MAX_VALUE, w.limit[A] = C + v[A] - 1, w.base[S] = 0;
		}
		var E = /* @__PURE__ */ new Uint32Array(256);
		for (e = 0; e < 256; e++) m[e] = e;
		var I, R = 0, T = 0, k = 0, U = this.dbuf = new Uint32Array(this.dbufSize);
		for (y = 0;;) {
			for (y-- || (y = 49, k >= g && u(o.DATA_ERROR), w = b[d[k++]]), e = w.minLen, t = r.read(e); e > w.maxLen && u(o.DATA_ERROR), !(t <= w.limit[e]); e++) t = t << 1 | r.read(1);
			((t -= w.base[e]) < 0 || t >= 258) && u(o.DATA_ERROR);
			var B = w.permute[t];
			if (0 !== B && 1 !== B) {
				if (R) for (R = 0, T + l > this.dbufSize && u(o.DATA_ERROR), E[I = c[m[0]]] += l; l--;) U[T++] = I;
				if (B > f) break;
				T >= this.dbufSize && u(o.DATA_ERROR), E[I = c[I = a(m, e = B - 1)]]++, U[T++] = I;
			} else R || (R = 1, l = 0), l += 0 === B ? R : 2 * R, R <<= 1;
		}
		for ((s < 0 || s >= T) && u(o.DATA_ERROR), t = 0, e = 0; e < 256; e++) n = t + E[e], E[e] = t, t = n;
		for (e = 0; e < T; e++) U[E[I = 255 & U[e]]] |= e << 8, E[I]++;
		var F = 0, O = 0, x = 0;
		return T && (O = 255 & (F = U[s]), F >>= 8, x = -1), this.writePos = F, this.writeCurrent = O, this.writeCount = T, this.writeRun = x, !0;
	}, f.prototype._read_bunzip = function(e, t) {
		var n, r, i;
		if (this.writeCount < 0) return 0;
		var s = this.dbuf, a = this.writePos, l = this.writeCurrent, c = this.writeCount;
		this.outputsize;
		for (var f = this.writeRun; c;) {
			for (c--, r = l, l = 255 & (a = s[a]), a >>= 8, 3 === f++ ? (n = l, i = r, l = -1) : (n = 1, i = l), this.blockCRC.updateCRCRun(i, n); n--;) this.outputStream.writeByte(i), this.nextoutput++;
			l != r && (f = 0);
		}
		return this.writeCount = c, this.blockCRC.getCRC() !== this.targetBlockCRC && u(o.DATA_ERROR, "Bad block CRC (got " + this.blockCRC.getCRC().toString(16) + " expected " + this.targetBlockCRC.toString(16) + ")"), this.nextoutput;
	};
	var h = function(e) {
		if ("readByte" in e) return e;
		var t = new r();
		return t.pos = 0, t.readByte = function() {
			return e[this.pos++];
		}, t.seek = function(e) {
			this.pos = e;
		}, t.eof = function() {
			return this.pos >= e.length;
		}, t;
	}, p = function(e) {
		var t = new r(), n = !0;
		if (e) if ("number" == typeof e) t.buffer = new Buffer(e), n = !1;
		else {
			if ("writeByte" in e) return e;
			t.buffer = e, n = !1;
		}
		else t.buffer = new Buffer(16384);
		return t.pos = 0, t.writeByte = function(e) {
			if (n && this.pos >= this.buffer.length) {
				var t = new Buffer(2 * this.buffer.length);
				this.buffer.copy(t), this.buffer = t;
			}
			this.buffer[this.pos++] = e;
		}, t.getBuffer = function() {
			if (this.pos !== this.buffer.length) {
				if (!n) throw new TypeError("outputsize does not match decoded input");
				var e = new Buffer(this.pos);
				this.buffer.copy(e, 0, 0, this.pos), this.buffer = e;
			}
			return this.buffer;
		}, t._coerced = !0, t;
	};
	f.Err = o, f.decode = function(e, t, n) {
		for (var r = h(e), i = p(t), s = new f(r, i); !("eof" in r) || !r.eof();) if (s._init_block()) s._read_bunzip();
		else {
			var a = s.reader.read(32) >>> 0;
			if (a !== s.streamCRC && u(o.DATA_ERROR, "Bad stream CRC (got " + s.streamCRC.toString(16) + " expected " + a.toString(16) + ")"), !n || !("eof" in r) || r.eof()) break;
			s._start_bunzip(r, i);
		}
		if ("getBuffer" in i) return i.getBuffer();
	}, f.decodeBlock = function(e, t, n) {
		var r = h(e), s = p(n), a = new f(r, s);
		if (a.reader.seek(t), a._get_next_block() && (a.blockCRC = new i(), a.writeCopies = 0, a._read_bunzip()), "getBuffer" in s) return s.getBuffer();
	}, f.table = function(e, t, n) {
		var i = new r();
		i.delegate = h(e), i.pos = 0, i.readByte = function() {
			return this.pos++, this.delegate.readByte();
		}, i.delegate.eof && (i.eof = i.delegate.eof.bind(i.delegate));
		var s = new r();
		s.pos = 0, s.writeByte = function() {
			this.pos++;
		};
		for (var a = new f(i, s), o = a.dbufSize; !("eof" in i) || !i.eof();) {
			var l = 8 * i.pos + a.reader.bitOffset;
			if (a.reader.hasByte && (l -= 8), a._init_block()) {
				var c = s.pos;
				a._read_bunzip(), t(l, s.pos - c);
			} else {
				if (a.reader.read(32), !n || !("eof" in i) || i.eof()) break;
				a._start_bunzip(i, s), console.assert(a.dbufSize === o, "shouldn't change block size within multistream file");
			}
		}
	}, f.Stream = r, f.version = s.version, f.license = s.license, t.exports = f;
}), An = mn(), Sn = t(vn(), 1);
const Cn = 512, En = new TextDecoder("utf-8");
function In(e) {
	for (const t of e) if (0 !== t) return !1;
	return !0;
}
function Rn(e, t, n) {
	let r = t;
	for (; r < n && 0 !== e[r];) r += 1;
	return En.decode(e.subarray(t, r)).trim();
}
function Tn(e) {
	const t = Rn(e, 124, 136).replace(/\0/g, "").trim();
	return t && Number.parseInt(t, 8) || 0;
}
function kn(e) {
	const t = e.indexOf(",");
	if (t < 0) return null;
	const n = e.indexOf(",", t + 1);
	if (n < 0) return null;
	const r = e.indexOf(",", n + 1);
	if (r < 0) return null;
	const i = function(e) {
		if (e.length < 23) return null;
		const t = Number.parseInt(e.slice(0, 4), 10), n = Number.parseInt(e.slice(5, 7), 10), r = Number.parseInt(e.slice(8, 10), 10), i = Number.parseInt(e.slice(11, 13), 10), s = Number.parseInt(e.slice(14, 16), 10), a = Number.parseInt(e.slice(17, 19), 10), o = Number.parseInt(e.slice(20, 23), 10);
		return Number.isFinite(t) && Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(i) && Number.isFinite(s) && Number.isFinite(a) && Number.isFinite(o) ? Date.UTC(t, n - 1, r, i, s, a, o) : null;
	}(e.slice(0, t).trim());
	if (null === i) return null;
	const s = Number.parseFloat(e.slice(t + 1, n)), a = Number.parseFloat(e.slice(n + 1, r)), o = Number.parseFloat(e.slice(r + 1));
	return Number.isFinite(s) && Number.isFinite(a) && Number.isFinite(o) ? {
		timestampMs: i,
		x: s,
		y: a,
		z: o
	} : null;
}
function Un(e, t, n, r, i, s, a, o, l) {
	null !== e && (i.push(e), s.push(t), a.push(n), o.push(r), l.push(Math.hypot(t, n, r)));
}
async function Bn(e, t) {
	if (e.size > 536870912) throw new Error(`PAX80 archive too large (${e.size} bytes); cap is 536870912`);
	t?.({
		percent: 0,
		message: `Decompressing ${e.name}...`
	});
	const n = new Uint8Array(await e.arrayBuffer()), r = globalThis;
	r.Buffer ??= An.Buffer;
	const i = function(e, t) {
		let n = new Uint8Array(Math.min(1048576, t)), r = 0;
		return Sn.default.decode(e, {
			writeByte(e) {
				if (r >= n.length) {
					if (r >= t) throw new Error(`Decompressed PAX80 archive too large; cap is ${String(t)} bytes`);
					const e = new Uint8Array(Math.min(2 * n.length, t));
					e.set(n), n = e;
				}
				n[r++] = e;
			},
			getBuffer: () => n.subarray(0, r)
		});
	}(n, 1073741824);
	return t?.({
		percent: 0,
		message: `Extracted ${e.name}; scanning sensor members...`
	}), function(e, t) {
		const n = function(e) {
			const t = [];
			let n = 0;
			for (; n + Cn <= e.length;) {
				const r = e.subarray(n, n + Cn);
				if (In(r)) break;
				const i = Rn(r, 0, 100), s = Rn(r, 345, 500), a = s ? `${s}/${i}` : i, o = String.fromCharCode(r[156] ?? 0), l = Tn(r), c = n + Cn;
				("\0" === o || "0" === o) && l > 0 && t.push({
					name: a,
					offset: c,
					size: l
				}), n = c + Math.ceil(l / Cn) * Cn;
			}
			return t;
		}(e).filter((e) => e.name.toLowerCase().endsWith(".sensor.csv")).sort((e, t) => e.name.localeCompare(t.name));
		if (0 === n.length) throw new Error("PAX80 archive does not contain any *.sensor.csv members");
		const r = [], i = [], s = [], a = [], o = [];
		let l = null, c = 0, u = 0, f = 0, h = 0, p = 0;
		if (n.forEach((g, m) => {
			t?.({
				percent: (m + 1) / n.length * 100,
				message: `Parsing PAX80 member ${m + 1}/${n.length}: ${g.name}`
			});
			const d = e.subarray(g.offset, g.offset + g.size), w = En.decode(d);
			let y = 0, b = !1;
			for (; y <= w.length;) {
				const e = w.indexOf("\n", y), t = -1 === e ? w.length : e, n = w.slice(y, t), m = n.endsWith("\r") ? n.slice(0, -1) : n;
				if (y = -1 === e ? w.length + 1 : e + 1, !m) continue;
				if (!b) {
					if (b = !0, "HEADER_TIMESTAMP,X,Y,Z" !== m.trim()) throw new Error(`Unexpected PAX80 sensor header in ${g.name}: ${m.trim() || "<empty>"}`);
					continue;
				}
				const d = kn(m);
				d && (0 === c && (l = d.timestampMs), u += Math.abs(d.x), f += Math.abs(d.y), h += Math.abs(d.z), c += 1, p += 1, 4800 === c && (Un(l, u, f, h, r, i, s, a, o), l = null, c = 0, u = 0, f = 0, h = 0));
			}
		}), 0 === p) throw new Error("PAX80 archive did not contain any valid raw samples");
		if (0 === r.length) throw new Error("PAX80 archive did not contain a complete 60-second epoch");
		return {
			timestamps_ms: r,
			axis_x: i,
			axis_y: s,
			axis_z: a,
			vector_magnitude: o,
			is_raw: !1,
			sample_frequency: 80,
			header_rows_skipped: 1,
			temperature: []
		};
	}(i, t);
}
let Fn = null, On = "", xn = !1;
function Mn(e) {
	const t = new Uint8Array(e.byteLength);
	return t.set(e), t;
}
function zn(e) {
	return 1 / (1 + Math.exp(-Math.max(-60, Math.min(60, e))));
}
function Nn(e, t) {
	const n = Math.max(e, t), r = Math.exp(e - n), i = Math.exp(t - n);
	return i / (r + i);
}
function Gn(e) {
	if (e.data instanceof BigInt64Array || e.data instanceof BigUint64Array) throw new Error("LSTM ONNX output must be numeric float/int data, not bigint data");
	return e.data;
}
function Ln(e, t) {
	for (const n of t) {
		const t = e[n];
		if (t) return t;
	}
	return null;
}
function Pn(e, t, n) {
	const r = new Uint8Array(t);
	for (let i = 0; i < t; i++) r[i] = (e[i] ?? 0) >= n ? 1 : 0;
	return r;
}
function Dn(e) {
	xn || e.env?.wasm && (e.env.wasm.wasmPaths = {
		mjs: "/sleep-scoring-wasm/assets/ort-wasm-simd-threaded-DwpQBVmx.mjs",
		wasm: "/sleep-scoring-wasm/assets/ort-wasm-simd-threaded-DDx2apAW.wasm"
	}, e.env.wasm.numThreads = 1, e.env.wasm.proxy = !0, xn = !0);
}
async function $n(e, t = {}) {
	const n = e.epochs, r = e.bins ?? 30, i = e.channels ?? 4;
	if (n <= 0) return {
		probabilities: /* @__PURE__ */ new Float32Array(),
		scores: /* @__PURE__ */ new Uint8Array()
	};
	const s = n * r * i;
	if (e.data.length !== s) throw new Error(`LSTM feature tensor has ${String(e.data.length)} value(s), expected ${String(s)}`);
	const a = t.ort ?? await import("/sleep-scoring-wasm/assets/ort.bundle.min-BhaRNi-D.mjs");
	Dn(a);
	const o = await async function(e) {
		if (e.session) return e.session;
		const t = {
			executionProviders: ["wasm"],
			graphOptimizationLevel: "all"
		};
		if (e.modelBytes) {
			const n = e.ort ?? await import("/sleep-scoring-wasm/assets/ort.bundle.min-BhaRNi-D.mjs");
			return Dn(n), n.InferenceSession.create(Mn(e.modelBytes), t);
		}
		const n = Mt(e.modelId), r = e.modelUrl ?? n.url, i = e.modelUrl ? `url:${e.modelUrl}` : `selected:${n.id}:${n.version}:${r ?? "no-url"}`;
		return Fn && On === i || (On = i, Fn = (async () => {
			const i = e.ort ?? await import("/sleep-scoring-wasm/assets/ort.bundle.min-BhaRNi-D.mjs");
			if (Dn(i), e.modelUrl) return i.InferenceSession.create(e.modelUrl, t);
			try {
				const e = Mn(await zt(n.id));
				return await i.InferenceSession.create(e, t);
			} catch (s) {
				if (!r) throw s;
				return await i.InferenceSession.create(r, t);
			}
		})().catch((e) => {
			throw Fn = null, e;
		})), Fn;
	}({
		...t,
		ort: a
	}), l = o.inputNames[0];
	if (!l) throw new Error("LSTM ONNX model has no input");
	const c = new a.Tensor("float32", e.data, [
		1,
		n,
		r,
		i
	]);
	return function(e, t) {
		const { epochs: n } = t, r = function(e) {
			return null != e ? e : Nt(null);
		}(t.threshold), i = Ln(e, [
			"sleep_probability",
			"probabilities",
			"probability",
			"probs",
			"logits"
		]) ?? Object.values(e)[0] ?? null;
		if (!i) throw new Error("LSTM ONNX session returned no outputs");
		const s = Gn(i), a = i.dims ?? [], o = a.length > 0 ? a[a.length - 1] : void 0;
		if (s.length === n) {
			const e = new Float32Array(n), t = Array.from({ length: Math.min(s.length, 32) }, (e, t) => s[t] ?? 0).every((e) => e >= 0 && e <= 1);
			for (let r = 0; r < n; r++) e[r] = t ? s[r] ?? 0 : zn(s[r] ?? 0);
			return {
				probabilities: e,
				scores: Pn(e, n, r)
			};
		}
		if (s.length >= 2 * n && (2 === o || s.length === 2 * n)) {
			const e = new Float32Array(n);
			for (let t = 0; t < n; t++) e[t] = Nn(s[2 * t] ?? 0, s[2 * t + 1] ?? 0);
			return {
				probabilities: e,
				scores: Pn(e, n, r)
			};
		}
		const l = Ln(e, [
			"sleep",
			"sleep_prediction",
			"labels",
			"predictions"
		]);
		if (l) {
			const e = Gn(l);
			if (e.length < n) throw new Error(`LSTM ONNX label output has ${String(e.length)} value(s), expected at least ${String(n)}`);
			const t = new Uint8Array(n), r = new Float32Array(n);
			for (let i = 0; i < n; i++) {
				const n = e[i] ? 1 : 0;
				t[i] = n, r[i] = n;
			}
			return {
				probabilities: r,
				scores: t
			};
		}
		throw new Error(`LSTM ONNX output has ${String(s.length)} value(s), cannot align to ${String(n)} epoch(s)`);
	}(await o.run({ [l]: c }), {
		epochs: n,
		...null != t.threshold ? { threshold: t.threshold } : {}
	});
}
function Hn(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n += 1) if (!Object.is(e[n], t[n])) return !1;
	return !0;
}
var jn = class e {
	buckets = /* @__PURE__ */ new Map();
	entries = [];
	static bucket(e) {
		const t = function(e) {
			return "hasib" === e.kind ? e.data : e.activity;
		}(e);
		return `${e.kind}|${String(t.length)}|${String(t[0])}|${String(t[t.length - 1])}`;
	}
	find(t) {
		return this.buckets.get(e.bucket(t))?.find((e) => function(e, t) {
			switch (e.kind) {
				case "hasib": return "hasib" === t.kind && e.algo === t.algo && JSON.stringify(e.config ?? null) === JSON.stringify(t.config ?? null) && Hn(e.data, t.data);
				case "sadeh": return "sadeh" === t.kind && Object.is(e.threshold, t.threshold) && Hn(e.activity, t.activity);
				case "coleKripke": return "coleKripke" === t.kind && e.useActilifeScaling === t.useActilifeScaling && Hn(e.activity, t.activity);
			}
		}(e.request, t));
	}
	add(t) {
		if (this.find(t)) return;
		const n = { request: t }, r = e.bucket(t), i = this.buckets.get(r);
		i ? i.push(n) : this.buckets.set(r, [n]), this.entries.push(n);
	}
};
function Vn(e) {
	return e.medianGapSeconds ? { medianGapSeconds: (t) => e.medianGapSeconds(t) } : {};
}
function Wn(e, t, n) {
	const r = e.find(t)?.outcome;
	if (!r) return n();
	if ("error" in r) return Promise.reject(new Error(r.error));
	const { result: i } = r, s = i instanceof Uint8Array ? new Uint8Array(i) : {
		...i,
		sib: new Uint8Array(i.sib)
	};
	return Promise.resolve(s);
}
async function Xn(e) {
	const { base: t } = e, n = function(e) {
		const t = [], n = /* @__PURE__ */ new Map(), r = [
			"timestamps",
			"axisX",
			"axisY",
			"axisZ",
			"vectorMagnitude",
			"zeroCrossingX",
			"zeroCrossingY",
			"zeroCrossingZ"
		];
		let i, s = "";
		for (const a of e.days) {
			const o = a.group, l = JSON.stringify([
				r.filter((e) => o[e]?.length),
				r.filter((e) => o.counts30s?.[e]?.length),
				!!a.cube,
				!!a.cube?.lstmProbabilities,
				a.ggirSadehCole,
				a.hasibVariants ?? null
			]), c = [0];
			for (let t = 1; t < o.timestamps.length; t++) Math.abs(o.timestamps[t] - o.timestamps[t - 1] - e.countEpochSeconds) > .001 && c.push(t);
			const u = [];
			for (let n = 0; n < c.length; n++) {
				const f = c[n], h = c[n + 1] ?? o.timestamps.length;
				if (f === h) continue;
				const p = o.timestamps[f], g = o.timestamps[h - 1];
				if (!i || l !== s || Math.abs(p - i.group.timestamps.at(-1) - e.countEpochSeconds) > .001) {
					const e = {
						timestamps: [],
						axisY: [],
						vectorMagnitude: []
					};
					for (const t of r) o[t]?.length && (e[t] = []);
					if (o.counts30s) {
						e.counts30s = {
							timestamps: [],
							axisY: [],
							vectorMagnitude: []
						};
						for (const t of r) o.counts30s[t]?.length && (e.counts30s[t] = []);
					}
					i = {
						group: e,
						answers: /* @__PURE__ */ new Map(),
						...a.cube?.lstmProbabilities ? { probabilities: /* @__PURE__ */ new Float32Array() } : {}
					}, t.push({
						...a,
						group: e,
						...a.cube ? { cube: {} } : {}
					});
				}
				const m = i.group.timestamps.length, d = i.group.counts30s?.timestamps.length ?? 0, w = o.counts30s?.timestamps.findIndex((e) => e >= p) ?? 0, y = o.counts30s?.timestamps.findIndex((t) => t >= g + e.countEpochSeconds) ?? -1, b = y < 0 ? o.counts30s?.timestamps.length ?? 0 : y;
				for (const e of r) o[e]?.length && i.group[e].push(...o[e].slice(f, h)), o.counts30s?.[e]?.length && w >= 0 && i.group.counts30s[e].push(...o.counts30s[e].slice(w, b));
				if (i.probabilities && a.cube?.lstmProbabilities) {
					const e = new Float32Array(i.probabilities.length + h - f);
					e.set(i.probabilities), e.set(a.cube.lstmProbabilities.slice(f, h), i.probabilities.length), i.probabilities = e, t[t.length - 1].cube = { lstmProbabilities: e };
				}
				u.push({
					run: i,
					start: m,
					end: m + h - f,
					offset: f,
					nativeStart: d,
					nativeEnd: i.group.counts30s?.timestamps.length ?? 0,
					nativeOffset: Math.max(w, 0)
				}), s = l;
			}
			n.set(o, u);
		}
		return {
			days: t,
			slices: n
		};
	}(e), r = new jn(), i = function(e, t) {
		return {
			scoreGgirHasibVariant: (e, n, r) => {
				t.add({
					kind: "hasib",
					data: e,
					algo: n,
					...r ? { config: r } : {}
				});
				const i = {
					algo: n,
					sib: new Uint8Array(e.length),
					nPostch: 0,
					nGaps: 0,
					nWake: 0,
					nSleep: 0,
					sleepFraction: 0,
					columnName: ""
				};
				return Promise.resolve(i);
			},
			...e.scoreSadeh ? { scoreSadeh: (e, n) => (t.add({
				kind: "sadeh",
				activity: e,
				threshold: n
			}), Promise.resolve(new Uint8Array(e.length))) } : {},
			...e.scoreColeKripke ? { scoreColeKripke: (e, n) => (t.add({
				kind: "coleKripke",
				activity: e,
				useActilifeScaling: n
			}), Promise.resolve(new Uint8Array(e.length))) } : {},
			scoreConsensus: (e, t) => Promise.resolve(new Uint8Array(t[0]?.length ?? 0)),
			...Vn(e)
		};
	}(t, r);
	for (const o of n.days) o.ggirSadehCole && await Ht(o.group, e.countEpochSeconds, i).catch(() => {}), o.cube && 120 !== e.countEpochSeconds && await $t(o.group, e.countEpochSeconds, o.cube.lstmProbabilities, i, e.lstmSelection).catch(() => {}), o.hasibVariants && await jt(o.group, o.hasibVariants, i).catch(() => {});
	const s = r.entries.length ? await e.batch(r.entries.map((e) => e.request)) : null;
	r.entries.forEach((e, t) => {
		const n = s?.length === r.entries.length ? s[t] : void 0;
		n && (e.outcome = n);
	});
	const a = {
		...t,
		...t.scoreEpochs ? { scoreEpochs: (e) => t.scoreEpochs(e) } : {},
		...t.foldOntoGrid ? { foldOntoGrid: (...e) => t.foldOntoGrid(...e) } : {},
		...t.thresholdProbabilities ? { thresholdProbabilities: (...e) => t.thresholdProbabilities(...e) } : {},
		scoreGgirHasibVariant: (e, n, i) => Wn(r, {
			kind: "hasib",
			data: e,
			algo: n,
			...i ? { config: i } : {}
		}, () => t.scoreGgirHasibVariant(e, n, i)),
		...t.scoreSadeh ? { scoreSadeh: (e, n) => Wn(r, {
			kind: "sadeh",
			activity: e,
			threshold: n
		}, () => t.scoreSadeh(e, n)) } : {},
		...t.scoreColeKripke ? { scoreColeKripke: (e, n) => Wn(r, {
			kind: "coleKripke",
			activity: e,
			useActilifeScaling: n
		}, () => t.scoreColeKripke(e, n)) } : {},
		scoreConsensus: (e, n) => t.scoreConsensus(e, n),
		...Vn(t),
		...t.zeroCrossingCounts ? { zeroCrossingCounts: (e, n, r, i, s) => t.zeroCrossingCounts(e, n, r, i, s) } : {}
	};
	return Wt(a, n.slices), a;
}
function Kn(e, t, n, r) {
	return {
		date: e,
		timestamps: Float64Array.from(t).buffer,
		...n && n.timestamps.length > 0 ? { ggirTimestamps: Float64Array.from(n.timestamps).buffer } : {},
		...r && r.timestamps.length > 0 && r.scores.length === r.timestamps.length ? { lstmTimestamps30s: Float64Array.from(r.timestamps).buffer } : {}
	};
}
async function Zn(e, t, n, r, i) {
	const s = t.flatMap((e) => {
		const t = n[e];
		if (!t) return [];
		const i = r.get(e);
		return [{
			date: e,
			timestamps: new Float64Array(t.timestamps).buffer,
			vectorMagnitude: new Float64Array(t.vectorMagnitude).buffer,
			...i && i.timestamps.length > 0 ? {
				ggirTimestamps: new Float64Array(i.timestamps).buffer,
				ggirEnmo: new Float64Array(i.enmo).buffer
			} : {}
		}];
	});
	try {
		return new Set(await ht(e, s, i));
	} catch {
		return console.warn("[local-processing] Circadian coverage could not be computed for this file."), /* @__PURE__ */ new Set();
	}
}
async function Yn(t, n, r, i, a = "vector_magnitude", l, L, we) {
	P(L, "processLocalFile"), ft(t, i);
	const ht = F(), { username: Mt, selectedStudyId: zt, sensorLocation: Nt, participantLaterality: Gt } = ue.getState(), Wt = ye.captureWorkspaceBinding(ht, {
		username: Mt,
		studyId: zt,
		signal: L
	}), en = {
		db: ht,
		signal: L,
		attemptId: o(),
		auditBinding: Wt,
		placement: {
			bodySite: we?.sensorLocation ?? Nt,
			laterality: Gt
		},
		ingestProvenance: qt({
			skipRows: r,
			columnMapping: l,
			...void 0 === we?.preferredActivityColumn ? {} : { preferredActivityColumn: we.preferredActivityColumn }
		})
	};
	let tn, nn, rn;
	try {
		if (P(L, "before acquiring local ingest workers"), t.name.toLowerCase().endsWith(".gt3x") && t.size > 268435456) throw new Error(`This GT3X file is too large to process (${String(Math.ceil(t.size / 2 ** 20))} MiB; the limit is ${String(256)} MiB).`);
		const o = t.name.toLowerCase().endsWith(".gt3x"), F = O(t) ? D(L) : void 0, ue = F?.controller;
		nn = F?.release, ue || (tn = h({ singleThread: o }));
		const ft = ue ? X(ue.signal) : tn.api, Ot = ue ? () => ue.abort() : tn.terminate;
		rn = o ? m() : void 0, en.recording = Ve(await Ft(t, L, ft), en.placement);
		const Mt = await async function(t, n, r, i, a = "vector_magnitude", o, l, h, m, F) {
			if (!m) throw new Error("Local ingest persistence scope is missing.");
			const O = m.db, L = h?.ggirConfig ?? await d(O);
			let D = Tt(h?.countEpochSeconds);
			const X = pt(h), ue = (/* @__PURE__ */ new Date()).toISOString();
			if (t.size < 100) throw U(t, `File appears to be empty (size: ${t.size} bytes). Please select a valid activity data file.`);
			const we = t.name.toLowerCase(), ye = we.endsWith(".bin");
			if (we.endsWith(".gt3x")) return async function(t, n, r, i, a, o) {
				if (!a) throw new Error("Local ingest persistence scope is missing.");
				const l = a.db, c = i?.ggirConfig ?? await d(l);
				P(r, "processLocalRawBinaryFile");
				const u = (/* @__PURE__ */ new Date()).toISOString(), h = be(o?.wasmApi ?? p()), m = o?.gt3xApi, b = o?.cancelGt3xOperation;
				if (!m || !b) throw new Error("GT3X processing worker is unavailable.");
				const E = o?.cancelWasmOperation ?? (() => {
					f(h);
				}), I = s.GT3X_BINARY;
				if (!Be(I, "source_profile_realization", "local")) throw new Error(`Local processing has no implemented source-profile realization for source type "${I}".`);
				const T = "gt3x", U = "GT3X", F = Tt(i?.countEpochSeconds), O = pt(i), x = "gt3x", z = B(x, !0), { prefixHash: N, fullHash: G } = await M(t, (e) => {
					n?.({
						phase: "reading",
						percent: 15 * e,
						message: `Computing file hash... ${Math.round(100 * e)}%`
					});
				}, r, {
					start: () => h.sha256Start(),
					feed: (e) => h.sha256Feed(g(e, [e.buffer])),
					finish: () => h.sha256Finish()
				}), L = t.size, D = await ce(G, l) ?? await ie(N, l, G);
				if (D?.id) {
					n?.({
						phase: "complete",
						percent: 100,
						message: "File already imported"
					});
					const e = D.availableDates;
					return {
						alreadyImported: !0,
						fileId: D.id,
						availableDates: e,
						sourceType: I
					};
				}
				const $ = await fe(t.name, l);
				if ($ && "incomplete" !== $.ingestState) throw new ae();
				n?.({
					phase: "reading",
					percent: 20,
					message: `Reading ${U} file...`,
					device: x,
					plan: z
				}), P(r, `before reading ${U} binary`);
				const X = await t.arrayBuffer();
				let K, Z, Y, q, J, Q, ue, pe, we, ye, Fe, Oe;
				P(r, `after reading ${U} binary`), n?.({
					phase: "parsing",
					percent: -1,
					message: "Parsing GT3X binary and computing epochs, counts and GGIR metrics..."
				});
				let xe = !1;
				const Me = /* @__PURE__ */ new Set();
				let ze, Ne, Ge, Le, Pe, De = null, Ve = !1, We = !1, Xe = !1, Ke = 0, qe = !1, et = !1, tt = null, it = null, st = null, at = null, ft = null, ht = !1, yt = null, bt = null, St = null, It = null;
				const Rt = await W(m, (e) => e.processGt3xFull(g(X, [X]), F, c.csvText), {
					ms: j,
					label: "processGt3xFull",
					signal: r,
					cancel: b
				}).finally(b);
				if (P(r, "after processGt3xFull"), K = Rt.enmo5s, Z = Rt.anglez5s, Y = Rt.anglex5s ?? /* @__PURE__ */ new Float64Array(), q = Rt.angley5s ?? /* @__PURE__ */ new Float64Array(), J = Rt.ggirInvalid5s, Q = Rt.ggirZeroCrossings5s, ue = Rt.ggirNonwear5s, pe = {
					x: Rt.countsX,
					y: Rt.countsY,
					z: Rt.countsZ,
					vm: Rt.countsVm
				}, ze = Rt.zcx60s.length === Rt.countsX.length ? Rt.zcx60s : null, Ne = Rt.zcy60s.length === Rt.countsY.length ? Rt.zcy60s : null, Ge = Rt.zcz60s.length === Rt.countsZ.length ? Rt.zcz60s : null, we = Rt.capsense, ye = Rt.sampleRate, Fe = Rt.firstTsMs, Le = await h.dstPlaceholderRuns(Rt.firstTsMs, Rt.enmo5s.length, Rt.dstTransitions), Pe = Rt.dstTimezone ?? void 0, Oe = Rt.calibration, Rt.lstmFeatures30s.length > 0 && Rt.lstmFeatureEpochs > 0) {
					n?.({
						phase: "scoring",
						percent: 42,
						message: "Running LSTM sleep/wake model..."
					});
					const e = Rt.firstTsMs;
					St = $n({
						data: Rt.lstmFeatures30s,
						epochs: Rt.lstmFeatureEpochs,
						bins: Rt.lstmFeatureBins,
						channels: Rt.lstmFeatureChannels
					}, O.scoreOptions).then((t) => ({
						scores: t.scores,
						probabilities: t.probabilities,
						firstTsMs: e
					}), (e) => (V(e, r, `LSTM sleep/wake scoring (${T})`), console.warn("[local-processing] LSTM sleep/wake scoring failed for a local binary import; count-based scoring remains available."), { failureDetail: ot(e) })), St.catch(() => {});
				} else yt = "the local model produced no usable spectral feature tensor", console.warn("[local-processing] LSTM spectral features were unavailable for a local binary import."), ht = !0;
				if (Rt.mimsUnit.length > 0) {
					const e = await h.uniformTimestamps(Rt.firstTsMs, 5e3, Rt.enmo5s.length);
					it = await Zt(h, {
						mimsUnit: Rt.mimsUnit,
						epochSeconds: 5,
						...Rt.mimsUnitX.length > 0 ? { mimsUnitX: Rt.mimsUnitX } : {},
						...Rt.mimsUnitY.length > 0 ? { mimsUnitY: Rt.mimsUnitY } : {},
						...Rt.mimsUnitZ.length > 0 ? { mimsUnitZ: Rt.mimsUnitZ } : {}
					}, e), et = null === it;
				} else qe = !0, tt = Rt.mimsAvailability?.reason ?? (Rt.mimsAvailability ? "the actours automatic-ingest policy reported MIMS as available but returned no values" : "the loaded actours WASM bundle does not report MIMS availability"), console.warn("[local-processing] MIMS output was unavailable for a local binary import; see the in-app import warning.");
				if (Rt.preschoolWristRfClasses.length > 0 && (It = {
					classes: Rt.preschoolWristRfClasses,
					epochSeconds: Rt.preschoolWristRfEpochSeconds,
					classifier: "Preschool Wrist Random Forest Free Living Lag-Lead",
					model: "actimetricModels::PS.RF.FL.Wrist15.LagLead"
				}), Rt.tzJump) {
					const e = nt;
					console.warn("[local-processing] A possible recording time-zone discontinuity was detected."), n?.({
						phase: "parsing",
						percent: 25,
						message: "Checking time consistency...",
						warning: e
					});
				}
				const Bt = Fe / 1e3, Ft = J.length === Z.length && Z.length > 0 ? J : null, Ot = Z.length > 0 && null !== Ft ? W(h, (e) => e.runGgirFromEpoch({
					source: "gt3x_stream",
					invalidMask: "ggir_part2"
				}, Z, K, ye, Bt, Ft, Pe, c.csvText, oe(c.csvText, Q)).catch((e) => (V(e, r, `runGgirFromEpoch (${T})`), console.warn("[local-processing] GGIR epoch analysis failed for a local binary import."), null)), {
					ms: j,
					label: `runGgirFromEpoch (${T})`,
					signal: r,
					cancel: E
				}) : null;
				Ot?.catch(() => {});
				const Mt = Float64Array.from(await h.uniformTimestamps(Fe, 1e3 * F, pe.y.length), (e) => e / 1e3);
				n?.({
					phase: "scoring",
					percent: 60,
					message: "Running sleep algorithms..."
				});
				const zt = await rt(h, Mt, pe.y, pe.vm, pe.x, pe.z, void 0, void 0, void 0, Ne ?? void 0, ze ?? void 0, Ge ?? void 0);
				await Ye(h, Mt, F);
				const Nt = Object.keys(zt).sort();
				if (0 === Nt.length) throw await Ut(a, "no activity observations"), /* @__PURE__ */ new Error("No activity observations were parsed. Check the input format and import again.");
				const Gt = await Qe(Object.entries(zt), h);
				if (St) {
					const e = await St;
					"failureDetail" in e ? (yt = e.failureDetail, ht = !0) : (st = e.scores, at = e.probabilities, bt = Ze(e.scores, e.probabilities), bt && console.warn("[local-processing] LSTM output quality requires review; see the in-app import warning."), ft = e.firstTsMs);
				}
				const Dt = st && null !== ft ? await _t(h, st, ft, zt, F) : /* @__PURE__ */ new Map(), Wt = at && null !== ft ? await He(h, at, ft, zt, F) : /* @__PURE__ */ new Map(), Kt = await je(h, st, ft), qt = Ue(I), Jt = ke(I, "local"), Qt = {}, en = {
					choiAxis: "vector_magnitude",
					ggirConfigSha256: c.sha256,
					continuousCountsRevision: 3,
					countEpochSeconds: F,
					...Ct(i)
				}, tn = await de(G, en), nn = !!tn && Nt.every((e) => tn.has(e)) && Nt.length > 0, rn = Jt?.has60sCounts ?? !1, sn = H(h, {
					ms: j,
					signal: r,
					cancel: E
				}), an = await Xn({
					base: new Proxy(sn, { get: (e, t) => "scoreGgirHasibVariant" === t ? (...t) => e.scoreGgirHasibVariant(t[0], t[1], t[2], c.csvText) : Reflect.get(e, t) }),
					days: Nt.flatMap((e) => {
						const t = zt[e];
						return t ? [{
							group: t,
							...nn || rn ? { cube: { lstmProbabilities: Wt.get(e) } } : {},
							ggirSadehCole: !nn,
							...i?.hasibVariants && rn ? { hasibVariants: i.hasibVariants } : {}
						}] : [];
					}),
					countEpochSeconds: F,
					lstmSelection: O.selection,
					batch: (e) => W(h, (t) => t.scoreCountScorerBatch(e.map((e) => "hasib" === e.kind ? {
						...e,
						ggirConfigCsv: c.csvText
					} : e)), {
						ms: j,
						label: "scoreCountScorerBatch(binary)",
						signal: r,
						cancel: E
					}).catch((e) => (V(e, r, "scoreCountScorerBatch(binary)"), console.warn("[local-processing] Batched count scoring failed; scoring contiguous runs."), null))
				}), on = !!i?.hasibVariants && (Jt?.has60sCounts ?? !1);
				if (nn && tn) {
					n?.({
						phase: "scoring",
						percent: R("scoring", 0),
						message: "Loaded scored results from cache..."
					});
					for (const [e, t] of Nt.entries()) {
						n?.({
							phase: "scoring",
							percent: R("scoring", e / Nt.length),
							message: `Algorithm variants, day ${String(e + 1)} of ${String(Nt.length)}`
						});
						const i = tn.get(t);
						if (!i) continue;
						const s = Dt.get(t) ?? null;
						Qt[t] = {
							sadeh_1994_actilife: i.sadeh_actilife,
							sadeh_1994_original: i.sadeh_original,
							cole_kripke_1992_actilife: i.ck_actilife,
							cole_kripke_1992_original: i.ck_original,
							tensor_majority_vote: i.consensus_majority_vote,
							lstm_sleep_wake: s ?? i.lstm_sleep_wake ?? null,
							nonwear: i.nonwear,
							nonwearChoi2011: i.nonwear_choi_2011 ?? null,
							detachNonwear: i.detach_nonwear,
							sadeh_1994_ggir: i.sadeh_ggir,
							cole_kripke_1992_ggir: i.ck_ggir
						};
						const a = zt[t];
						if (!a) continue;
						const o = await $t(a, F, Wt.get(t), an, O.selection).catch((e) => (V(e, r, `runAlgorithmCubeForDay(${t}, cached binary)`), console.warn("[local-processing] Cached local binary algorithm-output expansion failed for one analysis day."), Xe = !0, null));
						if (o) {
							const e = Qt[t];
							e && (e.cubeOutputs = ne(o.algorithmResults, (e) => new Uint8Array(e)), e.cubeHistoryOutputs = o.historyOutputs, Ke += o.skipped);
						}
						const l = Qt[t];
						l && !on && (l.tensor_majority_vote = await Lt(l, h));
					}
					n?.({
						phase: "nonwear",
						percent: 82,
						message: "Nonwear restored from cache"
					});
				} else if (Jt?.has60sCounts) {
					const e = await _(h, zt, Nt, F, r, E);
					for (let t = 0; t < Nt.length; t++) {
						const i = Nt[t] ?? "", s = e[t], a = zt[i];
						if (!s || !a) continue;
						n?.({
							phase: "nonwear",
							percent: 72 + (t + 1) / Nt.length * 10,
							message: `Nonwear and algorithm variants, day ${String(t + 1)} of ${String(Nt.length)}`
						});
						const o = a.temperature, l = Re(qt, o, a.accelerationG) ? await W(h, (e) => e.detectDetachFromAccelerationG(new Float64Array(a.accelerationG ?? []), new Float64Array(o ?? [])), {
							ms: j,
							label: `detectDetachFromAccelerationG(${i})`,
							signal: r,
							cancel: E
						}).catch((e) => (V(e, r, `detectDetachFromAccelerationG(${i})`), console.warn("[local-processing] DETACH nonwear detection failed for one local binary analysis day."), xe = !0, Me.add(i), null)) : null, c = s.nonwearChoi2011;
						Qt[i] = {
							sadeh_1994_actilife: s.sadeh_actilife,
							sadeh_1994_original: s.sadeh_original,
							cole_kripke_1992_actilife: s.ck_actilife,
							cole_kripke_1992_original: s.ck_original,
							tensor_majority_vote: new Uint8Array(s.sadeh_actilife.length),
							lstm_sleep_wake: Dt.get(i) ?? null,
							nonwear: s.nonwear,
							nonwearChoi2011: c,
							detachNonwear: l,
							sadeh_1994_ggir: null,
							cole_kripke_1992_ggir: null
						};
						const u = await $t(a, F, Wt.get(i), an, O.selection).catch((e) => (V(e, r, `runAlgorithmCubeForDay(${i}, binary)`), console.warn("[local-processing] Local binary algorithm-output expansion failed for one analysis day."), Xe = !0, null));
						if (u) {
							const e = Qt[i];
							e && (e.cubeOutputs = ne(u.algorithmResults, (e) => new Uint8Array(e)), e.cubeHistoryOutputs = u.historyOutputs, Ke += u.skipped);
						}
					}
				}
				n?.({
					phase: "nonwear",
					percent: R("nonwear", 1),
					message: "Counts-based nonwear detectors..."
				});
				const ln = await At(a, {
					filename: t.name,
					devicePreset: "gt3x",
					epochLengthSeconds: F,
					availableDates: Gt,
					sourceType: I,
					fileHash: N,
					sourceContentHash: G,
					sourceSizeBytes: L,
					source: "local",
					eventMarkerInstants: [],
					createdAt: (/* @__PURE__ */ new Date()).toISOString(),
					ggirPart2Config: c,
					...Bt > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * Bt)).toISOString() } } : {},
					...Pe ? {
						ggirTimezone: Pe,
						ggirClockBasis: gt(Pe)
					} : {},
					...Le.length > 0 ? { ggirDstPlaceholders: await kt(h, Fe, Le, {
						anglez: Z,
						anglex: Y,
						angley: q,
						enmo: K,
						zcx: Q?.[0],
						zcy: Q?.[1],
						zcz: Q?.[2]
					}) } : {}
				}, sn);
				if ("already_complete" === ln.kind) {
					const e = ln.record.id;
					if (null == e) throw new Error("Completed local import identity is invalid.");
					return n?.({
						phase: "complete",
						percent: 100,
						message: "File already imported"
					}), {
						alreadyImported: !0,
						fileId: e,
						availableDates: ln.record.availableDates,
						sourceType: ln.record.sourceType ?? I
					};
				}
				const cn = ln.guard.fileId;
				let un = !1;
				const fn = /* @__PURE__ */ new Map(), hn = function(e) {
					const t = [];
					let n = null;
					const r = [...e].sort((e, t) => e.timestamp - t.timestamp);
					for (const i of r) i.worn || null != n ? i.worn && null != n && (t.push({
						startMs: n,
						endMs: i.timestamp
					}), n = null) : n = i.timestamp;
					if (null != n && r.length > 0) {
						const e = r[r.length - 1]?.timestamp ?? n;
						t.push({
							startMs: n,
							endMs: e
						});
					}
					return t;
				}(we), pn = hn.map((e) => [e.startMs / 1e3, e.endMs / 1e3]), gn = Jt?.has60sCounts ? await y(h, zt, Nt, F, r, void 0, E) : {}, mn = {};
				for (const [e, s] of Object.entries(zt)) {
					const t = s.timestamps;
					mn[e] = Te(await Ie(fn, {
						baseTsSec: Bt,
						epochTimestampsSec: t,
						epochLenSec: F
					}, h), await Ie(gn[e] ?? /* @__PURE__ */ new Map(), {
						baseTsSec: t[0] ?? 0,
						epochTimestampsSec: t,
						epochLenSec: F
					}, h), ue.length === Z.length ? await Se(ue, {
						ggirConfigCsv: c.csvText,
						baseTsSec: Bt,
						epochTimestampsSec: t,
						epochLenSec: F,
						dstRuns: Le
					}, h) : {});
				}
				const dn = _e("ggir"), wn = await w(Qt, zt, pn, dn, Object.fromEntries(Nt.map((e) => [e, mn[e] ?? {}])), ee(I, null), h);
				if (Z.length > 0 && null === Ft) console.warn("[local-processing] GGIR Part-2 invalid mask missing for a local binary import; GGIR summaries skipped."), un = !0;
				else if (Z.length > 0 && null !== Ft) {
					n?.({
						phase: "ggir",
						percent: -1,
						message: "GGIR Parts 3–5 on the 5 s series..."
					});
					const e = await Ot;
					if (e?.days?.length) {
						const t = S(e.days, cn, Oe, c);
						await mt(a), await ge(t, l, r).catch(() => {
							console.warn("[local-processing] Binary epoch-summary persistence failed."), un = !0;
						}), un || await Et({
							ggirConfigSha256: c.sha256,
							fileId: cn,
							sourceContentHash: G,
							sourceSizeBytes: L,
							identity: () => W(h, (e) => e.getComputeIdentity(), {
								ms: j,
								label: `getComputeIdentity (${T}, epoch)`,
								signal: r,
								cancel: E
							}),
							calibration: Oe,
							rows: t,
							startedAt: u
						}, l, r);
					} else un = !0;
				}
				n?.({
					phase: "ggir",
					percent: -1,
					message: "HDCZA sleep window..."
				});
				const yn = new Map((await he(cn, l)).map((e) => [e.analysisDate, e]));
				let bn;
				const _n = Z.length > 0 && null === Ft ? v : await C(cn, Z, Bt, wn, yn, i?.hasptVariant, {
					activity5s: K,
					...Ft ? { invalid5s: Ft } : {},
					ggirConfig: c,
					zeroCrossings5s: Q,
					...Y.length > 0 ? { anglex5s: Y } : {},
					...q.length > 0 ? { angley5s: q } : {},
					dstRuns: Le,
					...Pe ? { timezone: Pe } : {}
				}, Ee(i?.sleepPeriodDetectionConfig, {
					path: "ggir",
					selected: dn
				}), vt(i, a.recording), l, r, h, E, a.auditBinding, (e) => {
					bn = e;
				}), vn = K.length, An = await h.ggir5sWallClockMs(1e3 * Bt, vn, Le), Sn = await xt(h, An, K, Z, {
					anglex: Y,
					angley: q,
					sib: bn,
					...Ft ? { invalid: Ft } : {},
					mimsUnit: it?.unit,
					mimsUnitX: it?.unitX,
					mimsUnitY: it?.unitY,
					mimsUnitZ: it?.unitZ
				}), Cn = It ? await lt(h, Fe, It.classes, It.epochSeconds) : /* @__PURE__ */ new Map();
				let En = !1;
				if (!nn) {
					for (const [t, i] of Nt.entries()) {
						n?.({
							phase: "ggir",
							percent: R("ggir", t / Nt.length),
							message: `GGIR Sadeh / Cole-Kripke, day ${String(t + 1)} of ${String(Nt.length)}`
						});
						const e = zt[i], s = Qt[i];
						if (!e || !s) continue;
						const a = await Ht(e, F, an).catch((e) => (V(e, r, `scoreBuiltinGgirSadehColeForDay(${i})`), console.warn("[local-processing] GGIR count-based scoring failed for one local binary analysis day."), En = !0, null));
						s.sadeh_1994_ggir = a?.sadeh ?? null, s.cole_kripke_1992_ggir = a?.ck ?? null, on || (s.tensor_majority_vote = await Lt(s, h));
					}
					const e = /* @__PURE__ */ new Map();
					for (const t of Nt) {
						const n = Qt[t];
						n && e.set(t, {
							sadeh_actilife: n.sadeh_1994_actilife,
							sadeh_original: n.sadeh_1994_original,
							ck_actilife: n.cole_kripke_1992_actilife,
							ck_original: n.cole_kripke_1992_original,
							consensus_majority_vote: n.tensor_majority_vote,
							lstm_sleep_wake: n.lstm_sleep_wake,
							nonwear: n.nonwear,
							nonwear_choi_2011: n.nonwearChoi2011,
							detach_nonwear: n.detachNonwear,
							sadeh_ggir: n.sadeh_1994_ggir,
							ck_ggir: n.cole_kripke_1992_ggir
						});
					}
					se(G, en, e).catch(() => {
						console.warn("[local-processing] Scored-cache persistence failed.");
					});
				}
				if (on && i?.hasibVariants) {
					n?.({
						phase: "ggir",
						percent: R("ggir", 1),
						message: "Running GGIR HASIB variants..."
					});
					for (const e of Nt) {
						const t = zt[e], n = Qt[e];
						t && n && (n.hasibVariants = await jt(t, i.hasibVariants, an).catch((t) => (V(t, r, `scoreCountBasedHasibVariantsForDay(${e}, binary)`), console.warn("[local-processing] A HASIB variant failed for one local binary analysis day."), We = !0, {})), n.tensor_majority_vote = await Lt(n, h));
					}
				}
				Jt?.has60sCounts && await A(h, Qt, zt, Nt, F, r, void 0, E);
				const In = /* @__PURE__ */ new Map();
				for (const e of Nt) {
					const t = zt[e];
					t && Qt[e] && In.set(e, await me(Kn(e, t.timestamps, Sn.get(e), Kt.get(e)), h));
				}
				const Rn = await Zn(cn, Nt, zt, Sn, h);
				n?.({
					phase: "storing",
					percent: R("storing", 0),
					message: "Saving to local database..."
				});
				const Tn = wt({
					scope: a,
					fileId: cn,
					sourceContentHash: G,
					label: "binary",
					signalDates: Rn,
					onChunk: (e, t, r) => n?.({
						phase: "storing",
						percent: R("storing", dt(e, t, r, Nt.length)),
						message: `Saving days ${String(e)}–${String(t)} of ${String(Nt.length)}`
					})
				});
				for (const s of Nt) {
					const t = zt[s], n = Qt[s];
					if (!t || !n) continue;
					P(r, `saveActivityDay ${s}`);
					const i = Kt.get(s), a = n.sadeh_1994_actilife.buffer, o = n.sadeh_1994_original.buffer, l = n.cole_kripke_1992_actilife.buffer, c = n.cole_kripke_1992_original.buffer, u = n.tensor_majority_vote.buffer, f = null != n.lstm_sleep_wake ? n.lstm_sleep_wake.buffer : null, h = n.nonwear.buffer, p = null != n.nonwearChoi2011 ? n.nonwearChoi2011.buffer : null, g = null != n.detachNonwear ? n.detachNonwear.buffer : null, m = null != n.sadeh_1994_ggir ? n.sadeh_1994_ggir.buffer : null, d = null != n.cole_kripke_1992_ggir ? n.cole_kripke_1992_ggir.buffer : null, w = Vt(n.hasibVariants), y = Vt(n.unifiedSleepWake), b = Cn.get(s)?.buffer, _ = re(n.cubeHistoryOutputs), v = Sn.get(s), A = null != g ? null : Me.has(s) ? "computation_failed" : Ae(qt, t.temperature, t.accelerationG), S = null != A && "source_not_eligible" !== A ? { nonwearSkipReasons: { [e.DETACH_NONWEAR]: Ce[A] } } : {};
					"no_finite_temperature" !== A && "no_acceleration_g" !== A || (De = A), null != g && (Ve = !0), await Tn.add({
						fileId: cn,
						date: s,
						timestamps: new Float64Array(t.timestamps).buffer,
						axisY: new Float64Array(t.axisY).buffer,
						vectorMagnitude: new Float64Array(t.vectorMagnitude).buffer,
						...t.axisX && t.axisX.length > 0 ? { axisX: new Float64Array(t.axisX).buffer } : {},
						...t.axisZ && t.axisZ.length > 0 ? { axisZ: new Float64Array(t.axisZ).buffer } : {},
						...ve(t.temperature) ? { temperature: new Float64Array(t.temperature ?? []).buffer } : {},
						...i && i.timestamps.length > 0 && i.scores.length === i.timestamps.length ? {
							lstmTimestamps30s: new Float64Array(i.timestamps).buffer,
							lstmSleepWake30s: new Uint8Array(i.scores).buffer
						} : {},
						...v && v.timestamps.length > 0 ? {
							ggirTimestamps: new Float64Array(v.timestamps).buffer,
							ggirEnmo: new Float64Array(v.enmo).buffer,
							ggirAnglez: new Float64Array(v.anglez).buffer,
							...te(v.timestamps, An, Q),
							...v.anglex ? { ggirAnglex: new Float64Array(v.anglex).buffer } : {},
							...v.angley ? { ggirAngley: new Float64Array(v.angley).buffer } : {},
							...v.sib ? { ggirSib: new Uint8Array(v.sib).buffer } : {},
							...v.invalid ? { ggirInvalid: new Uint8Array(v.invalid).buffer } : {},
							...v.mimsUnit ? { mimsUnit: new Float64Array(v.mimsUnit).buffer } : {},
							...v.mimsUnitX ? { mimsUnitX: new Float64Array(v.mimsUnitX).buffer } : {},
							...v.mimsUnitY ? { mimsUnitY: new Float64Array(v.mimsUnitY).buffer } : {},
							...v.mimsUnitZ ? { mimsUnitZ: new Float64Array(v.mimsUnitZ).buffer } : {}
						} : {},
						algorithmResults: {
							[k.SADEH_1994_ACTILIFE]: a,
							[k.SADEH_1994_ORIGINAL]: o,
							[k.COLE_KRIPKE_1992_ACTILIFE]: l,
							[k.COLE_KRIPKE_1992_ORIGINAL]: c,
							[k.TENSOR_MAJORITY_VOTE]: u,
							...null != f ? { [k.LSTM_SLEEP_WAKE]: f } : {},
							...null != b ? { [$e]: b } : {},
							...null != m ? { [k.SADEH_1994_GGIR]: m } : {},
							...null != d ? { [k.COLE_KRIPKE_1992_GGIR]: d } : {},
							...w.algorithmResults,
							...y.algorithmResults,
							..._.algorithmResults
						},
						algorithmResultHashes: _.algorithmResultHashes,
						nonwearResults: h,
						nonwearResultsChoi2011: p,
						nonwearChoiAxis: "vector_magnitude",
						detachNonwear: g ?? null,
						...S,
						...mn[s]
					}, [
						{
							algoKey: k.SADEH_1994_ACTILIFE,
							results: a
						},
						{
							algoKey: k.SADEH_1994_ORIGINAL,
							results: o
						},
						{
							algoKey: k.COLE_KRIPKE_1992_ACTILIFE,
							results: l
						},
						{
							algoKey: k.COLE_KRIPKE_1992_ORIGINAL,
							results: c
						},
						{
							algoKey: k.TENSOR_MAJORITY_VOTE,
							results: u
						},
						...null != f ? [{
							algoKey: k.LSTM_SLEEP_WAKE,
							results: f
						}] : [],
						...null != b ? [{
							algoKey: $e,
							results: b
						}] : [],
						{
							algoKey: k.CHOI_2011_NONWEAR,
							results: h
						},
						...null != g ? [{
							algoKey: k.DETACH_NONWEAR,
							results: g
						}] : [],
						...null != m ? [{
							algoKey: k.SADEH_1994_GGIR,
							results: m
						}] : [],
						...null != d ? [{
							algoKey: k.COLE_KRIPKE_1992_GGIR,
							results: d
						}] : [],
						...w.historyOutputs,
						...y.historyOutputs,
						...n.cubeHistoryOutputs ?? []
					], In.get(s));
				}
				await Tn.flush();
				const { saved: kn, activityFailed: Un, historyFailed: Bn } = Tn.state;
				let Fn = !1;
				if (hn.length > 0) {
					const e = Yt(cn, hn);
					try {
						await mt(a), await le(cn, e, l, r);
					} catch (Mn) {
						Fn = !0, console.warn("[local-processing] Sensor-nonwear persistence failed."), ct(Mn, "saveSensorNonwear");
					}
				}
				if (Un || kn !== Nt.length || 0 === kn) throw await Ut(a, `${T} ingest: no ActivityDays could be saved`), /* @__PURE__ */ new Error("Could not save any activity data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
				const On = await Xt(cn, Gt, Jt, n, l, r, h, E, i?.scoredVariantNarrowing);
				P(r, "before completing binary ingest"), await Pt(() => ut(a), cn, On, a.auditBinding);
				const xn = [
					Un && "One or more days of activity data could not be saved (storage may be full). Those days will show no data.",
					Bn && "Algorithm version history could not be fully saved (storage may be full). Scoring data is intact.",
					_n && `Sleep window detection (HDCZA) could not place auto-markers for ${t.name}: ${_n.replace(/\.$/, "")}. Scoring data is intact.`,
					un && "GGIR Part 4/5 daily summaries could not be saved. Scoring data is intact.",
					Fn && "Some CAPSENSE nonwear periods could not be saved. Nonwear coverage may be incomplete.",
					En && "GGIR Sadeh/Cole sleep scoring could not be computed from zero-crossing counts. Other count-based sleep/wake scoring is intact.",
					ht && Je(yt),
					!ht && bt,
					qe && (tt ? `MIMS_UNIT was not computed: ${tt} Other derived activity metrics are intact.` : "MIMS_UNIT could not be computed by the current actours/WASM build. Other derived activity metrics are intact."),
					et && "MIMS_UNIT output was not stored because it did not align with the 5 s GGIR epoch grid.",
					xe && "DETACH temperature-based nonwear detection failed for one or more days. Choi nonwear is intact.",
					null != De && Ce[De] + " Choi nonwear is intact.",
					We && "One or more optional GGIR HASIB variant outputs could not be computed. Base scoring is intact.",
					Xe && "Some algorithm-output harness variants could not be computed. Standard scoring is intact.",
					Ke > 0 && `${Ke} algorithm-output harness variant(s) could not be computed. Standard scoring is intact.`,
					On.dayFailures > 0 && `Scored variants could not be precomputed for ${String(On.dayFailures)} day(s). Reimport the file to retry.`
				].filter(Boolean).join(" ");
				return n?.({
					phase: "complete",
					percent: 100,
					message: "Processing complete",
					...xn ? { warning: xn } : {}
				}), {
					fileId: cn,
					availableDates: Gt,
					activityDaysSaved: kn,
					sourceType: I,
					nonwearSources: [
						"Choi",
						...hn.length > 0 && !Fn ? ["CAPSENSE"] : [],
						...Ve && !xe ? ["DETACH"] : []
					]
				};
			}(t, i, l, h, m, F);
			if (we.endsWith(".rdata") || we.endsWith(".rda")) return Rt(t, i, l, h, m, F?.wasmApi, F?.cancelWasmOperation);
			if (we.endsWith(".csv") && "ggir_5s_meta" === n) throw new I("GGIR results are imported as the GGIR output folder (config.csv and meta/basic) or as a Part 1 meta RData file. A GGIR CSV table is not imported.");
			if (we.endsWith(".csv") && "mims_metrics" === n) return yt(t, r, o ?? {}, i, l, m, F?.wasmApi);
			const Ve = await Me(t, F?.wasmApi ?? p()), ft = null === Ve && function(e) {
				return e in u;
			}(ht = n) && "mapped_csv" === u[ht].supportMode && we.endsWith(".csv");
			var ht;
			P(l, "before preparing local input");
			const Ft = ft ? await We(t, r, o ?? {}, l) : t;
			P(l, "after preparing local input");
			const Ot = ft ? 0 : r;
			P(l, "before sniffing local input");
			const Mt = await G(Ft);
			P(l, "after sniffing local input");
			const zt = Mt === Y.GENEACTIV || Mt === Y.GENEACTIV_BIN || "geneactiv" === n;
			if (zt && !ye && await St(Ft, l)) throw new Error("GeneActiv epoch-compressed CSV files are not supported. Please use the original raw GeneActiv .csv or .bin file.");
			const Nt = be(F?.wasmApi ?? p()), Gt = F?.cancelWasmOperation ?? (() => {
				f(Nt);
			}), Dt = De(t) && !t.aw5Subject.wholeDatabase ? t.aw5Subject : null, Wt = async () => M(Dt && De(t) ? await (async (e) => (i?.({
				phase: "reading",
				percent: -1,
				message: "Reading the recording from the database..."
			}), ze(e.aw5Subject, await e.loadAw5(l))))(t) : t, (e) => {
				i?.({
					phase: "reading",
					percent: 15 * e,
					message: `Computing file hash... ${Math.round(100 * e)}%`
				});
			}, l, {
				start: () => Nt.sha256Start(),
				feed: (e) => Nt.sha256Feed(g(e, [e.buffer])),
				finish: () => Nt.sha256Finish()
			}), qt = async (e) => await ce(e.fullHash, O) ?? await ie(e.prefixHash, O, e.fullHash), en = (e, t) => {
				i?.({
					phase: "complete",
					percent: 100,
					message: "File already imported"
				});
				const n = t.availableDates;
				return t.sourceType || console.warn("[local-processing] Existing import source type is missing; using the compatibility fallback."), {
					alreadyImported: !0,
					fileId: e,
					availableDates: n,
					sourceType: t.sourceType ?? s.EPOCHS_60S
				};
			}, tn = await fe(t.name, O), nn = !(Dt || Ft !== t || Ve || tn && "incomplete" !== tn.ingestState || await ie(await x(t), O));
			let rn = nn ? null : await Wt();
			if (rn) {
				const e = await qt(rn);
				if (e?.id) return en(e.id, e);
			}
			const sn = t.size, an = await fe(t.name, O);
			if (an && "incomplete" !== an.ingestState && (!De(t) || an.aw5RecordingKey !== t.aw5Subject.recordingKey)) throw new ae();
			i?.({
				phase: "reading",
				percent: 15,
				message: "Reading file..."
			});
			const on = function(e) {
				const t = e.name.toLowerCase();
				return t.endsWith(".tar.bz2") || t.endsWith(".tbz2");
			}(Ft);
			P(l, "before checking local input shape");
			const ln = !zt && !ft && await async function(e) {
				const t = (await e.slice(0, Math.min(e.size, 1024)).text()).split(/\r?\n/, 1)[0]?.trim().toLowerCase() ?? "";
				return Jt.has(t);
			}(Ft);
			P(l, "after checking local input shape");
			const cn = "actigraph" === n && we.endsWith(".csv") && null === Mt;
			if (!(Ve || on || ln || zt || ft || cn || null !== Mt)) throw new Error(It());
			const un = Mt === Y.ACTIGRAPH_RAW, fn = !Ve && !on && (zt || un || ln || Ft.size >= 15e8);
			let hn;
			hn = fn ? !ln && !un || zt ? s.GENEACTIV_RAW_CSV : s.ACTIGRAPH_RAW_CSV : "actigraph" === n && we.endsWith(".csv") && !ft ? s.ACTIGRAPH_EPOCHED_CSV : s.EPOCHS_60S, ye && hn === s.GENEACTIV_RAW_CSV && (hn = s.GENEACTIV_BIN);
			const pn = Ve ? xe(Ve) : void 0, gn = Oe({ sourceProfileId: pn }, Fe(h?.analysisParadigm)), mn = pn ?? hn, dn = Ue(mn);
			if (null == dn || !Be(mn, "source_profile_realization", "local")) throw new Error(`Local processing has no implemented source-profile realization for source type "${pn ?? hn}". Use a supported native source or an explicitly implemented mapped import.`);
			const wn = ke(mn, "local"), yn = "aw5" === Ve ? "actiwatch_aw5" : "actiware_csv" === Ve ? "actiware_csv" : on ? "nhanes" : ye ? "geneactiv_bin" : zt ? "geneactiv_csv" : ln ? "raw_csv" : un || cn ? "actigraph_csv" : ft ? "epoch_csv" : "generic", bn = De(t) ? [...T] : B(yn, fn);
			let _n;
			i?.({
				phase: "reading",
				percent: 15,
				message: "File inspected",
				device: yn,
				plan: bn
			});
			let vn = 0, An = {
				tsMs: /* @__PURE__ */ new Float64Array(),
				enmo: /* @__PURE__ */ new Float64Array(),
				anglez: /* @__PURE__ */ new Float64Array(),
				anglex: /* @__PURE__ */ new Float64Array(),
				angley: /* @__PURE__ */ new Float64Array(),
				invalid: /* @__PURE__ */ new Uint8Array(),
				nonwear: /* @__PURE__ */ new Uint8Array(),
				mimsUnit: /* @__PURE__ */ new Float64Array(),
				mimsUnitX: /* @__PURE__ */ new Float64Array(),
				mimsUnitY: /* @__PURE__ */ new Float64Array(),
				mimsUnitZ: /* @__PURE__ */ new Float64Array(),
				zeroCrossingX60s: /* @__PURE__ */ new Float64Array(),
				zeroCrossingY60s: /* @__PURE__ */ new Float64Array(),
				zeroCrossingZ60s: /* @__PURE__ */ new Float64Array()
			}, Sn = null;
			if (Ve) i?.({
				phase: "parsing",
				percent: 20,
				message: "aw5" === Ve ? "Reading Actiwatch .AW5 database..." : "Parsing Actiware CSV..."
			}), Sn = await Pe(t, Ve, Nt, (e, t) => {
				i?.({
					phase: "parsing",
					percent: R("parsing", e),
					message: t
				});
			}, gn ? h?.actiwareAnalysis ?? {} : void 0, {
				...l ? { signal: l } : {},
				cancel: Gt
			}, h?.actiwareRestProposal ? {
				proposal: h.actiwareRestProposal,
				nightStartHour: h.nightStartHour,
				nightEndHour: h.nightEndHour
			} : void 0), D = Sn.epochSeconds, _n = {
				timestamps_ms: [...Sn.timestampsMs],
				axis_y: [...Sn.counts],
				axis_x: new Float64Array(Sn.counts.length),
				axis_z: new Float64Array(Sn.counts.length),
				vector_magnitude: [...Sn.counts],
				is_raw: !1,
				sample_frequency: 0,
				header_rows_skipped: 0,
				temperature: []
			};
			else if (on) i?.({
				phase: "parsing",
				percent: 5,
				message: "Decompressing and parsing NHANES PAX80 archive..."
			}), P(l, "before parsing PAX80 input"), _n = await Bn(t, (e) => {
				i?.({
					phase: "parsing",
					percent: 5 + .4 * e.percent,
					message: e.message
				});
			}), P(l, "after parsing PAX80 input");
			else if (ln) i?.({
				phase: "parsing",
				percent: 30,
				message: "Parsing headerless tri-axial CSV with synthesized timestamps..."
			}), P(l, "before parsing headerless tri-axial input"), _n = await async function(e, t = 100) {
				if (e.size > 536870912) throw new Error("Headerless tri-axial CSV fallback only supports files up to 512 MB");
				const n = (await e.text()).split(/\r?\n/), r = n[0]?.trim().toLowerCase() ?? "";
				if (!Jt.has(r)) throw new Error(`Unsupported tri-axial CSV header: ${r || "<empty>"}`);
				console.warn(`[headerless-triaxial] No sample rate or timestamps in this file; assuming ${t} Hz. Counts and the epoch timeline will be wrong if the true recording rate differs.`);
				const i = [], s = [], a = [], o = [], l = [], c = function(e) {
					if (e.lastModified > 0) {
						const t = new Date(e.lastModified);
						return Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
					}
					return Date.UTC(2e3, 0, 1);
				}(e), u = 1e3 / t;
				let f = 0;
				for (const h of n.slice(1)) {
					const e = h.trim();
					if (!e) continue;
					const t = e.split(",");
					if (t.length < 3) continue;
					const n = Qt(t[0] ?? ""), r = Qt(t[1] ?? ""), p = Qt(t[2] ?? "");
					null !== n && null !== r && null !== p && (s.push(n), a.push(r), o.push(p), l.push(Math.hypot(n, r, p)), i.push(c + f * u), f += 1);
				}
				if (0 === i.length) throw new Error("No valid tri-axial samples found in headerless CSV");
				return {
					timestamps_ms: i,
					axis_x: s,
					axis_y: a,
					axis_z: o,
					vector_magnitude: l,
					is_raw: !0,
					sample_frequency: t,
					header_rows_skipped: 1,
					temperature: []
				};
			}(t), P(l, "after parsing headerless tri-axial input"), console.warn("[local-processing] Imported headerless tri-axial CSV without source timestamps; using synthetic 100 Hz timestamps anchored to the file modified date.");
			else if (Ft.size >= 15e8 || ye || un || Mt === Y.GENEACTIV && Ft.size > K()) {
				const e = Mt ?? ("geneactiv" === n ? Y.GENEACTIV : Y.ACTIGRAPH_RAW), t = e === Y.GENEACTIV ? "GENEActiv" : "ActiGraph";
				i?.({
					phase: "parsing",
					percent: 0,
					message: `Streaming ${t} raw CSV (no full-file buffer)...`
				});
				const r = await W(Nt, (t) => Z(Ft, e, (e) => {
					if ("finalize" === e.stage) {
						const t = [
							"calibration",
							"metrics",
							"signal",
							"part2"
						], n = [
							"calibrating",
							"5 s metrics",
							"counts and MIMS",
							"GGIR Part 2"
						], r = t.findIndex((t) => t === e.finalizeStage), s = e.finalizeFraction ?? 0;
						i?.({
							phase: "epoching",
							percent: r < 0 ? -1 : R("epoching", (r + s) / t.length),
							message: `Computing epochs, counts and GGIR metrics (${e.epochsEmitted.toLocaleString()} epochs)` + (r < 0 ? "..." : `: ${n[r] ?? ""}${r < 2 ? ` ${String(Math.round(100 * s))}%` : "..."}`)
						});
						return;
					}
					i?.({
						phase: "parsing",
						percent: .45 * e.percent,
						message: `Streaming: ${Math.round(e.percent)}% (${e.epochsEmitted.toLocaleString()} epochs)`
					});
				}, 0, l, D, t, nn, L.csvText), {
					ms: j,
					label: "streamParseRaw",
					signal: l,
					cancel: Gt
				});
				vn = r.rowsDropped, r.contentHashes && (rn ??= r.contentHashes), vn > 0 && console.warn("[local-processing] The WASM stream parser rejected malformed source rows; review the in-app import warning.");
				const s = z(r.table);
				_n = {
					timestamps_ms: s.timestamp_ms,
					axis_y: s.axis_y,
					axis_x: s.axis_x,
					axis_z: s.axis_z,
					vector_magnitude: s.vector_magnitude,
					is_raw: !1,
					sample_frequency: r.sampleFrequency,
					header_rows_skipped: r.headerRowsSkipped,
					temperature: s.temperature
				}, An = {
					tsMs: r.timestampsMs5s,
					enmo: r.enmo5s,
					anglez: r.anglez5s,
					anglex: r.anglex5s,
					angley: r.angley5s,
					invalid: r.ggirInvalid5s,
					...r.ggirZeroCrossings5s ? { zeroCrossings5s: r.ggirZeroCrossings5s } : {},
					nonwear: r.ggirNonwear5s,
					mimsUnit: r.mimsUnit,
					mimsUnitX: r.mimsUnitX,
					mimsUnitY: r.mimsUnitY,
					mimsUnitZ: r.mimsUnitZ,
					zeroCrossingX60s: r.zcx60s,
					zeroCrossingY60s: r.zcy60s,
					zeroCrossingZ60s: r.zcz60s
				};
			} else {
				const e = await $(Ft, (e) => {
					i?.({
						phase: "reading",
						percent: 15 + .15 * e.percent,
						message: `Reading: ${Math.round(e.percent)}%`
					});
				}, l, Nt, Gt, nn);
				rn ??= e, i?.({
					phase: "parsing",
					percent: 30,
					message: "Parsing CSV..."
				});
				const n = zt ? "parseGeneactivCsvBuffered" : "parseActigraphCsvBuffered";
				_n = await W(Nt, (e) => zt ? e.parseGeneactivCsvBuffered() : e.parseActigraphCsvBuffered(Ot), {
					ms: j,
					label: n,
					signal: l,
					cancel: Gt
				}).catch((e) => {
					throw V(e, l, n), e instanceof Error ? U(t, e) : e;
				}), zt && _n.is_raw && (_n.sample_frequency = await st(Ft, Y.GENEACTIV, l));
			}
			if (P(l, "after parse"), 0 === _n.timestamps_ms.length) throw U(t, "No activity observations were parsed. Check the input format and import again.");
			if (!_n.is_raw) for (let e = 0; e < _n.timestamps_ms.length; e += 1) {
				const t = _n.timestamps_ms[e];
				if (!Number.isFinite(t) || e > 0 && t <= _n.timestamps_ms[e - 1]) throw new Error("The file's timestamps are out of order or repeated.");
			}
			if (!_n.is_raw && !Sn && 0 === An.tsMs.length) {
				const e = await pe(_n.timestamps_ms.map((e) => e / 1e3), null, Nt);
				if (null === e || e !== D) throw new Error(`Source count cadence is ${String(e ?? "unknown")} seconds; the selected grid is ${String(D)} seconds. Select the matching epoch length and import again.`);
			}
			if (nn) {
				rn ??= await Wt();
				const e = await qt(rn);
				if (e?.id) return en(e.id, e);
			}
			if (!rn) throw new Error("local import lost its content hash");
			const { prefixHash: Cn, fullHash: En } = rn;
			let In = _n.timestamps_ms;
			const Rn = ft ? Ft.eventMarkerRows : void 0, Tn = Sn ? Sn.eventMarkerInstantsSec : Rn ? at(Rn, In) : null;
			let kn = _n.axis_x, Un = _n.axis_y, Fn = _n.axis_z, On = _n.vector_magnitude;
			const xn = _n.temperature, Mn = void 0 === _n.tz_jump ? await Ke(Nt, In) : _n.tz_jump ? nt : null;
			Mn && (console.warn("[local-processing] A possible recording time-zone discontinuity was detected."), i?.({
				phase: "parsing",
				percent: 30,
				message: "Checking time consistency...",
				warning: Mn
			}));
			let zn = null, Nn = null, Gn = null, Ln = /* @__PURE__ */ new Map(), Pn = 0, Dn = null, Hn = null, jn = null, Vn = !1, Wn = null, Yn = !1, qn = null, Jn = !1, Qn = !1, er = null;
			if (_n.is_raw && _n.sample_frequency > 0 && 0 === An.tsMs.length) {
				i?.({
					phase: "epoching",
					percent: 35,
					message: "Computing GGIR metrics (imputation + calibration)..."
				});
				const e = new Float64Array(kn), t = new Float64Array(Un), n = new Float64Array(Fn), r = new Float64Array(In), s = _n.sample_frequency, a = await W(Nt, (i) => i.processRawXyzImputed(r, e, t, n, s, null, D, L.csvText, xn.length > 0 ? Float64Array.from(xn) : void 0), {
					ms: j,
					label: "processRawXyzImputed",
					signal: l,
					cancel: Gt
				});
				a.numGaps > 0 && console.warn("[local-processing] GGIR time-gap imputation was applied before metric computation.");
				const o = a.enmo5s, c = a.anglez5s;
				if (zn = a.counts, Nn = a.firstTsMs, Gn = a.calibration, Pn = (In[0] ?? a.firstTsMs) / 1e3, Ln = await b(Nt, {
					x: e,
					y: t,
					z: n,
					sampleRate: s,
					epochSeconds: D
				}, l, void 0, Gt), 0 === a.numGaps) try {
					i?.({
						phase: "scoring",
						percent: 42,
						message: "Running LSTM sleep/wake model..."
					});
					const r = await W(Nt, (r) => r.lstmSpectralFeatures30s(e, t, n, s), {
						ms: j,
						label: "lstmSpectralFeatures30s",
						signal: l,
						cancel: Gt
					}), o = await $n({
						data: r.features,
						epochs: r.epochs,
						bins: r.bins,
						channels: r.channels
					}, X.scoreOptions);
					Dn = o.scores, Hn = o.probabilities, qn = Ze(Dn, Hn), qn && console.warn("[local-processing] LSTM output quality requires review; see the in-app import warning."), jn = a.firstTsMs;
				} catch (li) {
					V(li, l, "LSTM sleep/wake scoring (csv)"), Wn = ot(li), console.warn("[local-processing] LSTM sleep/wake scoring failed; count-based scoring remains available."), Vn = !0;
				}
				else Yn = !0;
				const u = a.firstTsMs;
				An = {
					tsMs: await Nt.uniformTimestamps(u, 5e3, o.length),
					enmo: o,
					anglez: c,
					anglex: a.anglex5s ?? /* @__PURE__ */ new Float64Array(),
					angley: a.angley5s ?? /* @__PURE__ */ new Float64Array(),
					invalid: a.ggirInvalid5s,
					...a.ggirZeroCrossings5s ? { zeroCrossings5s: a.ggirZeroCrossings5s } : {},
					nonwear: a.ggirNonwear5s,
					mimsUnit: /* @__PURE__ */ new Float64Array(),
					mimsUnitX: /* @__PURE__ */ new Float64Array(),
					mimsUnitY: /* @__PURE__ */ new Float64Array(),
					mimsUnitZ: /* @__PURE__ */ new Float64Array(),
					zeroCrossingX60s: /* @__PURE__ */ new Float64Array(),
					zeroCrossingY60s: /* @__PURE__ */ new Float64Array(),
					zeroCrossingZ60s: /* @__PURE__ */ new Float64Array()
				};
			}
			let tr = null, nr = 0, rr = [], ir = !1, sr = !1, ar = !1;
			const or = /* @__PURE__ */ new Set();
			let lr = null, cr = !1, ur = !1, fr = !1, hr = 0, pr = null, gr = !1, mr = 60 === D && An.zeroCrossingX60s.length > 0 ? An.zeroCrossingX60s : null, dr = 60 === D && An.zeroCrossingY60s.length > 0 ? An.zeroCrossingY60s : null, wr = 60 === D && An.zeroCrossingZ60s.length > 0 ? An.zeroCrossingZ60s : null;
			if (_n.is_raw && _n.sample_frequency > 0) {
				0 === In.length ? console.warn("[local-processing] raw CSV has no timestamps — skipping GGIR pipeline") : (nr = (In[0] ?? 0) / 1e3, An.anglez.length > 0 && (tr = An.anglez));
				const e = Nn ?? (In.length > 0 ? In[0] ?? 0 : 0);
				let t = zn;
				await q([
					...In.length > 0 && 0 === An.anglez.length ? [{
						name: "anglez5s",
						cost: 1,
						run: async (e, t) => {
							tr = await W(e, (e) => e.computeAnglez5s(new Float64Array(kn), new Float64Array(Un), new Float64Array(Fn), _n.sample_frequency), {
								ms: j,
								label: "computeAnglez5s (csv fallback)",
								signal: l,
								cancel: t.cancel
							}).catch((e) => {
								if (V(e, l, "computeAnglez5s (csv fallback)"), Q(e, t)) throw e;
								return console.warn("[local-processing] Angle computation failed for a local CSV import."), null;
							});
						}
					}] : [],
					...null != zn ? [{
						name: "MIMS",
						cost: 10,
						run: async (t, n) => {
							const r = await async function(e) {
								const t = {
									epochSeconds: 5,
									sourceShape: !0,
									startTimeSeconds: e.startTimeSeconds,
									outputMimsPerAxis: !0
								}, n = e.wasmApi ?? p();
								return Zt(n, await W(n, (n) => n.computeMimsUnit(e.x, e.y, e.z, e.sampleRate, t), {
									ms: j,
									label: `computeMimsUnit (${e.label})`,
									signal: e.signal,
									cancel: e.cancelOperation ?? (() => {
										f(n);
									})
								}), e.ggirTimestampsMs);
							}({
								x: new Float64Array(kn),
								y: new Float64Array(Un),
								z: new Float64Array(Fn),
								sampleRate: _n.sample_frequency,
								ggirTimestampsMs: An.tsMs,
								startTimeSeconds: e / 1e3,
								label: "csv",
								...l ? { signal: l } : {},
								wasmApi: t,
								cancelOperation: n.cancel
							}).catch((e) => {
								if (V(e, l, "computeMimsUnit (csv)"), Q(e, n)) throw e;
								return console.warn("[local-processing] MIMS computation failed for a local CSV import."), Jn = !0, null;
							});
							r || (Qn = !Jn), An.mimsUnit = r?.unit ?? /* @__PURE__ */ new Float64Array(), An.mimsUnitX = r?.unitX ?? /* @__PURE__ */ new Float64Array(), An.mimsUnitY = r?.unitY ?? /* @__PURE__ */ new Float64Array(), An.mimsUnitZ = r?.unitZ ?? /* @__PURE__ */ new Float64Array();
						}
					}, {
						name: "preschool RF",
						cost: 8,
						run: async (e, t) => {
							er = await async function(e) {
								const t = e.wasmApi ?? p();
								try {
									return await W(t, (t) => t.classifyActimetricPreschoolWristRf(e.x, e.y, e.z, e.sampleRate), {
										ms: j,
										label: `classifyActimetricPreschoolWristRf (${e.label})`,
										signal: e.signal,
										cancel: e.pass?.cancel ?? (() => {
											f(t);
										})
									});
								} catch (li) {
									if (V(li, e.signal, `classifyActimetricPreschoolWristRf (${e.label})`), e.pass && Q(li, e.pass)) throw li;
									return console.warn("[local-processing] The optional preschool wrist activity classifier was unavailable."), null;
								}
							}({
								x: new Float64Array(kn),
								y: new Float64Array(Un),
								z: new Float64Array(Fn),
								sampleRate: _n.sample_frequency,
								label: "csv",
								...l ? { signal: l } : {},
								wasmApi: e,
								pass: t
							});
						}
					}] : [],
					...null == zn ? [{
						name: "Neishabouri counts",
						cost: 3,
						run: async (e, n) => {
							t = await W(e, (e) => e.neishabouriCounts(new Float64Array(kn), new Float64Array(Un), new Float64Array(Fn), _n.sample_frequency, D), {
								ms: j,
								label: "neishabouriCounts",
								signal: l,
								cancel: n.cancel
							});
						}
					}] : [],
					...null == mr || null == dr || null == wr ? [{
						name: "zero-crossing",
						cost: 3,
						run: async (e, t) => {
							const n = await W(e, (e) => e.zeroCrossingCounts(new Float64Array(kn), new Float64Array(Un), new Float64Array(Fn), _n.sample_frequency, D), {
								ms: j,
								label: "zeroCrossingCounts (csv)",
								signal: l,
								cancel: t.cancel
							}).catch((e) => {
								if (V(e, l, "zeroCrossingCounts (csv)"), Q(e, t)) throw e;
								return console.warn("[local-processing] Zero-crossing computation failed for a local CSV import."), gr = !0, null;
							});
							n && (mr ??= n.zcx, dr ??= n.zcy, wr ??= n.zcz);
						}
					}] : [],
					...qe(hn, D) ? [{
						name: "compute30sCountsFromRaw",
						cost: 6,
						run: async (t, n) => {
							pr = await et({
								wasmApi: t,
								x: new Float64Array(kn),
								y: new Float64Array(Un),
								z: new Float64Array(Fn),
								sampleRate: _n.sample_frequency,
								firstTsMs: e,
								timestampsMs: _n.timestamps_ms,
								...l ? { signal: l } : {},
								label: "csv",
								cancelOperation: n.cancel
							}).catch((e) => {
								if (V(e, l, "native 30-second counts (csv)"), Q(e, n)) throw e;
								return console.warn("[local-processing] The native 30-second count pass failed for a local CSV import."), null;
							});
						}
					}] : []
				], {
					primary: Nt,
					extraWorkers: J({
						cores: navigator.hardwareConcurrency,
						deviceMemoryGib: N()
					}),
					signal: l,
					cancelOperation: Gt
				}), i?.({
					phase: "epoching",
					percent: 45,
					message: "Computing Neishabouri activity counts..."
				});
				const n = await Nt.uniformTimestamps(e, 1e3 * D, t.x.length);
				xn.length > 0 && (rr = await tt(Nt, _n.timestamps_ms, xn, n, D)), In = n, kn = Array.from(t.x), Un = Array.from(t.y), Fn = Array.from(t.z), On = Array.from(t.vm);
			} else !_n.is_raw && xn.length > 0 && (rr = Array.from(xn));
			kn = await it(Nt, kn, 0), Un = await it(Nt, Un, 0), Fn = await it(Nt, Fn, 0), On = await it(Nt, On, 2);
			const yr = {
				vector_magnitude: On,
				axis_y: Un,
				axis_x: kn,
				axis_z: Fn
			}[a];
			yr || console.warn("[local-processing] Unknown Choi axis configuration; falling back to vector magnitude.");
			const br = yr ?? On;
			i?.({
				phase: "scoring",
				percent: 55,
				message: "Running sleep algorithms..."
			});
			const _r = In.map((e) => e / 1e3), vr = "vector_magnitude" !== a ? br : void 0, Ar = rr.length > 0, Sr = await rt(Nt, _r, Un, On, kn, Fn, vr, Ar ? rr : void 0, void 0, dr && dr.length === In.length ? dr : void 0, mr && mr.length === In.length ? mr : void 0, wr && wr.length === In.length ? wr : void 0);
			await Ye(Nt, _r, D), pr && await bt(Nt, Sr, pr);
			const Cr = Object.keys(Sr).sort();
			if (0 === Cr.length) throw await Ut(m, "no activity observations"), /* @__PURE__ */ new Error("No activity observations were parsed. Check the input format and import again.");
			const Er = await Qe(Object.entries(Sr), Nt), Ir = 120 !== D && Dn && null !== jn ? await _t(Nt, Dn, jn, Sr, D) : /* @__PURE__ */ new Map(), Rr = 120 !== D && Hn && null !== jn ? await He(Nt, Hn, jn, Sr, D) : /* @__PURE__ */ new Map(), Tr = await je(Nt, Dn, jn), kr = {
				ggirConfigSha256: L.sha256,
				continuousCountsRevision: 3,
				choiAxis: a,
				countEpochSeconds: D,
				...Ct(h)
			}, Ur = ft ? null : await de(En, kr), Br = {}, Fr = !!Ur && Cr.every((e) => Ur.has(e)), Or = gn?.wakeThresholdFromRecording ? Sn?.actiwareWakeThreshold ?? null : null, xr = Kt(h?.hasibVariants, Or), Mr = wn?.has60sCounts ?? !1, zr = 120 !== D && !!h?.hasibVariants && Mr, Nr = H(Nt, {
				ms: j,
				signal: l,
				cancel: Gt
			}), Gr = await Xn({
				base: new Proxy(Nr, { get: (e, t) => "scoreGgirHasibVariant" === t ? (...t) => e.scoreGgirHasibVariant(t[0], t[1], t[2], L.csvText) : Reflect.get(e, t) }),
				days: Cr.flatMap((e) => {
					const t = Sr[e];
					return t ? [{
						group: t,
						...(Fr || Mr) && 120 !== D ? { cube: { lstmProbabilities: Rr.get(e) } } : {},
						ggirSadehCole: !Fr && Mr && (t.zeroCrossingY?.length ?? 0) > 0,
						...xr && Mr ? { hasibVariants: xr } : {}
					}] : [];
				}),
				countEpochSeconds: D,
				lstmSelection: X.selection,
				batch: (e) => W(Nt, (t) => t.scoreCountScorerBatch(e.map((e) => "hasib" === e.kind ? {
					...e,
					ggirConfigCsv: L.csvText
				} : e)), {
					ms: j,
					label: "scoreCountScorerBatch(csv)",
					signal: l,
					cancel: Gt
				}).catch((e) => (V(e, l, "scoreCountScorerBatch(csv)"), console.warn("[local-processing] Batched count scoring failed; scoring contiguous runs."), null))
			});
			if (Ur && Cr.every((e) => Ur.has(e))) {
				i?.({
					phase: "scoring",
					percent: R("scoring", 0),
					message: "Loaded scored results from cache..."
				});
				for (const [e, t] of Cr.entries()) {
					i?.({
						phase: "scoring",
						percent: R("scoring", e / Cr.length),
						message: `Algorithm variants, day ${String(e + 1)} of ${String(Cr.length)}`
					});
					const n = Ur.get(t);
					if (!n) continue;
					const r = Ir.get(t) ?? null;
					Br[t] = {
						sadeh_1994_actilife: n.sadeh_actilife,
						sadeh_1994_original: n.sadeh_original,
						cole_kripke_1992_actilife: n.ck_actilife,
						cole_kripke_1992_original: n.ck_original,
						tensor_majority_vote: n.consensus_majority_vote,
						lstm_sleep_wake: r ?? n.lstm_sleep_wake ?? null,
						nonwear: n.nonwear,
						nonwearChoi2011: n.nonwear_choi_2011 ?? null,
						detachNonwear: n.detach_nonwear,
						sadeh_1994_ggir: n.sadeh_ggir,
						cole_kripke_1992_ggir: n.ck_ggir
					};
					const s = Sr[t];
					if (!s) continue;
					const a = 120 === D ? null : await $t(s, D, Rr.get(t), Gr, X.selection).catch((e) => (V(e, l, `runAlgorithmCubeForDay(${t}, cached csv)`), console.warn("[local-processing] Cached local CSV algorithm-output expansion failed for one analysis day."), fr = !0, null));
					if (a) {
						const e = Br[t];
						e && (e.cubeOutputs = ne(a.algorithmResults, (e) => new Uint8Array(e)), e.cubeHistoryOutputs = a.historyOutputs, hr += a.skipped);
					}
					const o = Br[t];
					o && !zr && (o.tensor_majority_vote = await Lt(o, Nt));
				}
				i?.({
					phase: "nonwear",
					percent: 82,
					message: "Nonwear restored from cache"
				});
			} else {
				if (wn?.has60sCounts) {
					i?.({
						phase: "scoring",
						percent: R("scoring", .5),
						message: "Running sleep algorithms (batch)..."
					});
					const e = await _(Nt, Sr, Cr, D, l, Gt);
					for (let t = 0; t < Cr.length; t++) {
						const n = Cr[t] ?? "", r = Sr[n], s = e[t];
						if (!r || !s) continue;
						i?.({
							phase: "nonwear",
							percent: 72 + (t + 1) / Cr.length * 10,
							message: `Nonwear and algorithm variants, day ${String(t + 1)} of ${String(Cr.length)}`
						});
						const a = await (Re(dn, r.temperature, r.accelerationG) ? W(Nt, (e) => e.detectDetachFromAccelerationG(new Float64Array(r.accelerationG ?? []), new Float64Array(r.temperature ?? [])), {
							ms: j,
							label: `detectDetachFromAccelerationG(${n})`,
							signal: l,
							cancel: Gt
						}).catch((e) => (V(e, l, `detectDetachFromAccelerationG(${n})`), console.warn("[local-processing] DETACH nonwear detection failed for one local CSV analysis day."), ar = !0, or.add(n), null)) : Promise.resolve(null)), o = s.nonwearChoi2011, c = (r.zeroCrossingY?.length ?? 0) > 0 ? await Ht(r, D, Gr).catch((e) => (V(e, l, `scoreBuiltinGgirSadehColeForDay(${n})`), console.warn("[local-processing] GGIR count-based scoring failed for one local CSV analysis day."), sr = !0, null)) : null;
						Br[n] = {
							sadeh_1994_actilife: s.sadeh_actilife,
							sadeh_1994_original: s.sadeh_original,
							cole_kripke_1992_actilife: s.ck_actilife,
							cole_kripke_1992_original: s.ck_original,
							tensor_majority_vote: new Uint8Array(s.sadeh_actilife.length),
							lstm_sleep_wake: Ir.get(n) ?? null,
							nonwear: s.nonwear,
							nonwearChoi2011: o,
							detachNonwear: a,
							sadeh_1994_ggir: c?.sadeh ?? null,
							cole_kripke_1992_ggir: c?.ck ?? null
						};
						const u = 120 === D ? null : await $t(r, D, Rr.get(n), Gr, X.selection).catch((e) => (V(e, l, `runAlgorithmCubeForDay(${n}, csv)`), console.warn("[local-processing] Local CSV algorithm-output expansion failed for one analysis day."), fr = !0, null));
						if (u) {
							const e = Br[n];
							e && (e.cubeOutputs = ne(u.algorithmResults, (e) => new Uint8Array(e)), e.cubeHistoryOutputs = u.historyOutputs, hr += u.skipped);
						}
						const f = Br[n];
						f && !zr && (f.tensor_majority_vote = await Lt(f, Nt));
					}
				}
				const e = /* @__PURE__ */ new Map();
				for (const t of Cr) {
					const n = Br[t];
					if (!n) continue;
					const r = {
						sadeh_actilife: n.sadeh_1994_actilife,
						sadeh_original: n.sadeh_1994_original,
						ck_actilife: n.cole_kripke_1992_actilife,
						ck_original: n.cole_kripke_1992_original,
						consensus_majority_vote: n.tensor_majority_vote,
						lstm_sleep_wake: n.lstm_sleep_wake,
						nonwear: n.nonwear,
						nonwear_choi_2011: n.nonwearChoi2011,
						detach_nonwear: n.detachNonwear,
						sadeh_ggir: n.sadeh_1994_ggir,
						ck_ggir: n.cole_kripke_1992_ggir
					};
					e.set(t, r);
				}
				ft || se(En, kr, e).catch(() => {
					console.warn("[local-processing] Scored-cache persistence failed.");
				});
			}
			if (zr && h?.hasibVariants) {
				i?.(bn.includes("ggir") ? {
					phase: "ggir",
					percent: R("ggir", 0),
					message: "Running GGIR HASIB variants..."
				} : {
					phase: "nonwear",
					percent: R("nonwear", 1),
					message: "Running GGIR HASIB variants..."
				});
				for (const e of Cr) {
					const t = Sr[e], n = Br[e];
					t && n && (n.hasibVariants = await jt(t, xr ?? h.hasibVariants, Gr).catch((t) => (V(t, l, `scoreCountBasedHasibVariantsForDay(${e}, csv)`), console.warn("[local-processing] A HASIB variant failed for one local CSV analysis day."), ur = !0, {})), n.tensor_majority_vote = await Lt(n, Nt));
				}
			}
			let Lr = {};
			120 !== D && wn?.has60sCounts && (await A(Nt, Br, Sr, Cr, D, l, void 0, Gt, E(Or)), Lr = await y(Nt, Sr, Cr, D, l, void 0, Gt)), i?.(bn.includes("ggir") && An.anglez.length > 0 ? {
				phase: "ggir",
				percent: -1,
				message: "GGIR Parts 3–5 on the 5 s series..."
			} : bn.includes("ggir") ? {
				phase: "ggir",
				percent: -1,
				message: "Nonwear masks on each day's grid..."
			} : {
				phase: "nonwear",
				percent: R("nonwear", 1),
				message: "Nonwear masks on each day's grid..."
			});
			const Pr = await At(m, {
				filename: t.name,
				devicePreset: n,
				epochLengthSeconds: D,
				availableDates: Er,
				fileHash: Cn,
				sourceContentHash: En,
				sourceSizeBytes: sn,
				source: "local",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				sourceType: hn,
				ggirPart2Config: L,
				...pn ? { sourceProfileId: pn } : {},
				...Dt ? { sourceDatabaseFilename: Dt.databaseFilename } : {},
				...De(t) ? { aw5RecordingKey: t.aw5Subject.recordingKey } : {},
				...Sn ? { sourceEpochSeconds: Sn.sourceEpochSeconds } : {},
				eventMarkerInstants: Tn ? Cr.filter((e) => Sr[e] && Br[e]).flatMap((e) => Array.from(Bt(Tn, e))) : [],
				...nr > 0 || null != Sn?.gmtOffsetMinutes ? { recording: {
					...nr > 0 ? { effectiveTime: (/* @__PURE__ */ new Date(1e3 * nr)).toISOString() } : {},
					...null != Sn?.gmtOffsetMinutes ? { gmtOffsetMinutes: Sn.gmtOffsetMinutes } : {}
				} } : {}
			}, Nr);
			if ("already_complete" === Pr.kind) {
				const e = Pr.record.id;
				if (null == e) throw new Error("Completed local import identity is invalid.");
				return i?.({
					phase: "complete",
					percent: 100,
					message: "File already imported"
				}), {
					alreadyImported: !0,
					fileId: e,
					availableDates: Pr.record.availableDates,
					sourceType: Pr.record.sourceType ?? hn
				};
			}
			const Dr = Pr.guard.fileId;
			Sn?.actiwareStatisticsInput && (await mt(m), await O.actiwareStatisticsInputs.put({
				fileId: Dr,
				input: Sn.actiwareStatisticsInput
			})), Sn && (Sn.actiwareIntervals.length > 0 || Sn.actiwareSleepWake || Sn.actiwareStatistics.length > 0 || Sn.actiwareRecording) && (await mt(m), await O.actiwareFileData.put({
				fileId: Dr,
				...Sn.actiwareIntervals.length > 0 ? { actiwareIntervals: Sn.actiwareIntervals } : {},
				...Sn.actiwareSleepWake ? { actiwareSleepWake: Ge(Sn.actiwareSleepWake) } : {},
				...Sn.actiwareStatistics.length > 0 ? { actiwareStatistics: Sn.actiwareStatistics } : {},
				...Sn.actiwareRecording ? { actiwareRecording: Sn.actiwareRecording } : {},
				...null != Sn.actiwareWakeThreshold ? { actiwareWakeThreshold: Sn.actiwareWakeThreshold } : {},
				...Sn.actiwareRestProposal ? { actiwareRestProposal: Sn.actiwareRestProposal } : {},
				...null != Or ? { oakleyThreshold: Or } : {}
			}));
			let $r = !1, Hr = null;
			const jr = {};
			for (const [e, s] of Object.entries(Sr)) {
				const t = s.timestamps;
				jr[e] = Te(await Ie(Ln, {
					baseTsSec: Pn,
					epochTimestampsSec: t,
					epochLenSec: D
				}, Nt), await Ie(Lr[e] ?? /* @__PURE__ */ new Map(), {
					baseTsSec: t[0] ?? 0,
					epochTimestampsSec: t,
					epochLenSec: D
				}, Nt), An.nonwear.length === An.tsMs.length ? await Se(An.nonwear, {
					ggirConfigCsv: L.csvText,
					baseTsSec: (An.tsMs[0] ?? 0) / 1e3,
					epochTimestampsSec: t,
					epochLenSec: D
				}, Nt) : {});
			}
			const Vr = _e("ggir"), Wr = await w(Br, Sr, [], Vr, Object.fromEntries(Cr.map((e) => [e, jr[e] ?? {}])), ee(hn, pn), Nt);
			let Xr;
			const Kr = An.invalid.length === An.anglez.length && An.anglez.length > 0 ? An.invalid : null;
			if (An.anglez.length > 0 && An.enmo.length > 0 && null === Kr && (console.warn("[local-processing] GGIR Part-2 invalid mask missing for a local CSV import; GGIR summaries skipped."), ir = !0), An.anglez.length > 0 && An.enmo.length > 0 && null !== Kr) {
				const e = (An.tsMs[0] ?? 0) / 1e3, t = Kr, n = await W(Nt, (n) => n.runGgirFromEpoch({
					source: "raw_csv_stream",
					invalidMask: "ggir_part2"
				}, An.anglez, An.enmo, _n.sample_frequency, e, t, void 0, L.csvText, oe(L.csvText, An.zeroCrossings5s)).catch((e) => (V(e, l, "runGgirFromEpoch (csv)"), console.warn("[local-processing] GGIR epoch analysis failed for a local CSV import."), ir = !0, null)), {
					ms: j,
					label: "runGgirFromEpoch (csv)",
					signal: l,
					cancel: Gt
				});
				if (n?.days?.length) {
					const e = S(n.days, Dr, Gn, L);
					await mt(m), await ge(e, O, l).catch(() => {
						console.warn("[local-processing] CSV daily-summary persistence failed."), $r = !0;
					}), $r || await Et({
						ggirConfigSha256: L.sha256,
						fileId: Dr,
						sourceContentHash: En,
						sourceSizeBytes: sn,
						identity: () => W(Nt, (e) => e.getComputeIdentity(), {
							ms: j,
							label: "getComputeIdentity (csv)",
							signal: l,
							cancel: Gt
						}),
						calibration: Gn,
						rows: e,
						startedAt: ue
					}, O, l);
				}
			}
			const Zr = new Map((await he(Dr, O)).map((e) => [e.analysisDate, e]));
			if (An.anglez.length > 0 && null === Kr) Hr = v;
			else if (An.anglez.length > 0 && null !== Kr) {
				bn.includes("ggir") && i?.({
					phase: "ggir",
					percent: -1,
					message: "HDCZA sleep window..."
				});
				const e = (An.tsMs[0] ?? 0) / 1e3;
				Hr = await C(Dr, An.anglez, e, Wr, Zr, h?.hasptVariant, {
					activity5s: An.enmo,
					invalid5s: Kr,
					ggirConfig: L,
					zeroCrossings5s: An.zeroCrossings5s,
					...An.anglex.length > 0 ? { anglex5s: An.anglex } : {},
					...An.angley.length > 0 ? { angley5s: An.angley } : {}
				}, Ee(h?.sleepPeriodDetectionConfig, {
					path: "ggir",
					selected: Vr
				}), vt(h, m.recording), O, l, Nt, Gt, m.auditBinding, (e) => {
					Xr = e;
				});
			} else null !== tr && tr.length > 0 && (Hr = v);
			const Yr = await xt(Nt, An.tsMs, An.enmo, An.anglez, {
				anglex: An.anglex,
				angley: An.angley,
				sib: Xr,
				...Kr ? { invalid: Kr } : {},
				mimsUnit: An.mimsUnit,
				mimsUnitX: An.mimsUnitX,
				mimsUnitY: An.mimsUnitY,
				mimsUnitZ: An.mimsUnitZ
			}), qr = er ? await lt(Nt, Nn ?? An.tsMs[0] ?? 0, er.classes, er.epochSeconds) : /* @__PURE__ */ new Map(), Jr = /* @__PURE__ */ new Map(), Qr = /* @__PURE__ */ new Map();
			for (const e of Cr) {
				const t = Sr[e];
				t && Br[e] && (Sn?.actiwareSleepWake && Jr.set(e, await Le(Nt, Sn.actiwareSleepWake, t.timestamps, D)), Qr.set(e, await me(Kn(e, t.timestamps, Yr.get(e), Tr.get(e)), Nt)));
			}
			const ei = await Zn(Dr, Cr, Sr, Yr, Nt);
			i?.({
				phase: "storing",
				percent: R("storing", 0),
				message: "Saving to local database..."
			});
			const ti = wt({
				scope: m,
				fileId: Dr,
				sourceContentHash: En,
				label: "csv",
				signalDates: ei,
				onChunk: (e, t, n) => i?.({
					phase: "storing",
					percent: R("storing", dt(e, t, n, Cr.length)),
					message: `Saving days ${String(e)}–${String(t)} of ${String(Cr.length)}`
				})
			}), ni = Sn ? new Map(Array.from(Sn.timestampsMs, (e, t) => [e / 1e3, t])) : null;
			for (const s of Cr) {
				const t = Sr[s], n = Br[s];
				if (!t || !n) continue;
				const r = Yr.get(s), i = Tr.get(s), o = Tn ? Bt(Tn, s) : null, u = Jr.get(s) ?? null, f = new Uint8Array(t.timestamps.length);
				if (Sn && ni) for (let e = 0; e < t.timestamps.length; e += 1) {
					const n = ni.get(t.timestamps[e] ?? NaN);
					null != n && (f[e] = Sn.actiwareInvalidActivityMinutes[n] ?? 0);
				}
				P(l, `saveActivityDay ${s}`);
				const h = n.sadeh_1994_actilife.buffer, p = n.sadeh_1994_original.buffer, g = n.cole_kripke_1992_actilife.buffer, m = n.cole_kripke_1992_original.buffer, d = n.tensor_majority_vote.buffer, w = null != n.lstm_sleep_wake ? n.lstm_sleep_wake.buffer : null, y = null != n.detachNonwear ? n.detachNonwear.buffer : null, b = n.nonwear.buffer, _ = null != n.nonwearChoi2011 ? n.nonwearChoi2011.buffer : null, v = null != n.sadeh_1994_ggir ? n.sadeh_1994_ggir.buffer : null, A = null != n.cole_kripke_1992_ggir ? n.cole_kripke_1992_ggir.buffer : null, S = Vt(n.hasibVariants), C = Vt(n.unifiedSleepWake), E = qr.get(s)?.buffer, I = null != y ? null : or.has(s) ? "computation_failed" : Ae(dn, t.temperature, t.accelerationG), R = null != I && "source_not_eligible" !== I ? { nonwearSkipReasons: { [e.DETACH_NONWEAR]: Ce[I] } } : {};
				"no_finite_temperature" !== I && "no_acceleration_g" !== I || (lr = I), null != y && (cr = !0);
				const T = re(n.cubeHistoryOutputs);
				await ti.add({
					fileId: Dr,
					date: s,
					timestamps: new Float64Array(t.timestamps).buffer,
					axisY: new Float64Array(t.axisY).buffer,
					vectorMagnitude: new Float64Array(t.vectorMagnitude).buffer,
					...t.axisX && t.axisX.length > 0 ? { axisX: new Float64Array(t.axisX).buffer } : {},
					...t.axisZ && t.axisZ.length > 0 ? { axisZ: new Float64Array(t.axisZ).buffer } : {},
					...t.mimsUnit && t.mimsUnit.length > 0 ? { mimsUnit: new Float64Array(t.mimsUnit).buffer } : {},
					...t.mimsUnitX && t.mimsUnitX.length > 0 ? { mimsUnitX: new Float64Array(t.mimsUnitX).buffer } : {},
					...t.mimsUnitY && t.mimsUnitY.length > 0 ? { mimsUnitY: new Float64Array(t.mimsUnitY).buffer } : {},
					...t.mimsUnitZ && t.mimsUnitZ.length > 0 ? { mimsUnitZ: new Float64Array(t.mimsUnitZ).buffer } : {},
					...i && i.timestamps.length > 0 && i.scores.length === i.timestamps.length ? {
						lstmTimestamps30s: new Float64Array(i.timestamps).buffer,
						lstmSleepWake30s: new Uint8Array(i.scores).buffer
					} : {},
					...r && r.timestamps.length > 0 ? {
						ggirTimestamps: new Float64Array(r.timestamps).buffer,
						ggirEnmo: new Float64Array(r.enmo).buffer,
						ggirAnglez: new Float64Array(r.anglez).buffer,
						...te(r.timestamps, An.tsMs, An.zeroCrossings5s),
						...r.anglex ? { ggirAnglex: new Float64Array(r.anglex).buffer } : {},
						...r.angley ? { ggirAngley: new Float64Array(r.angley).buffer } : {},
						...r.sib ? { ggirSib: new Uint8Array(r.sib).buffer } : {},
						...r.invalid ? { ggirInvalid: new Uint8Array(r.invalid).buffer } : {},
						...r.mimsUnit ? { mimsUnit: new Float64Array(r.mimsUnit).buffer } : {},
						...r.mimsUnitX ? { mimsUnitX: new Float64Array(r.mimsUnitX).buffer } : {},
						...r.mimsUnitY ? { mimsUnitY: new Float64Array(r.mimsUnitY).buffer } : {},
						...r.mimsUnitZ ? { mimsUnitZ: new Float64Array(r.mimsUnitZ).buffer } : {}
					} : {},
					algorithmResults: {
						...h.byteLength > 0 ? { sadeh_1994_actilife: h } : {},
						...p.byteLength > 0 ? { sadeh_1994_original: p } : {},
						...g.byteLength > 0 ? { cole_kripke_1992_actilife: g } : {},
						...m.byteLength > 0 ? { cole_kripke_1992_original: m } : {},
						...d.byteLength > 0 ? { tensor_majority_vote: d } : {},
						...null != w ? { lstm_sleep_wake: w } : {},
						...null != E ? { [$e]: E } : {},
						...null != v ? { sadeh_1994_ggir: v } : {},
						...null != A ? { cole_kripke_1992_ggir: A } : {},
						...S.algorithmResults,
						...C.algorithmResults,
						...T.algorithmResults,
						...u ? { [c.ACTIWARE_SLEEP_WAKE]: u.sleep.buffer } : {}
					},
					algorithmResultHashes: T.algorithmResultHashes,
					...u && u.invalid.some((e) => 1 === e) ? { actiwareSleepWakeInvalid: u.invalid.buffer } : {},
					...f.some((e) => 1 === e) ? { actiwareActivityInvalid: f.buffer } : {},
					...Sn?.hasOffWristChannel ? { actiwareOffWristChannel: !0 } : {},
					...ve(t.temperature) ? { temperature: new Float64Array(t.temperature ?? []).buffer } : {},
					...Sn && ni ? Ne(Sn.light, ni, t.timestamps) : {},
					...Tn ? { eventMarkers: Xe(t.timestamps, Tn, D).buffer } : {},
					...o && o.length > 0 ? { eventMarkerTimestamps: o.buffer } : {},
					nonwearResults: b.byteLength > 0 ? b : null,
					nonwearResultsChoi2011: _,
					nonwearChoiAxis: a,
					detachNonwear: y ?? null,
					...R,
					...jr[s]
				}, [
					{
						algoKey: k.SADEH_1994_ACTILIFE,
						results: h
					},
					{
						algoKey: k.SADEH_1994_ORIGINAL,
						results: p
					},
					{
						algoKey: k.COLE_KRIPKE_1992_ACTILIFE,
						results: g
					},
					{
						algoKey: k.COLE_KRIPKE_1992_ORIGINAL,
						results: m
					},
					{
						algoKey: k.TENSOR_MAJORITY_VOTE,
						results: d
					},
					...null != w ? [{
						algoKey: k.LSTM_SLEEP_WAKE,
						results: w
					}] : [],
					...null != E ? [{
						algoKey: $e,
						results: E
					}] : [],
					{
						algoKey: k.CHOI_2011_NONWEAR,
						results: b
					},
					...null != y ? [{
						algoKey: k.DETACH_NONWEAR,
						results: y
					}] : [],
					...null != v ? [{
						algoKey: k.SADEH_1994_GGIR,
						results: v
					}] : [],
					...null != A ? [{
						algoKey: k.COLE_KRIPKE_1992_GGIR,
						results: A
					}] : [],
					...S.historyOutputs,
					...C.historyOutputs,
					...n.cubeHistoryOutputs ?? []
				], Qr.get(s));
			}
			await ti.flush();
			const { saved: ri, activityFailed: ii, historyFailed: si } = ti.state;
			if (Sn && Sn.offWristPeriods.length > 0) {
				const e = Yt(Dr, Sn.offWristPeriods.map((e) => ({
					startMs: 1e3 * e.startTimestamp,
					endMs: 1e3 * e.endTimestamp
				})));
				await le(Dr, e, O, l).catch((e) => {
					ct(e, "saveSensorNonwear (actiware off-wrist)");
				});
			}
			if (ii || ri !== Cr.length || 0 === ri) throw await Ut(m, "csv ingest: no ActivityDays could be saved"), /* @__PURE__ */ new Error("Could not save any activity data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
			const ai = await Xt(Dr, Er, wn, i, O, l, Nt, Gt, h?.scoredVariantNarrowing);
			P(l, "before completing CSV ingest"), await Pt(() => ut(m), Dr, ai, m.auditBinding);
			const oi = [
				...Sn?.warnings ?? [],
				vn > 0 && `${vn} rows in the source CSV could not be parsed and were skipped. The file may contain corrupt or malformed data.`,
				ii && "One or more days of activity data could not be saved (storage may be full). Those days will show no data.",
				si && "Algorithm version history could not be fully saved (storage may be full). Scoring data is intact.",
				Hr && `Sleep window detection (HDCZA) could not place auto-markers for ${t.name}: ${Hr.replace(/\.$/, "")}. Scoring data is intact.`,
				$r && "GGIR Part 4/5 daily summaries could not be saved. Scoring data is intact.",
				ir && "GGIR metrics (Parts 1–5) could not be computed for this file. Sleep/wake scoring is intact, but GGIR summaries and activity metrics may be missing.",
				sr && "GGIR Sadeh/Cole sleep scoring could not be computed from zero-crossing counts. Other count-based sleep/wake scoring is intact.",
				Vn && Je(Wn),
				!Vn && qn,
				Yn && "LSTM ONNX sleep/wake scoring was skipped because time-gap imputation changed the raw sample grid.",
				Jn && "MIMS_UNIT could not be computed by the current actours/WASM build. Other derived activity metrics are intact.",
				Qn && "MIMS_UNIT output was not stored because it did not align with the 5 s GGIR epoch grid.",
				gr && "Zero-crossing counts could not be computed for optional GGIR HASIB variants. Base scoring is intact.",
				ar && "DETACH temperature-based nonwear detection failed for one or more days. Choi nonwear is intact.",
				null != lr && Ce[lr] + " Choi nonwear is intact.",
				ur && "One or more optional GGIR HASIB variant outputs could not be computed. Base scoring is intact.",
				fr && "Some algorithm-output harness variants could not be computed. Standard scoring is intact.",
				hr > 0 && `${hr} algorithm-output harness variant(s) could not be computed. Standard scoring is intact.`,
				ai.dayFailures > 0 && `Scored variants could not be precomputed for ${String(ai.dayFailures)} day(s). Reimport the file to retry.`
			].filter(Boolean).join(" ");
			return i?.({
				phase: "complete",
				percent: 100,
				message: "Processing complete",
				...oi ? { warning: oi } : {}
			}), {
				fileId: m.finalizedFileId ?? Dr,
				availableDates: Er,
				activityDaysSaved: ri,
				sourceType: hn,
				nonwearSources: ["Choi", ...cr && !ar ? ["DETACH"] : []]
			};
		}(t, n, r, i, a, l, L, we, en, {
			wasmApi: ft,
			cancelWasmOperation: Ot,
			...rn ? {
				gt3xApi: rn.api,
				cancelGt3xOperation: rn.terminate
			} : {}
		});
		Mt.alreadyImported && Dt(Mt.fileId, {
			db: ht,
			resumeIncomplete: !0,
			retryKnownFailures: !1,
			signal: L
		}).catch(() => {});
		const zt = Mt.availableDates[0];
		if (void 0 !== zt) {
			const e = { filename: "redacted" };
			Mt.alreadyImported || (ye.recordFileEvent({
				fileId: Mt.fileId,
				analysisDate: zt,
				action: "file_uploaded",
				payload: e
			}, Wt), ye.recordFileEvent({
				fileId: Mt.fileId,
				analysisDate: zt,
				action: "file_processed",
				payload: e
			}, Wt));
		}
		return Mt;
	} catch (sn) {
		throw await Ut(en, "local file ingest failed"), Ot(sn, en);
	} finally {
		nn?.(), rn?.terminate(), tn?.terminate();
	}
}
export { Yn as processLocalFile };
