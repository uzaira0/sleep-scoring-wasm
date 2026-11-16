import { An as e, In as t, Jt as n, Nn as r, Rt as i, Xt as s, Yt as a, _ as o, a as l, an as c, c as u, f as d, k as p, kt as m, o as g, qt as f, s as h, u as _, wt as w, x as v } from "./schema-BGRflpdS.js";
import { a as y, c as b, n as k, r as x, s as M } from "./workers-B1E_CQH7.js";
import { D as S, W as T, at as I, c as R, it as A, j as E, l as C, nt as N, ot as $, t as O } from "./workspace-db-ZwhOL3AY.js";
import { c as j, l as B, n as D, s as P } from "./content-hash-D4_ZE65l.js";
import { n as L, o as F, r as W, v as z } from "./background-jobs-BXSYSixL.js";
import { n as G, o as V, r as U } from "./raw-pass-pool-BioIlrK-.js";
import { C as H, D as q, E as K, S as J, T as Y, a as Z, b as X, u as Q, w as ee, x as te, y as ne } from "./epoch-utils-Cjws3TDy.js";
import { a as re } from "./project-revision-CwL8VPmR.js";
import { $t as ie, F as se, Ht as ae, Kt as oe, N as le, P as ce, an as ue, en as de, k as pe, on as me, pt as ge, q as fe, qt as he, x as _e } from "./store-D5LPiRds.js";
import { R as we, Z as ve, d as ye, f as be, p as ke, q as xe, u as Me, y as Se } from "./night-session-registry-DhpX55ay.js";
import { $ as Te, C as Ie, N as Re, P as Ae, Z as Ee, m as Ce, o as Ne, r as $e, tt as Oe } from "./per-source-defaults-D5O6G9kE.js";
import { E as je, F as Be, N as De, c as Pe } from "./local-nonwear-unified-BwC-PW0G.js";
import { r as Le } from "./physical-activity-cutpoint-presets-BOMh7B4z.js";
import { h as Fe, m as We, v as ze } from "./diary-local-import-contract-BFl05J8E.js";
import { _ as Ge, a as Ve, d as Ue, i as He, m as qe, o as Ke, p as Je, t as Ye, u as Ze, y as Xe } from "./ggir-results-import-kY4EWIDH.js";
import { n as Qe, r as et, t as tt } from "./ggir-results-types-BFGvoGkk.js";
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
}, Tt = function(e, t, n) {
	n <<= 7 & t;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8;
}, It = function(e, t, n) {
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
	Tt(t, u++, n), ++i[256];
	for (var d = Rt(i, 15), p = d.t, m = d.l, g = Rt(s, 15), f = g.t, h = g.l, _ = Et(p), w = _.c, v = _.n, y = Et(f), b = y.c, k = y.n, x = new rt(19), M = 0; M < w.length; ++M) ++x[31 & w[M]];
	for (M = 0; M < b.length; ++M) ++x[31 & b[M]];
	for (var S = Rt(x, 7), T = S.t, I = S.l, R = 19; R > 4 && !T[ot[R - 1]]; --R);
	var A, E, C, N, $ = c + 5 << 3, O = Ct(i, wt) + Ct(s, vt) + a, j = Ct(i, p) + Ct(s, f) + a + 14 + 3 * R + Ct(x, T) + 2 * x[16] + 3 * x[17] + 7 * x[18];
	if (l >= 0 && $ <= O && $ <= j) return Nt(t, u, e.subarray(l, l + c));
	if (Tt(t, u, 1 + (j < O)), u += 2, j < O) {
		A = _t(p, m, 0), E = p, C = _t(f, h, 0), N = f;
		var B = _t(T, I, 0);
		for (Tt(t, u, v - 257), Tt(t, u + 5, k - 1), Tt(t, u + 10, R - 4), u += 14, M = 0; M < R; ++M) Tt(t, u + 3 * M, T[ot[M]]);
		u += 3 * R;
		for (var D = [w, b], P = 0; P < 2; ++P) {
			var L = D[P];
			for (M = 0; M < L.length; ++M) {
				var F = 31 & L[M];
				Tt(t, u, B[F]), u += T[F], F > 15 && (Tt(t, u, L[M] >> 5 & 127), u += L[M] >> 12);
			}
		}
	} else A = yt, E = wt, C = bt, N = vt;
	for (M = 0; M < o; ++M) {
		var W = r[M];
		if (W > 255) {
			It(t, u, A[257 + (F = W >> 18 & 31)]), u += E[F + 257], F > 7 && (Tt(t, u, W >> 23 & 31), u += st[F]);
			var z = 31 & W;
			It(t, u, C[z]), u += N[z], z > 3 && (It(t, u, W >> 5 & 8191), u += at[z]);
		} else It(t, u, A[W]), u += E[W];
	}
	return It(t, u, A[256]), u + E[256];
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
					}, y = new it(25e3), b = new rt(288), k = new rt(32), x = 0, M = 0, S = s.i || 0, T = 0, I = s.w || 0, R = 0; S + 2 < a; ++S) {
						var A = v(S), E = 32767 & S, C = h[A];
						if (f[E] = C, h[A] = E, I <= S) {
							var N = a - S;
							if ((x > 7e3 || T > 24576) && (N > 423 || !c)) {
								u = $t(e, l, 0, y, b, k, M, T, R, S - R, u), T = x = M = 0, R = S;
								for (var $ = 0; $ < 286; ++$) b[$] = 0;
								for ($ = 0; $ < 30; ++$) k[$] = 0;
							}
							var O = 2, j = 0, B = m, D = E - C & 32767;
							if (N > 2 && A == v(S - D)) for (var P = Math.min(p, N) - 1, L = Math.min(32767, S), F = Math.min(258, N); D <= L && --B && E != C;) {
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
								y[T++] = 268435456 | dt[O] << 18 | mt[j];
								var H = 31 & dt[O], q = 31 & mt[j];
								M += st[H] + at[q], ++b[257 + H], ++k[q], I = S + O, ++x;
							} else y[T++] = e[S], ++b[e[S]];
						}
					}
					for (S = Math.max(S, I); S < a; ++S) y[T++] = e[S], ++b[e[S]];
					u = $t(e, l, c, y, b, k, M, T, R, S - R, u), c || (s.r = 7 & u | l[u / 8 | 0] << 3, u -= 7, s.h = h, s.p = f, s.i = S, s.w = I);
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
} catch (Co) {}
function Wt(e, t) {
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
var zt = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var r = e[n].length;
		r > 65535 && St(9), t += r + 4;
	}
	return t;
}, Gt = function(e, t, n, r, i, s, a, o) {
	var l = r.length, c = n.extra, u = o && o.length, d = zt(c);
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
			var n = Wt(e.filename), r = n.length, i = e.comment, s = i && Wt(i), a = r != e.filename.length || s && i.length != s.length, o = r + zt(e.extra) + 30;
			r > 65535 && this.ondata(St(11, 0, 1), null, !1);
			var l = new nt(o);
			Gt(l, 0, e, n, a, -1);
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
		for (var e = 0, t = 0, n = 0, r = 0, i = this.u; r < i.length; r++) n += 46 + (m = i[r]).f.length + zt(m.extra) + (m.o ? m.o.length : 0);
		for (var s, a, o, l, c, u = new nt(n + 22), d = 0, p = this.u; d < p.length; d++) {
			var m = p[d];
			Gt(u, e, m, m.f, m.u, -m.c - 2, t, m.o), e += 46 + m.f.length + zt(m.extra) + (m.o ? m.o.length : 0), t += m.b;
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
	const l = Q(e, t);
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
function Tn(e, t) {
	return (t ? Ie[t]?.[0] : void 0) || (e ? Sn[e] ?? null : null);
}
async function In(e, t, n = x()) {
	const r = e.nonwearBands?.[xn(t)];
	if (null === r) return null;
	if (r) {
		const t = "counts" === r.grid ? e.timestamps : e.ggirTimestamps, [i] = r.detectors;
		if (t && i && t.length === r.mask.length) return {
			detector: i,
			detectors: r.detectors,
			...e.nonwearSourceLabels ? { label: r.detectors.map((t) => e.nonwearSourceLabels?.[t] ?? De(t)).join(" + ") } : {},
			mask: r.mask,
			...r.weight ? { weight: r.weight } : {},
			grid: t,
			epochSeconds: await ge(t, 60, n)
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
	const o = await ge(s, 60, n), l = [...i, ...await Rn(e, t, {
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
		...e.nonwearSourceLabels ? { label: l.map(({ detector: t }) => e.nonwearSourceLabels?.[t] ?? De(t)).join(" + ") } : {},
		mask: c.any,
		weight: c.weight,
		grid: s,
		epochSeconds: o
	};
}
async function Rn(e, t, { grid: n, epochSeconds: r }, i) {
	const s = e.deviceNonwearSource, a = "gt3x_capsense" === s ? E.gt3x_capsense : "detach_nonwear" === s ? E.detach_nonwear : null;
	if (null === a || !(t ?? []).includes(a)) return [];
	const o = (e.sensorNonwearPeriods ?? []).map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	}));
	return [{
		detector: a,
		mask: await Be(o, n, r, i)
	}];
}
function An(e, t) {
	return t ? e : e.filter((e) => e !== E.choi_2011 && e !== E.choi_2012);
}
function En(e) {
	return e === E.gt3x_capsense || e === E.detach_nonwear;
}
async function Cn(e, t) {
	return ue("ggir-saved-nonwear-label", j(e), async () => {
		const n = await (t ?? L()).ggirNonwearApproach(e).catch((e) => {
			if (e instanceof Error && "AbortError" === e.name) throw e;
			return null;
		});
		return n ? `GGIR nonwear (van Hees ${n})` : Ee;
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
	if (null === i) return Oe(e) ? {
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
const Wn = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), zn = [
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
var Gn = zn.map(() => Wn);
Object.fromEntries(zn.map(([e], t) => [e, Gn[t]]));
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
Object.fromEntries(Object.values(E).map((e) => [e, e === E.ggir_saved ? Ee : De(e)]));
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
	for (const [r, i] of Object.entries(Pe(e, e.nonwearChoiAxis ?? je()))) i && (n[t[r] ?? r] = new Uint8Array(i));
	return n;
}
async function Yn(e, t, n, r = {}) {
	const { signal: i, includeNonwearMasks: s = !1 } = r, a = e.get(t), o = kn(a, n), l = s && a ? Jn(a) : {}, c = e.get(r.nextDate ?? await Z(t, void 0, L(i))), u = o.timestamps[o.timestamps.length - 1], d = c ? kn(c, n) : null, p = d?.timestamps[0], m = void 0 !== c && null !== d && void 0 !== u && void 0 !== p && p > u, g = o.scoresStale ?? d?.scoresStale ?? null;
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
		await re(n, [n.markers], () => Se(e.id, {
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
	for (const a of [e.date, await Z(e.date, void 0, L(r))]) {
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
], pr = (new Set(dr.slice(16).map(([e]) => e)), "actiware_intervals_export.csv"), mr = "actiware_sleep_wake_export.csv", gr = J.invalid_night_row.markerTypeCell, fr = new Set(dr.map(([, e]) => e));
function hr(e, t) {
	const n = e(te["start" === t ? "interval_start_date" : "interval_end_date"].header), r = e(te["start" === t ? "interval_start_time" : "interval_end_time"].header);
	return n && r ? `${n}T${r}` : "";
}
const _r = {
	metricColumn: (e) => fr.has(e),
	invalidNightRow: (e) => e(te.interval_kind.header) === gr,
	reasonFor({ column: e, value: t, producerReason: n, invalidNightRow: r, allRows: i, missing: s }) {
		if (r) return "invalid_night";
		const a = t(te.interval_kind.header).toLowerCase(), o = hr(t, "start");
		if ("daily" === a && o && o === hr(t, "end")) return "zero_interval_rows";
		if ([
			te.actiware_onset_latency.header,
			te.actiware_efficiency.header,
			te.actiware_waso.header
		].includes(e)) {
			if ("sleep" !== a) return "not_applicable_to_row";
			if (s(t(te.actiware_duration.header))) return null;
			const e = hr(t, "start"), n = hr(t, "end");
			if (!e || !n) return null;
			let r = !1;
			for (const s of i) if (s.get(te.filename.header) === t(te.filename.header) && "rest" === s.get(te.interval_kind.header) && hr((e) => s.get(e) ?? "", "start") <= e && n <= hr((e) => s.get(e) ?? "", "end")) {
				r = !0;
				break;
			}
			return r ? null : "no_eligible_rest";
		}
		if (s(t(te.actiware_duration.header))) return null;
		if (e === te.actiware_off_wrist.header || e === te.actiware_off_wrist_percent.header) return e === te.actiware_off_wrist_percent.header && "0.00" === t(te.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === n ? n : null;
		if (e === te.actiware_avg_ac_per_min.header) return 100 === Number(t(te.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			te.actiware_invalid_sw_percent.header,
			te.actiware_wake_percent.header,
			te.actiware_sleep_percent.header
		].includes(e)) {
			if ("0.00" === t(te.actiware_duration.header)) return "zero_interval_rows";
			const n = !s(t(te.actiware_wake_time.header)) && !s(t(te.actiware_sleep_time.header)) && 0 === Number(t(te.actiware_wake_time.header)) && 0 === Number(t(te.actiware_sleep_time.header));
			return e === te.actiware_invalid_sw_percent.header || 100 !== Number(t(te.actiware_invalid_sw_percent.header)) && !n ? null : "no_scored_epochs";
		}
		const l = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(e);
		if (l) {
			const r = l[1];
			return "0.00" === t(te.actiware_duration.header) ? "zero_interval_rows" : s(t("%Invalid " + r)) ? "source_reported_missing" === n ? n : null : e.startsWith("TALT ") && !s(t("Exposure " + r)) ? "threshold_unconfigured" : 100 === Number(t("%Invalid " + r)) ? "no_valid_epochs" : null;
		}
		return null;
	}
}, wr = {
	metricColumn: (e) => e === te.actiware_sleep_wake.header || e === te.actiware_wake_threshold.header,
	reasonFor: ({ column: e, producerReason: t }) => e === te.actiware_sleep_wake.header ? "no_valid_epochs" === t ? t : null : e === te.actiware_wake_threshold.header && "not_computed_for_export" === t ? t : null
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
]), Mr = J.invalid_night_row.markerTypeCell, Sr = /* @__PURE__ */ new Set([
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
]), Tr = /* @__PURE__ */ new Set([
	te.ggir_sleep_duration_in_spt.header,
	te.ggir_waso.header,
	te.ggir_number_of_awakenings.header,
	te.ggir_sleeplatency.header,
	te.ggir_sleepefficiency.header
]), Ir = /* @__PURE__ */ new Set([
	...Tr,
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
]), Rr = /* @__PURE__ */ new Set([
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
]), Cr = new Set(Object.values(te).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), Nr = new Set(Object.values(te).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), $r = new Set(Object.values(Y).map((e) => e.reviewSource)), Or = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim()), jr = Or, Br = "refusal_detail_missing_reason";
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
	const o = yr.get(e), l = i(te.marker_type.header) === Mr || (o?.invalidNightRow?.(i) ?? !1);
	if (!function(e, t) {
		const n = yr.get(e);
		return n ? n.metricColumn(t) : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			te.ggir_id.header,
			te.ggir_filename.header,
			te.ggir_calendar_date.header,
			te.ggir_weekday.header,
			te.ggir_sleeplog_id.header,
			te.ggir_guider_corrected.header,
			te.ggir_cleaningcode.header
		].includes(t) : Cr.has(t);
	}(e, t)) return a || (l ? "invalid_night" : "Manual Nonwear" === i(te.marker_type.header) ? "manual_nonwear_period" : null);
	if (o) return o.reasonFor({
		column: t,
		value: i,
		producerReason: a,
		invalidNightRow: l,
		allRows: r,
		missing: jr
	});
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return Sr.has(t) ? "not_computed_for_export" === a ? a : null : Tr.has(t) ? "no_scored_epochs" === a || "not_applicable_to_row" === a || "scores_from_another_config" === a ? a : null : a;
	if ("sleep_export_wide.csv" === e) return a;
	if ("summary_export.csv" === e && t === te.sleep_regularity_index.header) return a && [
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
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === i(te.marker_type.header) ? "manual_nonwear_period" : null : "true" === i(te.is_invalid_night.header).toLowerCase() && i(te.marker_type.header) === Mr ? "invalid_night" : t === te.total_nap_minutes.header && "0" === i(te.nap_count.header) ? "not_applicable_to_row" : [
		te.l5_hour.header,
		te.m10_hour.header,
		te.sleep_midpoint_hour.header,
		te.valid_wear_minutes.header
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
function Wr(e, t) {
	let n = !1, r = 0;
	for (let i = 0; i < e.length; i += 1) if ("\"" === e[i]) n && "\"" === e[i + 1] ? i += 1 : n = !n;
	else if ("," === e[i] && !n && ++r === t) return e.slice(0, i);
	return e;
}
function* zr(e, t, r = !0, i) {
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
		csv: [Wr(d.text, g), ...p.map((e) => Wr(e.text, g))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: x,
		withoutReason: M
	};
}
const Gr = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], Vr = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : i(String(e)), Ur = (ee.part4_night_review, ee.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function Hr(e, t, n = "") {
	return ee[e].replace("{report}", n.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${Y[t].filenameSuffix}.csv`);
}
const qr = Object.keys(Y).map((e) => Hr("person_summary_review", e)), Kr = (e) => qr.some((t) => e.endsWith(t));
function Jr(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return a(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? a(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function Yr(e, t) {
	const n = new Map(qe(e).map((e) => [e.night, e.nightDate]));
	return (e, r, i = !0) => {
		const s = e.columns.indexOf("nights" === t ? te.ggir_night.header : "night_number"), a = Number(e.values[s]?.[r]), o = n.get(a);
		if (i && o) return o;
		const l = e.values[e.columns.indexOf(te.ggir_calendar_date.header)]?.[r];
		return Jr(l);
	};
}
async function Zr(e, t, n, r) {
	const s = "nights" === t ? te.ggir_night.header : "window_number", a = L(n), o = await Promise.all(e.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await He(e.imported, e.edits, t.night, n)])))), l = (await Promise.all(e.map(async (e, n) => {
		const r = e.current ?? e.imported, i = (e) => "nights" === t ? e.nights : e.days, s = "nights" === t ? r.nightRecomputed : r.dayRecomputed, l = "nights" === t ? e.imported.nightChecks : e.imported.dayChecks, c = o[n].filter((e) => null != e[1]), u = Yr(e.imported, t), d = new Set(e.edits.map((e) => e.night)), p = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, m = /* @__PURE__ */ new Set();
		if ("days" === t && p) {
			const t = await Promise.all(qe(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), r = t.nightDate, i = n.onset < "12:00:00" ? await Z(r, void 0, a) : r, s = n.wake <= n.onset ? await Z(i, void 0, a) : i;
				return [Math.min(t.onsetMs, Date.parse(`${i}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${s}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: r.days.rows }, async (e, n) => {
				const i = Number(r.days.values[r.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(i)) return void m.add(n);
				const s = u(r.days, n, !1), o = r.days.values[r.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof o ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(o) : null;
				if (!s || !l) return;
				const c = Date.parse(`${s}T${l[1]}Z`), p = l[2] < l[1] ? await Z(s, void 0, a) : s, g = Date.parse(`${p}T${l[2]}Z`);
				t.some(([e, t]) => c <= t && g >= e) && m.add(n);
			}));
		}
		return {
			source: Y[Ur(e)].reviewSource,
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
	const c = r ? r.filter((e) => !e.endsWith("_missing_reason") && !Gr.includes(e)) : [];
	for (const i of r ? [] : l) for (const e of i.table.columns) e.endsWith("_missing_reason") || c.includes(e) || c.push(e);
	const u = new Set("nights" === t ? ne.ggir_review_night_extension.map((e) => te[e].header) : []), d = r ? c.filter((e) => r.includes(e + "_missing_reason")) : c.filter((e) => u.has(e) || l.some((e) => e.editRecomputeUnavailable || e.source === Y.corrected.reviewSource)), p = [[
		...c.map(i),
		...Gr,
		...d.map((e) => i(e + "_missing_reason")),
		...Gr.map((e) => e + "_missing_reason")
	].join(",")], m = (e, t) => {
		const n = e.columns.indexOf(s);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: g, ggir: f, recomputed: h, provenance: _, checks: w, scoredDates: v, invalidDates: y, dateOf: b, editRecomputeUnavailable: k, editedNights: x, editedDayRows: M, savedNights: S, source: T } of l) {
		const e = S.columns.filter((e) => !Ir.has(e)), n = e.filter((e) => {
			const t = S.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return S.values[t].some((e, t) => {
				const r = Number(S.values[S.columns.indexOf(te.ggir_night.header)]?.[t]), i = n.has(r) && !Object.is(n.get(r), e);
				return n.set(r, e), i;
			});
		}), r = /* @__PURE__ */ new Set(), s = (e) => Array.from({ length: f.rows }, (e, t) => t).find((t) => !r.has(t) && m(f, t) === m(g, e) && n.every((n) => Object.is(f.values[f.columns.indexOf(n)]?.[t] ?? null, g.values[g.columns.indexOf(n)]?.[e] ?? null))), a = new Set(c.filter((n) => "nights" === t ? Ir.has(n) : !Rr.has(n) && !e.includes(n))), o = (n, r, s, o) => {
			const l = w.get(m(n, r));
			return [
				...c.map((i) => {
					if ("invalid" === s && ("nights" === t ? Ir.has(i) : /sleep|spt|waso|wake|onset|guider/i.test(i) && !e.includes(i))) return "";
					const a = n.columns.indexOf(i);
					return a < 0 ? "" : Vr(n.values[a]?.[r]);
				}),
				s,
				l?.status ?? "",
				i((l?.reasons ?? []).join(";")),
				i((l?.diffs ?? []).map((e) => e.column).join(";")),
				i(o),
				...d.map((e) => "invalid" !== s || u.has(e) && e !== te.ggir_nonwear_perc_spt.header ? k && s === T && a.has(e) && ("days" === t ? M.has(r) : x.has(m(n, r))) ? kr : u.has(e) ? null != Qe(n, e, r) ? "" : Vr(tt(n, e + "_missing_reason", r) ?? "source_reported_missing") : s === T ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
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
				null != n && p.push(o(f, n, T, "")), p.push(o(g, t, "invalid", ""));
				continue;
			}
			if (!h[t]) {
				p.push(o(g, t, T, ""));
				continue;
			}
			const i = m(g, t);
			null != n && p.push(o(f, n, T, "")), p.push(o(g, t, "recomputed", _(i)));
		}
		for (let t = 0; t < f.rows; t += 1) {
			if (r.has(t)) continue;
			const e = b(f, t);
			(!v || e && v.has(e)) && (p.push(o(f, t, T, "")), e && y?.has(e) && p.push(o(f, t, "invalid", "")));
		}
	}
	return p.length > 1 ? `${p.join("\n")}\n` : null;
}
function Xr(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const r of e) for (const [e, t] of Object.entries(r.part2Reports ?? {})) {
		const i = Hr("part2_report", Ur(r), e);
		n.set(i, [...n.get(i) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const r = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], s = [r.map(i).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) s.push(r.map((n) => Vr(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, s.join("\n") + "\n"];
	}));
}
function Qr(e, t) {
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
const ei = (e, t) => qe(e).filter((e) => t?.has(e.nightDate));
async function ti(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: kr,
		detail: ""
	};
	const r = e.current ?? e.imported;
	if (void 0 === r.tailExpansion) return {
		reason: "not_computed_for_export",
		detail: "the saved GGIR review predates the core's tail expansion flag; import the folder again"
	};
	const i = L(n);
	try {
		const { ggirVersion: n } = await i.ggirConfigValues(e.configCsv), { profile: s, reports: a } = await i.ggirPersonSummaries({
			ggir_version: n ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: r.nights,
			days: r.days,
			tail_expansion: r.tailExpansion,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(tt(r.nights, te.ggir_id.header, 0) ?? ""),
			invalid_nights: ei(e.imported, t).map((e) => e.night),
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
async function ni(e, t, n) {
	const r = /* @__PURE__ */ new Map(), s = await Promise.all(e.map(async (e) => {
		const n = ei(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (n) => {
			const r = await He(e.imported, e.edits, n.night, t);
			return null == r ? [] : [`night ${String(n.night)} ${r}`];
		}))).flat(), ...n].join("; ");
	}));
	for (const [i, o] of e.entries()) {
		const e = Ur(o), t = s[i], n = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [i, s] of Object.entries(o.personReports ?? {})) {
			if (0 === s.rows) continue;
			const a = Hr("person_summary_review", e, i), o = "reason" in n ? n : n.reports[i] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${i}`
			};
			r.set(a, [...r.get(a) ?? [], {
				table: s,
				source: Y[e].reviewSource,
				edit: t,
				recomputed: o
			}]);
		}
	}
	const a = /* @__PURE__ */ new Set([te.ggir_id.header, te.ggir_filename.header]);
	return Object.fromEntries([...r].map(([e, t]) => {
		const r = n?.get(e), s = [...new Set(t.flatMap(({ table: e }) => e.columns))], o = (r ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : Qr(e, t.columns), s)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !Gr.includes(e)), l = Gr.map((e) => e + "_missing_reason"), c = r?.filter((e) => e.endsWith("_missing_reason") && !l.includes(e)) ?? ["refusal_detail_missing_reason", ...o.map((e) => e + "_missing_reason")], u = [[
			...o,
			...Gr,
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
		], m = (e, t) => (n) => Vr(e.values[e.columns.indexOf(n)]?.[t]), g = (e) => c.map((t) => e.get(t) ?? ""), f = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
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
const ri = ne.ggir_part4_nightsummary_csv, ii = ri.map((e) => te[e].header), si = [
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
], ai = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function oi(e, t) {
	const n = te[e], r = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof r ? i(r) : lr(r, { integral: n.ggirIntegral ?? !1 });
}
function li(e, t = "legacy-recording", n, r) {
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
async function ci(e, t, n, r = {}) {
	const { signal: i } = r, s = e.participantId ?? e.filename, a = oe(n.values(), r.algorithm), o = [];
	for (const [c, v] of n) {
		if (!ki(c, r.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = kn(v, a);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await li(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, i), { sri: u, fractionValid: d } = l, p = "stale" === a.status ? "scores_from_another_config" : null, m = p ?? l.sriMissingReason, g = p ?? l.fractionValidMissingReason, f = [];
	for (const v of [...t.keys()].sort()) {
		const e = t.get(v);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === c.MAIN_SLEEP && null != t.onsetTimestamp && f.push({
			date: v,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const h = [[
		...ii,
		...si.map((e) => `${te[e].header}_missing_reason`),
		...ai.map((e) => `${te[e].header}_missing_reason`),
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
			...ri.map((e) => oi(e, p[e])),
			...si.map((e) => {
				const t = ri.indexOf(e);
				return t >= 0 && null == p[ri[t]] ? "not_computed_for_export" : "";
			}),
			...ai.map((e) => {
				const t = ri.indexOf(e);
				return t >= 0 && null == p[ri[t]] ? _[c].missingReason ?? "" : "";
			}),
			m ?? "",
			g ?? ""
		].join(","));
	}
	return h.join("\n") + "\n";
}
function ui(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const di = "actogram_report.html";
function pi(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function mi(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function gi(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: r } = pi(n), i = [e, r].filter(Boolean);
		t.set(n, 0 === i.length ? "part4_nightsummary.csv" : `part4_nightsummary_${i.join("_")}.csv`);
	}
	return t;
}
function fi(e) {
	const { algoKey: t, ruleKey: n } = pi(e), r = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
	return t || n ? n ? `${r(t)} / ${r(n)}` : r(t) : "Legacy / Unscoped";
}
function hi(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : ye(e);
}
function _i(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function wi(e, t) {
	const n = [], r = [], i = (e) => {
		for (const t of yi(e)) n.push(t), r.push(t.byteLength);
	};
	i(`<section class="pid-sec${0 === e ? " initial" : ""}" id="sec-${e}">`), i(`  <h2 class="pid-lbl">${ui(t.pid)}</h2>`);
	for (const [s, a] of t.charts.entries()) i(`  <div class="algo-block" data-algorithm-key="${ui(a.algoKey)}">`), i(`    <div class="algo-lbl">${ui(fi(a.algoKey))}</div>`), a.stale && i(`    <div class="algo-stale" role="status">${ui(a.stale)}</div>`), i(`    <div class="cwrap" id="c${e}_${s}">`), n.push(a.plot), r.push(...a.plotLengths), i(`      <button type="button" class="svg-btn" data-download-name="${ui(a.svgFilename)}">Download SVG</button>`), i(a.meta), i("    </div>"), i("  </div>");
	return i("</section>"), {
		blob: new Blob(n),
		lengths: r
	};
}
const vi = ["<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>", "</body>\n</html>"];
function* yi(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let r = Math.min(e.length, n + rr / 4);
		r < e.length && /[\uD800-\uDBFF]/u.test(e[r - 1]) && (r -= 1), yield t.encode(e.slice(n, r)), n = r;
	}
	yield t.encode("\n");
}
function bi(e) {
	return new TextEncoder().encode(e);
}
function ki(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function xi({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: r, layouts: i, only: s }) {
	const a = {}, o = (e) => void 0 === s || s === e;
	for (const [l, c] of r ?? gi([...e.keys()])) {
		const t = e.get(l);
		t?.length && o(c) && (a[c] = bi(`${t.join("\n")}\n`));
	}
	for (const l of Object.keys(Y)) {
		const e = t.filter((e) => Ur(e) === l);
		if (0 === e.length) continue;
		const r = (t, n) => void 0 === s || e.some((e) => Object.keys(n(e) ?? {}).some((e) => Hr(t, l, e) === s));
		if (r("part2_report", (e) => e.part2Reports)) for (const [t, n] of Object.entries(Xr(e, i))) o(t) && (a[t] = bi(n));
		for (const [t, s] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
			const r = Hr(s, l), c = o(r) ? await Zr(e, t, n, i?.get(r)) : null;
			c && (a[r] = bi(c));
		}
		if (r("person_summary_review", (e) => e.personReports)) for (const [t, s] of Object.entries(await ni(e, n, i))) o(t) && (a[t] = bi(s));
	}
	return a;
}
async function Mi(e, t, r) {
	r?.throwIfAborted();
	const i = function(e, t) {
		const { signal: n } = t, { username: r, dateRange: i, snapshot: s } = e, a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const d = Ta(s, wa.ggirReport, e.map((e) => e.id)), p = await Promise.all(e.map((e) => yo(s, e.id, r, n)));
				for (const [r, s] of e.entries()) {
					const e = d.files.find((e) => e.id === s.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: m, sets: g, markersByAlgo: f, invalidDates: h } = p[r], _ = Ea(d, e.id), w = new Map([...f].filter(([e]) => ki(e, i))), v = /* @__PURE__ */ new Map();
					for (const [t, n] of w) for (const e of n) {
						const n = mi(e);
						let r = v.get(n);
						r || (r = /* @__PURE__ */ new Map(), v.set(n, r)), r.set(t, e);
					}
					const y = /* @__PURE__ */ new Set();
					for (const [t, n] of w) for (const e of n) o(e) && y.add(t);
					if (m) for (const t of g) u.push({
						...t,
						...i ? { scoredDates: new Set(e.availableDates.filter((e) => ki(e, i))) } : {},
						invalidDates: h
					});
					const b = [...y].sort(), k = b[0], x = b[b.length - 1], M = [], S = [];
					for (const n of t.charts ? [..._.keys()].sort() : []) if (ki(n, i) && (null == k || null == x || n >= k && n <= x)) {
						const e = _.get(n), t = ae({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), r = t.timestamps, i = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < r.length; n++) M.push(r[n]), S.push(i[n]);
					}
					const T = [];
					for (const [t, r] of v) {
						const s = pi(t).algoKey, o = m ? "" : await ci(e, r, _, {
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
						const { algoKey: p, ruleKey: g } = pi(t), f = [p, g].filter(Boolean).join("_"), h = oe(_.values(), s || null);
						T.push([f, {
							p: u,
							n: d,
							..."stale" === h.status ? { stale: h.reason } : {}
						}]);
					}
					0 === v.size && T.push(["", {
						p: [],
						n: []
					}]), M.length > 0 && c.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: M,
						act: S,
						algos: T
					});
				}
			},
			entries: () => xi({
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
				const { algoKey: s, ruleKey: a } = pi(r), o = _i([s, a].filter(Boolean).join("_"), "unscoped"), l = `activity-${_i(e, "recording")}-${o}-${n}.svg`, c = function(e) {
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
				}), u = [...yi(`      <div class="plot-svg">${vn(c)}</div>`)];
				return {
					algoKey: r,
					...i.stale ? { stale: i.stale } : {},
					svgFilename: l,
					plot: new Blob(u),
					plotLengths: u.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${ui(hi(c.viewport.min))} → ${ui(hi(c.viewport.max))} · activity domain ${lr(c.valueDomain.min)}–${lr(c.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), a = new Set(gi([...i.csvLinesByAlgo.keys()]).values()), l = [];
	for (const [o, c] of Object.entries(await i.entries())) a.has(o) || l.push([o, f(n(new TextDecoder().decode(c)).records[0].text)]);
	return {
		charts: s,
		csvLinesByAlgo: i.csvLinesByAlgo,
		ggirReviews: i.ggirReviews,
		headers: l
	};
}
function Si(e) {
	return Date.parse(`${e}Z`) / 1e3;
}
function Ti(e, t) {
	return e.filter((e) => "rest" === e.kind || "sleep" === e.kind).map((e) => ({
		kind: e.kind,
		source: e.source,
		startTimestamp: Si(e.start),
		endTimestamp: Si(e.end),
		origin: t ? "generated" : "stored",
		...e.analysis ? { analysis: e.analysis } : {}
	})).filter((e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.endTimestamp > e.startTimestamp).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Ii(e) {
	return e.map(({ start: e, end: t, ...n }) => ({
		...n,
		startTimestamp: Si(e),
		endTimestamp: Si(t)
	}));
}
var Ri = class extends Error {
	name = "ActiwareSleepContainmentError";
}, Ai = class extends Error {
	name = "ActiwareRestEditError";
};
const Ei = (e, t) => Math.round((t - e.startTimestamp) / e.epochSeconds);
function Ci(e, t) {
	return e.startTimestamp + Ei(e, t) * e.epochSeconds;
}
const Ni = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " "), $i = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19);
function Oi(e) {
	return {
		kind: e.kind,
		source: e.source,
		start: $i(e.startTimestamp),
		end: $i(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	};
}
async function ji(e, { epochs: t, params: n, grid: r, core: i }) {
	if (0 === e.length) return [];
	const s = await i.actiwareIntervals(t, e.map(Oi), n);
	if (!s || s.generated) throw new Error("The Actiware core did not derive the sleep inside these rest intervals.");
	const a = Ti(s.intervals.filter((e) => "sleep" === e.kind), !0);
	return function(e, t) {
		const n = e.filter((e) => "rest" === e.kind);
		for (const r of e.filter((e) => "sleep" === e.kind)) {
			const e = Ei(t, r.startTimestamp), i = Ei(t, r.endTimestamp);
			if (!n.some((n) => e >= Ei(t, n.startTimestamp) && i <= Ei(t, n.endTimestamp))) throw new Ri(`Actiware sleep interval ${Ni(r.startTimestamp)}–${Ni(r.endTimestamp)} lies outside every rest interval.`);
		}
	}([...e, ...a], r), a;
}
function Bi(e, t) {
	return (e ?? []).filter((e) => "rest" === e.kind && null !== Re([e], t));
}
const Di = (e, t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp;
function Pi(e, t, n) {
	const r = Ae(e, t);
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
function Li(e, t, n, r) {
	return Pi(t, n, r).map((t) => {
		const n = e.find((e) => e.markerType === t.markerType && e.onsetTimestamp === t.onsetTimestamp && e.offsetTimestamp === t.offsetTimestamp);
		return n ? {
			...n,
			markerIndex: t.markerIndex
		} : t;
	});
}
async function Fi(e, t, n, r) {
	const i = Bi(e, t), s = "move" === n.kind ? function(e, { from: t, to: n }) {
		const r = e.find((e) => e.startTimestamp === t.startTimestamp && e.endTimestamp === t.endTimestamp);
		if (r) return r;
		const i = e.filter((e) => n.startTimestamp === t.startTimestamp && e.startTimestamp === n.startTimestamp || n.endTimestamp === t.endTimestamp && e.endTimestamp === n.endTimestamp);
		return 1 === i.length ? i[0] : void 0;
	}(i, n) : "remove" === n.kind ? i.find((e) => Di(n.holding, e)) : void 0;
	if ("add" !== n.kind && !s) throw new Ai("That rest interval changed since it was shown; reload the night.");
	const a = e.filter((e) => e !== s && !(s && "sleep" === e.kind && Di(e, s)));
	if ("remove" === n.kind) return a;
	const { grid: o } = r, l = s?.analysis, c = {
		kind: "rest",
		source: "event_marker",
		origin: "scorer",
		startTimestamp: Ci(o, n.to.startTimestamp),
		endTimestamp: Ci(o, n.to.endTimestamp),
		...l ? { analysis: l } : {}
	};
	if (c.endTimestamp <= c.startTimestamp) throw new Ai("A rest interval must end after it starts.");
	if (a.some((e) => "rest" === e.kind && e.startTimestamp < c.endTimestamp && e.endTimestamp > c.startTimestamp)) throw new Ai("A rest interval cannot overlap another rest interval.");
	if (null === Re([c], t)) throw new Ai("That rest interval would belong to another night.");
	const u = await ji([c], r);
	return [
		...a,
		c,
		...u
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Wi(e, t) {
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
async function zi(e, t, n) {
	if (0 === t.length) return [...e];
	const r = e.filter((e) => {
		return "rest" === e.kind && (n = e, t.some((e) => n.startTimestamp < e.endTimestamp && n.endTimestamp > e.startTimestamp));
		var n;
	}), i = e.filter((e) => !(r.includes(e) || "sleep" === e.kind && r.some((t) => Di(e, t)))), s = await ji(t, n);
	return [
		...i,
		...t,
		...s
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
const Gi = (e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind);
function Vi(e, t) {
	const n = [...t].flatMap((t) => {
		const n = Ae(e, t);
		return n?.sleep ? [n.sleep] : [];
	});
	return (e ?? []).filter((e) => "sleep" !== e.kind || !n.some((t) => t.startTimestamp === e.startTimestamp && t.endTimestamp === e.endTimestamp));
}
async function Ui(e, t, n, r) {
	if (!t) return null;
	const i = Vi(e, n).map(Oi).sort(Gi);
	if (0 === i.length) return [];
	const s = await r({
		...t,
		intervals: i
	});
	return s ? Ii(s).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)) : null;
}
async function Hi(e, t, n, r) {
	const i = await qi(e, t, n, r);
	return i ? Ji(e.file, i, t.keys()) : null;
}
async function qi({ file: e, statisticsInput: t }, n, r, i) {
	if (!t) return null;
	const s = e.actiwareIntervals ?? [], a = await qn(s.map((e) => e.startTimestamp), i);
	let o = [...s];
	for (const p of n.keys()) {
		const e = Bi(s, p), t = s.filter((t) => "sleep" === t.kind && Ki(s, t, e, () => a(t.startTimestamp) === p)), r = n.get(p), i = r?.sleepMarkers.filter((e) => (e.markerType === c.NAP || e.markerType === c.MAIN_SLEEP && !r.isInvalidNight) && null != e.onsetTimestamp && Number.isFinite(e.onsetTimestamp) && null != e.offsetTimestamp && Number.isFinite(e.offsetTimestamp) && e.offsetTimestamp > e.onsetTimestamp);
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
		intervals: o.map(Oi).sort(Gi)
	});
	if (!l) return null;
	const u = Ii(l), d = [...e.actiwareStatistics ?? [], ...u].map((e) => e.startTimestamp);
	return {
		calculated: u,
		rowDateOf: await qn(d, i),
		datedRows: new Set(d)
	};
}
const Ki = (e, t, n, r) => {
	const i = e.find((e) => "rest" === e.kind && t.startTimestamp >= e.startTimestamp && t.endTimestamp <= e.endTimestamp);
	return i ? n.includes(i) : r();
};
function Ji(e, t, n, r) {
	const i = e.actiwareIntervals ?? [], s = [...n].map((e) => ({
		date: e,
		rests: Bi(i, e)
	})), a = (e) => s.some(({ date: n, rests: s }) => "rest" === e.kind ? null !== Re([e], n) : "sleep" === e.kind && Ki(i, e, s, () => {
		return i = e.startTimestamp, (t.datedRows.has(i) || !r ? t.rowDateOf(i) : r(i)) === n;
		var i;
	}));
	return [...(e.actiwareStatistics ?? []).filter((e) => !a(e)), ...t.calculated.filter(a)].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Yi(e, t) {
	return (e.actiwareStatistics ?? []).map((e) => e.startTimestamp).filter((e) => !t.datedRows.has(e));
}
const Zi = J.invalid_night_row.markerTypeCell, Xi = q("actiware_interval_csv", "local"), Qi = [
	"interval_score_count",
	"interval_score_average",
	"interval_score_manual_count",
	"interval_score_manual_average",
	"interval_score_scheduled_count",
	"interval_score_scheduled_average",
	"interval_score_no_response_count",
	"interval_score_late_count",
	"interval_score_late_average"
].map((e) => te[e].header), es = (e, t) => Math.round(e) === Math.round(t);
async function ts(e, t, n, r) {
	const i = r ? Vi(e.actiwareIntervals, r.invalidDates) : (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind), s = i.filter((e) => "rest" === e.kind), a = i.filter((e) => "rest" === e.kind || "sleep" === e.kind && s.some((t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp)).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), o = e.actiwareStatistics ?? [], l = await qn([...a.map((e) => e.startTimestamp), ...o.map((e) => e.startTimestamp)], n), c = /* @__PURE__ */ new Set(), u = (t, n) => ({
		filename: e.filename,
		participantId: e.participantId ?? null,
		studyDate: l(t.startTimestamp),
		intervalNumber: null,
		interval: t,
		statistics: n
	}), d = a.map((e) => {
		const t = o.findIndex((t, n) => !c.has(n) && t.kind === e.kind && es(t.startTimestamp, e.startTimestamp) && es(t.endTimestamp, e.endTimestamp));
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
function ns(e, t, n) {
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
const rs = new Set(dr.map(([, e]) => e)), is = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
function ss(e) {
	if (!Number.isFinite(e)) return [
		"",
		"",
		""
	];
	const t = /* @__PURE__ */ new Date(1e3 * Math.round(e)), n = t.toISOString();
	return [
		n.slice(0, 10),
		is[t.getUTCDay()],
		n.slice(11, 19)
	];
}
const as = q("actiware_sleep_wake_csv", "local");
async function os(e, t, n, r) {
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
async function ls(e, t, n, r) {
	return t || n ? (await os(e, t, n, r)).reduce((e, t) => e + t.end - t.start, 0) : e.scores.byteLength;
}
function cs(e, t, n, r) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		be(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...r ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => i(e)).join(",");
}
const us = {
	sleepPeriodsOf: (e, t) => t.sleepMarkers,
	sleepRowMetrics: null
}, ds = { forFile: () => us }, ps = [
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
], fs = {
	nightRecord: { forFile(e, t) {
		const n = e.actiwareFileData.find((e) => e.fileId === t) ?? null, r = n?.actiwareIntervals ?? null;
		return r ? {
			sleepPeriodsOf: (e, t) => Pi(r, e, t.isInvalidNight),
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
				for (const [n, r, c, u] of ps) {
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
		} : ds.forFile(e, t);
	} },
	sourceAnalysis: {
		artifacts: [{
			entry: pr,
			rows: (e) => e.actiwareIntervalRows?.length ?? 0,
			fileRows: (e) => e.actiwareIntervalRows,
			detail: (e) => `${String(e)} Actiware intervals`,
			columns: Xi.length,
			chunkField: "actiwareIntervalRows",
			csv: (e) => function(e, t = !1) {
				const n = t ? dr.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], r = [[
					...Xi,
					...n.map(([, e]) => e + "_missing_reason"),
					...t ? [
						"Participant ID_missing_reason",
						"Origin_missing_reason",
						"Analysis_missing_reason",
						...Qi.map((e) => e + "_missing_reason")
					] : []
				].join(",")], s = (e) => te[e].header;
				for (const { filename: a, participantId: o, studyDate: l, intervalNumber: c, interval: u, statistics: d, invalidNight: p } of e) {
					const e = !0 === p && !Number.isFinite(u.startTimestamp), [m, g, f] = ss(u.startTimestamp), [h, _, w] = ss(u.endTimestamp), v = new Map([
						[s("filename"), a],
						[s("participant_id"), o ?? ""],
						[s("study_date"), l],
						[s("interval_kind"), p ? Zi : u.kind],
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
						...Qi.map((e) => [e, p ? "" : u.subjectiveScores?.[e] ?? ""])
					]), y = n.map(([e]) => {
						if (p) return "invalid_night";
						if (!d || null != d[e]) return "";
						if (e.startsWith("off_wrist")) return "source_reported_missing";
						const t = /_(white|red|green|blue)(?:_percent)?$/u.exec(e)?.[1];
						return t && null == d["invalid_" + t + "_percent"] ? "source_reported_missing" : "";
					}), b = Qi.map((e) => p ? "invalid_night" : u.subjectiveScores?.[e] ? "" : "source_no_subjective_scores");
					r.push([
						...Xi.map((e) => rs.has(e) ? v.get(e) ?? "" : i(v.get(e) ?? "")),
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
			columns: as.length,
			encode: (e) => e.actiwareSleepWakeCsv.bytes,
			streamed: !0
		}],
		async fileStats({ file: e, fileId: t, dateRange: n, scoredDates: r }, i, s) {
			const a = await i.actiwareFileData.get(t);
			return {
				actiwareIntervalRows: a ? (await ts({
					...e,
					...a
				}, n, s)).length : 0,
				actiwareSleepWakeRows: a?.actiwareSleepWake ? await ls(a.actiwareSleepWake, n, new Set(r), s) : 0,
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
					const e = a.actiwareFileData.find((e) => e.fileId === u.id), l = i.scoredMarkers(a, u.id, n), d = [...l].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort(), p = a.actiwareStatisticsInputs.find((e) => e.fileId === u.id), m = (e) => s.actiwareIntervalStatistics(e), g = Ne(u, o) === S.rest_intervals, f = g ? await Ui(e?.actiwareIntervals, p?.input, d, m) : await Hi({
						file: e ?? {},
						statisticsInput: p?.input
					}, l, m, s);
					r?.throwIfAborted();
					const h = await ts({
						...u,
						...e,
						actiwareStatistics: f ?? []
					}, t, s, g ? { invalidDates: d } : void 0), _ = new Set(l.keys()), w = new Set(d.filter((e) => !t || e >= t[0] && e <= t[1]));
					c.push(...ns(h.filter((e) => _.has(e.studyDate)), w, u));
				}
				return c;
			}(e, t, n), i = async function* ({ fileIds: e, dateRange: t, username: n, signal: r }, i, s) {
				r?.throwIfAborted();
				const a = i.inputs("actiwareSleepWake", e), o = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), l = o.map((e) => a.actiwareFileData.find((t) => t.fileId === e.id)), c = function(e, t = !1) {
					const n = [[
						...as,
						"Sleep/Wake_missing_reason",
						"Wake Threshold_missing_reason",
						...t ? ["Participant ID_missing_reason"] : []
					].join(",")];
					for (const r of e) n.push(cs(r, r.epochTimestamp, r.sleepWake, t));
					return `${n.join("\n")}\n`;
				}([], !0);
				let u = [], d = 0, p = 0;
				const m = () => {
					r?.throwIfAborted();
					const e = function(...e) {
						const t = zr(...e), n = [];
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
					const o = l[g]?.actiwareWakeThreshold, c = null != o && Number.isFinite(o) ? o : null, d = new Int8Array(e.scores), h = await os(e, t, new Set(i.scoredMarkers(a, f.id, n).keys()), s);
					r?.throwIfAborted();
					for (const { date: t, start: n, end: r } of h) {
						const i = {
							filename: f.filename,
							participantId: f.participantId ?? null,
							studyDate: t,
							sleepDetection: $e(e.params, "sleep_detection"),
							wakeThresholdSelection: $e(e.params, "wake_threshold_selection"),
							wakeThreshold: c,
							...null === c ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
						};
						for (let t = n; t < r; t += 1) {
							const n = d[t], r = cs(i, e.startTimestamp + t * e.epochSeconds, 0 === n || 1 === n ? n : null, !0);
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
}, hs = {
	sleep_periods: ds,
	rest_intervals: fs.nightRecord
}, _s = [fs.sourceAnalysis], ws = _s.flatMap((e) => e.artifacts), vs = fs.modules, ys = [
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
], bs = [
	"temperature",
	"lux",
	"redLight",
	"greenLight",
	"blueLight"
];
function ks(e) {
	return "string" == typeof e ? e : null;
}
function xs(e) {
	return "number" == typeof e ? e : null;
}
function Ms(e, t) {
	const n = function(e, t) {
		switch (e.formatter) {
			case "verbatim_string": return function(e) {
				return e ? i(e) : "";
			}(ks(t));
			case "display_label": {
				const n = ks(t);
				return n ? function(e) {
					return e ? i(e) : "";
				}(e.labelEnum ? K(e.labelEnum, n) : n) : "";
			}
			case "core_printed_text":
			case "date_iso": return function(e) {
				return e ?? "";
			}(ks(t));
			case "integer": return function(e) {
				return null == e ? "" : String(Math.trunc(e));
			}(xs(t));
			case "fixed2": return function(e) {
				return null == e ? "" : e.toFixed(2);
			}(xs(t));
			case "python_scalar_str": return function(e) {
				return null == e ? "" : String(e);
			}("boolean" == typeof t || "object" == typeof t ? null : t);
			case "python_float_repr": return function(e) {
				if (null == e) return "";
				if (!Number.isFinite(e)) return String(e);
				const t = String(e);
				return t.includes(".") || t.includes("e") ? t : `${t}.0`;
			}(xs(t));
			case "python_bool": return function(e) {
				return null == e ? "" : e ? "True" : "False";
			}("boolean" == typeof t ? t : null);
			case "clock_at_marker_step": return function(e) {
				return null == e?.timestamp ? "" : Me(e.timestamp, e.stepSeconds);
			}("object" == typeof t ? t : null);
			case "datetime_seconds": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${String(t.getUTCFullYear())}-${cr(t.getUTCMonth() + 1)}-${cr(t.getUTCDate())} ${cr(t.getUTCHours())}:${cr(t.getUTCMinutes())}:${cr(t.getUTCSeconds())}`;
			}(xs(t));
			case "ggir_value": return lr("object" == typeof t ? null : t, { integral: e.ggirIntegral ?? !1 });
		}
	}(e, t);
	return "" === n ? H[e.sentinel] : n;
}
function Ss(e, t) {
	if (!t) return "";
	const { labelEnum: n } = te[e];
	return n ? K(n, t) : t;
}
const Ts = J.invalid_night_row?.markerTypeCell ?? "", Is = J.nonwear_row?.markerTypeCell ?? "";
function Rs(e) {
	return ne[e].filter((e) => "server" !== te[e].plane);
}
function As(e) {
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
function Es(e) {
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
async function Cs(e, t, n, r, i, s, a) {
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
async function Ns(e, t, n, r) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const i = new Set(n.filter((t) => t.markerType === c.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return i.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : li(t.filter((e) => i.has(e.date)), e, t[0]?.epochLengthSeconds, r);
}
function $s(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const Os = [
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
], js = {
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
}, Bs = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => Ss("algorithm", e.algorithm),
	summary_detection_rule: (e) => Ss("detection_rule", e.detectionRule),
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
}, Ds = X;
function Ps(e) {
	return P(e);
}
function Ls(e) {
	return JSON.stringify(e, null, 2);
}
const Fs = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function Ws(e = Ds, t = !1) {
	return Ys("codebook_csv", e, Fs, void 0, t);
}
const zs = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], Gs = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function Vs(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== c.MAIN_SLEEP) continue;
		const e = zs.map((e) => Ks(e, n)).join("\0"), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return t;
}
function* Us(e, t = !1) {
	const n = Vs(e);
	let r = 0;
	const i = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > r && (r = t.length), t;
	}), s = zs.map((e) => te[e].header);
	for (let o = 1; o <= r; o++) for (const [e] of Gs) s.push(`night${String(o)}_${e}`);
	const a = s;
	yield t ? [...s, ...a.map((e) => e + "_missing_reason")].join(",") : s.join(",");
	for (const o of i) {
		const e = o[0], n = zs.map((t) => Ks(t, e)), i = zs.map((t) => qs[t]?.(e) ? "" : Js[t] ?? "");
		for (let t = 0; t < r; t++) {
			const e = o[t];
			for (const [t, r] of Gs) {
				const s = e ? Ks(r, e) : "";
				n.push(s), i.push(s ? "" : e ? "date" === t ? "" : e.derivedMissingReasons?.[r] ?? e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? i : []].join(",");
	}
}
function Hs(e, t) {
	return null == e ? null : {
		timestamp: e,
		stepSeconds: t.markerStepSeconds
	};
}
const qs = {
	filename: (e) => e.filename,
	file_id: (e) => e.fileId,
	participant_id: (e) => e.participantId,
	study_date: (e) => e.studyDate,
	period_index: (e) => e.periodIndex,
	marker_type: (e) => e.markerType,
	onset_time: (e) => Hs(e.onsetTimestamp, e),
	offset_time: (e) => Hs(e.offsetTimestamp, e),
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
	sleep_midpoint_time: (e) => Hs(e.sleepMidpointTimestamp, e),
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
function Ks(e, t) {
	return Ms(te[e], qs[e]?.(t) ?? null);
}
const Js = {
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
function Ys(e, t, n, r, i = !1) {
	const s = r && r.length > 0 ? new Set(r) : null, a = Rs(e).filter((e) => null == s || s.has(te[e].header)), o = i ? a.filter((e) => Js[e]) : [], l = [[...a.map((e) => te[e].header), ...o.map((e) => te[e].header + "_missing_reason")].join(",")];
	for (const c of t) l.push([...a.map((e) => Ms(te[e], n[e]?.(c) ?? null)), ...o.map((e) => {
		const t = n[e]?.(c);
		return null == t || "" === t ? Js[e] ?? "" : "";
	})].join(","));
	return l.join("\n");
}
function Zs(e, t, r = !1) {
	const i = Ys("sleep_csv", e, qs, t, r), s = t?.length ? new Set(t) : null, a = [
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
	].filter((t) => (!s || s.has(te[t].header)) && e.some((e) => [...a, ...o].includes(t) && null == qs[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || l.includes(t) && e.metricMissingReason));
	return 0 === c.length ? i : n(i).records.map((t, n) => {
		if (0 === n) return t.text + "," + c.map((e) => `${te[e].header}_missing_reason`).join(",");
		const r = e[n - 1];
		return t.text + "," + c.map((e) => r.markerType === Is ? "manual_nonwear_period" : r.markerType === Ts ? "invalid_night" : a.includes(e) ? null == qs[e]?.(r) ? "source_reported_missing" : "" : o.includes(e) ? null == qs[e]?.(r) ? "not_applicable_to_row" : "" : r.sensorMissingReasons?.[e] ?? r.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? r.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (l.includes(e) ? r.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
Rs("sleep_csv").map((e) => te[e].header);
const Xs = rr, Qs = new Uint8Array([3, 0]);
function ea(e, t) {
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
	return a[0] = i >> 3, a[s + 2] = 255, a[s + 3] = 255, n.push(a), me(n);
}
const ta = (() => {
	const e = /* @__PURE__ */ new Int32Array(256);
	for (let t = 0; t < 256; t += 1) {
		let n = t;
		for (let e = 0; e < 8; e += 1) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
		e[t] = n;
	}
	return e;
})();
function na(e) {
	let t = -1;
	for (const n of e) t = ta[255 & (t ^ n)] ^ t >>> 8;
	return ~t >>> 0;
}
function ra(e, t) {
	let n = 2147483648, r = 0, i = t;
	for (; !(e & n) || (r ^= i, e & n - 1);) n >>>= 1, i = 1 & i ? i >>> 1 ^ 3988292384 : i >>> 1;
	return r >>> 0;
}
const ia = (() => {
	const e = [1 << 30];
	for (let t = 1; t < 32; t += 1) e.push(ra(e[t - 1], e[t - 1]));
	return e;
})();
function sa() {
	const e = new D();
	return {
		hashChunk: (t) => {
			e.update(t);
		},
		hexDigest: () => Promise.resolve(B(e.finalize()))
	};
}
var aa = class extends Vt {
	flag = 3;
	constructor(e) {
		super(e), this.compression = 8;
	}
	process() {}
	emit(e) {
		this.ondata(null, e, !1);
	}
	finish(e, t) {
		this.crc = e, this.size = t, this.ondata(null, Qs, !0);
	}
};
async function oa(e) {
	const t = e.deflate ?? {
		lanes: 1,
		block: (e, t) => Promise.resolve(function(e, t) {
			return {
				bytes: ea(e, t),
				crc: na(e)
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
		const i = new aa(n), s = (e.hash ?? sa)();
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
				for (let i = n, s = 3; i; i = Math.floor(i / 2), s += 1) i % 2 && (r = ra(ia[31 & s], r));
				return (ra(r, e) ^ t) >>> 0;
			}(d, e.crc, u.shift()), i.emit(e.bytes), await _(k(), o + 1024);
		}, M = async () => {
			const e = m.subarray(0, f), n = e.slice(-32768);
			for (c.push(t.block(e, y)), u.push(e.byteLength), y = n, m = new Uint8Array(o), f = 0; c.length > l;) await x();
		};
		try {
			for await (const t of r) {
				b = t.byteLength;
				for (let n = 0; n < t.byteLength; n += Xs) {
					e.signal?.throwIfAborted();
					const r = t.subarray(n, n + Xs), i = s.hashChunk(r, e.signal);
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
		const t = [...To({
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
			const t = ws.find((e) => e.entry === i.name);
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
				for await (const e of i.batches?.() ?? la(i.chunks ?? [i.write()])) {
					if (e.bytes.byteLength > 4 * Xs) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
					const t = zr(e.text ?? new TextDecoder().decode(e.bytes), i.name, !0, {
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
						if (o += Lr([r.value], !1), m += 1, o.length >= Xs / 2) {
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
				contentHash: await Ps(t),
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
		return await y(ir, [new TextEncoder().encode(Ls(r))]), h.end(), await _(), e.signal?.throwIfAborted(), await c.close(), {
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
async function* la(e) {
	const t = new TextDecoder();
	let r, i = "";
	for await (const s of async function* () {
		for await (const t of e) for (let e = 0; e < t.byteLength; e += Xs) yield t.subarray(e, e + Xs);
		yield null;
	}()) {
		const e = null === s;
		i += e ? t.decode() : t.decode(s, { stream: !0 });
		const a = n(i, e);
		if (e && a.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const o = a.remainder ?? "";
		if (o.length > Xs || a.records.some((e) => e.text.length > Xs)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
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
const ca = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], ua = [
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
], da = [
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
], pa = [
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
], ma = ["fileId", ...l], ga = {
	files: [
		...ca,
		"ggirTimezone",
		"recording",
		"ggirClockSteps",
		"sourceType",
		"sourceProfileId",
		"navigationFacts"
	],
	markers: ua,
	activityDays: da,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: pa,
	actiwareFileData: [
		"fileId",
		"actiwareIntervals",
		"actiwareStatistics"
	]
}, fa = {
	files: [...ca, "ggirClockSteps"],
	markers: ua,
	activityDays: da,
	ggirResultsBundles: pa,
	ggirResultsBlobs: ma,
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
}, ha = {
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
		T
	]
}, _a = {
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
}, wa = {
	sleep: ga,
	nonwear: ga,
	summary: ga,
	wide: ga,
	circadian: {
		files: ca,
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
	ggirReport: fa,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: ua,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: [
			...ca,
			"sourceType",
			"sourceProfileId"
		],
		markers: ua,
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
		files: ca,
		markers: ua,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: ha,
	audit: _a,
	physicalActivity: {
		files: [
			...ca,
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
		markers: ua,
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
}, va = /* @__PURE__ */ new WeakMap(), ya = /* @__PURE__ */ new WeakMap();
function ba(e, t, n, r) {
	for (let i = 0; i < n.byteLength;) {
		const s = n.subarray(i, i + rr), a = e[t](s, { at: r + i });
		if (!Number.isInteger(a) || a <= 0 || a > s.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		i += a;
	}
}
function ka(e) {
	if (!e || "object" != typeof e) return e;
	const t = ya.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return ba(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(ka) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, ka(t)])) : structuredClone(e);
}
function xa(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(xa), Object.freeze(e)), e;
}
var Ma = class extends Error {};
function Sa(e, t, n) {
	const r = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new Ma(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (r(t), Reflect.get(e, t, n)),
		has: (e, t) => (r(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (r(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function Ta(e, t, n = []) {
	const r = va.get(e);
	if (!r) throw new Ma("Export requires a captured input snapshot");
	const i = Object.entries(wa).find(([, e]) => e === t)?.[0];
	if (!i) throw new Ma("Export producer has no registered input declaration");
	const s = {};
	for (const [a, o] of Object.entries(t)) {
		const e = r[a].filter((e) => !n.length || "studySettings" === a || n.includes("files" === a ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const r of o.filter((e) => e in t)) Object.defineProperty(n, r, {
				enumerable: !0,
				get: () => xa(ka(t[r]))
			});
			return Sa(n, o, `${i}: undeclared field ${a}.`);
		});
		Object.assign(s, { [a]: Object.freeze(e) });
	}
	return Sa(s, Object.keys(t), `${i}: undeclared table `);
}
function Ia(e, t, n) {
	const r = /* @__PURE__ */ new Map();
	for (const i of e.markers) {
		if (i.fileId !== t || i.username !== n) continue;
		const e = we(i), s = r.get(i.date) ?? [];
		s.push(e), r.set(i.date, s);
	}
	return r;
}
function Ra(e, t, n) {
	return new Map([...Ia(e, t, n)].sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => [e, fe(t)]));
}
function Aa(e, t, n) {
	return new Map([...Ia(e, t, n)].flatMap(([e, t]) => {
		const n = fe(t.filter(o));
		return n ? [[e, n]] : [];
	}));
}
function Ea(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function Ca(e) {
	return {
		inputs: (t, n) => Ta(e, wa[t], n),
		scoredMarkers: Aa
	};
}
const Na = q("event_marker_csv", "local");
function $a(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function Oa(e, t, n, r, i) {
	const s = [], a = Ta(n, wa.event, e), o = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		i?.throwIfAborted();
		const e = $a(l, Ea(a, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await qn(e, L(i)), c = new Set(Aa(a, l.id, r).keys());
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
const ja = (e) => e.slice(e.lastIndexOf("/") + 1), Ba = /* @__PURE__ */ new Map();
I.GGIR_CORRECTED_WARM;
const Da = (e) => `${e.name}:ggir-corrected-values`, Pa = () => "undefined" == typeof navigator ? void 0 : navigator.locks;
async function La(t, n, r, i) {
	const a = await async function(t, n, r, i) {
		if (s = (await se(t))?.extraSettings, !0 !== e("ggir_export_corrected_values", s?.ggir_export_corrected_values).value) return null;
		var s;
		const a = /* @__PURE__ */ new Map(), o = await ce(t, n.length ? { onlyFileIds: n } : void 0), l = new Map(o.map((e) => [e.id, e])), c = await t.ggirResultsBundles.where("fileId").anyOf([...l.keys()]).toArray(), d = await u(t, c.map((e) => e.fileId)), p = c.filter((e) => !e.ggirCorrections), m = [...new Set(p.map((e) => e.configCsv))], g = await Promise.all(m.map((e) => async function(e, t) {
			const n = Ba.get(t);
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
			return Ba.set(t, r), r;
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
		deviceMemoryGib: z()
	}), p = await V(l.map((e) => ({
		name: e.name,
		cost: e.size,
		memoryGib: G(e.size),
		run: async (n, a) => {
			if (i && await async function(e) {
				const t = await Pa()?.query(), n = (t) => t.name === Da(e);
				return (t?.pending?.some(n) ?? !1) || !1;
			}(t)) return { miss: e };
			try {
				const r = await h(t, e.fileId);
				if (!r) return {
					miss: e,
					notApplied: "the recording was deleted during the export"
				};
				const i = await async function(e, t) {
					if (!e.resultsCsv) return { notApplied: "imported before the app kept GGIR's results/ files; import the GGIR output folder again for its corrected values" };
					if (!e.ms4) return { notApplied: Ye };
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
							return e.startsWith("results/") && (R.test(t) || C.test(t)) ? [t] : [];
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
							const t = /^meta\/(ms\d)\.out\//u.exec(e)?.[1] ?? ja(e);
							g[t] = (g[t] ?? 0) + 1;
						}
						for (const e of s.corrections_not_applied) f.set(e.correction, e.reason);
					}
					const h = m.ms2 ?? e.ms2, _ = m.ms3 ?? e.ms3, w = m.ms5 ?? e.ms5, v = (e) => Object.fromEntries(d.filter(({ name: t }) => e.test(t)).map(({ name: e, table: t }) => [e, t])), y = v(R), b = v(C);
					return {
						values: {
							...h ? { ms2: h } : {},
							..._ ? { ms3: _ } : {},
							ms4: m.ms4,
							...w ? { ms5: w } : {},
							cleanedNightsCsv: u,
							part2Reports: Ge(y, p),
							personReports: Ge(b, p),
							imported: Xe(p)
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
					console.warn("[ggir-corrected-values] Corrected values could not be cached.", e);
				}), { miss: e };
			} catch (o) {
				return r.signal?.throwIfAborted(), a.primary || a.cancel(), {
					miss: e,
					notApplied: (o instanceof Error ? o.message : String(o)).replace(/^Error: /u, "")
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
const Fa = [
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
function Wa(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function za(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function Ga(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
Fa.join(","), Le.length;
var Va = t({
	GgirReviewChangedError: () => lo,
	editsFromMarkers: () => eo,
	getGgirMarkerInputs: () => to,
	ggirNightEdits: () => Qa,
	ggirNightRecords: () => Xa,
	hasGgirRecomputeFailure: () => Ja,
	mergeGgirSleepMarkers: () => Za,
	recomputeGgirResults: () => io,
	recoverPendingGgirRecomputes: () => oo,
	reviewGgirResultsForMarkers: () => uo,
	scheduleGgirRecompute: () => ro,
	settleGgirScorerReviews: () => ao
});
const Ua = new EventTarget(), Ha = /* @__PURE__ */ new WeakMap(), qa = 800, Ka = "Update GGIR review";
function Ja(e, t, n) {
	return A.getState().jobs[`${n.name}:${no(e, t)}`]?.status === $.FAILED;
}
function Ya(e, t, n, i, s) {
	if (s?.aborted || function(e) {
		return e instanceof Error && e.name === r.errnames.DatabaseClosed;
	}(i)) return;
	const a = no(e, t), o = `${n.name}:${a}`, l = A.getState();
	l.jobs[o]?.controller.signal.aborted || l.jobs[o]?.status === $.ELSEWHERE || (l.update(o, {
		id: o,
		key: a,
		workspaceId: n.name,
		kind: I.GGIR_RECOMPUTE,
		label: Ka,
		controller: l.jobs[o]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: $.FAILED
	}), n.isOpen() && O() === n && Ua.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function Za(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function Xa(e, t, n, r = [], i, s = L(i)) {
	const a = fe([...n.values()].flat(), !0), o = a?.algorithm ?? Ve(t), l = a?.detectionRule ?? null, u = /* @__PURE__ */ new Map();
	for (const [c, m] of n) {
		const e = fe(m, !0);
		e && u.set(c, [{
			...e,
			algorithm: o,
			detectionRule: l
		}]);
	}
	const d = Je(t), p = d.length ? await s.ggirLabelsToStoredMs(Float64Array.from(d.flatMap((e) => [e.onsetMs, e.wakeMs])), r) : [];
	for (const [m, g] of d.entries()) {
		const t = u.get(g.nightDate)?.[0], n = Te(g, t);
		"scored" !== n.kind && "invalid" !== n.kind ? u.set(g.nightDate, [{
			fileId: e,
			date: g.nightDate,
			username: ve,
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
			sleepMarkers: Za({
				markerType: c.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: p[2 * m] / 1e3,
				offsetTimestamp: p[2 * m + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : u.set(g.nightDate, t ? [t] : []);
	}
	return u;
}
async function Qa(e, t, n, r = [], i, s = L(i)) {
	const a = await Xa(e, t, n, r, i, s), o = new Map([...a].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : []));
	return {
		markersByAlgo: a,
		selected: o,
		edits: await eo(t, o, r, i, s)
	};
}
async function eo(e, t, n = [], r, i = L(r)) {
	const s = qe(e).flatMap((e) => {
		const n = Te(e, t.get(e.nightDate));
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
async function to(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [r, i] = await Promise.all([_e(e, t, n), pe(e, n)]), s = new Map([...r].flatMap(([e, t]) => {
			const n = fe(t, !0);
			return n ? [[e, n]] : [];
		})), a = i?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([a ?? [], [...s].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				Te(void 0, t)
			])]),
			markers: s,
			clockSteps: a,
			bundleRevision: i?.ggirBundleRevision
		};
	});
}
function no(e, t) {
	return `${I.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function ro(e, t, n, r) {
	if (!n.isOpen() || O() !== n || r?.aborted) return;
	let i = Ha.get(n);
	i || (i = /* @__PURE__ */ new Map(), Ha.set(n, i));
	const s = no(e, t);
	clearTimeout(i.get(s)), i.set(s, setTimeout(() => {
		i.delete(s), n.files.get(e).then((i) => {
			if (i?.ggirBundleRevision && n.isOpen() && O() === n && !r?.aborted) return io(e, t, n, r);
		}).catch((i) => {
			r?.aborted || i instanceof DOMException && "AbortError" === i.name || (Ya(e, t, n, i, r), n.isOpen() && O() === n && (console.error("[ggir-results] recompute failed."), de("error", "GGIR results recompute failed", ie(i))));
		});
	}, qa));
}
function io(e, t, n, r, i = !0) {
	const s = (a, o = r) => W({
		kind: I.GGIR_RECOMPUTE,
		key: no(e, t),
		label: Ka,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (r) => {
			r.signal.throwIfAborted();
			const o = await so(e, t, n, r.signal, i);
			return r.signal.throwIfAborted(), !1 !== o ? o : (a < 2 && s(a + 1, r.signal).catch((i) => Ya(e, t, n, i, r.signal)), null);
		}
	});
	return s(0);
}
async function so(e, t, n, r, i, s = { active: () => n.isOpen() && O() === n }) {
	if (r.throwIfAborted(), !s.active()) return null;
	const { markerInputs: a, markers: o, clockSteps: l, bundleRevision: c } = await to(e, t, n);
	if (!c) return null;
	const u = await n.ggirScorerReviews.get([e, t]);
	if (!s.active()) return null;
	if (r.throwIfAborted(), u?.markerInputs === a && u.bundleRevision === c && (d = u, void 0 === s.correctedKey || 0 === d.edits.length || d.corrected?.key === s.correctedKey)) return i && Ua.dispatchEvent(new CustomEvent("updated", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })), u.current ?? null;
	var d;
	const p = await n.ggirResultsBundles.get(e);
	if (!p) return null;
	const { edits: m } = await Qa(e, p.imported, new Map([...o].map(([e, t]) => [e, [t]])), l, r, s.api);
	if (!s.active()) return null;
	const g = co(u, c, m), f = void 0 !== s.correctedKey && m.length > 0 && !p.ggirCorrections && !(g && u.corrected?.key === s.correctedKey), h = m.length > 0 && (!g || f) ? _(p, await n.ggirResultsBlobs.get(e)) : p, w = g ? u.current : (await uo(h, o, l, m, r, void 0, s.api)).current;
	let v = g ? u.corrected : void 0;
	if (f) {
		const t = await n.ggirCorrectedValues.get(e);
		if (!t || t.key !== s.correctedKey) return null;
		const i = Ue(h, t).find((e) => "corrected" === e.set), a = i && (await uo(i.bundle, o, l, m, r, void 0, s.api)).current;
		v = {
			key: t.key,
			...a ? { current: a } : {}
		};
	}
	r.throwIfAborted();
	const y = (/* @__PURE__ */ new Date()).toISOString();
	if (!s.active()) return null;
	const b = await re(n, [
		n.ggirResultsBundles,
		n.ggirScorerReviews,
		n.markers,
		n.files
	], async () => {
		if (!s.active()) return null;
		const i = await to(e, t, n);
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
	return b ? (Ua.dispatchEvent(new CustomEvent("updated", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })), r.throwIfAborted(), w ?? h.imported) : (r.throwIfAborted(), !1 !== b && null);
}
async function ao(e, t, n, r, i = {}) {
	const s = await (t.length ? e.ggirResultsBundles.where(":id").anyOf([...t]) : e.ggirResultsBundles.toCollection()).primaryKeys(), a = (e) => {
		const t = r?.get(e);
		return t && "key" in t ? t.key : void 0;
	}, o = async (t) => {
		const r = await Promise.all(t.map((t) => async function(e, t, n, r) {
			const [{ markerInputs: i, bundleRevision: s }, a] = await Promise.all([to(t, n, e), e.ggirScorerReviews.get([t, n])]);
			return !(!a || !s || a.markerInputs !== i || a.bundleRevision !== s || 0 !== a.edits.length && ((await e.ggirResultsBundles.get(t))?.ggirCorrections || void 0 !== r && a.corrected?.key !== r));
		}(e, t, n, a(t))));
		return t.filter((e, t) => !r[t]);
	}, l = await o(s);
	if (0 === l.length) return /* @__PURE__ */ new Set();
	const c = i.signal ?? new AbortController().signal, u = (await e.files.bulkGet(l)).map((e) => e?.sourceSizeBytes ?? 0);
	return await V(l.map((t, r) => ({
		name: String(t),
		cost: u[r],
		memoryGib: G(u[r]),
		run: async (r, i) => {
			try {
				await so(t, n, e, c, !1, {
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
		...U({
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: z()
		}),
		...i.workerPool
	}), new Set(await o(l));
}
function oo(e, t) {
	return W({
		kind: I.GGIR_RECOVERY,
		key: I.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const r = () => !t.signal.aborted && e.isOpen() && O() === e;
			try {
				if (!r()) return;
				const s = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: a } = await import("./ggir-import-Bw8k7gXX.js").then((e) => e.t);
				for (const o of s) {
					if (t.signal.throwIfAborted(), !r()) return;
					try {
						const [s] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), a(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), c = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...s.map((e) => e.scorer)]);
						c.delete(ve);
						for (const a of c) {
							if (!r()) return;
							try {
								const n = Ja(o, a, e);
								if (!n) {
									const { markerInputs: t, bundleRevision: n } = await to(o, a, e), r = s.find((e) => e.scorer === a);
									if (n && r?.markerInputs === t && r.bundleRevision === n) continue;
								}
								await io(o, a, e, t.signal, n);
							} catch (i) {
								n = !0, Ya(o, a, e, i, t.signal);
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
				const i = Object.values(A.getState().jobs).filter((t) => N(t) && t.workspaceId === e.name && t.kind === I.GGIR_RECOMPUTE && t.status === $.FAILED);
				for (const t of i) {
					const i = t.key.slice(I.GGIR_RECOMPUTE.length + 1);
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
							r() && (0 === n || 0 === i && 0 === s) && (A.getState().dismiss(t.id), Ua.dispatchEvent(new CustomEvent("updated", { detail: {
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
var lo = class extends Error {
	constructor() {
		super("a night of this recording was edited during the export; export again");
	}
};
function co(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
async function uo(e, t, n = [], r, i, a, o) {
	const l = r ?? await eo(e.imported, t, n, i, o);
	let c;
	i?.throwIfAborted();
	const u = a?.review;
	if (co(u, a?.bundleRevision, l)) c = u.current;
	else {
		if (a && l.length > 0 && !e.part1) throw new lo();
		if (l.length > 0 && e.ms2 && e.ms3) {
			const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), r = t(e.ms3), a = t(e.ms4), u = t(e.ms5), d = t(e.sleeplogRData), p = (t) => t.reviewGgirResults({
				part1: new Uint8Array(e.part1),
				configCsv: e.configCsv,
				recordingId: s(e.recordingFile),
				...n ? { ms2: n } : {},
				...r ? { ms3: r } : {},
				...a ? { ms4: a } : {},
				...u ? { ms5: u } : {},
				...d ? { sleeplogRData: d } : {},
				...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
				edits: l,
				...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
				...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
				crossCheck: !1
			});
			c = Xe(await (o ? p(o) : F(i, p)));
		}
	}
	i?.throwIfAborted();
	const d = Object.getOwnPropertyDescriptors(e);
	return delete d.current, Reflect.deleteProperty(d, "edits"), Object.defineProperties({
		...c ? { current: c } : {},
		edits: l
	}, d);
}
const po = "Also export corrected values was off at export";
function mo(e) {
	const t = Object.values(e.ggirCorrectionsNotApplied).filter((e) => e !== po).length, n = Object.keys(e.ggirCorrectionProfiles);
	if (0 === n.length && 0 === t) return null;
	const r = Object.keys(e.ggirCorrections).length;
	return `Corrected values: ${n.length > 0 ? `profile ${n.join(", ")}; ` : ""}${String(r)} ${1 === r ? "recording" : "recordings"} corrected, ${String(t)} left out (see manifest.json).`;
}
function go(e) {
	const t = Ta(e, wa.manifest), n = new Map(t.ggirResultsBundles.map((e) => [e.fileId, e.recordingFile]));
	return t.ggirCorrectedValues.flatMap((e) => void 0 !== e.notApplied && "Also export corrected values was off at export" !== e.notApplied && n.has(e.fileId) ? [{
		file: Hr("part4_night_review", "corrected"),
		row: 0,
		key: n.get(e.fileId),
		column: `corrected values: ${e.notApplied}`,
		reason: "not_computed_for_export"
	}] : []);
}
function fo(e) {
	return Ta(e, wa.ggirReport).ggirResultsBundles.flatMap((e) => {
		const t = Ke(e.imported, e.part2Reports);
		return t ? [{
			file: Hr("part4_night_review", "default"),
			row: 0,
			key: e.recordingFile,
			column: t,
			reason: "source_reported_missing"
		}] : [];
	});
}
vs.sleep;
async function ho(e, t = O(), n = {}) {
	const r = await Ro(null, "computing the corrected GGIR values", () => async function(e, t, n = {}) {
		const r = Pa();
		return r?.request ? r.request(Da(e), n.signal ? { signal: n.signal } : {}, () => La(e, t, n, !1)) : La(e, t, n, !1);
	}(t, e, {
		signal: n.signal,
		onProgress: (e, t) => n.progress?.(e, t, "Computing corrected values"),
		...n.workerPool ? { workerPool: n.workerPool } : {}
	})), { username: i } = n, s = void 0 === i ? void 0 : await Ro(null, "updating the GGIR night reviews", () => ao(t, e, i, r, {
		signal: n.signal,
		...n.workerPool ? { workerPool: n.workerPool } : {}
	}));
	return n.progress?.(0, 0, sr), Ro(null, "checking the export inputs", () => async function(e, t = O(), n = {}) {
		const r = /* @__PURE__ */ new Map();
		for (const d of (n.readPlan ?? Object.keys(wa)).map((e) => wa[e])) for (const [e, t] of Object.entries(d)) {
			const n = e;
			r.set(n, /* @__PURE__ */ new Set([...r.get(n) ?? [], ...t]));
		}
		if (!r.size) {
			const e = Object.freeze({ files: Object.freeze([]) });
			return va.set(e, {}), e;
		}
		let i = 268435456;
		const s = (e) => {
			if (e instanceof ArrayBuffer ? i -= e.byteLength : "string" == typeof e ? i -= 2 * e.length : e && "object" == typeof e ? Object.values(e).forEach(s) : i -= 8, i < 0) throw new er("Export snapshot exceeds 256 MiB. Select fewer recordings or a narrower workspace before exporting.");
		};
		let a = 0;
		const o = /* @__PURE__ */ new Map(), l = (e, t, n) => {
			const r = Object.freeze({});
			return ba(e, "write", t, a), ya.set(r, {
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
				const o = "diaryEntries" === e ? t.diaryEntries : xe(t, e), l = "studySettings" === e ? o.where("key").equals("study") : o.where("fileId").anyOf([...i]);
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
		p.markers = (p.markers ?? []).map((e) => m.has(e.fileId) && "invalid" === Te(void 0, we(e)).kind ? {
			...e,
			isInvalidNight: !0
		} : e);
		const g = function(e) {
			const t = Object.freeze({ files: xa((e.files ?? []).map((e) => Object.fromEntries(ca.map((t) => [t, ka(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
			return va.set(t, e), t;
		}(p);
		return function(e, t) {
			const n = va.get(e);
			if (!n.ggirResultsBundles) return;
			const r = new Set(n.ggirResultsBundles.map((e) => e.fileId));
			if (void 0 === t) return void (n.ggirCorrectedValues && (n.ggirCorrectedValues = n.ggirCorrectedValues.filter((e) => !r.has(e.fileId))));
			const i = new Map((n.files ?? []).map((e) => [e.id, e.ggirBundleRevision])), s = new Map((n.ggirCorrectedValues ?? []).map((e) => [e.fileId, e]));
			n.ggirCorrectedValues = n.ggirResultsBundles.flatMap((e) => {
				if (!t) return e.ggirCorrections && !e.stock ? [] : [{
					fileId: e.fileId,
					key: "",
					notApplied: po
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
vs.producers, vs.archive;
const _o = [
	"sleep",
	"circadian",
	"ggirReport",
	"event",
	"physicalActivity"
], wo = /* @__PURE__ */ new WeakMap(), vo = 4;
function yo(e, t, n, r) {
	let i = wo.get(e);
	i || (i = /* @__PURE__ */ new Map(), wo.set(e, i));
	const s = JSON.stringify([t, n]);
	let a = i.get(s);
	if (!a) {
		for (; i.size >= vo;) i.delete(i.keys().next().value);
		a = async function(e, t, n, r) {
			const i = Ta(e, wa.ggirReport, [t]), s = i.files.find((e) => e.id === t), a = i.ggirResultsBundles.find((e) => e.fileId === t), o = a && _(a, i.ggirResultsBlobs.find((e) => e.fileId === t)), l = Ia(i, t, n), c = o ? await Qa(t, o.imported, l, s.ggirClockSteps, r) : void 0, u = c?.markersByAlgo ?? l, d = c?.selected ?? new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), p = new Set([...d].filter(([, e]) => "invalid" === Te(void 0, e).kind).map(([e]) => e)), m = i.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n), g = {
				review: m,
				bundleRevision: s.ggirBundleRevision
			}, f = o ? await uo(o, d, s.ggirClockSteps, c?.edits, r, g) : void 0, h = f ? await ko(f, p, r) : void 0, w = i.ggirCorrectedValues.find((e) => e.fileId === t), v = m?.corrected && w && m.corrected.key === w.key ? {
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
				sets: o && f ? await Promise.all(Ue(o, w, w?.notApplied !== po).map(async ({ set: e, bundle: t }) => t === o ? h : ko(await uo(t, d, s.ggirClockSteps, f.edits, r, "corrected" === e ? v : void 0), p, r))) : [],
				invalidDates: p
			};
		}(e, t, n, r), i.set(s, a), a.catch(() => {
			i.get(s) === a && i.delete(s);
		});
	}
	return a;
}
let bo;
async function ko(e, t, n) {
	const { ggirCell: r, ggirNum: i } = await import("./ggir-results-types-BFGvoGkk.js").then((e) => e.i), s = e.part2Reports?.["part2_daysummary.csv"], a = /* @__PURE__ */ new Map();
	if (s) for (let u = 0; u < s.rows; u++) {
		const e = r(s, te.ggir_id.header, u), t = Jr(r(s, te.ggir_calendar_date.header, u));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		a.set(n, a.has(n) ? null : u);
	}
	const o = Yr(e.imported, "nights"), l = te.ggir_nonwear_perc_spt.header, c = async (t) => {
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
			const e = await L(n).ggirDayValidFractions(Float64Array.from(d, (e) => e.valid), Float64Array.from(d, (e) => e.hours));
			d.forEach((t, n) => p.set(t.index, e[n] ?? null));
		}
		const m = !c.columns.includes(l) && u.some((e, n) => !t.nightRecomputed[n]) ? await function(e, t) {
			const n = e.cleanedNightsCsv;
			if (!n) return Promise.resolve(void 0);
			if (bo?.csv !== n || bo.config !== e.configCsv) {
				const r = L(t).readGgirReportCsv(n, e.configCsv);
				bo = {
					csv: n,
					config: e.configCsv,
					table: r
				}, r.catch(() => {
					bo?.table === r && (bo = void 0);
				});
			}
			return bo.table;
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
		}), f = ne.ggir_review_night_extension, h = [.../* @__PURE__ */ new Set([
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
		...e.personReports && (e.edits.length > 0 || t.size > 0) ? { personRecomputed: await ti(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await c(e.imported),
		...e.current ? { current: await c(e.current) } : {}
	};
}
function xo(e) {
	return Ta(e, wa.manifest).studySettings.flatMap((e) => le(e).map((e) => ({
		file: "sleep_export.csv",
		row: 0,
		key: e.filename,
		column: `${e.category}: ${e.reason}`,
		reason: "not_computed_for_export"
	})));
}
const Mo = "not included", So = "included if produced";
function To(e) {
	const t = e.artifacts ?? null, r = t ? null : e.planned ?? null, s = e.columns, a = t ? t.sleepRows.length : r?.sleepRows ?? null, o = t ? t.sleepRows.filter((e) => e.markerType === c.MAIN_SLEEP).length : r?.mainSleepRows ?? null, l = t ? Vs(t.sleepRows).size : r?.wideRows ?? null, u = t ? t.summaryRows.length : r?.summaryRows ?? null, d = t ? t.nonwearRows.length : r?.nonwearRows ?? null, p = t ? t.physicalActivityRows.length : r?.activityRows ?? null, m = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : r?.activityDates ?? null, g = t ? t.eventMarkerRows?.length ?? 0 : r?.eventMarkerRows ?? null, f = r?.actogramFiles ?? null, h = t ? Object.keys(t.ggirEntries) : null, _ = (h ? h.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
		const r = Math.max(0, n(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
		return {
			name: e,
			include: r > 0,
			rows: r
		};
	}) : r ? [...gi([...r.part4Rows.keys()])].map(([e, t]) => ({
		name: t,
		include: r.ggirMainSleepGroupKeys.includes(e),
		rows: r.part4Rows.get(e) ?? null
	})) : []).sort((e, t) => e.name.localeCompare(t.name)), w = h ? h.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [di, ...r?.ggirReviewEntries ?? []], v = (e) => null == e ? null : e > 0, y = (n, r, i) => {
		const a = null == r ? "unknown" : r ? "included" : "not_included";
		return "included" !== a ? {
			name: n,
			state: a,
			rows: null,
			detail: "unknown" === a ? i.detail : Mo,
			estimatedBytes: 0,
			write: null
		} : {
			name: n,
			state: a,
			rows: i.rows,
			detail: i.detail,
			estimatedBytes: i.estimatedBytes ?? ((i.rows ?? 0) + 1) * (i.columns ?? s) * 12,
			write: t ? () => i.csv ? bi(i.csv(t)) : i.encode(t) : null,
			...t && (i.chunkField || i.wide) ? { batches: function* () {
				if (i.wide) {
					const e = Us(t.sleepRows, !0), n = e.next().value;
					for (const t of e) {
						const e = n + "\n" + t;
						yield {
							bytes: bi(e),
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
						}, a = !e.selectedColumns?.length || "sleepRows" !== i.chunkField && "nonwearRows" !== i.chunkField ? void 0 : Zs(s[i.chunkField], void 0, !0), o = i.csv(s);
						yield {
							bytes: bi(o),
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
			detail: null == a ? So : `${String(a)} rows · ${String(s)} columns`,
			chunkField: "sleepRows",
			csv: (t) => Zs(t.sleepRows, e.selectedColumns ?? void 0, !0)
		}),
		y("sleep_export_wide.csv", !!e.includeWideFormat && v(l ?? o), {
			rows: l,
			detail: null == l ? So : `${String(l)} participant group ${1 === l ? "row" : "rows"}`,
			wide: !0,
			csv: (e) => function(e, t = !1) {
				return [...Us(e, t)].join("\n");
			}(e.sleepRows, !0)
		}),
		y("summary_export.csv", v(u ?? o), {
			rows: u,
			detail: null == u ? So : `${String(u)} participant ${1 === u ? "row" : "rows"}`,
			chunkField: "summaryRows",
			csv: (e) => function(e, t = !1) {
				const r = Ys("summary_csv", e, Bs, void 0, t), i = [
					"summary_mean_temperature_c",
					"sleep_regularity_index",
					...Object.values(js).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
				];
				return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? n(r).records.map((t, n) => 0 === n ? t.text + "," + i.map((e) => te[e].header + "_missing_reason").join(",") : t.text + "," + i.map((t) => {
					const r = e[n - 1];
					return "summary_mean_temperature_c" === t ? null == r.meanTemperature ? r.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? r.sleepRegularityMissingReason ?? "" : r.metricMissingReasons?.[t] ?? "";
				}).join(",")).join("\n") : r;
			}(e.summaryRows, !0)
		}),
		y("nonwear_export.csv", v(d), {
			rows: d,
			detail: null == d ? So : `${String(d)} periods`,
			chunkField: "nonwearRows",
			csv: (t) => Zs(t.nonwearRows, e.selectedColumns ?? void 0, !0)
		}),
		y("event_markers_export.csv", v(g), {
			rows: g,
			detail: null == g ? So : `${String(g)} button ${1 === g ? "press" : "presses"}`,
			columns: Na.length,
			chunkField: "eventMarkerRows",
			csv: (e) => function(e, t = !1) {
				const n = [[...Na, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
				for (const r of e) n.push([
					r.filename,
					r.participantId ?? "",
					r.studyDate,
					be(r.localTimestamp),
					null == r.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (r.localTimestamp - 60 * r.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
					...t ? [r.participantId ? "" : "source_reported_missing", null == r.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
				].map((e) => i(e)).join(","));
				return `${n.join("\n")}\n`;
			}(e.eventMarkerRows ?? [], !0)
		}),
		...ws.map((e) => {
			const n = t ? e.rows(t) : r?.sourceAnalysisRows.get(e.entry) ?? null;
			return y(e.entry, v(n), {
				rows: n,
				detail: null == n ? So : e.detail(n),
				columns: e.columns,
				...e.chunkField ? { chunkField: e.chunkField } : {},
				...e.csv ? { csv: (t) => e.csv(t) } : {},
				...e.encode ? { encode: (t) => e.encode(t) } : {}
			});
		}),
		y("physical_activity_export.csv", v(p), {
			rows: p,
			detail: null == p || null == m ? So : `${String(p)} rows · ${String(m)} distinct dates`,
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
				]), a = e.some((e) => "ggir_enmo" === e.method) ? Fa.filter((e) => !i.has(e) && (Ar.has(e) || s.has(e))) : [], o = [
					"Participant ID",
					"Threshold Preset Name",
					"Inclusion Rule Preset Name",
					"Scored Username",
					"Source Content Hash",
					"Validation Notes",
					"Notes"
				], l = [[
					...Fa.filter((e) => !i.has(e)),
					...a.map((e) => `${e}_missing_reason`),
					...r ? [
						"Epoch Length Seconds",
						"Native Epoch Seconds",
						"Mask Overlap Epochs"
					].map((e) => e + "_missing_reason") : [],
					...o.map((e) => e + "_missing_reason")
				].join(",")];
				for (const c of e) {
					const e = Ga(c), t = null == c.sedentaryMinutes || !n && null == c.excludedNonwearMinutes ? null : c.sedentaryMinutes + (n ? 0 : c.excludedNonwearMinutes), u = [
						Wa(c.filename),
						Wa(c.participantId),
						Wa(c.analysisDate),
						Wa(c.method),
						Wa(c.methodLabel),
						Wa(c.methodFamily),
						Wa(c.requiredSignalContract),
						Wa(c.computationOwner),
						String(c.frontendComputesMetric),
						Wa(c.sourceSignal),
						Wa(c.status),
						Wa(c.methodRule),
						Wa(c.thresholdSource),
						Wa(c.thresholdPresetName),
						za(c.sedentaryMax),
						za(c.lightMin),
						za(c.moderateMin),
						za(c.vigorousMin),
						za(t),
						za(c.lightMinutes),
						za(c.moderateMinutes),
						za(c.vigorousMinutes),
						za(c.mvpaMinutes),
						za(c.mimsUnitTotal),
						null == c.epochLengthSeconds ? "" : String(c.epochLengthSeconds),
						String(c.epochsReviewed),
						za(c.wakeWearMinutes),
						za(c.excludedNonwearMinutes),
						za(c.excludedMainSleepMinutes),
						za(c.excludedNapMinutes),
						null == c.maskOverlapEpochs ? "" : String(c.maskOverlapEpochs),
						null == c.mvpaBouts ? "" : String(c.mvpaBouts),
						za(c.mvpaBoutMinutes),
						null == c.sedentaryBouts ? "" : String(c.sedentaryBouts),
						null == c.sedentaryBreaks ? "" : String(c.sedentaryBreaks),
						za(c.meanSedentaryBoutMinutes),
						null == c.nativeEpochSeconds ? "" : String(c.nativeEpochSeconds),
						String(c.epochMismatch),
						Wa(c.inclusionRulePresetName),
						String(c.maskExcludeNonwear),
						String(c.maskExcludeMainSleep),
						String(c.maskExcludeNaps),
						String(c.maskUseManualNonwear),
						String(c.maskUseAlgorithmNonwear),
						Wa(c.maskNonwearDetector),
						za(c.maskMinimumWakeWearMinutes),
						Wa(c.scoredUsername),
						Wa(c.sourceContentHash),
						Wa(c.exportedAt),
						Wa(e.status),
						Wa(e.notes),
						Wa(c.notes)
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
						const t = u[Fa.indexOf(e)];
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
					].map(([e, t]) => "" === u[Fa.indexOf(e)] ? t : "") : [];
					l.push([
						...u.filter((e, t) => !i.has(Fa[t])),
						...m,
						...g,
						...o.map((e) => "" !== u[Fa.indexOf(e)] ? "" : [
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
			detail: null == n ? So : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
			columns: 40,
			encode: (t) => t.ggirEntries[e]
		})),
		...w.map((e) => y(e, !(!h && !r?.ggirReviewEntries.includes(e)) || (null == f ? null : f > 0), {
			rows: null,
			detail: e.endsWith(".html") ? null == f ? h ? "1 report" : So : `1 report · ${String(f)} ${1 === f ? "file" : "files"}` : "1 GGIR report artifact",
			encode: (t) => t.ggirEntries[e]
		})),
		{
			name: Pr,
			state: "included",
			rows: null,
			detail: "1 reason per missing cell",
			estimatedBytes: 2048 + (_s.reduce((e, n) => {
				const r = t ? n.missingReasonBytes(t) : void 0;
				return void 0 === r ? e : (e ?? 0) + r;
			}, void 0) ?? r?.sourceAnalysisMissingReasonBytes ?? 0),
			write: null
		},
		y("codebook.csv", !0, {
			rows: Ds.length,
			detail: `${String(Ds.length)} definitions`,
			estimatedBytes: new TextEncoder().encode(Ws()).length,
			encode: () => bi(Ws(void 0, !0))
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
async function Io(e, t, r, s = {}) {
	const { signal: a } = s;
	a?.throwIfAborted(), s.progress?.(0, 0, sr);
	const l = await ho(t.fileIds, e, {
		...s,
		signal: a,
		username: t.username
	}), u = function(e, t, r, s) {
		const a = [], o = [], l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = [], d = ke(/* @__PURE__ */ new Date()), p = (e) => {
			for (const t of e.charts) u.push({
				key: t.key,
				pid: t.pid,
				charts: t.charts.length
			}), o.push(wi(o.length, t));
			for (const [t, n] of e.csvLinesByAlgo) c.set(t, f(n[0]));
			for (const [t, n] of e.headers) l.set(t, Qr(l.get(t) ?? [], n));
			a.push({
				csvLinesByAlgo: e.csvLinesByAlgo,
				ggirReviews: e.ggirReviews
			});
		};
		async function* m(e, t) {
			for (const n of a) s?.throwIfAborted(), yield xi(n, {
				signal: s,
				names: t,
				layouts: l,
				only: e
			}).then((t) => t[e]);
		}
		return {
			add: p,
			addFiles: async (n) => {
				for (const i of n) p(await Mi({
					username: e,
					dateRange: t,
					snapshot: r,
					generatedAt: d
				}, i, s));
			},
			streamEntries: function* () {
				const e = gi([...c.keys()]);
				for (const [t, n] of c) l.set(e.get(t), n);
				for (const t of [...l.keys()].filter(Kr)) {
					const e = l.get(t);
					e && l.set(t, [
						...e.filter((e) => !e.endsWith("_missing_reason") && !Gr.includes(e)),
						...Gr,
						...e.filter((e) => e.endsWith("_missing_reason") && !Gr.some((t) => e === t + "_missing_reason")),
						...Gr.map((e) => e + "_missing_reason")
					]);
				}
				for (const [t, r] of l) yield {
					name: t,
					chunks: async function* () {
						yield bi(r.map(i).join(",") + "\n");
						for await (const r of m(t, e)) {
							if (!r) continue;
							const e = new TextDecoder().decode(r), t = n(e).records[0], i = bi(e.slice(t.text.length + 1));
							for (let n = 0; n < i.byteLength; n += rr) yield i.subarray(n, n + rr);
						}
					}()
				};
				u.length && (yield {
					name: di,
					chunks: async function* () {
						yield* yi(function(e, t) {
							const n = e.map((e) => e.key), r = e.reduce((e, t) => e + t.charts, 0);
							return `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${ui(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${ui(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${r} chart${1 !== r ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${ui(e[n].pid)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`;
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
						for (const e of vi) yield* yi(e);
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
					const i = Ta(e, wa.circadian, t);
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
					}(t.length > 0 ? i.files.filter((e) => null != e.id && t.includes(e.id)) : i.files, (e) => Ea(i, e), {
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
				if (g instanceof Ma) throw g;
				if (r?.throwIfAborted(), l = !0, g instanceof DOMException && "AbortError" === g.name) throw g;
			}
			const u = await Ro(i[0].filename, "computing its sleep rows", () => async function(e, t, n, r, i, s, a) {
				const l = i && i.trim().length > 0 ? i.trim() : null, u = Ta(s, wa.sleep, e), d = u.files, m = jn(u.studySettings[0]?.extraSettings), g = Ce(u.studySettings[0]?.extraSettings?.analysis_paradigm), f = (e.length > 0 ? d.filter((t) => null != t.id && e.includes(t.id)) : [...d]).sort((e, t) => e.filename.localeCompare(t.filename)), [h, _] = n ?? ["", ""], w = [], v = [], y = [], b = [], k = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), M = async () => {
					for (const [e, t] of k) x.set(e, await Ns(e, t, w, a));
					k.clear();
				}, S = /* @__PURE__ */ new Map(), T = (e) => {
					const t = JSON.stringify(e);
					let n = S.get(t);
					return n || (n = L(a).exportNapAggregate(e), S.set(t, n)), n;
				}, I = await Promise.all(f.map((e) => yo(s, e.id, t, a)));
				for (const [A, E] of f.entries()) {
					if (a?.throwIfAborted(), A > 0 && f[A - 1].filename !== E.filename && await M(), !E.id) continue;
					const e = Ea(u, E.id), { bundle: t, markersByAlgo: i } = I[A], s = t?.edits ?? [], d = t ? qe(t.imported) : [], { zone: x } = await Ln(E, m, a), S = [.../* @__PURE__ */ new Set([...E.availableDates, ...d.map((e) => e.nightDate)])].sort(), R = n ? S.filter((e) => e >= h && e <= _) : S;
					if (t) {
						const e = new Set(Je(t.imported).map((e) => e.night));
						for (const n of d) {
							if (e.has(n.night) || !R.includes(n.nightDate)) continue;
							const r = Te(n, i.get(n.nightDate)?.[0]).kind;
							"scored" !== r && "invalid" !== r && y.push({
								file: "sleep_export.csv",
								row: 0,
								key: `${te.filename.header}=${E.filename}|${te.study_date.header}=${n.nightDate}`,
								column: `GGIR night ${String(n.night)}: ${Ze(t.imported, n.night)}`,
								reason: "ggir_night_excluded"
							});
						}
					}
					const C = he(e.values()), N = hs[Ne(E, g)].forFile(u, E.id), $ = R.flatMap((e) => (i.get(e) ?? []).filter((e) => o(e) || e.nonwearMarkers.length > 0).map((t) => ({
						markers: t,
						sleepPeriods: N.sleepPeriodsOf(e, t),
						nonwear: t.nonwearMarkers.map((e) => ({
							start: e.startTimestamp,
							end: e.endTimestamp
						}))
					}))), O = [...e.keys()].sort().map((t) => e.get(t)), j = O.map((e) => ae(e).timestamps), B = bs.flatMap((e) => {
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
					for (const n of R) {
						a?.throwIfAborted();
						const o = i.get(n);
						if (o && 0 !== o.length) for (const i of o) {
							const o = P.get(i);
							if (!o) continue;
							const { sleepPeriods: u, figures: m } = o, g = E.participantId ?? null, f = E.id, h = i.algorithm ?? null, _ = i.username ?? null, y = i.needsConsensus, M = i.notes, S = e.get(n), I = await Z(n, E.navigationFacts, L(a)), R = e.get(I), A = {
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
								...As(i.sleepPeriodDetectionConfig),
								algorithmVersion: i.algorithmVersion ?? null,
								verificationStatus: null,
								studyId: l,
								markerStepSeconds: p(h, E.epochLengthSeconds),
								dstTransition: await Fe(x, n, void 0, L(a))
							}, $ = await T(u.filter((e) => e.markerType === c.NAP).map((e) => ({
								start: e.onsetTimestamp,
								end: e.offsetTimestamp
							}))), O = r?.get(`${String(f)}|${n}`), j = {
								l5Hour: O?.l5Hour ?? null,
								m10Hour: O?.m10Hour ?? null,
								napCount: $.napCount,
								totalNapMinutes: $.napCount > 0 ? $.totalNapMinutes : null
							}, D = C(h), F = kn(S, D), W = `${E.filename}\0${g ?? ""}\0${A.algorithm ?? ""}\0${A.detectionRule ?? ""}`, z = k.get(W) ?? [];
							z.push({
								date: n,
								epochLengthSeconds: E.epochLengthSeconds || 60,
								timestamps: F.timestamps,
								states: F.algorithmResults,
								stale: "stale" === D.status
							}), k.set(W, z);
							const G = ae(S), V = await Yn(e, n, D, {
								signal: a,
								nextDate: I
							}), U = m.map(({ means: e }) => new Map(B.map(({ field: t }, n) => [t, e[n] ?? null]))), H = async (e, r, o) => {
								let l = null;
								const u = d.find((e) => e.nightDate === n), p = t && u && e.markerType === c.MAIN_SLEEP && "invalid" !== Te(u, i).kind, g = u && s.some((e) => e.night === u.night), f = Es(null), h = {};
								let _ = "not_applicable_to_row";
								const w = N.sleepRowMetrics?.cells(e) ?? null;
								if (w && (_ = w.metricMissingReason, Object.assign(f, w.metrics), Object.assign(h, w.reasons)), !p && !w && e.onsetTimestamp && e.offsetTimestamp) {
									const { timestamps: t, algorithmResults: n, activity: r, scoresStale: i } = V;
									if (null !== i && 0 === b.length && b.push({
										component: "metric_computation",
										code: "unavailable",
										message: i
									}), _ = null !== i ? "scores_from_another_config" : null == n ? "no_scored_epochs" : null == r ? "channel_unavailable" : 0 === t.length ? "no_valid_epochs" : void 0, null != n && t.length > 0 && (null != r || G.ggir)) {
										const i = G.epochSec ?? (E.epochLengthSeconds || 60), s = await Cs(n, r, t, e.onsetTimestamp, e.offsetTimestamp, i, a);
										l = s.metrics, l || s.error || (_ = "no_valid_epochs"), s.error && (_ = "not_computed_for_export"), s.error && 0 === b.length && b.push({
											component: "metric_computation",
											code: "unavailable",
											message: "Metric computation failed for at least one selected period; those rows carry no numerics."
										});
									}
								}
								if (p) {
									_ = "channel_unavailable";
									const e = g ? t.current?.nights : t.imported.nights, n = e ? et(e, te.ggir_night.header, u.night) : -1;
									for (const [t, r, i, s] of ys) {
										const a = e ? Qe(e, te[r].header, n) : null;
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
									...p || w ? f : Es(l),
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
									mean_temperature_c: M(x.meanTemperature, Boolean(S?.temperature || R?.temperature)),
									mean_white_light_lux: M(x.meanWhiteLight, Boolean(S?.lux || R?.lux)),
									mean_red_light: M(x.meanRedLight, Boolean(S?.redLight || R?.redLight)),
									mean_green_light: M(x.meanGreenLight, Boolean(S?.greenLight || R?.greenLight)),
									mean_blue_light: M(x.meanBlueLight, Boolean(S?.blueLight || R?.blueLight))
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
									markerType: Ts,
									onsetTimestamp: null,
									offsetTimestamp: null,
									...Es(null),
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
								markerType: Is,
								onsetTimestamp: e.startTimestamp,
								offsetTimestamp: e.endTimestamp,
								...Es(null),
								isInvalidNight: !1,
								sleepMidpointTimestamp: null,
								sleepMidpointHour: null,
								validWearMinutes: null
							});
						}
					}
				}
				await M(), w.sort($s), v.sort($s);
				const R = await async function(e, t) {
					const n = e.filter((e) => e.markerType === c.MAIN_SLEEP), r = /* @__PURE__ */ new Map();
					for (const o of n) {
						const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = r.get(e);
						t ? t.push(o) : r.set(e, [o]);
					}
					const i = [...r], s = await L(t).summarizeExportGroups(i.map(([, e]) => e.map((e) => ({
						study_date: e.studyDate,
						total_nap_minutes: e.totalNapMinutes,
						values: Os.map(([, t]) => e[t])
					})))), a = i.map(([e, t], n) => {
						const [r, i, a, o] = e.split("\0"), l = s[n], c = Object.fromEntries(Os.map(([e], t) => [e, l.means[t] ?? null]));
						return {
							filename: r,
							participantId: i,
							algorithm: a,
							detectionRule: o,
							nNights: l.nNights,
							...c,
							meanTemperatureMissingReason: null == c.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
							metricMissingReasons: Object.fromEntries(Os.map(([e, n]) => {
								const r = js[e], i = ys.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : r), s = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[i] ?? e.metricMissingReason).find(Boolean);
								return [r, null == c[e] ? s : void 0];
							})),
							sleepRegularityIndex: null,
							meanTotalNapMinutes: l.meanTotalNapMinutes,
							studyId: t[0]?.studyId ?? null
						};
					});
					return a.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), a;
				}(w, a);
				for (const o of R) {
					const e = `${o.filename}\0${o.participantId}\0${o.algorithm}\0${o.detectionRule}`, t = x.get(e);
					o.sleepRegularityIndex = t?.sri ?? null, o.sleepRegularityMissingReason = t?.sriMissingReason ?? (t ? void 0 : "not_computed_for_export");
				}
				return {
					sleepRows: w,
					nonwearRows: v,
					summaryRows: R,
					degradations: b,
					nightReasons: y
				};
			}(s, n.username, n.dateRange, a, n.studyId, e, r)), d = await Ro(i[0].filename, "drawing its visual report", async () => {
				const t = [];
				for (const s of i) t.push(await Mi({
					...n,
					snapshot: e
				}, s, r));
				return t;
			}), { generateLocalPhysicalActivityExportRows: m } = await import("./local-physical-activity-export-CN8D5vp8.js");
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
				eventMarkerRows: await Oa(s, n.dateRange, e, n.username, r),
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
	const T = function(e) {
		return {
			sleepRows: e.flatMap((e) => e.sleepRows),
			nonwearRows: e.flatMap((e) => e.nonwearRows),
			summaryRows: e.flatMap((e) => e.summaryRows),
			degradations: e.flatMap((e) => e.degradations).slice(0, 1),
			nightReasons: e.flatMap((e) => e.nightReasons ?? [])
		};
	}(m), I = {}, R = function(e) {
		const t = Ta(e, wa.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(l);
	R && (I["audit_log.jsonl"] = R);
	const A = {
		fileIds: t.fileIds,
		dateRange: t.dateRange,
		username: t.username,
		signal: a
	}, E = [];
	for (const n of _s) E.push(await n.produceEntries(A, Ca(l), L(a)));
	const C = Ta(l, wa.manifest), N = Object.fromEntries(T.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	_ ||= T.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const $ = [..._ ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...T.degradations], O = function(e, t) {
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
	}(C.ggirResultsBundles, C.ggirCorrectedValues), j = await Ro(null, "reading saved GGIR source provenance", () => async function(e, t = L()) {
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
	}(C.ggirResultsBundles, L(a))), B = [...u.streamEntries()], D = await oa({
		artifacts: {
			importRefusalReasons: [
				...xo(l),
				...fo(l),
				...go(l),
				...T.nightReasons ?? []
			],
			...T,
			physicalActivityRows: g,
			physicalActivityEnabledClasses: t.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: t.physicalActivity.nonwearAsClass,
			ggirEntries: I,
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
		ggirCorrected: mo(O),
		hasData: T.sleepRows.length > 0 || T.nonwearRows.length > 0 || g.length > 0 || D.entries.some((e) => B.some((t) => t.name === e.name)) || Object.keys(I).length > 0,
		rowCount: T.sleepRows.length + T.nonwearRows.length + T.summaryRows.length + g.length,
		dayCount: (/* @__PURE__ */ new Set([
			...T.sleepRows.map((e) => e.studyDate),
			...T.nonwearRows.map((e) => e.studyDate),
			...g.map((e) => e.analysisDate)
		])).size,
		fileCount: l.files.length
	};
}
async function Ro(e, t, n) {
	try {
		return await n();
	} catch (r) {
		if (r instanceof DOMException && "AbortError" === r.name) throw r;
		throw new tr(e, t, r);
	}
}
function Ao(e, t = /* @__PURE__ */ new Set()) {
	if (e instanceof ArrayBuffer) t.add(e);
	else if (ArrayBuffer.isView(e)) t.add(e.buffer);
	else if (e && "object" == typeof e) for (const n of Object.values(e)) Ao(n, t);
	return [...t];
}
function Eo(e) {
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
				const e = new Worker(new URL("/sleep-scoring-wasm/assets/local-export-shard-worker-Da7c2eY6.js", "" + import.meta.url), { type: "module" });
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
					const n = va.get(e);
					if (!n) throw new Ma("Export requires a captured input snapshot");
					const r = new Set(_o.flatMap((e) => Object.keys(wa[e])));
					return Object.fromEntries([...r].map((e) => [e, (n[e] ?? []).filter((n) => "studySettings" === e || t.includes("files" === e ? n.id : n.fileId)).map(ka)]));
				}(e, t), s = await r.group(t, M(i, Ao(i)), n);
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
new Set(ws.filter((e) => e.streamed).map((e) => e.entry)), y({ async build(e, t, n, r) {
	const i = new g(e), s = Eo(Math.max(1, Math.min(8, (navigator.hardwareConcurrency || 2) - 2))), a = function() {
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
		return o = await (await (await (await (await navigator.storage.getDirectory()).getDirectoryHandle(Qn, { create: !0 })).getDirectoryHandle(n, { create: !0 })).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await i.open(), await Io(i, t, n, {
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
export { En as A, Hn as C, An as D, Bn as E, Kt as F, Cn as M, In as N, Tn as O, qt as P, Un as S, Ln as T, Li as _, Ea as a, Si as b, Hi as c, Yi as d, Ai as f, Pi as g, Wi as h, Ta as i, xn as j, Nn as k, Ji as l, zi as m, ro as n, Ra as o, Fi as p, wa as r, Ui as s, Va as t, qi as u, Ti as v, qn as w, Kn as x, Ii as y };
