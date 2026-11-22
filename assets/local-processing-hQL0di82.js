import { _ as e, g as t, h as n, m as r, v as i } from "./ggir-results-types-e7JA7N7O.js";
import { An as s, Bn as a, Er as o, Fr as l, Ir as c, J as u, Nr as f, On as h, Pr as p, Qn as g, T as m, Tn as d, V as w, _r as y, ar as b, cr as v, dn as _, dr as A, fn as S, hr as C, i as E, ir as I, lr as R, mr as B, n as T, o as M, or as O, p as U, pr as F, rr as x, s as z, un as N, vr as D, wr as G, yr as P, zn as L, zr as $ } from "./background-jobs-C4kUffcM.js";
import { $ as H, Dn as W, Hr as V, J as j, Lr as X, On as Z, R as Y, Rr as K, Wt as q, Zn as J, ct as Q, dr as ee, i as te, ir as ne, l as re, lr as ie, n as se, nn as ae, nr as oe, pr as le, rr as ce, st as ue, tn as fe, u as he, x as pe, zr as ge, zt as me } from "./db-P0fJzp73.js";
import { n as de, s as we, t as ye } from "./local-ggir-hasib-variants-Qy16H-VR.js";
import { D as be, T as ve, _ as _e, c as Ae, h as Se, m as Ce, r as Ee, s as Ie, u as Re } from "./local-nonwear-unified-BtGpQyyE.js";
import { K as Be } from "./local-export-shard-worker-DqLh-J6Z.js";
import { C as Te, _ as ke, b as Me, f as Oe, g as Ue, h as Fe, m as xe, p as ze, v as Ne, y as De } from "./ingest-DzJGDmNH.js";
import { t as Ge } from "./physical-activity-classifier-output-BtWaQyVF.js";
import { computeTensorConsensusForDay as $e, cubeRunsOnGrid as He, finalizeAndAuditScoredVariantWarm as We, rewarmFileScoredVariants as Ve, runAlgorithmCubeForDay as je, scoreBuiltinGgirSadehColeForDay as Xe, scoreCountBasedHasibVariantsForDay as Ze, sleepWakeToPersistedOutputs as Ye, t as Ke, warmFileScoredVariants as qe, withRecordingWakeThreshold as Je } from "./cube-variants-DAxlYaIU.js";
import { $ as Qe, A as et, B as tt, C as nt, D as rt, G as st, H as at, J as ot, K as lt, L as ct, M as ut, N as ft, O as ht, P as pt, Q as gt, R as mt, S as dt, T as wt, U as yt, V as bt, W as vt, X as _t, Y as At, Z as St, _ as Ct, a as Et, at as It, b as Rt, c as Bt, d as Tt, dt as kt, et as Mt, f as Ot, ft as Ut, g as Ft, h as xt, i as zt, isGeneactivEpochCsv as Nt, j as Dt, k as Gt, l as Pt, m as Lt, n as $t, nt as Ht, o as Wt, ot as Vt, p as jt, processGgirMetaRDataFile as Xt, processMappedMimsCsvFile as Zt, q as Yt, r as Kt, refuseUnimportableGgirRecording as qt, rt as Jt, s as Qt, t as en, tt as tn, u as nn, ut as rn, v as sn, w as an, x as on, y as ln, z as cn } from "./ggir-import-CWRn8vB0.js";
function un(e) {
	return `LSTM ONNX sleep/wake scoring could not be computed for this raw file${e ? ` because ${e}` : ""}. Count-based scoring is intact.`;
}
function fn(e) {
	if (!e || 0 === e.length) return "";
	let t = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY, r = 0;
	for (const i of e) t = Math.min(t, i), n = Math.max(n, i), r += i;
	return ` (sleep probability min=${t.toFixed(3)}, mean=${(r / e.length).toFixed(3)}, max=${n.toFixed(3)})`;
}
function hn(e, t) {
	if (!e || 0 === e.length) return null;
	let n = 0;
	for (const r of e) n += r ? 1 : 0;
	return 0 === n ? `LSTM ONNX sleep/wake scoring produced an all-wake result${fn(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : n === e.length ? `LSTM ONNX sleep/wake scoring produced an all-sleep result${fn(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : null;
}
async function pn(e, t, n) {
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
function gn(e) {
	const t = {
		skipRows: e.skipRows,
		columnMapping: e.columnMapping ?? {},
		...void 0 === e.preferredActivityColumn ? {} : { preferredActivityColumn: e.preferredActivityColumn }
	};
	return {
		...t,
		settingsHash: ge(t),
		at: e.at ?? (/* @__PURE__ */ new Date()).toISOString()
	};
}
a.map((e) => ({
	value: e,
	label: L[e].label
}));
const mn = /* @__PURE__ */ new Set(["x,y,z", "x,y,z,label"]);
function dn(e) {
	const t = e.trim();
	if (0 === t.length) return null;
	const n = Number.parseFloat(t);
	return Number.isFinite(n) ? n : null;
}
const wn = 4194304;
var yn, bn, vn, _n, An, Sn, Cn, En, In, Rn, Bn, Tn, kn = r((e) => {
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
}), Mn = r((e) => {
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
}), On = r((e) => {
	const t = kn(), n = Mn(), r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
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
			return void 0 !== e.length ? "number" != typeof e.length || Z(e.length) ? s(0) : u(e) : "Buffer" === e.type && Array.isArray(e.data) ? u(e.data) : void 0;
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
			case "utf-8": return W(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return 2 * n;
			case "hex": return n >>> 1;
			case "base64": return V(e).length;
			default:
				if (i) return r ? -1 : W(e).length;
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
		if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), Z(n = +n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (Z(r)) return a;
			e[n + a] = r;
		}
		return a;
	}
	function b(e, t, n, r) {
		return j(W(t, e.length - n), e, n, r);
	}
	function v(e, t, n, r) {
		return j(function(e) {
			const t = [];
			for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
			return t;
		}(t), e, n, r);
	}
	function _(e, t, n, r) {
		return j(V(t), e, n, r);
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
		for (let s = t; s < n; ++s) i += Y[e[s]];
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
	function W(e, t) {
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
	function j(e, t, n, r) {
		let i = 0;
		for (; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function X(e, t) {
		return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name;
	}
	function Z(e) {
		return e != e;
	}
	const Y = function() {
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
}), Un = r((e, t) => {
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
}), Fn = r((e, t) => {
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
}), xn = r((e, t) => {
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
}), zn = t({
	bin: () => Cn,
	contributors: () => vn,
	default: () => Tn,
	dependencies: () => In,
	description: () => _n,
	devDependencies: () => Rn,
	directories: () => En,
	license: () => "MIT",
	main: () => An,
	name: () => yn,
	repository: () => Sn,
	scripts: () => Bn,
	version: () => bn
}), Nn = n(() => {
	Tn = {
		name: yn = "seek-bzip",
		version: bn = "2.0.0",
		contributors: vn = [
			"C. Scott Ananian (http://cscott.net)",
			"Eli Skeggs",
			"Kevin Kwok",
			"Rob Landley (http://landley.net)"
		],
		description: _n = "a pure-JavaScript Node.JS module for random-access decoding bzip2 data",
		main: An = "./lib/index.js",
		repository: Sn = {
			type: "git",
			url: "https://github.com/cscott/seek-bzip.git"
		},
		license: "MIT",
		bin: Cn = {
			"seek-bunzip": "./bin/seek-bunzip",
			"seek-table": "./bin/seek-bzip-table"
		},
		directories: En = { test: "test" },
		dependencies: In = { commander: "^6.0.0" },
		devDependencies: Rn = {
			fibers: "^5.0.0",
			mocha: "^8.1.0"
		},
		scripts: Bn = { test: "mocha" }
	};
}), Dn = r((t, n) => {
	var r = Un(), i = Fn(), s = xn(), a = (Nn(), e(zn).default), o = function(e, t) {
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
		var n = new Buffer(4);
		4 === e.read(n, 0, 4) && "BZh" === String.fromCharCode(n[0], n[1], n[2]) || u(l.NOT_BZIP_DATA, "bad magic");
		var i = n[3] - 48;
		(i < 1 || i > 9) && u(l.NOT_BZIP_DATA, "level out of range"), this.reader = new r(e), this.dbufSize = 1e5 * i, this.nextoutput = 0, this.outputStream = t, this.streamCRC = 0;
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
		var t = new i();
		return t.pos = 0, t.readByte = function() {
			return e[this.pos++];
		}, t.seek = function(e) {
			this.pos = e;
		}, t.eof = function() {
			return this.pos >= e.length;
		}, t;
	}, p = function(e) {
		var t = new i(), n = !0;
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
		var r = new i();
		r.delegate = h(e), r.pos = 0, r.readByte = function() {
			return this.pos++, this.delegate.readByte();
		}, r.delegate.eof && (r.eof = r.delegate.eof.bind(r.delegate));
		var s = new i();
		s.pos = 0, s.writeByte = function() {
			this.pos++;
		};
		for (var a = new f(r, s), o = a.dbufSize; !("eof" in r) || !r.eof();) {
			var l = 8 * r.pos + a.reader.bitOffset;
			if (a.reader.hasByte && (l -= 8), a._init_block()) {
				var c = s.pos;
				a._read_bunzip(), t(l, s.pos - c);
			} else {
				if (a.reader.read(32), !n || !("eof" in r) || r.eof()) break;
				a._start_bunzip(r, s), console.assert(a.dbufSize === o, "shouldn't change block size within multistream file");
			}
		}
	}, f.Stream = i, f.version = a.version, f.license = a.license, n.exports = f;
}), Gn = On(), Pn = i(Dn(), 1);
const Ln = 512, $n = new TextDecoder("utf-8");
function Hn(e) {
	for (const t of e) if (0 !== t) return !1;
	return !0;
}
function Wn(e, t, n) {
	let r = t;
	for (; r < n && 0 !== e[r];) r += 1;
	return $n.decode(e.subarray(t, r)).trim();
}
function Vn(e) {
	const t = Wn(e, 124, 136).replace(/\0/g, "").trim();
	return t && Number.parseInt(t, 8) || 0;
}
function jn(e) {
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
function Xn(e, t, n, r, i, s, a, o, l) {
	null !== e && (i.push(e), s.push(t), a.push(n), o.push(r), l.push(Math.hypot(t, n, r)));
}
async function Zn(e, t) {
	if (e.size > 536870912) throw new Error(`PAX80 archive too large (${e.size} bytes); cap is 536870912`);
	t?.({
		percent: 0,
		message: `Decompressing ${e.name}...`
	});
	const n = new Uint8Array(await e.arrayBuffer()), r = globalThis;
	r.Buffer ??= Gn.Buffer;
	const i = function(e, t) {
		let n = new Uint8Array(Math.min(1048576, t)), r = 0;
		return Pn.default.decode(e, {
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
			for (; n + Ln <= e.length;) {
				const r = e.subarray(n, n + Ln);
				if (Hn(r)) break;
				const i = Wn(r, 0, 100), s = Wn(r, 345, 500), a = s ? `${s}/${i}` : i, o = String.fromCharCode(r[156] ?? 0), l = Vn(r), c = n + Ln;
				("\0" === o || "0" === o) && l > 0 && t.push({
					name: a,
					offset: c,
					size: l
				}), n = c + Math.ceil(l / Ln) * Ln;
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
			const d = e.subarray(g.offset, g.offset + g.size), w = $n.decode(d);
			let y = 0, b = !1;
			for (; y <= w.length;) {
				const e = w.indexOf("\n", y), t = -1 === e ? w.length : e, n = w.slice(y, t), m = n.endsWith("\r") ? n.slice(0, -1) : n;
				if (y = -1 === e ? w.length + 1 : e + 1, !m) continue;
				if (!b) {
					if (b = !0, "HEADER_TIMESTAMP,X,Y,Z" !== m.trim()) throw new Error(`Unexpected PAX80 sensor header in ${g.name}: ${m.trim() || "<empty>"}`);
					continue;
				}
				const d = jn(m);
				d && (0 === c && (l = d.timestampMs), u += Math.abs(d.x), f += Math.abs(d.y), h += Math.abs(d.z), c += 1, p += 1, 4800 === c && (Xn(l, u, f, h, r, i, s, a, o), l = null, c = 0, u = 0, f = 0, h = 0));
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
let Yn = null, Kn = "", qn = !1;
function Jn(e) {
	const t = new Uint8Array(e.byteLength);
	return t.set(e), t;
}
function Qn(e) {
	return 1 / (1 + Math.exp(-Math.max(-60, Math.min(60, e))));
}
function er(e, t) {
	const n = Math.max(e, t), r = Math.exp(e - n), i = Math.exp(t - n);
	return i / (r + i);
}
function tr(e) {
	if (e.data instanceof BigInt64Array || e.data instanceof BigUint64Array) throw new Error("LSTM ONNX output must be numeric float/int data, not bigint data");
	return e.data;
}
function nr(e, t) {
	for (const n of t) {
		const t = e[n];
		if (t) return t;
	}
	return null;
}
function rr(e, t, n) {
	const r = new Uint8Array(t);
	for (let i = 0; i < t; i++) r[i] = (e[i] ?? 0) >= n ? 1 : 0;
	return r;
}
function ir(e) {
	qn || e.env?.wasm && (e.env.wasm.wasmPaths = {
		mjs: "/sleep-scoring-wasm/assets/ort-wasm-simd-threaded-DwpQBVmx.mjs",
		wasm: "/sleep-scoring-wasm/assets/ort-wasm-simd-threaded-DDx2apAW.wasm"
	}, e.env.wasm.numThreads = 1, e.env.wasm.proxy = !0, qn = !0);
}
async function sr(e, t = {}) {
	const n = e.epochs, r = e.bins ?? 30, i = e.channels ?? 4;
	if (n <= 0) return {
		probabilities: /* @__PURE__ */ new Float32Array(),
		scores: /* @__PURE__ */ new Uint8Array()
	};
	const s = n * r * i;
	if (e.data.length !== s) throw new Error(`LSTM feature tensor has ${String(e.data.length)} value(s), expected ${String(s)}`);
	const a = t.ort ?? await import("/sleep-scoring-wasm/assets/ort.bundle.min-BhaRNi-D.mjs");
	ir(a);
	const o = await async function(e) {
		if (e.session) return e.session;
		const t = {
			executionProviders: ["wasm"],
			graphOptimizationLevel: "all"
		};
		if (e.modelBytes) {
			const n = e.ort ?? await import("/sleep-scoring-wasm/assets/ort.bundle.min-BhaRNi-D.mjs");
			return ir(n), n.InferenceSession.create(Jn(e.modelBytes), t);
		}
		const n = ft(e.modelId), r = e.modelUrl ?? n.url, i = e.modelUrl ? `url:${e.modelUrl}` : `selected:${n.id}:${n.version}:${r ?? "no-url"}`;
		return Yn && Kn === i || (Kn = i, Yn = (async () => {
			const i = e.ort ?? await import("/sleep-scoring-wasm/assets/ort.bundle.min-BhaRNi-D.mjs");
			if (ir(i), e.modelUrl) return i.InferenceSession.create(e.modelUrl, t);
			try {
				const e = Jn(await pt(n.id));
				return await i.InferenceSession.create(e, t);
			} catch (s) {
				if (!r) throw s;
				return await i.InferenceSession.create(r, t);
			}
		})().catch((e) => {
			throw Yn = null, e;
		})), Yn;
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
			return null != e ? e : ut(null);
		}(t.threshold), i = nr(e, [
			"sleep_probability",
			"probabilities",
			"probability",
			"probs",
			"logits"
		]) ?? Object.values(e)[0] ?? null;
		if (!i) throw new Error("LSTM ONNX session returned no outputs");
		const s = tr(i), a = i.dims ?? [], o = a.length > 0 ? a[a.length - 1] : void 0;
		if (s.length === n) {
			const e = new Float32Array(n), t = Array.from({ length: Math.min(s.length, 32) }, (e, t) => s[t] ?? 0).every((e) => e >= 0 && e <= 1);
			for (let r = 0; r < n; r++) e[r] = t ? s[r] ?? 0 : Qn(s[r] ?? 0);
			return {
				probabilities: e,
				scores: rr(e, n, r)
			};
		}
		if (s.length >= 2 * n && (2 === o || s.length === 2 * n)) {
			const e = new Float32Array(n);
			for (let t = 0; t < n; t++) e[t] = er(s[2 * t] ?? 0, s[2 * t + 1] ?? 0);
			return {
				probabilities: e,
				scores: rr(e, n, r)
			};
		}
		const l = nr(e, [
			"sleep",
			"sleep_prediction",
			"labels",
			"predictions"
		]);
		if (l) {
			const e = tr(l);
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
function ar(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n += 1) if (!Object.is(e[n], t[n])) return !1;
	return !0;
}
var or = class e {
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
				case "hasib": return "hasib" === t.kind && e.algo === t.algo && JSON.stringify(e.config ?? null) === JSON.stringify(t.config ?? null) && ar(e.data, t.data);
				case "sadeh": return "sadeh" === t.kind && Object.is(e.threshold, t.threshold) && ar(e.activity, t.activity);
				case "coleKripke": return "coleKripke" === t.kind && e.useActilifeScaling === t.useActilifeScaling && ar(e.activity, t.activity);
			}
		}(e.request, t));
	}
	add(t) {
		if (this.find(t)) return;
		const n = { request: t }, r = e.bucket(t), i = this.buckets.get(r);
		i ? i.push(n) : this.buckets.set(r, [n]), this.entries.push(n);
	}
};
function lr(e) {
	return e.medianGapSeconds ? { medianGapSeconds: (t) => e.medianGapSeconds(t) } : {};
}
function cr(e, t, n) {
	const r = e.find(t)?.outcome;
	if (!r) return n();
	if ("error" in r) return Promise.reject(new Error(r.error));
	const { result: i } = r, s = i instanceof Uint8Array ? new Uint8Array(i) : {
		...i,
		sib: new Uint8Array(i.sib)
	};
	return Promise.resolve(s);
}
const ur = {
	csv: "CSV",
	binary: "binary"
};
function fr(e, t, n) {
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
				for (const [e, t] of c) l[e] = At(t);
				for (const [e, t] of u) l.counts30s[e] = At(t);
			}
			return {
				days: t,
				slices: n
			};
		}(e), r = new or(), i = function(e, t) {
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
				...lr(e)
			};
		}(t, r);
		for (const o of n.days) o.ggirSadehCole && await Xe(o.group, e.countEpochSeconds, i).catch(() => {}), o.cube && 120 !== e.countEpochSeconds && await je(o.group, e.countEpochSeconds, o.cube.lstmProbabilities, i, e.lstmSelection).catch(() => {}), o.hasibVariants && await Ze(o.group, o.hasibVariants, i).catch(() => {});
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
			scoreGgirHasibVariant: (e, n, i) => cr(r, {
				kind: "hasib",
				data: e,
				algo: n,
				...i ? { config: i } : {}
			}, () => t.scoreGgirHasibVariant(e, n, i)),
			scoreCountScorerBatch: (e) => Promise.all(e.map(async (e) => {
				try {
					if ("hasib" !== e.kind) throw new Error(`a ${e.kind} request goes through its own method`);
					return { result: await cr(r, e, () => t.scoreGgirHasibVariant(e.data, e.algo, e.config)) };
				} catch (n) {
					return { error: n instanceof Error ? n.message : String(n) };
				}
			})),
			...t.scoreSadeh ? { scoreSadeh: (e, n) => cr(r, {
				kind: "sadeh",
				activity: e,
				threshold: n
			}, () => t.scoreSadeh(e, n)) } : {},
			...t.scoreColeKripke ? { scoreColeKripke: (e, n) => cr(r, {
				kind: "coleKripke",
				activity: e,
				useActilifeScaling: n
			}, () => t.scoreColeKripke(e, n)) } : {},
			scoreConsensus: (e, n) => t.scoreConsensus(e, n),
			...lr(t),
			...t.zeroCrossingCounts ? { zeroCrossingCounts: (e, n, r, i, s) => t.zeroCrossingCounts(e, n, r, i, s) } : {}
		};
		return Ke(a, n.slices), a;
	}({
		base: new Proxy(e.scorerCore, { get: (e, t) => "scoreGgirHasibVariant" === t ? (...t) => e.scoreGgirHasibVariant(t[0], t[1], t[2], l) : Reflect.get(e, t) }),
		days: t,
		countEpochSeconds: n,
		lstmSelection: a.selection,
		batch: (e) => M(i, (t) => t.scoreCountScorerBatch(e.map((e) => "hasib" === e.kind ? {
			...e,
			ggirConfigCsv: l
		} : e)), {
			ms: x,
			label: `scoreCountScorerBatch(${r})`,
			signal: s,
			cancel: o
		}).catch((e) => (v(e, s, `scoreCountScorerBatch(${r})`), console.warn("[local-processing] Batched count scoring failed; scoring contiguous runs."), null))
	});
}
async function hr(e) {
	if (e.countEpochSeconds < w) return async function(e) {
		const { dateGroups: t, availableDates: n, countEpochSeconds: r, wasmApi: i, signal: s, lstm: a } = e, o = w;
		if (!u(o)) throw new Error("The minute lane is not a stored grid.");
		const l = await It(i, t, n, r), c = n.filter((e) => (l[e]?.timestamps.length ?? 0) > 0), f = function(e, t) {
			if (!e) return {
				minute: void 0,
				rows: void 0
			};
			const n = (e.variants ?? de).filter((e) => e !== ye), r = (e) => K(X(e), t) === t, i = n.filter((e) => !r(e)), s = n.filter(r);
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
		}(e.hasibVariants, r), h = (e) => K(Te(e)?.supportedEpochSeconds ?? [], r) === r, p = e.unifiedSleepWakeMethods ?? Me, g = await hr({
			...e,
			dateGroups: l,
			availableDates: c,
			countEpochSeconds: o,
			hasibVariants: f.minute,
			unifiedSleepWakeMethods: p.filter((e) => !h(e)),
			lstm: {
				...a,
				byDate: /* @__PURE__ */ new Map(),
				probabilityByDate: /* @__PURE__ */ new Map()
			}
		}), m = g.failures, d = f.rows, y = await fr(e, n.flatMap((n) => {
			const r = t[n];
			return r && e.hasCounts ? [{
				group: r,
				cube: { lstmProbabilities: a.probabilityByDate.get(n) },
				ggirSadehCole: !1,
				...d ? { hasibVariants: d } : {}
			}] : [];
		}), r), b = {}, _ = {}, A = function(e) {
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
		}(Object.values(g.algorithmResultsByDate)), S = function(e) {
			const t = /* @__PURE__ */ new Map();
			for (const n of e) for (const [e, r] of n) (!t.has(e) || r.nonwear && !t.get(e).nonwear) && t.set(e, r.nonwear ? {
				...r,
				nonwear: /* @__PURE__ */ new Uint8Array(0)
			} : r);
			return t.size > 0 ? t : void 0;
		}(Object.values(g.countsNonwear));
		for (const u of n) {
			const n = t[u];
			if (!n) continue;
			const o = l[u]?.timestamps ?? /* @__PURE__ */ new Float64Array(0), c = 0 === o.length, f = g.algorithmResultsByDate[u] ?? (c ? A : void 0), h = (e) => Vt(i, o, e ?? new Uint8Array(o.length), n.timestamps), p = async (e) => e ? h(e) : null, w = async (e) => {
				const t = {};
				for (const [n, r] of Object.entries(e ?? {})) r && (t[n] = await h(r));
				return t;
			}, C = {
				sadeh_1994_actilife: await h(f?.sadeh_1994_actilife),
				sadeh_1994_original: await h(f?.sadeh_1994_original),
				cole_kripke_1992_actilife: await h(f?.cole_kripke_1992_actilife),
				cole_kripke_1992_original: await h(f?.cole_kripke_1992_original),
				tensor_majority_vote: await h(f?.tensor_majority_vote),
				lstm_sleep_wake: a.byDate.get(u) ?? null,
				nonwear: await h(f?.nonwear),
				nonwearChoi2011: await p(f?.nonwearChoi2011),
				detachNonwear: await p(f?.detachNonwear),
				sadeh_1994_ggir: await p(f?.sadeh_1994_ggir),
				cole_kripke_1992_ggir: await p(f?.cole_kripke_1992_ggir),
				...f?.hasibVariants ? { hasibVariants: await w(f.hasibVariants) } : {},
				...f?.unifiedSleepWake ? { unifiedSleepWake: await w(f.unifiedSleepWake) } : {},
				cubeOutputs: { ...f?.cubeOutputs },
				cubeHistoryOutputs: [...f?.cubeHistoryOutputs ?? []]
			}, E = g.countsNonwear[u] ?? (c ? S : void 0);
			if (E) {
				const e = /* @__PURE__ */ new Map();
				for (const [t, n] of E) e.set(t, n.nonwear ? {
					...n,
					nonwear: await h(n.nonwear),
					elementSeconds: r
				} : n);
				_[u] = e;
			}
			if (e.hasCounts && He(r)) {
				const e = await je(n, r, a.probabilityByDate.get(u), y, a.selection).catch((e) => (v(e, s, `runAlgorithmCubeForDay(${u}, rows)`), console.warn("[local-processing] Local algorithm-output expansion failed for one analysis day."), m.algorithmCubeFailed = !0, null));
				e && (Object.assign(C.cubeOutputs, q(e.algorithmResults, (e) => new Uint8Array(e))), C.cubeHistoryOutputs.push(...e.historyOutputs), m.algorithmCubeSkipped += e.skipped);
			}
			if (d && e.hasCounts) {
				const e = await Ze(n, d, y).catch((e) => (v(e, s, `scoreCountBasedHasibVariantsForDay(${u}, rows)`), console.warn("[local-processing] A HASIB variant failed for one local analysis day."), m.hasibVariantFailed = !0, {}));
				C.hasibVariants = {
					...C.hasibVariants,
					...e
				};
			}
			b[u] = C;
		}
		const C = p.filter(h);
		if (C.length > 0 && e.hasCounts && He(r)) {
			const a = new Map(Object.entries(b).map(([e, t]) => [e, t.unifiedSleepWake]));
			await ht(i, b, t, n, r, s, void 0, e.cancelWasmOperation, e.oakleyConfigs, C);
			for (const [e, t] of Object.entries(b)) t.unifiedSleepWake = {
				...a.get(e),
				...t.unifiedSleepWake
			};
		}
		return {
			algorithmResultsByDate: b,
			countsNonwear: _,
			failures: m,
			choiAxis: g.choiAxis
		};
	}(e);
	const { label: t, dateGroups: n, availableDates: r, countEpochSeconds: i, wasmApi: s, signal: a, onProgress: o, lstm: l } = e, c = e.cancelWasmOperation, f = {
		algorithmCubeFailed: !1,
		algorithmCubeSkipped: 0,
		detachFailed: !1,
		detachFailedDates: /* @__PURE__ */ new Set(),
		ggirCountScoreFailed: !1,
		hasibVariantFailed: !1
	}, h = {}, p = function(e, t, n, r) {
		return {
			choiAxis: e,
			extras: {
				...Qt(r).extras,
				ggirConfigSha256: t,
				countEpochSeconds: String(n),
				continuousCountsRevision: "3"
			}
		};
	}(e.choiAxis, e.ggirConfig.sha256, i, l.options), g = null === e.sourceContentHash ? null : await ue(e.sourceContentHash, p), m = !!g && r.length > 0 && r.every((e) => g.has(e)), d = He(i), y = d && !!e.hasibVariants && e.hasCounts, b = await fr(e, r.flatMap((t) => {
		const r = n[t];
		return r ? [{
			group: r,
			...(m || e.hasCounts) && d ? { cube: { lstmProbabilities: l.probabilityByDate.get(t) } } : {},
			ggirSadehCole: !m && e.hasCounts && (r.zeroCrossingY?.length ?? 0) > 0,
			...e.hasibVariants && e.hasCounts ? { hasibVariants: e.hasibVariants } : {}
		}] : [];
	}), i), _ = async (e, n, r, s) => {
		if (!d) return;
		const o = await je(n, i, l.probabilityByDate.get(e), b, l.selection).catch((n) => (v(n, a, `runAlgorithmCubeForDay(${e}, ${s ? "cached " : ""}${t})`), console.warn("[local-processing] Local algorithm-output expansion failed for one analysis day."), f.algorithmCubeFailed = !0, null));
		o && (r.cubeOutputs = q(o.algorithmResults, (e) => new Uint8Array(e)), r.cubeHistoryOutputs = o.historyOutputs, f.algorithmCubeSkipped += o.skipped);
	};
	if (g && m) {
		o?.({
			phase: "scoring",
			percent: le("scoring", 0),
			message: "Loaded scored results from cache..."
		});
		for (const [e, t] of r.entries()) {
			o?.({
				phase: "scoring",
				percent: le("scoring", e / r.length),
				message: `Algorithm variants, day ${String(e + 1)} of ${String(r.length)}`
			});
			const i = g.get(t), s = n[t];
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
			h[t] = a, await _(t, s, a, !0);
		}
		o?.({
			phase: "nonwear",
			percent: 82,
			message: "Nonwear restored from cache"
		});
	} else if (e.hasCounts) {
		o?.({
			phase: "scoring",
			percent: le("scoring", .5),
			message: "Running sleep algorithms (batch)..."
		});
		const t = await Dt(s, n, r, i, a, c);
		for (const [u, p] of r.entries()) {
			const g = n[p], m = t[u];
			if (!g || !m) continue;
			o?.({
				phase: "nonwear",
				percent: 72 + (u + 1) / r.length * 10,
				message: `Nonwear and algorithm variants, day ${String(u + 1)} of ${String(r.length)}`
			});
			const d = Ae(e.sourceEligibility, g.temperature, g.accelerationG) ? await M(s, (e) => e.detectDetachFromAccelerationG(new Float64Array(g.accelerationG ?? []), new Float64Array(g.temperature ?? [])), {
				ms: x,
				label: `detectDetachFromAccelerationG(${p})`,
				signal: a,
				cancel: c
			}).catch((e) => (v(e, a, `detectDetachFromAccelerationG(${p})`), console.warn("[local-processing] DETACH nonwear detection failed for one local analysis day."), f.detachFailed = !0, f.detachFailedDates.add(p), null)) : null, w = (g.zeroCrossingY?.length ?? 0) > 0 ? await Xe(g, i, b).catch((e) => (v(e, a, `scoreBuiltinGgirSadehColeForDay(${p})`), console.warn("[local-processing] GGIR count-based scoring failed for one local analysis day."), f.ggirCountScoreFailed = !0, null)) : null, y = {
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
			h[p] = y, await _(p, g, y, !1);
		}
	}
	o?.({
		phase: "nonwear",
		percent: le("nonwear", 1),
		message: "Counts-based nonwear detectors..."
	});
	const A = d && e.hasCounts ? await rt(s, n, r, i, a, void 0, c) : {};
	if (y && e.hasibVariants) {
		o?.(e.planHasGgir ? {
			phase: "ggir",
			percent: le("ggir", 0),
			message: "Running GGIR HASIB variants..."
		} : {
			phase: "nonwear",
			percent: le("nonwear", 1),
			message: "Running GGIR HASIB variants..."
		});
		for (const i of r) {
			const r = n[i], s = h[i];
			r && s && (s.hasibVariants = await Ze(r, e.hasibVariants, b).catch((e) => (v(e, a, `scoreCountBasedHasibVariantsForDay(${i}, ${t})`), console.warn("[local-processing] A HASIB variant failed for one local analysis day."), f.hasibVariantFailed = !0, {})));
		}
	}
	for (const u of r) {
		const e = h[u];
		e && (e.tensor_majority_vote = await $e(e, s));
	}
	if (d && e.hasCounts && await ht(s, h, n, r, i, a, void 0, c, e.oakleyConfigs, e.unifiedSleepWakeMethods), !m && null !== e.sourceContentHash) {
		const t = /* @__PURE__ */ new Map();
		for (const e of r) {
			const n = h[e];
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
		Q(e.sourceContentHash, p, t).catch(() => {
			console.warn("[local-processing] Scored-cache persistence failed.");
		});
	}
	return {
		algorithmResultsByDate: h,
		countsNonwear: A,
		failures: f,
		choiAxis: e.choiAxis
	};
}
function pr(e, t, n, r, i) {
	const { fileId: a, ggir: o } = e, l = o.byDate.get(t), c = e.lstm30sByDate.get(t), u = e.sourceColumns?.(t, n) ?? {}, f = r.sadeh_1994_actilife.buffer, h = r.sadeh_1994_original.buffer, p = r.cole_kripke_1992_actilife.buffer, g = r.cole_kripke_1992_original.buffer, m = r.tensor_majority_vote.buffer, d = r.lstm_sleep_wake?.buffer, w = r.detachNonwear?.buffer, y = r.nonwear.buffer, b = r.sadeh_1994_ggir?.buffer, v = r.cole_kripke_1992_ggir?.buffer, _ = e.preschoolWristRfByDate.get(t)?.buffer, A = Ye(r.hasibVariants), S = Ye(r.unifiedSleepWake), C = me(r.cubeHistoryOutputs), E = (e) => {
		const t = n[e];
		return t && t.length > 0 ? { [e]: new Float64Array(t).buffer } : {};
	};
	return {
		day: {
			fileId: a,
			date: t,
			timestamps: new Float64Array(n.timestamps).buffer,
			axisY: new Float64Array(n.axisY).buffer,
			vectorMagnitude: new Float64Array(n.vectorMagnitude).buffer,
			...n.axisX && n.axisX.length > 0 ? { axisX: new Float64Array(n.axisX).buffer } : {},
			...n.axisZ && n.axisZ.length > 0 ? { axisZ: new Float64Array(n.axisZ).buffer } : {},
			...E("mimsUnit"),
			...E("mimsUnitX"),
			...E("mimsUnitY"),
			...E("mimsUnitZ"),
			...c && c.timestamps.length > 0 && c.scores.length === c.timestamps.length ? {
				lstmTimestamps30s: new Float64Array(c.timestamps).buffer,
				lstmSleepWake30s: new Uint8Array(c.scores).buffer
			} : {},
			...l && l.timestamps.length > 0 ? {
				ggirTimestamps: new Float64Array(l.timestamps).buffer,
				ggirEnmo: new Float64Array(l.enmo).buffer,
				ggirAnglez: new Float64Array(l.anglez).buffer,
				...W(l.timestamps, o.tsMs, o.zeroCrossings5s),
				...l.anglex ? { ggirAnglex: new Float64Array(l.anglex).buffer } : {},
				...l.angley ? { ggirAngley: new Float64Array(l.angley).buffer } : {},
				...l.sib ? { ggirSib: new Uint8Array(l.sib).buffer } : {},
				...l.invalid ? { ggirInvalid: new Uint8Array(l.invalid).buffer } : {},
				...l.mimsUnit ? { mimsUnit: new Float64Array(l.mimsUnit).buffer } : {},
				...l.mimsUnitX ? { mimsUnitX: new Float64Array(l.mimsUnitX).buffer } : {},
				...l.mimsUnitY ? { mimsUnitY: new Float64Array(l.mimsUnitY).buffer } : {},
				...l.mimsUnitZ ? { mimsUnitZ: new Float64Array(l.mimsUnitZ).buffer } : {}
			} : {},
			algorithmResults: {
				...f.byteLength > 0 ? { [V.SADEH_1994_ACTILIFE]: f } : {},
				...h.byteLength > 0 ? { [V.SADEH_1994_ORIGINAL]: h } : {},
				...p.byteLength > 0 ? { [V.COLE_KRIPKE_1992_ACTILIFE]: p } : {},
				...g.byteLength > 0 ? { [V.COLE_KRIPKE_1992_ORIGINAL]: g } : {},
				...m.byteLength > 0 ? { [V.TENSOR_MAJORITY_VOTE]: m } : {},
				...d ? { [V.LSTM_SLEEP_WAKE]: d } : {},
				..._ ? { [Ge]: _ } : {},
				...b ? { [V.SADEH_1994_GGIR]: b } : {},
				...v ? { [V.COLE_KRIPKE_1992_GGIR]: v } : {},
				...A.algorithmResults,
				...S.algorithmResults,
				...C.algorithmResults,
				...u.algorithmResults
			},
			algorithmResultHashes: C.algorithmResultHashes,
			...u.fields,
			...Se(n.temperature) ? { temperature: new Float64Array(n.temperature ?? []).buffer } : {},
			nonwearResults: y.byteLength > 0 ? y : null,
			nonwearResultsChoi2011: r.nonwearChoi2011?.buffer ?? null,
			nonwearChoiAxis: e.scored.choiAxis,
			detachNonwear: w ?? null,
			...null != i && "source_not_eligible" !== i ? { nonwearSkipReasons: { [s.DETACH_NONWEAR]: Ee[i] } } : {},
			...e.nonwearPatches[t]
		},
		history: [
			{
				algoKey: V.SADEH_1994_ACTILIFE,
				results: f
			},
			{
				algoKey: V.SADEH_1994_ORIGINAL,
				results: h
			},
			{
				algoKey: V.COLE_KRIPKE_1992_ACTILIFE,
				results: p
			},
			{
				algoKey: V.COLE_KRIPKE_1992_ORIGINAL,
				results: g
			},
			{
				algoKey: V.TENSOR_MAJORITY_VOTE,
				results: m
			},
			...d ? [{
				algoKey: V.LSTM_SLEEP_WAKE,
				results: d
			}] : [],
			..._ ? [{
				algoKey: Ge,
				results: _
			}] : [],
			{
				algoKey: V.CHOI_2011_NONWEAR,
				results: y
			},
			...w ? [{
				algoKey: V.DETACH_NONWEAR,
				results: w
			}] : [],
			...b ? [{
				algoKey: V.SADEH_1994_GGIR,
				results: b
			}] : [],
			...v ? [{
				algoKey: V.COLE_KRIPKE_1992_GGIR,
				results: v
			}] : [],
			...A.historyOutputs,
			...S.historyOutputs,
			...r.cubeHistoryOutputs ?? []
		]
	};
}
async function gr(e) {
	const { label: t, dateGroups: n, availableDates: r, wasmApi: i, signal: s, onProgress: a, fileId: o } = e, l = e.scored.algorithmResultsByDate, c = r.flatMap((t) => {
		const r = n[t], i = l[t];
		return r && i ? [{
			date: t,
			group: r,
			algo: i,
			detachSkip: null != i.detachNonwear ? null : e.scored.failures.detachFailedDates.has(t) ? "computation_failed" : Re(e.sourceEligibility, r.temperature, r.accelerationG)
		}] : [];
	}), u = c.some(({ algo: e }) => null != e.detachNonwear), f = c.reduce((e, { detachSkip: t }) => "no_finite_temperature" === t || "no_acceleration_g" === t ? t : e, null), h = /* @__PURE__ */ new Map();
	for (const { date: y, group: b, algo: v, detachSkip: _ } of c) h.set(y, await te(pr(e, y, b, v, _).day, i));
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
			return new Set(await Rt(e, s, i));
		} catch {
			return console.warn("[local-processing] Circadian coverage could not be computed for this file."), /* @__PURE__ */ new Set();
		}
	}(o, r, n, e.ggir.byDate, i);
	a?.({
		phase: "storing",
		percent: le("storing", 0),
		message: "Saving to local database..."
	});
	const g = Lt({
		scope: e.scope,
		fileId: o,
		sourceContentHash: e.sourceContentHash,
		signalDates: p,
		onChunk: (e, t, n) => a?.({
			phase: "storing",
			percent: le("storing", xt(e, t, n, r.length)),
			message: `Saving days ${String(e)}–${String(t)} of ${String(r.length)}`
		})
	});
	for (const { date: y, group: v, algo: _, detachSkip: A } of c) {
		b(s, `saveActivityDay ${y}`);
		const { day: t, history: n } = pr(e, y, v, _, A);
		await g.add(t, n, h.get(y));
	}
	await g.flush();
	const { saved: m, activityFailed: d, historyFailed: w } = g.state;
	if (d || m !== r.length || 0 === m) throw await Ct(e.scope, `${t} ingest: no ActivityDays could be saved`), /* @__PURE__ */ new Error("Could not save any activity data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return {
		activityDaysSaved: m,
		historyWriteFailed: w,
		detachRan: u,
		detachSkipped: f
	};
}
async function mr(e) {
	const t = await qe(e.fileId, e.nightDates, e.sourceCaps, e.onProgress, e.scope.db, e.signal, e.wasmApi, e.cancelWasmOperation, e.options?.scoredVariantNarrowing);
	return b(e.signal, `before completing ${ur[e.label]} ingest`), await We(() => Ft(e.scope), e.fileId, t, e.scope.auditBinding), t;
}
async function dr(e, t, n, r, i = "vector_magnitude", s, a, u) {
	b(a, "processLocalFile"), qt(e, r);
	const w = U(), { username: k, selectedStudyId: W, sensorLocation: V, participantLaterality: X } = g().scoring(), K = J.captureWorkspaceBinding(w, {
		username: k,
		studyId: W,
		signal: a
	}), q = {
		db: w,
		signal: a,
		attemptId: m(),
		auditBinding: K,
		placement: {
			bodySite: u?.sensorLocation ?? V,
			laterality: X
		},
		ingestProvenance: gn({
			skipRows: n,
			columnMapping: s,
			...void 0 === u?.preferredActivityColumn ? {} : { preferredActivityColumn: u.preferredActivityColumn }
		})
	};
	let Q, te, ue;
	try {
		if (b(a, "before acquiring local ingest workers"), e.name.toLowerCase().endsWith(".gt3x") && e.size > 268435456) throw new Error(`This GT3X file is too large to process (${String(Math.ceil(e.size / 2 ** 20))} MiB; the limit is ${String(256)} MiB).`);
		const g = e.name.toLowerCase().endsWith(".gt3x"), m = ne(e) ? O(a) : void 0, k = m?.controller;
		te = m?.release, k || (Q = p({ singleThread: g }));
		const U = k ? T(k.signal) : Q.api, W = k ? () => k.abort() : Q.terminate;
		ue = g ? f() : void 0;
		const V = e.name.toLowerCase(), X = V.endsWith(".rdata") || V.endsWith(".rda") ? void 0 : await G(e).catch(() => {});
		X && (q.head = X), q.recording = an(await on(e, a, U, q.head), q.placement);
		const ge = await async function(e, t, n, r, i = "vector_magnitude", s, a, u, f, p) {
			if (!f) throw new Error("Local ingest persistence scope is missing.");
			const g = f.db, m = u?.ggirConfig ?? await nt(g);
			let w = Bt(u?.countEpochSeconds);
			const T = Pt(u), k = (/* @__PURE__ */ new Date()).toISOString();
			if (e.size < 100) throw ce(e, `File appears to be empty (size: ${e.size} bytes). Please select a valid activity data file.`);
			const O = e.name.toLowerCase(), U = O.endsWith(".bin");
			if (O.endsWith(".gt3x")) return async function(e, t, n, r, i, s) {
				if (!i) throw new Error("Local ingest persistence scope is missing.");
				const a = i.db, o = r?.ggirConfig ?? await nt(a);
				b(n, "processLocalRawBinaryFile");
				const u = (/* @__PURE__ */ new Date()).toISOString(), f = we(s?.wasmApi ?? l()), p = s?.gt3xApi, g = s?.cancelGt3xOperation;
				if (!p || !g) throw new Error("GT3X processing worker is unavailable.");
				const m = s?.cancelWasmOperation ?? (() => {
					c(f);
				}), d = h.GT3X_BINARY;
				if (!S(d, "source_profile_realization", "local")) throw new Error(`Local processing has no implemented source-profile realization for source type "${d}".`);
				const w = "gt3x", y = "GT3X", A = Bt(r?.countEpochSeconds), C = Pt(r), I = "gt3x", R = ee(I, !0);
				t?.({
					phase: "reading",
					percent: 0,
					message: `Reading ${y} file...`,
					device: I,
					plan: R
				}), b(n, `before reading ${y} binary`);
				const B = await e.arrayBuffer();
				b(n, `after reading ${y} binary`);
				const { prefixHash: T, fullHash: k } = await P(B, (e) => {
					t?.({
						phase: "reading",
						percent: 15 * e,
						message: `Computing file hash... ${Math.round(100 * e)}%`
					});
				}, n, {
					start: () => f.sha256Start(),
					feed: (e) => f.sha256Feed($(e, [e.buffer])),
					finish: () => f.sha256Finish()
				}), O = e.size, U = await re(k, a) ?? await he(T, a, k);
				if (U?.id) {
					t?.({
						phase: "complete",
						percent: 100,
						message: "File already imported"
					});
					const e = U.availableDates;
					return {
						alreadyImported: !0,
						fileId: U.id,
						availableDates: e,
						sourceType: d
					};
				}
				const F = await pe(e.name, a);
				if (F && "incomplete" !== F.ingestState) throw new se();
				let z, D, G, L, H, W, V, X, K, q, J;
				t?.({
					phase: "parsing",
					percent: -1,
					message: "Parsing GT3X binary and computing epochs, counts and GGIR metrics..."
				});
				let Q, te, ne, ie, ae, oe = !1, le = !1, ce = null, ue = null, fe = null, ge = null, me = null, de = !1, ye = null, Ae = null, Se = null, Re = null;
				const Te = await M(p, (e) => e.processGt3xFull($(B, [B]), A, o.csvText), {
					ms: x,
					label: "processGt3xFull",
					signal: n,
					cancel: g
				}).finally(g);
				if (b(n, "after processGt3xFull"), z = Te.enmo5s, D = Te.anglez5s, G = Te.anglex5s ?? /* @__PURE__ */ new Float64Array(), L = Te.angley5s ?? /* @__PURE__ */ new Float64Array(), H = Te.ggirInvalid5s, W = Te.ggirZeroCrossings5s, V = Te.ggirNonwear5s, X = {
					x: Te.countsX,
					y: Te.countsY,
					z: Te.countsZ,
					vm: Te.countsVm
				}, Q = Te.zcx60s.length === Te.countsX.length ? Te.zcx60s : null, te = Te.zcy60s.length === Te.countsY.length ? Te.zcy60s : null, ne = Te.zcz60s.length === Te.countsZ.length ? Te.zcz60s : null, K = Te.capsense, q = Te.firstTsMs, ie = await f.dstPlaceholderRuns(Te.firstTsMs, Te.enmo5s.length, Te.dstTransitions), ae = Te.dstTimezone ?? void 0, J = Te.calibration, Te.lstmFeatures30s.length > 0 && Te.lstmFeatureEpochs > 0) {
					t?.({
						phase: "scoring",
						percent: 42,
						message: "Running LSTM sleep/wake model..."
					});
					const e = Te.firstTsMs;
					Se = sr({
						data: Te.lstmFeatures30s,
						epochs: Te.lstmFeatureEpochs,
						bins: Te.lstmFeatureBins,
						channels: Te.lstmFeatureChannels
					}, C.scoreOptions).then((t) => ({
						scores: t.scores,
						probabilities: t.probabilities,
						firstTsMs: e
					}), (e) => (v(e, n, `LSTM sleep/wake scoring (${w})`), console.warn("[local-processing] LSTM sleep/wake scoring failed for a local binary import; count-based scoring remains available."), { failureDetail: "the local model runtime or its input contract rejected the operation" })), Se.catch(() => {});
				} else ye = "the local model produced no usable spectral feature tensor", console.warn("[local-processing] LSTM spectral features were unavailable for a local binary import."), de = !0;
				if (Te.mimsUnit.length > 0) {
					const e = await f.uniformTimestamps(Te.firstTsMs, 5e3, Te.enmo5s.length);
					ue = await pn(f, {
						mimsUnit: Te.mimsUnit,
						epochSeconds: 5,
						...Te.mimsUnitX.length > 0 ? { mimsUnitX: Te.mimsUnitX } : {},
						...Te.mimsUnitY.length > 0 ? { mimsUnitY: Te.mimsUnitY } : {},
						...Te.mimsUnitZ.length > 0 ? { mimsUnitZ: Te.mimsUnitZ } : {}
					}, e), le = null === ue;
				} else oe = !0, ce = Te.mimsAvailability?.reason ?? (Te.mimsAvailability ? "the actours automatic-ingest policy reported MIMS as available but returned no values" : "the loaded actours WASM bundle does not report MIMS availability"), console.warn("[local-processing] MIMS output was unavailable for a local binary import; see the in-app import warning.");
				if (Te.preschoolWristRfClasses.length > 0 && (Re = {
					classes: Te.preschoolWristRfClasses,
					epochSeconds: Te.preschoolWristRfEpochSeconds,
					classifier: "Preschool Wrist Random Forest Free Living Lag-Lead",
					model: "actimetricModels::PS.RF.FL.Wrist15.LagLead"
				}), Te.tzJump) {
					const e = at;
					console.warn("[local-processing] A possible recording time-zone discontinuity was detected."), t?.({
						phase: "parsing",
						percent: 25,
						message: "Checking time consistency...",
						warning: e
					});
				}
				const ke = q / 1e3, Me = H.length === D.length && D.length > 0 ? H : null, Oe = D.length > 0 && null !== Me ? M(f, (e) => e.runGgirFromEpoch({
					source: "gt3x_stream",
					invalidMask: "ggir_part2"
				}, D, z, ke, Me, ae, o.csvText, Z(o.csvText, W)).catch((e) => (v(e, n, `runGgirFromEpoch (${w})`), console.warn("[local-processing] GGIR epoch analysis failed for a local binary import."), null)), {
					ms: x,
					label: `runGgirFromEpoch (${w})`,
					signal: n,
					cancel: m
				}) : null;
				Oe?.catch(() => {});
				const Ue = Float64Array.from(await f.uniformTimestamps(q, 1e3 * A, X.y.length), (e) => e / 1e3);
				t?.({
					phase: "scoring",
					percent: 60,
					message: "Running sleep algorithms..."
				});
				const Fe = await ot(f, Ue, X.y, X.vm, X.x, X.z, void 0, void 0, void 0, te ?? void 0, Q ?? void 0, ne ?? void 0);
				await Jt(f, Ue, A);
				const xe = Object.keys(Fe).sort();
				if (0 === xe.length) throw await Ct(i, "no activity observations"), /* @__PURE__ */ new Error("No activity observations were parsed. Check the input format and import again.");
				const ze = await gt(Object.entries(Fe), f, {
					core: f,
					storedEpochSeconds: A
				});
				if (Se) {
					const e = await Se;
					"failureDetail" in e ? (ye = e.failureDetail, de = !0) : (fe = e.scores, ge = e.probabilities, Ae = hn(e.scores, e.probabilities), Ae && console.warn("[local-processing] LSTM output quality requires review; see the in-app import warning."), me = e.firstTsMs);
				}
				const Ne = fe && null !== me ? await yt(f, fe, me, Fe, A) : /* @__PURE__ */ new Map(), De = ge && null !== me ? await vt(f, ge, me, Fe, A) : /* @__PURE__ */ new Map(), Ge = await tn(f, fe, me), Pe = _(d), Le = N(d, "local"), $e = E(f, {
					ms: x,
					signal: n,
					cancel: m
				}), He = await hr({
					label: "binary",
					dateGroups: Fe,
					availableDates: xe,
					countEpochSeconds: A,
					wasmApi: f,
					cancelWasmOperation: m,
					signal: n,
					onProgress: t,
					scorerCore: $e,
					sourceEligibility: Pe,
					hasCounts: Le?.has60sCounts ?? !1,
					choiAxis: "vector_magnitude",
					ggirConfig: o,
					sourceContentHash: k,
					lstm: {
						byDate: Ne,
						probabilityByDate: De,
						selection: C.selection,
						options: r
					},
					hasibVariants: r?.hasibVariants,
					oakleyConfigs: {},
					planHasGgir: R.includes("ggir")
				}), { algorithmResultsByDate: We, countsNonwear: Ve } = He, je = await jt(i, {
					filename: e.name,
					devicePreset: "gt3x",
					epochLengthSeconds: A,
					availableDates: ze,
					sourceType: d,
					fileHash: T,
					sourceContentHash: k,
					sourceSizeBytes: O,
					source: "local",
					eventMarkerInstants: [],
					createdAt: (/* @__PURE__ */ new Date()).toISOString(),
					ggirPart2Config: o,
					...ke > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * ke)).toISOString() } } : {},
					...ae ? {
						ggirTimezone: ae,
						ggirClockBasis: $t(ae)
					} : {},
					...ie.length > 0 ? { ggirDstPlaceholders: await en(f, q, ie, {
						anglez: D,
						anglex: G,
						angley: L,
						enmo: z,
						zcx: W?.[0],
						zcy: W?.[1],
						zcz: W?.[2]
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
				let Ze = !1;
				const Ye = /* @__PURE__ */ new Map(), Ke = wt(K), qe = Ke.map((e) => [e.startMs / 1e3, e.endMs / 1e3]), Je = {};
				for (const [l, c] of Object.entries(Fe)) {
					const e = c.timestamps;
					Je[l] = _e(await Ie(Ye, {
						baseTsSec: ke,
						epochTimestampsSec: e,
						epochLenSec: A
					}, f), await Ie(Ve[l] ?? /* @__PURE__ */ new Map(), {
						baseTsSec: e[0] ?? 0,
						epochTimestampsSec: e,
						epochLenSec: A
					}, f), V.length === D.length ? await Ce(V, {
						ggirConfigCsv: o.csvText,
						baseTsSec: ke,
						epochTimestampsSec: e,
						epochLenSec: A,
						dstRuns: ie
					}, f) : {});
				}
				const Qe = ve("ggir"), et = await zt(We, Fe, qe, Qe, Object.fromEntries(xe.map((e) => [e, Je[e] ?? {}])), Be(d, null), f);
				if (D.length > 0 && null === Me) console.warn("[local-processing] GGIR Part-2 invalid mask missing for a local binary import; GGIR summaries skipped."), Ze = !0;
				else if (D.length > 0 && null !== Me) {
					t?.({
						phase: "ggir",
						percent: -1,
						message: "GGIR Parts 3–5 on the 5 s series..."
					});
					const e = await Oe;
					if (e?.days?.length) {
						const t = Et(e.days, Xe, J, o);
						await Tt(i), await Y(t, a, n).catch(() => {
							console.warn("[local-processing] Binary epoch-summary persistence failed."), Ze = !0;
						}), Ze || await Ot({
							ggirConfigSha256: o.sha256,
							fileId: Xe,
							sourceContentHash: k,
							sourceSizeBytes: O,
							identity: () => M(f, (e) => e.getComputeIdentity(), {
								ms: x,
								label: `getComputeIdentity (${w}, epoch)`,
								signal: n,
								cancel: m
							}),
							calibration: J,
							rows: t,
							startedAt: u
						}, a, n);
					} else Ze = !0;
				}
				t?.({
					phase: "ggir",
					percent: -1,
					message: "HDCZA sleep window..."
				});
				const tt = new Map((await j(Xe, a)).map((e) => [e.analysisDate, e]));
				let rt;
				const it = D.length > 0 && null === Me ? Kt : await Wt(Xe, D, ke, et, tt, r?.hasptVariant, {
					activity5s: z,
					...Me ? { invalid5s: Me } : {},
					ggirConfig: o,
					zeroCrossings5s: W,
					...G.length > 0 ? { anglex5s: G } : {},
					...L.length > 0 ? { angley5s: L } : {},
					dstRuns: ie,
					...ae ? { timezone: ae } : {}
				}, be(r?.sleepPeriodDetectionConfig, {
					path: "ggir",
					selected: Qe
				}), nn(r, i.recording), a, n, f, m, i.auditBinding, (e) => {
					rt = e;
				}), st = z.length, lt = await f.ggir5sWallClockMs(1e3 * ke, st, ie), ct = await Mt(f, lt, z, D, {
					anglex: G,
					angley: L,
					sib: rt,
					...Me ? { invalid: Me } : {},
					mimsUnit: ue?.unit,
					mimsUnitX: ue?.unitX,
					mimsUnitY: ue?.unitY,
					mimsUnitZ: ue?.unitZ
				}), ut = Re ? await Ht(f, q, Re.classes, Re.epochSeconds) : /* @__PURE__ */ new Map(), ft = await gr({
					label: "binary",
					dateGroups: Fe,
					availableDates: xe,
					countEpochSeconds: A,
					wasmApi: f,
					cancelWasmOperation: m,
					signal: n,
					onProgress: t,
					scope: i,
					fileId: Xe,
					sourceContentHash: k,
					scored: He,
					sourceEligibility: Pe,
					ggir: {
						byDate: ct,
						tsMs: lt,
						zeroCrossings5s: W
					},
					lstm30sByDate: Ge,
					preschoolWristRfByDate: ut,
					nonwearPatches: Je
				}), { activityDaysSaved: ht, historyWriteFailed: pt } = ft, { failures: mt } = He, dt = await sn(i, Xe, Ke, a, n, "CAPSENSE"), bt = await mr({
					label: "binary",
					wasmApi: f,
					cancelWasmOperation: m,
					signal: n,
					onProgress: t,
					scope: i,
					fileId: Xe,
					nightDates: ze,
					sourceCaps: Le,
					options: r
				}), _t = [
					pt && "Algorithm version history could not be fully saved (storage may be full). Scoring data is intact.",
					it && `Sleep window detection (HDCZA) could not place auto-markers for ${e.name}: ${it.replace(/\.$/, "")}. Scoring data is intact.`,
					Ze && "GGIR Part 4/5 daily summaries could not be saved. Scoring data is intact.",
					!dt && "Some CAPSENSE nonwear periods could not be saved. Nonwear coverage may be incomplete.",
					mt.ggirCountScoreFailed && "GGIR Sadeh/Cole sleep scoring could not be computed from zero-crossing counts. Other count-based sleep/wake scoring is intact.",
					de && un(ye),
					!de && Ae,
					oe && (ce ? `MIMS_UNIT was not computed: ${ce} Other derived activity metrics are intact.` : "MIMS_UNIT could not be computed by the current actours/WASM build. Other derived activity metrics are intact."),
					le && "MIMS_UNIT output was not stored because it did not align with the 5 s GGIR epoch grid.",
					mt.detachFailed && "DETACH temperature-based nonwear detection failed for one or more days. Choi nonwear is intact.",
					null != ft.detachSkipped && Ee[ft.detachSkipped] + " Choi nonwear is intact.",
					mt.hasibVariantFailed && "One or more optional GGIR HASIB variant outputs could not be computed. Base scoring is intact.",
					mt.algorithmCubeFailed && "Some algorithm-output harness variants could not be computed. Standard scoring is intact.",
					mt.algorithmCubeSkipped > 0 && `${mt.algorithmCubeSkipped} algorithm-output harness variant(s) could not be computed. Standard scoring is intact.`,
					bt.dayFailures > 0 && `Scored variants could not be precomputed for ${String(bt.dayFailures)} day(s). Reimport the file to retry.`
				].filter(Boolean).join(" ");
				return t?.({
					phase: "complete",
					percent: 100,
					message: "Processing complete",
					..._t ? { warning: _t } : {}
				}), {
					fileId: Xe,
					availableDates: ze,
					activityDaysSaved: ht,
					sourceType: d,
					nonwearSources: [
						"Choi",
						...Ke.length > 0 && dt ? ["CAPSENSE"] : [],
						...ft.detachRan && !mt.detachFailed ? ["DETACH"] : []
					]
				};
			}(e, r, a, u, f, p);
			if (O.endsWith(".rdata") || O.endsWith(".rda")) return Xt(e, r, a, u, f, p?.wasmApi, p?.cancelWasmOperation);
			if (O.endsWith(".csv") && "ggir_5s_meta" === t) throw new oe("GGIR results are imported as the GGIR output folder (config.csv and meta/basic) or as a Part 1 meta RData file. A GGIR CSV table is not imported.");
			if (O.endsWith(".csv") && "mims_metrics" === t) return Zt(e, n, s ?? {}, r, a, f, p?.wasmApi);
			const G = f.head, W = await Ne(e, p?.wasmApi ?? l(), G), V = null === W && function(e) {
				return e in L;
			}(X = t) && "mapped_csv" === L[X].supportMode && O.endsWith(".csv");
			var X;
			b(a, "before preparing local input");
			const K = V ? await bt(e, n, s ?? {}, a) : e;
			b(a, "after preparing local input");
			const q = V ? 0 : n;
			b(a, "before sniffing local input");
			const J = await B(K, G);
			b(a, "after sniffing local input");
			const Q = J === F.GENEACTIV || J === F.GENEACTIV_BIN || "geneactiv" === t;
			if (Q && !U && await Nt(K, a, G)) throw new Error("GeneActiv epoch-compressed CSV files are not supported. Please use the original raw GeneActiv .csv or .bin file.");
			const te = we(p?.wasmApi ?? l()), ne = p?.cancelWasmOperation ?? (() => {
				c(te);
			}), ue = xe(e) && !e.aw5Subject.wholeDatabase ? e.aw5Subject : null, ge = "actiware_csv" === W ? await ke(e) : null, me = async () => P(ue && xe(e) ? await (async (e) => (r?.({
				phase: "reading",
				percent: -1,
				message: "Reading the recording from the database..."
			}), Oe(e.aw5Subject, await e.loadAw5(a))))(e) : ge ?? e, (e) => {
				r?.({
					phase: "reading",
					percent: 15 * e,
					message: `Computing file hash... ${Math.round(100 * e)}%`
				});
			}, a, {
				start: () => te.sha256Start(),
				feed: (e) => te.sha256Feed($(e, [e.buffer])),
				finish: () => te.sha256Finish()
			}), de = async (e) => await re(e.fullHash, g) ?? await he(e.prefixHash, g, e.fullHash), ye = (e, t) => {
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
					sourceType: t.sourceType ?? h.EPOCHS_60S
				};
			}, Ae = await pe(e.name, g), Se = !(ue || K !== e || W || Ae && "incomplete" !== Ae.ingestState || await he(await D(e, G), g));
			let Re = Se ? null : await me();
			if (Re) {
				const e = await de(Re);
				if (e?.id) return ye(e.id, e);
			}
			const Te = e.size, Me = await pe(e.name, g);
			if (Me && "incomplete" !== Me.ingestState && (!xe(e) || Me.aw5RecordingKey !== e.aw5Subject.recordingKey)) throw new se();
			r?.({
				phase: "reading",
				percent: 15,
				message: "Reading file..."
			});
			const Ge = function(e) {
				const t = e.name.toLowerCase();
				return t.endsWith(".tar.bz2") || t.endsWith(".tbz2");
			}(K);
			b(a, "before checking local input shape");
			const Pe = !Q && !V && await async function(e, t) {
				const n = (await o(e, 1024, t)).split(/\r?\n/, 1)[0]?.trim().toLowerCase() ?? "";
				return mn.has(n);
			}(K, G);
			b(a, "after checking local input shape");
			const Le = "actigraph" === t && O.endsWith(".csv") && null === J;
			if (!(W || Ge || Pe || Q || V || Le || null !== J)) throw new Error([
				"Could not identify file format.",
				"Use Data Settings > CSV Import for mapped vendor, GGIR, MIMS, or generic activity CSV exports.",
				"Native local ingest supports ActiGraph CSV/GT3X, GENEActiv raw CSV/.bin, GGIR meta RData, NHANES PAX80 archives, and recognized generic CSV mappings.",
				"Condor ActLumus/ActTrust TXT files require the server parser today."
			].join(" "));
			const $e = J === F.ACTIGRAPH_RAW, He = !W && !Ge && (Q || $e || Pe || K.size >= 15e8);
			let We;
			We = He ? !Pe && !$e || Q ? U ? h.GENEACTIV_BIN : h.GENEACTIV_RAW_CSV : h.ACTIGRAPH_RAW_CSV : "actigraph" === t && O.endsWith(".csv") && !V ? h.ACTIGRAPH_EPOCHED_CSV : h.EPOCHS_60S;
			const Ve = W ? De(W) : void 0, je = fe({ sourceProfileId: Ve }, ae(u?.analysisParadigm)), Xe = Ve ?? We, Ze = _(Xe);
			if (null == Ze || !S(Xe, "source_profile_realization", "local")) throw new Error(`Local processing has no implemented source-profile realization for source type "${Ve ?? We}". Use a supported native source or an explicitly implemented mapped import.`);
			const Ye = N(Xe, "local"), Ke = "aw5" === W ? "actiwatch_aw5" : "actiware_csv" === W ? "actiware_csv" : Ge ? "nhanes" : U ? "geneactiv_bin" : Q ? "geneactiv_csv" : Pe ? "raw_csv" : $e || Le ? "actigraph_csv" : V ? "epoch_csv" : "generic", qe = xe(e) ? [...ie] : ee(Ke, He);
			let rt;
			r?.({
				phase: "reading",
				percent: 15,
				message: "File inspected",
				device: Ke,
				plan: qe
			});
			let it = 0, ut = {
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
			}, ft = null;
			if (W) {
				r?.({
					phase: "parsing",
					percent: 20,
					message: "aw5" === W ? "Reading Actiwatch .AW5 database..." : "Parsing Actiware CSV..."
				});
				const t = ge ? {
					name: e.name,
					size: ge.byteLength,
					arrayBuffer: () => Promise.resolve(ge)
				} : e;
				ft = await Ue(t, W, te, (e, t) => {
					r?.({
						phase: "parsing",
						percent: le("parsing", e),
						message: t
					});
				}, je ? u?.actiwareAnalysis ?? {} : void 0, {
					...a ? { signal: a } : {},
					cancel: ne
				}, u?.actiwareRestProposal ? {
					proposal: u.actiwareRestProposal,
					nightStartHour: u.nightStartHour,
					nightEndHour: u.nightEndHour
				} : void 0), w = ft.epochSeconds, rt = {
					timestamps_ms: [...ft.timestampsMs],
					axis_y: [...ft.counts],
					axis_x: new Float64Array(ft.counts.length),
					axis_z: new Float64Array(ft.counts.length),
					vector_magnitude: [...ft.counts],
					is_raw: !1,
					sample_frequency: 0,
					header_rows_skipped: 0,
					temperature: []
				};
			} else if (Ge) r?.({
				phase: "parsing",
				percent: 5,
				message: "Decompressing and parsing NHANES PAX80 archive..."
			}), b(a, "before parsing PAX80 input"), rt = await Zn(e, (e) => {
				r?.({
					phase: "parsing",
					percent: 5 + .4 * e.percent,
					message: e.message
				});
			}), b(a, "after parsing PAX80 input");
			else if (Pe) r?.({
				phase: "parsing",
				percent: 30,
				message: "Parsing headerless tri-axial CSV with synthesized timestamps..."
			}), b(a, "before parsing headerless tri-axial input"), rt = await async function(e, t = 100, n) {
				if (e.size > 536870912) throw new Error("Headerless tri-axial CSV fallback only supports files up to 512 MB");
				const r = [], i = [], s = [], a = [], o = [], l = function(e) {
					if (e.lastModified > 0) {
						const t = new Date(e.lastModified);
						return Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
					}
					return Date.UTC(2e3, 0, 1);
				}(e), c = 1e3 / t;
				let u = 0, f = null;
				const h = (e) => {
					if (null === f) {
						if (f = e.trim().toLowerCase(), !mn.has(f)) throw new Error(`Unsupported tri-axial CSV header: ${f || "<empty>"}`);
						console.warn(`[headerless-triaxial] No sample rate or timestamps in this file; assuming ${t} Hz. Counts and the epoch timeline will be wrong if the true recording rate differs.`);
						return;
					}
					const n = e.trim();
					if (!n) return;
					const h = n.split(",");
					if (h.length < 3) return;
					const p = dn(h[0] ?? ""), g = dn(h[1] ?? ""), m = dn(h[2] ?? "");
					null !== p && null !== g && null !== m && (i.push(p), s.push(g), a.push(m), o.push(Math.hypot(p, g, m)), r.push(l + u * c), u += 1);
				}, p = new TextDecoder(), g = async (t, r) => {
					if (n?.throwIfAborted(), t >= e.size) return r + p.decode();
					const i = await e.slice(t, Math.min(t + wn, e.size)).arrayBuffer(), s = (r + p.decode(i, { stream: !0 })).split(/\r?\n/u), a = s.pop() ?? "";
					for (const e of s) h(e);
					return await z(n), g(t + wn, a);
				};
				if (h(await g(0, "")), null === f) throw new Error("Unsupported tri-axial CSV header: <empty>");
				if (0 === r.length) throw new Error("No valid tri-axial samples found in headerless CSV");
				return {
					timestamps_ms: r,
					axis_x: i,
					axis_y: s,
					axis_z: a,
					vector_magnitude: o,
					is_raw: !0,
					sample_frequency: t,
					header_rows_skipped: 1,
					temperature: []
				};
			}(e, 100, a), b(a, "after parsing headerless tri-axial input"), console.warn("[local-processing] Imported headerless tri-axial CSV without source timestamps; using synthetic 100 Hz timestamps anchored to the file modified date.");
			else if (K.size >= 15e8 || U || $e || J === F.GENEACTIV && K.size > I()) {
				const e = J ?? ("geneactiv" === t ? F.GENEACTIV : F.ACTIGRAPH_RAW), n = e === F.GENEACTIV ? "GENEActiv" : "ActiGraph";
				r?.({
					phase: "parsing",
					percent: 0,
					message: `Streaming ${n} raw CSV (no full-file buffer)...`
				});
				const i = await M(te, (t) => C(K, e, (e) => {
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
						], i = t.findIndex((t) => t === e.finalizeStage), s = e.finalizeFraction ?? 0;
						r?.({
							phase: "epoching",
							percent: i < 0 ? -1 : le("epoching", (i + s) / t.length),
							message: `Computing epochs, counts and GGIR metrics (${e.epochsEmitted.toLocaleString()} epochs)` + (i < 0 ? "..." : `: ${n[i] ?? ""}${i < 2 ? ` ${String(Math.round(100 * s))}%` : "..."}`)
						});
						return;
					}
					r?.({
						phase: "parsing",
						percent: .45 * e.percent,
						message: `Streaming: ${Math.round(e.percent)}% (${e.epochsEmitted.toLocaleString()} epochs)`
					});
				}, 0, a, w, t, Se, m.csvText), {
					ms: x,
					label: "streamParseRaw",
					signal: a,
					cancel: ne
				});
				it = i.rowsDropped, i.contentHashes && (Re ??= i.contentHashes), it > 0 && console.warn("[local-processing] The WASM stream parser rejected malformed source rows; review the in-app import warning.");
				const s = y(i.table);
				rt = {
					timestamps_ms: s.timestamp_ms,
					axis_y: s.axis_y,
					axis_x: s.axis_x,
					axis_z: s.axis_z,
					vector_magnitude: s.vector_magnitude,
					is_raw: !1,
					sample_frequency: i.sampleFrequency,
					header_rows_skipped: i.headerRowsSkipped,
					temperature: s.temperature
				}, ut = {
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
				const t = await R(K, (e) => {
					r?.({
						phase: "reading",
						percent: 15 + .15 * e.percent,
						message: `Reading: ${Math.round(e.percent)}%`
					});
				}, a, te, ne, Se);
				Re ??= t, r?.({
					phase: "parsing",
					percent: 30,
					message: "Parsing CSV..."
				});
				const n = Q ? "parseGeneactivCsvBuffered" : "parseActigraphCsvBuffered";
				rt = await M(te, (e) => Q ? e.parseGeneactivCsvBuffered() : e.parseActigraphCsvBuffered(q), {
					ms: x,
					label: n,
					signal: a,
					cancel: ne
				}).catch((t) => {
					throw v(t, a, n), t instanceof Error ? ce(e, t) : t;
				}), Q && rt.is_raw && (rt.sample_frequency = await dt(K, F.GENEACTIV, a, G));
			}
			if (b(a, "after parse"), 0 === rt.timestamps_ms.length) throw ce(e, "No activity observations were parsed. Check the input format and import again.");
			if (!rt.is_raw) for (let o = 0; o < rt.timestamps_ms.length; o += 1) {
				const e = rt.timestamps_ms[o];
				if (!Number.isFinite(e) || o > 0 && e <= rt.timestamps_ms[o - 1]) throw new Error("The file's timestamps are out of order or repeated.");
			}
			if (!rt.is_raw && !ft && 0 === ut.tsMs.length) {
				const e = await H(rt.timestamps_ms.map((e) => e / 1e3), null, te);
				if (null === e || e !== w) throw new Error(`Source count cadence is ${String(e ?? "unknown")} seconds; the selected grid is ${String(w)} seconds. Select the matching epoch length and import again.`);
			}
			if (Se) {
				Re ??= await me();
				const e = await de(Re);
				if (e?.id) return ye(e.id, e);
			}
			if (!Re) throw new Error("local import lost its content hash");
			const { prefixHash: ht, fullHash: pt } = Re;
			let At = rt.timestamps_ms;
			const It = V ? K.eventMarkerRows : void 0, Rt = ft ? ft.eventMarkerInstantsSec : It ? cn(It, At) : null;
			let Ft = rt.axis_x, xt = rt.axis_y, Dt = rt.axis_z, Lt = rt.vector_magnitude;
			const Vt = rt.temperature, qt = void 0 === rt.tz_jump ? await _t(te, At) : rt.tz_jump ? at : null;
			qt && (console.warn("[local-processing] A possible recording time-zone discontinuity was detected."), r?.({
				phase: "parsing",
				percent: 30,
				message: "Checking time consistency...",
				warning: qt
			}));
			let Qt = null, an = null, on = null, ln = /* @__PURE__ */ new Map(), fn = 0, gn = null, yn = null, bn = null, vn = !1, _n = null, An = !1, Sn = null, Cn = !1, En = !1, In = null;
			if (rt.is_raw && rt.sample_frequency > 0 && 0 === ut.tsMs.length) {
				r?.({
					phase: "epoching",
					percent: 35,
					message: "Computing GGIR metrics (imputation + calibration)..."
				});
				const e = new Float64Array(Ft), t = new Float64Array(xt), n = new Float64Array(Dt), i = new Float64Array(At), s = rt.sample_frequency, o = await M(te, (r) => r.processRawXyzImputed(i, e, t, n, s, null, w, m.csvText, Vt.length > 0 ? Float64Array.from(Vt) : void 0), {
					ms: x,
					label: "processRawXyzImputed",
					signal: a,
					cancel: ne
				});
				o.numGaps > 0 && console.warn("[local-processing] GGIR time-gap imputation was applied before metric computation.");
				const l = o.enmo5s, c = o.anglez5s;
				if (Qt = o.counts, an = o.firstTsMs, on = o.calibration, fn = (At[0] ?? o.firstTsMs) / 1e3, ln = await et(te, {
					x: e,
					y: t,
					z: n,
					sampleRate: s,
					epochSeconds: w
				}, a, void 0, ne), 0 === o.numGaps) try {
					r?.({
						phase: "scoring",
						percent: 42,
						message: "Running LSTM sleep/wake model..."
					});
					const i = await M(te, (r) => r.lstmSpectralFeatures30s(e, t, n, s), {
						ms: x,
						label: "lstmSpectralFeatures30s",
						signal: a,
						cancel: ne
					}), l = await sr({
						data: i.features,
						epochs: i.epochs,
						bins: i.bins,
						channels: i.channels
					}, T.scoreOptions);
					gn = l.scores, yn = l.probabilities, Sn = hn(gn, yn), Sn && console.warn("[local-processing] LSTM output quality requires review; see the in-app import warning."), bn = o.firstTsMs;
				} catch (Cr) {
					v(Cr, a, "LSTM sleep/wake scoring (csv)"), _n = "the local model runtime or its input contract rejected the operation", console.warn("[local-processing] LSTM sleep/wake scoring failed; count-based scoring remains available."), vn = !0;
				}
				else An = !0;
				const u = o.firstTsMs;
				ut = {
					tsMs: await te.uniformTimestamps(u, 5e3, l.length),
					enmo: l,
					anglez: c,
					anglex: o.anglex5s ?? /* @__PURE__ */ new Float64Array(),
					angley: o.angley5s ?? /* @__PURE__ */ new Float64Array(),
					invalid: o.ggirInvalid5s,
					...o.ggirZeroCrossings5s ? { zeroCrossings5s: o.ggirZeroCrossings5s } : {},
					nonwear: o.ggirNonwear5s,
					mimsUnit: /* @__PURE__ */ new Float64Array(),
					mimsUnitX: /* @__PURE__ */ new Float64Array(),
					mimsUnitY: /* @__PURE__ */ new Float64Array(),
					mimsUnitZ: /* @__PURE__ */ new Float64Array(),
					zeroCrossingX60s: /* @__PURE__ */ new Float64Array(),
					zeroCrossingY60s: /* @__PURE__ */ new Float64Array(),
					zeroCrossingZ60s: /* @__PURE__ */ new Float64Array()
				};
			}
			let Rn = null, Bn = 0, Tn = [], kn = !1, Mn = null, On = !1, Un = 60 === w && ut.zeroCrossingX60s.length > 0 ? ut.zeroCrossingX60s : null, Fn = 60 === w && ut.zeroCrossingY60s.length > 0 ? ut.zeroCrossingY60s : null, xn = 60 === w && ut.zeroCrossingZ60s.length > 0 ? ut.zeroCrossingZ60s : null;
			if (rt.is_raw && rt.sample_frequency > 0) {
				0 === At.length ? console.warn("[local-processing] raw CSV has no timestamps — skipping GGIR pipeline") : (Bn = (At[0] ?? 0) / 1e3, ut.anglez.length > 0 && (Rn = ut.anglez));
				const e = an ?? (At.length > 0 ? At[0] ?? 0 : 0);
				let t = Qt;
				await Ut([
					...At.length > 0 && 0 === ut.anglez.length ? [{
						name: "anglez5s",
						cost: 1,
						run: async (e, t) => {
							Rn = await M(e, (e) => e.computeAnglez5s(new Float64Array(Ft), new Float64Array(xt), new Float64Array(Dt), rt.sample_frequency), {
								ms: x,
								label: "computeAnglez5s (csv fallback)",
								signal: a,
								cancel: t.cancel
							}).catch((e) => {
								if (v(e, a, "computeAnglez5s (csv fallback)"), rn(e, t)) throw e;
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
								}, n = e.wasmApi ?? l();
								return pn(n, await M(n, (n) => n.computeMimsUnit(e.x, e.y, e.z, e.sampleRate, t), {
									ms: x,
									label: `computeMimsUnit (${e.label})`,
									signal: e.signal,
									cancel: e.cancelOperation ?? (() => {
										c(n);
									})
								}), e.ggirTimestampsMs);
							}({
								x: new Float64Array(Ft),
								y: new Float64Array(xt),
								z: new Float64Array(Dt),
								sampleRate: rt.sample_frequency,
								ggirTimestampsMs: ut.tsMs,
								startTimeSeconds: e / 1e3,
								label: "csv",
								...a ? { signal: a } : {},
								wasmApi: t,
								cancelOperation: n.cancel
							}).catch((e) => {
								if (v(e, a, "computeMimsUnit (csv)"), rn(e, n)) throw e;
								return console.warn("[local-processing] MIMS computation failed for a local CSV import."), Cn = !0, null;
							});
							r || (En = !Cn), ut.mimsUnit = r?.unit ?? /* @__PURE__ */ new Float64Array(), ut.mimsUnitX = r?.unitX ?? /* @__PURE__ */ new Float64Array(), ut.mimsUnitY = r?.unitY ?? /* @__PURE__ */ new Float64Array(), ut.mimsUnitZ = r?.unitZ ?? /* @__PURE__ */ new Float64Array();
						}
					}, {
						name: "preschool RF",
						cost: 8,
						run: async (e, t) => {
							In = await async function(e) {
								const t = e.wasmApi ?? l();
								try {
									return await M(t, (t) => t.classifyActimetricPreschoolWristRf(e.x, e.y, e.z, e.sampleRate), {
										ms: x,
										label: `classifyActimetricPreschoolWristRf (${e.label})`,
										signal: e.signal,
										cancel: e.pass?.cancel ?? (() => {
											c(t);
										})
									});
								} catch (Cr) {
									if (v(Cr, e.signal, `classifyActimetricPreschoolWristRf (${e.label})`), e.pass && rn(Cr, e.pass)) throw Cr;
									return console.warn("[local-processing] The optional preschool wrist activity classifier was unavailable."), null;
								}
							}({
								x: new Float64Array(Ft),
								y: new Float64Array(xt),
								z: new Float64Array(Dt),
								sampleRate: rt.sample_frequency,
								label: "csv",
								...a ? { signal: a } : {},
								wasmApi: e,
								pass: t
							});
						}
					}] : [],
					...null == Qt ? [{
						name: "Neishabouri counts",
						cost: 3,
						run: async (e, n) => {
							t = await M(e, (e) => e.neishabouriCounts(new Float64Array(Ft), new Float64Array(xt), new Float64Array(Dt), rt.sample_frequency, w), {
								ms: x,
								label: "neishabouriCounts",
								signal: a,
								cancel: n.cancel
							});
						}
					}] : [],
					...null == Un || null == Fn || null == xn ? [{
						name: "zero-crossing",
						cost: 3,
						run: async (e, t) => {
							const n = await M(e, (e) => e.zeroCrossingCounts(new Float64Array(Ft), new Float64Array(xt), new Float64Array(Dt), rt.sample_frequency, w), {
								ms: x,
								label: "zeroCrossingCounts (csv)",
								signal: a,
								cancel: t.cancel
							}).catch((e) => {
								if (v(e, a, "zeroCrossingCounts (csv)"), rn(e, t)) throw e;
								return console.warn("[local-processing] Zero-crossing computation failed for a local CSV import."), On = !0, null;
							});
							n && (Un ??= n.zcx, Fn ??= n.zcy, xn ??= n.zcz);
						}
					}] : [],
					...St(We, w) ? [{
						name: "compute30sCountsFromRaw",
						cost: 6,
						run: async (t, n) => {
							Mn = await lt({
								wasmApi: t,
								x: new Float64Array(Ft),
								y: new Float64Array(xt),
								z: new Float64Array(Dt),
								sampleRate: rt.sample_frequency,
								firstTsMs: e,
								timestampsMs: rt.timestamps_ms,
								...a ? { signal: a } : {},
								label: "csv",
								cancelOperation: n.cancel
							}).catch((e) => {
								if (v(e, a, "native 30-second counts (csv)"), rn(e, n)) throw e;
								return console.warn("[local-processing] The native 30-second count pass failed for a local CSV import."), null;
							});
						}
					}] : []
				], {
					primary: te,
					extraWorkers: kt({
						cores: navigator.hardwareConcurrency,
						deviceMemoryGib: A()
					}),
					signal: a,
					cancelOperation: ne
				}), r?.({
					phase: "epoching",
					percent: 45,
					message: "Computing Neishabouri activity counts..."
				});
				const n = await te.uniformTimestamps(e, 1e3 * w, t.x.length);
				Vt.length > 0 && (Tn = await Yt(te, rt.timestamps_ms, Vt, n, w)), At = n, Ft = Array.from(t.x), xt = Array.from(t.y), Dt = Array.from(t.z), Lt = Array.from(t.vm);
			} else !rt.is_raw && Vt.length > 0 && (Tn = Array.from(Vt));
			Ft = await Qe(te, Ft, 0), xt = await Qe(te, xt, 0), Dt = await Qe(te, Dt, 0), Lt = await Qe(te, Lt, 2);
			const zn = {
				vector_magnitude: Lt,
				axis_y: xt,
				axis_x: Ft,
				axis_z: Dt
			}[i];
			zn || console.warn("[local-processing] Unknown Choi axis configuration; falling back to vector magnitude.");
			const Nn = zn ?? Lt;
			r?.({
				phase: "scoring",
				percent: 55,
				message: "Running sleep algorithms..."
			});
			const Dn = At.map((e) => e / 1e3), Gn = "vector_magnitude" !== i ? Nn : void 0, Pn = Tn.length > 0, Ln = await ot(te, Dn, xt, Lt, Ft, Dt, Gn, Pn ? Tn : void 0, void 0, Fn && Fn.length === At.length ? Fn : void 0, Un && Un.length === At.length ? Un : void 0, xn && xn.length === At.length ? xn : void 0);
			await Jt(te, Dn, w), Mn && await st(te, Ln, Mn);
			const $n = Object.keys(Ln).sort();
			if (0 === $n.length) throw await Ct(f, "no activity observations"), /* @__PURE__ */ new Error("No activity observations were parsed. Check the input format and import again.");
			const Hn = await gt(Object.entries(Ln), te, {
				core: te,
				storedEpochSeconds: w
			}), Wn = 120 !== w && gn && null !== bn ? await yt(te, gn, bn, Ln, w) : /* @__PURE__ */ new Map(), Vn = 120 !== w && yn && null !== bn ? await vt(te, yn, bn, Ln, w) : /* @__PURE__ */ new Map(), jn = await tn(te, gn, bn), Xn = je?.wakeThresholdFromRecording ? ft?.actiwareWakeThreshold ?? null : null, Yn = E(te, {
				ms: x,
				signal: a,
				cancel: ne
			}), Kn = await hr({
				label: "csv",
				dateGroups: Ln,
				availableDates: $n,
				countEpochSeconds: w,
				wasmApi: te,
				cancelWasmOperation: ne,
				signal: a,
				onProgress: r,
				scorerCore: Yn,
				sourceEligibility: Ze,
				hasCounts: Ye?.has60sCounts ?? !1,
				choiAxis: i,
				ggirConfig: m,
				sourceContentHash: V ? null : pt,
				lstm: {
					byDate: Wn,
					probabilityByDate: Vn,
					selection: T.selection,
					options: u
				},
				hasibVariants: Je(u?.hasibVariants, Xn),
				oakleyConfigs: Gt(Xn),
				planHasGgir: qe.includes("ggir")
			}), { algorithmResultsByDate: qn, countsNonwear: Jn } = Kn;
			r?.(qe.includes("ggir") && ut.anglez.length > 0 ? {
				phase: "ggir",
				percent: -1,
				message: "GGIR Parts 3–5 on the 5 s series..."
			} : qe.includes("ggir") ? {
				phase: "ggir",
				percent: -1,
				message: "Nonwear masks on each day's grid..."
			} : {
				phase: "nonwear",
				percent: le("nonwear", 1),
				message: "Nonwear masks on each day's grid..."
			});
			const Qn = await jt(f, {
				filename: e.name,
				devicePreset: t,
				epochLengthSeconds: w,
				availableDates: Hn,
				fileHash: ht,
				sourceContentHash: pt,
				sourceSizeBytes: Te,
				source: "local",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				sourceType: We,
				ggirPart2Config: m,
				...Ve ? { sourceProfileId: Ve } : {},
				...ue ? { sourceDatabaseFilename: ue.databaseFilename } : {},
				...xe(e) ? { aw5RecordingKey: e.aw5Subject.recordingKey } : {},
				...ft ? { sourceEpochSeconds: ft.sourceEpochSeconds } : {},
				eventMarkerInstants: Rt ? $n.filter((e) => Ln[e] && qn[e]).flatMap((e) => Array.from(mt(Rt, e))) : [],
				...Bn > 0 || null != ft?.gmtOffsetMinutes ? { recording: {
					...Bn > 0 ? { effectiveTime: (/* @__PURE__ */ new Date(1e3 * Bn)).toISOString() } : {},
					...null != ft?.gmtOffsetMinutes ? { gmtOffsetMinutes: ft.gmtOffsetMinutes } : {}
				} } : {}
			}, Yn);
			if ("already_complete" === Qn.kind) {
				const e = Qn.record.id;
				if (null == e) throw new Error("Completed local import identity is invalid.");
				return r?.({
					phase: "complete",
					percent: 100,
					message: "File already imported"
				}), {
					alreadyImported: !0,
					fileId: e,
					availableDates: Qn.record.availableDates,
					sourceType: Qn.record.sourceType ?? We
				};
			}
			const er = Qn.guard.fileId;
			await Promise.all(ct.map((e) => e.persistIngest({
				fileId: er,
				native: ft,
				recordingWakeThreshold: Xn,
				db: g,
				beforeWrite: async () => {
					await Tt(f);
				}
			})));
			let tr = !1, nr = null;
			const rr = {};
			for (const [o, l] of Object.entries(Ln)) {
				const e = l.timestamps;
				rr[o] = _e(await Ie(ln, {
					baseTsSec: fn,
					epochTimestampsSec: e,
					epochLenSec: w
				}, te), await Ie(Jn[o] ?? /* @__PURE__ */ new Map(), {
					baseTsSec: e[0] ?? 0,
					epochTimestampsSec: e,
					epochLenSec: w
				}, te), ut.nonwear.length === ut.tsMs.length ? await Ce(ut.nonwear, {
					ggirConfigCsv: m.csvText,
					baseTsSec: (ut.tsMs[0] ?? 0) / 1e3,
					epochTimestampsSec: e,
					epochLenSec: w
				}, te) : {});
			}
			const ir = ve("ggir"), ar = await zt(qn, Ln, [], ir, Object.fromEntries($n.map((e) => [e, rr[e] ?? {}])), Be(We, Ve), te);
			let or;
			const lr = ut.invalid.length === ut.anglez.length && ut.anglez.length > 0 ? ut.invalid : null;
			if (ut.anglez.length > 0 && ut.enmo.length > 0 && null === lr && (console.warn("[local-processing] GGIR Part-2 invalid mask missing for a local CSV import; GGIR summaries skipped."), kn = !0), ut.anglez.length > 0 && ut.enmo.length > 0 && null !== lr) {
				const e = (ut.tsMs[0] ?? 0) / 1e3, t = lr, n = await M(te, (n) => n.runGgirFromEpoch({
					source: "raw_csv_stream",
					invalidMask: "ggir_part2"
				}, ut.anglez, ut.enmo, e, t, void 0, m.csvText, Z(m.csvText, ut.zeroCrossings5s)).catch((e) => (v(e, a, "runGgirFromEpoch (csv)"), console.warn("[local-processing] GGIR epoch analysis failed for a local CSV import."), kn = !0, null)), {
					ms: x,
					label: "runGgirFromEpoch (csv)",
					signal: a,
					cancel: ne
				});
				if (n?.days?.length) {
					const e = Et(n.days, er, on, m);
					await Tt(f), await Y(e, g, a).catch(() => {
						console.warn("[local-processing] CSV daily-summary persistence failed."), tr = !0;
					}), tr || await Ot({
						ggirConfigSha256: m.sha256,
						fileId: er,
						sourceContentHash: pt,
						sourceSizeBytes: Te,
						identity: () => M(te, (e) => e.getComputeIdentity(), {
							ms: x,
							label: "getComputeIdentity (csv)",
							signal: a,
							cancel: ne
						}),
						calibration: on,
						rows: e,
						startedAt: k
					}, g, a);
				}
			}
			const cr = new Map((await j(er, g)).map((e) => [e.analysisDate, e]));
			if (ut.anglez.length > 0 && null === lr) nr = Kt;
			else if (ut.anglez.length > 0 && null !== lr) {
				qe.includes("ggir") && r?.({
					phase: "ggir",
					percent: -1,
					message: "HDCZA sleep window..."
				});
				const e = (ut.tsMs[0] ?? 0) / 1e3;
				nr = await Wt(er, ut.anglez, e, ar, cr, u?.hasptVariant, {
					activity5s: ut.enmo,
					invalid5s: lr,
					ggirConfig: m,
					zeroCrossings5s: ut.zeroCrossings5s,
					...ut.anglex.length > 0 ? { anglex5s: ut.anglex } : {},
					...ut.angley.length > 0 ? { angley5s: ut.angley } : {}
				}, be(u?.sleepPeriodDetectionConfig, {
					path: "ggir",
					selected: ir
				}), nn(u, f.recording), g, a, te, ne, f.auditBinding, (e) => {
					or = e;
				});
			} else null !== Rn && Rn.length > 0 && (nr = Kt);
			const ur = await Mt(te, ut.tsMs, ut.enmo, ut.anglez, {
				anglex: ut.anglex,
				angley: ut.angley,
				sib: or,
				...lr ? { invalid: lr } : {},
				mimsUnit: ut.mimsUnit,
				mimsUnitX: ut.mimsUnitX,
				mimsUnitY: ut.mimsUnitY,
				mimsUnitZ: ut.mimsUnitZ
			}), fr = In ? await Ht(te, an ?? ut.tsMs[0] ?? 0, In.classes, In.epochSeconds) : /* @__PURE__ */ new Map(), pr = /* @__PURE__ */ new Map();
			if (ft?.actiwareSleepWake) for (const o of $n) {
				const e = Ln[o];
				e && qn[o] && pr.set(o, await ze(te, ft.actiwareSleepWake, e.timestamps, w));
			}
			const dr = ft ? new Map(Array.from(ft.timestampsMs, (e, t) => [e / 1e3, t])) : null, wr = await gr({
				label: "csv",
				dateGroups: Ln,
				availableDates: $n,
				countEpochSeconds: w,
				wasmApi: te,
				cancelWasmOperation: ne,
				signal: a,
				onProgress: r,
				scope: f,
				fileId: er,
				sourceContentHash: pt,
				scored: Kn,
				sourceEligibility: Ze,
				ggir: {
					byDate: ur,
					tsMs: ut.tsMs,
					zeroCrossings5s: ut.zeroCrossings5s
				},
				lstm30sByDate: jn,
				preschoolWristRfByDate: fr,
				nonwearPatches: rr,
				sourceColumns: (e, t) => {
					const n = pr.get(e) ?? null, r = new Uint8Array(t.timestamps.length);
					if (ft && dr) for (let s = 0; s < t.timestamps.length; s += 1) {
						const e = dr.get(t.timestamps[s] ?? NaN);
						null != e && (r[s] = ft.actiwareInvalidActivityEpochs[e] ?? 0);
					}
					const i = Rt ? mt(Rt, e) : null;
					return {
						algorithmResults: n ? { [d.ACTIWARE_SLEEP_WAKE]: n.sleep.buffer } : {},
						fields: {
							...n && n.invalid.some((e) => 1 === e) ? { actiwareSleepWakeInvalid: n.invalid.buffer } : {},
							...r.some((e) => 1 === e) ? { actiwareActivityInvalid: r.buffer } : {},
							...ft?.hasOffWristChannel ? { actiwareOffWristChannel: !0 } : {},
							...ft && dr ? Fe(ft.light, dr, t.timestamps) : {},
							...Rt ? { eventMarkers: tt(t.timestamps, Rt, w).buffer } : {},
							...i && i.length > 0 ? { eventMarkerTimestamps: i.buffer } : {}
						}
					};
				}
			}), { activityDaysSaved: yr, historyWriteFailed: br } = wr, { failures: vr } = Kn, _r = await sn(f, er, (ft?.offWristPeriods ?? []).map((e) => ({
				startMs: 1e3 * e.startTimestamp,
				endMs: 1e3 * e.endTimestamp
			})), g, a, "Actiware off-wrist"), Ar = await mr({
				label: "csv",
				wasmApi: te,
				cancelWasmOperation: ne,
				signal: a,
				onProgress: r,
				scope: f,
				fileId: er,
				nightDates: Hn,
				sourceCaps: Ye,
				options: u
			}), Sr = [
				...ft?.warnings ?? [],
				it > 0 && `${it} rows in the source CSV could not be parsed and were skipped. The file may contain corrupt or malformed data.`,
				br && "Algorithm version history could not be fully saved (storage may be full). Scoring data is intact.",
				!_r && "Some Actiware off-wrist periods could not be saved. Nonwear coverage may be incomplete.",
				nr && `Sleep window detection (HDCZA) could not place auto-markers for ${e.name}: ${nr.replace(/\.$/, "")}. Scoring data is intact.`,
				tr && "GGIR Part 4/5 daily summaries could not be saved. Scoring data is intact.",
				kn && "GGIR metrics (Parts 1–5) could not be computed for this file. Sleep/wake scoring is intact, but GGIR summaries and activity metrics may be missing.",
				vr.ggirCountScoreFailed && "GGIR Sadeh/Cole sleep scoring could not be computed from zero-crossing counts. Other count-based sleep/wake scoring is intact.",
				vn && un(_n),
				!vn && Sn,
				An && "LSTM ONNX sleep/wake scoring was skipped because time-gap imputation changed the raw sample grid.",
				Cn && "MIMS_UNIT could not be computed by the current actours/WASM build. Other derived activity metrics are intact.",
				En && "MIMS_UNIT output was not stored because it did not align with the 5 s GGIR epoch grid.",
				On && "Zero-crossing counts could not be computed for optional GGIR HASIB variants. Base scoring is intact.",
				vr.detachFailed && "DETACH temperature-based nonwear detection failed for one or more days. Choi nonwear is intact.",
				null != wr.detachSkipped && Ee[wr.detachSkipped] + " Choi nonwear is intact.",
				vr.hasibVariantFailed && "One or more optional GGIR HASIB variant outputs could not be computed. Base scoring is intact.",
				vr.algorithmCubeFailed && "Some algorithm-output harness variants could not be computed. Standard scoring is intact.",
				vr.algorithmCubeSkipped > 0 && `${vr.algorithmCubeSkipped} algorithm-output harness variant(s) could not be computed. Standard scoring is intact.`,
				Ar.dayFailures > 0 && `Scored variants could not be precomputed for ${String(Ar.dayFailures)} day(s). Reimport the file to retry.`
			].filter(Boolean).join(" ");
			return r?.({
				phase: "complete",
				percent: 100,
				message: "Processing complete",
				...Sr ? { warning: Sr } : {}
			}), {
				fileId: f.finalizedFileId ?? er,
				availableDates: Hn,
				activityDaysSaved: yr,
				sourceType: We,
				nonwearSources: ["Choi", ...wr.detachRan && !vr.detachFailed ? ["DETACH"] : []]
			};
		}(e, t, n, r, i, s, a, u, q, {
			wasmApi: U,
			cancelWasmOperation: W,
			...ue ? {
				gt3xApi: ue.api,
				cancelGt3xOperation: ue.terminate
			} : {}
		});
		ge.alreadyImported && Ve(ge.fileId, {
			db: w,
			resumeIncomplete: !0,
			retryKnownFailures: !1,
			signal: a
		}).catch(() => {});
		const me = ge.availableDates[0];
		if (void 0 !== me) {
			const e = { filename: "redacted" };
			ge.alreadyImported || (J.recordFileEvent({
				fileId: ge.fileId,
				analysisDate: me,
				action: "file_uploaded",
				payload: e
			}, K), J.recordFileEvent({
				fileId: ge.fileId,
				analysisDate: me,
				action: "file_processed",
				payload: e
			}, K));
		}
		return ge;
	} catch (ge) {
		throw await Ct(q, "local file ingest failed"), ln(ge, q);
	} finally {
		te?.(), ue?.terminate(), Q?.terminate();
	}
}
export { dr as processLocalFile };
