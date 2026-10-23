import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import { c as t, i as n, u as i } from "./workers-BGLkJCHh.js";
import { $ as a, Ct as r, Ht as s, J as o, Lt as l, Nt as u, Pt as c, S as d, Ut as m, W as p, a as g, et as h, f, h as _, ht as w, mn as y, sn as v } from "./schema-CYmiFjVW.js";
import { C as M, D as b, E as S, O as k, S as x, T as I, p as A, s as T, w as R } from "./epoch-utils-DNqQEsmi.js";
import { G as N, U as E, W as $, _ as C, f as O, nt as D, t as L } from "./workspace-db-DmdvN4sJ.js";
import { l as B, n as P, o as F, s as W } from "./content-hash-BtD8CeUH.js";
import { a as j, n as G, t as H } from "./background-jobs-BkfQU4-S.js";
import { a as z } from "./project-revision-BnDCicq0.js";
import { V as U, h as V, j as q, m as K, rt as Y, u as J } from "./night-session-registry-CznfYRTW.js";
import { t as Z } from "./audit-hash-rfcCP1yx.js";
import { G as X, O as Q, T as ee, b as te, i as ne, s as ie, w as ae } from "./local-nonwear-unified-BeW-PETB.js";
import { _ as re, a as se, b as oe, c as le, f as ue, g as ce, h as de, n as me, o as pe, s as ge, t as he, v as fe, x as _e, y as we } from "./valid-day-criteria-BvCKhd-p.js";
import { $t as ye, A as ve, B as Me, C as be, I as Se, K as ke, M as xe, N as Ie, P as Ae, S as Te, Ut as Re, W as Ne, Wt as Ee, Xt as $e, Yt as Ce, b as Oe, i as De, mt as Le, zt as Be } from "./store-DoL1akY8.js";
import { h as Pe, m as Fe, v as We } from "./diary-local-import-contract-Dsy1ZQsR.js";
var je = Uint8Array, Ge = Uint16Array, He = Int32Array, ze = new je([
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
]), Ue = new je([
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
]), Ve = new je([
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
]), qe = function(e, t) {
	for (var n = new Ge(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
	var a = new He(n[30]);
	for (i = 1; i < 30; ++i) for (var r = n[i]; r < n[i + 1]; ++r) a[r] = r - n[i] << 5 | i;
	return {
		b: n,
		r: a
	};
}, Ke = qe(ze, 2), Ye = Ke.b, Je = Ke.r;
Ye[28] = 258, Je[258] = 28;
for (var Ze = qe(Ue, 0), Xe = (Ze.b, Ze.r), Qe = new Ge(32768), et = 0; et < 32768; ++et) {
	var tt = (43690 & et) >> 1 | (21845 & et) << 1;
	tt = (61680 & (tt = (52428 & tt) >> 2 | (13107 & tt) << 2)) >> 4 | (3855 & tt) << 4, Qe[et] = ((65280 & tt) >> 8 | (255 & tt) << 8) >> 1;
}
var nt = function(e, t, n) {
	for (var i = e.length, a = 0, r = new Ge(t); a < i; ++a) e[a] && ++r[e[a] - 1];
	var s, o = new Ge(t);
	for (a = 1; a < t; ++a) o[a] = o[a - 1] + r[a - 1] << 1;
	if (n) {
		s = new Ge(1 << t);
		var l = 15 - t;
		for (a = 0; a < i; ++a) if (e[a]) for (var u = a << 4 | e[a], c = t - e[a], d = o[e[a] - 1]++ << c, m = d | (1 << c) - 1; d <= m; ++d) s[Qe[d] >> l] = u;
	} else for (s = new Ge(i), a = 0; a < i; ++a) e[a] && (s[a] = Qe[o[e[a] - 1]++] >> 15 - e[a]);
	return s;
}, it = new je(288);
for (et = 0; et < 144; ++et) it[et] = 8;
for (et = 144; et < 256; ++et) it[et] = 9;
for (et = 256; et < 280; ++et) it[et] = 7;
for (et = 280; et < 288; ++et) it[et] = 8;
var at = new je(32);
for (et = 0; et < 32; ++et) at[et] = 5;
var rt = nt(it, 9, 0), st = nt(at, 5, 0), ot = function(e) {
	return (e + 7) / 8 | 0;
}, lt = function(e, t, n) {
	return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new je(e.subarray(t, n));
}, ut = [
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
], ct = function(e, t, n) {
	var i = new Error(t || ut[e]);
	if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, ct), !n) throw i;
	return i;
}, dt = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8;
}, mt = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, pt = function(e, t) {
	for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
		s: i,
		f: e[i]
	});
	var a = n.length, r = n.slice();
	if (!a) return {
		t: vt,
		l: 0
	};
	if (1 == a) {
		var s = new je(n[0].s + 1);
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
	var p = new Ge(m + 1), g = gt(n[c - 1], p, 0);
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
		t: new je(p),
		l: g
	};
}, gt = function(e, t, n) {
	return -1 == e.s ? Math.max(gt(e.l, t, n + 1), gt(e.r, t, n + 1)) : t[e.s] = n;
}, ht = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new Ge(++t), i = 0, a = e[0], r = 1, s = function(e) {
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
}, ft = function(e, t) {
	for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
	return n;
}, _t = function(e, t, n) {
	var i = n.length, a = ot(t + 2);
	e[a] = 255 & i, e[a + 1] = i >> 8, e[a + 2] = 255 ^ e[a], e[a + 3] = 255 ^ e[a + 1];
	for (var r = 0; r < i; ++r) e[a + r + 4] = n[r];
	return 8 * (a + 4 + i);
}, wt = function(e, t, n, i, a, r, s, o, l, u, c) {
	dt(t, c++, n), ++a[256];
	for (var d = pt(a, 15), m = d.t, p = d.l, g = pt(r, 15), h = g.t, f = g.l, _ = ht(m), w = _.c, y = _.n, v = ht(h), M = v.c, b = v.n, S = new Ge(19), k = 0; k < w.length; ++k) ++S[31 & w[k]];
	for (k = 0; k < M.length; ++k) ++S[31 & M[k]];
	for (var x = pt(S, 7), I = x.t, A = x.l, T = 19; T > 4 && !I[Ve[T - 1]]; --T);
	var R, N, E, $, C = u + 5 << 3, O = ft(a, it) + ft(r, at) + s, D = ft(a, m) + ft(r, h) + s + 14 + 3 * T + ft(S, I) + 2 * S[16] + 3 * S[17] + 7 * S[18];
	if (l >= 0 && C <= O && C <= D) return _t(t, c, e.subarray(l, l + u));
	if (dt(t, c, 1 + (D < O)), c += 2, D < O) {
		R = nt(m, p, 0), N = m, E = nt(h, f, 0), $ = h;
		var L = nt(I, A, 0);
		for (dt(t, c, y - 257), dt(t, c + 5, b - 1), dt(t, c + 10, T - 4), c += 14, k = 0; k < T; ++k) dt(t, c + 3 * k, I[Ve[k]]);
		c += 3 * T;
		for (var B = [w, M], P = 0; P < 2; ++P) {
			var F = B[P];
			for (k = 0; k < F.length; ++k) {
				var W = 31 & F[k];
				dt(t, c, L[W]), c += I[W], W > 15 && (dt(t, c, F[k] >> 5 & 127), c += F[k] >> 12);
			}
		}
	} else R = rt, N = it, E = st, $ = at;
	for (k = 0; k < o; ++k) {
		var j = i[k];
		if (j > 255) {
			mt(t, c, R[257 + (W = j >> 18 & 31)]), c += N[W + 257], W > 7 && (dt(t, c, j >> 23 & 31), c += ze[W]);
			var G = 31 & j;
			mt(t, c, E[G]), c += $[G], G > 3 && (mt(t, c, j >> 5 & 8191), c += Ue[G]);
		} else mt(t, c, R[j]), c += N[j];
	}
	return mt(t, c, R[256]), c + N[256];
}, yt = new He([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), vt = new je(0), Mt = function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, i = 9; --i;) n = (1 & n && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), bt = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
}, St = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new je(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, i, a) {
			if (!a && (a = { l: 1 }, t.dictionary)) {
				var r = t.dictionary.subarray(-32768), s = new je(r.length + e.length);
				s.set(r), s.set(e, r.length), e = s, a.w = r.length;
			}
			return function(e, t, n, i, a, r) {
				var s = r.z || e.length, o = new je(i + s + 5 * (1 + Math.ceil(s / 7e3)) + a), l = o.subarray(i, o.length - a), u = r.l, c = 7 & (r.r || 0);
				if (t) {
					c && (l[0] = r.r >> 3);
					for (var d = yt[t - 1], m = d >> 13, p = 8191 & d, g = (1 << n) - 1, h = r.p || new Ge(32768), f = r.h || new Ge(g + 1), _ = Math.ceil(n / 3), w = 2 * _, y = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, v = new He(25e3), M = new Ge(288), b = new Ge(32), S = 0, k = 0, x = r.i || 0, I = 0, A = r.w || 0, T = 0; x + 2 < s; ++x) {
						var R = y(x), N = 32767 & x, E = f[R];
						if (h[N] = E, f[R] = N, A <= x) {
							var $ = s - x;
							if ((S > 7e3 || I > 24576) && ($ > 423 || !u)) {
								c = wt(e, l, 0, v, M, b, k, I, T, x - T, c), I = S = k = 0, T = x;
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
								v[I++] = 268435456 | Je[O] << 18 | Xe[D];
								var V = 31 & Je[O], q = 31 & Xe[D];
								k += ze[V] + Ue[q], ++M[257 + V], ++b[q], A = x + O, ++S;
							} else v[I++] = e[x], ++M[e[x]];
						}
					}
					for (x = Math.max(x, A); x < s; ++x) v[I++] = e[x], ++M[e[x]];
					c = wt(e, l, u, v, M, b, k, I, T, x - T, c), u || (r.r = 7 & c | l[c / 8 | 0] << 3, c -= 7, r.h = f, r.p = h, r.i = x, r.w = A);
				} else {
					for (x = r.w || 0; x < s + u; x += 65535) {
						var K = x + 65535;
						K >= s && (l[c / 8 | 0] = u, K = s), c = _t(l, c + 1, e.subarray(x, K));
					}
					r.i = s;
				}
				return lt(o, 0, i + ot(c) + a);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? a.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, n, i, a);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || ct(5), this.s.l && ct(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var i = new je(-32768 & n);
				i.set(this.b.subarray(0, this.s.z)), this.b = i;
			}
			var a = this.b.length - this.s.z;
			this.b.set(e.subarray(0, a), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(a), 32768), this.s.z = e.length - a + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = vt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || ct(5), this.s.l && ct(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new je(6);
			t[0] = this.s.r >> 3;
			var n = _t(t, this.s.r, vt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), kt = "undefined" != typeof TextEncoder && new TextEncoder(), xt = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	xt.decode(vt, { stream: !0 });
} catch (Bs) {}
function It(e, t) {
	if (t) {
		for (var n = new je(e.length), i = 0; i < e.length; ++i) n[i] = e.charCodeAt(i);
		return n;
	}
	if (kt) return kt.encode(e);
	var a = e.length, r = new je(e.length + (e.length >> 1)), s = 0, o = function(e) {
		r[s++] = e;
	};
	for (i = 0; i < a; ++i) {
		if (s + 5 > r.length) {
			var l = new je(s + 8 + (a - i << 1));
			l.set(r), r = l;
		}
		var u = e.charCodeAt(i);
		u < 128 || t ? o(u) : u < 2048 ? (o(192 | u >> 6), o(128 | 63 & u)) : u > 55295 && u < 57344 ? (o(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++i)) >> 18), o(128 | u >> 12 & 63), o(128 | u >> 6 & 63), o(128 | 63 & u)) : (o(224 | u >> 12), o(128 | u >> 6 & 63), o(128 | 63 & u));
	}
	return lt(r, 0, s);
}
var At = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var i = e[n].length;
		i > 65535 && ct(9), t += i + 4;
	}
	return t;
}, Tt = function(e, t, n, i, a, r, s, o) {
	var l = i.length, u = n.extra, c = o && o.length, d = At(u);
	bt(e, t, null != s ? 33639248 : 67324752), t += 4, null != s && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (r < 0 && 8), e[t++] = a && 8, e[t++] = 255 & n.compression, e[t++] = n.compression >> 8;
	var m = new Date(null == n.mtime ? Date.now() : n.mtime), p = m.getFullYear() - 1980;
	if ((p < 0 || p > 119) && ct(10), bt(e, t, p << 25 | m.getMonth() + 1 << 21 | m.getDate() << 16 | m.getHours() << 11 | m.getMinutes() << 5 | m.getSeconds() >> 1), t += 4, -1 != r && (bt(e, t, n.crc), bt(e, t + 4, r < 0 ? -r - 2 : r), bt(e, t + 8, n.size)), bt(e, t + 12, l), bt(e, t + 14, d), t += 16, null != s && (bt(e, t, c), bt(e, t + 6, n.attrs), bt(e, t + 10, s), t += 14), e.set(i, t), t += l, d) for (var g in u) {
		var h = u[g], f = h.length;
		bt(e, t, +g), bt(e, t + 2, f), e.set(h, t + 4), t += 4 + f;
	}
	return c && (e.set(o, t), t += c), t;
}, Rt = function() {
	function e(e) {
		var t;
		this.filename = e, this.c = (t = -1, {
			p: function(e) {
				for (var n = t, i = 0; i < e.length; ++i) n = Mt[255 & n ^ e[i]] ^ n >>> 8;
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
		this.ondata || ct(5), this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1);
	}, e;
}(), Nt = function() {
	function e(e, t) {
		var n, i = this;
		t || (t = {}), Rt.call(this, e), this.d = new St(t, function(e, t) {
			i.ondata(null, e, t);
		}), this.compression = 8, this.flag = 1 == (n = t.level) ? 3 : n < 6 ? 2 : 9 == n ? 1 : 0;
	}
	return e.prototype.process = function(e, t) {
		try {
			this.d.push(e, t);
		} catch (Bs) {
			this.ondata(Bs, null, t);
		}
	}, e.prototype.push = function(e, t) {
		Rt.prototype.push.call(this, e, t);
	}, e;
}(), Et = function() {
	function e(e) {
		this.ondata = e, this.u = [], this.d = 1;
	}
	return e.prototype.add = function(e) {
		var t = this;
		if (this.ondata || ct(5), 2 & this.d) this.ondata(ct(4 + 8 * (1 & this.d), 0, 1), null, !1);
		else {
			var n = It(e.filename), i = n.length, a = e.comment, r = a && It(a), s = i != e.filename.length || r && a.length != r.length, o = i + At(e.extra) + 30;
			i > 65535 && this.ondata(ct(11, 0, 1), null, !1);
			var l = new je(o);
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
					var r = new je(16);
					bt(r, 0, 134695760), bt(r, 4, e.crc), bt(r, 8, g), bt(r, 12, e.size), u.push(r), p.c = g, p.b = o + g + 16, p.crc = e.crc, p.size = e.size, d && p.r(), d = 1;
				} else d && c();
			}, this.u.push(p);
		}
	}, e.prototype.end = function() {
		var e = this;
		2 & this.d ? this.ondata(ct(4 + 8 * (1 & this.d), 0, 1), null, !0) : (this.d ? this.e() : this.u.push({
			r: function() {
				1 & e.d && (e.u.splice(-1, 1), e.e());
			},
			t: function() {}
		}), this.d = 3);
	}, e.prototype.e = function() {
		for (var e = 0, t = 0, n = 0, i = 0, a = this.u; i < a.length; i++) n += 46 + (p = a[i]).f.length + At(p.extra) + (p.o ? p.o.length : 0);
		for (var r, s, o, l, u, c = new je(n + 22), d = 0, m = this.u; d < m.length; d++) {
			var p = m[d];
			Tt(c, e, p, p.f, p.u, -p.c - 2, t, p.o), e += 46 + p.f.length + At(p.extra) + (p.o ? p.o.length : 0), t += p.b;
		}
		r = c, s = e, o = this.u.length, l = n, u = t, bt(r, s, 101010256), bt(r, s + 8, o), bt(r, s + 10, o), bt(r, s + 12, l), bt(r, s + 16, u), this.ondata(null, c, !0), this.d = 2;
	}, e.prototype.terminate = function() {
		for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
		this.d = 2;
	}, e;
}();
function $t(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function Ct(e) {
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
function Ot(e, t) {
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
function Dt(e, { fileIds: t, dateRange: n, signal: a }) {
	const r = xs(e, _s.circadian);
	return async function(e, t, { dateRange: n, signal: a }) {
		const r = H(a), s = [];
		let o = 0;
		for (const l of e) {
			if (!l.id) continue;
			a?.throwIfAborted();
			const e = await t(l.id), u = [];
			for (const t of e.values()) {
				if (a?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
				o += 1;
				const e = Ot(l.id, t);
				e && u.push(e);
			}
			if (0 === u.length) continue;
			const { request: c, transfer: d } = Ct(u.map((e) => e.wire)), m = await r.computeCircadian(i(c, d));
			a?.throwIfAborted();
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
	}(t.length > 0 ? r.files.filter((e) => null != e.id && t.includes(e.id)) : r.files, (e) => Ns(r, e), {
		dateRange: n,
		signal: a
	});
}
const Lt = [
	"scoreGgirHasibVariant",
	"scoreSadeh",
	"scoreColeKripke",
	"scoreEpochs"
];
function Bt(e) {
	return ArrayBuffer.isView(e) ? `${e.constructor.name}[${String(e.byteLength)}]` : Array.isArray(e) ? e.map(Bt) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Bt(t)])) : e;
}
function Pt(e, t) {
	if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
		if (e.byteLength !== t.byteLength) return !1;
		const n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), i = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
		return n.every((e, t) => e === i[t]);
	}
	if (null !== e && null !== t && "object" == typeof e && "object" == typeof t) {
		const n = Object.entries(e);
		return n.length === Object.keys(t).length && n.every(([e, n]) => Pt(n, t[e]));
	}
	return Object.is(e, t);
}
function Ft(e) {
	const t = /* @__PURE__ */ new Map();
	return new Proxy(e, { get(e, n, i) {
		const a = Reflect.get(e, n, i);
		return "function" == typeof a && Lt.includes(n) ? async (...i) => {
			const r = `${String(n)}|${JSON.stringify(Bt(i))}`, s = t.get(r) ?? [];
			t.set(r, s);
			let o = s.find((e) => Pt(e.args, i));
			if (!o) {
				const t = Promise.resolve(Reflect.apply(a, e, i)), n = {
					args: i,
					answer: t
				};
				o = n, s.push(n), t.catch(() => s.splice(s.indexOf(n), 1));
			}
			return structuredClone(await o.answer);
		} : a;
	} });
}
const Wt = [
	"vanHees2015",
	"Sadeh1994",
	"Galland2012",
	"ColeKripke1992",
	"Oakley1997",
	"NotWorn"
];
function jt(e) {
	const t = o[e];
	if (void 0 === t) throw new Error(`no generated method-family label for ${e}`);
	return t.algorithmValue;
}
const Gt = p.angle_hasib?.algorithmValue, Ht = Wt.filter((e) => e !== Gt), zt = new Set(Ht);
function Ut(e) {
	const t = d.count_input_series_keys?.[e];
	if (void 0 === t) throw new Error(`Unsupported HASIB count source: ${e}`);
	return {
		family: String(t.count_family),
		axis: String(t.axis),
		epochSeconds: Number(t.epoch_seconds)
	};
}
const Vt = {
	vanHees2015: C.GGIR_HASIB_VAN_HEES_2015,
	Sadeh1994: C.GGIR_HASIB_SADEH_1994,
	Galland2012: C.GGIR_HASIB_GALLAND_2012,
	ColeKripke1992: C.GGIR_HASIB_COLE_KRIPKE_1992,
	Oakley1997: C.GGIR_HASIB_OAKLEY_1997,
	NotWorn: C.GGIR_HASIB_NOT_WORN
};
function qt(e, t, n) {
	if (n.sib.length !== t) throw new Error(`HASIB ${e} returned ${String(n.sib.length)} epochs, expected ${String(t)}.`);
	return n;
}
function Kt(e, t) {
	const n = o[h];
	return void 0 !== n && e === n.algorithmValue && Ut(t).family === a;
}
async function Yt(e) {
	const t = e.variants ?? Wt, n = t.filter((e) => zt.has(e)).length > 0 ? await async function(e) {
		const t = Ut(e.countSource);
		if ("neishabouri" === t.family) {
			const n = e.neishabouriCounts?.[t.axis] ?? ("vm" === t.axis && 60 === t.epochSeconds ? e.neishabouriVm60s : void 0);
			if (!n || 0 === n.length) throw new Error(`HASIB Neishabouri scoring requires a non-empty ${String(t.epochSeconds)}s ${t.axis.toUpperCase()} count series.`);
			return {
				series: n,
				countSource: e.countSource,
				epochSeconds: t.epochSeconds
			};
		}
		const n = t.axis, i = e.zeroCrossingCountsByAxis?.[n] ?? ("y" === n && 60 === t.epochSeconds ? e.zeroCrossingY60s : void 0);
		if (!e.backend.zeroCrossingCounts) {
			if (i && i.length > 0) return {
				series: i,
				countSource: e.countSource,
				epochSeconds: t.epochSeconds
			};
			throw new Error("HASIB zero-crossing scoring requires a backend zeroCrossingCounts implementation or precomputed axis counts.");
		}
		if (i && i.length > 0) return {
			series: i,
			countSource: e.countSource,
			epochSeconds: t.epochSeconds
		};
		if (!e.rawTriAxis) throw new Error("HASIB zero-crossing scoring requires raw tri-axial samples or precomputed axis counts.");
		(function(e) {
			if (e.sampleRate <= 0 || !Number.isFinite(e.sampleRate)) throw new Error("HASIB zero-crossing scoring requires a positive raw sample rate.");
			if (e.x.length !== e.y.length || e.x.length !== e.z.length) throw new Error(`HASIB zero-crossing scoring requires aligned raw x/y/z arrays (got x=${String(e.x.length)}, y=${String(e.y.length)}, z=${String(e.z.length)}).`);
			if (0 === e.x.length) throw new Error("HASIB zero-crossing scoring requires at least one raw sample.");
		})(e.rawTriAxis);
		const a = await e.backend.zeroCrossingCounts(e.rawTriAxis.x, e.rawTriAxis.y, e.rawTriAxis.z, e.rawTriAxis.sampleRate, e.countEpochSeconds ?? t.epochSeconds), r = "x" === n ? a.zcx : "y" === n ? a.zcy : a.zcz;
		if (0 === r.length) throw new Error(`HASIB zero-crossing scoring produced an empty ${n.toUpperCase()}-axis count series.`);
		return {
			series: r,
			countSource: e.countSource,
			epochSeconds: t.epochSeconds
		};
	}(e) : null, i = [];
	for (const a of t) {
		const t = a === Gt, r = t ? e.anglez5s : n?.series;
		if (!r || 0 === r.length) throw new Error(`HASIB ${a} requires a non-empty ${t ? "AngleZ" : "count"} input series.`);
		const s = t ? void 0 : e.countEpochSeconds ?? n?.epochSeconds, o = !t && null !== n && Kt(a, n.countSource), l = void 0 !== s ? {
			ws3: s,
			...e.configs?.[a]
		} : e.configs?.[a], u = o ? {
			...l,
			neishabouriCount: !0
		} : l, c = await e.backend.scoreGgirHasibVariant(r, a, u);
		i.push({
			variant: a,
			key: Vt[a],
			countSource: t ? "anglez_5s" : n.countSource,
			result: qt(a, r.length, c)
		});
	}
	return i;
}
function Jt(e) {
	return Object.keys(v).filter((t) => v[t].propagation.includes(e)).sort();
}
function Zt(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(Zt).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${Zt(t)}`).join(",")}}`;
}
function Xt(e, t) {
	return function(e, t) {
		const n = e?.recording, i = n?.bodySite;
		return "wrist" === i || "hip" === i ? {
			sensorLocation: i,
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
function Qt(e) {
	return JSON.stringify([...new Set(e ?? [])]);
}
function en(e, t) {
	if (0 === e.length) return null;
	if (e.length === t.timestamps.length && t.timestamps.length > 0) return t.timestamps;
	const n = t.ggirTimestamps;
	return n && e.length === n.length && n.length > 0 ? n : null;
}
const tn = {
	[_.GT3X_BINARY]: "gt3x_capsense",
	[_.GENEACTIV_BIN]: "detach_nonwear"
}, nn = {
	"actoglance.source.philips_actiware_csv.v1": "actiware_off_wrist",
	"actoglance.source.philips_actiwatch_aw5.v1": "actiware_off_wrist"
};
function an(e, t) {
	return (t ? nn[t] : void 0) || (e ? tn[e] ?? null : null);
}
async function rn(e, t, i = n()) {
	const a = e.nonwearBands?.[Qt(t)];
	if (null === a) return null;
	if (a) {
		const t = "counts" === a.grid ? e.timestamps : e.ggirTimestamps, [n] = a.detectors;
		if (t && n && t.length === a.mask.length) return {
			detector: n,
			detectors: a.detectors,
			mask: a.mask,
			...a.weight ? { weight: a.weight } : {},
			grid: t,
			epochSeconds: await Le(t, 60, i)
		};
	}
	const r = [];
	let s = null;
	for (const n of new Set(t ?? [])) {
		if (ln(n)) continue;
		const t = e.algorithmicNonwearMasks?.[n];
		if (!t) continue;
		const i = en(t, e);
		!i || null !== s && i !== s || (s = i, r.push({
			detector: n,
			mask: t
		}));
	}
	const o = r[0];
	if (!o || !s) return null;
	const l = await Le(s, 60, i), u = [...r, ...await sn(e, t, {
		grid: s,
		epochSeconds: l
	}, i)];
	if (1 === u.length) return {
		detector: o.detector,
		detectors: [o.detector],
		mask: o.mask,
		grid: s,
		epochSeconds: l
	};
	const c = await i.fuseNonwearMasks(u.map((e) => Uint8Array.from(e.mask)));
	return {
		detector: o.detector,
		detectors: u.map((e) => e.detector),
		mask: c.any,
		weight: c.weight,
		grid: s,
		epochSeconds: l
	};
}
async function sn(e, t, { grid: n, epochSeconds: i }, a) {
	const r = e.deviceNonwearSource, s = "gt3x_capsense" === r ? m.GT3X_CAPSENSE : "detach_nonwear" === r ? m.DETACH_NONWEAR : null;
	if (null === s || !(t ?? []).includes(s)) return [];
	const o = (e.sensorNonwearPeriods ?? []).map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	}));
	return [{
		detector: s,
		mask: await X(o, n, i, a)
	}];
}
function on(e, t) {
	return t ? e : e.filter((e) => e !== m.CHOI_2011 && e !== m.CHOI_2012);
}
function ln(e) {
	return e === m.GT3X_CAPSENSE || e === m.DETACH_NONWEAR;
}
function un(e, t, n) {
	return i = function(e, t) {
		const n = {
			...e,
			ggir_config: { sha256: ye(e).sha256 }
		}, i = pe(t, ge(e.analysis_paradigm));
		return ue(t) ? i ? (delete n.ggir_config, n.default_algorithm = i.sleepAlgorithm, i.periodGuider && (n.period_guider = i.periodGuider), n.nonwear_detectors_counts = le({
			algorithm: i.sleepAlgorithm,
			periodGuider: i.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, i.paradigm, t).nonwearDetectorsCounts, 0 === Object.keys(se(e.actiware_analysis)).length && delete n.actiware_analysis) : delete n.actiware_analysis : (delete n.analysis_paradigm, delete n.actiware_analysis), an(t?.sourceType, t?.sourceProfileId) !== m.ACTIWARE_OFF_WRIST || (delete n.ggir_config, n.extraction_path = null, "ggir" !== te(n.default_algorithm) && (n.nonwear_detectors_ggir = null)), n;
	}(function(e, t, n = De.getState()) {
		const i = n, a = {};
		for (const r of Jt("materialized")) {
			const e = v[r].storeKeys.zustand;
			if (void 0 === e || !(e in i)) throw new Error(`materialized setting ${r} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			a[r] = i[e];
		}
		return a.sleep_period_detection = {
			value: a.sleep_period_detection,
			resolvedSensorLocation: Xt(e, t)
		}, a;
	}(e, t, n), e), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${Zt(t[e])}`);
		let i = 2166136261;
		for (const a of n.join("")) i ^= a.charCodeAt(0), i = Math.imul(i, 16777619) >>> 0;
		return i.toString(16).padStart(8, "0");
	}(Jt("materialized"), i);
	var i;
}
function cn(e, t) {
	return e.columns.indexOf(t);
}
function dn(e, t, n) {
	const i = function(e, t, n) {
		const i = cn(e, t);
		return i < 0 ? null : e.values[i]?.[n] ?? null;
	}(e, t, n);
	if ("number" == typeof i) return Number.isFinite(i) ? i : null;
	if ("string" == typeof i && "" !== i.trim()) {
		const e = Number(i);
		return Number.isFinite(e) ? e : null;
	}
	return null;
}
function mn(e, t, n) {
	const i = cn(e, t);
	if (i < 0) return -1;
	const a = e.values[i] ?? [];
	for (let r = 0; r < e.rows; r += 1) {
		const e = a[r];
		if (("number" == typeof e ? e : Number(e)) === n) return r;
	}
	return -1;
}
Object.freeze([]), m.CHOI_2011, m.CHOI_2012, m.VAN_HEES_2013, m.VAN_HEES_2023, m.TROIANO_2008, m.AHMADI_2020;
const pn = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function gn(e, t = []) {
	const [n, i, a, r, s, o] = await Promise.all([
		pn(e.part1),
		pn(e.ms2),
		pn(e.ms3),
		pn(e.ms4),
		pn(e.ms5),
		pn(e.sleeplogRData)
	]);
	return {
		part1: n,
		configCsv: await e.configCsv.text(),
		...i ? { ms2: i } : {},
		...a ? { ms3: a } : {},
		...r ? { ms4: r } : {},
		...s ? { ms5: s } : {},
		...o ? { sleeplogRData: o } : {},
		...e.sleeplogCsv ? { sleeplogCsv: await e.sleeplogCsv.text() } : {},
		recordingId: O(e.recordingFile),
		...e.cleanedNightsCsv ? { cleanedNightsCsv: await e.cleanedNightsCsv.text() } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: await e.dataCleaningCsv.text() } : {},
		edits: t,
		crossCheck: !1
	};
}
function hn(e) {
	const { sib: t, invalid: n, nonwear: i, ...a } = e;
	return a;
}
const fn = (e) => e ? e.slice().buffer : void 0;
function _n(e, t, n, i, a) {
	const r = fn(n.ms2), s = fn(n.ms3), o = fn(n.ms4), l = fn(n.ms5), u = fn(n.sleeplogRData);
	return {
		fileId: e,
		recordingFile: t,
		part1: fn(n.part1),
		configCsv: n.configCsv,
		...n.cleanedNightsCsv ? { cleanedNightsCsv: n.cleanedNightsCsv } : {},
		...n.dataCleaningCsv ? { dataCleaningCsv: n.dataCleaningCsv } : {},
		...r ? { ms2: r } : {},
		...s ? { ms3: s } : {},
		...o ? { ms4: o } : {},
		...l ? { ms5: l } : {},
		...u ? { sleeplogRData: u } : {},
		...n.sleeplogCsv ? { sleeplogCsv: n.sleeplogCsv } : {},
		...a ? { ggirCorrections: a } : {},
		imported: hn(i),
		edits: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function wn(e) {
	return ((e) => {
		const t = /* @__PURE__ */ new Set();
		return e.filter((e) => !t.has(e.night) && (t.add(e.night), !0));
	})(e.sleepWindows);
}
function yn(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return wn(e).filter((i) => t.has(i.night) && i.onsetMs >= e.startMs && i.wakeMs <= n && i.wakeMs > i.onsetMs);
}
function vn(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case Gt: return l.VAN_HEES_2015;
		case jt("cole_kripke_1992"): return l.COLE_KRIPKE_1992_GGIR;
		case jt("sadeh_1994"): return l.SADEH_1994_GGIR;
		case jt("galland_2012"): return l.GALLAND_2012;
		case jt("oakley_1997"): return l.OAKLEY_1997;
		default: return null;
	}
}
function Mn(e) {
	return null == vn(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${function(e) {
		const t = wn(e).length;
		return `${String(yn(e).length)} of ${String(t)} ${1 === t ? "night" : "nights"} GGIR reported got a GGIR marker.`;
	}(e)}`;
}
function bn(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.nightDate);
		if (null != e && e !== n.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		t.set(n.nightDate, n.night);
	}
}
async function Sn(e, t, n, i) {
	const a = t.find((e) => e.night === n), r = wn(e).find((e) => e.night === n);
	if (!a || !r) return null;
	const [s, o] = await ((e, t) => H(t).wallClockLabels(Float64Array.from(e)))([r.onsetMs, r.wakeMs], i), l = [a.onset !== s ? `onset moved ${a.onset}` : null, a.wake !== o ? `wake moved ${a.wake}` : null].filter((e) => null != e);
	return l.length > 0 ? `edited: ${l.join(", ")}` : null;
}
async function kn(e, t, n, i = H(n)) {
	if (bn(e.sleepWindows), !e.sources.ms5) return [];
	const a = (/* @__PURE__ */ new Date()).toISOString(), r = e.nightSummaries ?? [], s = new Map(wn(e).map((e) => [e.night, e.nightDate])), o = (e) => e.nightDate ?? (null == e.night ? void 0 : s.get(e.night)), l = new Map(await Promise.all([...new Set(r.map(o).filter((e) => null != e))].map(async (e) => [e, await T(e, void 0, i)]))), u = Float64Array.from(r, (e) => e.validHours ?? NaN), c = e.includeDayCriterionHours ?? await i.ggirIncludeDayCriterionHours(null), d = Float64Array.from(r, () => c), m = await i.ggirDaysIncluded(u, d, null);
	return r.flatMap((e, n) => {
		const i = o(e);
		return null == i ? [] : [{
			fileId: t,
			analysisDate: l.get(i),
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
			createdAt: a,
			updatedAt: a
		}];
	});
}
async function xn(e, t, n) {
	return Promise.all(yn(e).map(async (i) => {
		const [a, r] = await n.ggirLabelsToStoredMs(Float64Array.of(i.onsetMs, i.wakeMs), t), s = await async function(e, t, n, i = H(n)) {
			const [a, r] = await i.wallClockLabels(Float64Array.of(t.onsetMs, t.wakeMs));
			return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(t.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${a} → ${r}`;
		}(e, i, void 0, n);
		return {
			date: i.nightDate,
			onsetTimestamp: a / 1e3,
			offsetTimestamp: r / 1e3,
			notes: s
		};
	}));
}
async function In(e, t, n, i, a, r = [], o, l) {
	bn(t.sleepWindows);
	const u = vn(t);
	if (null == u) return !0;
	const c = un(null, n), d = H(o);
	let m = !0;
	for (const p of l ?? await xn(t, r, d)) {
		const t = [{
			markerType: s.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: p.onsetTimestamp,
			offsetTimestamp: p.offsetTimestamp,
			source: "auto",
			settingsHash: c
		}];
		await (await import("./night-session-weT6kPRl.js").then((e) => e.t)).writeHeadlessNight({
			signal: o,
			fileId: e,
			...a ? { expected: V(null) } : {},
			date: p.date,
			username: Y,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p.notes,
			algorithm: u,
			sleepPeriodDetectionConfig: Q(void 0, ne) ?? null
		}, i, null).catch(() => {
			o?.throwIfAborted(), console.warn("[local-processing] GGIR results marker persistence failed."), m = !1;
		});
	}
	return m;
}
async function An(e, t, n, i, a = 60, r, s) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == i || n >= i) return null;
	const o = new Uint8Array(e.length);
	for (let u = 0; u < e.length; u++) o[u] = 1 === e[u] ? 1 : 0;
	const l = await Tn(o, r && r.length === e.length ? r : new Float64Array(e.length), t, n, i, a, s);
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
async function Tn(e, t, n, i, a, r = 60, s) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == i || null == a || i >= a) return null;
	const o = await async function(e, t, n, i) {
		const a = await H(i).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === a.length ? {
			startIdx: a[0],
			endIdx: a[1]
		} : null;
	}(n, i, a, s);
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
function Rn(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const i = Be(e), a = Array.from(i.timestamps);
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
	const s = A(e, t);
	return {
		timestamps: a,
		algorithmResults: "ok" === s.status && s.bytes ? new Uint8Array(s.bytes) : null,
		activity: r,
		scoresStale: "stale" === s.status ? s.reason : null
	};
}
const Nn = /* @__PURE__ */ new Map();
async function En(e, t) {
	if (Nn.has(e)) return Nn.get(e);
	try {
		const n = await H(t).resolveTimezone(e);
		return Nn.set(e, n), n;
	} catch (ct) {
		t?.throwIfAborted(), console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, ct);
		return;
	}
}
function $n(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : Fe();
}
async function Cn(e) {
	try {
		return $n((await Ae(e))?.extraSettings);
	} catch (ct) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", ct), Fe();
	}
}
function On(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const Dn = {
	zone: null,
	reason: null
};
async function Ln(e, t, n) {
	const i = e.ggirTimezone?.trim();
	let a = null;
	if (i) {
		const e = await En(i, n);
		if (!e) return Dn;
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
	if (null === a) return Dn;
	const r = await En(t, n);
	if (void 0 === r) return Dn;
	if ("iana" !== r?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const s = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== s && (await We(r.zone, s, H(n))).includes(a) ? {
		zone: r.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${On(a)} is not a ${r.zone} offset`
	};
}
function Bn(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [i, a] of e.entries()) t[i + 1] = t[i] + a.length;
	const n = new Float64Array(t[e.length]);
	for (const [i, a] of e.entries()) n.set(a, t[i]);
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
}), Fn = [
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
var Wn = Fn.map(() => Pn);
Object.fromEntries(Fn.map(([e], t) => [e, Wn[t]]));
const jn = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor"
];
async function Gn(e, t, i, a) {
	const r = void 0 === t ? i?.window[e] : 48 === t ? i?.view48[e] : void 0;
	if (r) return {
		start: r[0],
		end: r[1]
	};
	const s = await (a ?? n()).analysisWindowBounds(e, t);
	return s ? {
		start: s[0],
		end: s[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function Hn(e, t, i) {
	const a = e instanceof Float64Array ? e : Float64Array.from(e), [r, s] = await (i ?? n()).analysisWindowSlice(a, t);
	return {
		startIndex: r,
		endIndex: s
	};
}
async function zn(e, t = n()) {
	const i = [...new Set(e)], a = await t.analysisDatesOf(Float64Array.from(i)), r = new Map(i.map((e, t) => [e, a[t] ?? ""]));
	return (e) => r.get(e) ?? "";
}
function Un(e) {
	const t = {};
	return e.nonwearResults && (t.choi90 = new Uint8Array(e.nonwearResults)), e.nonwearResultsChoi2011 && (t.choi60 = new Uint8Array(e.nonwearResultsChoi2011)), e.vanHeesNonwear && (t.vanHees = new Uint8Array(e.vanHeesNonwear)), e.detachNonwear && (t.sensor = new Uint8Array(e.detachNonwear)), t;
}
async function Vn(e, t, n, i) {
	const a = e.get(t), r = Rn(a, n), s = a ? Un(a) : {}, o = e.get(await T(t, void 0, H(i))), l = r.timestamps[r.timestamps.length - 1], u = o ? Rn(o, n) : null, c = u?.timestamps[0], d = void 0 !== o && null !== u && void 0 !== l && void 0 !== c && c > l, m = r.scoresStale ?? u?.scoresStale ?? null;
	if (null !== m) return {
		...r,
		algorithmResults: null,
		masks: s,
		scoresStale: m
	};
	if (!d || !r.algorithmResults) return {
		...r,
		masks: s,
		scoresStale: null
	};
	const p = r.timestamps.length, g = p + u.timestamps.length, h = r.algorithmResults.length >= p && u.algorithmResults && u.algorithmResults.length >= u.timestamps.length ? new Uint8Array(g) : null;
	h?.set(r.algorithmResults.subarray(0, p)), u.algorithmResults && h?.set(u.algorithmResults.subarray(0, g - p), p);
	const f = r.activity && u.activity ? new Float64Array(g) : null;
	r.activity && f?.set(r.activity.subarray(0, p)), u.activity && f?.set(u.activity.subarray(0, g - p), p);
	const _ = Un(o), w = {};
	for (const y of jn) {
		const e = s[y], t = _[y];
		if (!e && !t) continue;
		const n = new Uint8Array(g);
		e && n.set(e.subarray(0, p)), t && n.set(t.subarray(0, g - p), p), w[y] = n;
	}
	return {
		timestamps: [...r.timestamps, ...u.timestamps],
		algorithmResults: h,
		activity: f,
		masks: w,
		scoresStale: null
	};
}
async function qn(e, t, n, i) {
	const a = await n.files.get(e.fileId);
	if (!a) return;
	const r = /* @__PURE__ */ new Map();
	for (const s of [e.date, await T(e.date, void 0, H(i))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, s]).first();
		t && r.set(s, t);
	}
	await async function(e, t, n, i) {
		const { date: a, file: r, activityMap: s, verdict: o } = t, l = t.spanning ?? await Vn(s, a, o, i);
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
		for (const p of e.sleepMarkers) m.push(d && c.length > 0 && p.onsetTimestamp && p.offsetTimestamp ? await Tn(d, l.activity ?? new Float64Array(d.length), l.timestamps, p.onsetTimestamp, p.offsetTimestamp, r.epochLengthSeconds || 60, i) : null);
		if (void 0 !== e.id) try {
			await z(n, [n.markers], () => K(e.id, {
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
const Kn = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], Yn = ["under-series", "over-series"], Jn = ["full-resolution-v1", "min-max-gap-envelope-v1"], Zn = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function Xn(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function Qn(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? Xn(t, "expected an object") : e;
}
function ei(e, t) {
	return Array.isArray(e) ? e : Xn(t, "expected an array");
}
function ti(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : Xn(t, "expected a finite number");
}
function ni(e, t) {
	const n = ti(e, t);
	return n <= 0 ? Xn(t, "expected a positive number") : n;
}
function ii(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : Xn(t, "expected a safe integer");
}
function ai(e, t) {
	const n = ii(e, t);
	return n < 0 ? Xn(t, "expected a non-negative safe integer") : n;
}
function ri(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? Xn(t, "expected a boolean") : { [n]: e };
}
function si(e, t) {
	return "string" != typeof e || 0 === e.length ? Xn(t, "expected a non-empty string") : e;
}
function oi(e, t) {
	return "string" == typeof e && Kn.includes(e) ? e : Xn(t, "expected a supported tone");
}
function li(e, t) {
	return "string" == typeof e && Yn.includes(e) ? e : Xn(t, "expected a supported phase");
}
function ui(e, t) {
	const n = Qn(e, t), i = ti(n.min, `${t}.min`), a = ti(n.max, `${t}.max`);
	return a <= i || !Number.isFinite(a - i) ? Xn(t, "expected a finite ascending range") : {
		min: i,
		max: a
	};
}
function ci(e, t) {
	const n = `series[${t}]`, i = Qn(e, n), a = ei(i.points, `${n}.points`);
	let r = Number.NEGATIVE_INFINITY;
	const s = a.map((e, t) => {
		const i = `${n}.points[${t}]`, a = Qn(e, i), s = ti(a.timestamp, `${i}.timestamp`);
		if (s <= r) return Xn(`${i}.timestamp`, "expected strictly ascending timestamps");
		r = s;
		const o = a.value;
		return {
			timestamp: s,
			value: null === o ? null : ti(o, `${i}.value`)
		};
	});
	return {
		tone: oi(i.tone, `${n}.tone`),
		strokeWidth: ni(i.strokeWidth, `${n}.strokeWidth`),
		valueDomain: ui(i.valueDomain, `${n}.valueDomain`),
		points: s
	};
}
function di(e, t) {
	const n = `overlays[${t}]`, i = Qn(e, n), a = {
		phase: li(i.phase, `${n}.phase`),
		order: ii(i.order, `${n}.order`),
		tone: oi(i.tone, `${n}.tone`)
	};
	if ("interval" === i.kind) {
		const e = ti(i.startTimestamp, `${n}.startTimestamp`), t = ti(i.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? Xn(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...a,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === i.kind ? {
		kind: "threshold",
		...a,
		value: ti(i.value, `${n}.value`),
		...ri(i.draggable, `${n}.draggable`, "draggable"),
		...ri(i.selected, `${n}.selected`, "selected"),
		...ri(i.handle, `${n}.handle`, "handle"),
		...void 0 === i.label ? {} : { label: si(i.label, `${n}.label`) }
	} : "instant" === i.kind ? {
		kind: "instant",
		...a,
		timestamp: ti(i.timestamp, `${n}.timestamp`)
	} : Xn(`${n}.kind`, "expected interval, threshold, or instant");
}
function mi(e) {
	const t = Qn(e, "scene");
	if (2 !== t.version) return Xn("version", "expected 2");
	const n = Qn(t.grid, "grid"), i = {
		strategy: (a = n.strategy, "string" == typeof a && Jn.includes(a) ? a : Xn("grid.strategy", "expected a supported render-grid strategy")),
		sourcePointCount: ai(n.sourcePointCount, "grid.sourcePointCount"),
		renderedPointCount: ai(n.renderedPointCount, "grid.renderedPointCount")
	};
	var a;
	if (i.renderedPointCount > i.sourcePointCount) return Xn("grid", "renderedPointCount cannot exceed sourcePointCount");
	if ("full-resolution-v1" === i.strategy && i.renderedPointCount !== i.sourcePointCount) return Xn("grid", "full-resolution strategy requires equal point counts");
	const r = Qn(t.size, "size"), s = {
		width: ni(r.width, "size.width"),
		height: ni(r.height, "size.height")
	}, o = Qn(t.plotArea, "plotArea"), l = {
		left: ti(o.left, "plotArea.left"),
		top: ti(o.top, "plotArea.top"),
		width: ni(o.width, "plotArea.width"),
		height: ni(o.height, "plotArea.height")
	};
	if (l.left < 0 || l.top < 0 || l.left + l.width > s.width || l.top + l.height > s.height) return Xn("plotArea", "expected bounds contained by size");
	const u = ui(t.viewport, "viewport"), c = ui(t.valueDomain, "valueDomain"), d = ei(t.series, "series").map(ci);
	if (0 === d.length && 0 !== i.renderedPointCount) return Xn("grid.renderedPointCount", "expected zero when series is empty");
	const m = d[0]?.points.map((e) => e.timestamp) ?? [];
	for (let f = 0; f < d.length; f++) {
		const e = d[f]?.points ?? [];
		if (e.length !== i.renderedPointCount) return Xn(`series[${f}].points`, "expected renderedPointCount aligned points");
		for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return Xn(`series[${f}].points[${t}].timestamp`, "expected the shared render grid timestamp");
	}
	const p = ei(t.overlays, "overlays").map(di), g = null === t.cursorTimestamp ? null : ti(t.cursorTimestamp, "cursorTimestamp");
	let h = null;
	if (null !== t.selection) {
		const e = Qn(t.selection, "selection"), n = ti(e.startTimestamp, "selection.startTimestamp"), i = ti(e.endTimestamp, "selection.endTimestamp");
		if (i <= n) return Xn("selection", "expected a half-open ascending interval");
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
function pi(e, t, n) {
	const i = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(i) ? i : Xn("projection", "expected a finite pixel coordinate");
}
function gi(e, t, n) {
	const i = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(i) ? i : Xn("projection", "expected a finite pixel coordinate");
}
function hi(e) {
	const t = Number(e.toFixed(6));
	return Object.is(t, -0) ? "0" : String(t);
}
function fi(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function _i(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, i = t.plotArea.height, a = Zn[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const r = fi(pi(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), s = fi(pi(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${hi(r)}" y="0" width="${hi(Math.max(1, s - r))}" height="${hi(i)}" fill="${a}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const r = gi(e.value, t.valueDomain, i), s = !0 === e.selected, o = s ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${s ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${hi(r)}" x2="${hi(n)}" y2="${hi(r)}" stroke="${a}" stroke-width="${s ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const r = pi(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${hi(r)}" y1="0" x2="${hi(r)}" y2="${hi(i)}" stroke="${a}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function wi(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function yi(e) {
	return String(e).padStart(2, "0");
}
function vi(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const Mi = [
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
new Set(Mi.slice(16).map(([e]) => e));
var bi = class extends Error {};
const Si = "edit_recompute_requires_ms2_ms3", ki = /* @__PURE__ */ new Set([
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
]), xi = I.invalid_night_row.markerTypeCell, Ii = new Set(Mi.map(([, e]) => e)), Ai = /* @__PURE__ */ new Set([
	R.ggir_sleepparam.header,
	R.ggir_guider_onset.header,
	R.ggir_guider_wakeup.header,
	R.ggir_guider_spt_duration.header,
	R.ggir_error_onset.header,
	R.ggir_error_wake.header,
	R.ggir_error_dur.header,
	R.ggir_fraction_night_invalid.header,
	R.ggir_duration_sib_wakinghours.header,
	R.ggir_number_sib_sleepperiod.header,
	R.ggir_number_sib_wakinghours.header,
	R.ggir_duration_sib_wakinghours_atleast15min.header,
	R.ggir_guider_onset_ts.header,
	R.ggir_guider_wakeup_ts.header,
	R.ggir_page.header,
	R.ggir_daysleeper.header,
	R.ggir_sleeplog_id.header,
	R.ggir_guider.header,
	R.ggir_longitudinal_axis.header
]), Ti = /* @__PURE__ */ new Set([
	R.ggir_sleep_duration_in_spt.header,
	R.ggir_waso.header,
	R.ggir_number_of_awakenings.header,
	R.ggir_sleeplatency.header,
	R.ggir_sleepefficiency.header
]), Ri = /* @__PURE__ */ new Set([
	...Ti,
	R.ggir_sleeponset.header,
	R.ggir_wakeup.header,
	R.ggir_spt_duration.header,
	R.ggir_guider_onset.header,
	R.ggir_guider_wakeup.header,
	R.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	R.ggir_sleeponset_ts.header,
	R.ggir_wakeup_ts.header,
	R.ggir_guider_onset_ts.header,
	R.ggir_guider_wakeup_ts.header,
	R.ggir_daysleeper.header,
	R.ggir_cleaningcode.header,
	R.ggir_guider.header,
	R.ggir_error_onset.header,
	R.ggir_error_wake.header,
	R.ggir_error_dur.header,
	R.ggir_fraction_night_invalid.header,
	R.ggir_duration_sib_wakinghours.header,
	R.ggir_number_sib_sleepperiod.header,
	R.ggir_number_sib_wakinghours.header,
	R.ggir_duration_sib_wakinghours_atleast15min.header
]), Ni = /* @__PURE__ */ new Set([
	R.ggir_id.header,
	R.ggir_filename.header,
	R.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	R.ggir_sleep_regularity_index1.header,
	R.ggir_sri_fraction_valid.header,
	R.ggir_calendar_date.header,
	R.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	R.ggir_cleaningcode.header,
	R.ggir_guider.header,
	R.ggir_sleeplog_used.header,
	R.ggir_acc_available.header,
	R.ggir_daysleeper.header
]), Ei = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), $i = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), Ci = new Set(Object.values(R).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), Oi = new Set(Object.values(R).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), Di = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim());
function Li(e, t, n, i) {
	const a = (e) => n.get(e) ?? "", r = a(t + "_missing_reason");
	if (r && !ki.has(r)) return null;
	const s = r || null;
	if (e.includes("_ggir_review")) {
		if (s) return s;
		const e = a("review_source");
		return "ggir" === e ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const o = a(R.marker_type.header) === xi || "actiware_intervals_export.csv" === e && a(R.interval_kind.header) === xi;
	if (!function(e, t) {
		return "actiware_intervals_export.csv" === e ? Ii.has(t) : "actiware_sleep_wake_export.csv" === e ? t === R.actiware_sleep_wake.header || t === R.actiware_wake_threshold.header : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			R.ggir_id.header,
			R.ggir_filename.header,
			R.ggir_calendar_date.header,
			R.ggir_weekday.header,
			R.ggir_sleeplog_id.header,
			R.ggir_guider_corrected.header,
			R.ggir_cleaningcode.header
		].includes(t) : Ci.has(t);
	}(e, t)) return s || (o ? "invalid_night" : "Manual Nonwear" === a(R.marker_type.header) ? "manual_nonwear_period" : null);
	if ("actiware_intervals_export.csv" === e && Ii.has(t)) {
		if (o) return "invalid_night";
		const e = a(R.interval_kind.header).toLowerCase(), n = a(R.interval_start_local.header);
		if ("daily" === e && n && n === a(R.interval_end_local.header)) return "zero_interval_rows";
		if ([
			R.actiware_onset_latency.header,
			R.actiware_efficiency.header,
			R.actiware_waso.header
		].includes(t)) {
			if ("sleep" !== e) return "not_applicable_to_row";
			if (Di(a(R.actiware_duration.header))) return null;
			const t = a(R.interval_start_local.header), n = a(R.interval_end_local.header);
			if (!t || !n) return null;
			let r = !1;
			for (const e of i) if (e.get(R.filename.header) === a(R.filename.header) && "rest" === e.get(R.interval_kind.header) && (e.get(R.interval_start_local.header) ?? "") <= t && n <= (e.get(R.interval_end_local.header) ?? "")) {
				r = !0;
				break;
			}
			return r ? null : "no_eligible_rest";
		}
		if (Di(a(R.actiware_duration.header))) return null;
		if (t === R.actiware_off_wrist.header || t === R.actiware_off_wrist_percent.header) return t === R.actiware_off_wrist_percent.header && "0.00" === a(R.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === s ? s : null;
		if (t === R.actiware_avg_ac_per_min.header) return 100 === Number(a(R.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			R.actiware_invalid_sw_percent.header,
			R.actiware_wake_percent.header,
			R.actiware_sleep_percent.header
		].includes(t)) {
			if ("0.00" === a(R.actiware_duration.header)) return "zero_interval_rows";
			const e = !Di(a(R.actiware_wake_time.header)) && !Di(a(R.actiware_sleep_time.header)) && 0 === Number(a(R.actiware_wake_time.header)) && 0 === Number(a(R.actiware_sleep_time.header));
			return t === R.actiware_invalid_sw_percent.header || 100 !== Number(a(R.actiware_invalid_sw_percent.header)) && !e ? null : "no_scored_epochs";
		}
		const r = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(t);
		if (r) {
			const e = r[1];
			return "0.00" === a(R.actiware_duration.header) ? "zero_interval_rows" : Di(a("%Invalid " + e)) ? "source_reported_missing" === s ? s : null : t.startsWith("TALT ") && !Di(a("Exposure " + e)) ? "threshold_unconfigured" : 100 === Number(a("%Invalid " + e)) ? "no_valid_epochs" : null;
		}
		return null;
	}
	if ("actiware_sleep_wake_export.csv" === e) {
		if (t === R.actiware_sleep_wake.header) return "no_valid_epochs" === s ? s : null;
		if (t === R.actiware_wake_threshold.header) return "not_computed_for_export" === s ? s : null;
	}
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return Ai.has(t) ? "not_computed_for_export" === s ? s : null : Ti.has(t) ? "no_scored_epochs" === s || "not_applicable_to_row" === s || "scores_from_another_config" === s ? s : null : s;
	if ("sleep_export_wide.csv" === e) return s;
	if ("summary_export.csv" === e && t === R.sleep_regularity_index.header) return s && [
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
		return i && r?.cutpoint && !Number.isFinite(r.cutpoint[i]) || "MIMS Unit Total" === t && "mims" !== n ? "not_applicable_to_row" : "ggir_enmo" === n ? Ei.has(t) ? "source_reported_missing" === s ? s : null : $i.has(t) && "not_computed_for_export" === s ? s : null : "mims" === n && [
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
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === a(R.marker_type.header) ? "manual_nonwear_period" : null : "true" === a(R.is_invalid_night.header).toLowerCase() && a(R.marker_type.header) === xi ? "invalid_night" : t === R.total_nap_minutes.header && "0" === a(R.nap_count.header) ? "not_applicable_to_row" : [
		R.l5_hour.header,
		R.m10_hour.header,
		R.sleep_midpoint_hour.header,
		R.valid_wear_minutes.header
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
const Bi = "missing_reasons.csv";
function Pi(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(r).join(","))].map((e) => e + "\n").join("");
}
function Fi(e, t) {
	const n = [
		R.filename.header,
		R.ggir_filename.header,
		"ggir_filename",
		R.participant_id.header,
		R.ggir_id.header,
		R.study_date.header,
		"Analysis Date",
		R.ggir_calendar_date.header,
		"ggir_calendar_date",
		R.interval_kind.header,
		R.marker_type.header,
		R.interval_start_local.header,
		R.epoch_local.header,
		"Method"
	].flatMap((t) => {
		const n = e.get(t);
		return n ? [t + "=" + n] : [];
	});
	return n.length ? n.join("|") : "row=" + String(t);
}
function Wi(e, t) {
	let n = !1, i = 0;
	for (let a = 0; a < e.length; a += 1) if ("\"" === e[a]) n && "\"" === e[a + 1] ? a += 1 : n = !n;
	else if ("," === e[a] && !n && ++i === t) return e.slice(0, a);
	return e;
}
function* ji(e, t, n = !0, i) {
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
	let S = 0, k = 0;
	for (let u = 0; u < _.length; u += 1) {
		const e = _[u], n = w[u];
		for (const { header: i, index: a } of f) {
			if ("edit_recompute_requires_ms2_ms3" === b[u].get(i + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
				yield {
					file: t,
					row: s + u + 1,
					key: Fi(n, s + u + 1),
					column: i,
					reason: Si
				}, S += 1;
				continue;
			}
			const r = e[a] ?? "";
			if (!Di(r) || "" !== r.trim() && Oi.has(i)) continue;
			const l = Li(t, i, b[u], o?.() ?? b);
			l ? (S += 1, yield {
				file: t,
				row: s + u + 1,
				key: Fi(n, s + u + 1),
				column: i,
				reason: l
			}) : (k += 1, console.warn("WARNING: unreasoned missing export cell"));
		}
	}
	if (n && k > 0) throw new bi(t + ": " + String(k) + " unreasoned missing metric cells");
	return h < 0 ? {
		csv: e,
		withReason: S,
		withoutReason: k
	} : {
		csv: [Wi(m.text, h), ...p.map((e) => Wi(e.text, h))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: S,
		withoutReason: k
	};
}
const Gi = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
];
async function Hi(e, t, n) {
	const i = "nights" === t ? R.ggir_night.header : "window_number", a = H(n), s = await Promise.all(e.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await Sn(e.imported, e.edits, t.night, n)])))), o = (await Promise.all(e.map(async (e, n) => {
		const i = e.current ?? e.imported, r = (e) => "nights" === t ? e.nights : e.days, o = "nights" === t ? i.nightRecomputed : i.dayRecomputed, l = "nights" === t ? e.imported.nightChecks : e.imported.dayChecks, u = s[n].filter((e) => null != e[1]), c = function(e, t) {
			const n = new Map(wn(e).map((e) => [e.night, e.nightDate]));
			return (e, i, a = !0) => {
				const r = e.columns.indexOf("nights" === t ? R.ggir_night.header : "night_number"), s = Number(e.values[r]?.[i]), o = n.get(s);
				if (a && o) return o;
				const l = e.values[e.columns.indexOf(R.ggir_calendar_date.header)]?.[i];
				if ("string" != typeof l) return;
				if (/^\d{4}-\d{2}-\d{2}$/.test(l)) return l;
				const u = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(l);
				return u ? `${u[3]}-${u[2].padStart(2, "0")}-${u[1].padStart(2, "0")}` : void 0;
			};
		}(e.imported, t), d = new Set(e.edits.map((e) => e.night)), m = e.edits.length > 0 && (!e.ms2 || !e.ms3) && !e.current, p = /* @__PURE__ */ new Set();
		if ("days" === t && m) {
			const t = await Promise.all(wn(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), i = t.nightDate, r = n.onset < "12:00:00" ? await T(i, void 0, a) : i, s = n.wake <= n.onset ? await T(r, void 0, a) : r;
				return [Math.min(t.onsetMs, Date.parse(`${r}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${s}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: i.days.rows }, async (e, n) => {
				const r = Number(i.days.values[i.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(r)) return void p.add(n);
				const s = c(i.days, n, !1), o = i.days.values[i.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof o ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(o) : null;
				if (!s || !l) return;
				const u = Date.parse(`${s}T${l[1]}Z`), m = l[2] < l[1] ? await T(s, void 0, a) : s, g = Date.parse(`${m}T${l[2]}Z`);
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
			table: r(i),
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
	const u = o.some((e) => e.editRecomputeUnavailable || "ggir_corrected" === e.source) ? l : [], c = [[
		...l.map(r),
		...Gi,
		...u.map((e) => r(e + "_missing_reason")),
		...Gi.map((e) => e + "_missing_reason")
	].join(",")], d = (e, t) => {
		const n = e.columns.indexOf(i);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: m, ggir: p, recomputed: g, provenance: h, checks: f, scoredDates: _, invalidDates: w, dateOf: y, editRecomputeUnavailable: v, editedNights: M, editedDayRows: b, savedNights: S, source: k } of o) {
		const e = S.columns.filter((e) => !Ri.has(e)), n = e.filter((e) => {
			const t = S.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return S.values[t].some((e, t) => {
				const i = Number(S.values[S.columns.indexOf(R.ggir_night.header)]?.[t]), a = n.has(i) && !Object.is(n.get(i), e);
				return n.set(i, e), a;
			});
		}), i = /* @__PURE__ */ new Set(), a = (e) => Array.from({ length: p.rows }, (e, t) => t).find((t) => !i.has(t) && d(p, t) === d(m, e) && n.every((n) => Object.is(p.values[p.columns.indexOf(n)]?.[t] ?? null, m.values[m.columns.indexOf(n)]?.[e] ?? null))), s = new Set(l.filter((n) => "nights" === t ? Ri.has(n) : !Ni.has(n) && !e.includes(n))), o = (n, i, a, o) => {
			const c = f.get(d(n, i));
			return [
				...l.map((s) => {
					if ("invalid" === a && ("nights" === t ? Ri.has(s) : /sleep|spt|waso|wake|onset|guider/i.test(s) && !e.includes(s))) return "";
					const o = n.columns.indexOf(s);
					return o < 0 ? "" : (l = n.values[o]?.[i], null == l ? "" : "number" == typeof l ? Number.isFinite(l) ? String(l) : "" : r(String(l)));
					var l;
				}),
				a,
				c?.status ?? "",
				r((c?.reasons ?? []).join(";")),
				r((c?.diffs ?? []).map((e) => e.column).join(";")),
				r(o),
				...u.map((e) => "invalid" === a ? "invalid_night" : v && a === k && s.has(e) && ("days" === t ? b.has(i) : M.has(d(n, i))) ? Si : a === k ? "source_reported_missing" : "not_computed_for_export"),
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
			const n = a(t);
			if (null != n && i.add(n), e && w?.has(e)) {
				null != n && c.push(o(p, n, k, "")), c.push(o(m, t, "invalid", ""));
				continue;
			}
			if (!g[t]) {
				c.push(o(m, t, k, ""));
				continue;
			}
			const r = d(m, t);
			null != n && c.push(o(p, n, k, "")), c.push(o(m, t, "recomputed", h(r)));
		}
		for (let t = 0; t < p.rows; t += 1) {
			if (i.has(t)) continue;
			const e = y(p, t);
			(!_ || e && _.has(e)) && (c.push(o(p, t, k, "")), e && w?.has(e) && c.push(o(p, t, "invalid", "")));
		}
	}
	return c.length > 1 ? `${c.join("\n")}\n` : null;
}
const zi = x.ggir_part4_nightsummary_csv, Ui = zi.map((e) => R[e].header), Vi = [
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
], qi = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function Ki(e, t) {
	const n = R[e], i = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof i ? r(i) : wi(i, { integral: n.ggirIntegral ?? !1 });
}
function Yi(e, t = "legacy-recording", n, a) {
	const r = [], s = [];
	for (const i of e) i.states && 0 !== i.timestamps.length && (s.push(i.states.subarray(0, Math.min(i.timestamps.length, i.states.length))), r.push({
		seriesId: t,
		...void 0 === n ? {} : { epochLengthSeconds: n },
		timestamps: i.timestamps,
		states: i.states
	}));
	const o = new Uint8Array(s.reduce((e, t) => e + t.length, 0));
	s.reduce((e, t) => (o.set(t, e), e + t.length), 0);
	const l = e.length > 0 && e.every((e) => null == e.states) ? "no_scored_epochs" : "no_valid_epochs";
	return 0 === o.length ? Promise.resolve({
		sri: null,
		fractionValid: null,
		sriMissingReason: l,
		fractionValidMissingReason: l
	}) : H(a).validStateFraction(o).then(async (e) => {
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
		const s = (void 0 === n || 86400 % n == 0) && [...t].some(([e, n]) => n && t.get(e + 86400)), o = s ? null : "insufficient_pair", l = await async function(e, t) {
			const n = Array.isArray(e) ? e : [e], a = n.map((e) => ({
				...void 0 === e.seriesId ? {} : { series_id: e.seriesId },
				...void 0 === e.epochLengthSeconds ? {} : { epoch_length_seconds: e.epochLengthSeconds }
			})), [r, s] = Bn(n.map((e) => e.timestamps)), [o, l] = Bn(n.map((e) => e.states));
			return H(t).sleepRegularityIndex(i([
				JSON.stringify(a),
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
		}(r, a);
		if (s && null == l) throw new Error("SRI producer returned a blank despite valid pairs");
		return {
			sri: l,
			fractionValid: e,
			sriMissingReason: o,
			fractionValidMissingReason: null
		};
	});
}
async function Ji(e, t, n, i = {}) {
	const { signal: a } = i, r = e.participantId ?? e.filename, o = Re(n.values(), i.algorithm), l = [];
	for (const [s, y] of n) {
		if (!sa(s, i.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = Rn(y, o);
		l.push({
			timestamps: e,
			states: t
		});
	}
	const u = await Yi(l, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, a), { sri: c, fractionValid: d } = u, m = "stale" === o.status ? "scores_from_another_config" : null, p = m ?? u.sriMissingReason, g = m ?? u.fractionValidMissingReason, h = [];
	for (const y of [...t.keys()].sort()) {
		const e = t.get(y);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === s.MAIN_SLEEP && null != t.onsetTimestamp && h.push({
			date: y,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const f = [[
		...Ui,
		...Vi.map((e) => `${R[e].header}_missing_reason`),
		...qi.map((e) => `${R[e].header}_missing_reason`),
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
			const { timestamps: i, algorithmResults: r } = await Vn(n, s, o, a);
			if (r && i.length > 0) {
				t.missingReason = null;
				const n = await An(r, i, y, v, e.epochLengthSeconds || 60, null, a);
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
	const w = await H(a).ggirManualNightClocks(h.map((e) => e.date), Float64Array.from(h, (e) => e.onsetTs), Float64Array.from(h, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let s = 0; s < h.length; s++) {
		const { onsetTs: t, wakeupTs: n } = h[s], i = w[s], { tstH: a, nAwak: o, latency: l, efficiency: u } = _[s], m = {
			ggir_id: r,
			ggir_night: s + 1,
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
			...zi.map((e) => Ki(e, m[e])),
			...Vi.map((e) => {
				const t = zi.indexOf(e);
				return t >= 0 && null == m[zi[t]] ? "not_computed_for_export" : "";
			}),
			...qi.map((e) => {
				const t = zi.indexOf(e);
				return t >= 0 && null == m[zi[t]] ? _[s].missingReason ?? "" : "";
			}),
			p ?? "",
			g ?? ""
		].join(","));
	}
	return f.join("\n") + "\n";
}
function Zi(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const Xi = "actogram_report.html";
function Qi(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function ea(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function ta(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: i } = Qi(n), a = [e, i].filter(Boolean);
		t.set(n, 0 === a.length ? "part4_nightsummary.csv" : `part4_nightsummary_${a.join("_")}.csv`);
	}
	return t;
}
function na(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : J(e);
}
function ia(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function aa(e, t) {
	const n = [...e.keys()], i = n.reduce((t, n) => t + (e.get(n)?.algos.length ?? 0), 0), a = [];
	return a.push(`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${Zi(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${Zi(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${i} chart${1 !== i ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${Zi(e.get(t)?.pid ?? t)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`), n.forEach((n, i) => {
		const r = e.get(n);
		a.push(`<section class="pid-sec${0 === i ? " initial" : ""}" id="sec-${i}">`), a.push(`  <h2 class="pid-lbl">${Zi(r.pid)}</h2>`), r.algos.forEach(([e, s], o) => {
			const { algoKey: l, ruleKey: u } = Qi(e), c = ia([l, u].filter(Boolean).join("_"), "unscoped"), d = `activity-${ia(n, "recording")}-${c}-${t}.svg`, m = function(e) {
				if (0 === e.timestamps.length) return vi("expected at least one epoch");
				if (e.timestamps.length !== e.activity.length) return vi("timestamp and activity lengths must match");
				let t = Number.NEGATIVE_INFINITY, n = 0, i = 0;
				const a = e.timestamps.map((a, r) => {
					const s = e.activity[r];
					return !Number.isFinite(a) || a <= t ? vi("timestamps must be finite and strictly ascending") : (t = a, null != s && Number.isFinite(s) ? (n = Math.min(n, s), i = Math.max(i, s), {
						timestamp: a,
						value: s
					}) : {
						timestamp: a,
						value: null
					});
				}), r = a[0].timestamp, s = a[a.length - 1].timestamp, o = s > r ? s : r + 1;
				if (!Number.isFinite(o) || o <= r) return vi("single-epoch viewport must have a representable right edge");
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
				return mi({
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
				const t = mi(e), n = hi(t.size.width), i = hi(t.size.height), a = hi(t.plotArea.width), r = hi(t.plotArea.height), s = _i(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
					let i = "", a = !1;
					for (const r of e.points) {
						if (null == r.value) {
							a = !1;
							continue;
						}
						const t = pi(r.timestamp, n.viewport, {
							left: 0,
							width: n.plotArea.width
						}), s = gi(r.value, e.valueDomain, n.plotArea.height);
						i += `${a ? "L" : "M"}${hi(t)} ${hi(s)}`, a = !0;
					}
					return 0 === i.length ? "" : `<path data-series-index="${t}" d="${i}" fill="none" stroke="${Zn[e.tone]}" stroke-width="${hi(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
				}(e, n, t)).join(""), l = _i(t, "over-series");
				return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${i}" viewBox="0 0 ${n} ${i}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${i}" fill="#ffffff"/><svg x="${hi(t.plotArea.left)}" y="${hi(t.plotArea.top)}" width="${a}" height="${r}" viewBox="0 0 ${a} ${r}" overflow="hidden"><rect x="0" y="0" width="${a}" height="${r}" fill="#ffffff"/>${s}${o}${l}${function(e) {
					const t = e.selection;
					if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
					const n = fi(pi(t.startTimestamp, e.viewport, {
						left: 0,
						width: e.plotArea.width
					}), 0, e.plotArea.width), i = fi(pi(t.endTimestamp, e.viewport, {
						left: 0,
						width: e.plotArea.width
					}), 0, e.plotArea.width);
					return `<rect data-activity-plot-selection="true" x="${hi(n)}" y="0" width="${hi(Math.max(1, i - n))}" height="${hi(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
				}(t)}${function(e) {
					const t = e.cursorTimestamp;
					if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
					const n = pi(t, e.viewport, {
						left: 0,
						width: e.plotArea.width
					});
					return `<line data-activity-plot-cursor="true" x1="${hi(n)}" y1="0" x2="${hi(n)}" y2="${hi(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
				}(t)}</svg><rect x="${hi(t.plotArea.left)}" y="${hi(t.plotArea.top)}" width="${a}" height="${r}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
			}(m);
			a.push(`  <div class="algo-block" data-algorithm-key="${Zi(e)}">`), a.push(`    <div class="algo-lbl">${Zi(function(e) {
				const { algoKey: t, ruleKey: n } = Qi(e), i = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
				return t || n ? n ? `${i(t)} / ${i(n)}` : i(t) : "Legacy / Unscoped";
			}(e))}</div>`), s.stale && a.push(`    <div class="algo-stale" role="status">${Zi(s.stale)}</div>`), a.push(`    <div class="cwrap" id="c${i}_${o}">`), a.push(`      <div class="plot-svg">${p}</div>`), a.push(`      <button type="button" class="svg-btn" data-download-name="${Zi(d)}">Download SVG</button>`), a.push(`      <div class="scene-meta">${Zi(na(m.viewport.min))} → ${Zi(na(m.viewport.max))} · activity domain ${wi(m.valueDomain.min)}–${wi(m.valueDomain.max)}</div>`), a.push("    </div>"), a.push("  </div>");
		}), a.push("</section>");
	}), a.push("<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>"), a.push("</body>\n</html>"), a.join("\n");
}
function ra(e) {
	return new TextEncoder().encode(e);
}
function sa(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function oa(e, t, n, i) {
	const a = [], r = [];
	for (const [s, o] of e) if (s) for (let e = 0; e < Math.min(s.length, o.length); e++) a.push(o[e]), r.push(s[e]);
	return await H(i).spanFiniteMean(Float64Array.from(a), Float64Array.from(r), t, n) ?? null;
}
function la(e) {
	return "string" == typeof e ? e : null;
}
function ua(e) {
	return "number" == typeof e ? e : null;
}
function ca(e, t) {
	const n = function(e, t) {
		switch (e.formatter) {
			case "verbatim_string": return function(e) {
				return e ? r(e) : "";
			}(la(t));
			case "display_label": {
				const n = la(t);
				return n ? function(e) {
					return e ? r(e) : "";
				}(e.labelEnum ? b(e.labelEnum, n) : n) : "";
			}
			case "core_printed_text":
			case "date_iso": return function(e) {
				return e ?? "";
			}(la(t));
			case "integer": return function(e) {
				return null == e ? "" : String(Math.trunc(e));
			}(ua(t));
			case "fixed2": return function(e) {
				return null == e ? "" : e.toFixed(2);
			}(ua(t));
			case "python_scalar_str": return function(e) {
				return null == e ? "" : String(e);
			}("boolean" == typeof t ? null : t);
			case "python_float_repr": return function(e) {
				if (null == e) return "";
				if (!Number.isFinite(e)) return String(e);
				const t = String(e);
				return t.includes(".") || t.includes("e") ? t : `${t}.0`;
			}(ua(t));
			case "python_bool": return function(e) {
				return null == e ? "" : e ? "True" : "False";
			}("boolean" == typeof t ? t : null);
			case "clock_hhmm": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${yi(t.getUTCHours())}:${yi(t.getUTCMinutes())}`;
			}(ua(t));
			case "datetime_seconds": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${String(t.getUTCFullYear())}-${yi(t.getUTCMonth() + 1)}-${yi(t.getUTCDate())} ${yi(t.getUTCHours())}:${yi(t.getUTCMinutes())}:${yi(t.getUTCSeconds())}`;
			}(ua(t));
			case "ggir_value": return wi(t, { integral: e.ggirIntegral ?? !1 });
		}
	}(e, t);
	return "" === n ? S[e.sentinel] : n;
}
function da(e, t) {
	if (!t) return "";
	const { labelEnum: n } = R[e];
	return n ? b(n, t) : t;
}
const ma = I.invalid_night_row?.markerTypeCell ?? "", pa = I.nonwear_row?.markerTypeCell ?? "";
function ga(e) {
	return x[e].filter((e) => "server" !== R[e].plane);
}
function ha(e) {
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
function fa(e) {
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
const _a = [
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
async function wa(e, t, n, i, a, r, s) {
	try {
		return {
			metrics: t ? await Tn(e, t, n, i, a, r, s) : await An(e, n, i, a, r, null, s),
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
async function ya(e, t, n, i, a, r, o) {
	const l = a && a.trim().length > 0 ? a.trim() : null, u = xs(r, _s.sleep), c = u.files, d = $n(u.studySettings[0]?.extraSettings), m = (e.length > 0 ? c.filter((t) => null != t.id && e.includes(t.id)) : [...c]).sort((e, t) => e.filename.localeCompare(t.filename)), [p, g] = n ?? ["", ""], h = [], f = [], _ = [], w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), v = async () => {
		for (const [e, t] of w) y.set(e, await va(e, t, h, o));
		w.clear();
	}, M = /* @__PURE__ */ new Map(), b = (e) => {
		const t = JSON.stringify(e);
		let n = M.get(t);
		return n || (n = H(o).exportNapAggregate(e), M.set(t, n)), n;
	}, S = await Promise.all(m.map((e) => Rs(r, e.id, t, o)));
	for (const [x, I] of m.entries()) {
		if (o?.throwIfAborted(), x > 0 && m[x - 1].filename !== I.filename && await v(), !I.id) continue;
		const e = Ns(u, I.id), { bundle: t, markersByAlgo: a } = S[x], r = t?.edits ?? [], c = t ? wn(t.imported) : [], { zone: y } = await Ln(I, d, o), M = [.../* @__PURE__ */ new Set([...I.availableDates, ...c.map((e) => e.nightDate)])].sort(), k = n ? M.filter((e) => e >= p && e <= g) : M, A = Ee(e.values());
		for (const n of k) {
			o?.throwIfAborted();
			const u = a.get(n);
			if (u && 0 !== u.length) for (const a of u) {
				if (!a.isInvalidNight && 0 === a.sleepMarkers.length && 0 === a.nonwearMarkers.length) continue;
				const u = I.participantId ?? null, d = I.id, m = a.algorithm ?? null, p = a.username ?? null, g = a.needsConsensus, v = a.notes, M = e.get(n), S = await T(n, void 0, H(o)), k = e.get(S), x = {
					fileId: d,
					filename: I.filename,
					participantId: u,
					studyDate: n,
					algorithm: m,
					scoredBy: p,
					needsConsensus: g,
					notes: v,
					meanTemperature: null,
					meanWhiteLight: null,
					meanRedLight: null,
					meanGreenLight: null,
					meanBlueLight: null,
					detectionRule: a.detectionRule ?? null,
					periodGuider: a.periodGuider ?? null,
					...ha(a.sleepPeriodDetectionConfig),
					algorithmVersion: a.algorithmVersion ?? null,
					verificationStatus: null,
					studyId: l,
					dstTransition: await Pe(y, n, void 0, H(o))
				}, N = await b(a.sleepMarkers.filter((e) => e.markerType === s.NAP).map((e) => ({
					start: e.onsetTimestamp,
					end: e.offsetTimestamp
				}))), E = i?.get(`${String(d)}|${n}`), $ = {
					l5Hour: E?.l5Hour ?? null,
					m10Hour: E?.m10Hour ?? null,
					napCount: N.napCount,
					totalNapMinutes: N.napCount > 0 ? N.totalNapMinutes : null
				}, C = a.nonwearMarkers.map((e) => ({
					start: e.startTimestamp,
					end: e.endTimestamp
				})), O = A(m), D = Rn(M, O), L = `${I.filename}\0${u ?? ""}\0${x.algorithm ?? ""}\0${x.detectionRule ?? ""}`, B = w.get(L) ?? [];
				B.push({
					date: n,
					epochLengthSeconds: I.epochLengthSeconds || 60,
					timestamps: D.timestamps,
					states: D.algorithmResults,
					stale: "stale" === O.status
				}), w.set(L, B);
				const P = M?.temperature ? new Float64Array(M.temperature) : null, F = Be(M).timestamps, W = k?.temperature ? new Float64Array(k.temperature) : null, j = Be(k).timestamps, G = await Vn(e, n, O, o), z = async (e, t, n) => {
					if (!t || !n) return null;
					const i = (e) => e ? new Float64Array(e) : null;
					return oa([[i(M?.[e]), F], [i(k?.[e]), j]], t, n, o);
				}, V = (e, t) => oa([[P, F], [W, j]], e, t, o), q = async (e, i) => {
					let l = null;
					const u = c.find((e) => e.nightDate === n), d = t && u && e.markerType === s.MAIN_SLEEP && "invalid" !== U(u, a).kind, m = u && r.some((e) => e.night === u.night), p = fa(null), g = {};
					let h = "not_applicable_to_row";
					if (!d && e.onsetTimestamp && e.offsetTimestamp) {
						const { timestamps: t, algorithmResults: n, activity: i, scoresStale: a } = G;
						if (null !== a && 0 === _.length && _.push({
							component: "metric_computation",
							code: "unavailable",
							message: a
						}), h = null !== a ? "scores_from_another_config" : null == n ? "no_scored_epochs" : null == i ? "channel_unavailable" : 0 === t.length ? "no_valid_epochs" : void 0, null != n && t.length > 0 && (null != i || Be(M).ggir)) {
							const a = Be(M).ggir ? Be(M).epochSec : I.epochLengthSeconds || 60, r = await wa(n, i, t, e.onsetTimestamp, e.offsetTimestamp, a, o);
							l = r.metrics, l || r.error || (h = "no_valid_epochs"), r.error && (h = "not_computed_for_export"), r.error && 0 === _.length && _.push({
								component: "metric_computation",
								code: "unavailable",
								message: "Metric computation failed for at least one selected period; those rows carry no numerics."
							});
						}
					}
					if (d) {
						h = "channel_unavailable";
						const e = m ? t.current?.nights : t.imported.nights, n = e ? mn(e, R.ggir_night.header, u.night) : -1;
						for (const [t, i, a, r] of _a) {
							const s = e ? dn(e, R[i].header, n) : null;
							p[t] = null == s ? null : s * r, g[a] = null == s ? m ? "not_computed_for_export" : "source_reported_missing" : void 0;
						}
					}
					(d || l && !("averageAwakeningLengthMinutes" in l)) && (g.average_awakening_length_minutes = "not_computed_for_export");
					const f = await H(o).exportPeriodFigures(e.onsetTimestamp, e.offsetTimestamp, C), w = Boolean(e.onsetTimestamp && e.offsetTimestamp), y = {
						...x,
						...$,
						periodIndex: e.markerIndex,
						markerType: e.markerType,
						onsetTimestamp: e.onsetTimestamp,
						offsetTimestamp: e.offsetTimestamp,
						...d ? p : fa(l),
						metricMissingReason: h,
						isInvalidNight: i,
						meanTemperature: e.onsetTimestamp && e.offsetTimestamp ? await V(e.onsetTimestamp, e.offsetTimestamp) : null,
						meanWhiteLight: await z("lux", e.onsetTimestamp, e.offsetTimestamp),
						meanRedLight: await z("redLight", e.onsetTimestamp, e.offsetTimestamp),
						meanGreenLight: await z("greenLight", e.onsetTimestamp, e.offsetTimestamp),
						meanBlueLight: await z("blueLight", e.onsetTimestamp, e.offsetTimestamp),
						sleepMidpointTimestamp: w ? f.midpointTimestamp : null,
						sleepMidpointHour: w ? f.midpointClockHour : null,
						validWearMinutes: f.validWearMinutes
					}, v = (e, t) => null != e ? void 0 : w ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
					return y.sensorMissingReasons = {
						mean_temperature_c: v(y.meanTemperature, Boolean(M?.temperature || k?.temperature)),
						mean_white_light_lux: v(y.meanWhiteLight, Boolean(M?.lux || k?.lux)),
						mean_red_light: v(y.meanRedLight, Boolean(M?.redLight || k?.redLight)),
						mean_green_light: v(y.meanGreenLight, Boolean(M?.greenLight || k?.greenLight)),
						mean_blue_light: v(y.meanBlueLight, Boolean(M?.blueLight || k?.blueLight))
					}, y.derivedMissingReasons = {
						...g,
						l5_hour: null == y.l5Hour ? E ? "no_valid_epochs" : "not_computed_for_export" : void 0,
						m10_hour: null == y.m10Hour ? E ? "no_valid_epochs" : "not_computed_for_export" : void 0,
						sleep_midpoint_time: null == y.sleepMidpointTimestamp ? w ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
						sleep_midpoint_hour: null == y.sleepMidpointHour ? w ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
						valid_wear_minutes: null == y.validWearMinutes ? w ? "no_valid_epochs" : "not_applicable_to_row" : void 0
					}, y;
				};
				if (a.isInvalidNight) {
					h.push({
						...x,
						...$,
						periodIndex: null,
						markerType: ma,
						onsetTimestamp: null,
						offsetTimestamp: null,
						...fa(null),
						isInvalidNight: !0,
						sleepMidpointTimestamp: null,
						sleepMidpointHour: null,
						validWearMinutes: null
					});
					for (const e of a.sleepMarkers) h.push(await q(e, !0));
				} else for (const e of a.sleepMarkers) h.push(await q(e, !1));
				for (const e of a.nonwearMarkers) f.push({
					...x,
					...$,
					periodIndex: e.markerIndex ?? 0,
					markerType: pa,
					onsetTimestamp: e.startTimestamp,
					offsetTimestamp: e.endTimestamp,
					...fa(null),
					isInvalidNight: !1,
					sleepMidpointTimestamp: null,
					sleepMidpointHour: null,
					validWearMinutes: null
				});
			}
		}
	}
	await v(), h.sort(Ma), f.sort(Ma);
	const k = await async function(e, t) {
		const n = e.filter((e) => e.markerType === s.MAIN_SLEEP), i = /* @__PURE__ */ new Map();
		for (const s of n) {
			const e = `${s.filename}\0${s.participantId ?? ""}\0${s.algorithm ?? ""}\0${s.detectionRule ?? ""}`, t = i.get(e);
			t ? t.push(s) : i.set(e, [s]);
		}
		const a = [...i], r = await H(t).summarizeExportGroups(a.map(([, e]) => e.map((e) => ({
			study_date: e.studyDate,
			total_nap_minutes: e.totalNapMinutes,
			values: ba.map(([, t]) => e[t])
		})))), o = a.map(([e, t], n) => {
			const [i, a, s, o] = e.split("\0"), l = r[n], u = Object.fromEntries(ba.map(([e], t) => [e, l.means[t] ?? null]));
			return {
				filename: i,
				participantId: a,
				algorithm: s,
				detectionRule: o,
				nNights: l.nNights,
				...u,
				meanTemperatureMissingReason: null == u.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
				metricMissingReasons: Object.fromEntries(ba.map(([e, n]) => {
					const i = Sa[e], a = _a.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : i), r = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[a] ?? e.metricMissingReason).find(Boolean);
					return [i, null == u[e] ? r : void 0];
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
async function va(e, t, n, i) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const a = new Set(n.filter((t) => t.markerType === s.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return a.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : Yi(t.filter((e) => a.has(e.date)), e, t[0]?.epochLengthSeconds, i);
}
function Ma(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const ba = [
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
], Sa = {
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
}, ka = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => da("algorithm", e.algorithm),
	summary_detection_rule: (e) => da("detection_rule", e.detectionRule),
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
}, xa = M;
function Ia(e) {
	return W(e);
}
function Aa(e) {
	return JSON.stringify(e, null, 2);
}
const Ta = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function Ra(e = xa, t = !1) {
	return Ba("codebook_csv", e, Ta, void 0, t);
}
const Na = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], Ea = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function $a(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== s.MAIN_SLEEP) continue;
		const e = Na.map((e) => Da(e, n)).join("\0"), i = t.get(e);
		i ? i.push(n) : t.set(e, [n]);
	}
	return t;
}
function* Ca(e, t = !1) {
	const n = $a(e);
	let i = 0;
	const a = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > i && (i = t.length), t;
	}), r = Na.map((e) => R[e].header);
	for (let o = 1; o <= i; o++) for (const [e] of Ea) r.push(`night${String(o)}_${e}`);
	const s = r;
	yield t ? [...r, ...s.map((e) => e + "_missing_reason")].join(",") : r.join(",");
	for (const o of a) {
		const e = o[0], n = Na.map((t) => Da(t, e)), a = Na.map((t) => Oa[t]?.(e) ? "" : La[t] ?? "");
		for (let t = 0; t < i; t++) {
			const e = o[t];
			for (const [t, i] of Ea) {
				const r = e ? Da(i, e) : "";
				n.push(r), a.push(r ? "" : e ? "date" === t ? "" : e.derivedMissingReasons?.[i] ?? e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? a : []].join(",");
	}
}
const Oa = {
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
function Da(e, t) {
	return ca(R[e], Oa[e]?.(t) ?? null);
}
const La = {
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
function Ba(e, t, n, i, a = !1) {
	const r = i && i.length > 0 ? new Set(i) : null, s = ga(e).filter((e) => null == r || r.has(R[e].header)), o = a ? s.filter((e) => La[e]) : [], l = [[...s.map((e) => R[e].header), ...o.map((e) => R[e].header + "_missing_reason")].join(",")];
	for (const u of t) l.push([...s.map((e) => ca(R[e], n[e]?.(u) ?? null)), ...o.map((e) => {
		const t = n[e]?.(u);
		return null == t || "" === t ? La[e] ?? "" : "";
	})].join(","));
	return l.join("\n");
}
function Pa(e, t, n = !1) {
	const i = Ba("sleep_csv", e, Oa, t, n), a = t?.length ? new Set(t) : null, r = [
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
	].filter((t) => (!a || a.has(R[t].header)) && e.some((e) => r.includes(t) && null == Oa[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || s.includes(t) && e.metricMissingReason));
	return 0 === o.length ? i : c(i).records.map((t, n) => {
		if (0 === n) return t.text + "," + o.map((e) => `${R[e].header}_missing_reason`).join(",");
		const i = e[n - 1];
		return t.text + "," + o.map((e) => i.markerType === pa ? "manual_nonwear_period" : i.markerType === ma ? "invalid_night" : r.includes(e) ? null == Oa[e]?.(i) ? "source_reported_missing" : "" : i.sensorMissingReasons?.[e] ?? i.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? i.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (s.includes(e) ? i.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
ga("sleep_csv").map((e) => R[e].header);
const Fa = k("event_marker_csv", "local"), Wa = 86400, ja = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * Wa * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), Ga = (e) => e < 10 ? `0${String(e)}` : String(e);
function Ha(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / Wa), n = e - t * Wa;
	return `${ja(t)} ${Ga(Math.floor(n / 3600))}:${Ga(Math.floor(n / 60) % 60)}:${Ga(n % 60)}`;
}
function za(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function Ua(e, t, n, i, a) {
	const r = [], s = xs(n, _s.event), o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		a?.throwIfAborted();
		const e = za(l, Ns(s, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await zn(e, H(a)), u = new Set(As(s, l.id, i).keys());
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
const Va = I.invalid_night_row.markerTypeCell, qa = k("actiware_interval_csv", "local"), Ka = (e, t) => Math.round(e) === Math.round(t);
function Ya(e, t = !1) {
	const n = t ? Mi.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], i = [[
		...qa,
		...n.map(([, e]) => e + "_missing_reason"),
		...t ? [
			"Participant ID_missing_reason",
			"Origin_missing_reason",
			"Analysis_missing_reason"
		] : []
	].join(",")], a = (e) => Number.isFinite(e) ? Ha(Math.round(e)) : "";
	for (const { filename: s, participantId: o, studyDate: l, interval: u, statistics: c, invalidNight: d } of e) {
		const e = !0 === d && !Number.isFinite(u.startTimestamp), m = [
			s,
			o ?? "",
			l,
			d ? Va : u.kind,
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
			...m.map((e) => r(e)),
			...Mi.map(([, e]) => c?.printed?.[e] ?? ""),
			...p,
			...t ? [
				o ? "" : "source_reported_missing",
				e ? "invalid_night" : u.origin ? "" : "source_reported_missing",
				u.analysis ? "" : d ? "invalid_night" : "not_applicable_to_row"
			] : []
		].join(","));
	}
	return `${i.join("\n")}\n`;
}
const Ja = "local-export-streams";
var Za = class extends Error {
	file;
	step;
	constructor(e, t, n) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t;
	}
};
const Xa = 65536, Qa = "manifest.json", er = "Duplicate export entry: ", tr = "actiware_sleep_wake_export.csv", nr = k("actiware_sleep_wake_csv", "local");
async function ir(e, t, n, i) {
	if (0 === e.scores.byteLength) return [];
	const a = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, r = n ?? new Set(await i.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((a - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), a])));
	return (await Promise.all([...r].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await Gn(t, void 0, void 0, i);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
async function ar(e, t, i, a = n()) {
	return t || i ? (await ir(e, t, i, a)).reduce((e, t) => e + t.end - t.start, 0) : e.scores.byteLength;
}
async function* rr(e, t, n, i, a) {
	a?.throwIfAborted();
	const r = xs(n, _s.actiwareSleepWake), s = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => r.actiwareFileData.find((t) => t.fileId === e.id)), l = function(e, t = !1) {
		const n = [[
			...nr,
			"Sleep/Wake_missing_reason",
			"Wake Threshold_missing_reason",
			...t ? ["Participant ID_missing_reason"] : []
		].join(",")];
		for (const i of e) n.push(sr(i, i.epochTimestamp, i.sleepWake, t));
		return `${n.join("\n")}\n`;
	}([], !0);
	let u = [], c = 0, d = 0;
	const m = () => {
		a?.throwIfAborted();
		const e = function(...e) {
			const t = ji(...e), n = [];
			for (;;) {
				const e = t.next();
				if (e.done) return {
					...e.value,
					reasons: n
				};
				n.push(e.value);
			}
		}(l + u.join("\n") + "\n", tr, !0, { rowOffset: c }), t = c ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
			bytes: new TextEncoder().encode(t),
			rows: u.length,
			reasonRows: e.reasons.length,
			reasons: new TextEncoder().encode(Pi(e.reasons, !1))
		};
		return c += u.length, u = [], d = 0, n;
	};
	for (const [p, g] of s.entries()) {
		a?.throwIfAborted();
		const e = o[p]?.actiwareSleepWake;
		if (!e) continue;
		const n = o[p]?.actiwareWakeThreshold, s = null != n && Number.isFinite(n) ? n : null, l = new Int8Array(e.scores), c = await ir(e, t, new Set(As(r, g.id, i).keys()), H(a));
		a?.throwIfAborted();
		for (const { date: t, start: i, end: a } of c) {
			const n = {
				filename: g.filename,
				participantId: g.participantId ?? null,
				studyDate: t,
				sleepDetection: me(e.params, "sleep_detection"),
				wakeThresholdSelection: me(e.params, "wake_threshold_selection"),
				wakeThreshold: s,
				...null === s ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
			};
			for (let t = i; t < a; t += 1) {
				const i = l[t], a = sr(n, e.startTimestamp + t * e.epochSeconds, 0 === i || 1 === i ? i : null, !0);
				if (a.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
				u.push(a), d += a.length, (512 === u.length || d >= 32768) && (yield m());
			}
		}
	}
	u.length && (yield m()), a?.throwIfAborted();
}
function sr(e, t, n, i) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		Ha(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...i ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => r(e)).join(",");
}
const or = Xa;
function* lr(e) {
	const t = new TextDecoder();
	let n, i = "";
	for (let a = 0; a < e.byteLength; a += or) {
		const r = a + or >= e.byteLength;
		i += t.decode(e.subarray(a, a + or), { stream: !r });
		const s = c(i, r);
		if (r && s.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const o = s.remainder ?? "";
		if (o.length > or || s.records.some((e) => e.text.length > or)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
		if (s.records.length) {
			const e = void 0 === n;
			n ??= s.records[0].text + "\n", yield {
				bytes: new TextEncoder().encode((e ? "" : n) + i.slice(0, i.length - o.length)),
				rows: s.records.length - (e ? 1 : 0)
			};
		}
		i = o;
	}
}
const ur = "union_all";
function cr(e) {
	return e.nonwearDetector ?? "union_all";
}
const dr = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: ur
}, mr = {
	...dr,
	minimumWakeWearMinutes: he.minWearMinutesPerDay
};
function pr(e) {
	return e ? {
		...mr,
		...e
	} : mr;
}
function gr(e, t) {
	const n = [];
	for (const i of e.values()) {
		for (const e of i.sleepMarkers) {
			const t = e.markerType === s.MAIN_SLEEP ? "main_sleep" : e.markerType === s.NAP ? "nap" : null;
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
function hr(e, t, n, i) {
	const a = cr(t), r = "union_all" === a ? Object.entries(ie(e, n)) : [[a, ae(e, a, n)], ..."detach_nonwear" === a ? [] : [["detach_nonwear", ae(e, "detach_nonwear", n)]]], s = new Float64Array(e.timestamps);
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
function fr(e) {
	return {
		excludeNonwear: e.excludeNonwear,
		excludeMainSleep: e.excludeMainSleep,
		excludeNaps: e.excludeNaps,
		useAlgorithmNonwear: e.useAlgorithmNonwear,
		useManualNonwear: e.useManualNonwear,
		minimumWakeWearMinutes: Number.isFinite(e.minimumWakeWearMinutes) ? Math.max(0, e.minimumWakeWearMinutes) : 0
	};
}
function _r(e) {
	return {
		totalEpochs: e.totalEpochs,
		includedEpochs: e.includedEpochs,
		nonwearEpochs: e.nonwearEpochs,
		mainSleepEpochs: e.mainSleepEpochs,
		napEpochs: e.napEpochs,
		overlapEpochs: e.overlapEpochs
	};
}
function wr(e, t) {
	return H(t).summarizePhysicalActivityDays(e);
}
async function yr(e, t = n()) {
	const i = await t.weekendDates([...e]);
	return Array.from(i, (e) => 0 !== e);
}
const vr = C.PRESCHOOL_FREE_LIVING_RF_3_5;
function Mr(e) {
	const t = e.algorithmResults[vr];
	return null != t && new Uint8Array(t).length > 0;
}
function br(e) {
	const t = e.algorithmResults[vr];
	if (!t) return null;
	const n = new Uint8Array(t);
	return n.length > 0 ? n : null;
}
function Sr(e) {
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
function kr(e) {
	return e instanceof Map ? kr([...e.entries()]) : Array.isArray(e) ? e.map(kr) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, kr(t)])) : e;
}
async function xr(e, t) {
	const { db: n, fileId: i, kind: a, inputs: r, signal: s } = e;
	s?.throwIfAborted();
	let o = n, l = null;
	if (o) try {
		const e = await o.activityDays.where("fileId").equals(i).primaryKeys();
		l = await F(JSON.stringify(kr({
			version: 1,
			core: "b50dfcbcd03f27ea918aea20e7fa8bc9638cbde8",
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
		await z(o, [o.physicalActivityFileSummaries], (e) => e.table(o.physicalActivityFileSummaries.name).put({
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
function Ir(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function Ar(e, t) {
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
function Tr(e, t, n) {
	if (!n) return e.ruleLabel;
	const i = String(t.sedentaryMax), a = String(t.lightMin), r = String(t.moderateMin - 1), s = String(t.moderateMin), o = String(t.vigorousMin - 1), l = String(t.vigorousMin);
	return t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, non-sedentary >=${a} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, light ${a}-${r}, MVPA >=${s} counts/min` : `Custom cutpoints: Sed <=${i}, light ${a}-${r}, moderate ${s}-${o}, vigorous >=${l} counts/min`;
}
const Rr = [
	null,
	"sedentary",
	"light",
	"moderate",
	"vigorous"
];
async function Nr(e) {
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
	const l = await H(e.signal).cutpointToneCodes(Float64Array.from(o, (e) => e.countsPerMinute), Ir(i));
	let u = 0;
	const c = [];
	return o.forEach((e, t) => {
		const n = Rr[l[t] ?? 0];
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
function Er(e, t) {
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
function $r(e) {
	e.mvpaMinutesPerDay = e.totalDays > 0 ? e.mvpaMinutes / e.totalDays : 0, e.totalDays > 0 && (null != e.mvpaBouts && (e.mvpaBoutsPerDay = e.mvpaBouts / e.totalDays), null != e.sedentaryBreaks && (e.sedentaryBreaksPerDay = e.sedentaryBreaks / e.totalDays));
}
function Cr(e, t) {
	e.sedentaryMinutes += t.sedentaryMinutes, e.lightMinutes += t.lightMinutes, e.moderateMinutes += t.moderateMinutes, e.vigorousMinutes += t.vigorousMinutes, e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes;
}
function Or(e, t, n, i) {
	if (0 === t.totalDays) return;
	e.totalDays += t.totalDays, Cr(e, t.intensity), e.defaultIntensityMinutes && t.defaultIntensity && Cr(e.defaultIntensityMinutes, t.defaultIntensity), null != t.mimsUnitTotal && (e.mimsUnitTotal = (e.mimsUnitTotal ?? 0) + t.mimsUnitTotal), e.totalEpochsReviewed = (e.totalEpochsReviewed ?? 0) + t.totalEpochs, e.includedEpochsReviewed = (e.includedEpochsReviewed ?? 0) + t.includedEpochs, e.wakeWearMinutes = (e.wakeWearMinutes ?? 0) + t.wakeWearMinutes, e.excludedNonwearMinutes = (e.excludedNonwearMinutes ?? 0) + t.excludedNonwearMinutes, e.excludedMainSleepMinutes = (e.excludedMainSleepMinutes ?? 0) + t.excludedMainSleepMinutes, e.excludedNapMinutes = (e.excludedNapMinutes ?? 0) + t.excludedNapMinutes, e.maskOverlapEpochs = (e.maskOverlapEpochs ?? 0) + t.overlapEpochs, e.maskPolicy = n;
	const a = t.bouts;
	a && (e.mvpaBouts = (e.mvpaBouts ?? 0) + a.mvpaBouts, e.mvpaBoutMinutes = (e.mvpaBoutMinutes ?? 0) + a.mvpaBoutMinutes, e.sedentaryBouts = (e.sedentaryBouts ?? 0) + a.sedentaryBouts, e.sedentaryBreaks = (e.sedentaryBreaks ?? 0) + a.sedentaryBreaks, i.total += a.meanSedentaryBoutMinutes * a.sedentaryBouts, e.meanSedentaryBoutMinutes = e.sedentaryBouts > 0 ? i.total / e.sedentaryBouts : 0);
}
async function Dr(e) {
	const { file: t, days: n, summaries: i, markersByAnalysisDate: a, sensorNonwearPeriods: r, maskPolicy: s, validDayCriteria: o, cutpointMethods: l, choiAxis: u } = e, c = new Set([...a].filter(([, e]) => f(e)).map(([e]) => e)), d = Number.isFinite(t.epochLengthSeconds) && t.epochLengthSeconds > 0 ? t.epochLengthSeconds : 60, m = 60 / d, p = {
		policy: fr(s),
		intervals: gr(a, r)
	}, g = n.map((e) => hr(e, s, u, d)), h = n.map((e, t) => ({
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
		const o = await wr({
			...i,
			days: [...t]
		}, s), l = 86400 / n, u = await yr(e.map((e) => e.date), H(s)), c = e.map((e, t) => {
			const n = o.days[t].mask;
			return {
				date: e.date,
				wearMinutes: n.wakeWearMinutes,
				isWeekend: u[t],
				isPartialDay: n.totalEpochs < l
			};
		}), d = await async function(e, t = he, n) {
			return H(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
		}(c, a, s);
		if (!d.meetsCriteria) {
			const e = a.requireWeekendDay && !d.hasWeekendValidDay ? ", including a weekend day" : "";
			return {
				dates: /* @__PURE__ */ new Set(),
				shortfall: `${String(d.validDays)} of the required ${String(a.minValidDaysPerParticipant)} valid days${e}`
			};
		}
		const m = await async function(e, t = he, n) {
			const i = await H(n).validWearDays(Float64Array.from(e), t);
			return Array.from(i, (e) => 0 !== e);
		}(c.map((e) => e.wearMinutes), a, s);
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
	}), y = i.filter((e) => !(s.minimumWakeWearMinutes > 0 && (null == e.validHours || 60 * e.validHours < s.minimumWakeWearMinutes))).filter((e) => null != e.sedentaryMinutes && null != e.lpaMinutes && null != e.mvpaMinutes).filter((e) => !_ || _.has(e.analysisDate)).map((e) => ({
		sedentaryMinutes: e.sedentaryMinutes,
		lpaMinutes: e.lpaMinutes,
		mvpaMinutes: e.mvpaMinutes
	})), v = n.map((e) => !_ || _.has(e.date)), M = [];
	for (let f = 0; f < l.length; f++) {
		e.signal?.throwIfAborted();
		const i = l[f];
		if (oe(i.method, t.sourceProfileId)) {
			M.push(null);
			continue;
		}
		const a = [];
		if (n.forEach((e, t) => {
			const n = new Float64Array("axisY" === i.axis ? e.axisY : e.vectorMagnitude);
			n.length > 0 && n.length === h[t].timestamps.length && a.push({
				index: t,
				values: n
			});
		}), 0 === a.length) {
			M.push(null);
			continue;
		}
		const r = await wr({
			...p,
			analysisKind: "count_cutpoint",
			thresholds: Ir(i),
			defaultThresholds: Ir(de[f]),
			days: a.map(({ index: e, values: t }) => ({
				...h[e],
				values: t,
				aggregate: v[e]
			}))
		}, e.signal), s = {
			signalSeen: r.days.some((e) => e.hasValidSignal),
			totals: r.totals
		}, o = a.find(({ index: e }) => v[e]);
		if (o) {
			const t = await wr({
				...p,
				includeEpochDetails: !0,
				days: [h[o.index]]
			}, e.signal), a = await Nr({
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
			const t = await fe(i.method, d, e.signal);
			t && "warn" === t.severity && (s.epochMismatch = t);
		}
		M.push(s);
	}
	const b = (e, t) => n.flatMap((n, i) => {
		const a = e(n);
		return a && 0 !== a.length ? [{
			timestamps: h[i].timestamps,
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(a),
			grid: t,
			fallbackEpochSeconds: d,
			series: g[i],
			aggregate: v[i]
		}] : [];
	}), S = async (t, n) => {
		if (e.signal?.throwIfAborted(), 0 === t.length) return null;
		const i = await wr({
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
		mims: await S(b((e) => e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output"), "mims_volume"),
		preschoolRf: await S(b(br, "classifier"), "preschool_classifier")
	};
}
async function Lr(e = {}) {
	const t = await Ie(e.dbOverride, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = e.username ?? "anonymous", i = e.maskPolicy ?? dr, a = e.validDayCriteria, r = re("ggir_enmo"), s = re("mims"), o = re("preschool_free_living_rf_3_5"), l = Er({
		method: r.method,
		label: r.label,
		requiredSignal: r.requiredSignal,
		sourceLabel: r.signalLabel,
		ruleLabel: "Uses imported GGIR daily sedentary, LPA, and MVPA summaries",
		unavailableAction: "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."
	}, null), u = H(e.signal), c = await Promise.all(de.map((t) => async function(e, t, n) {
		const i = t[e.method];
		if (!i) return e;
		const a = await _e(i, n);
		if (!a) return e;
		const r = Ir(e);
		return {
			...e,
			ruleLabel: Tr(e, a, JSON.stringify(a) !== JSON.stringify(r)),
			cutpointBands: Ar(a, e.cutpointBands),
			cutpointScaleMax: Math.max(e.cutpointScaleMax ?? 1, ...Object.values(a).filter(Number.isFinite)),
			...a
		};
	}(t, e.cutpointOverrides ?? {}, u))), d = c.map((e, t) => function(e, t) {
		return {
			...Er(e, null),
			cutpointThresholds: Ir(e),
			defaultCutpointThresholds: Ir(t),
			cutpointEditable: !0,
			defaultIntensityMinutes: {
				sedentaryMinutes: 0,
				lightMinutes: 0,
				moderateMinutes: 0,
				vigorousMinutes: 0,
				mvpaMinutes: 0
			}
		};
	}(e, de[t])), m = new Array(c.length).fill(!1), p = [], g = Er({
		method: s.method,
		label: s.label,
		requiredSignal: s.requiredSignal,
		sourceLabel: s.signalLabel,
		ruleLabel: "Uses stored MIMS_UNIT epoch values from actours; intensity cutpoints/equating are not applied in this row.",
		unavailableAction: "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values.",
		unavailableStatus: "backend_required"
	}, null);
	g.mimsUnitTotal = 0, g.mimsUnitPerDay = 0;
	const h = Er({
		method: o.method,
		label: o.label,
		requiredSignal: o.requiredSignal,
		sourceLabel: o.signalLabel,
		ruleLabel: "Uses actimetric Preschool Wrist Random Forest Free Living Lag-Lead classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
		unavailableAction: "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.",
		unavailableStatus: "backend_required"
	}, null), f = re("hildebrand_enmo_wrist_2014"), _ = Er({
		method: f.method,
		label: f.label,
		requiredSignal: f.requiredSignal,
		sourceLabel: f.signalLabel,
		ruleLabel: "Hildebrand 2014 non-dominant wrist ENMO (mg) cut-points: MVPA >=201 mg, vigorous >=707 mg; light near ~45 mg. Applied to a calibrated ENMO (mg) epoch signal, never to ActiGraph counts.",
		unavailableAction: "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline; the browser count pipeline does not compute ENMO mg.",
		unavailableStatus: "needs_signal"
	}, null);
	let w = !1, y = !1, v = !1, M = !1;
	const b = ee(), S = c.map(() => ({ total: 0 })), k = { total: 0 };
	for (const I of t) {
		if (e.signal?.throwIfAborted(), !I.id) continue;
		const t = I.id, r = await Me(t, e.dbOverride), s = await be(t, n, e.dbOverride), o = await Se(t, e.dbOverride), u = await xr({
			db: e.dbOverride ?? null,
			fileId: t,
			kind: "analysis",
			...e.signal ? { signal: e.signal } : {},
			inputs: {
				epochLengthSeconds: I.epochLengthSeconds,
				sourceProfileId: I.sourceProfileId ?? null,
				summaries: r,
				markers: Sr(s),
				sensorNonwearPeriods: o,
				maskPolicy: i,
				validDayCriteria: a ?? null,
				thresholds: c.map(Ir),
				choiAxis: b
			}
		}, async () => Dr({
			file: I,
			days: [...(await Oe(t, e.dbOverride, e.activityDayMemo)).values()],
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
			e.signalSeen && (m[t] = !0), Or(n, e.totals, i, S[t]), e.previewTrace && !n.previewTrace && (n.previewTrace = e.previewTrace), e.epochMismatch && !n.epochMismatch && (n.epochMismatch = e.epochMismatch);
		}), u.mims && (u.mims.signalSeen && (v = !0), Or(g, u.mims.totals, i, k)), u.preschoolRf && (u.preschoolRf.signalSeen && (M = !0), Or(h, u.preschoolRf.totals, i, k));
	}
	for (let I = 0; I < d.length; I++) {
		const e = d[I], t = c[I];
		e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes, 0 === e.totalDays && (e.available = !1, e.status = m[I] ? "ready" : "needs_signal", e.unavailableReason = m[I] ? p.length > 0 ? `Excluded by the valid-days-per-participant rule: ${p.join("; ")}. Change it in Study Settings → valid-day criteria.` : `No local ${e.sourceLabel.toLowerCase()} days meet the minimum wake-wear rule.` : w ? `No local ${e.sourceLabel.toLowerCase()} days are available.` : "No local activity epochs are available.", e.nextStepLabel = t.unavailableAction), $r(e);
	}
	l.moderateMinutes = l.mvpaMinutes, $r(l), 0 === l.totalDays && (l.available = !1, l.status = y ? "ready" : "needs_signal", l.unavailableReason = y ? "No local GGIR daily summaries meet the current inclusion rules." : "No local GGIR daily summaries are available. Import raw/5-second-capable files to populate ENMO summaries.", l.nextStepLabel = "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."), g.totalDays > 0 ? (g.available = !0, g.status = "ready", g.unavailableReason = null, g.nextStepLabel = null, g.mimsUnitPerDay = (g.mimsUnitTotal ?? 0) / g.totalDays) : (g.available = !1, g.status = v ? "ready" : "backend_required", g.unavailableReason = v ? "No stored MIMS_UNIT epoch days meet the current inclusion rules." : "No MIMS_UNIT epoch values are stored in this workspace yet. This becomes ready when the actours MIMS backend/WASM build computes and stores MIMS_UNIT epochs.", g.nextStepLabel = "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values."), $r(_), _.available = !1, _.status = "needs_signal", _.unavailableReason = "No calibrated ENMO (mg) epoch stream is available in this workspace. ENMO (mg) is a raw/GGIR-derived signal; the browser count pipeline does not produce it, so this method cannot classify counts against Hildebrand mg thresholds.", _.nextStepLabel = "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline.", $r(h), h.totalDays > 0 ? (h.available = !0, h.status = "ready", h.unavailableReason = null, h.nextStepLabel = null) : (h.available = !1, h.status = M ? "ready" : "backend_required", h.unavailableReason = M ? "No stored preschool wrist RF class days meet the current inclusion rules." : "No actimetric-compatible preschool wrist RF class epochs are stored in this workspace yet. This becomes ready when actours/WASM computes 15 s classes for 3-5 year-old wrist data.", h.nextStepLabel = "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.");
	const x = t.map((e) => e.sourceProfileId);
	return [
		l,
		h,
		...d,
		_,
		g
	].filter((e) => we(e.method, x));
}
const Br = [
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
function Pr(e, t) {
	if (!t) return !0;
	const [n, i] = t;
	return e >= n && e <= i;
}
function Fr(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function Wr(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function jr(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
function Gr(e) {
	const t = ce.find((t) => t.method === e);
	if (t) return {
		family: t.family,
		requiredSignal: t.requiredSignal,
		computationOwner: t.backendOwner ?? "browser_workspace",
		frontendComputesMetric: t.frontendComputesMetric,
		statusWhenMissing: t.statusWhenMissing
	};
	const n = re(e), i = "ready" === n.statusWhenMissing ? "needs_signal" : n.statusWhenMissing;
	return {
		family: n.family,
		requiredSignal: n.requiredSignal,
		computationOwner: n.backendDependency ?? "browser_workspace",
		frontendComputesMetric: "count_cutpoint" === n.family,
		statusWhenMissing: i
	};
}
function Hr(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function zr(e, t, n) {
	return "default" === n ? e.ruleLabel : t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, non-sedentary >=${String(t.lightMin)} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, MVPA >=${String(t.moderateMin)} counts/min` : `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, moderate ${String(t.moderateMin)}-${String(t.vigorousMin - 1)}, vigorous >=${String(t.vigorousMin)} counts/min`;
}
function Ur(e) {
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
async function Vr(e, t, n = {}, i) {
	const a = await Ie(i), r = (e.length > 0 ? a.filter((t) => null != t.id && e.includes(t.id)) : a).sort((e, t) => e.filename.localeCompare(t.filename)), s = [], o = n.username ?? "anonymous", l = n.maskPolicy ?? dr, u = n.choiAxis ?? ee(), c = cr(l), d = n.cutpointOverrides, m = n.cutpointPresetNames, p = H(n.signal), g = await Promise.all(de.map((e) => async function(e, t, n, i) {
		const a = t?.[e.method], r = a ? await _e(a, i) : null;
		return r ? {
			thresholds: r,
			source: "custom",
			presetName: n?.[e.method] ?? ""
		} : {
			thresholds: Hr(e),
			source: "default",
			presetName: ""
		};
	}(e, d, m, p))), h = n.inclusionRulePresetName ?? "", f = n.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), _ = re("ggir_enmo"), w = re("mims"), y = re("preschool_free_living_rf_3_5"), v = Gr("ggir_enmo"), M = Gr("mims"), b = Gr("preschool_free_living_rf_3_5");
	for (const S of r) {
		if (n.signal?.throwIfAborted(), !S.id) continue;
		if (!0 === S.ggirSummariesNeedRecompute) throw new Error(`${S.filename}: its GGIR summaries were not recomputed for the current study settings. In Study settings, run Rescore (offered for every file whose summaries are refused) before exporting.`);
		const e = S.participantId ?? "", a = Number.isFinite(S.epochLengthSeconds) && S.epochLengthSeconds > 0 ? S.epochLengthSeconds : 60, r = await Me(S.id, i);
		for (const n of r) Pr(n.analysisDate, t) && s.push({
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
		const d = [...(await Oe(S.id, i, n.activityDayMemo)).entries()].filter(([e]) => Pr(e, t)).sort(([e], [t]) => e.localeCompare(t)).map(([, e]) => e), m = await be(S.id, o, i), p = await Se(S.id, i), k = {
			policy: fr(l),
			intervals: gr(m, p)
		}, x = d.map((e) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: a,
			series: hr(e, l, u, a)
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
			const r = await wr({
				...k,
				...t,
				days: i.map(({ dayInput: e }) => e)
			}, n.signal);
			return n.signal?.throwIfAborted(), i.forEach(({ index: e }, t) => {
				a[e] = r.days[t];
			}), a;
		}, A = (e, t, n, i) => e && e.length > 0 ? {
			timestamps: x[i].timestamps,
			series: x[i].series ?? [],
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(e),
			grid: t,
			fallbackEpochSeconds: a
		} : null, T = [], R = de.map((e) => null !== oe(e.method, S.sourceProfileId));
		for (const [t, n] of de.entries()) R[t] ? T.push([]) : T.push(await I((e, t) => {
			const i = new Float64Array("axisY" === n.axis ? e.axisY : e.vectorMagnitude);
			return i.length > 0 && i.length === x[t].timestamps.length ? {
				...x[t],
				values: i
			} : null;
		}, {
			analysisKind: "count_cutpoint",
			thresholds: g[t].thresholds
		}));
		const N = await I((e, t) => A(br(e), "classifier", e, t), { analysisKind: "preschool_classifier" }), E = await I((e, t) => A(e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output", e, t), { analysisKind: "mims_volume" }), $ = await Promise.all(de.map((e) => fe(e.method, a, n.signal)));
		for (const [t, n] of d.entries()) {
			const i = n.date;
			for (const [n, d] of de.entries()) {
				if (R[n]) continue;
				const r = g[n], u = zr(d, r.thresholds, r.source), m = Gr(d.method), p = $[n], _ = Ur(T[n][t]);
				s.push({
					filename: S.filename,
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
					sourceContentHash: S.sourceContentHash ?? S.fileHash,
					exportedAt: f,
					notes: _ ? u : `No finite ${d.sourceLabel.toLowerCase()} values for this day.`
				});
			}
			const r = Ur(N[t]);
			null === oe("preschool_free_living_rf_3_5", S.sourceProfileId) && s.push({
				filename: S.filename,
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
				sourceContentHash: S.sourceContentHash ?? S.fileHash,
				exportedAt: f,
				notes: r ? "Stored actimetric-compatible preschool class epochs summarized with the selected mask policy." : "No stored actimetric-compatible preschool class epochs for this day."
			});
			const u = Ur(E[t]);
			null === oe("mims", S.sourceProfileId) && s.push({
				filename: S.filename,
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
				sourceContentHash: S.sourceContentHash ?? S.fileHash,
				exportedAt: f,
				notes: u ? "Stored MIMS_UNIT epoch values; intensity cutpoints are not applied." : "No stored MIMS_UNIT epoch values for this day."
			});
		}
	}
	return s;
}
Br.join(","), de.length;
var qr = e({
	editsFromMarkers: () => ns,
	getGgirMarkerInputs: () => is,
	ggirNightRecords: () => ts,
	hasGgirRecomputeFailure: () => Xr,
	mergeGgirSleepMarkers: () => es,
	recomputeGgirResults: () => ss,
	recoverPendingGgirRecomputes: () => os,
	reviewGgirResultsForMarkers: () => ls,
	scheduleGgirRecompute: () => rs
});
const Kr = new EventTarget(), Yr = /* @__PURE__ */ new WeakMap(), Jr = 800, Zr = "Update GGIR review";
function Xr(e, t, n) {
	return E.getState().jobs[`${n.name}:${as(e, t)}`]?.status === N.FAILED;
}
function Qr(e, t, n, i, a) {
	if (a?.aborted || function(e) {
		return e instanceof Error && e.name === y.errnames.DatabaseClosed;
	}(i)) return;
	const r = as(e, t), s = `${n.name}:${r}`, o = E.getState();
	o.jobs[s]?.controller.signal.aborted || o.jobs[s]?.status === N.ELSEWHERE || (o.update(s, {
		id: s,
		key: r,
		workspaceId: n.name,
		kind: $.GGIR_RECOMPUTE,
		label: Zr,
		controller: o.jobs[s]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: N.FAILED
	}), n.isOpen() && L() === n && Kr.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function es(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function ts(e, t, n, i = [], a) {
	const r = ke([...n.values()].flat(), !0), o = r?.algorithm ?? vn(t), l = r?.detectionRule ?? null, u = /* @__PURE__ */ new Map();
	for (const [s, m] of n) {
		const e = ke(m, !0);
		e && u.set(s, [{
			...e,
			algorithm: o,
			detectionRule: l
		}]);
	}
	const c = wn(t), d = c.length ? await H(a).ggirLabelsToStoredMs(Float64Array.from(c.flatMap((e) => [e.onsetMs, e.wakeMs])), i) : [];
	for (const [m, p] of c.entries()) {
		const t = u.get(p.nightDate)?.[0], n = U(p, t);
		"scored" !== n.kind && "invalid" !== n.kind ? u.set(p.nightDate, [{
			fileId: e,
			date: p.nightDate,
			username: Y,
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
			sleepMarkers: es({
				markerType: s.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: d[2 * m] / 1e3,
				offsetTimestamp: d[2 * m + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : u.set(p.nightDate, t ? [t] : []);
	}
	return u;
}
async function ns(e, t, n = [], i) {
	const a = wn(e).flatMap((e) => {
		const n = U(e, t.get(e.nightDate));
		return "scored" === n.kind && null != n.main.onsetTimestamp && null != n.main.offsetTimestamp ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === a.length) return [];
	const r = H(i), s = await r.storedToGgirLabelsMs(Float64Array.from(a.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await r.wallClockLabels(Float64Array.from([...s, ...a.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * a.length;
	return a.flatMap(({ w: e }, t) => {
		const n = o[2 * t], i = o[2 * t + 1];
		return n !== o[l + 2 * t] || i !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: i
		}] : [];
	});
}
async function is(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [i, a] = await Promise.all([Te(e, t, n), ve(e, n)]), r = new Map([...i].flatMap(([e, t]) => {
			const n = ke(t, !0);
			return n ? [[e, n]] : [];
		})), s = a?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([s ?? [], [...r].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				U(void 0, t)
			])]),
			markers: r,
			clockSteps: s,
			bundleRevision: a?.ggirBundleRevision
		};
	});
}
function as(e, t) {
	return `${$.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function rs(e, t, n, i) {
	if (!n.isOpen() || L() !== n || i?.aborted) return;
	let a = Yr.get(n);
	a || (a = /* @__PURE__ */ new Map(), Yr.set(n, a));
	const r = as(e, t);
	clearTimeout(a.get(r)), a.set(r, setTimeout(() => {
		a.delete(r), n.files.get(e).then((a) => {
			if (a?.ggirBundleRevision && n.isOpen() && L() === n && !i?.aborted) return ss(e, t, n, i);
		}).catch((a) => {
			i?.aborted || a instanceof DOMException && "AbortError" === a.name || (Qr(e, t, n, a, i), n.isOpen() && L() === n && (console.error("[ggir-results] recompute failed."), $e("error", "GGIR results recompute failed", Ce(a))));
		});
	}, Jr));
}
function ss(e, t, n, i) {
	const a = (r, s = i) => G({
		kind: $.GGIR_RECOMPUTE,
		key: as(e, t),
		label: Zr,
		workspaceId: n.name,
		signal: s,
		rerun: !0,
		run: async (i) => {
			i.signal.throwIfAborted();
			const s = await async function(e, t, n, i) {
				if (i.throwIfAborted(), !n.isOpen() || L() !== n) return null;
				const { markerInputs: a, markers: r, clockSteps: s, bundleRevision: o } = await is(e, t, n);
				if (!o) return null;
				const l = await n.ggirScorerReviews.get([e, t]);
				if (!n.isOpen() || L() !== n) return null;
				if (i.throwIfAborted(), l?.markerInputs === a && l.bundleRevision === o) return Kr.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), l.current ?? null;
				const u = await n.ggirResultsBundles.get(e);
				if (!u) return null;
				const c = await ns(u.imported, r, s, i);
				if (!n.isOpen() || L() !== n) return null;
				const d = l?.bundleRevision === o && JSON.stringify(l.edits) === JSON.stringify(c) ? l.current : (await ls(u, r, s, c, i)).current;
				i.throwIfAborted();
				const m = (/* @__PURE__ */ new Date()).toISOString();
				if (!n.isOpen() || L() !== n) return null;
				const p = await z(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!n.isOpen() || L() !== n) return null;
					const r = await is(e, t, n);
					return r.markerInputs === a && r.bundleRevision === o && (0 === await n.ggirResultsBundles.where(":id").equals(e).count() ? null : (i.throwIfAborted(), await n.ggirScorerReviews.put({
						fileId: e,
						scorer: t,
						...d ? { current: d } : {},
						edits: c,
						markerInputs: a,
						bundleRevision: o,
						updatedAt: m
					}), !0));
				}, i);
				return p ? (Kr.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), i.throwIfAborted(), d ?? u.imported) : (i.throwIfAborted(), !1 !== p && null);
			}(e, t, n, i.signal);
			return i.signal.throwIfAborted(), !1 !== s ? s : (r < 2 && a(r + 1, i.signal).catch((a) => Qr(e, t, n, a, i.signal)), null);
		}
	});
	return a(0);
}
function os(e, t) {
	return G({
		kind: $.GGIR_RECOVERY,
		key: $.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const i = () => !t.signal.aborted && e.isOpen() && L() === e;
			try {
				if (!i()) return;
				const r = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: s } = await import("./local-data-source-B5-YQGE9.js").then((e) => e.n);
				for (const o of r) {
					if (t.signal.throwIfAborted(), !i()) return;
					try {
						const [r] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), s(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), u = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...r.map((e) => e.scorer)]);
						u.delete(Y);
						for (const s of u) {
							if (!i()) return;
							try {
								const { markerInputs: n, bundleRevision: a } = await is(o, s, e);
								if (!i()) return;
								const l = r.find((e) => e.scorer === s);
								if (a && l?.markerInputs === n && l.bundleRevision === a) {
									Xr(o, s, e) && (E.getState().update(`${e.name}:${as(o, s)}`, { status: N.DONE }), Kr.dispatchEvent(new CustomEvent("updated", { detail: {
										fileId: o,
										scorer: s,
										db: e
									} })));
									continue;
								}
								await ss(o, s, e, t.signal);
							} catch (a) {
								n = !0, Qr(o, s, e, a, t.signal);
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
				const a = Object.values(E.getState().jobs).filter((t) => t.workspaceId === e.name && t.kind === $.GGIR_RECOMPUTE && t.status === N.FAILED);
				for (const t of a) {
					const a = t.key.slice($.GGIR_RECOMPUTE.length + 1);
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
							i() && (0 === n || 0 === a && 0 === r) && (E.getState().update(t.id, { status: N.DONE }), Kr.dispatchEvent(new CustomEvent("updated", { detail: {
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
async function ls(e, t, n = [], i, a) {
	const r = i ?? await ns(e.imported, t, n, a);
	let s;
	if (a?.throwIfAborted(), r.length > 0 && e.ms2 && e.ms3) {
		const t = (e) => e ? new Uint8Array(e.slice(0)) : void 0, n = t(e.ms2), i = t(e.ms3), o = t(e.ms4), l = t(e.ms5), u = t(e.sleeplogRData);
		s = hn(await j(a, (t) => t.reviewGgirResults({
			part1: new Uint8Array(e.part1.slice(0)),
			configCsv: e.configCsv,
			recordingId: O(e.recordingFile),
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
	const { current: o, ...l } = e;
	return {
		...l,
		...s ? { current: s } : {},
		edits: r
	};
}
const us = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds"
], cs = [
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
], ds = [
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
], ms = [
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
	"updatedAt",
	"ggirCorrections"
], ps = {
	files: [
		...us,
		"ggirTimezone",
		"recording",
		"ggirClockSteps"
	],
	markers: cs,
	activityDays: ds,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: ms
}, gs = {
	files: [...us, "ggirClockSteps"],
	markers: cs,
	activityDays: ds,
	ggirResultsBundles: ms
}, hs = {
	ggirResultsBundles: ["fileId", "ggirCorrections"],
	files: ["id"],
	localExecutions: ["fileId", "attestationId"],
	diaryEntries: [
		"fileId",
		"analysisDate",
		"importMappingProvenance"
	]
}, fs = {
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
}, _s = {
	sleep: ps,
	nonwear: ps,
	summary: ps,
	wide: ps,
	circadian: {
		files: us,
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
	ggirReport: gs,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: cs,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: us,
		markers: cs,
		actiwareFileData: [
			"fileId",
			"actiwareIntervals",
			"actiwareStatistics",
			"actiwareStatisticsNeedsRecompute"
		],
		actiwareStatisticsInputs: ["fileId", "input"]
	},
	actiwareSleepWake: {
		files: us,
		markers: cs,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: hs,
	audit: fs,
	ggirResults: {
		...hs,
		...ps,
		...gs,
		auditLog: fs.auditLog,
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
			D
		]
	}
}, ws = /* @__PURE__ */ new WeakMap(), ys = /* @__PURE__ */ new WeakMap();
function vs(e, t, n, i) {
	for (let a = 0; a < n.byteLength;) {
		const r = n.subarray(a, a + Xa), s = e[t](r, { at: i + a });
		if (!Number.isInteger(s) || s <= 0 || s > r.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		a += s;
	}
}
function Ms(e) {
	if (!e || "object" != typeof e) return e;
	const t = ys.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return vs(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(Ms) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ms(t)])) : structuredClone(e);
}
function bs(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(bs), Object.freeze(e)), e;
}
var Ss = class extends Error {};
function ks(e, t, n) {
	const i = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new Ss(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (i(t), Reflect.get(e, t, n)),
		has: (e, t) => (i(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (i(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function xs(e, t) {
	const n = ws.get(e);
	if (!n) throw new Ss("Export requires a captured input snapshot");
	const i = Object.entries(_s).find(([, e]) => e === t)?.[0];
	if (!i) throw new Ss("Export producer has no registered input declaration");
	const a = {};
	for (const [r, s] of Object.entries(t)) {
		const e = n[r].map((e) => {
			const t = e, n = {};
			for (const i of s.filter((e) => e in t)) Object.defineProperty(n, i, {
				enumerable: !0,
				get: () => bs(Ms(t[i]))
			});
			return ks(n, s, `${i}: undeclared field ${r}.`);
		});
		Object.assign(a, { [r]: Object.freeze(e) });
	}
	return ks(a, Object.keys(t), `${i}: undeclared table `);
}
function Is(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	for (const a of e.markers) {
		if (a.fileId !== t || a.username !== n) continue;
		const e = q(a), r = i.get(a.date) ?? [];
		r.push(e), i.set(a.date, r);
	}
	return i;
}
function As(e, t, n) {
	return new Map([...Is(e, t, n)].flatMap(([e, t]) => {
		const n = ke(t.filter(f));
		return n ? [[e, n]] : [];
	}));
}
const Ts = /* @__PURE__ */ new WeakMap();
function Rs(e, t, n, i) {
	let a = Ts.get(e);
	a || (a = /* @__PURE__ */ new Map(), Ts.set(e, a));
	const r = JSON.stringify([t, n]);
	let s = a.get(r);
	return s || (s = async function(e, t, n, i) {
		const a = xs(e, _s.ggirReport), r = a.files.find((e) => e.id === t), s = a.ggirResultsBundles.find((e) => e.fileId === t), o = Is(a, t, n), l = s ? await ts(t, s.imported, o, r.ggirClockSteps, i) : o, u = new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : []));
		return {
			markersByAlgo: l,
			selected: u,
			bundle: s ? await ls(s, u, r.ggirClockSteps, void 0, i) : void 0
		};
	}(e, t, n, i), a.set(r, s), s.catch(() => {
		a.get(r) === s && a.delete(r);
	})), s;
}
function Ns(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function Es(e) {
	return xs(e, _s.ggirResults).studySettings.flatMap((e) => xe(e).map((e) => ({
		file: "sleep_export.csv",
		row: 0,
		key: e.filename,
		column: `${e.category}: ${e.reason}`,
		reason: "not_computed_for_export"
	})));
}
const $s = "not included", Cs = "included if produced";
async function Os(e, t) {
	return e.transaction("r", [
		e.files,
		e.markers,
		e.sensorNonwear,
		e.dailyGgirSummaries
	], async () => {
		const n = await Ie(e, t.length ? { onlyFileIds: t } : void 0), i = n.map((e) => e.id), [a, r, s] = await Promise.all([
			e.markers.where("fileId").anyOf(i).toArray(),
			e.sensorNonwear.where("fileId").anyOf(i).toArray(),
			e.dailyGgirSummaries.where("fileId").anyOf(i).toArray()
		]);
		return Z({
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
async function Ds(e, t, n, i = {}) {
	const { signal: a, producers: o = {} } = i;
	a?.throwIfAborted();
	const l = await Os(e, t.fileIds), d = await Ls(null, "checking the export inputs", () => async function(e, t = L(), n = {}) {
		const i = /* @__PURE__ */ new Map();
		for (const d of Object.values(_s)) for (const [e, t] of Object.entries(d)) {
			const n = e;
			i.set(n, /* @__PURE__ */ new Set([...i.get(n) ?? [], ...t]));
		}
		let a = 268435456;
		const r = (e) => {
			if (e instanceof ArrayBuffer ? a -= e.byteLength : "string" == typeof e ? a -= 2 * e.length : e && "object" == typeof e ? Object.values(e).forEach(r) : a -= 8, a < 0) throw new Error("Export snapshot exceeds 256 MiB. Select fewer recordings or a narrower workspace before exporting.");
		};
		let s = 0;
		const o = (e) => {
			if (n.binaryStore && (e instanceof ArrayBuffer || ArrayBuffer.isView(e))) {
				const t = e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), i = Object.freeze({}), a = e instanceof ArrayBuffer ? null : e.constructor;
				return vs(n.binaryStore, "write", t, s), ys.set(i, {
					at: s,
					length: t.byteLength,
					store: n.binaryStore,
					restore: a ? (e) => new a(e) : (e) => e
				}), s += t.byteLength, r(0), i;
			}
			return Array.isArray(e) ? e.map(o) : e && "object" == typeof e && Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, o(t)])) : (r(e), e);
		}, l = await t.transaction("r", [...i.keys()].map((e) => t[e]), async () => {
			const n = await Ie(t, e.length ? { onlyFileIds: e } : void 0), a = new Set(n.flatMap((e) => e.id ? [e.id] : [])), r = {};
			return await Promise.all([...i].map(async ([e, i]) => {
				const s = (e) => Object.fromEntries([...i].filter((t) => t in e).map((t) => [t, o(e[t])]));
				if (r[e] = [], "files" === e) return void (r[e] = n.map((e) => s(e)));
				const l = "diaryEntries" === e ? t.diaryEntries : Ne(t, e);
				await ("studySettings" === e ? l.where("key").equals("study") : l.where("fileId").anyOf([...a])).each((t) => {
					r[e].push(s(t));
				});
			})), r;
		}), u = Object.freeze({ files: bs(l.files.map((e) => Object.fromEntries(us.map((t) => [t, Ms(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) }), c = new Set(l.ggirResultsBundles.map((e) => e.fileId));
		return l.markers = l.markers.map((e) => c.has(e.fileId) && "invalid" === U(void 0, q(e)).kind ? {
			...e,
			isInvalidNight: !0
		} : e), ws.set(u, l), u;
	}(t.fileIds, e, i)), m = function(e, t, n, i) {
		const a = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), s = {}, o = /* @__PURE__ */ new Map(), l = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), u = [];
		return {
			addFiles: async (s) => {
				const l = xs(n, _s.ggirReport), c = await Promise.all(s.map((t) => Rs(n, t.id, e, i)));
				for (const [e, n] of s.entries()) {
					const s = l.files.find((e) => e.id === n.id);
					if (!s) throw new Error("GGIR file is outside the export snapshot");
					if (i?.throwIfAborted(), !s.id) continue;
					const { bundle: d, markersByAlgo: m, selected: p } = c[e], g = Ns(l, s.id), h = new Map([...m].filter(([e]) => sa(e, t))), _ = /* @__PURE__ */ new Map();
					for (const [e, t] of h) for (const n of t) {
						const t = ea(n);
						let i = _.get(t);
						i || (i = /* @__PURE__ */ new Map(), _.set(t, i)), i.set(e, n);
					}
					const w = /* @__PURE__ */ new Set();
					for (const [e, t] of h) for (const n of t) f(n) && w.add(e);
					if (d) {
						const e = new Set([...p].filter(([, e]) => "invalid" === U(void 0, e).kind).map(([e]) => e)), n = d;
						u.push({
							...n,
							...t ? { scoredDates: new Set(s.availableDates.filter((e) => sa(e, t))) } : {},
							invalidDates: e
						});
					}
					const y = [...w].sort(), v = y[0], M = y[y.length - 1], b = [], S = [];
					for (const e of [...g.keys()].sort()) if (sa(e, t) && (null == v || null == M || e >= v && e <= M)) {
						const t = g.get(e), n = Be(t), i = n.timestamps, a = new Float64Array(n.ggir ? t.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : t.axisY);
						for (let e = 0; e < i.length; e++) b.push(i[e]), S.push(a[e]);
					}
					const k = [];
					for (const [e, n] of _) {
						const o = Qi(e).algoKey, l = d ? "" : await Ji(s, n, g, {
							...o ? { algorithm: o } : {},
							...t ? { dateRange: t } : {},
							signal: i
						}), u = d ? [] : l.replace(/\n$/u, "").split("\n");
						if (u.length > 0) {
							const t = a.get(e) ?? [];
							a.set(e, t), r.has(e) ? t.push(...u.slice(1)) : (t.push(...u), r.add(e));
						}
						const c = [], m = [];
						for (const e of n.values()) {
							for (const t of e.sleepMarkers) null != t.onsetTimestamp && null != t.offsetTimestamp && c.push({
								o: t.onsetTimestamp,
								f: t.offsetTimestamp,
								t: t.markerType
							});
							for (const t of e.nonwearMarkers) null != t.startTimestamp && null != t.endTimestamp && m.push({
								s: t.startTimestamp,
								e: t.endTimestamp
							});
						}
						if (0 === c.length && 0 === m.length) continue;
						const { algoKey: p, ruleKey: h } = Qi(e), f = [p, h].filter(Boolean).join("_"), _ = Re(g.values(), o || null);
						k.push([f, {
							p: c,
							n: m,
							..."stale" === _.status ? { stale: _.reason } : {}
						}]);
					}
					0 === _.size && k.push(["", {
						p: [],
						n: []
					}]), b.length > 0 && o.set(String(s.id), {
						pid: s.participantId ?? s.filename,
						ts: b,
						act: S,
						algos: k
					});
				}
			},
			entries: async () => {
				for (const [n, i] of ta([...a.keys()])) {
					const e = a.get(n);
					e.length > 0 && (s[i] = ra(`${e.join("\n")}\n`));
				}
				const e = await Hi(u, "nights", i);
				e && (s["part4_nightsummary_ggir_review.csv"] = ra(e));
				const t = await Hi(u, "days", i);
				return t && (s["part5_daysummary_ggir_review.csv"] = ra(t)), o.size > 0 && (s[Xi] = ra(aa(o, l))), s;
			}
		};
	}(t.username, t.dateRange, d, a), p = [];
	for (const r of d.files) {
		const e = p.at(-1);
		e?.[0]?.filename === r.filename ? e.push(r) : p.push([r]);
	}
	const g = [], h = [], _ = [];
	let w = !1;
	const y = t.manifest.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString();
	for (const [r, s] of p.entries()) {
		a?.throwIfAborted(), i.progress?.(r, p.length);
		const n = s.map((e) => e.id), o = /* @__PURE__ */ new Map();
		try {
			const e = await Dt(d, {
				fileIds: n,
				dateRange: t.dateRange,
				signal: a
			});
			for (const t of e.daySummaries) o.set(`${t.fileId}|${t.date}`, {
				l5Hour: t.l5Hour,
				m10Hour: t.m10Hour
			});
		} catch (E) {
			if (E instanceof Ss) throw E;
			if (a?.throwIfAborted(), w = !0, E instanceof DOMException && "AbortError" === E.name) throw E;
		}
		g.push(await Ls(s[0].filename, "computing its sleep rows", () => ya(n, t.username, t.dateRange, o, t.studyId, d, a))), await Ls(s[0].filename, "drawing its visual report", () => m.addFiles(s)), h.push(...await Vr(n, t.dateRange, {
			username: t.username,
			cutpointOverrides: t.physicalActivity.cutpointOverrides,
			maskPolicy: t.physicalActivity.maskPolicy,
			choiAxis: t.physicalActivity.choiAxis,
			exportedAt: y,
			...a ? { signal: a } : {}
		}, e)), _.push(...await Ua(n, t.dateRange, d, t.username, a));
	}
	if (await Os(e, t.fileIds) !== l) throw new Za(null, "computing physical activity, because its inputs changed during the export");
	a?.throwIfAborted();
	const v = function(e) {
		return {
			sleepRows: e.flatMap((e) => e.sleepRows),
			nonwearRows: e.flatMap((e) => e.nonwearRows),
			summaryRows: e.flatMap((e) => e.summaryRows),
			degradations: e.flatMap((e) => e.degradations).slice(0, 1)
		};
	}(g), M = await async function(e, t, n, i, a) {
		a?.throwIfAborted();
		const r = xs(n, _s.actiwareInterval), s = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => r.actiwareFileData.find((t) => t.fileId === e.id));
		return (await Promise.all(s.map(async (e, n) => {
			a?.throwIfAborted();
			const s = As(r, e.id, i), l = r.actiwareStatisticsInputs.find((t) => t.fileId === e.id), u = new Set(s.keys()), { actiwareStatisticsForScoredMarker: c } = await import("./local-data-source-B5-YQGE9.js").then((e) => e.t);
			a?.throwIfAborted();
			const d = await c(o[n] ?? {}, l?.input, s, (e) => H(a).actiwareIntervalStatistics(e), a);
			a?.throwIfAborted();
			const m = await async function(e, t, n) {
				const i = (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), a = e.actiwareStatistics ?? [], r = await zn([...i.map((e) => e.startTimestamp), ...a.map((e) => e.startTimestamp)], H(n)), s = /* @__PURE__ */ new Set(), o = i.map((t) => {
					const n = a.findIndex((e, n) => !s.has(n) && e.kind === t.kind && Ka(e.startTimestamp, t.startTimestamp) && Ka(e.endTimestamp, t.endTimestamp)), i = r(t.startTimestamp), o = n >= 0 ? a[n] ?? null : null;
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
	}(t.fileIds, t.dateRange, d, t.username, a), b = await Ls(null, "writing the visual report", () => m.entries()), S = function(e) {
		const t = xs(e, _s.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(d);
	if (S && (b["audit_log.jsonl"] = S), o.ggirResults) {
		const e = await o.ggirResults(xs(d, _s.ggirResults), a);
		for (const [t, n] of Object.entries(e)) {
			if (t in b) throw new Error(`${er}${t}`);
			b[t] = n;
		}
	}
	const k = xs(d, _s.actiwareSleepWake);
	let x = 0;
	for (const r of k.files) {
		const e = k.actiwareFileData.find((e) => e.fileId === r.id)?.actiwareSleepWake;
		e && (x += await ar(e, t.dateRange, new Set(As(k, r.id, t.username).keys()), H(a)));
	}
	const I = xs(d, _s.manifest), A = Object.fromEntries(v.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	w ||= v.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const T = [...w ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...v.degradations], N = await async function(e) {
		if (!navigator.storage?.getDirectory) throw new Error("Streaming export requires temporary workspace storage (OPFS).");
		const t = await (await (await navigator.storage.getDirectory()).getDirectoryHandle(Ja, { create: !0 })).getDirectoryHandle(e.scratchId, { create: !0 }), n = await t.getFileHandle(Bi, { create: !0 }), i = await t.getFileHandle("bundle.zip", { create: !0 }), a = new CompressionStream("gzip"), o = a.readable.pipeTo(await n.createWritable());
		o.catch(() => {});
		const l = a.writable.getWriter(), d = await i.createWritable();
		let m = [], p = 0, g = e.artifacts.importRefusalReasons?.length ?? 0;
		const h = [], f = new Et((e, t) => {
			if (e) throw e;
			m.push(t);
		}), _ = async (e = 0) => {
			p = Math.max(p, e + m.reduce((e, t) => e + t.byteLength, 0));
			for (const t of m) await d.write(t);
			m = [];
		}, w = /* @__PURE__ */ new Set(), y = async (t, n) => {
			if (w.has(t)) throw new Error(`${er}${t}`);
			w.add(t);
			const i = new Nt(t, { level: 1 }), a = new P();
			let r = 0;
			f.add(i);
			for await (const s of n) for (let t = 0; t < s.byteLength; t += or) {
				e.signal?.throwIfAborted();
				const n = s.subarray(t, t + or);
				a.update(n), i.push(n, !1), r += n.byteLength, await _(s.byteLength);
			}
			i.push(/* @__PURE__ */ new Uint8Array(), !0), await _(), h.push({
				name: t,
				contentHash: B(a.finalize()),
				byteLength: r
			});
		};
		try {
			await l.write(new TextEncoder().encode(Pi(e.artifacts.importRefusalReasons ?? [])));
			const t = function(e) {
				const t = e.artifacts ?? null, n = t ? null : e.planned ?? null, i = e.columns, a = t ? t.sleepRows.length : n?.sleepRows ?? null, o = t ? t.sleepRows.filter((e) => e.markerType === s.MAIN_SLEEP).length : n?.mainSleepRows ?? null, l = t ? $a(t.sleepRows).size : n?.wideRows ?? null, u = t ? t.summaryRows.length : n?.summaryRows ?? null, d = t ? t.nonwearRows.length : n?.nonwearRows ?? null, m = t ? t.physicalActivityRows.length : n?.activityRows ?? null, p = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : n?.activityDates ?? null, g = t ? t.eventMarkerRows?.length ?? 0 : n?.eventMarkerRows ?? null, h = t ? t.actiwareIntervalRows?.length ?? 0 : n?.actiwareIntervalRows ?? null, f = t ? t.actiwareSleepWakeCsv?.rows ?? 0 : n?.actiwareSleepWakeRows ?? null, _ = n?.actogramFiles ?? null, w = t ? Object.keys(t.ggirEntries) : null, y = (w ? w.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
					const n = Math.max(0, c(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
					return {
						name: e,
						include: n > 0,
						rows: n
					};
				}) : n ? [...ta([...n.part4Rows.keys()])].map(([e, t]) => ({
					name: t,
					include: n.ggirMainSleepGroupKeys.includes(e),
					rows: n.part4Rows.get(e) ?? null
				})) : []).sort((e, t) => e.name.localeCompare(t.name)), v = w ? w.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [Xi, ...n?.ggirReviewEntries ?? []], M = (e) => null == e ? null : e > 0, b = (n, a, r) => {
					const s = null == a ? "unknown" : a ? "included" : "not_included";
					return "included" !== s ? {
						name: n,
						state: s,
						rows: null,
						detail: "unknown" === s ? r.detail : $s,
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
								const e = Ca(t.sleepRows, !0), n = e.next().value;
								for (const t of e) yield {
									bytes: ra(n + "\n" + t),
									rows: 1
								};
							} else if (r.chunkField) {
								const n = t[r.chunkField] ?? [];
								for (let i = 0; i < n.length; i += 256) {
									const a = {
										...t,
										[r.chunkField]: n.slice(i, i + 256)
									}, s = !e.selectedColumns?.length || "sleepRows" !== r.chunkField && "nonwearRows" !== r.chunkField ? void 0 : Pa(a[r.chunkField], void 0, !0);
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
						detail: null == a ? Cs : `${String(a)} rows · ${String(i)} columns`,
						chunkField: "sleepRows",
						encode: (t) => ra(Pa(t.sleepRows, e.selectedColumns ?? void 0, !0))
					}),
					b("sleep_export_wide.csv", !!e.includeWideFormat && M(l ?? o), {
						rows: l,
						detail: null == l ? Cs : `${String(l)} participant group ${1 === l ? "row" : "rows"}`,
						wide: !0,
						encode: (e) => ra(function(e, t = !1) {
							return [...Ca(e, t)].join("\n");
						}(e.sleepRows, !0))
					}),
					b("summary_export.csv", M(u ?? o), {
						rows: u,
						detail: null == u ? Cs : `${String(u)} participant ${1 === u ? "row" : "rows"}`,
						chunkField: "summaryRows",
						encode: (e) => ra(function(e, t = !1) {
							const n = Ba("summary_csv", e, ka, void 0, t), i = [
								"summary_mean_temperature_c",
								"sleep_regularity_index",
								...Object.values(Sa).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
							];
							return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? c(n).records.map((t, n) => 0 === n ? t.text + "," + i.map((e) => R[e].header + "_missing_reason").join(",") : t.text + "," + i.map((t) => {
								const i = e[n - 1];
								return "summary_mean_temperature_c" === t ? null == i.meanTemperature ? i.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? i.sleepRegularityMissingReason ?? "" : i.metricMissingReasons?.[t] ?? "";
							}).join(",")).join("\n") : n;
						}(e.summaryRows, !0))
					}),
					b("nonwear_export.csv", M(d), {
						rows: d,
						detail: null == d ? Cs : `${String(d)} periods`,
						chunkField: "nonwearRows",
						encode: (t) => ra(Pa(t.nonwearRows, e.selectedColumns ?? void 0, !0))
					}),
					b("event_markers_export.csv", M(g), {
						rows: g,
						detail: null == g ? Cs : `${String(g)} button ${1 === g ? "press" : "presses"}`,
						columns: Fa.length,
						chunkField: "eventMarkerRows",
						encode: (e) => ra(function(e, t = !1) {
							const n = [[...Fa, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
							for (const i of e) n.push([
								i.filename,
								i.participantId ?? "",
								i.studyDate,
								Ha(i.localTimestamp),
								null == i.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (i.localTimestamp - 60 * i.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
								...t ? [i.participantId ? "" : "source_reported_missing", null == i.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
							].map((e) => r(e)).join(","));
							return `${n.join("\n")}\n`;
						}(e.eventMarkerRows ?? [], !0))
					}),
					b("actiware_intervals_export.csv", M(h), {
						rows: h,
						detail: null == h ? Cs : `${String(h)} Actiware intervals`,
						columns: qa.length,
						chunkField: "actiwareIntervalRows",
						encode: (e) => ra(Ya(e.actiwareIntervalRows ?? [], !0))
					}),
					b(tr, M(f), {
						rows: f,
						detail: null == f ? Cs : `${String(f)} Actiware Sleep/Wake epochs`,
						columns: nr.length,
						encode: (e) => e.actiwareSleepWakeCsv.bytes
					}),
					b("physical_activity_export.csv", M(m), {
						rows: m,
						detail: null == m || null == p ? Cs : `${String(m)} rows · ${String(p)} distinct dates`,
						chunkField: "physicalActivityRows",
						encode: (e) => ra(function(e, t, n, i = !1) {
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
							]), s = e.some((e) => "ggir_enmo" === e.method) ? Br.filter((e) => !a.has(e) && (Ei.has(e) || r.has(e))) : [], o = [
								"Participant ID",
								"Threshold Preset Name",
								"Inclusion Rule Preset Name",
								"Scored Username",
								"Source Content Hash",
								"Validation Notes",
								"Notes"
							], l = [[
								...Br.filter((e) => !a.has(e)),
								...s.map((e) => `${e}_missing_reason`),
								...i ? [
									"Epoch Length Seconds",
									"Native Epoch Seconds",
									"Mask Overlap Epochs"
								].map((e) => e + "_missing_reason") : [],
								...o.map((e) => e + "_missing_reason")
							].join(",")];
							for (const u of e) {
								const e = jr(u), t = null == u.sedentaryMinutes || !n && null == u.excludedNonwearMinutes ? null : u.sedentaryMinutes + (n ? 0 : u.excludedNonwearMinutes), c = [
									Fr(u.filename),
									Fr(u.participantId),
									Fr(u.analysisDate),
									Fr(u.method),
									Fr(u.methodLabel),
									Fr(u.methodFamily),
									Fr(u.requiredSignalContract),
									Fr(u.computationOwner),
									String(u.frontendComputesMetric),
									Fr(u.sourceSignal),
									Fr(u.status),
									Fr(u.methodRule),
									Fr(u.thresholdSource),
									Fr(u.thresholdPresetName),
									Wr(u.sedentaryMax),
									Wr(u.lightMin),
									Wr(u.moderateMin),
									Wr(u.vigorousMin),
									Wr(t),
									Wr(u.lightMinutes),
									Wr(u.moderateMinutes),
									Wr(u.vigorousMinutes),
									Wr(u.mvpaMinutes),
									Wr(u.mimsUnitTotal),
									null == u.epochLengthSeconds ? "" : String(u.epochLengthSeconds),
									String(u.epochsReviewed),
									Wr(u.wakeWearMinutes),
									Wr(u.excludedNonwearMinutes),
									Wr(u.excludedMainSleepMinutes),
									Wr(u.excludedNapMinutes),
									null == u.maskOverlapEpochs ? "" : String(u.maskOverlapEpochs),
									null == u.mvpaBouts ? "" : String(u.mvpaBouts),
									Wr(u.mvpaBoutMinutes),
									null == u.sedentaryBouts ? "" : String(u.sedentaryBouts),
									null == u.sedentaryBreaks ? "" : String(u.sedentaryBreaks),
									Wr(u.meanSedentaryBoutMinutes),
									null == u.nativeEpochSeconds ? "" : String(u.nativeEpochSeconds),
									String(u.epochMismatch),
									Fr(u.inclusionRulePresetName),
									String(u.maskExcludeNonwear),
									String(u.maskExcludeMainSleep),
									String(u.maskExcludeNaps),
									String(u.maskUseManualNonwear),
									String(u.maskUseAlgorithmNonwear),
									Fr(u.maskNonwearDetector),
									Wr(u.maskMinimumWakeWearMinutes),
									Fr(u.scoredUsername),
									Fr(u.sourceContentHash),
									Fr(u.exportedAt),
									Fr(e.status),
									Fr(e.notes),
									Fr(u.notes)
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
									const t = c[Br.indexOf(e)];
									if ("ggir_enmo" !== u.method || "" !== t) return "";
									if (Ei.has(e)) {
										const t = d[e];
										return null != t && Number.isFinite(t) ? "" : "source_reported_missing";
									}
									return r.has(e) && null == m[e] ? "not_computed_for_export" : "";
								}), g = i ? [
									["Epoch Length Seconds", null == u.epochLengthSeconds && "ggir_enmo" === u.method ? "not_applicable_to_row" : ""],
									["Native Epoch Seconds", null == u.nativeEpochSeconds ? "not_applicable" === u.thresholdSource ? "not_applicable_to_row" : "source_reported_missing" : ""],
									["Mask Overlap Epochs", null == u.maskOverlapEpochs ? "ggir_enmo" === u.method ? "not_applicable_to_row" : "needs_signal" === u.status ? "channel_unavailable" : "backend_required" === u.status ? "not_computed_for_export" : "" : ""]
								].map(([e, t]) => "" === c[Br.indexOf(e)] ? t : "") : [];
								l.push([
									...c.filter((e, t) => !a.has(Br[t])),
									...p,
									...g,
									...o.map((e) => "" !== c[Br.indexOf(e)] ? "" : [
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
						detail: null == n ? Cs : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
						columns: 40,
						encode: (t) => t.ggirEntries[e]
					})),
					...v.map((e) => b(e, !(!w && !n?.ggirReviewEntries.includes(e)) || (null == _ ? null : _ > 0), {
						rows: null,
						detail: e.endsWith(".html") ? null == _ ? w ? "1 report" : Cs : `1 report · ${String(_)} ${1 === _ ? "file" : "files"}` : "1 GGIR report artifact",
						encode: (t) => t.ggirEntries[e]
					})),
					{
						name: Bi,
						state: "included",
						rows: null,
						detail: "1 reason per missing cell",
						estimatedBytes: 2048 + (t?.actiwareSleepWakeCsv?.reasonChunks.reduce((e, t) => e + t.byteLength, 0) ?? n?.actiwareMissingReasonBytes ?? 0),
						write: null
					},
					b("codebook.csv", !0, {
						rows: xa.length,
						detail: `${String(xa.length)} definitions`,
						estimatedBytes: new TextEncoder().encode(Ra()).length,
						encode: () => ra(Ra(void 0, !0))
					}),
					{
						name: Qa,
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
					let t = 0, i = !1, a = !1;
					const r = "actiware_intervals_export.csv" === n.name ? function* () {
						for (const t of e.artifacts.actiwareIntervalRows ?? []) {
							const [e, n] = c(Ya([t], !0)).records, i = u(n.text);
							yield new Map(u(e.text).map((e, t) => [e, i[t] ?? ""]));
						}
					} : void 0;
					for (const e of n.batches?.() ?? lr(n.write())) {
						if (e.bytes.byteLength > 4 * or) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
						const s = ji(new TextDecoder().decode(e.bytes), n.name, !0, {
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
							if (u += Pi([t.value], !1), g += 1, u.length >= or / 2) {
								const t = new TextEncoder().encode(u);
								p = Math.max(p, e.bytes.byteLength + t.byteLength), await l.write(t), u = "";
							}
						}
						await l.write(new TextEncoder().encode(u));
						const c = i ? (a ? "" : "\n") + o.csv.slice(o.csv.indexOf("\n") + 1) : o.csv;
						i = !0, t += e.rows ?? 0, a = c.endsWith("\n");
						const d = new TextEncoder().encode(c);
						p = Math.max(p, e.bytes.byteLength + d.byteLength + 2 * u.length), yield d;
					}
				}()) : await y(n.name, [n.write()]);
			} catch (v) {
				throw new Error(`Export failed while writing ${n.name}`, { cause: v });
			}
			await l.close(), await o, await y(Bi, async function* () {
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
			const a = await async function(e) {
				const t = Object.entries(e.entries).sort(([e], [t]) => e.localeCompare(t)), n = Array.isArray(e.entries) ? [...e.entries].sort((e, t) => e.name.localeCompare(t.name)) : await Promise.all(t.map(async ([e, t]) => ({
					name: e,
					contentHash: await Ia(t),
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
					ggirCorrections: e.ggirCorrections ?? {},
					executionAttestationIds: [...e.executionAttestationIds ?? []].sort(),
					degradations: [...e.degradations ?? []],
					files: n
				};
			}({
				...e.manifest,
				entries: h
			});
			return await y(Qa, [new TextEncoder().encode(Aa(a))]), f.end(), await _(), e.signal?.throwIfAborted(), await d.close(), {
				blob: await new Response((await i.getFile()).stream()).blob(),
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
			importRefusalReasons: Es(d),
			...v,
			physicalActivityRows: h,
			physicalActivityEnabledClasses: t.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: t.physicalActivity.nonwearAsClass,
			ggirEntries: b,
			eventMarkerRows: _,
			actiwareIntervalRows: M,
			actiwareSleepWakeCsv: {
				rows: x,
				bytes: /* @__PURE__ */ new Uint8Array(),
				reasonChunks: []
			}
		},
		options: t,
		manifest: {
			...t.manifest,
			physicalActivity: t.physicalActivity,
			exportedAt: y,
			algorithmVersions: A,
			degradations: T,
			ggirCorrections: Object.fromEntries(I.ggirResultsBundles.filter((e) => e.ggirCorrections).map((e) => [String(e.fileId), e.ggirCorrections])),
			executionAttestationIds: I.localExecutions.map((e) => e.attestationId),
			diaryTemporalPolicyByFile: Object.fromEntries(I.files.map((e) => [String(e.id), Object.fromEntries(I.diaryEntries.filter((t) => t.fileId === e.id).map((e) => [e.analysisDate, e.importMappingProvenance?.diaryTemporalPolicy ?? null]))]))
		},
		sleepWake: rr(t.fileIds, t.dateRange, d, t.username, a),
		scratchId: n,
		...a ? { signal: a } : {}
	});
	return i.progress?.(p.length, p.length), {
		...N,
		actiwareSleepWakeRows: x,
		degradations: T,
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
async function Ls(e, t, n) {
	try {
		return await n();
	} catch (i) {
		if (i instanceof DOMException && "AbortError" === i.name) throw i;
		throw new Za(e, t, i);
	}
}
t({ async build(e, t, n, i) {
	const a = new g(e);
	let r;
	try {
		return r = await (await (await (await (await navigator.storage.getDirectory()).getDirectoryHandle(Ja, { create: !0 })).getDirectoryHandle(n, { create: !0 })).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await a.open(), await Ds(a, t, n, {
			...i ? { progress: i } : {},
			binaryStore: r
		});
	} catch (s) {
		if (s instanceof Za) return { failure: {
			file: s.file,
			step: s.step
		} };
		throw s;
	} finally {
		r?.close(), a.close();
	}
} });
export { un as A, Ut as B, vn as C, gn as D, xn as E, rn as F, Ft as H, Xt as I, Gt as L, an as M, ln as N, In as O, Qt as P, Ht as R, bn as S, _n as T, Ct as U, Yt as V, Ot as W, Gn as _, xr as a, Ln as b, yr as c, hr as d, _r as f, qn as g, pr as h, Sr as i, on as j, kn as k, fr as l, ur as m, rs as n, vr as o, dr as p, Lr as r, Mr as s, qr as t, gr as u, Hn as v, Mn as w, Cn as x, zn as y, jt as z };
