import { An as e, Dn as t, Gt as n, Ht as r, Nt as i, Ut as s, Wt as a, _ as o, a as l, c, en as u, f as d, o as p, s as m, u as g, wn as f, wt as h } from "./schema-B_tCLPTi.js";
import { a as _, c as w, n as v, r as y, s as b } from "./workers-ChOvAmOP.js";
import { J as k, K as x, M, W as S, c as I, h as T, l as A, ot as R, q as E, t as C } from "./workspace-db-C0mqPCjA.js";
import { l as N, n as $, s as O } from "./content-hash-LIzlxz9S.js";
import { _ as j, a as B, d as D, g as P, l as L, n as F, t as W } from "./background-jobs-CKsUPhWg.js";
import { a as z, n as G } from "./raw-pass-pool-l8NmGfLx.js";
import { A as V, D as U, E as H, M as q, N as K, O as J, P as Y, j as Z, k as Q, p as X, v as ee } from "./nonwear-display-slots-DjTz9tyY.js";
import { a as te } from "./project-revision-BP4u1UU7.js";
import { $t as ne, A as re, At as ie, F as se, I as ae, J as oe, Jt as le, K as ce, P as ue, Qt as de, S as pe, Ut as me, an as ge, qt as fe } from "./store-DM814ES4.js";
import { P as he, U as _e, d as we, h as ve, u as ye } from "./night-session-registry-7UYyF_Uo.js";
import { d as be, l as ke, p as xe } from "./sleep-period-detection-DACRcT22.js";
import { _ as Me, a as Se, d as Ie, i as Te, m as Ae, o as Re, p as Ee, t as Ce, u as Ne, y as $e } from "./ggir-results-import-DOiSthZb.js";
import { B as Oe, E as je, I as Be, L as De, N as Pe, R as Le, c as Fe } from "./local-nonwear-unified-BxFayBM2.js";
import { S as We, a as ze, f as Ge, h as Ve, i as Ue, m as He, n as qe, r as Ke, s as Je, v as Ye } from "./valid-day-criteria-BvWW5KT6.js";
import { h as Ze, m as Qe, v as Xe } from "./diary-local-import-contract-DhSboCi-.js";
import { n as et, r as tt, t as nt } from "./ggir-results-types-MD4BmR_K.js";
var rt = Uint8Array, it = Uint16Array, st = Int32Array, at = new rt([
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
]), ot = new rt([
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
]), lt = new rt([
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
]), ct = function(e, t) {
	for (var n = new it(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
	var i = new st(n[30]);
	for (r = 1; r < 30; ++r) for (var s = n[r]; s < n[r + 1]; ++s) i[s] = s - n[r] << 5 | r;
	return {
		b: n,
		r: i
	};
}, ut = ct(at, 2), dt = ut.b, pt = ut.r;
dt[28] = 258, pt[258] = 28;
for (var mt = ct(ot, 0), gt = (mt.b, mt.r), ft = new it(32768), ht = 0; ht < 32768; ++ht) {
	var _t = (43690 & ht) >> 1 | (21845 & ht) << 1;
	_t = (61680 & (_t = (52428 & _t) >> 2 | (13107 & _t) << 2)) >> 4 | (3855 & _t) << 4, ft[ht] = ((65280 & _t) >> 8 | (255 & _t) << 8) >> 1;
}
var wt = function(e, t, n) {
	for (var r = e.length, i = 0, s = new it(t); i < r; ++i) e[i] && ++s[e[i] - 1];
	var a, o = new it(t);
	for (i = 1; i < t; ++i) o[i] = o[i - 1] + s[i - 1] << 1;
	if (n) {
		a = new it(1 << t);
		var l = 15 - t;
		for (i = 0; i < r; ++i) if (e[i]) for (var c = i << 4 | e[i], u = t - e[i], d = o[e[i] - 1]++ << u, p = d | (1 << u) - 1; d <= p; ++d) a[ft[d] >> l] = c;
	} else for (a = new it(r), i = 0; i < r; ++i) e[i] && (a[i] = ft[o[e[i] - 1]++] >> 15 - e[i]);
	return a;
}, vt = new rt(288);
for (ht = 0; ht < 144; ++ht) vt[ht] = 8;
for (ht = 144; ht < 256; ++ht) vt[ht] = 9;
for (ht = 256; ht < 280; ++ht) vt[ht] = 7;
for (ht = 280; ht < 288; ++ht) vt[ht] = 8;
var yt = new rt(32);
for (ht = 0; ht < 32; ++ht) yt[ht] = 5;
var bt = wt(vt, 9, 0), kt = wt(yt, 5, 0), xt = function(e) {
	return (e + 7) / 8 | 0;
}, Mt = function(e, t, n) {
	return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new rt(e.subarray(t, n));
}, St = [
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
], It = function(e, t, n) {
	var r = new Error(t || St[e]);
	if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, It), !n) throw r;
	return r;
}, Tt = function(e, t, n) {
	n <<= 7 & t;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8;
}, At = function(e, t, n) {
	n <<= 7 & t;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8, e[r + 2] |= n >> 16;
}, Rt = function(e, t) {
	for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({
		s: r,
		f: e[r]
	});
	var i = n.length, s = n.slice();
	if (!i) return {
		t: Bt,
		l: 0
	};
	if (1 == i) {
		var a = new rt(n[0].s + 1);
		return a[n[0].s] = 1, {
			t: a,
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
	}; u != i - 1;) o = n[n[c].f < n[d].f ? c++ : d++], l = n[c != u && n[c].f < n[d].f ? c++ : d++], n[u++] = {
		s: -1,
		f: o.f + l.f,
		l: o,
		r: l
	};
	var p = s[0].s;
	for (r = 1; r < i; ++r) s[r].s > p && (p = s[r].s);
	var m = new it(p + 1), g = Et(n[u - 1], m, 0);
	if (g > t) {
		r = 0;
		var f = 0, h = g - t, _ = 1 << h;
		for (s.sort(function(e, t) {
			return m[t.s] - m[e.s] || e.f - t.f;
		}); r < i; ++r) {
			var w = s[r].s;
			if (!(m[w] > t)) break;
			f += _ - (1 << g - m[w]), m[w] = t;
		}
		for (f >>= h; f > 0;) {
			var v = s[r].s;
			m[v] < t ? f -= 1 << t - m[v]++ - 1 : ++r;
		}
		for (; r >= 0 && f; --r) {
			var y = s[r].s;
			m[y] == t && (--m[y], ++f);
		}
		g = t;
	}
	return {
		t: new rt(m),
		l: g
	};
}, Et = function(e, t, n) {
	return -1 == e.s ? Math.max(Et(e.l, t, n + 1), Et(e.r, t, n + 1)) : t[e.s] = n;
}, Ct = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new it(++t), r = 0, i = e[0], s = 1, a = function(e) {
		n[r++] = e;
	}, o = 1; o <= t; ++o) if (e[o] == i && o != t) ++s;
	else {
		if (!i && s > 2) {
			for (; s > 138; s -= 138) a(32754);
			s > 2 && (a(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0);
		} else if (s > 3) {
			for (a(i), --s; s > 6; s -= 6) a(8304);
			s > 2 && (a(s - 3 << 5 | 8208), s = 0);
		}
		for (; s--;) a(i);
		s = 1, i = e[o];
	}
	return {
		c: n.subarray(0, r),
		n: t
	};
}, Nt = function(e, t) {
	for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
	return n;
}, $t = function(e, t, n) {
	var r = n.length, i = xt(t + 2);
	e[i] = 255 & r, e[i + 1] = r >> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
	for (var s = 0; s < r; ++s) e[i + s + 4] = n[s];
	return 8 * (i + 4 + r);
}, Ot = function(e, t, n, r, i, s, a, o, l, c, u) {
	Tt(t, u++, n), ++i[256];
	for (var d = Rt(i, 15), p = d.t, m = d.l, g = Rt(s, 15), f = g.t, h = g.l, _ = Ct(p), w = _.c, v = _.n, y = Ct(f), b = y.c, k = y.n, x = new it(19), M = 0; M < w.length; ++M) ++x[31 & w[M]];
	for (M = 0; M < b.length; ++M) ++x[31 & b[M]];
	for (var S = Rt(x, 7), I = S.t, T = S.l, A = 19; A > 4 && !I[lt[A - 1]]; --A);
	var R, E, C, N, $ = c + 5 << 3, O = Nt(i, vt) + Nt(s, yt) + a, j = Nt(i, p) + Nt(s, f) + a + 14 + 3 * A + Nt(x, I) + 2 * x[16] + 3 * x[17] + 7 * x[18];
	if (l >= 0 && $ <= O && $ <= j) return $t(t, u, e.subarray(l, l + c));
	if (Tt(t, u, 1 + (j < O)), u += 2, j < O) {
		R = wt(p, m, 0), E = p, C = wt(f, h, 0), N = f;
		var B = wt(I, T, 0);
		for (Tt(t, u, v - 257), Tt(t, u + 5, k - 1), Tt(t, u + 10, A - 4), u += 14, M = 0; M < A; ++M) Tt(t, u + 3 * M, I[lt[M]]);
		u += 3 * A;
		for (var D = [w, b], P = 0; P < 2; ++P) {
			var L = D[P];
			for (M = 0; M < L.length; ++M) {
				var F = 31 & L[M];
				Tt(t, u, B[F]), u += I[F], F > 15 && (Tt(t, u, L[M] >> 5 & 127), u += L[M] >> 12);
			}
		}
	} else R = bt, E = vt, C = kt, N = yt;
	for (M = 0; M < o; ++M) {
		var W = r[M];
		if (W > 255) {
			At(t, u, R[257 + (F = W >> 18 & 31)]), u += E[F + 257], F > 7 && (Tt(t, u, W >> 23 & 31), u += at[F]);
			var z = 31 & W;
			At(t, u, C[z]), u += N[z], z > 3 && (At(t, u, W >> 5 & 8191), u += ot[z]);
		} else At(t, u, R[W]), u += E[W];
	}
	return At(t, u, R[256]), u + E[256];
}, jt = new st([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), Bt = new rt(0), Dt = function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, r = 9; --r;) n = (1 & n && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), Pt = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
}, Lt = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new rt(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, r, i) {
			if (!i && (i = { l: 1 }, t.dictionary)) {
				var s = t.dictionary.subarray(-32768), a = new rt(s.length + e.length);
				a.set(s), a.set(e, s.length), e = a, i.w = s.length;
			}
			return function(e, t, n, r, i, s) {
				var a = s.z || e.length, o = new rt(r + a + 5 * (1 + Math.ceil(a / 7e3)) + i), l = o.subarray(r, o.length - i), c = s.l, u = 7 & (s.r || 0);
				if (t) {
					u && (l[0] = s.r >> 3);
					for (var d = jt[t - 1], p = d >> 13, m = 8191 & d, g = (1 << n) - 1, f = s.p || new it(32768), h = s.h || new it(g + 1), _ = Math.ceil(n / 3), w = 2 * _, v = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, y = new st(25e3), b = new it(288), k = new it(32), x = 0, M = 0, S = s.i || 0, I = 0, T = s.w || 0, A = 0; S + 2 < a; ++S) {
						var R = v(S), E = 32767 & S, C = h[R];
						if (f[E] = C, h[R] = E, T <= S) {
							var N = a - S;
							if ((x > 7e3 || I > 24576) && (N > 423 || !c)) {
								u = Ot(e, l, 0, y, b, k, M, I, A, S - A, u), I = x = M = 0, A = S;
								for (var $ = 0; $ < 286; ++$) b[$] = 0;
								for ($ = 0; $ < 30; ++$) k[$] = 0;
							}
							var O = 2, j = 0, B = m, D = E - C & 32767;
							if (N > 2 && R == v(S - D)) for (var P = Math.min(p, N) - 1, L = Math.min(32767, S), F = Math.min(258, N); D <= L && --B && E != C;) {
								if (e[S + O] == e[S + O - D]) {
									for (var W = 0; W < F && e[S + W] == e[S + W - D]; ++W);
									if (W > O) {
										if (O = W, j = D, W > P) break;
										var z = Math.min(D, W - 2), G = 0;
										for ($ = 0; $ < z; ++$) {
											var V = S - D + $ & 32767, U = V - f[V] & 32767;
											U > G && (G = U, C = V);
										}
									}
								}
								D += (E = C) - (C = f[E]) & 32767;
							}
							if (j) {
								y[I++] = 268435456 | pt[O] << 18 | gt[j];
								var H = 31 & pt[O], q = 31 & gt[j];
								M += at[H] + ot[q], ++b[257 + H], ++k[q], T = S + O, ++x;
							} else y[I++] = e[S], ++b[e[S]];
						}
					}
					for (S = Math.max(S, T); S < a; ++S) y[I++] = e[S], ++b[e[S]];
					u = Ot(e, l, c, y, b, k, M, I, A, S - A, u), c || (s.r = 7 & u | l[u / 8 | 0] << 3, u -= 7, s.h = h, s.p = f, s.i = S, s.w = T);
				} else {
					for (S = s.w || 0; S < a + c; S += 65535) {
						var K = S + 65535;
						K >= a && (l[u / 8 | 0] = c, K = a), u = $t(l, u + 1, e.subarray(S, K));
					}
					s.i = a;
				}
				return Mt(o, 0, r + xt(u) + i);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? i.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, n, r, i);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || It(5), this.s.l && It(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var r = new rt(-32768 & n);
				r.set(this.b.subarray(0, this.s.z)), this.b = r;
			}
			var i = this.b.length - this.s.z;
			this.b.set(e.subarray(0, i), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(i), 32768), this.s.z = e.length - i + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = Bt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || It(5), this.s.l && It(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new rt(6);
			t[0] = this.s.r >> 3;
			var n = $t(t, this.s.r, Bt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), Ft = "undefined" != typeof TextEncoder && new TextEncoder(), Wt = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	Wt.decode(Bt, { stream: !0 });
} catch (yo) {}
function zt(e, t) {
	if (t) {
		for (var n = new rt(e.length), r = 0; r < e.length; ++r) n[r] = e.charCodeAt(r);
		return n;
	}
	if (Ft) return Ft.encode(e);
	var i = e.length, s = new rt(e.length + (e.length >> 1)), a = 0, o = function(e) {
		s[a++] = e;
	};
	for (r = 0; r < i; ++r) {
		if (a + 5 > s.length) {
			var l = new rt(a + 8 + (i - r << 1));
			l.set(s), s = l;
		}
		var c = e.charCodeAt(r);
		c < 128 || t ? o(c) : c < 2048 ? (o(192 | c >> 6), o(128 | 63 & c)) : c > 55295 && c < 57344 ? (o(240 | (c = 65536 + (1047552 & c) | 1023 & e.charCodeAt(++r)) >> 18), o(128 | c >> 12 & 63), o(128 | c >> 6 & 63), o(128 | 63 & c)) : (o(224 | c >> 12), o(128 | c >> 6 & 63), o(128 | 63 & c));
	}
	return Mt(s, 0, a);
}
var Gt = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var r = e[n].length;
		r > 65535 && It(9), t += r + 4;
	}
	return t;
}, Vt = function(e, t, n, r, i, s, a, o) {
	var l = r.length, c = n.extra, u = o && o.length, d = Gt(c);
	Pt(e, t, null != a ? 33639248 : 67324752), t += 4, null != a && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (s < 0 && 8), e[t++] = i && 8, e[t++] = 255 & n.compression, e[t++] = n.compression >> 8;
	var p = new Date(null == n.mtime ? Date.now() : n.mtime), m = p.getFullYear() - 1980;
	if ((m < 0 || m > 119) && It(10), Pt(e, t, m << 25 | p.getMonth() + 1 << 21 | p.getDate() << 16 | p.getHours() << 11 | p.getMinutes() << 5 | p.getSeconds() >> 1), t += 4, -1 != s && (Pt(e, t, n.crc), Pt(e, t + 4, s < 0 ? -s - 2 : s), Pt(e, t + 8, n.size)), Pt(e, t + 12, l), Pt(e, t + 14, d), t += 16, null != a && (Pt(e, t, u), Pt(e, t + 6, n.attrs), Pt(e, t + 10, a), t += 14), e.set(r, t), t += l, d) for (var g in c) {
		var f = c[g], h = f.length;
		Pt(e, t, +g), Pt(e, t + 2, h), e.set(f, t + 4), t += 4 + h;
	}
	return u && (e.set(o, t), t += u), t;
}, Ut = function() {
	function e(e) {
		var t;
		this.filename = e, this.c = (t = -1, {
			p: function(e) {
				for (var n = t, r = 0; r < e.length; ++r) n = Dt[255 & n ^ e[r]] ^ n >>> 8;
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
		this.ondata || It(5), this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1);
	}, e;
}(), Ht = function() {
	function e(e) {
		this.ondata = e, this.u = [], this.d = 1;
	}
	return e.prototype.add = function(e) {
		var t = this;
		if (this.ondata || It(5), 2 & this.d) this.ondata(It(4 + 8 * (1 & this.d), 0, 1), null, !1);
		else {
			var n = zt(e.filename), r = n.length, i = e.comment, s = i && zt(i), a = r != e.filename.length || s && i.length != s.length, o = r + Gt(e.extra) + 30;
			r > 65535 && this.ondata(It(11, 0, 1), null, !1);
			var l = new rt(o);
			Vt(l, 0, e, n, a, -1);
			var c = [l], u = function() {
				for (var e = 0, n = c; e < n.length; e++) {
					var r = n[e];
					t.ondata(null, r, !1);
				}
				c = [];
			}, d = this.d;
			this.d = 0;
			var p = this.u.length, m = function(e, t) {
				var n = {};
				for (var r in e) n[r] = e[r];
				for (var r in t) n[r] = t[r];
				return n;
			}(e, {
				f: n,
				u: a,
				o: s,
				t: function() {
					e.terminate && e.terminate();
				},
				r: function() {
					if (u(), d) {
						var e = t.u[p + 1];
						e ? e.r() : t.d = 1;
					}
					d = 1;
				}
			}), g = 0;
			e.ondata = function(n, r, i) {
				if (n) t.ondata(n, r, i), t.terminate();
				else if (g += r.length, c.push(r), i) {
					var s = new rt(16);
					Pt(s, 0, 134695760), Pt(s, 4, e.crc), Pt(s, 8, g), Pt(s, 12, e.size), c.push(s), m.c = g, m.b = o + g + 16, m.crc = e.crc, m.size = e.size, d && m.r(), d = 1;
				} else d && u();
			}, this.u.push(m);
		}
	}, e.prototype.end = function() {
		var e = this;
		2 & this.d ? this.ondata(It(4 + 8 * (1 & this.d), 0, 1), null, !0) : (this.d ? this.e() : this.u.push({
			r: function() {
				1 & e.d && (e.u.splice(-1, 1), e.e());
			},
			t: function() {}
		}), this.d = 3);
	}, e.prototype.e = function() {
		for (var e = 0, t = 0, n = 0, r = 0, i = this.u; r < i.length; r++) n += 46 + (m = i[r]).f.length + Gt(m.extra) + (m.o ? m.o.length : 0);
		for (var s, a, o, l, c, u = new rt(n + 22), d = 0, p = this.u; d < p.length; d++) {
			var m = p[d];
			Vt(u, e, m, m.f, m.u, -m.c - 2, t, m.o), e += 46 + m.f.length + Gt(m.extra) + (m.o ? m.o.length : 0), t += m.b;
		}
		s = u, a = e, o = this.u.length, l = n, c = t, Pt(s, a, 101010256), Pt(s, a + 8, o), Pt(s, a + 10, o), Pt(s, a + 12, l), Pt(s, a + 16, c), this.ondata(null, u, !0), this.d = 2;
	}, e.prototype.terminate = function() {
		for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
		this.d = 2;
	}, e;
}();
function qt(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function Kt(e) {
	const t = [
		"timestamps",
		"activity",
		"sleep_scores"
	].flatMap((t) => {
		const n = new Uint32Array(e.length + 1);
		for (const [a, o] of e.entries()) n[a + 1] = n[a] + (o[t]?.length ?? 0);
		const r = "sleep_scores" === t ? Uint8Array : Float64Array, i = e[0]?.[t], s = 1 === e.length && i instanceof r ? i : new r(n[e.length]);
		if (s !== i) for (const [a, o] of e.entries()) s.set(o[t] ?? [], n[a]);
		return [s, n];
	});
	return {
		request: [JSON.stringify({ days: e.map(({ timestamps: e, activity: t, sleep_scores: n, ...r }) => r) }), ...t],
		transfer: t.filter((t) => !e.some((e) => t === e.timestamps || t === e.activity)).map((e) => e.buffer)
	};
}
function Jt(e, t) {
	const n = function(e) {
		const t = qt(e.ggirTimestamps), n = qt(e.ggirEnmo);
		if (t.length > 0 && n.length > 0 && function(e) {
			for (const t of e) if (Number.isFinite(t)) return !0;
			return !1;
		}(n)) return {
			timestamps: t,
			signal: n,
			source: "ggir_enmo"
		};
		const r = new Float64Array(e.timestamps), i = new Float64Array(e.vectorMagnitude);
		return r.length > 0 && i.length > 0 ? {
			timestamps: r,
			signal: i,
			source: "vector_magnitude"
		} : null;
	}(t);
	if (!n || n.timestamps.length < 2) return null;
	const { timestamps: r, signal: i } = n, s = r[1] - r[0];
	if (!(s > 0 && Number.isInteger(s))) return null;
	for (let a = 1; a < r.length; a++) if (r[a] - r[a - 1] !== s) return null;
	return {
		wire: {
			id: `${String(e)}:${t.date}`,
			series_id: String(e),
			analysis_date: t.date,
			epoch_length_seconds: s,
			timestamps: r,
			activity: i
		},
		source: n.source
	};
}
async function Yt(e, t, n, r, i = 60, s, a) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == r || n >= r) return null;
	const o = new Uint8Array(e.length);
	for (let c = 0; c < e.length; c++) o[c] = 1 === e[c] ? 1 : 0;
	const l = await Zt(o, s && s.length === e.length ? s : new Float64Array(e.length), t, n, r, i, a);
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
async function Zt(e, t, n, r, i, s = 60, a) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == r || null == i || r >= i) return null;
	const o = await async function(e, t, n, r) {
		const i = await W(r).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === i.length ? {
			startIdx: i[0],
			endIdx: i[1]
		} : null;
	}(n, r, i, a);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, c = o.endIdx + 1, u = e instanceof Uint8Array ? e.slice(l, c) : new Uint8Array(e.slice(l, c)), d = t instanceof Float64Array ? t.slice(l, c) : Float64Array.from(t.slice(l, c)), p = await W(a).computeSleepMetrics(u, d, s), m = n[l] ?? 0, g = n[c - 1] ?? m, f = null != p.firstSleepEpochIdx ? n[l + p.firstSleepEpochIdx] ?? m : m, h = null != p.lastSleepEpochIdx ? n[l + p.lastSleepEpochIdx] ?? g : g;
	return {
		timeInBedMinutes: p.timeInBedMinutes,
		totalSleepTimeMinutes: p.totalSleepTimeMinutes,
		sleepOnsetLatencyMinutes: p.sleepOnsetLatencyMinutes,
		wasoMinutes: p.wasoMinutes,
		numberOfAwakenings: p.numberOfAwakenings,
		ggirSleepDurationInSptMinutes: p.ggirSleepDurationInSptMinutes,
		averageAwakeningLengthMinutes: p.averageAwakeningLengthMinutes,
		sleepEfficiency: p.sleepEfficiency,
		movementIndex: p.movementIndex,
		fragmentationIndex: p.fragmentationIndex,
		sleepFragmentationIndex: p.sleepFragmentationIndex,
		totalActivity: p.totalActivity,
		nonzeroEpochs: p.nonzeroEpochs,
		inBedTime: m,
		outBedTime: g,
		sleepOnset: f,
		sleepOffset: h
	};
}
function Qt(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const r = me(e), i = Array.from(r.timestamps);
	if (r.ggir) return {
		timestamps: i,
		algorithmResults: r.sleepScores,
		activity: null,
		scoresStale: null
	};
	const s = e.axisY;
	let a = s ? new Float64Array(s) : null;
	const o = a ? e.actiwareActivityInvalid : void 0;
	if (a && o) {
		const e = new Uint8Array(o);
		if (e.length === a.length && e.some((e) => 1 === e)) {
			a = a.slice();
			for (let t = 0; t < e.length; t += 1) 1 === e[t] && (a[t] = NaN);
		}
	}
	if (!e.algorithmResults || "object" != typeof e.algorithmResults) return console.warn(`[loadActivityForMetrics] Missing algorithmResults for activity day id=${e.id}`), {
		timestamps: i,
		algorithmResults: null,
		activity: a,
		scoresStale: n
	};
	const l = ee(e, t);
	return {
		timestamps: i,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: a,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
const Xt = /* @__PURE__ */ new Map();
async function en(e, t) {
	if (Xt.has(e)) return Xt.get(e);
	try {
		const n = await W(t).resolveTimezone(e);
		return Xt.set(e, n), n;
	} catch (It) {
		t?.throwIfAborted(), console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, It);
		return;
	}
}
function tn(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : Qe();
}
async function nn(e) {
	try {
		return tn((await ae(e))?.extraSettings);
	} catch (It) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", It), Qe();
	}
}
function rn(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const sn = {
	zone: null,
	reason: null
};
async function an(e, t, n) {
	const r = e.ggirTimezone?.trim();
	let i = null;
	if (r) {
		const e = await en(r, n);
		if (!e) return sn;
		if ("iana" === e.kind) return {
			zone: e.zone,
			reason: null
		};
		i = function(e) {
			const t = /^([+-])(\d{2}):(\d{2})(?::\d{2})?$/u.exec(e.trim());
			if (!t) return null;
			const n = 60 * Number(t[2]) + Number(t[3]);
			return "-" === t[1] ? -n : n;
		}(e.zone);
	} else "number" == typeof e.recording?.gmtOffsetMinutes && (i = e.recording.gmtOffsetMinutes);
	if (null === i) return xe(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : sn;
	const s = await en(t, n);
	if (void 0 === s) return sn;
	if ("iana" !== s?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const a = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== a && (await Xe(s.zone, a, W(n))).includes(i) ? {
		zone: s.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${rn(i)} is not a ${s.zone} offset`
	};
}
function on(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [r, i] of e.entries()) t[r + 1] = t[r] + i.length;
	const n = new Float64Array(t[e.length]);
	for (const [r, i] of e.entries()) n.set(i, t[r]);
	return [n, t];
}
const ln = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), cn = [
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
var un = cn.map(() => ln);
Object.fromEntries(cn.map(([e], t) => [e, un[t]]));
const dn = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values(M).filter((e) => ![
		M.choi_2012,
		M.choi_2011,
		M.van_hees_2023,
		M.detach_nonwear
	].some((t) => t === e))
];
async function pn(e, t, n, r) {
	const i = void 0 === t ? n?.window[e] : 48 === t ? n?.view48[e] : void 0;
	if (i) return {
		start: i[0],
		end: i[1]
	};
	const s = await (r ?? y()).analysisWindowBounds(e, t);
	return s ? {
		start: s[0],
		end: s[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function mn(e, t, n) {
	const r = e instanceof Float64Array ? e : Float64Array.from(e), [i, s] = await (n ?? y()).analysisWindowSlice(r, t);
	return {
		startIndex: i,
		endIndex: s
	};
}
async function gn(e, t = y()) {
	const n = [...new Set(e)], r = await t.analysisDatesOf(Float64Array.from(n)), i = new Map(n.map((e, t) => [e, r[t] ?? ""]));
	return (e) => i.get(e) ?? "";
}
Object.fromEntries(Object.values(M).map((e) => [e, e === M.ggir_saved ? ke : Pe(e)]));
var fn = e({
	nightPeriodMetrics: () => wn,
	spanningSeries: () => _n,
	storeNightPeriodMetrics: () => vn
});
function hn(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [r, i] of Object.entries(Fe(e, e.nonwearChoiAxis ?? je()))) i && (n[t[r] ?? r] = new Uint8Array(i));
	return n;
}
async function _n(e, t, n, r = {}) {
	const { signal: i, includeNonwearMasks: s = !1 } = r, a = e.get(t), o = Qt(a, n), l = s && a ? hn(a) : {}, c = e.get(r.nextDate ?? await X(t, void 0, W(i))), u = o.timestamps[o.timestamps.length - 1], d = c ? Qt(c, n) : null, p = d?.timestamps[0], m = void 0 !== c && null !== d && void 0 !== u && void 0 !== p && p > u, g = o.scoresStale ?? d?.scoresStale ?? null;
	if (null !== g) return {
		...o,
		algorithmResults: null,
		masks: l,
		scoresStale: g
	};
	if (!m || !o.algorithmResults) return {
		...o,
		masks: l,
		scoresStale: null
	};
	const f = o.timestamps.length, h = f + d.timestamps.length, _ = o.algorithmResults.length >= f && d.algorithmResults && d.algorithmResults.length >= d.timestamps.length ? new Uint8Array(h) : null;
	_?.set(o.algorithmResults.subarray(0, f)), d.algorithmResults && _?.set(d.algorithmResults.subarray(0, h - f), f);
	const w = o.activity && d.activity ? new Float64Array(h) : null;
	o.activity && w?.set(o.activity.subarray(0, f)), d.activity && w?.set(d.activity.subarray(0, h - f), f);
	const v = s ? hn(c) : {}, y = {};
	for (const b of dn) {
		const e = l[b], t = v[b];
		if (!e && !t) continue;
		const n = new Uint8Array(h);
		e && n.set(e.subarray(0, f)), t && n.set(t.subarray(0, h - f), f), y[b] = n;
	}
	return {
		timestamps: [...o.timestamps, ...d.timestamps],
		algorithmResults: _,
		activity: w,
		masks: y,
		scoresStale: null
	};
}
async function wn(e, t, n, r) {
	const { date: i, file: s, activityMap: a, verdict: o } = t, l = t.spanning ?? await _n(a, i, o, { signal: r });
	if (null !== l.scoresStale || !l.algorithmResults) return e.sleepMarkers.map(() => null);
	const c = function(e, t) {
		return JSON.stringify([
			t.seriesRevision ?? 0,
			t.epochLengthSeconds || 60,
			e.algorithm,
			e.sleepMarkers.map((e) => [e.onsetTimestamp ?? null, e.offsetTimestamp ?? null])
		]);
	}(e, s);
	if (e.periodMetrics?.inputs === c) return e.periodMetrics.metrics;
	const { timestamps: u, algorithmResults: d } = l, p = [];
	for (const m of e.sleepMarkers) p.push(d && u.length > 0 && m.onsetTimestamp && m.offsetTimestamp ? await Zt(d, l.activity ?? new Float64Array(d.length), l.timestamps, m.onsetTimestamp, m.offsetTimestamp, s.epochLengthSeconds || 60, r) : null);
	if (void 0 !== e.id) try {
		await te(n, [n.markers], () => ve(e.id, {
			inputs: c,
			metrics: p
		}, n), r);
	} catch {
		r?.throwIfAborted();
	}
	return p;
}
async function vn(e, t, n, r) {
	const i = await n.files.get(e.fileId);
	if (!i) return;
	const s = /* @__PURE__ */ new Map();
	for (const a of [e.date, await X(e.date, void 0, W(r))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, a]).first();
		t && s.set(a, t);
	}
	await wn(e, {
		date: e.date,
		file: i,
		activityMap: s,
		verdict: t
	}, n, r);
}
const yn = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], bn = ["under-series", "over-series"], kn = ["full-resolution-v1", "min-max-gap-envelope-v1"], xn = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function Mn(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function Sn(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? Mn(t, "expected an object") : e;
}
function In(e, t) {
	return Array.isArray(e) ? e : Mn(t, "expected an array");
}
function Tn(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : Mn(t, "expected a finite number");
}
function An(e, t) {
	const n = Tn(e, t);
	return n <= 0 ? Mn(t, "expected a positive number") : n;
}
function Rn(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : Mn(t, "expected a safe integer");
}
function En(e, t) {
	const n = Rn(e, t);
	return n < 0 ? Mn(t, "expected a non-negative safe integer") : n;
}
function Cn(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? Mn(t, "expected a boolean") : { [n]: e };
}
function Nn(e, t) {
	return "string" != typeof e || 0 === e.length ? Mn(t, "expected a non-empty string") : e;
}
function $n(e, t) {
	return "string" == typeof e && yn.includes(e) ? e : Mn(t, "expected a supported tone");
}
function On(e, t) {
	return "string" == typeof e && bn.includes(e) ? e : Mn(t, "expected a supported phase");
}
function jn(e, t) {
	const n = Sn(e, t), r = Tn(n.min, `${t}.min`), i = Tn(n.max, `${t}.max`);
	return i <= r || !Number.isFinite(i - r) ? Mn(t, "expected a finite ascending range") : {
		min: r,
		max: i
	};
}
function Bn(e, t) {
	const n = `series[${t}]`, r = Sn(e, n), i = In(r.points, `${n}.points`);
	let s = Number.NEGATIVE_INFINITY;
	const a = (e) => `${n}.points[${e}]`, o = i.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return Mn(a(t), "expected an object");
		const n = e, r = n.timestamp;
		if ("number" != typeof r || !Number.isFinite(r)) return Mn(`${a(t)}.timestamp`, "expected a finite number");
		if (r <= s) return Mn(`${a(t)}.timestamp`, "expected strictly ascending timestamps");
		s = r;
		const i = n.value;
		return null === i || "number" == typeof i && Number.isFinite(i) ? {
			timestamp: r,
			value: i
		} : Mn(`${a(t)}.value`, "expected a finite number");
	});
	return {
		tone: $n(r.tone, `${n}.tone`),
		strokeWidth: An(r.strokeWidth, `${n}.strokeWidth`),
		valueDomain: jn(r.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function Dn(e, t) {
	const n = `overlays[${t}]`, r = Sn(e, n), i = {
		phase: On(r.phase, `${n}.phase`),
		order: Rn(r.order, `${n}.order`),
		tone: $n(r.tone, `${n}.tone`)
	};
	if ("interval" === r.kind) {
		const e = Tn(r.startTimestamp, `${n}.startTimestamp`), t = Tn(r.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? Mn(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...i,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === r.kind ? {
		kind: "threshold",
		...i,
		value: Tn(r.value, `${n}.value`),
		...Cn(r.draggable, `${n}.draggable`, "draggable"),
		...Cn(r.selected, `${n}.selected`, "selected"),
		...Cn(r.handle, `${n}.handle`, "handle"),
		...void 0 === r.label ? {} : { label: Nn(r.label, `${n}.label`) }
	} : "instant" === r.kind ? {
		kind: "instant",
		...i,
		timestamp: Tn(r.timestamp, `${n}.timestamp`)
	} : Mn(`${n}.kind`, "expected interval, threshold, or instant");
}
function Pn(e, t, n) {
	const r = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(r) ? r : Mn("projection", "expected a finite pixel coordinate");
}
function Ln(e, t, n) {
	const r = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(r) ? r : Mn("projection", "expected a finite pixel coordinate");
}
function Fn(e) {
	if (!(e < 1e9 && e > -1e9)) {
		const t = Number(e.toFixed(6));
		return Object.is(t, -0) ? "0" : String(t);
	}
	const t = e.toFixed(6);
	let n = t.length;
	for (; 48 === t.charCodeAt(n - 1);) n -= 1;
	46 === t.charCodeAt(n - 1) && (n -= 1);
	const r = n === t.length ? t : t.slice(0, n);
	return "-0" === r ? "0" : r;
}
function Wn(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function zn(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, r = t.plotArea.height, i = xn[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const s = Wn(Pn(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), a = Wn(Pn(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${Fn(s)}" y="0" width="${Fn(Math.max(1, a - s))}" height="${Fn(r)}" fill="${i}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const s = Ln(e.value, t.valueDomain, r), a = !0 === e.selected, o = a ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${a ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${Fn(s)}" x2="${Fn(n)}" y2="${Fn(s)}" stroke="${i}" stroke-width="${a ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const s = Pn(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${Fn(s)}" y1="0" x2="${Fn(s)}" y2="${Fn(r)}" stroke="${i}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function Gn(e) {
	const t = function(e) {
		const t = Sn(e, "scene");
		if (2 !== t.version) return Mn("version", "expected 2");
		const n = Sn(t.grid, "grid"), r = {
			strategy: (i = n.strategy, "string" == typeof i && kn.includes(i) ? i : Mn("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: En(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: En(n.renderedPointCount, "grid.renderedPointCount")
		};
		var i;
		if (r.renderedPointCount > r.sourcePointCount) return Mn("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === r.strategy && r.renderedPointCount !== r.sourcePointCount) return Mn("grid", "full-resolution strategy requires equal point counts");
		const s = Sn(t.size, "size"), a = {
			width: An(s.width, "size.width"),
			height: An(s.height, "size.height")
		}, o = Sn(t.plotArea, "plotArea"), l = {
			left: Tn(o.left, "plotArea.left"),
			top: Tn(o.top, "plotArea.top"),
			width: An(o.width, "plotArea.width"),
			height: An(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > a.width || l.top + l.height > a.height) return Mn("plotArea", "expected bounds contained by size");
		const c = jn(t.viewport, "viewport"), u = jn(t.valueDomain, "valueDomain"), d = In(t.series, "series").map(Bn);
		if (0 === d.length && 0 !== r.renderedPointCount) return Mn("grid.renderedPointCount", "expected zero when series is empty");
		const p = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let h = 0; h < d.length; h++) {
			const e = d[h]?.points ?? [];
			if (e.length !== r.renderedPointCount) return Mn(`series[${h}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== p[t]) return Mn(`series[${h}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const m = In(t.overlays, "overlays").map(Dn), g = null === t.cursorTimestamp ? null : Tn(t.cursorTimestamp, "cursorTimestamp");
		let f = null;
		if (null !== t.selection) {
			const e = Sn(t.selection, "selection"), n = Tn(e.startTimestamp, "selection.startTimestamp"), r = Tn(e.endTimestamp, "selection.endTimestamp");
			if (r <= n) return Mn("selection", "expected a half-open ascending interval");
			f = {
				startTimestamp: n,
				endTimestamp: r
			};
		}
		return {
			version: 2,
			grid: r,
			size: a,
			plotArea: l,
			viewport: c,
			valueDomain: u,
			series: d,
			overlays: m,
			cursorTimestamp: g,
			selection: f
		};
	}(e), n = Fn(t.size.width), r = Fn(t.size.height), i = Fn(t.plotArea.width), s = Fn(t.plotArea.height), a = zn(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
		let r = "", i = !1;
		const s = {
			left: 0,
			width: n.plotArea.width
		}, a = /* @__PURE__ */ new Map();
		for (const o of e.points) {
			if (null == o.value) {
				i = !1;
				continue;
			}
			const t = Pn(o.timestamp, n.viewport, s);
			let l = a.get(o.value);
			void 0 === l && (l = Fn(Ln(o.value, e.valueDomain, n.plotArea.height)), a.set(o.value, l)), r += `${i ? "L" : "M"}${Fn(t)} ${l}`, i = !0;
		}
		return 0 === r.length ? "" : `<path data-series-index="${t}" d="${r}" fill="none" stroke="${xn[e.tone]}" stroke-width="${Fn(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = zn(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${r}" viewBox="0 0 ${n} ${r}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${r}" fill="#ffffff"/><svg x="${Fn(t.plotArea.left)}" y="${Fn(t.plotArea.top)}" width="${i}" height="${s}" viewBox="0 0 ${i} ${s}" overflow="hidden"><rect x="0" y="0" width="${i}" height="${s}" fill="#ffffff"/>${a}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = Wn(Pn(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), r = Wn(Pn(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${Fn(n)}" y="0" width="${Fn(Math.max(1, r - n))}" height="${Fn(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = Pn(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${Fn(n)}" y1="0" x2="${Fn(n)}" y2="${Fn(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${Fn(t.plotArea.left)}" y="${Fn(t.plotArea.top)}" width="${i}" height="${s}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
const Vn = "local-export-streams";
var Un = class extends Error {
	name = "ExportSnapshotTooLargeError";
	reason = "snapshot_too_large";
}, Hn = class e extends Error {
	file;
	step;
	reason;
	constructor(e, t, n, r = qn(n)) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t, this.reason = r;
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
function qn(e) {
	return e instanceof Hn || e instanceof Un ? e.reason : e instanceof Error ? e.name : typeof e;
}
const Kn = 65536, Jn = "manifest.json", Yn = "Checking the export inputs", Zn = "Reading recordings", Qn = "Writing ZIP";
function Xn(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function er(e) {
	return String(e).padStart(2, "0");
}
function tr(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const nr = [
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
new Set(nr.slice(16).map(([e]) => e));
var rr = class extends Error {};
const ir = "edit_recompute_requires_ms2_ms3", sr = /* @__PURE__ */ new Set([
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
]), ar = Q.invalid_night_row.markerTypeCell, or = new Set(nr.map(([, e]) => e)), lr = /* @__PURE__ */ new Set([
	J.ggir_sleepparam.header,
	J.ggir_guider_onset.header,
	J.ggir_guider_wakeup.header,
	J.ggir_guider_spt_duration.header,
	J.ggir_error_onset.header,
	J.ggir_error_wake.header,
	J.ggir_error_dur.header,
	J.ggir_fraction_night_invalid.header,
	J.ggir_duration_sib_wakinghours.header,
	J.ggir_number_sib_sleepperiod.header,
	J.ggir_number_sib_wakinghours.header,
	J.ggir_duration_sib_wakinghours_atleast15min.header,
	J.ggir_guider_onset_ts.header,
	J.ggir_guider_wakeup_ts.header,
	J.ggir_page.header,
	J.ggir_daysleeper.header,
	J.ggir_sleeplog_id.header,
	J.ggir_guider.header,
	J.ggir_longitudinal_axis.header
]), cr = /* @__PURE__ */ new Set([
	J.ggir_sleep_duration_in_spt.header,
	J.ggir_waso.header,
	J.ggir_number_of_awakenings.header,
	J.ggir_sleeplatency.header,
	J.ggir_sleepefficiency.header
]), ur = /* @__PURE__ */ new Set([
	...cr,
	J.ggir_nonwear_perc_spt.header,
	J.ggir_sleeponset.header,
	J.ggir_wakeup.header,
	J.ggir_spt_duration.header,
	J.ggir_guider_onset.header,
	J.ggir_guider_wakeup.header,
	J.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	J.ggir_sleeponset_ts.header,
	J.ggir_wakeup_ts.header,
	J.ggir_guider_onset_ts.header,
	J.ggir_guider_wakeup_ts.header,
	J.ggir_daysleeper.header,
	J.ggir_cleaningcode.header,
	J.ggir_guider.header,
	J.ggir_error_onset.header,
	J.ggir_error_wake.header,
	J.ggir_error_dur.header,
	J.ggir_fraction_night_invalid.header,
	J.ggir_duration_sib_wakinghours.header,
	J.ggir_number_sib_sleepperiod.header,
	J.ggir_number_sib_wakinghours.header,
	J.ggir_duration_sib_wakinghours_atleast15min.header
]), dr = /* @__PURE__ */ new Set([
	J.ggir_id.header,
	J.ggir_filename.header,
	J.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	J.ggir_sleep_regularity_index1.header,
	J.ggir_sri_fraction_valid.header,
	J.ggir_calendar_date.header,
	J.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	J.ggir_cleaningcode.header,
	J.ggir_guider.header,
	J.ggir_sleeplog_used.header,
	J.ggir_acc_available.header,
	J.ggir_daysleeper.header
]), pr = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), mr = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), gr = new Set(Object.values(J).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), fr = new Set(Object.values(J).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), hr = new Set(Object.values(q).map((e) => e.reviewSource)), _r = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim()), wr = _r, vr = "refusal_detail_missing_reason";
function yr(e, t) {
	const n = e(J["start" === t ? "interval_start_date" : "interval_end_date"].header), r = e(J["start" === t ? "interval_start_time" : "interval_end_time"].header);
	return n && r ? `${n}T${r}` : "";
}
function br(e, t, n, r) {
	const i = (e) => n.get(e) ?? "", s = i(t + "_missing_reason");
	if (s && !sr.has(s)) return null;
	const a = s || null;
	if (e.startsWith("part2_")) return "source_reported_missing";
	if (e.includes("_ggir_review")) {
		if (a) return a;
		const e = i("review_source");
		return hr.has(e) ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const o = i(J.marker_type.header) === ar || "actiware_intervals_export.csv" === e && i(J.interval_kind.header) === ar;
	if (!function(e, t) {
		return "actiware_intervals_export.csv" === e ? or.has(t) : "actiware_sleep_wake_export.csv" === e ? t === J.actiware_sleep_wake.header || t === J.actiware_wake_threshold.header : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			J.ggir_id.header,
			J.ggir_filename.header,
			J.ggir_calendar_date.header,
			J.ggir_weekday.header,
			J.ggir_sleeplog_id.header,
			J.ggir_guider_corrected.header,
			J.ggir_cleaningcode.header
		].includes(t) : gr.has(t);
	}(e, t)) return a || (o ? "invalid_night" : "Manual Nonwear" === i(J.marker_type.header) ? "manual_nonwear_period" : null);
	if ("actiware_intervals_export.csv" === e && or.has(t)) {
		if (o) return "invalid_night";
		const e = i(J.interval_kind.header).toLowerCase(), n = yr(i, "start");
		if ("daily" === e && n && n === yr(i, "end")) return "zero_interval_rows";
		if ([
			J.actiware_onset_latency.header,
			J.actiware_efficiency.header,
			J.actiware_waso.header
		].includes(t)) {
			if ("sleep" !== e) return "not_applicable_to_row";
			if (wr(i(J.actiware_duration.header))) return null;
			const t = yr(i, "start"), n = yr(i, "end");
			if (!t || !n) return null;
			let s = !1;
			for (const e of r) if (e.get(J.filename.header) === i(J.filename.header) && "rest" === e.get(J.interval_kind.header) && yr((t) => e.get(t) ?? "", "start") <= t && n <= yr((t) => e.get(t) ?? "", "end")) {
				s = !0;
				break;
			}
			return s ? null : "no_eligible_rest";
		}
		if (wr(i(J.actiware_duration.header))) return null;
		if (t === J.actiware_off_wrist.header || t === J.actiware_off_wrist_percent.header) return t === J.actiware_off_wrist_percent.header && "0.00" === i(J.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === a ? a : null;
		if (t === J.actiware_avg_ac_per_min.header) return 100 === Number(i(J.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			J.actiware_invalid_sw_percent.header,
			J.actiware_wake_percent.header,
			J.actiware_sleep_percent.header
		].includes(t)) {
			if ("0.00" === i(J.actiware_duration.header)) return "zero_interval_rows";
			const e = !wr(i(J.actiware_wake_time.header)) && !wr(i(J.actiware_sleep_time.header)) && 0 === Number(i(J.actiware_wake_time.header)) && 0 === Number(i(J.actiware_sleep_time.header));
			return t === J.actiware_invalid_sw_percent.header || 100 !== Number(i(J.actiware_invalid_sw_percent.header)) && !e ? null : "no_scored_epochs";
		}
		const s = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(t);
		if (s) {
			const e = s[1];
			return "0.00" === i(J.actiware_duration.header) ? "zero_interval_rows" : wr(i("%Invalid " + e)) ? "source_reported_missing" === a ? a : null : t.startsWith("TALT ") && !wr(i("Exposure " + e)) ? "threshold_unconfigured" : 100 === Number(i("%Invalid " + e)) ? "no_valid_epochs" : null;
		}
		return null;
	}
	if ("actiware_sleep_wake_export.csv" === e) {
		if (t === J.actiware_sleep_wake.header) return "no_valid_epochs" === a ? a : null;
		if (t === J.actiware_wake_threshold.header) return "not_computed_for_export" === a ? a : null;
	}
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return lr.has(t) ? "not_computed_for_export" === a ? a : null : cr.has(t) ? "no_scored_epochs" === a || "not_applicable_to_row" === a || "scores_from_another_config" === a ? a : null : a;
	if ("sleep_export_wide.csv" === e) return a;
	if ("summary_export.csv" === e && t === J.sleep_regularity_index.header) return a && [
		"insufficient_pair",
		"no_scored_epochs",
		"no_valid_epochs",
		"not_computed_for_export",
		"scores_from_another_config"
	].includes(a) ? a : null;
	if ("physical_activity_export.csv" === e) {
		const e = i("Status"), n = i("Method");
		if ([
			"Epoch Length Seconds",
			"Native Epoch Seconds",
			"Mask Overlap Epochs"
		].includes(t)) return "Epoch Length Seconds" === t ? "ggir_enmo" === n ? "not_applicable_to_row" : null : "Native Epoch Seconds" === t ? "not_applicable" === i("Threshold Source") ? "not_applicable_to_row" : "source_reported_missing" === a ? a : null : "ggir_enmo" === n ? "not_applicable_to_row" : "needs_signal" === e ? "channel_unavailable" : "backend_required" === e ? "not_computed_for_export" : null;
		const r = {
			"Sedentary Max": "sedentaryMax",
			"Light Min": "lightMin",
			"Moderate Min": "moderateMin",
			"Vigorous Min": "vigorousMin"
		}[t];
		if (r && "not_applicable" === i("Threshold Source")) return "device_not_applicable";
		if ("needs_signal" === e) return "channel_unavailable";
		if ("backend_required" === e) return "not_computed_for_export";
		if ("ready" !== e) return null;
		const s = h.find((e) => e.method === n);
		return r && s?.cutpoint && !Number.isFinite(s.cutpoint[r]) || "MIMS Unit Total" === t && "mims" !== n ? "not_applicable_to_row" : "ggir_enmo" === n ? pr.has(t) ? "source_reported_missing" === a ? a : null : mr.has(t) && "not_computed_for_export" === a ? a : null : "mims" === n && [
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
		].includes(t) ? "0.00" === i("Wake Wear Minutes") ? "no_valid_epochs" : null : "not_computed_for_export";
	}
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === i(J.marker_type.header) ? "manual_nonwear_period" : null : "true" === i(J.is_invalid_night.header).toLowerCase() && i(J.marker_type.header) === ar ? "invalid_night" : t === J.total_nap_minutes.header && "0" === i(J.nap_count.header) ? "not_applicable_to_row" : [
		J.l5_hour.header,
		J.m10_hour.header,
		J.sleep_midpoint_hour.header,
		J.valid_wear_minutes.header
	].includes(t) ? a && [
		"not_computed_for_export",
		"no_valid_epochs",
		"not_applicable_to_row"
	].includes(a) ? a : null : /^Mean (?:Temperature|White Light|Red Light|Green Light|Blue Light)/u.test(t) ? a && [
		"channel_unavailable",
		"no_valid_epochs",
		"not_applicable_to_row"
	].includes(a) ? a : null : a;
}
const kr = "missing_reasons.csv";
function xr(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(i).join(","))].map((e) => e + "\n").join("");
}
function Mr(e, t) {
	const n = [
		J.filename.header,
		J.ggir_filename.header,
		"ggir_filename",
		J.participant_id.header,
		J.ggir_id.header,
		J.study_date.header,
		"Analysis Date",
		J.ggir_calendar_date.header,
		"ggir_calendar_date",
		J.interval_kind.header,
		J.marker_type.header,
		J.interval_start_date.header,
		J.interval_start_time.header,
		J.epoch_local.header,
		"Method"
	].flatMap((t) => {
		const n = e.get(t);
		return n ? [t + "=" + n] : [];
	});
	return n.length ? n.join("|") : "row=" + String(t);
}
function Sr(e, t) {
	let n = !1, r = 0;
	for (let i = 0; i < e.length; i += 1) if ("\"" === e[i]) n && "\"" === e[i + 1] ? i += 1 : n = !n;
	else if ("," === e[i] && !n && ++r === t) return e.slice(0, i);
	return e;
}
function* Ir(e, t, n = !0, i) {
	const { headerlessColumns: a, fullRowCsv: o, rowOffset: l = 0, contextRows: c } = i ?? {}, u = a?.length ? a.join(",") + "\n" + e : e, d = s(u);
	if (d.unterminatedQuotedField) throw new Error(t + ": unterminated CSV cell");
	const [p, ...m] = d.records;
	if (!p) return {
		csv: e,
		withReason: 0,
		withoutReason: 0
	};
	const g = r(p.text), f = g.findIndex((e) => e.endsWith("_missing_reason"));
	if (f >= 0 && g.slice(f).some((e) => !e.endsWith("_missing_reason"))) throw new Error(t + ": internal reason fields must trail data fields");
	const h = g.map((e, t) => ({
		header: e,
		index: t
	})).filter(({ header: e }) => "" !== e && !e.endsWith("_missing_reason")), _ = m.map((e) => r(e.text)), w = _.map((e) => new Map(g.map((t, n) => [t, e[n] ?? ""]))), v = o ? s(o).records : [], y = v[0] ? r(v[0].text) : [], b = o ? v.slice(1).map((e) => r(e.text)) : [];
	if (o && h.length > 0 && b.length !== _.length) throw new Error(t + ": complete-row evidence count differs");
	const k = o ? b.map((e) => new Map(y.map((t, n) => [t, e[n] ?? ""]))) : w;
	let x = 0, M = 0;
	for (let r = 0; r < _.length; r += 1) {
		const e = _[r], n = w[r];
		for (const { header: s, index: a } of h) {
			if ("edit_recompute_requires_ms2_ms3" === k[r].get(s + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
				yield {
					file: t,
					row: l + r + 1,
					key: Mr(n, l + r + 1),
					column: s,
					reason: ir
				}, x += 1;
				continue;
			}
			const i = e[a] ?? "";
			if (!wr(i) || "" !== i.trim() && fr.has(s)) continue;
			const o = br(t, s, k[r], c?.() ?? k);
			o ? (x += 1, yield {
				file: t,
				row: l + r + 1,
				key: Mr(n, l + r + 1),
				column: s,
				reason: o
			}) : (M += 1, console.warn("WARNING: unreasoned missing export cell"));
		}
		const i = n.get(vr);
		i && (yield {
			file: t,
			row: l + r + 1,
			key: Mr(n, l + r + 1),
			column: i,
			reason: "not_computed_for_export"
		});
	}
	if (n && M > 0) throw new rr(t + ": " + String(M) + " unreasoned missing metric cells");
	return f < 0 ? {
		csv: e,
		withReason: x,
		withoutReason: M
	} : {
		csv: [Sr(p.text, f), ...m.map((e) => Sr(e.text, f))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: x,
		withoutReason: M
	};
}
const Tr = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], Ar = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : i(String(e)), Rr = (Z.part4_night_review, Z.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function Er(e, t, n = "") {
	return Z[e].replace("{report}", n.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${q[t].filenameSuffix}.csv`);
}
const Cr = Object.keys(q).map((e) => Er("person_summary_review", e)), Nr = (e) => Cr.some((t) => e.endsWith(t));
function $r(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return a(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? a(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function Or(e, t) {
	const n = new Map(Ae(e).map((e) => [e.night, e.nightDate]));
	return (e, r, i = !0) => {
		const s = e.columns.indexOf("nights" === t ? J.ggir_night.header : "night_number"), a = Number(e.values[s]?.[r]), o = n.get(a);
		if (i && o) return o;
		const l = e.values[e.columns.indexOf(J.ggir_calendar_date.header)]?.[r];
		return $r(l);
	};
}
async function jr(e, t, n, r) {
	const s = "nights" === t ? J.ggir_night.header : "window_number", a = W(n), o = await Promise.all(e.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await Te(e.imported, e.edits, t.night, n)])))), l = (await Promise.all(e.map(async (e, n) => {
		const r = e.current ?? e.imported, i = (e) => "nights" === t ? e.nights : e.days, s = "nights" === t ? r.nightRecomputed : r.dayRecomputed, l = "nights" === t ? e.imported.nightChecks : e.imported.dayChecks, c = o[n].filter((e) => null != e[1]), u = Or(e.imported, t), d = new Set(e.edits.map((e) => e.night)), p = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, m = /* @__PURE__ */ new Set();
		if ("days" === t && p) {
			const t = await Promise.all(Ae(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), r = t.nightDate, i = n.onset < "12:00:00" ? await X(r, void 0, a) : r, s = n.wake <= n.onset ? await X(i, void 0, a) : i;
				return [Math.min(t.onsetMs, Date.parse(`${i}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${s}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: r.days.rows }, async (e, n) => {
				const i = Number(r.days.values[r.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(i)) return void m.add(n);
				const s = u(r.days, n, !1), o = r.days.values[r.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof o ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(o) : null;
				if (!s || !l) return;
				const c = Date.parse(`${s}T${l[1]}Z`), p = l[2] < l[1] ? await X(s, void 0, a) : s, g = Date.parse(`${p}T${l[2]}Z`);
				t.some(([e, t]) => c <= t && g >= e) && m.add(n);
			}));
		}
		return {
			source: q[Rr(e)].reviewSource,
			editedDayRows: m,
			editRecomputeUnavailable: p,
			editedNights: d,
			scoredDates: e.scoredDates,
			invalidDates: e.invalidDates,
			dateOf: u,
			table: i(r),
			ggir: i(e.imported),
			savedNights: e.imported.nights,
			recomputed: s,
			provenance: (e) => "nights" === t ? c.find(([t]) => t === e)?.[1] ?? "" : c.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(l.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === l.length) return null;
	const c = r ? r.filter((e) => !e.endsWith("_missing_reason") && !Tr.includes(e)) : [];
	for (const i of r ? [] : l) for (const e of i.table.columns) e.endsWith("_missing_reason") || c.includes(e) || c.push(e);
	const u = new Set("nights" === t ? H.ggir_review_night_extension.map((e) => J[e].header) : []), d = r ? c.filter((e) => r.includes(e + "_missing_reason")) : c.filter((e) => u.has(e) || l.some((e) => e.editRecomputeUnavailable || e.source === q.corrected.reviewSource)), p = [[
		...c.map(i),
		...Tr,
		...d.map((e) => i(e + "_missing_reason")),
		...Tr.map((e) => e + "_missing_reason")
	].join(",")], m = (e, t) => {
		const n = e.columns.indexOf(s);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: g, ggir: f, recomputed: h, provenance: _, checks: w, scoredDates: v, invalidDates: y, dateOf: b, editRecomputeUnavailable: k, editedNights: x, editedDayRows: M, savedNights: S, source: I } of l) {
		const e = S.columns.filter((e) => !ur.has(e)), n = e.filter((e) => {
			const t = S.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return S.values[t].some((e, t) => {
				const r = Number(S.values[S.columns.indexOf(J.ggir_night.header)]?.[t]), i = n.has(r) && !Object.is(n.get(r), e);
				return n.set(r, e), i;
			});
		}), r = /* @__PURE__ */ new Set(), s = (e) => Array.from({ length: f.rows }, (e, t) => t).find((t) => !r.has(t) && m(f, t) === m(g, e) && n.every((n) => Object.is(f.values[f.columns.indexOf(n)]?.[t] ?? null, g.values[g.columns.indexOf(n)]?.[e] ?? null))), a = new Set(c.filter((n) => "nights" === t ? ur.has(n) : !dr.has(n) && !e.includes(n))), o = (n, r, s, o) => {
			const l = w.get(m(n, r));
			return [
				...c.map((i) => {
					if ("invalid" === s && ("nights" === t ? ur.has(i) : /sleep|spt|waso|wake|onset|guider/i.test(i) && !e.includes(i))) return "";
					const a = n.columns.indexOf(i);
					return a < 0 ? "" : Ar(n.values[a]?.[r]);
				}),
				s,
				l?.status ?? "",
				i((l?.reasons ?? []).join(";")),
				i((l?.diffs ?? []).map((e) => e.column).join(";")),
				i(o),
				...d.map((e) => "invalid" !== s || u.has(e) && e !== J.ggir_nonwear_perc_spt.header ? k && s === I && a.has(e) && ("days" === t ? M.has(r) : x.has(m(n, r))) ? ir : u.has(e) ? null != et(n, e, r) ? "" : Ar(nt(n, e + "_missing_reason", r) ?? "source_reported_missing") : s === I ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
				"",
				l ? "" : "not_computed_for_export",
				l?.reasons.length ? "" : "not_applicable_to_row",
				l?.diffs.length ? "" : "not_applicable_to_row",
				o ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let t = 0; t < g.rows; t += 1) {
			const e = b(g, t);
			if (v && (!e || !v.has(e))) continue;
			const n = s(t);
			if (null != n && r.add(n), e && y?.has(e)) {
				null != n && p.push(o(f, n, I, "")), p.push(o(g, t, "invalid", ""));
				continue;
			}
			if (!h[t]) {
				p.push(o(g, t, I, ""));
				continue;
			}
			const i = m(g, t);
			null != n && p.push(o(f, n, I, "")), p.push(o(g, t, "recomputed", _(i)));
		}
		for (let t = 0; t < f.rows; t += 1) {
			if (r.has(t)) continue;
			const e = b(f, t);
			(!v || e && v.has(e)) && (p.push(o(f, t, I, "")), e && y?.has(e) && p.push(o(f, t, "invalid", "")));
		}
	}
	return p.length > 1 ? `${p.join("\n")}\n` : null;
}
function Br(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const r of e) for (const [e, t] of Object.entries(r.part2Reports ?? {})) {
		const i = Er("part2_report", Rr(r), e);
		n.set(i, [...n.get(i) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const r = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], s = [r.map(i).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) s.push(r.map((n) => Ar(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, s.join("\n") + "\n"];
	}));
}
function Dr(e, t) {
	const n = new Set(e);
	if (t.every((e) => n.has(e))) return [...e];
	if (!t.some((e) => n.has(e))) return [...e, ...new Set(t)];
	const r = [...e];
	let i = -1;
	for (const s of t) {
		const e = r.indexOf(s);
		e >= 0 ? i = e : r.splice(++i, 0, s);
	}
	return r;
}
const Pr = (e, t) => Ae(e).filter((e) => t?.has(e.nightDate));
async function Lr(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: ir,
		detail: ""
	};
	const r = e.current ?? e.imported;
	if (void 0 === r.tailExpansion) return {
		reason: "not_computed_for_export",
		detail: "the saved GGIR review predates the core's tail expansion flag; import the folder again"
	};
	const i = W(n);
	try {
		const { ggirVersion: n } = await i.ggirConfigValues(e.configCsv), { profile: s, reports: a } = await i.ggirPersonSummaries({
			ggir_version: n ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: r.nights,
			days: r.days,
			tail_expansion: r.tailExpansion,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(nt(r.nights, J.ggir_id.header, 0) ?? ""),
			invalid_nights: Pr(e.imported, t).map((e) => e.night),
			person_columns: Object.fromEntries(Object.entries(e.personReports ?? {}).flatMap(([e, t]) => t.rows > 0 ? [[e, t.columns]] : []))
		});
		return {
			profile: s,
			reports: a
		};
	} catch (s) {
		return n?.throwIfAborted(), {
			reason: "not_computed_for_export",
			detail: s instanceof Error ? s.message : String(s)
		};
	}
}
async function Fr(e, t, n) {
	const r = /* @__PURE__ */ new Map(), s = await Promise.all(e.map(async (e) => {
		const n = Pr(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (n) => {
			const r = await Te(e.imported, e.edits, n.night, t);
			return null == r ? [] : [`night ${String(n.night)} ${r}`];
		}))).flat(), ...n].join("; ");
	}));
	for (const [i, o] of e.entries()) {
		const e = Rr(o), t = s[i], n = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [i, s] of Object.entries(o.personReports ?? {})) {
			if (0 === s.rows) continue;
			const a = Er("person_summary_review", e, i), o = "reason" in n ? n : n.reports[i] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${i}`
			};
			r.set(a, [...r.get(a) ?? [], {
				table: s,
				source: q[e].reviewSource,
				edit: t,
				recomputed: o
			}]);
		}
	}
	const a = /* @__PURE__ */ new Set([J.ggir_id.header, J.ggir_filename.header]);
	return Object.fromEntries([...r].map(([e, t]) => {
		const r = n?.get(e), s = [...new Set(t.flatMap(({ table: e }) => e.columns))], o = (r ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : Dr(e, t.columns), s)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !Tr.includes(e)), l = Tr.map((e) => e + "_missing_reason"), c = r?.filter((e) => e.endsWith("_missing_reason") && !l.includes(e)) ?? ["refusal_detail_missing_reason", ...o.map((e) => e + "_missing_reason")], u = [[
			...o,
			...Tr,
			...c,
			...l
		].map(i).join(",")], d = (e, t) => [
			e,
			"",
			"",
			"",
			i(t)
		], p = (e) => [
			"",
			"not_computed_for_export",
			"not_applicable_to_row",
			"not_applicable_to_row",
			e ? "" : "not_applicable_to_row"
		], m = (e, t) => (n) => Ar(e.values[e.columns.indexOf(n)]?.[t]), g = (e) => c.map((t) => e.get(t) ?? ""), f = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
		for (const { table: n, source: h, edit: _, recomputed: w } of t) for (let e = 0; e < n.rows; e++) {
			const t = o.map(m(n, e)), r = new Map(o.flatMap((e) => f.get(n).has(e) ? [] : [[e + "_missing_reason", "not_applicable_to_row"]]));
			if (u.push([
				...t,
				...d(h, ""),
				...g(r),
				...p("")
			].join(",")), !_) continue;
			const s = "reason" in w ? w : 0 === w.rows ? {
				reason: "no_retained_nights",
				detail: ""
			} : null, l = "reason" in w ? null : m(w, 0), c = o.map((e, n) => a.has(e) ? t[n] : l?.(e) ?? ""), v = new Map(o.flatMap((e, t) => _r(c[t]) ? [[e + "_missing_reason", s?.reason ?? "not_applicable_to_row"]] : []));
			s?.detail && v.set(vr, i(`ggirPersonSummaries: ${s.detail}`)), u.push([
				...c,
				...d("recomputed", _),
				...g(v),
				...p(_)
			].join(","));
		}
		return [e, u.join("\n") + "\n"];
	}));
}
const Wr = H.ggir_part4_nightsummary_csv, zr = Wr.map((e) => J[e].header), Gr = [
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
], Vr = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function Ur(e, t) {
	const n = J[e], r = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof r ? i(r) : Xn(r, { integral: n.ggirIntegral ?? !1 });
}
function Hr(e, t = "legacy-recording", n, r) {
	const i = [], s = [];
	for (const l of e) l.states && 0 !== l.timestamps.length && (s.push(l.states.subarray(0, Math.min(l.timestamps.length, l.states.length))), i.push({
		seriesId: t,
		...void 0 === n ? {} : { epochLengthSeconds: n },
		timestamps: l.timestamps,
		states: l.states
	}));
	const a = new Uint8Array(s.reduce((e, t) => e + t.length, 0));
	s.reduce((e, t) => (a.set(t, e), e + t.length), 0);
	const o = e.length > 0 && e.every((e) => null == e.states) ? "no_scored_epochs" : "no_valid_epochs";
	return 0 === a.length ? Promise.resolve({
		sri: null,
		fractionValid: null,
		sriMissingReason: o,
		fractionValidMissingReason: o
	}) : W(r).validStateFraction(a).then(async (e) => {
		if (!e) return {
			sri: null,
			fractionValid: e ?? null,
			sriMissingReason: "no_valid_epochs",
			fractionValidMissingReason: null == e ? "no_valid_epochs" : null
		};
		const t = /* @__PURE__ */ new Map();
		for (const n of i) for (let e = 0; e < Math.min(n.timestamps.length, n.states.length); e++) {
			const r = n.timestamps[e];
			Number.isFinite(r) && t.set(Math.round(r), 0 === n.states[e] || 1 === n.states[e]);
		}
		const s = (void 0 === n || 86400 % n == 0) && [...t].some(([e, n]) => n && t.get(e + 86400)), a = s ? null : "insufficient_pair", o = await async function(e, t) {
			const n = Array.isArray(e) ? e : [e], r = n.map((e) => ({
				...void 0 === e.seriesId ? {} : { series_id: e.seriesId },
				...void 0 === e.epochLengthSeconds ? {} : { epoch_length_seconds: e.epochLengthSeconds }
			})), [i, s] = on(n.map((e) => e.timestamps)), [a, o] = on(n.map((e) => e.states));
			return W(t).sleepRegularityIndex(b([
				JSON.stringify(r),
				i,
				s,
				a,
				o
			], [
				i.buffer,
				s.buffer,
				a.buffer,
				o.buffer
			]));
		}(i, r);
		if (s && null == o) throw new Error("SRI producer returned a blank despite valid pairs");
		return {
			sri: o,
			fractionValid: e,
			sriMissingReason: a,
			fractionValidMissingReason: null
		};
	});
}
async function qr(e, t, n, r = {}) {
	const { signal: i } = r, s = e.participantId ?? e.filename, a = fe(n.values(), r.algorithm), o = [];
	for (const [u, v] of n) {
		if (!ai(u, r.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = Qt(v, a);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await Hr(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, i), { sri: c, fractionValid: d } = l, p = "stale" === a.status ? "scores_from_another_config" : null, m = p ?? l.sriMissingReason, g = p ?? l.fractionValidMissingReason, f = [];
	for (const v of [...t.keys()].sort()) {
		const e = t.get(v);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === u.MAIN_SLEEP && null != t.onsetTimestamp && f.push({
			date: v,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const h = [[
		...zr,
		...Gr.map((e) => `${J[e].header}_missing_reason`),
		...Vr.map((e) => `${J[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: u, onsetTs: v, wakeupTs: y } of f) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == y ? "not_applicable_to_row" : p ?? "no_scored_epochs"
		};
		if (null != y) {
			const { timestamps: r, algorithmResults: s } = await _n(n, u, a, { signal: i });
			if (s && r.length > 0) {
				t.missingReason = null;
				const n = await Yt(s, r, v, y, e.epochLengthSeconds || 60, null, i);
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
	const w = await W(i).ggirManualNightClocks(f.map((e) => e.date), Float64Array.from(f, (e) => e.onsetTs), Float64Array.from(f, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let u = 0; u < f.length; u++) {
		const { onsetTs: t, wakeupTs: n } = f[u], r = w[u], { tstH: i, nAwak: a, latency: o, efficiency: l } = _[u], p = {
			ggir_id: s,
			ggir_night: u + 1,
			ggir_sleeponset: r?.sleeponset ?? null,
			ggir_wakeup: r?.wakeup ?? null,
			ggir_spt_duration: r?.sptDuration ?? null,
			ggir_sleepparam: null,
			ggir_guider_onset: null,
			ggir_guider_wakeup: null,
			ggir_guider_spt_duration: null,
			ggir_error_onset: null,
			ggir_error_wake: null,
			ggir_error_dur: null,
			ggir_fraction_night_invalid: null,
			ggir_sleep_duration_in_spt: i,
			ggir_waso: r?.waso ?? null,
			ggir_duration_sib_wakinghours: null,
			ggir_number_sib_sleepperiod: null,
			ggir_number_of_awakenings: a,
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
			ggir_weekday: r?.weekday ?? null,
			ggir_calendar_date: r?.calendarDate ?? null,
			ggir_filename: e.filename,
			ggir_cleaningcode: r?.cleaningcode ?? null,
			ggir_sleeplog_used: !1,
			ggir_sleeplog_id: null,
			ggir_acc_available: !0,
			ggir_guider: null,
			ggir_sleep_regularity_index1: c,
			ggir_sri_fraction_valid: d,
			ggir_longitudinal_axis: null,
			ggir_guider_corrected: !1
		};
		h.push([
			...Wr.map((e) => Ur(e, p[e])),
			...Gr.map((e) => {
				const t = Wr.indexOf(e);
				return t >= 0 && null == p[Wr[t]] ? "not_computed_for_export" : "";
			}),
			...Vr.map((e) => {
				const t = Wr.indexOf(e);
				return t >= 0 && null == p[Wr[t]] ? _[u].missingReason ?? "" : "";
			}),
			m ?? "",
			g ?? ""
		].join(","));
	}
	return h.join("\n") + "\n";
}
function Kr(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const Jr = "actogram_report.html";
function Yr(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function Zr(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function Qr(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: r } = Yr(n), i = [e, r].filter(Boolean);
		t.set(n, 0 === i.length ? "part4_nightsummary.csv" : `part4_nightsummary_${i.join("_")}.csv`);
	}
	return t;
}
function Xr(e) {
	const { algoKey: t, ruleKey: n } = Yr(e), r = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
	return t || n ? n ? `${r(t)} / ${r(n)}` : r(t) : "Legacy / Unscoped";
}
function ei(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : ye(e);
}
function ti(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function ni(e, t) {
	const n = [], r = [], i = (e) => {
		for (const t of ii(e)) n.push(t), r.push(t.byteLength);
	};
	i(`<section class="pid-sec${0 === e ? " initial" : ""}" id="sec-${e}">`), i(`  <h2 class="pid-lbl">${Kr(t.pid)}</h2>`);
	for (const [s, a] of t.charts.entries()) i(`  <div class="algo-block" data-algorithm-key="${Kr(a.algoKey)}">`), i(`    <div class="algo-lbl">${Kr(Xr(a.algoKey))}</div>`), a.stale && i(`    <div class="algo-stale" role="status">${Kr(a.stale)}</div>`), i(`    <div class="cwrap" id="c${e}_${s}">`), n.push(a.plot), r.push(...a.plotLengths), i(`      <button type="button" class="svg-btn" data-download-name="${Kr(a.svgFilename)}">Download SVG</button>`), i(a.meta), i("    </div>"), i("  </div>");
	return i("</section>"), {
		blob: new Blob(n),
		lengths: r
	};
}
const ri = ["<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>", "</body>\n</html>"];
function* ii(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let r = Math.min(e.length, n + Kn / 4);
		r < e.length && /[\uD800-\uDBFF]/u.test(e[r - 1]) && (r -= 1), yield t.encode(e.slice(n, r)), n = r;
	}
	yield t.encode("\n");
}
function si(e) {
	return new TextEncoder().encode(e);
}
function ai(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function oi({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: r, layouts: i, only: s }) {
	const a = {}, o = (e) => void 0 === s || s === e;
	for (const [l, c] of r ?? Qr([...e.keys()])) {
		const t = e.get(l);
		t?.length && o(c) && (a[c] = si(`${t.join("\n")}\n`));
	}
	for (const l of Object.keys(q)) {
		const e = t.filter((e) => Rr(e) === l);
		if (0 === e.length) continue;
		const r = (t, n) => void 0 === s || e.some((e) => Object.keys(n(e) ?? {}).some((e) => Er(t, l, e) === s));
		if (r("part2_report", (e) => e.part2Reports)) for (const [t, n] of Object.entries(Br(e, i))) o(t) && (a[t] = si(n));
		for (const [t, s] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
			const r = Er(s, l), c = o(r) ? await jr(e, t, n, i?.get(r)) : null;
			c && (a[r] = si(c));
		}
		if (r("person_summary_review", (e) => e.personReports)) for (const [t, s] of Object.entries(await Fr(e, n, i))) o(t) && (a[t] = si(s));
	}
	return a;
}
async function li(e, t, n) {
	n?.throwIfAborted();
	const i = function(e, t) {
		const { signal: n } = t, { username: r, dateRange: i, snapshot: s } = e, a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const d = to(s, Ua.ggirReport, e.map((e) => e.id)), p = await Promise.all(e.map((e) => oo(s, e.id, r, n)));
				for (const [r, s] of e.entries()) {
					const e = d.files.find((e) => e.id === s.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: m, sets: g, markersByAlgo: f, invalidDates: h } = p[r], _ = uo(d, e.id), w = new Map([...f].filter(([e]) => ai(e, i))), v = /* @__PURE__ */ new Map();
					for (const [t, n] of w) for (const e of n) {
						const n = Zr(e);
						let r = v.get(n);
						r || (r = /* @__PURE__ */ new Map(), v.set(n, r)), r.set(t, e);
					}
					const y = /* @__PURE__ */ new Set();
					for (const [t, n] of w) for (const e of n) o(e) && y.add(t);
					if (m) for (const t of g) u.push({
						...t,
						...i ? { scoredDates: new Set(e.availableDates.filter((e) => ai(e, i))) } : {},
						invalidDates: h
					});
					const b = [...y].sort(), k = b[0], x = b[b.length - 1], M = [], S = [];
					for (const n of t.charts ? [..._.keys()].sort() : []) if (ai(n, i) && (null == k || null == x || n >= k && n <= x)) {
						const e = _.get(n), t = me({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), r = t.timestamps, i = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < r.length; n++) M.push(r[n]), S.push(i[n]);
					}
					const I = [];
					for (const [t, r] of v) {
						const s = Yr(t).algoKey, o = m ? "" : await qr(e, r, _, {
							...s ? { algorithm: s } : {},
							...i ? { dateRange: i } : {},
							signal: n
						}), c = m ? [] : o.replace(/\n$/u, "").split("\n");
						if (c.length > 0) {
							const e = a.get(t) ?? [];
							a.set(t, e), l.has(t) ? e.push(...c.slice(1)) : (e.push(...c), l.add(t));
						}
						const u = [], d = [];
						for (const e of r.values()) {
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
						const { algoKey: p, ruleKey: g } = Yr(t), f = [p, g].filter(Boolean).join("_"), h = fe(_.values(), s || null);
						I.push([f, {
							p: u,
							n: d,
							..."stale" === h.status ? { stale: h.reason } : {}
						}]);
					}
					0 === v.size && I.push(["", {
						p: [],
						n: []
					}]), M.length > 0 && c.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: M,
						act: S,
						algos: I
					});
				}
			},
			entries: () => oi({
				csvLinesByAlgo: a,
				ggirReviews: u
			}, { signal: n }),
			chartPidData: c,
			csvLinesByAlgo: a,
			ggirReviews: u
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
			charts: t.algos.map(([r, i]) => {
				const { algoKey: s, ruleKey: a } = Yr(r), o = ti([s, a].filter(Boolean).join("_"), "unscoped"), l = `activity-${ti(e, "recording")}-${o}-${n}.svg`, c = function(e) {
					if (0 === e.timestamps.length) return tr("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return tr("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, r = 0;
					const i = e.timestamps.map((i, s) => {
						const a = e.activity[s];
						return !Number.isFinite(i) || i <= t ? tr("timestamps must be finite and strictly ascending") : (t = i, null != a && Number.isFinite(a) ? (n = Math.min(n, a), r = Math.max(r, a), {
							timestamp: i,
							value: a
						}) : {
							timestamp: i,
							value: null
						});
					}), s = i[0].timestamp, a = i[i.length - 1].timestamp, o = a > s ? a : s + 1;
					if (!Number.isFinite(o) || o <= s) return tr("single-epoch viewport must have a representable right edge");
					r <= n && (r = n + 1);
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
							sourcePointCount: i.length,
							renderedPointCount: i.length
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
							min: s,
							max: o
						},
						valueDomain: {
							min: n,
							max: r
						},
						series: [{
							tone: "secondary",
							strokeWidth: 1.5,
							valueDomain: {
								min: n,
								max: r
							},
							points: i
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
					sleepIntervals: i.p.map((e) => ({
						startTimestamp: e.o,
						endTimestamp: e.f
					})),
					nonwearIntervals: i.n.map((e) => ({
						startTimestamp: e.s,
						endTimestamp: e.e
					})),
					additionalOverlays: [],
					cursorTimestamp: null,
					selection: null
				}), u = [...ii(`      <div class="plot-svg">${Gn(c)}</div>`)];
				return {
					algoKey: r,
					...i.stale ? { stale: i.stale } : {},
					svgFilename: l,
					plot: new Blob(u),
					plotLengths: u.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${Kr(ei(c.viewport.min))} → ${Kr(ei(c.viewport.max))} · activity domain ${Xn(c.valueDomain.min)}–${Xn(c.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), l = new Set(Qr([...i.csvLinesByAlgo.keys()]).values()), c = [];
	for (const [o, u] of Object.entries(await i.entries())) l.has(o) || c.push([o, r(s(new TextDecoder().decode(u)).records[0].text)]);
	return {
		charts: a,
		csvLinesByAlgo: i.csvLinesByAlgo,
		ggirReviews: i.ggirReviews,
		headers: c
	};
}
function ci(e) {
	return "aw5" === e ? "actoglance.source.philips_actiwatch_aw5.v1" : "actoglance.source.philips_actiware_csv.v1";
}
function ui(e) {
	return Date.parse(`${e}Z`) / 1e3;
}
async function di(e, t) {
	const n = e.timestamps_ms[0];
	if (null == n) return null;
	const r = (e.channels.find((t) => t.name === e.primary) ?? e.channels[0])?.counts ?? [], i = Array.from(r, (e) => Number.isFinite(e) && e >= 0), s = await t.roundCountStorage(Float64Array.from(r, (e, t) => i[t] ? e : 0), 0);
	return {
		start_local: (a = n / 1e3, (/* @__PURE__ */ new Date(1e3 * a)).toISOString().slice(0, 19)),
		epoch_seconds: e.epoch_seconds,
		activity: i.map((e, t) => e ? s[t] : null),
		...e.marker && e.marker.length === r.length ? { marker: e.marker } : {},
		excluded: (e.rest_intervals ?? []).filter((e) => "excluded" === e.kind)
	};
	var a;
}
async function pi(e, t, n, r = 60) {
	const i = Int8Array.from(t.scores, (e) => null == e ? -1 : 0 === e ? 1 : 0);
	return e.foldSleepWakeVotes(t.startTimestamp, t.epochSeconds, i, Float64Array.from(n), r);
}
function mi(e) {
	return {
		startTimestamp: e.startTimestamp,
		epochSeconds: e.epochSeconds,
		params: e.params,
		...e.paradigmDefaults ? { paradigmDefaults: e.paradigmDefaults } : {},
		scores: Int8Array.from(e.scores, (e) => e ?? -1).buffer
	};
}
function gi(e, t) {
	return e.filter((e) => "rest" === e.kind || "sleep" === e.kind).map((e) => ({
		kind: e.kind,
		source: e.source,
		startTimestamp: ui(e.start),
		endTimestamp: ui(e.end),
		origin: t ? "generated" : "stored",
		...e.analysis ? { analysis: e.analysis } : {}
	})).filter((e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.endTimestamp > e.startTimestamp).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function fi(e) {
	return e.map(({ start: e, end: t, ...n }) => ({
		...n,
		startTimestamp: ui(e),
		endTimestamp: ui(t)
	}));
}
function hi(e, t) {
	return e && e.length === t && t > 0 ? e : null;
}
function _i(e) {
	const t = e.timestamps_ms.length, n = (t) => e.light_channels.find((e) => e.name === t)?.counts;
	return {
		white: hi(e.light, t),
		red: hi(n("red_light"), t),
		green: hi(n("green_light"), t),
		blue: hi(n("blue_light"), t)
	};
}
function wi(e, t, n) {
	const r = (e) => {
		if (!e) return;
		const r = new Float64Array(n.length);
		for (let i = 0; i < n.length; i += 1) {
			const s = t.get(n[i] ?? NaN);
			r[i] = null == s ? NaN : e[s] ?? NaN;
		}
		return r.buffer;
	}, i = r(e.white), s = r(e.red), a = r(e.green), o = r(e.blue);
	return {
		...i ? { lux: i } : {},
		...s ? { redLight: s } : {},
		...a ? { greenLight: a } : {},
		...o ? { blueLight: o } : {}
	};
}
function vi(e, t) {
	const n = 6e4 * (yi(e, t)?.gmt_offset_minutes ?? 0);
	return 0 === n ? e.series : {
		...e.series,
		timestamps_ms: e.series.timestamps_ms.map((e) => e + n)
	};
}
function yi(e, t) {
	return (void 0 === t ? void 0 : e.downloads.find((e) => e.guid === t)) ?? e.downloads.find((e) => e.is_primary) ?? e.downloads[0];
}
function bi(e) {
	const t = e.channels.find((t) => t.name === e.primary) ?? e.channels[0];
	if (!t) throw new Error("The device file carries no activity count channel.");
	return t.counts;
}
async function ki(e, t, n = [], r = null) {
	const i = function(e, t) {
		if (!t || t.length !== e.length) return /* @__PURE__ */ new Float64Array(0);
		const n = [];
		return t.forEach((t, r) => {
			t && n.push((e[r] ?? NaN) / 1e3);
		}), Float64Array.from(n.filter(Number.isFinite));
	}(e.timestamps_ms, e.marker), s = function(e) {
		const { timestamps_ms: t, off_wear: n, off_wear_invalid: r, epoch_seconds: i } = e;
		if (n.length !== t.length) return [];
		const s = [];
		let a = null;
		for (let o = 0; o <= t.length; o += 1) {
			const e = o < t.length && !0 === n[o] && !0 !== r?.[o], l = (t[o] ?? NaN) / 1e3;
			if (e && null === a && (a = l), !e && null !== a) {
				const e = (t[o - 1] ?? NaN) / 1e3;
				s.push({
					startTimestamp: a,
					endTimestamp: e + i
				}), a = null;
			}
		}
		return s;
	}(e), a = e.timestamps_ms.length > 0 && e.off_wear.length === e.timestamps_ms.length, o = e.epoch_seconds >= 60 ? e : await t(e);
	if (60 !== o.epoch_seconds && 120 !== o.epoch_seconds) throw new Error("Native import requires a 60- or 120-second scoring grid");
	const l = 120 === o.epoch_seconds ? [...n, "This recording keeps its native 120-second scoring grid. A 60-second view, one-minute sleep scorers, Choi nonwear and finer algorithm variants are unavailable because the source contains only two-minute sums."] : n, c = o.activity_invalid ?? [], u = Uint8Array.from(c.length === o.timestamps_ms.length ? c : [], (e) => e ? 1 : 0);
	return {
		epochSeconds: o.epoch_seconds,
		timestampsMs: o.timestamps_ms,
		counts: bi(o),
		actiwareInvalidActivityMinutes: u,
		actiwareStatisticsInput: r,
		sourceEpochSeconds: e.epoch_seconds,
		eventMarkerInstantsSec: i,
		offWristPeriods: s,
		hasOffWristChannel: a,
		warnings: l,
		light: _i(o),
		actiwareIntervals: [],
		actiwareSleepWake: null,
		actiwareStatistics: [],
		actiwareRecording: null,
		actiwareWakeThreshold: null,
		actiwareRestProposal: null
	};
}
function xi(e) {
	const { proposal: t, nights: n } = e ?? {
		proposal: Ye,
		nights: []
	}, r = t.rest_autoscore === T.screens ? n : [];
	return JSON.stringify([
		t.use_saved_rest_intervals,
		t.rest_autoscore,
		r.map(({ timestamps: e, activity_counts: t, sleep_scores: n, ...r }) => r)
	]);
}
function Mi(e, t, n, r = /* @__PURE__ */ new Map(), i = {}) {
	const s = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = (/* @__PURE__ */ new Date(1e3 * (o - 43200))).toISOString().slice(0, 10);
		let t = s.get(e);
		t || s.set(e, t = []), t.push(o);
	}
	const a = Array.from(t);
	return [...s].map(([e, t]) => {
		const s = Date.parse(`${e}T00:00:00Z`) / 1e3, o = r.get(e);
		return Le({
			analysisDate: e,
			epochLengthSeconds: n,
			timestamps: t,
			activityCounts: [],
			sleepScores: [],
			eventMarkerTimestamps: a.filter((e) => e >= s + 43200 && e < s + 151200),
			diaryBedTime: ie(o, "diary_in_bed_time"),
			diaryOnsetTime: ie(o, "diary_onset_time"),
			diaryOutBedTime: ie(o, "diary_out_of_bed_time"),
			diaryWakeTime: ie(o, "diary_wake_time"),
			nightStartHour: Oe(i.start),
			nightEndHour: Oe(i.end)
		});
	});
}
async function Si(e, t, n, r, i, s, a, o) {
	a?.throwIfAborted();
	const l = n ? Je(n, Ke(n, r, e)) : null, c = !n || !l || Ve(n, l), u = c || null !== n && null !== l && !He(n, l) ? e.filter((e) => "rest" === e.kind) : [], d = c ? e.filter((e) => "sleep" === e.kind) : [], p = t && l && i.actiwareSleepWake ? await i.actiwareSleepWake(t, l).catch(() => null) : null;
	a?.throwIfAborted();
	const m = n ? qe(n, r, e) : [], g = t && l && p ? {
		startTimestamp: ui(t.start_local),
		epochSeconds: t.epoch_seconds,
		scores: p,
		params: l,
		...m.length > 0 ? { paradigmDefaults: m } : {}
	} : null, f = t && l && i.actiwareWakeThreshold ? await i.actiwareWakeThreshold(t, l).catch(() => null) : null;
	a?.throwIfAborted();
	const h = !1 !== o?.proposal.use_saved_rest_intervals && u.length > 0 && d.length > 0 ? null : t && l && i.actiwareIntervals ? await i.actiwareIntervals(t, u, l, ...o ? [o] : []).catch(() => null) : null;
	a?.throwIfAborted();
	const _ = h ?? {
		intervals: [...e],
		generated: !1
	}, w = _.intervals.filter((e) => "rest" === e.kind || "sleep" === e.kind), v = s && p ? {
		...s,
		sleep_wake: p
	} : s, y = v && i.actiwareIntervalStatistics && w.length > 0 ? await i.actiwareIntervalStatistics({
		...v,
		intervals: w
	}).then((e) => fi(e ?? [])).catch(() => (console.warn("[actiware-statistics] the core rejected this file's Statistics input"), null)) : [];
	return a?.throwIfAborted(), {
		intervals: gi(_.intervals, _.generated),
		sleepWake: g,
		statistics: y,
		statisticsInput: v,
		wakeThreshold: f ?? null,
		restProposal: o ? {
			key: xi(o),
			...h?.nights ? { notes: Object.fromEntries(h.nights.map((e) => [e.analysis_date, e.note])) } : {}
		} : null
	};
}
const Ii = "Actiware statistics could not be computed for this file; the Actiware statistics block stays empty.";
function Ti(e, t) {
	return e ? (t ?? []).map((e) => `Actiware setting ${e.field} = '${e.raw_label}' not recognised; using default.`) : ["No Actiware analysis settings in this file; Actiware Sleep/Wake and rest intervals are not recomputed."];
}
async function Ai(e, t) {
	if (Ei(e)) return "aw5";
	const n = e.name.toLowerCase();
	if (n.endsWith(".aw5")) return "aw5";
	if (!n.endsWith(".csv")) return null;
	if ("function" != typeof t.detectDeviceFormat) return null;
	const r = new Uint8Array(await e.slice(0, 65536).arrayBuffer());
	return i = await t.detectDeviceFormat(r, e.name).catch(() => null), s = e.name, "actiware_csv" === i ? "actiware_csv" : "aw5" === i || s.toLowerCase().endsWith(".aw5") ? "aw5" : null;
	var i, s;
}
async function Ri(e, t, n, r, i, s = { cancel: () => {} }, a) {
	const o = (e, t) => P(t, L, e, s.signal, s.cancel), l = (e) => i && a ? {
		proposal: a.proposal,
		nights: a.proposal.rest_autoscore === T.screens ? Mi(e.timestampsMs.map((e) => e / 1e3), e.eventMarkerInstantsSec, e.epochSeconds, void 0, {
			start: a.nightStartHour,
			end: a.nightEndHour
		}) : []
	} : null, c = async (e) => (await o("aggregateEpochSeries", () => n.aggregateEpochSeries({
		target_seconds: 60,
		series: e,
		sleep_scores: [],
		event_markers: []
	}))).series;
	if ("aw5" === t) {
		const t = Ei(e) ? e.aw5Subject.downloadGuids[0] : void 0, a = Ei(e) ? await e.loadAw5(s.signal) : await o("parseAw5", async () => n.parseAw5(new Uint8Array(await e.arrayBuffer())));
		if (D(s.signal, "after decoding the .AW5 database"), !a) throw new Error("This build's actours core cannot read .AW5 databases yet (needs the pin that exports parseAw5). Export the recording from Actiware as CSV instead.");
		const { warnings: u } = function(e) {
			const { status: t, reasons: n } = e.alignment;
			if ("broken" === t) throw new Error(`This .AW5 recording's samples do not line up with its clock (${n.join("; ") || "alignment broken"}), so it was not imported.`);
			return "suspect" === t ? { warnings: [`.AW5 alignment is suspect: ${n.join("; ") || "no reason given"}. Check the plot against the Actiware report.`] } : { warnings: [] };
		}(a), d = yi(a, t), p = a.actiware_analysis, m = p?.statistics_input ?? a.actiware_statistics_input ?? null;
		r?.(.6, "Preparing the supported native scoring grid...");
		const g = await ki(vi(a, t), c, u, m);
		r?.(.8, "Actiware sleep/wake and statistics...");
		const f = p?.params ?? a.actiware_params, h = f ? {
			params: f,
			intervals: p?.intervals ?? a.series.rest_intervals ?? [],
			...p?.analysis ? { analysis: p.analysis } : {},
			...a.other_analyses ? { otherAnalyses: a.other_analyses } : {}
		} : null, _ = await Si(h?.intervals ?? [], p?.input ?? a.actiware_input ?? await di(vi(a, t), n), h?.params ?? null, i, n, m, void 0, l(g));
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
				...Ti(f, p?.params_warnings ?? a.actiware_params_warnings ?? a.series.actiware_params_warnings),
				..._.statistics ? [] : [Ii]
			],
			...d ? { gmtOffsetMinutes: d.gmt_offset_minutes } : {}
		};
	}
	const u = await o("parseEpochSeries", async () => n.parseEpochSeries(new Uint8Array(await e.arrayBuffer()), e.name));
	D(s.signal, "after parsing the Actiware export"), r?.(.6, "Preparing the supported native scoring grid...");
	const d = await ki(u, c, [], u.actiware_statistics_input ?? null);
	r?.(.8, "Actiware sleep/wake and statistics...");
	const p = u.actiware_params ?? null, m = p ? {
		params: p,
		intervals: u.rest_intervals ?? []
	} : null, g = await Si(u.rest_intervals ?? [], u.actiware_input ?? await di(u, n), p, i, n, u.actiware_statistics_input ?? null, void 0, l(d));
	return {
		...d,
		actiwareRestProposal: g.restProposal,
		actiwareStatisticsInput: g.statisticsInput,
		actiwareIntervals: g.intervals,
		actiwareSleepWake: g.sleepWake,
		actiwareStatistics: g.statistics ?? [],
		actiwareRecording: m,
		actiwareWakeThreshold: g.wakeThreshold,
		warnings: [
			...d.warnings,
			...Ti(p, u.actiware_params_warnings),
			...g.statistics ? [] : [Ii]
		]
	};
}
function Ei(e) {
	return "aw5Subject" in e;
}
function Ci(e, t) {
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
var Ni = class extends Error {
	name = "ActiwareSleepContainmentError";
}, $i = class extends Error {
	name = "ActiwareRestEditError";
};
const Oi = (e, t) => Math.round((t - e.startTimestamp) / e.epochSeconds);
function ji(e, t) {
	return e.startTimestamp + Oi(e, t) * e.epochSeconds;
}
const Bi = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " "), Di = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19);
function Pi(e) {
	return {
		kind: e.kind,
		source: e.source,
		start: Di(e.startTimestamp),
		end: Di(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	};
}
const Li = (e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind);
function Fi(e, t) {
	return (e ?? []).filter((e) => "rest" === e.kind && null !== Be([e], t));
}
const Wi = (e, t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp;
function zi(e, t, n) {
	const r = De(e, t);
	return r ? [...r.sleep && !n ? [{
		onsetTimestamp: r.sleep.startTimestamp,
		offsetTimestamp: r.sleep.endTimestamp,
		markerIndex: 1,
		markerType: u.MAIN_SLEEP
	}] : [], ...(r.additionalSleeps ?? []).map((e, t) => ({
		onsetTimestamp: e.startTimestamp,
		offsetTimestamp: e.endTimestamp,
		markerIndex: t + 2,
		markerType: u.NAP
	}))] : [];
}
function Gi(e, t, n, r) {
	return zi(t, n, r).map((t) => {
		const n = e.find((e) => e.markerType === t.markerType && e.onsetTimestamp === t.onsetTimestamp && e.offsetTimestamp === t.offsetTimestamp);
		return n ? {
			...n,
			markerIndex: t.markerIndex
		} : t;
	});
}
function Vi(e, t) {
	const n = [...t].flatMap((t) => {
		const n = De(e, t);
		return n?.sleep ? [n.sleep] : [];
	});
	return (e ?? []).filter((e) => "sleep" !== e.kind || !n.some((t) => t.startTimestamp === e.startTimestamp && t.endTimestamp === e.endTimestamp));
}
async function Ui(e, t, n, r) {
	if (!t) return null;
	const i = Vi(e, n).map(Pi).sort(Li);
	if (0 === i.length) return [];
	const s = await r({
		...t,
		intervals: i
	});
	return s ? fi(s).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)) : null;
}
async function Hi(e, t, n, r) {
	const i = Fi(e, t), s = "move" === n.kind ? i.find((e) => e.startTimestamp === n.from.startTimestamp && e.endTimestamp === n.from.endTimestamp) : "remove" === n.kind ? i.find((e) => Wi(n.holding, e)) : void 0;
	if ("add" !== n.kind && !s) throw new $i("That rest interval changed since it was shown; reload the night.");
	const a = e.filter((e) => e !== s && !(s && "sleep" === e.kind && Wi(e, s)));
	if ("remove" === n.kind) return a;
	const { grid: o } = r, l = s?.analysis, c = {
		kind: "rest",
		source: "event_marker",
		origin: "scorer",
		startTimestamp: ji(o, n.to.startTimestamp),
		endTimestamp: ji(o, n.to.endTimestamp),
		...l ? { analysis: l } : {}
	};
	if (c.endTimestamp <= c.startTimestamp) throw new $i("A rest interval must end after it starts.");
	if (a.some((e) => "rest" === e.kind && e.startTimestamp < c.endTimestamp && e.endTimestamp > c.startTimestamp)) throw new $i("A rest interval cannot overlap another rest interval.");
	if (null === Be([c], t)) throw new $i("That rest interval would belong to another night.");
	const u = await async function(e, { epochs: t, params: n, grid: r, core: i }) {
		if (0 === e.length) return [];
		const s = await i.actiwareIntervals(t, e.map(Pi), n);
		if (!s || s.generated) throw new Error("The Actiware core did not derive the sleep inside these rest intervals.");
		const a = gi(s.intervals.filter((e) => "sleep" === e.kind), !0);
		return function(e, t) {
			const n = e.filter((e) => "rest" === e.kind);
			for (const r of e.filter((e) => "sleep" === e.kind)) {
				const e = Oi(t, r.startTimestamp), i = Oi(t, r.endTimestamp);
				if (!n.some((n) => e >= Oi(t, n.startTimestamp) && i <= Oi(t, n.endTimestamp))) throw new Ni(`Actiware sleep interval ${Bi(r.startTimestamp)}–${Bi(r.endTimestamp)} lies outside every rest interval.`);
			}
		}([...e, ...a], r), a;
	}([c], r);
	return [
		...a,
		c,
		...u
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function qi(e, t) {
	const n = (e) => [
		e.startTimestamp,
		e.endTimestamp,
		e.origin
	].join(":"), r = (e) => e ? {
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	} : null, i = (e) => e.filter((e) => "rest" === e.kind), s = new Set(i(e).map(n)), a = new Set(i(t).map(n));
	return {
		from: r(i(e).find((e) => !a.has(n(e)))),
		to: r(i(t).find((e) => !s.has(n(e))))
	};
}
async function Ki(e, t, n, r) {
	const i = await Ji(e, t, n, r);
	return i ? Zi(e.file, i, t.keys()) : null;
}
async function Ji({ file: e, statisticsInput: t }, n, r, i) {
	if (!t) return null;
	const s = W(i), a = e.actiwareIntervals ?? [], o = await gn(a.map((e) => e.startTimestamp), s);
	let l = [...a];
	for (const m of n.keys()) {
		const e = Fi(a, m), t = a.filter((t) => "sleep" === t.kind && Yi(a, t, e, () => o(t.startTimestamp) === m)), r = n.get(m), i = r?.sleepMarkers.filter((e) => (e.markerType === u.NAP || e.markerType === u.MAIN_SLEEP && !r.isInvalidNight) && null != e.onsetTimestamp && Number.isFinite(e.onsetTimestamp) && null != e.offsetTimestamp && Number.isFinite(e.offsetTimestamp) && e.offsetTimestamp > e.onsetTimestamp);
		if (r?.isInvalidNight || i?.length) {
			l = l.filter((e) => !t.includes(e));
			const e = t[0]?.analysis;
			for (const t of i ?? []) l.push({
				kind: "sleep",
				source: "event_marker",
				startTimestamp: t.onsetTimestamp,
				endTimestamp: t.offsetTimestamp,
				origin: "scorer",
				...e ? { analysis: e } : {}
			});
		}
	}
	const c = await r({
		...t,
		intervals: l.map(Pi).sort(Li)
	});
	if (!c) return null;
	const d = fi(c), p = [...e.actiwareStatistics ?? [], ...d].map((e) => e.startTimestamp);
	return {
		calculated: d,
		rowDateOf: await gn(p, s),
		datedRows: new Set(p)
	};
}
const Yi = (e, t, n, r) => {
	const i = e.find((e) => "rest" === e.kind && t.startTimestamp >= e.startTimestamp && t.endTimestamp <= e.endTimestamp);
	return i ? n.includes(i) : r();
};
function Zi(e, t, n, r) {
	const i = e.actiwareIntervals ?? [], s = [...n].map((e) => ({
		date: e,
		rests: Fi(i, e)
	})), a = (e) => s.some(({ date: n, rests: s }) => "rest" === e.kind ? null !== Be([e], n) : "sleep" === e.kind && Yi(i, e, s, () => {
		return i = e.startTimestamp, (t.datedRows.has(i) || !r ? t.rowDateOf(i) : r(i)) === n;
		var i;
	}));
	return [...(e.actiwareStatistics ?? []).filter((e) => !a(e)), ...t.calculated.filter(a)].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Qi(e, t) {
	return (e.actiwareStatistics ?? []).map((e) => e.startTimestamp).filter((e) => !t.datedRows.has(e));
}
const Xi = [
	"temperature",
	"lux",
	"redLight",
	"greenLight",
	"blueLight"
];
function es(e) {
	return "string" == typeof e ? e : null;
}
function ts(e) {
	return "number" == typeof e ? e : null;
}
function ns(e, t) {
	const n = function(e, t) {
		switch (e.formatter) {
			case "verbatim_string": return function(e) {
				return e ? i(e) : "";
			}(es(t));
			case "display_label": {
				const n = es(t);
				return n ? function(e) {
					return e ? i(e) : "";
				}(e.labelEnum ? K(e.labelEnum, n) : n) : "";
			}
			case "core_printed_text":
			case "date_iso": return function(e) {
				return e ?? "";
			}(es(t));
			case "integer": return function(e) {
				return null == e ? "" : String(Math.trunc(e));
			}(ts(t));
			case "fixed2": return function(e) {
				return null == e ? "" : e.toFixed(2);
			}(ts(t));
			case "python_scalar_str": return function(e) {
				return null == e ? "" : String(e);
			}("boolean" == typeof t ? null : t);
			case "python_float_repr": return function(e) {
				if (null == e) return "";
				if (!Number.isFinite(e)) return String(e);
				const t = String(e);
				return t.includes(".") || t.includes("e") ? t : `${t}.0`;
			}(ts(t));
			case "python_bool": return function(e) {
				return null == e ? "" : e ? "True" : "False";
			}("boolean" == typeof t ? t : null);
			case "clock_hhmm": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${er(t.getUTCHours())}:${er(t.getUTCMinutes())}`;
			}(ts(t));
			case "datetime_seconds": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${String(t.getUTCFullYear())}-${er(t.getUTCMonth() + 1)}-${er(t.getUTCDate())} ${er(t.getUTCHours())}:${er(t.getUTCMinutes())}:${er(t.getUTCSeconds())}`;
			}(ts(t));
			case "ggir_value": return Xn(t, { integral: e.ggirIntegral ?? !1 });
		}
	}(e, t);
	return "" === n ? V[e.sentinel] : n;
}
function rs(e, t) {
	if (!t) return "";
	const { labelEnum: n } = J[e];
	return n ? K(n, t) : t;
}
const is = Q.invalid_night_row?.markerTypeCell ?? "", ss = Q.nonwear_row?.markerTypeCell ?? "";
function as(e) {
	return H[e].filter((e) => "server" !== J[e].plane);
}
function os(e) {
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
function ls(e) {
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
const cs = [
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
], us = [
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
async function ds(e, t, n, r, i, s, a) {
	try {
		return {
			metrics: t ? await Zt(e, t, n, r, i, s, a) : await Yt(e, n, r, i, s, null, a),
			error: null
		};
	} catch {
		a?.throwIfAborted();
		return console.warn("[local-export] metric computation failed for a selected period"), {
			metrics: null,
			error: "Metric computation failed for one selected period."
		};
	}
}
async function ps(e, t, n, r) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const i = new Set(n.filter((t) => t.markerType === u.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return i.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : Hr(t.filter((e) => i.has(e.date)), e, t[0]?.epochLengthSeconds, r);
}
function ms(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const gs = [
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
], fs = {
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
}, hs = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => rs("algorithm", e.algorithm),
	summary_detection_rule: (e) => rs("detection_rule", e.detectionRule),
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
}, _s = U;
function ws(e) {
	return O(e);
}
function vs(e) {
	return JSON.stringify(e, null, 2);
}
const ys = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function bs(e = _s, t = !1) {
	return Rs("codebook_csv", e, ys, void 0, t);
}
const ks = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], xs = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function Ms(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== u.MAIN_SLEEP) continue;
		const e = ks.map((e) => Ts(e, n)).join("\0"), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}
function* Ss(e, t = !1) {
	const n = Ms(e);
	let r = 0;
	const i = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > r && (r = t.length), t;
	}), s = ks.map((e) => J[e].header);
	for (let o = 1; o <= r; o++) for (const [e] of xs) s.push(`night${String(o)}_${e}`);
	const a = s;
	yield t ? [...s, ...a.map((e) => e + "_missing_reason")].join(",") : s.join(",");
	for (const o of i) {
		const e = o[0], n = ks.map((t) => Ts(t, e)), i = ks.map((t) => Is[t]?.(e) ? "" : As[t] ?? "");
		for (let t = 0; t < r; t++) {
			const e = o[t];
			for (const [t, r] of xs) {
				const s = e ? Ts(r, e) : "";
				n.push(s), i.push(s ? "" : e ? "date" === t ? "" : e.derivedMissingReasons?.[r] ?? e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? i : []].join(",");
	}
}
const Is = {
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
function Ts(e, t) {
	return ns(J[e], Is[e]?.(t) ?? null);
}
const As = {
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
function Rs(e, t, n, r, i = !1) {
	const s = r && r.length > 0 ? new Set(r) : null, a = as(e).filter((e) => null == s || s.has(J[e].header)), o = i ? a.filter((e) => As[e]) : [], l = [[...a.map((e) => J[e].header), ...o.map((e) => J[e].header + "_missing_reason")].join(",")];
	for (const c of t) l.push([...a.map((e) => ns(J[e], n[e]?.(c) ?? null)), ...o.map((e) => {
		const t = n[e]?.(c);
		return null == t || "" === t ? As[e] ?? "" : "";
	})].join(","));
	return l.join("\n");
}
function Es(e, t, n = !1) {
	const r = Rs("sleep_csv", e, Is, t, n), i = t?.length ? new Set(t) : null, a = [
		"onset_time",
		"offset_time",
		"onset_datetime",
		"offset_datetime"
	], o = ["in_bed_datetime", "out_of_bed_datetime"], l = [
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
	], c = [
		...a,
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
		...o,
		...l
	].filter((t) => (!i || i.has(J[t].header)) && e.some((e) => [...a, ...o].includes(t) && null == Is[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || l.includes(t) && e.metricMissingReason));
	return 0 === c.length ? r : s(r).records.map((t, n) => {
		if (0 === n) return t.text + "," + c.map((e) => `${J[e].header}_missing_reason`).join(",");
		const r = e[n - 1];
		return t.text + "," + c.map((e) => r.markerType === ss ? "manual_nonwear_period" : r.markerType === is ? "invalid_night" : a.includes(e) ? null == Is[e]?.(r) ? "source_reported_missing" : "" : o.includes(e) ? null == Is[e]?.(r) ? "not_applicable_to_row" : "" : r.sensorMissingReasons?.[e] ?? r.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? r.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (l.includes(e) ? r.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
as("sleep_csv").map((e) => J[e].header);
const Cs = Q.invalid_night_row.markerTypeCell, Ns = Y("actiware_interval_csv", "local"), $s = [
	"interval_score_count",
	"interval_score_average",
	"interval_score_manual_count",
	"interval_score_manual_average",
	"interval_score_scheduled_count",
	"interval_score_scheduled_average",
	"interval_score_no_response_count",
	"interval_score_late_count",
	"interval_score_late_average"
].map((e) => J[e].header), Os = (e, t) => Math.round(e) === Math.round(t);
async function js(e, t, n, r) {
	const i = r ? Vi(e.actiwareIntervals, r.invalidDates) : (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind), s = i.filter((e) => "rest" === e.kind), a = i.filter((e) => "rest" === e.kind || "sleep" === e.kind && s.some((t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp)).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), o = e.actiwareStatistics ?? [], l = await gn([...a.map((e) => e.startTimestamp), ...o.map((e) => e.startTimestamp)], W(n)), c = /* @__PURE__ */ new Set(), u = (t, n) => ({
		filename: e.filename,
		participantId: e.participantId ?? null,
		studyDate: l(t.startTimestamp),
		intervalNumber: null,
		interval: t,
		statistics: n
	}), d = a.map((e) => {
		const t = o.findIndex((t, n) => !c.has(n) && t.kind === e.kind && Os(t.startTimestamp, e.startTimestamp) && Os(t.endTimestamp, e.endTimestamp));
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
function Bs(e, t, n) {
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
const Ds = new Set(nr.map(([, e]) => e)), Ps = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
function Ls(e) {
	if (!Number.isFinite(e)) return [
		"",
		"",
		""
	];
	const t = /* @__PURE__ */ new Date(1e3 * Math.round(e)), n = t.toISOString();
	return [
		n.slice(0, 10),
		Ps[t.getUTCDay()],
		n.slice(11, 19)
	];
}
function Fs(e, t = !1) {
	const n = t ? nr.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], r = [[
		...Ns,
		...n.map(([, e]) => e + "_missing_reason"),
		...t ? [
			"Participant ID_missing_reason",
			"Origin_missing_reason",
			"Analysis_missing_reason",
			...$s.map((e) => e + "_missing_reason")
		] : []
	].join(",")], s = (e) => J[e].header;
	for (const { filename: a, participantId: o, studyDate: l, intervalNumber: c, interval: u, statistics: d, invalidNight: p } of e) {
		const e = !0 === p && !Number.isFinite(u.startTimestamp), [m, g, f] = Ls(u.startTimestamp), [h, _, w] = Ls(u.endTimestamp), v = new Map([
			[s("filename"), a],
			[s("participant_id"), o ?? ""],
			[s("study_date"), l],
			[s("interval_kind"), p ? Cs : u.kind],
			[s("interval_number"), null == c ? "" : String(c)],
			[s("interval_source"), e ? "" : u.source],
			[s("interval_start_date"), m],
			[s("interval_start_day"), g],
			[s("interval_start_time"), f],
			[s("interval_end_date"), h],
			[s("interval_end_day"), _],
			[s("interval_end_time"), w],
			[s("interval_origin"), e ? "" : u.origin],
			[s("interval_analysis"), u.analysis ?? ""],
			...nr.map(([, e]) => [e, d?.printed?.[e] ?? ""]),
			...$s.map((e) => [e, p ? "" : u.subjectiveScores?.[e] ?? ""])
		]), y = n.map(([e]) => {
			if (p) return "invalid_night";
			if (!d || null != d[e]) return "";
			if (e.startsWith("off_wrist")) return "source_reported_missing";
			const t = /_(white|red|green|blue)(?:_percent)?$/u.exec(e)?.[1];
			return t && null == d["invalid_" + t + "_percent"] ? "source_reported_missing" : "";
		}), b = $s.map((e) => p ? "invalid_night" : u.subjectiveScores?.[e] ? "" : "source_no_subjective_scores");
		r.push([
			...Ns.map((e) => Ds.has(e) ? v.get(e) ?? "" : i(v.get(e) ?? "")),
			...y,
			...t ? [
				o ? "" : "source_reported_missing",
				e ? "invalid_night" : u.origin ? "" : "source_reported_missing",
				u.analysis ? "" : p ? "invalid_night" : "not_applicable_to_row",
				...b
			] : []
		].join(","));
	}
	return `${r.join("\n")}\n`;
}
const Ws = Y("event_marker_csv", "local"), zs = 86400, Gs = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * zs * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), Vs = (e) => e < 10 ? `0${String(e)}` : String(e);
function Us(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / zs), n = e - t * zs;
	return `${Gs(t)} ${Vs(Math.floor(n / 3600))}:${Vs(Math.floor(n / 60) % 60)}:${Vs(n % 60)}`;
}
function Hs(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function qs(e, t, n, r, i) {
	const s = [], a = to(n, Ua.event, e), o = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		i?.throwIfAborted();
		const e = Hs(l, uo(a, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await gn(e, W(i)), c = new Set(io(a, l.id, r).keys());
		for (const r of e) {
			const e = o(r);
			t && (e < t[0] || e > t[1]) || c.has(e) && s.push({
				filename: l.filename,
				participantId: l.participantId ?? null,
				studyDate: e,
				localTimestamp: r,
				gmtOffsetMinutes: n
			});
		}
	}
	return s;
}
const Ks = "actiware_sleep_wake_export.csv", Js = Y("actiware_sleep_wake_csv", "local");
async function Ys(e, t, n, r) {
	if (0 === e.scores.byteLength) return [];
	const i = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, s = n ?? new Set(await r.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((i - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), i])));
	return (await Promise.all([...s].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await pn(t, void 0, void 0, r);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
function Zs(e, t, n, r) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		Us(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...r ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => i(e)).join(",");
}
const Qs = Kn, Xs = new Uint8Array([3, 0]);
var ea = class extends Ut {
	flag = 3;
	constructor(e) {
		super(e), this.compression = 8;
	}
	process() {}
	emit(e, t) {
		this.ondata(null, e, t);
	}
};
async function* ta(e) {
	const t = new TextDecoder();
	let n, r = "";
	for await (const i of async function* () {
		for await (const t of e) for (let e = 0; e < t.byteLength; e += Qs) yield t.subarray(e, e + Qs);
		yield null;
	}()) {
		const e = null === i;
		r += e ? t.decode() : t.decode(i, { stream: !0 });
		const a = s(r, e);
		if (e && a.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const o = a.remainder ?? "";
		if (o.length > Qs || a.records.some((e) => e.text.length > Qs)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
		if (a.records.length) {
			const e = void 0 === n;
			n ??= a.records[0].text + "\n";
			const t = (e ? "" : n) + r.slice(0, r.length - o.length);
			yield {
				bytes: new TextEncoder().encode(t),
				text: t,
				rows: a.records.length - (e ? 1 : 0)
			};
		}
		r = o;
	}
}
const na = (e) => e.slice(e.lastIndexOf("/") + 1), ra = /* @__PURE__ */ new Map();
E.GGIR_CORRECTED_WARM;
const ia = (e) => `${e.name}:ggir-corrected-values`, sa = () => "undefined" == typeof navigator ? void 0 : navigator.locks;
async function aa(e, t, r, i) {
	const s = await async function(e, t, n, r) {
		if (i = (await ae(e))?.extraSettings, !0 !== f("ggir_export_corrected_values", i?.ggir_export_corrected_values).value) return null;
		var i;
		const s = /* @__PURE__ */ new Map(), a = await se(e, t.length ? { onlyFileIds: t } : void 0), o = new Map(a.map((e) => [e.id, e])), l = await e.ggirResultsBundles.where("fileId").anyOf([...o.keys()]).toArray(), u = await c(e, l.map((e) => e.fileId)), d = l.filter((e) => !e.ggirCorrections), p = [...new Set(d.map((e) => e.configCsv))], m = await Promise.all(p.map((e) => async function(e, t) {
			const n = ra.get(t);
			if (n) return n;
			const r = await async function(e, t) {
				const { ggirVersion: n } = await e.ggirConfigValues(t), r = await e.rerunGgirResults({
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
				return "ok" === r.status ? {
					profile: r.profile,
					revision: r.actours_revision
				} : { notApplied: r.reason ?? `GGIR ${n ?? "(unknown version)"} has no corrected profile` };
			}(e, t);
			return ra.set(t, r), r;
		}(n, e)));
		r?.throwIfAborted();
		const g = [];
		for (const c of d.sort((e, t) => o.get(e.fileId).filename.localeCompare(o.get(t.fileId).filename))) {
			const e = m[p.indexOf(c.configCsv)];
			if ("notApplied" in e) {
				s.set(c.fileId, e);
				continue;
			}
			const t = o.get(c.fileId), n = JSON.stringify([
				t.ggirBundleRevision ?? null,
				e.revision,
				e.profile
			]);
			s.set(c.fileId, {
				key: n,
				revision: t.ggirBundleRevision
			}), u.get(c.fileId) !== n && g.push({
				fileId: c.fileId,
				key: n,
				revision: t.ggirBundleRevision,
				size: t.sourceSizeBytes ?? 0,
				name: t.filename
			});
		}
		return {
			plans: s,
			misses: g
		};
	}(e, t, W(r.signal), r.signal);
	if (!s) return null;
	const { plans: a, misses: o } = s;
	if (0 === o.length) return a;
	let l = 0;
	r.onProgress?.(l, o.length);
	const u = G(Math.max(0, ...o.map((e) => e.size)), {
		cores: navigator.hardwareConcurrency,
		deviceMemoryGib: j()
	}), d = await z(o.map((t) => ({
		name: t.name,
		cost: t.size,
		run: async (s, a) => {
			if (i && await async function(e) {
				const t = await sa()?.query(), n = (t) => t.name === ia(e);
				return (t?.pending?.some(n) ?? !1) || !1;
			}(e)) return { miss: t };
			try {
				const r = await m(e, t.fileId);
				if (!r) return {
					miss: t,
					notApplied: "the recording was deleted during the export"
				};
				const i = await async function(e, t) {
					if (!e.resultsCsv) return { notApplied: "imported before the app kept GGIR's results/ files; import the GGIR output folder again for its corrected values" };
					if (!e.ms4) return { notApplied: Ce };
					const { ggirVersion: r } = await t.ggirConfigValues(e.configCsv), i = () => {
						const t = [], n = (e) => void 0 === e ? null : (t.push("string" == typeof e ? new TextEncoder().encode(e) : new Uint8Array(e)), t.length - 1);
						return {
							buffers: t,
							add: n,
							request: {
								ggir_version: r ?? "",
								corrections: "corrected",
								config_csv: e.configCsv,
								sleeplog_csv_index: n(e.sleeplogCsv),
								sleeplog_rdata_index: n(e.sleeplogRData),
								data_cleaning_csv_index: n(e.dataCleaningCsv),
								qwindow_csv_index: n(e.qwindowCsv)
							}
						};
					}, s = e.recordingFile, a = n(s), o = {}, l = /* @__PURE__ */ new Map(), c = (e) => {
						for (const { file: t } of e.changes) {
							const e = /^meta\/(ms\d)\.out\//u.exec(t)?.[1] ?? na(t);
							o[e] = (o[e] ?? 0) + 1;
						}
						for (const t of e.corrections_not_applied) l.set(t.correction, t.reason);
					}, u = i(), d = {
						recording_id: a,
						filename: s,
						part1_index: u.add(e.part1),
						ms2_index: u.add(e.ms2),
						ms3_index: u.add(e.ms3),
						ms4_index: u.add(e.ms4),
						ms5_index: u.add(e.ms5),
						night_edits: [],
						invalid_nights: []
					}, p = [
						"ms2",
						"ms3",
						"ms4",
						"ms5"
					].filter((e) => null != d[`${e}_index`]), m = await t.rerunGgirResults({
						...u.request,
						recordings: [d],
						original_files: [],
						outputs: p
					}, u.buffers);
					if ("ok" !== m.status) return { notApplied: m.reason ?? "the GGIR engine refused this recording" };
					const g = Object.fromEntries([
						"ms2",
						"ms3",
						"ms4",
						"ms5"
					].flatMap((e) => {
						const t = m.files.find((t) => t.path === `meta/${e}.out/${s}`);
						return t ? [[e, t.bytes.slice().buffer]] : [];
					}));
					if (!g.ms4) return { notApplied: "the GGIR engine returned no corrected Part 4 milestone" };
					c(m);
					const f = i(), h = Object.entries(e.resultsCsv).map(([e, t]) => ({
						path: e,
						bytes_index: f.add(t)
					})), _ = g.ms2 ?? e.ms2, w = g.ms3 ?? e.ms3, v = g.ms5 ?? e.ms5, y = {
						recording_id: a,
						filename: s,
						part1_index: null,
						ms2_index: f.add(g.ms2),
						ms3_index: null,
						ms4_index: f.add(g.ms4),
						ms5_index: f.add(v),
						stock_ms4_index: f.add(e.ms4),
						stock_ms5_index: f.add(e.ms5),
						night_edits: [],
						invalid_nights: []
					}, b = [
						...["part2_daysummary.csv", "part2_summary.csv"].every((e) => h.some((t) => t.path === `results/${e}`)) && null !== y.ms2_index ? ["part2_reports"] : [],
						"part4_reports",
						...h.some((e) => /(^|\/)part5_/u.test(e.path)) ? ["part5_reports"] : []
					], k = await t.rerunGgirResults({
						...f.request,
						recordings: [y],
						original_files: h,
						outputs: b
					}, f.buffers);
					if ("ok" !== k.status) return { notApplied: k.reason ?? "the GGIR engine refused this recording's reports" };
					const x = k.files.find((e) => "results/part4_nightsummary_sleep_cleaned.csv" === e.path) ?? k.files.find((e) => "results/QC/part4_nightsummary_sleep_cleaned.csv" === e.path);
					if (!x) return { notApplied: "the GGIR engine gave no Part 4 cleaned night summary" };
					c(k);
					const M = async (n) => Object.fromEntries(await Promise.all(k.files.filter((e) => e.path === `results/${na(e.path)}` && n.test(na(e.path))).map(async (n) => [na(n.path), await t.readGgirReportCsv(new TextDecoder().decode(n.bytes), e.configCsv)]))), S = await M(I), T = await M(A), R = new TextDecoder().decode(x.bytes), E = (e) => e ? new Uint8Array(e) : void 0, C = await t.reviewGgirResults({
						part1: new Uint8Array(e.part1),
						configCsv: e.configCsv,
						recordingId: a,
						..._ ? { ms2: E(_) } : {},
						...w ? { ms3: E(w) } : {},
						ms4: E(g.ms4),
						...v ? { ms5: E(v) } : {},
						...e.sleeplogRData ? { sleeplogRData: E(e.sleeplogRData) } : {},
						...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
						cleanedNightsCsv: R,
						...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
						edits: [],
						crossCheck: !1
					});
					return {
						values: {
							..._ ? { ms2: _ } : {},
							...w ? { ms3: w } : {},
							ms4: g.ms4,
							...v ? { ms5: v } : {},
							cleanedNightsCsv: R,
							part2Reports: Me(S, C),
							personReports: Me(T, C),
							imported: $e(C)
						},
						ggirCorrections: {
							profile: k.profile || m.profile,
							changedCells: Object.values(o).reduce((e, t) => e + t, 0),
							changedCellsByPart: o,
							...l.size > 0 ? { notApplied: [...l].map(([e, t]) => ({
								correction: e,
								reason: t
							})) } : {}
						}
					};
				}(r, s);
				return await e.transaction("rw", [e.files, e.ggirCorrectedValues], async () => {
					(await e.files.get(t.fileId))?.ggirBundleRevision === t.revision && await e.ggirCorrectedValues.put({
						fileId: t.fileId,
						key: t.key,
						...i
					});
				}).catch((e) => {
					console.warn("[ggir-corrected-values] Corrected values could not be cached.", e);
				}), { miss: t };
			} catch (c) {
				return r.signal?.throwIfAborted(), a.primary || a.cancel(), {
					miss: t,
					notApplied: (c instanceof Error ? c.message : String(c)).replace(/^Error: /u, "")
				};
			} finally {
				r.signal?.aborted || r.onProgress?.(++l, o.length);
			}
		}
	})), {
		signal: r.signal,
		createWorker: v,
		extraWorkers: i ? Math.floor(u / 2) : u,
		cancelOperation: () => {},
		...r.workerPool
	});
	for (const { miss: n, notApplied: c } of d) void 0 !== c && a.set(n.fileId, { notApplied: c });
	return a;
}
const oa = [
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
function la(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function ca(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function ua(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
oa.join(","), We.length;
var da = e({
	GgirReviewChangedError: () => Ra,
	editsFromMarkers: () => ba,
	getGgirMarkerInputs: () => ka,
	ggirNightEdits: () => ya,
	ggirNightRecords: () => va,
	hasGgirRecomputeFailure: () => ha,
	mergeGgirSleepMarkers: () => wa,
	recomputeGgirResults: () => Sa,
	recoverPendingGgirRecomputes: () => Aa,
	reviewGgirResultsForMarkers: () => Ca,
	scheduleGgirRecompute: () => Ma,
	settleGgirScorerReviews: () => Ta
});
const pa = new EventTarget(), ma = /* @__PURE__ */ new WeakMap(), ga = 800, fa = "Update GGIR review";
function ha(e, t, n) {
	return x.getState().jobs[`${n.name}:${xa(e, t)}`]?.status === k.FAILED;
}
function _a(e, n, r, i, s) {
	if (s?.aborted || function(e) {
		return e instanceof Error && e.name === t.errnames.DatabaseClosed;
	}(i)) return;
	const a = xa(e, n), o = `${r.name}:${a}`, l = x.getState();
	l.jobs[o]?.controller.signal.aborted || l.jobs[o]?.status === k.ELSEWHERE || (l.update(o, {
		id: o,
		key: a,
		workspaceId: r.name,
		kind: E.GGIR_RECOMPUTE,
		label: fa,
		controller: l.jobs[o]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: k.FAILED
	}), r.isOpen() && C() === r && pa.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: n,
		db: r
	} })));
}
function wa(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function va(e, t, n, r = [], i, s = W(i)) {
	const a = oe([...n.values()].flat(), !0), o = a?.algorithm ?? Se(t), l = a?.detectionRule ?? null, c = /* @__PURE__ */ new Map();
	for (const [u, m] of n) {
		const e = oe(m, !0);
		e && c.set(u, [{
			...e,
			algorithm: o,
			detectionRule: l
		}]);
	}
	const d = Ee(t), p = d.length ? await s.ggirLabelsToStoredMs(Float64Array.from(d.flatMap((e) => [e.onsetMs, e.wakeMs])), r) : [];
	for (const [m, g] of d.entries()) {
		const t = c.get(g.nightDate)?.[0], n = be(g, t);
		"scored" !== n.kind && "invalid" !== n.kind ? c.set(g.nightDate, [{
			fileId: e,
			date: g.nightDate,
			username: _e,
			scoringSessionId: null,
			contentHash: "",
			syncStatus: "synced",
			lastModifiedAt: "",
			isInvalidNight: !1,
			needsConsensus: !1,
			notes: "",
			nonwearMarkers: [],
			...t,
			algorithm: o,
			detectionRule: l,
			sleepMarkers: wa({
				markerType: u.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: p[2 * m] / 1e3,
				offsetTimestamp: p[2 * m + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : c.set(g.nightDate, t ? [t] : []);
	}
	return c;
}
async function ya(e, t, n, r = [], i, s = W(i)) {
	const a = await va(e, t, n, r, i, s), o = new Map([...a].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : []));
	return {
		markersByAlgo: a,
		selected: o,
		edits: await ba(t, o, r, i, s)
	};
}
async function ba(e, t, n = [], r, i = W(r)) {
	const s = Ae(e).flatMap((e) => {
		const n = be(e, t.get(e.nightDate));
		return "scored" === n.kind && null != n.main.onsetTimestamp && null != n.main.offsetTimestamp ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === s.length) return [];
	const a = await i.storedToGgirLabelsMs(Float64Array.from(s.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await i.wallClockLabels(Float64Array.from([...a, ...s.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * s.length;
	return s.flatMap(({ w: e }, t) => {
		const n = o[2 * t], r = o[2 * t + 1];
		return n !== o[l + 2 * t] || r !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: r
		}] : [];
	});
}
async function ka(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [r, i] = await Promise.all([pe(e, t, n), re(e, n)]), s = new Map([...r].flatMap(([e, t]) => {
			const n = oe(t, !0);
			return n ? [[e, n]] : [];
		})), a = i?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([a ?? [], [...s].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				be(void 0, t)
			])]),
			markers: s,
			clockSteps: a,
			bundleRevision: i?.ggirBundleRevision
		};
	});
}
function xa(e, t) {
	return `${E.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function Ma(e, t, n, r) {
	if (!n.isOpen() || C() !== n || r?.aborted) return;
	let i = ma.get(n);
	i || (i = /* @__PURE__ */ new Map(), ma.set(n, i));
	const s = xa(e, t);
	clearTimeout(i.get(s)), i.set(s, setTimeout(() => {
		i.delete(s), n.files.get(e).then((i) => {
			if (i?.ggirBundleRevision && n.isOpen() && C() === n && !r?.aborted) return Sa(e, t, n, r);
		}).catch((i) => {
			r?.aborted || i instanceof DOMException && "AbortError" === i.name || (_a(e, t, n, i, r), n.isOpen() && C() === n && (console.error("[ggir-results] recompute failed."), ne("error", "GGIR results recompute failed", de(i))));
		});
	}, ga));
}
function Sa(e, t, n, r, i = !0) {
	const s = (a, o = r) => F({
		kind: E.GGIR_RECOMPUTE,
		key: xa(e, t),
		label: fa,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (r) => {
			r.signal.throwIfAborted();
			const o = await Ia(e, t, n, r.signal, i);
			return r.signal.throwIfAborted(), !1 !== o ? o : (a < 2 && s(a + 1, r.signal).catch((i) => _a(e, t, n, i, r.signal)), null);
		}
	});
	return s(0);
}
async function Ia(e, t, n, r, i, s = { active: () => n.isOpen() && C() === n }) {
	if (r.throwIfAborted(), !s.active()) return null;
	const { markerInputs: a, markers: o, clockSteps: l, bundleRevision: c } = await ka(e, t, n);
	if (!c) return null;
	const u = await n.ggirScorerReviews.get([e, t]);
	if (!s.active()) return null;
	if (r.throwIfAborted(), u?.markerInputs === a && u.bundleRevision === c && (d = u, void 0 === s.correctedKey || 0 === d.edits.length || d.corrected?.key === s.correctedKey)) return i && pa.dispatchEvent(new CustomEvent("updated", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })), u.current ?? null;
	var d;
	const p = await n.ggirResultsBundles.get(e);
	if (!p) return null;
	const { edits: m } = await ya(e, p.imported, new Map([...o].map(([e, t]) => [e, [t]])), l, r, s.api);
	if (!s.active()) return null;
	const f = Ea(u, c, m), h = void 0 !== s.correctedKey && m.length > 0 && !p.ggirCorrections && !(f && u.corrected?.key === s.correctedKey), _ = m.length > 0 && (!f || h) ? g(p, await n.ggirResultsBlobs.get(e)) : p, w = f ? u.current : (await Ca(_, o, l, m, r, void 0, s.api)).current;
	let v = f ? u.corrected : void 0;
	if (h) {
		const t = await n.ggirCorrectedValues.get(e);
		if (!t || t.key !== s.correctedKey) return null;
		const i = Ie(_, t).find((e) => "corrected" === e.set), a = i && (await Ca(i.bundle, o, l, m, r, void 0, s.api)).current;
		v = {
			key: t.key,
			...a ? { current: a } : {}
		};
	}
	r.throwIfAborted();
	const y = (/* @__PURE__ */ new Date()).toISOString();
	if (!s.active()) return null;
	const b = await te(n, [
		n.ggirResultsBundles,
		n.ggirScorerReviews,
		n.markers,
		n.files
	], async () => {
		if (!s.active()) return null;
		const i = await ka(e, t, n);
		return i.markerInputs === a && i.bundleRevision === c && (0 === await n.ggirResultsBundles.where(":id").equals(e).count() ? null : (r.throwIfAborted(), await n.ggirScorerReviews.put({
			fileId: e,
			scorer: t,
			...w ? { current: w } : {},
			edits: m,
			markerInputs: a,
			bundleRevision: c,
			updatedAt: y,
			...v ? { corrected: v } : {}
		}), !0));
	}, r);
	return b ? (pa.dispatchEvent(new CustomEvent("updated", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })), r.throwIfAborted(), w ?? _.imported) : (r.throwIfAborted(), !1 !== b && null);
}
async function Ta(e, t, n, r, i = {}) {
	const s = await (t.length ? e.ggirResultsBundles.where(":id").anyOf([...t]) : e.ggirResultsBundles.toCollection()).primaryKeys(), a = (e) => {
		const t = r?.get(e);
		return t && "key" in t ? t.key : void 0;
	}, o = async (t) => {
		const r = await Promise.all(t.map((t) => async function(e, t, n, r) {
			const [{ markerInputs: i, bundleRevision: s }, a] = await Promise.all([ka(t, n, e), e.ggirScorerReviews.get([t, n])]);
			return !(!a || !s || a.markerInputs !== i || a.bundleRevision !== s || 0 !== a.edits.length && ((await e.ggirResultsBundles.get(t))?.ggirCorrections || void 0 !== r && a.corrected?.key !== r));
		}(e, t, n, a(t))));
		return t.filter((e, t) => !r[t]);
	}, l = await o(s);
	if (0 === l.length) return /* @__PURE__ */ new Set();
	const c = i.signal ?? new AbortController().signal, u = (await e.files.bulkGet(l)).map((e) => e?.sourceSizeBytes ?? 0);
	return await z(l.map((t, r) => ({
		name: String(t),
		cost: u[r],
		run: async (r, i) => {
			try {
				await Ia(t, n, e, c, !1, {
					active: () => e.isOpen(),
					api: r,
					correctedKey: a(t)
				});
			} catch {
				c.throwIfAborted(), console.warn("[ggir-results] An export could not settle a GGIR review ahead of its snapshot."), i.primary || i.cancel();
			}
		}
	})), {
		signal: i.signal,
		createWorker: v,
		cancelOperation: () => {},
		extraWorkers: G(Math.max(0, ...u), {
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: j()
		}),
		...i.workerPool
	}), new Set(await o(l));
}
function Aa(e, t) {
	return F({
		kind: E.GGIR_RECOVERY,
		key: E.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const r = () => !t.signal.aborted && e.isOpen() && C() === e;
			try {
				if (!r()) return;
				const s = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: a } = await import("./ggir-import-Dmfonyy2.js").then((e) => e.t);
				for (const o of s) {
					if (t.signal.throwIfAborted(), !r()) return;
					try {
						const [s] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), a(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), c = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...s.map((e) => e.scorer)]);
						c.delete(_e);
						for (const a of c) {
							if (!r()) return;
							try {
								const n = ha(o, a, e);
								if (!n) {
									const { markerInputs: t, bundleRevision: n } = await ka(o, a, e), r = s.find((e) => e.scorer === a);
									if (n && r?.markerInputs === t && r.bundleRevision === n) continue;
								}
								await Sa(o, a, e, t.signal, n);
							} catch (i) {
								n = !0, _a(o, a, e, i, t.signal);
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
				const i = Object.values(x.getState().jobs).filter((t) => S(t) && t.workspaceId === e.name && t.kind === E.GGIR_RECOMPUTE && t.status === k.FAILED);
				for (const t of i) {
					const i = t.key.slice(E.GGIR_RECOMPUTE.length + 1);
					if (!r()) break;
					const s = i.indexOf(":"), a = Number(i.slice(0, s)), o = JSON.parse(i.slice(s + 1));
					try {
						await e.transaction("r", e.ggirResultsBundles, e.markers, e.ggirScorerReviews, async () => {
							if (!r()) return;
							const [n, i, s] = await Promise.all([
								e.ggirResultsBundles.where(":id").equals(a).count(),
								e.markers.where("fileId").equals(a).filter((e) => e.username === o).count(),
								e.ggirScorerReviews.where("[fileId+scorer]").equals([a, o]).count()
							]);
							r() && (0 === n || 0 === i && 0 === s) && (x.getState().dismiss(t.id), pa.dispatchEvent(new CustomEvent("updated", { detail: {
								fileId: a,
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
var Ra = class extends Error {
	constructor() {
		super("a night of this recording was edited during the export; export again");
	}
};
function Ea(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
async function Ca(e, t, r = [], i, s, a, o) {
	const l = i ?? await ba(e.imported, t, r, s, o);
	let c;
	s?.throwIfAborted();
	const u = a?.review;
	if (Ea(u, a?.bundleRevision, l)) c = u.current;
	else {
		if (a && l.length > 0 && !e.part1) throw new Ra();
		if (l.length > 0 && e.ms2 && e.ms3) {
			const t = (e) => e ? new Uint8Array(e) : void 0, r = t(e.ms2), i = t(e.ms3), a = t(e.ms4), u = t(e.ms5), d = t(e.sleeplogRData), p = (t) => t.reviewGgirResults({
				part1: new Uint8Array(e.part1),
				configCsv: e.configCsv,
				recordingId: n(e.recordingFile),
				...r ? { ms2: r } : {},
				...i ? { ms3: i } : {},
				...a ? { ms4: a } : {},
				...u ? { ms5: u } : {},
				...d ? { sleeplogRData: d } : {},
				...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
				edits: l,
				...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
				...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
				crossCheck: !1
			});
			c = $e(await (o ? p(o) : B(s, p)));
		}
	}
	s?.throwIfAborted();
	const d = Object.getOwnPropertyDescriptors(e);
	return delete d.current, Reflect.deleteProperty(d, "edits"), Object.defineProperties({
		...c ? { current: c } : {},
		edits: l
	}, d);
}
const Na = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], $a = [
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
], Oa = [
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
], ja = [
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
], Ba = ["fileId", ...l], Da = {
	files: [
		...Na,
		"ggirTimezone",
		"recording",
		"ggirClockSteps",
		"sourceType",
		"sourceProfileId",
		"navigationFacts"
	],
	markers: $a,
	activityDays: Oa,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: ja,
	actiwareFileData: [
		"fileId",
		"actiwareIntervals",
		"actiwareStatistics"
	]
}, Pa = {
	files: [...Na, "ggirClockSteps"],
	markers: $a,
	activityDays: Oa,
	ggirResultsBundles: ja,
	ggirResultsBlobs: Ba,
	ggirScorerReviews: [
		"fileId",
		"scorer",
		"current",
		"edits",
		"bundleRevision",
		"corrected"
	],
	ggirCorrectedValues: [
		"fileId",
		"key",
		"values",
		"ggirCorrections",
		"notApplied"
	]
}, La = {
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
	],
	studySettings: [
		"key",
		"extraSettings",
		R
	]
}, Fa = "Also export corrected values was off at export";
function Wa(e) {
	const t = Object.values(e.ggirCorrectionsNotApplied).filter((e) => e !== Fa).length, n = Object.keys(e.ggirCorrectionProfiles);
	if (0 === n.length && 0 === t) return null;
	const r = Object.keys(e.ggirCorrections).length;
	return `Corrected values: ${n.length > 0 ? `profile ${n.join(", ")}; ` : ""}${String(r)} ${1 === r ? "recording" : "recordings"} corrected, ${String(t)} left out (see manifest.json).`;
}
function za(e) {
	const t = to(e, Ua.manifest), n = new Map(t.ggirResultsBundles.map((e) => [e.fileId, e.recordingFile]));
	return t.ggirCorrectedValues.flatMap((e) => void 0 !== e.notApplied && "Also export corrected values was off at export" !== e.notApplied && n.has(e.fileId) ? [{
		file: Er("part4_night_review", "corrected"),
		row: 0,
		key: n.get(e.fileId),
		column: `corrected values: ${e.notApplied}`,
		reason: "not_computed_for_export"
	}] : []);
}
function Ga(e) {
	return to(e, Ua.ggirReport).ggirResultsBundles.flatMap((e) => {
		const t = Re(e.imported, e.part2Reports);
		return t ? [{
			file: Er("part4_night_review", "default"),
			row: 0,
			key: e.recordingFile,
			column: t,
			reason: "source_reported_missing"
		}] : [];
	});
}
const Va = {
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
}, Ua = {
	sleep: Da,
	nonwear: Da,
	summary: Da,
	wide: Da,
	circadian: {
		files: Na,
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
	ggirReport: Pa,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: $a,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: [
			...Na,
			"sourceType",
			"sourceProfileId"
		],
		markers: $a,
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
		files: Na,
		markers: $a,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: La,
	audit: Va,
	physicalActivity: {
		files: [
			...Na,
			"ggirSummariesNeedRecompute",
			"sourceContentHash",
			"fileHash",
			"sourceProfileId"
		],
		activityDays: [
			"fileId",
			"date",
			"timestamps",
			"axisY",
			"vectorMagnitude",
			"ggirTimestamps",
			"mimsUnit",
			"algorithmResults",
			"nonwearResults",
			"nonwearResultsChoi2011",
			"detachNonwear",
			"vanHeesNonwear",
			"unifiedNonwearMasks",
			"nonwearChoiAxis"
		],
		markers: $a,
		sensorNonwear: [
			"fileId",
			"startTimestamp",
			"endTimestamp"
		],
		dailyGgirSummaries: [
			"fileId",
			"analysisDate",
			"sedentaryMinutes",
			"lpaMinutes",
			"moderateMinutes",
			"vigorousMinutes",
			"mvpaMinutes",
			"validHours",
			"nonwearMinutes"
		]
	}
}, Ha = /* @__PURE__ */ new WeakMap(), qa = /* @__PURE__ */ new WeakMap();
function Ka(e, t, n, r) {
	for (let i = 0; i < n.byteLength;) {
		const s = n.subarray(i, i + Kn), a = e[t](s, { at: r + i });
		if (!Number.isInteger(a) || a <= 0 || a > s.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		i += a;
	}
}
function Ja(e) {
	if (!e || "object" != typeof e) return e;
	const t = qa.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return Ka(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(Ja) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ja(t)])) : structuredClone(e);
}
function Ya(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(Ya), Object.freeze(e)), e;
}
async function Za(e, t = C(), n = {}) {
	const r = await _o(null, "computing the corrected GGIR values", () => async function(e, t, n = {}) {
		const r = sa();
		return r?.request ? r.request(ia(e), n.signal ? { signal: n.signal } : {}, () => aa(e, t, n, !1)) : aa(e, t, n, !1);
	}(t, e, {
		signal: n.signal,
		onProgress: (e, t) => n.progress?.(e, t, "Computing corrected values"),
		...n.workerPool ? { workerPool: n.workerPool } : {}
	})), { username: i } = n, s = void 0 === i ? void 0 : await _o(null, "updating the GGIR night reviews", () => Ta(t, e, i, r, {
		signal: n.signal,
		...n.workerPool ? { workerPool: n.workerPool } : {}
	}));
	return n.progress?.(0, 0, Yn), _o(null, "checking the export inputs", () => async function(e, t = C(), n = {}) {
		const r = /* @__PURE__ */ new Map();
		for (const d of (n.readPlan ?? Object.keys(Ua)).map((e) => Ua[e])) for (const [e, t] of Object.entries(d)) {
			const n = e;
			r.set(n, /* @__PURE__ */ new Set([...r.get(n) ?? [], ...t]));
		}
		if (!r.size) {
			const e = Object.freeze({ files: Object.freeze([]) });
			return Ha.set(e, {}), e;
		}
		let i = 268435456;
		const s = (e) => {
			if (e instanceof ArrayBuffer ? i -= e.byteLength : "string" == typeof e ? i -= 2 * e.length : e && "object" == typeof e ? Object.values(e).forEach(s) : i -= 8, i < 0) throw new Un("Export snapshot exceeds 256 MiB. Select fewer recordings or a narrower workspace before exporting.");
		};
		let a = 0;
		const o = /* @__PURE__ */ new Map(), l = (e, t, n) => {
			const r = Object.freeze({});
			return Ka(e, "write", t, a), qa.set(r, {
				at: a,
				length: t.byteLength,
				store: e,
				restore: n
			}), a += t.byteLength, s(0), r;
		}, c = (e) => {
			if ("string" == typeof e && e.length >= 4096) {
				const t = o.get(e);
				if (void 0 !== t) return t;
				o.set(e, e);
			}
			if (n.binaryStore && (e instanceof ArrayBuffer || ArrayBuffer.isView(e))) {
				const t = e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), r = e instanceof ArrayBuffer ? null : e.constructor;
				return l(n.binaryStore, t, r ? (e) => new r(e) : (e) => e);
			}
			return n.binaryStore && function(e) {
				if (!Array.isArray(e) || e.length < 4096) return !1;
				for (const t of e) if (null !== t && "boolean" != typeof t && ("number" != typeof t || !Number.isFinite(t) || Object.is(t, -0))) return !1;
				return !0;
			}(e) ? l(n.binaryStore, new TextEncoder().encode(JSON.stringify(e)), (e) => JSON.parse(new TextDecoder().decode(e))) : Array.isArray(e) ? e.map(c) : e && "object" == typeof e && Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, c(t)])) : (s(e), e);
		}, { ggirBinaries: u } = n, p = await t.transaction("r", [...r.keys()].map((e) => t[e]), async () => {
			const n = r.has("files") ? await se(t, e.length ? { onlyFileIds: e } : void 0) : [], i = new Set(n.flatMap((e) => e.id ? [e.id] : [])), s = {};
			return await Promise.all([...r].map(async ([e, r]) => {
				const a = (e) => Object.fromEntries([...r].filter((t) => t in e).map((t) => [t, c(e[t])]));
				if (s[e] = [], "files" === e) return void (s[e] = n.map((e) => a(e)));
				const o = "diaryEntries" === e ? t.diaryEntries : ce(t, e), l = "studySettings" === e ? o.where("key").equals("study") : o.where("fileId").anyOf([...i]);
				await d(l, (t) => {
					s[e].push(a(((e, t) => {
						if (!u || u.has(t.fileId)) return t;
						if ("ggirResultsBlobs" === e) return { fileId: t.fileId };
						if ("ggirCorrectedValues" !== e || !t.values) return t;
						const { ms2: n, ms3: r, ms4: i, ms5: s, ...a } = t.values;
						return {
							...t,
							values: a
						};
					})(e, t)));
				});
			})), s;
		}), m = new Set((p.ggirResultsBundles ?? []).map((e) => e.fileId));
		p.markers = (p.markers ?? []).map((e) => m.has(e.fileId) && "invalid" === be(void 0, he(e)).kind ? {
			...e,
			isInvalidNight: !0
		} : e);
		const g = function(e) {
			const t = Object.freeze({ files: Ya((e.files ?? []).map((e) => Object.fromEntries(Na.map((t) => [t, Ja(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
			return Ha.set(t, e), t;
		}(p);
		return function(e, t) {
			const n = Ha.get(e);
			if (!n.ggirResultsBundles) return;
			const r = new Set(n.ggirResultsBundles.map((e) => e.fileId));
			if (void 0 === t) return void (n.ggirCorrectedValues && (n.ggirCorrectedValues = n.ggirCorrectedValues.filter((e) => !r.has(e.fileId))));
			const i = new Map((n.files ?? []).map((e) => [e.id, e.ggirBundleRevision])), s = new Map((n.ggirCorrectedValues ?? []).map((e) => [e.fileId, e]));
			n.ggirCorrectedValues = n.ggirResultsBundles.flatMap((e) => {
				if (!t) return e.ggirCorrections && !e.stock ? [] : [{
					fileId: e.fileId,
					key: "",
					notApplied: Fa
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
				const r = s.get(e.fileId);
				return [r && r.key === n.key && i.get(e.fileId) === n.revision ? r : {
					fileId: e.fileId,
					key: "",
					notApplied: "the recording changed during the export; export again for its corrected values"
				}];
			});
		}(g, n.ggirCorrected), g;
	}(e, t, {
		...n,
		ggirCorrected: r,
		...s ? { ggirBinaries: s } : {}
	}));
}
const Qa = [
	"sleep",
	"circadian",
	"ggirReport",
	"event",
	"physicalActivity"
];
var Xa = class extends Error {};
function eo(e, t, n) {
	const r = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new Xa(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (r(t), Reflect.get(e, t, n)),
		has: (e, t) => (r(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (r(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function to(e, t, n = []) {
	const r = Ha.get(e);
	if (!r) throw new Xa("Export requires a captured input snapshot");
	const i = Object.entries(Ua).find(([, e]) => e === t)?.[0];
	if (!i) throw new Xa("Export producer has no registered input declaration");
	const s = {};
	for (const [a, o] of Object.entries(t)) {
		const e = r[a].filter((e) => !n.length || "studySettings" === a || n.includes("files" === a ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const r of o.filter((e) => e in t)) Object.defineProperty(n, r, {
				enumerable: !0,
				get: () => Ya(Ja(t[r]))
			});
			return eo(n, o, `${i}: undeclared field ${a}.`);
		});
		Object.assign(s, { [a]: Object.freeze(e) });
	}
	return eo(s, Object.keys(t), `${i}: undeclared table `);
}
function no(e, t, n) {
	const r = /* @__PURE__ */ new Map();
	for (const i of e.markers) {
		if (i.fileId !== t || i.username !== n) continue;
		const e = he(i), s = r.get(i.date) ?? [];
		s.push(e), r.set(i.date, s);
	}
	return r;
}
function ro(e, t, n) {
	return new Map([...no(e, t, n)].sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => [e, oe(t)]));
}
function io(e, t, n) {
	return new Map([...no(e, t, n)].flatMap(([e, t]) => {
		const n = oe(t.filter(o));
		return n ? [[e, n]] : [];
	}));
}
const so = /* @__PURE__ */ new WeakMap(), ao = 4;
function oo(e, t, n, r) {
	let i = so.get(e);
	i || (i = /* @__PURE__ */ new Map(), so.set(e, i));
	const s = JSON.stringify([t, n]);
	let a = i.get(s);
	if (!a) {
		for (; i.size >= ao;) i.delete(i.keys().next().value);
		a = async function(e, t, n, r) {
			const i = to(e, Ua.ggirReport, [t]), s = i.files.find((e) => e.id === t), a = i.ggirResultsBundles.find((e) => e.fileId === t), o = a && g(a, i.ggirResultsBlobs.find((e) => e.fileId === t)), l = no(i, t, n), c = o ? await ya(t, o.imported, l, s.ggirClockSteps, r) : void 0, u = c?.markersByAlgo ?? l, d = c?.selected ?? new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), p = new Set([...d].filter(([, e]) => "invalid" === be(void 0, e).kind).map(([e]) => e)), m = i.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n), f = {
				review: m,
				bundleRevision: s.ggirBundleRevision
			}, h = o ? await Ca(o, d, s.ggirClockSteps, c?.edits, r, f) : void 0, _ = h ? await co(h, p, r) : void 0, w = i.ggirCorrectedValues.find((e) => e.fileId === t), v = m?.corrected && w && m.corrected.key === w.key ? {
				review: {
					edits: m.edits,
					bundleRevision: m.bundleRevision,
					...m.corrected.current ? { current: m.corrected.current } : {}
				},
				bundleRevision: s.ggirBundleRevision
			} : void 0;
			return {
				markersByAlgo: u,
				selected: d,
				bundle: _,
				sets: o && h ? await Promise.all(Ie(o, w, w?.notApplied !== Fa).map(async ({ set: e, bundle: t }) => t === o ? _ : co(await Ca(t, d, s.ggirClockSteps, h.edits, r, "corrected" === e ? v : void 0), p, r))) : [],
				invalidDates: p
			};
		}(e, t, n, r), i.set(s, a), a.catch(() => {
			i.get(s) === a && i.delete(s);
		});
	}
	return a;
}
let lo;
async function co(e, t, n) {
	const { ggirCell: r, ggirNum: i } = await import("./ggir-results-types-MD4BmR_K.js").then((e) => e.i), s = e.part2Reports?.["part2_daysummary.csv"], a = /* @__PURE__ */ new Map();
	if (s) for (let u = 0; u < s.rows; u++) {
		const e = r(s, J.ggir_id.header, u), t = $r(r(s, J.ggir_calendar_date.header, u));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		a.set(n, a.has(n) ? null : u);
	}
	const o = Or(e.imported, "nights"), l = J.ggir_nonwear_perc_spt.header, c = async (t) => {
		const c = t.nights, u = Array.from({ length: c.rows }, (e, t) => {
			const n = r(c, J.ggir_id.header, t), l = a.get(JSON.stringify([null == n ? null : String(n), o(c, t, !1)])), u = s && null != l;
			return {
				id: n,
				day: l,
				valid: u ? r(s, J.ggir_day_valid_hours.header, l) : null,
				hours: u ? r(s, J.ggir_day_hours.header, l) : null,
				validNumber: u ? i(s, J.ggir_day_valid_hours.header, l) : null,
				hoursNumber: u ? i(s, J.ggir_day_hours.header, l) : null
			};
		}), d = u.flatMap((e, t) => null != e.validNumber && null != e.hoursNumber ? [{
			index: t,
			valid: e.validNumber,
			hours: e.hoursNumber
		}] : []), p = /* @__PURE__ */ new Map();
		if (d.length > 0) {
			const e = await W(n).ggirDayValidFractions(Float64Array.from(d, (e) => e.valid), Float64Array.from(d, (e) => e.hours));
			d.forEach((t, n) => p.set(t.index, e[n] ?? null));
		}
		const m = !c.columns.includes(l) && u.some((e, n) => !t.nightRecomputed[n]) ? await function(e, t) {
			const n = e.cleanedNightsCsv;
			if (!n) return Promise.resolve(void 0);
			if (lo?.csv !== n || lo.config !== e.configCsv) {
				const r = W(t).readGgirReportCsv(n, e.configCsv);
				lo = {
					csv: n,
					config: e.configCsv,
					table: r
				}, r.catch(() => {
					lo?.table === r && (lo = void 0);
				});
			}
			return lo.table;
		}(e, n) : void 0, g = u.map(({ id: e, day: n, valid: a, hours: o, validNumber: u, hoursNumber: d }, g) => {
			const f = p.get(g) ?? null, h = i(c, J.ggir_night.header, g), _ = Array.from({ length: t.days.rows }, (e, t) => t).find((e) => "WW" === r(t.days, "window", e) && i(t.days, "night_number", e) === h), w = m ? Array.from({ length: m.rows }, (e, t) => t).find((t) => String(r(m, J.ggir_id.header, t)) === String(e) && i(m, J.ggir_night.header, t) === h) : void 0, v = {
				ggir_nonwear_perc_spt: t.nightRecomputed[g] ? void 0 === _ ? null : r(t.days, l, _) : c.columns.includes(l) ? r(c, l, g) : m?.columns.includes(l) && void 0 !== w ? r(m, l, w) : void 0 === _ ? null : r(t.days, l, _),
				ggir_day_valid_hours: a,
				ggir_day_hours: o,
				ggir_day_valid_fraction: f
			}, y = (s ? null === n ? "duplicate_part2_day" : void 0 === n ? "no_matching_part2_day" : null : "source_reported_missing") ?? "source_reported_missing";
			return {
				values: v,
				reasons: {
					ggir_day_valid_hours: null == u ? y : null,
					ggir_day_hours: null == d ? y : null,
					ggir_day_valid_fraction: null != f ? null : null != d && d <= 0 ? "not_applicable_to_row" : y
				}
			};
		}), f = H.ggir_review_night_extension, h = [.../* @__PURE__ */ new Set([
			...c.columns,
			...f.map((e) => J[e].header),
			...f.map((e) => J[e].header + "_missing_reason")
		])], _ = h.map((e) => {
			const t = f.find((t) => J[t].header + "_missing_reason" === e);
			if (t) return g.map((e) => e.reasons[t] ?? null);
			const n = f.find((t) => J[t].header === e);
			return n ? g.map((e) => e.values[n] ?? null) : c.values[c.columns.indexOf(e)];
		});
		return {
			...t,
			nights: {
				...c,
				columns: h,
				values: _
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
		...e.personReports && (e.edits.length > 0 || t.size > 0) ? { personRecomputed: await Lr(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await c(e.imported),
		...e.current ? { current: await c(e.current) } : {}
	};
}
function uo(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function po(e) {
	return to(e, Ua.manifest).studySettings.flatMap((e) => ue(e).map((e) => ({
		file: "sleep_export.csv",
		row: 0,
		key: e.filename,
		column: `${e.category}: ${e.reason}`,
		reason: "not_computed_for_export"
	})));
}
const mo = "not included", go = "included if produced";
function fo(e) {
	const t = e.artifacts ?? null, n = t ? null : e.planned ?? null, r = e.columns, a = t ? t.sleepRows.length : n?.sleepRows ?? null, o = t ? t.sleepRows.filter((e) => e.markerType === u.MAIN_SLEEP).length : n?.mainSleepRows ?? null, l = t ? Ms(t.sleepRows).size : n?.wideRows ?? null, c = t ? t.summaryRows.length : n?.summaryRows ?? null, d = t ? t.nonwearRows.length : n?.nonwearRows ?? null, p = t ? t.physicalActivityRows.length : n?.activityRows ?? null, m = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : n?.activityDates ?? null, g = t ? t.eventMarkerRows?.length ?? 0 : n?.eventMarkerRows ?? null, f = t ? t.actiwareIntervalRows?.length ?? 0 : n?.actiwareIntervalRows ?? null, h = t ? t.actiwareSleepWakeCsv?.rows ?? 0 : n?.actiwareSleepWakeRows ?? null, _ = n?.actogramFiles ?? null, w = t ? Object.keys(t.ggirEntries) : null, v = (w ? w.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
		const n = Math.max(0, s(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
		return {
			name: e,
			include: n > 0,
			rows: n
		};
	}) : n ? [...Qr([...n.part4Rows.keys()])].map(([e, t]) => ({
		name: t,
		include: n.ggirMainSleepGroupKeys.includes(e),
		rows: n.part4Rows.get(e) ?? null
	})) : []).sort((e, t) => e.name.localeCompare(t.name)), y = w ? w.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [Jr, ...n?.ggirReviewEntries ?? []], b = (e) => null == e ? null : e > 0, k = (n, i, s) => {
		const a = null == i ? "unknown" : i ? "included" : "not_included";
		return "included" !== a ? {
			name: n,
			state: a,
			rows: null,
			detail: "unknown" === a ? s.detail : mo,
			estimatedBytes: 0,
			write: null
		} : {
			name: n,
			state: a,
			rows: s.rows,
			detail: s.detail,
			estimatedBytes: s.estimatedBytes ?? ((s.rows ?? 0) + 1) * (s.columns ?? r) * 12,
			write: t ? () => s.csv ? si(s.csv(t)) : s.encode(t) : null,
			...t && (s.chunkField || s.wide) ? { batches: function* () {
				if (s.wide) {
					const e = Ss(t.sleepRows, !0), n = e.next().value;
					for (const t of e) {
						const e = n + "\n" + t;
						yield {
							bytes: si(e),
							text: e,
							rows: 1
						};
					}
				} else if (s.chunkField) {
					const n = t[s.chunkField] ?? [];
					for (let r = 0; r < n.length; r += 256) {
						const i = {
							...t,
							[s.chunkField]: n.slice(r, r + 256)
						}, a = !e.selectedColumns?.length || "sleepRows" !== s.chunkField && "nonwearRows" !== s.chunkField ? void 0 : Es(i[s.chunkField], void 0, !0), o = s.csv(i);
						yield {
							bytes: si(o),
							text: o,
							rows: Math.min(256, n.length - r),
							...a ? { fullRowCsv: a } : {}
						};
					}
				}
			} } : {}
		};
	};
	return [
		k("sleep_export.csv", b(a), {
			rows: a,
			detail: null == a ? go : `${String(a)} rows · ${String(r)} columns`,
			chunkField: "sleepRows",
			csv: (t) => Es(t.sleepRows, e.selectedColumns ?? void 0, !0)
		}),
		k("sleep_export_wide.csv", !!e.includeWideFormat && b(l ?? o), {
			rows: l,
			detail: null == l ? go : `${String(l)} participant group ${1 === l ? "row" : "rows"}`,
			wide: !0,
			csv: (e) => function(e, t = !1) {
				return [...Ss(e, t)].join("\n");
			}(e.sleepRows, !0)
		}),
		k("summary_export.csv", b(c ?? o), {
			rows: c,
			detail: null == c ? go : `${String(c)} participant ${1 === c ? "row" : "rows"}`,
			chunkField: "summaryRows",
			csv: (e) => function(e, t = !1) {
				const n = Rs("summary_csv", e, hs, void 0, t), r = [
					"summary_mean_temperature_c",
					"sleep_regularity_index",
					...Object.values(fs).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
				];
				return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? s(n).records.map((t, n) => 0 === n ? t.text + "," + r.map((e) => J[e].header + "_missing_reason").join(",") : t.text + "," + r.map((t) => {
					const r = e[n - 1];
					return "summary_mean_temperature_c" === t ? null == r.meanTemperature ? r.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? r.sleepRegularityMissingReason ?? "" : r.metricMissingReasons?.[t] ?? "";
				}).join(",")).join("\n") : n;
			}(e.summaryRows, !0)
		}),
		k("nonwear_export.csv", b(d), {
			rows: d,
			detail: null == d ? go : `${String(d)} periods`,
			chunkField: "nonwearRows",
			csv: (t) => Es(t.nonwearRows, e.selectedColumns ?? void 0, !0)
		}),
		k("event_markers_export.csv", b(g), {
			rows: g,
			detail: null == g ? go : `${String(g)} button ${1 === g ? "press" : "presses"}`,
			columns: Ws.length,
			chunkField: "eventMarkerRows",
			csv: (e) => function(e, t = !1) {
				const n = [[...Ws, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
				for (const r of e) n.push([
					r.filename,
					r.participantId ?? "",
					r.studyDate,
					Us(r.localTimestamp),
					null == r.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (r.localTimestamp - 60 * r.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
					...t ? [r.participantId ? "" : "source_reported_missing", null == r.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
				].map((e) => i(e)).join(","));
				return `${n.join("\n")}\n`;
			}(e.eventMarkerRows ?? [], !0)
		}),
		k("actiware_intervals_export.csv", b(f), {
			rows: f,
			detail: null == f ? go : `${String(f)} Actiware intervals`,
			columns: Ns.length,
			chunkField: "actiwareIntervalRows",
			csv: (e) => Fs(e.actiwareIntervalRows ?? [], !0)
		}),
		k(Ks, b(h), {
			rows: h,
			detail: null == h ? go : `${String(h)} Actiware Sleep/Wake epochs`,
			columns: Js.length,
			encode: (e) => e.actiwareSleepWakeCsv.bytes
		}),
		k("physical_activity_export.csv", b(p), {
			rows: p,
			detail: null == p || null == m ? go : `${String(p)} rows · ${String(m)} distinct dates`,
			chunkField: "physicalActivityRows",
			csv: (e) => function(e, t, n, r = !1) {
				const i = /* @__PURE__ */ new Set();
				t.includes("sedentary") || (i.add("Sedentary Minutes"), i.add("Sedentary Bouts"), i.add("Sedentary Breaks"), i.add("Mean Sedentary Bout Minutes")), t.includes("light") || i.add("Light Minutes"), t.includes("moderate") || i.add("Moderate Minutes"), t.includes("vigorous") || i.add("Vigorous Minutes"), t.includes("moderate") && t.includes("vigorous") || (i.add("MVPA Minutes"), i.add("MVPA Bouts"), i.add("MVPA Bout Minutes")), n && t.includes("nonwear") || i.add("Excluded Nonwear Minutes");
				const s = /* @__PURE__ */ new Set([
					"Excluded Main Sleep Minutes",
					"Excluded Nap Minutes",
					"MVPA Bouts",
					"MVPA Bout Minutes",
					"Sedentary Bouts",
					"Sedentary Breaks",
					"Mean Sedentary Bout Minutes"
				]), a = e.some((e) => "ggir_enmo" === e.method) ? oa.filter((e) => !i.has(e) && (pr.has(e) || s.has(e))) : [], o = [
					"Participant ID",
					"Threshold Preset Name",
					"Inclusion Rule Preset Name",
					"Scored Username",
					"Source Content Hash",
					"Validation Notes",
					"Notes"
				], l = [[
					...oa.filter((e) => !i.has(e)),
					...a.map((e) => `${e}_missing_reason`),
					...r ? [
						"Epoch Length Seconds",
						"Native Epoch Seconds",
						"Mask Overlap Epochs"
					].map((e) => e + "_missing_reason") : [],
					...o.map((e) => e + "_missing_reason")
				].join(",")];
				for (const c of e) {
					const e = ua(c), t = null == c.sedentaryMinutes || !n && null == c.excludedNonwearMinutes ? null : c.sedentaryMinutes + (n ? 0 : c.excludedNonwearMinutes), u = [
						la(c.filename),
						la(c.participantId),
						la(c.analysisDate),
						la(c.method),
						la(c.methodLabel),
						la(c.methodFamily),
						la(c.requiredSignalContract),
						la(c.computationOwner),
						String(c.frontendComputesMetric),
						la(c.sourceSignal),
						la(c.status),
						la(c.methodRule),
						la(c.thresholdSource),
						la(c.thresholdPresetName),
						ca(c.sedentaryMax),
						ca(c.lightMin),
						ca(c.moderateMin),
						ca(c.vigorousMin),
						ca(t),
						ca(c.lightMinutes),
						ca(c.moderateMinutes),
						ca(c.vigorousMinutes),
						ca(c.mvpaMinutes),
						ca(c.mimsUnitTotal),
						null == c.epochLengthSeconds ? "" : String(c.epochLengthSeconds),
						String(c.epochsReviewed),
						ca(c.wakeWearMinutes),
						ca(c.excludedNonwearMinutes),
						ca(c.excludedMainSleepMinutes),
						ca(c.excludedNapMinutes),
						null == c.maskOverlapEpochs ? "" : String(c.maskOverlapEpochs),
						null == c.mvpaBouts ? "" : String(c.mvpaBouts),
						ca(c.mvpaBoutMinutes),
						null == c.sedentaryBouts ? "" : String(c.sedentaryBouts),
						null == c.sedentaryBreaks ? "" : String(c.sedentaryBreaks),
						ca(c.meanSedentaryBoutMinutes),
						null == c.nativeEpochSeconds ? "" : String(c.nativeEpochSeconds),
						String(c.epochMismatch),
						la(c.inclusionRulePresetName),
						String(c.maskExcludeNonwear),
						String(c.maskExcludeMainSleep),
						String(c.maskExcludeNaps),
						String(c.maskUseManualNonwear),
						String(c.maskUseAlgorithmNonwear),
						la(c.maskNonwearDetector),
						ca(c.maskMinimumWakeWearMinutes),
						la(c.scoredUsername),
						la(c.sourceContentHash),
						la(c.exportedAt),
						la(e.status),
						la(e.notes),
						la(c.notes)
					], d = {
						"Sedentary Minutes": null == t ? null : c.sedentaryMinutes,
						"Light Minutes": c.lightMinutes,
						"Moderate Minutes": c.moderateMinutes,
						"Vigorous Minutes": c.vigorousMinutes,
						"MVPA Minutes": c.mvpaMinutes,
						"Wake Wear Minutes": c.wakeWearMinutes,
						"Excluded Nonwear Minutes": c.excludedNonwearMinutes
					}, p = {
						"Excluded Main Sleep Minutes": c.excludedMainSleepMinutes,
						"Excluded Nap Minutes": c.excludedNapMinutes,
						"MVPA Bouts": c.mvpaBouts,
						"MVPA Bout Minutes": c.mvpaBoutMinutes,
						"Sedentary Bouts": c.sedentaryBouts,
						"Sedentary Breaks": c.sedentaryBreaks,
						"Mean Sedentary Bout Minutes": c.meanSedentaryBoutMinutes
					}, m = a.map((e) => {
						const t = u[oa.indexOf(e)];
						if ("ggir_enmo" !== c.method || "" !== t) return "";
						if (pr.has(e)) {
							const t = d[e];
							return null != t && Number.isFinite(t) ? "" : "source_reported_missing";
						}
						return s.has(e) && null == p[e] ? "not_computed_for_export" : "";
					}), g = r ? [
						["Epoch Length Seconds", null == c.epochLengthSeconds && "ggir_enmo" === c.method ? "not_applicable_to_row" : ""],
						["Native Epoch Seconds", null == c.nativeEpochSeconds ? "not_applicable" === c.thresholdSource ? "not_applicable_to_row" : "source_reported_missing" : ""],
						["Mask Overlap Epochs", null == c.maskOverlapEpochs ? "ggir_enmo" === c.method ? "not_applicable_to_row" : "needs_signal" === c.status ? "channel_unavailable" : "backend_required" === c.status ? "not_computed_for_export" : "" : ""]
					].map(([e, t]) => "" === u[oa.indexOf(e)] ? t : "") : [];
					l.push([
						...u.filter((e, t) => !i.has(oa[t])),
						...m,
						...g,
						...o.map((e) => "" !== u[oa.indexOf(e)] ? "" : [
							"Participant ID",
							"Scored Username",
							"Source Content Hash"
						].includes(e) ? "source_reported_missing" : "not_applicable_to_row")
					].join(","));
				}
				return `${l.join("\n")}\n`;
			}(e.physicalActivityRows, e.physicalActivityEnabledClasses, e.physicalActivityNonwearAsClass, !0)
		}),
		...v.map(({ name: e, include: t, rows: n }) => k(e, t, {
			rows: n,
			detail: null == n ? go : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
			columns: 40,
			encode: (t) => t.ggirEntries[e]
		})),
		...y.map((e) => k(e, !(!w && !n?.ggirReviewEntries.includes(e)) || (null == _ ? null : _ > 0), {
			rows: null,
			detail: e.endsWith(".html") ? null == _ ? w ? "1 report" : go : `1 report · ${String(_)} ${1 === _ ? "file" : "files"}` : "1 GGIR report artifact",
			encode: (t) => t.ggirEntries[e]
		})),
		{
			name: kr,
			state: "included",
			rows: null,
			detail: "1 reason per missing cell",
			estimatedBytes: 2048 + (t?.actiwareSleepWakeCsv?.reasonChunks.reduce((e, t) => e + t.byteLength, 0) ?? n?.actiwareMissingReasonBytes ?? 0),
			write: null
		},
		k("codebook.csv", !0, {
			rows: _s.length,
			detail: `${String(_s.length)} definitions`,
			estimatedBytes: new TextEncoder().encode(bs()).length,
			encode: () => si(bs(void 0, !0))
		}),
		{
			name: Jn,
			state: "included",
			rows: null,
			detail: "1 manifest · run, settings, entry hashes",
			estimatedBytes: 2048,
			write: null
		}
	];
}
async function ho(e, t, n, a = {}) {
	const { signal: l } = a;
	l?.throwIfAborted(), a.progress?.(0, 0, Yn);
	const c = await Za(t.fileIds, e, {
		...a,
		signal: l,
		username: t.username
	}), d = function(e, t, n, a) {
		const o = [], l = [], c = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = [], p = we(/* @__PURE__ */ new Date()), m = (e) => {
			for (const t of e.charts) d.push({
				key: t.key,
				pid: t.pid,
				charts: t.charts.length
			}), l.push(ni(l.length, t));
			for (const [t, n] of e.csvLinesByAlgo) u.set(t, r(n[0]));
			for (const [t, n] of e.headers) c.set(t, Dr(c.get(t) ?? [], n));
			o.push({
				csvLinesByAlgo: e.csvLinesByAlgo,
				ggirReviews: e.ggirReviews
			});
		};
		async function* g(e, t) {
			for (const n of o) a?.throwIfAborted(), yield oi(n, {
				signal: a,
				names: t,
				layouts: c,
				only: e
			}).then((t) => t[e]);
		}
		return {
			add: m,
			addFiles: async (r) => {
				for (const i of r) m(await li({
					username: e,
					dateRange: t,
					snapshot: n,
					generatedAt: p
				}, i, a));
			},
			streamEntries: function* () {
				const e = Qr([...u.keys()]);
				for (const [t, n] of u) c.set(e.get(t), n);
				for (const t of [...c.keys()].filter(Nr)) {
					const e = c.get(t);
					e && c.set(t, [
						...e.filter((e) => !e.endsWith("_missing_reason") && !Tr.includes(e)),
						...Tr,
						...e.filter((e) => e.endsWith("_missing_reason") && !Tr.some((t) => e === t + "_missing_reason")),
						...Tr.map((e) => e + "_missing_reason")
					]);
				}
				for (const [t, n] of c) yield {
					name: t,
					chunks: async function* () {
						yield si(n.map(i).join(",") + "\n");
						for await (const n of g(t, e)) {
							if (!n) continue;
							const e = new TextDecoder().decode(n), t = s(e).records[0], r = si(e.slice(t.text.length + 1));
							for (let n = 0; n < r.byteLength; n += Kn) yield r.subarray(n, n + Kn);
						}
					}()
				};
				d.length && (yield {
					name: Jr,
					chunks: async function* () {
						yield* ii(function(e, t) {
							const n = e.map((e) => e.key), r = e.reduce((e, t) => e + t.charts, 0);
							return `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${Kr(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${Kr(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${r} chart${1 !== r ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${Kr(e[n].pid)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`;
						}(d, p));
						for await (const { bytes: e, lengths: t } of async function* () {
							for (const { blob: e, lengths: t } of l) a?.throwIfAborted(), yield e.arrayBuffer().then((e) => ({
								bytes: new Uint8Array(e),
								lengths: t
							}));
						}()) {
							let n = 0;
							for (const r of t) yield e.subarray(n, n += r);
						}
						for (const e of ri) yield* ii(e);
					}()
				});
			},
			generatedAt: p
		};
	}(t.username, t.dateRange, c, l), p = [];
	for (const r of c.files) {
		const e = p.at(-1);
		e?.[0]?.filename === r.filename ? e.push(r) : p.push([r]);
	}
	const m = [], g = [], f = [];
	let h = !1;
	const _ = t.manifest.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), w = a.groups ?? {
		size: 1,
		run: (e, t, n) => async function(e, t, n, { signal: r } = {}) {
			r?.throwIfAborted();
			const i = e.files.filter((e) => t.includes(e.id)), s = i.map((e) => e.id), a = /* @__PURE__ */ new Map();
			let l = !1;
			try {
				const t = await function(e, { fileIds: t, dateRange: n, signal: r }) {
					const i = to(e, Ua.circadian, t);
					return async function(e, t, { dateRange: n, signal: r }) {
						const i = W(r), s = [];
						let a = 0;
						for (const o of e) {
							if (!o.id) continue;
							r?.throwIfAborted();
							const e = await t(o.id), l = [];
							for (const t of e.values()) {
								if (r?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
								a += 1;
								const e = Jt(o.id, t);
								e && l.push(e);
							}
							if (0 === l.length) continue;
							const { request: c, transfer: u } = Kt(l.map((e) => e.wire)), d = await i.computeCircadian(b(c, u));
							r?.throwIfAborted();
							const p = new Map(l.map((e) => [e.wire.id, e.source]));
							for (const t of d.day_summaries) {
								const e = p.get(t.id);
								t.has_signal && e && s.push({
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
							totalDays: a,
							daysWithSignal: s.length,
							meanRelativeAmplitude: null,
							meanL5Hour: null,
							meanM10Hour: null,
							interdailyStability: null,
							intradailyVariability: null,
							daySummaries: s,
							perParticipant: []
						};
					}(t.length > 0 ? i.files.filter((e) => null != e.id && t.includes(e.id)) : i.files, (e) => uo(i, e), {
						dateRange: n,
						signal: r
					});
				}(e, {
					fileIds: s,
					dateRange: n.dateRange,
					signal: r
				});
				for (const e of t.daySummaries) a.set(`${e.fileId}|${e.date}`, {
					l5Hour: e.l5Hour,
					m10Hour: e.m10Hour
				});
			} catch (m) {
				if (m instanceof Xa) throw m;
				if (r?.throwIfAborted(), l = !0, m instanceof DOMException && "AbortError" === m.name) throw m;
			}
			const c = await _o(i[0].filename, "computing its sleep rows", () => async function(e, t, n, r, i, s, a) {
				const l = i && i.trim().length > 0 ? i.trim() : null, c = to(s, Ua.sleep, e), d = c.files, p = tn(c.studySettings[0]?.extraSettings), m = Ge(c.studySettings[0]?.extraSettings?.analysis_paradigm), g = (e.length > 0 ? d.filter((t) => null != t.id && e.includes(t.id)) : [...d]).sort((e, t) => e.filename.localeCompare(t.filename)), [f, h] = n ?? ["", ""], _ = [], w = [], v = [], y = [], b = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), x = async () => {
					for (const [e, t] of b) k.set(e, await ps(e, t, _, a));
					b.clear();
				}, M = /* @__PURE__ */ new Map(), S = (e) => {
					const t = JSON.stringify(e);
					let n = M.get(t);
					return n || (n = W(a).exportNapAggregate(e), M.set(t, n)), n;
				}, I = await Promise.all(g.map((e) => oo(s, e.id, t, a)));
				for (const [A, R] of g.entries()) {
					if (a?.throwIfAborted(), A > 0 && g[A - 1].filename !== R.filename && await x(), !R.id) continue;
					const e = uo(c, R.id), { bundle: t, markersByAlgo: i } = I[A], s = t?.edits ?? [], d = t ? Ae(t.imported) : [], { zone: k } = await an(R, p, a), M = [.../* @__PURE__ */ new Set([...R.availableDates, ...d.map((e) => e.nightDate)])].sort(), T = n ? M.filter((e) => e >= f && e <= h) : M;
					if (t) {
						const e = new Set(Ee(t.imported).map((e) => e.night));
						for (const n of d) {
							if (e.has(n.night) || !T.includes(n.nightDate)) continue;
							const r = be(n, i.get(n.nightDate)?.[0]).kind;
							"scored" !== r && "invalid" !== r && v.push({
								file: "sleep_export.csv",
								row: 0,
								key: `${J.filename.header}=${R.filename}|${J.study_date.header}=${n.nightDate}`,
								column: `GGIR night ${String(n.night)}: ${Ne(t.imported, n.night)}`,
								reason: "ggir_night_excluded"
							});
						}
					}
					const E = le(e.values()), C = ze(R, m) ? c.actiwareFileData.find((e) => e.fileId === R.id) ?? null : null, N = C?.actiwareIntervals ?? null, $ = T.flatMap((e) => (i.get(e) ?? []).filter((e) => o(e) || e.nonwearMarkers.length > 0).map((t) => ({
						markers: t,
						sleepPeriods: N ? zi(N, e, t.isInvalidNight) : t.sleepMarkers,
						nonwear: t.nonwearMarkers.map((e) => ({
							start: e.startTimestamp,
							end: e.endTimestamp
						}))
					}))), O = [...e.keys()].sort().map((t) => e.get(t)), j = O.map((e) => me(e).timestamps), B = Xi.flatMap((e) => {
						if (!O.some((t) => t[e])) return [];
						const t = [], n = [];
						for (const [r, i] of O.entries()) {
							const s = i[e];
							if (!s) continue;
							const a = new Float64Array(s), o = j[r];
							for (let e = 0; e < Math.min(a.length, o.length); e++) t.push(o[e]), n.push(a[e]);
						}
						return [{
							field: e,
							timestamps: Float64Array.from(t),
							values: Float64Array.from(n)
						}];
					}), D = 0 === $.length ? [] : await W(a).exportFileNightFigures($.map(({ sleepPeriods: e, nonwear: t }) => ({
						periods: e.map((e) => ({
							start: e.onsetTimestamp,
							end: e.offsetTimestamp
						})),
						nonwear: t
					})), B), P = /* @__PURE__ */ new Map();
					let L = 0;
					for (const n of $) P.set(n.markers, {
						...n,
						figures: D.slice(L, L + n.sleepPeriods.length)
					}), L += n.sleepPeriods.length;
					for (const n of T) {
						a?.throwIfAborted();
						const o = i.get(n);
						if (o && 0 !== o.length) for (const i of o) {
							const o = P.get(i);
							if (!o) continue;
							const { sleepPeriods: c, figures: p } = o, m = R.participantId ?? null, g = R.id, f = i.algorithm ?? null, h = i.username ?? null, v = i.needsConsensus, x = i.notes, M = e.get(n), I = await X(n, R.navigationFacts, W(a)), T = e.get(I), A = {
								fileId: g,
								filename: R.filename,
								participantId: m,
								studyDate: n,
								algorithm: f,
								scoredBy: h,
								needsConsensus: v,
								notes: x,
								meanTemperature: null,
								meanWhiteLight: null,
								meanRedLight: null,
								meanGreenLight: null,
								meanBlueLight: null,
								detectionRule: i.detectionRule ?? null,
								periodGuider: i.periodGuider ?? null,
								...os(i.sleepPeriodDetectionConfig),
								algorithmVersion: i.algorithmVersion ?? null,
								verificationStatus: null,
								studyId: l,
								dstTransition: await Ze(k, n, void 0, W(a))
							}, $ = await S(c.filter((e) => e.markerType === u.NAP).map((e) => ({
								start: e.onsetTimestamp,
								end: e.offsetTimestamp
							}))), O = r?.get(`${String(g)}|${n}`), j = {
								l5Hour: O?.l5Hour ?? null,
								m10Hour: O?.m10Hour ?? null,
								napCount: $.napCount,
								totalNapMinutes: $.napCount > 0 ? $.totalNapMinutes : null
							}, D = E(f), L = Qt(M, D), F = `${R.filename}\0${m ?? ""}\0${A.algorithm ?? ""}\0${A.detectionRule ?? ""}`, z = b.get(F) ?? [];
							z.push({
								date: n,
								epochLengthSeconds: R.epochLengthSeconds || 60,
								timestamps: L.timestamps,
								states: L.algorithmResults,
								stale: "stale" === D.status
							}), b.set(F, z);
							const G = me(M), V = await _n(e, n, D, {
								signal: a,
								nextDate: I
							}), U = p.map(({ means: e }) => new Map(B.map(({ field: t }, n) => [t, e[n] ?? null]))), H = async (e, r, o) => {
								let l = null;
								const c = d.find((e) => e.nightDate === n), m = t && c && e.markerType === u.MAIN_SLEEP && "invalid" !== be(c, i).kind, g = c && s.some((e) => e.night === c.night), f = ls(null), h = {};
								let _ = "not_applicable_to_row";
								const w = N && null != e.onsetTimestamp && null != e.offsetTimestamp ? {
									onset: e.onsetTimestamp,
									offset: e.offsetTimestamp
								} : null, v = w ? N.find((e) => "rest" === e.kind && e.startTimestamp <= w.onset && e.endTimestamp >= w.offset) ?? null : null;
								if (w) {
									_ = "not_computed_for_export";
									const e = (e, t) => t ? C?.actiwareStatistics?.find((n) => n.kind === e && Math.round(n.startTimestamp) === Math.round(t.startTimestamp) && Math.round(n.endTimestamp) === Math.round(t.endTimestamp)) ?? null : null, t = {
										rest: e("rest", v),
										sleep: e("sleep", {
											startTimestamp: w.onset,
											endTimestamp: w.offset
										})
									};
									for (const [n, r, i, s] of us) {
										const e = t[r]?.[i] ?? null;
										f[n] = e, h[s] = null == e ? t[r] ? "source_reported_missing" : "not_computed_for_export" : void 0;
									}
								}
								if (!m && !w && e.onsetTimestamp && e.offsetTimestamp) {
									const { timestamps: t, algorithmResults: n, activity: r, scoresStale: i } = V;
									if (null !== i && 0 === y.length && y.push({
										component: "metric_computation",
										code: "unavailable",
										message: i
									}), _ = null !== i ? "scores_from_another_config" : null == n ? "no_scored_epochs" : null == r ? "channel_unavailable" : 0 === t.length ? "no_valid_epochs" : void 0, null != n && t.length > 0 && (null != r || G.ggir)) {
										const i = G.ggir ? G.epochSec : R.epochLengthSeconds || 60, s = await ds(n, r, t, e.onsetTimestamp, e.offsetTimestamp, i, a);
										l = s.metrics, l || s.error || (_ = "no_valid_epochs"), s.error && (_ = "not_computed_for_export"), s.error && 0 === y.length && y.push({
											component: "metric_computation",
											code: "unavailable",
											message: "Metric computation failed for at least one selected period; those rows carry no numerics."
										});
									}
								}
								if (m) {
									_ = "channel_unavailable";
									const e = g ? t.current?.nights : t.imported.nights, n = e ? tt(e, J.ggir_night.header, c.night) : -1;
									for (const [t, r, i, s] of cs) {
										const a = e ? et(e, J[r].header, n) : null;
										f[t] = null == a ? null : a * s, h[i] = null == a ? g ? "not_computed_for_export" : "source_reported_missing" : void 0;
									}
								}
								(m || w || l && !("averageAwakeningLengthMinutes" in l)) && (h.average_awakening_length_minutes = "not_computed_for_export");
								const { figures: b } = p[o], k = Boolean(e.onsetTimestamp && e.offsetTimestamp), x = (e) => k ? U[o].get(e) ?? null : null, S = {
									...A,
									...j,
									periodIndex: e.markerIndex,
									markerType: e.markerType,
									onsetTimestamp: e.onsetTimestamp,
									offsetTimestamp: e.offsetTimestamp,
									...m || w ? f : ls(l),
									inBedTimestamp: v?.startTimestamp ?? null,
									outOfBedTimestamp: v?.endTimestamp ?? null,
									metricMissingReason: _,
									isInvalidNight: r,
									meanTemperature: x("temperature"),
									meanWhiteLight: x("lux"),
									meanRedLight: x("redLight"),
									meanGreenLight: x("greenLight"),
									meanBlueLight: x("blueLight"),
									sleepMidpointTimestamp: k ? b.midpointTimestamp : null,
									sleepMidpointHour: k ? b.midpointClockHour : null,
									validWearMinutes: b.validWearMinutes
								}, I = (e, t) => null != e ? void 0 : k ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
								return S.sensorMissingReasons = {
									mean_temperature_c: I(S.meanTemperature, Boolean(M?.temperature || T?.temperature)),
									mean_white_light_lux: I(S.meanWhiteLight, Boolean(M?.lux || T?.lux)),
									mean_red_light: I(S.meanRedLight, Boolean(M?.redLight || T?.redLight)),
									mean_green_light: I(S.meanGreenLight, Boolean(M?.greenLight || T?.greenLight)),
									mean_blue_light: I(S.meanBlueLight, Boolean(M?.blueLight || T?.blueLight))
								}, S.derivedMissingReasons = {
									...h,
									l5_hour: null == S.l5Hour ? O ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									m10_hour: null == S.m10Hour ? O ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									sleep_midpoint_time: null == S.sleepMidpointTimestamp ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									sleep_midpoint_hour: null == S.sleepMidpointHour ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									valid_wear_minutes: null == S.validWearMinutes ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0
								}, S;
							};
							if (i.isInvalidNight) {
								_.push({
									...A,
									...j,
									periodIndex: null,
									markerType: is,
									onsetTimestamp: null,
									offsetTimestamp: null,
									...ls(null),
									isInvalidNight: !0,
									sleepMidpointTimestamp: null,
									sleepMidpointHour: null,
									validWearMinutes: null
								});
								for (const [e, t] of c.entries()) _.push(await H(t, !0, e));
							} else for (const [e, t] of c.entries()) _.push(await H(t, !1, e));
							for (const e of i.nonwearMarkers) w.push({
								...A,
								...j,
								periodIndex: e.markerIndex ?? 0,
								markerType: ss,
								onsetTimestamp: e.startTimestamp,
								offsetTimestamp: e.endTimestamp,
								...ls(null),
								isInvalidNight: !1,
								sleepMidpointTimestamp: null,
								sleepMidpointHour: null,
								validWearMinutes: null
							});
						}
					}
				}
				await x(), _.sort(ms), w.sort(ms);
				const T = await async function(e, t) {
					const n = e.filter((e) => e.markerType === u.MAIN_SLEEP), r = /* @__PURE__ */ new Map();
					for (const o of n) {
						const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = r.get(e);
						t ? t.push(o) : r.set(e, [o]);
					}
					const i = [...r], s = await W(t).summarizeExportGroups(i.map(([, e]) => e.map((e) => ({
						study_date: e.studyDate,
						total_nap_minutes: e.totalNapMinutes,
						values: gs.map(([, t]) => e[t])
					})))), a = i.map(([e, t], n) => {
						const [r, i, a, o] = e.split("\0"), l = s[n], c = Object.fromEntries(gs.map(([e], t) => [e, l.means[t] ?? null]));
						return {
							filename: r,
							participantId: i,
							algorithm: a,
							detectionRule: o,
							nNights: l.nNights,
							...c,
							meanTemperatureMissingReason: null == c.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
							metricMissingReasons: Object.fromEntries(gs.map(([e, n]) => {
								const r = fs[e], i = cs.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : r), s = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[i] ?? e.metricMissingReason).find(Boolean);
								return [r, null == c[e] ? s : void 0];
							})),
							sleepRegularityIndex: null,
							meanTotalNapMinutes: l.meanTotalNapMinutes,
							studyId: t[0]?.studyId ?? null
						};
					});
					return a.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), a;
				}(_, a);
				for (const o of T) {
					const e = `${o.filename}\0${o.participantId}\0${o.algorithm}\0${o.detectionRule}`, t = k.get(e);
					o.sleepRegularityIndex = t?.sri ?? null, o.sleepRegularityMissingReason = t?.sriMissingReason ?? (t ? void 0 : "not_computed_for_export");
				}
				return {
					sleepRows: _,
					nonwearRows: w,
					summaryRows: T,
					degradations: y,
					nightReasons: v
				};
			}(s, n.username, n.dateRange, a, n.studyId, e, r)), d = await _o(i[0].filename, "drawing its visual report", async () => {
				const t = [];
				for (const s of i) t.push(await li({
					...n,
					snapshot: e
				}, s, r));
				return t;
			}), { generateLocalPhysicalActivityExportRows: p } = await import("./local-physical-activity-export-B45Ui3rc.js");
			return {
				part: c,
				physicalActivityRows: await p(e, s, n.dateRange, {
					username: n.username,
					cutpointOverrides: n.physicalActivity.cutpointOverrides,
					maskPolicy: n.physicalActivity.maskPolicy,
					choiAxis: n.physicalActivity.choiAxis,
					exportedAt: n.exportedAt,
					...r ? { signal: r } : {}
				}),
				eventMarkerRows: await qs(s, n.dateRange, e, n.username, r),
				circadianDegraded: l,
				reports: d
			};
		}(e, t, n, { signal: l })
	}, v = {
		username: t.username,
		studyId: t.studyId,
		dateRange: t.dateRange,
		physicalActivity: t.physicalActivity,
		exportedAt: _,
		generatedAt: d.generatedAt
	}, y = p.map(() => {
		const e = {};
		return e.promise = new Promise((t, n) => {
			e.resolve = t, e.reject = n;
		}), e.promise.catch(() => {}), e;
	});
	let k = 0, x = p.length, M = 0;
	a.progress?.(0, p.length, Zn), Promise.all(Array.from({ length: Math.min(w.size, p.length) }, async () => {
		for (; k < x;) {
			const t = k++;
			try {
				y[t].resolve(await w.run(c, p[t].map((e) => e.id), v)), a.progress?.(++M, p.length, Zn);
			} catch (e) {
				x = Math.min(x, t), y[t].reject(e);
			}
		}
	}));
	try {
		for (const e of y) {
			l?.throwIfAborted();
			const t = await e.promise;
			m.push(t.part);
			for (const e of t.reports) d.add(e);
			g.push(...t.physicalActivityRows), f.push(...t.eventMarkerRows), h ||= t.circadianDegraded;
		}
	} finally {
		x = 0;
	}
	a.progress?.(0, 0, Qn), l?.throwIfAborted();
	const S = function(e) {
		return {
			sleepRows: e.flatMap((e) => e.sleepRows),
			nonwearRows: e.flatMap((e) => e.nonwearRows),
			summaryRows: e.flatMap((e) => e.summaryRows),
			degradations: e.flatMap((e) => e.degradations).slice(0, 1),
			nightReasons: e.flatMap((e) => e.nightReasons ?? [])
		};
	}(m), I = await async function(e, t, n, r, i) {
		i?.throwIfAborted();
		const s = to(n, Ua.actiwareInterval, e), a = s.studySettings[0]?.extraSettings?.analysis_paradigm, o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), l = [];
		for (const c of o) {
			i?.throwIfAborted();
			const e = s.actiwareFileData.find((e) => e.fileId === c.id), n = io(s, c.id, r), o = [...n].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort(), u = s.actiwareStatisticsInputs.find((e) => e.fileId === c.id), d = (e) => W(i).actiwareIntervalStatistics(e), p = ze(c, a), m = p ? await Ui(e?.actiwareIntervals, u?.input, o, d) : await Ki({
				file: e ?? {},
				statisticsInput: u?.input
			}, n, d, i);
			i?.throwIfAborted();
			const g = await js({
				...c,
				...e,
				actiwareStatistics: m ?? []
			}, t, i, p ? { invalidDates: o } : void 0), f = new Set(n.keys()), h = new Set(o.filter((e) => !t || e >= t[0] && e <= t[1]));
			l.push(...Bs(g.filter((e) => f.has(e.studyDate)), h, c));
		}
		return l;
	}(t.fileIds, t.dateRange, c, t.username, l), T = {}, A = function(e) {
		const t = to(e, Ua.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(c);
	A && (T["audit_log.jsonl"] = A);
	const R = async function* (e, t, n, r, i) {
		i?.throwIfAborted();
		const s = to(n, Ua.actiwareSleepWake, e), a = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = a.map((e) => s.actiwareFileData.find((t) => t.fileId === e.id)), l = function(e, t = !1) {
			const n = [[
				...Js,
				"Sleep/Wake_missing_reason",
				"Wake Threshold_missing_reason",
				...t ? ["Participant ID_missing_reason"] : []
			].join(",")];
			for (const r of e) n.push(Zs(r, r.epochTimestamp, r.sleepWake, t));
			return `${n.join("\n")}\n`;
		}([], !0);
		let c = [], u = 0, d = 0;
		const p = () => {
			i?.throwIfAborted();
			const e = function(...e) {
				const t = Ir(...e), n = [];
				for (;;) {
					const e = t.next();
					if (e.done) return {
						...e.value,
						reasons: n
					};
					n.push(e.value);
				}
			}(l + c.join("\n") + "\n", Ks, !0, { rowOffset: u }), t = u ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
				bytes: new TextEncoder().encode(t),
				rows: c.length,
				reasonRows: e.reasons.length,
				reasons: new TextEncoder().encode(xr(e.reasons, !1))
			};
			return u += c.length, c = [], d = 0, n;
		};
		for (const [m, g] of a.entries()) {
			i?.throwIfAborted();
			const e = o[m]?.actiwareSleepWake;
			if (!e) continue;
			const n = o[m]?.actiwareWakeThreshold, a = null != n && Number.isFinite(n) ? n : null, l = new Int8Array(e.scores), u = await Ys(e, t, new Set(io(s, g.id, r).keys()), W(i));
			i?.throwIfAborted();
			for (const { date: t, start: r, end: i } of u) {
				const n = {
					filename: g.filename,
					participantId: g.participantId ?? null,
					studyDate: t,
					sleepDetection: Ue(e.params, "sleep_detection"),
					wakeThresholdSelection: Ue(e.params, "wake_threshold_selection"),
					wakeThreshold: a,
					...null === a ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
				};
				for (let t = r; t < i; t += 1) {
					const r = l[t], i = Zs(n, e.startTimestamp + t * e.epochSeconds, 0 === r || 1 === r ? r : null, !0);
					if (i.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
					c.push(i), d += i.length, (512 === c.length || d >= 32768) && (yield p());
				}
			}
		}
		c.length && (yield p()), i?.throwIfAborted();
	}(t.fileIds, t.dateRange, c, t.username, l), E = await R.next();
	let C = E.done ? 0 : E.value.rows;
	const O = async function* () {
		if (!E.done) {
			yield E.value;
			for await (const e of R) C += e.rows, yield e;
		}
	}(), j = to(c, Ua.manifest), B = Object.fromEntries(S.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	h ||= S.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const D = [...h ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...S.degradations], P = function(e, t) {
		const n = {}, r = {}, i = {}, s = new Map(t.map((e) => [e.fileId, e]));
		for (const a of e) {
			const e = s.get(a.fileId), t = void 0 === e?.notApplied ? a.ggirCorrections ?? e?.ggirCorrections : void 0;
			if (!t) {
				void 0 !== e?.notApplied && (i[String(a.fileId)] = e.notApplied);
				continue;
			}
			const { notApplied: o, ...l } = t;
			n[String(a.fileId)] = l;
			const c = r[t.profile] ??= { notApplied: [] };
			for (const n of o ?? []) c.notApplied.some((e) => e.correction === n.correction) || c.notApplied.push({ ...n });
		}
		return {
			ggirCorrections: n,
			ggirCorrectionProfiles: r,
			ggirCorrectionsNotApplied: i
		};
	}(j.ggirResultsBundles, j.ggirCorrectedValues), L = await _o(null, "reading saved GGIR source provenance", () => async function(e, t = W()) {
		const n = /* @__PURE__ */ new Map();
		return Object.fromEntries(await Promise.all(e.map(async (e) => {
			return [String(e.fileId), await (r = e.configCsv, n.get(r) ?? n.set(r, (async (e) => {
				const [n, r] = await Promise.all([t.ggirAppConfigSummary(e, !1), t.ggirNonwearApproach(e)]);
				return {
					configGgirVersion: n.configGgirVersion,
					nonwearApproach: r ?? null
				};
			})(r)).get(r))];
			var r;
		})));
	}(j.ggirResultsBundles, W(l))), F = [...d.streamEntries()], z = await async function(e) {
		const t = e.deflate ?? {
			lanes: 1,
			block: (e, t) => Promise.resolve(function(e, t) {
				if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
				const n = [], r = new Lt(t?.byteLength ? {
					level: 1,
					dictionary: t
				} : { level: 1 }, (e) => {
					n.push(e);
				});
				r.push(e, !1), r.flush(!1);
				const i = r.s.r ?? 0;
				if (!Number.isInteger(i) || i < 0 || i > 2047) throw new Error("ZIP compression state is unreadable.");
				const s = (7 & i) > 5 ? 2 : 1, a = new Uint8Array(s + 4);
				return a[0] = i >> 3, a[s + 2] = 255, a[s + 3] = 255, n.push(a), ge(n);
			}(e, t))
		};
		if (!navigator.storage?.getDirectory) throw new Error("Streaming export requires temporary workspace storage (OPFS).");
		const n = await (await (await navigator.storage.getDirectory()).getDirectoryHandle(Vn, { create: !0 })).getDirectoryHandle(e.scratchId, { create: !0 }), i = await n.getFileHandle(kr, { create: !0 }), a = await n.getFileHandle("bundle.zip", { create: !0 }), o = new CompressionStream("gzip"), l = o.readable.pipeTo(await i.createWritable());
		l.catch(() => {});
		const c = o.writable.getWriter(), u = await a.createWritable();
		let d = [], p = 0, m = e.artifacts.importRefusalReasons?.length ?? 0;
		const g = [], f = new Ht((e, t) => {
			if (e) throw e;
			d.push(t);
		}), h = async (e = 0) => {
			p = Math.max(p, e + d.reduce((e, t) => e + t.byteLength, 0));
			for (const t of d) await u.write(t);
			d = [];
		}, _ = /* @__PURE__ */ new Set();
		let w = 0;
		const v = async (n, r) => {
			if (_.has(n)) throw new Error(`Duplicate export entry: ${n}`);
			_.add(n);
			const i = new ea(n), s = new $();
			let a = 0;
			f.add(i);
			const { blockBytes: o, inFlight: l } = function(e) {
				const t = Math.min(2 * e + 1, Math.floor(24)), n = Math.floor(1572864 / t) - 32768;
				return {
					blockBytes: n - n % 4096,
					inFlight: t - 1
				};
			}(t.lanes), c = [];
			let u = new Uint8Array(o), d = 0, m = /* @__PURE__ */ new Uint8Array(0), v = 0;
			const y = () => v + d + m.byteLength + c.length * (o + 32768), b = async () => {
				i.emit(await c.shift(), !1), await h(y());
			}, k = async () => {
				const e = u.subarray(0, d), n = e.slice(-32768);
				for (c.push(t.block(e, m)), m = n, u = new Uint8Array(o), d = 0; c.length > l;) await b();
			};
			try {
				for await (const t of r) {
					v = t.byteLength;
					for (let n = 0; n < t.byteLength; n += Qs) {
						e.signal?.throwIfAborted();
						const r = t.subarray(n, n + Qs);
						s.update(r), i.push(r, !1), a += r.byteLength;
						for (let e = 0; e < r.byteLength;) {
							const t = Math.min(r.byteLength - e, o - d);
							u.set(r.subarray(e, e + t), d), d += t, e += t, d === o && await k();
						}
						p = Math.max(p, y());
					}
				}
				for (v = 0, d && await k(); c.length;) await b();
			} finally {
				for (const e of c) e.catch(() => {});
			}
			i.push(/* @__PURE__ */ new Uint8Array(), !0), i.emit(Xs, !0), await h(), g.push({
				name: n,
				contentHash: N(s.finalize()),
				byteLength: a
			}), e.progress?.(g.length, w, Qn);
		};
		try {
			await c.write(new TextEncoder().encode(xr(e.artifacts.importRefusalReasons ?? [])));
			const t = [...fo({
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
			w = t.filter((e) => e.write).length + 2, e.progress?.(0, w, Qn);
			for (const i of t) if (i.write) try {
				"actiware_sleep_wake_export.csv" === i.name ? await v(i.name, async function* () {
					for await (const t of e.sleepWake) e.signal?.throwIfAborted(), m += t.reasonRows, p = Math.max(p, t.bytes.byteLength + t.reasons.byteLength), await c.write(t.reasons), yield t.bytes;
				}()) : i.name.endsWith(".csv") ? await v(i.name, async function* () {
					let t = 0, n = !1, a = !1;
					const o = "actiware_intervals_export.csv" === i.name ? function* () {
						const t = r(s(Fs([], !0)).records[0].text);
						for (const n of e.artifacts.actiwareIntervalRows ?? []) {
							const e = r(s(Fs([n], !0)).records[1].text);
							yield new Map(t.map((t, n) => [t, e[n] ?? ""]));
						}
					} : void 0;
					for await (const e of i.batches?.() ?? ta(i.chunks ?? [i.write()])) {
						if (e.bytes.byteLength > 4 * Qs) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
						const r = Ir(e.text ?? new TextDecoder().decode(e.bytes), i.name, !0, {
							fullRowCsv: e.fullRowCsv,
							rowOffset: t,
							...o ? { contextRows: o } : {}
						});
						let s, l = "";
						for (;;) {
							const t = r.next();
							if (t.done) {
								s = t.value;
								break;
							}
							if (l += xr([t.value], !1), m += 1, l.length >= Qs / 2) {
								const t = new TextEncoder().encode(l);
								p = Math.max(p, e.bytes.byteLength + t.byteLength), await c.write(t), l = "";
							}
						}
						await c.write(new TextEncoder().encode(l));
						const u = n ? (a ? "" : "\n") + s.csv.slice(s.csv.indexOf("\n") + 1) : s.csv;
						n = !0, t += e.rows ?? 0, a = u.endsWith("\n");
						const d = new TextEncoder().encode(u);
						p = Math.max(p, e.bytes.byteLength + d.byteLength + 2 * l.length), yield d;
					}
				}()) : await v(i.name, i.chunks ?? [i.write()]);
			} catch (y) {
				throw new Error(`Export failed while writing ${i.name}`, { cause: y });
			}
			await c.close(), await l, await v(kr, async function* () {
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
					contentHash: await ws(t),
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
			return await v(Jn, [new TextEncoder().encode(vs(n))]), f.end(), await h(), e.signal?.throwIfAborted(), await u.close(), {
				blob: await new Response((await a.getFile()).stream()).blob(),
				entries: g,
				peakBufferedBytes: p,
				reasonRows: m
			};
		} catch (b) {
			throw f.terminate(), await Promise.allSettled([
				c.abort(),
				u.abort(),
				l
			]), b;
		}
	}({
		artifacts: {
			importRefusalReasons: [
				...po(c),
				...Ga(c),
				...za(c),
				...S.nightReasons ?? []
			],
			...S,
			physicalActivityRows: g,
			physicalActivityEnabledClasses: t.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: t.physicalActivity.nonwearAsClass,
			ggirEntries: T,
			eventMarkerRows: f,
			actiwareIntervalRows: I,
			actiwareSleepWakeCsv: {
				rows: C,
				bytes: /* @__PURE__ */ new Uint8Array(),
				reasonChunks: []
			}
		},
		extraEntries: F,
		options: t,
		manifest: {
			...t.manifest,
			physicalActivity: t.physicalActivity,
			exportedAt: _,
			algorithmVersions: B,
			degradations: D,
			ggirSources: L,
			...P,
			executionAttestationIds: j.localExecutions.map((e) => e.attestationId),
			diaryTemporalPolicyByFile: Object.fromEntries(j.files.map((e) => [String(e.id), Object.fromEntries(j.diaryEntries.filter((t) => t.fileId === e.id).map((e) => [e.analysisDate, e.importMappingProvenance?.diaryTemporalPolicy ?? null]))]))
		},
		sleepWake: O,
		scratchId: n,
		...l ? { signal: l } : {},
		...w.deflate ? { deflate: w.deflate } : {},
		...a.progress ? { progress: a.progress } : {}
	});
	return {
		...z,
		actiwareSleepWakeRows: C,
		degradations: D,
		ggirCorrected: Wa(P),
		hasData: S.sleepRows.length > 0 || S.nonwearRows.length > 0 || g.length > 0 || z.entries.some((e) => F.some((t) => t.name === e.name)) || Object.keys(T).length > 0,
		rowCount: S.sleepRows.length + S.nonwearRows.length + S.summaryRows.length + g.length,
		dayCount: (/* @__PURE__ */ new Set([
			...S.sleepRows.map((e) => e.studyDate),
			...S.nonwearRows.map((e) => e.studyDate),
			...g.map((e) => e.analysisDate)
		])).size,
		fileCount: c.files.length
	};
}
async function _o(e, t, n) {
	try {
		return await n();
	} catch (r) {
		if (r instanceof DOMException && "AbortError" === r.name) throw r;
		throw new Hn(e, t, r);
	}
}
function wo(e, t = /* @__PURE__ */ new Set()) {
	if (e instanceof ArrayBuffer) t.add(e);
	else if (ArrayBuffer.isView(e)) t.add(e.buffer);
	else if (e && "object" == typeof e) for (const n of Object.values(e)) wo(n, t);
	return [...t];
}
function vo(e) {
	const t = [], n = [], r = [];
	let i;
	const s = new Promise((e, t) => {
		i = t;
	});
	s.catch(() => {});
	const a = (e) => {
		const t = e.message;
		i(/* @__PURE__ */ new Error(`An export shard stopped before finishing its work: ${"messageerror" === e.type ? "a message from it could not be read" : t?.length ? t : "its script failed to load"}.`));
	}, o = async (i) => {
		const o = await (() => {
			const i = n.pop();
			if (i) return Promise.resolve(i);
			if (t.length < e) {
				const e = new Worker(new URL("/sleep-scoring-wasm/assets/local-export-shard-worker-CRWHMs-Y.js", "" + import.meta.url), { type: "module" });
				return e.addEventListener("error", a), e.addEventListener("messageerror", a), t.push(e), Promise.resolve(w(e));
			}
			return new Promise((e) => {
				r.push(e);
			});
		})();
		try {
			return await Promise.race([i(o), s]);
		} finally {
			const e = r.shift();
			e ? e(o) : n.push(o);
		}
	};
	return {
		runner: {
			size: e,
			run: (e, t, n) => o(async (r) => {
				const i = function(e, t) {
					const n = Ha.get(e);
					if (!n) throw new Xa("Export requires a captured input snapshot");
					const r = new Set(Qa.flatMap((e) => Object.keys(Ua[e])));
					return Object.fromEntries([...r].map((e) => [e, (n[e] ?? []).filter((n) => "studySettings" === e || t.includes("files" === e ? n.id : n.fileId)).map(Ja)]));
				}(e, t), s = await r.group(t, b(i, wo(i)), n);
				if ("failure" in s) throw Hn.fromWire(s.failure);
				return s.result;
			}),
			deflate: {
				lanes: e,
				block: (e, t) => o((n) => n.deflate(b(e, [e.buffer]), b(t, [t.buffer])))
			}
		},
		terminate: () => {
			for (const e of t) e.terminate();
		}
	};
}
_({ async build(e, t, n, r) {
	const i = new p(e), s = vo(Math.max(1, Math.min(8, (navigator.hardwareConcurrency || 2) - 2)));
	let a;
	try {
		return a = await (await (await (await (await navigator.storage.getDirectory()).getDirectoryHandle(Vn, { create: !0 })).getDirectoryHandle(n, { create: !0 })).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await i.open(), await ho(i, t, n, {
			...r ? { progress: r } : {},
			binaryStore: a,
			groups: s.runner
		});
	} catch (o) {
		if (o instanceof Hn) return { failure: o.wire };
		throw o;
	} finally {
		s.terminate(), a?.close(), i.close();
	}
} });
export { Kt as A, ci as C, gn as D, mn as E, an as O, Ai as S, pn as T, Ci as _, da as a, wi as b, Hi as c, Gi as d, Ui as f, mi as g, Qi as h, ro as i, Jt as j, nn as k, qi as l, Ji as m, to as n, Ma as o, Zi as p, uo as r, $i as s, Ua as t, zi as u, pi as v, fn as w, Ri as x, Ei as y };
