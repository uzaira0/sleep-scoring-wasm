import { n as e, r as t, s as n, t as i } from "./ggir-results-types-WB8axvb-.js";
import { c as r, d as a, i as s, n as o, u as l } from "./workers-DwjGhrCr.js";
import { Dt as u, It as c, Jt as d, Lt as p, Rt as m, a as g, h as f, l as h, o as _, s as w, vn as y, vt as v, xn as M, zt as b } from "./schema-C65z93SA.js";
import { A as x, F as k, I as S, L as I, M as A, N as R, P as T, b as N, j as E, k as C, m as $ } from "./nonwear-display-slots-wPOZJu0l.js";
import { J as O, K as B, M as L, W as D, at as P, l as j, q as F, t as W, u as G, v as z } from "./workspace-db-jv0UAB1p.js";
import { l as U, n as V, o as H, s as q } from "./content-hash-BtD8CeUH.js";
import { _ as K, a as J, n as Y, t as Z } from "./background-jobs-D39eVHiq.js";
import { a as Q } from "./project-revision-OUskpCPr.js";
import { A as X, B as ee, C as te, I as ne, K as ie, M as re, N as ae, P as se, S as oe, Ut as le, W as ue, Wt as ce, Xt as de, Yt as pe, b as me, nn as ge, zt as fe } from "./store-C-OzqH4e.js";
import { B as he, j as _e, m as we, u as ye } from "./night-session-registry-BA3Un0Qs.js";
import { d as ve, l as Me, p as be } from "./sleep-period-detection-CcyhNiXt.js";
import { t as xe } from "./audit-hash-rfcCP1yx.js";
import { c as ke, d as Se, g as Ie, m as Ae, n as Re, r as Te, s as Ne, u as Ee } from "./ggir-results-import-BRYq6kze.js";
import { E as Ce, N as $e, T as Oe, c as Be } from "./local-nonwear-unified-B2FhmEKw.js";
import { S as Le, _ as De, b as Pe, g as je, n as Fe, t as We, v as Ge, x as ze, y as Ue } from "./valid-day-criteria-msEROKCh.js";
import { h as Ve, m as He, v as qe } from "./diary-local-import-contract-DaGfV502.js";
var Ke = Uint8Array, Je = Uint16Array, Ye = Int32Array, Ze = new Ke([
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
]), Qe = new Ke([
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
]), Xe = new Ke([
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
]), et = function(e, t) {
	for (var n = new Je(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
	var r = new Ye(n[30]);
	for (i = 1; i < 30; ++i) for (var a = n[i]; a < n[i + 1]; ++a) r[a] = a - n[i] << 5 | i;
	return {
		b: n,
		r
	};
}, tt = et(Ze, 2), nt = tt.b, it = tt.r;
nt[28] = 258, it[258] = 28;
for (var rt = et(Qe, 0), at = (rt.b, rt.r), st = new Je(32768), ot = 0; ot < 32768; ++ot) {
	var lt = (43690 & ot) >> 1 | (21845 & ot) << 1;
	lt = (61680 & (lt = (52428 & lt) >> 2 | (13107 & lt) << 2)) >> 4 | (3855 & lt) << 4, st[ot] = ((65280 & lt) >> 8 | (255 & lt) << 8) >> 1;
}
var ut = function(e, t, n) {
	for (var i = e.length, r = 0, a = new Je(t); r < i; ++r) e[r] && ++a[e[r] - 1];
	var s, o = new Je(t);
	for (r = 1; r < t; ++r) o[r] = o[r - 1] + a[r - 1] << 1;
	if (n) {
		s = new Je(1 << t);
		var l = 15 - t;
		for (r = 0; r < i; ++r) if (e[r]) for (var u = r << 4 | e[r], c = t - e[r], d = o[e[r] - 1]++ << c, p = d | (1 << c) - 1; d <= p; ++d) s[st[d] >> l] = u;
	} else for (s = new Je(i), r = 0; r < i; ++r) e[r] && (s[r] = st[o[e[r] - 1]++] >> 15 - e[r]);
	return s;
}, ct = new Ke(288);
for (ot = 0; ot < 144; ++ot) ct[ot] = 8;
for (ot = 144; ot < 256; ++ot) ct[ot] = 9;
for (ot = 256; ot < 280; ++ot) ct[ot] = 7;
for (ot = 280; ot < 288; ++ot) ct[ot] = 8;
var dt = new Ke(32);
for (ot = 0; ot < 32; ++ot) dt[ot] = 5;
var pt = ut(ct, 9, 0), mt = ut(dt, 5, 0), gt = function(e) {
	return (e + 7) / 8 | 0;
}, ft = function(e, t, n) {
	return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new Ke(e.subarray(t, n));
}, ht = [
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
], _t = function(e, t, n) {
	var i = new Error(t || ht[e]);
	if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, _t), !n) throw i;
	return i;
}, wt = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8;
}, yt = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, vt = function(e, t) {
	for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
		s: i,
		f: e[i]
	});
	var r = n.length, a = n.slice();
	if (!r) return {
		t: At,
		l: 0
	};
	if (1 == r) {
		var s = new Ke(n[0].s + 1);
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
	}; c != r - 1;) o = n[n[u].f < n[d].f ? u++ : d++], l = n[u != c && n[u].f < n[d].f ? u++ : d++], n[c++] = {
		s: -1,
		f: o.f + l.f,
		l: o,
		r: l
	};
	var p = a[0].s;
	for (i = 1; i < r; ++i) a[i].s > p && (p = a[i].s);
	var m = new Je(p + 1), g = Mt(n[c - 1], m, 0);
	if (g > t) {
		i = 0;
		var f = 0, h = g - t, _ = 1 << h;
		for (a.sort(function(e, t) {
			return m[t.s] - m[e.s] || e.f - t.f;
		}); i < r; ++i) {
			var w = a[i].s;
			if (!(m[w] > t)) break;
			f += _ - (1 << g - m[w]), m[w] = t;
		}
		for (f >>= h; f > 0;) {
			var y = a[i].s;
			m[y] < t ? f -= 1 << t - m[y]++ - 1 : ++i;
		}
		for (; i >= 0 && f; --i) {
			var v = a[i].s;
			m[v] == t && (--m[v], ++f);
		}
		g = t;
	}
	return {
		t: new Ke(m),
		l: g
	};
}, Mt = function(e, t, n) {
	return -1 == e.s ? Math.max(Mt(e.l, t, n + 1), Mt(e.r, t, n + 1)) : t[e.s] = n;
}, bt = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new Je(++t), i = 0, r = e[0], a = 1, s = function(e) {
		n[i++] = e;
	}, o = 1; o <= t; ++o) if (e[o] == r && o != t) ++a;
	else {
		if (!r && a > 2) {
			for (; a > 138; a -= 138) s(32754);
			a > 2 && (s(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
		} else if (a > 3) {
			for (s(r), --a; a > 6; a -= 6) s(8304);
			a > 2 && (s(a - 3 << 5 | 8208), a = 0);
		}
		for (; a--;) s(r);
		a = 1, r = e[o];
	}
	return {
		c: n.subarray(0, i),
		n: t
	};
}, xt = function(e, t) {
	for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
	return n;
}, kt = function(e, t, n) {
	var i = n.length, r = gt(t + 2);
	e[r] = 255 & i, e[r + 1] = i >> 8, e[r + 2] = 255 ^ e[r], e[r + 3] = 255 ^ e[r + 1];
	for (var a = 0; a < i; ++a) e[r + a + 4] = n[a];
	return 8 * (r + 4 + i);
}, St = function(e, t, n, i, r, a, s, o, l, u, c) {
	wt(t, c++, n), ++r[256];
	for (var d = vt(r, 15), p = d.t, m = d.l, g = vt(a, 15), f = g.t, h = g.l, _ = bt(p), w = _.c, y = _.n, v = bt(f), M = v.c, b = v.n, x = new Je(19), k = 0; k < w.length; ++k) ++x[31 & w[k]];
	for (k = 0; k < M.length; ++k) ++x[31 & M[k]];
	for (var S = vt(x, 7), I = S.t, A = S.l, R = 19; R > 4 && !I[Xe[R - 1]]; --R);
	var T, N, E, C, $ = u + 5 << 3, O = xt(r, ct) + xt(a, dt) + s, B = xt(r, p) + xt(a, f) + s + 14 + 3 * R + xt(x, I) + 2 * x[16] + 3 * x[17] + 7 * x[18];
	if (l >= 0 && $ <= O && $ <= B) return kt(t, c, e.subarray(l, l + u));
	if (wt(t, c, 1 + (B < O)), c += 2, B < O) {
		T = ut(p, m, 0), N = p, E = ut(f, h, 0), C = f;
		var L = ut(I, A, 0);
		for (wt(t, c, y - 257), wt(t, c + 5, b - 1), wt(t, c + 10, R - 4), c += 14, k = 0; k < R; ++k) wt(t, c + 3 * k, I[Xe[k]]);
		c += 3 * R;
		for (var D = [w, M], P = 0; P < 2; ++P) {
			var j = D[P];
			for (k = 0; k < j.length; ++k) {
				var F = 31 & j[k];
				wt(t, c, L[F]), c += I[F], F > 15 && (wt(t, c, j[k] >> 5 & 127), c += j[k] >> 12);
			}
		}
	} else T = pt, N = ct, E = mt, C = dt;
	for (k = 0; k < o; ++k) {
		var W = i[k];
		if (W > 255) {
			yt(t, c, T[257 + (F = W >> 18 & 31)]), c += N[F + 257], F > 7 && (wt(t, c, W >> 23 & 31), c += Ze[F]);
			var G = 31 & W;
			yt(t, c, E[G]), c += C[G], G > 3 && (yt(t, c, W >> 5 & 8191), c += Qe[G]);
		} else yt(t, c, T[W]), c += N[W];
	}
	return yt(t, c, T[256]), c + N[256];
}, It = new Ye([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), At = new Ke(0), Rt = function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, i = 9; --i;) n = (1 & n && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), Tt = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
}, Nt = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new Ke(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, i, r) {
			if (!r && (r = { l: 1 }, t.dictionary)) {
				var a = t.dictionary.subarray(-32768), s = new Ke(a.length + e.length);
				s.set(a), s.set(e, a.length), e = s, r.w = a.length;
			}
			return function(e, t, n, i, r, a) {
				var s = a.z || e.length, o = new Ke(i + s + 5 * (1 + Math.ceil(s / 7e3)) + r), l = o.subarray(i, o.length - r), u = a.l, c = 7 & (a.r || 0);
				if (t) {
					c && (l[0] = a.r >> 3);
					for (var d = It[t - 1], p = d >> 13, m = 8191 & d, g = (1 << n) - 1, f = a.p || new Je(32768), h = a.h || new Je(g + 1), _ = Math.ceil(n / 3), w = 2 * _, y = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, v = new Ye(25e3), M = new Je(288), b = new Je(32), x = 0, k = 0, S = a.i || 0, I = 0, A = a.w || 0, R = 0; S + 2 < s; ++S) {
						var T = y(S), N = 32767 & S, E = h[T];
						if (f[N] = E, h[T] = N, A <= S) {
							var C = s - S;
							if ((x > 7e3 || I > 24576) && (C > 423 || !u)) {
								c = St(e, l, 0, v, M, b, k, I, R, S - R, c), I = x = k = 0, R = S;
								for (var $ = 0; $ < 286; ++$) M[$] = 0;
								for ($ = 0; $ < 30; ++$) b[$] = 0;
							}
							var O = 2, B = 0, L = m, D = N - E & 32767;
							if (C > 2 && T == y(S - D)) for (var P = Math.min(p, C) - 1, j = Math.min(32767, S), F = Math.min(258, C); D <= j && --L && N != E;) {
								if (e[S + O] == e[S + O - D]) {
									for (var W = 0; W < F && e[S + W] == e[S + W - D]; ++W);
									if (W > O) {
										if (O = W, B = D, W > P) break;
										var G = Math.min(D, W - 2), z = 0;
										for ($ = 0; $ < G; ++$) {
											var U = S - D + $ & 32767, V = U - f[U] & 32767;
											V > z && (z = V, E = U);
										}
									}
								}
								D += (N = E) - (E = f[N]) & 32767;
							}
							if (B) {
								v[I++] = 268435456 | it[O] << 18 | at[B];
								var H = 31 & it[O], q = 31 & at[B];
								k += Ze[H] + Qe[q], ++M[257 + H], ++b[q], A = S + O, ++x;
							} else v[I++] = e[S], ++M[e[S]];
						}
					}
					for (S = Math.max(S, A); S < s; ++S) v[I++] = e[S], ++M[e[S]];
					c = St(e, l, u, v, M, b, k, I, R, S - R, c), u || (a.r = 7 & c | l[c / 8 | 0] << 3, c -= 7, a.h = h, a.p = f, a.i = S, a.w = A);
				} else {
					for (S = a.w || 0; S < s + u; S += 65535) {
						var K = S + 65535;
						K >= s && (l[c / 8 | 0] = u, K = s), c = kt(l, c + 1, e.subarray(S, K));
					}
					a.i = s;
				}
				return ft(o, 0, i + gt(c) + r);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? r.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, n, i, r);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || _t(5), this.s.l && _t(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var i = new Ke(-32768 & n);
				i.set(this.b.subarray(0, this.s.z)), this.b = i;
			}
			var r = this.b.length - this.s.z;
			this.b.set(e.subarray(0, r), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(r), 32768), this.s.z = e.length - r + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = At);
	}, e.prototype.flush = function(e) {
		if (this.ondata || _t(5), this.s.l && _t(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new Ke(6);
			t[0] = this.s.r >> 3;
			var n = kt(t, this.s.r, At);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), Et = "undefined" != typeof TextEncoder && new TextEncoder(), Ct = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	Ct.decode(At, { stream: !0 });
} catch (Fs) {}
function $t(e, t) {
	if (t) {
		for (var n = new Ke(e.length), i = 0; i < e.length; ++i) n[i] = e.charCodeAt(i);
		return n;
	}
	if (Et) return Et.encode(e);
	var r = e.length, a = new Ke(e.length + (e.length >> 1)), s = 0, o = function(e) {
		a[s++] = e;
	};
	for (i = 0; i < r; ++i) {
		if (s + 5 > a.length) {
			var l = new Ke(s + 8 + (r - i << 1));
			l.set(a), a = l;
		}
		var u = e.charCodeAt(i);
		u < 128 || t ? o(u) : u < 2048 ? (o(192 | u >> 6), o(128 | 63 & u)) : u > 55295 && u < 57344 ? (o(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++i)) >> 18), o(128 | u >> 12 & 63), o(128 | u >> 6 & 63), o(128 | 63 & u)) : (o(224 | u >> 12), o(128 | u >> 6 & 63), o(128 | 63 & u));
	}
	return ft(a, 0, s);
}
var Ot = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var i = e[n].length;
		i > 65535 && _t(9), t += i + 4;
	}
	return t;
}, Bt = function(e, t, n, i, r, a, s, o) {
	var l = i.length, u = n.extra, c = o && o.length, d = Ot(u);
	Tt(e, t, null != s ? 33639248 : 67324752), t += 4, null != s && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (a < 0 && 8), e[t++] = r && 8, e[t++] = 255 & n.compression, e[t++] = n.compression >> 8;
	var p = new Date(null == n.mtime ? Date.now() : n.mtime), m = p.getFullYear() - 1980;
	if ((m < 0 || m > 119) && _t(10), Tt(e, t, m << 25 | p.getMonth() + 1 << 21 | p.getDate() << 16 | p.getHours() << 11 | p.getMinutes() << 5 | p.getSeconds() >> 1), t += 4, -1 != a && (Tt(e, t, n.crc), Tt(e, t + 4, a < 0 ? -a - 2 : a), Tt(e, t + 8, n.size)), Tt(e, t + 12, l), Tt(e, t + 14, d), t += 16, null != s && (Tt(e, t, c), Tt(e, t + 6, n.attrs), Tt(e, t + 10, s), t += 14), e.set(i, t), t += l, d) for (var g in u) {
		var f = u[g], h = f.length;
		Tt(e, t, +g), Tt(e, t + 2, h), e.set(f, t + 4), t += 4 + h;
	}
	return c && (e.set(o, t), t += c), t;
}, Lt = function() {
	function e(e) {
		var t;
		this.filename = e, this.c = (t = -1, {
			p: function(e) {
				for (var n = t, i = 0; i < e.length; ++i) n = Rt[255 & n ^ e[i]] ^ n >>> 8;
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
		this.ondata || _t(5), this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1);
	}, e;
}(), Dt = function() {
	function e(e) {
		this.ondata = e, this.u = [], this.d = 1;
	}
	return e.prototype.add = function(e) {
		var t = this;
		if (this.ondata || _t(5), 2 & this.d) this.ondata(_t(4 + 8 * (1 & this.d), 0, 1), null, !1);
		else {
			var n = $t(e.filename), i = n.length, r = e.comment, a = r && $t(r), s = i != e.filename.length || a && r.length != a.length, o = i + Ot(e.extra) + 30;
			i > 65535 && this.ondata(_t(11, 0, 1), null, !1);
			var l = new Ke(o);
			Bt(l, 0, e, n, s, -1);
			var u = [l], c = function() {
				for (var e = 0, n = u; e < n.length; e++) {
					var i = n[e];
					t.ondata(null, i, !1);
				}
				u = [];
			}, d = this.d;
			this.d = 0;
			var p = this.u.length, m = function(e, t) {
				var n = {};
				for (var i in e) n[i] = e[i];
				for (var i in t) n[i] = t[i];
				return n;
			}(e, {
				f: n,
				u: s,
				o: a,
				t: function() {
					e.terminate && e.terminate();
				},
				r: function() {
					if (c(), d) {
						var e = t.u[p + 1];
						e ? e.r() : t.d = 1;
					}
					d = 1;
				}
			}), g = 0;
			e.ondata = function(n, i, r) {
				if (n) t.ondata(n, i, r), t.terminate();
				else if (g += i.length, u.push(i), r) {
					var a = new Ke(16);
					Tt(a, 0, 134695760), Tt(a, 4, e.crc), Tt(a, 8, g), Tt(a, 12, e.size), u.push(a), m.c = g, m.b = o + g + 16, m.crc = e.crc, m.size = e.size, d && m.r(), d = 1;
				} else d && c();
			}, this.u.push(m);
		}
	}, e.prototype.end = function() {
		var e = this;
		2 & this.d ? this.ondata(_t(4 + 8 * (1 & this.d), 0, 1), null, !0) : (this.d ? this.e() : this.u.push({
			r: function() {
				1 & e.d && (e.u.splice(-1, 1), e.e());
			},
			t: function() {}
		}), this.d = 3);
	}, e.prototype.e = function() {
		for (var e = 0, t = 0, n = 0, i = 0, r = this.u; i < r.length; i++) n += 46 + (m = r[i]).f.length + Ot(m.extra) + (m.o ? m.o.length : 0);
		for (var a, s, o, l, u, c = new Ke(n + 22), d = 0, p = this.u; d < p.length; d++) {
			var m = p[d];
			Bt(c, e, m, m.f, m.u, -m.c - 2, t, m.o), e += 46 + m.f.length + Ot(m.extra) + (m.o ? m.o.length : 0), t += m.b;
		}
		a = c, s = e, o = this.u.length, l = n, u = t, Tt(a, s, 101010256), Tt(a, s + 8, o), Tt(a, s + 10, o), Tt(a, s + 12, l), Tt(a, s + 16, u), this.ondata(null, c, !0), this.d = 2;
	}, e.prototype.terminate = function() {
		for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
		this.d = 2;
	}, e;
}();
function Pt(e) {
	return .25 * Math.max(1, e / 968617);
}
function jt(e, t) {
	return {
		...t,
		maxExtraWorkers: Number.POSITIVE_INFINITY,
		workerMemoryGib: Pt(e.reduce((e, t) => Math.max(e, t.size), 0))
	};
}
function Ft({ cores: e, deviceMemoryGib: t, maxExtraWorkers: n = 3, workerMemoryGib: i = 1 }) {
	return !Number.isFinite(t) || (t ?? 0) < 8 || !Number.isFinite(e) || (e ?? 0) <= 2 ? 0 : Math.max(0, Math.min(n, Math.floor(e) - 2, Math.floor(t / 2 / i) - 1));
}
function Wt(e, t) {
	return t.primary && e instanceof Error && e.message.includes("timed out during");
}
let Gt = 0;
async function zt(e, { primary: t, getPrimary: n, extraWorkers: i, signal: r, cancelOperation: a = () => {}, createWorker: l }) {
	if (r?.aborted) throw new DOMException("Aborted: raw passes", "AbortError");
	if (0 === e.length) return [];
	if (e.some((e) => {
		const t = Function.prototype.toString.call(e.run);
		return !t.includes("[native code]") && /^(?:async\s*)?(?:function(?:\s+\w+)?\s*|[\w$]+\s*)?\(\s*\)/u.test(t);
	})) throw new Error("A raw pass must receive its pool worker");
	if (0 === i && !t && !n && !l) throw new Error("A single-worker pass must borrow or inject its worker");
	const u = l ?? o, c = Array.from({ length: Math.min(e.length, i + 1) }, () => ({
		cost: 0,
		passes: []
	})), d = e.map((e, t) => ({
		pass: e,
		index: t
	}));
	i > 0 && d.sort((e, t) => t.pass.cost - e.pass.cost);
	for (const s of d) {
		const e = c.reduce((e, t) => t.cost < e.cost ? t : e);
		e.passes.push(s), e.cost += s.pass.cost;
	}
	const p = new Array(e.length), m = /* @__PURE__ */ new Set(), g = {
		stopped: !1,
		done: !1
	}, f = 1 / (i + 1), h = (e) => {
		m.delete(e) && (Gt = Math.max(0, Gt - f), e.terminate());
	};
	let _;
	const w = new Promise((e, t) => {
		_ = () => {
			g.stopped = !0, t(new DOMException("Aborted: raw passes", "AbortError"));
		}, r?.addEventListener("abort", _, { once: !0 }), r?.aborted && _();
	});
	try {
		await Promise.race([w, Promise.all(c.map(async (e, i) => {
			if (0 === e.passes.length) return;
			let r, o, l = !1;
			const c = 0 === i && (void 0 !== t || void 0 !== n), d = new Proxy({}, { get: (e, i) => {
				if (g.done) throw new Error("Raw pass pool finished");
				if (g.stopped) throw new DOMException("Aborted: raw passes", "AbortError");
				if (!o && !r) if (c) o = t ?? n();
				else if (Gt + f <= 1 + 4 * Number.EPSILON) {
					Gt += f;
					try {
						r = u({ singleThread: !0 });
					} catch (a) {
						throw Gt = Math.max(0, Gt - f), a;
					}
					m.add(r);
				} else o = t ?? n?.() ?? s();
				return Reflect.get(o ?? r.api, i);
			} }), _ = {
				cancel: () => {
					o ? a() : (l = !0, r && h(r));
				},
				get primary() {
					return void 0 !== o || Boolean(c);
				}
			};
			try {
				for (const { pass: t, index: n } of e.passes) {
					if (g.stopped) return;
					l && (r = void 0, l = !1), p[n] = await t.run(d, _);
				}
			} catch (w) {
				throw g.stopped = !0, w;
			} finally {
				r && h(r);
			}
		}))]);
	} catch (y) {
		g.stopped = !0;
		try {
			a();
		} catch {}
		throw y;
	} finally {
		g.done = !0, _ && r?.removeEventListener("abort", _);
		for (const e of m) h(e);
	}
	return p;
}
function Ut(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function Vt(e) {
	const t = [
		"timestamps",
		"activity",
		"sleep_scores"
	].flatMap((t) => {
		const n = new Uint32Array(e.length + 1);
		for (const [s, o] of e.entries()) n[s + 1] = n[s] + (o[t]?.length ?? 0);
		const i = "sleep_scores" === t ? Uint8Array : Float64Array, r = e[0]?.[t], a = 1 === e.length && r instanceof i ? r : new i(n[e.length]);
		if (a !== r) for (const [s, o] of e.entries()) a.set(o[t] ?? [], n[s]);
		return [a, n];
	});
	return {
		request: [JSON.stringify({ days: e.map(({ timestamps: e, activity: t, sleep_scores: n, ...i }) => i) }), ...t],
		transfer: t.filter((t) => !e.some((e) => t === e.timestamps || t === e.activity)).map((e) => e.buffer)
	};
}
function Ht(e, t) {
	const n = function(e) {
		const t = Ut(e.ggirTimestamps), n = Ut(e.ggirEnmo);
		if (t.length > 0 && n.length > 0 && function(e) {
			for (const t of e) if (Number.isFinite(t)) return !0;
			return !1;
		}(n)) return {
			timestamps: t,
			signal: n,
			source: "ggir_enmo"
		};
		const i = new Float64Array(e.timestamps), r = new Float64Array(e.vectorMagnitude);
		return i.length > 0 && r.length > 0 ? {
			timestamps: i,
			signal: r,
			source: "vector_magnitude"
		} : null;
	}(t);
	if (!n || n.timestamps.length < 2) return null;
	const { timestamps: i, signal: r } = n, a = i[1] - i[0];
	if (!(a > 0 && Number.isInteger(a))) return null;
	for (let s = 1; s < i.length; s++) if (i[s] - i[s - 1] !== a) return null;
	return {
		wire: {
			id: `${String(e)}:${t.date}`,
			series_id: String(e),
			analysis_date: t.date,
			epoch_length_seconds: a,
			timestamps: i,
			activity: r
		},
		source: n.source
	};
}
async function qt(e, t, n, i, r = 60, a, s) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == i || n >= i) return null;
	const o = new Uint8Array(e.length);
	for (let u = 0; u < e.length; u++) o[u] = 1 === e[u] ? 1 : 0;
	const l = await Kt(o, a && a.length === e.length ? a : new Float64Array(e.length), t, n, i, r, s);
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
async function Kt(e, t, n, i, r, a = 60, s) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == i || null == r || i >= r) return null;
	const o = await async function(e, t, n, i) {
		const r = await Z(i).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === r.length ? {
			startIdx: r[0],
			endIdx: r[1]
		} : null;
	}(n, i, r, s);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, u = o.endIdx + 1, c = e instanceof Uint8Array ? e.slice(l, u) : new Uint8Array(e.slice(l, u)), d = t instanceof Float64Array ? t.slice(l, u) : Float64Array.from(t.slice(l, u)), p = await Z(s).computeSleepMetrics(c, d, a), m = n[l] ?? 0, g = n[u - 1] ?? m, f = null != p.firstSleepEpochIdx ? n[l + p.firstSleepEpochIdx] ?? m : m, h = null != p.lastSleepEpochIdx ? n[l + p.lastSleepEpochIdx] ?? g : g;
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
function Jt(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const i = fe(e), r = Array.from(i.timestamps);
	if (i.ggir) return {
		timestamps: r,
		algorithmResults: i.sleepScores,
		activity: null,
		scoresStale: null
	};
	const a = e.axisY;
	let s = a ? new Float64Array(a) : null;
	const o = s ? e.actiwareActivityInvalid : void 0;
	if (s && o) {
		const e = new Uint8Array(o);
		if (e.length === s.length && e.some((e) => 1 === e)) {
			s = s.slice();
			for (let t = 0; t < e.length; t += 1) 1 === e[t] && (s[t] = NaN);
		}
	}
	if (!e.algorithmResults || "object" != typeof e.algorithmResults) return console.warn(`[loadActivityForMetrics] Missing algorithmResults for activity day id=${e.id}`), {
		timestamps: r,
		algorithmResults: null,
		activity: s,
		scoresStale: n
	};
	const l = N(e, t);
	return {
		timestamps: r,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: s,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
const Yt = /* @__PURE__ */ new Map();
async function Zt(e, t) {
	if (Yt.has(e)) return Yt.get(e);
	try {
		const n = await Z(t).resolveTimezone(e);
		return Yt.set(e, n), n;
	} catch (_t) {
		t?.throwIfAborted(), console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, _t);
		return;
	}
}
function Qt(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : He();
}
async function Xt(e) {
	try {
		return Qt((await se(e))?.extraSettings);
	} catch (_t) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", _t), He();
	}
}
function en(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const tn = {
	zone: null,
	reason: null
};
async function nn(e, t, n) {
	const i = e.ggirTimezone?.trim();
	let r = null;
	if (i) {
		const e = await Zt(i, n);
		if (!e) return tn;
		if ("iana" === e.kind) return {
			zone: e.zone,
			reason: null
		};
		r = function(e) {
			const t = /^([+-])(\d{2}):(\d{2})(?::\d{2})?$/u.exec(e.trim());
			if (!t) return null;
			const n = 60 * Number(t[2]) + Number(t[3]);
			return "-" === t[1] ? -n : n;
		}(e.zone);
	} else "number" == typeof e.recording?.gmtOffsetMinutes && (r = e.recording.gmtOffsetMinutes);
	if (null === r) return be(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : tn;
	const a = await Zt(t, n);
	if (void 0 === a) return tn;
	if ("iana" !== a?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const s = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== s && (await qe(a.zone, s, Z(n))).includes(r) ? {
		zone: a.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${en(r)} is not a ${a.zone} offset`
	};
}
function rn(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [i, r] of e.entries()) t[i + 1] = t[i] + r.length;
	const n = new Float64Array(t[e.length]);
	for (const [i, r] of e.entries()) n.set(r, t[i]);
	return [n, t];
}
const an = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), sn = [
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
var on = sn.map(() => an);
Object.fromEntries(sn.map(([e], t) => [e, on[t]]));
const ln = [
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
async function un(e, t, n, i) {
	const r = void 0 === t ? n?.window[e] : 48 === t ? n?.view48[e] : void 0;
	if (r) return {
		start: r[0],
		end: r[1]
	};
	const a = await (i ?? s()).analysisWindowBounds(e, t);
	return a ? {
		start: a[0],
		end: a[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function cn(e, t, n) {
	const i = e instanceof Float64Array ? e : Float64Array.from(e), [r, a] = await (n ?? s()).analysisWindowSlice(i, t);
	return {
		startIndex: r,
		endIndex: a
	};
}
async function dn(e, t = s()) {
	const n = [...new Set(e)], i = await t.analysisDatesOf(Float64Array.from(n)), r = new Map(n.map((e, t) => [e, i[t] ?? ""]));
	return (e) => r.get(e) ?? "";
}
function pn(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [i, r] of Object.entries(Be(e, e.nonwearChoiAxis ?? Ce()))) r && (n[t[i] ?? i] = new Uint8Array(r));
	return n;
}
async function mn(e, t, n, i = {}) {
	const { signal: r, includeNonwearMasks: a = !1 } = i, s = e.get(t), o = Jt(s, n), l = a && s ? pn(s) : {}, u = e.get(await $(t, void 0, Z(r))), c = o.timestamps[o.timestamps.length - 1], d = u ? Jt(u, n) : null, p = d?.timestamps[0], m = void 0 !== u && null !== d && void 0 !== c && void 0 !== p && p > c, g = o.scoresStale ?? d?.scoresStale ?? null;
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
	const y = a ? pn(u) : {}, v = {};
	for (const M of ln) {
		const e = l[M], t = y[M];
		if (!e && !t) continue;
		const n = new Uint8Array(h);
		e && n.set(e.subarray(0, f)), t && n.set(t.subarray(0, h - f), f), v[M] = n;
	}
	return {
		timestamps: [...o.timestamps, ...d.timestamps],
		algorithmResults: _,
		activity: w,
		masks: v,
		scoresStale: null
	};
}
async function gn(e, t, n, i) {
	const r = await n.files.get(e.fileId);
	if (!r) return;
	const a = /* @__PURE__ */ new Map();
	for (const s of [e.date, await $(e.date, void 0, Z(i))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, s]).first();
		t && a.set(s, t);
	}
	await async function(e, t, n, i) {
		const { date: r, file: a, activityMap: s, verdict: o } = t, l = t.spanning ?? await mn(s, r, o, { signal: i });
		if (null !== l.scoresStale || !l.algorithmResults) return e.sleepMarkers.map(() => null);
		const u = function(e, t) {
			return JSON.stringify([
				t.seriesRevision ?? 0,
				t.epochLengthSeconds || 60,
				e.algorithm,
				e.sleepMarkers.map((e) => [e.onsetTimestamp ?? null, e.offsetTimestamp ?? null])
			]);
		}(e, a);
		if (e.periodMetrics?.inputs === u) return e.periodMetrics.metrics;
		const { timestamps: c, algorithmResults: d } = l, p = [];
		for (const m of e.sleepMarkers) p.push(d && c.length > 0 && m.onsetTimestamp && m.offsetTimestamp ? await Kt(d, l.activity ?? new Float64Array(d.length), l.timestamps, m.onsetTimestamp, m.offsetTimestamp, a.epochLengthSeconds || 60, i) : null);
		if (void 0 !== e.id) try {
			await Q(n, [n.markers], () => we(e.id, {
				inputs: u,
				metrics: p
			}, n), i);
		} catch {
			i?.throwIfAborted();
		}
		return p;
	}(e, {
		date: e.date,
		file: r,
		activityMap: a,
		verdict: t
	}, n, i);
}
Object.fromEntries(Object.values(L).map((e) => [e, e === L.ggir_saved ? Me : $e(e)]));
const fn = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], hn = ["under-series", "over-series"], _n = ["full-resolution-v1", "min-max-gap-envelope-v1"], wn = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function yn(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function vn(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? yn(t, "expected an object") : e;
}
function Mn(e, t) {
	return Array.isArray(e) ? e : yn(t, "expected an array");
}
function bn(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : yn(t, "expected a finite number");
}
function xn(e, t) {
	const n = bn(e, t);
	return n <= 0 ? yn(t, "expected a positive number") : n;
}
function kn(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : yn(t, "expected a safe integer");
}
function Sn(e, t) {
	const n = kn(e, t);
	return n < 0 ? yn(t, "expected a non-negative safe integer") : n;
}
function In(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? yn(t, "expected a boolean") : { [n]: e };
}
function An(e, t) {
	return "string" != typeof e || 0 === e.length ? yn(t, "expected a non-empty string") : e;
}
function Rn(e, t) {
	return "string" == typeof e && fn.includes(e) ? e : yn(t, "expected a supported tone");
}
function Tn(e, t) {
	return "string" == typeof e && hn.includes(e) ? e : yn(t, "expected a supported phase");
}
function Nn(e, t) {
	const n = vn(e, t), i = bn(n.min, `${t}.min`), r = bn(n.max, `${t}.max`);
	return r <= i || !Number.isFinite(r - i) ? yn(t, "expected a finite ascending range") : {
		min: i,
		max: r
	};
}
function En(e, t) {
	const n = `series[${t}]`, i = vn(e, n), r = Mn(i.points, `${n}.points`);
	let a = Number.NEGATIVE_INFINITY;
	const s = (e) => `${n}.points[${e}]`, o = r.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return yn(s(t), "expected an object");
		const n = e, i = n.timestamp;
		if ("number" != typeof i || !Number.isFinite(i)) return yn(`${s(t)}.timestamp`, "expected a finite number");
		if (i <= a) return yn(`${s(t)}.timestamp`, "expected strictly ascending timestamps");
		a = i;
		const r = n.value;
		return null === r || "number" == typeof r && Number.isFinite(r) ? {
			timestamp: i,
			value: r
		} : yn(`${s(t)}.value`, "expected a finite number");
	});
	return {
		tone: Rn(i.tone, `${n}.tone`),
		strokeWidth: xn(i.strokeWidth, `${n}.strokeWidth`),
		valueDomain: Nn(i.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function Cn(e, t) {
	const n = `overlays[${t}]`, i = vn(e, n), r = {
		phase: Tn(i.phase, `${n}.phase`),
		order: kn(i.order, `${n}.order`),
		tone: Rn(i.tone, `${n}.tone`)
	};
	if ("interval" === i.kind) {
		const e = bn(i.startTimestamp, `${n}.startTimestamp`), t = bn(i.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? yn(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...r,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === i.kind ? {
		kind: "threshold",
		...r,
		value: bn(i.value, `${n}.value`),
		...In(i.draggable, `${n}.draggable`, "draggable"),
		...In(i.selected, `${n}.selected`, "selected"),
		...In(i.handle, `${n}.handle`, "handle"),
		...void 0 === i.label ? {} : { label: An(i.label, `${n}.label`) }
	} : "instant" === i.kind ? {
		kind: "instant",
		...r,
		timestamp: bn(i.timestamp, `${n}.timestamp`)
	} : yn(`${n}.kind`, "expected interval, threshold, or instant");
}
function $n(e, t, n) {
	const i = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(i) ? i : yn("projection", "expected a finite pixel coordinate");
}
function On(e, t, n) {
	const i = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(i) ? i : yn("projection", "expected a finite pixel coordinate");
}
function Bn(e) {
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
function Ln(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Dn(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, i = t.plotArea.height, r = wn[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const a = Ln($n(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), s = Ln($n(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${Bn(a)}" y="0" width="${Bn(Math.max(1, s - a))}" height="${Bn(i)}" fill="${r}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const a = On(e.value, t.valueDomain, i), s = !0 === e.selected, o = s ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${s ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${Bn(a)}" x2="${Bn(n)}" y2="${Bn(a)}" stroke="${r}" stroke-width="${s ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const a = $n(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${Bn(a)}" y1="0" x2="${Bn(a)}" y2="${Bn(i)}" stroke="${r}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function Pn(e) {
	const t = function(e) {
		const t = vn(e, "scene");
		if (2 !== t.version) return yn("version", "expected 2");
		const n = vn(t.grid, "grid"), i = {
			strategy: (r = n.strategy, "string" == typeof r && _n.includes(r) ? r : yn("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: Sn(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: Sn(n.renderedPointCount, "grid.renderedPointCount")
		};
		var r;
		if (i.renderedPointCount > i.sourcePointCount) return yn("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === i.strategy && i.renderedPointCount !== i.sourcePointCount) return yn("grid", "full-resolution strategy requires equal point counts");
		const a = vn(t.size, "size"), s = {
			width: xn(a.width, "size.width"),
			height: xn(a.height, "size.height")
		}, o = vn(t.plotArea, "plotArea"), l = {
			left: bn(o.left, "plotArea.left"),
			top: bn(o.top, "plotArea.top"),
			width: xn(o.width, "plotArea.width"),
			height: xn(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > s.width || l.top + l.height > s.height) return yn("plotArea", "expected bounds contained by size");
		const u = Nn(t.viewport, "viewport"), c = Nn(t.valueDomain, "valueDomain"), d = Mn(t.series, "series").map(En);
		if (0 === d.length && 0 !== i.renderedPointCount) return yn("grid.renderedPointCount", "expected zero when series is empty");
		const p = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let h = 0; h < d.length; h++) {
			const e = d[h]?.points ?? [];
			if (e.length !== i.renderedPointCount) return yn(`series[${h}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== p[t]) return yn(`series[${h}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const m = Mn(t.overlays, "overlays").map(Cn), g = null === t.cursorTimestamp ? null : bn(t.cursorTimestamp, "cursorTimestamp");
		let f = null;
		if (null !== t.selection) {
			const e = vn(t.selection, "selection"), n = bn(e.startTimestamp, "selection.startTimestamp"), i = bn(e.endTimestamp, "selection.endTimestamp");
			if (i <= n) return yn("selection", "expected a half-open ascending interval");
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
			viewport: u,
			valueDomain: c,
			series: d,
			overlays: m,
			cursorTimestamp: g,
			selection: f
		};
	}(e), n = Bn(t.size.width), i = Bn(t.size.height), r = Bn(t.plotArea.width), a = Bn(t.plotArea.height), s = Dn(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
		let i = "", r = !1;
		const a = {
			left: 0,
			width: n.plotArea.width
		}, s = /* @__PURE__ */ new Map();
		for (const o of e.points) {
			if (null == o.value) {
				r = !1;
				continue;
			}
			const t = $n(o.timestamp, n.viewport, a);
			let l = s.get(o.value);
			void 0 === l && (l = Bn(On(o.value, e.valueDomain, n.plotArea.height)), s.set(o.value, l)), i += `${r ? "L" : "M"}${Bn(t)} ${l}`, r = !0;
		}
		return 0 === i.length ? "" : `<path data-series-index="${t}" d="${i}" fill="none" stroke="${wn[e.tone]}" stroke-width="${Bn(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = Dn(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${i}" viewBox="0 0 ${n} ${i}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${i}" fill="#ffffff"/><svg x="${Bn(t.plotArea.left)}" y="${Bn(t.plotArea.top)}" width="${r}" height="${a}" viewBox="0 0 ${r} ${a}" overflow="hidden"><rect x="0" y="0" width="${r}" height="${a}" fill="#ffffff"/>${s}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = Ln($n(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), i = Ln($n(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${Bn(n)}" y="0" width="${Bn(Math.max(1, i - n))}" height="${Bn(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = $n(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${Bn(n)}" y1="0" x2="${Bn(n)}" y2="${Bn(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${Bn(t.plotArea.left)}" y="${Bn(t.plotArea.top)}" width="${r}" height="${a}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
const jn = "local-export-streams";
var Fn = class extends Error {
	file;
	step;
	constructor(e, t, n) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t;
	}
};
const Wn = 65536, Gn = "manifest.json", zn = "Duplicate export entry: ", Un = "Checking the export inputs", Vn = "Reading recordings", Hn = "Writing ZIP";
function qn(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function Kn(e) {
	return String(e).padStart(2, "0");
}
function Jn(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const Yn = [
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
new Set(Yn.slice(16).map(([e]) => e));
var Zn = class extends Error {};
const Qn = "edit_recompute_requires_ms2_ms3", Xn = /* @__PURE__ */ new Set([
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
]), ei = A.invalid_night_row.markerTypeCell, ti = new Set(Yn.map(([, e]) => e)), ni = /* @__PURE__ */ new Set([
	E.ggir_sleepparam.header,
	E.ggir_guider_onset.header,
	E.ggir_guider_wakeup.header,
	E.ggir_guider_spt_duration.header,
	E.ggir_error_onset.header,
	E.ggir_error_wake.header,
	E.ggir_error_dur.header,
	E.ggir_fraction_night_invalid.header,
	E.ggir_duration_sib_wakinghours.header,
	E.ggir_number_sib_sleepperiod.header,
	E.ggir_number_sib_wakinghours.header,
	E.ggir_duration_sib_wakinghours_atleast15min.header,
	E.ggir_guider_onset_ts.header,
	E.ggir_guider_wakeup_ts.header,
	E.ggir_page.header,
	E.ggir_daysleeper.header,
	E.ggir_sleeplog_id.header,
	E.ggir_guider.header,
	E.ggir_longitudinal_axis.header
]), ii = /* @__PURE__ */ new Set([
	E.ggir_sleep_duration_in_spt.header,
	E.ggir_waso.header,
	E.ggir_number_of_awakenings.header,
	E.ggir_sleeplatency.header,
	E.ggir_sleepefficiency.header
]), ri = /* @__PURE__ */ new Set([
	...ii,
	E.ggir_nonwear_perc_spt.header,
	E.ggir_sleeponset.header,
	E.ggir_wakeup.header,
	E.ggir_spt_duration.header,
	E.ggir_guider_onset.header,
	E.ggir_guider_wakeup.header,
	E.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	E.ggir_sleeponset_ts.header,
	E.ggir_wakeup_ts.header,
	E.ggir_guider_onset_ts.header,
	E.ggir_guider_wakeup_ts.header,
	E.ggir_daysleeper.header,
	E.ggir_cleaningcode.header,
	E.ggir_guider.header,
	E.ggir_error_onset.header,
	E.ggir_error_wake.header,
	E.ggir_error_dur.header,
	E.ggir_fraction_night_invalid.header,
	E.ggir_duration_sib_wakinghours.header,
	E.ggir_number_sib_sleepperiod.header,
	E.ggir_number_sib_wakinghours.header,
	E.ggir_duration_sib_wakinghours_atleast15min.header
]), ai = /* @__PURE__ */ new Set([
	E.ggir_id.header,
	E.ggir_filename.header,
	E.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	E.ggir_sleep_regularity_index1.header,
	E.ggir_sri_fraction_valid.header,
	E.ggir_calendar_date.header,
	E.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	E.ggir_cleaningcode.header,
	E.ggir_guider.header,
	E.ggir_sleeplog_used.header,
	E.ggir_acc_available.header,
	E.ggir_daysleeper.header
]), si = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), oi = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), li = new Set(Object.values(E).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), ui = new Set(Object.values(E).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), ci = new Set(Object.values(k).map((e) => e.reviewSource)), di = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim()), pi = di, mi = "refusal_detail_missing_reason";
function gi(e, t, n, i) {
	const r = (e) => n.get(e) ?? "", a = r(t + "_missing_reason");
	if (a && !Xn.has(a)) return null;
	const s = a || null;
	if (e.startsWith("part2_")) return "source_reported_missing";
	if (e.includes("_ggir_review")) {
		if (s) return s;
		const e = r("review_source");
		return ci.has(e) ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const o = r(E.marker_type.header) === ei || "actiware_intervals_export.csv" === e && r(E.interval_kind.header) === ei;
	if (!function(e, t) {
		return "actiware_intervals_export.csv" === e ? ti.has(t) : "actiware_sleep_wake_export.csv" === e ? t === E.actiware_sleep_wake.header || t === E.actiware_wake_threshold.header : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			E.ggir_id.header,
			E.ggir_filename.header,
			E.ggir_calendar_date.header,
			E.ggir_weekday.header,
			E.ggir_sleeplog_id.header,
			E.ggir_guider_corrected.header,
			E.ggir_cleaningcode.header
		].includes(t) : li.has(t);
	}(e, t)) return s || (o ? "invalid_night" : "Manual Nonwear" === r(E.marker_type.header) ? "manual_nonwear_period" : null);
	if ("actiware_intervals_export.csv" === e && ti.has(t)) {
		if (o) return "invalid_night";
		const e = r(E.interval_kind.header).toLowerCase(), n = r(E.interval_start_local.header);
		if ("daily" === e && n && n === r(E.interval_end_local.header)) return "zero_interval_rows";
		if ([
			E.actiware_onset_latency.header,
			E.actiware_efficiency.header,
			E.actiware_waso.header
		].includes(t)) {
			if ("sleep" !== e) return "not_applicable_to_row";
			if (pi(r(E.actiware_duration.header))) return null;
			const t = r(E.interval_start_local.header), n = r(E.interval_end_local.header);
			if (!t || !n) return null;
			let a = !1;
			for (const e of i) if (e.get(E.filename.header) === r(E.filename.header) && "rest" === e.get(E.interval_kind.header) && (e.get(E.interval_start_local.header) ?? "") <= t && n <= (e.get(E.interval_end_local.header) ?? "")) {
				a = !0;
				break;
			}
			return a ? null : "no_eligible_rest";
		}
		if (pi(r(E.actiware_duration.header))) return null;
		if (t === E.actiware_off_wrist.header || t === E.actiware_off_wrist_percent.header) return t === E.actiware_off_wrist_percent.header && "0.00" === r(E.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === s ? s : null;
		if (t === E.actiware_avg_ac_per_min.header) return 100 === Number(r(E.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			E.actiware_invalid_sw_percent.header,
			E.actiware_wake_percent.header,
			E.actiware_sleep_percent.header
		].includes(t)) {
			if ("0.00" === r(E.actiware_duration.header)) return "zero_interval_rows";
			const e = !pi(r(E.actiware_wake_time.header)) && !pi(r(E.actiware_sleep_time.header)) && 0 === Number(r(E.actiware_wake_time.header)) && 0 === Number(r(E.actiware_sleep_time.header));
			return t === E.actiware_invalid_sw_percent.header || 100 !== Number(r(E.actiware_invalid_sw_percent.header)) && !e ? null : "no_scored_epochs";
		}
		const a = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(t);
		if (a) {
			const e = a[1];
			return "0.00" === r(E.actiware_duration.header) ? "zero_interval_rows" : pi(r("%Invalid " + e)) ? "source_reported_missing" === s ? s : null : t.startsWith("TALT ") && !pi(r("Exposure " + e)) ? "threshold_unconfigured" : 100 === Number(r("%Invalid " + e)) ? "no_valid_epochs" : null;
		}
		return null;
	}
	if ("actiware_sleep_wake_export.csv" === e) {
		if (t === E.actiware_sleep_wake.header) return "no_valid_epochs" === s ? s : null;
		if (t === E.actiware_wake_threshold.header) return "not_computed_for_export" === s ? s : null;
	}
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return ni.has(t) ? "not_computed_for_export" === s ? s : null : ii.has(t) ? "no_scored_epochs" === s || "not_applicable_to_row" === s || "scores_from_another_config" === s ? s : null : s;
	if ("sleep_export_wide.csv" === e) return s;
	if ("summary_export.csv" === e && t === E.sleep_regularity_index.header) return s && [
		"insufficient_pair",
		"no_scored_epochs",
		"no_valid_epochs",
		"not_computed_for_export",
		"scores_from_another_config"
	].includes(s) ? s : null;
	if ("physical_activity_export.csv" === e) {
		const e = r("Status"), n = r("Method");
		if ([
			"Epoch Length Seconds",
			"Native Epoch Seconds",
			"Mask Overlap Epochs"
		].includes(t)) return "Epoch Length Seconds" === t ? "ggir_enmo" === n ? "not_applicable_to_row" : null : "Native Epoch Seconds" === t ? "not_applicable" === r("Threshold Source") ? "not_applicable_to_row" : "source_reported_missing" === s ? s : null : "ggir_enmo" === n ? "not_applicable_to_row" : "needs_signal" === e ? "channel_unavailable" : "backend_required" === e ? "not_computed_for_export" : null;
		const i = {
			"Sedentary Max": "sedentaryMax",
			"Light Min": "lightMin",
			"Moderate Min": "moderateMin",
			"Vigorous Min": "vigorousMin"
		}[t];
		if (i && "not_applicable" === r("Threshold Source")) return "device_not_applicable";
		if ("needs_signal" === e) return "channel_unavailable";
		if ("backend_required" === e) return "not_computed_for_export";
		if ("ready" !== e) return null;
		const a = v.find((e) => e.method === n);
		return i && a?.cutpoint && !Number.isFinite(a.cutpoint[i]) || "MIMS Unit Total" === t && "mims" !== n ? "not_applicable_to_row" : "ggir_enmo" === n ? si.has(t) ? "source_reported_missing" === s ? s : null : oi.has(t) && "not_computed_for_export" === s ? s : null : "mims" === n && [
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
		].includes(t) ? "0.00" === r("Wake Wear Minutes") ? "no_valid_epochs" : null : "not_computed_for_export";
	}
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === r(E.marker_type.header) ? "manual_nonwear_period" : null : "true" === r(E.is_invalid_night.header).toLowerCase() && r(E.marker_type.header) === ei ? "invalid_night" : t === E.total_nap_minutes.header && "0" === r(E.nap_count.header) ? "not_applicable_to_row" : [
		E.l5_hour.header,
		E.m10_hour.header,
		E.sleep_midpoint_hour.header,
		E.valid_wear_minutes.header
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
const fi = "missing_reasons.csv";
function hi(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(u).join(","))].map((e) => e + "\n").join("");
}
function _i(e, t) {
	const n = [
		E.filename.header,
		E.ggir_filename.header,
		"ggir_filename",
		E.participant_id.header,
		E.ggir_id.header,
		E.study_date.header,
		"Analysis Date",
		E.ggir_calendar_date.header,
		"ggir_calendar_date",
		E.interval_kind.header,
		E.marker_type.header,
		E.interval_start_local.header,
		E.epoch_local.header,
		"Method"
	].flatMap((t) => {
		const n = e.get(t);
		return n ? [t + "=" + n] : [];
	});
	return n.length ? n.join("|") : "row=" + String(t);
}
function wi(e, t) {
	let n = !1, i = 0;
	for (let r = 0; r < e.length; r += 1) if ("\"" === e[r]) n && "\"" === e[r + 1] ? r += 1 : n = !n;
	else if ("," === e[r] && !n && ++i === t) return e.slice(0, r);
	return e;
}
function* yi(e, t, n = !0, i) {
	const { headerlessColumns: r, fullRowCsv: a, rowOffset: s = 0, contextRows: o } = i ?? {}, l = r?.length ? r.join(",") + "\n" + e : e, u = p(l);
	if (u.unterminatedQuotedField) throw new Error(t + ": unterminated CSV cell");
	const [d, ...m] = u.records;
	if (!d) return {
		csv: e,
		withReason: 0,
		withoutReason: 0
	};
	const g = c(d.text), f = g.findIndex((e) => e.endsWith("_missing_reason"));
	if (f >= 0 && g.slice(f).some((e) => !e.endsWith("_missing_reason"))) throw new Error(t + ": internal reason fields must trail data fields");
	const h = g.map((e, t) => ({
		header: e,
		index: t
	})).filter(({ header: e }) => "" !== e && !e.endsWith("_missing_reason")), _ = m.map((e) => c(e.text)), w = _.map((e) => new Map(g.map((t, n) => [t, e[n] ?? ""]))), y = a ? p(a).records : [], v = y[0] ? c(y[0].text) : [], M = a ? y.slice(1).map((e) => c(e.text)) : [];
	if (a && h.length > 0 && M.length !== _.length) throw new Error(t + ": complete-row evidence count differs");
	const b = a ? M.map((e) => new Map(v.map((t, n) => [t, e[n] ?? ""]))) : w;
	let x = 0, k = 0;
	for (let c = 0; c < _.length; c += 1) {
		const e = _[c], n = w[c];
		for (const { header: r, index: a } of h) {
			if ("edit_recompute_requires_ms2_ms3" === b[c].get(r + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
				yield {
					file: t,
					row: s + c + 1,
					key: _i(n, s + c + 1),
					column: r,
					reason: Qn
				}, x += 1;
				continue;
			}
			const i = e[a] ?? "";
			if (!pi(i) || "" !== i.trim() && ui.has(r)) continue;
			const l = gi(t, r, b[c], o?.() ?? b);
			l ? (x += 1, yield {
				file: t,
				row: s + c + 1,
				key: _i(n, s + c + 1),
				column: r,
				reason: l
			}) : (k += 1, console.warn("WARNING: unreasoned missing export cell"));
		}
		const i = n.get(mi);
		i && (yield {
			file: t,
			row: s + c + 1,
			key: _i(n, s + c + 1),
			column: i,
			reason: "not_computed_for_export"
		});
	}
	if (n && k > 0) throw new Zn(t + ": " + String(k) + " unreasoned missing metric cells");
	return f < 0 ? {
		csv: e,
		withReason: x,
		withoutReason: k
	} : {
		csv: [wi(d.text, f), ...m.map((e) => wi(e.text, f))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: x,
		withoutReason: k
	};
}
const vi = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], Mi = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : u(String(e)), bi = (T.part4_night_review, T.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function xi(e, t, n = "") {
	return T[e].replace("{report}", n.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${k[t].filenameSuffix}.csv`);
}
const ki = Object.keys(k).map((e) => xi("person_summary_review", e)), Si = (e) => ki.some((t) => e.endsWith(t));
function Ii(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return m(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? m(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function Ai(e, t) {
	const n = new Map(Se(e).map((e) => [e.night, e.nightDate]));
	return (e, i, r = !0) => {
		const a = e.columns.indexOf("nights" === t ? E.ggir_night.header : "night_number"), s = Number(e.values[a]?.[i]), o = n.get(s);
		if (r && o) return o;
		const l = e.values[e.columns.indexOf(E.ggir_calendar_date.header)]?.[i];
		return Ii(l);
	};
}
async function Ri(t, n, r, a) {
	const s = "nights" === n ? E.ggir_night.header : "window_number", o = Z(r), l = await Promise.all(t.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await Re(e.imported, e.edits, t.night, r)])))), c = (await Promise.all(t.map(async (e, t) => {
		const i = e.current ?? e.imported, r = (e) => "nights" === n ? e.nights : e.days, a = "nights" === n ? i.nightRecomputed : i.dayRecomputed, s = "nights" === n ? e.imported.nightChecks : e.imported.dayChecks, u = l[t].filter((e) => null != e[1]), c = Ai(e.imported, n), d = new Set(e.edits.map((e) => e.night)), p = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, m = /* @__PURE__ */ new Set();
		if ("days" === n && p) {
			const t = await Promise.all(Se(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), i = t.nightDate, r = n.onset < "12:00:00" ? await $(i, void 0, o) : i, a = n.wake <= n.onset ? await $(r, void 0, o) : r;
				return [Math.min(t.onsetMs, Date.parse(`${r}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${a}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: i.days.rows }, async (e, n) => {
				const r = Number(i.days.values[i.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(r)) return void m.add(n);
				const a = c(i.days, n, !1), s = i.days.values[i.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof s ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(s) : null;
				if (!a || !l) return;
				const u = Date.parse(`${a}T${l[1]}Z`), p = l[2] < l[1] ? await $(a, void 0, o) : a, g = Date.parse(`${p}T${l[2]}Z`);
				t.some(([e, t]) => u <= t && g >= e) && m.add(n);
			}));
		}
		return {
			source: k[bi(e)].reviewSource,
			editedDayRows: m,
			editRecomputeUnavailable: p,
			editedNights: d,
			scoredDates: e.scoredDates,
			invalidDates: e.invalidDates,
			dateOf: c,
			table: r(i),
			ggir: r(e.imported),
			savedNights: e.imported.nights,
			recomputed: a,
			provenance: (e) => "nights" === n ? u.find(([t]) => t === e)?.[1] ?? "" : u.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(s.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === c.length) return null;
	const d = a ? a.filter((e) => !e.endsWith("_missing_reason") && !vi.includes(e)) : [];
	for (const e of a ? [] : c) for (const t of e.table.columns) t.endsWith("_missing_reason") || d.includes(t) || d.push(t);
	const p = new Set("nights" === n ? C.ggir_review_night_extension.map((e) => E[e].header) : []), m = a ? d.filter((e) => a.includes(e + "_missing_reason")) : d.filter((e) => p.has(e) || c.some((e) => e.editRecomputeUnavailable || e.source === k.corrected.reviewSource)), g = [[
		...d.map(u),
		...vi,
		...m.map((e) => u(e + "_missing_reason")),
		...vi.map((e) => e + "_missing_reason")
	].join(",")], f = (e, t) => {
		const n = e.columns.indexOf(s);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: h, ggir: _, recomputed: w, provenance: y, checks: v, scoredDates: M, invalidDates: b, dateOf: x, editRecomputeUnavailable: k, editedNights: S, editedDayRows: I, savedNights: A, source: R } of c) {
		const t = A.columns.filter((e) => !ri.has(e)), r = t.filter((e) => {
			const t = A.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return A.values[t].some((e, t) => {
				const i = Number(A.values[A.columns.indexOf(E.ggir_night.header)]?.[t]), r = n.has(i) && !Object.is(n.get(i), e);
				return n.set(i, e), r;
			});
		}), a = /* @__PURE__ */ new Set(), s = (e) => Array.from({ length: _.rows }, (e, t) => t).find((t) => !a.has(t) && f(_, t) === f(h, e) && r.every((n) => Object.is(_.values[_.columns.indexOf(n)]?.[t] ?? null, h.values[h.columns.indexOf(n)]?.[e] ?? null))), o = new Set(d.filter((e) => "nights" === n ? ri.has(e) : !ai.has(e) && !t.includes(e))), l = (r, a, s, l) => {
			const c = v.get(f(r, a));
			return [
				...d.map((e) => {
					if ("invalid" === s && ("nights" === n ? ri.has(e) : /sleep|spt|waso|wake|onset|guider/i.test(e) && !t.includes(e))) return "";
					const i = r.columns.indexOf(e);
					return i < 0 ? "" : Mi(r.values[i]?.[a]);
				}),
				s,
				c?.status ?? "",
				u((c?.reasons ?? []).join(";")),
				u((c?.diffs ?? []).map((e) => e.column).join(";")),
				u(l),
				...m.map((t) => "invalid" !== s || p.has(t) && t !== E.ggir_nonwear_perc_spt.header ? k && s === R && o.has(t) && ("days" === n ? I.has(a) : S.has(f(r, a))) ? Qn : p.has(t) ? null != e(r, t, a) ? "" : Mi(i(r, t + "_missing_reason", a) ?? "source_reported_missing") : s === R ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
				"",
				c ? "" : "not_computed_for_export",
				c?.reasons.length ? "" : "not_applicable_to_row",
				c?.diffs.length ? "" : "not_applicable_to_row",
				l ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let e = 0; e < h.rows; e += 1) {
			const t = x(h, e);
			if (M && (!t || !M.has(t))) continue;
			const n = s(e);
			if (null != n && a.add(n), t && b?.has(t)) {
				null != n && g.push(l(_, n, R, "")), g.push(l(h, e, "invalid", ""));
				continue;
			}
			if (!w[e]) {
				g.push(l(h, e, R, ""));
				continue;
			}
			const i = f(h, e);
			null != n && g.push(l(_, n, R, "")), g.push(l(h, e, "recomputed", y(i)));
		}
		for (let e = 0; e < _.rows; e += 1) {
			if (a.has(e)) continue;
			const t = x(_, e);
			(!M || t && M.has(t)) && (g.push(l(_, e, R, "")), t && b?.has(t) && g.push(l(_, e, "invalid", "")));
		}
	}
	return g.length > 1 ? `${g.join("\n")}\n` : null;
}
function Ti(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const i of e) for (const [e, t] of Object.entries(i.part2Reports ?? {})) {
		const r = xi("part2_report", bi(i), e);
		n.set(r, [...n.get(r) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const i = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], r = [i.map(u).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) r.push(i.map((n) => Mi(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, r.join("\n") + "\n"];
	}));
}
function Ni(e, t) {
	const n = new Set(e);
	if (t.every((e) => n.has(e))) return [...e];
	if (!t.some((e) => n.has(e))) return [...e, ...new Set(t)];
	const i = [...e];
	let r = -1;
	for (const a of t) {
		const e = i.indexOf(a);
		e >= 0 ? r = e : i.splice(++r, 0, a);
	}
	return i;
}
const Ei = (e, t) => Se(e).filter((e) => t?.has(e.nightDate));
async function Ci(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: Qn,
		detail: ""
	};
	const r = e.current ?? e.imported;
	if (void 0 === r.tailExpansion) return {
		reason: "not_computed_for_export",
		detail: "the saved GGIR review predates the core's tail expansion flag; import the folder again"
	};
	const a = Z(n);
	try {
		const { ggirVersion: n } = await a.ggirConfigValues(e.configCsv), { profile: s, reports: o } = await a.ggirPersonSummaries({
			ggir_version: n ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: r.nights,
			days: r.days,
			tail_expansion: r.tailExpansion,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(i(r.nights, E.ggir_id.header, 0) ?? ""),
			invalid_nights: Ei(e.imported, t).map((e) => e.night),
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
async function $i(e, t, n) {
	const i = /* @__PURE__ */ new Map(), r = await Promise.all(e.map(async (e) => {
		const n = Ei(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (n) => {
			const i = await Re(e.imported, e.edits, n.night, t);
			return null == i ? [] : [`night ${String(n.night)} ${i}`];
		}))).flat(), ...n].join("; ");
	}));
	for (const [s, o] of e.entries()) {
		const e = bi(o), t = r[s], n = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [r, a] of Object.entries(o.personReports ?? {})) {
			if (0 === a.rows) continue;
			const s = xi("person_summary_review", e, r), o = "reason" in n ? n : n.reports[r] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${r}`
			};
			i.set(s, [...i.get(s) ?? [], {
				table: a,
				source: k[e].reviewSource,
				edit: t,
				recomputed: o
			}]);
		}
	}
	const a = /* @__PURE__ */ new Set([E.ggir_id.header, E.ggir_filename.header]);
	return Object.fromEntries([...i].map(([e, t]) => {
		const i = n?.get(e), r = [...new Set(t.flatMap(({ table: e }) => e.columns))], s = (i ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : Ni(e, t.columns), r)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !vi.includes(e)), o = vi.map((e) => e + "_missing_reason"), l = i?.filter((e) => e.endsWith("_missing_reason") && !o.includes(e)) ?? ["refusal_detail_missing_reason", ...s.map((e) => e + "_missing_reason")], c = [[
			...s,
			...vi,
			...l,
			...o
		].map(u).join(",")], d = (e, t) => [
			e,
			"",
			"",
			"",
			u(t)
		], p = (e) => [
			"",
			"not_computed_for_export",
			"not_applicable_to_row",
			"not_applicable_to_row",
			e ? "" : "not_applicable_to_row"
		], m = (e, t) => (n) => Mi(e.values[e.columns.indexOf(n)]?.[t]), g = (e) => l.map((t) => e.get(t) ?? ""), f = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
		for (const { table: n, source: h, edit: _, recomputed: w } of t) for (let e = 0; e < n.rows; e++) {
			const t = s.map(m(n, e)), i = new Map(s.flatMap((e) => f.get(n).has(e) ? [] : [[e + "_missing_reason", "not_applicable_to_row"]]));
			if (c.push([
				...t,
				...d(h, ""),
				...g(i),
				...p("")
			].join(",")), !_) continue;
			const r = "reason" in w ? w : 0 === w.rows ? {
				reason: "no_retained_nights",
				detail: ""
			} : null, o = "reason" in w ? null : m(w, 0), l = s.map((e, n) => a.has(e) ? t[n] : o?.(e) ?? ""), y = new Map(s.flatMap((e, t) => di(l[t]) ? [[e + "_missing_reason", r?.reason ?? "not_applicable_to_row"]] : []));
			r?.detail && y.set(mi, u(`ggirPersonSummaries: ${r.detail}`)), c.push([
				...l,
				...d("recomputed", _),
				...g(y),
				...p(_)
			].join(","));
		}
		return [e, c.join("\n") + "\n"];
	}));
}
const Oi = C.ggir_part4_nightsummary_csv, Bi = Oi.map((e) => E[e].header), Li = [
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
], Di = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function Pi(e, t) {
	const n = E[e], i = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof i ? u(i) : qn(i, { integral: n.ggirIntegral ?? !1 });
}
function ji(e, t = "legacy-recording", n, i) {
	const r = [], a = [];
	for (const l of e) l.states && 0 !== l.timestamps.length && (a.push(l.states.subarray(0, Math.min(l.timestamps.length, l.states.length))), r.push({
		seriesId: t,
		...void 0 === n ? {} : { epochLengthSeconds: n },
		timestamps: l.timestamps,
		states: l.states
	}));
	const s = new Uint8Array(a.reduce((e, t) => e + t.length, 0));
	a.reduce((e, t) => (s.set(t, e), e + t.length), 0);
	const o = e.length > 0 && e.every((e) => null == e.states) ? "no_scored_epochs" : "no_valid_epochs";
	return 0 === s.length ? Promise.resolve({
		sri: null,
		fractionValid: null,
		sriMissingReason: o,
		fractionValidMissingReason: o
	}) : Z(i).validStateFraction(s).then(async (e) => {
		if (!e) return {
			sri: null,
			fractionValid: e ?? null,
			sriMissingReason: "no_valid_epochs",
			fractionValidMissingReason: null == e ? "no_valid_epochs" : null
		};
		const t = /* @__PURE__ */ new Map();
		for (const n of r) for (let e = 0; e < Math.min(n.timestamps.length, n.states.length); e++) {
			const i = n.timestamps[e];
			Number.isFinite(i) && t.set(Math.round(i), 0 === n.states[e] || 1 === n.states[e]);
		}
		const a = (void 0 === n || 86400 % n == 0) && [...t].some(([e, n]) => n && t.get(e + 86400)), s = a ? null : "insufficient_pair", o = await async function(e, t) {
			const n = Array.isArray(e) ? e : [e], i = n.map((e) => ({
				...void 0 === e.seriesId ? {} : { series_id: e.seriesId },
				...void 0 === e.epochLengthSeconds ? {} : { epoch_length_seconds: e.epochLengthSeconds }
			})), [r, a] = rn(n.map((e) => e.timestamps)), [s, o] = rn(n.map((e) => e.states));
			return Z(t).sleepRegularityIndex(l([
				JSON.stringify(i),
				r,
				a,
				s,
				o
			], [
				r.buffer,
				a.buffer,
				s.buffer,
				o.buffer
			]));
		}(r, i);
		if (a && null == o) throw new Error("SRI producer returned a blank despite valid pairs");
		return {
			sri: o,
			fractionValid: e,
			sriMissingReason: s,
			fractionValidMissingReason: null
		};
	});
}
async function Fi(e, t, n, i = {}) {
	const { signal: r } = i, a = e.participantId ?? e.filename, s = le(n.values(), i.algorithm), o = [];
	for (const [d, y] of n) {
		if (!Xi(d, i.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = Jt(y, s);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await ji(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, r), { sri: u, fractionValid: c } = l, p = "stale" === s.status ? "scores_from_another_config" : null, m = p ?? l.sriMissingReason, g = p ?? l.fractionValidMissingReason, f = [];
	for (const y of [...t.keys()].sort()) {
		const e = t.get(y);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === d.MAIN_SLEEP && null != t.onsetTimestamp && f.push({
			date: y,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const h = [[
		...Bi,
		...Li.map((e) => `${E[e].header}_missing_reason`),
		...Di.map((e) => `${E[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: d, onsetTs: y, wakeupTs: v } of f) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == v ? "not_applicable_to_row" : p ?? "no_scored_epochs"
		};
		if (null != v) {
			const { timestamps: i, algorithmResults: a } = await mn(n, d, s, { signal: r });
			if (a && i.length > 0) {
				t.missingReason = null;
				const n = await qt(a, i, y, v, e.epochLengthSeconds || 60, null, r);
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
	const w = await Z(r).ggirManualNightClocks(f.map((e) => e.date), Float64Array.from(f, (e) => e.onsetTs), Float64Array.from(f, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let d = 0; d < f.length; d++) {
		const { onsetTs: t, wakeupTs: n } = f[d], i = w[d], { tstH: r, nAwak: s, latency: o, efficiency: l } = _[d], p = {
			ggir_id: a,
			ggir_night: d + 1,
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
			ggir_sleep_duration_in_spt: r,
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
			...Oi.map((e) => Pi(e, p[e])),
			...Li.map((e) => {
				const t = Oi.indexOf(e);
				return t >= 0 && null == p[Oi[t]] ? "not_computed_for_export" : "";
			}),
			...Di.map((e) => {
				const t = Oi.indexOf(e);
				return t >= 0 && null == p[Oi[t]] ? _[d].missingReason ?? "" : "";
			}),
			m ?? "",
			g ?? ""
		].join(","));
	}
	return h.join("\n") + "\n";
}
function Wi(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const Gi = "actogram_report.html";
function zi(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function Ui(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function Vi(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: i } = zi(n), r = [e, i].filter(Boolean);
		t.set(n, 0 === r.length ? "part4_nightsummary.csv" : `part4_nightsummary_${r.join("_")}.csv`);
	}
	return t;
}
function Hi(e) {
	const { algoKey: t, ruleKey: n } = zi(e), i = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
	return t || n ? n ? `${i(t)} / ${i(n)}` : i(t) : "Legacy / Unscoped";
}
function qi(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : ye(e);
}
function Ki(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function Ji(e, t) {
	const n = [], i = [], r = (e) => {
		for (const t of Zi(e)) n.push(t), i.push(t.byteLength);
	};
	r(`<section class="pid-sec${0 === e ? " initial" : ""}" id="sec-${e}">`), r(`  <h2 class="pid-lbl">${Wi(t.pid)}</h2>`);
	for (const [a, s] of t.charts.entries()) r(`  <div class="algo-block" data-algorithm-key="${Wi(s.algoKey)}">`), r(`    <div class="algo-lbl">${Wi(Hi(s.algoKey))}</div>`), s.stale && r(`    <div class="algo-stale" role="status">${Wi(s.stale)}</div>`), r(`    <div class="cwrap" id="c${e}_${a}">`), n.push(s.plot), i.push(...s.plotLengths), r(`      <button type="button" class="svg-btn" data-download-name="${Wi(s.svgFilename)}">Download SVG</button>`), r(s.meta), r("    </div>"), r("  </div>");
	return r("</section>"), {
		blob: new Blob(n),
		lengths: i
	};
}
const Yi = ["<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>", "</body>\n</html>"];
function* Zi(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let i = Math.min(e.length, n + Wn / 4);
		i < e.length && /[\uD800-\uDBFF]/u.test(e[i - 1]) && (i -= 1), yield t.encode(e.slice(n, i)), n = i;
	}
	yield t.encode("\n");
}
function Qi(e) {
	return new TextEncoder().encode(e);
}
function Xi(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function er({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: i, layouts: r, only: a }) {
	const s = {}, o = (e) => void 0 === a || a === e;
	for (const [l, u] of i ?? Vi([...e.keys()])) {
		const t = e.get(l);
		t?.length && o(u) && (s[u] = Qi(`${t.join("\n")}\n`));
	}
	for (const l of Object.keys(k)) {
		const e = t.filter((e) => bi(e) === l);
		if (0 !== e.length) {
			for (const [t, n] of Object.entries(Ti(e, r))) o(t) && (s[t] = Qi(n));
			for (const [t, i] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
				const a = xi(i, l), u = o(a) ? await Ri(e, t, n, r?.get(a)) : null;
				u && (s[a] = Qi(u));
			}
			for (const [t, i] of Object.entries(await $i(e, n, r))) o(t) && (s[t] = Qi(i));
		}
	}
	return s;
}
async function tr(e, t, n) {
	n?.throwIfAborted();
	const i = function(e, t) {
		const { signal: n } = t, { username: i, dateRange: r, snapshot: a } = e, s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const c = ks(a, gs.ggirReport, e.map((e) => e.id)), d = await Promise.all(e.map((e) => Rs(a, e.id, i, n)));
				for (const [i, a] of e.entries()) {
					const e = c.files.find((e) => e.id === a.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: p, sets: m, markersByAlgo: g, invalidDates: h } = d[i], _ = Ns(c, e.id), w = new Map([...g].filter(([e]) => Xi(e, r))), y = /* @__PURE__ */ new Map();
					for (const [t, n] of w) for (const e of n) {
						const n = Ui(e);
						let i = y.get(n);
						i || (i = /* @__PURE__ */ new Map(), y.set(n, i)), i.set(t, e);
					}
					const v = /* @__PURE__ */ new Set();
					for (const [t, n] of w) for (const e of n) f(e) && v.add(t);
					if (p) for (const t of m) u.push({
						...t,
						...r ? { scoredDates: new Set(e.availableDates.filter((e) => Xi(e, r))) } : {},
						invalidDates: h
					});
					const M = [...v].sort(), b = M[0], x = M[M.length - 1], k = [], S = [];
					for (const n of t.charts ? [..._.keys()].sort() : []) if (Xi(n, r) && (null == b || null == x || n >= b && n <= x)) {
						const e = _.get(n), t = fe({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), i = t.timestamps, r = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < i.length; n++) k.push(i[n]), S.push(r[n]);
					}
					const I = [];
					for (const [t, i] of y) {
						const a = zi(t).algoKey, l = p ? "" : await Fi(e, i, _, {
							...a ? { algorithm: a } : {},
							...r ? { dateRange: r } : {},
							signal: n
						}), u = p ? [] : l.replace(/\n$/u, "").split("\n");
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
						const { algoKey: m, ruleKey: g } = zi(t), f = [m, g].filter(Boolean).join("_"), h = le(_.values(), a || null);
						I.push([f, {
							p: c,
							n: d,
							..."stale" === h.status ? { stale: h.reason } : {}
						}]);
					}
					0 === y.size && I.push(["", {
						p: [],
						n: []
					}]), k.length > 0 && l.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: k,
						act: S,
						algos: I
					});
				}
			},
			entries: () => er({
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
	const r = [...i.chartPidData].map(([t, n]) => function(e, t, n) {
		return {
			key: e,
			pid: t.pid,
			charts: t.algos.map(([i, r]) => {
				const { algoKey: a, ruleKey: s } = zi(i), o = Ki([a, s].filter(Boolean).join("_"), "unscoped"), l = `activity-${Ki(e, "recording")}-${o}-${n}.svg`, u = function(e) {
					if (0 === e.timestamps.length) return Jn("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return Jn("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, i = 0;
					const r = e.timestamps.map((r, a) => {
						const s = e.activity[a];
						return !Number.isFinite(r) || r <= t ? Jn("timestamps must be finite and strictly ascending") : (t = r, null != s && Number.isFinite(s) ? (n = Math.min(n, s), i = Math.max(i, s), {
							timestamp: r,
							value: s
						}) : {
							timestamp: r,
							value: null
						});
					}), a = r[0].timestamp, s = r[r.length - 1].timestamp, o = s > a ? s : a + 1;
					if (!Number.isFinite(o) || o <= a) return Jn("single-epoch viewport must have a representable right edge");
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
							sourcePointCount: r.length,
							renderedPointCount: r.length
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
							min: a,
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
							points: r
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
					sleepIntervals: r.p.map((e) => ({
						startTimestamp: e.o,
						endTimestamp: e.f
					})),
					nonwearIntervals: r.n.map((e) => ({
						startTimestamp: e.s,
						endTimestamp: e.e
					})),
					additionalOverlays: [],
					cursorTimestamp: null,
					selection: null
				}), c = [...Zi(`      <div class="plot-svg">${Pn(u)}</div>`)];
				return {
					algoKey: i,
					...r.stale ? { stale: r.stale } : {},
					svgFilename: l,
					plot: new Blob(c),
					plotLengths: c.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${Wi(qi(u.viewport.min))} → ${Wi(qi(u.viewport.max))} · activity domain ${qn(u.valueDomain.min)}–${qn(u.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), a = new Set(Vi([...i.csvLinesByAlgo.keys()]).values()), s = [];
	for (const [o, l] of Object.entries(await i.entries())) a.has(o) || s.push([o, c(p(new TextDecoder().decode(l)).records[0].text)]);
	return {
		charts: r,
		csvLinesByAlgo: i.csvLinesByAlgo,
		ggirReviews: i.ggirReviews,
		headers: s
	};
}
async function nr(e, t, n, i) {
	const r = [], a = [];
	for (const [s, o] of e) if (s) for (let e = 0; e < Math.min(s.length, o.length); e++) r.push(o[e]), a.push(s[e]);
	return await Z(i).spanFiniteMean(Float64Array.from(r), Float64Array.from(a), t, n) ?? null;
}
function ir(e) {
	return "string" == typeof e ? e : null;
}
function rr(e) {
	return "number" == typeof e ? e : null;
}
function ar(e, t) {
	const n = function(e, t) {
		switch (e.formatter) {
			case "verbatim_string": return function(e) {
				return e ? u(e) : "";
			}(ir(t));
			case "display_label": {
				const n = ir(t);
				return n ? function(e) {
					return e ? u(e) : "";
				}(e.labelEnum ? S(e.labelEnum, n) : n) : "";
			}
			case "core_printed_text":
			case "date_iso": return function(e) {
				return e ?? "";
			}(ir(t));
			case "integer": return function(e) {
				return null == e ? "" : String(Math.trunc(e));
			}(rr(t));
			case "fixed2": return function(e) {
				return null == e ? "" : e.toFixed(2);
			}(rr(t));
			case "python_scalar_str": return function(e) {
				return null == e ? "" : String(e);
			}("boolean" == typeof t ? null : t);
			case "python_float_repr": return function(e) {
				if (null == e) return "";
				if (!Number.isFinite(e)) return String(e);
				const t = String(e);
				return t.includes(".") || t.includes("e") ? t : `${t}.0`;
			}(rr(t));
			case "python_bool": return function(e) {
				return null == e ? "" : e ? "True" : "False";
			}("boolean" == typeof t ? t : null);
			case "clock_hhmm": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${Kn(t.getUTCHours())}:${Kn(t.getUTCMinutes())}`;
			}(rr(t));
			case "datetime_seconds": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${String(t.getUTCFullYear())}-${Kn(t.getUTCMonth() + 1)}-${Kn(t.getUTCDate())} ${Kn(t.getUTCHours())}:${Kn(t.getUTCMinutes())}:${Kn(t.getUTCSeconds())}`;
			}(rr(t));
			case "ggir_value": return qn(t, { integral: e.ggirIntegral ?? !1 });
		}
	}(e, t);
	return "" === n ? R[e.sentinel] : n;
}
function sr(e, t) {
	if (!t) return "";
	const { labelEnum: n } = E[e];
	return n ? S(n, t) : t;
}
const or = A.invalid_night_row?.markerTypeCell ?? "", lr = A.nonwear_row?.markerTypeCell ?? "";
function ur(e) {
	return C[e].filter((e) => "server" !== E[e].plane);
}
function cr(e) {
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
function dr(e) {
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
const pr = [
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
async function mr(e, t, n, i, r, a, s) {
	try {
		return {
			metrics: t ? await Kt(e, t, n, i, r, a, s) : await qt(e, n, i, r, a, null, s),
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
async function gr(e, t, n, i) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const r = new Set(n.filter((t) => t.markerType === d.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return r.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : ji(t.filter((e) => r.has(e.date)), e, t[0]?.epochLengthSeconds, i);
}
function fr(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const hr = [
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
], _r = {
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
}, wr = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => sr("algorithm", e.algorithm),
	summary_detection_rule: (e) => sr("detection_rule", e.detectionRule),
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
}, yr = x;
function vr(e) {
	return q(e);
}
function Mr(e) {
	return JSON.stringify(e, null, 2);
}
const br = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function xr(e = yr, t = !1) {
	return Er("codebook_csv", e, br, void 0, t);
}
const kr = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], Sr = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function Ir(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== d.MAIN_SLEEP) continue;
		const e = kr.map((e) => Tr(e, n)).join("\0"), i = t.get(e);
		i ? i.push(n) : t.set(e, [n]);
	}
	return t;
}
function* Ar(e, t = !1) {
	const n = Ir(e);
	let i = 0;
	const r = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > i && (i = t.length), t;
	}), a = kr.map((e) => E[e].header);
	for (let o = 1; o <= i; o++) for (const [e] of Sr) a.push(`night${String(o)}_${e}`);
	const s = a;
	yield t ? [...a, ...s.map((e) => e + "_missing_reason")].join(",") : a.join(",");
	for (const o of r) {
		const e = o[0], n = kr.map((t) => Tr(t, e)), r = kr.map((t) => Rr[t]?.(e) ? "" : Nr[t] ?? "");
		for (let t = 0; t < i; t++) {
			const e = o[t];
			for (const [t, i] of Sr) {
				const a = e ? Tr(i, e) : "";
				n.push(a), r.push(a ? "" : e ? "date" === t ? "" : e.derivedMissingReasons?.[i] ?? e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? r : []].join(",");
	}
}
const Rr = {
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
function Tr(e, t) {
	return ar(E[e], Rr[e]?.(t) ?? null);
}
const Nr = {
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
function Er(e, t, n, i, r = !1) {
	const a = i && i.length > 0 ? new Set(i) : null, s = ur(e).filter((e) => null == a || a.has(E[e].header)), o = r ? s.filter((e) => Nr[e]) : [], l = [[...s.map((e) => E[e].header), ...o.map((e) => E[e].header + "_missing_reason")].join(",")];
	for (const u of t) l.push([...s.map((e) => ar(E[e], n[e]?.(u) ?? null)), ...o.map((e) => {
		const t = n[e]?.(u);
		return null == t || "" === t ? Nr[e] ?? "" : "";
	})].join(","));
	return l.join("\n");
}
function Cr(e, t, n = !1) {
	const i = Er("sleep_csv", e, Rr, t, n), r = t?.length ? new Set(t) : null, a = [
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
		...s
	].filter((t) => (!r || r.has(E[t].header)) && e.some((e) => a.includes(t) && null == Rr[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || s.includes(t) && e.metricMissingReason));
	return 0 === o.length ? i : p(i).records.map((t, n) => {
		if (0 === n) return t.text + "," + o.map((e) => `${E[e].header}_missing_reason`).join(",");
		const i = e[n - 1];
		return t.text + "," + o.map((e) => i.markerType === lr ? "manual_nonwear_period" : i.markerType === or ? "invalid_night" : a.includes(e) ? null == Rr[e]?.(i) ? "source_reported_missing" : "" : i.sensorMissingReasons?.[e] ?? i.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? i.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (s.includes(e) ? i.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
ur("sleep_csv").map((e) => E[e].header);
const $r = I("event_marker_csv", "local"), Or = 86400, Br = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * Or * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), Lr = (e) => e < 10 ? `0${String(e)}` : String(e);
function Dr(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / Or), n = e - t * Or;
	return `${Br(t)} ${Lr(Math.floor(n / 3600))}:${Lr(Math.floor(n / 60) % 60)}:${Lr(n % 60)}`;
}
function Pr(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function jr(e, t, n, i, r) {
	const a = [], s = ks(n, gs.event, e), o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		r?.throwIfAborted();
		const e = Pr(l, Ns(s, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await dn(e, Z(r)), u = new Set(Is(s, l.id, i).keys());
		for (const i of e) {
			const e = o(i);
			t && (e < t[0] || e > t[1]) || u.has(e) && a.push({
				filename: l.filename,
				participantId: l.participantId ?? null,
				studyDate: e,
				localTimestamp: i,
				gmtOffsetMinutes: n
			});
		}
	}
	return a;
}
const Fr = A.invalid_night_row.markerTypeCell, Wr = I("actiware_interval_csv", "local"), Gr = (e, t) => Math.round(e) === Math.round(t);
function zr(e, t = !1) {
	const n = t ? Yn.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], i = [[
		...Wr,
		...n.map(([, e]) => e + "_missing_reason"),
		...t ? [
			"Participant ID_missing_reason",
			"Origin_missing_reason",
			"Analysis_missing_reason"
		] : []
	].join(",")], r = (e) => Number.isFinite(e) ? Dr(Math.round(e)) : "";
	for (const { filename: a, participantId: s, studyDate: o, interval: l, statistics: c, invalidNight: d } of e) {
		const e = !0 === d && !Number.isFinite(l.startTimestamp), p = [
			a,
			s ?? "",
			o,
			d ? Fr : l.kind,
			e ? "" : l.source,
			r(l.startTimestamp),
			r(l.endTimestamp),
			e ? "" : l.origin,
			l.analysis ?? ""
		], m = n.map(([e]) => {
			if (d) return "invalid_night";
			if (!c || null != c[e]) return "";
			if (e.startsWith("off_wrist")) return "source_reported_missing";
			const t = /_(white|red|green|blue)(?:_percent)?$/u.exec(e)?.[1];
			return t && null == c["invalid_" + t + "_percent"] ? "source_reported_missing" : "";
		});
		i.push([
			...p.map((e) => u(e)),
			...Yn.map(([, e]) => c?.printed?.[e] ?? ""),
			...m,
			...t ? [
				s ? "" : "source_reported_missing",
				e ? "invalid_night" : l.origin ? "" : "source_reported_missing",
				l.analysis ? "" : d ? "invalid_night" : "not_applicable_to_row"
			] : []
		].join(","));
	}
	return `${i.join("\n")}\n`;
}
const Ur = "actiware_sleep_wake_export.csv", Vr = I("actiware_sleep_wake_csv", "local");
async function Hr(e, t, n, i) {
	if (0 === e.scores.byteLength) return [];
	const r = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, a = n ?? new Set(await i.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((r - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), r])));
	return (await Promise.all([...a].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await un(t, void 0, void 0, i);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
async function qr(e, t, n, i = s()) {
	return t || n ? (await Hr(e, t, n, i)).reduce((e, t) => e + t.end - t.start, 0) : e.scores.byteLength;
}
async function* Kr(e, t, n, i, r) {
	r?.throwIfAborted();
	const a = ks(n, gs.actiwareSleepWake, e), s = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => a.actiwareFileData.find((t) => t.fileId === e.id)), l = function(e, t = !1) {
		const n = [[
			...Vr,
			"Sleep/Wake_missing_reason",
			"Wake Threshold_missing_reason",
			...t ? ["Participant ID_missing_reason"] : []
		].join(",")];
		for (const i of e) n.push(Jr(i, i.epochTimestamp, i.sleepWake, t));
		return `${n.join("\n")}\n`;
	}([], !0);
	let u = [], c = 0, d = 0;
	const p = () => {
		r?.throwIfAborted();
		const e = function(...e) {
			const t = yi(...e), n = [];
			for (;;) {
				const e = t.next();
				if (e.done) return {
					...e.value,
					reasons: n
				};
				n.push(e.value);
			}
		}(l + u.join("\n") + "\n", Ur, !0, { rowOffset: c }), t = c ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
			bytes: new TextEncoder().encode(t),
			rows: u.length,
			reasonRows: e.reasons.length,
			reasons: new TextEncoder().encode(hi(e.reasons, !1))
		};
		return c += u.length, u = [], d = 0, n;
	};
	for (const [m, g] of s.entries()) {
		r?.throwIfAborted();
		const e = o[m]?.actiwareSleepWake;
		if (!e) continue;
		const n = o[m]?.actiwareWakeThreshold, s = null != n && Number.isFinite(n) ? n : null, l = new Int8Array(e.scores), c = await Hr(e, t, new Set(Is(a, g.id, i).keys()), Z(r));
		r?.throwIfAborted();
		for (const { date: t, start: i, end: r } of c) {
			const n = {
				filename: g.filename,
				participantId: g.participantId ?? null,
				studyDate: t,
				sleepDetection: Fe(e.params, "sleep_detection"),
				wakeThresholdSelection: Fe(e.params, "wake_threshold_selection"),
				wakeThreshold: s,
				...null === s ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
			};
			for (let t = i; t < r; t += 1) {
				const i = l[t], r = Jr(n, e.startTimestamp + t * e.epochSeconds, 0 === i || 1 === i ? i : null, !0);
				if (r.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
				u.push(r), d += r.length, (512 === u.length || d >= 32768) && (yield p());
			}
		}
	}
	u.length && (yield p()), r?.throwIfAborted();
}
function Jr(e, t, n, i) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		Dr(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...i ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => u(e)).join(",");
}
const Yr = Wn, Zr = new Uint8Array([3, 0]);
var Qr = class extends Lt {
	flag = 3;
	constructor(e) {
		super(e), this.compression = 8;
	}
	process() {}
	emit(e, t) {
		this.ondata(null, e, t);
	}
};
async function* Xr(e) {
	const t = new TextDecoder();
	let n, i = "";
	for await (const r of async function* () {
		for await (const t of e) for (let e = 0; e < t.byteLength; e += Yr) yield t.subarray(e, e + Yr);
		yield null;
	}()) {
		const e = null === r;
		i += e ? t.decode() : t.decode(r, { stream: !0 });
		const a = p(i, e);
		if (e && a.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const s = a.remainder ?? "";
		if (s.length > Yr || a.records.some((e) => e.text.length > Yr)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
		if (a.records.length) {
			const e = void 0 === n;
			n ??= a.records[0].text + "\n";
			const t = (e ? "" : n) + i.slice(0, i.length - s.length);
			yield {
				bytes: new TextEncoder().encode(t),
				text: t,
				rows: a.records.length - (e ? 1 : 0)
			};
		}
		i = s;
	}
}
const ea = (e) => e.slice(e.lastIndexOf("/") + 1);
const ta = "union_all";
function na(e) {
	return e.nonwearDetector ?? "union_all";
}
const ia = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: ta
}, ra = {
	...ia,
	minimumWakeWearMinutes: We.minWearMinutesPerDay
};
function aa(e) {
	return e ? {
		...ra,
		...e
	} : ra;
}
function sa(e, t) {
	const n = [];
	for (const i of e.values()) {
		for (const e of i.sleepMarkers) {
			const t = e.markerType === d.MAIN_SLEEP ? "main_sleep" : e.markerType === d.NAP ? "nap" : null;
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
function oa(e, t, n, i) {
	const r = na(t), a = "union_all" === r ? Object.entries(Be(e, n)) : [[r, Oe(e, r, n)], ..."detach_nonwear" === r ? [] : [["detach_nonwear", Oe(e, "detach_nonwear", n)]]], s = new Float64Array(e.timestamps);
	return a.flatMap(([e, t]) => {
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
function la(e) {
	return {
		excludeNonwear: e.excludeNonwear,
		excludeMainSleep: e.excludeMainSleep,
		excludeNaps: e.excludeNaps,
		useAlgorithmNonwear: e.useAlgorithmNonwear,
		useManualNonwear: e.useManualNonwear,
		minimumWakeWearMinutes: Number.isFinite(e.minimumWakeWearMinutes) ? Math.max(0, e.minimumWakeWearMinutes) : 0
	};
}
function ua(e) {
	return {
		totalEpochs: e.totalEpochs,
		includedEpochs: e.includedEpochs,
		nonwearEpochs: e.nonwearEpochs,
		mainSleepEpochs: e.mainSleepEpochs,
		napEpochs: e.napEpochs,
		overlapEpochs: e.overlapEpochs
	};
}
function ca(e, t) {
	return Z(t).summarizePhysicalActivityDays(e);
}
async function da(e, t = s()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
const pa = z.PRESCHOOL_FREE_LIVING_RF_3_5;
function ma(e) {
	const t = e.algorithmResults[pa];
	return null != t && new Uint8Array(t).length > 0;
}
function ga(e) {
	const t = e.algorithmResults[pa];
	if (!t) return null;
	const n = new Uint8Array(t);
	return n.length > 0 ? n : null;
}
function fa(e) {
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
function ha(e) {
	return e instanceof Map ? ha([...e.entries()]) : Array.isArray(e) ? e.map(ha) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, ha(t)])) : e;
}
async function _a(e, t) {
	const { db: n, fileId: i, kind: r, inputs: a, signal: s } = e;
	s?.throwIfAborted();
	let o = n, l = null;
	if (o) try {
		const e = await o.activityDays.where("fileId").equals(i).primaryKeys();
		l = await H(JSON.stringify(ha({
			version: 1,
			core: "9e3111066519c566f8ef873ecc07d11a9fe6d7c3",
			kind: r,
			fileId: i,
			dayIds: [...e].sort((e, t) => Number(e) - Number(t)),
			inputs: a
		})));
		const t = await o.physicalActivityFileSummaries.get([i, r]);
		if (t?.inputKey === l) return t.value;
	} catch {
		o = null;
	}
	s?.throwIfAborted();
	const u = await t();
	if (s?.throwIfAborted(), o && l) try {
		await Q(o, [o.physicalActivityFileSummaries], (e) => e.table(o.physicalActivityFileSummaries.name).put({
			fileId: i,
			kind: r,
			inputKey: l,
			value: u
		}), s);
	} catch {
		s?.throwIfAborted(), console.warn("[physical-activity] A file's answers could not be stored; the tab recomputes them.");
	}
	return u;
}
function wa(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function ya(e, t) {
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
function va(e, t, n) {
	if (!n) return e.ruleLabel;
	const i = String(t.sedentaryMax), r = String(t.lightMin), a = String(t.moderateMin - 1), s = String(t.moderateMin), o = String(t.vigorousMin - 1), l = String(t.vigorousMin);
	return t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, non-sedentary >=${r} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, light ${r}-${a}, MVPA >=${s} counts/min` : `Custom cutpoints: Sed <=${i}, light ${r}-${a}, moderate ${s}-${o}, vigorous >=${l} counts/min`;
}
const Ma = [
	null,
	"sedentary",
	"light",
	"moderate",
	"vigorous"
];
async function ba(e) {
	const { values: t, countsPerMinuteScale: n, method: i, date: r, maskReasons: a } = e;
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
	const l = await Z(e.signal).cutpointToneCodes(Float64Array.from(o, (e) => e.countsPerMinute), wa(i));
	let u = 0;
	const c = [];
	return o.forEach((e, t) => {
		const n = Ma[l[t] ?? 0];
		n && (u = Math.max(u, e.countsPerMinute), c.push({
			x: c.length,
			value: e.countsPerMinute,
			tone: n,
			maskReason: a?.[e.index] ?? "included"
		}));
	}), 0 === c.length ? null : {
		date: r,
		sourceLabel: i.sourceLabel,
		valueMax: Math.max(u, i.cutpointScaleMax ?? 1),
		points: c
	};
}
function xa(e, t) {
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
function ka(e) {
	e.mvpaMinutesPerDay = e.totalDays > 0 ? e.mvpaMinutes / e.totalDays : 0, e.totalDays > 0 && (null != e.mvpaBouts && (e.mvpaBoutsPerDay = e.mvpaBouts / e.totalDays), null != e.sedentaryBreaks && (e.sedentaryBreaksPerDay = e.sedentaryBreaks / e.totalDays));
}
function Sa(e, t) {
	e.sedentaryMinutes += t.sedentaryMinutes, e.lightMinutes += t.lightMinutes, e.moderateMinutes += t.moderateMinutes, e.vigorousMinutes += t.vigorousMinutes, e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes;
}
function Ia(e, t, n, i) {
	if (0 === t.totalDays) return;
	e.totalDays += t.totalDays, Sa(e, t.intensity), e.defaultIntensityMinutes && t.defaultIntensity && Sa(e.defaultIntensityMinutes, t.defaultIntensity), null != t.mimsUnitTotal && (e.mimsUnitTotal = (e.mimsUnitTotal ?? 0) + t.mimsUnitTotal), e.totalEpochsReviewed = (e.totalEpochsReviewed ?? 0) + t.totalEpochs, e.includedEpochsReviewed = (e.includedEpochsReviewed ?? 0) + t.includedEpochs, e.wakeWearMinutes = (e.wakeWearMinutes ?? 0) + t.wakeWearMinutes, e.excludedNonwearMinutes = (e.excludedNonwearMinutes ?? 0) + t.excludedNonwearMinutes, e.excludedMainSleepMinutes = (e.excludedMainSleepMinutes ?? 0) + t.excludedMainSleepMinutes, e.excludedNapMinutes = (e.excludedNapMinutes ?? 0) + t.excludedNapMinutes, e.maskOverlapEpochs = (e.maskOverlapEpochs ?? 0) + t.overlapEpochs, e.maskPolicy = n;
	const r = t.bouts;
	r && (e.mvpaBouts = (e.mvpaBouts ?? 0) + r.mvpaBouts, e.mvpaBoutMinutes = (e.mvpaBoutMinutes ?? 0) + r.mvpaBoutMinutes, e.sedentaryBouts = (e.sedentaryBouts ?? 0) + r.sedentaryBouts, e.sedentaryBreaks = (e.sedentaryBreaks ?? 0) + r.sedentaryBreaks, i.total += r.meanSedentaryBoutMinutes * r.sedentaryBouts, e.meanSedentaryBoutMinutes = e.sedentaryBouts > 0 ? i.total / e.sedentaryBouts : 0);
}
async function Aa(e) {
	const { file: t, days: n, summaries: i, markersByAnalysisDate: r, sensorNonwearPeriods: a, maskPolicy: s, validDayCriteria: o, cutpointMethods: l, choiAxis: u } = e, c = new Set([...r].filter(([, e]) => f(e)).map(([e]) => e)), d = Number.isFinite(t.epochLengthSeconds) && t.epochLengthSeconds > 0 ? t.epochLengthSeconds : 60, p = 60 / d, m = {
		policy: la(s),
		intervals: sa(r, a)
	}, g = n.map((e) => oa(e, s, u, d)), h = n.map((e, t) => ({
		timestamps: new Float64Array(e.timestamps),
		epochSeconds: d,
		series: g[t]
	})), { dates: _, shortfall: w } = await async function({ days: e, countDays: t, epochSeconds: n, request: i, criteria: r, scoredDates: a, signal: s }) {
		if (!r) return {
			dates: null,
			shortfall: null
		};
		if (e.some((e) => !a.has(e.date))) return {
			dates: null,
			shortfall: null
		};
		const o = await ca({
			...i,
			days: [...t]
		}, s), l = 86400 / n, u = await da(e.map((e) => e.date), Z(s)), c = e.map((e, t) => {
			const n = o.days[t].mask;
			return {
				date: e.date,
				wearMinutes: n.wakeWearMinutes,
				isWeekend: u[t],
				isPartialDay: n.totalEpochs < l
			};
		}), d = await async function(e, t = We, n) {
			return Z(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
		}(c, r, s);
		if (!d.meetsCriteria) {
			const e = r.requireWeekendDay && !d.hasWeekendValidDay ? ", including a weekend day" : "";
			return {
				dates: /* @__PURE__ */ new Set(),
				shortfall: `${String(d.validDays)} of the required ${String(r.minValidDaysPerParticipant)} valid days${e}`
			};
		}
		const p = await async function(e, t = We, n) {
			const i = await Z(n).validWearDays(Float64Array.from(e), t);
			return Array.from(i, (e) => 0 !== e);
		}(c.map((e) => e.wearMinutes), r, s);
		return {
			dates: new Set(c.filter((e, t) => p[t]).map((e) => e.date)),
			shortfall: null
		};
	}({
		days: n,
		countDays: h,
		epochSeconds: d,
		request: m,
		criteria: o,
		scoredDates: c,
		signal: e.signal
	}), y = i.filter((e) => !(s.minimumWakeWearMinutes > 0 && (null == e.validHours || 60 * e.validHours < s.minimumWakeWearMinutes))).filter((e) => null != e.sedentaryMinutes && null != e.lpaMinutes && null != e.mvpaMinutes).filter((e) => !_ || _.has(e.analysisDate)).map((e) => ({
		sedentaryMinutes: e.sedentaryMinutes,
		lpaMinutes: e.lpaMinutes,
		mvpaMinutes: e.mvpaMinutes
	})), v = n.map((e) => !_ || _.has(e.date)), M = [];
	for (let f = 0; f < l.length; f++) {
		e.signal?.throwIfAborted();
		const i = l[f];
		if (ze(i.method, t.sourceProfileId)) {
			M.push(null);
			continue;
		}
		const r = [];
		if (n.forEach((e, t) => {
			const n = new Float64Array("axisY" === i.axis ? e.axisY : e.vectorMagnitude);
			n.length > 0 && n.length === h[t].timestamps.length && r.push({
				index: t,
				values: n
			});
		}), 0 === r.length) {
			M.push(null);
			continue;
		}
		const a = await ca({
			...m,
			analysisKind: "count_cutpoint",
			thresholds: wa(i),
			defaultThresholds: wa(je[f]),
			days: r.map(({ index: e, values: t }) => ({
				...h[e],
				values: t,
				aggregate: v[e]
			}))
		}, e.signal), s = {
			signalSeen: a.days.some((e) => e.hasValidSignal),
			totals: a.totals
		}, o = r.find(({ index: e }) => v[e]);
		if (o) {
			const t = await ca({
				...m,
				includeEpochDetails: !0,
				days: [h[o.index]]
			}, e.signal), r = await ba({
				values: o.values,
				countsPerMinuteScale: p,
				method: i,
				date: n[o.index].date,
				maskReasons: t.days[0].reasons,
				signal: e.signal
			});
			r && (s.previewTrace = r);
		}
		if (a.totals.totalDays > 0) {
			const t = await Ue(i.method, d, e.signal);
			t && "warn" === t.severity && (s.epochMismatch = t);
		}
		M.push(s);
	}
	const b = (e, t) => n.flatMap((n, i) => {
		const r = e(n);
		return r && 0 !== r.length ? [{
			timestamps: h[i].timestamps,
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(r),
			grid: t,
			fallbackEpochSeconds: d,
			series: g[i],
			aggregate: v[i]
		}] : [];
	}), x = async (t, n) => {
		if (e.signal?.throwIfAborted(), 0 === t.length) return null;
		const i = await ca({
			...m,
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
		mims: await x(b((e) => e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output"), "mims_volume"),
		preschoolRf: await x(b(ga, "classifier"), "preschool_classifier")
	};
}
async function Ra(e = {}) {
	const t = await ae(e.dbOverride, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = e.username ?? "anonymous", i = e.maskPolicy ?? ia, r = e.validDayCriteria, a = Ge("ggir_enmo"), s = Ge("mims"), o = Ge("preschool_free_living_rf_3_5"), l = xa({
		method: a.method,
		label: a.label,
		requiredSignal: a.requiredSignal,
		sourceLabel: a.signalLabel,
		ruleLabel: "Uses imported GGIR daily sedentary, LPA, and MVPA summaries",
		unavailableAction: "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."
	}, null), u = Z(e.signal), c = await Promise.all(je.map((t) => async function(e, t, n) {
		const i = t[e.method];
		if (!i) return e;
		const r = await Le(i, n);
		if (!r) return e;
		const a = wa(e);
		return {
			...e,
			ruleLabel: va(e, r, JSON.stringify(r) !== JSON.stringify(a)),
			cutpointBands: ya(r, e.cutpointBands),
			cutpointScaleMax: Math.max(e.cutpointScaleMax ?? 1, ...Object.values(r).filter(Number.isFinite)),
			...r
		};
	}(t, e.cutpointOverrides ?? {}, u))), d = c.map((e, t) => function(e, t) {
		return {
			...xa(e, null),
			cutpointThresholds: wa(e),
			defaultCutpointThresholds: wa(t),
			cutpointEditable: !0,
			defaultIntensityMinutes: {
				sedentaryMinutes: 0,
				lightMinutes: 0,
				moderateMinutes: 0,
				vigorousMinutes: 0,
				mvpaMinutes: 0
			}
		};
	}(e, je[t])), p = new Array(c.length).fill(!1), m = [], g = xa({
		method: s.method,
		label: s.label,
		requiredSignal: s.requiredSignal,
		sourceLabel: s.signalLabel,
		ruleLabel: "Uses stored MIMS_UNIT epoch values from actours; intensity cutpoints/equating are not applied in this row.",
		unavailableAction: "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values.",
		unavailableStatus: "backend_required"
	}, null);
	g.mimsUnitTotal = 0, g.mimsUnitPerDay = 0;
	const f = xa({
		method: o.method,
		label: o.label,
		requiredSignal: o.requiredSignal,
		sourceLabel: o.signalLabel,
		ruleLabel: "Uses actimetric Preschool Wrist Random Forest Free Living Lag-Lead classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
		unavailableAction: "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.",
		unavailableStatus: "backend_required"
	}, null), h = Ge("hildebrand_enmo_wrist_2014"), _ = xa({
		method: h.method,
		label: h.label,
		requiredSignal: h.requiredSignal,
		sourceLabel: h.signalLabel,
		ruleLabel: "Hildebrand 2014 non-dominant wrist ENMO (mg) cut-points: MVPA >=201 mg, vigorous >=707 mg; light near ~45 mg. Applied to a calibrated ENMO (mg) epoch signal, never to ActiGraph counts.",
		unavailableAction: "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline; the browser count pipeline does not compute ENMO mg.",
		unavailableStatus: "needs_signal"
	}, null);
	let w = !1, y = !1, v = !1, M = !1;
	const b = Ce(), x = c.map(() => ({ total: 0 })), k = { total: 0 };
	for (const I of t) {
		if (e.signal?.throwIfAborted(), !I.id) continue;
		const t = I.id, a = await ee(t, e.dbOverride), s = await te(t, n, e.dbOverride), o = await ne(t, e.dbOverride), u = await _a({
			db: e.dbOverride ?? null,
			fileId: t,
			kind: "analysis",
			...e.signal ? { signal: e.signal } : {},
			inputs: {
				epochLengthSeconds: I.epochLengthSeconds,
				sourceProfileId: I.sourceProfileId ?? null,
				summaries: a,
				markers: fa(s),
				sensorNonwearPeriods: o,
				maskPolicy: i,
				validDayCriteria: r ?? null,
				thresholds: c.map(wa),
				choiAxis: b
			}
		}, async () => Aa({
			file: I,
			days: [...(await me(t, e.dbOverride, e.activityDayMemo)).values()],
			summaries: a,
			markersByAnalysisDate: s,
			sensorNonwearPeriods: o,
			maskPolicy: i,
			validDayCriteria: r,
			cutpointMethods: c,
			choiAxis: b,
			...e.signal ? { signal: e.signal } : {}
		}));
		u.shortfall && m.push(u.shortfall), u.ggirSummarySeen && (y = !0);
		for (const e of u.ggirRows) l.totalDays += 1, l.sedentaryMinutes += e.sedentaryMinutes, l.lightMinutes += e.lpaMinutes, l.mvpaMinutes += e.mvpaMinutes;
		u.hasAnyActivity && (w = !0), u.cutpoints.forEach((e, t) => {
			if (!e) return;
			const n = d[t];
			e.signalSeen && (p[t] = !0), Ia(n, e.totals, i, x[t]), e.previewTrace && !n.previewTrace && (n.previewTrace = e.previewTrace), e.epochMismatch && !n.epochMismatch && (n.epochMismatch = e.epochMismatch);
		}), u.mims && (u.mims.signalSeen && (v = !0), Ia(g, u.mims.totals, i, k)), u.preschoolRf && (u.preschoolRf.signalSeen && (M = !0), Ia(f, u.preschoolRf.totals, i, k));
	}
	for (let I = 0; I < d.length; I++) {
		const e = d[I], t = c[I];
		e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes, 0 === e.totalDays && (e.available = !1, e.status = p[I] ? "ready" : "needs_signal", e.unavailableReason = p[I] ? m.length > 0 ? `Excluded by the valid-days-per-participant rule: ${m.join("; ")}. Change it in Study Settings → valid-day criteria.` : `No local ${e.sourceLabel.toLowerCase()} days meet the minimum wake-wear rule.` : w ? `No local ${e.sourceLabel.toLowerCase()} days are available.` : "No local activity epochs are available.", e.nextStepLabel = t.unavailableAction), ka(e);
	}
	l.moderateMinutes = l.mvpaMinutes, ka(l), 0 === l.totalDays && (l.available = !1, l.status = y ? "ready" : "needs_signal", l.unavailableReason = y ? "No local GGIR daily summaries meet the current inclusion rules." : "No local GGIR daily summaries are available. Import raw/5-second-capable files to populate ENMO summaries.", l.nextStepLabel = "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."), g.totalDays > 0 ? (g.available = !0, g.status = "ready", g.unavailableReason = null, g.nextStepLabel = null, g.mimsUnitPerDay = (g.mimsUnitTotal ?? 0) / g.totalDays) : (g.available = !1, g.status = v ? "ready" : "backend_required", g.unavailableReason = v ? "No stored MIMS_UNIT epoch days meet the current inclusion rules." : "No MIMS_UNIT epoch values are stored in this workspace yet. This becomes ready when the actours MIMS backend/WASM build computes and stores MIMS_UNIT epochs.", g.nextStepLabel = "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values."), ka(_), _.available = !1, _.status = "needs_signal", _.unavailableReason = "No calibrated ENMO (mg) epoch stream is available in this workspace. ENMO (mg) is a raw/GGIR-derived signal; the browser count pipeline does not produce it, so this method cannot classify counts against Hildebrand mg thresholds.", _.nextStepLabel = "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline.", ka(f), f.totalDays > 0 ? (f.available = !0, f.status = "ready", f.unavailableReason = null, f.nextStepLabel = null) : (f.available = !1, f.status = M ? "ready" : "backend_required", f.unavailableReason = M ? "No stored preschool wrist RF class days meet the current inclusion rules." : "No actimetric-compatible preschool wrist RF class epochs are stored in this workspace yet. This becomes ready when actours/WASM computes 15 s classes for 3-5 year-old wrist data.", f.nextStepLabel = "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.");
	const S = t.map((e) => e.sourceProfileId);
	return [
		l,
		f,
		...d,
		_,
		g
	].filter((e) => Pe(e.method, S));
}
const Ta = [
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
function Na(e, t) {
	if (!t) return !0;
	const [n, i] = t;
	return e >= n && e <= i;
}
function Ea(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function Ca(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function $a(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
function Oa(e) {
	const t = De.find((t) => t.method === e);
	if (t) return {
		family: t.family,
		requiredSignal: t.requiredSignal,
		computationOwner: t.backendOwner ?? "browser_workspace",
		frontendComputesMetric: t.frontendComputesMetric,
		statusWhenMissing: t.statusWhenMissing
	};
	const n = Ge(e), i = "ready" === n.statusWhenMissing ? "needs_signal" : n.statusWhenMissing;
	return {
		family: n.family,
		requiredSignal: n.requiredSignal,
		computationOwner: n.backendDependency ?? "browser_workspace",
		frontendComputesMetric: "count_cutpoint" === n.family,
		statusWhenMissing: i
	};
}
function Ba(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function La(e, t, n) {
	return "default" === n ? e.ruleLabel : t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, non-sedentary >=${String(t.lightMin)} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, MVPA >=${String(t.moderateMin)} counts/min` : `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, moderate ${String(t.moderateMin)}-${String(t.vigorousMin - 1)}, vigorous >=${String(t.vigorousMin)} counts/min`;
}
function Da(e) {
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
async function Pa(e, t, n = {}, i) {
	const r = await ae(i), a = (e.length > 0 ? r.filter((t) => null != t.id && e.includes(t.id)) : r).sort((e, t) => e.filename.localeCompare(t.filename)), s = [], o = n.username ?? "anonymous", l = n.maskPolicy ?? ia, u = n.choiAxis ?? Ce(), c = na(l), d = n.cutpointOverrides, p = n.cutpointPresetNames, m = Z(n.signal), g = await Promise.all(je.map((e) => async function(e, t, n, i) {
		const r = t?.[e.method], a = r ? await Le(r, i) : null;
		return a ? {
			thresholds: a,
			source: "custom",
			presetName: n?.[e.method] ?? ""
		} : {
			thresholds: Ba(e),
			source: "default",
			presetName: ""
		};
	}(e, d, p, m))), f = n.inclusionRulePresetName ?? "", h = n.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), _ = Ge("ggir_enmo"), w = Ge("mims"), y = Ge("preschool_free_living_rf_3_5"), v = Oa("ggir_enmo"), M = Oa("mims"), b = Oa("preschool_free_living_rf_3_5");
	for (const x of a) {
		if (n.signal?.throwIfAborted(), !x.id) continue;
		if (!0 === x.ggirSummariesNeedRecompute) throw new Error(`${x.filename}: its GGIR summaries were not recomputed for the current study settings. In Study settings, run Rescore (offered for every file whose summaries are refused) before exporting.`);
		const e = x.participantId ?? "", r = Number.isFinite(x.epochLengthSeconds) && x.epochLengthSeconds > 0 ? x.epochLengthSeconds : 60, a = await ee(x.id, i);
		for (const n of a) Na(n.analysisDate, t) && s.push({
			filename: x.filename,
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
			maskNonwearDetector: c,
			maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
			scoredUsername: o,
			sourceContentHash: x.sourceContentHash ?? x.fileHash,
			exportedAt: h,
			notes: "Stored GGIR daily summary values."
		});
		const d = [...(await me(x.id, i, n.activityDayMemo)).entries()].filter(([e]) => Na(e, t)).sort(([e], [t]) => e.localeCompare(t)).map(([, e]) => e), p = await te(x.id, o, i), m = await ne(x.id, i), k = {
			policy: la(l),
			intervals: sa(p, m)
		}, S = d.map((e) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: r,
			series: oa(e, l, u, r)
		})), I = async (e, t) => {
			n.signal?.throwIfAborted();
			const i = d.flatMap((t, n) => {
				const i = e(t, n);
				return i ? [{
					index: n,
					dayInput: i
				}] : [];
			}), r = d.map(() => {});
			if (0 === i.length) return r;
			const a = await ca({
				...k,
				...t,
				days: i.map(({ dayInput: e }) => e)
			}, n.signal);
			return n.signal?.throwIfAborted(), i.forEach(({ index: e }, t) => {
				r[e] = a.days[t];
			}), r;
		}, A = (e, t, n, i) => e && e.length > 0 ? {
			timestamps: S[i].timestamps,
			series: S[i].series ?? [],
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(e),
			grid: t,
			fallbackEpochSeconds: r
		} : null, R = [], T = je.map((e) => null !== ze(e.method, x.sourceProfileId));
		for (const [t, n] of je.entries()) T[t] ? R.push([]) : R.push(await I((e, t) => {
			const i = new Float64Array("axisY" === n.axis ? e.axisY : e.vectorMagnitude);
			return i.length > 0 && i.length === S[t].timestamps.length ? {
				...S[t],
				values: i
			} : null;
		}, {
			analysisKind: "count_cutpoint",
			thresholds: g[t].thresholds
		}));
		const N = await I((e, t) => A(ga(e), "classifier", e, t), { analysisKind: "preschool_classifier" }), E = await I((e, t) => A(e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output", e, t), { analysisKind: "mims_volume" }), C = await Promise.all(je.map((e) => Ue(e.method, r, n.signal)));
		for (const [t, n] of d.entries()) {
			const i = n.date;
			for (const [n, d] of je.entries()) {
				if (T[n]) continue;
				const a = g[n], u = La(d, a.thresholds, a.source), p = Oa(d.method), m = C[n], _ = Da(R[n][t]);
				s.push({
					filename: x.filename,
					participantId: e,
					analysisDate: i,
					method: d.method,
					methodLabel: d.label,
					methodFamily: p.family,
					requiredSignalContract: p.requiredSignal,
					computationOwner: p.computationOwner,
					frontendComputesMetric: p.frontendComputesMetric,
					sourceSignal: d.sourceLabel,
					status: _ ? "ready" : p.statusWhenMissing,
					methodRule: u,
					thresholdSource: a.source,
					thresholdPresetName: a.presetName,
					sedentaryMax: a.thresholds.sedentaryMax,
					lightMin: a.thresholds.lightMin,
					moderateMin: a.thresholds.moderateMin,
					vigorousMin: a.thresholds.vigorousMin,
					sedentaryMinutes: _?.sedentaryMinutes ?? null,
					lightMinutes: _?.lightMinutes ?? null,
					moderateMinutes: _?.moderateMinutes ?? null,
					vigorousMinutes: _?.vigorousMinutes ?? null,
					mvpaMinutes: _?.mvpaMinutes ?? null,
					mimsUnitTotal: null,
					epochLengthSeconds: r,
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
					nativeEpochSeconds: m?.nativeEpochSeconds ?? null,
					epochMismatch: "warn" === m?.severity,
					inclusionRulePresetName: f,
					maskExcludeNonwear: l.excludeNonwear,
					maskExcludeMainSleep: l.excludeMainSleep,
					maskExcludeNaps: l.excludeNaps,
					maskUseManualNonwear: l.useManualNonwear,
					maskUseAlgorithmNonwear: l.useAlgorithmNonwear,
					maskNonwearDetector: c,
					maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
					scoredUsername: o,
					sourceContentHash: x.sourceContentHash ?? x.fileHash,
					exportedAt: h,
					notes: _ ? u : `No finite ${d.sourceLabel.toLowerCase()} values for this day.`
				});
			}
			const a = Da(N[t]);
			null === ze("preschool_free_living_rf_3_5", x.sourceProfileId) && s.push({
				filename: x.filename,
				participantId: e,
				analysisDate: i,
				method: "preschool_free_living_rf_3_5",
				methodLabel: y.label,
				methodFamily: b.family,
				requiredSignalContract: b.requiredSignal,
				computationOwner: b.computationOwner,
				frontendComputesMetric: b.frontendComputesMetric,
				sourceSignal: y.signalLabel,
				status: a ? "ready" : b.statusWhenMissing,
				methodRule: "Stored actimetric preschool wrist RF classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
				thresholdSource: "not_applicable",
				thresholdPresetName: "",
				sedentaryMax: null,
				lightMin: null,
				moderateMin: null,
				vigorousMin: null,
				sedentaryMinutes: a?.sedentaryMinutes ?? null,
				lightMinutes: a?.lightMinutes ?? null,
				moderateMinutes: a?.moderateMinutes ?? null,
				vigorousMinutes: a?.vigorousMinutes ?? null,
				mvpaMinutes: a?.mvpaMinutes ?? null,
				mimsUnitTotal: null,
				epochLengthSeconds: a?.epochLengthSeconds ?? r,
				epochsReviewed: a?.epochsReviewed ?? 0,
				wakeWearMinutes: a?.wakeWearMinutes ?? null,
				excludedNonwearMinutes: a?.excludedNonwearMinutes ?? null,
				excludedMainSleepMinutes: a?.excludedMainSleepMinutes ?? null,
				excludedNapMinutes: a?.excludedNapMinutes ?? null,
				maskOverlapEpochs: a?.maskOverlapEpochs ?? null,
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
				maskNonwearDetector: c,
				maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
				scoredUsername: o,
				sourceContentHash: x.sourceContentHash ?? x.fileHash,
				exportedAt: h,
				notes: a ? "Stored actimetric-compatible preschool class epochs summarized with the selected mask policy." : "No stored actimetric-compatible preschool class epochs for this day."
			});
			const u = Da(E[t]);
			null === ze("mims", x.sourceProfileId) && s.push({
				filename: x.filename,
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
				epochLengthSeconds: u?.epochLengthSeconds ?? r,
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
				inclusionRulePresetName: f,
				maskExcludeNonwear: l.excludeNonwear,
				maskExcludeMainSleep: l.excludeMainSleep,
				maskExcludeNaps: l.excludeNaps,
				maskUseManualNonwear: l.useManualNonwear,
				maskUseAlgorithmNonwear: l.useAlgorithmNonwear,
				maskNonwearDetector: c,
				maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
				scoredUsername: o,
				sourceContentHash: x.sourceContentHash ?? x.fileHash,
				exportedAt: h,
				notes: u ? "Stored MIMS_UNIT epoch values; intensity cutpoints are not applied." : "No stored MIMS_UNIT epoch values for this day."
			});
		}
	}
	return s;
}
Ta.join(","), je.length;
var ja = n({
	editsFromMarkers: () => Ka,
	getGgirMarkerInputs: () => Ja,
	ggirNightRecords: () => qa,
	hasGgirRecomputeFailure: () => Ua,
	mergeGgirSleepMarkers: () => Ha,
	recomputeGgirResults: () => Qa,
	recoverPendingGgirRecomputes: () => Xa,
	reviewGgirResultsForMarkers: () => ts,
	scheduleGgirRecompute: () => Za
});
const Fa = new EventTarget(), Wa = /* @__PURE__ */ new WeakMap(), Ga = 800, za = "Update GGIR review";
function Ua(e, t, n) {
	return B.getState().jobs[`${n.name}:${Ya(e, t)}`]?.status === O.FAILED;
}
function Va(e, t, n, i, r) {
	if (r?.aborted || function(e) {
		return e instanceof Error && e.name === M.errnames.DatabaseClosed;
	}(i)) return;
	const a = Ya(e, t), s = `${n.name}:${a}`, o = B.getState();
	o.jobs[s]?.controller.signal.aborted || o.jobs[s]?.status === O.ELSEWHERE || (o.update(s, {
		id: s,
		key: a,
		workspaceId: n.name,
		kind: F.GGIR_RECOMPUTE,
		label: za,
		controller: o.jobs[s]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: O.FAILED
	}), n.isOpen() && W() === n && Fa.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function Ha(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function qa(e, t, n, i = [], r) {
	const a = ie([...n.values()].flat(), !0), s = a?.algorithm ?? Te(t), o = a?.detectionRule ?? null, l = /* @__PURE__ */ new Map();
	for (const [d, p] of n) {
		const e = ie(p, !0);
		e && l.set(d, [{
			...e,
			algorithm: s,
			detectionRule: o
		}]);
	}
	const u = Ee(t), c = u.length ? await Z(r).ggirLabelsToStoredMs(Float64Array.from(u.flatMap((e) => [e.onsetMs, e.wakeMs])), i) : [];
	for (const [p, m] of u.entries()) {
		const t = l.get(m.nightDate)?.[0], n = ve(m, t);
		"scored" !== n.kind && "invalid" !== n.kind ? l.set(m.nightDate, [{
			fileId: e,
			date: m.nightDate,
			username: he,
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
			sleepMarkers: Ha({
				markerType: d.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: c[2 * p] / 1e3,
				offsetTimestamp: c[2 * p + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : l.set(m.nightDate, t ? [t] : []);
	}
	return l;
}
async function Ka(e, t, n = [], i) {
	const r = Se(e).flatMap((e) => {
		const n = ve(e, t.get(e.nightDate));
		return "scored" === n.kind && null != n.main.onsetTimestamp && null != n.main.offsetTimestamp ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === r.length) return [];
	const a = Z(i), s = await a.storedToGgirLabelsMs(Float64Array.from(r.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await a.wallClockLabels(Float64Array.from([...s, ...r.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * r.length;
	return r.flatMap(({ w: e }, t) => {
		const n = o[2 * t], i = o[2 * t + 1];
		return n !== o[l + 2 * t] || i !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: i
		}] : [];
	});
}
async function Ja(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [i, r] = await Promise.all([oe(e, t, n), X(e, n)]), a = new Map([...i].flatMap(([e, t]) => {
			const n = ie(t, !0);
			return n ? [[e, n]] : [];
		})), s = r?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([s ?? [], [...a].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				ve(void 0, t)
			])]),
			markers: a,
			clockSteps: s,
			bundleRevision: r?.ggirBundleRevision
		};
	});
}
function Ya(e, t) {
	return `${F.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function Za(e, t, n, i) {
	if (!n.isOpen() || W() !== n || i?.aborted) return;
	let r = Wa.get(n);
	r || (r = /* @__PURE__ */ new Map(), Wa.set(n, r));
	const a = Ya(e, t);
	clearTimeout(r.get(a)), r.set(a, setTimeout(() => {
		r.delete(a), n.files.get(e).then((r) => {
			if (r?.ggirBundleRevision && n.isOpen() && W() === n && !i?.aborted) return Qa(e, t, n, i);
		}).catch((r) => {
			i?.aborted || r instanceof DOMException && "AbortError" === r.name || (Va(e, t, n, r, i), n.isOpen() && W() === n && (console.error("[ggir-results] recompute failed."), de("error", "GGIR results recompute failed", pe(r))));
		});
	}, Ga));
}
function Qa(e, t, n, i, r = !0) {
	const a = (s, o = i) => Y({
		kind: F.GGIR_RECOMPUTE,
		key: Ya(e, t),
		label: za,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (i) => {
			i.signal.throwIfAborted();
			const o = await async function(e, t, n, i, r) {
				if (i.throwIfAborted(), !n.isOpen() || W() !== n) return null;
				const { markerInputs: a, markers: s, clockSteps: o, bundleRevision: l } = await Ja(e, t, n);
				if (!l) return null;
				const u = await n.ggirScorerReviews.get([e, t]);
				if (!n.isOpen() || W() !== n) return null;
				if (i.throwIfAborted(), u?.markerInputs === a && u.bundleRevision === l) return r && Fa.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), u.current ?? null;
				const c = await w(n, e);
				if (!c) return null;
				const d = await Ka(c.imported, s, o, i);
				if (!n.isOpen() || W() !== n) return null;
				const p = es(u, l, d) ? u.current : (await ts(c, s, o, d, i)).current;
				i.throwIfAborted();
				const m = (/* @__PURE__ */ new Date()).toISOString();
				if (!n.isOpen() || W() !== n) return null;
				const g = await Q(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!n.isOpen() || W() !== n) return null;
					const r = await Ja(e, t, n);
					return r.markerInputs === a && r.bundleRevision === l && (0 === await n.ggirResultsBundles.where(":id").equals(e).count() ? null : (i.throwIfAborted(), await n.ggirScorerReviews.put({
						fileId: e,
						scorer: t,
						...p ? { current: p } : {},
						edits: d,
						markerInputs: a,
						bundleRevision: l,
						updatedAt: m
					}), !0));
				}, i);
				return g ? (Fa.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), i.throwIfAborted(), p ?? c.imported) : (i.throwIfAborted(), !1 !== g && null);
			}(e, t, n, i.signal, r);
			return i.signal.throwIfAborted(), !1 !== o ? o : (s < 2 && a(s + 1, i.signal).catch((r) => Va(e, t, n, r, i.signal)), null);
		}
	});
	return a(0);
}
function Xa(e, t) {
	return Y({
		kind: F.GGIR_RECOVERY,
		key: F.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const i = () => !t.signal.aborted && e.isOpen() && W() === e;
			try {
				if (!i()) return;
				const a = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: s } = await import("./local-data-source-S_aE_BN8.js").then((e) => e.n);
				for (const o of a) {
					if (t.signal.throwIfAborted(), !i()) return;
					try {
						const [a] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), s(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), u = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...a.map((e) => e.scorer)]);
						u.delete(he);
						for (const s of u) {
							if (!i()) return;
							try {
								const n = Ua(o, s, e);
								if (!n) {
									const { markerInputs: t, bundleRevision: n } = await Ja(o, s, e), i = a.find((e) => e.scorer === s);
									if (n && i?.markerInputs === t && i.bundleRevision === n) continue;
								}
								await Qa(o, s, e, t.signal, n);
							} catch (r) {
								n = !0, Va(o, s, e, r, t.signal);
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
				const r = Object.values(B.getState().jobs).filter((t) => D(t) && t.workspaceId === e.name && t.kind === F.GGIR_RECOMPUTE && t.status === O.FAILED);
				for (const t of r) {
					const r = t.key.slice(F.GGIR_RECOMPUTE.length + 1);
					if (!i()) break;
					const a = r.indexOf(":"), s = Number(r.slice(0, a)), o = JSON.parse(r.slice(a + 1));
					try {
						await e.transaction("r", e.ggirResultsBundles, e.markers, e.ggirScorerReviews, async () => {
							if (!i()) return;
							const [n, r, a] = await Promise.all([
								e.ggirResultsBundles.where(":id").equals(s).count(),
								e.markers.where("fileId").equals(s).filter((e) => e.username === o).count(),
								e.ggirScorerReviews.where("[fileId+scorer]").equals([s, o]).count()
							]);
							i() && (0 === n || 0 === r && 0 === a) && (B.getState().dismiss(t.id), Fa.dispatchEvent(new CustomEvent("updated", { detail: {
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
function es(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
async function ts(e, t, n = [], i, r, a) {
	const s = i ?? await Ka(e.imported, t, n, r);
	let o;
	r?.throwIfAborted();
	const l = a?.review;
	if (es(l, a?.bundleRevision, s)) o = l.current;
	else if (s.length > 0 && e.ms2 && e.ms3) {
		const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), i = t(e.ms3), a = t(e.ms4), l = t(e.ms5), u = t(e.sleeplogRData);
		o = Ie(await J(r, (t) => t.reviewGgirResults({
			part1: new Uint8Array(e.part1),
			configCsv: e.configCsv,
			recordingId: b(e.recordingFile),
			...n ? { ms2: n } : {},
			...i ? { ms3: i } : {},
			...a ? { ms4: a } : {},
			...l ? { ms5: l } : {},
			...u ? { sleeplogRData: u } : {},
			...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
			edits: s,
			...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
			...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
			crossCheck: !1
		})));
	}
	r?.throwIfAborted();
	const u = Object.getOwnPropertyDescriptors(e);
	return delete u.current, Reflect.deleteProperty(u, "edits"), Object.defineProperties({
		...o ? { current: o } : {},
		edits: s
	}, u);
}
const ns = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], is = [
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
], rs = [
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
], as = [
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
], ss = ["fileId", ...g], os = {
	files: [
		...ns,
		"ggirTimezone",
		"recording",
		"ggirClockSteps"
	],
	markers: is,
	activityDays: rs,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: as
}, ls = {
	files: [...ns, "ggirClockSteps"],
	markers: is,
	activityDays: rs,
	ggirResultsBundles: as,
	ggirResultsBlobs: ss,
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
}, us = {
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
}, cs = "Also export corrected values was off at export";
function ds(e) {
	const t = Object.values(e.ggirCorrectionsNotApplied).filter((e) => e !== cs).length, n = Object.keys(e.ggirCorrectionProfiles);
	if (0 === n.length && 0 === t) return null;
	const i = Object.keys(e.ggirCorrections).length;
	return `Corrected values: ${n.length > 0 ? `profile ${n.join(", ")}; ` : ""}${String(i)} ${1 === i ? "recording" : "recordings"} corrected, ${String(t)} left out (see manifest.json).`;
}
function ps(e) {
	const t = ks(e, gs.manifest), n = new Map(t.ggirResultsBundles.map((e) => [e.fileId, e.recordingFile]));
	return t.ggirCorrectedValues.flatMap((e) => void 0 !== e.notApplied && "Also export corrected values was off at export" !== e.notApplied && n.has(e.fileId) ? [{
		file: xi("part4_night_review", "corrected"),
		row: 0,
		key: n.get(e.fileId),
		column: `corrected values: ${e.notApplied}`,
		reason: "not_computed_for_export"
	}] : []);
}
const ms = {
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
}, gs = {
	sleep: os,
	nonwear: os,
	summary: os,
	wide: os,
	circadian: {
		files: ns,
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
	ggirReport: ls,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: is,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: ns,
		markers: is,
		actiwareFileData: [
			"fileId",
			"actiwareIntervals",
			"actiwareStatistics",
			"actiwareStatisticsNeedsRecompute"
		],
		actiwareStatisticsInputs: ["fileId", "input"]
	},
	actiwareSleepWake: {
		files: ns,
		markers: is,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: us,
	audit: ms,
	ggirResults: {
		...us,
		...os,
		...ls,
		auditLog: ms.auditLog,
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
			P
		]
	}
}, fs = /* @__PURE__ */ new WeakMap(), hs = /* @__PURE__ */ new WeakMap();
function _s(e, t, n, i) {
	for (let r = 0; r < n.byteLength;) {
		const a = n.subarray(r, r + Wn), s = e[t](a, { at: i + r });
		if (!Number.isInteger(s) || s <= 0 || s > a.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		r += s;
	}
}
function ws(e) {
	if (!e || "object" != typeof e) return e;
	const t = hs.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return _s(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(ws) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, ws(t)])) : structuredClone(e);
}
function ys(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(ys), Object.freeze(e)), e;
}
async function vs(e, t = W(), n = {}) {
	const i = await Ds(null, "computing the corrected GGIR values", () => async function(e, t, n = {}) {
		if (i = (await se(e))?.extraSettings, !0 !== y("ggir_export_corrected_values", i?.ggir_export_corrected_values).value) return null;
		var i;
		const r = /* @__PURE__ */ new Map(), a = await ae(e, t.length ? { onlyFileIds: t } : void 0), s = new Map(a.map((e) => [e.id, e])), l = await e.ggirResultsBundles.where("fileId").anyOf([...s.keys()]).toArray(), u = new Map((await e.ggirCorrectedValues.where("fileId").anyOf(l.map((e) => e.fileId)).toArray()).map((e) => [e.fileId, e])), c = Z(n.signal), d = l.filter((e) => !e.ggirCorrections), p = [...new Set(d.map((e) => e.configCsv))], m = await Promise.all(p.map((e) => async function(e, t) {
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
		}(c, e)));
		n.signal?.throwIfAborted();
		const g = [];
		for (const o of d.sort((e, t) => s.get(e.fileId).filename.localeCompare(s.get(t.fileId).filename))) {
			const e = m[p.indexOf(o.configCsv)];
			if ("notApplied" in e) {
				r.set(o.fileId, e);
				continue;
			}
			const t = s.get(o.fileId), n = JSON.stringify([
				t.ggirBundleRevision ?? null,
				e.revision,
				e.profile
			]);
			r.set(o.fileId, {
				key: n,
				revision: t.ggirBundleRevision
			}), u.get(o.fileId)?.key !== n && g.push({
				fileId: o.fileId,
				key: n,
				revision: t.ggirBundleRevision,
				size: t.sourceSizeBytes ?? 0,
				name: t.filename
			});
		}
		if (0 === g.length) return r;
		let f = 0;
		n.onProgress?.(f, g.length);
		const h = await zt(g.map((t) => ({
			name: t.name,
			cost: t.size,
			run: async (i, r) => {
				try {
					const n = await w(e, t.fileId);
					if (!n) return {
						miss: t,
						notApplied: "the recording was deleted during the export"
					};
					const r = await async function(e, t) {
						if (!e.resultsCsv) return { notApplied: "imported before the app kept GGIR's results/ files; import the GGIR output folder again for its corrected values" };
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
						}, r = e.recordingFile, a = b(r), s = {}, o = /* @__PURE__ */ new Map(), l = (e) => {
							for (const { file: t } of e.changes) {
								const e = /^meta\/(ms\d)\.out\//u.exec(t)?.[1] ?? ea(t);
								s[e] = (s[e] ?? 0) + 1;
							}
							for (const t of e.corrections_not_applied) o.set(t.correction, t.reason);
						}, u = i(), c = {
							recording_id: a,
							filename: r,
							part1_index: u.add(e.part1),
							ms2_index: u.add(e.ms2),
							ms3_index: u.add(e.ms3),
							ms4_index: u.add(e.ms4),
							ms5_index: u.add(e.ms5),
							night_edits: [],
							invalid_nights: []
						}, d = [
							"ms2",
							"ms3",
							"ms4",
							"ms5"
						].filter((e) => null != c[`${e}_index`]), p = await t.rerunGgirResults({
							...u.request,
							recordings: [c],
							original_files: [],
							outputs: d
						}, u.buffers);
						if ("ok" !== p.status) return { notApplied: p.reason ?? "the GGIR engine refused this recording" };
						const m = Object.fromEntries([
							"ms2",
							"ms3",
							"ms4",
							"ms5"
						].flatMap((e) => {
							const t = p.files.find((t) => t.path === `meta/${e}.out/${r}`);
							return t ? [[e, t.bytes.slice().buffer]] : [];
						}));
						if (!m.ms4) return { notApplied: "the GGIR engine returned no corrected Part 4 milestone" };
						l(p);
						const g = i(), f = Object.entries(e.resultsCsv).map(([e, t]) => ({
							path: e,
							bytes_index: g.add(t)
						})), h = m.ms2 ?? e.ms2, _ = m.ms3 ?? e.ms3, w = m.ms5 ?? e.ms5, y = {
							recording_id: a,
							filename: r,
							part1_index: null,
							ms2_index: g.add(m.ms2),
							ms3_index: null,
							ms4_index: g.add(m.ms4),
							ms5_index: g.add(w),
							stock_ms4_index: g.add(e.ms4),
							stock_ms5_index: g.add(e.ms5),
							night_edits: [],
							invalid_nights: []
						}, v = [
							...["part2_daysummary.csv", "part2_summary.csv"].every((e) => f.some((t) => t.path === `results/${e}`)) && null !== y.ms2_index ? ["part2_reports"] : [],
							"part4_reports",
							...f.some((e) => /(^|\/)part5_/u.test(e.path)) ? ["part5_reports"] : []
						], M = await t.rerunGgirResults({
							...g.request,
							recordings: [y],
							original_files: f,
							outputs: v
						}, g.buffers);
						if ("ok" !== M.status) return { notApplied: M.reason ?? "the GGIR engine refused this recording's reports" };
						const x = M.files.find((e) => "results/part4_nightsummary_sleep_cleaned.csv" === e.path) ?? M.files.find((e) => "results/QC/part4_nightsummary_sleep_cleaned.csv" === e.path);
						if (!x) return { notApplied: "the GGIR engine gave no Part 4 cleaned night summary" };
						l(M);
						const k = async (n) => Object.fromEntries(await Promise.all(M.files.filter((e) => e.path === `results/${ea(e.path)}` && n.test(ea(e.path))).map(async (n) => [ea(n.path), await t.readGgirReportCsv(new TextDecoder().decode(n.bytes), e.configCsv)]))), S = await k(j), I = await k(G), A = new TextDecoder().decode(x.bytes), R = (e) => e ? new Uint8Array(e) : void 0, T = await t.reviewGgirResults({
							part1: new Uint8Array(e.part1),
							configCsv: e.configCsv,
							recordingId: a,
							part2Reports: S,
							...h ? { ms2: R(h) } : {},
							..._ ? { ms3: R(_) } : {},
							ms4: R(m.ms4),
							...w ? { ms5: R(w) } : {},
							...e.sleeplogRData ? { sleeplogRData: R(e.sleeplogRData) } : {},
							...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
							cleanedNightsCsv: A,
							...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
							edits: [],
							crossCheck: !1
						});
						return {
							values: {
								...h ? { ms2: h } : {},
								..._ ? { ms3: _ } : {},
								ms4: m.ms4,
								...w ? { ms5: w } : {},
								cleanedNightsCsv: A,
								part2Reports: Ae(S, T),
								personReports: Ae(I, T),
								imported: Ie(T)
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
					return n.signal?.throwIfAborted(), r.primary || r.cancel(), {
						miss: t,
						notApplied: (a instanceof Error ? a.message : String(a)).replace(/^Error: /u, "")
					};
				} finally {
					n.signal?.aborted || n.onProgress?.(++f, g.length);
				}
			}
		})), {
			signal: n.signal,
			createWorker: o,
			extraWorkers: Ft({
				cores: navigator.hardwareConcurrency,
				deviceMemoryGib: K(),
				maxExtraWorkers: Number.POSITIVE_INFINITY,
				workerMemoryGib: Pt(Math.max(0, ...g.map((e) => e.size)))
			}),
			cancelOperation: () => {},
			...n.workerPool
		});
		for (const { miss: o, notApplied: _ } of h) void 0 !== _ && r.set(o.fileId, { notApplied: _ });
		return r;
	}(t, e, {
		signal: n.signal,
		onProgress: (e, t) => n.progress?.(e, t, "Computing corrected values"),
		...n.workerPool ? { workerPool: n.workerPool } : {}
	}));
	return n.progress?.(0, 0, Un), Ds(null, "checking the export inputs", () => async function(e, t = W(), n = {}) {
		const i = /* @__PURE__ */ new Map();
		for (const d of (n.readPlan ?? Object.keys(gs)).map((e) => gs[e])) for (const [e, t] of Object.entries(d)) {
			const n = e;
			i.set(n, /* @__PURE__ */ new Set([...i.get(n) ?? [], ...t]));
		}
		if (!i.size) {
			const e = Object.freeze({ files: Object.freeze([]) });
			return fs.set(e, {}), e;
		}
		let r = 268435456;
		const a = (e) => {
			if (e instanceof ArrayBuffer ? r -= e.byteLength : "string" == typeof e ? r -= 2 * e.length : e && "object" == typeof e ? Object.values(e).forEach(a) : r -= 8, r < 0) throw new Error("Export snapshot exceeds 256 MiB. Select fewer recordings or a narrower workspace before exporting.");
		};
		let s = 0;
		const o = (e) => {
			if (n.binaryStore && (e instanceof ArrayBuffer || ArrayBuffer.isView(e))) {
				const t = e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), i = Object.freeze({}), r = e instanceof ArrayBuffer ? null : e.constructor;
				return _s(n.binaryStore, "write", t, s), hs.set(i, {
					at: s,
					length: t.byteLength,
					store: n.binaryStore,
					restore: r ? (e) => new r(e) : (e) => e
				}), s += t.byteLength, a(0), i;
			}
			return Array.isArray(e) ? e.map(o) : e && "object" == typeof e && Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, o(t)])) : (a(e), e);
		}, l = await t.transaction("r", [...i.keys()].map((e) => t[e]), async () => {
			const n = i.has("files") ? await ae(t, e.length ? { onlyFileIds: e } : void 0) : [], r = new Set(n.flatMap((e) => e.id ? [e.id] : [])), a = {};
			return await Promise.all([...i].map(async ([e, i]) => {
				const s = (e) => Object.fromEntries([...i].filter((t) => t in e).map((t) => [t, o(e[t])]));
				if (a[e] = [], "files" === e) return void (a[e] = n.map((e) => s(e)));
				const l = "diaryEntries" === e ? t.diaryEntries : ue(t, e);
				await ("studySettings" === e ? l.where("key").equals("study") : l.where("fileId").anyOf([...r])).each((t) => {
					a[e].push(s(t));
				});
			})), a;
		}), u = new Set((l.ggirResultsBundles ?? []).map((e) => e.fileId));
		l.markers = (l.markers ?? []).map((e) => u.has(e.fileId) && "invalid" === ve(void 0, _e(e)).kind ? {
			...e,
			isInvalidNight: !0
		} : e);
		const c = function(e) {
			const t = Object.freeze({ files: ys((e.files ?? []).map((e) => Object.fromEntries(ns.map((t) => [t, ws(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
			return fs.set(t, e), t;
		}(l);
		return function(e, t) {
			const n = fs.get(e);
			if (!n.ggirResultsBundles) return;
			const i = new Set(n.ggirResultsBundles.map((e) => e.fileId));
			if (void 0 === t) return void (n.ggirCorrectedValues && (n.ggirCorrectedValues = n.ggirCorrectedValues.filter((e) => !i.has(e.fileId))));
			const r = new Map((n.files ?? []).map((e) => [e.id, e.ggirBundleRevision])), a = new Map((n.ggirCorrectedValues ?? []).map((e) => [e.fileId, e]));
			n.ggirCorrectedValues = n.ggirResultsBundles.flatMap((e) => {
				if (!t) return e.ggirCorrections && !e.stock ? [] : [{
					fileId: e.fileId,
					key: "",
					notApplied: cs
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
				const i = a.get(e.fileId);
				return [i && i.key === n.key && r.get(e.fileId) === n.revision ? i : {
					fileId: e.fileId,
					key: "",
					notApplied: "the recording changed during the export; export again for its corrected values"
				}];
			});
		}(c, n.ggirCorrected), c;
	}(e, t, {
		...n,
		ggirCorrected: i
	}));
}
const Ms = [
	"sleep",
	"circadian",
	"ggirReport",
	"event"
];
var bs = class extends Error {};
function xs(e, t, n) {
	const i = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new bs(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (i(t), Reflect.get(e, t, n)),
		has: (e, t) => (i(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (i(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function ks(e, t, n = []) {
	const i = fs.get(e);
	if (!i) throw new bs("Export requires a captured input snapshot");
	const r = Object.entries(gs).find(([, e]) => e === t)?.[0];
	if (!r) throw new bs("Export producer has no registered input declaration");
	const a = {};
	for (const [s, o] of Object.entries(t)) {
		const e = i[s].filter((e) => !n.length || "studySettings" === s || n.includes("files" === s ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const i of o.filter((e) => e in t)) Object.defineProperty(n, i, {
				enumerable: !0,
				get: () => ys(ws(t[i]))
			});
			return xs(n, o, `${r}: undeclared field ${s}.`);
		});
		Object.assign(a, { [s]: Object.freeze(e) });
	}
	return xs(a, Object.keys(t), `${r}: undeclared table `);
}
function Ss(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	for (const r of e.markers) {
		if (r.fileId !== t || r.username !== n) continue;
		const e = _e(r), a = i.get(r.date) ?? [];
		a.push(e), i.set(r.date, a);
	}
	return i;
}
function Is(e, t, n) {
	return new Map([...Ss(e, t, n)].flatMap(([e, t]) => {
		const n = ie(t.filter(f));
		return n ? [[e, n]] : [];
	}));
}
const As = /* @__PURE__ */ new WeakMap();
function Rs(e, t, n, i) {
	let r = As.get(e);
	r || (r = /* @__PURE__ */ new Map(), As.set(e, r));
	const a = JSON.stringify([t, n]);
	let s = r.get(a);
	return s || (r.clear(), s = async function(e, t, n, i) {
		const r = ks(e, gs.ggirReport, [t]), a = r.files.find((e) => e.id === t), s = r.ggirResultsBundles.find((e) => e.fileId === t), o = s && h(s, r.ggirResultsBlobs.find((e) => e.fileId === t)), l = Ss(r, t, n), u = o ? await qa(t, o.imported, l, a.ggirClockSteps, i) : l, c = new Map([...u].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), d = new Set([...c].filter(([, e]) => "invalid" === ve(void 0, e).kind).map(([e]) => e)), p = {
			review: r.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n),
			bundleRevision: a.ggirBundleRevision
		}, m = o ? await ts(o, c, a.ggirClockSteps, void 0, i, p) : void 0, g = m ? await Ts(m, d, i) : void 0, f = r.ggirCorrectedValues.find((e) => e.fileId === t);
		return {
			markersByAlgo: u,
			selected: c,
			bundle: g,
			sets: o && m ? await Promise.all(ke(o, f, f?.notApplied !== cs).map(async ({ bundle: e }) => e === o ? g : Ts(await ts(e, c, a.ggirClockSteps, m.edits, i), d, i))) : [],
			invalidDates: d
		};
	}(e, t, n, i), r.set(a, s), s.catch(() => {
		r.get(a) === s && r.delete(a);
	})), s;
}
async function Ts(e, t, n) {
	const { ggirCell: i, ggirNum: r } = await import("./ggir-results-types-WB8axvb-.js").then((e) => e.i), a = e.part2Reports?.["part2_daysummary.csv"], s = e.cleanedNightsCsv ? await Z(n).readGgirReportCsv(e.cleanedNightsCsv, e.configCsv) : void 0, o = /* @__PURE__ */ new Map();
	if (a) for (let c = 0; c < a.rows; c++) {
		const e = i(a, E.ggir_id.header, c), t = Ii(i(a, E.ggir_calendar_date.header, c));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		o.set(n, o.has(n) ? null : c);
	}
	const l = Ai(e.imported, "nights"), u = async (e) => {
		const t = e.nights, u = await Promise.all(Array.from({ length: t.rows }, async (u, c) => {
			const d = i(t, E.ggir_id.header, c), p = o.get(JSON.stringify([null == d ? null : String(d), l(t, c, !1)])), m = a && null != p ? i(a, E.ggir_day_valid_hours.header, p) : null, g = a && null != p ? i(a, E.ggir_day_hours.header, p) : null, f = a && null != p ? r(a, E.ggir_day_valid_hours.header, p) : null, h = a && null != p ? r(a, E.ggir_day_hours.header, p) : null, _ = null != f && null != h ? await Z(n).ggirDayValidFraction(f, h) : null, w = r(t, E.ggir_night.header, c), y = Array.from({ length: e.days.rows }, (e, t) => t).find((t) => "WW" === i(e.days, "window", t) && r(e.days, "night_number", t) === w), v = s ? Array.from({ length: s.rows }, (e, t) => t).find((e) => String(i(s, E.ggir_id.header, e)) === String(d) && r(s, E.ggir_night.header, e) === w) : void 0, M = {
				ggir_nonwear_perc_spt: e.nightRecomputed[c] ? void 0 === y ? null : i(e.days, E.ggir_nonwear_perc_spt.header, y) : t.columns.includes(E.ggir_nonwear_perc_spt.header) ? i(t, E.ggir_nonwear_perc_spt.header, c) : s?.columns.includes(E.ggir_nonwear_perc_spt.header) && void 0 !== v ? i(s, E.ggir_nonwear_perc_spt.header, v) : void 0 === y ? null : i(e.days, E.ggir_nonwear_perc_spt.header, y),
				ggir_day_valid_hours: m,
				ggir_day_hours: g,
				ggir_day_valid_fraction: _ ?? null
			}, b = (a ? null === p ? "duplicate_part2_day" : void 0 === p ? "no_matching_part2_day" : null : "source_reported_missing") ?? "source_reported_missing";
			return {
				values: M,
				reasons: {
					ggir_day_valid_hours: null == f ? b : null,
					ggir_day_hours: null == h ? b : null,
					ggir_day_valid_fraction: null != _ ? null : null != h && h <= 0 ? "not_applicable_to_row" : b
				}
			};
		})), c = C.ggir_review_night_extension, d = [.../* @__PURE__ */ new Set([
			...t.columns,
			...c.map((e) => E[e].header),
			...c.map((e) => E[e].header + "_missing_reason")
		])], p = d.map((e) => {
			const n = c.find((t) => E[t].header + "_missing_reason" === e);
			if (n) return u.map((e) => e.reasons[n] ?? null);
			const i = c.find((t) => E[t].header === e);
			return i ? u.map((e) => e.values[i] ?? null) : t.values[t.columns.indexOf(e)];
		});
		return {
			...e,
			nights: {
				...t,
				columns: d,
				values: p
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
		...e.personReports && (e.edits.length > 0 || t.size > 0) ? { personRecomputed: await Ci(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await u(e.imported),
		...e.current ? { current: await u(e.current) } : {}
	};
}
function Ns(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function Es(e) {
	return ks(e, gs.ggirResults).studySettings.flatMap((e) => re(e).map((e) => ({
		file: "sleep_export.csv",
		row: 0,
		key: e.filename,
		column: `${e.category}: ${e.reason}`,
		reason: "not_computed_for_export"
	})));
}
const Cs = "not included", $s = "included if produced";
function Os(e) {
	const t = e.artifacts ?? null, n = t ? null : e.planned ?? null, i = e.columns, r = t ? t.sleepRows.length : n?.sleepRows ?? null, a = t ? t.sleepRows.filter((e) => e.markerType === d.MAIN_SLEEP).length : n?.mainSleepRows ?? null, s = t ? Ir(t.sleepRows).size : n?.wideRows ?? null, o = t ? t.summaryRows.length : n?.summaryRows ?? null, l = t ? t.nonwearRows.length : n?.nonwearRows ?? null, c = t ? t.physicalActivityRows.length : n?.activityRows ?? null, m = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : n?.activityDates ?? null, g = t ? t.eventMarkerRows?.length ?? 0 : n?.eventMarkerRows ?? null, f = t ? t.actiwareIntervalRows?.length ?? 0 : n?.actiwareIntervalRows ?? null, h = t ? t.actiwareSleepWakeCsv?.rows ?? 0 : n?.actiwareSleepWakeRows ?? null, _ = n?.actogramFiles ?? null, w = t ? Object.keys(t.ggirEntries) : null, y = (w ? w.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
		const n = Math.max(0, p(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
		return {
			name: e,
			include: n > 0,
			rows: n
		};
	}) : n ? [...Vi([...n.part4Rows.keys()])].map(([e, t]) => ({
		name: t,
		include: n.ggirMainSleepGroupKeys.includes(e),
		rows: n.part4Rows.get(e) ?? null
	})) : []).sort((e, t) => e.name.localeCompare(t.name)), v = w ? w.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [Gi, ...n?.ggirReviewEntries ?? []], M = (e) => null == e ? null : e > 0, b = (n, r, a) => {
		const s = null == r ? "unknown" : r ? "included" : "not_included";
		return "included" !== s ? {
			name: n,
			state: s,
			rows: null,
			detail: "unknown" === s ? a.detail : Cs,
			estimatedBytes: 0,
			write: null
		} : {
			name: n,
			state: s,
			rows: a.rows,
			detail: a.detail,
			estimatedBytes: a.estimatedBytes ?? ((a.rows ?? 0) + 1) * (a.columns ?? i) * 12,
			write: t ? () => a.csv ? Qi(a.csv(t)) : a.encode(t) : null,
			...t && (a.chunkField || a.wide) ? { batches: function* () {
				if (a.wide) {
					const e = Ar(t.sleepRows, !0), n = e.next().value;
					for (const t of e) {
						const e = n + "\n" + t;
						yield {
							bytes: Qi(e),
							text: e,
							rows: 1
						};
					}
				} else if (a.chunkField) {
					const n = t[a.chunkField] ?? [];
					for (let i = 0; i < n.length; i += 256) {
						const r = {
							...t,
							[a.chunkField]: n.slice(i, i + 256)
						}, s = !e.selectedColumns?.length || "sleepRows" !== a.chunkField && "nonwearRows" !== a.chunkField ? void 0 : Cr(r[a.chunkField], void 0, !0), o = a.csv(r);
						yield {
							bytes: Qi(o),
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
		b("sleep_export.csv", M(r), {
			rows: r,
			detail: null == r ? $s : `${String(r)} rows · ${String(i)} columns`,
			chunkField: "sleepRows",
			csv: (t) => Cr(t.sleepRows, e.selectedColumns ?? void 0, !0)
		}),
		b("sleep_export_wide.csv", !!e.includeWideFormat && M(s ?? a), {
			rows: s,
			detail: null == s ? $s : `${String(s)} participant group ${1 === s ? "row" : "rows"}`,
			wide: !0,
			csv: (e) => function(e, t = !1) {
				return [...Ar(e, t)].join("\n");
			}(e.sleepRows, !0)
		}),
		b("summary_export.csv", M(o ?? a), {
			rows: o,
			detail: null == o ? $s : `${String(o)} participant ${1 === o ? "row" : "rows"}`,
			chunkField: "summaryRows",
			csv: (e) => function(e, t = !1) {
				const n = Er("summary_csv", e, wr, void 0, t), i = [
					"summary_mean_temperature_c",
					"sleep_regularity_index",
					...Object.values(_r).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
				];
				return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? p(n).records.map((t, n) => 0 === n ? t.text + "," + i.map((e) => E[e].header + "_missing_reason").join(",") : t.text + "," + i.map((t) => {
					const i = e[n - 1];
					return "summary_mean_temperature_c" === t ? null == i.meanTemperature ? i.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? i.sleepRegularityMissingReason ?? "" : i.metricMissingReasons?.[t] ?? "";
				}).join(",")).join("\n") : n;
			}(e.summaryRows, !0)
		}),
		b("nonwear_export.csv", M(l), {
			rows: l,
			detail: null == l ? $s : `${String(l)} periods`,
			chunkField: "nonwearRows",
			csv: (t) => Cr(t.nonwearRows, e.selectedColumns ?? void 0, !0)
		}),
		b("event_markers_export.csv", M(g), {
			rows: g,
			detail: null == g ? $s : `${String(g)} button ${1 === g ? "press" : "presses"}`,
			columns: $r.length,
			chunkField: "eventMarkerRows",
			csv: (e) => function(e, t = !1) {
				const n = [[...$r, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
				for (const i of e) n.push([
					i.filename,
					i.participantId ?? "",
					i.studyDate,
					Dr(i.localTimestamp),
					null == i.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (i.localTimestamp - 60 * i.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
					...t ? [i.participantId ? "" : "source_reported_missing", null == i.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
				].map((e) => u(e)).join(","));
				return `${n.join("\n")}\n`;
			}(e.eventMarkerRows ?? [], !0)
		}),
		b("actiware_intervals_export.csv", M(f), {
			rows: f,
			detail: null == f ? $s : `${String(f)} Actiware intervals`,
			columns: Wr.length,
			chunkField: "actiwareIntervalRows",
			csv: (e) => zr(e.actiwareIntervalRows ?? [], !0)
		}),
		b(Ur, M(h), {
			rows: h,
			detail: null == h ? $s : `${String(h)} Actiware Sleep/Wake epochs`,
			columns: Vr.length,
			encode: (e) => e.actiwareSleepWakeCsv.bytes
		}),
		b("physical_activity_export.csv", M(c), {
			rows: c,
			detail: null == c || null == m ? $s : `${String(c)} rows · ${String(m)} distinct dates`,
			chunkField: "physicalActivityRows",
			csv: (e) => function(e, t, n, i = !1) {
				const r = /* @__PURE__ */ new Set();
				t.includes("sedentary") || (r.add("Sedentary Minutes"), r.add("Sedentary Bouts"), r.add("Sedentary Breaks"), r.add("Mean Sedentary Bout Minutes")), t.includes("light") || r.add("Light Minutes"), t.includes("moderate") || r.add("Moderate Minutes"), t.includes("vigorous") || r.add("Vigorous Minutes"), t.includes("moderate") && t.includes("vigorous") || (r.add("MVPA Minutes"), r.add("MVPA Bouts"), r.add("MVPA Bout Minutes")), n && t.includes("nonwear") || r.add("Excluded Nonwear Minutes");
				const a = /* @__PURE__ */ new Set([
					"Excluded Main Sleep Minutes",
					"Excluded Nap Minutes",
					"MVPA Bouts",
					"MVPA Bout Minutes",
					"Sedentary Bouts",
					"Sedentary Breaks",
					"Mean Sedentary Bout Minutes"
				]), s = e.some((e) => "ggir_enmo" === e.method) ? Ta.filter((e) => !r.has(e) && (si.has(e) || a.has(e))) : [], o = [
					"Participant ID",
					"Threshold Preset Name",
					"Inclusion Rule Preset Name",
					"Scored Username",
					"Source Content Hash",
					"Validation Notes",
					"Notes"
				], l = [[
					...Ta.filter((e) => !r.has(e)),
					...s.map((e) => `${e}_missing_reason`),
					...i ? [
						"Epoch Length Seconds",
						"Native Epoch Seconds",
						"Mask Overlap Epochs"
					].map((e) => e + "_missing_reason") : [],
					...o.map((e) => e + "_missing_reason")
				].join(",")];
				for (const u of e) {
					const e = $a(u), t = null == u.sedentaryMinutes || !n && null == u.excludedNonwearMinutes ? null : u.sedentaryMinutes + (n ? 0 : u.excludedNonwearMinutes), c = [
						Ea(u.filename),
						Ea(u.participantId),
						Ea(u.analysisDate),
						Ea(u.method),
						Ea(u.methodLabel),
						Ea(u.methodFamily),
						Ea(u.requiredSignalContract),
						Ea(u.computationOwner),
						String(u.frontendComputesMetric),
						Ea(u.sourceSignal),
						Ea(u.status),
						Ea(u.methodRule),
						Ea(u.thresholdSource),
						Ea(u.thresholdPresetName),
						Ca(u.sedentaryMax),
						Ca(u.lightMin),
						Ca(u.moderateMin),
						Ca(u.vigorousMin),
						Ca(t),
						Ca(u.lightMinutes),
						Ca(u.moderateMinutes),
						Ca(u.vigorousMinutes),
						Ca(u.mvpaMinutes),
						Ca(u.mimsUnitTotal),
						null == u.epochLengthSeconds ? "" : String(u.epochLengthSeconds),
						String(u.epochsReviewed),
						Ca(u.wakeWearMinutes),
						Ca(u.excludedNonwearMinutes),
						Ca(u.excludedMainSleepMinutes),
						Ca(u.excludedNapMinutes),
						null == u.maskOverlapEpochs ? "" : String(u.maskOverlapEpochs),
						null == u.mvpaBouts ? "" : String(u.mvpaBouts),
						Ca(u.mvpaBoutMinutes),
						null == u.sedentaryBouts ? "" : String(u.sedentaryBouts),
						null == u.sedentaryBreaks ? "" : String(u.sedentaryBreaks),
						Ca(u.meanSedentaryBoutMinutes),
						null == u.nativeEpochSeconds ? "" : String(u.nativeEpochSeconds),
						String(u.epochMismatch),
						Ea(u.inclusionRulePresetName),
						String(u.maskExcludeNonwear),
						String(u.maskExcludeMainSleep),
						String(u.maskExcludeNaps),
						String(u.maskUseManualNonwear),
						String(u.maskUseAlgorithmNonwear),
						Ea(u.maskNonwearDetector),
						Ca(u.maskMinimumWakeWearMinutes),
						Ea(u.scoredUsername),
						Ea(u.sourceContentHash),
						Ea(u.exportedAt),
						Ea(e.status),
						Ea(e.notes),
						Ea(u.notes)
					], d = {
						"Sedentary Minutes": null == t ? null : u.sedentaryMinutes,
						"Light Minutes": u.lightMinutes,
						"Moderate Minutes": u.moderateMinutes,
						"Vigorous Minutes": u.vigorousMinutes,
						"MVPA Minutes": u.mvpaMinutes,
						"Wake Wear Minutes": u.wakeWearMinutes,
						"Excluded Nonwear Minutes": u.excludedNonwearMinutes
					}, p = {
						"Excluded Main Sleep Minutes": u.excludedMainSleepMinutes,
						"Excluded Nap Minutes": u.excludedNapMinutes,
						"MVPA Bouts": u.mvpaBouts,
						"MVPA Bout Minutes": u.mvpaBoutMinutes,
						"Sedentary Bouts": u.sedentaryBouts,
						"Sedentary Breaks": u.sedentaryBreaks,
						"Mean Sedentary Bout Minutes": u.meanSedentaryBoutMinutes
					}, m = s.map((e) => {
						const t = c[Ta.indexOf(e)];
						if ("ggir_enmo" !== u.method || "" !== t) return "";
						if (si.has(e)) {
							const t = d[e];
							return null != t && Number.isFinite(t) ? "" : "source_reported_missing";
						}
						return a.has(e) && null == p[e] ? "not_computed_for_export" : "";
					}), g = i ? [
						["Epoch Length Seconds", null == u.epochLengthSeconds && "ggir_enmo" === u.method ? "not_applicable_to_row" : ""],
						["Native Epoch Seconds", null == u.nativeEpochSeconds ? "not_applicable" === u.thresholdSource ? "not_applicable_to_row" : "source_reported_missing" : ""],
						["Mask Overlap Epochs", null == u.maskOverlapEpochs ? "ggir_enmo" === u.method ? "not_applicable_to_row" : "needs_signal" === u.status ? "channel_unavailable" : "backend_required" === u.status ? "not_computed_for_export" : "" : ""]
					].map(([e, t]) => "" === c[Ta.indexOf(e)] ? t : "") : [];
					l.push([
						...c.filter((e, t) => !r.has(Ta[t])),
						...m,
						...g,
						...o.map((e) => "" !== c[Ta.indexOf(e)] ? "" : [
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
			detail: null == n ? $s : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
			columns: 40,
			encode: (t) => t.ggirEntries[e]
		})),
		...v.map((e) => b(e, !(!w && !n?.ggirReviewEntries.includes(e)) || (null == _ ? null : _ > 0), {
			rows: null,
			detail: e.endsWith(".html") ? null == _ ? w ? "1 report" : $s : `1 report · ${String(_)} ${1 === _ ? "file" : "files"}` : "1 GGIR report artifact",
			encode: (t) => t.ggirEntries[e]
		})),
		{
			name: fi,
			state: "included",
			rows: null,
			detail: "1 reason per missing cell",
			estimatedBytes: 2048 + (t?.actiwareSleepWakeCsv?.reasonChunks.reduce((e, t) => e + t.byteLength, 0) ?? n?.actiwareMissingReasonBytes ?? 0),
			write: null
		},
		b("codebook.csv", !0, {
			rows: yr.length,
			detail: `${String(yr.length)} definitions`,
			estimatedBytes: new TextEncoder().encode(xr()).length,
			encode: () => Qi(xr(void 0, !0))
		}),
		{
			name: Gn,
			state: "included",
			rows: null,
			detail: "1 manifest · run, settings, entry hashes",
			estimatedBytes: 2048,
			write: null
		}
	];
}
async function Bs(e, t) {
	return e.transaction("r", [
		e.files,
		e.markers,
		e.sensorNonwear,
		e.dailyGgirSummaries
	], async () => {
		const n = await ae(e, t.length ? { onlyFileIds: t } : void 0), i = n.map((e) => e.id), [r, a, s] = await Promise.all([
			e.markers.where("fileId").anyOf(i).toArray(),
			e.sensorNonwear.where("fileId").anyOf(i).toArray(),
			e.dailyGgirSummaries.where("fileId").anyOf(i).toArray()
		]);
		return xe({
			markers: r,
			sensorNonwear: a,
			dailyGgirSummaries: s,
			files: n.map(({ id: e, filename: t, participantId: n, epochLengthSeconds: i, sourceContentHash: r, fileHash: a, seriesRevision: s, exportInputRevision: o }) => ({
				id: e,
				filename: t,
				participantId: n,
				epochLengthSeconds: i,
				sourceContentHash: r,
				fileHash: a,
				seriesRevision: s,
				exportInputRevision: o
			}))
		});
	});
}
async function Ls(n, i, r, a = {}) {
	const { signal: s, producers: o = {} } = a;
	s?.throwIfAborted(), a.progress?.(0, 0, Un);
	const m = await Bs(n, i.fileIds), g = await vs(i.fileIds, n, {
		...a,
		signal: s
	}), f = function(e, t, n, i) {
		const r = [], a = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = [], d = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), m = (e) => {
			for (const t of e.charts) l.push({
				key: t.key,
				pid: t.pid,
				charts: t.charts.length
			}), a.push(Ji(a.length, t));
			for (const [t, n] of e.csvLinesByAlgo) o.set(t, c(n[0]));
			for (const [t, n] of e.headers) s.set(t, Ni(s.get(t) ?? [], n));
			r.push({
				csvLinesByAlgo: e.csvLinesByAlgo,
				ggirReviews: e.ggirReviews
			});
		};
		async function* g(e, t) {
			for (const n of r) i?.throwIfAborted(), yield er(n, {
				signal: i,
				names: t,
				layouts: s,
				only: e
			}).then((t) => t[e]);
		}
		function* f() {
			const e = Vi([...o.keys()]);
			for (const [t, n] of o) s.set(e.get(t), n);
			for (const t of [...s.keys()].filter(Si)) {
				const e = s.get(t);
				e && s.set(t, [
					...e.filter((e) => !e.endsWith("_missing_reason") && !vi.includes(e)),
					...vi,
					...e.filter((e) => e.endsWith("_missing_reason") && !vi.some((t) => e === t + "_missing_reason")),
					...vi.map((e) => e + "_missing_reason")
				]);
			}
			for (const [t, n] of s) yield {
				name: t,
				chunks: async function* () {
					yield Qi(n.map(u).join(",") + "\n");
					for await (const n of g(t, e)) {
						if (!n) continue;
						const e = new TextDecoder().decode(n), t = p(e).records[0], i = Qi(e.slice(t.text.length + 1));
						for (let n = 0; n < i.byteLength; n += Wn) yield i.subarray(n, n + Wn);
					}
				}()
			};
			l.length && (yield {
				name: Gi,
				chunks: async function* () {
					yield* Zi(function(e, t) {
						const n = e.map((e) => e.key), i = e.reduce((e, t) => e + t.charts, 0);
						return `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${Wi(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${Wi(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${i} chart${1 !== i ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${Wi(e[n].pid)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`;
					}(l, d));
					for await (const { bytes: e, lengths: t } of async function* () {
						for (const { blob: e, lengths: t } of a) i?.throwIfAborted(), yield e.arrayBuffer().then((e) => ({
							bytes: new Uint8Array(e),
							lengths: t
						}));
					}()) {
						let n = 0;
						for (const i of t) yield e.subarray(n, n += i);
					}
					for (const e of Yi) yield* Zi(e);
				}()
			});
		}
		return {
			add: m,
			addFiles: async (r) => {
				for (const a of r) m(await tr({
					username: e,
					dateRange: t,
					snapshot: n,
					generatedAt: d
				}, a, i));
			},
			entries: async () => [...f()].reduce(async (e, t) => {
				const n = await e, i = [];
				for await (const r of t.chunks) i.push(r);
				return n[t.name] = ge(i), n;
			}, Promise.resolve({})),
			streamEntries: f,
			generatedAt: d
		};
	}(i.username, i.dateRange, g, s), h = [];
	for (const e of g.files) {
		const t = h.at(-1);
		t?.[0]?.filename === e.filename ? t.push(e) : h.push([e]);
	}
	const _ = [], w = [], y = [];
	let v = !1;
	const M = i.manifest.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), b = a.groups ?? {
		size: 1,
		run: (i, r, a) => async function(n, i, r, { db: a, signal: s }) {
			s?.throwIfAborted();
			const o = n.files.filter((e) => i.includes(e.id)), u = o.map((e) => e.id), c = /* @__PURE__ */ new Map();
			let p = !1;
			try {
				const e = await function(e, { fileIds: t, dateRange: n, signal: i }) {
					const r = ks(e, gs.circadian, t);
					return async function(e, t, { dateRange: n, signal: i }) {
						const r = Z(i), a = [];
						let s = 0;
						for (const o of e) {
							if (!o.id) continue;
							i?.throwIfAborted();
							const e = await t(o.id), u = [];
							for (const t of e.values()) {
								if (i?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
								s += 1;
								const e = Ht(o.id, t);
								e && u.push(e);
							}
							if (0 === u.length) continue;
							const { request: c, transfer: d } = Vt(u.map((e) => e.wire)), p = await r.computeCircadian(l(c, d));
							i?.throwIfAborted();
							const m = new Map(u.map((e) => [e.wire.id, e.source]));
							for (const t of p.day_summaries) {
								const e = m.get(t.id);
								t.has_signal && e && a.push({
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
							daysWithSignal: a.length,
							meanRelativeAmplitude: null,
							meanL5Hour: null,
							meanM10Hour: null,
							interdailyStability: null,
							intradailyVariability: null,
							daySummaries: a,
							perParticipant: []
						};
					}(t.length > 0 ? r.files.filter((e) => null != e.id && t.includes(e.id)) : r.files, (e) => Ns(r, e), {
						dateRange: n,
						signal: i
					});
				}(n, {
					fileIds: u,
					dateRange: r.dateRange,
					signal: s
				});
				for (const t of e.daySummaries) c.set(`${t.fileId}|${t.date}`, {
					l5Hour: t.l5Hour,
					m10Hour: t.m10Hour
				});
			} catch (f) {
				if (f instanceof bs) throw f;
				if (s?.throwIfAborted(), p = !0, f instanceof DOMException && "AbortError" === f.name) throw f;
			}
			const m = await Ds(o[0].filename, "computing its sleep rows", () => async function(n, i, r, a, s, o, l) {
				const u = s && s.trim().length > 0 ? s.trim() : null, c = ks(o, gs.sleep, n), p = c.files, m = Qt(c.studySettings[0]?.extraSettings), g = (n.length > 0 ? p.filter((e) => null != e.id && n.includes(e.id)) : [...p]).sort((e, t) => e.filename.localeCompare(t.filename)), [f, h] = r ?? ["", ""], _ = [], w = [], y = [], v = [], M = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), x = async () => {
					for (const [e, t] of M) b.set(e, await gr(e, t, _, l));
					M.clear();
				}, k = /* @__PURE__ */ new Map(), S = (e) => {
					const t = JSON.stringify(e);
					let n = k.get(t);
					return n || (n = Z(l).exportNapAggregate(e), k.set(t, n)), n;
				}, I = await Promise.all(g.map((e) => Rs(o, e.id, i, l)));
				for (const [R, T] of g.entries()) {
					if (l?.throwIfAborted(), R > 0 && g[R - 1].filename !== T.filename && await x(), !T.id) continue;
					const n = Ns(c, T.id), { bundle: i, markersByAlgo: s } = I[R], o = i?.edits ?? [], p = i ? Se(i.imported) : [], { zone: b } = await nn(T, m, l), k = [.../* @__PURE__ */ new Set([...T.availableDates, ...p.map((e) => e.nightDate)])].sort(), A = r ? k.filter((e) => e >= f && e <= h) : k;
					if (i) {
						const e = new Set(Ee(i.imported).map((e) => e.night));
						for (const t of p) {
							if (e.has(t.night) || !A.includes(t.nightDate)) continue;
							const n = ve(t, s.get(t.nightDate)?.[0]).kind;
							"scored" !== n && "invalid" !== n && y.push({
								file: "sleep_export.csv",
								row: 0,
								key: `${E.filename.header}=${T.filename}|${E.study_date.header}=${t.nightDate}`,
								column: `GGIR night ${String(t.night)}: ${Ne(i.imported, t.night)}`,
								reason: "ggir_night_excluded"
							});
						}
					}
					const N = ce(n.values());
					for (const r of A) {
						l?.throwIfAborted();
						const c = s.get(r);
						if (c && 0 !== c.length) for (const s of c) {
							if (!s.isInvalidNight && 0 === s.sleepMarkers.length && 0 === s.nonwearMarkers.length) continue;
							const c = T.participantId ?? null, m = T.id, g = s.algorithm ?? null, f = s.username ?? null, h = s.needsConsensus, y = s.notes, x = n.get(r), k = await $(r, void 0, Z(l)), I = n.get(k), A = {
								fileId: m,
								filename: T.filename,
								participantId: c,
								studyDate: r,
								algorithm: g,
								scoredBy: f,
								needsConsensus: h,
								notes: y,
								meanTemperature: null,
								meanWhiteLight: null,
								meanRedLight: null,
								meanGreenLight: null,
								meanBlueLight: null,
								detectionRule: s.detectionRule ?? null,
								periodGuider: s.periodGuider ?? null,
								...cr(s.sleepPeriodDetectionConfig),
								algorithmVersion: s.algorithmVersion ?? null,
								verificationStatus: null,
								studyId: u,
								dstTransition: await Ve(b, r, void 0, Z(l))
							}, R = await S(s.sleepMarkers.filter((e) => e.markerType === d.NAP).map((e) => ({
								start: e.onsetTimestamp,
								end: e.offsetTimestamp
							}))), C = a?.get(`${String(m)}|${r}`), O = {
								l5Hour: C?.l5Hour ?? null,
								m10Hour: C?.m10Hour ?? null,
								napCount: R.napCount,
								totalNapMinutes: R.napCount > 0 ? R.totalNapMinutes : null
							}, B = s.nonwearMarkers.map((e) => ({
								start: e.startTimestamp,
								end: e.endTimestamp
							})), L = N(g), D = Jt(x, L), P = `${T.filename}\0${c ?? ""}\0${A.algorithm ?? ""}\0${A.detectionRule ?? ""}`, j = M.get(P) ?? [];
							j.push({
								date: r,
								epochLengthSeconds: T.epochLengthSeconds || 60,
								timestamps: D.timestamps,
								states: D.algorithmResults,
								stale: "stale" === L.status
							}), M.set(P, j);
							const F = x?.temperature ? new Float64Array(x.temperature) : null, W = fe(x).timestamps, G = I?.temperature ? new Float64Array(I.temperature) : null, z = fe(I).timestamps, U = await mn(n, r, L, { signal: l }), V = async (e, t, n) => {
								if (!t || !n) return null;
								const i = (e) => e ? new Float64Array(e) : null;
								return nr([[i(x?.[e]), W], [i(I?.[e]), z]], t, n, l);
							}, H = (e, t) => nr([[F, W], [G, z]], e, t, l), q = async (n, a) => {
								let u = null;
								const c = p.find((e) => e.nightDate === r), m = i && c && n.markerType === d.MAIN_SLEEP && "invalid" !== ve(c, s).kind, g = c && o.some((e) => e.night === c.night), f = dr(null), h = {};
								let _ = "not_applicable_to_row";
								if (!m && n.onsetTimestamp && n.offsetTimestamp) {
									const { timestamps: e, algorithmResults: t, activity: i, scoresStale: r } = U;
									if (null !== r && 0 === v.length && v.push({
										component: "metric_computation",
										code: "unavailable",
										message: r
									}), _ = null !== r ? "scores_from_another_config" : null == t ? "no_scored_epochs" : null == i ? "channel_unavailable" : 0 === e.length ? "no_valid_epochs" : void 0, null != t && e.length > 0 && (null != i || fe(x).ggir)) {
										const r = fe(x).ggir ? fe(x).epochSec : T.epochLengthSeconds || 60, a = await mr(t, i, e, n.onsetTimestamp, n.offsetTimestamp, r, l);
										u = a.metrics, u || a.error || (_ = "no_valid_epochs"), a.error && (_ = "not_computed_for_export"), a.error && 0 === v.length && v.push({
											component: "metric_computation",
											code: "unavailable",
											message: "Metric computation failed for at least one selected period; those rows carry no numerics."
										});
									}
								}
								if (m) {
									_ = "channel_unavailable";
									const n = g ? i.current?.nights : i.imported.nights, r = n ? t(n, E.ggir_night.header, c.night) : -1;
									for (const [t, i, a, s] of pr) {
										const o = n ? e(n, E[i].header, r) : null;
										f[t] = null == o ? null : o * s, h[a] = null == o ? g ? "not_computed_for_export" : "source_reported_missing" : void 0;
									}
								}
								(m || u && !("averageAwakeningLengthMinutes" in u)) && (h.average_awakening_length_minutes = "not_computed_for_export");
								const w = await Z(l).exportPeriodFigures(n.onsetTimestamp, n.offsetTimestamp, B), y = Boolean(n.onsetTimestamp && n.offsetTimestamp), M = {
									...A,
									...O,
									periodIndex: n.markerIndex,
									markerType: n.markerType,
									onsetTimestamp: n.onsetTimestamp,
									offsetTimestamp: n.offsetTimestamp,
									...m ? f : dr(u),
									metricMissingReason: _,
									isInvalidNight: a,
									meanTemperature: n.onsetTimestamp && n.offsetTimestamp ? await H(n.onsetTimestamp, n.offsetTimestamp) : null,
									meanWhiteLight: await V("lux", n.onsetTimestamp, n.offsetTimestamp),
									meanRedLight: await V("redLight", n.onsetTimestamp, n.offsetTimestamp),
									meanGreenLight: await V("greenLight", n.onsetTimestamp, n.offsetTimestamp),
									meanBlueLight: await V("blueLight", n.onsetTimestamp, n.offsetTimestamp),
									sleepMidpointTimestamp: y ? w.midpointTimestamp : null,
									sleepMidpointHour: y ? w.midpointClockHour : null,
									validWearMinutes: w.validWearMinutes
								}, b = (e, t) => null != e ? void 0 : y ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
								return M.sensorMissingReasons = {
									mean_temperature_c: b(M.meanTemperature, Boolean(x?.temperature || I?.temperature)),
									mean_white_light_lux: b(M.meanWhiteLight, Boolean(x?.lux || I?.lux)),
									mean_red_light: b(M.meanRedLight, Boolean(x?.redLight || I?.redLight)),
									mean_green_light: b(M.meanGreenLight, Boolean(x?.greenLight || I?.greenLight)),
									mean_blue_light: b(M.meanBlueLight, Boolean(x?.blueLight || I?.blueLight))
								}, M.derivedMissingReasons = {
									...h,
									l5_hour: null == M.l5Hour ? C ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									m10_hour: null == M.m10Hour ? C ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									sleep_midpoint_time: null == M.sleepMidpointTimestamp ? y ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									sleep_midpoint_hour: null == M.sleepMidpointHour ? y ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									valid_wear_minutes: null == M.validWearMinutes ? y ? "no_valid_epochs" : "not_applicable_to_row" : void 0
								}, M;
							};
							if (s.isInvalidNight) {
								_.push({
									...A,
									...O,
									periodIndex: null,
									markerType: or,
									onsetTimestamp: null,
									offsetTimestamp: null,
									...dr(null),
									isInvalidNight: !0,
									sleepMidpointTimestamp: null,
									sleepMidpointHour: null,
									validWearMinutes: null
								});
								for (const e of s.sleepMarkers) _.push(await q(e, !0));
							} else for (const e of s.sleepMarkers) _.push(await q(e, !1));
							for (const e of s.nonwearMarkers) w.push({
								...A,
								...O,
								periodIndex: e.markerIndex ?? 0,
								markerType: lr,
								onsetTimestamp: e.startTimestamp,
								offsetTimestamp: e.endTimestamp,
								...dr(null),
								isInvalidNight: !1,
								sleepMidpointTimestamp: null,
								sleepMidpointHour: null,
								validWearMinutes: null
							});
						}
					}
				}
				await x(), _.sort(fr), w.sort(fr);
				const A = await async function(e, t) {
					const n = e.filter((e) => e.markerType === d.MAIN_SLEEP), i = /* @__PURE__ */ new Map();
					for (const o of n) {
						const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = i.get(e);
						t ? t.push(o) : i.set(e, [o]);
					}
					const r = [...i], a = await Z(t).summarizeExportGroups(r.map(([, e]) => e.map((e) => ({
						study_date: e.studyDate,
						total_nap_minutes: e.totalNapMinutes,
						values: hr.map(([, t]) => e[t])
					})))), s = r.map(([e, t], n) => {
						const [i, r, s, o] = e.split("\0"), l = a[n], u = Object.fromEntries(hr.map(([e], t) => [e, l.means[t] ?? null]));
						return {
							filename: i,
							participantId: r,
							algorithm: s,
							detectionRule: o,
							nNights: l.nNights,
							...u,
							meanTemperatureMissingReason: null == u.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
							metricMissingReasons: Object.fromEntries(hr.map(([e, n]) => {
								const i = _r[e], r = pr.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : i), a = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[r] ?? e.metricMissingReason).find(Boolean);
								return [i, null == u[e] ? a : void 0];
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
			}(u, r.username, r.dateRange, c, r.studyId, n, s)), g = await Ds(o[0].filename, "drawing its visual report", async () => {
				const e = [];
				for (const t of o) e.push(await tr({
					...r,
					snapshot: n
				}, t, s));
				return e;
			});
			return {
				part: m,
				physicalActivityRows: await Pa(u, r.dateRange, {
					username: r.username,
					cutpointOverrides: r.physicalActivity.cutpointOverrides,
					maskPolicy: r.physicalActivity.maskPolicy,
					choiAxis: r.physicalActivity.choiAxis,
					exportedAt: r.exportedAt,
					...s ? { signal: s } : {}
				}, a),
				eventMarkerRows: await jr(u, r.dateRange, n, r.username, s),
				circadianDegraded: p,
				reports: g
			};
		}(i, r, a, {
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
	}, k = h.map(() => {
		const e = {};
		return e.promise = new Promise((t, n) => {
			e.resolve = t, e.reject = n;
		}), e.promise.catch(() => {}), e;
	});
	let S = 0, I = h.length, A = 0;
	a.progress?.(0, h.length, Vn), Promise.all(Array.from({ length: Math.min(b.size, h.length) }, async () => {
		for (; S < I;) {
			const t = S++;
			try {
				k[t].resolve(await b.run(g, h[t].map((e) => e.id), x)), a.progress?.(++A, h.length, Vn);
			} catch (e) {
				I = Math.min(I, t), k[t].reject(e);
			}
		}
	}));
	try {
		for (const e of k) {
			s?.throwIfAborted();
			const t = await e.promise;
			_.push(t.part);
			for (const e of t.reports) f.add(e);
			w.push(...t.physicalActivityRows), y.push(...t.eventMarkerRows), v ||= t.circadianDegraded;
		}
	} finally {
		I = 0;
	}
	if (a.progress?.(0, 0, Hn), await Bs(n, i.fileIds) !== m) throw new Fn(null, "computing physical activity, because its inputs changed during the export");
	s?.throwIfAborted();
	const R = function(e) {
		return {
			sleepRows: e.flatMap((e) => e.sleepRows),
			nonwearRows: e.flatMap((e) => e.nonwearRows),
			summaryRows: e.flatMap((e) => e.summaryRows),
			degradations: e.flatMap((e) => e.degradations).slice(0, 1),
			nightReasons: e.flatMap((e) => e.nightReasons ?? [])
		};
	}(_), T = await async function(e, t, n, i, r) {
		r?.throwIfAborted();
		const a = ks(n, gs.actiwareInterval, e), s = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => a.actiwareFileData.find((t) => t.fileId === e.id));
		return (await Promise.all(s.map(async (e, n) => {
			r?.throwIfAborted();
			const s = Is(a, e.id, i), l = a.actiwareStatisticsInputs.find((t) => t.fileId === e.id), u = new Set(s.keys()), { actiwareStatisticsForScoredMarker: c } = await import("./local-data-source-S_aE_BN8.js").then((e) => e.t);
			r?.throwIfAborted();
			const d = await c(o[n] ?? {}, l?.input, s, (e) => Z(r).actiwareIntervalStatistics(e), r);
			r?.throwIfAborted();
			const p = await async function(e, t, n) {
				const i = (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), r = e.actiwareStatistics ?? [], a = await dn([...i.map((e) => e.startTimestamp), ...r.map((e) => e.startTimestamp)], Z(n)), s = /* @__PURE__ */ new Set(), o = i.map((t) => {
					const n = r.findIndex((e, n) => !s.has(n) && e.kind === t.kind && Gr(e.startTimestamp, t.startTimestamp) && Gr(e.endTimestamp, t.endTimestamp)), i = a(t.startTimestamp), o = n >= 0 ? r[n] ?? null : null;
					return n >= 0 && s.add(n), {
						filename: e.filename,
						participantId: e.participantId ?? null,
						studyDate: i,
						interval: t,
						statistics: o
					};
				}).filter((e) => !t || e.studyDate >= t[0] && e.studyDate <= t[1]);
				for (let l = 0; l < r.length; l += 1) {
					if (s.has(l)) continue;
					const n = r[l];
					if (!n) continue;
					const i = a(n.startTimestamp);
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
			}, t, r), m = new Set([...s].filter(([, e]) => e.isInvalidNight).map(([e]) => e).filter((e) => !t || e >= t[0] && e <= t[1]));
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
			}(p.filter((e) => u.has(e.studyDate)), m, e);
		}))).flat();
	}(i.fileIds, i.dateRange, g, i.username, s), N = {}, C = function(e) {
		const t = ks(e, gs.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(g);
	if (C && (N["audit_log.jsonl"] = C), o.ggirResults) {
		const e = await o.ggirResults(ks(g, gs.ggirResults), s);
		for (const [t, n] of Object.entries(e)) {
			if (t in N) throw new Error(`${zn}${t}`);
			N[t] = n;
		}
	}
	const O = ks(g, gs.actiwareSleepWake);
	let B = 0;
	for (const e of O.files) {
		const t = O.actiwareFileData.find((t) => t.fileId === e.id)?.actiwareSleepWake;
		t && (B += await qr(t, i.dateRange, new Set(Is(O, e.id, i.username).keys()), Z(s)));
	}
	const L = ks(g, gs.manifest), D = Object.fromEntries(R.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	v ||= R.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const P = [...v ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...R.degradations], j = function(e, t) {
		const n = {}, i = {}, r = {}, a = new Map(t.map((e) => [e.fileId, e]));
		for (const s of e) {
			const e = a.get(s.fileId), t = void 0 === e?.notApplied ? s.ggirCorrections ?? e?.ggirCorrections : void 0;
			if (!t) {
				void 0 !== e?.notApplied && (r[String(s.fileId)] = e.notApplied);
				continue;
			}
			const { notApplied: o, ...l } = t;
			n[String(s.fileId)] = l;
			const u = i[t.profile] ??= { notApplied: [] };
			for (const n of o ?? []) u.notApplied.some((e) => e.correction === n.correction) || u.notApplied.push({ ...n });
		}
		return {
			ggirCorrections: n,
			ggirCorrectionProfiles: i,
			ggirCorrectionsNotApplied: r
		};
	}(L.ggirResultsBundles, L.ggirCorrectedValues), F = await Ds(null, "reading saved GGIR source provenance", () => async function(e, t = Z()) {
		return Object.fromEntries(await Promise.all(e.map(async (e) => {
			const [n, i] = await Promise.all([t.ggirAppConfigSummary(e.configCsv, !1), t.ggirNonwearApproach(e.configCsv)]);
			return [String(e.fileId), {
				configGgirVersion: n.configGgirVersion,
				nonwearApproach: i ?? null
			}];
		})));
	}(L.ggirResultsBundles, Z(s))), W = [...f.streamEntries()], G = await async function(e) {
		const t = e.deflate ?? {
			lanes: 1,
			block: (e, t) => Promise.resolve(function(e, t) {
				if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
				const n = [], i = new Nt(t?.byteLength ? {
					level: 1,
					dictionary: t
				} : { level: 1 }, (e) => {
					n.push(e);
				});
				i.push(e, !1), i.flush(!1);
				const r = i.s.r ?? 0;
				if (!Number.isInteger(r) || r < 0 || r > 2047) throw new Error("ZIP compression state is unreadable.");
				const a = (7 & r) > 5 ? 2 : 1, s = new Uint8Array(a + 4);
				return s[0] = r >> 3, s[a + 2] = 255, s[a + 3] = 255, n.push(s), ge(n);
			}(e, t))
		};
		if (!navigator.storage?.getDirectory) throw new Error("Streaming export requires temporary workspace storage (OPFS).");
		const n = await (await (await navigator.storage.getDirectory()).getDirectoryHandle(jn, { create: !0 })).getDirectoryHandle(e.scratchId, { create: !0 }), i = await n.getFileHandle(fi, { create: !0 }), r = await n.getFileHandle("bundle.zip", { create: !0 }), a = new CompressionStream("gzip"), s = a.readable.pipeTo(await i.createWritable());
		s.catch(() => {});
		const o = a.writable.getWriter(), l = await r.createWritable();
		let u = [], d = 0, m = e.artifacts.importRefusalReasons?.length ?? 0;
		const g = [], f = new Dt((e, t) => {
			if (e) throw e;
			u.push(t);
		}), h = async (e = 0) => {
			d = Math.max(d, e + u.reduce((e, t) => e + t.byteLength, 0));
			for (const t of u) await l.write(t);
			u = [];
		}, _ = /* @__PURE__ */ new Set();
		let w = 0;
		const y = async (n, i) => {
			if (_.has(n)) throw new Error(`${zn}${n}`);
			_.add(n);
			const r = new Qr(n), a = new V();
			let s = 0;
			f.add(r);
			const { blockBytes: o, inFlight: l } = function(e) {
				const t = Math.min(2 * e + 1, Math.floor(24)), n = Math.floor(1572864 / t) - 32768;
				return {
					blockBytes: n - n % 4096,
					inFlight: t - 1
				};
			}(t.lanes), u = [];
			let c = new Uint8Array(o), p = 0, m = /* @__PURE__ */ new Uint8Array(0), y = 0;
			const v = () => y + p + m.byteLength + u.length * (o + 32768), M = async () => {
				r.emit(await u.shift(), !1), await h(v());
			}, b = async () => {
				const e = c.subarray(0, p), n = e.slice(-32768);
				for (u.push(t.block(e, m)), m = n, c = new Uint8Array(o), p = 0; u.length > l;) await M();
			};
			try {
				for await (const t of i) {
					y = t.byteLength;
					for (let n = 0; n < t.byteLength; n += Yr) {
						e.signal?.throwIfAborted();
						const i = t.subarray(n, n + Yr);
						a.update(i), r.push(i, !1), s += i.byteLength;
						for (let e = 0; e < i.byteLength;) {
							const t = Math.min(i.byteLength - e, o - p);
							c.set(i.subarray(e, e + t), p), p += t, e += t, p === o && await b();
						}
						d = Math.max(d, v());
					}
				}
				for (y = 0, p && await b(); u.length;) await M();
			} finally {
				for (const e of u) e.catch(() => {});
			}
			r.push(/* @__PURE__ */ new Uint8Array(), !0), r.emit(Zr, !0), await h(), g.push({
				name: n,
				contentHash: U(a.finalize()),
				byteLength: s
			}), e.progress?.(g.length, w, Hn);
		};
		try {
			await o.write(new TextEncoder().encode(hi(e.artifacts.importRefusalReasons ?? [])));
			const t = [...Os({
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
			w = t.filter((e) => e.write).length + 2, e.progress?.(0, w, Hn);
			for (const i of t) if (i.write) try {
				"actiware_sleep_wake_export.csv" === i.name ? await y(i.name, async function* () {
					for await (const t of e.sleepWake) e.signal?.throwIfAborted(), m += t.reasonRows, d = Math.max(d, t.bytes.byteLength + t.reasons.byteLength), await o.write(t.reasons), yield t.bytes;
				}()) : i.name.endsWith(".csv") ? await y(i.name, async function* () {
					let t = 0, n = !1, r = !1;
					const a = "actiware_intervals_export.csv" === i.name ? function* () {
						for (const t of e.artifacts.actiwareIntervalRows ?? []) {
							const [e, n] = p(zr([t], !0)).records, i = c(n.text);
							yield new Map(c(e.text).map((e, t) => [e, i[t] ?? ""]));
						}
					} : void 0;
					for await (const e of i.batches?.() ?? Xr(i.chunks ?? [i.write()])) {
						if (e.bytes.byteLength > 4 * Yr) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
						const s = yi(e.text ?? new TextDecoder().decode(e.bytes), i.name, !0, {
							fullRowCsv: e.fullRowCsv,
							rowOffset: t,
							...a ? { contextRows: a } : {}
						});
						let l, u = "";
						for (;;) {
							const t = s.next();
							if (t.done) {
								l = t.value;
								break;
							}
							if (u += hi([t.value], !1), m += 1, u.length >= Yr / 2) {
								const t = new TextEncoder().encode(u);
								d = Math.max(d, e.bytes.byteLength + t.byteLength), await o.write(t), u = "";
							}
						}
						await o.write(new TextEncoder().encode(u));
						const c = n ? (r ? "" : "\n") + l.csv.slice(l.csv.indexOf("\n") + 1) : l.csv;
						n = !0, t += e.rows ?? 0, r = c.endsWith("\n");
						const p = new TextEncoder().encode(c);
						d = Math.max(d, e.bytes.byteLength + p.byteLength + 2 * u.length), yield p;
					}
				}()) : await y(i.name, i.chunks ?? [i.write()]);
			} catch (v) {
				throw new Error(`Export failed while writing ${i.name}`, { cause: v });
			}
			await o.close(), await s, await y(fi, async function* () {
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
					contentHash: await vr(t),
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
			return await y(Gn, [new TextEncoder().encode(Mr(n))]), f.end(), await h(), e.signal?.throwIfAborted(), await l.close(), {
				blob: await new Response((await r.getFile()).stream()).blob(),
				entries: g,
				peakBufferedBytes: d,
				reasonRows: m
			};
		} catch (M) {
			throw f.terminate(), await Promise.allSettled([
				o.abort(),
				l.abort(),
				s
			]), M;
		}
	}({
		artifacts: {
			importRefusalReasons: [
				...Es(g),
				...ps(g),
				...R.nightReasons ?? []
			],
			...R,
			physicalActivityRows: w,
			physicalActivityEnabledClasses: i.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: i.physicalActivity.nonwearAsClass,
			ggirEntries: N,
			eventMarkerRows: y,
			actiwareIntervalRows: T,
			actiwareSleepWakeCsv: {
				rows: B,
				bytes: /* @__PURE__ */ new Uint8Array(),
				reasonChunks: []
			}
		},
		extraEntries: W,
		options: i,
		manifest: {
			...i.manifest,
			physicalActivity: i.physicalActivity,
			exportedAt: M,
			algorithmVersions: D,
			degradations: P,
			ggirSources: F,
			...j,
			executionAttestationIds: L.localExecutions.map((e) => e.attestationId),
			diaryTemporalPolicyByFile: Object.fromEntries(L.files.map((e) => [String(e.id), Object.fromEntries(L.diaryEntries.filter((t) => t.fileId === e.id).map((e) => [e.analysisDate, e.importMappingProvenance?.diaryTemporalPolicy ?? null]))]))
		},
		sleepWake: Kr(i.fileIds, i.dateRange, g, i.username, s),
		scratchId: r,
		...s ? { signal: s } : {},
		...b.deflate ? { deflate: b.deflate } : {},
		...a.progress ? { progress: a.progress } : {}
	});
	return {
		...G,
		actiwareSleepWakeRows: B,
		degradations: P,
		ggirCorrected: ds(j),
		hasData: R.sleepRows.length > 0 || R.nonwearRows.length > 0 || w.length > 0 || G.entries.some((e) => W.some((t) => t.name === e.name)) || Object.keys(N).length > 0,
		rowCount: R.sleepRows.length + R.nonwearRows.length + R.summaryRows.length + w.length,
		dayCount: (/* @__PURE__ */ new Set([
			...R.sleepRows.map((e) => e.studyDate),
			...R.nonwearRows.map((e) => e.studyDate),
			...w.map((e) => e.analysisDate)
		])).size,
		fileCount: g.files.length
	};
}
async function Ds(e, t, n) {
	try {
		return await n();
	} catch (i) {
		if (i instanceof DOMException && "AbortError" === i.name) throw i;
		throw new Fn(e, t, i);
	}
}
function Ps(e, t = /* @__PURE__ */ new Set()) {
	if (e instanceof ArrayBuffer) t.add(e);
	else if (ArrayBuffer.isView(e)) t.add(e.buffer);
	else if (e && "object" == typeof e) for (const n of Object.values(e)) Ps(n, t);
	return [...t];
}
function js(e, t) {
	const n = [], i = [], r = [];
	let s;
	const o = new Promise((e, t) => {
		s = t;
	});
	o.catch(() => {});
	const u = (e) => {
		const t = e.message;
		s(/* @__PURE__ */ new Error(`An export shard stopped before finishing its work: ${"messageerror" === e.type ? "a message from it could not be read" : t?.length ? t : "its script failed to load"}.`));
	}, c = async (e) => {
		const s = await (() => {
			const e = i.pop();
			if (e) return Promise.resolve(e);
			if (n.length < t) {
				const e = new Worker(new URL("/sleep-scoring-wasm/assets/local-export-shard-worker-C5SeeRtq.js", "" + import.meta.url), { type: "module" });
				return e.addEventListener("error", u), e.addEventListener("messageerror", u), n.push(e), Promise.resolve(a(e));
			}
			return new Promise((e) => {
				r.push(e);
			});
		})();
		try {
			return await Promise.race([e(s), o]);
		} finally {
			const e = r.shift();
			e ? e(s) : i.push(s);
		}
	};
	return {
		runner: {
			size: t,
			run: (t, n, i) => c(async (r) => {
				const a = function(e, t) {
					const n = fs.get(e);
					if (!n) throw new bs("Export requires a captured input snapshot");
					const i = new Set(Ms.flatMap((e) => Object.keys(gs[e])));
					return Object.fromEntries([...i].map((e) => [e, (n[e] ?? []).filter((n) => "studySettings" === e || t.includes("files" === e ? n.id : n.fileId)).map(ws)]));
				}(t, n), s = await r.group(e, n, l(a, Ps(a)), i);
				if ("failure" in s) throw new Fn(s.failure.file, s.failure.step);
				return s.result;
			}),
			deflate: {
				lanes: t,
				block: (e, t) => c((n) => n.deflate(l(e, [e.buffer]), l(t, [t.buffer])))
			}
		},
		terminate: () => {
			for (const e of n) e.terminate();
		}
	};
}
r({ async build(e, t, n, i) {
	const r = new _(e), a = js(e, Math.max(1, Math.min(8, (navigator.hardwareConcurrency || 2) - 2)));
	let s;
	try {
		return s = await (await (await (await (await navigator.storage.getDirectory()).getDirectoryHandle(jn, { create: !0 })).getDirectoryHandle(n, { create: !0 })).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await r.open(), await Ls(r, t, n, {
			...i ? { progress: i } : {},
			binaryStore: s,
			groups: a.runner
		});
	} catch (o) {
		if (o instanceof Fn) return { failure: {
			file: o.file,
			step: o.step
		} };
		throw o;
	} finally {
		a.terminate(), s?.close(), r.close();
	}
} });
export { Ht as C, zt as D, Ft as E, Vt as S, Wt as T, un as _, _a as a, nn as b, da as c, oa as d, ua as f, gn as g, aa as h, fa as i, la as l, ta as m, Za as n, pa as o, ia as p, Ra as r, ma as s, ja as t, sa as u, cn as v, jt as w, Xt as x, dn as y };
