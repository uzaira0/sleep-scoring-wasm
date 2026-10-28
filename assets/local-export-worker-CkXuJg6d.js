import { n as e, r as t, s as n, t as i } from "./ggir-results-types-WB8axvb-.js";
import { c as a, i as r, u as s } from "./workers-BHTWDuMW.js";
import { Ft as o, Gt as l, It as u, Nt as c, Pt as d, _n as m, a as p, f as g, ht as h, wt as f } from "./schema-CIHT_OGt.js";
import { A as _, F as w, M as y, N as v, P as M, b, j as k, k as x, m as S } from "./nonwear-display-slots-DjXw27wb.js";
import { A as I, G as A, H as T, K as R, W as N, g as E, rt as $, t as O } from "./workspace-db-G2NWfsPg.js";
import { l as C, n as B, o as D, s as L } from "./content-hash-BtD8CeUH.js";
import { a as P, n as F, t as W } from "./background-jobs-CJCGfvc5.js";
import { a as j } from "./project-revision-K1sT3sQz.js";
import { B as U, j as z, m as G, u as V } from "./night-session-registry-D17hYpra.js";
import { d as H, l as q, p as K } from "./sleep-period-detection-CJlqVROY.js";
import { t as Y } from "./audit-hash-rfcCP1yx.js";
import { d as J, n as Z, r as Q, s as X } from "./ggir-results-import-C_mA_Nl6.js";
import { A as ee, B as te, Bt as ne, C as ie, Gt as ae, I as re, K as se, M as oe, N as le, P as ue, S as ce, W as de, Wt as me, Xt as pe, Zt as ge, b as he, yt as fe } from "./store-BZGrg5Yx.js";
import { E as _e, N as we, T as ye, c as ve } from "./local-nonwear-unified-CwKFebl-.js";
import { S as Me, _ as be, b as ke, g as xe, n as Se, t as Ie, v as Ae, x as Te, y as Re } from "./valid-day-criteria-BGh25m81.js";
import { h as Ne, m as Ee, v as $e } from "./diary-local-import-contract-BT-9fqeP.js";
var Oe = Uint8Array, Ce = Uint16Array, Be = Int32Array, De = new Oe([
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
]), Le = new Oe([
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
]), Pe = new Oe([
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
]), Fe = function(e, t) {
	for (var n = new Ce(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
	var a = new Be(n[30]);
	for (i = 1; i < 30; ++i) for (var r = n[i]; r < n[i + 1]; ++r) a[r] = r - n[i] << 5 | i;
	return {
		b: n,
		r: a
	};
}, We = Fe(De, 2), je = We.b, Ue = We.r;
je[28] = 258, Ue[258] = 28;
for (var ze = Fe(Le, 0), Ge = (ze.b, ze.r), Ve = new Ce(32768), He = 0; He < 32768; ++He) {
	var qe = (43690 & He) >> 1 | (21845 & He) << 1;
	qe = (61680 & (qe = (52428 & qe) >> 2 | (13107 & qe) << 2)) >> 4 | (3855 & qe) << 4, Ve[He] = ((65280 & qe) >> 8 | (255 & qe) << 8) >> 1;
}
var Ke = function(e, t, n) {
	for (var i = e.length, a = 0, r = new Ce(t); a < i; ++a) e[a] && ++r[e[a] - 1];
	var s, o = new Ce(t);
	for (a = 1; a < t; ++a) o[a] = o[a - 1] + r[a - 1] << 1;
	if (n) {
		s = new Ce(1 << t);
		var l = 15 - t;
		for (a = 0; a < i; ++a) if (e[a]) for (var u = a << 4 | e[a], c = t - e[a], d = o[e[a] - 1]++ << c, m = d | (1 << c) - 1; d <= m; ++d) s[Ve[d] >> l] = u;
	} else for (s = new Ce(i), a = 0; a < i; ++a) e[a] && (s[a] = Ve[o[e[a] - 1]++] >> 15 - e[a]);
	return s;
}, Ye = new Oe(288);
for (He = 0; He < 144; ++He) Ye[He] = 8;
for (He = 144; He < 256; ++He) Ye[He] = 9;
for (He = 256; He < 280; ++He) Ye[He] = 7;
for (He = 280; He < 288; ++He) Ye[He] = 8;
var Je = new Oe(32);
for (He = 0; He < 32; ++He) Je[He] = 5;
var Ze = Ke(Ye, 9, 0), Qe = Ke(Je, 5, 0), Xe = function(e) {
	return (e + 7) / 8 | 0;
}, et = function(e, t, n) {
	return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new Oe(e.subarray(t, n));
}, tt = [
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
], nt = function(e, t, n) {
	var i = new Error(t || tt[e]);
	if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, nt), !n) throw i;
	return i;
}, it = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8;
}, at = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, rt = function(e, t) {
	for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
		s: i,
		f: e[i]
	});
	var a = n.length, r = n.slice();
	if (!a) return {
		t: mt,
		l: 0
	};
	if (1 == a) {
		var s = new Oe(n[0].s + 1);
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
	var p = new Ce(m + 1), g = st(n[c - 1], p, 0);
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
		t: new Oe(p),
		l: g
	};
}, st = function(e, t, n) {
	return -1 == e.s ? Math.max(st(e.l, t, n + 1), st(e.r, t, n + 1)) : t[e.s] = n;
}, ot = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new Ce(++t), i = 0, a = e[0], r = 1, s = function(e) {
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
}, lt = function(e, t) {
	for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
	return n;
}, ut = function(e, t, n) {
	var i = n.length, a = Xe(t + 2);
	e[a] = 255 & i, e[a + 1] = i >> 8, e[a + 2] = 255 ^ e[a], e[a + 3] = 255 ^ e[a + 1];
	for (var r = 0; r < i; ++r) e[a + r + 4] = n[r];
	return 8 * (a + 4 + i);
}, ct = function(e, t, n, i, a, r, s, o, l, u, c) {
	it(t, c++, n), ++a[256];
	for (var d = rt(a, 15), m = d.t, p = d.l, g = rt(r, 15), h = g.t, f = g.l, _ = ot(m), w = _.c, y = _.n, v = ot(h), M = v.c, b = v.n, k = new Ce(19), x = 0; x < w.length; ++x) ++k[31 & w[x]];
	for (x = 0; x < M.length; ++x) ++k[31 & M[x]];
	for (var S = rt(k, 7), I = S.t, A = S.l, T = 19; T > 4 && !I[Pe[T - 1]]; --T);
	var R, N, E, $, O = u + 5 << 3, C = lt(a, Ye) + lt(r, Je) + s, B = lt(a, m) + lt(r, h) + s + 14 + 3 * T + lt(k, I) + 2 * k[16] + 3 * k[17] + 7 * k[18];
	if (l >= 0 && O <= C && O <= B) return ut(t, c, e.subarray(l, l + u));
	if (it(t, c, 1 + (B < C)), c += 2, B < C) {
		R = Ke(m, p, 0), N = m, E = Ke(h, f, 0), $ = h;
		var D = Ke(I, A, 0);
		for (it(t, c, y - 257), it(t, c + 5, b - 1), it(t, c + 10, T - 4), c += 14, x = 0; x < T; ++x) it(t, c + 3 * x, I[Pe[x]]);
		c += 3 * T;
		for (var L = [w, M], P = 0; P < 2; ++P) {
			var F = L[P];
			for (x = 0; x < F.length; ++x) {
				var W = 31 & F[x];
				it(t, c, D[W]), c += I[W], W > 15 && (it(t, c, F[x] >> 5 & 127), c += F[x] >> 12);
			}
		}
	} else R = Ze, N = Ye, E = Qe, $ = Je;
	for (x = 0; x < o; ++x) {
		var j = i[x];
		if (j > 255) {
			at(t, c, R[257 + (W = j >> 18 & 31)]), c += N[W + 257], W > 7 && (it(t, c, j >> 23 & 31), c += De[W]);
			var U = 31 & j;
			at(t, c, E[U]), c += $[U], U > 3 && (at(t, c, j >> 5 & 8191), c += Le[U]);
		} else at(t, c, R[j]), c += N[j];
	}
	return at(t, c, R[256]), c + N[256];
}, dt = new Be([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), mt = new Oe(0), pt = function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, i = 9; --i;) n = (1 & n && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), gt = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
}, ht = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new Oe(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, i, a) {
			if (!a && (a = { l: 1 }, t.dictionary)) {
				var r = t.dictionary.subarray(-32768), s = new Oe(r.length + e.length);
				s.set(r), s.set(e, r.length), e = s, a.w = r.length;
			}
			return function(e, t, n, i, a, r) {
				var s = r.z || e.length, o = new Oe(i + s + 5 * (1 + Math.ceil(s / 7e3)) + a), l = o.subarray(i, o.length - a), u = r.l, c = 7 & (r.r || 0);
				if (t) {
					c && (l[0] = r.r >> 3);
					for (var d = dt[t - 1], m = d >> 13, p = 8191 & d, g = (1 << n) - 1, h = r.p || new Ce(32768), f = r.h || new Ce(g + 1), _ = Math.ceil(n / 3), w = 2 * _, y = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, v = new Be(25e3), M = new Ce(288), b = new Ce(32), k = 0, x = 0, S = r.i || 0, I = 0, A = r.w || 0, T = 0; S + 2 < s; ++S) {
						var R = y(S), N = 32767 & S, E = f[R];
						if (h[N] = E, f[R] = N, A <= S) {
							var $ = s - S;
							if ((k > 7e3 || I > 24576) && ($ > 423 || !u)) {
								c = ct(e, l, 0, v, M, b, x, I, T, S - T, c), I = k = x = 0, T = S;
								for (var O = 0; O < 286; ++O) M[O] = 0;
								for (O = 0; O < 30; ++O) b[O] = 0;
							}
							var C = 2, B = 0, D = p, L = N - E & 32767;
							if ($ > 2 && R == y(S - L)) for (var P = Math.min(m, $) - 1, F = Math.min(32767, S), W = Math.min(258, $); L <= F && --D && N != E;) {
								if (e[S + C] == e[S + C - L]) {
									for (var j = 0; j < W && e[S + j] == e[S + j - L]; ++j);
									if (j > C) {
										if (C = j, B = L, j > P) break;
										var U = Math.min(L, j - 2), z = 0;
										for (O = 0; O < U; ++O) {
											var G = S - L + O & 32767, V = G - h[G] & 32767;
											V > z && (z = V, E = G);
										}
									}
								}
								L += (N = E) - (E = h[N]) & 32767;
							}
							if (B) {
								v[I++] = 268435456 | Ue[C] << 18 | Ge[B];
								var H = 31 & Ue[C], q = 31 & Ge[B];
								x += De[H] + Le[q], ++M[257 + H], ++b[q], A = S + C, ++k;
							} else v[I++] = e[S], ++M[e[S]];
						}
					}
					for (S = Math.max(S, A); S < s; ++S) v[I++] = e[S], ++M[e[S]];
					c = ct(e, l, u, v, M, b, x, I, T, S - T, c), u || (r.r = 7 & c | l[c / 8 | 0] << 3, c -= 7, r.h = f, r.p = h, r.i = S, r.w = A);
				} else {
					for (S = r.w || 0; S < s + u; S += 65535) {
						var K = S + 65535;
						K >= s && (l[c / 8 | 0] = u, K = s), c = ut(l, c + 1, e.subarray(S, K));
					}
					r.i = s;
				}
				return et(o, 0, i + Xe(c) + a);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? a.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, n, i, a);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || nt(5), this.s.l && nt(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var i = new Oe(-32768 & n);
				i.set(this.b.subarray(0, this.s.z)), this.b = i;
			}
			var a = this.b.length - this.s.z;
			this.b.set(e.subarray(0, a), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(a), 32768), this.s.z = e.length - a + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = mt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || nt(5), this.s.l && nt(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new Oe(6);
			t[0] = this.s.r >> 3;
			var n = ut(t, this.s.r, mt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), ft = "undefined" != typeof TextEncoder && new TextEncoder(), _t = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	_t.decode(mt, { stream: !0 });
} catch (Jr) {}
function wt(e, t) {
	if (t) {
		for (var n = new Oe(e.length), i = 0; i < e.length; ++i) n[i] = e.charCodeAt(i);
		return n;
	}
	if (ft) return ft.encode(e);
	var a = e.length, r = new Oe(e.length + (e.length >> 1)), s = 0, o = function(e) {
		r[s++] = e;
	};
	for (i = 0; i < a; ++i) {
		if (s + 5 > r.length) {
			var l = new Oe(s + 8 + (a - i << 1));
			l.set(r), r = l;
		}
		var u = e.charCodeAt(i);
		u < 128 || t ? o(u) : u < 2048 ? (o(192 | u >> 6), o(128 | 63 & u)) : u > 55295 && u < 57344 ? (o(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++i)) >> 18), o(128 | u >> 12 & 63), o(128 | u >> 6 & 63), o(128 | 63 & u)) : (o(224 | u >> 12), o(128 | u >> 6 & 63), o(128 | 63 & u));
	}
	return et(r, 0, s);
}
var yt = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var i = e[n].length;
		i > 65535 && nt(9), t += i + 4;
	}
	return t;
}, vt = function(e, t, n, i, a, r, s, o) {
	var l = i.length, u = n.extra, c = o && o.length, d = yt(u);
	gt(e, t, null != s ? 33639248 : 67324752), t += 4, null != s && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (r < 0 && 8), e[t++] = a && 8, e[t++] = 255 & n.compression, e[t++] = n.compression >> 8;
	var m = new Date(null == n.mtime ? Date.now() : n.mtime), p = m.getFullYear() - 1980;
	if ((p < 0 || p > 119) && nt(10), gt(e, t, p << 25 | m.getMonth() + 1 << 21 | m.getDate() << 16 | m.getHours() << 11 | m.getMinutes() << 5 | m.getSeconds() >> 1), t += 4, -1 != r && (gt(e, t, n.crc), gt(e, t + 4, r < 0 ? -r - 2 : r), gt(e, t + 8, n.size)), gt(e, t + 12, l), gt(e, t + 14, d), t += 16, null != s && (gt(e, t, c), gt(e, t + 6, n.attrs), gt(e, t + 10, s), t += 14), e.set(i, t), t += l, d) for (var g in u) {
		var h = u[g], f = h.length;
		gt(e, t, +g), gt(e, t + 2, f), e.set(h, t + 4), t += 4 + f;
	}
	return c && (e.set(o, t), t += c), t;
}, Mt = function() {
	function e(e) {
		var t;
		this.filename = e, this.c = (t = -1, {
			p: function(e) {
				for (var n = t, i = 0; i < e.length; ++i) n = pt[255 & n ^ e[i]] ^ n >>> 8;
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
		this.ondata || nt(5), this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1);
	}, e;
}(), bt = function() {
	function e(e, t) {
		var n, i = this;
		t || (t = {}), Mt.call(this, e), this.d = new ht(t, function(e, t) {
			i.ondata(null, e, t);
		}), this.compression = 8, this.flag = 1 == (n = t.level) ? 3 : n < 6 ? 2 : 9 == n ? 1 : 0;
	}
	return e.prototype.process = function(e, t) {
		try {
			this.d.push(e, t);
		} catch (Jr) {
			this.ondata(Jr, null, t);
		}
	}, e.prototype.push = function(e, t) {
		Mt.prototype.push.call(this, e, t);
	}, e;
}(), kt = function() {
	function e(e) {
		this.ondata = e, this.u = [], this.d = 1;
	}
	return e.prototype.add = function(e) {
		var t = this;
		if (this.ondata || nt(5), 2 & this.d) this.ondata(nt(4 + 8 * (1 & this.d), 0, 1), null, !1);
		else {
			var n = wt(e.filename), i = n.length, a = e.comment, r = a && wt(a), s = i != e.filename.length || r && a.length != r.length, o = i + yt(e.extra) + 30;
			i > 65535 && this.ondata(nt(11, 0, 1), null, !1);
			var l = new Oe(o);
			vt(l, 0, e, n, s, -1);
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
					var r = new Oe(16);
					gt(r, 0, 134695760), gt(r, 4, e.crc), gt(r, 8, g), gt(r, 12, e.size), u.push(r), p.c = g, p.b = o + g + 16, p.crc = e.crc, p.size = e.size, d && p.r(), d = 1;
				} else d && c();
			}, this.u.push(p);
		}
	}, e.prototype.end = function() {
		var e = this;
		2 & this.d ? this.ondata(nt(4 + 8 * (1 & this.d), 0, 1), null, !0) : (this.d ? this.e() : this.u.push({
			r: function() {
				1 & e.d && (e.u.splice(-1, 1), e.e());
			},
			t: function() {}
		}), this.d = 3);
	}, e.prototype.e = function() {
		for (var e = 0, t = 0, n = 0, i = 0, a = this.u; i < a.length; i++) n += 46 + (p = a[i]).f.length + yt(p.extra) + (p.o ? p.o.length : 0);
		for (var r, s, o, l, u, c = new Oe(n + 22), d = 0, m = this.u; d < m.length; d++) {
			var p = m[d];
			vt(c, e, p, p.f, p.u, -p.c - 2, t, p.o), e += 46 + p.f.length + yt(p.extra) + (p.o ? p.o.length : 0), t += p.b;
		}
		r = c, s = e, o = this.u.length, l = n, u = t, gt(r, s, 101010256), gt(r, s + 8, o), gt(r, s + 10, o), gt(r, s + 12, l), gt(r, s + 16, u), this.ondata(null, c, !0), this.d = 2;
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
function At(e, { fileIds: t, dateRange: n, signal: i }) {
	const a = Lr(e, Rr.circadian, t);
	return async function(e, t, { dateRange: n, signal: i }) {
		const a = W(i), r = [];
		let o = 0;
		for (const l of e) {
			if (!l.id) continue;
			i?.throwIfAborted();
			const e = await t(l.id), u = [];
			for (const t of e.values()) {
				if (i?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
				o += 1;
				const e = It(l.id, t);
				e && u.push(e);
			}
			if (0 === u.length) continue;
			const { request: c, transfer: d } = St(u.map((e) => e.wire)), m = await a.computeCircadian(s(c, d));
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
			totalDays: o,
			daysWithSignal: r.length,
			meanRelativeAmplitude: null,
			meanL5Hour: null,
			meanM10Hour: null,
			interdailyStability: null,
			intradailyVariability: null,
			daySummaries: r,
			perParticipant: []
		};
	}(t.length > 0 ? a.files.filter((e) => null != e.id && t.includes(e.id)) : a.files, (e) => zr(a, e), {
		dateRange: n,
		signal: i
	});
}
async function Tt(e, t, n, i, a = 60, r, s) {
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
function Nt(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const i = ne(e), a = Array.from(i.timestamps);
	if (i.ggir) return {
		timestamps: a,
		algorithmResults: i.sleepScores,
		activity: null,
		scoresStale: null
	};
	let r = e.axisY ? new Float64Array(e.axisY) : null;
	if (r && e.actiwareActivityInvalid) {
		const t = new Uint8Array(e.actiwareActivityInvalid);
		if (t.length === r.length && t.some((e) => 1 === e)) {
			r = r.slice();
			for (let e = 0; e < t.length; e += 1) 1 === t[e] && (r[e] = NaN);
		}
	}
	if (!e.algorithmResults || "object" != typeof e.algorithmResults) return console.warn(`[loadActivityForMetrics] Missing algorithmResults for activity day id=${e.id}`), {
		timestamps: a,
		algorithmResults: null,
		activity: r,
		scoresStale: n
	};
	const s = b(e, t);
	return {
		timestamps: a,
		algorithmResults: "ok" === s.status && s.bytes ? new Uint8Array(s.bytes) : null,
		activity: r,
		scoresStale: "stale" === s.status ? s.reason : null
	};
}
const Et = /* @__PURE__ */ new Map();
async function $t(e, t) {
	if (Et.has(e)) return Et.get(e);
	try {
		const n = await W(t).resolveTimezone(e);
		return Et.set(e, n), n;
	} catch (nt) {
		t?.throwIfAborted(), console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, nt);
		return;
	}
}
function Ot(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : Ee();
}
async function Ct(e) {
	try {
		return Ot((await ue(e))?.extraSettings);
	} catch (nt) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", nt), Ee();
	}
}
function Bt(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const Dt = {
	zone: null,
	reason: null
};
async function Lt(e, t, n) {
	const i = e.ggirTimezone?.trim();
	let a = null;
	if (i) {
		const e = await $t(i, n);
		if (!e) return Dt;
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
	if (null === a) return K(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : Dt;
	const r = await $t(t, n);
	if (void 0 === r) return Dt;
	if ("iana" !== r?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const s = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== s && (await $e(r.zone, s, W(n))).includes(a) ? {
		zone: r.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${Bt(a)} is not a ${r.zone} offset`
	};
}
function Pt(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [i, a] of e.entries()) t[i + 1] = t[i] + a.length;
	const n = new Float64Array(t[e.length]);
	for (const [i, a] of e.entries()) n.set(a, t[i]);
	return [n, t];
}
const Ft = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), Wt = [
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
var jt = Wt.map(() => Ft);
Object.fromEntries(Wt.map(([e], t) => [e, jt[t]]));
const Ut = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values(I).filter((e) => ![
		I.choi_2012,
		I.choi_2011,
		I.van_hees_2023,
		I.detach_nonwear
	].some((t) => t === e))
];
async function zt(e, t, n, i) {
	const a = void 0 === t ? n?.window[e] : 48 === t ? n?.view48[e] : void 0;
	if (a) return {
		start: a[0],
		end: a[1]
	};
	const s = await (i ?? r()).analysisWindowBounds(e, t);
	return s ? {
		start: s[0],
		end: s[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function Gt(e, t, n) {
	const i = e instanceof Float64Array ? e : Float64Array.from(e), [a, s] = await (n ?? r()).analysisWindowSlice(i, t);
	return {
		startIndex: a,
		endIndex: s
	};
}
async function Vt(e, t = r()) {
	const n = [...new Set(e)], i = await t.analysisDatesOf(Float64Array.from(n)), a = new Map(n.map((e, t) => [e, i[t] ?? ""]));
	return (e) => a.get(e) ?? "";
}
function Ht(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [i, a] of Object.entries(ve(e, e.nonwearChoiAxis ?? _e()))) a && (n[t[i] ?? i] = new Uint8Array(a));
	return n;
}
async function qt(e, t, n, i = {}) {
	const { signal: a, includeNonwearMasks: r = !1 } = i, s = e.get(t), o = Nt(s, n), l = r && s ? Ht(s) : {}, u = e.get(await S(t, void 0, W(a))), c = o.timestamps[o.timestamps.length - 1], d = u ? Nt(u, n) : null, m = d?.timestamps[0], p = void 0 !== u && null !== d && void 0 !== c && void 0 !== m && m > c, g = o.scoresStale ?? d?.scoresStale ?? null;
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
	const y = r ? Ht(u) : {}, v = {};
	for (const M of Ut) {
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
async function Kt(e, t, n, i) {
	const a = await n.files.get(e.fileId);
	if (!a) return;
	const r = /* @__PURE__ */ new Map();
	for (const s of [e.date, await S(e.date, void 0, W(i))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, s]).first();
		t && r.set(s, t);
	}
	await async function(e, t, n, i) {
		const { date: a, file: r, activityMap: s, verdict: o } = t, l = t.spanning ?? await qt(s, a, o, { signal: i });
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
			await j(n, [n.markers], () => G(e.id, {
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
Object.fromEntries(Object.values(I).map((e) => [e, e === I.ggir_saved ? q : we(e)]));
const Yt = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], Jt = ["under-series", "over-series"], Zt = ["full-resolution-v1", "min-max-gap-envelope-v1"], Qt = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function Xt(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function en(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? Xt(t, "expected an object") : e;
}
function tn(e, t) {
	return Array.isArray(e) ? e : Xt(t, "expected an array");
}
function nn(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : Xt(t, "expected a finite number");
}
function an(e, t) {
	const n = nn(e, t);
	return n <= 0 ? Xt(t, "expected a positive number") : n;
}
function rn(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : Xt(t, "expected a safe integer");
}
function sn(e, t) {
	const n = rn(e, t);
	return n < 0 ? Xt(t, "expected a non-negative safe integer") : n;
}
function on(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? Xt(t, "expected a boolean") : { [n]: e };
}
function ln(e, t) {
	return "string" != typeof e || 0 === e.length ? Xt(t, "expected a non-empty string") : e;
}
function un(e, t) {
	return "string" == typeof e && Yt.includes(e) ? e : Xt(t, "expected a supported tone");
}
function cn(e, t) {
	return "string" == typeof e && Jt.includes(e) ? e : Xt(t, "expected a supported phase");
}
function dn(e, t) {
	const n = en(e, t), i = nn(n.min, `${t}.min`), a = nn(n.max, `${t}.max`);
	return a <= i || !Number.isFinite(a - i) ? Xt(t, "expected a finite ascending range") : {
		min: i,
		max: a
	};
}
function mn(e, t) {
	const n = `series[${t}]`, i = en(e, n), a = tn(i.points, `${n}.points`);
	let r = Number.NEGATIVE_INFINITY;
	const s = a.map((e, t) => {
		const i = `${n}.points[${t}]`, a = en(e, i), s = nn(a.timestamp, `${i}.timestamp`);
		if (s <= r) return Xt(`${i}.timestamp`, "expected strictly ascending timestamps");
		r = s;
		const o = a.value;
		return {
			timestamp: s,
			value: null === o ? null : nn(o, `${i}.value`)
		};
	});
	return {
		tone: un(i.tone, `${n}.tone`),
		strokeWidth: an(i.strokeWidth, `${n}.strokeWidth`),
		valueDomain: dn(i.valueDomain, `${n}.valueDomain`),
		points: s
	};
}
function pn(e, t) {
	const n = `overlays[${t}]`, i = en(e, n), a = {
		phase: cn(i.phase, `${n}.phase`),
		order: rn(i.order, `${n}.order`),
		tone: un(i.tone, `${n}.tone`)
	};
	if ("interval" === i.kind) {
		const e = nn(i.startTimestamp, `${n}.startTimestamp`), t = nn(i.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? Xt(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...a,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === i.kind ? {
		kind: "threshold",
		...a,
		value: nn(i.value, `${n}.value`),
		...on(i.draggable, `${n}.draggable`, "draggable"),
		...on(i.selected, `${n}.selected`, "selected"),
		...on(i.handle, `${n}.handle`, "handle"),
		...void 0 === i.label ? {} : { label: ln(i.label, `${n}.label`) }
	} : "instant" === i.kind ? {
		kind: "instant",
		...a,
		timestamp: nn(i.timestamp, `${n}.timestamp`)
	} : Xt(`${n}.kind`, "expected interval, threshold, or instant");
}
function gn(e) {
	const t = en(e, "scene");
	if (2 !== t.version) return Xt("version", "expected 2");
	const n = en(t.grid, "grid"), i = {
		strategy: (a = n.strategy, "string" == typeof a && Zt.includes(a) ? a : Xt("grid.strategy", "expected a supported render-grid strategy")),
		sourcePointCount: sn(n.sourcePointCount, "grid.sourcePointCount"),
		renderedPointCount: sn(n.renderedPointCount, "grid.renderedPointCount")
	};
	var a;
	if (i.renderedPointCount > i.sourcePointCount) return Xt("grid", "renderedPointCount cannot exceed sourcePointCount");
	if ("full-resolution-v1" === i.strategy && i.renderedPointCount !== i.sourcePointCount) return Xt("grid", "full-resolution strategy requires equal point counts");
	const r = en(t.size, "size"), s = {
		width: an(r.width, "size.width"),
		height: an(r.height, "size.height")
	}, o = en(t.plotArea, "plotArea"), l = {
		left: nn(o.left, "plotArea.left"),
		top: nn(o.top, "plotArea.top"),
		width: an(o.width, "plotArea.width"),
		height: an(o.height, "plotArea.height")
	};
	if (l.left < 0 || l.top < 0 || l.left + l.width > s.width || l.top + l.height > s.height) return Xt("plotArea", "expected bounds contained by size");
	const u = dn(t.viewport, "viewport"), c = dn(t.valueDomain, "valueDomain"), d = tn(t.series, "series").map(mn);
	if (0 === d.length && 0 !== i.renderedPointCount) return Xt("grid.renderedPointCount", "expected zero when series is empty");
	const m = d[0]?.points.map((e) => e.timestamp) ?? [];
	for (let f = 0; f < d.length; f++) {
		const e = d[f]?.points ?? [];
		if (e.length !== i.renderedPointCount) return Xt(`series[${f}].points`, "expected renderedPointCount aligned points");
		for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return Xt(`series[${f}].points[${t}].timestamp`, "expected the shared render grid timestamp");
	}
	const p = tn(t.overlays, "overlays").map(pn), g = null === t.cursorTimestamp ? null : nn(t.cursorTimestamp, "cursorTimestamp");
	let h = null;
	if (null !== t.selection) {
		const e = en(t.selection, "selection"), n = nn(e.startTimestamp, "selection.startTimestamp"), i = nn(e.endTimestamp, "selection.endTimestamp");
		if (i <= n) return Xt("selection", "expected a half-open ascending interval");
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
}
function hn(e, t, n) {
	const i = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(i) ? i : Xt("projection", "expected a finite pixel coordinate");
}
function fn(e, t, n) {
	const i = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(i) ? i : Xt("projection", "expected a finite pixel coordinate");
}
function _n(e) {
	const t = Number(e.toFixed(6));
	return Object.is(t, -0) ? "0" : String(t);
}
function wn(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function yn(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, i = t.plotArea.height, a = Qt[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const r = wn(hn(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), s = wn(hn(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${_n(r)}" y="0" width="${_n(Math.max(1, s - r))}" height="${_n(i)}" fill="${a}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const r = fn(e.value, t.valueDomain, i), s = !0 === e.selected, o = s ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${s ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${_n(r)}" x2="${_n(n)}" y2="${_n(r)}" stroke="${a}" stroke-width="${s ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const r = hn(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${_n(r)}" y1="0" x2="${_n(r)}" y2="${_n(i)}" stroke="${a}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function vn(e) {
	const t = gn(e), n = _n(t.size.width), i = _n(t.size.height), a = _n(t.plotArea.width), r = _n(t.plotArea.height), s = yn(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
		let i = "", a = !1;
		for (const r of e.points) {
			if (null == r.value) {
				a = !1;
				continue;
			}
			const t = hn(r.timestamp, n.viewport, {
				left: 0,
				width: n.plotArea.width
			}), s = fn(r.value, e.valueDomain, n.plotArea.height);
			i += `${a ? "L" : "M"}${_n(t)} ${_n(s)}`, a = !0;
		}
		return 0 === i.length ? "" : `<path data-series-index="${t}" d="${i}" fill="none" stroke="${Qt[e.tone]}" stroke-width="${_n(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = yn(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${i}" viewBox="0 0 ${n} ${i}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${i}" fill="#ffffff"/><svg x="${_n(t.plotArea.left)}" y="${_n(t.plotArea.top)}" width="${a}" height="${r}" viewBox="0 0 ${a} ${r}" overflow="hidden"><rect x="0" y="0" width="${a}" height="${r}" fill="#ffffff"/>${s}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = wn(hn(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), i = wn(hn(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${_n(n)}" y="0" width="${_n(Math.max(1, i - n))}" height="${_n(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = hn(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${_n(n)}" y1="0" x2="${_n(n)}" y2="${_n(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${_n(t.plotArea.left)}" y="${_n(t.plotArea.top)}" width="${a}" height="${r}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
const Mn = "local-export-streams";
var bn = class extends Error {
	file;
	step;
	constructor(e, t, n) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t;
	}
};
const kn = 65536, xn = "manifest.json", Sn = "Duplicate export entry: ";
function In(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function An(e) {
	return String(e).padStart(2, "0");
}
function Tn(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
function Rn(e) {
	if (0 === e.timestamps.length) return Tn("expected at least one epoch");
	if (e.timestamps.length !== e.activity.length) return Tn("timestamp and activity lengths must match");
	let t = Number.NEGATIVE_INFINITY, n = 0, i = 0;
	const a = e.timestamps.map((a, r) => {
		const s = e.activity[r];
		return !Number.isFinite(a) || a <= t ? Tn("timestamps must be finite and strictly ascending") : (t = a, null != s && Number.isFinite(s) ? (n = Math.min(n, s), i = Math.max(i, s), {
			timestamp: a,
			value: s
		}) : {
			timestamp: a,
			value: null
		});
	}), r = a[0].timestamp, s = a[a.length - 1].timestamp, o = s > r ? s : r + 1;
	if (!Number.isFinite(o) || o <= r) return Tn("single-epoch viewport must have a representable right edge");
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
	return gn({
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
	});
}
const Nn = [
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
new Set(Nn.slice(16).map(([e]) => e));
var En = class extends Error {};
const $n = "edit_recompute_requires_ms2_ms3", On = /* @__PURE__ */ new Set([
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
]), Cn = y.invalid_night_row.markerTypeCell, Bn = new Set(Nn.map(([, e]) => e)), Dn = /* @__PURE__ */ new Set([
	k.ggir_sleepparam.header,
	k.ggir_guider_onset.header,
	k.ggir_guider_wakeup.header,
	k.ggir_guider_spt_duration.header,
	k.ggir_error_onset.header,
	k.ggir_error_wake.header,
	k.ggir_error_dur.header,
	k.ggir_fraction_night_invalid.header,
	k.ggir_duration_sib_wakinghours.header,
	k.ggir_number_sib_sleepperiod.header,
	k.ggir_number_sib_wakinghours.header,
	k.ggir_duration_sib_wakinghours_atleast15min.header,
	k.ggir_guider_onset_ts.header,
	k.ggir_guider_wakeup_ts.header,
	k.ggir_page.header,
	k.ggir_daysleeper.header,
	k.ggir_sleeplog_id.header,
	k.ggir_guider.header,
	k.ggir_longitudinal_axis.header
]), Ln = /* @__PURE__ */ new Set([
	k.ggir_sleep_duration_in_spt.header,
	k.ggir_waso.header,
	k.ggir_number_of_awakenings.header,
	k.ggir_sleeplatency.header,
	k.ggir_sleepefficiency.header
]), Pn = /* @__PURE__ */ new Set([
	...Ln,
	k.ggir_nonwear_perc_spt.header,
	k.ggir_sleeponset.header,
	k.ggir_wakeup.header,
	k.ggir_spt_duration.header,
	k.ggir_guider_onset.header,
	k.ggir_guider_wakeup.header,
	k.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	k.ggir_sleeponset_ts.header,
	k.ggir_wakeup_ts.header,
	k.ggir_guider_onset_ts.header,
	k.ggir_guider_wakeup_ts.header,
	k.ggir_daysleeper.header,
	k.ggir_cleaningcode.header,
	k.ggir_guider.header,
	k.ggir_error_onset.header,
	k.ggir_error_wake.header,
	k.ggir_error_dur.header,
	k.ggir_fraction_night_invalid.header,
	k.ggir_duration_sib_wakinghours.header,
	k.ggir_number_sib_sleepperiod.header,
	k.ggir_number_sib_wakinghours.header,
	k.ggir_duration_sib_wakinghours_atleast15min.header
]), Fn = /* @__PURE__ */ new Set([
	k.ggir_id.header,
	k.ggir_filename.header,
	k.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	k.ggir_sleep_regularity_index1.header,
	k.ggir_sri_fraction_valid.header,
	k.ggir_calendar_date.header,
	k.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	k.ggir_cleaningcode.header,
	k.ggir_guider.header,
	k.ggir_sleeplog_used.header,
	k.ggir_acc_available.header,
	k.ggir_daysleeper.header
]), Wn = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), jn = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), Un = new Set(Object.values(k).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), zn = new Set(Object.values(k).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), Gn = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim());
function Vn(e, t, n, i) {
	const a = (e) => n.get(e) ?? "", r = a(t + "_missing_reason");
	if (r && !On.has(r)) return null;
	const s = r || null;
	if (e.startsWith("part2_")) return "source_reported_missing";
	if (e.includes("_ggir_review")) {
		if (s) return s;
		const e = a("review_source");
		return "ggir" === e ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const o = a(k.marker_type.header) === Cn || "actiware_intervals_export.csv" === e && a(k.interval_kind.header) === Cn;
	if (!function(e, t) {
		return "actiware_intervals_export.csv" === e ? Bn.has(t) : "actiware_sleep_wake_export.csv" === e ? t === k.actiware_sleep_wake.header || t === k.actiware_wake_threshold.header : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			k.ggir_id.header,
			k.ggir_filename.header,
			k.ggir_calendar_date.header,
			k.ggir_weekday.header,
			k.ggir_sleeplog_id.header,
			k.ggir_guider_corrected.header,
			k.ggir_cleaningcode.header
		].includes(t) : Un.has(t);
	}(e, t)) return s || (o ? "invalid_night" : "Manual Nonwear" === a(k.marker_type.header) ? "manual_nonwear_period" : null);
	if ("actiware_intervals_export.csv" === e && Bn.has(t)) {
		if (o) return "invalid_night";
		const e = a(k.interval_kind.header).toLowerCase(), n = a(k.interval_start_local.header);
		if ("daily" === e && n && n === a(k.interval_end_local.header)) return "zero_interval_rows";
		if ([
			k.actiware_onset_latency.header,
			k.actiware_efficiency.header,
			k.actiware_waso.header
		].includes(t)) {
			if ("sleep" !== e) return "not_applicable_to_row";
			if (Gn(a(k.actiware_duration.header))) return null;
			const t = a(k.interval_start_local.header), n = a(k.interval_end_local.header);
			if (!t || !n) return null;
			let r = !1;
			for (const e of i) if (e.get(k.filename.header) === a(k.filename.header) && "rest" === e.get(k.interval_kind.header) && (e.get(k.interval_start_local.header) ?? "") <= t && n <= (e.get(k.interval_end_local.header) ?? "")) {
				r = !0;
				break;
			}
			return r ? null : "no_eligible_rest";
		}
		if (Gn(a(k.actiware_duration.header))) return null;
		if (t === k.actiware_off_wrist.header || t === k.actiware_off_wrist_percent.header) return t === k.actiware_off_wrist_percent.header && "0.00" === a(k.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === s ? s : null;
		if (t === k.actiware_avg_ac_per_min.header) return 100 === Number(a(k.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			k.actiware_invalid_sw_percent.header,
			k.actiware_wake_percent.header,
			k.actiware_sleep_percent.header
		].includes(t)) {
			if ("0.00" === a(k.actiware_duration.header)) return "zero_interval_rows";
			const e = !Gn(a(k.actiware_wake_time.header)) && !Gn(a(k.actiware_sleep_time.header)) && 0 === Number(a(k.actiware_wake_time.header)) && 0 === Number(a(k.actiware_sleep_time.header));
			return t === k.actiware_invalid_sw_percent.header || 100 !== Number(a(k.actiware_invalid_sw_percent.header)) && !e ? null : "no_scored_epochs";
		}
		const r = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(t);
		if (r) {
			const e = r[1];
			return "0.00" === a(k.actiware_duration.header) ? "zero_interval_rows" : Gn(a("%Invalid " + e)) ? "source_reported_missing" === s ? s : null : t.startsWith("TALT ") && !Gn(a("Exposure " + e)) ? "threshold_unconfigured" : 100 === Number(a("%Invalid " + e)) ? "no_valid_epochs" : null;
		}
		return null;
	}
	if ("actiware_sleep_wake_export.csv" === e) {
		if (t === k.actiware_sleep_wake.header) return "no_valid_epochs" === s ? s : null;
		if (t === k.actiware_wake_threshold.header) return "not_computed_for_export" === s ? s : null;
	}
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return Dn.has(t) ? "not_computed_for_export" === s ? s : null : Ln.has(t) ? "no_scored_epochs" === s || "not_applicable_to_row" === s || "scores_from_another_config" === s ? s : null : s;
	if ("sleep_export_wide.csv" === e) return s;
	if ("summary_export.csv" === e && t === k.sleep_regularity_index.header) return s && [
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
		const r = h.find((e) => e.method === n);
		return i && r?.cutpoint && !Number.isFinite(r.cutpoint[i]) || "MIMS Unit Total" === t && "mims" !== n ? "not_applicable_to_row" : "ggir_enmo" === n ? Wn.has(t) ? "source_reported_missing" === s ? s : null : jn.has(t) && "not_computed_for_export" === s ? s : null : "mims" === n && [
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
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === a(k.marker_type.header) ? "manual_nonwear_period" : null : "true" === a(k.is_invalid_night.header).toLowerCase() && a(k.marker_type.header) === Cn ? "invalid_night" : t === k.total_nap_minutes.header && "0" === a(k.nap_count.header) ? "not_applicable_to_row" : [
		k.l5_hour.header,
		k.m10_hour.header,
		k.sleep_midpoint_hour.header,
		k.valid_wear_minutes.header
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
const Hn = "missing_reasons.csv";
function qn(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(f).join(","))].map((e) => e + "\n").join("");
}
function Kn(e, t) {
	const n = [
		k.filename.header,
		k.ggir_filename.header,
		"ggir_filename",
		k.participant_id.header,
		k.ggir_id.header,
		k.study_date.header,
		"Analysis Date",
		k.ggir_calendar_date.header,
		"ggir_calendar_date",
		k.interval_kind.header,
		k.marker_type.header,
		k.interval_start_local.header,
		k.epoch_local.header,
		"Method"
	].flatMap((t) => {
		const n = e.get(t);
		return n ? [t + "=" + n] : [];
	});
	return n.length ? n.join("|") : "row=" + String(t);
}
function Yn(e, t) {
	let n = !1, i = 0;
	for (let a = 0; a < e.length; a += 1) if ("\"" === e[a]) n && "\"" === e[a + 1] ? a += 1 : n = !n;
	else if ("," === e[a] && !n && ++i === t) return e.slice(0, a);
	return e;
}
function* Jn(e, t, n = !0, i) {
	const { headerlessColumns: a, fullRowCsv: r, rowOffset: s = 0, contextRows: o } = i ?? {}, l = a?.length ? a.join(",") + "\n" + e : e, u = d(l);
	if (u.unterminatedQuotedField) throw new Error(t + ": unterminated CSV cell");
	const [m, ...p] = u.records;
	if (!m) return {
		csv: e,
		withReason: 0,
		withoutReason: 0
	};
	const g = c(m.text), h = g.findIndex((e) => e.endsWith("_missing_reason"));
	if (h >= 0 && g.slice(h).some((e) => !e.endsWith("_missing_reason"))) throw new Error(t + ": internal reason fields must trail data fields");
	const f = g.map((e, t) => ({
		header: e,
		index: t
	})).filter(({ header: e }) => "" !== e && !e.endsWith("_missing_reason")), _ = p.map((e) => c(e.text)), w = _.map((e) => new Map(g.map((t, n) => [t, e[n] ?? ""]))), y = r ? d(r).records : [], v = y[0] ? c(y[0].text) : [], M = r ? y.slice(1).map((e) => c(e.text)) : [];
	if (r && f.length > 0 && M.length !== _.length) throw new Error(t + ": complete-row evidence count differs");
	const b = r ? M.map((e) => new Map(v.map((t, n) => [t, e[n] ?? ""]))) : w;
	let k = 0, x = 0;
	for (let c = 0; c < _.length; c += 1) {
		const e = _[c], n = w[c];
		for (const { header: i, index: a } of f) {
			if ("edit_recompute_requires_ms2_ms3" === b[c].get(i + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
				yield {
					file: t,
					row: s + c + 1,
					key: Kn(n, s + c + 1),
					column: i,
					reason: $n
				}, k += 1;
				continue;
			}
			const r = e[a] ?? "";
			if (!Gn(r) || "" !== r.trim() && zn.has(i)) continue;
			const l = Vn(t, i, b[c], o?.() ?? b);
			l ? (k += 1, yield {
				file: t,
				row: s + c + 1,
				key: Kn(n, s + c + 1),
				column: i,
				reason: l
			}) : (x += 1, console.warn("WARNING: unreasoned missing export cell"));
		}
	}
	if (n && x > 0) throw new En(t + ": " + String(x) + " unreasoned missing metric cells");
	return h < 0 ? {
		csv: e,
		withReason: k,
		withoutReason: x
	} : {
		csv: [Yn(m.text, h), ...p.map((e) => Yn(e.text, h))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: k,
		withoutReason: x
	};
}
const Zn = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], Qn = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : f(String(e)), Xn = {
	nights: "part4_nightsummary_ggir_review.csv",
	days: "part5_daysummary_ggir_review.csv"
};
function ei(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return o(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? o(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function ti(e, t) {
	const n = new Map(X(e).map((e) => [e.night, e.nightDate]));
	return (e, i, a = !0) => {
		const r = e.columns.indexOf("nights" === t ? k.ggir_night.header : "night_number"), s = Number(e.values[r]?.[i]), o = n.get(s);
		if (a && o) return o;
		const l = e.values[e.columns.indexOf(k.ggir_calendar_date.header)]?.[i];
		return ei(l);
	};
}
async function ni(t, n, a, r) {
	const s = "nights" === n ? k.ggir_night.header : "window_number", o = W(a), l = await Promise.all(t.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await Z(e.imported, e.edits, t.night, a)])))), u = (await Promise.all(t.map(async (e, t) => {
		const i = e.current ?? e.imported, a = (e) => "nights" === n ? e.nights : e.days, r = "nights" === n ? i.nightRecomputed : i.dayRecomputed, s = "nights" === n ? e.imported.nightChecks : e.imported.dayChecks, u = l[t].filter((e) => null != e[1]), c = ti(e.imported, n), d = new Set(e.edits.map((e) => e.night)), m = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, p = /* @__PURE__ */ new Set();
		if ("days" === n && m) {
			const t = await Promise.all(X(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), i = t.nightDate, a = n.onset < "12:00:00" ? await S(i, void 0, o) : i, r = n.wake <= n.onset ? await S(a, void 0, o) : a;
				return [Math.min(t.onsetMs, Date.parse(`${a}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${r}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: i.days.rows }, async (e, n) => {
				const a = Number(i.days.values[i.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(a)) return void p.add(n);
				const r = c(i.days, n, !1), s = i.days.values[i.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof s ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(s) : null;
				if (!r || !l) return;
				const u = Date.parse(`${r}T${l[1]}Z`), m = l[2] < l[1] ? await S(r, void 0, o) : r, g = Date.parse(`${m}T${l[2]}Z`);
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
	const c = r ? r.filter((e) => !e.endsWith("_missing_reason") && !Zn.includes(e)) : [];
	for (const e of r ? [] : u) for (const t of e.table.columns) t.endsWith("_missing_reason") || c.includes(t) || c.push(t);
	const d = new Set("nights" === n ? x.ggir_review_night_extension.map((e) => k[e].header) : []), m = r ? c.filter((e) => r.includes(e + "_missing_reason")) : c.filter((e) => d.has(e) || u.some((e) => e.editRecomputeUnavailable || "ggir_corrected" === e.source)), p = [[
		...c.map(f),
		...Zn,
		...m.map((e) => f(e + "_missing_reason")),
		...Zn.map((e) => e + "_missing_reason")
	].join(",")], g = (e, t) => {
		const n = e.columns.indexOf(s);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: h, ggir: _, recomputed: w, provenance: y, checks: v, scoredDates: M, invalidDates: b, dateOf: x, editRecomputeUnavailable: S, editedNights: I, editedDayRows: A, savedNights: T, source: R } of u) {
		const t = T.columns.filter((e) => !Pn.has(e)), a = t.filter((e) => {
			const t = T.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return T.values[t].some((e, t) => {
				const i = Number(T.values[T.columns.indexOf(k.ggir_night.header)]?.[t]), a = n.has(i) && !Object.is(n.get(i), e);
				return n.set(i, e), a;
			});
		}), r = /* @__PURE__ */ new Set(), s = (e) => Array.from({ length: _.rows }, (e, t) => t).find((t) => !r.has(t) && g(_, t) === g(h, e) && a.every((n) => Object.is(_.values[_.columns.indexOf(n)]?.[t] ?? null, h.values[h.columns.indexOf(n)]?.[e] ?? null))), o = new Set(c.filter((e) => "nights" === n ? Pn.has(e) : !Fn.has(e) && !t.includes(e))), l = (a, r, s, l) => {
			const u = v.get(g(a, r));
			return [
				...c.map((e) => {
					if ("invalid" === s && ("nights" === n ? Pn.has(e) : /sleep|spt|waso|wake|onset|guider/i.test(e) && !t.includes(e))) return "";
					const i = a.columns.indexOf(e);
					return i < 0 ? "" : Qn(a.values[i]?.[r]);
				}),
				s,
				u?.status ?? "",
				f((u?.reasons ?? []).join(";")),
				f((u?.diffs ?? []).map((e) => e.column).join(";")),
				f(l),
				...m.map((t) => "invalid" !== s || d.has(t) && t !== k.ggir_nonwear_perc_spt.header ? S && s === R && o.has(t) && ("days" === n ? A.has(r) : I.has(g(a, r))) ? $n : d.has(t) ? null != e(a, t, r) ? "" : Qn(i(a, t + "_missing_reason", r) ?? "source_reported_missing") : s === R ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
				"",
				u ? "" : "not_computed_for_export",
				u?.reasons.length ? "" : "not_applicable_to_row",
				u?.diffs.length ? "" : "not_applicable_to_row",
				l ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let e = 0; e < h.rows; e += 1) {
			const t = x(h, e);
			if (M && (!t || !M.has(t))) continue;
			const n = s(e);
			if (null != n && r.add(n), t && b?.has(t)) {
				null != n && p.push(l(_, n, R, "")), p.push(l(h, e, "invalid", ""));
				continue;
			}
			if (!w[e]) {
				p.push(l(h, e, R, ""));
				continue;
			}
			const i = g(h, e);
			null != n && p.push(l(_, n, R, "")), p.push(l(h, e, "recomputed", y(i)));
		}
		for (let e = 0; e < _.rows; e += 1) {
			if (r.has(e)) continue;
			const t = x(_, e);
			(!M || t && M.has(t)) && (p.push(l(_, e, R, "")), t && b?.has(t) && p.push(l(_, e, "invalid", "")));
		}
	}
	return p.length > 1 ? `${p.join("\n")}\n` : null;
}
const ii = x.ggir_part4_nightsummary_csv, ai = ii.map((e) => k[e].header), ri = [
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
], si = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function oi(e, t) {
	const n = k[e], i = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof i ? f(i) : In(i, { integral: n.ggirIntegral ?? !1 });
}
function li(e, t = "legacy-recording", n, i) {
	const a = [], r = [];
	for (const s of e) s.states && 0 !== s.timestamps.length && (r.push(s.states.subarray(0, Math.min(s.timestamps.length, s.states.length))), a.push({
		seriesId: t,
		...void 0 === n ? {} : { epochLengthSeconds: n },
		timestamps: s.timestamps,
		states: s.states
	}));
	const o = new Uint8Array(r.reduce((e, t) => e + t.length, 0));
	r.reduce((e, t) => (o.set(t, e), e + t.length), 0);
	const l = e.length > 0 && e.every((e) => null == e.states) ? "no_scored_epochs" : "no_valid_epochs";
	return 0 === o.length ? Promise.resolve({
		sri: null,
		fractionValid: null,
		sriMissingReason: l,
		fractionValidMissingReason: l
	}) : W(i).validStateFraction(o).then(async (e) => {
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
		const r = (void 0 === n || 86400 % n == 0) && [...t].some(([e, n]) => n && t.get(e + 86400)), o = r ? null : "insufficient_pair", l = await async function(e, t) {
			const n = Array.isArray(e) ? e : [e], i = n.map((e) => ({
				...void 0 === e.seriesId ? {} : { series_id: e.seriesId },
				...void 0 === e.epochLengthSeconds ? {} : { epoch_length_seconds: e.epochLengthSeconds }
			})), [a, r] = Pt(n.map((e) => e.timestamps)), [o, l] = Pt(n.map((e) => e.states));
			return W(t).sleepRegularityIndex(s([
				JSON.stringify(i),
				a,
				r,
				o,
				l
			], [
				a.buffer,
				r.buffer,
				o.buffer,
				l.buffer
			]));
		}(a, i);
		if (r && null == l) throw new Error("SRI producer returned a blank despite valid pairs");
		return {
			sri: l,
			fractionValid: e,
			sriMissingReason: o,
			fractionValidMissingReason: null
		};
	});
}
async function ui(e, t, n, i = {}) {
	const { signal: a } = i, r = e.participantId ?? e.filename, s = me(n.values(), i.algorithm), o = [];
	for (const [l, y] of n) {
		if (!bi(l, i.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = Nt(y, s);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const u = await li(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, a), { sri: c, fractionValid: d } = u, m = "stale" === s.status ? "scores_from_another_config" : null, p = m ?? u.sriMissingReason, g = m ?? u.fractionValidMissingReason, h = [];
	for (const y of [...t.keys()].sort()) {
		const e = t.get(y);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === l.MAIN_SLEEP && null != t.onsetTimestamp && h.push({
			date: y,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const f = [[
		...ai,
		...ri.map((e) => `${k[e].header}_missing_reason`),
		...si.map((e) => `${k[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: l, onsetTs: y, wakeupTs: v } of h) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == v ? "not_applicable_to_row" : m ?? "no_scored_epochs"
		};
		if (null != v) {
			const { timestamps: i, algorithmResults: r } = await qt(n, l, s, { signal: a });
			if (r && i.length > 0) {
				t.missingReason = null;
				const n = await Tt(r, i, y, v, e.epochLengthSeconds || 60, null, a);
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
	const w = await W(a).ggirManualNightClocks(h.map((e) => e.date), Float64Array.from(h, (e) => e.onsetTs), Float64Array.from(h, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let l = 0; l < h.length; l++) {
		const { onsetTs: t, wakeupTs: n } = h[l], i = w[l], { tstH: a, nAwak: s, latency: o, efficiency: u } = _[l], m = {
			ggir_id: r,
			ggir_night: l + 1,
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
			ggir_sleepefficiency: u,
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
			...ii.map((e) => oi(e, m[e])),
			...ri.map((e) => {
				const t = ii.indexOf(e);
				return t >= 0 && null == m[ii[t]] ? "not_computed_for_export" : "";
			}),
			...si.map((e) => {
				const t = ii.indexOf(e);
				return t >= 0 && null == m[ii[t]] ? _[l].missingReason ?? "" : "";
			}),
			p ?? "",
			g ?? ""
		].join(","));
	}
	return f.join("\n") + "\n";
}
function ci(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const di = "actogram_report.html";
function mi(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function pi(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function gi(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: i } = mi(n), a = [e, i].filter(Boolean);
		t.set(n, 0 === a.length ? "part4_nightsummary.csv" : `part4_nightsummary_${a.join("_")}.csv`);
	}
	return t;
}
function hi(e) {
	const { algoKey: t, ruleKey: n } = mi(e), i = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
	return t || n ? n ? `${i(t)} / ${i(n)}` : i(t) : "Legacy / Unscoped";
}
function fi(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : V(e);
}
function _i(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function* wi(e, t, n, i) {
	yield `<section class="pid-sec${0 === e ? " initial" : ""}" id="sec-${e}">`, yield `  <h2 class="pid-lbl">${ci(n.pid)}</h2>`;
	for (const [a, [r, s]] of n.algos.entries()) {
		const { algoKey: o, ruleKey: l } = mi(r), u = _i([o, l].filter(Boolean).join("_"), "unscoped"), c = `activity-${_i(t, "recording")}-${u}-${i}.svg`, d = Rn({
			timestamps: n.ts,
			activity: n.act,
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
		}), m = vn(d);
		yield `  <div class="algo-block" data-algorithm-key="${ci(r)}">`, yield `    <div class="algo-lbl">${ci(hi(r))}</div>`, s.stale && (yield `    <div class="algo-stale" role="status">${ci(s.stale)}</div>`), yield `    <div class="cwrap" id="c${e}_${a}">`, yield `      <div class="plot-svg">${m}</div>`, yield `      <button type="button" class="svg-btn" data-download-name="${ci(c)}">Download SVG</button>`, yield `      <div class="scene-meta">${ci(fi(d.viewport.min))} → ${ci(fi(d.viewport.max))} · activity domain ${In(d.valueDomain.min)}–${In(d.valueDomain.max)}</div>`, yield "    </div>", yield "  </div>";
	}
	yield "</section>";
}
const yi = ["<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>", "</body>\n</html>"];
function* vi(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let i = Math.min(e.length, n + kn / 4);
		i < e.length && /[\uD800-\uDBFF]/u.test(e[i - 1]) && (i -= 1), yield t.encode(e.slice(n, i)), n = i;
	}
	yield t.encode("\n");
}
function Mi(e) {
	return new TextEncoder().encode(e);
}
function bi(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
function ki(e, t) {
	const { signal: n } = t, { username: i, dateRange: a, snapshot: r } = e, s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = [];
	return {
		addFiles: async (e) => {
			const c = Lr(r, Rr.ggirReport, e.map((e) => e.id)), d = await Promise.all(e.map((e) => jr(r, e.id, i, n)));
			for (const [i, r] of e.entries()) {
				const e = c.files.find((e) => e.id === r.id);
				if (!e) throw new Error("GGIR file is outside the export snapshot");
				if (n?.throwIfAborted(), !e.id) continue;
				const { bundle: m, markersByAlgo: p, selected: h } = d[i], f = zr(c, e.id), _ = new Map([...p].filter(([e]) => bi(e, a))), w = /* @__PURE__ */ new Map();
				for (const [t, n] of _) for (const e of n) {
					const n = pi(e);
					let i = w.get(n);
					i || (i = /* @__PURE__ */ new Map(), w.set(n, i)), i.set(t, e);
				}
				const y = /* @__PURE__ */ new Set();
				for (const [t, n] of _) for (const e of n) g(e) && y.add(t);
				if (m) {
					const t = new Set([...h].filter(([, e]) => "invalid" === H(void 0, e).kind).map(([e]) => e)), n = m;
					u.push({
						...n,
						...a ? { scoredDates: new Set(e.availableDates.filter((e) => bi(e, a))) } : {},
						invalidDates: t
					});
				}
				const v = [...y].sort(), M = v[0], b = v[v.length - 1], k = [], x = [];
				for (const n of t.charts ? [...f.keys()].sort() : []) if (bi(n, a) && (null == M || null == b || n >= M && n <= b)) {
					const e = f.get(n), t = ne({
						timestamps: e.timestamps,
						ggirTimestamps: e.ggirTimestamps
					}), i = t.timestamps, a = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
					for (let n = 0; n < i.length; n++) k.push(i[n]), x.push(a[n]);
				}
				const S = [];
				for (const [t, i] of w) {
					const r = mi(t).algoKey, l = m ? "" : await ui(e, i, f, {
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
					const { algoKey: p, ruleKey: g } = mi(t), h = [p, g].filter(Boolean).join("_"), _ = me(f.values(), r || null);
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
		entries: async (e, t, i) => {
			const a = {}, r = (e) => void 0 === i || i === e;
			for (const [n, u] of e ?? gi([...s.keys()])) {
				const e = s.get(n);
				e?.length && r(u) && (a[u] = Mi(`${e.join("\n")}\n`));
			}
			for (const [n, s] of Object.entries(function(e, t) {
				const n = /* @__PURE__ */ new Map();
				for (const i of e) for (const [e, t] of Object.entries(i.part2Reports ?? {})) n.set(e, [...n.get(e) ?? [], t]);
				return Object.fromEntries([...n].map(([e, n]) => {
					const i = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], a = [i.map(f).join(",")];
					for (const t of n) for (let e = 0; e < t.rows; e++) a.push(i.map((n) => Qn(t.values[t.columns.indexOf(n)]?.[e])).join(","));
					return [e, a.join("\n") + "\n"];
				}));
			}(u, t))) r(n) && (a[n] = Mi(s));
			const o = r(Xn.nights) ? await ni(u, "nights", n, t?.get(Xn.nights)) : null;
			o && (a[Xn.nights] = Mi(o));
			const l = r(Xn.days) ? await ni(u, "days", n, t?.get(Xn.days)) : null;
			return l && (a[Xn.days] = Mi(l)), a;
		},
		chartPidData: l,
		csvLinesByAlgo: s
	};
}
async function xi(e, t, n, i) {
	const a = [], r = [];
	for (const [s, o] of e) if (s) for (let e = 0; e < Math.min(s.length, o.length); e++) a.push(o[e]), r.push(s[e]);
	return await W(i).spanFiniteMean(Float64Array.from(a), Float64Array.from(r), t, n) ?? null;
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
				return e ? f(e) : "";
			}(Si(t));
			case "display_label": {
				const n = Si(t);
				return n ? function(e) {
					return e ? f(e) : "";
				}(e.labelEnum ? M(e.labelEnum, n) : n) : "";
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
	return "" === n ? v[e.sentinel] : n;
}
function Ti(e, t) {
	if (!t) return "";
	const { labelEnum: n } = k[e];
	return n ? M(n, t) : t;
}
const Ri = y.invalid_night_row?.markerTypeCell ?? "", Ni = y.nonwear_row?.markerTypeCell ?? "";
function Ei(e) {
	return x[e].filter((e) => "server" !== k[e].plane);
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
const Ci = [
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
			metrics: t ? await Rt(e, t, n, i, a, r, s) : await Tt(e, n, i, a, r, null, s),
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
async function Di(n, i, a, r, s, o, u) {
	const c = s && s.trim().length > 0 ? s.trim() : null, d = Lr(o, Rr.sleep, n), m = d.files, p = Ot(d.studySettings[0]?.extraSettings), g = (n.length > 0 ? m.filter((e) => null != e.id && n.includes(e.id)) : [...m]).sort((e, t) => e.filename.localeCompare(t.filename)), [h, f] = a ?? ["", ""], _ = [], w = [], y = [], v = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), b = async () => {
		for (const [e, t] of v) M.set(e, await Li(e, t, _, u));
		v.clear();
	}, x = /* @__PURE__ */ new Map(), I = (e) => {
		const t = JSON.stringify(e);
		let n = x.get(t);
		return n || (n = W(u).exportNapAggregate(e), x.set(t, n)), n;
	}, A = await Promise.all(g.map((e) => jr(o, e.id, i, u)));
	for (const [R, N] of g.entries()) {
		if (u?.throwIfAborted(), R > 0 && g[R - 1].filename !== N.filename && await b(), !N.id) continue;
		const n = zr(d, N.id), { bundle: i, markersByAlgo: s } = A[R], o = i?.edits ?? [], m = i ? X(i.imported) : [], { zone: M } = await Lt(N, p, u), x = [.../* @__PURE__ */ new Set([...N.availableDates, ...m.map((e) => e.nightDate)])].sort(), T = a ? x.filter((e) => e >= h && e <= f) : x, E = ae(n.values());
		for (const a of T) {
			u?.throwIfAborted();
			const d = s.get(a);
			if (d && 0 !== d.length) for (const s of d) {
				if (!s.isInvalidNight && 0 === s.sleepMarkers.length && 0 === s.nonwearMarkers.length) continue;
				const d = N.participantId ?? null, p = N.id, g = s.algorithm ?? null, h = s.username ?? null, f = s.needsConsensus, b = s.notes, x = n.get(a), A = await S(a, void 0, W(u)), T = n.get(A), R = {
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
					dstTransition: await Ne(M, a, void 0, W(u))
				}, $ = await I(s.sleepMarkers.filter((e) => e.markerType === l.NAP).map((e) => ({
					start: e.onsetTimestamp,
					end: e.offsetTimestamp
				}))), O = r?.get(`${String(p)}|${a}`), C = {
					l5Hour: O?.l5Hour ?? null,
					m10Hour: O?.m10Hour ?? null,
					napCount: $.napCount,
					totalNapMinutes: $.napCount > 0 ? $.totalNapMinutes : null
				}, B = s.nonwearMarkers.map((e) => ({
					start: e.startTimestamp,
					end: e.endTimestamp
				})), D = E(g), L = Nt(x, D), P = `${N.filename}\0${d ?? ""}\0${R.algorithm ?? ""}\0${R.detectionRule ?? ""}`, F = v.get(P) ?? [];
				F.push({
					date: a,
					epochLengthSeconds: N.epochLengthSeconds || 60,
					timestamps: L.timestamps,
					states: L.algorithmResults,
					stale: "stale" === D.status
				}), v.set(P, F);
				const j = x?.temperature ? new Float64Array(x.temperature) : null, U = ne(x).timestamps, z = T?.temperature ? new Float64Array(T.temperature) : null, G = ne(T).timestamps, V = await qt(n, a, D, { signal: u }), q = async (e, t, n) => {
					if (!t || !n) return null;
					const i = (e) => e ? new Float64Array(e) : null;
					return xi([[i(x?.[e]), U], [i(T?.[e]), G]], t, n, u);
				}, K = (e, t) => xi([[j, U], [z, G]], e, t, u), Y = async (n, r) => {
					let c = null;
					const d = m.find((e) => e.nightDate === a), p = i && d && n.markerType === l.MAIN_SLEEP && "invalid" !== H(d, s).kind, g = d && o.some((e) => e.night === d.night), h = Oi(null), f = {};
					let _ = "not_applicable_to_row";
					if (!p && n.onsetTimestamp && n.offsetTimestamp) {
						const { timestamps: e, algorithmResults: t, activity: i, scoresStale: a } = V;
						if (null !== a && 0 === y.length && y.push({
							component: "metric_computation",
							code: "unavailable",
							message: a
						}), _ = null !== a ? "scores_from_another_config" : null == t ? "no_scored_epochs" : null == i ? "channel_unavailable" : 0 === e.length ? "no_valid_epochs" : void 0, null != t && e.length > 0 && (null != i || ne(x).ggir)) {
							const a = ne(x).ggir ? ne(x).epochSec : N.epochLengthSeconds || 60, r = await Bi(t, i, e, n.onsetTimestamp, n.offsetTimestamp, a, u);
							c = r.metrics, c || r.error || (_ = "no_valid_epochs"), r.error && (_ = "not_computed_for_export"), r.error && 0 === y.length && y.push({
								component: "metric_computation",
								code: "unavailable",
								message: "Metric computation failed for at least one selected period; those rows carry no numerics."
							});
						}
					}
					if (p) {
						_ = "channel_unavailable";
						const n = g ? i.current?.nights : i.imported.nights, a = n ? t(n, k.ggir_night.header, d.night) : -1;
						for (const [t, i, r, s] of Ci) {
							const o = n ? e(n, k[i].header, a) : null;
							h[t] = null == o ? null : o * s, f[r] = null == o ? g ? "not_computed_for_export" : "source_reported_missing" : void 0;
						}
					}
					(p || c && !("averageAwakeningLengthMinutes" in c)) && (f.average_awakening_length_minutes = "not_computed_for_export");
					const w = await W(u).exportPeriodFigures(n.onsetTimestamp, n.offsetTimestamp, B), v = Boolean(n.onsetTimestamp && n.offsetTimestamp), M = {
						...R,
						...C,
						periodIndex: n.markerIndex,
						markerType: n.markerType,
						onsetTimestamp: n.onsetTimestamp,
						offsetTimestamp: n.offsetTimestamp,
						...p ? h : Oi(c),
						metricMissingReason: _,
						isInvalidNight: r,
						meanTemperature: n.onsetTimestamp && n.offsetTimestamp ? await K(n.onsetTimestamp, n.offsetTimestamp) : null,
						meanWhiteLight: await q("lux", n.onsetTimestamp, n.offsetTimestamp),
						meanRedLight: await q("redLight", n.onsetTimestamp, n.offsetTimestamp),
						meanGreenLight: await q("greenLight", n.onsetTimestamp, n.offsetTimestamp),
						meanBlueLight: await q("blueLight", n.onsetTimestamp, n.offsetTimestamp),
						sleepMidpointTimestamp: v ? w.midpointTimestamp : null,
						sleepMidpointHour: v ? w.midpointClockHour : null,
						validWearMinutes: w.validWearMinutes
					}, b = (e, t) => null != e ? void 0 : v ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
					return M.sensorMissingReasons = {
						mean_temperature_c: b(M.meanTemperature, Boolean(x?.temperature || T?.temperature)),
						mean_white_light_lux: b(M.meanWhiteLight, Boolean(x?.lux || T?.lux)),
						mean_red_light: b(M.meanRedLight, Boolean(x?.redLight || T?.redLight)),
						mean_green_light: b(M.meanGreenLight, Boolean(x?.greenLight || T?.greenLight)),
						mean_blue_light: b(M.meanBlueLight, Boolean(x?.blueLight || T?.blueLight))
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
						...R,
						...C,
						periodIndex: null,
						markerType: Ri,
						onsetTimestamp: null,
						offsetTimestamp: null,
						...Oi(null),
						isInvalidNight: !0,
						sleepMidpointTimestamp: null,
						sleepMidpointHour: null,
						validWearMinutes: null
					});
					for (const e of s.sleepMarkers) _.push(await Y(e, !0));
				} else for (const e of s.sleepMarkers) _.push(await Y(e, !1));
				for (const e of s.nonwearMarkers) w.push({
					...R,
					...C,
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
	await b(), _.sort(Pi), w.sort(Pi);
	const T = await async function(e, t) {
		const n = e.filter((e) => e.markerType === l.MAIN_SLEEP), i = /* @__PURE__ */ new Map();
		for (const o of n) {
			const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = i.get(e);
			t ? t.push(o) : i.set(e, [o]);
		}
		const a = [...i], r = await W(t).summarizeExportGroups(a.map(([, e]) => e.map((e) => ({
			study_date: e.studyDate,
			total_nap_minutes: e.totalNapMinutes,
			values: Fi.map(([, t]) => e[t])
		})))), s = a.map(([e, t], n) => {
			const [i, a, s, o] = e.split("\0"), l = r[n], u = Object.fromEntries(Fi.map(([e], t) => [e, l.means[t] ?? null]));
			return {
				filename: i,
				participantId: a,
				algorithm: s,
				detectionRule: o,
				nNights: l.nNights,
				...u,
				meanTemperatureMissingReason: null == u.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
				metricMissingReasons: Object.fromEntries(Fi.map(([e, n]) => {
					const i = Wi[e], a = Ci.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : i), r = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[a] ?? e.metricMissingReason).find(Boolean);
					return [i, null == u[e] ? r : void 0];
				})),
				sleepRegularityIndex: null,
				meanTotalNapMinutes: l.meanTotalNapMinutes,
				studyId: t[0]?.studyId ?? null
			};
		});
		return s.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), s;
	}(_, u);
	for (const e of T) {
		const t = `${e.filename}\0${e.participantId}\0${e.algorithm}\0${e.detectionRule}`, n = M.get(t);
		e.sleepRegularityIndex = n?.sri ?? null, e.sleepRegularityMissingReason = n?.sriMissingReason ?? (n ? void 0 : "not_computed_for_export");
	}
	return {
		sleepRows: _,
		nonwearRows: w,
		summaryRows: T,
		degradations: y
	};
}
async function Li(e, t, n, i) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const a = new Set(n.filter((t) => t.markerType === l.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return a.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : li(t.filter((e) => a.has(e.date)), e, t[0]?.epochLengthSeconds, i);
}
function Pi(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const Fi = [
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
], Wi = {
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
}, ji = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => Ti("algorithm", e.algorithm),
	summary_detection_rule: (e) => Ti("detection_rule", e.detectionRule),
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
}, Ui = _;
function zi(e) {
	return L(e);
}
function Gi(e) {
	return JSON.stringify(e, null, 2);
}
const Vi = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function Hi(e = Ui, t = !1) {
	return ea("codebook_csv", e, Vi, void 0, t);
}
const qi = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], Ki = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function Yi(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== l.MAIN_SLEEP) continue;
		const e = qi.map((e) => Qi(e, n)).join("\0"), i = t.get(e);
		i ? i.push(n) : t.set(e, [n]);
	}
	return t;
}
function* Ji(e, t = !1) {
	const n = Yi(e);
	let i = 0;
	const a = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > i && (i = t.length), t;
	}), r = qi.map((e) => k[e].header);
	for (let o = 1; o <= i; o++) for (const [e] of Ki) r.push(`night${String(o)}_${e}`);
	const s = r;
	yield t ? [...r, ...s.map((e) => e + "_missing_reason")].join(",") : r.join(",");
	for (const o of a) {
		const e = o[0], n = qi.map((t) => Qi(t, e)), a = qi.map((t) => Zi[t]?.(e) ? "" : Xi[t] ?? "");
		for (let t = 0; t < i; t++) {
			const e = o[t];
			for (const [t, i] of Ki) {
				const r = e ? Qi(i, e) : "";
				n.push(r), a.push(r ? "" : e ? "date" === t ? "" : e.derivedMissingReasons?.[i] ?? e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? a : []].join(",");
	}
}
const Zi = {
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
function Qi(e, t) {
	return Ai(k[e], Zi[e]?.(t) ?? null);
}
const Xi = {
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
function ea(e, t, n, i, a = !1) {
	const r = i && i.length > 0 ? new Set(i) : null, s = Ei(e).filter((e) => null == r || r.has(k[e].header)), o = a ? s.filter((e) => Xi[e]) : [], l = [[...s.map((e) => k[e].header), ...o.map((e) => k[e].header + "_missing_reason")].join(",")];
	for (const u of t) l.push([...s.map((e) => Ai(k[e], n[e]?.(u) ?? null)), ...o.map((e) => {
		const t = n[e]?.(u);
		return null == t || "" === t ? Xi[e] ?? "" : "";
	})].join(","));
	return l.join("\n");
}
function ta(e, t, n = !1) {
	const i = ea("sleep_csv", e, Zi, t, n), a = t?.length ? new Set(t) : null, r = [
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
	].filter((t) => (!a || a.has(k[t].header)) && e.some((e) => r.includes(t) && null == Zi[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || s.includes(t) && e.metricMissingReason));
	return 0 === o.length ? i : d(i).records.map((t, n) => {
		if (0 === n) return t.text + "," + o.map((e) => `${k[e].header}_missing_reason`).join(",");
		const i = e[n - 1];
		return t.text + "," + o.map((e) => i.markerType === Ni ? "manual_nonwear_period" : i.markerType === Ri ? "invalid_night" : r.includes(e) ? null == Zi[e]?.(i) ? "source_reported_missing" : "" : i.sensorMissingReasons?.[e] ?? i.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? i.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (s.includes(e) ? i.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
Ei("sleep_csv").map((e) => k[e].header);
const na = w("event_marker_csv", "local"), ia = 86400, aa = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * ia * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), ra = (e) => e < 10 ? `0${String(e)}` : String(e);
function sa(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / ia), n = e - t * ia;
	return `${aa(t)} ${ra(Math.floor(n / 3600))}:${ra(Math.floor(n / 60) % 60)}:${ra(n % 60)}`;
}
function oa(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function la(e, t, n, i, a) {
	const r = [], s = Lr(n, Rr.event, e), o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		a?.throwIfAborted();
		const e = oa(l, zr(s, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await Vt(e, W(a)), u = new Set(Fr(s, l.id, i).keys());
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
const ua = y.invalid_night_row.markerTypeCell, ca = w("actiware_interval_csv", "local"), da = (e, t) => Math.round(e) === Math.round(t);
function ma(e, t = !1) {
	const n = t ? Nn.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], i = [[
		...ca,
		...n.map(([, e]) => e + "_missing_reason"),
		...t ? [
			"Participant ID_missing_reason",
			"Origin_missing_reason",
			"Analysis_missing_reason"
		] : []
	].join(",")], a = (e) => Number.isFinite(e) ? sa(Math.round(e)) : "";
	for (const { filename: r, participantId: s, studyDate: o, interval: l, statistics: u, invalidNight: c } of e) {
		const e = !0 === c && !Number.isFinite(l.startTimestamp), d = [
			r,
			s ?? "",
			o,
			c ? ua : l.kind,
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
			...d.map((e) => f(e)),
			...Nn.map(([, e]) => u?.printed?.[e] ?? ""),
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
const pa = "actiware_sleep_wake_export.csv", ga = w("actiware_sleep_wake_csv", "local");
async function ha(e, t, n, i) {
	if (0 === e.scores.byteLength) return [];
	const a = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, r = n ?? new Set(await i.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((a - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), a])));
	return (await Promise.all([...r].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await zt(t, void 0, void 0, i);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
async function fa(e, t, n, i = r()) {
	return t || n ? (await ha(e, t, n, i)).reduce((e, t) => e + t.end - t.start, 0) : e.scores.byteLength;
}
async function* _a(e, t, n, i, a) {
	a?.throwIfAborted();
	const r = Lr(n, Rr.actiwareSleepWake, e), s = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => r.actiwareFileData.find((t) => t.fileId === e.id)), l = function(e, t = !1) {
		const n = [[
			...ga,
			"Sleep/Wake_missing_reason",
			"Wake Threshold_missing_reason",
			...t ? ["Participant ID_missing_reason"] : []
		].join(",")];
		for (const i of e) n.push(wa(i, i.epochTimestamp, i.sleepWake, t));
		return `${n.join("\n")}\n`;
	}([], !0);
	let u = [], c = 0, d = 0;
	const m = () => {
		a?.throwIfAborted();
		const e = function(...e) {
			const t = Jn(...e), n = [];
			for (;;) {
				const e = t.next();
				if (e.done) return {
					...e.value,
					reasons: n
				};
				n.push(e.value);
			}
		}(l + u.join("\n") + "\n", pa, !0, { rowOffset: c }), t = c ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
			bytes: new TextEncoder().encode(t),
			rows: u.length,
			reasonRows: e.reasons.length,
			reasons: new TextEncoder().encode(qn(e.reasons, !1))
		};
		return c += u.length, u = [], d = 0, n;
	};
	for (const [p, g] of s.entries()) {
		a?.throwIfAborted();
		const e = o[p]?.actiwareSleepWake;
		if (!e) continue;
		const n = o[p]?.actiwareWakeThreshold, s = null != n && Number.isFinite(n) ? n : null, l = new Int8Array(e.scores), c = await ha(e, t, new Set(Fr(r, g.id, i).keys()), W(a));
		a?.throwIfAborted();
		for (const { date: t, start: i, end: a } of c) {
			const n = {
				filename: g.filename,
				participantId: g.participantId ?? null,
				studyDate: t,
				sleepDetection: Se(e.params, "sleep_detection"),
				wakeThresholdSelection: Se(e.params, "wake_threshold_selection"),
				wakeThreshold: s,
				...null === s ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
			};
			for (let t = i; t < a; t += 1) {
				const i = l[t], a = wa(n, e.startTimestamp + t * e.epochSeconds, 0 === i || 1 === i ? i : null, !0);
				if (a.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
				u.push(a), d += a.length, (512 === u.length || d >= 32768) && (yield m());
			}
		}
	}
	u.length && (yield m()), a?.throwIfAborted();
}
function wa(e, t, n, i) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		sa(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...i ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => f(e)).join(",");
}
const ya = kn;
async function* va(e) {
	const t = new TextDecoder();
	let n, i = "";
	for await (const a of async function* () {
		for await (const t of e) for (let e = 0; e < t.byteLength; e += ya) yield t.subarray(e, e + ya);
		yield null;
	}()) {
		const e = null === a;
		i += e ? t.decode() : t.decode(a, { stream: !0 });
		const r = d(i, e);
		if (e && r.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const s = r.remainder ?? "";
		if (s.length > ya || r.records.some((e) => e.text.length > ya)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
		if (r.records.length) {
			const e = void 0 === n;
			n ??= r.records[0].text + "\n", yield {
				bytes: new TextEncoder().encode((e ? "" : n) + i.slice(0, i.length - s.length)),
				rows: r.records.length - (e ? 1 : 0)
			};
		}
		i = s;
	}
}
const Ma = "union_all";
function ba(e) {
	return e.nonwearDetector ?? "union_all";
}
const ka = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: Ma
}, xa = {
	...ka,
	minimumWakeWearMinutes: Ie.minWearMinutesPerDay
};
function Sa(e) {
	return e ? {
		...xa,
		...e
	} : xa;
}
function Ia(e, t) {
	const n = [];
	for (const i of e.values()) {
		for (const e of i.sleepMarkers) {
			const t = e.markerType === l.MAIN_SLEEP ? "main_sleep" : e.markerType === l.NAP ? "nap" : null;
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
function Aa(e, t, n, i) {
	const a = ba(t), r = "union_all" === a ? Object.entries(ve(e, n)) : [[a, ye(e, a, n)], ..."detach_nonwear" === a ? [] : [["detach_nonwear", ye(e, "detach_nonwear", n)]]], s = new Float64Array(e.timestamps);
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
function Ra(e) {
	return {
		totalEpochs: e.totalEpochs,
		includedEpochs: e.includedEpochs,
		nonwearEpochs: e.nonwearEpochs,
		mainSleepEpochs: e.mainSleepEpochs,
		napEpochs: e.napEpochs,
		overlapEpochs: e.overlapEpochs
	};
}
function Na(e, t) {
	return W(t).summarizePhysicalActivityDays(e);
}
async function Ea(e, t = r()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
const $a = E.PRESCHOOL_FREE_LIVING_RF_3_5;
function Oa(e) {
	const t = e.algorithmResults[$a];
	return null != t && new Uint8Array(t).length > 0;
}
function Ca(e) {
	const t = e.algorithmResults[$a];
	if (!t) return null;
	const n = new Uint8Array(t);
	return n.length > 0 ? n : null;
}
function Ba(e) {
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
async function La(e, t) {
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
		await j(o, [o.physicalActivityFileSummaries], (e) => e.table(o.physicalActivityFileSummaries.name).put({
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
function Pa(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function Fa(e, t) {
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
function Wa(e, t, n) {
	if (!n) return e.ruleLabel;
	const i = String(t.sedentaryMax), a = String(t.lightMin), r = String(t.moderateMin - 1), s = String(t.moderateMin), o = String(t.vigorousMin - 1), l = String(t.vigorousMin);
	return t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, non-sedentary >=${a} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, light ${a}-${r}, MVPA >=${s} counts/min` : `Custom cutpoints: Sed <=${i}, light ${a}-${r}, moderate ${s}-${o}, vigorous >=${l} counts/min`;
}
const ja = [
	null,
	"sedentary",
	"light",
	"moderate",
	"vigorous"
];
async function Ua(e) {
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
	const l = await W(e.signal).cutpointToneCodes(Float64Array.from(o, (e) => e.countsPerMinute), Pa(i));
	let u = 0;
	const c = [];
	return o.forEach((e, t) => {
		const n = ja[l[t] ?? 0];
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
function za(e, t) {
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
function Ga(e) {
	e.mvpaMinutesPerDay = e.totalDays > 0 ? e.mvpaMinutes / e.totalDays : 0, e.totalDays > 0 && (null != e.mvpaBouts && (e.mvpaBoutsPerDay = e.mvpaBouts / e.totalDays), null != e.sedentaryBreaks && (e.sedentaryBreaksPerDay = e.sedentaryBreaks / e.totalDays));
}
function Va(e, t) {
	e.sedentaryMinutes += t.sedentaryMinutes, e.lightMinutes += t.lightMinutes, e.moderateMinutes += t.moderateMinutes, e.vigorousMinutes += t.vigorousMinutes, e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes;
}
function Ha(e, t, n, i) {
	if (0 === t.totalDays) return;
	e.totalDays += t.totalDays, Va(e, t.intensity), e.defaultIntensityMinutes && t.defaultIntensity && Va(e.defaultIntensityMinutes, t.defaultIntensity), null != t.mimsUnitTotal && (e.mimsUnitTotal = (e.mimsUnitTotal ?? 0) + t.mimsUnitTotal), e.totalEpochsReviewed = (e.totalEpochsReviewed ?? 0) + t.totalEpochs, e.includedEpochsReviewed = (e.includedEpochsReviewed ?? 0) + t.includedEpochs, e.wakeWearMinutes = (e.wakeWearMinutes ?? 0) + t.wakeWearMinutes, e.excludedNonwearMinutes = (e.excludedNonwearMinutes ?? 0) + t.excludedNonwearMinutes, e.excludedMainSleepMinutes = (e.excludedMainSleepMinutes ?? 0) + t.excludedMainSleepMinutes, e.excludedNapMinutes = (e.excludedNapMinutes ?? 0) + t.excludedNapMinutes, e.maskOverlapEpochs = (e.maskOverlapEpochs ?? 0) + t.overlapEpochs, e.maskPolicy = n;
	const a = t.bouts;
	a && (e.mvpaBouts = (e.mvpaBouts ?? 0) + a.mvpaBouts, e.mvpaBoutMinutes = (e.mvpaBoutMinutes ?? 0) + a.mvpaBoutMinutes, e.sedentaryBouts = (e.sedentaryBouts ?? 0) + a.sedentaryBouts, e.sedentaryBreaks = (e.sedentaryBreaks ?? 0) + a.sedentaryBreaks, i.total += a.meanSedentaryBoutMinutes * a.sedentaryBouts, e.meanSedentaryBoutMinutes = e.sedentaryBouts > 0 ? i.total / e.sedentaryBouts : 0);
}
async function qa(e) {
	const { file: t, days: n, summaries: i, markersByAnalysisDate: a, sensorNonwearPeriods: r, maskPolicy: s, validDayCriteria: o, cutpointMethods: l, choiAxis: u } = e, c = new Set([...a].filter(([, e]) => g(e)).map(([e]) => e)), d = Number.isFinite(t.epochLengthSeconds) && t.epochLengthSeconds > 0 ? t.epochLengthSeconds : 60, m = 60 / d, p = {
		policy: Ta(s),
		intervals: Ia(a, r)
	}, h = n.map((e) => Aa(e, s, u, d)), f = n.map((e, t) => ({
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
		const o = await Na({
			...i,
			days: [...t]
		}, s), l = 86400 / n, u = await Ea(e.map((e) => e.date), W(s)), c = e.map((e, t) => {
			const n = o.days[t].mask;
			return {
				date: e.date,
				wearMinutes: n.wakeWearMinutes,
				isWeekend: u[t],
				isPartialDay: n.totalEpochs < l
			};
		}), d = await async function(e, t = Ie, n) {
			return W(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
		}(c, a, s);
		if (!d.meetsCriteria) {
			const e = a.requireWeekendDay && !d.hasWeekendValidDay ? ", including a weekend day" : "";
			return {
				dates: /* @__PURE__ */ new Set(),
				shortfall: `${String(d.validDays)} of the required ${String(a.minValidDaysPerParticipant)} valid days${e}`
			};
		}
		const m = await async function(e, t = Ie, n) {
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
		request: p,
		criteria: o,
		scoredDates: c,
		signal: e.signal
	}), y = i.filter((e) => !(s.minimumWakeWearMinutes > 0 && (null == e.validHours || 60 * e.validHours < s.minimumWakeWearMinutes))).filter((e) => null != e.sedentaryMinutes && null != e.lpaMinutes && null != e.mvpaMinutes).filter((e) => !_ || _.has(e.analysisDate)).map((e) => ({
		sedentaryMinutes: e.sedentaryMinutes,
		lpaMinutes: e.lpaMinutes,
		mvpaMinutes: e.mvpaMinutes
	})), v = n.map((e) => !_ || _.has(e.date)), M = [];
	for (let g = 0; g < l.length; g++) {
		e.signal?.throwIfAborted();
		const i = l[g];
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
		const r = await Na({
			...p,
			analysisKind: "count_cutpoint",
			thresholds: Pa(i),
			defaultThresholds: Pa(xe[g]),
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
			const t = await Na({
				...p,
				includeEpochDetails: !0,
				days: [f[o.index]]
			}, e.signal), a = await Ua({
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
			const t = await Re(i.method, d, e.signal);
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
		const i = await Na({
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
		preschoolRf: await k(b(Ca, "classifier"), "preschool_classifier")
	};
}
async function Ka(e = {}) {
	const t = await le(e.dbOverride, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = e.username ?? "anonymous", i = e.maskPolicy ?? ka, a = e.validDayCriteria, r = Ae("ggir_enmo"), s = Ae("mims"), o = Ae("preschool_free_living_rf_3_5"), l = za({
		method: r.method,
		label: r.label,
		requiredSignal: r.requiredSignal,
		sourceLabel: r.signalLabel,
		ruleLabel: "Uses imported GGIR daily sedentary, LPA, and MVPA summaries",
		unavailableAction: "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."
	}, null), u = W(e.signal), c = await Promise.all(xe.map((t) => async function(e, t, n) {
		const i = t[e.method];
		if (!i) return e;
		const a = await Me(i, n);
		if (!a) return e;
		const r = Pa(e);
		return {
			...e,
			ruleLabel: Wa(e, a, JSON.stringify(a) !== JSON.stringify(r)),
			cutpointBands: Fa(a, e.cutpointBands),
			cutpointScaleMax: Math.max(e.cutpointScaleMax ?? 1, ...Object.values(a).filter(Number.isFinite)),
			...a
		};
	}(t, e.cutpointOverrides ?? {}, u))), d = c.map((e, t) => function(e, t) {
		return {
			...za(e, null),
			cutpointThresholds: Pa(e),
			defaultCutpointThresholds: Pa(t),
			cutpointEditable: !0,
			defaultIntensityMinutes: {
				sedentaryMinutes: 0,
				lightMinutes: 0,
				moderateMinutes: 0,
				vigorousMinutes: 0,
				mvpaMinutes: 0
			}
		};
	}(e, xe[t])), m = new Array(c.length).fill(!1), p = [], g = za({
		method: s.method,
		label: s.label,
		requiredSignal: s.requiredSignal,
		sourceLabel: s.signalLabel,
		ruleLabel: "Uses stored MIMS_UNIT epoch values from actours; intensity cutpoints/equating are not applied in this row.",
		unavailableAction: "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values.",
		unavailableStatus: "backend_required"
	}, null);
	g.mimsUnitTotal = 0, g.mimsUnitPerDay = 0;
	const h = za({
		method: o.method,
		label: o.label,
		requiredSignal: o.requiredSignal,
		sourceLabel: o.signalLabel,
		ruleLabel: "Uses actimetric Preschool Wrist Random Forest Free Living Lag-Lead classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
		unavailableAction: "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.",
		unavailableStatus: "backend_required"
	}, null), f = Ae("hildebrand_enmo_wrist_2014"), _ = za({
		method: f.method,
		label: f.label,
		requiredSignal: f.requiredSignal,
		sourceLabel: f.signalLabel,
		ruleLabel: "Hildebrand 2014 non-dominant wrist ENMO (mg) cut-points: MVPA >=201 mg, vigorous >=707 mg; light near ~45 mg. Applied to a calibrated ENMO (mg) epoch signal, never to ActiGraph counts.",
		unavailableAction: "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline; the browser count pipeline does not compute ENMO mg.",
		unavailableStatus: "needs_signal"
	}, null);
	let w = !1, y = !1, v = !1, M = !1;
	const b = _e(), k = c.map(() => ({ total: 0 })), x = { total: 0 };
	for (const I of t) {
		if (e.signal?.throwIfAborted(), !I.id) continue;
		const t = I.id, r = await te(t, e.dbOverride), s = await ie(t, n, e.dbOverride), o = await re(t, e.dbOverride), u = await La({
			db: e.dbOverride ?? null,
			fileId: t,
			kind: "analysis",
			...e.signal ? { signal: e.signal } : {},
			inputs: {
				epochLengthSeconds: I.epochLengthSeconds,
				sourceProfileId: I.sourceProfileId ?? null,
				summaries: r,
				markers: Ba(s),
				sensorNonwearPeriods: o,
				maskPolicy: i,
				validDayCriteria: a ?? null,
				thresholds: c.map(Pa),
				choiAxis: b
			}
		}, async () => qa({
			file: I,
			days: [...(await he(t, e.dbOverride, e.activityDayMemo)).values()],
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
			e.signalSeen && (m[t] = !0), Ha(n, e.totals, i, k[t]), e.previewTrace && !n.previewTrace && (n.previewTrace = e.previewTrace), e.epochMismatch && !n.epochMismatch && (n.epochMismatch = e.epochMismatch);
		}), u.mims && (u.mims.signalSeen && (v = !0), Ha(g, u.mims.totals, i, x)), u.preschoolRf && (u.preschoolRf.signalSeen && (M = !0), Ha(h, u.preschoolRf.totals, i, x));
	}
	for (let I = 0; I < d.length; I++) {
		const e = d[I], t = c[I];
		e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes, 0 === e.totalDays && (e.available = !1, e.status = m[I] ? "ready" : "needs_signal", e.unavailableReason = m[I] ? p.length > 0 ? `Excluded by the valid-days-per-participant rule: ${p.join("; ")}. Change it in Study Settings → valid-day criteria.` : `No local ${e.sourceLabel.toLowerCase()} days meet the minimum wake-wear rule.` : w ? `No local ${e.sourceLabel.toLowerCase()} days are available.` : "No local activity epochs are available.", e.nextStepLabel = t.unavailableAction), Ga(e);
	}
	l.moderateMinutes = l.mvpaMinutes, Ga(l), 0 === l.totalDays && (l.available = !1, l.status = y ? "ready" : "needs_signal", l.unavailableReason = y ? "No local GGIR daily summaries meet the current inclusion rules." : "No local GGIR daily summaries are available. Import raw/5-second-capable files to populate ENMO summaries.", l.nextStepLabel = "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."), g.totalDays > 0 ? (g.available = !0, g.status = "ready", g.unavailableReason = null, g.nextStepLabel = null, g.mimsUnitPerDay = (g.mimsUnitTotal ?? 0) / g.totalDays) : (g.available = !1, g.status = v ? "ready" : "backend_required", g.unavailableReason = v ? "No stored MIMS_UNIT epoch days meet the current inclusion rules." : "No MIMS_UNIT epoch values are stored in this workspace yet. This becomes ready when the actours MIMS backend/WASM build computes and stores MIMS_UNIT epochs.", g.nextStepLabel = "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values."), Ga(_), _.available = !1, _.status = "needs_signal", _.unavailableReason = "No calibrated ENMO (mg) epoch stream is available in this workspace. ENMO (mg) is a raw/GGIR-derived signal; the browser count pipeline does not produce it, so this method cannot classify counts against Hildebrand mg thresholds.", _.nextStepLabel = "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline.", Ga(h), h.totalDays > 0 ? (h.available = !0, h.status = "ready", h.unavailableReason = null, h.nextStepLabel = null) : (h.available = !1, h.status = M ? "ready" : "backend_required", h.unavailableReason = M ? "No stored preschool wrist RF class days meet the current inclusion rules." : "No actimetric-compatible preschool wrist RF class epochs are stored in this workspace yet. This becomes ready when actours/WASM computes 15 s classes for 3-5 year-old wrist data.", h.nextStepLabel = "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.");
	const S = t.map((e) => e.sourceProfileId);
	return [
		l,
		h,
		...d,
		_,
		g
	].filter((e) => ke(e.method, S));
}
const Ya = [
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
function Ja(e, t) {
	if (!t) return !0;
	const [n, i] = t;
	return e >= n && e <= i;
}
function Za(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function Qa(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function Xa(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
function er(e) {
	const t = be.find((t) => t.method === e);
	if (t) return {
		family: t.family,
		requiredSignal: t.requiredSignal,
		computationOwner: t.backendOwner ?? "browser_workspace",
		frontendComputesMetric: t.frontendComputesMetric,
		statusWhenMissing: t.statusWhenMissing
	};
	const n = Ae(e), i = "ready" === n.statusWhenMissing ? "needs_signal" : n.statusWhenMissing;
	return {
		family: n.family,
		requiredSignal: n.requiredSignal,
		computationOwner: n.backendDependency ?? "browser_workspace",
		frontendComputesMetric: "count_cutpoint" === n.family,
		statusWhenMissing: i
	};
}
function tr(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function nr(e, t, n) {
	return "default" === n ? e.ruleLabel : t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, non-sedentary >=${String(t.lightMin)} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, MVPA >=${String(t.moderateMin)} counts/min` : `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, moderate ${String(t.moderateMin)}-${String(t.vigorousMin - 1)}, vigorous >=${String(t.vigorousMin)} counts/min`;
}
function ir(e) {
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
async function ar(e, t, n = {}, i) {
	const a = await le(i), r = (e.length > 0 ? a.filter((t) => null != t.id && e.includes(t.id)) : a).sort((e, t) => e.filename.localeCompare(t.filename)), s = [], o = n.username ?? "anonymous", l = n.maskPolicy ?? ka, u = n.choiAxis ?? _e(), c = ba(l), d = n.cutpointOverrides, m = n.cutpointPresetNames, p = W(n.signal), g = await Promise.all(xe.map((e) => async function(e, t, n, i) {
		const a = t?.[e.method], r = a ? await Me(a, i) : null;
		return r ? {
			thresholds: r,
			source: "custom",
			presetName: n?.[e.method] ?? ""
		} : {
			thresholds: tr(e),
			source: "default",
			presetName: ""
		};
	}(e, d, m, p))), h = n.inclusionRulePresetName ?? "", f = n.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), _ = Ae("ggir_enmo"), w = Ae("mims"), y = Ae("preschool_free_living_rf_3_5"), v = er("ggir_enmo"), M = er("mims"), b = er("preschool_free_living_rf_3_5");
	for (const k of r) {
		if (n.signal?.throwIfAborted(), !k.id) continue;
		if (!0 === k.ggirSummariesNeedRecompute) throw new Error(`${k.filename}: its GGIR summaries were not recomputed for the current study settings. In Study settings, run Rescore (offered for every file whose summaries are refused) before exporting.`);
		const e = k.participantId ?? "", a = Number.isFinite(k.epochLengthSeconds) && k.epochLengthSeconds > 0 ? k.epochLengthSeconds : 60, r = await te(k.id, i);
		for (const n of r) Ja(n.analysisDate, t) && s.push({
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
		const d = [...(await he(k.id, i, n.activityDayMemo)).entries()].filter(([e]) => Ja(e, t)).sort(([e], [t]) => e.localeCompare(t)).map(([, e]) => e), m = await ie(k.id, o, i), p = await re(k.id, i), x = {
			policy: Ta(l),
			intervals: Ia(m, p)
		}, S = d.map((e) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: a,
			series: Aa(e, l, u, a)
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
			const r = await Na({
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
		} : null, T = [], R = xe.map((e) => null !== Te(e.method, k.sourceProfileId));
		for (const [t, n] of xe.entries()) R[t] ? T.push([]) : T.push(await I((e, t) => {
			const i = new Float64Array("axisY" === n.axis ? e.axisY : e.vectorMagnitude);
			return i.length > 0 && i.length === S[t].timestamps.length ? {
				...S[t],
				values: i
			} : null;
		}, {
			analysisKind: "count_cutpoint",
			thresholds: g[t].thresholds
		}));
		const N = await I((e, t) => A(Ca(e), "classifier", e, t), { analysisKind: "preschool_classifier" }), E = await I((e, t) => A(e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output", e, t), { analysisKind: "mims_volume" }), $ = await Promise.all(xe.map((e) => Re(e.method, a, n.signal)));
		for (const [t, n] of d.entries()) {
			const i = n.date;
			for (const [n, d] of xe.entries()) {
				if (R[n]) continue;
				const r = g[n], u = nr(d, r.thresholds, r.source), m = er(d.method), p = $[n], _ = ir(T[n][t]);
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
			const r = ir(N[t]);
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
			const u = ir(E[t]);
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
Ya.join(","), xe.length;
var rr = n({
	editsFromMarkers: () => gr,
	getGgirMarkerInputs: () => hr,
	ggirNightRecords: () => pr,
	hasGgirRecomputeFailure: () => cr,
	mergeGgirSleepMarkers: () => mr,
	recomputeGgirResults: () => wr,
	recoverPendingGgirRecomputes: () => yr,
	reviewGgirResultsForMarkers: () => vr,
	scheduleGgirRecompute: () => _r
});
const sr = new EventTarget(), or = /* @__PURE__ */ new WeakMap(), lr = 800, ur = "Update GGIR review";
function cr(e, t, n) {
	return N.getState().jobs[`${n.name}:${fr(e, t)}`]?.status === R.FAILED;
}
function dr(e, t, n, i, a) {
	if (a?.aborted || function(e) {
		return e instanceof Error && e.name === m.errnames.DatabaseClosed;
	}(i)) return;
	const r = fr(e, t), s = `${n.name}:${r}`, o = N.getState();
	o.jobs[s]?.controller.signal.aborted || o.jobs[s]?.status === R.ELSEWHERE || (o.update(s, {
		id: s,
		key: r,
		workspaceId: n.name,
		kind: A.GGIR_RECOMPUTE,
		label: ur,
		controller: o.jobs[s]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: R.FAILED
	}), n.isOpen() && O() === n && sr.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function mr(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function pr(e, t, n, i = [], a) {
	const r = se([...n.values()].flat(), !0), s = r?.algorithm ?? Q(t), o = r?.detectionRule ?? null, u = /* @__PURE__ */ new Map();
	for (const [l, m] of n) {
		const e = se(m, !0);
		e && u.set(l, [{
			...e,
			algorithm: s,
			detectionRule: o
		}]);
	}
	const c = X(t), d = c.length ? await W(a).ggirLabelsToStoredMs(Float64Array.from(c.flatMap((e) => [e.onsetMs, e.wakeMs])), i) : [];
	for (const [m, p] of c.entries()) {
		const t = u.get(p.nightDate)?.[0], n = H(p, t);
		"scored" !== n.kind && "invalid" !== n.kind ? u.set(p.nightDate, [{
			fileId: e,
			date: p.nightDate,
			username: U,
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
			sleepMarkers: mr({
				markerType: l.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: d[2 * m] / 1e3,
				offsetTimestamp: d[2 * m + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : u.set(p.nightDate, t ? [t] : []);
	}
	return u;
}
async function gr(e, t, n = [], i) {
	const a = X(e).flatMap((e) => {
		const n = H(e, t.get(e.nightDate));
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
async function hr(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [i, a] = await Promise.all([ce(e, t, n), ee(e, n)]), r = new Map([...i].flatMap(([e, t]) => {
			const n = se(t, !0);
			return n ? [[e, n]] : [];
		})), s = a?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([s ?? [], [...r].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				H(void 0, t)
			])]),
			markers: r,
			clockSteps: s,
			bundleRevision: a?.ggirBundleRevision
		};
	});
}
function fr(e, t) {
	return `${A.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function _r(e, t, n, i) {
	if (!n.isOpen() || O() !== n || i?.aborted) return;
	let a = or.get(n);
	a || (a = /* @__PURE__ */ new Map(), or.set(n, a));
	const r = fr(e, t);
	clearTimeout(a.get(r)), a.set(r, setTimeout(() => {
		a.delete(r), n.files.get(e).then((a) => {
			if (a?.ggirBundleRevision && n.isOpen() && O() === n && !i?.aborted) return wr(e, t, n, i);
		}).catch((a) => {
			i?.aborted || a instanceof DOMException && "AbortError" === a.name || (dr(e, t, n, a, i), n.isOpen() && O() === n && (console.error("[ggir-results] recompute failed."), ge("error", "GGIR results recompute failed", pe(a))));
		});
	}, lr));
}
function wr(e, t, n, i, a = !0) {
	const r = (s, o = i) => F({
		kind: A.GGIR_RECOMPUTE,
		key: fr(e, t),
		label: ur,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (i) => {
			i.signal.throwIfAborted();
			const o = await async function(e, t, n, i, a) {
				if (i.throwIfAborted(), !n.isOpen() || O() !== n) return null;
				const { markerInputs: r, markers: s, clockSteps: o, bundleRevision: l } = await hr(e, t, n);
				if (!l) return null;
				const u = await n.ggirScorerReviews.get([e, t]);
				if (!n.isOpen() || O() !== n) return null;
				if (i.throwIfAborted(), u?.markerInputs === r && u.bundleRevision === l) return a && sr.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), u.current ?? null;
				const c = await n.ggirResultsBundles.get(e);
				if (!c) return null;
				const d = await gr(c.imported, s, o, i);
				if (!n.isOpen() || O() !== n) return null;
				const m = u?.bundleRevision === l && JSON.stringify(u.edits) === JSON.stringify(d) ? u.current : (await vr(c, s, o, d, i)).current;
				i.throwIfAborted();
				const p = (/* @__PURE__ */ new Date()).toISOString();
				if (!n.isOpen() || O() !== n) return null;
				const g = await j(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!n.isOpen() || O() !== n) return null;
					const a = await hr(e, t, n);
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
				return g ? (sr.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), i.throwIfAborted(), m ?? c.imported) : (i.throwIfAborted(), !1 !== g && null);
			}(e, t, n, i.signal, a);
			return i.signal.throwIfAborted(), !1 !== o ? o : (s < 2 && r(s + 1, i.signal).catch((a) => dr(e, t, n, a, i.signal)), null);
		}
	});
	return r(0);
}
function yr(e, t) {
	return F({
		kind: A.GGIR_RECOVERY,
		key: A.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const i = () => !t.signal.aborted && e.isOpen() && O() === e;
			try {
				if (!i()) return;
				const r = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: s } = await import("./local-data-source-Bl33hENL.js").then((e) => e.n);
				for (const o of r) {
					if (t.signal.throwIfAborted(), !i()) return;
					try {
						const [r] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), s(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), u = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...r.map((e) => e.scorer)]);
						u.delete(U);
						for (const s of u) {
							if (!i()) return;
							try {
								await wr(o, s, e, t.signal, cr(o, s, e));
							} catch (a) {
								n = !0, dr(o, s, e, a, t.signal);
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
				const a = Object.values(N.getState().jobs).filter((t) => T(t) && t.workspaceId === e.name && t.kind === A.GGIR_RECOMPUTE && t.status === R.FAILED);
				for (const t of a) {
					const a = t.key.slice(A.GGIR_RECOMPUTE.length + 1);
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
							i() && (0 === n || 0 === a && 0 === r) && (N.getState().dismiss(t.id), sr.dispatchEvent(new CustomEvent("updated", { detail: {
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
async function vr(e, t, n = [], i, a) {
	const r = i ?? await gr(e.imported, t, n, a);
	let s;
	if (a?.throwIfAborted(), r.length > 0 && e.ms2 && e.ms3) {
		const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), i = t(e.ms3), o = t(e.ms4), l = t(e.ms5), c = t(e.sleeplogRData);
		s = J(await P(a, (t) => t.reviewGgirResults({
			part1: new Uint8Array(e.part1),
			configCsv: e.configCsv,
			recordingId: u(e.recordingFile),
			...n ? { ms2: n } : {},
			...i ? { ms3: i } : {},
			...o ? { ms4: o } : {},
			...l ? { ms5: l } : {},
			...c ? { sleeplogRData: c } : {},
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
const Mr = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], br = [
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
], kr = [
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
], xr = [
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
], Sr = {
	files: [
		...Mr,
		"ggirTimezone",
		"recording",
		"ggirClockSteps"
	],
	markers: br,
	activityDays: kr,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: xr
}, Ir = {
	files: [...Mr, "ggirClockSteps"],
	markers: br,
	activityDays: kr,
	ggirResultsBundles: xr
}, Ar = {
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
}, Rr = {
	sleep: Sr,
	nonwear: Sr,
	summary: Sr,
	wide: Sr,
	circadian: {
		files: Mr,
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
	ggirReport: Ir,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: br,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: Mr,
		markers: br,
		actiwareFileData: [
			"fileId",
			"actiwareIntervals",
			"actiwareStatistics",
			"actiwareStatisticsNeedsRecompute"
		],
		actiwareStatisticsInputs: ["fileId", "input"]
	},
	actiwareSleepWake: {
		files: Mr,
		markers: br,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: Ar,
	audit: Tr,
	ggirResults: {
		...Ar,
		...Sr,
		...Ir,
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
			$
		]
	}
}, Nr = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap();
function $r(e, t, n, i) {
	for (let a = 0; a < n.byteLength;) {
		const r = n.subarray(a, a + kn), s = e[t](r, { at: i + a });
		if (!Number.isInteger(s) || s <= 0 || s > r.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		a += s;
	}
}
function Or(e) {
	if (!e || "object" != typeof e) return e;
	const t = Er.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return $r(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(Or) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Or(t)])) : structuredClone(e);
}
function Cr(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(Cr), Object.freeze(e)), e;
}
var Br = class extends Error {};
function Dr(e, t, n) {
	const i = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new Br(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (i(t), Reflect.get(e, t, n)),
		has: (e, t) => (i(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (i(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function Lr(e, t, n = []) {
	const i = Nr.get(e);
	if (!i) throw new Br("Export requires a captured input snapshot");
	const a = Object.entries(Rr).find(([, e]) => e === t)?.[0];
	if (!a) throw new Br("Export producer has no registered input declaration");
	const r = {};
	for (const [s, o] of Object.entries(t)) {
		const e = i[s].filter((e) => !n.length || "studySettings" === s || n.includes("files" === s ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const i of o.filter((e) => e in t)) Object.defineProperty(n, i, {
				enumerable: !0,
				get: () => Cr(Or(t[i]))
			});
			return Dr(n, o, `${a}: undeclared field ${s}.`);
		});
		Object.assign(r, { [s]: Object.freeze(e) });
	}
	return Dr(r, Object.keys(t), `${a}: undeclared table `);
}
function Pr(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	for (const a of e.markers) {
		if (a.fileId !== t || a.username !== n) continue;
		const e = z(a), r = i.get(a.date) ?? [];
		r.push(e), i.set(a.date, r);
	}
	return i;
}
function Fr(e, t, n) {
	return new Map([...Pr(e, t, n)].flatMap(([e, t]) => {
		const n = se(t.filter(g));
		return n ? [[e, n]] : [];
	}));
}
const Wr = /* @__PURE__ */ new WeakMap();
function jr(e, t, n, i) {
	let a = Wr.get(e);
	a || (a = /* @__PURE__ */ new Map(), Wr.set(e, a));
	const r = JSON.stringify([t, n]);
	let s = a.get(r);
	return s || (a.clear(), s = async function(e, t, n, i) {
		const a = Lr(e, Rr.ggirReport, [t]), r = a.files.find((e) => e.id === t), s = a.ggirResultsBundles.find((e) => e.fileId === t), o = Pr(a, t, n), l = s ? await pr(t, s.imported, o, r.ggirClockSteps, i) : o, u = new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), c = s ? await vr(s, u, r.ggirClockSteps, void 0, i) : void 0;
		return {
			markersByAlgo: l,
			selected: u,
			bundle: c ? await Ur(c, i) : void 0
		};
	}(e, t, n, i), a.set(r, s), s.catch(() => {
		a.get(r) === s && a.delete(r);
	})), s;
}
async function Ur(e, t) {
	const { ggirCell: n, ggirNum: i } = await import("./ggir-results-types-WB8axvb-.js").then((e) => e.i), a = e.part2Reports?.["part2_daysummary.csv"], r = e.cleanedNightsCsv ? await W(t).readGgirReportCsv(e.cleanedNightsCsv, e.configCsv) : void 0, s = /* @__PURE__ */ new Map();
	if (a) for (let u = 0; u < a.rows; u++) {
		const e = n(a, k.ggir_id.header, u), t = ei(n(a, k.ggir_calendar_date.header, u));
		if (null == e || !t) continue;
		const i = JSON.stringify([String(e), t]);
		s.set(i, s.has(i) ? null : u);
	}
	const o = ti(e.imported, "nights"), l = async (e) => {
		const l = e.nights, u = await Promise.all(Array.from({ length: l.rows }, async (u, c) => {
			const d = n(l, k.ggir_id.header, c), m = s.get(JSON.stringify([null == d ? null : String(d), o(l, c, !1)])), p = a && null != m ? n(a, k.ggir_day_valid_hours.header, m) : null, g = a && null != m ? n(a, k.ggir_day_hours.header, m) : null, h = a && null != m ? i(a, k.ggir_day_valid_hours.header, m) : null, f = a && null != m ? i(a, k.ggir_day_hours.header, m) : null, _ = null != h && null != f ? await W(t).ggirDayValidFraction(h, f) : null, w = i(l, k.ggir_night.header, c), y = Array.from({ length: e.days.rows }, (e, t) => t).find((t) => "WW" === n(e.days, "window", t) && i(e.days, "night_number", t) === w), v = r ? Array.from({ length: r.rows }, (e, t) => t).find((e) => String(n(r, k.ggir_id.header, e)) === String(d) && i(r, k.ggir_night.header, e) === w) : void 0, M = {
				ggir_nonwear_perc_spt: e.nightRecomputed[c] ? void 0 === y ? null : n(e.days, k.ggir_nonwear_perc_spt.header, y) : l.columns.includes(k.ggir_nonwear_perc_spt.header) ? n(l, k.ggir_nonwear_perc_spt.header, c) : r?.columns.includes(k.ggir_nonwear_perc_spt.header) && void 0 !== v ? n(r, k.ggir_nonwear_perc_spt.header, v) : void 0 === y ? null : n(e.days, k.ggir_nonwear_perc_spt.header, y),
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
		})), c = x.ggir_review_night_extension, d = [.../* @__PURE__ */ new Set([
			...l.columns,
			...c.map((e) => k[e].header),
			...c.map((e) => k[e].header + "_missing_reason")
		])], m = d.map((e) => {
			const t = c.find((t) => k[t].header + "_missing_reason" === e);
			if (t) return u.map((e) => e.reasons[t] ?? null);
			const n = c.find((t) => k[t].header === e);
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
function zr(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function Gr(e) {
	return Lr(e, Rr.ggirResults).studySettings.flatMap((e) => oe(e).map((e) => ({
		file: "sleep_export.csv",
		row: 0,
		key: e.filename,
		column: `${e.category}: ${e.reason}`,
		reason: "not_computed_for_export"
	})));
}
const Vr = "not included", Hr = "included if produced";
async function qr(e, t) {
	return e.transaction("r", [
		e.files,
		e.markers,
		e.sensorNonwear,
		e.dailyGgirSummaries
	], async () => {
		const n = await le(e, t.length ? { onlyFileIds: t } : void 0), i = n.map((e) => e.id), [a, r, s] = await Promise.all([
			e.markers.where("fileId").anyOf(i).toArray(),
			e.sensorNonwear.where("fileId").anyOf(i).toArray(),
			e.dailyGgirSummaries.where("fileId").anyOf(i).toArray()
		]);
		return Y({
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
async function Kr(e, t, n, i = {}) {
	const { signal: a, producers: r = {} } = i;
	a?.throwIfAborted();
	const s = await qr(e, t.fileIds), o = await Yr(null, "checking the export inputs", () => async function(e, t = O(), n = {}) {
		const i = /* @__PURE__ */ new Map();
		for (const d of (n.readPlan ?? Object.keys(Rr)).map((e) => Rr[e])) for (const [e, t] of Object.entries(d)) {
			const n = e;
			i.set(n, /* @__PURE__ */ new Set([...i.get(n) ?? [], ...t]));
		}
		if (!i.size) {
			const e = Object.freeze({ files: Object.freeze([]) });
			return Nr.set(e, {}), e;
		}
		let a = 268435456;
		const r = (e) => {
			if (e instanceof ArrayBuffer ? a -= e.byteLength : "string" == typeof e ? a -= 2 * e.length : e && "object" == typeof e ? Object.values(e).forEach(r) : a -= 8, a < 0) throw new Error("Export snapshot exceeds 256 MiB. Select fewer recordings or a narrower workspace before exporting.");
		};
		let s = 0;
		const o = (e) => {
			if (n.binaryStore && (e instanceof ArrayBuffer || ArrayBuffer.isView(e))) {
				const t = e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), i = Object.freeze({}), a = e instanceof ArrayBuffer ? null : e.constructor;
				return $r(n.binaryStore, "write", t, s), Er.set(i, {
					at: s,
					length: t.byteLength,
					store: n.binaryStore,
					restore: a ? (e) => new a(e) : (e) => e
				}), s += t.byteLength, r(0), i;
			}
			return Array.isArray(e) ? e.map(o) : e && "object" == typeof e && Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, o(t)])) : (r(e), e);
		}, l = await t.transaction("r", [...i.keys()].map((e) => t[e]), async () => {
			const n = i.has("files") ? await le(t, e.length ? { onlyFileIds: e } : void 0) : [], a = new Set(n.flatMap((e) => e.id ? [e.id] : [])), r = {};
			return await Promise.all([...i].map(async ([e, i]) => {
				const s = (e) => Object.fromEntries([...i].filter((t) => t in e).map((t) => [t, o(e[t])]));
				if (r[e] = [], "files" === e) return void (r[e] = n.map((e) => s(e)));
				const l = "diaryEntries" === e ? t.diaryEntries : de(t, e);
				await ("studySettings" === e ? l.where("key").equals("study") : l.where("fileId").anyOf([...a])).each((t) => {
					r[e].push(s(t));
				});
			})), r;
		}), u = Object.freeze({ files: Cr((l.files ?? []).map((e) => Object.fromEntries(Mr.map((t) => [t, Or(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) }), c = new Set((l.ggirResultsBundles ?? []).map((e) => e.fileId));
		return l.markers = (l.markers ?? []).map((e) => c.has(e.fileId) && "invalid" === H(void 0, z(e)).kind ? {
			...e,
			isInvalidNight: !0
		} : e), Nr.set(u, l), u;
	}(t.fileIds, e, i)), u = function(e, t, n, i) {
		const a = [], r = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = [], u = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
		async function* m(e, t) {
			for (const n of a) i?.throwIfAborted(), yield n.entries(t, s, e).then((t) => t[e]);
		}
		function* p() {
			const e = gi([...o.keys()]);
			for (const [t, n] of o) s.set(e.get(t), n);
			for (const t of Object.values(Xn)) {
				const e = s.get(t);
				e && s.set(t, [
					...e.filter((e) => !e.endsWith("_missing_reason") && !Zn.includes(e)),
					...Zn,
					...e.filter((e) => e.endsWith("_missing_reason") && !Zn.some((t) => e === t + "_missing_reason")),
					...Zn.map((e) => e + "_missing_reason")
				]);
			}
			for (const [t, n] of s) yield {
				name: t,
				chunks: async function* () {
					yield Mi(n.map(f).join(",") + "\n");
					for await (const n of m(t, e)) {
						if (!n) continue;
						const e = new TextDecoder().decode(n), t = d(e).records[0], i = Mi(e.slice(t.text.length + 1));
						for (let n = 0; n < i.byteLength; n += kn) yield i.subarray(n, n + kn);
					}
				}()
			};
			l.length && (yield {
				name: di,
				chunks: async function* () {
					yield* vi(function(e, t) {
						const n = e.map((e) => e.key), i = e.reduce((e, t) => e + t.charts, 0);
						return `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${ci(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${ci(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${i} chart${1 !== i ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${ci(e[n].pid)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`;
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
					for (const e of yi) yield* vi(e);
				}()
			});
		}
		return {
			addFiles: async (m) => {
				for await (const p of async function* (a) {
					for (const r of a) {
						i?.throwIfAborted();
						const a = ki({
							username: e,
							dateRange: t,
							snapshot: n
						}, {
							signal: i,
							charts: !0
						});
						yield a.addFiles([r]).then(() => a);
					}
				}(m)) {
					for (const [t, n] of p.chartPidData) {
						l.push({
							key: t,
							pid: n.pid,
							charts: n.algos.length
						});
						const e = [];
						for (const i of wi(r.length, t, n, u)) e.push(...vi(i));
						r.push({
							blob: new Blob(e),
							lengths: e.map((e) => e.byteLength)
						});
					}
					p.chartPidData.clear();
					const e = gi([...p.csvLinesByAlgo.keys()]);
					for (const [t, n] of p.csvLinesByAlgo) o.set(t, c(n[0]));
					for (const [t, n] of Object.entries(await p.entries())) {
						if ([...e.values()].includes(t)) continue;
						const i = c(d(new TextDecoder().decode(n)).records[0].text);
						s.set(t, [.../* @__PURE__ */ new Set([...s.get(t) ?? [], ...i])]);
					}
					a.push(p);
				}
			},
			entries: async () => [...p()].reduce(async (e, t) => {
				const n = await e, i = [];
				for await (const a of t.chunks) i.push(a);
				return n[t.name] = fe(i), n;
			}, Promise.resolve({})),
			streamEntries: p
		};
	}(t.username, t.dateRange, o, a), m = [];
	for (const l of o.files) {
		const e = m.at(-1);
		e?.[0]?.filename === l.filename ? e.push(l) : m.push([l]);
	}
	const p = [], g = [], h = [];
	let _ = !1;
	const w = t.manifest.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString();
	for (const [l, c] of m.entries()) {
		a?.throwIfAborted(), i.progress?.(l, m.length);
		const n = c.map((e) => e.id), r = /* @__PURE__ */ new Map();
		try {
			const e = await At(o, {
				fileIds: n,
				dateRange: t.dateRange,
				signal: a
			});
			for (const t of e.daySummaries) r.set(`${t.fileId}|${t.date}`, {
				l5Hour: t.l5Hour,
				m10Hour: t.m10Hour
			});
		} catch ($) {
			if ($ instanceof Br) throw $;
			if (a?.throwIfAborted(), _ = !0, $ instanceof DOMException && "AbortError" === $.name) throw $;
		}
		p.push(await Yr(c[0].filename, "computing its sleep rows", () => Di(n, t.username, t.dateRange, r, t.studyId, o, a))), await Yr(c[0].filename, "drawing its visual report", () => u.addFiles(c)), g.push(...await ar(n, t.dateRange, {
			username: t.username,
			cutpointOverrides: t.physicalActivity.cutpointOverrides,
			maskPolicy: t.physicalActivity.maskPolicy,
			choiAxis: t.physicalActivity.choiAxis,
			exportedAt: w,
			...a ? { signal: a } : {}
		}, e)), h.push(...await la(n, t.dateRange, o, t.username, a));
	}
	if (await qr(e, t.fileIds) !== s) throw new bn(null, "computing physical activity, because its inputs changed during the export");
	a?.throwIfAborted();
	const y = function(e) {
		return {
			sleepRows: e.flatMap((e) => e.sleepRows),
			nonwearRows: e.flatMap((e) => e.nonwearRows),
			summaryRows: e.flatMap((e) => e.summaryRows),
			degradations: e.flatMap((e) => e.degradations).slice(0, 1)
		};
	}(p), v = await async function(e, t, n, i, a) {
		a?.throwIfAborted();
		const r = Lr(n, Rr.actiwareInterval, e), s = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => r.actiwareFileData.find((t) => t.fileId === e.id));
		return (await Promise.all(s.map(async (e, n) => {
			a?.throwIfAborted();
			const s = Fr(r, e.id, i), l = r.actiwareStatisticsInputs.find((t) => t.fileId === e.id), u = new Set(s.keys()), { actiwareStatisticsForScoredMarker: c } = await import("./local-data-source-Bl33hENL.js").then((e) => e.t);
			a?.throwIfAborted();
			const d = await c(o[n] ?? {}, l?.input, s, (e) => W(a).actiwareIntervalStatistics(e), a);
			a?.throwIfAborted();
			const m = await async function(e, t, n) {
				const i = (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), a = e.actiwareStatistics ?? [], r = await Vt([...i.map((e) => e.startTimestamp), ...a.map((e) => e.startTimestamp)], W(n)), s = /* @__PURE__ */ new Set(), o = i.map((t) => {
					const n = a.findIndex((e, n) => !s.has(n) && e.kind === t.kind && da(e.startTimestamp, t.startTimestamp) && da(e.endTimestamp, t.endTimestamp)), i = r(t.startTimestamp), o = n >= 0 ? a[n] ?? null : null;
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
	}(t.fileIds, t.dateRange, o, t.username, a), M = {}, b = function(e) {
		const t = Lr(e, Rr.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(o);
	if (b && (M["audit_log.jsonl"] = b), r.ggirResults) {
		const e = await r.ggirResults(Lr(o, Rr.ggirResults), a);
		for (const [t, n] of Object.entries(e)) {
			if (t in M) throw new Error(`${Sn}${t}`);
			M[t] = n;
		}
	}
	const x = Lr(o, Rr.actiwareSleepWake);
	let S = 0;
	for (const l of x.files) {
		const e = x.actiwareFileData.find((e) => e.fileId === l.id)?.actiwareSleepWake;
		e && (S += await fa(e, t.dateRange, new Set(Fr(x, l.id, t.username).keys()), W(a)));
	}
	const I = Lr(o, Rr.manifest), A = Object.fromEntries(y.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	_ ||= y.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const T = [..._ ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...y.degradations], R = await Yr(null, "reading saved GGIR source provenance", () => async function(e, t = W()) {
		return Object.fromEntries(await Promise.all(e.map(async (e) => {
			const [n, i] = await Promise.all([t.ggirAppConfigSummary(e.configCsv, !1), t.ggirNonwearApproach(e.configCsv)]);
			return [String(e.fileId), {
				configGgirVersion: n.configGgirVersion,
				nonwearApproach: i ?? null
			}];
		})));
	}(I.ggirResultsBundles, W(a))), N = [...u.streamEntries()], E = await async function(e) {
		if (!navigator.storage?.getDirectory) throw new Error("Streaming export requires temporary workspace storage (OPFS).");
		const t = await (await (await navigator.storage.getDirectory()).getDirectoryHandle(Mn, { create: !0 })).getDirectoryHandle(e.scratchId, { create: !0 }), n = await t.getFileHandle(Hn, { create: !0 }), i = await t.getFileHandle("bundle.zip", { create: !0 }), a = new CompressionStream("gzip"), r = a.readable.pipeTo(await n.createWritable());
		r.catch(() => {});
		const s = a.writable.getWriter(), o = await i.createWritable();
		let u = [], m = 0, p = e.artifacts.importRefusalReasons?.length ?? 0;
		const g = [], h = new kt((e, t) => {
			if (e) throw e;
			u.push(t);
		}), _ = async (e = 0) => {
			m = Math.max(m, e + u.reduce((e, t) => e + t.byteLength, 0));
			for (const t of u) await o.write(t);
			u = [];
		}, w = /* @__PURE__ */ new Set(), y = async (t, n) => {
			if (w.has(t)) throw new Error(`${Sn}${t}`);
			w.add(t);
			const i = new bt(t, { level: 1 }), a = new B();
			let r = 0;
			h.add(i);
			for await (const s of n) for (let t = 0; t < s.byteLength; t += ya) {
				e.signal?.throwIfAborted();
				const n = s.subarray(t, t + ya);
				a.update(n), i.push(n, !1), r += n.byteLength, await _(s.byteLength);
			}
			i.push(/* @__PURE__ */ new Uint8Array(), !0), await _(), g.push({
				name: t,
				contentHash: C(a.finalize()),
				byteLength: r
			});
		};
		try {
			await s.write(new TextEncoder().encode(qn(e.artifacts.importRefusalReasons ?? [])));
			const t = function(e) {
				const t = e.artifacts ?? null, n = t ? null : e.planned ?? null, i = e.columns, a = t ? t.sleepRows.length : n?.sleepRows ?? null, r = t ? t.sleepRows.filter((e) => e.markerType === l.MAIN_SLEEP).length : n?.mainSleepRows ?? null, s = t ? Yi(t.sleepRows).size : n?.wideRows ?? null, o = t ? t.summaryRows.length : n?.summaryRows ?? null, u = t ? t.nonwearRows.length : n?.nonwearRows ?? null, c = t ? t.physicalActivityRows.length : n?.activityRows ?? null, m = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : n?.activityDates ?? null, p = t ? t.eventMarkerRows?.length ?? 0 : n?.eventMarkerRows ?? null, g = t ? t.actiwareIntervalRows?.length ?? 0 : n?.actiwareIntervalRows ?? null, h = t ? t.actiwareSleepWakeCsv?.rows ?? 0 : n?.actiwareSleepWakeRows ?? null, _ = n?.actogramFiles ?? null, w = t ? Object.keys(t.ggirEntries) : null, y = (w ? w.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
					const n = Math.max(0, d(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
					return {
						name: e,
						include: n > 0,
						rows: n
					};
				}) : n ? [...gi([...n.part4Rows.keys()])].map(([e, t]) => ({
					name: t,
					include: n.ggirMainSleepGroupKeys.includes(e),
					rows: n.part4Rows.get(e) ?? null
				})) : []).sort((e, t) => e.name.localeCompare(t.name)), v = w ? w.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [di, ...n?.ggirReviewEntries ?? []], M = (e) => null == e ? null : e > 0, b = (n, a, r) => {
					const s = null == a ? "unknown" : a ? "included" : "not_included";
					return "included" !== s ? {
						name: n,
						state: s,
						rows: null,
						detail: "unknown" === s ? r.detail : Vr,
						estimatedBytes: 0,
						write: null
					} : {
						name: n,
						state: s,
						rows: r.rows,
						detail: r.detail,
						estimatedBytes: r.estimatedBytes ?? ((r.rows ?? 0) + 1) * (r.columns ?? i) * 12,
						write: t ? () => r.encode(t) : null,
						...t && (r.chunkField || r.wide) ? { batches: function* () {
							if (r.wide) {
								const e = Ji(t.sleepRows, !0), n = e.next().value;
								for (const t of e) yield {
									bytes: Mi(n + "\n" + t),
									rows: 1
								};
							} else if (r.chunkField) {
								const n = t[r.chunkField] ?? [];
								for (let i = 0; i < n.length; i += 256) {
									const a = {
										...t,
										[r.chunkField]: n.slice(i, i + 256)
									}, s = !e.selectedColumns?.length || "sleepRows" !== r.chunkField && "nonwearRows" !== r.chunkField ? void 0 : ta(a[r.chunkField], void 0, !0);
									yield {
										bytes: r.encode(a),
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
						detail: null == a ? Hr : `${String(a)} rows · ${String(i)} columns`,
						chunkField: "sleepRows",
						encode: (t) => Mi(ta(t.sleepRows, e.selectedColumns ?? void 0, !0))
					}),
					b("sleep_export_wide.csv", !!e.includeWideFormat && M(s ?? r), {
						rows: s,
						detail: null == s ? Hr : `${String(s)} participant group ${1 === s ? "row" : "rows"}`,
						wide: !0,
						encode: (e) => Mi(function(e, t = !1) {
							return [...Ji(e, t)].join("\n");
						}(e.sleepRows, !0))
					}),
					b("summary_export.csv", M(o ?? r), {
						rows: o,
						detail: null == o ? Hr : `${String(o)} participant ${1 === o ? "row" : "rows"}`,
						chunkField: "summaryRows",
						encode: (e) => Mi(function(e, t = !1) {
							const n = ea("summary_csv", e, ji, void 0, t), i = [
								"summary_mean_temperature_c",
								"sleep_regularity_index",
								...Object.values(Wi).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
							];
							return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? d(n).records.map((t, n) => 0 === n ? t.text + "," + i.map((e) => k[e].header + "_missing_reason").join(",") : t.text + "," + i.map((t) => {
								const i = e[n - 1];
								return "summary_mean_temperature_c" === t ? null == i.meanTemperature ? i.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? i.sleepRegularityMissingReason ?? "" : i.metricMissingReasons?.[t] ?? "";
							}).join(",")).join("\n") : n;
						}(e.summaryRows, !0))
					}),
					b("nonwear_export.csv", M(u), {
						rows: u,
						detail: null == u ? Hr : `${String(u)} periods`,
						chunkField: "nonwearRows",
						encode: (t) => Mi(ta(t.nonwearRows, e.selectedColumns ?? void 0, !0))
					}),
					b("event_markers_export.csv", M(p), {
						rows: p,
						detail: null == p ? Hr : `${String(p)} button ${1 === p ? "press" : "presses"}`,
						columns: na.length,
						chunkField: "eventMarkerRows",
						encode: (e) => Mi(function(e, t = !1) {
							const n = [[...na, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
							for (const i of e) n.push([
								i.filename,
								i.participantId ?? "",
								i.studyDate,
								sa(i.localTimestamp),
								null == i.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (i.localTimestamp - 60 * i.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
								...t ? [i.participantId ? "" : "source_reported_missing", null == i.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
							].map((e) => f(e)).join(","));
							return `${n.join("\n")}\n`;
						}(e.eventMarkerRows ?? [], !0))
					}),
					b("actiware_intervals_export.csv", M(g), {
						rows: g,
						detail: null == g ? Hr : `${String(g)} Actiware intervals`,
						columns: ca.length,
						chunkField: "actiwareIntervalRows",
						encode: (e) => Mi(ma(e.actiwareIntervalRows ?? [], !0))
					}),
					b(pa, M(h), {
						rows: h,
						detail: null == h ? Hr : `${String(h)} Actiware Sleep/Wake epochs`,
						columns: ga.length,
						encode: (e) => e.actiwareSleepWakeCsv.bytes
					}),
					b("physical_activity_export.csv", M(c), {
						rows: c,
						detail: null == c || null == m ? Hr : `${String(c)} rows · ${String(m)} distinct dates`,
						chunkField: "physicalActivityRows",
						encode: (e) => Mi(function(e, t, n, i = !1) {
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
							]), s = e.some((e) => "ggir_enmo" === e.method) ? Ya.filter((e) => !a.has(e) && (Wn.has(e) || r.has(e))) : [], o = [
								"Participant ID",
								"Threshold Preset Name",
								"Inclusion Rule Preset Name",
								"Scored Username",
								"Source Content Hash",
								"Validation Notes",
								"Notes"
							], l = [[
								...Ya.filter((e) => !a.has(e)),
								...s.map((e) => `${e}_missing_reason`),
								...i ? [
									"Epoch Length Seconds",
									"Native Epoch Seconds",
									"Mask Overlap Epochs"
								].map((e) => e + "_missing_reason") : [],
								...o.map((e) => e + "_missing_reason")
							].join(",")];
							for (const u of e) {
								const e = Xa(u), t = null == u.sedentaryMinutes || !n && null == u.excludedNonwearMinutes ? null : u.sedentaryMinutes + (n ? 0 : u.excludedNonwearMinutes), c = [
									Za(u.filename),
									Za(u.participantId),
									Za(u.analysisDate),
									Za(u.method),
									Za(u.methodLabel),
									Za(u.methodFamily),
									Za(u.requiredSignalContract),
									Za(u.computationOwner),
									String(u.frontendComputesMetric),
									Za(u.sourceSignal),
									Za(u.status),
									Za(u.methodRule),
									Za(u.thresholdSource),
									Za(u.thresholdPresetName),
									Qa(u.sedentaryMax),
									Qa(u.lightMin),
									Qa(u.moderateMin),
									Qa(u.vigorousMin),
									Qa(t),
									Qa(u.lightMinutes),
									Qa(u.moderateMinutes),
									Qa(u.vigorousMinutes),
									Qa(u.mvpaMinutes),
									Qa(u.mimsUnitTotal),
									null == u.epochLengthSeconds ? "" : String(u.epochLengthSeconds),
									String(u.epochsReviewed),
									Qa(u.wakeWearMinutes),
									Qa(u.excludedNonwearMinutes),
									Qa(u.excludedMainSleepMinutes),
									Qa(u.excludedNapMinutes),
									null == u.maskOverlapEpochs ? "" : String(u.maskOverlapEpochs),
									null == u.mvpaBouts ? "" : String(u.mvpaBouts),
									Qa(u.mvpaBoutMinutes),
									null == u.sedentaryBouts ? "" : String(u.sedentaryBouts),
									null == u.sedentaryBreaks ? "" : String(u.sedentaryBreaks),
									Qa(u.meanSedentaryBoutMinutes),
									null == u.nativeEpochSeconds ? "" : String(u.nativeEpochSeconds),
									String(u.epochMismatch),
									Za(u.inclusionRulePresetName),
									String(u.maskExcludeNonwear),
									String(u.maskExcludeMainSleep),
									String(u.maskExcludeNaps),
									String(u.maskUseManualNonwear),
									String(u.maskUseAlgorithmNonwear),
									Za(u.maskNonwearDetector),
									Qa(u.maskMinimumWakeWearMinutes),
									Za(u.scoredUsername),
									Za(u.sourceContentHash),
									Za(u.exportedAt),
									Za(e.status),
									Za(e.notes),
									Za(u.notes)
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
									const t = c[Ya.indexOf(e)];
									if ("ggir_enmo" !== u.method || "" !== t) return "";
									if (Wn.has(e)) {
										const t = d[e];
										return null != t && Number.isFinite(t) ? "" : "source_reported_missing";
									}
									return r.has(e) && null == m[e] ? "not_computed_for_export" : "";
								}), g = i ? [
									["Epoch Length Seconds", null == u.epochLengthSeconds && "ggir_enmo" === u.method ? "not_applicable_to_row" : ""],
									["Native Epoch Seconds", null == u.nativeEpochSeconds ? "not_applicable" === u.thresholdSource ? "not_applicable_to_row" : "source_reported_missing" : ""],
									["Mask Overlap Epochs", null == u.maskOverlapEpochs ? "ggir_enmo" === u.method ? "not_applicable_to_row" : "needs_signal" === u.status ? "channel_unavailable" : "backend_required" === u.status ? "not_computed_for_export" : "" : ""]
								].map(([e, t]) => "" === c[Ya.indexOf(e)] ? t : "") : [];
								l.push([
									...c.filter((e, t) => !a.has(Ya[t])),
									...p,
									...g,
									...o.map((e) => "" !== c[Ya.indexOf(e)] ? "" : [
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
						detail: null == n ? Hr : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
						columns: 40,
						encode: (t) => t.ggirEntries[e]
					})),
					...v.map((e) => b(e, !(!w && !n?.ggirReviewEntries.includes(e)) || (null == _ ? null : _ > 0), {
						rows: null,
						detail: e.endsWith(".html") ? null == _ ? w ? "1 report" : Hr : `1 report · ${String(_)} ${1 === _ ? "file" : "files"}` : "1 GGIR report artifact",
						encode: (t) => t.ggirEntries[e]
					})),
					{
						name: Hn,
						state: "included",
						rows: null,
						detail: "1 reason per missing cell",
						estimatedBytes: 2048 + (t?.actiwareSleepWakeCsv?.reasonChunks.reduce((e, t) => e + t.byteLength, 0) ?? n?.actiwareMissingReasonBytes ?? 0),
						write: null
					},
					b("codebook.csv", !0, {
						rows: Ui.length,
						detail: `${String(Ui.length)} definitions`,
						estimatedBytes: new TextEncoder().encode(Hi()).length,
						encode: () => Mi(Hi(void 0, !0))
					}),
					{
						name: xn,
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
			}), a = function* () {
				for (const e of t) yield {
					...e,
					chunks: void 0
				};
				for (const t of e.extraEntries ?? []) yield {
					name: t.name,
					write: () => /* @__PURE__ */ new Uint8Array(),
					batches: void 0,
					chunks: t.chunks
				};
			};
			for (const n of a()) if (n.write) try {
				"actiware_sleep_wake_export.csv" === n.name ? await y(n.name, async function* () {
					for await (const t of e.sleepWake) e.signal?.throwIfAborted(), p += t.reasonRows, m = Math.max(m, t.bytes.byteLength + t.reasons.byteLength), await s.write(t.reasons), yield t.bytes;
				}()) : n.name.endsWith(".csv") ? await y(n.name, async function* () {
					let t = 0, i = !1, a = !1;
					const r = "actiware_intervals_export.csv" === n.name ? function* () {
						for (const t of e.artifacts.actiwareIntervalRows ?? []) {
							const [e, n] = d(ma([t], !0)).records, i = c(n.text);
							yield new Map(c(e.text).map((e, t) => [e, i[t] ?? ""]));
						}
					} : void 0;
					for await (const e of n.batches?.() ?? va(n.chunks ?? [n.write()])) {
						if (e.bytes.byteLength > 4 * ya) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
						const o = Jn(new TextDecoder().decode(e.bytes), n.name, !0, {
							fullRowCsv: e.fullRowCsv,
							rowOffset: t,
							...r ? { contextRows: r } : {}
						});
						let l, u = "";
						for (;;) {
							const t = o.next();
							if (t.done) {
								l = t.value;
								break;
							}
							if (u += qn([t.value], !1), p += 1, u.length >= ya / 2) {
								const t = new TextEncoder().encode(u);
								m = Math.max(m, e.bytes.byteLength + t.byteLength), await s.write(t), u = "";
							}
						}
						await s.write(new TextEncoder().encode(u));
						const c = i ? (a ? "" : "\n") + l.csv.slice(l.csv.indexOf("\n") + 1) : l.csv;
						i = !0, t += e.rows ?? 0, a = c.endsWith("\n");
						const d = new TextEncoder().encode(c);
						m = Math.max(m, e.bytes.byteLength + d.byteLength + 2 * u.length), yield d;
					}
				}()) : await y(n.name, n.chunks ?? [n.write()]);
			} catch (v) {
				throw new Error(`Export failed while writing ${n.name}`, { cause: v });
			}
			await s.close(), await r, await y(Hn, async function* () {
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
			const u = await async function(e) {
				const t = Object.entries(e.entries).sort(([e], [t]) => e.localeCompare(t)), n = Array.isArray(e.entries) ? [...e.entries].sort((e, t) => e.name.localeCompare(t.name)) : await Promise.all(t.map(async ([e, t]) => ({
					name: e,
					contentHash: await zi(t),
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
			return await y(xn, [new TextEncoder().encode(Gi(u))]), h.end(), await _(), e.signal?.throwIfAborted(), await o.close(), {
				blob: await new Response((await i.getFile()).stream()).blob(),
				entries: g,
				peakBufferedBytes: m,
				reasonRows: p
			};
		} catch ($) {
			throw h.terminate(), await Promise.allSettled([
				s.abort(),
				o.abort(),
				r
			]), $;
		}
	}({
		artifacts: {
			importRefusalReasons: Gr(o),
			...y,
			physicalActivityRows: g,
			physicalActivityEnabledClasses: t.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: t.physicalActivity.nonwearAsClass,
			ggirEntries: M,
			eventMarkerRows: h,
			actiwareIntervalRows: v,
			actiwareSleepWakeCsv: {
				rows: S,
				bytes: /* @__PURE__ */ new Uint8Array(),
				reasonChunks: []
			}
		},
		extraEntries: N,
		options: t,
		manifest: {
			...t.manifest,
			physicalActivity: t.physicalActivity,
			exportedAt: w,
			algorithmVersions: A,
			degradations: T,
			ggirSources: R,
			ggirCorrections: Object.fromEntries(I.ggirResultsBundles.filter((e) => e.ggirCorrections).map((e) => [String(e.fileId), e.ggirCorrections])),
			executionAttestationIds: I.localExecutions.map((e) => e.attestationId),
			diaryTemporalPolicyByFile: Object.fromEntries(I.files.map((e) => [String(e.id), Object.fromEntries(I.diaryEntries.filter((t) => t.fileId === e.id).map((e) => [e.analysisDate, e.importMappingProvenance?.diaryTemporalPolicy ?? null]))]))
		},
		sleepWake: _a(t.fileIds, t.dateRange, o, t.username, a),
		scratchId: n,
		...a ? { signal: a } : {}
	});
	return i.progress?.(m.length, m.length), {
		...E,
		actiwareSleepWakeRows: S,
		degradations: T,
		hasData: y.sleepRows.length > 0 || y.nonwearRows.length > 0 || g.length > 0 || E.entries.some((e) => N.some((t) => t.name === e.name)) || Object.keys(M).length > 0,
		rowCount: y.sleepRows.length + y.nonwearRows.length + y.summaryRows.length + g.length,
		dayCount: (/* @__PURE__ */ new Set([
			...y.sleepRows.map((e) => e.studyDate),
			...y.nonwearRows.map((e) => e.studyDate),
			...g.map((e) => e.analysisDate)
		])).size,
		fileCount: o.files.length
	};
}
async function Yr(e, t, n) {
	try {
		return await n();
	} catch (i) {
		if (i instanceof DOMException && "AbortError" === i.name) throw i;
		throw new bn(e, t, i);
	}
}
a({ async build(e, t, n, i) {
	const a = new p(e);
	let r;
	try {
		return r = await (await (await (await (await navigator.storage.getDirectory()).getDirectoryHandle(Mn, { create: !0 })).getDirectoryHandle(n, { create: !0 })).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await a.open(), await Kr(a, t, n, {
			...i ? { progress: i } : {},
			binaryStore: r
		});
	} catch (s) {
		if (s instanceof bn) return { failure: {
			file: s.file,
			step: s.step
		} };
		throw s;
	} finally {
		r?.close(), a.close();
	}
} });
export { It as C, St as S, zt as _, La as a, Lt as b, Ea as c, Aa as d, Ra as f, Kt as g, Sa as h, Ba as i, Ta as l, Ma as m, _r as n, $a as o, ka as p, Ka as r, Oa as s, rr as t, Ia as u, Gt as v, Ct as x, Vt as y };
