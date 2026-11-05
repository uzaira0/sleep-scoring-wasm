import { n as e, r as t, s as n, t as i } from "./ggir-results-types-WB8axvb-.js";
import { c as a, d as r, i as s, n as o, u as l } from "./workers-B8JyMZy2.js";
import { Bt as c, Lt as u, Ot as d, Rt as m, Sn as p, Yt as g, a as f, d as h, g as _, l as w, o as y, s as v, yn as b, yt as M, zt as k } from "./schema-CoLJBY5o.js";
import { A as x, F as S, I, L as T, M as A, N as R, P as N, b as E, j as C, k as $, m as O } from "./nonwear-display-slots-tzdNfcon.js";
import { G as D, J as B, N as L, Y as P, g as F, l as W, ot as j, q as G, t as U, u as z, y as V } from "./workspace-db-mwmkj659.js";
import { l as H, n as q, o as K, s as J } from "./content-hash-DKxfNNnb.js";
import { _ as Y, a as Z, d as Q, g as X, l as ee, n as te, t as ne } from "./background-jobs-BcCUQBCp.js";
import { a as ie } from "./project-revision-CUvdbw1R.js";
import { Bt as ae, C as re, Dt as se, F as oe, G as le, Gt as ce, L as ue, N as de, P as me, V as pe, Wt as ge, Xt as fe, Zt as he, j as _e, q as we, rn as ye, w as ve, x as be } from "./store-CMG-u5eb.js";
import { P as Me, U as ke, d as xe, h as Se, u as Ie } from "./night-session-registry-fDkTdQOp.js";
import { d as Te, l as Ae, p as Re } from "./sleep-period-detection-CKwWvPPT.js";
import { t as Ne } from "./audit-hash-Bs3Gj8Wy.js";
import { _ as Ee, a as Ce, d as $e, i as Oe, m as De, o as Be, p as Le, t as Pe, u as Fe, y as We } from "./ggir-results-import-fU32mldC.js";
import { B as je, E as Ge, I as Ue, L as ze, N as Ve, R as He, T as qe, c as Ke } from "./local-nonwear-unified-wCw73Ihu.js";
import { C as Je, D as Ye, E as Ze, O as Qe, S as Xe, T as et, a as tt, f as nt, h as it, i as at, m as rt, n as st, r as ot, s as lt, t as ct, v as ut, w as dt } from "./valid-day-criteria-wd9cIZwC.js";
import { h as mt, m as pt, v as gt } from "./diary-local-import-contract-L-WKtfxV.js";
var ft = Uint8Array, ht = Uint16Array, _t = Int32Array, wt = new ft([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]), yt = new ft([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]), vt = new ft([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]), bt = function(e, t) {
	for (var n = new ht(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
	var a = new _t(n[30]);
	for (i = 1; i < 30; ++i) for (var r = n[i]; r < n[i + 1]; ++r) a[r] = r - n[i] << 5 | i;
	return {
		b: n,
		r: a
	};
}, Mt = bt(wt, 2), kt = Mt.b, xt = Mt.r;
kt[28] = 258, xt[258] = 28;
for (var St = bt(yt, 0), It = (St.b, St.r), Tt = new ht(32768), At = 0; At < 32768; ++At) {
	var Rt = (43690 & At) >> 1 | (21845 & At) << 1;
	Rt = (61680 & (Rt = (52428 & Rt) >> 2 | (13107 & Rt) << 2)) >> 4 | (3855 & Rt) << 4, Tt[At] = ((65280 & Rt) >> 8 | (255 & Rt) << 8) >> 1;
}
var Nt = function(e, t, n) {
	for (var i = e.length, a = 0, r = new ht(t); a < i; ++a) e[a] && ++r[e[a] - 1];
	var s, o = new ht(t);
	for (a = 1; a < t; ++a) o[a] = o[a - 1] + r[a - 1] << 1;
	if (n) {
		s = new ht(1 << t);
		var l = 15 - t;
		for (a = 0; a < i; ++a) if (e[a]) for (var c = a << 4 | e[a], u = t - e[a], d = o[e[a] - 1]++ << u, m = d | (1 << u) - 1; d <= m; ++d) s[Tt[d] >> l] = c;
	} else for (s = new ht(i), a = 0; a < i; ++a) e[a] && (s[a] = Tt[o[e[a] - 1]++] >> 15 - e[a]);
	return s;
}, Et = new ft(288);
for (At = 0; At < 144; ++At) Et[At] = 8;
for (At = 144; At < 256; ++At) Et[At] = 9;
for (At = 256; At < 280; ++At) Et[At] = 7;
for (At = 280; At < 288; ++At) Et[At] = 8;
var Ct = new ft(32);
for (At = 0; At < 32; ++At) Ct[At] = 5;
var $t = Nt(Et, 9, 0), Ot = Nt(Ct, 5, 0), Dt = function(e) {
	return (e + 7) / 8 | 0;
}, Bt = function(e, t, n) {
	return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new ft(e.subarray(t, n));
}, Lt = [
	"unexpected EOF",
	"invalid block type",
	"invalid length/literal",
	"invalid distance",
	"stream finished",
	"no stream handler",
	,
	"no callback",
	"invalid UTF-8 data",
	"extra field too long",
	"date not in range 1980-2099",
	"filename too long",
	"stream finishing",
	"invalid zip data"
], Pt = function(e, t, n) {
	var i = new Error(t || Lt[e]);
	if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, Pt), !n) throw i;
	return i;
}, Ft = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8;
}, Wt = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, jt = function(e, t) {
	for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
		s: i,
		f: e[i]
	});
	var a = n.length, r = n.slice();
	if (!a) return {
		t: Kt,
		l: 0
	};
	if (1 == a) {
		var s = new ft(n[0].s + 1);
		return s[n[0].s] = 1, {
			t: s,
			l: 1
		};
	}
	n.sort(function(e, t) {
		return e.f - t.f;
	}), n.push({
		s: -1,
		f: 25001
	});
	var o = n[0], l = n[1], c = 0, u = 1, d = 2;
	for (n[0] = {
		s: -1,
		f: o.f + l.f,
		l: o,
		r: l
	}; u != a - 1;) o = n[n[c].f < n[d].f ? c++ : d++], l = n[c != u && n[c].f < n[d].f ? c++ : d++], n[u++] = {
		s: -1,
		f: o.f + l.f,
		l: o,
		r: l
	};
	var m = r[0].s;
	for (i = 1; i < a; ++i) r[i].s > m && (m = r[i].s);
	var p = new ht(m + 1), g = Gt(n[u - 1], p, 0);
	if (g > t) {
		i = 0;
		var f = 0, h = g - t, _ = 1 << h;
		for (r.sort(function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		}); i < a; ++i) {
			var w = r[i].s;
			if (!(p[w] > t)) break;
			f += _ - (1 << g - p[w]), p[w] = t;
		}
		for (f >>= h; f > 0;) {
			var y = r[i].s;
			p[y] < t ? f -= 1 << t - p[y]++ - 1 : ++i;
		}
		for (; i >= 0 && f; --i) {
			var v = r[i].s;
			p[v] == t && (--p[v], ++f);
		}
		g = t;
	}
	return {
		t: new ft(p),
		l: g
	};
}, Gt = function(e, t, n) {
	return -1 == e.s ? Math.max(Gt(e.l, t, n + 1), Gt(e.r, t, n + 1)) : t[e.s] = n;
}, Ut = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new ht(++t), i = 0, a = e[0], r = 1, s = function(e) {
		n[i++] = e;
	}, o = 1; o <= t; ++o) if (e[o] == a && o != t) ++r;
	else {
		if (!a && r > 2) {
			for (; r > 138; r -= 138) s(32754);
			r > 2 && (s(r > 10 ? r - 11 << 5 | 28690 : r - 3 << 5 | 12305), r = 0);
		} else if (r > 3) {
			for (s(a), --r; r > 6; r -= 6) s(8304);
			r > 2 && (s(r - 3 << 5 | 8208), r = 0);
		}
		for (; r--;) s(a);
		r = 1, a = e[o];
	}
	return {
		c: n.subarray(0, i),
		n: t
	};
}, zt = function(e, t) {
	for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
	return n;
}, Vt = function(e, t, n) {
	var i = n.length, a = Dt(t + 2);
	e[a] = 255 & i, e[a + 1] = i >> 8, e[a + 2] = 255 ^ e[a], e[a + 3] = 255 ^ e[a + 1];
	for (var r = 0; r < i; ++r) e[a + r + 4] = n[r];
	return 8 * (a + 4 + i);
}, Ht = function(e, t, n, i, a, r, s, o, l, c, u) {
	Ft(t, u++, n), ++a[256];
	for (var d = jt(a, 15), m = d.t, p = d.l, g = jt(r, 15), f = g.t, h = g.l, _ = Ut(m), w = _.c, y = _.n, v = Ut(f), b = v.c, M = v.n, k = new ht(19), x = 0; x < w.length; ++x) ++k[31 & w[x]];
	for (x = 0; x < b.length; ++x) ++k[31 & b[x]];
	for (var S = jt(k, 7), I = S.t, T = S.l, A = 19; A > 4 && !I[vt[A - 1]]; --A);
	var R, N, E, C, $ = c + 5 << 3, O = zt(a, Et) + zt(r, Ct) + s, D = zt(a, m) + zt(r, f) + s + 14 + 3 * A + zt(k, I) + 2 * k[16] + 3 * k[17] + 7 * k[18];
	if (l >= 0 && $ <= O && $ <= D) return Vt(t, u, e.subarray(l, l + c));
	if (Ft(t, u, 1 + (D < O)), u += 2, D < O) {
		R = Nt(m, p, 0), N = m, E = Nt(f, h, 0), C = f;
		var B = Nt(I, T, 0);
		for (Ft(t, u, y - 257), Ft(t, u + 5, M - 1), Ft(t, u + 10, A - 4), u += 14, x = 0; x < A; ++x) Ft(t, u + 3 * x, I[vt[x]]);
		u += 3 * A;
		for (var L = [w, b], P = 0; P < 2; ++P) {
			var F = L[P];
			for (x = 0; x < F.length; ++x) {
				var W = 31 & F[x];
				Ft(t, u, B[W]), u += I[W], W > 15 && (Ft(t, u, F[x] >> 5 & 127), u += F[x] >> 12);
			}
		}
	} else R = $t, N = Et, E = Ot, C = Ct;
	for (x = 0; x < o; ++x) {
		var j = i[x];
		if (j > 255) {
			Wt(t, u, R[257 + (W = j >> 18 & 31)]), u += N[W + 257], W > 7 && (Ft(t, u, j >> 23 & 31), u += wt[W]);
			var G = 31 & j;
			Wt(t, u, E[G]), u += C[G], G > 3 && (Wt(t, u, j >> 5 & 8191), u += yt[G]);
		} else Wt(t, u, R[j]), u += N[j];
	}
	return Wt(t, u, R[256]), u + N[256];
}, qt = new _t([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), Kt = new ft(0), Jt = function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, i = 9; --i;) n = (1 & n && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), Yt = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
}, Zt = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new ft(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, i, a) {
			if (!a && (a = { l: 1 }, t.dictionary)) {
				var r = t.dictionary.subarray(-32768), s = new ft(r.length + e.length);
				s.set(r), s.set(e, r.length), e = s, a.w = r.length;
			}
			return function(e, t, n, i, a, r) {
				var s = r.z || e.length, o = new ft(i + s + 5 * (1 + Math.ceil(s / 7e3)) + a), l = o.subarray(i, o.length - a), c = r.l, u = 7 & (r.r || 0);
				if (t) {
					u && (l[0] = r.r >> 3);
					for (var d = qt[t - 1], m = d >> 13, p = 8191 & d, g = (1 << n) - 1, f = r.p || new ht(32768), h = r.h || new ht(g + 1), _ = Math.ceil(n / 3), w = 2 * _, y = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, v = new _t(25e3), b = new ht(288), M = new ht(32), k = 0, x = 0, S = r.i || 0, I = 0, T = r.w || 0, A = 0; S + 2 < s; ++S) {
						var R = y(S), N = 32767 & S, E = h[R];
						if (f[N] = E, h[R] = N, T <= S) {
							var C = s - S;
							if ((k > 7e3 || I > 24576) && (C > 423 || !c)) {
								u = Ht(e, l, 0, v, b, M, x, I, A, S - A, u), I = k = x = 0, A = S;
								for (var $ = 0; $ < 286; ++$) b[$] = 0;
								for ($ = 0; $ < 30; ++$) M[$] = 0;
							}
							var O = 2, D = 0, B = p, L = N - E & 32767;
							if (C > 2 && R == y(S - L)) for (var P = Math.min(m, C) - 1, F = Math.min(32767, S), W = Math.min(258, C); L <= F && --B && N != E;) {
								if (e[S + O] == e[S + O - L]) {
									for (var j = 0; j < W && e[S + j] == e[S + j - L]; ++j);
									if (j > O) {
										if (O = j, D = L, j > P) break;
										var G = Math.min(L, j - 2), U = 0;
										for ($ = 0; $ < G; ++$) {
											var z = S - L + $ & 32767, V = z - f[z] & 32767;
											V > U && (U = V, E = z);
										}
									}
								}
								L += (N = E) - (E = f[N]) & 32767;
							}
							if (D) {
								v[I++] = 268435456 | xt[O] << 18 | It[D];
								var H = 31 & xt[O], q = 31 & It[D];
								x += wt[H] + yt[q], ++b[257 + H], ++M[q], T = S + O, ++k;
							} else v[I++] = e[S], ++b[e[S]];
						}
					}
					for (S = Math.max(S, T); S < s; ++S) v[I++] = e[S], ++b[e[S]];
					u = Ht(e, l, c, v, b, M, x, I, A, S - A, u), c || (r.r = 7 & u | l[u / 8 | 0] << 3, u -= 7, r.h = h, r.p = f, r.i = S, r.w = T);
				} else {
					for (S = r.w || 0; S < s + c; S += 65535) {
						var K = S + 65535;
						K >= s && (l[u / 8 | 0] = c, K = s), u = Vt(l, u + 1, e.subarray(S, K));
					}
					r.i = s;
				}
				return Bt(o, 0, i + Dt(u) + a);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? a.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, n, i, a);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || Pt(5), this.s.l && Pt(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var i = new ft(-32768 & n);
				i.set(this.b.subarray(0, this.s.z)), this.b = i;
			}
			var a = this.b.length - this.s.z;
			this.b.set(e.subarray(0, a), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(a), 32768), this.s.z = e.length - a + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = Kt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || Pt(5), this.s.l && Pt(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new ft(6);
			t[0] = this.s.r >> 3;
			var n = Vt(t, this.s.r, Kt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), Qt = "undefined" != typeof TextEncoder && new TextEncoder(), Xt = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	Xt.decode(Kt, { stream: !0 });
} catch (ll) {}
function en(e, t) {
	if (t) {
		for (var n = new ft(e.length), i = 0; i < e.length; ++i) n[i] = e.charCodeAt(i);
		return n;
	}
	if (Qt) return Qt.encode(e);
	var a = e.length, r = new ft(e.length + (e.length >> 1)), s = 0, o = function(e) {
		r[s++] = e;
	};
	for (i = 0; i < a; ++i) {
		if (s + 5 > r.length) {
			var l = new ft(s + 8 + (a - i << 1));
			l.set(r), r = l;
		}
		var c = e.charCodeAt(i);
		c < 128 || t ? o(c) : c < 2048 ? (o(192 | c >> 6), o(128 | 63 & c)) : c > 55295 && c < 57344 ? (o(240 | (c = 65536 + (1047552 & c) | 1023 & e.charCodeAt(++i)) >> 18), o(128 | c >> 12 & 63), o(128 | c >> 6 & 63), o(128 | 63 & c)) : (o(224 | c >> 12), o(128 | c >> 6 & 63), o(128 | 63 & c));
	}
	return Bt(r, 0, s);
}
var tn = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var i = e[n].length;
		i > 65535 && Pt(9), t += i + 4;
	}
	return t;
}, nn = function(e, t, n, i, a, r, s, o) {
	var l = i.length, c = n.extra, u = o && o.length, d = tn(c);
	Yt(e, t, null != s ? 33639248 : 67324752), t += 4, null != s && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (r < 0 && 8), e[t++] = a && 8, e[t++] = 255 & n.compression, e[t++] = n.compression >> 8;
	var m = new Date(null == n.mtime ? Date.now() : n.mtime), p = m.getFullYear() - 1980;
	if ((p < 0 || p > 119) && Pt(10), Yt(e, t, p << 25 | m.getMonth() + 1 << 21 | m.getDate() << 16 | m.getHours() << 11 | m.getMinutes() << 5 | m.getSeconds() >> 1), t += 4, -1 != r && (Yt(e, t, n.crc), Yt(e, t + 4, r < 0 ? -r - 2 : r), Yt(e, t + 8, n.size)), Yt(e, t + 12, l), Yt(e, t + 14, d), t += 16, null != s && (Yt(e, t, u), Yt(e, t + 6, n.attrs), Yt(e, t + 10, s), t += 14), e.set(i, t), t += l, d) for (var g in c) {
		var f = c[g], h = f.length;
		Yt(e, t, +g), Yt(e, t + 2, h), e.set(f, t + 4), t += 4 + h;
	}
	return u && (e.set(o, t), t += u), t;
}, an = function() {
	function e(e) {
		var t;
		this.filename = e, this.c = (t = -1, {
			p: function(e) {
				for (var n = t, i = 0; i < e.length; ++i) n = Jt[255 & n ^ e[i]] ^ n >>> 8;
				t = n;
			},
			d: function() {
				return ~t;
			}
		}), this.size = 0, this.compression = 0;
	}
	return e.prototype.process = function(e, t) {
		this.ondata(null, e, t);
	}, e.prototype.push = function(e, t) {
		this.ondata || Pt(5), this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1);
	}, e;
}(), rn = function() {
	function e(e) {
		this.ondata = e, this.u = [], this.d = 1;
	}
	return e.prototype.add = function(e) {
		var t = this;
		if (this.ondata || Pt(5), 2 & this.d) this.ondata(Pt(4 + 8 * (1 & this.d), 0, 1), null, !1);
		else {
			var n = en(e.filename), i = n.length, a = e.comment, r = a && en(a), s = i != e.filename.length || r && a.length != r.length, o = i + tn(e.extra) + 30;
			i > 65535 && this.ondata(Pt(11, 0, 1), null, !1);
			var l = new ft(o);
			nn(l, 0, e, n, s, -1);
			var c = [l], u = function() {
				for (var e = 0, n = c; e < n.length; e++) {
					var i = n[e];
					t.ondata(null, i, !1);
				}
				c = [];
			}, d = this.d;
			this.d = 0;
			var m = this.u.length, p = function(e, t) {
				var n = {};
				for (var i in e) n[i] = e[i];
				for (var i in t) n[i] = t[i];
				return n;
			}(e, {
				f: n,
				u: s,
				o: r,
				t: function() {
					e.terminate && e.terminate();
				},
				r: function() {
					if (u(), d) {
						var e = t.u[m + 1];
						e ? e.r() : t.d = 1;
					}
					d = 1;
				}
			}), g = 0;
			e.ondata = function(n, i, a) {
				if (n) t.ondata(n, i, a), t.terminate();
				else if (g += i.length, c.push(i), a) {
					var r = new ft(16);
					Yt(r, 0, 134695760), Yt(r, 4, e.crc), Yt(r, 8, g), Yt(r, 12, e.size), c.push(r), p.c = g, p.b = o + g + 16, p.crc = e.crc, p.size = e.size, d && p.r(), d = 1;
				} else d && u();
			}, this.u.push(p);
		}
	}, e.prototype.end = function() {
		var e = this;
		2 & this.d ? this.ondata(Pt(4 + 8 * (1 & this.d), 0, 1), null, !0) : (this.d ? this.e() : this.u.push({
			r: function() {
				1 & e.d && (e.u.splice(-1, 1), e.e());
			},
			t: function() {}
		}), this.d = 3);
	}, e.prototype.e = function() {
		for (var e = 0, t = 0, n = 0, i = 0, a = this.u; i < a.length; i++) n += 46 + (p = a[i]).f.length + tn(p.extra) + (p.o ? p.o.length : 0);
		for (var r, s, o, l, c, u = new ft(n + 22), d = 0, m = this.u; d < m.length; d++) {
			var p = m[d];
			nn(u, e, p, p.f, p.u, -p.c - 2, t, p.o), e += 46 + p.f.length + tn(p.extra) + (p.o ? p.o.length : 0), t += p.b;
		}
		r = u, s = e, o = this.u.length, l = n, c = t, Yt(r, s, 101010256), Yt(r, s + 8, o), Yt(r, s + 10, o), Yt(r, s + 12, l), Yt(r, s + 16, c), this.ondata(null, u, !0), this.d = 2;
	}, e.prototype.terminate = function() {
		for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
		this.d = 2;
	}, e;
}();
function sn(e) {
	return .25 * Math.max(1, e / 968617);
}
function on(e, t) {
	return {
		...t,
		maxExtraWorkers: Number.POSITIVE_INFINITY,
		workerMemoryGib: sn(e.reduce((e, t) => Math.max(e, t.size), 0))
	};
}
function ln({ cores: e, deviceMemoryGib: t, maxExtraWorkers: n = 3, workerMemoryGib: i = 1, minDeviceMemoryGib: a = 8 }) {
	return !Number.isFinite(t) || (t ?? 0) < a || !Number.isFinite(e) || (e ?? 0) <= 2 ? 0 : Math.max(0, Math.min(n, Math.floor(e) - 2, Math.floor(t / 2 / i) - 1));
}
function cn(e, t) {
	return t.primary && e instanceof Error && e.message.includes("timed out during");
}
let un = 0;
async function dn(e, { primary: t, getPrimary: n, extraWorkers: i, signal: a, cancelOperation: r = () => {}, createWorker: l }) {
	if (a?.aborted) throw new DOMException("Aborted: raw passes", "AbortError");
	if (0 === e.length) return [];
	if (e.some((e) => {
		const t = Function.prototype.toString.call(e.run);
		return !t.includes("[native code]") && /^(?:async\s*)?(?:function(?:\s+\w+)?\s*|[\w$]+\s*)?\(\s*\)/u.test(t);
	})) throw new Error("A raw pass must receive its pool worker");
	if (0 === i && !t && !n && !l) throw new Error("A single-worker pass must borrow or inject its worker");
	const c = l ?? o, u = Array.from({ length: Math.min(e.length, i + 1) }, () => ({
		cost: 0,
		passes: []
	})), d = e.map((e, t) => ({
		pass: e,
		index: t
	}));
	i > 0 && d.sort((e, t) => t.pass.cost - e.pass.cost);
	for (const s of d) {
		const e = u.reduce((e, t) => t.cost < e.cost ? t : e);
		e.passes.push(s), e.cost += s.pass.cost;
	}
	const m = new Array(e.length), p = /* @__PURE__ */ new Set(), g = {
		stopped: !1,
		done: !1
	}, f = 1 / (i + 1), h = (e) => {
		p.delete(e) && (un = Math.max(0, un - f), e.terminate());
	};
	let _;
	const w = new Promise((e, t) => {
		_ = () => {
			g.stopped = !0, t(new DOMException("Aborted: raw passes", "AbortError"));
		}, a?.addEventListener("abort", _, { once: !0 }), a?.aborted && _();
	});
	try {
		await Promise.race([w, Promise.all(u.map(async (e, i) => {
			if (0 === e.passes.length) return;
			let a, o, l = !1;
			const u = 0 === i && (void 0 !== t || void 0 !== n), d = new Proxy({}, { get: (e, i) => {
				if (g.done) throw new Error("Raw pass pool finished");
				if (g.stopped) throw new DOMException("Aborted: raw passes", "AbortError");
				if (!o && !a) if (u) o = t ?? n();
				else if (un + f <= 1 + 4 * Number.EPSILON) {
					un += f;
					try {
						a = c({ singleThread: !0 });
					} catch (r) {
						throw un = Math.max(0, un - f), r;
					}
					p.add(a);
				} else o = t ?? n?.() ?? s();
				return Reflect.get(o ?? a.api, i);
			} }), _ = {
				cancel: () => {
					o ? r() : (l = !0, a && h(a));
				},
				get primary() {
					return void 0 !== o || Boolean(u);
				}
			};
			try {
				for (const { pass: t, index: n } of e.passes) {
					if (g.stopped) return;
					l && (a = void 0, l = !1), m[n] = await t.run(d, _);
				}
			} catch (w) {
				throw g.stopped = !0, w;
			} finally {
				a && h(a);
			}
		}))]);
	} catch (y) {
		g.stopped = !0;
		try {
			r();
		} catch {}
		throw y;
	} finally {
		g.done = !0, _ && a?.removeEventListener("abort", _);
		for (const e of p) h(e);
	}
	return m;
}
function mn(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function pn(e) {
	const t = [
		"timestamps",
		"activity",
		"sleep_scores"
	].flatMap((t) => {
		const n = new Uint32Array(e.length + 1);
		for (const [s, o] of e.entries()) n[s + 1] = n[s] + (o[t]?.length ?? 0);
		const i = "sleep_scores" === t ? Uint8Array : Float64Array, a = e[0]?.[t], r = 1 === e.length && a instanceof i ? a : new i(n[e.length]);
		if (r !== a) for (const [s, o] of e.entries()) r.set(o[t] ?? [], n[s]);
		return [r, n];
	});
	return {
		request: [JSON.stringify({ days: e.map(({ timestamps: e, activity: t, sleep_scores: n, ...i }) => i) }), ...t],
		transfer: t.filter((t) => !e.some((e) => t === e.timestamps || t === e.activity)).map((e) => e.buffer)
	};
}
function gn(e, t) {
	const n = function(e) {
		const t = mn(e.ggirTimestamps), n = mn(e.ggirEnmo);
		if (t.length > 0 && n.length > 0 && function(e) {
			for (const t of e) if (Number.isFinite(t)) return !0;
			return !1;
		}(n)) return {
			timestamps: t,
			signal: n,
			source: "ggir_enmo"
		};
		const i = new Float64Array(e.timestamps), a = new Float64Array(e.vectorMagnitude);
		return i.length > 0 && a.length > 0 ? {
			timestamps: i,
			signal: a,
			source: "vector_magnitude"
		} : null;
	}(t);
	if (!n || n.timestamps.length < 2) return null;
	const { timestamps: i, signal: a } = n, r = i[1] - i[0];
	if (!(r > 0 && Number.isInteger(r))) return null;
	for (let s = 1; s < i.length; s++) if (i[s] - i[s - 1] !== r) return null;
	return {
		wire: {
			id: `${String(e)}:${t.date}`,
			series_id: String(e),
			analysis_date: t.date,
			epoch_length_seconds: r,
			timestamps: i,
			activity: a
		},
		source: n.source
	};
}
async function fn(e, t, n, i, a = 60, r, s) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == i || n >= i) return null;
	const o = new Uint8Array(e.length);
	for (let c = 0; c < e.length; c++) o[c] = 1 === e[c] ? 1 : 0;
	const l = await hn(o, r && r.length === e.length ? r : new Float64Array(e.length), t, n, i, a, s);
	return l ? {
		totalSleepTimeMinutes: l.totalSleepTimeMinutes,
		sleepEfficiency: l.sleepEfficiency,
		wasoMinutes: l.wasoMinutes,
		sleepOnsetLatencyMinutes: l.sleepOnsetLatencyMinutes,
		numberOfAwakenings: l.numberOfAwakenings,
		timeInBedMinutes: l.timeInBedMinutes,
		ggirSleepDurationInSptMinutes: l.ggirSleepDurationInSptMinutes
	} : null;
}
async function hn(e, t, n, i, a, r = 60, s) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == i || null == a || i >= a) return null;
	const o = await async function(e, t, n, i) {
		const a = await ne(i).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === a.length ? {
			startIdx: a[0],
			endIdx: a[1]
		} : null;
	}(n, i, a, s);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, c = o.endIdx + 1, u = e instanceof Uint8Array ? e.slice(l, c) : new Uint8Array(e.slice(l, c)), d = t instanceof Float64Array ? t.slice(l, c) : Float64Array.from(t.slice(l, c)), m = await ne(s).computeSleepMetrics(u, d, r), p = n[l] ?? 0, g = n[c - 1] ?? p, f = null != m.firstSleepEpochIdx ? n[l + m.firstSleepEpochIdx] ?? p : p, h = null != m.lastSleepEpochIdx ? n[l + m.lastSleepEpochIdx] ?? g : g;
	return {
		timeInBedMinutes: m.timeInBedMinutes,
		totalSleepTimeMinutes: m.totalSleepTimeMinutes,
		sleepOnsetLatencyMinutes: m.sleepOnsetLatencyMinutes,
		wasoMinutes: m.wasoMinutes,
		numberOfAwakenings: m.numberOfAwakenings,
		ggirSleepDurationInSptMinutes: m.ggirSleepDurationInSptMinutes,
		averageAwakeningLengthMinutes: m.averageAwakeningLengthMinutes,
		sleepEfficiency: m.sleepEfficiency,
		movementIndex: m.movementIndex,
		fragmentationIndex: m.fragmentationIndex,
		sleepFragmentationIndex: m.sleepFragmentationIndex,
		totalActivity: m.totalActivity,
		nonzeroEpochs: m.nonzeroEpochs,
		inBedTime: p,
		outBedTime: g,
		sleepOnset: f,
		sleepOffset: h
	};
}
function _n(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const i = ae(e), a = Array.from(i.timestamps);
	if (i.ggir) return {
		timestamps: a,
		algorithmResults: i.sleepScores,
		activity: null,
		scoresStale: null
	};
	const r = e.axisY;
	let s = r ? new Float64Array(r) : null;
	const o = s ? e.actiwareActivityInvalid : void 0;
	if (s && o) {
		const e = new Uint8Array(o);
		if (e.length === s.length && e.some((e) => 1 === e)) {
			s = s.slice();
			for (let t = 0; t < e.length; t += 1) 1 === e[t] && (s[t] = NaN);
		}
	}
	if (!e.algorithmResults || "object" != typeof e.algorithmResults) return console.warn(`[loadActivityForMetrics] Missing algorithmResults for activity day id=${e.id}`), {
		timestamps: a,
		algorithmResults: null,
		activity: s,
		scoresStale: n
	};
	const l = E(e, t);
	return {
		timestamps: a,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: s,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
const wn = /* @__PURE__ */ new Map();
async function yn(e, t) {
	if (wn.has(e)) return wn.get(e);
	try {
		const n = await ne(t).resolveTimezone(e);
		return wn.set(e, n), n;
	} catch (Pt) {
		t?.throwIfAborted(), console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, Pt);
		return;
	}
}
function vn(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : pt();
}
async function bn(e) {
	try {
		return vn((await oe(e))?.extraSettings);
	} catch (Pt) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", Pt), pt();
	}
}
function Mn(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const kn = {
	zone: null,
	reason: null
};
async function xn(e, t, n) {
	const i = e.ggirTimezone?.trim();
	let a = null;
	if (i) {
		const e = await yn(i, n);
		if (!e) return kn;
		if ("iana" === e.kind) return {
			zone: e.zone,
			reason: null
		};
		a = function(e) {
			const t = /^([+-])(\d{2}):(\d{2})(?::\d{2})?$/u.exec(e.trim());
			if (!t) return null;
			const n = 60 * Number(t[2]) + Number(t[3]);
			return "-" === t[1] ? -n : n;
		}(e.zone);
	} else "number" == typeof e.recording?.gmtOffsetMinutes && (a = e.recording.gmtOffsetMinutes);
	if (null === a) return Re(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : kn;
	const r = await yn(t, n);
	if (void 0 === r) return kn;
	if ("iana" !== r?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const s = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== s && (await gt(r.zone, s, ne(n))).includes(a) ? {
		zone: r.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${Mn(a)} is not a ${r.zone} offset`
	};
}
function Sn(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [i, a] of e.entries()) t[i + 1] = t[i] + a.length;
	const n = new Float64Array(t[e.length]);
	for (const [i, a] of e.entries()) n.set(a, t[i]);
	return [n, t];
}
const In = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), Tn = [
	["tst", (e) => e.tstMinutes],
	["sleepEfficiency", (e) => e.sleepEfficiency],
	["waso", (e) => e.wasoMinutes],
	["sol", (e) => e.solMinutes],
	["timeInBed", (e) => e.timeInBedMinutes],
	["awakenings", (e) => e.numberOfAwakenings],
	["averageAwakeningLength", (e) => e.averageAwakeningLengthMinutes],
	["movementIndex", (e) => e.movementIndex],
	["fragmentationIndex", (e) => e.fragmentationIndex],
	["midSleepHour", (e) => e.midSleepHour]
];
var An = Tn.map(() => In);
Object.fromEntries(Tn.map(([e], t) => [e, An[t]]));
const Rn = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values(L).filter((e) => ![
		L.choi_2012,
		L.choi_2011,
		L.van_hees_2023,
		L.detach_nonwear
	].some((t) => t === e))
];
async function Nn(e, t, n, i) {
	const a = void 0 === t ? n?.window[e] : 48 === t ? n?.view48[e] : void 0;
	if (a) return {
		start: a[0],
		end: a[1]
	};
	const r = await (i ?? s()).analysisWindowBounds(e, t);
	return r ? {
		start: r[0],
		end: r[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function En(e, t, n) {
	const i = e instanceof Float64Array ? e : Float64Array.from(e), [a, r] = await (n ?? s()).analysisWindowSlice(i, t);
	return {
		startIndex: a,
		endIndex: r
	};
}
async function Cn(e, t = s()) {
	const n = [...new Set(e)], i = await t.analysisDatesOf(Float64Array.from(n)), a = new Map(n.map((e, t) => [e, i[t] ?? ""]));
	return (e) => a.get(e) ?? "";
}
function $n(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [i, a] of Object.entries(Ke(e, e.nonwearChoiAxis ?? Ge()))) a && (n[t[i] ?? i] = new Uint8Array(a));
	return n;
}
async function On(e, t, n, i = {}) {
	const { signal: a, includeNonwearMasks: r = !1 } = i, s = e.get(t), o = _n(s, n), l = r && s ? $n(s) : {}, c = e.get(await O(t, void 0, ne(a))), u = o.timestamps[o.timestamps.length - 1], d = c ? _n(c, n) : null, m = d?.timestamps[0], p = void 0 !== c && null !== d && void 0 !== u && void 0 !== m && m > u, g = o.scoresStale ?? d?.scoresStale ?? null;
	if (null !== g) return {
		...o,
		algorithmResults: null,
		masks: l,
		scoresStale: g
	};
	if (!p || !o.algorithmResults) return {
		...o,
		masks: l,
		scoresStale: null
	};
	const f = o.timestamps.length, h = f + d.timestamps.length, _ = o.algorithmResults.length >= f && d.algorithmResults && d.algorithmResults.length >= d.timestamps.length ? new Uint8Array(h) : null;
	_?.set(o.algorithmResults.subarray(0, f)), d.algorithmResults && _?.set(d.algorithmResults.subarray(0, h - f), f);
	const w = o.activity && d.activity ? new Float64Array(h) : null;
	o.activity && w?.set(o.activity.subarray(0, f)), d.activity && w?.set(d.activity.subarray(0, h - f), f);
	const y = r ? $n(c) : {}, v = {};
	for (const b of Rn) {
		const e = l[b], t = y[b];
		if (!e && !t) continue;
		const n = new Uint8Array(h);
		e && n.set(e.subarray(0, f)), t && n.set(t.subarray(0, h - f), f), v[b] = n;
	}
	return {
		timestamps: [...o.timestamps, ...d.timestamps],
		algorithmResults: _,
		activity: w,
		masks: v,
		scoresStale: null
	};
}
async function Dn(e, t, n, i) {
	const a = await n.files.get(e.fileId);
	if (!a) return;
	const r = /* @__PURE__ */ new Map();
	for (const s of [e.date, await O(e.date, void 0, ne(i))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, s]).first();
		t && r.set(s, t);
	}
	await async function(e, t, n, i) {
		const { date: a, file: r, activityMap: s, verdict: o } = t, l = t.spanning ?? await On(s, a, o, { signal: i });
		if (null !== l.scoresStale || !l.algorithmResults) return e.sleepMarkers.map(() => null);
		const c = function(e, t) {
			return JSON.stringify([
				t.seriesRevision ?? 0,
				t.epochLengthSeconds || 60,
				e.algorithm,
				e.sleepMarkers.map((e) => [e.onsetTimestamp ?? null, e.offsetTimestamp ?? null])
			]);
		}(e, r);
		if (e.periodMetrics?.inputs === c) return e.periodMetrics.metrics;
		const { timestamps: u, algorithmResults: d } = l, m = [];
		for (const p of e.sleepMarkers) m.push(d && u.length > 0 && p.onsetTimestamp && p.offsetTimestamp ? await hn(d, l.activity ?? new Float64Array(d.length), l.timestamps, p.onsetTimestamp, p.offsetTimestamp, r.epochLengthSeconds || 60, i) : null);
		if (void 0 !== e.id) try {
			await ie(n, [n.markers], () => Se(e.id, {
				inputs: c,
				metrics: m
			}, n), i);
		} catch {
			i?.throwIfAborted();
		}
		return m;
	}(e, {
		date: e.date,
		file: a,
		activityMap: r,
		verdict: t
	}, n, i);
}
Object.fromEntries(Object.values(L).map((e) => [e, e === L.ggir_saved ? Ae : Ve(e)]));
const Bn = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], Ln = ["under-series", "over-series"], Pn = ["full-resolution-v1", "min-max-gap-envelope-v1"], Fn = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function Wn(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function jn(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? Wn(t, "expected an object") : e;
}
function Gn(e, t) {
	return Array.isArray(e) ? e : Wn(t, "expected an array");
}
function Un(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : Wn(t, "expected a finite number");
}
function zn(e, t) {
	const n = Un(e, t);
	return n <= 0 ? Wn(t, "expected a positive number") : n;
}
function Vn(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : Wn(t, "expected a safe integer");
}
function Hn(e, t) {
	const n = Vn(e, t);
	return n < 0 ? Wn(t, "expected a non-negative safe integer") : n;
}
function qn(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? Wn(t, "expected a boolean") : { [n]: e };
}
function Kn(e, t) {
	return "string" != typeof e || 0 === e.length ? Wn(t, "expected a non-empty string") : e;
}
function Jn(e, t) {
	return "string" == typeof e && Bn.includes(e) ? e : Wn(t, "expected a supported tone");
}
function Yn(e, t) {
	return "string" == typeof e && Ln.includes(e) ? e : Wn(t, "expected a supported phase");
}
function Zn(e, t) {
	const n = jn(e, t), i = Un(n.min, `${t}.min`), a = Un(n.max, `${t}.max`);
	return a <= i || !Number.isFinite(a - i) ? Wn(t, "expected a finite ascending range") : {
		min: i,
		max: a
	};
}
function Qn(e, t) {
	const n = `series[${t}]`, i = jn(e, n), a = Gn(i.points, `${n}.points`);
	let r = Number.NEGATIVE_INFINITY;
	const s = (e) => `${n}.points[${e}]`, o = a.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return Wn(s(t), "expected an object");
		const n = e, i = n.timestamp;
		if ("number" != typeof i || !Number.isFinite(i)) return Wn(`${s(t)}.timestamp`, "expected a finite number");
		if (i <= r) return Wn(`${s(t)}.timestamp`, "expected strictly ascending timestamps");
		r = i;
		const a = n.value;
		return null === a || "number" == typeof a && Number.isFinite(a) ? {
			timestamp: i,
			value: a
		} : Wn(`${s(t)}.value`, "expected a finite number");
	});
	return {
		tone: Jn(i.tone, `${n}.tone`),
		strokeWidth: zn(i.strokeWidth, `${n}.strokeWidth`),
		valueDomain: Zn(i.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function Xn(e, t) {
	const n = `overlays[${t}]`, i = jn(e, n), a = {
		phase: Yn(i.phase, `${n}.phase`),
		order: Vn(i.order, `${n}.order`),
		tone: Jn(i.tone, `${n}.tone`)
	};
	if ("interval" === i.kind) {
		const e = Un(i.startTimestamp, `${n}.startTimestamp`), t = Un(i.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? Wn(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...a,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === i.kind ? {
		kind: "threshold",
		...a,
		value: Un(i.value, `${n}.value`),
		...qn(i.draggable, `${n}.draggable`, "draggable"),
		...qn(i.selected, `${n}.selected`, "selected"),
		...qn(i.handle, `${n}.handle`, "handle"),
		...void 0 === i.label ? {} : { label: Kn(i.label, `${n}.label`) }
	} : "instant" === i.kind ? {
		kind: "instant",
		...a,
		timestamp: Un(i.timestamp, `${n}.timestamp`)
	} : Wn(`${n}.kind`, "expected interval, threshold, or instant");
}
function ei(e, t, n) {
	const i = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(i) ? i : Wn("projection", "expected a finite pixel coordinate");
}
function ti(e, t, n) {
	const i = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(i) ? i : Wn("projection", "expected a finite pixel coordinate");
}
function ni(e) {
	if (!(e < 1e9 && e > -1e9)) {
		const t = Number(e.toFixed(6));
		return Object.is(t, -0) ? "0" : String(t);
	}
	const t = e.toFixed(6);
	let n = t.length;
	for (; 48 === t.charCodeAt(n - 1);) n -= 1;
	46 === t.charCodeAt(n - 1) && (n -= 1);
	const i = n === t.length ? t : t.slice(0, n);
	return "-0" === i ? "0" : i;
}
function ii(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function ai(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, i = t.plotArea.height, a = Fn[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const r = ii(ei(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), s = ii(ei(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${ni(r)}" y="0" width="${ni(Math.max(1, s - r))}" height="${ni(i)}" fill="${a}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const r = ti(e.value, t.valueDomain, i), s = !0 === e.selected, o = s ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${s ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${ni(r)}" x2="${ni(n)}" y2="${ni(r)}" stroke="${a}" stroke-width="${s ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const r = ei(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${ni(r)}" y1="0" x2="${ni(r)}" y2="${ni(i)}" stroke="${a}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function ri(e) {
	const t = function(e) {
		const t = jn(e, "scene");
		if (2 !== t.version) return Wn("version", "expected 2");
		const n = jn(t.grid, "grid"), i = {
			strategy: (a = n.strategy, "string" == typeof a && Pn.includes(a) ? a : Wn("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: Hn(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: Hn(n.renderedPointCount, "grid.renderedPointCount")
		};
		var a;
		if (i.renderedPointCount > i.sourcePointCount) return Wn("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === i.strategy && i.renderedPointCount !== i.sourcePointCount) return Wn("grid", "full-resolution strategy requires equal point counts");
		const r = jn(t.size, "size"), s = {
			width: zn(r.width, "size.width"),
			height: zn(r.height, "size.height")
		}, o = jn(t.plotArea, "plotArea"), l = {
			left: Un(o.left, "plotArea.left"),
			top: Un(o.top, "plotArea.top"),
			width: zn(o.width, "plotArea.width"),
			height: zn(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > s.width || l.top + l.height > s.height) return Wn("plotArea", "expected bounds contained by size");
		const c = Zn(t.viewport, "viewport"), u = Zn(t.valueDomain, "valueDomain"), d = Gn(t.series, "series").map(Qn);
		if (0 === d.length && 0 !== i.renderedPointCount) return Wn("grid.renderedPointCount", "expected zero when series is empty");
		const m = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let h = 0; h < d.length; h++) {
			const e = d[h]?.points ?? [];
			if (e.length !== i.renderedPointCount) return Wn(`series[${h}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return Wn(`series[${h}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const p = Gn(t.overlays, "overlays").map(Xn), g = null === t.cursorTimestamp ? null : Un(t.cursorTimestamp, "cursorTimestamp");
		let f = null;
		if (null !== t.selection) {
			const e = jn(t.selection, "selection"), n = Un(e.startTimestamp, "selection.startTimestamp"), i = Un(e.endTimestamp, "selection.endTimestamp");
			if (i <= n) return Wn("selection", "expected a half-open ascending interval");
			f = {
				startTimestamp: n,
				endTimestamp: i
			};
		}
		return {
			version: 2,
			grid: i,
			size: s,
			plotArea: l,
			viewport: c,
			valueDomain: u,
			series: d,
			overlays: p,
			cursorTimestamp: g,
			selection: f
		};
	}(e), n = ni(t.size.width), i = ni(t.size.height), a = ni(t.plotArea.width), r = ni(t.plotArea.height), s = ai(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
		let i = "", a = !1;
		const r = {
			left: 0,
			width: n.plotArea.width
		}, s = /* @__PURE__ */ new Map();
		for (const o of e.points) {
			if (null == o.value) {
				a = !1;
				continue;
			}
			const t = ei(o.timestamp, n.viewport, r);
			let l = s.get(o.value);
			void 0 === l && (l = ni(ti(o.value, e.valueDomain, n.plotArea.height)), s.set(o.value, l)), i += `${a ? "L" : "M"}${ni(t)} ${l}`, a = !0;
		}
		return 0 === i.length ? "" : `<path data-series-index="${t}" d="${i}" fill="none" stroke="${Fn[e.tone]}" stroke-width="${ni(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = ai(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${i}" viewBox="0 0 ${n} ${i}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${i}" fill="#ffffff"/><svg x="${ni(t.plotArea.left)}" y="${ni(t.plotArea.top)}" width="${a}" height="${r}" viewBox="0 0 ${a} ${r}" overflow="hidden"><rect x="0" y="0" width="${a}" height="${r}" fill="#ffffff"/>${s}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = ii(ei(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), i = ii(ei(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${ni(n)}" y="0" width="${ni(Math.max(1, i - n))}" height="${ni(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = ei(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${ni(n)}" y1="0" x2="${ni(n)}" y2="${ni(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${ni(t.plotArea.left)}" y="${ni(t.plotArea.top)}" width="${a}" height="${r}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
const si = "local-export-streams";
var oi = class extends Error {
	name = "ExportSnapshotTooLargeError";
	reason = "snapshot_too_large";
}, li = class e extends Error {
	file;
	step;
	reason;
	constructor(e, t, n, i = ci(n)) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t, this.reason = i;
	}
	get wire() {
		return {
			file: this.file,
			step: this.step,
			reason: this.reason
		};
	}
	static fromWire(t) {
		return new e(t.file, t.step, void 0, t.reason);
	}
};
function ci(e) {
	return e instanceof li || e instanceof oi ? e.reason : e instanceof Error ? e.name : typeof e;
}
const ui = 65536, di = "manifest.json", mi = "Duplicate export entry: ", pi = "Checking the export inputs", gi = "Reading recordings", fi = "Writing ZIP";
function hi(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function _i(e) {
	return String(e).padStart(2, "0");
}
function wi(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const yi = [
	["duration", "Duration"],
	["off_wrist", "Off-Wrist"],
	["off_wrist_percent", "%Off-Wrist"],
	["total_ac", "Total AC"],
	["avg_ac_per_min", "Avg AC/min"],
	["inv_time_sw", "Inv Time SW"],
	["invalid_sw_percent", "%Invalid SW"],
	["onset_latency", "Onset Latency"],
	["efficiency", "Efficiency"],
	["waso", "WASO"],
	["wake_time", "Wake Time"],
	["wake_percent", "%Wake"],
	["wake_bouts", "#Wake Bouts"],
	["sleep_time", "Sleep Time"],
	["sleep_percent", "%Sleep"],
	["sleep_bouts", "#Sleep Bouts"],
	["exposure_white", "Exposure White"],
	["avg_white", "Avg White"],
	["max_white", "Max White"],
	["talt_white", "TALT White"],
	["invalid_white_percent", "%Invalid White"],
	["exposure_red", "Exposure Red"],
	["avg_red", "Avg Red"],
	["max_red", "Max Red"],
	["talt_red", "TALT Red"],
	["invalid_red_percent", "%Invalid Red"],
	["exposure_green", "Exposure Green"],
	["avg_green", "Avg Green"],
	["max_green", "Max Green"],
	["talt_green", "TALT Green"],
	["invalid_green_percent", "%Invalid Green"],
	["exposure_blue", "Exposure Blue"],
	["avg_blue", "Avg Blue"],
	["max_blue", "Max Blue"],
	["talt_blue", "TALT Blue"],
	["invalid_blue_percent", "%Invalid Blue"]
];
new Set(yi.slice(16).map(([e]) => e));
var vi = class extends Error {};
const bi = "edit_recompute_requires_ms2_ms3", Mi = /* @__PURE__ */ new Set([
	"no_valid_epochs",
	"zero_interval_rows",
	"invalid_night",
	"manual_nonwear_period",
	"channel_unavailable",
	"device_not_applicable",
	"no_eligible_rest",
	"no_scored_epochs",
	"threshold_unconfigured",
	"source_reported_missing",
	"no_matching_part2_day",
	"duplicate_part2_day",
	"edit_recompute_requires_ms2_ms3",
	"not_computed_for_export",
	"not_applicable_to_row",
	"source_no_subjective_scores",
	"insufficient_pair",
	"scores_from_another_config",
	"ggir_night_excluded",
	"no_retained_nights"
]), ki = A.invalid_night_row.markerTypeCell, xi = new Set(yi.map(([, e]) => e)), Si = /* @__PURE__ */ new Set([
	C.ggir_sleepparam.header,
	C.ggir_guider_onset.header,
	C.ggir_guider_wakeup.header,
	C.ggir_guider_spt_duration.header,
	C.ggir_error_onset.header,
	C.ggir_error_wake.header,
	C.ggir_error_dur.header,
	C.ggir_fraction_night_invalid.header,
	C.ggir_duration_sib_wakinghours.header,
	C.ggir_number_sib_sleepperiod.header,
	C.ggir_number_sib_wakinghours.header,
	C.ggir_duration_sib_wakinghours_atleast15min.header,
	C.ggir_guider_onset_ts.header,
	C.ggir_guider_wakeup_ts.header,
	C.ggir_page.header,
	C.ggir_daysleeper.header,
	C.ggir_sleeplog_id.header,
	C.ggir_guider.header,
	C.ggir_longitudinal_axis.header
]), Ii = /* @__PURE__ */ new Set([
	C.ggir_sleep_duration_in_spt.header,
	C.ggir_waso.header,
	C.ggir_number_of_awakenings.header,
	C.ggir_sleeplatency.header,
	C.ggir_sleepefficiency.header
]), Ti = /* @__PURE__ */ new Set([
	...Ii,
	C.ggir_nonwear_perc_spt.header,
	C.ggir_sleeponset.header,
	C.ggir_wakeup.header,
	C.ggir_spt_duration.header,
	C.ggir_guider_onset.header,
	C.ggir_guider_wakeup.header,
	C.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	C.ggir_sleeponset_ts.header,
	C.ggir_wakeup_ts.header,
	C.ggir_guider_onset_ts.header,
	C.ggir_guider_wakeup_ts.header,
	C.ggir_daysleeper.header,
	C.ggir_cleaningcode.header,
	C.ggir_guider.header,
	C.ggir_error_onset.header,
	C.ggir_error_wake.header,
	C.ggir_error_dur.header,
	C.ggir_fraction_night_invalid.header,
	C.ggir_duration_sib_wakinghours.header,
	C.ggir_number_sib_sleepperiod.header,
	C.ggir_number_sib_wakinghours.header,
	C.ggir_duration_sib_wakinghours_atleast15min.header
]), Ai = /* @__PURE__ */ new Set([
	C.ggir_id.header,
	C.ggir_filename.header,
	C.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	C.ggir_sleep_regularity_index1.header,
	C.ggir_sri_fraction_valid.header,
	C.ggir_calendar_date.header,
	C.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	C.ggir_cleaningcode.header,
	C.ggir_guider.header,
	C.ggir_sleeplog_used.header,
	C.ggir_acc_available.header,
	C.ggir_daysleeper.header
]), Ri = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), Ni = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), Ei = new Set(Object.values(C).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), Ci = new Set(Object.values(C).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), $i = new Set(Object.values(S).map((e) => e.reviewSource)), Oi = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim()), Di = Oi, Bi = "refusal_detail_missing_reason";
function Li(e, t) {
	const n = e(C["start" === t ? "interval_start_date" : "interval_end_date"].header), i = e(C["start" === t ? "interval_start_time" : "interval_end_time"].header);
	return n && i ? `${n}T${i}` : "";
}
function Pi(e, t, n, i) {
	const a = (e) => n.get(e) ?? "", r = a(t + "_missing_reason");
	if (r && !Mi.has(r)) return null;
	const s = r || null;
	if (e.startsWith("part2_")) return "source_reported_missing";
	if (e.includes("_ggir_review")) {
		if (s) return s;
		const e = a("review_source");
		return $i.has(e) ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const o = a(C.marker_type.header) === ki || "actiware_intervals_export.csv" === e && a(C.interval_kind.header) === ki;
	if (!function(e, t) {
		return "actiware_intervals_export.csv" === e ? xi.has(t) : "actiware_sleep_wake_export.csv" === e ? t === C.actiware_sleep_wake.header || t === C.actiware_wake_threshold.header : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			C.ggir_id.header,
			C.ggir_filename.header,
			C.ggir_calendar_date.header,
			C.ggir_weekday.header,
			C.ggir_sleeplog_id.header,
			C.ggir_guider_corrected.header,
			C.ggir_cleaningcode.header
		].includes(t) : Ei.has(t);
	}(e, t)) return s || (o ? "invalid_night" : "Manual Nonwear" === a(C.marker_type.header) ? "manual_nonwear_period" : null);
	if ("actiware_intervals_export.csv" === e && xi.has(t)) {
		if (o) return "invalid_night";
		const e = a(C.interval_kind.header).toLowerCase(), n = Li(a, "start");
		if ("daily" === e && n && n === Li(a, "end")) return "zero_interval_rows";
		if ([
			C.actiware_onset_latency.header,
			C.actiware_efficiency.header,
			C.actiware_waso.header
		].includes(t)) {
			if ("sleep" !== e) return "not_applicable_to_row";
			if (Di(a(C.actiware_duration.header))) return null;
			const t = Li(a, "start"), n = Li(a, "end");
			if (!t || !n) return null;
			let r = !1;
			for (const e of i) if (e.get(C.filename.header) === a(C.filename.header) && "rest" === e.get(C.interval_kind.header) && Li((t) => e.get(t) ?? "", "start") <= t && n <= Li((t) => e.get(t) ?? "", "end")) {
				r = !0;
				break;
			}
			return r ? null : "no_eligible_rest";
		}
		if (Di(a(C.actiware_duration.header))) return null;
		if (t === C.actiware_off_wrist.header || t === C.actiware_off_wrist_percent.header) return t === C.actiware_off_wrist_percent.header && "0.00" === a(C.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === s ? s : null;
		if (t === C.actiware_avg_ac_per_min.header) return 100 === Number(a(C.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			C.actiware_invalid_sw_percent.header,
			C.actiware_wake_percent.header,
			C.actiware_sleep_percent.header
		].includes(t)) {
			if ("0.00" === a(C.actiware_duration.header)) return "zero_interval_rows";
			const e = !Di(a(C.actiware_wake_time.header)) && !Di(a(C.actiware_sleep_time.header)) && 0 === Number(a(C.actiware_wake_time.header)) && 0 === Number(a(C.actiware_sleep_time.header));
			return t === C.actiware_invalid_sw_percent.header || 100 !== Number(a(C.actiware_invalid_sw_percent.header)) && !e ? null : "no_scored_epochs";
		}
		const r = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(t);
		if (r) {
			const e = r[1];
			return "0.00" === a(C.actiware_duration.header) ? "zero_interval_rows" : Di(a("%Invalid " + e)) ? "source_reported_missing" === s ? s : null : t.startsWith("TALT ") && !Di(a("Exposure " + e)) ? "threshold_unconfigured" : 100 === Number(a("%Invalid " + e)) ? "no_valid_epochs" : null;
		}
		return null;
	}
	if ("actiware_sleep_wake_export.csv" === e) {
		if (t === C.actiware_sleep_wake.header) return "no_valid_epochs" === s ? s : null;
		if (t === C.actiware_wake_threshold.header) return "not_computed_for_export" === s ? s : null;
	}
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return Si.has(t) ? "not_computed_for_export" === s ? s : null : Ii.has(t) ? "no_scored_epochs" === s || "not_applicable_to_row" === s || "scores_from_another_config" === s ? s : null : s;
	if ("sleep_export_wide.csv" === e) return s;
	if ("summary_export.csv" === e && t === C.sleep_regularity_index.header) return s && [
		"insufficient_pair",
		"no_scored_epochs",
		"no_valid_epochs",
		"not_computed_for_export",
		"scores_from_another_config"
	].includes(s) ? s : null;
	if ("physical_activity_export.csv" === e) {
		const e = a("Status"), n = a("Method");
		if ([
			"Epoch Length Seconds",
			"Native Epoch Seconds",
			"Mask Overlap Epochs"
		].includes(t)) return "Epoch Length Seconds" === t ? "ggir_enmo" === n ? "not_applicable_to_row" : null : "Native Epoch Seconds" === t ? "not_applicable" === a("Threshold Source") ? "not_applicable_to_row" : "source_reported_missing" === s ? s : null : "ggir_enmo" === n ? "not_applicable_to_row" : "needs_signal" === e ? "channel_unavailable" : "backend_required" === e ? "not_computed_for_export" : null;
		const i = {
			"Sedentary Max": "sedentaryMax",
			"Light Min": "lightMin",
			"Moderate Min": "moderateMin",
			"Vigorous Min": "vigorousMin"
		}[t];
		if (i && "not_applicable" === a("Threshold Source")) return "device_not_applicable";
		if ("needs_signal" === e) return "channel_unavailable";
		if ("backend_required" === e) return "not_computed_for_export";
		if ("ready" !== e) return null;
		const r = M.find((e) => e.method === n);
		return i && r?.cutpoint && !Number.isFinite(r.cutpoint[i]) || "MIMS Unit Total" === t && "mims" !== n ? "not_applicable_to_row" : "ggir_enmo" === n ? Ri.has(t) ? "source_reported_missing" === s ? s : null : Ni.has(t) && "not_computed_for_export" === s ? s : null : "mims" === n && [
			"Sedentary Minutes",
			"Light Minutes",
			"Moderate Minutes",
			"Vigorous Minutes",
			"MVPA Minutes"
		].includes(t) ? "not_applicable_to_row" : "mims" !== n && "preschool_free_living_rf_3_5" !== n || ![
			"MVPA Bouts",
			"MVPA Bout Minutes",
			"Sedentary Bouts",
			"Sedentary Breaks",
			"Mean Sedentary Bout Minutes"
		].includes(t) ? "0.00" === a("Wake Wear Minutes") ? "no_valid_epochs" : null : "not_computed_for_export";
	}
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === a(C.marker_type.header) ? "manual_nonwear_period" : null : "true" === a(C.is_invalid_night.header).toLowerCase() && a(C.marker_type.header) === ki ? "invalid_night" : t === C.total_nap_minutes.header && "0" === a(C.nap_count.header) ? "not_applicable_to_row" : [
		C.l5_hour.header,
		C.m10_hour.header,
		C.sleep_midpoint_hour.header,
		C.valid_wear_minutes.header
	].includes(t) ? s && [
		"not_computed_for_export",
		"no_valid_epochs",
		"not_applicable_to_row"
	].includes(s) ? s : null : /^Mean (?:Temperature|White Light|Red Light|Green Light|Blue Light)/u.test(t) ? s && [
		"channel_unavailable",
		"no_valid_epochs",
		"not_applicable_to_row"
	].includes(s) ? s : null : s;
}
const Fi = "missing_reasons.csv";
function Wi(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(d).join(","))].map((e) => e + "\n").join("");
}
function ji(e, t) {
	const n = [
		C.filename.header,
		C.ggir_filename.header,
		"ggir_filename",
		C.participant_id.header,
		C.ggir_id.header,
		C.study_date.header,
		"Analysis Date",
		C.ggir_calendar_date.header,
		"ggir_calendar_date",
		C.interval_kind.header,
		C.marker_type.header,
		C.interval_start_date.header,
		C.interval_start_time.header,
		C.epoch_local.header,
		"Method"
	].flatMap((t) => {
		const n = e.get(t);
		return n ? [t + "=" + n] : [];
	});
	return n.length ? n.join("|") : "row=" + String(t);
}
function Gi(e, t) {
	let n = !1, i = 0;
	for (let a = 0; a < e.length; a += 1) if ("\"" === e[a]) n && "\"" === e[a + 1] ? a += 1 : n = !n;
	else if ("," === e[a] && !n && ++i === t) return e.slice(0, a);
	return e;
}
function* Ui(e, t, n = !0, i) {
	const { headerlessColumns: a, fullRowCsv: r, rowOffset: s = 0, contextRows: o } = i ?? {}, l = a?.length ? a.join(",") + "\n" + e : e, c = m(l);
	if (c.unterminatedQuotedField) throw new Error(t + ": unterminated CSV cell");
	const [d, ...p] = c.records;
	if (!d) return {
		csv: e,
		withReason: 0,
		withoutReason: 0
	};
	const g = u(d.text), f = g.findIndex((e) => e.endsWith("_missing_reason"));
	if (f >= 0 && g.slice(f).some((e) => !e.endsWith("_missing_reason"))) throw new Error(t + ": internal reason fields must trail data fields");
	const h = g.map((e, t) => ({
		header: e,
		index: t
	})).filter(({ header: e }) => "" !== e && !e.endsWith("_missing_reason")), _ = p.map((e) => u(e.text)), w = _.map((e) => new Map(g.map((t, n) => [t, e[n] ?? ""]))), y = r ? m(r).records : [], v = y[0] ? u(y[0].text) : [], b = r ? y.slice(1).map((e) => u(e.text)) : [];
	if (r && h.length > 0 && b.length !== _.length) throw new Error(t + ": complete-row evidence count differs");
	const M = r ? b.map((e) => new Map(v.map((t, n) => [t, e[n] ?? ""]))) : w;
	let k = 0, x = 0;
	for (let u = 0; u < _.length; u += 1) {
		const e = _[u], n = w[u];
		for (const { header: a, index: r } of h) {
			if ("edit_recompute_requires_ms2_ms3" === M[u].get(a + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
				yield {
					file: t,
					row: s + u + 1,
					key: ji(n, s + u + 1),
					column: a,
					reason: bi
				}, k += 1;
				continue;
			}
			const i = e[r] ?? "";
			if (!Di(i) || "" !== i.trim() && Ci.has(a)) continue;
			const l = Pi(t, a, M[u], o?.() ?? M);
			l ? (k += 1, yield {
				file: t,
				row: s + u + 1,
				key: ji(n, s + u + 1),
				column: a,
				reason: l
			}) : (x += 1, console.warn("WARNING: unreasoned missing export cell"));
		}
		const i = n.get(Bi);
		i && (yield {
			file: t,
			row: s + u + 1,
			key: ji(n, s + u + 1),
			column: i,
			reason: "not_computed_for_export"
		});
	}
	if (n && x > 0) throw new vi(t + ": " + String(x) + " unreasoned missing metric cells");
	return f < 0 ? {
		csv: e,
		withReason: k,
		withoutReason: x
	} : {
		csv: [Gi(d.text, f), ...p.map((e) => Gi(e.text, f))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: k,
		withoutReason: x
	};
}
const zi = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], Vi = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : d(String(e)), Hi = (N.part4_night_review, N.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function qi(e, t, n = "") {
	return N[e].replace("{report}", n.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${S[t].filenameSuffix}.csv`);
}
const Ki = Object.keys(S).map((e) => qi("person_summary_review", e)), Ji = (e) => Ki.some((t) => e.endsWith(t));
function Yi(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return k(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? k(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function Zi(e, t) {
	const n = new Map(De(e).map((e) => [e.night, e.nightDate]));
	return (e, i, a = !0) => {
		const r = e.columns.indexOf("nights" === t ? C.ggir_night.header : "night_number"), s = Number(e.values[r]?.[i]), o = n.get(s);
		if (a && o) return o;
		const l = e.values[e.columns.indexOf(C.ggir_calendar_date.header)]?.[i];
		return Yi(l);
	};
}
async function Qi(t, n, a, r) {
	const s = "nights" === n ? C.ggir_night.header : "window_number", o = ne(a), l = await Promise.all(t.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await Oe(e.imported, e.edits, t.night, a)])))), c = (await Promise.all(t.map(async (e, t) => {
		const i = e.current ?? e.imported, a = (e) => "nights" === n ? e.nights : e.days, r = "nights" === n ? i.nightRecomputed : i.dayRecomputed, s = "nights" === n ? e.imported.nightChecks : e.imported.dayChecks, c = l[t].filter((e) => null != e[1]), u = Zi(e.imported, n), d = new Set(e.edits.map((e) => e.night)), m = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, p = /* @__PURE__ */ new Set();
		if ("days" === n && m) {
			const t = await Promise.all(De(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), i = t.nightDate, a = n.onset < "12:00:00" ? await O(i, void 0, o) : i, r = n.wake <= n.onset ? await O(a, void 0, o) : a;
				return [Math.min(t.onsetMs, Date.parse(`${a}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${r}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: i.days.rows }, async (e, n) => {
				const a = Number(i.days.values[i.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(a)) return void p.add(n);
				const r = u(i.days, n, !1), s = i.days.values[i.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof s ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(s) : null;
				if (!r || !l) return;
				const c = Date.parse(`${r}T${l[1]}Z`), m = l[2] < l[1] ? await O(r, void 0, o) : r, g = Date.parse(`${m}T${l[2]}Z`);
				t.some(([e, t]) => c <= t && g >= e) && p.add(n);
			}));
		}
		return {
			source: S[Hi(e)].reviewSource,
			editedDayRows: p,
			editRecomputeUnavailable: m,
			editedNights: d,
			scoredDates: e.scoredDates,
			invalidDates: e.invalidDates,
			dateOf: u,
			table: a(i),
			ggir: a(e.imported),
			savedNights: e.imported.nights,
			recomputed: r,
			provenance: (e) => "nights" === n ? c.find(([t]) => t === e)?.[1] ?? "" : c.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(s.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === c.length) return null;
	const u = r ? r.filter((e) => !e.endsWith("_missing_reason") && !zi.includes(e)) : [];
	for (const e of r ? [] : c) for (const t of e.table.columns) t.endsWith("_missing_reason") || u.includes(t) || u.push(t);
	const m = new Set("nights" === n ? $.ggir_review_night_extension.map((e) => C[e].header) : []), p = r ? u.filter((e) => r.includes(e + "_missing_reason")) : u.filter((e) => m.has(e) || c.some((e) => e.editRecomputeUnavailable || e.source === S.corrected.reviewSource)), g = [[
		...u.map(d),
		...zi,
		...p.map((e) => d(e + "_missing_reason")),
		...zi.map((e) => e + "_missing_reason")
	].join(",")], f = (e, t) => {
		const n = e.columns.indexOf(s);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: h, ggir: _, recomputed: w, provenance: y, checks: v, scoredDates: b, invalidDates: M, dateOf: k, editRecomputeUnavailable: x, editedNights: S, editedDayRows: I, savedNights: T, source: A } of c) {
		const t = T.columns.filter((e) => !Ti.has(e)), a = t.filter((e) => {
			const t = T.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return T.values[t].some((e, t) => {
				const i = Number(T.values[T.columns.indexOf(C.ggir_night.header)]?.[t]), a = n.has(i) && !Object.is(n.get(i), e);
				return n.set(i, e), a;
			});
		}), r = /* @__PURE__ */ new Set(), s = (e) => Array.from({ length: _.rows }, (e, t) => t).find((t) => !r.has(t) && f(_, t) === f(h, e) && a.every((n) => Object.is(_.values[_.columns.indexOf(n)]?.[t] ?? null, h.values[h.columns.indexOf(n)]?.[e] ?? null))), o = new Set(u.filter((e) => "nights" === n ? Ti.has(e) : !Ai.has(e) && !t.includes(e))), l = (a, r, s, l) => {
			const c = v.get(f(a, r));
			return [
				...u.map((e) => {
					if ("invalid" === s && ("nights" === n ? Ti.has(e) : /sleep|spt|waso|wake|onset|guider/i.test(e) && !t.includes(e))) return "";
					const i = a.columns.indexOf(e);
					return i < 0 ? "" : Vi(a.values[i]?.[r]);
				}),
				s,
				c?.status ?? "",
				d((c?.reasons ?? []).join(";")),
				d((c?.diffs ?? []).map((e) => e.column).join(";")),
				d(l),
				...p.map((t) => "invalid" !== s || m.has(t) && t !== C.ggir_nonwear_perc_spt.header ? x && s === A && o.has(t) && ("days" === n ? I.has(r) : S.has(f(a, r))) ? bi : m.has(t) ? null != e(a, t, r) ? "" : Vi(i(a, t + "_missing_reason", r) ?? "source_reported_missing") : s === A ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
				"",
				c ? "" : "not_computed_for_export",
				c?.reasons.length ? "" : "not_applicable_to_row",
				c?.diffs.length ? "" : "not_applicable_to_row",
				l ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let e = 0; e < h.rows; e += 1) {
			const t = k(h, e);
			if (b && (!t || !b.has(t))) continue;
			const n = s(e);
			if (null != n && r.add(n), t && M?.has(t)) {
				null != n && g.push(l(_, n, A, "")), g.push(l(h, e, "invalid", ""));
				continue;
			}
			if (!w[e]) {
				g.push(l(h, e, A, ""));
				continue;
			}
			const i = f(h, e);
			null != n && g.push(l(_, n, A, "")), g.push(l(h, e, "recomputed", y(i)));
		}
		for (let e = 0; e < _.rows; e += 1) {
			if (r.has(e)) continue;
			const t = k(_, e);
			(!b || t && b.has(t)) && (g.push(l(_, e, A, "")), t && M?.has(t) && g.push(l(_, e, "invalid", "")));
		}
	}
	return g.length > 1 ? `${g.join("\n")}\n` : null;
}
function Xi(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const i of e) for (const [e, t] of Object.entries(i.part2Reports ?? {})) {
		const a = qi("part2_report", Hi(i), e);
		n.set(a, [...n.get(a) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const i = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], a = [i.map(d).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) a.push(i.map((n) => Vi(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, a.join("\n") + "\n"];
	}));
}
function ea(e, t) {
	const n = new Set(e);
	if (t.every((e) => n.has(e))) return [...e];
	if (!t.some((e) => n.has(e))) return [...e, ...new Set(t)];
	const i = [...e];
	let a = -1;
	for (const r of t) {
		const e = i.indexOf(r);
		e >= 0 ? a = e : i.splice(++a, 0, r);
	}
	return i;
}
const ta = (e, t) => De(e).filter((e) => t?.has(e.nightDate));
async function na(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: bi,
		detail: ""
	};
	const a = e.current ?? e.imported;
	if (void 0 === a.tailExpansion) return {
		reason: "not_computed_for_export",
		detail: "the saved GGIR review predates the core's tail expansion flag; import the folder again"
	};
	const r = ne(n);
	try {
		const { ggirVersion: n } = await r.ggirConfigValues(e.configCsv), { profile: s, reports: o } = await r.ggirPersonSummaries({
			ggir_version: n ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: a.nights,
			days: a.days,
			tail_expansion: a.tailExpansion,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(i(a.nights, C.ggir_id.header, 0) ?? ""),
			invalid_nights: ta(e.imported, t).map((e) => e.night),
			person_columns: Object.fromEntries(Object.entries(e.personReports ?? {}).flatMap(([e, t]) => t.rows > 0 ? [[e, t.columns]] : []))
		});
		return {
			profile: s,
			reports: o
		};
	} catch (s) {
		return n?.throwIfAborted(), {
			reason: "not_computed_for_export",
			detail: s instanceof Error ? s.message : String(s)
		};
	}
}
async function ia(e, t, n) {
	const i = /* @__PURE__ */ new Map(), a = await Promise.all(e.map(async (e) => {
		const n = ta(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (n) => {
			const i = await Oe(e.imported, e.edits, n.night, t);
			return null == i ? [] : [`night ${String(n.night)} ${i}`];
		}))).flat(), ...n].join("; ");
	}));
	for (const [s, o] of e.entries()) {
		const e = Hi(o), t = a[s], n = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [a, r] of Object.entries(o.personReports ?? {})) {
			if (0 === r.rows) continue;
			const s = qi("person_summary_review", e, a), o = "reason" in n ? n : n.reports[a] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${a}`
			};
			i.set(s, [...i.get(s) ?? [], {
				table: r,
				source: S[e].reviewSource,
				edit: t,
				recomputed: o
			}]);
		}
	}
	const r = /* @__PURE__ */ new Set([C.ggir_id.header, C.ggir_filename.header]);
	return Object.fromEntries([...i].map(([e, t]) => {
		const i = n?.get(e), a = [...new Set(t.flatMap(({ table: e }) => e.columns))], s = (i ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : ea(e, t.columns), a)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !zi.includes(e)), o = zi.map((e) => e + "_missing_reason"), l = i?.filter((e) => e.endsWith("_missing_reason") && !o.includes(e)) ?? ["refusal_detail_missing_reason", ...s.map((e) => e + "_missing_reason")], c = [[
			...s,
			...zi,
			...l,
			...o
		].map(d).join(",")], u = (e, t) => [
			e,
			"",
			"",
			"",
			d(t)
		], m = (e) => [
			"",
			"not_computed_for_export",
			"not_applicable_to_row",
			"not_applicable_to_row",
			e ? "" : "not_applicable_to_row"
		], p = (e, t) => (n) => Vi(e.values[e.columns.indexOf(n)]?.[t]), g = (e) => l.map((t) => e.get(t) ?? ""), f = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
		for (const { table: n, source: h, edit: _, recomputed: w } of t) for (let e = 0; e < n.rows; e++) {
			const t = s.map(p(n, e)), i = new Map(s.flatMap((e) => f.get(n).has(e) ? [] : [[e + "_missing_reason", "not_applicable_to_row"]]));
			if (c.push([
				...t,
				...u(h, ""),
				...g(i),
				...m("")
			].join(",")), !_) continue;
			const a = "reason" in w ? w : 0 === w.rows ? {
				reason: "no_retained_nights",
				detail: ""
			} : null, o = "reason" in w ? null : p(w, 0), l = s.map((e, n) => r.has(e) ? t[n] : o?.(e) ?? ""), y = new Map(s.flatMap((e, t) => Oi(l[t]) ? [[e + "_missing_reason", a?.reason ?? "not_applicable_to_row"]] : []));
			a?.detail && y.set(Bi, d(`ggirPersonSummaries: ${a.detail}`)), c.push([
				...l,
				...u("recomputed", _),
				...g(y),
				...m(_)
			].join(","));
		}
		return [e, c.join("\n") + "\n"];
	}));
}
const aa = $.ggir_part4_nightsummary_csv, ra = aa.map((e) => C[e].header), sa = [
	"ggir_sleepparam",
	"ggir_guider_onset",
	"ggir_guider_wakeup",
	"ggir_guider_spt_duration",
	"ggir_error_onset",
	"ggir_error_wake",
	"ggir_error_dur",
	"ggir_fraction_night_invalid",
	"ggir_duration_sib_wakinghours",
	"ggir_number_sib_sleepperiod",
	"ggir_number_sib_wakinghours",
	"ggir_duration_sib_wakinghours_atleast15min",
	"ggir_guider_onset_ts",
	"ggir_guider_wakeup_ts",
	"ggir_page",
	"ggir_daysleeper",
	"ggir_sleeplog_id",
	"ggir_guider",
	"ggir_longitudinal_axis"
], oa = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function la(e, t) {
	const n = C[e], i = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof i ? d(i) : hi(i, { integral: n.ggirIntegral ?? !1 });
}
function ca(e, t = "legacy-recording", n, i) {
	const a = [], r = [];
	for (const l of e) l.states && 0 !== l.timestamps.length && (r.push(l.states.subarray(0, Math.min(l.timestamps.length, l.states.length))), a.push({
		seriesId: t,
		...void 0 === n ? {} : { epochLengthSeconds: n },
		timestamps: l.timestamps,
		states: l.states
	}));
	const s = new Uint8Array(r.reduce((e, t) => e + t.length, 0));
	r.reduce((e, t) => (s.set(t, e), e + t.length), 0);
	const o = e.length > 0 && e.every((e) => null == e.states) ? "no_scored_epochs" : "no_valid_epochs";
	return 0 === s.length ? Promise.resolve({
		sri: null,
		fractionValid: null,
		sriMissingReason: o,
		fractionValidMissingReason: o
	}) : ne(i).validStateFraction(s).then(async (e) => {
		if (!e) return {
			sri: null,
			fractionValid: e ?? null,
			sriMissingReason: "no_valid_epochs",
			fractionValidMissingReason: null == e ? "no_valid_epochs" : null
		};
		const t = /* @__PURE__ */ new Map();
		for (const n of a) for (let e = 0; e < Math.min(n.timestamps.length, n.states.length); e++) {
			const i = n.timestamps[e];
			Number.isFinite(i) && t.set(Math.round(i), 0 === n.states[e] || 1 === n.states[e]);
		}
		const r = (void 0 === n || 86400 % n == 0) && [...t].some(([e, n]) => n && t.get(e + 86400)), s = r ? null : "insufficient_pair", o = await async function(e, t) {
			const n = Array.isArray(e) ? e : [e], i = n.map((e) => ({
				...void 0 === e.seriesId ? {} : { series_id: e.seriesId },
				...void 0 === e.epochLengthSeconds ? {} : { epoch_length_seconds: e.epochLengthSeconds }
			})), [a, r] = Sn(n.map((e) => e.timestamps)), [s, o] = Sn(n.map((e) => e.states));
			return ne(t).sleepRegularityIndex(l([
				JSON.stringify(i),
				a,
				r,
				s,
				o
			], [
				a.buffer,
				r.buffer,
				s.buffer,
				o.buffer
			]));
		}(a, i);
		if (r && null == o) throw new Error("SRI producer returned a blank despite valid pairs");
		return {
			sri: o,
			fractionValid: e,
			sriMissingReason: s,
			fractionValidMissingReason: null
		};
	});
}
async function ua(e, t, n, i = {}) {
	const { signal: a } = i, r = e.participantId ?? e.filename, s = ge(n.values(), i.algorithm), o = [];
	for (const [g, y] of n) {
		if (!ka(g, i.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = _n(y, s);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await ca(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, a), { sri: c, fractionValid: u } = l, d = "stale" === s.status ? "scores_from_another_config" : null, m = d ?? l.sriMissingReason, p = d ?? l.fractionValidMissingReason, f = [];
	for (const y of [...t.keys()].sort()) {
		const e = t.get(y);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === g.MAIN_SLEEP && null != t.onsetTimestamp && f.push({
			date: y,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const h = [[
		...ra,
		...sa.map((e) => `${C[e].header}_missing_reason`),
		...oa.map((e) => `${C[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: g, onsetTs: y, wakeupTs: v } of f) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == v ? "not_applicable_to_row" : d ?? "no_scored_epochs"
		};
		if (null != v) {
			const { timestamps: i, algorithmResults: r } = await On(n, g, s, { signal: a });
			if (r && i.length > 0) {
				t.missingReason = null;
				const n = await fn(r, i, y, v, e.epochLengthSeconds || 60, null, a);
				n && (t = {
					tstH: n.ggirSleepDurationInSptMinutes / 60,
					nAwak: n.numberOfAwakenings,
					latency: n.sleepOnsetLatencyMinutes / 60,
					efficiency: n.sleepEfficiency / 100,
					missingReason: null
				});
			}
		}
		_.push(t);
	}
	const w = await ne(a).ggirManualNightClocks(f.map((e) => e.date), Float64Array.from(f, (e) => e.onsetTs), Float64Array.from(f, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let g = 0; g < f.length; g++) {
		const { onsetTs: t, wakeupTs: n } = f[g], i = w[g], { tstH: a, nAwak: s, latency: o, efficiency: l } = _[g], d = {
			ggir_id: r,
			ggir_night: g + 1,
			ggir_sleeponset: i?.sleeponset ?? null,
			ggir_wakeup: i?.wakeup ?? null,
			ggir_spt_duration: i?.sptDuration ?? null,
			ggir_sleepparam: null,
			ggir_guider_onset: null,
			ggir_guider_wakeup: null,
			ggir_guider_spt_duration: null,
			ggir_error_onset: null,
			ggir_error_wake: null,
			ggir_error_dur: null,
			ggir_fraction_night_invalid: null,
			ggir_sleep_duration_in_spt: a,
			ggir_waso: i?.waso ?? null,
			ggir_duration_sib_wakinghours: null,
			ggir_number_sib_sleepperiod: null,
			ggir_number_of_awakenings: s,
			ggir_number_sib_wakinghours: null,
			ggir_duration_sib_wakinghours_atleast15min: null,
			ggir_sleeponset_ts: t,
			ggir_wakeup_ts: n,
			ggir_guider_onset_ts: null,
			ggir_guider_wakeup_ts: null,
			ggir_sleeplatency: o,
			ggir_sleepefficiency: l,
			ggir_page: null,
			ggir_daysleeper: null,
			ggir_weekday: i?.weekday ?? null,
			ggir_calendar_date: i?.calendarDate ?? null,
			ggir_filename: e.filename,
			ggir_cleaningcode: i?.cleaningcode ?? null,
			ggir_sleeplog_used: !1,
			ggir_sleeplog_id: null,
			ggir_acc_available: !0,
			ggir_guider: null,
			ggir_sleep_regularity_index1: c,
			ggir_sri_fraction_valid: u,
			ggir_longitudinal_axis: null,
			ggir_guider_corrected: !1
		};
		h.push([
			...aa.map((e) => la(e, d[e])),
			...sa.map((e) => {
				const t = aa.indexOf(e);
				return t >= 0 && null == d[aa[t]] ? "not_computed_for_export" : "";
			}),
			...oa.map((e) => {
				const t = aa.indexOf(e);
				return t >= 0 && null == d[aa[t]] ? _[g].missingReason ?? "" : "";
			}),
			m ?? "",
			p ?? ""
		].join(","));
	}
	return h.join("\n") + "\n";
}
function da(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const ma = "actogram_report.html";
function pa(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function ga(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function fa(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: i } = pa(n), a = [e, i].filter(Boolean);
		t.set(n, 0 === a.length ? "part4_nightsummary.csv" : `part4_nightsummary_${a.join("_")}.csv`);
	}
	return t;
}
function ha(e) {
	const { algoKey: t, ruleKey: n } = pa(e), i = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
	return t || n ? n ? `${i(t)} / ${i(n)}` : i(t) : "Legacy / Unscoped";
}
function _a(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : Ie(e);
}
function wa(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function ya(e, t) {
	const n = [], i = [], a = (e) => {
		for (const t of ba(e)) n.push(t), i.push(t.byteLength);
	};
	a(`<section class="pid-sec${0 === e ? " initial" : ""}" id="sec-${e}">`), a(`  <h2 class="pid-lbl">${da(t.pid)}</h2>`);
	for (const [r, s] of t.charts.entries()) a(`  <div class="algo-block" data-algorithm-key="${da(s.algoKey)}">`), a(`    <div class="algo-lbl">${da(ha(s.algoKey))}</div>`), s.stale && a(`    <div class="algo-stale" role="status">${da(s.stale)}</div>`), a(`    <div class="cwrap" id="c${e}_${r}">`), n.push(s.plot), i.push(...s.plotLengths), a(`      <button type="button" class="svg-btn" data-download-name="${da(s.svgFilename)}">Download SVG</button>`), a(s.meta), a("    </div>"), a("  </div>");
	return a("</section>"), {
		blob: new Blob(n),
		lengths: i
	};
}
const va = ["<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>", "</body>\n</html>"];
function* ba(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let i = Math.min(e.length, n + ui / 4);
		i < e.length && /[\uD800-\uDBFF]/u.test(e[i - 1]) && (i -= 1), yield t.encode(e.slice(n, i)), n = i;
	}
	yield t.encode("\n");
}
function Ma(e) {
	return new TextEncoder().encode(e);
}
function ka(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function xa({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: i, layouts: a, only: r }) {
	const s = {}, o = (e) => void 0 === r || r === e;
	for (const [l, c] of i ?? fa([...e.keys()])) {
		const t = e.get(l);
		t?.length && o(c) && (s[c] = Ma(`${t.join("\n")}\n`));
	}
	for (const l of Object.keys(S)) {
		const e = t.filter((e) => Hi(e) === l);
		if (0 !== e.length) {
			for (const [t, n] of Object.entries(Xi(e, a))) o(t) && (s[t] = Ma(n));
			for (const [t, i] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
				const r = qi(i, l), c = o(r) ? await Qi(e, t, n, a?.get(r)) : null;
				c && (s[r] = Ma(c));
			}
			for (const [t, i] of Object.entries(await ia(e, n, a))) o(t) && (s[t] = Ma(i));
		}
	}
	return s;
}
async function Sa(e, t, n) {
	n?.throwIfAborted();
	const i = function(e, t) {
		const { signal: n } = t, { username: i, dateRange: a, snapshot: r } = e, s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), c = [];
		return {
			addFiles: async (e) => {
				const u = Ho(r, Lo.ggirReport, e.map((e) => e.id)), d = await Promise.all(e.map((e) => Yo(r, e.id, i, n)));
				for (const [i, r] of e.entries()) {
					const e = u.files.find((e) => e.id === r.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: m, sets: p, markersByAlgo: g, invalidDates: f } = d[i], h = Qo(u, e.id), w = new Map([...g].filter(([e]) => ka(e, a))), y = /* @__PURE__ */ new Map();
					for (const [t, n] of w) for (const e of n) {
						const n = ga(e);
						let i = y.get(n);
						i || (i = /* @__PURE__ */ new Map(), y.set(n, i)), i.set(t, e);
					}
					const v = /* @__PURE__ */ new Set();
					for (const [t, n] of w) for (const e of n) _(e) && v.add(t);
					if (m) for (const t of p) c.push({
						...t,
						...a ? { scoredDates: new Set(e.availableDates.filter((e) => ka(e, a))) } : {},
						invalidDates: f
					});
					const b = [...v].sort(), M = b[0], k = b[b.length - 1], x = [], S = [];
					for (const n of t.charts ? [...h.keys()].sort() : []) if (ka(n, a) && (null == M || null == k || n >= M && n <= k)) {
						const e = h.get(n), t = ae({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), i = t.timestamps, a = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < i.length; n++) x.push(i[n]), S.push(a[n]);
					}
					const I = [];
					for (const [t, i] of y) {
						const r = pa(t).algoKey, l = m ? "" : await ua(e, i, h, {
							...r ? { algorithm: r } : {},
							...a ? { dateRange: a } : {},
							signal: n
						}), c = m ? [] : l.replace(/\n$/u, "").split("\n");
						if (c.length > 0) {
							const e = s.get(t) ?? [];
							s.set(t, e), o.has(t) ? e.push(...c.slice(1)) : (e.push(...c), o.add(t));
						}
						const u = [], d = [];
						for (const e of i.values()) {
							for (const t of e.sleepMarkers) null != t.onsetTimestamp && null != t.offsetTimestamp && u.push({
								o: t.onsetTimestamp,
								f: t.offsetTimestamp,
								t: t.markerType
							});
							for (const t of e.nonwearMarkers) null != t.startTimestamp && null != t.endTimestamp && d.push({
								s: t.startTimestamp,
								e: t.endTimestamp
							});
						}
						if (0 === u.length && 0 === d.length) continue;
						const { algoKey: p, ruleKey: g } = pa(t), f = [p, g].filter(Boolean).join("_"), _ = ge(h.values(), r || null);
						I.push([f, {
							p: u,
							n: d,
							..."stale" === _.status ? { stale: _.reason } : {}
						}]);
					}
					0 === y.size && I.push(["", {
						p: [],
						n: []
					}]), x.length > 0 && l.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: x,
						act: S,
						algos: I
					});
				}
			},
			entries: () => xa({
				csvLinesByAlgo: s,
				ggirReviews: c
			}, { signal: n }),
			chartPidData: l,
			csvLinesByAlgo: s,
			ggirReviews: c
		};
	}(e, {
		signal: n,
		charts: !0
	});
	await i.addFiles([t]);
	const a = [...i.chartPidData].map(([t, n]) => function(e, t, n) {
		return {
			key: e,
			pid: t.pid,
			charts: t.algos.map(([i, a]) => {
				const { algoKey: r, ruleKey: s } = pa(i), o = wa([r, s].filter(Boolean).join("_"), "unscoped"), l = `activity-${wa(e, "recording")}-${o}-${n}.svg`, c = function(e) {
					if (0 === e.timestamps.length) return wi("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return wi("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, i = 0;
					const a = e.timestamps.map((a, r) => {
						const s = e.activity[r];
						return !Number.isFinite(a) || a <= t ? wi("timestamps must be finite and strictly ascending") : (t = a, null != s && Number.isFinite(s) ? (n = Math.min(n, s), i = Math.max(i, s), {
							timestamp: a,
							value: s
						}) : {
							timestamp: a,
							value: null
						});
					}), r = a[0].timestamp, s = a[a.length - 1].timestamp, o = s > r ? s : r + 1;
					if (!Number.isFinite(o) || o <= r) return wi("single-epoch viewport must have a representable right edge");
					i <= n && (i = n + 1);
					const l = (e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.startTimestamp < e.endTimestamp, c = e.nonwearIntervals.filter(l).map((e, t) => ({
						kind: "interval",
						phase: "under-series",
						order: t,
						tone: "neutral",
						startTimestamp: e.startTimestamp,
						endTimestamp: e.endTimestamp
					})), u = c.length, d = e.sleepIntervals.filter(l).map((e, t) => ({
						kind: "interval",
						phase: "under-series",
						order: u + t,
						tone: "primary",
						startTimestamp: e.startTimestamp,
						endTimestamp: e.endTimestamp
					}));
					return {
						version: 2,
						grid: {
							strategy: "full-resolution-v1",
							sourcePointCount: a.length,
							renderedPointCount: a.length
						},
						size: {
							width: 1200,
							height: 220
						},
						plotArea: {
							left: 12,
							top: 12,
							width: 1176,
							height: 196
						},
						viewport: {
							min: r,
							max: o
						},
						valueDomain: {
							min: n,
							max: i
						},
						series: [{
							tone: "secondary",
							strokeWidth: 1.5,
							valueDomain: {
								min: n,
								max: i
							},
							points: a
						}],
						overlays: [
							...c,
							...d,
							...e.additionalOverlays
						],
						cursorTimestamp: e.cursorTimestamp,
						selection: e.selection
					};
				}({
					timestamps: t.ts,
					activity: t.act,
					sleepIntervals: a.p.map((e) => ({
						startTimestamp: e.o,
						endTimestamp: e.f
					})),
					nonwearIntervals: a.n.map((e) => ({
						startTimestamp: e.s,
						endTimestamp: e.e
					})),
					additionalOverlays: [],
					cursorTimestamp: null,
					selection: null
				}), u = [...ba(`      <div class="plot-svg">${ri(c)}</div>`)];
				return {
					algoKey: i,
					...a.stale ? { stale: a.stale } : {},
					svgFilename: l,
					plot: new Blob(u),
					plotLengths: u.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${da(_a(c.viewport.min))} → ${da(_a(c.viewport.max))} · activity domain ${hi(c.valueDomain.min)}–${hi(c.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), r = new Set(fa([...i.csvLinesByAlgo.keys()]).values()), s = [];
	for (const [o, l] of Object.entries(await i.entries())) r.has(o) || s.push([o, u(m(new TextDecoder().decode(l)).records[0].text)]);
	return {
		charts: a,
		csvLinesByAlgo: i.csvLinesByAlgo,
		ggirReviews: i.ggirReviews,
		headers: s
	};
}
function Ia(e) {
	return "aw5" === e ? "actoglance.source.philips_actiwatch_aw5.v1" : "actoglance.source.philips_actiware_csv.v1";
}
function Ta(e) {
	return Date.parse(`${e}Z`) / 1e3;
}
async function Aa(e, t) {
	const n = e.timestamps_ms[0];
	if (null == n) return null;
	const i = (e.channels.find((t) => t.name === e.primary) ?? e.channels[0])?.counts ?? [], a = Array.from(i, (e) => Number.isFinite(e) && e >= 0), r = await t.roundCountStorage(Float64Array.from(i, (e, t) => a[t] ? e : 0), 0);
	return {
		start_local: (s = n / 1e3, (/* @__PURE__ */ new Date(1e3 * s)).toISOString().slice(0, 19)),
		epoch_seconds: e.epoch_seconds,
		activity: a.map((e, t) => e ? r[t] : null),
		...e.marker && e.marker.length === i.length ? { marker: e.marker } : {},
		excluded: (e.rest_intervals ?? []).filter((e) => "excluded" === e.kind)
	};
	var s;
}
async function Ra(e, t, n, i = 60) {
	const a = Int8Array.from(t.scores, (e) => null == e ? -1 : 0 === e ? 1 : 0);
	return e.foldSleepWakeVotes(t.startTimestamp, t.epochSeconds, a, Float64Array.from(n), i);
}
function Na(e) {
	return {
		startTimestamp: e.startTimestamp,
		epochSeconds: e.epochSeconds,
		params: e.params,
		...e.paradigmDefaults ? { paradigmDefaults: e.paradigmDefaults } : {},
		scores: Int8Array.from(e.scores, (e) => e ?? -1).buffer
	};
}
function Ea(e, t) {
	return e.filter((e) => "rest" === e.kind || "sleep" === e.kind).map((e) => ({
		kind: e.kind,
		source: e.source,
		startTimestamp: Ta(e.start),
		endTimestamp: Ta(e.end),
		origin: t ? "generated" : "stored",
		...e.analysis ? { analysis: e.analysis } : {}
	})).filter((e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.endTimestamp > e.startTimestamp).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Ca(e) {
	return e.map(({ start: e, end: t, ...n }) => ({
		...n,
		startTimestamp: Ta(e),
		endTimestamp: Ta(t)
	}));
}
function $a(e, t) {
	return e && e.length === t && t > 0 ? e : null;
}
function Oa(e) {
	const t = e.timestamps_ms.length, n = (t) => e.light_channels.find((e) => e.name === t)?.counts;
	return {
		white: $a(e.light, t),
		red: $a(n("red_light"), t),
		green: $a(n("green_light"), t),
		blue: $a(n("blue_light"), t)
	};
}
function Da(e, t, n) {
	const i = (e) => {
		if (!e) return;
		const i = new Float64Array(n.length);
		for (let a = 0; a < n.length; a += 1) {
			const r = t.get(n[a] ?? NaN);
			i[a] = null == r ? NaN : e[r] ?? NaN;
		}
		return i.buffer;
	}, a = i(e.white), r = i(e.red), s = i(e.green), o = i(e.blue);
	return {
		...a ? { lux: a } : {},
		...r ? { redLight: r } : {},
		...s ? { greenLight: s } : {},
		...o ? { blueLight: o } : {}
	};
}
function Ba(e, t) {
	const n = 6e4 * (La(e, t)?.gmt_offset_minutes ?? 0);
	return 0 === n ? e.series : {
		...e.series,
		timestamps_ms: e.series.timestamps_ms.map((e) => e + n)
	};
}
function La(e, t) {
	return (void 0 === t ? void 0 : e.downloads.find((e) => e.guid === t)) ?? e.downloads.find((e) => e.is_primary) ?? e.downloads[0];
}
function Pa(e) {
	const t = e.channels.find((t) => t.name === e.primary) ?? e.channels[0];
	if (!t) throw new Error("The device file carries no activity count channel.");
	return t.counts;
}
async function Fa(e, t, n = [], i = null) {
	const a = function(e, t) {
		if (!t || t.length !== e.length) return /* @__PURE__ */ new Float64Array(0);
		const n = [];
		return t.forEach((t, i) => {
			t && n.push((e[i] ?? NaN) / 1e3);
		}), Float64Array.from(n.filter(Number.isFinite));
	}(e.timestamps_ms, e.marker), r = function(e) {
		const { timestamps_ms: t, off_wear: n, off_wear_invalid: i, epoch_seconds: a } = e;
		if (n.length !== t.length) return [];
		const r = [];
		let s = null;
		for (let o = 0; o <= t.length; o += 1) {
			const e = o < t.length && !0 === n[o] && !0 !== i?.[o], l = (t[o] ?? NaN) / 1e3;
			if (e && null === s && (s = l), !e && null !== s) {
				const e = (t[o - 1] ?? NaN) / 1e3;
				r.push({
					startTimestamp: s,
					endTimestamp: e + a
				}), s = null;
			}
		}
		return r;
	}(e), s = e.timestamps_ms.length > 0 && e.off_wear.length === e.timestamps_ms.length, o = e.epoch_seconds >= 60 ? e : await t(e);
	if (60 !== o.epoch_seconds && 120 !== o.epoch_seconds) throw new Error("Native import requires a 60- or 120-second scoring grid");
	const l = 120 === o.epoch_seconds ? [...n, "This recording keeps its native 120-second scoring grid. A 60-second view, one-minute sleep scorers, Choi nonwear and finer algorithm variants are unavailable because the source contains only two-minute sums."] : n, c = o.activity_invalid ?? [], u = Uint8Array.from(c.length === o.timestamps_ms.length ? c : [], (e) => e ? 1 : 0);
	return {
		epochSeconds: o.epoch_seconds,
		timestampsMs: o.timestamps_ms,
		counts: Pa(o),
		actiwareInvalidActivityMinutes: u,
		actiwareStatisticsInput: i,
		sourceEpochSeconds: e.epoch_seconds,
		eventMarkerInstantsSec: a,
		offWristPeriods: r,
		hasOffWristChannel: s,
		warnings: l,
		light: Oa(o),
		actiwareIntervals: [],
		actiwareSleepWake: null,
		actiwareStatistics: [],
		actiwareRecording: null,
		actiwareWakeThreshold: null,
		actiwareRestProposal: null
	};
}
function Wa(e) {
	const { proposal: t, nights: n } = e ?? {
		proposal: ut,
		nights: []
	}, i = t.rest_autoscore === F.screens ? n : [];
	return JSON.stringify([
		t.use_saved_rest_intervals,
		t.rest_autoscore,
		i.map(({ timestamps: e, activity_counts: t, sleep_scores: n, ...i }) => i)
	]);
}
function ja(e, t, n, i = /* @__PURE__ */ new Map(), a = {}) {
	const r = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = (/* @__PURE__ */ new Date(1e3 * (o - 43200))).toISOString().slice(0, 10);
		let t = r.get(e);
		t || r.set(e, t = []), t.push(o);
	}
	const s = Array.from(t);
	return [...r].map(([e, t]) => {
		const r = Date.parse(`${e}T00:00:00Z`) / 1e3, o = i.get(e);
		return He({
			analysisDate: e,
			epochLengthSeconds: n,
			timestamps: t,
			activityCounts: [],
			sleepScores: [],
			eventMarkerTimestamps: s.filter((e) => e >= r + 43200 && e < r + 151200),
			diaryBedTime: se(o, "diary_in_bed_time"),
			diaryOnsetTime: se(o, "diary_onset_time"),
			diaryOutBedTime: se(o, "diary_out_of_bed_time"),
			diaryWakeTime: se(o, "diary_wake_time"),
			nightStartHour: je(a.start),
			nightEndHour: je(a.end)
		});
	});
}
async function Ga(e, t, n, i, a, r, s, o) {
	s?.throwIfAborted();
	const l = n ? lt(n, ot(n, i, e)) : null, c = !n || !l || it(n, l), u = c || null !== n && null !== l && !rt(n, l) ? e.filter((e) => "rest" === e.kind) : [], d = c ? e.filter((e) => "sleep" === e.kind) : [], m = t && l && a.actiwareSleepWake ? await a.actiwareSleepWake(t, l).catch(() => null) : null;
	s?.throwIfAborted();
	const p = n ? st(n, i, e) : [], g = t && l && m ? {
		startTimestamp: Ta(t.start_local),
		epochSeconds: t.epoch_seconds,
		scores: m,
		params: l,
		...p.length > 0 ? { paradigmDefaults: p } : {}
	} : null, f = t && l && a.actiwareWakeThreshold ? await a.actiwareWakeThreshold(t, l).catch(() => null) : null;
	s?.throwIfAborted();
	const h = !1 !== o?.proposal.use_saved_rest_intervals && u.length > 0 && d.length > 0 ? null : t && l && a.actiwareIntervals ? await a.actiwareIntervals(t, u, l, ...o ? [o] : []).catch(() => null) : null;
	s?.throwIfAborted();
	const _ = h ?? {
		intervals: [...e],
		generated: !1
	}, w = _.intervals.filter((e) => "rest" === e.kind || "sleep" === e.kind), y = r && m ? {
		...r,
		sleep_wake: m
	} : r, v = y && a.actiwareIntervalStatistics && w.length > 0 ? await a.actiwareIntervalStatistics({
		...y,
		intervals: w
	}).then((e) => Ca(e ?? [])).catch(() => (console.warn("[actiware-statistics] the core rejected this file's Statistics input"), null)) : [];
	return s?.throwIfAborted(), {
		intervals: Ea(_.intervals, _.generated),
		sleepWake: g,
		statistics: v,
		statisticsInput: y,
		wakeThreshold: f ?? null,
		restProposal: o ? {
			key: Wa(o),
			...h?.nights ? { notes: Object.fromEntries(h.nights.map((e) => [e.analysis_date, e.note])) } : {}
		} : null
	};
}
const Ua = "Actiware statistics could not be computed for this file; the Actiware statistics block stays empty.";
function za(e, t) {
	return e ? (t ?? []).map((e) => `Actiware setting ${e.field} = '${e.raw_label}' not recognised; using default.`) : ["No Actiware analysis settings in this file; Actiware Sleep/Wake and rest intervals are not recomputed."];
}
async function Va(e, t) {
	if (qa(e)) return "aw5";
	const n = e.name.toLowerCase();
	if (n.endsWith(".aw5")) return "aw5";
	if (!n.endsWith(".csv")) return null;
	if ("function" != typeof t.detectDeviceFormat) return null;
	const i = new Uint8Array(await e.slice(0, 65536).arrayBuffer());
	return a = await t.detectDeviceFormat(i, e.name).catch(() => null), r = e.name, "actiware_csv" === a ? "actiware_csv" : "aw5" === a || r.toLowerCase().endsWith(".aw5") ? "aw5" : null;
	var a, r;
}
async function Ha(e, t, n, i, a, r = { cancel: () => {} }, s) {
	const o = (e, t) => X(t, ee, e, r.signal, r.cancel), l = (e) => a && s ? {
		proposal: s.proposal,
		nights: s.proposal.rest_autoscore === F.screens ? ja(e.timestampsMs.map((e) => e / 1e3), e.eventMarkerInstantsSec, e.epochSeconds, void 0, {
			start: s.nightStartHour,
			end: s.nightEndHour
		}) : []
	} : null, c = async (e) => (await o("aggregateEpochSeries", () => n.aggregateEpochSeries({
		target_seconds: 60,
		series: e,
		sleep_scores: [],
		event_markers: []
	}))).series;
	if ("aw5" === t) {
		const t = qa(e) ? e.aw5Subject.downloadGuids[0] : void 0, s = qa(e) ? await e.loadAw5(r.signal) : await o("parseAw5", async () => n.parseAw5(new Uint8Array(await e.arrayBuffer())));
		if (Q(r.signal, "after decoding the .AW5 database"), !s) throw new Error("This build's actours core cannot read .AW5 databases yet (needs the pin that exports parseAw5). Export the recording from Actiware as CSV instead.");
		const { warnings: u } = function(e) {
			const { status: t, reasons: n } = e.alignment;
			if ("broken" === t) throw new Error(`This .AW5 recording's samples do not line up with its clock (${n.join("; ") || "alignment broken"}), so it was not imported.`);
			return "suspect" === t ? { warnings: [`.AW5 alignment is suspect: ${n.join("; ") || "no reason given"}. Check the plot against the Actiware report.`] } : { warnings: [] };
		}(s), d = La(s, t), m = s.actiware_analysis, p = m?.statistics_input ?? s.actiware_statistics_input ?? null;
		i?.(.6, "Preparing the supported native scoring grid...");
		const g = await Fa(Ba(s, t), c, u, p);
		i?.(.8, "Actiware sleep/wake and statistics...");
		const f = m?.params ?? s.actiware_params, h = f ? {
			params: f,
			intervals: m?.intervals ?? s.series.rest_intervals ?? [],
			...m?.analysis ? { analysis: m.analysis } : {},
			...s.other_analyses ? { otherAnalyses: s.other_analyses } : {}
		} : null, _ = await Ga(h?.intervals ?? [], m?.input ?? s.actiware_input ?? await Aa(Ba(s, t), n), h?.params ?? null, a, n, p, void 0, l(g));
		return {
			...g,
			actiwareRestProposal: _.restProposal,
			actiwareStatisticsInput: _.statisticsInput,
			actiwareIntervals: _.intervals,
			actiwareSleepWake: _.sleepWake,
			actiwareStatistics: _.statistics ?? [],
			actiwareRecording: h,
			actiwareWakeThreshold: _.wakeThreshold,
			warnings: [
				...g.warnings,
				...za(f, m?.params_warnings ?? s.actiware_params_warnings ?? s.series.actiware_params_warnings),
				..._.statistics ? [] : [Ua]
			],
			...d ? { gmtOffsetMinutes: d.gmt_offset_minutes } : {}
		};
	}
	const u = await o("parseEpochSeries", async () => n.parseEpochSeries(new Uint8Array(await e.arrayBuffer()), e.name));
	Q(r.signal, "after parsing the Actiware export"), i?.(.6, "Preparing the supported native scoring grid...");
	const d = await Fa(u, c, [], u.actiware_statistics_input ?? null);
	i?.(.8, "Actiware sleep/wake and statistics...");
	const m = u.actiware_params ?? null, p = m ? {
		params: m,
		intervals: u.rest_intervals ?? []
	} : null, g = await Ga(u.rest_intervals ?? [], u.actiware_input ?? await Aa(u, n), m, a, n, u.actiware_statistics_input ?? null, void 0, l(d));
	return {
		...d,
		actiwareRestProposal: g.restProposal,
		actiwareStatisticsInput: g.statisticsInput,
		actiwareIntervals: g.intervals,
		actiwareSleepWake: g.sleepWake,
		actiwareStatistics: g.statistics ?? [],
		actiwareRecording: p,
		actiwareWakeThreshold: g.wakeThreshold,
		warnings: [
			...d.warnings,
			...za(m, u.actiware_params_warnings),
			...g.statistics ? [] : [Ua]
		]
	};
}
function qa(e) {
	return "aw5Subject" in e;
}
function Ka(e, t) {
	const n = JSON.stringify({
		recordingKey: e.recordingKey,
		series: t.series,
		actiware_input: t.actiware_input,
		actiware_params: t.actiware_params,
		actiware_statistics_input: t.actiware_statistics_input,
		downloads: t.downloads.map(({ guid: e, ...t }) => t)
	});
	return new File([n], "aw5-subject");
}
var Ja = class extends Error {
	name = "ActiwareSleepContainmentError";
}, Ya = class extends Error {
	name = "ActiwareRestEditError";
};
const Za = (e, t) => Math.round((t - e.startTimestamp) / e.epochSeconds);
function Qa(e, t) {
	return e.startTimestamp + Za(e, t) * e.epochSeconds;
}
const Xa = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " "), er = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19);
function tr(e) {
	return {
		kind: e.kind,
		source: e.source,
		start: er(e.startTimestamp),
		end: er(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	};
}
async function nr(e, { epochs: t, params: n, grid: i, core: a }) {
	if (0 === e.length) return [];
	const r = await a.actiwareIntervals(t, e.map(tr), n);
	if (!r || r.generated) throw new Error("The Actiware core did not derive the sleep inside these rest intervals.");
	const s = Ea(r.intervals.filter((e) => "sleep" === e.kind), !0);
	return function(e, t) {
		const n = e.filter((e) => "rest" === e.kind);
		for (const i of e.filter((e) => "sleep" === e.kind)) {
			const e = Za(t, i.startTimestamp), a = Za(t, i.endTimestamp);
			if (!n.some((n) => e >= Za(t, n.startTimestamp) && a <= Za(t, n.endTimestamp))) throw new Ja(`Actiware sleep interval ${Xa(i.startTimestamp)}–${Xa(i.endTimestamp)} lies outside every rest interval.`);
		}
	}([...e, ...s], i), s;
}
const ir = (e, t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp;
function ar(e, t, n) {
	const i = ze(e, t);
	return i ? [...i.sleep && !n ? [{
		onsetTimestamp: i.sleep.startTimestamp,
		offsetTimestamp: i.sleep.endTimestamp,
		markerIndex: 1,
		markerType: g.MAIN_SLEEP
	}] : [], ...(i.additionalSleeps ?? []).map((e, t) => ({
		onsetTimestamp: e.startTimestamp,
		offsetTimestamp: e.endTimestamp,
		markerIndex: t + 2,
		markerType: g.NAP
	}))] : [];
}
function rr(e, t, n, i) {
	return ar(t, n, i).map((t) => {
		const n = e.find((e) => e.markerType === t.markerType && e.onsetTimestamp === t.onsetTimestamp && e.offsetTimestamp === t.offsetTimestamp);
		return n ? {
			...n,
			markerIndex: t.markerIndex
		} : t;
	});
}
function sr(e, t) {
	const n = [...t].flatMap((t) => {
		const n = ze(e, t);
		return n?.sleep ? [n.sleep] : [];
	});
	return (e ?? []).filter((e) => "sleep" !== e.kind || !n.some((t) => t.startTimestamp === e.startTimestamp && t.endTimestamp === e.endTimestamp));
}
async function or(e, t, n, i) {
	if (!t) return null;
	const a = sr(e, n).map(tr).sort((e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind));
	if (0 === a.length) return [];
	const r = await i({
		...t,
		intervals: a
	});
	return r ? Ca(r).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)) : null;
}
async function lr(e, t, n, i) {
	const a = function(e, t) {
		return (e ?? []).filter((e) => "rest" === e.kind && null !== Ue([e], t));
	}(e, t), r = "move" === n.kind ? a.find((e) => e.startTimestamp === n.from.startTimestamp && e.endTimestamp === n.from.endTimestamp) : "remove" === n.kind ? a.find((e) => ir(n.holding, e)) : void 0;
	if ("add" !== n.kind && !r) throw new Ya("That rest interval changed since it was shown; reload the night.");
	const s = e.filter((e) => e !== r && !(r && "sleep" === e.kind && ir(e, r)));
	if ("remove" === n.kind) return s;
	const { grid: o } = i, l = r?.analysis, c = {
		kind: "rest",
		source: "event_marker",
		origin: "scorer",
		startTimestamp: Qa(o, n.to.startTimestamp),
		endTimestamp: Qa(o, n.to.endTimestamp),
		...l ? { analysis: l } : {}
	};
	if (c.endTimestamp <= c.startTimestamp) throw new Ya("A rest interval must end after it starts.");
	if (s.some((e) => "rest" === e.kind && e.startTimestamp < c.endTimestamp && e.endTimestamp > c.startTimestamp)) throw new Ya("A rest interval cannot overlap another rest interval.");
	if (null === Ue([c], t)) throw new Ya("That rest interval would belong to another night.");
	const u = await nr([c], i);
	return [
		...s,
		c,
		...u
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function cr(e, t) {
	const n = (e) => [
		e.startTimestamp,
		e.endTimestamp,
		e.origin
	].join(":"), i = (e) => e ? {
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	} : null, a = (e) => e.filter((e) => "rest" === e.kind), r = new Set(a(e).map(n)), s = new Set(a(t).map(n));
	return {
		from: i(a(e).find((e) => !s.has(n(e)))),
		to: i(a(t).find((e) => !r.has(n(e))))
	};
}
async function ur(e, t, n) {
	if (0 === t.length) return [...e];
	const i = e.filter((e) => {
		return "rest" === e.kind && (n = e, t.some((e) => n.startTimestamp < e.endTimestamp && n.endTimestamp > e.startTimestamp));
		var n;
	}), a = e.filter((e) => !(i.includes(e) || "sleep" === e.kind && i.some((t) => ir(e, t)))), r = await nr(t, n);
	return [
		...a,
		...t,
		...r
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
async function dr({ file: e, statisticsInput: t }, n, i, a) {
	if (!t) return null;
	const r = ne(a), s = e.actiwareIntervals ?? [], o = await Cn(s.map((e) => e.startTimestamp), r), l = [...n.keys()].map((e) => ({
		date: e,
		rests: s.filter((t) => "rest" === t.kind && null !== Ue([t], e))
	}));
	let c = [...s];
	for (const { date: _, rests: w } of l) {
		const e = s.filter((e) => {
			if ("sleep" !== e.kind) return !1;
			const t = s.find((t) => "rest" === t.kind && e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp);
			return t ? w.includes(t) : o(e.startTimestamp) === _;
		}), t = n.get(_), i = t?.sleepMarkers.filter((e) => (e.markerType === g.NAP || e.markerType === g.MAIN_SLEEP && !t.isInvalidNight) && null != e.onsetTimestamp && Number.isFinite(e.onsetTimestamp) && null != e.offsetTimestamp && Number.isFinite(e.offsetTimestamp) && e.offsetTimestamp > e.onsetTimestamp);
		if (t?.isInvalidNight || i?.length) {
			c = c.filter((t) => !e.includes(t));
			const t = e[0]?.analysis;
			for (const e of i ?? []) c.push({
				kind: "sleep",
				source: "event_marker",
				startTimestamp: e.onsetTimestamp,
				endTimestamp: e.offsetTimestamp,
				origin: "scorer",
				...t ? { analysis: t } : {}
			});
		}
	}
	const u = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19), d = c.map((e) => ({
		kind: e.kind,
		source: e.source,
		start: u(e.startTimestamp),
		end: u(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	})).sort((e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind)), m = await i({
		...t,
		intervals: d
	});
	if (!m) return null;
	const p = Ca(m), f = await Cn([...e.actiwareStatistics ?? [], ...p].map((e) => e.startTimestamp), r), h = (e) => l.some(({ date: t, rests: n }) => {
		if ("rest" === e.kind) return null !== Ue([e], t);
		if ("sleep" !== e.kind) return !1;
		const i = s.find((t) => "rest" === t.kind && e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp);
		return i ? n.includes(i) : f(e.startTimestamp) === t;
	});
	return [...(e.actiwareStatistics ?? []).filter((e) => !h(e)), ...p.filter(h)].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
async function mr(e, t, n, i) {
	const a = [], r = [];
	for (const [s, o] of e) if (s) for (let e = 0; e < Math.min(s.length, o.length); e++) a.push(o[e]), r.push(s[e]);
	return await ne(i).spanFiniteMean(Float64Array.from(a), Float64Array.from(r), t, n) ?? null;
}
function pr(e) {
	return "string" == typeof e ? e : null;
}
function gr(e) {
	return "number" == typeof e ? e : null;
}
function fr(e, t) {
	const n = function(e, t) {
		switch (e.formatter) {
			case "verbatim_string": return function(e) {
				return e ? d(e) : "";
			}(pr(t));
			case "display_label": {
				const n = pr(t);
				return n ? function(e) {
					return e ? d(e) : "";
				}(e.labelEnum ? I(e.labelEnum, n) : n) : "";
			}
			case "core_printed_text":
			case "date_iso": return function(e) {
				return e ?? "";
			}(pr(t));
			case "integer": return function(e) {
				return null == e ? "" : String(Math.trunc(e));
			}(gr(t));
			case "fixed2": return function(e) {
				return null == e ? "" : e.toFixed(2);
			}(gr(t));
			case "python_scalar_str": return function(e) {
				return null == e ? "" : String(e);
			}("boolean" == typeof t ? null : t);
			case "python_float_repr": return function(e) {
				if (null == e) return "";
				if (!Number.isFinite(e)) return String(e);
				const t = String(e);
				return t.includes(".") || t.includes("e") ? t : `${t}.0`;
			}(gr(t));
			case "python_bool": return function(e) {
				return null == e ? "" : e ? "True" : "False";
			}("boolean" == typeof t ? t : null);
			case "clock_hhmm": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${_i(t.getUTCHours())}:${_i(t.getUTCMinutes())}`;
			}(gr(t));
			case "datetime_seconds": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${String(t.getUTCFullYear())}-${_i(t.getUTCMonth() + 1)}-${_i(t.getUTCDate())} ${_i(t.getUTCHours())}:${_i(t.getUTCMinutes())}:${_i(t.getUTCSeconds())}`;
			}(gr(t));
			case "ggir_value": return hi(t, { integral: e.ggirIntegral ?? !1 });
		}
	}(e, t);
	return "" === n ? R[e.sentinel] : n;
}
function hr(e, t) {
	if (!t) return "";
	const { labelEnum: n } = C[e];
	return n ? I(n, t) : t;
}
const _r = A.invalid_night_row?.markerTypeCell ?? "", wr = A.nonwear_row?.markerTypeCell ?? "";
function yr(e) {
	return $[e].filter((e) => "server" !== C[e].plane);
}
function vr(e) {
	const t = e;
	return {
		sleepPeriodSourceA: "string" == typeof t?.source_a ? t.source_a : "",
		sleepPeriodSourceB: "string" == typeof t?.source_b ? t.source_b : "",
		sleepPeriodFusion: "string" == typeof t?.fusion_policy ? t.fusion_policy : "",
		sleepPeriodMergeGapMinutes: "number" == typeof t?.merge_gap_minutes ? t.merge_gap_minutes : null,
		sleepPeriodPaddingMinutes: "number" == typeof t?.padding_minutes ? t.padding_minutes : null,
		sleepPeriodMinOverlapJaccard: "number" == typeof t?.min_overlap_jaccard ? t.min_overlap_jaccard : null,
		sleepPeriodApplyNonwearGate: "boolean" == typeof t?.apply_nonwear_gate ? t.apply_nonwear_gate : null
	};
}
function br(e) {
	return null == e ? {
		timeInBed: null,
		tst: null,
		waso: null,
		sol: null,
		awakenings: null,
		avgAwakeningLength: null,
		sleepEfficiency: null,
		movementIndex: null,
		fragmentationIndex: null,
		sleepFragmentationIndex: null,
		totalActivity: null,
		nonzeroEpochs: null
	} : {
		timeInBed: e.timeInBedMinutes,
		tst: e.totalSleepTimeMinutes,
		waso: e.wasoMinutes,
		sol: e.sleepOnsetLatencyMinutes,
		awakenings: e.numberOfAwakenings,
		avgAwakeningLength: "averageAwakeningLengthMinutes" in e ? e.averageAwakeningLengthMinutes : null,
		sleepEfficiency: e.sleepEfficiency,
		movementIndex: "movementIndex" in e ? e.movementIndex : null,
		fragmentationIndex: "fragmentationIndex" in e ? e.fragmentationIndex : null,
		sleepFragmentationIndex: "sleepFragmentationIndex" in e ? e.sleepFragmentationIndex : null,
		totalActivity: "totalActivity" in e ? e.totalActivity : null,
		nonzeroEpochs: "nonzeroEpochs" in e ? e.nonzeroEpochs : null
	};
}
const Mr = [
	[
		"timeInBed",
		"ggir_spt_duration",
		"time_in_bed_minutes",
		60
	],
	[
		"tst",
		"ggir_sleep_duration_in_spt",
		"total_sleep_time_minutes",
		60
	],
	[
		"waso",
		"ggir_waso",
		"waso_minutes",
		60
	],
	[
		"sol",
		"ggir_sleeplatency",
		"sleep_onset_latency_minutes",
		60
	],
	[
		"awakenings",
		"ggir_number_of_awakenings",
		"number_of_awakenings",
		1
	],
	[
		"sleepEfficiency",
		"ggir_sleepefficiency",
		"sleep_efficiency",
		100
	]
], kr = [
	[
		"timeInBed",
		"rest",
		"duration",
		"time_in_bed_minutes"
	],
	[
		"tst",
		"sleep",
		"sleep_time",
		"total_sleep_time_minutes"
	],
	[
		"waso",
		"sleep",
		"waso",
		"waso_minutes"
	],
	[
		"sol",
		"sleep",
		"onset_latency",
		"sleep_onset_latency_minutes"
	],
	[
		"awakenings",
		"sleep",
		"wake_bouts",
		"number_of_awakenings"
	],
	[
		"sleepEfficiency",
		"sleep",
		"efficiency",
		"sleep_efficiency"
	],
	[
		"totalActivity",
		"sleep",
		"total_ac",
		"total_activity_counts"
	]
];
async function xr(e, t, n, i, a, r, s) {
	try {
		return {
			metrics: t ? await hn(e, t, n, i, a, r, s) : await fn(e, n, i, a, r, null, s),
			error: null
		};
	} catch {
		s?.throwIfAborted();
		return console.warn("[local-export] metric computation failed for a selected period"), {
			metrics: null,
			error: "Metric computation failed for one selected period."
		};
	}
}
async function Sr(e, t, n, i) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const a = new Set(n.filter((t) => t.markerType === g.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return a.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : ca(t.filter((e) => a.has(e.date)), e, t[0]?.epochLengthSeconds, i);
}
function Ir(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const Tr = [
	["meanTimeInBed", "timeInBed"],
	["meanTst", "tst"],
	["meanWaso", "waso"],
	["meanSol", "sol"],
	["meanAwakenings", "awakenings"],
	["meanAvgAwakeningLength", "avgAwakeningLength"],
	["meanSleepEfficiency", "sleepEfficiency"],
	["meanMovementIndex", "movementIndex"],
	["meanFragmentationIndex", "fragmentationIndex"],
	["meanSleepFragmentationIndex", "sleepFragmentationIndex"],
	["meanTotalActivity", "totalActivity"],
	["meanNonzeroEpochs", "nonzeroEpochs"],
	["meanTemperature", "meanTemperature"],
	["meanSleepMidpointHour", "sleepMidpointHour"],
	["meanValidWearMinutes", "validWearMinutes"]
], Ar = {
	meanTimeInBed: "mean_time_in_bed_minutes",
	meanTst: "mean_total_sleep_time_minutes",
	meanWaso: "mean_waso_minutes",
	meanSol: "mean_sleep_onset_latency_minutes",
	meanAwakenings: "mean_number_of_awakenings",
	meanAvgAwakeningLength: "mean_average_awakening_length_minutes",
	meanSleepEfficiency: "mean_sleep_efficiency",
	meanMovementIndex: "mean_movement_index",
	meanFragmentationIndex: "mean_fragmentation_index",
	meanSleepFragmentationIndex: "mean_sleep_fragmentation_index",
	meanTotalActivity: "mean_total_activity_counts",
	meanNonzeroEpochs: "mean_nonzero_epochs",
	meanTemperature: "summary_mean_temperature_c",
	meanSleepMidpointHour: "mean_sleep_midpoint_hour",
	meanValidWearMinutes: "mean_valid_wear_minutes"
}, Rr = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => hr("algorithm", e.algorithm),
	summary_detection_rule: (e) => hr("detection_rule", e.detectionRule),
	summary_n_nights: (e) => e.nNights,
	mean_time_in_bed_minutes: (e) => e.meanTimeInBed,
	mean_total_sleep_time_minutes: (e) => e.meanTst,
	mean_waso_minutes: (e) => e.meanWaso,
	mean_sleep_onset_latency_minutes: (e) => e.meanSol,
	mean_number_of_awakenings: (e) => e.meanAwakenings,
	mean_average_awakening_length_minutes: (e) => e.meanAvgAwakeningLength,
	mean_sleep_efficiency: (e) => e.meanSleepEfficiency,
	mean_movement_index: (e) => e.meanMovementIndex,
	mean_fragmentation_index: (e) => e.meanFragmentationIndex,
	mean_sleep_fragmentation_index: (e) => e.meanSleepFragmentationIndex,
	mean_total_activity_counts: (e) => e.meanTotalActivity,
	mean_nonzero_epochs: (e) => e.meanNonzeroEpochs,
	summary_mean_temperature_c: (e) => e.meanTemperature,
	sleep_regularity_index: (e) => e.sleepRegularityIndex,
	mean_sleep_midpoint_hour: (e) => e.meanSleepMidpointHour,
	mean_total_nap_minutes: (e) => e.meanTotalNapMinutes,
	mean_valid_wear_minutes: (e) => e.meanValidWearMinutes,
	summary_study_id: (e) => e.studyId
}, Nr = x;
function Er(e) {
	return J(e);
}
function Cr(e) {
	return JSON.stringify(e, null, 2);
}
const $r = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function Or(e = Nr, t = !1) {
	return Gr("codebook_csv", e, $r, void 0, t);
}
const Dr = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], Br = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function Lr(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== g.MAIN_SLEEP) continue;
		const e = Dr.map((e) => Wr(e, n)).join("\0"), i = t.get(e);
		i ? i.push(n) : t.set(e, [n]);
	}
	return t;
}
function* Pr(e, t = !1) {
	const n = Lr(e);
	let i = 0;
	const a = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > i && (i = t.length), t;
	}), r = Dr.map((e) => C[e].header);
	for (let o = 1; o <= i; o++) for (const [e] of Br) r.push(`night${String(o)}_${e}`);
	const s = r;
	yield t ? [...r, ...s.map((e) => e + "_missing_reason")].join(",") : r.join(",");
	for (const o of a) {
		const e = o[0], n = Dr.map((t) => Wr(t, e)), a = Dr.map((t) => Fr[t]?.(e) ? "" : jr[t] ?? "");
		for (let t = 0; t < i; t++) {
			const e = o[t];
			for (const [t, i] of Br) {
				const r = e ? Wr(i, e) : "";
				n.push(r), a.push(r ? "" : e ? "date" === t ? "" : e.derivedMissingReasons?.[i] ?? e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? a : []].join(",");
	}
}
const Fr = {
	filename: (e) => e.filename,
	file_id: (e) => e.fileId,
	participant_id: (e) => e.participantId,
	study_date: (e) => e.studyDate,
	period_index: (e) => e.periodIndex,
	marker_type: (e) => e.markerType,
	onset_time: (e) => e.onsetTimestamp,
	offset_time: (e) => e.offsetTimestamp,
	onset_datetime: (e) => e.onsetTimestamp,
	offset_datetime: (e) => e.offsetTimestamp,
	time_in_bed_minutes: (e) => e.timeInBed,
	total_sleep_time_minutes: (e) => e.tst,
	waso_minutes: (e) => e.waso,
	sleep_onset_latency_minutes: (e) => e.sol,
	number_of_awakenings: (e) => e.awakenings,
	average_awakening_length_minutes: (e) => e.avgAwakeningLength,
	sleep_efficiency: (e) => e.sleepEfficiency,
	movement_index: (e) => e.movementIndex,
	fragmentation_index: (e) => e.fragmentationIndex,
	sleep_fragmentation_index: (e) => e.sleepFragmentationIndex,
	total_activity_counts: (e) => e.totalActivity,
	nonzero_epochs: (e) => e.nonzeroEpochs,
	mean_temperature_c: (e) => e.meanTemperature,
	mean_white_light_lux: (e) => e.meanWhiteLight,
	mean_red_light: (e) => e.meanRedLight,
	mean_green_light: (e) => e.meanGreenLight,
	mean_blue_light: (e) => e.meanBlueLight,
	algorithm: (e) => e.algorithm,
	detection_rule: (e) => e.detectionRule,
	period_guider: (e) => e.periodGuider,
	sleep_period_source_a: (e) => e.sleepPeriodSourceA,
	sleep_period_source_b: (e) => e.sleepPeriodSourceB,
	sleep_period_fusion: (e) => e.sleepPeriodFusion,
	sleep_period_merge_gap_minutes: (e) => e.sleepPeriodMergeGapMinutes,
	sleep_period_padding_minutes: (e) => e.sleepPeriodPaddingMinutes,
	sleep_period_min_overlap_jaccard: (e) => e.sleepPeriodMinOverlapJaccard,
	sleep_period_apply_nonwear_gate: (e) => e.sleepPeriodApplyNonwearGate,
	algorithm_version: (e) => e.algorithmVersion,
	verification_status: (e) => e.verificationStatus,
	scored_by: (e) => e.scoredBy,
	is_invalid_night: (e) => e.isInvalidNight,
	needs_consensus: (e) => e.needsConsensus,
	notes: (e) => e.notes,
	sleep_midpoint_time: (e) => e.sleepMidpointTimestamp,
	sleep_midpoint_hour: (e) => e.sleepMidpointHour,
	l5_hour: (e) => e.l5Hour,
	m10_hour: (e) => e.m10Hour,
	nap_count: (e) => e.napCount,
	total_nap_minutes: (e) => e.totalNapMinutes,
	valid_wear_minutes: (e) => e.validWearMinutes,
	study_id: (e) => e.studyId,
	dst_transition: (e) => e.dstTransition,
	in_bed_datetime: (e) => e.inBedTimestamp ?? null,
	out_of_bed_datetime: (e) => e.outOfBedTimestamp ?? null
};
function Wr(e, t) {
	return fr(C[e], Fr[e]?.(t) ?? null);
}
const jr = {
	algorithm: "source_reported_missing",
	summary_algorithm: "source_reported_missing",
	scored_by: "source_reported_missing",
	participant_id: "source_reported_missing",
	summary_participant_id: "source_reported_missing",
	study_id: "source_reported_missing",
	summary_study_id: "source_reported_missing",
	detection_rule: "source_reported_missing",
	summary_detection_rule: "source_reported_missing",
	period_guider: "not_computed_for_export",
	algorithm_version: "source_reported_missing",
	verification_status: "source_reported_missing",
	notes: "not_applicable_to_row",
	dst_transition: "not_applicable_to_row",
	sleep_period_source_a: "not_applicable_to_row",
	sleep_period_source_b: "not_applicable_to_row",
	sleep_period_fusion: "not_applicable_to_row",
	sleep_period_merge_gap_minutes: "not_applicable_to_row",
	sleep_period_padding_minutes: "not_applicable_to_row",
	sleep_period_min_overlap_jaccard: "not_applicable_to_row",
	sleep_period_apply_nonwear_gate: "not_applicable_to_row",
	codebook_unit: "not_applicable_to_row"
};
function Gr(e, t, n, i, a = !1) {
	const r = i && i.length > 0 ? new Set(i) : null, s = yr(e).filter((e) => null == r || r.has(C[e].header)), o = a ? s.filter((e) => jr[e]) : [], l = [[...s.map((e) => C[e].header), ...o.map((e) => C[e].header + "_missing_reason")].join(",")];
	for (const c of t) l.push([...s.map((e) => fr(C[e], n[e]?.(c) ?? null)), ...o.map((e) => {
		const t = n[e]?.(c);
		return null == t || "" === t ? jr[e] ?? "" : "";
	})].join(","));
	return l.join("\n");
}
function Ur(e, t, n = !1) {
	const i = Gr("sleep_csv", e, Fr, t, n), a = t?.length ? new Set(t) : null, r = [
		"onset_time",
		"offset_time",
		"onset_datetime",
		"offset_datetime"
	], s = ["in_bed_datetime", "out_of_bed_datetime"], o = [
		"time_in_bed_minutes",
		"total_sleep_time_minutes",
		"waso_minutes",
		"sleep_onset_latency_minutes",
		"number_of_awakenings",
		"average_awakening_length_minutes",
		"sleep_efficiency",
		"movement_index",
		"fragmentation_index",
		"sleep_fragmentation_index",
		"total_activity_counts",
		"nonzero_epochs"
	], l = [
		...r,
		"mean_temperature_c",
		"mean_white_light_lux",
		"mean_red_light",
		"mean_green_light",
		"mean_blue_light",
		"l5_hour",
		"m10_hour",
		"sleep_midpoint_hour",
		"sleep_midpoint_time",
		"valid_wear_minutes",
		...s,
		...o
	].filter((t) => (!a || a.has(C[t].header)) && e.some((e) => [...r, ...s].includes(t) && null == Fr[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || o.includes(t) && e.metricMissingReason));
	return 0 === l.length ? i : m(i).records.map((t, n) => {
		if (0 === n) return t.text + "," + l.map((e) => `${C[e].header}_missing_reason`).join(",");
		const i = e[n - 1];
		return t.text + "," + l.map((e) => i.markerType === wr ? "manual_nonwear_period" : i.markerType === _r ? "invalid_night" : r.includes(e) ? null == Fr[e]?.(i) ? "source_reported_missing" : "" : s.includes(e) ? null == Fr[e]?.(i) ? "not_applicable_to_row" : "" : i.sensorMissingReasons?.[e] ?? i.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? i.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (o.includes(e) ? i.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
yr("sleep_csv").map((e) => C[e].header);
const zr = A.invalid_night_row.markerTypeCell, Vr = T("actiware_interval_csv", "local"), Hr = [
	"interval_score_count",
	"interval_score_average",
	"interval_score_manual_count",
	"interval_score_manual_average",
	"interval_score_scheduled_count",
	"interval_score_scheduled_average",
	"interval_score_no_response_count",
	"interval_score_late_count",
	"interval_score_late_average"
].map((e) => C[e].header), qr = (e, t) => Math.round(e) === Math.round(t);
async function Kr(e, t, n, i) {
	const a = i ? sr(e.actiwareIntervals, i.invalidDates) : (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind), r = a.filter((e) => "rest" === e.kind), s = a.filter((e) => "rest" === e.kind || "sleep" === e.kind && r.some((t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp)).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), o = e.actiwareStatistics ?? [], l = await Cn([...s.map((e) => e.startTimestamp), ...o.map((e) => e.startTimestamp)], ne(n)), c = /* @__PURE__ */ new Set(), u = (t, n) => ({
		filename: e.filename,
		participantId: e.participantId ?? null,
		studyDate: l(t.startTimestamp),
		intervalNumber: null,
		interval: t,
		statistics: n
	}), d = s.map((e) => {
		const t = o.findIndex((t, n) => !c.has(n) && t.kind === e.kind && qr(t.startTimestamp, e.startTimestamp) && qr(t.endTimestamp, e.endTimestamp));
		return t >= 0 && c.add(t), u(e, t >= 0 ? o[t] ?? null : null);
	});
	return o.forEach((e, t) => {
		c.has(t) || d.push(u({
			kind: e.kind,
			source: "sleep" === e.kind ? "event_marker" : "actiware_export",
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp,
			origin: "sleep" === e.kind ? "scorer" : "stored"
		}, e));
	}), function(e) {
		const t = /* @__PURE__ */ new Map();
		for (const n of [...e].sort((e, t) => e.interval.startTimestamp - t.interval.startTimestamp)) {
			if (n.invalidNight) continue;
			const e = (t.get(n.interval.kind) ?? 0) + 1;
			t.set(n.interval.kind, e), n.intervalNumber = e;
		}
		return e;
	}(d).filter((e) => !t || e.studyDate >= t[0] && e.studyDate <= t[1]).sort((e, t) => e.interval.startTimestamp - t.interval.startTimestamp || e.interval.kind.localeCompare(t.interval.kind));
}
function Jr(e, t, n) {
	return [...e, ...[...t].map((e) => ({
		filename: n.filename,
		participantId: n.participantId ?? null,
		studyDate: e,
		intervalNumber: null,
		interval: {
			kind: "sleep",
			source: "event_marker",
			startTimestamp: NaN,
			endTimestamp: NaN,
			origin: "scorer"
		},
		statistics: null,
		invalidNight: !0
	}))].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
}
const Yr = new Set(yi.map(([, e]) => e)), Zr = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
function Qr(e) {
	if (!Number.isFinite(e)) return [
		"",
		"",
		""
	];
	const t = /* @__PURE__ */ new Date(1e3 * Math.round(e)), n = t.toISOString();
	return [
		n.slice(0, 10),
		Zr[t.getUTCDay()],
		n.slice(11, 19)
	];
}
function Xr(e, t = !1) {
	const n = t ? yi.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], i = [[
		...Vr,
		...n.map(([, e]) => e + "_missing_reason"),
		...t ? [
			"Participant ID_missing_reason",
			"Origin_missing_reason",
			"Analysis_missing_reason",
			...Hr.map((e) => e + "_missing_reason")
		] : []
	].join(",")], a = (e) => C[e].header;
	for (const { filename: r, participantId: s, studyDate: o, intervalNumber: l, interval: c, statistics: u, invalidNight: m } of e) {
		const e = !0 === m && !Number.isFinite(c.startTimestamp), [p, g, f] = Qr(c.startTimestamp), [h, _, w] = Qr(c.endTimestamp), y = new Map([
			[a("filename"), r],
			[a("participant_id"), s ?? ""],
			[a("study_date"), o],
			[a("interval_kind"), m ? zr : c.kind],
			[a("interval_number"), null == l ? "" : String(l)],
			[a("interval_source"), e ? "" : c.source],
			[a("interval_start_date"), p],
			[a("interval_start_day"), g],
			[a("interval_start_time"), f],
			[a("interval_end_date"), h],
			[a("interval_end_day"), _],
			[a("interval_end_time"), w],
			[a("interval_origin"), e ? "" : c.origin],
			[a("interval_analysis"), c.analysis ?? ""],
			...yi.map(([, e]) => [e, u?.printed?.[e] ?? ""]),
			...Hr.map((e) => [e, m ? "" : c.subjectiveScores?.[e] ?? ""])
		]), v = n.map(([e]) => {
			if (m) return "invalid_night";
			if (!u || null != u[e]) return "";
			if (e.startsWith("off_wrist")) return "source_reported_missing";
			const t = /_(white|red|green|blue)(?:_percent)?$/u.exec(e)?.[1];
			return t && null == u["invalid_" + t + "_percent"] ? "source_reported_missing" : "";
		}), b = Hr.map((e) => m ? "invalid_night" : c.subjectiveScores?.[e] ? "" : "source_no_subjective_scores");
		i.push([
			...Vr.map((e) => Yr.has(e) ? y.get(e) ?? "" : d(y.get(e) ?? "")),
			...v,
			...t ? [
				s ? "" : "source_reported_missing",
				e ? "invalid_night" : c.origin ? "" : "source_reported_missing",
				c.analysis ? "" : m ? "invalid_night" : "not_applicable_to_row",
				...b
			] : []
		].join(","));
	}
	return `${i.join("\n")}\n`;
}
const es = T("event_marker_csv", "local"), ts = 86400, ns = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * ts * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), is = (e) => e < 10 ? `0${String(e)}` : String(e);
function as(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / ts), n = e - t * ts;
	return `${ns(t)} ${is(Math.floor(n / 3600))}:${is(Math.floor(n / 60) % 60)}:${is(n % 60)}`;
}
function rs(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function ss(e, t, n, i, a) {
	const r = [], s = Ho(n, Lo.event, e), o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		a?.throwIfAborted();
		const e = rs(l, Qo(s, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await Cn(e, ne(a)), c = new Set(Ko(s, l.id, i).keys());
		for (const i of e) {
			const e = o(i);
			t && (e < t[0] || e > t[1]) || c.has(e) && r.push({
				filename: l.filename,
				participantId: l.participantId ?? null,
				studyDate: e,
				localTimestamp: i,
				gmtOffsetMinutes: n
			});
		}
	}
	return r;
}
const os = "actiware_sleep_wake_export.csv", ls = T("actiware_sleep_wake_csv", "local");
async function cs(e, t, n, i) {
	if (0 === e.scores.byteLength) return [];
	const a = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, r = n ?? new Set(await i.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((a - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), a])));
	return (await Promise.all([...r].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await Nn(t, void 0, void 0, i);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
async function us(e, t, n, i = s()) {
	return t || n ? (await cs(e, t, n, i)).reduce((e, t) => e + t.end - t.start, 0) : e.scores.byteLength;
}
async function* ds(e, t, n, i, a) {
	a?.throwIfAborted();
	const r = Ho(n, Lo.actiwareSleepWake, e), s = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => r.actiwareFileData.find((t) => t.fileId === e.id)), l = function(e, t = !1) {
		const n = [[
			...ls,
			"Sleep/Wake_missing_reason",
			"Wake Threshold_missing_reason",
			...t ? ["Participant ID_missing_reason"] : []
		].join(",")];
		for (const i of e) n.push(ms(i, i.epochTimestamp, i.sleepWake, t));
		return `${n.join("\n")}\n`;
	}([], !0);
	let c = [], u = 0, d = 0;
	const m = () => {
		a?.throwIfAborted();
		const e = function(...e) {
			const t = Ui(...e), n = [];
			for (;;) {
				const e = t.next();
				if (e.done) return {
					...e.value,
					reasons: n
				};
				n.push(e.value);
			}
		}(l + c.join("\n") + "\n", os, !0, { rowOffset: u }), t = u ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
			bytes: new TextEncoder().encode(t),
			rows: c.length,
			reasonRows: e.reasons.length,
			reasons: new TextEncoder().encode(Wi(e.reasons, !1))
		};
		return u += c.length, c = [], d = 0, n;
	};
	for (const [p, g] of s.entries()) {
		a?.throwIfAborted();
		const e = o[p]?.actiwareSleepWake;
		if (!e) continue;
		const n = o[p]?.actiwareWakeThreshold, s = null != n && Number.isFinite(n) ? n : null, l = new Int8Array(e.scores), u = await cs(e, t, new Set(Ko(r, g.id, i).keys()), ne(a));
		a?.throwIfAborted();
		for (const { date: t, start: i, end: a } of u) {
			const n = {
				filename: g.filename,
				participantId: g.participantId ?? null,
				studyDate: t,
				sleepDetection: at(e.params, "sleep_detection"),
				wakeThresholdSelection: at(e.params, "wake_threshold_selection"),
				wakeThreshold: s,
				...null === s ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
			};
			for (let t = i; t < a; t += 1) {
				const i = l[t], a = ms(n, e.startTimestamp + t * e.epochSeconds, 0 === i || 1 === i ? i : null, !0);
				if (a.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
				c.push(a), d += a.length, (512 === c.length || d >= 32768) && (yield m());
			}
		}
	}
	c.length && (yield m()), a?.throwIfAborted();
}
function ms(e, t, n, i) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		as(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...i ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => d(e)).join(",");
}
const ps = ui, gs = new Uint8Array([3, 0]);
var fs = class extends an {
	flag = 3;
	constructor(e) {
		super(e), this.compression = 8;
	}
	process() {}
	emit(e, t) {
		this.ondata(null, e, t);
	}
};
async function* hs(e) {
	const t = new TextDecoder();
	let n, i = "";
	for await (const a of async function* () {
		for await (const t of e) for (let e = 0; e < t.byteLength; e += ps) yield t.subarray(e, e + ps);
		yield null;
	}()) {
		const e = null === a;
		i += e ? t.decode() : t.decode(a, { stream: !0 });
		const r = m(i, e);
		if (e && r.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const s = r.remainder ?? "";
		if (s.length > ps || r.records.some((e) => e.text.length > ps)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
		if (r.records.length) {
			const e = void 0 === n;
			n ??= r.records[0].text + "\n";
			const t = (e ? "" : n) + i.slice(0, i.length - s.length);
			yield {
				bytes: new TextEncoder().encode(t),
				text: t,
				rows: r.records.length - (e ? 1 : 0)
			};
		}
		i = s;
	}
}
const _s = (e) => e.slice(e.lastIndexOf("/") + 1), ws = /* @__PURE__ */ new Map();
B.GGIR_CORRECTED_WARM;
const ys = (e) => `${e.name}:ggir-corrected-values`, vs = () => "undefined" == typeof navigator ? void 0 : navigator.locks;
async function bs(e, t, n, i) {
	const a = await async function(e, t, n, i) {
		if (a = (await oe(e))?.extraSettings, !0 !== b("ggir_export_corrected_values", a?.ggir_export_corrected_values).value) return null;
		var a;
		const r = /* @__PURE__ */ new Map(), s = await me(e, t.length ? { onlyFileIds: t } : void 0), o = new Map(s.map((e) => [e.id, e])), l = await e.ggirResultsBundles.where("fileId").anyOf([...o.keys()]).toArray(), c = new Map((await e.ggirCorrectedValues.where("fileId").anyOf(l.map((e) => e.fileId)).toArray()).map((e) => [e.fileId, e])), u = l.filter((e) => !e.ggirCorrections), d = [...new Set(u.map((e) => e.configCsv))], m = await Promise.all(d.map((e) => async function(e, t) {
			const n = ws.get(t);
			if (n) return n;
			const i = await async function(e, t) {
				const { ggirVersion: n } = await e.ggirConfigValues(t), i = await e.rerunGgirResults({
					ggir_version: n ?? "",
					corrections: "corrected",
					config_csv: t,
					sleeplog_csv_index: null,
					sleeplog_rdata_index: null,
					data_cleaning_csv_index: null,
					qwindow_csv_index: null,
					recordings: [],
					original_files: [],
					outputs: []
				}, []);
				return "ok" === i.status ? {
					profile: i.profile,
					revision: i.actours_revision
				} : { notApplied: i.reason ?? `GGIR ${n ?? "(unknown version)"} has no corrected profile` };
			}(e, t);
			return ws.set(t, i), i;
		}(n, e)));
		i?.throwIfAborted();
		const p = [];
		for (const g of u.sort((e, t) => o.get(e.fileId).filename.localeCompare(o.get(t.fileId).filename))) {
			const e = m[d.indexOf(g.configCsv)];
			if ("notApplied" in e) {
				r.set(g.fileId, e);
				continue;
			}
			const t = o.get(g.fileId), n = JSON.stringify([
				t.ggirBundleRevision ?? null,
				e.revision,
				e.profile
			]);
			r.set(g.fileId, {
				key: n,
				revision: t.ggirBundleRevision
			}), c.get(g.fileId)?.key !== n && p.push({
				fileId: g.fileId,
				key: n,
				revision: t.ggirBundleRevision,
				size: t.sourceSizeBytes ?? 0,
				name: t.filename
			});
		}
		return {
			plans: r,
			misses: p
		};
	}(e, t, ne(n.signal), n.signal);
	if (!a) return null;
	const { plans: r, misses: s } = a;
	if (0 === s.length) return r;
	let l = 0;
	n.onProgress?.(l, s.length);
	const u = (d = Math.max(0, ...s.map((e) => e.size)), m = {
		cores: navigator.hardwareConcurrency,
		deviceMemoryGib: Y()
	}, ln({
		...m,
		maxExtraWorkers: Number.POSITIVE_INFINITY,
		workerMemoryGib: sn(d),
		minDeviceMemoryGib: 0
	}));
	var d, m;
	const p = await dn(s.map((t) => ({
		name: t.name,
		cost: t.size,
		run: async (a, r) => {
			if (i && await async function(e) {
				const t = await vs()?.query(), n = (t) => t.name === ys(e);
				return (t?.pending?.some(n) ?? !1) || !1;
			}(e)) return { miss: t };
			try {
				const n = await v(e, t.fileId);
				if (!n) return {
					miss: t,
					notApplied: "the recording was deleted during the export"
				};
				const i = await async function(e, t) {
					if (!e.resultsCsv) return { notApplied: "imported before the app kept GGIR's results/ files; import the GGIR output folder again for its corrected values" };
					if (!e.ms4) return { notApplied: Pe };
					const { ggirVersion: n } = await t.ggirConfigValues(e.configCsv), i = () => {
						const t = [], i = (e) => void 0 === e ? null : (t.push("string" == typeof e ? new TextEncoder().encode(e) : new Uint8Array(e)), t.length - 1);
						return {
							buffers: t,
							add: i,
							request: {
								ggir_version: n ?? "",
								corrections: "corrected",
								config_csv: e.configCsv,
								sleeplog_csv_index: i(e.sleeplogCsv),
								sleeplog_rdata_index: i(e.sleeplogRData),
								data_cleaning_csv_index: i(e.dataCleaningCsv),
								qwindow_csv_index: i(e.qwindowCsv)
							}
						};
					}, a = e.recordingFile, r = c(a), s = {}, o = /* @__PURE__ */ new Map(), l = (e) => {
						for (const { file: t } of e.changes) {
							const e = /^meta\/(ms\d)\.out\//u.exec(t)?.[1] ?? _s(t);
							s[e] = (s[e] ?? 0) + 1;
						}
						for (const t of e.corrections_not_applied) o.set(t.correction, t.reason);
					}, u = i(), d = {
						recording_id: r,
						filename: a,
						part1_index: u.add(e.part1),
						ms2_index: u.add(e.ms2),
						ms3_index: u.add(e.ms3),
						ms4_index: u.add(e.ms4),
						ms5_index: u.add(e.ms5),
						night_edits: [],
						invalid_nights: []
					}, m = [
						"ms2",
						"ms3",
						"ms4",
						"ms5"
					].filter((e) => null != d[`${e}_index`]), p = await t.rerunGgirResults({
						...u.request,
						recordings: [d],
						original_files: [],
						outputs: m
					}, u.buffers);
					if ("ok" !== p.status) return { notApplied: p.reason ?? "the GGIR engine refused this recording" };
					const g = Object.fromEntries([
						"ms2",
						"ms3",
						"ms4",
						"ms5"
					].flatMap((e) => {
						const t = p.files.find((t) => t.path === `meta/${e}.out/${a}`);
						return t ? [[e, t.bytes.slice().buffer]] : [];
					}));
					if (!g.ms4) return { notApplied: "the GGIR engine returned no corrected Part 4 milestone" };
					l(p);
					const f = i(), h = Object.entries(e.resultsCsv).map(([e, t]) => ({
						path: e,
						bytes_index: f.add(t)
					})), _ = g.ms2 ?? e.ms2, w = g.ms3 ?? e.ms3, y = g.ms5 ?? e.ms5, v = {
						recording_id: r,
						filename: a,
						part1_index: null,
						ms2_index: f.add(g.ms2),
						ms3_index: null,
						ms4_index: f.add(g.ms4),
						ms5_index: f.add(y),
						stock_ms4_index: f.add(e.ms4),
						stock_ms5_index: f.add(e.ms5),
						night_edits: [],
						invalid_nights: []
					}, b = [
						...["part2_daysummary.csv", "part2_summary.csv"].every((e) => h.some((t) => t.path === `results/${e}`)) && null !== v.ms2_index ? ["part2_reports"] : [],
						"part4_reports",
						...h.some((e) => /(^|\/)part5_/u.test(e.path)) ? ["part5_reports"] : []
					], M = await t.rerunGgirResults({
						...f.request,
						recordings: [v],
						original_files: h,
						outputs: b
					}, f.buffers);
					if ("ok" !== M.status) return { notApplied: M.reason ?? "the GGIR engine refused this recording's reports" };
					const k = M.files.find((e) => "results/part4_nightsummary_sleep_cleaned.csv" === e.path) ?? M.files.find((e) => "results/QC/part4_nightsummary_sleep_cleaned.csv" === e.path);
					if (!k) return { notApplied: "the GGIR engine gave no Part 4 cleaned night summary" };
					l(M);
					const x = async (n) => Object.fromEntries(await Promise.all(M.files.filter((e) => e.path === `results/${_s(e.path)}` && n.test(_s(e.path))).map(async (n) => [_s(n.path), await t.readGgirReportCsv(new TextDecoder().decode(n.bytes), e.configCsv)]))), S = await x(W), I = await x(z), T = new TextDecoder().decode(k.bytes), A = (e) => e ? new Uint8Array(e) : void 0, R = await t.reviewGgirResults({
						part1: new Uint8Array(e.part1),
						configCsv: e.configCsv,
						recordingId: r,
						part2Reports: S,
						..._ ? { ms2: A(_) } : {},
						...w ? { ms3: A(w) } : {},
						ms4: A(g.ms4),
						...y ? { ms5: A(y) } : {},
						...e.sleeplogRData ? { sleeplogRData: A(e.sleeplogRData) } : {},
						...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
						cleanedNightsCsv: T,
						...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
						edits: [],
						crossCheck: !1
					});
					return {
						values: {
							..._ ? { ms2: _ } : {},
							...w ? { ms3: w } : {},
							ms4: g.ms4,
							...y ? { ms5: y } : {},
							cleanedNightsCsv: T,
							part2Reports: Ee(S, R),
							personReports: Ee(I, R),
							imported: We(R)
						},
						ggirCorrections: {
							profile: M.profile || p.profile,
							changedCells: Object.values(s).reduce((e, t) => e + t, 0),
							changedCellsByPart: s,
							...o.size > 0 ? { notApplied: [...o].map(([e, t]) => ({
								correction: e,
								reason: t
							})) } : {}
						}
					};
				}(n, a);
				return await e.transaction("rw", [e.files, e.ggirCorrectedValues], async () => {
					(await e.files.get(t.fileId))?.ggirBundleRevision === t.revision && await e.ggirCorrectedValues.put({
						fileId: t.fileId,
						key: t.key,
						...i
					});
				}).catch((e) => {
					console.warn("[ggir-corrected-values] Corrected values could not be cached.", e);
				}), { miss: t };
			} catch (o) {
				return n.signal?.throwIfAborted(), r.primary || r.cancel(), {
					miss: t,
					notApplied: (o instanceof Error ? o.message : String(o)).replace(/^Error: /u, "")
				};
			} finally {
				n.signal?.aborted || n.onProgress?.(++l, s.length);
			}
		}
	})), {
		signal: n.signal,
		createWorker: o,
		extraWorkers: i ? Math.floor(u / 2) : u,
		cancelOperation: () => {},
		...n.workerPool
	});
	for (const { miss: o, notApplied: c } of p) void 0 !== c && r.set(o.fileId, { notApplied: c });
	return r;
}
const Ms = "union_all";
function ks(e) {
	return e.nonwearDetector ?? "union_all";
}
const xs = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: Ms
}, Ss = {
	...xs,
	minimumWakeWearMinutes: ct.minWearMinutesPerDay
};
function Is(e) {
	return e ? {
		...Ss,
		...e
	} : Ss;
}
function Ts(e, t) {
	const n = [];
	for (const i of e.values()) {
		for (const e of i.sleepMarkers) {
			const t = e.markerType === g.MAIN_SLEEP ? "main_sleep" : e.markerType === g.NAP ? "nap" : null;
			t && null != e.onsetTimestamp && null != e.offsetTimestamp && n.push({
				kind: t,
				source: "human",
				start: e.onsetTimestamp,
				end: e.offsetTimestamp
			});
		}
		for (const e of i.nonwearMarkers) null != e.startTimestamp && null != e.endTimestamp && n.push({
			kind: "manual_nonwear",
			source: "human",
			start: e.startTimestamp,
			end: e.endTimestamp
		});
	}
	for (const i of t) n.push({
		kind: "sensor_nonwear",
		source: "device",
		start: i.startTimestamp,
		end: i.endTimestamp
	});
	return n;
}
function As(e, t, n, i) {
	const a = ks(t), r = "union_all" === a ? Object.entries(Ke(e, n)) : [[a, qe(e, a, n)], ..."detach_nonwear" === a ? [] : [["detach_nonwear", qe(e, "detach_nonwear", n)]]], s = new Float64Array(e.timestamps);
	return r.flatMap(([e, t]) => {
		if (!t) return [];
		const n = new Uint8Array(t);
		return 0 === n.length ? [] : [n.length === s.length ? {
			kind: "algorithm_nonwear",
			source: e,
			timestamps: s,
			epochSeconds: i,
			mask: n
		} : {
			kind: "algorithm_nonwear",
			source: e,
			mask: n
		}];
	});
}
function Rs(e) {
	return {
		excludeNonwear: e.excludeNonwear,
		excludeMainSleep: e.excludeMainSleep,
		excludeNaps: e.excludeNaps,
		useAlgorithmNonwear: e.useAlgorithmNonwear,
		useManualNonwear: e.useManualNonwear,
		minimumWakeWearMinutes: Number.isFinite(e.minimumWakeWearMinutes) ? Math.max(0, e.minimumWakeWearMinutes) : 0
	};
}
function Ns(e) {
	return {
		totalEpochs: e.totalEpochs,
		includedEpochs: e.includedEpochs,
		nonwearEpochs: e.nonwearEpochs,
		mainSleepEpochs: e.mainSleepEpochs,
		napEpochs: e.napEpochs,
		overlapEpochs: e.overlapEpochs
	};
}
function Es(e, t) {
	return ne(t).summarizePhysicalActivityDays(e);
}
async function Cs(e, t = s()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
const $s = V.PRESCHOOL_FREE_LIVING_RF_3_5;
function Os(e) {
	const t = e.algorithmResults[$s];
	return null != t && new Uint8Array(t).length > 0;
}
function Ds(e) {
	const t = e.algorithmResults[$s];
	if (!t) return null;
	const n = new Uint8Array(t);
	return n.length > 0 ? n : null;
}
function Bs(e) {
	return [...e].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, {
		isInvalidNight: t.isInvalidNight,
		sleep: t.sleepMarkers.map((e) => [
			e.markerType,
			e.onsetTimestamp,
			e.offsetTimestamp
		]),
		nonwear: t.nonwearMarkers.map((e) => [e.startTimestamp, e.endTimestamp])
	}]);
}
function Ls(e) {
	return e instanceof Map ? Ls([...e.entries()]) : Array.isArray(e) ? e.map(Ls) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, Ls(t)])) : e;
}
async function Ps(e, t) {
	const { db: n, fileId: i, kind: a, inputs: r, signal: s } = e;
	s?.throwIfAborted();
	let o = n, l = null;
	if (o) try {
		const e = await o.activityDays.where("fileId").equals(i).primaryKeys();
		l = await K(JSON.stringify(Ls({
			version: 1,
			core: "13d368371d67297234aca2ef548d23657abb31f7",
			kind: a,
			fileId: i,
			dayIds: [...e].sort((e, t) => Number(e) - Number(t)),
			inputs: r
		})));
		const t = await o.physicalActivityFileSummaries.get([i, a]);
		if (t?.inputKey === l) return t.value;
	} catch {
		o = null;
	}
	s?.throwIfAborted();
	const c = await t();
	if (s?.throwIfAborted(), o && l) try {
		await ie(o, [o.physicalActivityFileSummaries], (e) => e.table(o.physicalActivityFileSummaries.name).put({
			fileId: i,
			kind: a,
			inputKey: l,
			value: c
		}), s);
	} catch {
		s?.throwIfAborted(), console.warn("[physical-activity] A file's answers could not be stored; the tab recomputes them.");
	}
	return c;
}
function Fs(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function Ws(e, t) {
	return e.moderateMin === Number.POSITIVE_INFINITY ? [{
		label: "Sed",
		min: 0,
		max: e.sedentaryMax,
		tone: "sedentary"
	}, {
		label: t?.[1]?.label ?? "Light",
		min: e.lightMin,
		max: null,
		tone: "light"
	}] : e.vigorousMin === Number.POSITIVE_INFINITY ? [
		{
			label: "Sed",
			min: 0,
			max: e.sedentaryMax,
			tone: "sedentary"
		},
		{
			label: "Light",
			min: e.lightMin,
			max: e.moderateMin - 1,
			tone: "light"
		},
		{
			label: t?.[2]?.label ?? "MVPA",
			min: e.moderateMin,
			max: null,
			tone: "moderate"
		}
	] : [
		{
			label: "Sed",
			min: 0,
			max: e.sedentaryMax,
			tone: "sedentary"
		},
		{
			label: "Light",
			min: e.lightMin,
			max: e.moderateMin - 1,
			tone: "light"
		},
		{
			label: "Moderate",
			min: e.moderateMin,
			max: e.vigorousMin - 1,
			tone: "moderate"
		},
		{
			label: "Vigorous",
			min: e.vigorousMin,
			max: null,
			tone: "vigorous"
		}
	];
}
function js(e, t, n) {
	if (!n) return e.ruleLabel;
	const i = String(t.sedentaryMax), a = String(t.lightMin), r = String(t.moderateMin - 1), s = String(t.moderateMin), o = String(t.vigorousMin - 1), l = String(t.vigorousMin);
	return t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, non-sedentary >=${a} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, light ${a}-${r}, MVPA >=${s} counts/min` : `Custom cutpoints: Sed <=${i}, light ${a}-${r}, moderate ${s}-${o}, vigorous >=${l} counts/min`;
}
const Gs = [
	null,
	"sedentary",
	"light",
	"moderate",
	"vigorous"
];
async function Us(e) {
	const { values: t, countsPerMinuteScale: n, method: i, date: a, maskReasons: r } = e;
	if (0 === t.length) return null;
	const s = Math.max(1, Math.ceil(t.length / 180)), o = [];
	for (let d = 0; d < t.length; d += s) {
		const e = t[d] ?? NaN;
		Number.isFinite(e) && o.push({
			index: d,
			countsPerMinute: e * n
		});
	}
	if (0 === o.length) return null;
	const l = await ne(e.signal).cutpointToneCodes(Float64Array.from(o, (e) => e.countsPerMinute), Fs(i));
	let c = 0;
	const u = [];
	return o.forEach((e, t) => {
		const n = Gs[l[t] ?? 0];
		n && (c = Math.max(c, e.countsPerMinute), u.push({
			x: u.length,
			value: e.countsPerMinute,
			tone: n,
			maskReason: r?.[e.index] ?? "included"
		}));
	}), 0 === u.length ? null : {
		date: a,
		sourceLabel: i.sourceLabel,
		valueMax: Math.max(c, i.cutpointScaleMax ?? 1),
		points: u
	};
}
function zs(e, t) {
	return {
		method: e.method,
		label: e.label,
		requiredSignal: e.requiredSignal,
		sourceLabel: e.sourceLabel,
		ruleLabel: e.ruleLabel,
		status: null == t ? "ready" : e.unavailableStatus ?? "needs_signal",
		available: null == t,
		unavailableReason: t,
		nextStepLabel: null == t ? null : e.unavailableAction,
		totalDays: 0,
		sedentaryMinutes: 0,
		lightMinutes: 0,
		moderateMinutes: 0,
		vigorousMinutes: 0,
		mvpaMinutes: 0,
		mvpaMinutesPerDay: 0,
		...e.cutpointBands ? { cutpointBands: e.cutpointBands } : {},
		...e.cutpointScaleMax ? { cutpointScaleMax: e.cutpointScaleMax } : {}
	};
}
function Vs(e) {
	e.mvpaMinutesPerDay = e.totalDays > 0 ? e.mvpaMinutes / e.totalDays : 0, e.totalDays > 0 && (null != e.mvpaBouts && (e.mvpaBoutsPerDay = e.mvpaBouts / e.totalDays), null != e.sedentaryBreaks && (e.sedentaryBreaksPerDay = e.sedentaryBreaks / e.totalDays));
}
function Hs(e, t) {
	e.sedentaryMinutes += t.sedentaryMinutes, e.lightMinutes += t.lightMinutes, e.moderateMinutes += t.moderateMinutes, e.vigorousMinutes += t.vigorousMinutes, e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes;
}
function qs(e, t, n, i) {
	if (0 === t.totalDays) return;
	e.totalDays += t.totalDays, Hs(e, t.intensity), e.defaultIntensityMinutes && t.defaultIntensity && Hs(e.defaultIntensityMinutes, t.defaultIntensity), null != t.mimsUnitTotal && (e.mimsUnitTotal = (e.mimsUnitTotal ?? 0) + t.mimsUnitTotal), e.totalEpochsReviewed = (e.totalEpochsReviewed ?? 0) + t.totalEpochs, e.includedEpochsReviewed = (e.includedEpochsReviewed ?? 0) + t.includedEpochs, e.wakeWearMinutes = (e.wakeWearMinutes ?? 0) + t.wakeWearMinutes, e.excludedNonwearMinutes = (e.excludedNonwearMinutes ?? 0) + t.excludedNonwearMinutes, e.excludedMainSleepMinutes = (e.excludedMainSleepMinutes ?? 0) + t.excludedMainSleepMinutes, e.excludedNapMinutes = (e.excludedNapMinutes ?? 0) + t.excludedNapMinutes, e.maskOverlapEpochs = (e.maskOverlapEpochs ?? 0) + t.overlapEpochs, e.maskPolicy = n;
	const a = t.bouts;
	a && (e.mvpaBouts = (e.mvpaBouts ?? 0) + a.mvpaBouts, e.mvpaBoutMinutes = (e.mvpaBoutMinutes ?? 0) + a.mvpaBoutMinutes, e.sedentaryBouts = (e.sedentaryBouts ?? 0) + a.sedentaryBouts, e.sedentaryBreaks = (e.sedentaryBreaks ?? 0) + a.sedentaryBreaks, i.total += a.meanSedentaryBoutMinutes * a.sedentaryBouts, e.meanSedentaryBoutMinutes = e.sedentaryBouts > 0 ? i.total / e.sedentaryBouts : 0);
}
async function Ks(e) {
	const { file: t, days: n, summaries: i, markersByAnalysisDate: a, sensorNonwearPeriods: r, maskPolicy: s, validDayCriteria: o, cutpointMethods: l, choiAxis: c } = e, u = new Set([...a].filter(([, e]) => _(e)).map(([e]) => e)), d = Number.isFinite(t.epochLengthSeconds) && t.epochLengthSeconds > 0 ? t.epochLengthSeconds : 60, m = 60 / d, p = {
		policy: Rs(s),
		intervals: Ts(a, r)
	}, g = n.map((e) => As(e, s, c, d)), f = n.map((e, t) => ({
		timestamps: new Float64Array(e.timestamps),
		epochSeconds: d,
		series: g[t]
	})), { dates: h, shortfall: w } = await async function({ days: e, countDays: t, epochSeconds: n, request: i, criteria: a, scoredDates: r, signal: s }) {
		if (!a) return {
			dates: null,
			shortfall: null
		};
		if (e.some((e) => !r.has(e.date))) return {
			dates: null,
			shortfall: null
		};
		const o = await Es({
			...i,
			days: [...t]
		}, s), l = 86400 / n, c = await Cs(e.map((e) => e.date), ne(s)), u = e.map((e, t) => {
			const n = o.days[t].mask;
			return {
				date: e.date,
				wearMinutes: n.wakeWearMinutes,
				isWeekend: c[t],
				isPartialDay: n.totalEpochs < l
			};
		}), d = await async function(e, t = ct, n) {
			return ne(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
		}(u, a, s);
		if (!d.meetsCriteria) {
			const e = a.requireWeekendDay && !d.hasWeekendValidDay ? ", including a weekend day" : "";
			return {
				dates: /* @__PURE__ */ new Set(),
				shortfall: `${String(d.validDays)} of the required ${String(a.minValidDaysPerParticipant)} valid days${e}`
			};
		}
		const m = await async function(e, t = ct, n) {
			const i = await ne(n).validWearDays(Float64Array.from(e), t);
			return Array.from(i, (e) => 0 !== e);
		}(u.map((e) => e.wearMinutes), a, s);
		return {
			dates: new Set(u.filter((e, t) => m[t]).map((e) => e.date)),
			shortfall: null
		};
	}({
		days: n,
		countDays: f,
		epochSeconds: d,
		request: p,
		criteria: o,
		scoredDates: u,
		signal: e.signal
	}), y = i.filter((e) => !(s.minimumWakeWearMinutes > 0 && (null == e.validHours || 60 * e.validHours < s.minimumWakeWearMinutes))).filter((e) => null != e.sedentaryMinutes && null != e.lpaMinutes && null != e.mvpaMinutes).filter((e) => !h || h.has(e.analysisDate)).map((e) => ({
		sedentaryMinutes: e.sedentaryMinutes,
		lpaMinutes: e.lpaMinutes,
		mvpaMinutes: e.mvpaMinutes
	})), v = n.map((e) => !h || h.has(e.date)), b = [];
	for (let _ = 0; _ < l.length; _++) {
		e.signal?.throwIfAborted();
		const i = l[_];
		if (Ye(i.method, t.sourceProfileId)) {
			b.push(null);
			continue;
		}
		const a = [];
		if (n.forEach((e, t) => {
			const n = new Float64Array("axisY" === i.axis ? e.axisY : e.vectorMagnitude);
			n.length > 0 && n.length === f[t].timestamps.length && a.push({
				index: t,
				values: n
			});
		}), 0 === a.length) {
			b.push(null);
			continue;
		}
		const r = await Es({
			...p,
			analysisKind: "count_cutpoint",
			thresholds: Fs(i),
			defaultThresholds: Fs(Xe[_]),
			days: a.map(({ index: e, values: t }) => ({
				...f[e],
				values: t,
				aggregate: v[e]
			}))
		}, e.signal), s = {
			signalSeen: r.days.some((e) => e.hasValidSignal),
			totals: r.totals
		}, o = a.find(({ index: e }) => v[e]);
		if (o) {
			const t = await Es({
				...p,
				includeEpochDetails: !0,
				days: [f[o.index]]
			}, e.signal), a = await Us({
				values: o.values,
				countsPerMinuteScale: m,
				method: i,
				date: n[o.index].date,
				maskReasons: t.days[0].reasons,
				signal: e.signal
			});
			a && (s.previewTrace = a);
		}
		if (r.totals.totalDays > 0) {
			const t = await et(i.method, d, e.signal);
			t && "warn" === t.severity && (s.epochMismatch = t);
		}
		b.push(s);
	}
	const M = (e, t) => n.flatMap((n, i) => {
		const a = e(n);
		return a && 0 !== a.length ? [{
			timestamps: f[i].timestamps,
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(a),
			grid: t,
			fallbackEpochSeconds: d,
			series: g[i],
			aggregate: v[i]
		}] : [];
	}), k = async (t, n) => {
		if (e.signal?.throwIfAborted(), 0 === t.length) return null;
		const i = await Es({
			...p,
			analysisKind: n,
			days: t
		}, e.signal);
		return {
			signalSeen: i.days.some((e) => e.hasValidSignal),
			totals: i.totals
		};
	};
	return {
		shortfall: w,
		ggirSummarySeen: i.length > 0,
		ggirRows: y,
		hasAnyActivity: v.some(Boolean),
		cutpoints: b,
		mims: await k(M((e) => e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output"), "mims_volume"),
		preschoolRf: await k(M(Ds, "classifier"), "preschool_classifier")
	};
}
async function Js(e = {}) {
	const t = await me(e.dbOverride, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = e.username ?? "anonymous", i = e.maskPolicy ?? xs, a = e.validDayCriteria, r = dt("ggir_enmo"), s = dt("mims"), o = dt("preschool_free_living_rf_3_5"), l = zs({
		method: r.method,
		label: r.label,
		requiredSignal: r.requiredSignal,
		sourceLabel: r.signalLabel,
		ruleLabel: "Uses imported GGIR daily sedentary, LPA, and MVPA summaries",
		unavailableAction: "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."
	}, null), c = ne(e.signal), u = await Promise.all(Xe.map((t) => async function(e, t, n) {
		const i = t[e.method];
		if (!i) return e;
		const a = await Qe(i, n);
		if (!a) return e;
		const r = Fs(e);
		return {
			...e,
			ruleLabel: js(e, a, JSON.stringify(a) !== JSON.stringify(r)),
			cutpointBands: Ws(a, e.cutpointBands),
			cutpointScaleMax: Math.max(e.cutpointScaleMax ?? 1, ...Object.values(a).filter(Number.isFinite)),
			...a
		};
	}(t, e.cutpointOverrides ?? {}, c))), d = u.map((e, t) => function(e, t) {
		return {
			...zs(e, null),
			cutpointThresholds: Fs(e),
			defaultCutpointThresholds: Fs(t),
			cutpointEditable: !0,
			defaultIntensityMinutes: {
				sedentaryMinutes: 0,
				lightMinutes: 0,
				moderateMinutes: 0,
				vigorousMinutes: 0,
				mvpaMinutes: 0
			}
		};
	}(e, Xe[t])), m = new Array(u.length).fill(!1), p = [], g = zs({
		method: s.method,
		label: s.label,
		requiredSignal: s.requiredSignal,
		sourceLabel: s.signalLabel,
		ruleLabel: "Uses stored MIMS_UNIT epoch values from actours; intensity cutpoints/equating are not applied in this row.",
		unavailableAction: "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values.",
		unavailableStatus: "backend_required"
	}, null);
	g.mimsUnitTotal = 0, g.mimsUnitPerDay = 0;
	const f = zs({
		method: o.method,
		label: o.label,
		requiredSignal: o.requiredSignal,
		sourceLabel: o.signalLabel,
		ruleLabel: "Uses actimetric Preschool Wrist Random Forest Free Living Lag-Lead classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
		unavailableAction: "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.",
		unavailableStatus: "backend_required"
	}, null), h = dt("hildebrand_enmo_wrist_2014"), _ = zs({
		method: h.method,
		label: h.label,
		requiredSignal: h.requiredSignal,
		sourceLabel: h.signalLabel,
		ruleLabel: "Hildebrand 2014 non-dominant wrist ENMO (mg) cut-points: MVPA >=201 mg, vigorous >=707 mg; light near ~45 mg. Applied to a calibrated ENMO (mg) epoch signal, never to ActiGraph counts.",
		unavailableAction: "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline; the browser count pipeline does not compute ENMO mg.",
		unavailableStatus: "needs_signal"
	}, null);
	let w = !1, y = !1, v = !1, b = !1;
	const M = Ge(), k = u.map(() => ({ total: 0 })), x = { total: 0 };
	for (const I of t) {
		if (e.signal?.throwIfAborted(), !I.id) continue;
		const t = I.id, r = await pe(t, e.dbOverride), s = await ve(t, n, e.dbOverride), o = await ue(t, e.dbOverride), c = await Ps({
			db: e.dbOverride ?? null,
			fileId: t,
			kind: "analysis",
			...e.signal ? { signal: e.signal } : {},
			inputs: {
				epochLengthSeconds: I.epochLengthSeconds,
				sourceProfileId: I.sourceProfileId ?? null,
				summaries: r,
				markers: Bs(s),
				sensorNonwearPeriods: o,
				maskPolicy: i,
				validDayCriteria: a ?? null,
				thresholds: u.map(Fs),
				choiAxis: M
			}
		}, async () => Ks({
			file: I,
			days: [...(await be(t, e.dbOverride, e.activityDayMemo)).values()],
			summaries: r,
			markersByAnalysisDate: s,
			sensorNonwearPeriods: o,
			maskPolicy: i,
			validDayCriteria: a,
			cutpointMethods: u,
			choiAxis: M,
			...e.signal ? { signal: e.signal } : {}
		}));
		c.shortfall && p.push(c.shortfall), c.ggirSummarySeen && (y = !0);
		for (const e of c.ggirRows) l.totalDays += 1, l.sedentaryMinutes += e.sedentaryMinutes, l.lightMinutes += e.lpaMinutes, l.mvpaMinutes += e.mvpaMinutes;
		c.hasAnyActivity && (w = !0), c.cutpoints.forEach((e, t) => {
			if (!e) return;
			const n = d[t];
			e.signalSeen && (m[t] = !0), qs(n, e.totals, i, k[t]), e.previewTrace && !n.previewTrace && (n.previewTrace = e.previewTrace), e.epochMismatch && !n.epochMismatch && (n.epochMismatch = e.epochMismatch);
		}), c.mims && (c.mims.signalSeen && (v = !0), qs(g, c.mims.totals, i, x)), c.preschoolRf && (c.preschoolRf.signalSeen && (b = !0), qs(f, c.preschoolRf.totals, i, x));
	}
	for (let I = 0; I < d.length; I++) {
		const e = d[I], t = u[I];
		e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes, 0 === e.totalDays && (e.available = !1, e.status = m[I] ? "ready" : "needs_signal", e.unavailableReason = m[I] ? p.length > 0 ? `Excluded by the valid-days-per-participant rule: ${p.join("; ")}. Change it in Study Settings → valid-day criteria.` : `No local ${e.sourceLabel.toLowerCase()} days meet the minimum wake-wear rule.` : w ? `No local ${e.sourceLabel.toLowerCase()} days are available.` : "No local activity epochs are available.", e.nextStepLabel = t.unavailableAction), Vs(e);
	}
	l.moderateMinutes = l.mvpaMinutes, Vs(l), 0 === l.totalDays && (l.available = !1, l.status = y ? "ready" : "needs_signal", l.unavailableReason = y ? "No local GGIR daily summaries meet the current inclusion rules." : "No local GGIR daily summaries are available. Import raw/5-second-capable files to populate ENMO summaries.", l.nextStepLabel = "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."), g.totalDays > 0 ? (g.available = !0, g.status = "ready", g.unavailableReason = null, g.nextStepLabel = null, g.mimsUnitPerDay = (g.mimsUnitTotal ?? 0) / g.totalDays) : (g.available = !1, g.status = v ? "ready" : "backend_required", g.unavailableReason = v ? "No stored MIMS_UNIT epoch days meet the current inclusion rules." : "No MIMS_UNIT epoch values are stored in this workspace yet. This becomes ready when the actours MIMS backend/WASM build computes and stores MIMS_UNIT epochs.", g.nextStepLabel = "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values."), Vs(_), _.available = !1, _.status = "needs_signal", _.unavailableReason = "No calibrated ENMO (mg) epoch stream is available in this workspace. ENMO (mg) is a raw/GGIR-derived signal; the browser count pipeline does not produce it, so this method cannot classify counts against Hildebrand mg thresholds.", _.nextStepLabel = "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline.", Vs(f), f.totalDays > 0 ? (f.available = !0, f.status = "ready", f.unavailableReason = null, f.nextStepLabel = null) : (f.available = !1, f.status = b ? "ready" : "backend_required", f.unavailableReason = b ? "No stored preschool wrist RF class days meet the current inclusion rules." : "No actimetric-compatible preschool wrist RF class epochs are stored in this workspace yet. This becomes ready when actours/WASM computes 15 s classes for 3-5 year-old wrist data.", f.nextStepLabel = "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.");
	const S = t.map((e) => e.sourceProfileId);
	return [
		l,
		f,
		...d,
		_,
		g
	].filter((e) => Ze(e.method, S));
}
const Ys = [
	"Filename",
	"Participant ID",
	"Analysis Date",
	"Method",
	"Method Label",
	"Method Family",
	"Required Signal Contract",
	"Computation Owner",
	"Frontend Computes Metric",
	"Source Signal",
	"Status",
	"Method Rule",
	"Threshold Source",
	"Threshold Preset Name",
	"Sedentary Max",
	"Light Min",
	"Moderate Min",
	"Vigorous Min",
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"MIMS Unit Total",
	"Epoch Length Seconds",
	"Epochs Reviewed",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes",
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"Mask Overlap Epochs",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes",
	"Native Epoch Seconds",
	"Epoch Mismatch",
	"Inclusion Rule Preset Name",
	"Mask Exclude Nonwear",
	"Mask Exclude Main Sleep",
	"Mask Exclude Naps",
	"Mask Use Manual Nonwear",
	"Mask Use Algorithm Nonwear",
	"Mask Nonwear Detector",
	"Mask Minimum Wake Wear Minutes",
	"Scored Username",
	"Source Content Hash",
	"Exported At",
	"Validation Status",
	"Validation Notes",
	"Notes"
];
function Zs(e, t) {
	if (!t) return !0;
	const [n, i] = t;
	return e >= n && e <= i;
}
function Qs(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function Xs(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function eo(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
function to(e) {
	const t = Je.find((t) => t.method === e);
	if (t) return {
		family: t.family,
		requiredSignal: t.requiredSignal,
		computationOwner: t.backendOwner ?? "browser_workspace",
		frontendComputesMetric: t.frontendComputesMetric,
		statusWhenMissing: t.statusWhenMissing
	};
	const n = dt(e), i = "ready" === n.statusWhenMissing ? "needs_signal" : n.statusWhenMissing;
	return {
		family: n.family,
		requiredSignal: n.requiredSignal,
		computationOwner: n.backendDependency ?? "browser_workspace",
		frontendComputesMetric: "count_cutpoint" === n.family,
		statusWhenMissing: i
	};
}
function no(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function io(e, t, n) {
	return "default" === n ? e.ruleLabel : t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, non-sedentary >=${String(t.lightMin)} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, MVPA >=${String(t.moderateMin)} counts/min` : `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, moderate ${String(t.moderateMin)}-${String(t.vigorousMin - 1)}, vigorous >=${String(t.vigorousMin)} counts/min`;
}
function ao(e) {
	return e?.hasValidSignal ? {
		sedentaryMinutes: e.intensity?.sedentaryMinutes ?? null,
		lightMinutes: e.intensity?.lightMinutes ?? null,
		moderateMinutes: e.intensity?.moderateMinutes ?? null,
		vigorousMinutes: e.intensity?.vigorousMinutes ?? null,
		mvpaMinutes: e.intensity?.mvpaMinutes ?? null,
		epochLengthSeconds: e.epochSeconds,
		epochsReviewed: e.mask.includedEpochs,
		wakeWearMinutes: e.mask.wakeWearMinutes,
		excludedNonwearMinutes: e.mask.excludedNonwearMinutes,
		excludedMainSleepMinutes: e.mask.excludedMainSleepMinutes,
		excludedNapMinutes: e.mask.excludedNapMinutes,
		maskOverlapEpochs: e.mask.overlapEpochs,
		mvpaBouts: e.bouts?.mvpaBouts ?? null,
		mvpaBoutMinutes: e.bouts?.mvpaBoutMinutes ?? null,
		sedentaryBouts: e.bouts?.sedentaryBouts ?? null,
		sedentaryBreaks: e.bouts?.sedentaryBreaks ?? null,
		meanSedentaryBoutMinutes: e.bouts?.meanSedentaryBoutMinutes ?? null,
		mimsUnitTotal: e.mimsUnitTotal
	} : null;
}
async function ro(e, t, n = {}, i) {
	const a = await me(i), r = (e.length > 0 ? a.filter((t) => null != t.id && e.includes(t.id)) : a).sort((e, t) => e.filename.localeCompare(t.filename)), s = [], o = n.username ?? "anonymous", l = n.maskPolicy ?? xs, c = n.choiAxis ?? Ge(), u = ks(l), d = n.cutpointOverrides, m = n.cutpointPresetNames, p = ne(n.signal), g = await Promise.all(Xe.map((e) => async function(e, t, n, i) {
		const a = t?.[e.method], r = a ? await Qe(a, i) : null;
		return r ? {
			thresholds: r,
			source: "custom",
			presetName: n?.[e.method] ?? ""
		} : {
			thresholds: no(e),
			source: "default",
			presetName: ""
		};
	}(e, d, m, p))), f = n.inclusionRulePresetName ?? "", h = n.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), _ = dt("ggir_enmo"), w = dt("mims"), y = dt("preschool_free_living_rf_3_5"), v = to("ggir_enmo"), b = to("mims"), M = to("preschool_free_living_rf_3_5");
	for (const k of r) {
		if (n.signal?.throwIfAborted(), !k.id) continue;
		if (!0 === k.ggirSummariesNeedRecompute) throw new Error(`${k.filename}: its GGIR summaries were not recomputed for the current study settings. In Study settings, run Rescore (offered for every file whose summaries are refused) before exporting.`);
		const e = k.participantId ?? "", a = Number.isFinite(k.epochLengthSeconds) && k.epochLengthSeconds > 0 ? k.epochLengthSeconds : 60, r = await pe(k.id, i);
		for (const n of r) Zs(n.analysisDate, t) && s.push({
			filename: k.filename,
			participantId: e,
			analysisDate: n.analysisDate,
			method: "ggir_enmo",
			methodLabel: _.label,
			methodFamily: v.family,
			requiredSignalContract: v.requiredSignal,
			computationOwner: v.computationOwner,
			frontendComputesMetric: v.frontendComputesMetric,
			sourceSignal: _.signalLabel,
			status: "ready",
			methodRule: "Stored GGIR daily summary values.",
			thresholdSource: "not_applicable",
			thresholdPresetName: "",
			sedentaryMax: null,
			lightMin: null,
			moderateMin: null,
			vigorousMin: null,
			sedentaryMinutes: n.sedentaryMinutes,
			lightMinutes: n.lpaMinutes,
			moderateMinutes: n.moderateMinutes ?? null,
			vigorousMinutes: n.vigorousMinutes ?? null,
			mvpaMinutes: n.mvpaMinutes,
			mimsUnitTotal: null,
			epochLengthSeconds: null,
			epochsReviewed: 0,
			wakeWearMinutes: null == n.validHours ? null : 60 * n.validHours,
			excludedNonwearMinutes: n.nonwearMinutes,
			excludedMainSleepMinutes: null,
			excludedNapMinutes: null,
			maskOverlapEpochs: null,
			mvpaBouts: null,
			mvpaBoutMinutes: null,
			sedentaryBouts: null,
			sedentaryBreaks: null,
			meanSedentaryBoutMinutes: null,
			nativeEpochSeconds: null,
			epochMismatch: !1,
			inclusionRulePresetName: f,
			maskExcludeNonwear: l.excludeNonwear,
			maskExcludeMainSleep: l.excludeMainSleep,
			maskExcludeNaps: l.excludeNaps,
			maskUseManualNonwear: l.useManualNonwear,
			maskUseAlgorithmNonwear: l.useAlgorithmNonwear,
			maskNonwearDetector: u,
			maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
			scoredUsername: o,
			sourceContentHash: k.sourceContentHash ?? k.fileHash,
			exportedAt: h,
			notes: "Stored GGIR daily summary values."
		});
		const d = [...(await be(k.id, i, n.activityDayMemo)).entries()].filter(([e]) => Zs(e, t)).sort(([e], [t]) => e.localeCompare(t)).map(([, e]) => e), m = await ve(k.id, o, i), p = await ue(k.id, i), x = {
			policy: Rs(l),
			intervals: Ts(m, p)
		}, S = d.map((e) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: a,
			series: As(e, l, c, a)
		})), I = async (e, t) => {
			n.signal?.throwIfAborted();
			const i = d.flatMap((t, n) => {
				const i = e(t, n);
				return i ? [{
					index: n,
					dayInput: i
				}] : [];
			}), a = d.map(() => {});
			if (0 === i.length) return a;
			const r = await Es({
				...x,
				...t,
				days: i.map(({ dayInput: e }) => e)
			}, n.signal);
			return n.signal?.throwIfAborted(), i.forEach(({ index: e }, t) => {
				a[e] = r.days[t];
			}), a;
		}, T = (e, t, n, i) => e && e.length > 0 ? {
			timestamps: S[i].timestamps,
			series: S[i].series ?? [],
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(e),
			grid: t,
			fallbackEpochSeconds: a
		} : null, A = [], R = Xe.map((e) => null !== Ye(e.method, k.sourceProfileId));
		for (const [t, n] of Xe.entries()) R[t] ? A.push([]) : A.push(await I((e, t) => {
			const i = new Float64Array("axisY" === n.axis ? e.axisY : e.vectorMagnitude);
			return i.length > 0 && i.length === S[t].timestamps.length ? {
				...S[t],
				values: i
			} : null;
		}, {
			analysisKind: "count_cutpoint",
			thresholds: g[t].thresholds
		}));
		const N = await I((e, t) => T(Ds(e), "classifier", e, t), { analysisKind: "preschool_classifier" }), E = await I((e, t) => T(e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output", e, t), { analysisKind: "mims_volume" }), C = await Promise.all(Xe.map((e) => et(e.method, a, n.signal)));
		for (const [t, n] of d.entries()) {
			const i = n.date;
			for (const [n, d] of Xe.entries()) {
				if (R[n]) continue;
				const r = g[n], c = io(d, r.thresholds, r.source), m = to(d.method), p = C[n], _ = ao(A[n][t]);
				s.push({
					filename: k.filename,
					participantId: e,
					analysisDate: i,
					method: d.method,
					methodLabel: d.label,
					methodFamily: m.family,
					requiredSignalContract: m.requiredSignal,
					computationOwner: m.computationOwner,
					frontendComputesMetric: m.frontendComputesMetric,
					sourceSignal: d.sourceLabel,
					status: _ ? "ready" : m.statusWhenMissing,
					methodRule: c,
					thresholdSource: r.source,
					thresholdPresetName: r.presetName,
					sedentaryMax: r.thresholds.sedentaryMax,
					lightMin: r.thresholds.lightMin,
					moderateMin: r.thresholds.moderateMin,
					vigorousMin: r.thresholds.vigorousMin,
					sedentaryMinutes: _?.sedentaryMinutes ?? null,
					lightMinutes: _?.lightMinutes ?? null,
					moderateMinutes: _?.moderateMinutes ?? null,
					vigorousMinutes: _?.vigorousMinutes ?? null,
					mvpaMinutes: _?.mvpaMinutes ?? null,
					mimsUnitTotal: null,
					epochLengthSeconds: a,
					epochsReviewed: _?.epochsReviewed ?? 0,
					wakeWearMinutes: _?.wakeWearMinutes ?? null,
					excludedNonwearMinutes: _?.excludedNonwearMinutes ?? null,
					excludedMainSleepMinutes: _?.excludedMainSleepMinutes ?? null,
					excludedNapMinutes: _?.excludedNapMinutes ?? null,
					maskOverlapEpochs: _?.maskOverlapEpochs ?? null,
					mvpaBouts: _?.mvpaBouts ?? null,
					mvpaBoutMinutes: _?.mvpaBoutMinutes ?? null,
					sedentaryBouts: _?.sedentaryBouts ?? null,
					sedentaryBreaks: _?.sedentaryBreaks ?? null,
					meanSedentaryBoutMinutes: _?.meanSedentaryBoutMinutes ?? null,
					nativeEpochSeconds: p?.nativeEpochSeconds ?? null,
					epochMismatch: "warn" === p?.severity,
					inclusionRulePresetName: f,
					maskExcludeNonwear: l.excludeNonwear,
					maskExcludeMainSleep: l.excludeMainSleep,
					maskExcludeNaps: l.excludeNaps,
					maskUseManualNonwear: l.useManualNonwear,
					maskUseAlgorithmNonwear: l.useAlgorithmNonwear,
					maskNonwearDetector: u,
					maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
					scoredUsername: o,
					sourceContentHash: k.sourceContentHash ?? k.fileHash,
					exportedAt: h,
					notes: _ ? c : `No finite ${d.sourceLabel.toLowerCase()} values for this day.`
				});
			}
			const r = ao(N[t]);
			null === Ye("preschool_free_living_rf_3_5", k.sourceProfileId) && s.push({
				filename: k.filename,
				participantId: e,
				analysisDate: i,
				method: "preschool_free_living_rf_3_5",
				methodLabel: y.label,
				methodFamily: M.family,
				requiredSignalContract: M.requiredSignal,
				computationOwner: M.computationOwner,
				frontendComputesMetric: M.frontendComputesMetric,
				sourceSignal: y.signalLabel,
				status: r ? "ready" : M.statusWhenMissing,
				methodRule: "Stored actimetric preschool wrist RF classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
				thresholdSource: "not_applicable",
				thresholdPresetName: "",
				sedentaryMax: null,
				lightMin: null,
				moderateMin: null,
				vigorousMin: null,
				sedentaryMinutes: r?.sedentaryMinutes ?? null,
				lightMinutes: r?.lightMinutes ?? null,
				moderateMinutes: r?.moderateMinutes ?? null,
				vigorousMinutes: r?.vigorousMinutes ?? null,
				mvpaMinutes: r?.mvpaMinutes ?? null,
				mimsUnitTotal: null,
				epochLengthSeconds: r?.epochLengthSeconds ?? a,
				epochsReviewed: r?.epochsReviewed ?? 0,
				wakeWearMinutes: r?.wakeWearMinutes ?? null,
				excludedNonwearMinutes: r?.excludedNonwearMinutes ?? null,
				excludedMainSleepMinutes: r?.excludedMainSleepMinutes ?? null,
				excludedNapMinutes: r?.excludedNapMinutes ?? null,
				maskOverlapEpochs: r?.maskOverlapEpochs ?? null,
				mvpaBouts: null,
				mvpaBoutMinutes: null,
				sedentaryBouts: null,
				sedentaryBreaks: null,
				meanSedentaryBoutMinutes: null,
				nativeEpochSeconds: null,
				epochMismatch: !1,
				inclusionRulePresetName: f,
				maskExcludeNonwear: l.excludeNonwear,
				maskExcludeMainSleep: l.excludeMainSleep,
				maskExcludeNaps: l.excludeNaps,
				maskUseManualNonwear: l.useManualNonwear,
				maskUseAlgorithmNonwear: l.useAlgorithmNonwear,
				maskNonwearDetector: u,
				maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
				scoredUsername: o,
				sourceContentHash: k.sourceContentHash ?? k.fileHash,
				exportedAt: h,
				notes: r ? "Stored actimetric-compatible preschool class epochs summarized with the selected mask policy." : "No stored actimetric-compatible preschool class epochs for this day."
			});
			const c = ao(E[t]);
			null === Ye("mims", k.sourceProfileId) && s.push({
				filename: k.filename,
				participantId: e,
				analysisDate: i,
				method: "mims",
				methodLabel: w.label,
				methodFamily: b.family,
				requiredSignalContract: b.requiredSignal,
				computationOwner: b.computationOwner,
				frontendComputesMetric: b.frontendComputesMetric,
				sourceSignal: w.signalLabel,
				status: c ? "ready" : b.statusWhenMissing,
				methodRule: "Stored MIMS_UNIT epoch values; intensity cutpoints are not applied.",
				thresholdSource: "not_applicable",
				thresholdPresetName: "",
				sedentaryMax: null,
				lightMin: null,
				moderateMin: null,
				vigorousMin: null,
				sedentaryMinutes: null,
				lightMinutes: null,
				moderateMinutes: null,
				vigorousMinutes: null,
				mvpaMinutes: null,
				mimsUnitTotal: c?.mimsUnitTotal ?? null,
				epochLengthSeconds: c?.epochLengthSeconds ?? a,
				epochsReviewed: c?.epochsReviewed ?? 0,
				wakeWearMinutes: c?.wakeWearMinutes ?? null,
				excludedNonwearMinutes: c?.excludedNonwearMinutes ?? null,
				excludedMainSleepMinutes: c?.excludedMainSleepMinutes ?? null,
				excludedNapMinutes: c?.excludedNapMinutes ?? null,
				maskOverlapEpochs: c?.maskOverlapEpochs ?? null,
				mvpaBouts: null,
				mvpaBoutMinutes: null,
				sedentaryBouts: null,
				sedentaryBreaks: null,
				meanSedentaryBoutMinutes: null,
				nativeEpochSeconds: null,
				epochMismatch: !1,
				inclusionRulePresetName: f,
				maskExcludeNonwear: l.excludeNonwear,
				maskExcludeMainSleep: l.excludeMainSleep,
				maskExcludeNaps: l.excludeNaps,
				maskUseManualNonwear: l.useManualNonwear,
				maskUseAlgorithmNonwear: l.useAlgorithmNonwear,
				maskNonwearDetector: u,
				maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
				scoredUsername: o,
				sourceContentHash: k.sourceContentHash ?? k.fileHash,
				exportedAt: h,
				notes: c ? "Stored MIMS_UNIT epoch values; intensity cutpoints are not applied." : "No stored MIMS_UNIT epoch values for this day."
			});
		}
	}
	return s;
}
Ys.join(","), Xe.length;
var so = n({
	editsFromMarkers: () => ho,
	getGgirMarkerInputs: () => _o,
	ggirNightRecords: () => fo,
	hasGgirRecomputeFailure: () => mo,
	mergeGgirSleepMarkers: () => go,
	recomputeGgirResults: () => vo,
	recoverPendingGgirRecomputes: () => bo,
	reviewGgirResultsForMarkers: () => ko,
	scheduleGgirRecompute: () => yo
});
const oo = new EventTarget(), lo = /* @__PURE__ */ new WeakMap(), co = 800, uo = "Update GGIR review";
function mo(e, t, n) {
	return G.getState().jobs[`${n.name}:${wo(e, t)}`]?.status === P.FAILED;
}
function po(e, t, n, i, a) {
	if (a?.aborted || function(e) {
		return e instanceof Error && e.name === p.errnames.DatabaseClosed;
	}(i)) return;
	const r = wo(e, t), s = `${n.name}:${r}`, o = G.getState();
	o.jobs[s]?.controller.signal.aborted || o.jobs[s]?.status === P.ELSEWHERE || (o.update(s, {
		id: s,
		key: r,
		workspaceId: n.name,
		kind: B.GGIR_RECOMPUTE,
		label: uo,
		controller: o.jobs[s]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: P.FAILED
	}), n.isOpen() && U() === n && oo.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function go(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function fo(e, t, n, i = [], a) {
	const r = we([...n.values()].flat(), !0), s = r?.algorithm ?? Ce(t), o = r?.detectionRule ?? null, l = /* @__PURE__ */ new Map();
	for (const [d, m] of n) {
		const e = we(m, !0);
		e && l.set(d, [{
			...e,
			algorithm: s,
			detectionRule: o
		}]);
	}
	const c = Le(t), u = c.length ? await ne(a).ggirLabelsToStoredMs(Float64Array.from(c.flatMap((e) => [e.onsetMs, e.wakeMs])), i) : [];
	for (const [d, m] of c.entries()) {
		const t = l.get(m.nightDate)?.[0], n = Te(m, t);
		"scored" !== n.kind && "invalid" !== n.kind ? l.set(m.nightDate, [{
			fileId: e,
			date: m.nightDate,
			username: ke,
			scoringSessionId: null,
			contentHash: "",
			syncStatus: "synced",
			lastModifiedAt: "",
			isInvalidNight: !1,
			needsConsensus: !1,
			notes: "",
			nonwearMarkers: [],
			...t,
			algorithm: s,
			detectionRule: o,
			sleepMarkers: go({
				markerType: g.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: u[2 * d] / 1e3,
				offsetTimestamp: u[2 * d + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : l.set(m.nightDate, t ? [t] : []);
	}
	return l;
}
async function ho(e, t, n = [], i) {
	const a = De(e).flatMap((e) => {
		const n = Te(e, t.get(e.nightDate));
		return "scored" === n.kind && null != n.main.onsetTimestamp && null != n.main.offsetTimestamp ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === a.length) return [];
	const r = ne(i), s = await r.storedToGgirLabelsMs(Float64Array.from(a.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await r.wallClockLabels(Float64Array.from([...s, ...a.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * a.length;
	return a.flatMap(({ w: e }, t) => {
		const n = o[2 * t], i = o[2 * t + 1];
		return n !== o[l + 2 * t] || i !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: i
		}] : [];
	});
}
async function _o(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [i, a] = await Promise.all([re(e, t, n), _e(e, n)]), r = new Map([...i].flatMap(([e, t]) => {
			const n = we(t, !0);
			return n ? [[e, n]] : [];
		})), s = a?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([s ?? [], [...r].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				Te(void 0, t)
			])]),
			markers: r,
			clockSteps: s,
			bundleRevision: a?.ggirBundleRevision
		};
	});
}
function wo(e, t) {
	return `${B.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function yo(e, t, n, i) {
	if (!n.isOpen() || U() !== n || i?.aborted) return;
	let a = lo.get(n);
	a || (a = /* @__PURE__ */ new Map(), lo.set(n, a));
	const r = wo(e, t);
	clearTimeout(a.get(r)), a.set(r, setTimeout(() => {
		a.delete(r), n.files.get(e).then((a) => {
			if (a?.ggirBundleRevision && n.isOpen() && U() === n && !i?.aborted) return vo(e, t, n, i);
		}).catch((a) => {
			i?.aborted || a instanceof DOMException && "AbortError" === a.name || (po(e, t, n, a, i), n.isOpen() && U() === n && (console.error("[ggir-results] recompute failed."), he("error", "GGIR results recompute failed", fe(a))));
		});
	}, co));
}
function vo(e, t, n, i, a = !0) {
	const r = (s, o = i) => te({
		kind: B.GGIR_RECOMPUTE,
		key: wo(e, t),
		label: uo,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (i) => {
			i.signal.throwIfAborted();
			const o = await async function(e, t, n, i, a) {
				if (i.throwIfAborted(), !n.isOpen() || U() !== n) return null;
				const { markerInputs: r, markers: s, clockSteps: o, bundleRevision: l } = await _o(e, t, n);
				if (!l) return null;
				const c = await n.ggirScorerReviews.get([e, t]);
				if (!n.isOpen() || U() !== n) return null;
				if (i.throwIfAborted(), c?.markerInputs === r && c.bundleRevision === l) return a && oo.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), c.current ?? null;
				const u = await v(n, e);
				if (!u) return null;
				const d = await ho(u.imported, s, o, i);
				if (!n.isOpen() || U() !== n) return null;
				const m = Mo(c, l, d) ? c.current : (await ko(u, s, o, d, i)).current;
				i.throwIfAborted();
				const p = (/* @__PURE__ */ new Date()).toISOString();
				if (!n.isOpen() || U() !== n) return null;
				const g = await ie(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!n.isOpen() || U() !== n) return null;
					const a = await _o(e, t, n);
					return a.markerInputs === r && a.bundleRevision === l && (0 === await n.ggirResultsBundles.where(":id").equals(e).count() ? null : (i.throwIfAborted(), await n.ggirScorerReviews.put({
						fileId: e,
						scorer: t,
						...m ? { current: m } : {},
						edits: d,
						markerInputs: r,
						bundleRevision: l,
						updatedAt: p
					}), !0));
				}, i);
				return g ? (oo.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), i.throwIfAborted(), m ?? u.imported) : (i.throwIfAborted(), !1 !== g && null);
			}(e, t, n, i.signal, a);
			return i.signal.throwIfAborted(), !1 !== o ? o : (s < 2 && r(s + 1, i.signal).catch((a) => po(e, t, n, a, i.signal)), null);
		}
	});
	return r(0);
}
function bo(e, t) {
	return te({
		kind: B.GGIR_RECOVERY,
		key: B.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const i = () => !t.signal.aborted && e.isOpen() && U() === e;
			try {
				if (!i()) return;
				const r = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: s } = await import("./local-data-source-CH8av8Pa.js").then((e) => e.n);
				for (const o of r) {
					if (t.signal.throwIfAborted(), !i()) return;
					try {
						const [r] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), s(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), c = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...r.map((e) => e.scorer)]);
						c.delete(ke);
						for (const s of c) {
							if (!i()) return;
							try {
								const n = mo(o, s, e);
								if (!n) {
									const { markerInputs: t, bundleRevision: n } = await _o(o, s, e), i = r.find((e) => e.scorer === s);
									if (n && i?.markerInputs === t && i.bundleRevision === n) continue;
								}
								await vo(o, s, e, t.signal, n);
							} catch (a) {
								n = !0, po(o, s, e, a, t.signal);
							}
						}
					} catch {
						n = !0;
					}
				}
			} catch {
				n = !0;
			} finally {
				t.signal.throwIfAborted();
				const a = Object.values(G.getState().jobs).filter((t) => D(t) && t.workspaceId === e.name && t.kind === B.GGIR_RECOMPUTE && t.status === P.FAILED);
				for (const t of a) {
					const a = t.key.slice(B.GGIR_RECOMPUTE.length + 1);
					if (!i()) break;
					const r = a.indexOf(":"), s = Number(a.slice(0, r)), o = JSON.parse(a.slice(r + 1));
					try {
						await e.transaction("r", e.ggirResultsBundles, e.markers, e.ggirScorerReviews, async () => {
							if (!i()) return;
							const [n, a, r] = await Promise.all([
								e.ggirResultsBundles.where(":id").equals(s).count(),
								e.markers.where("fileId").equals(s).filter((e) => e.username === o).count(),
								e.ggirScorerReviews.where("[fileId+scorer]").equals([s, o]).count()
							]);
							i() && (0 === n || 0 === a && 0 === r) && (G.getState().dismiss(t.id), oo.dispatchEvent(new CustomEvent("updated", { detail: {
								fileId: s,
								scorer: o,
								db: e
							} })));
						});
					} catch {
						n = !0;
					}
				}
				n && console.warn("[ggir-results] Some reviews could not be resumed.");
			}
		}
	});
}
function Mo(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
async function ko(e, t, n = [], i, a, r) {
	const s = i ?? await ho(e.imported, t, n, a);
	let o;
	a?.throwIfAborted();
	const l = r?.review;
	if (Mo(l, r?.bundleRevision, s)) o = l.current;
	else if (s.length > 0 && e.ms2 && e.ms3) {
		const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), i = t(e.ms3), r = t(e.ms4), l = t(e.ms5), u = t(e.sleeplogRData);
		o = We(await Z(a, (t) => t.reviewGgirResults({
			part1: new Uint8Array(e.part1),
			configCsv: e.configCsv,
			recordingId: c(e.recordingFile),
			...n ? { ms2: n } : {},
			...i ? { ms3: i } : {},
			...r ? { ms4: r } : {},
			...l ? { ms5: l } : {},
			...u ? { sleeplogRData: u } : {},
			...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
			edits: s,
			...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
			...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
			crossCheck: !1
		})));
	}
	a?.throwIfAborted();
	const u = Object.getOwnPropertyDescriptors(e);
	return delete u.current, Reflect.deleteProperty(u, "edits"), Object.defineProperties({
		...o ? { current: o } : {},
		edits: s
	}, u);
}
const xo = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], So = [
	"id",
	"fileId",
	"date",
	"username",
	"algorithm",
	"detectionRule",
	"lastModifiedAt",
	"sleepMarkers",
	"nonwearMarkers",
	"isInvalidNight",
	"needsConsensus",
	"notes",
	"periodGuider",
	"sleepPeriodDetectionConfig",
	"algorithmVersion",
	"scoringContext"
], Io = [
	"id",
	"fileId",
	"date",
	"timestamps",
	"axisY",
	"vectorMagnitude",
	"algorithmResults",
	"algorithmResultHashes",
	"ggirTimestamps",
	"ggirSib",
	"ggirEnmo",
	"ggirInvalid",
	"nonwearResults",
	"nonwearResultsChoi2011",
	"vanHeesNonwear",
	"detachNonwear",
	"temperature",
	"lux",
	"redLight",
	"greenLight",
	"blueLight",
	"eventMarkers",
	"eventMarkerTimestamps",
	"actiwareSleepWakeInvalid",
	"actiwareActivityInvalid"
], To = [
	"fileId",
	"recordingFile",
	"configCsv",
	"cleanedNightsCsv",
	"part2Reports",
	"dataCleaningCsv",
	"sleeplogCsv",
	"imported",
	"current",
	"edits",
	"updatedAt",
	"ggirCorrections",
	"personReports",
	"stock"
], Ao = ["fileId", ...f], Ro = {
	files: [
		...xo,
		"ggirTimezone",
		"recording",
		"ggirClockSteps",
		"sourceType",
		"sourceProfileId"
	],
	markers: So,
	activityDays: Io,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: To,
	actiwareFileData: [
		"fileId",
		"actiwareIntervals",
		"actiwareStatistics"
	]
}, No = {
	files: [...xo, "ggirClockSteps"],
	markers: So,
	activityDays: Io,
	ggirResultsBundles: To,
	ggirResultsBlobs: Ao,
	ggirScorerReviews: [
		"fileId",
		"scorer",
		"current",
		"edits",
		"bundleRevision"
	],
	ggirCorrectedValues: [
		"fileId",
		"key",
		"values",
		"ggirCorrections",
		"notApplied"
	]
}, Eo = {
	ggirResultsBundles: [
		"fileId",
		"recordingFile",
		"ggirCorrections",
		"configCsv"
	],
	ggirCorrectedValues: [
		"fileId",
		"ggirCorrections",
		"notApplied"
	],
	files: ["id"],
	localExecutions: ["fileId", "attestationId"],
	diaryEntries: [
		"fileId",
		"analysisDate",
		"importMappingProvenance"
	]
}, Co = "Also export corrected values was off at export";
function $o(e) {
	const t = Object.values(e.ggirCorrectionsNotApplied).filter((e) => e !== Co).length, n = Object.keys(e.ggirCorrectionProfiles);
	if (0 === n.length && 0 === t) return null;
	const i = Object.keys(e.ggirCorrections).length;
	return `Corrected values: ${n.length > 0 ? `profile ${n.join(", ")}; ` : ""}${String(i)} ${1 === i ? "recording" : "recordings"} corrected, ${String(t)} left out (see manifest.json).`;
}
function Oo(e) {
	const t = Ho(e, Lo.manifest), n = new Map(t.ggirResultsBundles.map((e) => [e.fileId, e.recordingFile]));
	return t.ggirCorrectedValues.flatMap((e) => void 0 !== e.notApplied && "Also export corrected values was off at export" !== e.notApplied && n.has(e.fileId) ? [{
		file: qi("part4_night_review", "corrected"),
		row: 0,
		key: n.get(e.fileId),
		column: `corrected values: ${e.notApplied}`,
		reason: "not_computed_for_export"
	}] : []);
}
function Do(e) {
	return Ho(e, Lo.ggirReport).ggirResultsBundles.flatMap((e) => {
		const t = Be(e.imported, e.part2Reports);
		return t ? [{
			file: qi("part4_night_review", "default"),
			row: 0,
			key: e.recordingFile,
			column: t,
			reason: "source_reported_missing"
		}] : [];
	});
}
const Bo = {
	files: ["id"],
	ggirResultsBundles: ["fileId"],
	auditLog: Object.freeze(Object.keys({
		id: !0,
		fileId: !0,
		analysisDate: !0,
		username: !0,
		studyId: !0,
		action: !0,
		clientTimestamp: !0,
		sessionId: !0,
		sequence: !0,
		payload: !0,
		eventHash: !0,
		previousHash: !0,
		restoredFromBackup: !0,
		restoredSourceSegmentId: !0,
		restoredSourceSegmentAncestry: !0,
		restoredSourceFileId: !0
	}))
}, Lo = {
	sleep: Ro,
	nonwear: Ro,
	summary: Ro,
	wide: Ro,
	circadian: {
		files: xo,
		activityDays: [
			"fileId",
			"date",
			"timestamps",
			"vectorMagnitude",
			"ggirTimestamps",
			"ggirEnmo",
			"algorithmResults"
		]
	},
	ggirReport: No,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: So,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: [
			...xo,
			"sourceType",
			"sourceProfileId"
		],
		markers: So,
		actiwareFileData: [
			"fileId",
			"actiwareIntervals",
			"actiwareStatistics",
			"actiwareStatisticsNeedsRecompute"
		],
		actiwareStatisticsInputs: ["fileId", "input"],
		studySettings: ["key", "extraSettings"]
	},
	actiwareSleepWake: {
		files: xo,
		markers: So,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: Eo,
	audit: Bo,
	ggirResults: {
		...Eo,
		...Ro,
		...No,
		auditLog: Bo.auditLog,
		sensorNonwear: [
			"fileId",
			"startTimestamp",
			"endTimestamp",
			"source"
		],
		dailyGgirSummaries: [
			"fileId",
			"analysisDate",
			"totalSleepTimeMinutes"
		],
		actiwareFileData: [
			"fileId",
			"actiwareIntervals",
			"actiwareStatistics",
			"actiwareStatisticsNeedsRecompute",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		],
		actiwareStatisticsInputs: ["fileId", "input"],
		studySettings: [
			"key",
			"extraSettings",
			j
		]
	}
}, Po = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap();
function Wo(e, t, n, i) {
	for (let a = 0; a < n.byteLength;) {
		const r = n.subarray(a, a + ui), s = e[t](r, { at: i + a });
		if (!Number.isInteger(s) || s <= 0 || s > r.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		a += s;
	}
}
function jo(e) {
	if (!e || "object" != typeof e) return e;
	const t = Fo.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return Wo(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(jo) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, jo(t)])) : structuredClone(e);
}
function Go(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(Go), Object.freeze(e)), e;
}
const Uo = [
	"sleep",
	"circadian",
	"ggirReport",
	"event"
];
var zo = class extends Error {};
function Vo(e, t, n) {
	const i = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new zo(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (i(t), Reflect.get(e, t, n)),
		has: (e, t) => (i(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (i(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function Ho(e, t, n = []) {
	const i = Po.get(e);
	if (!i) throw new zo("Export requires a captured input snapshot");
	const a = Object.entries(Lo).find(([, e]) => e === t)?.[0];
	if (!a) throw new zo("Export producer has no registered input declaration");
	const r = {};
	for (const [s, o] of Object.entries(t)) {
		const e = i[s].filter((e) => !n.length || "studySettings" === s || n.includes("files" === s ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const i of o.filter((e) => e in t)) Object.defineProperty(n, i, {
				enumerable: !0,
				get: () => Go(jo(t[i]))
			});
			return Vo(n, o, `${a}: undeclared field ${s}.`);
		});
		Object.assign(r, { [s]: Object.freeze(e) });
	}
	return Vo(r, Object.keys(t), `${a}: undeclared table `);
}
function qo(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	for (const a of e.markers) {
		if (a.fileId !== t || a.username !== n) continue;
		const e = Me(a), r = i.get(a.date) ?? [];
		r.push(e), i.set(a.date, r);
	}
	return i;
}
function Ko(e, t, n) {
	return new Map([...qo(e, t, n)].flatMap(([e, t]) => {
		const n = we(t.filter(_));
		return n ? [[e, n]] : [];
	}));
}
const Jo = /* @__PURE__ */ new WeakMap();
function Yo(e, t, n, i) {
	let a = Jo.get(e);
	a || (a = /* @__PURE__ */ new Map(), Jo.set(e, a));
	const r = JSON.stringify([t, n]);
	let s = a.get(r);
	return s || (a.clear(), s = async function(e, t, n, i) {
		const a = Ho(e, Lo.ggirReport, [t]), r = a.files.find((e) => e.id === t), s = a.ggirResultsBundles.find((e) => e.fileId === t), o = s && w(s, a.ggirResultsBlobs.find((e) => e.fileId === t)), l = qo(a, t, n), c = o ? await fo(t, o.imported, l, r.ggirClockSteps, i) : l, u = new Map([...c].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), d = new Set([...u].filter(([, e]) => "invalid" === Te(void 0, e).kind).map(([e]) => e)), m = {
			review: a.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n),
			bundleRevision: r.ggirBundleRevision
		}, p = o ? await ko(o, u, r.ggirClockSteps, void 0, i, m) : void 0, g = p ? await Zo(p, d, i) : void 0, f = a.ggirCorrectedValues.find((e) => e.fileId === t);
		return {
			markersByAlgo: c,
			selected: u,
			bundle: g,
			sets: o && p ? await Promise.all($e(o, f, f?.notApplied !== Co).map(async ({ bundle: e }) => e === o ? g : Zo(await ko(e, u, r.ggirClockSteps, p.edits, i), d, i))) : [],
			invalidDates: d
		};
	}(e, t, n, i), a.set(r, s), s.catch(() => {
		a.get(r) === s && a.delete(r);
	})), s;
}
async function Zo(e, t, n) {
	const { ggirCell: i, ggirNum: a } = await import("./ggir-results-types-WB8axvb-.js").then((e) => e.i), r = e.part2Reports?.["part2_daysummary.csv"], s = e.cleanedNightsCsv ? await ne(n).readGgirReportCsv(e.cleanedNightsCsv, e.configCsv) : void 0, o = /* @__PURE__ */ new Map();
	if (r) for (let u = 0; u < r.rows; u++) {
		const e = i(r, C.ggir_id.header, u), t = Yi(i(r, C.ggir_calendar_date.header, u));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		o.set(n, o.has(n) ? null : u);
	}
	const l = Zi(e.imported, "nights"), c = async (e) => {
		const t = e.nights, c = await Promise.all(Array.from({ length: t.rows }, async (c, u) => {
			const d = i(t, C.ggir_id.header, u), m = o.get(JSON.stringify([null == d ? null : String(d), l(t, u, !1)])), p = r && null != m ? i(r, C.ggir_day_valid_hours.header, m) : null, g = r && null != m ? i(r, C.ggir_day_hours.header, m) : null, f = r && null != m ? a(r, C.ggir_day_valid_hours.header, m) : null, h = r && null != m ? a(r, C.ggir_day_hours.header, m) : null, _ = null != f && null != h ? await ne(n).ggirDayValidFraction(f, h) : null, w = a(t, C.ggir_night.header, u), y = Array.from({ length: e.days.rows }, (e, t) => t).find((t) => "WW" === i(e.days, "window", t) && a(e.days, "night_number", t) === w), v = s ? Array.from({ length: s.rows }, (e, t) => t).find((e) => String(i(s, C.ggir_id.header, e)) === String(d) && a(s, C.ggir_night.header, e) === w) : void 0, b = {
				ggir_nonwear_perc_spt: e.nightRecomputed[u] ? void 0 === y ? null : i(e.days, C.ggir_nonwear_perc_spt.header, y) : t.columns.includes(C.ggir_nonwear_perc_spt.header) ? i(t, C.ggir_nonwear_perc_spt.header, u) : s?.columns.includes(C.ggir_nonwear_perc_spt.header) && void 0 !== v ? i(s, C.ggir_nonwear_perc_spt.header, v) : void 0 === y ? null : i(e.days, C.ggir_nonwear_perc_spt.header, y),
				ggir_day_valid_hours: p,
				ggir_day_hours: g,
				ggir_day_valid_fraction: _ ?? null
			}, M = (r ? null === m ? "duplicate_part2_day" : void 0 === m ? "no_matching_part2_day" : null : "source_reported_missing") ?? "source_reported_missing";
			return {
				values: b,
				reasons: {
					ggir_day_valid_hours: null == f ? M : null,
					ggir_day_hours: null == h ? M : null,
					ggir_day_valid_fraction: null != _ ? null : null != h && h <= 0 ? "not_applicable_to_row" : M
				}
			};
		})), u = $.ggir_review_night_extension, d = [.../* @__PURE__ */ new Set([
			...t.columns,
			...u.map((e) => C[e].header),
			...u.map((e) => C[e].header + "_missing_reason")
		])], m = d.map((e) => {
			const n = u.find((t) => C[t].header + "_missing_reason" === e);
			if (n) return c.map((e) => e.reasons[n] ?? null);
			const i = u.find((t) => C[t].header === e);
			return i ? c.map((e) => e.values[i] ?? null) : t.values[t.columns.indexOf(e)];
		});
		return {
			...e,
			nights: {
				...t,
				columns: d,
				values: m
			}
		};
	};
	return {
		fileId: e.fileId,
		recordingFile: e.recordingFile,
		updatedAt: e.updatedAt,
		...e.part2Reports ? { part2Reports: e.part2Reports } : {},
		edits: e.edits,
		...e.personReports ? { personReports: e.personReports } : {},
		...e.personReports && (e.edits.length > 0 || t.size > 0) ? { personRecomputed: await na(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await c(e.imported),
		...e.current ? { current: await c(e.current) } : {}
	};
}
function Qo(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function Xo(e) {
	return Ho(e, Lo.ggirResults).studySettings.flatMap((e) => de(e).map((e) => ({
		file: "sleep_export.csv",
		row: 0,
		key: e.filename,
		column: `${e.category}: ${e.reason}`,
		reason: "not_computed_for_export"
	})));
}
const el = "not included", tl = "included if produced";
function nl(e) {
	const t = e.artifacts ?? null, n = t ? null : e.planned ?? null, i = e.columns, a = t ? t.sleepRows.length : n?.sleepRows ?? null, r = t ? t.sleepRows.filter((e) => e.markerType === g.MAIN_SLEEP).length : n?.mainSleepRows ?? null, s = t ? Lr(t.sleepRows).size : n?.wideRows ?? null, o = t ? t.summaryRows.length : n?.summaryRows ?? null, l = t ? t.nonwearRows.length : n?.nonwearRows ?? null, c = t ? t.physicalActivityRows.length : n?.activityRows ?? null, u = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : n?.activityDates ?? null, p = t ? t.eventMarkerRows?.length ?? 0 : n?.eventMarkerRows ?? null, f = t ? t.actiwareIntervalRows?.length ?? 0 : n?.actiwareIntervalRows ?? null, h = t ? t.actiwareSleepWakeCsv?.rows ?? 0 : n?.actiwareSleepWakeRows ?? null, _ = n?.actogramFiles ?? null, w = t ? Object.keys(t.ggirEntries) : null, y = (w ? w.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
		const n = Math.max(0, m(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
		return {
			name: e,
			include: n > 0,
			rows: n
		};
	}) : n ? [...fa([...n.part4Rows.keys()])].map(([e, t]) => ({
		name: t,
		include: n.ggirMainSleepGroupKeys.includes(e),
		rows: n.part4Rows.get(e) ?? null
	})) : []).sort((e, t) => e.name.localeCompare(t.name)), v = w ? w.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [ma, ...n?.ggirReviewEntries ?? []], b = (e) => null == e ? null : e > 0, M = (n, a, r) => {
		const s = null == a ? "unknown" : a ? "included" : "not_included";
		return "included" !== s ? {
			name: n,
			state: s,
			rows: null,
			detail: "unknown" === s ? r.detail : el,
			estimatedBytes: 0,
			write: null
		} : {
			name: n,
			state: s,
			rows: r.rows,
			detail: r.detail,
			estimatedBytes: r.estimatedBytes ?? ((r.rows ?? 0) + 1) * (r.columns ?? i) * 12,
			write: t ? () => r.csv ? Ma(r.csv(t)) : r.encode(t) : null,
			...t && (r.chunkField || r.wide) ? { batches: function* () {
				if (r.wide) {
					const e = Pr(t.sleepRows, !0), n = e.next().value;
					for (const t of e) {
						const e = n + "\n" + t;
						yield {
							bytes: Ma(e),
							text: e,
							rows: 1
						};
					}
				} else if (r.chunkField) {
					const n = t[r.chunkField] ?? [];
					for (let i = 0; i < n.length; i += 256) {
						const a = {
							...t,
							[r.chunkField]: n.slice(i, i + 256)
						}, s = !e.selectedColumns?.length || "sleepRows" !== r.chunkField && "nonwearRows" !== r.chunkField ? void 0 : Ur(a[r.chunkField], void 0, !0), o = r.csv(a);
						yield {
							bytes: Ma(o),
							text: o,
							rows: Math.min(256, n.length - i),
							...s ? { fullRowCsv: s } : {}
						};
					}
				}
			} } : {}
		};
	};
	return [
		M("sleep_export.csv", b(a), {
			rows: a,
			detail: null == a ? tl : `${String(a)} rows · ${String(i)} columns`,
			chunkField: "sleepRows",
			csv: (t) => Ur(t.sleepRows, e.selectedColumns ?? void 0, !0)
		}),
		M("sleep_export_wide.csv", !!e.includeWideFormat && b(s ?? r), {
			rows: s,
			detail: null == s ? tl : `${String(s)} participant group ${1 === s ? "row" : "rows"}`,
			wide: !0,
			csv: (e) => function(e, t = !1) {
				return [...Pr(e, t)].join("\n");
			}(e.sleepRows, !0)
		}),
		M("summary_export.csv", b(o ?? r), {
			rows: o,
			detail: null == o ? tl : `${String(o)} participant ${1 === o ? "row" : "rows"}`,
			chunkField: "summaryRows",
			csv: (e) => function(e, t = !1) {
				const n = Gr("summary_csv", e, Rr, void 0, t), i = [
					"summary_mean_temperature_c",
					"sleep_regularity_index",
					...Object.values(Ar).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
				];
				return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? m(n).records.map((t, n) => 0 === n ? t.text + "," + i.map((e) => C[e].header + "_missing_reason").join(",") : t.text + "," + i.map((t) => {
					const i = e[n - 1];
					return "summary_mean_temperature_c" === t ? null == i.meanTemperature ? i.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? i.sleepRegularityMissingReason ?? "" : i.metricMissingReasons?.[t] ?? "";
				}).join(",")).join("\n") : n;
			}(e.summaryRows, !0)
		}),
		M("nonwear_export.csv", b(l), {
			rows: l,
			detail: null == l ? tl : `${String(l)} periods`,
			chunkField: "nonwearRows",
			csv: (t) => Ur(t.nonwearRows, e.selectedColumns ?? void 0, !0)
		}),
		M("event_markers_export.csv", b(p), {
			rows: p,
			detail: null == p ? tl : `${String(p)} button ${1 === p ? "press" : "presses"}`,
			columns: es.length,
			chunkField: "eventMarkerRows",
			csv: (e) => function(e, t = !1) {
				const n = [[...es, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
				for (const i of e) n.push([
					i.filename,
					i.participantId ?? "",
					i.studyDate,
					as(i.localTimestamp),
					null == i.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (i.localTimestamp - 60 * i.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
					...t ? [i.participantId ? "" : "source_reported_missing", null == i.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
				].map((e) => d(e)).join(","));
				return `${n.join("\n")}\n`;
			}(e.eventMarkerRows ?? [], !0)
		}),
		M("actiware_intervals_export.csv", b(f), {
			rows: f,
			detail: null == f ? tl : `${String(f)} Actiware intervals`,
			columns: Vr.length,
			chunkField: "actiwareIntervalRows",
			csv: (e) => Xr(e.actiwareIntervalRows ?? [], !0)
		}),
		M(os, b(h), {
			rows: h,
			detail: null == h ? tl : `${String(h)} Actiware Sleep/Wake epochs`,
			columns: ls.length,
			encode: (e) => e.actiwareSleepWakeCsv.bytes
		}),
		M("physical_activity_export.csv", b(c), {
			rows: c,
			detail: null == c || null == u ? tl : `${String(c)} rows · ${String(u)} distinct dates`,
			chunkField: "physicalActivityRows",
			csv: (e) => function(e, t, n, i = !1) {
				const a = /* @__PURE__ */ new Set();
				t.includes("sedentary") || (a.add("Sedentary Minutes"), a.add("Sedentary Bouts"), a.add("Sedentary Breaks"), a.add("Mean Sedentary Bout Minutes")), t.includes("light") || a.add("Light Minutes"), t.includes("moderate") || a.add("Moderate Minutes"), t.includes("vigorous") || a.add("Vigorous Minutes"), t.includes("moderate") && t.includes("vigorous") || (a.add("MVPA Minutes"), a.add("MVPA Bouts"), a.add("MVPA Bout Minutes")), n && t.includes("nonwear") || a.add("Excluded Nonwear Minutes");
				const r = /* @__PURE__ */ new Set([
					"Excluded Main Sleep Minutes",
					"Excluded Nap Minutes",
					"MVPA Bouts",
					"MVPA Bout Minutes",
					"Sedentary Bouts",
					"Sedentary Breaks",
					"Mean Sedentary Bout Minutes"
				]), s = e.some((e) => "ggir_enmo" === e.method) ? Ys.filter((e) => !a.has(e) && (Ri.has(e) || r.has(e))) : [], o = [
					"Participant ID",
					"Threshold Preset Name",
					"Inclusion Rule Preset Name",
					"Scored Username",
					"Source Content Hash",
					"Validation Notes",
					"Notes"
				], l = [[
					...Ys.filter((e) => !a.has(e)),
					...s.map((e) => `${e}_missing_reason`),
					...i ? [
						"Epoch Length Seconds",
						"Native Epoch Seconds",
						"Mask Overlap Epochs"
					].map((e) => e + "_missing_reason") : [],
					...o.map((e) => e + "_missing_reason")
				].join(",")];
				for (const c of e) {
					const e = eo(c), t = null == c.sedentaryMinutes || !n && null == c.excludedNonwearMinutes ? null : c.sedentaryMinutes + (n ? 0 : c.excludedNonwearMinutes), u = [
						Qs(c.filename),
						Qs(c.participantId),
						Qs(c.analysisDate),
						Qs(c.method),
						Qs(c.methodLabel),
						Qs(c.methodFamily),
						Qs(c.requiredSignalContract),
						Qs(c.computationOwner),
						String(c.frontendComputesMetric),
						Qs(c.sourceSignal),
						Qs(c.status),
						Qs(c.methodRule),
						Qs(c.thresholdSource),
						Qs(c.thresholdPresetName),
						Xs(c.sedentaryMax),
						Xs(c.lightMin),
						Xs(c.moderateMin),
						Xs(c.vigorousMin),
						Xs(t),
						Xs(c.lightMinutes),
						Xs(c.moderateMinutes),
						Xs(c.vigorousMinutes),
						Xs(c.mvpaMinutes),
						Xs(c.mimsUnitTotal),
						null == c.epochLengthSeconds ? "" : String(c.epochLengthSeconds),
						String(c.epochsReviewed),
						Xs(c.wakeWearMinutes),
						Xs(c.excludedNonwearMinutes),
						Xs(c.excludedMainSleepMinutes),
						Xs(c.excludedNapMinutes),
						null == c.maskOverlapEpochs ? "" : String(c.maskOverlapEpochs),
						null == c.mvpaBouts ? "" : String(c.mvpaBouts),
						Xs(c.mvpaBoutMinutes),
						null == c.sedentaryBouts ? "" : String(c.sedentaryBouts),
						null == c.sedentaryBreaks ? "" : String(c.sedentaryBreaks),
						Xs(c.meanSedentaryBoutMinutes),
						null == c.nativeEpochSeconds ? "" : String(c.nativeEpochSeconds),
						String(c.epochMismatch),
						Qs(c.inclusionRulePresetName),
						String(c.maskExcludeNonwear),
						String(c.maskExcludeMainSleep),
						String(c.maskExcludeNaps),
						String(c.maskUseManualNonwear),
						String(c.maskUseAlgorithmNonwear),
						Qs(c.maskNonwearDetector),
						Xs(c.maskMinimumWakeWearMinutes),
						Qs(c.scoredUsername),
						Qs(c.sourceContentHash),
						Qs(c.exportedAt),
						Qs(e.status),
						Qs(e.notes),
						Qs(c.notes)
					], d = {
						"Sedentary Minutes": null == t ? null : c.sedentaryMinutes,
						"Light Minutes": c.lightMinutes,
						"Moderate Minutes": c.moderateMinutes,
						"Vigorous Minutes": c.vigorousMinutes,
						"MVPA Minutes": c.mvpaMinutes,
						"Wake Wear Minutes": c.wakeWearMinutes,
						"Excluded Nonwear Minutes": c.excludedNonwearMinutes
					}, m = {
						"Excluded Main Sleep Minutes": c.excludedMainSleepMinutes,
						"Excluded Nap Minutes": c.excludedNapMinutes,
						"MVPA Bouts": c.mvpaBouts,
						"MVPA Bout Minutes": c.mvpaBoutMinutes,
						"Sedentary Bouts": c.sedentaryBouts,
						"Sedentary Breaks": c.sedentaryBreaks,
						"Mean Sedentary Bout Minutes": c.meanSedentaryBoutMinutes
					}, p = s.map((e) => {
						const t = u[Ys.indexOf(e)];
						if ("ggir_enmo" !== c.method || "" !== t) return "";
						if (Ri.has(e)) {
							const t = d[e];
							return null != t && Number.isFinite(t) ? "" : "source_reported_missing";
						}
						return r.has(e) && null == m[e] ? "not_computed_for_export" : "";
					}), g = i ? [
						["Epoch Length Seconds", null == c.epochLengthSeconds && "ggir_enmo" === c.method ? "not_applicable_to_row" : ""],
						["Native Epoch Seconds", null == c.nativeEpochSeconds ? "not_applicable" === c.thresholdSource ? "not_applicable_to_row" : "source_reported_missing" : ""],
						["Mask Overlap Epochs", null == c.maskOverlapEpochs ? "ggir_enmo" === c.method ? "not_applicable_to_row" : "needs_signal" === c.status ? "channel_unavailable" : "backend_required" === c.status ? "not_computed_for_export" : "" : ""]
					].map(([e, t]) => "" === u[Ys.indexOf(e)] ? t : "") : [];
					l.push([
						...u.filter((e, t) => !a.has(Ys[t])),
						...p,
						...g,
						...o.map((e) => "" !== u[Ys.indexOf(e)] ? "" : [
							"Participant ID",
							"Scored Username",
							"Source Content Hash"
						].includes(e) ? "source_reported_missing" : "not_applicable_to_row")
					].join(","));
				}
				return `${l.join("\n")}\n`;
			}(e.physicalActivityRows, e.physicalActivityEnabledClasses, e.physicalActivityNonwearAsClass, !0)
		}),
		...y.map(({ name: e, include: t, rows: n }) => M(e, t, {
			rows: n,
			detail: null == n ? tl : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
			columns: 40,
			encode: (t) => t.ggirEntries[e]
		})),
		...v.map((e) => M(e, !(!w && !n?.ggirReviewEntries.includes(e)) || (null == _ ? null : _ > 0), {
			rows: null,
			detail: e.endsWith(".html") ? null == _ ? w ? "1 report" : tl : `1 report · ${String(_)} ${1 === _ ? "file" : "files"}` : "1 GGIR report artifact",
			encode: (t) => t.ggirEntries[e]
		})),
		{
			name: Fi,
			state: "included",
			rows: null,
			detail: "1 reason per missing cell",
			estimatedBytes: 2048 + (t?.actiwareSleepWakeCsv?.reasonChunks.reduce((e, t) => e + t.byteLength, 0) ?? n?.actiwareMissingReasonBytes ?? 0),
			write: null
		},
		M("codebook.csv", !0, {
			rows: Nr.length,
			detail: `${String(Nr.length)} definitions`,
			estimatedBytes: new TextEncoder().encode(Or()).length,
			encode: () => Ma(Or(void 0, !0))
		}),
		{
			name: di,
			state: "included",
			rows: null,
			detail: "1 manifest · run, settings, entry hashes",
			estimatedBytes: 2048,
			write: null
		}
	];
}
async function il(e, t) {
	return e.transaction("r", [
		e.files,
		e.markers,
		e.sensorNonwear,
		e.dailyGgirSummaries
	], async () => {
		const n = await me(e, t.length ? { onlyFileIds: t } : void 0), i = n.map((e) => e.id), [a, r, s] = await Promise.all([
			e.markers.where("fileId").anyOf(i).toArray(),
			e.sensorNonwear.where("fileId").anyOf(i).toArray(),
			e.dailyGgirSummaries.where("fileId").anyOf(i).toArray()
		]);
		return Ne({
			markers: a,
			sensorNonwear: r,
			dailyGgirSummaries: s,
			files: n.map(({ id: e, filename: t, participantId: n, epochLengthSeconds: i, sourceContentHash: a, fileHash: r, seriesRevision: s, exportInputRevision: o }) => ({
				id: e,
				filename: t,
				participantId: n,
				epochLengthSeconds: i,
				sourceContentHash: a,
				fileHash: r,
				seriesRevision: s,
				exportInputRevision: o
			}))
		});
	});
}
async function al(n, i, a, r = {}) {
	const { signal: s, producers: o = {} } = r;
	s?.throwIfAborted(), r.progress?.(0, 0, pi);
	const c = await il(n, i.fileIds), p = await async function(e, t = U(), n = {}) {
		const i = await rl(null, "computing the corrected GGIR values", () => async function(e, t, n = {}) {
			const i = vs();
			return i?.request ? i.request(ys(e), n.signal ? { signal: n.signal } : {}, () => bs(e, t, n, !1)) : bs(e, t, n, !1);
		}(t, e, {
			signal: n.signal,
			onProgress: (e, t) => n.progress?.(e, t, "Computing corrected values"),
			...n.workerPool ? { workerPool: n.workerPool } : {}
		}));
		return n.progress?.(0, 0, pi), rl(null, "checking the export inputs", () => async function(e, t = U(), n = {}) {
			const i = /* @__PURE__ */ new Map();
			for (const p of (n.readPlan ?? Object.keys(Lo)).map((e) => Lo[e])) for (const [e, t] of Object.entries(p)) {
				const n = e;
				i.set(n, /* @__PURE__ */ new Set([...i.get(n) ?? [], ...t]));
			}
			if (!i.size) {
				const e = Object.freeze({ files: Object.freeze([]) });
				return Po.set(e, {}), e;
			}
			let a = 268435456;
			const r = (e) => {
				if (e instanceof ArrayBuffer ? a -= e.byteLength : "string" == typeof e ? a -= 2 * e.length : e && "object" == typeof e ? Object.values(e).forEach(r) : a -= 8, a < 0) throw new oi("Export snapshot exceeds 256 MiB. Select fewer recordings or a narrower workspace before exporting.");
			};
			let s = 0;
			const o = /* @__PURE__ */ new Map(), l = (e, t, n) => {
				const i = Object.freeze({});
				return Wo(e, "write", t, s), Fo.set(i, {
					at: s,
					length: t.byteLength,
					store: e,
					restore: n
				}), s += t.byteLength, r(0), i;
			}, c = (e) => {
				if ("string" == typeof e && e.length >= 4096) {
					const t = o.get(e);
					if (void 0 !== t) return t;
					o.set(e, e);
				}
				if (n.binaryStore && (e instanceof ArrayBuffer || ArrayBuffer.isView(e))) {
					const t = e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), i = e instanceof ArrayBuffer ? null : e.constructor;
					return l(n.binaryStore, t, i ? (e) => new i(e) : (e) => e);
				}
				return n.binaryStore && function(e) {
					if (!Array.isArray(e) || e.length < 4096) return !1;
					for (const t of e) if (null !== t && "boolean" != typeof t && ("number" != typeof t || !Number.isFinite(t) || Object.is(t, -0))) return !1;
					return !0;
				}(e) ? l(n.binaryStore, new TextEncoder().encode(JSON.stringify(e)), (e) => JSON.parse(new TextDecoder().decode(e))) : Array.isArray(e) ? e.map(c) : e && "object" == typeof e && Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, c(t)])) : (r(e), e);
			}, u = await t.transaction("r", [...i.keys()].map((e) => t[e]), async () => {
				const n = i.has("files") ? await me(t, e.length ? { onlyFileIds: e } : void 0) : [], a = new Set(n.flatMap((e) => e.id ? [e.id] : [])), r = {};
				return await Promise.all([...i].map(async ([e, i]) => {
					const s = (e) => Object.fromEntries([...i].filter((t) => t in e).map((t) => [t, c(e[t])]));
					if (r[e] = [], "files" === e) return void (r[e] = n.map((e) => s(e)));
					const o = "diaryEntries" === e ? t.diaryEntries : le(t, e), l = "studySettings" === e ? o.where("key").equals("study") : o.where("fileId").anyOf([...a]);
					await h(l, (t) => {
						r[e].push(s(t));
					});
				})), r;
			}), d = new Set((u.ggirResultsBundles ?? []).map((e) => e.fileId));
			u.markers = (u.markers ?? []).map((e) => d.has(e.fileId) && "invalid" === Te(void 0, Me(e)).kind ? {
				...e,
				isInvalidNight: !0
			} : e);
			const m = function(e) {
				const t = Object.freeze({ files: Go((e.files ?? []).map((e) => Object.fromEntries(xo.map((t) => [t, jo(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
				return Po.set(t, e), t;
			}(u);
			return function(e, t) {
				const n = Po.get(e);
				if (!n.ggirResultsBundles) return;
				const i = new Set(n.ggirResultsBundles.map((e) => e.fileId));
				if (void 0 === t) return void (n.ggirCorrectedValues && (n.ggirCorrectedValues = n.ggirCorrectedValues.filter((e) => !i.has(e.fileId))));
				const a = new Map((n.files ?? []).map((e) => [e.id, e.ggirBundleRevision])), r = new Map((n.ggirCorrectedValues ?? []).map((e) => [e.fileId, e]));
				n.ggirCorrectedValues = n.ggirResultsBundles.flatMap((e) => {
					if (!t) return e.ggirCorrections && !e.stock ? [] : [{
						fileId: e.fileId,
						key: "",
						notApplied: Co
					}];
					if (e.ggirCorrections) return [];
					const n = t.get(e.fileId);
					if (!n) return [{
						fileId: e.fileId,
						key: "",
						notApplied: "the recording was added during the export; export again for its corrected values"
					}];
					if ("notApplied" in n) return [{
						fileId: e.fileId,
						key: "",
						notApplied: n.notApplied
					}];
					const i = r.get(e.fileId);
					return [i && i.key === n.key && a.get(e.fileId) === n.revision ? i : {
						fileId: e.fileId,
						key: "",
						notApplied: "the recording changed during the export; export again for its corrected values"
					}];
				});
			}(m, n.ggirCorrected), m;
		}(e, t, {
			...n,
			ggirCorrected: i
		}));
	}(i.fileIds, n, {
		...r,
		signal: s
	}), f = function(e, t, n, i) {
		const a = [], r = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = [], c = xe(/* @__PURE__ */ new Date()), p = (e) => {
			for (const t of e.charts) l.push({
				key: t.key,
				pid: t.pid,
				charts: t.charts.length
			}), r.push(ya(r.length, t));
			for (const [t, n] of e.csvLinesByAlgo) o.set(t, u(n[0]));
			for (const [t, n] of e.headers) s.set(t, ea(s.get(t) ?? [], n));
			a.push({
				csvLinesByAlgo: e.csvLinesByAlgo,
				ggirReviews: e.ggirReviews
			});
		};
		async function* g(e, t) {
			for (const n of a) i?.throwIfAborted(), yield xa(n, {
				signal: i,
				names: t,
				layouts: s,
				only: e
			}).then((t) => t[e]);
		}
		function* f() {
			const e = fa([...o.keys()]);
			for (const [t, n] of o) s.set(e.get(t), n);
			for (const t of [...s.keys()].filter(Ji)) {
				const e = s.get(t);
				e && s.set(t, [
					...e.filter((e) => !e.endsWith("_missing_reason") && !zi.includes(e)),
					...zi,
					...e.filter((e) => e.endsWith("_missing_reason") && !zi.some((t) => e === t + "_missing_reason")),
					...zi.map((e) => e + "_missing_reason")
				]);
			}
			for (const [t, n] of s) yield {
				name: t,
				chunks: async function* () {
					yield Ma(n.map(d).join(",") + "\n");
					for await (const n of g(t, e)) {
						if (!n) continue;
						const e = new TextDecoder().decode(n), t = m(e).records[0], i = Ma(e.slice(t.text.length + 1));
						for (let n = 0; n < i.byteLength; n += ui) yield i.subarray(n, n + ui);
					}
				}()
			};
			l.length && (yield {
				name: ma,
				chunks: async function* () {
					yield* ba(function(e, t) {
						const n = e.map((e) => e.key), i = e.reduce((e, t) => e + t.charts, 0);
						return `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${da(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${da(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${i} chart${1 !== i ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${da(e[n].pid)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`;
					}(l, c));
					for await (const { bytes: e, lengths: t } of async function* () {
						for (const { blob: e, lengths: t } of r) i?.throwIfAborted(), yield e.arrayBuffer().then((e) => ({
							bytes: new Uint8Array(e),
							lengths: t
						}));
					}()) {
						let n = 0;
						for (const i of t) yield e.subarray(n, n += i);
					}
					for (const e of va) yield* ba(e);
				}()
			});
		}
		return {
			add: p,
			addFiles: async (a) => {
				for (const r of a) p(await Sa({
					username: e,
					dateRange: t,
					snapshot: n,
					generatedAt: c
				}, r, i));
			},
			entries: async () => [...f()].reduce(async (e, t) => {
				const n = await e, i = [];
				for await (const a of t.chunks) i.push(a);
				return n[t.name] = ye(i), n;
			}, Promise.resolve({})),
			streamEntries: f,
			generatedAt: c
		};
	}(i.username, i.dateRange, p, s), _ = [];
	for (const e of p.files) {
		const t = _.at(-1);
		t?.[0]?.filename === e.filename ? t.push(e) : _.push([e]);
	}
	const w = [], y = [], v = [];
	let b = !1;
	const M = i.manifest.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), k = r.groups ?? {
		size: 1,
		run: (i, a, r) => async function(n, i, a, { db: r, signal: s }) {
			s?.throwIfAborted();
			const o = n.files.filter((e) => i.includes(e.id)), c = o.map((e) => e.id), u = /* @__PURE__ */ new Map();
			let d = !1;
			try {
				const e = await function(e, { fileIds: t, dateRange: n, signal: i }) {
					const a = Ho(e, Lo.circadian, t);
					return async function(e, t, { dateRange: n, signal: i }) {
						const a = ne(i), r = [];
						let s = 0;
						for (const o of e) {
							if (!o.id) continue;
							i?.throwIfAborted();
							const e = await t(o.id), c = [];
							for (const t of e.values()) {
								if (i?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
								s += 1;
								const e = gn(o.id, t);
								e && c.push(e);
							}
							if (0 === c.length) continue;
							const { request: u, transfer: d } = pn(c.map((e) => e.wire)), m = await a.computeCircadian(l(u, d));
							i?.throwIfAborted();
							const p = new Map(c.map((e) => [e.wire.id, e.source]));
							for (const t of m.day_summaries) {
								const e = p.get(t.id);
								t.has_signal && e && r.push({
									fileId: o.id,
									date: t.analysis_date,
									source: e,
									l5Hour: (t.l5_midpoint_minutes ?? 0) / 60,
									m10Hour: (t.m10_midpoint_minutes ?? 0) / 60,
									relativeAmplitude: t.relative_amplitude ?? null,
									validHours: t.valid_hours
								});
							}
						}
						return {
							totalFiles: e.length,
							totalDays: s,
							daysWithSignal: r.length,
							meanRelativeAmplitude: null,
							meanL5Hour: null,
							meanM10Hour: null,
							interdailyStability: null,
							intradailyVariability: null,
							daySummaries: r,
							perParticipant: []
						};
					}(t.length > 0 ? a.files.filter((e) => null != e.id && t.includes(e.id)) : a.files, (e) => Qo(a, e), {
						dateRange: n,
						signal: i
					});
				}(n, {
					fileIds: c,
					dateRange: a.dateRange,
					signal: s
				});
				for (const t of e.daySummaries) u.set(`${t.fileId}|${t.date}`, {
					l5Hour: t.l5Hour,
					m10Hour: t.m10Hour
				});
			} catch (f) {
				if (f instanceof zo) throw f;
				if (s?.throwIfAborted(), d = !0, f instanceof DOMException && "AbortError" === f.name) throw f;
			}
			const m = await rl(o[0].filename, "computing its sleep rows", () => async function(n, i, a, r, s, o, l) {
				const c = s && s.trim().length > 0 ? s.trim() : null, u = Ho(o, Lo.sleep, n), d = u.files, m = vn(u.studySettings[0]?.extraSettings), p = nt(u.studySettings[0]?.extraSettings?.analysis_paradigm), f = (n.length > 0 ? d.filter((e) => null != e.id && n.includes(e.id)) : [...d]).sort((e, t) => e.filename.localeCompare(t.filename)), [h, _] = a ?? ["", ""], w = [], y = [], v = [], b = [], M = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), x = async () => {
					for (const [e, t] of M) k.set(e, await Sr(e, t, w, l));
					M.clear();
				}, S = /* @__PURE__ */ new Map(), I = (e) => {
					const t = JSON.stringify(e);
					let n = S.get(t);
					return n || (n = ne(l).exportNapAggregate(e), S.set(t, n)), n;
				}, T = await Promise.all(f.map((e) => Yo(o, e.id, i, l)));
				for (const [R, N] of f.entries()) {
					if (l?.throwIfAborted(), R > 0 && f[R - 1].filename !== N.filename && await x(), !N.id) continue;
					const n = Qo(u, N.id), { bundle: i, markersByAlgo: s } = T[R], o = i?.edits ?? [], d = i ? De(i.imported) : [], { zone: k } = await xn(N, m, l), S = [.../* @__PURE__ */ new Set([...N.availableDates, ...d.map((e) => e.nightDate)])].sort(), A = a ? S.filter((e) => e >= h && e <= _) : S;
					if (i) {
						const e = new Set(Le(i.imported).map((e) => e.night));
						for (const t of d) {
							if (e.has(t.night) || !A.includes(t.nightDate)) continue;
							const n = Te(t, s.get(t.nightDate)?.[0]).kind;
							"scored" !== n && "invalid" !== n && v.push({
								file: "sleep_export.csv",
								row: 0,
								key: `${C.filename.header}=${N.filename}|${C.study_date.header}=${t.nightDate}`,
								column: `GGIR night ${String(t.night)}: ${Fe(i.imported, t.night)}`,
								reason: "ggir_night_excluded"
							});
						}
					}
					const E = ce(n.values()), $ = tt(N, p) ? u.actiwareFileData.find((e) => e.fileId === N.id) ?? null : null, D = $?.actiwareIntervals ?? null;
					for (const a of A) {
						l?.throwIfAborted();
						const u = s.get(a);
						if (u && 0 !== u.length) for (const s of u) {
							if (!s.isInvalidNight && 0 === s.sleepMarkers.length && 0 === s.nonwearMarkers.length) continue;
							const u = N.participantId ?? null, m = N.id, p = s.algorithm ?? null, f = s.username ?? null, h = s.needsConsensus, _ = s.notes, v = n.get(a), x = await O(a, void 0, ne(l)), S = n.get(x), T = {
								fileId: m,
								filename: N.filename,
								participantId: u,
								studyDate: a,
								algorithm: p,
								scoredBy: f,
								needsConsensus: h,
								notes: _,
								meanTemperature: null,
								meanWhiteLight: null,
								meanRedLight: null,
								meanGreenLight: null,
								meanBlueLight: null,
								detectionRule: s.detectionRule ?? null,
								periodGuider: s.periodGuider ?? null,
								...vr(s.sleepPeriodDetectionConfig),
								algorithmVersion: s.algorithmVersion ?? null,
								verificationStatus: null,
								studyId: c,
								dstTransition: await mt(k, a, void 0, ne(l))
							}, A = D ? ar(D, a, s.isInvalidNight) : s.sleepMarkers, R = await I(A.filter((e) => e.markerType === g.NAP).map((e) => ({
								start: e.onsetTimestamp,
								end: e.offsetTimestamp
							}))), B = r?.get(`${String(m)}|${a}`), L = {
								l5Hour: B?.l5Hour ?? null,
								m10Hour: B?.m10Hour ?? null,
								napCount: R.napCount,
								totalNapMinutes: R.napCount > 0 ? R.totalNapMinutes : null
							}, P = s.nonwearMarkers.map((e) => ({
								start: e.startTimestamp,
								end: e.endTimestamp
							})), F = E(p), W = _n(v, F), j = `${N.filename}\0${u ?? ""}\0${T.algorithm ?? ""}\0${T.detectionRule ?? ""}`, G = M.get(j) ?? [];
							G.push({
								date: a,
								epochLengthSeconds: N.epochLengthSeconds || 60,
								timestamps: W.timestamps,
								states: W.algorithmResults,
								stale: "stale" === F.status
							}), M.set(j, G);
							const U = v?.temperature ? new Float64Array(v.temperature) : null, z = ae(v).timestamps, V = S?.temperature ? new Float64Array(S.temperature) : null, H = ae(S).timestamps, q = await On(n, a, F, { signal: l }), K = async (e, t, n) => {
								if (!t || !n) return null;
								const i = (e) => e ? new Float64Array(e) : null;
								return mr([[i(v?.[e]), z], [i(S?.[e]), H]], t, n, l);
							}, J = (e, t) => mr([[U, z], [V, H]], e, t, l), Y = async (n, r) => {
								let c = null;
								const u = d.find((e) => e.nightDate === a), m = i && u && n.markerType === g.MAIN_SLEEP && "invalid" !== Te(u, s).kind, p = u && o.some((e) => e.night === u.night), f = br(null), h = {};
								let _ = "not_applicable_to_row";
								const w = D && null != n.onsetTimestamp && null != n.offsetTimestamp ? {
									onset: n.onsetTimestamp,
									offset: n.offsetTimestamp
								} : null, y = w ? D.find((e) => "rest" === e.kind && e.startTimestamp <= w.onset && e.endTimestamp >= w.offset) ?? null : null;
								if (w) {
									_ = "not_computed_for_export";
									const e = (e, t) => t ? $?.actiwareStatistics?.find((n) => n.kind === e && Math.round(n.startTimestamp) === Math.round(t.startTimestamp) && Math.round(n.endTimestamp) === Math.round(t.endTimestamp)) ?? null : null, t = {
										rest: e("rest", y),
										sleep: e("sleep", {
											startTimestamp: w.onset,
											endTimestamp: w.offset
										})
									};
									for (const [n, i, a, r] of kr) {
										const e = t[i]?.[a] ?? null;
										f[n] = e, h[r] = null == e ? t[i] ? "source_reported_missing" : "not_computed_for_export" : void 0;
									}
								}
								if (!m && !w && n.onsetTimestamp && n.offsetTimestamp) {
									const { timestamps: e, algorithmResults: t, activity: i, scoresStale: a } = q;
									if (null !== a && 0 === b.length && b.push({
										component: "metric_computation",
										code: "unavailable",
										message: a
									}), _ = null !== a ? "scores_from_another_config" : null == t ? "no_scored_epochs" : null == i ? "channel_unavailable" : 0 === e.length ? "no_valid_epochs" : void 0, null != t && e.length > 0 && (null != i || ae(v).ggir)) {
										const a = ae(v).ggir ? ae(v).epochSec : N.epochLengthSeconds || 60, r = await xr(t, i, e, n.onsetTimestamp, n.offsetTimestamp, a, l);
										c = r.metrics, c || r.error || (_ = "no_valid_epochs"), r.error && (_ = "not_computed_for_export"), r.error && 0 === b.length && b.push({
											component: "metric_computation",
											code: "unavailable",
											message: "Metric computation failed for at least one selected period; those rows carry no numerics."
										});
									}
								}
								if (m) {
									_ = "channel_unavailable";
									const n = p ? i.current?.nights : i.imported.nights, a = n ? t(n, C.ggir_night.header, u.night) : -1;
									for (const [t, i, r, s] of Mr) {
										const o = n ? e(n, C[i].header, a) : null;
										f[t] = null == o ? null : o * s, h[r] = null == o ? p ? "not_computed_for_export" : "source_reported_missing" : void 0;
									}
								}
								(m || w || c && !("averageAwakeningLengthMinutes" in c)) && (h.average_awakening_length_minutes = "not_computed_for_export");
								const M = await ne(l).exportPeriodFigures(n.onsetTimestamp, n.offsetTimestamp, P), k = Boolean(n.onsetTimestamp && n.offsetTimestamp), x = {
									...T,
									...L,
									periodIndex: n.markerIndex,
									markerType: n.markerType,
									onsetTimestamp: n.onsetTimestamp,
									offsetTimestamp: n.offsetTimestamp,
									...m || w ? f : br(c),
									inBedTimestamp: y?.startTimestamp ?? null,
									outOfBedTimestamp: y?.endTimestamp ?? null,
									metricMissingReason: _,
									isInvalidNight: r,
									meanTemperature: n.onsetTimestamp && n.offsetTimestamp ? await J(n.onsetTimestamp, n.offsetTimestamp) : null,
									meanWhiteLight: await K("lux", n.onsetTimestamp, n.offsetTimestamp),
									meanRedLight: await K("redLight", n.onsetTimestamp, n.offsetTimestamp),
									meanGreenLight: await K("greenLight", n.onsetTimestamp, n.offsetTimestamp),
									meanBlueLight: await K("blueLight", n.onsetTimestamp, n.offsetTimestamp),
									sleepMidpointTimestamp: k ? M.midpointTimestamp : null,
									sleepMidpointHour: k ? M.midpointClockHour : null,
									validWearMinutes: M.validWearMinutes
								}, I = (e, t) => null != e ? void 0 : k ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
								return x.sensorMissingReasons = {
									mean_temperature_c: I(x.meanTemperature, Boolean(v?.temperature || S?.temperature)),
									mean_white_light_lux: I(x.meanWhiteLight, Boolean(v?.lux || S?.lux)),
									mean_red_light: I(x.meanRedLight, Boolean(v?.redLight || S?.redLight)),
									mean_green_light: I(x.meanGreenLight, Boolean(v?.greenLight || S?.greenLight)),
									mean_blue_light: I(x.meanBlueLight, Boolean(v?.blueLight || S?.blueLight))
								}, x.derivedMissingReasons = {
									...h,
									l5_hour: null == x.l5Hour ? B ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									m10_hour: null == x.m10Hour ? B ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									sleep_midpoint_time: null == x.sleepMidpointTimestamp ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									sleep_midpoint_hour: null == x.sleepMidpointHour ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									valid_wear_minutes: null == x.validWearMinutes ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0
								}, x;
							};
							if (s.isInvalidNight) {
								w.push({
									...T,
									...L,
									periodIndex: null,
									markerType: _r,
									onsetTimestamp: null,
									offsetTimestamp: null,
									...br(null),
									isInvalidNight: !0,
									sleepMidpointTimestamp: null,
									sleepMidpointHour: null,
									validWearMinutes: null
								});
								for (const e of A) w.push(await Y(e, !0));
							} else for (const e of A) w.push(await Y(e, !1));
							for (const e of s.nonwearMarkers) y.push({
								...T,
								...L,
								periodIndex: e.markerIndex ?? 0,
								markerType: wr,
								onsetTimestamp: e.startTimestamp,
								offsetTimestamp: e.endTimestamp,
								...br(null),
								isInvalidNight: !1,
								sleepMidpointTimestamp: null,
								sleepMidpointHour: null,
								validWearMinutes: null
							});
						}
					}
				}
				await x(), w.sort(Ir), y.sort(Ir);
				const A = await async function(e, t) {
					const n = e.filter((e) => e.markerType === g.MAIN_SLEEP), i = /* @__PURE__ */ new Map();
					for (const o of n) {
						const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = i.get(e);
						t ? t.push(o) : i.set(e, [o]);
					}
					const a = [...i], r = await ne(t).summarizeExportGroups(a.map(([, e]) => e.map((e) => ({
						study_date: e.studyDate,
						total_nap_minutes: e.totalNapMinutes,
						values: Tr.map(([, t]) => e[t])
					})))), s = a.map(([e, t], n) => {
						const [i, a, s, o] = e.split("\0"), l = r[n], c = Object.fromEntries(Tr.map(([e], t) => [e, l.means[t] ?? null]));
						return {
							filename: i,
							participantId: a,
							algorithm: s,
							detectionRule: o,
							nNights: l.nNights,
							...c,
							meanTemperatureMissingReason: null == c.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
							metricMissingReasons: Object.fromEntries(Tr.map(([e, n]) => {
								const i = Ar[e], a = Mr.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : i), r = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[a] ?? e.metricMissingReason).find(Boolean);
								return [i, null == c[e] ? r : void 0];
							})),
							sleepRegularityIndex: null,
							meanTotalNapMinutes: l.meanTotalNapMinutes,
							studyId: t[0]?.studyId ?? null
						};
					});
					return s.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), s;
				}(w, l);
				for (const e of A) {
					const t = `${e.filename}\0${e.participantId}\0${e.algorithm}\0${e.detectionRule}`, n = k.get(t);
					e.sleepRegularityIndex = n?.sri ?? null, e.sleepRegularityMissingReason = n?.sriMissingReason ?? (n ? void 0 : "not_computed_for_export");
				}
				return {
					sleepRows: w,
					nonwearRows: y,
					summaryRows: A,
					degradations: b,
					nightReasons: v
				};
			}(c, a.username, a.dateRange, u, a.studyId, n, s)), p = await rl(o[0].filename, "drawing its visual report", async () => {
				const e = [];
				for (const t of o) e.push(await Sa({
					...a,
					snapshot: n
				}, t, s));
				return e;
			});
			return {
				part: m,
				physicalActivityRows: await ro(c, a.dateRange, {
					username: a.username,
					cutpointOverrides: a.physicalActivity.cutpointOverrides,
					maskPolicy: a.physicalActivity.maskPolicy,
					choiAxis: a.physicalActivity.choiAxis,
					exportedAt: a.exportedAt,
					...s ? { signal: s } : {}
				}, r),
				eventMarkerRows: await ss(c, a.dateRange, n, a.username, s),
				circadianDegraded: d,
				reports: p
			};
		}(i, a, r, {
			db: n,
			signal: s
		})
	}, x = {
		username: i.username,
		studyId: i.studyId,
		dateRange: i.dateRange,
		physicalActivity: i.physicalActivity,
		exportedAt: M,
		generatedAt: f.generatedAt
	}, S = _.map(() => {
		const e = {};
		return e.promise = new Promise((t, n) => {
			e.resolve = t, e.reject = n;
		}), e.promise.catch(() => {}), e;
	});
	let I = 0, T = _.length, A = 0;
	r.progress?.(0, _.length, gi), Promise.all(Array.from({ length: Math.min(k.size, _.length) }, async () => {
		for (; I < T;) {
			const t = I++;
			try {
				S[t].resolve(await k.run(p, _[t].map((e) => e.id), x)), r.progress?.(++A, _.length, gi);
			} catch (e) {
				T = Math.min(T, t), S[t].reject(e);
			}
		}
	}));
	try {
		for (const e of S) {
			s?.throwIfAborted();
			const t = await e.promise;
			w.push(t.part);
			for (const e of t.reports) f.add(e);
			y.push(...t.physicalActivityRows), v.push(...t.eventMarkerRows), b ||= t.circadianDegraded;
		}
	} finally {
		T = 0;
	}
	if (r.progress?.(0, 0, fi), await il(n, i.fileIds) !== c) throw new li(null, "computing physical activity, because its inputs changed during the export");
	s?.throwIfAborted();
	const R = function(e) {
		return {
			sleepRows: e.flatMap((e) => e.sleepRows),
			nonwearRows: e.flatMap((e) => e.nonwearRows),
			summaryRows: e.flatMap((e) => e.summaryRows),
			degradations: e.flatMap((e) => e.degradations).slice(0, 1),
			nightReasons: e.flatMap((e) => e.nightReasons ?? [])
		};
	}(w), N = await async function(e, t, n, i, a) {
		a?.throwIfAborted();
		const r = Ho(n, Lo.actiwareInterval, e), s = r.studySettings[0]?.extraSettings?.analysis_paradigm, o = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), l = [];
		for (const c of o) {
			a?.throwIfAborted();
			const e = r.actiwareFileData.find((e) => e.fileId === c.id), n = Ko(r, c.id, i), o = [...n].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort(), u = r.actiwareStatisticsInputs.find((e) => e.fileId === c.id), d = (e) => ne(a).actiwareIntervalStatistics(e), m = tt(c, s), p = m ? await or(e?.actiwareIntervals, u?.input, o, d) : await dr({
				file: e ?? {},
				statisticsInput: u?.input
			}, n, d, a);
			a?.throwIfAborted();
			const g = await Kr({
				...c,
				...e,
				actiwareStatistics: p ?? []
			}, t, a, m ? { invalidDates: o } : void 0), f = new Set(n.keys()), h = new Set(o.filter((e) => !t || e >= t[0] && e <= t[1]));
			l.push(...Jr(g.filter((e) => f.has(e.studyDate)), h, c));
		}
		return l;
	}(i.fileIds, i.dateRange, p, i.username, s), E = {}, $ = function(e) {
		const t = Ho(e, Lo.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(p);
	if ($ && (E["audit_log.jsonl"] = $), o.ggirResults) {
		const e = await o.ggirResults(Ho(p, Lo.ggirResults), s);
		for (const [t, n] of Object.entries(e)) {
			if (t in E) throw new Error(`${mi}${t}`);
			E[t] = n;
		}
	}
	const D = Ho(p, Lo.actiwareSleepWake);
	let B = 0;
	for (const e of D.files) {
		const t = D.actiwareFileData.find((t) => t.fileId === e.id)?.actiwareSleepWake;
		t && (B += await us(t, i.dateRange, new Set(Ko(D, e.id, i.username).keys()), ne(s)));
	}
	const L = Ho(p, Lo.manifest), P = Object.fromEntries(R.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	b ||= R.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const F = [...b ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...R.degradations], W = function(e, t) {
		const n = {}, i = {}, a = {}, r = new Map(t.map((e) => [e.fileId, e]));
		for (const s of e) {
			const e = r.get(s.fileId), t = void 0 === e?.notApplied ? s.ggirCorrections ?? e?.ggirCorrections : void 0;
			if (!t) {
				void 0 !== e?.notApplied && (a[String(s.fileId)] = e.notApplied);
				continue;
			}
			const { notApplied: o, ...l } = t;
			n[String(s.fileId)] = l;
			const c = i[t.profile] ??= { notApplied: [] };
			for (const n of o ?? []) c.notApplied.some((e) => e.correction === n.correction) || c.notApplied.push({ ...n });
		}
		return {
			ggirCorrections: n,
			ggirCorrectionProfiles: i,
			ggirCorrectionsNotApplied: a
		};
	}(L.ggirResultsBundles, L.ggirCorrectedValues), j = await rl(null, "reading saved GGIR source provenance", () => async function(e, t = ne()) {
		return Object.fromEntries(await Promise.all(e.map(async (e) => {
			const [n, i] = await Promise.all([t.ggirAppConfigSummary(e.configCsv, !1), t.ggirNonwearApproach(e.configCsv)]);
			return [String(e.fileId), {
				configGgirVersion: n.configGgirVersion,
				nonwearApproach: i ?? null
			}];
		})));
	}(L.ggirResultsBundles, ne(s))), G = [...f.streamEntries()], z = await async function(e) {
		const t = e.deflate ?? {
			lanes: 1,
			block: (e, t) => Promise.resolve(function(e, t) {
				if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
				const n = [], i = new Zt(t?.byteLength ? {
					level: 1,
					dictionary: t
				} : { level: 1 }, (e) => {
					n.push(e);
				});
				i.push(e, !1), i.flush(!1);
				const a = i.s.r ?? 0;
				if (!Number.isInteger(a) || a < 0 || a > 2047) throw new Error("ZIP compression state is unreadable.");
				const r = (7 & a) > 5 ? 2 : 1, s = new Uint8Array(r + 4);
				return s[0] = a >> 3, s[r + 2] = 255, s[r + 3] = 255, n.push(s), ye(n);
			}(e, t))
		};
		if (!navigator.storage?.getDirectory) throw new Error("Streaming export requires temporary workspace storage (OPFS).");
		const n = await (await (await navigator.storage.getDirectory()).getDirectoryHandle(si, { create: !0 })).getDirectoryHandle(e.scratchId, { create: !0 }), i = await n.getFileHandle(Fi, { create: !0 }), a = await n.getFileHandle("bundle.zip", { create: !0 }), r = new CompressionStream("gzip"), s = r.readable.pipeTo(await i.createWritable());
		s.catch(() => {});
		const o = r.writable.getWriter(), l = await a.createWritable();
		let c = [], d = 0, p = e.artifacts.importRefusalReasons?.length ?? 0;
		const g = [], f = new rn((e, t) => {
			if (e) throw e;
			c.push(t);
		}), h = async (e = 0) => {
			d = Math.max(d, e + c.reduce((e, t) => e + t.byteLength, 0));
			for (const t of c) await l.write(t);
			c = [];
		}, _ = /* @__PURE__ */ new Set();
		let w = 0;
		const y = async (n, i) => {
			if (_.has(n)) throw new Error(`${mi}${n}`);
			_.add(n);
			const a = new fs(n), r = new q();
			let s = 0;
			f.add(a);
			const { blockBytes: o, inFlight: l } = function(e) {
				const t = Math.min(2 * e + 1, Math.floor(24)), n = Math.floor(1572864 / t) - 32768;
				return {
					blockBytes: n - n % 4096,
					inFlight: t - 1
				};
			}(t.lanes), c = [];
			let u = new Uint8Array(o), m = 0, p = /* @__PURE__ */ new Uint8Array(0), y = 0;
			const v = () => y + m + p.byteLength + c.length * (o + 32768), b = async () => {
				a.emit(await c.shift(), !1), await h(v());
			}, M = async () => {
				const e = u.subarray(0, m), n = e.slice(-32768);
				for (c.push(t.block(e, p)), p = n, u = new Uint8Array(o), m = 0; c.length > l;) await b();
			};
			try {
				for await (const t of i) {
					y = t.byteLength;
					for (let n = 0; n < t.byteLength; n += ps) {
						e.signal?.throwIfAborted();
						const i = t.subarray(n, n + ps);
						r.update(i), a.push(i, !1), s += i.byteLength;
						for (let e = 0; e < i.byteLength;) {
							const t = Math.min(i.byteLength - e, o - m);
							u.set(i.subarray(e, e + t), m), m += t, e += t, m === o && await M();
						}
						d = Math.max(d, v());
					}
				}
				for (y = 0, m && await M(); c.length;) await b();
			} finally {
				for (const e of c) e.catch(() => {});
			}
			a.push(/* @__PURE__ */ new Uint8Array(), !0), a.emit(gs, !0), await h(), g.push({
				name: n,
				contentHash: H(r.finalize()),
				byteLength: s
			}), e.progress?.(g.length, w, fi);
		};
		try {
			await o.write(new TextEncoder().encode(Wi(e.artifacts.importRefusalReasons ?? [])));
			const t = [...nl({
				columns: e.options.selectedColumns?.length ?? 0,
				...e.options,
				artifacts: e.artifacts
			}).map((e) => ({
				...e,
				chunks: void 0
			})), ...[...e.extraEntries ?? []].map((e) => ({
				name: e.name,
				write: () => /* @__PURE__ */ new Uint8Array(),
				batches: void 0,
				chunks: e.chunks
			}))];
			w = t.filter((e) => e.write).length + 2, e.progress?.(0, w, fi);
			for (const i of t) if (i.write) try {
				"actiware_sleep_wake_export.csv" === i.name ? await y(i.name, async function* () {
					for await (const t of e.sleepWake) e.signal?.throwIfAborted(), p += t.reasonRows, d = Math.max(d, t.bytes.byteLength + t.reasons.byteLength), await o.write(t.reasons), yield t.bytes;
				}()) : i.name.endsWith(".csv") ? await y(i.name, async function* () {
					let t = 0, n = !1, a = !1;
					const r = "actiware_intervals_export.csv" === i.name ? function* () {
						for (const t of e.artifacts.actiwareIntervalRows ?? []) {
							const [e, n] = m(Xr([t], !0)).records, i = u(n.text);
							yield new Map(u(e.text).map((e, t) => [e, i[t] ?? ""]));
						}
					} : void 0;
					for await (const e of i.batches?.() ?? hs(i.chunks ?? [i.write()])) {
						if (e.bytes.byteLength > 4 * ps) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
						const s = Ui(e.text ?? new TextDecoder().decode(e.bytes), i.name, !0, {
							fullRowCsv: e.fullRowCsv,
							rowOffset: t,
							...r ? { contextRows: r } : {}
						});
						let l, c = "";
						for (;;) {
							const t = s.next();
							if (t.done) {
								l = t.value;
								break;
							}
							if (c += Wi([t.value], !1), p += 1, c.length >= ps / 2) {
								const t = new TextEncoder().encode(c);
								d = Math.max(d, e.bytes.byteLength + t.byteLength), await o.write(t), c = "";
							}
						}
						await o.write(new TextEncoder().encode(c));
						const u = n ? (a ? "" : "\n") + l.csv.slice(l.csv.indexOf("\n") + 1) : l.csv;
						n = !0, t += e.rows ?? 0, a = u.endsWith("\n");
						const m = new TextEncoder().encode(u);
						d = Math.max(d, e.bytes.byteLength + m.byteLength + 2 * c.length), yield m;
					}
				}()) : await y(i.name, i.chunks ?? [i.write()]);
			} catch (v) {
				throw new Error(`Export failed while writing ${i.name}`, { cause: v });
			}
			await o.close(), await s, await y(Fi, async function* () {
				const e = (await i.getFile()).stream().pipeThrough(new DecompressionStream("gzip")).getReader();
				try {
					for (;;) {
						const t = await e.read();
						if (t.done) break;
						yield t.value;
					}
				} finally {
					e.releaseLock();
				}
			}());
			const n = await async function(e) {
				const t = Object.entries(e.entries).sort(([e], [t]) => e.localeCompare(t)), n = Array.isArray(e.entries) ? [...e.entries].sort((e, t) => e.name.localeCompare(t.name)) : await Promise.all(t.map(async ([e, t]) => ({
					name: e,
					contentHash: await Er(t),
					byteLength: t.length
				})));
				return {
					schemaVersion: 7,
					contentHashAlgorithm: "sha256",
					appVersion: e.appVersion,
					buildTime: e.buildTime ?? null,
					exportedAt: e.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
					studyId: e.studyId ?? null,
					dateRange: e.dateRange ?? null,
					scoringRecipe: e.scoringRecipe ?? null,
					algorithmVersions: e.algorithmVersions ?? {},
					rulesetVersions: e.rulesetVersions ?? {},
					diarySourceHash: e.diarySourceHash ?? null,
					diaryTemporalPolicy: e.diaryTemporalPolicy ?? null,
					physicalActivity: e.physicalActivity ?? null,
					validDayCriteria: e.validDayCriteria ?? null,
					diaryTemporalPolicyByFile: e.diaryTemporalPolicyByFile ?? {},
					ggirSources: e.ggirSources ?? {},
					ggirCorrections: e.ggirCorrections ?? {},
					ggirCorrectionProfiles: e.ggirCorrectionProfiles ?? {},
					ggirCorrectionsNotApplied: e.ggirCorrectionsNotApplied ?? {},
					executionAttestationIds: [...e.executionAttestationIds ?? []].sort(),
					degradations: [...e.degradations ?? []],
					files: n
				};
			}({
				...e.manifest,
				entries: g
			});
			return await y(di, [new TextEncoder().encode(Cr(n))]), f.end(), await h(), e.signal?.throwIfAborted(), await l.close(), {
				blob: await new Response((await a.getFile()).stream()).blob(),
				entries: g,
				peakBufferedBytes: d,
				reasonRows: p
			};
		} catch (b) {
			throw f.terminate(), await Promise.allSettled([
				o.abort(),
				l.abort(),
				s
			]), b;
		}
	}({
		artifacts: {
			importRefusalReasons: [
				...Xo(p),
				...Do(p),
				...Oo(p),
				...R.nightReasons ?? []
			],
			...R,
			physicalActivityRows: y,
			physicalActivityEnabledClasses: i.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: i.physicalActivity.nonwearAsClass,
			ggirEntries: E,
			eventMarkerRows: v,
			actiwareIntervalRows: N,
			actiwareSleepWakeCsv: {
				rows: B,
				bytes: /* @__PURE__ */ new Uint8Array(),
				reasonChunks: []
			}
		},
		extraEntries: G,
		options: i,
		manifest: {
			...i.manifest,
			physicalActivity: i.physicalActivity,
			exportedAt: M,
			algorithmVersions: P,
			degradations: F,
			ggirSources: j,
			...W,
			executionAttestationIds: L.localExecutions.map((e) => e.attestationId),
			diaryTemporalPolicyByFile: Object.fromEntries(L.files.map((e) => [String(e.id), Object.fromEntries(L.diaryEntries.filter((t) => t.fileId === e.id).map((e) => [e.analysisDate, e.importMappingProvenance?.diaryTemporalPolicy ?? null]))]))
		},
		sleepWake: ds(i.fileIds, i.dateRange, p, i.username, s),
		scratchId: a,
		...s ? { signal: s } : {},
		...k.deflate ? { deflate: k.deflate } : {},
		...r.progress ? { progress: r.progress } : {}
	});
	return {
		...z,
		actiwareSleepWakeRows: B,
		degradations: F,
		ggirCorrected: $o(W),
		hasData: R.sleepRows.length > 0 || R.nonwearRows.length > 0 || y.length > 0 || z.entries.some((e) => G.some((t) => t.name === e.name)) || Object.keys(E).length > 0,
		rowCount: R.sleepRows.length + R.nonwearRows.length + R.summaryRows.length + y.length,
		dayCount: (/* @__PURE__ */ new Set([
			...R.sleepRows.map((e) => e.studyDate),
			...R.nonwearRows.map((e) => e.studyDate),
			...y.map((e) => e.analysisDate)
		])).size,
		fileCount: p.files.length
	};
}
async function rl(e, t, n) {
	try {
		return await n();
	} catch (i) {
		if (i instanceof DOMException && "AbortError" === i.name) throw i;
		throw new li(e, t, i);
	}
}
function sl(e, t = /* @__PURE__ */ new Set()) {
	if (e instanceof ArrayBuffer) t.add(e);
	else if (ArrayBuffer.isView(e)) t.add(e.buffer);
	else if (e && "object" == typeof e) for (const n of Object.values(e)) sl(n, t);
	return [...t];
}
function ol(e, t) {
	const n = [], i = [], a = [];
	let s;
	const o = new Promise((e, t) => {
		s = t;
	});
	o.catch(() => {});
	const c = (e) => {
		const t = e.message;
		s(/* @__PURE__ */ new Error(`An export shard stopped before finishing its work: ${"messageerror" === e.type ? "a message from it could not be read" : t?.length ? t : "its script failed to load"}.`));
	}, u = async (e) => {
		const s = await (() => {
			const e = i.pop();
			if (e) return Promise.resolve(e);
			if (n.length < t) {
				const e = new Worker(new URL("/sleep-scoring-wasm/assets/local-export-shard-worker-BMJO1xbL.js", "" + import.meta.url), { type: "module" });
				return e.addEventListener("error", c), e.addEventListener("messageerror", c), n.push(e), Promise.resolve(r(e));
			}
			return new Promise((e) => {
				a.push(e);
			});
		})();
		try {
			return await Promise.race([e(s), o]);
		} finally {
			const e = a.shift();
			e ? e(s) : i.push(s);
		}
	};
	return {
		runner: {
			size: t,
			run: (t, n, i) => u(async (a) => {
				const r = function(e, t) {
					const n = Po.get(e);
					if (!n) throw new zo("Export requires a captured input snapshot");
					const i = new Set(Uo.flatMap((e) => Object.keys(Lo[e])));
					return Object.fromEntries([...i].map((e) => [e, (n[e] ?? []).filter((n) => "studySettings" === e || t.includes("files" === e ? n.id : n.fileId)).map(jo)]));
				}(t, n), s = await a.group(e, n, l(r, sl(r)), i);
				if ("failure" in s) throw li.fromWire(s.failure);
				return s.result;
			}),
			deflate: {
				lanes: t,
				block: (e, t) => u((n) => n.deflate(l(e, [e.buffer]), l(t, [t.buffer])))
			}
		},
		terminate: () => {
			for (const e of n) e.terminate();
		}
	};
}
a({ async build(e, t, n, i) {
	const a = new y(e), r = ol(e, Math.max(1, Math.min(8, (navigator.hardwareConcurrency || 2) - 2)));
	let s;
	try {
		return s = await (await (await (await (await navigator.storage.getDirectory()).getDirectoryHandle(si, { create: !0 })).getDirectoryHandle(n, { create: !0 })).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await a.open(), await al(a, t, n, {
			...i ? { progress: i } : {},
			binaryStore: s,
			groups: r.runner
		});
	} catch (o) {
		if (o instanceof li) return { failure: o.wire };
		throw o;
	} finally {
		r.terminate(), s?.close(), a.close();
	}
} });
export { qa as A, pn as B, dr as C, Na as D, Wa as E, Dn as F, dn as G, on as H, Nn as I, En as L, Ha as M, Va as N, Ka as O, Ia as P, xn as R, or as S, ja as T, cn as U, gn as V, ln as W, lr as _, Ps as a, ar as b, Cs as c, As as d, Ns as f, Ya as g, Is as h, Bs as i, Da as j, Ra as k, Rs as l, Ms as m, yo as n, $s as o, xs as p, Js as r, Os as s, so as t, Ts as u, ur as v, Ga as w, rr as x, cr as y, bn as z };
