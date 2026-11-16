import { An as e, In as t, Jt as n, Nn as r, Rt as i, Xt as s, Yt as a, _ as o, a as l, an as c, c as u, f as d, k as p, kt as m, o as g, qt as f, s as h, u as _, wt as w, x as v } from "./schema-MMK46mR-.js";
import { a as y, c as b, n as k, r as x, s as M } from "./workers-B1E_CQH7.js";
import { D as S, W as I, at as R, c as T, it as A, j as E, l as C, nt as N, ot as $, t as O } from "./workspace-db-YhWSrcvp.js";
import { c as j, l as B, n as D, s as P } from "./content-hash-D4_ZE65l.js";
import { n as L, o as F, r as G, v as W } from "./background-jobs-Dz-LteaG.js";
import { n as z, o as V, r as U } from "./raw-pass-pool-BioIlrK-.js";
import { c as H, d as q, f as K, h as J, i as Y, l as Z, m as X, n as Q, p as ee, s as te, t as ne, u as re } from "./ggir-results-types-4WFMLido.js";
import { a as ie } from "./project-revision-CUz5eq5n.js";
import { F as se, Ht as ae, Kt as oe, N as le, P as ce, in as ue, k as de, pt as pe, q as me, qt as ge, rn as fe, x as he } from "./store-CGm5oa9P.js";
import { R as _e, Y as we, d as ve, f as ye, p as be, q as ke, u as xe, y as Me } from "./night-session-registry-Ds5SlWLP.js";
import { $ as Se, C as Ie, N as Re, P as Te, Z as Ae, m as Ee, o as Ce, r as Ne, tt as $e } from "./per-source-defaults-CxbMEjO8.js";
import { E as Oe, F as je, N as Be, c as De } from "./local-nonwear-unified-BZU1ydsO.js";
import { r as Pe, t as Le } from "./diagnostic-log-DgP2mz8K.js";
import { r as Fe } from "./physical-activity-cutpoint-presets-DknwgBpP.js";
import { h as Ge, m as We, v as ze } from "./diary-local-import-contract-DjaiAxQT.js";
import { _ as Ve, a as Ue, d as He, i as qe, m as Ke, o as Je, p as Ye, t as Ze, u as Xe, y as Qe } from "./ggir-results-import-C56nIWoz.js";
import { a as et, u as tt } from "./epoch-utils-DekHoAIG.js";
var nt = Uint8Array, rt = Uint16Array, it = Int32Array, st = new nt([
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
]), at = new nt([
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
]), ot = new nt([
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
]), lt = function(e, t) {
	for (var n = new rt(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
	var i = new it(n[30]);
	for (r = 1; r < 30; ++r) for (var s = n[r]; s < n[r + 1]; ++s) i[s] = s - n[r] << 5 | r;
	return {
		b: n,
		r: i
	};
}, ct = lt(st, 2), ut = ct.b, dt = ct.r;
ut[28] = 258, dt[258] = 28;
for (var pt = lt(at, 0), mt = (pt.b, pt.r), gt = new rt(32768), ft = 0; ft < 32768; ++ft) {
	var ht = (43690 & ft) >> 1 | (21845 & ft) << 1;
	ht = (61680 & (ht = (52428 & ht) >> 2 | (13107 & ht) << 2)) >> 4 | (3855 & ht) << 4, gt[ft] = ((65280 & ht) >> 8 | (255 & ht) << 8) >> 1;
}
var _t = function(e, t, n) {
	for (var r = e.length, i = 0, s = new rt(t); i < r; ++i) e[i] && ++s[e[i] - 1];
	var a, o = new rt(t);
	for (i = 1; i < t; ++i) o[i] = o[i - 1] + s[i - 1] << 1;
	if (n) {
		a = new rt(1 << t);
		var l = 15 - t;
		for (i = 0; i < r; ++i) if (e[i]) for (var c = i << 4 | e[i], u = t - e[i], d = o[e[i] - 1]++ << u, p = d | (1 << u) - 1; d <= p; ++d) a[gt[d] >> l] = c;
	} else for (a = new rt(r), i = 0; i < r; ++i) e[i] && (a[i] = gt[o[e[i] - 1]++] >> 15 - e[i]);
	return a;
}, wt = new nt(288);
for (ft = 0; ft < 144; ++ft) wt[ft] = 8;
for (ft = 144; ft < 256; ++ft) wt[ft] = 9;
for (ft = 256; ft < 280; ++ft) wt[ft] = 7;
for (ft = 280; ft < 288; ++ft) wt[ft] = 8;
var vt = new nt(32);
for (ft = 0; ft < 32; ++ft) vt[ft] = 5;
var yt = _t(wt, 9, 0), bt = _t(vt, 5, 0), kt = function(e) {
	return (e + 7) / 8 | 0;
}, xt = function(e, t, n) {
	return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new nt(e.subarray(t, n));
}, Mt = [
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
], St = function(e, t, n) {
	var r = new Error(t || Mt[e]);
	if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, St), !n) throw r;
	return r;
}, It = function(e, t, n) {
	n <<= 7 & t;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8;
}, Rt = function(e, t, n) {
	n <<= 7 & t;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8, e[r + 2] |= n >> 16;
}, Tt = function(e, t) {
	for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({
		s: r,
		f: e[r]
	});
	var i = n.length, s = n.slice();
	if (!i) return {
		t: jt,
		l: 0
	};
	if (1 == i) {
		var a = new nt(n[0].s + 1);
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
	var m = new rt(p + 1), g = At(n[u - 1], m, 0);
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
		t: new nt(m),
		l: g
	};
}, At = function(e, t, n) {
	return -1 == e.s ? Math.max(At(e.l, t, n + 1), At(e.r, t, n + 1)) : t[e.s] = n;
}, Et = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new rt(++t), r = 0, i = e[0], s = 1, a = function(e) {
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
}, Ct = function(e, t) {
	for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
	return n;
}, Nt = function(e, t, n) {
	var r = n.length, i = kt(t + 2);
	e[i] = 255 & r, e[i + 1] = r >> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
	for (var s = 0; s < r; ++s) e[i + s + 4] = n[s];
	return 8 * (i + 4 + r);
}, $t = function(e, t, n, r, i, s, a, o, l, c, u) {
	It(t, u++, n), ++i[256];
	for (var d = Tt(i, 15), p = d.t, m = d.l, g = Tt(s, 15), f = g.t, h = g.l, _ = Et(p), w = _.c, v = _.n, y = Et(f), b = y.c, k = y.n, x = new rt(19), M = 0; M < w.length; ++M) ++x[31 & w[M]];
	for (M = 0; M < b.length; ++M) ++x[31 & b[M]];
	for (var S = Tt(x, 7), I = S.t, R = S.l, T = 19; T > 4 && !I[ot[T - 1]]; --T);
	var A, E, C, N, $ = c + 5 << 3, O = Ct(i, wt) + Ct(s, vt) + a, j = Ct(i, p) + Ct(s, f) + a + 14 + 3 * T + Ct(x, I) + 2 * x[16] + 3 * x[17] + 7 * x[18];
	if (l >= 0 && $ <= O && $ <= j) return Nt(t, u, e.subarray(l, l + c));
	if (It(t, u, 1 + (j < O)), u += 2, j < O) {
		A = _t(p, m, 0), E = p, C = _t(f, h, 0), N = f;
		var B = _t(I, R, 0);
		for (It(t, u, v - 257), It(t, u + 5, k - 1), It(t, u + 10, T - 4), u += 14, M = 0; M < T; ++M) It(t, u + 3 * M, I[ot[M]]);
		u += 3 * T;
		for (var D = [w, b], P = 0; P < 2; ++P) {
			var L = D[P];
			for (M = 0; M < L.length; ++M) {
				var F = 31 & L[M];
				It(t, u, B[F]), u += I[F], F > 15 && (It(t, u, L[M] >> 5 & 127), u += L[M] >> 12);
			}
		}
	} else A = yt, E = wt, C = bt, N = vt;
	for (M = 0; M < o; ++M) {
		var G = r[M];
		if (G > 255) {
			Rt(t, u, A[257 + (F = G >> 18 & 31)]), u += E[F + 257], F > 7 && (It(t, u, G >> 23 & 31), u += st[F]);
			var W = 31 & G;
			Rt(t, u, C[W]), u += N[W], W > 3 && (Rt(t, u, G >> 5 & 8191), u += at[W]);
		} else Rt(t, u, A[G]), u += E[G];
	}
	return Rt(t, u, A[256]), u + E[256];
}, Ot = new it([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), jt = new nt(0), Bt = function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, r = 9; --r;) n = (1 & n && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), Dt = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
}, Pt = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new nt(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, r, i) {
			if (!i && (i = { l: 1 }, t.dictionary)) {
				var s = t.dictionary.subarray(-32768), a = new nt(s.length + e.length);
				a.set(s), a.set(e, s.length), e = a, i.w = s.length;
			}
			return function(e, t, n, r, i, s) {
				var a = s.z || e.length, o = new nt(r + a + 5 * (1 + Math.ceil(a / 7e3)) + i), l = o.subarray(r, o.length - i), c = s.l, u = 7 & (s.r || 0);
				if (t) {
					u && (l[0] = s.r >> 3);
					for (var d = Ot[t - 1], p = d >> 13, m = 8191 & d, g = (1 << n) - 1, f = s.p || new rt(32768), h = s.h || new rt(g + 1), _ = Math.ceil(n / 3), w = 2 * _, v = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, y = new it(25e3), b = new rt(288), k = new rt(32), x = 0, M = 0, S = s.i || 0, I = 0, R = s.w || 0, T = 0; S + 2 < a; ++S) {
						var A = v(S), E = 32767 & S, C = h[A];
						if (f[E] = C, h[A] = E, R <= S) {
							var N = a - S;
							if ((x > 7e3 || I > 24576) && (N > 423 || !c)) {
								u = $t(e, l, 0, y, b, k, M, I, T, S - T, u), I = x = M = 0, T = S;
								for (var $ = 0; $ < 286; ++$) b[$] = 0;
								for ($ = 0; $ < 30; ++$) k[$] = 0;
							}
							var O = 2, j = 0, B = m, D = E - C & 32767;
							if (N > 2 && A == v(S - D)) for (var P = Math.min(p, N) - 1, L = Math.min(32767, S), F = Math.min(258, N); D <= L && --B && E != C;) {
								if (e[S + O] == e[S + O - D]) {
									for (var G = 0; G < F && e[S + G] == e[S + G - D]; ++G);
									if (G > O) {
										if (O = G, j = D, G > P) break;
										var W = Math.min(D, G - 2), z = 0;
										for ($ = 0; $ < W; ++$) {
											var V = S - D + $ & 32767, U = V - f[V] & 32767;
											U > z && (z = U, C = V);
										}
									}
								}
								D += (E = C) - (C = f[E]) & 32767;
							}
							if (j) {
								y[I++] = 268435456 | dt[O] << 18 | mt[j];
								var H = 31 & dt[O], q = 31 & mt[j];
								M += st[H] + at[q], ++b[257 + H], ++k[q], R = S + O, ++x;
							} else y[I++] = e[S], ++b[e[S]];
						}
					}
					for (S = Math.max(S, R); S < a; ++S) y[I++] = e[S], ++b[e[S]];
					u = $t(e, l, c, y, b, k, M, I, T, S - T, u), c || (s.r = 7 & u | l[u / 8 | 0] << 3, u -= 7, s.h = h, s.p = f, s.i = S, s.w = R);
				} else {
					for (S = s.w || 0; S < a + c; S += 65535) {
						var K = S + 65535;
						K >= a && (l[u / 8 | 0] = c, K = a), u = Nt(l, u + 1, e.subarray(S, K));
					}
					s.i = a;
				}
				return xt(o, 0, r + kt(u) + i);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? i.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, n, r, i);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || St(5), this.s.l && St(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var r = new nt(-32768 & n);
				r.set(this.b.subarray(0, this.s.z)), this.b = r;
			}
			var i = this.b.length - this.s.z;
			this.b.set(e.subarray(0, i), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(i), 32768), this.s.z = e.length - i + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = jt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || St(5), this.s.l && St(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new nt(6);
			t[0] = this.s.r >> 3;
			var n = Nt(t, this.s.r, jt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), Lt = "undefined" != typeof TextEncoder && new TextEncoder(), Ft = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	Ft.decode(jt, { stream: !0 });
} catch (Bo) {}
function Gt(e, t) {
	if (t) {
		for (var n = new nt(e.length), r = 0; r < e.length; ++r) n[r] = e.charCodeAt(r);
		return n;
	}
	if (Lt) return Lt.encode(e);
	var i = e.length, s = new nt(e.length + (e.length >> 1)), a = 0, o = function(e) {
		s[a++] = e;
	};
	for (r = 0; r < i; ++r) {
		if (a + 5 > s.length) {
			var l = new nt(a + 8 + (i - r << 1));
			l.set(s), s = l;
		}
		var c = e.charCodeAt(r);
		c < 128 || t ? o(c) : c < 2048 ? (o(192 | c >> 6), o(128 | 63 & c)) : c > 55295 && c < 57344 ? (o(240 | (c = 65536 + (1047552 & c) | 1023 & e.charCodeAt(++r)) >> 18), o(128 | c >> 12 & 63), o(128 | c >> 6 & 63), o(128 | 63 & c)) : (o(224 | c >> 12), o(128 | c >> 6 & 63), o(128 | 63 & c));
	}
	return xt(s, 0, a);
}
var Wt = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var r = e[n].length;
		r > 65535 && St(9), t += r + 4;
	}
	return t;
}, zt = function(e, t, n, r, i, s, a, o) {
	var l = r.length, c = n.extra, u = o && o.length, d = Wt(c);
	Dt(e, t, null != a ? 33639248 : 67324752), t += 4, null != a && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (s < 0 && 8), e[t++] = i && 8, e[t++] = 255 & n.compression, e[t++] = n.compression >> 8;
	var p = new Date(null == n.mtime ? Date.now() : n.mtime), m = p.getFullYear() - 1980;
	if ((m < 0 || m > 119) && St(10), Dt(e, t, m << 25 | p.getMonth() + 1 << 21 | p.getDate() << 16 | p.getHours() << 11 | p.getMinutes() << 5 | p.getSeconds() >> 1), t += 4, -1 != s && (Dt(e, t, n.crc), Dt(e, t + 4, s < 0 ? -s - 2 : s), Dt(e, t + 8, n.size)), Dt(e, t + 12, l), Dt(e, t + 14, d), t += 16, null != a && (Dt(e, t, u), Dt(e, t + 6, n.attrs), Dt(e, t + 10, a), t += 14), e.set(r, t), t += l, d) for (var g in c) {
		var f = c[g], h = f.length;
		Dt(e, t, +g), Dt(e, t + 2, h), e.set(f, t + 4), t += 4 + h;
	}
	return u && (e.set(o, t), t += u), t;
}, Vt = function() {
	function e(e) {
		var t;
		this.filename = e, this.c = (t = -1, {
			p: function(e) {
				for (var n = t, r = 0; r < e.length; ++r) n = Bt[255 & n ^ e[r]] ^ n >>> 8;
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
		this.ondata || St(5), this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1);
	}, e;
}(), Ut = function() {
	function e(e) {
		this.ondata = e, this.u = [], this.d = 1;
	}
	return e.prototype.add = function(e) {
		var t = this;
		if (this.ondata || St(5), 2 & this.d) this.ondata(St(4 + 8 * (1 & this.d), 0, 1), null, !1);
		else {
			var n = Gt(e.filename), r = n.length, i = e.comment, s = i && Gt(i), a = r != e.filename.length || s && i.length != s.length, o = r + Wt(e.extra) + 30;
			r > 65535 && this.ondata(St(11, 0, 1), null, !1);
			var l = new nt(o);
			zt(l, 0, e, n, a, -1);
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
					var s = new nt(16);
					Dt(s, 0, 134695760), Dt(s, 4, e.crc), Dt(s, 8, g), Dt(s, 12, e.size), c.push(s), m.c = g, m.b = o + g + 16, m.crc = e.crc, m.size = e.size, d && m.r(), d = 1;
				} else d && u();
			}, this.u.push(m);
		}
	}, e.prototype.end = function() {
		var e = this;
		2 & this.d ? this.ondata(St(4 + 8 * (1 & this.d), 0, 1), null, !0) : (this.d ? this.e() : this.u.push({
			r: function() {
				1 & e.d && (e.u.splice(-1, 1), e.e());
			},
			t: function() {}
		}), this.d = 3);
	}, e.prototype.e = function() {
		for (var e = 0, t = 0, n = 0, r = 0, i = this.u; r < i.length; r++) n += 46 + (m = i[r]).f.length + Wt(m.extra) + (m.o ? m.o.length : 0);
		for (var s, a, o, l, c, u = new nt(n + 22), d = 0, p = this.u; d < p.length; d++) {
			var m = p[d];
			zt(u, e, m, m.f, m.u, -m.c - 2, t, m.o), e += 46 + m.f.length + Wt(m.extra) + (m.o ? m.o.length : 0), t += m.b;
		}
		s = u, a = e, o = this.u.length, l = n, c = t, Dt(s, a, 101010256), Dt(s, a + 8, o), Dt(s, a + 10, o), Dt(s, a + 12, l), Dt(s, a + 16, c), this.ondata(null, u, !0), this.d = 2;
	}, e.prototype.terminate = function() {
		for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
		this.d = 2;
	}, e;
}();
function Ht(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function qt(e) {
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
function Kt(e, t) {
	const n = function(e) {
		const t = Ht(e.ggirTimestamps), n = Ht(e.ggirEnmo);
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
const Jt = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], Yt = ["under-series", "over-series"], Zt = ["full-resolution-v1", "min-max-gap-envelope-v1"], Xt = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function Qt(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function en(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? Qt(t, "expected an object") : e;
}
function tn(e, t) {
	return Array.isArray(e) ? e : Qt(t, "expected an array");
}
function nn(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : Qt(t, "expected a finite number");
}
function rn(e, t) {
	const n = nn(e, t);
	return n <= 0 ? Qt(t, "expected a positive number") : n;
}
function sn(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : Qt(t, "expected a safe integer");
}
function an(e, t) {
	const n = sn(e, t);
	return n < 0 ? Qt(t, "expected a non-negative safe integer") : n;
}
function on(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? Qt(t, "expected a boolean") : { [n]: e };
}
function ln(e, t) {
	return "string" != typeof e || 0 === e.length ? Qt(t, "expected a non-empty string") : e;
}
function cn(e, t) {
	return "string" == typeof e && Jt.includes(e) ? e : Qt(t, "expected a supported tone");
}
function un(e, t) {
	return "string" == typeof e && Yt.includes(e) ? e : Qt(t, "expected a supported phase");
}
function dn(e, t) {
	const n = en(e, t), r = nn(n.min, `${t}.min`), i = nn(n.max, `${t}.max`);
	return i <= r || !Number.isFinite(i - r) ? Qt(t, "expected a finite ascending range") : {
		min: r,
		max: i
	};
}
function pn(e, t) {
	const n = `series[${t}]`, r = en(e, n), i = tn(r.points, `${n}.points`);
	let s = Number.NEGATIVE_INFINITY;
	const a = (e) => `${n}.points[${e}]`, o = i.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return Qt(a(t), "expected an object");
		const n = e, r = n.timestamp;
		if ("number" != typeof r || !Number.isFinite(r)) return Qt(`${a(t)}.timestamp`, "expected a finite number");
		if (r <= s) return Qt(`${a(t)}.timestamp`, "expected strictly ascending timestamps");
		s = r;
		const i = n.value;
		return null === i || "number" == typeof i && Number.isFinite(i) ? {
			timestamp: r,
			value: i
		} : Qt(`${a(t)}.value`, "expected a finite number");
	});
	return {
		tone: cn(r.tone, `${n}.tone`),
		strokeWidth: rn(r.strokeWidth, `${n}.strokeWidth`),
		valueDomain: dn(r.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function mn(e, t) {
	const n = `overlays[${t}]`, r = en(e, n), i = {
		phase: un(r.phase, `${n}.phase`),
		order: sn(r.order, `${n}.order`),
		tone: cn(r.tone, `${n}.tone`)
	};
	if ("interval" === r.kind) {
		const e = nn(r.startTimestamp, `${n}.startTimestamp`), t = nn(r.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? Qt(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...i,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === r.kind ? {
		kind: "threshold",
		...i,
		value: nn(r.value, `${n}.value`),
		...on(r.draggable, `${n}.draggable`, "draggable"),
		...on(r.selected, `${n}.selected`, "selected"),
		...on(r.handle, `${n}.handle`, "handle"),
		...void 0 === r.label ? {} : { label: ln(r.label, `${n}.label`) }
	} : "instant" === r.kind ? {
		kind: "instant",
		...i,
		timestamp: nn(r.timestamp, `${n}.timestamp`)
	} : Qt(`${n}.kind`, "expected interval, threshold, or instant");
}
function gn(e, t, n) {
	const r = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(r) ? r : Qt("projection", "expected a finite pixel coordinate");
}
function fn(e, t, n) {
	const r = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(r) ? r : Qt("projection", "expected a finite pixel coordinate");
}
function hn(e) {
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
function _n(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function wn(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, r = t.plotArea.height, i = Xt[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const s = _n(gn(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), a = _n(gn(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${hn(s)}" y="0" width="${hn(Math.max(1, a - s))}" height="${hn(r)}" fill="${i}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const s = fn(e.value, t.valueDomain, r), a = !0 === e.selected, o = a ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${a ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${hn(s)}" x2="${hn(n)}" y2="${hn(s)}" stroke="${i}" stroke-width="${a ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const s = gn(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${hn(s)}" y1="0" x2="${hn(s)}" y2="${hn(r)}" stroke="${i}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function vn(e) {
	const t = function(e) {
		const t = en(e, "scene");
		if (2 !== t.version) return Qt("version", "expected 2");
		const n = en(t.grid, "grid"), r = {
			strategy: (i = n.strategy, "string" == typeof i && Zt.includes(i) ? i : Qt("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: an(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: an(n.renderedPointCount, "grid.renderedPointCount")
		};
		var i;
		if (r.renderedPointCount > r.sourcePointCount) return Qt("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === r.strategy && r.renderedPointCount !== r.sourcePointCount) return Qt("grid", "full-resolution strategy requires equal point counts");
		const s = en(t.size, "size"), a = {
			width: rn(s.width, "size.width"),
			height: rn(s.height, "size.height")
		}, o = en(t.plotArea, "plotArea"), l = {
			left: nn(o.left, "plotArea.left"),
			top: nn(o.top, "plotArea.top"),
			width: rn(o.width, "plotArea.width"),
			height: rn(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > a.width || l.top + l.height > a.height) return Qt("plotArea", "expected bounds contained by size");
		const c = dn(t.viewport, "viewport"), u = dn(t.valueDomain, "valueDomain"), d = tn(t.series, "series").map(pn);
		if (0 === d.length && 0 !== r.renderedPointCount) return Qt("grid.renderedPointCount", "expected zero when series is empty");
		const p = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let h = 0; h < d.length; h++) {
			const e = d[h]?.points ?? [];
			if (e.length !== r.renderedPointCount) return Qt(`series[${h}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== p[t]) return Qt(`series[${h}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const m = tn(t.overlays, "overlays").map(mn), g = null === t.cursorTimestamp ? null : nn(t.cursorTimestamp, "cursorTimestamp");
		let f = null;
		if (null !== t.selection) {
			const e = en(t.selection, "selection"), n = nn(e.startTimestamp, "selection.startTimestamp"), r = nn(e.endTimestamp, "selection.endTimestamp");
			if (r <= n) return Qt("selection", "expected a half-open ascending interval");
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
	}(e), n = hn(t.size.width), r = hn(t.size.height), i = hn(t.plotArea.width), s = hn(t.plotArea.height), a = wn(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
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
			const t = gn(o.timestamp, n.viewport, s);
			let l = a.get(o.value);
			void 0 === l && (l = hn(fn(o.value, e.valueDomain, n.plotArea.height)), a.set(o.value, l)), r += `${i ? "L" : "M"}${hn(t)} ${l}`, i = !0;
		}
		return 0 === r.length ? "" : `<path data-series-index="${t}" d="${r}" fill="none" stroke="${Xt[e.tone]}" stroke-width="${hn(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = wn(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${r}" viewBox="0 0 ${n} ${r}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${r}" fill="#ffffff"/><svg x="${hn(t.plotArea.left)}" y="${hn(t.plotArea.top)}" width="${i}" height="${s}" viewBox="0 0 ${i} ${s}" overflow="hidden"><rect x="0" y="0" width="${i}" height="${s}" fill="#ffffff"/>${a}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = _n(gn(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), r = _n(gn(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${hn(n)}" y="0" width="${hn(Math.max(1, r - n))}" height="${hn(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = gn(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${hn(n)}" y1="0" x2="${hn(n)}" y2="${hn(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${hn(t.plotArea.left)}" y="${hn(t.plotArea.top)}" width="${i}" height="${s}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
async function yn(e, t, n, r, i = 60, s, a) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == r || n >= r) return null;
	const o = new Uint8Array(e.length);
	for (let c = 0; c < e.length; c++) o[c] = 1 === e[c] ? 1 : 0;
	const l = await bn(o, s && s.length === e.length ? s : new Float64Array(e.length), t, n, r, i, a);
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
async function bn(e, t, n, r, i, s = 60, a) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == r || null == i || r >= i) return null;
	const o = await async function(e, t, n, r) {
		const i = await L(r).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === i.length ? {
			startIdx: i[0],
			endIdx: i[1]
		} : null;
	}(n, r, i, a);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, c = o.endIdx + 1, u = e instanceof Uint8Array ? e.slice(l, c) : new Uint8Array(e.slice(l, c)), d = t instanceof Float64Array ? t.slice(l, c) : Float64Array.from(t.slice(l, c)), p = await L(a).computeSleepMetrics(u, d, s), m = n[l] ?? 0, g = n[c - 1] ?? m, f = null != p.firstSleepEpochIdx ? n[l + p.firstSleepEpochIdx] ?? m : m, h = null != p.lastSleepEpochIdx ? n[l + p.lastSleepEpochIdx] ?? g : g;
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
function kn(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const r = ae(e), i = Array.from(r.timestamps);
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
	const l = tt(e, t);
	return {
		timestamps: i,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: a,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
function xn(e) {
	return JSON.stringify([...new Set(e ?? [])]);
}
function Mn(e, t) {
	if (0 === e.length) return null;
	if (e.length === t.timestamps.length && t.timestamps.length > 0) return t.timestamps;
	const n = t.ggirTimestamps;
	return n && e.length === n.length && n.length > 0 ? n : null;
}
const Sn = {
	[v.GT3X_BINARY]: "gt3x_capsense",
	[v.GENEACTIV_BIN]: "detach_nonwear"
};
function In(e, t) {
	return (t ? Ie[t]?.[0] : void 0) || (e ? Sn[e] ?? null : null);
}
async function Rn(e, t, n = x()) {
	const r = e.nonwearBands?.[xn(t)];
	if (null === r) return null;
	if (r) {
		const t = "counts" === r.grid ? e.timestamps : e.ggirTimestamps, [i] = r.detectors;
		if (t && i && t.length === r.mask.length) return {
			detector: i,
			detectors: r.detectors,
			...e.nonwearSourceLabels ? { label: r.detectors.map((t) => e.nonwearSourceLabels?.[t] ?? Be(t)).join(" + ") } : {},
			mask: r.mask,
			...r.weight ? { weight: r.weight } : {},
			grid: t,
			epochSeconds: await pe(t, 60, n)
		};
	}
	const i = [];
	let s = null;
	for (const u of new Set(t ?? [])) {
		if (En(u)) continue;
		const t = e.algorithmicNonwearMasks?.[u];
		if (!t) continue;
		const n = Mn(t, e);
		!n || null !== s && n !== s || (s = n, i.push({
			detector: u,
			mask: t
		}));
	}
	const a = i[0];
	if (!a || !s) return null;
	const o = await pe(s, 60, n), l = [...i, ...await Tn(e, t, {
		grid: s,
		epochSeconds: o
	}, n)];
	if (1 === l.length) return {
		detector: a.detector,
		detectors: [a.detector],
		mask: a.mask,
		grid: s,
		epochSeconds: o,
		...e.nonwearSourceLabels?.[a.detector] ? { label: e.nonwearSourceLabels[a.detector] } : {}
	};
	const c = await n.fuseNonwearMasks(l.map((e) => Uint8Array.from(e.mask)));
	return {
		detector: a.detector,
		detectors: l.map((e) => e.detector),
		...e.nonwearSourceLabels ? { label: l.map(({ detector: t }) => e.nonwearSourceLabels?.[t] ?? Be(t)).join(" + ") } : {},
		mask: c.any,
		weight: c.weight,
		grid: s,
		epochSeconds: o
	};
}
async function Tn(e, t, { grid: n, epochSeconds: r }, i) {
	const s = e.deviceNonwearSource, a = "gt3x_capsense" === s ? E.gt3x_capsense : "detach_nonwear" === s ? E.detach_nonwear : null;
	if (null === a || !(t ?? []).includes(a)) return [];
	const o = (e.sensorNonwearPeriods ?? []).map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	}));
	return [{
		detector: a,
		mask: await je(o, n, r, i)
	}];
}
function An(e, t) {
	return t ? e : e.filter((e) => e !== E.choi_2011 && e !== E.choi_2012);
}
function En(e) {
	return e === E.gt3x_capsense || e === E.detach_nonwear;
}
async function Cn(e, t) {
	return fe("ggir-saved-nonwear-label", j(e), async () => {
		const n = await (t ?? L()).ggirNonwearApproach(e).catch((e) => {
			if (e instanceof Error && "AbortError" === e.name) throw e;
			return null;
		});
		return n ? `GGIR nonwear (van Hees ${n})` : Ae;
	});
}
async function Nn(e, t, n) {
	const r = await e.ggirResultsBundles.get(t);
	return r ? { [E.ggir_saved]: await Cn(r.configCsv, n) } : {};
}
Object.freeze([]), new Set(w.filter((e) => "device_statement" === e.execution).map((e) => e.id)), Object.freeze([E.ggir_part2_invalid]), E.ggir_saved, E.ggir_part2_invalid, E.choi_2011, E.choi_2012, E.van_hees_2013, E.van_hees_2023, E.troiano_2008, E.ahmadi_2020;
const $n = /* @__PURE__ */ new Map();
async function On(e, t, n = !1) {
	let r = $n.get(e);
	const i = void 0 !== r;
	r || (r = L(t).resolveTimezone(e), $n.set(e, r));
	try {
		return await r;
	} catch (St) {
		return $n.get(e) === r && $n.delete(e), t?.throwIfAborted(), i && !n ? On(e, t, !0) : void console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, St);
	}
}
function jn(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : We();
}
async function Bn(e) {
	try {
		return jn((await se(e))?.extraSettings);
	} catch (St) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", St), We();
	}
}
function Dn(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const Pn = {
	zone: null,
	reason: null
};
async function Ln(e, t, n) {
	const r = e.ggirTimezone?.trim();
	let i = null;
	if (r) {
		const e = await On(r, n);
		if (!e) return Pn;
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
	} : Pn;
	const s = await On(t, n);
	if (void 0 === s) return Pn;
	if ("iana" !== s?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const a = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== a && (await ze(s.zone, a, L(n))).includes(i) ? {
		zone: s.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${Dn(i)} is not a ${s.zone} offset`
	};
}
function Fn(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [r, i] of e.entries()) t[r + 1] = t[r] + i.length;
	const n = new Float64Array(t[e.length]);
	for (const [r, i] of e.entries()) n.set(i, t[r]);
	return [n, t];
}
const Gn = Object.freeze({
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
var zn = Wn.map(() => Gn);
Object.fromEntries(Wn.map(([e], t) => [e, zn[t]]));
const Vn = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values(E).filter((e) => ![
		E.choi_2012,
		E.choi_2011,
		E.van_hees_2023,
		E.detach_nonwear
	].some((t) => t === e))
];
async function Un(e, t, n, r) {
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
async function Hn(e, t, n) {
	const r = e instanceof Float64Array ? e : Float64Array.from(e), [i, s] = await (n ?? x()).analysisWindowSlice(r, t);
	return {
		startIndex: i,
		endIndex: s
	};
}
async function qn(e, t = x()) {
	const n = [...new Set(e)], r = await t.analysisDatesOf(Float64Array.from(n)), i = new Map(n.map((e, t) => [e, r[t] ?? ""]));
	return (e) => i.get(e) ?? "";
}
Object.fromEntries(Object.values(E).map((e) => [e, e === E.ggir_saved ? Ae : Be(e)]));
var Kn = t({
	nightPeriodMetrics: () => Zn,
	spanningSeries: () => Yn,
	storeNightPeriodMetrics: () => Xn
});
function Jn(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [r, i] of Object.entries(De(e, e.nonwearChoiAxis ?? Oe()))) i && (n[t[r] ?? r] = new Uint8Array(i));
	return n;
}
async function Yn(e, t, n, r = {}) {
	const { signal: i, includeNonwearMasks: s = !1 } = r, a = e.get(t), o = kn(a, n), l = s && a ? Jn(a) : {}, c = e.get(r.nextDate ?? await et(t, void 0, L(i))), u = o.timestamps[o.timestamps.length - 1], d = c ? kn(c, n) : null, p = d?.timestamps[0], m = void 0 !== c && null !== d && void 0 !== u && void 0 !== p && p > u, g = o.scoresStale ?? d?.scoresStale ?? null;
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
	const v = s ? Jn(c) : {}, y = {};
	for (const b of Vn) {
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
async function Zn(e, t, n, r) {
	const { date: i, file: s, activityMap: a, verdict: o } = t, l = t.spanning ?? await Yn(a, i, o, { signal: r });
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
	for (const m of e.sleepMarkers) p.push(d && u.length > 0 && m.onsetTimestamp && m.offsetTimestamp ? await bn(d, l.activity ?? new Float64Array(d.length), l.timestamps, m.onsetTimestamp, m.offsetTimestamp, s.epochLengthSeconds || 60, r) : null);
	if (void 0 !== e.id) try {
		await ie(n, [n.markers], () => Me(e.id, {
			inputs: c,
			metrics: p
		}, n), r);
	} catch {
		r?.throwIfAborted();
	}
	return p;
}
async function Xn(e, t, n, r) {
	const i = await n.files.get(e.fileId);
	if (!i) return;
	const s = /* @__PURE__ */ new Map();
	for (const a of [e.date, await et(e.date, void 0, L(r))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, a]).first();
		t && s.set(a, t);
	}
	await Zn(e, {
		date: e.date,
		file: i,
		activityMap: s,
		verdict: t
	}, n, r);
}
const Qn = "local-export-streams";
var er = class extends Error {
	name = "ExportSnapshotTooLargeError";
	reason = "snapshot_too_large";
}, tr = class e extends Error {
	file;
	step;
	reason;
	constructor(e, t, n, r = nr(n)) {
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
function nr(e) {
	return e instanceof tr || e instanceof er ? e.reason : e instanceof Error ? e.name : typeof e;
}
const rr = 65536, ir = "manifest.json", sr = "Checking the export inputs", ar = "Reading recordings", or = "Writing ZIP";
function lr(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function cr(e) {
	return String(e).padStart(2, "0");
}
function ur(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const dr = [
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
], pr = (new Set(dr.slice(16).map(([e]) => e)), "actiware_intervals_export.csv"), mr = "actiware_sleep_wake_export.csv", gr = re.invalid_night_row.markerTypeCell, fr = new Set(dr.map(([, e]) => e));
function hr(e, t) {
	const n = e(Z["start" === t ? "interval_start_date" : "interval_end_date"].header), r = e(Z["start" === t ? "interval_start_time" : "interval_end_time"].header);
	return n && r ? `${n}T${r}` : "";
}
const _r = {
	metricColumn: (e) => fr.has(e),
	invalidNightRow: (e) => e(Z.interval_kind.header) === gr,
	reasonFor({ column: e, value: t, producerReason: n, invalidNightRow: r, allRows: i, missing: s }) {
		if (r) return "invalid_night";
		const a = t(Z.interval_kind.header).toLowerCase(), o = hr(t, "start");
		if ("daily" === a && o && o === hr(t, "end")) return "zero_interval_rows";
		if ([
			Z.actiware_onset_latency.header,
			Z.actiware_efficiency.header,
			Z.actiware_waso.header
		].includes(e)) {
			if ("sleep" !== a) return "not_applicable_to_row";
			if (s(t(Z.actiware_duration.header))) return null;
			const e = hr(t, "start"), n = hr(t, "end");
			if (!e || !n) return null;
			let r = !1;
			for (const s of i) if (s.get(Z.filename.header) === t(Z.filename.header) && "rest" === s.get(Z.interval_kind.header) && hr((e) => s.get(e) ?? "", "start") <= e && n <= hr((e) => s.get(e) ?? "", "end")) {
				r = !0;
				break;
			}
			return r ? null : "no_eligible_rest";
		}
		if (s(t(Z.actiware_duration.header))) return null;
		if (e === Z.actiware_off_wrist.header || e === Z.actiware_off_wrist_percent.header) return e === Z.actiware_off_wrist_percent.header && "0.00" === t(Z.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === n ? n : null;
		if (e === Z.actiware_avg_ac_per_min.header) return 100 === Number(t(Z.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			Z.actiware_invalid_sw_percent.header,
			Z.actiware_wake_percent.header,
			Z.actiware_sleep_percent.header
		].includes(e)) {
			if ("0.00" === t(Z.actiware_duration.header)) return "zero_interval_rows";
			const n = !s(t(Z.actiware_wake_time.header)) && !s(t(Z.actiware_sleep_time.header)) && 0 === Number(t(Z.actiware_wake_time.header)) && 0 === Number(t(Z.actiware_sleep_time.header));
			return e === Z.actiware_invalid_sw_percent.header || 100 !== Number(t(Z.actiware_invalid_sw_percent.header)) && !n ? null : "no_scored_epochs";
		}
		const l = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(e);
		if (l) {
			const r = l[1];
			return "0.00" === t(Z.actiware_duration.header) ? "zero_interval_rows" : s(t("%Invalid " + r)) ? "source_reported_missing" === n ? n : null : e.startsWith("TALT ") && !s(t("Exposure " + r)) ? "threshold_unconfigured" : 100 === Number(t("%Invalid " + r)) ? "no_valid_epochs" : null;
		}
		return null;
	}
}, wr = {
	metricColumn: (e) => e === Z.actiware_sleep_wake.header || e === Z.actiware_wake_threshold.header,
	reasonFor: ({ column: e, producerReason: t }) => e === Z.actiware_sleep_wake.header ? "no_valid_epochs" === t ? t : null : e === Z.actiware_wake_threshold.header && "not_computed_for_export" === t ? t : null
}, yr = new Map(Object.entries({
	[pr]: _r,
	[mr]: wr
}));
var br = class extends Error {};
const kr = "edit_recompute_requires_ms2_ms3", xr = /* @__PURE__ */ new Set([
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
]), Mr = re.invalid_night_row.markerTypeCell, Sr = /* @__PURE__ */ new Set([
	Z.ggir_sleepparam.header,
	Z.ggir_guider_onset.header,
	Z.ggir_guider_wakeup.header,
	Z.ggir_guider_spt_duration.header,
	Z.ggir_error_onset.header,
	Z.ggir_error_wake.header,
	Z.ggir_error_dur.header,
	Z.ggir_fraction_night_invalid.header,
	Z.ggir_duration_sib_wakinghours.header,
	Z.ggir_number_sib_sleepperiod.header,
	Z.ggir_number_sib_wakinghours.header,
	Z.ggir_duration_sib_wakinghours_atleast15min.header,
	Z.ggir_guider_onset_ts.header,
	Z.ggir_guider_wakeup_ts.header,
	Z.ggir_page.header,
	Z.ggir_daysleeper.header,
	Z.ggir_sleeplog_id.header,
	Z.ggir_guider.header,
	Z.ggir_longitudinal_axis.header
]), Ir = /* @__PURE__ */ new Set([
	Z.ggir_sleep_duration_in_spt.header,
	Z.ggir_waso.header,
	Z.ggir_number_of_awakenings.header,
	Z.ggir_sleeplatency.header,
	Z.ggir_sleepefficiency.header
]), Rr = /* @__PURE__ */ new Set([
	...Ir,
	Z.ggir_nonwear_perc_spt.header,
	Z.ggir_sleeponset.header,
	Z.ggir_wakeup.header,
	Z.ggir_spt_duration.header,
	Z.ggir_guider_onset.header,
	Z.ggir_guider_wakeup.header,
	Z.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	Z.ggir_sleeponset_ts.header,
	Z.ggir_wakeup_ts.header,
	Z.ggir_guider_onset_ts.header,
	Z.ggir_guider_wakeup_ts.header,
	Z.ggir_daysleeper.header,
	Z.ggir_cleaningcode.header,
	Z.ggir_guider.header,
	Z.ggir_error_onset.header,
	Z.ggir_error_wake.header,
	Z.ggir_error_dur.header,
	Z.ggir_fraction_night_invalid.header,
	Z.ggir_duration_sib_wakinghours.header,
	Z.ggir_number_sib_sleepperiod.header,
	Z.ggir_number_sib_wakinghours.header,
	Z.ggir_duration_sib_wakinghours_atleast15min.header
]), Tr = /* @__PURE__ */ new Set([
	Z.ggir_id.header,
	Z.ggir_filename.header,
	Z.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	Z.ggir_sleep_regularity_index1.header,
	Z.ggir_sri_fraction_valid.header,
	Z.ggir_calendar_date.header,
	Z.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	Z.ggir_cleaningcode.header,
	Z.ggir_guider.header,
	Z.ggir_sleeplog_used.header,
	Z.ggir_acc_available.header,
	Z.ggir_daysleeper.header
]), Ar = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), Er = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), Cr = new Set(Object.values(Z).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), Nr = new Set(Object.values(Z).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), $r = new Set(Object.values(ee).map((e) => e.reviewSource)), Or = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim()), jr = Or, Br = "refusal_detail_missing_reason";
function Dr(e, t, n, r) {
	const i = (e) => n.get(e) ?? "", s = i(t + "_missing_reason");
	if (s && !xr.has(s)) return null;
	const a = s || null;
	if (e.startsWith("part2_")) return "source_reported_missing";
	if (e.includes("_ggir_review")) {
		if (a) return a;
		const e = i("review_source");
		return $r.has(e) ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const o = yr.get(e), l = i(Z.marker_type.header) === Mr || (o?.invalidNightRow?.(i) ?? !1);
	if (!function(e, t) {
		const n = yr.get(e);
		return n ? n.metricColumn(t) : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			Z.ggir_id.header,
			Z.ggir_filename.header,
			Z.ggir_calendar_date.header,
			Z.ggir_weekday.header,
			Z.ggir_sleeplog_id.header,
			Z.ggir_guider_corrected.header,
			Z.ggir_cleaningcode.header
		].includes(t) : Cr.has(t);
	}(e, t)) return a || (l ? "invalid_night" : "Manual Nonwear" === i(Z.marker_type.header) ? "manual_nonwear_period" : null);
	if (o) return o.reasonFor({
		column: t,
		value: i,
		producerReason: a,
		invalidNightRow: l,
		allRows: r,
		missing: jr
	});
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return Sr.has(t) ? "not_computed_for_export" === a ? a : null : Ir.has(t) ? "no_scored_epochs" === a || "not_applicable_to_row" === a || "scores_from_another_config" === a ? a : null : a;
	if ("sleep_export_wide.csv" === e) return a;
	if ("summary_export.csv" === e && t === Z.sleep_regularity_index.header) return a && [
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
		const s = m.find((e) => e.method === n);
		return r && s?.cutpoint && !Number.isFinite(s.cutpoint[r]) || "MIMS Unit Total" === t && "mims" !== n ? "not_applicable_to_row" : "ggir_enmo" === n ? Ar.has(t) ? "source_reported_missing" === a ? a : null : Er.has(t) && "not_computed_for_export" === a ? a : null : "mims" === n && [
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
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === i(Z.marker_type.header) ? "manual_nonwear_period" : null : "true" === i(Z.is_invalid_night.header).toLowerCase() && i(Z.marker_type.header) === Mr ? "invalid_night" : t === Z.total_nap_minutes.header && "0" === i(Z.nap_count.header) ? "not_applicable_to_row" : [
		Z.l5_hour.header,
		Z.m10_hour.header,
		Z.sleep_midpoint_hour.header,
		Z.valid_wear_minutes.header
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
const Pr = "missing_reasons.csv";
function Lr(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(i).join(","))].map((e) => e + "\n").join("");
}
function Fr(e, t) {
	const n = [
		Z.filename.header,
		Z.ggir_filename.header,
		"ggir_filename",
		Z.participant_id.header,
		Z.ggir_id.header,
		Z.study_date.header,
		"Analysis Date",
		Z.ggir_calendar_date.header,
		"ggir_calendar_date",
		Z.interval_kind.header,
		Z.marker_type.header,
		Z.interval_start_date.header,
		Z.interval_start_time.header,
		Z.epoch_local.header,
		"Method"
	].flatMap((t) => {
		const n = e.get(t);
		return n ? [t + "=" + n] : [];
	});
	return n.length ? n.join("|") : "row=" + String(t);
}
function Gr(e, t) {
	let n = !1, r = 0;
	for (let i = 0; i < e.length; i += 1) if ("\"" === e[i]) n && "\"" === e[i + 1] ? i += 1 : n = !n;
	else if ("," === e[i] && !n && ++r === t) return e.slice(0, i);
	return e;
}
function* Wr(e, t, r = !0, i) {
	const { headerlessColumns: s, fullRowCsv: a, rowOffset: o = 0, contextRows: l } = i ?? {}, c = s?.length ? s.join(",") + "\n" + e : e, u = n(c);
	if (u.unterminatedQuotedField) throw new Error(t + ": unterminated CSV cell");
	const [d, ...p] = u.records;
	if (!d) return {
		csv: e,
		withReason: 0,
		withoutReason: 0
	};
	const m = f(d.text), g = m.findIndex((e) => e.endsWith("_missing_reason"));
	if (g >= 0 && m.slice(g).some((e) => !e.endsWith("_missing_reason"))) throw new Error(t + ": internal reason fields must trail data fields");
	const h = m.map((e, t) => ({
		header: e,
		index: t
	})).filter(({ header: e }) => "" !== e && !e.endsWith("_missing_reason")), _ = p.map((e) => f(e.text)), w = _.map((e) => new Map(m.map((t, n) => [t, e[n] ?? ""]))), v = a ? n(a).records : [], y = v[0] ? f(v[0].text) : [], b = a ? v.slice(1).map((e) => f(e.text)) : [];
	if (a && h.length > 0 && b.length !== _.length) throw new Error(t + ": complete-row evidence count differs");
	const k = a ? b.map((e) => new Map(y.map((t, n) => [t, e[n] ?? ""]))) : w;
	let x = 0, M = 0;
	for (let n = 0; n < _.length; n += 1) {
		const e = _[n], r = w[n];
		for (const { header: s, index: a } of h) {
			if ("edit_recompute_requires_ms2_ms3" === k[n].get(s + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
				yield {
					file: t,
					row: o + n + 1,
					key: Fr(r, o + n + 1),
					column: s,
					reason: kr
				}, x += 1;
				continue;
			}
			const i = e[a] ?? "";
			if (!jr(i) || "" !== i.trim() && Nr.has(s)) continue;
			const c = Dr(t, s, k[n], l?.() ?? k);
			c ? (x += 1, yield {
				file: t,
				row: o + n + 1,
				key: Fr(r, o + n + 1),
				column: s,
				reason: c
			}) : (M += 1, console.warn("WARNING: unreasoned missing export cell"));
		}
		const i = r.get(Br);
		i && (yield {
			file: t,
			row: o + n + 1,
			key: Fr(r, o + n + 1),
			column: i,
			reason: "not_computed_for_export"
		});
	}
	if (r && M > 0) throw new br(t + ": " + String(M) + " unreasoned missing metric cells");
	return g < 0 ? {
		csv: e,
		withReason: x,
		withoutReason: M
	} : {
		csv: [Gr(d.text, g), ...p.map((e) => Gr(e.text, g))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: x,
		withoutReason: M
	};
}
var zr = t({
	GgirReviewChangedError: () => ui,
	editsFromMarkers: () => Qr,
	getGgirMarkerInputs: () => ei,
	ggirInvalidNightDates: () => ai,
	ggirNightEdits: () => Xr,
	ggirNightRecords: () => Zr,
	ggirPersonReportsRecomputed: () => oi,
	hasGgirRecomputeFailure: () => Kr,
	mergeGgirSleepMarkers: () => Yr,
	recomputeGgirResults: () => ri,
	recoverPendingGgirRecomputes: () => ci,
	reviewGgirResultsForMarkers: () => gi,
	scheduleGgirRecompute: () => ni,
	settleGgirScorerReviews: () => si,
	storedGgirTailExpansion: () => mi
});
const Vr = new EventTarget(), Ur = /* @__PURE__ */ new WeakMap(), Hr = 800, qr = "Update GGIR review";
function Kr(e, t, n) {
	return A.getState().jobs[`${n.name}:${ti(e, t)}`]?.status === $.FAILED;
}
function Jr(e, t, n, i, s) {
	if (s?.aborted || function(e) {
		return e instanceof Error && e.name === r.errnames.DatabaseClosed;
	}(i)) return;
	const a = ti(e, t), o = `${n.name}:${a}`, l = A.getState();
	l.jobs[o]?.controller.signal.aborted || l.jobs[o]?.status === $.ELSEWHERE || (l.update(o, {
		id: o,
		key: a,
		workspaceId: n.name,
		kind: R.GGIR_RECOMPUTE,
		label: qr,
		controller: l.jobs[o]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: $.FAILED
	}), n.isOpen() && O() === n && Vr.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function Yr(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function Zr(e, t, n, r = [], i, s = L(i)) {
	const a = me([...n.values()].flat(), !0), o = a?.algorithm ?? Ue(t), l = a?.detectionRule ?? null, u = /* @__PURE__ */ new Map();
	for (const [c, m] of n) {
		const e = me(m, !0);
		e && u.set(c, [{
			...e,
			algorithm: o,
			detectionRule: l
		}]);
	}
	const d = Ye(t), p = d.length ? await s.ggirLabelsToStoredMs(Float64Array.from(d.flatMap((e) => [e.onsetMs, e.wakeMs])), r) : [];
	for (const [m, g] of d.entries()) {
		const t = u.get(g.nightDate)?.[0], n = Se(g, t);
		"scored" !== n.kind && "invalid" !== n.kind ? u.set(g.nightDate, [{
			fileId: e,
			date: g.nightDate,
			username: we,
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
			sleepMarkers: Yr({
				markerType: c.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: p[2 * m] / 1e3,
				offsetTimestamp: p[2 * m + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : u.set(g.nightDate, t ? [t] : []);
	}
	return u;
}
async function Xr(e, t, n, r = [], i, s = L(i)) {
	const a = await Zr(e, t, n, r, i, s), o = new Map([...a].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : []));
	return {
		markersByAlgo: a,
		selected: o,
		edits: await Qr(t, o, r, i, s)
	};
}
async function Qr(e, t, n = [], r, i = L(r)) {
	const s = Ke(e).flatMap((e) => {
		const n = Se(e, t.get(e.nightDate));
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
async function ei(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [r, i] = await Promise.all([he(e, t, n), de(e, n)]), s = new Map([...r].flatMap(([e, t]) => {
			const n = me(t, !0);
			return n ? [[e, n]] : [];
		})), a = i?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([a ?? [], [...s].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				Se(void 0, t)
			])]),
			markers: s,
			clockSteps: a,
			bundleRevision: i?.ggirBundleRevision
		};
	});
}
function ti(e, t) {
	return `${R.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function ni(e, t, n, r) {
	if (!n.isOpen() || O() !== n || r?.aborted) return;
	let i = Ur.get(n);
	i || (i = /* @__PURE__ */ new Map(), Ur.set(n, i));
	const s = ti(e, t);
	clearTimeout(i.get(s)), i.set(s, setTimeout(() => {
		i.delete(s), n.files.get(e).then((i) => {
			if (i?.ggirBundleRevision && n.isOpen() && O() === n && !r?.aborted) return ri(e, t, n, r);
		}).catch((i) => {
			r?.aborted || i instanceof DOMException && "AbortError" === i.name || (Jr(e, t, n, i, r), n.isOpen() && O() === n && Pe("error", "GGIR results recompute failed", Le(i)));
		});
	}, Hr));
}
function ri(e, t, n, r, i = !0) {
	const s = (a, o = r) => G({
		kind: R.GGIR_RECOMPUTE,
		key: ti(e, t),
		label: qr,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (r) => {
			r.signal.throwIfAborted();
			const o = await ii(e, t, n, r.signal, i);
			if (r.signal.throwIfAborted(), !1 !== o) return o;
			if (a < 2) s(a + 1, r.signal).catch((i) => Jr(e, t, n, i, r.signal));
			else {
				const i = /* @__PURE__ */ new Error("The markers changed during every GGIR review attempt.");
				Pe("error", "GGIR results recompute failed", Le(i)), Jr(e, t, n, i, r.signal);
			}
			return null;
		}
	});
	return s(0);
}
async function ii(e, t, n, r, i, s = { active: () => n.isOpen() && O() === n }) {
	if (r.throwIfAborted(), !s.active()) return null;
	const { markerInputs: a, markers: o, clockSteps: l, bundleRevision: c } = await ei(e, t, n);
	if (!c) return null;
	const u = await n.ggirScorerReviews.get([e, t]);
	if (!s.active()) return null;
	if (r.throwIfAborted(), u?.markerInputs === a && u.bundleRevision === c && (d = u, void 0 === s.correctedKey || 0 === d.edits.length || d.corrected?.key === s.correctedKey)) return i && Vr.dispatchEvent(new CustomEvent("updated", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })), u.current ?? null;
	var d;
	const p = await n.ggirResultsBundles.get(e);
	if (!p) return null;
	const { edits: m } = await Xr(e, p.imported, new Map([...o].map(([e, t]) => [e, [t]])), l, r, s.api);
	if (!s.active()) return null;
	const g = di(u, c, m), f = void 0 !== s.correctedKey && m.length > 0 && !p.ggirCorrections && !(g && u.corrected?.key === s.correctedKey), h = m.length > 0 && (!g || f) ? _(p, await n.ggirResultsBlobs.get(e)) : p, w = g ? u.current : (await gi(h, o, l, m, r, void 0, s.api)).current;
	let v = g ? u.corrected : void 0;
	if (f) {
		const t = await n.ggirCorrectedValues.get(e);
		if (!t || t.key !== s.correctedKey) return null;
		const i = He(h, t).find((e) => "corrected" === e.set), a = i && (await gi(i.bundle, o, l, m, r, void 0, s.api)).current;
		v = {
			key: t.key,
			...a ? { current: a } : {}
		};
	}
	r.throwIfAborted();
	const y = (/* @__PURE__ */ new Date()).toISOString();
	if (!s.active()) return null;
	const b = await ie(n, [
		n.ggirResultsBundles,
		n.ggirScorerReviews,
		n.markers,
		n.files
	], async () => {
		if (!s.active()) return null;
		const i = await ei(e, t, n);
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
	return b ? (Vr.dispatchEvent(new CustomEvent("updated", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })), r.throwIfAborted(), w ?? h.imported) : (r.throwIfAborted(), !1 !== b && null);
}
async function si(e, t, n, r, i = {}) {
	const s = await (t.length ? e.ggirResultsBundles.where(":id").anyOf([...t]) : e.ggirResultsBundles.toCollection()).primaryKeys(), a = (e) => {
		const t = r?.get(e);
		return t && "key" in t ? t.key : void 0;
	}, o = async (t) => {
		const r = await Promise.all(t.map((t) => async function(e, t, n, r) {
			const [{ markerInputs: i, bundleRevision: s }, a] = await Promise.all([ei(t, n, e), e.ggirScorerReviews.get([t, n])]);
			return !(!a || !s || a.markerInputs !== i || a.bundleRevision !== s || 0 !== a.edits.length && ((await e.ggirResultsBundles.get(t))?.ggirCorrections || void 0 !== r && a.corrected?.key !== r));
		}(e, t, n, a(t))));
		return t.filter((e, t) => !r[t]);
	}, l = await o(s);
	if (0 === l.length) return new Set(await li(e, s, n, i.signal));
	const c = i.signal ?? new AbortController().signal, u = (await e.files.bulkGet(l)).map((e) => e?.sourceSizeBytes ?? 0);
	return await V(l.map((t, r) => ({
		name: String(t),
		cost: u[r],
		memoryGib: z(u[r]),
		run: async (r, i) => {
			try {
				await ii(t, n, e, c, !1, {
					active: () => e.isOpen(),
					api: r,
					correctedKey: a(t)
				});
			} catch (s) {
				c.throwIfAborted(), Pe("warn", "GGIR review settle before export failed", Le(s)), i.primary || i.cancel();
			}
		}
	})), {
		signal: i.signal,
		createWorker: k,
		cancelOperation: () => {},
		...U({
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: W()
		}),
		...i.workerPool
	}), /* @__PURE__ */ new Set([...await o(l), ...await li(e, s, n, i.signal)]);
}
function ai(e) {
	return new Set([...e].filter(([, e]) => "invalid" === Se(void 0, e).kind).map(([e]) => e));
}
function oi(e, t, n) {
	return void 0 !== e && (t.length > 0 || n.size > 0);
}
function li(e, t, n, r) {
	return t.reduce(async (t, i) => {
		const s = await t, [a, o] = await Promise.all([e.ggirResultsBundles.get(i), e.ggirScorerReviews.get([i, n])]);
		if (!a?.personReports || void 0 !== a.imported.tailExpansion || void 0 !== o?.current?.tailExpansion) return s;
		const { markers: l, clockSteps: c } = await ei(i, n, e), { selected: u, edits: d } = await Xr(i, a.imported, new Map([...l].map(([e, t]) => [e, [t]])), c, r);
		return oi(a.personReports, d, ai(u)) ? [...s, i] : s;
	}, Promise.resolve([]));
}
function ci(e, t) {
	return G({
		kind: R.GGIR_RECOVERY,
		key: R.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = null;
			const r = () => !t.signal.aborted && e.isOpen() && O() === e;
			try {
				if (!r()) return;
				const s = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: a } = await import("./ggir-import-CBfvAWA3.js").then((e) => e.t);
				for (const o of s) {
					if (t.signal.throwIfAborted(), !r()) return;
					try {
						const [n] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), a(o, e, t.signal)]), s = await e.markers.where("fileId").equals(o).toArray(), l = /* @__PURE__ */ new Set([...s.map((e) => e.username), ...n.map((e) => e.scorer)]);
						l.delete(we);
						for (const a of l) {
							if (!r()) return;
							try {
								const r = Kr(o, a, e);
								if (!r) {
									const { markerInputs: t, bundleRevision: r } = await ei(o, a, e), i = n.find((e) => e.scorer === a);
									if (r && i?.markerInputs === t && i.bundleRevision === r) continue;
								}
								await ri(o, a, e, t.signal, r);
							} catch (i) {
								Jr(o, a, e, i, t.signal);
							}
						}
					} catch (i) {
						n ??= i;
					}
				}
			} catch (i) {
				n ??= i;
			} finally {
				t.signal.throwIfAborted();
				const s = Object.values(A.getState().jobs).filter((t) => N(t) && t.workspaceId === e.name && t.kind === R.GGIR_RECOMPUTE && t.status === $.FAILED);
				for (const t of s) {
					const s = t.key.slice(R.GGIR_RECOMPUTE.length + 1);
					if (!r()) break;
					const a = s.indexOf(":"), o = Number(s.slice(0, a)), l = JSON.parse(s.slice(a + 1));
					try {
						await e.transaction("r", e.ggirResultsBundles, e.markers, e.ggirScorerReviews, async () => {
							if (!r()) return;
							const [n, i, s] = await Promise.all([
								e.ggirResultsBundles.where(":id").equals(o).count(),
								e.markers.where("fileId").equals(o).filter((e) => e.username === l).count(),
								e.ggirScorerReviews.where("[fileId+scorer]").equals([o, l]).count()
							]);
							r() && (0 === n || 0 === i && 0 === s) && (A.getState().dismiss(t.id), Vr.dispatchEvent(new CustomEvent("updated", { detail: {
								fileId: o,
								scorer: l,
								db: e
							} })));
						});
					} catch (i) {
						n ??= i;
					}
				}
				null !== n && r() && (Pe("error", "GGIR review recovery failed", Le(n)), A.getState().update(`${e.name}:${R.GGIR_RECOVERY}`, { status: $.FAILED }));
			}
		}
	});
}
var ui = class extends Error {
	constructor() {
		super("a night of this recording was edited during the export; export again");
	}
};
function di(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
function pi(e, t) {
	const n = (e) => e ? new Uint8Array(e) : void 0, r = n(e.ms2), i = n(e.ms3), a = n(e.ms4), o = n(e.ms5), l = n(e.sleeplogRData);
	return {
		part1: new Uint8Array(e.part1),
		configCsv: e.configCsv,
		recordingId: s(e.recordingFile),
		...r ? { ms2: r } : {},
		...i ? { ms3: i } : {},
		...a ? { ms4: a } : {},
		...o ? { ms5: o } : {},
		...l ? { sleeplogRData: l } : {},
		...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
		edits: t,
		...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
		crossCheck: !1
	};
}
async function mi(e, t) {
	return Object.hasOwn(e, "part1") ? (await F(t, (t) => t.reviewGgirResults(pi(e, [])))).tailExpansion : null;
}
async function gi(e, t, n = [], r, i, s, a) {
	const o = r ?? await Qr(e.imported, t, n, i, a);
	let l;
	i?.throwIfAborted();
	const c = s?.review;
	if (di(c, s?.bundleRevision, o)) l = c.current;
	else {
		if (s && o.length > 0 && !e.part1) throw new ui();
		if (o.length > 0 && e.ms2 && e.ms3) {
			const t = (t) => t.reviewGgirResults(pi(e, o));
			l = Qe(await (a ? t(a) : F(i, t)));
		}
	}
	i?.throwIfAborted();
	const u = Object.getOwnPropertyDescriptors(e);
	return delete u.current, Reflect.deleteProperty(u, "edits"), Object.defineProperties({
		...l ? { current: l } : {},
		edits: o
	}, u);
}
const fi = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], hi = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : i(String(e)), _i = (K.part4_night_review, K.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function wi(e, t, n = "") {
	return K[e].replace("{report}", n.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${ee[t].filenameSuffix}.csv`);
}
const vi = Object.keys(ee).map((e) => wi("person_summary_review", e)), yi = (e) => vi.some((t) => e.endsWith(t));
function bi(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return a(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? a(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function ki(e, t) {
	const n = new Map(Ke(e).map((e) => [e.night, e.nightDate]));
	return (e, r, i = !0) => {
		const s = e.columns.indexOf("nights" === t ? Z.ggir_night.header : "night_number"), a = Number(e.values[s]?.[r]), o = n.get(a);
		if (i && o) return o;
		const l = e.values[e.columns.indexOf(Z.ggir_calendar_date.header)]?.[r];
		return bi(l);
	};
}
async function xi(e, t, n, r) {
	const s = "nights" === t ? Z.ggir_night.header : "window_number", a = L(n), o = await Promise.all(e.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await qe(e.imported, e.edits, t.night, n)])))), l = (await Promise.all(e.map(async (e, n) => {
		const r = e.current ?? e.imported, i = (e) => "nights" === t ? e.nights : e.days, s = "nights" === t ? r.nightRecomputed : r.dayRecomputed, l = "nights" === t ? e.imported.nightChecks : e.imported.dayChecks, c = o[n].filter((e) => null != e[1]), u = ki(e.imported, t), d = new Set(e.edits.map((e) => e.night)), p = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, m = /* @__PURE__ */ new Set();
		if ("days" === t && p) {
			const t = await Promise.all(Ke(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), r = t.nightDate, i = n.onset < "12:00:00" ? await et(r, void 0, a) : r, s = n.wake <= n.onset ? await et(i, void 0, a) : i;
				return [Math.min(t.onsetMs, Date.parse(`${i}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${s}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: r.days.rows }, async (e, n) => {
				const i = Number(r.days.values[r.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(i)) return void m.add(n);
				const s = u(r.days, n, !1), o = r.days.values[r.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof o ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(o) : null;
				if (!s || !l) return;
				const c = Date.parse(`${s}T${l[1]}Z`), p = l[2] < l[1] ? await et(s, void 0, a) : s, g = Date.parse(`${p}T${l[2]}Z`);
				t.some(([e, t]) => c <= t && g >= e) && m.add(n);
			}));
		}
		return {
			source: ee[_i(e)].reviewSource,
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
	const c = r ? r.filter((e) => !e.endsWith("_missing_reason") && !fi.includes(e)) : [];
	for (const i of r ? [] : l) for (const e of i.table.columns) e.endsWith("_missing_reason") || c.includes(e) || c.push(e);
	const u = new Set("nights" === t ? te.ggir_review_night_extension.map((e) => Z[e].header) : []), d = r ? c.filter((e) => r.includes(e + "_missing_reason")) : c.filter((e) => u.has(e) || l.some((e) => e.editRecomputeUnavailable || e.source === ee.corrected.reviewSource)), p = [[
		...c.map(i),
		...fi,
		...d.map((e) => i(e + "_missing_reason")),
		...fi.map((e) => e + "_missing_reason")
	].join(",")], m = (e, t) => {
		const n = e.columns.indexOf(s);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: g, ggir: f, recomputed: h, provenance: _, checks: w, scoredDates: v, invalidDates: y, dateOf: b, editRecomputeUnavailable: k, editedNights: x, editedDayRows: M, savedNights: S, source: I } of l) {
		const e = S.columns.filter((e) => !Rr.has(e)), n = e.filter((e) => {
			const t = S.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return S.values[t].some((e, t) => {
				const r = Number(S.values[S.columns.indexOf(Z.ggir_night.header)]?.[t]), i = n.has(r) && !Object.is(n.get(r), e);
				return n.set(r, e), i;
			});
		}), r = /* @__PURE__ */ new Set(), s = (e) => Array.from({ length: f.rows }, (e, t) => t).find((t) => !r.has(t) && m(f, t) === m(g, e) && n.every((n) => Object.is(f.values[f.columns.indexOf(n)]?.[t] ?? null, g.values[g.columns.indexOf(n)]?.[e] ?? null))), a = new Set(c.filter((n) => "nights" === t ? Rr.has(n) : !Tr.has(n) && !e.includes(n))), o = (n, r, s, o) => {
			const l = w.get(m(n, r));
			return [
				...c.map((i) => {
					if ("invalid" === s && ("nights" === t ? Rr.has(i) : /sleep|spt|waso|wake|onset|guider/i.test(i) && !e.includes(i))) return "";
					const a = n.columns.indexOf(i);
					return a < 0 ? "" : hi(n.values[a]?.[r]);
				}),
				s,
				l?.status ?? "",
				i((l?.reasons ?? []).join(";")),
				i((l?.diffs ?? []).map((e) => e.column).join(";")),
				i(o),
				...d.map((e) => "invalid" !== s || u.has(e) && e !== Z.ggir_nonwear_perc_spt.header ? k && s === I && a.has(e) && ("days" === t ? M.has(r) : x.has(m(n, r))) ? kr : u.has(e) ? null != Q(n, e, r) ? "" : hi(ne(n, e + "_missing_reason", r) ?? "source_reported_missing") : s === I ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
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
function Mi(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const r of e) for (const [e, t] of Object.entries(r.part2Reports ?? {})) {
		const i = wi("part2_report", _i(r), e);
		n.set(i, [...n.get(i) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const r = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], s = [r.map(i).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) s.push(r.map((n) => hi(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, s.join("\n") + "\n"];
	}));
}
function Si(e, t) {
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
const Ii = (e, t) => Ke(e).filter((e) => t?.has(e.nightDate));
async function Ri(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: kr,
		detail: ""
	};
	const r = e.current ?? e.imported, i = L(n);
	try {
		const s = r.tailExpansion ?? e.imported.tailExpansion ?? await mi(e, n);
		if (null === s) throw new Error("The export snapshot did not carry the GGIR milestones this person report reads its tail expansion from.");
		const { ggirVersion: a } = await i.ggirConfigValues(e.configCsv), { profile: o, reports: l } = await i.ggirPersonSummaries({
			ggir_version: a ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: r.nights,
			days: r.days,
			tail_expansion: s,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(ne(r.nights, Z.ggir_id.header, 0) ?? ""),
			invalid_nights: Ii(e.imported, t).map((e) => e.night),
			person_columns: Object.fromEntries(Object.entries(e.personReports ?? {}).flatMap(([e, t]) => t.rows > 0 ? [[e, t.columns]] : []))
		});
		return {
			profile: o,
			reports: l
		};
	} catch (s) {
		return n?.throwIfAborted(), Pe("error", "GGIR person summary recompute failed", Le(s)), {
			reason: "not_computed_for_export",
			detail: "the GGIR engine could not aggregate this recording's person-level report from its night and day rows"
		};
	}
}
async function Ti(e, t, n) {
	const r = /* @__PURE__ */ new Map(), s = await Promise.all(e.map(async (e) => {
		const n = Ii(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (n) => {
			const r = await qe(e.imported, e.edits, n.night, t);
			return null == r ? [] : [`night ${String(n.night)} ${r}`];
		}))).flat(), ...n].join("; ");
	}));
	for (const [i, o] of e.entries()) {
		const e = _i(o), t = s[i], n = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [i, s] of Object.entries(o.personReports ?? {})) {
			if (0 === s.rows) continue;
			const a = wi("person_summary_review", e, i), o = "reason" in n ? n : n.reports[i] ?? {
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
	const a = /* @__PURE__ */ new Set([Z.ggir_id.header, Z.ggir_filename.header]);
	return Object.fromEntries([...r].map(([e, t]) => {
		const r = n?.get(e), s = [...new Set(t.flatMap(({ table: e }) => e.columns))], o = (r ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : Si(e, t.columns), s)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !fi.includes(e)), l = fi.map((e) => e + "_missing_reason"), c = r?.filter((e) => e.endsWith("_missing_reason") && !l.includes(e)) ?? ["refusal_detail_missing_reason", ...o.map((e) => e + "_missing_reason")], u = [[
			...o,
			...fi,
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
		], m = (e, t) => (n) => hi(e.values[e.columns.indexOf(n)]?.[t]), g = (e) => c.map((t) => e.get(t) ?? ""), f = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
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
			} : null, l = "reason" in w ? null : m(w, 0), c = o.map((e, n) => a.has(e) ? t[n] : l?.(e) ?? ""), v = new Map(o.flatMap((e, t) => Or(c[t]) ? [[e + "_missing_reason", s?.reason ?? "not_applicable_to_row"]] : []));
			s?.detail && v.set(Br, i(`ggirPersonSummaries: ${s.detail}`)), u.push([
				...c,
				...d("recomputed", _),
				...g(v),
				...p(_)
			].join(","));
		}
		return [e, u.join("\n") + "\n"];
	}));
}
const Ai = te.ggir_part4_nightsummary_csv, Ei = Ai.map((e) => Z[e].header), Ci = [
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
], Ni = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function $i(e, t) {
	const n = Z[e], r = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof r ? i(r) : lr(r, { integral: n.ggirIntegral ?? !1 });
}
function Oi(e, t = "legacy-recording", n, r) {
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
	}) : L(r).validStateFraction(a).then(async (e) => {
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
			})), [i, s] = Fn(n.map((e) => e.timestamps)), [a, o] = Fn(n.map((e) => e.states));
			return L(t).sleepRegularityIndex(M([
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
async function ji(e, t, n, r = {}) {
	const { signal: i } = r, s = e.participantId ?? e.filename, a = oe(n.values(), r.algorithm), o = [];
	for (const [c, v] of n) {
		if (!Ki(c, r.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = kn(v, a);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await Oi(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, i), { sri: u, fractionValid: d } = l, p = "stale" === a.status ? "scores_from_another_config" : null, m = p ?? l.sriMissingReason, g = p ?? l.fractionValidMissingReason, f = [];
	for (const v of [...t.keys()].sort()) {
		const e = t.get(v);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === c.MAIN_SLEEP && null != t.onsetTimestamp && f.push({
			date: v,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const h = [[
		...Ei,
		...Ci.map((e) => `${Z[e].header}_missing_reason`),
		...Ni.map((e) => `${Z[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: c, onsetTs: v, wakeupTs: y } of f) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == y ? "not_applicable_to_row" : p ?? "no_scored_epochs"
		};
		if (null != y) {
			const { timestamps: r, algorithmResults: s } = await Yn(n, c, a, { signal: i });
			if (s && r.length > 0) {
				t.missingReason = null;
				const n = await yn(s, r, v, y, e.epochLengthSeconds || 60, null, i);
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
	const w = await L(i).ggirManualNightClocks(f.map((e) => e.date), Float64Array.from(f, (e) => e.onsetTs), Float64Array.from(f, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let c = 0; c < f.length; c++) {
		const { onsetTs: t, wakeupTs: n } = f[c], r = w[c], { tstH: i, nAwak: a, latency: o, efficiency: l } = _[c], p = {
			ggir_id: s,
			ggir_night: c + 1,
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
			ggir_sleep_regularity_index1: u,
			ggir_sri_fraction_valid: d,
			ggir_longitudinal_axis: null,
			ggir_guider_corrected: !1
		};
		h.push([
			...Ai.map((e) => $i(e, p[e])),
			...Ci.map((e) => {
				const t = Ai.indexOf(e);
				return t >= 0 && null == p[Ai[t]] ? "not_computed_for_export" : "";
			}),
			...Ni.map((e) => {
				const t = Ai.indexOf(e);
				return t >= 0 && null == p[Ai[t]] ? _[c].missingReason ?? "" : "";
			}),
			m ?? "",
			g ?? ""
		].join(","));
	}
	return h.join("\n") + "\n";
}
function Bi(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const Di = "actogram_report.html";
function Pi(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function Li(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function Fi(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: r } = Pi(n), i = [e, r].filter(Boolean);
		t.set(n, 0 === i.length ? "part4_nightsummary.csv" : `part4_nightsummary_${i.join("_")}.csv`);
	}
	return t;
}
function Gi(e) {
	const { algoKey: t, ruleKey: n } = Pi(e), r = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
	return t || n ? n ? `${r(t)} / ${r(n)}` : r(t) : "Legacy / Unscoped";
}
function Wi(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : ve(e);
}
function zi(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function Vi(e, t) {
	const n = [], r = [], i = (e) => {
		for (const t of Hi(e)) n.push(t), r.push(t.byteLength);
	};
	i(`<section class="pid-sec${0 === e ? " initial" : ""}" id="sec-${e}">`), i(`  <h2 class="pid-lbl">${Bi(t.pid)}</h2>`);
	for (const [s, a] of t.charts.entries()) i(`  <div class="algo-block" data-algorithm-key="${Bi(a.algoKey)}">`), i(`    <div class="algo-lbl">${Bi(Gi(a.algoKey))}</div>`), a.stale && i(`    <div class="algo-stale" role="status">${Bi(a.stale)}</div>`), i(`    <div class="cwrap" id="c${e}_${s}">`), n.push(a.plot), r.push(...a.plotLengths), i(`      <button type="button" class="svg-btn" data-download-name="${Bi(a.svgFilename)}">Download SVG</button>`), i(a.meta), i("    </div>"), i("  </div>");
	return i("</section>"), {
		blob: new Blob(n),
		lengths: r
	};
}
const Ui = ["<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>", "</body>\n</html>"];
function* Hi(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let r = Math.min(e.length, n + rr / 4);
		r < e.length && /[\uD800-\uDBFF]/u.test(e[r - 1]) && (r -= 1), yield t.encode(e.slice(n, r)), n = r;
	}
	yield t.encode("\n");
}
function qi(e) {
	return new TextEncoder().encode(e);
}
function Ki(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function Ji({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: r, layouts: i, only: s }) {
	const a = {}, o = (e) => void 0 === s || s === e;
	for (const [l, c] of r ?? Fi([...e.keys()])) {
		const t = e.get(l);
		t?.length && o(c) && (a[c] = qi(`${t.join("\n")}\n`));
	}
	for (const l of Object.keys(ee)) {
		const e = t.filter((e) => _i(e) === l);
		if (0 === e.length) continue;
		const r = (t, n) => void 0 === s || e.some((e) => Object.keys(n(e) ?? {}).some((e) => wi(t, l, e) === s));
		if (r("part2_report", (e) => e.part2Reports)) for (const [t, n] of Object.entries(Mi(e, i))) o(t) && (a[t] = qi(n));
		for (const [t, s] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
			const r = wi(s, l), c = o(r) ? await xi(e, t, n, i?.get(r)) : null;
			c && (a[r] = qi(c));
		}
		if (r("person_summary_review", (e) => e.personReports)) for (const [t, s] of Object.entries(await Ti(e, n, i))) o(t) && (a[t] = qi(s));
	}
	return a;
}
async function Yi(e, t, r) {
	r?.throwIfAborted();
	const i = function(e, t) {
		const { signal: n } = t, { username: r, dateRange: i, snapshot: s } = e, a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const d = Xa(s, Va.ggirReport, e.map((e) => e.id)), p = await Promise.all(e.map((e) => So(s, e.id, r, n)));
				for (const [r, s] of e.entries()) {
					const e = d.files.find((e) => e.id === s.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: m, sets: g, markersByAlgo: f, invalidDates: h } = p[r], _ = no(d, e.id), w = new Map([...f].filter(([e]) => Ki(e, i))), v = /* @__PURE__ */ new Map();
					for (const [t, n] of w) for (const e of n) {
						const n = Li(e);
						let r = v.get(n);
						r || (r = /* @__PURE__ */ new Map(), v.set(n, r)), r.set(t, e);
					}
					const y = /* @__PURE__ */ new Set();
					for (const [t, n] of w) for (const e of n) o(e) && y.add(t);
					if (m) for (const t of g) u.push({
						...t,
						...i ? { scoredDates: new Set(e.availableDates.filter((e) => Ki(e, i))) } : {},
						invalidDates: h
					});
					const b = [...y].sort(), k = b[0], x = b[b.length - 1], M = [], S = [];
					for (const n of t.charts ? [..._.keys()].sort() : []) if (Ki(n, i) && (null == k || null == x || n >= k && n <= x)) {
						const e = _.get(n), t = ae({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), r = t.timestamps, i = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < r.length; n++) M.push(r[n]), S.push(i[n]);
					}
					const I = [];
					for (const [t, r] of v) {
						const s = Pi(t).algoKey, o = m ? "" : await ji(e, r, _, {
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
						const { algoKey: p, ruleKey: g } = Pi(t), f = [p, g].filter(Boolean).join("_"), h = oe(_.values(), s || null);
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
			entries: () => Ji({
				csvLinesByAlgo: a,
				ggirReviews: u
			}, { signal: n }),
			chartPidData: c,
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
				const { algoKey: s, ruleKey: a } = Pi(r), o = zi([s, a].filter(Boolean).join("_"), "unscoped"), l = `activity-${zi(e, "recording")}-${o}-${n}.svg`, c = function(e) {
					if (0 === e.timestamps.length) return ur("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return ur("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, r = 0;
					const i = e.timestamps.map((i, s) => {
						const a = e.activity[s];
						return !Number.isFinite(i) || i <= t ? ur("timestamps must be finite and strictly ascending") : (t = i, null != a && Number.isFinite(a) ? (n = Math.min(n, a), r = Math.max(r, a), {
							timestamp: i,
							value: a
						}) : {
							timestamp: i,
							value: null
						});
					}), s = i[0].timestamp, a = i[i.length - 1].timestamp, o = a > s ? a : s + 1;
					if (!Number.isFinite(o) || o <= s) return ur("single-epoch viewport must have a representable right edge");
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
				}), u = [...Hi(`      <div class="plot-svg">${vn(c)}</div>`)];
				return {
					algoKey: r,
					...i.stale ? { stale: i.stale } : {},
					svgFilename: l,
					plot: new Blob(u),
					plotLengths: u.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${Bi(Wi(c.viewport.min))} → ${Bi(Wi(c.viewport.max))} · activity domain ${lr(c.valueDomain.min)}–${lr(c.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), a = new Set(Fi([...i.csvLinesByAlgo.keys()]).values()), l = [];
	for (const [o, c] of Object.entries(await i.entries())) a.has(o) || l.push([o, f(n(new TextDecoder().decode(c)).records[0].text)]);
	return {
		charts: s,
		csvLinesByAlgo: i.csvLinesByAlgo,
		ggirReviews: i.ggirReviews,
		headers: l
	};
}
function Zi(e) {
	return Date.parse(`${e}Z`) / 1e3;
}
function Xi(e, t) {
	return e.filter((e) => "rest" === e.kind || "sleep" === e.kind).map((e) => ({
		kind: e.kind,
		source: e.source,
		startTimestamp: Zi(e.start),
		endTimestamp: Zi(e.end),
		origin: t ? "generated" : "stored",
		...e.analysis ? { analysis: e.analysis } : {}
	})).filter((e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.endTimestamp > e.startTimestamp).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Qi(e) {
	return e.map(({ start: e, end: t, ...n }) => ({
		...n,
		startTimestamp: Zi(e),
		endTimestamp: Zi(t)
	}));
}
var es = class extends Error {
	name = "ActiwareSleepContainmentError";
}, ts = class extends Error {
	name = "ActiwareRestEditError";
};
const ns = (e, t) => Math.round((t - e.startTimestamp) / e.epochSeconds);
function rs(e, t) {
	return e.startTimestamp + ns(e, t) * e.epochSeconds;
}
const is = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " "), ss = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19);
function as(e) {
	return {
		kind: e.kind,
		source: e.source,
		start: ss(e.startTimestamp),
		end: ss(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	};
}
async function os(e, { epochs: t, params: n, grid: r, core: i }) {
	if (0 === e.length) return [];
	const s = await i.actiwareIntervals(t, e.map(as), n);
	if (!s || s.generated) throw new Error("The Actiware core did not derive the sleep inside these rest intervals.");
	const a = Xi(s.intervals.filter((e) => "sleep" === e.kind), !0);
	return function(e, t) {
		const n = e.filter((e) => "rest" === e.kind);
		for (const r of e.filter((e) => "sleep" === e.kind)) {
			const e = ns(t, r.startTimestamp), i = ns(t, r.endTimestamp);
			if (!n.some((n) => e >= ns(t, n.startTimestamp) && i <= ns(t, n.endTimestamp))) throw new es(`Actiware sleep interval ${is(r.startTimestamp)}–${is(r.endTimestamp)} lies outside every rest interval.`);
		}
	}([...e, ...a], r), a;
}
function ls(e, t) {
	return (e ?? []).filter((e) => "rest" === e.kind && null !== Re([e], t));
}
const cs = (e, t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp;
function us(e, t, n) {
	const r = Te(e, t);
	return r ? [...r.sleep && !n ? [{
		onsetTimestamp: r.sleep.startTimestamp,
		offsetTimestamp: r.sleep.endTimestamp,
		markerIndex: 1,
		markerType: c.MAIN_SLEEP
	}] : [], ...(r.additionalSleeps ?? []).map((e, t) => ({
		onsetTimestamp: e.startTimestamp,
		offsetTimestamp: e.endTimestamp,
		markerIndex: t + 2,
		markerType: c.NAP
	}))] : [];
}
function ds(e, t, n, r) {
	return us(t, n, r).map((t) => {
		const n = e.find((e) => e.markerType === t.markerType && e.onsetTimestamp === t.onsetTimestamp && e.offsetTimestamp === t.offsetTimestamp);
		return n ? {
			...n,
			markerIndex: t.markerIndex
		} : t;
	});
}
async function ps(e, t, n, r) {
	const i = ls(e, t), s = "move" === n.kind ? function(e, { from: t, to: n }) {
		const r = e.find((e) => e.startTimestamp === t.startTimestamp && e.endTimestamp === t.endTimestamp);
		if (r) return r;
		const i = e.filter((e) => n.startTimestamp === t.startTimestamp && e.startTimestamp === n.startTimestamp || n.endTimestamp === t.endTimestamp && e.endTimestamp === n.endTimestamp);
		return 1 === i.length ? i[0] : void 0;
	}(i, n) : "remove" === n.kind ? i.find((e) => cs(n.holding, e)) : void 0;
	if ("add" !== n.kind && !s) throw new ts("That rest interval changed since it was shown; reload the night.");
	const a = e.filter((e) => e !== s && !(s && "sleep" === e.kind && cs(e, s)));
	if ("remove" === n.kind) return a;
	const { grid: o } = r, l = s?.analysis, c = {
		kind: "rest",
		source: "event_marker",
		origin: "scorer",
		startTimestamp: rs(o, n.to.startTimestamp),
		endTimestamp: rs(o, n.to.endTimestamp),
		...l ? { analysis: l } : {}
	};
	if (c.endTimestamp <= c.startTimestamp) throw new ts("A rest interval must end after it starts.");
	if (a.some((e) => "rest" === e.kind && e.startTimestamp < c.endTimestamp && e.endTimestamp > c.startTimestamp)) throw new ts("A rest interval cannot overlap another rest interval.");
	if (null === Re([c], t)) throw new ts("That rest interval would belong to another night.");
	const u = await os([c], r);
	return [
		...a,
		c,
		...u
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function ms(e, t) {
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
async function gs(e, t, n) {
	if (0 === t.length) return [...e];
	const r = e.filter((e) => {
		return "rest" === e.kind && (n = e, t.some((e) => n.startTimestamp < e.endTimestamp && n.endTimestamp > e.startTimestamp));
		var n;
	}), i = e.filter((e) => !(r.includes(e) || "sleep" === e.kind && r.some((t) => cs(e, t)))), s = await os(t, n);
	return [
		...i,
		...t,
		...s
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
const fs = (e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind);
function hs(e, t) {
	const n = [...t].flatMap((t) => {
		const n = Te(e, t);
		return n?.sleep ? [n.sleep] : [];
	});
	return (e ?? []).filter((e) => "sleep" !== e.kind || !n.some((t) => t.startTimestamp === e.startTimestamp && t.endTimestamp === e.endTimestamp));
}
async function _s(e, t, n, r) {
	if (!t) return null;
	const i = hs(e, n).map(as).sort(fs);
	if (0 === i.length) return [];
	const s = await r({
		...t,
		intervals: i
	});
	return s ? Qi(s).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)) : null;
}
async function ws(e, t, n, r) {
	const i = await vs(e, t, n, r);
	return i ? bs(e.file, i, t.keys()) : null;
}
async function vs({ file: e, statisticsInput: t }, n, r, i) {
	if (!t) return null;
	const s = e.actiwareIntervals ?? [], a = await qn(s.map((e) => e.startTimestamp), i);
	let o = [...s];
	for (const p of n.keys()) {
		const e = ls(s, p), t = s.filter((t) => "sleep" === t.kind && ys(s, t, e, () => a(t.startTimestamp) === p)), r = n.get(p), i = r?.sleepMarkers.filter((e) => (e.markerType === c.NAP || e.markerType === c.MAIN_SLEEP && !r.isInvalidNight) && null != e.onsetTimestamp && Number.isFinite(e.onsetTimestamp) && null != e.offsetTimestamp && Number.isFinite(e.offsetTimestamp) && e.offsetTimestamp > e.onsetTimestamp);
		if (r?.isInvalidNight || i?.length) {
			o = o.filter((e) => !t.includes(e));
			const e = t[0]?.analysis;
			for (const t of i ?? []) o.push({
				kind: "sleep",
				source: "event_marker",
				startTimestamp: t.onsetTimestamp,
				endTimestamp: t.offsetTimestamp,
				origin: "scorer",
				...e ? { analysis: e } : {}
			});
		}
	}
	const l = await r({
		...t,
		intervals: o.map(as).sort(fs)
	});
	if (!l) return null;
	const u = Qi(l), d = [...e.actiwareStatistics ?? [], ...u].map((e) => e.startTimestamp);
	return {
		calculated: u,
		rowDateOf: await qn(d, i),
		datedRows: new Set(d)
	};
}
const ys = (e, t, n, r) => {
	const i = e.find((e) => "rest" === e.kind && t.startTimestamp >= e.startTimestamp && t.endTimestamp <= e.endTimestamp);
	return i ? n.includes(i) : r();
};
function bs(e, t, n, r) {
	const i = e.actiwareIntervals ?? [], s = [...n].map((e) => ({
		date: e,
		rests: ls(i, e)
	})), a = (e) => s.some(({ date: n, rests: s }) => "rest" === e.kind ? null !== Re([e], n) : "sleep" === e.kind && ys(i, e, s, () => {
		return i = e.startTimestamp, (t.datedRows.has(i) || !r ? t.rowDateOf(i) : r(i)) === n;
		var i;
	}));
	return [...(e.actiwareStatistics ?? []).filter((e) => !a(e)), ...t.calculated.filter(a)].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function ks(e, t) {
	return (e.actiwareStatistics ?? []).map((e) => e.startTimestamp).filter((e) => !t.datedRows.has(e));
}
const xs = re.invalid_night_row.markerTypeCell, Ms = J("actiware_interval_csv", "local"), Ss = [
	"interval_score_count",
	"interval_score_average",
	"interval_score_manual_count",
	"interval_score_manual_average",
	"interval_score_scheduled_count",
	"interval_score_scheduled_average",
	"interval_score_no_response_count",
	"interval_score_late_count",
	"interval_score_late_average"
].map((e) => Z[e].header), Is = (e, t) => Math.round(e) === Math.round(t);
async function Rs(e, t, n, r) {
	const i = r ? hs(e.actiwareIntervals, r.invalidDates) : (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind), s = i.filter((e) => "rest" === e.kind), a = i.filter((e) => "rest" === e.kind || "sleep" === e.kind && s.some((t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp)).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), o = e.actiwareStatistics ?? [], l = await qn([...a.map((e) => e.startTimestamp), ...o.map((e) => e.startTimestamp)], n), c = /* @__PURE__ */ new Set(), u = (t, n) => ({
		filename: e.filename,
		participantId: e.participantId ?? null,
		studyDate: l(t.startTimestamp),
		intervalNumber: null,
		interval: t,
		statistics: n
	}), d = a.map((e) => {
		const t = o.findIndex((t, n) => !c.has(n) && t.kind === e.kind && Is(t.startTimestamp, e.startTimestamp) && Is(t.endTimestamp, e.endTimestamp));
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
function Ts(e, t, n) {
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
const As = new Set(dr.map(([, e]) => e)), Es = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
function Cs(e) {
	if (!Number.isFinite(e)) return [
		"",
		"",
		""
	];
	const t = /* @__PURE__ */ new Date(1e3 * Math.round(e)), n = t.toISOString();
	return [
		n.slice(0, 10),
		Es[t.getUTCDay()],
		n.slice(11, 19)
	];
}
const Ns = J("actiware_sleep_wake_csv", "local");
async function $s(e, t, n, r) {
	if (0 === e.scores.byteLength) return [];
	const i = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, s = n ?? new Set(await r.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((i - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), i])));
	return (await Promise.all([...s].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await Un(t, void 0, void 0, r);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
async function Os(e, t, n, r) {
	return t || n ? (await $s(e, t, n, r)).reduce((e, t) => e + t.end - t.start, 0) : e.scores.byteLength;
}
function js(e, t, n, r) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		ye(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...r ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => i(e)).join(",");
}
const Bs = {
	sleepPeriodsOf: (e, t) => t.sleepMarkers,
	sleepRowMetrics: null
}, Ds = { forFile: () => Bs }, Ps = [
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
], Gs = {
	nightRecord: { forFile(e, t) {
		const n = e.actiwareFileData.find((e) => e.fileId === t) ?? null, r = n?.actiwareIntervals ?? null;
		return r ? {
			sleepPeriodsOf: (e, t) => us(r, e, t.isInvalidNight),
			sleepRowMetrics: { cells(e) {
				const t = null != e.onsetTimestamp && null != e.offsetTimestamp ? {
					onset: e.onsetTimestamp,
					offset: e.offsetTimestamp
				} : null;
				if (!t) return null;
				const i = r.find((e) => "rest" === e.kind && e.startTimestamp <= t.onset && e.endTimestamp >= t.offset) ?? null, s = (e, t) => t ? n?.actiwareStatistics?.find((n) => n.kind === e && Math.round(n.startTimestamp) === Math.round(t.startTimestamp) && Math.round(n.endTimestamp) === Math.round(t.endTimestamp)) ?? null : null, a = {
					rest: s("rest", i),
					sleep: s("sleep", {
						startTimestamp: t.onset,
						endTimestamp: t.offset
					})
				}, o = {}, l = {};
				for (const [n, r, c, u] of Ps) {
					const e = a[r]?.[c] ?? null;
					o[n] = e, l[u] = null == e ? a[r] ? "source_reported_missing" : "not_computed_for_export" : void 0;
				}
				return {
					metrics: o,
					reasons: l,
					metricMissingReason: "not_computed_for_export",
					inBedSpan: i
				};
			} }
		} : Ds.forFile(e, t);
	} },
	sourceAnalysis: {
		artifacts: [{
			entry: pr,
			rows: (e) => e.actiwareIntervalRows?.length ?? 0,
			fileRows: (e) => e.actiwareIntervalRows,
			detail: (e) => `${String(e)} Actiware intervals`,
			columns: Ms.length,
			chunkField: "actiwareIntervalRows",
			csv: (e) => function(e, t = !1) {
				const n = t ? dr.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], r = [[
					...Ms,
					...n.map(([, e]) => e + "_missing_reason"),
					...t ? [
						"Participant ID_missing_reason",
						"Origin_missing_reason",
						"Analysis_missing_reason",
						...Ss.map((e) => e + "_missing_reason")
					] : []
				].join(",")], s = (e) => Z[e].header;
				for (const { filename: a, participantId: o, studyDate: l, intervalNumber: c, interval: u, statistics: d, invalidNight: p } of e) {
					const e = !0 === p && !Number.isFinite(u.startTimestamp), [m, g, f] = Cs(u.startTimestamp), [h, _, w] = Cs(u.endTimestamp), v = new Map([
						[s("filename"), a],
						[s("participant_id"), o ?? ""],
						[s("study_date"), l],
						[s("interval_kind"), p ? xs : u.kind],
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
						...dr.map(([, e]) => [e, d?.printed?.[e] ?? ""]),
						...Ss.map((e) => [e, p ? "" : u.subjectiveScores?.[e] ?? ""])
					]), y = n.map(([e]) => {
						if (p) return "invalid_night";
						if (!d || null != d[e]) return "";
						if (e.startsWith("off_wrist")) return "source_reported_missing";
						const t = /_(white|red|green|blue)(?:_percent)?$/u.exec(e)?.[1];
						return t && null == d["invalid_" + t + "_percent"] ? "source_reported_missing" : "";
					}), b = Ss.map((e) => p ? "invalid_night" : u.subjectiveScores?.[e] ? "" : "source_no_subjective_scores");
					r.push([
						...Ms.map((e) => As.has(e) ? v.get(e) ?? "" : i(v.get(e) ?? "")),
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
			}(e.actiwareIntervalRows ?? [], !0),
			validatesAgainstOwnRows: !0
		}, {
			entry: mr,
			rows: (e) => e.actiwareSleepWakeCsv?.rows ?? 0,
			fileRows: (e) => e.actiwareSleepWakeRows,
			detail: (e) => `${String(e)} Actiware Sleep/Wake epochs`,
			columns: Ns.length,
			encode: (e) => e.actiwareSleepWakeCsv.bytes,
			streamed: !0
		}],
		async fileStats({ file: e, fileId: t, dateRange: n, scoredDates: r }, i, s) {
			const a = await i.actiwareFileData.get(t);
			return {
				actiwareIntervalRows: a ? (await Rs({
					...e,
					...a
				}, n, s)).length : 0,
				actiwareSleepWakeRows: a?.actiwareSleepWake ? await Os(a.actiwareSleepWake, n, new Set(r), s) : 0,
				...!0 === a?.actiwareStatisticsNeedsRecompute ? { actiwareStatisticsStale: !0 } : {}
			};
		},
		preflight: (e, t) => !0 !== e.actiwareStatisticsStale ? null : {
			severity: "blocker",
			title: `${t()}: Actiware statistics need reprocessing`,
			body: "A marker save could not recompute this file's Actiware statistics, so actiware_intervals_export.csv would print values for intervals the scorer has since moved. Make any edit on one of its nights in the Sleep tab (a note is enough): the next save that succeeds recomputes every night. Or deselect the file."
		},
		plannedMissingReasonBytes: (e) => 3 * (e.actiwareSleepWakeRows ?? 0) * (256 + 4 * (e.filename.length + (e.participantId?.length ?? 0))),
		missingReasonBytes: (e) => e.actiwareSleepWakeCsv?.reasonChunks.reduce((e, t) => e + t.byteLength, 0),
		async produceEntries(e, t, n) {
			const r = await async function({ fileIds: e, dateRange: t, username: n, signal: r }, i, s) {
				r?.throwIfAborted();
				const a = i.inputs("actiwareInterval", e), o = a.studySettings[0]?.extraSettings?.analysis_paradigm, l = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), c = [];
				for (const u of l) {
					r?.throwIfAborted();
					const e = a.actiwareFileData.find((e) => e.fileId === u.id), l = i.scoredMarkers(a, u.id, n), d = [...l].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort(), p = a.actiwareStatisticsInputs.find((e) => e.fileId === u.id), m = (e) => s.actiwareIntervalStatistics(e), g = Ce(u, o) === S.rest_intervals, f = g ? await _s(e?.actiwareIntervals, p?.input, d, m) : await ws({
						file: e ?? {},
						statisticsInput: p?.input
					}, l, m, s);
					r?.throwIfAborted();
					const h = await Rs({
						...u,
						...e,
						actiwareStatistics: f ?? []
					}, t, s, g ? { invalidDates: d } : void 0), _ = new Set(l.keys()), w = new Set(d.filter((e) => !t || e >= t[0] && e <= t[1]));
					c.push(...Ts(h.filter((e) => _.has(e.studyDate)), w, u));
				}
				return c;
			}(e, t, n), i = async function* ({ fileIds: e, dateRange: t, username: n, signal: r }, i, s) {
				r?.throwIfAborted();
				const a = i.inputs("actiwareSleepWake", e), o = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), l = o.map((e) => a.actiwareFileData.find((t) => t.fileId === e.id)), c = function(e, t = !1) {
					const n = [[
						...Ns,
						"Sleep/Wake_missing_reason",
						"Wake Threshold_missing_reason",
						...t ? ["Participant ID_missing_reason"] : []
					].join(",")];
					for (const r of e) n.push(js(r, r.epochTimestamp, r.sleepWake, t));
					return `${n.join("\n")}\n`;
				}([], !0);
				let u = [], d = 0, p = 0;
				const m = () => {
					r?.throwIfAborted();
					const e = function(...e) {
						const t = Wr(...e), n = [];
						for (;;) {
							const e = t.next();
							if (e.done) return {
								...e.value,
								reasons: n
							};
							n.push(e.value);
						}
					}(c + u.join("\n") + "\n", mr, !0, { rowOffset: d }), t = d ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
						bytes: new TextEncoder().encode(t),
						rows: u.length,
						reasonRows: e.reasons.length,
						reasons: new TextEncoder().encode(Lr(e.reasons, !1))
					};
					return d += u.length, u = [], p = 0, n;
				};
				for (const [g, f] of o.entries()) {
					r?.throwIfAborted();
					const e = l[g]?.actiwareSleepWake;
					if (!e) continue;
					const o = l[g]?.actiwareWakeThreshold, c = null != o && Number.isFinite(o) ? o : null, d = new Int8Array(e.scores), h = await $s(e, t, new Set(i.scoredMarkers(a, f.id, n).keys()), s);
					r?.throwIfAborted();
					for (const { date: t, start: n, end: r } of h) {
						const i = {
							filename: f.filename,
							participantId: f.participantId ?? null,
							studyDate: t,
							sleepDetection: Ne(e.params, "sleep_detection"),
							wakeThresholdSelection: Ne(e.params, "wake_threshold_selection"),
							wakeThreshold: c,
							...null === c ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
						};
						for (let t = n; t < r; t += 1) {
							const n = d[t], r = js(i, e.startTimestamp + t * e.epochSeconds, 0 === n || 1 === n ? n : null, !0);
							if (r.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
							u.push(r), p += r.length, (512 === u.length || p >= 32768) && (yield m());
						}
					}
				}
				u.length && (yield m()), r?.throwIfAborted();
			}(e, t, n), s = await i.next();
			let a = s.done ? 0 : s.value.rows;
			const o = async function* () {
				if (!s.done) {
					yield s.value;
					for await (const e of i) a += e.rows, yield e;
				}
			}();
			return {
				artifacts: {
					actiwareIntervalRows: r,
					actiwareSleepWakeCsv: {
						rows: a,
						bytes: /* @__PURE__ */ new Uint8Array(),
						reasonChunks: []
					}
				},
				streams: { [mr]: o },
				receipt: () => ({ actiwareSleepWakeRows: a })
			};
		}
	},
	modules: {
		producers: {
			actiwareInterval: ["frontend/src/actiware/export/intervals.ts"],
			actiwareSleepWake: ["frontend/src/actiware/export/sleep-wake.ts"]
		},
		sleep: ["frontend/src/actiware/export/sleep-row-metrics.ts"],
		archive: ["frontend/src/actiware/export/missing-values.ts"]
	}
}, Ws = {
	sleep_periods: Ds,
	rest_intervals: Gs.nightRecord
}, zs = [Gs.sourceAnalysis], Vs = zs.flatMap((e) => e.artifacts), Us = Gs.modules, Hs = [
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
], qs = [
	"temperature",
	"lux",
	"redLight",
	"greenLight",
	"blueLight"
];
function Ks(e) {
	return "string" == typeof e ? e : null;
}
function Js(e) {
	return "number" == typeof e ? e : null;
}
function Ys(e, t) {
	const n = function(e, t) {
		switch (e.formatter) {
			case "verbatim_string": return function(e) {
				return e ? i(e) : "";
			}(Ks(t));
			case "display_label": {
				const n = Ks(t);
				return n ? function(e) {
					return e ? i(e) : "";
				}(e.labelEnum ? X(e.labelEnum, n) : n) : "";
			}
			case "core_printed_text":
			case "date_iso": return function(e) {
				return e ?? "";
			}(Ks(t));
			case "integer": return function(e) {
				return null == e ? "" : String(Math.trunc(e));
			}(Js(t));
			case "fixed2": return function(e) {
				return null == e ? "" : e.toFixed(2);
			}(Js(t));
			case "python_scalar_str": return function(e) {
				return null == e ? "" : String(e);
			}("boolean" == typeof t || "object" == typeof t ? null : t);
			case "python_float_repr": return function(e) {
				if (null == e) return "";
				if (!Number.isFinite(e)) return String(e);
				const t = String(e);
				return t.includes(".") || t.includes("e") ? t : `${t}.0`;
			}(Js(t));
			case "python_bool": return function(e) {
				return null == e ? "" : e ? "True" : "False";
			}("boolean" == typeof t ? t : null);
			case "clock_at_marker_step": return function(e) {
				return null == e?.timestamp ? "" : xe(e.timestamp, e.stepSeconds);
			}("object" == typeof t ? t : null);
			case "datetime_seconds": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${String(t.getUTCFullYear())}-${cr(t.getUTCMonth() + 1)}-${cr(t.getUTCDate())} ${cr(t.getUTCHours())}:${cr(t.getUTCMinutes())}:${cr(t.getUTCSeconds())}`;
			}(Js(t));
			case "ggir_value": return lr("object" == typeof t ? null : t, { integral: e.ggirIntegral ?? !1 });
		}
	}(e, t);
	return "" === n ? q[e.sentinel] : n;
}
function Zs(e, t) {
	if (!t) return "";
	const { labelEnum: n } = Z[e];
	return n ? X(n, t) : t;
}
const Xs = re.invalid_night_row?.markerTypeCell ?? "", Qs = re.nonwear_row?.markerTypeCell ?? "";
function ea(e) {
	return te[e].filter((e) => "server" !== Z[e].plane);
}
function ta(e) {
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
function na(e) {
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
async function ra(e, t, n, r, i, s, a) {
	try {
		return {
			metrics: t ? await bn(e, t, n, r, i, s, a) : await yn(e, n, r, i, s, null, a),
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
async function ia(e, t, n, r) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const i = new Set(n.filter((t) => t.markerType === c.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return i.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : Oi(t.filter((e) => i.has(e.date)), e, t[0]?.epochLengthSeconds, r);
}
function sa(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const aa = [
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
], oa = {
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
}, la = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => Zs("algorithm", e.algorithm),
	summary_detection_rule: (e) => Zs("detection_rule", e.detectionRule),
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
}, ca = H;
function ua(e) {
	return P(e);
}
function da(e) {
	return JSON.stringify(e, null, 2);
}
const pa = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function ma(e = ca, t = !1) {
	return ka("codebook_csv", e, pa, void 0, t);
}
const ga = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], fa = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function ha(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== c.MAIN_SLEEP) continue;
		const e = ga.map((e) => ya(e, n)).join("\0"), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}
function* _a(e, t = !1) {
	const n = ha(e);
	let r = 0;
	const i = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > r && (r = t.length), t;
	}), s = ga.map((e) => Z[e].header);
	for (let o = 1; o <= r; o++) for (const [e] of fa) s.push(`night${String(o)}_${e}`);
	const a = s;
	yield t ? [...s, ...a.map((e) => e + "_missing_reason")].join(",") : s.join(",");
	for (const o of i) {
		const e = o[0], n = ga.map((t) => ya(t, e)), i = ga.map((t) => va[t]?.(e) ? "" : ba[t] ?? "");
		for (let t = 0; t < r; t++) {
			const e = o[t];
			for (const [t, r] of fa) {
				const s = e ? ya(r, e) : "";
				n.push(s), i.push(s ? "" : e ? "date" === t ? "" : e.derivedMissingReasons?.[r] ?? e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? i : []].join(",");
	}
}
function wa(e, t) {
	return null == e ? null : {
		timestamp: e,
		stepSeconds: t.markerStepSeconds
	};
}
const va = {
	filename: (e) => e.filename,
	file_id: (e) => e.fileId,
	participant_id: (e) => e.participantId,
	study_date: (e) => e.studyDate,
	period_index: (e) => e.periodIndex,
	marker_type: (e) => e.markerType,
	onset_time: (e) => wa(e.onsetTimestamp, e),
	offset_time: (e) => wa(e.offsetTimestamp, e),
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
	sleep_midpoint_time: (e) => wa(e.sleepMidpointTimestamp, e),
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
function ya(e, t) {
	return Ys(Z[e], va[e]?.(t) ?? null);
}
const ba = {
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
function ka(e, t, n, r, i = !1) {
	const s = r && r.length > 0 ? new Set(r) : null, a = ea(e).filter((e) => null == s || s.has(Z[e].header)), o = i ? a.filter((e) => ba[e]) : [], l = [[...a.map((e) => Z[e].header), ...o.map((e) => Z[e].header + "_missing_reason")].join(",")];
	for (const c of t) l.push([...a.map((e) => Ys(Z[e], n[e]?.(c) ?? null)), ...o.map((e) => {
		const t = n[e]?.(c);
		return null == t || "" === t ? ba[e] ?? "" : "";
	})].join(","));
	return l.join("\n");
}
function xa(e, t, r = !1) {
	const i = ka("sleep_csv", e, va, t, r), s = t?.length ? new Set(t) : null, a = [
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
	].filter((t) => (!s || s.has(Z[t].header)) && e.some((e) => [...a, ...o].includes(t) && null == va[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || l.includes(t) && e.metricMissingReason));
	return 0 === c.length ? i : n(i).records.map((t, n) => {
		if (0 === n) return t.text + "," + c.map((e) => `${Z[e].header}_missing_reason`).join(",");
		const r = e[n - 1];
		return t.text + "," + c.map((e) => r.markerType === Qs ? "manual_nonwear_period" : r.markerType === Xs ? "invalid_night" : a.includes(e) ? null == va[e]?.(r) ? "source_reported_missing" : "" : o.includes(e) ? null == va[e]?.(r) ? "not_applicable_to_row" : "" : r.sensorMissingReasons?.[e] ?? r.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? r.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (l.includes(e) ? r.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
ea("sleep_csv").map((e) => Z[e].header);
const Ma = rr, Sa = new Uint8Array([3, 0]);
function Ia(e, t) {
	if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
	const n = [], r = new Pt(t?.byteLength ? {
		level: 1,
		dictionary: t
	} : { level: 1 }, (e) => {
		n.push(e);
	});
	r.push(e, !1), r.flush(!1);
	const i = r.s.r ?? 0;
	if (!Number.isInteger(i) || i < 0 || i > 2047) throw new Error("ZIP compression state is unreadable.");
	const s = (7 & i) > 5 ? 2 : 1, a = new Uint8Array(s + 4);
	return a[0] = i >> 3, a[s + 2] = 255, a[s + 3] = 255, n.push(a), ue(n);
}
const Ra = (() => {
	const e = /* @__PURE__ */ new Int32Array(256);
	for (let t = 0; t < 256; t += 1) {
		let n = t;
		for (let e = 0; e < 8; e += 1) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
		e[t] = n;
	}
	return e;
})();
function Ta(e) {
	let t = -1;
	for (const n of e) t = Ra[255 & (t ^ n)] ^ t >>> 8;
	return ~t >>> 0;
}
function Aa(e, t) {
	let n = 2147483648, r = 0, i = t;
	for (; !(e & n) || (r ^= i, e & n - 1);) n >>>= 1, i = 1 & i ? i >>> 1 ^ 3988292384 : i >>> 1;
	return r >>> 0;
}
const Ea = (() => {
	const e = [1 << 30];
	for (let t = 1; t < 32; t += 1) e.push(Aa(e[t - 1], e[t - 1]));
	return e;
})();
function Ca() {
	const e = new D();
	return {
		hashChunk: (t) => {
			e.update(t);
		},
		hexDigest: () => Promise.resolve(B(e.finalize()))
	};
}
var Na = class extends Vt {
	flag = 3;
	constructor(e) {
		super(e), this.compression = 8;
	}
	process() {}
	emit(e) {
		this.ondata(null, e, !1);
	}
	finish(e, t) {
		this.crc = e, this.size = t, this.ondata(null, Sa, !0);
	}
};
async function $a(e) {
	const t = e.deflate ?? {
		lanes: 1,
		block: (e, t) => Promise.resolve(function(e, t) {
			return {
				bytes: Ia(e, t),
				crc: Ta(e)
			};
		}(e, t))
	};
	if (!navigator.storage?.getDirectory) throw new Error("Streaming export requires temporary workspace storage (OPFS).");
	const r = await (await (await navigator.storage.getDirectory()).getDirectoryHandle(Qn, { create: !0 })).getDirectoryHandle(e.scratchId, { create: !0 }), i = await r.getFileHandle(Pr, { create: !0 }), s = await r.getFileHandle("bundle.zip", { create: !0 }), a = new CompressionStream("gzip"), o = a.readable.pipeTo(await i.createWritable());
	o.catch(() => {});
	const l = a.writable.getWriter(), c = await s.createWritable();
	let u = [], d = 0, p = 0, m = e.artifacts.importRefusalReasons?.length ?? 0;
	const g = [], h = new Ut((e, t) => {
		if (e) throw e;
		u.push(t), d += t.byteLength;
	}), _ = async (e = 0, t) => {
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
		const i = new Na(n), s = (e.hash ?? Ca)();
		let a = 0;
		h.add(i);
		const { blockBytes: o, inFlight: l } = function(e) {
			const t = Math.min(2 * e + 1, Math.floor(24)), n = Math.floor(1572864 / t) - 32768;
			return {
				blockBytes: n - n % 4096,
				inFlight: t - 1
			};
		}(t.lanes), c = [], u = [];
		let d = 0, m = new Uint8Array(o), f = 0, y = /* @__PURE__ */ new Uint8Array(0), b = 0;
		const k = () => b + f + y.byteLength + c.length * (o + 32768), x = async () => {
			const e = await c.shift();
			d = function(e, t, n) {
				let r = 2147483648;
				for (let i = n, s = 3; i; i = Math.floor(i / 2), s += 1) i % 2 && (r = Aa(Ea[31 & s], r));
				return (Aa(r, e) ^ t) >>> 0;
			}(d, e.crc, u.shift()), i.emit(e.bytes), await _(k(), o + 1024);
		}, M = async () => {
			const e = m.subarray(0, f), n = e.slice(-32768);
			for (c.push(t.block(e, y)), u.push(e.byteLength), y = n, m = new Uint8Array(o), f = 0; c.length > l;) await x();
		};
		try {
			for await (const t of r) {
				b = t.byteLength;
				for (let n = 0; n < t.byteLength; n += Ma) {
					e.signal?.throwIfAborted();
					const r = t.subarray(n, n + Ma), i = s.hashChunk(r, e.signal);
					i && await i, a += r.byteLength;
					for (let e = 0; e < r.byteLength;) {
						const t = Math.min(r.byteLength - e, o - f);
						m.set(r.subarray(e, e + t), f), f += t, e += t, f === o && await M();
					}
					p = Math.max(p, k());
				}
			}
			for (b = 0, f && await M(); c.length;) await x();
		} finally {
			for (const e of c) e.catch(() => {});
		}
		i.finish(d, a), await _(), g.push({
			name: n,
			contentHash: await s.hexDigest(e.signal),
			byteLength: a
		}), e.progress?.(g.length, v, or);
	};
	try {
		await l.write(new TextEncoder().encode(Lr(e.artifacts.importRefusalReasons ?? [])));
		const t = [...Co({
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
		v = t.filter((e) => e.write).length + 2, e.progress?.(0, v, or);
		for (const i of t) if (i.write) try {
			const t = Vs.find((e) => e.entry === i.name);
			t?.streamed ? await y(i.name, async function* () {
				for await (const t of e.entryStreams[i.name]) e.signal?.throwIfAborted(), m += t.reasonRows, p = Math.max(p, t.bytes.byteLength + t.reasons.byteLength), await l.write(t.reasons), yield t.bytes;
			}()) : i.name.endsWith(".csv") ? await y(i.name, async function* () {
				let r = 0, s = !1, a = !1;
				const o = t?.validatesAgainstOwnRows ? t : void 0, c = o?.chunkField && o.csv ? function* () {
					const t = o.chunkField, r = (n) => o.csv({
						...e.artifacts,
						[t]: n
					}), i = f(n(r([])).records[0].text);
					for (const s of e.artifacts[t] ?? []) {
						const e = f(n(r([s])).records[1].text);
						yield new Map(i.map((t, n) => [t, e[n] ?? ""]));
					}
				} : void 0;
				for await (const e of i.batches?.() ?? Oa(i.chunks ?? [i.write()])) {
					if (e.bytes.byteLength > 4 * Ma) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
					const t = Wr(e.text ?? new TextDecoder().decode(e.bytes), i.name, !0, {
						fullRowCsv: e.fullRowCsv,
						rowOffset: r,
						...c ? { contextRows: c } : {}
					});
					let n, o = "";
					for (;;) {
						const r = t.next();
						if (r.done) {
							n = r.value;
							break;
						}
						if (o += Lr([r.value], !1), m += 1, o.length >= Ma / 2) {
							const t = new TextEncoder().encode(o);
							p = Math.max(p, e.bytes.byteLength + t.byteLength), await l.write(t), o = "";
						}
					}
					await l.write(new TextEncoder().encode(o));
					const u = s ? (a ? "" : "\n") + n.csv.slice(n.csv.indexOf("\n") + 1) : n.csv;
					s = !0, r += e.rows ?? 0, a = u.endsWith("\n");
					const d = new TextEncoder().encode(u);
					p = Math.max(p, e.bytes.byteLength + d.byteLength + 2 * o.length), yield d;
				}
			}()) : await y(i.name, i.chunks ?? [i.write()]);
		} catch (b) {
			throw new Error(`Export failed while writing ${i.name}`, { cause: b });
		}
		await l.close(), await o, await y(Pr, async function* () {
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
				contentHash: await ua(t),
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
		return await y(ir, [new TextEncoder().encode(da(r))]), h.end(), await _(), e.signal?.throwIfAborted(), await c.close(), {
			blob: await new Response((await s.getFile()).stream()).blob(),
			entries: g,
			peakBufferedBytes: p,
			reasonRows: m
		};
	} catch (k) {
		throw h.terminate(), await Promise.allSettled([
			l.abort(),
			c.abort(),
			o
		]), k;
	}
}
async function* Oa(e) {
	const t = new TextDecoder();
	let r, i = "";
	for await (const s of async function* () {
		for await (const t of e) for (let e = 0; e < t.byteLength; e += Ma) yield t.subarray(e, e + Ma);
		yield null;
	}()) {
		const e = null === s;
		i += e ? t.decode() : t.decode(s, { stream: !0 });
		const a = n(i, e);
		if (e && a.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const o = a.remainder ?? "";
		if (o.length > Ma || a.records.some((e) => e.text.length > Ma)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
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
const ja = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], Ba = [
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
], Da = [
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
], Pa = [
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
], La = ["fileId", ...l], Fa = {
	files: [
		...ja,
		"ggirTimezone",
		"recording",
		"ggirClockSteps",
		"sourceType",
		"sourceProfileId",
		"navigationFacts"
	],
	markers: Ba,
	activityDays: Da,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: Pa,
	actiwareFileData: [
		"fileId",
		"actiwareIntervals",
		"actiwareStatistics"
	]
}, Ga = {
	files: [...ja, "ggirClockSteps"],
	markers: Ba,
	activityDays: Da,
	ggirResultsBundles: Pa,
	ggirResultsBlobs: La,
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
}, Wa = {
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
		I
	]
}, za = {
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
}, Va = {
	sleep: Fa,
	nonwear: Fa,
	summary: Fa,
	wide: Fa,
	circadian: {
		files: ja,
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
	ggirReport: Ga,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: Ba,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: [
			...ja,
			"sourceType",
			"sourceProfileId"
		],
		markers: Ba,
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
		files: ja,
		markers: Ba,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: Wa,
	audit: za,
	physicalActivity: {
		files: [
			...ja,
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
		markers: Ba,
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
}, Ua = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap();
function qa(e, t, n, r) {
	for (let i = 0; i < n.byteLength;) {
		const s = n.subarray(i, i + rr), a = e[t](s, { at: r + i });
		if (!Number.isInteger(a) || a <= 0 || a > s.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		i += a;
	}
}
function Ka(e) {
	if (!e || "object" != typeof e) return e;
	const t = Ha.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return qa(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(Ka) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ka(t)])) : structuredClone(e);
}
function Ja(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(Ja), Object.freeze(e)), e;
}
var Ya = class extends Error {};
function Za(e, t, n) {
	const r = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new Ya(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (r(t), Reflect.get(e, t, n)),
		has: (e, t) => (r(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (r(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function Xa(e, t, n = []) {
	const r = Ua.get(e);
	if (!r) throw new Ya("Export requires a captured input snapshot");
	const i = Object.entries(Va).find(([, e]) => e === t)?.[0];
	if (!i) throw new Ya("Export producer has no registered input declaration");
	const s = {};
	for (const [a, o] of Object.entries(t)) {
		const e = r[a].filter((e) => !n.length || "studySettings" === a || n.includes("files" === a ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const r of o.filter((e) => e in t)) Object.defineProperty(n, r, {
				enumerable: !0,
				get: () => Ja(Ka(t[r]))
			});
			return Za(n, o, `${i}: undeclared field ${a}.`);
		});
		Object.assign(s, { [a]: Object.freeze(e) });
	}
	return Za(s, Object.keys(t), `${i}: undeclared table `);
}
function Qa(e, t, n) {
	const r = /* @__PURE__ */ new Map();
	for (const i of e.markers) {
		if (i.fileId !== t || i.username !== n) continue;
		const e = _e(i), s = r.get(i.date) ?? [];
		s.push(e), r.set(i.date, s);
	}
	return r;
}
function eo(e, t, n) {
	return new Map([...Qa(e, t, n)].sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => [e, me(t)]));
}
function to(e, t, n) {
	return new Map([...Qa(e, t, n)].flatMap(([e, t]) => {
		const n = me(t.filter(o));
		return n ? [[e, n]] : [];
	}));
}
function no(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function ro(e) {
	return {
		inputs: (t, n) => Xa(e, Va[t], n),
		scoredMarkers: to
	};
}
const io = J("event_marker_csv", "local");
function so(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function ao(e, t, n, r, i) {
	const s = [], a = Xa(n, Va.event, e), o = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		i?.throwIfAborted();
		const e = so(l, no(a, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await qn(e, L(i)), c = new Set(to(a, l.id, r).keys());
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
const oo = (e) => e.slice(e.lastIndexOf("/") + 1), lo = /* @__PURE__ */ new Map();
R.GGIR_CORRECTED_WARM;
const co = (e) => `${e.name}:ggir-corrected-values`, uo = () => "undefined" == typeof navigator ? void 0 : navigator.locks;
async function po(t, n, r, i) {
	const a = await async function(t, n, r, i) {
		if (s = (await se(t))?.extraSettings, !0 !== e("ggir_export_corrected_values", s?.ggir_export_corrected_values).value) return null;
		var s;
		const a = /* @__PURE__ */ new Map(), o = await ce(t, n.length ? { onlyFileIds: n } : void 0), l = new Map(o.map((e) => [e.id, e])), c = await t.ggirResultsBundles.where("fileId").anyOf([...l.keys()]).toArray(), d = await u(t, c.map((e) => e.fileId)), p = c.filter((e) => !e.ggirCorrections), m = [...new Set(p.map((e) => e.configCsv))], g = await Promise.all(m.map((e) => async function(e, t) {
			const n = lo.get(t);
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
			return lo.set(t, r), r;
		}(r, e)));
		i?.throwIfAborted();
		const f = [];
		for (const e of p.sort((e, t) => l.get(e.fileId).filename.localeCompare(l.get(t.fileId).filename))) {
			const t = g[m.indexOf(e.configCsv)];
			if ("notApplied" in t) {
				a.set(e.fileId, t);
				continue;
			}
			const n = l.get(e.fileId), r = JSON.stringify([
				n.ggirBundleRevision ?? null,
				t.revision,
				t.profile
			]);
			a.set(e.fileId, {
				key: r,
				revision: n.ggirBundleRevision
			}), d.get(e.fileId) !== r && f.push({
				fileId: e.fileId,
				key: r,
				revision: n.ggirBundleRevision,
				size: n.sourceSizeBytes ?? 0,
				name: n.filename
			});
		}
		return {
			plans: a,
			misses: f
		};
	}(t, n, L(r.signal), r.signal);
	if (!a) return null;
	const { plans: o, misses: l } = a;
	if (0 === l.length) return o;
	let c = 0;
	r.onProgress?.(c, l.length);
	const d = U({
		cores: navigator.hardwareConcurrency,
		deviceMemoryGib: W()
	}), p = await V(l.map((e) => ({
		name: e.name,
		cost: e.size,
		memoryGib: z(e.size),
		run: async (n, a) => {
			if (i && await async function(e) {
				const t = await uo()?.query(), n = (t) => t.name === co(e);
				return (t?.pending?.some(n) ?? !1) || !1;
			}(t)) return { miss: e };
			try {
				const r = await h(t, e.fileId);
				if (!r) return {
					miss: e,
					notApplied: "the recording was deleted during the export"
				};
				const i = await async function(e, t) {
					if (!e.resultsCsv) return { notApplied: "imported before the app kept GGIR's results/ files; import the same GGIR output folder again to add them (the recording's markers and reviews stay as they are)" };
					if (!e.ms4) return { notApplied: Ze };
					const n = [], r = (e) => void 0 === e ? null : (n.push("string" == typeof e ? new TextEncoder().encode(e) : new Uint8Array(e)), n.length - 1), i = e.recordingFile, a = s(i), o = {
						config_csv: e.configCsv,
						recording_id: a,
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
							return e.startsWith("results/") && (T.test(t) || C.test(t)) ? [t] : [];
						})
					}, { milestones: l, reports: c, cleaned_nights_csv: u, tables: d, review: p } = await t.correctGgirRecording(o, n);
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
					for (const s of [l, c]) {
						for (const { file: e } of s.changes) {
							const t = /^meta\/(ms\d)\.out\//u.exec(e)?.[1] ?? oo(e);
							g[t] = (g[t] ?? 0) + 1;
						}
						for (const e of s.corrections_not_applied) f.set(e.correction, e.reason);
					}
					const h = m.ms2 ?? e.ms2, _ = m.ms3 ?? e.ms3, w = m.ms5 ?? e.ms5, v = (e) => Object.fromEntries(d.filter(({ name: t }) => e.test(t)).map(({ name: e, table: t }) => [e, t])), y = v(T), b = v(C);
					return {
						values: {
							...h ? { ms2: h } : {},
							..._ ? { ms3: _ } : {},
							ms4: m.ms4,
							...w ? { ms5: w } : {},
							cleanedNightsCsv: u,
							part2Reports: Ve(y, p),
							personReports: Ve(b, p),
							imported: Qe(p)
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
				}(r, n);
				return await t.transaction("rw", [t.files, t.ggirCorrectedValues], async () => {
					(await t.files.get(e.fileId))?.ggirBundleRevision === e.revision && await t.ggirCorrectedValues.put({
						fileId: e.fileId,
						key: e.key,
						...i
					});
				}).catch((e) => {
					Pe("warn", "GGIR corrected values cache write failed", Le(e));
				}), { miss: e };
			} catch (o) {
				return r.signal?.throwIfAborted(), a.primary || a.cancel(), Pe("error", "GGIR corrected values failed", Le(o)), {
					miss: e,
					notApplied: "the corrected values could not be computed for this recording in this export; export again to retry"
				};
			} finally {
				r.signal?.aborted || r.onProgress?.(++c, l.length);
			}
		}
	})), {
		signal: r.signal,
		createWorker: k,
		...i ? {
			extraWorkers: Math.floor(d.extraWorkers / 2),
			memoryBudgetGib: d.memoryBudgetGib && d.memoryBudgetGib / 2
		} : d,
		cancelOperation: () => {},
		...r.workerPool
	});
	for (const { miss: e, notApplied: s } of p) void 0 !== s && o.set(e.fileId, { notApplied: s });
	return o;
}
const mo = [
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
function go(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function fo(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function ho(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
mo.join(","), Fe.length;
const _o = "Also export corrected values was off at export";
function wo(e) {
	const t = Object.values(e.ggirCorrectionsNotApplied).filter((e) => e !== _o).length, n = Object.keys(e.ggirCorrectionProfiles);
	if (0 === n.length && 0 === t) return null;
	const r = Object.keys(e.ggirCorrections).length;
	return `Corrected values: ${n.length > 0 ? `profile ${n.join(", ")}; ` : ""}${String(r)} ${1 === r ? "recording" : "recordings"} corrected, ${String(t)} left out (see manifest.json).`;
}
function vo(e) {
	const t = Xa(e, Va.manifest), n = new Map(t.ggirResultsBundles.map((e) => [e.fileId, e.recordingFile]));
	return t.ggirCorrectedValues.flatMap((e) => void 0 !== e.notApplied && "Also export corrected values was off at export" !== e.notApplied && n.has(e.fileId) ? [{
		file: wi("part4_night_review", "corrected"),
		row: 0,
		key: n.get(e.fileId),
		column: `corrected values: ${e.notApplied}`,
		reason: "not_computed_for_export"
	}] : []);
}
function yo(e) {
	return Xa(e, Va.ggirReport).ggirResultsBundles.flatMap((e) => {
		const t = Je(e.imported, e.part2Reports);
		return t ? [{
			file: wi("part4_night_review", "default"),
			row: 0,
			key: e.recordingFile,
			column: t,
			reason: "source_reported_missing"
		}] : [];
	});
}
Us.sleep;
async function bo(e, t = O(), n = {}) {
	const r = await $o(null, "computing the corrected GGIR values", () => async function(e, t, n = {}) {
		const r = uo();
		return r?.request ? r.request(co(e), n.signal ? { signal: n.signal } : {}, () => po(e, t, n, !1)) : po(e, t, n, !1);
	}(t, e, {
		signal: n.signal,
		onProgress: (e, t) => n.progress?.(e, t, "Computing corrected values"),
		...n.workerPool ? { workerPool: n.workerPool } : {}
	})), { username: i } = n, s = void 0 === i ? void 0 : await $o(null, "updating the GGIR night reviews", () => si(t, e, i, r, {
		signal: n.signal,
		...n.workerPool ? { workerPool: n.workerPool } : {}
	}));
	return n.progress?.(0, 0, sr), $o(null, "checking the export inputs", () => async function(e, t = O(), n = {}) {
		const r = /* @__PURE__ */ new Map();
		for (const d of (n.readPlan ?? Object.keys(Va)).map((e) => Va[e])) for (const [e, t] of Object.entries(d)) {
			const n = e;
			r.set(n, /* @__PURE__ */ new Set([...r.get(n) ?? [], ...t]));
		}
		if (!r.size) {
			const e = Object.freeze({ files: Object.freeze([]) });
			return Ua.set(e, {}), e;
		}
		let i = 268435456;
		const s = (e) => {
			if (e instanceof ArrayBuffer ? i -= e.byteLength : "string" == typeof e ? i -= 2 * e.length : e && "object" == typeof e ? Object.values(e).forEach(s) : i -= 8, i < 0) throw new er("Export snapshot exceeds 256 MiB. Select fewer recordings or a narrower workspace before exporting.");
		};
		let a = 0;
		const o = /* @__PURE__ */ new Map(), l = (e, t, n) => {
			const r = Object.freeze({});
			return qa(e, "write", t, a), Ha.set(r, {
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
			const n = r.has("files") ? await ce(t, e.length ? { onlyFileIds: e } : void 0) : [], i = new Set(n.flatMap((e) => e.id ? [e.id] : [])), s = {};
			return await Promise.all([...r].map(async ([e, r]) => {
				const a = (e) => Object.fromEntries([...r].filter((t) => t in e).map((t) => [t, c(e[t])]));
				if (s[e] = [], "files" === e) return void (s[e] = n.map((e) => a(e)));
				const o = "diaryEntries" === e ? t.diaryEntries : ke(t, e), l = "studySettings" === e ? o.where("key").equals("study") : o.where("fileId").anyOf([...i]);
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
		p.markers = (p.markers ?? []).map((e) => m.has(e.fileId) && "invalid" === Se(void 0, _e(e)).kind ? {
			...e,
			isInvalidNight: !0
		} : e);
		const g = function(e) {
			const t = Object.freeze({ files: Ja((e.files ?? []).map((e) => Object.fromEntries(ja.map((t) => [t, Ka(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
			return Ua.set(t, e), t;
		}(p);
		return function(e, t) {
			const n = Ua.get(e);
			if (!n.ggirResultsBundles) return;
			const r = new Set(n.ggirResultsBundles.map((e) => e.fileId));
			if (void 0 === t) return void (n.ggirCorrectedValues && (n.ggirCorrectedValues = n.ggirCorrectedValues.filter((e) => !r.has(e.fileId))));
			const i = new Map((n.files ?? []).map((e) => [e.id, e.ggirBundleRevision])), s = new Map((n.ggirCorrectedValues ?? []).map((e) => [e.fileId, e]));
			n.ggirCorrectedValues = n.ggirResultsBundles.flatMap((e) => {
				if (!t) return e.ggirCorrections && !e.stock ? [] : [{
					fileId: e.fileId,
					key: "",
					notApplied: _o
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
Us.producers, Us.archive;
const ko = [
	"sleep",
	"circadian",
	"ggirReport",
	"event",
	"physicalActivity"
], xo = /* @__PURE__ */ new WeakMap(), Mo = 4;
function So(e, t, n, r) {
	let i = xo.get(e);
	i || (i = /* @__PURE__ */ new Map(), xo.set(e, i));
	const s = JSON.stringify([t, n]);
	let a = i.get(s);
	if (!a) {
		for (; i.size >= Mo;) i.delete(i.keys().next().value);
		a = async function(e, t, n, r) {
			const i = Xa(e, Va.ggirReport, [t]), s = i.files.find((e) => e.id === t), a = i.ggirResultsBundles.find((e) => e.fileId === t), o = a && _(a, i.ggirResultsBlobs.find((e) => e.fileId === t)), l = Qa(i, t, n), c = o ? await Xr(t, o.imported, l, s.ggirClockSteps, r) : void 0, u = c?.markersByAlgo ?? l, d = c?.selected ?? new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), p = ai(d), m = i.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n), g = {
				review: m,
				bundleRevision: s.ggirBundleRevision
			}, f = o ? await gi(o, d, s.ggirClockSteps, c?.edits, r, g) : void 0, h = f ? await Ro(f, p, r) : void 0, w = i.ggirCorrectedValues.find((e) => e.fileId === t), v = m?.corrected && w && m.corrected.key === w.key ? {
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
				sets: o && f ? await Promise.all(He(o, w, w?.notApplied !== _o).map(async ({ set: e, bundle: t }) => t === o ? h : Ro(await gi(t, d, s.ggirClockSteps, f.edits, r, "corrected" === e ? v : void 0), p, r))) : [],
				invalidDates: p
			};
		}(e, t, n, r), i.set(s, a), a.catch(() => {
			i.get(s) === a && i.delete(s);
		});
	}
	return a;
}
let Io;
async function Ro(e, t, n) {
	const { ggirCell: r, ggirNum: i } = await import("./ggir-results-types-4WFMLido.js").then((e) => e.o), s = e.part2Reports?.["part2_daysummary.csv"], a = /* @__PURE__ */ new Map();
	if (s) for (let u = 0; u < s.rows; u++) {
		const e = r(s, Z.ggir_id.header, u), t = bi(r(s, Z.ggir_calendar_date.header, u));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		a.set(n, a.has(n) ? null : u);
	}
	const o = ki(e.imported, "nights"), l = Z.ggir_nonwear_perc_spt.header, c = async (t) => {
		const c = t.nights, u = Array.from({ length: c.rows }, (e, t) => {
			const n = r(c, Z.ggir_id.header, t), l = a.get(JSON.stringify([null == n ? null : String(n), o(c, t, !1)])), u = s && null != l;
			return {
				id: n,
				day: l,
				valid: u ? r(s, Z.ggir_day_valid_hours.header, l) : null,
				hours: u ? r(s, Z.ggir_day_hours.header, l) : null,
				validNumber: u ? i(s, Z.ggir_day_valid_hours.header, l) : null,
				hoursNumber: u ? i(s, Z.ggir_day_hours.header, l) : null
			};
		}), d = u.flatMap((e, t) => null != e.validNumber && null != e.hoursNumber ? [{
			index: t,
			valid: e.validNumber,
			hours: e.hoursNumber
		}] : []), p = /* @__PURE__ */ new Map();
		if (d.length > 0) {
			const e = await L(n).ggirDayValidFractions(Float64Array.from(d, (e) => e.valid), Float64Array.from(d, (e) => e.hours));
			d.forEach((t, n) => p.set(t.index, e[n] ?? null));
		}
		const m = !c.columns.includes(l) && u.some((e, n) => !t.nightRecomputed[n]) ? await function(e, t) {
			const n = e.cleanedNightsCsv;
			if (!n) return Promise.resolve(void 0);
			if (Io?.csv !== n || Io.config !== e.configCsv) {
				const r = L(t).readGgirReportCsv(n, e.configCsv);
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
			const f = p.get(g) ?? null, h = i(c, Z.ggir_night.header, g), _ = Array.from({ length: t.days.rows }, (e, t) => t).find((e) => "WW" === r(t.days, "window", e) && i(t.days, "night_number", e) === h), w = m ? Array.from({ length: m.rows }, (e, t) => t).find((t) => String(r(m, Z.ggir_id.header, t)) === String(e) && i(m, Z.ggir_night.header, t) === h) : void 0, v = {
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
		}), f = te.ggir_review_night_extension, h = [.../* @__PURE__ */ new Set([
			...c.columns,
			...f.map((e) => Z[e].header),
			...f.map((e) => Z[e].header + "_missing_reason")
		])], _ = h.map((e) => {
			const t = f.find((t) => Z[t].header + "_missing_reason" === e);
			if (t) return g.map((e) => e.reasons[t] ?? null);
			const n = f.find((t) => Z[t].header === e);
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
		...oi(e.personReports, e.edits, t) ? { personRecomputed: await Ri(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await c(e.imported),
		...e.current ? { current: await c(e.current) } : {}
	};
}
function To(e) {
	return Xa(e, Va.manifest).studySettings.flatMap((e) => le(e).map((e) => ({
		file: "sleep_export.csv",
		row: 0,
		key: e.filename,
		column: `${e.category}: ${e.reason}`,
		reason: "not_computed_for_export"
	})));
}
const Ao = "not included", Eo = "included if produced";
function Co(e) {
	const t = e.artifacts ?? null, r = t ? null : e.planned ?? null, s = e.columns, a = t ? t.sleepRows.length : r?.sleepRows ?? null, o = t ? t.sleepRows.filter((e) => e.markerType === c.MAIN_SLEEP).length : r?.mainSleepRows ?? null, l = t ? ha(t.sleepRows).size : r?.wideRows ?? null, u = t ? t.summaryRows.length : r?.summaryRows ?? null, d = t ? t.nonwearRows.length : r?.nonwearRows ?? null, p = t ? t.physicalActivityRows.length : r?.activityRows ?? null, m = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : r?.activityDates ?? null, g = t ? t.eventMarkerRows?.length ?? 0 : r?.eventMarkerRows ?? null, f = r?.actogramFiles ?? null, h = t ? Object.keys(t.ggirEntries) : null, _ = (h ? h.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
		const r = Math.max(0, n(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
		return {
			name: e,
			include: r > 0,
			rows: r
		};
	}) : r ? [...Fi([...r.part4Rows.keys()])].map(([e, t]) => ({
		name: t,
		include: r.ggirMainSleepGroupKeys.includes(e),
		rows: r.part4Rows.get(e) ?? null
	})) : []).sort((e, t) => e.name.localeCompare(t.name)), w = h ? h.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [Di, ...r?.ggirReviewEntries ?? []], v = (e) => null == e ? null : e > 0, y = (n, r, i) => {
		const a = null == r ? "unknown" : r ? "included" : "not_included";
		return "included" !== a ? {
			name: n,
			state: a,
			rows: null,
			detail: "unknown" === a ? i.detail : Ao,
			estimatedBytes: 0,
			write: null
		} : {
			name: n,
			state: a,
			rows: i.rows,
			detail: i.detail,
			estimatedBytes: i.estimatedBytes ?? ((i.rows ?? 0) + 1) * (i.columns ?? s) * 12,
			write: t ? () => i.csv ? qi(i.csv(t)) : i.encode(t) : null,
			...t && (i.chunkField || i.wide) ? { batches: function* () {
				if (i.wide) {
					const e = _a(t.sleepRows, !0), n = e.next().value;
					for (const t of e) {
						const e = n + "\n" + t;
						yield {
							bytes: qi(e),
							text: e,
							rows: 1
						};
					}
				} else if (i.chunkField) {
					const n = t[i.chunkField] ?? [];
					for (let r = 0; r < n.length; r += 256) {
						const s = {
							...t,
							[i.chunkField]: n.slice(r, r + 256)
						}, a = !e.selectedColumns?.length || "sleepRows" !== i.chunkField && "nonwearRows" !== i.chunkField ? void 0 : xa(s[i.chunkField], void 0, !0), o = i.csv(s);
						yield {
							bytes: qi(o),
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
		y("sleep_export.csv", v(a), {
			rows: a,
			detail: null == a ? Eo : `${String(a)} rows · ${String(s)} columns`,
			chunkField: "sleepRows",
			csv: (t) => xa(t.sleepRows, e.selectedColumns ?? void 0, !0)
		}),
		y("sleep_export_wide.csv", !!e.includeWideFormat && v(l ?? o), {
			rows: l,
			detail: null == l ? Eo : `${String(l)} participant group ${1 === l ? "row" : "rows"}`,
			wide: !0,
			csv: (e) => function(e, t = !1) {
				return [..._a(e, t)].join("\n");
			}(e.sleepRows, !0)
		}),
		y("summary_export.csv", v(u ?? o), {
			rows: u,
			detail: null == u ? Eo : `${String(u)} participant ${1 === u ? "row" : "rows"}`,
			chunkField: "summaryRows",
			csv: (e) => function(e, t = !1) {
				const r = ka("summary_csv", e, la, void 0, t), i = [
					"summary_mean_temperature_c",
					"sleep_regularity_index",
					...Object.values(oa).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
				];
				return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? n(r).records.map((t, n) => 0 === n ? t.text + "," + i.map((e) => Z[e].header + "_missing_reason").join(",") : t.text + "," + i.map((t) => {
					const r = e[n - 1];
					return "summary_mean_temperature_c" === t ? null == r.meanTemperature ? r.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? r.sleepRegularityMissingReason ?? "" : r.metricMissingReasons?.[t] ?? "";
				}).join(",")).join("\n") : r;
			}(e.summaryRows, !0)
		}),
		y("nonwear_export.csv", v(d), {
			rows: d,
			detail: null == d ? Eo : `${String(d)} periods`,
			chunkField: "nonwearRows",
			csv: (t) => xa(t.nonwearRows, e.selectedColumns ?? void 0, !0)
		}),
		y("event_markers_export.csv", v(g), {
			rows: g,
			detail: null == g ? Eo : `${String(g)} button ${1 === g ? "press" : "presses"}`,
			columns: io.length,
			chunkField: "eventMarkerRows",
			csv: (e) => function(e, t = !1) {
				const n = [[...io, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
				for (const r of e) n.push([
					r.filename,
					r.participantId ?? "",
					r.studyDate,
					ye(r.localTimestamp),
					null == r.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (r.localTimestamp - 60 * r.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
					...t ? [r.participantId ? "" : "source_reported_missing", null == r.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
				].map((e) => i(e)).join(","));
				return `${n.join("\n")}\n`;
			}(e.eventMarkerRows ?? [], !0)
		}),
		...Vs.map((e) => {
			const n = t ? e.rows(t) : r?.sourceAnalysisRows.get(e.entry) ?? null;
			return y(e.entry, v(n), {
				rows: n,
				detail: null == n ? Eo : e.detail(n),
				columns: e.columns,
				...e.chunkField ? { chunkField: e.chunkField } : {},
				...e.csv ? { csv: (t) => e.csv(t) } : {},
				...e.encode ? { encode: (t) => e.encode(t) } : {}
			});
		}),
		y("physical_activity_export.csv", v(p), {
			rows: p,
			detail: null == p || null == m ? Eo : `${String(p)} rows · ${String(m)} distinct dates`,
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
				]), a = e.some((e) => "ggir_enmo" === e.method) ? mo.filter((e) => !i.has(e) && (Ar.has(e) || s.has(e))) : [], o = [
					"Participant ID",
					"Threshold Preset Name",
					"Inclusion Rule Preset Name",
					"Scored Username",
					"Source Content Hash",
					"Validation Notes",
					"Notes"
				], l = [[
					...mo.filter((e) => !i.has(e)),
					...a.map((e) => `${e}_missing_reason`),
					...r ? [
						"Epoch Length Seconds",
						"Native Epoch Seconds",
						"Mask Overlap Epochs"
					].map((e) => e + "_missing_reason") : [],
					...o.map((e) => e + "_missing_reason")
				].join(",")];
				for (const c of e) {
					const e = ho(c), t = null == c.sedentaryMinutes || !n && null == c.excludedNonwearMinutes ? null : c.sedentaryMinutes + (n ? 0 : c.excludedNonwearMinutes), u = [
						go(c.filename),
						go(c.participantId),
						go(c.analysisDate),
						go(c.method),
						go(c.methodLabel),
						go(c.methodFamily),
						go(c.requiredSignalContract),
						go(c.computationOwner),
						String(c.frontendComputesMetric),
						go(c.sourceSignal),
						go(c.status),
						go(c.methodRule),
						go(c.thresholdSource),
						go(c.thresholdPresetName),
						fo(c.sedentaryMax),
						fo(c.lightMin),
						fo(c.moderateMin),
						fo(c.vigorousMin),
						fo(t),
						fo(c.lightMinutes),
						fo(c.moderateMinutes),
						fo(c.vigorousMinutes),
						fo(c.mvpaMinutes),
						fo(c.mimsUnitTotal),
						null == c.epochLengthSeconds ? "" : String(c.epochLengthSeconds),
						String(c.epochsReviewed),
						fo(c.wakeWearMinutes),
						fo(c.excludedNonwearMinutes),
						fo(c.excludedMainSleepMinutes),
						fo(c.excludedNapMinutes),
						null == c.maskOverlapEpochs ? "" : String(c.maskOverlapEpochs),
						null == c.mvpaBouts ? "" : String(c.mvpaBouts),
						fo(c.mvpaBoutMinutes),
						null == c.sedentaryBouts ? "" : String(c.sedentaryBouts),
						null == c.sedentaryBreaks ? "" : String(c.sedentaryBreaks),
						fo(c.meanSedentaryBoutMinutes),
						null == c.nativeEpochSeconds ? "" : String(c.nativeEpochSeconds),
						String(c.epochMismatch),
						go(c.inclusionRulePresetName),
						String(c.maskExcludeNonwear),
						String(c.maskExcludeMainSleep),
						String(c.maskExcludeNaps),
						String(c.maskUseManualNonwear),
						String(c.maskUseAlgorithmNonwear),
						go(c.maskNonwearDetector),
						fo(c.maskMinimumWakeWearMinutes),
						go(c.scoredUsername),
						go(c.sourceContentHash),
						go(c.exportedAt),
						go(e.status),
						go(e.notes),
						go(c.notes)
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
						const t = u[mo.indexOf(e)];
						if ("ggir_enmo" !== c.method || "" !== t) return "";
						if (Ar.has(e)) {
							const t = d[e];
							return null != t && Number.isFinite(t) ? "" : "source_reported_missing";
						}
						return s.has(e) && null == p[e] ? "not_computed_for_export" : "";
					}), g = r ? [
						["Epoch Length Seconds", null == c.epochLengthSeconds && "ggir_enmo" === c.method ? "not_applicable_to_row" : ""],
						["Native Epoch Seconds", null == c.nativeEpochSeconds ? "not_applicable" === c.thresholdSource ? "not_applicable_to_row" : "source_reported_missing" : ""],
						["Mask Overlap Epochs", null == c.maskOverlapEpochs ? "ggir_enmo" === c.method ? "not_applicable_to_row" : "needs_signal" === c.status ? "channel_unavailable" : "backend_required" === c.status ? "not_computed_for_export" : "" : ""]
					].map(([e, t]) => "" === u[mo.indexOf(e)] ? t : "") : [];
					l.push([
						...u.filter((e, t) => !i.has(mo[t])),
						...m,
						...g,
						...o.map((e) => "" !== u[mo.indexOf(e)] ? "" : [
							"Participant ID",
							"Scored Username",
							"Source Content Hash"
						].includes(e) ? "source_reported_missing" : "not_applicable_to_row")
					].join(","));
				}
				return `${l.join("\n")}\n`;
			}(e.physicalActivityRows, e.physicalActivityEnabledClasses, e.physicalActivityNonwearAsClass, !0)
		}),
		..._.map(({ name: e, include: t, rows: n }) => y(e, t, {
			rows: n,
			detail: null == n ? Eo : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
			columns: 40,
			encode: (t) => t.ggirEntries[e]
		})),
		...w.map((e) => y(e, !(!h && !r?.ggirReviewEntries.includes(e)) || (null == f ? null : f > 0), {
			rows: null,
			detail: e.endsWith(".html") ? null == f ? h ? "1 report" : Eo : `1 report · ${String(f)} ${1 === f ? "file" : "files"}` : "1 GGIR report artifact",
			encode: (t) => t.ggirEntries[e]
		})),
		{
			name: Pr,
			state: "included",
			rows: null,
			detail: "1 reason per missing cell",
			estimatedBytes: 2048 + (zs.reduce((e, n) => {
				const r = t ? n.missingReasonBytes(t) : void 0;
				return void 0 === r ? e : (e ?? 0) + r;
			}, void 0) ?? r?.sourceAnalysisMissingReasonBytes ?? 0),
			write: null
		},
		y("codebook.csv", !0, {
			rows: ca.length,
			detail: `${String(ca.length)} definitions`,
			estimatedBytes: new TextEncoder().encode(ma()).length,
			encode: () => qi(ma(void 0, !0))
		}),
		{
			name: ir,
			state: "included",
			rows: null,
			detail: "1 manifest · run, settings, entry hashes",
			estimatedBytes: 2048,
			write: null
		}
	];
}
async function No(e, t, r, s = {}) {
	const { signal: a } = s;
	a?.throwIfAborted(), s.progress?.(0, 0, sr);
	const l = await bo(t.fileIds, e, {
		...s,
		signal: a,
		username: t.username
	}), u = function(e, t, r, s) {
		const a = [], o = [], l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = [], d = be(/* @__PURE__ */ new Date()), p = (e) => {
			for (const t of e.charts) u.push({
				key: t.key,
				pid: t.pid,
				charts: t.charts.length
			}), o.push(Vi(o.length, t));
			for (const [t, n] of e.csvLinesByAlgo) c.set(t, f(n[0]));
			for (const [t, n] of e.headers) l.set(t, Si(l.get(t) ?? [], n));
			a.push({
				csvLinesByAlgo: e.csvLinesByAlgo,
				ggirReviews: e.ggirReviews
			});
		};
		async function* m(e, t) {
			for (const n of a) s?.throwIfAborted(), yield Ji(n, {
				signal: s,
				names: t,
				layouts: l,
				only: e
			}).then((t) => t[e]);
		}
		return {
			add: p,
			addFiles: async (n) => {
				for (const i of n) p(await Yi({
					username: e,
					dateRange: t,
					snapshot: r,
					generatedAt: d
				}, i, s));
			},
			streamEntries: function* () {
				const e = Fi([...c.keys()]);
				for (const [t, n] of c) l.set(e.get(t), n);
				for (const t of [...l.keys()].filter(yi)) {
					const e = l.get(t);
					e && l.set(t, [
						...e.filter((e) => !e.endsWith("_missing_reason") && !fi.includes(e)),
						...fi,
						...e.filter((e) => e.endsWith("_missing_reason") && !fi.some((t) => e === t + "_missing_reason")),
						...fi.map((e) => e + "_missing_reason")
					]);
				}
				for (const [t, r] of l) yield {
					name: t,
					chunks: async function* () {
						yield qi(r.map(i).join(",") + "\n");
						for await (const r of m(t, e)) {
							if (!r) continue;
							const e = new TextDecoder().decode(r), t = n(e).records[0], i = qi(e.slice(t.text.length + 1));
							for (let n = 0; n < i.byteLength; n += rr) yield i.subarray(n, n + rr);
						}
					}()
				};
				u.length && (yield {
					name: Di,
					chunks: async function* () {
						yield* Hi(function(e, t) {
							const n = e.map((e) => e.key), r = e.reduce((e, t) => e + t.charts, 0);
							return `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${Bi(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${Bi(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${r} chart${1 !== r ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${Bi(e[n].pid)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`;
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
						for (const e of Ui) yield* Hi(e);
					}()
				});
			},
			generatedAt: d
		};
	}(t.username, t.dateRange, l, a), d = [];
	for (const n of l.files) {
		const e = d.at(-1);
		e?.[0]?.filename === n.filename ? e.push(n) : d.push([n]);
	}
	const m = [], g = [], h = [];
	let _ = !1;
	const w = t.manifest.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), v = s.groups ?? {
		size: 1,
		run: (e, t, n) => async function(e, t, n, { signal: r } = {}) {
			r?.throwIfAborted();
			const i = e.files.filter((e) => t.includes(e.id)), s = i.map((e) => e.id), a = /* @__PURE__ */ new Map();
			let l = !1;
			try {
				const t = await function(e, { fileIds: t, dateRange: n, signal: r }) {
					const i = Xa(e, Va.circadian, t);
					return async function(e, t, { dateRange: n, signal: r }) {
						const i = L(r), s = [];
						let a = 0;
						for (const o of e) {
							if (!o.id) continue;
							r?.throwIfAborted();
							const e = await t(o.id), l = [];
							for (const t of e.values()) {
								if (r?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
								a += 1;
								const e = Kt(o.id, t);
								e && l.push(e);
							}
							if (0 === l.length) continue;
							const { request: c, transfer: u } = qt(l.map((e) => e.wire)), d = await i.computeCircadian(M(c, u));
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
					}(t.length > 0 ? i.files.filter((e) => null != e.id && t.includes(e.id)) : i.files, (e) => no(i, e), {
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
			} catch (g) {
				if (g instanceof Ya) throw g;
				if (r?.throwIfAborted(), l = !0, g instanceof DOMException && "AbortError" === g.name) throw g;
			}
			const u = await $o(i[0].filename, "computing its sleep rows", () => async function(e, t, n, r, i, s, a) {
				const l = i && i.trim().length > 0 ? i.trim() : null, u = Xa(s, Va.sleep, e), d = u.files, m = jn(u.studySettings[0]?.extraSettings), g = Ee(u.studySettings[0]?.extraSettings?.analysis_paradigm), f = (e.length > 0 ? d.filter((t) => null != t.id && e.includes(t.id)) : [...d]).sort((e, t) => e.filename.localeCompare(t.filename)), [h, _] = n ?? ["", ""], w = [], v = [], y = [], b = [], k = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), M = async () => {
					for (const [e, t] of k) x.set(e, await ia(e, t, w, a));
					k.clear();
				}, S = /* @__PURE__ */ new Map(), I = (e) => {
					const t = JSON.stringify(e);
					let n = S.get(t);
					return n || (n = L(a).exportNapAggregate(e), S.set(t, n)), n;
				}, R = await Promise.all(f.map((e) => So(s, e.id, t, a)));
				for (const [A, E] of f.entries()) {
					if (a?.throwIfAborted(), A > 0 && f[A - 1].filename !== E.filename && await M(), !E.id) continue;
					const e = no(u, E.id), { bundle: t, markersByAlgo: i } = R[A], s = t?.edits ?? [], d = t ? Ke(t.imported) : [], { zone: x } = await Ln(E, m, a), S = [.../* @__PURE__ */ new Set([...E.availableDates, ...d.map((e) => e.nightDate)])].sort(), T = n ? S.filter((e) => e >= h && e <= _) : S;
					if (t) {
						const e = new Set(Ye(t.imported).map((e) => e.night));
						for (const n of d) {
							if (e.has(n.night) || !T.includes(n.nightDate)) continue;
							const r = Se(n, i.get(n.nightDate)?.[0]).kind;
							"scored" !== r && "invalid" !== r && y.push({
								file: "sleep_export.csv",
								row: 0,
								key: `${Z.filename.header}=${E.filename}|${Z.study_date.header}=${n.nightDate}`,
								column: `GGIR night ${String(n.night)}: ${Xe(t.imported, n.night)}`,
								reason: "ggir_night_excluded"
							});
						}
					}
					const C = ge(e.values()), N = Ws[Ce(E, g)].forFile(u, E.id), $ = T.flatMap((e) => (i.get(e) ?? []).filter((e) => o(e) || e.nonwearMarkers.length > 0).map((t) => ({
						markers: t,
						sleepPeriods: N.sleepPeriodsOf(e, t),
						nonwear: t.nonwearMarkers.map((e) => ({
							start: e.startTimestamp,
							end: e.endTimestamp
						}))
					}))), O = [...e.keys()].sort().map((t) => e.get(t)), j = O.map((e) => ae(e).timestamps), B = qs.flatMap((e) => {
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
					}), D = 0 === $.length ? [] : await L(a).exportFileNightFigures($.map(({ sleepPeriods: e, nonwear: t }) => ({
						periods: e.map((e) => ({
							start: e.onsetTimestamp,
							end: e.offsetTimestamp
						})),
						nonwear: t
					})), B), P = /* @__PURE__ */ new Map();
					let F = 0;
					for (const n of $) P.set(n.markers, {
						...n,
						figures: D.slice(F, F + n.sleepPeriods.length)
					}), F += n.sleepPeriods.length;
					for (const n of T) {
						a?.throwIfAborted();
						const o = i.get(n);
						if (o && 0 !== o.length) for (const i of o) {
							const o = P.get(i);
							if (!o) continue;
							const { sleepPeriods: u, figures: m } = o, g = E.participantId ?? null, f = E.id, h = i.algorithm ?? null, _ = i.username ?? null, y = i.needsConsensus, M = i.notes, S = e.get(n), R = await et(n, E.navigationFacts, L(a)), T = e.get(R), A = {
								fileId: f,
								filename: E.filename,
								participantId: g,
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
								...ta(i.sleepPeriodDetectionConfig),
								algorithmVersion: i.algorithmVersion ?? null,
								verificationStatus: null,
								studyId: l,
								markerStepSeconds: p(h, E.epochLengthSeconds),
								dstTransition: await Ge(x, n, void 0, L(a))
							}, $ = await I(u.filter((e) => e.markerType === c.NAP).map((e) => ({
								start: e.onsetTimestamp,
								end: e.offsetTimestamp
							}))), O = r?.get(`${String(f)}|${n}`), j = {
								l5Hour: O?.l5Hour ?? null,
								m10Hour: O?.m10Hour ?? null,
								napCount: $.napCount,
								totalNapMinutes: $.napCount > 0 ? $.totalNapMinutes : null
							}, D = C(h), F = kn(S, D), G = `${E.filename}\0${g ?? ""}\0${A.algorithm ?? ""}\0${A.detectionRule ?? ""}`, W = k.get(G) ?? [];
							W.push({
								date: n,
								epochLengthSeconds: E.epochLengthSeconds || 60,
								timestamps: F.timestamps,
								states: F.algorithmResults,
								stale: "stale" === D.status
							}), k.set(G, W);
							const z = ae(S), V = await Yn(e, n, D, {
								signal: a,
								nextDate: R
							}), U = m.map(({ means: e }) => new Map(B.map(({ field: t }, n) => [t, e[n] ?? null]))), H = async (e, r, o) => {
								let l = null;
								const u = d.find((e) => e.nightDate === n), p = t && u && e.markerType === c.MAIN_SLEEP && "invalid" !== Se(u, i).kind, g = u && s.some((e) => e.night === u.night), f = na(null), h = {};
								let _ = "not_applicable_to_row";
								const w = N.sleepRowMetrics?.cells(e) ?? null;
								if (w && (_ = w.metricMissingReason, Object.assign(f, w.metrics), Object.assign(h, w.reasons)), !p && !w && e.onsetTimestamp && e.offsetTimestamp) {
									const { timestamps: t, algorithmResults: n, activity: r, scoresStale: i } = V;
									if (null !== i && 0 === b.length && b.push({
										component: "metric_computation",
										code: "unavailable",
										message: i
									}), _ = null !== i ? "scores_from_another_config" : null == n ? "no_scored_epochs" : null == r ? "channel_unavailable" : 0 === t.length ? "no_valid_epochs" : void 0, null != n && t.length > 0 && (null != r || z.ggir)) {
										const i = z.epochSec ?? (E.epochLengthSeconds || 60), s = await ra(n, r, t, e.onsetTimestamp, e.offsetTimestamp, i, a);
										l = s.metrics, l || s.error || (_ = "no_valid_epochs"), s.error && (_ = "not_computed_for_export"), s.error && 0 === b.length && b.push({
											component: "metric_computation",
											code: "unavailable",
											message: "Metric computation failed for at least one selected period; those rows carry no numerics."
										});
									}
								}
								if (p) {
									_ = "channel_unavailable";
									const e = g ? t.current?.nights : t.imported.nights, n = e ? Y(e, Z.ggir_night.header, u.night) : -1;
									for (const [t, r, i, s] of Hs) {
										const a = e ? Q(e, Z[r].header, n) : null;
										f[t] = null == a ? null : a * s, h[i] = null == a ? g ? "not_computed_for_export" : "source_reported_missing" : void 0;
									}
								}
								(p || w || l && !("averageAwakeningLengthMinutes" in l)) && (h.average_awakening_length_minutes = "not_computed_for_export");
								const { figures: v } = m[o], y = Boolean(e.onsetTimestamp && e.offsetTimestamp), k = (e) => y ? U[o].get(e) ?? null : null, x = {
									...A,
									...j,
									periodIndex: e.markerIndex,
									markerType: e.markerType,
									onsetTimestamp: e.onsetTimestamp,
									offsetTimestamp: e.offsetTimestamp,
									...p || w ? f : na(l),
									inBedTimestamp: w?.inBedSpan?.startTimestamp ?? null,
									outOfBedTimestamp: w?.inBedSpan?.endTimestamp ?? null,
									metricMissingReason: _,
									isInvalidNight: r,
									meanTemperature: k("temperature"),
									meanWhiteLight: k("lux"),
									meanRedLight: k("redLight"),
									meanGreenLight: k("greenLight"),
									meanBlueLight: k("blueLight"),
									sleepMidpointTimestamp: y ? v.midpointTimestamp : null,
									sleepMidpointHour: y ? v.midpointClockHour : null,
									validWearMinutes: v.validWearMinutes
								}, M = (e, t) => null != e ? void 0 : y ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
								return x.sensorMissingReasons = {
									mean_temperature_c: M(x.meanTemperature, Boolean(S?.temperature || T?.temperature)),
									mean_white_light_lux: M(x.meanWhiteLight, Boolean(S?.lux || T?.lux)),
									mean_red_light: M(x.meanRedLight, Boolean(S?.redLight || T?.redLight)),
									mean_green_light: M(x.meanGreenLight, Boolean(S?.greenLight || T?.greenLight)),
									mean_blue_light: M(x.meanBlueLight, Boolean(S?.blueLight || T?.blueLight))
								}, x.derivedMissingReasons = {
									...h,
									l5_hour: null == x.l5Hour ? O ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									m10_hour: null == x.m10Hour ? O ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									sleep_midpoint_time: null == x.sleepMidpointTimestamp ? y ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									sleep_midpoint_hour: null == x.sleepMidpointHour ? y ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									valid_wear_minutes: null == x.validWearMinutes ? y ? "no_valid_epochs" : "not_applicable_to_row" : void 0
								}, x;
							};
							if (i.isInvalidNight) {
								w.push({
									...A,
									...j,
									periodIndex: null,
									markerType: Xs,
									onsetTimestamp: null,
									offsetTimestamp: null,
									...na(null),
									isInvalidNight: !0,
									sleepMidpointTimestamp: null,
									sleepMidpointHour: null,
									validWearMinutes: null
								});
								for (const [e, t] of u.entries()) w.push(await H(t, !0, e));
							} else for (const [e, t] of u.entries()) w.push(await H(t, !1, e));
							for (const e of i.nonwearMarkers) v.push({
								...A,
								...j,
								periodIndex: e.markerIndex ?? 0,
								markerType: Qs,
								onsetTimestamp: e.startTimestamp,
								offsetTimestamp: e.endTimestamp,
								...na(null),
								isInvalidNight: !1,
								sleepMidpointTimestamp: null,
								sleepMidpointHour: null,
								validWearMinutes: null
							});
						}
					}
				}
				await M(), w.sort(sa), v.sort(sa);
				const T = await async function(e, t) {
					const n = e.filter((e) => e.markerType === c.MAIN_SLEEP), r = /* @__PURE__ */ new Map();
					for (const o of n) {
						const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = r.get(e);
						t ? t.push(o) : r.set(e, [o]);
					}
					const i = [...r], s = await L(t).summarizeExportGroups(i.map(([, e]) => e.map((e) => ({
						study_date: e.studyDate,
						total_nap_minutes: e.totalNapMinutes,
						values: aa.map(([, t]) => e[t])
					})))), a = i.map(([e, t], n) => {
						const [r, i, a, o] = e.split("\0"), l = s[n], c = Object.fromEntries(aa.map(([e], t) => [e, l.means[t] ?? null]));
						return {
							filename: r,
							participantId: i,
							algorithm: a,
							detectionRule: o,
							nNights: l.nNights,
							...c,
							meanTemperatureMissingReason: null == c.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
							metricMissingReasons: Object.fromEntries(aa.map(([e, n]) => {
								const r = oa[e], i = Hs.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : r), s = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[i] ?? e.metricMissingReason).find(Boolean);
								return [r, null == c[e] ? s : void 0];
							})),
							sleepRegularityIndex: null,
							meanTotalNapMinutes: l.meanTotalNapMinutes,
							studyId: t[0]?.studyId ?? null
						};
					});
					return a.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), a;
				}(w, a);
				for (const o of T) {
					const e = `${o.filename}\0${o.participantId}\0${o.algorithm}\0${o.detectionRule}`, t = x.get(e);
					o.sleepRegularityIndex = t?.sri ?? null, o.sleepRegularityMissingReason = t?.sriMissingReason ?? (t ? void 0 : "not_computed_for_export");
				}
				return {
					sleepRows: w,
					nonwearRows: v,
					summaryRows: T,
					degradations: b,
					nightReasons: y
				};
			}(s, n.username, n.dateRange, a, n.studyId, e, r)), d = await $o(i[0].filename, "drawing its visual report", async () => {
				const t = [];
				for (const s of i) t.push(await Yi({
					...n,
					snapshot: e
				}, s, r));
				return t;
			}), { generateLocalPhysicalActivityExportRows: m } = await import("./local-physical-activity-export-CnCfBedo.js");
			return {
				part: u,
				physicalActivityRows: await m(e, s, n.dateRange, {
					username: n.username,
					cutpointOverrides: n.physicalActivity.cutpointOverrides,
					maskPolicy: n.physicalActivity.maskPolicy,
					choiAxis: n.physicalActivity.choiAxis,
					exportedAt: n.exportedAt,
					...r ? { signal: r } : {}
				}),
				eventMarkerRows: await ao(s, n.dateRange, e, n.username, r),
				circadianDegraded: l,
				reports: d
			};
		}(e, t, n, { signal: a })
	}, y = {
		username: t.username,
		studyId: t.studyId,
		dateRange: t.dateRange,
		physicalActivity: t.physicalActivity,
		exportedAt: w,
		generatedAt: u.generatedAt
	}, b = d.map(() => {
		const e = {};
		return e.promise = new Promise((t, n) => {
			e.resolve = t, e.reject = n;
		}), e.promise.catch(() => {}), e;
	});
	let k = 0, x = d.length, S = 0;
	s.progress?.(0, d.length, ar), Promise.all(Array.from({ length: Math.min(v.size, d.length) }, async () => {
		for (; k < x;) {
			const t = k++;
			try {
				b[t].resolve(await v.run(l, d[t].map((e) => e.id), y)), s.progress?.(++S, d.length, ar);
			} catch (e) {
				x = Math.min(x, t), b[t].reject(e);
			}
		}
	}));
	try {
		for (const e of b) {
			a?.throwIfAborted();
			const t = await e.promise;
			m.push(t.part);
			for (const e of t.reports) u.add(e);
			g.push(...t.physicalActivityRows), h.push(...t.eventMarkerRows), _ ||= t.circadianDegraded;
		}
	} finally {
		x = 0;
	}
	s.progress?.(0, 0, or), a?.throwIfAborted();
	const I = function(e) {
		return {
			sleepRows: e.flatMap((e) => e.sleepRows),
			nonwearRows: e.flatMap((e) => e.nonwearRows),
			summaryRows: e.flatMap((e) => e.summaryRows),
			degradations: e.flatMap((e) => e.degradations).slice(0, 1),
			nightReasons: e.flatMap((e) => e.nightReasons ?? [])
		};
	}(m), R = {}, T = function(e) {
		const t = Xa(e, Va.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(l);
	T && (R["audit_log.jsonl"] = T);
	const A = {
		fileIds: t.fileIds,
		dateRange: t.dateRange,
		username: t.username,
		signal: a
	}, E = [];
	for (const n of zs) E.push(await n.produceEntries(A, ro(l), L(a)));
	const C = Xa(l, Va.manifest), N = Object.fromEntries(I.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	_ ||= I.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const $ = [..._ ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...I.degradations], O = function(e, t) {
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
	}(C.ggirResultsBundles, C.ggirCorrectedValues), j = await $o(null, "reading saved GGIR source provenance", () => async function(e, t = L()) {
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
	}(C.ggirResultsBundles, L(a))), B = [...u.streamEntries()], D = await $a({
		artifacts: {
			importRefusalReasons: [
				...To(l),
				...yo(l),
				...vo(l),
				...I.nightReasons ?? []
			],
			...I,
			physicalActivityRows: g,
			physicalActivityEnabledClasses: t.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: t.physicalActivity.nonwearAsClass,
			ggirEntries: R,
			eventMarkerRows: h,
			...Object.assign({}, ...E.map((e) => e.artifacts))
		},
		extraEntries: B,
		options: t,
		manifest: {
			...t.manifest,
			physicalActivity: t.physicalActivity,
			exportedAt: w,
			algorithmVersions: N,
			degradations: $,
			ggirSources: j,
			...O,
			executionAttestationIds: C.localExecutions.map((e) => e.attestationId),
			diaryTemporalPolicyByFile: Object.fromEntries(C.files.map((e) => [String(e.id), Object.fromEntries(C.diaryEntries.filter((t) => t.fileId === e.id).map((e) => [e.analysisDate, e.importMappingProvenance?.diaryTemporalPolicy ?? null]))]))
		},
		entryStreams: Object.assign({}, ...E.map((e) => e.streams)),
		scratchId: r,
		...a ? { signal: a } : {},
		...v.deflate ? { deflate: v.deflate } : {},
		...v.hash ? { hash: v.hash } : {},
		...s.progress ? { progress: s.progress } : {}
	});
	return {
		...D,
		...Object.assign({}, ...E.map((e) => e.receipt())),
		degradations: $,
		ggirCorrected: wo(O),
		hasData: I.sleepRows.length > 0 || I.nonwearRows.length > 0 || g.length > 0 || D.entries.some((e) => B.some((t) => t.name === e.name)) || Object.keys(R).length > 0,
		rowCount: I.sleepRows.length + I.nonwearRows.length + I.summaryRows.length + g.length,
		dayCount: (/* @__PURE__ */ new Set([
			...I.sleepRows.map((e) => e.studyDate),
			...I.nonwearRows.map((e) => e.studyDate),
			...g.map((e) => e.analysisDate)
		])).size,
		fileCount: l.files.length
	};
}
async function $o(e, t, n) {
	try {
		return await n();
	} catch (r) {
		if (r instanceof DOMException && "AbortError" === r.name) throw r;
		throw new tr(e, t, r);
	}
}
function Oo(e, t = /* @__PURE__ */ new Set()) {
	if (e instanceof ArrayBuffer) t.add(e);
	else if (ArrayBuffer.isView(e)) t.add(e.buffer);
	else if (e && "object" == typeof e) for (const n of Object.values(e)) Oo(n, t);
	return [...t];
}
function jo(e) {
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
				const e = new Worker(new URL("/sleep-scoring-wasm/assets/local-export-shard-worker-Bn9FW-T0.js", "" + import.meta.url), { type: "module" });
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
					const n = Ua.get(e);
					if (!n) throw new Ya("Export requires a captured input snapshot");
					const r = new Set(ko.flatMap((e) => Object.keys(Va[e])));
					return Object.fromEntries([...r].map((e) => [e, (n[e] ?? []).filter((n) => "studySettings" === e || t.includes("files" === e ? n.id : n.fileId)).map(Ka)]));
				}(e, t), s = await r.group(t, M(i, Oo(i)), n);
				if ("failure" in s) throw tr.fromWire(s.failure);
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
new Set(Vs.filter((e) => e.streamed).map((e) => e.entry)), y({ async build(e, t, n, r) {
	const i = new g(e), s = jo(Math.max(1, Math.min(8, (navigator.hardwareConcurrency || 2) - 2))), a = function() {
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
		return o = await (await (await (await (await navigator.storage.getDirectory()).getDirectoryHandle(Qn, { create: !0 })).getDirectoryHandle(n, { create: !0 })).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await i.open(), await No(i, t, n, {
			...r ? { progress: r } : {},
			binaryStore: o,
			groups: {
				...s.runner,
				hash: a.hash
			}
		});
	} catch (l) {
		if (l instanceof tr) return { failure: l.wire };
		throw l;
	} finally {
		s.terminate(), a.terminate(), o?.close(), i.close();
	}
} });
export { En as A, Hn as C, An as D, Bn as E, Kt as F, Cn as M, Rn as N, In as O, qt as P, Un as S, Ln as T, Qi as _, _s as a, ni as b, vs as c, ps as d, gs as f, Xi as g, ds as h, eo as i, xn as j, Nn as k, ks as l, us as m, Xa as n, ws as o, ms as p, no as r, bs as s, Va as t, ts as u, Zi as v, qn as w, Kn as x, zr as y };
