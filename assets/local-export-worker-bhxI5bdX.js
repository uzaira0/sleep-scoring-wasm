import { n as e, r as t, s as n, t as i } from "./ggir-results-types-WB8axvb-.js";
import { c as a, d as r, i as s, u as o } from "./workers-BBQNM0SO.js";
import { Ft as l, Gt as u, It as c, Nt as d, Pt as m, _n as p, a as g, f as h, ht as f, wt as _ } from "./schema-CyUnUnE_.js";
import { A as w, F as y, M as v, N as M, P as b, b as k, j as x, k as S, m as I } from "./nonwear-display-slots-DOhK7PaE.js";
import { A, G as R, H as T, K as N, W as E, g as $, rt as O, t as L } from "./workspace-db-BQvvwDug.js";
import { l as B, n as C, o as D, s as P } from "./content-hash-BtD8CeUH.js";
import { a as F, n as W, t as j } from "./background-jobs-h7korJeC.js";
import { a as U } from "./project-revision-DRqi4X7l.js";
import { A as z, B as G, C as V, I as H, K as q, M as K, N as Y, P as J, S as Z, Ut as Q, W as X, Wt as ee, Xt as te, Yt as ne, b as ie, nn as ae, zt as re } from "./store-lJ6KVo7V.js";
import { B as se, j as oe, m as le, u as ue } from "./night-session-registry-xcC-CBc7.js";
import { d as ce, l as de, p as me } from "./sleep-period-detection-DebTRw-F.js";
import { t as pe } from "./audit-hash-rfcCP1yx.js";
import { d as ge, n as he, r as fe, s as _e } from "./ggir-results-import-BSGSZyQ_.js";
import { E as we, N as ye, T as ve, c as Me } from "./local-nonwear-unified-CLvdjPVW.js";
import { S as be, _ as ke, b as xe, g as Se, n as Ie, t as Ae, v as Re, x as Te, y as Ne } from "./valid-day-criteria-QbspLa0B.js";
import { h as Ee, m as $e, v as Oe } from "./diary-local-import-contract-CEOMJhpC.js";
var Le = Uint8Array, Be = Uint16Array, Ce = Int32Array, De = new Le([
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
]), Pe = new Le([
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
]), Fe = new Le([
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
]), We = function(e, t) {
	for (var n = new Be(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
	var a = new Ce(n[30]);
	for (i = 1; i < 30; ++i) for (var r = n[i]; r < n[i + 1]; ++r) a[r] = r - n[i] << 5 | i;
	return {
		b: n,
		r: a
	};
}, je = We(De, 2), Ue = je.b, ze = je.r;
Ue[28] = 258, ze[258] = 28;
for (var Ge = We(Pe, 0), Ve = (Ge.b, Ge.r), He = new Be(32768), qe = 0; qe < 32768; ++qe) {
	var Ke = (43690 & qe) >> 1 | (21845 & qe) << 1;
	Ke = (61680 & (Ke = (52428 & Ke) >> 2 | (13107 & Ke) << 2)) >> 4 | (3855 & Ke) << 4, He[qe] = ((65280 & Ke) >> 8 | (255 & Ke) << 8) >> 1;
}
var Ye = function(e, t, n) {
	for (var i = e.length, a = 0, r = new Be(t); a < i; ++a) e[a] && ++r[e[a] - 1];
	var s, o = new Be(t);
	for (a = 1; a < t; ++a) o[a] = o[a - 1] + r[a - 1] << 1;
	if (n) {
		s = new Be(1 << t);
		var l = 15 - t;
		for (a = 0; a < i; ++a) if (e[a]) for (var u = a << 4 | e[a], c = t - e[a], d = o[e[a] - 1]++ << c, m = d | (1 << c) - 1; d <= m; ++d) s[He[d] >> l] = u;
	} else for (s = new Be(i), a = 0; a < i; ++a) e[a] && (s[a] = He[o[e[a] - 1]++] >> 15 - e[a]);
	return s;
}, Je = new Le(288);
for (qe = 0; qe < 144; ++qe) Je[qe] = 8;
for (qe = 144; qe < 256; ++qe) Je[qe] = 9;
for (qe = 256; qe < 280; ++qe) Je[qe] = 7;
for (qe = 280; qe < 288; ++qe) Je[qe] = 8;
var Ze = new Le(32);
for (qe = 0; qe < 32; ++qe) Ze[qe] = 5;
var Qe = Ye(Je, 9, 0), Xe = Ye(Ze, 5, 0), et = function(e) {
	return (e + 7) / 8 | 0;
}, tt = function(e, t, n) {
	return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new Le(e.subarray(t, n));
}, nt = [
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
], it = function(e, t, n) {
	var i = new Error(t || nt[e]);
	if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, it), !n) throw i;
	return i;
}, at = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8;
}, rt = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, st = function(e, t) {
	for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
		s: i,
		f: e[i]
	});
	var a = n.length, r = n.slice();
	if (!a) return {
		t: pt,
		l: 0
	};
	if (1 == a) {
		var s = new Le(n[0].s + 1);
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
	var o = n[0], l = n[1], u = 0, c = 1, d = 2;
	for (n[0] = {
		s: -1,
		f: o.f + l.f,
		l: o,
		r: l
	}; c != a - 1;) o = n[n[u].f < n[d].f ? u++ : d++], l = n[u != c && n[u].f < n[d].f ? u++ : d++], n[c++] = {
		s: -1,
		f: o.f + l.f,
		l: o,
		r: l
	};
	var m = r[0].s;
	for (i = 1; i < a; ++i) r[i].s > m && (m = r[i].s);
	var p = new Be(m + 1), g = ot(n[c - 1], p, 0);
	if (g > t) {
		i = 0;
		var h = 0, f = g - t, _ = 1 << f;
		for (r.sort(function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		}); i < a; ++i) {
			var w = r[i].s;
			if (!(p[w] > t)) break;
			h += _ - (1 << g - p[w]), p[w] = t;
		}
		for (h >>= f; h > 0;) {
			var y = r[i].s;
			p[y] < t ? h -= 1 << t - p[y]++ - 1 : ++i;
		}
		for (; i >= 0 && h; --i) {
			var v = r[i].s;
			p[v] == t && (--p[v], ++h);
		}
		g = t;
	}
	return {
		t: new Le(p),
		l: g
	};
}, ot = function(e, t, n) {
	return -1 == e.s ? Math.max(ot(e.l, t, n + 1), ot(e.r, t, n + 1)) : t[e.s] = n;
}, lt = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new Be(++t), i = 0, a = e[0], r = 1, s = function(e) {
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
}, ut = function(e, t) {
	for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
	return n;
}, ct = function(e, t, n) {
	var i = n.length, a = et(t + 2);
	e[a] = 255 & i, e[a + 1] = i >> 8, e[a + 2] = 255 ^ e[a], e[a + 3] = 255 ^ e[a + 1];
	for (var r = 0; r < i; ++r) e[a + r + 4] = n[r];
	return 8 * (a + 4 + i);
}, dt = function(e, t, n, i, a, r, s, o, l, u, c) {
	at(t, c++, n), ++a[256];
	for (var d = st(a, 15), m = d.t, p = d.l, g = st(r, 15), h = g.t, f = g.l, _ = lt(m), w = _.c, y = _.n, v = lt(h), M = v.c, b = v.n, k = new Be(19), x = 0; x < w.length; ++x) ++k[31 & w[x]];
	for (x = 0; x < M.length; ++x) ++k[31 & M[x]];
	for (var S = st(k, 7), I = S.t, A = S.l, R = 19; R > 4 && !I[Fe[R - 1]]; --R);
	var T, N, E, $, O = u + 5 << 3, L = ut(a, Je) + ut(r, Ze) + s, B = ut(a, m) + ut(r, h) + s + 14 + 3 * R + ut(k, I) + 2 * k[16] + 3 * k[17] + 7 * k[18];
	if (l >= 0 && O <= L && O <= B) return ct(t, c, e.subarray(l, l + u));
	if (at(t, c, 1 + (B < L)), c += 2, B < L) {
		T = Ye(m, p, 0), N = m, E = Ye(h, f, 0), $ = h;
		var C = Ye(I, A, 0);
		for (at(t, c, y - 257), at(t, c + 5, b - 1), at(t, c + 10, R - 4), c += 14, x = 0; x < R; ++x) at(t, c + 3 * x, I[Fe[x]]);
		c += 3 * R;
		for (var D = [w, M], P = 0; P < 2; ++P) {
			var F = D[P];
			for (x = 0; x < F.length; ++x) {
				var W = 31 & F[x];
				at(t, c, C[W]), c += I[W], W > 15 && (at(t, c, F[x] >> 5 & 127), c += F[x] >> 12);
			}
		}
	} else T = Qe, N = Je, E = Xe, $ = Ze;
	for (x = 0; x < o; ++x) {
		var j = i[x];
		if (j > 255) {
			rt(t, c, T[257 + (W = j >> 18 & 31)]), c += N[W + 257], W > 7 && (at(t, c, j >> 23 & 31), c += De[W]);
			var U = 31 & j;
			rt(t, c, E[U]), c += $[U], U > 3 && (rt(t, c, j >> 5 & 8191), c += Pe[U]);
		} else rt(t, c, T[j]), c += N[j];
	}
	return rt(t, c, T[256]), c + N[256];
}, mt = new Ce([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), pt = new Le(0), gt = function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, i = 9; --i;) n = (1 & n && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), ht = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
}, ft = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new Le(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, i, a) {
			if (!a && (a = { l: 1 }, t.dictionary)) {
				var r = t.dictionary.subarray(-32768), s = new Le(r.length + e.length);
				s.set(r), s.set(e, r.length), e = s, a.w = r.length;
			}
			return function(e, t, n, i, a, r) {
				var s = r.z || e.length, o = new Le(i + s + 5 * (1 + Math.ceil(s / 7e3)) + a), l = o.subarray(i, o.length - a), u = r.l, c = 7 & (r.r || 0);
				if (t) {
					c && (l[0] = r.r >> 3);
					for (var d = mt[t - 1], m = d >> 13, p = 8191 & d, g = (1 << n) - 1, h = r.p || new Be(32768), f = r.h || new Be(g + 1), _ = Math.ceil(n / 3), w = 2 * _, y = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, v = new Ce(25e3), M = new Be(288), b = new Be(32), k = 0, x = 0, S = r.i || 0, I = 0, A = r.w || 0, R = 0; S + 2 < s; ++S) {
						var T = y(S), N = 32767 & S, E = f[T];
						if (h[N] = E, f[T] = N, A <= S) {
							var $ = s - S;
							if ((k > 7e3 || I > 24576) && ($ > 423 || !u)) {
								c = dt(e, l, 0, v, M, b, x, I, R, S - R, c), I = k = x = 0, R = S;
								for (var O = 0; O < 286; ++O) M[O] = 0;
								for (O = 0; O < 30; ++O) b[O] = 0;
							}
							var L = 2, B = 0, C = p, D = N - E & 32767;
							if ($ > 2 && T == y(S - D)) for (var P = Math.min(m, $) - 1, F = Math.min(32767, S), W = Math.min(258, $); D <= F && --C && N != E;) {
								if (e[S + L] == e[S + L - D]) {
									for (var j = 0; j < W && e[S + j] == e[S + j - D]; ++j);
									if (j > L) {
										if (L = j, B = D, j > P) break;
										var U = Math.min(D, j - 2), z = 0;
										for (O = 0; O < U; ++O) {
											var G = S - D + O & 32767, V = G - h[G] & 32767;
											V > z && (z = V, E = G);
										}
									}
								}
								D += (N = E) - (E = h[N]) & 32767;
							}
							if (B) {
								v[I++] = 268435456 | ze[L] << 18 | Ve[B];
								var H = 31 & ze[L], q = 31 & Ve[B];
								x += De[H] + Pe[q], ++M[257 + H], ++b[q], A = S + L, ++k;
							} else v[I++] = e[S], ++M[e[S]];
						}
					}
					for (S = Math.max(S, A); S < s; ++S) v[I++] = e[S], ++M[e[S]];
					c = dt(e, l, u, v, M, b, x, I, R, S - R, c), u || (r.r = 7 & c | l[c / 8 | 0] << 3, c -= 7, r.h = f, r.p = h, r.i = S, r.w = A);
				} else {
					for (S = r.w || 0; S < s + u; S += 65535) {
						var K = S + 65535;
						K >= s && (l[c / 8 | 0] = u, K = s), c = ct(l, c + 1, e.subarray(S, K));
					}
					r.i = s;
				}
				return tt(o, 0, i + et(c) + a);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? a.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, n, i, a);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || it(5), this.s.l && it(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var i = new Le(-32768 & n);
				i.set(this.b.subarray(0, this.s.z)), this.b = i;
			}
			var a = this.b.length - this.s.z;
			this.b.set(e.subarray(0, a), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(a), 32768), this.s.z = e.length - a + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = pt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || it(5), this.s.l && it(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new Le(6);
			t[0] = this.s.r >> 3;
			var n = ct(t, this.s.r, pt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), _t = "undefined" != typeof TextEncoder && new TextEncoder(), wt = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	wt.decode(pt, { stream: !0 });
} catch (ts) {}
function yt(e, t) {
	if (t) {
		for (var n = new Le(e.length), i = 0; i < e.length; ++i) n[i] = e.charCodeAt(i);
		return n;
	}
	if (_t) return _t.encode(e);
	var a = e.length, r = new Le(e.length + (e.length >> 1)), s = 0, o = function(e) {
		r[s++] = e;
	};
	for (i = 0; i < a; ++i) {
		if (s + 5 > r.length) {
			var l = new Le(s + 8 + (a - i << 1));
			l.set(r), r = l;
		}
		var u = e.charCodeAt(i);
		u < 128 || t ? o(u) : u < 2048 ? (o(192 | u >> 6), o(128 | 63 & u)) : u > 55295 && u < 57344 ? (o(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++i)) >> 18), o(128 | u >> 12 & 63), o(128 | u >> 6 & 63), o(128 | 63 & u)) : (o(224 | u >> 12), o(128 | u >> 6 & 63), o(128 | 63 & u));
	}
	return tt(r, 0, s);
}
var vt = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var i = e[n].length;
		i > 65535 && it(9), t += i + 4;
	}
	return t;
}, Mt = function(e, t, n, i, a, r, s, o) {
	var l = i.length, u = n.extra, c = o && o.length, d = vt(u);
	ht(e, t, null != s ? 33639248 : 67324752), t += 4, null != s && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (r < 0 && 8), e[t++] = a && 8, e[t++] = 255 & n.compression, e[t++] = n.compression >> 8;
	var m = new Date(null == n.mtime ? Date.now() : n.mtime), p = m.getFullYear() - 1980;
	if ((p < 0 || p > 119) && it(10), ht(e, t, p << 25 | m.getMonth() + 1 << 21 | m.getDate() << 16 | m.getHours() << 11 | m.getMinutes() << 5 | m.getSeconds() >> 1), t += 4, -1 != r && (ht(e, t, n.crc), ht(e, t + 4, r < 0 ? -r - 2 : r), ht(e, t + 8, n.size)), ht(e, t + 12, l), ht(e, t + 14, d), t += 16, null != s && (ht(e, t, c), ht(e, t + 6, n.attrs), ht(e, t + 10, s), t += 14), e.set(i, t), t += l, d) for (var g in u) {
		var h = u[g], f = h.length;
		ht(e, t, +g), ht(e, t + 2, f), e.set(h, t + 4), t += 4 + f;
	}
	return c && (e.set(o, t), t += c), t;
}, bt = function() {
	function e(e) {
		var t;
		this.filename = e, this.c = (t = -1, {
			p: function(e) {
				for (var n = t, i = 0; i < e.length; ++i) n = gt[255 & n ^ e[i]] ^ n >>> 8;
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
		this.ondata || it(5), this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1);
	}, e;
}(), kt = function() {
	function e(e) {
		this.ondata = e, this.u = [], this.d = 1;
	}
	return e.prototype.add = function(e) {
		var t = this;
		if (this.ondata || it(5), 2 & this.d) this.ondata(it(4 + 8 * (1 & this.d), 0, 1), null, !1);
		else {
			var n = yt(e.filename), i = n.length, a = e.comment, r = a && yt(a), s = i != e.filename.length || r && a.length != r.length, o = i + vt(e.extra) + 30;
			i > 65535 && this.ondata(it(11, 0, 1), null, !1);
			var l = new Le(o);
			Mt(l, 0, e, n, s, -1);
			var u = [l], c = function() {
				for (var e = 0, n = u; e < n.length; e++) {
					var i = n[e];
					t.ondata(null, i, !1);
				}
				u = [];
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
					if (c(), d) {
						var e = t.u[m + 1];
						e ? e.r() : t.d = 1;
					}
					d = 1;
				}
			}), g = 0;
			e.ondata = function(n, i, a) {
				if (n) t.ondata(n, i, a), t.terminate();
				else if (g += i.length, u.push(i), a) {
					var r = new Le(16);
					ht(r, 0, 134695760), ht(r, 4, e.crc), ht(r, 8, g), ht(r, 12, e.size), u.push(r), p.c = g, p.b = o + g + 16, p.crc = e.crc, p.size = e.size, d && p.r(), d = 1;
				} else d && c();
			}, this.u.push(p);
		}
	}, e.prototype.end = function() {
		var e = this;
		2 & this.d ? this.ondata(it(4 + 8 * (1 & this.d), 0, 1), null, !0) : (this.d ? this.e() : this.u.push({
			r: function() {
				1 & e.d && (e.u.splice(-1, 1), e.e());
			},
			t: function() {}
		}), this.d = 3);
	}, e.prototype.e = function() {
		for (var e = 0, t = 0, n = 0, i = 0, a = this.u; i < a.length; i++) n += 46 + (p = a[i]).f.length + vt(p.extra) + (p.o ? p.o.length : 0);
		for (var r, s, o, l, u, c = new Le(n + 22), d = 0, m = this.u; d < m.length; d++) {
			var p = m[d];
			Mt(c, e, p, p.f, p.u, -p.c - 2, t, p.o), e += 46 + p.f.length + vt(p.extra) + (p.o ? p.o.length : 0), t += p.b;
		}
		r = c, s = e, o = this.u.length, l = n, u = t, ht(r, s, 101010256), ht(r, s + 8, o), ht(r, s + 10, o), ht(r, s + 12, l), ht(r, s + 16, u), this.ondata(null, c, !0), this.d = 2;
	}, e.prototype.terminate = function() {
		for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
		this.d = 2;
	}, e;
}();
function xt(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function St(e) {
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
function It(e, t) {
	const n = function(e) {
		const t = xt(e.ggirTimestamps), n = xt(e.ggirEnmo);
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
async function At(e, t, n, i, a = 60, r, s) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == i || n >= i) return null;
	const o = new Uint8Array(e.length);
	for (let u = 0; u < e.length; u++) o[u] = 1 === e[u] ? 1 : 0;
	const l = await Rt(o, r && r.length === e.length ? r : new Float64Array(e.length), t, n, i, a, s);
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
async function Rt(e, t, n, i, a, r = 60, s) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == i || null == a || i >= a) return null;
	const o = await async function(e, t, n, i) {
		const a = await j(i).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === a.length ? {
			startIdx: a[0],
			endIdx: a[1]
		} : null;
	}(n, i, a, s);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, u = o.endIdx + 1, c = e instanceof Uint8Array ? e.slice(l, u) : new Uint8Array(e.slice(l, u)), d = t instanceof Float64Array ? t.slice(l, u) : Float64Array.from(t.slice(l, u)), m = await j(s).computeSleepMetrics(c, d, r), p = n[l] ?? 0, g = n[u - 1] ?? p, h = null != m.firstSleepEpochIdx ? n[l + m.firstSleepEpochIdx] ?? p : p, f = null != m.lastSleepEpochIdx ? n[l + m.lastSleepEpochIdx] ?? g : g;
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
		sleepOnset: h,
		sleepOffset: f
	};
}
function Tt(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const i = re(e), a = Array.from(i.timestamps);
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
	const l = k(e, t);
	return {
		timestamps: a,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: s,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
const Nt = /* @__PURE__ */ new Map();
async function Et(e, t) {
	if (Nt.has(e)) return Nt.get(e);
	try {
		const n = await j(t).resolveTimezone(e);
		return Nt.set(e, n), n;
	} catch (it) {
		t?.throwIfAborted(), console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, it);
		return;
	}
}
function $t(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : $e();
}
async function Ot(e) {
	try {
		return $t((await J(e))?.extraSettings);
	} catch (it) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", it), $e();
	}
}
function Lt(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const Bt = {
	zone: null,
	reason: null
};
async function Ct(e, t, n) {
	const i = e.ggirTimezone?.trim();
	let a = null;
	if (i) {
		const e = await Et(i, n);
		if (!e) return Bt;
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
	if (null === a) return me(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : Bt;
	const r = await Et(t, n);
	if (void 0 === r) return Bt;
	if ("iana" !== r?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const s = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== s && (await Oe(r.zone, s, j(n))).includes(a) ? {
		zone: r.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${Lt(a)} is not a ${r.zone} offset`
	};
}
function Dt(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [i, a] of e.entries()) t[i + 1] = t[i] + a.length;
	const n = new Float64Array(t[e.length]);
	for (const [i, a] of e.entries()) n.set(a, t[i]);
	return [n, t];
}
const Pt = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), Ft = [
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
var Wt = Ft.map(() => Pt);
Object.fromEntries(Ft.map(([e], t) => [e, Wt[t]]));
const jt = [
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
async function Ut(e, t, n, i) {
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
async function zt(e, t, n) {
	const i = e instanceof Float64Array ? e : Float64Array.from(e), [a, r] = await (n ?? s()).analysisWindowSlice(i, t);
	return {
		startIndex: a,
		endIndex: r
	};
}
async function Gt(e, t = s()) {
	const n = [...new Set(e)], i = await t.analysisDatesOf(Float64Array.from(n)), a = new Map(n.map((e, t) => [e, i[t] ?? ""]));
	return (e) => a.get(e) ?? "";
}
function Vt(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [i, a] of Object.entries(Me(e, e.nonwearChoiAxis ?? we()))) a && (n[t[i] ?? i] = new Uint8Array(a));
	return n;
}
async function Ht(e, t, n, i = {}) {
	const { signal: a, includeNonwearMasks: r = !1 } = i, s = e.get(t), o = Tt(s, n), l = r && s ? Vt(s) : {}, u = e.get(await I(t, void 0, j(a))), c = o.timestamps[o.timestamps.length - 1], d = u ? Tt(u, n) : null, m = d?.timestamps[0], p = void 0 !== u && null !== d && void 0 !== c && void 0 !== m && m > c, g = o.scoresStale ?? d?.scoresStale ?? null;
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
	const h = o.timestamps.length, f = h + d.timestamps.length, _ = o.algorithmResults.length >= h && d.algorithmResults && d.algorithmResults.length >= d.timestamps.length ? new Uint8Array(f) : null;
	_?.set(o.algorithmResults.subarray(0, h)), d.algorithmResults && _?.set(d.algorithmResults.subarray(0, f - h), h);
	const w = o.activity && d.activity ? new Float64Array(f) : null;
	o.activity && w?.set(o.activity.subarray(0, h)), d.activity && w?.set(d.activity.subarray(0, f - h), h);
	const y = r ? Vt(u) : {}, v = {};
	for (const M of jt) {
		const e = l[M], t = y[M];
		if (!e && !t) continue;
		const n = new Uint8Array(f);
		e && n.set(e.subarray(0, h)), t && n.set(t.subarray(0, f - h), h), v[M] = n;
	}
	return {
		timestamps: [...o.timestamps, ...d.timestamps],
		algorithmResults: _,
		activity: w,
		masks: v,
		scoresStale: null
	};
}
async function qt(e, t, n, i) {
	const a = await n.files.get(e.fileId);
	if (!a) return;
	const r = /* @__PURE__ */ new Map();
	for (const s of [e.date, await I(e.date, void 0, j(i))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, s]).first();
		t && r.set(s, t);
	}
	await async function(e, t, n, i) {
		const { date: a, file: r, activityMap: s, verdict: o } = t, l = t.spanning ?? await Ht(s, a, o, { signal: i });
		if (null !== l.scoresStale || !l.algorithmResults) return e.sleepMarkers.map(() => null);
		const u = function(e, t) {
			return JSON.stringify([
				t.seriesRevision ?? 0,
				t.epochLengthSeconds || 60,
				e.algorithm,
				e.sleepMarkers.map((e) => [e.onsetTimestamp ?? null, e.offsetTimestamp ?? null])
			]);
		}(e, r);
		if (e.periodMetrics?.inputs === u) return e.periodMetrics.metrics;
		const { timestamps: c, algorithmResults: d } = l, m = [];
		for (const p of e.sleepMarkers) m.push(d && c.length > 0 && p.onsetTimestamp && p.offsetTimestamp ? await Rt(d, l.activity ?? new Float64Array(d.length), l.timestamps, p.onsetTimestamp, p.offsetTimestamp, r.epochLengthSeconds || 60, i) : null);
		if (void 0 !== e.id) try {
			await U(n, [n.markers], () => le(e.id, {
				inputs: u,
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
Object.fromEntries(Object.values(A).map((e) => [e, e === A.ggir_saved ? de : ye(e)]));
const Kt = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], Yt = ["under-series", "over-series"], Jt = ["full-resolution-v1", "min-max-gap-envelope-v1"], Zt = {
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
function Xt(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? Qt(t, "expected an object") : e;
}
function en(e, t) {
	return Array.isArray(e) ? e : Qt(t, "expected an array");
}
function tn(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : Qt(t, "expected a finite number");
}
function nn(e, t) {
	const n = tn(e, t);
	return n <= 0 ? Qt(t, "expected a positive number") : n;
}
function an(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : Qt(t, "expected a safe integer");
}
function rn(e, t) {
	const n = an(e, t);
	return n < 0 ? Qt(t, "expected a non-negative safe integer") : n;
}
function sn(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? Qt(t, "expected a boolean") : { [n]: e };
}
function on(e, t) {
	return "string" != typeof e || 0 === e.length ? Qt(t, "expected a non-empty string") : e;
}
function ln(e, t) {
	return "string" == typeof e && Kt.includes(e) ? e : Qt(t, "expected a supported tone");
}
function un(e, t) {
	return "string" == typeof e && Yt.includes(e) ? e : Qt(t, "expected a supported phase");
}
function cn(e, t) {
	const n = Xt(e, t), i = tn(n.min, `${t}.min`), a = tn(n.max, `${t}.max`);
	return a <= i || !Number.isFinite(a - i) ? Qt(t, "expected a finite ascending range") : {
		min: i,
		max: a
	};
}
function dn(e, t) {
	const n = `series[${t}]`, i = Xt(e, n), a = en(i.points, `${n}.points`);
	let r = Number.NEGATIVE_INFINITY;
	const s = (e) => `${n}.points[${e}]`, o = a.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return Qt(s(t), "expected an object");
		const n = e, i = n.timestamp;
		if ("number" != typeof i || !Number.isFinite(i)) return Qt(`${s(t)}.timestamp`, "expected a finite number");
		if (i <= r) return Qt(`${s(t)}.timestamp`, "expected strictly ascending timestamps");
		r = i;
		const a = n.value;
		return null === a || "number" == typeof a && Number.isFinite(a) ? {
			timestamp: i,
			value: a
		} : Qt(`${s(t)}.value`, "expected a finite number");
	});
	return {
		tone: ln(i.tone, `${n}.tone`),
		strokeWidth: nn(i.strokeWidth, `${n}.strokeWidth`),
		valueDomain: cn(i.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function mn(e, t) {
	const n = `overlays[${t}]`, i = Xt(e, n), a = {
		phase: un(i.phase, `${n}.phase`),
		order: an(i.order, `${n}.order`),
		tone: ln(i.tone, `${n}.tone`)
	};
	if ("interval" === i.kind) {
		const e = tn(i.startTimestamp, `${n}.startTimestamp`), t = tn(i.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? Qt(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...a,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === i.kind ? {
		kind: "threshold",
		...a,
		value: tn(i.value, `${n}.value`),
		...sn(i.draggable, `${n}.draggable`, "draggable"),
		...sn(i.selected, `${n}.selected`, "selected"),
		...sn(i.handle, `${n}.handle`, "handle"),
		...void 0 === i.label ? {} : { label: on(i.label, `${n}.label`) }
	} : "instant" === i.kind ? {
		kind: "instant",
		...a,
		timestamp: tn(i.timestamp, `${n}.timestamp`)
	} : Qt(`${n}.kind`, "expected interval, threshold, or instant");
}
function pn(e, t, n) {
	const i = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(i) ? i : Qt("projection", "expected a finite pixel coordinate");
}
function gn(e, t, n) {
	const i = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(i) ? i : Qt("projection", "expected a finite pixel coordinate");
}
function hn(e) {
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
function fn(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function _n(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, i = t.plotArea.height, a = Zt[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const r = fn(pn(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), s = fn(pn(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${hn(r)}" y="0" width="${hn(Math.max(1, s - r))}" height="${hn(i)}" fill="${a}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const r = gn(e.value, t.valueDomain, i), s = !0 === e.selected, o = s ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${s ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${hn(r)}" x2="${hn(n)}" y2="${hn(r)}" stroke="${a}" stroke-width="${s ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const r = pn(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${hn(r)}" y1="0" x2="${hn(r)}" y2="${hn(i)}" stroke="${a}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function wn(e) {
	const t = function(e) {
		const t = Xt(e, "scene");
		if (2 !== t.version) return Qt("version", "expected 2");
		const n = Xt(t.grid, "grid"), i = {
			strategy: (a = n.strategy, "string" == typeof a && Jt.includes(a) ? a : Qt("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: rn(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: rn(n.renderedPointCount, "grid.renderedPointCount")
		};
		var a;
		if (i.renderedPointCount > i.sourcePointCount) return Qt("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === i.strategy && i.renderedPointCount !== i.sourcePointCount) return Qt("grid", "full-resolution strategy requires equal point counts");
		const r = Xt(t.size, "size"), s = {
			width: nn(r.width, "size.width"),
			height: nn(r.height, "size.height")
		}, o = Xt(t.plotArea, "plotArea"), l = {
			left: tn(o.left, "plotArea.left"),
			top: tn(o.top, "plotArea.top"),
			width: nn(o.width, "plotArea.width"),
			height: nn(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > s.width || l.top + l.height > s.height) return Qt("plotArea", "expected bounds contained by size");
		const u = cn(t.viewport, "viewport"), c = cn(t.valueDomain, "valueDomain"), d = en(t.series, "series").map(dn);
		if (0 === d.length && 0 !== i.renderedPointCount) return Qt("grid.renderedPointCount", "expected zero when series is empty");
		const m = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let f = 0; f < d.length; f++) {
			const e = d[f]?.points ?? [];
			if (e.length !== i.renderedPointCount) return Qt(`series[${f}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return Qt(`series[${f}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const p = en(t.overlays, "overlays").map(mn), g = null === t.cursorTimestamp ? null : tn(t.cursorTimestamp, "cursorTimestamp");
		let h = null;
		if (null !== t.selection) {
			const e = Xt(t.selection, "selection"), n = tn(e.startTimestamp, "selection.startTimestamp"), i = tn(e.endTimestamp, "selection.endTimestamp");
			if (i <= n) return Qt("selection", "expected a half-open ascending interval");
			h = {
				startTimestamp: n,
				endTimestamp: i
			};
		}
		return {
			version: 2,
			grid: i,
			size: s,
			plotArea: l,
			viewport: u,
			valueDomain: c,
			series: d,
			overlays: p,
			cursorTimestamp: g,
			selection: h
		};
	}(e), n = hn(t.size.width), i = hn(t.size.height), a = hn(t.plotArea.width), r = hn(t.plotArea.height), s = _n(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
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
			const t = pn(o.timestamp, n.viewport, r);
			let l = s.get(o.value);
			void 0 === l && (l = hn(gn(o.value, e.valueDomain, n.plotArea.height)), s.set(o.value, l)), i += `${a ? "L" : "M"}${hn(t)} ${l}`, a = !0;
		}
		return 0 === i.length ? "" : `<path data-series-index="${t}" d="${i}" fill="none" stroke="${Zt[e.tone]}" stroke-width="${hn(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = _n(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${i}" viewBox="0 0 ${n} ${i}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${i}" fill="#ffffff"/><svg x="${hn(t.plotArea.left)}" y="${hn(t.plotArea.top)}" width="${a}" height="${r}" viewBox="0 0 ${a} ${r}" overflow="hidden"><rect x="0" y="0" width="${a}" height="${r}" fill="#ffffff"/>${s}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = fn(pn(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), i = fn(pn(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${hn(n)}" y="0" width="${hn(Math.max(1, i - n))}" height="${hn(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = pn(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${hn(n)}" y1="0" x2="${hn(n)}" y2="${hn(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${hn(t.plotArea.left)}" y="${hn(t.plotArea.top)}" width="${a}" height="${r}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
const yn = "local-export-streams";
var vn = class extends Error {
	file;
	step;
	constructor(e, t, n) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t;
	}
};
const Mn = 65536, bn = "manifest.json", kn = "Duplicate export entry: ", xn = "Reading recordings", Sn = "Writing ZIP";
function In(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function An(e) {
	return String(e).padStart(2, "0");
}
function Rn(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const Tn = [
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
new Set(Tn.slice(16).map(([e]) => e));
var Nn = class extends Error {};
const En = "edit_recompute_requires_ms2_ms3", $n = /* @__PURE__ */ new Set([
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
	"insufficient_pair",
	"scores_from_another_config"
]), On = v.invalid_night_row.markerTypeCell, Ln = new Set(Tn.map(([, e]) => e)), Bn = /* @__PURE__ */ new Set([
	x.ggir_sleepparam.header,
	x.ggir_guider_onset.header,
	x.ggir_guider_wakeup.header,
	x.ggir_guider_spt_duration.header,
	x.ggir_error_onset.header,
	x.ggir_error_wake.header,
	x.ggir_error_dur.header,
	x.ggir_fraction_night_invalid.header,
	x.ggir_duration_sib_wakinghours.header,
	x.ggir_number_sib_sleepperiod.header,
	x.ggir_number_sib_wakinghours.header,
	x.ggir_duration_sib_wakinghours_atleast15min.header,
	x.ggir_guider_onset_ts.header,
	x.ggir_guider_wakeup_ts.header,
	x.ggir_page.header,
	x.ggir_daysleeper.header,
	x.ggir_sleeplog_id.header,
	x.ggir_guider.header,
	x.ggir_longitudinal_axis.header
]), Cn = /* @__PURE__ */ new Set([
	x.ggir_sleep_duration_in_spt.header,
	x.ggir_waso.header,
	x.ggir_number_of_awakenings.header,
	x.ggir_sleeplatency.header,
	x.ggir_sleepefficiency.header
]), Dn = /* @__PURE__ */ new Set([
	...Cn,
	x.ggir_nonwear_perc_spt.header,
	x.ggir_sleeponset.header,
	x.ggir_wakeup.header,
	x.ggir_spt_duration.header,
	x.ggir_guider_onset.header,
	x.ggir_guider_wakeup.header,
	x.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	x.ggir_sleeponset_ts.header,
	x.ggir_wakeup_ts.header,
	x.ggir_guider_onset_ts.header,
	x.ggir_guider_wakeup_ts.header,
	x.ggir_daysleeper.header,
	x.ggir_cleaningcode.header,
	x.ggir_guider.header,
	x.ggir_error_onset.header,
	x.ggir_error_wake.header,
	x.ggir_error_dur.header,
	x.ggir_fraction_night_invalid.header,
	x.ggir_duration_sib_wakinghours.header,
	x.ggir_number_sib_sleepperiod.header,
	x.ggir_number_sib_wakinghours.header,
	x.ggir_duration_sib_wakinghours_atleast15min.header
]), Pn = /* @__PURE__ */ new Set([
	x.ggir_id.header,
	x.ggir_filename.header,
	x.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	x.ggir_sleep_regularity_index1.header,
	x.ggir_sri_fraction_valid.header,
	x.ggir_calendar_date.header,
	x.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	x.ggir_cleaningcode.header,
	x.ggir_guider.header,
	x.ggir_sleeplog_used.header,
	x.ggir_acc_available.header,
	x.ggir_daysleeper.header
]), Fn = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), Wn = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), jn = new Set(Object.values(x).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), Un = new Set(Object.values(x).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), zn = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim());
function Gn(e, t, n, i) {
	const a = (e) => n.get(e) ?? "", r = a(t + "_missing_reason");
	if (r && !$n.has(r)) return null;
	const s = r || null;
	if (e.startsWith("part2_")) return "source_reported_missing";
	if (e.includes("_ggir_review")) {
		if (s) return s;
		const e = a("review_source");
		return "ggir" === e ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const o = a(x.marker_type.header) === On || "actiware_intervals_export.csv" === e && a(x.interval_kind.header) === On;
	if (!function(e, t) {
		return "actiware_intervals_export.csv" === e ? Ln.has(t) : "actiware_sleep_wake_export.csv" === e ? t === x.actiware_sleep_wake.header || t === x.actiware_wake_threshold.header : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			x.ggir_id.header,
			x.ggir_filename.header,
			x.ggir_calendar_date.header,
			x.ggir_weekday.header,
			x.ggir_sleeplog_id.header,
			x.ggir_guider_corrected.header,
			x.ggir_cleaningcode.header
		].includes(t) : jn.has(t);
	}(e, t)) return s || (o ? "invalid_night" : "Manual Nonwear" === a(x.marker_type.header) ? "manual_nonwear_period" : null);
	if ("actiware_intervals_export.csv" === e && Ln.has(t)) {
		if (o) return "invalid_night";
		const e = a(x.interval_kind.header).toLowerCase(), n = a(x.interval_start_local.header);
		if ("daily" === e && n && n === a(x.interval_end_local.header)) return "zero_interval_rows";
		if ([
			x.actiware_onset_latency.header,
			x.actiware_efficiency.header,
			x.actiware_waso.header
		].includes(t)) {
			if ("sleep" !== e) return "not_applicable_to_row";
			if (zn(a(x.actiware_duration.header))) return null;
			const t = a(x.interval_start_local.header), n = a(x.interval_end_local.header);
			if (!t || !n) return null;
			let r = !1;
			for (const e of i) if (e.get(x.filename.header) === a(x.filename.header) && "rest" === e.get(x.interval_kind.header) && (e.get(x.interval_start_local.header) ?? "") <= t && n <= (e.get(x.interval_end_local.header) ?? "")) {
				r = !0;
				break;
			}
			return r ? null : "no_eligible_rest";
		}
		if (zn(a(x.actiware_duration.header))) return null;
		if (t === x.actiware_off_wrist.header || t === x.actiware_off_wrist_percent.header) return t === x.actiware_off_wrist_percent.header && "0.00" === a(x.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === s ? s : null;
		if (t === x.actiware_avg_ac_per_min.header) return 100 === Number(a(x.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			x.actiware_invalid_sw_percent.header,
			x.actiware_wake_percent.header,
			x.actiware_sleep_percent.header
		].includes(t)) {
			if ("0.00" === a(x.actiware_duration.header)) return "zero_interval_rows";
			const e = !zn(a(x.actiware_wake_time.header)) && !zn(a(x.actiware_sleep_time.header)) && 0 === Number(a(x.actiware_wake_time.header)) && 0 === Number(a(x.actiware_sleep_time.header));
			return t === x.actiware_invalid_sw_percent.header || 100 !== Number(a(x.actiware_invalid_sw_percent.header)) && !e ? null : "no_scored_epochs";
		}
		const r = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(t);
		if (r) {
			const e = r[1];
			return "0.00" === a(x.actiware_duration.header) ? "zero_interval_rows" : zn(a("%Invalid " + e)) ? "source_reported_missing" === s ? s : null : t.startsWith("TALT ") && !zn(a("Exposure " + e)) ? "threshold_unconfigured" : 100 === Number(a("%Invalid " + e)) ? "no_valid_epochs" : null;
		}
		return null;
	}
	if ("actiware_sleep_wake_export.csv" === e) {
		if (t === x.actiware_sleep_wake.header) return "no_valid_epochs" === s ? s : null;
		if (t === x.actiware_wake_threshold.header) return "not_computed_for_export" === s ? s : null;
	}
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return Bn.has(t) ? "not_computed_for_export" === s ? s : null : Cn.has(t) ? "no_scored_epochs" === s || "not_applicable_to_row" === s || "scores_from_another_config" === s ? s : null : s;
	if ("sleep_export_wide.csv" === e) return s;
	if ("summary_export.csv" === e && t === x.sleep_regularity_index.header) return s && [
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
		const r = f.find((e) => e.method === n);
		return i && r?.cutpoint && !Number.isFinite(r.cutpoint[i]) || "MIMS Unit Total" === t && "mims" !== n ? "not_applicable_to_row" : "ggir_enmo" === n ? Fn.has(t) ? "source_reported_missing" === s ? s : null : Wn.has(t) && "not_computed_for_export" === s ? s : null : "mims" === n && [
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
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === a(x.marker_type.header) ? "manual_nonwear_period" : null : "true" === a(x.is_invalid_night.header).toLowerCase() && a(x.marker_type.header) === On ? "invalid_night" : t === x.total_nap_minutes.header && "0" === a(x.nap_count.header) ? "not_applicable_to_row" : [
		x.l5_hour.header,
		x.m10_hour.header,
		x.sleep_midpoint_hour.header,
		x.valid_wear_minutes.header
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
const Vn = "missing_reasons.csv";
function Hn(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(_).join(","))].map((e) => e + "\n").join("");
}
function qn(e, t) {
	const n = [
		x.filename.header,
		x.ggir_filename.header,
		"ggir_filename",
		x.participant_id.header,
		x.ggir_id.header,
		x.study_date.header,
		"Analysis Date",
		x.ggir_calendar_date.header,
		"ggir_calendar_date",
		x.interval_kind.header,
		x.marker_type.header,
		x.interval_start_local.header,
		x.epoch_local.header,
		"Method"
	].flatMap((t) => {
		const n = e.get(t);
		return n ? [t + "=" + n] : [];
	});
	return n.length ? n.join("|") : "row=" + String(t);
}
function Kn(e, t) {
	let n = !1, i = 0;
	for (let a = 0; a < e.length; a += 1) if ("\"" === e[a]) n && "\"" === e[a + 1] ? a += 1 : n = !n;
	else if ("," === e[a] && !n && ++i === t) return e.slice(0, a);
	return e;
}
function* Yn(e, t, n = !0, i) {
	const { headerlessColumns: a, fullRowCsv: r, rowOffset: s = 0, contextRows: o } = i ?? {}, l = a?.length ? a.join(",") + "\n" + e : e, u = m(l);
	if (u.unterminatedQuotedField) throw new Error(t + ": unterminated CSV cell");
	const [c, ...p] = u.records;
	if (!c) return {
		csv: e,
		withReason: 0,
		withoutReason: 0
	};
	const g = d(c.text), h = g.findIndex((e) => e.endsWith("_missing_reason"));
	if (h >= 0 && g.slice(h).some((e) => !e.endsWith("_missing_reason"))) throw new Error(t + ": internal reason fields must trail data fields");
	const f = g.map((e, t) => ({
		header: e,
		index: t
	})).filter(({ header: e }) => "" !== e && !e.endsWith("_missing_reason")), _ = p.map((e) => d(e.text)), w = _.map((e) => new Map(g.map((t, n) => [t, e[n] ?? ""]))), y = r ? m(r).records : [], v = y[0] ? d(y[0].text) : [], M = r ? y.slice(1).map((e) => d(e.text)) : [];
	if (r && f.length > 0 && M.length !== _.length) throw new Error(t + ": complete-row evidence count differs");
	const b = r ? M.map((e) => new Map(v.map((t, n) => [t, e[n] ?? ""]))) : w;
	let k = 0, x = 0;
	for (let d = 0; d < _.length; d += 1) {
		const e = _[d], n = w[d];
		for (const { header: i, index: a } of f) {
			if ("edit_recompute_requires_ms2_ms3" === b[d].get(i + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
				yield {
					file: t,
					row: s + d + 1,
					key: qn(n, s + d + 1),
					column: i,
					reason: En
				}, k += 1;
				continue;
			}
			const r = e[a] ?? "";
			if (!zn(r) || "" !== r.trim() && Un.has(i)) continue;
			const l = Gn(t, i, b[d], o?.() ?? b);
			l ? (k += 1, yield {
				file: t,
				row: s + d + 1,
				key: qn(n, s + d + 1),
				column: i,
				reason: l
			}) : (x += 1, console.warn("WARNING: unreasoned missing export cell"));
		}
	}
	if (n && x > 0) throw new Nn(t + ": " + String(x) + " unreasoned missing metric cells");
	return h < 0 ? {
		csv: e,
		withReason: k,
		withoutReason: x
	} : {
		csv: [Kn(c.text, h), ...p.map((e) => Kn(e.text, h))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: k,
		withoutReason: x
	};
}
const Jn = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], Zn = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : _(String(e)), Qn = {
	nights: "part4_nightsummary_ggir_review.csv",
	days: "part5_daysummary_ggir_review.csv"
};
function Xn(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return l(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? l(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function ei(e, t) {
	const n = new Map(_e(e).map((e) => [e.night, e.nightDate]));
	return (e, i, a = !0) => {
		const r = e.columns.indexOf("nights" === t ? x.ggir_night.header : "night_number"), s = Number(e.values[r]?.[i]), o = n.get(s);
		if (a && o) return o;
		const l = e.values[e.columns.indexOf(x.ggir_calendar_date.header)]?.[i];
		return Xn(l);
	};
}
async function ti(t, n, a, r) {
	const s = "nights" === n ? x.ggir_night.header : "window_number", o = j(a), l = await Promise.all(t.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await he(e.imported, e.edits, t.night, a)])))), u = (await Promise.all(t.map(async (e, t) => {
		const i = e.current ?? e.imported, a = (e) => "nights" === n ? e.nights : e.days, r = "nights" === n ? i.nightRecomputed : i.dayRecomputed, s = "nights" === n ? e.imported.nightChecks : e.imported.dayChecks, u = l[t].filter((e) => null != e[1]), c = ei(e.imported, n), d = new Set(e.edits.map((e) => e.night)), m = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, p = /* @__PURE__ */ new Set();
		if ("days" === n && m) {
			const t = await Promise.all(_e(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), i = t.nightDate, a = n.onset < "12:00:00" ? await I(i, void 0, o) : i, r = n.wake <= n.onset ? await I(a, void 0, o) : a;
				return [Math.min(t.onsetMs, Date.parse(`${a}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${r}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: i.days.rows }, async (e, n) => {
				const a = Number(i.days.values[i.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(a)) return void p.add(n);
				const r = c(i.days, n, !1), s = i.days.values[i.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof s ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(s) : null;
				if (!r || !l) return;
				const u = Date.parse(`${r}T${l[1]}Z`), m = l[2] < l[1] ? await I(r, void 0, o) : r, g = Date.parse(`${m}T${l[2]}Z`);
				t.some(([e, t]) => u <= t && g >= e) && p.add(n);
			}));
		}
		return {
			source: e.ggirCorrections ? "ggir_corrected" : "ggir",
			editedDayRows: p,
			editRecomputeUnavailable: m,
			editedNights: d,
			scoredDates: e.scoredDates,
			invalidDates: e.invalidDates,
			dateOf: c,
			table: a(i),
			ggir: a(e.imported),
			savedNights: e.imported.nights,
			recomputed: r,
			provenance: (e) => "nights" === n ? u.find(([t]) => t === e)?.[1] ?? "" : u.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(s.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === u.length) return null;
	const c = r ? r.filter((e) => !e.endsWith("_missing_reason") && !Jn.includes(e)) : [];
	for (const e of r ? [] : u) for (const t of e.table.columns) t.endsWith("_missing_reason") || c.includes(t) || c.push(t);
	const d = new Set("nights" === n ? S.ggir_review_night_extension.map((e) => x[e].header) : []), m = r ? c.filter((e) => r.includes(e + "_missing_reason")) : c.filter((e) => d.has(e) || u.some((e) => e.editRecomputeUnavailable || "ggir_corrected" === e.source)), p = [[
		...c.map(_),
		...Jn,
		...m.map((e) => _(e + "_missing_reason")),
		...Jn.map((e) => e + "_missing_reason")
	].join(",")], g = (e, t) => {
		const n = e.columns.indexOf(s);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: h, ggir: f, recomputed: w, provenance: y, checks: v, scoredDates: M, invalidDates: b, dateOf: k, editRecomputeUnavailable: S, editedNights: I, editedDayRows: A, savedNights: R, source: T } of u) {
		const t = R.columns.filter((e) => !Dn.has(e)), a = t.filter((e) => {
			const t = R.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return R.values[t].some((e, t) => {
				const i = Number(R.values[R.columns.indexOf(x.ggir_night.header)]?.[t]), a = n.has(i) && !Object.is(n.get(i), e);
				return n.set(i, e), a;
			});
		}), r = /* @__PURE__ */ new Set(), s = (e) => Array.from({ length: f.rows }, (e, t) => t).find((t) => !r.has(t) && g(f, t) === g(h, e) && a.every((n) => Object.is(f.values[f.columns.indexOf(n)]?.[t] ?? null, h.values[h.columns.indexOf(n)]?.[e] ?? null))), o = new Set(c.filter((e) => "nights" === n ? Dn.has(e) : !Pn.has(e) && !t.includes(e))), l = (a, r, s, l) => {
			const u = v.get(g(a, r));
			return [
				...c.map((e) => {
					if ("invalid" === s && ("nights" === n ? Dn.has(e) : /sleep|spt|waso|wake|onset|guider/i.test(e) && !t.includes(e))) return "";
					const i = a.columns.indexOf(e);
					return i < 0 ? "" : Zn(a.values[i]?.[r]);
				}),
				s,
				u?.status ?? "",
				_((u?.reasons ?? []).join(";")),
				_((u?.diffs ?? []).map((e) => e.column).join(";")),
				_(l),
				...m.map((t) => "invalid" !== s || d.has(t) && t !== x.ggir_nonwear_perc_spt.header ? S && s === T && o.has(t) && ("days" === n ? A.has(r) : I.has(g(a, r))) ? En : d.has(t) ? null != e(a, t, r) ? "" : Zn(i(a, t + "_missing_reason", r) ?? "source_reported_missing") : s === T ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
				"",
				u ? "" : "not_computed_for_export",
				u?.reasons.length ? "" : "not_applicable_to_row",
				u?.diffs.length ? "" : "not_applicable_to_row",
				l ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let e = 0; e < h.rows; e += 1) {
			const t = k(h, e);
			if (M && (!t || !M.has(t))) continue;
			const n = s(e);
			if (null != n && r.add(n), t && b?.has(t)) {
				null != n && p.push(l(f, n, T, "")), p.push(l(h, e, "invalid", ""));
				continue;
			}
			if (!w[e]) {
				p.push(l(h, e, T, ""));
				continue;
			}
			const i = g(h, e);
			null != n && p.push(l(f, n, T, "")), p.push(l(h, e, "recomputed", y(i)));
		}
		for (let e = 0; e < f.rows; e += 1) {
			if (r.has(e)) continue;
			const t = k(f, e);
			(!M || t && M.has(t)) && (p.push(l(f, e, T, "")), t && b?.has(t) && p.push(l(f, e, "invalid", "")));
		}
	}
	return p.length > 1 ? `${p.join("\n")}\n` : null;
}
const ni = S.ggir_part4_nightsummary_csv, ii = ni.map((e) => x[e].header), ai = [
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
], ri = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function si(e, t) {
	const n = x[e], i = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof i ? _(i) : In(i, { integral: n.ggirIntegral ?? !1 });
}
function oi(e, t = "legacy-recording", n, i) {
	const a = [], r = [];
	for (const o of e) o.states && 0 !== o.timestamps.length && (r.push(o.states.subarray(0, Math.min(o.timestamps.length, o.states.length))), a.push({
		seriesId: t,
		...void 0 === n ? {} : { epochLengthSeconds: n },
		timestamps: o.timestamps,
		states: o.states
	}));
	const s = new Uint8Array(r.reduce((e, t) => e + t.length, 0));
	r.reduce((e, t) => (s.set(t, e), e + t.length), 0);
	const l = e.length > 0 && e.every((e) => null == e.states) ? "no_scored_epochs" : "no_valid_epochs";
	return 0 === s.length ? Promise.resolve({
		sri: null,
		fractionValid: null,
		sriMissingReason: l,
		fractionValidMissingReason: l
	}) : j(i).validStateFraction(s).then(async (e) => {
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
		const r = (void 0 === n || 86400 % n == 0) && [...t].some(([e, n]) => n && t.get(e + 86400)), s = r ? null : "insufficient_pair", l = await async function(e, t) {
			const n = Array.isArray(e) ? e : [e], i = n.map((e) => ({
				...void 0 === e.seriesId ? {} : { series_id: e.seriesId },
				...void 0 === e.epochLengthSeconds ? {} : { epoch_length_seconds: e.epochLengthSeconds }
			})), [a, r] = Dt(n.map((e) => e.timestamps)), [s, l] = Dt(n.map((e) => e.states));
			return j(t).sleepRegularityIndex(o([
				JSON.stringify(i),
				a,
				r,
				s,
				l
			], [
				a.buffer,
				r.buffer,
				s.buffer,
				l.buffer
			]));
		}(a, i);
		if (r && null == l) throw new Error("SRI producer returned a blank despite valid pairs");
		return {
			sri: l,
			fractionValid: e,
			sriMissingReason: s,
			fractionValidMissingReason: null
		};
	});
}
async function li(e, t, n, i = {}) {
	const { signal: a } = i, r = e.participantId ?? e.filename, s = Q(n.values(), i.algorithm), o = [];
	for (const [u, y] of n) {
		if (!Mi(u, i.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = Tt(y, s);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await oi(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, a), { sri: c, fractionValid: d } = l, m = "stale" === s.status ? "scores_from_another_config" : null, p = m ?? l.sriMissingReason, g = m ?? l.fractionValidMissingReason, h = [];
	for (const y of [...t.keys()].sort()) {
		const e = t.get(y);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === u.MAIN_SLEEP && null != t.onsetTimestamp && h.push({
			date: y,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const f = [[
		...ii,
		...ai.map((e) => `${x[e].header}_missing_reason`),
		...ri.map((e) => `${x[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: u, onsetTs: y, wakeupTs: v } of h) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == v ? "not_applicable_to_row" : m ?? "no_scored_epochs"
		};
		if (null != v) {
			const { timestamps: i, algorithmResults: r } = await Ht(n, u, s, { signal: a });
			if (r && i.length > 0) {
				t.missingReason = null;
				const n = await At(r, i, y, v, e.epochLengthSeconds || 60, null, a);
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
	const w = await j(a).ggirManualNightClocks(h.map((e) => e.date), Float64Array.from(h, (e) => e.onsetTs), Float64Array.from(h, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let u = 0; u < h.length; u++) {
		const { onsetTs: t, wakeupTs: n } = h[u], i = w[u], { tstH: a, nAwak: s, latency: o, efficiency: l } = _[u], m = {
			ggir_id: r,
			ggir_night: u + 1,
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
			ggir_sri_fraction_valid: d,
			ggir_longitudinal_axis: null,
			ggir_guider_corrected: !1
		};
		f.push([
			...ni.map((e) => si(e, m[e])),
			...ai.map((e) => {
				const t = ni.indexOf(e);
				return t >= 0 && null == m[ni[t]] ? "not_computed_for_export" : "";
			}),
			...ri.map((e) => {
				const t = ni.indexOf(e);
				return t >= 0 && null == m[ni[t]] ? _[u].missingReason ?? "" : "";
			}),
			p ?? "",
			g ?? ""
		].join(","));
	}
	return f.join("\n") + "\n";
}
function ui(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const ci = "actogram_report.html";
function di(e) {
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
function pi(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: i } = di(n), a = [e, i].filter(Boolean);
		t.set(n, 0 === a.length ? "part4_nightsummary.csv" : `part4_nightsummary_${a.join("_")}.csv`);
	}
	return t;
}
function gi(e) {
	const { algoKey: t, ruleKey: n } = di(e), i = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
	return t || n ? n ? `${i(t)} / ${i(n)}` : i(t) : "Legacy / Unscoped";
}
function hi(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : ue(e);
}
function fi(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function _i(e, t) {
	const n = [], i = [], a = (e) => {
		for (const t of yi(e)) n.push(t), i.push(t.byteLength);
	};
	a(`<section class="pid-sec${0 === e ? " initial" : ""}" id="sec-${e}">`), a(`  <h2 class="pid-lbl">${ui(t.pid)}</h2>`);
	for (const [r, s] of t.charts.entries()) a(`  <div class="algo-block" data-algorithm-key="${ui(s.algoKey)}">`), a(`    <div class="algo-lbl">${ui(gi(s.algoKey))}</div>`), s.stale && a(`    <div class="algo-stale" role="status">${ui(s.stale)}</div>`), a(`    <div class="cwrap" id="c${e}_${r}">`), n.push(s.plot), i.push(...s.plotLengths), a(`      <button type="button" class="svg-btn" data-download-name="${ui(s.svgFilename)}">Download SVG</button>`), a(s.meta), a("    </div>"), a("  </div>");
	return a("</section>"), {
		blob: new Blob(n),
		lengths: i
	};
}
const wi = ["<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>", "</body>\n</html>"];
function* yi(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let i = Math.min(e.length, n + Mn / 4);
		i < e.length && /[\uD800-\uDBFF]/u.test(e[i - 1]) && (i -= 1), yield t.encode(e.slice(n, i)), n = i;
	}
	yield t.encode("\n");
}
function vi(e) {
	return new TextEncoder().encode(e);
}
function Mi(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function bi({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: i, layouts: a, only: r }) {
	const s = {}, o = (e) => void 0 === r || r === e;
	for (const [c, d] of i ?? pi([...e.keys()])) {
		const t = e.get(c);
		t?.length && o(d) && (s[d] = vi(`${t.join("\n")}\n`));
	}
	for (const [c, d] of Object.entries(function(e, t) {
		const n = /* @__PURE__ */ new Map();
		for (const i of e) for (const [e, t] of Object.entries(i.part2Reports ?? {})) n.set(e, [...n.get(e) ?? [], t]);
		return Object.fromEntries([...n].map(([e, n]) => {
			const i = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], a = [i.map(_).join(",")];
			for (const t of n) for (let e = 0; e < t.rows; e++) a.push(i.map((n) => Zn(t.values[t.columns.indexOf(n)]?.[e])).join(","));
			return [e, a.join("\n") + "\n"];
		}));
	}(t, a))) o(c) && (s[c] = vi(d));
	const l = o(Qn.nights) ? await ti(t, "nights", n, a?.get(Qn.nights)) : null;
	l && (s[Qn.nights] = vi(l));
	const u = o(Qn.days) ? await ti(t, "days", n, a?.get(Qn.days)) : null;
	return u && (s[Qn.days] = vi(u)), s;
}
async function ki(e, t, n) {
	n?.throwIfAborted();
	const i = function(e, t) {
		const { signal: n } = t, { username: i, dateRange: a, snapshot: r } = e, s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const c = Fr(r, Nr.ggirReport, e.map((e) => e.id)), d = await Promise.all(e.map((e) => zr(r, e.id, i, n)));
				for (const [i, r] of e.entries()) {
					const e = c.files.find((e) => e.id === r.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: m, markersByAlgo: p, selected: g } = d[i], f = Vr(c, e.id), _ = new Map([...p].filter(([e]) => Mi(e, a))), w = /* @__PURE__ */ new Map();
					for (const [t, n] of _) for (const e of n) {
						const n = mi(e);
						let i = w.get(n);
						i || (i = /* @__PURE__ */ new Map(), w.set(n, i)), i.set(t, e);
					}
					const y = /* @__PURE__ */ new Set();
					for (const [t, n] of _) for (const e of n) h(e) && y.add(t);
					if (m) {
						const t = new Set([...g].filter(([, e]) => "invalid" === ce(void 0, e).kind).map(([e]) => e)), n = m;
						u.push({
							...n,
							...a ? { scoredDates: new Set(e.availableDates.filter((e) => Mi(e, a))) } : {},
							invalidDates: t
						});
					}
					const v = [...y].sort(), M = v[0], b = v[v.length - 1], k = [], x = [];
					for (const n of t.charts ? [...f.keys()].sort() : []) if (Mi(n, a) && (null == M || null == b || n >= M && n <= b)) {
						const e = f.get(n), t = re({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), i = t.timestamps, a = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < i.length; n++) k.push(i[n]), x.push(a[n]);
					}
					const S = [];
					for (const [t, i] of w) {
						const r = di(t).algoKey, l = m ? "" : await li(e, i, f, {
							...r ? { algorithm: r } : {},
							...a ? { dateRange: a } : {},
							signal: n
						}), u = m ? [] : l.replace(/\n$/u, "").split("\n");
						if (u.length > 0) {
							const e = s.get(t) ?? [];
							s.set(t, e), o.has(t) ? e.push(...u.slice(1)) : (e.push(...u), o.add(t));
						}
						const c = [], d = [];
						for (const e of i.values()) {
							for (const t of e.sleepMarkers) null != t.onsetTimestamp && null != t.offsetTimestamp && c.push({
								o: t.onsetTimestamp,
								f: t.offsetTimestamp,
								t: t.markerType
							});
							for (const t of e.nonwearMarkers) null != t.startTimestamp && null != t.endTimestamp && d.push({
								s: t.startTimestamp,
								e: t.endTimestamp
							});
						}
						if (0 === c.length && 0 === d.length) continue;
						const { algoKey: p, ruleKey: g } = di(t), h = [p, g].filter(Boolean).join("_"), _ = Q(f.values(), r || null);
						S.push([h, {
							p: c,
							n: d,
							..."stale" === _.status ? { stale: _.reason } : {}
						}]);
					}
					0 === w.size && S.push(["", {
						p: [],
						n: []
					}]), k.length > 0 && l.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: k,
						act: x,
						algos: S
					});
				}
			},
			entries: () => bi({
				csvLinesByAlgo: s,
				ggirReviews: u
			}, { signal: n }),
			chartPidData: l,
			csvLinesByAlgo: s,
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
			charts: t.algos.map(([i, a]) => {
				const { algoKey: r, ruleKey: s } = di(i), o = fi([r, s].filter(Boolean).join("_"), "unscoped"), l = `activity-${fi(e, "recording")}-${o}-${n}.svg`, u = function(e) {
					if (0 === e.timestamps.length) return Rn("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return Rn("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, i = 0;
					const a = e.timestamps.map((a, r) => {
						const s = e.activity[r];
						return !Number.isFinite(a) || a <= t ? Rn("timestamps must be finite and strictly ascending") : (t = a, null != s && Number.isFinite(s) ? (n = Math.min(n, s), i = Math.max(i, s), {
							timestamp: a,
							value: s
						}) : {
							timestamp: a,
							value: null
						});
					}), r = a[0].timestamp, s = a[a.length - 1].timestamp, o = s > r ? s : r + 1;
					if (!Number.isFinite(o) || o <= r) return Rn("single-epoch viewport must have a representable right edge");
					i <= n && (i = n + 1);
					const l = (e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.startTimestamp < e.endTimestamp, u = e.nonwearIntervals.filter(l).map((e, t) => ({
						kind: "interval",
						phase: "under-series",
						order: t,
						tone: "neutral",
						startTimestamp: e.startTimestamp,
						endTimestamp: e.endTimestamp
					})), c = u.length, d = e.sleepIntervals.filter(l).map((e, t) => ({
						kind: "interval",
						phase: "under-series",
						order: c + t,
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
							...u,
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
				}), c = [...yi(`      <div class="plot-svg">${wn(u)}</div>`)];
				return {
					algoKey: i,
					...a.stale ? { stale: a.stale } : {},
					svgFilename: l,
					plot: new Blob(c),
					plotLengths: c.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${ui(hi(u.viewport.min))} → ${ui(hi(u.viewport.max))} · activity domain ${In(u.valueDomain.min)}–${In(u.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), r = new Set(pi([...i.csvLinesByAlgo.keys()]).values()), s = [];
	for (const [o, l] of Object.entries(await i.entries())) r.has(o) || s.push([o, d(m(new TextDecoder().decode(l)).records[0].text)]);
	return {
		charts: a,
		csvLinesByAlgo: i.csvLinesByAlgo,
		ggirReviews: i.ggirReviews,
		headers: s
	};
}
async function xi(e, t, n, i) {
	const a = [], r = [];
	for (const [s, o] of e) if (s) for (let e = 0; e < Math.min(s.length, o.length); e++) a.push(o[e]), r.push(s[e]);
	return await j(i).spanFiniteMean(Float64Array.from(a), Float64Array.from(r), t, n) ?? null;
}
function Si(e) {
	return "string" == typeof e ? e : null;
}
function Ii(e) {
	return "number" == typeof e ? e : null;
}
function Ai(e, t) {
	const n = function(e, t) {
		switch (e.formatter) {
			case "verbatim_string": return function(e) {
				return e ? _(e) : "";
			}(Si(t));
			case "display_label": {
				const n = Si(t);
				return n ? function(e) {
					return e ? _(e) : "";
				}(e.labelEnum ? b(e.labelEnum, n) : n) : "";
			}
			case "core_printed_text":
			case "date_iso": return function(e) {
				return e ?? "";
			}(Si(t));
			case "integer": return function(e) {
				return null == e ? "" : String(Math.trunc(e));
			}(Ii(t));
			case "fixed2": return function(e) {
				return null == e ? "" : e.toFixed(2);
			}(Ii(t));
			case "python_scalar_str": return function(e) {
				return null == e ? "" : String(e);
			}("boolean" == typeof t ? null : t);
			case "python_float_repr": return function(e) {
				if (null == e) return "";
				if (!Number.isFinite(e)) return String(e);
				const t = String(e);
				return t.includes(".") || t.includes("e") ? t : `${t}.0`;
			}(Ii(t));
			case "python_bool": return function(e) {
				return null == e ? "" : e ? "True" : "False";
			}("boolean" == typeof t ? t : null);
			case "clock_hhmm": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${An(t.getUTCHours())}:${An(t.getUTCMinutes())}`;
			}(Ii(t));
			case "datetime_seconds": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${String(t.getUTCFullYear())}-${An(t.getUTCMonth() + 1)}-${An(t.getUTCDate())} ${An(t.getUTCHours())}:${An(t.getUTCMinutes())}:${An(t.getUTCSeconds())}`;
			}(Ii(t));
			case "ggir_value": return In(t, { integral: e.ggirIntegral ?? !1 });
		}
	}(e, t);
	return "" === n ? M[e.sentinel] : n;
}
function Ri(e, t) {
	if (!t) return "";
	const { labelEnum: n } = x[e];
	return n ? b(n, t) : t;
}
const Ti = v.invalid_night_row?.markerTypeCell ?? "", Ni = v.nonwear_row?.markerTypeCell ?? "";
function Ei(e) {
	return S[e].filter((e) => "server" !== x[e].plane);
}
function $i(e) {
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
function Oi(e) {
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
const Li = [
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
];
async function Bi(e, t, n, i, a, r, s) {
	try {
		return {
			metrics: t ? await Rt(e, t, n, i, a, r, s) : await At(e, n, i, a, r, null, s),
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
async function Ci(e, t, n, i) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const a = new Set(n.filter((t) => t.markerType === u.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return a.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : oi(t.filter((e) => a.has(e.date)), e, t[0]?.epochLengthSeconds, i);
}
function Di(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const Pi = [
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
], Fi = {
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
}, Wi = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => Ri("algorithm", e.algorithm),
	summary_detection_rule: (e) => Ri("detection_rule", e.detectionRule),
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
}, ji = w;
function Ui(e) {
	return P(e);
}
function zi(e) {
	return JSON.stringify(e, null, 2);
}
const Gi = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function Vi(e = ji, t = !1) {
	return Xi("codebook_csv", e, Gi, void 0, t);
}
const Hi = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], qi = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function Ki(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== u.MAIN_SLEEP) continue;
		const e = Hi.map((e) => Zi(e, n)).join("\0"), i = t.get(e);
		i ? i.push(n) : t.set(e, [n]);
	}
	return t;
}
function* Yi(e, t = !1) {
	const n = Ki(e);
	let i = 0;
	const a = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > i && (i = t.length), t;
	}), r = Hi.map((e) => x[e].header);
	for (let o = 1; o <= i; o++) for (const [e] of qi) r.push(`night${String(o)}_${e}`);
	const s = r;
	yield t ? [...r, ...s.map((e) => e + "_missing_reason")].join(",") : r.join(",");
	for (const o of a) {
		const e = o[0], n = Hi.map((t) => Zi(t, e)), a = Hi.map((t) => Ji[t]?.(e) ? "" : Qi[t] ?? "");
		for (let t = 0; t < i; t++) {
			const e = o[t];
			for (const [t, i] of qi) {
				const r = e ? Zi(i, e) : "";
				n.push(r), a.push(r ? "" : e ? "date" === t ? "" : e.derivedMissingReasons?.[i] ?? e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? a : []].join(",");
	}
}
const Ji = {
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
	dst_transition: (e) => e.dstTransition
};
function Zi(e, t) {
	return Ai(x[e], Ji[e]?.(t) ?? null);
}
const Qi = {
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
function Xi(e, t, n, i, a = !1) {
	const r = i && i.length > 0 ? new Set(i) : null, s = Ei(e).filter((e) => null == r || r.has(x[e].header)), o = a ? s.filter((e) => Qi[e]) : [], l = [[...s.map((e) => x[e].header), ...o.map((e) => x[e].header + "_missing_reason")].join(",")];
	for (const u of t) l.push([...s.map((e) => Ai(x[e], n[e]?.(u) ?? null)), ...o.map((e) => {
		const t = n[e]?.(u);
		return null == t || "" === t ? Qi[e] ?? "" : "";
	})].join(","));
	return l.join("\n");
}
function ea(e, t, n = !1) {
	const i = Xi("sleep_csv", e, Ji, t, n), a = t?.length ? new Set(t) : null, r = [
		"onset_time",
		"offset_time",
		"onset_datetime",
		"offset_datetime"
	], s = [
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
	], o = [
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
		...s
	].filter((t) => (!a || a.has(x[t].header)) && e.some((e) => r.includes(t) && null == Ji[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || s.includes(t) && e.metricMissingReason));
	return 0 === o.length ? i : m(i).records.map((t, n) => {
		if (0 === n) return t.text + "," + o.map((e) => `${x[e].header}_missing_reason`).join(",");
		const i = e[n - 1];
		return t.text + "," + o.map((e) => i.markerType === Ni ? "manual_nonwear_period" : i.markerType === Ti ? "invalid_night" : r.includes(e) ? null == Ji[e]?.(i) ? "source_reported_missing" : "" : i.sensorMissingReasons?.[e] ?? i.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? i.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (s.includes(e) ? i.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
Ei("sleep_csv").map((e) => x[e].header);
const ta = y("event_marker_csv", "local"), na = 86400, ia = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * na * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), aa = (e) => e < 10 ? `0${String(e)}` : String(e);
function ra(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / na), n = e - t * na;
	return `${ia(t)} ${aa(Math.floor(n / 3600))}:${aa(Math.floor(n / 60) % 60)}:${aa(n % 60)}`;
}
function sa(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function oa(e, t, n, i, a) {
	const r = [], s = Fr(n, Nr.event, e), o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		a?.throwIfAborted();
		const e = sa(l, Vr(s, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await Gt(e, j(a)), u = new Set(jr(s, l.id, i).keys());
		for (const i of e) {
			const e = o(i);
			t && (e < t[0] || e > t[1]) || u.has(e) && r.push({
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
const la = v.invalid_night_row.markerTypeCell, ua = y("actiware_interval_csv", "local"), ca = (e, t) => Math.round(e) === Math.round(t);
function da(e, t = !1) {
	const n = t ? Tn.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], i = [[
		...ua,
		...n.map(([, e]) => e + "_missing_reason"),
		...t ? [
			"Participant ID_missing_reason",
			"Origin_missing_reason",
			"Analysis_missing_reason"
		] : []
	].join(",")], a = (e) => Number.isFinite(e) ? ra(Math.round(e)) : "";
	for (const { filename: r, participantId: s, studyDate: o, interval: l, statistics: u, invalidNight: c } of e) {
		const e = !0 === c && !Number.isFinite(l.startTimestamp), d = [
			r,
			s ?? "",
			o,
			c ? la : l.kind,
			e ? "" : l.source,
			a(l.startTimestamp),
			a(l.endTimestamp),
			e ? "" : l.origin,
			l.analysis ?? ""
		], m = n.map(([e]) => {
			if (c) return "invalid_night";
			if (!u || null != u[e]) return "";
			if (e.startsWith("off_wrist")) return "source_reported_missing";
			const t = /_(white|red|green|blue)(?:_percent)?$/u.exec(e)?.[1];
			return t && null == u["invalid_" + t + "_percent"] ? "source_reported_missing" : "";
		});
		i.push([
			...d.map((e) => _(e)),
			...Tn.map(([, e]) => u?.printed?.[e] ?? ""),
			...m,
			...t ? [
				s ? "" : "source_reported_missing",
				e ? "invalid_night" : l.origin ? "" : "source_reported_missing",
				l.analysis ? "" : c ? "invalid_night" : "not_applicable_to_row"
			] : []
		].join(","));
	}
	return `${i.join("\n")}\n`;
}
const ma = "actiware_sleep_wake_export.csv", pa = y("actiware_sleep_wake_csv", "local");
async function ga(e, t, n, i) {
	if (0 === e.scores.byteLength) return [];
	const a = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, r = n ?? new Set(await i.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((a - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), a])));
	return (await Promise.all([...r].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await Ut(t, void 0, void 0, i);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
async function ha(e, t, n, i = s()) {
	return t || n ? (await ga(e, t, n, i)).reduce((e, t) => e + t.end - t.start, 0) : e.scores.byteLength;
}
async function* fa(e, t, n, i, a) {
	a?.throwIfAborted();
	const r = Fr(n, Nr.actiwareSleepWake, e), s = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => r.actiwareFileData.find((t) => t.fileId === e.id)), l = function(e, t = !1) {
		const n = [[
			...pa,
			"Sleep/Wake_missing_reason",
			"Wake Threshold_missing_reason",
			...t ? ["Participant ID_missing_reason"] : []
		].join(",")];
		for (const i of e) n.push(_a(i, i.epochTimestamp, i.sleepWake, t));
		return `${n.join("\n")}\n`;
	}([], !0);
	let u = [], c = 0, d = 0;
	const m = () => {
		a?.throwIfAborted();
		const e = function(...e) {
			const t = Yn(...e), n = [];
			for (;;) {
				const e = t.next();
				if (e.done) return {
					...e.value,
					reasons: n
				};
				n.push(e.value);
			}
		}(l + u.join("\n") + "\n", ma, !0, { rowOffset: c }), t = c ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
			bytes: new TextEncoder().encode(t),
			rows: u.length,
			reasonRows: e.reasons.length,
			reasons: new TextEncoder().encode(Hn(e.reasons, !1))
		};
		return c += u.length, u = [], d = 0, n;
	};
	for (const [p, g] of s.entries()) {
		a?.throwIfAborted();
		const e = o[p]?.actiwareSleepWake;
		if (!e) continue;
		const n = o[p]?.actiwareWakeThreshold, s = null != n && Number.isFinite(n) ? n : null, l = new Int8Array(e.scores), c = await ga(e, t, new Set(jr(r, g.id, i).keys()), j(a));
		a?.throwIfAborted();
		for (const { date: t, start: i, end: a } of c) {
			const n = {
				filename: g.filename,
				participantId: g.participantId ?? null,
				studyDate: t,
				sleepDetection: Ie(e.params, "sleep_detection"),
				wakeThresholdSelection: Ie(e.params, "wake_threshold_selection"),
				wakeThreshold: s,
				...null === s ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
			};
			for (let t = i; t < a; t += 1) {
				const i = l[t], a = _a(n, e.startTimestamp + t * e.epochSeconds, 0 === i || 1 === i ? i : null, !0);
				if (a.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
				u.push(a), d += a.length, (512 === u.length || d >= 32768) && (yield m());
			}
		}
	}
	u.length && (yield m()), a?.throwIfAborted();
}
function _a(e, t, n, i) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		ra(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...i ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => _(e)).join(",");
}
const wa = Mn, ya = new Uint8Array([3, 0]);
var va = class extends bt {
	flag = 3;
	constructor(e) {
		super(e), this.compression = 8;
	}
	process() {}
	emit(e, t) {
		this.ondata(null, e, t);
	}
};
async function* Ma(e) {
	const t = new TextDecoder();
	let n, i = "";
	for await (const a of async function* () {
		for await (const t of e) for (let e = 0; e < t.byteLength; e += wa) yield t.subarray(e, e + wa);
		yield null;
	}()) {
		const e = null === a;
		i += e ? t.decode() : t.decode(a, { stream: !0 });
		const r = m(i, e);
		if (e && r.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const s = r.remainder ?? "";
		if (s.length > wa || r.records.some((e) => e.text.length > wa)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
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
const ba = "union_all";
function ka(e) {
	return e.nonwearDetector ?? "union_all";
}
const xa = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: ba
}, Sa = {
	...xa,
	minimumWakeWearMinutes: Ae.minWearMinutesPerDay
};
function Ia(e) {
	return e ? {
		...Sa,
		...e
	} : Sa;
}
function Aa(e, t) {
	const n = [];
	for (const i of e.values()) {
		for (const e of i.sleepMarkers) {
			const t = e.markerType === u.MAIN_SLEEP ? "main_sleep" : e.markerType === u.NAP ? "nap" : null;
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
function Ra(e, t, n, i) {
	const a = ka(t), r = "union_all" === a ? Object.entries(Me(e, n)) : [[a, ve(e, a, n)], ..."detach_nonwear" === a ? [] : [["detach_nonwear", ve(e, "detach_nonwear", n)]]], s = new Float64Array(e.timestamps);
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
function Ta(e) {
	return {
		excludeNonwear: e.excludeNonwear,
		excludeMainSleep: e.excludeMainSleep,
		excludeNaps: e.excludeNaps,
		useAlgorithmNonwear: e.useAlgorithmNonwear,
		useManualNonwear: e.useManualNonwear,
		minimumWakeWearMinutes: Number.isFinite(e.minimumWakeWearMinutes) ? Math.max(0, e.minimumWakeWearMinutes) : 0
	};
}
function Na(e) {
	return {
		totalEpochs: e.totalEpochs,
		includedEpochs: e.includedEpochs,
		nonwearEpochs: e.nonwearEpochs,
		mainSleepEpochs: e.mainSleepEpochs,
		napEpochs: e.napEpochs,
		overlapEpochs: e.overlapEpochs
	};
}
function Ea(e, t) {
	return j(t).summarizePhysicalActivityDays(e);
}
async function $a(e, t = s()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
const Oa = $.PRESCHOOL_FREE_LIVING_RF_3_5;
function La(e) {
	const t = e.algorithmResults[Oa];
	return null != t && new Uint8Array(t).length > 0;
}
function Ba(e) {
	const t = e.algorithmResults[Oa];
	if (!t) return null;
	const n = new Uint8Array(t);
	return n.length > 0 ? n : null;
}
function Ca(e) {
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
function Da(e) {
	return e instanceof Map ? Da([...e.entries()]) : Array.isArray(e) ? e.map(Da) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, Da(t)])) : e;
}
async function Pa(e, t) {
	const { db: n, fileId: i, kind: a, inputs: r, signal: s } = e;
	s?.throwIfAborted();
	let o = n, l = null;
	if (o) try {
		const e = await o.activityDays.where("fileId").equals(i).primaryKeys();
		l = await D(JSON.stringify(Da({
			version: 1,
			core: "82704a2c80a328a8f09fe3ad2c5d30aabc003b1d",
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
	const u = await t();
	if (s?.throwIfAborted(), o && l) try {
		await U(o, [o.physicalActivityFileSummaries], (e) => e.table(o.physicalActivityFileSummaries.name).put({
			fileId: i,
			kind: a,
			inputKey: l,
			value: u
		}), s);
	} catch {
		s?.throwIfAborted(), console.warn("[physical-activity] A file's answers could not be stored; the tab recomputes them.");
	}
	return u;
}
function Fa(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function Wa(e, t) {
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
function ja(e, t, n) {
	if (!n) return e.ruleLabel;
	const i = String(t.sedentaryMax), a = String(t.lightMin), r = String(t.moderateMin - 1), s = String(t.moderateMin), o = String(t.vigorousMin - 1), l = String(t.vigorousMin);
	return t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, non-sedentary >=${a} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, light ${a}-${r}, MVPA >=${s} counts/min` : `Custom cutpoints: Sed <=${i}, light ${a}-${r}, moderate ${s}-${o}, vigorous >=${l} counts/min`;
}
const Ua = [
	null,
	"sedentary",
	"light",
	"moderate",
	"vigorous"
];
async function za(e) {
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
	const l = await j(e.signal).cutpointToneCodes(Float64Array.from(o, (e) => e.countsPerMinute), Fa(i));
	let u = 0;
	const c = [];
	return o.forEach((e, t) => {
		const n = Ua[l[t] ?? 0];
		n && (u = Math.max(u, e.countsPerMinute), c.push({
			x: c.length,
			value: e.countsPerMinute,
			tone: n,
			maskReason: r?.[e.index] ?? "included"
		}));
	}), 0 === c.length ? null : {
		date: a,
		sourceLabel: i.sourceLabel,
		valueMax: Math.max(u, i.cutpointScaleMax ?? 1),
		points: c
	};
}
function Ga(e, t) {
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
function Va(e) {
	e.mvpaMinutesPerDay = e.totalDays > 0 ? e.mvpaMinutes / e.totalDays : 0, e.totalDays > 0 && (null != e.mvpaBouts && (e.mvpaBoutsPerDay = e.mvpaBouts / e.totalDays), null != e.sedentaryBreaks && (e.sedentaryBreaksPerDay = e.sedentaryBreaks / e.totalDays));
}
function Ha(e, t) {
	e.sedentaryMinutes += t.sedentaryMinutes, e.lightMinutes += t.lightMinutes, e.moderateMinutes += t.moderateMinutes, e.vigorousMinutes += t.vigorousMinutes, e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes;
}
function qa(e, t, n, i) {
	if (0 === t.totalDays) return;
	e.totalDays += t.totalDays, Ha(e, t.intensity), e.defaultIntensityMinutes && t.defaultIntensity && Ha(e.defaultIntensityMinutes, t.defaultIntensity), null != t.mimsUnitTotal && (e.mimsUnitTotal = (e.mimsUnitTotal ?? 0) + t.mimsUnitTotal), e.totalEpochsReviewed = (e.totalEpochsReviewed ?? 0) + t.totalEpochs, e.includedEpochsReviewed = (e.includedEpochsReviewed ?? 0) + t.includedEpochs, e.wakeWearMinutes = (e.wakeWearMinutes ?? 0) + t.wakeWearMinutes, e.excludedNonwearMinutes = (e.excludedNonwearMinutes ?? 0) + t.excludedNonwearMinutes, e.excludedMainSleepMinutes = (e.excludedMainSleepMinutes ?? 0) + t.excludedMainSleepMinutes, e.excludedNapMinutes = (e.excludedNapMinutes ?? 0) + t.excludedNapMinutes, e.maskOverlapEpochs = (e.maskOverlapEpochs ?? 0) + t.overlapEpochs, e.maskPolicy = n;
	const a = t.bouts;
	a && (e.mvpaBouts = (e.mvpaBouts ?? 0) + a.mvpaBouts, e.mvpaBoutMinutes = (e.mvpaBoutMinutes ?? 0) + a.mvpaBoutMinutes, e.sedentaryBouts = (e.sedentaryBouts ?? 0) + a.sedentaryBouts, e.sedentaryBreaks = (e.sedentaryBreaks ?? 0) + a.sedentaryBreaks, i.total += a.meanSedentaryBoutMinutes * a.sedentaryBouts, e.meanSedentaryBoutMinutes = e.sedentaryBouts > 0 ? i.total / e.sedentaryBouts : 0);
}
async function Ka(e) {
	const { file: t, days: n, summaries: i, markersByAnalysisDate: a, sensorNonwearPeriods: r, maskPolicy: s, validDayCriteria: o, cutpointMethods: l, choiAxis: u } = e, c = new Set([...a].filter(([, e]) => h(e)).map(([e]) => e)), d = Number.isFinite(t.epochLengthSeconds) && t.epochLengthSeconds > 0 ? t.epochLengthSeconds : 60, m = 60 / d, p = {
		policy: Ta(s),
		intervals: Aa(a, r)
	}, g = n.map((e) => Ra(e, s, u, d)), f = n.map((e, t) => ({
		timestamps: new Float64Array(e.timestamps),
		epochSeconds: d,
		series: g[t]
	})), { dates: _, shortfall: w } = await async function({ days: e, countDays: t, epochSeconds: n, request: i, criteria: a, scoredDates: r, signal: s }) {
		if (!a) return {
			dates: null,
			shortfall: null
		};
		if (e.some((e) => !r.has(e.date))) return {
			dates: null,
			shortfall: null
		};
		const o = await Ea({
			...i,
			days: [...t]
		}, s), l = 86400 / n, u = await $a(e.map((e) => e.date), j(s)), c = e.map((e, t) => {
			const n = o.days[t].mask;
			return {
				date: e.date,
				wearMinutes: n.wakeWearMinutes,
				isWeekend: u[t],
				isPartialDay: n.totalEpochs < l
			};
		}), d = await async function(e, t = Ae, n) {
			return j(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
		}(c, a, s);
		if (!d.meetsCriteria) {
			const e = a.requireWeekendDay && !d.hasWeekendValidDay ? ", including a weekend day" : "";
			return {
				dates: /* @__PURE__ */ new Set(),
				shortfall: `${String(d.validDays)} of the required ${String(a.minValidDaysPerParticipant)} valid days${e}`
			};
		}
		const m = await async function(e, t = Ae, n) {
			const i = await j(n).validWearDays(Float64Array.from(e), t);
			return Array.from(i, (e) => 0 !== e);
		}(c.map((e) => e.wearMinutes), a, s);
		return {
			dates: new Set(c.filter((e, t) => m[t]).map((e) => e.date)),
			shortfall: null
		};
	}({
		days: n,
		countDays: f,
		epochSeconds: d,
		request: p,
		criteria: o,
		scoredDates: c,
		signal: e.signal
	}), y = i.filter((e) => !(s.minimumWakeWearMinutes > 0 && (null == e.validHours || 60 * e.validHours < s.minimumWakeWearMinutes))).filter((e) => null != e.sedentaryMinutes && null != e.lpaMinutes && null != e.mvpaMinutes).filter((e) => !_ || _.has(e.analysisDate)).map((e) => ({
		sedentaryMinutes: e.sedentaryMinutes,
		lpaMinutes: e.lpaMinutes,
		mvpaMinutes: e.mvpaMinutes
	})), v = n.map((e) => !_ || _.has(e.date)), M = [];
	for (let h = 0; h < l.length; h++) {
		e.signal?.throwIfAborted();
		const i = l[h];
		if (Te(i.method, t.sourceProfileId)) {
			M.push(null);
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
			M.push(null);
			continue;
		}
		const r = await Ea({
			...p,
			analysisKind: "count_cutpoint",
			thresholds: Fa(i),
			defaultThresholds: Fa(Se[h]),
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
			const t = await Ea({
				...p,
				includeEpochDetails: !0,
				days: [f[o.index]]
			}, e.signal), a = await za({
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
			const t = await Ne(i.method, d, e.signal);
			t && "warn" === t.severity && (s.epochMismatch = t);
		}
		M.push(s);
	}
	const b = (e, t) => n.flatMap((n, i) => {
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
		const i = await Ea({
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
		cutpoints: M,
		mims: await k(b((e) => e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output"), "mims_volume"),
		preschoolRf: await k(b(Ba, "classifier"), "preschool_classifier")
	};
}
async function Ya(e = {}) {
	const t = await Y(e.dbOverride, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = e.username ?? "anonymous", i = e.maskPolicy ?? xa, a = e.validDayCriteria, r = Re("ggir_enmo"), s = Re("mims"), o = Re("preschool_free_living_rf_3_5"), l = Ga({
		method: r.method,
		label: r.label,
		requiredSignal: r.requiredSignal,
		sourceLabel: r.signalLabel,
		ruleLabel: "Uses imported GGIR daily sedentary, LPA, and MVPA summaries",
		unavailableAction: "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."
	}, null), u = j(e.signal), c = await Promise.all(Se.map((t) => async function(e, t, n) {
		const i = t[e.method];
		if (!i) return e;
		const a = await be(i, n);
		if (!a) return e;
		const r = Fa(e);
		return {
			...e,
			ruleLabel: ja(e, a, JSON.stringify(a) !== JSON.stringify(r)),
			cutpointBands: Wa(a, e.cutpointBands),
			cutpointScaleMax: Math.max(e.cutpointScaleMax ?? 1, ...Object.values(a).filter(Number.isFinite)),
			...a
		};
	}(t, e.cutpointOverrides ?? {}, u))), d = c.map((e, t) => function(e, t) {
		return {
			...Ga(e, null),
			cutpointThresholds: Fa(e),
			defaultCutpointThresholds: Fa(t),
			cutpointEditable: !0,
			defaultIntensityMinutes: {
				sedentaryMinutes: 0,
				lightMinutes: 0,
				moderateMinutes: 0,
				vigorousMinutes: 0,
				mvpaMinutes: 0
			}
		};
	}(e, Se[t])), m = new Array(c.length).fill(!1), p = [], g = Ga({
		method: s.method,
		label: s.label,
		requiredSignal: s.requiredSignal,
		sourceLabel: s.signalLabel,
		ruleLabel: "Uses stored MIMS_UNIT epoch values from actours; intensity cutpoints/equating are not applied in this row.",
		unavailableAction: "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values.",
		unavailableStatus: "backend_required"
	}, null);
	g.mimsUnitTotal = 0, g.mimsUnitPerDay = 0;
	const h = Ga({
		method: o.method,
		label: o.label,
		requiredSignal: o.requiredSignal,
		sourceLabel: o.signalLabel,
		ruleLabel: "Uses actimetric Preschool Wrist Random Forest Free Living Lag-Lead classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
		unavailableAction: "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.",
		unavailableStatus: "backend_required"
	}, null), f = Re("hildebrand_enmo_wrist_2014"), _ = Ga({
		method: f.method,
		label: f.label,
		requiredSignal: f.requiredSignal,
		sourceLabel: f.signalLabel,
		ruleLabel: "Hildebrand 2014 non-dominant wrist ENMO (mg) cut-points: MVPA >=201 mg, vigorous >=707 mg; light near ~45 mg. Applied to a calibrated ENMO (mg) epoch signal, never to ActiGraph counts.",
		unavailableAction: "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline; the browser count pipeline does not compute ENMO mg.",
		unavailableStatus: "needs_signal"
	}, null);
	let w = !1, y = !1, v = !1, M = !1;
	const b = we(), k = c.map(() => ({ total: 0 })), x = { total: 0 };
	for (const I of t) {
		if (e.signal?.throwIfAborted(), !I.id) continue;
		const t = I.id, r = await G(t, e.dbOverride), s = await V(t, n, e.dbOverride), o = await H(t, e.dbOverride), u = await Pa({
			db: e.dbOverride ?? null,
			fileId: t,
			kind: "analysis",
			...e.signal ? { signal: e.signal } : {},
			inputs: {
				epochLengthSeconds: I.epochLengthSeconds,
				sourceProfileId: I.sourceProfileId ?? null,
				summaries: r,
				markers: Ca(s),
				sensorNonwearPeriods: o,
				maskPolicy: i,
				validDayCriteria: a ?? null,
				thresholds: c.map(Fa),
				choiAxis: b
			}
		}, async () => Ka({
			file: I,
			days: [...(await ie(t, e.dbOverride, e.activityDayMemo)).values()],
			summaries: r,
			markersByAnalysisDate: s,
			sensorNonwearPeriods: o,
			maskPolicy: i,
			validDayCriteria: a,
			cutpointMethods: c,
			choiAxis: b,
			...e.signal ? { signal: e.signal } : {}
		}));
		u.shortfall && p.push(u.shortfall), u.ggirSummarySeen && (y = !0);
		for (const e of u.ggirRows) l.totalDays += 1, l.sedentaryMinutes += e.sedentaryMinutes, l.lightMinutes += e.lpaMinutes, l.mvpaMinutes += e.mvpaMinutes;
		u.hasAnyActivity && (w = !0), u.cutpoints.forEach((e, t) => {
			if (!e) return;
			const n = d[t];
			e.signalSeen && (m[t] = !0), qa(n, e.totals, i, k[t]), e.previewTrace && !n.previewTrace && (n.previewTrace = e.previewTrace), e.epochMismatch && !n.epochMismatch && (n.epochMismatch = e.epochMismatch);
		}), u.mims && (u.mims.signalSeen && (v = !0), qa(g, u.mims.totals, i, x)), u.preschoolRf && (u.preschoolRf.signalSeen && (M = !0), qa(h, u.preschoolRf.totals, i, x));
	}
	for (let I = 0; I < d.length; I++) {
		const e = d[I], t = c[I];
		e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes, 0 === e.totalDays && (e.available = !1, e.status = m[I] ? "ready" : "needs_signal", e.unavailableReason = m[I] ? p.length > 0 ? `Excluded by the valid-days-per-participant rule: ${p.join("; ")}. Change it in Study Settings → valid-day criteria.` : `No local ${e.sourceLabel.toLowerCase()} days meet the minimum wake-wear rule.` : w ? `No local ${e.sourceLabel.toLowerCase()} days are available.` : "No local activity epochs are available.", e.nextStepLabel = t.unavailableAction), Va(e);
	}
	l.moderateMinutes = l.mvpaMinutes, Va(l), 0 === l.totalDays && (l.available = !1, l.status = y ? "ready" : "needs_signal", l.unavailableReason = y ? "No local GGIR daily summaries meet the current inclusion rules." : "No local GGIR daily summaries are available. Import raw/5-second-capable files to populate ENMO summaries.", l.nextStepLabel = "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."), g.totalDays > 0 ? (g.available = !0, g.status = "ready", g.unavailableReason = null, g.nextStepLabel = null, g.mimsUnitPerDay = (g.mimsUnitTotal ?? 0) / g.totalDays) : (g.available = !1, g.status = v ? "ready" : "backend_required", g.unavailableReason = v ? "No stored MIMS_UNIT epoch days meet the current inclusion rules." : "No MIMS_UNIT epoch values are stored in this workspace yet. This becomes ready when the actours MIMS backend/WASM build computes and stores MIMS_UNIT epochs.", g.nextStepLabel = "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values."), Va(_), _.available = !1, _.status = "needs_signal", _.unavailableReason = "No calibrated ENMO (mg) epoch stream is available in this workspace. ENMO (mg) is a raw/GGIR-derived signal; the browser count pipeline does not produce it, so this method cannot classify counts against Hildebrand mg thresholds.", _.nextStepLabel = "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline.", Va(h), h.totalDays > 0 ? (h.available = !0, h.status = "ready", h.unavailableReason = null, h.nextStepLabel = null) : (h.available = !1, h.status = M ? "ready" : "backend_required", h.unavailableReason = M ? "No stored preschool wrist RF class days meet the current inclusion rules." : "No actimetric-compatible preschool wrist RF class epochs are stored in this workspace yet. This becomes ready when actours/WASM computes 15 s classes for 3-5 year-old wrist data.", h.nextStepLabel = "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.");
	const S = t.map((e) => e.sourceProfileId);
	return [
		l,
		h,
		...d,
		_,
		g
	].filter((e) => xe(e.method, S));
}
const Ja = [
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
function Za(e, t) {
	if (!t) return !0;
	const [n, i] = t;
	return e >= n && e <= i;
}
function Qa(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function Xa(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function er(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
function tr(e) {
	const t = ke.find((t) => t.method === e);
	if (t) return {
		family: t.family,
		requiredSignal: t.requiredSignal,
		computationOwner: t.backendOwner ?? "browser_workspace",
		frontendComputesMetric: t.frontendComputesMetric,
		statusWhenMissing: t.statusWhenMissing
	};
	const n = Re(e), i = "ready" === n.statusWhenMissing ? "needs_signal" : n.statusWhenMissing;
	return {
		family: n.family,
		requiredSignal: n.requiredSignal,
		computationOwner: n.backendDependency ?? "browser_workspace",
		frontendComputesMetric: "count_cutpoint" === n.family,
		statusWhenMissing: i
	};
}
function nr(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function ir(e, t, n) {
	return "default" === n ? e.ruleLabel : t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, non-sedentary >=${String(t.lightMin)} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, MVPA >=${String(t.moderateMin)} counts/min` : `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, moderate ${String(t.moderateMin)}-${String(t.vigorousMin - 1)}, vigorous >=${String(t.vigorousMin)} counts/min`;
}
function ar(e) {
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
async function rr(e, t, n = {}, i) {
	const a = await Y(i), r = (e.length > 0 ? a.filter((t) => null != t.id && e.includes(t.id)) : a).sort((e, t) => e.filename.localeCompare(t.filename)), s = [], o = n.username ?? "anonymous", l = n.maskPolicy ?? xa, u = n.choiAxis ?? we(), c = ka(l), d = n.cutpointOverrides, m = n.cutpointPresetNames, p = j(n.signal), g = await Promise.all(Se.map((e) => async function(e, t, n, i) {
		const a = t?.[e.method], r = a ? await be(a, i) : null;
		return r ? {
			thresholds: r,
			source: "custom",
			presetName: n?.[e.method] ?? ""
		} : {
			thresholds: nr(e),
			source: "default",
			presetName: ""
		};
	}(e, d, m, p))), h = n.inclusionRulePresetName ?? "", f = n.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), _ = Re("ggir_enmo"), w = Re("mims"), y = Re("preschool_free_living_rf_3_5"), v = tr("ggir_enmo"), M = tr("mims"), b = tr("preschool_free_living_rf_3_5");
	for (const k of r) {
		if (n.signal?.throwIfAborted(), !k.id) continue;
		if (!0 === k.ggirSummariesNeedRecompute) throw new Error(`${k.filename}: its GGIR summaries were not recomputed for the current study settings. In Study settings, run Rescore (offered for every file whose summaries are refused) before exporting.`);
		const e = k.participantId ?? "", a = Number.isFinite(k.epochLengthSeconds) && k.epochLengthSeconds > 0 ? k.epochLengthSeconds : 60, r = await G(k.id, i);
		for (const n of r) Za(n.analysisDate, t) && s.push({
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
			inclusionRulePresetName: h,
			maskExcludeNonwear: l.excludeNonwear,
			maskExcludeMainSleep: l.excludeMainSleep,
			maskExcludeNaps: l.excludeNaps,
			maskUseManualNonwear: l.useManualNonwear,
			maskUseAlgorithmNonwear: l.useAlgorithmNonwear,
			maskNonwearDetector: c,
			maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
			scoredUsername: o,
			sourceContentHash: k.sourceContentHash ?? k.fileHash,
			exportedAt: f,
			notes: "Stored GGIR daily summary values."
		});
		const d = [...(await ie(k.id, i, n.activityDayMemo)).entries()].filter(([e]) => Za(e, t)).sort(([e], [t]) => e.localeCompare(t)).map(([, e]) => e), m = await V(k.id, o, i), p = await H(k.id, i), x = {
			policy: Ta(l),
			intervals: Aa(m, p)
		}, S = d.map((e) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: a,
			series: Ra(e, l, u, a)
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
			const r = await Ea({
				...x,
				...t,
				days: i.map(({ dayInput: e }) => e)
			}, n.signal);
			return n.signal?.throwIfAborted(), i.forEach(({ index: e }, t) => {
				a[e] = r.days[t];
			}), a;
		}, A = (e, t, n, i) => e && e.length > 0 ? {
			timestamps: S[i].timestamps,
			series: S[i].series ?? [],
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(e),
			grid: t,
			fallbackEpochSeconds: a
		} : null, R = [], T = Se.map((e) => null !== Te(e.method, k.sourceProfileId));
		for (const [t, n] of Se.entries()) T[t] ? R.push([]) : R.push(await I((e, t) => {
			const i = new Float64Array("axisY" === n.axis ? e.axisY : e.vectorMagnitude);
			return i.length > 0 && i.length === S[t].timestamps.length ? {
				...S[t],
				values: i
			} : null;
		}, {
			analysisKind: "count_cutpoint",
			thresholds: g[t].thresholds
		}));
		const N = await I((e, t) => A(Ba(e), "classifier", e, t), { analysisKind: "preschool_classifier" }), E = await I((e, t) => A(e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output", e, t), { analysisKind: "mims_volume" }), $ = await Promise.all(Se.map((e) => Ne(e.method, a, n.signal)));
		for (const [t, n] of d.entries()) {
			const i = n.date;
			for (const [n, d] of Se.entries()) {
				if (T[n]) continue;
				const r = g[n], u = ir(d, r.thresholds, r.source), m = tr(d.method), p = $[n], _ = ar(R[n][t]);
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
					methodRule: u,
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
					inclusionRulePresetName: h,
					maskExcludeNonwear: l.excludeNonwear,
					maskExcludeMainSleep: l.excludeMainSleep,
					maskExcludeNaps: l.excludeNaps,
					maskUseManualNonwear: l.useManualNonwear,
					maskUseAlgorithmNonwear: l.useAlgorithmNonwear,
					maskNonwearDetector: c,
					maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
					scoredUsername: o,
					sourceContentHash: k.sourceContentHash ?? k.fileHash,
					exportedAt: f,
					notes: _ ? u : `No finite ${d.sourceLabel.toLowerCase()} values for this day.`
				});
			}
			const r = ar(N[t]);
			null === Te("preschool_free_living_rf_3_5", k.sourceProfileId) && s.push({
				filename: k.filename,
				participantId: e,
				analysisDate: i,
				method: "preschool_free_living_rf_3_5",
				methodLabel: y.label,
				methodFamily: b.family,
				requiredSignalContract: b.requiredSignal,
				computationOwner: b.computationOwner,
				frontendComputesMetric: b.frontendComputesMetric,
				sourceSignal: y.signalLabel,
				status: r ? "ready" : b.statusWhenMissing,
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
				inclusionRulePresetName: h,
				maskExcludeNonwear: l.excludeNonwear,
				maskExcludeMainSleep: l.excludeMainSleep,
				maskExcludeNaps: l.excludeNaps,
				maskUseManualNonwear: l.useManualNonwear,
				maskUseAlgorithmNonwear: l.useAlgorithmNonwear,
				maskNonwearDetector: c,
				maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
				scoredUsername: o,
				sourceContentHash: k.sourceContentHash ?? k.fileHash,
				exportedAt: f,
				notes: r ? "Stored actimetric-compatible preschool class epochs summarized with the selected mask policy." : "No stored actimetric-compatible preschool class epochs for this day."
			});
			const u = ar(E[t]);
			null === Te("mims", k.sourceProfileId) && s.push({
				filename: k.filename,
				participantId: e,
				analysisDate: i,
				method: "mims",
				methodLabel: w.label,
				methodFamily: M.family,
				requiredSignalContract: M.requiredSignal,
				computationOwner: M.computationOwner,
				frontendComputesMetric: M.frontendComputesMetric,
				sourceSignal: w.signalLabel,
				status: u ? "ready" : M.statusWhenMissing,
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
				mimsUnitTotal: u?.mimsUnitTotal ?? null,
				epochLengthSeconds: u?.epochLengthSeconds ?? a,
				epochsReviewed: u?.epochsReviewed ?? 0,
				wakeWearMinutes: u?.wakeWearMinutes ?? null,
				excludedNonwearMinutes: u?.excludedNonwearMinutes ?? null,
				excludedMainSleepMinutes: u?.excludedMainSleepMinutes ?? null,
				excludedNapMinutes: u?.excludedNapMinutes ?? null,
				maskOverlapEpochs: u?.maskOverlapEpochs ?? null,
				mvpaBouts: null,
				mvpaBoutMinutes: null,
				sedentaryBouts: null,
				sedentaryBreaks: null,
				meanSedentaryBoutMinutes: null,
				nativeEpochSeconds: null,
				epochMismatch: !1,
				inclusionRulePresetName: h,
				maskExcludeNonwear: l.excludeNonwear,
				maskExcludeMainSleep: l.excludeMainSleep,
				maskExcludeNaps: l.excludeNaps,
				maskUseManualNonwear: l.useManualNonwear,
				maskUseAlgorithmNonwear: l.useAlgorithmNonwear,
				maskNonwearDetector: c,
				maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
				scoredUsername: o,
				sourceContentHash: k.sourceContentHash ?? k.fileHash,
				exportedAt: f,
				notes: u ? "Stored MIMS_UNIT epoch values; intensity cutpoints are not applied." : "No stored MIMS_UNIT epoch values for this day."
			});
		}
	}
	return s;
}
Ja.join(","), Se.length;
var sr = n({
	editsFromMarkers: () => hr,
	getGgirMarkerInputs: () => fr,
	ggirNightRecords: () => gr,
	hasGgirRecomputeFailure: () => dr,
	mergeGgirSleepMarkers: () => pr,
	recomputeGgirResults: () => yr,
	recoverPendingGgirRecomputes: () => vr,
	reviewGgirResultsForMarkers: () => Mr,
	scheduleGgirRecompute: () => wr
});
const or = new EventTarget(), lr = /* @__PURE__ */ new WeakMap(), ur = 800, cr = "Update GGIR review";
function dr(e, t, n) {
	return E.getState().jobs[`${n.name}:${_r(e, t)}`]?.status === N.FAILED;
}
function mr(e, t, n, i, a) {
	if (a?.aborted || function(e) {
		return e instanceof Error && e.name === p.errnames.DatabaseClosed;
	}(i)) return;
	const r = _r(e, t), s = `${n.name}:${r}`, o = E.getState();
	o.jobs[s]?.controller.signal.aborted || o.jobs[s]?.status === N.ELSEWHERE || (o.update(s, {
		id: s,
		key: r,
		workspaceId: n.name,
		kind: R.GGIR_RECOMPUTE,
		label: cr,
		controller: o.jobs[s]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: N.FAILED
	}), n.isOpen() && L() === n && or.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function pr(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function gr(e, t, n, i = [], a) {
	const r = q([...n.values()].flat(), !0), s = r?.algorithm ?? fe(t), o = r?.detectionRule ?? null, l = /* @__PURE__ */ new Map();
	for (const [u, m] of n) {
		const e = q(m, !0);
		e && l.set(u, [{
			...e,
			algorithm: s,
			detectionRule: o
		}]);
	}
	const c = _e(t), d = c.length ? await j(a).ggirLabelsToStoredMs(Float64Array.from(c.flatMap((e) => [e.onsetMs, e.wakeMs])), i) : [];
	for (const [m, p] of c.entries()) {
		const t = l.get(p.nightDate)?.[0], n = ce(p, t);
		"scored" !== n.kind && "invalid" !== n.kind ? l.set(p.nightDate, [{
			fileId: e,
			date: p.nightDate,
			username: se,
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
			sleepMarkers: pr({
				markerType: u.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: d[2 * m] / 1e3,
				offsetTimestamp: d[2 * m + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : l.set(p.nightDate, t ? [t] : []);
	}
	return l;
}
async function hr(e, t, n = [], i) {
	const a = _e(e).flatMap((e) => {
		const n = ce(e, t.get(e.nightDate));
		return "scored" === n.kind && null != n.main.onsetTimestamp && null != n.main.offsetTimestamp ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === a.length) return [];
	const r = j(i), s = await r.storedToGgirLabelsMs(Float64Array.from(a.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await r.wallClockLabels(Float64Array.from([...s, ...a.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * a.length;
	return a.flatMap(({ w: e }, t) => {
		const n = o[2 * t], i = o[2 * t + 1];
		return n !== o[l + 2 * t] || i !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: i
		}] : [];
	});
}
async function fr(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [i, a] = await Promise.all([Z(e, t, n), z(e, n)]), r = new Map([...i].flatMap(([e, t]) => {
			const n = q(t, !0);
			return n ? [[e, n]] : [];
		})), s = a?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([s ?? [], [...r].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				ce(void 0, t)
			])]),
			markers: r,
			clockSteps: s,
			bundleRevision: a?.ggirBundleRevision
		};
	});
}
function _r(e, t) {
	return `${R.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function wr(e, t, n, i) {
	if (!n.isOpen() || L() !== n || i?.aborted) return;
	let a = lr.get(n);
	a || (a = /* @__PURE__ */ new Map(), lr.set(n, a));
	const r = _r(e, t);
	clearTimeout(a.get(r)), a.set(r, setTimeout(() => {
		a.delete(r), n.files.get(e).then((a) => {
			if (a?.ggirBundleRevision && n.isOpen() && L() === n && !i?.aborted) return yr(e, t, n, i);
		}).catch((a) => {
			i?.aborted || a instanceof DOMException && "AbortError" === a.name || (mr(e, t, n, a, i), n.isOpen() && L() === n && (console.error("[ggir-results] recompute failed."), te("error", "GGIR results recompute failed", ne(a))));
		});
	}, ur));
}
function yr(e, t, n, i, a = !0) {
	const r = (s, o = i) => W({
		kind: R.GGIR_RECOMPUTE,
		key: _r(e, t),
		label: cr,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (i) => {
			i.signal.throwIfAborted();
			const o = await async function(e, t, n, i, a) {
				if (i.throwIfAborted(), !n.isOpen() || L() !== n) return null;
				const { markerInputs: r, markers: s, clockSteps: o, bundleRevision: l } = await fr(e, t, n);
				if (!l) return null;
				const u = await n.ggirScorerReviews.get([e, t]);
				if (!n.isOpen() || L() !== n) return null;
				if (i.throwIfAborted(), u?.markerInputs === r && u.bundleRevision === l) return a && or.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), u.current ?? null;
				const c = await n.ggirResultsBundles.get(e);
				if (!c) return null;
				const d = await hr(c.imported, s, o, i);
				if (!n.isOpen() || L() !== n) return null;
				const m = u?.bundleRevision === l && JSON.stringify(u.edits) === JSON.stringify(d) ? u.current : (await Mr(c, s, o, d, i)).current;
				i.throwIfAborted();
				const p = (/* @__PURE__ */ new Date()).toISOString();
				if (!n.isOpen() || L() !== n) return null;
				const g = await U(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!n.isOpen() || L() !== n) return null;
					const a = await fr(e, t, n);
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
				return g ? (or.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), i.throwIfAborted(), m ?? c.imported) : (i.throwIfAborted(), !1 !== g && null);
			}(e, t, n, i.signal, a);
			return i.signal.throwIfAborted(), !1 !== o ? o : (s < 2 && r(s + 1, i.signal).catch((a) => mr(e, t, n, a, i.signal)), null);
		}
	});
	return r(0);
}
function vr(e, t) {
	return W({
		kind: R.GGIR_RECOVERY,
		key: R.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const i = () => !t.signal.aborted && e.isOpen() && L() === e;
			try {
				if (!i()) return;
				const r = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: s } = await import("./local-data-source-Tt2pzSDA.js").then((e) => e.n);
				for (const o of r) {
					if (t.signal.throwIfAborted(), !i()) return;
					try {
						const [r] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), s(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), u = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...r.map((e) => e.scorer)]);
						u.delete(se);
						for (const s of u) {
							if (!i()) return;
							try {
								await yr(o, s, e, t.signal, dr(o, s, e));
							} catch (a) {
								n = !0, mr(o, s, e, a, t.signal);
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
				const a = Object.values(E.getState().jobs).filter((t) => T(t) && t.workspaceId === e.name && t.kind === R.GGIR_RECOMPUTE && t.status === N.FAILED);
				for (const t of a) {
					const a = t.key.slice(R.GGIR_RECOMPUTE.length + 1);
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
							i() && (0 === n || 0 === a && 0 === r) && (E.getState().dismiss(t.id), or.dispatchEvent(new CustomEvent("updated", { detail: {
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
async function Mr(e, t, n = [], i, a) {
	const r = i ?? await hr(e.imported, t, n, a);
	let s;
	if (a?.throwIfAborted(), r.length > 0 && e.ms2 && e.ms3) {
		const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), i = t(e.ms3), o = t(e.ms4), l = t(e.ms5), u = t(e.sleeplogRData);
		s = ge(await F(a, (t) => t.reviewGgirResults({
			part1: new Uint8Array(e.part1),
			configCsv: e.configCsv,
			recordingId: c(e.recordingFile),
			...n ? { ms2: n } : {},
			...i ? { ms3: i } : {},
			...o ? { ms4: o } : {},
			...l ? { ms5: l } : {},
			...u ? { sleeplogRData: u } : {},
			...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
			edits: r,
			...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
			...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
			crossCheck: !1
		})));
	}
	a?.throwIfAborted();
	const o = Object.getOwnPropertyDescriptors(e);
	return delete o.current, Reflect.deleteProperty(o, "edits"), Object.defineProperties({
		...s ? { current: s } : {},
		edits: r
	}, o);
}
const br = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], kr = [
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
], xr = [
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
], Sr = [
	"fileId",
	"recordingFile",
	"part1",
	"configCsv",
	"cleanedNightsCsv",
	"part2Reports",
	"dataCleaningCsv",
	"ms2",
	"ms3",
	"ms4",
	"ms5",
	"sleeplogRData",
	"sleeplogCsv",
	"imported",
	"current",
	"edits",
	"updatedAt",
	"ggirCorrections"
], Ir = {
	files: [
		...br,
		"ggirTimezone",
		"recording",
		"ggirClockSteps"
	],
	markers: kr,
	activityDays: xr,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: Sr
}, Ar = {
	files: [...br, "ggirClockSteps"],
	markers: kr,
	activityDays: xr,
	ggirResultsBundles: Sr
}, Rr = {
	ggirResultsBundles: [
		"fileId",
		"ggirCorrections",
		"configCsv"
	],
	files: ["id"],
	localExecutions: ["fileId", "attestationId"],
	diaryEntries: [
		"fileId",
		"analysisDate",
		"importMappingProvenance"
	]
}, Tr = {
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
}, Nr = {
	sleep: Ir,
	nonwear: Ir,
	summary: Ir,
	wide: Ir,
	circadian: {
		files: br,
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
	ggirReport: Ar,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: kr,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: br,
		markers: kr,
		actiwareFileData: [
			"fileId",
			"actiwareIntervals",
			"actiwareStatistics",
			"actiwareStatisticsNeedsRecompute"
		],
		actiwareStatisticsInputs: ["fileId", "input"]
	},
	actiwareSleepWake: {
		files: br,
		markers: kr,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: Rr,
	audit: Tr,
	ggirResults: {
		...Rr,
		...Ir,
		...Ar,
		auditLog: Tr.auditLog,
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
			O
		]
	}
}, Er = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap();
function Or(e, t, n, i) {
	for (let a = 0; a < n.byteLength;) {
		const r = n.subarray(a, a + Mn), s = e[t](r, { at: i + a });
		if (!Number.isInteger(s) || s <= 0 || s > r.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		a += s;
	}
}
function Lr(e) {
	if (!e || "object" != typeof e) return e;
	const t = $r.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return Or(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(Lr) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Lr(t)])) : structuredClone(e);
}
function Br(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(Br), Object.freeze(e)), e;
}
const Cr = [
	"sleep",
	"circadian",
	"ggirReport",
	"event"
];
var Dr = class extends Error {};
function Pr(e, t, n) {
	const i = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new Dr(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (i(t), Reflect.get(e, t, n)),
		has: (e, t) => (i(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (i(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function Fr(e, t, n = []) {
	const i = Er.get(e);
	if (!i) throw new Dr("Export requires a captured input snapshot");
	const a = Object.entries(Nr).find(([, e]) => e === t)?.[0];
	if (!a) throw new Dr("Export producer has no registered input declaration");
	const r = {};
	for (const [s, o] of Object.entries(t)) {
		const e = i[s].filter((e) => !n.length || "studySettings" === s || n.includes("files" === s ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const i of o.filter((e) => e in t)) Object.defineProperty(n, i, {
				enumerable: !0,
				get: () => Br(Lr(t[i]))
			});
			return Pr(n, o, `${a}: undeclared field ${s}.`);
		});
		Object.assign(r, { [s]: Object.freeze(e) });
	}
	return Pr(r, Object.keys(t), `${a}: undeclared table `);
}
function Wr(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	for (const a of e.markers) {
		if (a.fileId !== t || a.username !== n) continue;
		const e = oe(a), r = i.get(a.date) ?? [];
		r.push(e), i.set(a.date, r);
	}
	return i;
}
function jr(e, t, n) {
	return new Map([...Wr(e, t, n)].flatMap(([e, t]) => {
		const n = q(t.filter(h));
		return n ? [[e, n]] : [];
	}));
}
const Ur = /* @__PURE__ */ new WeakMap();
function zr(e, t, n, i) {
	let a = Ur.get(e);
	a || (a = /* @__PURE__ */ new Map(), Ur.set(e, a));
	const r = JSON.stringify([t, n]);
	let s = a.get(r);
	return s || (a.clear(), s = async function(e, t, n, i) {
		const a = Fr(e, Nr.ggirReport, [t]), r = a.files.find((e) => e.id === t), s = a.ggirResultsBundles.find((e) => e.fileId === t), o = Wr(a, t, n), l = s ? await gr(t, s.imported, o, r.ggirClockSteps, i) : o, u = new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), c = s ? await Mr(s, u, r.ggirClockSteps, void 0, i) : void 0;
		return {
			markersByAlgo: l,
			selected: u,
			bundle: c ? await Gr(c, i) : void 0
		};
	}(e, t, n, i), a.set(r, s), s.catch(() => {
		a.get(r) === s && a.delete(r);
	})), s;
}
async function Gr(e, t) {
	const { ggirCell: n, ggirNum: i } = await import("./ggir-results-types-WB8axvb-.js").then((e) => e.i), a = e.part2Reports?.["part2_daysummary.csv"], r = e.cleanedNightsCsv ? await j(t).readGgirReportCsv(e.cleanedNightsCsv, e.configCsv) : void 0, s = /* @__PURE__ */ new Map();
	if (a) for (let u = 0; u < a.rows; u++) {
		const e = n(a, x.ggir_id.header, u), t = Xn(n(a, x.ggir_calendar_date.header, u));
		if (null == e || !t) continue;
		const i = JSON.stringify([String(e), t]);
		s.set(i, s.has(i) ? null : u);
	}
	const o = ei(e.imported, "nights"), l = async (e) => {
		const l = e.nights, u = await Promise.all(Array.from({ length: l.rows }, async (u, c) => {
			const d = n(l, x.ggir_id.header, c), m = s.get(JSON.stringify([null == d ? null : String(d), o(l, c, !1)])), p = a && null != m ? n(a, x.ggir_day_valid_hours.header, m) : null, g = a && null != m ? n(a, x.ggir_day_hours.header, m) : null, h = a && null != m ? i(a, x.ggir_day_valid_hours.header, m) : null, f = a && null != m ? i(a, x.ggir_day_hours.header, m) : null, _ = null != h && null != f ? await j(t).ggirDayValidFraction(h, f) : null, w = i(l, x.ggir_night.header, c), y = Array.from({ length: e.days.rows }, (e, t) => t).find((t) => "WW" === n(e.days, "window", t) && i(e.days, "night_number", t) === w), v = r ? Array.from({ length: r.rows }, (e, t) => t).find((e) => String(n(r, x.ggir_id.header, e)) === String(d) && i(r, x.ggir_night.header, e) === w) : void 0, M = {
				ggir_nonwear_perc_spt: e.nightRecomputed[c] ? void 0 === y ? null : n(e.days, x.ggir_nonwear_perc_spt.header, y) : l.columns.includes(x.ggir_nonwear_perc_spt.header) ? n(l, x.ggir_nonwear_perc_spt.header, c) : r?.columns.includes(x.ggir_nonwear_perc_spt.header) && void 0 !== v ? n(r, x.ggir_nonwear_perc_spt.header, v) : void 0 === y ? null : n(e.days, x.ggir_nonwear_perc_spt.header, y),
				ggir_day_valid_hours: p,
				ggir_day_hours: g,
				ggir_day_valid_fraction: _ ?? null
			}, b = (a ? null === m ? "duplicate_part2_day" : void 0 === m ? "no_matching_part2_day" : null : "source_reported_missing") ?? "source_reported_missing";
			return {
				values: M,
				reasons: {
					ggir_day_valid_hours: null == h ? b : null,
					ggir_day_hours: null == f ? b : null,
					ggir_day_valid_fraction: null != _ ? null : null != f && f <= 0 ? "not_applicable_to_row" : b
				}
			};
		})), c = S.ggir_review_night_extension, d = [.../* @__PURE__ */ new Set([
			...l.columns,
			...c.map((e) => x[e].header),
			...c.map((e) => x[e].header + "_missing_reason")
		])], m = d.map((e) => {
			const t = c.find((t) => x[t].header + "_missing_reason" === e);
			if (t) return u.map((e) => e.reasons[t] ?? null);
			const n = c.find((t) => x[t].header === e);
			return n ? u.map((e) => e.values[n] ?? null) : l.values[l.columns.indexOf(e)];
		});
		return {
			...e,
			nights: {
				...l,
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
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await l(e.imported),
		...e.current ? { current: await l(e.current) } : {}
	};
}
function Vr(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function Hr(e) {
	return Fr(e, Nr.ggirResults).studySettings.flatMap((e) => K(e).map((e) => ({
		file: "sleep_export.csv",
		row: 0,
		key: e.filename,
		column: `${e.category}: ${e.reason}`,
		reason: "not_computed_for_export"
	})));
}
const qr = "not included", Kr = "included if produced";
function Yr(e) {
	const t = e.artifacts ?? null, n = t ? null : e.planned ?? null, i = e.columns, a = t ? t.sleepRows.length : n?.sleepRows ?? null, r = t ? t.sleepRows.filter((e) => e.markerType === u.MAIN_SLEEP).length : n?.mainSleepRows ?? null, s = t ? Ki(t.sleepRows).size : n?.wideRows ?? null, o = t ? t.summaryRows.length : n?.summaryRows ?? null, l = t ? t.nonwearRows.length : n?.nonwearRows ?? null, c = t ? t.physicalActivityRows.length : n?.activityRows ?? null, d = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : n?.activityDates ?? null, p = t ? t.eventMarkerRows?.length ?? 0 : n?.eventMarkerRows ?? null, g = t ? t.actiwareIntervalRows?.length ?? 0 : n?.actiwareIntervalRows ?? null, h = t ? t.actiwareSleepWakeCsv?.rows ?? 0 : n?.actiwareSleepWakeRows ?? null, f = n?.actogramFiles ?? null, w = t ? Object.keys(t.ggirEntries) : null, y = (w ? w.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
		const n = Math.max(0, m(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
		return {
			name: e,
			include: n > 0,
			rows: n
		};
	}) : n ? [...pi([...n.part4Rows.keys()])].map(([e, t]) => ({
		name: t,
		include: n.ggirMainSleepGroupKeys.includes(e),
		rows: n.part4Rows.get(e) ?? null
	})) : []).sort((e, t) => e.name.localeCompare(t.name)), v = w ? w.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [ci, ...n?.ggirReviewEntries ?? []], M = (e) => null == e ? null : e > 0, b = (n, a, r) => {
		const s = null == a ? "unknown" : a ? "included" : "not_included";
		return "included" !== s ? {
			name: n,
			state: s,
			rows: null,
			detail: "unknown" === s ? r.detail : qr,
			estimatedBytes: 0,
			write: null
		} : {
			name: n,
			state: s,
			rows: r.rows,
			detail: r.detail,
			estimatedBytes: r.estimatedBytes ?? ((r.rows ?? 0) + 1) * (r.columns ?? i) * 12,
			write: t ? () => r.csv ? vi(r.csv(t)) : r.encode(t) : null,
			...t && (r.chunkField || r.wide) ? { batches: function* () {
				if (r.wide) {
					const e = Yi(t.sleepRows, !0), n = e.next().value;
					for (const t of e) {
						const e = n + "\n" + t;
						yield {
							bytes: vi(e),
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
						}, s = !e.selectedColumns?.length || "sleepRows" !== r.chunkField && "nonwearRows" !== r.chunkField ? void 0 : ea(a[r.chunkField], void 0, !0), o = r.csv(a);
						yield {
							bytes: vi(o),
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
		b("sleep_export.csv", M(a), {
			rows: a,
			detail: null == a ? Kr : `${String(a)} rows · ${String(i)} columns`,
			chunkField: "sleepRows",
			csv: (t) => ea(t.sleepRows, e.selectedColumns ?? void 0, !0)
		}),
		b("sleep_export_wide.csv", !!e.includeWideFormat && M(s ?? r), {
			rows: s,
			detail: null == s ? Kr : `${String(s)} participant group ${1 === s ? "row" : "rows"}`,
			wide: !0,
			csv: (e) => function(e, t = !1) {
				return [...Yi(e, t)].join("\n");
			}(e.sleepRows, !0)
		}),
		b("summary_export.csv", M(o ?? r), {
			rows: o,
			detail: null == o ? Kr : `${String(o)} participant ${1 === o ? "row" : "rows"}`,
			chunkField: "summaryRows",
			csv: (e) => function(e, t = !1) {
				const n = Xi("summary_csv", e, Wi, void 0, t), i = [
					"summary_mean_temperature_c",
					"sleep_regularity_index",
					...Object.values(Fi).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
				];
				return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? m(n).records.map((t, n) => 0 === n ? t.text + "," + i.map((e) => x[e].header + "_missing_reason").join(",") : t.text + "," + i.map((t) => {
					const i = e[n - 1];
					return "summary_mean_temperature_c" === t ? null == i.meanTemperature ? i.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? i.sleepRegularityMissingReason ?? "" : i.metricMissingReasons?.[t] ?? "";
				}).join(",")).join("\n") : n;
			}(e.summaryRows, !0)
		}),
		b("nonwear_export.csv", M(l), {
			rows: l,
			detail: null == l ? Kr : `${String(l)} periods`,
			chunkField: "nonwearRows",
			csv: (t) => ea(t.nonwearRows, e.selectedColumns ?? void 0, !0)
		}),
		b("event_markers_export.csv", M(p), {
			rows: p,
			detail: null == p ? Kr : `${String(p)} button ${1 === p ? "press" : "presses"}`,
			columns: ta.length,
			chunkField: "eventMarkerRows",
			csv: (e) => function(e, t = !1) {
				const n = [[...ta, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
				for (const i of e) n.push([
					i.filename,
					i.participantId ?? "",
					i.studyDate,
					ra(i.localTimestamp),
					null == i.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (i.localTimestamp - 60 * i.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
					...t ? [i.participantId ? "" : "source_reported_missing", null == i.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
				].map((e) => _(e)).join(","));
				return `${n.join("\n")}\n`;
			}(e.eventMarkerRows ?? [], !0)
		}),
		b("actiware_intervals_export.csv", M(g), {
			rows: g,
			detail: null == g ? Kr : `${String(g)} Actiware intervals`,
			columns: ua.length,
			chunkField: "actiwareIntervalRows",
			csv: (e) => da(e.actiwareIntervalRows ?? [], !0)
		}),
		b(ma, M(h), {
			rows: h,
			detail: null == h ? Kr : `${String(h)} Actiware Sleep/Wake epochs`,
			columns: pa.length,
			encode: (e) => e.actiwareSleepWakeCsv.bytes
		}),
		b("physical_activity_export.csv", M(c), {
			rows: c,
			detail: null == c || null == d ? Kr : `${String(c)} rows · ${String(d)} distinct dates`,
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
				]), s = e.some((e) => "ggir_enmo" === e.method) ? Ja.filter((e) => !a.has(e) && (Fn.has(e) || r.has(e))) : [], o = [
					"Participant ID",
					"Threshold Preset Name",
					"Inclusion Rule Preset Name",
					"Scored Username",
					"Source Content Hash",
					"Validation Notes",
					"Notes"
				], l = [[
					...Ja.filter((e) => !a.has(e)),
					...s.map((e) => `${e}_missing_reason`),
					...i ? [
						"Epoch Length Seconds",
						"Native Epoch Seconds",
						"Mask Overlap Epochs"
					].map((e) => e + "_missing_reason") : [],
					...o.map((e) => e + "_missing_reason")
				].join(",")];
				for (const u of e) {
					const e = er(u), t = null == u.sedentaryMinutes || !n && null == u.excludedNonwearMinutes ? null : u.sedentaryMinutes + (n ? 0 : u.excludedNonwearMinutes), c = [
						Qa(u.filename),
						Qa(u.participantId),
						Qa(u.analysisDate),
						Qa(u.method),
						Qa(u.methodLabel),
						Qa(u.methodFamily),
						Qa(u.requiredSignalContract),
						Qa(u.computationOwner),
						String(u.frontendComputesMetric),
						Qa(u.sourceSignal),
						Qa(u.status),
						Qa(u.methodRule),
						Qa(u.thresholdSource),
						Qa(u.thresholdPresetName),
						Xa(u.sedentaryMax),
						Xa(u.lightMin),
						Xa(u.moderateMin),
						Xa(u.vigorousMin),
						Xa(t),
						Xa(u.lightMinutes),
						Xa(u.moderateMinutes),
						Xa(u.vigorousMinutes),
						Xa(u.mvpaMinutes),
						Xa(u.mimsUnitTotal),
						null == u.epochLengthSeconds ? "" : String(u.epochLengthSeconds),
						String(u.epochsReviewed),
						Xa(u.wakeWearMinutes),
						Xa(u.excludedNonwearMinutes),
						Xa(u.excludedMainSleepMinutes),
						Xa(u.excludedNapMinutes),
						null == u.maskOverlapEpochs ? "" : String(u.maskOverlapEpochs),
						null == u.mvpaBouts ? "" : String(u.mvpaBouts),
						Xa(u.mvpaBoutMinutes),
						null == u.sedentaryBouts ? "" : String(u.sedentaryBouts),
						null == u.sedentaryBreaks ? "" : String(u.sedentaryBreaks),
						Xa(u.meanSedentaryBoutMinutes),
						null == u.nativeEpochSeconds ? "" : String(u.nativeEpochSeconds),
						String(u.epochMismatch),
						Qa(u.inclusionRulePresetName),
						String(u.maskExcludeNonwear),
						String(u.maskExcludeMainSleep),
						String(u.maskExcludeNaps),
						String(u.maskUseManualNonwear),
						String(u.maskUseAlgorithmNonwear),
						Qa(u.maskNonwearDetector),
						Xa(u.maskMinimumWakeWearMinutes),
						Qa(u.scoredUsername),
						Qa(u.sourceContentHash),
						Qa(u.exportedAt),
						Qa(e.status),
						Qa(e.notes),
						Qa(u.notes)
					], d = {
						"Sedentary Minutes": null == t ? null : u.sedentaryMinutes,
						"Light Minutes": u.lightMinutes,
						"Moderate Minutes": u.moderateMinutes,
						"Vigorous Minutes": u.vigorousMinutes,
						"MVPA Minutes": u.mvpaMinutes,
						"Wake Wear Minutes": u.wakeWearMinutes,
						"Excluded Nonwear Minutes": u.excludedNonwearMinutes
					}, m = {
						"Excluded Main Sleep Minutes": u.excludedMainSleepMinutes,
						"Excluded Nap Minutes": u.excludedNapMinutes,
						"MVPA Bouts": u.mvpaBouts,
						"MVPA Bout Minutes": u.mvpaBoutMinutes,
						"Sedentary Bouts": u.sedentaryBouts,
						"Sedentary Breaks": u.sedentaryBreaks,
						"Mean Sedentary Bout Minutes": u.meanSedentaryBoutMinutes
					}, p = s.map((e) => {
						const t = c[Ja.indexOf(e)];
						if ("ggir_enmo" !== u.method || "" !== t) return "";
						if (Fn.has(e)) {
							const t = d[e];
							return null != t && Number.isFinite(t) ? "" : "source_reported_missing";
						}
						return r.has(e) && null == m[e] ? "not_computed_for_export" : "";
					}), g = i ? [
						["Epoch Length Seconds", null == u.epochLengthSeconds && "ggir_enmo" === u.method ? "not_applicable_to_row" : ""],
						["Native Epoch Seconds", null == u.nativeEpochSeconds ? "not_applicable" === u.thresholdSource ? "not_applicable_to_row" : "source_reported_missing" : ""],
						["Mask Overlap Epochs", null == u.maskOverlapEpochs ? "ggir_enmo" === u.method ? "not_applicable_to_row" : "needs_signal" === u.status ? "channel_unavailable" : "backend_required" === u.status ? "not_computed_for_export" : "" : ""]
					].map(([e, t]) => "" === c[Ja.indexOf(e)] ? t : "") : [];
					l.push([
						...c.filter((e, t) => !a.has(Ja[t])),
						...p,
						...g,
						...o.map((e) => "" !== c[Ja.indexOf(e)] ? "" : [
							"Participant ID",
							"Scored Username",
							"Source Content Hash"
						].includes(e) ? "source_reported_missing" : "not_applicable_to_row")
					].join(","));
				}
				return `${l.join("\n")}\n`;
			}(e.physicalActivityRows, e.physicalActivityEnabledClasses, e.physicalActivityNonwearAsClass, !0)
		}),
		...y.map(({ name: e, include: t, rows: n }) => b(e, t, {
			rows: n,
			detail: null == n ? Kr : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
			columns: 40,
			encode: (t) => t.ggirEntries[e]
		})),
		...v.map((e) => b(e, !(!w && !n?.ggirReviewEntries.includes(e)) || (null == f ? null : f > 0), {
			rows: null,
			detail: e.endsWith(".html") ? null == f ? w ? "1 report" : Kr : `1 report · ${String(f)} ${1 === f ? "file" : "files"}` : "1 GGIR report artifact",
			encode: (t) => t.ggirEntries[e]
		})),
		{
			name: Vn,
			state: "included",
			rows: null,
			detail: "1 reason per missing cell",
			estimatedBytes: 2048 + (t?.actiwareSleepWakeCsv?.reasonChunks.reduce((e, t) => e + t.byteLength, 0) ?? n?.actiwareMissingReasonBytes ?? 0),
			write: null
		},
		b("codebook.csv", !0, {
			rows: ji.length,
			detail: `${String(ji.length)} definitions`,
			estimatedBytes: new TextEncoder().encode(Vi()).length,
			encode: () => vi(Vi(void 0, !0))
		}),
		{
			name: bn,
			state: "included",
			rows: null,
			detail: "1 manifest · run, settings, entry hashes",
			estimatedBytes: 2048,
			write: null
		}
	];
}
async function Jr(e, t) {
	return e.transaction("r", [
		e.files,
		e.markers,
		e.sensorNonwear,
		e.dailyGgirSummaries
	], async () => {
		const n = await Y(e, t.length ? { onlyFileIds: t } : void 0), i = n.map((e) => e.id), [a, r, s] = await Promise.all([
			e.markers.where("fileId").anyOf(i).toArray(),
			e.sensorNonwear.where("fileId").anyOf(i).toArray(),
			e.dailyGgirSummaries.where("fileId").anyOf(i).toArray()
		]);
		return pe({
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
async function Zr(n, i, a, r = {}) {
	const { signal: s, producers: l = {} } = r;
	s?.throwIfAborted(), r.progress?.(0, 0, "Checking the export inputs");
	const c = await Jr(n, i.fileIds), p = await Qr(null, "checking the export inputs", () => async function(e, t = L(), n = {}) {
		const i = /* @__PURE__ */ new Map();
		for (const c of (n.readPlan ?? Object.keys(Nr)).map((e) => Nr[e])) for (const [e, t] of Object.entries(c)) {
			const n = e;
			i.set(n, /* @__PURE__ */ new Set([...i.get(n) ?? [], ...t]));
		}
		if (!i.size) {
			const e = Object.freeze({ files: Object.freeze([]) });
			return Er.set(e, {}), e;
		}
		let a = 268435456;
		const r = (e) => {
			if (e instanceof ArrayBuffer ? a -= e.byteLength : "string" == typeof e ? a -= 2 * e.length : e && "object" == typeof e ? Object.values(e).forEach(r) : a -= 8, a < 0) throw new Error("Export snapshot exceeds 256 MiB. Select fewer recordings or a narrower workspace before exporting.");
		};
		let s = 0;
		const o = (e) => {
			if (n.binaryStore && (e instanceof ArrayBuffer || ArrayBuffer.isView(e))) {
				const t = e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), i = Object.freeze({}), a = e instanceof ArrayBuffer ? null : e.constructor;
				return Or(n.binaryStore, "write", t, s), $r.set(i, {
					at: s,
					length: t.byteLength,
					store: n.binaryStore,
					restore: a ? (e) => new a(e) : (e) => e
				}), s += t.byteLength, r(0), i;
			}
			return Array.isArray(e) ? e.map(o) : e && "object" == typeof e && Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, o(t)])) : (r(e), e);
		}, l = await t.transaction("r", [...i.keys()].map((e) => t[e]), async () => {
			const n = i.has("files") ? await Y(t, e.length ? { onlyFileIds: e } : void 0) : [], a = new Set(n.flatMap((e) => e.id ? [e.id] : [])), r = {};
			return await Promise.all([...i].map(async ([e, i]) => {
				const s = (e) => Object.fromEntries([...i].filter((t) => t in e).map((t) => [t, o(e[t])]));
				if (r[e] = [], "files" === e) return void (r[e] = n.map((e) => s(e)));
				const l = "diaryEntries" === e ? t.diaryEntries : X(t, e);
				await ("studySettings" === e ? l.where("key").equals("study") : l.where("fileId").anyOf([...a])).each((t) => {
					r[e].push(s(t));
				});
			})), r;
		}), u = new Set((l.ggirResultsBundles ?? []).map((e) => e.fileId));
		return l.markers = (l.markers ?? []).map((e) => u.has(e.fileId) && "invalid" === ce(void 0, oe(e)).kind ? {
			...e,
			isInvalidNight: !0
		} : e), function(e) {
			const t = Object.freeze({ files: Br((e.files ?? []).map((e) => Object.fromEntries(br.map((t) => [t, Lr(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
			return Er.set(t, e), t;
		}(l);
	}(i.fileIds, n, r)), g = function(e, t, n, i) {
		const a = [], r = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = [], u = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), c = (e) => {
			for (const t of e.charts) l.push({
				key: t.key,
				pid: t.pid,
				charts: t.charts.length
			}), r.push(_i(r.length, t));
			for (const [t, n] of e.csvLinesByAlgo) o.set(t, d(n[0]));
			for (const [t, n] of e.headers) s.set(t, [.../* @__PURE__ */ new Set([...s.get(t) ?? [], ...n])]);
			a.push({
				csvLinesByAlgo: e.csvLinesByAlgo,
				ggirReviews: e.ggirReviews
			});
		};
		async function* p(e, t) {
			for (const n of a) i?.throwIfAborted(), yield bi(n, {
				signal: i,
				names: t,
				layouts: s,
				only: e
			}).then((t) => t[e]);
		}
		function* g() {
			const e = pi([...o.keys()]);
			for (const [t, n] of o) s.set(e.get(t), n);
			for (const t of Object.values(Qn)) {
				const e = s.get(t);
				e && s.set(t, [
					...e.filter((e) => !e.endsWith("_missing_reason") && !Jn.includes(e)),
					...Jn,
					...e.filter((e) => e.endsWith("_missing_reason") && !Jn.some((t) => e === t + "_missing_reason")),
					...Jn.map((e) => e + "_missing_reason")
				]);
			}
			for (const [t, n] of s) yield {
				name: t,
				chunks: async function* () {
					yield vi(n.map(_).join(",") + "\n");
					for await (const n of p(t, e)) {
						if (!n) continue;
						const e = new TextDecoder().decode(n), t = m(e).records[0], i = vi(e.slice(t.text.length + 1));
						for (let n = 0; n < i.byteLength; n += Mn) yield i.subarray(n, n + Mn);
					}
				}()
			};
			l.length && (yield {
				name: ci,
				chunks: async function* () {
					yield* yi(function(e, t) {
						const n = e.map((e) => e.key), i = e.reduce((e, t) => e + t.charts, 0);
						return `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${ui(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${ui(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${i} chart${1 !== i ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${ui(e[n].pid)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`;
					}(l, u));
					for await (const { bytes: e, lengths: t } of async function* () {
						for (const { blob: e, lengths: t } of r) i?.throwIfAborted(), yield e.arrayBuffer().then((e) => ({
							bytes: new Uint8Array(e),
							lengths: t
						}));
					}()) {
						let n = 0;
						for (const i of t) yield e.subarray(n, n += i);
					}
					for (const e of wi) yield* yi(e);
				}()
			});
		}
		return {
			add: c,
			addFiles: async (a) => {
				for (const r of a) c(await ki({
					username: e,
					dateRange: t,
					snapshot: n,
					generatedAt: u
				}, r, i));
			},
			entries: async () => [...g()].reduce(async (e, t) => {
				const n = await e, i = [];
				for await (const a of t.chunks) i.push(a);
				return n[t.name] = ae(i), n;
			}, Promise.resolve({})),
			streamEntries: g,
			generatedAt: u
		};
	}(i.username, i.dateRange, p, s), h = [];
	for (const e of p.files) {
		const t = h.at(-1);
		t?.[0]?.filename === e.filename ? t.push(e) : h.push([e]);
	}
	const f = [], w = [], y = [];
	let v = !1;
	const M = i.manifest.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), b = r.groups ?? {
		size: 1,
		run: (i, a, r) => async function(n, i, a, { db: r, signal: s }) {
			s?.throwIfAborted();
			const l = n.files.filter((e) => i.includes(e.id)), c = l.map((e) => e.id), d = /* @__PURE__ */ new Map();
			let m = !1;
			try {
				const e = await function(e, { fileIds: t, dateRange: n, signal: i }) {
					const a = Fr(e, Nr.circadian, t);
					return async function(e, t, { dateRange: n, signal: i }) {
						const a = j(i), r = [];
						let s = 0;
						for (const l of e) {
							if (!l.id) continue;
							i?.throwIfAborted();
							const e = await t(l.id), u = [];
							for (const t of e.values()) {
								if (i?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
								s += 1;
								const e = It(l.id, t);
								e && u.push(e);
							}
							if (0 === u.length) continue;
							const { request: c, transfer: d } = St(u.map((e) => e.wire)), m = await a.computeCircadian(o(c, d));
							i?.throwIfAborted();
							const p = new Map(u.map((e) => [e.wire.id, e.source]));
							for (const t of m.day_summaries) {
								const e = p.get(t.id);
								t.has_signal && e && r.push({
									fileId: l.id,
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
					}(t.length > 0 ? a.files.filter((e) => null != e.id && t.includes(e.id)) : a.files, (e) => Vr(a, e), {
						dateRange: n,
						signal: i
					});
				}(n, {
					fileIds: c,
					dateRange: a.dateRange,
					signal: s
				});
				for (const t of e.daySummaries) d.set(`${t.fileId}|${t.date}`, {
					l5Hour: t.l5Hour,
					m10Hour: t.m10Hour
				});
			} catch (h) {
				if (h instanceof Dr) throw h;
				if (s?.throwIfAborted(), m = !0, h instanceof DOMException && "AbortError" === h.name) throw h;
			}
			const p = await Qr(l[0].filename, "computing its sleep rows", () => async function(n, i, a, r, s, o, l) {
				const c = s && s.trim().length > 0 ? s.trim() : null, d = Fr(o, Nr.sleep, n), m = d.files, p = $t(d.studySettings[0]?.extraSettings), g = (n.length > 0 ? m.filter((e) => null != e.id && n.includes(e.id)) : [...m]).sort((e, t) => e.filename.localeCompare(t.filename)), [h, f] = a ?? ["", ""], _ = [], w = [], y = [], v = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), b = async () => {
					for (const [e, t] of v) M.set(e, await Ci(e, t, _, l));
					v.clear();
				}, k = /* @__PURE__ */ new Map(), S = (e) => {
					const t = JSON.stringify(e);
					let n = k.get(t);
					return n || (n = j(l).exportNapAggregate(e), k.set(t, n)), n;
				}, A = await Promise.all(g.map((e) => zr(o, e.id, i, l)));
				for (const [T, N] of g.entries()) {
					if (l?.throwIfAborted(), T > 0 && g[T - 1].filename !== N.filename && await b(), !N.id) continue;
					const n = Vr(d, N.id), { bundle: i, markersByAlgo: s } = A[T], o = i?.edits ?? [], m = i ? _e(i.imported) : [], { zone: M } = await Ct(N, p, l), k = [.../* @__PURE__ */ new Set([...N.availableDates, ...m.map((e) => e.nightDate)])].sort(), R = a ? k.filter((e) => e >= h && e <= f) : k, E = ee(n.values());
					for (const a of R) {
						l?.throwIfAborted();
						const d = s.get(a);
						if (d && 0 !== d.length) for (const s of d) {
							if (!s.isInvalidNight && 0 === s.sleepMarkers.length && 0 === s.nonwearMarkers.length) continue;
							const d = N.participantId ?? null, p = N.id, g = s.algorithm ?? null, h = s.username ?? null, f = s.needsConsensus, b = s.notes, k = n.get(a), A = await I(a, void 0, j(l)), R = n.get(A), T = {
								fileId: p,
								filename: N.filename,
								participantId: d,
								studyDate: a,
								algorithm: g,
								scoredBy: h,
								needsConsensus: f,
								notes: b,
								meanTemperature: null,
								meanWhiteLight: null,
								meanRedLight: null,
								meanGreenLight: null,
								meanBlueLight: null,
								detectionRule: s.detectionRule ?? null,
								periodGuider: s.periodGuider ?? null,
								...$i(s.sleepPeriodDetectionConfig),
								algorithmVersion: s.algorithmVersion ?? null,
								verificationStatus: null,
								studyId: c,
								dstTransition: await Ee(M, a, void 0, j(l))
							}, $ = await S(s.sleepMarkers.filter((e) => e.markerType === u.NAP).map((e) => ({
								start: e.onsetTimestamp,
								end: e.offsetTimestamp
							}))), O = r?.get(`${String(p)}|${a}`), L = {
								l5Hour: O?.l5Hour ?? null,
								m10Hour: O?.m10Hour ?? null,
								napCount: $.napCount,
								totalNapMinutes: $.napCount > 0 ? $.totalNapMinutes : null
							}, B = s.nonwearMarkers.map((e) => ({
								start: e.startTimestamp,
								end: e.endTimestamp
							})), C = E(g), D = Tt(k, C), P = `${N.filename}\0${d ?? ""}\0${T.algorithm ?? ""}\0${T.detectionRule ?? ""}`, F = v.get(P) ?? [];
							F.push({
								date: a,
								epochLengthSeconds: N.epochLengthSeconds || 60,
								timestamps: D.timestamps,
								states: D.algorithmResults,
								stale: "stale" === C.status
							}), v.set(P, F);
							const W = k?.temperature ? new Float64Array(k.temperature) : null, U = re(k).timestamps, z = R?.temperature ? new Float64Array(R.temperature) : null, G = re(R).timestamps, V = await Ht(n, a, C, { signal: l }), H = async (e, t, n) => {
								if (!t || !n) return null;
								const i = (e) => e ? new Float64Array(e) : null;
								return xi([[i(k?.[e]), U], [i(R?.[e]), G]], t, n, l);
							}, q = (e, t) => xi([[W, U], [z, G]], e, t, l), K = async (n, r) => {
								let c = null;
								const d = m.find((e) => e.nightDate === a), p = i && d && n.markerType === u.MAIN_SLEEP && "invalid" !== ce(d, s).kind, g = d && o.some((e) => e.night === d.night), h = Oi(null), f = {};
								let _ = "not_applicable_to_row";
								if (!p && n.onsetTimestamp && n.offsetTimestamp) {
									const { timestamps: e, algorithmResults: t, activity: i, scoresStale: a } = V;
									if (null !== a && 0 === y.length && y.push({
										component: "metric_computation",
										code: "unavailable",
										message: a
									}), _ = null !== a ? "scores_from_another_config" : null == t ? "no_scored_epochs" : null == i ? "channel_unavailable" : 0 === e.length ? "no_valid_epochs" : void 0, null != t && e.length > 0 && (null != i || re(k).ggir)) {
										const a = re(k).ggir ? re(k).epochSec : N.epochLengthSeconds || 60, r = await Bi(t, i, e, n.onsetTimestamp, n.offsetTimestamp, a, l);
										c = r.metrics, c || r.error || (_ = "no_valid_epochs"), r.error && (_ = "not_computed_for_export"), r.error && 0 === y.length && y.push({
											component: "metric_computation",
											code: "unavailable",
											message: "Metric computation failed for at least one selected period; those rows carry no numerics."
										});
									}
								}
								if (p) {
									_ = "channel_unavailable";
									const n = g ? i.current?.nights : i.imported.nights, a = n ? t(n, x.ggir_night.header, d.night) : -1;
									for (const [t, i, r, s] of Li) {
										const o = n ? e(n, x[i].header, a) : null;
										h[t] = null == o ? null : o * s, f[r] = null == o ? g ? "not_computed_for_export" : "source_reported_missing" : void 0;
									}
								}
								(p || c && !("averageAwakeningLengthMinutes" in c)) && (f.average_awakening_length_minutes = "not_computed_for_export");
								const w = await j(l).exportPeriodFigures(n.onsetTimestamp, n.offsetTimestamp, B), v = Boolean(n.onsetTimestamp && n.offsetTimestamp), M = {
									...T,
									...L,
									periodIndex: n.markerIndex,
									markerType: n.markerType,
									onsetTimestamp: n.onsetTimestamp,
									offsetTimestamp: n.offsetTimestamp,
									...p ? h : Oi(c),
									metricMissingReason: _,
									isInvalidNight: r,
									meanTemperature: n.onsetTimestamp && n.offsetTimestamp ? await q(n.onsetTimestamp, n.offsetTimestamp) : null,
									meanWhiteLight: await H("lux", n.onsetTimestamp, n.offsetTimestamp),
									meanRedLight: await H("redLight", n.onsetTimestamp, n.offsetTimestamp),
									meanGreenLight: await H("greenLight", n.onsetTimestamp, n.offsetTimestamp),
									meanBlueLight: await H("blueLight", n.onsetTimestamp, n.offsetTimestamp),
									sleepMidpointTimestamp: v ? w.midpointTimestamp : null,
									sleepMidpointHour: v ? w.midpointClockHour : null,
									validWearMinutes: w.validWearMinutes
								}, b = (e, t) => null != e ? void 0 : v ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
								return M.sensorMissingReasons = {
									mean_temperature_c: b(M.meanTemperature, Boolean(k?.temperature || R?.temperature)),
									mean_white_light_lux: b(M.meanWhiteLight, Boolean(k?.lux || R?.lux)),
									mean_red_light: b(M.meanRedLight, Boolean(k?.redLight || R?.redLight)),
									mean_green_light: b(M.meanGreenLight, Boolean(k?.greenLight || R?.greenLight)),
									mean_blue_light: b(M.meanBlueLight, Boolean(k?.blueLight || R?.blueLight))
								}, M.derivedMissingReasons = {
									...f,
									l5_hour: null == M.l5Hour ? O ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									m10_hour: null == M.m10Hour ? O ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									sleep_midpoint_time: null == M.sleepMidpointTimestamp ? v ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									sleep_midpoint_hour: null == M.sleepMidpointHour ? v ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									valid_wear_minutes: null == M.validWearMinutes ? v ? "no_valid_epochs" : "not_applicable_to_row" : void 0
								}, M;
							};
							if (s.isInvalidNight) {
								_.push({
									...T,
									...L,
									periodIndex: null,
									markerType: Ti,
									onsetTimestamp: null,
									offsetTimestamp: null,
									...Oi(null),
									isInvalidNight: !0,
									sleepMidpointTimestamp: null,
									sleepMidpointHour: null,
									validWearMinutes: null
								});
								for (const e of s.sleepMarkers) _.push(await K(e, !0));
							} else for (const e of s.sleepMarkers) _.push(await K(e, !1));
							for (const e of s.nonwearMarkers) w.push({
								...T,
								...L,
								periodIndex: e.markerIndex ?? 0,
								markerType: Ni,
								onsetTimestamp: e.startTimestamp,
								offsetTimestamp: e.endTimestamp,
								...Oi(null),
								isInvalidNight: !1,
								sleepMidpointTimestamp: null,
								sleepMidpointHour: null,
								validWearMinutes: null
							});
						}
					}
				}
				await b(), _.sort(Di), w.sort(Di);
				const R = await async function(e, t) {
					const n = e.filter((e) => e.markerType === u.MAIN_SLEEP), i = /* @__PURE__ */ new Map();
					for (const o of n) {
						const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = i.get(e);
						t ? t.push(o) : i.set(e, [o]);
					}
					const a = [...i], r = await j(t).summarizeExportGroups(a.map(([, e]) => e.map((e) => ({
						study_date: e.studyDate,
						total_nap_minutes: e.totalNapMinutes,
						values: Pi.map(([, t]) => e[t])
					})))), s = a.map(([e, t], n) => {
						const [i, a, s, o] = e.split("\0"), l = r[n], u = Object.fromEntries(Pi.map(([e], t) => [e, l.means[t] ?? null]));
						return {
							filename: i,
							participantId: a,
							algorithm: s,
							detectionRule: o,
							nNights: l.nNights,
							...u,
							meanTemperatureMissingReason: null == u.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
							metricMissingReasons: Object.fromEntries(Pi.map(([e, n]) => {
								const i = Fi[e], a = Li.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : i), r = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[a] ?? e.metricMissingReason).find(Boolean);
								return [i, null == u[e] ? r : void 0];
							})),
							sleepRegularityIndex: null,
							meanTotalNapMinutes: l.meanTotalNapMinutes,
							studyId: t[0]?.studyId ?? null
						};
					});
					return s.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), s;
				}(_, l);
				for (const e of R) {
					const t = `${e.filename}\0${e.participantId}\0${e.algorithm}\0${e.detectionRule}`, n = M.get(t);
					e.sleepRegularityIndex = n?.sri ?? null, e.sleepRegularityMissingReason = n?.sriMissingReason ?? (n ? void 0 : "not_computed_for_export");
				}
				return {
					sleepRows: _,
					nonwearRows: w,
					summaryRows: R,
					degradations: y
				};
			}(c, a.username, a.dateRange, d, a.studyId, n, s)), g = await Qr(l[0].filename, "drawing its visual report", async () => {
				const e = [];
				for (const t of l) e.push(await ki({
					...a,
					snapshot: n
				}, t, s));
				return e;
			});
			return {
				part: p,
				physicalActivityRows: await rr(c, a.dateRange, {
					username: a.username,
					cutpointOverrides: a.physicalActivity.cutpointOverrides,
					maskPolicy: a.physicalActivity.maskPolicy,
					choiAxis: a.physicalActivity.choiAxis,
					exportedAt: a.exportedAt,
					...s ? { signal: s } : {}
				}, r),
				eventMarkerRows: await oa(c, a.dateRange, n, a.username, s),
				circadianDegraded: m,
				reports: g
			};
		}(i, a, r, {
			db: n,
			signal: s
		})
	}, k = {
		username: i.username,
		studyId: i.studyId,
		dateRange: i.dateRange,
		physicalActivity: i.physicalActivity,
		exportedAt: M,
		generatedAt: g.generatedAt
	}, S = h.map(() => {
		const e = {};
		return e.promise = new Promise((t, n) => {
			e.resolve = t, e.reject = n;
		}), e.promise.catch(() => {}), e;
	});
	let A = 0, R = h.length, T = 0;
	r.progress?.(0, h.length, xn), Promise.all(Array.from({ length: Math.min(b.size, h.length) }, async () => {
		for (; A < R;) {
			const t = A++;
			try {
				S[t].resolve(await b.run(p, h[t].map((e) => e.id), k)), r.progress?.(++T, h.length, xn);
			} catch (e) {
				R = Math.min(R, t), S[t].reject(e);
			}
		}
	}));
	try {
		for (const e of S) {
			s?.throwIfAborted();
			const t = await e.promise;
			f.push(t.part);
			for (const e of t.reports) g.add(e);
			w.push(...t.physicalActivityRows), y.push(...t.eventMarkerRows), v ||= t.circadianDegraded;
		}
	} finally {
		R = 0;
	}
	if (r.progress?.(0, 0, Sn), await Jr(n, i.fileIds) !== c) throw new vn(null, "computing physical activity, because its inputs changed during the export");
	s?.throwIfAborted();
	const N = function(e) {
		return {
			sleepRows: e.flatMap((e) => e.sleepRows),
			nonwearRows: e.flatMap((e) => e.nonwearRows),
			summaryRows: e.flatMap((e) => e.summaryRows),
			degradations: e.flatMap((e) => e.degradations).slice(0, 1)
		};
	}(f), E = await async function(e, t, n, i, a) {
		a?.throwIfAborted();
		const r = Fr(n, Nr.actiwareInterval, e), s = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => r.actiwareFileData.find((t) => t.fileId === e.id));
		return (await Promise.all(s.map(async (e, n) => {
			a?.throwIfAborted();
			const s = jr(r, e.id, i), l = r.actiwareStatisticsInputs.find((t) => t.fileId === e.id), u = new Set(s.keys()), { actiwareStatisticsForScoredMarker: c } = await import("./local-data-source-Tt2pzSDA.js").then((e) => e.t);
			a?.throwIfAborted();
			const d = await c(o[n] ?? {}, l?.input, s, (e) => j(a).actiwareIntervalStatistics(e), a);
			a?.throwIfAborted();
			const m = await async function(e, t, n) {
				const i = (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), a = e.actiwareStatistics ?? [], r = await Gt([...i.map((e) => e.startTimestamp), ...a.map((e) => e.startTimestamp)], j(n)), s = /* @__PURE__ */ new Set(), o = i.map((t) => {
					const n = a.findIndex((e, n) => !s.has(n) && e.kind === t.kind && ca(e.startTimestamp, t.startTimestamp) && ca(e.endTimestamp, t.endTimestamp)), i = r(t.startTimestamp), o = n >= 0 ? a[n] ?? null : null;
					return n >= 0 && s.add(n), {
						filename: e.filename,
						participantId: e.participantId ?? null,
						studyDate: i,
						interval: t,
						statistics: o
					};
				}).filter((e) => !t || e.studyDate >= t[0] && e.studyDate <= t[1]);
				for (let l = 0; l < a.length; l += 1) {
					if (s.has(l)) continue;
					const n = a[l];
					if (!n) continue;
					const i = r(n.startTimestamp);
					t && (i < t[0] || i > t[1]) || o.push({
						filename: e.filename,
						participantId: e.participantId ?? null,
						studyDate: i,
						interval: {
							kind: n.kind,
							source: "sleep" === n.kind ? "event_marker" : "actiware_export",
							startTimestamp: n.startTimestamp,
							endTimestamp: n.endTimestamp,
							origin: "sleep" === n.kind ? "scorer" : "stored"
						},
						statistics: n
					});
				}
				return o.sort((e, t) => e.interval.startTimestamp - t.interval.startTimestamp || e.interval.kind.localeCompare(t.interval.kind));
			}({
				...e,
				...o[n],
				actiwareStatistics: d ?? []
			}, t, a), p = new Set([...s].filter(([, e]) => e.isInvalidNight).map(([e]) => e).filter((e) => !t || e >= t[0] && e <= t[1]));
			return function(e, t, n) {
				return [...e, ...[...t].map((e) => ({
					filename: n.filename,
					participantId: n.participantId ?? null,
					studyDate: e,
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
			}(m.filter((e) => u.has(e.studyDate)), p, e);
		}))).flat();
	}(i.fileIds, i.dateRange, p, i.username, s), $ = {}, O = function(e) {
		const t = Fr(e, Nr.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(p);
	if (O && ($["audit_log.jsonl"] = O), l.ggirResults) {
		const e = await l.ggirResults(Fr(p, Nr.ggirResults), s);
		for (const [t, n] of Object.entries(e)) {
			if (t in $) throw new Error(`${kn}${t}`);
			$[t] = n;
		}
	}
	const D = Fr(p, Nr.actiwareSleepWake);
	let P = 0;
	for (const e of D.files) {
		const t = D.actiwareFileData.find((t) => t.fileId === e.id)?.actiwareSleepWake;
		t && (P += await ha(t, i.dateRange, new Set(jr(D, e.id, i.username).keys()), j(s)));
	}
	const F = Fr(p, Nr.manifest), W = Object.fromEntries(N.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	v ||= N.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const U = [...v ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...N.degradations], z = await Qr(null, "reading saved GGIR source provenance", () => async function(e, t = j()) {
		return Object.fromEntries(await Promise.all(e.map(async (e) => {
			const [n, i] = await Promise.all([t.ggirAppConfigSummary(e.configCsv, !1), t.ggirNonwearApproach(e.configCsv)]);
			return [String(e.fileId), {
				configGgirVersion: n.configGgirVersion,
				nonwearApproach: i ?? null
			}];
		})));
	}(F.ggirResultsBundles, j(s))), G = [...g.streamEntries()], V = await async function(e) {
		const t = e.deflate ?? {
			lanes: 1,
			block: (e, t) => Promise.resolve(function(e, t) {
				if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
				const n = [], i = new ft(t?.byteLength ? {
					level: 1,
					dictionary: t
				} : { level: 1 }, (e) => {
					n.push(e);
				});
				i.push(e, !1), i.flush(!1);
				const a = i.s.r ?? 0;
				if (!Number.isInteger(a) || a < 0 || a > 2047) throw new Error("ZIP compression state is unreadable.");
				const r = (7 & a) > 5 ? 2 : 1, s = new Uint8Array(r + 4);
				return s[0] = a >> 3, s[r + 2] = 255, s[r + 3] = 255, n.push(s), ae(n);
			}(e, t))
		};
		if (!navigator.storage?.getDirectory) throw new Error("Streaming export requires temporary workspace storage (OPFS).");
		const n = await (await (await navigator.storage.getDirectory()).getDirectoryHandle(yn, { create: !0 })).getDirectoryHandle(e.scratchId, { create: !0 }), i = await n.getFileHandle(Vn, { create: !0 }), a = await n.getFileHandle("bundle.zip", { create: !0 }), r = new CompressionStream("gzip"), s = r.readable.pipeTo(await i.createWritable());
		s.catch(() => {});
		const o = r.writable.getWriter(), l = await a.createWritable();
		let u = [], c = 0, p = e.artifacts.importRefusalReasons?.length ?? 0;
		const g = [], h = new kt((e, t) => {
			if (e) throw e;
			u.push(t);
		}), f = async (e = 0) => {
			c = Math.max(c, e + u.reduce((e, t) => e + t.byteLength, 0));
			for (const t of u) await l.write(t);
			u = [];
		}, _ = /* @__PURE__ */ new Set();
		let w = 0;
		const y = async (n, i) => {
			if (_.has(n)) throw new Error(`${kn}${n}`);
			_.add(n);
			const a = new va(n), r = new C();
			let s = 0;
			h.add(a);
			const { blockBytes: o, inFlight: l } = function(e) {
				const t = Math.min(2 * e + 1, Math.floor(24)), n = Math.floor(1572864 / t) - 32768;
				return {
					blockBytes: n - n % 4096,
					inFlight: t - 1
				};
			}(t.lanes), u = [];
			let d = new Uint8Array(o), m = 0, p = /* @__PURE__ */ new Uint8Array(0), y = 0;
			const v = () => y + m + p.byteLength + u.length * (o + 32768), M = async () => {
				a.emit(await u.shift(), !1), await f(v());
			}, b = async () => {
				const e = d.subarray(0, m), n = e.slice(-32768);
				for (u.push(t.block(e, p)), p = n, d = new Uint8Array(o), m = 0; u.length > l;) await M();
			};
			try {
				for await (const t of i) {
					y = t.byteLength;
					for (let n = 0; n < t.byteLength; n += wa) {
						e.signal?.throwIfAborted();
						const i = t.subarray(n, n + wa);
						r.update(i), a.push(i, !1), s += i.byteLength;
						for (let e = 0; e < i.byteLength;) {
							const t = Math.min(i.byteLength - e, o - m);
							d.set(i.subarray(e, e + t), m), m += t, e += t, m === o && await b();
						}
						c = Math.max(c, v());
					}
				}
				for (y = 0, m && await b(); u.length;) await M();
			} finally {
				for (const e of u) e.catch(() => {});
			}
			a.push(/* @__PURE__ */ new Uint8Array(), !0), a.emit(ya, !0), await f(), g.push({
				name: n,
				contentHash: B(r.finalize()),
				byteLength: s
			}), e.progress?.(g.length, w, Sn);
		};
		try {
			await o.write(new TextEncoder().encode(Hn(e.artifacts.importRefusalReasons ?? [])));
			const t = [...Yr({
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
			w = t.filter((e) => e.write).length + 2, e.progress?.(0, w, Sn);
			for (const i of t) if (i.write) try {
				"actiware_sleep_wake_export.csv" === i.name ? await y(i.name, async function* () {
					for await (const t of e.sleepWake) e.signal?.throwIfAborted(), p += t.reasonRows, c = Math.max(c, t.bytes.byteLength + t.reasons.byteLength), await o.write(t.reasons), yield t.bytes;
				}()) : i.name.endsWith(".csv") ? await y(i.name, async function* () {
					let t = 0, n = !1, a = !1;
					const r = "actiware_intervals_export.csv" === i.name ? function* () {
						for (const t of e.artifacts.actiwareIntervalRows ?? []) {
							const [e, n] = m(da([t], !0)).records, i = d(n.text);
							yield new Map(d(e.text).map((e, t) => [e, i[t] ?? ""]));
						}
					} : void 0;
					for await (const e of i.batches?.() ?? Ma(i.chunks ?? [i.write()])) {
						if (e.bytes.byteLength > 4 * wa) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
						const s = Yn(e.text ?? new TextDecoder().decode(e.bytes), i.name, !0, {
							fullRowCsv: e.fullRowCsv,
							rowOffset: t,
							...r ? { contextRows: r } : {}
						});
						let l, u = "";
						for (;;) {
							const t = s.next();
							if (t.done) {
								l = t.value;
								break;
							}
							if (u += Hn([t.value], !1), p += 1, u.length >= wa / 2) {
								const t = new TextEncoder().encode(u);
								c = Math.max(c, e.bytes.byteLength + t.byteLength), await o.write(t), u = "";
							}
						}
						await o.write(new TextEncoder().encode(u));
						const d = n ? (a ? "" : "\n") + l.csv.slice(l.csv.indexOf("\n") + 1) : l.csv;
						n = !0, t += e.rows ?? 0, a = d.endsWith("\n");
						const m = new TextEncoder().encode(d);
						c = Math.max(c, e.bytes.byteLength + m.byteLength + 2 * u.length), yield m;
					}
				}()) : await y(i.name, i.chunks ?? [i.write()]);
			} catch (v) {
				throw new Error(`Export failed while writing ${i.name}`, { cause: v });
			}
			await o.close(), await s, await y(Vn, async function* () {
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
					contentHash: await Ui(t),
					byteLength: t.length
				})));
				return {
					schemaVersion: 6,
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
					executionAttestationIds: [...e.executionAttestationIds ?? []].sort(),
					degradations: [...e.degradations ?? []],
					files: n
				};
			}({
				...e.manifest,
				entries: g
			});
			return await y(bn, [new TextEncoder().encode(zi(n))]), h.end(), await f(), e.signal?.throwIfAborted(), await l.close(), {
				blob: await new Response((await a.getFile()).stream()).blob(),
				entries: g,
				peakBufferedBytes: c,
				reasonRows: p
			};
		} catch (M) {
			throw h.terminate(), await Promise.allSettled([
				o.abort(),
				l.abort(),
				s
			]), M;
		}
	}({
		artifacts: {
			importRefusalReasons: Hr(p),
			...N,
			physicalActivityRows: w,
			physicalActivityEnabledClasses: i.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: i.physicalActivity.nonwearAsClass,
			ggirEntries: $,
			eventMarkerRows: y,
			actiwareIntervalRows: E,
			actiwareSleepWakeCsv: {
				rows: P,
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
			algorithmVersions: W,
			degradations: U,
			ggirSources: z,
			ggirCorrections: Object.fromEntries(F.ggirResultsBundles.filter((e) => e.ggirCorrections).map((e) => [String(e.fileId), e.ggirCorrections])),
			executionAttestationIds: F.localExecutions.map((e) => e.attestationId),
			diaryTemporalPolicyByFile: Object.fromEntries(F.files.map((e) => [String(e.id), Object.fromEntries(F.diaryEntries.filter((t) => t.fileId === e.id).map((e) => [e.analysisDate, e.importMappingProvenance?.diaryTemporalPolicy ?? null]))]))
		},
		sleepWake: fa(i.fileIds, i.dateRange, p, i.username, s),
		scratchId: a,
		...s ? { signal: s } : {},
		...b.deflate ? { deflate: b.deflate } : {},
		...r.progress ? { progress: r.progress } : {}
	});
	return {
		...V,
		actiwareSleepWakeRows: P,
		degradations: U,
		hasData: N.sleepRows.length > 0 || N.nonwearRows.length > 0 || w.length > 0 || V.entries.some((e) => G.some((t) => t.name === e.name)) || Object.keys($).length > 0,
		rowCount: N.sleepRows.length + N.nonwearRows.length + N.summaryRows.length + w.length,
		dayCount: (/* @__PURE__ */ new Set([
			...N.sleepRows.map((e) => e.studyDate),
			...N.nonwearRows.map((e) => e.studyDate),
			...w.map((e) => e.analysisDate)
		])).size,
		fileCount: p.files.length
	};
}
async function Qr(e, t, n) {
	try {
		return await n();
	} catch (i) {
		if (i instanceof DOMException && "AbortError" === i.name) throw i;
		throw new vn(e, t, i);
	}
}
function Xr(e, t = /* @__PURE__ */ new Set()) {
	if (e instanceof ArrayBuffer) t.add(e);
	else if (ArrayBuffer.isView(e)) t.add(e.buffer);
	else if (e && "object" == typeof e) for (const n of Object.values(e)) Xr(n, t);
	return [...t];
}
function es(e, t) {
	const n = [], i = [], a = [];
	let s;
	const l = new Promise((e, t) => {
		s = t;
	});
	l.catch(() => {});
	const u = (e) => {
		const t = e.message;
		s(/* @__PURE__ */ new Error(`An export shard stopped before finishing its work: ${"messageerror" === e.type ? "a message from it could not be read" : t?.length ? t : "its script failed to load"}.`));
	}, c = async (e) => {
		const s = await (() => {
			const e = i.pop();
			if (e) return Promise.resolve(e);
			if (n.length < t) {
				const e = new Worker(new URL("/sleep-scoring-wasm/assets/local-export-shard-worker-BcyjCID9.js", "" + import.meta.url), { type: "module" });
				return e.addEventListener("error", u), e.addEventListener("messageerror", u), n.push(e), Promise.resolve(r(e));
			}
			return new Promise((e) => {
				a.push(e);
			});
		})();
		try {
			return await Promise.race([e(s), l]);
		} finally {
			const e = a.shift();
			e ? e(s) : i.push(s);
		}
	};
	return {
		runner: {
			size: t,
			run: (t, n, i) => c(async (a) => {
				const r = function(e, t) {
					const n = Er.get(e);
					if (!n) throw new Dr("Export requires a captured input snapshot");
					const i = new Set(Cr.flatMap((e) => Object.keys(Nr[e])));
					return Object.fromEntries([...i].map((e) => [e, (n[e] ?? []).filter((n) => "studySettings" === e || t.includes("files" === e ? n.id : n.fileId)).map(Lr)]));
				}(t, n), s = await a.group(e, n, o(r, Xr(r)), i);
				if ("failure" in s) throw new vn(s.failure.file, s.failure.step);
				return s.result;
			}),
			deflate: {
				lanes: t,
				block: (e, t) => c((n) => n.deflate(o(e, [e.buffer]), o(t, [t.buffer])))
			}
		},
		terminate: () => {
			for (const e of n) e.terminate();
		}
	};
}
a({ async build(e, t, n, i) {
	const a = new g(e), r = es(e, Math.max(1, Math.min(8, (navigator.hardwareConcurrency || 2) - 2)));
	let s;
	try {
		return s = await (await (await (await (await navigator.storage.getDirectory()).getDirectoryHandle(yn, { create: !0 })).getDirectoryHandle(n, { create: !0 })).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await a.open(), await Zr(a, t, n, {
			...i ? { progress: i } : {},
			binaryStore: s,
			groups: r.runner
		});
	} catch (o) {
		if (o instanceof vn) return { failure: {
			file: o.file,
			step: o.step
		} };
		throw o;
	} finally {
		r.terminate(), s?.close(), a.close();
	}
} });
export { It as C, St as S, Ut as _, Pa as a, Ct as b, $a as c, Ra as d, Na as f, qt as g, Ia as h, Ca as i, Ta as l, ba as m, wr as n, Oa as o, xa as p, Ya as r, La as s, sr as t, Aa as u, zt as v, Ot as x, Gt as y };
