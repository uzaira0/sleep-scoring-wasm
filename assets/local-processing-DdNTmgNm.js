import { E as e, Fn as t, In as n, Ln as r, M as i, Pn as a, Rn as s, _n as o, en as l, in as c, m as u, on as f, vn as p } from "./schema-BGRflpdS.js";
import { i as h, n as g, r as m, s as d, t as w } from "./workers-B1E_CQH7.js";
import { B as y, Y as b, d as v, f as _, g as A, q as S, t as C, u as E } from "./workspace-db-ZwhOL3AY.js";
import { f as I, i as R, r as k, u as B } from "./content-hash-D4_ZE65l.js";
import { S as T, a as M, b as O, d as U, f as F, g as x, h as z, n as N, p as P, s as G, u as L, v as $, w as W, x as H } from "./background-jobs-BXSYSixL.js";
import { C as j, D as V, E as X, N as Y, O as Z, P as K, S as q, _ as J, a as Q, b as ee, c as te, d as ne, f as re, g as ie, h as ae, j as se, k as oe, l as le, m as ce, o as ue, p as fe, s as pe, u as he, v as ge, w as me, x as de, y as we, z as ye } from "./local-data-source-nap9Nenj.js";
import { a as be, i as ve, o as _e } from "./raw-pass-pool-BioIlrK-.js";
import { J as Ae, O as Se, Wt as Ce, Yt as Ee, bt as Ie, dt as Re, g as ke, h as Be, l as Te, nn as Me, pt as Oe, r as Ue, rn as Fe, s as xe, tt as ze, xt as De } from "./store-D5LPiRds.js";
import { A as Ne, Ct as Pe, St as Ge, j as Le, k as $e, m as We, p as He, xt as je } from "./per-source-defaults-D5O6G9kE.js";
import { t as Ve } from "./audit-log-BT4oxwxf.js";
import { n as Xe, s as Ye, t as Ze } from "./local-ggir-hasib-variants-BosU6Z8w.js";
import { D as Ke, _ as qe, f as Je, g as Qe, i as et, k as tt, l as nt, u as rt, y as it } from "./local-nonwear-unified-BwC-PW0G.js";
import { O as at } from "./local-export-worker-BqV3_TjS.js";
import { c as st, d as ot, f as lt, g as ct, i as ut, l as ft, o as pt, p as ht, s as gt, u as mt } from "./epoch-series-import-Bdyw9N-X.js";
import { t as dt } from "./physical-activity-classifier-output-Dm913GDz.js";
import { A as wt, C as yt, D as bt, E as vt, M as _t, O as At, S as St, T as Ct, _ as Et, a as It, b as Rt, c as kt, d as Bt, f as Tt, g as Mt, h as Ot, i as Ut, j as Ft, k as xt, l as zt, m as Dt, n as Nt, o as Pt, p as Gt, r as Lt, s as $t, u as Wt, v as Ht, w as jt, x as Vt, y as Xt } from "./ggir-import-Bw8k7gXX.js";
import { n as Yt, r as Zt, t as Kt } from "./lstm-model-manager-DgI-Jm53.js";
import { computeTensorConsensusForDay as Qt, cubeRunsOnGrid as en, finalizeAndAuditScoredVariantWarm as tn, rewarmFileScoredVariants as nn, runAlgorithmCubeForDay as rn, scoreBuiltinGgirSadehColeForDay as an, scoreCountBasedHasibVariantsForDay as sn, sleepWakeToPersistedOutputs as on, t as ln, warmFileScoredVariants as cn, withRecordingWakeThreshold as un } from "./cube-variants-BAPyb150.js";
async function fn(e, t, n) {
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
function pn(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const r of t) {
		const t = new Date(r.startMs), i = `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(t.getUTCDate()).padStart(2, "0")}`, a = n.get(i) ?? [];
		a.push({
			fileId: e,
			analysisDate: i,
			startTimestamp: r.startMs / 1e3,
			endTimestamp: r.endMs / 1e3,
			periodIndex: a.length
		}), n.set(i, a);
	}
	return n;
}
function hn(e) {
	const t = {
		skipRows: e.skipRows,
		columnMapping: e.columnMapping ?? {},
		...void 0 === e.preferredActivityColumn ? {} : { preferredActivityColumn: e.preferredActivityColumn }
	};
	return {
		...t,
		settingsHash: Pe(t),
		at: e.at ?? (/* @__PURE__ */ new Date()).toISOString()
	};
}
p.map((e) => ({
	value: e,
	label: o[e].label
}));
const gn = /* @__PURE__ */ new Set(["x,y,z", "x,y,z,label"]);
function mn(e) {
	const t = e.trim();
	if (0 === t.length) return null;
	const n = Number.parseFloat(t);
	return Number.isFinite(n) ? n : null;
}
var dn, wn, yn, bn, vn, _n, An, Sn, Cn, En, In, Rn, kn = a((e) => {
	e.byteLength = function(e) {
		var t = s(e), n = t[0], r = t[1];
		return 3 * (n + r) / 4 - r;
	}, e.toByteArray = function(e) {
		for (var t, i = s(e), a = i[0], o = i[1], l = new r(function(e, t, n) {
			return 3 * (t + n) / 4 - n;
		}(0, a, o)), c = 0, u = o > 0 ? a - 4 : a, f = 0; f < u; f += 4) t = n[e.charCodeAt(f)] << 18 | n[e.charCodeAt(f + 1)] << 12 | n[e.charCodeAt(f + 2)] << 6 | n[e.charCodeAt(f + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = 255 & t;
		return 2 === o && (t = n[e.charCodeAt(f)] << 2 | n[e.charCodeAt(f + 1)] >> 4, l[c++] = 255 & t), 1 === o && (t = n[e.charCodeAt(f)] << 10 | n[e.charCodeAt(f + 1)] << 4 | n[e.charCodeAt(f + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = 255 & t), l;
	}, e.fromByteArray = function(e) {
		for (var n, r = e.length, i = r % 3, a = [], s = 16383, o = 0, c = r - i; o < c; o += s) a.push(l(e, o, o + s > c ? c : o + s));
		return 1 === i ? (n = e[r - 1], a.push(t[n >> 2] + t[n << 4 & 63] + "==")) : 2 === i && (n = (e[r - 2] << 8) + e[r - 1], a.push(t[n >> 10] + t[n >> 4 & 63] + t[n << 2 & 63] + "=")), a.join("");
	};
	for (var t = [], n = [], r = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0; a < 64; ++a) t[a] = i[a], n[i.charCodeAt(a)] = a;
	function s(e) {
		var t = e.length;
		if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
		var n = e.indexOf("=");
		return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4];
	}
	function o(e) {
		return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[63 & e];
	}
	function l(e, t, n) {
		for (var r, i = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), i.push(o(r));
		return i.join("");
	}
	n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63;
}), Bn = a((e) => {
	/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
	e.read = function(e, t, n, r, i) {
		var a, s, o = 8 * i - r - 1, l = (1 << o) - 1, c = l >> 1, u = -7, f = n ? i - 1 : 0, p = n ? -1 : 1, h = e[t + f];
		for (f += p, a = h & (1 << -u) - 1, h >>= -u, u += o; u > 0; a = 256 * a + e[t + f], f += p, u -= 8);
		for (s = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; s = 256 * s + e[t + f], f += p, u -= 8);
		if (0 === a) a = 1 - c;
		else {
			if (a === l) return s ? NaN : 1 / 0 * (h ? -1 : 1);
			s += Math.pow(2, r), a -= c;
		}
		return (h ? -1 : 1) * s * Math.pow(2, a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var s, o, l, c = 8 * a - i - 1, u = (1 << c) - 1, f = u >> 1, p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = r ? 0 : a - 1, g = r ? 1 : -1, m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
		for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0, s = u) : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (t += s + f >= 1 ? p / l : p * Math.pow(2, 1 - f)) * l >= 2 && (s++, l /= 2), s + f >= u ? (o = 0, s = u) : s + f >= 1 ? (o = (t * l - 1) * Math.pow(2, i), s += f) : (o = t * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + h] = 255 & o, h += g, o /= 256, i -= 8);
		for (s = s << i | o, c += i; c > 0; e[n + h] = 255 & s, h += g, s /= 256, c -= 8);
		e[n + h - g] |= 128 * m;
	};
}), Tn = a((e) => {
	const t = kn(), n = Bn(), r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
	e.Buffer = s, e.SlowBuffer = function(e) {
		return +e != e && (e = 0), s.alloc(+e);
	}, e.INSPECT_MAX_BYTES = 50;
	const i = 2147483647;
	function a(e) {
		if (e > i) throw new RangeError("The value \"" + e + "\" is invalid for option \"size\"");
		const t = new Uint8Array(e);
		return Object.setPrototypeOf(t, s.prototype), t;
	}
	function s(e, t, n) {
		if ("number" == typeof e) {
			if ("string" == typeof t) throw new TypeError("The \"string\" argument must be of type string. Received type number");
			return c(e);
		}
		return o(e, t, n);
	}
	function o(e, t, n) {
		if ("string" == typeof e) return function(e, t) {
			if ("string" == typeof t && "" !== t || (t = "utf8"), !s.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
			const n = 0 | h(e, t);
			let r = a(n);
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
		if (null != r && r !== e) return s.from(r, t, n);
		const i = function(e) {
			if (s.isBuffer(e)) {
				const t = 0 | p(e.length), n = a(t);
				return 0 === n.length || e.copy(n, 0, 0, t), n;
			}
			return void 0 !== e.length ? "number" != typeof e.length || Y(e.length) ? a(0) : u(e) : "Buffer" === e.type && Array.isArray(e.data) ? u(e.data) : void 0;
		}(e);
		if (i) return i;
		if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return s.from(e[Symbol.toPrimitive]("string"), t, n);
		throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
	}
	function l(e) {
		if ("number" != typeof e) throw new TypeError("\"size\" argument must be of type number");
		if (e < 0) throw new RangeError("The value \"" + e + "\" is invalid for option \"size\"");
	}
	function c(e) {
		return l(e), a(e < 0 ? 0 : 0 | p(e));
	}
	function u(e) {
		const t = e.length < 0 ? 0 : 0 | p(e.length), n = a(t);
		for (let r = 0; r < t; r += 1) n[r] = 255 & e[r];
		return n;
	}
	function f(e, t, n) {
		if (t < 0 || e.byteLength < t) throw new RangeError("\"offset\" is outside of buffer bounds");
		if (e.byteLength < t + (n || 0)) throw new RangeError("\"length\" is outside of buffer bounds");
		let r;
		return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, s.prototype), r;
	}
	function p(e) {
		if (e >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
		return 0 | e;
	}
	function h(e, t) {
		if (s.isBuffer(e)) return e.length;
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
			case "utf-8": return H(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return 2 * n;
			case "hex": return n >>> 1;
			case "base64": return j(e).length;
			default:
				if (i) return r ? -1 : H(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	function g(e, t, n) {
		let r = !1;
		if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
		if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
		if ((n >>>= 0) <= (t >>>= 0)) return "";
		for (e || (e = "utf8");;) switch (e) {
			case "hex": return k(this, t, n);
			case "utf8":
			case "utf-8": return C(this, t, n);
			case "ascii": return I(this, t, n);
			case "latin1":
			case "binary": return R(this, t, n);
			case "base64": return S(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return B(this, t, n);
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
		if ("string" == typeof t && (t = s.from(t, r)), s.isBuffer(t)) return 0 === t.length ? -1 : w(e, t, n, r, i);
		if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : w(e, [t], n, r, i);
		throw new TypeError("val must be string, number or Buffer");
	}
	function w(e, t, n, r, i) {
		let a, s = 1, o = e.length, l = t.length;
		if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
			if (e.length < 2 || t.length < 2) return -1;
			s = 2, o /= 2, l /= 2, n /= 2;
		}
		function c(e, t) {
			return 1 === s ? e[t] : e.readUInt16BE(t * s);
		}
		if (i) {
			let r = -1;
			for (a = n; a < o; a++) if (c(e, a) === c(t, -1 === r ? 0 : a - r)) {
				if (-1 === r && (r = a), a - r + 1 === l) return r * s;
			} else -1 !== r && (a -= a - r), r = -1;
		} else for (n + l > o && (n = o - l), a = n; a >= 0; a--) {
			let n = !0;
			for (let r = 0; r < l; r++) if (c(e, a + r) !== c(t, r)) {
				n = !1;
				break;
			}
			if (n) return a;
		}
		return -1;
	}
	function y(e, t, n, r) {
		n = Number(n) || 0;
		const i = e.length - n;
		r ? (r = Number(r)) > i && (r = i) : r = i;
		const a = t.length;
		r > a / 2 && (r = a / 2);
		let s = 0;
		for (; s < r; ++s) {
			const r = parseInt(t.substr(2 * s, 2), 16);
			if (Y(r)) return s;
			e[n + s] = r;
		}
		return s;
	}
	function b(e, t, n, r) {
		return V(H(t, e.length - n), e, n, r);
	}
	function v(e, t, n, r) {
		return V(function(e) {
			const t = [];
			for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
			return t;
		}(t), e, n, r);
	}
	function _(e, t, n, r) {
		return V(j(t), e, n, r);
	}
	function A(e, t, n, r) {
		return V(function(e, t) {
			let n, r, i;
			const a = [];
			for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) n = e.charCodeAt(s), r = n >> 8, i = n % 256, a.push(i), a.push(r);
			return a;
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
			let a = null, s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
			if (i + s <= n) {
				let n, r, o, l;
				switch (s) {
					case 1:
						t < 128 && (a = t);
						break;
					case 2:
						n = e[i + 1], 128 == (192 & n) && (l = (31 & t) << 6 | 63 & n, l > 127 && (a = l));
						break;
					case 3:
						n = e[i + 1], r = e[i + 2], 128 == (192 & n) && 128 == (192 & r) && (l = (15 & t) << 12 | (63 & n) << 6 | 63 & r, l > 2047 && (l < 55296 || l > 57343) && (a = l));
						break;
					case 4: n = e[i + 1], r = e[i + 2], o = e[i + 3], 128 == (192 & n) && 128 == (192 & r) && 128 == (192 & o) && (l = (15 & t) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & o, l > 65535 && l < 1114112 && (a = l));
				}
			}
			null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), r.push(a), i += s;
		}
		return function(e) {
			const t = e.length;
			if (t <= E) return String.fromCharCode.apply(String, e);
			let n = "", r = 0;
			for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += E));
			return n;
		}(r);
	}
	e.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = function() {
		try {
			const e = /* @__PURE__ */ new Uint8Array(1), t = { foo: function() {
				return 42;
			} };
			return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
		} catch (e) {
			return !1;
		}
	}(), s.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
		enumerable: !0,
		get: function() {
			if (s.isBuffer(this)) return this.buffer;
		}
	}), Object.defineProperty(s.prototype, "offset", {
		enumerable: !0,
		get: function() {
			if (s.isBuffer(this)) return this.byteOffset;
		}
	}), s.poolSize = 8192, s.from = function(e, t, n) {
		return o(e, t, n);
	}, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(e, t, n) {
		return function(e, t, n) {
			return l(e), e <= 0 ? a(e) : void 0 !== t ? "string" == typeof n ? a(e).fill(t, n) : a(e).fill(t) : a(e);
		}(e, t, n);
	}, s.allocUnsafe = function(e) {
		return c(e);
	}, s.allocUnsafeSlow = function(e) {
		return c(e);
	}, s.isBuffer = function(e) {
		return null != e && !0 === e._isBuffer && e !== s.prototype;
	}, s.compare = function(e, t) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : r < n ? 1 : 0;
	}, s.isEncoding = function(e) {
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
	}, s.concat = function(e, t) {
		if (!Array.isArray(e)) throw new TypeError("\"list\" argument must be an Array of Buffers");
		if (0 === e.length) return s.alloc(0);
		let n;
		if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
		const r = s.allocUnsafe(t);
		let i = 0;
		for (n = 0; n < e.length; ++n) {
			let t = e[n];
			if (X(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else {
				if (!s.isBuffer(t)) throw new TypeError("\"list\" argument must be an Array of Buffers");
				t.copy(r, i);
			}
			i += t.length;
		}
		return r;
	}, s.byteLength = h, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
		const e = this.length;
		if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
		for (let t = 0; t < e; t += 2) m(this, t, t + 1);
		return this;
	}, s.prototype.swap32 = function() {
		const e = this.length;
		if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
		for (let t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
		return this;
	}, s.prototype.swap64 = function() {
		const e = this.length;
		if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
		for (let t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
		return this;
	}, s.prototype.toString = function() {
		const e = this.length;
		return 0 === e ? "" : 0 === arguments.length ? C(this, 0, e) : g.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
		return this === e || 0 === s.compare(this, e);
	}, s.prototype.inspect = function() {
		let t = "";
		const n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
		if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
		if (r >= i && t >= n) return 0;
		if (r >= i) return -1;
		if (t >= n) return 1;
		if (this === e) return 0;
		let a = (i >>>= 0) - (r >>>= 0), o = (n >>>= 0) - (t >>>= 0);
		const l = Math.min(a, o), c = this.slice(r, i), u = e.slice(t, n);
		for (let s = 0; s < l; ++s) if (c[s] !== u[s]) {
			a = c[s], o = u[s];
			break;
		}
		return a < o ? -1 : o < a ? 1 : 0;
	}, s.prototype.includes = function(e, t, n) {
		return -1 !== this.indexOf(e, t, n);
	}, s.prototype.indexOf = function(e, t, n) {
		return d(this, e, t, n, !0);
	}, s.prototype.lastIndexOf = function(e, t, n) {
		return d(this, e, t, n, !1);
	}, s.prototype.write = function(e, t, n, r) {
		if (void 0 === t) r = "utf8", n = this.length, t = 0;
		else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
		else {
			if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
			t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
		}
		const i = this.length - t;
		if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
		r || (r = "utf8");
		let a = !1;
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
				if (a) throw new TypeError("Unknown encoding: " + r);
				r = ("" + r).toLowerCase(), a = !0;
		}
	}, s.prototype.toJSON = function() {
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
	function k(e, t, n) {
		const r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let a = t; a < n; ++a) i += Z[e[a]];
		return i;
	}
	function B(e, t, n) {
		const r = e.slice(t, n);
		let i = "";
		for (let a = 0; a < r.length - 1; a += 2) i += String.fromCharCode(r[a] + 256 * r[a + 1]);
		return i;
	}
	function T(e, t, n) {
		if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
		if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
	}
	function M(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw new TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw new RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw new RangeError("Index out of range");
	}
	function O(e, t, n, r, i) {
		G(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let s = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, n;
	}
	function U(e, t, n, r, i) {
		G(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let s = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = s, s >>= 8, e[n + 2] = s, s >>= 8, e[n + 1] = s, s >>= 8, e[n] = s, n + 8;
	}
	function F(e, t, n, r, i, a) {
		if (n + r > e.length) throw new RangeError("Index out of range");
		if (n < 0) throw new RangeError("Index out of range");
	}
	function x(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || F(e, 0, r, 4), n.write(e, t, r, i, 23, 4), r + 4;
	}
	function z(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || F(e, 0, r, 8), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.slice = function(e, t) {
		const n = this.length;
		(e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
		const r = this.subarray(e, t);
		return Object.setPrototypeOf(r, s.prototype), r;
	}, s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || T(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || T(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || T(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || T(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || T(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || T(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || T(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = K(function(e) {
		L(e >>>= 0, "offset");
		const t = this[e], n = this[e + 7];
		void 0 !== t && void 0 !== n || $(e, this.length - 8);
		const r = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24, i = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = K(function(e) {
		L(e >>>= 0, "offset");
		const t = this[e], n = this[e + 7];
		void 0 !== t && void 0 !== n || $(e, this.length - 8);
		const r = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e], i = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || T(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || T(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= Math.pow(2, 8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || T(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || T(e, 2, this.length);
		const n = this[e] | this[e + 1] << 8;
		return 32768 & n ? 4294901760 | n : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || T(e, 2, this.length);
		const n = this[e + 1] | this[e] << 8;
		return 32768 & n ? 4294901760 | n : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || T(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || T(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = K(function(e) {
		L(e >>>= 0, "offset");
		const t = this[e], n = this[e + 7];
		void 0 !== t && void 0 !== n || $(e, this.length - 8);
		const r = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = K(function(e) {
		L(e >>>= 0, "offset");
		const t = this[e], n = this[e + 7];
		void 0 !== t && void 0 !== n || $(e, this.length - 8);
		const r = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || T(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || T(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || T(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || T(e, 8, this.length), n.read(this, e, !1, 52, 8);
	}, s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		e = +e, t >>>= 0, n >>>= 0, r || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
		let i = 1, a = 0;
		for (this[t] = 255 & e; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		e = +e, t >>>= 0, n >>>= 0, r || M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
		let i = n - 1, a = 1;
		for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
	}, s.prototype.writeBigUInt64LE = K(function(e, t = 0) {
		return O(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = K(function(e, t = 0) {
		return U(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			const r = Math.pow(2, 8 * n - 1);
			M(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, s = 0;
		for (this[t] = 255 & e; ++i < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a | 0) - s & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			const r = Math.pow(2, 8 * n - 1);
			M(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, s = 0;
		for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a | 0) - s & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || M(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
	}, s.prototype.writeBigInt64LE = K(function(e, t = 0) {
		return O(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = K(function(e, t = 0) {
		return U(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeFloatLE = function(e, t, n) {
		return x(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return x(this, e, t, !1, n);
	}, s.prototype.writeDoubleLE = function(e, t, n) {
		return z(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return z(this, e, t, !1, n);
	}, s.prototype.copy = function(e, t, n, r) {
		if (!s.isBuffer(e)) throw new TypeError("argument should be a Buffer");
		if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
		if (0 === e.length || 0 === this.length) return 0;
		if (t < 0) throw new RangeError("targetStart out of bounds");
		if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
		if (r < 0) throw new RangeError("sourceEnd out of bounds");
		r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
		const i = r - n;
		return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i;
	}, s.prototype.fill = function(e, t, n, r) {
		if ("string" == typeof e) {
			if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
			if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
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
			const a = s.isBuffer(e) ? e : s.from(e, r), o = a.length;
			if (0 === o) throw new TypeError("The value \"" + e + "\" is invalid for argument \"value\"");
			for (i = 0; i < n - t; ++i) this[i + t] = a[i % o];
		}
		return this;
	};
	const D = {};
	function N(e, t, n) {
		D[e] = class extends n {
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
	function P(e) {
		let t = "", n = e.length;
		const r = "-" === e[0] ? 1 : 0;
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function G(e, t, n, r, i, a) {
		if (e > n || e < t) {
			const r = "bigint" == typeof t ? "n" : "";
			let i;
			throw i = a > 3 ? 0 === t || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8 * (a + 1)}${r}` : `>= -(2${r} ** ${8 * (a + 1) - 1}${r}) and < 2 ** ${8 * (a + 1) - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new D.ERR_OUT_OF_RANGE("value", i, e);
		}
		(function(e, t, n) {
			L(t, "offset"), void 0 !== e[t] && void 0 !== e[t + n] || $(t, e.length - (n + 1));
		})(r, i, a);
	}
	function L(e, t) {
		if ("number" != typeof e) throw new D.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function $(e, t, n) {
		if (Math.floor(e) !== e) throw L(e, n), new D.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
		if (t < 0) throw new D.ERR_BUFFER_OUT_OF_BOUNDS();
		throw new D.ERR_OUT_OF_RANGE(n || "offset", `>= ${n ? 1 : 0} and <= ${t}`, e);
	}
	N("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), N("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), N("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = P(String(n)) : "bigint" == typeof n && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = P(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	const W = /[^+/0-9A-Za-z-_]/g;
	function H(e, t) {
		let n;
		t = t || 1 / 0;
		const r = e.length;
		let i = null;
		const a = [];
		for (let s = 0; s < r; ++s) {
			if (n = e.charCodeAt(s), n > 55295 && n < 57344) {
				if (!i) {
					if (n > 56319) {
						(t -= 3) > -1 && a.push(239, 191, 189);
						continue;
					}
					if (s + 1 === r) {
						(t -= 3) > -1 && a.push(239, 191, 189);
						continue;
					}
					i = n;
					continue;
				}
				if (n < 56320) {
					(t -= 3) > -1 && a.push(239, 191, 189), i = n;
					continue;
				}
				n = 65536 + (i - 55296 << 10 | n - 56320);
			} else i && (t -= 3) > -1 && a.push(239, 191, 189);
			if (i = null, n < 128) {
				if ((t -= 1) < 0) break;
				a.push(n);
			} else if (n < 2048) {
				if ((t -= 2) < 0) break;
				a.push(n >> 6 | 192, 63 & n | 128);
			} else if (n < 65536) {
				if ((t -= 3) < 0) break;
				a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
			} else {
				if (!(n < 1114112)) throw new Error("Invalid code point");
				if ((t -= 4) < 0) break;
				a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
			}
		}
		return a;
	}
	function j(e) {
		return t.toByteArray(function(e) {
			if ((e = (e = e.split("=")[0]).trim().replace(W, "")).length < 2) return "";
			for (; e.length % 4 != 0;) e += "=";
			return e;
		}(e));
	}
	function V(e, t, n, r) {
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
}), Mn = a((e, t) => {
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
}), On = a((e, t) => {
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
}), Un = a((e, t) => {
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
}), Fn = n({
	bin: () => An,
	contributors: () => yn,
	default: () => Rn,
	dependencies: () => Cn,
	description: () => bn,
	devDependencies: () => En,
	directories: () => Sn,
	license: () => "MIT",
	main: () => vn,
	name: () => dn,
	repository: () => _n,
	scripts: () => In,
	version: () => wn
}), xn = t(() => {
	Rn = {
		name: dn = "seek-bzip",
		version: wn = "2.0.0",
		contributors: yn = [
			"C. Scott Ananian (http://cscott.net)",
			"Eli Skeggs",
			"Kevin Kwok",
			"Rob Landley (http://landley.net)"
		],
		description: bn = "a pure-JavaScript Node.JS module for random-access decoding bzip2 data",
		main: vn = "./lib/index.js",
		repository: _n = {
			type: "git",
			url: "https://github.com/cscott/seek-bzip.git"
		},
		license: "MIT",
		bin: An = {
			"seek-bunzip": "./bin/seek-bunzip",
			"seek-table": "./bin/seek-bzip-table"
		},
		directories: Sn = { test: "test" },
		dependencies: Cn = { commander: "^6.0.0" },
		devDependencies: En = {
			fibers: "^5.0.0",
			mocha: "^8.1.0"
		},
		scripts: In = { test: "mocha" }
	};
}), zn = a((e, t) => {
	var n = Mn(), i = On(), a = Un(), s = (xn(), r(Fn).default), o = function(e, t) {
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
		return this._get_next_block() ? (this.blockCRC = new a(), !0) : (this.writeCount = -1, !1);
	}, f.prototype._start_bunzip = function(e, t) {
		var r = new Buffer(4);
		4 === e.read(r, 0, 4) && "BZh" === String.fromCharCode(r[0], r[1], r[2]) || u(l.NOT_BZIP_DATA, "bad magic");
		var i = r[3] - 48;
		(i < 1 || i > 9) && u(l.NOT_BZIP_DATA, "level out of range"), this.reader = new n(e), this.dbufSize = 1e5 * i, this.nextoutput = 0, this.outputStream = t, this.streamCRC = 0;
	}, f.prototype._get_next_block = function() {
		var e, t, n, r = this.reader, i = r.pi();
		if ("177245385090" === i) return !1;
		"314159265359" !== i && u(l.NOT_BZIP_DATA), this.targetBlockCRC = r.read(32) >>> 0, this.streamCRC = (this.targetBlockCRC ^ (this.streamCRC << 1 | this.streamCRC >>> 31)) >>> 0, r.read(1) && u(l.OBSOLETE_INPUT);
		var a = r.read(24);
		a > this.dbufSize && u(l.DATA_ERROR, "initial position out of bounds");
		var s = r.read(16), c = new Buffer(256), f = 0;
		for (e = 0; e < 16; e++) if (s & 1 << 15 - e) {
			var p = 16 * e;
			for (n = r.read(16), t = 0; t < 16; t++) n & 1 << 15 - t && (c[f++] = p + t);
		}
		var h = r.read(3);
		(h < 2 || h > 6) && u(l.DATA_ERROR);
		var g = r.read(15);
		0 === g && u(l.DATA_ERROR);
		var m = new Buffer(256);
		for (e = 0; e < h; e++) m[e] = e;
		var d = new Buffer(g);
		for (e = 0; e < g; e++) {
			for (t = 0; r.read(1); t++) t >= h && u(l.DATA_ERROR);
			d[e] = o(m, t);
		}
		var w, y = f + 2, b = [];
		for (t = 0; t < h; t++) {
			var v = new Buffer(y), _ = /* @__PURE__ */ new Uint16Array(21);
			for (s = r.read(5), e = 0; e < y; e++) {
				for (; (s < 1 || s > 20) && u(l.DATA_ERROR), r.read(1);) r.read(1) ? s-- : s++;
				v[e] = s;
			}
			var A, S = A = v[0];
			for (e = 1; e < y; e++) v[e] > A ? A = v[e] : v[e] < S && (S = v[e]);
			w = {}, b.push(w), w.permute = /* @__PURE__ */ new Uint16Array(258), w.limit = /* @__PURE__ */ new Uint32Array(22), w.base = /* @__PURE__ */ new Uint32Array(21), w.minLen = S, w.maxLen = A;
			var C = 0;
			for (e = S; e <= A; e++) for (_[e] = w.limit[e] = 0, s = 0; s < y; s++) v[s] === e && (w.permute[C++] = s);
			for (e = 0; e < y; e++) _[v[e]]++;
			for (C = s = 0, e = S; e < A; e++) C += _[e], w.limit[e] = C - 1, C <<= 1, s += _[e], w.base[e + 1] = C - s;
			w.limit[A + 1] = Number.MAX_VALUE, w.limit[A] = C + _[A] - 1, w.base[S] = 0;
		}
		var E = /* @__PURE__ */ new Uint32Array(256);
		for (e = 0; e < 256; e++) m[e] = e;
		var I, R = 0, k = 0, B = 0, T = this.dbuf = new Uint32Array(this.dbufSize);
		for (y = 0;;) {
			for (y-- || (y = 49, B >= g && u(l.DATA_ERROR), w = b[d[B++]]), e = w.minLen, t = r.read(e); e > w.maxLen && u(l.DATA_ERROR), !(t <= w.limit[e]); e++) t = t << 1 | r.read(1);
			((t -= w.base[e]) < 0 || t >= 258) && u(l.DATA_ERROR);
			var M = w.permute[t];
			if (0 !== M && 1 !== M) {
				if (R) for (R = 0, k + s > this.dbufSize && u(l.DATA_ERROR), E[I = c[m[0]]] += s; s--;) T[k++] = I;
				if (M > f) break;
				k >= this.dbufSize && u(l.DATA_ERROR), E[I = c[I = o(m, e = M - 1)]]++, T[k++] = I;
			} else R || (R = 1, s = 0), s += 0 === M ? R : 2 * R, R <<= 1;
		}
		for ((a < 0 || a >= k) && u(l.DATA_ERROR), t = 0, e = 0; e < 256; e++) n = t + E[e], E[e] = t, t = n;
		for (e = 0; e < k; e++) T[E[I = 255 & T[e]]] |= e << 8, E[I]++;
		var O = 0, U = 0, F = 0;
		return k && (U = 255 & (O = T[a]), O >>= 8, F = -1), this.writePos = O, this.writeCurrent = U, this.writeCount = k, this.writeRun = F, !0;
	}, f.prototype._read_bunzip = function(e, t) {
		var n, r, i;
		if (this.writeCount < 0) return 0;
		var a = this.dbuf, s = this.writePos, o = this.writeCurrent, c = this.writeCount;
		this.outputsize;
		for (var f = this.writeRun; c;) {
			for (c--, r = o, o = 255 & (s = a[s]), s >>= 8, 3 === f++ ? (n = o, i = r, o = -1) : (n = 1, i = o), this.blockCRC.updateCRCRun(i, n); n--;) this.outputStream.writeByte(i), this.nextoutput++;
			o != r && (f = 0);
		}
		return this.writeCount = c, this.blockCRC.getCRC() !== this.targetBlockCRC && u(l.DATA_ERROR, "Bad block CRC (got " + this.blockCRC.getCRC().toString(16) + " expected " + this.targetBlockCRC.toString(16) + ")"), this.nextoutput;
	};
	var p = function(e) {
		if ("readByte" in e) return e;
		var t = new i();
		return t.pos = 0, t.readByte = function() {
			return e[this.pos++];
		}, t.seek = function(e) {
			this.pos = e;
		}, t.eof = function() {
			return this.pos >= e.length;
		}, t;
	}, h = function(e) {
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
		for (var r = p(e), i = h(t), a = new f(r, i); !("eof" in r) || !r.eof();) if (a._init_block()) a._read_bunzip();
		else {
			var s = a.reader.read(32) >>> 0;
			if (s !== a.streamCRC && u(l.DATA_ERROR, "Bad stream CRC (got " + a.streamCRC.toString(16) + " expected " + s.toString(16) + ")"), !n || !("eof" in r) || r.eof()) break;
			a._start_bunzip(r, i);
		}
		if ("getBuffer" in i) return i.getBuffer();
	}, f.decodeBlock = function(e, t, n) {
		var r = p(e), i = h(n), s = new f(r, i);
		if (s.reader.seek(t), s._get_next_block() && (s.blockCRC = new a(), s.writeCopies = 0, s._read_bunzip()), "getBuffer" in i) return i.getBuffer();
	}, f.table = function(e, t, n) {
		var r = new i();
		r.delegate = p(e), r.pos = 0, r.readByte = function() {
			return this.pos++, this.delegate.readByte();
		}, r.delegate.eof && (r.eof = r.delegate.eof.bind(r.delegate));
		var a = new i();
		a.pos = 0, a.writeByte = function() {
			this.pos++;
		};
		for (var s = new f(r, a), o = s.dbufSize; !("eof" in r) || !r.eof();) {
			var l = 8 * r.pos + s.reader.bitOffset;
			if (s.reader.hasByte && (l -= 8), s._init_block()) {
				var c = a.pos;
				s._read_bunzip(), t(l, a.pos - c);
			} else {
				if (s.reader.read(32), !n || !("eof" in r) || r.eof()) break;
				s._start_bunzip(r, a), console.assert(s.dbufSize === o, "shouldn't change block size within multistream file");
			}
		}
	}, f.Stream = i, f.version = s.version, f.license = s.license, t.exports = f;
}), Dn = Tn(), Nn = s(zn(), 1);
const Pn = 512, Gn = new TextDecoder("utf-8");
function Ln(e) {
	for (const t of e) if (0 !== t) return !1;
	return !0;
}
function $n(e, t, n) {
	let r = t;
	for (; r < n && 0 !== e[r];) r += 1;
	return Gn.decode(e.subarray(t, r)).trim();
}
function Wn(e) {
	const t = $n(e, 124, 136).replace(/\0/g, "").trim();
	return t && Number.parseInt(t, 8) || 0;
}
function Hn(e) {
	const t = e.indexOf(",");
	if (t < 0) return null;
	const n = e.indexOf(",", t + 1);
	if (n < 0) return null;
	const r = e.indexOf(",", n + 1);
	if (r < 0) return null;
	const i = function(e) {
		if (e.length < 23) return null;
		const t = Number.parseInt(e.slice(0, 4), 10), n = Number.parseInt(e.slice(5, 7), 10), r = Number.parseInt(e.slice(8, 10), 10), i = Number.parseInt(e.slice(11, 13), 10), a = Number.parseInt(e.slice(14, 16), 10), s = Number.parseInt(e.slice(17, 19), 10), o = Number.parseInt(e.slice(20, 23), 10);
		return Number.isFinite(t) && Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(i) && Number.isFinite(a) && Number.isFinite(s) && Number.isFinite(o) ? Date.UTC(t, n - 1, r, i, a, s, o) : null;
	}(e.slice(0, t).trim());
	if (null === i) return null;
	const a = Number.parseFloat(e.slice(t + 1, n)), s = Number.parseFloat(e.slice(n + 1, r)), o = Number.parseFloat(e.slice(r + 1));
	return Number.isFinite(a) && Number.isFinite(s) && Number.isFinite(o) ? {
		timestampMs: i,
		x: a,
		y: s,
		z: o
	} : null;
}
function jn(e, t, n, r, i, a, s, o, l) {
	null !== e && (i.push(e), a.push(t), s.push(n), o.push(r), l.push(Math.hypot(t, n, r)));
}
async function Vn(e, t) {
	if (e.size > 536870912) throw new Error(`PAX80 archive too large (${e.size} bytes); cap is 536870912`);
	t?.({
		percent: 0,
		message: `Decompressing ${e.name}...`
	});
	const n = new Uint8Array(await e.arrayBuffer()), r = globalThis;
	r.Buffer ??= Dn.Buffer;
	const i = function(e, t) {
		let n = new Uint8Array(Math.min(1048576, t)), r = 0;
		return Nn.default.decode(e, {
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
			for (; n + Pn <= e.length;) {
				const r = e.subarray(n, n + Pn);
				if (Ln(r)) break;
				const i = $n(r, 0, 100), a = $n(r, 345, 500), s = a ? `${a}/${i}` : i, o = String.fromCharCode(r[156] ?? 0), l = Wn(r), c = n + Pn;
				("\0" === o || "0" === o) && l > 0 && t.push({
					name: s,
					offset: c,
					size: l
				}), n = c + Math.ceil(l / Pn) * Pn;
			}
			return t;
		}(e).filter((e) => e.name.toLowerCase().endsWith(".sensor.csv")).sort((e, t) => e.name.localeCompare(t.name));
		if (0 === n.length) throw new Error("PAX80 archive does not contain any *.sensor.csv members");
		const r = [], i = [], a = [], s = [], o = [];
		let l = null, c = 0, u = 0, f = 0, p = 0, h = 0;
		if (n.forEach((g, m) => {
			t?.({
				percent: (m + 1) / n.length * 100,
				message: `Parsing PAX80 member ${m + 1}/${n.length}: ${g.name}`
			});
			const d = e.subarray(g.offset, g.offset + g.size), w = Gn.decode(d);
			let y = 0, b = !1;
			for (; y <= w.length;) {
				const e = w.indexOf("\n", y), t = -1 === e ? w.length : e, n = w.slice(y, t), m = n.endsWith("\r") ? n.slice(0, -1) : n;
				if (y = -1 === e ? w.length + 1 : e + 1, !m) continue;
				if (!b) {
					if (b = !0, "HEADER_TIMESTAMP,X,Y,Z" !== m.trim()) throw new Error(`Unexpected PAX80 sensor header in ${g.name}: ${m.trim() || "<empty>"}`);
					continue;
				}
				const d = Hn(m);
				d && (0 === c && (l = d.timestampMs), u += Math.abs(d.x), f += Math.abs(d.y), p += Math.abs(d.z), c += 1, h += 1, 4800 === c && (jn(l, u, f, p, r, i, a, s, o), l = null, c = 0, u = 0, f = 0, p = 0));
			}
		}), 0 === h) throw new Error("PAX80 archive did not contain any valid raw samples");
		if (0 === r.length) throw new Error("PAX80 archive did not contain a complete 60-second epoch");
		return {
			timestamps_ms: r,
			axis_x: i,
			axis_y: a,
			axis_z: s,
			vector_magnitude: o,
			is_raw: !1,
			sample_frequency: 80,
			header_rows_skipped: 1,
			temperature: []
		};
	}(i, t);
}
let Xn = null, Yn = "", Zn = !1;
function Kn(e) {
	const t = new Uint8Array(e.byteLength);
	return t.set(e), t;
}
function qn(e) {
	return 1 / (1 + Math.exp(-Math.max(-60, Math.min(60, e))));
}
function Jn(e, t) {
	const n = Math.max(e, t), r = Math.exp(e - n), i = Math.exp(t - n);
	return i / (r + i);
}
function Qn(e) {
	if (e.data instanceof BigInt64Array || e.data instanceof BigUint64Array) throw new Error("LSTM ONNX output must be numeric float/int data, not bigint data");
	return e.data;
}
function er(e, t) {
	for (const n of t) {
		const t = e[n];
		if (t) return t;
	}
	return null;
}
function tr(e, t, n) {
	const r = new Uint8Array(t);
	for (let i = 0; i < t; i++) r[i] = (e[i] ?? 0) >= n ? 1 : 0;
	return r;
}
function nr(e) {
	Zn || e.env?.wasm && (e.env.wasm.wasmPaths = {
		mjs: "/sleep-scoring-wasm/assets/ort-wasm-simd-threaded-DwpQBVmx.mjs",
		wasm: "/sleep-scoring-wasm/assets/ort-wasm-simd-threaded-DDx2apAW.wasm"
	}, e.env.wasm.numThreads = 1, e.env.wasm.proxy = !0, Zn = !0);
}
async function rr(e, t = {}) {
	const n = e.epochs, r = e.bins ?? 30, i = e.channels ?? 4;
	if (n <= 0) return {
		probabilities: /* @__PURE__ */ new Float32Array(),
		scores: /* @__PURE__ */ new Uint8Array()
	};
	const a = n * r * i;
	if (e.data.length !== a) throw new Error(`LSTM feature tensor has ${String(e.data.length)} value(s), expected ${String(a)}`);
	const s = t.ort ?? await import("/sleep-scoring-wasm/assets/ort.bundle.min-BhaRNi-D.mjs");
	nr(s);
	const o = await async function(e) {
		if (e.session) return e.session;
		const t = {
			executionProviders: ["wasm"],
			graphOptimizationLevel: "all"
		};
		if (e.modelBytes) {
			const n = e.ort ?? await import("/sleep-scoring-wasm/assets/ort.bundle.min-BhaRNi-D.mjs");
			return nr(n), n.InferenceSession.create(Kn(e.modelBytes), t);
		}
		const n = Yt(e.modelId), r = e.modelUrl ?? n.url, i = e.modelUrl ? `url:${e.modelUrl}` : `selected:${n.id}:${n.version}:${r ?? "no-url"}`;
		return Xn && Yn === i || (Yn = i, Xn = (async () => {
			const i = e.ort ?? await import("/sleep-scoring-wasm/assets/ort.bundle.min-BhaRNi-D.mjs");
			if (nr(i), e.modelUrl) return i.InferenceSession.create(e.modelUrl, t);
			try {
				const e = Kn(await Zt(n.id));
				return await i.InferenceSession.create(e, t);
			} catch (a) {
				if (!r) throw a;
				return await i.InferenceSession.create(r, t);
			}
		})().catch((e) => {
			throw Xn = null, e;
		})), Xn;
	}({
		...t,
		ort: s
	}), l = o.inputNames[0];
	if (!l) throw new Error("LSTM ONNX model has no input");
	const c = new s.Tensor("float32", e.data, [
		1,
		n,
		r,
		i
	]);
	return function(e, t) {
		const { epochs: n } = t, r = function(e) {
			return null != e ? e : Kt(null);
		}(t.threshold), i = er(e, [
			"sleep_probability",
			"probabilities",
			"probability",
			"probs",
			"logits"
		]) ?? Object.values(e)[0] ?? null;
		if (!i) throw new Error("LSTM ONNX session returned no outputs");
		const a = Qn(i), s = i.dims ?? [], o = s.length > 0 ? s[s.length - 1] : void 0;
		if (a.length === n) {
			const e = new Float32Array(n), t = Array.from({ length: Math.min(a.length, 32) }, (e, t) => a[t] ?? 0).every((e) => e >= 0 && e <= 1);
			for (let r = 0; r < n; r++) e[r] = t ? a[r] ?? 0 : qn(a[r] ?? 0);
			return {
				probabilities: e,
				scores: tr(e, n, r)
			};
		}
		if (a.length >= 2 * n && (2 === o || a.length === 2 * n)) {
			const e = new Float32Array(n);
			for (let t = 0; t < n; t++) e[t] = Jn(a[2 * t] ?? 0, a[2 * t + 1] ?? 0);
			return {
				probabilities: e,
				scores: tr(e, n, r)
			};
		}
		const l = er(e, [
			"sleep",
			"sleep_prediction",
			"labels",
			"predictions"
		]);
		if (l) {
			const e = Qn(l);
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
		throw new Error(`LSTM ONNX output has ${String(a.length)} value(s), cannot align to ${String(n)} epoch(s)`);
	}(await o.run({ [l]: c }), {
		epochs: n,
		...null != t.threshold ? { threshold: t.threshold } : {}
	});
}
function ir(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n += 1) if (!Object.is(e[n], t[n])) return !1;
	return !0;
}
var ar = class e {
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
				case "hasib": return "hasib" === t.kind && e.algo === t.algo && JSON.stringify(e.config ?? null) === JSON.stringify(t.config ?? null) && ir(e.data, t.data);
				case "sadeh": return "sadeh" === t.kind && Object.is(e.threshold, t.threshold) && ir(e.activity, t.activity);
				case "coleKripke": return "coleKripke" === t.kind && e.useActilifeScaling === t.useActilifeScaling && ir(e.activity, t.activity);
			}
		}(e.request, t));
	}
	add(t) {
		if (this.find(t)) return;
		const n = { request: t }, r = e.bucket(t), i = this.buckets.get(r);
		i ? i.push(n) : this.buckets.set(r, [n]), this.entries.push(n);
	}
};
function sr(e) {
	return e.medianGapSeconds ? { medianGapSeconds: (t) => e.medianGapSeconds(t) } : {};
}
function or(e, t, n) {
	const r = e.find(t)?.outcome;
	if (!r) return n();
	if ("error" in r) return Promise.reject(new Error(r.error));
	const { result: i } = r, a = i instanceof Uint8Array ? new Uint8Array(i) : {
		...i,
		sib: new Uint8Array(i.sib)
	};
	return Promise.resolve(a);
}
const lr = {
	csv: "CSV",
	binary: "binary"
};
function cr(e, t, n) {
	const { label: r, wasmApi: i, signal: a, lstm: s } = e, o = e.cancelWasmOperation, l = e.ggirConfig.csvText;
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
			let a, s, o = "";
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
				const p = [];
				for (let n = 0; n < f.length; n++) {
					const h = f[n], g = f[n + 1] ?? c.timestamps.length;
					if (h === g) continue;
					const m = c.timestamps[h], d = c.timestamps[g - 1];
					if (!a || !s || u !== o || Math.abs(m - s.lastTs - e.countEpochSeconds) > .001) {
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
						s = {
							main: /* @__PURE__ */ new Map(),
							native: /* @__PURE__ */ new Map(),
							length: 0,
							nativeLength: 0,
							lastTs: NaN
						};
						for (const t of r) c[t]?.length && s.main.set(t, []), c.counts30s?.[t]?.length && s.native.set(t, []);
						a = {
							group: n,
							answers: /* @__PURE__ */ new Map(),
							...l.cube?.lstmProbabilities ? { probabilities: /* @__PURE__ */ new Float32Array() } : {}
						}, i.set(a, s), t.push({
							...l,
							group: n,
							...l.cube ? { cube: {} } : {}
						});
					}
					const w = s.length, y = s.nativeLength, b = c.counts30s?.timestamps.findIndex((e) => e >= m) ?? 0, v = c.counts30s?.timestamps.findIndex((t) => t >= d + e.countEpochSeconds) ?? -1, _ = v < 0 ? c.counts30s?.timestamps.length ?? 0 : v;
					for (const e of r) c[e]?.length && s.main.get(e)?.push(c[e].subarray(h, g)), c.counts30s?.[e]?.length && b >= 0 && s.native.get(e)?.push(c.counts30s[e].subarray(b, _));
					if (s.length += g - h, c.counts30s && b >= 0 && (s.nativeLength += Math.max(0, _ - b)), s.lastTs = d, a.probabilities && l.cube?.lstmProbabilities) {
						const e = new Float32Array(a.probabilities.length + g - h);
						e.set(a.probabilities), e.set(l.cube.lstmProbabilities.slice(h, g), a.probabilities.length), a.probabilities = e, t[t.length - 1].cube = { lstmProbabilities: e };
					}
					p.push({
						run: a,
						start: w,
						end: w + g - h,
						offset: h,
						nativeStart: y,
						nativeEnd: s.nativeLength,
						nativeOffset: Math.max(b, 0)
					}), o = u;
				}
				n.set(c, p);
			}
			for (const [{ group: l }, { main: c, native: u }] of i) {
				for (const [e, t] of c) l[e] = de(t);
				for (const [e, t] of u) l.counts30s[e] = de(t);
			}
			return {
				days: t,
				slices: n
			};
		}(e), r = new ar(), i = function(e, t) {
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
				...sr(e)
			};
		}(t, r);
		for (const o of n.days) o.ggirSadehCole && await an(o.group, e.countEpochSeconds, i).catch(() => {}), o.cube && 120 !== e.countEpochSeconds && await rn(o.group, e.countEpochSeconds, o.cube.lstmProbabilities, i, e.lstmSelection).catch(() => {}), o.hasibVariants && await sn(o.group, o.hasibVariants, i).catch(() => {});
		const a = r.entries.length ? await e.batch(r.entries.map((e) => e.request)) : null;
		r.entries.forEach((e, t) => {
			const n = a?.length === r.entries.length ? a[t] : void 0;
			n && (e.outcome = n);
		});
		const s = {
			...t,
			...t.scoreEpochs ? { scoreEpochs: (e) => t.scoreEpochs(e) } : {},
			...t.foldOntoGrid ? { foldOntoGrid: (...e) => t.foldOntoGrid(...e) } : {},
			...t.thresholdProbabilities ? { thresholdProbabilities: (...e) => t.thresholdProbabilities(...e) } : {},
			scoreGgirHasibVariant: (e, n, i) => or(r, {
				kind: "hasib",
				data: e,
				algo: n,
				...i ? { config: i } : {}
			}, () => t.scoreGgirHasibVariant(e, n, i)),
			scoreCountScorerBatch: (e) => Promise.all(e.map(async (e) => {
				try {
					if ("hasib" !== e.kind) throw new Error(`a ${e.kind} request goes through its own method`);
					return { result: await or(r, e, () => t.scoreGgirHasibVariant(e.data, e.algo, e.config)) };
				} catch (n) {
					return { error: n instanceof Error ? n.message : String(n) };
				}
			})),
			...t.scoreSadeh ? { scoreSadeh: (e, n) => or(r, {
				kind: "sadeh",
				activity: e,
				threshold: n
			}, () => t.scoreSadeh(e, n)) } : {},
			...t.scoreColeKripke ? { scoreColeKripke: (e, n) => or(r, {
				kind: "coleKripke",
				activity: e,
				useActilifeScaling: n
			}, () => t.scoreColeKripke(e, n)) } : {},
			scoreConsensus: (e, n) => t.scoreConsensus(e, n),
			...sr(t),
			...t.zeroCrossingCounts ? { zeroCrossingCounts: (e, n, r, i, a) => t.zeroCrossingCounts(e, n, r, i, a) } : {}
		};
		return ln(s, n.slices), s;
	}({
		base: new Proxy(e.scorerCore, { get: (e, t) => "scoreGgirHasibVariant" === t ? (...t) => e.scoreGgirHasibVariant(t[0], t[1], t[2], l) : Reflect.get(e, t) }),
		days: t,
		countEpochSeconds: n,
		lstmSelection: s.selection,
		batch: (e) => G(i, (t) => t.scoreCountScorerBatch(e.map((e) => "hasib" === e.kind ? {
			...e,
			ggirConfigCsv: l
		} : e)), {
			ms: L,
			label: `scoreCountScorerBatch(${r})`,
			signal: a,
			cancel: o
		}).catch((e) => (z(e, a, `scoreCountScorerBatch(${r})`), console.warn("[local-processing] Batched count scoring failed; scoring contiguous runs."), null))
	});
}
async function ur(t) {
	if (t.countEpochSeconds < e) return async function(t) {
		const { dateGroups: n, availableDates: r, countEpochSeconds: a, wasmApi: s, signal: o, lstm: l } = t, c = e;
		if (!i(c)) throw new Error("The minute lane is not a stored grid.");
		const u = await Y(s, n, r, a), f = r.filter((e) => (u[e]?.timestamps.length ?? 0) > 0), p = function(e, t) {
			if (!e) return {
				minute: void 0,
				rows: void 0
			};
			const n = (e.variants ?? Xe).filter((e) => e !== Ze), r = (e) => Ge(je(e), t) === t, i = n.filter((e) => !r(e)), a = n.filter(r);
			return {
				minute: i.length > 0 ? {
					...e,
					variants: i
				} : void 0,
				rows: a.length > 0 ? {
					...e,
					variants: a
				} : void 0
			};
		}(t.hasibVariants, a), h = (e) => Ge(ct(e)?.supportedEpochSeconds ?? [], a) === a, g = t.unifiedSleepWakeMethods ?? ht, m = await ur({
			...t,
			dateGroups: u,
			availableDates: f,
			countEpochSeconds: c,
			hasibVariants: p.minute,
			unifiedSleepWakeMethods: g.filter((e) => !h(e)),
			lstm: {
				...l,
				byDate: /* @__PURE__ */ new Map(),
				probabilityByDate: /* @__PURE__ */ new Map()
			}
		}), d = m.failures, w = p.rows, y = await cr(t, r.flatMap((e) => {
			const r = n[e];
			return r && t.hasCounts ? [{
				group: r,
				cube: { lstmProbabilities: l.probabilityByDate.get(e) },
				ggirSadehCole: !1,
				...w ? { hasibVariants: w } : {}
			}] : [];
		}), a), b = {}, v = {}, _ = function(e) {
			if (0 === e.length) return;
			const t = /* @__PURE__ */ new Uint8Array(0), n = (n) => e.some((e) => n(e)) ? t : null, r = (n) => {
				const r = new Set(e.flatMap((e) => Object.keys(n(e) ?? {})));
				return r.size > 0 ? Object.fromEntries([...r].map((e) => [e, t])) : void 0;
			}, i = new Map(e.flatMap((e) => e.cubeHistoryOutputs ?? []).map(({ cubeConfig: e }) => [e.id, e])), a = r((e) => e.hasibVariants), s = r((e) => e.unifiedSleepWake);
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
				...a ? { hasibVariants: a } : {},
				...s ? { unifiedSleepWake: s } : {},
				cubeOutputs: r((e) => e.cubeOutputs) ?? {},
				cubeHistoryOutputs: [...i.values()].map((e) => ({
					cubeConfig: e,
					results: /* @__PURE__ */ new ArrayBuffer(0)
				}))
			};
		}(Object.values(m.algorithmResultsByDate)), A = function(e) {
			const t = /* @__PURE__ */ new Map();
			for (const n of e) for (const [e, r] of n) (!t.has(e) || r.nonwear && !t.get(e).nonwear) && t.set(e, r.nonwear ? {
				...r,
				nonwear: /* @__PURE__ */ new Uint8Array(0)
			} : r);
			return t.size > 0 ? t : void 0;
		}(Object.values(m.countsNonwear));
		for (const e of r) {
			const r = n[e];
			if (!r) continue;
			const i = u[e]?.timestamps ?? /* @__PURE__ */ new Float64Array(0), c = 0 === i.length, f = m.algorithmResultsByDate[e] ?? (c ? _ : void 0), p = (e) => K(s, i, e ?? new Uint8Array(i.length), r.timestamps), h = async (e) => e ? p(e) : null, g = async (e) => {
				const t = {};
				for (const [n, r] of Object.entries(e ?? {})) r && (t[n] = await p(r));
				return t;
			}, S = {
				sadeh_1994_actilife: await p(f?.sadeh_1994_actilife),
				sadeh_1994_original: await p(f?.sadeh_1994_original),
				cole_kripke_1992_actilife: await p(f?.cole_kripke_1992_actilife),
				cole_kripke_1992_original: await p(f?.cole_kripke_1992_original),
				tensor_majority_vote: await p(f?.tensor_majority_vote),
				lstm_sleep_wake: l.byDate.get(e) ?? null,
				nonwear: await p(f?.nonwear),
				nonwearChoi2011: await h(f?.nonwearChoi2011),
				detachNonwear: await h(f?.detachNonwear),
				sadeh_1994_ggir: await h(f?.sadeh_1994_ggir),
				cole_kripke_1992_ggir: await h(f?.cole_kripke_1992_ggir),
				...f?.hasibVariants ? { hasibVariants: await g(f.hasibVariants) } : {},
				...f?.unifiedSleepWake ? { unifiedSleepWake: await g(f.unifiedSleepWake) } : {},
				cubeOutputs: { ...f?.cubeOutputs },
				cubeHistoryOutputs: [...f?.cubeHistoryOutputs ?? []]
			}, C = m.countsNonwear[e] ?? (c ? A : void 0);
			if (C) {
				const t = /* @__PURE__ */ new Map();
				for (const [e, n] of C) t.set(e, n.nonwear ? {
					...n,
					nonwear: await p(n.nonwear),
					elementSeconds: a
				} : n);
				v[e] = t;
			}
			if (t.hasCounts && en(a)) {
				const t = await rn(r, a, l.probabilityByDate.get(e), y, l.selection).catch((t) => (z(t, o, `runAlgorithmCubeForDay(${e}, rows)`), console.warn("[local-processing] Local algorithm-output expansion failed for one analysis day."), d.algorithmCubeFailed = !0, null));
				t && (Object.assign(S.cubeOutputs, Ee(t.algorithmResults, (e) => new Uint8Array(e))), S.cubeHistoryOutputs.push(...t.historyOutputs), d.algorithmCubeSkipped += t.skipped);
			}
			if (w && t.hasCounts) {
				const t = await sn(r, w, y).catch((t) => (z(t, o, `scoreCountBasedHasibVariantsForDay(${e}, rows)`), console.warn("[local-processing] A HASIB variant failed for one local analysis day."), d.hasibVariantFailed = !0, {}));
				S.hasibVariants = {
					...S.hasibVariants,
					...t
				};
			}
			b[e] = S;
		}
		const S = g.filter(h);
		if (S.length > 0 && t.hasCounts && en(a)) {
			const e = new Map(Object.entries(b).map(([e, t]) => [e, t.unifiedSleepWake]));
			await he(s, b, n, r, a, o, void 0, t.cancelWasmOperation, t.oakleyConfigs, S);
			for (const [t, n] of Object.entries(b)) n.unifiedSleepWake = {
				...e.get(t),
				...n.unifiedSleepWake
			};
		}
		return {
			algorithmResultsByDate: b,
			countsNonwear: v,
			failures: d,
			choiAxis: m.choiAxis
		};
	}(t);
	const { label: n, dateGroups: r, availableDates: a, countEpochSeconds: s, wasmApi: o, signal: l, onProgress: c, lstm: u } = t, f = t.cancelWasmOperation, p = {
		algorithmCubeFailed: !1,
		algorithmCubeSkipped: 0,
		detachFailed: !1,
		detachFailedDates: /* @__PURE__ */ new Set(),
		ggirCountScoreFailed: !1,
		hasibVariantFailed: !1
	}, h = {}, g = function(e, t, n, r) {
		return {
			choiAxis: e,
			extras: {
				...kt(r).extras,
				ggirConfigSha256: t,
				countEpochSeconds: String(n),
				continuousCountsRevision: "3"
			}
		};
	}(t.choiAxis, t.ggirConfig.sha256, s, u.options), m = null === t.sourceContentHash ? null : await Ie(t.sourceContentHash, g), d = !!m && a.length > 0 && a.every((e) => m.has(e)), w = en(s), y = w && !!t.hasibVariants && t.hasCounts, v = await cr(t, a.flatMap((e) => {
		const n = r[e];
		return n ? [{
			group: n,
			...(d || t.hasCounts) && w ? { cube: { lstmProbabilities: u.probabilityByDate.get(e) } } : {},
			ggirSadehCole: !d && t.hasCounts && (n.zeroCrossingY?.length ?? 0) > 0,
			...t.hasibVariants && t.hasCounts ? { hasibVariants: t.hasibVariants } : {}
		}] : [];
	}), s), _ = async (e, t, r, i) => {
		if (!w) return;
		const a = await rn(t, s, u.probabilityByDate.get(e), v, u.selection).catch((t) => (z(t, l, `runAlgorithmCubeForDay(${e}, ${i ? "cached " : ""}${n})`), console.warn("[local-processing] Local algorithm-output expansion failed for one analysis day."), p.algorithmCubeFailed = !0, null));
		a && (r.cubeOutputs = Ee(a.algorithmResults, (e) => new Uint8Array(e)), r.cubeHistoryOutputs = a.historyOutputs, p.algorithmCubeSkipped += a.skipped);
	};
	if (m && d) {
		c?.({
			phase: "scoring",
			percent: b("scoring", 0),
			message: "Loaded scored results from cache..."
		});
		for (const [e, t] of a.entries()) {
			c?.({
				phase: "scoring",
				percent: b("scoring", e / a.length),
				message: `Algorithm variants, day ${String(e + 1)} of ${String(a.length)}`
			});
			const n = m.get(t), i = r[t];
			if (!n || !i) continue;
			const s = {
				sadeh_1994_actilife: n.sadeh_actilife,
				sadeh_1994_original: n.sadeh_original,
				cole_kripke_1992_actilife: n.ck_actilife,
				cole_kripke_1992_original: n.ck_original,
				tensor_majority_vote: n.consensus_majority_vote,
				lstm_sleep_wake: u.byDate.get(t) ?? n.lstm_sleep_wake ?? null,
				nonwear: n.nonwear,
				nonwearChoi2011: n.nonwear_choi_2011 ?? null,
				detachNonwear: n.detach_nonwear,
				sadeh_1994_ggir: n.sadeh_ggir,
				cole_kripke_1992_ggir: n.ck_ggir
			};
			h[t] = s, await _(t, i, s, !0);
		}
		c?.({
			phase: "nonwear",
			percent: 82,
			message: "Nonwear restored from cache"
		});
	} else if (t.hasCounts) {
		c?.({
			phase: "scoring",
			percent: b("scoring", .5),
			message: "Running sleep algorithms (batch)..."
		});
		const e = await fe(o, r, a, s, l, f);
		for (const [n, i] of a.entries()) {
			const g = r[i], m = e[n];
			if (!g || !m) continue;
			c?.({
				phase: "nonwear",
				percent: 72 + (n + 1) / a.length * 10,
				message: `Nonwear and algorithm variants, day ${String(n + 1)} of ${String(a.length)}`
			});
			const d = rt(t.sourceEligibility, g.temperature, g.accelerationG) ? await G(o, (e) => e.detectDetachFromAccelerationG(new Float64Array(g.accelerationG ?? []), new Float64Array(g.temperature ?? [])), {
				ms: L,
				label: `detectDetachFromAccelerationG(${i})`,
				signal: l,
				cancel: f
			}).catch((e) => (z(e, l, `detectDetachFromAccelerationG(${i})`), console.warn("[local-processing] DETACH nonwear detection failed for one local analysis day."), p.detachFailed = !0, p.detachFailedDates.add(i), null)) : null, w = (g.zeroCrossingY?.length ?? 0) > 0 ? await an(g, s, v).catch((e) => (z(e, l, `scoreBuiltinGgirSadehColeForDay(${i})`), console.warn("[local-processing] GGIR count-based scoring failed for one local analysis day."), p.ggirCountScoreFailed = !0, null)) : null, y = {
				sadeh_1994_actilife: m.sadeh_actilife,
				sadeh_1994_original: m.sadeh_original,
				cole_kripke_1992_actilife: m.ck_actilife,
				cole_kripke_1992_original: m.ck_original,
				tensor_majority_vote: new Uint8Array(m.sadeh_actilife.length),
				lstm_sleep_wake: u.byDate.get(i) ?? null,
				nonwear: m.nonwear,
				nonwearChoi2011: m.nonwearChoi2011,
				detachNonwear: d,
				sadeh_1994_ggir: w?.sadeh ?? null,
				cole_kripke_1992_ggir: w?.ck ?? null
			};
			h[i] = y, await _(i, g, y, !1);
		}
	}
	c?.({
		phase: "nonwear",
		percent: b("nonwear", 1),
		message: "Counts-based nonwear detectors..."
	});
	const A = w && t.hasCounts ? await le(o, r, a, s, l, void 0, f) : {};
	if (y && t.hasibVariants) {
		c?.(t.planHasGgir ? {
			phase: "ggir",
			percent: b("ggir", 0),
			message: "Running GGIR HASIB variants..."
		} : {
			phase: "nonwear",
			percent: b("nonwear", 1),
			message: "Running GGIR HASIB variants..."
		});
		for (const e of a) {
			const i = r[e], a = h[e];
			i && a && (a.hasibVariants = await sn(i, t.hasibVariants, v).catch((t) => (z(t, l, `scoreCountBasedHasibVariantsForDay(${e}, ${n})`), console.warn("[local-processing] A HASIB variant failed for one local analysis day."), p.hasibVariantFailed = !0, {})));
		}
	}
	for (const e of a) {
		const t = h[e];
		t && (t.tensor_majority_vote = await Qt(t, o));
	}
	if (w && t.hasCounts && await he(o, h, r, a, s, l, void 0, f, t.oakleyConfigs, t.unifiedSleepWakeMethods), !d && null !== t.sourceContentHash) {
		const e = /* @__PURE__ */ new Map();
		for (const t of a) {
			const n = h[t];
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
		De(t.sourceContentHash, g, e).catch(() => {
			console.warn("[local-processing] Scored-cache persistence failed.");
		});
	}
	return {
		algorithmResultsByDate: h,
		countsNonwear: A,
		failures: p,
		choiAxis: t.choiAxis
	};
}
function fr(e, t, n, r, i) {
	const { fileId: a, ggir: s } = e, o = s.byDate.get(t), l = e.lstm30sByDate.get(t), c = e.sourceColumns?.(t, n) ?? {}, u = r.sadeh_1994_actilife.buffer, p = r.sadeh_1994_original.buffer, h = r.cole_kripke_1992_actilife.buffer, g = r.cole_kripke_1992_original.buffer, m = r.tensor_majority_vote.buffer, d = r.lstm_sleep_wake?.buffer, w = r.detachNonwear?.buffer, y = r.nonwear.buffer, b = r.sadeh_1994_ggir?.buffer, v = r.cole_kripke_1992_ggir?.buffer, _ = e.preschoolWristRfByDate.get(t)?.buffer, S = on(r.hasibVariants), C = on(r.unifiedSleepWake), E = Ce(r.cubeHistoryOutputs), I = (e) => {
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
			...I("mimsUnit"),
			...I("mimsUnitX"),
			...I("mimsUnitY"),
			...I("mimsUnitZ"),
			...l && l.timestamps.length > 0 && l.scores.length === l.timestamps.length ? {
				lstmTimestamps30s: new Float64Array(l.timestamps).buffer,
				lstmSleepWake30s: new Uint8Array(l.scores).buffer
			} : {},
			...o && o.timestamps.length > 0 ? {
				ggirTimestamps: new Float64Array(o.timestamps).buffer,
				ggirEnmo: new Float64Array(o.enmo).buffer,
				ggirAnglez: new Float64Array(o.anglez).buffer,
				...Me(o.timestamps, s.tsMs, s.zeroCrossings5s),
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
				...u.byteLength > 0 ? { [A.SADEH_1994_ACTILIFE]: u } : {},
				...p.byteLength > 0 ? { [A.SADEH_1994_ORIGINAL]: p } : {},
				...h.byteLength > 0 ? { [A.COLE_KRIPKE_1992_ACTILIFE]: h } : {},
				...g.byteLength > 0 ? { [A.COLE_KRIPKE_1992_ORIGINAL]: g } : {},
				...m.byteLength > 0 ? { [A.TENSOR_MAJORITY_VOTE]: m } : {},
				...d ? { [A.LSTM_SLEEP_WAKE]: d } : {},
				..._ ? { [dt]: _ } : {},
				...b ? { [A.SADEH_1994_GGIR]: b } : {},
				...v ? { [A.COLE_KRIPKE_1992_GGIR]: v } : {},
				...S.algorithmResults,
				...C.algorithmResults,
				...E.algorithmResults,
				...c.algorithmResults
			},
			algorithmResultHashes: E.algorithmResultHashes,
			...c.fields,
			...qe(n.temperature) ? { temperature: new Float64Array(n.temperature ?? []).buffer } : {},
			nonwearResults: y.byteLength > 0 ? y : null,
			nonwearResultsChoi2011: r.nonwearChoi2011?.buffer ?? null,
			nonwearChoiAxis: e.scored.choiAxis,
			detachNonwear: w ?? null,
			...null != i && "source_not_eligible" !== i ? { nonwearSkipReasons: { [f.DETACH_NONWEAR]: et[i] } } : {},
			...e.nonwearPatches[t]
		},
		history: [
			{
				algoKey: A.SADEH_1994_ACTILIFE,
				results: u
			},
			{
				algoKey: A.SADEH_1994_ORIGINAL,
				results: p
			},
			{
				algoKey: A.COLE_KRIPKE_1992_ACTILIFE,
				results: h
			},
			{
				algoKey: A.COLE_KRIPKE_1992_ORIGINAL,
				results: g
			},
			{
				algoKey: A.TENSOR_MAJORITY_VOTE,
				results: m
			},
			...d ? [{
				algoKey: A.LSTM_SLEEP_WAKE,
				results: d
			}] : [],
			..._ ? [{
				algoKey: dt,
				results: _
			}] : [],
			{
				algoKey: A.CHOI_2011_NONWEAR,
				results: y
			},
			...w ? [{
				algoKey: A.DETACH_NONWEAR,
				results: w
			}] : [],
			...b ? [{
				algoKey: A.SADEH_1994_GGIR,
				results: b
			}] : [],
			...v ? [{
				algoKey: A.COLE_KRIPKE_1992_GGIR,
				results: v
			}] : [],
			...S.historyOutputs,
			...C.historyOutputs,
			...r.cubeHistoryOutputs ?? []
		]
	};
}
async function pr(e) {
	const { label: t, dateGroups: n, availableDates: r, wasmApi: i, signal: a, onProgress: s, fileId: o } = e, l = e.scored.algorithmResultsByDate, c = r.flatMap((t) => {
		const r = n[t], i = l[t];
		return r && i ? [{
			date: t,
			group: r,
			algo: i,
			detachSkip: null != i.detachNonwear ? null : e.scored.failures.detachFailedDates.has(t) ? "computation_failed" : Je(e.sourceEligibility, r.temperature, r.accelerationG)
		}] : [];
	}), u = c.some(({ algo: e }) => null != e.detachNonwear), f = c.reduce((e, { detachSkip: t }) => "no_finite_temperature" === t || "no_acceleration_g" === t ? t : e, null), p = /* @__PURE__ */ new Map();
	for (const { date: y, group: b, algo: v, detachSkip: _ } of c) p.set(y, await Te(fr(e, y, b, v, _).day, i));
	const h = await async function(e, t, n, r, i) {
		const a = t.flatMap((e) => {
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
			return new Set(await Rt(e, a, i));
		} catch {
			return console.warn("[local-processing] Circadian coverage could not be computed for this file."), /* @__PURE__ */ new Set();
		}
	}(o, r, n, e.ggir.byDate, i);
	s?.({
		phase: "storing",
		percent: b("storing", 0),
		message: "Saving to local database..."
	});
	const g = Ot({
		scope: e.scope,
		fileId: o,
		sourceContentHash: e.sourceContentHash,
		label: t,
		signalDates: h,
		onChunk: (e, t, n) => s?.({
			phase: "storing",
			percent: b("storing", Mt(e, t, n, r.length)),
			message: `Saving days ${String(e)}–${String(t)} of ${String(r.length)}`
		})
	});
	for (const { date: y, group: b, algo: v, detachSkip: _ } of c) {
		F(a, `saveActivityDay ${y}`);
		const { day: t, history: n } = fr(e, y, b, v, _);
		await g.add(t, n, p.get(y));
	}
	await g.flush();
	const { saved: m, activityFailed: d, historyFailed: w } = g.state;
	if (d || m !== r.length || 0 === m) throw await Ht(e.scope, `${t} ingest: no ActivityDays could be saved`), /* @__PURE__ */ new Error("Could not save any activity data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return {
		activityDaysSaved: m,
		historyWriteFailed: w,
		detachRan: u,
		detachSkipped: f
	};
}
async function hr(e) {
	const t = await cn(e.fileId, e.nightDates, e.sourceCaps, e.onProgress, e.scope.db, e.signal, e.wasmApi, e.cancelWasmOperation, e.options?.scoredVariantNarrowing);
	return F(e.signal, `before completing ${lr[e.label]} ingest`), await tn(() => Et(e.scope), e.fileId, t, e.scope.auditBinding), t;
}
async function gr(e, t, n, r, i = "vector_magnitude", a, s, f) {
	F(s, "processLocalFile"), It(e, r);
	const p = C(), { username: A, selectedStudyId: D, sensorLocation: Y, participantLaterality: K } = Ue.getState(), le = Ve.captureWorkspaceBinding(p, {
		username: A,
		studyId: D,
		signal: s
	}), fe = {
		db: p,
		signal: s,
		attemptId: u(),
		auditBinding: le,
		placement: {
			bodySite: f?.sensorLocation ?? Y,
			laterality: K
		},
		ingestProvenance: hn({
			skipRows: n,
			columnMapping: a,
			...void 0 === f?.preferredActivityColumn ? {} : { preferredActivityColumn: f.preferredActivityColumn }
		})
	};
	let he, de, Ce;
	try {
		if (F(s, "before acquiring local ingest workers"), e.name.toLowerCase().endsWith(".gt3x") && e.size > 268435456) throw new Error(`This GT3X file is too large to process (${String(Math.ceil(e.size / 2 ** 20))} MiB; the limit is ${String(256)} MiB).`);
		const u = e.name.toLowerCase().endsWith(".gt3x"), A = _(e) ? P(s) : void 0, C = A?.controller;
		de = A?.release, C || (he = g({ singleThread: u }));
		const D = C ? N(C.signal) : he.api, Y = C ? () => C.abort() : he.terminate;
		Ce = u ? w() : void 0;
		const K = e.name.toLowerCase(), Ee = K.endsWith(".rdata") || K.endsWith(".rda") ? void 0 : await B(e).catch(() => {});
		Ee && (fe.head = Ee), fe.recording = yt(await Vt(e, s, D, fe.head), fe.placement);
		const Ie = await async function(e, t, n, r, i = "vector_magnitude", a, s, u, f, p) {
			if (!f) throw new Error("Local ingest persistence scope is missing.");
			const g = f.db, w = u?.ggirConfig ?? await ye(g);
			let _ = zt(u?.countEpochSeconds);
			const A = Wt(u), C = (/* @__PURE__ */ new Date()).toISOString();
			if (e.size < 100) throw v(e, `File appears to be empty (size: ${e.size} bytes). Please select a valid activity data file.`);
			const B = e.name.toLowerCase(), D = B.endsWith(".bin");
			if (B.endsWith(".gt3x")) return async function(e, t, n, r, i, a) {
				if (!i) throw new Error("Local ingest persistence scope is missing.");
				const s = i.db, o = r?.ggirConfig ?? await ye(s);
				F(n, "processLocalRawBinaryFile");
				const l = (/* @__PURE__ */ new Date()).toISOString(), u = Ye(a?.wasmApi ?? m()), f = a?.gt3xApi, p = a?.cancelGt3xOperation;
				if (!f || !p) throw new Error("GT3X processing worker is unavailable.");
				const g = a?.cancelWasmOperation ?? (() => {
					h(u);
				}), w = c.GT3X_BINARY;
				if (!Le(w, "source_profile_realization", "local")) throw new Error(`Local processing has no implemented source-profile realization for source type "${w}".`);
				const y = "gt3x", b = "GT3X", v = zt(r?.countEpochSeconds), _ = Wt(r), A = "gt3x", C = S(A, !0);
				t?.({
					phase: "reading",
					percent: 0,
					message: `Reading ${b} file...`,
					device: A,
					plan: C
				}), F(n, `before reading ${b} binary`);
				const E = await e.arrayBuffer();
				F(n, `after reading ${b} binary`);
				const { prefixHash: I, fullHash: k } = await R(E, (e) => {
					t?.({
						phase: "reading",
						percent: 15 * e,
						message: `Computing file hash... ${Math.round(100 * e)}%`
					});
				}, n, {
					start: () => u.sha256Start(),
					feed: (e) => u.sha256Feed(d(e, [e.buffer])),
					finish: () => u.sha256Finish()
				}), B = e.size, T = await Be(k, s) ?? await ke(I, s, k);
				if (T?.id) {
					t?.({
						phase: "complete",
						percent: 100,
						message: "File already imported"
					});
					const e = T.availableDates;
					return {
						alreadyImported: !0,
						fileId: T.id,
						availableDates: e,
						sourceType: w
					};
				}
				const O = await Se(e.name, s);
				if (O && "incomplete" !== O.ingestState) throw new xe();
				let U, x, D, N, P, $, W, H, j, X, Y, K;
				t?.({
					phase: "parsing",
					percent: -1,
					message: "Parsing GT3X binary and computing epochs, counts and GGIR metrics..."
				});
				let q, J, ne, re, le, fe = !1, he = !1, ge = null, de = null, we = null, be = null, ve = null, _e = !1, Ce = null, Ee = null, Ie = null, Te = null;
				const Me = await G(f, (e) => e.processGt3xFull(d(E, [E]), v, o.csvText), {
					ms: L,
					label: "processGt3xFull",
					signal: n,
					cancel: p
				}).finally(p);
				if (F(n, "after processGt3xFull"), U = Me.enmo5s, x = Me.anglez5s, D = Me.anglex5s ?? /* @__PURE__ */ new Float64Array(), N = Me.angley5s ?? /* @__PURE__ */ new Float64Array(), P = Me.ggirInvalid5s, $ = Me.ggirZeroCrossings5s, W = Me.ggirNonwear5s, H = {
					x: Me.countsX,
					y: Me.countsY,
					z: Me.countsZ,
					vm: Me.countsVm
				}, q = Me.zcx60s.length === Me.countsX.length ? Me.zcx60s : null, J = Me.zcy60s.length === Me.countsY.length ? Me.zcy60s : null, ne = Me.zcz60s.length === Me.countsZ.length ? Me.zcz60s : null, j = Me.capsense, X = Me.sampleRate, Y = Me.firstTsMs, re = await u.dstPlaceholderRuns(Me.firstTsMs, Me.enmo5s.length, Me.dstTransitions), le = Me.dstTimezone ?? void 0, K = Me.calibration, Me.lstmFeatures30s.length > 0 && Me.lstmFeatureEpochs > 0) {
					t?.({
						phase: "scoring",
						percent: 42,
						message: "Running LSTM sleep/wake model..."
					});
					const e = Me.firstTsMs;
					Ie = rr({
						data: Me.lstmFeatures30s,
						epochs: Me.lstmFeatureEpochs,
						bins: Me.lstmFeatureBins,
						channels: Me.lstmFeatureChannels
					}, _.scoreOptions).then((t) => ({
						scores: t.scores,
						probabilities: t.probabilities,
						firstTsMs: e
					}), (e) => (z(e, n, `LSTM sleep/wake scoring (${y})`), console.warn("[local-processing] LSTM sleep/wake scoring failed for a local binary import; count-based scoring remains available."), { failureDetail: At(e) })), Ie.catch(() => {});
				} else Ce = "the local model produced no usable spectral feature tensor", console.warn("[local-processing] LSTM spectral features were unavailable for a local binary import."), _e = !0;
				if (Me.mimsUnit.length > 0) {
					const e = await u.uniformTimestamps(Me.firstTsMs, 5e3, Me.enmo5s.length);
					de = await fn(u, {
						mimsUnit: Me.mimsUnit,
						epochSeconds: 5,
						...Me.mimsUnitX.length > 0 ? { mimsUnitX: Me.mimsUnitX } : {},
						...Me.mimsUnitY.length > 0 ? { mimsUnitY: Me.mimsUnitY } : {},
						...Me.mimsUnitZ.length > 0 ? { mimsUnitZ: Me.mimsUnitZ } : {}
					}, e), he = null === de;
				} else fe = !0, ge = Me.mimsAvailability?.reason ?? (Me.mimsAvailability ? "the actours automatic-ingest policy reported MIMS as available but returned no values" : "the loaded actours WASM bundle does not report MIMS availability"), console.warn("[local-processing] MIMS output was unavailable for a local binary import; see the in-app import warning.");
				if (Me.preschoolWristRfClasses.length > 0 && (Te = {
					classes: Me.preschoolWristRfClasses,
					epochSeconds: Me.preschoolWristRfEpochSeconds,
					classifier: "Preschool Wrist Random Forest Free Living Lag-Lead",
					model: "actimetricModels::PS.RF.FL.Wrist15.LagLead"
				}), Me.tzJump) {
					const e = ce;
					console.warn("[local-processing] A possible recording time-zone discontinuity was detected."), t?.({
						phase: "parsing",
						percent: 25,
						message: "Checking time consistency...",
						warning: e
					});
				}
				const Oe = Y / 1e3, Ue = P.length === x.length && x.length > 0 ? P : null, De = x.length > 0 && null !== Ue ? G(u, (e) => e.runGgirFromEpoch({
					source: "gt3x_stream",
					invalidMask: "ggir_part2"
				}, x, U, X, Oe, Ue, le, o.csvText, Fe(o.csvText, $)).catch((e) => (z(e, n, `runGgirFromEpoch (${y})`), console.warn("[local-processing] GGIR epoch analysis failed for a local binary import."), null)), {
					ms: L,
					label: `runGgirFromEpoch (${y})`,
					signal: n,
					cancel: g
				}) : null;
				De?.catch(() => {});
				const Pe = Float64Array.from(await u.uniformTimestamps(Y, 1e3 * v, H.y.length), (e) => e / 1e3);
				t?.({
					phase: "scoring",
					percent: 60,
					message: "Running sleep algorithms..."
				});
				const Ge = await ee(u, Pe, H.y, H.vm, H.x, H.z, void 0, void 0, void 0, J ?? void 0, q ?? void 0, ne ?? void 0);
				await se(u, Pe, v);
				const We = Object.keys(Ge).sort();
				if (0 === We.length) throw await Ht(i, "no activity observations"), /* @__PURE__ */ new Error("No activity observations were parsed. Check the input format and import again.");
				const He = await me(Object.entries(Ge), u, {
					core: u,
					storedEpochSeconds: v
				});
				if (Ie) {
					const e = await Ie;
					"failureDetail" in e ? (Ce = e.failureDetail, _e = !0) : (we = e.scores, be = e.probabilities, Ee = wt(e.scores, e.probabilities), Ee && console.warn("[local-processing] LSTM output quality requires review; see the in-app import warning."), ve = e.firstTsMs);
				}
				const je = we && null !== ve ? await ae(u, we, ve, Ge, v) : /* @__PURE__ */ new Map(), Ve = be && null !== ve ? await ie(u, be, ve, Ge, v) : /* @__PURE__ */ new Map(), Xe = await Z(u, we, ve), Ze = Ne(w), qe = $e(w, "local"), Je = M(u, {
					ms: L,
					signal: n,
					cancel: g
				}), rt = await ur({
					label: "binary",
					dateGroups: Ge,
					availableDates: We,
					countEpochSeconds: v,
					wasmApi: u,
					cancelWasmOperation: g,
					signal: n,
					onProgress: t,
					scorerCore: Je,
					sourceEligibility: Ze,
					hasCounts: qe?.has60sCounts ?? !1,
					choiAxis: "vector_magnitude",
					ggirConfig: o,
					sourceContentHash: k,
					lstm: {
						byDate: je,
						probabilityByDate: Ve,
						selection: _.selection,
						options: r
					},
					hasibVariants: r?.hasibVariants,
					oakleyConfigs: {},
					planHasGgir: C.includes("ggir")
				}), { algorithmResultsByDate: st, countsNonwear: ot } = rt, lt = await Dt(i, {
					filename: e.name,
					devicePreset: "gt3x",
					epochLengthSeconds: v,
					availableDates: He,
					sourceType: w,
					fileHash: I,
					sourceContentHash: k,
					sourceSizeBytes: B,
					source: "local",
					eventMarkerInstants: [],
					createdAt: (/* @__PURE__ */ new Date()).toISOString(),
					ggirPart2Config: o,
					...Oe > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * Oe)).toISOString() } } : {},
					...le ? {
						ggirTimezone: le,
						ggirClockBasis: $t(le)
					} : {},
					...re.length > 0 ? { ggirDstPlaceholders: await Pt(u, Y, re, {
						anglez: x,
						anglex: D,
						angley: N,
						enmo: U,
						zcx: $?.[0],
						zcy: $?.[1],
						zcz: $?.[2]
					}) } : {}
				}, Je);
				if ("already_complete" === lt.kind) {
					const e = lt.record.id;
					if (null == e) throw new Error("Completed local import identity is invalid.");
					return t?.({
						phase: "complete",
						percent: 100,
						message: "File already imported"
					}), {
						alreadyImported: !0,
						fileId: e,
						availableDates: lt.record.availableDates,
						sourceType: lt.record.sourceType ?? w
					};
				}
				const ct = lt.guard.fileId;
				let ut = !1;
				const ft = /* @__PURE__ */ new Map(), pt = function(e) {
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
				}(j), ht = pt.map((e) => [e.startMs / 1e3, e.endMs / 1e3]), gt = {};
				for (const [c, h] of Object.entries(Ge)) {
					const e = h.timestamps;
					gt[c] = it(await nt(ft, {
						baseTsSec: Oe,
						epochTimestampsSec: e,
						epochLenSec: v
					}, u), await nt(ot[c] ?? /* @__PURE__ */ new Map(), {
						baseTsSec: e[0] ?? 0,
						epochTimestampsSec: e,
						epochLenSec: v
					}, u), W.length === x.length ? await Qe(W, {
						ggirConfigCsv: o.csvText,
						baseTsSec: Oe,
						epochTimestampsSec: e,
						epochLenSec: v,
						dstRuns: re
					}, u) : {});
				}
				const mt = Ke("ggir"), dt = await ue(st, Ge, ht, mt, Object.fromEntries(We.map((e) => [e, gt[e] ?? {}])), at(w, null), u);
				if (x.length > 0 && null === Ue) console.warn("[local-processing] GGIR Part-2 invalid mask missing for a local binary import; GGIR summaries skipped."), ut = !0;
				else if (x.length > 0 && null !== Ue) {
					t?.({
						phase: "ggir",
						percent: -1,
						message: "GGIR Parts 3–5 on the 5 s series..."
					});
					const e = await De;
					if (e?.days?.length) {
						const t = pe(e.days, ct, K, o);
						await Tt(i), await Ae(t, s, n).catch(() => {
							console.warn("[local-processing] Binary epoch-summary persistence failed."), ut = !0;
						}), ut || await Gt({
							ggirConfigSha256: o.sha256,
							fileId: ct,
							sourceContentHash: k,
							sourceSizeBytes: B,
							identity: () => G(u, (e) => e.getComputeIdentity(), {
								ms: L,
								label: `getComputeIdentity (${y}, epoch)`,
								signal: n,
								cancel: g
							}),
							calibration: K,
							rows: t,
							startedAt: l
						}, s, n);
					} else ut = !0;
				}
				t?.({
					phase: "ggir",
					percent: -1,
					message: "HDCZA sleep window..."
				});
				const yt = new Map((await Re(ct, s)).map((e) => [e.analysisDate, e]));
				let bt;
				const vt = x.length > 0 && null === Ue ? Q : await te(ct, x, Oe, dt, yt, r?.hasptVariant, {
					activity5s: U,
					...Ue ? { invalid5s: Ue } : {},
					ggirConfig: o,
					zeroCrossings5s: $,
					...D.length > 0 ? { anglex5s: D } : {},
					...N.length > 0 ? { angley5s: N } : {},
					dstRuns: re,
					...le ? { timezone: le } : {}
				}, tt(r?.sleepPeriodDetectionConfig, {
					path: "ggir",
					selected: mt
				}), Bt(r, i.recording), s, n, u, g, i.auditBinding, (e) => {
					bt = e;
				}), _t = U.length, St = await u.ggir5sWallClockMs(1e3 * Oe, _t, re), Ct = await V(u, St, U, x, {
					anglex: D,
					angley: N,
					sib: bt,
					...Ue ? { invalid: Ue } : {},
					mimsUnit: de?.unit,
					mimsUnitX: de?.unitX,
					mimsUnitY: de?.unitY,
					mimsUnitZ: de?.unitZ
				}), Et = Te ? await oe(u, Y, Te.classes, Te.epochSeconds) : /* @__PURE__ */ new Map(), It = await pr({
					label: "binary",
					dateGroups: Ge,
					availableDates: We,
					countEpochSeconds: v,
					wasmApi: u,
					cancelWasmOperation: g,
					signal: n,
					onProgress: t,
					scope: i,
					fileId: ct,
					sourceContentHash: k,
					scored: rt,
					sourceEligibility: Ze,
					ggir: {
						byDate: Ct,
						tsMs: St,
						zeroCrossings5s: $
					},
					lstm30sByDate: Xe,
					preschoolWristRfByDate: Et,
					nonwearPatches: gt
				}), { activityDaysSaved: Rt, historyWriteFailed: kt } = It, { failures: Mt } = rt;
				let Ot = !1;
				if (pt.length > 0) {
					const e = pn(ct, pt);
					try {
						await Tt(i), await ze(ct, e, s, n);
					} catch (Lt) {
						Ot = !0, console.warn("[local-processing] Sensor-nonwear persistence failed."), xt(Lt, "saveSensorNonwear");
					}
				}
				const Ut = await hr({
					label: "binary",
					wasmApi: u,
					cancelWasmOperation: g,
					signal: n,
					onProgress: t,
					scope: i,
					fileId: ct,
					nightDates: He,
					sourceCaps: qe,
					options: r
				}), Nt = [
					kt && "Algorithm version history could not be fully saved (storage may be full). Scoring data is intact.",
					vt && `Sleep window detection (HDCZA) could not place auto-markers for ${e.name}: ${vt.replace(/\.$/, "")}. Scoring data is intact.`,
					ut && "GGIR Part 4/5 daily summaries could not be saved. Scoring data is intact.",
					Ot && "Some CAPSENSE nonwear periods could not be saved. Nonwear coverage may be incomplete.",
					Mt.ggirCountScoreFailed && "GGIR Sadeh/Cole sleep scoring could not be computed from zero-crossing counts. Other count-based sleep/wake scoring is intact.",
					_e && Ft(Ce),
					!_e && Ee,
					fe && (ge ? `MIMS_UNIT was not computed: ${ge} Other derived activity metrics are intact.` : "MIMS_UNIT could not be computed by the current actours/WASM build. Other derived activity metrics are intact."),
					he && "MIMS_UNIT output was not stored because it did not align with the 5 s GGIR epoch grid.",
					Mt.detachFailed && "DETACH temperature-based nonwear detection failed for one or more days. Choi nonwear is intact.",
					null != It.detachSkipped && et[It.detachSkipped] + " Choi nonwear is intact.",
					Mt.hasibVariantFailed && "One or more optional GGIR HASIB variant outputs could not be computed. Base scoring is intact.",
					Mt.algorithmCubeFailed && "Some algorithm-output harness variants could not be computed. Standard scoring is intact.",
					Mt.algorithmCubeSkipped > 0 && `${Mt.algorithmCubeSkipped} algorithm-output harness variant(s) could not be computed. Standard scoring is intact.`,
					Ut.dayFailures > 0 && `Scored variants could not be precomputed for ${String(Ut.dayFailures)} day(s). Reimport the file to retry.`
				].filter(Boolean).join(" ");
				return t?.({
					phase: "complete",
					percent: 100,
					message: "Processing complete",
					...Nt ? { warning: Nt } : {}
				}), {
					fileId: ct,
					availableDates: He,
					activityDaysSaved: Rt,
					sourceType: w,
					nonwearSources: [
						"Choi",
						...pt.length > 0 && !Ot ? ["CAPSENSE"] : [],
						...It.detachRan && !Mt.detachFailed ? ["DETACH"] : []
					]
				};
			}(e, r, s, u, f, p);
			if (B.endsWith(".rdata") || B.endsWith(".rda")) return Lt(e, r, s, u, f, p?.wasmApi, p?.cancelWasmOperation);
			if (B.endsWith(".csv") && "ggir_5s_meta" === t) throw new E("GGIR results are imported as the GGIR output folder (config.csv and meta/basic) or as a Part 1 meta RData file. A GGIR CSV table is not imported.");
			if (B.endsWith(".csv") && "mims_metrics" === t) return Ut(e, n, a ?? {}, r, s, f, p?.wasmApi);
			const N = f.head, P = await ot(e, p?.wasmApi ?? m(), N), Y = null === P && function(e) {
				return e in o;
			}(K = t) && "mapped_csv" === o[K].supportMode && B.endsWith(".csv");
			var K;
			F(s, "before preparing local input");
			const le = Y ? await bt(e, n, a ?? {}, s) : e;
			F(s, "after preparing local input");
			const fe = Y ? 0 : n;
			F(s, "before sniffing local input");
			const he = await H(le, N);
			F(s, "after sniffing local input");
			const de = he === O.GENEACTIV || he === O.GENEACTIV_BIN || "geneactiv" === t;
			if (de && !D && await Nt(le, s, N)) throw new Error("GeneActiv epoch-compressed CSV files are not supported. Please use the original raw GeneActiv .csv or .bin file.");
			const Ce = Ye(p?.wasmApi ?? m()), Ee = p?.cancelWasmOperation ?? (() => {
				h(Ce);
			}), Ie = st(e) && !e.aw5Subject.wholeDatabase ? e.aw5Subject : null, Te = "actiware_csv" === P ? await e.arrayBuffer() : null, Me = async () => R(Ie && st(e) ? await (async (e) => (r?.({
				phase: "reading",
				percent: -1,
				message: "Reading the recording from the database..."
			}), pt(e.aw5Subject, await e.loadAw5(s))))(e) : Te ?? e, (e) => {
				r?.({
					phase: "reading",
					percent: 15 * e,
					message: `Computing file hash... ${Math.round(100 * e)}%`
				});
			}, s, {
				start: () => Ce.sha256Start(),
				feed: (e) => Ce.sha256Feed(d(e, [e.buffer])),
				finish: () => Ce.sha256Finish()
			}), Ue = async (e) => await Be(e.fullHash, g) ?? await ke(e.prefixHash, g, e.fullHash), De = (e, t) => {
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
					sourceType: t.sourceType ?? c.EPOCHS_60S
				};
			}, Pe = await Se(e.name, g), Ge = !(Ie || le !== e || P || Pe && "incomplete" !== Pe.ingestState || await ke(await k(e, N), g));
			let je = Ge ? null : await Me();
			if (je) {
				const e = await Ue(je);
				if (e?.id) return De(e.id, e);
			}
			const Ve = e.size, Xe = await Se(e.name, g);
			if (Xe && "incomplete" !== Xe.ingestState && (!st(e) || Xe.aw5RecordingKey !== e.aw5Subject.recordingKey)) throw new xe();
			r?.({
				phase: "reading",
				percent: 15,
				message: "Reading file..."
			});
			const Ze = function(e) {
				const t = e.name.toLowerCase();
				return t.endsWith(".tar.bz2") || t.endsWith(".tbz2");
			}(le);
			F(s, "before checking local input shape");
			const qe = !de && !Y && await async function(e, t) {
				const n = (await I(e, 1024, t)).split(/\r?\n/, 1)[0]?.trim().toLowerCase() ?? "";
				return gn.has(n);
			}(le, N);
			F(s, "after checking local input shape");
			const Je = "actigraph" === t && B.endsWith(".csv") && null === he;
			if (!(P || Ze || qe || de || Y || Je || null !== he)) throw new Error(_t());
			const rt = he === O.ACTIGRAPH_RAW, ct = !P && !Ze && (de || rt || qe || le.size >= 15e8);
			let ht;
			ht = ct ? !qe && !rt || de ? c.GENEACTIV_RAW_CSV : c.ACTIGRAPH_RAW_CSV : "actigraph" === t && B.endsWith(".csv") && !Y ? c.ACTIGRAPH_EPOCHED_CSV : c.EPOCHS_60S, D && ht === c.GENEACTIV_RAW_CSV && (ht = c.GENEACTIV_BIN);
			const dt = P ? lt(P) : void 0, yt = He({ sourceProfileId: dt }, We(u?.analysisParadigm)), Et = dt ?? ht, It = Ne(Et);
			if (null == It || !Le(Et, "source_profile_realization", "local")) throw new Error(`Local processing has no implemented source-profile realization for source type "${dt ?? ht}". Use a supported native source or an explicitly implemented mapped import.`);
			const Rt = $e(Et, "local"), kt = "aw5" === P ? "actiwatch_aw5" : "actiware_csv" === P ? "actiware_csv" : Ze ? "nhanes" : D ? "geneactiv_bin" : de ? "geneactiv_csv" : qe ? "raw_csv" : rt || Je ? "actigraph_csv" : Y ? "epoch_csv" : "generic", Mt = st(e) ? [...y] : S(kt, ct);
			let Ot;
			r?.({
				phase: "reading",
				percent: 15,
				message: "File inspected",
				device: kt,
				plan: Mt
			});
			let Vt = 0, Xt = {
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
			}, Yt = null;
			if (P) {
				r?.({
					phase: "parsing",
					percent: 20,
					message: "aw5" === P ? "Reading Actiwatch .AW5 database..." : "Parsing Actiware CSV..."
				});
				const t = Te ? {
					name: e.name,
					arrayBuffer: () => Promise.resolve(Te)
				} : e;
				Yt = await mt(t, P, Ce, (e, t) => {
					r?.({
						phase: "parsing",
						percent: b("parsing", e),
						message: t
					});
				}, yt ? u?.actiwareAnalysis ?? {} : void 0, {
					...s ? { signal: s } : {},
					cancel: Ee
				}, u?.actiwareRestProposal ? {
					proposal: u.actiwareRestProposal,
					nightStartHour: u.nightStartHour,
					nightEndHour: u.nightEndHour
				} : void 0), _ = Yt.epochSeconds, Ot = {
					timestamps_ms: [...Yt.timestampsMs],
					axis_y: [...Yt.counts],
					axis_x: new Float64Array(Yt.counts.length),
					axis_z: new Float64Array(Yt.counts.length),
					vector_magnitude: [...Yt.counts],
					is_raw: !1,
					sample_frequency: 0,
					header_rows_skipped: 0,
					temperature: []
				};
			} else if (Ze) r?.({
				phase: "parsing",
				percent: 5,
				message: "Decompressing and parsing NHANES PAX80 archive..."
			}), F(s, "before parsing PAX80 input"), Ot = await Vn(e, (e) => {
				r?.({
					phase: "parsing",
					percent: 5 + .4 * e.percent,
					message: e.message
				});
			}), F(s, "after parsing PAX80 input");
			else if (qe) r?.({
				phase: "parsing",
				percent: 30,
				message: "Parsing headerless tri-axial CSV with synthesized timestamps..."
			}), F(s, "before parsing headerless tri-axial input"), Ot = await async function(e, t = 100) {
				if (e.size > 536870912) throw new Error("Headerless tri-axial CSV fallback only supports files up to 512 MB");
				const n = (await e.text()).split(/\r?\n/), r = n[0]?.trim().toLowerCase() ?? "";
				if (!gn.has(r)) throw new Error(`Unsupported tri-axial CSV header: ${r || "<empty>"}`);
				console.warn(`[headerless-triaxial] No sample rate or timestamps in this file; assuming ${t} Hz. Counts and the epoch timeline will be wrong if the true recording rate differs.`);
				const i = [], a = [], s = [], o = [], l = [], c = function(e) {
					if (e.lastModified > 0) {
						const t = new Date(e.lastModified);
						return Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
					}
					return Date.UTC(2e3, 0, 1);
				}(e), u = 1e3 / t;
				let f = 0;
				for (const p of n.slice(1)) {
					const e = p.trim();
					if (!e) continue;
					const t = e.split(",");
					if (t.length < 3) continue;
					const n = mn(t[0] ?? ""), r = mn(t[1] ?? ""), h = mn(t[2] ?? "");
					null !== n && null !== r && null !== h && (a.push(n), s.push(r), o.push(h), l.push(Math.hypot(n, r, h)), i.push(c + f * u), f += 1);
				}
				if (0 === i.length) throw new Error("No valid tri-axial samples found in headerless CSV");
				return {
					timestamps_ms: i,
					axis_x: a,
					axis_y: s,
					axis_z: o,
					vector_magnitude: l,
					is_raw: !0,
					sample_frequency: t,
					header_rows_skipped: 1,
					temperature: []
				};
			}(e), F(s, "after parsing headerless tri-axial input"), console.warn("[local-processing] Imported headerless tri-axial CSV without source timestamps; using synthetic 100 Hz timestamps anchored to the file modified date.");
			else if (le.size >= 15e8 || D || rt || he === O.GENEACTIV && le.size > U()) {
				const e = he ?? ("geneactiv" === t ? O.GENEACTIV : O.ACTIGRAPH_RAW), n = e === O.GENEACTIV ? "GENEActiv" : "ActiGraph";
				r?.({
					phase: "parsing",
					percent: 0,
					message: `Streaming ${n} raw CSV (no full-file buffer)...`
				});
				const i = await G(Ce, (t) => T(le, e, (e) => {
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
						], i = t.findIndex((t) => t === e.finalizeStage), a = e.finalizeFraction ?? 0;
						r?.({
							phase: "epoching",
							percent: i < 0 ? -1 : b("epoching", (i + a) / t.length),
							message: `Computing epochs, counts and GGIR metrics (${e.epochsEmitted.toLocaleString()} epochs)` + (i < 0 ? "..." : `: ${n[i] ?? ""}${i < 2 ? ` ${String(Math.round(100 * a))}%` : "..."}`)
						});
						return;
					}
					r?.({
						phase: "parsing",
						percent: .45 * e.percent,
						message: `Streaming: ${Math.round(e.percent)}% (${e.epochsEmitted.toLocaleString()} epochs)`
					});
				}, 0, s, _, t, Ge, w.csvText), {
					ms: L,
					label: "streamParseRaw",
					signal: s,
					cancel: Ee
				});
				Vt = i.rowsDropped, i.contentHashes && (je ??= i.contentHashes), Vt > 0 && console.warn("[local-processing] The WASM stream parser rejected malformed source rows; review the in-app import warning.");
				const a = W(i.table);
				Ot = {
					timestamps_ms: a.timestamp_ms,
					axis_y: a.axis_y,
					axis_x: a.axis_x,
					axis_z: a.axis_z,
					vector_magnitude: a.vector_magnitude,
					is_raw: !1,
					sample_frequency: i.sampleFrequency,
					header_rows_skipped: i.headerRowsSkipped,
					temperature: a.temperature
				}, Xt = {
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
				const t = await x(le, (e) => {
					r?.({
						phase: "reading",
						percent: 15 + .15 * e.percent,
						message: `Reading: ${Math.round(e.percent)}%`
					});
				}, s, Ce, Ee, Ge);
				je ??= t, r?.({
					phase: "parsing",
					percent: 30,
					message: "Parsing CSV..."
				});
				const n = de ? "parseGeneactivCsvBuffered" : "parseActigraphCsvBuffered";
				Ot = await G(Ce, (e) => de ? e.parseGeneactivCsvBuffered() : e.parseActigraphCsvBuffered(fe), {
					ms: L,
					label: n,
					signal: s,
					cancel: Ee
				}).catch((t) => {
					throw z(t, s, n), t instanceof Error ? v(e, t) : t;
				}), de && Ot.is_raw && (Ot.sample_frequency = await St(le, O.GENEACTIV, s, N));
			}
			if (F(s, "after parse"), 0 === Ot.timestamps_ms.length) throw v(e, "No activity observations were parsed. Check the input format and import again.");
			if (!Ot.is_raw) for (let o = 0; o < Ot.timestamps_ms.length; o += 1) {
				const e = Ot.timestamps_ms[o];
				if (!Number.isFinite(e) || o > 0 && e <= Ot.timestamps_ms[o - 1]) throw new Error("The file's timestamps are out of order or repeated.");
			}
			if (!Ot.is_raw && !Yt && 0 === Xt.tsMs.length) {
				const e = await Oe(Ot.timestamps_ms.map((e) => e / 1e3), null, Ce);
				if (null === e || e !== _) throw new Error(`Source count cadence is ${String(e ?? "unknown")} seconds; the selected grid is ${String(_)} seconds. Select the matching epoch length and import again.`);
			}
			if (Ge) {
				je ??= await Me();
				const e = await Ue(je);
				if (e?.id) return De(e.id, e);
			}
			if (!je) throw new Error("local import lost its content hash");
			const { prefixHash: Zt, fullHash: Kt } = je;
			let qt = Ot.timestamps_ms;
			const Jt = Y ? le.eventMarkerRows : void 0, Qt = Yt ? Yt.eventMarkerInstantsSec : Jt ? Ct(Jt, qt) : null;
			let en = Ot.axis_x, tn = Ot.axis_y, nn = Ot.axis_z, rn = Ot.vector_magnitude;
			const an = Ot.temperature, sn = void 0 === Ot.tz_jump ? await q(Ce, qt) : Ot.tz_jump ? ce : null;
			sn && (console.warn("[local-processing] A possible recording time-zone discontinuity was detected."), r?.({
				phase: "parsing",
				percent: 30,
				message: "Checking time consistency...",
				warning: sn
			}));
			let on = null, ln = null, cn = null, hn = /* @__PURE__ */ new Map(), dn = 0, wn = null, yn = null, bn = null, vn = !1, _n = null, An = !1, Sn = null, Cn = !1, En = !1, In = null;
			if (Ot.is_raw && Ot.sample_frequency > 0 && 0 === Xt.tsMs.length) {
				r?.({
					phase: "epoching",
					percent: 35,
					message: "Computing GGIR metrics (imputation + calibration)..."
				});
				const e = new Float64Array(en), t = new Float64Array(tn), n = new Float64Array(nn), i = new Float64Array(qt), a = Ot.sample_frequency, o = await G(Ce, (r) => r.processRawXyzImputed(i, e, t, n, a, null, _, w.csvText, an.length > 0 ? Float64Array.from(an) : void 0), {
					ms: L,
					label: "processRawXyzImputed",
					signal: s,
					cancel: Ee
				});
				o.numGaps > 0 && console.warn("[local-processing] GGIR time-gap imputation was applied before metric computation.");
				const l = o.enmo5s, c = o.anglez5s;
				if (on = o.counts, ln = o.firstTsMs, cn = o.calibration, dn = (qt[0] ?? o.firstTsMs) / 1e3, hn = await re(Ce, {
					x: e,
					y: t,
					z: n,
					sampleRate: a,
					epochSeconds: _
				}, s, void 0, Ee), 0 === o.numGaps) try {
					r?.({
						phase: "scoring",
						percent: 42,
						message: "Running LSTM sleep/wake model..."
					});
					const i = await G(Ce, (r) => r.lstmSpectralFeatures30s(e, t, n, a), {
						ms: L,
						label: "lstmSpectralFeatures30s",
						signal: s,
						cancel: Ee
					}), l = await rr({
						data: i.features,
						epochs: i.epochs,
						bins: i.bins,
						channels: i.channels
					}, A.scoreOptions);
					wn = l.scores, yn = l.probabilities, Sn = wt(wn, yn), Sn && console.warn("[local-processing] LSTM output quality requires review; see the in-app import warning."), bn = o.firstTsMs;
				} catch (Sr) {
					z(Sr, s, "LSTM sleep/wake scoring (csv)"), _n = At(Sr), console.warn("[local-processing] LSTM sleep/wake scoring failed; count-based scoring remains available."), vn = !0;
				}
				else An = !0;
				const u = o.firstTsMs;
				Xt = {
					tsMs: await Ce.uniformTimestamps(u, 5e3, l.length),
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
			let Rn = null, kn = 0, Bn = [], Tn = !1, Mn = null, On = !1, Un = 60 === _ && Xt.zeroCrossingX60s.length > 0 ? Xt.zeroCrossingX60s : null, Fn = 60 === _ && Xt.zeroCrossingY60s.length > 0 ? Xt.zeroCrossingY60s : null, xn = 60 === _ && Xt.zeroCrossingZ60s.length > 0 ? Xt.zeroCrossingZ60s : null;
			if (Ot.is_raw && Ot.sample_frequency > 0) {
				0 === qt.length ? console.warn("[local-processing] raw CSV has no timestamps — skipping GGIR pipeline") : (kn = (qt[0] ?? 0) / 1e3, Xt.anglez.length > 0 && (Rn = Xt.anglez));
				const e = ln ?? (qt.length > 0 ? qt[0] ?? 0 : 0);
				let t = on;
				await _e([
					...qt.length > 0 && 0 === Xt.anglez.length ? [{
						name: "anglez5s",
						cost: 1,
						run: async (e, t) => {
							Rn = await G(e, (e) => e.computeAnglez5s(new Float64Array(en), new Float64Array(tn), new Float64Array(nn), Ot.sample_frequency), {
								ms: L,
								label: "computeAnglez5s (csv fallback)",
								signal: s,
								cancel: t.cancel
							}).catch((e) => {
								if (z(e, s, "computeAnglez5s (csv fallback)"), ve(e, t)) throw e;
								return console.warn("[local-processing] Angle computation failed for a local CSV import."), null;
							});
						}
					}] : [],
					...null != on ? [{
						name: "MIMS",
						cost: 10,
						run: async (t, n) => {
							const r = await async function(e) {
								const t = {
									epochSeconds: 5,
									sourceShape: !0,
									startTimeSeconds: e.startTimeSeconds,
									outputMimsPerAxis: !0
								}, n = e.wasmApi ?? m();
								return fn(n, await G(n, (n) => n.computeMimsUnit(e.x, e.y, e.z, e.sampleRate, t), {
									ms: L,
									label: `computeMimsUnit (${e.label})`,
									signal: e.signal,
									cancel: e.cancelOperation ?? (() => {
										h(n);
									})
								}), e.ggirTimestampsMs);
							}({
								x: new Float64Array(en),
								y: new Float64Array(tn),
								z: new Float64Array(nn),
								sampleRate: Ot.sample_frequency,
								ggirTimestampsMs: Xt.tsMs,
								startTimeSeconds: e / 1e3,
								label: "csv",
								...s ? { signal: s } : {},
								wasmApi: t,
								cancelOperation: n.cancel
							}).catch((e) => {
								if (z(e, s, "computeMimsUnit (csv)"), ve(e, n)) throw e;
								return console.warn("[local-processing] MIMS computation failed for a local CSV import."), Cn = !0, null;
							});
							r || (En = !Cn), Xt.mimsUnit = r?.unit ?? /* @__PURE__ */ new Float64Array(), Xt.mimsUnitX = r?.unitX ?? /* @__PURE__ */ new Float64Array(), Xt.mimsUnitY = r?.unitY ?? /* @__PURE__ */ new Float64Array(), Xt.mimsUnitZ = r?.unitZ ?? /* @__PURE__ */ new Float64Array();
						}
					}, {
						name: "preschool RF",
						cost: 8,
						run: async (e, t) => {
							In = await async function(e) {
								const t = e.wasmApi ?? m();
								try {
									return await G(t, (t) => t.classifyActimetricPreschoolWristRf(e.x, e.y, e.z, e.sampleRate), {
										ms: L,
										label: `classifyActimetricPreschoolWristRf (${e.label})`,
										signal: e.signal,
										cancel: e.pass?.cancel ?? (() => {
											h(t);
										})
									});
								} catch (Sr) {
									if (z(Sr, e.signal, `classifyActimetricPreschoolWristRf (${e.label})`), e.pass && ve(Sr, e.pass)) throw Sr;
									return console.warn("[local-processing] The optional preschool wrist activity classifier was unavailable."), null;
								}
							}({
								x: new Float64Array(en),
								y: new Float64Array(tn),
								z: new Float64Array(nn),
								sampleRate: Ot.sample_frequency,
								label: "csv",
								...s ? { signal: s } : {},
								wasmApi: e,
								pass: t
							});
						}
					}] : [],
					...null == on ? [{
						name: "Neishabouri counts",
						cost: 3,
						run: async (e, n) => {
							t = await G(e, (e) => e.neishabouriCounts(new Float64Array(en), new Float64Array(tn), new Float64Array(nn), Ot.sample_frequency, _), {
								ms: L,
								label: "neishabouriCounts",
								signal: s,
								cancel: n.cancel
							});
						}
					}] : [],
					...null == Un || null == Fn || null == xn ? [{
						name: "zero-crossing",
						cost: 3,
						run: async (e, t) => {
							const n = await G(e, (e) => e.zeroCrossingCounts(new Float64Array(en), new Float64Array(tn), new Float64Array(nn), Ot.sample_frequency, _), {
								ms: L,
								label: "zeroCrossingCounts (csv)",
								signal: s,
								cancel: t.cancel
							}).catch((e) => {
								if (z(e, s, "zeroCrossingCounts (csv)"), ve(e, t)) throw e;
								return console.warn("[local-processing] Zero-crossing computation failed for a local CSV import."), On = !0, null;
							});
							n && (Un ??= n.zcx, Fn ??= n.zcy, xn ??= n.zcz);
						}
					}] : [],
					...j(ht, _) ? [{
						name: "compute30sCountsFromRaw",
						cost: 6,
						run: async (t, n) => {
							Mn = await ge({
								wasmApi: t,
								x: new Float64Array(en),
								y: new Float64Array(tn),
								z: new Float64Array(nn),
								sampleRate: Ot.sample_frequency,
								firstTsMs: e,
								timestampsMs: Ot.timestamps_ms,
								...s ? { signal: s } : {},
								label: "csv",
								cancelOperation: n.cancel
							}).catch((e) => {
								if (z(e, s, "native 30-second counts (csv)"), ve(e, n)) throw e;
								return console.warn("[local-processing] The native 30-second count pass failed for a local CSV import."), null;
							});
						}
					}] : []
				], {
					primary: Ce,
					extraWorkers: be({
						cores: navigator.hardwareConcurrency,
						deviceMemoryGib: $()
					}),
					signal: s,
					cancelOperation: Ee
				}), r?.({
					phase: "epoching",
					percent: 45,
					message: "Computing Neishabouri activity counts..."
				});
				const n = await Ce.uniformTimestamps(e, 1e3 * _, t.x.length);
				an.length > 0 && (Bn = await we(Ce, Ot.timestamps_ms, an, n, _)), qt = n, en = Array.from(t.x), tn = Array.from(t.y), nn = Array.from(t.z), rn = Array.from(t.vm);
			} else !Ot.is_raw && an.length > 0 && (Bn = Array.from(an));
			en = await X(Ce, en, 0), tn = await X(Ce, tn, 0), nn = await X(Ce, nn, 0), rn = await X(Ce, rn, 2);
			const zn = {
				vector_magnitude: rn,
				axis_y: tn,
				axis_x: en,
				axis_z: nn
			}[i];
			zn || console.warn("[local-processing] Unknown Choi axis configuration; falling back to vector magnitude.");
			const Dn = zn ?? rn;
			r?.({
				phase: "scoring",
				percent: 55,
				message: "Running sleep algorithms..."
			});
			const Nn = qt.map((e) => e / 1e3), Pn = "vector_magnitude" !== i ? Dn : void 0, Gn = Bn.length > 0, Ln = await ee(Ce, Nn, tn, rn, en, nn, Pn, Gn ? Bn : void 0, void 0, Fn && Fn.length === qt.length ? Fn : void 0, Un && Un.length === qt.length ? Un : void 0, xn && xn.length === qt.length ? xn : void 0);
			await se(Ce, Nn, _), Mn && await J(Ce, Ln, Mn);
			const $n = Object.keys(Ln).sort();
			if (0 === $n.length) throw await Ht(f, "no activity observations"), /* @__PURE__ */ new Error("No activity observations were parsed. Check the input format and import again.");
			const Wn = await me(Object.entries(Ln), Ce, {
				core: Ce,
				storedEpochSeconds: _
			}), Hn = 120 !== _ && wn && null !== bn ? await ae(Ce, wn, bn, Ln, _) : /* @__PURE__ */ new Map(), jn = 120 !== _ && yn && null !== bn ? await ie(Ce, yn, bn, Ln, _) : /* @__PURE__ */ new Map(), Xn = await Z(Ce, wn, bn), Yn = yt?.wakeThresholdFromRecording ? Yt?.actiwareWakeThreshold ?? null : null, Zn = M(Ce, {
				ms: L,
				signal: s,
				cancel: Ee
			}), Kn = await ur({
				label: "csv",
				dateGroups: Ln,
				availableDates: $n,
				countEpochSeconds: _,
				wasmApi: Ce,
				cancelWasmOperation: Ee,
				signal: s,
				onProgress: r,
				scorerCore: Zn,
				sourceEligibility: It,
				hasCounts: Rt?.has60sCounts ?? !1,
				choiAxis: i,
				ggirConfig: w,
				sourceContentHash: Y ? null : Kt,
				lstm: {
					byDate: Hn,
					probabilityByDate: jn,
					selection: A.selection,
					options: u
				},
				hasibVariants: un(u?.hasibVariants, Yn),
				oakleyConfigs: ne(Yn),
				planHasGgir: Mt.includes("ggir")
			}), { algorithmResultsByDate: qn, countsNonwear: Jn } = Kn;
			r?.(Mt.includes("ggir") && Xt.anglez.length > 0 ? {
				phase: "ggir",
				percent: -1,
				message: "GGIR Parts 3–5 on the 5 s series..."
			} : Mt.includes("ggir") ? {
				phase: "ggir",
				percent: -1,
				message: "Nonwear masks on each day's grid..."
			} : {
				phase: "nonwear",
				percent: b("nonwear", 1),
				message: "Nonwear masks on each day's grid..."
			});
			const Qn = await Dt(f, {
				filename: e.name,
				devicePreset: t,
				epochLengthSeconds: _,
				availableDates: Wn,
				fileHash: Zt,
				sourceContentHash: Kt,
				sourceSizeBytes: Ve,
				source: "local",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				sourceType: ht,
				ggirPart2Config: w,
				...dt ? { sourceProfileId: dt } : {},
				...Ie ? { sourceDatabaseFilename: Ie.databaseFilename } : {},
				...st(e) ? { aw5RecordingKey: e.aw5Subject.recordingKey } : {},
				...Yt ? { sourceEpochSeconds: Yt.sourceEpochSeconds } : {},
				eventMarkerInstants: Qt ? $n.filter((e) => Ln[e] && qn[e]).flatMap((e) => Array.from(jt(Qt, e))) : [],
				...kn > 0 || null != Yt?.gmtOffsetMinutes ? { recording: {
					...kn > 0 ? { effectiveTime: (/* @__PURE__ */ new Date(1e3 * kn)).toISOString() } : {},
					...null != Yt?.gmtOffsetMinutes ? { gmtOffsetMinutes: Yt.gmtOffsetMinutes } : {}
				} } : {}
			}, Zn);
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
					sourceType: Qn.record.sourceType ?? ht
				};
			}
			const er = Qn.guard.fileId;
			Yt?.actiwareStatisticsInput && (await Tt(f), await g.actiwareStatisticsInputs.put({
				fileId: er,
				input: Yt.actiwareStatisticsInput
			})), Yt && (Yt.actiwareIntervals.length > 0 || Yt.actiwareSleepWake || Yt.actiwareStatistics.length > 0 || Yt.actiwareRecording) && (await Tt(f), await g.actiwareFileData.put({
				fileId: er,
				...Yt.actiwareIntervals.length > 0 ? { actiwareIntervals: Yt.actiwareIntervals } : {},
				...Yt.actiwareSleepWake ? { actiwareSleepWake: ut(Yt.actiwareSleepWake) } : {},
				...Yt.actiwareStatistics.length > 0 ? { actiwareStatistics: Yt.actiwareStatistics } : {},
				...Yt.actiwareRecording ? { actiwareRecording: Yt.actiwareRecording } : {},
				...null != Yt.actiwareWakeThreshold ? { actiwareWakeThreshold: Yt.actiwareWakeThreshold } : {},
				...Yt.actiwareRestProposal ? { actiwareRestProposal: Yt.actiwareRestProposal } : {},
				...Yt.actiwareIntervalsRefusal ? { actiwareIntervalsRefusal: Yt.actiwareIntervalsRefusal } : {},
				...null != Yn ? { oakleyThreshold: Yn } : {}
			}));
			let tr = !1, nr = null;
			const ir = {};
			for (const [o, l] of Object.entries(Ln)) {
				const e = l.timestamps;
				ir[o] = it(await nt(hn, {
					baseTsSec: dn,
					epochTimestampsSec: e,
					epochLenSec: _
				}, Ce), await nt(Jn[o] ?? /* @__PURE__ */ new Map(), {
					baseTsSec: e[0] ?? 0,
					epochTimestampsSec: e,
					epochLenSec: _
				}, Ce), Xt.nonwear.length === Xt.tsMs.length ? await Qe(Xt.nonwear, {
					ggirConfigCsv: w.csvText,
					baseTsSec: (Xt.tsMs[0] ?? 0) / 1e3,
					epochTimestampsSec: e,
					epochLenSec: _
				}, Ce) : {});
			}
			const ar = Ke("ggir"), sr = await ue(qn, Ln, [], ar, Object.fromEntries($n.map((e) => [e, ir[e] ?? {}])), at(ht, dt), Ce);
			let or;
			const lr = Xt.invalid.length === Xt.anglez.length && Xt.anglez.length > 0 ? Xt.invalid : null;
			if (Xt.anglez.length > 0 && Xt.enmo.length > 0 && null === lr && (console.warn("[local-processing] GGIR Part-2 invalid mask missing for a local CSV import; GGIR summaries skipped."), Tn = !0), Xt.anglez.length > 0 && Xt.enmo.length > 0 && null !== lr) {
				const e = (Xt.tsMs[0] ?? 0) / 1e3, t = lr, n = await G(Ce, (n) => n.runGgirFromEpoch({
					source: "raw_csv_stream",
					invalidMask: "ggir_part2"
				}, Xt.anglez, Xt.enmo, Ot.sample_frequency, e, t, void 0, w.csvText, Fe(w.csvText, Xt.zeroCrossings5s)).catch((e) => (z(e, s, "runGgirFromEpoch (csv)"), console.warn("[local-processing] GGIR epoch analysis failed for a local CSV import."), Tn = !0, null)), {
					ms: L,
					label: "runGgirFromEpoch (csv)",
					signal: s,
					cancel: Ee
				});
				if (n?.days?.length) {
					const e = pe(n.days, er, cn, w);
					await Tt(f), await Ae(e, g, s).catch(() => {
						console.warn("[local-processing] CSV daily-summary persistence failed."), tr = !0;
					}), tr || await Gt({
						ggirConfigSha256: w.sha256,
						fileId: er,
						sourceContentHash: Kt,
						sourceSizeBytes: Ve,
						identity: () => G(Ce, (e) => e.getComputeIdentity(), {
							ms: L,
							label: "getComputeIdentity (csv)",
							signal: s,
							cancel: Ee
						}),
						calibration: cn,
						rows: e,
						startedAt: C
					}, g, s);
				}
			}
			const cr = new Map((await Re(er, g)).map((e) => [e.analysisDate, e]));
			if (Xt.anglez.length > 0 && null === lr) nr = Q;
			else if (Xt.anglez.length > 0 && null !== lr) {
				Mt.includes("ggir") && r?.({
					phase: "ggir",
					percent: -1,
					message: "HDCZA sleep window..."
				});
				const e = (Xt.tsMs[0] ?? 0) / 1e3;
				nr = await te(er, Xt.anglez, e, sr, cr, u?.hasptVariant, {
					activity5s: Xt.enmo,
					invalid5s: lr,
					ggirConfig: w,
					zeroCrossings5s: Xt.zeroCrossings5s,
					...Xt.anglex.length > 0 ? { anglex5s: Xt.anglex } : {},
					...Xt.angley.length > 0 ? { angley5s: Xt.angley } : {}
				}, tt(u?.sleepPeriodDetectionConfig, {
					path: "ggir",
					selected: ar
				}), Bt(u, f.recording), g, s, Ce, Ee, f.auditBinding, (e) => {
					or = e;
				});
			} else null !== Rn && Rn.length > 0 && (nr = Q);
			const fr = await V(Ce, Xt.tsMs, Xt.enmo, Xt.anglez, {
				anglex: Xt.anglex,
				angley: Xt.angley,
				sib: or,
				...lr ? { invalid: lr } : {},
				mimsUnit: Xt.mimsUnit,
				mimsUnitX: Xt.mimsUnitX,
				mimsUnitY: Xt.mimsUnitY,
				mimsUnitZ: Xt.mimsUnitZ
			}), gr = In ? await oe(Ce, ln ?? Xt.tsMs[0] ?? 0, In.classes, In.epochSeconds) : /* @__PURE__ */ new Map(), mr = /* @__PURE__ */ new Map();
			if (Yt?.actiwareSleepWake) for (const o of $n) {
				const e = Ln[o];
				e && qn[o] && mr.set(o, await gt(Ce, Yt.actiwareSleepWake, e.timestamps, _));
			}
			const dr = Yt ? new Map(Array.from(Yt.timestampsMs, (e, t) => [e / 1e3, t])) : null, wr = await pr({
				label: "csv",
				dateGroups: Ln,
				availableDates: $n,
				countEpochSeconds: _,
				wasmApi: Ce,
				cancelWasmOperation: Ee,
				signal: s,
				onProgress: r,
				scope: f,
				fileId: er,
				sourceContentHash: Kt,
				scored: Kn,
				sourceEligibility: It,
				ggir: {
					byDate: fr,
					tsMs: Xt.tsMs,
					zeroCrossings5s: Xt.zeroCrossings5s
				},
				lstm30sByDate: Xn,
				preschoolWristRfByDate: gr,
				nonwearPatches: ir,
				sourceColumns: (e, t) => {
					const n = mr.get(e) ?? null, r = new Uint8Array(t.timestamps.length);
					if (Yt && dr) for (let a = 0; a < t.timestamps.length; a += 1) {
						const e = dr.get(t.timestamps[a] ?? NaN);
						null != e && (r[a] = Yt.actiwareInvalidActivityEpochs[e] ?? 0);
					}
					const i = Qt ? jt(Qt, e) : null;
					return {
						algorithmResults: n ? { [l.ACTIWARE_SLEEP_WAKE]: n.sleep.buffer } : {},
						fields: {
							...n && n.invalid.some((e) => 1 === e) ? { actiwareSleepWakeInvalid: n.invalid.buffer } : {},
							...r.some((e) => 1 === e) ? { actiwareActivityInvalid: r.buffer } : {},
							...Yt?.hasOffWristChannel ? { actiwareOffWristChannel: !0 } : {},
							...Yt && dr ? ft(Yt.light, dr, t.timestamps) : {},
							...Qt ? { eventMarkers: vt(t.timestamps, Qt, _).buffer } : {},
							...i && i.length > 0 ? { eventMarkerTimestamps: i.buffer } : {}
						}
					};
				}
			}), { activityDaysSaved: yr, historyWriteFailed: br } = wr, { failures: vr } = Kn;
			if (Yt && Yt.offWristPeriods.length > 0) {
				const e = pn(er, Yt.offWristPeriods.map((e) => ({
					startMs: 1e3 * e.startTimestamp,
					endMs: 1e3 * e.endTimestamp
				})));
				await ze(er, e, g, s).catch((e) => {
					xt(e, "saveSensorNonwear (actiware off-wrist)");
				});
			}
			const _r = await hr({
				label: "csv",
				wasmApi: Ce,
				cancelWasmOperation: Ee,
				signal: s,
				onProgress: r,
				scope: f,
				fileId: er,
				nightDates: Wn,
				sourceCaps: Rt,
				options: u
			}), Ar = [
				...Yt?.warnings ?? [],
				Vt > 0 && `${Vt} rows in the source CSV could not be parsed and were skipped. The file may contain corrupt or malformed data.`,
				br && "Algorithm version history could not be fully saved (storage may be full). Scoring data is intact.",
				nr && `Sleep window detection (HDCZA) could not place auto-markers for ${e.name}: ${nr.replace(/\.$/, "")}. Scoring data is intact.`,
				tr && "GGIR Part 4/5 daily summaries could not be saved. Scoring data is intact.",
				Tn && "GGIR metrics (Parts 1–5) could not be computed for this file. Sleep/wake scoring is intact, but GGIR summaries and activity metrics may be missing.",
				vr.ggirCountScoreFailed && "GGIR Sadeh/Cole sleep scoring could not be computed from zero-crossing counts. Other count-based sleep/wake scoring is intact.",
				vn && Ft(_n),
				!vn && Sn,
				An && "LSTM ONNX sleep/wake scoring was skipped because time-gap imputation changed the raw sample grid.",
				Cn && "MIMS_UNIT could not be computed by the current actours/WASM build. Other derived activity metrics are intact.",
				En && "MIMS_UNIT output was not stored because it did not align with the 5 s GGIR epoch grid.",
				On && "Zero-crossing counts could not be computed for optional GGIR HASIB variants. Base scoring is intact.",
				vr.detachFailed && "DETACH temperature-based nonwear detection failed for one or more days. Choi nonwear is intact.",
				null != wr.detachSkipped && et[wr.detachSkipped] + " Choi nonwear is intact.",
				vr.hasibVariantFailed && "One or more optional GGIR HASIB variant outputs could not be computed. Base scoring is intact.",
				vr.algorithmCubeFailed && "Some algorithm-output harness variants could not be computed. Standard scoring is intact.",
				vr.algorithmCubeSkipped > 0 && `${vr.algorithmCubeSkipped} algorithm-output harness variant(s) could not be computed. Standard scoring is intact.`,
				_r.dayFailures > 0 && `Scored variants could not be precomputed for ${String(_r.dayFailures)} day(s). Reimport the file to retry.`
			].filter(Boolean).join(" ");
			return r?.({
				phase: "complete",
				percent: 100,
				message: "Processing complete",
				...Ar ? { warning: Ar } : {}
			}), {
				fileId: f.finalizedFileId ?? er,
				availableDates: Wn,
				activityDaysSaved: yr,
				sourceType: ht,
				nonwearSources: ["Choi", ...wr.detachRan && !vr.detachFailed ? ["DETACH"] : []]
			};
		}(e, t, n, r, i, a, s, f, fe, {
			wasmApi: D,
			cancelWasmOperation: Y,
			...Ce ? {
				gt3xApi: Ce.api,
				cancelGt3xOperation: Ce.terminate
			} : {}
		});
		Ie.alreadyImported && nn(Ie.fileId, {
			db: p,
			resumeIncomplete: !0,
			retryKnownFailures: !1,
			signal: s
		}).catch(() => {});
		const Te = Ie.availableDates[0];
		if (void 0 !== Te) {
			const e = { filename: "redacted" };
			Ie.alreadyImported || (Ve.recordFileEvent({
				fileId: Ie.fileId,
				analysisDate: Te,
				action: "file_uploaded",
				payload: e
			}, le), Ve.recordFileEvent({
				fileId: Ie.fileId,
				analysisDate: Te,
				action: "file_processed",
				payload: e
			}, le));
		}
		return Ie;
	} catch (Ee) {
		throw await Ht(fe, "local file ingest failed"), Xt(Ee, fe);
	} finally {
		de?.(), Ce?.terminate(), he?.terminate();
	}
}
export { gr as processLocalFile };
