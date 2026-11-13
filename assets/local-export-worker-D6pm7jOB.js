import { E as e, Fn as t, Jt as n, M as r, Mn as i, N as s, Rt as a, Xt as o, Yt as l, _ as c, a as u, an as d, c as p, f as m, k as g, kn as f, kt as h, o as _, qt as w, s as v, u as y } from "./schema-DIFbKGjm.js";
import { a as b, c as k, n as x, r as M, s as S } from "./workers-DmTzGLlL.js";
import { J as I, K as T, M as A, W as R, c as E, dt as C, h as N, l as $, q as O, st as j, t as B } from "./workspace-db-DNuCZnyP.js";
import { d as D, l as P, n as L, s as F } from "./content-hash-D4_ZE65l.js";
import { _ as W, a as z, d as G, g as V, l as U, n as H, t as q } from "./background-jobs-DLY-DhSD.js";
import { n as K, o as J, r as Y } from "./raw-pass-pool-C2qtsXn3.js";
import { A as Z, D as Q, E as X, M as ee, N as te, O as ne, P as re, _ as ie, f as se, j as ae, k as oe } from "./nonwear-display-slots-B19fDwa2.js";
import { a as le } from "./project-revision-DLZtV_3K.js";
import { F as ce, G as ue, Jt as de, N as pe, P as me, Wt as ge, Yt as fe, en as he, jt as _e, k as we, q as ve, sn as ye, tn as be, x as ke } from "./store-BrPwbSkD.js";
import { F as xe, W as Me, d as Se, f as Ie, g as Te, u as Ae } from "./night-session-registry-B7iEsJ1z.js";
import { A as Re, J as Ee, M as Ce, P as Ne, Q as $e, X as Oe, f as je, h as Be, i as De, k as Pe, m as Le, n as Fe, o as We, r as ze, t as Ge, v as Ve } from "./per-source-defaults-CrNUl4LJ.js";
import { _ as Ue, a as He, d as qe, i as Ke, m as Je, o as Ye, p as Ze, t as Qe, u as Xe, y as et } from "./ggir-results-import-CRLkOYdA.js";
import { E as tt, N as nt, c as rt } from "./local-nonwear-unified-CYwFMQ5Z.js";
import { r as it } from "./physical-activity-cutpoint-presets-HxPAI2J5.js";
import { h as st, m as at, v as ot } from "./diary-local-import-contract-C-V-VoDq.js";
import { n as lt, r as ct, t as ut } from "./ggir-results-types-CCrcBspX.js";
var dt = Uint8Array, pt = Uint16Array, mt = Int32Array, gt = new dt([
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
]), ft = new dt([
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
]), ht = new dt([
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
]), _t = function(e, t) {
	for (var n = new pt(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
	var i = new mt(n[30]);
	for (r = 1; r < 30; ++r) for (var s = n[r]; s < n[r + 1]; ++s) i[s] = s - n[r] << 5 | r;
	return {
		b: n,
		r: i
	};
}, wt = _t(gt, 2), vt = wt.b, yt = wt.r;
vt[28] = 258, yt[258] = 28;
for (var bt = _t(ft, 0), kt = (bt.b, bt.r), xt = new pt(32768), Mt = 0; Mt < 32768; ++Mt) {
	var St = (43690 & Mt) >> 1 | (21845 & Mt) << 1;
	St = (61680 & (St = (52428 & St) >> 2 | (13107 & St) << 2)) >> 4 | (3855 & St) << 4, xt[Mt] = ((65280 & St) >> 8 | (255 & St) << 8) >> 1;
}
var It = function(e, t, n) {
	for (var r = e.length, i = 0, s = new pt(t); i < r; ++i) e[i] && ++s[e[i] - 1];
	var a, o = new pt(t);
	for (i = 1; i < t; ++i) o[i] = o[i - 1] + s[i - 1] << 1;
	if (n) {
		a = new pt(1 << t);
		var l = 15 - t;
		for (i = 0; i < r; ++i) if (e[i]) for (var c = i << 4 | e[i], u = t - e[i], d = o[e[i] - 1]++ << u, p = d | (1 << u) - 1; d <= p; ++d) a[xt[d] >> l] = c;
	} else for (a = new pt(r), i = 0; i < r; ++i) e[i] && (a[i] = xt[o[e[i] - 1]++] >> 15 - e[i]);
	return a;
}, Tt = new dt(288);
for (Mt = 0; Mt < 144; ++Mt) Tt[Mt] = 8;
for (Mt = 144; Mt < 256; ++Mt) Tt[Mt] = 9;
for (Mt = 256; Mt < 280; ++Mt) Tt[Mt] = 7;
for (Mt = 280; Mt < 288; ++Mt) Tt[Mt] = 8;
var At = new dt(32);
for (Mt = 0; Mt < 32; ++Mt) At[Mt] = 5;
var Rt = It(Tt, 9, 0), Et = It(At, 5, 0), Ct = function(e) {
	return (e + 7) / 8 | 0;
}, Nt = function(e, t, n) {
	return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new dt(e.subarray(t, n));
}, $t = [
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
], Ot = function(e, t, n) {
	var r = new Error(t || $t[e]);
	if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, Ot), !n) throw r;
	return r;
}, jt = function(e, t, n) {
	n <<= 7 & t;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8;
}, Bt = function(e, t, n) {
	n <<= 7 & t;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8, e[r + 2] |= n >> 16;
}, Dt = function(e, t) {
	for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({
		s: r,
		f: e[r]
	});
	var i = n.length, s = n.slice();
	if (!i) return {
		t: Vt,
		l: 0
	};
	if (1 == i) {
		var a = new dt(n[0].s + 1);
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
	var m = new pt(p + 1), g = Pt(n[u - 1], m, 0);
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
		t: new dt(m),
		l: g
	};
}, Pt = function(e, t, n) {
	return -1 == e.s ? Math.max(Pt(e.l, t, n + 1), Pt(e.r, t, n + 1)) : t[e.s] = n;
}, Lt = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new pt(++t), r = 0, i = e[0], s = 1, a = function(e) {
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
}, Ft = function(e, t) {
	for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
	return n;
}, Wt = function(e, t, n) {
	var r = n.length, i = Ct(t + 2);
	e[i] = 255 & r, e[i + 1] = r >> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
	for (var s = 0; s < r; ++s) e[i + s + 4] = n[s];
	return 8 * (i + 4 + r);
}, zt = function(e, t, n, r, i, s, a, o, l, c, u) {
	jt(t, u++, n), ++i[256];
	for (var d = Dt(i, 15), p = d.t, m = d.l, g = Dt(s, 15), f = g.t, h = g.l, _ = Lt(p), w = _.c, v = _.n, y = Lt(f), b = y.c, k = y.n, x = new pt(19), M = 0; M < w.length; ++M) ++x[31 & w[M]];
	for (M = 0; M < b.length; ++M) ++x[31 & b[M]];
	for (var S = Dt(x, 7), I = S.t, T = S.l, A = 19; A > 4 && !I[ht[A - 1]]; --A);
	var R, E, C, N, $ = c + 5 << 3, O = Ft(i, Tt) + Ft(s, At) + a, j = Ft(i, p) + Ft(s, f) + a + 14 + 3 * A + Ft(x, I) + 2 * x[16] + 3 * x[17] + 7 * x[18];
	if (l >= 0 && $ <= O && $ <= j) return Wt(t, u, e.subarray(l, l + c));
	if (jt(t, u, 1 + (j < O)), u += 2, j < O) {
		R = It(p, m, 0), E = p, C = It(f, h, 0), N = f;
		var B = It(I, T, 0);
		for (jt(t, u, v - 257), jt(t, u + 5, k - 1), jt(t, u + 10, A - 4), u += 14, M = 0; M < A; ++M) jt(t, u + 3 * M, I[ht[M]]);
		u += 3 * A;
		for (var D = [w, b], P = 0; P < 2; ++P) {
			var L = D[P];
			for (M = 0; M < L.length; ++M) {
				var F = 31 & L[M];
				jt(t, u, B[F]), u += I[F], F > 15 && (jt(t, u, L[M] >> 5 & 127), u += L[M] >> 12);
			}
		}
	} else R = Rt, E = Tt, C = Et, N = At;
	for (M = 0; M < o; ++M) {
		var W = r[M];
		if (W > 255) {
			Bt(t, u, R[257 + (F = W >> 18 & 31)]), u += E[F + 257], F > 7 && (jt(t, u, W >> 23 & 31), u += gt[F]);
			var z = 31 & W;
			Bt(t, u, C[z]), u += N[z], z > 3 && (Bt(t, u, W >> 5 & 8191), u += ft[z]);
		} else Bt(t, u, R[W]), u += E[W];
	}
	return Bt(t, u, R[256]), u + E[256];
}, Gt = new mt([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), Vt = new dt(0), Ut = function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, r = 9; --r;) n = (1 & n && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), Ht = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
}, qt = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new dt(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, r, i) {
			if (!i && (i = { l: 1 }, t.dictionary)) {
				var s = t.dictionary.subarray(-32768), a = new dt(s.length + e.length);
				a.set(s), a.set(e, s.length), e = a, i.w = s.length;
			}
			return function(e, t, n, r, i, s) {
				var a = s.z || e.length, o = new dt(r + a + 5 * (1 + Math.ceil(a / 7e3)) + i), l = o.subarray(r, o.length - i), c = s.l, u = 7 & (s.r || 0);
				if (t) {
					u && (l[0] = s.r >> 3);
					for (var d = Gt[t - 1], p = d >> 13, m = 8191 & d, g = (1 << n) - 1, f = s.p || new pt(32768), h = s.h || new pt(g + 1), _ = Math.ceil(n / 3), w = 2 * _, v = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, y = new mt(25e3), b = new pt(288), k = new pt(32), x = 0, M = 0, S = s.i || 0, I = 0, T = s.w || 0, A = 0; S + 2 < a; ++S) {
						var R = v(S), E = 32767 & S, C = h[R];
						if (f[E] = C, h[R] = E, T <= S) {
							var N = a - S;
							if ((x > 7e3 || I > 24576) && (N > 423 || !c)) {
								u = zt(e, l, 0, y, b, k, M, I, A, S - A, u), I = x = M = 0, A = S;
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
								y[I++] = 268435456 | yt[O] << 18 | kt[j];
								var H = 31 & yt[O], q = 31 & kt[j];
								M += gt[H] + ft[q], ++b[257 + H], ++k[q], T = S + O, ++x;
							} else y[I++] = e[S], ++b[e[S]];
						}
					}
					for (S = Math.max(S, T); S < a; ++S) y[I++] = e[S], ++b[e[S]];
					u = zt(e, l, c, y, b, k, M, I, A, S - A, u), c || (s.r = 7 & u | l[u / 8 | 0] << 3, u -= 7, s.h = h, s.p = f, s.i = S, s.w = T);
				} else {
					for (S = s.w || 0; S < a + c; S += 65535) {
						var K = S + 65535;
						K >= a && (l[u / 8 | 0] = c, K = a), u = Wt(l, u + 1, e.subarray(S, K));
					}
					s.i = a;
				}
				return Nt(o, 0, r + Ct(u) + i);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? i.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, n, r, i);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || Ot(5), this.s.l && Ot(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var r = new dt(-32768 & n);
				r.set(this.b.subarray(0, this.s.z)), this.b = r;
			}
			var i = this.b.length - this.s.z;
			this.b.set(e.subarray(0, i), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(i), 32768), this.s.z = e.length - i + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = Vt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || Ot(5), this.s.l && Ot(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new dt(6);
			t[0] = this.s.r >> 3;
			var n = Wt(t, this.s.r, Vt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), Kt = "undefined" != typeof TextEncoder && new TextEncoder(), Jt = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	Jt.decode(Vt, { stream: !0 });
} catch (Do) {}
function Yt(e, t) {
	if (t) {
		for (var n = new dt(e.length), r = 0; r < e.length; ++r) n[r] = e.charCodeAt(r);
		return n;
	}
	if (Kt) return Kt.encode(e);
	var i = e.length, s = new dt(e.length + (e.length >> 1)), a = 0, o = function(e) {
		s[a++] = e;
	};
	for (r = 0; r < i; ++r) {
		if (a + 5 > s.length) {
			var l = new dt(a + 8 + (i - r << 1));
			l.set(s), s = l;
		}
		var c = e.charCodeAt(r);
		c < 128 || t ? o(c) : c < 2048 ? (o(192 | c >> 6), o(128 | 63 & c)) : c > 55295 && c < 57344 ? (o(240 | (c = 65536 + (1047552 & c) | 1023 & e.charCodeAt(++r)) >> 18), o(128 | c >> 12 & 63), o(128 | c >> 6 & 63), o(128 | 63 & c)) : (o(224 | c >> 12), o(128 | c >> 6 & 63), o(128 | 63 & c));
	}
	return Nt(s, 0, a);
}
var Zt = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var r = e[n].length;
		r > 65535 && Ot(9), t += r + 4;
	}
	return t;
}, Qt = function(e, t, n, r, i, s, a, o) {
	var l = r.length, c = n.extra, u = o && o.length, d = Zt(c);
	Ht(e, t, null != a ? 33639248 : 67324752), t += 4, null != a && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (s < 0 && 8), e[t++] = i && 8, e[t++] = 255 & n.compression, e[t++] = n.compression >> 8;
	var p = new Date(null == n.mtime ? Date.now() : n.mtime), m = p.getFullYear() - 1980;
	if ((m < 0 || m > 119) && Ot(10), Ht(e, t, m << 25 | p.getMonth() + 1 << 21 | p.getDate() << 16 | p.getHours() << 11 | p.getMinutes() << 5 | p.getSeconds() >> 1), t += 4, -1 != s && (Ht(e, t, n.crc), Ht(e, t + 4, s < 0 ? -s - 2 : s), Ht(e, t + 8, n.size)), Ht(e, t + 12, l), Ht(e, t + 14, d), t += 16, null != a && (Ht(e, t, u), Ht(e, t + 6, n.attrs), Ht(e, t + 10, a), t += 14), e.set(r, t), t += l, d) for (var g in c) {
		var f = c[g], h = f.length;
		Ht(e, t, +g), Ht(e, t + 2, h), e.set(f, t + 4), t += 4 + h;
	}
	return u && (e.set(o, t), t += u), t;
}, Xt = function() {
	function e(e) {
		var t;
		this.filename = e, this.c = (t = -1, {
			p: function(e) {
				for (var n = t, r = 0; r < e.length; ++r) n = Ut[255 & n ^ e[r]] ^ n >>> 8;
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
		this.ondata || Ot(5), this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1);
	}, e;
}(), en = function() {
	function e(e) {
		this.ondata = e, this.u = [], this.d = 1;
	}
	return e.prototype.add = function(e) {
		var t = this;
		if (this.ondata || Ot(5), 2 & this.d) this.ondata(Ot(4 + 8 * (1 & this.d), 0, 1), null, !1);
		else {
			var n = Yt(e.filename), r = n.length, i = e.comment, s = i && Yt(i), a = r != e.filename.length || s && i.length != s.length, o = r + Zt(e.extra) + 30;
			r > 65535 && this.ondata(Ot(11, 0, 1), null, !1);
			var l = new dt(o);
			Qt(l, 0, e, n, a, -1);
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
					var s = new dt(16);
					Ht(s, 0, 134695760), Ht(s, 4, e.crc), Ht(s, 8, g), Ht(s, 12, e.size), c.push(s), m.c = g, m.b = o + g + 16, m.crc = e.crc, m.size = e.size, d && m.r(), d = 1;
				} else d && u();
			}, this.u.push(m);
		}
	}, e.prototype.end = function() {
		var e = this;
		2 & this.d ? this.ondata(Ot(4 + 8 * (1 & this.d), 0, 1), null, !0) : (this.d ? this.e() : this.u.push({
			r: function() {
				1 & e.d && (e.u.splice(-1, 1), e.e());
			},
			t: function() {}
		}), this.d = 3);
	}, e.prototype.e = function() {
		for (var e = 0, t = 0, n = 0, r = 0, i = this.u; r < i.length; r++) n += 46 + (m = i[r]).f.length + Zt(m.extra) + (m.o ? m.o.length : 0);
		for (var s, a, o, l, c, u = new dt(n + 22), d = 0, p = this.u; d < p.length; d++) {
			var m = p[d];
			Qt(u, e, m, m.f, m.u, -m.c - 2, t, m.o), e += 46 + m.f.length + Zt(m.extra) + (m.o ? m.o.length : 0), t += m.b;
		}
		s = u, a = e, o = this.u.length, l = n, c = t, Ht(s, a, 101010256), Ht(s, a + 8, o), Ht(s, a + 10, o), Ht(s, a + 12, l), Ht(s, a + 16, c), this.ondata(null, u, !0), this.d = 2;
	}, e.prototype.terminate = function() {
		for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
		this.d = 2;
	}, e;
}();
function tn(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function nn(e) {
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
function rn(e, t) {
	const n = function(e) {
		const t = tn(e.ggirTimestamps), n = tn(e.ggirEnmo);
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
const sn = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], an = ["under-series", "over-series"], on = ["full-resolution-v1", "min-max-gap-envelope-v1"], ln = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function cn(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function un(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? cn(t, "expected an object") : e;
}
function dn(e, t) {
	return Array.isArray(e) ? e : cn(t, "expected an array");
}
function pn(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : cn(t, "expected a finite number");
}
function mn(e, t) {
	const n = pn(e, t);
	return n <= 0 ? cn(t, "expected a positive number") : n;
}
function gn(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : cn(t, "expected a safe integer");
}
function fn(e, t) {
	const n = gn(e, t);
	return n < 0 ? cn(t, "expected a non-negative safe integer") : n;
}
function hn(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? cn(t, "expected a boolean") : { [n]: e };
}
function _n(e, t) {
	return "string" != typeof e || 0 === e.length ? cn(t, "expected a non-empty string") : e;
}
function wn(e, t) {
	return "string" == typeof e && sn.includes(e) ? e : cn(t, "expected a supported tone");
}
function vn(e, t) {
	return "string" == typeof e && an.includes(e) ? e : cn(t, "expected a supported phase");
}
function yn(e, t) {
	const n = un(e, t), r = pn(n.min, `${t}.min`), i = pn(n.max, `${t}.max`);
	return i <= r || !Number.isFinite(i - r) ? cn(t, "expected a finite ascending range") : {
		min: r,
		max: i
	};
}
function bn(e, t) {
	const n = `series[${t}]`, r = un(e, n), i = dn(r.points, `${n}.points`);
	let s = Number.NEGATIVE_INFINITY;
	const a = (e) => `${n}.points[${e}]`, o = i.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return cn(a(t), "expected an object");
		const n = e, r = n.timestamp;
		if ("number" != typeof r || !Number.isFinite(r)) return cn(`${a(t)}.timestamp`, "expected a finite number");
		if (r <= s) return cn(`${a(t)}.timestamp`, "expected strictly ascending timestamps");
		s = r;
		const i = n.value;
		return null === i || "number" == typeof i && Number.isFinite(i) ? {
			timestamp: r,
			value: i
		} : cn(`${a(t)}.value`, "expected a finite number");
	});
	return {
		tone: wn(r.tone, `${n}.tone`),
		strokeWidth: mn(r.strokeWidth, `${n}.strokeWidth`),
		valueDomain: yn(r.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function kn(e, t) {
	const n = `overlays[${t}]`, r = un(e, n), i = {
		phase: vn(r.phase, `${n}.phase`),
		order: gn(r.order, `${n}.order`),
		tone: wn(r.tone, `${n}.tone`)
	};
	if ("interval" === r.kind) {
		const e = pn(r.startTimestamp, `${n}.startTimestamp`), t = pn(r.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? cn(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...i,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === r.kind ? {
		kind: "threshold",
		...i,
		value: pn(r.value, `${n}.value`),
		...hn(r.draggable, `${n}.draggable`, "draggable"),
		...hn(r.selected, `${n}.selected`, "selected"),
		...hn(r.handle, `${n}.handle`, "handle"),
		...void 0 === r.label ? {} : { label: _n(r.label, `${n}.label`) }
	} : "instant" === r.kind ? {
		kind: "instant",
		...i,
		timestamp: pn(r.timestamp, `${n}.timestamp`)
	} : cn(`${n}.kind`, "expected interval, threshold, or instant");
}
function xn(e, t, n) {
	const r = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(r) ? r : cn("projection", "expected a finite pixel coordinate");
}
function Mn(e, t, n) {
	const r = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(r) ? r : cn("projection", "expected a finite pixel coordinate");
}
function Sn(e) {
	if (!(e < 1e9 && e > -1e9)) {
		const t = Number(e.toFixed(2));
		return Object.is(t, -0) ? "0" : String(t);
	}
	const t = e.toFixed(2);
	let n = t.length;
	for (; 48 === t.charCodeAt(n - 1);) n -= 1;
	46 === t.charCodeAt(n - 1) && (n -= 1);
	const r = n === t.length ? t : t.slice(0, n);
	return "-0" === r ? "0" : r;
}
function In(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Tn(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, r = t.plotArea.height, i = ln[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const s = In(xn(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), a = In(xn(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${Sn(s)}" y="0" width="${Sn(Math.max(1, a - s))}" height="${Sn(r)}" fill="${i}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const s = Mn(e.value, t.valueDomain, r), a = !0 === e.selected, o = a ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${a ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${Sn(s)}" x2="${Sn(n)}" y2="${Sn(s)}" stroke="${i}" stroke-width="${a ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const s = xn(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${Sn(s)}" y1="0" x2="${Sn(s)}" y2="${Sn(r)}" stroke="${i}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function An(e) {
	const t = function(e) {
		const t = un(e, "scene");
		if (2 !== t.version) return cn("version", "expected 2");
		const n = un(t.grid, "grid"), r = {
			strategy: (i = n.strategy, "string" == typeof i && on.includes(i) ? i : cn("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: fn(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: fn(n.renderedPointCount, "grid.renderedPointCount")
		};
		var i;
		if (r.renderedPointCount > r.sourcePointCount) return cn("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === r.strategy && r.renderedPointCount !== r.sourcePointCount) return cn("grid", "full-resolution strategy requires equal point counts");
		const s = un(t.size, "size"), a = {
			width: mn(s.width, "size.width"),
			height: mn(s.height, "size.height")
		}, o = un(t.plotArea, "plotArea"), l = {
			left: pn(o.left, "plotArea.left"),
			top: pn(o.top, "plotArea.top"),
			width: mn(o.width, "plotArea.width"),
			height: mn(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > a.width || l.top + l.height > a.height) return cn("plotArea", "expected bounds contained by size");
		const c = yn(t.viewport, "viewport"), u = yn(t.valueDomain, "valueDomain"), d = dn(t.series, "series").map(bn);
		if (0 === d.length && 0 !== r.renderedPointCount) return cn("grid.renderedPointCount", "expected zero when series is empty");
		const p = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let h = 0; h < d.length; h++) {
			const e = d[h]?.points ?? [];
			if (e.length !== r.renderedPointCount) return cn(`series[${h}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== p[t]) return cn(`series[${h}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const m = dn(t.overlays, "overlays").map(kn), g = null === t.cursorTimestamp ? null : pn(t.cursorTimestamp, "cursorTimestamp");
		let f = null;
		if (null !== t.selection) {
			const e = un(t.selection, "selection"), n = pn(e.startTimestamp, "selection.startTimestamp"), r = pn(e.endTimestamp, "selection.endTimestamp");
			if (r <= n) return cn("selection", "expected a half-open ascending interval");
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
	}(e), n = Sn(t.size.width), r = Sn(t.size.height), i = Sn(t.plotArea.width), s = Sn(t.plotArea.height), a = Tn(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
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
			const t = xn(o.timestamp, n.viewport, s);
			let l = a.get(o.value);
			void 0 === l && (l = Sn(Mn(o.value, e.valueDomain, n.plotArea.height)), a.set(o.value, l)), r += `${i ? "L" : "M"}${Sn(t)} ${l}`, i = !0;
		}
		return 0 === r.length ? "" : `<path data-series-index="${t}" d="${r}" fill="none" stroke="${ln[e.tone]}" stroke-width="${Sn(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = Tn(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${r}" viewBox="0 0 ${n} ${r}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${r}" fill="#ffffff"/><svg x="${Sn(t.plotArea.left)}" y="${Sn(t.plotArea.top)}" width="${i}" height="${s}" viewBox="0 0 ${i} ${s}" overflow="hidden"><rect x="0" y="0" width="${i}" height="${s}" fill="#ffffff"/>${a}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = In(xn(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), r = In(xn(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${Sn(n)}" y="0" width="${Sn(Math.max(1, r - n))}" height="${Sn(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = xn(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${Sn(n)}" y1="0" x2="${Sn(n)}" y2="${Sn(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${Sn(t.plotArea.left)}" y="${Sn(t.plotArea.top)}" width="${i}" height="${s}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
async function Rn(e, t, n, r, i = 60, s, a) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == r || n >= r) return null;
	const o = new Uint8Array(e.length);
	for (let c = 0; c < e.length; c++) o[c] = 1 === e[c] ? 1 : 0;
	const l = await En(o, s && s.length === e.length ? s : new Float64Array(e.length), t, n, r, i, a);
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
async function En(e, t, n, r, i, s = 60, a) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == r || null == i || r >= i) return null;
	const o = await async function(e, t, n, r) {
		const i = await q(r).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === i.length ? {
			startIdx: i[0],
			endIdx: i[1]
		} : null;
	}(n, r, i, a);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, c = o.endIdx + 1, u = e instanceof Uint8Array ? e.slice(l, c) : new Uint8Array(e.slice(l, c)), d = t instanceof Float64Array ? t.slice(l, c) : Float64Array.from(t.slice(l, c)), p = await q(a).computeSleepMetrics(u, d, s), m = n[l] ?? 0, g = n[c - 1] ?? m, f = null != p.firstSleepEpochIdx ? n[l + p.firstSleepEpochIdx] ?? m : m, h = null != p.lastSleepEpochIdx ? n[l + p.lastSleepEpochIdx] ?? g : g;
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
function Cn(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const r = ge(e), i = Array.from(r.timestamps);
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
	const l = ie(e, t);
	return {
		timestamps: i,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: a,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
const Nn = /* @__PURE__ */ new Map();
async function $n(e, t, n = !1) {
	let r = Nn.get(e);
	const i = void 0 !== r;
	r || (r = q(t).resolveTimezone(e), Nn.set(e, r));
	try {
		return await r;
	} catch (Ot) {
		return Nn.get(e) === r && Nn.delete(e), t?.throwIfAborted(), i && !n ? $n(e, t, !0) : void console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, Ot);
	}
}
function On(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : at();
}
async function jn(e) {
	try {
		return On((await ce(e))?.extraSettings);
	} catch (Ot) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", Ot), at();
	}
}
function Bn(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const Dn = {
	zone: null,
	reason: null
};
async function Pn(e, t, n) {
	const r = e.ggirTimezone?.trim();
	let i = null;
	if (r) {
		const e = await $n(r, n);
		if (!e) return Dn;
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
	if (null === i) return $e(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : Dn;
	const s = await $n(t, n);
	if (void 0 === s) return Dn;
	if ("iana" !== s?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const a = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== a && (await ot(s.zone, a, q(n))).includes(i) ? {
		zone: s.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${Bn(i)} is not a ${s.zone} offset`
	};
}
function Ln(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [r, i] of e.entries()) t[r + 1] = t[r] + i.length;
	const n = new Float64Array(t[e.length]);
	for (const [r, i] of e.entries()) n.set(i, t[r]);
	return [n, t];
}
const Fn = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), Wn = [
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
var zn = Wn.map(() => Fn);
Object.fromEntries(Wn.map(([e], t) => [e, zn[t]]));
const Gn = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values(A).filter((e) => ![
		A.choi_2012,
		A.choi_2011,
		A.van_hees_2023,
		A.detach_nonwear
	].some((t) => t === e))
];
async function Vn(e, t, n, r) {
	const i = void 0 === t ? n?.window[e] : 48 === t ? n?.view48[e] : void 0;
	if (i) return {
		start: i[0],
		end: i[1]
	};
	const s = await (r ?? M()).analysisWindowBounds(e, t);
	return s ? {
		start: s[0],
		end: s[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function Un(e, t, n) {
	const r = e instanceof Float64Array ? e : Float64Array.from(e), [i, s] = await (n ?? M()).analysisWindowSlice(r, t);
	return {
		startIndex: i,
		endIndex: s
	};
}
async function Hn(e, t = M()) {
	const n = [...new Set(e)], r = await t.analysisDatesOf(Float64Array.from(n)), i = new Map(n.map((e, t) => [e, r[t] ?? ""]));
	return (e) => i.get(e) ?? "";
}
Object.fromEntries(Object.values(A).map((e) => [e, e === A.ggir_saved ? Ee : nt(e)]));
var qn = t({
	nightPeriodMetrics: () => Yn,
	spanningSeries: () => Jn,
	storeNightPeriodMetrics: () => Zn
});
function Kn(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [r, i] of Object.entries(rt(e, e.nonwearChoiAxis ?? tt()))) i && (n[t[r] ?? r] = new Uint8Array(i));
	return n;
}
async function Jn(e, t, n, r = {}) {
	const { signal: i, includeNonwearMasks: s = !1 } = r, a = e.get(t), o = Cn(a, n), l = s && a ? Kn(a) : {}, c = e.get(r.nextDate ?? await se(t, void 0, q(i))), u = o.timestamps[o.timestamps.length - 1], d = c ? Cn(c, n) : null, p = d?.timestamps[0], m = void 0 !== c && null !== d && void 0 !== u && void 0 !== p && p > u, g = o.scoresStale ?? d?.scoresStale ?? null;
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
	const v = s ? Kn(c) : {}, y = {};
	for (const b of Gn) {
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
async function Yn(e, t, n, r) {
	const { date: i, file: s, activityMap: a, verdict: o } = t, l = t.spanning ?? await Jn(a, i, o, { signal: r });
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
	for (const m of e.sleepMarkers) p.push(d && u.length > 0 && m.onsetTimestamp && m.offsetTimestamp ? await En(d, l.activity ?? new Float64Array(d.length), l.timestamps, m.onsetTimestamp, m.offsetTimestamp, s.epochLengthSeconds || 60, r) : null);
	if (void 0 !== e.id) try {
		await le(n, [n.markers], () => Te(e.id, {
			inputs: c,
			metrics: p
		}, n), r);
	} catch {
		r?.throwIfAborted();
	}
	return p;
}
async function Zn(e, t, n, r) {
	const i = await n.files.get(e.fileId);
	if (!i) return;
	const s = /* @__PURE__ */ new Map();
	for (const a of [e.date, await se(e.date, void 0, q(r))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, a]).first();
		t && s.set(a, t);
	}
	await Yn(e, {
		date: e.date,
		file: i,
		activityMap: s,
		verdict: t
	}, n, r);
}
const Qn = "local-export-streams";
var Xn = class extends Error {
	name = "ExportSnapshotTooLargeError";
	reason = "snapshot_too_large";
}, er = class e extends Error {
	file;
	step;
	reason;
	constructor(e, t, n, r = tr(n)) {
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
function tr(e) {
	return e instanceof er || e instanceof Xn ? e.reason : e instanceof Error ? e.name : typeof e;
}
const nr = 65536, rr = "manifest.json", ir = "Checking the export inputs", sr = "Reading recordings", ar = "Writing ZIP";
function or(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function lr(e) {
	return String(e).padStart(2, "0");
}
function cr(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const ur = [
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
new Set(ur.slice(16).map(([e]) => e));
var dr = class extends Error {};
const pr = "edit_recompute_requires_ms2_ms3", mr = /* @__PURE__ */ new Set([
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
]), gr = oe.invalid_night_row.markerTypeCell, fr = new Set(ur.map(([, e]) => e)), hr = /* @__PURE__ */ new Set([
	ne.ggir_sleepparam.header,
	ne.ggir_guider_onset.header,
	ne.ggir_guider_wakeup.header,
	ne.ggir_guider_spt_duration.header,
	ne.ggir_error_onset.header,
	ne.ggir_error_wake.header,
	ne.ggir_error_dur.header,
	ne.ggir_fraction_night_invalid.header,
	ne.ggir_duration_sib_wakinghours.header,
	ne.ggir_number_sib_sleepperiod.header,
	ne.ggir_number_sib_wakinghours.header,
	ne.ggir_duration_sib_wakinghours_atleast15min.header,
	ne.ggir_guider_onset_ts.header,
	ne.ggir_guider_wakeup_ts.header,
	ne.ggir_page.header,
	ne.ggir_daysleeper.header,
	ne.ggir_sleeplog_id.header,
	ne.ggir_guider.header,
	ne.ggir_longitudinal_axis.header
]), _r = /* @__PURE__ */ new Set([
	ne.ggir_sleep_duration_in_spt.header,
	ne.ggir_waso.header,
	ne.ggir_number_of_awakenings.header,
	ne.ggir_sleeplatency.header,
	ne.ggir_sleepefficiency.header
]), wr = /* @__PURE__ */ new Set([
	..._r,
	ne.ggir_nonwear_perc_spt.header,
	ne.ggir_sleeponset.header,
	ne.ggir_wakeup.header,
	ne.ggir_spt_duration.header,
	ne.ggir_guider_onset.header,
	ne.ggir_guider_wakeup.header,
	ne.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	ne.ggir_sleeponset_ts.header,
	ne.ggir_wakeup_ts.header,
	ne.ggir_guider_onset_ts.header,
	ne.ggir_guider_wakeup_ts.header,
	ne.ggir_daysleeper.header,
	ne.ggir_cleaningcode.header,
	ne.ggir_guider.header,
	ne.ggir_error_onset.header,
	ne.ggir_error_wake.header,
	ne.ggir_error_dur.header,
	ne.ggir_fraction_night_invalid.header,
	ne.ggir_duration_sib_wakinghours.header,
	ne.ggir_number_sib_sleepperiod.header,
	ne.ggir_number_sib_wakinghours.header,
	ne.ggir_duration_sib_wakinghours_atleast15min.header
]), vr = /* @__PURE__ */ new Set([
	ne.ggir_id.header,
	ne.ggir_filename.header,
	ne.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	ne.ggir_sleep_regularity_index1.header,
	ne.ggir_sri_fraction_valid.header,
	ne.ggir_calendar_date.header,
	ne.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	ne.ggir_cleaningcode.header,
	ne.ggir_guider.header,
	ne.ggir_sleeplog_used.header,
	ne.ggir_acc_available.header,
	ne.ggir_daysleeper.header
]), yr = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), br = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), kr = new Set(Object.values(ne).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), xr = new Set(Object.values(ne).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), Mr = new Set(Object.values(ee).map((e) => e.reviewSource)), Sr = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim()), Ir = Sr, Tr = "refusal_detail_missing_reason";
function Ar(e, t) {
	const n = e(ne["start" === t ? "interval_start_date" : "interval_end_date"].header), r = e(ne["start" === t ? "interval_start_time" : "interval_end_time"].header);
	return n && r ? `${n}T${r}` : "";
}
function Rr(e, t, n, r) {
	const i = (e) => n.get(e) ?? "", s = i(t + "_missing_reason");
	if (s && !mr.has(s)) return null;
	const a = s || null;
	if (e.startsWith("part2_")) return "source_reported_missing";
	if (e.includes("_ggir_review")) {
		if (a) return a;
		const e = i("review_source");
		return Mr.has(e) ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const o = i(ne.marker_type.header) === gr || "actiware_intervals_export.csv" === e && i(ne.interval_kind.header) === gr;
	if (!function(e, t) {
		return "actiware_intervals_export.csv" === e ? fr.has(t) : "actiware_sleep_wake_export.csv" === e ? t === ne.actiware_sleep_wake.header || t === ne.actiware_wake_threshold.header : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			ne.ggir_id.header,
			ne.ggir_filename.header,
			ne.ggir_calendar_date.header,
			ne.ggir_weekday.header,
			ne.ggir_sleeplog_id.header,
			ne.ggir_guider_corrected.header,
			ne.ggir_cleaningcode.header
		].includes(t) : kr.has(t);
	}(e, t)) return a || (o ? "invalid_night" : "Manual Nonwear" === i(ne.marker_type.header) ? "manual_nonwear_period" : null);
	if ("actiware_intervals_export.csv" === e && fr.has(t)) {
		if (o) return "invalid_night";
		const e = i(ne.interval_kind.header).toLowerCase(), n = Ar(i, "start");
		if ("daily" === e && n && n === Ar(i, "end")) return "zero_interval_rows";
		if ([
			ne.actiware_onset_latency.header,
			ne.actiware_efficiency.header,
			ne.actiware_waso.header
		].includes(t)) {
			if ("sleep" !== e) return "not_applicable_to_row";
			if (Ir(i(ne.actiware_duration.header))) return null;
			const t = Ar(i, "start"), n = Ar(i, "end");
			if (!t || !n) return null;
			let s = !1;
			for (const e of r) if (e.get(ne.filename.header) === i(ne.filename.header) && "rest" === e.get(ne.interval_kind.header) && Ar((t) => e.get(t) ?? "", "start") <= t && n <= Ar((t) => e.get(t) ?? "", "end")) {
				s = !0;
				break;
			}
			return s ? null : "no_eligible_rest";
		}
		if (Ir(i(ne.actiware_duration.header))) return null;
		if (t === ne.actiware_off_wrist.header || t === ne.actiware_off_wrist_percent.header) return t === ne.actiware_off_wrist_percent.header && "0.00" === i(ne.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === a ? a : null;
		if (t === ne.actiware_avg_ac_per_min.header) return 100 === Number(i(ne.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			ne.actiware_invalid_sw_percent.header,
			ne.actiware_wake_percent.header,
			ne.actiware_sleep_percent.header
		].includes(t)) {
			if ("0.00" === i(ne.actiware_duration.header)) return "zero_interval_rows";
			const e = !Ir(i(ne.actiware_wake_time.header)) && !Ir(i(ne.actiware_sleep_time.header)) && 0 === Number(i(ne.actiware_wake_time.header)) && 0 === Number(i(ne.actiware_sleep_time.header));
			return t === ne.actiware_invalid_sw_percent.header || 100 !== Number(i(ne.actiware_invalid_sw_percent.header)) && !e ? null : "no_scored_epochs";
		}
		const s = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(t);
		if (s) {
			const e = s[1];
			return "0.00" === i(ne.actiware_duration.header) ? "zero_interval_rows" : Ir(i("%Invalid " + e)) ? "source_reported_missing" === a ? a : null : t.startsWith("TALT ") && !Ir(i("Exposure " + e)) ? "threshold_unconfigured" : 100 === Number(i("%Invalid " + e)) ? "no_valid_epochs" : null;
		}
		return null;
	}
	if ("actiware_sleep_wake_export.csv" === e) {
		if (t === ne.actiware_sleep_wake.header) return "no_valid_epochs" === a ? a : null;
		if (t === ne.actiware_wake_threshold.header) return "not_computed_for_export" === a ? a : null;
	}
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return hr.has(t) ? "not_computed_for_export" === a ? a : null : _r.has(t) ? "no_scored_epochs" === a || "not_applicable_to_row" === a || "scores_from_another_config" === a ? a : null : a;
	if ("sleep_export_wide.csv" === e) return a;
	if ("summary_export.csv" === e && t === ne.sleep_regularity_index.header) return a && [
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
		return r && s?.cutpoint && !Number.isFinite(s.cutpoint[r]) || "MIMS Unit Total" === t && "mims" !== n ? "not_applicable_to_row" : "ggir_enmo" === n ? yr.has(t) ? "source_reported_missing" === a ? a : null : br.has(t) && "not_computed_for_export" === a ? a : null : "mims" === n && [
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
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === i(ne.marker_type.header) ? "manual_nonwear_period" : null : "true" === i(ne.is_invalid_night.header).toLowerCase() && i(ne.marker_type.header) === gr ? "invalid_night" : t === ne.total_nap_minutes.header && "0" === i(ne.nap_count.header) ? "not_applicable_to_row" : [
		ne.l5_hour.header,
		ne.m10_hour.header,
		ne.sleep_midpoint_hour.header,
		ne.valid_wear_minutes.header
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
const Er = "missing_reasons.csv";
function Cr(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(a).join(","))].map((e) => e + "\n").join("");
}
function Nr(e, t) {
	const n = [
		ne.filename.header,
		ne.ggir_filename.header,
		"ggir_filename",
		ne.participant_id.header,
		ne.ggir_id.header,
		ne.study_date.header,
		"Analysis Date",
		ne.ggir_calendar_date.header,
		"ggir_calendar_date",
		ne.interval_kind.header,
		ne.marker_type.header,
		ne.interval_start_date.header,
		ne.interval_start_time.header,
		ne.epoch_local.header,
		"Method"
	].flatMap((t) => {
		const n = e.get(t);
		return n ? [t + "=" + n] : [];
	});
	return n.length ? n.join("|") : "row=" + String(t);
}
function $r(e, t) {
	let n = !1, r = 0;
	for (let i = 0; i < e.length; i += 1) if ("\"" === e[i]) n && "\"" === e[i + 1] ? i += 1 : n = !n;
	else if ("," === e[i] && !n && ++r === t) return e.slice(0, i);
	return e;
}
function* Or(e, t, r = !0, i) {
	const { headerlessColumns: s, fullRowCsv: a, rowOffset: o = 0, contextRows: l } = i ?? {}, c = s?.length ? s.join(",") + "\n" + e : e, u = n(c);
	if (u.unterminatedQuotedField) throw new Error(t + ": unterminated CSV cell");
	const [d, ...p] = u.records;
	if (!d) return {
		csv: e,
		withReason: 0,
		withoutReason: 0
	};
	const m = w(d.text), g = m.findIndex((e) => e.endsWith("_missing_reason"));
	if (g >= 0 && m.slice(g).some((e) => !e.endsWith("_missing_reason"))) throw new Error(t + ": internal reason fields must trail data fields");
	const f = m.map((e, t) => ({
		header: e,
		index: t
	})).filter(({ header: e }) => "" !== e && !e.endsWith("_missing_reason")), h = p.map((e) => w(e.text)), _ = h.map((e) => new Map(m.map((t, n) => [t, e[n] ?? ""]))), v = a ? n(a).records : [], y = v[0] ? w(v[0].text) : [], b = a ? v.slice(1).map((e) => w(e.text)) : [];
	if (a && f.length > 0 && b.length !== h.length) throw new Error(t + ": complete-row evidence count differs");
	const k = a ? b.map((e) => new Map(y.map((t, n) => [t, e[n] ?? ""]))) : _;
	let x = 0, M = 0;
	for (let n = 0; n < h.length; n += 1) {
		const e = h[n], r = _[n];
		for (const { header: s, index: a } of f) {
			if ("edit_recompute_requires_ms2_ms3" === k[n].get(s + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
				yield {
					file: t,
					row: o + n + 1,
					key: Nr(r, o + n + 1),
					column: s,
					reason: pr
				}, x += 1;
				continue;
			}
			const i = e[a] ?? "";
			if (!Ir(i) || "" !== i.trim() && xr.has(s)) continue;
			const c = Rr(t, s, k[n], l?.() ?? k);
			c ? (x += 1, yield {
				file: t,
				row: o + n + 1,
				key: Nr(r, o + n + 1),
				column: s,
				reason: c
			}) : (M += 1, console.warn("WARNING: unreasoned missing export cell"));
		}
		const i = r.get(Tr);
		i && (yield {
			file: t,
			row: o + n + 1,
			key: Nr(r, o + n + 1),
			column: i,
			reason: "not_computed_for_export"
		});
	}
	if (r && M > 0) throw new dr(t + ": " + String(M) + " unreasoned missing metric cells");
	return g < 0 ? {
		csv: e,
		withReason: x,
		withoutReason: M
	} : {
		csv: [$r(d.text, g), ...p.map((e) => $r(e.text, g))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: x,
		withoutReason: M
	};
}
const jr = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], Br = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : a(String(e)), Dr = (ae.part4_night_review, ae.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function Pr(e, t, n = "") {
	return ae[e].replace("{report}", n.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${ee[t].filenameSuffix}.csv`);
}
const Lr = Object.keys(ee).map((e) => Pr("person_summary_review", e)), Fr = (e) => Lr.some((t) => e.endsWith(t));
function Wr(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return l(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? l(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function zr(e, t) {
	const n = new Map(Je(e).map((e) => [e.night, e.nightDate]));
	return (e, r, i = !0) => {
		const s = e.columns.indexOf("nights" === t ? ne.ggir_night.header : "night_number"), a = Number(e.values[s]?.[r]), o = n.get(a);
		if (i && o) return o;
		const l = e.values[e.columns.indexOf(ne.ggir_calendar_date.header)]?.[r];
		return Wr(l);
	};
}
async function Gr(e, t, n, r) {
	const i = "nights" === t ? ne.ggir_night.header : "window_number", s = q(n), o = await Promise.all(e.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await Ke(e.imported, e.edits, t.night, n)])))), l = (await Promise.all(e.map(async (e, n) => {
		const r = e.current ?? e.imported, i = (e) => "nights" === t ? e.nights : e.days, a = "nights" === t ? r.nightRecomputed : r.dayRecomputed, l = "nights" === t ? e.imported.nightChecks : e.imported.dayChecks, c = o[n].filter((e) => null != e[1]), u = zr(e.imported, t), d = new Set(e.edits.map((e) => e.night)), p = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, m = /* @__PURE__ */ new Set();
		if ("days" === t && p) {
			const t = await Promise.all(Je(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), r = t.nightDate, i = n.onset < "12:00:00" ? await se(r, void 0, s) : r, a = n.wake <= n.onset ? await se(i, void 0, s) : i;
				return [Math.min(t.onsetMs, Date.parse(`${i}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${a}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: r.days.rows }, async (e, n) => {
				const i = Number(r.days.values[r.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(i)) return void m.add(n);
				const a = u(r.days, n, !1), o = r.days.values[r.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof o ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(o) : null;
				if (!a || !l) return;
				const c = Date.parse(`${a}T${l[1]}Z`), p = l[2] < l[1] ? await se(a, void 0, s) : a, g = Date.parse(`${p}T${l[2]}Z`);
				t.some(([e, t]) => c <= t && g >= e) && m.add(n);
			}));
		}
		return {
			source: ee[Dr(e)].reviewSource,
			editedDayRows: m,
			editRecomputeUnavailable: p,
			editedNights: d,
			scoredDates: e.scoredDates,
			invalidDates: e.invalidDates,
			dateOf: u,
			table: i(r),
			ggir: i(e.imported),
			savedNights: e.imported.nights,
			recomputed: a,
			provenance: (e) => "nights" === t ? c.find(([t]) => t === e)?.[1] ?? "" : c.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(l.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === l.length) return null;
	const c = r ? r.filter((e) => !e.endsWith("_missing_reason") && !jr.includes(e)) : [];
	for (const a of r ? [] : l) for (const e of a.table.columns) e.endsWith("_missing_reason") || c.includes(e) || c.push(e);
	const u = new Set("nights" === t ? X.ggir_review_night_extension.map((e) => ne[e].header) : []), d = r ? c.filter((e) => r.includes(e + "_missing_reason")) : c.filter((e) => u.has(e) || l.some((e) => e.editRecomputeUnavailable || e.source === ee.corrected.reviewSource)), p = [[
		...c.map(a),
		...jr,
		...d.map((e) => a(e + "_missing_reason")),
		...jr.map((e) => e + "_missing_reason")
	].join(",")], m = (e, t) => {
		const n = e.columns.indexOf(i);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: g, ggir: f, recomputed: h, provenance: _, checks: w, scoredDates: v, invalidDates: y, dateOf: b, editRecomputeUnavailable: k, editedNights: x, editedDayRows: M, savedNights: S, source: I } of l) {
		const e = S.columns.filter((e) => !wr.has(e)), n = e.filter((e) => {
			const t = S.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return S.values[t].some((e, t) => {
				const r = Number(S.values[S.columns.indexOf(ne.ggir_night.header)]?.[t]), i = n.has(r) && !Object.is(n.get(r), e);
				return n.set(r, e), i;
			});
		}), r = /* @__PURE__ */ new Set(), i = (e) => Array.from({ length: f.rows }, (e, t) => t).find((t) => !r.has(t) && m(f, t) === m(g, e) && n.every((n) => Object.is(f.values[f.columns.indexOf(n)]?.[t] ?? null, g.values[g.columns.indexOf(n)]?.[e] ?? null))), s = new Set(c.filter((n) => "nights" === t ? wr.has(n) : !vr.has(n) && !e.includes(n))), o = (n, r, i, o) => {
			const l = w.get(m(n, r));
			return [
				...c.map((s) => {
					if ("invalid" === i && ("nights" === t ? wr.has(s) : /sleep|spt|waso|wake|onset|guider/i.test(s) && !e.includes(s))) return "";
					const a = n.columns.indexOf(s);
					return a < 0 ? "" : Br(n.values[a]?.[r]);
				}),
				i,
				l?.status ?? "",
				a((l?.reasons ?? []).join(";")),
				a((l?.diffs ?? []).map((e) => e.column).join(";")),
				a(o),
				...d.map((e) => "invalid" !== i || u.has(e) && e !== ne.ggir_nonwear_perc_spt.header ? k && i === I && s.has(e) && ("days" === t ? M.has(r) : x.has(m(n, r))) ? pr : u.has(e) ? null != lt(n, e, r) ? "" : Br(ut(n, e + "_missing_reason", r) ?? "source_reported_missing") : i === I ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
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
			const n = i(t);
			if (null != n && r.add(n), e && y?.has(e)) {
				null != n && p.push(o(f, n, I, "")), p.push(o(g, t, "invalid", ""));
				continue;
			}
			if (!h[t]) {
				p.push(o(g, t, I, ""));
				continue;
			}
			const s = m(g, t);
			null != n && p.push(o(f, n, I, "")), p.push(o(g, t, "recomputed", _(s)));
		}
		for (let t = 0; t < f.rows; t += 1) {
			if (r.has(t)) continue;
			const e = b(f, t);
			(!v || e && v.has(e)) && (p.push(o(f, t, I, "")), e && y?.has(e) && p.push(o(f, t, "invalid", "")));
		}
	}
	return p.length > 1 ? `${p.join("\n")}\n` : null;
}
function Vr(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const r of e) for (const [e, t] of Object.entries(r.part2Reports ?? {})) {
		const i = Pr("part2_report", Dr(r), e);
		n.set(i, [...n.get(i) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const r = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], i = [r.map(a).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) i.push(r.map((n) => Br(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, i.join("\n") + "\n"];
	}));
}
function Ur(e, t) {
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
const Hr = (e, t) => Je(e).filter((e) => t?.has(e.nightDate));
async function qr(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: pr,
		detail: ""
	};
	const r = e.current ?? e.imported;
	if (void 0 === r.tailExpansion) return {
		reason: "not_computed_for_export",
		detail: "the saved GGIR review predates the core's tail expansion flag; import the folder again"
	};
	const i = q(n);
	try {
		const { ggirVersion: n } = await i.ggirConfigValues(e.configCsv), { profile: s, reports: a } = await i.ggirPersonSummaries({
			ggir_version: n ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: r.nights,
			days: r.days,
			tail_expansion: r.tailExpansion,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(ut(r.nights, ne.ggir_id.header, 0) ?? ""),
			invalid_nights: Hr(e.imported, t).map((e) => e.night),
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
async function Kr(e, t, n) {
	const r = /* @__PURE__ */ new Map(), i = await Promise.all(e.map(async (e) => {
		const n = Hr(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (n) => {
			const r = await Ke(e.imported, e.edits, n.night, t);
			return null == r ? [] : [`night ${String(n.night)} ${r}`];
		}))).flat(), ...n].join("; ");
	}));
	for (const [a, o] of e.entries()) {
		const e = Dr(o), t = i[a], n = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [i, s] of Object.entries(o.personReports ?? {})) {
			if (0 === s.rows) continue;
			const a = Pr("person_summary_review", e, i), o = "reason" in n ? n : n.reports[i] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${i}`
			};
			r.set(a, [...r.get(a) ?? [], {
				table: s,
				source: ee[e].reviewSource,
				edit: t,
				recomputed: o
			}]);
		}
	}
	const s = /* @__PURE__ */ new Set([ne.ggir_id.header, ne.ggir_filename.header]);
	return Object.fromEntries([...r].map(([e, t]) => {
		const r = n?.get(e), i = [...new Set(t.flatMap(({ table: e }) => e.columns))], o = (r ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : Ur(e, t.columns), i)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !jr.includes(e)), l = jr.map((e) => e + "_missing_reason"), c = r?.filter((e) => e.endsWith("_missing_reason") && !l.includes(e)) ?? ["refusal_detail_missing_reason", ...o.map((e) => e + "_missing_reason")], u = [[
			...o,
			...jr,
			...c,
			...l
		].map(a).join(",")], d = (e, t) => [
			e,
			"",
			"",
			"",
			a(t)
		], p = (e) => [
			"",
			"not_computed_for_export",
			"not_applicable_to_row",
			"not_applicable_to_row",
			e ? "" : "not_applicable_to_row"
		], m = (e, t) => (n) => Br(e.values[e.columns.indexOf(n)]?.[t]), g = (e) => c.map((t) => e.get(t) ?? ""), f = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
		for (const { table: n, source: h, edit: _, recomputed: w } of t) for (let e = 0; e < n.rows; e++) {
			const t = o.map(m(n, e)), r = new Map(o.flatMap((e) => f.get(n).has(e) ? [] : [[e + "_missing_reason", "not_applicable_to_row"]]));
			if (u.push([
				...t,
				...d(h, ""),
				...g(r),
				...p("")
			].join(",")), !_) continue;
			const i = "reason" in w ? w : 0 === w.rows ? {
				reason: "no_retained_nights",
				detail: ""
			} : null, l = "reason" in w ? null : m(w, 0), c = o.map((e, n) => s.has(e) ? t[n] : l?.(e) ?? ""), v = new Map(o.flatMap((e, t) => Sr(c[t]) ? [[e + "_missing_reason", i?.reason ?? "not_applicable_to_row"]] : []));
			i?.detail && v.set(Tr, a(`ggirPersonSummaries: ${i.detail}`)), u.push([
				...c,
				...d("recomputed", _),
				...g(v),
				...p(_)
			].join(","));
		}
		return [e, u.join("\n") + "\n"];
	}));
}
const Jr = X.ggir_part4_nightsummary_csv, Yr = Jr.map((e) => ne[e].header), Zr = [
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
], Qr = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function Xr(e, t) {
	const n = ne[e], r = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof r ? a(r) : or(r, { integral: n.ggirIntegral ?? !1 });
}
function ei(e, t = "legacy-recording", n, r) {
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
	}) : q(r).validStateFraction(a).then(async (e) => {
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
			})), [i, s] = Ln(n.map((e) => e.timestamps)), [a, o] = Ln(n.map((e) => e.states));
			return q(t).sleepRegularityIndex(S([
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
async function ti(e, t, n, r = {}) {
	const { signal: i } = r, s = e.participantId ?? e.filename, a = de(n.values(), r.algorithm), o = [];
	for (const [d, v] of n) {
		if (!gi(d, r.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = Cn(v, a);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await ei(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, i), { sri: c, fractionValid: u } = l, p = "stale" === a.status ? "scores_from_another_config" : null, m = p ?? l.sriMissingReason, g = p ?? l.fractionValidMissingReason, f = [];
	for (const v of [...t.keys()].sort()) {
		const e = t.get(v);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === d.MAIN_SLEEP && null != t.onsetTimestamp && f.push({
			date: v,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const h = [[
		...Yr,
		...Zr.map((e) => `${ne[e].header}_missing_reason`),
		...Qr.map((e) => `${ne[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: d, onsetTs: v, wakeupTs: y } of f) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == y ? "not_applicable_to_row" : p ?? "no_scored_epochs"
		};
		if (null != y) {
			const { timestamps: r, algorithmResults: s } = await Jn(n, d, a, { signal: i });
			if (s && r.length > 0) {
				t.missingReason = null;
				const n = await Rn(s, r, v, y, e.epochLengthSeconds || 60, null, i);
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
	const w = await q(i).ggirManualNightClocks(f.map((e) => e.date), Float64Array.from(f, (e) => e.onsetTs), Float64Array.from(f, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let d = 0; d < f.length; d++) {
		const { onsetTs: t, wakeupTs: n } = f[d], r = w[d], { tstH: i, nAwak: a, latency: o, efficiency: l } = _[d], p = {
			ggir_id: s,
			ggir_night: d + 1,
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
			ggir_sri_fraction_valid: u,
			ggir_longitudinal_axis: null,
			ggir_guider_corrected: !1
		};
		h.push([
			...Jr.map((e) => Xr(e, p[e])),
			...Zr.map((e) => {
				const t = Jr.indexOf(e);
				return t >= 0 && null == p[Jr[t]] ? "not_computed_for_export" : "";
			}),
			...Qr.map((e) => {
				const t = Jr.indexOf(e);
				return t >= 0 && null == p[Jr[t]] ? _[d].missingReason ?? "" : "";
			}),
			m ?? "",
			g ?? ""
		].join(","));
	}
	return h.join("\n") + "\n";
}
function ni(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const ri = "actogram_report.html";
function ii(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function si(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function ai(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: r } = ii(n), i = [e, r].filter(Boolean);
		t.set(n, 0 === i.length ? "part4_nightsummary.csv" : `part4_nightsummary_${i.join("_")}.csv`);
	}
	return t;
}
function oi(e) {
	const { algoKey: t, ruleKey: n } = ii(e), r = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
	return t || n ? n ? `${r(t)} / ${r(n)}` : r(t) : "Legacy / Unscoped";
}
function li(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : Se(e);
}
function ci(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function ui(e, t) {
	const n = [], r = [], i = (e) => {
		for (const t of pi(e)) n.push(t), r.push(t.byteLength);
	};
	i(`<section class="pid-sec${0 === e ? " initial" : ""}" id="sec-${e}">`), i(`  <h2 class="pid-lbl">${ni(t.pid)}</h2>`);
	for (const [s, a] of t.charts.entries()) i(`  <div class="algo-block" data-algorithm-key="${ni(a.algoKey)}">`), i(`    <div class="algo-lbl">${ni(oi(a.algoKey))}</div>`), a.stale && i(`    <div class="algo-stale" role="status">${ni(a.stale)}</div>`), i(`    <div class="cwrap" id="c${e}_${s}">`), n.push(a.plot), r.push(...a.plotLengths), i(`      <button type="button" class="svg-btn" data-download-name="${ni(a.svgFilename)}">Download SVG</button>`), i(a.meta), i("    </div>"), i("  </div>");
	return i("</section>"), {
		blob: new Blob(n),
		lengths: r
	};
}
const di = ["<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>", "</body>\n</html>"];
function* pi(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let r = Math.min(e.length, n + nr / 4);
		r < e.length && /[\uD800-\uDBFF]/u.test(e[r - 1]) && (r -= 1), yield t.encode(e.slice(n, r)), n = r;
	}
	yield t.encode("\n");
}
function mi(e) {
	return new TextEncoder().encode(e);
}
function gi(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function fi({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: r, layouts: i, only: s }) {
	const a = {}, o = (e) => void 0 === s || s === e;
	for (const [l, c] of r ?? ai([...e.keys()])) {
		const t = e.get(l);
		t?.length && o(c) && (a[c] = mi(`${t.join("\n")}\n`));
	}
	for (const l of Object.keys(ee)) {
		const e = t.filter((e) => Dr(e) === l);
		if (0 === e.length) continue;
		const r = (t, n) => void 0 === s || e.some((e) => Object.keys(n(e) ?? {}).some((e) => Pr(t, l, e) === s));
		if (r("part2_report", (e) => e.part2Reports)) for (const [t, n] of Object.entries(Vr(e, i))) o(t) && (a[t] = mi(n));
		for (const [t, s] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
			const r = Pr(s, l), c = o(r) ? await Gr(e, t, n, i?.get(r)) : null;
			c && (a[r] = mi(c));
		}
		if (r("person_summary_review", (e) => e.personReports)) for (const [t, s] of Object.entries(await Kr(e, n, i))) o(t) && (a[t] = mi(s));
	}
	return a;
}
async function hi(e, t, r) {
	r?.throwIfAborted();
	const i = function(e, t) {
		const { signal: n } = t, { username: r, dateRange: i, snapshot: s } = e, a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const d = vo(s, lo.ggirReport, e.map((e) => e.id)), p = await Promise.all(e.map((e) => So(s, e.id, r, n)));
				for (const [r, s] of e.entries()) {
					const e = d.files.find((e) => e.id === s.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: m, sets: g, markersByAlgo: f, invalidDates: h } = p[r], _ = Ao(d, e.id), w = new Map([...f].filter(([e]) => gi(e, i))), v = /* @__PURE__ */ new Map();
					for (const [t, n] of w) for (const e of n) {
						const n = si(e);
						let r = v.get(n);
						r || (r = /* @__PURE__ */ new Map(), v.set(n, r)), r.set(t, e);
					}
					const y = /* @__PURE__ */ new Set();
					for (const [t, n] of w) for (const e of n) c(e) && y.add(t);
					if (m) for (const t of g) u.push({
						...t,
						...i ? { scoredDates: new Set(e.availableDates.filter((e) => gi(e, i))) } : {},
						invalidDates: h
					});
					const b = [...y].sort(), k = b[0], x = b[b.length - 1], M = [], S = [];
					for (const n of t.charts ? [..._.keys()].sort() : []) if (gi(n, i) && (null == k || null == x || n >= k && n <= x)) {
						const e = _.get(n), t = ge({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), r = t.timestamps, i = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < r.length; n++) M.push(r[n]), S.push(i[n]);
					}
					const I = [];
					for (const [t, r] of v) {
						const s = ii(t).algoKey, l = m ? "" : await ti(e, r, _, {
							...s ? { algorithm: s } : {},
							...i ? { dateRange: i } : {},
							signal: n
						}), c = m ? [] : l.replace(/\n$/u, "").split("\n");
						if (c.length > 0) {
							const e = a.get(t) ?? [];
							a.set(t, e), o.has(t) ? e.push(...c.slice(1)) : (e.push(...c), o.add(t));
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
						const { algoKey: p, ruleKey: g } = ii(t), f = [p, g].filter(Boolean).join("_"), h = de(_.values(), s || null);
						I.push([f, {
							p: u,
							n: d,
							..."stale" === h.status ? { stale: h.reason } : {}
						}]);
					}
					0 === v.size && I.push(["", {
						p: [],
						n: []
					}]), M.length > 0 && l.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: M,
						act: S,
						algos: I
					});
				}
			},
			entries: () => fi({
				csvLinesByAlgo: a,
				ggirReviews: u
			}, { signal: n }),
			chartPidData: l,
			csvLinesByAlgo: a,
			ggirReviews: u
		};
	}(e, {
		signal: r,
		charts: !0
	});
	await i.addFiles([t]);
	const s = [...i.chartPidData].map(([t, n]) => function(e, t, n) {
		return {
			key: e,
			pid: t.pid,
			charts: t.algos.map(([r, i]) => {
				const { algoKey: s, ruleKey: a } = ii(r), o = ci([s, a].filter(Boolean).join("_"), "unscoped"), l = `activity-${ci(e, "recording")}-${o}-${n}.svg`, c = function(e) {
					if (0 === e.timestamps.length) return cr("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return cr("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, r = 0;
					const i = e.timestamps.map((i, s) => {
						const a = e.activity[s];
						return !Number.isFinite(i) || i <= t ? cr("timestamps must be finite and strictly ascending") : (t = i, null != a && Number.isFinite(a) ? (n = Math.min(n, a), r = Math.max(r, a), {
							timestamp: i,
							value: a
						}) : {
							timestamp: i,
							value: null
						});
					}), s = i[0].timestamp, a = i[i.length - 1].timestamp, o = a > s ? a : s + 1;
					if (!Number.isFinite(o) || o <= s) return cr("single-epoch viewport must have a representable right edge");
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
				}), u = [...pi(`      <div class="plot-svg">${An(c)}</div>`)];
				return {
					algoKey: r,
					...i.stale ? { stale: i.stale } : {},
					svgFilename: l,
					plot: new Blob(u),
					plotLengths: u.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${ni(li(c.viewport.min))} → ${ni(li(c.viewport.max))} · activity domain ${or(c.valueDomain.min)}–${or(c.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), a = new Set(ai([...i.csvLinesByAlgo.keys()]).values()), o = [];
	for (const [l, c] of Object.entries(await i.entries())) a.has(l) || o.push([l, w(n(new TextDecoder().decode(c)).records[0].text)]);
	return {
		charts: s,
		csvLinesByAlgo: i.csvLinesByAlgo,
		ggirReviews: i.ggirReviews,
		headers: o
	};
}
function _i(e) {
	return "aw5" === e ? "actoglance.source.philips_actiwatch_aw5.v1" : "actoglance.source.philips_actiware_csv.v1";
}
function wi(e) {
	return Date.parse(`${e}Z`) / 1e3;
}
async function vi(e, t) {
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
async function yi(e, t, n, r = 60) {
	const i = Int8Array.from(t.scores, (e) => null == e ? -1 : 0 === e ? 1 : 0);
	return e.foldSleepWakeVotes(t.startTimestamp, t.epochSeconds, i, Float64Array.from(n), r);
}
function bi(e) {
	return {
		startTimestamp: e.startTimestamp,
		epochSeconds: e.epochSeconds,
		params: e.params,
		...e.paradigmDefaults ? { paradigmDefaults: e.paradigmDefaults } : {},
		scores: Int8Array.from(e.scores, (e) => e ?? -1).buffer
	};
}
function ki(e, t) {
	return e.filter((e) => "rest" === e.kind || "sleep" === e.kind).map((e) => ({
		kind: e.kind,
		source: e.source,
		startTimestamp: wi(e.start),
		endTimestamp: wi(e.end),
		origin: t ? "generated" : "stored",
		...e.analysis ? { analysis: e.analysis } : {}
	})).filter((e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.endTimestamp > e.startTimestamp).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function xi(e) {
	return e.map(({ start: e, end: t, ...n }) => ({
		...n,
		startTimestamp: wi(e),
		endTimestamp: wi(t)
	}));
}
function Mi(e, t) {
	return e && e.length === t && t > 0 ? e : null;
}
function Si(e) {
	const t = e.timestamps_ms.length, n = (t) => e.light_channels.find((e) => e.name === t)?.counts;
	return {
		white: Mi(e.light, t),
		red: Mi(n("red_light"), t),
		green: Mi(n("green_light"), t),
		blue: Mi(n("blue_light"), t)
	};
}
function Ii(e, t, n) {
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
function Ti(e, t) {
	const n = 6e4 * (Ai(e, t)?.gmt_offset_minutes ?? 0);
	return 0 === n ? e.series : {
		...e.series,
		timestamps_ms: e.series.timestamps_ms.map((e) => e + n)
	};
}
function Ai(e, t) {
	return (void 0 === t ? void 0 : e.downloads.find((e) => e.guid === t)) ?? e.downloads.find((e) => e.is_primary) ?? e.downloads[0];
}
function Ri(e) {
	const t = e.channels.find((t) => t.name === e.primary) ?? e.channels[0];
	if (!t) throw new Error("The device file carries no activity count channel.");
	return t.counts;
}
var Ei = class extends Error {
	name = "NativeEpochRefusal";
	category = "unsupported-epoch";
	sourceEpochSeconds;
	constructor(e) {
		super(C("unsupported-epoch")), this.sourceEpochSeconds = e;
	}
};
async function Ci(e, t, n = [], i = null) {
	if (!s(e.epoch_seconds)) throw new Ei(e.epoch_seconds);
	const a = function(e, t) {
		if (!t || t.length !== e.length) return /* @__PURE__ */ new Float64Array(0);
		const n = [];
		return t.forEach((t, r) => {
			t && n.push((e[r] ?? NaN) / 1e3);
		}), Float64Array.from(n.filter(Number.isFinite));
	}(e.timestamps_ms, e.marker), o = function(e) {
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
	}(e), l = e.timestamps_ms.length > 0 && e.off_wear.length === e.timestamps_ms.length, c = r(e.epoch_seconds) ? e : await t(e), u = c.epoch_seconds;
	if (!r(u)) throw new Ei(e.epoch_seconds);
	const d = 120 === u ? [...n, "This recording keeps its native 120-second scoring grid. A 60-second view, one-minute sleep scorers, Choi nonwear and finer algorithm variants are unavailable because the source contains only two-minute sums."] : n, p = c.activity_invalid ?? [];
	return {
		epochSeconds: u,
		timestampsMs: c.timestamps_ms,
		counts: Ri(c),
		actiwareInvalidActivityEpochs: Uint8Array.from(p.length === c.timestamps_ms.length ? p : [], (e) => e ? 1 : 0),
		actiwareStatisticsInput: i,
		sourceEpochSeconds: e.epoch_seconds,
		eventMarkerInstantsSec: a,
		offWristPeriods: o,
		hasOffWristChannel: l,
		warnings: d,
		light: Si(c),
		actiwareIntervals: [],
		actiwareSleepWake: null,
		actiwareStatistics: [],
		actiwareRecording: null,
		actiwareWakeThreshold: null,
		actiwareRestProposal: null
	};
}
function Ni(e) {
	const { proposal: t, nights: n } = e ?? {
		proposal: Ve,
		nights: []
	}, r = t.rest_autoscore === N.screens ? n : [];
	return JSON.stringify([
		t.use_saved_rest_intervals,
		t.rest_autoscore,
		r.map(({ timestamps: e, activity_counts: t, sleep_scores: n, ...r }) => r)
	]);
}
function $i(e, t, n, r = /* @__PURE__ */ new Map(), i = {}) {
	const s = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = (/* @__PURE__ */ new Date(1e3 * (o - 43200))).toISOString().slice(0, 10);
		let t = s.get(e);
		t || s.set(e, t = []), t.push(o);
	}
	const a = Array.from(t);
	return [...s].map(([e, t]) => {
		const s = Date.parse(`${e}T00:00:00Z`) / 1e3, o = r.get(e);
		return Ce({
			analysisDate: e,
			epochLengthSeconds: n,
			timestamps: t,
			activityCounts: [],
			sleepScores: [],
			eventMarkerTimestamps: a.filter((e) => e >= s + 43200 && e < s + 151200),
			diaryBedTime: _e(o, "diary_in_bed_time"),
			diaryOnsetTime: _e(o, "diary_onset_time"),
			diaryOutBedTime: _e(o, "diary_out_of_bed_time"),
			diaryWakeTime: _e(o, "diary_wake_time"),
			nightStartHour: Ne(i.start),
			nightEndHour: Ne(i.end)
		});
	});
}
async function Oi(e, t, n, r, i, s, a, o) {
	a?.throwIfAborted();
	const l = n ? We(n, Fe(n, r, e)) : null, c = !n || !l || Be(n, l), u = c || null !== n && null !== l && !Le(n, l) ? e.filter((e) => "rest" === e.kind) : [], d = c ? e.filter((e) => "sleep" === e.kind) : [], p = t && l && i.actiwareSleepWake ? await i.actiwareSleepWake(t, l).catch(() => null) : null;
	a?.throwIfAborted();
	const m = n ? Ge(n, r, e) : [], g = t && l && p ? {
		startTimestamp: wi(t.start_local),
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
	}).then((e) => xi(e ?? [])).catch(() => (console.warn("[actiware-statistics] the core rejected this file's Statistics input"), null)) : [];
	return a?.throwIfAborted(), {
		intervals: ki(_.intervals, _.generated),
		sleepWake: g,
		statistics: y,
		statisticsInput: v,
		wakeThreshold: f ?? null,
		restProposal: o ? {
			key: Ni(o),
			...h?.nights ? { notes: Object.fromEntries(h.nights.map((e) => [e.analysis_date, e.note])) } : {}
		} : null
	};
}
const ji = "Actiware statistics could not be computed for this file; the Actiware statistics block stays empty.";
function Bi(e, t) {
	return e ? (t ?? []).map((e) => `Actiware setting ${e.field} = '${e.raw_label}' not recognised; using default.`) : ["No Actiware analysis settings in this file; Actiware Sleep/Wake and rest intervals are not recomputed."];
}
async function Di(e, t, n) {
	if (Li(e)) return "aw5";
	const r = e.name.toLowerCase();
	if (r.endsWith(".aw5")) return "aw5";
	if (!r.endsWith(".csv")) return null;
	if ("function" != typeof t.detectDeviceFormat) return null;
	const i = await D(e, 65536, n);
	return s = await t.detectDeviceFormat(i, e.name).catch(() => null), a = e.name, "actiware_csv" === s ? "actiware_csv" : "aw5" === s || a.toLowerCase().endsWith(".aw5") ? "aw5" : null;
	var s, a;
}
async function Pi(t, n, r, i, s, a = { cancel: () => {} }, o) {
	const l = (e, t) => V(t, U, e, a.signal, a.cancel), c = (e) => s && o ? {
		proposal: o.proposal,
		nights: o.proposal.rest_autoscore === N.screens ? $i(e.timestampsMs.map((e) => e / 1e3), e.eventMarkerInstantsSec, e.epochSeconds, void 0, {
			start: o.nightStartHour,
			end: o.nightEndHour
		}) : []
	} : null, u = async (t) => (await l("aggregateEpochSeries", () => r.aggregateEpochSeries({
		target_seconds: e,
		series: t,
		sleep_scores: [],
		event_markers: []
	}))).series;
	if ("aw5" === n) {
		const e = Li(t) ? t.aw5Subject.downloadGuids[0] : void 0, n = Li(t) ? await t.loadAw5(a.signal) : await l("parseAw5", async () => r.parseAw5(new Uint8Array(await t.arrayBuffer())));
		if (G(a.signal, "after decoding the .AW5 database"), !n) throw new Error("This build's actours core cannot read .AW5 databases yet (needs the pin that exports parseAw5). Export the recording from Actiware as CSV instead.");
		const { warnings: o } = function(e) {
			const { status: t, reasons: n } = e.alignment;
			if ("broken" === t) throw new Error(`This .AW5 recording's samples do not line up with its clock (${n.join("; ") || "alignment broken"}), so it was not imported.`);
			return "suspect" === t ? { warnings: [`.AW5 alignment is suspect: ${n.join("; ") || "no reason given"}. Check the plot against the Actiware report.`] } : { warnings: [] };
		}(n), d = Ai(n, e), p = n.actiware_analysis, m = p?.statistics_input ?? n.actiware_statistics_input ?? null;
		i?.(.6, "Preparing the supported native scoring grid...");
		const g = await Ci(Ti(n, e), u, o, m);
		i?.(.8, "Actiware sleep/wake and statistics...");
		const f = p?.params ?? n.actiware_params, h = f ? {
			params: f,
			intervals: p?.intervals ?? n.series.rest_intervals ?? [],
			...p?.analysis ? { analysis: p.analysis } : {},
			...n.other_analyses ? { otherAnalyses: n.other_analyses } : {}
		} : null, _ = await Oi(h?.intervals ?? [], p?.input ?? n.actiware_input ?? await vi(Ti(n, e), r), h?.params ?? null, s, r, m, void 0, c(g));
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
				...Bi(f, p?.params_warnings ?? n.actiware_params_warnings ?? n.series.actiware_params_warnings),
				..._.statistics ? [] : [ji]
			],
			...d ? { gmtOffsetMinutes: d.gmt_offset_minutes } : {}
		};
	}
	const d = await l("parseEpochSeries", async () => {
		const e = new Uint8Array(await t.arrayBuffer());
		return r.parseEpochSeries(S(e, [e.buffer]), t.name);
	});
	G(a.signal, "after parsing the Actiware export"), i?.(.6, "Preparing the supported native scoring grid...");
	const p = await Ci(d, u, [], d.actiware_statistics_input ?? null);
	i?.(.8, "Actiware sleep/wake and statistics...");
	const m = d.actiware_params ?? null, g = m ? {
		params: m,
		intervals: d.rest_intervals ?? []
	} : null, f = await Oi(d.rest_intervals ?? [], d.actiware_input ?? await vi(d, r), m, s, r, d.actiware_statistics_input ?? null, void 0, c(p));
	return {
		...p,
		actiwareRestProposal: f.restProposal,
		actiwareStatisticsInput: f.statisticsInput,
		actiwareIntervals: f.intervals,
		actiwareSleepWake: f.sleepWake,
		actiwareStatistics: f.statistics ?? [],
		actiwareRecording: g,
		actiwareWakeThreshold: f.wakeThreshold,
		warnings: [
			...p.warnings,
			...Bi(m, d.actiware_params_warnings),
			...f.statistics ? [] : [ji]
		]
	};
}
function Li(e) {
	return "aw5Subject" in e;
}
function Fi(e, t) {
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
var Wi = class extends Error {
	name = "ActiwareSleepContainmentError";
}, zi = class extends Error {
	name = "ActiwareRestEditError";
};
const Gi = (e, t) => Math.round((t - e.startTimestamp) / e.epochSeconds);
function Vi(e, t) {
	return e.startTimestamp + Gi(e, t) * e.epochSeconds;
}
const Ui = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " "), Hi = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19);
function qi(e) {
	return {
		kind: e.kind,
		source: e.source,
		start: Hi(e.startTimestamp),
		end: Hi(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	};
}
const Ki = (e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind);
function Ji(e, t) {
	return (e ?? []).filter((e) => "rest" === e.kind && null !== Pe([e], t));
}
const Yi = (e, t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp;
function Zi(e, t, n) {
	const r = Re(e, t);
	return r ? [...r.sleep && !n ? [{
		onsetTimestamp: r.sleep.startTimestamp,
		offsetTimestamp: r.sleep.endTimestamp,
		markerIndex: 1,
		markerType: d.MAIN_SLEEP
	}] : [], ...(r.additionalSleeps ?? []).map((e, t) => ({
		onsetTimestamp: e.startTimestamp,
		offsetTimestamp: e.endTimestamp,
		markerIndex: t + 2,
		markerType: d.NAP
	}))] : [];
}
function Qi(e, t, n, r) {
	return Zi(t, n, r).map((t) => {
		const n = e.find((e) => e.markerType === t.markerType && e.onsetTimestamp === t.onsetTimestamp && e.offsetTimestamp === t.offsetTimestamp);
		return n ? {
			...n,
			markerIndex: t.markerIndex
		} : t;
	});
}
function Xi(e, t) {
	const n = [...t].flatMap((t) => {
		const n = Re(e, t);
		return n?.sleep ? [n.sleep] : [];
	});
	return (e ?? []).filter((e) => "sleep" !== e.kind || !n.some((t) => t.startTimestamp === e.startTimestamp && t.endTimestamp === e.endTimestamp));
}
async function es(e, t, n, r) {
	if (!t) return null;
	const i = Xi(e, n).map(qi).sort(Ki);
	if (0 === i.length) return [];
	const s = await r({
		...t,
		intervals: i
	});
	return s ? xi(s).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)) : null;
}
async function ts(e, t, n, r) {
	const i = Ji(e, t), s = "move" === n.kind ? function(e, { from: t, to: n }) {
		const r = e.find((e) => e.startTimestamp === t.startTimestamp && e.endTimestamp === t.endTimestamp);
		if (r) return r;
		const i = e.filter((e) => n.startTimestamp === t.startTimestamp && e.startTimestamp === n.startTimestamp || n.endTimestamp === t.endTimestamp && e.endTimestamp === n.endTimestamp);
		return 1 === i.length ? i[0] : void 0;
	}(i, n) : "remove" === n.kind ? i.find((e) => Yi(n.holding, e)) : void 0;
	if ("add" !== n.kind && !s) throw new zi("That rest interval changed since it was shown; reload the night.");
	const a = e.filter((e) => e !== s && !(s && "sleep" === e.kind && Yi(e, s)));
	if ("remove" === n.kind) return a;
	const { grid: o } = r, l = s?.analysis, c = {
		kind: "rest",
		source: "event_marker",
		origin: "scorer",
		startTimestamp: Vi(o, n.to.startTimestamp),
		endTimestamp: Vi(o, n.to.endTimestamp),
		...l ? { analysis: l } : {}
	};
	if (c.endTimestamp <= c.startTimestamp) throw new zi("A rest interval must end after it starts.");
	if (a.some((e) => "rest" === e.kind && e.startTimestamp < c.endTimestamp && e.endTimestamp > c.startTimestamp)) throw new zi("A rest interval cannot overlap another rest interval.");
	if (null === Pe([c], t)) throw new zi("That rest interval would belong to another night.");
	const u = await async function(e, { epochs: t, params: n, grid: r, core: i }) {
		if (0 === e.length) return [];
		const s = await i.actiwareIntervals(t, e.map(qi), n);
		if (!s || s.generated) throw new Error("The Actiware core did not derive the sleep inside these rest intervals.");
		const a = ki(s.intervals.filter((e) => "sleep" === e.kind), !0);
		return function(e, t) {
			const n = e.filter((e) => "rest" === e.kind);
			for (const r of e.filter((e) => "sleep" === e.kind)) {
				const e = Gi(t, r.startTimestamp), i = Gi(t, r.endTimestamp);
				if (!n.some((n) => e >= Gi(t, n.startTimestamp) && i <= Gi(t, n.endTimestamp))) throw new Wi(`Actiware sleep interval ${Ui(r.startTimestamp)}–${Ui(r.endTimestamp)} lies outside every rest interval.`);
			}
		}([...e, ...a], r), a;
	}([c], r);
	return [
		...a,
		c,
		...u
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function ns(e, t) {
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
async function rs(e, t, n, r) {
	const i = await is(e, t, n, r);
	return i ? as(e.file, i, t.keys()) : null;
}
async function is({ file: e, statisticsInput: t }, n, r, i) {
	if (!t) return null;
	const s = q(i), a = e.actiwareIntervals ?? [], o = await Hn(a.map((e) => e.startTimestamp), s);
	let l = [...a];
	for (const m of n.keys()) {
		const e = Ji(a, m), t = a.filter((t) => "sleep" === t.kind && ss(a, t, e, () => o(t.startTimestamp) === m)), r = n.get(m), i = r?.sleepMarkers.filter((e) => (e.markerType === d.NAP || e.markerType === d.MAIN_SLEEP && !r.isInvalidNight) && null != e.onsetTimestamp && Number.isFinite(e.onsetTimestamp) && null != e.offsetTimestamp && Number.isFinite(e.offsetTimestamp) && e.offsetTimestamp > e.onsetTimestamp);
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
		intervals: l.map(qi).sort(Ki)
	});
	if (!c) return null;
	const u = xi(c), p = [...e.actiwareStatistics ?? [], ...u].map((e) => e.startTimestamp);
	return {
		calculated: u,
		rowDateOf: await Hn(p, s),
		datedRows: new Set(p)
	};
}
const ss = (e, t, n, r) => {
	const i = e.find((e) => "rest" === e.kind && t.startTimestamp >= e.startTimestamp && t.endTimestamp <= e.endTimestamp);
	return i ? n.includes(i) : r();
};
function as(e, t, n, r) {
	const i = e.actiwareIntervals ?? [], s = [...n].map((e) => ({
		date: e,
		rests: Ji(i, e)
	})), a = (e) => s.some(({ date: n, rests: s }) => "rest" === e.kind ? null !== Pe([e], n) : "sleep" === e.kind && ss(i, e, s, () => {
		return i = e.startTimestamp, (t.datedRows.has(i) || !r ? t.rowDateOf(i) : r(i)) === n;
		var i;
	}));
	return [...(e.actiwareStatistics ?? []).filter((e) => !a(e)), ...t.calculated.filter(a)].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function os(e, t) {
	return (e.actiwareStatistics ?? []).map((e) => e.startTimestamp).filter((e) => !t.datedRows.has(e));
}
const ls = [
	"temperature",
	"lux",
	"redLight",
	"greenLight",
	"blueLight"
];
function cs(e) {
	return "string" == typeof e ? e : null;
}
function us(e) {
	return "number" == typeof e ? e : null;
}
function ds(e, t) {
	const n = function(e, t) {
		switch (e.formatter) {
			case "verbatim_string": return function(e) {
				return e ? a(e) : "";
			}(cs(t));
			case "display_label": {
				const n = cs(t);
				return n ? function(e) {
					return e ? a(e) : "";
				}(e.labelEnum ? te(e.labelEnum, n) : n) : "";
			}
			case "core_printed_text":
			case "date_iso": return function(e) {
				return e ?? "";
			}(cs(t));
			case "integer": return function(e) {
				return null == e ? "" : String(Math.trunc(e));
			}(us(t));
			case "fixed2": return function(e) {
				return null == e ? "" : e.toFixed(2);
			}(us(t));
			case "python_scalar_str": return function(e) {
				return null == e ? "" : String(e);
			}("boolean" == typeof t || "object" == typeof t ? null : t);
			case "python_float_repr": return function(e) {
				if (null == e) return "";
				if (!Number.isFinite(e)) return String(e);
				const t = String(e);
				return t.includes(".") || t.includes("e") ? t : `${t}.0`;
			}(us(t));
			case "python_bool": return function(e) {
				return null == e ? "" : e ? "True" : "False";
			}("boolean" == typeof t ? t : null);
			case "clock_at_marker_step": return function(e) {
				return null == e?.timestamp ? "" : Ae(e.timestamp, e.stepSeconds);
			}("object" == typeof t ? t : null);
			case "datetime_seconds": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${String(t.getUTCFullYear())}-${lr(t.getUTCMonth() + 1)}-${lr(t.getUTCDate())} ${lr(t.getUTCHours())}:${lr(t.getUTCMinutes())}:${lr(t.getUTCSeconds())}`;
			}(us(t));
			case "ggir_value": return or("object" == typeof t ? null : t, { integral: e.ggirIntegral ?? !1 });
		}
	}(e, t);
	return "" === n ? Z[e.sentinel] : n;
}
function ps(e, t) {
	if (!t) return "";
	const { labelEnum: n } = ne[e];
	return n ? te(n, t) : t;
}
const ms = oe.invalid_night_row?.markerTypeCell ?? "", gs = oe.nonwear_row?.markerTypeCell ?? "";
function fs(e) {
	return X[e].filter((e) => "server" !== ne[e].plane);
}
function hs(e) {
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
function _s(e) {
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
const ws = [
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
], vs = [
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
async function ys(e, t, n, r, i, s, a) {
	try {
		return {
			metrics: t ? await En(e, t, n, r, i, s, a) : await Rn(e, n, r, i, s, null, a),
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
async function bs(e, t, n, r) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const i = new Set(n.filter((t) => t.markerType === d.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return i.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : ei(t.filter((e) => i.has(e.date)), e, t[0]?.epochLengthSeconds, r);
}
function ks(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const xs = [
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
], Ms = {
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
}, Ss = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => ps("algorithm", e.algorithm),
	summary_detection_rule: (e) => ps("detection_rule", e.detectionRule),
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
}, Is = Q;
function Ts(e) {
	return F(e);
}
function As(e) {
	return JSON.stringify(e, null, 2);
}
const Rs = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function Es(e = Is, t = !1) {
	return Ls("codebook_csv", e, Rs, void 0, t);
}
const Cs = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], Ns = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function $s(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== d.MAIN_SLEEP) continue;
		const e = Cs.map((e) => Ds(e, n)).join("\0"), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}
function* Os(e, t = !1) {
	const n = $s(e);
	let r = 0;
	const i = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > r && (r = t.length), t;
	}), s = Cs.map((e) => ne[e].header);
	for (let o = 1; o <= r; o++) for (const [e] of Ns) s.push(`night${String(o)}_${e}`);
	const a = s;
	yield t ? [...s, ...a.map((e) => e + "_missing_reason")].join(",") : s.join(",");
	for (const o of i) {
		const e = o[0], n = Cs.map((t) => Ds(t, e)), i = Cs.map((t) => Bs[t]?.(e) ? "" : Ps[t] ?? "");
		for (let t = 0; t < r; t++) {
			const e = o[t];
			for (const [t, r] of Ns) {
				const s = e ? Ds(r, e) : "";
				n.push(s), i.push(s ? "" : e ? "date" === t ? "" : e.derivedMissingReasons?.[r] ?? e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? i : []].join(",");
	}
}
function js(e, t) {
	return null == e ? null : {
		timestamp: e,
		stepSeconds: t.markerStepSeconds
	};
}
const Bs = {
	filename: (e) => e.filename,
	file_id: (e) => e.fileId,
	participant_id: (e) => e.participantId,
	study_date: (e) => e.studyDate,
	period_index: (e) => e.periodIndex,
	marker_type: (e) => e.markerType,
	onset_time: (e) => js(e.onsetTimestamp, e),
	offset_time: (e) => js(e.offsetTimestamp, e),
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
	sleep_midpoint_time: (e) => js(e.sleepMidpointTimestamp, e),
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
function Ds(e, t) {
	return ds(ne[e], Bs[e]?.(t) ?? null);
}
const Ps = {
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
function Ls(e, t, n, r, i = !1) {
	const s = r && r.length > 0 ? new Set(r) : null, a = fs(e).filter((e) => null == s || s.has(ne[e].header)), o = i ? a.filter((e) => Ps[e]) : [], l = [[...a.map((e) => ne[e].header), ...o.map((e) => ne[e].header + "_missing_reason")].join(",")];
	for (const c of t) l.push([...a.map((e) => ds(ne[e], n[e]?.(c) ?? null)), ...o.map((e) => {
		const t = n[e]?.(c);
		return null == t || "" === t ? Ps[e] ?? "" : "";
	})].join(","));
	return l.join("\n");
}
function Fs(e, t, r = !1) {
	const i = Ls("sleep_csv", e, Bs, t, r), s = t?.length ? new Set(t) : null, a = [
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
	].filter((t) => (!s || s.has(ne[t].header)) && e.some((e) => [...a, ...o].includes(t) && null == Bs[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || l.includes(t) && e.metricMissingReason));
	return 0 === c.length ? i : n(i).records.map((t, n) => {
		if (0 === n) return t.text + "," + c.map((e) => `${ne[e].header}_missing_reason`).join(",");
		const r = e[n - 1];
		return t.text + "," + c.map((e) => r.markerType === gs ? "manual_nonwear_period" : r.markerType === ms ? "invalid_night" : a.includes(e) ? null == Bs[e]?.(r) ? "source_reported_missing" : "" : o.includes(e) ? null == Bs[e]?.(r) ? "not_applicable_to_row" : "" : r.sensorMissingReasons?.[e] ?? r.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? r.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (l.includes(e) ? r.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
fs("sleep_csv").map((e) => ne[e].header);
const Ws = oe.invalid_night_row.markerTypeCell, zs = re("actiware_interval_csv", "local"), Gs = [
	"interval_score_count",
	"interval_score_average",
	"interval_score_manual_count",
	"interval_score_manual_average",
	"interval_score_scheduled_count",
	"interval_score_scheduled_average",
	"interval_score_no_response_count",
	"interval_score_late_count",
	"interval_score_late_average"
].map((e) => ne[e].header), Vs = (e, t) => Math.round(e) === Math.round(t);
async function Us(e, t, n, r) {
	const i = r ? Xi(e.actiwareIntervals, r.invalidDates) : (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind), s = i.filter((e) => "rest" === e.kind), a = i.filter((e) => "rest" === e.kind || "sleep" === e.kind && s.some((t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp)).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), o = e.actiwareStatistics ?? [], l = await Hn([...a.map((e) => e.startTimestamp), ...o.map((e) => e.startTimestamp)], q(n)), c = /* @__PURE__ */ new Set(), u = (t, n) => ({
		filename: e.filename,
		participantId: e.participantId ?? null,
		studyDate: l(t.startTimestamp),
		intervalNumber: null,
		interval: t,
		statistics: n
	}), d = a.map((e) => {
		const t = o.findIndex((t, n) => !c.has(n) && t.kind === e.kind && Vs(t.startTimestamp, e.startTimestamp) && Vs(t.endTimestamp, e.endTimestamp));
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
function Hs(e, t, n) {
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
const qs = new Set(ur.map(([, e]) => e)), Ks = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
function Js(e) {
	if (!Number.isFinite(e)) return [
		"",
		"",
		""
	];
	const t = /* @__PURE__ */ new Date(1e3 * Math.round(e)), n = t.toISOString();
	return [
		n.slice(0, 10),
		Ks[t.getUTCDay()],
		n.slice(11, 19)
	];
}
function Ys(e, t = !1) {
	const n = t ? ur.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], r = [[
		...zs,
		...n.map(([, e]) => e + "_missing_reason"),
		...t ? [
			"Participant ID_missing_reason",
			"Origin_missing_reason",
			"Analysis_missing_reason",
			...Gs.map((e) => e + "_missing_reason")
		] : []
	].join(",")], i = (e) => ne[e].header;
	for (const { filename: s, participantId: o, studyDate: l, intervalNumber: c, interval: u, statistics: d, invalidNight: p } of e) {
		const e = !0 === p && !Number.isFinite(u.startTimestamp), [m, g, f] = Js(u.startTimestamp), [h, _, w] = Js(u.endTimestamp), v = new Map([
			[i("filename"), s],
			[i("participant_id"), o ?? ""],
			[i("study_date"), l],
			[i("interval_kind"), p ? Ws : u.kind],
			[i("interval_number"), null == c ? "" : String(c)],
			[i("interval_source"), e ? "" : u.source],
			[i("interval_start_date"), m],
			[i("interval_start_day"), g],
			[i("interval_start_time"), f],
			[i("interval_end_date"), h],
			[i("interval_end_day"), _],
			[i("interval_end_time"), w],
			[i("interval_origin"), e ? "" : u.origin],
			[i("interval_analysis"), u.analysis ?? ""],
			...ur.map(([, e]) => [e, d?.printed?.[e] ?? ""]),
			...Gs.map((e) => [e, p ? "" : u.subjectiveScores?.[e] ?? ""])
		]), y = n.map(([e]) => {
			if (p) return "invalid_night";
			if (!d || null != d[e]) return "";
			if (e.startsWith("off_wrist")) return "source_reported_missing";
			const t = /_(white|red|green|blue)(?:_percent)?$/u.exec(e)?.[1];
			return t && null == d["invalid_" + t + "_percent"] ? "source_reported_missing" : "";
		}), b = Gs.map((e) => p ? "invalid_night" : u.subjectiveScores?.[e] ? "" : "source_no_subjective_scores");
		r.push([
			...zs.map((e) => qs.has(e) ? v.get(e) ?? "" : a(v.get(e) ?? "")),
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
const Zs = re("event_marker_csv", "local"), Qs = 86400, Xs = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * Qs * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), ea = (e) => e < 10 ? `0${String(e)}` : String(e);
function ta(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / Qs), n = e - t * Qs;
	return `${Xs(t)} ${ea(Math.floor(n / 3600))}:${ea(Math.floor(n / 60) % 60)}:${ea(n % 60)}`;
}
function na(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function ra(e, t, n, r, i) {
	const s = [], a = vo(n, lo.event, e), o = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		i?.throwIfAborted();
		const e = na(l, Ao(a, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await Hn(e, q(i)), c = new Set(ko(a, l.id, r).keys());
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
const ia = "actiware_sleep_wake_export.csv", sa = re("actiware_sleep_wake_csv", "local");
async function aa(e, t, n, r) {
	if (0 === e.scores.byteLength) return [];
	const i = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, s = n ?? new Set(await r.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((i - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), i])));
	return (await Promise.all([...s].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await Vn(t, void 0, void 0, r);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
function oa(e, t, n, r) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		ta(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...r ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => a(e)).join(",");
}
const la = nr, ca = new Uint8Array([3, 0]);
function ua(e, t) {
	if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
	const n = [], r = new qt(t?.byteLength ? {
		level: 1,
		dictionary: t
	} : { level: 1 }, (e) => {
		n.push(e);
	});
	r.push(e, !1), r.flush(!1);
	const i = r.s.r ?? 0;
	if (!Number.isInteger(i) || i < 0 || i > 2047) throw new Error("ZIP compression state is unreadable.");
	const s = (7 & i) > 5 ? 2 : 1, a = new Uint8Array(s + 4);
	return a[0] = i >> 3, a[s + 2] = 255, a[s + 3] = 255, n.push(a), ye(n);
}
const da = (() => {
	const e = /* @__PURE__ */ new Int32Array(256);
	for (let t = 0; t < 256; t += 1) {
		let n = t;
		for (let e = 0; e < 8; e += 1) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
		e[t] = n;
	}
	return e;
})();
function pa(e) {
	let t = -1;
	for (const n of e) t = da[255 & (t ^ n)] ^ t >>> 8;
	return ~t >>> 0;
}
function ma(e, t) {
	let n = 2147483648, r = 0, i = t;
	for (; !(e & n) || (r ^= i, e & n - 1);) n >>>= 1, i = 1 & i ? i >>> 1 ^ 3988292384 : i >>> 1;
	return r >>> 0;
}
const ga = (() => {
	const e = [1 << 30];
	for (let t = 1; t < 32; t += 1) e.push(ma(e[t - 1], e[t - 1]));
	return e;
})();
function fa() {
	const e = new L();
	return {
		hashChunk: (t) => {
			e.update(t);
		},
		hexDigest: () => Promise.resolve(P(e.finalize()))
	};
}
var ha = class extends Xt {
	flag = 3;
	constructor(e) {
		super(e), this.compression = 8;
	}
	process() {}
	emit(e) {
		this.ondata(null, e, !1);
	}
	finish(e, t) {
		this.crc = e, this.size = t, this.ondata(null, ca, !0);
	}
};
async function _a(e) {
	const t = e.deflate ?? {
		lanes: 1,
		block: (e, t) => Promise.resolve(function(e, t) {
			return {
				bytes: ua(e, t),
				crc: pa(e)
			};
		}(e, t))
	};
	if (!navigator.storage?.getDirectory) throw new Error("Streaming export requires temporary workspace storage (OPFS).");
	const r = await (await (await navigator.storage.getDirectory()).getDirectoryHandle(Qn, { create: !0 })).getDirectoryHandle(e.scratchId, { create: !0 }), i = await r.getFileHandle(Er, { create: !0 }), s = await r.getFileHandle("bundle.zip", { create: !0 }), a = new CompressionStream("gzip"), o = a.readable.pipeTo(await i.createWritable());
	o.catch(() => {});
	const l = a.writable.getWriter(), c = await s.createWritable();
	let u = [], d = 0, p = 0, m = e.artifacts.importRefusalReasons?.length ?? 0;
	const g = [], f = new en((e, t) => {
		if (e) throw e;
		u.push(t), d += t.byteLength;
	}), h = async (e = 0, t) => {
		if (p = Math.max(p, e + d), !(void 0 !== t && d + t < 262144)) {
			if (1 === u.length) await c.write(u[0]);
			else if (u.length > 1) {
				const e = new Uint8Array(d);
				let t = 0;
				for (const n of u) e.set(n, t), t += n.byteLength;
				await c.write(e);
			}
			u = [], d = 0;
		}
	}, _ = /* @__PURE__ */ new Set();
	let v = 0;
	const y = async (n, r) => {
		if (_.has(n)) throw new Error(`Duplicate export entry: ${n}`);
		_.add(n);
		const i = new ha(n), s = (e.hash ?? fa)();
		let a = 0;
		f.add(i);
		const { blockBytes: o, inFlight: l } = function(e) {
			const t = Math.min(2 * e + 1, Math.floor(24)), n = Math.floor(1572864 / t) - 32768;
			return {
				blockBytes: n - n % 4096,
				inFlight: t - 1
			};
		}(t.lanes), c = [], u = [];
		let d = 0, m = new Uint8Array(o), w = 0, y = /* @__PURE__ */ new Uint8Array(0), b = 0;
		const k = () => b + w + y.byteLength + c.length * (o + 32768), x = async () => {
			const e = await c.shift();
			d = function(e, t, n) {
				let r = 2147483648;
				for (let i = n, s = 3; i; i = Math.floor(i / 2), s += 1) i % 2 && (r = ma(ga[31 & s], r));
				return (ma(r, e) ^ t) >>> 0;
			}(d, e.crc, u.shift()), i.emit(e.bytes), await h(k(), o + 1024);
		}, M = async () => {
			const e = m.subarray(0, w), n = e.slice(-32768);
			for (c.push(t.block(e, y)), u.push(e.byteLength), y = n, m = new Uint8Array(o), w = 0; c.length > l;) await x();
		};
		try {
			for await (const t of r) {
				b = t.byteLength;
				for (let n = 0; n < t.byteLength; n += la) {
					e.signal?.throwIfAborted();
					const r = t.subarray(n, n + la), i = s.hashChunk(r, e.signal);
					i && await i, a += r.byteLength;
					for (let e = 0; e < r.byteLength;) {
						const t = Math.min(r.byteLength - e, o - w);
						m.set(r.subarray(e, e + t), w), w += t, e += t, w === o && await M();
					}
					p = Math.max(p, k());
				}
			}
			for (b = 0, w && await M(); c.length;) await x();
		} finally {
			for (const e of c) e.catch(() => {});
		}
		i.finish(d, a), await h(), g.push({
			name: n,
			contentHash: await s.hexDigest(e.signal),
			byteLength: a
		}), e.progress?.(g.length, v, ar);
	};
	try {
		await l.write(new TextEncoder().encode(Cr(e.artifacts.importRefusalReasons ?? [])));
		const t = [...No({
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
		v = t.filter((e) => e.write).length + 2, e.progress?.(0, v, ar);
		for (const i of t) if (i.write) try {
			"actiware_sleep_wake_export.csv" === i.name ? await y(i.name, async function* () {
				for await (const t of e.sleepWake) e.signal?.throwIfAborted(), m += t.reasonRows, p = Math.max(p, t.bytes.byteLength + t.reasons.byteLength), await l.write(t.reasons), yield t.bytes;
			}()) : i.name.endsWith(".csv") ? await y(i.name, async function* () {
				let t = 0, r = !1, s = !1;
				const a = "actiware_intervals_export.csv" === i.name ? function* () {
					const t = w(n(Ys([], !0)).records[0].text);
					for (const r of e.artifacts.actiwareIntervalRows ?? []) {
						const e = w(n(Ys([r], !0)).records[1].text);
						yield new Map(t.map((t, n) => [t, e[n] ?? ""]));
					}
				} : void 0;
				for await (const e of i.batches?.() ?? wa(i.chunks ?? [i.write()])) {
					if (e.bytes.byteLength > 4 * la) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
					const n = Or(e.text ?? new TextDecoder().decode(e.bytes), i.name, !0, {
						fullRowCsv: e.fullRowCsv,
						rowOffset: t,
						...a ? { contextRows: a } : {}
					});
					let o, c = "";
					for (;;) {
						const t = n.next();
						if (t.done) {
							o = t.value;
							break;
						}
						if (c += Cr([t.value], !1), m += 1, c.length >= la / 2) {
							const t = new TextEncoder().encode(c);
							p = Math.max(p, e.bytes.byteLength + t.byteLength), await l.write(t), c = "";
						}
					}
					await l.write(new TextEncoder().encode(c));
					const u = r ? (s ? "" : "\n") + o.csv.slice(o.csv.indexOf("\n") + 1) : o.csv;
					r = !0, t += e.rows ?? 0, s = u.endsWith("\n");
					const d = new TextEncoder().encode(u);
					p = Math.max(p, e.bytes.byteLength + d.byteLength + 2 * c.length), yield d;
				}
			}()) : await y(i.name, i.chunks ?? [i.write()]);
		} catch (b) {
			throw new Error(`Export failed while writing ${i.name}`, { cause: b });
		}
		await l.close(), await o, await y(Er, async function* () {
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
		const r = await async function(e) {
			const t = Object.entries(e.entries).sort(([e], [t]) => e.localeCompare(t)), n = Array.isArray(e.entries) ? [...e.entries].sort((e, t) => e.name.localeCompare(t.name)) : await Promise.all(t.map(async ([e, t]) => ({
				name: e,
				contentHash: await Ts(t),
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
		return await y(rr, [new TextEncoder().encode(As(r))]), f.end(), await h(), e.signal?.throwIfAborted(), await c.close(), {
			blob: await new Response((await s.getFile()).stream()).blob(),
			entries: g,
			peakBufferedBytes: p,
			reasonRows: m
		};
	} catch (k) {
		throw f.terminate(), await Promise.allSettled([
			l.abort(),
			c.abort(),
			o
		]), k;
	}
}
async function* wa(e) {
	const t = new TextDecoder();
	let r, i = "";
	for await (const s of async function* () {
		for await (const t of e) for (let e = 0; e < t.byteLength; e += la) yield t.subarray(e, e + la);
		yield null;
	}()) {
		const e = null === s;
		i += e ? t.decode() : t.decode(s, { stream: !0 });
		const a = n(i, e);
		if (e && a.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const o = a.remainder ?? "";
		if (o.length > la || a.records.some((e) => e.text.length > la)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
		if (a.records.length) {
			const e = void 0 === r;
			r ??= a.records[0].text + "\n";
			const t = (e ? "" : r) + i.slice(0, i.length - o.length);
			yield {
				bytes: new TextEncoder().encode(t),
				text: t,
				rows: a.records.length - (e ? 1 : 0)
			};
		}
		i = o;
	}
}
const va = (e) => e.slice(e.lastIndexOf("/") + 1), ya = /* @__PURE__ */ new Map();
O.GGIR_CORRECTED_WARM;
const ba = (e) => `${e.name}:ggir-corrected-values`, ka = () => "undefined" == typeof navigator ? void 0 : navigator.locks;
async function xa(e, t, n, r) {
	const i = await async function(e, t, n, r) {
		if (i = (await ce(e))?.extraSettings, !0 !== f("ggir_export_corrected_values", i?.ggir_export_corrected_values).value) return null;
		var i;
		const s = /* @__PURE__ */ new Map(), a = await me(e, t.length ? { onlyFileIds: t } : void 0), o = new Map(a.map((e) => [e.id, e])), l = await e.ggirResultsBundles.where("fileId").anyOf([...o.keys()]).toArray(), c = await p(e, l.map((e) => e.fileId)), u = l.filter((e) => !e.ggirCorrections), d = [...new Set(u.map((e) => e.configCsv))], m = await Promise.all(d.map((e) => async function(e, t) {
			const n = ya.get(t);
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
			return ya.set(t, r), r;
		}(n, e)));
		r?.throwIfAborted();
		const g = [];
		for (const p of u.sort((e, t) => o.get(e.fileId).filename.localeCompare(o.get(t.fileId).filename))) {
			const e = m[d.indexOf(p.configCsv)];
			if ("notApplied" in e) {
				s.set(p.fileId, e);
				continue;
			}
			const t = o.get(p.fileId), n = JSON.stringify([
				t.ggirBundleRevision ?? null,
				e.revision,
				e.profile
			]);
			s.set(p.fileId, {
				key: n,
				revision: t.ggirBundleRevision
			}), c.get(p.fileId) !== n && g.push({
				fileId: p.fileId,
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
	}(e, t, q(n.signal), n.signal);
	if (!i) return null;
	const { plans: s, misses: a } = i;
	if (0 === a.length) return s;
	let l = 0;
	n.onProgress?.(l, a.length);
	const c = Y({
		cores: navigator.hardwareConcurrency,
		deviceMemoryGib: W()
	}), u = await J(a.map((t) => ({
		name: t.name,
		cost: t.size,
		memoryGib: K(t.size),
		run: async (i, s) => {
			if (r && await async function(e) {
				const t = await ka()?.query(), n = (t) => t.name === ba(e);
				return (t?.pending?.some(n) ?? !1) || !1;
			}(e)) return { miss: t };
			try {
				const n = await v(e, t.fileId);
				if (!n) return {
					miss: t,
					notApplied: "the recording was deleted during the export"
				};
				const r = await async function(e, t) {
					if (!e.resultsCsv) return { notApplied: "imported before the app kept GGIR's results/ files; import the GGIR output folder again for its corrected values" };
					if (!e.ms4) return { notApplied: Qe };
					const n = [], r = (e) => void 0 === e ? null : (n.push("string" == typeof e ? new TextEncoder().encode(e) : new Uint8Array(e)), n.length - 1), i = e.recordingFile, s = o(i), a = {
						config_csv: e.configCsv,
						recording_id: s,
						filename: i,
						sleeplog_csv_index: r(e.sleeplogCsv),
						sleeplog_rdata_index: r(e.sleeplogRData),
						data_cleaning_csv_index: r(e.dataCleaningCsv),
						qwindow_csv_index: r(e.qwindowCsv),
						part1_index: r(e.part1),
						ms2_index: r(e.ms2),
						ms3_index: r(e.ms3),
						ms4_index: r(e.ms4),
						ms5_index: r(e.ms5),
						original_files: Object.entries(e.resultsCsv).map(([e, t]) => ({
							path: e,
							bytes_index: r(t)
						})),
						table_names: Object.keys(e.resultsCsv).flatMap((e) => {
							const t = e.slice(8);
							return e.startsWith("results/") && (E.test(t) || $.test(t)) ? [t] : [];
						})
					}, { milestones: l, reports: c, cleaned_nights_csv: u, tables: d, review: p } = await t.correctGgirRecording(a, n);
					if ("ok" !== l.status) return { notApplied: l.reason ?? "the GGIR engine refused this recording" };
					const m = Object.fromEntries([
						"ms2",
						"ms3",
						"ms4",
						"ms5"
					].flatMap((e) => {
						const t = l.files.find((t) => t.path === `meta/${e}.out/${i}`);
						return t ? [[e, t.bytes.slice().buffer]] : [];
					}));
					if (!m.ms4) return { notApplied: "the GGIR engine returned no corrected Part 4 milestone" };
					if (!c || "ok" !== c.status) return { notApplied: c?.reason ?? "the GGIR engine refused this recording's reports" };
					if (null == u || !p) return { notApplied: "the GGIR engine gave no Part 4 cleaned night summary" };
					const g = {}, f = /* @__PURE__ */ new Map();
					for (const o of [l, c]) {
						for (const { file: e } of o.changes) {
							const t = /^meta\/(ms\d)\.out\//u.exec(e)?.[1] ?? va(e);
							g[t] = (g[t] ?? 0) + 1;
						}
						for (const e of o.corrections_not_applied) f.set(e.correction, e.reason);
					}
					const h = m.ms2 ?? e.ms2, _ = m.ms3 ?? e.ms3, w = m.ms5 ?? e.ms5, v = (e) => Object.fromEntries(d.filter(({ name: t }) => e.test(t)).map(({ name: e, table: t }) => [e, t])), y = v(E), b = v($);
					return {
						values: {
							...h ? { ms2: h } : {},
							..._ ? { ms3: _ } : {},
							ms4: m.ms4,
							...w ? { ms5: w } : {},
							cleanedNightsCsv: u,
							part2Reports: Ue(y, p),
							personReports: Ue(b, p),
							imported: et(p)
						},
						ggirCorrections: {
							profile: c.profile || l.profile,
							changedCells: Object.values(g).reduce((e, t) => e + t, 0),
							changedCellsByPart: g,
							...f.size > 0 ? { notApplied: [...f].map(([e, t]) => ({
								correction: e,
								reason: t
							})) } : {}
						}
					};
				}(n, i);
				return await e.transaction("rw", [e.files, e.ggirCorrectedValues], async () => {
					(await e.files.get(t.fileId))?.ggirBundleRevision === t.revision && await e.ggirCorrectedValues.put({
						fileId: t.fileId,
						key: t.key,
						...r
					});
				}).catch((e) => {
					console.warn("[ggir-corrected-values] Corrected values could not be cached.", e);
				}), { miss: t };
			} catch (c) {
				return n.signal?.throwIfAborted(), s.primary || s.cancel(), {
					miss: t,
					notApplied: (c instanceof Error ? c.message : String(c)).replace(/^Error: /u, "")
				};
			} finally {
				n.signal?.aborted || n.onProgress?.(++l, a.length);
			}
		}
	})), {
		signal: n.signal,
		createWorker: x,
		...r ? {
			extraWorkers: Math.floor(c.extraWorkers / 2),
			memoryBudgetGib: c.memoryBudgetGib && c.memoryBudgetGib / 2
		} : c,
		cancelOperation: () => {},
		...n.workerPool
	});
	for (const { miss: o, notApplied: d } of u) void 0 !== d && s.set(o.fileId, { notApplied: d });
	return s;
}
const Ma = [
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
function Sa(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function Ia(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function Ta(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
Ma.join(","), it.length;
var Aa = t({
	GgirReviewChangedError: () => Ha,
	editsFromMarkers: () => Pa,
	getGgirMarkerInputs: () => La,
	ggirNightEdits: () => Da,
	ggirNightRecords: () => Ba,
	hasGgirRecomputeFailure: () => $a,
	mergeGgirSleepMarkers: () => ja,
	recomputeGgirResults: () => za,
	recoverPendingGgirRecomputes: () => Ua,
	reviewGgirResultsForMarkers: () => Ka,
	scheduleGgirRecompute: () => Wa,
	settleGgirScorerReviews: () => Va
});
const Ra = new EventTarget(), Ea = /* @__PURE__ */ new WeakMap(), Ca = 800, Na = "Update GGIR review";
function $a(e, t, n) {
	return T.getState().jobs[`${n.name}:${Fa(e, t)}`]?.status === I.FAILED;
}
function Oa(e, t, n, r, s) {
	if (s?.aborted || function(e) {
		return e instanceof Error && e.name === i.errnames.DatabaseClosed;
	}(r)) return;
	const a = Fa(e, t), o = `${n.name}:${a}`, l = T.getState();
	l.jobs[o]?.controller.signal.aborted || l.jobs[o]?.status === I.ELSEWHERE || (l.update(o, {
		id: o,
		key: a,
		workspaceId: n.name,
		kind: O.GGIR_RECOMPUTE,
		label: Na,
		controller: l.jobs[o]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: I.FAILED
	}), n.isOpen() && B() === n && Ra.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function ja(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function Ba(e, t, n, r = [], i, s = q(i)) {
	const a = ve([...n.values()].flat(), !0), o = a?.algorithm ?? He(t), l = a?.detectionRule ?? null, c = /* @__PURE__ */ new Map();
	for (const [d, m] of n) {
		const e = ve(m, !0);
		e && c.set(d, [{
			...e,
			algorithm: o,
			detectionRule: l
		}]);
	}
	const u = Ze(t), p = u.length ? await s.ggirLabelsToStoredMs(Float64Array.from(u.flatMap((e) => [e.onsetMs, e.wakeMs])), r) : [];
	for (const [m, g] of u.entries()) {
		const t = c.get(g.nightDate)?.[0], n = Oe(g, t);
		"scored" !== n.kind && "invalid" !== n.kind ? c.set(g.nightDate, [{
			fileId: e,
			date: g.nightDate,
			username: Me,
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
			sleepMarkers: ja({
				markerType: d.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: p[2 * m] / 1e3,
				offsetTimestamp: p[2 * m + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : c.set(g.nightDate, t ? [t] : []);
	}
	return c;
}
async function Da(e, t, n, r = [], i, s = q(i)) {
	const a = await Ba(e, t, n, r, i, s), o = new Map([...a].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : []));
	return {
		markersByAlgo: a,
		selected: o,
		edits: await Pa(t, o, r, i, s)
	};
}
async function Pa(e, t, n = [], r, i = q(r)) {
	const s = Je(e).flatMap((e) => {
		const n = Oe(e, t.get(e.nightDate));
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
async function La(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [r, i] = await Promise.all([ke(e, t, n), we(e, n)]), s = new Map([...r].flatMap(([e, t]) => {
			const n = ve(t, !0);
			return n ? [[e, n]] : [];
		})), a = i?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([a ?? [], [...s].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				Oe(void 0, t)
			])]),
			markers: s,
			clockSteps: a,
			bundleRevision: i?.ggirBundleRevision
		};
	});
}
function Fa(e, t) {
	return `${O.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function Wa(e, t, n, r) {
	if (!n.isOpen() || B() !== n || r?.aborted) return;
	let i = Ea.get(n);
	i || (i = /* @__PURE__ */ new Map(), Ea.set(n, i));
	const s = Fa(e, t);
	clearTimeout(i.get(s)), i.set(s, setTimeout(() => {
		i.delete(s), n.files.get(e).then((i) => {
			if (i?.ggirBundleRevision && n.isOpen() && B() === n && !r?.aborted) return za(e, t, n, r);
		}).catch((i) => {
			r?.aborted || i instanceof DOMException && "AbortError" === i.name || (Oa(e, t, n, i, r), n.isOpen() && B() === n && (console.error("[ggir-results] recompute failed."), be("error", "GGIR results recompute failed", he(i))));
		});
	}, Ca));
}
function za(e, t, n, r, i = !0) {
	const s = (a, o = r) => H({
		kind: O.GGIR_RECOMPUTE,
		key: Fa(e, t),
		label: Na,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (r) => {
			r.signal.throwIfAborted();
			const o = await Ga(e, t, n, r.signal, i);
			return r.signal.throwIfAborted(), !1 !== o ? o : (a < 2 && s(a + 1, r.signal).catch((i) => Oa(e, t, n, i, r.signal)), null);
		}
	});
	return s(0);
}
async function Ga(e, t, n, r, i, s = { active: () => n.isOpen() && B() === n }) {
	if (r.throwIfAborted(), !s.active()) return null;
	const { markerInputs: a, markers: o, clockSteps: l, bundleRevision: c } = await La(e, t, n);
	if (!c) return null;
	const u = await n.ggirScorerReviews.get([e, t]);
	if (!s.active()) return null;
	if (r.throwIfAborted(), u?.markerInputs === a && u.bundleRevision === c && (d = u, void 0 === s.correctedKey || 0 === d.edits.length || d.corrected?.key === s.correctedKey)) return i && Ra.dispatchEvent(new CustomEvent("updated", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })), u.current ?? null;
	var d;
	const p = await n.ggirResultsBundles.get(e);
	if (!p) return null;
	const { edits: m } = await Da(e, p.imported, new Map([...o].map(([e, t]) => [e, [t]])), l, r, s.api);
	if (!s.active()) return null;
	const g = qa(u, c, m), f = void 0 !== s.correctedKey && m.length > 0 && !p.ggirCorrections && !(g && u.corrected?.key === s.correctedKey), h = m.length > 0 && (!g || f) ? y(p, await n.ggirResultsBlobs.get(e)) : p, _ = g ? u.current : (await Ka(h, o, l, m, r, void 0, s.api)).current;
	let w = g ? u.corrected : void 0;
	if (f) {
		const t = await n.ggirCorrectedValues.get(e);
		if (!t || t.key !== s.correctedKey) return null;
		const i = qe(h, t).find((e) => "corrected" === e.set), a = i && (await Ka(i.bundle, o, l, m, r, void 0, s.api)).current;
		w = {
			key: t.key,
			...a ? { current: a } : {}
		};
	}
	r.throwIfAborted();
	const v = (/* @__PURE__ */ new Date()).toISOString();
	if (!s.active()) return null;
	const b = await le(n, [
		n.ggirResultsBundles,
		n.ggirScorerReviews,
		n.markers,
		n.files
	], async () => {
		if (!s.active()) return null;
		const i = await La(e, t, n);
		return i.markerInputs === a && i.bundleRevision === c && (0 === await n.ggirResultsBundles.where(":id").equals(e).count() ? null : (r.throwIfAborted(), await n.ggirScorerReviews.put({
			fileId: e,
			scorer: t,
			..._ ? { current: _ } : {},
			edits: m,
			markerInputs: a,
			bundleRevision: c,
			updatedAt: v,
			...w ? { corrected: w } : {}
		}), !0));
	}, r);
	return b ? (Ra.dispatchEvent(new CustomEvent("updated", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })), r.throwIfAborted(), _ ?? h.imported) : (r.throwIfAborted(), !1 !== b && null);
}
async function Va(e, t, n, r, i = {}) {
	const s = await (t.length ? e.ggirResultsBundles.where(":id").anyOf([...t]) : e.ggirResultsBundles.toCollection()).primaryKeys(), a = (e) => {
		const t = r?.get(e);
		return t && "key" in t ? t.key : void 0;
	}, o = async (t) => {
		const r = await Promise.all(t.map((t) => async function(e, t, n, r) {
			const [{ markerInputs: i, bundleRevision: s }, a] = await Promise.all([La(t, n, e), e.ggirScorerReviews.get([t, n])]);
			return !(!a || !s || a.markerInputs !== i || a.bundleRevision !== s || 0 !== a.edits.length && ((await e.ggirResultsBundles.get(t))?.ggirCorrections || void 0 !== r && a.corrected?.key !== r));
		}(e, t, n, a(t))));
		return t.filter((e, t) => !r[t]);
	}, l = await o(s);
	if (0 === l.length) return /* @__PURE__ */ new Set();
	const c = i.signal ?? new AbortController().signal, u = (await e.files.bulkGet(l)).map((e) => e?.sourceSizeBytes ?? 0);
	return await J(l.map((t, r) => ({
		name: String(t),
		cost: u[r],
		memoryGib: K(u[r]),
		run: async (r, i) => {
			try {
				await Ga(t, n, e, c, !1, {
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
		createWorker: x,
		cancelOperation: () => {},
		...Y({
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: W()
		}),
		...i.workerPool
	}), new Set(await o(l));
}
function Ua(e, t) {
	return H({
		kind: O.GGIR_RECOVERY,
		key: O.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const r = () => !t.signal.aborted && e.isOpen() && B() === e;
			try {
				if (!r()) return;
				const s = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: a } = await import("./ggir-import-nMHE9_cq.js").then((e) => e.t);
				for (const o of s) {
					if (t.signal.throwIfAborted(), !r()) return;
					try {
						const [s] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), a(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), c = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...s.map((e) => e.scorer)]);
						c.delete(Me);
						for (const a of c) {
							if (!r()) return;
							try {
								const n = $a(o, a, e);
								if (!n) {
									const { markerInputs: t, bundleRevision: n } = await La(o, a, e), r = s.find((e) => e.scorer === a);
									if (n && r?.markerInputs === t && r.bundleRevision === n) continue;
								}
								await za(o, a, e, t.signal, n);
							} catch (i) {
								n = !0, Oa(o, a, e, i, t.signal);
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
				const i = Object.values(T.getState().jobs).filter((t) => R(t) && t.workspaceId === e.name && t.kind === O.GGIR_RECOMPUTE && t.status === I.FAILED);
				for (const t of i) {
					const i = t.key.slice(O.GGIR_RECOMPUTE.length + 1);
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
							r() && (0 === n || 0 === i && 0 === s) && (T.getState().dismiss(t.id), Ra.dispatchEvent(new CustomEvent("updated", { detail: {
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
var Ha = class extends Error {
	constructor() {
		super("a night of this recording was edited during the export; export again");
	}
};
function qa(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
async function Ka(e, t, n = [], r, i, s, a) {
	const l = r ?? await Pa(e.imported, t, n, i, a);
	let c;
	i?.throwIfAborted();
	const u = s?.review;
	if (qa(u, s?.bundleRevision, l)) c = u.current;
	else {
		if (s && l.length > 0 && !e.part1) throw new Ha();
		if (l.length > 0 && e.ms2 && e.ms3) {
			const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), r = t(e.ms3), s = t(e.ms4), u = t(e.ms5), d = t(e.sleeplogRData), p = (t) => t.reviewGgirResults({
				part1: new Uint8Array(e.part1),
				configCsv: e.configCsv,
				recordingId: o(e.recordingFile),
				...n ? { ms2: n } : {},
				...r ? { ms3: r } : {},
				...s ? { ms4: s } : {},
				...u ? { ms5: u } : {},
				...d ? { sleeplogRData: d } : {},
				...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
				edits: l,
				...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
				...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
				crossCheck: !1
			});
			c = et(await (a ? p(a) : z(i, p)));
		}
	}
	i?.throwIfAborted();
	const d = Object.getOwnPropertyDescriptors(e);
	return delete d.current, Reflect.deleteProperty(d, "edits"), Object.defineProperties({
		...c ? { current: c } : {},
		edits: l
	}, d);
}
const Ja = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], Ya = [
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
], Za = [
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
], Qa = [
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
], Xa = ["fileId", ...u], eo = {
	files: [
		...Ja,
		"ggirTimezone",
		"recording",
		"ggirClockSteps",
		"sourceType",
		"sourceProfileId",
		"navigationFacts"
	],
	markers: Ya,
	activityDays: Za,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: Qa,
	actiwareFileData: [
		"fileId",
		"actiwareIntervals",
		"actiwareStatistics"
	]
}, to = {
	files: [...Ja, "ggirClockSteps"],
	markers: Ya,
	activityDays: Za,
	ggirResultsBundles: Qa,
	ggirResultsBlobs: Xa,
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
}, no = {
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
		j
	]
}, ro = "Also export corrected values was off at export";
function io(e) {
	const t = Object.values(e.ggirCorrectionsNotApplied).filter((e) => e !== ro).length, n = Object.keys(e.ggirCorrectionProfiles);
	if (0 === n.length && 0 === t) return null;
	const r = Object.keys(e.ggirCorrections).length;
	return `Corrected values: ${n.length > 0 ? `profile ${n.join(", ")}; ` : ""}${String(r)} ${1 === r ? "recording" : "recordings"} corrected, ${String(t)} left out (see manifest.json).`;
}
function so(e) {
	const t = vo(e, lo.manifest), n = new Map(t.ggirResultsBundles.map((e) => [e.fileId, e.recordingFile]));
	return t.ggirCorrectedValues.flatMap((e) => void 0 !== e.notApplied && "Also export corrected values was off at export" !== e.notApplied && n.has(e.fileId) ? [{
		file: Pr("part4_night_review", "corrected"),
		row: 0,
		key: n.get(e.fileId),
		column: `corrected values: ${e.notApplied}`,
		reason: "not_computed_for_export"
	}] : []);
}
function ao(e) {
	return vo(e, lo.ggirReport).ggirResultsBundles.flatMap((e) => {
		const t = Ye(e.imported, e.part2Reports);
		return t ? [{
			file: Pr("part4_night_review", "default"),
			row: 0,
			key: e.recordingFile,
			column: t,
			reason: "source_reported_missing"
		}] : [];
	});
}
const oo = {
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
}, lo = {
	sleep: eo,
	nonwear: eo,
	summary: eo,
	wide: eo,
	circadian: {
		files: Ja,
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
	ggirReport: to,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: Ya,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: [
			...Ja,
			"sourceType",
			"sourceProfileId"
		],
		markers: Ya,
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
		files: Ja,
		markers: Ya,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: no,
	audit: oo,
	physicalActivity: {
		files: [
			...Ja,
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
		markers: Ya,
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
}, co = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ new WeakMap();
function po(e, t, n, r) {
	for (let i = 0; i < n.byteLength;) {
		const s = n.subarray(i, i + nr), a = e[t](s, { at: r + i });
		if (!Number.isInteger(a) || a <= 0 || a > s.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		i += a;
	}
}
function mo(e) {
	if (!e || "object" != typeof e) return e;
	const t = uo.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return po(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(mo) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, mo(t)])) : structuredClone(e);
}
function go(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(go), Object.freeze(e)), e;
}
async function fo(e, t = B(), n = {}) {
	const r = await Oo(null, "computing the corrected GGIR values", () => async function(e, t, n = {}) {
		const r = ka();
		return r?.request ? r.request(ba(e), n.signal ? { signal: n.signal } : {}, () => xa(e, t, n, !1)) : xa(e, t, n, !1);
	}(t, e, {
		signal: n.signal,
		onProgress: (e, t) => n.progress?.(e, t, "Computing corrected values"),
		...n.workerPool ? { workerPool: n.workerPool } : {}
	})), { username: i } = n, s = void 0 === i ? void 0 : await Oo(null, "updating the GGIR night reviews", () => Va(t, e, i, r, {
		signal: n.signal,
		...n.workerPool ? { workerPool: n.workerPool } : {}
	}));
	return n.progress?.(0, 0, ir), Oo(null, "checking the export inputs", () => async function(e, t = B(), n = {}) {
		const r = /* @__PURE__ */ new Map();
		for (const m of (n.readPlan ?? Object.keys(lo)).map((e) => lo[e])) for (const [e, t] of Object.entries(m)) {
			const n = e;
			r.set(n, /* @__PURE__ */ new Set([...r.get(n) ?? [], ...t]));
		}
		if (!r.size) {
			const e = Object.freeze({ files: Object.freeze([]) });
			return co.set(e, {}), e;
		}
		let i = 268435456;
		const s = (e) => {
			if (e instanceof ArrayBuffer ? i -= e.byteLength : "string" == typeof e ? i -= 2 * e.length : e && "object" == typeof e ? Object.values(e).forEach(s) : i -= 8, i < 0) throw new Xn("Export snapshot exceeds 256 MiB. Select fewer recordings or a narrower workspace before exporting.");
		};
		let a = 0;
		const o = /* @__PURE__ */ new Map(), l = (e, t, n) => {
			const r = Object.freeze({});
			return po(e, "write", t, a), uo.set(r, {
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
		}, { ggirBinaries: u } = n, d = await t.transaction("r", [...r.keys()].map((e) => t[e]), async () => {
			const n = r.has("files") ? await me(t, e.length ? { onlyFileIds: e } : void 0) : [], i = new Set(n.flatMap((e) => e.id ? [e.id] : [])), s = {};
			return await Promise.all([...r].map(async ([e, r]) => {
				const a = (e) => Object.fromEntries([...r].filter((t) => t in e).map((t) => [t, c(e[t])]));
				if (s[e] = [], "files" === e) return void (s[e] = n.map((e) => a(e)));
				const o = "diaryEntries" === e ? t.diaryEntries : ue(t, e), l = "studySettings" === e ? o.where("key").equals("study") : o.where("fileId").anyOf([...i]);
				await m(l, (t) => {
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
		}), p = new Set((d.ggirResultsBundles ?? []).map((e) => e.fileId));
		d.markers = (d.markers ?? []).map((e) => p.has(e.fileId) && "invalid" === Oe(void 0, xe(e)).kind ? {
			...e,
			isInvalidNight: !0
		} : e);
		const g = function(e) {
			const t = Object.freeze({ files: go((e.files ?? []).map((e) => Object.fromEntries(Ja.map((t) => [t, mo(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
			return co.set(t, e), t;
		}(d);
		return function(e, t) {
			const n = co.get(e);
			if (!n.ggirResultsBundles) return;
			const r = new Set(n.ggirResultsBundles.map((e) => e.fileId));
			if (void 0 === t) return void (n.ggirCorrectedValues && (n.ggirCorrectedValues = n.ggirCorrectedValues.filter((e) => !r.has(e.fileId))));
			const i = new Map((n.files ?? []).map((e) => [e.id, e.ggirBundleRevision])), s = new Map((n.ggirCorrectedValues ?? []).map((e) => [e.fileId, e]));
			n.ggirCorrectedValues = n.ggirResultsBundles.flatMap((e) => {
				if (!t) return e.ggirCorrections && !e.stock ? [] : [{
					fileId: e.fileId,
					key: "",
					notApplied: ro
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
const ho = [
	"sleep",
	"circadian",
	"ggirReport",
	"event",
	"physicalActivity"
];
var _o = class extends Error {};
function wo(e, t, n) {
	const r = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new _o(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (r(t), Reflect.get(e, t, n)),
		has: (e, t) => (r(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (r(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function vo(e, t, n = []) {
	const r = co.get(e);
	if (!r) throw new _o("Export requires a captured input snapshot");
	const i = Object.entries(lo).find(([, e]) => e === t)?.[0];
	if (!i) throw new _o("Export producer has no registered input declaration");
	const s = {};
	for (const [a, o] of Object.entries(t)) {
		const e = r[a].filter((e) => !n.length || "studySettings" === a || n.includes("files" === a ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const r of o.filter((e) => e in t)) Object.defineProperty(n, r, {
				enumerable: !0,
				get: () => go(mo(t[r]))
			});
			return wo(n, o, `${i}: undeclared field ${a}.`);
		});
		Object.assign(s, { [a]: Object.freeze(e) });
	}
	return wo(s, Object.keys(t), `${i}: undeclared table `);
}
function yo(e, t, n) {
	const r = /* @__PURE__ */ new Map();
	for (const i of e.markers) {
		if (i.fileId !== t || i.username !== n) continue;
		const e = xe(i), s = r.get(i.date) ?? [];
		s.push(e), r.set(i.date, s);
	}
	return r;
}
function bo(e, t, n) {
	return new Map([...yo(e, t, n)].sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => [e, ve(t)]));
}
function ko(e, t, n) {
	return new Map([...yo(e, t, n)].flatMap(([e, t]) => {
		const n = ve(t.filter(c));
		return n ? [[e, n]] : [];
	}));
}
const xo = /* @__PURE__ */ new WeakMap(), Mo = 4;
function So(e, t, n, r) {
	let i = xo.get(e);
	i || (i = /* @__PURE__ */ new Map(), xo.set(e, i));
	const s = JSON.stringify([t, n]);
	let a = i.get(s);
	if (!a) {
		for (; i.size >= Mo;) i.delete(i.keys().next().value);
		a = async function(e, t, n, r) {
			const i = vo(e, lo.ggirReport, [t]), s = i.files.find((e) => e.id === t), a = i.ggirResultsBundles.find((e) => e.fileId === t), o = a && y(a, i.ggirResultsBlobs.find((e) => e.fileId === t)), l = yo(i, t, n), c = o ? await Da(t, o.imported, l, s.ggirClockSteps, r) : void 0, u = c?.markersByAlgo ?? l, d = c?.selected ?? new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), p = new Set([...d].filter(([, e]) => "invalid" === Oe(void 0, e).kind).map(([e]) => e)), m = i.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n), g = {
				review: m,
				bundleRevision: s.ggirBundleRevision
			}, f = o ? await Ka(o, d, s.ggirClockSteps, c?.edits, r, g) : void 0, h = f ? await To(f, p, r) : void 0, _ = i.ggirCorrectedValues.find((e) => e.fileId === t), w = m?.corrected && _ && m.corrected.key === _.key ? {
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
				bundle: h,
				sets: o && f ? await Promise.all(qe(o, _, _?.notApplied !== ro).map(async ({ set: e, bundle: t }) => t === o ? h : To(await Ka(t, d, s.ggirClockSteps, f.edits, r, "corrected" === e ? w : void 0), p, r))) : [],
				invalidDates: p
			};
		}(e, t, n, r), i.set(s, a), a.catch(() => {
			i.get(s) === a && i.delete(s);
		});
	}
	return a;
}
let Io;
async function To(e, t, n) {
	const { ggirCell: r, ggirNum: i } = await import("./ggir-results-types-CCrcBspX.js").then((e) => e.i), s = e.part2Reports?.["part2_daysummary.csv"], a = /* @__PURE__ */ new Map();
	if (s) for (let u = 0; u < s.rows; u++) {
		const e = r(s, ne.ggir_id.header, u), t = Wr(r(s, ne.ggir_calendar_date.header, u));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		a.set(n, a.has(n) ? null : u);
	}
	const o = zr(e.imported, "nights"), l = ne.ggir_nonwear_perc_spt.header, c = async (t) => {
		const c = t.nights, u = Array.from({ length: c.rows }, (e, t) => {
			const n = r(c, ne.ggir_id.header, t), l = a.get(JSON.stringify([null == n ? null : String(n), o(c, t, !1)])), u = s && null != l;
			return {
				id: n,
				day: l,
				valid: u ? r(s, ne.ggir_day_valid_hours.header, l) : null,
				hours: u ? r(s, ne.ggir_day_hours.header, l) : null,
				validNumber: u ? i(s, ne.ggir_day_valid_hours.header, l) : null,
				hoursNumber: u ? i(s, ne.ggir_day_hours.header, l) : null
			};
		}), d = u.flatMap((e, t) => null != e.validNumber && null != e.hoursNumber ? [{
			index: t,
			valid: e.validNumber,
			hours: e.hoursNumber
		}] : []), p = /* @__PURE__ */ new Map();
		if (d.length > 0) {
			const e = await q(n).ggirDayValidFractions(Float64Array.from(d, (e) => e.valid), Float64Array.from(d, (e) => e.hours));
			d.forEach((t, n) => p.set(t.index, e[n] ?? null));
		}
		const m = !c.columns.includes(l) && u.some((e, n) => !t.nightRecomputed[n]) ? await function(e, t) {
			const n = e.cleanedNightsCsv;
			if (!n) return Promise.resolve(void 0);
			if (Io?.csv !== n || Io.config !== e.configCsv) {
				const r = q(t).readGgirReportCsv(n, e.configCsv);
				Io = {
					csv: n,
					config: e.configCsv,
					table: r
				}, r.catch(() => {
					Io?.table === r && (Io = void 0);
				});
			}
			return Io.table;
		}(e, n) : void 0, g = u.map(({ id: e, day: n, valid: a, hours: o, validNumber: u, hoursNumber: d }, g) => {
			const f = p.get(g) ?? null, h = i(c, ne.ggir_night.header, g), _ = Array.from({ length: t.days.rows }, (e, t) => t).find((e) => "WW" === r(t.days, "window", e) && i(t.days, "night_number", e) === h), w = m ? Array.from({ length: m.rows }, (e, t) => t).find((t) => String(r(m, ne.ggir_id.header, t)) === String(e) && i(m, ne.ggir_night.header, t) === h) : void 0, v = {
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
		}), f = X.ggir_review_night_extension, h = [.../* @__PURE__ */ new Set([
			...c.columns,
			...f.map((e) => ne[e].header),
			...f.map((e) => ne[e].header + "_missing_reason")
		])], _ = h.map((e) => {
			const t = f.find((t) => ne[t].header + "_missing_reason" === e);
			if (t) return g.map((e) => e.reasons[t] ?? null);
			const n = f.find((t) => ne[t].header === e);
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
		...e.personReports && (e.edits.length > 0 || t.size > 0) ? { personRecomputed: await qr(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await c(e.imported),
		...e.current ? { current: await c(e.current) } : {}
	};
}
function Ao(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function Ro(e) {
	return vo(e, lo.manifest).studySettings.flatMap((e) => pe(e).map((e) => ({
		file: "sleep_export.csv",
		row: 0,
		key: e.filename,
		column: `${e.category}: ${e.reason}`,
		reason: "not_computed_for_export"
	})));
}
const Eo = "not included", Co = "included if produced";
function No(e) {
	const t = e.artifacts ?? null, r = t ? null : e.planned ?? null, i = e.columns, s = t ? t.sleepRows.length : r?.sleepRows ?? null, o = t ? t.sleepRows.filter((e) => e.markerType === d.MAIN_SLEEP).length : r?.mainSleepRows ?? null, l = t ? $s(t.sleepRows).size : r?.wideRows ?? null, c = t ? t.summaryRows.length : r?.summaryRows ?? null, u = t ? t.nonwearRows.length : r?.nonwearRows ?? null, p = t ? t.physicalActivityRows.length : r?.activityRows ?? null, m = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : r?.activityDates ?? null, g = t ? t.eventMarkerRows?.length ?? 0 : r?.eventMarkerRows ?? null, f = t ? t.actiwareIntervalRows?.length ?? 0 : r?.actiwareIntervalRows ?? null, h = t ? t.actiwareSleepWakeCsv?.rows ?? 0 : r?.actiwareSleepWakeRows ?? null, _ = r?.actogramFiles ?? null, w = t ? Object.keys(t.ggirEntries) : null, v = (w ? w.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
		const r = Math.max(0, n(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
		return {
			name: e,
			include: r > 0,
			rows: r
		};
	}) : r ? [...ai([...r.part4Rows.keys()])].map(([e, t]) => ({
		name: t,
		include: r.ggirMainSleepGroupKeys.includes(e),
		rows: r.part4Rows.get(e) ?? null
	})) : []).sort((e, t) => e.name.localeCompare(t.name)), y = w ? w.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [ri, ...r?.ggirReviewEntries ?? []], b = (e) => null == e ? null : e > 0, k = (n, r, s) => {
		const a = null == r ? "unknown" : r ? "included" : "not_included";
		return "included" !== a ? {
			name: n,
			state: a,
			rows: null,
			detail: "unknown" === a ? s.detail : Eo,
			estimatedBytes: 0,
			write: null
		} : {
			name: n,
			state: a,
			rows: s.rows,
			detail: s.detail,
			estimatedBytes: s.estimatedBytes ?? ((s.rows ?? 0) + 1) * (s.columns ?? i) * 12,
			write: t ? () => s.csv ? mi(s.csv(t)) : s.encode(t) : null,
			...t && (s.chunkField || s.wide) ? { batches: function* () {
				if (s.wide) {
					const e = Os(t.sleepRows, !0), n = e.next().value;
					for (const t of e) {
						const e = n + "\n" + t;
						yield {
							bytes: mi(e),
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
						}, a = !e.selectedColumns?.length || "sleepRows" !== s.chunkField && "nonwearRows" !== s.chunkField ? void 0 : Fs(i[s.chunkField], void 0, !0), o = s.csv(i);
						yield {
							bytes: mi(o),
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
		k("sleep_export.csv", b(s), {
			rows: s,
			detail: null == s ? Co : `${String(s)} rows · ${String(i)} columns`,
			chunkField: "sleepRows",
			csv: (t) => Fs(t.sleepRows, e.selectedColumns ?? void 0, !0)
		}),
		k("sleep_export_wide.csv", !!e.includeWideFormat && b(l ?? o), {
			rows: l,
			detail: null == l ? Co : `${String(l)} participant group ${1 === l ? "row" : "rows"}`,
			wide: !0,
			csv: (e) => function(e, t = !1) {
				return [...Os(e, t)].join("\n");
			}(e.sleepRows, !0)
		}),
		k("summary_export.csv", b(c ?? o), {
			rows: c,
			detail: null == c ? Co : `${String(c)} participant ${1 === c ? "row" : "rows"}`,
			chunkField: "summaryRows",
			csv: (e) => function(e, t = !1) {
				const r = Ls("summary_csv", e, Ss, void 0, t), i = [
					"summary_mean_temperature_c",
					"sleep_regularity_index",
					...Object.values(Ms).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
				];
				return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? n(r).records.map((t, n) => 0 === n ? t.text + "," + i.map((e) => ne[e].header + "_missing_reason").join(",") : t.text + "," + i.map((t) => {
					const r = e[n - 1];
					return "summary_mean_temperature_c" === t ? null == r.meanTemperature ? r.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? r.sleepRegularityMissingReason ?? "" : r.metricMissingReasons?.[t] ?? "";
				}).join(",")).join("\n") : r;
			}(e.summaryRows, !0)
		}),
		k("nonwear_export.csv", b(u), {
			rows: u,
			detail: null == u ? Co : `${String(u)} periods`,
			chunkField: "nonwearRows",
			csv: (t) => Fs(t.nonwearRows, e.selectedColumns ?? void 0, !0)
		}),
		k("event_markers_export.csv", b(g), {
			rows: g,
			detail: null == g ? Co : `${String(g)} button ${1 === g ? "press" : "presses"}`,
			columns: Zs.length,
			chunkField: "eventMarkerRows",
			csv: (e) => function(e, t = !1) {
				const n = [[...Zs, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
				for (const r of e) n.push([
					r.filename,
					r.participantId ?? "",
					r.studyDate,
					ta(r.localTimestamp),
					null == r.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (r.localTimestamp - 60 * r.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
					...t ? [r.participantId ? "" : "source_reported_missing", null == r.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
				].map((e) => a(e)).join(","));
				return `${n.join("\n")}\n`;
			}(e.eventMarkerRows ?? [], !0)
		}),
		k("actiware_intervals_export.csv", b(f), {
			rows: f,
			detail: null == f ? Co : `${String(f)} Actiware intervals`,
			columns: zs.length,
			chunkField: "actiwareIntervalRows",
			csv: (e) => Ys(e.actiwareIntervalRows ?? [], !0)
		}),
		k(ia, b(h), {
			rows: h,
			detail: null == h ? Co : `${String(h)} Actiware Sleep/Wake epochs`,
			columns: sa.length,
			encode: (e) => e.actiwareSleepWakeCsv.bytes
		}),
		k("physical_activity_export.csv", b(p), {
			rows: p,
			detail: null == p || null == m ? Co : `${String(p)} rows · ${String(m)} distinct dates`,
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
				]), a = e.some((e) => "ggir_enmo" === e.method) ? Ma.filter((e) => !i.has(e) && (yr.has(e) || s.has(e))) : [], o = [
					"Participant ID",
					"Threshold Preset Name",
					"Inclusion Rule Preset Name",
					"Scored Username",
					"Source Content Hash",
					"Validation Notes",
					"Notes"
				], l = [[
					...Ma.filter((e) => !i.has(e)),
					...a.map((e) => `${e}_missing_reason`),
					...r ? [
						"Epoch Length Seconds",
						"Native Epoch Seconds",
						"Mask Overlap Epochs"
					].map((e) => e + "_missing_reason") : [],
					...o.map((e) => e + "_missing_reason")
				].join(",")];
				for (const c of e) {
					const e = Ta(c), t = null == c.sedentaryMinutes || !n && null == c.excludedNonwearMinutes ? null : c.sedentaryMinutes + (n ? 0 : c.excludedNonwearMinutes), u = [
						Sa(c.filename),
						Sa(c.participantId),
						Sa(c.analysisDate),
						Sa(c.method),
						Sa(c.methodLabel),
						Sa(c.methodFamily),
						Sa(c.requiredSignalContract),
						Sa(c.computationOwner),
						String(c.frontendComputesMetric),
						Sa(c.sourceSignal),
						Sa(c.status),
						Sa(c.methodRule),
						Sa(c.thresholdSource),
						Sa(c.thresholdPresetName),
						Ia(c.sedentaryMax),
						Ia(c.lightMin),
						Ia(c.moderateMin),
						Ia(c.vigorousMin),
						Ia(t),
						Ia(c.lightMinutes),
						Ia(c.moderateMinutes),
						Ia(c.vigorousMinutes),
						Ia(c.mvpaMinutes),
						Ia(c.mimsUnitTotal),
						null == c.epochLengthSeconds ? "" : String(c.epochLengthSeconds),
						String(c.epochsReviewed),
						Ia(c.wakeWearMinutes),
						Ia(c.excludedNonwearMinutes),
						Ia(c.excludedMainSleepMinutes),
						Ia(c.excludedNapMinutes),
						null == c.maskOverlapEpochs ? "" : String(c.maskOverlapEpochs),
						null == c.mvpaBouts ? "" : String(c.mvpaBouts),
						Ia(c.mvpaBoutMinutes),
						null == c.sedentaryBouts ? "" : String(c.sedentaryBouts),
						null == c.sedentaryBreaks ? "" : String(c.sedentaryBreaks),
						Ia(c.meanSedentaryBoutMinutes),
						null == c.nativeEpochSeconds ? "" : String(c.nativeEpochSeconds),
						String(c.epochMismatch),
						Sa(c.inclusionRulePresetName),
						String(c.maskExcludeNonwear),
						String(c.maskExcludeMainSleep),
						String(c.maskExcludeNaps),
						String(c.maskUseManualNonwear),
						String(c.maskUseAlgorithmNonwear),
						Sa(c.maskNonwearDetector),
						Ia(c.maskMinimumWakeWearMinutes),
						Sa(c.scoredUsername),
						Sa(c.sourceContentHash),
						Sa(c.exportedAt),
						Sa(e.status),
						Sa(e.notes),
						Sa(c.notes)
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
						const t = u[Ma.indexOf(e)];
						if ("ggir_enmo" !== c.method || "" !== t) return "";
						if (yr.has(e)) {
							const t = d[e];
							return null != t && Number.isFinite(t) ? "" : "source_reported_missing";
						}
						return s.has(e) && null == p[e] ? "not_computed_for_export" : "";
					}), g = r ? [
						["Epoch Length Seconds", null == c.epochLengthSeconds && "ggir_enmo" === c.method ? "not_applicable_to_row" : ""],
						["Native Epoch Seconds", null == c.nativeEpochSeconds ? "not_applicable" === c.thresholdSource ? "not_applicable_to_row" : "source_reported_missing" : ""],
						["Mask Overlap Epochs", null == c.maskOverlapEpochs ? "ggir_enmo" === c.method ? "not_applicable_to_row" : "needs_signal" === c.status ? "channel_unavailable" : "backend_required" === c.status ? "not_computed_for_export" : "" : ""]
					].map(([e, t]) => "" === u[Ma.indexOf(e)] ? t : "") : [];
					l.push([
						...u.filter((e, t) => !i.has(Ma[t])),
						...m,
						...g,
						...o.map((e) => "" !== u[Ma.indexOf(e)] ? "" : [
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
			detail: null == n ? Co : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
			columns: 40,
			encode: (t) => t.ggirEntries[e]
		})),
		...y.map((e) => k(e, !(!w && !r?.ggirReviewEntries.includes(e)) || (null == _ ? null : _ > 0), {
			rows: null,
			detail: e.endsWith(".html") ? null == _ ? w ? "1 report" : Co : `1 report · ${String(_)} ${1 === _ ? "file" : "files"}` : "1 GGIR report artifact",
			encode: (t) => t.ggirEntries[e]
		})),
		{
			name: Er,
			state: "included",
			rows: null,
			detail: "1 reason per missing cell",
			estimatedBytes: 2048 + (t?.actiwareSleepWakeCsv?.reasonChunks.reduce((e, t) => e + t.byteLength, 0) ?? r?.actiwareMissingReasonBytes ?? 0),
			write: null
		},
		k("codebook.csv", !0, {
			rows: Is.length,
			detail: `${String(Is.length)} definitions`,
			estimatedBytes: new TextEncoder().encode(Es()).length,
			encode: () => mi(Es(void 0, !0))
		}),
		{
			name: rr,
			state: "included",
			rows: null,
			detail: "1 manifest · run, settings, entry hashes",
			estimatedBytes: 2048,
			write: null
		}
	];
}
async function $o(e, t, r, i = {}) {
	const { signal: s } = i;
	s?.throwIfAborted(), i.progress?.(0, 0, ir);
	const o = await fo(t.fileIds, e, {
		...i,
		signal: s,
		username: t.username
	}), l = function(e, t, r, i) {
		const s = [], o = [], l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = [], d = Ie(/* @__PURE__ */ new Date()), p = (e) => {
			for (const t of e.charts) u.push({
				key: t.key,
				pid: t.pid,
				charts: t.charts.length
			}), o.push(ui(o.length, t));
			for (const [t, n] of e.csvLinesByAlgo) c.set(t, w(n[0]));
			for (const [t, n] of e.headers) l.set(t, Ur(l.get(t) ?? [], n));
			s.push({
				csvLinesByAlgo: e.csvLinesByAlgo,
				ggirReviews: e.ggirReviews
			});
		};
		async function* m(e, t) {
			for (const n of s) i?.throwIfAborted(), yield fi(n, {
				signal: i,
				names: t,
				layouts: l,
				only: e
			}).then((t) => t[e]);
		}
		return {
			add: p,
			addFiles: async (n) => {
				for (const s of n) p(await hi({
					username: e,
					dateRange: t,
					snapshot: r,
					generatedAt: d
				}, s, i));
			},
			streamEntries: function* () {
				const e = ai([...c.keys()]);
				for (const [t, n] of c) l.set(e.get(t), n);
				for (const t of [...l.keys()].filter(Fr)) {
					const e = l.get(t);
					e && l.set(t, [
						...e.filter((e) => !e.endsWith("_missing_reason") && !jr.includes(e)),
						...jr,
						...e.filter((e) => e.endsWith("_missing_reason") && !jr.some((t) => e === t + "_missing_reason")),
						...jr.map((e) => e + "_missing_reason")
					]);
				}
				for (const [t, r] of l) yield {
					name: t,
					chunks: async function* () {
						yield mi(r.map(a).join(",") + "\n");
						for await (const r of m(t, e)) {
							if (!r) continue;
							const e = new TextDecoder().decode(r), t = n(e).records[0], i = mi(e.slice(t.text.length + 1));
							for (let n = 0; n < i.byteLength; n += nr) yield i.subarray(n, n + nr);
						}
					}()
				};
				u.length && (yield {
					name: ri,
					chunks: async function* () {
						yield* pi(function(e, t) {
							const n = e.map((e) => e.key), r = e.reduce((e, t) => e + t.charts, 0);
							return `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${ni(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${ni(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${r} chart${1 !== r ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${ni(e[n].pid)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`;
						}(u, d));
						for await (const { bytes: e, lengths: t } of async function* () {
							for (const { blob: e, lengths: t } of o) i?.throwIfAborted(), yield e.arrayBuffer().then((e) => ({
								bytes: new Uint8Array(e),
								lengths: t
							}));
						}()) {
							let n = 0;
							for (const r of t) yield e.subarray(n, n += r);
						}
						for (const e of di) yield* pi(e);
					}()
				});
			},
			generatedAt: d
		};
	}(t.username, t.dateRange, o, s), u = [];
	for (const n of o.files) {
		const e = u.at(-1);
		e?.[0]?.filename === n.filename ? e.push(n) : u.push([n]);
	}
	const p = [], m = [], f = [];
	let h = !1;
	const _ = t.manifest.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), v = i.groups ?? {
		size: 1,
		run: (e, t, n) => async function(e, t, n, { signal: r } = {}) {
			r?.throwIfAborted();
			const i = e.files.filter((e) => t.includes(e.id)), s = i.map((e) => e.id), a = /* @__PURE__ */ new Map();
			let o = !1;
			try {
				const t = await function(e, { fileIds: t, dateRange: n, signal: r }) {
					const i = vo(e, lo.circadian, t);
					return async function(e, t, { dateRange: n, signal: r }) {
						const i = q(r), s = [];
						let a = 0;
						for (const o of e) {
							if (!o.id) continue;
							r?.throwIfAborted();
							const e = await t(o.id), l = [];
							for (const t of e.values()) {
								if (r?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
								a += 1;
								const e = rn(o.id, t);
								e && l.push(e);
							}
							if (0 === l.length) continue;
							const { request: c, transfer: u } = nn(l.map((e) => e.wire)), d = await i.computeCircadian(S(c, u));
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
					}(t.length > 0 ? i.files.filter((e) => null != e.id && t.includes(e.id)) : i.files, (e) => Ao(i, e), {
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
				if (m instanceof _o) throw m;
				if (r?.throwIfAborted(), o = !0, m instanceof DOMException && "AbortError" === m.name) throw m;
			}
			const l = await Oo(i[0].filename, "computing its sleep rows", () => async function(e, t, n, r, i, s, a) {
				const o = i && i.trim().length > 0 ? i.trim() : null, l = vo(s, lo.sleep, e), u = l.files, p = On(l.studySettings[0]?.extraSettings), m = je(l.studySettings[0]?.extraSettings?.analysis_paradigm), f = (e.length > 0 ? u.filter((t) => null != t.id && e.includes(t.id)) : [...u]).sort((e, t) => e.filename.localeCompare(t.filename)), [h, _] = n ?? ["", ""], w = [], v = [], y = [], b = [], k = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), M = async () => {
					for (const [e, t] of k) x.set(e, await bs(e, t, w, a));
					k.clear();
				}, S = /* @__PURE__ */ new Map(), I = (e) => {
					const t = JSON.stringify(e);
					let n = S.get(t);
					return n || (n = q(a).exportNapAggregate(e), S.set(t, n)), n;
				}, T = await Promise.all(f.map((e) => So(s, e.id, t, a)));
				for (const [R, E] of f.entries()) {
					if (a?.throwIfAborted(), R > 0 && f[R - 1].filename !== E.filename && await M(), !E.id) continue;
					const e = Ao(l, E.id), { bundle: t, markersByAlgo: i } = T[R], s = t?.edits ?? [], u = t ? Je(t.imported) : [], { zone: x } = await Pn(E, p, a), S = [.../* @__PURE__ */ new Set([...E.availableDates, ...u.map((e) => e.nightDate)])].sort(), A = n ? S.filter((e) => e >= h && e <= _) : S;
					if (t) {
						const e = new Set(Ze(t.imported).map((e) => e.night));
						for (const n of u) {
							if (e.has(n.night) || !A.includes(n.nightDate)) continue;
							const r = Oe(n, i.get(n.nightDate)?.[0]).kind;
							"scored" !== r && "invalid" !== r && y.push({
								file: "sleep_export.csv",
								row: 0,
								key: `${ne.filename.header}=${E.filename}|${ne.study_date.header}=${n.nightDate}`,
								column: `GGIR night ${String(n.night)}: ${Xe(t.imported, n.night)}`,
								reason: "ggir_night_excluded"
							});
						}
					}
					const C = fe(e.values()), N = De(E, m) ? l.actiwareFileData.find((e) => e.fileId === E.id) ?? null : null, $ = N?.actiwareIntervals ?? null, O = A.flatMap((e) => (i.get(e) ?? []).filter((e) => c(e) || e.nonwearMarkers.length > 0).map((t) => ({
						markers: t,
						sleepPeriods: $ ? Zi($, e, t.isInvalidNight) : t.sleepMarkers,
						nonwear: t.nonwearMarkers.map((e) => ({
							start: e.startTimestamp,
							end: e.endTimestamp
						}))
					}))), j = [...e.keys()].sort().map((t) => e.get(t)), B = j.map((e) => ge(e).timestamps), D = ls.flatMap((e) => {
						if (!j.some((t) => t[e])) return [];
						const t = [], n = [];
						for (const [r, i] of j.entries()) {
							const s = i[e];
							if (!s) continue;
							const a = new Float64Array(s), o = B[r];
							for (let e = 0; e < Math.min(a.length, o.length); e++) t.push(o[e]), n.push(a[e]);
						}
						return [{
							field: e,
							timestamps: Float64Array.from(t),
							values: Float64Array.from(n)
						}];
					}), P = 0 === O.length ? [] : await q(a).exportFileNightFigures(O.map(({ sleepPeriods: e, nonwear: t }) => ({
						periods: e.map((e) => ({
							start: e.onsetTimestamp,
							end: e.offsetTimestamp
						})),
						nonwear: t
					})), D), L = /* @__PURE__ */ new Map();
					let F = 0;
					for (const n of O) L.set(n.markers, {
						...n,
						figures: P.slice(F, F + n.sleepPeriods.length)
					}), F += n.sleepPeriods.length;
					for (const n of A) {
						a?.throwIfAborted();
						const l = i.get(n);
						if (l && 0 !== l.length) for (const i of l) {
							const l = L.get(i);
							if (!l) continue;
							const { sleepPeriods: c, figures: p } = l, m = E.participantId ?? null, f = E.id, h = i.algorithm ?? null, _ = i.username ?? null, y = i.needsConsensus, M = i.notes, S = e.get(n), T = await se(n, E.navigationFacts, q(a)), A = e.get(T), R = {
								fileId: f,
								filename: E.filename,
								participantId: m,
								studyDate: n,
								algorithm: h,
								scoredBy: _,
								needsConsensus: y,
								notes: M,
								meanTemperature: null,
								meanWhiteLight: null,
								meanRedLight: null,
								meanGreenLight: null,
								meanBlueLight: null,
								detectionRule: i.detectionRule ?? null,
								periodGuider: i.periodGuider ?? null,
								...hs(i.sleepPeriodDetectionConfig),
								algorithmVersion: i.algorithmVersion ?? null,
								verificationStatus: null,
								studyId: o,
								markerStepSeconds: g(h, E.epochLengthSeconds),
								dstTransition: await st(x, n, void 0, q(a))
							}, O = await I(c.filter((e) => e.markerType === d.NAP).map((e) => ({
								start: e.onsetTimestamp,
								end: e.offsetTimestamp
							}))), j = r?.get(`${String(f)}|${n}`), B = {
								l5Hour: j?.l5Hour ?? null,
								m10Hour: j?.m10Hour ?? null,
								napCount: O.napCount,
								totalNapMinutes: O.napCount > 0 ? O.totalNapMinutes : null
							}, P = C(h), F = Cn(S, P), W = `${E.filename}\0${m ?? ""}\0${R.algorithm ?? ""}\0${R.detectionRule ?? ""}`, z = k.get(W) ?? [];
							z.push({
								date: n,
								epochLengthSeconds: E.epochLengthSeconds || 60,
								timestamps: F.timestamps,
								states: F.algorithmResults,
								stale: "stale" === P.status
							}), k.set(W, z);
							const G = ge(S), V = await Jn(e, n, P, {
								signal: a,
								nextDate: T
							}), U = p.map(({ means: e }) => new Map(D.map(({ field: t }, n) => [t, e[n] ?? null]))), H = async (e, r, o) => {
								let l = null;
								const c = u.find((e) => e.nightDate === n), m = t && c && e.markerType === d.MAIN_SLEEP && "invalid" !== Oe(c, i).kind, g = c && s.some((e) => e.night === c.night), f = _s(null), h = {};
								let _ = "not_applicable_to_row";
								const w = $ && null != e.onsetTimestamp && null != e.offsetTimestamp ? {
									onset: e.onsetTimestamp,
									offset: e.offsetTimestamp
								} : null, v = w ? $.find((e) => "rest" === e.kind && e.startTimestamp <= w.onset && e.endTimestamp >= w.offset) ?? null : null;
								if (w) {
									_ = "not_computed_for_export";
									const e = (e, t) => t ? N?.actiwareStatistics?.find((n) => n.kind === e && Math.round(n.startTimestamp) === Math.round(t.startTimestamp) && Math.round(n.endTimestamp) === Math.round(t.endTimestamp)) ?? null : null, t = {
										rest: e("rest", v),
										sleep: e("sleep", {
											startTimestamp: w.onset,
											endTimestamp: w.offset
										})
									};
									for (const [n, r, i, s] of vs) {
										const e = t[r]?.[i] ?? null;
										f[n] = e, h[s] = null == e ? t[r] ? "source_reported_missing" : "not_computed_for_export" : void 0;
									}
								}
								if (!m && !w && e.onsetTimestamp && e.offsetTimestamp) {
									const { timestamps: t, algorithmResults: n, activity: r, scoresStale: i } = V;
									if (null !== i && 0 === b.length && b.push({
										component: "metric_computation",
										code: "unavailable",
										message: i
									}), _ = null !== i ? "scores_from_another_config" : null == n ? "no_scored_epochs" : null == r ? "channel_unavailable" : 0 === t.length ? "no_valid_epochs" : void 0, null != n && t.length > 0 && (null != r || G.ggir)) {
										const i = G.epochSec ?? (E.epochLengthSeconds || 60), s = await ys(n, r, t, e.onsetTimestamp, e.offsetTimestamp, i, a);
										l = s.metrics, l || s.error || (_ = "no_valid_epochs"), s.error && (_ = "not_computed_for_export"), s.error && 0 === b.length && b.push({
											component: "metric_computation",
											code: "unavailable",
											message: "Metric computation failed for at least one selected period; those rows carry no numerics."
										});
									}
								}
								if (m) {
									_ = "channel_unavailable";
									const e = g ? t.current?.nights : t.imported.nights, n = e ? ct(e, ne.ggir_night.header, c.night) : -1;
									for (const [t, r, i, s] of ws) {
										const a = e ? lt(e, ne[r].header, n) : null;
										f[t] = null == a ? null : a * s, h[i] = null == a ? g ? "not_computed_for_export" : "source_reported_missing" : void 0;
									}
								}
								(m || w || l && !("averageAwakeningLengthMinutes" in l)) && (h.average_awakening_length_minutes = "not_computed_for_export");
								const { figures: y } = p[o], k = Boolean(e.onsetTimestamp && e.offsetTimestamp), x = (e) => k ? U[o].get(e) ?? null : null, M = {
									...R,
									...B,
									periodIndex: e.markerIndex,
									markerType: e.markerType,
									onsetTimestamp: e.onsetTimestamp,
									offsetTimestamp: e.offsetTimestamp,
									...m || w ? f : _s(l),
									inBedTimestamp: v?.startTimestamp ?? null,
									outOfBedTimestamp: v?.endTimestamp ?? null,
									metricMissingReason: _,
									isInvalidNight: r,
									meanTemperature: x("temperature"),
									meanWhiteLight: x("lux"),
									meanRedLight: x("redLight"),
									meanGreenLight: x("greenLight"),
									meanBlueLight: x("blueLight"),
									sleepMidpointTimestamp: k ? y.midpointTimestamp : null,
									sleepMidpointHour: k ? y.midpointClockHour : null,
									validWearMinutes: y.validWearMinutes
								}, I = (e, t) => null != e ? void 0 : k ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
								return M.sensorMissingReasons = {
									mean_temperature_c: I(M.meanTemperature, Boolean(S?.temperature || A?.temperature)),
									mean_white_light_lux: I(M.meanWhiteLight, Boolean(S?.lux || A?.lux)),
									mean_red_light: I(M.meanRedLight, Boolean(S?.redLight || A?.redLight)),
									mean_green_light: I(M.meanGreenLight, Boolean(S?.greenLight || A?.greenLight)),
									mean_blue_light: I(M.meanBlueLight, Boolean(S?.blueLight || A?.blueLight))
								}, M.derivedMissingReasons = {
									...h,
									l5_hour: null == M.l5Hour ? j ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									m10_hour: null == M.m10Hour ? j ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									sleep_midpoint_time: null == M.sleepMidpointTimestamp ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									sleep_midpoint_hour: null == M.sleepMidpointHour ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									valid_wear_minutes: null == M.validWearMinutes ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0
								}, M;
							};
							if (i.isInvalidNight) {
								w.push({
									...R,
									...B,
									periodIndex: null,
									markerType: ms,
									onsetTimestamp: null,
									offsetTimestamp: null,
									..._s(null),
									isInvalidNight: !0,
									sleepMidpointTimestamp: null,
									sleepMidpointHour: null,
									validWearMinutes: null
								});
								for (const [e, t] of c.entries()) w.push(await H(t, !0, e));
							} else for (const [e, t] of c.entries()) w.push(await H(t, !1, e));
							for (const e of i.nonwearMarkers) v.push({
								...R,
								...B,
								periodIndex: e.markerIndex ?? 0,
								markerType: gs,
								onsetTimestamp: e.startTimestamp,
								offsetTimestamp: e.endTimestamp,
								..._s(null),
								isInvalidNight: !1,
								sleepMidpointTimestamp: null,
								sleepMidpointHour: null,
								validWearMinutes: null
							});
						}
					}
				}
				await M(), w.sort(ks), v.sort(ks);
				const A = await async function(e, t) {
					const n = e.filter((e) => e.markerType === d.MAIN_SLEEP), r = /* @__PURE__ */ new Map();
					for (const o of n) {
						const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = r.get(e);
						t ? t.push(o) : r.set(e, [o]);
					}
					const i = [...r], s = await q(t).summarizeExportGroups(i.map(([, e]) => e.map((e) => ({
						study_date: e.studyDate,
						total_nap_minutes: e.totalNapMinutes,
						values: xs.map(([, t]) => e[t])
					})))), a = i.map(([e, t], n) => {
						const [r, i, a, o] = e.split("\0"), l = s[n], c = Object.fromEntries(xs.map(([e], t) => [e, l.means[t] ?? null]));
						return {
							filename: r,
							participantId: i,
							algorithm: a,
							detectionRule: o,
							nNights: l.nNights,
							...c,
							meanTemperatureMissingReason: null == c.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
							metricMissingReasons: Object.fromEntries(xs.map(([e, n]) => {
								const r = Ms[e], i = ws.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : r), s = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[i] ?? e.metricMissingReason).find(Boolean);
								return [r, null == c[e] ? s : void 0];
							})),
							sleepRegularityIndex: null,
							meanTotalNapMinutes: l.meanTotalNapMinutes,
							studyId: t[0]?.studyId ?? null
						};
					});
					return a.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), a;
				}(w, a);
				for (const c of A) {
					const e = `${c.filename}\0${c.participantId}\0${c.algorithm}\0${c.detectionRule}`, t = x.get(e);
					c.sleepRegularityIndex = t?.sri ?? null, c.sleepRegularityMissingReason = t?.sriMissingReason ?? (t ? void 0 : "not_computed_for_export");
				}
				return {
					sleepRows: w,
					nonwearRows: v,
					summaryRows: A,
					degradations: b,
					nightReasons: y
				};
			}(s, n.username, n.dateRange, a, n.studyId, e, r)), u = await Oo(i[0].filename, "drawing its visual report", async () => {
				const t = [];
				for (const s of i) t.push(await hi({
					...n,
					snapshot: e
				}, s, r));
				return t;
			}), { generateLocalPhysicalActivityExportRows: p } = await import("./local-physical-activity-export-CMkBqDle.js");
			return {
				part: l,
				physicalActivityRows: await p(e, s, n.dateRange, {
					username: n.username,
					cutpointOverrides: n.physicalActivity.cutpointOverrides,
					maskPolicy: n.physicalActivity.maskPolicy,
					choiAxis: n.physicalActivity.choiAxis,
					exportedAt: n.exportedAt,
					...r ? { signal: r } : {}
				}),
				eventMarkerRows: await ra(s, n.dateRange, e, n.username, r),
				circadianDegraded: o,
				reports: u
			};
		}(e, t, n, { signal: s })
	}, y = {
		username: t.username,
		studyId: t.studyId,
		dateRange: t.dateRange,
		physicalActivity: t.physicalActivity,
		exportedAt: _,
		generatedAt: l.generatedAt
	}, b = u.map(() => {
		const e = {};
		return e.promise = new Promise((t, n) => {
			e.resolve = t, e.reject = n;
		}), e.promise.catch(() => {}), e;
	});
	let k = 0, x = u.length, M = 0;
	i.progress?.(0, u.length, sr), Promise.all(Array.from({ length: Math.min(v.size, u.length) }, async () => {
		for (; k < x;) {
			const t = k++;
			try {
				b[t].resolve(await v.run(o, u[t].map((e) => e.id), y)), i.progress?.(++M, u.length, sr);
			} catch (e) {
				x = Math.min(x, t), b[t].reject(e);
			}
		}
	}));
	try {
		for (const e of b) {
			s?.throwIfAborted();
			const t = await e.promise;
			p.push(t.part);
			for (const e of t.reports) l.add(e);
			m.push(...t.physicalActivityRows), f.push(...t.eventMarkerRows), h ||= t.circadianDegraded;
		}
	} finally {
		x = 0;
	}
	i.progress?.(0, 0, ar), s?.throwIfAborted();
	const I = function(e) {
		return {
			sleepRows: e.flatMap((e) => e.sleepRows),
			nonwearRows: e.flatMap((e) => e.nonwearRows),
			summaryRows: e.flatMap((e) => e.summaryRows),
			degradations: e.flatMap((e) => e.degradations).slice(0, 1),
			nightReasons: e.flatMap((e) => e.nightReasons ?? [])
		};
	}(p), T = await async function(e, t, n, r, i) {
		i?.throwIfAborted();
		const s = vo(n, lo.actiwareInterval, e), a = s.studySettings[0]?.extraSettings?.analysis_paradigm, o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), l = [];
		for (const c of o) {
			i?.throwIfAborted();
			const e = s.actiwareFileData.find((e) => e.fileId === c.id), n = ko(s, c.id, r), o = [...n].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort(), u = s.actiwareStatisticsInputs.find((e) => e.fileId === c.id), d = (e) => q(i).actiwareIntervalStatistics(e), p = De(c, a), m = p ? await es(e?.actiwareIntervals, u?.input, o, d) : await rs({
				file: e ?? {},
				statisticsInput: u?.input
			}, n, d, i);
			i?.throwIfAborted();
			const g = await Us({
				...c,
				...e,
				actiwareStatistics: m ?? []
			}, t, i, p ? { invalidDates: o } : void 0), f = new Set(n.keys()), h = new Set(o.filter((e) => !t || e >= t[0] && e <= t[1]));
			l.push(...Hs(g.filter((e) => f.has(e.studyDate)), h, c));
		}
		return l;
	}(t.fileIds, t.dateRange, o, t.username, s), A = {}, R = function(e) {
		const t = vo(e, lo.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(o);
	R && (A["audit_log.jsonl"] = R);
	const E = async function* (e, t, n, r, i) {
		i?.throwIfAborted();
		const s = vo(n, lo.actiwareSleepWake, e), a = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = a.map((e) => s.actiwareFileData.find((t) => t.fileId === e.id)), l = function(e, t = !1) {
			const n = [[
				...sa,
				"Sleep/Wake_missing_reason",
				"Wake Threshold_missing_reason",
				...t ? ["Participant ID_missing_reason"] : []
			].join(",")];
			for (const r of e) n.push(oa(r, r.epochTimestamp, r.sleepWake, t));
			return `${n.join("\n")}\n`;
		}([], !0);
		let c = [], u = 0, d = 0;
		const p = () => {
			i?.throwIfAborted();
			const e = function(...e) {
				const t = Or(...e), n = [];
				for (;;) {
					const e = t.next();
					if (e.done) return {
						...e.value,
						reasons: n
					};
					n.push(e.value);
				}
			}(l + c.join("\n") + "\n", ia, !0, { rowOffset: u }), t = u ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
				bytes: new TextEncoder().encode(t),
				rows: c.length,
				reasonRows: e.reasons.length,
				reasons: new TextEncoder().encode(Cr(e.reasons, !1))
			};
			return u += c.length, c = [], d = 0, n;
		};
		for (const [m, g] of a.entries()) {
			i?.throwIfAborted();
			const e = o[m]?.actiwareSleepWake;
			if (!e) continue;
			const n = o[m]?.actiwareWakeThreshold, a = null != n && Number.isFinite(n) ? n : null, l = new Int8Array(e.scores), u = await aa(e, t, new Set(ko(s, g.id, r).keys()), q(i));
			i?.throwIfAborted();
			for (const { date: t, start: r, end: i } of u) {
				const n = {
					filename: g.filename,
					participantId: g.participantId ?? null,
					studyDate: t,
					sleepDetection: ze(e.params, "sleep_detection"),
					wakeThresholdSelection: ze(e.params, "wake_threshold_selection"),
					wakeThreshold: a,
					...null === a ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
				};
				for (let t = r; t < i; t += 1) {
					const r = l[t], i = oa(n, e.startTimestamp + t * e.epochSeconds, 0 === r || 1 === r ? r : null, !0);
					if (i.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
					c.push(i), d += i.length, (512 === c.length || d >= 32768) && (yield p());
				}
			}
		}
		c.length && (yield p()), i?.throwIfAborted();
	}(t.fileIds, t.dateRange, o, t.username, s), C = await E.next();
	let N = C.done ? 0 : C.value.rows;
	const $ = async function* () {
		if (!C.done) {
			yield C.value;
			for await (const e of E) N += e.rows, yield e;
		}
	}(), O = vo(o, lo.manifest), j = Object.fromEntries(I.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	h ||= I.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const B = [...h ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...I.degradations], D = function(e, t) {
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
	}(O.ggirResultsBundles, O.ggirCorrectedValues), P = await Oo(null, "reading saved GGIR source provenance", () => async function(e, t = q()) {
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
	}(O.ggirResultsBundles, q(s))), L = [...l.streamEntries()], F = await _a({
		artifacts: {
			importRefusalReasons: [
				...Ro(o),
				...ao(o),
				...so(o),
				...I.nightReasons ?? []
			],
			...I,
			physicalActivityRows: m,
			physicalActivityEnabledClasses: t.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: t.physicalActivity.nonwearAsClass,
			ggirEntries: A,
			eventMarkerRows: f,
			actiwareIntervalRows: T,
			actiwareSleepWakeCsv: {
				rows: N,
				bytes: /* @__PURE__ */ new Uint8Array(),
				reasonChunks: []
			}
		},
		extraEntries: L,
		options: t,
		manifest: {
			...t.manifest,
			physicalActivity: t.physicalActivity,
			exportedAt: _,
			algorithmVersions: j,
			degradations: B,
			ggirSources: P,
			...D,
			executionAttestationIds: O.localExecutions.map((e) => e.attestationId),
			diaryTemporalPolicyByFile: Object.fromEntries(O.files.map((e) => [String(e.id), Object.fromEntries(O.diaryEntries.filter((t) => t.fileId === e.id).map((e) => [e.analysisDate, e.importMappingProvenance?.diaryTemporalPolicy ?? null]))]))
		},
		sleepWake: $,
		scratchId: r,
		...s ? { signal: s } : {},
		...v.deflate ? { deflate: v.deflate } : {},
		...v.hash ? { hash: v.hash } : {},
		...i.progress ? { progress: i.progress } : {}
	});
	return {
		...F,
		actiwareSleepWakeRows: N,
		degradations: B,
		ggirCorrected: io(D),
		hasData: I.sleepRows.length > 0 || I.nonwearRows.length > 0 || m.length > 0 || F.entries.some((e) => L.some((t) => t.name === e.name)) || Object.keys(A).length > 0,
		rowCount: I.sleepRows.length + I.nonwearRows.length + I.summaryRows.length + m.length,
		dayCount: (/* @__PURE__ */ new Set([
			...I.sleepRows.map((e) => e.studyDate),
			...I.nonwearRows.map((e) => e.studyDate),
			...m.map((e) => e.analysisDate)
		])).size,
		fileCount: o.files.length
	};
}
async function Oo(e, t, n) {
	try {
		return await n();
	} catch (r) {
		if (r instanceof DOMException && "AbortError" === r.name) throw r;
		throw new er(e, t, r);
	}
}
function jo(e, t = /* @__PURE__ */ new Set()) {
	if (e instanceof ArrayBuffer) t.add(e);
	else if (ArrayBuffer.isView(e)) t.add(e.buffer);
	else if (e && "object" == typeof e) for (const n of Object.values(e)) jo(n, t);
	return [...t];
}
function Bo(e) {
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
				const e = new Worker(new URL("/sleep-scoring-wasm/assets/local-export-shard-worker-BgYpqsVt.js", "" + import.meta.url), { type: "module" });
				return e.addEventListener("error", a), e.addEventListener("messageerror", a), t.push(e), Promise.resolve(k(e));
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
					const n = co.get(e);
					if (!n) throw new _o("Export requires a captured input snapshot");
					const r = new Set(ho.flatMap((e) => Object.keys(lo[e])));
					return Object.fromEntries([...r].map((e) => [e, (n[e] ?? []).filter((n) => "studySettings" === e || t.includes("files" === e ? n.id : n.fileId)).map(mo)]));
				}(e, t), s = await r.group(t, S(i, jo(i)), n);
				if ("failure" in s) throw er.fromWire(s.failure);
				return s.result;
			}),
			deflate: {
				lanes: e,
				block: (e, t) => o((n) => n.deflate(S(e, [e.buffer]), S(t, [t.buffer])))
			}
		},
		terminate: () => {
			for (const e of t) e.terminate();
		}
	};
}
b({ async build(e, t, n, r) {
	const i = new _(e), s = Bo(Math.max(1, Math.min(8, (navigator.hardwareConcurrency || 2) - 2))), a = function() {
		let e;
		return {
			hash: () => {
				const { api: t } = e ??= x({ singleThread: !0 });
				return function(e) {
					const t = [], n = (e) => {
						e.catch(() => {}), t.push(e);
					};
					return n(e.sha256Start()), {
						async hashChunk(r, i) {
							i?.throwIfAborted(), n(e.sha256Feed(r.slice())), t.length > 8 && await t.shift();
						},
						hexDigest: async (n) => (await Promise.all(t.splice(0)), n?.throwIfAborted(), e.sha256Finish())
					};
				}({
					sha256Start: () => t.sha256Start(),
					sha256Feed: (e) => t.sha256Feed(S(e, [e.buffer])),
					sha256Finish: () => t.sha256Finish()
				});
			},
			terminate: () => {
				e?.terminate();
			}
		};
	}();
	let o;
	try {
		return o = await (await (await (await (await navigator.storage.getDirectory()).getDirectoryHandle(Qn, { create: !0 })).getDirectoryHandle(n, { create: !0 })).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await i.open(), await $o(i, t, n, {
			...r ? { progress: r } : {},
			binaryStore: o,
			groups: {
				...s.runner,
				hash: a.hash
			}
		});
	} catch (l) {
		if (l instanceof er) return { failure: l.wire };
		throw l;
	} finally {
		s.terminate(), a.terminate(), o?.close(), i.close();
	}
} });
export { nn as A, _i as C, Hn as D, Un as E, Pn as O, Di as S, Vn as T, Fi as _, Aa as a, Ii as b, ts as c, Qi as d, es as f, bi as g, os as h, bo as i, rn as j, jn as k, ns as l, is as m, vo as n, Wa as o, as as p, Ao as r, zi as s, lo as t, Zi as u, yi as v, qn as w, Pi as x, Li as y };
