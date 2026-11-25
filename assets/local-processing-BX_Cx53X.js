import { _ as e, b as t, g as n, v as r, y as i } from "./ggir-results-types-kmrkPkJO.js";
import { A as s, Ar as a, C as o, E as l, G as c, I as u, J as f, Jn as h, K as p, Kr as g, L as m, M as d, Mt as w, O as y, P as b, S as v, T as _, Tt as A, U as S, Ur as C, X as E, Xn as I, Y as R, Yn as B, b as T, br as k, hr as M, i as O, j as U, kr as F, n as x, o as z, p as N, q as D, s as G, st as P, vr as L, x as $ } from "./background-jobs-B9ASwEcR.js";
import { Br as V, Bt as W, Gr as j, Gt as X, Hr as Y, On as Z, Qn as K, Vr as q, Y as J, ar as Q, ct as ee, et as te, fr as ne, gr as re, i as ie, kn as se, l as ae, lt as oe, mr as le, n as ce, nn as ue, or as fe, rn as he, sr as pe, u as ge, x as me, z as de } from "./db-DpHV0KLd.js";
import { n as we, s as ye, t as be } from "./local-ggir-hasib-variants-BqKpbdSW.js";
import { D as ve, T as _e, _ as Ae, c as Se, h as Ce, m as Ee, r as Ie, s as Re, u as Be } from "./local-nonwear-unified-B1yzujBf.js";
import { $ as Te, K as ke, Q as Me, et as Oe } from "./local-export-worker-BZihtWZX.js";
import { C as Ue, _ as Fe, b as xe, f as ze, g as Ne, h as De, m as Ge, p as Pe, v as Le, y as $e } from "./ingest-s1OcQV52.js";
import { t as He } from "./physical-activity-classifier-output-Cl9lNFip.js";
import { computeTensorConsensusForDay as je, cubeRunsOnGrid as Xe, finalizeAndAuditScoredVariantWarm as Ye, rewarmFileScoredVariants as Ze, runAlgorithmCubeForDay as Ke, scoreBuiltinGgirSadehColeForDay as qe, scoreCountBasedHasibVariantsForDay as Je, sleepWakeToPersistedOutputs as Qe, t as et, warmFileScoredVariants as tt, withRecordingWakeThreshold as nt } from "./cube-variants-CReU0539.js";
import { $ as rt, A as it, B as st, C as at, D as ot, G as ct, H as ut, J as ft, K as ht, L as pt, M as gt, N as mt, O as dt, P as wt, Q as yt, R as bt, S as vt, T as _t, U as At, V as St, W as Ct, X as Et, Y as It, Z as Rt, _ as Bt, a as Tt, at as kt, b as Mt, c as Ot, d as Ut, et as Ft, f as xt, g as zt, h as Nt, i as Dt, isGeneactivEpochCsv as Gt, j as Pt, k as Lt, l as $t, m as Ht, n as Vt, nt as Wt, o as jt, ot as Xt, p as Yt, processGgirMetaRDataFile as Zt, processMappedMimsCsvFile as Kt, q as qt, r as Jt, refuseUnimportableGgirRecording as Qt, rt as en, s as tn, t as nn, tt as rn, u as sn, v as an, w as on, x as ln, y as cn, z as un } from "./ggir-import-3j2ZSxMN.js";
function fn(e) {
	return `LSTM ONNX sleep/wake scoring could not be computed for this raw file${e ? ` because ${e}` : ""}. Count-based scoring is intact.`;
}
function hn(e) {
	if (!e || 0 === e.length) return "";
	let t = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY, r = 0;
	for (const i of e) t = Math.min(t, i), n = Math.max(n, i), r += i;
	return ` (sleep probability min=${t.toFixed(3)}, mean=${(r / e.length).toFixed(3)}, max=${n.toFixed(3)})`;
}
function pn(e, t) {
	if (!e || 0 === e.length) return null;
	let n = 0;
	for (const r of e) n += r ? 1 : 0;
	return 0 === n ? `LSTM ONNX sleep/wake scoring produced an all-wake result${hn(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : n === e.length ? `LSTM ONNX sleep/wake scoring produced an all-sleep result${hn(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : null;
}
async function gn(e, t, n) {
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
function mn(e) {
	const t = {
		skipRows: e.skipRows,
		columnMapping: e.columnMapping ?? {},
		...void 0 === e.preferredActivityColumn ? {} : { preferredActivityColumn: e.preferredActivityColumn }
	};
	return {
		...t,
		settingsHash: Y(t),
		at: e.at ?? (/* @__PURE__ */ new Date()).toISOString()
	};
}
a.map((e) => ({
	value: e,
	label: F[e].label
}));
const dn = /* @__PURE__ */ new Set(["x,y,z", "x,y,z,label"]);
function wn(e) {
	const t = e.trim();
	if (0 === t.length) return null;
	const n = Number.parseFloat(t);
	return Number.isFinite(n) ? n : null;
}
const yn = 4194304;
var bn, vn, _n, An, Sn, Cn, En, In, Rn, Bn, Tn, kn, Mn = n((e) => {
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
}), On = n((e) => {
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
}), Un = n((e) => {
	const t = Mn(), n = On(), r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
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
			return void 0 !== e.length ? "number" != typeof e.length || Y(e.length) ? s(0) : u(e) : "Buffer" === e.type && Array.isArray(e.data) ? u(e.data) : void 0;
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
			case "utf-8": return V(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return 2 * n;
			case "hex": return n >>> 1;
			case "base64": return W(e).length;
			default:
				if (i) return r ? -1 : V(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	function g(e, t, n) {
		let r = !1;
		if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
		if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
		if ((n >>>= 0) <= (t >>>= 0)) return "";
		for (e || (e = "utf8");;) switch (e) {
			case "hex": return B(this, t, n);
			case "utf8":
			case "utf-8": return C(this, t, n);
			case "ascii": return I(this, t, n);
			case "latin1":
			case "binary": return R(this, t, n);
			case "base64": return S(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return T(this, t, n);
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
		if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), Y(n = +n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Y(r)) return a;
			e[n + a] = r;
		}
		return a;
	}
	function b(e, t, n, r) {
		return j(V(t, e.length - n), e, n, r);
	}
	function v(e, t, n, r) {
		return j(function(e) {
			const t = [];
			for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
			return t;
		}(t), e, n, r);
	}
	function _(e, t, n, r) {
		return j(W(t), e, n, r);
	}
	function A(e, t, n, r) {
		return j(function(e, t) {
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
			case "binary": return v(this, e, t, n);
			case "base64": return _(this, e, t, n);
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
	function B(e, t, n) {
		const r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let s = t; s < n; ++s) i += Z[e[s]];
		return i;
	}
	function T(e, t, n) {
		const r = e.slice(t, n);
		let i = "";
		for (let s = 0; s < r.length - 1; s += 2) i += String.fromCharCode(r[s] + 256 * r[s + 1]);
		return i;
	}
	function k(e, t, n) {
		if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
		if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
	}
	function M(e, t, n, r, i, s) {
		if (!a.isBuffer(e)) throw new TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < s) throw new RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw new RangeError("Index out of range");
	}
	function O(e, t, n, r, i) {
		P(t, r, i, e, n, 7);
		let s = Number(t & BigInt(4294967295));
		e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s;
		let a = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, n;
	}
	function U(e, t, n, r, i) {
		P(t, r, i, e, n, 7);
		let s = Number(t & BigInt(4294967295));
		e[n + 7] = s, s >>= 8, e[n + 6] = s, s >>= 8, e[n + 5] = s, s >>= 8, e[n + 4] = s;
		let a = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = a, a >>= 8, e[n + 2] = a, a >>= 8, e[n + 1] = a, a >>= 8, e[n] = a, n + 8;
	}
	function F(e, t, n, r, i, s) {
		if (n + r > e.length) throw new RangeError("Index out of range");
		if (n < 0) throw new RangeError("Index out of range");
	}
	function x(e, t, r, i, s) {
		return t = +t, r >>>= 0, s || F(e, 0, r, 4), n.write(e, t, r, i, 23, 4), r + 4;
	}
	function z(e, t, r, i, s) {
		return t = +t, r >>>= 0, s || F(e, 0, r, 8), n.write(e, t, r, i, 52, 8), r + 8;
	}
	a.prototype.slice = function(e, t) {
		const n = this.length;
		(e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
		const r = this.subarray(e, t);
		return Object.setPrototypeOf(r, a.prototype), r;
	}, a.prototype.readUintLE = a.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || k(e, t, this.length);
		let r = this[e], i = 1, s = 0;
		for (; ++s < t && (i *= 256);) r += this[e + s] * i;
		return r;
	}, a.prototype.readUintBE = a.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || k(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, a.prototype.readUint8 = a.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || k(e, 1, this.length), this[e];
	}, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || k(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || k(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || k(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
	}, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || k(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, a.prototype.readBigUInt64LE = K(function(e) {
		L(e >>>= 0, "offset");
		const t = this[e], n = this[e + 7];
		void 0 !== t && void 0 !== n || $(e, this.length - 8);
		const r = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24, i = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), a.prototype.readBigUInt64BE = K(function(e) {
		L(e >>>= 0, "offset");
		const t = this[e], n = this[e + 7];
		void 0 !== t && void 0 !== n || $(e, this.length - 8);
		const r = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e], i = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), a.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || k(e, t, this.length);
		let r = this[e], i = 1, s = 0;
		for (; ++s < t && (i *= 256);) r += this[e + s] * i;
		return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r;
	}, a.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || k(e, t, this.length);
		let r = t, i = 1, s = this[e + --r];
		for (; r > 0 && (i *= 256);) s += this[e + --r] * i;
		return i *= 128, s >= i && (s -= Math.pow(2, 8 * t)), s;
	}, a.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || k(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
	}, a.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || k(e, 2, this.length);
		const n = this[e] | this[e + 1] << 8;
		return 32768 & n ? 4294901760 | n : n;
	}, a.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || k(e, 2, this.length);
		const n = this[e + 1] | this[e] << 8;
		return 32768 & n ? 4294901760 | n : n;
	}, a.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || k(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, a.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || k(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, a.prototype.readBigInt64LE = K(function(e) {
		L(e >>>= 0, "offset");
		const t = this[e], n = this[e + 7];
		void 0 !== t && void 0 !== n || $(e, this.length - 8);
		const r = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24);
	}), a.prototype.readBigInt64BE = K(function(e) {
		L(e >>>= 0, "offset");
		const t = this[e], n = this[e + 7];
		void 0 !== t && void 0 !== n || $(e, this.length - 8);
		const r = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n);
	}), a.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || k(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, a.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || k(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, a.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || k(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, a.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || k(e, 8, this.length), n.read(this, e, !1, 52, 8);
	}, a.prototype.writeUintLE = a.prototype.writeUIntLE = function(e, t, n, r) {
		e = +e, t >>>= 0, n >>>= 0, r || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
		let i = 1, s = 0;
		for (this[t] = 255 & e; ++s < n && (i *= 256);) this[t + s] = e / i & 255;
		return t + n;
	}, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(e, t, n, r) {
		e = +e, t >>>= 0, n >>>= 0, r || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
		let i = n - 1, s = 1;
		for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) this[t + i] = e / s & 255;
		return t + n;
	}, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
	}, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
	}, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
	}, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4;
	}, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
	}, a.prototype.writeBigUInt64LE = K(function(e, t = 0) {
		return O(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), a.prototype.writeBigUInt64BE = K(function(e, t = 0) {
		return U(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), a.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			const r = Math.pow(2, 8 * n - 1);
			M(this, e, t, n, r - 1, -r);
		}
		let i = 0, s = 1, a = 0;
		for (this[t] = 255 & e; ++i < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (e / s | 0) - a & 255;
		return t + n;
	}, a.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			const r = Math.pow(2, 8 * n - 1);
			M(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, s = 1, a = 0;
		for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (e / s | 0) - a & 255;
		return t + n;
	}, a.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
	}, a.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
	}, a.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
	}, a.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, a.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
	}, a.prototype.writeBigInt64LE = K(function(e, t = 0) {
		return O(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), a.prototype.writeBigInt64BE = K(function(e, t = 0) {
		return U(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), a.prototype.writeFloatLE = function(e, t, n) {
		return x(this, e, t, !0, n);
	}, a.prototype.writeFloatBE = function(e, t, n) {
		return x(this, e, t, !1, n);
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
	function D(e, t, n) {
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
	function G(e) {
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
			L(t, "offset"), void 0 !== e[t] && void 0 !== e[t + n] || $(t, e.length - (n + 1));
		})(r, i, s);
	}
	function L(e, t) {
		if ("number" != typeof e) throw new N.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function $(e, t, n) {
		if (Math.floor(e) !== e) throw L(e, n), new N.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
		if (t < 0) throw new N.ERR_BUFFER_OUT_OF_BOUNDS();
		throw new N.ERR_OUT_OF_RANGE(n || "offset", `>= ${n ? 1 : 0} and <= ${t}`, e);
	}
	D("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), D("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), D("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = G(String(n)) : "bigint" == typeof n && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = G(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	const H = /[^+/0-9A-Za-z-_]/g;
	function V(e, t) {
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
	function W(e) {
		return t.toByteArray(function(e) {
			if ((e = (e = e.split("=")[0]).trim().replace(H, "")).length < 2) return "";
			for (; e.length % 4 != 0;) e += "=";
			return e;
		}(e));
	}
	function j(e, t, n, r) {
		let i = 0;
		for (; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name;
	}
	function Y(e) {
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
	function K(e) {
		return "undefined" == typeof BigInt ? q : e;
	}
	function q() {
		throw new Error("BigInt not supported");
	}
}), Fn = n((e, t) => {
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
}), xn = n((e, t) => {
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
}), zn = n((e, t) => {
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
}), Nn = r({
	bin: () => En,
	contributors: () => _n,
	default: () => kn,
	dependencies: () => Rn,
	description: () => An,
	devDependencies: () => Bn,
	directories: () => In,
	license: () => "MIT",
	main: () => Sn,
	name: () => bn,
	repository: () => Cn,
	scripts: () => Tn,
	version: () => vn
}), Dn = e(() => {
	kn = {
		name: bn = "seek-bzip",
		version: vn = "2.0.0",
		contributors: _n = [
			"C. Scott Ananian (http://cscott.net)",
			"Eli Skeggs",
			"Kevin Kwok",
			"Rob Landley (http://landley.net)"
		],
		description: An = "a pure-JavaScript Node.JS module for random-access decoding bzip2 data",
		main: Sn = "./lib/index.js",
		repository: Cn = {
			type: "git",
			url: "https://github.com/cscott/seek-bzip.git"
		},
		license: "MIT",
		bin: En = {
			"seek-bunzip": "./bin/seek-bunzip",
			"seek-table": "./bin/seek-bzip-table"
		},
		directories: In = { test: "test" },
		dependencies: Rn = { commander: "^6.0.0" },
		devDependencies: Bn = {
			fibers: "^5.0.0",
			mocha: "^8.1.0"
		},
		scripts: Tn = { test: "mocha" }
	};
}), Gn = n((e, t) => {
	var n = Fn(), r = xn(), s = zn(), a = (Dn(), i(Nn).default), o = function(e, t) {
		for (var n = e[t], r = t; r > 0; r--) e[r] = e[r - 1];
		return e[0] = n, n;
	}, l = {
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
	c[l.LAST_BLOCK] = "Bad file checksum", c[l.NOT_BZIP_DATA] = "Not bzip data", c[l.UNEXPECTED_INPUT_EOF] = "Unexpected input EOF", c[l.UNEXPECTED_OUTPUT_EOF] = "Unexpected output EOF", c[l.DATA_ERROR] = "Data error", c[l.OUT_OF_MEMORY] = "Out of memory", c[l.OBSOLETE_INPUT] = "Obsolete (pre 0.9.5) bzip format not supported.";
	var u = function(e, t) {
		var n = c[e] || "unknown error";
		t && (n += ": " + t);
		var r = new TypeError(n);
		throw r.errorCode = e, r;
	}, f = function(e, t) {
		this.writePos = this.writeCurrent = this.writeCount = 0, this._start_bunzip(e, t);
	};
	f.prototype._init_block = function() {
		return this._get_next_block() ? (this.blockCRC = new s(), !0) : (this.writeCount = -1, !1);
	}, f.prototype._start_bunzip = function(e, t) {
		var r = new Buffer(4);
		4 === e.read(r, 0, 4) && "BZh" === String.fromCharCode(r[0], r[1], r[2]) || u(l.NOT_BZIP_DATA, "bad magic");
		var i = r[3] - 48;
		(i < 1 || i > 9) && u(l.NOT_BZIP_DATA, "level out of range"), this.reader = new n(e), this.dbufSize = 1e5 * i, this.nextoutput = 0, this.outputStream = t, this.streamCRC = 0;
	}, f.prototype._get_next_block = function() {
		var e, t, n, r = this.reader, i = r.pi();
		if ("177245385090" === i) return !1;
		"314159265359" !== i && u(l.NOT_BZIP_DATA), this.targetBlockCRC = r.read(32) >>> 0, this.streamCRC = (this.targetBlockCRC ^ (this.streamCRC << 1 | this.streamCRC >>> 31)) >>> 0, r.read(1) && u(l.OBSOLETE_INPUT);
		var s = r.read(24);
		s > this.dbufSize && u(l.DATA_ERROR, "initial position out of bounds");
		var a = r.read(16), c = new Buffer(256), f = 0;
		for (e = 0; e < 16; e++) if (a & 1 << 15 - e) {
			var h = 16 * e;
			for (n = r.read(16), t = 0; t < 16; t++) n & 1 << 15 - t && (c[f++] = h + t);
		}
		var p = r.read(3);
		(p < 2 || p > 6) && u(l.DATA_ERROR);
		var g = r.read(15);
		0 === g && u(l.DATA_ERROR);
		var m = new Buffer(256);
		for (e = 0; e < p; e++) m[e] = e;
		var d = new Buffer(g);
		for (e = 0; e < g; e++) {
			for (t = 0; r.read(1); t++) t >= p && u(l.DATA_ERROR);
			d[e] = o(m, t);
		}
		var w, y = f + 2, b = [];
		for (t = 0; t < p; t++) {
			var v = new Buffer(y), _ = /* @__PURE__ */ new Uint16Array(21);
			for (a = r.read(5), e = 0; e < y; e++) {
				for (; (a < 1 || a > 20) && u(l.DATA_ERROR), r.read(1);) r.read(1) ? a-- : a++;
				v[e] = a;
			}
			var A, S = A = v[0];
			for (e = 1; e < y; e++) v[e] > A ? A = v[e] : v[e] < S && (S = v[e]);
			w = {}, b.push(w), w.permute = /* @__PURE__ */ new Uint16Array(258), w.limit = /* @__PURE__ */ new Uint32Array(22), w.base = /* @__PURE__ */ new Uint32Array(21), w.minLen = S, w.maxLen = A;
			var C = 0;
			for (e = S; e <= A; e++) for (_[e] = w.limit[e] = 0, a = 0; a < y; a++) v[a] === e && (w.permute[C++] = a);
			for (e = 0; e < y; e++) _[v[e]]++;
			for (C = a = 0, e = S; e < A; e++) C += _[e], w.limit[e] = C - 1, C <<= 1, a += _[e], w.base[e + 1] = C - a;
			w.limit[A + 1] = Number.MAX_VALUE, w.limit[A] = C + _[A] - 1, w.base[S] = 0;
		}
		var E = /* @__PURE__ */ new Uint32Array(256);
		for (e = 0; e < 256; e++) m[e] = e;
		var I, R = 0, B = 0, T = 0, k = this.dbuf = new Uint32Array(this.dbufSize);
		for (y = 0;;) {
			for (y-- || (y = 49, T >= g && u(l.DATA_ERROR), w = b[d[T++]]), e = w.minLen, t = r.read(e); e > w.maxLen && u(l.DATA_ERROR), !(t <= w.limit[e]); e++) t = t << 1 | r.read(1);
			((t -= w.base[e]) < 0 || t >= 258) && u(l.DATA_ERROR);
			var M = w.permute[t];
			if (0 !== M && 1 !== M) {
				if (R) for (R = 0, B + a > this.dbufSize && u(l.DATA_ERROR), E[I = c[m[0]]] += a; a--;) k[B++] = I;
				if (M > f) break;
				B >= this.dbufSize && u(l.DATA_ERROR), E[I = c[I = o(m, e = M - 1)]]++, k[B++] = I;
			} else R || (R = 1, a = 0), a += 0 === M ? R : 2 * R, R <<= 1;
		}
		for ((s < 0 || s >= B) && u(l.DATA_ERROR), t = 0, e = 0; e < 256; e++) n = t + E[e], E[e] = t, t = n;
		for (e = 0; e < B; e++) k[E[I = 255 & k[e]]] |= e << 8, E[I]++;
		var O = 0, U = 0, F = 0;
		return B && (U = 255 & (O = k[s]), O >>= 8, F = -1), this.writePos = O, this.writeCurrent = U, this.writeCount = B, this.writeRun = F, !0;
	}, f.prototype._read_bunzip = function(e, t) {
		var n, r, i;
		if (this.writeCount < 0) return 0;
		var s = this.dbuf, a = this.writePos, o = this.writeCurrent, c = this.writeCount;
		this.outputsize;
		for (var f = this.writeRun; c;) {
			for (c--, r = o, o = 255 & (a = s[a]), a >>= 8, 3 === f++ ? (n = o, i = r, o = -1) : (n = 1, i = o), this.blockCRC.updateCRCRun(i, n); n--;) this.outputStream.writeByte(i), this.nextoutput++;
			o != r && (f = 0);
		}
		return this.writeCount = c, this.blockCRC.getCRC() !== this.targetBlockCRC && u(l.DATA_ERROR, "Bad block CRC (got " + this.blockCRC.getCRC().toString(16) + " expected " + this.targetBlockCRC.toString(16) + ")"), this.nextoutput;
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
	f.Err = l, f.decode = function(e, t, n) {
		for (var r = h(e), i = p(t), s = new f(r, i); !("eof" in r) || !r.eof();) if (s._init_block()) s._read_bunzip();
		else {
			var a = s.reader.read(32) >>> 0;
			if (a !== s.streamCRC && u(l.DATA_ERROR, "Bad stream CRC (got " + s.streamCRC.toString(16) + " expected " + a.toString(16) + ")"), !n || !("eof" in r) || r.eof()) break;
			s._start_bunzip(r, i);
		}
		if ("getBuffer" in i) return i.getBuffer();
	}, f.decodeBlock = function(e, t, n) {
		var r = h(e), i = p(n), a = new f(r, i);
		if (a.reader.seek(t), a._get_next_block() && (a.blockCRC = new s(), a.writeCopies = 0, a._read_bunzip()), "getBuffer" in i) return i.getBuffer();
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
	}, f.Stream = r, f.version = a.version, f.license = a.license, t.exports = f;
}), Pn = Un(), Ln = t(Gn(), 1);
const $n = 512, Hn = new TextDecoder("utf-8");
function Vn(e) {
	for (const t of e) if (0 !== t) return !1;
	return !0;
}
function Wn(e, t, n) {
	let r = t;
	for (; r < n && 0 !== e[r];) r += 1;
	return Hn.decode(e.subarray(t, r)).trim();
}
function jn(e) {
	const t = Wn(e, 124, 136).replace(/\0/g, "").trim();
	return t && Number.parseInt(t, 8) || 0;
}
function Xn(e) {
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
function Yn(e, t, n, r, i, s, a, o, l) {
	null !== e && (i.push(e), s.push(t), a.push(n), o.push(r), l.push(Math.hypot(t, n, r)));
}
async function Zn(e, t) {
	if (e.size > 536870912) throw new Error(`PAX80 archive too large (${e.size} bytes); cap is 536870912`);
	t?.({
		percent: 0,
		message: `Decompressing ${e.name}...`
	});
	const n = new Uint8Array(await e.arrayBuffer()), r = globalThis;
	r.Buffer ??= Pn.Buffer;
	const i = function(e, t) {
		let n = new Uint8Array(Math.min(1048576, t)), r = 0;
		return Ln.default.decode(e, {
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
			for (; n + $n <= e.length;) {
				const r = e.subarray(n, n + $n);
				if (Vn(r)) break;
				const i = Wn(r, 0, 100), s = Wn(r, 345, 500), a = s ? `${s}/${i}` : i, o = String.fromCharCode(r[156] ?? 0), l = jn(r), c = n + $n;
				("\0" === o || "0" === o) && l > 0 && t.push({
					name: a,
					offset: c,
					size: l
				}), n = c + Math.ceil(l / $n) * $n;
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
			const d = e.subarray(g.offset, g.offset + g.size), w = Hn.decode(d);
			let y = 0, b = !1;
			for (; y <= w.length;) {
				const e = w.indexOf("\n", y), t = -1 === e ? w.length : e, n = w.slice(y, t), m = n.endsWith("\r") ? n.slice(0, -1) : n;
				if (y = -1 === e ? w.length + 1 : e + 1, !m) continue;
				if (!b) {
					if (b = !0, "HEADER_TIMESTAMP,X,Y,Z" !== m.trim()) throw new Error(`Unexpected PAX80 sensor header in ${g.name}: ${m.trim() || "<empty>"}`);
					continue;
				}
				const d = Xn(m);
				d && (0 === c && (l = d.timestampMs), u += Math.abs(d.x), f += Math.abs(d.y), h += Math.abs(d.z), c += 1, p += 1, 4800 === c && (Yn(l, u, f, h, r, i, s, a, o), l = null, c = 0, u = 0, f = 0, h = 0));
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
let Kn = null, qn = "", Jn = !1;
function Qn(e) {
	const t = new Uint8Array(e.byteLength);
	return t.set(e), t;
}
function er(e) {
	return 1 / (1 + Math.exp(-Math.max(-60, Math.min(60, e))));
}
function tr(e, t) {
	const n = Math.max(e, t), r = Math.exp(e - n), i = Math.exp(t - n);
	return i / (r + i);
}
function nr(e) {
	if (e.data instanceof BigInt64Array || e.data instanceof BigUint64Array) throw new Error("LSTM ONNX output must be numeric float/int data, not bigint data");
	return e.data;
}
function rr(e, t) {
	for (const n of t) {
		const t = e[n];
		if (t) return t;
	}
	return null;
}
function ir(e, t, n) {
	const r = new Uint8Array(t);
	for (let i = 0; i < t; i++) r[i] = (e[i] ?? 0) >= n ? 1 : 0;
	return r;
}
function sr(e) {
	Jn || e.env?.wasm && (e.env.wasm.wasmPaths = {
		mjs: "/sleep-scoring-wasm/assets/ort-wasm-simd-threaded-DwpQBVmx.mjs",
		wasm: "/sleep-scoring-wasm/assets/ort-wasm-simd-threaded-DDx2apAW.wasm"
	}, e.env.wasm.numThreads = 1, e.env.wasm.proxy = !0, Jn = !0);
}
async function ar(e, t = {}) {
	const n = e.epochs, r = e.bins ?? 30, i = e.channels ?? 4;
	if (n <= 0) return {
		probabilities: /* @__PURE__ */ new Float32Array(),
		scores: /* @__PURE__ */ new Uint8Array()
	};
	const s = n * r * i;
	if (e.data.length !== s) throw new Error(`LSTM feature tensor has ${String(e.data.length)} value(s), expected ${String(s)}`);
	const a = t.ort ?? await import("/sleep-scoring-wasm/assets/ort.bundle.min-BhaRNi-D.mjs");
	sr(a);
	const o = await async function(e) {
		if (e.session) return e.session;
		const t = {
			executionProviders: ["wasm"],
			graphOptimizationLevel: "all"
		};
		if (e.modelBytes) {
			const n = e.ort ?? await import("/sleep-scoring-wasm/assets/ort.bundle.min-BhaRNi-D.mjs");
			return sr(n), n.InferenceSession.create(Qn(e.modelBytes), t);
		}
		const n = mt(e.modelId), r = e.modelUrl ?? n.url, i = e.modelUrl ? `url:${e.modelUrl}` : `selected:${n.id}:${n.version}:${r ?? "no-url"}`;
		return Kn && qn === i || (qn = i, Kn = (async () => {
			const i = e.ort ?? await import("/sleep-scoring-wasm/assets/ort.bundle.min-BhaRNi-D.mjs");
			if (sr(i), e.modelUrl) return i.InferenceSession.create(e.modelUrl, t);
			try {
				const e = Qn(await wt(n.id));
				return await i.InferenceSession.create(e, t);
			} catch (s) {
				if (!r) throw s;
				return await i.InferenceSession.create(r, t);
			}
		})().catch((e) => {
			throw Kn = null, e;
		})), Kn;
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
			return null != e ? e : gt(null);
		}(t.threshold), i = rr(e, [
			"sleep_probability",
			"probabilities",
			"probability",
			"probs",
			"logits"
		]) ?? Object.values(e)[0] ?? null;
		if (!i) throw new Error("LSTM ONNX session returned no outputs");
		const s = nr(i), a = i.dims ?? [], o = a.length > 0 ? a[a.length - 1] : void 0;
		if (s.length === n) {
			const e = new Float32Array(n), t = Array.from({ length: Math.min(s.length, 32) }, (e, t) => s[t] ?? 0).every((e) => e >= 0 && e <= 1);
			for (let r = 0; r < n; r++) e[r] = t ? s[r] ?? 0 : er(s[r] ?? 0);
			return {
				probabilities: e,
				scores: ir(e, n, r)
			};
		}
		if (s.length >= 2 * n && (2 === o || s.length === 2 * n)) {
			const e = new Float32Array(n);
			for (let t = 0; t < n; t++) e[t] = tr(s[2 * t] ?? 0, s[2 * t + 1] ?? 0);
			return {
				probabilities: e,
				scores: ir(e, n, r)
			};
		}
		const l = rr(e, [
			"sleep",
			"sleep_prediction",
			"labels",
			"predictions"
		]);
		if (l) {
			const e = nr(l);
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
function or(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n += 1) if (!Object.is(e[n], t[n])) return !1;
	return !0;
}
var lr = class e {
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
				case "hasib": return "hasib" === t.kind && e.algo === t.algo && JSON.stringify(e.config ?? null) === JSON.stringify(t.config ?? null) && or(e.data, t.data);
				case "sadeh": return "sadeh" === t.kind && Object.is(e.threshold, t.threshold) && or(e.activity, t.activity);
				case "coleKripke": return "coleKripke" === t.kind && e.useActilifeScaling === t.useActilifeScaling && or(e.activity, t.activity);
			}
		}(e.request, t));
	}
	add(t) {
		if (this.find(t)) return;
		const n = { request: t }, r = e.bucket(t), i = this.buckets.get(r);
		i ? i.push(n) : this.buckets.set(r, [n]), this.entries.push(n);
	}
};
function cr(e) {
	return e.medianGapSeconds ? { medianGapSeconds: (t) => e.medianGapSeconds(t) } : {};
}
function ur(e, t, n) {
	const r = e.find(t)?.outcome;
	if (!r) return n();
	if ("error" in r) return Promise.reject(new Error(r.error));
	const { result: i } = r, s = i instanceof Uint8Array ? new Uint8Array(i) : {
		...i,
		sib: new Uint8Array(i.sib)
	};
	return Promise.resolve(s);
}
const fr = {
	csv: "CSV",
	binary: "binary"
};
function hr(e, t, n) {
	const { label: r, wasmApi: i, signal: s, lstm: a } = e, o = e.cancelWasmOperation, l = e.ggirConfig.csvText;
	return async function(e) {
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
			], i = /* @__PURE__ */ new Map();
			let s, a, o = "";
			for (const l of e.days) {
				const c = l.group, u = JSON.stringify([
					r.filter((e) => c[e]?.length),
					r.filter((e) => c.counts30s?.[e]?.length),
					!!l.cube,
					!!l.cube?.lstmProbabilities,
					l.ggirSadehCole,
					l.hasibVariants ?? null
				]), f = [0];
				for (let t = 1; t < c.timestamps.length; t++) Math.abs(c.timestamps[t] - c.timestamps[t - 1] - e.countEpochSeconds) > .001 && f.push(t);
				const h = [];
				for (let n = 0; n < f.length; n++) {
					const p = f[n], g = f[n + 1] ?? c.timestamps.length;
					if (p === g) continue;
					const m = c.timestamps[p], d = c.timestamps[g - 1];
					if (!s || !a || u !== o || Math.abs(m - a.lastTs - e.countEpochSeconds) > .001) {
						const e = /* @__PURE__ */ new Float64Array(), n = {
							timestamps: e,
							axisY: e,
							vectorMagnitude: e,
							...c.counts30s ? { counts30s: {
								timestamps: e,
								axisY: e,
								vectorMagnitude: e
							} } : {}
						};
						a = {
							main: /* @__PURE__ */ new Map(),
							native: /* @__PURE__ */ new Map(),
							length: 0,
							nativeLength: 0,
							lastTs: NaN
						};
						for (const t of r) c[t]?.length && a.main.set(t, []), c.counts30s?.[t]?.length && a.native.set(t, []);
						s = {
							group: n,
							answers: /* @__PURE__ */ new Map(),
							...l.cube?.lstmProbabilities ? { probabilities: /* @__PURE__ */ new Float32Array() } : {}
						}, i.set(s, a), t.push({
							...l,
							group: n,
							...l.cube ? { cube: {} } : {}
						});
					}
					const w = a.length, y = a.nativeLength, b = c.counts30s?.timestamps.findIndex((e) => e >= m) ?? 0, v = c.counts30s?.timestamps.findIndex((t) => t >= d + e.countEpochSeconds) ?? -1, _ = v < 0 ? c.counts30s?.timestamps.length ?? 0 : v;
					for (const e of r) c[e]?.length && a.main.get(e)?.push(c[e].subarray(p, g)), c.counts30s?.[e]?.length && b >= 0 && a.native.get(e)?.push(c.counts30s[e].subarray(b, _));
					if (a.length += g - p, c.counts30s && b >= 0 && (a.nativeLength += Math.max(0, _ - b)), a.lastTs = d, s.probabilities && l.cube?.lstmProbabilities) {
						const e = new Float32Array(s.probabilities.length + g - p);
						e.set(s.probabilities), e.set(l.cube.lstmProbabilities.slice(p, g), s.probabilities.length), s.probabilities = e, t[t.length - 1].cube = { lstmProbabilities: e };
					}
					h.push({
						run: s,
						start: w,
						end: w + g - p,
						offset: p,
						nativeStart: y,
						nativeEnd: a.nativeLength,
						nativeOffset: Math.max(b, 0)
					}), o = u;
				}
				n.set(c, h);
			}
			for (const [{ group: l }, { main: c, native: u }] of i) {
				for (const [e, t] of c) l[e] = It(t);
				for (const [e, t] of u) l.counts30s[e] = It(t);
			}
			return {
				days: t,
				slices: n
			};
		}(e), r = new lr(), i = function(e, t) {
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
				...cr(e)
			};
		}(t, r);
		for (const o of n.days) o.ggirSadehCole && await qe(o.group, e.countEpochSeconds, i).catch(() => {}), o.cube && 120 !== e.countEpochSeconds && await Ke(o.group, e.countEpochSeconds, o.cube.lstmProbabilities, i, e.lstmSelection).catch(() => {}), o.hasibVariants && await Je(o.group, o.hasibVariants, i).catch(() => {});
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
			scoreGgirHasibVariant: (e, n, i) => ur(r, {
				kind: "hasib",
				data: e,
				algo: n,
				...i ? { config: i } : {}
			}, () => t.scoreGgirHasibVariant(e, n, i)),
			scoreCountScorerBatch: (e) => Promise.all(e.map(async (e) => {
				try {
					if ("hasib" !== e.kind) throw new Error(`a ${e.kind} request goes through its own method`);
					return { result: await ur(r, e, () => t.scoreGgirHasibVariant(e.data, e.algo, e.config)) };
				} catch (n) {
					return { error: n instanceof Error ? n.message : String(n) };
				}
			})),
			...t.scoreSadeh ? { scoreSadeh: (e, n) => ur(r, {
				kind: "sadeh",
				activity: e,
				threshold: n
			}, () => t.scoreSadeh(e, n)) } : {},
			...t.scoreColeKripke ? { scoreColeKripke: (e, n) => ur(r, {
				kind: "coleKripke",
				activity: e,
				useActilifeScaling: n
			}, () => t.scoreColeKripke(e, n)) } : {},
			scoreConsensus: (e, n) => t.scoreConsensus(e, n),
			...cr(t),
			...t.zeroCrossingCounts ? { zeroCrossingCounts: (e, n, r, i, s) => t.zeroCrossingCounts(e, n, r, i, s) } : {}
		};
		return et(a, n.slices), a;
	}({
		base: new Proxy(e.scorerCore, { get: (e, t) => "scoreGgirHasibVariant" === t ? (...t) => e.scoreGgirHasibVariant(t[0], t[1], t[2], l) : Reflect.get(e, t) }),
		days: t,
		countEpochSeconds: n,
		lstmSelection: a.selection,
		batch: (e) => z(i, (t) => t.scoreCountScorerBatch(e.map((e) => "hasib" === e.kind ? {
			...e,
			ggirConfigCsv: l
		} : e)), {
			ms: T,
			label: `scoreCountScorerBatch(${r})`,
			signal: s,
			cancel: o
		}).catch((e) => (_(e, s, `scoreCountScorerBatch(${r})`), console.warn("[local-processing] Batched count scoring failed; scoring contiguous runs."), null))
	});
}
async function pr(e) {
	if (e.countEpochSeconds < A) return async function(e) {
		const { dateGroups: t, availableDates: n, countEpochSeconds: r, wasmApi: i, signal: s, lstm: a } = e, o = A;
		if (!w(o)) throw new Error("The minute lane is not a stored grid.");
		const l = await kt(i, t, n, r), c = n.filter((e) => (l[e]?.timestamps.length ?? 0) > 0), u = function(e, t) {
			if (!e) return {
				minute: void 0,
				rows: void 0
			};
			const n = (e.variants ?? we).filter((e) => e !== be), r = (e) => q(V(e), t) === t, i = n.filter((e) => !r(e)), s = n.filter(r);
			return {
				minute: i.length > 0 ? {
					...e,
					variants: i
				} : void 0,
				rows: s.length > 0 ? {
					...e,
					variants: s
				} : void 0
			};
		}(e.hasibVariants, r), f = (e) => q(Ue(e)?.supportedEpochSeconds ?? [], r) === r, h = e.unifiedSleepWakeMethods ?? xe, p = await pr({
			...e,
			dateGroups: l,
			availableDates: c,
			countEpochSeconds: o,
			hasibVariants: u.minute,
			unifiedSleepWakeMethods: h.filter((e) => !f(e)),
			lstm: {
				...a,
				byDate: /* @__PURE__ */ new Map(),
				probabilityByDate: /* @__PURE__ */ new Map()
			}
		}), g = p.failures, m = u.rows, d = await hr(e, n.flatMap((n) => {
			const r = t[n];
			return r && e.hasCounts ? [{
				group: r,
				cube: { lstmProbabilities: a.probabilityByDate.get(n) },
				ggirSadehCole: !1,
				...m ? { hasibVariants: m } : {}
			}] : [];
		}), r), y = {}, b = {}, v = function(e) {
			if (0 === e.length) return;
			const t = /* @__PURE__ */ new Uint8Array(0), n = (n) => e.some((e) => n(e)) ? t : null, r = (n) => {
				const r = new Set(e.flatMap((e) => Object.keys(n(e) ?? {})));
				return r.size > 0 ? Object.fromEntries([...r].map((e) => [e, t])) : void 0;
			}, i = new Map(e.flatMap((e) => e.cubeHistoryOutputs ?? []).map(({ cubeConfig: e }) => [e.id, e])), s = r((e) => e.hasibVariants), a = r((e) => e.unifiedSleepWake);
			return {
				sadeh_1994_actilife: t,
				sadeh_1994_original: t,
				cole_kripke_1992_actilife: t,
				cole_kripke_1992_original: t,
				tensor_majority_vote: t,
				lstm_sleep_wake: null,
				nonwear: t,
				nonwearChoi2011: n((e) => e.nonwearChoi2011),
				detachNonwear: n((e) => e.detachNonwear),
				sadeh_1994_ggir: n((e) => e.sadeh_1994_ggir),
				cole_kripke_1992_ggir: n((e) => e.cole_kripke_1992_ggir),
				...s ? { hasibVariants: s } : {},
				...a ? { unifiedSleepWake: a } : {},
				cubeOutputs: r((e) => e.cubeOutputs) ?? {},
				cubeHistoryOutputs: [...i.values()].map((e) => ({
					cubeConfig: e,
					results: /* @__PURE__ */ new ArrayBuffer(0)
				}))
			};
		}(Object.values(p.algorithmResultsByDate)), S = function(e) {
			const t = /* @__PURE__ */ new Map();
			for (const n of e) for (const [e, r] of n) (!t.has(e) || r.nonwear && !t.get(e).nonwear) && t.set(e, r.nonwear ? {
				...r,
				nonwear: /* @__PURE__ */ new Uint8Array(0)
			} : r);
			return t.size > 0 ? t : void 0;
		}(Object.values(p.countsNonwear));
		for (const w of n) {
			const n = t[w];
			if (!n) continue;
			const o = l[w]?.timestamps ?? /* @__PURE__ */ new Float64Array(0), c = 0 === o.length, u = p.algorithmResultsByDate[w] ?? (c ? v : void 0), f = (e) => Xt(i, o, e ?? new Uint8Array(o.length), n.timestamps), h = async (e) => e ? f(e) : null, A = async (e) => {
				const t = {};
				for (const [n, r] of Object.entries(e ?? {})) r && (t[n] = await f(r));
				return t;
			}, C = {
				sadeh_1994_actilife: await f(u?.sadeh_1994_actilife),
				sadeh_1994_original: await f(u?.sadeh_1994_original),
				cole_kripke_1992_actilife: await f(u?.cole_kripke_1992_actilife),
				cole_kripke_1992_original: await f(u?.cole_kripke_1992_original),
				tensor_majority_vote: await f(u?.tensor_majority_vote),
				lstm_sleep_wake: a.byDate.get(w) ?? null,
				nonwear: await f(u?.nonwear),
				nonwearChoi2011: await h(u?.nonwearChoi2011),
				detachNonwear: await h(u?.detachNonwear),
				sadeh_1994_ggir: await h(u?.sadeh_1994_ggir),
				cole_kripke_1992_ggir: await h(u?.cole_kripke_1992_ggir),
				...u?.hasibVariants ? { hasibVariants: await A(u.hasibVariants) } : {},
				...u?.unifiedSleepWake ? { unifiedSleepWake: await A(u.unifiedSleepWake) } : {},
				cubeOutputs: { ...u?.cubeOutputs },
				cubeHistoryOutputs: [...u?.cubeHistoryOutputs ?? []]
			}, E = p.countsNonwear[w] ?? (c ? S : void 0);
			if (E) {
				const e = /* @__PURE__ */ new Map();
				for (const [t, n] of E) e.set(t, n.nonwear ? {
					...n,
					nonwear: await f(n.nonwear),
					elementSeconds: r
				} : n);
				b[w] = e;
			}
			if (e.hasCounts && Xe(r)) {
				const e = await Ke(n, r, a.probabilityByDate.get(w), d, a.selection).catch((e) => (_(e, s, `runAlgorithmCubeForDay(${w}, rows)`), console.warn("[local-processing] Local algorithm-output expansion failed for one analysis day."), g.algorithmCubeFailed = !0, null));
				e && (Object.assign(C.cubeOutputs, X(e.algorithmResults, (e) => new Uint8Array(e))), C.cubeHistoryOutputs.push(...e.historyOutputs), g.algorithmCubeSkipped += e.skipped);
			}
			if (m && e.hasCounts) {
				const e = await Je(n, m, d).catch((e) => (_(e, s, `scoreCountBasedHasibVariantsForDay(${w}, rows)`), console.warn("[local-processing] A HASIB variant failed for one local analysis day."), g.hasibVariantFailed = !0, {}));
				C.hasibVariants = {
					...C.hasibVariants,
					...e
				};
			}
			y[w] = C;
		}
		const C = h.filter(f);
		if (C.length > 0 && e.hasCounts && Xe(r)) {
			const a = new Map(Object.entries(y).map(([e, t]) => [e, t.unifiedSleepWake]));
			await dt(i, y, t, n, r, s, void 0, e.cancelWasmOperation, e.oakleyConfigs, C);
			for (const [e, t] of Object.entries(y)) t.unifiedSleepWake = {
				...a.get(e),
				...t.unifiedSleepWake
			};
		}
		return {
			algorithmResultsByDate: y,
			countsNonwear: b,
			failures: g,
			choiAxis: p.choiAxis
		};
	}(e);
	const { label: t, dateGroups: n, availableDates: r, countEpochSeconds: i, wasmApi: s, signal: a, onProgress: o, lstm: l } = e, c = e.cancelWasmOperation, u = {
		algorithmCubeFailed: !1,
		algorithmCubeSkipped: 0,
		detachFailed: !1,
		detachFailedDates: /* @__PURE__ */ new Set(),
		ggirCountScoreFailed: !1,
		hasibVariantFailed: !1
	}, f = {}, h = function(e, t, n, r) {
		return {
			choiAxis: e,
			extras: {
				...tn(r).extras,
				ggirConfigSha256: t,
				countEpochSeconds: String(n),
				continuousCountsRevision: "3"
			}
		};
	}(e.choiAxis, e.ggirConfig.sha256, i, l.options), p = null === e.sourceContentHash ? null : await ee(e.sourceContentHash, h), g = !!p && r.length > 0 && r.every((e) => p.has(e)), m = Xe(i), d = m && !!e.hasibVariants && e.hasCounts, y = await hr(e, r.flatMap((t) => {
		const r = n[t];
		return r ? [{
			group: r,
			...(g || e.hasCounts) && m ? { cube: { lstmProbabilities: l.probabilityByDate.get(t) } } : {},
			ggirSadehCole: !g && e.hasCounts && (r.zeroCrossingY?.length ?? 0) > 0,
			...e.hasibVariants && e.hasCounts ? { hasibVariants: e.hasibVariants } : {}
		}] : [];
	}), i), b = async (e, n, r, s) => {
		if (!m) return;
		const o = await Ke(n, i, l.probabilityByDate.get(e), y, l.selection).catch((n) => (_(n, a, `runAlgorithmCubeForDay(${e}, ${s ? "cached " : ""}${t})`), console.warn("[local-processing] Local algorithm-output expansion failed for one analysis day."), u.algorithmCubeFailed = !0, null));
		o && (r.cubeOutputs = X(o.algorithmResults, (e) => new Uint8Array(e)), r.cubeHistoryOutputs = o.historyOutputs, u.algorithmCubeSkipped += o.skipped);
	};
	if (p && g) {
		o?.({
			phase: "scoring",
			percent: re("scoring", 0),
			message: "Loaded scored results from cache..."
		});
		for (const [e, t] of r.entries()) {
			o?.({
				phase: "scoring",
				percent: re("scoring", e / r.length),
				message: `Algorithm variants, day ${String(e + 1)} of ${String(r.length)}`
			});
			const i = p.get(t), s = n[t];
			if (!i || !s) continue;
			const a = {
				sadeh_1994_actilife: i.sadeh_actilife,
				sadeh_1994_original: i.sadeh_original,
				cole_kripke_1992_actilife: i.ck_actilife,
				cole_kripke_1992_original: i.ck_original,
				tensor_majority_vote: i.consensus_majority_vote,
				lstm_sleep_wake: l.byDate.get(t) ?? i.lstm_sleep_wake ?? null,
				nonwear: i.nonwear,
				nonwearChoi2011: i.nonwear_choi_2011 ?? null,
				detachNonwear: i.detach_nonwear,
				sadeh_1994_ggir: i.sadeh_ggir,
				cole_kripke_1992_ggir: i.ck_ggir
			};
			f[t] = a, await b(t, s, a, !0);
		}
		o?.({
			phase: "nonwear",
			percent: 82,
			message: "Nonwear restored from cache"
		});
	} else if (e.hasCounts) {
		o?.({
			phase: "scoring",
			percent: re("scoring", .5),
			message: "Running sleep algorithms (batch)..."
		});
		const t = await Pt(s, n, r, i, a, c);
		for (const [h, p] of r.entries()) {
			const g = n[p], m = t[h];
			if (!g || !m) continue;
			o?.({
				phase: "nonwear",
				percent: 72 + (h + 1) / r.length * 10,
				message: `Nonwear and algorithm variants, day ${String(h + 1)} of ${String(r.length)}`
			});
			const d = Se(e.sourceEligibility, g.temperature, g.accelerationG) ? await z(s, (e) => e.detectDetachFromAccelerationG(new Float64Array(g.accelerationG ?? []), new Float64Array(g.temperature ?? [])), {
				ms: T,
				label: `detectDetachFromAccelerationG(${p})`,
				signal: a,
				cancel: c
			}).catch((e) => (_(e, a, `detectDetachFromAccelerationG(${p})`), console.warn("[local-processing] DETACH nonwear detection failed for one local analysis day."), u.detachFailed = !0, u.detachFailedDates.add(p), null)) : null, w = (g.zeroCrossingY?.length ?? 0) > 0 ? await qe(g, i, y).catch((e) => (_(e, a, `scoreBuiltinGgirSadehColeForDay(${p})`), console.warn("[local-processing] GGIR count-based scoring failed for one local analysis day."), u.ggirCountScoreFailed = !0, null)) : null, v = {
				sadeh_1994_actilife: m.sadeh_actilife,
				sadeh_1994_original: m.sadeh_original,
				cole_kripke_1992_actilife: m.ck_actilife,
				cole_kripke_1992_original: m.ck_original,
				tensor_majority_vote: new Uint8Array(m.sadeh_actilife.length),
				lstm_sleep_wake: l.byDate.get(p) ?? null,
				nonwear: m.nonwear,
				nonwearChoi2011: m.nonwearChoi2011,
				detachNonwear: d,
				sadeh_1994_ggir: w?.sadeh ?? null,
				cole_kripke_1992_ggir: w?.ck ?? null
			};
			f[p] = v, await b(p, g, v, !1);
		}
	}
	o?.({
		phase: "nonwear",
		percent: re("nonwear", 1),
		message: "Counts-based nonwear detectors..."
	});
	const v = m && e.hasCounts ? await ot(s, n, r, i, a, void 0, c) : {};
	if (d && e.hasibVariants) {
		o?.(e.planHasGgir ? {
			phase: "ggir",
			percent: re("ggir", 0),
			message: "Running GGIR HASIB variants..."
		} : {
			phase: "nonwear",
			percent: re("nonwear", 1),
			message: "Running GGIR HASIB variants..."
		});
		for (const i of r) {
			const r = n[i], s = f[i];
			r && s && (s.hasibVariants = await Je(r, e.hasibVariants, y).catch((e) => (_(e, a, `scoreCountBasedHasibVariantsForDay(${i}, ${t})`), console.warn("[local-processing] A HASIB variant failed for one local analysis day."), u.hasibVariantFailed = !0, {})));
		}
	}
	for (const w of r) {
		const e = f[w];
		e && (e.tensor_majority_vote = await je(e, s));
	}
	if (m && e.hasCounts && await dt(s, f, n, r, i, a, void 0, c, e.oakleyConfigs, e.unifiedSleepWakeMethods), !g && null !== e.sourceContentHash) {
		const t = /* @__PURE__ */ new Map();
		for (const e of r) {
			const n = f[e];
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
			t.set(e, r);
		}
		oe(e.sourceContentHash, h, t).catch(() => {
			console.warn("[local-processing] Scored-cache persistence failed.");
		});
	}
	return {
		algorithmResultsByDate: f,
		countsNonwear: v,
		failures: u,
		choiAxis: e.choiAxis
	};
}
function gr(e, t, n, r, i) {
	const { fileId: s, ggir: a } = e, o = a.byDate.get(t), l = e.lstm30sByDate.get(t), c = e.sourceColumns?.(t, n) ?? {}, u = r.sadeh_1994_actilife.buffer, f = r.sadeh_1994_original.buffer, h = r.cole_kripke_1992_actilife.buffer, p = r.cole_kripke_1992_original.buffer, g = r.tensor_majority_vote.buffer, m = r.lstm_sleep_wake?.buffer, d = r.detachNonwear?.buffer, w = r.nonwear.buffer, y = r.sadeh_1994_ggir?.buffer, b = r.cole_kripke_1992_ggir?.buffer, v = e.preschoolWristRfByDate.get(t)?.buffer, _ = Qe(r.hasibVariants), A = Qe(r.unifiedSleepWake), S = W(r.cubeHistoryOutputs), C = (e) => {
		const t = n[e];
		return t && t.length > 0 ? { [e]: new Float64Array(t).buffer } : {};
	};
	return {
		day: {
			fileId: s,
			date: t,
			timestamps: new Float64Array(n.timestamps).buffer,
			axisY: new Float64Array(n.axisY).buffer,
			vectorMagnitude: new Float64Array(n.vectorMagnitude).buffer,
			...n.axisX && n.axisX.length > 0 ? { axisX: new Float64Array(n.axisX).buffer } : {},
			...n.axisZ && n.axisZ.length > 0 ? { axisZ: new Float64Array(n.axisZ).buffer } : {},
			...C("mimsUnit"),
			...C("mimsUnitX"),
			...C("mimsUnitY"),
			...C("mimsUnitZ"),
			...l && l.timestamps.length > 0 && l.scores.length === l.timestamps.length ? {
				lstmTimestamps30s: new Float64Array(l.timestamps).buffer,
				lstmSleepWake30s: new Uint8Array(l.scores).buffer
			} : {},
			...o && o.timestamps.length > 0 ? {
				ggirTimestamps: new Float64Array(o.timestamps).buffer,
				ggirEnmo: new Float64Array(o.enmo).buffer,
				ggirAnglez: new Float64Array(o.anglez).buffer,
				...Z(o.timestamps, a.tsMs, a.zeroCrossings5s),
				...o.anglex ? { ggirAnglex: new Float64Array(o.anglex).buffer } : {},
				...o.angley ? { ggirAngley: new Float64Array(o.angley).buffer } : {},
				...o.sib ? { ggirSib: new Uint8Array(o.sib).buffer } : {},
				...o.invalid ? { ggirInvalid: new Uint8Array(o.invalid).buffer } : {},
				...o.mimsUnit ? { mimsUnit: new Float64Array(o.mimsUnit).buffer } : {},
				...o.mimsUnitX ? { mimsUnitX: new Float64Array(o.mimsUnitX).buffer } : {},
				...o.mimsUnitY ? { mimsUnitY: new Float64Array(o.mimsUnitY).buffer } : {},
				...o.mimsUnitZ ? { mimsUnitZ: new Float64Array(o.mimsUnitZ).buffer } : {}
			} : {},
			algorithmResults: {
				...u.byteLength > 0 ? { [j.SADEH_1994_ACTILIFE]: u } : {},
				...f.byteLength > 0 ? { [j.SADEH_1994_ORIGINAL]: f } : {},
				...h.byteLength > 0 ? { [j.COLE_KRIPKE_1992_ACTILIFE]: h } : {},
				...p.byteLength > 0 ? { [j.COLE_KRIPKE_1992_ORIGINAL]: p } : {},
				...g.byteLength > 0 ? { [j.TENSOR_MAJORITY_VOTE]: g } : {},
				...m ? { [j.LSTM_SLEEP_WAKE]: m } : {},
				...v ? { [He]: v } : {},
				...y ? { [j.SADEH_1994_GGIR]: y } : {},
				...b ? { [j.COLE_KRIPKE_1992_GGIR]: b } : {},
				..._.algorithmResults,
				...A.algorithmResults,
				...S.algorithmResults,
				...c.algorithmResults
			},
			algorithmResultHashes: S.algorithmResultHashes,
			...c.fields,
			...Ce(n.temperature) ? { temperature: new Float64Array(n.temperature ?? []).buffer } : {},
			nonwearResults: w.byteLength > 0 ? w : null,
			nonwearResultsChoi2011: r.nonwearChoi2011?.buffer ?? null,
			nonwearChoiAxis: e.scored.choiAxis,
			detachNonwear: d ?? null,
			...null != i && "source_not_eligible" !== i ? { nonwearSkipReasons: { [k.DETACH_NONWEAR]: Ie[i] } } : {},
			...e.nonwearPatches[t]
		},
		history: [
			{
				algoKey: j.SADEH_1994_ACTILIFE,
				results: u
			},
			{
				algoKey: j.SADEH_1994_ORIGINAL,
				results: f
			},
			{
				algoKey: j.COLE_KRIPKE_1992_ACTILIFE,
				results: h
			},
			{
				algoKey: j.COLE_KRIPKE_1992_ORIGINAL,
				results: p
			},
			{
				algoKey: j.TENSOR_MAJORITY_VOTE,
				results: g
			},
			...m ? [{
				algoKey: j.LSTM_SLEEP_WAKE,
				results: m
			}] : [],
			...v ? [{
				algoKey: He,
				results: v
			}] : [],
			{
				algoKey: j.CHOI_2011_NONWEAR,
				results: w
			},
			...d ? [{
				algoKey: j.DETACH_NONWEAR,
				results: d
			}] : [],
			...y ? [{
				algoKey: j.SADEH_1994_GGIR,
				results: y
			}] : [],
			...b ? [{
				algoKey: j.COLE_KRIPKE_1992_GGIR,
				results: b
			}] : [],
			..._.historyOutputs,
			...A.historyOutputs,
			...r.cubeHistoryOutputs ?? []
		]
	};
}
async function mr(e) {
	const { label: t, dateGroups: n, availableDates: r, wasmApi: i, signal: s, onProgress: a, fileId: o } = e, l = e.scored.algorithmResultsByDate, c = r.flatMap((t) => {
		const r = n[t], i = l[t];
		return r && i ? [{
			date: t,
			group: r,
			algo: i,
			detachSkip: null != i.detachNonwear ? null : e.scored.failures.detachFailedDates.has(t) ? "computation_failed" : Be(e.sourceEligibility, r.temperature, r.accelerationG)
		}] : [];
	}), u = c.some(({ algo: e }) => null != e.detachNonwear), f = c.reduce((e, { detachSkip: t }) => "no_finite_temperature" === t || "no_acceleration_g" === t ? t : e, null), h = /* @__PURE__ */ new Map();
	for (const { date: y, group: b, algo: v, detachSkip: _ } of c) h.set(y, await ie(gr(e, y, b, v, _).day, i));
	const p = await async function(e, t, n, r, i) {
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
			return new Set(await Mt(e, s, i));
		} catch {
			return console.warn("[local-processing] Circadian coverage could not be computed for this file."), /* @__PURE__ */ new Set();
		}
	}(o, r, n, e.ggir.byDate, i);
	a?.({
		phase: "storing",
		percent: re("storing", 0),
		message: "Saving to local database..."
	});
	const g = Ht({
		scope: e.scope,
		fileId: o,
		sourceContentHash: e.sourceContentHash,
		signalDates: p,
		onChunk: (e, t, n) => a?.({
			phase: "storing",
			percent: re("storing", Nt(e, t, n, r.length)),
			message: `Saving days ${String(e)}–${String(t)} of ${String(r.length)}`
		})
	});
	for (const { date: y, group: b, algo: _, detachSkip: A } of c) {
		v(s, `saveActivityDay ${y}`);
		const { day: t, history: n } = gr(e, y, b, _, A);
		await g.add(t, n, h.get(y));
	}
	await g.flush();
	const { saved: m, activityFailed: d, historyFailed: w } = g.state;
	if (d || m !== r.length || 0 === m) throw await Bt(e.scope, `${t} ingest: no ActivityDays could be saved`), /* @__PURE__ */ new Error("Could not save any activity data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return {
		activityDaysSaved: m,
		historyWriteFailed: w,
		detachRan: u,
		detachSkipped: f
	};
}
async function dr(e) {
	const t = await tt(e.fileId, e.nightDates, e.sourceCaps, e.onProgress, e.scope.db, e.signal, e.wasmApi, e.cancelWasmOperation, e.options?.scoredVariantNarrowing);
	return v(e.signal, `before completing ${fr[e.label]} ingest`), await Ye(() => zt(e.scope), e.fileId, t, e.scope.auditBinding), t;
}
async function wr(e, t, n, r, i = "vector_magnitude", a, w, A) {
	v(w, "processLocalFile"), Qt(e, r);
	const k = N(), { username: H, selectedStudyId: V, sensorLocation: W, participantLaterality: j } = C().scoring(), X = K.captureWorkspaceBinding(k, {
		username: H,
		studyId: V,
		signal: w
	}), Y = {
		db: k,
		signal: w,
		attemptId: P(),
		auditBinding: X,
		placement: {
			bodySite: A?.sensorLocation ?? W,
			laterality: j
		},
		ingestProvenance: mn({
			skipRows: n,
			columnMapping: a,
			...void 0 === A?.preferredActivityColumn ? {} : { preferredActivityColumn: A.preferredActivityColumn }
		})
	};
	let Z, q, ee;
	try {
		if (v(w, "before acquiring local ingest workers"), e.name.toLowerCase().endsWith(".gt3x") && e.size > 268435456) throw new Error(`This GT3X file is too large to process (${String(Math.ceil(e.size / 2 ** 20))} MiB; the limit is ${String(256)} MiB).`);
		const C = e.name.toLowerCase().endsWith(".gt3x"), N = pe(e) ? o(w) : void 0, P = N?.controller;
		q = N?.release, P || (Z = p({ singleThread: C }, f));
		const H = P ? x(P.signal) : Z.api, V = P ? () => P.abort() : Z.terminate;
		ee = C ? D() : void 0;
		const W = e.name.toLowerCase(), j = W.endsWith(".rdata") || W.endsWith(".rda") ? void 0 : await S(e).catch(() => {});
		j && (Y.head = j), Y.recording = on(await ln(e, w, H, Y.head), Y.placement);
		const ie = await async function(e, t, n, r, i = "vector_magnitude", a, o, f, p, w) {
			if (!p) throw new Error("Local ingest persistence scope is missing.");
			const A = p.db, S = f?.ggirConfig ?? await at(A);
			let C = Ot(f?.countEpochSeconds);
			const k = $t(f), x = (/* @__PURE__ */ new Date()).toISOString();
			if (e.size < 100) throw fe(e, `File appears to be empty (size: ${e.size} bytes). Please select a valid activity data file.`);
			const N = e.name.toLowerCase(), D = N.endsWith(".bin");
			if (N.endsWith(".gt3x")) return async function(e, t, n, r, i, s) {
				if (!i) throw new Error("Local ingest persistence scope is missing.");
				const a = i.db, o = r?.ggirConfig ?? await at(a);
				v(n, "processLocalRawBinaryFile");
				const l = (/* @__PURE__ */ new Date()).toISOString(), c = ye(s?.wasmApi ?? R()), u = s?.gt3xApi, f = s?.cancelGt3xOperation;
				if (!u || !f) throw new Error("GT3X processing worker is unavailable.");
				const p = s?.cancelWasmOperation ?? (() => {
					E(c);
				}), d = L.GT3X_BINARY;
				if (!I(d, "source_profile_realization", "local")) throw new Error(`Local processing has no implemented source-profile realization for source type "${d}".`);
				const w = "gt3x", y = "GT3X", b = Ot(r?.countEpochSeconds), A = $t(r), S = "gt3x", C = le(S, !0);
				t?.({
					phase: "reading",
					percent: 0,
					message: `Reading ${y} file...`,
					device: S,
					plan: C
				}), v(n, `before reading ${y} binary`);
				const k = await e.arrayBuffer();
				v(n, `after reading ${y} binary`);
				const { prefixHash: M, fullHash: U } = await m(k, (e) => {
					t?.({
						phase: "reading",
						percent: 15 * e,
						message: `Computing file hash... ${Math.round(100 * e)}%`
					});
				}, n, {
					start: () => c.sha256Start(),
					feed: (e) => c.sha256Feed(g(e, [e.buffer])),
					finish: () => c.sha256Finish()
				}), F = e.size, x = await ae(U, a) ?? await ge(M, a, U);
				if (x?.id) {
					t?.({
						phase: "complete",
						percent: 100,
						message: "File already imported"
					});
					const e = x.availableDates;
					return {
						alreadyImported: !0,
						fileId: x.id,
						availableDates: e,
						sourceType: d
					};
				}
				const N = await me(e.name, a);
				if (N && "incomplete" !== N.ingestState) throw new ce();
				let D, G, P, $, H, V, W, j, X, Y, Z;
				t?.({
					phase: "parsing",
					percent: -1,
					message: "Parsing GT3X binary and computing epochs, counts and GGIR metrics..."
				});
				let K, q, Q, ee, te, ne = !1, re = !1, ie = null, oe = null, ue = null, fe = null, he = null, pe = !1, we = null, be = null, Se = null, Ce = null;
				const Be = await z(u, (e) => e.processGt3xFull(g(k, [k]), b, o.csvText), {
					ms: T,
					label: "processGt3xFull",
					signal: n,
					cancel: f
				}).finally(f);
				if (v(n, "after processGt3xFull"), D = Be.enmo5s, G = Be.anglez5s, P = Be.anglex5s ?? /* @__PURE__ */ new Float64Array(), $ = Be.angley5s ?? /* @__PURE__ */ new Float64Array(), H = Be.ggirInvalid5s, V = Be.ggirZeroCrossings5s, W = Be.ggirNonwear5s, j = {
					x: Be.countsX,
					y: Be.countsY,
					z: Be.countsZ,
					vm: Be.countsVm
				}, K = Be.zcx60s.length === Be.countsX.length ? Be.zcx60s : null, q = Be.zcy60s.length === Be.countsY.length ? Be.zcy60s : null, Q = Be.zcz60s.length === Be.countsZ.length ? Be.zcz60s : null, X = Be.capsense, Y = Be.firstTsMs, ee = await c.dstPlaceholderRuns(Be.firstTsMs, Be.enmo5s.length, Be.dstTransitions), te = Be.dstTimezone ?? void 0, Z = Be.calibration, Be.lstmFeatures30s.length > 0 && Be.lstmFeatureEpochs > 0) {
					t?.({
						phase: "scoring",
						percent: 42,
						message: "Running LSTM sleep/wake model..."
					});
					const e = Be.firstTsMs;
					Se = ar({
						data: Be.lstmFeatures30s,
						epochs: Be.lstmFeatureEpochs,
						bins: Be.lstmFeatureBins,
						channels: Be.lstmFeatureChannels
					}, A.scoreOptions).then((t) => ({
						scores: t.scores,
						probabilities: t.probabilities,
						firstTsMs: e
					}), (e) => (_(e, n, `LSTM sleep/wake scoring (${w})`), console.warn("[local-processing] LSTM sleep/wake scoring failed for a local binary import; count-based scoring remains available."), { failureDetail: "the local model runtime or its input contract rejected the operation" })), Se.catch(() => {});
				} else we = "the local model produced no usable spectral feature tensor", console.warn("[local-processing] LSTM spectral features were unavailable for a local binary import."), pe = !0;
				if (Be.mimsUnit.length > 0) {
					const e = await c.uniformTimestamps(Be.firstTsMs, 5e3, Be.enmo5s.length);
					oe = await gn(c, {
						mimsUnit: Be.mimsUnit,
						epochSeconds: 5,
						...Be.mimsUnitX.length > 0 ? { mimsUnitX: Be.mimsUnitX } : {},
						...Be.mimsUnitY.length > 0 ? { mimsUnitY: Be.mimsUnitY } : {},
						...Be.mimsUnitZ.length > 0 ? { mimsUnitZ: Be.mimsUnitZ } : {}
					}, e), re = null === oe;
				} else ne = !0, ie = Be.mimsAvailability?.reason ?? (Be.mimsAvailability ? "the actours automatic-ingest policy reported MIMS as available but returned no values" : "the loaded actours WASM bundle does not report MIMS availability"), console.warn("[local-processing] MIMS output was unavailable for a local binary import; see the in-app import warning.");
				if (Be.preschoolWristRfClasses.length > 0 && (Ce = {
					classes: Be.preschoolWristRfClasses,
					epochSeconds: Be.preschoolWristRfEpochSeconds,
					classifier: "Preschool Wrist Random Forest Free Living Lag-Lead",
					model: "actimetricModels::PS.RF.FL.Wrist15.LagLead"
				}), Be.tzJump) {
					const e = ut;
					console.warn("[local-processing] A possible recording time-zone discontinuity was detected."), t?.({
						phase: "parsing",
						percent: 25,
						message: "Checking time consistency...",
						warning: e
					});
				}
				const Te = Y / 1e3, Me = H.length === G.length && G.length > 0 ? H : null, Oe = G.length > 0 && null !== Me ? z(c, (e) => e.runGgirFromEpoch({
					source: "gt3x_stream",
					invalidMask: "ggir_part2"
				}, G, D, Te, Me, te, o.csvText, se(o.csvText, V)).catch((e) => (_(e, n, `runGgirFromEpoch (${w})`), console.warn("[local-processing] GGIR epoch analysis failed for a local binary import."), null)), {
					ms: T,
					label: `runGgirFromEpoch (${w})`,
					signal: n,
					cancel: p
				}) : null;
				Oe?.catch(() => {});
				const Ue = Float64Array.from(await c.uniformTimestamps(Y, 1e3 * b, j.y.length), (e) => e / 1e3);
				t?.({
					phase: "scoring",
					percent: 60,
					message: "Running sleep algorithms..."
				});
				const Fe = await ft(c, Ue, j.y, j.vm, j.x, j.z, void 0, void 0, void 0, q ?? void 0, K ?? void 0, Q ?? void 0);
				await en(c, Ue, b);
				const xe = Object.keys(Fe).sort();
				if (0 === xe.length) throw await Bt(i, "no activity observations"), /* @__PURE__ */ new Error("No activity observations were parsed. Check the input format and import again.");
				const ze = await yt(Object.entries(Fe), c, {
					core: c,
					storedEpochSeconds: b
				});
				if (Se) {
					const e = await Se;
					"failureDetail" in e ? (we = e.failureDetail, pe = !0) : (ue = e.scores, fe = e.probabilities, be = pn(e.scores, e.probabilities), be && console.warn("[local-processing] LSTM output quality requires review; see the in-app import warning."), he = e.firstTsMs);
				}
				const Ne = ue && null !== he ? await At(c, ue, he, Fe, b) : /* @__PURE__ */ new Map(), De = fe && null !== he ? await Ct(c, fe, he, Fe, b) : /* @__PURE__ */ new Map(), Ge = await rn(c, ue, he), Pe = B(d), Le = h(d, "local"), $e = O(c, {
					ms: T,
					signal: n,
					cancel: p
				}), He = await pr({
					label: "binary",
					dateGroups: Fe,
					availableDates: xe,
					countEpochSeconds: b,
					wasmApi: c,
					cancelWasmOperation: p,
					signal: n,
					onProgress: t,
					scorerCore: $e,
					sourceEligibility: Pe,
					hasCounts: Le?.has60sCounts ?? !1,
					choiAxis: "vector_magnitude",
					ggirConfig: o,
					sourceContentHash: U,
					lstm: {
						byDate: Ne,
						probabilityByDate: De,
						selection: A.selection,
						options: r
					},
					hasibVariants: r?.hasibVariants,
					oakleyConfigs: {},
					planHasGgir: C.includes("ggir")
				}), { algorithmResultsByDate: Ve, countsNonwear: We } = He, je = await Yt(i, {
					filename: e.name,
					devicePreset: "gt3x",
					epochLengthSeconds: b,
					availableDates: ze,
					sourceType: d,
					fileHash: M,
					sourceContentHash: U,
					sourceSizeBytes: F,
					source: "local",
					eventMarkerInstants: [],
					createdAt: (/* @__PURE__ */ new Date()).toISOString(),
					ggirPart2Config: o,
					...Te > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * Te)).toISOString() } } : {},
					...te ? {
						ggirTimezone: te,
						ggirClockBasis: Vt(te)
					} : {},
					...ee.length > 0 ? { ggirDstPlaceholders: await nn(c, Y, ee, {
						anglez: G,
						anglex: P,
						angley: $,
						enmo: D,
						zcx: V?.[0],
						zcy: V?.[1],
						zcz: V?.[2]
					}) } : {}
				}, $e);
				if ("already_complete" === je.kind) {
					const e = je.record.id;
					if (null == e) throw new Error("Completed local import identity is invalid.");
					return t?.({
						phase: "complete",
						percent: 100,
						message: "File already imported"
					}), {
						alreadyImported: !0,
						fileId: e,
						availableDates: je.record.availableDates,
						sourceType: je.record.sourceType ?? d
					};
				}
				const Xe = je.guard.fileId;
				let Ye = !1;
				const Ze = /* @__PURE__ */ new Map(), Ke = _t(X), qe = Ke.map((e) => [e.startMs / 1e3, e.endMs / 1e3]), Je = {};
				for (const [h, g] of Object.entries(Fe)) {
					const e = g.timestamps;
					Je[h] = Ae(await Re(Ze, {
						baseTsSec: Te,
						epochTimestampsSec: e,
						epochLenSec: b
					}, c), await Re(We[h] ?? /* @__PURE__ */ new Map(), {
						baseTsSec: e[0] ?? 0,
						epochTimestampsSec: e,
						epochLenSec: b
					}, c), W.length === G.length ? await Ee(W, {
						ggirConfigCsv: o.csvText,
						baseTsSec: Te,
						epochTimestampsSec: e,
						epochLenSec: b,
						dstRuns: ee
					}, c) : {});
				}
				const Qe = _e("ggir"), et = await Dt(Ve, Fe, qe, Qe, Object.fromEntries(xe.map((e) => [e, Je[e] ?? {}])), ke(d, null), c);
				if (G.length > 0 && null === Me) console.warn("[local-processing] GGIR Part-2 invalid mask missing for a local binary import; GGIR summaries skipped."), Ye = !0;
				else if (G.length > 0 && null !== Me) {
					t?.({
						phase: "ggir",
						percent: -1,
						message: "GGIR Parts 3–5 on the 5 s series..."
					});
					const e = await Oe;
					if (e?.days?.length) {
						const t = Tt(e.days, Xe, Z, o);
						await Ut(i), await de(t, a, n).catch(() => {
							console.warn("[local-processing] Binary epoch-summary persistence failed."), Ye = !0;
						}), Ye || await xt({
							ggirConfigSha256: o.sha256,
							fileId: Xe,
							sourceContentHash: U,
							sourceSizeBytes: F,
							identity: () => z(c, (e) => e.getComputeIdentity(), {
								ms: T,
								label: `getComputeIdentity (${w}, epoch)`,
								signal: n,
								cancel: p
							}),
							calibration: Z,
							rows: t,
							startedAt: l
						}, a, n);
					} else Ye = !0;
				}
				t?.({
					phase: "ggir",
					percent: -1,
					message: "HDCZA sleep window..."
				});
				const tt = new Map((await J(Xe, a)).map((e) => [e.analysisDate, e]));
				let nt;
				const rt = G.length > 0 && null === Me ? Jt : await jt(Xe, G, Te, et, tt, r?.hasptVariant, {
					activity5s: D,
					...Me ? { invalid5s: Me } : {},
					ggirConfig: o,
					zeroCrossings5s: V,
					...P.length > 0 ? { anglex5s: P } : {},
					...$.length > 0 ? { angley5s: $ } : {},
					dstRuns: ee,
					...te ? { timezone: te } : {}
				}, ve(r?.sleepPeriodDetectionConfig, {
					path: "ggir",
					selected: Qe
				}), sn(r, i.recording), a, n, c, p, i.auditBinding, (e) => {
					nt = e;
				}), it = D.length, st = await c.ggir5sWallClockMs(1e3 * Te, it, ee), ot = await Ft(c, st, D, G, {
					anglex: P,
					angley: $,
					sib: nt,
					...Me ? { invalid: Me } : {},
					mimsUnit: oe?.unit,
					mimsUnitX: oe?.unitX,
					mimsUnitY: oe?.unitY,
					mimsUnitZ: oe?.unitZ
				}), lt = Ce ? await Wt(c, Y, Ce.classes, Ce.epochSeconds) : /* @__PURE__ */ new Map(), ct = await mr({
					label: "binary",
					dateGroups: Fe,
					availableDates: xe,
					countEpochSeconds: b,
					wasmApi: c,
					cancelWasmOperation: p,
					signal: n,
					onProgress: t,
					scope: i,
					fileId: Xe,
					sourceContentHash: U,
					scored: He,
					sourceEligibility: Pe,
					ggir: {
						byDate: ot,
						tsMs: st,
						zeroCrossings5s: V
					},
					lstm30sByDate: Ge,
					preschoolWristRfByDate: lt,
					nonwearPatches: Je
				}), { activityDaysSaved: ht, historyWriteFailed: pt } = ct, { failures: gt } = He, mt = await an(i, Xe, Ke, a, n, "CAPSENSE"), dt = await dr({
					label: "binary",
					wasmApi: c,
					cancelWasmOperation: p,
					signal: n,
					onProgress: t,
					scope: i,
					fileId: Xe,
					nightDates: ze,
					sourceCaps: Le,
					options: r
				}), wt = [
					pt && "Algorithm version history could not be fully saved (storage may be full). Scoring data is intact.",
					rt && `Sleep window detection (HDCZA) could not place auto-markers for ${e.name}: ${rt.replace(/\.$/, "")}. Scoring data is intact.`,
					Ye && "GGIR Part 4/5 daily summaries could not be saved. Scoring data is intact.",
					!mt && "Some CAPSENSE nonwear periods could not be saved. Nonwear coverage may be incomplete.",
					gt.ggirCountScoreFailed && "GGIR Sadeh/Cole sleep scoring could not be computed from zero-crossing counts. Other count-based sleep/wake scoring is intact.",
					pe && fn(we),
					!pe && be,
					ne && (ie ? `MIMS_UNIT was not computed: ${ie} Other derived activity metrics are intact.` : "MIMS_UNIT could not be computed by the current actours/WASM build. Other derived activity metrics are intact."),
					re && "MIMS_UNIT output was not stored because it did not align with the 5 s GGIR epoch grid.",
					gt.detachFailed && "DETACH temperature-based nonwear detection failed for one or more days. Choi nonwear is intact.",
					null != ct.detachSkipped && Ie[ct.detachSkipped] + " Choi nonwear is intact.",
					gt.hasibVariantFailed && "One or more optional GGIR HASIB variant outputs could not be computed. Base scoring is intact.",
					gt.algorithmCubeFailed && "Some algorithm-output harness variants could not be computed. Standard scoring is intact.",
					gt.algorithmCubeSkipped > 0 && `${gt.algorithmCubeSkipped} algorithm-output harness variant(s) could not be computed. Standard scoring is intact.`,
					dt.dayFailures > 0 && `Scored variants could not be precomputed for ${String(dt.dayFailures)} day(s). Reimport the file to retry.`
				].filter(Boolean).join(" ");
				return t?.({
					phase: "complete",
					percent: 100,
					message: "Processing complete",
					...wt ? { warning: wt } : {}
				}), {
					fileId: Xe,
					availableDates: ze,
					activityDaysSaved: ht,
					sourceType: d,
					nonwearSources: [
						"Choi",
						...Ke.length > 0 && mt ? ["CAPSENSE"] : [],
						...ct.detachRan && !gt.detachFailed ? ["DETACH"] : []
					]
				};
			}(e, r, o, f, p, w);
			if (N.endsWith(".rdata") || N.endsWith(".rda")) return Zt(e, r, o, f, p, w?.wasmApi, w?.cancelWasmOperation);
			if (N.endsWith(".csv") && "ggir_5s_meta" === t) throw new Q("GGIR results are imported as the GGIR output folder (config.csv and meta/basic) or as a Part 1 meta RData file. A GGIR CSV table is not imported.");
			if (N.endsWith(".csv") && "mims_metrics" === t) return Kt(e, n, a ?? {}, r, o, p, w?.wasmApi);
			const P = p.head, H = await Le(e, w?.wasmApi ?? R(), P), V = null === H && function(e) {
				return e in F;
			}(W = t) && "mapped_csv" === F[W].supportMode && N.endsWith(".csv");
			var W;
			v(o, "before preparing local input");
			const j = V ? await St(e, n, a ?? {}, o) : e;
			v(o, "after preparing local input");
			const X = V ? 0 : n;
			v(o, "before sniffing local input");
			const Y = await U(j, P);
			v(o, "after sniffing local input");
			const Z = Y === s.GENEACTIV || Y === s.GENEACTIV_BIN || "geneactiv" === t;
			if (Z && !D && await Gt(j, o, P)) throw new Error("GeneActiv epoch-compressed CSV files are not supported. Please use the original raw GeneActiv .csv or .bin file.");
			const K = ye(w?.wasmApi ?? R()), q = w?.cancelWasmOperation ?? (() => {
				E(K);
			}), ee = Ge(e) && !e.aw5Subject.wholeDatabase ? e.aw5Subject : null, ie = "actiware_csv" === H ? await Fe(e) : null, oe = async () => m(ee && Ge(e) ? await (async (e) => (r?.({
				phase: "reading",
				percent: -1,
				message: "Reading the recording from the database..."
			}), ze(e.aw5Subject, await e.loadAw5(o))))(e) : ie ?? e, (e) => {
				r?.({
					phase: "reading",
					percent: 15 * e,
					message: `Computing file hash... ${Math.round(100 * e)}%`
				});
			}, o, {
				start: () => K.sha256Start(),
				feed: (e) => K.sha256Feed(g(e, [e.buffer])),
				finish: () => K.sha256Finish()
			}), pe = async (e) => await ae(e.fullHash, A) ?? await ge(e.prefixHash, A, e.fullHash), we = (e, t) => {
				r?.({
					phase: "complete",
					percent: 100,
					message: "File already imported"
				});
				const n = t.availableDates;
				return t.sourceType || console.warn("[local-processing] Existing import source type is missing; using the compatibility fallback."), {
					alreadyImported: !0,
					fileId: e,
					availableDates: n,
					sourceType: t.sourceType ?? L.EPOCHS_60S
				};
			}, be = await me(e.name, A), Se = !(ee || j !== e || H || be && "incomplete" !== be.ingestState || await ge(await u(e, P), A));
			let Ce = Se ? null : await oe();
			if (Ce) {
				const e = await pe(Ce);
				if (e?.id) return we(e.id, e);
			}
			const Be = e.size, Ue = await me(e.name, A);
			if (Ue && "incomplete" !== Ue.ingestState && (!Ge(e) || Ue.aw5RecordingKey !== e.aw5Subject.recordingKey)) throw new ce();
			r?.({
				phase: "reading",
				percent: 15,
				message: "Reading file..."
			});
			const xe = function(e) {
				const t = e.name.toLowerCase();
				return t.endsWith(".tar.bz2") || t.endsWith(".tbz2");
			}(j);
			v(o, "before checking local input shape");
			const He = !Z && !V && await async function(e, t) {
				const n = (await c(e, 1024, t)).split(/\r?\n/, 1)[0]?.trim().toLowerCase() ?? "";
				return dn.has(n);
			}(j, P);
			v(o, "after checking local input shape");
			const Ve = "actigraph" === t && N.endsWith(".csv") && null === Y;
			if (!(H || xe || He || Z || V || Ve || null !== Y)) throw new Error([
				"Could not identify file format.",
				"Use Data Settings > CSV Import for mapped vendor, GGIR, MIMS, or generic activity CSV exports.",
				"Native local ingest supports ActiGraph CSV/GT3X, GENEActiv raw CSV/.bin, GGIR meta RData, NHANES PAX80 archives, and recognized generic CSV mappings.",
				"Condor ActLumus/ActTrust TXT files require the server parser today."
			].join(" "));
			const We = Y === s.ACTIGRAPH_RAW, je = !H && !xe && (Z || We || He || j.size >= 15e8);
			let Xe;
			Xe = je ? !He && !We || Z ? D ? L.GENEACTIV_BIN : L.GENEACTIV_RAW_CSV : L.ACTIGRAPH_RAW_CSV : "actigraph" === t && N.endsWith(".csv") && !V ? L.ACTIGRAPH_EPOCHED_CSV : L.EPOCHS_60S;
			const Ye = H ? $e(H) : void 0, Ze = ue({ sourceProfileId: Ye }, he(f?.analysisParadigm)), Ke = Ye ?? Xe, qe = B(Ke);
			if (null == qe || !I(Ke, "source_profile_realization", "local")) throw new Error(`Local processing has no implemented source-profile realization for source type "${Ye ?? Xe}". Use a supported native source or an explicitly implemented mapped import.`);
			const Je = h(Ke, "local"), Qe = "aw5" === H ? "actiwatch_aw5" : "actiware_csv" === H ? "actiware_csv" : xe ? "nhanes" : D ? "geneactiv_bin" : Z ? "geneactiv_csv" : He ? "raw_csv" : We || Ve ? "actigraph_csv" : V ? "epoch_csv" : "generic", et = Ge(e) ? [...ne] : le(Qe, je);
			let tt;
			r?.({
				phase: "reading",
				percent: 15,
				message: "File inspected",
				device: Qe,
				plan: et
			});
			let ot = 0, lt = {
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
			}, gt = null;
			if (H) {
				r?.({
					phase: "parsing",
					percent: 20,
					message: "aw5" === H ? "Reading Actiwatch .AW5 database..." : "Parsing Actiware CSV..."
				});
				const t = ie ? {
					name: e.name,
					size: ie.byteLength,
					arrayBuffer: () => Promise.resolve(ie)
				} : e;
				gt = await Ne(t, H, K, (e, t) => {
					r?.({
						phase: "parsing",
						percent: re("parsing", e),
						message: t
					});
				}, Ze ? f?.actiwareAnalysis ?? {} : void 0, {
					...o ? { signal: o } : {},
					cancel: q
				}, f?.actiwareRestProposal ? {
					proposal: f.actiwareRestProposal,
					nightStartHour: f.nightStartHour,
					nightEndHour: f.nightEndHour
				} : void 0), C = gt.epochSeconds, tt = {
					timestamps_ms: [...gt.timestampsMs],
					axis_y: [...gt.counts],
					axis_x: new Float64Array(gt.counts.length),
					axis_z: new Float64Array(gt.counts.length),
					vector_magnitude: [...gt.counts],
					is_raw: !1,
					sample_frequency: 0,
					header_rows_skipped: 0,
					temperature: []
				};
			} else if (xe) r?.({
				phase: "parsing",
				percent: 5,
				message: "Decompressing and parsing NHANES PAX80 archive..."
			}), v(o, "before parsing PAX80 input"), tt = await Zn(e, (e) => {
				r?.({
					phase: "parsing",
					percent: 5 + .4 * e.percent,
					message: e.message
				});
			}), v(o, "after parsing PAX80 input");
			else if (He) r?.({
				phase: "parsing",
				percent: 30,
				message: "Parsing headerless tri-axial CSV with synthesized timestamps..."
			}), v(o, "before parsing headerless tri-axial input"), tt = await async function(e, t = 100, n) {
				if (e.size > 536870912) throw new Error("Headerless tri-axial CSV fallback only supports files up to 512 MB");
				let r = 65536, i = Array.from({ length: 5 }, () => new Float64Array(r));
				const s = function(e) {
					if (e.lastModified > 0) {
						const t = new Date(e.lastModified);
						return Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
					}
					return Date.UTC(2e3, 0, 1);
				}(e), a = 1e3 / t;
				let o = 0, l = null;
				const c = (e) => {
					if (null === l) {
						if (l = e.trim().toLowerCase(), !dn.has(l)) throw new Error(`Unsupported tri-axial CSV header: ${l || "<empty>"}`);
						console.warn(`[headerless-triaxial] No sample rate or timestamps in this file; assuming ${t} Hz. Counts and the epoch timeline will be wrong if the true recording rate differs.`);
						return;
					}
					const n = e.trim();
					if (!n) return;
					const c = n.split(",");
					if (c.length < 3) return;
					const u = wn(c[0] ?? ""), f = wn(c[1] ?? ""), h = wn(c[2] ?? "");
					if (null === u || null === f || null === h) return;
					o === r && (r *= 2, i = i.map((e) => {
						const t = new Float64Array(r);
						return t.set(e), t;
					}));
					const [p, g, m, d, w] = i;
					p[o] = s + o * a, g[o] = u, m[o] = f, d[o] = h, w[o] = Math.hypot(u, f, h), o += 1;
				}, u = new TextDecoder(), f = async (t, r) => {
					if (n?.throwIfAborted(), t >= e.size) return r + u.decode();
					const i = await e.slice(t, Math.min(t + yn, e.size)).arrayBuffer(), s = (r + u.decode(i, { stream: !0 })).split(/\r?\n/u), a = s.pop() ?? "";
					for (const e of s) c(e);
					return await G(n), f(t + yn, a);
				};
				if (c(await f(0, "")), null === l) throw new Error("Unsupported tri-axial CSV header: <empty>");
				if (0 === o) throw new Error("No valid tri-axial samples found in headerless CSV");
				const [h, p, g, m, d] = i.map((e) => e.slice(0, o));
				return {
					timestamps_ms: h,
					axis_x: p,
					axis_y: g,
					axis_z: m,
					vector_magnitude: d,
					is_raw: !0,
					sample_frequency: t,
					header_rows_skipped: 1,
					temperature: []
				};
			}(e, 100, o), v(o, "after parsing headerless tri-axial input"), console.warn("[local-processing] Imported headerless tri-axial CSV without source timestamps; using synthetic 100 Hz timestamps anchored to the file modified date.");
			else if (j.size >= 15e8 || D || We || Y === s.GENEACTIV && j.size > $()) {
				const e = Y ?? ("geneactiv" === t ? s.GENEACTIV : s.ACTIGRAPH_RAW), n = e === s.GENEACTIV_BIN ? "GENEActiv .bin" : e === s.GENEACTIV ? "GENEActiv raw CSV" : "ActiGraph raw CSV";
				r?.({
					phase: "parsing",
					percent: 0,
					message: `Streaming ${n}...`
				});
				const i = await z(K, (t, n) => d(j, e, (e) => {
					if (n(), "finalize" === e.stage) {
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
						], i = t.findIndex((t) => t === e.finalizeStage), s = e.finalizeFraction ?? 0;
						r?.({
							phase: "epoching",
							percent: i < 0 ? -1 : re("epoching", (i + s) / t.length),
							message: `Computing epochs, counts and GGIR metrics (${e.epochsEmitted.toLocaleString()} epochs)` + (i < 0 ? "..." : `: ${n[i] ?? ""}${i < 2 ? ` ${String(Math.round(100 * s))}%` : "..."}`)
						});
						return;
					}
					r?.({
						phase: "parsing",
						percent: .45 * e.percent,
						message: `Streaming: ${Math.round(e.percent)}% (${e.epochsEmitted.toLocaleString()} epochs)`
					});
				}, 0, o, C, t, Se, S.csvText), {
					ms: T,
					label: "streamParseRaw",
					signal: o,
					cancel: q
				});
				ot = i.rowsDropped, i.contentHashes && (Ce ??= i.contentHashes), ot > 0 && console.warn("[local-processing] The WASM stream parser rejected malformed source rows; review the in-app import warning.");
				const a = b(i.table);
				tt = {
					timestamps_ms: a.timestamp_ms,
					axis_y: a.axis_y,
					axis_x: a.axis_x,
					axis_z: a.axis_z,
					vector_magnitude: a.vector_magnitude,
					is_raw: !1,
					sample_frequency: i.sampleFrequency,
					header_rows_skipped: i.headerRowsSkipped,
					temperature: a.temperature
				}, lt = {
					tsMs: i.timestampsMs5s,
					enmo: i.enmo5s,
					anglez: i.anglez5s,
					anglex: i.anglex5s,
					angley: i.angley5s,
					invalid: i.ggirInvalid5s,
					...i.ggirZeroCrossings5s ? { zeroCrossings5s: i.ggirZeroCrossings5s } : {},
					nonwear: i.ggirNonwear5s,
					mimsUnit: i.mimsUnit,
					mimsUnitX: i.mimsUnitX,
					mimsUnitY: i.mimsUnitY,
					mimsUnitZ: i.mimsUnitZ,
					zeroCrossingX60s: i.zcx60s,
					zeroCrossingY60s: i.zcy60s,
					zeroCrossingZ60s: i.zcz60s
				};
			} else {
				const t = await l(j, (e) => {
					r?.({
						phase: "reading",
						percent: 15 + .15 * e.percent,
						message: `Reading: ${Math.round(e.percent)}%`
					});
				}, o, K, q, Se);
				Ce ??= t, r?.({
					phase: "parsing",
					percent: 30,
					message: "Parsing CSV..."
				});
				const n = Z ? "parseGeneactivCsvBuffered" : "parseActigraphCsvBuffered";
				tt = await z(K, (e) => Z ? e.parseGeneactivCsvBuffered() : e.parseActigraphCsvBuffered(X), {
					ms: T,
					label: n,
					signal: o,
					cancel: q
				}).catch((t) => {
					throw _(t, o, n), t instanceof Error ? fe(e, t) : t;
				}), Z && tt.is_raw && (tt.sample_frequency = await vt(j, s.GENEACTIV, o, P));
			}
			if (v(o, "after parse"), 0 === tt.timestamps_ms.length) throw fe(e, "No activity observations were parsed. Check the input format and import again.");
			if (!tt.is_raw) for (let s = 0; s < tt.timestamps_ms.length; s += 1) {
				const e = tt.timestamps_ms[s];
				if (!Number.isFinite(e) || s > 0 && e <= tt.timestamps_ms[s - 1]) throw new Error("The file's timestamps are out of order or repeated.");
			}
			if (!tt.is_raw && !gt && 0 === lt.tsMs.length) {
				const e = await te(tt.timestamps_ms.map((e) => e / 1e3), null, K);
				if (null === e || e !== C) throw new Error(`Source count cadence is ${String(e ?? "unknown")} seconds; the selected grid is ${String(C)} seconds. Select the matching epoch length and import again.`);
			}
			if (Se) {
				Ce ??= await oe();
				const e = await pe(Ce);
				if (e?.id) return we(e.id, e);
			}
			if (!Ce) throw new Error("local import lost its content hash");
			const { prefixHash: mt, fullHash: dt } = Ce;
			let wt = tt.timestamps_ms;
			const It = V ? j.eventMarkerRows : void 0, kt = gt ? gt.eventMarkerInstantsSec : It ? un(It, wt) : null;
			let Mt = tt.axis_x, zt = tt.axis_y, Nt = tt.axis_z, Pt = tt.vector_magnitude;
			const Ht = tt.temperature, Xt = void 0 === tt.tz_jump ? await Et(K, wt) : tt.tz_jump ? ut : null;
			Xt && (console.warn("[local-processing] A possible recording time-zone discontinuity was detected."), r?.({
				phase: "parsing",
				percent: 30,
				message: "Checking time consistency...",
				warning: Xt
			}));
			let Qt = null, tn = null, on = null, ln = /* @__PURE__ */ new Map(), cn = 0, hn = null, mn = null, bn = null, vn = !1, _n = null, An = !1, Sn = null, Cn = !1, En = !1, In = null;
			if (tt.is_raw && tt.sample_frequency > 0 && 0 === lt.tsMs.length) {
				r?.({
					phase: "epoching",
					percent: 35,
					message: "Computing GGIR metrics (imputation + calibration)..."
				});
				const e = new Float64Array(Mt), t = new Float64Array(zt), n = new Float64Array(Nt), i = new Float64Array(wt), s = tt.sample_frequency, a = await z(K, (r) => r.processRawXyzImputed(i, e, t, n, s, null, C, S.csvText, Ht.length > 0 ? Float64Array.from(Ht) : void 0), {
					ms: T,
					label: "processRawXyzImputed",
					signal: o,
					cancel: q
				});
				a.numGaps > 0 && console.warn("[local-processing] GGIR time-gap imputation was applied before metric computation.");
				const l = a.enmo5s, c = a.anglez5s;
				if (Qt = a.counts, tn = a.firstTsMs, on = a.calibration, cn = (wt[0] ?? a.firstTsMs) / 1e3, ln = await it(K, {
					x: e,
					y: t,
					z: n,
					sampleRate: s,
					epochSeconds: C
				}, o, void 0, q), 0 === a.numGaps) try {
					r?.({
						phase: "scoring",
						percent: 42,
						message: "Running LSTM sleep/wake model..."
					});
					const i = await z(K, (r) => r.lstmSpectralFeatures30s(e, t, n, s), {
						ms: T,
						label: "lstmSpectralFeatures30s",
						signal: o,
						cancel: q
					}), l = await ar({
						data: i.features,
						epochs: i.epochs,
						bins: i.bins,
						channels: i.channels
					}, k.scoreOptions);
					hn = l.scores, mn = l.probabilities, Sn = pn(hn, mn), Sn && console.warn("[local-processing] LSTM output quality requires review; see the in-app import warning."), bn = a.firstTsMs;
				} catch (Ir) {
					_(Ir, o, "LSTM sleep/wake scoring (csv)"), _n = "the local model runtime or its input contract rejected the operation", console.warn("[local-processing] LSTM sleep/wake scoring failed; count-based scoring remains available."), vn = !0;
				}
				else An = !0;
				const u = a.firstTsMs;
				lt = {
					tsMs: await K.uniformTimestamps(u, 5e3, l.length),
					enmo: l,
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
			let Rn = null, Bn = 0, Tn = [], kn = !1, Mn = null, On = !1, Un = !1, Fn = !1, xn = 60 === C && lt.zeroCrossingX60s.length > 0 ? lt.zeroCrossingX60s : null, zn = 60 === C && lt.zeroCrossingY60s.length > 0 ? lt.zeroCrossingY60s : null, Nn = 60 === C && lt.zeroCrossingZ60s.length > 0 ? lt.zeroCrossingZ60s : null;
			if (tt.is_raw && tt.sample_frequency > 0) {
				0 === wt.length ? console.warn("[local-processing] raw CSV has no timestamps — skipping GGIR pipeline") : (Bn = (wt[0] ?? 0) / 1e3, lt.anglez.length > 0 && (Rn = lt.anglez));
				const e = tn ?? (wt.length > 0 ? wt[0] ?? 0 : 0);
				let t = Qt;
				await Oe([
					...wt.length > 0 && 0 === lt.anglez.length ? [{
						name: "anglez5s",
						cost: 1,
						run: async (e, t) => {
							Rn = await z(e, (e) => e.computeAnglez5s(new Float64Array(Mt), new Float64Array(zt), new Float64Array(Nt), tt.sample_frequency), {
								ms: T,
								label: "computeAnglez5s (csv fallback)",
								signal: o,
								cancel: t.cancel
							}).catch((e) => {
								if (_(e, o, "computeAnglez5s (csv fallback)"), Me(e, t)) throw e;
								return console.warn("[local-processing] Angle computation failed for a local CSV import."), null;
							});
						}
					}] : [],
					...null != Qt ? [{
						name: "MIMS",
						cost: 10,
						run: async (t, n) => {
							const r = await async function(e) {
								const t = {
									epochSeconds: 5,
									sourceShape: !0,
									startTimeSeconds: e.startTimeSeconds,
									outputMimsPerAxis: !0
								}, n = e.wasmApi ?? R();
								return gn(n, await z(n, (n) => n.computeMimsUnit(e.x, e.y, e.z, e.sampleRate, t), {
									ms: T,
									label: `computeMimsUnit (${e.label})`,
									signal: e.signal,
									cancel: e.cancelOperation ?? (() => {
										E(n);
									})
								}), e.ggirTimestampsMs);
							}({
								x: new Float64Array(Mt),
								y: new Float64Array(zt),
								z: new Float64Array(Nt),
								sampleRate: tt.sample_frequency,
								ggirTimestampsMs: lt.tsMs,
								startTimeSeconds: e / 1e3,
								label: "csv",
								...o ? { signal: o } : {},
								wasmApi: t,
								cancelOperation: n.cancel
							}).catch((e) => {
								if (_(e, o, "computeMimsUnit (csv)"), Me(e, n)) throw e;
								return console.warn("[local-processing] MIMS computation failed for a local CSV import."), Cn = !0, null;
							});
							r || (En = !Cn), lt.mimsUnit = r?.unit ?? /* @__PURE__ */ new Float64Array(), lt.mimsUnitX = r?.unitX ?? /* @__PURE__ */ new Float64Array(), lt.mimsUnitY = r?.unitY ?? /* @__PURE__ */ new Float64Array(), lt.mimsUnitZ = r?.unitZ ?? /* @__PURE__ */ new Float64Array();
						}
					}, {
						name: "preschool RF",
						cost: 8,
						run: async (e, t) => {
							In = await async function(e) {
								const t = e.wasmApi ?? R();
								try {
									return await z(t, (t) => t.classifyActimetricPreschoolWristRf(e.x, e.y, e.z, e.sampleRate), {
										ms: T,
										label: `classifyActimetricPreschoolWristRf (${e.label})`,
										signal: e.signal,
										cancel: e.pass?.cancel ?? (() => {
											E(t);
										})
									});
								} catch (Ir) {
									if (_(Ir, e.signal, `classifyActimetricPreschoolWristRf (${e.label})`), e.pass && Me(Ir, e.pass)) throw Ir;
									return console.warn("[local-processing] The optional preschool wrist activity classifier was unavailable."), e.onUnavailable?.(), null;
								}
							}({
								x: new Float64Array(Mt),
								y: new Float64Array(zt),
								z: new Float64Array(Nt),
								sampleRate: tt.sample_frequency,
								label: "csv",
								...o ? { signal: o } : {},
								wasmApi: e,
								pass: t,
								onUnavailable: () => {
									Fn = !0;
								}
							});
						}
					}] : [],
					...null == Qt ? [{
						name: "Neishabouri counts",
						cost: 3,
						run: async (e, n) => {
							t = await z(e, (e) => e.neishabouriCounts(new Float64Array(Mt), new Float64Array(zt), new Float64Array(Nt), tt.sample_frequency, C), {
								ms: T,
								label: "neishabouriCounts",
								signal: o,
								cancel: n.cancel
							});
						}
					}] : [],
					...null == xn || null == zn || null == Nn ? [{
						name: "zero-crossing",
						cost: 3,
						run: async (e, t) => {
							const n = await z(e, (e) => e.zeroCrossingCounts(new Float64Array(Mt), new Float64Array(zt), new Float64Array(Nt), tt.sample_frequency, C), {
								ms: T,
								label: "zeroCrossingCounts (csv)",
								signal: o,
								cancel: t.cancel
							}).catch((e) => {
								if (_(e, o, "zeroCrossingCounts (csv)"), Me(e, t)) throw e;
								return console.warn("[local-processing] Zero-crossing computation failed for a local CSV import."), On = !0, null;
							});
							n && (xn ??= n.zcx, zn ??= n.zcy, Nn ??= n.zcz);
						}
					}] : [],
					...Rt(Xe, C) ? [{
						name: "compute30sCountsFromRaw",
						cost: 6,
						run: async (t, n) => {
							Mn = await ht({
								wasmApi: t,
								x: new Float64Array(Mt),
								y: new Float64Array(zt),
								z: new Float64Array(Nt),
								sampleRate: tt.sample_frequency,
								firstTsMs: e,
								timestampsMs: tt.timestamps_ms,
								...o ? { signal: o } : {},
								label: "csv",
								cancelOperation: n.cancel
							}).catch((e) => {
								if (_(e, o, "native 30-second counts (csv)"), Me(e, n)) throw e;
								return console.warn("[local-processing] The native 30-second count pass failed for a local CSV import."), Un = !0, null;
							});
						}
					}] : []
				], {
					primary: K,
					extraWorkers: Te({
						cores: navigator.hardwareConcurrency,
						deviceMemoryGib: y()
					}),
					signal: o,
					cancelOperation: q
				}), r?.({
					phase: "epoching",
					percent: 45,
					message: "Computing Neishabouri activity counts..."
				});
				const n = await K.uniformTimestamps(e, 1e3 * C, t.x.length);
				Ht.length > 0 && (Tn = await qt(K, tt.timestamps_ms, Ht, n, C)), wt = n, Mt = Array.from(t.x), zt = Array.from(t.y), Nt = Array.from(t.z), Pt = Array.from(t.vm);
			} else !tt.is_raw && Ht.length > 0 && (Tn = Array.from(Ht));
			Mt = await rt(K, Mt, 0), zt = await rt(K, zt, 0), Nt = await rt(K, Nt, 0), Pt = await rt(K, Pt, 2);
			const Dn = {
				vector_magnitude: Pt,
				axis_y: zt,
				axis_x: Mt,
				axis_z: Nt
			}[i];
			Dn || console.warn("[local-processing] Unknown Choi axis configuration; falling back to vector magnitude.");
			const Gn = Dn ?? Pt;
			r?.({
				phase: "scoring",
				percent: 55,
				message: "Running sleep algorithms..."
			});
			const Pn = wt.map((e) => e / 1e3), Ln = "vector_magnitude" !== i ? Gn : void 0, $n = Tn.length > 0, Hn = await ft(K, Pn, zt, Pt, Mt, Nt, Ln, $n ? Tn : void 0, void 0, zn && zn.length === wt.length ? zn : void 0, xn && xn.length === wt.length ? xn : void 0, Nn && Nn.length === wt.length ? Nn : void 0);
			await en(K, Pn, C), Mn && await ct(K, Hn, Mn);
			const Vn = Object.keys(Hn).sort();
			if (0 === Vn.length) throw await Bt(p, "no activity observations"), /* @__PURE__ */ new Error("No activity observations were parsed. Check the input format and import again.");
			const Wn = await yt(Object.entries(Hn), K, {
				core: K,
				storedEpochSeconds: C
			}), jn = 120 !== C && hn && null !== bn ? await At(K, hn, bn, Hn, C) : /* @__PURE__ */ new Map(), Xn = 120 !== C && mn && null !== bn ? await Ct(K, mn, bn, Hn, C) : /* @__PURE__ */ new Map(), Yn = await rn(K, hn, bn), Kn = Ze?.wakeThresholdFromRecording ? gt?.actiwareWakeThreshold ?? null : null, qn = O(K, {
				ms: T,
				signal: o,
				cancel: q
			}), Jn = await pr({
				label: "csv",
				dateGroups: Hn,
				availableDates: Vn,
				countEpochSeconds: C,
				wasmApi: K,
				cancelWasmOperation: q,
				signal: o,
				onProgress: r,
				scorerCore: qn,
				sourceEligibility: qe,
				hasCounts: Je?.has60sCounts ?? !1,
				choiAxis: i,
				ggirConfig: S,
				sourceContentHash: V ? null : dt,
				lstm: {
					byDate: jn,
					probabilityByDate: Xn,
					selection: k.selection,
					options: f
				},
				hasibVariants: nt(f?.hasibVariants, Kn),
				oakleyConfigs: Lt(Kn),
				planHasGgir: et.includes("ggir")
			}), { algorithmResultsByDate: Qn, countsNonwear: er } = Jn;
			r?.(et.includes("ggir") && lt.anglez.length > 0 ? {
				phase: "ggir",
				percent: -1,
				message: "GGIR Parts 3–5 on the 5 s series..."
			} : et.includes("ggir") ? {
				phase: "ggir",
				percent: -1,
				message: "Nonwear masks on each day's grid..."
			} : {
				phase: "nonwear",
				percent: re("nonwear", 1),
				message: "Nonwear masks on each day's grid..."
			});
			const tr = await Yt(p, {
				filename: e.name,
				devicePreset: t,
				epochLengthSeconds: C,
				availableDates: Wn,
				fileHash: mt,
				sourceContentHash: dt,
				sourceSizeBytes: Be,
				source: "local",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				sourceType: Xe,
				ggirPart2Config: S,
				...Ye ? { sourceProfileId: Ye } : {},
				...ee ? { sourceDatabaseFilename: ee.databaseFilename } : {},
				...Ge(e) ? { aw5RecordingKey: e.aw5Subject.recordingKey } : {},
				...gt ? { sourceEpochSeconds: gt.sourceEpochSeconds } : {},
				eventMarkerInstants: kt ? Vn.filter((e) => Hn[e] && Qn[e]).flatMap((e) => Array.from(bt(kt, e))) : [],
				...Bn > 0 || null != gt?.gmtOffsetMinutes ? { recording: {
					...Bn > 0 ? { effectiveTime: (/* @__PURE__ */ new Date(1e3 * Bn)).toISOString() } : {},
					...null != gt?.gmtOffsetMinutes ? { gmtOffsetMinutes: gt.gmtOffsetMinutes } : {}
				} } : {}
			}, qn);
			if ("already_complete" === tr.kind) {
				const e = tr.record.id;
				if (null == e) throw new Error("Completed local import identity is invalid.");
				return r?.({
					phase: "complete",
					percent: 100,
					message: "File already imported"
				}), {
					alreadyImported: !0,
					fileId: e,
					availableDates: tr.record.availableDates,
					sourceType: tr.record.sourceType ?? Xe
				};
			}
			const nr = tr.guard.fileId;
			await Promise.all(pt.map((e) => e.persistIngest({
				fileId: nr,
				native: gt,
				recordingWakeThreshold: Kn,
				db: A,
				beforeWrite: async () => {
					await Ut(p);
				}
			})));
			let rr = !1, ir = null;
			const sr = {};
			for (const [s, l] of Object.entries(Hn)) {
				const e = l.timestamps;
				sr[s] = Ae(await Re(ln, {
					baseTsSec: cn,
					epochTimestampsSec: e,
					epochLenSec: C
				}, K), await Re(er[s] ?? /* @__PURE__ */ new Map(), {
					baseTsSec: e[0] ?? 0,
					epochTimestampsSec: e,
					epochLenSec: C
				}, K), lt.nonwear.length === lt.tsMs.length ? await Ee(lt.nonwear, {
					ggirConfigCsv: S.csvText,
					baseTsSec: (lt.tsMs[0] ?? 0) / 1e3,
					epochTimestampsSec: e,
					epochLenSec: C
				}, K) : {});
			}
			const or = _e("ggir"), lr = await Dt(Qn, Hn, [], or, Object.fromEntries(Vn.map((e) => [e, sr[e] ?? {}])), ke(Xe, Ye), K);
			let cr;
			const ur = lt.invalid.length === lt.anglez.length && lt.anglez.length > 0 ? lt.invalid : null;
			if (lt.anglez.length > 0 && lt.enmo.length > 0 && null === ur && (console.warn("[local-processing] GGIR Part-2 invalid mask missing for a local CSV import; GGIR summaries skipped."), kn = !0), lt.anglez.length > 0 && lt.enmo.length > 0 && null !== ur) {
				const e = (lt.tsMs[0] ?? 0) / 1e3, t = ur, n = await z(K, (n) => n.runGgirFromEpoch({
					source: "raw_csv_stream",
					invalidMask: "ggir_part2"
				}, lt.anglez, lt.enmo, e, t, void 0, S.csvText, se(S.csvText, lt.zeroCrossings5s)).catch((e) => (_(e, o, "runGgirFromEpoch (csv)"), console.warn("[local-processing] GGIR epoch analysis failed for a local CSV import."), kn = !0, null)), {
					ms: T,
					label: "runGgirFromEpoch (csv)",
					signal: o,
					cancel: q
				});
				if (n?.days?.length) {
					const e = Tt(n.days, nr, on, S);
					await Ut(p), await de(e, A, o).catch(() => {
						console.warn("[local-processing] CSV daily-summary persistence failed."), rr = !0;
					}), rr || await xt({
						ggirConfigSha256: S.sha256,
						fileId: nr,
						sourceContentHash: dt,
						sourceSizeBytes: Be,
						identity: () => z(K, (e) => e.getComputeIdentity(), {
							ms: T,
							label: "getComputeIdentity (csv)",
							signal: o,
							cancel: q
						}),
						calibration: on,
						rows: e,
						startedAt: x
					}, A, o);
				}
			}
			const fr = new Map((await J(nr, A)).map((e) => [e.analysisDate, e]));
			if (lt.anglez.length > 0 && null === ur) ir = Jt;
			else if (lt.anglez.length > 0 && null !== ur) {
				et.includes("ggir") && r?.({
					phase: "ggir",
					percent: -1,
					message: "HDCZA sleep window..."
				});
				const e = (lt.tsMs[0] ?? 0) / 1e3;
				ir = await jt(nr, lt.anglez, e, lr, fr, f?.hasptVariant, {
					activity5s: lt.enmo,
					invalid5s: ur,
					ggirConfig: S,
					zeroCrossings5s: lt.zeroCrossings5s,
					...lt.anglex.length > 0 ? { anglex5s: lt.anglex } : {},
					...lt.angley.length > 0 ? { angley5s: lt.angley } : {}
				}, ve(f?.sleepPeriodDetectionConfig, {
					path: "ggir",
					selected: or
				}), sn(f, p.recording), A, o, K, q, p.auditBinding, (e) => {
					cr = e;
				});
			} else null !== Rn && Rn.length > 0 && (ir = Jt);
			const hr = await Ft(K, lt.tsMs, lt.enmo, lt.anglez, {
				anglex: lt.anglex,
				angley: lt.angley,
				sib: cr,
				...ur ? { invalid: ur } : {},
				mimsUnit: lt.mimsUnit,
				mimsUnitX: lt.mimsUnitX,
				mimsUnitY: lt.mimsUnitY,
				mimsUnitZ: lt.mimsUnitZ
			}), gr = In ? await Wt(K, tn ?? lt.tsMs[0] ?? 0, In.classes, In.epochSeconds) : /* @__PURE__ */ new Map(), wr = /* @__PURE__ */ new Map();
			if (gt?.actiwareSleepWake) for (const s of Vn) {
				const e = Hn[s];
				e && Qn[s] && wr.set(s, await Pe(K, gt.actiwareSleepWake, e.timestamps, C));
			}
			const yr = gt ? new Map(Array.from(gt.timestampsMs, (e, t) => [e / 1e3, t])) : null, br = await mr({
				label: "csv",
				dateGroups: Hn,
				availableDates: Vn,
				countEpochSeconds: C,
				wasmApi: K,
				cancelWasmOperation: q,
				signal: o,
				onProgress: r,
				scope: p,
				fileId: nr,
				sourceContentHash: dt,
				scored: Jn,
				sourceEligibility: qe,
				ggir: {
					byDate: hr,
					tsMs: lt.tsMs,
					zeroCrossings5s: lt.zeroCrossings5s
				},
				lstm30sByDate: Yn,
				preschoolWristRfByDate: gr,
				nonwearPatches: sr,
				sourceColumns: (e, t) => {
					const n = wr.get(e) ?? null, r = new Uint8Array(t.timestamps.length);
					if (gt && yr) for (let s = 0; s < t.timestamps.length; s += 1) {
						const e = yr.get(t.timestamps[s] ?? NaN);
						null != e && (r[s] = gt.actiwareInvalidActivityEpochs[e] ?? 0);
					}
					const i = kt ? bt(kt, e) : null;
					return {
						algorithmResults: n ? { [M.ACTIWARE_SLEEP_WAKE]: n.sleep.buffer } : {},
						fields: {
							...n && n.invalid.some((e) => 1 === e) ? { actiwareSleepWakeInvalid: n.invalid.buffer } : {},
							...r.some((e) => 1 === e) ? { actiwareActivityInvalid: r.buffer } : {},
							...gt?.hasOffWristChannel ? { actiwareOffWristChannel: !0 } : {},
							...gt && yr ? De(gt.light, yr, t.timestamps) : {},
							...kt ? { eventMarkers: st(t.timestamps, kt, C).buffer } : {},
							...i && i.length > 0 ? { eventMarkerTimestamps: i.buffer } : {}
						}
					};
				}
			}), { activityDaysSaved: vr, historyWriteFailed: _r } = br, { failures: Ar } = Jn, Sr = await an(p, nr, (gt?.offWristPeriods ?? []).map((e) => ({
				startMs: 1e3 * e.startTimestamp,
				endMs: 1e3 * e.endTimestamp
			})), A, o, "Actiware off-wrist"), Cr = await dr({
				label: "csv",
				wasmApi: K,
				cancelWasmOperation: q,
				signal: o,
				onProgress: r,
				scope: p,
				fileId: nr,
				nightDates: Wn,
				sourceCaps: Je,
				options: f
			}), Er = [
				...gt?.warnings ?? [],
				ot > 0 && `${ot} rows in the source CSV could not be parsed and were skipped. The file may contain corrupt or malformed data.`,
				_r && "Algorithm version history could not be fully saved (storage may be full). Scoring data is intact.",
				!Sr && "Some Actiware off-wrist periods could not be saved. Nonwear coverage may be incomplete.",
				ir && `Sleep window detection (HDCZA) could not place auto-markers for ${e.name}: ${ir.replace(/\.$/, "")}. Scoring data is intact.`,
				rr && "GGIR Part 4/5 daily summaries could not be saved. Scoring data is intact.",
				kn && "GGIR metrics (Parts 1–5) could not be computed for this file. Sleep/wake scoring is intact, but GGIR summaries and activity metrics may be missing.",
				Ar.ggirCountScoreFailed && "GGIR Sadeh/Cole sleep scoring could not be computed from zero-crossing counts. Other count-based sleep/wake scoring is intact.",
				vn && fn(_n),
				!vn && Sn,
				An && "LSTM ONNX sleep/wake scoring was skipped because time-gap imputation changed the raw sample grid.",
				Cn && "MIMS_UNIT could not be computed by the current actours/WASM build. Other derived activity metrics are intact.",
				En && "MIMS_UNIT output was not stored because it did not align with the 5 s GGIR epoch grid.",
				On && "Zero-crossing counts could not be computed for optional GGIR HASIB variants. Base scoring is intact.",
				Un && "Native 30-second counts could not be computed; the 30 s scorers are not available for this file. 60 s scoring is intact.",
				Fn && "The optional preschool wrist activity classes could not be computed. Other scoring is intact.",
				Ar.detachFailed && "DETACH temperature-based nonwear detection failed for one or more days. Choi nonwear is intact.",
				null != br.detachSkipped && Ie[br.detachSkipped] + " Choi nonwear is intact.",
				Ar.hasibVariantFailed && "One or more optional GGIR HASIB variant outputs could not be computed. Base scoring is intact.",
				Ar.algorithmCubeFailed && "Some algorithm-output harness variants could not be computed. Standard scoring is intact.",
				Ar.algorithmCubeSkipped > 0 && `${Ar.algorithmCubeSkipped} algorithm-output harness variant(s) could not be computed. Standard scoring is intact.`,
				Cr.dayFailures > 0 && `Scored variants could not be precomputed for ${String(Cr.dayFailures)} day(s). Reimport the file to retry.`
			].filter(Boolean).join(" ");
			return r?.({
				phase: "complete",
				percent: 100,
				message: "Processing complete",
				...Er ? { warning: Er } : {}
			}), {
				fileId: p.finalizedFileId ?? nr,
				availableDates: Wn,
				activityDaysSaved: vr,
				sourceType: Xe,
				nonwearSources: [
					"Choi",
					...gt && gt.offWristPeriods.length > 0 && Sr ? ["Actiware off-wrist"] : [],
					...br.detachRan && !Ar.detachFailed ? ["DETACH"] : []
				]
			};
		}(e, t, n, r, i, a, w, A, Y, {
			wasmApi: H,
			cancelWasmOperation: V,
			...ee ? {
				gt3xApi: ee.api,
				cancelGt3xOperation: ee.terminate
			} : {}
		});
		ie.alreadyImported && Ze(ie.fileId, {
			db: k,
			resumeIncomplete: !0,
			retryKnownFailures: !1,
			signal: w
		}).catch(() => {});
		const oe = ie.availableDates[0];
		if (void 0 !== oe) {
			const e = { filename: "redacted" };
			ie.alreadyImported || (K.recordFileEvent({
				fileId: ie.fileId,
				analysisDate: oe,
				action: "file_uploaded",
				payload: e
			}, X), K.recordFileEvent({
				fileId: ie.fileId,
				analysisDate: oe,
				action: "file_processed",
				payload: e
			}, X));
		}
		return ie;
	} catch (ie) {
		throw await Bt(Y, "local file ingest failed"), cn(ie, Y);
	} finally {
		q?.(), ee?.terminate(), Z?.terminate();
	}
}
export { wr as processLocalFile };
