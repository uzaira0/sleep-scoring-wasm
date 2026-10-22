import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import { c as t, i as n, u as a } from "./workers-DK49faf9.js";
import { $ as i, Ct as r, Ht as s, J as o, Lt as l, Nt as u, Pt as c, S as d, Ut as m, W as p, a as g, et as h, f, h as _, ht as w, mn as y, sn as v } from "./schema-B_evdEdj.js";
import { C as M, D as b, E as S, O as k, T as x, f as I, k as A, m as T, s as R, w as N } from "./epoch-utils-CGLhdNDP.js";
import { H as E, U as $, V as C, h as O, t as D, u as L } from "./workspace-db-nrwH3Dt2.js";
import { l as B, n as P, o as F, s as W } from "./content-hash-BtD8CeUH.js";
import { a as j, n as G, t as H } from "./background-jobs-C736XP4d.js";
import { a as z } from "./project-revision-DBLYmsAG.js";
import { Z as U, c as V, f as q, k as K, p as Y } from "./night-session-registry-i9d63fMu.js";
import { t as J } from "./audit-hash-rfcCP1yx.js";
import { G as Z, O as X, T as Q, b as ee, i as te, s as ne, w as ae } from "./local-nonwear-unified-gTRuG4YC.js";
import { _ as ie, a as re, b as se, c as oe, f as le, g as ue, h as ce, n as de, o as me, s as pe, t as ge, v as he, x as fe, y as _e } from "./valid-day-criteria-BAc9E-xi.js";
import { Gt as we, H as ye, M as ve, P as Me, R as be, S as Se, W as ke, Wt as xe, Xt as Ie, Zt as Ae, en as Te, ft as Re, i as Ne, j as Ee, k as $e, y as Ce } from "./store-LeEv858g.js";
import { h as Oe, m as De, v as Le } from "./diary-local-import-contract-DTVsuh8H.js";
var Be = Uint8Array, Pe = Uint16Array, Fe = Int32Array, We = new Be([
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
]), je = new Be([
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
]), Ge = new Be([
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
]), He = function(e, t) {
	for (var n = new Pe(31), a = 0; a < 31; ++a) n[a] = t += 1 << e[a - 1];
	var i = new Fe(n[30]);
	for (a = 1; a < 30; ++a) for (var r = n[a]; r < n[a + 1]; ++r) i[r] = r - n[a] << 5 | a;
	return {
		b: n,
		r: i
	};
}, ze = He(We, 2), Ue = ze.b, Ve = ze.r;
Ue[28] = 258, Ve[258] = 28;
for (var qe = He(je, 0), Ke = (qe.b, qe.r), Ye = new Pe(32768), Je = 0; Je < 32768; ++Je) {
	var Ze = (43690 & Je) >> 1 | (21845 & Je) << 1;
	Ze = (61680 & (Ze = (52428 & Ze) >> 2 | (13107 & Ze) << 2)) >> 4 | (3855 & Ze) << 4, Ye[Je] = ((65280 & Ze) >> 8 | (255 & Ze) << 8) >> 1;
}
var Xe = function(e, t, n) {
	for (var a = e.length, i = 0, r = new Pe(t); i < a; ++i) e[i] && ++r[e[i] - 1];
	var s, o = new Pe(t);
	for (i = 1; i < t; ++i) o[i] = o[i - 1] + r[i - 1] << 1;
	if (n) {
		s = new Pe(1 << t);
		var l = 15 - t;
		for (i = 0; i < a; ++i) if (e[i]) for (var u = i << 4 | e[i], c = t - e[i], d = o[e[i] - 1]++ << c, m = d | (1 << c) - 1; d <= m; ++d) s[Ye[d] >> l] = u;
	} else for (s = new Pe(a), i = 0; i < a; ++i) e[i] && (s[i] = Ye[o[e[i] - 1]++] >> 15 - e[i]);
	return s;
}, Qe = new Be(288);
for (Je = 0; Je < 144; ++Je) Qe[Je] = 8;
for (Je = 144; Je < 256; ++Je) Qe[Je] = 9;
for (Je = 256; Je < 280; ++Je) Qe[Je] = 7;
for (Je = 280; Je < 288; ++Je) Qe[Je] = 8;
var et = new Be(32);
for (Je = 0; Je < 32; ++Je) et[Je] = 5;
var tt = Xe(Qe, 9, 0), nt = Xe(et, 5, 0), at = function(e) {
	return (e + 7) / 8 | 0;
}, it = function(e, t, n) {
	return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new Be(e.subarray(t, n));
}, rt = [
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
], st = function(e, t, n) {
	var a = new Error(t || rt[e]);
	if (a.code = e, Error.captureStackTrace && Error.captureStackTrace(a, st), !n) throw a;
	return a;
}, ot = function(e, t, n) {
	n <<= 7 & t;
	var a = t / 8 | 0;
	e[a] |= n, e[a + 1] |= n >> 8;
}, lt = function(e, t, n) {
	n <<= 7 & t;
	var a = t / 8 | 0;
	e[a] |= n, e[a + 1] |= n >> 8, e[a + 2] |= n >> 16;
}, ut = function(e, t) {
	for (var n = [], a = 0; a < e.length; ++a) e[a] && n.push({
		s: a,
		f: e[a]
	});
	var i = n.length, r = n.slice();
	if (!i) return {
		t: ft,
		l: 0
	};
	if (1 == i) {
		var s = new Be(n[0].s + 1);
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
	}; c != i - 1;) o = n[n[u].f < n[d].f ? u++ : d++], l = n[u != c && n[u].f < n[d].f ? u++ : d++], n[c++] = {
		s: -1,
		f: o.f + l.f,
		l: o,
		r: l
	};
	var m = r[0].s;
	for (a = 1; a < i; ++a) r[a].s > m && (m = r[a].s);
	var p = new Pe(m + 1), g = ct(n[c - 1], p, 0);
	if (g > t) {
		a = 0;
		var h = 0, f = g - t, _ = 1 << f;
		for (r.sort(function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		}); a < i; ++a) {
			var w = r[a].s;
			if (!(p[w] > t)) break;
			h += _ - (1 << g - p[w]), p[w] = t;
		}
		for (h >>= f; h > 0;) {
			var y = r[a].s;
			p[y] < t ? h -= 1 << t - p[y]++ - 1 : ++a;
		}
		for (; a >= 0 && h; --a) {
			var v = r[a].s;
			p[v] == t && (--p[v], ++h);
		}
		g = t;
	}
	return {
		t: new Be(p),
		l: g
	};
}, ct = function(e, t, n) {
	return -1 == e.s ? Math.max(ct(e.l, t, n + 1), ct(e.r, t, n + 1)) : t[e.s] = n;
}, dt = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new Pe(++t), a = 0, i = e[0], r = 1, s = function(e) {
		n[a++] = e;
	}, o = 1; o <= t; ++o) if (e[o] == i && o != t) ++r;
	else {
		if (!i && r > 2) {
			for (; r > 138; r -= 138) s(32754);
			r > 2 && (s(r > 10 ? r - 11 << 5 | 28690 : r - 3 << 5 | 12305), r = 0);
		} else if (r > 3) {
			for (s(i), --r; r > 6; r -= 6) s(8304);
			r > 2 && (s(r - 3 << 5 | 8208), r = 0);
		}
		for (; r--;) s(i);
		r = 1, i = e[o];
	}
	return {
		c: n.subarray(0, a),
		n: t
	};
}, mt = function(e, t) {
	for (var n = 0, a = 0; a < t.length; ++a) n += e[a] * t[a];
	return n;
}, pt = function(e, t, n) {
	var a = n.length, i = at(t + 2);
	e[i] = 255 & a, e[i + 1] = a >> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
	for (var r = 0; r < a; ++r) e[i + r + 4] = n[r];
	return 8 * (i + 4 + a);
}, gt = function(e, t, n, a, i, r, s, o, l, u, c) {
	ot(t, c++, n), ++i[256];
	for (var d = ut(i, 15), m = d.t, p = d.l, g = ut(r, 15), h = g.t, f = g.l, _ = dt(m), w = _.c, y = _.n, v = dt(h), M = v.c, b = v.n, S = new Pe(19), k = 0; k < w.length; ++k) ++S[31 & w[k]];
	for (k = 0; k < M.length; ++k) ++S[31 & M[k]];
	for (var x = ut(S, 7), I = x.t, A = x.l, T = 19; T > 4 && !I[Ge[T - 1]]; --T);
	var R, N, E, $, C = u + 5 << 3, O = mt(i, Qe) + mt(r, et) + s, D = mt(i, m) + mt(r, h) + s + 14 + 3 * T + mt(S, I) + 2 * S[16] + 3 * S[17] + 7 * S[18];
	if (l >= 0 && C <= O && C <= D) return pt(t, c, e.subarray(l, l + u));
	if (ot(t, c, 1 + (D < O)), c += 2, D < O) {
		R = Xe(m, p, 0), N = m, E = Xe(h, f, 0), $ = h;
		var L = Xe(I, A, 0);
		for (ot(t, c, y - 257), ot(t, c + 5, b - 1), ot(t, c + 10, T - 4), c += 14, k = 0; k < T; ++k) ot(t, c + 3 * k, I[Ge[k]]);
		c += 3 * T;
		for (var B = [w, M], P = 0; P < 2; ++P) {
			var F = B[P];
			for (k = 0; k < F.length; ++k) {
				var W = 31 & F[k];
				ot(t, c, L[W]), c += I[W], W > 15 && (ot(t, c, F[k] >> 5 & 127), c += F[k] >> 12);
			}
		}
	} else R = tt, N = Qe, E = nt, $ = et;
	for (k = 0; k < o; ++k) {
		var j = a[k];
		if (j > 255) {
			lt(t, c, R[257 + (W = j >> 18 & 31)]), c += N[W + 257], W > 7 && (ot(t, c, j >> 23 & 31), c += We[W]);
			var G = 31 & j;
			lt(t, c, E[G]), c += $[G], G > 3 && (lt(t, c, j >> 5 & 8191), c += je[G]);
		} else lt(t, c, R[j]), c += N[j];
	}
	return lt(t, c, R[256]), c + N[256];
}, ht = new Fe([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), ft = new Be(0), _t = function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, a = 9; --a;) n = (1 & n && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), wt = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
}, yt = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new Be(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, a, i) {
			if (!i && (i = { l: 1 }, t.dictionary)) {
				var r = t.dictionary.subarray(-32768), s = new Be(r.length + e.length);
				s.set(r), s.set(e, r.length), e = s, i.w = r.length;
			}
			return function(e, t, n, a, i, r) {
				var s = r.z || e.length, o = new Be(a + s + 5 * (1 + Math.ceil(s / 7e3)) + i), l = o.subarray(a, o.length - i), u = r.l, c = 7 & (r.r || 0);
				if (t) {
					c && (l[0] = r.r >> 3);
					for (var d = ht[t - 1], m = d >> 13, p = 8191 & d, g = (1 << n) - 1, h = r.p || new Pe(32768), f = r.h || new Pe(g + 1), _ = Math.ceil(n / 3), w = 2 * _, y = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, v = new Fe(25e3), M = new Pe(288), b = new Pe(32), S = 0, k = 0, x = r.i || 0, I = 0, A = r.w || 0, T = 0; x + 2 < s; ++x) {
						var R = y(x), N = 32767 & x, E = f[R];
						if (h[N] = E, f[R] = N, A <= x) {
							var $ = s - x;
							if ((S > 7e3 || I > 24576) && ($ > 423 || !u)) {
								c = gt(e, l, 0, v, M, b, k, I, T, x - T, c), I = S = k = 0, T = x;
								for (var C = 0; C < 286; ++C) M[C] = 0;
								for (C = 0; C < 30; ++C) b[C] = 0;
							}
							var O = 2, D = 0, L = p, B = N - E & 32767;
							if ($ > 2 && R == y(x - B)) for (var P = Math.min(m, $) - 1, F = Math.min(32767, x), W = Math.min(258, $); B <= F && --L && N != E;) {
								if (e[x + O] == e[x + O - B]) {
									for (var j = 0; j < W && e[x + j] == e[x + j - B]; ++j);
									if (j > O) {
										if (O = j, D = B, j > P) break;
										var G = Math.min(B, j - 2), H = 0;
										for (C = 0; C < G; ++C) {
											var z = x - B + C & 32767, U = z - h[z] & 32767;
											U > H && (H = U, E = z);
										}
									}
								}
								B += (N = E) - (E = h[N]) & 32767;
							}
							if (D) {
								v[I++] = 268435456 | Ve[O] << 18 | Ke[D];
								var V = 31 & Ve[O], q = 31 & Ke[D];
								k += We[V] + je[q], ++M[257 + V], ++b[q], A = x + O, ++S;
							} else v[I++] = e[x], ++M[e[x]];
						}
					}
					for (x = Math.max(x, A); x < s; ++x) v[I++] = e[x], ++M[e[x]];
					c = gt(e, l, u, v, M, b, k, I, T, x - T, c), u || (r.r = 7 & c | l[c / 8 | 0] << 3, c -= 7, r.h = f, r.p = h, r.i = x, r.w = A);
				} else {
					for (x = r.w || 0; x < s + u; x += 65535) {
						var K = x + 65535;
						K >= s && (l[c / 8 | 0] = u, K = s), c = pt(l, c + 1, e.subarray(x, K));
					}
					r.i = s;
				}
				return it(o, 0, a + at(c) + i);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? i.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, n, a, i);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || st(5), this.s.l && st(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var a = new Be(-32768 & n);
				a.set(this.b.subarray(0, this.s.z)), this.b = a;
			}
			var i = this.b.length - this.s.z;
			this.b.set(e.subarray(0, i), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(i), 32768), this.s.z = e.length - i + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = ft);
	}, e.prototype.flush = function(e) {
		if (this.ondata || st(5), this.s.l && st(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new Be(6);
			t[0] = this.s.r >> 3;
			var n = pt(t, this.s.r, ft);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), vt = "undefined" != typeof TextEncoder && new TextEncoder(), Mt = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	Mt.decode(ft, { stream: !0 });
} catch (ks) {}
function bt(e, t) {
	if (t) {
		for (var n = new Be(e.length), a = 0; a < e.length; ++a) n[a] = e.charCodeAt(a);
		return n;
	}
	if (vt) return vt.encode(e);
	var i = e.length, r = new Be(e.length + (e.length >> 1)), s = 0, o = function(e) {
		r[s++] = e;
	};
	for (a = 0; a < i; ++a) {
		if (s + 5 > r.length) {
			var l = new Be(s + 8 + (i - a << 1));
			l.set(r), r = l;
		}
		var u = e.charCodeAt(a);
		u < 128 || t ? o(u) : u < 2048 ? (o(192 | u >> 6), o(128 | 63 & u)) : u > 55295 && u < 57344 ? (o(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++a)) >> 18), o(128 | u >> 12 & 63), o(128 | u >> 6 & 63), o(128 | 63 & u)) : (o(224 | u >> 12), o(128 | u >> 6 & 63), o(128 | 63 & u));
	}
	return it(r, 0, s);
}
var St = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var a = e[n].length;
		a > 65535 && st(9), t += a + 4;
	}
	return t;
}, kt = function(e, t, n, a, i, r, s, o) {
	var l = a.length, u = n.extra, c = o && o.length, d = St(u);
	wt(e, t, null != s ? 33639248 : 67324752), t += 4, null != s && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (r < 0 && 8), e[t++] = i && 8, e[t++] = 255 & n.compression, e[t++] = n.compression >> 8;
	var m = new Date(null == n.mtime ? Date.now() : n.mtime), p = m.getFullYear() - 1980;
	if ((p < 0 || p > 119) && st(10), wt(e, t, p << 25 | m.getMonth() + 1 << 21 | m.getDate() << 16 | m.getHours() << 11 | m.getMinutes() << 5 | m.getSeconds() >> 1), t += 4, -1 != r && (wt(e, t, n.crc), wt(e, t + 4, r < 0 ? -r - 2 : r), wt(e, t + 8, n.size)), wt(e, t + 12, l), wt(e, t + 14, d), t += 16, null != s && (wt(e, t, c), wt(e, t + 6, n.attrs), wt(e, t + 10, s), t += 14), e.set(a, t), t += l, d) for (var g in u) {
		var h = u[g], f = h.length;
		wt(e, t, +g), wt(e, t + 2, f), e.set(h, t + 4), t += 4 + f;
	}
	return c && (e.set(o, t), t += c), t;
}, xt = function() {
	function e(e) {
		var t;
		this.filename = e, this.c = (t = -1, {
			p: function(e) {
				for (var n = t, a = 0; a < e.length; ++a) n = _t[255 & n ^ e[a]] ^ n >>> 8;
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
		this.ondata || st(5), this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1);
	}, e;
}(), It = function() {
	function e(e, t) {
		var n, a = this;
		t || (t = {}), xt.call(this, e), this.d = new yt(t, function(e, t) {
			a.ondata(null, e, t);
		}), this.compression = 8, this.flag = 1 == (n = t.level) ? 3 : n < 6 ? 2 : 9 == n ? 1 : 0;
	}
	return e.prototype.process = function(e, t) {
		try {
			this.d.push(e, t);
		} catch (ks) {
			this.ondata(ks, null, t);
		}
	}, e.prototype.push = function(e, t) {
		xt.prototype.push.call(this, e, t);
	}, e;
}(), At = function() {
	function e(e) {
		this.ondata = e, this.u = [], this.d = 1;
	}
	return e.prototype.add = function(e) {
		var t = this;
		if (this.ondata || st(5), 2 & this.d) this.ondata(st(4 + 8 * (1 & this.d), 0, 1), null, !1);
		else {
			var n = bt(e.filename), a = n.length, i = e.comment, r = i && bt(i), s = a != e.filename.length || r && i.length != r.length, o = a + St(e.extra) + 30;
			a > 65535 && this.ondata(st(11, 0, 1), null, !1);
			var l = new Be(o);
			kt(l, 0, e, n, s, -1);
			var u = [l], c = function() {
				for (var e = 0, n = u; e < n.length; e++) {
					var a = n[e];
					t.ondata(null, a, !1);
				}
				u = [];
			}, d = this.d;
			this.d = 0;
			var m = this.u.length, p = function(e, t) {
				var n = {};
				for (var a in e) n[a] = e[a];
				for (var a in t) n[a] = t[a];
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
			e.ondata = function(n, a, i) {
				if (n) t.ondata(n, a, i), t.terminate();
				else if (g += a.length, u.push(a), i) {
					var r = new Be(16);
					wt(r, 0, 134695760), wt(r, 4, e.crc), wt(r, 8, g), wt(r, 12, e.size), u.push(r), p.c = g, p.b = o + g + 16, p.crc = e.crc, p.size = e.size, d && p.r(), d = 1;
				} else d && c();
			}, this.u.push(p);
		}
	}, e.prototype.end = function() {
		var e = this;
		2 & this.d ? this.ondata(st(4 + 8 * (1 & this.d), 0, 1), null, !0) : (this.d ? this.e() : this.u.push({
			r: function() {
				1 & e.d && (e.u.splice(-1, 1), e.e());
			},
			t: function() {}
		}), this.d = 3);
	}, e.prototype.e = function() {
		for (var e = 0, t = 0, n = 0, a = 0, i = this.u; a < i.length; a++) n += 46 + (p = i[a]).f.length + St(p.extra) + (p.o ? p.o.length : 0);
		for (var r, s, o, l, u, c = new Be(n + 22), d = 0, m = this.u; d < m.length; d++) {
			var p = m[d];
			kt(c, e, p, p.f, p.u, -p.c - 2, t, p.o), e += 46 + p.f.length + St(p.extra) + (p.o ? p.o.length : 0), t += p.b;
		}
		r = c, s = e, o = this.u.length, l = n, u = t, wt(r, s, 101010256), wt(r, s + 8, o), wt(r, s + 10, o), wt(r, s + 12, l), wt(r, s + 16, u), this.ondata(null, c, !0), this.d = 2;
	}, e.prototype.terminate = function() {
		for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
		this.d = 2;
	}, e;
}();
function Tt(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function Rt(e) {
	const t = [
		"timestamps",
		"activity",
		"sleep_scores"
	].flatMap((t) => {
		const n = new Uint32Array(e.length + 1);
		for (const [s, o] of e.entries()) n[s + 1] = n[s] + (o[t]?.length ?? 0);
		const a = "sleep_scores" === t ? Uint8Array : Float64Array, i = e[0]?.[t], r = 1 === e.length && i instanceof a ? i : new a(n[e.length]);
		if (r !== i) for (const [s, o] of e.entries()) r.set(o[t] ?? [], n[s]);
		return [r, n];
	});
	return {
		request: [JSON.stringify({ days: e.map(({ timestamps: e, activity: t, sleep_scores: n, ...a }) => a) }), ...t],
		transfer: t.filter((t) => !e.some((e) => t === e.timestamps || t === e.activity)).map((e) => e.buffer)
	};
}
function Nt(e, t) {
	const n = function(e) {
		const t = Tt(e.ggirTimestamps), n = Tt(e.ggirEnmo);
		if (t.length > 0 && n.length > 0 && function(e) {
			for (const t of e) if (Number.isFinite(t)) return !0;
			return !1;
		}(n)) return {
			timestamps: t,
			signal: n,
			source: "ggir_enmo"
		};
		const a = new Float64Array(e.timestamps), i = new Float64Array(e.vectorMagnitude);
		return a.length > 0 && i.length > 0 ? {
			timestamps: a,
			signal: i,
			source: "vector_magnitude"
		} : null;
	}(t);
	if (!n || n.timestamps.length < 2) return null;
	const { timestamps: a, signal: i } = n, r = a[1] - a[0];
	if (!(r > 0 && Number.isInteger(r))) return null;
	for (let s = 1; s < a.length; s++) if (a[s] - a[s - 1] !== r) return null;
	return {
		wire: {
			id: `${String(e)}:${t.date}`,
			series_id: String(e),
			analysis_date: t.date,
			epoch_length_seconds: r,
			timestamps: a,
			activity: i
		},
		source: n.source
	};
}
function Et(e, { fileIds: t, dateRange: n, signal: i }) {
	const r = hs(e, os.circadian);
	return async function(e, t, { dateRange: n, signal: i }) {
		const r = H(i), s = [];
		let o = 0;
		for (const l of e) {
			if (!l.id) continue;
			i?.throwIfAborted();
			const e = await t(l.id), u = [];
			for (const t of e.values()) {
				if (i?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
				o += 1;
				const e = Nt(l.id, t);
				e && u.push(e);
			}
			if (0 === u.length) continue;
			const { request: c, transfer: d } = Rt(u.map((e) => e.wire)), m = await r.computeCircadian(a(c, d));
			i?.throwIfAborted();
			const p = new Map(u.map((e) => [e.wire.id, e.source]));
			for (const t of m.day_summaries) {
				const e = p.get(t.id);
				t.has_signal && e && s.push({
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
			totalDays: o,
			daysWithSignal: s.length,
			meanRelativeAmplitude: null,
			meanL5Hour: null,
			meanM10Hour: null,
			interdailyStability: null,
			intradailyVariability: null,
			daySummaries: s,
			perParticipant: []
		};
	}(t.length > 0 ? r.files.filter((e) => null != e.id && t.includes(e.id)) : r.files, (e) => ws(r, e), {
		dateRange: n,
		signal: i
	});
}
const $t = [
	"scoreGgirHasibVariant",
	"scoreSadeh",
	"scoreColeKripke",
	"scoreEpochs"
];
function Ct(e) {
	return ArrayBuffer.isView(e) ? `${e.constructor.name}[${String(e.byteLength)}]` : Array.isArray(e) ? e.map(Ct) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ct(t)])) : e;
}
function Ot(e, t) {
	if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
		if (e.byteLength !== t.byteLength) return !1;
		const n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), a = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
		return n.every((e, t) => e === a[t]);
	}
	if (null !== e && null !== t && "object" == typeof e && "object" == typeof t) {
		const n = Object.entries(e);
		return n.length === Object.keys(t).length && n.every(([e, n]) => Ot(n, t[e]));
	}
	return Object.is(e, t);
}
function Dt(e) {
	const t = /* @__PURE__ */ new Map();
	return new Proxy(e, { get(e, n, a) {
		const i = Reflect.get(e, n, a);
		return "function" == typeof i && $t.includes(n) ? async (...a) => {
			const r = `${String(n)}|${JSON.stringify(Ct(a))}`, s = t.get(r) ?? [];
			t.set(r, s);
			let o = s.find((e) => Ot(e.args, a));
			if (!o) {
				const t = Promise.resolve(Reflect.apply(i, e, a)), n = {
					args: a,
					answer: t
				};
				o = n, s.push(n), t.catch(() => s.splice(s.indexOf(n), 1));
			}
			return structuredClone(await o.answer);
		} : i;
	} });
}
const Lt = [
	"vanHees2015",
	"Sadeh1994",
	"Galland2012",
	"ColeKripke1992",
	"Oakley1997",
	"NotWorn"
];
function Bt(e) {
	const t = o[e];
	if (void 0 === t) throw new Error(`no generated method-family label for ${e}`);
	return t.algorithmValue;
}
const Pt = p.angle_hasib?.algorithmValue, Ft = Lt.filter((e) => e !== Pt), Wt = new Set(Ft);
function jt(e) {
	const t = d.count_input_series_keys?.[e];
	if (void 0 === t) throw new Error(`Unsupported HASIB count source: ${e}`);
	return {
		family: String(t.count_family),
		axis: String(t.axis),
		epochSeconds: Number(t.epoch_seconds)
	};
}
const Gt = {
	vanHees2015: O.GGIR_HASIB_VAN_HEES_2015,
	Sadeh1994: O.GGIR_HASIB_SADEH_1994,
	Galland2012: O.GGIR_HASIB_GALLAND_2012,
	ColeKripke1992: O.GGIR_HASIB_COLE_KRIPKE_1992,
	Oakley1997: O.GGIR_HASIB_OAKLEY_1997,
	NotWorn: O.GGIR_HASIB_NOT_WORN
};
function Ht(e, t, n) {
	if (n.sib.length !== t) throw new Error(`HASIB ${e} returned ${String(n.sib.length)} epochs, expected ${String(t)}.`);
	return n;
}
function zt(e, t) {
	const n = o[h];
	return void 0 !== n && e === n.algorithmValue && jt(t).family === i;
}
async function Ut(e) {
	const t = e.variants ?? Lt, n = t.filter((e) => Wt.has(e)).length > 0 ? await async function(e) {
		const t = jt(e.countSource);
		if ("neishabouri" === t.family) {
			const n = e.neishabouriCounts?.[t.axis] ?? ("vm" === t.axis && 60 === t.epochSeconds ? e.neishabouriVm60s : void 0);
			if (!n || 0 === n.length) throw new Error(`HASIB Neishabouri scoring requires a non-empty ${String(t.epochSeconds)}s ${t.axis.toUpperCase()} count series.`);
			return {
				series: n,
				countSource: e.countSource,
				epochSeconds: t.epochSeconds
			};
		}
		const n = t.axis, a = e.zeroCrossingCountsByAxis?.[n] ?? ("y" === n && 60 === t.epochSeconds ? e.zeroCrossingY60s : void 0);
		if (!e.backend.zeroCrossingCounts) {
			if (a && a.length > 0) return {
				series: a,
				countSource: e.countSource,
				epochSeconds: t.epochSeconds
			};
			throw new Error("HASIB zero-crossing scoring requires a backend zeroCrossingCounts implementation or precomputed axis counts.");
		}
		if (a && a.length > 0) return {
			series: a,
			countSource: e.countSource,
			epochSeconds: t.epochSeconds
		};
		if (!e.rawTriAxis) throw new Error("HASIB zero-crossing scoring requires raw tri-axial samples or precomputed axis counts.");
		(function(e) {
			if (e.sampleRate <= 0 || !Number.isFinite(e.sampleRate)) throw new Error("HASIB zero-crossing scoring requires a positive raw sample rate.");
			if (e.x.length !== e.y.length || e.x.length !== e.z.length) throw new Error(`HASIB zero-crossing scoring requires aligned raw x/y/z arrays (got x=${String(e.x.length)}, y=${String(e.y.length)}, z=${String(e.z.length)}).`);
			if (0 === e.x.length) throw new Error("HASIB zero-crossing scoring requires at least one raw sample.");
		})(e.rawTriAxis);
		const i = await e.backend.zeroCrossingCounts(e.rawTriAxis.x, e.rawTriAxis.y, e.rawTriAxis.z, e.rawTriAxis.sampleRate, e.countEpochSeconds ?? t.epochSeconds), r = "x" === n ? i.zcx : "y" === n ? i.zcy : i.zcz;
		if (0 === r.length) throw new Error(`HASIB zero-crossing scoring produced an empty ${n.toUpperCase()}-axis count series.`);
		return {
			series: r,
			countSource: e.countSource,
			epochSeconds: t.epochSeconds
		};
	}(e) : null, a = [];
	for (const i of t) {
		const t = i === Pt, r = t ? e.anglez5s : n?.series;
		if (!r || 0 === r.length) throw new Error(`HASIB ${i} requires a non-empty ${t ? "AngleZ" : "count"} input series.`);
		const s = t ? void 0 : e.countEpochSeconds ?? n?.epochSeconds, o = !t && null !== n && zt(i, n.countSource), l = void 0 !== s ? {
			ws3: s,
			...e.configs?.[i]
		} : e.configs?.[i], u = o ? {
			...l,
			neishabouriCount: !0
		} : l, c = await e.backend.scoreGgirHasibVariant(r, i, u);
		a.push({
			variant: i,
			key: Gt[i],
			countSource: t ? "anglez_5s" : n.countSource,
			result: Ht(i, r.length, c)
		});
	}
	return a;
}
function Vt(e) {
	return Object.keys(v).filter((t) => v[t].propagation.includes(e)).sort();
}
function qt(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(qt).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${qt(t)}`).join(",")}}`;
}
function Kt(e, t) {
	return function(e, t) {
		const n = e?.recording, a = n?.bodySite;
		return "wrist" === a || "hip" === a ? {
			sensorLocation: a,
			source: n?.placementSourceReference ?? "declared"
		} : null != t ? {
			sensorLocation: t,
			source: "study_default"
		} : {
			sensorLocation: null,
			source: "unresolved"
		};
	}(e, t).sensorLocation;
}
function Yt(e) {
	return JSON.stringify([...new Set(e ?? [])]);
}
function Jt(e, t) {
	if (0 === e.length) return null;
	if (e.length === t.timestamps.length && t.timestamps.length > 0) return t.timestamps;
	const n = t.ggirTimestamps;
	return n && e.length === n.length && n.length > 0 ? n : null;
}
const Zt = {
	[_.GT3X_BINARY]: "gt3x_capsense",
	[_.GENEACTIV_BIN]: "detach_nonwear"
}, Xt = {
	"actoglance.source.philips_actiware_csv.v1": "actiware_off_wrist",
	"actoglance.source.philips_actiwatch_aw5.v1": "actiware_off_wrist"
};
function Qt(e, t) {
	return (t ? Xt[t] : void 0) || (e ? Zt[e] ?? null : null);
}
async function en(e, t, a = n()) {
	const i = e.nonwearBands?.[Yt(t)];
	if (null === i) return null;
	if (i) {
		const t = "counts" === i.grid ? e.timestamps : e.ggirTimestamps, [n] = i.detectors;
		if (t && n && t.length === i.mask.length) return {
			detector: n,
			detectors: i.detectors,
			mask: i.mask,
			...i.weight ? { weight: i.weight } : {},
			grid: t,
			epochSeconds: await Re(t, 60, a)
		};
	}
	const r = [];
	let s = null;
	for (const n of new Set(t ?? [])) {
		if (an(n)) continue;
		const t = e.algorithmicNonwearMasks?.[n];
		if (!t) continue;
		const a = Jt(t, e);
		!a || null !== s && a !== s || (s = a, r.push({
			detector: n,
			mask: t
		}));
	}
	const o = r[0];
	if (!o || !s) return null;
	const l = await Re(s, 60, a), u = [...r, ...await tn(e, t, {
		grid: s,
		epochSeconds: l
	}, a)];
	if (1 === u.length) return {
		detector: o.detector,
		detectors: [o.detector],
		mask: o.mask,
		grid: s,
		epochSeconds: l
	};
	const c = await a.fuseNonwearMasks(u.map((e) => Uint8Array.from(e.mask)));
	return {
		detector: o.detector,
		detectors: u.map((e) => e.detector),
		mask: c.any,
		weight: c.weight,
		grid: s,
		epochSeconds: l
	};
}
async function tn(e, t, { grid: n, epochSeconds: a }, i) {
	const r = e.deviceNonwearSource, s = "gt3x_capsense" === r ? m.GT3X_CAPSENSE : "detach_nonwear" === r ? m.DETACH_NONWEAR : null;
	if (null === s || !(t ?? []).includes(s)) return [];
	const o = (e.sensorNonwearPeriods ?? []).map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	}));
	return [{
		detector: s,
		mask: await Z(o, n, a, i)
	}];
}
function nn(e, t) {
	return t ? e : e.filter((e) => e !== m.CHOI_2011 && e !== m.CHOI_2012);
}
function an(e) {
	return e === m.GT3X_CAPSENSE || e === m.DETACH_NONWEAR;
}
function rn(e, t, n) {
	return a = function(e, t) {
		const n = {
			...e,
			ggir_config: { sha256: Te(e).sha256 }
		}, a = me(t, pe(e.analysis_paradigm));
		return le(t) ? a ? (delete n.ggir_config, n.default_algorithm = a.sleepAlgorithm, a.periodGuider && (n.period_guider = a.periodGuider), n.nonwear_detectors_counts = oe({
			algorithm: a.sleepAlgorithm,
			periodGuider: a.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, a.paradigm, t).nonwearDetectorsCounts, 0 === Object.keys(re(e.actiware_analysis)).length && delete n.actiware_analysis) : delete n.actiware_analysis : (delete n.analysis_paradigm, delete n.actiware_analysis), Qt(t?.sourceType, t?.sourceProfileId) !== m.ACTIWARE_OFF_WRIST || (delete n.ggir_config, n.extraction_path = null, "ggir" !== ee(n.default_algorithm) && (n.nonwear_detectors_ggir = null)), n;
	}(function(e, t, n = Ne.getState()) {
		const a = n, i = {};
		for (const r of Vt("materialized")) {
			const e = v[r].storeKeys.zustand;
			if (void 0 === e || !(e in a)) throw new Error(`materialized setting ${r} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			i[r] = a[e];
		}
		return i.sleep_period_detection = {
			value: i.sleep_period_detection,
			resolvedSensorLocation: Kt(e, t)
		}, i;
	}(e, t, n), e), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${qt(t[e])}`);
		let a = 2166136261;
		for (const i of n.join("")) a ^= i.charCodeAt(0), a = Math.imul(a, 16777619) >>> 0;
		return a.toString(16).padStart(8, "0");
	}(Vt("materialized"), a);
	var a;
}
Object.freeze([]), m.CHOI_2011, m.CHOI_2012, m.VAN_HEES_2013, m.VAN_HEES_2023, m.TROIANO_2008, m.AHMADI_2020;
const sn = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function on(e, t = []) {
	const [n, a, i, r, s, o] = await Promise.all([
		sn(e.part1),
		sn(e.ms2),
		sn(e.ms3),
		sn(e.ms4),
		sn(e.ms5),
		sn(e.sleeplogRData)
	]);
	return {
		part1: n,
		configCsv: await e.configCsv.text(),
		...a ? { ms2: a } : {},
		...i ? { ms3: i } : {},
		...r ? { ms4: r } : {},
		...s ? { ms5: s } : {},
		...o ? { sleeplogRData: o } : {},
		...e.sleeplogCsv ? { sleeplogCsv: await e.sleeplogCsv.text() } : {},
		recordingId: L(e.recordingFile),
		...e.cleanedNightsCsv ? { cleanedNightsCsv: await e.cleanedNightsCsv.text() } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: await e.dataCleaningCsv.text() } : {},
		edits: t,
		crossCheck: !1
	};
}
function ln(e) {
	const { sib: t, invalid: n, ...a } = e;
	return a;
}
const un = (e) => e ? e.slice().buffer : void 0;
function cn(e, t, n, a, i) {
	const r = un(n.ms2), s = un(n.ms3), o = un(n.ms4), l = un(n.ms5), u = un(n.sleeplogRData);
	return {
		fileId: e,
		recordingFile: t,
		part1: un(n.part1),
		configCsv: n.configCsv,
		...n.cleanedNightsCsv ? { cleanedNightsCsv: n.cleanedNightsCsv } : {},
		...n.dataCleaningCsv ? { dataCleaningCsv: n.dataCleaningCsv } : {},
		...r ? { ms2: r } : {},
		...s ? { ms3: s } : {},
		...o ? { ms4: o } : {},
		...l ? { ms5: l } : {},
		...u ? { sleeplogRData: u } : {},
		...n.sleeplogCsv ? { sleeplogCsv: n.sleeplogCsv } : {},
		...i ? { ggirCorrections: i } : {},
		imported: ln(a),
		edits: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function dn(e) {
	return ((e) => {
		const t = /* @__PURE__ */ new Set();
		return e.filter((e) => !t.has(e.night) && (t.add(e.night), !0));
	})(e.sleepWindows);
}
function mn(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return dn(e).filter((a) => t.has(a.night) && a.onsetMs >= e.startMs && a.wakeMs <= n && a.wakeMs > a.onsetMs);
}
function pn(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case Pt: return l.VAN_HEES_2015;
		case Bt("cole_kripke_1992"): return l.COLE_KRIPKE_1992_GGIR;
		case Bt("sadeh_1994"): return l.SADEH_1994_GGIR;
		case Bt("galland_2012"): return l.GALLAND_2012;
		case Bt("oakley_1997"): return l.OAKLEY_1997;
		default: return null;
	}
}
function gn(e) {
	return null == pn(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${function(e) {
		const t = dn(e).length;
		return `${String(mn(e).length)} of ${String(t)} ${1 === t ? "night" : "nights"} GGIR reported got a GGIR marker.`;
	}(e)}`;
}
function hn(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.nightDate);
		if (null != e && e !== n.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		t.set(n.nightDate, n.night);
	}
}
async function fn(e, t, n, a) {
	const i = t.find((e) => e.night === n), r = dn(e).find((e) => e.night === n);
	if (!i || !r) return null;
	const [s, o] = await ((e, t) => H(t).wallClockLabels(Float64Array.from(e)))([r.onsetMs, r.wakeMs], a), l = [i.onset !== s ? `onset moved ${i.onset}` : null, i.wake !== o ? `wake moved ${i.wake}` : null].filter((e) => null != e);
	return l.length > 0 ? `edited: ${l.join(", ")}` : null;
}
async function _n(e, t, n, a = H(n)) {
	if (hn(e.sleepWindows), !e.sources.ms5) return [];
	const i = (/* @__PURE__ */ new Date()).toISOString(), r = e.nightSummaries ?? [], s = new Map(dn(e).map((e) => [e.night, e.nightDate])), o = (e) => e.nightDate ?? (null == e.night ? void 0 : s.get(e.night)), l = new Map(await Promise.all([...new Set(r.map(o).filter((e) => null != e))].map(async (e) => [e, await R(e, void 0, a)]))), u = Float64Array.from(r, (e) => e.validHours ?? NaN), c = e.includeDayCriterionHours ?? await a.ggirIncludeDayCriterionHours(null), d = Float64Array.from(r, () => c), m = await a.ggirDaysIncluded(u, d, null);
	return r.flatMap((e, n) => {
		const a = o(e);
		return null == a ? [] : [{
			fileId: t,
			analysisDate: l.get(a),
			totalSleepTimeMinutes: e.totalSleepMinutes ?? null,
			wasoMinutes: e.wasoMinutes ?? null,
			sleepEfficiency: e.sleepEfficiencyPct ?? null,
			mvpaMinutes: e.mvpaMinutes ?? null,
			moderateMinutes: e.moderateMinutes ?? null,
			vigorousMinutes: e.vigorousMinutes ?? null,
			lpaMinutes: e.lpaMinutes ?? null,
			sedentaryMinutes: e.sedentaryMinutes ?? null,
			l5MidpointHour: e.l5MidpointHour ?? null,
			m5MidpointHour: e.m5MidpointHour ?? null,
			intensityGradient: e.intensityGradient,
			nonwearMinutes: e.nonwearMinutes ?? null,
			validHours: e.validHours ?? null,
			cleaningCode: e.cleaningCode ?? null,
			fragmentationTpIn2Ac: null,
			fragmentationTpAc2In: null,
			fragmentCount: null,
			includeDayCriterionHours: c,
			...null == e.validHours ? {} : { meetsIncludeDayCriterion: 1 === m[n] },
			calibration: null,
			createdAt: i,
			updatedAt: i
		}];
	});
}
async function wn(e, t, n) {
	return Promise.all(mn(e).map(async (a) => {
		const [i, r] = await n.ggirLabelsToStoredMs(Float64Array.of(a.onsetMs, a.wakeMs), t), s = await async function(e, t, n, a = H(n)) {
			const [i, r] = await a.wallClockLabels(Float64Array.of(t.onsetMs, t.wakeMs));
			return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(t.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${i} → ${r}`;
		}(e, a, void 0, n);
		return {
			date: a.nightDate,
			onsetTimestamp: i / 1e3,
			offsetTimestamp: r / 1e3,
			notes: s
		};
	}));
}
async function yn(e, t, n, a, i, r = [], o, l) {
	hn(t.sleepWindows);
	const u = pn(t);
	if (null == u) return !1;
	const c = rn(null, n), d = H(o);
	let m = !0;
	for (const p of l ?? await wn(t, r, d)) {
		const t = [{
			markerType: s.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: p.onsetTimestamp,
			offsetTimestamp: p.offsetTimestamp,
			source: "auto",
			settingsHash: c
		}];
		await (await import("./night-session-B55DIpjy.js").then((e) => e.t)).writeHeadlessNight({
			signal: o,
			fileId: e,
			...i ? { expected: Y(null) } : {},
			date: p.date,
			username: U,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p.notes,
			algorithm: u,
			sleepPeriodDetectionConfig: X(void 0, te) ?? null
		}, a, null).catch(() => {
			o?.throwIfAborted(), console.warn("[local-processing] GGIR results marker persistence failed."), m = !1;
		});
	}
	return m;
}
async function vn(e, t, n, a, i = 60, r, s) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == a || n >= a) return null;
	const o = new Uint8Array(e.length);
	for (let u = 0; u < e.length; u++) o[u] = 1 === e[u] ? 1 : 0;
	const l = await Mn(o, r && r.length === e.length ? r : new Float64Array(e.length), t, n, a, i, s);
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
async function Mn(e, t, n, a, i, r = 60, s) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == a || null == i || a >= i) return null;
	const o = await async function(e, t, n, a) {
		const i = await H(a).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === i.length ? {
			startIdx: i[0],
			endIdx: i[1]
		} : null;
	}(n, a, i, s);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, u = o.endIdx + 1, c = e instanceof Uint8Array ? e.slice(l, u) : new Uint8Array(e.slice(l, u)), d = t instanceof Float64Array ? t.slice(l, u) : Float64Array.from(t.slice(l, u)), m = await H(s).computeSleepMetrics(c, d, r), p = n[l] ?? 0, g = n[u - 1] ?? p, h = null != m.firstSleepEpochIdx ? n[l + m.firstSleepEpochIdx] ?? p : p, f = null != m.lastSleepEpochIdx ? n[l + m.lastSleepEpochIdx] ?? g : g;
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
function bn(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const a = Array.from(new Float64Array(e.timestamps));
	let i = e.axisY ? new Float64Array(e.axisY) : null;
	if (i && e.actiwareActivityInvalid) {
		const t = new Uint8Array(e.actiwareActivityInvalid);
		if (t.length === i.length && t.some((e) => 1 === e)) {
			i = i.slice();
			for (let e = 0; e < t.length; e += 1) 1 === t[e] && (i[e] = NaN);
		}
	}
	if (!e.algorithmResults || "object" != typeof e.algorithmResults) return console.warn(`[loadActivityForMetrics] Missing algorithmResults for activity day id=${e.id}`), {
		timestamps: a,
		algorithmResults: null,
		activity: i,
		scoresStale: n
	};
	const r = T(e, t);
	return {
		timestamps: a,
		algorithmResults: "ok" === r.status && r.bytes ? new Uint8Array(r.bytes) : null,
		activity: i,
		scoresStale: "stale" === r.status ? r.reason : null
	};
}
const Sn = /* @__PURE__ */ new Map();
async function kn(e, t) {
	if (Sn.has(e)) return Sn.get(e);
	try {
		const n = await H(t).resolveTimezone(e);
		return Sn.set(e, n), n;
	} catch (st) {
		t?.throwIfAborted(), console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, st);
		return;
	}
}
function xn(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : De();
}
async function In(e) {
	try {
		return xn((await ve(e))?.extraSettings);
	} catch (st) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", st), De();
	}
}
function An(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const Tn = {
	zone: null,
	reason: null
};
async function Rn(e, t, n) {
	const a = e.ggirTimezone?.trim();
	let i = null;
	if (a) {
		const e = await kn(a, n);
		if (!e) return Tn;
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
	if (null === i) return Tn;
	const r = await kn(t, n);
	if (void 0 === r) return Tn;
	if ("iana" !== r?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const s = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== s && (await Le(r.zone, s, H(n))).includes(i) ? {
		zone: r.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${An(i)} is not a ${r.zone} offset`
	};
}
function Nn(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [a, i] of e.entries()) t[a + 1] = t[a] + i.length;
	const n = new Float64Array(t[e.length]);
	for (const [a, i] of e.entries()) n.set(i, t[a]);
	return [n, t];
}
const En = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), $n = [
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
var Cn = $n.map(() => En);
Object.fromEntries($n.map(([e], t) => [e, Cn[t]]));
const On = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor"
];
async function Dn(e, t, a, i) {
	const r = void 0 === t ? a?.window[e] : 48 === t ? a?.view48[e] : void 0;
	if (r) return {
		start: r[0],
		end: r[1]
	};
	const s = await (i ?? n()).analysisWindowBounds(e, t);
	return s ? {
		start: s[0],
		end: s[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function Ln(e, t, a) {
	const i = e instanceof Float64Array ? e : Float64Array.from(e), [r, s] = await (a ?? n()).analysisWindowSlice(i, t);
	return {
		startIndex: r,
		endIndex: s
	};
}
async function Bn(e, t = n()) {
	const a = [...new Set(e)], i = await t.analysisDatesOf(Float64Array.from(a)), r = new Map(a.map((e, t) => [e, i[t] ?? ""]));
	return (e) => r.get(e) ?? "";
}
function Pn(e) {
	const t = {};
	return e.nonwearResults && (t.choi90 = new Uint8Array(e.nonwearResults)), e.nonwearResultsChoi2011 && (t.choi60 = new Uint8Array(e.nonwearResultsChoi2011)), e.vanHeesNonwear && (t.vanHees = new Uint8Array(e.vanHeesNonwear)), e.detachNonwear && (t.sensor = new Uint8Array(e.detachNonwear)), t;
}
async function Fn(e, t, n, a) {
	const i = e.get(t), r = bn(i, n), s = i ? Pn(i) : {}, o = e.get(await R(t, void 0, H(a))), l = r.timestamps[r.timestamps.length - 1], u = o ? bn(o, n) : null, c = u?.timestamps[0], d = void 0 !== o && null !== u && void 0 !== l && void 0 !== c && c > l, m = i ? I(d ? [i, o] : [i], n) : null, p = "stale" === n.status ? n.reason : "stale" === m?.status ? m.reason : null;
	if (null !== p) return {
		...r,
		algorithmResults: null,
		masks: s,
		scoresStale: p
	};
	if (!d || !r.algorithmResults) return {
		...r,
		masks: s,
		scoresStale: null
	};
	const g = r.timestamps.length, h = g + u.timestamps.length, f = r.algorithmResults.length >= g && u.algorithmResults && u.algorithmResults.length >= u.timestamps.length ? new Uint8Array(h) : null;
	f?.set(r.algorithmResults.subarray(0, g)), u.algorithmResults && f?.set(u.algorithmResults.subarray(0, h - g), g);
	const _ = new Float64Array(h);
	r.activity && _.set(r.activity.subarray(0, g)), u.activity && _.set(u.activity.subarray(0, h - g), g);
	const w = Pn(o), y = {};
	for (const v of On) {
		const e = s[v], t = w[v];
		if (!e && !t) continue;
		const n = new Uint8Array(h);
		e && n.set(e.subarray(0, g)), t && n.set(t.subarray(0, h - g), g), y[v] = n;
	}
	return {
		timestamps: [...r.timestamps, ...u.timestamps],
		algorithmResults: f,
		activity: _,
		masks: y,
		scoresStale: null
	};
}
async function Wn(e, t, n, a) {
	const i = await n.files.get(e.fileId);
	if (!i) return;
	const r = /* @__PURE__ */ new Map();
	for (const s of [e.date, await R(e.date, void 0, H(a))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, s]).first();
		t && r.set(s, t);
	}
	await async function(e, t, n, a) {
		const { date: i, file: r, activityMap: s, verdict: o } = t, l = t.spanning ?? await Fn(s, i, o, a);
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
		for (const p of e.sleepMarkers) m.push(d && c.length > 0 && p.onsetTimestamp && p.offsetTimestamp ? await Mn(d, l.activity ?? new Float64Array(d.length), l.timestamps, p.onsetTimestamp, p.offsetTimestamp, r.epochLengthSeconds || 60, a) : null);
		if (void 0 !== e.id) try {
			await z(n, [n.markers], () => q(e.id, {
				inputs: u,
				metrics: m
			}, n), a);
		} catch {
			a?.throwIfAborted();
		}
		return m;
	}(e, {
		date: e.date,
		file: i,
		activityMap: r,
		verdict: t
	}, n, a);
}
const jn = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], Gn = ["under-series", "over-series"], Hn = ["full-resolution-v1", "min-max-gap-envelope-v1"], zn = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function Un(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function Vn(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? Un(t, "expected an object") : e;
}
function qn(e, t) {
	return Array.isArray(e) ? e : Un(t, "expected an array");
}
function Kn(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : Un(t, "expected a finite number");
}
function Yn(e, t) {
	const n = Kn(e, t);
	return n <= 0 ? Un(t, "expected a positive number") : n;
}
function Jn(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : Un(t, "expected a safe integer");
}
function Zn(e, t) {
	const n = Jn(e, t);
	return n < 0 ? Un(t, "expected a non-negative safe integer") : n;
}
function Xn(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? Un(t, "expected a boolean") : { [n]: e };
}
function Qn(e, t) {
	return "string" != typeof e || 0 === e.length ? Un(t, "expected a non-empty string") : e;
}
function ea(e, t) {
	return "string" == typeof e && jn.includes(e) ? e : Un(t, "expected a supported tone");
}
function ta(e, t) {
	return "string" == typeof e && Gn.includes(e) ? e : Un(t, "expected a supported phase");
}
function na(e, t) {
	const n = Vn(e, t), a = Kn(n.min, `${t}.min`), i = Kn(n.max, `${t}.max`);
	return i <= a || !Number.isFinite(i - a) ? Un(t, "expected a finite ascending range") : {
		min: a,
		max: i
	};
}
function aa(e, t) {
	const n = `series[${t}]`, a = Vn(e, n), i = qn(a.points, `${n}.points`);
	let r = Number.NEGATIVE_INFINITY;
	const s = i.map((e, t) => {
		const a = `${n}.points[${t}]`, i = Vn(e, a), s = Kn(i.timestamp, `${a}.timestamp`);
		if (s <= r) return Un(`${a}.timestamp`, "expected strictly ascending timestamps");
		r = s;
		const o = i.value;
		return {
			timestamp: s,
			value: null === o ? null : Kn(o, `${a}.value`)
		};
	});
	return {
		tone: ea(a.tone, `${n}.tone`),
		strokeWidth: Yn(a.strokeWidth, `${n}.strokeWidth`),
		valueDomain: na(a.valueDomain, `${n}.valueDomain`),
		points: s
	};
}
function ia(e, t) {
	const n = `overlays[${t}]`, a = Vn(e, n), i = {
		phase: ta(a.phase, `${n}.phase`),
		order: Jn(a.order, `${n}.order`),
		tone: ea(a.tone, `${n}.tone`)
	};
	if ("interval" === a.kind) {
		const e = Kn(a.startTimestamp, `${n}.startTimestamp`), t = Kn(a.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? Un(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...i,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === a.kind ? {
		kind: "threshold",
		...i,
		value: Kn(a.value, `${n}.value`),
		...Xn(a.draggable, `${n}.draggable`, "draggable"),
		...Xn(a.selected, `${n}.selected`, "selected"),
		...Xn(a.handle, `${n}.handle`, "handle"),
		...void 0 === a.label ? {} : { label: Qn(a.label, `${n}.label`) }
	} : "instant" === a.kind ? {
		kind: "instant",
		...i,
		timestamp: Kn(a.timestamp, `${n}.timestamp`)
	} : Un(`${n}.kind`, "expected interval, threshold, or instant");
}
function ra(e) {
	const t = Vn(e, "scene");
	if (2 !== t.version) return Un("version", "expected 2");
	const n = Vn(t.grid, "grid"), a = {
		strategy: (i = n.strategy, "string" == typeof i && Hn.includes(i) ? i : Un("grid.strategy", "expected a supported render-grid strategy")),
		sourcePointCount: Zn(n.sourcePointCount, "grid.sourcePointCount"),
		renderedPointCount: Zn(n.renderedPointCount, "grid.renderedPointCount")
	};
	var i;
	if (a.renderedPointCount > a.sourcePointCount) return Un("grid", "renderedPointCount cannot exceed sourcePointCount");
	if ("full-resolution-v1" === a.strategy && a.renderedPointCount !== a.sourcePointCount) return Un("grid", "full-resolution strategy requires equal point counts");
	const r = Vn(t.size, "size"), s = {
		width: Yn(r.width, "size.width"),
		height: Yn(r.height, "size.height")
	}, o = Vn(t.plotArea, "plotArea"), l = {
		left: Kn(o.left, "plotArea.left"),
		top: Kn(o.top, "plotArea.top"),
		width: Yn(o.width, "plotArea.width"),
		height: Yn(o.height, "plotArea.height")
	};
	if (l.left < 0 || l.top < 0 || l.left + l.width > s.width || l.top + l.height > s.height) return Un("plotArea", "expected bounds contained by size");
	const u = na(t.viewport, "viewport"), c = na(t.valueDomain, "valueDomain"), d = qn(t.series, "series").map(aa);
	if (0 === d.length && 0 !== a.renderedPointCount) return Un("grid.renderedPointCount", "expected zero when series is empty");
	const m = d[0]?.points.map((e) => e.timestamp) ?? [];
	for (let f = 0; f < d.length; f++) {
		const e = d[f]?.points ?? [];
		if (e.length !== a.renderedPointCount) return Un(`series[${f}].points`, "expected renderedPointCount aligned points");
		for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return Un(`series[${f}].points[${t}].timestamp`, "expected the shared render grid timestamp");
	}
	const p = qn(t.overlays, "overlays").map(ia), g = null === t.cursorTimestamp ? null : Kn(t.cursorTimestamp, "cursorTimestamp");
	let h = null;
	if (null !== t.selection) {
		const e = Vn(t.selection, "selection"), n = Kn(e.startTimestamp, "selection.startTimestamp"), a = Kn(e.endTimestamp, "selection.endTimestamp");
		if (a <= n) return Un("selection", "expected a half-open ascending interval");
		h = {
			startTimestamp: n,
			endTimestamp: a
		};
	}
	return {
		version: 2,
		grid: a,
		size: s,
		plotArea: l,
		viewport: u,
		valueDomain: c,
		series: d,
		overlays: p,
		cursorTimestamp: g,
		selection: h
	};
}
function sa(e, t, n) {
	const a = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(a) ? a : Un("projection", "expected a finite pixel coordinate");
}
function oa(e, t, n) {
	const a = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(a) ? a : Un("projection", "expected a finite pixel coordinate");
}
function la(e) {
	const t = Number(e.toFixed(6));
	return Object.is(t, -0) ? "0" : String(t);
}
function ua(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function ca(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, a = t.plotArea.height, i = zn[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const r = ua(sa(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), s = ua(sa(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${la(r)}" y="0" width="${la(Math.max(1, s - r))}" height="${la(a)}" fill="${i}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const r = oa(e.value, t.valueDomain, a), s = !0 === e.selected, o = s ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${s ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${la(r)}" x2="${la(n)}" y2="${la(r)}" stroke="${i}" stroke-width="${s ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const r = sa(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${la(r)}" y1="0" x2="${la(r)}" y2="${la(a)}" stroke="${i}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function da(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function ma(e) {
	return String(e).padStart(2, "0");
}
function pa(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
var ga = e({
	editsFromMarkers: () => ba,
	getGgirMarkerInputs: () => Sa,
	ggirNightMarkerState: () => Ma,
	hasGgirRecomputeFailure: () => ya,
	recomputeGgirResults: () => Ia,
	recoverPendingGgirRecomputes: () => Aa,
	reviewGgirResultsForMarkers: () => Ta,
	scheduleGgirRecompute: () => xa
});
const ha = new EventTarget(), fa = /* @__PURE__ */ new WeakMap(), _a = 800, wa = "Update GGIR review";
function ya(e, t, n) {
	return C.getState().jobs[`${n.name}:${ka(e, t)}`]?.status === $.FAILED;
}
function va(e, t, n, a, i) {
	if (i?.aborted || function(e) {
		return e instanceof Error && e.name === y.errnames.DatabaseClosed;
	}(a)) return;
	const r = ka(e, t), s = `${n.name}:${r}`, o = C.getState();
	o.jobs[s]?.controller.signal.aborted || o.jobs[s]?.status === $.ELSEWHERE || (o.update(s, {
		id: s,
		key: r,
		workspaceId: n.name,
		kind: E.GGIR_RECOMPUTE,
		label: wa,
		controller: o.jobs[s]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: $.FAILED
	}), n.isOpen() && D() === n && ha.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function Ma(e) {
	if (!e) return { kind: "unreviewed" };
	const t = e.sleepMarkers.find((e) => e.markerType === s.MAIN_SLEEP);
	return e.isInvalidNight || null == t?.onsetTimestamp || null == t.offsetTimestamp ? { kind: "invalid" } : {
		kind: "main",
		main: t
	};
}
async function ba(e, t, n = [], a) {
	const i = dn(e).flatMap((e) => {
		const n = Ma(t.get(e.nightDate));
		return "main" === n.kind ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === i.length) return [];
	const r = H(a), s = await r.storedToGgirLabelsMs(Float64Array.from(i.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await r.wallClockLabels(Float64Array.from([...s, ...i.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * i.length;
	return i.flatMap(({ w: e }, t) => {
		const n = o[2 * t], a = o[2 * t + 1];
		return n !== o[l + 2 * t] || a !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: a
		}] : [];
	});
}
async function Sa(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [a, i] = await Promise.all([Se(e, t, n), $e(e, n)]), r = i?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([r ?? [], [...a].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				Ma(t)
			])]),
			markers: a,
			clockSteps: r,
			bundleRevision: i?.ggirBundleRevision
		};
	});
}
function ka(e, t) {
	return `${E.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function xa(e, t, n, a) {
	if (!n.isOpen() || D() !== n || a?.aborted) return;
	let i = fa.get(n);
	i || (i = /* @__PURE__ */ new Map(), fa.set(n, i));
	const r = ka(e, t);
	clearTimeout(i.get(r)), i.set(r, setTimeout(() => {
		i.delete(r), n.files.get(e).then((i) => {
			if (i?.ggirBundleRevision && n.isOpen() && D() === n && !a?.aborted) return Ia(e, t, n, a);
		}).catch((i) => {
			a?.aborted || i instanceof DOMException && "AbortError" === i.name || (va(e, t, n, i, a), n.isOpen() && D() === n && (console.error("[ggir-results] recompute failed."), Ae("error", "GGIR results recompute failed", Ie(i))));
		});
	}, _a));
}
function Ia(e, t, n, a) {
	const i = (r, s = a) => G({
		kind: E.GGIR_RECOMPUTE,
		key: ka(e, t),
		label: wa,
		workspaceId: n.name,
		signal: s,
		rerun: !0,
		run: async (a) => {
			a.signal.throwIfAborted();
			const s = await async function(e, t, n, a) {
				if (a.throwIfAborted(), !n.isOpen() || D() !== n) return null;
				const { markerInputs: i, markers: r, clockSteps: s, bundleRevision: o } = await Sa(e, t, n);
				if (!o) return null;
				const l = await n.ggirScorerReviews.get([e, t]);
				if (!n.isOpen() || D() !== n) return null;
				if (a.throwIfAborted(), l?.markerInputs === i && l.bundleRevision === o) return ha.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), l.current ?? null;
				const u = await n.ggirResultsBundles.get(e);
				if (!u) return null;
				const c = await ba(u.imported, r, s, a);
				if (!n.isOpen() || D() !== n) return null;
				const d = l?.bundleRevision === o && JSON.stringify(l.edits) === JSON.stringify(c) ? l.current : (await Ta(u, r, s, c, a)).current;
				a.throwIfAborted();
				const m = (/* @__PURE__ */ new Date()).toISOString();
				if (!n.isOpen() || D() !== n) return null;
				const p = await z(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!n.isOpen() || D() !== n) return null;
					const r = await Sa(e, t, n);
					return r.markerInputs === i && r.bundleRevision === o && (0 === await n.ggirResultsBundles.where(":id").equals(e).count() ? null : (a.throwIfAborted(), await n.ggirScorerReviews.put({
						fileId: e,
						scorer: t,
						...d ? { current: d } : {},
						edits: c,
						markerInputs: i,
						bundleRevision: o,
						updatedAt: m
					}), !0));
				}, a);
				return p ? (ha.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), a.throwIfAborted(), d ?? u.imported) : (a.throwIfAborted(), !1 !== p && null);
			}(e, t, n, a.signal);
			return a.signal.throwIfAborted(), !1 !== s ? s : (r < 2 && i(r + 1, a.signal).catch((i) => va(e, t, n, i, a.signal)), null);
		}
	});
	return i(0);
}
function Aa(e, t) {
	return G({
		kind: E.GGIR_RECOVERY,
		key: E.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const a = () => !t.signal.aborted && e.isOpen() && D() === e;
			try {
				if (!a()) return;
				const r = await e.ggirResultsBundles.toCollection().primaryKeys();
				for (const s of r) {
					if (t.signal.throwIfAborted(), !a()) return;
					try {
						const r = await e.ggirScorerReviews.where("fileId").equals(s).toArray(), o = await e.markers.where("fileId").equals(s).toArray(), l = /* @__PURE__ */ new Set([...o.map((e) => e.username), ...r.map((e) => e.scorer)]);
						l.delete(U);
						for (const u of l) {
							if (!a()) return;
							try {
								const { markerInputs: n, bundleRevision: i } = await Sa(s, u, e);
								if (!a()) return;
								const o = r.find((e) => e.scorer === u);
								if (i && o?.markerInputs === n && o.bundleRevision === i) {
									ya(s, u, e) && (C.getState().update(`${e.name}:${ka(s, u)}`, { status: $.DONE }), ha.dispatchEvent(new CustomEvent("updated", { detail: {
										fileId: s,
										scorer: u,
										db: e
									} })));
									continue;
								}
								await Ia(s, u, e, t.signal);
							} catch (i) {
								n = !0, va(s, u, e, i, t.signal);
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
				const i = Object.values(C.getState().jobs).filter((t) => t.workspaceId === e.name && t.kind === E.GGIR_RECOMPUTE && t.status === $.FAILED);
				for (const t of i) {
					const i = t.key.slice(E.GGIR_RECOMPUTE.length + 1);
					if (!a()) break;
					const r = i.indexOf(":"), s = Number(i.slice(0, r)), o = JSON.parse(i.slice(r + 1));
					try {
						await e.transaction("r", e.ggirResultsBundles, e.markers, e.ggirScorerReviews, async () => {
							if (!a()) return;
							const [n, i, r] = await Promise.all([
								e.ggirResultsBundles.where(":id").equals(s).count(),
								e.markers.where("fileId").equals(s).filter((e) => e.username === o).count(),
								e.ggirScorerReviews.where("[fileId+scorer]").equals([s, o]).count()
							]);
							a() && (0 === n || 0 === i && 0 === r) && (C.getState().update(t.id, { status: $.DONE }), ha.dispatchEvent(new CustomEvent("updated", { detail: {
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
async function Ta(e, t, n = [], a, i) {
	const r = a ?? await ba(e.imported, t, n, i);
	let s;
	if (i?.throwIfAborted(), r.length > 0 && e.ms2 && e.ms3) {
		const t = (e) => e ? new Uint8Array(e.slice(0)) : void 0, n = t(e.ms2), a = t(e.ms3), o = t(e.ms4), l = t(e.ms5), u = t(e.sleeplogRData);
		s = ln(await j(i, (t) => t.reviewGgirResults({
			part1: new Uint8Array(e.part1.slice(0)),
			configCsv: e.configCsv,
			recordingId: L(e.recordingFile),
			...n ? { ms2: n } : {},
			...a ? { ms3: a } : {},
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
	i?.throwIfAborted();
	const { current: o, ...l } = e;
	return {
		...l,
		...s ? { current: s } : {},
		edits: r
	};
}
const Ra = [
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
new Set(Ra.slice(16).map(([e]) => e));
var Na = class extends Error {};
const Ea = "edit_recompute_requires_ms2_ms3", $a = /* @__PURE__ */ new Set([
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
	"edit_recompute_requires_ms2_ms3",
	"not_computed_for_export",
	"not_applicable_to_row",
	"insufficient_pair",
	"scores_from_another_config"
]), Ca = S.invalid_night_row.markerTypeCell, Oa = new Set(Ra.map(([, e]) => e)), Da = /* @__PURE__ */ new Set([
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
]), La = /* @__PURE__ */ new Set([
	x.ggir_sleep_duration_in_spt.header,
	x.ggir_waso.header,
	x.ggir_number_of_awakenings.header,
	x.ggir_sleeplatency.header,
	x.ggir_sleepefficiency.header
]), Ba = /* @__PURE__ */ new Set([
	...La,
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
]), Pa = /* @__PURE__ */ new Set([
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
]), Fa = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), Wa = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), ja = new Set(Object.values(x).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), Ga = new Set(Object.values(x).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), Ha = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim());
function za(e, t, n, a) {
	const i = (e) => n.get(e) ?? "", r = i(t + "_missing_reason");
	if (r && !$a.has(r)) return null;
	const s = r || null;
	if (e.includes("_ggir_review")) {
		if (s) return s;
		const e = i("review_source");
		return "ggir" === e ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const o = i(x.marker_type.header) === Ca || "actiware_intervals_export.csv" === e && i(x.interval_kind.header) === Ca;
	if (!function(e, t) {
		return "actiware_intervals_export.csv" === e ? Oa.has(t) : "actiware_sleep_wake_export.csv" === e ? t === x.actiware_sleep_wake.header || t === x.actiware_wake_threshold.header : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			x.ggir_id.header,
			x.ggir_filename.header,
			x.ggir_calendar_date.header,
			x.ggir_weekday.header,
			x.ggir_sleeplog_id.header,
			x.ggir_guider_corrected.header,
			x.ggir_cleaningcode.header
		].includes(t) : ja.has(t);
	}(e, t)) return s || (o ? "invalid_night" : "Manual Nonwear" === i(x.marker_type.header) ? "manual_nonwear_period" : null);
	if ("actiware_intervals_export.csv" === e && Oa.has(t)) {
		if (o) return "invalid_night";
		const e = i(x.interval_kind.header).toLowerCase(), n = i(x.interval_start_local.header);
		if ("daily" === e && n && n === i(x.interval_end_local.header)) return "zero_interval_rows";
		if ([
			x.actiware_onset_latency.header,
			x.actiware_efficiency.header,
			x.actiware_waso.header
		].includes(t)) {
			if ("sleep" !== e) return "not_applicable_to_row";
			if (Ha(i(x.actiware_duration.header))) return null;
			const t = i(x.interval_start_local.header), n = i(x.interval_end_local.header);
			if (!t || !n) return null;
			let r = !1;
			for (const e of a) if (e.get(x.filename.header) === i(x.filename.header) && "rest" === e.get(x.interval_kind.header) && (e.get(x.interval_start_local.header) ?? "") <= t && n <= (e.get(x.interval_end_local.header) ?? "")) {
				r = !0;
				break;
			}
			return r ? null : "no_eligible_rest";
		}
		if (Ha(i(x.actiware_duration.header))) return null;
		if (t === x.actiware_off_wrist.header || t === x.actiware_off_wrist_percent.header) return t === x.actiware_off_wrist_percent.header && "0.00" === i(x.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === s ? s : null;
		if (t === x.actiware_avg_ac_per_min.header) return 100 === Number(i(x.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			x.actiware_invalid_sw_percent.header,
			x.actiware_wake_percent.header,
			x.actiware_sleep_percent.header
		].includes(t)) {
			if ("0.00" === i(x.actiware_duration.header)) return "zero_interval_rows";
			const e = !Ha(i(x.actiware_wake_time.header)) && !Ha(i(x.actiware_sleep_time.header)) && 0 === Number(i(x.actiware_wake_time.header)) && 0 === Number(i(x.actiware_sleep_time.header));
			return t === x.actiware_invalid_sw_percent.header || 100 !== Number(i(x.actiware_invalid_sw_percent.header)) && !e ? null : "no_scored_epochs";
		}
		const r = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(t);
		if (r) {
			const e = r[1];
			return "0.00" === i(x.actiware_duration.header) ? "zero_interval_rows" : Ha(i("%Invalid " + e)) ? "source_reported_missing" === s ? s : null : t.startsWith("TALT ") && !Ha(i("Exposure " + e)) ? "threshold_unconfigured" : 100 === Number(i("%Invalid " + e)) ? "no_valid_epochs" : null;
		}
		return null;
	}
	if ("actiware_sleep_wake_export.csv" === e) {
		if (t === x.actiware_sleep_wake.header) return "no_valid_epochs" === s ? s : null;
		if (t === x.actiware_wake_threshold.header) return "not_computed_for_export" === s ? s : null;
	}
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return Da.has(t) ? "not_computed_for_export" === s ? s : null : La.has(t) ? "no_scored_epochs" === s || "not_applicable_to_row" === s || "scores_from_another_config" === s ? s : null : s;
	if ("sleep_export_wide.csv" === e) return s;
	if ("summary_export.csv" === e && t === x.sleep_regularity_index.header) return s && [
		"insufficient_pair",
		"no_scored_epochs",
		"no_valid_epochs",
		"not_computed_for_export",
		"scores_from_another_config"
	].includes(s) ? s : null;
	if ("physical_activity_export.csv" === e) {
		const e = i("Status"), n = i("Method");
		if ([
			"Epoch Length Seconds",
			"Native Epoch Seconds",
			"Mask Overlap Epochs"
		].includes(t)) return "Epoch Length Seconds" === t ? "ggir_enmo" === n ? "not_applicable_to_row" : null : "Native Epoch Seconds" === t ? "not_applicable" === i("Threshold Source") ? "not_applicable_to_row" : "source_reported_missing" === s ? s : null : "ggir_enmo" === n ? "not_applicable_to_row" : "needs_signal" === e ? "channel_unavailable" : "backend_required" === e ? "not_computed_for_export" : null;
		const a = {
			"Sedentary Max": "sedentaryMax",
			"Light Min": "lightMin",
			"Moderate Min": "moderateMin",
			"Vigorous Min": "vigorousMin"
		}[t];
		if (a && "not_applicable" === i("Threshold Source")) return "device_not_applicable";
		if ("needs_signal" === e) return "channel_unavailable";
		if ("backend_required" === e) return "not_computed_for_export";
		if ("ready" !== e) return null;
		const r = w.find((e) => e.method === n);
		return a && r?.cutpoint && !Number.isFinite(r.cutpoint[a]) || "MIMS Unit Total" === t && "mims" !== n ? "not_applicable_to_row" : "ggir_enmo" === n ? Fa.has(t) ? "source_reported_missing" === s ? s : null : Wa.has(t) && "not_computed_for_export" === s ? s : null : "mims" === n && [
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
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === i(x.marker_type.header) ? "manual_nonwear_period" : null : "true" === i(x.is_invalid_night.header).toLowerCase() && i(x.marker_type.header) === Ca ? "invalid_night" : t === x.total_nap_minutes.header && "0" === i(x.nap_count.header) ? "not_applicable_to_row" : [
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
const Ua = "missing_reasons.csv";
function Va(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(r).join(","))].map((e) => e + "\n").join("");
}
function qa(e, t) {
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
function Ka(e, t) {
	let n = !1, a = 0;
	for (let i = 0; i < e.length; i += 1) if ("\"" === e[i]) n && "\"" === e[i + 1] ? i += 1 : n = !n;
	else if ("," === e[i] && !n && ++a === t) return e.slice(0, i);
	return e;
}
function* Ya(e, t, n = !0, a) {
	const { headerlessColumns: i, fullRowCsv: r, rowOffset: s = 0, contextRows: o } = a ?? {}, l = i?.length ? i.join(",") + "\n" + e : e, d = c(l);
	if (d.unterminatedQuotedField) throw new Error(t + ": unterminated CSV cell");
	const [m, ...p] = d.records;
	if (!m) return {
		csv: e,
		withReason: 0,
		withoutReason: 0
	};
	const g = u(m.text), h = g.findIndex((e) => e.endsWith("_missing_reason"));
	if (h >= 0 && g.slice(h).some((e) => !e.endsWith("_missing_reason"))) throw new Error(t + ": internal reason fields must trail data fields");
	const f = g.map((e, t) => ({
		header: e,
		index: t
	})).filter(({ header: e }) => "" !== e && !e.endsWith("_missing_reason")), _ = p.map((e) => u(e.text)), w = _.map((e) => new Map(g.map((t, n) => [t, e[n] ?? ""]))), y = r ? c(r).records : [], v = y[0] ? u(y[0].text) : [], M = r ? y.slice(1).map((e) => u(e.text)) : [];
	if (r && f.length > 0 && M.length !== _.length) throw new Error(t + ": complete-row evidence count differs");
	const b = r ? M.map((e) => new Map(v.map((t, n) => [t, e[n] ?? ""]))) : w;
	let S = 0, k = 0;
	for (let u = 0; u < _.length; u += 1) {
		const e = _[u], n = w[u];
		for (const { header: a, index: i } of f) {
			if ("edit_recompute_requires_ms2_ms3" === b[u].get(a + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
				yield {
					file: t,
					row: s + u + 1,
					key: qa(n, s + u + 1),
					column: a,
					reason: Ea
				}, S += 1;
				continue;
			}
			const r = e[i] ?? "";
			if (!Ha(r) || "" !== r.trim() && Ga.has(a)) continue;
			const l = za(t, a, b[u], o?.() ?? b);
			l ? (S += 1, yield {
				file: t,
				row: s + u + 1,
				key: qa(n, s + u + 1),
				column: a,
				reason: l
			}) : (k += 1, console.warn("WARNING: unreasoned missing export cell"));
		}
	}
	if (n && k > 0) throw new Na(t + ": " + String(k) + " unreasoned missing metric cells");
	return h < 0 ? {
		csv: e,
		withReason: S,
		withoutReason: k
	} : {
		csv: [Ka(m.text, h), ...p.map((e) => Ka(e.text, h))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: S,
		withoutReason: k
	};
}
const Ja = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
];
async function Za(e, t, n) {
	const a = "nights" === t ? x.ggir_night.header : "window_number", i = H(n), s = await Promise.all(e.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await fn(e.imported, e.edits, t.night, n)])))), o = (await Promise.all(e.map(async (e, n) => {
		const a = e.current ?? e.imported, r = (e) => "nights" === t ? e.nights : e.days, o = "nights" === t ? a.nightRecomputed : a.dayRecomputed, l = "nights" === t ? e.imported.nightChecks : e.imported.dayChecks, u = s[n].filter((e) => null != e[1]), c = new Map(dn(e.imported).map((e) => [e.night, e.nightDate])), d = (e, n, a = !0) => {
			const i = e.columns.indexOf("nights" === t ? x.ggir_night.header : "night_number"), r = Number(e.values[i]?.[n]), s = c.get(r);
			if (a && s) return s;
			const o = e.values[e.columns.indexOf(x.ggir_calendar_date.header)]?.[n];
			if ("string" != typeof o) return;
			if (/^\d{4}-\d{2}-\d{2}$/.test(o)) return o;
			const l = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(o);
			return l ? `${l[3]}-${l[2].padStart(2, "0")}-${l[1].padStart(2, "0")}` : void 0;
		}, m = new Set(e.edits.map((e) => e.night)), p = e.edits.length > 0 && (!e.ms2 || !e.ms3) && !e.current, g = /* @__PURE__ */ new Set();
		if ("days" === t && p) {
			const t = await Promise.all(dn(e.imported).filter((e) => m.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), a = t.nightDate, r = n.onset < "12:00:00" ? await R(a, void 0, i) : a, s = n.wake <= n.onset ? await R(r, void 0, i) : r;
				return [Math.min(t.onsetMs, Date.parse(`${r}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${s}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: a.days.rows }, async (e, n) => {
				const r = Number(a.days.values[a.days.columns.indexOf("night_number")]?.[n]);
				if (m.has(r)) return void g.add(n);
				const s = d(a.days, n, !1), o = a.days.values[a.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof o ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(o) : null;
				if (!s || !l) return;
				const u = Date.parse(`${s}T${l[1]}Z`), c = l[2] < l[1] ? await R(s, void 0, i) : s, p = Date.parse(`${c}T${l[2]}Z`);
				t.some(([e, t]) => u <= t && p >= e) && g.add(n);
			}));
		}
		return {
			editedDayRows: g,
			editRecomputeUnavailable: p,
			editedNights: m,
			scoredDates: e.scoredDates,
			invalidDates: e.invalidDates,
			dateOf: d,
			table: r(a),
			ggir: r(e.imported),
			savedNights: e.imported.nights,
			recomputed: o,
			provenance: (e) => "nights" === t ? u.find(([t]) => t === e)?.[1] ?? "" : u.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(l.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === o.length) return null;
	const l = [];
	for (const r of o) for (const e of r.table.columns) l.includes(e) || l.push(e);
	const u = o.some((e) => e.editRecomputeUnavailable) ? l : [], c = [[
		...l.map(r),
		...Ja,
		...u.map((e) => r(e + "_missing_reason")),
		...Ja.map((e) => e + "_missing_reason")
	].join(",")], d = (e, t) => {
		const n = e.columns.indexOf(a);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: m, ggir: p, recomputed: g, provenance: h, checks: f, scoredDates: _, invalidDates: w, dateOf: y, editRecomputeUnavailable: v, editedNights: M, editedDayRows: b, savedNights: S } of o) {
		const e = S.columns.filter((e) => !Ba.has(e)), n = e.filter((e) => {
			const t = S.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return S.values[t].some((e, t) => {
				const a = Number(S.values[S.columns.indexOf(x.ggir_night.header)]?.[t]), i = n.has(a) && !Object.is(n.get(a), e);
				return n.set(a, e), i;
			});
		}), a = /* @__PURE__ */ new Set(), i = (e) => Array.from({ length: p.rows }, (e, t) => t).find((t) => !a.has(t) && d(p, t) === d(m, e) && n.every((n) => Object.is(p.values[p.columns.indexOf(n)]?.[t] ?? null, m.values[m.columns.indexOf(n)]?.[e] ?? null))), s = new Set(l.filter((n) => "nights" === t ? Ba.has(n) : !Pa.has(n) && !e.includes(n))), o = (n, a, i, o) => {
			const c = f.get(d(n, a));
			return [
				...l.map((s) => {
					if ("invalid" === i && ("nights" === t ? Ba.has(s) : /sleep|spt|waso|wake|onset|guider/i.test(s) && !e.includes(s))) return "";
					const o = n.columns.indexOf(s);
					return o < 0 ? "" : (l = n.values[o]?.[a], null == l ? "" : "number" == typeof l ? Number.isFinite(l) ? String(l) : "" : r(String(l)));
					var l;
				}),
				i,
				c?.status ?? "",
				r((c?.reasons ?? []).join(";")),
				r((c?.diffs ?? []).map((e) => e.column).join(";")),
				r(o),
				...u.map((e) => v && "ggir" === i && s.has(e) && ("days" === t ? b.has(a) : M.has(d(n, a))) ? Ea : ""),
				"",
				c ? "" : "not_computed_for_export",
				c?.reasons.length ? "" : "not_applicable_to_row",
				c?.diffs.length ? "" : "not_applicable_to_row",
				o ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let t = 0; t < m.rows; t += 1) {
			const e = y(m, t);
			if (_ && (!e || !_.has(e))) continue;
			const n = i(t);
			if (null != n && a.add(n), e && w?.has(e)) {
				null != n && c.push(o(p, n, "ggir", "")), c.push(o(m, t, "invalid", ""));
				continue;
			}
			if (!g[t]) {
				c.push(o(m, t, "ggir", ""));
				continue;
			}
			const r = d(m, t);
			null != n && c.push(o(p, n, "ggir", "")), c.push(o(m, t, "recomputed", h(r)));
		}
		for (let t = 0; t < p.rows; t += 1) {
			if (a.has(t)) continue;
			const e = y(p, t);
			(!_ || e && _.has(e)) && (c.push(o(p, t, "ggir", "")), e && w?.has(e) && c.push(o(p, t, "invalid", "")));
		}
	}
	return c.length > 1 ? `${c.join("\n")}\n` : null;
}
const Xa = M.ggir_part4_nightsummary_csv, Qa = Xa.map((e) => x[e].header), ei = [
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
], ti = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function ni(e, t) {
	const n = x[e], a = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof a ? r(a) : da(a, { integral: n.ggirIntegral ?? !1 });
}
function ai(e, t = "legacy-recording", n, i) {
	const r = [], s = [];
	for (const a of e) a.states && 0 !== a.timestamps.length && (s.push(a.states.subarray(0, Math.min(a.timestamps.length, a.states.length))), r.push({
		seriesId: t,
		...void 0 === n ? {} : { epochLengthSeconds: n },
		timestamps: a.timestamps,
		states: a.states
	}));
	const o = new Uint8Array(s.reduce((e, t) => e + t.length, 0));
	s.reduce((e, t) => (o.set(t, e), e + t.length), 0);
	const l = e.length > 0 && e.every((e) => null == e.states) ? "no_scored_epochs" : "no_valid_epochs";
	return 0 === o.length ? Promise.resolve({
		sri: null,
		fractionValid: null,
		sriMissingReason: l,
		fractionValidMissingReason: l
	}) : H(i).validStateFraction(o).then(async (e) => {
		if (!e) return {
			sri: null,
			fractionValid: e ?? null,
			sriMissingReason: "no_valid_epochs",
			fractionValidMissingReason: null == e ? "no_valid_epochs" : null
		};
		const t = /* @__PURE__ */ new Map();
		for (const n of r) for (let e = 0; e < Math.min(n.timestamps.length, n.states.length); e++) {
			const a = n.timestamps[e];
			Number.isFinite(a) && t.set(Math.round(a), 0 === n.states[e] || 1 === n.states[e]);
		}
		const s = (void 0 === n || 86400 % n == 0) && [...t].some(([e, n]) => n && t.get(e + 86400)), o = s ? null : "insufficient_pair", l = await async function(e, t) {
			const n = Array.isArray(e) ? e : [e], i = n.map((e) => ({
				...void 0 === e.seriesId ? {} : { series_id: e.seriesId },
				...void 0 === e.epochLengthSeconds ? {} : { epoch_length_seconds: e.epochLengthSeconds }
			})), [r, s] = Nn(n.map((e) => e.timestamps)), [o, l] = Nn(n.map((e) => e.states));
			return H(t).sleepRegularityIndex(a([
				JSON.stringify(i),
				r,
				s,
				o,
				l
			], [
				r.buffer,
				s.buffer,
				o.buffer,
				l.buffer
			]));
		}(r, i);
		if (s && null == l) throw new Error("SRI producer returned a blank despite valid pairs");
		return {
			sri: l,
			fractionValid: e,
			sriMissingReason: o,
			fractionValidMissingReason: null
		};
	});
}
async function ii(e, t, n, a = {}) {
	const { signal: i } = a, r = e.participantId ?? e.filename, o = xe(n.values(), a.algorithm), l = [];
	for (const [s, y] of n) {
		if (!gi(s, a.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = bn(y, o);
		l.push({
			timestamps: e,
			states: t
		});
	}
	const u = await ai(l, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, i), { sri: c, fractionValid: d } = u, m = "stale" === o.status ? "scores_from_another_config" : null, p = m ?? u.sriMissingReason, g = m ?? u.fractionValidMissingReason, h = [];
	for (const y of [...t.keys()].sort()) {
		const e = t.get(y);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === s.MAIN_SLEEP && null != t.onsetTimestamp && h.push({
			date: y,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const f = [[
		...Qa,
		...ei.map((e) => `${x[e].header}_missing_reason`),
		...ti.map((e) => `${x[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: s, onsetTs: y, wakeupTs: v } of h) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == v ? "not_applicable_to_row" : m ?? "no_scored_epochs"
		};
		if (null != v) {
			const { timestamps: a, algorithmResults: r } = await Fn(n, s, o, i);
			if (r && a.length > 0) {
				t.missingReason = null;
				const n = await vn(r, a, y, v, e.epochLengthSeconds || 60, null, i);
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
	const w = await H(i).ggirManualNightClocks(h.map((e) => e.date), Float64Array.from(h, (e) => e.onsetTs), Float64Array.from(h, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let s = 0; s < h.length; s++) {
		const { onsetTs: t, wakeupTs: n } = h[s], a = w[s], { tstH: i, nAwak: o, latency: l, efficiency: u } = _[s], m = {
			ggir_id: r,
			ggir_night: s + 1,
			ggir_sleeponset: a?.sleeponset ?? null,
			ggir_wakeup: a?.wakeup ?? null,
			ggir_spt_duration: a?.sptDuration ?? null,
			ggir_sleepparam: null,
			ggir_guider_onset: null,
			ggir_guider_wakeup: null,
			ggir_guider_spt_duration: null,
			ggir_error_onset: null,
			ggir_error_wake: null,
			ggir_error_dur: null,
			ggir_fraction_night_invalid: null,
			ggir_sleep_duration_in_spt: i,
			ggir_waso: a?.waso ?? null,
			ggir_duration_sib_wakinghours: null,
			ggir_number_sib_sleepperiod: null,
			ggir_number_of_awakenings: o,
			ggir_number_sib_wakinghours: null,
			ggir_duration_sib_wakinghours_atleast15min: null,
			ggir_sleeponset_ts: t,
			ggir_wakeup_ts: n,
			ggir_guider_onset_ts: null,
			ggir_guider_wakeup_ts: null,
			ggir_sleeplatency: l,
			ggir_sleepefficiency: u,
			ggir_page: null,
			ggir_daysleeper: null,
			ggir_weekday: a?.weekday ?? null,
			ggir_calendar_date: a?.calendarDate ?? null,
			ggir_filename: e.filename,
			ggir_cleaningcode: a?.cleaningcode ?? null,
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
			...Xa.map((e) => ni(e, m[e])),
			...ei.map((e) => {
				const t = Xa.indexOf(e);
				return t >= 0 && null == m[Xa[t]] ? "not_computed_for_export" : "";
			}),
			...ti.map((e) => {
				const t = Xa.indexOf(e);
				return t >= 0 && null == m[Xa[t]] ? _[s].missingReason ?? "" : "";
			}),
			p ?? "",
			g ?? ""
		].join(","));
	}
	return f.join("\n") + "\n";
}
function ri(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const si = "actogram_report.html";
function oi(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function li(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function ui(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: a } = oi(n), i = [e, a].filter(Boolean);
		t.set(n, 0 === i.length ? "part4_nightsummary.csv" : `part4_nightsummary_${i.join("_")}.csv`);
	}
	return t;
}
function ci(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : V(e);
}
function di(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function mi(e, t) {
	const n = [...e.keys()], a = n.reduce((t, n) => t + (e.get(n)?.algos.length ?? 0), 0), i = [];
	return i.push(`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${ri(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${ri(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${a} chart${1 !== a ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${ri(e.get(t)?.pid ?? t)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`), n.forEach((n, a) => {
		const r = e.get(n);
		i.push(`<section class="pid-sec${0 === a ? " initial" : ""}" id="sec-${a}">`), i.push(`  <h2 class="pid-lbl">${ri(r.pid)}</h2>`), r.algos.forEach(([e, s], o) => {
			const { algoKey: l, ruleKey: u } = oi(e), c = di([l, u].filter(Boolean).join("_"), "unscoped"), d = `activity-${di(n, "recording")}-${c}-${t}.svg`, m = function(e) {
				if (0 === e.timestamps.length) return pa("expected at least one epoch");
				if (e.timestamps.length !== e.activity.length) return pa("timestamp and activity lengths must match");
				let t = Number.NEGATIVE_INFINITY, n = 0, a = 0;
				const i = e.timestamps.map((i, r) => {
					const s = e.activity[r];
					return !Number.isFinite(i) || i <= t ? pa("timestamps must be finite and strictly ascending") : (t = i, null != s && Number.isFinite(s) ? (n = Math.min(n, s), a = Math.max(a, s), {
						timestamp: i,
						value: s
					}) : {
						timestamp: i,
						value: null
					});
				}), r = i[0].timestamp, s = i[i.length - 1].timestamp, o = s > r ? s : r + 1;
				if (!Number.isFinite(o) || o <= r) return pa("single-epoch viewport must have a representable right edge");
				a <= n && (a = n + 1);
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
				return ra({
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
						min: r,
						max: o
					},
					valueDomain: {
						min: n,
						max: a
					},
					series: [{
						tone: "secondary",
						strokeWidth: 1.5,
						valueDomain: {
							min: n,
							max: a
						},
						points: i
					}],
					overlays: [
						...u,
						...d,
						...e.additionalOverlays
					],
					cursorTimestamp: e.cursorTimestamp,
					selection: e.selection
				});
			}({
				timestamps: r.ts,
				activity: r.act,
				sleepIntervals: s.p.map((e) => ({
					startTimestamp: e.o,
					endTimestamp: e.f
				})),
				nonwearIntervals: s.n.map((e) => ({
					startTimestamp: e.s,
					endTimestamp: e.e
				})),
				additionalOverlays: [],
				cursorTimestamp: null,
				selection: null
			}), p = function(e) {
				const t = ra(e), n = la(t.size.width), a = la(t.size.height), i = la(t.plotArea.width), r = la(t.plotArea.height), s = ca(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
					let a = "", i = !1;
					for (const r of e.points) {
						if (null == r.value) {
							i = !1;
							continue;
						}
						const t = sa(r.timestamp, n.viewport, {
							left: 0,
							width: n.plotArea.width
						}), s = oa(r.value, e.valueDomain, n.plotArea.height);
						a += `${i ? "L" : "M"}${la(t)} ${la(s)}`, i = !0;
					}
					return 0 === a.length ? "" : `<path data-series-index="${t}" d="${a}" fill="none" stroke="${zn[e.tone]}" stroke-width="${la(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
				}(e, n, t)).join(""), l = ca(t, "over-series");
				return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${a}" viewBox="0 0 ${n} ${a}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${a}" fill="#ffffff"/><svg x="${la(t.plotArea.left)}" y="${la(t.plotArea.top)}" width="${i}" height="${r}" viewBox="0 0 ${i} ${r}" overflow="hidden"><rect x="0" y="0" width="${i}" height="${r}" fill="#ffffff"/>${s}${o}${l}${function(e) {
					const t = e.selection;
					if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
					const n = ua(sa(t.startTimestamp, e.viewport, {
						left: 0,
						width: e.plotArea.width
					}), 0, e.plotArea.width), a = ua(sa(t.endTimestamp, e.viewport, {
						left: 0,
						width: e.plotArea.width
					}), 0, e.plotArea.width);
					return `<rect data-activity-plot-selection="true" x="${la(n)}" y="0" width="${la(Math.max(1, a - n))}" height="${la(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
				}(t)}${function(e) {
					const t = e.cursorTimestamp;
					if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
					const n = sa(t, e.viewport, {
						left: 0,
						width: e.plotArea.width
					});
					return `<line data-activity-plot-cursor="true" x1="${la(n)}" y1="0" x2="${la(n)}" y2="${la(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
				}(t)}</svg><rect x="${la(t.plotArea.left)}" y="${la(t.plotArea.top)}" width="${i}" height="${r}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
			}(m);
			i.push(`  <div class="algo-block" data-algorithm-key="${ri(e)}">`), i.push(`    <div class="algo-lbl">${ri(function(e) {
				const { algoKey: t, ruleKey: n } = oi(e), a = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
				return t || n ? n ? `${a(t)} / ${a(n)}` : a(t) : "Legacy / Unscoped";
			}(e))}</div>`), s.stale && i.push(`    <div class="algo-stale" role="status">${ri(s.stale)}</div>`), i.push(`    <div class="cwrap" id="c${a}_${o}">`), i.push(`      <div class="plot-svg">${p}</div>`), i.push(`      <button type="button" class="svg-btn" data-download-name="${ri(d)}">Download SVG</button>`), i.push(`      <div class="scene-meta">${ri(ci(m.viewport.min))} → ${ri(ci(m.viewport.max))} · activity domain ${da(m.valueDomain.min)}–${da(m.valueDomain.max)}</div>`), i.push("    </div>"), i.push("  </div>");
		}), i.push("</section>");
	}), i.push("<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>"), i.push("</body>\n</html>"), i.join("\n");
}
function pi(e) {
	return new TextEncoder().encode(e);
}
function gi(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function hi(e, t, n, a) {
	const i = [], r = [];
	for (const [s, o] of e) if (s) for (let e = 0; e < Math.min(s.length, o.length); e++) i.push(o[e]), r.push(s[e]);
	return await H(a).spanFiniteMean(Float64Array.from(i), Float64Array.from(r), t, n) ?? null;
}
function fi(e) {
	return "string" == typeof e ? e : null;
}
function _i(e) {
	return "number" == typeof e ? e : null;
}
function wi(e, t) {
	const n = function(e, t) {
		switch (e.formatter) {
			case "verbatim_string": return function(e) {
				return e ? r(e) : "";
			}(fi(t));
			case "display_label": {
				const n = fi(t);
				return n ? function(e) {
					return e ? r(e) : "";
				}(e.labelEnum ? k(e.labelEnum, n) : n) : "";
			}
			case "core_printed_text":
			case "date_iso": return function(e) {
				return e ?? "";
			}(fi(t));
			case "integer": return function(e) {
				return null == e ? "" : String(Math.trunc(e));
			}(_i(t));
			case "fixed2": return function(e) {
				return null == e ? "" : e.toFixed(2);
			}(_i(t));
			case "python_scalar_str": return function(e) {
				return null == e ? "" : String(e);
			}("boolean" == typeof t ? null : t);
			case "python_float_repr": return function(e) {
				if (null == e) return "";
				if (!Number.isFinite(e)) return String(e);
				const t = String(e);
				return t.includes(".") || t.includes("e") ? t : `${t}.0`;
			}(_i(t));
			case "python_bool": return function(e) {
				return null == e ? "" : e ? "True" : "False";
			}("boolean" == typeof t ? t : null);
			case "clock_hhmm": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${ma(t.getUTCHours())}:${ma(t.getUTCMinutes())}`;
			}(_i(t));
			case "datetime_seconds": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${String(t.getUTCFullYear())}-${ma(t.getUTCMonth() + 1)}-${ma(t.getUTCDate())} ${ma(t.getUTCHours())}:${ma(t.getUTCMinutes())}:${ma(t.getUTCSeconds())}`;
			}(_i(t));
			case "ggir_value": return da(t, { integral: e.ggirIntegral ?? !1 });
		}
	}(e, t);
	return "" === n ? b[e.sentinel] : n;
}
function yi(e, t) {
	if (!t) return "";
	const { labelEnum: n } = x[e];
	return n ? k(n, t) : t;
}
const vi = S.invalid_night_row?.markerTypeCell ?? "", Mi = S.nonwear_row?.markerTypeCell ?? "";
function bi(e) {
	return M[e].filter((e) => "server" !== x[e].plane);
}
function Si(e) {
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
function ki(e) {
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
		avgAwakeningLength: e.averageAwakeningLengthMinutes,
		sleepEfficiency: e.sleepEfficiency,
		movementIndex: e.movementIndex,
		fragmentationIndex: e.fragmentationIndex,
		sleepFragmentationIndex: e.sleepFragmentationIndex,
		totalActivity: e.totalActivity,
		nonzeroEpochs: e.nonzeroEpochs
	};
}
async function xi(e, t, n, a, i, r, s) {
	try {
		return {
			metrics: await Mn(e, t, n, a, i, r, s),
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
async function Ii(e, t, n, a, i, r, o) {
	const l = i && i.trim().length > 0 ? i.trim() : null, u = hs(r, os.sleep), c = u.files, d = xn(u.studySettings[0]?.extraSettings), m = (e.length > 0 ? c.filter((t) => null != t.id && e.includes(t.id)) : [...c]).sort((e, t) => e.filename.localeCompare(t.filename)), [p, g] = n ?? ["", ""], h = [], f = [], _ = [], w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), v = async () => {
		for (const [e, t] of w) y.set(e, await Ai(e, t, h, o));
		w.clear();
	}, M = /* @__PURE__ */ new Map(), b = (e) => {
		const t = JSON.stringify(e);
		let n = M.get(t);
		return n || (n = H(o).exportNapAggregate(e), M.set(t, n)), n;
	}, S = await Promise.all(m.map(async (e) => {
		const t = u.ggirResultsBundles.find((t) => t.fileId === e.id), n = t ? dn(t.imported) : [];
		return {
			bundle: t,
			windows: n,
			bounds: n.length ? await H(o).ggirLabelsToStoredMs(Float64Array.from(n.flatMap((e) => [e.onsetMs, e.wakeMs])), e.ggirClockSteps ?? []) : []
		};
	}));
	for (const [x, I] of m.entries()) {
		if (o?.throwIfAborted(), x > 0 && m[x - 1].filename !== I.filename && await v(), !I.id) continue;
		const e = fs(u, I.id, t), i = ws(u, I.id), { bundle: r, windows: c, bounds: y } = S[x];
		for (const [t, n] of c.entries()) e.has(n.nightDate) || e.set(n.nightDate, [{
			fileId: I.id,
			date: n.nightDate,
			username: U,
			scoringSessionId: null,
			contentHash: "",
			syncStatus: "synced",
			lastModifiedAt: "",
			algorithm: pn(r.imported),
			detectionRule: null,
			isInvalidNight: !1,
			needsConsensus: !1,
			notes: "",
			nonwearMarkers: [],
			sleepMarkers: [{
				markerType: s.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: y[2 * t] / 1e3,
				offsetTimestamp: y[2 * t + 1] / 1e3
			}]
		}]);
		const { zone: M } = await Rn(I, d, o), k = [.../* @__PURE__ */ new Set([...I.availableDates, ...c.map((e) => e.nightDate)])].sort(), A = n ? k.filter((e) => e >= p && e <= g) : k, T = we(i.values());
		for (const t of A) {
			o?.throwIfAborted();
			const n = e.get(t);
			if (n && 0 !== n.length) for (const e of n) {
				if (!e.isInvalidNight && 0 === e.sleepMarkers.length && 0 === e.nonwearMarkers.length) continue;
				const n = I.participantId ?? null, r = I.id, u = e.algorithm ?? null, c = e.username ?? null, d = e.needsConsensus, m = e.notes, p = i.get(t), g = await R(t, void 0, H(o)), y = i.get(g), v = {
					fileId: r,
					filename: I.filename,
					participantId: n,
					studyDate: t,
					algorithm: u,
					scoredBy: c,
					needsConsensus: d,
					notes: m,
					meanTemperature: null,
					meanWhiteLight: null,
					meanRedLight: null,
					meanGreenLight: null,
					meanBlueLight: null,
					detectionRule: e.detectionRule ?? null,
					periodGuider: e.periodGuider ?? null,
					...Si(e.sleepPeriodDetectionConfig),
					algorithmVersion: e.algorithmVersion ?? null,
					verificationStatus: null,
					studyId: l,
					dstTransition: await Oe(M, t, void 0, H(o))
				}, S = await b(e.sleepMarkers.filter((e) => e.markerType === s.NAP).map((e) => ({
					start: e.onsetTimestamp,
					end: e.offsetTimestamp
				}))), k = a?.get(`${String(r)}|${t}`), x = {
					l5Hour: k?.l5Hour ?? null,
					m10Hour: k?.m10Hour ?? null,
					napCount: S.napCount,
					totalNapMinutes: S.napCount > 0 ? S.totalNapMinutes : null
				}, A = e.nonwearMarkers.map((e) => ({
					start: e.startTimestamp,
					end: e.endTimestamp
				})), N = T(u), E = bn(p, N), $ = `${I.filename}\0${n ?? ""}\0${v.algorithm ?? ""}\0${v.detectionRule ?? ""}`, C = w.get($) ?? [];
				C.push({
					date: t,
					epochLengthSeconds: I.epochLengthSeconds || 60,
					timestamps: E.timestamps,
					states: E.algorithmResults,
					stale: "stale" === N.status
				}), w.set($, C);
				const O = p?.temperature ? new Float64Array(p.temperature) : null, D = p ? new Float64Array(p.timestamps) : /* @__PURE__ */ new Float64Array(0), L = y?.temperature ? new Float64Array(y.temperature) : null, B = y ? new Float64Array(y.timestamps) : /* @__PURE__ */ new Float64Array(0), P = await Fn(i, t, N, o), F = async (e, t, n) => {
					if (!t || !n) return null;
					const a = (e) => e ? new Float64Array(e) : null;
					return hi([[a(p?.[e]), D], [a(y?.[e]), B]], t, n, o);
				}, W = (e, t) => hi([[O, D], [L, B]], e, t, o), j = async (e, t) => {
					let n = null, a = "not_applicable_to_row";
					if (e.onsetTimestamp && e.offsetTimestamp) {
						const { timestamps: t, algorithmResults: i, activity: r, scoresStale: s } = P;
						if (null !== s && 0 === _.length && _.push({
							component: "metric_computation",
							code: "unavailable",
							message: s
						}), a = null !== s ? "scores_from_another_config" : null == i ? "no_scored_epochs" : null == r ? "channel_unavailable" : 0 === t.length ? "no_valid_epochs" : void 0, null != i && null != r && t.length > 0) {
							const s = await xi(i, r, t, e.onsetTimestamp, e.offsetTimestamp, I.epochLengthSeconds || 60, o);
							n = s.metrics, s.error && (a = "not_computed_for_export"), s.error && 0 === _.length && _.push({
								component: "metric_computation",
								code: "unavailable",
								message: "Metric computation failed for at least one selected period; those rows carry no numerics."
							});
						}
					}
					const i = await H(o).exportPeriodFigures(e.onsetTimestamp, e.offsetTimestamp, A), r = Boolean(e.onsetTimestamp && e.offsetTimestamp), s = {
						...v,
						...x,
						periodIndex: e.markerIndex,
						markerType: e.markerType,
						onsetTimestamp: e.onsetTimestamp,
						offsetTimestamp: e.offsetTimestamp,
						...ki(n),
						metricMissingReason: a,
						isInvalidNight: t,
						meanTemperature: e.onsetTimestamp && e.offsetTimestamp ? await W(e.onsetTimestamp, e.offsetTimestamp) : null,
						meanWhiteLight: await F("lux", e.onsetTimestamp, e.offsetTimestamp),
						meanRedLight: await F("redLight", e.onsetTimestamp, e.offsetTimestamp),
						meanGreenLight: await F("greenLight", e.onsetTimestamp, e.offsetTimestamp),
						meanBlueLight: await F("blueLight", e.onsetTimestamp, e.offsetTimestamp),
						sleepMidpointTimestamp: r ? i.midpointTimestamp : null,
						sleepMidpointHour: r ? i.midpointClockHour : null,
						validWearMinutes: i.validWearMinutes
					}, l = (e, t) => null != e ? void 0 : r ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
					return s.sensorMissingReasons = {
						mean_temperature_c: l(s.meanTemperature, Boolean(p?.temperature || y?.temperature)),
						mean_white_light_lux: l(s.meanWhiteLight, Boolean(p?.lux || y?.lux)),
						mean_red_light: l(s.meanRedLight, Boolean(p?.redLight || y?.redLight)),
						mean_green_light: l(s.meanGreenLight, Boolean(p?.greenLight || y?.greenLight)),
						mean_blue_light: l(s.meanBlueLight, Boolean(p?.blueLight || y?.blueLight))
					}, s.derivedMissingReasons = {
						l5_hour: null == s.l5Hour ? k ? "no_valid_epochs" : "not_computed_for_export" : void 0,
						m10_hour: null == s.m10Hour ? k ? "no_valid_epochs" : "not_computed_for_export" : void 0,
						sleep_midpoint_time: null == s.sleepMidpointTimestamp ? r ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
						sleep_midpoint_hour: null == s.sleepMidpointHour ? r ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
						valid_wear_minutes: null == s.validWearMinutes ? r ? "no_valid_epochs" : "not_applicable_to_row" : void 0
					}, s;
				};
				if (e.isInvalidNight) {
					h.push({
						...v,
						...x,
						periodIndex: null,
						markerType: vi,
						onsetTimestamp: null,
						offsetTimestamp: null,
						...ki(null),
						isInvalidNight: !0,
						sleepMidpointTimestamp: null,
						sleepMidpointHour: null,
						validWearMinutes: null
					});
					for (const t of e.sleepMarkers) h.push(await j(t, !0));
				} else for (const t of e.sleepMarkers) h.push(await j(t, !1));
				for (const t of e.nonwearMarkers) f.push({
					...v,
					...x,
					periodIndex: t.markerIndex ?? 0,
					markerType: Mi,
					onsetTimestamp: t.startTimestamp,
					offsetTimestamp: t.endTimestamp,
					...ki(null),
					isInvalidNight: !1,
					sleepMidpointTimestamp: null,
					sleepMidpointHour: null,
					validWearMinutes: null
				});
			}
		}
	}
	await v(), h.sort(Ti), f.sort(Ti);
	const k = await async function(e, t) {
		const n = e.filter((e) => e.markerType === s.MAIN_SLEEP), a = /* @__PURE__ */ new Map();
		for (const s of n) {
			const e = `${s.filename}\0${s.participantId ?? ""}\0${s.algorithm ?? ""}\0${s.detectionRule ?? ""}`, t = a.get(e);
			t ? t.push(s) : a.set(e, [s]);
		}
		const i = [...a], r = await H(t).summarizeExportGroups(i.map(([, e]) => e.map((e) => ({
			study_date: e.studyDate,
			total_nap_minutes: e.totalNapMinutes,
			values: Ri.map(([, t]) => e[t])
		})))), o = i.map(([e, t], n) => {
			const [a, i, s, o] = e.split("\0"), l = r[n], u = Object.fromEntries(Ri.map(([e], t) => [e, l.means[t] ?? null]));
			return {
				filename: a,
				participantId: i,
				algorithm: s,
				detectionRule: o,
				nNights: l.nNights,
				...u,
				meanTemperatureMissingReason: null == u.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
				metricMissingReasons: Object.fromEntries(Ri.map(([e, n]) => {
					const a = Ni[e], i = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.metricMissingReason).find(Boolean);
					return [a, null == u[e] ? i : void 0];
				})),
				sleepRegularityIndex: null,
				meanTotalNapMinutes: l.meanTotalNapMinutes,
				studyId: t[0]?.studyId ?? null
			};
		});
		return o.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), o;
	}(h, o);
	for (const s of k) {
		const e = `${s.filename}\0${s.participantId}\0${s.algorithm}\0${s.detectionRule}`, t = y.get(e);
		s.sleepRegularityIndex = t?.sri ?? null, s.sleepRegularityMissingReason = t?.sriMissingReason ?? (t ? void 0 : "not_computed_for_export");
	}
	return {
		sleepRows: h,
		nonwearRows: f,
		summaryRows: k,
		degradations: _
	};
}
async function Ai(e, t, n, a) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const i = new Set(n.filter((t) => t.markerType === s.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return i.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : ai(t.filter((e) => i.has(e.date)), e, t[0]?.epochLengthSeconds, a);
}
function Ti(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const Ri = [
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
], Ni = {
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
}, Ei = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => yi("algorithm", e.algorithm),
	summary_detection_rule: (e) => yi("detection_rule", e.detectionRule),
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
}, $i = N;
function Ci(e) {
	return W(e);
}
function Oi(e) {
	return JSON.stringify(e, null, 2);
}
const Di = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function Li(e = $i, t = !1) {
	return zi("codebook_csv", e, Di, void 0, t);
}
const Bi = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], Pi = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function Fi(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== s.MAIN_SLEEP) continue;
		const e = Bi.map((e) => Gi(e, n)).join("\0"), a = t.get(e);
		a ? a.push(n) : t.set(e, [n]);
	}
	return t;
}
function* Wi(e, t = !1) {
	const n = Fi(e);
	let a = 0;
	const i = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > a && (a = t.length), t;
	}), r = Bi.map((e) => x[e].header);
	for (let o = 1; o <= a; o++) for (const [e] of Pi) r.push(`night${String(o)}_${e}`);
	const s = r;
	yield t ? [...r, ...s.map((e) => e + "_missing_reason")].join(",") : r.join(",");
	for (const o of i) {
		const e = o[0], n = Bi.map((t) => Gi(t, e)), i = Bi.map((t) => ji[t]?.(e) ? "" : Hi[t] ?? "");
		for (let t = 0; t < a; t++) {
			const e = o[t];
			for (const [t, a] of Pi) {
				const r = e ? Gi(a, e) : "";
				n.push(r), i.push(r ? "" : e ? "date" === t ? "" : e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? i : []].join(",");
	}
}
const ji = {
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
function Gi(e, t) {
	return wi(x[e], ji[e]?.(t) ?? null);
}
const Hi = {
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
function zi(e, t, n, a, i = !1) {
	const r = a && a.length > 0 ? new Set(a) : null, s = bi(e).filter((e) => null == r || r.has(x[e].header)), o = i ? s.filter((e) => Hi[e]) : [], l = [[...s.map((e) => x[e].header), ...o.map((e) => x[e].header + "_missing_reason")].join(",")];
	for (const u of t) l.push([...s.map((e) => wi(x[e], n[e]?.(u) ?? null)), ...o.map((e) => {
		const t = n[e]?.(u);
		return null == t || "" === t ? Hi[e] ?? "" : "";
	})].join(","));
	return l.join("\n");
}
function Ui(e, t, n = !1) {
	const a = zi("sleep_csv", e, ji, t, n), i = t?.length ? new Set(t) : null, r = [
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
	].filter((t) => (!i || i.has(x[t].header)) && e.some((e) => r.includes(t) && null == ji[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || s.includes(t) && e.metricMissingReason));
	return 0 === o.length ? a : c(a).records.map((t, n) => {
		if (0 === n) return t.text + "," + o.map((e) => `${x[e].header}_missing_reason`).join(",");
		const a = e[n - 1];
		return t.text + "," + o.map((e) => a.markerType === Mi ? "manual_nonwear_period" : a.markerType === vi ? "invalid_night" : r.includes(e) ? null == ji[e]?.(a) ? "source_reported_missing" : "" : a.sensorMissingReasons?.[e] ?? a.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? a.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (s.includes(e) ? a.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
bi("sleep_csv").map((e) => x[e].header);
const Vi = A("event_marker_csv", "local"), qi = 86400, Ki = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * qi * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), Yi = (e) => e < 10 ? `0${String(e)}` : String(e);
function Ji(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / qi), n = e - t * qi;
	return `${Ki(t)} ${Yi(Math.floor(n / 3600))}:${Yi(Math.floor(n / 60) % 60)}:${Yi(n % 60)}`;
}
function Zi(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function Xi(e, t, n, a, i) {
	const r = [], s = hs(n, os.event), o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		i?.throwIfAborted();
		const e = Zi(l, ws(s, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await Bn(e, H(i)), u = new Set(_s(s, l.id, a).keys());
		for (const a of e) {
			const e = o(a);
			t && (e < t[0] || e > t[1]) || u.has(e) && r.push({
				filename: l.filename,
				participantId: l.participantId ?? null,
				studyDate: e,
				localTimestamp: a,
				gmtOffsetMinutes: n
			});
		}
	}
	return r;
}
const Qi = S.invalid_night_row.markerTypeCell, er = A("actiware_interval_csv", "local"), tr = (e, t) => Math.round(e) === Math.round(t);
function nr(e, t = !1) {
	const n = t ? Ra.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], a = [[
		...er,
		...n.map(([, e]) => e + "_missing_reason"),
		...t ? [
			"Participant ID_missing_reason",
			"Origin_missing_reason",
			"Analysis_missing_reason"
		] : []
	].join(",")], i = (e) => Number.isFinite(e) ? Ji(Math.round(e)) : "";
	for (const { filename: s, participantId: o, studyDate: l, interval: u, statistics: c, invalidNight: d } of e) {
		const e = !0 === d && !Number.isFinite(u.startTimestamp), m = [
			s,
			o ?? "",
			l,
			d ? Qi : u.kind,
			e ? "" : u.source,
			i(u.startTimestamp),
			i(u.endTimestamp),
			e ? "" : u.origin,
			u.analysis ?? ""
		], p = n.map(([e]) => {
			if (d) return "invalid_night";
			if (!c || null != c[e]) return "";
			if (e.startsWith("off_wrist")) return "source_reported_missing";
			const t = /_(white|red|green|blue)(?:_percent)?$/u.exec(e)?.[1];
			return t && null == c["invalid_" + t + "_percent"] ? "source_reported_missing" : "";
		});
		a.push([
			...m.map((e) => r(e)),
			...Ra.map(([, e]) => c?.printed?.[e] ?? ""),
			...p,
			...t ? [
				o ? "" : "source_reported_missing",
				e ? "invalid_night" : u.origin ? "" : "source_reported_missing",
				u.analysis ? "" : d ? "invalid_night" : "not_applicable_to_row"
			] : []
		].join(","));
	}
	return `${a.join("\n")}\n`;
}
const ar = "local-export-streams";
var ir = class extends Error {
	file;
	step;
	constructor(e, t, n) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t;
	}
};
const rr = 65536, sr = "manifest.json", or = "Duplicate export entry: ", lr = "actiware_sleep_wake_export.csv", ur = A("actiware_sleep_wake_csv", "local");
async function cr(e, t, n, a) {
	if (0 === e.scores.byteLength) return [];
	const i = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, r = n ?? new Set(await a.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((i - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), i])));
	return (await Promise.all([...r].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await Dn(t, void 0, void 0, a);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
async function dr(e, t, a, i = n()) {
	return t || a ? (await cr(e, t, a, i)).reduce((e, t) => e + t.end - t.start, 0) : e.scores.byteLength;
}
async function* mr(e, t, n, a, i) {
	i?.throwIfAborted();
	const r = hs(n, os.actiwareSleepWake), s = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => r.actiwareFileData.find((t) => t.fileId === e.id)), l = function(e, t = !1) {
		const n = [[
			...ur,
			"Sleep/Wake_missing_reason",
			"Wake Threshold_missing_reason",
			...t ? ["Participant ID_missing_reason"] : []
		].join(",")];
		for (const a of e) n.push(pr(a, a.epochTimestamp, a.sleepWake, t));
		return `${n.join("\n")}\n`;
	}([], !0);
	let u = [], c = 0, d = 0;
	const m = () => {
		i?.throwIfAborted();
		const e = function(...e) {
			const t = Ya(...e), n = [];
			for (;;) {
				const e = t.next();
				if (e.done) return {
					...e.value,
					reasons: n
				};
				n.push(e.value);
			}
		}(l + u.join("\n") + "\n", lr, !0, { rowOffset: c }), t = c ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
			bytes: new TextEncoder().encode(t),
			rows: u.length,
			reasonRows: e.reasons.length,
			reasons: new TextEncoder().encode(Va(e.reasons, !1))
		};
		return c += u.length, u = [], d = 0, n;
	};
	for (const [p, g] of s.entries()) {
		i?.throwIfAborted();
		const e = o[p]?.actiwareSleepWake;
		if (!e) continue;
		const n = o[p]?.actiwareWakeThreshold, s = null != n && Number.isFinite(n) ? n : null, l = new Int8Array(e.scores), c = await cr(e, t, new Set(_s(r, g.id, a).keys()), H(i));
		i?.throwIfAborted();
		for (const { date: t, start: a, end: i } of c) {
			const n = {
				filename: g.filename,
				participantId: g.participantId ?? null,
				studyDate: t,
				sleepDetection: de(e.params, "sleep_detection"),
				wakeThresholdSelection: de(e.params, "wake_threshold_selection"),
				wakeThreshold: s,
				...null === s ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
			};
			for (let t = a; t < i; t += 1) {
				const a = l[t], i = pr(n, e.startTimestamp + t * e.epochSeconds, 0 === a || 1 === a ? a : null, !0);
				if (i.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
				u.push(i), d += i.length, (512 === u.length || d >= 32768) && (yield m());
			}
		}
	}
	u.length && (yield m()), i?.throwIfAborted();
}
function pr(e, t, n, a) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		Ji(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...a ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => r(e)).join(",");
}
const gr = rr;
function* hr(e) {
	const t = new TextDecoder();
	let n, a = "";
	for (let i = 0; i < e.byteLength; i += gr) {
		const r = i + gr >= e.byteLength;
		a += t.decode(e.subarray(i, i + gr), { stream: !r });
		const s = c(a, r);
		if (r && s.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const o = s.remainder ?? "";
		if (o.length > gr || s.records.some((e) => e.text.length > gr)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
		if (s.records.length) {
			const e = void 0 === n;
			n ??= s.records[0].text + "\n", yield {
				bytes: new TextEncoder().encode((e ? "" : n) + a.slice(0, a.length - o.length)),
				rows: s.records.length - (e ? 1 : 0)
			};
		}
		a = o;
	}
}
const fr = "union_all";
function _r(e) {
	return e.nonwearDetector ?? "union_all";
}
const wr = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: fr
}, yr = {
	...wr,
	minimumWakeWearMinutes: ge.minWearMinutesPerDay
};
function vr(e) {
	return e ? {
		...yr,
		...e
	} : yr;
}
function Mr(e, t) {
	const n = [];
	for (const a of e.values()) {
		for (const e of a.sleepMarkers) {
			const t = e.markerType === s.MAIN_SLEEP ? "main_sleep" : e.markerType === s.NAP ? "nap" : null;
			t && null != e.onsetTimestamp && null != e.offsetTimestamp && n.push({
				kind: t,
				source: "human",
				start: e.onsetTimestamp,
				end: e.offsetTimestamp
			});
		}
		for (const e of a.nonwearMarkers) null != e.startTimestamp && null != e.endTimestamp && n.push({
			kind: "manual_nonwear",
			source: "human",
			start: e.startTimestamp,
			end: e.endTimestamp
		});
	}
	for (const a of t) n.push({
		kind: "sensor_nonwear",
		source: "device",
		start: a.startTimestamp,
		end: a.endTimestamp
	});
	return n;
}
function br(e, t, n, a) {
	const i = _r(t), r = "union_all" === i ? Object.entries(ne(e, n)) : [[i, ae(e, i, n)], ..."detach_nonwear" === i ? [] : [["detach_nonwear", ae(e, "detach_nonwear", n)]]], s = new Float64Array(e.timestamps);
	return r.flatMap(([e, t]) => {
		if (!t) return [];
		const n = new Uint8Array(t);
		return 0 === n.length ? [] : [n.length === s.length ? {
			kind: "algorithm_nonwear",
			source: e,
			timestamps: s,
			epochSeconds: a,
			mask: n
		} : {
			kind: "algorithm_nonwear",
			source: e,
			mask: n
		}];
	});
}
function Sr(e) {
	return {
		excludeNonwear: e.excludeNonwear,
		excludeMainSleep: e.excludeMainSleep,
		excludeNaps: e.excludeNaps,
		useAlgorithmNonwear: e.useAlgorithmNonwear,
		useManualNonwear: e.useManualNonwear,
		minimumWakeWearMinutes: Number.isFinite(e.minimumWakeWearMinutes) ? Math.max(0, e.minimumWakeWearMinutes) : 0
	};
}
function kr(e) {
	return {
		totalEpochs: e.totalEpochs,
		includedEpochs: e.includedEpochs,
		nonwearEpochs: e.nonwearEpochs,
		mainSleepEpochs: e.mainSleepEpochs,
		napEpochs: e.napEpochs,
		overlapEpochs: e.overlapEpochs
	};
}
function xr(e, t) {
	return H(t).summarizePhysicalActivityDays(e);
}
async function Ir(e, t = n()) {
	const a = await t.weekendDates([...e]);
	return Array.from(a, (e) => 0 !== e);
}
const Ar = O.PRESCHOOL_FREE_LIVING_RF_3_5;
function Tr(e) {
	const t = e.algorithmResults[Ar];
	return null != t && new Uint8Array(t).length > 0;
}
function Rr(e) {
	const t = e.algorithmResults[Ar];
	if (!t) return null;
	const n = new Uint8Array(t);
	return n.length > 0 ? n : null;
}
function Nr(e) {
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
function Er(e) {
	return e instanceof Map ? Er([...e.entries()]) : Array.isArray(e) ? e.map(Er) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, Er(t)])) : e;
}
async function $r(e, t) {
	const { db: n, fileId: a, kind: i, inputs: r, signal: s } = e;
	s?.throwIfAborted();
	let o = n, l = null;
	if (o) try {
		const e = await o.activityDays.where("fileId").equals(a).primaryKeys();
		l = await F(JSON.stringify(Er({
			version: 1,
			core: "c72c5872223bef90c042da3a66ecdc03b830673a",
			kind: i,
			fileId: a,
			dayIds: [...e].sort((e, t) => Number(e) - Number(t)),
			inputs: r
		})));
		const t = await o.physicalActivityFileSummaries.get([a, i]);
		if (t?.inputKey === l) return t.value;
	} catch {
		o = null;
	}
	s?.throwIfAborted();
	const u = await t();
	if (s?.throwIfAborted(), o && l) try {
		await z(o, [o.physicalActivityFileSummaries], (e) => e.table(o.physicalActivityFileSummaries.name).put({
			fileId: a,
			kind: i,
			inputKey: l,
			value: u
		}), s);
	} catch {
		s?.throwIfAborted(), console.warn("[physical-activity] A file's answers could not be stored; the tab recomputes them.");
	}
	return u;
}
function Cr(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function Or(e, t) {
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
function Dr(e, t, n) {
	if (!n) return e.ruleLabel;
	const a = String(t.sedentaryMax), i = String(t.lightMin), r = String(t.moderateMin - 1), s = String(t.moderateMin), o = String(t.vigorousMin - 1), l = String(t.vigorousMin);
	return t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${a}, non-sedentary >=${i} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${a}, light ${i}-${r}, MVPA >=${s} counts/min` : `Custom cutpoints: Sed <=${a}, light ${i}-${r}, moderate ${s}-${o}, vigorous >=${l} counts/min`;
}
const Lr = [
	null,
	"sedentary",
	"light",
	"moderate",
	"vigorous"
];
async function Br(e) {
	const { values: t, countsPerMinuteScale: n, method: a, date: i, maskReasons: r } = e;
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
	const l = await H(e.signal).cutpointToneCodes(Float64Array.from(o, (e) => e.countsPerMinute), Cr(a));
	let u = 0;
	const c = [];
	return o.forEach((e, t) => {
		const n = Lr[l[t] ?? 0];
		n && (u = Math.max(u, e.countsPerMinute), c.push({
			x: c.length,
			value: e.countsPerMinute,
			tone: n,
			maskReason: r?.[e.index] ?? "included"
		}));
	}), 0 === c.length ? null : {
		date: i,
		sourceLabel: a.sourceLabel,
		valueMax: Math.max(u, a.cutpointScaleMax ?? 1),
		points: c
	};
}
function Pr(e, t) {
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
function Fr(e) {
	e.mvpaMinutesPerDay = e.totalDays > 0 ? e.mvpaMinutes / e.totalDays : 0, e.totalDays > 0 && (null != e.mvpaBouts && (e.mvpaBoutsPerDay = e.mvpaBouts / e.totalDays), null != e.sedentaryBreaks && (e.sedentaryBreaksPerDay = e.sedentaryBreaks / e.totalDays));
}
function Wr(e, t) {
	e.sedentaryMinutes += t.sedentaryMinutes, e.lightMinutes += t.lightMinutes, e.moderateMinutes += t.moderateMinutes, e.vigorousMinutes += t.vigorousMinutes, e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes;
}
function jr(e, t, n, a) {
	if (0 === t.totalDays) return;
	e.totalDays += t.totalDays, Wr(e, t.intensity), e.defaultIntensityMinutes && t.defaultIntensity && Wr(e.defaultIntensityMinutes, t.defaultIntensity), null != t.mimsUnitTotal && (e.mimsUnitTotal = (e.mimsUnitTotal ?? 0) + t.mimsUnitTotal), e.totalEpochsReviewed = (e.totalEpochsReviewed ?? 0) + t.totalEpochs, e.includedEpochsReviewed = (e.includedEpochsReviewed ?? 0) + t.includedEpochs, e.wakeWearMinutes = (e.wakeWearMinutes ?? 0) + t.wakeWearMinutes, e.excludedNonwearMinutes = (e.excludedNonwearMinutes ?? 0) + t.excludedNonwearMinutes, e.excludedMainSleepMinutes = (e.excludedMainSleepMinutes ?? 0) + t.excludedMainSleepMinutes, e.excludedNapMinutes = (e.excludedNapMinutes ?? 0) + t.excludedNapMinutes, e.maskOverlapEpochs = (e.maskOverlapEpochs ?? 0) + t.overlapEpochs, e.maskPolicy = n;
	const i = t.bouts;
	i && (e.mvpaBouts = (e.mvpaBouts ?? 0) + i.mvpaBouts, e.mvpaBoutMinutes = (e.mvpaBoutMinutes ?? 0) + i.mvpaBoutMinutes, e.sedentaryBouts = (e.sedentaryBouts ?? 0) + i.sedentaryBouts, e.sedentaryBreaks = (e.sedentaryBreaks ?? 0) + i.sedentaryBreaks, a.total += i.meanSedentaryBoutMinutes * i.sedentaryBouts, e.meanSedentaryBoutMinutes = e.sedentaryBouts > 0 ? a.total / e.sedentaryBouts : 0);
}
async function Gr(e) {
	const { file: t, days: n, summaries: a, markersByAnalysisDate: i, sensorNonwearPeriods: r, maskPolicy: s, validDayCriteria: o, cutpointMethods: l, choiAxis: u } = e, c = new Set([...i].filter(([, e]) => f(e)).map(([e]) => e)), d = Number.isFinite(t.epochLengthSeconds) && t.epochLengthSeconds > 0 ? t.epochLengthSeconds : 60, m = 60 / d, p = {
		policy: Sr(s),
		intervals: Mr(i, r)
	}, g = n.map((e) => br(e, s, u, d)), h = n.map((e, t) => ({
		timestamps: new Float64Array(e.timestamps),
		epochSeconds: d,
		series: g[t]
	})), { dates: _, shortfall: w } = await async function({ days: e, countDays: t, epochSeconds: n, request: a, criteria: i, scoredDates: r, signal: s }) {
		if (!i) return {
			dates: null,
			shortfall: null
		};
		if (e.some((e) => !r.has(e.date))) return {
			dates: null,
			shortfall: null
		};
		const o = await xr({
			...a,
			days: [...t]
		}, s), l = 86400 / n, u = await Ir(e.map((e) => e.date), H(s)), c = e.map((e, t) => {
			const n = o.days[t].mask;
			return {
				date: e.date,
				wearMinutes: n.wakeWearMinutes,
				isWeekend: u[t],
				isPartialDay: n.totalEpochs < l
			};
		}), d = await async function(e, t = ge, n) {
			return H(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
		}(c, i, s);
		if (!d.meetsCriteria) {
			const e = i.requireWeekendDay && !d.hasWeekendValidDay ? ", including a weekend day" : "";
			return {
				dates: /* @__PURE__ */ new Set(),
				shortfall: `${String(d.validDays)} of the required ${String(i.minValidDaysPerParticipant)} valid days${e}`
			};
		}
		const m = await async function(e, t = ge, n) {
			const a = await H(n).validWearDays(Float64Array.from(e), t);
			return Array.from(a, (e) => 0 !== e);
		}(c.map((e) => e.wearMinutes), i, s);
		return {
			dates: new Set(c.filter((e, t) => m[t]).map((e) => e.date)),
			shortfall: null
		};
	}({
		days: n,
		countDays: h,
		epochSeconds: d,
		request: p,
		criteria: o,
		scoredDates: c,
		signal: e.signal
	}), y = a.filter((e) => !(s.minimumWakeWearMinutes > 0 && (null == e.validHours || 60 * e.validHours < s.minimumWakeWearMinutes))).filter((e) => null != e.sedentaryMinutes && null != e.lpaMinutes && null != e.mvpaMinutes).filter((e) => !_ || _.has(e.analysisDate)).map((e) => ({
		sedentaryMinutes: e.sedentaryMinutes,
		lpaMinutes: e.lpaMinutes,
		mvpaMinutes: e.mvpaMinutes
	})), v = n.map((e) => !_ || _.has(e.date)), M = [];
	for (let f = 0; f < l.length; f++) {
		e.signal?.throwIfAborted();
		const a = l[f];
		if (se(a.method, t.sourceProfileId)) {
			M.push(null);
			continue;
		}
		const i = [];
		if (n.forEach((e, t) => {
			const n = new Float64Array("axisY" === a.axis ? e.axisY : e.vectorMagnitude);
			n.length > 0 && n.length === h[t].timestamps.length && i.push({
				index: t,
				values: n
			});
		}), 0 === i.length) {
			M.push(null);
			continue;
		}
		const r = await xr({
			...p,
			analysisKind: "count_cutpoint",
			thresholds: Cr(a),
			defaultThresholds: Cr(ce[f]),
			days: i.map(({ index: e, values: t }) => ({
				...h[e],
				values: t,
				aggregate: v[e]
			}))
		}, e.signal), s = {
			signalSeen: r.days.some((e) => e.hasValidSignal),
			totals: r.totals
		}, o = i.find(({ index: e }) => v[e]);
		if (o) {
			const t = await xr({
				...p,
				includeEpochDetails: !0,
				days: [h[o.index]]
			}, e.signal), i = await Br({
				values: o.values,
				countsPerMinuteScale: m,
				method: a,
				date: n[o.index].date,
				maskReasons: t.days[0].reasons,
				signal: e.signal
			});
			i && (s.previewTrace = i);
		}
		if (r.totals.totalDays > 0) {
			const t = await he(a.method, d, e.signal);
			t && "warn" === t.severity && (s.epochMismatch = t);
		}
		M.push(s);
	}
	const b = (e, t) => n.flatMap((n, a) => {
		const i = e(n);
		return i && 0 !== i.length ? [{
			timestamps: h[a].timestamps,
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(i),
			grid: t,
			fallbackEpochSeconds: d,
			series: g[a],
			aggregate: v[a]
		}] : [];
	}), S = async (t, n) => {
		if (e.signal?.throwIfAborted(), 0 === t.length) return null;
		const a = await xr({
			...p,
			analysisKind: n,
			days: t
		}, e.signal);
		return {
			signalSeen: a.days.some((e) => e.hasValidSignal),
			totals: a.totals
		};
	};
	return {
		shortfall: w,
		ggirSummarySeen: a.length > 0,
		ggirRows: y,
		hasAnyActivity: v.some(Boolean),
		cutpoints: M,
		mims: await S(b((e) => e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output"), "mims_volume"),
		preschoolRf: await S(b(Rr, "classifier"), "preschool_classifier")
	};
}
async function Hr(e = {}) {
	const t = await Ee(e.dbOverride, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = e.username ?? "anonymous", a = e.maskPolicy ?? wr, i = e.validDayCriteria, r = ie("ggir_enmo"), s = ie("mims"), o = ie("preschool_free_living_rf_3_5"), l = Pr({
		method: r.method,
		label: r.label,
		requiredSignal: r.requiredSignal,
		sourceLabel: r.signalLabel,
		ruleLabel: "Uses imported GGIR daily sedentary, LPA, and MVPA summaries",
		unavailableAction: "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."
	}, null), u = H(e.signal), c = await Promise.all(ce.map((t) => async function(e, t, n) {
		const a = t[e.method];
		if (!a) return e;
		const i = await fe(a, n);
		if (!i) return e;
		const r = Cr(e);
		return {
			...e,
			ruleLabel: Dr(e, i, JSON.stringify(i) !== JSON.stringify(r)),
			cutpointBands: Or(i, e.cutpointBands),
			cutpointScaleMax: Math.max(e.cutpointScaleMax ?? 1, ...Object.values(i).filter(Number.isFinite)),
			...i
		};
	}(t, e.cutpointOverrides ?? {}, u))), d = c.map((e, t) => function(e, t) {
		return {
			...Pr(e, null),
			cutpointThresholds: Cr(e),
			defaultCutpointThresholds: Cr(t),
			cutpointEditable: !0,
			defaultIntensityMinutes: {
				sedentaryMinutes: 0,
				lightMinutes: 0,
				moderateMinutes: 0,
				vigorousMinutes: 0,
				mvpaMinutes: 0
			}
		};
	}(e, ce[t])), m = new Array(c.length).fill(!1), p = [], g = Pr({
		method: s.method,
		label: s.label,
		requiredSignal: s.requiredSignal,
		sourceLabel: s.signalLabel,
		ruleLabel: "Uses stored MIMS_UNIT epoch values from actours; intensity cutpoints/equating are not applied in this row.",
		unavailableAction: "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values.",
		unavailableStatus: "backend_required"
	}, null);
	g.mimsUnitTotal = 0, g.mimsUnitPerDay = 0;
	const h = Pr({
		method: o.method,
		label: o.label,
		requiredSignal: o.requiredSignal,
		sourceLabel: o.signalLabel,
		ruleLabel: "Uses actimetric Preschool Wrist Random Forest Free Living Lag-Lead classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
		unavailableAction: "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.",
		unavailableStatus: "backend_required"
	}, null), f = ie("hildebrand_enmo_wrist_2014"), _ = Pr({
		method: f.method,
		label: f.label,
		requiredSignal: f.requiredSignal,
		sourceLabel: f.signalLabel,
		ruleLabel: "Hildebrand 2014 non-dominant wrist ENMO (mg) cut-points: MVPA >=201 mg, vigorous >=707 mg; light near ~45 mg. Applied to a calibrated ENMO (mg) epoch signal, never to ActiGraph counts.",
		unavailableAction: "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline; the browser count pipeline does not compute ENMO mg.",
		unavailableStatus: "needs_signal"
	}, null);
	let w = !1, y = !1, v = !1, M = !1;
	const b = Q(), S = c.map(() => ({ total: 0 })), k = { total: 0 };
	for (const I of t) {
		if (e.signal?.throwIfAborted(), !I.id) continue;
		const t = I.id, r = await be(t, e.dbOverride), s = await Se(t, n, e.dbOverride), o = await Me(t, e.dbOverride), u = await $r({
			db: e.dbOverride ?? null,
			fileId: t,
			kind: "analysis",
			...e.signal ? { signal: e.signal } : {},
			inputs: {
				epochLengthSeconds: I.epochLengthSeconds,
				sourceProfileId: I.sourceProfileId ?? null,
				summaries: r,
				markers: Nr(s),
				sensorNonwearPeriods: o,
				maskPolicy: a,
				validDayCriteria: i ?? null,
				thresholds: c.map(Cr),
				choiAxis: b
			}
		}, async () => Gr({
			file: I,
			days: [...(await Ce(t, e.dbOverride, e.activityDayMemo)).values()],
			summaries: r,
			markersByAnalysisDate: s,
			sensorNonwearPeriods: o,
			maskPolicy: a,
			validDayCriteria: i,
			cutpointMethods: c,
			choiAxis: b,
			...e.signal ? { signal: e.signal } : {}
		}));
		u.shortfall && p.push(u.shortfall), u.ggirSummarySeen && (y = !0);
		for (const e of u.ggirRows) l.totalDays += 1, l.sedentaryMinutes += e.sedentaryMinutes, l.lightMinutes += e.lpaMinutes, l.mvpaMinutes += e.mvpaMinutes;
		u.hasAnyActivity && (w = !0), u.cutpoints.forEach((e, t) => {
			if (!e) return;
			const n = d[t];
			e.signalSeen && (m[t] = !0), jr(n, e.totals, a, S[t]), e.previewTrace && !n.previewTrace && (n.previewTrace = e.previewTrace), e.epochMismatch && !n.epochMismatch && (n.epochMismatch = e.epochMismatch);
		}), u.mims && (u.mims.signalSeen && (v = !0), jr(g, u.mims.totals, a, k)), u.preschoolRf && (u.preschoolRf.signalSeen && (M = !0), jr(h, u.preschoolRf.totals, a, k));
	}
	for (let I = 0; I < d.length; I++) {
		const e = d[I], t = c[I];
		e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes, 0 === e.totalDays && (e.available = !1, e.status = m[I] ? "ready" : "needs_signal", e.unavailableReason = m[I] ? p.length > 0 ? `Excluded by the valid-days-per-participant rule: ${p.join("; ")}. Change it in Study Settings → valid-day criteria.` : `No local ${e.sourceLabel.toLowerCase()} days meet the minimum wake-wear rule.` : w ? `No local ${e.sourceLabel.toLowerCase()} days are available.` : "No local activity epochs are available.", e.nextStepLabel = t.unavailableAction), Fr(e);
	}
	l.moderateMinutes = l.mvpaMinutes, Fr(l), 0 === l.totalDays && (l.available = !1, l.status = y ? "ready" : "needs_signal", l.unavailableReason = y ? "No local GGIR daily summaries meet the current inclusion rules." : "No local GGIR daily summaries are available. Import raw/5-second-capable files to populate ENMO summaries.", l.nextStepLabel = "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."), g.totalDays > 0 ? (g.available = !0, g.status = "ready", g.unavailableReason = null, g.nextStepLabel = null, g.mimsUnitPerDay = (g.mimsUnitTotal ?? 0) / g.totalDays) : (g.available = !1, g.status = v ? "ready" : "backend_required", g.unavailableReason = v ? "No stored MIMS_UNIT epoch days meet the current inclusion rules." : "No MIMS_UNIT epoch values are stored in this workspace yet. This becomes ready when the actours MIMS backend/WASM build computes and stores MIMS_UNIT epochs.", g.nextStepLabel = "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values."), Fr(_), _.available = !1, _.status = "needs_signal", _.unavailableReason = "No calibrated ENMO (mg) epoch stream is available in this workspace. ENMO (mg) is a raw/GGIR-derived signal; the browser count pipeline does not produce it, so this method cannot classify counts against Hildebrand mg thresholds.", _.nextStepLabel = "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline.", Fr(h), h.totalDays > 0 ? (h.available = !0, h.status = "ready", h.unavailableReason = null, h.nextStepLabel = null) : (h.available = !1, h.status = M ? "ready" : "backend_required", h.unavailableReason = M ? "No stored preschool wrist RF class days meet the current inclusion rules." : "No actimetric-compatible preschool wrist RF class epochs are stored in this workspace yet. This becomes ready when actours/WASM computes 15 s classes for 3-5 year-old wrist data.", h.nextStepLabel = "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.");
	const x = t.map((e) => e.sourceProfileId);
	return [
		l,
		h,
		...d,
		_,
		g
	].filter((e) => _e(e.method, x));
}
const zr = [
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
function Ur(e, t) {
	if (!t) return !0;
	const [n, a] = t;
	return e >= n && e <= a;
}
function Vr(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function qr(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function Kr(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
function Yr(e) {
	const t = ue.find((t) => t.method === e);
	if (t) return {
		family: t.family,
		requiredSignal: t.requiredSignal,
		computationOwner: t.backendOwner ?? "browser_workspace",
		frontendComputesMetric: t.frontendComputesMetric,
		statusWhenMissing: t.statusWhenMissing
	};
	const n = ie(e), a = "ready" === n.statusWhenMissing ? "needs_signal" : n.statusWhenMissing;
	return {
		family: n.family,
		requiredSignal: n.requiredSignal,
		computationOwner: n.backendDependency ?? "browser_workspace",
		frontendComputesMetric: "count_cutpoint" === n.family,
		statusWhenMissing: a
	};
}
function Jr(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function Zr(e, t, n) {
	return "default" === n ? e.ruleLabel : t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, non-sedentary >=${String(t.lightMin)} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, MVPA >=${String(t.moderateMin)} counts/min` : `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, moderate ${String(t.moderateMin)}-${String(t.vigorousMin - 1)}, vigorous >=${String(t.vigorousMin)} counts/min`;
}
function Xr(e) {
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
async function Qr(e, t, n = {}, a) {
	const i = await Ee(a), r = (e.length > 0 ? i.filter((t) => null != t.id && e.includes(t.id)) : i).sort((e, t) => e.filename.localeCompare(t.filename)), s = [], o = n.username ?? "anonymous", l = n.maskPolicy ?? wr, u = n.choiAxis ?? Q(), c = _r(l), d = n.cutpointOverrides, m = n.cutpointPresetNames, p = H(n.signal), g = await Promise.all(ce.map((e) => async function(e, t, n, a) {
		const i = t?.[e.method], r = i ? await fe(i, a) : null;
		return r ? {
			thresholds: r,
			source: "custom",
			presetName: n?.[e.method] ?? ""
		} : {
			thresholds: Jr(e),
			source: "default",
			presetName: ""
		};
	}(e, d, m, p))), h = n.inclusionRulePresetName ?? "", f = n.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), _ = ie("ggir_enmo"), w = ie("mims"), y = ie("preschool_free_living_rf_3_5"), v = Yr("ggir_enmo"), M = Yr("mims"), b = Yr("preschool_free_living_rf_3_5");
	for (const S of r) {
		if (n.signal?.throwIfAborted(), !S.id) continue;
		if (!0 === S.ggirSummariesNeedRecompute) throw new Error(`${S.filename}: its GGIR summaries were not recomputed for the current study settings. In Study settings, run Rescore (offered for every file whose summaries are refused) before exporting.`);
		const e = S.participantId ?? "", i = Number.isFinite(S.epochLengthSeconds) && S.epochLengthSeconds > 0 ? S.epochLengthSeconds : 60, r = await be(S.id, a);
		for (const n of r) Ur(n.analysisDate, t) && s.push({
			filename: S.filename,
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
			sourceContentHash: S.sourceContentHash ?? S.fileHash,
			exportedAt: f,
			notes: "Stored GGIR daily summary values."
		});
		const d = [...(await Ce(S.id, a, n.activityDayMemo)).entries()].filter(([e]) => Ur(e, t)).sort(([e], [t]) => e.localeCompare(t)).map(([, e]) => e), m = await Se(S.id, o, a), p = await Me(S.id, a), k = {
			policy: Sr(l),
			intervals: Mr(m, p)
		}, x = d.map((e) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: i,
			series: br(e, l, u, i)
		})), I = async (e, t) => {
			n.signal?.throwIfAborted();
			const a = d.flatMap((t, n) => {
				const a = e(t, n);
				return a ? [{
					index: n,
					dayInput: a
				}] : [];
			}), i = d.map(() => {});
			if (0 === a.length) return i;
			const r = await xr({
				...k,
				...t,
				days: a.map(({ dayInput: e }) => e)
			}, n.signal);
			return n.signal?.throwIfAborted(), a.forEach(({ index: e }, t) => {
				i[e] = r.days[t];
			}), i;
		}, A = (e, t, n, a) => e && e.length > 0 ? {
			timestamps: x[a].timestamps,
			series: x[a].series ?? [],
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(e),
			grid: t,
			fallbackEpochSeconds: i
		} : null, T = [], R = ce.map((e) => null !== se(e.method, S.sourceProfileId));
		for (const [t, n] of ce.entries()) R[t] ? T.push([]) : T.push(await I((e, t) => {
			const a = new Float64Array("axisY" === n.axis ? e.axisY : e.vectorMagnitude);
			return a.length > 0 && a.length === x[t].timestamps.length ? {
				...x[t],
				values: a
			} : null;
		}, {
			analysisKind: "count_cutpoint",
			thresholds: g[t].thresholds
		}));
		const N = await I((e, t) => A(Rr(e), "classifier", e, t), { analysisKind: "preschool_classifier" }), E = await I((e, t) => A(e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output", e, t), { analysisKind: "mims_volume" }), $ = await Promise.all(ce.map((e) => he(e.method, i, n.signal)));
		for (const [t, n] of d.entries()) {
			const a = n.date;
			for (const [n, d] of ce.entries()) {
				if (R[n]) continue;
				const r = g[n], u = Zr(d, r.thresholds, r.source), m = Yr(d.method), p = $[n], _ = Xr(T[n][t]);
				s.push({
					filename: S.filename,
					participantId: e,
					analysisDate: a,
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
					epochLengthSeconds: i,
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
					sourceContentHash: S.sourceContentHash ?? S.fileHash,
					exportedAt: f,
					notes: _ ? u : `No finite ${d.sourceLabel.toLowerCase()} values for this day.`
				});
			}
			const r = Xr(N[t]);
			null === se("preschool_free_living_rf_3_5", S.sourceProfileId) && s.push({
				filename: S.filename,
				participantId: e,
				analysisDate: a,
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
				epochLengthSeconds: r?.epochLengthSeconds ?? i,
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
				sourceContentHash: S.sourceContentHash ?? S.fileHash,
				exportedAt: f,
				notes: r ? "Stored actimetric-compatible preschool class epochs summarized with the selected mask policy." : "No stored actimetric-compatible preschool class epochs for this day."
			});
			const u = Xr(E[t]);
			null === se("mims", S.sourceProfileId) && s.push({
				filename: S.filename,
				participantId: e,
				analysisDate: a,
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
				epochLengthSeconds: u?.epochLengthSeconds ?? i,
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
				sourceContentHash: S.sourceContentHash ?? S.fileHash,
				exportedAt: f,
				notes: u ? "Stored MIMS_UNIT epoch values; intensity cutpoints are not applied." : "No stored MIMS_UNIT epoch values for this day."
			});
		}
	}
	return s;
}
zr.join(","), ce.length;
const es = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds"
], ts = [
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
], ns = [
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
], as = {
	files: [
		...es,
		"ggirTimezone",
		"recording",
		"ggirClockSteps"
	],
	markers: ts,
	activityDays: ns,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: ["fileId", "imported"]
}, is = {
	files: [...es, "ggirClockSteps"],
	markers: ts,
	activityDays: ns,
	ggirResultsBundles: [
		"fileId",
		"recordingFile",
		"part1",
		"configCsv",
		"cleanedNightsCsv",
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
		"updatedAt"
	]
}, rs = {
	files: ["id"],
	localExecutions: ["fileId", "attestationId"],
	diaryEntries: [
		"fileId",
		"analysisDate",
		"importMappingProvenance"
	]
}, ss = {
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
}, os = {
	sleep: as,
	nonwear: as,
	summary: as,
	wide: as,
	circadian: {
		files: es,
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
	ggirReport: is,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: ts,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: es,
		markers: ts,
		actiwareFileData: [
			"fileId",
			"actiwareIntervals",
			"actiwareStatistics",
			"actiwareStatisticsNeedsRecompute"
		],
		actiwareStatisticsInputs: ["fileId", "input"]
	},
	actiwareSleepWake: {
		files: es,
		markers: ts,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: rs,
	audit: ss,
	ggirResults: {
		...rs,
		...as,
		...is,
		auditLog: ss.auditLog,
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
		studySettings: ["key", "extraSettings"]
	}
}, ls = /* @__PURE__ */ new WeakMap(), us = /* @__PURE__ */ new WeakMap();
function cs(e, t, n, a) {
	for (let i = 0; i < n.byteLength;) {
		const r = n.subarray(i, i + rr), s = e[t](r, { at: a + i });
		if (!Number.isInteger(s) || s <= 0 || s > r.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		i += s;
	}
}
function ds(e) {
	if (!e || "object" != typeof e) return e;
	const t = us.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return cs(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(ds) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, ds(t)])) : structuredClone(e);
}
function ms(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(ms), Object.freeze(e)), e;
}
var ps = class extends Error {};
function gs(e, t, n) {
	const a = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new ps(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (a(t), Reflect.get(e, t, n)),
		has: (e, t) => (a(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (a(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function hs(e, t) {
	const n = ls.get(e);
	if (!n) throw new ps("Export requires a captured input snapshot");
	const a = Object.entries(os).find(([, e]) => e === t)?.[0];
	if (!a) throw new ps("Export producer has no registered input declaration");
	const i = {};
	for (const [r, s] of Object.entries(t)) {
		const e = n[r].map((e) => {
			const t = e, n = {};
			for (const a of s.filter((e) => e in t)) Object.defineProperty(n, a, {
				enumerable: !0,
				get: () => ms(ds(t[a]))
			});
			return gs(n, s, `${a}: undeclared field ${r}.`);
		});
		Object.assign(i, { [r]: Object.freeze(e) });
	}
	return gs(i, Object.keys(t), `${a}: undeclared table `);
}
function fs(e, t, n) {
	const a = /* @__PURE__ */ new Map();
	for (const i of e.markers) {
		if (i.fileId !== t || i.username !== n) continue;
		const e = K(i), r = a.get(i.date) ?? [];
		r.push(e), a.set(i.date, r);
	}
	return a;
}
function _s(e, t, n) {
	return new Map([...fs(e, t, n)].flatMap(([e, t]) => {
		const n = ke(t.filter(f));
		return n ? [[e, n]] : [];
	}));
}
function ws(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
const ys = "not included", vs = "included if produced";
async function Ms(e, t) {
	return e.transaction("r", [
		e.files,
		e.markers,
		e.sensorNonwear,
		e.dailyGgirSummaries
	], async () => {
		const n = await Ee(e, t.length ? { onlyFileIds: t } : void 0), a = n.map((e) => e.id), [i, r, s] = await Promise.all([
			e.markers.where("fileId").anyOf(a).toArray(),
			e.sensorNonwear.where("fileId").anyOf(a).toArray(),
			e.dailyGgirSummaries.where("fileId").anyOf(a).toArray()
		]);
		return J({
			markers: i,
			sensorNonwear: r,
			dailyGgirSummaries: s,
			files: n.map(({ id: e, filename: t, participantId: n, epochLengthSeconds: a, sourceContentHash: i, fileHash: r, seriesRevision: s, exportInputRevision: o }) => ({
				id: e,
				filename: t,
				participantId: n,
				epochLengthSeconds: a,
				sourceContentHash: i,
				fileHash: r,
				seriesRevision: s,
				exportInputRevision: o
			}))
		});
	});
}
async function bs(e, t, n, a = {}) {
	const { signal: i, producers: o = {} } = a;
	i?.throwIfAborted();
	const l = await Ms(e, t.fileIds), d = await Ss(null, "checking the export inputs", () => async function(e, t = D(), n = {}) {
		const a = /* @__PURE__ */ new Map();
		for (const d of Object.values(os)) for (const [e, t] of Object.entries(d)) {
			const n = e;
			a.set(n, /* @__PURE__ */ new Set([...a.get(n) ?? [], ...t]));
		}
		let i = 268435456;
		const r = (e) => {
			if (e instanceof ArrayBuffer ? i -= e.byteLength : "string" == typeof e ? i -= 2 * e.length : e && "object" == typeof e ? Object.values(e).forEach(r) : i -= 8, i < 0) throw new Error("Export snapshot exceeds 256 MiB. Select fewer recordings or a narrower workspace before exporting.");
		};
		let s = 0;
		const o = (e) => {
			if (n.binaryStore && (e instanceof ArrayBuffer || ArrayBuffer.isView(e))) {
				const t = e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), a = Object.freeze({}), i = e instanceof ArrayBuffer ? null : e.constructor;
				return cs(n.binaryStore, "write", t, s), us.set(a, {
					at: s,
					length: t.byteLength,
					store: n.binaryStore,
					restore: i ? (e) => new i(e) : (e) => e
				}), s += t.byteLength, r(0), a;
			}
			return Array.isArray(e) ? e.map(o) : e && "object" == typeof e && Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, o(t)])) : (r(e), e);
		}, l = await t.transaction("r", [...a.keys()].map((e) => t[e]), async () => {
			const n = await Ee(t, e.length ? { onlyFileIds: e } : void 0), i = new Set(n.flatMap((e) => e.id ? [e.id] : [])), r = {};
			return await Promise.all([...a].map(async ([e, a]) => {
				const s = (e) => Object.fromEntries([...a].filter((t) => t in e).map((t) => [t, o(e[t])]));
				if (r[e] = [], "files" === e) return void (r[e] = n.map((e) => s(e)));
				const l = "diaryEntries" === e ? t.diaryEntries : ye(t, e);
				await ("studySettings" === e ? l.where("key").equals("study") : l.where("fileId").anyOf([...i])).each((t) => {
					r[e].push(s(t));
				});
			})), r;
		}), u = Object.freeze({ files: ms(l.files.map((e) => Object.fromEntries(es.map((t) => [t, ds(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) }), c = new Set(l.ggirResultsBundles.map((e) => e.fileId));
		return l.markers = l.markers.map((e) => c.has(e.fileId) && "invalid" === Ma(K(e)).kind ? {
			...e,
			isInvalidNight: !0
		} : e), ls.set(u, l), u;
	}(t.fileIds, e, a)), m = function(e, t, n, a) {
		const i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), s = {}, o = /* @__PURE__ */ new Map(), l = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), u = [];
		return {
			addFiles: async (s) => {
				const l = hs(n, os.ggirReport);
				for (const n of s) {
					const s = l.files.find((e) => e.id === n.id);
					if (!s) throw new Error("GGIR file is outside the export snapshot");
					if (a?.throwIfAborted(), !s.id) continue;
					const c = l.ggirResultsBundles.find((e) => e.fileId === s.id), d = fs(l, s.id, e), m = ws(l, s.id), p = new Map([...d].filter(([e]) => gi(e, t))), g = /* @__PURE__ */ new Map();
					for (const [e, t] of p) for (const n of t) {
						const t = li(n);
						let a = g.get(t);
						a || (a = /* @__PURE__ */ new Map(), g.set(t, a)), a.set(e, n);
					}
					const h = /* @__PURE__ */ new Set();
					for (const [e, t] of p) for (const n of t) f(n) && h.add(e);
					if (c) {
						const n = new Map([..._s(l, s.id, e)].filter(([e]) => h.has(e))), i = new Set([...n].filter(([, e]) => e.isInvalidNight).map(([e]) => e)), r = await Ta(c, n, s.ggirClockSteps, void 0, a);
						u.push({
							...r,
							...t ? { scoredDates: new Set(s.availableDates.filter((e) => gi(e, t))) } : {},
							invalidDates: i
						});
					}
					const _ = [...h].sort(), w = _[0], y = _[_.length - 1], v = [], M = [];
					for (const e of [...m.keys()].sort()) if (gi(e, t) && (null == w || null == y || e >= w && e <= y)) {
						const t = m.get(e), n = new Float64Array(t.timestamps), a = new Float64Array(t.axisY);
						for (let e = 0; e < n.length; e++) v.push(n[e]), M.push(a[e]);
					}
					const b = [];
					for (const [e, n] of g) {
						const o = oi(e).algoKey, l = c ? "" : await ii(s, n, m, {
							...o ? { algorithm: o } : {},
							...t ? { dateRange: t } : {},
							signal: a
						}), u = c ? [] : l.replace(/\n$/u, "").split("\n");
						let d = i.get(e);
						d || (d = [], i.set(e, d)), 0 === u.length || (r.has(e) ? d.push(...u.slice(1)) : (d.push(...u), r.add(e)));
						const p = [], g = [];
						for (const e of n.values()) {
							for (const t of e.sleepMarkers) null != t.onsetTimestamp && null != t.offsetTimestamp && p.push({
								o: t.onsetTimestamp,
								f: t.offsetTimestamp,
								t: t.markerType
							});
							for (const t of e.nonwearMarkers) null != t.startTimestamp && null != t.endTimestamp && g.push({
								s: t.startTimestamp,
								e: t.endTimestamp
							});
						}
						if (0 === p.length && 0 === g.length) continue;
						const { algoKey: h, ruleKey: f } = oi(e), _ = [h, f].filter(Boolean).join("_"), w = xe(m.values(), o || null);
						b.push([_, {
							p,
							n: g,
							..."stale" === w.status ? { stale: w.reason } : {}
						}]);
					}
					0 === g.size && b.push(["", {
						p: [],
						n: []
					}]), v.length > 0 && o.set(String(s.id), {
						pid: s.participantId ?? s.filename,
						ts: v,
						act: M,
						algos: b
					});
				}
			},
			entries: async () => {
				for (const [n, a] of ui([...i.keys()])) {
					const e = i.get(n);
					e.length > 0 && (s[a] = pi(`${e.join("\n")}\n`));
				}
				const e = await Za(u, "nights", a);
				e && (s["part4_nightsummary_ggir_review.csv"] = pi(e));
				const t = await Za(u, "days", a);
				return t && (s["part5_daysummary_ggir_review.csv"] = pi(t)), o.size > 0 && (s[si] = pi(mi(o, l))), s;
			}
		};
	}(t.username, t.dateRange, d, i), p = [];
	for (const r of d.files) {
		const e = p.at(-1);
		e?.[0]?.filename === r.filename ? e.push(r) : p.push([r]);
	}
	const g = [], h = [], _ = [];
	let w = !1;
	const y = t.manifest.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString();
	for (const [r, s] of p.entries()) {
		i?.throwIfAborted(), a.progress?.(r, p.length);
		const n = s.map((e) => e.id), o = /* @__PURE__ */ new Map();
		try {
			const e = await Et(d, {
				fileIds: n,
				dateRange: t.dateRange,
				signal: i
			});
			for (const t of e.daySummaries) o.set(`${t.fileId}|${t.date}`, {
				l5Hour: t.l5Hour,
				m10Hour: t.m10Hour
			});
		} catch (E) {
			if (E instanceof ps) throw E;
			if (i?.throwIfAborted(), w = !0, E instanceof DOMException && "AbortError" === E.name) throw E;
		}
		g.push(await Ss(s[0].filename, "computing its sleep rows", () => Ii(n, t.username, t.dateRange, o, t.studyId, d, i))), await Ss(s[0].filename, "drawing its visual report", () => m.addFiles(s)), h.push(...await Qr(n, t.dateRange, {
			username: t.username,
			cutpointOverrides: t.physicalActivity.cutpointOverrides,
			maskPolicy: t.physicalActivity.maskPolicy,
			choiAxis: t.physicalActivity.choiAxis,
			exportedAt: y,
			...i ? { signal: i } : {}
		}, e)), _.push(...await Xi(n, t.dateRange, d, t.username, i));
	}
	if (await Ms(e, t.fileIds) !== l) throw new ir(null, "computing physical activity, because its inputs changed during the export");
	i?.throwIfAborted();
	const v = function(e) {
		return {
			sleepRows: e.flatMap((e) => e.sleepRows),
			nonwearRows: e.flatMap((e) => e.nonwearRows),
			summaryRows: e.flatMap((e) => e.summaryRows),
			degradations: e.flatMap((e) => e.degradations).slice(0, 1)
		};
	}(g), M = await async function(e, t, n, a, i) {
		i?.throwIfAborted();
		const r = hs(n, os.actiwareInterval), s = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => r.actiwareFileData.find((t) => t.fileId === e.id));
		return (await Promise.all(s.map(async (e, n) => {
			i?.throwIfAborted();
			const s = _s(r, e.id, a), l = r.actiwareStatisticsInputs.find((t) => t.fileId === e.id), u = new Set(s.keys()), { actiwareStatisticsForScoredMarker: c } = await import("./local-data-source-CTe7it3z.js").then((e) => e.t);
			i?.throwIfAborted();
			const d = await c(o[n] ?? {}, l?.input, s, (e) => H(i).actiwareIntervalStatistics(e), i);
			i?.throwIfAborted();
			const m = await async function(e, t, n) {
				const a = (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), i = e.actiwareStatistics ?? [], r = await Bn([...a.map((e) => e.startTimestamp), ...i.map((e) => e.startTimestamp)], H(n)), s = /* @__PURE__ */ new Set(), o = a.map((t) => {
					const n = i.findIndex((e, n) => !s.has(n) && e.kind === t.kind && tr(e.startTimestamp, t.startTimestamp) && tr(e.endTimestamp, t.endTimestamp)), a = r(t.startTimestamp), o = n >= 0 ? i[n] ?? null : null;
					return n >= 0 && s.add(n), {
						filename: e.filename,
						participantId: e.participantId ?? null,
						studyDate: a,
						interval: t,
						statistics: o
					};
				}).filter((e) => !t || e.studyDate >= t[0] && e.studyDate <= t[1]);
				for (let l = 0; l < i.length; l += 1) {
					if (s.has(l)) continue;
					const n = i[l];
					if (!n) continue;
					const a = r(n.startTimestamp);
					t && (a < t[0] || a > t[1]) || o.push({
						filename: e.filename,
						participantId: e.participantId ?? null,
						studyDate: a,
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
			}, t, i), p = new Set([...s].filter(([, e]) => e.isInvalidNight).map(([e]) => e).filter((e) => !t || e >= t[0] && e <= t[1]));
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
	}(t.fileIds, t.dateRange, d, t.username, i), b = await Ss(null, "writing the visual report", () => m.entries()), S = function(e) {
		const t = hs(e, os.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(d);
	if (S && (b["audit_log.jsonl"] = S), o.ggirResults) {
		const e = await o.ggirResults(hs(d, os.ggirResults), i);
		for (const [t, n] of Object.entries(e)) {
			if (t in b) throw new Error(`${or}${t}`);
			b[t] = n;
		}
	}
	const k = hs(d, os.actiwareSleepWake);
	let I = 0;
	for (const r of k.files) {
		const e = k.actiwareFileData.find((e) => e.fileId === r.id)?.actiwareSleepWake;
		e && (I += await dr(e, t.dateRange, new Set(_s(k, r.id, t.username).keys()), H(i)));
	}
	const A = hs(d, os.manifest), T = Object.fromEntries(v.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	w ||= v.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const R = [...w ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...v.degradations], N = await async function(e) {
		if (!navigator.storage?.getDirectory) throw new Error("Streaming export requires temporary workspace storage (OPFS).");
		const t = await (await (await navigator.storage.getDirectory()).getDirectoryHandle(ar, { create: !0 })).getDirectoryHandle(e.scratchId, { create: !0 }), n = await t.getFileHandle(Ua, { create: !0 }), a = await t.getFileHandle("bundle.zip", { create: !0 }), i = new CompressionStream("gzip"), o = i.readable.pipeTo(await n.createWritable());
		o.catch(() => {});
		const l = i.writable.getWriter(), d = await a.createWritable();
		let m = [], p = 0, g = 0;
		const h = [], f = new At((e, t) => {
			if (e) throw e;
			m.push(t);
		}), _ = async (e = 0) => {
			p = Math.max(p, e + m.reduce((e, t) => e + t.byteLength, 0));
			for (const t of m) await d.write(t);
			m = [];
		}, w = /* @__PURE__ */ new Set(), y = async (t, n) => {
			if (w.has(t)) throw new Error(`${or}${t}`);
			w.add(t);
			const a = new It(t, { level: 1 }), i = new P();
			let r = 0;
			f.add(a);
			for await (const s of n) for (let t = 0; t < s.byteLength; t += gr) {
				e.signal?.throwIfAborted();
				const n = s.subarray(t, t + gr);
				i.update(n), a.push(n, !1), r += n.byteLength, await _(s.byteLength);
			}
			a.push(/* @__PURE__ */ new Uint8Array(), !0), await _(), h.push({
				name: t,
				contentHash: B(i.finalize()),
				byteLength: r
			});
		};
		try {
			await l.write(new TextEncoder().encode(Va([])));
			const t = function(e) {
				const t = e.artifacts ?? null, n = t ? null : e.planned ?? null, a = e.columns, i = t ? t.sleepRows.length : n?.sleepRows ?? null, o = t ? t.sleepRows.filter((e) => e.markerType === s.MAIN_SLEEP).length : n?.mainSleepRows ?? null, l = t ? Fi(t.sleepRows).size : n?.wideRows ?? null, u = t ? t.summaryRows.length : n?.summaryRows ?? null, d = t ? t.nonwearRows.length : n?.nonwearRows ?? null, m = t ? t.physicalActivityRows.length : n?.activityRows ?? null, p = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : n?.activityDates ?? null, g = t ? t.eventMarkerRows?.length ?? 0 : n?.eventMarkerRows ?? null, h = t ? t.actiwareIntervalRows?.length ?? 0 : n?.actiwareIntervalRows ?? null, f = t ? t.actiwareSleepWakeCsv?.rows ?? 0 : n?.actiwareSleepWakeRows ?? null, _ = n?.actogramFiles ?? null, w = t ? Object.keys(t.ggirEntries) : null, y = (w ? w.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
					const n = Math.max(0, c(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
					return {
						name: e,
						include: n > 0,
						rows: n
					};
				}) : n ? [...ui([...n.ggirGroupKeys])].map(([e, t]) => ({
					name: t,
					include: n.ggirMainSleepGroupKeys.includes(e),
					rows: n.part4Rows.get(e) ?? null
				})) : []).sort((e, t) => e.name.localeCompare(t.name)), v = w ? w.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [si], M = (e) => null == e ? null : e > 0, b = (n, i, r) => {
					const s = null == i ? "unknown" : i ? "included" : "not_included";
					return "included" !== s ? {
						name: n,
						state: s,
						rows: null,
						detail: "unknown" === s ? r.detail : ys,
						estimatedBytes: 0,
						write: null
					} : {
						name: n,
						state: s,
						rows: r.rows,
						detail: r.detail,
						estimatedBytes: r.estimatedBytes ?? ((r.rows ?? 0) + 1) * (r.columns ?? a) * 12,
						write: t ? () => r.encode(t) : null,
						...t && (r.chunkField || r.wide) ? { batches: function* () {
							if (r.wide) {
								const e = Wi(t.sleepRows, !0), n = e.next().value;
								for (const t of e) yield {
									bytes: pi(n + "\n" + t),
									rows: 1
								};
							} else if (r.chunkField) {
								const n = t[r.chunkField] ?? [];
								for (let a = 0; a < n.length; a += 256) {
									const i = {
										...t,
										[r.chunkField]: n.slice(a, a + 256)
									}, s = !e.selectedColumns?.length || "sleepRows" !== r.chunkField && "nonwearRows" !== r.chunkField ? void 0 : Ui(i[r.chunkField], void 0, !0);
									yield {
										bytes: r.encode(i),
										rows: Math.min(256, n.length - a),
										...s ? { fullRowCsv: s } : {}
									};
								}
							}
						} } : {}
					};
				};
				return [
					b("sleep_export.csv", M(i), {
						rows: i,
						detail: null == i ? vs : `${String(i)} rows · ${String(a)} columns`,
						chunkField: "sleepRows",
						encode: (t) => pi(Ui(t.sleepRows, e.selectedColumns ?? void 0, !0))
					}),
					b("sleep_export_wide.csv", !!e.includeWideFormat && M(l ?? o), {
						rows: l,
						detail: null == l ? vs : `${String(l)} participant group ${1 === l ? "row" : "rows"}`,
						wide: !0,
						encode: (e) => pi(function(e, t = !1) {
							return [...Wi(e, t)].join("\n");
						}(e.sleepRows, !0))
					}),
					b("summary_export.csv", M(u ?? o), {
						rows: u,
						detail: null == u ? vs : `${String(u)} participant ${1 === u ? "row" : "rows"}`,
						chunkField: "summaryRows",
						encode: (e) => pi(function(e, t = !1) {
							const n = zi("summary_csv", e, Ei, void 0, t), a = [
								"summary_mean_temperature_c",
								"sleep_regularity_index",
								...Object.values(Ni).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
							];
							return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? c(n).records.map((t, n) => 0 === n ? t.text + "," + a.map((e) => x[e].header + "_missing_reason").join(",") : t.text + "," + a.map((t) => {
								const a = e[n - 1];
								return "summary_mean_temperature_c" === t ? null == a.meanTemperature ? a.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? a.sleepRegularityMissingReason ?? "" : a.metricMissingReasons?.[t] ?? "";
							}).join(",")).join("\n") : n;
						}(e.summaryRows, !0))
					}),
					b("nonwear_export.csv", M(d), {
						rows: d,
						detail: null == d ? vs : `${String(d)} periods`,
						chunkField: "nonwearRows",
						encode: (t) => pi(Ui(t.nonwearRows, e.selectedColumns ?? void 0, !0))
					}),
					b("event_markers_export.csv", M(g), {
						rows: g,
						detail: null == g ? vs : `${String(g)} button ${1 === g ? "press" : "presses"}`,
						columns: Vi.length,
						chunkField: "eventMarkerRows",
						encode: (e) => pi(function(e, t = !1) {
							const n = [[...Vi, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
							for (const a of e) n.push([
								a.filename,
								a.participantId ?? "",
								a.studyDate,
								Ji(a.localTimestamp),
								null == a.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (a.localTimestamp - 60 * a.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
								...t ? [a.participantId ? "" : "source_reported_missing", null == a.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
							].map((e) => r(e)).join(","));
							return `${n.join("\n")}\n`;
						}(e.eventMarkerRows ?? [], !0))
					}),
					b("actiware_intervals_export.csv", M(h), {
						rows: h,
						detail: null == h ? vs : `${String(h)} Actiware intervals`,
						columns: er.length,
						chunkField: "actiwareIntervalRows",
						encode: (e) => pi(nr(e.actiwareIntervalRows ?? [], !0))
					}),
					b(lr, M(f), {
						rows: f,
						detail: null == f ? vs : `${String(f)} Actiware Sleep/Wake epochs`,
						columns: ur.length,
						encode: (e) => e.actiwareSleepWakeCsv.bytes
					}),
					b("physical_activity_export.csv", M(m), {
						rows: m,
						detail: null == m || null == p ? vs : `${String(m)} rows · ${String(p)} distinct dates`,
						chunkField: "physicalActivityRows",
						encode: (e) => pi(function(e, t, n, a = !1) {
							const i = /* @__PURE__ */ new Set();
							t.includes("sedentary") || (i.add("Sedentary Minutes"), i.add("Sedentary Bouts"), i.add("Sedentary Breaks"), i.add("Mean Sedentary Bout Minutes")), t.includes("light") || i.add("Light Minutes"), t.includes("moderate") || i.add("Moderate Minutes"), t.includes("vigorous") || i.add("Vigorous Minutes"), t.includes("moderate") && t.includes("vigorous") || (i.add("MVPA Minutes"), i.add("MVPA Bouts"), i.add("MVPA Bout Minutes")), n && t.includes("nonwear") || i.add("Excluded Nonwear Minutes");
							const r = /* @__PURE__ */ new Set([
								"Excluded Main Sleep Minutes",
								"Excluded Nap Minutes",
								"MVPA Bouts",
								"MVPA Bout Minutes",
								"Sedentary Bouts",
								"Sedentary Breaks",
								"Mean Sedentary Bout Minutes"
							]), s = e.some((e) => "ggir_enmo" === e.method) ? zr.filter((e) => !i.has(e) && (Fa.has(e) || r.has(e))) : [], o = [
								"Participant ID",
								"Threshold Preset Name",
								"Inclusion Rule Preset Name",
								"Scored Username",
								"Source Content Hash",
								"Validation Notes",
								"Notes"
							], l = [[
								...zr.filter((e) => !i.has(e)),
								...s.map((e) => `${e}_missing_reason`),
								...a ? [
									"Epoch Length Seconds",
									"Native Epoch Seconds",
									"Mask Overlap Epochs"
								].map((e) => e + "_missing_reason") : [],
								...o.map((e) => e + "_missing_reason")
							].join(",")];
							for (const u of e) {
								const e = Kr(u), t = null == u.sedentaryMinutes || !n && null == u.excludedNonwearMinutes ? null : u.sedentaryMinutes + (n ? 0 : u.excludedNonwearMinutes), c = [
									Vr(u.filename),
									Vr(u.participantId),
									Vr(u.analysisDate),
									Vr(u.method),
									Vr(u.methodLabel),
									Vr(u.methodFamily),
									Vr(u.requiredSignalContract),
									Vr(u.computationOwner),
									String(u.frontendComputesMetric),
									Vr(u.sourceSignal),
									Vr(u.status),
									Vr(u.methodRule),
									Vr(u.thresholdSource),
									Vr(u.thresholdPresetName),
									qr(u.sedentaryMax),
									qr(u.lightMin),
									qr(u.moderateMin),
									qr(u.vigorousMin),
									qr(t),
									qr(u.lightMinutes),
									qr(u.moderateMinutes),
									qr(u.vigorousMinutes),
									qr(u.mvpaMinutes),
									qr(u.mimsUnitTotal),
									null == u.epochLengthSeconds ? "" : String(u.epochLengthSeconds),
									String(u.epochsReviewed),
									qr(u.wakeWearMinutes),
									qr(u.excludedNonwearMinutes),
									qr(u.excludedMainSleepMinutes),
									qr(u.excludedNapMinutes),
									null == u.maskOverlapEpochs ? "" : String(u.maskOverlapEpochs),
									null == u.mvpaBouts ? "" : String(u.mvpaBouts),
									qr(u.mvpaBoutMinutes),
									null == u.sedentaryBouts ? "" : String(u.sedentaryBouts),
									null == u.sedentaryBreaks ? "" : String(u.sedentaryBreaks),
									qr(u.meanSedentaryBoutMinutes),
									null == u.nativeEpochSeconds ? "" : String(u.nativeEpochSeconds),
									String(u.epochMismatch),
									Vr(u.inclusionRulePresetName),
									String(u.maskExcludeNonwear),
									String(u.maskExcludeMainSleep),
									String(u.maskExcludeNaps),
									String(u.maskUseManualNonwear),
									String(u.maskUseAlgorithmNonwear),
									Vr(u.maskNonwearDetector),
									qr(u.maskMinimumWakeWearMinutes),
									Vr(u.scoredUsername),
									Vr(u.sourceContentHash),
									Vr(u.exportedAt),
									Vr(e.status),
									Vr(e.notes),
									Vr(u.notes)
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
									const t = c[zr.indexOf(e)];
									if ("ggir_enmo" !== u.method || "" !== t) return "";
									if (Fa.has(e)) {
										const t = d[e];
										return null != t && Number.isFinite(t) ? "" : "source_reported_missing";
									}
									return r.has(e) && null == m[e] ? "not_computed_for_export" : "";
								}), g = a ? [
									["Epoch Length Seconds", null == u.epochLengthSeconds && "ggir_enmo" === u.method ? "not_applicable_to_row" : ""],
									["Native Epoch Seconds", null == u.nativeEpochSeconds ? "not_applicable" === u.thresholdSource ? "not_applicable_to_row" : "source_reported_missing" : ""],
									["Mask Overlap Epochs", null == u.maskOverlapEpochs ? "ggir_enmo" === u.method ? "not_applicable_to_row" : "needs_signal" === u.status ? "channel_unavailable" : "backend_required" === u.status ? "not_computed_for_export" : "" : ""]
								].map(([e, t]) => "" === c[zr.indexOf(e)] ? t : "") : [];
								l.push([
									...c.filter((e, t) => !i.has(zr[t])),
									...p,
									...g,
									...o.map((e) => "" !== c[zr.indexOf(e)] ? "" : [
										"Participant ID",
										"Scored Username",
										"Source Content Hash"
									].includes(e) ? "source_reported_missing" : "not_applicable_to_row")
								].join(","));
							}
							return `${l.join("\n")}\n`;
						}(e.physicalActivityRows, e.physicalActivityEnabledClasses, e.physicalActivityNonwearAsClass, !0))
					}),
					...y.map(({ name: e, include: t, rows: n }) => b(e, t, {
						rows: n,
						detail: null == n ? vs : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
						columns: 40,
						encode: (t) => t.ggirEntries[e]
					})),
					...v.map((e) => b(e, !!w || (null == _ ? null : _ > 0), {
						rows: null,
						detail: e.endsWith(".html") ? null == _ ? w ? "1 report" : vs : `1 report · ${String(_)} ${1 === _ ? "file" : "files"}` : "1 GGIR report artifact",
						encode: (t) => t.ggirEntries[e]
					})),
					{
						name: Ua,
						state: "included",
						rows: null,
						detail: "1 reason per missing cell",
						estimatedBytes: 2048 + (t?.actiwareSleepWakeCsv?.reasonChunks.reduce((e, t) => e + t.byteLength, 0) ?? n?.actiwareMissingReasonBytes ?? 0),
						write: null
					},
					b("codebook.csv", !0, {
						rows: $i.length,
						detail: `${String($i.length)} definitions`,
						estimatedBytes: new TextEncoder().encode(Li()).length,
						encode: () => pi(Li(void 0, !0))
					}),
					{
						name: sr,
						state: "included",
						rows: null,
						detail: "1 manifest · run, settings, entry hashes",
						estimatedBytes: 2048,
						write: null
					}
				];
			}({
				columns: e.options.selectedColumns?.length ?? 0,
				...e.options,
				artifacts: e.artifacts
			});
			for (const n of t) if (n.write) try {
				"actiware_sleep_wake_export.csv" === n.name ? await y(n.name, async function* () {
					for await (const t of e.sleepWake) e.signal?.throwIfAborted(), g += t.reasonRows, p = Math.max(p, t.bytes.byteLength + t.reasons.byteLength), await l.write(t.reasons), yield t.bytes;
				}()) : n.name.endsWith(".csv") ? await y(n.name, async function* () {
					let t = 0, a = !1, i = !1;
					const r = "actiware_intervals_export.csv" === n.name ? function* () {
						for (const t of e.artifacts.actiwareIntervalRows ?? []) {
							const [e, n] = c(nr([t], !0)).records, a = u(n.text);
							yield new Map(u(e.text).map((e, t) => [e, a[t] ?? ""]));
						}
					} : void 0;
					for (const e of n.batches?.() ?? hr(n.write())) {
						if (e.bytes.byteLength > 4 * gr) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
						const s = Ya(new TextDecoder().decode(e.bytes), n.name, !0, {
							fullRowCsv: e.fullRowCsv,
							rowOffset: t,
							...r ? { contextRows: r } : {}
						});
						let o, u = "";
						for (;;) {
							const t = s.next();
							if (t.done) {
								o = t.value;
								break;
							}
							if (u += Va([t.value], !1), g += 1, u.length >= gr / 2) {
								const t = new TextEncoder().encode(u);
								p = Math.max(p, e.bytes.byteLength + t.byteLength), await l.write(t), u = "";
							}
						}
						await l.write(new TextEncoder().encode(u));
						const c = a ? (i ? "" : "\n") + o.csv.slice(o.csv.indexOf("\n") + 1) : o.csv;
						a = !0, t += e.rows ?? 0, i = c.endsWith("\n");
						const d = new TextEncoder().encode(c);
						p = Math.max(p, e.bytes.byteLength + d.byteLength + 2 * u.length), yield d;
					}
				}()) : await y(n.name, [n.write()]);
			} catch (v) {
				throw new Error(`Export failed while writing ${n.name}`, { cause: v });
			}
			await l.close(), await o, await y(Ua, async function* () {
				const e = (await n.getFile()).stream().pipeThrough(new DecompressionStream("gzip")).getReader();
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
			const i = await async function(e) {
				const t = Object.entries(e.entries).sort(([e], [t]) => e.localeCompare(t)), n = Array.isArray(e.entries) ? [...e.entries].sort((e, t) => e.name.localeCompare(t.name)) : await Promise.all(t.map(async ([e, t]) => ({
					name: e,
					contentHash: await Ci(t),
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
					executionAttestationIds: [...e.executionAttestationIds ?? []].sort(),
					degradations: [...e.degradations ?? []],
					files: n
				};
			}({
				...e.manifest,
				entries: h
			});
			return await y(sr, [new TextEncoder().encode(Oi(i))]), f.end(), await _(), e.signal?.throwIfAborted(), await d.close(), {
				blob: await new Response((await a.getFile()).stream()).blob(),
				entries: h,
				peakBufferedBytes: p,
				reasonRows: g
			};
		} catch (E) {
			throw f.terminate(), await Promise.allSettled([
				l.abort(),
				d.abort(),
				o
			]), E;
		}
	}({
		artifacts: {
			...v,
			physicalActivityRows: h,
			physicalActivityEnabledClasses: t.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: t.physicalActivity.nonwearAsClass,
			ggirEntries: b,
			eventMarkerRows: _,
			actiwareIntervalRows: M,
			actiwareSleepWakeCsv: {
				rows: I,
				bytes: /* @__PURE__ */ new Uint8Array(),
				reasonChunks: []
			}
		},
		options: t,
		manifest: {
			...t.manifest,
			physicalActivity: t.physicalActivity,
			exportedAt: y,
			algorithmVersions: T,
			degradations: R,
			executionAttestationIds: A.localExecutions.map((e) => e.attestationId),
			diaryTemporalPolicyByFile: Object.fromEntries(A.files.map((e) => [String(e.id), Object.fromEntries(A.diaryEntries.filter((t) => t.fileId === e.id).map((e) => [e.analysisDate, e.importMappingProvenance?.diaryTemporalPolicy ?? null]))]))
		},
		sleepWake: mr(t.fileIds, t.dateRange, d, t.username, i),
		scratchId: n,
		...i ? { signal: i } : {}
	});
	return a.progress?.(p.length, p.length), {
		...N,
		actiwareSleepWakeRows: I,
		degradations: R,
		hasData: v.sleepRows.length > 0 || v.nonwearRows.length > 0 || h.length > 0 || Object.keys(b).length > 0,
		rowCount: v.sleepRows.length + v.nonwearRows.length + v.summaryRows.length + h.length,
		dayCount: (/* @__PURE__ */ new Set([
			...v.sleepRows.map((e) => e.studyDate),
			...v.nonwearRows.map((e) => e.studyDate),
			...h.map((e) => e.analysisDate)
		])).size,
		fileCount: d.files.length
	};
}
async function Ss(e, t, n) {
	try {
		return await n();
	} catch (a) {
		if (a instanceof DOMException && "AbortError" === a.name) throw a;
		throw new ir(e, t, a);
	}
}
t({ async build(e, t, n, a) {
	const i = new g(e);
	let r;
	try {
		return r = await (await (await (await (await navigator.storage.getDirectory()).getDirectoryHandle(ar, { create: !0 })).getDirectoryHandle(n, { create: !0 })).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await i.open(), await bs(i, t, n, {
			...a ? { progress: a } : {},
			binaryStore: r
		});
	} catch (s) {
		if (s instanceof ir) return { failure: {
			file: s.file,
			step: s.step
		} };
		throw s;
	} finally {
		r?.close(), i.close();
	}
} });
export { rn as A, jt as B, pn as C, on as D, wn as E, en as F, Dt as H, Kt as I, Pt as L, Qt as M, an as N, yn as O, Yt as P, Ft as R, hn as S, cn as T, Rt as U, Ut as V, Nt as W, Dn as _, Tr as a, Rn as b, Mr as c, wr as d, fr as f, Wn as g, xa as h, Ar as i, nn as j, _n as k, br as l, ga as m, Nr as n, Ir as o, vr as p, $r as r, Sr as s, Hr as t, kr as u, Ln as v, gn as w, In as x, Bn as y, Bt as z };
