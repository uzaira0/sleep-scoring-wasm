import { n as e, r as t, s as n, t as i } from "./ggir-results-types-WB8axvb-.js";
import { c as a, d as r, i as s, u as o } from "./workers-1tjevR35.js";
import { Dt as l, It as u, Lt as c, Rt as d, a as m, h as p, l as g, o as h, qt as f, s as _, vt as w, yn as y, zt as v } from "./schema-CubsPrjz.js";
import { A as M, F as b, I as k, L as x, M as S, N as I, P as A, b as R, j as T, k as N, m as E } from "./nonwear-display-slots-Ci-dNMvx.js";
import { B as $, T as O, d as C } from "./platform-ClAsKoQQ.js";
import { l as L, n as B, o as D, s as P } from "./content-hash-BtD8CeUH.js";
import { a as j, n as F, t as W } from "./background-jobs-gFrAYxTf.js";
import { _ as U, g as z, m as G, t as V, v as H } from "./workspace-db-BRMmWdCa.js";
import { a as q } from "./project-revision-BvAwTwFG.js";
import { A as K, B as Y, C as J, I as Z, K as Q, M as X, N as ee, P as te, S as ne, Ut as ie, W as ae, Wt as re, Xt as se, Yt as oe, b as le, nn as ue, zt as ce } from "./store-esIhChio.js";
import { B as de, j as me, m as pe, u as ge } from "./night-session-registry-CySK1p-U.js";
import { d as he, l as fe, p as _e } from "./sleep-period-detection-BiQXNMp7.js";
import { t as we } from "./audit-hash-rfcCP1yx.js";
import { c as ye, d as ve, h as Me, n as be, r as ke, s as xe, u as Se } from "./ggir-results-import-Dv98cmyT.js";
import { E as Ie, N as Ae, T as Re, c as Te } from "./local-nonwear-unified-2O-d7P9f.js";
import { S as Ne, _ as Ee, b as $e, g as Oe, n as Ce, t as Le, v as Be, x as De, y as Pe } from "./valid-day-criteria-BgtgT6oq.js";
import { h as je, m as Fe, v as We } from "./diary-local-import-contract-CtsxFTLX.js";
var Ue = Uint8Array, ze = Uint16Array, Ge = Int32Array, Ve = new Ue([
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
]), He = new Ue([
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
]), qe = new Ue([
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
]), Ke = function(e, t) {
	for (var n = new ze(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
	var a = new Ge(n[30]);
	for (i = 1; i < 30; ++i) for (var r = n[i]; r < n[i + 1]; ++r) a[r] = r - n[i] << 5 | i;
	return {
		b: n,
		r: a
	};
}, Ye = Ke(Ve, 2), Je = Ye.b, Ze = Ye.r;
Je[28] = 258, Ze[258] = 28;
for (var Qe = Ke(He, 0), Xe = (Qe.b, Qe.r), et = new ze(32768), tt = 0; tt < 32768; ++tt) {
	var nt = (43690 & tt) >> 1 | (21845 & tt) << 1;
	nt = (61680 & (nt = (52428 & nt) >> 2 | (13107 & nt) << 2)) >> 4 | (3855 & nt) << 4, et[tt] = ((65280 & nt) >> 8 | (255 & nt) << 8) >> 1;
}
var it = function(e, t, n) {
	for (var i = e.length, a = 0, r = new ze(t); a < i; ++a) e[a] && ++r[e[a] - 1];
	var s, o = new ze(t);
	for (a = 1; a < t; ++a) o[a] = o[a - 1] + r[a - 1] << 1;
	if (n) {
		s = new ze(1 << t);
		var l = 15 - t;
		for (a = 0; a < i; ++a) if (e[a]) for (var u = a << 4 | e[a], c = t - e[a], d = o[e[a] - 1]++ << c, m = d | (1 << c) - 1; d <= m; ++d) s[et[d] >> l] = u;
	} else for (s = new ze(i), a = 0; a < i; ++a) e[a] && (s[a] = et[o[e[a] - 1]++] >> 15 - e[a]);
	return s;
}, at = new Ue(288);
for (tt = 0; tt < 144; ++tt) at[tt] = 8;
for (tt = 144; tt < 256; ++tt) at[tt] = 9;
for (tt = 256; tt < 280; ++tt) at[tt] = 7;
for (tt = 280; tt < 288; ++tt) at[tt] = 8;
var rt = new Ue(32);
for (tt = 0; tt < 32; ++tt) rt[tt] = 5;
var st = it(at, 9, 0), ot = it(rt, 5, 0), lt = function(e) {
	return (e + 7) / 8 | 0;
}, ut = function(e, t, n) {
	return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new Ue(e.subarray(t, n));
}, ct = [
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
], dt = function(e, t, n) {
	var i = new Error(t || ct[e]);
	if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, dt), !n) throw i;
	return i;
}, mt = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8;
}, pt = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, gt = function(e, t) {
	for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
		s: i,
		f: e[i]
	});
	var a = n.length, r = n.slice();
	if (!a) return {
		t: Mt,
		l: 0
	};
	if (1 == a) {
		var s = new Ue(n[0].s + 1);
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
	var p = new ze(m + 1), g = ht(n[c - 1], p, 0);
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
		t: new Ue(p),
		l: g
	};
}, ht = function(e, t, n) {
	return -1 == e.s ? Math.max(ht(e.l, t, n + 1), ht(e.r, t, n + 1)) : t[e.s] = n;
}, ft = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new ze(++t), i = 0, a = e[0], r = 1, s = function(e) {
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
}, _t = function(e, t) {
	for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
	return n;
}, wt = function(e, t, n) {
	var i = n.length, a = lt(t + 2);
	e[a] = 255 & i, e[a + 1] = i >> 8, e[a + 2] = 255 ^ e[a], e[a + 3] = 255 ^ e[a + 1];
	for (var r = 0; r < i; ++r) e[a + r + 4] = n[r];
	return 8 * (a + 4 + i);
}, yt = function(e, t, n, i, a, r, s, o, l, u, c) {
	mt(t, c++, n), ++a[256];
	for (var d = gt(a, 15), m = d.t, p = d.l, g = gt(r, 15), h = g.t, f = g.l, _ = ft(m), w = _.c, y = _.n, v = ft(h), M = v.c, b = v.n, k = new ze(19), x = 0; x < w.length; ++x) ++k[31 & w[x]];
	for (x = 0; x < M.length; ++x) ++k[31 & M[x]];
	for (var S = gt(k, 7), I = S.t, A = S.l, R = 19; R > 4 && !I[qe[R - 1]]; --R);
	var T, N, E, $, O = u + 5 << 3, C = _t(a, at) + _t(r, rt) + s, L = _t(a, m) + _t(r, h) + s + 14 + 3 * R + _t(k, I) + 2 * k[16] + 3 * k[17] + 7 * k[18];
	if (l >= 0 && O <= C && O <= L) return wt(t, c, e.subarray(l, l + u));
	if (mt(t, c, 1 + (L < C)), c += 2, L < C) {
		T = it(m, p, 0), N = m, E = it(h, f, 0), $ = h;
		var B = it(I, A, 0);
		for (mt(t, c, y - 257), mt(t, c + 5, b - 1), mt(t, c + 10, R - 4), c += 14, x = 0; x < R; ++x) mt(t, c + 3 * x, I[qe[x]]);
		c += 3 * R;
		for (var D = [w, M], P = 0; P < 2; ++P) {
			var j = D[P];
			for (x = 0; x < j.length; ++x) {
				var F = 31 & j[x];
				mt(t, c, B[F]), c += I[F], F > 15 && (mt(t, c, j[x] >> 5 & 127), c += j[x] >> 12);
			}
		}
	} else T = st, N = at, E = ot, $ = rt;
	for (x = 0; x < o; ++x) {
		var W = i[x];
		if (W > 255) {
			pt(t, c, T[257 + (F = W >> 18 & 31)]), c += N[F + 257], F > 7 && (mt(t, c, W >> 23 & 31), c += Ve[F]);
			var U = 31 & W;
			pt(t, c, E[U]), c += $[U], U > 3 && (pt(t, c, W >> 5 & 8191), c += He[U]);
		} else pt(t, c, T[W]), c += N[W];
	}
	return pt(t, c, T[256]), c + N[256];
}, vt = new Ge([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), Mt = new Ue(0), bt = function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, i = 9; --i;) n = (1 & n && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), kt = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
}, xt = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new Ue(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, i, a) {
			if (!a && (a = { l: 1 }, t.dictionary)) {
				var r = t.dictionary.subarray(-32768), s = new Ue(r.length + e.length);
				s.set(r), s.set(e, r.length), e = s, a.w = r.length;
			}
			return function(e, t, n, i, a, r) {
				var s = r.z || e.length, o = new Ue(i + s + 5 * (1 + Math.ceil(s / 7e3)) + a), l = o.subarray(i, o.length - a), u = r.l, c = 7 & (r.r || 0);
				if (t) {
					c && (l[0] = r.r >> 3);
					for (var d = vt[t - 1], m = d >> 13, p = 8191 & d, g = (1 << n) - 1, h = r.p || new ze(32768), f = r.h || new ze(g + 1), _ = Math.ceil(n / 3), w = 2 * _, y = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, v = new Ge(25e3), M = new ze(288), b = new ze(32), k = 0, x = 0, S = r.i || 0, I = 0, A = r.w || 0, R = 0; S + 2 < s; ++S) {
						var T = y(S), N = 32767 & S, E = f[T];
						if (h[N] = E, f[T] = N, A <= S) {
							var $ = s - S;
							if ((k > 7e3 || I > 24576) && ($ > 423 || !u)) {
								c = yt(e, l, 0, v, M, b, x, I, R, S - R, c), I = k = x = 0, R = S;
								for (var O = 0; O < 286; ++O) M[O] = 0;
								for (O = 0; O < 30; ++O) b[O] = 0;
							}
							var C = 2, L = 0, B = p, D = N - E & 32767;
							if ($ > 2 && T == y(S - D)) for (var P = Math.min(m, $) - 1, j = Math.min(32767, S), F = Math.min(258, $); D <= j && --B && N != E;) {
								if (e[S + C] == e[S + C - D]) {
									for (var W = 0; W < F && e[S + W] == e[S + W - D]; ++W);
									if (W > C) {
										if (C = W, L = D, W > P) break;
										var U = Math.min(D, W - 2), z = 0;
										for (O = 0; O < U; ++O) {
											var G = S - D + O & 32767, V = G - h[G] & 32767;
											V > z && (z = V, E = G);
										}
									}
								}
								D += (N = E) - (E = h[N]) & 32767;
							}
							if (L) {
								v[I++] = 268435456 | Ze[C] << 18 | Xe[L];
								var H = 31 & Ze[C], q = 31 & Xe[L];
								x += Ve[H] + He[q], ++M[257 + H], ++b[q], A = S + C, ++k;
							} else v[I++] = e[S], ++M[e[S]];
						}
					}
					for (S = Math.max(S, A); S < s; ++S) v[I++] = e[S], ++M[e[S]];
					c = yt(e, l, u, v, M, b, x, I, R, S - R, c), u || (r.r = 7 & c | l[c / 8 | 0] << 3, c -= 7, r.h = f, r.p = h, r.i = S, r.w = A);
				} else {
					for (S = r.w || 0; S < s + u; S += 65535) {
						var K = S + 65535;
						K >= s && (l[c / 8 | 0] = u, K = s), c = wt(l, c + 1, e.subarray(S, K));
					}
					r.i = s;
				}
				return ut(o, 0, i + lt(c) + a);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? a.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, n, i, a);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || dt(5), this.s.l && dt(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var i = new Ue(-32768 & n);
				i.set(this.b.subarray(0, this.s.z)), this.b = i;
			}
			var a = this.b.length - this.s.z;
			this.b.set(e.subarray(0, a), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(a), 32768), this.s.z = e.length - a + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = Mt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || dt(5), this.s.l && dt(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new Ue(6);
			t[0] = this.s.r >> 3;
			var n = wt(t, this.s.r, Mt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), St = "undefined" != typeof TextEncoder && new TextEncoder(), It = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	It.decode(Mt, { stream: !0 });
} catch (bs) {}
function At(e, t) {
	if (t) {
		for (var n = new Ue(e.length), i = 0; i < e.length; ++i) n[i] = e.charCodeAt(i);
		return n;
	}
	if (St) return St.encode(e);
	var a = e.length, r = new Ue(e.length + (e.length >> 1)), s = 0, o = function(e) {
		r[s++] = e;
	};
	for (i = 0; i < a; ++i) {
		if (s + 5 > r.length) {
			var l = new Ue(s + 8 + (a - i << 1));
			l.set(r), r = l;
		}
		var u = e.charCodeAt(i);
		u < 128 || t ? o(u) : u < 2048 ? (o(192 | u >> 6), o(128 | 63 & u)) : u > 55295 && u < 57344 ? (o(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++i)) >> 18), o(128 | u >> 12 & 63), o(128 | u >> 6 & 63), o(128 | 63 & u)) : (o(224 | u >> 12), o(128 | u >> 6 & 63), o(128 | 63 & u));
	}
	return ut(r, 0, s);
}
var Rt = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var i = e[n].length;
		i > 65535 && dt(9), t += i + 4;
	}
	return t;
}, Tt = function(e, t, n, i, a, r, s, o) {
	var l = i.length, u = n.extra, c = o && o.length, d = Rt(u);
	kt(e, t, null != s ? 33639248 : 67324752), t += 4, null != s && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (r < 0 && 8), e[t++] = a && 8, e[t++] = 255 & n.compression, e[t++] = n.compression >> 8;
	var m = new Date(null == n.mtime ? Date.now() : n.mtime), p = m.getFullYear() - 1980;
	if ((p < 0 || p > 119) && dt(10), kt(e, t, p << 25 | m.getMonth() + 1 << 21 | m.getDate() << 16 | m.getHours() << 11 | m.getMinutes() << 5 | m.getSeconds() >> 1), t += 4, -1 != r && (kt(e, t, n.crc), kt(e, t + 4, r < 0 ? -r - 2 : r), kt(e, t + 8, n.size)), kt(e, t + 12, l), kt(e, t + 14, d), t += 16, null != s && (kt(e, t, c), kt(e, t + 6, n.attrs), kt(e, t + 10, s), t += 14), e.set(i, t), t += l, d) for (var g in u) {
		var h = u[g], f = h.length;
		kt(e, t, +g), kt(e, t + 2, f), e.set(h, t + 4), t += 4 + f;
	}
	return c && (e.set(o, t), t += c), t;
}, Nt = function() {
	function e(e) {
		var t;
		this.filename = e, this.c = (t = -1, {
			p: function(e) {
				for (var n = t, i = 0; i < e.length; ++i) n = bt[255 & n ^ e[i]] ^ n >>> 8;
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
		this.ondata || dt(5), this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1);
	}, e;
}(), Et = function() {
	function e(e) {
		this.ondata = e, this.u = [], this.d = 1;
	}
	return e.prototype.add = function(e) {
		var t = this;
		if (this.ondata || dt(5), 2 & this.d) this.ondata(dt(4 + 8 * (1 & this.d), 0, 1), null, !1);
		else {
			var n = At(e.filename), i = n.length, a = e.comment, r = a && At(a), s = i != e.filename.length || r && a.length != r.length, o = i + Rt(e.extra) + 30;
			i > 65535 && this.ondata(dt(11, 0, 1), null, !1);
			var l = new Ue(o);
			Tt(l, 0, e, n, s, -1);
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
					var r = new Ue(16);
					kt(r, 0, 134695760), kt(r, 4, e.crc), kt(r, 8, g), kt(r, 12, e.size), u.push(r), p.c = g, p.b = o + g + 16, p.crc = e.crc, p.size = e.size, d && p.r(), d = 1;
				} else d && c();
			}, this.u.push(p);
		}
	}, e.prototype.end = function() {
		var e = this;
		2 & this.d ? this.ondata(dt(4 + 8 * (1 & this.d), 0, 1), null, !0) : (this.d ? this.e() : this.u.push({
			r: function() {
				1 & e.d && (e.u.splice(-1, 1), e.e());
			},
			t: function() {}
		}), this.d = 3);
	}, e.prototype.e = function() {
		for (var e = 0, t = 0, n = 0, i = 0, a = this.u; i < a.length; i++) n += 46 + (p = a[i]).f.length + Rt(p.extra) + (p.o ? p.o.length : 0);
		for (var r, s, o, l, u, c = new Ue(n + 22), d = 0, m = this.u; d < m.length; d++) {
			var p = m[d];
			Tt(c, e, p, p.f, p.u, -p.c - 2, t, p.o), e += 46 + p.f.length + Rt(p.extra) + (p.o ? p.o.length : 0), t += p.b;
		}
		r = c, s = e, o = this.u.length, l = n, u = t, kt(r, s, 101010256), kt(r, s + 8, o), kt(r, s + 10, o), kt(r, s + 12, l), kt(r, s + 16, u), this.ondata(null, c, !0), this.d = 2;
	}, e.prototype.terminate = function() {
		for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
		this.d = 2;
	}, e;
}();
function $t(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function Ot(e) {
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
function Ct(e, t) {
	const n = function(e) {
		const t = $t(e.ggirTimestamps), n = $t(e.ggirEnmo);
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
async function Lt(e, t, n, i, a = 60, r, s) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == i || n >= i) return null;
	const o = new Uint8Array(e.length);
	for (let u = 0; u < e.length; u++) o[u] = 1 === e[u] ? 1 : 0;
	const l = await Bt(o, r && r.length === e.length ? r : new Float64Array(e.length), t, n, i, a, s);
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
async function Bt(e, t, n, i, a, r = 60, s) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == i || null == a || i >= a) return null;
	const o = await async function(e, t, n, i) {
		const a = await W(i).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === a.length ? {
			startIdx: a[0],
			endIdx: a[1]
		} : null;
	}(n, i, a, s);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, u = o.endIdx + 1, c = e instanceof Uint8Array ? e.slice(l, u) : new Uint8Array(e.slice(l, u)), d = t instanceof Float64Array ? t.slice(l, u) : Float64Array.from(t.slice(l, u)), m = await W(s).computeSleepMetrics(c, d, r), p = n[l] ?? 0, g = n[u - 1] ?? p, h = null != m.firstSleepEpochIdx ? n[l + m.firstSleepEpochIdx] ?? p : p, f = null != m.lastSleepEpochIdx ? n[l + m.lastSleepEpochIdx] ?? g : g;
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
function Dt(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const i = ce(e), a = Array.from(i.timestamps);
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
	const l = R(e, t);
	return {
		timestamps: a,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: s,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
const Pt = /* @__PURE__ */ new Map();
async function jt(e, t) {
	if (Pt.has(e)) return Pt.get(e);
	try {
		const n = await W(t).resolveTimezone(e);
		return Pt.set(e, n), n;
	} catch (dt) {
		t?.throwIfAborted(), console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, dt);
		return;
	}
}
function Ft(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : Fe();
}
async function Wt(e) {
	try {
		return Ft((await te(e))?.extraSettings);
	} catch (dt) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", dt), Fe();
	}
}
function Ut(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const zt = {
	zone: null,
	reason: null
};
async function Gt(e, t, n) {
	const i = e.ggirTimezone?.trim();
	let a = null;
	if (i) {
		const e = await jt(i, n);
		if (!e) return zt;
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
	if (null === a) return _e(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : zt;
	const r = await jt(t, n);
	if (void 0 === r) return zt;
	if ("iana" !== r?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const s = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== s && (await We(r.zone, s, W(n))).includes(a) ? {
		zone: r.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${Ut(a)} is not a ${r.zone} offset`
	};
}
function Vt(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [i, a] of e.entries()) t[i + 1] = t[i] + a.length;
	const n = new Float64Array(t[e.length]);
	for (const [i, a] of e.entries()) n.set(a, t[i]);
	return [n, t];
}
const Ht = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), qt = [
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
var Kt = qt.map(() => Ht);
Object.fromEntries(qt.map(([e], t) => [e, Kt[t]]));
const Yt = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values(O).filter((e) => ![
		O.choi_2012,
		O.choi_2011,
		O.van_hees_2023,
		O.detach_nonwear
	].some((t) => t === e))
];
async function Jt(e, t, n, i) {
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
async function Zt(e, t, n) {
	const i = e instanceof Float64Array ? e : Float64Array.from(e), [a, r] = await (n ?? s()).analysisWindowSlice(i, t);
	return {
		startIndex: a,
		endIndex: r
	};
}
async function Qt(e, t = s()) {
	const n = [...new Set(e)], i = await t.analysisDatesOf(Float64Array.from(n)), a = new Map(n.map((e, t) => [e, i[t] ?? ""]));
	return (e) => a.get(e) ?? "";
}
function Xt(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [i, a] of Object.entries(Te(e, e.nonwearChoiAxis ?? Ie()))) a && (n[t[i] ?? i] = new Uint8Array(a));
	return n;
}
async function en(e, t, n, i = {}) {
	const { signal: a, includeNonwearMasks: r = !1 } = i, s = e.get(t), o = Dt(s, n), l = r && s ? Xt(s) : {}, u = e.get(await E(t, void 0, W(a))), c = o.timestamps[o.timestamps.length - 1], d = u ? Dt(u, n) : null, m = d?.timestamps[0], p = void 0 !== u && null !== d && void 0 !== c && void 0 !== m && m > c, g = o.scoresStale ?? d?.scoresStale ?? null;
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
	const y = r ? Xt(u) : {}, v = {};
	for (const M of Yt) {
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
async function tn(e, t, n, i) {
	const a = await n.files.get(e.fileId);
	if (!a) return;
	const r = /* @__PURE__ */ new Map();
	for (const s of [e.date, await E(e.date, void 0, W(i))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, s]).first();
		t && r.set(s, t);
	}
	await async function(e, t, n, i) {
		const { date: a, file: r, activityMap: s, verdict: o } = t, l = t.spanning ?? await en(s, a, o, { signal: i });
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
		for (const p of e.sleepMarkers) m.push(d && c.length > 0 && p.onsetTimestamp && p.offsetTimestamp ? await Bt(d, l.activity ?? new Float64Array(d.length), l.timestamps, p.onsetTimestamp, p.offsetTimestamp, r.epochLengthSeconds || 60, i) : null);
		if (void 0 !== e.id) try {
			await q(n, [n.markers], () => pe(e.id, {
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
Object.fromEntries(Object.values(O).map((e) => [e, e === O.ggir_saved ? fe : Ae(e)]));
const nn = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], an = ["under-series", "over-series"], rn = ["full-resolution-v1", "min-max-gap-envelope-v1"], sn = {
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
function un(e, t) {
	return Array.isArray(e) ? e : on(t, "expected an array");
}
function cn(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : on(t, "expected a finite number");
}
function dn(e, t) {
	const n = cn(e, t);
	return n <= 0 ? on(t, "expected a positive number") : n;
}
function mn(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : on(t, "expected a safe integer");
}
function pn(e, t) {
	const n = mn(e, t);
	return n < 0 ? on(t, "expected a non-negative safe integer") : n;
}
function gn(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? on(t, "expected a boolean") : { [n]: e };
}
function hn(e, t) {
	return "string" != typeof e || 0 === e.length ? on(t, "expected a non-empty string") : e;
}
function fn(e, t) {
	return "string" == typeof e && nn.includes(e) ? e : on(t, "expected a supported tone");
}
function _n(e, t) {
	return "string" == typeof e && an.includes(e) ? e : on(t, "expected a supported phase");
}
function wn(e, t) {
	const n = ln(e, t), i = cn(n.min, `${t}.min`), a = cn(n.max, `${t}.max`);
	return a <= i || !Number.isFinite(a - i) ? on(t, "expected a finite ascending range") : {
		min: i,
		max: a
	};
}
function yn(e, t) {
	const n = `series[${t}]`, i = ln(e, n), a = un(i.points, `${n}.points`);
	let r = Number.NEGATIVE_INFINITY;
	const s = (e) => `${n}.points[${e}]`, o = a.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return on(s(t), "expected an object");
		const n = e, i = n.timestamp;
		if ("number" != typeof i || !Number.isFinite(i)) return on(`${s(t)}.timestamp`, "expected a finite number");
		if (i <= r) return on(`${s(t)}.timestamp`, "expected strictly ascending timestamps");
		r = i;
		const a = n.value;
		return null === a || "number" == typeof a && Number.isFinite(a) ? {
			timestamp: i,
			value: a
		} : on(`${s(t)}.value`, "expected a finite number");
	});
	return {
		tone: fn(i.tone, `${n}.tone`),
		strokeWidth: dn(i.strokeWidth, `${n}.strokeWidth`),
		valueDomain: wn(i.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function vn(e, t) {
	const n = `overlays[${t}]`, i = ln(e, n), a = {
		phase: _n(i.phase, `${n}.phase`),
		order: mn(i.order, `${n}.order`),
		tone: fn(i.tone, `${n}.tone`)
	};
	if ("interval" === i.kind) {
		const e = cn(i.startTimestamp, `${n}.startTimestamp`), t = cn(i.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? on(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...a,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === i.kind ? {
		kind: "threshold",
		...a,
		value: cn(i.value, `${n}.value`),
		...gn(i.draggable, `${n}.draggable`, "draggable"),
		...gn(i.selected, `${n}.selected`, "selected"),
		...gn(i.handle, `${n}.handle`, "handle"),
		...void 0 === i.label ? {} : { label: hn(i.label, `${n}.label`) }
	} : "instant" === i.kind ? {
		kind: "instant",
		...a,
		timestamp: cn(i.timestamp, `${n}.timestamp`)
	} : on(`${n}.kind`, "expected interval, threshold, or instant");
}
function Mn(e, t, n) {
	const i = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(i) ? i : on("projection", "expected a finite pixel coordinate");
}
function bn(e, t, n) {
	const i = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(i) ? i : on("projection", "expected a finite pixel coordinate");
}
function kn(e) {
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
function xn(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Sn(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, i = t.plotArea.height, a = sn[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const r = xn(Mn(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), s = xn(Mn(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${kn(r)}" y="0" width="${kn(Math.max(1, s - r))}" height="${kn(i)}" fill="${a}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const r = bn(e.value, t.valueDomain, i), s = !0 === e.selected, o = s ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${s ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${kn(r)}" x2="${kn(n)}" y2="${kn(r)}" stroke="${a}" stroke-width="${s ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const r = Mn(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${kn(r)}" y1="0" x2="${kn(r)}" y2="${kn(i)}" stroke="${a}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function In(e) {
	const t = function(e) {
		const t = ln(e, "scene");
		if (2 !== t.version) return on("version", "expected 2");
		const n = ln(t.grid, "grid"), i = {
			strategy: (a = n.strategy, "string" == typeof a && rn.includes(a) ? a : on("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: pn(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: pn(n.renderedPointCount, "grid.renderedPointCount")
		};
		var a;
		if (i.renderedPointCount > i.sourcePointCount) return on("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === i.strategy && i.renderedPointCount !== i.sourcePointCount) return on("grid", "full-resolution strategy requires equal point counts");
		const r = ln(t.size, "size"), s = {
			width: dn(r.width, "size.width"),
			height: dn(r.height, "size.height")
		}, o = ln(t.plotArea, "plotArea"), l = {
			left: cn(o.left, "plotArea.left"),
			top: cn(o.top, "plotArea.top"),
			width: dn(o.width, "plotArea.width"),
			height: dn(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > s.width || l.top + l.height > s.height) return on("plotArea", "expected bounds contained by size");
		const u = wn(t.viewport, "viewport"), c = wn(t.valueDomain, "valueDomain"), d = un(t.series, "series").map(yn);
		if (0 === d.length && 0 !== i.renderedPointCount) return on("grid.renderedPointCount", "expected zero when series is empty");
		const m = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let f = 0; f < d.length; f++) {
			const e = d[f]?.points ?? [];
			if (e.length !== i.renderedPointCount) return on(`series[${f}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return on(`series[${f}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const p = un(t.overlays, "overlays").map(vn), g = null === t.cursorTimestamp ? null : cn(t.cursorTimestamp, "cursorTimestamp");
		let h = null;
		if (null !== t.selection) {
			const e = ln(t.selection, "selection"), n = cn(e.startTimestamp, "selection.startTimestamp"), i = cn(e.endTimestamp, "selection.endTimestamp");
			if (i <= n) return on("selection", "expected a half-open ascending interval");
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
	}(e), n = kn(t.size.width), i = kn(t.size.height), a = kn(t.plotArea.width), r = kn(t.plotArea.height), s = Sn(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
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
			const t = Mn(o.timestamp, n.viewport, r);
			let l = s.get(o.value);
			void 0 === l && (l = kn(bn(o.value, e.valueDomain, n.plotArea.height)), s.set(o.value, l)), i += `${a ? "L" : "M"}${kn(t)} ${l}`, a = !0;
		}
		return 0 === i.length ? "" : `<path data-series-index="${t}" d="${i}" fill="none" stroke="${sn[e.tone]}" stroke-width="${kn(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = Sn(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${i}" viewBox="0 0 ${n} ${i}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${i}" fill="#ffffff"/><svg x="${kn(t.plotArea.left)}" y="${kn(t.plotArea.top)}" width="${a}" height="${r}" viewBox="0 0 ${a} ${r}" overflow="hidden"><rect x="0" y="0" width="${a}" height="${r}" fill="#ffffff"/>${s}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = xn(Mn(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), i = xn(Mn(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${kn(n)}" y="0" width="${kn(Math.max(1, i - n))}" height="${kn(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = Mn(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${kn(n)}" y1="0" x2="${kn(n)}" y2="${kn(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${kn(t.plotArea.left)}" y="${kn(t.plotArea.top)}" width="${a}" height="${r}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
const An = "local-export-streams";
var Rn = class extends Error {
	file;
	step;
	constructor(e, t, n) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t;
	}
};
const Tn = 65536, Nn = "manifest.json", En = "Duplicate export entry: ", $n = "Reading recordings", On = "Writing ZIP";
function Cn(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function Ln(e) {
	return String(e).padStart(2, "0");
}
function Bn(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const Dn = [
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
new Set(Dn.slice(16).map(([e]) => e));
var Pn = class extends Error {};
const jn = "edit_recompute_requires_ms2_ms3", Fn = /* @__PURE__ */ new Set([
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
	"scores_from_another_config",
	"ggir_night_excluded",
	"no_retained_nights"
]), Wn = S.invalid_night_row.markerTypeCell, Un = new Set(Dn.map(([, e]) => e)), zn = /* @__PURE__ */ new Set([
	T.ggir_sleepparam.header,
	T.ggir_guider_onset.header,
	T.ggir_guider_wakeup.header,
	T.ggir_guider_spt_duration.header,
	T.ggir_error_onset.header,
	T.ggir_error_wake.header,
	T.ggir_error_dur.header,
	T.ggir_fraction_night_invalid.header,
	T.ggir_duration_sib_wakinghours.header,
	T.ggir_number_sib_sleepperiod.header,
	T.ggir_number_sib_wakinghours.header,
	T.ggir_duration_sib_wakinghours_atleast15min.header,
	T.ggir_guider_onset_ts.header,
	T.ggir_guider_wakeup_ts.header,
	T.ggir_page.header,
	T.ggir_daysleeper.header,
	T.ggir_sleeplog_id.header,
	T.ggir_guider.header,
	T.ggir_longitudinal_axis.header
]), Gn = /* @__PURE__ */ new Set([
	T.ggir_sleep_duration_in_spt.header,
	T.ggir_waso.header,
	T.ggir_number_of_awakenings.header,
	T.ggir_sleeplatency.header,
	T.ggir_sleepefficiency.header
]), Vn = /* @__PURE__ */ new Set([
	...Gn,
	T.ggir_nonwear_perc_spt.header,
	T.ggir_sleeponset.header,
	T.ggir_wakeup.header,
	T.ggir_spt_duration.header,
	T.ggir_guider_onset.header,
	T.ggir_guider_wakeup.header,
	T.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	T.ggir_sleeponset_ts.header,
	T.ggir_wakeup_ts.header,
	T.ggir_guider_onset_ts.header,
	T.ggir_guider_wakeup_ts.header,
	T.ggir_daysleeper.header,
	T.ggir_cleaningcode.header,
	T.ggir_guider.header,
	T.ggir_error_onset.header,
	T.ggir_error_wake.header,
	T.ggir_error_dur.header,
	T.ggir_fraction_night_invalid.header,
	T.ggir_duration_sib_wakinghours.header,
	T.ggir_number_sib_sleepperiod.header,
	T.ggir_number_sib_wakinghours.header,
	T.ggir_duration_sib_wakinghours_atleast15min.header
]), Hn = /* @__PURE__ */ new Set([
	T.ggir_id.header,
	T.ggir_filename.header,
	T.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	T.ggir_sleep_regularity_index1.header,
	T.ggir_sri_fraction_valid.header,
	T.ggir_calendar_date.header,
	T.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	T.ggir_cleaningcode.header,
	T.ggir_guider.header,
	T.ggir_sleeplog_used.header,
	T.ggir_acc_available.header,
	T.ggir_daysleeper.header
]), qn = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), Kn = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), Yn = new Set(Object.values(T).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), Jn = new Set(Object.values(T).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), Zn = new Set(Object.values(b).map((e) => e.reviewSource)), Qn = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim()), Xn = Qn, ei = "refusal_detail_missing_reason";
function ti(e, t, n, i) {
	const a = (e) => n.get(e) ?? "", r = a(t + "_missing_reason");
	if (r && !Fn.has(r)) return null;
	const s = r || null;
	if (e.startsWith("part2_")) return "source_reported_missing";
	if (e.includes("_ggir_review")) {
		if (s) return s;
		const e = a("review_source");
		return Zn.has(e) ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const o = a(T.marker_type.header) === Wn || "actiware_intervals_export.csv" === e && a(T.interval_kind.header) === Wn;
	if (!function(e, t) {
		return "actiware_intervals_export.csv" === e ? Un.has(t) : "actiware_sleep_wake_export.csv" === e ? t === T.actiware_sleep_wake.header || t === T.actiware_wake_threshold.header : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			T.ggir_id.header,
			T.ggir_filename.header,
			T.ggir_calendar_date.header,
			T.ggir_weekday.header,
			T.ggir_sleeplog_id.header,
			T.ggir_guider_corrected.header,
			T.ggir_cleaningcode.header
		].includes(t) : Yn.has(t);
	}(e, t)) return s || (o ? "invalid_night" : "Manual Nonwear" === a(T.marker_type.header) ? "manual_nonwear_period" : null);
	if ("actiware_intervals_export.csv" === e && Un.has(t)) {
		if (o) return "invalid_night";
		const e = a(T.interval_kind.header).toLowerCase(), n = a(T.interval_start_local.header);
		if ("daily" === e && n && n === a(T.interval_end_local.header)) return "zero_interval_rows";
		if ([
			T.actiware_onset_latency.header,
			T.actiware_efficiency.header,
			T.actiware_waso.header
		].includes(t)) {
			if ("sleep" !== e) return "not_applicable_to_row";
			if (Xn(a(T.actiware_duration.header))) return null;
			const t = a(T.interval_start_local.header), n = a(T.interval_end_local.header);
			if (!t || !n) return null;
			let r = !1;
			for (const e of i) if (e.get(T.filename.header) === a(T.filename.header) && "rest" === e.get(T.interval_kind.header) && (e.get(T.interval_start_local.header) ?? "") <= t && n <= (e.get(T.interval_end_local.header) ?? "")) {
				r = !0;
				break;
			}
			return r ? null : "no_eligible_rest";
		}
		if (Xn(a(T.actiware_duration.header))) return null;
		if (t === T.actiware_off_wrist.header || t === T.actiware_off_wrist_percent.header) return t === T.actiware_off_wrist_percent.header && "0.00" === a(T.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === s ? s : null;
		if (t === T.actiware_avg_ac_per_min.header) return 100 === Number(a(T.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			T.actiware_invalid_sw_percent.header,
			T.actiware_wake_percent.header,
			T.actiware_sleep_percent.header
		].includes(t)) {
			if ("0.00" === a(T.actiware_duration.header)) return "zero_interval_rows";
			const e = !Xn(a(T.actiware_wake_time.header)) && !Xn(a(T.actiware_sleep_time.header)) && 0 === Number(a(T.actiware_wake_time.header)) && 0 === Number(a(T.actiware_sleep_time.header));
			return t === T.actiware_invalid_sw_percent.header || 100 !== Number(a(T.actiware_invalid_sw_percent.header)) && !e ? null : "no_scored_epochs";
		}
		const r = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(t);
		if (r) {
			const e = r[1];
			return "0.00" === a(T.actiware_duration.header) ? "zero_interval_rows" : Xn(a("%Invalid " + e)) ? "source_reported_missing" === s ? s : null : t.startsWith("TALT ") && !Xn(a("Exposure " + e)) ? "threshold_unconfigured" : 100 === Number(a("%Invalid " + e)) ? "no_valid_epochs" : null;
		}
		return null;
	}
	if ("actiware_sleep_wake_export.csv" === e) {
		if (t === T.actiware_sleep_wake.header) return "no_valid_epochs" === s ? s : null;
		if (t === T.actiware_wake_threshold.header) return "not_computed_for_export" === s ? s : null;
	}
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return zn.has(t) ? "not_computed_for_export" === s ? s : null : Gn.has(t) ? "no_scored_epochs" === s || "not_applicable_to_row" === s || "scores_from_another_config" === s ? s : null : s;
	if ("sleep_export_wide.csv" === e) return s;
	if ("summary_export.csv" === e && t === T.sleep_regularity_index.header) return s && [
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
		const r = w.find((e) => e.method === n);
		return i && r?.cutpoint && !Number.isFinite(r.cutpoint[i]) || "MIMS Unit Total" === t && "mims" !== n ? "not_applicable_to_row" : "ggir_enmo" === n ? qn.has(t) ? "source_reported_missing" === s ? s : null : Kn.has(t) && "not_computed_for_export" === s ? s : null : "mims" === n && [
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
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === a(T.marker_type.header) ? "manual_nonwear_period" : null : "true" === a(T.is_invalid_night.header).toLowerCase() && a(T.marker_type.header) === Wn ? "invalid_night" : t === T.total_nap_minutes.header && "0" === a(T.nap_count.header) ? "not_applicable_to_row" : [
		T.l5_hour.header,
		T.m10_hour.header,
		T.sleep_midpoint_hour.header,
		T.valid_wear_minutes.header
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
const ni = "missing_reasons.csv";
function ii(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(l).join(","))].map((e) => e + "\n").join("");
}
function ai(e, t) {
	const n = [
		T.filename.header,
		T.ggir_filename.header,
		"ggir_filename",
		T.participant_id.header,
		T.ggir_id.header,
		T.study_date.header,
		"Analysis Date",
		T.ggir_calendar_date.header,
		"ggir_calendar_date",
		T.interval_kind.header,
		T.marker_type.header,
		T.interval_start_local.header,
		T.epoch_local.header,
		"Method"
	].flatMap((t) => {
		const n = e.get(t);
		return n ? [t + "=" + n] : [];
	});
	return n.length ? n.join("|") : "row=" + String(t);
}
function ri(e, t) {
	let n = !1, i = 0;
	for (let a = 0; a < e.length; a += 1) if ("\"" === e[a]) n && "\"" === e[a + 1] ? a += 1 : n = !n;
	else if ("," === e[a] && !n && ++i === t) return e.slice(0, a);
	return e;
}
function* si(e, t, n = !0, i) {
	const { headerlessColumns: a, fullRowCsv: r, rowOffset: s = 0, contextRows: o } = i ?? {}, l = a?.length ? a.join(",") + "\n" + e : e, d = c(l);
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
	let k = 0, x = 0;
	for (let u = 0; u < _.length; u += 1) {
		const e = _[u], n = w[u];
		for (const { header: a, index: r } of f) {
			if ("edit_recompute_requires_ms2_ms3" === b[u].get(a + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
				yield {
					file: t,
					row: s + u + 1,
					key: ai(n, s + u + 1),
					column: a,
					reason: jn
				}, k += 1;
				continue;
			}
			const i = e[r] ?? "";
			if (!Xn(i) || "" !== i.trim() && Jn.has(a)) continue;
			const l = ti(t, a, b[u], o?.() ?? b);
			l ? (k += 1, yield {
				file: t,
				row: s + u + 1,
				key: ai(n, s + u + 1),
				column: a,
				reason: l
			}) : (x += 1, console.warn("WARNING: unreasoned missing export cell"));
		}
		const i = n.get(ei);
		i && (yield {
			file: t,
			row: s + u + 1,
			key: ai(n, s + u + 1),
			column: i,
			reason: "not_computed_for_export"
		});
	}
	if (n && x > 0) throw new Pn(t + ": " + String(x) + " unreasoned missing metric cells");
	return h < 0 ? {
		csv: e,
		withReason: k,
		withoutReason: x
	} : {
		csv: [ri(m.text, h), ...p.map((e) => ri(e.text, h))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: k,
		withoutReason: x
	};
}
const oi = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], li = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : l(String(e)), ui = (A.part4_night_review, A.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function ci(e, t, n = "") {
	return A[e].replace("{report}", n.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${b[t].filenameSuffix}.csv`);
}
const di = Object.keys(b).map((e) => ci("person_summary_review", e)), mi = (e) => di.some((t) => e.endsWith(t));
function pi(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return d(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? d(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function gi(e, t) {
	const n = new Map(ve(e).map((e) => [e.night, e.nightDate]));
	return (e, i, a = !0) => {
		const r = e.columns.indexOf("nights" === t ? T.ggir_night.header : "night_number"), s = Number(e.values[r]?.[i]), o = n.get(s);
		if (a && o) return o;
		const l = e.values[e.columns.indexOf(T.ggir_calendar_date.header)]?.[i];
		return pi(l);
	};
}
async function hi(t, n, a, r) {
	const s = "nights" === n ? T.ggir_night.header : "window_number", o = W(a), u = await Promise.all(t.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await be(e.imported, e.edits, t.night, a)])))), c = (await Promise.all(t.map(async (e, t) => {
		const i = e.current ?? e.imported, a = (e) => "nights" === n ? e.nights : e.days, r = "nights" === n ? i.nightRecomputed : i.dayRecomputed, s = "nights" === n ? e.imported.nightChecks : e.imported.dayChecks, l = u[t].filter((e) => null != e[1]), c = gi(e.imported, n), d = new Set(e.edits.map((e) => e.night)), m = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, p = /* @__PURE__ */ new Set();
		if ("days" === n && m) {
			const t = await Promise.all(ve(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), i = t.nightDate, a = n.onset < "12:00:00" ? await E(i, void 0, o) : i, r = n.wake <= n.onset ? await E(a, void 0, o) : a;
				return [Math.min(t.onsetMs, Date.parse(`${a}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${r}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: i.days.rows }, async (e, n) => {
				const a = Number(i.days.values[i.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(a)) return void p.add(n);
				const r = c(i.days, n, !1), s = i.days.values[i.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof s ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(s) : null;
				if (!r || !l) return;
				const u = Date.parse(`${r}T${l[1]}Z`), m = l[2] < l[1] ? await E(r, void 0, o) : r, g = Date.parse(`${m}T${l[2]}Z`);
				t.some(([e, t]) => u <= t && g >= e) && p.add(n);
			}));
		}
		return {
			source: b[ui(e)].reviewSource,
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
			provenance: (e) => "nights" === n ? l.find(([t]) => t === e)?.[1] ?? "" : l.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(s.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === c.length) return null;
	const d = r ? r.filter((e) => !e.endsWith("_missing_reason") && !oi.includes(e)) : [];
	for (const e of r ? [] : c) for (const t of e.table.columns) t.endsWith("_missing_reason") || d.includes(t) || d.push(t);
	const m = new Set("nights" === n ? N.ggir_review_night_extension.map((e) => T[e].header) : []), p = r ? d.filter((e) => r.includes(e + "_missing_reason")) : d.filter((e) => m.has(e) || c.some((e) => e.editRecomputeUnavailable || e.source === b.corrected.reviewSource)), g = [[
		...d.map(l),
		...oi,
		...p.map((e) => l(e + "_missing_reason")),
		...oi.map((e) => e + "_missing_reason")
	].join(",")], h = (e, t) => {
		const n = e.columns.indexOf(s);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: f, ggir: _, recomputed: w, provenance: y, checks: v, scoredDates: M, invalidDates: b, dateOf: k, editRecomputeUnavailable: x, editedNights: S, editedDayRows: I, savedNights: A, source: R } of c) {
		const t = A.columns.filter((e) => !Vn.has(e)), a = t.filter((e) => {
			const t = A.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return A.values[t].some((e, t) => {
				const i = Number(A.values[A.columns.indexOf(T.ggir_night.header)]?.[t]), a = n.has(i) && !Object.is(n.get(i), e);
				return n.set(i, e), a;
			});
		}), r = /* @__PURE__ */ new Set(), s = (e) => Array.from({ length: _.rows }, (e, t) => t).find((t) => !r.has(t) && h(_, t) === h(f, e) && a.every((n) => Object.is(_.values[_.columns.indexOf(n)]?.[t] ?? null, f.values[f.columns.indexOf(n)]?.[e] ?? null))), o = new Set(d.filter((e) => "nights" === n ? Vn.has(e) : !Hn.has(e) && !t.includes(e))), u = (a, r, s, u) => {
			const c = v.get(h(a, r));
			return [
				...d.map((e) => {
					if ("invalid" === s && ("nights" === n ? Vn.has(e) : /sleep|spt|waso|wake|onset|guider/i.test(e) && !t.includes(e))) return "";
					const i = a.columns.indexOf(e);
					return i < 0 ? "" : li(a.values[i]?.[r]);
				}),
				s,
				c?.status ?? "",
				l((c?.reasons ?? []).join(";")),
				l((c?.diffs ?? []).map((e) => e.column).join(";")),
				l(u),
				...p.map((t) => "invalid" !== s || m.has(t) && t !== T.ggir_nonwear_perc_spt.header ? x && s === R && o.has(t) && ("days" === n ? I.has(r) : S.has(h(a, r))) ? jn : m.has(t) ? null != e(a, t, r) ? "" : li(i(a, t + "_missing_reason", r) ?? "source_reported_missing") : s === R ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
				"",
				c ? "" : "not_computed_for_export",
				c?.reasons.length ? "" : "not_applicable_to_row",
				c?.diffs.length ? "" : "not_applicable_to_row",
				u ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let e = 0; e < f.rows; e += 1) {
			const t = k(f, e);
			if (M && (!t || !M.has(t))) continue;
			const n = s(e);
			if (null != n && r.add(n), t && b?.has(t)) {
				null != n && g.push(u(_, n, R, "")), g.push(u(f, e, "invalid", ""));
				continue;
			}
			if (!w[e]) {
				g.push(u(f, e, R, ""));
				continue;
			}
			const i = h(f, e);
			null != n && g.push(u(_, n, R, "")), g.push(u(f, e, "recomputed", y(i)));
		}
		for (let e = 0; e < _.rows; e += 1) {
			if (r.has(e)) continue;
			const t = k(_, e);
			(!M || t && M.has(t)) && (g.push(u(_, e, R, "")), t && b?.has(t) && g.push(u(_, e, "invalid", "")));
		}
	}
	return g.length > 1 ? `${g.join("\n")}\n` : null;
}
function fi(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const i of e) for (const [e, t] of Object.entries(i.part2Reports ?? {})) {
		const a = ci("part2_report", ui(i), e);
		n.set(a, [...n.get(a) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const i = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], a = [i.map(l).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) a.push(i.map((n) => li(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, a.join("\n") + "\n"];
	}));
}
function _i(e, t) {
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
const wi = (e, t) => ve(e).filter((e) => t?.has(e.nightDate));
async function yi(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: jn,
		detail: ""
	};
	const a = e.current ?? e.imported;
	if (void 0 === a.tailExpansion) return {
		reason: "not_computed_for_export",
		detail: "the saved GGIR review predates the core's tail expansion flag; import the folder again"
	};
	const r = W(n);
	try {
		const { ggirVersion: n } = await r.ggirConfigValues(e.configCsv), { profile: s, reports: o } = await r.ggirPersonSummaries({
			ggir_version: n ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: a.nights,
			days: a.days,
			tail_expansion: a.tailExpansion,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(i(a.nights, T.ggir_id.header, 0) ?? ""),
			invalid_nights: wi(e.imported, t).map((e) => e.night),
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
async function vi(e, t, n) {
	const i = /* @__PURE__ */ new Map(), a = await Promise.all(e.map(async (e) => {
		const n = wi(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (n) => {
			const i = await be(e.imported, e.edits, n.night, t);
			return null == i ? [] : [`night ${String(n.night)} ${i}`];
		}))).flat(), ...n].join("; ");
	}));
	for (const [s, o] of e.entries()) {
		const e = ui(o), t = a[s], n = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [a, r] of Object.entries(o.personReports ?? {})) {
			if (0 === r.rows) continue;
			const s = ci("person_summary_review", e, a), o = "reason" in n ? n : n.reports[a] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${a}`
			};
			i.set(s, [...i.get(s) ?? [], {
				table: r,
				source: b[e].reviewSource,
				edit: t,
				recomputed: o
			}]);
		}
	}
	const r = /* @__PURE__ */ new Set([T.ggir_id.header, T.ggir_filename.header]);
	return Object.fromEntries([...i].map(([e, t]) => {
		const i = n?.get(e), a = [...new Set(t.flatMap(({ table: e }) => e.columns))], s = (i ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : _i(e, t.columns), a)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !oi.includes(e)), o = oi.map((e) => e + "_missing_reason"), u = i?.filter((e) => e.endsWith("_missing_reason") && !o.includes(e)) ?? ["refusal_detail_missing_reason", ...s.map((e) => e + "_missing_reason")], c = [[
			...s,
			...oi,
			...u,
			...o
		].map(l).join(",")], d = (e, t) => [
			e,
			"",
			"",
			"",
			l(t)
		], m = (e) => [
			"",
			"not_computed_for_export",
			"not_applicable_to_row",
			"not_applicable_to_row",
			e ? "" : "not_applicable_to_row"
		], p = (e, t) => (n) => li(e.values[e.columns.indexOf(n)]?.[t]), g = (e) => u.map((t) => e.get(t) ?? ""), h = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
		for (const { table: n, source: f, edit: _, recomputed: w } of t) for (let e = 0; e < n.rows; e++) {
			const t = s.map(p(n, e)), i = new Map(s.flatMap((e) => h.get(n).has(e) ? [] : [[e + "_missing_reason", "not_applicable_to_row"]]));
			if (c.push([
				...t,
				...d(f, ""),
				...g(i),
				...m("")
			].join(",")), !_) continue;
			const a = "reason" in w ? w : 0 === w.rows ? {
				reason: "no_retained_nights",
				detail: ""
			} : null, o = "reason" in w ? null : p(w, 0), u = s.map((e, n) => r.has(e) ? t[n] : o?.(e) ?? ""), y = new Map(s.flatMap((e, t) => Qn(u[t]) ? [[e + "_missing_reason", a?.reason ?? "not_applicable_to_row"]] : []));
			a?.detail && y.set(ei, l(`ggirPersonSummaries: ${a.detail}`)), c.push([
				...u,
				...d("recomputed", _),
				...g(y),
				...m(_)
			].join(","));
		}
		return [e, c.join("\n") + "\n"];
	}));
}
const Mi = N.ggir_part4_nightsummary_csv, bi = Mi.map((e) => T[e].header), ki = [
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
], xi = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function Si(e, t) {
	const n = T[e], i = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof i ? l(i) : Cn(i, { integral: n.ggirIntegral ?? !1 });
}
function Ii(e, t = "legacy-recording", n, i) {
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
	}) : W(i).validStateFraction(s).then(async (e) => {
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
			})), [a, r] = Vt(n.map((e) => e.timestamps)), [s, l] = Vt(n.map((e) => e.states));
			return W(t).sleepRegularityIndex(o([
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
async function Ai(e, t, n, i = {}) {
	const { signal: a } = i, r = e.participantId ?? e.filename, s = ie(n.values(), i.algorithm), o = [];
	for (const [f, y] of n) {
		if (!Fi(f, i.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = Dt(y, s);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await Ii(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, a), { sri: u, fractionValid: c } = l, d = "stale" === s.status ? "scores_from_another_config" : null, m = d ?? l.sriMissingReason, p = d ?? l.fractionValidMissingReason, g = [];
	for (const y of [...t.keys()].sort()) {
		const e = t.get(y);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === f.MAIN_SLEEP && null != t.onsetTimestamp && g.push({
			date: y,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const h = [[
		...bi,
		...ki.map((e) => `${T[e].header}_missing_reason`),
		...xi.map((e) => `${T[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: f, onsetTs: y, wakeupTs: v } of g) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == v ? "not_applicable_to_row" : d ?? "no_scored_epochs"
		};
		if (null != v) {
			const { timestamps: i, algorithmResults: r } = await en(n, f, s, { signal: a });
			if (r && i.length > 0) {
				t.missingReason = null;
				const n = await Lt(r, i, y, v, e.epochLengthSeconds || 60, null, a);
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
	const w = await W(a).ggirManualNightClocks(g.map((e) => e.date), Float64Array.from(g, (e) => e.onsetTs), Float64Array.from(g, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let f = 0; f < g.length; f++) {
		const { onsetTs: t, wakeupTs: n } = g[f], i = w[f], { tstH: a, nAwak: s, latency: o, efficiency: l } = _[f], d = {
			ggir_id: r,
			ggir_night: f + 1,
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
			ggir_sleep_regularity_index1: u,
			ggir_sri_fraction_valid: c,
			ggir_longitudinal_axis: null,
			ggir_guider_corrected: !1
		};
		h.push([
			...Mi.map((e) => Si(e, d[e])),
			...ki.map((e) => {
				const t = Mi.indexOf(e);
				return t >= 0 && null == d[Mi[t]] ? "not_computed_for_export" : "";
			}),
			...xi.map((e) => {
				const t = Mi.indexOf(e);
				return t >= 0 && null == d[Mi[t]] ? _[f].missingReason ?? "" : "";
			}),
			m ?? "",
			p ?? ""
		].join(","));
	}
	return h.join("\n") + "\n";
}
function Ri(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const Ti = "actogram_report.html";
function Ni(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function Ei(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function $i(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: i } = Ni(n), a = [e, i].filter(Boolean);
		t.set(n, 0 === a.length ? "part4_nightsummary.csv" : `part4_nightsummary_${a.join("_")}.csv`);
	}
	return t;
}
function Oi(e) {
	const { algoKey: t, ruleKey: n } = Ni(e), i = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
	return t || n ? n ? `${i(t)} / ${i(n)}` : i(t) : "Legacy / Unscoped";
}
function Ci(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : ge(e);
}
function Li(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function Bi(e, t) {
	const n = [], i = [], a = (e) => {
		for (const t of Pi(e)) n.push(t), i.push(t.byteLength);
	};
	a(`<section class="pid-sec${0 === e ? " initial" : ""}" id="sec-${e}">`), a(`  <h2 class="pid-lbl">${Ri(t.pid)}</h2>`);
	for (const [r, s] of t.charts.entries()) a(`  <div class="algo-block" data-algorithm-key="${Ri(s.algoKey)}">`), a(`    <div class="algo-lbl">${Ri(Oi(s.algoKey))}</div>`), s.stale && a(`    <div class="algo-stale" role="status">${Ri(s.stale)}</div>`), a(`    <div class="cwrap" id="c${e}_${r}">`), n.push(s.plot), i.push(...s.plotLengths), a(`      <button type="button" class="svg-btn" data-download-name="${Ri(s.svgFilename)}">Download SVG</button>`), a(s.meta), a("    </div>"), a("  </div>");
	return a("</section>"), {
		blob: new Blob(n),
		lengths: i
	};
}
const Di = ["<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>", "</body>\n</html>"];
function* Pi(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let i = Math.min(e.length, n + Tn / 4);
		i < e.length && /[\uD800-\uDBFF]/u.test(e[i - 1]) && (i -= 1), yield t.encode(e.slice(n, i)), n = i;
	}
	yield t.encode("\n");
}
function ji(e) {
	return new TextEncoder().encode(e);
}
function Fi(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function Wi({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: i, layouts: a, only: r }) {
	const s = {}, o = (e) => void 0 === r || r === e;
	for (const [l, u] of i ?? $i([...e.keys()])) {
		const t = e.get(l);
		t?.length && o(u) && (s[u] = ji(`${t.join("\n")}\n`));
	}
	for (const l of Object.keys(b)) {
		const e = t.filter((e) => ui(e) === l);
		if (0 !== e.length) {
			for (const [t, n] of Object.entries(fi(e, a))) o(t) && (s[t] = ji(n));
			for (const [t, i] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
				const r = ci(i, l), u = o(r) ? await hi(e, t, n, a?.get(r)) : null;
				u && (s[r] = ji(u));
			}
			for (const [t, i] of Object.entries(await vi(e, n, a))) o(t) && (s[t] = ji(i));
		}
	}
	return s;
}
async function Ui(e, t, n) {
	n?.throwIfAborted();
	const i = function(e, t) {
		const { signal: n } = t, { username: i, dateRange: a, snapshot: r } = e, s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const c = ss(r, Zr.ggirReport, e.map((e) => e.id)), d = await Promise.all(e.map((e) => cs(r, e.id, i, n)));
				for (const [i, r] of e.entries()) {
					const e = c.files.find((e) => e.id === r.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: m, sets: g, markersByAlgo: h, invalidDates: f } = d[i], _ = ms(c, e.id), w = new Map([...h].filter(([e]) => Fi(e, a))), y = /* @__PURE__ */ new Map();
					for (const [t, n] of w) for (const e of n) {
						const n = Ei(e);
						let i = y.get(n);
						i || (i = /* @__PURE__ */ new Map(), y.set(n, i)), i.set(t, e);
					}
					const v = /* @__PURE__ */ new Set();
					for (const [t, n] of w) for (const e of n) p(e) && v.add(t);
					if (m) for (const t of g) u.push({
						...t,
						...a ? { scoredDates: new Set(e.availableDates.filter((e) => Fi(e, a))) } : {},
						invalidDates: f
					});
					const M = [...v].sort(), b = M[0], k = M[M.length - 1], x = [], S = [];
					for (const n of t.charts ? [..._.keys()].sort() : []) if (Fi(n, a) && (null == b || null == k || n >= b && n <= k)) {
						const e = _.get(n), t = ce({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), i = t.timestamps, a = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < i.length; n++) x.push(i[n]), S.push(a[n]);
					}
					const I = [];
					for (const [t, i] of y) {
						const r = Ni(t).algoKey, l = m ? "" : await Ai(e, i, _, {
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
						const { algoKey: p, ruleKey: g } = Ni(t), h = [p, g].filter(Boolean).join("_"), f = ie(_.values(), r || null);
						I.push([h, {
							p: c,
							n: d,
							..."stale" === f.status ? { stale: f.reason } : {}
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
			entries: () => Wi({
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
				const { algoKey: r, ruleKey: s } = Ni(i), o = Li([r, s].filter(Boolean).join("_"), "unscoped"), l = `activity-${Li(e, "recording")}-${o}-${n}.svg`, u = function(e) {
					if (0 === e.timestamps.length) return Bn("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return Bn("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, i = 0;
					const a = e.timestamps.map((a, r) => {
						const s = e.activity[r];
						return !Number.isFinite(a) || a <= t ? Bn("timestamps must be finite and strictly ascending") : (t = a, null != s && Number.isFinite(s) ? (n = Math.min(n, s), i = Math.max(i, s), {
							timestamp: a,
							value: s
						}) : {
							timestamp: a,
							value: null
						});
					}), r = a[0].timestamp, s = a[a.length - 1].timestamp, o = s > r ? s : r + 1;
					if (!Number.isFinite(o) || o <= r) return Bn("single-epoch viewport must have a representable right edge");
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
				}), c = [...Pi(`      <div class="plot-svg">${In(u)}</div>`)];
				return {
					algoKey: i,
					...a.stale ? { stale: a.stale } : {},
					svgFilename: l,
					plot: new Blob(c),
					plotLengths: c.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${Ri(Ci(u.viewport.min))} → ${Ri(Ci(u.viewport.max))} · activity domain ${Cn(u.valueDomain.min)}–${Cn(u.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), r = new Set($i([...i.csvLinesByAlgo.keys()]).values()), s = [];
	for (const [o, l] of Object.entries(await i.entries())) r.has(o) || s.push([o, u(c(new TextDecoder().decode(l)).records[0].text)]);
	return {
		charts: a,
		csvLinesByAlgo: i.csvLinesByAlgo,
		ggirReviews: i.ggirReviews,
		headers: s
	};
}
async function zi(e, t, n, i) {
	const a = [], r = [];
	for (const [s, o] of e) if (s) for (let e = 0; e < Math.min(s.length, o.length); e++) a.push(o[e]), r.push(s[e]);
	return await W(i).spanFiniteMean(Float64Array.from(a), Float64Array.from(r), t, n) ?? null;
}
function Gi(e) {
	return "string" == typeof e ? e : null;
}
function Vi(e) {
	return "number" == typeof e ? e : null;
}
function Hi(e, t) {
	const n = function(e, t) {
		switch (e.formatter) {
			case "verbatim_string": return function(e) {
				return e ? l(e) : "";
			}(Gi(t));
			case "display_label": {
				const n = Gi(t);
				return n ? function(e) {
					return e ? l(e) : "";
				}(e.labelEnum ? k(e.labelEnum, n) : n) : "";
			}
			case "core_printed_text":
			case "date_iso": return function(e) {
				return e ?? "";
			}(Gi(t));
			case "integer": return function(e) {
				return null == e ? "" : String(Math.trunc(e));
			}(Vi(t));
			case "fixed2": return function(e) {
				return null == e ? "" : e.toFixed(2);
			}(Vi(t));
			case "python_scalar_str": return function(e) {
				return null == e ? "" : String(e);
			}("boolean" == typeof t ? null : t);
			case "python_float_repr": return function(e) {
				if (null == e) return "";
				if (!Number.isFinite(e)) return String(e);
				const t = String(e);
				return t.includes(".") || t.includes("e") ? t : `${t}.0`;
			}(Vi(t));
			case "python_bool": return function(e) {
				return null == e ? "" : e ? "True" : "False";
			}("boolean" == typeof t ? t : null);
			case "clock_hhmm": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${Ln(t.getUTCHours())}:${Ln(t.getUTCMinutes())}`;
			}(Vi(t));
			case "datetime_seconds": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${String(t.getUTCFullYear())}-${Ln(t.getUTCMonth() + 1)}-${Ln(t.getUTCDate())} ${Ln(t.getUTCHours())}:${Ln(t.getUTCMinutes())}:${Ln(t.getUTCSeconds())}`;
			}(Vi(t));
			case "ggir_value": return Cn(t, { integral: e.ggirIntegral ?? !1 });
		}
	}(e, t);
	return "" === n ? I[e.sentinel] : n;
}
function qi(e, t) {
	if (!t) return "";
	const { labelEnum: n } = T[e];
	return n ? k(n, t) : t;
}
const Ki = S.invalid_night_row?.markerTypeCell ?? "", Yi = S.nonwear_row?.markerTypeCell ?? "";
function Ji(e) {
	return N[e].filter((e) => "server" !== T[e].plane);
}
function Zi(e) {
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
function Qi(e) {
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
const Xi = [
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
async function ea(e, t, n, i, a, r, s) {
	try {
		return {
			metrics: t ? await Bt(e, t, n, i, a, r, s) : await Lt(e, n, i, a, r, null, s),
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
async function ta(e, t, n, i) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const a = new Set(n.filter((t) => t.markerType === f.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return a.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : Ii(t.filter((e) => a.has(e.date)), e, t[0]?.epochLengthSeconds, i);
}
function na(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const ia = [
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
], aa = {
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
}, ra = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => qi("algorithm", e.algorithm),
	summary_detection_rule: (e) => qi("detection_rule", e.detectionRule),
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
}, sa = M;
function oa(e) {
	return P(e);
}
function la(e) {
	return JSON.stringify(e, null, 2);
}
const ua = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function ca(e = sa, t = !1) {
	return wa("codebook_csv", e, ua, void 0, t);
}
const da = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], ma = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function pa(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== f.MAIN_SLEEP) continue;
		const e = da.map((e) => fa(e, n)).join("\0"), i = t.get(e);
		i ? i.push(n) : t.set(e, [n]);
	}
	return t;
}
function* ga(e, t = !1) {
	const n = pa(e);
	let i = 0;
	const a = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > i && (i = t.length), t;
	}), r = da.map((e) => T[e].header);
	for (let o = 1; o <= i; o++) for (const [e] of ma) r.push(`night${String(o)}_${e}`);
	const s = r;
	yield t ? [...r, ...s.map((e) => e + "_missing_reason")].join(",") : r.join(",");
	for (const o of a) {
		const e = o[0], n = da.map((t) => fa(t, e)), a = da.map((t) => ha[t]?.(e) ? "" : _a[t] ?? "");
		for (let t = 0; t < i; t++) {
			const e = o[t];
			for (const [t, i] of ma) {
				const r = e ? fa(i, e) : "";
				n.push(r), a.push(r ? "" : e ? "date" === t ? "" : e.derivedMissingReasons?.[i] ?? e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? a : []].join(",");
	}
}
const ha = {
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
function fa(e, t) {
	return Hi(T[e], ha[e]?.(t) ?? null);
}
const _a = {
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
function wa(e, t, n, i, a = !1) {
	const r = i && i.length > 0 ? new Set(i) : null, s = Ji(e).filter((e) => null == r || r.has(T[e].header)), o = a ? s.filter((e) => _a[e]) : [], l = [[...s.map((e) => T[e].header), ...o.map((e) => T[e].header + "_missing_reason")].join(",")];
	for (const u of t) l.push([...s.map((e) => Hi(T[e], n[e]?.(u) ?? null)), ...o.map((e) => {
		const t = n[e]?.(u);
		return null == t || "" === t ? _a[e] ?? "" : "";
	})].join(","));
	return l.join("\n");
}
function ya(e, t, n = !1) {
	const i = wa("sleep_csv", e, ha, t, n), a = t?.length ? new Set(t) : null, r = [
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
	].filter((t) => (!a || a.has(T[t].header)) && e.some((e) => r.includes(t) && null == ha[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || s.includes(t) && e.metricMissingReason));
	return 0 === o.length ? i : c(i).records.map((t, n) => {
		if (0 === n) return t.text + "," + o.map((e) => `${T[e].header}_missing_reason`).join(",");
		const i = e[n - 1];
		return t.text + "," + o.map((e) => i.markerType === Yi ? "manual_nonwear_period" : i.markerType === Ki ? "invalid_night" : r.includes(e) ? null == ha[e]?.(i) ? "source_reported_missing" : "" : i.sensorMissingReasons?.[e] ?? i.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? i.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (s.includes(e) ? i.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
Ji("sleep_csv").map((e) => T[e].header);
const va = x("event_marker_csv", "local"), Ma = 86400, ba = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * Ma * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), ka = (e) => e < 10 ? `0${String(e)}` : String(e);
function xa(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / Ma), n = e - t * Ma;
	return `${ba(t)} ${ka(Math.floor(n / 3600))}:${ka(Math.floor(n / 60) % 60)}:${ka(n % 60)}`;
}
function Sa(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function Ia(e, t, n, i, a) {
	const r = [], s = ss(n, Zr.event, e), o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		a?.throwIfAborted();
		const e = Sa(l, ms(s, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await Qt(e, W(a)), u = new Set(ls(s, l.id, i).keys());
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
const Aa = S.invalid_night_row.markerTypeCell, Ra = x("actiware_interval_csv", "local"), Ta = (e, t) => Math.round(e) === Math.round(t);
function Na(e, t = !1) {
	const n = t ? Dn.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], i = [[
		...Ra,
		...n.map(([, e]) => e + "_missing_reason"),
		...t ? [
			"Participant ID_missing_reason",
			"Origin_missing_reason",
			"Analysis_missing_reason"
		] : []
	].join(",")], a = (e) => Number.isFinite(e) ? xa(Math.round(e)) : "";
	for (const { filename: r, participantId: s, studyDate: o, interval: u, statistics: c, invalidNight: d } of e) {
		const e = !0 === d && !Number.isFinite(u.startTimestamp), m = [
			r,
			s ?? "",
			o,
			d ? Aa : u.kind,
			e ? "" : u.source,
			a(u.startTimestamp),
			a(u.endTimestamp),
			e ? "" : u.origin,
			u.analysis ?? ""
		], p = n.map(([e]) => {
			if (d) return "invalid_night";
			if (!c || null != c[e]) return "";
			if (e.startsWith("off_wrist")) return "source_reported_missing";
			const t = /_(white|red|green|blue)(?:_percent)?$/u.exec(e)?.[1];
			return t && null == c["invalid_" + t + "_percent"] ? "source_reported_missing" : "";
		});
		i.push([
			...m.map((e) => l(e)),
			...Dn.map(([, e]) => c?.printed?.[e] ?? ""),
			...p,
			...t ? [
				s ? "" : "source_reported_missing",
				e ? "invalid_night" : u.origin ? "" : "source_reported_missing",
				u.analysis ? "" : d ? "invalid_night" : "not_applicable_to_row"
			] : []
		].join(","));
	}
	return `${i.join("\n")}\n`;
}
const Ea = "actiware_sleep_wake_export.csv", $a = x("actiware_sleep_wake_csv", "local");
async function Oa(e, t, n, i) {
	if (0 === e.scores.byteLength) return [];
	const a = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, r = n ?? new Set(await i.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((a - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), a])));
	return (await Promise.all([...r].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await Jt(t, void 0, void 0, i);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
async function Ca(e, t, n, i = s()) {
	return t || n ? (await Oa(e, t, n, i)).reduce((e, t) => e + t.end - t.start, 0) : e.scores.byteLength;
}
async function* La(e, t, n, i, a) {
	a?.throwIfAborted();
	const r = ss(n, Zr.actiwareSleepWake, e), s = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => r.actiwareFileData.find((t) => t.fileId === e.id)), l = function(e, t = !1) {
		const n = [[
			...$a,
			"Sleep/Wake_missing_reason",
			"Wake Threshold_missing_reason",
			...t ? ["Participant ID_missing_reason"] : []
		].join(",")];
		for (const i of e) n.push(Ba(i, i.epochTimestamp, i.sleepWake, t));
		return `${n.join("\n")}\n`;
	}([], !0);
	let u = [], c = 0, d = 0;
	const m = () => {
		a?.throwIfAborted();
		const e = function(...e) {
			const t = si(...e), n = [];
			for (;;) {
				const e = t.next();
				if (e.done) return {
					...e.value,
					reasons: n
				};
				n.push(e.value);
			}
		}(l + u.join("\n") + "\n", Ea, !0, { rowOffset: c }), t = c ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
			bytes: new TextEncoder().encode(t),
			rows: u.length,
			reasonRows: e.reasons.length,
			reasons: new TextEncoder().encode(ii(e.reasons, !1))
		};
		return c += u.length, u = [], d = 0, n;
	};
	for (const [p, g] of s.entries()) {
		a?.throwIfAborted();
		const e = o[p]?.actiwareSleepWake;
		if (!e) continue;
		const n = o[p]?.actiwareWakeThreshold, s = null != n && Number.isFinite(n) ? n : null, l = new Int8Array(e.scores), c = await Oa(e, t, new Set(ls(r, g.id, i).keys()), W(a));
		a?.throwIfAborted();
		for (const { date: t, start: i, end: a } of c) {
			const n = {
				filename: g.filename,
				participantId: g.participantId ?? null,
				studyDate: t,
				sleepDetection: Ce(e.params, "sleep_detection"),
				wakeThresholdSelection: Ce(e.params, "wake_threshold_selection"),
				wakeThreshold: s,
				...null === s ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
			};
			for (let t = i; t < a; t += 1) {
				const i = l[t], a = Ba(n, e.startTimestamp + t * e.epochSeconds, 0 === i || 1 === i ? i : null, !0);
				if (a.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
				u.push(a), d += a.length, (512 === u.length || d >= 32768) && (yield m());
			}
		}
	}
	u.length && (yield m()), a?.throwIfAborted();
}
function Ba(e, t, n, i) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		xa(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...i ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => l(e)).join(",");
}
const Da = Tn, Pa = new Uint8Array([3, 0]);
var ja = class extends Nt {
	flag = 3;
	constructor(e) {
		super(e), this.compression = 8;
	}
	process() {}
	emit(e, t) {
		this.ondata(null, e, t);
	}
};
async function* Fa(e) {
	const t = new TextDecoder();
	let n, i = "";
	for await (const a of async function* () {
		for await (const t of e) for (let e = 0; e < t.byteLength; e += Da) yield t.subarray(e, e + Da);
		yield null;
	}()) {
		const e = null === a;
		i += e ? t.decode() : t.decode(a, { stream: !0 });
		const r = c(i, e);
		if (e && r.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const s = r.remainder ?? "";
		if (s.length > Da || r.records.some((e) => e.text.length > Da)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
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
const Wa = "union_all";
function Ua(e) {
	return e.nonwearDetector ?? "union_all";
}
const za = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: Wa
}, Ga = {
	...za,
	minimumWakeWearMinutes: Le.minWearMinutesPerDay
};
function Va(e) {
	return e ? {
		...Ga,
		...e
	} : Ga;
}
function Ha(e, t) {
	const n = [];
	for (const i of e.values()) {
		for (const e of i.sleepMarkers) {
			const t = e.markerType === f.MAIN_SLEEP ? "main_sleep" : e.markerType === f.NAP ? "nap" : null;
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
function qa(e, t, n, i) {
	const a = Ua(t), r = "union_all" === a ? Object.entries(Te(e, n)) : [[a, Re(e, a, n)], ..."detach_nonwear" === a ? [] : [["detach_nonwear", Re(e, "detach_nonwear", n)]]], s = new Float64Array(e.timestamps);
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
function Ka(e) {
	return {
		excludeNonwear: e.excludeNonwear,
		excludeMainSleep: e.excludeMainSleep,
		excludeNaps: e.excludeNaps,
		useAlgorithmNonwear: e.useAlgorithmNonwear,
		useManualNonwear: e.useManualNonwear,
		minimumWakeWearMinutes: Number.isFinite(e.minimumWakeWearMinutes) ? Math.max(0, e.minimumWakeWearMinutes) : 0
	};
}
function Ya(e) {
	return {
		totalEpochs: e.totalEpochs,
		includedEpochs: e.includedEpochs,
		nonwearEpochs: e.nonwearEpochs,
		mainSleepEpochs: e.mainSleepEpochs,
		napEpochs: e.napEpochs,
		overlapEpochs: e.overlapEpochs
	};
}
function Ja(e, t) {
	return W(t).summarizePhysicalActivityDays(e);
}
async function Za(e, t = s()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
const Qa = C.PRESCHOOL_FREE_LIVING_RF_3_5;
function Xa(e) {
	const t = e.algorithmResults[Qa];
	return null != t && new Uint8Array(t).length > 0;
}
function er(e) {
	const t = e.algorithmResults[Qa];
	if (!t) return null;
	const n = new Uint8Array(t);
	return n.length > 0 ? n : null;
}
function tr(e) {
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
function nr(e) {
	return e instanceof Map ? nr([...e.entries()]) : Array.isArray(e) ? e.map(nr) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, nr(t)])) : e;
}
async function ir(e, t) {
	const { db: n, fileId: i, kind: a, inputs: r, signal: s } = e;
	s?.throwIfAborted();
	let o = n, l = null;
	if (o) try {
		const e = await o.activityDays.where("fileId").equals(i).primaryKeys();
		l = await D(JSON.stringify(nr({
			version: 1,
			core: "9e3111066519c566f8ef873ecc07d11a9fe6d7c3",
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
		await q(o, [o.physicalActivityFileSummaries], (e) => e.table(o.physicalActivityFileSummaries.name).put({
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
function ar(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function rr(e, t) {
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
function sr(e, t, n) {
	if (!n) return e.ruleLabel;
	const i = String(t.sedentaryMax), a = String(t.lightMin), r = String(t.moderateMin - 1), s = String(t.moderateMin), o = String(t.vigorousMin - 1), l = String(t.vigorousMin);
	return t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, non-sedentary >=${a} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, light ${a}-${r}, MVPA >=${s} counts/min` : `Custom cutpoints: Sed <=${i}, light ${a}-${r}, moderate ${s}-${o}, vigorous >=${l} counts/min`;
}
const or = [
	null,
	"sedentary",
	"light",
	"moderate",
	"vigorous"
];
async function lr(e) {
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
	const l = await W(e.signal).cutpointToneCodes(Float64Array.from(o, (e) => e.countsPerMinute), ar(i));
	let u = 0;
	const c = [];
	return o.forEach((e, t) => {
		const n = or[l[t] ?? 0];
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
function ur(e, t) {
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
function cr(e) {
	e.mvpaMinutesPerDay = e.totalDays > 0 ? e.mvpaMinutes / e.totalDays : 0, e.totalDays > 0 && (null != e.mvpaBouts && (e.mvpaBoutsPerDay = e.mvpaBouts / e.totalDays), null != e.sedentaryBreaks && (e.sedentaryBreaksPerDay = e.sedentaryBreaks / e.totalDays));
}
function dr(e, t) {
	e.sedentaryMinutes += t.sedentaryMinutes, e.lightMinutes += t.lightMinutes, e.moderateMinutes += t.moderateMinutes, e.vigorousMinutes += t.vigorousMinutes, e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes;
}
function mr(e, t, n, i) {
	if (0 === t.totalDays) return;
	e.totalDays += t.totalDays, dr(e, t.intensity), e.defaultIntensityMinutes && t.defaultIntensity && dr(e.defaultIntensityMinutes, t.defaultIntensity), null != t.mimsUnitTotal && (e.mimsUnitTotal = (e.mimsUnitTotal ?? 0) + t.mimsUnitTotal), e.totalEpochsReviewed = (e.totalEpochsReviewed ?? 0) + t.totalEpochs, e.includedEpochsReviewed = (e.includedEpochsReviewed ?? 0) + t.includedEpochs, e.wakeWearMinutes = (e.wakeWearMinutes ?? 0) + t.wakeWearMinutes, e.excludedNonwearMinutes = (e.excludedNonwearMinutes ?? 0) + t.excludedNonwearMinutes, e.excludedMainSleepMinutes = (e.excludedMainSleepMinutes ?? 0) + t.excludedMainSleepMinutes, e.excludedNapMinutes = (e.excludedNapMinutes ?? 0) + t.excludedNapMinutes, e.maskOverlapEpochs = (e.maskOverlapEpochs ?? 0) + t.overlapEpochs, e.maskPolicy = n;
	const a = t.bouts;
	a && (e.mvpaBouts = (e.mvpaBouts ?? 0) + a.mvpaBouts, e.mvpaBoutMinutes = (e.mvpaBoutMinutes ?? 0) + a.mvpaBoutMinutes, e.sedentaryBouts = (e.sedentaryBouts ?? 0) + a.sedentaryBouts, e.sedentaryBreaks = (e.sedentaryBreaks ?? 0) + a.sedentaryBreaks, i.total += a.meanSedentaryBoutMinutes * a.sedentaryBouts, e.meanSedentaryBoutMinutes = e.sedentaryBouts > 0 ? i.total / e.sedentaryBouts : 0);
}
async function pr(e) {
	const { file: t, days: n, summaries: i, markersByAnalysisDate: a, sensorNonwearPeriods: r, maskPolicy: s, validDayCriteria: o, cutpointMethods: l, choiAxis: u } = e, c = new Set([...a].filter(([, e]) => p(e)).map(([e]) => e)), d = Number.isFinite(t.epochLengthSeconds) && t.epochLengthSeconds > 0 ? t.epochLengthSeconds : 60, m = 60 / d, g = {
		policy: Ka(s),
		intervals: Ha(a, r)
	}, h = n.map((e) => qa(e, s, u, d)), f = n.map((e, t) => ({
		timestamps: new Float64Array(e.timestamps),
		epochSeconds: d,
		series: h[t]
	})), { dates: _, shortfall: w } = await async function({ days: e, countDays: t, epochSeconds: n, request: i, criteria: a, scoredDates: r, signal: s }) {
		if (!a) return {
			dates: null,
			shortfall: null
		};
		if (e.some((e) => !r.has(e.date))) return {
			dates: null,
			shortfall: null
		};
		const o = await Ja({
			...i,
			days: [...t]
		}, s), l = 86400 / n, u = await Za(e.map((e) => e.date), W(s)), c = e.map((e, t) => {
			const n = o.days[t].mask;
			return {
				date: e.date,
				wearMinutes: n.wakeWearMinutes,
				isWeekend: u[t],
				isPartialDay: n.totalEpochs < l
			};
		}), d = await async function(e, t = Le, n) {
			return W(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
		}(c, a, s);
		if (!d.meetsCriteria) {
			const e = a.requireWeekendDay && !d.hasWeekendValidDay ? ", including a weekend day" : "";
			return {
				dates: /* @__PURE__ */ new Set(),
				shortfall: `${String(d.validDays)} of the required ${String(a.minValidDaysPerParticipant)} valid days${e}`
			};
		}
		const m = await async function(e, t = Le, n) {
			const i = await W(n).validWearDays(Float64Array.from(e), t);
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
		request: g,
		criteria: o,
		scoredDates: c,
		signal: e.signal
	}), y = i.filter((e) => !(s.minimumWakeWearMinutes > 0 && (null == e.validHours || 60 * e.validHours < s.minimumWakeWearMinutes))).filter((e) => null != e.sedentaryMinutes && null != e.lpaMinutes && null != e.mvpaMinutes).filter((e) => !_ || _.has(e.analysisDate)).map((e) => ({
		sedentaryMinutes: e.sedentaryMinutes,
		lpaMinutes: e.lpaMinutes,
		mvpaMinutes: e.mvpaMinutes
	})), v = n.map((e) => !_ || _.has(e.date)), M = [];
	for (let p = 0; p < l.length; p++) {
		e.signal?.throwIfAborted();
		const i = l[p];
		if (De(i.method, t.sourceProfileId)) {
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
		const r = await Ja({
			...g,
			analysisKind: "count_cutpoint",
			thresholds: ar(i),
			defaultThresholds: ar(Oe[p]),
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
			const t = await Ja({
				...g,
				includeEpochDetails: !0,
				days: [f[o.index]]
			}, e.signal), a = await lr({
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
			const t = await Pe(i.method, d, e.signal);
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
			series: h[i],
			aggregate: v[i]
		}] : [];
	}), k = async (t, n) => {
		if (e.signal?.throwIfAborted(), 0 === t.length) return null;
		const i = await Ja({
			...g,
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
		preschoolRf: await k(b(er, "classifier"), "preschool_classifier")
	};
}
async function gr(e = {}) {
	const t = await ee(e.dbOverride, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = e.username ?? "anonymous", i = e.maskPolicy ?? za, a = e.validDayCriteria, r = Be("ggir_enmo"), s = Be("mims"), o = Be("preschool_free_living_rf_3_5"), l = ur({
		method: r.method,
		label: r.label,
		requiredSignal: r.requiredSignal,
		sourceLabel: r.signalLabel,
		ruleLabel: "Uses imported GGIR daily sedentary, LPA, and MVPA summaries",
		unavailableAction: "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."
	}, null), u = W(e.signal), c = await Promise.all(Oe.map((t) => async function(e, t, n) {
		const i = t[e.method];
		if (!i) return e;
		const a = await Ne(i, n);
		if (!a) return e;
		const r = ar(e);
		return {
			...e,
			ruleLabel: sr(e, a, JSON.stringify(a) !== JSON.stringify(r)),
			cutpointBands: rr(a, e.cutpointBands),
			cutpointScaleMax: Math.max(e.cutpointScaleMax ?? 1, ...Object.values(a).filter(Number.isFinite)),
			...a
		};
	}(t, e.cutpointOverrides ?? {}, u))), d = c.map((e, t) => function(e, t) {
		return {
			...ur(e, null),
			cutpointThresholds: ar(e),
			defaultCutpointThresholds: ar(t),
			cutpointEditable: !0,
			defaultIntensityMinutes: {
				sedentaryMinutes: 0,
				lightMinutes: 0,
				moderateMinutes: 0,
				vigorousMinutes: 0,
				mvpaMinutes: 0
			}
		};
	}(e, Oe[t])), m = new Array(c.length).fill(!1), p = [], g = ur({
		method: s.method,
		label: s.label,
		requiredSignal: s.requiredSignal,
		sourceLabel: s.signalLabel,
		ruleLabel: "Uses stored MIMS_UNIT epoch values from actours; intensity cutpoints/equating are not applied in this row.",
		unavailableAction: "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values.",
		unavailableStatus: "backend_required"
	}, null);
	g.mimsUnitTotal = 0, g.mimsUnitPerDay = 0;
	const h = ur({
		method: o.method,
		label: o.label,
		requiredSignal: o.requiredSignal,
		sourceLabel: o.signalLabel,
		ruleLabel: "Uses actimetric Preschool Wrist Random Forest Free Living Lag-Lead classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
		unavailableAction: "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.",
		unavailableStatus: "backend_required"
	}, null), f = Be("hildebrand_enmo_wrist_2014"), _ = ur({
		method: f.method,
		label: f.label,
		requiredSignal: f.requiredSignal,
		sourceLabel: f.signalLabel,
		ruleLabel: "Hildebrand 2014 non-dominant wrist ENMO (mg) cut-points: MVPA >=201 mg, vigorous >=707 mg; light near ~45 mg. Applied to a calibrated ENMO (mg) epoch signal, never to ActiGraph counts.",
		unavailableAction: "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline; the browser count pipeline does not compute ENMO mg.",
		unavailableStatus: "needs_signal"
	}, null);
	let w = !1, y = !1, v = !1, M = !1;
	const b = Ie(), k = c.map(() => ({ total: 0 })), x = { total: 0 };
	for (const I of t) {
		if (e.signal?.throwIfAborted(), !I.id) continue;
		const t = I.id, r = await Y(t, e.dbOverride), s = await J(t, n, e.dbOverride), o = await Z(t, e.dbOverride), u = await ir({
			db: e.dbOverride ?? null,
			fileId: t,
			kind: "analysis",
			...e.signal ? { signal: e.signal } : {},
			inputs: {
				epochLengthSeconds: I.epochLengthSeconds,
				sourceProfileId: I.sourceProfileId ?? null,
				summaries: r,
				markers: tr(s),
				sensorNonwearPeriods: o,
				maskPolicy: i,
				validDayCriteria: a ?? null,
				thresholds: c.map(ar),
				choiAxis: b
			}
		}, async () => pr({
			file: I,
			days: [...(await le(t, e.dbOverride, e.activityDayMemo)).values()],
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
			e.signalSeen && (m[t] = !0), mr(n, e.totals, i, k[t]), e.previewTrace && !n.previewTrace && (n.previewTrace = e.previewTrace), e.epochMismatch && !n.epochMismatch && (n.epochMismatch = e.epochMismatch);
		}), u.mims && (u.mims.signalSeen && (v = !0), mr(g, u.mims.totals, i, x)), u.preschoolRf && (u.preschoolRf.signalSeen && (M = !0), mr(h, u.preschoolRf.totals, i, x));
	}
	for (let I = 0; I < d.length; I++) {
		const e = d[I], t = c[I];
		e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes, 0 === e.totalDays && (e.available = !1, e.status = m[I] ? "ready" : "needs_signal", e.unavailableReason = m[I] ? p.length > 0 ? `Excluded by the valid-days-per-participant rule: ${p.join("; ")}. Change it in Study Settings → valid-day criteria.` : `No local ${e.sourceLabel.toLowerCase()} days meet the minimum wake-wear rule.` : w ? `No local ${e.sourceLabel.toLowerCase()} days are available.` : "No local activity epochs are available.", e.nextStepLabel = t.unavailableAction), cr(e);
	}
	l.moderateMinutes = l.mvpaMinutes, cr(l), 0 === l.totalDays && (l.available = !1, l.status = y ? "ready" : "needs_signal", l.unavailableReason = y ? "No local GGIR daily summaries meet the current inclusion rules." : "No local GGIR daily summaries are available. Import raw/5-second-capable files to populate ENMO summaries.", l.nextStepLabel = "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."), g.totalDays > 0 ? (g.available = !0, g.status = "ready", g.unavailableReason = null, g.nextStepLabel = null, g.mimsUnitPerDay = (g.mimsUnitTotal ?? 0) / g.totalDays) : (g.available = !1, g.status = v ? "ready" : "backend_required", g.unavailableReason = v ? "No stored MIMS_UNIT epoch days meet the current inclusion rules." : "No MIMS_UNIT epoch values are stored in this workspace yet. This becomes ready when the actours MIMS backend/WASM build computes and stores MIMS_UNIT epochs.", g.nextStepLabel = "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values."), cr(_), _.available = !1, _.status = "needs_signal", _.unavailableReason = "No calibrated ENMO (mg) epoch stream is available in this workspace. ENMO (mg) is a raw/GGIR-derived signal; the browser count pipeline does not produce it, so this method cannot classify counts against Hildebrand mg thresholds.", _.nextStepLabel = "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline.", cr(h), h.totalDays > 0 ? (h.available = !0, h.status = "ready", h.unavailableReason = null, h.nextStepLabel = null) : (h.available = !1, h.status = M ? "ready" : "backend_required", h.unavailableReason = M ? "No stored preschool wrist RF class days meet the current inclusion rules." : "No actimetric-compatible preschool wrist RF class epochs are stored in this workspace yet. This becomes ready when actours/WASM computes 15 s classes for 3-5 year-old wrist data.", h.nextStepLabel = "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.");
	const S = t.map((e) => e.sourceProfileId);
	return [
		l,
		h,
		...d,
		_,
		g
	].filter((e) => $e(e.method, S));
}
const hr = [
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
function fr(e, t) {
	if (!t) return !0;
	const [n, i] = t;
	return e >= n && e <= i;
}
function _r(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function wr(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function yr(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
function vr(e) {
	const t = Ee.find((t) => t.method === e);
	if (t) return {
		family: t.family,
		requiredSignal: t.requiredSignal,
		computationOwner: t.backendOwner ?? "browser_workspace",
		frontendComputesMetric: t.frontendComputesMetric,
		statusWhenMissing: t.statusWhenMissing
	};
	const n = Be(e), i = "ready" === n.statusWhenMissing ? "needs_signal" : n.statusWhenMissing;
	return {
		family: n.family,
		requiredSignal: n.requiredSignal,
		computationOwner: n.backendDependency ?? "browser_workspace",
		frontendComputesMetric: "count_cutpoint" === n.family,
		statusWhenMissing: i
	};
}
function Mr(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function br(e, t, n) {
	return "default" === n ? e.ruleLabel : t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, non-sedentary >=${String(t.lightMin)} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, MVPA >=${String(t.moderateMin)} counts/min` : `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, moderate ${String(t.moderateMin)}-${String(t.vigorousMin - 1)}, vigorous >=${String(t.vigorousMin)} counts/min`;
}
function kr(e) {
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
async function xr(e, t, n = {}, i) {
	const a = await ee(i), r = (e.length > 0 ? a.filter((t) => null != t.id && e.includes(t.id)) : a).sort((e, t) => e.filename.localeCompare(t.filename)), s = [], o = n.username ?? "anonymous", l = n.maskPolicy ?? za, u = n.choiAxis ?? Ie(), c = Ua(l), d = n.cutpointOverrides, m = n.cutpointPresetNames, p = W(n.signal), g = await Promise.all(Oe.map((e) => async function(e, t, n, i) {
		const a = t?.[e.method], r = a ? await Ne(a, i) : null;
		return r ? {
			thresholds: r,
			source: "custom",
			presetName: n?.[e.method] ?? ""
		} : {
			thresholds: Mr(e),
			source: "default",
			presetName: ""
		};
	}(e, d, m, p))), h = n.inclusionRulePresetName ?? "", f = n.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), _ = Be("ggir_enmo"), w = Be("mims"), y = Be("preschool_free_living_rf_3_5"), v = vr("ggir_enmo"), M = vr("mims"), b = vr("preschool_free_living_rf_3_5");
	for (const k of r) {
		if (n.signal?.throwIfAborted(), !k.id) continue;
		if (!0 === k.ggirSummariesNeedRecompute) throw new Error(`${k.filename}: its GGIR summaries were not recomputed for the current study settings. In Study settings, run Rescore (offered for every file whose summaries are refused) before exporting.`);
		const e = k.participantId ?? "", a = Number.isFinite(k.epochLengthSeconds) && k.epochLengthSeconds > 0 ? k.epochLengthSeconds : 60, r = await Y(k.id, i);
		for (const n of r) fr(n.analysisDate, t) && s.push({
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
		const d = [...(await le(k.id, i, n.activityDayMemo)).entries()].filter(([e]) => fr(e, t)).sort(([e], [t]) => e.localeCompare(t)).map(([, e]) => e), m = await J(k.id, o, i), p = await Z(k.id, i), x = {
			policy: Ka(l),
			intervals: Ha(m, p)
		}, S = d.map((e) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: a,
			series: qa(e, l, u, a)
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
			const r = await Ja({
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
		} : null, R = [], T = Oe.map((e) => null !== De(e.method, k.sourceProfileId));
		for (const [t, n] of Oe.entries()) T[t] ? R.push([]) : R.push(await I((e, t) => {
			const i = new Float64Array("axisY" === n.axis ? e.axisY : e.vectorMagnitude);
			return i.length > 0 && i.length === S[t].timestamps.length ? {
				...S[t],
				values: i
			} : null;
		}, {
			analysisKind: "count_cutpoint",
			thresholds: g[t].thresholds
		}));
		const N = await I((e, t) => A(er(e), "classifier", e, t), { analysisKind: "preschool_classifier" }), E = await I((e, t) => A(e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output", e, t), { analysisKind: "mims_volume" }), $ = await Promise.all(Oe.map((e) => Pe(e.method, a, n.signal)));
		for (const [t, n] of d.entries()) {
			const i = n.date;
			for (const [n, d] of Oe.entries()) {
				if (T[n]) continue;
				const r = g[n], u = br(d, r.thresholds, r.source), m = vr(d.method), p = $[n], _ = kr(R[n][t]);
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
			const r = kr(N[t]);
			null === De("preschool_free_living_rf_3_5", k.sourceProfileId) && s.push({
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
			const u = kr(E[t]);
			null === De("mims", k.sourceProfileId) && s.push({
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
hr.join(","), Oe.length;
var Sr = n({
	editsFromMarkers: () => Cr,
	getGgirMarkerInputs: () => Lr,
	ggirNightRecords: () => Or,
	hasGgirRecomputeFailure: () => Nr,
	mergeGgirSleepMarkers: () => $r,
	recomputeGgirResults: () => Pr,
	recoverPendingGgirRecomputes: () => jr,
	reviewGgirResultsForMarkers: () => Wr,
	scheduleGgirRecompute: () => Dr
});
const Ir = new EventTarget(), Ar = /* @__PURE__ */ new WeakMap(), Rr = 800, Tr = "Update GGIR review";
function Nr(e, t, n) {
	return z.getState().jobs[`${n.name}:${Br(e, t)}`]?.status === H.FAILED;
}
function Er(e, t, n, i, a) {
	if (a?.aborted || function(e) {
		return e instanceof Error && e.name === y.errnames.DatabaseClosed;
	}(i)) return;
	const r = Br(e, t), s = `${n.name}:${r}`, o = z.getState();
	o.jobs[s]?.controller.signal.aborted || o.jobs[s]?.status === H.ELSEWHERE || (o.update(s, {
		id: s,
		key: r,
		workspaceId: n.name,
		kind: U.GGIR_RECOMPUTE,
		label: Tr,
		controller: o.jobs[s]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: H.FAILED
	}), n.isOpen() && V() === n && Ir.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function $r(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function Or(e, t, n, i = [], a) {
	const r = Q([...n.values()].flat(), !0), s = r?.algorithm ?? ke(t), o = r?.detectionRule ?? null, l = /* @__PURE__ */ new Map();
	for (const [d, m] of n) {
		const e = Q(m, !0);
		e && l.set(d, [{
			...e,
			algorithm: s,
			detectionRule: o
		}]);
	}
	const u = Se(t), c = u.length ? await W(a).ggirLabelsToStoredMs(Float64Array.from(u.flatMap((e) => [e.onsetMs, e.wakeMs])), i) : [];
	for (const [d, m] of u.entries()) {
		const t = l.get(m.nightDate)?.[0], n = he(m, t);
		"scored" !== n.kind && "invalid" !== n.kind ? l.set(m.nightDate, [{
			fileId: e,
			date: m.nightDate,
			username: de,
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
			sleepMarkers: $r({
				markerType: f.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: c[2 * d] / 1e3,
				offsetTimestamp: c[2 * d + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : l.set(m.nightDate, t ? [t] : []);
	}
	return l;
}
async function Cr(e, t, n = [], i) {
	const a = ve(e).flatMap((e) => {
		const n = he(e, t.get(e.nightDate));
		return "scored" === n.kind && null != n.main.onsetTimestamp && null != n.main.offsetTimestamp ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === a.length) return [];
	const r = W(i), s = await r.storedToGgirLabelsMs(Float64Array.from(a.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await r.wallClockLabels(Float64Array.from([...s, ...a.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * a.length;
	return a.flatMap(({ w: e }, t) => {
		const n = o[2 * t], i = o[2 * t + 1];
		return n !== o[l + 2 * t] || i !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: i
		}] : [];
	});
}
async function Lr(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [i, a] = await Promise.all([ne(e, t, n), K(e, n)]), r = new Map([...i].flatMap(([e, t]) => {
			const n = Q(t, !0);
			return n ? [[e, n]] : [];
		})), s = a?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([s ?? [], [...r].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				he(void 0, t)
			])]),
			markers: r,
			clockSteps: s,
			bundleRevision: a?.ggirBundleRevision
		};
	});
}
function Br(e, t) {
	return `${U.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function Dr(e, t, n, i) {
	if (!n.isOpen() || V() !== n || i?.aborted) return;
	let a = Ar.get(n);
	a || (a = /* @__PURE__ */ new Map(), Ar.set(n, a));
	const r = Br(e, t);
	clearTimeout(a.get(r)), a.set(r, setTimeout(() => {
		a.delete(r), n.files.get(e).then((a) => {
			if (a?.ggirBundleRevision && n.isOpen() && V() === n && !i?.aborted) return Pr(e, t, n, i);
		}).catch((a) => {
			i?.aborted || a instanceof DOMException && "AbortError" === a.name || (Er(e, t, n, a, i), n.isOpen() && V() === n && (console.error("[ggir-results] recompute failed."), se("error", "GGIR results recompute failed", oe(a))));
		});
	}, Rr));
}
function Pr(e, t, n, i, a = !0) {
	const r = (s, o = i) => F({
		kind: U.GGIR_RECOMPUTE,
		key: Br(e, t),
		label: Tr,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (i) => {
			i.signal.throwIfAborted();
			const o = await async function(e, t, n, i, a) {
				if (i.throwIfAborted(), !n.isOpen() || V() !== n) return null;
				const { markerInputs: r, markers: s, clockSteps: o, bundleRevision: l } = await Lr(e, t, n);
				if (!l) return null;
				const u = await n.ggirScorerReviews.get([e, t]);
				if (!n.isOpen() || V() !== n) return null;
				if (i.throwIfAborted(), u?.markerInputs === r && u.bundleRevision === l) return a && Ir.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), u.current ?? null;
				const c = await _(n, e);
				if (!c) return null;
				const d = await Cr(c.imported, s, o, i);
				if (!n.isOpen() || V() !== n) return null;
				const m = Fr(u, l, d) ? u.current : (await Wr(c, s, o, d, i)).current;
				i.throwIfAborted();
				const p = (/* @__PURE__ */ new Date()).toISOString();
				if (!n.isOpen() || V() !== n) return null;
				const g = await q(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!n.isOpen() || V() !== n) return null;
					const a = await Lr(e, t, n);
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
				return g ? (Ir.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), i.throwIfAborted(), m ?? c.imported) : (i.throwIfAborted(), !1 !== g && null);
			}(e, t, n, i.signal, a);
			return i.signal.throwIfAborted(), !1 !== o ? o : (s < 2 && r(s + 1, i.signal).catch((a) => Er(e, t, n, a, i.signal)), null);
		}
	});
	return r(0);
}
function jr(e, t) {
	return F({
		kind: U.GGIR_RECOVERY,
		key: U.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const i = () => !t.signal.aborted && e.isOpen() && V() === e;
			try {
				if (!i()) return;
				const r = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: s } = await import("./local-data-source-_0c00IIq.js").then((e) => e.n);
				for (const o of r) {
					if (t.signal.throwIfAborted(), !i()) return;
					try {
						const [r] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), s(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), u = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...r.map((e) => e.scorer)]);
						u.delete(de);
						for (const s of u) {
							if (!i()) return;
							try {
								const n = Nr(o, s, e);
								if (!n) {
									const { markerInputs: t, bundleRevision: n } = await Lr(o, s, e), i = r.find((e) => e.scorer === s);
									if (n && i?.markerInputs === t && i.bundleRevision === n) continue;
								}
								await Pr(o, s, e, t.signal, n);
							} catch (a) {
								n = !0, Er(o, s, e, a, t.signal);
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
				const a = Object.values(z.getState().jobs).filter((t) => G(t) && t.workspaceId === e.name && t.kind === U.GGIR_RECOMPUTE && t.status === H.FAILED);
				for (const t of a) {
					const a = t.key.slice(U.GGIR_RECOMPUTE.length + 1);
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
							i() && (0 === n || 0 === a && 0 === r) && (z.getState().dismiss(t.id), Ir.dispatchEvent(new CustomEvent("updated", { detail: {
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
function Fr(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
async function Wr(e, t, n = [], i, a, r) {
	const s = i ?? await Cr(e.imported, t, n, a);
	let o;
	a?.throwIfAborted();
	const l = r?.review;
	if (Fr(l, r?.bundleRevision, s)) o = l.current;
	else if (s.length > 0 && e.ms2 && e.ms3) {
		const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), i = t(e.ms3), r = t(e.ms4), l = t(e.ms5), u = t(e.sleeplogRData);
		o = Me(await j(a, (t) => t.reviewGgirResults({
			part1: new Uint8Array(e.part1),
			configCsv: e.configCsv,
			recordingId: v(e.recordingFile),
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
const Ur = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], zr = [
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
], Gr = [
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
], Vr = [
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
], Hr = ["fileId", ...m], qr = {
	files: [
		...Ur,
		"ggirTimezone",
		"recording",
		"ggirClockSteps"
	],
	markers: zr,
	activityDays: Gr,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: Vr
}, Kr = {
	files: [...Ur, "ggirClockSteps"],
	markers: zr,
	activityDays: Gr,
	ggirResultsBundles: Vr,
	ggirResultsBlobs: Hr,
	ggirScorerReviews: [
		"fileId",
		"scorer",
		"current",
		"edits",
		"bundleRevision"
	]
}, Yr = {
	ggirResultsBundles: [
		"fileId",
		"ggirCorrections",
		"ggirCorrectionsNotApplied",
		"configCsv"
	],
	files: ["id"],
	localExecutions: ["fileId", "attestationId"],
	diaryEntries: [
		"fileId",
		"analysisDate",
		"importMappingProvenance"
	]
}, Jr = {
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
}, Zr = {
	sleep: qr,
	nonwear: qr,
	summary: qr,
	wide: qr,
	circadian: {
		files: Ur,
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
	ggirReport: Kr,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: zr,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: Ur,
		markers: zr,
		actiwareFileData: [
			"fileId",
			"actiwareIntervals",
			"actiwareStatistics",
			"actiwareStatisticsNeedsRecompute"
		],
		actiwareStatisticsInputs: ["fileId", "input"]
	},
	actiwareSleepWake: {
		files: Ur,
		markers: zr,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: Yr,
	audit: Jr,
	ggirResults: {
		...Yr,
		...qr,
		...Kr,
		auditLog: Jr.auditLog,
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
			$
		]
	}
}, Qr = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap();
function es(e, t, n, i) {
	for (let a = 0; a < n.byteLength;) {
		const r = n.subarray(a, a + Tn), s = e[t](r, { at: i + a });
		if (!Number.isInteger(s) || s <= 0 || s > r.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		a += s;
	}
}
function ts(e) {
	if (!e || "object" != typeof e) return e;
	const t = Xr.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return es(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(ts) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, ts(t)])) : structuredClone(e);
}
function ns(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(ns), Object.freeze(e)), e;
}
const is = [
	"sleep",
	"circadian",
	"ggirReport",
	"event"
];
var as = class extends Error {};
function rs(e, t, n) {
	const i = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new as(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (i(t), Reflect.get(e, t, n)),
		has: (e, t) => (i(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (i(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function ss(e, t, n = []) {
	const i = Qr.get(e);
	if (!i) throw new as("Export requires a captured input snapshot");
	const a = Object.entries(Zr).find(([, e]) => e === t)?.[0];
	if (!a) throw new as("Export producer has no registered input declaration");
	const r = {};
	for (const [s, o] of Object.entries(t)) {
		const e = i[s].filter((e) => !n.length || "studySettings" === s || n.includes("files" === s ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const i of o.filter((e) => e in t)) Object.defineProperty(n, i, {
				enumerable: !0,
				get: () => ns(ts(t[i]))
			});
			return rs(n, o, `${a}: undeclared field ${s}.`);
		});
		Object.assign(r, { [s]: Object.freeze(e) });
	}
	return rs(r, Object.keys(t), `${a}: undeclared table `);
}
function os(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	for (const a of e.markers) {
		if (a.fileId !== t || a.username !== n) continue;
		const e = me(a), r = i.get(a.date) ?? [];
		r.push(e), i.set(a.date, r);
	}
	return i;
}
function ls(e, t, n) {
	return new Map([...os(e, t, n)].flatMap(([e, t]) => {
		const n = Q(t.filter(p));
		return n ? [[e, n]] : [];
	}));
}
const us = /* @__PURE__ */ new WeakMap();
function cs(e, t, n, i) {
	let a = us.get(e);
	a || (a = /* @__PURE__ */ new Map(), us.set(e, a));
	const r = JSON.stringify([t, n]);
	let s = a.get(r);
	return s || (a.clear(), s = async function(e, t, n, i) {
		const a = ss(e, Zr.ggirReport, [t]), r = a.files.find((e) => e.id === t), s = a.ggirResultsBundles.find((e) => e.fileId === t), o = s && g(s, a.ggirResultsBlobs.find((e) => e.fileId === t)), l = os(a, t, n), u = o ? await Or(t, o.imported, l, r.ggirClockSteps, i) : l, c = new Map([...u].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), d = new Set([...c].filter(([, e]) => "invalid" === he(void 0, e).kind).map(([e]) => e)), m = {
			review: a.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n),
			bundleRevision: r.ggirBundleRevision
		}, p = o ? await Wr(o, c, r.ggirClockSteps, void 0, i, m) : void 0, h = p ? await ds(p, d, i) : void 0;
		return {
			markersByAlgo: u,
			selected: c,
			bundle: h,
			sets: o && p ? await Promise.all(ye(o).map(async ({ bundle: e }) => e === o ? h : ds(await Wr(e, c, r.ggirClockSteps, p.edits, i), d, i))) : [],
			invalidDates: d
		};
	}(e, t, n, i), a.set(r, s), s.catch(() => {
		a.get(r) === s && a.delete(r);
	})), s;
}
async function ds(e, t, n) {
	const { ggirCell: i, ggirNum: a } = await import("./ggir-results-types-WB8axvb-.js").then((e) => e.i), r = e.part2Reports?.["part2_daysummary.csv"], s = e.cleanedNightsCsv ? await W(n).readGgirReportCsv(e.cleanedNightsCsv, e.configCsv) : void 0, o = /* @__PURE__ */ new Map();
	if (r) for (let c = 0; c < r.rows; c++) {
		const e = i(r, T.ggir_id.header, c), t = pi(i(r, T.ggir_calendar_date.header, c));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		o.set(n, o.has(n) ? null : c);
	}
	const l = gi(e.imported, "nights"), u = async (e) => {
		const t = e.nights, u = await Promise.all(Array.from({ length: t.rows }, async (u, c) => {
			const d = i(t, T.ggir_id.header, c), m = o.get(JSON.stringify([null == d ? null : String(d), l(t, c, !1)])), p = r && null != m ? i(r, T.ggir_day_valid_hours.header, m) : null, g = r && null != m ? i(r, T.ggir_day_hours.header, m) : null, h = r && null != m ? a(r, T.ggir_day_valid_hours.header, m) : null, f = r && null != m ? a(r, T.ggir_day_hours.header, m) : null, _ = null != h && null != f ? await W(n).ggirDayValidFraction(h, f) : null, w = a(t, T.ggir_night.header, c), y = Array.from({ length: e.days.rows }, (e, t) => t).find((t) => "WW" === i(e.days, "window", t) && a(e.days, "night_number", t) === w), v = s ? Array.from({ length: s.rows }, (e, t) => t).find((e) => String(i(s, T.ggir_id.header, e)) === String(d) && a(s, T.ggir_night.header, e) === w) : void 0, M = {
				ggir_nonwear_perc_spt: e.nightRecomputed[c] ? void 0 === y ? null : i(e.days, T.ggir_nonwear_perc_spt.header, y) : t.columns.includes(T.ggir_nonwear_perc_spt.header) ? i(t, T.ggir_nonwear_perc_spt.header, c) : s?.columns.includes(T.ggir_nonwear_perc_spt.header) && void 0 !== v ? i(s, T.ggir_nonwear_perc_spt.header, v) : void 0 === y ? null : i(e.days, T.ggir_nonwear_perc_spt.header, y),
				ggir_day_valid_hours: p,
				ggir_day_hours: g,
				ggir_day_valid_fraction: _ ?? null
			}, b = (r ? null === m ? "duplicate_part2_day" : void 0 === m ? "no_matching_part2_day" : null : "source_reported_missing") ?? "source_reported_missing";
			return {
				values: M,
				reasons: {
					ggir_day_valid_hours: null == h ? b : null,
					ggir_day_hours: null == f ? b : null,
					ggir_day_valid_fraction: null != _ ? null : null != f && f <= 0 ? "not_applicable_to_row" : b
				}
			};
		})), c = N.ggir_review_night_extension, d = [.../* @__PURE__ */ new Set([
			...t.columns,
			...c.map((e) => T[e].header),
			...c.map((e) => T[e].header + "_missing_reason")
		])], m = d.map((e) => {
			const n = c.find((t) => T[t].header + "_missing_reason" === e);
			if (n) return u.map((e) => e.reasons[n] ?? null);
			const i = c.find((t) => T[t].header === e);
			return i ? u.map((e) => e.values[i] ?? null) : t.values[t.columns.indexOf(e)];
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
		...e.personReports && (e.edits.length > 0 || t.size > 0) ? { personRecomputed: await yi(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await u(e.imported),
		...e.current ? { current: await u(e.current) } : {}
	};
}
function ms(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function ps(e) {
	return ss(e, Zr.ggirResults).studySettings.flatMap((e) => X(e).map((e) => ({
		file: "sleep_export.csv",
		row: 0,
		key: e.filename,
		column: `${e.category}: ${e.reason}`,
		reason: "not_computed_for_export"
	})));
}
const gs = "not included", hs = "included if produced";
function fs(e) {
	const t = e.artifacts ?? null, n = t ? null : e.planned ?? null, i = e.columns, a = t ? t.sleepRows.length : n?.sleepRows ?? null, r = t ? t.sleepRows.filter((e) => e.markerType === f.MAIN_SLEEP).length : n?.mainSleepRows ?? null, s = t ? pa(t.sleepRows).size : n?.wideRows ?? null, o = t ? t.summaryRows.length : n?.summaryRows ?? null, u = t ? t.nonwearRows.length : n?.nonwearRows ?? null, d = t ? t.physicalActivityRows.length : n?.activityRows ?? null, m = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : n?.activityDates ?? null, p = t ? t.eventMarkerRows?.length ?? 0 : n?.eventMarkerRows ?? null, g = t ? t.actiwareIntervalRows?.length ?? 0 : n?.actiwareIntervalRows ?? null, h = t ? t.actiwareSleepWakeCsv?.rows ?? 0 : n?.actiwareSleepWakeRows ?? null, _ = n?.actogramFiles ?? null, w = t ? Object.keys(t.ggirEntries) : null, y = (w ? w.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
		const n = Math.max(0, c(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
		return {
			name: e,
			include: n > 0,
			rows: n
		};
	}) : n ? [...$i([...n.part4Rows.keys()])].map(([e, t]) => ({
		name: t,
		include: n.ggirMainSleepGroupKeys.includes(e),
		rows: n.part4Rows.get(e) ?? null
	})) : []).sort((e, t) => e.name.localeCompare(t.name)), v = w ? w.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [Ti, ...n?.ggirReviewEntries ?? []], M = (e) => null == e ? null : e > 0, b = (n, a, r) => {
		const s = null == a ? "unknown" : a ? "included" : "not_included";
		return "included" !== s ? {
			name: n,
			state: s,
			rows: null,
			detail: "unknown" === s ? r.detail : gs,
			estimatedBytes: 0,
			write: null
		} : {
			name: n,
			state: s,
			rows: r.rows,
			detail: r.detail,
			estimatedBytes: r.estimatedBytes ?? ((r.rows ?? 0) + 1) * (r.columns ?? i) * 12,
			write: t ? () => r.csv ? ji(r.csv(t)) : r.encode(t) : null,
			...t && (r.chunkField || r.wide) ? { batches: function* () {
				if (r.wide) {
					const e = ga(t.sleepRows, !0), n = e.next().value;
					for (const t of e) {
						const e = n + "\n" + t;
						yield {
							bytes: ji(e),
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
						}, s = !e.selectedColumns?.length || "sleepRows" !== r.chunkField && "nonwearRows" !== r.chunkField ? void 0 : ya(a[r.chunkField], void 0, !0), o = r.csv(a);
						yield {
							bytes: ji(o),
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
			detail: null == a ? hs : `${String(a)} rows · ${String(i)} columns`,
			chunkField: "sleepRows",
			csv: (t) => ya(t.sleepRows, e.selectedColumns ?? void 0, !0)
		}),
		b("sleep_export_wide.csv", !!e.includeWideFormat && M(s ?? r), {
			rows: s,
			detail: null == s ? hs : `${String(s)} participant group ${1 === s ? "row" : "rows"}`,
			wide: !0,
			csv: (e) => function(e, t = !1) {
				return [...ga(e, t)].join("\n");
			}(e.sleepRows, !0)
		}),
		b("summary_export.csv", M(o ?? r), {
			rows: o,
			detail: null == o ? hs : `${String(o)} participant ${1 === o ? "row" : "rows"}`,
			chunkField: "summaryRows",
			csv: (e) => function(e, t = !1) {
				const n = wa("summary_csv", e, ra, void 0, t), i = [
					"summary_mean_temperature_c",
					"sleep_regularity_index",
					...Object.values(aa).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
				];
				return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? c(n).records.map((t, n) => 0 === n ? t.text + "," + i.map((e) => T[e].header + "_missing_reason").join(",") : t.text + "," + i.map((t) => {
					const i = e[n - 1];
					return "summary_mean_temperature_c" === t ? null == i.meanTemperature ? i.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? i.sleepRegularityMissingReason ?? "" : i.metricMissingReasons?.[t] ?? "";
				}).join(",")).join("\n") : n;
			}(e.summaryRows, !0)
		}),
		b("nonwear_export.csv", M(u), {
			rows: u,
			detail: null == u ? hs : `${String(u)} periods`,
			chunkField: "nonwearRows",
			csv: (t) => ya(t.nonwearRows, e.selectedColumns ?? void 0, !0)
		}),
		b("event_markers_export.csv", M(p), {
			rows: p,
			detail: null == p ? hs : `${String(p)} button ${1 === p ? "press" : "presses"}`,
			columns: va.length,
			chunkField: "eventMarkerRows",
			csv: (e) => function(e, t = !1) {
				const n = [[...va, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
				for (const i of e) n.push([
					i.filename,
					i.participantId ?? "",
					i.studyDate,
					xa(i.localTimestamp),
					null == i.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (i.localTimestamp - 60 * i.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
					...t ? [i.participantId ? "" : "source_reported_missing", null == i.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
				].map((e) => l(e)).join(","));
				return `${n.join("\n")}\n`;
			}(e.eventMarkerRows ?? [], !0)
		}),
		b("actiware_intervals_export.csv", M(g), {
			rows: g,
			detail: null == g ? hs : `${String(g)} Actiware intervals`,
			columns: Ra.length,
			chunkField: "actiwareIntervalRows",
			csv: (e) => Na(e.actiwareIntervalRows ?? [], !0)
		}),
		b(Ea, M(h), {
			rows: h,
			detail: null == h ? hs : `${String(h)} Actiware Sleep/Wake epochs`,
			columns: $a.length,
			encode: (e) => e.actiwareSleepWakeCsv.bytes
		}),
		b("physical_activity_export.csv", M(d), {
			rows: d,
			detail: null == d || null == m ? hs : `${String(d)} rows · ${String(m)} distinct dates`,
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
				]), s = e.some((e) => "ggir_enmo" === e.method) ? hr.filter((e) => !a.has(e) && (qn.has(e) || r.has(e))) : [], o = [
					"Participant ID",
					"Threshold Preset Name",
					"Inclusion Rule Preset Name",
					"Scored Username",
					"Source Content Hash",
					"Validation Notes",
					"Notes"
				], l = [[
					...hr.filter((e) => !a.has(e)),
					...s.map((e) => `${e}_missing_reason`),
					...i ? [
						"Epoch Length Seconds",
						"Native Epoch Seconds",
						"Mask Overlap Epochs"
					].map((e) => e + "_missing_reason") : [],
					...o.map((e) => e + "_missing_reason")
				].join(",")];
				for (const u of e) {
					const e = yr(u), t = null == u.sedentaryMinutes || !n && null == u.excludedNonwearMinutes ? null : u.sedentaryMinutes + (n ? 0 : u.excludedNonwearMinutes), c = [
						_r(u.filename),
						_r(u.participantId),
						_r(u.analysisDate),
						_r(u.method),
						_r(u.methodLabel),
						_r(u.methodFamily),
						_r(u.requiredSignalContract),
						_r(u.computationOwner),
						String(u.frontendComputesMetric),
						_r(u.sourceSignal),
						_r(u.status),
						_r(u.methodRule),
						_r(u.thresholdSource),
						_r(u.thresholdPresetName),
						wr(u.sedentaryMax),
						wr(u.lightMin),
						wr(u.moderateMin),
						wr(u.vigorousMin),
						wr(t),
						wr(u.lightMinutes),
						wr(u.moderateMinutes),
						wr(u.vigorousMinutes),
						wr(u.mvpaMinutes),
						wr(u.mimsUnitTotal),
						null == u.epochLengthSeconds ? "" : String(u.epochLengthSeconds),
						String(u.epochsReviewed),
						wr(u.wakeWearMinutes),
						wr(u.excludedNonwearMinutes),
						wr(u.excludedMainSleepMinutes),
						wr(u.excludedNapMinutes),
						null == u.maskOverlapEpochs ? "" : String(u.maskOverlapEpochs),
						null == u.mvpaBouts ? "" : String(u.mvpaBouts),
						wr(u.mvpaBoutMinutes),
						null == u.sedentaryBouts ? "" : String(u.sedentaryBouts),
						null == u.sedentaryBreaks ? "" : String(u.sedentaryBreaks),
						wr(u.meanSedentaryBoutMinutes),
						null == u.nativeEpochSeconds ? "" : String(u.nativeEpochSeconds),
						String(u.epochMismatch),
						_r(u.inclusionRulePresetName),
						String(u.maskExcludeNonwear),
						String(u.maskExcludeMainSleep),
						String(u.maskExcludeNaps),
						String(u.maskUseManualNonwear),
						String(u.maskUseAlgorithmNonwear),
						_r(u.maskNonwearDetector),
						wr(u.maskMinimumWakeWearMinutes),
						_r(u.scoredUsername),
						_r(u.sourceContentHash),
						_r(u.exportedAt),
						_r(e.status),
						_r(e.notes),
						_r(u.notes)
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
						const t = c[hr.indexOf(e)];
						if ("ggir_enmo" !== u.method || "" !== t) return "";
						if (qn.has(e)) {
							const t = d[e];
							return null != t && Number.isFinite(t) ? "" : "source_reported_missing";
						}
						return r.has(e) && null == m[e] ? "not_computed_for_export" : "";
					}), g = i ? [
						["Epoch Length Seconds", null == u.epochLengthSeconds && "ggir_enmo" === u.method ? "not_applicable_to_row" : ""],
						["Native Epoch Seconds", null == u.nativeEpochSeconds ? "not_applicable" === u.thresholdSource ? "not_applicable_to_row" : "source_reported_missing" : ""],
						["Mask Overlap Epochs", null == u.maskOverlapEpochs ? "ggir_enmo" === u.method ? "not_applicable_to_row" : "needs_signal" === u.status ? "channel_unavailable" : "backend_required" === u.status ? "not_computed_for_export" : "" : ""]
					].map(([e, t]) => "" === c[hr.indexOf(e)] ? t : "") : [];
					l.push([
						...c.filter((e, t) => !a.has(hr[t])),
						...p,
						...g,
						...o.map((e) => "" !== c[hr.indexOf(e)] ? "" : [
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
			detail: null == n ? hs : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
			columns: 40,
			encode: (t) => t.ggirEntries[e]
		})),
		...v.map((e) => b(e, !(!w && !n?.ggirReviewEntries.includes(e)) || (null == _ ? null : _ > 0), {
			rows: null,
			detail: e.endsWith(".html") ? null == _ ? w ? "1 report" : hs : `1 report · ${String(_)} ${1 === _ ? "file" : "files"}` : "1 GGIR report artifact",
			encode: (t) => t.ggirEntries[e]
		})),
		{
			name: ni,
			state: "included",
			rows: null,
			detail: "1 reason per missing cell",
			estimatedBytes: 2048 + (t?.actiwareSleepWakeCsv?.reasonChunks.reduce((e, t) => e + t.byteLength, 0) ?? n?.actiwareMissingReasonBytes ?? 0),
			write: null
		},
		b("codebook.csv", !0, {
			rows: sa.length,
			detail: `${String(sa.length)} definitions`,
			estimatedBytes: new TextEncoder().encode(ca()).length,
			encode: () => ji(ca(void 0, !0))
		}),
		{
			name: Nn,
			state: "included",
			rows: null,
			detail: "1 manifest · run, settings, entry hashes",
			estimatedBytes: 2048,
			write: null
		}
	];
}
async function _s(e, t) {
	return e.transaction("r", [
		e.files,
		e.markers,
		e.sensorNonwear,
		e.dailyGgirSummaries
	], async () => {
		const n = await ee(e, t.length ? { onlyFileIds: t } : void 0), i = n.map((e) => e.id), [a, r, s] = await Promise.all([
			e.markers.where("fileId").anyOf(i).toArray(),
			e.sensorNonwear.where("fileId").anyOf(i).toArray(),
			e.dailyGgirSummaries.where("fileId").anyOf(i).toArray()
		]);
		return we({
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
async function ws(n, i, a, r = {}) {
	const { signal: s, producers: d = {} } = r;
	s?.throwIfAborted(), r.progress?.(0, 0, "Checking the export inputs");
	const m = await _s(n, i.fileIds), p = await ys(null, "checking the export inputs", () => async function(e, t = V(), n = {}) {
		const i = /* @__PURE__ */ new Map();
		for (const c of (n.readPlan ?? Object.keys(Zr)).map((e) => Zr[e])) for (const [e, t] of Object.entries(c)) {
			const n = e;
			i.set(n, /* @__PURE__ */ new Set([...i.get(n) ?? [], ...t]));
		}
		if (!i.size) {
			const e = Object.freeze({ files: Object.freeze([]) });
			return Qr.set(e, {}), e;
		}
		let a = 268435456;
		const r = (e) => {
			if (e instanceof ArrayBuffer ? a -= e.byteLength : "string" == typeof e ? a -= 2 * e.length : e && "object" == typeof e ? Object.values(e).forEach(r) : a -= 8, a < 0) throw new Error("Export snapshot exceeds 256 MiB. Select fewer recordings or a narrower workspace before exporting.");
		};
		let s = 0;
		const o = (e) => {
			if (n.binaryStore && (e instanceof ArrayBuffer || ArrayBuffer.isView(e))) {
				const t = e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), i = Object.freeze({}), a = e instanceof ArrayBuffer ? null : e.constructor;
				return es(n.binaryStore, "write", t, s), Xr.set(i, {
					at: s,
					length: t.byteLength,
					store: n.binaryStore,
					restore: a ? (e) => new a(e) : (e) => e
				}), s += t.byteLength, r(0), i;
			}
			return Array.isArray(e) ? e.map(o) : e && "object" == typeof e && Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, o(t)])) : (r(e), e);
		}, l = await t.transaction("r", [...i.keys()].map((e) => t[e]), async () => {
			const n = i.has("files") ? await ee(t, e.length ? { onlyFileIds: e } : void 0) : [], a = new Set(n.flatMap((e) => e.id ? [e.id] : [])), r = {};
			return await Promise.all([...i].map(async ([e, i]) => {
				const s = (e) => Object.fromEntries([...i].filter((t) => t in e).map((t) => [t, o(e[t])]));
				if (r[e] = [], "files" === e) return void (r[e] = n.map((e) => s(e)));
				const l = "diaryEntries" === e ? t.diaryEntries : ae(t, e);
				await ("studySettings" === e ? l.where("key").equals("study") : l.where("fileId").anyOf([...a])).each((t) => {
					r[e].push(s(t));
				});
			})), r;
		}), u = new Set((l.ggirResultsBundles ?? []).map((e) => e.fileId));
		return l.markers = (l.markers ?? []).map((e) => u.has(e.fileId) && "invalid" === he(void 0, me(e)).kind ? {
			...e,
			isInvalidNight: !0
		} : e), function(e) {
			const t = Object.freeze({ files: ns((e.files ?? []).map((e) => Object.fromEntries(Ur.map((t) => [t, ts(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
			return Qr.set(t, e), t;
		}(l);
	}(i.fileIds, n, r)), g = function(e, t, n, i) {
		const a = [], r = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), d = [], m = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), p = (e) => {
			for (const t of e.charts) d.push({
				key: t.key,
				pid: t.pid,
				charts: t.charts.length
			}), r.push(Bi(r.length, t));
			for (const [t, n] of e.csvLinesByAlgo) o.set(t, u(n[0]));
			for (const [t, n] of e.headers) s.set(t, _i(s.get(t) ?? [], n));
			a.push({
				csvLinesByAlgo: e.csvLinesByAlgo,
				ggirReviews: e.ggirReviews
			});
		};
		async function* g(e, t) {
			for (const n of a) i?.throwIfAborted(), yield Wi(n, {
				signal: i,
				names: t,
				layouts: s,
				only: e
			}).then((t) => t[e]);
		}
		function* h() {
			const e = $i([...o.keys()]);
			for (const [t, n] of o) s.set(e.get(t), n);
			for (const t of [...s.keys()].filter(mi)) {
				const e = s.get(t);
				e && s.set(t, [
					...e.filter((e) => !e.endsWith("_missing_reason") && !oi.includes(e)),
					...oi,
					...e.filter((e) => e.endsWith("_missing_reason") && !oi.some((t) => e === t + "_missing_reason")),
					...oi.map((e) => e + "_missing_reason")
				]);
			}
			for (const [t, n] of s) yield {
				name: t,
				chunks: async function* () {
					yield ji(n.map(l).join(",") + "\n");
					for await (const n of g(t, e)) {
						if (!n) continue;
						const e = new TextDecoder().decode(n), t = c(e).records[0], i = ji(e.slice(t.text.length + 1));
						for (let n = 0; n < i.byteLength; n += Tn) yield i.subarray(n, n + Tn);
					}
				}()
			};
			d.length && (yield {
				name: Ti,
				chunks: async function* () {
					yield* Pi(function(e, t) {
						const n = e.map((e) => e.key), i = e.reduce((e, t) => e + t.charts, 0);
						return `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${Ri(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${Ri(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${i} chart${1 !== i ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${Ri(e[n].pid)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`;
					}(d, m));
					for await (const { bytes: e, lengths: t } of async function* () {
						for (const { blob: e, lengths: t } of r) i?.throwIfAborted(), yield e.arrayBuffer().then((e) => ({
							bytes: new Uint8Array(e),
							lengths: t
						}));
					}()) {
						let n = 0;
						for (const i of t) yield e.subarray(n, n += i);
					}
					for (const e of Di) yield* Pi(e);
				}()
			});
		}
		return {
			add: p,
			addFiles: async (a) => {
				for (const r of a) p(await Ui({
					username: e,
					dateRange: t,
					snapshot: n,
					generatedAt: m
				}, r, i));
			},
			entries: async () => [...h()].reduce(async (e, t) => {
				const n = await e, i = [];
				for await (const a of t.chunks) i.push(a);
				return n[t.name] = ue(i), n;
			}, Promise.resolve({})),
			streamEntries: h,
			generatedAt: m
		};
	}(i.username, i.dateRange, p, s), h = [];
	for (const e of p.files) {
		const t = h.at(-1);
		t?.[0]?.filename === e.filename ? t.push(e) : h.push([e]);
	}
	const _ = [], w = [], y = [];
	let v = !1;
	const M = i.manifest.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), b = r.groups ?? {
		size: 1,
		run: (i, a, r) => async function(n, i, a, { db: r, signal: s }) {
			s?.throwIfAborted();
			const l = n.files.filter((e) => i.includes(e.id)), u = l.map((e) => e.id), c = /* @__PURE__ */ new Map();
			let d = !1;
			try {
				const e = await function(e, { fileIds: t, dateRange: n, signal: i }) {
					const a = ss(e, Zr.circadian, t);
					return async function(e, t, { dateRange: n, signal: i }) {
						const a = W(i), r = [];
						let s = 0;
						for (const l of e) {
							if (!l.id) continue;
							i?.throwIfAborted();
							const e = await t(l.id), u = [];
							for (const t of e.values()) {
								if (i?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
								s += 1;
								const e = Ct(l.id, t);
								e && u.push(e);
							}
							if (0 === u.length) continue;
							const { request: c, transfer: d } = Ot(u.map((e) => e.wire)), m = await a.computeCircadian(o(c, d));
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
					}(t.length > 0 ? a.files.filter((e) => null != e.id && t.includes(e.id)) : a.files, (e) => ms(a, e), {
						dateRange: n,
						signal: i
					});
				}(n, {
					fileIds: u,
					dateRange: a.dateRange,
					signal: s
				});
				for (const t of e.daySummaries) c.set(`${t.fileId}|${t.date}`, {
					l5Hour: t.l5Hour,
					m10Hour: t.m10Hour
				});
			} catch (g) {
				if (g instanceof as) throw g;
				if (s?.throwIfAborted(), d = !0, g instanceof DOMException && "AbortError" === g.name) throw g;
			}
			const m = await ys(l[0].filename, "computing its sleep rows", () => async function(n, i, a, r, s, o, l) {
				const u = s && s.trim().length > 0 ? s.trim() : null, c = ss(o, Zr.sleep, n), d = c.files, m = Ft(c.studySettings[0]?.extraSettings), p = (n.length > 0 ? d.filter((e) => null != e.id && n.includes(e.id)) : [...d]).sort((e, t) => e.filename.localeCompare(t.filename)), [g, h] = a ?? ["", ""], _ = [], w = [], y = [], v = [], M = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), k = async () => {
					for (const [e, t] of M) b.set(e, await ta(e, t, _, l));
					M.clear();
				}, x = /* @__PURE__ */ new Map(), S = (e) => {
					const t = JSON.stringify(e);
					let n = x.get(t);
					return n || (n = W(l).exportNapAggregate(e), x.set(t, n)), n;
				}, I = await Promise.all(p.map((e) => cs(o, e.id, i, l)));
				for (const [R, N] of p.entries()) {
					if (l?.throwIfAborted(), R > 0 && p[R - 1].filename !== N.filename && await k(), !N.id) continue;
					const n = ms(c, N.id), { bundle: i, markersByAlgo: s } = I[R], o = i?.edits ?? [], d = i ? ve(i.imported) : [], { zone: b } = await Gt(N, m, l), x = [.../* @__PURE__ */ new Set([...N.availableDates, ...d.map((e) => e.nightDate)])].sort(), A = a ? x.filter((e) => e >= g && e <= h) : x;
					if (i) {
						const e = new Set(Se(i.imported).map((e) => e.night));
						for (const t of d) {
							if (e.has(t.night) || !A.includes(t.nightDate)) continue;
							const n = he(t, s.get(t.nightDate)?.[0]).kind;
							"scored" !== n && "invalid" !== n && y.push({
								file: "sleep_export.csv",
								row: 0,
								key: `${T.filename.header}=${N.filename}|${T.study_date.header}=${t.nightDate}`,
								column: `GGIR night ${String(t.night)}: ${xe(i.imported, t.night)}`,
								reason: "ggir_night_excluded"
							});
						}
					}
					const $ = re(n.values());
					for (const a of A) {
						l?.throwIfAborted();
						const c = s.get(a);
						if (c && 0 !== c.length) for (const s of c) {
							if (!s.isInvalidNight && 0 === s.sleepMarkers.length && 0 === s.nonwearMarkers.length) continue;
							const c = N.participantId ?? null, m = N.id, p = s.algorithm ?? null, g = s.username ?? null, h = s.needsConsensus, y = s.notes, k = n.get(a), x = await E(a, void 0, W(l)), I = n.get(x), A = {
								fileId: m,
								filename: N.filename,
								participantId: c,
								studyDate: a,
								algorithm: p,
								scoredBy: g,
								needsConsensus: h,
								notes: y,
								meanTemperature: null,
								meanWhiteLight: null,
								meanRedLight: null,
								meanGreenLight: null,
								meanBlueLight: null,
								detectionRule: s.detectionRule ?? null,
								periodGuider: s.periodGuider ?? null,
								...Zi(s.sleepPeriodDetectionConfig),
								algorithmVersion: s.algorithmVersion ?? null,
								verificationStatus: null,
								studyId: u,
								dstTransition: await je(b, a, void 0, W(l))
							}, R = await S(s.sleepMarkers.filter((e) => e.markerType === f.NAP).map((e) => ({
								start: e.onsetTimestamp,
								end: e.offsetTimestamp
							}))), O = r?.get(`${String(m)}|${a}`), C = {
								l5Hour: O?.l5Hour ?? null,
								m10Hour: O?.m10Hour ?? null,
								napCount: R.napCount,
								totalNapMinutes: R.napCount > 0 ? R.totalNapMinutes : null
							}, L = s.nonwearMarkers.map((e) => ({
								start: e.startTimestamp,
								end: e.endTimestamp
							})), B = $(p), D = Dt(k, B), P = `${N.filename}\0${c ?? ""}\0${A.algorithm ?? ""}\0${A.detectionRule ?? ""}`, j = M.get(P) ?? [];
							j.push({
								date: a,
								epochLengthSeconds: N.epochLengthSeconds || 60,
								timestamps: D.timestamps,
								states: D.algorithmResults,
								stale: "stale" === B.status
							}), M.set(P, j);
							const F = k?.temperature ? new Float64Array(k.temperature) : null, U = ce(k).timestamps, z = I?.temperature ? new Float64Array(I.temperature) : null, G = ce(I).timestamps, V = await en(n, a, B, { signal: l }), H = async (e, t, n) => {
								if (!t || !n) return null;
								const i = (e) => e ? new Float64Array(e) : null;
								return zi([[i(k?.[e]), U], [i(I?.[e]), G]], t, n, l);
							}, q = (e, t) => zi([[F, U], [z, G]], e, t, l), K = async (n, r) => {
								let u = null;
								const c = d.find((e) => e.nightDate === a), m = i && c && n.markerType === f.MAIN_SLEEP && "invalid" !== he(c, s).kind, p = c && o.some((e) => e.night === c.night), g = Qi(null), h = {};
								let _ = "not_applicable_to_row";
								if (!m && n.onsetTimestamp && n.offsetTimestamp) {
									const { timestamps: e, algorithmResults: t, activity: i, scoresStale: a } = V;
									if (null !== a && 0 === v.length && v.push({
										component: "metric_computation",
										code: "unavailable",
										message: a
									}), _ = null !== a ? "scores_from_another_config" : null == t ? "no_scored_epochs" : null == i ? "channel_unavailable" : 0 === e.length ? "no_valid_epochs" : void 0, null != t && e.length > 0 && (null != i || ce(k).ggir)) {
										const a = ce(k).ggir ? ce(k).epochSec : N.epochLengthSeconds || 60, r = await ea(t, i, e, n.onsetTimestamp, n.offsetTimestamp, a, l);
										u = r.metrics, u || r.error || (_ = "no_valid_epochs"), r.error && (_ = "not_computed_for_export"), r.error && 0 === v.length && v.push({
											component: "metric_computation",
											code: "unavailable",
											message: "Metric computation failed for at least one selected period; those rows carry no numerics."
										});
									}
								}
								if (m) {
									_ = "channel_unavailable";
									const n = p ? i.current?.nights : i.imported.nights, a = n ? t(n, T.ggir_night.header, c.night) : -1;
									for (const [t, i, r, s] of Xi) {
										const o = n ? e(n, T[i].header, a) : null;
										g[t] = null == o ? null : o * s, h[r] = null == o ? p ? "not_computed_for_export" : "source_reported_missing" : void 0;
									}
								}
								(m || u && !("averageAwakeningLengthMinutes" in u)) && (h.average_awakening_length_minutes = "not_computed_for_export");
								const w = await W(l).exportPeriodFigures(n.onsetTimestamp, n.offsetTimestamp, L), y = Boolean(n.onsetTimestamp && n.offsetTimestamp), M = {
									...A,
									...C,
									periodIndex: n.markerIndex,
									markerType: n.markerType,
									onsetTimestamp: n.onsetTimestamp,
									offsetTimestamp: n.offsetTimestamp,
									...m ? g : Qi(u),
									metricMissingReason: _,
									isInvalidNight: r,
									meanTemperature: n.onsetTimestamp && n.offsetTimestamp ? await q(n.onsetTimestamp, n.offsetTimestamp) : null,
									meanWhiteLight: await H("lux", n.onsetTimestamp, n.offsetTimestamp),
									meanRedLight: await H("redLight", n.onsetTimestamp, n.offsetTimestamp),
									meanGreenLight: await H("greenLight", n.onsetTimestamp, n.offsetTimestamp),
									meanBlueLight: await H("blueLight", n.onsetTimestamp, n.offsetTimestamp),
									sleepMidpointTimestamp: y ? w.midpointTimestamp : null,
									sleepMidpointHour: y ? w.midpointClockHour : null,
									validWearMinutes: w.validWearMinutes
								}, b = (e, t) => null != e ? void 0 : y ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
								return M.sensorMissingReasons = {
									mean_temperature_c: b(M.meanTemperature, Boolean(k?.temperature || I?.temperature)),
									mean_white_light_lux: b(M.meanWhiteLight, Boolean(k?.lux || I?.lux)),
									mean_red_light: b(M.meanRedLight, Boolean(k?.redLight || I?.redLight)),
									mean_green_light: b(M.meanGreenLight, Boolean(k?.greenLight || I?.greenLight)),
									mean_blue_light: b(M.meanBlueLight, Boolean(k?.blueLight || I?.blueLight))
								}, M.derivedMissingReasons = {
									...h,
									l5_hour: null == M.l5Hour ? O ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									m10_hour: null == M.m10Hour ? O ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									sleep_midpoint_time: null == M.sleepMidpointTimestamp ? y ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									sleep_midpoint_hour: null == M.sleepMidpointHour ? y ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									valid_wear_minutes: null == M.validWearMinutes ? y ? "no_valid_epochs" : "not_applicable_to_row" : void 0
								}, M;
							};
							if (s.isInvalidNight) {
								_.push({
									...A,
									...C,
									periodIndex: null,
									markerType: Ki,
									onsetTimestamp: null,
									offsetTimestamp: null,
									...Qi(null),
									isInvalidNight: !0,
									sleepMidpointTimestamp: null,
									sleepMidpointHour: null,
									validWearMinutes: null
								});
								for (const e of s.sleepMarkers) _.push(await K(e, !0));
							} else for (const e of s.sleepMarkers) _.push(await K(e, !1));
							for (const e of s.nonwearMarkers) w.push({
								...A,
								...C,
								periodIndex: e.markerIndex ?? 0,
								markerType: Yi,
								onsetTimestamp: e.startTimestamp,
								offsetTimestamp: e.endTimestamp,
								...Qi(null),
								isInvalidNight: !1,
								sleepMidpointTimestamp: null,
								sleepMidpointHour: null,
								validWearMinutes: null
							});
						}
					}
				}
				await k(), _.sort(na), w.sort(na);
				const A = await async function(e, t) {
					const n = e.filter((e) => e.markerType === f.MAIN_SLEEP), i = /* @__PURE__ */ new Map();
					for (const o of n) {
						const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = i.get(e);
						t ? t.push(o) : i.set(e, [o]);
					}
					const a = [...i], r = await W(t).summarizeExportGroups(a.map(([, e]) => e.map((e) => ({
						study_date: e.studyDate,
						total_nap_minutes: e.totalNapMinutes,
						values: ia.map(([, t]) => e[t])
					})))), s = a.map(([e, t], n) => {
						const [i, a, s, o] = e.split("\0"), l = r[n], u = Object.fromEntries(ia.map(([e], t) => [e, l.means[t] ?? null]));
						return {
							filename: i,
							participantId: a,
							algorithm: s,
							detectionRule: o,
							nNights: l.nNights,
							...u,
							meanTemperatureMissingReason: null == u.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
							metricMissingReasons: Object.fromEntries(ia.map(([e, n]) => {
								const i = aa[e], a = Xi.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : i), r = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[a] ?? e.metricMissingReason).find(Boolean);
								return [i, null == u[e] ? r : void 0];
							})),
							sleepRegularityIndex: null,
							meanTotalNapMinutes: l.meanTotalNapMinutes,
							studyId: t[0]?.studyId ?? null
						};
					});
					return s.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), s;
				}(_, l);
				for (const e of A) {
					const t = `${e.filename}\0${e.participantId}\0${e.algorithm}\0${e.detectionRule}`, n = b.get(t);
					e.sleepRegularityIndex = n?.sri ?? null, e.sleepRegularityMissingReason = n?.sriMissingReason ?? (n ? void 0 : "not_computed_for_export");
				}
				return {
					sleepRows: _,
					nonwearRows: w,
					summaryRows: A,
					degradations: v,
					nightReasons: y
				};
			}(u, a.username, a.dateRange, c, a.studyId, n, s)), p = await ys(l[0].filename, "drawing its visual report", async () => {
				const e = [];
				for (const t of l) e.push(await Ui({
					...a,
					snapshot: n
				}, t, s));
				return e;
			});
			return {
				part: m,
				physicalActivityRows: await xr(u, a.dateRange, {
					username: a.username,
					cutpointOverrides: a.physicalActivity.cutpointOverrides,
					maskPolicy: a.physicalActivity.maskPolicy,
					choiAxis: a.physicalActivity.choiAxis,
					exportedAt: a.exportedAt,
					...s ? { signal: s } : {}
				}, r),
				eventMarkerRows: await Ia(u, a.dateRange, n, a.username, s),
				circadianDegraded: d,
				reports: p
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
	}, x = h.map(() => {
		const e = {};
		return e.promise = new Promise((t, n) => {
			e.resolve = t, e.reject = n;
		}), e.promise.catch(() => {}), e;
	});
	let S = 0, I = h.length, A = 0;
	r.progress?.(0, h.length, $n), Promise.all(Array.from({ length: Math.min(b.size, h.length) }, async () => {
		for (; S < I;) {
			const t = S++;
			try {
				x[t].resolve(await b.run(p, h[t].map((e) => e.id), k)), r.progress?.(++A, h.length, $n);
			} catch (e) {
				I = Math.min(I, t), x[t].reject(e);
			}
		}
	}));
	try {
		for (const e of x) {
			s?.throwIfAborted();
			const t = await e.promise;
			_.push(t.part);
			for (const e of t.reports) g.add(e);
			w.push(...t.physicalActivityRows), y.push(...t.eventMarkerRows), v ||= t.circadianDegraded;
		}
	} finally {
		I = 0;
	}
	if (r.progress?.(0, 0, On), await _s(n, i.fileIds) !== m) throw new Rn(null, "computing physical activity, because its inputs changed during the export");
	s?.throwIfAborted();
	const R = function(e) {
		return {
			sleepRows: e.flatMap((e) => e.sleepRows),
			nonwearRows: e.flatMap((e) => e.nonwearRows),
			summaryRows: e.flatMap((e) => e.summaryRows),
			degradations: e.flatMap((e) => e.degradations).slice(0, 1),
			nightReasons: e.flatMap((e) => e.nightReasons ?? [])
		};
	}(_), N = await async function(e, t, n, i, a) {
		a?.throwIfAborted();
		const r = ss(n, Zr.actiwareInterval, e), s = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => r.actiwareFileData.find((t) => t.fileId === e.id));
		return (await Promise.all(s.map(async (e, n) => {
			a?.throwIfAborted();
			const s = ls(r, e.id, i), l = r.actiwareStatisticsInputs.find((t) => t.fileId === e.id), u = new Set(s.keys()), { actiwareStatisticsForScoredMarker: c } = await import("./local-data-source-_0c00IIq.js").then((e) => e.t);
			a?.throwIfAborted();
			const d = await c(o[n] ?? {}, l?.input, s, (e) => W(a).actiwareIntervalStatistics(e), a);
			a?.throwIfAborted();
			const m = await async function(e, t, n) {
				const i = (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), a = e.actiwareStatistics ?? [], r = await Qt([...i.map((e) => e.startTimestamp), ...a.map((e) => e.startTimestamp)], W(n)), s = /* @__PURE__ */ new Set(), o = i.map((t) => {
					const n = a.findIndex((e, n) => !s.has(n) && e.kind === t.kind && Ta(e.startTimestamp, t.startTimestamp) && Ta(e.endTimestamp, t.endTimestamp)), i = r(t.startTimestamp), o = n >= 0 ? a[n] ?? null : null;
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
		const t = ss(e, Zr.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(p);
	if (O && ($["audit_log.jsonl"] = O), d.ggirResults) {
		const e = await d.ggirResults(ss(p, Zr.ggirResults), s);
		for (const [t, n] of Object.entries(e)) {
			if (t in $) throw new Error(`${En}${t}`);
			$[t] = n;
		}
	}
	const C = ss(p, Zr.actiwareSleepWake);
	let D = 0;
	for (const e of C.files) {
		const t = C.actiwareFileData.find((t) => t.fileId === e.id)?.actiwareSleepWake;
		t && (D += await Ca(t, i.dateRange, new Set(ls(C, e.id, i.username).keys()), W(s)));
	}
	const P = ss(p, Zr.manifest), j = Object.fromEntries(R.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	v ||= R.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const F = [...v ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...R.degradations], U = await ys(null, "reading saved GGIR source provenance", () => async function(e, t = W()) {
		return Object.fromEntries(await Promise.all(e.map(async (e) => {
			const [n, i] = await Promise.all([t.ggirAppConfigSummary(e.configCsv, !1), t.ggirNonwearApproach(e.configCsv)]);
			return [String(e.fileId), {
				configGgirVersion: n.configGgirVersion,
				nonwearApproach: i ?? null
			}];
		})));
	}(P.ggirResultsBundles, W(s))), z = [...g.streamEntries()], G = await async function(e) {
		const t = e.deflate ?? {
			lanes: 1,
			block: (e, t) => Promise.resolve(function(e, t) {
				if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
				const n = [], i = new xt(t?.byteLength ? {
					level: 1,
					dictionary: t
				} : { level: 1 }, (e) => {
					n.push(e);
				});
				i.push(e, !1), i.flush(!1);
				const a = i.s.r ?? 0;
				if (!Number.isInteger(a) || a < 0 || a > 2047) throw new Error("ZIP compression state is unreadable.");
				const r = (7 & a) > 5 ? 2 : 1, s = new Uint8Array(r + 4);
				return s[0] = a >> 3, s[r + 2] = 255, s[r + 3] = 255, n.push(s), ue(n);
			}(e, t))
		};
		if (!navigator.storage?.getDirectory) throw new Error("Streaming export requires temporary workspace storage (OPFS).");
		const n = await (await (await navigator.storage.getDirectory()).getDirectoryHandle(An, { create: !0 })).getDirectoryHandle(e.scratchId, { create: !0 }), i = await n.getFileHandle(ni, { create: !0 }), a = await n.getFileHandle("bundle.zip", { create: !0 }), r = new CompressionStream("gzip"), s = r.readable.pipeTo(await i.createWritable());
		s.catch(() => {});
		const o = r.writable.getWriter(), l = await a.createWritable();
		let d = [], m = 0, p = e.artifacts.importRefusalReasons?.length ?? 0;
		const g = [], h = new Et((e, t) => {
			if (e) throw e;
			d.push(t);
		}), f = async (e = 0) => {
			m = Math.max(m, e + d.reduce((e, t) => e + t.byteLength, 0));
			for (const t of d) await l.write(t);
			d = [];
		}, _ = /* @__PURE__ */ new Set();
		let w = 0;
		const y = async (n, i) => {
			if (_.has(n)) throw new Error(`${En}${n}`);
			_.add(n);
			const a = new ja(n), r = new B();
			let s = 0;
			h.add(a);
			const { blockBytes: o, inFlight: l } = function(e) {
				const t = Math.min(2 * e + 1, Math.floor(24)), n = Math.floor(1572864 / t) - 32768;
				return {
					blockBytes: n - n % 4096,
					inFlight: t - 1
				};
			}(t.lanes), u = [];
			let c = new Uint8Array(o), d = 0, p = /* @__PURE__ */ new Uint8Array(0), y = 0;
			const v = () => y + d + p.byteLength + u.length * (o + 32768), M = async () => {
				a.emit(await u.shift(), !1), await f(v());
			}, b = async () => {
				const e = c.subarray(0, d), n = e.slice(-32768);
				for (u.push(t.block(e, p)), p = n, c = new Uint8Array(o), d = 0; u.length > l;) await M();
			};
			try {
				for await (const t of i) {
					y = t.byteLength;
					for (let n = 0; n < t.byteLength; n += Da) {
						e.signal?.throwIfAborted();
						const i = t.subarray(n, n + Da);
						r.update(i), a.push(i, !1), s += i.byteLength;
						for (let e = 0; e < i.byteLength;) {
							const t = Math.min(i.byteLength - e, o - d);
							c.set(i.subarray(e, e + t), d), d += t, e += t, d === o && await b();
						}
						m = Math.max(m, v());
					}
				}
				for (y = 0, d && await b(); u.length;) await M();
			} finally {
				for (const e of u) e.catch(() => {});
			}
			a.push(/* @__PURE__ */ new Uint8Array(), !0), a.emit(Pa, !0), await f(), g.push({
				name: n,
				contentHash: L(r.finalize()),
				byteLength: s
			}), e.progress?.(g.length, w, On);
		};
		try {
			await o.write(new TextEncoder().encode(ii(e.artifacts.importRefusalReasons ?? [])));
			const t = [...fs({
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
			w = t.filter((e) => e.write).length + 2, e.progress?.(0, w, On);
			for (const i of t) if (i.write) try {
				"actiware_sleep_wake_export.csv" === i.name ? await y(i.name, async function* () {
					for await (const t of e.sleepWake) e.signal?.throwIfAborted(), p += t.reasonRows, m = Math.max(m, t.bytes.byteLength + t.reasons.byteLength), await o.write(t.reasons), yield t.bytes;
				}()) : i.name.endsWith(".csv") ? await y(i.name, async function* () {
					let t = 0, n = !1, a = !1;
					const r = "actiware_intervals_export.csv" === i.name ? function* () {
						for (const t of e.artifacts.actiwareIntervalRows ?? []) {
							const [e, n] = c(Na([t], !0)).records, i = u(n.text);
							yield new Map(u(e.text).map((e, t) => [e, i[t] ?? ""]));
						}
					} : void 0;
					for await (const e of i.batches?.() ?? Fa(i.chunks ?? [i.write()])) {
						if (e.bytes.byteLength > 4 * Da) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
						const s = si(e.text ?? new TextDecoder().decode(e.bytes), i.name, !0, {
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
							if (u += ii([t.value], !1), p += 1, u.length >= Da / 2) {
								const t = new TextEncoder().encode(u);
								m = Math.max(m, e.bytes.byteLength + t.byteLength), await o.write(t), u = "";
							}
						}
						await o.write(new TextEncoder().encode(u));
						const c = n ? (a ? "" : "\n") + l.csv.slice(l.csv.indexOf("\n") + 1) : l.csv;
						n = !0, t += e.rows ?? 0, a = c.endsWith("\n");
						const d = new TextEncoder().encode(c);
						m = Math.max(m, e.bytes.byteLength + d.byteLength + 2 * u.length), yield d;
					}
				}()) : await y(i.name, i.chunks ?? [i.write()]);
			} catch (v) {
				throw new Error(`Export failed while writing ${i.name}`, { cause: v });
			}
			await o.close(), await s, await y(ni, async function* () {
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
					contentHash: await oa(t),
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
					ggirCorrectionsNotApplied: e.ggirCorrectionsNotApplied ?? {},
					executionAttestationIds: [...e.executionAttestationIds ?? []].sort(),
					degradations: [...e.degradations ?? []],
					files: n
				};
			}({
				...e.manifest,
				entries: g
			});
			return await y(Nn, [new TextEncoder().encode(la(n))]), h.end(), await f(), e.signal?.throwIfAborted(), await l.close(), {
				blob: await new Response((await a.getFile()).stream()).blob(),
				entries: g,
				peakBufferedBytes: m,
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
			importRefusalReasons: [...ps(p), ...R.nightReasons ?? []],
			...R,
			physicalActivityRows: w,
			physicalActivityEnabledClasses: i.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: i.physicalActivity.nonwearAsClass,
			ggirEntries: $,
			eventMarkerRows: y,
			actiwareIntervalRows: N,
			actiwareSleepWakeCsv: {
				rows: D,
				bytes: /* @__PURE__ */ new Uint8Array(),
				reasonChunks: []
			}
		},
		extraEntries: z,
		options: i,
		manifest: {
			...i.manifest,
			physicalActivity: i.physicalActivity,
			exportedAt: M,
			algorithmVersions: j,
			degradations: F,
			ggirSources: U,
			...(H = P.ggirResultsBundles, {
				ggirCorrections: Object.fromEntries(H.flatMap((e) => e.ggirCorrections ? [[String(e.fileId), e.ggirCorrections]] : [])),
				ggirCorrectionsNotApplied: Object.fromEntries(H.flatMap((e) => e.ggirCorrections ? [] : [[String(e.fileId), e.ggirCorrectionsNotApplied ?? "Use corrected values was off at import"]]))
			}),
			executionAttestationIds: P.localExecutions.map((e) => e.attestationId),
			diaryTemporalPolicyByFile: Object.fromEntries(P.files.map((e) => [String(e.id), Object.fromEntries(P.diaryEntries.filter((t) => t.fileId === e.id).map((e) => [e.analysisDate, e.importMappingProvenance?.diaryTemporalPolicy ?? null]))]))
		},
		sleepWake: La(i.fileIds, i.dateRange, p, i.username, s),
		scratchId: a,
		...s ? { signal: s } : {},
		...b.deflate ? { deflate: b.deflate } : {},
		...r.progress ? { progress: r.progress } : {}
	});
	var H;
	return {
		...G,
		actiwareSleepWakeRows: D,
		degradations: F,
		hasData: R.sleepRows.length > 0 || R.nonwearRows.length > 0 || w.length > 0 || G.entries.some((e) => z.some((t) => t.name === e.name)) || Object.keys($).length > 0,
		rowCount: R.sleepRows.length + R.nonwearRows.length + R.summaryRows.length + w.length,
		dayCount: (/* @__PURE__ */ new Set([
			...R.sleepRows.map((e) => e.studyDate),
			...R.nonwearRows.map((e) => e.studyDate),
			...w.map((e) => e.analysisDate)
		])).size,
		fileCount: p.files.length
	};
}
async function ys(e, t, n) {
	try {
		return await n();
	} catch (i) {
		if (i instanceof DOMException && "AbortError" === i.name) throw i;
		throw new Rn(e, t, i);
	}
}
function vs(e, t = /* @__PURE__ */ new Set()) {
	if (e instanceof ArrayBuffer) t.add(e);
	else if (ArrayBuffer.isView(e)) t.add(e.buffer);
	else if (e && "object" == typeof e) for (const n of Object.values(e)) vs(n, t);
	return [...t];
}
function Ms(e, t) {
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
				const e = new Worker(new URL("/sleep-scoring-wasm/assets/local-export-shard-worker-D6Ky_d8q.js", "" + import.meta.url), { type: "module" });
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
					const n = Qr.get(e);
					if (!n) throw new as("Export requires a captured input snapshot");
					const i = new Set(is.flatMap((e) => Object.keys(Zr[e])));
					return Object.fromEntries([...i].map((e) => [e, (n[e] ?? []).filter((n) => "studySettings" === e || t.includes("files" === e ? n.id : n.fileId)).map(ts)]));
				}(t, n), s = await a.group(e, n, o(r, vs(r)), i);
				if ("failure" in s) throw new Rn(s.failure.file, s.failure.step);
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
	const a = new h(e), r = Ms(e, Math.max(1, Math.min(8, (navigator.hardwareConcurrency || 2) - 2)));
	let s;
	try {
		return s = await (await (await (await (await navigator.storage.getDirectory()).getDirectoryHandle(An, { create: !0 })).getDirectoryHandle(n, { create: !0 })).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await a.open(), await ws(a, t, n, {
			...i ? { progress: i } : {},
			binaryStore: s,
			groups: r.runner
		});
	} catch (o) {
		if (o instanceof Rn) return { failure: {
			file: o.file,
			step: o.step
		} };
		throw o;
	} finally {
		r.terminate(), s?.close(), a.close();
	}
} });
export { Ct as C, Ot as S, Jt as _, ir as a, Gt as b, Za as c, qa as d, Ya as f, tn as g, Va as h, tr as i, Ka as l, Wa as m, Dr as n, Qa as o, za as p, gr as r, Xa as s, Sr as t, Ha as u, Zt as v, Wt as x, Qt as y };
