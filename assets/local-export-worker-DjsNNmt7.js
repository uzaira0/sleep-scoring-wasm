import { E as e, Jt as t, Kt as n, Lt as r, M as i, On as s, Ot as a, Pn as o, Yt as l, _ as c, a as u, c as d, f as p, in as m, j as g, jn as f, o as h, qt as _, s as w, u as v } from "./schema-BhIoHe9M.js";
import { a as y, c as b, n as k, r as x, s as M } from "./workers-DmTzGLlL.js";
import { J as S, K as I, M as T, W as A, c as R, dt as E, h as C, l as N, q as $, st as O, t as j } from "./workspace-db-B23VU-DP.js";
import { d as B, l as D, n as P, s as L } from "./content-hash-D4_ZE65l.js";
import { _ as F, a as W, d as z, g as G, l as V, n as U, t as H } from "./background-jobs-BuvVRgh1.js";
import { n as q, o as K, r as J } from "./raw-pass-pool-C2qtsXn3.js";
import { A as Y, D as Z, E as Q, M as X, N as ee, O as te, P as ne, _ as re, f as ie, j as se, k as ae } from "./nonwear-display-slots-BFsz5AaU.js";
import { a as oe } from "./project-revision-BjsdF3mV.js";
import { F as le, G as ce, Jt as ue, N as de, P as pe, Wt as me, Yt as ge, en as fe, jt as he, k as _e, q as we, sn as ve, tn as ye, x as be } from "./store-B8Nrfol3.js";
import { F as ke, W as xe, d as Me, f as Se, g as Ie } from "./night-session-registry-IIptBbXj.js";
import { B as Te, I as Ae, R as Re, f as Ee, h as Ce, i as Ne, m as $e, n as Oe, o as je, r as Be, t as De, v as Pe } from "./per-source-defaults-aJZ8Uk6V.js";
import { _ as Le, a as Fe, d as We, i as ze, m as Ge, o as Ve, p as Ue, t as He, u as qe, y as Ke } from "./ggir-results-import-DhqbPZWT.js";
import { B as Je, E as Ye, I as Ze, L as Qe, N as Xe, R as et, c as tt } from "./local-nonwear-unified-M0U_VgvH.js";
import { r as nt } from "./physical-activity-cutpoint-presets-CsW2oUjX.js";
import { h as rt, m as it, v as st } from "./diary-local-import-contract-CEvMmocM.js";
import { n as at, r as ot, t as lt } from "./ggir-results-types-CLFzM135.js";
var ct = Uint8Array, ut = Uint16Array, dt = Int32Array, pt = new ct([
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
]), mt = new ct([
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
]), gt = new ct([
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
]), ft = function(e, t) {
	for (var n = new ut(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
	var i = new dt(n[30]);
	for (r = 1; r < 30; ++r) for (var s = n[r]; s < n[r + 1]; ++s) i[s] = s - n[r] << 5 | r;
	return {
		b: n,
		r: i
	};
}, ht = ft(pt, 2), _t = ht.b, wt = ht.r;
_t[28] = 258, wt[258] = 28;
for (var vt = ft(mt, 0), yt = (vt.b, vt.r), bt = new ut(32768), kt = 0; kt < 32768; ++kt) {
	var xt = (43690 & kt) >> 1 | (21845 & kt) << 1;
	xt = (61680 & (xt = (52428 & xt) >> 2 | (13107 & xt) << 2)) >> 4 | (3855 & xt) << 4, bt[kt] = ((65280 & xt) >> 8 | (255 & xt) << 8) >> 1;
}
var Mt = function(e, t, n) {
	for (var r = e.length, i = 0, s = new ut(t); i < r; ++i) e[i] && ++s[e[i] - 1];
	var a, o = new ut(t);
	for (i = 1; i < t; ++i) o[i] = o[i - 1] + s[i - 1] << 1;
	if (n) {
		a = new ut(1 << t);
		var l = 15 - t;
		for (i = 0; i < r; ++i) if (e[i]) for (var c = i << 4 | e[i], u = t - e[i], d = o[e[i] - 1]++ << u, p = d | (1 << u) - 1; d <= p; ++d) a[bt[d] >> l] = c;
	} else for (a = new ut(r), i = 0; i < r; ++i) e[i] && (a[i] = bt[o[e[i] - 1]++] >> 15 - e[i]);
	return a;
}, St = new ct(288);
for (kt = 0; kt < 144; ++kt) St[kt] = 8;
for (kt = 144; kt < 256; ++kt) St[kt] = 9;
for (kt = 256; kt < 280; ++kt) St[kt] = 7;
for (kt = 280; kt < 288; ++kt) St[kt] = 8;
var It = new ct(32);
for (kt = 0; kt < 32; ++kt) It[kt] = 5;
var Tt = Mt(St, 9, 0), At = Mt(It, 5, 0), Rt = function(e) {
	return (e + 7) / 8 | 0;
}, Et = function(e, t, n) {
	return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new ct(e.subarray(t, n));
}, Ct = [
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
], Nt = function(e, t, n) {
	var r = new Error(t || Ct[e]);
	if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, Nt), !n) throw r;
	return r;
}, $t = function(e, t, n) {
	n <<= 7 & t;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8;
}, Ot = function(e, t, n) {
	n <<= 7 & t;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8, e[r + 2] |= n >> 16;
}, jt = function(e, t) {
	for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({
		s: r,
		f: e[r]
	});
	var i = n.length, s = n.slice();
	if (!i) return {
		t: zt,
		l: 0
	};
	if (1 == i) {
		var a = new ct(n[0].s + 1);
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
	var m = new ut(p + 1), g = Bt(n[u - 1], m, 0);
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
		t: new ct(m),
		l: g
	};
}, Bt = function(e, t, n) {
	return -1 == e.s ? Math.max(Bt(e.l, t, n + 1), Bt(e.r, t, n + 1)) : t[e.s] = n;
}, Dt = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new ut(++t), r = 0, i = e[0], s = 1, a = function(e) {
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
}, Pt = function(e, t) {
	for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
	return n;
}, Lt = function(e, t, n) {
	var r = n.length, i = Rt(t + 2);
	e[i] = 255 & r, e[i + 1] = r >> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
	for (var s = 0; s < r; ++s) e[i + s + 4] = n[s];
	return 8 * (i + 4 + r);
}, Ft = function(e, t, n, r, i, s, a, o, l, c, u) {
	$t(t, u++, n), ++i[256];
	for (var d = jt(i, 15), p = d.t, m = d.l, g = jt(s, 15), f = g.t, h = g.l, _ = Dt(p), w = _.c, v = _.n, y = Dt(f), b = y.c, k = y.n, x = new ut(19), M = 0; M < w.length; ++M) ++x[31 & w[M]];
	for (M = 0; M < b.length; ++M) ++x[31 & b[M]];
	for (var S = jt(x, 7), I = S.t, T = S.l, A = 19; A > 4 && !I[gt[A - 1]]; --A);
	var R, E, C, N, $ = c + 5 << 3, O = Pt(i, St) + Pt(s, It) + a, j = Pt(i, p) + Pt(s, f) + a + 14 + 3 * A + Pt(x, I) + 2 * x[16] + 3 * x[17] + 7 * x[18];
	if (l >= 0 && $ <= O && $ <= j) return Lt(t, u, e.subarray(l, l + c));
	if ($t(t, u, 1 + (j < O)), u += 2, j < O) {
		R = Mt(p, m, 0), E = p, C = Mt(f, h, 0), N = f;
		var B = Mt(I, T, 0);
		for ($t(t, u, v - 257), $t(t, u + 5, k - 1), $t(t, u + 10, A - 4), u += 14, M = 0; M < A; ++M) $t(t, u + 3 * M, I[gt[M]]);
		u += 3 * A;
		for (var D = [w, b], P = 0; P < 2; ++P) {
			var L = D[P];
			for (M = 0; M < L.length; ++M) {
				var F = 31 & L[M];
				$t(t, u, B[F]), u += I[F], F > 15 && ($t(t, u, L[M] >> 5 & 127), u += L[M] >> 12);
			}
		}
	} else R = Tt, E = St, C = At, N = It;
	for (M = 0; M < o; ++M) {
		var W = r[M];
		if (W > 255) {
			Ot(t, u, R[257 + (F = W >> 18 & 31)]), u += E[F + 257], F > 7 && ($t(t, u, W >> 23 & 31), u += pt[F]);
			var z = 31 & W;
			Ot(t, u, C[z]), u += N[z], z > 3 && (Ot(t, u, W >> 5 & 8191), u += mt[z]);
		} else Ot(t, u, R[W]), u += E[W];
	}
	return Ot(t, u, R[256]), u + E[256];
}, Wt = new dt([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), zt = new ct(0), Gt = function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, r = 9; --r;) n = (1 & n && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), Vt = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
}, Ut = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new ct(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, r, i) {
			if (!i && (i = { l: 1 }, t.dictionary)) {
				var s = t.dictionary.subarray(-32768), a = new ct(s.length + e.length);
				a.set(s), a.set(e, s.length), e = a, i.w = s.length;
			}
			return function(e, t, n, r, i, s) {
				var a = s.z || e.length, o = new ct(r + a + 5 * (1 + Math.ceil(a / 7e3)) + i), l = o.subarray(r, o.length - i), c = s.l, u = 7 & (s.r || 0);
				if (t) {
					u && (l[0] = s.r >> 3);
					for (var d = Wt[t - 1], p = d >> 13, m = 8191 & d, g = (1 << n) - 1, f = s.p || new ut(32768), h = s.h || new ut(g + 1), _ = Math.ceil(n / 3), w = 2 * _, v = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, y = new dt(25e3), b = new ut(288), k = new ut(32), x = 0, M = 0, S = s.i || 0, I = 0, T = s.w || 0, A = 0; S + 2 < a; ++S) {
						var R = v(S), E = 32767 & S, C = h[R];
						if (f[E] = C, h[R] = E, T <= S) {
							var N = a - S;
							if ((x > 7e3 || I > 24576) && (N > 423 || !c)) {
								u = Ft(e, l, 0, y, b, k, M, I, A, S - A, u), I = x = M = 0, A = S;
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
								y[I++] = 268435456 | wt[O] << 18 | yt[j];
								var H = 31 & wt[O], q = 31 & yt[j];
								M += pt[H] + mt[q], ++b[257 + H], ++k[q], T = S + O, ++x;
							} else y[I++] = e[S], ++b[e[S]];
						}
					}
					for (S = Math.max(S, T); S < a; ++S) y[I++] = e[S], ++b[e[S]];
					u = Ft(e, l, c, y, b, k, M, I, A, S - A, u), c || (s.r = 7 & u | l[u / 8 | 0] << 3, u -= 7, s.h = h, s.p = f, s.i = S, s.w = T);
				} else {
					for (S = s.w || 0; S < a + c; S += 65535) {
						var K = S + 65535;
						K >= a && (l[u / 8 | 0] = c, K = a), u = Lt(l, u + 1, e.subarray(S, K));
					}
					s.i = a;
				}
				return Et(o, 0, r + Rt(u) + i);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? i.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, n, r, i);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || Nt(5), this.s.l && Nt(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var r = new ct(-32768 & n);
				r.set(this.b.subarray(0, this.s.z)), this.b = r;
			}
			var i = this.b.length - this.s.z;
			this.b.set(e.subarray(0, i), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(i), 32768), this.s.z = e.length - i + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = zt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || Nt(5), this.s.l && Nt(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new ct(6);
			t[0] = this.s.r >> 3;
			var n = Lt(t, this.s.r, zt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), Ht = "undefined" != typeof TextEncoder && new TextEncoder(), qt = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	qt.decode(zt, { stream: !0 });
} catch (Oo) {}
function Kt(e, t) {
	if (t) {
		for (var n = new ct(e.length), r = 0; r < e.length; ++r) n[r] = e.charCodeAt(r);
		return n;
	}
	if (Ht) return Ht.encode(e);
	var i = e.length, s = new ct(e.length + (e.length >> 1)), a = 0, o = function(e) {
		s[a++] = e;
	};
	for (r = 0; r < i; ++r) {
		if (a + 5 > s.length) {
			var l = new ct(a + 8 + (i - r << 1));
			l.set(s), s = l;
		}
		var c = e.charCodeAt(r);
		c < 128 || t ? o(c) : c < 2048 ? (o(192 | c >> 6), o(128 | 63 & c)) : c > 55295 && c < 57344 ? (o(240 | (c = 65536 + (1047552 & c) | 1023 & e.charCodeAt(++r)) >> 18), o(128 | c >> 12 & 63), o(128 | c >> 6 & 63), o(128 | 63 & c)) : (o(224 | c >> 12), o(128 | c >> 6 & 63), o(128 | 63 & c));
	}
	return Et(s, 0, a);
}
var Jt = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var r = e[n].length;
		r > 65535 && Nt(9), t += r + 4;
	}
	return t;
}, Yt = function(e, t, n, r, i, s, a, o) {
	var l = r.length, c = n.extra, u = o && o.length, d = Jt(c);
	Vt(e, t, null != a ? 33639248 : 67324752), t += 4, null != a && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (s < 0 && 8), e[t++] = i && 8, e[t++] = 255 & n.compression, e[t++] = n.compression >> 8;
	var p = new Date(null == n.mtime ? Date.now() : n.mtime), m = p.getFullYear() - 1980;
	if ((m < 0 || m > 119) && Nt(10), Vt(e, t, m << 25 | p.getMonth() + 1 << 21 | p.getDate() << 16 | p.getHours() << 11 | p.getMinutes() << 5 | p.getSeconds() >> 1), t += 4, -1 != s && (Vt(e, t, n.crc), Vt(e, t + 4, s < 0 ? -s - 2 : s), Vt(e, t + 8, n.size)), Vt(e, t + 12, l), Vt(e, t + 14, d), t += 16, null != a && (Vt(e, t, u), Vt(e, t + 6, n.attrs), Vt(e, t + 10, a), t += 14), e.set(r, t), t += l, d) for (var g in c) {
		var f = c[g], h = f.length;
		Vt(e, t, +g), Vt(e, t + 2, h), e.set(f, t + 4), t += 4 + h;
	}
	return u && (e.set(o, t), t += u), t;
}, Zt = function() {
	function e(e) {
		var t;
		this.filename = e, this.c = (t = -1, {
			p: function(e) {
				for (var n = t, r = 0; r < e.length; ++r) n = Gt[255 & n ^ e[r]] ^ n >>> 8;
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
		this.ondata || Nt(5), this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1);
	}, e;
}(), Qt = function() {
	function e(e) {
		this.ondata = e, this.u = [], this.d = 1;
	}
	return e.prototype.add = function(e) {
		var t = this;
		if (this.ondata || Nt(5), 2 & this.d) this.ondata(Nt(4 + 8 * (1 & this.d), 0, 1), null, !1);
		else {
			var n = Kt(e.filename), r = n.length, i = e.comment, s = i && Kt(i), a = r != e.filename.length || s && i.length != s.length, o = r + Jt(e.extra) + 30;
			r > 65535 && this.ondata(Nt(11, 0, 1), null, !1);
			var l = new ct(o);
			Yt(l, 0, e, n, a, -1);
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
					var s = new ct(16);
					Vt(s, 0, 134695760), Vt(s, 4, e.crc), Vt(s, 8, g), Vt(s, 12, e.size), c.push(s), m.c = g, m.b = o + g + 16, m.crc = e.crc, m.size = e.size, d && m.r(), d = 1;
				} else d && u();
			}, this.u.push(m);
		}
	}, e.prototype.end = function() {
		var e = this;
		2 & this.d ? this.ondata(Nt(4 + 8 * (1 & this.d), 0, 1), null, !0) : (this.d ? this.e() : this.u.push({
			r: function() {
				1 & e.d && (e.u.splice(-1, 1), e.e());
			},
			t: function() {}
		}), this.d = 3);
	}, e.prototype.e = function() {
		for (var e = 0, t = 0, n = 0, r = 0, i = this.u; r < i.length; r++) n += 46 + (m = i[r]).f.length + Jt(m.extra) + (m.o ? m.o.length : 0);
		for (var s, a, o, l, c, u = new ct(n + 22), d = 0, p = this.u; d < p.length; d++) {
			var m = p[d];
			Yt(u, e, m, m.f, m.u, -m.c - 2, t, m.o), e += 46 + m.f.length + Jt(m.extra) + (m.o ? m.o.length : 0), t += m.b;
		}
		s = u, a = e, o = this.u.length, l = n, c = t, Vt(s, a, 101010256), Vt(s, a + 8, o), Vt(s, a + 10, o), Vt(s, a + 12, l), Vt(s, a + 16, c), this.ondata(null, u, !0), this.d = 2;
	}, e.prototype.terminate = function() {
		for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
		this.d = 2;
	}, e;
}();
function Xt(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function en(e) {
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
function tn(e, t) {
	const n = function(e) {
		const t = Xt(e.ggirTimestamps), n = Xt(e.ggirEnmo);
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
const nn = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], rn = ["under-series", "over-series"], sn = ["full-resolution-v1", "min-max-gap-envelope-v1"], an = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function on(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function ln(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? on(t, "expected an object") : e;
}
function cn(e, t) {
	return Array.isArray(e) ? e : on(t, "expected an array");
}
function un(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : on(t, "expected a finite number");
}
function dn(e, t) {
	const n = un(e, t);
	return n <= 0 ? on(t, "expected a positive number") : n;
}
function pn(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : on(t, "expected a safe integer");
}
function mn(e, t) {
	const n = pn(e, t);
	return n < 0 ? on(t, "expected a non-negative safe integer") : n;
}
function gn(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? on(t, "expected a boolean") : { [n]: e };
}
function fn(e, t) {
	return "string" != typeof e || 0 === e.length ? on(t, "expected a non-empty string") : e;
}
function hn(e, t) {
	return "string" == typeof e && nn.includes(e) ? e : on(t, "expected a supported tone");
}
function _n(e, t) {
	return "string" == typeof e && rn.includes(e) ? e : on(t, "expected a supported phase");
}
function wn(e, t) {
	const n = ln(e, t), r = un(n.min, `${t}.min`), i = un(n.max, `${t}.max`);
	return i <= r || !Number.isFinite(i - r) ? on(t, "expected a finite ascending range") : {
		min: r,
		max: i
	};
}
function vn(e, t) {
	const n = `series[${t}]`, r = ln(e, n), i = cn(r.points, `${n}.points`);
	let s = Number.NEGATIVE_INFINITY;
	const a = (e) => `${n}.points[${e}]`, o = i.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return on(a(t), "expected an object");
		const n = e, r = n.timestamp;
		if ("number" != typeof r || !Number.isFinite(r)) return on(`${a(t)}.timestamp`, "expected a finite number");
		if (r <= s) return on(`${a(t)}.timestamp`, "expected strictly ascending timestamps");
		s = r;
		const i = n.value;
		return null === i || "number" == typeof i && Number.isFinite(i) ? {
			timestamp: r,
			value: i
		} : on(`${a(t)}.value`, "expected a finite number");
	});
	return {
		tone: hn(r.tone, `${n}.tone`),
		strokeWidth: dn(r.strokeWidth, `${n}.strokeWidth`),
		valueDomain: wn(r.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function yn(e, t) {
	const n = `overlays[${t}]`, r = ln(e, n), i = {
		phase: _n(r.phase, `${n}.phase`),
		order: pn(r.order, `${n}.order`),
		tone: hn(r.tone, `${n}.tone`)
	};
	if ("interval" === r.kind) {
		const e = un(r.startTimestamp, `${n}.startTimestamp`), t = un(r.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? on(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...i,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === r.kind ? {
		kind: "threshold",
		...i,
		value: un(r.value, `${n}.value`),
		...gn(r.draggable, `${n}.draggable`, "draggable"),
		...gn(r.selected, `${n}.selected`, "selected"),
		...gn(r.handle, `${n}.handle`, "handle"),
		...void 0 === r.label ? {} : { label: fn(r.label, `${n}.label`) }
	} : "instant" === r.kind ? {
		kind: "instant",
		...i,
		timestamp: un(r.timestamp, `${n}.timestamp`)
	} : on(`${n}.kind`, "expected interval, threshold, or instant");
}
function bn(e, t, n) {
	const r = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(r) ? r : on("projection", "expected a finite pixel coordinate");
}
function kn(e, t, n) {
	const r = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(r) ? r : on("projection", "expected a finite pixel coordinate");
}
function xn(e) {
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
function Mn(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Sn(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, r = t.plotArea.height, i = an[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const s = Mn(bn(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), a = Mn(bn(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${xn(s)}" y="0" width="${xn(Math.max(1, a - s))}" height="${xn(r)}" fill="${i}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const s = kn(e.value, t.valueDomain, r), a = !0 === e.selected, o = a ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${a ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${xn(s)}" x2="${xn(n)}" y2="${xn(s)}" stroke="${i}" stroke-width="${a ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const s = bn(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${xn(s)}" y1="0" x2="${xn(s)}" y2="${xn(r)}" stroke="${i}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function In(e) {
	const t = function(e) {
		const t = ln(e, "scene");
		if (2 !== t.version) return on("version", "expected 2");
		const n = ln(t.grid, "grid"), r = {
			strategy: (i = n.strategy, "string" == typeof i && sn.includes(i) ? i : on("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: mn(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: mn(n.renderedPointCount, "grid.renderedPointCount")
		};
		var i;
		if (r.renderedPointCount > r.sourcePointCount) return on("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === r.strategy && r.renderedPointCount !== r.sourcePointCount) return on("grid", "full-resolution strategy requires equal point counts");
		const s = ln(t.size, "size"), a = {
			width: dn(s.width, "size.width"),
			height: dn(s.height, "size.height")
		}, o = ln(t.plotArea, "plotArea"), l = {
			left: un(o.left, "plotArea.left"),
			top: un(o.top, "plotArea.top"),
			width: dn(o.width, "plotArea.width"),
			height: dn(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > a.width || l.top + l.height > a.height) return on("plotArea", "expected bounds contained by size");
		const c = wn(t.viewport, "viewport"), u = wn(t.valueDomain, "valueDomain"), d = cn(t.series, "series").map(vn);
		if (0 === d.length && 0 !== r.renderedPointCount) return on("grid.renderedPointCount", "expected zero when series is empty");
		const p = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let h = 0; h < d.length; h++) {
			const e = d[h]?.points ?? [];
			if (e.length !== r.renderedPointCount) return on(`series[${h}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== p[t]) return on(`series[${h}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const m = cn(t.overlays, "overlays").map(yn), g = null === t.cursorTimestamp ? null : un(t.cursorTimestamp, "cursorTimestamp");
		let f = null;
		if (null !== t.selection) {
			const e = ln(t.selection, "selection"), n = un(e.startTimestamp, "selection.startTimestamp"), r = un(e.endTimestamp, "selection.endTimestamp");
			if (r <= n) return on("selection", "expected a half-open ascending interval");
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
	}(e), n = xn(t.size.width), r = xn(t.size.height), i = xn(t.plotArea.width), s = xn(t.plotArea.height), a = Sn(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
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
			const t = bn(o.timestamp, n.viewport, s);
			let l = a.get(o.value);
			void 0 === l && (l = xn(kn(o.value, e.valueDomain, n.plotArea.height)), a.set(o.value, l)), r += `${i ? "L" : "M"}${xn(t)} ${l}`, i = !0;
		}
		return 0 === r.length ? "" : `<path data-series-index="${t}" d="${r}" fill="none" stroke="${an[e.tone]}" stroke-width="${xn(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = Sn(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${r}" viewBox="0 0 ${n} ${r}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${r}" fill="#ffffff"/><svg x="${xn(t.plotArea.left)}" y="${xn(t.plotArea.top)}" width="${i}" height="${s}" viewBox="0 0 ${i} ${s}" overflow="hidden"><rect x="0" y="0" width="${i}" height="${s}" fill="#ffffff"/>${a}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = Mn(bn(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), r = Mn(bn(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${xn(n)}" y="0" width="${xn(Math.max(1, r - n))}" height="${xn(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = bn(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${xn(n)}" y1="0" x2="${xn(n)}" y2="${xn(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${xn(t.plotArea.left)}" y="${xn(t.plotArea.top)}" width="${i}" height="${s}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
async function Tn(e, t, n, r, i = 60, s, a) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == r || n >= r) return null;
	const o = new Uint8Array(e.length);
	for (let c = 0; c < e.length; c++) o[c] = 1 === e[c] ? 1 : 0;
	const l = await An(o, s && s.length === e.length ? s : new Float64Array(e.length), t, n, r, i, a);
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
async function An(e, t, n, r, i, s = 60, a) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == r || null == i || r >= i) return null;
	const o = await async function(e, t, n, r) {
		const i = await H(r).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === i.length ? {
			startIdx: i[0],
			endIdx: i[1]
		} : null;
	}(n, r, i, a);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, c = o.endIdx + 1, u = e instanceof Uint8Array ? e.slice(l, c) : new Uint8Array(e.slice(l, c)), d = t instanceof Float64Array ? t.slice(l, c) : Float64Array.from(t.slice(l, c)), p = await H(a).computeSleepMetrics(u, d, s), m = n[l] ?? 0, g = n[c - 1] ?? m, f = null != p.firstSleepEpochIdx ? n[l + p.firstSleepEpochIdx] ?? m : m, h = null != p.lastSleepEpochIdx ? n[l + p.lastSleepEpochIdx] ?? g : g;
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
function Rn(e, t) {
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
	const l = re(e, t);
	return {
		timestamps: i,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: a,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
const En = /* @__PURE__ */ new Map();
async function Cn(e, t, n = !1) {
	let r = En.get(e);
	const i = void 0 !== r;
	r || (r = H(t).resolveTimezone(e), En.set(e, r));
	try {
		return await r;
	} catch (Nt) {
		return En.get(e) === r && En.delete(e), t?.throwIfAborted(), i && !n ? Cn(e, t, !0) : void console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, Nt);
	}
}
function Nn(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : it();
}
async function $n(e) {
	try {
		return Nn((await le(e))?.extraSettings);
	} catch (Nt) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", Nt), it();
	}
}
function On(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const jn = {
	zone: null,
	reason: null
};
async function Bn(e, t, n) {
	const r = e.ggirTimezone?.trim();
	let i = null;
	if (r) {
		const e = await Cn(r, n);
		if (!e) return jn;
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
	if (null === i) return Te(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : jn;
	const s = await Cn(t, n);
	if (void 0 === s) return jn;
	if ("iana" !== s?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const a = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== a && (await st(s.zone, a, H(n))).includes(i) ? {
		zone: s.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${On(i)} is not a ${s.zone} offset`
	};
}
function Dn(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [r, i] of e.entries()) t[r + 1] = t[r] + i.length;
	const n = new Float64Array(t[e.length]);
	for (const [r, i] of e.entries()) n.set(i, t[r]);
	return [n, t];
}
const Pn = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), Ln = [
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
var Fn = Ln.map(() => Pn);
Object.fromEntries(Ln.map(([e], t) => [e, Fn[t]]));
const Wn = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values(T).filter((e) => ![
		T.choi_2012,
		T.choi_2011,
		T.van_hees_2023,
		T.detach_nonwear
	].some((t) => t === e))
];
async function zn(e, t, n, r) {
	const i = void 0 === t ? n?.window[e] : 48 === t ? n?.view48[e] : void 0;
	if (i) return {
		start: i[0],
		end: i[1]
	};
	const s = await (r ?? x()).analysisWindowBounds(e, t);
	return s ? {
		start: s[0],
		end: s[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function Gn(e, t, n) {
	const r = e instanceof Float64Array ? e : Float64Array.from(e), [i, s] = await (n ?? x()).analysisWindowSlice(r, t);
	return {
		startIndex: i,
		endIndex: s
	};
}
async function Vn(e, t = x()) {
	const n = [...new Set(e)], r = await t.analysisDatesOf(Float64Array.from(n)), i = new Map(n.map((e, t) => [e, r[t] ?? ""]));
	return (e) => i.get(e) ?? "";
}
Object.fromEntries(Object.values(T).map((e) => [e, e === T.ggir_saved ? Ae : Xe(e)]));
var Un = o({
	nightPeriodMetrics: () => Kn,
	spanningSeries: () => qn,
	storeNightPeriodMetrics: () => Jn
});
function Hn(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [r, i] of Object.entries(tt(e, e.nonwearChoiAxis ?? Ye()))) i && (n[t[r] ?? r] = new Uint8Array(i));
	return n;
}
async function qn(e, t, n, r = {}) {
	const { signal: i, includeNonwearMasks: s = !1 } = r, a = e.get(t), o = Rn(a, n), l = s && a ? Hn(a) : {}, c = e.get(r.nextDate ?? await ie(t, void 0, H(i))), u = o.timestamps[o.timestamps.length - 1], d = c ? Rn(c, n) : null, p = d?.timestamps[0], m = void 0 !== c && null !== d && void 0 !== u && void 0 !== p && p > u, g = o.scoresStale ?? d?.scoresStale ?? null;
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
	const v = s ? Hn(c) : {}, y = {};
	for (const b of Wn) {
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
async function Kn(e, t, n, r) {
	const { date: i, file: s, activityMap: a, verdict: o } = t, l = t.spanning ?? await qn(a, i, o, { signal: r });
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
	for (const m of e.sleepMarkers) p.push(d && u.length > 0 && m.onsetTimestamp && m.offsetTimestamp ? await An(d, l.activity ?? new Float64Array(d.length), l.timestamps, m.onsetTimestamp, m.offsetTimestamp, s.epochLengthSeconds || 60, r) : null);
	if (void 0 !== e.id) try {
		await oe(n, [n.markers], () => Ie(e.id, {
			inputs: c,
			metrics: p
		}, n), r);
	} catch {
		r?.throwIfAborted();
	}
	return p;
}
async function Jn(e, t, n, r) {
	const i = await n.files.get(e.fileId);
	if (!i) return;
	const s = /* @__PURE__ */ new Map();
	for (const a of [e.date, await ie(e.date, void 0, H(r))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, a]).first();
		t && s.set(a, t);
	}
	await Kn(e, {
		date: e.date,
		file: i,
		activityMap: s,
		verdict: t
	}, n, r);
}
const Yn = "local-export-streams";
var Zn = class extends Error {
	name = "ExportSnapshotTooLargeError";
	reason = "snapshot_too_large";
}, Qn = class e extends Error {
	file;
	step;
	reason;
	constructor(e, t, n, r = Xn(n)) {
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
function Xn(e) {
	return e instanceof Qn || e instanceof Zn ? e.reason : e instanceof Error ? e.name : typeof e;
}
const er = 65536, tr = "manifest.json", nr = "Checking the export inputs", rr = "Reading recordings", ir = "Writing ZIP";
function sr(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function ar(e) {
	return String(e).padStart(2, "0");
}
function or(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const lr = [
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
new Set(lr.slice(16).map(([e]) => e));
var cr = class extends Error {};
const ur = "edit_recompute_requires_ms2_ms3", dr = /* @__PURE__ */ new Set([
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
]), pr = ae.invalid_night_row.markerTypeCell, mr = new Set(lr.map(([, e]) => e)), gr = /* @__PURE__ */ new Set([
	te.ggir_sleepparam.header,
	te.ggir_guider_onset.header,
	te.ggir_guider_wakeup.header,
	te.ggir_guider_spt_duration.header,
	te.ggir_error_onset.header,
	te.ggir_error_wake.header,
	te.ggir_error_dur.header,
	te.ggir_fraction_night_invalid.header,
	te.ggir_duration_sib_wakinghours.header,
	te.ggir_number_sib_sleepperiod.header,
	te.ggir_number_sib_wakinghours.header,
	te.ggir_duration_sib_wakinghours_atleast15min.header,
	te.ggir_guider_onset_ts.header,
	te.ggir_guider_wakeup_ts.header,
	te.ggir_page.header,
	te.ggir_daysleeper.header,
	te.ggir_sleeplog_id.header,
	te.ggir_guider.header,
	te.ggir_longitudinal_axis.header
]), fr = /* @__PURE__ */ new Set([
	te.ggir_sleep_duration_in_spt.header,
	te.ggir_waso.header,
	te.ggir_number_of_awakenings.header,
	te.ggir_sleeplatency.header,
	te.ggir_sleepefficiency.header
]), hr = /* @__PURE__ */ new Set([
	...fr,
	te.ggir_nonwear_perc_spt.header,
	te.ggir_sleeponset.header,
	te.ggir_wakeup.header,
	te.ggir_spt_duration.header,
	te.ggir_guider_onset.header,
	te.ggir_guider_wakeup.header,
	te.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	te.ggir_sleeponset_ts.header,
	te.ggir_wakeup_ts.header,
	te.ggir_guider_onset_ts.header,
	te.ggir_guider_wakeup_ts.header,
	te.ggir_daysleeper.header,
	te.ggir_cleaningcode.header,
	te.ggir_guider.header,
	te.ggir_error_onset.header,
	te.ggir_error_wake.header,
	te.ggir_error_dur.header,
	te.ggir_fraction_night_invalid.header,
	te.ggir_duration_sib_wakinghours.header,
	te.ggir_number_sib_sleepperiod.header,
	te.ggir_number_sib_wakinghours.header,
	te.ggir_duration_sib_wakinghours_atleast15min.header
]), _r = /* @__PURE__ */ new Set([
	te.ggir_id.header,
	te.ggir_filename.header,
	te.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	te.ggir_sleep_regularity_index1.header,
	te.ggir_sri_fraction_valid.header,
	te.ggir_calendar_date.header,
	te.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	te.ggir_cleaningcode.header,
	te.ggir_guider.header,
	te.ggir_sleeplog_used.header,
	te.ggir_acc_available.header,
	te.ggir_daysleeper.header
]), wr = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), vr = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), yr = new Set(Object.values(te).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), br = new Set(Object.values(te).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), kr = new Set(Object.values(X).map((e) => e.reviewSource)), xr = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim()), Mr = xr, Sr = "refusal_detail_missing_reason";
function Ir(e, t) {
	const n = e(te["start" === t ? "interval_start_date" : "interval_end_date"].header), r = e(te["start" === t ? "interval_start_time" : "interval_end_time"].header);
	return n && r ? `${n}T${r}` : "";
}
function Tr(e, t, n, r) {
	const i = (e) => n.get(e) ?? "", s = i(t + "_missing_reason");
	if (s && !dr.has(s)) return null;
	const o = s || null;
	if (e.startsWith("part2_")) return "source_reported_missing";
	if (e.includes("_ggir_review")) {
		if (o) return o;
		const e = i("review_source");
		return kr.has(e) ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const l = i(te.marker_type.header) === pr || "actiware_intervals_export.csv" === e && i(te.interval_kind.header) === pr;
	if (!function(e, t) {
		return "actiware_intervals_export.csv" === e ? mr.has(t) : "actiware_sleep_wake_export.csv" === e ? t === te.actiware_sleep_wake.header || t === te.actiware_wake_threshold.header : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			te.ggir_id.header,
			te.ggir_filename.header,
			te.ggir_calendar_date.header,
			te.ggir_weekday.header,
			te.ggir_sleeplog_id.header,
			te.ggir_guider_corrected.header,
			te.ggir_cleaningcode.header
		].includes(t) : yr.has(t);
	}(e, t)) return o || (l ? "invalid_night" : "Manual Nonwear" === i(te.marker_type.header) ? "manual_nonwear_period" : null);
	if ("actiware_intervals_export.csv" === e && mr.has(t)) {
		if (l) return "invalid_night";
		const e = i(te.interval_kind.header).toLowerCase(), n = Ir(i, "start");
		if ("daily" === e && n && n === Ir(i, "end")) return "zero_interval_rows";
		if ([
			te.actiware_onset_latency.header,
			te.actiware_efficiency.header,
			te.actiware_waso.header
		].includes(t)) {
			if ("sleep" !== e) return "not_applicable_to_row";
			if (Mr(i(te.actiware_duration.header))) return null;
			const t = Ir(i, "start"), n = Ir(i, "end");
			if (!t || !n) return null;
			let s = !1;
			for (const e of r) if (e.get(te.filename.header) === i(te.filename.header) && "rest" === e.get(te.interval_kind.header) && Ir((t) => e.get(t) ?? "", "start") <= t && n <= Ir((t) => e.get(t) ?? "", "end")) {
				s = !0;
				break;
			}
			return s ? null : "no_eligible_rest";
		}
		if (Mr(i(te.actiware_duration.header))) return null;
		if (t === te.actiware_off_wrist.header || t === te.actiware_off_wrist_percent.header) return t === te.actiware_off_wrist_percent.header && "0.00" === i(te.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === o ? o : null;
		if (t === te.actiware_avg_ac_per_min.header) return 100 === Number(i(te.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			te.actiware_invalid_sw_percent.header,
			te.actiware_wake_percent.header,
			te.actiware_sleep_percent.header
		].includes(t)) {
			if ("0.00" === i(te.actiware_duration.header)) return "zero_interval_rows";
			const e = !Mr(i(te.actiware_wake_time.header)) && !Mr(i(te.actiware_sleep_time.header)) && 0 === Number(i(te.actiware_wake_time.header)) && 0 === Number(i(te.actiware_sleep_time.header));
			return t === te.actiware_invalid_sw_percent.header || 100 !== Number(i(te.actiware_invalid_sw_percent.header)) && !e ? null : "no_scored_epochs";
		}
		const s = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(t);
		if (s) {
			const e = s[1];
			return "0.00" === i(te.actiware_duration.header) ? "zero_interval_rows" : Mr(i("%Invalid " + e)) ? "source_reported_missing" === o ? o : null : t.startsWith("TALT ") && !Mr(i("Exposure " + e)) ? "threshold_unconfigured" : 100 === Number(i("%Invalid " + e)) ? "no_valid_epochs" : null;
		}
		return null;
	}
	if ("actiware_sleep_wake_export.csv" === e) {
		if (t === te.actiware_sleep_wake.header) return "no_valid_epochs" === o ? o : null;
		if (t === te.actiware_wake_threshold.header) return "not_computed_for_export" === o ? o : null;
	}
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return gr.has(t) ? "not_computed_for_export" === o ? o : null : fr.has(t) ? "no_scored_epochs" === o || "not_applicable_to_row" === o || "scores_from_another_config" === o ? o : null : o;
	if ("sleep_export_wide.csv" === e) return o;
	if ("summary_export.csv" === e && t === te.sleep_regularity_index.header) return o && [
		"insufficient_pair",
		"no_scored_epochs",
		"no_valid_epochs",
		"not_computed_for_export",
		"scores_from_another_config"
	].includes(o) ? o : null;
	if ("physical_activity_export.csv" === e) {
		const e = i("Status"), n = i("Method");
		if ([
			"Epoch Length Seconds",
			"Native Epoch Seconds",
			"Mask Overlap Epochs"
		].includes(t)) return "Epoch Length Seconds" === t ? "ggir_enmo" === n ? "not_applicable_to_row" : null : "Native Epoch Seconds" === t ? "not_applicable" === i("Threshold Source") ? "not_applicable_to_row" : "source_reported_missing" === o ? o : null : "ggir_enmo" === n ? "not_applicable_to_row" : "needs_signal" === e ? "channel_unavailable" : "backend_required" === e ? "not_computed_for_export" : null;
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
		const s = a.find((e) => e.method === n);
		return r && s?.cutpoint && !Number.isFinite(s.cutpoint[r]) || "MIMS Unit Total" === t && "mims" !== n ? "not_applicable_to_row" : "ggir_enmo" === n ? wr.has(t) ? "source_reported_missing" === o ? o : null : vr.has(t) && "not_computed_for_export" === o ? o : null : "mims" === n && [
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
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === i(te.marker_type.header) ? "manual_nonwear_period" : null : "true" === i(te.is_invalid_night.header).toLowerCase() && i(te.marker_type.header) === pr ? "invalid_night" : t === te.total_nap_minutes.header && "0" === i(te.nap_count.header) ? "not_applicable_to_row" : [
		te.l5_hour.header,
		te.m10_hour.header,
		te.sleep_midpoint_hour.header,
		te.valid_wear_minutes.header
	].includes(t) ? o && [
		"not_computed_for_export",
		"no_valid_epochs",
		"not_applicable_to_row"
	].includes(o) ? o : null : /^Mean (?:Temperature|White Light|Red Light|Green Light|Blue Light)/u.test(t) ? o && [
		"channel_unavailable",
		"no_valid_epochs",
		"not_applicable_to_row"
	].includes(o) ? o : null : o;
}
const Ar = "missing_reasons.csv";
function Rr(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(r).join(","))].map((e) => e + "\n").join("");
}
function Er(e, t) {
	const n = [
		te.filename.header,
		te.ggir_filename.header,
		"ggir_filename",
		te.participant_id.header,
		te.ggir_id.header,
		te.study_date.header,
		"Analysis Date",
		te.ggir_calendar_date.header,
		"ggir_calendar_date",
		te.interval_kind.header,
		te.marker_type.header,
		te.interval_start_date.header,
		te.interval_start_time.header,
		te.epoch_local.header,
		"Method"
	].flatMap((t) => {
		const n = e.get(t);
		return n ? [t + "=" + n] : [];
	});
	return n.length ? n.join("|") : "row=" + String(t);
}
function Cr(e, t) {
	let n = !1, r = 0;
	for (let i = 0; i < e.length; i += 1) if ("\"" === e[i]) n && "\"" === e[i + 1] ? i += 1 : n = !n;
	else if ("," === e[i] && !n && ++r === t) return e.slice(0, i);
	return e;
}
function* Nr(e, t, r = !0, i) {
	const { headerlessColumns: s, fullRowCsv: a, rowOffset: o = 0, contextRows: l } = i ?? {}, c = s?.length ? s.join(",") + "\n" + e : e, u = _(c);
	if (u.unterminatedQuotedField) throw new Error(t + ": unterminated CSV cell");
	const [d, ...p] = u.records;
	if (!d) return {
		csv: e,
		withReason: 0,
		withoutReason: 0
	};
	const m = n(d.text), g = m.findIndex((e) => e.endsWith("_missing_reason"));
	if (g >= 0 && m.slice(g).some((e) => !e.endsWith("_missing_reason"))) throw new Error(t + ": internal reason fields must trail data fields");
	const f = m.map((e, t) => ({
		header: e,
		index: t
	})).filter(({ header: e }) => "" !== e && !e.endsWith("_missing_reason")), h = p.map((e) => n(e.text)), w = h.map((e) => new Map(m.map((t, n) => [t, e[n] ?? ""]))), v = a ? _(a).records : [], y = v[0] ? n(v[0].text) : [], b = a ? v.slice(1).map((e) => n(e.text)) : [];
	if (a && f.length > 0 && b.length !== h.length) throw new Error(t + ": complete-row evidence count differs");
	const k = a ? b.map((e) => new Map(y.map((t, n) => [t, e[n] ?? ""]))) : w;
	let x = 0, M = 0;
	for (let n = 0; n < h.length; n += 1) {
		const e = h[n], r = w[n];
		for (const { header: s, index: a } of f) {
			if ("edit_recompute_requires_ms2_ms3" === k[n].get(s + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
				yield {
					file: t,
					row: o + n + 1,
					key: Er(r, o + n + 1),
					column: s,
					reason: ur
				}, x += 1;
				continue;
			}
			const i = e[a] ?? "";
			if (!Mr(i) || "" !== i.trim() && br.has(s)) continue;
			const c = Tr(t, s, k[n], l?.() ?? k);
			c ? (x += 1, yield {
				file: t,
				row: o + n + 1,
				key: Er(r, o + n + 1),
				column: s,
				reason: c
			}) : (M += 1, console.warn("WARNING: unreasoned missing export cell"));
		}
		const i = r.get(Sr);
		i && (yield {
			file: t,
			row: o + n + 1,
			key: Er(r, o + n + 1),
			column: i,
			reason: "not_computed_for_export"
		});
	}
	if (r && M > 0) throw new cr(t + ": " + String(M) + " unreasoned missing metric cells");
	return g < 0 ? {
		csv: e,
		withReason: x,
		withoutReason: M
	} : {
		csv: [Cr(d.text, g), ...p.map((e) => Cr(e.text, g))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: x,
		withoutReason: M
	};
}
const $r = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], Or = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : r(String(e)), jr = (se.part4_night_review, se.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function Br(e, t, n = "") {
	return se[e].replace("{report}", n.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${X[t].filenameSuffix}.csv`);
}
const Dr = Object.keys(X).map((e) => Br("person_summary_review", e)), Pr = (e) => Dr.some((t) => e.endsWith(t));
function Lr(e) {
	if ("string" != typeof e) return;
	const n = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(n)) return t(n) ?? void 0;
	const r = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(n);
	return r ? t(`${r[3]}-${r[2].padStart(2, "0")}-${r[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function Fr(e, t) {
	const n = new Map(Ge(e).map((e) => [e.night, e.nightDate]));
	return (e, r, i = !0) => {
		const s = e.columns.indexOf("nights" === t ? te.ggir_night.header : "night_number"), a = Number(e.values[s]?.[r]), o = n.get(a);
		if (i && o) return o;
		const l = e.values[e.columns.indexOf(te.ggir_calendar_date.header)]?.[r];
		return Lr(l);
	};
}
async function Wr(e, t, n, i) {
	const s = "nights" === t ? te.ggir_night.header : "window_number", a = H(n), o = await Promise.all(e.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await ze(e.imported, e.edits, t.night, n)])))), l = (await Promise.all(e.map(async (e, n) => {
		const r = e.current ?? e.imported, i = (e) => "nights" === t ? e.nights : e.days, s = "nights" === t ? r.nightRecomputed : r.dayRecomputed, l = "nights" === t ? e.imported.nightChecks : e.imported.dayChecks, c = o[n].filter((e) => null != e[1]), u = Fr(e.imported, t), d = new Set(e.edits.map((e) => e.night)), p = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, m = /* @__PURE__ */ new Set();
		if ("days" === t && p) {
			const t = await Promise.all(Ge(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), r = t.nightDate, i = n.onset < "12:00:00" ? await ie(r, void 0, a) : r, s = n.wake <= n.onset ? await ie(i, void 0, a) : i;
				return [Math.min(t.onsetMs, Date.parse(`${i}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${s}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: r.days.rows }, async (e, n) => {
				const i = Number(r.days.values[r.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(i)) return void m.add(n);
				const s = u(r.days, n, !1), o = r.days.values[r.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof o ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(o) : null;
				if (!s || !l) return;
				const c = Date.parse(`${s}T${l[1]}Z`), p = l[2] < l[1] ? await ie(s, void 0, a) : s, g = Date.parse(`${p}T${l[2]}Z`);
				t.some(([e, t]) => c <= t && g >= e) && m.add(n);
			}));
		}
		return {
			source: X[jr(e)].reviewSource,
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
	const c = i ? i.filter((e) => !e.endsWith("_missing_reason") && !$r.includes(e)) : [];
	for (const r of i ? [] : l) for (const e of r.table.columns) e.endsWith("_missing_reason") || c.includes(e) || c.push(e);
	const u = new Set("nights" === t ? Q.ggir_review_night_extension.map((e) => te[e].header) : []), d = i ? c.filter((e) => i.includes(e + "_missing_reason")) : c.filter((e) => u.has(e) || l.some((e) => e.editRecomputeUnavailable || e.source === X.corrected.reviewSource)), p = [[
		...c.map(r),
		...$r,
		...d.map((e) => r(e + "_missing_reason")),
		...$r.map((e) => e + "_missing_reason")
	].join(",")], m = (e, t) => {
		const n = e.columns.indexOf(s);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: g, ggir: f, recomputed: h, provenance: _, checks: w, scoredDates: v, invalidDates: y, dateOf: b, editRecomputeUnavailable: k, editedNights: x, editedDayRows: M, savedNights: S, source: I } of l) {
		const e = S.columns.filter((e) => !hr.has(e)), n = e.filter((e) => {
			const t = S.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return S.values[t].some((e, t) => {
				const r = Number(S.values[S.columns.indexOf(te.ggir_night.header)]?.[t]), i = n.has(r) && !Object.is(n.get(r), e);
				return n.set(r, e), i;
			});
		}), i = /* @__PURE__ */ new Set(), s = (e) => Array.from({ length: f.rows }, (e, t) => t).find((t) => !i.has(t) && m(f, t) === m(g, e) && n.every((n) => Object.is(f.values[f.columns.indexOf(n)]?.[t] ?? null, g.values[g.columns.indexOf(n)]?.[e] ?? null))), a = new Set(c.filter((n) => "nights" === t ? hr.has(n) : !_r.has(n) && !e.includes(n))), o = (n, i, s, o) => {
			const l = w.get(m(n, i));
			return [
				...c.map((r) => {
					if ("invalid" === s && ("nights" === t ? hr.has(r) : /sleep|spt|waso|wake|onset|guider/i.test(r) && !e.includes(r))) return "";
					const a = n.columns.indexOf(r);
					return a < 0 ? "" : Or(n.values[a]?.[i]);
				}),
				s,
				l?.status ?? "",
				r((l?.reasons ?? []).join(";")),
				r((l?.diffs ?? []).map((e) => e.column).join(";")),
				r(o),
				...d.map((e) => "invalid" !== s || u.has(e) && e !== te.ggir_nonwear_perc_spt.header ? k && s === I && a.has(e) && ("days" === t ? M.has(i) : x.has(m(n, i))) ? ur : u.has(e) ? null != at(n, e, i) ? "" : Or(lt(n, e + "_missing_reason", i) ?? "source_reported_missing") : s === I ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
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
			if (null != n && i.add(n), e && y?.has(e)) {
				null != n && p.push(o(f, n, I, "")), p.push(o(g, t, "invalid", ""));
				continue;
			}
			if (!h[t]) {
				p.push(o(g, t, I, ""));
				continue;
			}
			const r = m(g, t);
			null != n && p.push(o(f, n, I, "")), p.push(o(g, t, "recomputed", _(r)));
		}
		for (let t = 0; t < f.rows; t += 1) {
			if (i.has(t)) continue;
			const e = b(f, t);
			(!v || e && v.has(e)) && (p.push(o(f, t, I, "")), e && y?.has(e) && p.push(o(f, t, "invalid", "")));
		}
	}
	return p.length > 1 ? `${p.join("\n")}\n` : null;
}
function zr(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const r of e) for (const [e, t] of Object.entries(r.part2Reports ?? {})) {
		const i = Br("part2_report", jr(r), e);
		n.set(i, [...n.get(i) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const i = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], s = [i.map(r).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) s.push(i.map((n) => Or(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, s.join("\n") + "\n"];
	}));
}
function Gr(e, t) {
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
const Vr = (e, t) => Ge(e).filter((e) => t?.has(e.nightDate));
async function Ur(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: ur,
		detail: ""
	};
	const r = e.current ?? e.imported;
	if (void 0 === r.tailExpansion) return {
		reason: "not_computed_for_export",
		detail: "the saved GGIR review predates the core's tail expansion flag; import the folder again"
	};
	const i = H(n);
	try {
		const { ggirVersion: n } = await i.ggirConfigValues(e.configCsv), { profile: s, reports: a } = await i.ggirPersonSummaries({
			ggir_version: n ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: r.nights,
			days: r.days,
			tail_expansion: r.tailExpansion,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(lt(r.nights, te.ggir_id.header, 0) ?? ""),
			invalid_nights: Vr(e.imported, t).map((e) => e.night),
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
async function Hr(e, t, n) {
	const i = /* @__PURE__ */ new Map(), s = await Promise.all(e.map(async (e) => {
		const n = Vr(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (n) => {
			const r = await ze(e.imported, e.edits, n.night, t);
			return null == r ? [] : [`night ${String(n.night)} ${r}`];
		}))).flat(), ...n].join("; ");
	}));
	for (const [r, o] of e.entries()) {
		const e = jr(o), t = s[r], n = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [r, s] of Object.entries(o.personReports ?? {})) {
			if (0 === s.rows) continue;
			const a = Br("person_summary_review", e, r), o = "reason" in n ? n : n.reports[r] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${r}`
			};
			i.set(a, [...i.get(a) ?? [], {
				table: s,
				source: X[e].reviewSource,
				edit: t,
				recomputed: o
			}]);
		}
	}
	const a = /* @__PURE__ */ new Set([te.ggir_id.header, te.ggir_filename.header]);
	return Object.fromEntries([...i].map(([e, t]) => {
		const i = n?.get(e), s = [...new Set(t.flatMap(({ table: e }) => e.columns))], o = (i ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : Gr(e, t.columns), s)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !$r.includes(e)), l = $r.map((e) => e + "_missing_reason"), c = i?.filter((e) => e.endsWith("_missing_reason") && !l.includes(e)) ?? ["refusal_detail_missing_reason", ...o.map((e) => e + "_missing_reason")], u = [[
			...o,
			...$r,
			...c,
			...l
		].map(r).join(",")], d = (e, t) => [
			e,
			"",
			"",
			"",
			r(t)
		], p = (e) => [
			"",
			"not_computed_for_export",
			"not_applicable_to_row",
			"not_applicable_to_row",
			e ? "" : "not_applicable_to_row"
		], m = (e, t) => (n) => Or(e.values[e.columns.indexOf(n)]?.[t]), g = (e) => c.map((t) => e.get(t) ?? ""), f = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
		for (const { table: n, source: h, edit: _, recomputed: w } of t) for (let e = 0; e < n.rows; e++) {
			const t = o.map(m(n, e)), i = new Map(o.flatMap((e) => f.get(n).has(e) ? [] : [[e + "_missing_reason", "not_applicable_to_row"]]));
			if (u.push([
				...t,
				...d(h, ""),
				...g(i),
				...p("")
			].join(",")), !_) continue;
			const s = "reason" in w ? w : 0 === w.rows ? {
				reason: "no_retained_nights",
				detail: ""
			} : null, l = "reason" in w ? null : m(w, 0), c = o.map((e, n) => a.has(e) ? t[n] : l?.(e) ?? ""), v = new Map(o.flatMap((e, t) => xr(c[t]) ? [[e + "_missing_reason", s?.reason ?? "not_applicable_to_row"]] : []));
			s?.detail && v.set(Sr, r(`ggirPersonSummaries: ${s.detail}`)), u.push([
				...c,
				...d("recomputed", _),
				...g(v),
				...p(_)
			].join(","));
		}
		return [e, u.join("\n") + "\n"];
	}));
}
const qr = Q.ggir_part4_nightsummary_csv, Kr = qr.map((e) => te[e].header), Jr = [
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
], Yr = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function Zr(e, t) {
	const n = te[e], i = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof i ? r(i) : sr(i, { integral: n.ggirIntegral ?? !1 });
}
function Qr(e, t = "legacy-recording", n, r) {
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
	}) : H(r).validStateFraction(a).then(async (e) => {
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
			})), [i, s] = Dn(n.map((e) => e.timestamps)), [a, o] = Dn(n.map((e) => e.states));
			return H(t).sleepRegularityIndex(M([
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
async function Xr(e, t, n, r = {}) {
	const { signal: i } = r, s = e.participantId ?? e.filename, a = ue(n.values(), r.algorithm), o = [];
	for (const [m, v] of n) {
		if (!pi(m, r.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = Rn(v, a);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await Qr(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, i), { sri: c, fractionValid: u } = l, d = "stale" === a.status ? "scores_from_another_config" : null, p = d ?? l.sriMissingReason, g = d ?? l.fractionValidMissingReason, f = [];
	for (const v of [...t.keys()].sort()) {
		const e = t.get(v);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === m.MAIN_SLEEP && null != t.onsetTimestamp && f.push({
			date: v,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const h = [[
		...Kr,
		...Jr.map((e) => `${te[e].header}_missing_reason`),
		...Yr.map((e) => `${te[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: m, onsetTs: v, wakeupTs: y } of f) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == y ? "not_applicable_to_row" : d ?? "no_scored_epochs"
		};
		if (null != y) {
			const { timestamps: r, algorithmResults: s } = await qn(n, m, a, { signal: i });
			if (s && r.length > 0) {
				t.missingReason = null;
				const n = await Tn(s, r, v, y, e.epochLengthSeconds || 60, null, i);
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
	const w = await H(i).ggirManualNightClocks(f.map((e) => e.date), Float64Array.from(f, (e) => e.onsetTs), Float64Array.from(f, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let m = 0; m < f.length; m++) {
		const { onsetTs: t, wakeupTs: n } = f[m], r = w[m], { tstH: i, nAwak: a, latency: o, efficiency: l } = _[m], d = {
			ggir_id: s,
			ggir_night: m + 1,
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
			...qr.map((e) => Zr(e, d[e])),
			...Jr.map((e) => {
				const t = qr.indexOf(e);
				return t >= 0 && null == d[qr[t]] ? "not_computed_for_export" : "";
			}),
			...Yr.map((e) => {
				const t = qr.indexOf(e);
				return t >= 0 && null == d[qr[t]] ? _[m].missingReason ?? "" : "";
			}),
			p ?? "",
			g ?? ""
		].join(","));
	}
	return h.join("\n") + "\n";
}
function ei(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const ti = "actogram_report.html";
function ni(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function ri(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function ii(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: r } = ni(n), i = [e, r].filter(Boolean);
		t.set(n, 0 === i.length ? "part4_nightsummary.csv" : `part4_nightsummary_${i.join("_")}.csv`);
	}
	return t;
}
function si(e) {
	const { algoKey: t, ruleKey: n } = ni(e), r = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
	return t || n ? n ? `${r(t)} / ${r(n)}` : r(t) : "Legacy / Unscoped";
}
function ai(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : Me(e);
}
function oi(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function li(e, t) {
	const n = [], r = [], i = (e) => {
		for (const t of ui(e)) n.push(t), r.push(t.byteLength);
	};
	i(`<section class="pid-sec${0 === e ? " initial" : ""}" id="sec-${e}">`), i(`  <h2 class="pid-lbl">${ei(t.pid)}</h2>`);
	for (const [s, a] of t.charts.entries()) i(`  <div class="algo-block" data-algorithm-key="${ei(a.algoKey)}">`), i(`    <div class="algo-lbl">${ei(si(a.algoKey))}</div>`), a.stale && i(`    <div class="algo-stale" role="status">${ei(a.stale)}</div>`), i(`    <div class="cwrap" id="c${e}_${s}">`), n.push(a.plot), r.push(...a.plotLengths), i(`      <button type="button" class="svg-btn" data-download-name="${ei(a.svgFilename)}">Download SVG</button>`), i(a.meta), i("    </div>"), i("  </div>");
	return i("</section>"), {
		blob: new Blob(n),
		lengths: r
	};
}
const ci = ["<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>", "</body>\n</html>"];
function* ui(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let r = Math.min(e.length, n + er / 4);
		r < e.length && /[\uD800-\uDBFF]/u.test(e[r - 1]) && (r -= 1), yield t.encode(e.slice(n, r)), n = r;
	}
	yield t.encode("\n");
}
function di(e) {
	return new TextEncoder().encode(e);
}
function pi(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function mi({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: r, layouts: i, only: s }) {
	const a = {}, o = (e) => void 0 === s || s === e;
	for (const [l, c] of r ?? ii([...e.keys()])) {
		const t = e.get(l);
		t?.length && o(c) && (a[c] = di(`${t.join("\n")}\n`));
	}
	for (const l of Object.keys(X)) {
		const e = t.filter((e) => jr(e) === l);
		if (0 === e.length) continue;
		const r = (t, n) => void 0 === s || e.some((e) => Object.keys(n(e) ?? {}).some((e) => Br(t, l, e) === s));
		if (r("part2_report", (e) => e.part2Reports)) for (const [t, n] of Object.entries(zr(e, i))) o(t) && (a[t] = di(n));
		for (const [t, s] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
			const r = Br(s, l), c = o(r) ? await Wr(e, t, n, i?.get(r)) : null;
			c && (a[r] = di(c));
		}
		if (r("person_summary_review", (e) => e.personReports)) for (const [t, s] of Object.entries(await Hr(e, n, i))) o(t) && (a[t] = di(s));
	}
	return a;
}
async function gi(e, t, r) {
	r?.throwIfAborted();
	const i = function(e, t) {
		const { signal: n } = t, { username: r, dateRange: i, snapshot: s } = e, a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const d = ho(s, so.ggirReport, e.map((e) => e.id)), p = await Promise.all(e.map((e) => ko(s, e.id, r, n)));
				for (const [r, s] of e.entries()) {
					const e = d.files.find((e) => e.id === s.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: m, sets: g, markersByAlgo: f, invalidDates: h } = p[r], _ = So(d, e.id), w = new Map([...f].filter(([e]) => pi(e, i))), v = /* @__PURE__ */ new Map();
					for (const [t, n] of w) for (const e of n) {
						const n = ri(e);
						let r = v.get(n);
						r || (r = /* @__PURE__ */ new Map(), v.set(n, r)), r.set(t, e);
					}
					const y = /* @__PURE__ */ new Set();
					for (const [t, n] of w) for (const e of n) c(e) && y.add(t);
					if (m) for (const t of g) u.push({
						...t,
						...i ? { scoredDates: new Set(e.availableDates.filter((e) => pi(e, i))) } : {},
						invalidDates: h
					});
					const b = [...y].sort(), k = b[0], x = b[b.length - 1], M = [], S = [];
					for (const n of t.charts ? [..._.keys()].sort() : []) if (pi(n, i) && (null == k || null == x || n >= k && n <= x)) {
						const e = _.get(n), t = me({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), r = t.timestamps, i = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < r.length; n++) M.push(r[n]), S.push(i[n]);
					}
					const I = [];
					for (const [t, r] of v) {
						const s = ni(t).algoKey, l = m ? "" : await Xr(e, r, _, {
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
						const { algoKey: p, ruleKey: g } = ni(t), f = [p, g].filter(Boolean).join("_"), h = ue(_.values(), s || null);
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
			entries: () => mi({
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
				const { algoKey: s, ruleKey: a } = ni(r), o = oi([s, a].filter(Boolean).join("_"), "unscoped"), l = `activity-${oi(e, "recording")}-${o}-${n}.svg`, c = function(e) {
					if (0 === e.timestamps.length) return or("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return or("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, r = 0;
					const i = e.timestamps.map((i, s) => {
						const a = e.activity[s];
						return !Number.isFinite(i) || i <= t ? or("timestamps must be finite and strictly ascending") : (t = i, null != a && Number.isFinite(a) ? (n = Math.min(n, a), r = Math.max(r, a), {
							timestamp: i,
							value: a
						}) : {
							timestamp: i,
							value: null
						});
					}), s = i[0].timestamp, a = i[i.length - 1].timestamp, o = a > s ? a : s + 1;
					if (!Number.isFinite(o) || o <= s) return or("single-epoch viewport must have a representable right edge");
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
				}), u = [...ui(`      <div class="plot-svg">${In(c)}</div>`)];
				return {
					algoKey: r,
					...i.stale ? { stale: i.stale } : {},
					svgFilename: l,
					plot: new Blob(u),
					plotLengths: u.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${ei(ai(c.viewport.min))} → ${ei(ai(c.viewport.max))} · activity domain ${sr(c.valueDomain.min)}–${sr(c.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), a = new Set(ii([...i.csvLinesByAlgo.keys()]).values()), o = [];
	for (const [l, c] of Object.entries(await i.entries())) a.has(l) || o.push([l, n(_(new TextDecoder().decode(c)).records[0].text)]);
	return {
		charts: s,
		csvLinesByAlgo: i.csvLinesByAlgo,
		ggirReviews: i.ggirReviews,
		headers: o
	};
}
function fi(e) {
	return "aw5" === e ? "actoglance.source.philips_actiwatch_aw5.v1" : "actoglance.source.philips_actiware_csv.v1";
}
function hi(e) {
	return Date.parse(`${e}Z`) / 1e3;
}
async function _i(e, t) {
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
async function wi(e, t, n, r = 60) {
	const i = Int8Array.from(t.scores, (e) => null == e ? -1 : 0 === e ? 1 : 0);
	return e.foldSleepWakeVotes(t.startTimestamp, t.epochSeconds, i, Float64Array.from(n), r);
}
function vi(e) {
	return {
		startTimestamp: e.startTimestamp,
		epochSeconds: e.epochSeconds,
		params: e.params,
		...e.paradigmDefaults ? { paradigmDefaults: e.paradigmDefaults } : {},
		scores: Int8Array.from(e.scores, (e) => e ?? -1).buffer
	};
}
function yi(e, t) {
	return e.filter((e) => "rest" === e.kind || "sleep" === e.kind).map((e) => ({
		kind: e.kind,
		source: e.source,
		startTimestamp: hi(e.start),
		endTimestamp: hi(e.end),
		origin: t ? "generated" : "stored",
		...e.analysis ? { analysis: e.analysis } : {}
	})).filter((e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.endTimestamp > e.startTimestamp).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function bi(e) {
	return e.map(({ start: e, end: t, ...n }) => ({
		...n,
		startTimestamp: hi(e),
		endTimestamp: hi(t)
	}));
}
function ki(e, t) {
	return e && e.length === t && t > 0 ? e : null;
}
function xi(e) {
	const t = e.timestamps_ms.length, n = (t) => e.light_channels.find((e) => e.name === t)?.counts;
	return {
		white: ki(e.light, t),
		red: ki(n("red_light"), t),
		green: ki(n("green_light"), t),
		blue: ki(n("blue_light"), t)
	};
}
function Mi(e, t, n) {
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
function Si(e, t) {
	const n = 6e4 * (Ii(e, t)?.gmt_offset_minutes ?? 0);
	return 0 === n ? e.series : {
		...e.series,
		timestamps_ms: e.series.timestamps_ms.map((e) => e + n)
	};
}
function Ii(e, t) {
	return (void 0 === t ? void 0 : e.downloads.find((e) => e.guid === t)) ?? e.downloads.find((e) => e.is_primary) ?? e.downloads[0];
}
function Ti(e) {
	const t = e.channels.find((t) => t.name === e.primary) ?? e.channels[0];
	if (!t) throw new Error("The device file carries no activity count channel.");
	return t.counts;
}
var Ai = class extends Error {
	name = "NativeEpochRefusal";
	category = "unsupported-epoch";
	sourceEpochSeconds;
	constructor(e) {
		super(E("unsupported-epoch")), this.sourceEpochSeconds = e;
	}
};
async function Ri(e, t, n = [], r = null) {
	if (!i(e.epoch_seconds)) throw new Ai(e.epoch_seconds);
	const s = function(e, t) {
		if (!t || t.length !== e.length) return /* @__PURE__ */ new Float64Array(0);
		const n = [];
		return t.forEach((t, r) => {
			t && n.push((e[r] ?? NaN) / 1e3);
		}), Float64Array.from(n.filter(Number.isFinite));
	}(e.timestamps_ms, e.marker), a = function(e) {
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
	}(e), o = e.timestamps_ms.length > 0 && e.off_wear.length === e.timestamps_ms.length, l = g(e.epoch_seconds) ? e : await t(e), c = l.epoch_seconds;
	if (!g(c)) throw new Ai(e.epoch_seconds);
	const u = 120 === c ? [...n, "This recording keeps its native 120-second scoring grid. A 60-second view, one-minute sleep scorers, Choi nonwear and finer algorithm variants are unavailable because the source contains only two-minute sums."] : n, d = l.activity_invalid ?? [];
	return {
		epochSeconds: c,
		timestampsMs: l.timestamps_ms,
		counts: Ti(l),
		actiwareInvalidActivityEpochs: Uint8Array.from(d.length === l.timestamps_ms.length ? d : [], (e) => e ? 1 : 0),
		actiwareStatisticsInput: r,
		sourceEpochSeconds: e.epoch_seconds,
		eventMarkerInstantsSec: s,
		offWristPeriods: a,
		hasOffWristChannel: o,
		warnings: u,
		light: xi(l),
		actiwareIntervals: [],
		actiwareSleepWake: null,
		actiwareStatistics: [],
		actiwareRecording: null,
		actiwareWakeThreshold: null,
		actiwareRestProposal: null
	};
}
function Ei(e) {
	const { proposal: t, nights: n } = e ?? {
		proposal: Pe,
		nights: []
	}, r = t.rest_autoscore === C.screens ? n : [];
	return JSON.stringify([
		t.use_saved_rest_intervals,
		t.rest_autoscore,
		r.map(({ timestamps: e, activity_counts: t, sleep_scores: n, ...r }) => r)
	]);
}
function Ci(e, t, n, r = /* @__PURE__ */ new Map(), i = {}) {
	const s = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = (/* @__PURE__ */ new Date(1e3 * (o - 43200))).toISOString().slice(0, 10);
		let t = s.get(e);
		t || s.set(e, t = []), t.push(o);
	}
	const a = Array.from(t);
	return [...s].map(([e, t]) => {
		const s = Date.parse(`${e}T00:00:00Z`) / 1e3, o = r.get(e);
		return et({
			analysisDate: e,
			epochLengthSeconds: n,
			timestamps: t,
			activityCounts: [],
			sleepScores: [],
			eventMarkerTimestamps: a.filter((e) => e >= s + 43200 && e < s + 151200),
			diaryBedTime: he(o, "diary_in_bed_time"),
			diaryOnsetTime: he(o, "diary_onset_time"),
			diaryOutBedTime: he(o, "diary_out_of_bed_time"),
			diaryWakeTime: he(o, "diary_wake_time"),
			nightStartHour: Je(i.start),
			nightEndHour: Je(i.end)
		});
	});
}
async function Ni(e, t, n, r, i, s, a, o) {
	a?.throwIfAborted();
	const l = n ? je(n, Oe(n, r, e)) : null, c = !n || !l || Ce(n, l), u = c || null !== n && null !== l && !$e(n, l) ? e.filter((e) => "rest" === e.kind) : [], d = c ? e.filter((e) => "sleep" === e.kind) : [], p = t && l && i.actiwareSleepWake ? await i.actiwareSleepWake(t, l).catch(() => null) : null;
	a?.throwIfAborted();
	const m = n ? De(n, r, e) : [], g = t && l && p ? {
		startTimestamp: hi(t.start_local),
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
	}).then((e) => bi(e ?? [])).catch(() => (console.warn("[actiware-statistics] the core rejected this file's Statistics input"), null)) : [];
	return a?.throwIfAborted(), {
		intervals: yi(_.intervals, _.generated),
		sleepWake: g,
		statistics: y,
		statisticsInput: v,
		wakeThreshold: f ?? null,
		restProposal: o ? {
			key: Ei(o),
			...h?.nights ? { notes: Object.fromEntries(h.nights.map((e) => [e.analysis_date, e.note])) } : {}
		} : null
	};
}
const $i = "Actiware statistics could not be computed for this file; the Actiware statistics block stays empty.";
function Oi(e, t) {
	return e ? (t ?? []).map((e) => `Actiware setting ${e.field} = '${e.raw_label}' not recognised; using default.`) : ["No Actiware analysis settings in this file; Actiware Sleep/Wake and rest intervals are not recomputed."];
}
async function ji(e, t, n) {
	if (Di(e)) return "aw5";
	const r = e.name.toLowerCase();
	if (r.endsWith(".aw5")) return "aw5";
	if (!r.endsWith(".csv")) return null;
	if ("function" != typeof t.detectDeviceFormat) return null;
	const i = await B(e, 65536, n);
	return s = await t.detectDeviceFormat(i, e.name).catch(() => null), a = e.name, "actiware_csv" === s ? "actiware_csv" : "aw5" === s || a.toLowerCase().endsWith(".aw5") ? "aw5" : null;
	var s, a;
}
async function Bi(t, n, r, i, s, a = { cancel: () => {} }, o) {
	const l = (e, t) => G(t, V, e, a.signal, a.cancel), c = (e) => s && o ? {
		proposal: o.proposal,
		nights: o.proposal.rest_autoscore === C.screens ? Ci(e.timestampsMs.map((e) => e / 1e3), e.eventMarkerInstantsSec, e.epochSeconds, void 0, {
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
		const e = Di(t) ? t.aw5Subject.downloadGuids[0] : void 0, n = Di(t) ? await t.loadAw5(a.signal) : await l("parseAw5", async () => r.parseAw5(new Uint8Array(await t.arrayBuffer())));
		if (z(a.signal, "after decoding the .AW5 database"), !n) throw new Error("This build's actours core cannot read .AW5 databases yet (needs the pin that exports parseAw5). Export the recording from Actiware as CSV instead.");
		const { warnings: o } = function(e) {
			const { status: t, reasons: n } = e.alignment;
			if ("broken" === t) throw new Error(`This .AW5 recording's samples do not line up with its clock (${n.join("; ") || "alignment broken"}), so it was not imported.`);
			return "suspect" === t ? { warnings: [`.AW5 alignment is suspect: ${n.join("; ") || "no reason given"}. Check the plot against the Actiware report.`] } : { warnings: [] };
		}(n), d = Ii(n, e), p = n.actiware_analysis, m = p?.statistics_input ?? n.actiware_statistics_input ?? null;
		i?.(.6, "Preparing the supported native scoring grid...");
		const g = await Ri(Si(n, e), u, o, m);
		i?.(.8, "Actiware sleep/wake and statistics...");
		const f = p?.params ?? n.actiware_params, h = f ? {
			params: f,
			intervals: p?.intervals ?? n.series.rest_intervals ?? [],
			...p?.analysis ? { analysis: p.analysis } : {},
			...n.other_analyses ? { otherAnalyses: n.other_analyses } : {}
		} : null, _ = await Ni(h?.intervals ?? [], p?.input ?? n.actiware_input ?? await _i(Si(n, e), r), h?.params ?? null, s, r, m, void 0, c(g));
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
				...Oi(f, p?.params_warnings ?? n.actiware_params_warnings ?? n.series.actiware_params_warnings),
				..._.statistics ? [] : [$i]
			],
			...d ? { gmtOffsetMinutes: d.gmt_offset_minutes } : {}
		};
	}
	const d = await l("parseEpochSeries", async () => {
		const e = new Uint8Array(await t.arrayBuffer());
		return r.parseEpochSeries(M(e, [e.buffer]), t.name);
	});
	z(a.signal, "after parsing the Actiware export"), i?.(.6, "Preparing the supported native scoring grid...");
	const p = await Ri(d, u, [], d.actiware_statistics_input ?? null);
	i?.(.8, "Actiware sleep/wake and statistics...");
	const m = d.actiware_params ?? null, g = m ? {
		params: m,
		intervals: d.rest_intervals ?? []
	} : null, f = await Ni(d.rest_intervals ?? [], d.actiware_input ?? await _i(d, r), m, s, r, d.actiware_statistics_input ?? null, void 0, c(p));
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
			...Oi(m, d.actiware_params_warnings),
			...f.statistics ? [] : [$i]
		]
	};
}
function Di(e) {
	return "aw5Subject" in e;
}
function Pi(e, t) {
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
var Li = class extends Error {
	name = "ActiwareSleepContainmentError";
}, Fi = class extends Error {
	name = "ActiwareRestEditError";
};
const Wi = (e, t) => Math.round((t - e.startTimestamp) / e.epochSeconds);
function zi(e, t) {
	return e.startTimestamp + Wi(e, t) * e.epochSeconds;
}
const Gi = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " "), Vi = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19);
function Ui(e) {
	return {
		kind: e.kind,
		source: e.source,
		start: Vi(e.startTimestamp),
		end: Vi(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	};
}
const Hi = (e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind);
function qi(e, t) {
	return (e ?? []).filter((e) => "rest" === e.kind && null !== Ze([e], t));
}
const Ki = (e, t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp;
function Ji(e, t, n) {
	const r = Qe(e, t);
	return r ? [...r.sleep && !n ? [{
		onsetTimestamp: r.sleep.startTimestamp,
		offsetTimestamp: r.sleep.endTimestamp,
		markerIndex: 1,
		markerType: m.MAIN_SLEEP
	}] : [], ...(r.additionalSleeps ?? []).map((e, t) => ({
		onsetTimestamp: e.startTimestamp,
		offsetTimestamp: e.endTimestamp,
		markerIndex: t + 2,
		markerType: m.NAP
	}))] : [];
}
function Yi(e, t, n, r) {
	return Ji(t, n, r).map((t) => {
		const n = e.find((e) => e.markerType === t.markerType && e.onsetTimestamp === t.onsetTimestamp && e.offsetTimestamp === t.offsetTimestamp);
		return n ? {
			...n,
			markerIndex: t.markerIndex
		} : t;
	});
}
function Zi(e, t) {
	const n = [...t].flatMap((t) => {
		const n = Qe(e, t);
		return n?.sleep ? [n.sleep] : [];
	});
	return (e ?? []).filter((e) => "sleep" !== e.kind || !n.some((t) => t.startTimestamp === e.startTimestamp && t.endTimestamp === e.endTimestamp));
}
async function Qi(e, t, n, r) {
	if (!t) return null;
	const i = Zi(e, n).map(Ui).sort(Hi);
	if (0 === i.length) return [];
	const s = await r({
		...t,
		intervals: i
	});
	return s ? bi(s).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)) : null;
}
async function Xi(e, t, n, r) {
	const i = qi(e, t), s = "move" === n.kind ? i.find((e) => e.startTimestamp === n.from.startTimestamp && e.endTimestamp === n.from.endTimestamp) : "remove" === n.kind ? i.find((e) => Ki(n.holding, e)) : void 0;
	if ("add" !== n.kind && !s) throw new Fi("That rest interval changed since it was shown; reload the night.");
	const a = e.filter((e) => e !== s && !(s && "sleep" === e.kind && Ki(e, s)));
	if ("remove" === n.kind) return a;
	const { grid: o } = r, l = s?.analysis, c = {
		kind: "rest",
		source: "event_marker",
		origin: "scorer",
		startTimestamp: zi(o, n.to.startTimestamp),
		endTimestamp: zi(o, n.to.endTimestamp),
		...l ? { analysis: l } : {}
	};
	if (c.endTimestamp <= c.startTimestamp) throw new Fi("A rest interval must end after it starts.");
	if (a.some((e) => "rest" === e.kind && e.startTimestamp < c.endTimestamp && e.endTimestamp > c.startTimestamp)) throw new Fi("A rest interval cannot overlap another rest interval.");
	if (null === Ze([c], t)) throw new Fi("That rest interval would belong to another night.");
	const u = await async function(e, { epochs: t, params: n, grid: r, core: i }) {
		if (0 === e.length) return [];
		const s = await i.actiwareIntervals(t, e.map(Ui), n);
		if (!s || s.generated) throw new Error("The Actiware core did not derive the sleep inside these rest intervals.");
		const a = yi(s.intervals.filter((e) => "sleep" === e.kind), !0);
		return function(e, t) {
			const n = e.filter((e) => "rest" === e.kind);
			for (const r of e.filter((e) => "sleep" === e.kind)) {
				const e = Wi(t, r.startTimestamp), i = Wi(t, r.endTimestamp);
				if (!n.some((n) => e >= Wi(t, n.startTimestamp) && i <= Wi(t, n.endTimestamp))) throw new Li(`Actiware sleep interval ${Gi(r.startTimestamp)}–${Gi(r.endTimestamp)} lies outside every rest interval.`);
			}
		}([...e, ...a], r), a;
	}([c], r);
	return [
		...a,
		c,
		...u
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function es(e, t) {
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
async function ts(e, t, n, r) {
	const i = await ns(e, t, n, r);
	return i ? is(e.file, i, t.keys()) : null;
}
async function ns({ file: e, statisticsInput: t }, n, r, i) {
	if (!t) return null;
	const s = H(i), a = e.actiwareIntervals ?? [], o = await Vn(a.map((e) => e.startTimestamp), s);
	let l = [...a];
	for (const p of n.keys()) {
		const e = qi(a, p), t = a.filter((t) => "sleep" === t.kind && rs(a, t, e, () => o(t.startTimestamp) === p)), r = n.get(p), i = r?.sleepMarkers.filter((e) => (e.markerType === m.NAP || e.markerType === m.MAIN_SLEEP && !r.isInvalidNight) && null != e.onsetTimestamp && Number.isFinite(e.onsetTimestamp) && null != e.offsetTimestamp && Number.isFinite(e.offsetTimestamp) && e.offsetTimestamp > e.onsetTimestamp);
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
		intervals: l.map(Ui).sort(Hi)
	});
	if (!c) return null;
	const u = bi(c), d = [...e.actiwareStatistics ?? [], ...u].map((e) => e.startTimestamp);
	return {
		calculated: u,
		rowDateOf: await Vn(d, s),
		datedRows: new Set(d)
	};
}
const rs = (e, t, n, r) => {
	const i = e.find((e) => "rest" === e.kind && t.startTimestamp >= e.startTimestamp && t.endTimestamp <= e.endTimestamp);
	return i ? n.includes(i) : r();
};
function is(e, t, n, r) {
	const i = e.actiwareIntervals ?? [], s = [...n].map((e) => ({
		date: e,
		rests: qi(i, e)
	})), a = (e) => s.some(({ date: n, rests: s }) => "rest" === e.kind ? null !== Ze([e], n) : "sleep" === e.kind && rs(i, e, s, () => {
		return i = e.startTimestamp, (t.datedRows.has(i) || !r ? t.rowDateOf(i) : r(i)) === n;
		var i;
	}));
	return [...(e.actiwareStatistics ?? []).filter((e) => !a(e)), ...t.calculated.filter(a)].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function ss(e, t) {
	return (e.actiwareStatistics ?? []).map((e) => e.startTimestamp).filter((e) => !t.datedRows.has(e));
}
const as = [
	"temperature",
	"lux",
	"redLight",
	"greenLight",
	"blueLight"
];
function os(e) {
	return "string" == typeof e ? e : null;
}
function ls(e) {
	return "number" == typeof e ? e : null;
}
function cs(e, t) {
	const n = function(e, t) {
		switch (e.formatter) {
			case "verbatim_string": return function(e) {
				return e ? r(e) : "";
			}(os(t));
			case "display_label": {
				const n = os(t);
				return n ? function(e) {
					return e ? r(e) : "";
				}(e.labelEnum ? ee(e.labelEnum, n) : n) : "";
			}
			case "core_printed_text":
			case "date_iso": return function(e) {
				return e ?? "";
			}(os(t));
			case "integer": return function(e) {
				return null == e ? "" : String(Math.trunc(e));
			}(ls(t));
			case "fixed2": return function(e) {
				return null == e ? "" : e.toFixed(2);
			}(ls(t));
			case "python_scalar_str": return function(e) {
				return null == e ? "" : String(e);
			}("boolean" == typeof t ? null : t);
			case "python_float_repr": return function(e) {
				if (null == e) return "";
				if (!Number.isFinite(e)) return String(e);
				const t = String(e);
				return t.includes(".") || t.includes("e") ? t : `${t}.0`;
			}(ls(t));
			case "python_bool": return function(e) {
				return null == e ? "" : e ? "True" : "False";
			}("boolean" == typeof t ? t : null);
			case "clock_hhmm": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${ar(t.getUTCHours())}:${ar(t.getUTCMinutes())}`;
			}(ls(t));
			case "datetime_seconds": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${String(t.getUTCFullYear())}-${ar(t.getUTCMonth() + 1)}-${ar(t.getUTCDate())} ${ar(t.getUTCHours())}:${ar(t.getUTCMinutes())}:${ar(t.getUTCSeconds())}`;
			}(ls(t));
			case "ggir_value": return sr(t, { integral: e.ggirIntegral ?? !1 });
		}
	}(e, t);
	return "" === n ? Y[e.sentinel] : n;
}
function us(e, t) {
	if (!t) return "";
	const { labelEnum: n } = te[e];
	return n ? ee(n, t) : t;
}
const ds = ae.invalid_night_row?.markerTypeCell ?? "", ps = ae.nonwear_row?.markerTypeCell ?? "";
function ms(e) {
	return Q[e].filter((e) => "server" !== te[e].plane);
}
function gs(e) {
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
function fs(e) {
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
const hs = [
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
], _s = [
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
async function ws(e, t, n, r, i, s, a) {
	try {
		return {
			metrics: t ? await An(e, t, n, r, i, s, a) : await Tn(e, n, r, i, s, null, a),
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
async function vs(e, t, n, r) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const i = new Set(n.filter((t) => t.markerType === m.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return i.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : Qr(t.filter((e) => i.has(e.date)), e, t[0]?.epochLengthSeconds, r);
}
function ys(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const bs = [
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
], ks = {
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
}, xs = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => us("algorithm", e.algorithm),
	summary_detection_rule: (e) => us("detection_rule", e.detectionRule),
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
}, Ms = Z;
function Ss(e) {
	return L(e);
}
function Is(e) {
	return JSON.stringify(e, null, 2);
}
const Ts = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function As(e = Ms, t = !1) {
	return Bs("codebook_csv", e, Ts, void 0, t);
}
const Rs = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], Es = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function Cs(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== m.MAIN_SLEEP) continue;
		const e = Rs.map((e) => Os(e, n)).join("\0"), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}
function* Ns(e, t = !1) {
	const n = Cs(e);
	let r = 0;
	const i = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > r && (r = t.length), t;
	}), s = Rs.map((e) => te[e].header);
	for (let o = 1; o <= r; o++) for (const [e] of Es) s.push(`night${String(o)}_${e}`);
	const a = s;
	yield t ? [...s, ...a.map((e) => e + "_missing_reason")].join(",") : s.join(",");
	for (const o of i) {
		const e = o[0], n = Rs.map((t) => Os(t, e)), i = Rs.map((t) => $s[t]?.(e) ? "" : js[t] ?? "");
		for (let t = 0; t < r; t++) {
			const e = o[t];
			for (const [t, r] of Es) {
				const s = e ? Os(r, e) : "";
				n.push(s), i.push(s ? "" : e ? "date" === t ? "" : e.derivedMissingReasons?.[r] ?? e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? i : []].join(",");
	}
}
const $s = {
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
function Os(e, t) {
	return cs(te[e], $s[e]?.(t) ?? null);
}
const js = {
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
function Bs(e, t, n, r, i = !1) {
	const s = r && r.length > 0 ? new Set(r) : null, a = ms(e).filter((e) => null == s || s.has(te[e].header)), o = i ? a.filter((e) => js[e]) : [], l = [[...a.map((e) => te[e].header), ...o.map((e) => te[e].header + "_missing_reason")].join(",")];
	for (const c of t) l.push([...a.map((e) => cs(te[e], n[e]?.(c) ?? null)), ...o.map((e) => {
		const t = n[e]?.(c);
		return null == t || "" === t ? js[e] ?? "" : "";
	})].join(","));
	return l.join("\n");
}
function Ds(e, t, n = !1) {
	const r = Bs("sleep_csv", e, $s, t, n), i = t?.length ? new Set(t) : null, s = [
		"onset_time",
		"offset_time",
		"onset_datetime",
		"offset_datetime"
	], a = ["in_bed_datetime", "out_of_bed_datetime"], o = [
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
		...s,
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
		...a,
		...o
	].filter((t) => (!i || i.has(te[t].header)) && e.some((e) => [...s, ...a].includes(t) && null == $s[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || o.includes(t) && e.metricMissingReason));
	return 0 === l.length ? r : _(r).records.map((t, n) => {
		if (0 === n) return t.text + "," + l.map((e) => `${te[e].header}_missing_reason`).join(",");
		const r = e[n - 1];
		return t.text + "," + l.map((e) => r.markerType === ps ? "manual_nonwear_period" : r.markerType === ds ? "invalid_night" : s.includes(e) ? null == $s[e]?.(r) ? "source_reported_missing" : "" : a.includes(e) ? null == $s[e]?.(r) ? "not_applicable_to_row" : "" : r.sensorMissingReasons?.[e] ?? r.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? r.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (o.includes(e) ? r.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
ms("sleep_csv").map((e) => te[e].header);
const Ps = ae.invalid_night_row.markerTypeCell, Ls = ne("actiware_interval_csv", "local"), Fs = [
	"interval_score_count",
	"interval_score_average",
	"interval_score_manual_count",
	"interval_score_manual_average",
	"interval_score_scheduled_count",
	"interval_score_scheduled_average",
	"interval_score_no_response_count",
	"interval_score_late_count",
	"interval_score_late_average"
].map((e) => te[e].header), Ws = (e, t) => Math.round(e) === Math.round(t);
async function zs(e, t, n, r) {
	const i = r ? Zi(e.actiwareIntervals, r.invalidDates) : (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind), s = i.filter((e) => "rest" === e.kind), a = i.filter((e) => "rest" === e.kind || "sleep" === e.kind && s.some((t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp)).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), o = e.actiwareStatistics ?? [], l = await Vn([...a.map((e) => e.startTimestamp), ...o.map((e) => e.startTimestamp)], H(n)), c = /* @__PURE__ */ new Set(), u = (t, n) => ({
		filename: e.filename,
		participantId: e.participantId ?? null,
		studyDate: l(t.startTimestamp),
		intervalNumber: null,
		interval: t,
		statistics: n
	}), d = a.map((e) => {
		const t = o.findIndex((t, n) => !c.has(n) && t.kind === e.kind && Ws(t.startTimestamp, e.startTimestamp) && Ws(t.endTimestamp, e.endTimestamp));
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
function Gs(e, t, n) {
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
const Vs = new Set(lr.map(([, e]) => e)), Us = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
function Hs(e) {
	if (!Number.isFinite(e)) return [
		"",
		"",
		""
	];
	const t = /* @__PURE__ */ new Date(1e3 * Math.round(e)), n = t.toISOString();
	return [
		n.slice(0, 10),
		Us[t.getUTCDay()],
		n.slice(11, 19)
	];
}
function qs(e, t = !1) {
	const n = t ? lr.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], i = [[
		...Ls,
		...n.map(([, e]) => e + "_missing_reason"),
		...t ? [
			"Participant ID_missing_reason",
			"Origin_missing_reason",
			"Analysis_missing_reason",
			...Fs.map((e) => e + "_missing_reason")
		] : []
	].join(",")], s = (e) => te[e].header;
	for (const { filename: a, participantId: o, studyDate: l, intervalNumber: c, interval: u, statistics: d, invalidNight: p } of e) {
		const e = !0 === p && !Number.isFinite(u.startTimestamp), [m, g, f] = Hs(u.startTimestamp), [h, _, w] = Hs(u.endTimestamp), v = new Map([
			[s("filename"), a],
			[s("participant_id"), o ?? ""],
			[s("study_date"), l],
			[s("interval_kind"), p ? Ps : u.kind],
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
			...lr.map(([, e]) => [e, d?.printed?.[e] ?? ""]),
			...Fs.map((e) => [e, p ? "" : u.subjectiveScores?.[e] ?? ""])
		]), y = n.map(([e]) => {
			if (p) return "invalid_night";
			if (!d || null != d[e]) return "";
			if (e.startsWith("off_wrist")) return "source_reported_missing";
			const t = /_(white|red|green|blue)(?:_percent)?$/u.exec(e)?.[1];
			return t && null == d["invalid_" + t + "_percent"] ? "source_reported_missing" : "";
		}), b = Fs.map((e) => p ? "invalid_night" : u.subjectiveScores?.[e] ? "" : "source_no_subjective_scores");
		i.push([
			...Ls.map((e) => Vs.has(e) ? v.get(e) ?? "" : r(v.get(e) ?? "")),
			...y,
			...t ? [
				o ? "" : "source_reported_missing",
				e ? "invalid_night" : u.origin ? "" : "source_reported_missing",
				u.analysis ? "" : p ? "invalid_night" : "not_applicable_to_row",
				...b
			] : []
		].join(","));
	}
	return `${i.join("\n")}\n`;
}
const Ks = ne("event_marker_csv", "local"), Js = 86400, Ys = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * Js * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), Zs = (e) => e < 10 ? `0${String(e)}` : String(e);
function Qs(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / Js), n = e - t * Js;
	return `${Ys(t)} ${Zs(Math.floor(n / 3600))}:${Zs(Math.floor(n / 60) % 60)}:${Zs(n % 60)}`;
}
function Xs(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function ea(e, t, n, r, i) {
	const s = [], a = ho(n, so.event, e), o = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		i?.throwIfAborted();
		const e = Xs(l, So(a, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await Vn(e, H(i)), c = new Set(vo(a, l.id, r).keys());
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
const ta = "actiware_sleep_wake_export.csv", na = ne("actiware_sleep_wake_csv", "local");
async function ra(e, t, n, r) {
	if (0 === e.scores.byteLength) return [];
	const i = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, s = n ?? new Set(await r.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((i - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), i])));
	return (await Promise.all([...s].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await zn(t, void 0, void 0, r);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
function ia(e, t, n, i) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		Qs(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...i ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => r(e)).join(",");
}
const sa = er, aa = new Uint8Array([3, 0]);
function oa(e, t) {
	if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
	const n = [], r = new Ut(t?.byteLength ? {
		level: 1,
		dictionary: t
	} : { level: 1 }, (e) => {
		n.push(e);
	});
	r.push(e, !1), r.flush(!1);
	const i = r.s.r ?? 0;
	if (!Number.isInteger(i) || i < 0 || i > 2047) throw new Error("ZIP compression state is unreadable.");
	const s = (7 & i) > 5 ? 2 : 1, a = new Uint8Array(s + 4);
	return a[0] = i >> 3, a[s + 2] = 255, a[s + 3] = 255, n.push(a), ve(n);
}
const la = (() => {
	const e = /* @__PURE__ */ new Int32Array(256);
	for (let t = 0; t < 256; t += 1) {
		let n = t;
		for (let e = 0; e < 8; e += 1) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
		e[t] = n;
	}
	return e;
})();
function ca(e) {
	let t = -1;
	for (const n of e) t = la[255 & (t ^ n)] ^ t >>> 8;
	return ~t >>> 0;
}
function ua(e, t) {
	let n = 2147483648, r = 0, i = t;
	for (; !(e & n) || (r ^= i, e & n - 1);) n >>>= 1, i = 1 & i ? i >>> 1 ^ 3988292384 : i >>> 1;
	return r >>> 0;
}
const da = (() => {
	const e = [1 << 30];
	for (let t = 1; t < 32; t += 1) e.push(ua(e[t - 1], e[t - 1]));
	return e;
})();
function pa() {
	const e = new P();
	return {
		hashChunk: (t) => {
			e.update(t);
		},
		hexDigest: () => Promise.resolve(D(e.finalize()))
	};
}
var ma = class extends Zt {
	flag = 3;
	constructor(e) {
		super(e), this.compression = 8;
	}
	process() {}
	emit(e) {
		this.ondata(null, e, !1);
	}
	finish(e, t) {
		this.crc = e, this.size = t, this.ondata(null, aa, !0);
	}
};
async function ga(e) {
	const t = e.deflate ?? {
		lanes: 1,
		block: (e, t) => Promise.resolve(function(e, t) {
			return {
				bytes: oa(e, t),
				crc: ca(e)
			};
		}(e, t))
	};
	if (!navigator.storage?.getDirectory) throw new Error("Streaming export requires temporary workspace storage (OPFS).");
	const r = await (await (await navigator.storage.getDirectory()).getDirectoryHandle(Yn, { create: !0 })).getDirectoryHandle(e.scratchId, { create: !0 }), i = await r.getFileHandle(Ar, { create: !0 }), s = await r.getFileHandle("bundle.zip", { create: !0 }), a = new CompressionStream("gzip"), o = a.readable.pipeTo(await i.createWritable());
	o.catch(() => {});
	const l = a.writable.getWriter(), c = await s.createWritable();
	let u = [], d = 0, p = 0, m = e.artifacts.importRefusalReasons?.length ?? 0;
	const g = [], f = new Qt((e, t) => {
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
	}, w = /* @__PURE__ */ new Set();
	let v = 0;
	const y = async (n, r) => {
		if (w.has(n)) throw new Error(`Duplicate export entry: ${n}`);
		w.add(n);
		const i = new ma(n), s = (e.hash ?? pa)();
		let a = 0;
		f.add(i);
		const { blockBytes: o, inFlight: l } = function(e) {
			const t = Math.min(2 * e + 1, Math.floor(24)), n = Math.floor(1572864 / t) - 32768;
			return {
				blockBytes: n - n % 4096,
				inFlight: t - 1
			};
		}(t.lanes), c = [], u = [];
		let d = 0, m = new Uint8Array(o), _ = 0, y = /* @__PURE__ */ new Uint8Array(0), b = 0;
		const k = () => b + _ + y.byteLength + c.length * (o + 32768), x = async () => {
			const e = await c.shift();
			d = function(e, t, n) {
				let r = 2147483648;
				for (let i = n, s = 3; i; i = Math.floor(i / 2), s += 1) i % 2 && (r = ua(da[31 & s], r));
				return (ua(r, e) ^ t) >>> 0;
			}(d, e.crc, u.shift()), i.emit(e.bytes), await h(k(), o + 1024);
		}, M = async () => {
			const e = m.subarray(0, _), n = e.slice(-32768);
			for (c.push(t.block(e, y)), u.push(e.byteLength), y = n, m = new Uint8Array(o), _ = 0; c.length > l;) await x();
		};
		try {
			for await (const t of r) {
				b = t.byteLength;
				for (let n = 0; n < t.byteLength; n += sa) {
					e.signal?.throwIfAborted();
					const r = t.subarray(n, n + sa), i = s.hashChunk(r, e.signal);
					i && await i, a += r.byteLength;
					for (let e = 0; e < r.byteLength;) {
						const t = Math.min(r.byteLength - e, o - _);
						m.set(r.subarray(e, e + t), _), _ += t, e += t, _ === o && await M();
					}
					p = Math.max(p, k());
				}
			}
			for (b = 0, _ && await M(); c.length;) await x();
		} finally {
			for (const e of c) e.catch(() => {});
		}
		i.finish(d, a), await h(), g.push({
			name: n,
			contentHash: await s.hexDigest(e.signal),
			byteLength: a
		}), e.progress?.(g.length, v, ir);
	};
	try {
		await l.write(new TextEncoder().encode(Rr(e.artifacts.importRefusalReasons ?? [])));
		const t = [...Ro({
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
		v = t.filter((e) => e.write).length + 2, e.progress?.(0, v, ir);
		for (const i of t) if (i.write) try {
			"actiware_sleep_wake_export.csv" === i.name ? await y(i.name, async function* () {
				for await (const t of e.sleepWake) e.signal?.throwIfAborted(), m += t.reasonRows, p = Math.max(p, t.bytes.byteLength + t.reasons.byteLength), await l.write(t.reasons), yield t.bytes;
			}()) : i.name.endsWith(".csv") ? await y(i.name, async function* () {
				let t = 0, r = !1, s = !1;
				const a = "actiware_intervals_export.csv" === i.name ? function* () {
					const t = n(_(qs([], !0)).records[0].text);
					for (const r of e.artifacts.actiwareIntervalRows ?? []) {
						const e = n(_(qs([r], !0)).records[1].text);
						yield new Map(t.map((t, n) => [t, e[n] ?? ""]));
					}
				} : void 0;
				for await (const e of i.batches?.() ?? fa(i.chunks ?? [i.write()])) {
					if (e.bytes.byteLength > 4 * sa) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
					const n = Nr(e.text ?? new TextDecoder().decode(e.bytes), i.name, !0, {
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
						if (c += Rr([t.value], !1), m += 1, c.length >= sa / 2) {
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
		await l.close(), await o, await y(Ar, async function* () {
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
				contentHash: await Ss(t),
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
		return await y(tr, [new TextEncoder().encode(Is(r))]), f.end(), await h(), e.signal?.throwIfAborted(), await c.close(), {
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
async function* fa(e) {
	const t = new TextDecoder();
	let n, r = "";
	for await (const i of async function* () {
		for await (const t of e) for (let e = 0; e < t.byteLength; e += sa) yield t.subarray(e, e + sa);
		yield null;
	}()) {
		const e = null === i;
		r += e ? t.decode() : t.decode(i, { stream: !0 });
		const s = _(r, e);
		if (e && s.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const a = s.remainder ?? "";
		if (a.length > sa || s.records.some((e) => e.text.length > sa)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
		if (s.records.length) {
			const e = void 0 === n;
			n ??= s.records[0].text + "\n";
			const t = (e ? "" : n) + r.slice(0, r.length - a.length);
			yield {
				bytes: new TextEncoder().encode(t),
				text: t,
				rows: s.records.length - (e ? 1 : 0)
			};
		}
		r = a;
	}
}
const ha = (e) => e.slice(e.lastIndexOf("/") + 1), _a = /* @__PURE__ */ new Map();
$.GGIR_CORRECTED_WARM;
const wa = (e) => `${e.name}:ggir-corrected-values`, va = () => "undefined" == typeof navigator ? void 0 : navigator.locks;
async function ya(e, t, n, r) {
	const i = await async function(e, t, n, r) {
		if (i = (await le(e))?.extraSettings, !0 !== s("ggir_export_corrected_values", i?.ggir_export_corrected_values).value) return null;
		var i;
		const a = /* @__PURE__ */ new Map(), o = await pe(e, t.length ? { onlyFileIds: t } : void 0), l = new Map(o.map((e) => [e.id, e])), c = await e.ggirResultsBundles.where("fileId").anyOf([...l.keys()]).toArray(), u = await d(e, c.map((e) => e.fileId)), p = c.filter((e) => !e.ggirCorrections), m = [...new Set(p.map((e) => e.configCsv))], g = await Promise.all(m.map((e) => async function(e, t) {
			const n = _a.get(t);
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
			return _a.set(t, r), r;
		}(n, e)));
		r?.throwIfAborted();
		const f = [];
		for (const s of p.sort((e, t) => l.get(e.fileId).filename.localeCompare(l.get(t.fileId).filename))) {
			const e = g[m.indexOf(s.configCsv)];
			if ("notApplied" in e) {
				a.set(s.fileId, e);
				continue;
			}
			const t = l.get(s.fileId), n = JSON.stringify([
				t.ggirBundleRevision ?? null,
				e.revision,
				e.profile
			]);
			a.set(s.fileId, {
				key: n,
				revision: t.ggirBundleRevision
			}), u.get(s.fileId) !== n && f.push({
				fileId: s.fileId,
				key: n,
				revision: t.ggirBundleRevision,
				size: t.sourceSizeBytes ?? 0,
				name: t.filename
			});
		}
		return {
			plans: a,
			misses: f
		};
	}(e, t, H(n.signal), n.signal);
	if (!i) return null;
	const { plans: a, misses: o } = i;
	if (0 === o.length) return a;
	let c = 0;
	n.onProgress?.(c, o.length);
	const u = J({
		cores: navigator.hardwareConcurrency,
		deviceMemoryGib: F()
	}), p = await K(o.map((t) => ({
		name: t.name,
		cost: t.size,
		memoryGib: q(t.size),
		run: async (i, s) => {
			if (r && await async function(e) {
				const t = await va()?.query(), n = (t) => t.name === wa(e);
				return (t?.pending?.some(n) ?? !1) || !1;
			}(e)) return { miss: t };
			try {
				const n = await w(e, t.fileId);
				if (!n) return {
					miss: t,
					notApplied: "the recording was deleted during the export"
				};
				const r = await async function(e, t) {
					if (!e.resultsCsv) return { notApplied: "imported before the app kept GGIR's results/ files; import the GGIR output folder again for its corrected values" };
					if (!e.ms4) return { notApplied: He };
					const n = [], r = (e) => void 0 === e ? null : (n.push("string" == typeof e ? new TextEncoder().encode(e) : new Uint8Array(e)), n.length - 1), i = e.recordingFile, s = l(i), a = {
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
							return e.startsWith("results/") && (R.test(t) || N.test(t)) ? [t] : [];
						})
					}, { milestones: o, reports: c, cleaned_nights_csv: u, tables: d, review: p } = await t.correctGgirRecording(a, n);
					if ("ok" !== o.status) return { notApplied: o.reason ?? "the GGIR engine refused this recording" };
					const m = Object.fromEntries([
						"ms2",
						"ms3",
						"ms4",
						"ms5"
					].flatMap((e) => {
						const t = o.files.find((t) => t.path === `meta/${e}.out/${i}`);
						return t ? [[e, t.bytes.slice().buffer]] : [];
					}));
					if (!m.ms4) return { notApplied: "the GGIR engine returned no corrected Part 4 milestone" };
					if (!c || "ok" !== c.status) return { notApplied: c?.reason ?? "the GGIR engine refused this recording's reports" };
					if (null == u || !p) return { notApplied: "the GGIR engine gave no Part 4 cleaned night summary" };
					const g = {}, f = /* @__PURE__ */ new Map();
					for (const l of [o, c]) {
						for (const { file: e } of l.changes) {
							const t = /^meta\/(ms\d)\.out\//u.exec(e)?.[1] ?? ha(e);
							g[t] = (g[t] ?? 0) + 1;
						}
						for (const e of l.corrections_not_applied) f.set(e.correction, e.reason);
					}
					const h = m.ms2 ?? e.ms2, _ = m.ms3 ?? e.ms3, w = m.ms5 ?? e.ms5, v = (e) => Object.fromEntries(d.filter(({ name: t }) => e.test(t)).map(({ name: e, table: t }) => [e, t])), y = v(R), b = v(N);
					return {
						values: {
							...h ? { ms2: h } : {},
							..._ ? { ms3: _ } : {},
							ms4: m.ms4,
							...w ? { ms5: w } : {},
							cleanedNightsCsv: u,
							part2Reports: Le(y, p),
							personReports: Le(b, p),
							imported: Ke(p)
						},
						ggirCorrections: {
							profile: c.profile || o.profile,
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
			} catch (a) {
				return n.signal?.throwIfAborted(), s.primary || s.cancel(), {
					miss: t,
					notApplied: (a instanceof Error ? a.message : String(a)).replace(/^Error: /u, "")
				};
			} finally {
				n.signal?.aborted || n.onProgress?.(++c, o.length);
			}
		}
	})), {
		signal: n.signal,
		createWorker: k,
		...r ? {
			extraWorkers: Math.floor(u.extraWorkers / 2),
			memoryBudgetGib: u.memoryBudgetGib && u.memoryBudgetGib / 2
		} : u,
		cancelOperation: () => {},
		...n.workerPool
	});
	for (const { miss: s, notApplied: l } of p) void 0 !== l && a.set(s.fileId, { notApplied: l });
	return a;
}
const ba = [
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
function ka(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function xa(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function Ma(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
ba.join(","), nt.length;
var Sa = o({
	GgirReviewChangedError: () => Ga,
	editsFromMarkers: () => ja,
	getGgirMarkerInputs: () => Ba,
	ggirNightEdits: () => Oa,
	ggirNightRecords: () => $a,
	hasGgirRecomputeFailure: () => Ea,
	mergeGgirSleepMarkers: () => Na,
	recomputeGgirResults: () => La,
	recoverPendingGgirRecomputes: () => za,
	reviewGgirResultsForMarkers: () => Ua,
	scheduleGgirRecompute: () => Pa,
	settleGgirScorerReviews: () => Wa
});
const Ia = new EventTarget(), Ta = /* @__PURE__ */ new WeakMap(), Aa = 800, Ra = "Update GGIR review";
function Ea(e, t, n) {
	return I.getState().jobs[`${n.name}:${Da(e, t)}`]?.status === S.FAILED;
}
function Ca(e, t, n, r, i) {
	if (i?.aborted || function(e) {
		return e instanceof Error && e.name === f.errnames.DatabaseClosed;
	}(r)) return;
	const s = Da(e, t), a = `${n.name}:${s}`, o = I.getState();
	o.jobs[a]?.controller.signal.aborted || o.jobs[a]?.status === S.ELSEWHERE || (o.update(a, {
		id: a,
		key: s,
		workspaceId: n.name,
		kind: $.GGIR_RECOMPUTE,
		label: Ra,
		controller: o.jobs[a]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: S.FAILED
	}), n.isOpen() && j() === n && Ia.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function Na(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function $a(e, t, n, r = [], i, s = H(i)) {
	const a = we([...n.values()].flat(), !0), o = a?.algorithm ?? Fe(t), l = a?.detectionRule ?? null, c = /* @__PURE__ */ new Map();
	for (const [p, m] of n) {
		const e = we(m, !0);
		e && c.set(p, [{
			...e,
			algorithm: o,
			detectionRule: l
		}]);
	}
	const u = Ue(t), d = u.length ? await s.ggirLabelsToStoredMs(Float64Array.from(u.flatMap((e) => [e.onsetMs, e.wakeMs])), r) : [];
	for (const [p, g] of u.entries()) {
		const t = c.get(g.nightDate)?.[0], n = Re(g, t);
		"scored" !== n.kind && "invalid" !== n.kind ? c.set(g.nightDate, [{
			fileId: e,
			date: g.nightDate,
			username: xe,
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
			sleepMarkers: Na({
				markerType: m.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: d[2 * p] / 1e3,
				offsetTimestamp: d[2 * p + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : c.set(g.nightDate, t ? [t] : []);
	}
	return c;
}
async function Oa(e, t, n, r = [], i, s = H(i)) {
	const a = await $a(e, t, n, r, i, s), o = new Map([...a].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : []));
	return {
		markersByAlgo: a,
		selected: o,
		edits: await ja(t, o, r, i, s)
	};
}
async function ja(e, t, n = [], r, i = H(r)) {
	const s = Ge(e).flatMap((e) => {
		const n = Re(e, t.get(e.nightDate));
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
async function Ba(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [r, i] = await Promise.all([be(e, t, n), _e(e, n)]), s = new Map([...r].flatMap(([e, t]) => {
			const n = we(t, !0);
			return n ? [[e, n]] : [];
		})), a = i?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([a ?? [], [...s].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				Re(void 0, t)
			])]),
			markers: s,
			clockSteps: a,
			bundleRevision: i?.ggirBundleRevision
		};
	});
}
function Da(e, t) {
	return `${$.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function Pa(e, t, n, r) {
	if (!n.isOpen() || j() !== n || r?.aborted) return;
	let i = Ta.get(n);
	i || (i = /* @__PURE__ */ new Map(), Ta.set(n, i));
	const s = Da(e, t);
	clearTimeout(i.get(s)), i.set(s, setTimeout(() => {
		i.delete(s), n.files.get(e).then((i) => {
			if (i?.ggirBundleRevision && n.isOpen() && j() === n && !r?.aborted) return La(e, t, n, r);
		}).catch((i) => {
			r?.aborted || i instanceof DOMException && "AbortError" === i.name || (Ca(e, t, n, i, r), n.isOpen() && j() === n && (console.error("[ggir-results] recompute failed."), ye("error", "GGIR results recompute failed", fe(i))));
		});
	}, Aa));
}
function La(e, t, n, r, i = !0) {
	const s = (a, o = r) => U({
		kind: $.GGIR_RECOMPUTE,
		key: Da(e, t),
		label: Ra,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (r) => {
			r.signal.throwIfAborted();
			const o = await Fa(e, t, n, r.signal, i);
			return r.signal.throwIfAborted(), !1 !== o ? o : (a < 2 && s(a + 1, r.signal).catch((i) => Ca(e, t, n, i, r.signal)), null);
		}
	});
	return s(0);
}
async function Fa(e, t, n, r, i, s = { active: () => n.isOpen() && j() === n }) {
	if (r.throwIfAborted(), !s.active()) return null;
	const { markerInputs: a, markers: o, clockSteps: l, bundleRevision: c } = await Ba(e, t, n);
	if (!c) return null;
	const u = await n.ggirScorerReviews.get([e, t]);
	if (!s.active()) return null;
	if (r.throwIfAborted(), u?.markerInputs === a && u.bundleRevision === c && (d = u, void 0 === s.correctedKey || 0 === d.edits.length || d.corrected?.key === s.correctedKey)) return i && Ia.dispatchEvent(new CustomEvent("updated", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })), u.current ?? null;
	var d;
	const p = await n.ggirResultsBundles.get(e);
	if (!p) return null;
	const { edits: m } = await Oa(e, p.imported, new Map([...o].map(([e, t]) => [e, [t]])), l, r, s.api);
	if (!s.active()) return null;
	const g = Va(u, c, m), f = void 0 !== s.correctedKey && m.length > 0 && !p.ggirCorrections && !(g && u.corrected?.key === s.correctedKey), h = m.length > 0 && (!g || f) ? v(p, await n.ggirResultsBlobs.get(e)) : p, _ = g ? u.current : (await Ua(h, o, l, m, r, void 0, s.api)).current;
	let w = g ? u.corrected : void 0;
	if (f) {
		const t = await n.ggirCorrectedValues.get(e);
		if (!t || t.key !== s.correctedKey) return null;
		const i = We(h, t).find((e) => "corrected" === e.set), a = i && (await Ua(i.bundle, o, l, m, r, void 0, s.api)).current;
		w = {
			key: t.key,
			...a ? { current: a } : {}
		};
	}
	r.throwIfAborted();
	const y = (/* @__PURE__ */ new Date()).toISOString();
	if (!s.active()) return null;
	const b = await oe(n, [
		n.ggirResultsBundles,
		n.ggirScorerReviews,
		n.markers,
		n.files
	], async () => {
		if (!s.active()) return null;
		const i = await Ba(e, t, n);
		return i.markerInputs === a && i.bundleRevision === c && (0 === await n.ggirResultsBundles.where(":id").equals(e).count() ? null : (r.throwIfAborted(), await n.ggirScorerReviews.put({
			fileId: e,
			scorer: t,
			..._ ? { current: _ } : {},
			edits: m,
			markerInputs: a,
			bundleRevision: c,
			updatedAt: y,
			...w ? { corrected: w } : {}
		}), !0));
	}, r);
	return b ? (Ia.dispatchEvent(new CustomEvent("updated", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })), r.throwIfAborted(), _ ?? h.imported) : (r.throwIfAborted(), !1 !== b && null);
}
async function Wa(e, t, n, r, i = {}) {
	const s = await (t.length ? e.ggirResultsBundles.where(":id").anyOf([...t]) : e.ggirResultsBundles.toCollection()).primaryKeys(), a = (e) => {
		const t = r?.get(e);
		return t && "key" in t ? t.key : void 0;
	}, o = async (t) => {
		const r = await Promise.all(t.map((t) => async function(e, t, n, r) {
			const [{ markerInputs: i, bundleRevision: s }, a] = await Promise.all([Ba(t, n, e), e.ggirScorerReviews.get([t, n])]);
			return !(!a || !s || a.markerInputs !== i || a.bundleRevision !== s || 0 !== a.edits.length && ((await e.ggirResultsBundles.get(t))?.ggirCorrections || void 0 !== r && a.corrected?.key !== r));
		}(e, t, n, a(t))));
		return t.filter((e, t) => !r[t]);
	}, l = await o(s);
	if (0 === l.length) return /* @__PURE__ */ new Set();
	const c = i.signal ?? new AbortController().signal, u = (await e.files.bulkGet(l)).map((e) => e?.sourceSizeBytes ?? 0);
	return await K(l.map((t, r) => ({
		name: String(t),
		cost: u[r],
		memoryGib: q(u[r]),
		run: async (r, i) => {
			try {
				await Fa(t, n, e, c, !1, {
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
		createWorker: k,
		cancelOperation: () => {},
		...J({
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: F()
		}),
		...i.workerPool
	}), new Set(await o(l));
}
function za(e, t) {
	return U({
		kind: $.GGIR_RECOVERY,
		key: $.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const r = () => !t.signal.aborted && e.isOpen() && j() === e;
			try {
				if (!r()) return;
				const s = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: a } = await import("./ggir-import-DF_oIkfV.js").then((e) => e.t);
				for (const o of s) {
					if (t.signal.throwIfAborted(), !r()) return;
					try {
						const [s] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), a(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), c = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...s.map((e) => e.scorer)]);
						c.delete(xe);
						for (const a of c) {
							if (!r()) return;
							try {
								const n = Ea(o, a, e);
								if (!n) {
									const { markerInputs: t, bundleRevision: n } = await Ba(o, a, e), r = s.find((e) => e.scorer === a);
									if (n && r?.markerInputs === t && r.bundleRevision === n) continue;
								}
								await La(o, a, e, t.signal, n);
							} catch (i) {
								n = !0, Ca(o, a, e, i, t.signal);
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
				const i = Object.values(I.getState().jobs).filter((t) => A(t) && t.workspaceId === e.name && t.kind === $.GGIR_RECOMPUTE && t.status === S.FAILED);
				for (const t of i) {
					const i = t.key.slice($.GGIR_RECOMPUTE.length + 1);
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
							r() && (0 === n || 0 === i && 0 === s) && (I.getState().dismiss(t.id), Ia.dispatchEvent(new CustomEvent("updated", { detail: {
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
var Ga = class extends Error {
	constructor() {
		super("a night of this recording was edited during the export; export again");
	}
};
function Va(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
async function Ua(e, t, n = [], r, i, s, a) {
	const o = r ?? await ja(e.imported, t, n, i, a);
	let c;
	i?.throwIfAborted();
	const u = s?.review;
	if (Va(u, s?.bundleRevision, o)) c = u.current;
	else {
		if (s && o.length > 0 && !e.part1) throw new Ga();
		if (o.length > 0 && e.ms2 && e.ms3) {
			const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), r = t(e.ms3), s = t(e.ms4), u = t(e.ms5), d = t(e.sleeplogRData), p = (t) => t.reviewGgirResults({
				part1: new Uint8Array(e.part1),
				configCsv: e.configCsv,
				recordingId: l(e.recordingFile),
				...n ? { ms2: n } : {},
				...r ? { ms3: r } : {},
				...s ? { ms4: s } : {},
				...u ? { ms5: u } : {},
				...d ? { sleeplogRData: d } : {},
				...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
				edits: o,
				...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
				...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
				crossCheck: !1
			});
			c = Ke(await (a ? p(a) : W(i, p)));
		}
	}
	i?.throwIfAborted();
	const d = Object.getOwnPropertyDescriptors(e);
	return delete d.current, Reflect.deleteProperty(d, "edits"), Object.defineProperties({
		...c ? { current: c } : {},
		edits: o
	}, d);
}
const Ha = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], qa = [
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
], Ka = [
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
], Ja = [
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
], Ya = ["fileId", ...u], Za = {
	files: [
		...Ha,
		"ggirTimezone",
		"recording",
		"ggirClockSteps",
		"sourceType",
		"sourceProfileId",
		"navigationFacts"
	],
	markers: qa,
	activityDays: Ka,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: Ja,
	actiwareFileData: [
		"fileId",
		"actiwareIntervals",
		"actiwareStatistics"
	]
}, Qa = {
	files: [...Ha, "ggirClockSteps"],
	markers: qa,
	activityDays: Ka,
	ggirResultsBundles: Ja,
	ggirResultsBlobs: Ya,
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
}, Xa = {
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
		O
	]
}, eo = "Also export corrected values was off at export";
function to(e) {
	const t = Object.values(e.ggirCorrectionsNotApplied).filter((e) => e !== eo).length, n = Object.keys(e.ggirCorrectionProfiles);
	if (0 === n.length && 0 === t) return null;
	const r = Object.keys(e.ggirCorrections).length;
	return `Corrected values: ${n.length > 0 ? `profile ${n.join(", ")}; ` : ""}${String(r)} ${1 === r ? "recording" : "recordings"} corrected, ${String(t)} left out (see manifest.json).`;
}
function no(e) {
	const t = ho(e, so.manifest), n = new Map(t.ggirResultsBundles.map((e) => [e.fileId, e.recordingFile]));
	return t.ggirCorrectedValues.flatMap((e) => void 0 !== e.notApplied && "Also export corrected values was off at export" !== e.notApplied && n.has(e.fileId) ? [{
		file: Br("part4_night_review", "corrected"),
		row: 0,
		key: n.get(e.fileId),
		column: `corrected values: ${e.notApplied}`,
		reason: "not_computed_for_export"
	}] : []);
}
function ro(e) {
	return ho(e, so.ggirReport).ggirResultsBundles.flatMap((e) => {
		const t = Ve(e.imported, e.part2Reports);
		return t ? [{
			file: Br("part4_night_review", "default"),
			row: 0,
			key: e.recordingFile,
			column: t,
			reason: "source_reported_missing"
		}] : [];
	});
}
const io = {
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
}, so = {
	sleep: Za,
	nonwear: Za,
	summary: Za,
	wide: Za,
	circadian: {
		files: Ha,
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
	ggirReport: Qa,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: qa,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: [
			...Ha,
			"sourceType",
			"sourceProfileId"
		],
		markers: qa,
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
		files: Ha,
		markers: qa,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: Xa,
	audit: io,
	physicalActivity: {
		files: [
			...Ha,
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
		markers: qa,
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
}, ao = /* @__PURE__ */ new WeakMap(), oo = /* @__PURE__ */ new WeakMap();
function lo(e, t, n, r) {
	for (let i = 0; i < n.byteLength;) {
		const s = n.subarray(i, i + er), a = e[t](s, { at: r + i });
		if (!Number.isInteger(a) || a <= 0 || a > s.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		i += a;
	}
}
function co(e) {
	if (!e || "object" != typeof e) return e;
	const t = oo.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return lo(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(co) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, co(t)])) : structuredClone(e);
}
function uo(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(uo), Object.freeze(e)), e;
}
async function po(e, t = j(), n = {}) {
	const r = await Co(null, "computing the corrected GGIR values", () => async function(e, t, n = {}) {
		const r = va();
		return r?.request ? r.request(wa(e), n.signal ? { signal: n.signal } : {}, () => ya(e, t, n, !1)) : ya(e, t, n, !1);
	}(t, e, {
		signal: n.signal,
		onProgress: (e, t) => n.progress?.(e, t, "Computing corrected values"),
		...n.workerPool ? { workerPool: n.workerPool } : {}
	})), { username: i } = n, s = void 0 === i ? void 0 : await Co(null, "updating the GGIR night reviews", () => Wa(t, e, i, r, {
		signal: n.signal,
		...n.workerPool ? { workerPool: n.workerPool } : {}
	}));
	return n.progress?.(0, 0, nr), Co(null, "checking the export inputs", () => async function(e, t = j(), n = {}) {
		const r = /* @__PURE__ */ new Map();
		for (const p of (n.readPlan ?? Object.keys(so)).map((e) => so[e])) for (const [e, t] of Object.entries(p)) {
			const n = e;
			r.set(n, /* @__PURE__ */ new Set([...r.get(n) ?? [], ...t]));
		}
		if (!r.size) {
			const e = Object.freeze({ files: Object.freeze([]) });
			return ao.set(e, {}), e;
		}
		let i = 268435456;
		const s = (e) => {
			if (e instanceof ArrayBuffer ? i -= e.byteLength : "string" == typeof e ? i -= 2 * e.length : e && "object" == typeof e ? Object.values(e).forEach(s) : i -= 8, i < 0) throw new Zn("Export snapshot exceeds 256 MiB. Select fewer recordings or a narrower workspace before exporting.");
		};
		let a = 0;
		const o = /* @__PURE__ */ new Map(), l = (e, t, n) => {
			const r = Object.freeze({});
			return lo(e, "write", t, a), oo.set(r, {
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
			const n = r.has("files") ? await pe(t, e.length ? { onlyFileIds: e } : void 0) : [], i = new Set(n.flatMap((e) => e.id ? [e.id] : [])), s = {};
			return await Promise.all([...r].map(async ([e, r]) => {
				const a = (e) => Object.fromEntries([...r].filter((t) => t in e).map((t) => [t, c(e[t])]));
				if (s[e] = [], "files" === e) return void (s[e] = n.map((e) => a(e)));
				const o = "diaryEntries" === e ? t.diaryEntries : ce(t, e), l = "studySettings" === e ? o.where("key").equals("study") : o.where("fileId").anyOf([...i]);
				await p(l, (t) => {
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
		}), m = new Set((d.ggirResultsBundles ?? []).map((e) => e.fileId));
		d.markers = (d.markers ?? []).map((e) => m.has(e.fileId) && "invalid" === Re(void 0, ke(e)).kind ? {
			...e,
			isInvalidNight: !0
		} : e);
		const g = function(e) {
			const t = Object.freeze({ files: uo((e.files ?? []).map((e) => Object.fromEntries(Ha.map((t) => [t, co(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
			return ao.set(t, e), t;
		}(d);
		return function(e, t) {
			const n = ao.get(e);
			if (!n.ggirResultsBundles) return;
			const r = new Set(n.ggirResultsBundles.map((e) => e.fileId));
			if (void 0 === t) return void (n.ggirCorrectedValues && (n.ggirCorrectedValues = n.ggirCorrectedValues.filter((e) => !r.has(e.fileId))));
			const i = new Map((n.files ?? []).map((e) => [e.id, e.ggirBundleRevision])), s = new Map((n.ggirCorrectedValues ?? []).map((e) => [e.fileId, e]));
			n.ggirCorrectedValues = n.ggirResultsBundles.flatMap((e) => {
				if (!t) return e.ggirCorrections && !e.stock ? [] : [{
					fileId: e.fileId,
					key: "",
					notApplied: eo
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
const mo = [
	"sleep",
	"circadian",
	"ggirReport",
	"event",
	"physicalActivity"
];
var go = class extends Error {};
function fo(e, t, n) {
	const r = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new go(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (r(t), Reflect.get(e, t, n)),
		has: (e, t) => (r(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (r(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function ho(e, t, n = []) {
	const r = ao.get(e);
	if (!r) throw new go("Export requires a captured input snapshot");
	const i = Object.entries(so).find(([, e]) => e === t)?.[0];
	if (!i) throw new go("Export producer has no registered input declaration");
	const s = {};
	for (const [a, o] of Object.entries(t)) {
		const e = r[a].filter((e) => !n.length || "studySettings" === a || n.includes("files" === a ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const r of o.filter((e) => e in t)) Object.defineProperty(n, r, {
				enumerable: !0,
				get: () => uo(co(t[r]))
			});
			return fo(n, o, `${i}: undeclared field ${a}.`);
		});
		Object.assign(s, { [a]: Object.freeze(e) });
	}
	return fo(s, Object.keys(t), `${i}: undeclared table `);
}
function _o(e, t, n) {
	const r = /* @__PURE__ */ new Map();
	for (const i of e.markers) {
		if (i.fileId !== t || i.username !== n) continue;
		const e = ke(i), s = r.get(i.date) ?? [];
		s.push(e), r.set(i.date, s);
	}
	return r;
}
function wo(e, t, n) {
	return new Map([..._o(e, t, n)].sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => [e, we(t)]));
}
function vo(e, t, n) {
	return new Map([..._o(e, t, n)].flatMap(([e, t]) => {
		const n = we(t.filter(c));
		return n ? [[e, n]] : [];
	}));
}
const yo = /* @__PURE__ */ new WeakMap(), bo = 4;
function ko(e, t, n, r) {
	let i = yo.get(e);
	i || (i = /* @__PURE__ */ new Map(), yo.set(e, i));
	const s = JSON.stringify([t, n]);
	let a = i.get(s);
	if (!a) {
		for (; i.size >= bo;) i.delete(i.keys().next().value);
		a = async function(e, t, n, r) {
			const i = ho(e, so.ggirReport, [t]), s = i.files.find((e) => e.id === t), a = i.ggirResultsBundles.find((e) => e.fileId === t), o = a && v(a, i.ggirResultsBlobs.find((e) => e.fileId === t)), l = _o(i, t, n), c = o ? await Oa(t, o.imported, l, s.ggirClockSteps, r) : void 0, u = c?.markersByAlgo ?? l, d = c?.selected ?? new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), p = new Set([...d].filter(([, e]) => "invalid" === Re(void 0, e).kind).map(([e]) => e)), m = i.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n), g = {
				review: m,
				bundleRevision: s.ggirBundleRevision
			}, f = o ? await Ua(o, d, s.ggirClockSteps, c?.edits, r, g) : void 0, h = f ? await Mo(f, p, r) : void 0, _ = i.ggirCorrectedValues.find((e) => e.fileId === t), w = m?.corrected && _ && m.corrected.key === _.key ? {
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
				sets: o && f ? await Promise.all(We(o, _, _?.notApplied !== eo).map(async ({ set: e, bundle: t }) => t === o ? h : Mo(await Ua(t, d, s.ggirClockSteps, f.edits, r, "corrected" === e ? w : void 0), p, r))) : [],
				invalidDates: p
			};
		}(e, t, n, r), i.set(s, a), a.catch(() => {
			i.get(s) === a && i.delete(s);
		});
	}
	return a;
}
let xo;
async function Mo(e, t, n) {
	const { ggirCell: r, ggirNum: i } = await import("./ggir-results-types-CLFzM135.js").then((e) => e.i), s = e.part2Reports?.["part2_daysummary.csv"], a = /* @__PURE__ */ new Map();
	if (s) for (let u = 0; u < s.rows; u++) {
		const e = r(s, te.ggir_id.header, u), t = Lr(r(s, te.ggir_calendar_date.header, u));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		a.set(n, a.has(n) ? null : u);
	}
	const o = Fr(e.imported, "nights"), l = te.ggir_nonwear_perc_spt.header, c = async (t) => {
		const c = t.nights, u = Array.from({ length: c.rows }, (e, t) => {
			const n = r(c, te.ggir_id.header, t), l = a.get(JSON.stringify([null == n ? null : String(n), o(c, t, !1)])), u = s && null != l;
			return {
				id: n,
				day: l,
				valid: u ? r(s, te.ggir_day_valid_hours.header, l) : null,
				hours: u ? r(s, te.ggir_day_hours.header, l) : null,
				validNumber: u ? i(s, te.ggir_day_valid_hours.header, l) : null,
				hoursNumber: u ? i(s, te.ggir_day_hours.header, l) : null
			};
		}), d = u.flatMap((e, t) => null != e.validNumber && null != e.hoursNumber ? [{
			index: t,
			valid: e.validNumber,
			hours: e.hoursNumber
		}] : []), p = /* @__PURE__ */ new Map();
		if (d.length > 0) {
			const e = await H(n).ggirDayValidFractions(Float64Array.from(d, (e) => e.valid), Float64Array.from(d, (e) => e.hours));
			d.forEach((t, n) => p.set(t.index, e[n] ?? null));
		}
		const m = !c.columns.includes(l) && u.some((e, n) => !t.nightRecomputed[n]) ? await function(e, t) {
			const n = e.cleanedNightsCsv;
			if (!n) return Promise.resolve(void 0);
			if (xo?.csv !== n || xo.config !== e.configCsv) {
				const r = H(t).readGgirReportCsv(n, e.configCsv);
				xo = {
					csv: n,
					config: e.configCsv,
					table: r
				}, r.catch(() => {
					xo?.table === r && (xo = void 0);
				});
			}
			return xo.table;
		}(e, n) : void 0, g = u.map(({ id: e, day: n, valid: a, hours: o, validNumber: u, hoursNumber: d }, g) => {
			const f = p.get(g) ?? null, h = i(c, te.ggir_night.header, g), _ = Array.from({ length: t.days.rows }, (e, t) => t).find((e) => "WW" === r(t.days, "window", e) && i(t.days, "night_number", e) === h), w = m ? Array.from({ length: m.rows }, (e, t) => t).find((t) => String(r(m, te.ggir_id.header, t)) === String(e) && i(m, te.ggir_night.header, t) === h) : void 0, v = {
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
		}), f = Q.ggir_review_night_extension, h = [.../* @__PURE__ */ new Set([
			...c.columns,
			...f.map((e) => te[e].header),
			...f.map((e) => te[e].header + "_missing_reason")
		])], _ = h.map((e) => {
			const t = f.find((t) => te[t].header + "_missing_reason" === e);
			if (t) return g.map((e) => e.reasons[t] ?? null);
			const n = f.find((t) => te[t].header === e);
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
		...e.personReports && (e.edits.length > 0 || t.size > 0) ? { personRecomputed: await Ur(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await c(e.imported),
		...e.current ? { current: await c(e.current) } : {}
	};
}
function So(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function Io(e) {
	return ho(e, so.manifest).studySettings.flatMap((e) => de(e).map((e) => ({
		file: "sleep_export.csv",
		row: 0,
		key: e.filename,
		column: `${e.category}: ${e.reason}`,
		reason: "not_computed_for_export"
	})));
}
const To = "not included", Ao = "included if produced";
function Ro(e) {
	const t = e.artifacts ?? null, n = t ? null : e.planned ?? null, i = e.columns, s = t ? t.sleepRows.length : n?.sleepRows ?? null, a = t ? t.sleepRows.filter((e) => e.markerType === m.MAIN_SLEEP).length : n?.mainSleepRows ?? null, o = t ? Cs(t.sleepRows).size : n?.wideRows ?? null, l = t ? t.summaryRows.length : n?.summaryRows ?? null, c = t ? t.nonwearRows.length : n?.nonwearRows ?? null, u = t ? t.physicalActivityRows.length : n?.activityRows ?? null, d = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : n?.activityDates ?? null, p = t ? t.eventMarkerRows?.length ?? 0 : n?.eventMarkerRows ?? null, g = t ? t.actiwareIntervalRows?.length ?? 0 : n?.actiwareIntervalRows ?? null, f = t ? t.actiwareSleepWakeCsv?.rows ?? 0 : n?.actiwareSleepWakeRows ?? null, h = n?.actogramFiles ?? null, w = t ? Object.keys(t.ggirEntries) : null, v = (w ? w.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
		const n = Math.max(0, _(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
		return {
			name: e,
			include: n > 0,
			rows: n
		};
	}) : n ? [...ii([...n.part4Rows.keys()])].map(([e, t]) => ({
		name: t,
		include: n.ggirMainSleepGroupKeys.includes(e),
		rows: n.part4Rows.get(e) ?? null
	})) : []).sort((e, t) => e.name.localeCompare(t.name)), y = w ? w.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [ti, ...n?.ggirReviewEntries ?? []], b = (e) => null == e ? null : e > 0, k = (n, r, s) => {
		const a = null == r ? "unknown" : r ? "included" : "not_included";
		return "included" !== a ? {
			name: n,
			state: a,
			rows: null,
			detail: "unknown" === a ? s.detail : To,
			estimatedBytes: 0,
			write: null
		} : {
			name: n,
			state: a,
			rows: s.rows,
			detail: s.detail,
			estimatedBytes: s.estimatedBytes ?? ((s.rows ?? 0) + 1) * (s.columns ?? i) * 12,
			write: t ? () => s.csv ? di(s.csv(t)) : s.encode(t) : null,
			...t && (s.chunkField || s.wide) ? { batches: function* () {
				if (s.wide) {
					const e = Ns(t.sleepRows, !0), n = e.next().value;
					for (const t of e) {
						const e = n + "\n" + t;
						yield {
							bytes: di(e),
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
						}, a = !e.selectedColumns?.length || "sleepRows" !== s.chunkField && "nonwearRows" !== s.chunkField ? void 0 : Ds(i[s.chunkField], void 0, !0), o = s.csv(i);
						yield {
							bytes: di(o),
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
			detail: null == s ? Ao : `${String(s)} rows · ${String(i)} columns`,
			chunkField: "sleepRows",
			csv: (t) => Ds(t.sleepRows, e.selectedColumns ?? void 0, !0)
		}),
		k("sleep_export_wide.csv", !!e.includeWideFormat && b(o ?? a), {
			rows: o,
			detail: null == o ? Ao : `${String(o)} participant group ${1 === o ? "row" : "rows"}`,
			wide: !0,
			csv: (e) => function(e, t = !1) {
				return [...Ns(e, t)].join("\n");
			}(e.sleepRows, !0)
		}),
		k("summary_export.csv", b(l ?? a), {
			rows: l,
			detail: null == l ? Ao : `${String(l)} participant ${1 === l ? "row" : "rows"}`,
			chunkField: "summaryRows",
			csv: (e) => function(e, t = !1) {
				const n = Bs("summary_csv", e, xs, void 0, t), r = [
					"summary_mean_temperature_c",
					"sleep_regularity_index",
					...Object.values(ks).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
				];
				return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? _(n).records.map((t, n) => 0 === n ? t.text + "," + r.map((e) => te[e].header + "_missing_reason").join(",") : t.text + "," + r.map((t) => {
					const r = e[n - 1];
					return "summary_mean_temperature_c" === t ? null == r.meanTemperature ? r.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? r.sleepRegularityMissingReason ?? "" : r.metricMissingReasons?.[t] ?? "";
				}).join(",")).join("\n") : n;
			}(e.summaryRows, !0)
		}),
		k("nonwear_export.csv", b(c), {
			rows: c,
			detail: null == c ? Ao : `${String(c)} periods`,
			chunkField: "nonwearRows",
			csv: (t) => Ds(t.nonwearRows, e.selectedColumns ?? void 0, !0)
		}),
		k("event_markers_export.csv", b(p), {
			rows: p,
			detail: null == p ? Ao : `${String(p)} button ${1 === p ? "press" : "presses"}`,
			columns: Ks.length,
			chunkField: "eventMarkerRows",
			csv: (e) => function(e, t = !1) {
				const n = [[...Ks, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
				for (const i of e) n.push([
					i.filename,
					i.participantId ?? "",
					i.studyDate,
					Qs(i.localTimestamp),
					null == i.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (i.localTimestamp - 60 * i.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
					...t ? [i.participantId ? "" : "source_reported_missing", null == i.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
				].map((e) => r(e)).join(","));
				return `${n.join("\n")}\n`;
			}(e.eventMarkerRows ?? [], !0)
		}),
		k("actiware_intervals_export.csv", b(g), {
			rows: g,
			detail: null == g ? Ao : `${String(g)} Actiware intervals`,
			columns: Ls.length,
			chunkField: "actiwareIntervalRows",
			csv: (e) => qs(e.actiwareIntervalRows ?? [], !0)
		}),
		k(ta, b(f), {
			rows: f,
			detail: null == f ? Ao : `${String(f)} Actiware Sleep/Wake epochs`,
			columns: na.length,
			encode: (e) => e.actiwareSleepWakeCsv.bytes
		}),
		k("physical_activity_export.csv", b(u), {
			rows: u,
			detail: null == u || null == d ? Ao : `${String(u)} rows · ${String(d)} distinct dates`,
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
				]), a = e.some((e) => "ggir_enmo" === e.method) ? ba.filter((e) => !i.has(e) && (wr.has(e) || s.has(e))) : [], o = [
					"Participant ID",
					"Threshold Preset Name",
					"Inclusion Rule Preset Name",
					"Scored Username",
					"Source Content Hash",
					"Validation Notes",
					"Notes"
				], l = [[
					...ba.filter((e) => !i.has(e)),
					...a.map((e) => `${e}_missing_reason`),
					...r ? [
						"Epoch Length Seconds",
						"Native Epoch Seconds",
						"Mask Overlap Epochs"
					].map((e) => e + "_missing_reason") : [],
					...o.map((e) => e + "_missing_reason")
				].join(",")];
				for (const c of e) {
					const e = Ma(c), t = null == c.sedentaryMinutes || !n && null == c.excludedNonwearMinutes ? null : c.sedentaryMinutes + (n ? 0 : c.excludedNonwearMinutes), u = [
						ka(c.filename),
						ka(c.participantId),
						ka(c.analysisDate),
						ka(c.method),
						ka(c.methodLabel),
						ka(c.methodFamily),
						ka(c.requiredSignalContract),
						ka(c.computationOwner),
						String(c.frontendComputesMetric),
						ka(c.sourceSignal),
						ka(c.status),
						ka(c.methodRule),
						ka(c.thresholdSource),
						ka(c.thresholdPresetName),
						xa(c.sedentaryMax),
						xa(c.lightMin),
						xa(c.moderateMin),
						xa(c.vigorousMin),
						xa(t),
						xa(c.lightMinutes),
						xa(c.moderateMinutes),
						xa(c.vigorousMinutes),
						xa(c.mvpaMinutes),
						xa(c.mimsUnitTotal),
						null == c.epochLengthSeconds ? "" : String(c.epochLengthSeconds),
						String(c.epochsReviewed),
						xa(c.wakeWearMinutes),
						xa(c.excludedNonwearMinutes),
						xa(c.excludedMainSleepMinutes),
						xa(c.excludedNapMinutes),
						null == c.maskOverlapEpochs ? "" : String(c.maskOverlapEpochs),
						null == c.mvpaBouts ? "" : String(c.mvpaBouts),
						xa(c.mvpaBoutMinutes),
						null == c.sedentaryBouts ? "" : String(c.sedentaryBouts),
						null == c.sedentaryBreaks ? "" : String(c.sedentaryBreaks),
						xa(c.meanSedentaryBoutMinutes),
						null == c.nativeEpochSeconds ? "" : String(c.nativeEpochSeconds),
						String(c.epochMismatch),
						ka(c.inclusionRulePresetName),
						String(c.maskExcludeNonwear),
						String(c.maskExcludeMainSleep),
						String(c.maskExcludeNaps),
						String(c.maskUseManualNonwear),
						String(c.maskUseAlgorithmNonwear),
						ka(c.maskNonwearDetector),
						xa(c.maskMinimumWakeWearMinutes),
						ka(c.scoredUsername),
						ka(c.sourceContentHash),
						ka(c.exportedAt),
						ka(e.status),
						ka(e.notes),
						ka(c.notes)
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
						const t = u[ba.indexOf(e)];
						if ("ggir_enmo" !== c.method || "" !== t) return "";
						if (wr.has(e)) {
							const t = d[e];
							return null != t && Number.isFinite(t) ? "" : "source_reported_missing";
						}
						return s.has(e) && null == p[e] ? "not_computed_for_export" : "";
					}), g = r ? [
						["Epoch Length Seconds", null == c.epochLengthSeconds && "ggir_enmo" === c.method ? "not_applicable_to_row" : ""],
						["Native Epoch Seconds", null == c.nativeEpochSeconds ? "not_applicable" === c.thresholdSource ? "not_applicable_to_row" : "source_reported_missing" : ""],
						["Mask Overlap Epochs", null == c.maskOverlapEpochs ? "ggir_enmo" === c.method ? "not_applicable_to_row" : "needs_signal" === c.status ? "channel_unavailable" : "backend_required" === c.status ? "not_computed_for_export" : "" : ""]
					].map(([e, t]) => "" === u[ba.indexOf(e)] ? t : "") : [];
					l.push([
						...u.filter((e, t) => !i.has(ba[t])),
						...m,
						...g,
						...o.map((e) => "" !== u[ba.indexOf(e)] ? "" : [
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
			detail: null == n ? Ao : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
			columns: 40,
			encode: (t) => t.ggirEntries[e]
		})),
		...y.map((e) => k(e, !(!w && !n?.ggirReviewEntries.includes(e)) || (null == h ? null : h > 0), {
			rows: null,
			detail: e.endsWith(".html") ? null == h ? w ? "1 report" : Ao : `1 report · ${String(h)} ${1 === h ? "file" : "files"}` : "1 GGIR report artifact",
			encode: (t) => t.ggirEntries[e]
		})),
		{
			name: Ar,
			state: "included",
			rows: null,
			detail: "1 reason per missing cell",
			estimatedBytes: 2048 + (t?.actiwareSleepWakeCsv?.reasonChunks.reduce((e, t) => e + t.byteLength, 0) ?? n?.actiwareMissingReasonBytes ?? 0),
			write: null
		},
		k("codebook.csv", !0, {
			rows: Ms.length,
			detail: `${String(Ms.length)} definitions`,
			estimatedBytes: new TextEncoder().encode(As()).length,
			encode: () => di(As(void 0, !0))
		}),
		{
			name: tr,
			state: "included",
			rows: null,
			detail: "1 manifest · run, settings, entry hashes",
			estimatedBytes: 2048,
			write: null
		}
	];
}
async function Eo(e, t, i, s = {}) {
	const { signal: a } = s;
	a?.throwIfAborted(), s.progress?.(0, 0, nr);
	const o = await po(t.fileIds, e, {
		...s,
		signal: a,
		username: t.username
	}), l = function(e, t, i, s) {
		const a = [], o = [], l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = [], d = Se(/* @__PURE__ */ new Date()), p = (e) => {
			for (const t of e.charts) u.push({
				key: t.key,
				pid: t.pid,
				charts: t.charts.length
			}), o.push(li(o.length, t));
			for (const [t, r] of e.csvLinesByAlgo) c.set(t, n(r[0]));
			for (const [t, n] of e.headers) l.set(t, Gr(l.get(t) ?? [], n));
			a.push({
				csvLinesByAlgo: e.csvLinesByAlgo,
				ggirReviews: e.ggirReviews
			});
		};
		async function* m(e, t) {
			for (const n of a) s?.throwIfAborted(), yield mi(n, {
				signal: s,
				names: t,
				layouts: l,
				only: e
			}).then((t) => t[e]);
		}
		return {
			add: p,
			addFiles: async (n) => {
				for (const r of n) p(await gi({
					username: e,
					dateRange: t,
					snapshot: i,
					generatedAt: d
				}, r, s));
			},
			streamEntries: function* () {
				const e = ii([...c.keys()]);
				for (const [t, n] of c) l.set(e.get(t), n);
				for (const t of [...l.keys()].filter(Pr)) {
					const e = l.get(t);
					e && l.set(t, [
						...e.filter((e) => !e.endsWith("_missing_reason") && !$r.includes(e)),
						...$r,
						...e.filter((e) => e.endsWith("_missing_reason") && !$r.some((t) => e === t + "_missing_reason")),
						...$r.map((e) => e + "_missing_reason")
					]);
				}
				for (const [t, n] of l) yield {
					name: t,
					chunks: async function* () {
						yield di(n.map(r).join(",") + "\n");
						for await (const n of m(t, e)) {
							if (!n) continue;
							const e = new TextDecoder().decode(n), t = _(e).records[0], r = di(e.slice(t.text.length + 1));
							for (let n = 0; n < r.byteLength; n += er) yield r.subarray(n, n + er);
						}
					}()
				};
				u.length && (yield {
					name: ti,
					chunks: async function* () {
						yield* ui(function(e, t) {
							const n = e.map((e) => e.key), r = e.reduce((e, t) => e + t.charts, 0);
							return `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${ei(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${ei(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${r} chart${1 !== r ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${ei(e[n].pid)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`;
						}(u, d));
						for await (const { bytes: e, lengths: t } of async function* () {
							for (const { blob: e, lengths: t } of o) s?.throwIfAborted(), yield e.arrayBuffer().then((e) => ({
								bytes: new Uint8Array(e),
								lengths: t
							}));
						}()) {
							let n = 0;
							for (const r of t) yield e.subarray(n, n += r);
						}
						for (const e of ci) yield* ui(e);
					}()
				});
			},
			generatedAt: d
		};
	}(t.username, t.dateRange, o, a), u = [];
	for (const n of o.files) {
		const e = u.at(-1);
		e?.[0]?.filename === n.filename ? e.push(n) : u.push([n]);
	}
	const d = [], p = [], g = [];
	let f = !1;
	const h = t.manifest.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), w = s.groups ?? {
		size: 1,
		run: (e, t, n) => async function(e, t, n, { signal: r } = {}) {
			r?.throwIfAborted();
			const i = e.files.filter((e) => t.includes(e.id)), s = i.map((e) => e.id), a = /* @__PURE__ */ new Map();
			let o = !1;
			try {
				const t = await function(e, { fileIds: t, dateRange: n, signal: r }) {
					const i = ho(e, so.circadian, t);
					return async function(e, t, { dateRange: n, signal: r }) {
						const i = H(r), s = [];
						let a = 0;
						for (const o of e) {
							if (!o.id) continue;
							r?.throwIfAborted();
							const e = await t(o.id), l = [];
							for (const t of e.values()) {
								if (r?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
								a += 1;
								const e = tn(o.id, t);
								e && l.push(e);
							}
							if (0 === l.length) continue;
							const { request: c, transfer: u } = en(l.map((e) => e.wire)), d = await i.computeCircadian(M(c, u));
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
					}(t.length > 0 ? i.files.filter((e) => null != e.id && t.includes(e.id)) : i.files, (e) => So(i, e), {
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
			} catch (p) {
				if (p instanceof go) throw p;
				if (r?.throwIfAborted(), o = !0, p instanceof DOMException && "AbortError" === p.name) throw p;
			}
			const l = await Co(i[0].filename, "computing its sleep rows", () => async function(e, t, n, r, i, s, a) {
				const o = i && i.trim().length > 0 ? i.trim() : null, l = ho(s, so.sleep, e), u = l.files, d = Nn(l.studySettings[0]?.extraSettings), p = Ee(l.studySettings[0]?.extraSettings?.analysis_paradigm), g = (e.length > 0 ? u.filter((t) => null != t.id && e.includes(t.id)) : [...u]).sort((e, t) => e.filename.localeCompare(t.filename)), [f, h] = n ?? ["", ""], _ = [], w = [], v = [], y = [], b = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), x = async () => {
					for (const [e, t] of b) k.set(e, await vs(e, t, _, a));
					b.clear();
				}, M = /* @__PURE__ */ new Map(), S = (e) => {
					const t = JSON.stringify(e);
					let n = M.get(t);
					return n || (n = H(a).exportNapAggregate(e), M.set(t, n)), n;
				}, I = await Promise.all(g.map((e) => ko(s, e.id, t, a)));
				for (const [A, R] of g.entries()) {
					if (a?.throwIfAborted(), A > 0 && g[A - 1].filename !== R.filename && await x(), !R.id) continue;
					const e = So(l, R.id), { bundle: t, markersByAlgo: i } = I[A], s = t?.edits ?? [], u = t ? Ge(t.imported) : [], { zone: k } = await Bn(R, d, a), M = [.../* @__PURE__ */ new Set([...R.availableDates, ...u.map((e) => e.nightDate)])].sort(), T = n ? M.filter((e) => e >= f && e <= h) : M;
					if (t) {
						const e = new Set(Ue(t.imported).map((e) => e.night));
						for (const n of u) {
							if (e.has(n.night) || !T.includes(n.nightDate)) continue;
							const r = Re(n, i.get(n.nightDate)?.[0]).kind;
							"scored" !== r && "invalid" !== r && v.push({
								file: "sleep_export.csv",
								row: 0,
								key: `${te.filename.header}=${R.filename}|${te.study_date.header}=${n.nightDate}`,
								column: `GGIR night ${String(n.night)}: ${qe(t.imported, n.night)}`,
								reason: "ggir_night_excluded"
							});
						}
					}
					const E = ge(e.values()), C = Ne(R, p) ? l.actiwareFileData.find((e) => e.fileId === R.id) ?? null : null, N = C?.actiwareIntervals ?? null, $ = T.flatMap((e) => (i.get(e) ?? []).filter((e) => c(e) || e.nonwearMarkers.length > 0).map((t) => ({
						markers: t,
						sleepPeriods: N ? Ji(N, e, t.isInvalidNight) : t.sleepMarkers,
						nonwear: t.nonwearMarkers.map((e) => ({
							start: e.startTimestamp,
							end: e.endTimestamp
						}))
					}))), O = [...e.keys()].sort().map((t) => e.get(t)), j = O.map((e) => me(e).timestamps), B = as.flatMap((e) => {
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
					}), D = 0 === $.length ? [] : await H(a).exportFileNightFigures($.map(({ sleepPeriods: e, nonwear: t }) => ({
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
						const l = i.get(n);
						if (l && 0 !== l.length) for (const i of l) {
							const l = P.get(i);
							if (!l) continue;
							const { sleepPeriods: c, figures: d } = l, p = R.participantId ?? null, g = R.id, f = i.algorithm ?? null, h = i.username ?? null, v = i.needsConsensus, x = i.notes, M = e.get(n), I = await ie(n, R.navigationFacts, H(a)), T = e.get(I), A = {
								fileId: g,
								filename: R.filename,
								participantId: p,
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
								...gs(i.sleepPeriodDetectionConfig),
								algorithmVersion: i.algorithmVersion ?? null,
								verificationStatus: null,
								studyId: o,
								dstTransition: await rt(k, n, void 0, H(a))
							}, $ = await S(c.filter((e) => e.markerType === m.NAP).map((e) => ({
								start: e.onsetTimestamp,
								end: e.offsetTimestamp
							}))), O = r?.get(`${String(g)}|${n}`), j = {
								l5Hour: O?.l5Hour ?? null,
								m10Hour: O?.m10Hour ?? null,
								napCount: $.napCount,
								totalNapMinutes: $.napCount > 0 ? $.totalNapMinutes : null
							}, D = E(f), L = Rn(M, D), F = `${R.filename}\0${p ?? ""}\0${A.algorithm ?? ""}\0${A.detectionRule ?? ""}`, W = b.get(F) ?? [];
							W.push({
								date: n,
								epochLengthSeconds: R.epochLengthSeconds || 60,
								timestamps: L.timestamps,
								states: L.algorithmResults,
								stale: "stale" === D.status
							}), b.set(F, W);
							const z = me(M), G = await qn(e, n, D, {
								signal: a,
								nextDate: I
							}), V = d.map(({ means: e }) => new Map(B.map(({ field: t }, n) => [t, e[n] ?? null]))), U = async (e, r, o) => {
								let l = null;
								const c = u.find((e) => e.nightDate === n), p = t && c && e.markerType === m.MAIN_SLEEP && "invalid" !== Re(c, i).kind, g = c && s.some((e) => e.night === c.night), f = fs(null), h = {};
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
									for (const [n, r, i, s] of _s) {
										const e = t[r]?.[i] ?? null;
										f[n] = e, h[s] = null == e ? t[r] ? "source_reported_missing" : "not_computed_for_export" : void 0;
									}
								}
								if (!p && !w && e.onsetTimestamp && e.offsetTimestamp) {
									const { timestamps: t, algorithmResults: n, activity: r, scoresStale: i } = G;
									if (null !== i && 0 === y.length && y.push({
										component: "metric_computation",
										code: "unavailable",
										message: i
									}), _ = null !== i ? "scores_from_another_config" : null == n ? "no_scored_epochs" : null == r ? "channel_unavailable" : 0 === t.length ? "no_valid_epochs" : void 0, null != n && t.length > 0 && (null != r || z.ggir)) {
										const i = z.epochSec ?? (R.epochLengthSeconds || 60), s = await ws(n, r, t, e.onsetTimestamp, e.offsetTimestamp, i, a);
										l = s.metrics, l || s.error || (_ = "no_valid_epochs"), s.error && (_ = "not_computed_for_export"), s.error && 0 === y.length && y.push({
											component: "metric_computation",
											code: "unavailable",
											message: "Metric computation failed for at least one selected period; those rows carry no numerics."
										});
									}
								}
								if (p) {
									_ = "channel_unavailable";
									const e = g ? t.current?.nights : t.imported.nights, n = e ? ot(e, te.ggir_night.header, c.night) : -1;
									for (const [t, r, i, s] of hs) {
										const a = e ? at(e, te[r].header, n) : null;
										f[t] = null == a ? null : a * s, h[i] = null == a ? g ? "not_computed_for_export" : "source_reported_missing" : void 0;
									}
								}
								(p || w || l && !("averageAwakeningLengthMinutes" in l)) && (h.average_awakening_length_minutes = "not_computed_for_export");
								const { figures: b } = d[o], k = Boolean(e.onsetTimestamp && e.offsetTimestamp), x = (e) => k ? V[o].get(e) ?? null : null, S = {
									...A,
									...j,
									periodIndex: e.markerIndex,
									markerType: e.markerType,
									onsetTimestamp: e.onsetTimestamp,
									offsetTimestamp: e.offsetTimestamp,
									...p || w ? f : fs(l),
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
									markerType: ds,
									onsetTimestamp: null,
									offsetTimestamp: null,
									...fs(null),
									isInvalidNight: !0,
									sleepMidpointTimestamp: null,
									sleepMidpointHour: null,
									validWearMinutes: null
								});
								for (const [e, t] of c.entries()) _.push(await U(t, !0, e));
							} else for (const [e, t] of c.entries()) _.push(await U(t, !1, e));
							for (const e of i.nonwearMarkers) w.push({
								...A,
								...j,
								periodIndex: e.markerIndex ?? 0,
								markerType: ps,
								onsetTimestamp: e.startTimestamp,
								offsetTimestamp: e.endTimestamp,
								...fs(null),
								isInvalidNight: !1,
								sleepMidpointTimestamp: null,
								sleepMidpointHour: null,
								validWearMinutes: null
							});
						}
					}
				}
				await x(), _.sort(ys), w.sort(ys);
				const T = await async function(e, t) {
					const n = e.filter((e) => e.markerType === m.MAIN_SLEEP), r = /* @__PURE__ */ new Map();
					for (const o of n) {
						const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = r.get(e);
						t ? t.push(o) : r.set(e, [o]);
					}
					const i = [...r], s = await H(t).summarizeExportGroups(i.map(([, e]) => e.map((e) => ({
						study_date: e.studyDate,
						total_nap_minutes: e.totalNapMinutes,
						values: bs.map(([, t]) => e[t])
					})))), a = i.map(([e, t], n) => {
						const [r, i, a, o] = e.split("\0"), l = s[n], c = Object.fromEntries(bs.map(([e], t) => [e, l.means[t] ?? null]));
						return {
							filename: r,
							participantId: i,
							algorithm: a,
							detectionRule: o,
							nNights: l.nNights,
							...c,
							meanTemperatureMissingReason: null == c.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
							metricMissingReasons: Object.fromEntries(bs.map(([e, n]) => {
								const r = ks[e], i = hs.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : r), s = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[i] ?? e.metricMissingReason).find(Boolean);
								return [r, null == c[e] ? s : void 0];
							})),
							sleepRegularityIndex: null,
							meanTotalNapMinutes: l.meanTotalNapMinutes,
							studyId: t[0]?.studyId ?? null
						};
					});
					return a.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), a;
				}(_, a);
				for (const c of T) {
					const e = `${c.filename}\0${c.participantId}\0${c.algorithm}\0${c.detectionRule}`, t = k.get(e);
					c.sleepRegularityIndex = t?.sri ?? null, c.sleepRegularityMissingReason = t?.sriMissingReason ?? (t ? void 0 : "not_computed_for_export");
				}
				return {
					sleepRows: _,
					nonwearRows: w,
					summaryRows: T,
					degradations: y,
					nightReasons: v
				};
			}(s, n.username, n.dateRange, a, n.studyId, e, r)), u = await Co(i[0].filename, "drawing its visual report", async () => {
				const t = [];
				for (const s of i) t.push(await gi({
					...n,
					snapshot: e
				}, s, r));
				return t;
			}), { generateLocalPhysicalActivityExportRows: d } = await import("./local-physical-activity-export-DGJ5f_NX.js");
			return {
				part: l,
				physicalActivityRows: await d(e, s, n.dateRange, {
					username: n.username,
					cutpointOverrides: n.physicalActivity.cutpointOverrides,
					maskPolicy: n.physicalActivity.maskPolicy,
					choiAxis: n.physicalActivity.choiAxis,
					exportedAt: n.exportedAt,
					...r ? { signal: r } : {}
				}),
				eventMarkerRows: await ea(s, n.dateRange, e, n.username, r),
				circadianDegraded: o,
				reports: u
			};
		}(e, t, n, { signal: a })
	}, v = {
		username: t.username,
		studyId: t.studyId,
		dateRange: t.dateRange,
		physicalActivity: t.physicalActivity,
		exportedAt: h,
		generatedAt: l.generatedAt
	}, y = u.map(() => {
		const e = {};
		return e.promise = new Promise((t, n) => {
			e.resolve = t, e.reject = n;
		}), e.promise.catch(() => {}), e;
	});
	let b = 0, k = u.length, x = 0;
	s.progress?.(0, u.length, rr), Promise.all(Array.from({ length: Math.min(w.size, u.length) }, async () => {
		for (; b < k;) {
			const t = b++;
			try {
				y[t].resolve(await w.run(o, u[t].map((e) => e.id), v)), s.progress?.(++x, u.length, rr);
			} catch (e) {
				k = Math.min(k, t), y[t].reject(e);
			}
		}
	}));
	try {
		for (const e of y) {
			a?.throwIfAborted();
			const t = await e.promise;
			d.push(t.part);
			for (const e of t.reports) l.add(e);
			p.push(...t.physicalActivityRows), g.push(...t.eventMarkerRows), f ||= t.circadianDegraded;
		}
	} finally {
		k = 0;
	}
	s.progress?.(0, 0, ir), a?.throwIfAborted();
	const S = function(e) {
		return {
			sleepRows: e.flatMap((e) => e.sleepRows),
			nonwearRows: e.flatMap((e) => e.nonwearRows),
			summaryRows: e.flatMap((e) => e.summaryRows),
			degradations: e.flatMap((e) => e.degradations).slice(0, 1),
			nightReasons: e.flatMap((e) => e.nightReasons ?? [])
		};
	}(d), I = await async function(e, t, n, r, i) {
		i?.throwIfAborted();
		const s = ho(n, so.actiwareInterval, e), a = s.studySettings[0]?.extraSettings?.analysis_paradigm, o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), l = [];
		for (const c of o) {
			i?.throwIfAborted();
			const e = s.actiwareFileData.find((e) => e.fileId === c.id), n = vo(s, c.id, r), o = [...n].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort(), u = s.actiwareStatisticsInputs.find((e) => e.fileId === c.id), d = (e) => H(i).actiwareIntervalStatistics(e), p = Ne(c, a), m = p ? await Qi(e?.actiwareIntervals, u?.input, o, d) : await ts({
				file: e ?? {},
				statisticsInput: u?.input
			}, n, d, i);
			i?.throwIfAborted();
			const g = await zs({
				...c,
				...e,
				actiwareStatistics: m ?? []
			}, t, i, p ? { invalidDates: o } : void 0), f = new Set(n.keys()), h = new Set(o.filter((e) => !t || e >= t[0] && e <= t[1]));
			l.push(...Gs(g.filter((e) => f.has(e.studyDate)), h, c));
		}
		return l;
	}(t.fileIds, t.dateRange, o, t.username, a), T = {}, A = function(e) {
		const t = ho(e, so.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(o);
	A && (T["audit_log.jsonl"] = A);
	const R = async function* (e, t, n, r, i) {
		i?.throwIfAborted();
		const s = ho(n, so.actiwareSleepWake, e), a = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = a.map((e) => s.actiwareFileData.find((t) => t.fileId === e.id)), l = function(e, t = !1) {
			const n = [[
				...na,
				"Sleep/Wake_missing_reason",
				"Wake Threshold_missing_reason",
				...t ? ["Participant ID_missing_reason"] : []
			].join(",")];
			for (const r of e) n.push(ia(r, r.epochTimestamp, r.sleepWake, t));
			return `${n.join("\n")}\n`;
		}([], !0);
		let c = [], u = 0, d = 0;
		const p = () => {
			i?.throwIfAborted();
			const e = function(...e) {
				const t = Nr(...e), n = [];
				for (;;) {
					const e = t.next();
					if (e.done) return {
						...e.value,
						reasons: n
					};
					n.push(e.value);
				}
			}(l + c.join("\n") + "\n", ta, !0, { rowOffset: u }), t = u ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
				bytes: new TextEncoder().encode(t),
				rows: c.length,
				reasonRows: e.reasons.length,
				reasons: new TextEncoder().encode(Rr(e.reasons, !1))
			};
			return u += c.length, c = [], d = 0, n;
		};
		for (const [m, g] of a.entries()) {
			i?.throwIfAborted();
			const e = o[m]?.actiwareSleepWake;
			if (!e) continue;
			const n = o[m]?.actiwareWakeThreshold, a = null != n && Number.isFinite(n) ? n : null, l = new Int8Array(e.scores), u = await ra(e, t, new Set(vo(s, g.id, r).keys()), H(i));
			i?.throwIfAborted();
			for (const { date: t, start: r, end: i } of u) {
				const n = {
					filename: g.filename,
					participantId: g.participantId ?? null,
					studyDate: t,
					sleepDetection: Be(e.params, "sleep_detection"),
					wakeThresholdSelection: Be(e.params, "wake_threshold_selection"),
					wakeThreshold: a,
					...null === a ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
				};
				for (let t = r; t < i; t += 1) {
					const r = l[t], i = ia(n, e.startTimestamp + t * e.epochSeconds, 0 === r || 1 === r ? r : null, !0);
					if (i.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
					c.push(i), d += i.length, (512 === c.length || d >= 32768) && (yield p());
				}
			}
		}
		c.length && (yield p()), i?.throwIfAborted();
	}(t.fileIds, t.dateRange, o, t.username, a), E = await R.next();
	let C = E.done ? 0 : E.value.rows;
	const N = async function* () {
		if (!E.done) {
			yield E.value;
			for await (const e of R) C += e.rows, yield e;
		}
	}(), $ = ho(o, so.manifest), O = Object.fromEntries(S.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	f ||= S.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const j = [...f ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...S.degradations], B = function(e, t) {
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
	}($.ggirResultsBundles, $.ggirCorrectedValues), D = await Co(null, "reading saved GGIR source provenance", () => async function(e, t = H()) {
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
	}($.ggirResultsBundles, H(a))), P = [...l.streamEntries()], L = await ga({
		artifacts: {
			importRefusalReasons: [
				...Io(o),
				...ro(o),
				...no(o),
				...S.nightReasons ?? []
			],
			...S,
			physicalActivityRows: p,
			physicalActivityEnabledClasses: t.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: t.physicalActivity.nonwearAsClass,
			ggirEntries: T,
			eventMarkerRows: g,
			actiwareIntervalRows: I,
			actiwareSleepWakeCsv: {
				rows: C,
				bytes: /* @__PURE__ */ new Uint8Array(),
				reasonChunks: []
			}
		},
		extraEntries: P,
		options: t,
		manifest: {
			...t.manifest,
			physicalActivity: t.physicalActivity,
			exportedAt: h,
			algorithmVersions: O,
			degradations: j,
			ggirSources: D,
			...B,
			executionAttestationIds: $.localExecutions.map((e) => e.attestationId),
			diaryTemporalPolicyByFile: Object.fromEntries($.files.map((e) => [String(e.id), Object.fromEntries($.diaryEntries.filter((t) => t.fileId === e.id).map((e) => [e.analysisDate, e.importMappingProvenance?.diaryTemporalPolicy ?? null]))]))
		},
		sleepWake: N,
		scratchId: i,
		...a ? { signal: a } : {},
		...w.deflate ? { deflate: w.deflate } : {},
		...w.hash ? { hash: w.hash } : {},
		...s.progress ? { progress: s.progress } : {}
	});
	return {
		...L,
		actiwareSleepWakeRows: C,
		degradations: j,
		ggirCorrected: to(B),
		hasData: S.sleepRows.length > 0 || S.nonwearRows.length > 0 || p.length > 0 || L.entries.some((e) => P.some((t) => t.name === e.name)) || Object.keys(T).length > 0,
		rowCount: S.sleepRows.length + S.nonwearRows.length + S.summaryRows.length + p.length,
		dayCount: (/* @__PURE__ */ new Set([
			...S.sleepRows.map((e) => e.studyDate),
			...S.nonwearRows.map((e) => e.studyDate),
			...p.map((e) => e.analysisDate)
		])).size,
		fileCount: o.files.length
	};
}
async function Co(e, t, n) {
	try {
		return await n();
	} catch (r) {
		if (r instanceof DOMException && "AbortError" === r.name) throw r;
		throw new Qn(e, t, r);
	}
}
function No(e, t = /* @__PURE__ */ new Set()) {
	if (e instanceof ArrayBuffer) t.add(e);
	else if (ArrayBuffer.isView(e)) t.add(e.buffer);
	else if (e && "object" == typeof e) for (const n of Object.values(e)) No(n, t);
	return [...t];
}
function $o(e) {
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
				const e = new Worker(new URL("/sleep-scoring-wasm/assets/local-export-shard-worker-DiRk1IN3.js", "" + import.meta.url), { type: "module" });
				return e.addEventListener("error", a), e.addEventListener("messageerror", a), t.push(e), Promise.resolve(b(e));
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
					const n = ao.get(e);
					if (!n) throw new go("Export requires a captured input snapshot");
					const r = new Set(mo.flatMap((e) => Object.keys(so[e])));
					return Object.fromEntries([...r].map((e) => [e, (n[e] ?? []).filter((n) => "studySettings" === e || t.includes("files" === e ? n.id : n.fileId)).map(co)]));
				}(e, t), s = await r.group(t, M(i, No(i)), n);
				if ("failure" in s) throw Qn.fromWire(s.failure);
				return s.result;
			}),
			deflate: {
				lanes: e,
				block: (e, t) => o((n) => n.deflate(M(e, [e.buffer]), M(t, [t.buffer])))
			}
		},
		terminate: () => {
			for (const e of t) e.terminate();
		}
	};
}
y({ async build(e, t, n, r) {
	const i = new h(e), s = $o(Math.max(1, Math.min(8, (navigator.hardwareConcurrency || 2) - 2))), a = function() {
		let e;
		return {
			hash: () => {
				const { api: t } = e ??= k({ singleThread: !0 });
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
					sha256Feed: (e) => t.sha256Feed(M(e, [e.buffer])),
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
		return o = await (await (await (await (await navigator.storage.getDirectory()).getDirectoryHandle(Yn, { create: !0 })).getDirectoryHandle(n, { create: !0 })).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await i.open(), await Eo(i, t, n, {
			...r ? { progress: r } : {},
			binaryStore: o,
			groups: {
				...s.runner,
				hash: a.hash
			}
		});
	} catch (l) {
		if (l instanceof Qn) return { failure: l.wire };
		throw l;
	} finally {
		s.terminate(), a.terminate(), o?.close(), i.close();
	}
} });
export { en as A, fi as C, Vn as D, Gn as E, Bn as O, ji as S, zn as T, Pi as _, Sa as a, Mi as b, Xi as c, Yi as d, Qi as f, vi as g, ss as h, wo as i, tn as j, $n as k, es as l, ns as m, ho as n, Pa as o, is as p, So as r, Fi as s, so as t, Ji as u, wi as v, Un as w, Bi as x, Di as y };
