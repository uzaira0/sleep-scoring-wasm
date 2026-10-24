import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import { c as t, i as n, u as i } from "./workers-p3B9jYXf.js";
import { $ as a, Ct as r, Ft as s, J as o, Nt as l, Pt as u, Rt as c, S as d, Ut as m, W as p, Wt as g, a as h, cn as f, et as _, f as w, h as y, hn as v, ht as M } from "./schema-B_gLylrK.js";
import { C as b, D as S, E as k, O as x, S as I, T as A, p as R, s as T, w as N } from "./epoch-utils-C8zEkd8n.js";
import { G as E, U as $, W as C, _ as O, f as D, nt as L, t as B } from "./workspace-db-Df2TUNS4.js";
import { l as P, n as F, o as W, s as j } from "./content-hash-BtD8CeUH.js";
import { a as G, n as H, t as z } from "./background-jobs-OpyHc-MO.js";
import { a as U } from "./project-revision-Cu3Cq-_K.js";
import { V, h as q, j as K, m as Y, rt as J, u as Z } from "./night-session-registry-CsStE3Cb.js";
import { t as X } from "./audit-hash-rfcCP1yx.js";
import { G as Q, O as ee, T as te, b as ne, i as ie, s as ae, w as re } from "./local-nonwear-unified-CQf8Na3k.js";
import { _ as se, a as oe, b as le, c as ue, f as ce, g as de, h as me, n as pe, o as ge, s as he, t as fe, v as _e, x as we, y as ye } from "./valid-day-criteria-B5y_ccRL.js";
import { $t as ve, A as Me, B as be, C as Se, I as ke, K as xe, M as Ie, N as Ae, P as Re, S as Te, Ut as Ne, W as Ee, Wt as $e, Xt as Ce, Yt as Oe, b as De, i as Le, mt as Be, zt as Pe } from "./store-DfF35Y-t.js";
import { h as Fe, m as We, v as je } from "./diary-local-import-contract-DTHKLA-P.js";
var Ge = Uint8Array, He = Uint16Array, ze = Int32Array, Ue = new Ge([
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
]), Ve = new Ge([
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
]), qe = new Ge([
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
	for (var n = new He(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
	var a = new ze(n[30]);
	for (i = 1; i < 30; ++i) for (var r = n[i]; r < n[i + 1]; ++r) a[r] = r - n[i] << 5 | i;
	return {
		b: n,
		r: a
	};
}, Ye = Ke(Ue, 2), Je = Ye.b, Ze = Ye.r;
Je[28] = 258, Ze[258] = 28;
for (var Xe = Ke(Ve, 0), Qe = (Xe.b, Xe.r), et = new He(32768), tt = 0; tt < 32768; ++tt) {
	var nt = (43690 & tt) >> 1 | (21845 & tt) << 1;
	nt = (61680 & (nt = (52428 & nt) >> 2 | (13107 & nt) << 2)) >> 4 | (3855 & nt) << 4, et[tt] = ((65280 & nt) >> 8 | (255 & nt) << 8) >> 1;
}
var it = function(e, t, n) {
	for (var i = e.length, a = 0, r = new He(t); a < i; ++a) e[a] && ++r[e[a] - 1];
	var s, o = new He(t);
	for (a = 1; a < t; ++a) o[a] = o[a - 1] + r[a - 1] << 1;
	if (n) {
		s = new He(1 << t);
		var l = 15 - t;
		for (a = 0; a < i; ++a) if (e[a]) for (var u = a << 4 | e[a], c = t - e[a], d = o[e[a] - 1]++ << c, m = d | (1 << c) - 1; d <= m; ++d) s[et[d] >> l] = u;
	} else for (s = new He(i), a = 0; a < i; ++a) e[a] && (s[a] = et[o[e[a] - 1]++] >> 15 - e[a]);
	return s;
}, at = new Ge(288);
for (tt = 0; tt < 144; ++tt) at[tt] = 8;
for (tt = 144; tt < 256; ++tt) at[tt] = 9;
for (tt = 256; tt < 280; ++tt) at[tt] = 7;
for (tt = 280; tt < 288; ++tt) at[tt] = 8;
var rt = new Ge(32);
for (tt = 0; tt < 32; ++tt) rt[tt] = 5;
var st = it(at, 9, 0), ot = it(rt, 5, 0), lt = function(e) {
	return (e + 7) / 8 | 0;
}, ut = function(e, t, n) {
	return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new Ge(e.subarray(t, n));
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
		var s = new Ge(n[0].s + 1);
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
	var p = new He(m + 1), g = ht(n[c - 1], p, 0);
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
		t: new Ge(p),
		l: g
	};
}, ht = function(e, t, n) {
	return -1 == e.s ? Math.max(ht(e.l, t, n + 1), ht(e.r, t, n + 1)) : t[e.s] = n;
}, ft = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new He(++t), i = 0, a = e[0], r = 1, s = function(e) {
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
	for (var d = gt(a, 15), m = d.t, p = d.l, g = gt(r, 15), h = g.t, f = g.l, _ = ft(m), w = _.c, y = _.n, v = ft(h), M = v.c, b = v.n, S = new He(19), k = 0; k < w.length; ++k) ++S[31 & w[k]];
	for (k = 0; k < M.length; ++k) ++S[31 & M[k]];
	for (var x = gt(S, 7), I = x.t, A = x.l, R = 19; R > 4 && !I[qe[R - 1]]; --R);
	var T, N, E, $, C = u + 5 << 3, O = _t(a, at) + _t(r, rt) + s, D = _t(a, m) + _t(r, h) + s + 14 + 3 * R + _t(S, I) + 2 * S[16] + 3 * S[17] + 7 * S[18];
	if (l >= 0 && C <= O && C <= D) return wt(t, c, e.subarray(l, l + u));
	if (mt(t, c, 1 + (D < O)), c += 2, D < O) {
		T = it(m, p, 0), N = m, E = it(h, f, 0), $ = h;
		var L = it(I, A, 0);
		for (mt(t, c, y - 257), mt(t, c + 5, b - 1), mt(t, c + 10, R - 4), c += 14, k = 0; k < R; ++k) mt(t, c + 3 * k, I[qe[k]]);
		c += 3 * R;
		for (var B = [w, M], P = 0; P < 2; ++P) {
			var F = B[P];
			for (k = 0; k < F.length; ++k) {
				var W = 31 & F[k];
				mt(t, c, L[W]), c += I[W], W > 15 && (mt(t, c, F[k] >> 5 & 127), c += F[k] >> 12);
			}
		}
	} else T = st, N = at, E = ot, $ = rt;
	for (k = 0; k < o; ++k) {
		var j = i[k];
		if (j > 255) {
			pt(t, c, T[257 + (W = j >> 18 & 31)]), c += N[W + 257], W > 7 && (mt(t, c, j >> 23 & 31), c += Ue[W]);
			var G = 31 & j;
			pt(t, c, E[G]), c += $[G], G > 3 && (pt(t, c, j >> 5 & 8191), c += Ve[G]);
		} else pt(t, c, T[j]), c += N[j];
	}
	return pt(t, c, T[256]), c + N[256];
}, vt = new ze([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), Mt = new Ge(0), bt = function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, i = 9; --i;) n = (1 & n && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), St = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
}, kt = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new Ge(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, i, a) {
			if (!a && (a = { l: 1 }, t.dictionary)) {
				var r = t.dictionary.subarray(-32768), s = new Ge(r.length + e.length);
				s.set(r), s.set(e, r.length), e = s, a.w = r.length;
			}
			return function(e, t, n, i, a, r) {
				var s = r.z || e.length, o = new Ge(i + s + 5 * (1 + Math.ceil(s / 7e3)) + a), l = o.subarray(i, o.length - a), u = r.l, c = 7 & (r.r || 0);
				if (t) {
					c && (l[0] = r.r >> 3);
					for (var d = vt[t - 1], m = d >> 13, p = 8191 & d, g = (1 << n) - 1, h = r.p || new He(32768), f = r.h || new He(g + 1), _ = Math.ceil(n / 3), w = 2 * _, y = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, v = new ze(25e3), M = new He(288), b = new He(32), S = 0, k = 0, x = r.i || 0, I = 0, A = r.w || 0, R = 0; x + 2 < s; ++x) {
						var T = y(x), N = 32767 & x, E = f[T];
						if (h[N] = E, f[T] = N, A <= x) {
							var $ = s - x;
							if ((S > 7e3 || I > 24576) && ($ > 423 || !u)) {
								c = yt(e, l, 0, v, M, b, k, I, R, x - R, c), I = S = k = 0, R = x;
								for (var C = 0; C < 286; ++C) M[C] = 0;
								for (C = 0; C < 30; ++C) b[C] = 0;
							}
							var O = 2, D = 0, L = p, B = N - E & 32767;
							if ($ > 2 && T == y(x - B)) for (var P = Math.min(m, $) - 1, F = Math.min(32767, x), W = Math.min(258, $); B <= F && --L && N != E;) {
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
								v[I++] = 268435456 | Ze[O] << 18 | Qe[D];
								var V = 31 & Ze[O], q = 31 & Qe[D];
								k += Ue[V] + Ve[q], ++M[257 + V], ++b[q], A = x + O, ++S;
							} else v[I++] = e[x], ++M[e[x]];
						}
					}
					for (x = Math.max(x, A); x < s; ++x) v[I++] = e[x], ++M[e[x]];
					c = yt(e, l, u, v, M, b, k, I, R, x - R, c), u || (r.r = 7 & c | l[c / 8 | 0] << 3, c -= 7, r.h = f, r.p = h, r.i = x, r.w = A);
				} else {
					for (x = r.w || 0; x < s + u; x += 65535) {
						var K = x + 65535;
						K >= s && (l[c / 8 | 0] = u, K = s), c = wt(l, c + 1, e.subarray(x, K));
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
				var i = new Ge(-32768 & n);
				i.set(this.b.subarray(0, this.s.z)), this.b = i;
			}
			var a = this.b.length - this.s.z;
			this.b.set(e.subarray(0, a), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(a), 32768), this.s.z = e.length - a + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = Mt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || dt(5), this.s.l && dt(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new Ge(6);
			t[0] = this.s.r >> 3;
			var n = wt(t, this.s.r, Mt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), xt = "undefined" != typeof TextEncoder && new TextEncoder(), It = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	It.decode(Mt, { stream: !0 });
} catch (zs) {}
function At(e, t) {
	if (t) {
		for (var n = new Ge(e.length), i = 0; i < e.length; ++i) n[i] = e.charCodeAt(i);
		return n;
	}
	if (xt) return xt.encode(e);
	var a = e.length, r = new Ge(e.length + (e.length >> 1)), s = 0, o = function(e) {
		r[s++] = e;
	};
	for (i = 0; i < a; ++i) {
		if (s + 5 > r.length) {
			var l = new Ge(s + 8 + (a - i << 1));
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
	St(e, t, null != s ? 33639248 : 67324752), t += 4, null != s && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (r < 0 && 8), e[t++] = a && 8, e[t++] = 255 & n.compression, e[t++] = n.compression >> 8;
	var m = new Date(null == n.mtime ? Date.now() : n.mtime), p = m.getFullYear() - 1980;
	if ((p < 0 || p > 119) && dt(10), St(e, t, p << 25 | m.getMonth() + 1 << 21 | m.getDate() << 16 | m.getHours() << 11 | m.getMinutes() << 5 | m.getSeconds() >> 1), t += 4, -1 != r && (St(e, t, n.crc), St(e, t + 4, r < 0 ? -r - 2 : r), St(e, t + 8, n.size)), St(e, t + 12, l), St(e, t + 14, d), t += 16, null != s && (St(e, t, c), St(e, t + 6, n.attrs), St(e, t + 10, s), t += 14), e.set(i, t), t += l, d) for (var g in u) {
		var h = u[g], f = h.length;
		St(e, t, +g), St(e, t + 2, f), e.set(h, t + 4), t += 4 + f;
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
	function e(e, t) {
		var n, i = this;
		t || (t = {}), Nt.call(this, e), this.d = new kt(t, function(e, t) {
			i.ondata(null, e, t);
		}), this.compression = 8, this.flag = 1 == (n = t.level) ? 3 : n < 6 ? 2 : 9 == n ? 1 : 0;
	}
	return e.prototype.process = function(e, t) {
		try {
			this.d.push(e, t);
		} catch (zs) {
			this.ondata(zs, null, t);
		}
	}, e.prototype.push = function(e, t) {
		Nt.prototype.push.call(this, e, t);
	}, e;
}(), $t = function() {
	function e(e) {
		this.ondata = e, this.u = [], this.d = 1;
	}
	return e.prototype.add = function(e) {
		var t = this;
		if (this.ondata || dt(5), 2 & this.d) this.ondata(dt(4 + 8 * (1 & this.d), 0, 1), null, !1);
		else {
			var n = At(e.filename), i = n.length, a = e.comment, r = a && At(a), s = i != e.filename.length || r && a.length != r.length, o = i + Rt(e.extra) + 30;
			i > 65535 && this.ondata(dt(11, 0, 1), null, !1);
			var l = new Ge(o);
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
					var r = new Ge(16);
					St(r, 0, 134695760), St(r, 4, e.crc), St(r, 8, g), St(r, 12, e.size), u.push(r), p.c = g, p.b = o + g + 16, p.crc = e.crc, p.size = e.size, d && p.r(), d = 1;
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
		for (var r, s, o, l, u, c = new Ge(n + 22), d = 0, m = this.u; d < m.length; d++) {
			var p = m[d];
			Tt(c, e, p, p.f, p.u, -p.c - 2, t, p.o), e += 46 + p.f.length + Rt(p.extra) + (p.o ? p.o.length : 0), t += p.b;
		}
		r = c, s = e, o = this.u.length, l = n, u = t, St(r, s, 101010256), St(r, s + 8, o), St(r, s + 10, o), St(r, s + 12, l), St(r, s + 16, u), this.ondata(null, c, !0), this.d = 2;
	}, e.prototype.terminate = function() {
		for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
		this.d = 2;
	}, e;
}();
function Ct(e) {
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
function Dt(e, t) {
	const n = function(e) {
		const t = Ct(e.ggirTimestamps), n = Ct(e.ggirEnmo);
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
function Lt(e, { fileIds: t, dateRange: n, signal: a }) {
	const r = Es(e, Ss.circadian);
	return async function(e, t, { dateRange: n, signal: a }) {
		const r = z(a), s = [];
		let o = 0;
		for (const l of e) {
			if (!l.id) continue;
			a?.throwIfAborted();
			const e = await t(l.id), u = [];
			for (const t of e.values()) {
				if (a?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
				o += 1;
				const e = Dt(l.id, t);
				e && u.push(e);
			}
			if (0 === u.length) continue;
			const { request: c, transfer: d } = Ot(u.map((e) => e.wire)), m = await r.computeCircadian(i(c, d));
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
	}(t.length > 0 ? r.files.filter((e) => null != e.id && t.includes(e.id)) : r.files, (e) => Bs(r, e), {
		dateRange: n,
		signal: a
	});
}
const Bt = [
	"scoreGgirHasibVariant",
	"scoreSadeh",
	"scoreColeKripke",
	"scoreEpochs"
];
function Pt(e) {
	return ArrayBuffer.isView(e) ? `${e.constructor.name}[${String(e.byteLength)}]` : Array.isArray(e) ? e.map(Pt) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Pt(t)])) : e;
}
function Ft(e, t) {
	if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
		if (e.byteLength !== t.byteLength) return !1;
		const n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), i = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
		return n.every((e, t) => e === i[t]);
	}
	if (null !== e && null !== t && "object" == typeof e && "object" == typeof t) {
		const n = Object.entries(e);
		return n.length === Object.keys(t).length && n.every(([e, n]) => Ft(n, t[e]));
	}
	return Object.is(e, t);
}
function Wt(e) {
	const t = /* @__PURE__ */ new Map();
	return new Proxy(e, { get(e, n, i) {
		const a = Reflect.get(e, n, i);
		return "function" == typeof a && Bt.includes(n) ? async (...i) => {
			const r = `${String(n)}|${JSON.stringify(Pt(i))}`, s = t.get(r) ?? [];
			t.set(r, s);
			let o = s.find((e) => Ft(e.args, i));
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
const jt = [
	"vanHees2015",
	"Sadeh1994",
	"Galland2012",
	"ColeKripke1992",
	"Oakley1997",
	"NotWorn"
];
function Gt(e) {
	const t = o[e];
	if (void 0 === t) throw new Error(`no generated method-family label for ${e}`);
	return t.algorithmValue;
}
const Ht = p.angle_hasib?.algorithmValue, zt = jt.filter((e) => e !== Ht), Ut = new Set(zt);
function Vt(e) {
	const t = d.count_input_series_keys?.[e];
	if (void 0 === t) throw new Error(`Unsupported HASIB count source: ${e}`);
	return {
		family: String(t.count_family),
		axis: String(t.axis),
		epochSeconds: Number(t.epoch_seconds)
	};
}
const qt = {
	vanHees2015: O.GGIR_HASIB_VAN_HEES_2015,
	Sadeh1994: O.GGIR_HASIB_SADEH_1994,
	Galland2012: O.GGIR_HASIB_GALLAND_2012,
	ColeKripke1992: O.GGIR_HASIB_COLE_KRIPKE_1992,
	Oakley1997: O.GGIR_HASIB_OAKLEY_1997,
	NotWorn: O.GGIR_HASIB_NOT_WORN
};
function Kt(e, t, n) {
	if (n.sib.length !== t) throw new Error(`HASIB ${e} returned ${String(n.sib.length)} epochs, expected ${String(t)}.`);
	return n;
}
function Yt(e, t) {
	const n = o[_];
	return void 0 !== n && e === n.algorithmValue && Vt(t).family === a;
}
async function Jt(e) {
	const t = e.variants ?? jt, n = t.filter((e) => Ut.has(e)).length > 0 ? await async function(e) {
		const t = Vt(e.countSource);
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
		const t = a === Ht, r = t ? e.anglez5s : n?.series;
		if (!r || 0 === r.length) throw new Error(`HASIB ${a} requires a non-empty ${t ? "AngleZ" : "count"} input series.`);
		const s = t ? void 0 : e.countEpochSeconds ?? n?.epochSeconds, o = !t && null !== n && Yt(a, n.countSource), l = void 0 !== s ? {
			ws3: s,
			...e.configs?.[a]
		} : e.configs?.[a], u = o ? {
			...l,
			neishabouriCount: !0
		} : l, c = await e.backend.scoreGgirHasibVariant(r, a, u);
		i.push({
			variant: a,
			key: qt[a],
			countSource: t ? "anglez_5s" : n.countSource,
			result: Kt(a, r.length, c)
		});
	}
	return i;
}
function Zt(e) {
	return Object.keys(f).filter((t) => f[t].propagation.includes(e)).sort();
}
function Xt(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(Xt).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${Xt(t)}`).join(",")}}`;
}
function Qt(e, t) {
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
function en(e) {
	return JSON.stringify([...new Set(e ?? [])]);
}
function tn(e, t) {
	if (0 === e.length) return null;
	if (e.length === t.timestamps.length && t.timestamps.length > 0) return t.timestamps;
	const n = t.ggirTimestamps;
	return n && e.length === n.length && n.length > 0 ? n : null;
}
const nn = {
	[y.GT3X_BINARY]: "gt3x_capsense",
	[y.GENEACTIV_BIN]: "detach_nonwear"
}, an = {
	"actoglance.source.philips_actiware_csv.v1": "actiware_off_wrist",
	"actoglance.source.philips_actiwatch_aw5.v1": "actiware_off_wrist"
};
function rn(e, t) {
	return (t ? an[t] : void 0) || (e ? nn[e] ?? null : null);
}
async function sn(e, t, i = n()) {
	const a = e.nonwearBands?.[en(t)];
	if (null === a) return null;
	if (a) {
		const t = "counts" === a.grid ? e.timestamps : e.ggirTimestamps, [n] = a.detectors;
		if (t && n && t.length === a.mask.length) return {
			detector: n,
			detectors: a.detectors,
			mask: a.mask,
			...a.weight ? { weight: a.weight } : {},
			grid: t,
			epochSeconds: await Be(t, 60, i)
		};
	}
	const r = [];
	let s = null;
	for (const n of new Set(t ?? [])) {
		if (un(n)) continue;
		const t = e.algorithmicNonwearMasks?.[n];
		if (!t) continue;
		const i = tn(t, e);
		!i || null !== s && i !== s || (s = i, r.push({
			detector: n,
			mask: t
		}));
	}
	const o = r[0];
	if (!o || !s) return null;
	const l = await Be(s, 60, i), u = [...r, ...await on(e, t, {
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
async function on(e, t, { grid: n, epochSeconds: i }, a) {
	const r = e.deviceNonwearSource, s = "gt3x_capsense" === r ? g.GT3X_CAPSENSE : "detach_nonwear" === r ? g.DETACH_NONWEAR : null;
	if (null === s || !(t ?? []).includes(s)) return [];
	const o = (e.sensorNonwearPeriods ?? []).map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	}));
	return [{
		detector: s,
		mask: await Q(o, n, i, a)
	}];
}
function ln(e, t) {
	return t ? e : e.filter((e) => e !== g.CHOI_2011 && e !== g.CHOI_2012);
}
function un(e) {
	return e === g.GT3X_CAPSENSE || e === g.DETACH_NONWEAR;
}
function cn(e, t, n) {
	return i = function(e, t) {
		const n = {
			...e,
			ggir_config: { sha256: ve(e).sha256 }
		}, i = ge(t, he(e.analysis_paradigm));
		return ce(t) ? i ? (delete n.ggir_config, n.default_algorithm = i.sleepAlgorithm, i.periodGuider && (n.period_guider = i.periodGuider), n.nonwear_detectors_counts = ue({
			algorithm: i.sleepAlgorithm,
			periodGuider: i.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, i.paradigm, t).nonwearDetectorsCounts, 0 === Object.keys(oe(e.actiware_analysis)).length && delete n.actiware_analysis) : delete n.actiware_analysis : (delete n.analysis_paradigm, delete n.actiware_analysis), rn(t?.sourceType, t?.sourceProfileId) !== g.ACTIWARE_OFF_WRIST || (delete n.ggir_config, n.extraction_path = null, "ggir" !== ne(n.default_algorithm) && (n.nonwear_detectors_ggir = null)), n;
	}(function(e, t, n = Le.getState()) {
		const i = n, a = {};
		for (const r of Zt("materialized")) {
			const e = f[r].storeKeys.zustand;
			if (void 0 === e || !(e in i)) throw new Error(`materialized setting ${r} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			a[r] = i[e];
		}
		return a.sleep_period_detection = {
			value: a.sleep_period_detection,
			resolvedSensorLocation: Qt(e, t)
		}, a;
	}(e, t, n), e), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${Xt(t[e])}`);
		let i = 2166136261;
		for (const a of n.join("")) i ^= a.charCodeAt(0), i = Math.imul(i, 16777619) >>> 0;
		return i.toString(16).padStart(8, "0");
	}(Zt("materialized"), i);
	var i;
}
Object.freeze([]), g.CHOI_2011, g.CHOI_2012, g.VAN_HEES_2013, g.VAN_HEES_2023, g.TROIANO_2008, g.AHMADI_2020;
var dn = e({
	ggirCell: () => pn,
	ggirColumn: () => mn,
	ggirNum: () => gn,
	ggirRow: () => hn
});
function mn(e, t) {
	return e.columns.indexOf(t);
}
function pn(e, t, n) {
	const i = mn(e, t);
	return i < 0 ? null : e.values[i]?.[n] ?? null;
}
function gn(e, t, n) {
	const i = pn(e, t, n);
	if ("number" == typeof i) return Number.isFinite(i) ? i : null;
	if ("string" == typeof i && "" !== i.trim()) {
		const e = Number(i);
		return Number.isFinite(e) ? e : null;
	}
	return null;
}
function hn(e, t, n) {
	const i = mn(e, t);
	if (i < 0) return -1;
	const a = e.values[i] ?? [];
	for (let r = 0; r < e.rows; r += 1) {
		const e = a[r];
		if (("number" == typeof e ? e : Number(e)) === n) return r;
	}
	return -1;
}
const fn = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function _n(e, t = []) {
	const [n, i, a, r, s, o] = await Promise.all([
		fn(e.part1),
		fn(e.ms2),
		fn(e.ms3),
		fn(e.ms4),
		fn(e.ms5),
		fn(e.sleeplogRData)
	]);
	return {
		part1: n,
		configCsv: await e.configCsv.text(),
		...e.part2Reports ? { part2Reports: e.part2Reports } : {},
		...i ? { ms2: i } : {},
		...a ? { ms3: a } : {},
		...r ? { ms4: r } : {},
		...s ? { ms5: s } : {},
		...o ? { sleeplogRData: o } : {},
		...e.sleeplogCsv ? { sleeplogCsv: await e.sleeplogCsv.text() } : {},
		recordingId: D(e.recordingFile),
		...e.cleanedNightsCsv ? { cleanedNightsCsv: await e.cleanedNightsCsv.text() } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: await e.dataCleaningCsv.text() } : {},
		edits: t,
		crossCheck: !1
	};
}
function wn(e) {
	const { sib: t, invalid: n, nonwear: i, ...a } = e;
	return a;
}
const yn = (e) => e ? e.slice().buffer : void 0;
function vn(e, t, n, i, a) {
	const r = yn(n.ms2), s = yn(n.ms3), o = yn(n.ms4), l = yn(n.ms5), u = yn(n.sleeplogRData);
	return {
		fileId: e,
		recordingFile: t,
		part1: yn(n.part1),
		configCsv: n.configCsv,
		part2Reports: Object.fromEntries(Object.entries(n.part2Reports ?? {}).map(([e, t]) => {
			const n = new Set((i.nights.values[i.nights.columns.indexOf(N.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), a = new Set((i.nights.values[i.nights.columns.indexOf(N.ggir_filename.header)] ?? []).map((e) => D(String(e)))), r = Array.from({ length: t.rows }, (e, t) => t).filter((e) => null != t.values[t.columns.indexOf(N.ggir_id.header)]?.[e] && n.has(String(t.values[t.columns.indexOf(N.ggir_id.header)][e])) && (!t.columns.includes(N.ggir_filename.header) || 0 === a.size || a.has(D(String(t.values[t.columns.indexOf(N.ggir_filename.header)]?.[e])))));
			return [e, {
				columns: t.columns,
				rows: r.length,
				values: t.values.map((e) => r.map((t) => e[t]))
			}];
		})),
		...n.cleanedNightsCsv ? { cleanedNightsCsv: n.cleanedNightsCsv } : {},
		...n.dataCleaningCsv ? { dataCleaningCsv: n.dataCleaningCsv } : {},
		...r ? { ms2: r } : {},
		...s ? { ms3: s } : {},
		...o ? { ms4: o } : {},
		...l ? { ms5: l } : {},
		...u ? { sleeplogRData: u } : {},
		...n.sleeplogCsv ? { sleeplogCsv: n.sleeplogCsv } : {},
		...a ? { ggirCorrections: a } : {},
		imported: wn(i),
		edits: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function Mn(e) {
	return ((e) => {
		const t = /* @__PURE__ */ new Set();
		return e.filter((e) => !t.has(e.night) && (t.add(e.night), !0));
	})(e.sleepWindows);
}
function bn(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return Mn(e).filter((i) => t.has(i.night) && i.onsetMs >= e.startMs && i.wakeMs <= n && i.wakeMs > i.onsetMs);
}
function Sn(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case Ht: return c.VAN_HEES_2015;
		case Gt("cole_kripke_1992"): return c.COLE_KRIPKE_1992_GGIR;
		case Gt("sadeh_1994"): return c.SADEH_1994_GGIR;
		case Gt("galland_2012"): return c.GALLAND_2012;
		case Gt("oakley_1997"): return c.OAKLEY_1997;
		default: return null;
	}
}
function kn(e) {
	return null == Sn(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${function(e) {
		const t = Mn(e).length;
		return `${String(bn(e).length)} of ${String(t)} ${1 === t ? "night" : "nights"} GGIR reported got a GGIR marker.`;
	}(e)}`;
}
function xn(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.nightDate);
		if (null != e && e !== n.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		t.set(n.nightDate, n.night);
	}
}
async function In(e, t, n, i) {
	const a = t.find((e) => e.night === n), r = Mn(e).find((e) => e.night === n);
	if (!a || !r) return null;
	const [s, o] = await ((e, t) => z(t).wallClockLabels(Float64Array.from(e)))([r.onsetMs, r.wakeMs], i), l = [a.onset !== s ? `onset moved ${a.onset}` : null, a.wake !== o ? `wake moved ${a.wake}` : null].filter((e) => null != e);
	return l.length > 0 ? `edited: ${l.join(", ")}` : null;
}
async function An(e, t, n, i = z(n)) {
	if (xn(e.sleepWindows), !e.sources.ms5) return [];
	const a = (/* @__PURE__ */ new Date()).toISOString(), r = e.nightSummaries ?? [], s = new Map(Mn(e).map((e) => [e.night, e.nightDate])), o = (e) => e.nightDate ?? (null == e.night ? void 0 : s.get(e.night)), l = new Map(await Promise.all([...new Set(r.map(o).filter((e) => null != e))].map(async (e) => [e, await T(e, void 0, i)]))), u = Float64Array.from(r, (e) => e.validHours ?? NaN), c = e.includeDayCriterionHours ?? await i.ggirIncludeDayCriterionHours(null), d = Float64Array.from(r, () => c), m = await i.ggirDaysIncluded(u, d, null);
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
async function Rn(e, t, n) {
	return Promise.all(bn(e).map(async (i) => {
		const [a, r] = await n.ggirLabelsToStoredMs(Float64Array.of(i.onsetMs, i.wakeMs), t), s = await async function(e, t, n, i = z(n)) {
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
async function Tn(e, t, n, i, a, r = [], s, o) {
	xn(t.sleepWindows);
	const l = Sn(t);
	if (null == l) return !0;
	const u = cn(null, n), c = z(s);
	let d = !0;
	for (const p of o ?? await Rn(t, r, c)) {
		const t = [{
			markerType: m.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: p.onsetTimestamp,
			offsetTimestamp: p.offsetTimestamp,
			source: "auto",
			settingsHash: u
		}];
		await (await import("./night-session-DpzlTbYZ.js").then((e) => e.t)).writeHeadlessNight({
			signal: s,
			fileId: e,
			...a ? { expected: q(null) } : {},
			date: p.date,
			username: J,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p.notes,
			algorithm: l,
			sleepPeriodDetectionConfig: ee(void 0, ie) ?? null
		}, i, null).catch(() => {
			s?.throwIfAborted(), console.warn("[local-processing] GGIR results marker persistence failed."), d = !1;
		});
	}
	return d;
}
async function Nn(e, t, n, i, a = 60, r, s) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == i || n >= i) return null;
	const o = new Uint8Array(e.length);
	for (let u = 0; u < e.length; u++) o[u] = 1 === e[u] ? 1 : 0;
	const l = await En(o, r && r.length === e.length ? r : new Float64Array(e.length), t, n, i, a, s);
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
async function En(e, t, n, i, a, r = 60, s) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == i || null == a || i >= a) return null;
	const o = await async function(e, t, n, i) {
		const a = await z(i).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === a.length ? {
			startIdx: a[0],
			endIdx: a[1]
		} : null;
	}(n, i, a, s);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, u = o.endIdx + 1, c = e instanceof Uint8Array ? e.slice(l, u) : new Uint8Array(e.slice(l, u)), d = t instanceof Float64Array ? t.slice(l, u) : Float64Array.from(t.slice(l, u)), m = await z(s).computeSleepMetrics(c, d, r), p = n[l] ?? 0, g = n[u - 1] ?? p, h = null != m.firstSleepEpochIdx ? n[l + m.firstSleepEpochIdx] ?? p : p, f = null != m.lastSleepEpochIdx ? n[l + m.lastSleepEpochIdx] ?? g : g;
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
function $n(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const i = Pe(e), a = Array.from(i.timestamps);
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
	const s = R(e, t);
	return {
		timestamps: a,
		algorithmResults: "ok" === s.status && s.bytes ? new Uint8Array(s.bytes) : null,
		activity: r,
		scoresStale: "stale" === s.status ? s.reason : null
	};
}
const Cn = /* @__PURE__ */ new Map();
async function On(e, t) {
	if (Cn.has(e)) return Cn.get(e);
	try {
		const n = await z(t).resolveTimezone(e);
		return Cn.set(e, n), n;
	} catch (dt) {
		t?.throwIfAborted(), console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, dt);
		return;
	}
}
function Dn(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : We();
}
async function Ln(e) {
	try {
		return Dn((await Re(e))?.extraSettings);
	} catch (dt) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", dt), We();
	}
}
function Bn(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const Pn = {
	zone: null,
	reason: null
};
async function Fn(e, t, n) {
	const i = e.ggirTimezone?.trim();
	let a = null;
	if (i) {
		const e = await On(i, n);
		if (!e) return Pn;
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
	if (null === a) return Pn;
	const r = await On(t, n);
	if (void 0 === r) return Pn;
	if ("iana" !== r?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const s = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== s && (await je(r.zone, s, z(n))).includes(a) ? {
		zone: r.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${Bn(a)} is not a ${r.zone} offset`
	};
}
function Wn(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [i, a] of e.entries()) t[i + 1] = t[i] + a.length;
	const n = new Float64Array(t[e.length]);
	for (const [i, a] of e.entries()) n.set(a, t[i]);
	return [n, t];
}
const jn = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), Gn = [
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
var Hn = Gn.map(() => jn);
Object.fromEntries(Gn.map(([e], t) => [e, Hn[t]]));
const zn = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor"
];
async function Un(e, t, i, a) {
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
async function Vn(e, t, i) {
	const a = e instanceof Float64Array ? e : Float64Array.from(e), [r, s] = await (i ?? n()).analysisWindowSlice(a, t);
	return {
		startIndex: r,
		endIndex: s
	};
}
async function qn(e, t = n()) {
	const i = [...new Set(e)], a = await t.analysisDatesOf(Float64Array.from(i)), r = new Map(i.map((e, t) => [e, a[t] ?? ""]));
	return (e) => r.get(e) ?? "";
}
function Kn(e) {
	const t = {};
	return e.nonwearResults && (t.choi90 = new Uint8Array(e.nonwearResults)), e.nonwearResultsChoi2011 && (t.choi60 = new Uint8Array(e.nonwearResultsChoi2011)), e.vanHeesNonwear && (t.vanHees = new Uint8Array(e.vanHeesNonwear)), e.detachNonwear && (t.sensor = new Uint8Array(e.detachNonwear)), t;
}
async function Yn(e, t, n, i) {
	const a = e.get(t), r = $n(a, n), s = a ? Kn(a) : {}, o = e.get(await T(t, void 0, z(i))), l = r.timestamps[r.timestamps.length - 1], u = o ? $n(o, n) : null, c = u?.timestamps[0], d = void 0 !== o && null !== u && void 0 !== l && void 0 !== c && c > l, m = r.scoresStale ?? u?.scoresStale ?? null;
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
	const _ = Kn(o), w = {};
	for (const y of zn) {
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
async function Jn(e, t, n, i) {
	const a = await n.files.get(e.fileId);
	if (!a) return;
	const r = /* @__PURE__ */ new Map();
	for (const s of [e.date, await T(e.date, void 0, z(i))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, s]).first();
		t && r.set(s, t);
	}
	await async function(e, t, n, i) {
		const { date: a, file: r, activityMap: s, verdict: o } = t, l = t.spanning ?? await Yn(s, a, o, i);
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
		for (const p of e.sleepMarkers) m.push(d && c.length > 0 && p.onsetTimestamp && p.offsetTimestamp ? await En(d, l.activity ?? new Float64Array(d.length), l.timestamps, p.onsetTimestamp, p.offsetTimestamp, r.epochLengthSeconds || 60, i) : null);
		if (void 0 !== e.id) try {
			await U(n, [n.markers], () => Y(e.id, {
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
const Zn = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], Xn = ["under-series", "over-series"], Qn = ["full-resolution-v1", "min-max-gap-envelope-v1"], ei = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function ti(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function ni(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? ti(t, "expected an object") : e;
}
function ii(e, t) {
	return Array.isArray(e) ? e : ti(t, "expected an array");
}
function ai(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : ti(t, "expected a finite number");
}
function ri(e, t) {
	const n = ai(e, t);
	return n <= 0 ? ti(t, "expected a positive number") : n;
}
function si(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : ti(t, "expected a safe integer");
}
function oi(e, t) {
	const n = si(e, t);
	return n < 0 ? ti(t, "expected a non-negative safe integer") : n;
}
function li(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? ti(t, "expected a boolean") : { [n]: e };
}
function ui(e, t) {
	return "string" != typeof e || 0 === e.length ? ti(t, "expected a non-empty string") : e;
}
function ci(e, t) {
	return "string" == typeof e && Zn.includes(e) ? e : ti(t, "expected a supported tone");
}
function di(e, t) {
	return "string" == typeof e && Xn.includes(e) ? e : ti(t, "expected a supported phase");
}
function mi(e, t) {
	const n = ni(e, t), i = ai(n.min, `${t}.min`), a = ai(n.max, `${t}.max`);
	return a <= i || !Number.isFinite(a - i) ? ti(t, "expected a finite ascending range") : {
		min: i,
		max: a
	};
}
function pi(e, t) {
	const n = `series[${t}]`, i = ni(e, n), a = ii(i.points, `${n}.points`);
	let r = Number.NEGATIVE_INFINITY;
	const s = a.map((e, t) => {
		const i = `${n}.points[${t}]`, a = ni(e, i), s = ai(a.timestamp, `${i}.timestamp`);
		if (s <= r) return ti(`${i}.timestamp`, "expected strictly ascending timestamps");
		r = s;
		const o = a.value;
		return {
			timestamp: s,
			value: null === o ? null : ai(o, `${i}.value`)
		};
	});
	return {
		tone: ci(i.tone, `${n}.tone`),
		strokeWidth: ri(i.strokeWidth, `${n}.strokeWidth`),
		valueDomain: mi(i.valueDomain, `${n}.valueDomain`),
		points: s
	};
}
function gi(e, t) {
	const n = `overlays[${t}]`, i = ni(e, n), a = {
		phase: di(i.phase, `${n}.phase`),
		order: si(i.order, `${n}.order`),
		tone: ci(i.tone, `${n}.tone`)
	};
	if ("interval" === i.kind) {
		const e = ai(i.startTimestamp, `${n}.startTimestamp`), t = ai(i.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? ti(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...a,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === i.kind ? {
		kind: "threshold",
		...a,
		value: ai(i.value, `${n}.value`),
		...li(i.draggable, `${n}.draggable`, "draggable"),
		...li(i.selected, `${n}.selected`, "selected"),
		...li(i.handle, `${n}.handle`, "handle"),
		...void 0 === i.label ? {} : { label: ui(i.label, `${n}.label`) }
	} : "instant" === i.kind ? {
		kind: "instant",
		...a,
		timestamp: ai(i.timestamp, `${n}.timestamp`)
	} : ti(`${n}.kind`, "expected interval, threshold, or instant");
}
function hi(e) {
	const t = ni(e, "scene");
	if (2 !== t.version) return ti("version", "expected 2");
	const n = ni(t.grid, "grid"), i = {
		strategy: (a = n.strategy, "string" == typeof a && Qn.includes(a) ? a : ti("grid.strategy", "expected a supported render-grid strategy")),
		sourcePointCount: oi(n.sourcePointCount, "grid.sourcePointCount"),
		renderedPointCount: oi(n.renderedPointCount, "grid.renderedPointCount")
	};
	var a;
	if (i.renderedPointCount > i.sourcePointCount) return ti("grid", "renderedPointCount cannot exceed sourcePointCount");
	if ("full-resolution-v1" === i.strategy && i.renderedPointCount !== i.sourcePointCount) return ti("grid", "full-resolution strategy requires equal point counts");
	const r = ni(t.size, "size"), s = {
		width: ri(r.width, "size.width"),
		height: ri(r.height, "size.height")
	}, o = ni(t.plotArea, "plotArea"), l = {
		left: ai(o.left, "plotArea.left"),
		top: ai(o.top, "plotArea.top"),
		width: ri(o.width, "plotArea.width"),
		height: ri(o.height, "plotArea.height")
	};
	if (l.left < 0 || l.top < 0 || l.left + l.width > s.width || l.top + l.height > s.height) return ti("plotArea", "expected bounds contained by size");
	const u = mi(t.viewport, "viewport"), c = mi(t.valueDomain, "valueDomain"), d = ii(t.series, "series").map(pi);
	if (0 === d.length && 0 !== i.renderedPointCount) return ti("grid.renderedPointCount", "expected zero when series is empty");
	const m = d[0]?.points.map((e) => e.timestamp) ?? [];
	for (let f = 0; f < d.length; f++) {
		const e = d[f]?.points ?? [];
		if (e.length !== i.renderedPointCount) return ti(`series[${f}].points`, "expected renderedPointCount aligned points");
		for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return ti(`series[${f}].points[${t}].timestamp`, "expected the shared render grid timestamp");
	}
	const p = ii(t.overlays, "overlays").map(gi), g = null === t.cursorTimestamp ? null : ai(t.cursorTimestamp, "cursorTimestamp");
	let h = null;
	if (null !== t.selection) {
		const e = ni(t.selection, "selection"), n = ai(e.startTimestamp, "selection.startTimestamp"), i = ai(e.endTimestamp, "selection.endTimestamp");
		if (i <= n) return ti("selection", "expected a half-open ascending interval");
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
function fi(e, t, n) {
	const i = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(i) ? i : ti("projection", "expected a finite pixel coordinate");
}
function _i(e, t, n) {
	const i = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(i) ? i : ti("projection", "expected a finite pixel coordinate");
}
function wi(e) {
	const t = Number(e.toFixed(6));
	return Object.is(t, -0) ? "0" : String(t);
}
function yi(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function vi(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, i = t.plotArea.height, a = ei[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const r = yi(fi(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), s = yi(fi(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${wi(r)}" y="0" width="${wi(Math.max(1, s - r))}" height="${wi(i)}" fill="${a}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const r = _i(e.value, t.valueDomain, i), s = !0 === e.selected, o = s ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${s ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${wi(r)}" x2="${wi(n)}" y2="${wi(r)}" stroke="${a}" stroke-width="${s ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const r = fi(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${wi(r)}" y1="0" x2="${wi(r)}" y2="${wi(i)}" stroke="${a}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function Mi(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function bi(e) {
	return String(e).padStart(2, "0");
}
function Si(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const ki = [
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
new Set(ki.slice(16).map(([e]) => e));
var xi = class extends Error {};
const Ii = "edit_recompute_requires_ms2_ms3", Ai = /* @__PURE__ */ new Set([
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
]), Ri = A.invalid_night_row.markerTypeCell, Ti = new Set(ki.map(([, e]) => e)), Ni = /* @__PURE__ */ new Set([
	N.ggir_sleepparam.header,
	N.ggir_guider_onset.header,
	N.ggir_guider_wakeup.header,
	N.ggir_guider_spt_duration.header,
	N.ggir_error_onset.header,
	N.ggir_error_wake.header,
	N.ggir_error_dur.header,
	N.ggir_fraction_night_invalid.header,
	N.ggir_duration_sib_wakinghours.header,
	N.ggir_number_sib_sleepperiod.header,
	N.ggir_number_sib_wakinghours.header,
	N.ggir_duration_sib_wakinghours_atleast15min.header,
	N.ggir_guider_onset_ts.header,
	N.ggir_guider_wakeup_ts.header,
	N.ggir_page.header,
	N.ggir_daysleeper.header,
	N.ggir_sleeplog_id.header,
	N.ggir_guider.header,
	N.ggir_longitudinal_axis.header
]), Ei = /* @__PURE__ */ new Set([
	N.ggir_sleep_duration_in_spt.header,
	N.ggir_waso.header,
	N.ggir_number_of_awakenings.header,
	N.ggir_sleeplatency.header,
	N.ggir_sleepefficiency.header
]), $i = /* @__PURE__ */ new Set([
	...Ei,
	N.ggir_nonwear_perc_spt.header,
	N.ggir_sleeponset.header,
	N.ggir_wakeup.header,
	N.ggir_spt_duration.header,
	N.ggir_guider_onset.header,
	N.ggir_guider_wakeup.header,
	N.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	N.ggir_sleeponset_ts.header,
	N.ggir_wakeup_ts.header,
	N.ggir_guider_onset_ts.header,
	N.ggir_guider_wakeup_ts.header,
	N.ggir_daysleeper.header,
	N.ggir_cleaningcode.header,
	N.ggir_guider.header,
	N.ggir_error_onset.header,
	N.ggir_error_wake.header,
	N.ggir_error_dur.header,
	N.ggir_fraction_night_invalid.header,
	N.ggir_duration_sib_wakinghours.header,
	N.ggir_number_sib_sleepperiod.header,
	N.ggir_number_sib_wakinghours.header,
	N.ggir_duration_sib_wakinghours_atleast15min.header
]), Ci = /* @__PURE__ */ new Set([
	N.ggir_id.header,
	N.ggir_filename.header,
	N.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	N.ggir_sleep_regularity_index1.header,
	N.ggir_sri_fraction_valid.header,
	N.ggir_calendar_date.header,
	N.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	N.ggir_cleaningcode.header,
	N.ggir_guider.header,
	N.ggir_sleeplog_used.header,
	N.ggir_acc_available.header,
	N.ggir_daysleeper.header
]), Oi = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), Di = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), Li = new Set(Object.values(N).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), Bi = new Set(Object.values(N).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), Pi = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim());
function Fi(e, t, n, i) {
	const a = (e) => n.get(e) ?? "", r = a(t + "_missing_reason");
	if (r && !Ai.has(r)) return null;
	const s = r || null;
	if (e.startsWith("part2_")) return "source_reported_missing";
	if (e.includes("_ggir_review")) {
		if (s) return s;
		const e = a("review_source");
		return "ggir" === e ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const o = a(N.marker_type.header) === Ri || "actiware_intervals_export.csv" === e && a(N.interval_kind.header) === Ri;
	if (!function(e, t) {
		return "actiware_intervals_export.csv" === e ? Ti.has(t) : "actiware_sleep_wake_export.csv" === e ? t === N.actiware_sleep_wake.header || t === N.actiware_wake_threshold.header : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			N.ggir_id.header,
			N.ggir_filename.header,
			N.ggir_calendar_date.header,
			N.ggir_weekday.header,
			N.ggir_sleeplog_id.header,
			N.ggir_guider_corrected.header,
			N.ggir_cleaningcode.header
		].includes(t) : Li.has(t);
	}(e, t)) return s || (o ? "invalid_night" : "Manual Nonwear" === a(N.marker_type.header) ? "manual_nonwear_period" : null);
	if ("actiware_intervals_export.csv" === e && Ti.has(t)) {
		if (o) return "invalid_night";
		const e = a(N.interval_kind.header).toLowerCase(), n = a(N.interval_start_local.header);
		if ("daily" === e && n && n === a(N.interval_end_local.header)) return "zero_interval_rows";
		if ([
			N.actiware_onset_latency.header,
			N.actiware_efficiency.header,
			N.actiware_waso.header
		].includes(t)) {
			if ("sleep" !== e) return "not_applicable_to_row";
			if (Pi(a(N.actiware_duration.header))) return null;
			const t = a(N.interval_start_local.header), n = a(N.interval_end_local.header);
			if (!t || !n) return null;
			let r = !1;
			for (const e of i) if (e.get(N.filename.header) === a(N.filename.header) && "rest" === e.get(N.interval_kind.header) && (e.get(N.interval_start_local.header) ?? "") <= t && n <= (e.get(N.interval_end_local.header) ?? "")) {
				r = !0;
				break;
			}
			return r ? null : "no_eligible_rest";
		}
		if (Pi(a(N.actiware_duration.header))) return null;
		if (t === N.actiware_off_wrist.header || t === N.actiware_off_wrist_percent.header) return t === N.actiware_off_wrist_percent.header && "0.00" === a(N.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === s ? s : null;
		if (t === N.actiware_avg_ac_per_min.header) return 100 === Number(a(N.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			N.actiware_invalid_sw_percent.header,
			N.actiware_wake_percent.header,
			N.actiware_sleep_percent.header
		].includes(t)) {
			if ("0.00" === a(N.actiware_duration.header)) return "zero_interval_rows";
			const e = !Pi(a(N.actiware_wake_time.header)) && !Pi(a(N.actiware_sleep_time.header)) && 0 === Number(a(N.actiware_wake_time.header)) && 0 === Number(a(N.actiware_sleep_time.header));
			return t === N.actiware_invalid_sw_percent.header || 100 !== Number(a(N.actiware_invalid_sw_percent.header)) && !e ? null : "no_scored_epochs";
		}
		const r = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(t);
		if (r) {
			const e = r[1];
			return "0.00" === a(N.actiware_duration.header) ? "zero_interval_rows" : Pi(a("%Invalid " + e)) ? "source_reported_missing" === s ? s : null : t.startsWith("TALT ") && !Pi(a("Exposure " + e)) ? "threshold_unconfigured" : 100 === Number(a("%Invalid " + e)) ? "no_valid_epochs" : null;
		}
		return null;
	}
	if ("actiware_sleep_wake_export.csv" === e) {
		if (t === N.actiware_sleep_wake.header) return "no_valid_epochs" === s ? s : null;
		if (t === N.actiware_wake_threshold.header) return "not_computed_for_export" === s ? s : null;
	}
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return Ni.has(t) ? "not_computed_for_export" === s ? s : null : Ei.has(t) ? "no_scored_epochs" === s || "not_applicable_to_row" === s || "scores_from_another_config" === s ? s : null : s;
	if ("sleep_export_wide.csv" === e) return s;
	if ("summary_export.csv" === e && t === N.sleep_regularity_index.header) return s && [
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
		const r = M.find((e) => e.method === n);
		return i && r?.cutpoint && !Number.isFinite(r.cutpoint[i]) || "MIMS Unit Total" === t && "mims" !== n ? "not_applicable_to_row" : "ggir_enmo" === n ? Oi.has(t) ? "source_reported_missing" === s ? s : null : Di.has(t) && "not_computed_for_export" === s ? s : null : "mims" === n && [
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
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === a(N.marker_type.header) ? "manual_nonwear_period" : null : "true" === a(N.is_invalid_night.header).toLowerCase() && a(N.marker_type.header) === Ri ? "invalid_night" : t === N.total_nap_minutes.header && "0" === a(N.nap_count.header) ? "not_applicable_to_row" : [
		N.l5_hour.header,
		N.m10_hour.header,
		N.sleep_midpoint_hour.header,
		N.valid_wear_minutes.header
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
const Wi = "missing_reasons.csv";
function ji(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(r).join(","))].map((e) => e + "\n").join("");
}
function Gi(e, t) {
	const n = [
		N.filename.header,
		N.ggir_filename.header,
		"ggir_filename",
		N.participant_id.header,
		N.ggir_id.header,
		N.study_date.header,
		"Analysis Date",
		N.ggir_calendar_date.header,
		"ggir_calendar_date",
		N.interval_kind.header,
		N.marker_type.header,
		N.interval_start_local.header,
		N.epoch_local.header,
		"Method"
	].flatMap((t) => {
		const n = e.get(t);
		return n ? [t + "=" + n] : [];
	});
	return n.length ? n.join("|") : "row=" + String(t);
}
function Hi(e, t) {
	let n = !1, i = 0;
	for (let a = 0; a < e.length; a += 1) if ("\"" === e[a]) n && "\"" === e[a + 1] ? a += 1 : n = !n;
	else if ("," === e[a] && !n && ++i === t) return e.slice(0, a);
	return e;
}
function* zi(e, t, n = !0, i) {
	const { headerlessColumns: a, fullRowCsv: r, rowOffset: s = 0, contextRows: o } = i ?? {}, c = a?.length ? a.join(",") + "\n" + e : e, d = u(c);
	if (d.unterminatedQuotedField) throw new Error(t + ": unterminated CSV cell");
	const [m, ...p] = d.records;
	if (!m) return {
		csv: e,
		withReason: 0,
		withoutReason: 0
	};
	const g = l(m.text), h = g.findIndex((e) => e.endsWith("_missing_reason"));
	if (h >= 0 && g.slice(h).some((e) => !e.endsWith("_missing_reason"))) throw new Error(t + ": internal reason fields must trail data fields");
	const f = g.map((e, t) => ({
		header: e,
		index: t
	})).filter(({ header: e }) => "" !== e && !e.endsWith("_missing_reason")), _ = p.map((e) => l(e.text)), w = _.map((e) => new Map(g.map((t, n) => [t, e[n] ?? ""]))), y = r ? u(r).records : [], v = y[0] ? l(y[0].text) : [], M = r ? y.slice(1).map((e) => l(e.text)) : [];
	if (r && f.length > 0 && M.length !== _.length) throw new Error(t + ": complete-row evidence count differs");
	const b = r ? M.map((e) => new Map(v.map((t, n) => [t, e[n] ?? ""]))) : w;
	let S = 0, k = 0;
	for (let l = 0; l < _.length; l += 1) {
		const e = _[l], n = w[l];
		for (const { header: i, index: a } of f) {
			if ("edit_recompute_requires_ms2_ms3" === b[l].get(i + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
				yield {
					file: t,
					row: s + l + 1,
					key: Gi(n, s + l + 1),
					column: i,
					reason: Ii
				}, S += 1;
				continue;
			}
			const r = e[a] ?? "";
			if (!Pi(r) || "" !== r.trim() && Bi.has(i)) continue;
			const u = Fi(t, i, b[l], o?.() ?? b);
			u ? (S += 1, yield {
				file: t,
				row: s + l + 1,
				key: Gi(n, s + l + 1),
				column: i,
				reason: u
			}) : (k += 1, console.warn("WARNING: unreasoned missing export cell"));
		}
	}
	if (n && k > 0) throw new xi(t + ": " + String(k) + " unreasoned missing metric cells");
	return h < 0 ? {
		csv: e,
		withReason: S,
		withoutReason: k
	} : {
		csv: [Hi(m.text, h), ...p.map((e) => Hi(e.text, h))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: S,
		withoutReason: k
	};
}
const Ui = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], Vi = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : r(String(e));
function qi(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return s(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? s(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function Ki(e, t) {
	const n = new Map(Mn(e).map((e) => [e.night, e.nightDate]));
	return (e, i, a = !0) => {
		const r = e.columns.indexOf("nights" === t ? N.ggir_night.header : "night_number"), s = Number(e.values[r]?.[i]), o = n.get(s);
		if (a && o) return o;
		const l = e.values[e.columns.indexOf(N.ggir_calendar_date.header)]?.[i];
		return qi(l);
	};
}
async function Yi(e, t, n) {
	const i = "nights" === t ? N.ggir_night.header : "window_number", a = z(n), s = await Promise.all(e.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await In(e.imported, e.edits, t.night, n)])))), o = (await Promise.all(e.map(async (e, n) => {
		const i = e.current ?? e.imported, r = (e) => "nights" === t ? e.nights : e.days, o = "nights" === t ? i.nightRecomputed : i.dayRecomputed, l = "nights" === t ? e.imported.nightChecks : e.imported.dayChecks, u = s[n].filter((e) => null != e[1]), c = Ki(e.imported, t), d = new Set(e.edits.map((e) => e.night)), m = e.edits.length > 0 && (!e.ms2 || !e.ms3) && !e.current, p = /* @__PURE__ */ new Set();
		if ("days" === t && m) {
			const t = await Promise.all(Mn(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
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
	for (const r of o) for (const e of r.table.columns) e.endsWith("_missing_reason") || l.includes(e) || l.push(e);
	const u = new Set("nights" === t ? I.ggir_review_night_extension.map((e) => N[e].header) : []), c = l.filter((e) => u.has(e) || o.some((e) => e.editRecomputeUnavailable || "ggir_corrected" === e.source)), d = [[
		...l.map(r),
		...Ui,
		...c.map((e) => r(e + "_missing_reason")),
		...Ui.map((e) => e + "_missing_reason")
	].join(",")], m = (e, t) => {
		const n = e.columns.indexOf(i);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: p, ggir: g, recomputed: h, provenance: f, checks: _, scoredDates: w, invalidDates: y, dateOf: v, editRecomputeUnavailable: M, editedNights: b, editedDayRows: S, savedNights: k, source: x } of o) {
		const e = k.columns.filter((e) => !$i.has(e)), n = e.filter((e) => {
			const t = k.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return k.values[t].some((e, t) => {
				const i = Number(k.values[k.columns.indexOf(N.ggir_night.header)]?.[t]), a = n.has(i) && !Object.is(n.get(i), e);
				return n.set(i, e), a;
			});
		}), i = /* @__PURE__ */ new Set(), a = (e) => Array.from({ length: g.rows }, (e, t) => t).find((t) => !i.has(t) && m(g, t) === m(p, e) && n.every((n) => Object.is(g.values[g.columns.indexOf(n)]?.[t] ?? null, p.values[p.columns.indexOf(n)]?.[e] ?? null))), s = new Set(l.filter((n) => "nights" === t ? $i.has(n) : !Ci.has(n) && !e.includes(n))), o = (n, i, a, o) => {
			const d = _.get(m(n, i));
			return [
				...l.map((r) => {
					if ("invalid" === a && ("nights" === t ? $i.has(r) : /sleep|spt|waso|wake|onset|guider/i.test(r) && !e.includes(r))) return "";
					const s = n.columns.indexOf(r);
					return s < 0 ? "" : Vi(n.values[s]?.[i]);
				}),
				a,
				d?.status ?? "",
				r((d?.reasons ?? []).join(";")),
				r((d?.diffs ?? []).map((e) => e.column).join(";")),
				r(o),
				...c.map((e) => "invalid" !== a || u.has(e) && e !== N.ggir_nonwear_perc_spt.header ? M && a === x && s.has(e) && ("days" === t ? S.has(i) : b.has(m(n, i))) ? Ii : u.has(e) ? null != gn(n, e, i) ? "" : Vi(pn(n, e + "_missing_reason", i) ?? "source_reported_missing") : a === x ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
				"",
				d ? "" : "not_computed_for_export",
				d?.reasons.length ? "" : "not_applicable_to_row",
				d?.diffs.length ? "" : "not_applicable_to_row",
				o ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let t = 0; t < p.rows; t += 1) {
			const e = v(p, t);
			if (w && (!e || !w.has(e))) continue;
			const n = a(t);
			if (null != n && i.add(n), e && y?.has(e)) {
				null != n && d.push(o(g, n, x, "")), d.push(o(p, t, "invalid", ""));
				continue;
			}
			if (!h[t]) {
				d.push(o(p, t, x, ""));
				continue;
			}
			const r = m(p, t);
			null != n && d.push(o(g, n, x, "")), d.push(o(p, t, "recomputed", f(r)));
		}
		for (let t = 0; t < g.rows; t += 1) {
			if (i.has(t)) continue;
			const e = v(g, t);
			(!w || e && w.has(e)) && (d.push(o(g, t, x, "")), e && y?.has(e) && d.push(o(g, t, "invalid", "")));
		}
	}
	return d.length > 1 ? `${d.join("\n")}\n` : null;
}
const Ji = I.ggir_part4_nightsummary_csv, Zi = Ji.map((e) => N[e].header), Xi = [
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
], Qi = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function ea(e, t) {
	const n = N[e], i = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof i ? r(i) : Mi(i, { integral: n.ggirIntegral ?? !1 });
}
function ta(e, t = "legacy-recording", n, a) {
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
	}) : z(a).validStateFraction(o).then(async (e) => {
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
			})), [r, s] = Wn(n.map((e) => e.timestamps)), [o, l] = Wn(n.map((e) => e.states));
			return z(t).sleepRegularityIndex(i([
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
async function na(e, t, n, i = {}) {
	const { signal: a } = i, r = e.participantId ?? e.filename, s = Ne(n.values(), i.algorithm), o = [];
	for (const [m, y] of n) {
		if (!ma(m, i.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = $n(y, s);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await ta(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, a), { sri: u, fractionValid: c } = l, d = "stale" === s.status ? "scores_from_another_config" : null, p = d ?? l.sriMissingReason, g = d ?? l.fractionValidMissingReason, h = [];
	for (const y of [...t.keys()].sort()) {
		const e = t.get(y);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === m.MAIN_SLEEP && null != t.onsetTimestamp && h.push({
			date: y,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const f = [[
		...Zi,
		...Xi.map((e) => `${N[e].header}_missing_reason`),
		...Qi.map((e) => `${N[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: m, onsetTs: y, wakeupTs: v } of h) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == v ? "not_applicable_to_row" : d ?? "no_scored_epochs"
		};
		if (null != v) {
			const { timestamps: i, algorithmResults: r } = await Yn(n, m, s, a);
			if (r && i.length > 0) {
				t.missingReason = null;
				const n = await Nn(r, i, y, v, e.epochLengthSeconds || 60, null, a);
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
	const w = await z(a).ggirManualNightClocks(h.map((e) => e.date), Float64Array.from(h, (e) => e.onsetTs), Float64Array.from(h, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let m = 0; m < h.length; m++) {
		const { onsetTs: t, wakeupTs: n } = h[m], i = w[m], { tstH: a, nAwak: s, latency: o, efficiency: l } = _[m], d = {
			ggir_id: r,
			ggir_night: m + 1,
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
		f.push([
			...Ji.map((e) => ea(e, d[e])),
			...Xi.map((e) => {
				const t = Ji.indexOf(e);
				return t >= 0 && null == d[Ji[t]] ? "not_computed_for_export" : "";
			}),
			...Qi.map((e) => {
				const t = Ji.indexOf(e);
				return t >= 0 && null == d[Ji[t]] ? _[m].missingReason ?? "" : "";
			}),
			p ?? "",
			g ?? ""
		].join(","));
	}
	return f.join("\n") + "\n";
}
function ia(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const aa = "actogram_report.html";
function ra(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function sa(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function oa(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: i } = ra(n), a = [e, i].filter(Boolean);
		t.set(n, 0 === a.length ? "part4_nightsummary.csv" : `part4_nightsummary_${a.join("_")}.csv`);
	}
	return t;
}
function la(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : Z(e);
}
function ua(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function ca(e, t) {
	const n = [...e.keys()], i = n.reduce((t, n) => t + (e.get(n)?.algos.length ?? 0), 0), a = [];
	return a.push(`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${ia(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${ia(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${i} chart${1 !== i ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${ia(e.get(t)?.pid ?? t)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`), n.forEach((n, i) => {
		const r = e.get(n);
		a.push(`<section class="pid-sec${0 === i ? " initial" : ""}" id="sec-${i}">`), a.push(`  <h2 class="pid-lbl">${ia(r.pid)}</h2>`), r.algos.forEach(([e, s], o) => {
			const { algoKey: l, ruleKey: u } = ra(e), c = ua([l, u].filter(Boolean).join("_"), "unscoped"), d = `activity-${ua(n, "recording")}-${c}-${t}.svg`, m = function(e) {
				if (0 === e.timestamps.length) return Si("expected at least one epoch");
				if (e.timestamps.length !== e.activity.length) return Si("timestamp and activity lengths must match");
				let t = Number.NEGATIVE_INFINITY, n = 0, i = 0;
				const a = e.timestamps.map((a, r) => {
					const s = e.activity[r];
					return !Number.isFinite(a) || a <= t ? Si("timestamps must be finite and strictly ascending") : (t = a, null != s && Number.isFinite(s) ? (n = Math.min(n, s), i = Math.max(i, s), {
						timestamp: a,
						value: s
					}) : {
						timestamp: a,
						value: null
					});
				}), r = a[0].timestamp, s = a[a.length - 1].timestamp, o = s > r ? s : r + 1;
				if (!Number.isFinite(o) || o <= r) return Si("single-epoch viewport must have a representable right edge");
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
				return hi({
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
				const t = hi(e), n = wi(t.size.width), i = wi(t.size.height), a = wi(t.plotArea.width), r = wi(t.plotArea.height), s = vi(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
					let i = "", a = !1;
					for (const r of e.points) {
						if (null == r.value) {
							a = !1;
							continue;
						}
						const t = fi(r.timestamp, n.viewport, {
							left: 0,
							width: n.plotArea.width
						}), s = _i(r.value, e.valueDomain, n.plotArea.height);
						i += `${a ? "L" : "M"}${wi(t)} ${wi(s)}`, a = !0;
					}
					return 0 === i.length ? "" : `<path data-series-index="${t}" d="${i}" fill="none" stroke="${ei[e.tone]}" stroke-width="${wi(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
				}(e, n, t)).join(""), l = vi(t, "over-series");
				return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${i}" viewBox="0 0 ${n} ${i}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${i}" fill="#ffffff"/><svg x="${wi(t.plotArea.left)}" y="${wi(t.plotArea.top)}" width="${a}" height="${r}" viewBox="0 0 ${a} ${r}" overflow="hidden"><rect x="0" y="0" width="${a}" height="${r}" fill="#ffffff"/>${s}${o}${l}${function(e) {
					const t = e.selection;
					if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
					const n = yi(fi(t.startTimestamp, e.viewport, {
						left: 0,
						width: e.plotArea.width
					}), 0, e.plotArea.width), i = yi(fi(t.endTimestamp, e.viewport, {
						left: 0,
						width: e.plotArea.width
					}), 0, e.plotArea.width);
					return `<rect data-activity-plot-selection="true" x="${wi(n)}" y="0" width="${wi(Math.max(1, i - n))}" height="${wi(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
				}(t)}${function(e) {
					const t = e.cursorTimestamp;
					if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
					const n = fi(t, e.viewport, {
						left: 0,
						width: e.plotArea.width
					});
					return `<line data-activity-plot-cursor="true" x1="${wi(n)}" y1="0" x2="${wi(n)}" y2="${wi(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
				}(t)}</svg><rect x="${wi(t.plotArea.left)}" y="${wi(t.plotArea.top)}" width="${a}" height="${r}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
			}(m);
			a.push(`  <div class="algo-block" data-algorithm-key="${ia(e)}">`), a.push(`    <div class="algo-lbl">${ia(function(e) {
				const { algoKey: t, ruleKey: n } = ra(e), i = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
				return t || n ? n ? `${i(t)} / ${i(n)}` : i(t) : "Legacy / Unscoped";
			}(e))}</div>`), s.stale && a.push(`    <div class="algo-stale" role="status">${ia(s.stale)}</div>`), a.push(`    <div class="cwrap" id="c${i}_${o}">`), a.push(`      <div class="plot-svg">${p}</div>`), a.push(`      <button type="button" class="svg-btn" data-download-name="${ia(d)}">Download SVG</button>`), a.push(`      <div class="scene-meta">${ia(la(m.viewport.min))} → ${ia(la(m.viewport.max))} · activity domain ${Mi(m.valueDomain.min)}–${Mi(m.valueDomain.max)}</div>`), a.push("    </div>"), a.push("  </div>");
		}), a.push("</section>");
	}), a.push("<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>"), a.push("</body>\n</html>"), a.join("\n");
}
function da(e) {
	return new TextEncoder().encode(e);
}
function ma(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function pa(e, t, n, i) {
	const a = [], r = [];
	for (const [s, o] of e) if (s) for (let e = 0; e < Math.min(s.length, o.length); e++) a.push(o[e]), r.push(s[e]);
	return await z(i).spanFiniteMean(Float64Array.from(a), Float64Array.from(r), t, n) ?? null;
}
function ga(e) {
	return "string" == typeof e ? e : null;
}
function ha(e) {
	return "number" == typeof e ? e : null;
}
function fa(e, t) {
	const n = function(e, t) {
		switch (e.formatter) {
			case "verbatim_string": return function(e) {
				return e ? r(e) : "";
			}(ga(t));
			case "display_label": {
				const n = ga(t);
				return n ? function(e) {
					return e ? r(e) : "";
				}(e.labelEnum ? S(e.labelEnum, n) : n) : "";
			}
			case "core_printed_text":
			case "date_iso": return function(e) {
				return e ?? "";
			}(ga(t));
			case "integer": return function(e) {
				return null == e ? "" : String(Math.trunc(e));
			}(ha(t));
			case "fixed2": return function(e) {
				return null == e ? "" : e.toFixed(2);
			}(ha(t));
			case "python_scalar_str": return function(e) {
				return null == e ? "" : String(e);
			}("boolean" == typeof t ? null : t);
			case "python_float_repr": return function(e) {
				if (null == e) return "";
				if (!Number.isFinite(e)) return String(e);
				const t = String(e);
				return t.includes(".") || t.includes("e") ? t : `${t}.0`;
			}(ha(t));
			case "python_bool": return function(e) {
				return null == e ? "" : e ? "True" : "False";
			}("boolean" == typeof t ? t : null);
			case "clock_hhmm": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${bi(t.getUTCHours())}:${bi(t.getUTCMinutes())}`;
			}(ha(t));
			case "datetime_seconds": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${String(t.getUTCFullYear())}-${bi(t.getUTCMonth() + 1)}-${bi(t.getUTCDate())} ${bi(t.getUTCHours())}:${bi(t.getUTCMinutes())}:${bi(t.getUTCSeconds())}`;
			}(ha(t));
			case "ggir_value": return Mi(t, { integral: e.ggirIntegral ?? !1 });
		}
	}(e, t);
	return "" === n ? k[e.sentinel] : n;
}
function _a(e, t) {
	if (!t) return "";
	const { labelEnum: n } = N[e];
	return n ? S(n, t) : t;
}
const wa = A.invalid_night_row?.markerTypeCell ?? "", ya = A.nonwear_row?.markerTypeCell ?? "";
function va(e) {
	return I[e].filter((e) => "server" !== N[e].plane);
}
function Ma(e) {
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
function ba(e) {
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
const Sa = [
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
async function ka(e, t, n, i, a, r, s) {
	try {
		return {
			metrics: t ? await En(e, t, n, i, a, r, s) : await Nn(e, n, i, a, r, null, s),
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
async function xa(e, t, n, i, a, r, s) {
	const o = a && a.trim().length > 0 ? a.trim() : null, l = Es(r, Ss.sleep), u = l.files, c = Dn(l.studySettings[0]?.extraSettings), d = (e.length > 0 ? u.filter((t) => null != t.id && e.includes(t.id)) : [...u]).sort((e, t) => e.filename.localeCompare(t.filename)), [p, g] = n ?? ["", ""], h = [], f = [], _ = [], w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), v = async () => {
		for (const [e, t] of w) y.set(e, await Ia(e, t, h, s));
		w.clear();
	}, M = /* @__PURE__ */ new Map(), b = (e) => {
		const t = JSON.stringify(e);
		let n = M.get(t);
		return n || (n = z(s).exportNapAggregate(e), M.set(t, n)), n;
	}, S = await Promise.all(d.map((e) => Ds(r, e.id, t, s)));
	for (const [x, I] of d.entries()) {
		if (s?.throwIfAborted(), x > 0 && d[x - 1].filename !== I.filename && await v(), !I.id) continue;
		const e = Bs(l, I.id), { bundle: t, markersByAlgo: a } = S[x], r = t?.edits ?? [], u = t ? Mn(t.imported) : [], { zone: y } = await Fn(I, c, s), M = [.../* @__PURE__ */ new Set([...I.availableDates, ...u.map((e) => e.nightDate)])].sort(), k = n ? M.filter((e) => e >= p && e <= g) : M, A = $e(e.values());
		for (const n of k) {
			s?.throwIfAborted();
			const l = a.get(n);
			if (l && 0 !== l.length) for (const a of l) {
				if (!a.isInvalidNight && 0 === a.sleepMarkers.length && 0 === a.nonwearMarkers.length) continue;
				const l = I.participantId ?? null, c = I.id, d = a.algorithm ?? null, p = a.username ?? null, g = a.needsConsensus, v = a.notes, M = e.get(n), S = await T(n, void 0, z(s)), k = e.get(S), x = {
					fileId: c,
					filename: I.filename,
					participantId: l,
					studyDate: n,
					algorithm: d,
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
					...Ma(a.sleepPeriodDetectionConfig),
					algorithmVersion: a.algorithmVersion ?? null,
					verificationStatus: null,
					studyId: o,
					dstTransition: await Fe(y, n, void 0, z(s))
				}, R = await b(a.sleepMarkers.filter((e) => e.markerType === m.NAP).map((e) => ({
					start: e.onsetTimestamp,
					end: e.offsetTimestamp
				}))), E = i?.get(`${String(c)}|${n}`), $ = {
					l5Hour: E?.l5Hour ?? null,
					m10Hour: E?.m10Hour ?? null,
					napCount: R.napCount,
					totalNapMinutes: R.napCount > 0 ? R.totalNapMinutes : null
				}, C = a.nonwearMarkers.map((e) => ({
					start: e.startTimestamp,
					end: e.endTimestamp
				})), O = A(d), D = $n(M, O), L = `${I.filename}\0${l ?? ""}\0${x.algorithm ?? ""}\0${x.detectionRule ?? ""}`, B = w.get(L) ?? [];
				B.push({
					date: n,
					epochLengthSeconds: I.epochLengthSeconds || 60,
					timestamps: D.timestamps,
					states: D.algorithmResults,
					stale: "stale" === O.status
				}), w.set(L, B);
				const P = M?.temperature ? new Float64Array(M.temperature) : null, F = Pe(M).timestamps, W = k?.temperature ? new Float64Array(k.temperature) : null, j = Pe(k).timestamps, G = await Yn(e, n, O, s), H = async (e, t, n) => {
					if (!t || !n) return null;
					const i = (e) => e ? new Float64Array(e) : null;
					return pa([[i(M?.[e]), F], [i(k?.[e]), j]], t, n, s);
				}, U = (e, t) => pa([[P, F], [W, j]], e, t, s), q = async (e, i) => {
					let o = null;
					const l = u.find((e) => e.nightDate === n), c = t && l && e.markerType === m.MAIN_SLEEP && "invalid" !== V(l, a).kind, d = l && r.some((e) => e.night === l.night), p = ba(null), g = {};
					let h = "not_applicable_to_row";
					if (!c && e.onsetTimestamp && e.offsetTimestamp) {
						const { timestamps: t, algorithmResults: n, activity: i, scoresStale: a } = G;
						if (null !== a && 0 === _.length && _.push({
							component: "metric_computation",
							code: "unavailable",
							message: a
						}), h = null !== a ? "scores_from_another_config" : null == n ? "no_scored_epochs" : null == i ? "channel_unavailable" : 0 === t.length ? "no_valid_epochs" : void 0, null != n && t.length > 0 && (null != i || Pe(M).ggir)) {
							const a = Pe(M).ggir ? Pe(M).epochSec : I.epochLengthSeconds || 60, r = await ka(n, i, t, e.onsetTimestamp, e.offsetTimestamp, a, s);
							o = r.metrics, o || r.error || (h = "no_valid_epochs"), r.error && (h = "not_computed_for_export"), r.error && 0 === _.length && _.push({
								component: "metric_computation",
								code: "unavailable",
								message: "Metric computation failed for at least one selected period; those rows carry no numerics."
							});
						}
					}
					if (c) {
						h = "channel_unavailable";
						const e = d ? t.current?.nights : t.imported.nights, n = e ? hn(e, N.ggir_night.header, l.night) : -1;
						for (const [t, i, a, r] of Sa) {
							const s = e ? gn(e, N[i].header, n) : null;
							p[t] = null == s ? null : s * r, g[a] = null == s ? d ? "not_computed_for_export" : "source_reported_missing" : void 0;
						}
					}
					(c || o && !("averageAwakeningLengthMinutes" in o)) && (g.average_awakening_length_minutes = "not_computed_for_export");
					const f = await z(s).exportPeriodFigures(e.onsetTimestamp, e.offsetTimestamp, C), w = Boolean(e.onsetTimestamp && e.offsetTimestamp), y = {
						...x,
						...$,
						periodIndex: e.markerIndex,
						markerType: e.markerType,
						onsetTimestamp: e.onsetTimestamp,
						offsetTimestamp: e.offsetTimestamp,
						...c ? p : ba(o),
						metricMissingReason: h,
						isInvalidNight: i,
						meanTemperature: e.onsetTimestamp && e.offsetTimestamp ? await U(e.onsetTimestamp, e.offsetTimestamp) : null,
						meanWhiteLight: await H("lux", e.onsetTimestamp, e.offsetTimestamp),
						meanRedLight: await H("redLight", e.onsetTimestamp, e.offsetTimestamp),
						meanGreenLight: await H("greenLight", e.onsetTimestamp, e.offsetTimestamp),
						meanBlueLight: await H("blueLight", e.onsetTimestamp, e.offsetTimestamp),
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
						markerType: wa,
						onsetTimestamp: null,
						offsetTimestamp: null,
						...ba(null),
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
					markerType: ya,
					onsetTimestamp: e.startTimestamp,
					offsetTimestamp: e.endTimestamp,
					...ba(null),
					isInvalidNight: !1,
					sleepMidpointTimestamp: null,
					sleepMidpointHour: null,
					validWearMinutes: null
				});
			}
		}
	}
	await v(), h.sort(Aa), f.sort(Aa);
	const k = await async function(e, t) {
		const n = e.filter((e) => e.markerType === m.MAIN_SLEEP), i = /* @__PURE__ */ new Map();
		for (const o of n) {
			const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = i.get(e);
			t ? t.push(o) : i.set(e, [o]);
		}
		const a = [...i], r = await z(t).summarizeExportGroups(a.map(([, e]) => e.map((e) => ({
			study_date: e.studyDate,
			total_nap_minutes: e.totalNapMinutes,
			values: Ra.map(([, t]) => e[t])
		})))), s = a.map(([e, t], n) => {
			const [i, a, s, o] = e.split("\0"), l = r[n], u = Object.fromEntries(Ra.map(([e], t) => [e, l.means[t] ?? null]));
			return {
				filename: i,
				participantId: a,
				algorithm: s,
				detectionRule: o,
				nNights: l.nNights,
				...u,
				meanTemperatureMissingReason: null == u.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
				metricMissingReasons: Object.fromEntries(Ra.map(([e, n]) => {
					const i = Ta[e], a = Sa.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : i), r = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[a] ?? e.metricMissingReason).find(Boolean);
					return [i, null == u[e] ? r : void 0];
				})),
				sleepRegularityIndex: null,
				meanTotalNapMinutes: l.meanTotalNapMinutes,
				studyId: t[0]?.studyId ?? null
			};
		});
		return s.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), s;
	}(h, s);
	for (const m of k) {
		const e = `${m.filename}\0${m.participantId}\0${m.algorithm}\0${m.detectionRule}`, t = y.get(e);
		m.sleepRegularityIndex = t?.sri ?? null, m.sleepRegularityMissingReason = t?.sriMissingReason ?? (t ? void 0 : "not_computed_for_export");
	}
	return {
		sleepRows: h,
		nonwearRows: f,
		summaryRows: k,
		degradations: _
	};
}
async function Ia(e, t, n, i) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const a = new Set(n.filter((t) => t.markerType === m.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return a.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : ta(t.filter((e) => a.has(e.date)), e, t[0]?.epochLengthSeconds, i);
}
function Aa(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const Ra = [
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
], Ta = {
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
}, Na = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => _a("algorithm", e.algorithm),
	summary_detection_rule: (e) => _a("detection_rule", e.detectionRule),
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
}, Ea = b;
function $a(e) {
	return j(e);
}
function Ca(e) {
	return JSON.stringify(e, null, 2);
}
const Oa = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function Da(e = Ea, t = !1) {
	return Ha("codebook_csv", e, Oa, void 0, t);
}
const La = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], Ba = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function Pa(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== m.MAIN_SLEEP) continue;
		const e = La.map((e) => ja(e, n)).join("\0"), i = t.get(e);
		i ? i.push(n) : t.set(e, [n]);
	}
	return t;
}
function* Fa(e, t = !1) {
	const n = Pa(e);
	let i = 0;
	const a = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > i && (i = t.length), t;
	}), r = La.map((e) => N[e].header);
	for (let o = 1; o <= i; o++) for (const [e] of Ba) r.push(`night${String(o)}_${e}`);
	const s = r;
	yield t ? [...r, ...s.map((e) => e + "_missing_reason")].join(",") : r.join(",");
	for (const o of a) {
		const e = o[0], n = La.map((t) => ja(t, e)), a = La.map((t) => Wa[t]?.(e) ? "" : Ga[t] ?? "");
		for (let t = 0; t < i; t++) {
			const e = o[t];
			for (const [t, i] of Ba) {
				const r = e ? ja(i, e) : "";
				n.push(r), a.push(r ? "" : e ? "date" === t ? "" : e.derivedMissingReasons?.[i] ?? e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? a : []].join(",");
	}
}
const Wa = {
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
function ja(e, t) {
	return fa(N[e], Wa[e]?.(t) ?? null);
}
const Ga = {
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
function Ha(e, t, n, i, a = !1) {
	const r = i && i.length > 0 ? new Set(i) : null, s = va(e).filter((e) => null == r || r.has(N[e].header)), o = a ? s.filter((e) => Ga[e]) : [], l = [[...s.map((e) => N[e].header), ...o.map((e) => N[e].header + "_missing_reason")].join(",")];
	for (const u of t) l.push([...s.map((e) => fa(N[e], n[e]?.(u) ?? null)), ...o.map((e) => {
		const t = n[e]?.(u);
		return null == t || "" === t ? Ga[e] ?? "" : "";
	})].join(","));
	return l.join("\n");
}
function za(e, t, n = !1) {
	const i = Ha("sleep_csv", e, Wa, t, n), a = t?.length ? new Set(t) : null, r = [
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
	].filter((t) => (!a || a.has(N[t].header)) && e.some((e) => r.includes(t) && null == Wa[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || s.includes(t) && e.metricMissingReason));
	return 0 === o.length ? i : u(i).records.map((t, n) => {
		if (0 === n) return t.text + "," + o.map((e) => `${N[e].header}_missing_reason`).join(",");
		const i = e[n - 1];
		return t.text + "," + o.map((e) => i.markerType === ya ? "manual_nonwear_period" : i.markerType === wa ? "invalid_night" : r.includes(e) ? null == Wa[e]?.(i) ? "source_reported_missing" : "" : i.sensorMissingReasons?.[e] ?? i.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? i.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (s.includes(e) ? i.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
va("sleep_csv").map((e) => N[e].header);
const Ua = x("event_marker_csv", "local"), Va = 86400, qa = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * Va * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), Ka = (e) => e < 10 ? `0${String(e)}` : String(e);
function Ya(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / Va), n = e - t * Va;
	return `${qa(t)} ${Ka(Math.floor(n / 3600))}:${Ka(Math.floor(n / 60) % 60)}:${Ka(n % 60)}`;
}
function Ja(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function Za(e, t, n, i, a) {
	const r = [], s = Es(n, Ss.event), o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		a?.throwIfAborted();
		const e = Ja(l, Bs(s, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await qn(e, z(a)), u = new Set(Cs(s, l.id, i).keys());
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
const Xa = A.invalid_night_row.markerTypeCell, Qa = x("actiware_interval_csv", "local"), er = (e, t) => Math.round(e) === Math.round(t);
function tr(e, t = !1) {
	const n = t ? ki.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], i = [[
		...Qa,
		...n.map(([, e]) => e + "_missing_reason"),
		...t ? [
			"Participant ID_missing_reason",
			"Origin_missing_reason",
			"Analysis_missing_reason"
		] : []
	].join(",")], a = (e) => Number.isFinite(e) ? Ya(Math.round(e)) : "";
	for (const { filename: s, participantId: o, studyDate: l, interval: u, statistics: c, invalidNight: d } of e) {
		const e = !0 === d && !Number.isFinite(u.startTimestamp), m = [
			s,
			o ?? "",
			l,
			d ? Xa : u.kind,
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
			...ki.map(([, e]) => c?.printed?.[e] ?? ""),
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
const nr = "local-export-streams";
var ir = class extends Error {
	file;
	step;
	constructor(e, t, n) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t;
	}
};
const ar = 65536, rr = "manifest.json", sr = "Duplicate export entry: ", or = "actiware_sleep_wake_export.csv", lr = x("actiware_sleep_wake_csv", "local");
async function ur(e, t, n, i) {
	if (0 === e.scores.byteLength) return [];
	const a = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, r = n ?? new Set(await i.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((a - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), a])));
	return (await Promise.all([...r].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await Un(t, void 0, void 0, i);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
async function cr(e, t, i, a = n()) {
	return t || i ? (await ur(e, t, i, a)).reduce((e, t) => e + t.end - t.start, 0) : e.scores.byteLength;
}
async function* dr(e, t, n, i, a) {
	a?.throwIfAborted();
	const r = Es(n, Ss.actiwareSleepWake), s = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => r.actiwareFileData.find((t) => t.fileId === e.id)), l = function(e, t = !1) {
		const n = [[
			...lr,
			"Sleep/Wake_missing_reason",
			"Wake Threshold_missing_reason",
			...t ? ["Participant ID_missing_reason"] : []
		].join(",")];
		for (const i of e) n.push(mr(i, i.epochTimestamp, i.sleepWake, t));
		return `${n.join("\n")}\n`;
	}([], !0);
	let u = [], c = 0, d = 0;
	const m = () => {
		a?.throwIfAborted();
		const e = function(...e) {
			const t = zi(...e), n = [];
			for (;;) {
				const e = t.next();
				if (e.done) return {
					...e.value,
					reasons: n
				};
				n.push(e.value);
			}
		}(l + u.join("\n") + "\n", or, !0, { rowOffset: c }), t = c ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
			bytes: new TextEncoder().encode(t),
			rows: u.length,
			reasonRows: e.reasons.length,
			reasons: new TextEncoder().encode(ji(e.reasons, !1))
		};
		return c += u.length, u = [], d = 0, n;
	};
	for (const [p, g] of s.entries()) {
		a?.throwIfAborted();
		const e = o[p]?.actiwareSleepWake;
		if (!e) continue;
		const n = o[p]?.actiwareWakeThreshold, s = null != n && Number.isFinite(n) ? n : null, l = new Int8Array(e.scores), c = await ur(e, t, new Set(Cs(r, g.id, i).keys()), z(a));
		a?.throwIfAborted();
		for (const { date: t, start: i, end: a } of c) {
			const n = {
				filename: g.filename,
				participantId: g.participantId ?? null,
				studyDate: t,
				sleepDetection: pe(e.params, "sleep_detection"),
				wakeThresholdSelection: pe(e.params, "wake_threshold_selection"),
				wakeThreshold: s,
				...null === s ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
			};
			for (let t = i; t < a; t += 1) {
				const i = l[t], a = mr(n, e.startTimestamp + t * e.epochSeconds, 0 === i || 1 === i ? i : null, !0);
				if (a.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
				u.push(a), d += a.length, (512 === u.length || d >= 32768) && (yield m());
			}
		}
	}
	u.length && (yield m()), a?.throwIfAborted();
}
function mr(e, t, n, i) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		Ya(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...i ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => r(e)).join(",");
}
const pr = ar;
function* gr(e) {
	const t = new TextDecoder();
	let n, i = "";
	for (let a = 0; a < e.byteLength; a += pr) {
		const r = a + pr >= e.byteLength;
		i += t.decode(e.subarray(a, a + pr), { stream: !r });
		const s = u(i, r);
		if (r && s.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const o = s.remainder ?? "";
		if (o.length > pr || s.records.some((e) => e.text.length > pr)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
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
const hr = "union_all";
function fr(e) {
	return e.nonwearDetector ?? "union_all";
}
const _r = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: hr
}, wr = {
	..._r,
	minimumWakeWearMinutes: fe.minWearMinutesPerDay
};
function yr(e) {
	return e ? {
		...wr,
		...e
	} : wr;
}
function vr(e, t) {
	const n = [];
	for (const i of e.values()) {
		for (const e of i.sleepMarkers) {
			const t = e.markerType === m.MAIN_SLEEP ? "main_sleep" : e.markerType === m.NAP ? "nap" : null;
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
function Mr(e, t, n, i) {
	const a = fr(t), r = "union_all" === a ? Object.entries(ae(e, n)) : [[a, re(e, a, n)], ..."detach_nonwear" === a ? [] : [["detach_nonwear", re(e, "detach_nonwear", n)]]], s = new Float64Array(e.timestamps);
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
function br(e) {
	return {
		excludeNonwear: e.excludeNonwear,
		excludeMainSleep: e.excludeMainSleep,
		excludeNaps: e.excludeNaps,
		useAlgorithmNonwear: e.useAlgorithmNonwear,
		useManualNonwear: e.useManualNonwear,
		minimumWakeWearMinutes: Number.isFinite(e.minimumWakeWearMinutes) ? Math.max(0, e.minimumWakeWearMinutes) : 0
	};
}
function Sr(e) {
	return {
		totalEpochs: e.totalEpochs,
		includedEpochs: e.includedEpochs,
		nonwearEpochs: e.nonwearEpochs,
		mainSleepEpochs: e.mainSleepEpochs,
		napEpochs: e.napEpochs,
		overlapEpochs: e.overlapEpochs
	};
}
function kr(e, t) {
	return z(t).summarizePhysicalActivityDays(e);
}
async function xr(e, t = n()) {
	const i = await t.weekendDates([...e]);
	return Array.from(i, (e) => 0 !== e);
}
const Ir = O.PRESCHOOL_FREE_LIVING_RF_3_5;
function Ar(e) {
	const t = e.algorithmResults[Ir];
	return null != t && new Uint8Array(t).length > 0;
}
function Rr(e) {
	const t = e.algorithmResults[Ir];
	if (!t) return null;
	const n = new Uint8Array(t);
	return n.length > 0 ? n : null;
}
function Tr(e) {
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
function Nr(e) {
	return e instanceof Map ? Nr([...e.entries()]) : Array.isArray(e) ? e.map(Nr) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, Nr(t)])) : e;
}
async function Er(e, t) {
	const { db: n, fileId: i, kind: a, inputs: r, signal: s } = e;
	s?.throwIfAborted();
	let o = n, l = null;
	if (o) try {
		const e = await o.activityDays.where("fileId").equals(i).primaryKeys();
		l = await W(JSON.stringify(Nr({
			version: 1,
			core: "e767e50ab8caa9890f4315b60183726bf43b6ae7",
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
function $r(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function Cr(e, t) {
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
function Or(e, t, n) {
	if (!n) return e.ruleLabel;
	const i = String(t.sedentaryMax), a = String(t.lightMin), r = String(t.moderateMin - 1), s = String(t.moderateMin), o = String(t.vigorousMin - 1), l = String(t.vigorousMin);
	return t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, non-sedentary >=${a} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, light ${a}-${r}, MVPA >=${s} counts/min` : `Custom cutpoints: Sed <=${i}, light ${a}-${r}, moderate ${s}-${o}, vigorous >=${l} counts/min`;
}
const Dr = [
	null,
	"sedentary",
	"light",
	"moderate",
	"vigorous"
];
async function Lr(e) {
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
	const l = await z(e.signal).cutpointToneCodes(Float64Array.from(o, (e) => e.countsPerMinute), $r(i));
	let u = 0;
	const c = [];
	return o.forEach((e, t) => {
		const n = Dr[l[t] ?? 0];
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
function Br(e, t) {
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
function Pr(e) {
	e.mvpaMinutesPerDay = e.totalDays > 0 ? e.mvpaMinutes / e.totalDays : 0, e.totalDays > 0 && (null != e.mvpaBouts && (e.mvpaBoutsPerDay = e.mvpaBouts / e.totalDays), null != e.sedentaryBreaks && (e.sedentaryBreaksPerDay = e.sedentaryBreaks / e.totalDays));
}
function Fr(e, t) {
	e.sedentaryMinutes += t.sedentaryMinutes, e.lightMinutes += t.lightMinutes, e.moderateMinutes += t.moderateMinutes, e.vigorousMinutes += t.vigorousMinutes, e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes;
}
function Wr(e, t, n, i) {
	if (0 === t.totalDays) return;
	e.totalDays += t.totalDays, Fr(e, t.intensity), e.defaultIntensityMinutes && t.defaultIntensity && Fr(e.defaultIntensityMinutes, t.defaultIntensity), null != t.mimsUnitTotal && (e.mimsUnitTotal = (e.mimsUnitTotal ?? 0) + t.mimsUnitTotal), e.totalEpochsReviewed = (e.totalEpochsReviewed ?? 0) + t.totalEpochs, e.includedEpochsReviewed = (e.includedEpochsReviewed ?? 0) + t.includedEpochs, e.wakeWearMinutes = (e.wakeWearMinutes ?? 0) + t.wakeWearMinutes, e.excludedNonwearMinutes = (e.excludedNonwearMinutes ?? 0) + t.excludedNonwearMinutes, e.excludedMainSleepMinutes = (e.excludedMainSleepMinutes ?? 0) + t.excludedMainSleepMinutes, e.excludedNapMinutes = (e.excludedNapMinutes ?? 0) + t.excludedNapMinutes, e.maskOverlapEpochs = (e.maskOverlapEpochs ?? 0) + t.overlapEpochs, e.maskPolicy = n;
	const a = t.bouts;
	a && (e.mvpaBouts = (e.mvpaBouts ?? 0) + a.mvpaBouts, e.mvpaBoutMinutes = (e.mvpaBoutMinutes ?? 0) + a.mvpaBoutMinutes, e.sedentaryBouts = (e.sedentaryBouts ?? 0) + a.sedentaryBouts, e.sedentaryBreaks = (e.sedentaryBreaks ?? 0) + a.sedentaryBreaks, i.total += a.meanSedentaryBoutMinutes * a.sedentaryBouts, e.meanSedentaryBoutMinutes = e.sedentaryBouts > 0 ? i.total / e.sedentaryBouts : 0);
}
async function jr(e) {
	const { file: t, days: n, summaries: i, markersByAnalysisDate: a, sensorNonwearPeriods: r, maskPolicy: s, validDayCriteria: o, cutpointMethods: l, choiAxis: u } = e, c = new Set([...a].filter(([, e]) => w(e)).map(([e]) => e)), d = Number.isFinite(t.epochLengthSeconds) && t.epochLengthSeconds > 0 ? t.epochLengthSeconds : 60, m = 60 / d, p = {
		policy: br(s),
		intervals: vr(a, r)
	}, g = n.map((e) => Mr(e, s, u, d)), h = n.map((e, t) => ({
		timestamps: new Float64Array(e.timestamps),
		epochSeconds: d,
		series: g[t]
	})), { dates: f, shortfall: _ } = await async function({ days: e, countDays: t, epochSeconds: n, request: i, criteria: a, scoredDates: r, signal: s }) {
		if (!a) return {
			dates: null,
			shortfall: null
		};
		if (e.some((e) => !r.has(e.date))) return {
			dates: null,
			shortfall: null
		};
		const o = await kr({
			...i,
			days: [...t]
		}, s), l = 86400 / n, u = await xr(e.map((e) => e.date), z(s)), c = e.map((e, t) => {
			const n = o.days[t].mask;
			return {
				date: e.date,
				wearMinutes: n.wakeWearMinutes,
				isWeekend: u[t],
				isPartialDay: n.totalEpochs < l
			};
		}), d = await async function(e, t = fe, n) {
			return z(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
		}(c, a, s);
		if (!d.meetsCriteria) {
			const e = a.requireWeekendDay && !d.hasWeekendValidDay ? ", including a weekend day" : "";
			return {
				dates: /* @__PURE__ */ new Set(),
				shortfall: `${String(d.validDays)} of the required ${String(a.minValidDaysPerParticipant)} valid days${e}`
			};
		}
		const m = await async function(e, t = fe, n) {
			const i = await z(n).validWearDays(Float64Array.from(e), t);
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
	}), y = i.filter((e) => !(s.minimumWakeWearMinutes > 0 && (null == e.validHours || 60 * e.validHours < s.minimumWakeWearMinutes))).filter((e) => null != e.sedentaryMinutes && null != e.lpaMinutes && null != e.mvpaMinutes).filter((e) => !f || f.has(e.analysisDate)).map((e) => ({
		sedentaryMinutes: e.sedentaryMinutes,
		lpaMinutes: e.lpaMinutes,
		mvpaMinutes: e.mvpaMinutes
	})), v = n.map((e) => !f || f.has(e.date)), M = [];
	for (let w = 0; w < l.length; w++) {
		e.signal?.throwIfAborted();
		const i = l[w];
		if (le(i.method, t.sourceProfileId)) {
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
		const r = await kr({
			...p,
			analysisKind: "count_cutpoint",
			thresholds: $r(i),
			defaultThresholds: $r(me[w]),
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
			const t = await kr({
				...p,
				includeEpochDetails: !0,
				days: [h[o.index]]
			}, e.signal), a = await Lr({
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
			const t = await _e(i.method, d, e.signal);
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
		const i = await kr({
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
		shortfall: _,
		ggirSummarySeen: i.length > 0,
		ggirRows: y,
		hasAnyActivity: v.some(Boolean),
		cutpoints: M,
		mims: await S(b((e) => e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output"), "mims_volume"),
		preschoolRf: await S(b(Rr, "classifier"), "preschool_classifier")
	};
}
async function Gr(e = {}) {
	const t = await Ae(e.dbOverride, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = e.username ?? "anonymous", i = e.maskPolicy ?? _r, a = e.validDayCriteria, r = se("ggir_enmo"), s = se("mims"), o = se("preschool_free_living_rf_3_5"), l = Br({
		method: r.method,
		label: r.label,
		requiredSignal: r.requiredSignal,
		sourceLabel: r.signalLabel,
		ruleLabel: "Uses imported GGIR daily sedentary, LPA, and MVPA summaries",
		unavailableAction: "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."
	}, null), u = z(e.signal), c = await Promise.all(me.map((t) => async function(e, t, n) {
		const i = t[e.method];
		if (!i) return e;
		const a = await we(i, n);
		if (!a) return e;
		const r = $r(e);
		return {
			...e,
			ruleLabel: Or(e, a, JSON.stringify(a) !== JSON.stringify(r)),
			cutpointBands: Cr(a, e.cutpointBands),
			cutpointScaleMax: Math.max(e.cutpointScaleMax ?? 1, ...Object.values(a).filter(Number.isFinite)),
			...a
		};
	}(t, e.cutpointOverrides ?? {}, u))), d = c.map((e, t) => function(e, t) {
		return {
			...Br(e, null),
			cutpointThresholds: $r(e),
			defaultCutpointThresholds: $r(t),
			cutpointEditable: !0,
			defaultIntensityMinutes: {
				sedentaryMinutes: 0,
				lightMinutes: 0,
				moderateMinutes: 0,
				vigorousMinutes: 0,
				mvpaMinutes: 0
			}
		};
	}(e, me[t])), m = new Array(c.length).fill(!1), p = [], g = Br({
		method: s.method,
		label: s.label,
		requiredSignal: s.requiredSignal,
		sourceLabel: s.signalLabel,
		ruleLabel: "Uses stored MIMS_UNIT epoch values from actours; intensity cutpoints/equating are not applied in this row.",
		unavailableAction: "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values.",
		unavailableStatus: "backend_required"
	}, null);
	g.mimsUnitTotal = 0, g.mimsUnitPerDay = 0;
	const h = Br({
		method: o.method,
		label: o.label,
		requiredSignal: o.requiredSignal,
		sourceLabel: o.signalLabel,
		ruleLabel: "Uses actimetric Preschool Wrist Random Forest Free Living Lag-Lead classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
		unavailableAction: "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.",
		unavailableStatus: "backend_required"
	}, null), f = se("hildebrand_enmo_wrist_2014"), _ = Br({
		method: f.method,
		label: f.label,
		requiredSignal: f.requiredSignal,
		sourceLabel: f.signalLabel,
		ruleLabel: "Hildebrand 2014 non-dominant wrist ENMO (mg) cut-points: MVPA >=201 mg, vigorous >=707 mg; light near ~45 mg. Applied to a calibrated ENMO (mg) epoch signal, never to ActiGraph counts.",
		unavailableAction: "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline; the browser count pipeline does not compute ENMO mg.",
		unavailableStatus: "needs_signal"
	}, null);
	let w = !1, y = !1, v = !1, M = !1;
	const b = te(), S = c.map(() => ({ total: 0 })), k = { total: 0 };
	for (const I of t) {
		if (e.signal?.throwIfAborted(), !I.id) continue;
		const t = I.id, r = await be(t, e.dbOverride), s = await Se(t, n, e.dbOverride), o = await ke(t, e.dbOverride), u = await Er({
			db: e.dbOverride ?? null,
			fileId: t,
			kind: "analysis",
			...e.signal ? { signal: e.signal } : {},
			inputs: {
				epochLengthSeconds: I.epochLengthSeconds,
				sourceProfileId: I.sourceProfileId ?? null,
				summaries: r,
				markers: Tr(s),
				sensorNonwearPeriods: o,
				maskPolicy: i,
				validDayCriteria: a ?? null,
				thresholds: c.map($r),
				choiAxis: b
			}
		}, async () => jr({
			file: I,
			days: [...(await De(t, e.dbOverride, e.activityDayMemo)).values()],
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
			e.signalSeen && (m[t] = !0), Wr(n, e.totals, i, S[t]), e.previewTrace && !n.previewTrace && (n.previewTrace = e.previewTrace), e.epochMismatch && !n.epochMismatch && (n.epochMismatch = e.epochMismatch);
		}), u.mims && (u.mims.signalSeen && (v = !0), Wr(g, u.mims.totals, i, k)), u.preschoolRf && (u.preschoolRf.signalSeen && (M = !0), Wr(h, u.preschoolRf.totals, i, k));
	}
	for (let I = 0; I < d.length; I++) {
		const e = d[I], t = c[I];
		e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes, 0 === e.totalDays && (e.available = !1, e.status = m[I] ? "ready" : "needs_signal", e.unavailableReason = m[I] ? p.length > 0 ? `Excluded by the valid-days-per-participant rule: ${p.join("; ")}. Change it in Study Settings → valid-day criteria.` : `No local ${e.sourceLabel.toLowerCase()} days meet the minimum wake-wear rule.` : w ? `No local ${e.sourceLabel.toLowerCase()} days are available.` : "No local activity epochs are available.", e.nextStepLabel = t.unavailableAction), Pr(e);
	}
	l.moderateMinutes = l.mvpaMinutes, Pr(l), 0 === l.totalDays && (l.available = !1, l.status = y ? "ready" : "needs_signal", l.unavailableReason = y ? "No local GGIR daily summaries meet the current inclusion rules." : "No local GGIR daily summaries are available. Import raw/5-second-capable files to populate ENMO summaries.", l.nextStepLabel = "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."), g.totalDays > 0 ? (g.available = !0, g.status = "ready", g.unavailableReason = null, g.nextStepLabel = null, g.mimsUnitPerDay = (g.mimsUnitTotal ?? 0) / g.totalDays) : (g.available = !1, g.status = v ? "ready" : "backend_required", g.unavailableReason = v ? "No stored MIMS_UNIT epoch days meet the current inclusion rules." : "No MIMS_UNIT epoch values are stored in this workspace yet. This becomes ready when the actours MIMS backend/WASM build computes and stores MIMS_UNIT epochs.", g.nextStepLabel = "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values."), Pr(_), _.available = !1, _.status = "needs_signal", _.unavailableReason = "No calibrated ENMO (mg) epoch stream is available in this workspace. ENMO (mg) is a raw/GGIR-derived signal; the browser count pipeline does not produce it, so this method cannot classify counts against Hildebrand mg thresholds.", _.nextStepLabel = "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline.", Pr(h), h.totalDays > 0 ? (h.available = !0, h.status = "ready", h.unavailableReason = null, h.nextStepLabel = null) : (h.available = !1, h.status = M ? "ready" : "backend_required", h.unavailableReason = M ? "No stored preschool wrist RF class days meet the current inclusion rules." : "No actimetric-compatible preschool wrist RF class epochs are stored in this workspace yet. This becomes ready when actours/WASM computes 15 s classes for 3-5 year-old wrist data.", h.nextStepLabel = "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.");
	const x = t.map((e) => e.sourceProfileId);
	return [
		l,
		h,
		...d,
		_,
		g
	].filter((e) => ye(e.method, x));
}
const Hr = [
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
function zr(e, t) {
	if (!t) return !0;
	const [n, i] = t;
	return e >= n && e <= i;
}
function Ur(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function Vr(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function qr(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
function Kr(e) {
	const t = de.find((t) => t.method === e);
	if (t) return {
		family: t.family,
		requiredSignal: t.requiredSignal,
		computationOwner: t.backendOwner ?? "browser_workspace",
		frontendComputesMetric: t.frontendComputesMetric,
		statusWhenMissing: t.statusWhenMissing
	};
	const n = se(e), i = "ready" === n.statusWhenMissing ? "needs_signal" : n.statusWhenMissing;
	return {
		family: n.family,
		requiredSignal: n.requiredSignal,
		computationOwner: n.backendDependency ?? "browser_workspace",
		frontendComputesMetric: "count_cutpoint" === n.family,
		statusWhenMissing: i
	};
}
function Yr(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function Jr(e, t, n) {
	return "default" === n ? e.ruleLabel : t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, non-sedentary >=${String(t.lightMin)} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, MVPA >=${String(t.moderateMin)} counts/min` : `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, moderate ${String(t.moderateMin)}-${String(t.vigorousMin - 1)}, vigorous >=${String(t.vigorousMin)} counts/min`;
}
function Zr(e) {
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
async function Xr(e, t, n = {}, i) {
	const a = await Ae(i), r = (e.length > 0 ? a.filter((t) => null != t.id && e.includes(t.id)) : a).sort((e, t) => e.filename.localeCompare(t.filename)), s = [], o = n.username ?? "anonymous", l = n.maskPolicy ?? _r, u = n.choiAxis ?? te(), c = fr(l), d = n.cutpointOverrides, m = n.cutpointPresetNames, p = z(n.signal), g = await Promise.all(me.map((e) => async function(e, t, n, i) {
		const a = t?.[e.method], r = a ? await we(a, i) : null;
		return r ? {
			thresholds: r,
			source: "custom",
			presetName: n?.[e.method] ?? ""
		} : {
			thresholds: Yr(e),
			source: "default",
			presetName: ""
		};
	}(e, d, m, p))), h = n.inclusionRulePresetName ?? "", f = n.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), _ = se("ggir_enmo"), w = se("mims"), y = se("preschool_free_living_rf_3_5"), v = Kr("ggir_enmo"), M = Kr("mims"), b = Kr("preschool_free_living_rf_3_5");
	for (const S of r) {
		if (n.signal?.throwIfAborted(), !S.id) continue;
		if (!0 === S.ggirSummariesNeedRecompute) throw new Error(`${S.filename}: its GGIR summaries were not recomputed for the current study settings. In Study settings, run Rescore (offered for every file whose summaries are refused) before exporting.`);
		const e = S.participantId ?? "", a = Number.isFinite(S.epochLengthSeconds) && S.epochLengthSeconds > 0 ? S.epochLengthSeconds : 60, r = await be(S.id, i);
		for (const n of r) zr(n.analysisDate, t) && s.push({
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
		const d = [...(await De(S.id, i, n.activityDayMemo)).entries()].filter(([e]) => zr(e, t)).sort(([e], [t]) => e.localeCompare(t)).map(([, e]) => e), m = await Se(S.id, o, i), p = await ke(S.id, i), k = {
			policy: br(l),
			intervals: vr(m, p)
		}, x = d.map((e) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: a,
			series: Mr(e, l, u, a)
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
			const r = await kr({
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
		} : null, R = [], T = me.map((e) => null !== le(e.method, S.sourceProfileId));
		for (const [t, n] of me.entries()) T[t] ? R.push([]) : R.push(await I((e, t) => {
			const i = new Float64Array("axisY" === n.axis ? e.axisY : e.vectorMagnitude);
			return i.length > 0 && i.length === x[t].timestamps.length ? {
				...x[t],
				values: i
			} : null;
		}, {
			analysisKind: "count_cutpoint",
			thresholds: g[t].thresholds
		}));
		const N = await I((e, t) => A(Rr(e), "classifier", e, t), { analysisKind: "preschool_classifier" }), E = await I((e, t) => A(e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output", e, t), { analysisKind: "mims_volume" }), $ = await Promise.all(me.map((e) => _e(e.method, a, n.signal)));
		for (const [t, n] of d.entries()) {
			const i = n.date;
			for (const [n, d] of me.entries()) {
				if (T[n]) continue;
				const r = g[n], u = Jr(d, r.thresholds, r.source), m = Kr(d.method), p = $[n], _ = Zr(R[n][t]);
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
			const r = Zr(N[t]);
			null === le("preschool_free_living_rf_3_5", S.sourceProfileId) && s.push({
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
			const u = Zr(E[t]);
			null === le("mims", S.sourceProfileId) && s.push({
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
Hr.join(","), me.length;
var Qr = e({
	editsFromMarkers: () => ls,
	getGgirMarkerInputs: () => us,
	ggirNightRecords: () => os,
	hasGgirRecomputeFailure: () => as,
	mergeGgirSleepMarkers: () => ss,
	recomputeGgirResults: () => ms,
	recoverPendingGgirRecomputes: () => ps,
	reviewGgirResultsForMarkers: () => gs,
	scheduleGgirRecompute: () => ds
});
const es = new EventTarget(), ts = /* @__PURE__ */ new WeakMap(), ns = 800, is = "Update GGIR review";
function as(e, t, n) {
	return $.getState().jobs[`${n.name}:${cs(e, t)}`]?.status === E.FAILED;
}
function rs(e, t, n, i, a) {
	if (a?.aborted || function(e) {
		return e instanceof Error && e.name === v.errnames.DatabaseClosed;
	}(i)) return;
	const r = cs(e, t), s = `${n.name}:${r}`, o = $.getState();
	o.jobs[s]?.controller.signal.aborted || o.jobs[s]?.status === E.ELSEWHERE || (o.update(s, {
		id: s,
		key: r,
		workspaceId: n.name,
		kind: C.GGIR_RECOMPUTE,
		label: is,
		controller: o.jobs[s]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: E.FAILED
	}), n.isOpen() && B() === n && es.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function ss(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function os(e, t, n, i = [], a) {
	const r = xe([...n.values()].flat(), !0), s = r?.algorithm ?? Sn(t), o = r?.detectionRule ?? null, l = /* @__PURE__ */ new Map();
	for (const [d, m] of n) {
		const e = xe(m, !0);
		e && l.set(d, [{
			...e,
			algorithm: s,
			detectionRule: o
		}]);
	}
	const u = Mn(t), c = u.length ? await z(a).ggirLabelsToStoredMs(Float64Array.from(u.flatMap((e) => [e.onsetMs, e.wakeMs])), i) : [];
	for (const [d, p] of u.entries()) {
		const t = l.get(p.nightDate)?.[0], n = V(p, t);
		"scored" !== n.kind && "invalid" !== n.kind ? l.set(p.nightDate, [{
			fileId: e,
			date: p.nightDate,
			username: J,
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
			sleepMarkers: ss({
				markerType: m.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: c[2 * d] / 1e3,
				offsetTimestamp: c[2 * d + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : l.set(p.nightDate, t ? [t] : []);
	}
	return l;
}
async function ls(e, t, n = [], i) {
	const a = Mn(e).flatMap((e) => {
		const n = V(e, t.get(e.nightDate));
		return "scored" === n.kind && null != n.main.onsetTimestamp && null != n.main.offsetTimestamp ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === a.length) return [];
	const r = z(i), s = await r.storedToGgirLabelsMs(Float64Array.from(a.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await r.wallClockLabels(Float64Array.from([...s, ...a.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * a.length;
	return a.flatMap(({ w: e }, t) => {
		const n = o[2 * t], i = o[2 * t + 1];
		return n !== o[l + 2 * t] || i !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: i
		}] : [];
	});
}
async function us(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [i, a] = await Promise.all([Te(e, t, n), Me(e, n)]), r = new Map([...i].flatMap(([e, t]) => {
			const n = xe(t, !0);
			return n ? [[e, n]] : [];
		})), s = a?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([s ?? [], [...r].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				V(void 0, t)
			])]),
			markers: r,
			clockSteps: s,
			bundleRevision: a?.ggirBundleRevision
		};
	});
}
function cs(e, t) {
	return `${C.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function ds(e, t, n, i) {
	if (!n.isOpen() || B() !== n || i?.aborted) return;
	let a = ts.get(n);
	a || (a = /* @__PURE__ */ new Map(), ts.set(n, a));
	const r = cs(e, t);
	clearTimeout(a.get(r)), a.set(r, setTimeout(() => {
		a.delete(r), n.files.get(e).then((a) => {
			if (a?.ggirBundleRevision && n.isOpen() && B() === n && !i?.aborted) return ms(e, t, n, i);
		}).catch((a) => {
			i?.aborted || a instanceof DOMException && "AbortError" === a.name || (rs(e, t, n, a, i), n.isOpen() && B() === n && (console.error("[ggir-results] recompute failed."), Ce("error", "GGIR results recompute failed", Oe(a))));
		});
	}, ns));
}
function ms(e, t, n, i) {
	const a = (r, s = i) => H({
		kind: C.GGIR_RECOMPUTE,
		key: cs(e, t),
		label: is,
		workspaceId: n.name,
		signal: s,
		rerun: !0,
		run: async (i) => {
			i.signal.throwIfAborted();
			const s = await async function(e, t, n, i) {
				if (i.throwIfAborted(), !n.isOpen() || B() !== n) return null;
				const { markerInputs: a, markers: r, clockSteps: s, bundleRevision: o } = await us(e, t, n);
				if (!o) return null;
				const l = await n.ggirScorerReviews.get([e, t]);
				if (!n.isOpen() || B() !== n) return null;
				if (i.throwIfAborted(), l?.markerInputs === a && l.bundleRevision === o) return es.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), l.current ?? null;
				const u = await n.ggirResultsBundles.get(e);
				if (!u) return null;
				const c = await ls(u.imported, r, s, i);
				if (!n.isOpen() || B() !== n) return null;
				const d = l?.bundleRevision === o && JSON.stringify(l.edits) === JSON.stringify(c) ? l.current : (await gs(u, r, s, c, i)).current;
				i.throwIfAborted();
				const m = (/* @__PURE__ */ new Date()).toISOString();
				if (!n.isOpen() || B() !== n) return null;
				const p = await U(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!n.isOpen() || B() !== n) return null;
					const r = await us(e, t, n);
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
				return p ? (es.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), i.throwIfAborted(), d ?? u.imported) : (i.throwIfAborted(), !1 !== p && null);
			}(e, t, n, i.signal);
			return i.signal.throwIfAborted(), !1 !== s ? s : (r < 2 && a(r + 1, i.signal).catch((a) => rs(e, t, n, a, i.signal)), null);
		}
	});
	return a(0);
}
function ps(e, t) {
	return H({
		kind: C.GGIR_RECOVERY,
		key: C.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const i = () => !t.signal.aborted && e.isOpen() && B() === e;
			try {
				if (!i()) return;
				const r = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: s } = await import("./local-data-source-DwAWATk8.js").then((e) => e.n);
				for (const o of r) {
					if (t.signal.throwIfAborted(), !i()) return;
					try {
						const [r] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), s(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), u = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...r.map((e) => e.scorer)]);
						u.delete(J);
						for (const s of u) {
							if (!i()) return;
							try {
								const { markerInputs: n, bundleRevision: a } = await us(o, s, e);
								if (!i()) return;
								const l = r.find((e) => e.scorer === s);
								if (a && l?.markerInputs === n && l.bundleRevision === a) {
									as(o, s, e) && ($.getState().update(`${e.name}:${cs(o, s)}`, { status: E.DONE }), es.dispatchEvent(new CustomEvent("updated", { detail: {
										fileId: o,
										scorer: s,
										db: e
									} })));
									continue;
								}
								await ms(o, s, e, t.signal);
							} catch (a) {
								n = !0, rs(o, s, e, a, t.signal);
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
				const a = Object.values($.getState().jobs).filter((t) => t.workspaceId === e.name && t.kind === C.GGIR_RECOMPUTE && t.status === E.FAILED);
				for (const t of a) {
					const a = t.key.slice(C.GGIR_RECOMPUTE.length + 1);
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
							i() && (0 === n || 0 === a && 0 === r) && ($.getState().update(t.id, { status: E.DONE }), es.dispatchEvent(new CustomEvent("updated", { detail: {
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
async function gs(e, t, n = [], i, a) {
	const r = i ?? await ls(e.imported, t, n, a);
	let s;
	if (a?.throwIfAborted(), r.length > 0 && e.ms2 && e.ms3) {
		const t = (e) => e ? new Uint8Array(e.slice(0)) : void 0, n = t(e.ms2), i = t(e.ms3), o = t(e.ms4), l = t(e.ms5), u = t(e.sleeplogRData);
		s = wn(await G(a, (t) => t.reviewGgirResults({
			part1: new Uint8Array(e.part1.slice(0)),
			configCsv: e.configCsv,
			recordingId: D(e.recordingFile),
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
const hs = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds"
], fs = [
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
], _s = [
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
], ws = [
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
], ys = {
	files: [
		...hs,
		"ggirTimezone",
		"recording",
		"ggirClockSteps"
	],
	markers: fs,
	activityDays: _s,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: ws
}, vs = {
	files: [...hs, "ggirClockSteps"],
	markers: fs,
	activityDays: _s,
	ggirResultsBundles: ws
}, Ms = {
	ggirResultsBundles: ["fileId", "ggirCorrections"],
	files: ["id"],
	localExecutions: ["fileId", "attestationId"],
	diaryEntries: [
		"fileId",
		"analysisDate",
		"importMappingProvenance"
	]
}, bs = {
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
}, Ss = {
	sleep: ys,
	nonwear: ys,
	summary: ys,
	wide: ys,
	circadian: {
		files: hs,
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
	ggirReport: vs,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: fs,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: hs,
		markers: fs,
		actiwareFileData: [
			"fileId",
			"actiwareIntervals",
			"actiwareStatistics",
			"actiwareStatisticsNeedsRecompute"
		],
		actiwareStatisticsInputs: ["fileId", "input"]
	},
	actiwareSleepWake: {
		files: hs,
		markers: fs,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: Ms,
	audit: bs,
	ggirResults: {
		...Ms,
		...ys,
		...vs,
		auditLog: bs.auditLog,
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
			L
		]
	}
}, ks = /* @__PURE__ */ new WeakMap(), xs = /* @__PURE__ */ new WeakMap();
function Is(e, t, n, i) {
	for (let a = 0; a < n.byteLength;) {
		const r = n.subarray(a, a + ar), s = e[t](r, { at: i + a });
		if (!Number.isInteger(s) || s <= 0 || s > r.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		a += s;
	}
}
function As(e) {
	if (!e || "object" != typeof e) return e;
	const t = xs.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return Is(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(As) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, As(t)])) : structuredClone(e);
}
function Rs(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(Rs), Object.freeze(e)), e;
}
var Ts = class extends Error {};
function Ns(e, t, n) {
	const i = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new Ts(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (i(t), Reflect.get(e, t, n)),
		has: (e, t) => (i(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (i(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function Es(e, t) {
	const n = ks.get(e);
	if (!n) throw new Ts("Export requires a captured input snapshot");
	const i = Object.entries(Ss).find(([, e]) => e === t)?.[0];
	if (!i) throw new Ts("Export producer has no registered input declaration");
	const a = {};
	for (const [r, s] of Object.entries(t)) {
		const e = n[r].map((e) => {
			const t = e, n = {};
			for (const i of s.filter((e) => e in t)) Object.defineProperty(n, i, {
				enumerable: !0,
				get: () => Rs(As(t[i]))
			});
			return Ns(n, s, `${i}: undeclared field ${r}.`);
		});
		Object.assign(a, { [r]: Object.freeze(e) });
	}
	return Ns(a, Object.keys(t), `${i}: undeclared table `);
}
function $s(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	for (const a of e.markers) {
		if (a.fileId !== t || a.username !== n) continue;
		const e = K(a), r = i.get(a.date) ?? [];
		r.push(e), i.set(a.date, r);
	}
	return i;
}
function Cs(e, t, n) {
	return new Map([...$s(e, t, n)].flatMap(([e, t]) => {
		const n = xe(t.filter(w));
		return n ? [[e, n]] : [];
	}));
}
const Os = /* @__PURE__ */ new WeakMap();
function Ds(e, t, n, i) {
	let a = Os.get(e);
	a || (a = /* @__PURE__ */ new Map(), Os.set(e, a));
	const r = JSON.stringify([t, n]);
	let s = a.get(r);
	return s || (s = async function(e, t, n, i) {
		const a = Es(e, Ss.ggirReport), r = a.files.find((e) => e.id === t), s = a.ggirResultsBundles.find((e) => e.fileId === t), o = $s(a, t, n), l = s ? await os(t, s.imported, o, r.ggirClockSteps, i) : o, u = new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), c = s ? await gs(s, u, r.ggirClockSteps, void 0, i) : void 0;
		return {
			markersByAlgo: l,
			selected: u,
			bundle: c ? await Ls(c, i) : void 0
		};
	}(e, t, n, i), a.set(r, s), s.catch(() => {
		a.get(r) === s && a.delete(r);
	})), s;
}
async function Ls(e, t) {
	const { ggirCell: n, ggirNum: i } = await Promise.resolve().then(() => dn), a = e.part2Reports?.["part2_daysummary.csv"], r = e.cleanedNightsCsv ? await z(t).readGgirReportCsv(e.cleanedNightsCsv, e.configCsv) : void 0, s = /* @__PURE__ */ new Map();
	if (a) for (let u = 0; u < a.rows; u++) {
		const e = n(a, N.ggir_id.header, u), t = qi(n(a, N.ggir_calendar_date.header, u));
		if (null == e || !t) continue;
		const i = JSON.stringify([String(e), t]);
		s.set(i, s.has(i) ? null : u);
	}
	const o = Ki(e.imported, "nights"), l = async (e) => {
		const l = e.nights, u = await Promise.all(Array.from({ length: l.rows }, async (u, c) => {
			const d = n(l, N.ggir_id.header, c), m = s.get(JSON.stringify([null == d ? null : String(d), o(l, c, !1)])), p = a && null != m ? n(a, N.ggir_day_valid_hours.header, m) : null, g = a && null != m ? n(a, N.ggir_day_hours.header, m) : null, h = a && null != m ? i(a, N.ggir_day_valid_hours.header, m) : null, f = a && null != m ? i(a, N.ggir_day_hours.header, m) : null, _ = null != h && null != f ? await z(t).ggirDayValidFraction(h, f) : null, w = i(l, N.ggir_night.header, c), y = Array.from({ length: e.days.rows }, (e, t) => t).find((t) => "WW" === n(e.days, "window", t) && i(e.days, "night_number", t) === w), v = r ? Array.from({ length: r.rows }, (e, t) => t).find((e) => String(n(r, N.ggir_id.header, e)) === String(d) && i(r, N.ggir_night.header, e) === w) : void 0, M = {
				ggir_nonwear_perc_spt: e.nightRecomputed[c] ? void 0 === y ? null : n(e.days, N.ggir_nonwear_perc_spt.header, y) : l.columns.includes(N.ggir_nonwear_perc_spt.header) ? n(l, N.ggir_nonwear_perc_spt.header, c) : r?.columns.includes(N.ggir_nonwear_perc_spt.header) && void 0 !== v ? n(r, N.ggir_nonwear_perc_spt.header, v) : void 0 === y ? null : n(e.days, N.ggir_nonwear_perc_spt.header, y),
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
		})), c = I.ggir_review_night_extension, d = [.../* @__PURE__ */ new Set([
			...l.columns,
			...c.map((e) => N[e].header),
			...c.map((e) => N[e].header + "_missing_reason")
		])], m = d.map((e) => {
			const t = c.find((t) => N[t].header + "_missing_reason" === e);
			if (t) return u.map((e) => e.reasons[t] ?? null);
			const n = c.find((t) => N[t].header === e);
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
		...e,
		imported: await l(e.imported),
		...e.current ? { current: await l(e.current) } : {}
	};
}
function Bs(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function Ps(e) {
	return Es(e, Ss.ggirResults).studySettings.flatMap((e) => Ie(e).map((e) => ({
		file: "sleep_export.csv",
		row: 0,
		key: e.filename,
		column: `${e.category}: ${e.reason}`,
		reason: "not_computed_for_export"
	})));
}
const Fs = "not included", Ws = "included if produced";
async function js(e, t) {
	return e.transaction("r", [
		e.files,
		e.markers,
		e.sensorNonwear,
		e.dailyGgirSummaries
	], async () => {
		const n = await Ae(e, t.length ? { onlyFileIds: t } : void 0), i = n.map((e) => e.id), [a, r, s] = await Promise.all([
			e.markers.where("fileId").anyOf(i).toArray(),
			e.sensorNonwear.where("fileId").anyOf(i).toArray(),
			e.dailyGgirSummaries.where("fileId").anyOf(i).toArray()
		]);
		return X({
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
async function Gs(e, t, n, i = {}) {
	const { signal: a, producers: s = {} } = i;
	a?.throwIfAborted();
	const o = await js(e, t.fileIds), c = await Hs(null, "checking the export inputs", () => async function(e, t = B(), n = {}) {
		const i = /* @__PURE__ */ new Map();
		for (const d of Object.values(Ss)) for (const [e, t] of Object.entries(d)) {
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
				return Is(n.binaryStore, "write", t, s), xs.set(i, {
					at: s,
					length: t.byteLength,
					store: n.binaryStore,
					restore: a ? (e) => new a(e) : (e) => e
				}), s += t.byteLength, r(0), i;
			}
			return Array.isArray(e) ? e.map(o) : e && "object" == typeof e && Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, o(t)])) : (r(e), e);
		}, l = await t.transaction("r", [...i.keys()].map((e) => t[e]), async () => {
			const n = await Ae(t, e.length ? { onlyFileIds: e } : void 0), a = new Set(n.flatMap((e) => e.id ? [e.id] : [])), r = {};
			return await Promise.all([...i].map(async ([e, i]) => {
				const s = (e) => Object.fromEntries([...i].filter((t) => t in e).map((t) => [t, o(e[t])]));
				if (r[e] = [], "files" === e) return void (r[e] = n.map((e) => s(e)));
				const l = "diaryEntries" === e ? t.diaryEntries : Ee(t, e);
				await ("studySettings" === e ? l.where("key").equals("study") : l.where("fileId").anyOf([...a])).each((t) => {
					r[e].push(s(t));
				});
			})), r;
		}), u = Object.freeze({ files: Rs(l.files.map((e) => Object.fromEntries(hs.map((t) => [t, As(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) }), c = new Set(l.ggirResultsBundles.map((e) => e.fileId));
		return l.markers = l.markers.map((e) => c.has(e.fileId) && "invalid" === V(void 0, K(e)).kind ? {
			...e,
			isInvalidNight: !0
		} : e), ks.set(u, l), u;
	}(t.fileIds, e, i)), d = function(e, t, n, i) {
		const a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), o = {}, l = /* @__PURE__ */ new Map(), u = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), c = [];
		return {
			addFiles: async (r) => {
				const o = Es(n, Ss.ggirReport), u = await Promise.all(r.map((t) => Ds(n, t.id, e, i)));
				for (const [e, n] of r.entries()) {
					const r = o.files.find((e) => e.id === n.id);
					if (!r) throw new Error("GGIR file is outside the export snapshot");
					if (i?.throwIfAborted(), !r.id) continue;
					const { bundle: d, markersByAlgo: m, selected: p } = u[e], g = Bs(o, r.id), h = new Map([...m].filter(([e]) => ma(e, t))), f = /* @__PURE__ */ new Map();
					for (const [e, t] of h) for (const n of t) {
						const t = sa(n);
						let i = f.get(t);
						i || (i = /* @__PURE__ */ new Map(), f.set(t, i)), i.set(e, n);
					}
					const _ = /* @__PURE__ */ new Set();
					for (const [e, t] of h) for (const n of t) w(n) && _.add(e);
					if (d) {
						const e = new Set([...p].filter(([, e]) => "invalid" === V(void 0, e).kind).map(([e]) => e)), n = d;
						c.push({
							...n,
							...t ? { scoredDates: new Set(r.availableDates.filter((e) => ma(e, t))) } : {},
							invalidDates: e
						});
					}
					const y = [..._].sort(), v = y[0], M = y[y.length - 1], b = [], S = [];
					for (const e of [...g.keys()].sort()) if (ma(e, t) && (null == v || null == M || e >= v && e <= M)) {
						const t = g.get(e), n = Pe(t), i = n.timestamps, a = new Float64Array(n.ggir ? t.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : t.axisY);
						for (let e = 0; e < i.length; e++) b.push(i[e]), S.push(a[e]);
					}
					const k = [];
					for (const [e, n] of f) {
						const o = ra(e).algoKey, l = d ? "" : await na(r, n, g, {
							...o ? { algorithm: o } : {},
							...t ? { dateRange: t } : {},
							signal: i
						}), u = d ? [] : l.replace(/\n$/u, "").split("\n");
						if (u.length > 0) {
							const t = a.get(e) ?? [];
							a.set(e, t), s.has(e) ? t.push(...u.slice(1)) : (t.push(...u), s.add(e));
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
						const { algoKey: p, ruleKey: h } = ra(e), f = [p, h].filter(Boolean).join("_"), _ = Ne(g.values(), o || null);
						k.push([f, {
							p: c,
							n: m,
							..."stale" === _.status ? { stale: _.reason } : {}
						}]);
					}
					0 === f.size && k.push(["", {
						p: [],
						n: []
					}]), b.length > 0 && l.set(String(r.id), {
						pid: r.participantId ?? r.filename,
						ts: b,
						act: S,
						algos: k
					});
				}
			},
			entries: async () => {
				for (const [n, i] of oa([...a.keys()])) {
					const e = a.get(n);
					e.length > 0 && (o[i] = da(`${e.join("\n")}\n`));
				}
				for (const [n, i] of Object.entries(function(e) {
					const t = /* @__PURE__ */ new Map();
					for (const n of e) for (const [e, i] of Object.entries(n.part2Reports ?? {})) t.set(e, [...t.get(e) ?? [], i]);
					return Object.fromEntries([...t].map(([e, t]) => {
						const n = [...new Set(t.flatMap((e) => e.columns))], i = [n.map(r).join(",")];
						for (const a of t) for (let e = 0; e < a.rows; e++) i.push(n.map((t) => Vi(a.values[a.columns.indexOf(t)]?.[e])).join(","));
						return [e, i.join("\n") + "\n"];
					}));
				}(c))) o[n] = da(i);
				const e = await Yi(c, "nights", i);
				e && (o["part4_nightsummary_ggir_review.csv"] = da(e));
				const t = await Yi(c, "days", i);
				return t && (o["part5_daysummary_ggir_review.csv"] = da(t)), l.size > 0 && (o[aa] = da(ca(l, u))), o;
			}
		};
	}(t.username, t.dateRange, c, a), p = [];
	for (const r of c.files) {
		const e = p.at(-1);
		e?.[0]?.filename === r.filename ? e.push(r) : p.push([r]);
	}
	const g = [], h = [], f = [];
	let _ = !1;
	const y = t.manifest.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString();
	for (const [r, l] of p.entries()) {
		a?.throwIfAborted(), i.progress?.(r, p.length);
		const n = l.map((e) => e.id), s = /* @__PURE__ */ new Map();
		try {
			const e = await Lt(c, {
				fileIds: n,
				dateRange: t.dateRange,
				signal: a
			});
			for (const t of e.daySummaries) s.set(`${t.fileId}|${t.date}`, {
				l5Hour: t.l5Hour,
				m10Hour: t.m10Hour
			});
		} catch (E) {
			if (E instanceof Ts) throw E;
			if (a?.throwIfAborted(), _ = !0, E instanceof DOMException && "AbortError" === E.name) throw E;
		}
		g.push(await Hs(l[0].filename, "computing its sleep rows", () => xa(n, t.username, t.dateRange, s, t.studyId, c, a))), await Hs(l[0].filename, "drawing its visual report", () => d.addFiles(l)), h.push(...await Xr(n, t.dateRange, {
			username: t.username,
			cutpointOverrides: t.physicalActivity.cutpointOverrides,
			maskPolicy: t.physicalActivity.maskPolicy,
			choiAxis: t.physicalActivity.choiAxis,
			exportedAt: y,
			...a ? { signal: a } : {}
		}, e)), f.push(...await Za(n, t.dateRange, c, t.username, a));
	}
	if (await js(e, t.fileIds) !== o) throw new ir(null, "computing physical activity, because its inputs changed during the export");
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
		const r = Es(n, Ss.actiwareInterval), s = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), o = s.map((e) => r.actiwareFileData.find((t) => t.fileId === e.id));
		return (await Promise.all(s.map(async (e, n) => {
			a?.throwIfAborted();
			const s = Cs(r, e.id, i), l = r.actiwareStatisticsInputs.find((t) => t.fileId === e.id), u = new Set(s.keys()), { actiwareStatisticsForScoredMarker: c } = await import("./local-data-source-DwAWATk8.js").then((e) => e.t);
			a?.throwIfAborted();
			const d = await c(o[n] ?? {}, l?.input, s, (e) => z(a).actiwareIntervalStatistics(e), a);
			a?.throwIfAborted();
			const m = await async function(e, t, n) {
				const i = (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), a = e.actiwareStatistics ?? [], r = await qn([...i.map((e) => e.startTimestamp), ...a.map((e) => e.startTimestamp)], z(n)), s = /* @__PURE__ */ new Set(), o = i.map((t) => {
					const n = a.findIndex((e, n) => !s.has(n) && e.kind === t.kind && er(e.startTimestamp, t.startTimestamp) && er(e.endTimestamp, t.endTimestamp)), i = r(t.startTimestamp), o = n >= 0 ? a[n] ?? null : null;
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
	}(t.fileIds, t.dateRange, c, t.username, a), b = await Hs(null, "writing the visual report", () => d.entries()), S = function(e) {
		const t = Es(e, Ss.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(c);
	if (S && (b["audit_log.jsonl"] = S), s.ggirResults) {
		const e = await s.ggirResults(Es(c, Ss.ggirResults), a);
		for (const [t, n] of Object.entries(e)) {
			if (t in b) throw new Error(`${sr}${t}`);
			b[t] = n;
		}
	}
	const k = Es(c, Ss.actiwareSleepWake);
	let x = 0;
	for (const r of k.files) {
		const e = k.actiwareFileData.find((e) => e.fileId === r.id)?.actiwareSleepWake;
		e && (x += await cr(e, t.dateRange, new Set(Cs(k, r.id, t.username).keys()), z(a)));
	}
	const I = Es(c, Ss.manifest), A = Object.fromEntries(v.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	_ ||= v.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const R = [..._ ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...v.degradations], T = await async function(e) {
		if (!navigator.storage?.getDirectory) throw new Error("Streaming export requires temporary workspace storage (OPFS).");
		const t = await (await (await navigator.storage.getDirectory()).getDirectoryHandle(nr, { create: !0 })).getDirectoryHandle(e.scratchId, { create: !0 }), n = await t.getFileHandle(Wi, { create: !0 }), i = await t.getFileHandle("bundle.zip", { create: !0 }), a = new CompressionStream("gzip"), s = a.readable.pipeTo(await n.createWritable());
		s.catch(() => {});
		const o = a.writable.getWriter(), c = await i.createWritable();
		let d = [], p = 0, g = e.artifacts.importRefusalReasons?.length ?? 0;
		const h = [], f = new $t((e, t) => {
			if (e) throw e;
			d.push(t);
		}), _ = async (e = 0) => {
			p = Math.max(p, e + d.reduce((e, t) => e + t.byteLength, 0));
			for (const t of d) await c.write(t);
			d = [];
		}, w = /* @__PURE__ */ new Set(), y = async (t, n) => {
			if (w.has(t)) throw new Error(`${sr}${t}`);
			w.add(t);
			const i = new Et(t, { level: 1 }), a = new F();
			let r = 0;
			f.add(i);
			for await (const s of n) for (let t = 0; t < s.byteLength; t += pr) {
				e.signal?.throwIfAborted();
				const n = s.subarray(t, t + pr);
				a.update(n), i.push(n, !1), r += n.byteLength, await _(s.byteLength);
			}
			i.push(/* @__PURE__ */ new Uint8Array(), !0), await _(), h.push({
				name: t,
				contentHash: P(a.finalize()),
				byteLength: r
			});
		};
		try {
			await o.write(new TextEncoder().encode(ji(e.artifacts.importRefusalReasons ?? [])));
			const t = function(e) {
				const t = e.artifacts ?? null, n = t ? null : e.planned ?? null, i = e.columns, a = t ? t.sleepRows.length : n?.sleepRows ?? null, s = t ? t.sleepRows.filter((e) => e.markerType === m.MAIN_SLEEP).length : n?.mainSleepRows ?? null, o = t ? Pa(t.sleepRows).size : n?.wideRows ?? null, l = t ? t.summaryRows.length : n?.summaryRows ?? null, c = t ? t.nonwearRows.length : n?.nonwearRows ?? null, d = t ? t.physicalActivityRows.length : n?.activityRows ?? null, p = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : n?.activityDates ?? null, g = t ? t.eventMarkerRows?.length ?? 0 : n?.eventMarkerRows ?? null, h = t ? t.actiwareIntervalRows?.length ?? 0 : n?.actiwareIntervalRows ?? null, f = t ? t.actiwareSleepWakeCsv?.rows ?? 0 : n?.actiwareSleepWakeRows ?? null, _ = n?.actogramFiles ?? null, w = t ? Object.keys(t.ggirEntries) : null, y = (w ? w.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
					const n = Math.max(0, u(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
					return {
						name: e,
						include: n > 0,
						rows: n
					};
				}) : n ? [...oa([...n.part4Rows.keys()])].map(([e, t]) => ({
					name: t,
					include: n.ggirMainSleepGroupKeys.includes(e),
					rows: n.part4Rows.get(e) ?? null
				})) : []).sort((e, t) => e.name.localeCompare(t.name)), v = w ? w.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [aa, ...n?.ggirReviewEntries ?? []], M = (e) => null == e ? null : e > 0, b = (n, a, r) => {
					const s = null == a ? "unknown" : a ? "included" : "not_included";
					return "included" !== s ? {
						name: n,
						state: s,
						rows: null,
						detail: "unknown" === s ? r.detail : Fs,
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
								const e = Fa(t.sleepRows, !0), n = e.next().value;
								for (const t of e) yield {
									bytes: da(n + "\n" + t),
									rows: 1
								};
							} else if (r.chunkField) {
								const n = t[r.chunkField] ?? [];
								for (let i = 0; i < n.length; i += 256) {
									const a = {
										...t,
										[r.chunkField]: n.slice(i, i + 256)
									}, s = !e.selectedColumns?.length || "sleepRows" !== r.chunkField && "nonwearRows" !== r.chunkField ? void 0 : za(a[r.chunkField], void 0, !0);
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
						detail: null == a ? Ws : `${String(a)} rows · ${String(i)} columns`,
						chunkField: "sleepRows",
						encode: (t) => da(za(t.sleepRows, e.selectedColumns ?? void 0, !0))
					}),
					b("sleep_export_wide.csv", !!e.includeWideFormat && M(o ?? s), {
						rows: o,
						detail: null == o ? Ws : `${String(o)} participant group ${1 === o ? "row" : "rows"}`,
						wide: !0,
						encode: (e) => da(function(e, t = !1) {
							return [...Fa(e, t)].join("\n");
						}(e.sleepRows, !0))
					}),
					b("summary_export.csv", M(l ?? s), {
						rows: l,
						detail: null == l ? Ws : `${String(l)} participant ${1 === l ? "row" : "rows"}`,
						chunkField: "summaryRows",
						encode: (e) => da(function(e, t = !1) {
							const n = Ha("summary_csv", e, Na, void 0, t), i = [
								"summary_mean_temperature_c",
								"sleep_regularity_index",
								...Object.values(Ta).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
							];
							return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? u(n).records.map((t, n) => 0 === n ? t.text + "," + i.map((e) => N[e].header + "_missing_reason").join(",") : t.text + "," + i.map((t) => {
								const i = e[n - 1];
								return "summary_mean_temperature_c" === t ? null == i.meanTemperature ? i.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? i.sleepRegularityMissingReason ?? "" : i.metricMissingReasons?.[t] ?? "";
							}).join(",")).join("\n") : n;
						}(e.summaryRows, !0))
					}),
					b("nonwear_export.csv", M(c), {
						rows: c,
						detail: null == c ? Ws : `${String(c)} periods`,
						chunkField: "nonwearRows",
						encode: (t) => da(za(t.nonwearRows, e.selectedColumns ?? void 0, !0))
					}),
					b("event_markers_export.csv", M(g), {
						rows: g,
						detail: null == g ? Ws : `${String(g)} button ${1 === g ? "press" : "presses"}`,
						columns: Ua.length,
						chunkField: "eventMarkerRows",
						encode: (e) => da(function(e, t = !1) {
							const n = [[...Ua, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
							for (const i of e) n.push([
								i.filename,
								i.participantId ?? "",
								i.studyDate,
								Ya(i.localTimestamp),
								null == i.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (i.localTimestamp - 60 * i.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
								...t ? [i.participantId ? "" : "source_reported_missing", null == i.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
							].map((e) => r(e)).join(","));
							return `${n.join("\n")}\n`;
						}(e.eventMarkerRows ?? [], !0))
					}),
					b("actiware_intervals_export.csv", M(h), {
						rows: h,
						detail: null == h ? Ws : `${String(h)} Actiware intervals`,
						columns: Qa.length,
						chunkField: "actiwareIntervalRows",
						encode: (e) => da(tr(e.actiwareIntervalRows ?? [], !0))
					}),
					b(or, M(f), {
						rows: f,
						detail: null == f ? Ws : `${String(f)} Actiware Sleep/Wake epochs`,
						columns: lr.length,
						encode: (e) => e.actiwareSleepWakeCsv.bytes
					}),
					b("physical_activity_export.csv", M(d), {
						rows: d,
						detail: null == d || null == p ? Ws : `${String(d)} rows · ${String(p)} distinct dates`,
						chunkField: "physicalActivityRows",
						encode: (e) => da(function(e, t, n, i = !1) {
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
							]), s = e.some((e) => "ggir_enmo" === e.method) ? Hr.filter((e) => !a.has(e) && (Oi.has(e) || r.has(e))) : [], o = [
								"Participant ID",
								"Threshold Preset Name",
								"Inclusion Rule Preset Name",
								"Scored Username",
								"Source Content Hash",
								"Validation Notes",
								"Notes"
							], l = [[
								...Hr.filter((e) => !a.has(e)),
								...s.map((e) => `${e}_missing_reason`),
								...i ? [
									"Epoch Length Seconds",
									"Native Epoch Seconds",
									"Mask Overlap Epochs"
								].map((e) => e + "_missing_reason") : [],
								...o.map((e) => e + "_missing_reason")
							].join(",")];
							for (const u of e) {
								const e = qr(u), t = null == u.sedentaryMinutes || !n && null == u.excludedNonwearMinutes ? null : u.sedentaryMinutes + (n ? 0 : u.excludedNonwearMinutes), c = [
									Ur(u.filename),
									Ur(u.participantId),
									Ur(u.analysisDate),
									Ur(u.method),
									Ur(u.methodLabel),
									Ur(u.methodFamily),
									Ur(u.requiredSignalContract),
									Ur(u.computationOwner),
									String(u.frontendComputesMetric),
									Ur(u.sourceSignal),
									Ur(u.status),
									Ur(u.methodRule),
									Ur(u.thresholdSource),
									Ur(u.thresholdPresetName),
									Vr(u.sedentaryMax),
									Vr(u.lightMin),
									Vr(u.moderateMin),
									Vr(u.vigorousMin),
									Vr(t),
									Vr(u.lightMinutes),
									Vr(u.moderateMinutes),
									Vr(u.vigorousMinutes),
									Vr(u.mvpaMinutes),
									Vr(u.mimsUnitTotal),
									null == u.epochLengthSeconds ? "" : String(u.epochLengthSeconds),
									String(u.epochsReviewed),
									Vr(u.wakeWearMinutes),
									Vr(u.excludedNonwearMinutes),
									Vr(u.excludedMainSleepMinutes),
									Vr(u.excludedNapMinutes),
									null == u.maskOverlapEpochs ? "" : String(u.maskOverlapEpochs),
									null == u.mvpaBouts ? "" : String(u.mvpaBouts),
									Vr(u.mvpaBoutMinutes),
									null == u.sedentaryBouts ? "" : String(u.sedentaryBouts),
									null == u.sedentaryBreaks ? "" : String(u.sedentaryBreaks),
									Vr(u.meanSedentaryBoutMinutes),
									null == u.nativeEpochSeconds ? "" : String(u.nativeEpochSeconds),
									String(u.epochMismatch),
									Ur(u.inclusionRulePresetName),
									String(u.maskExcludeNonwear),
									String(u.maskExcludeMainSleep),
									String(u.maskExcludeNaps),
									String(u.maskUseManualNonwear),
									String(u.maskUseAlgorithmNonwear),
									Ur(u.maskNonwearDetector),
									Vr(u.maskMinimumWakeWearMinutes),
									Ur(u.scoredUsername),
									Ur(u.sourceContentHash),
									Ur(u.exportedAt),
									Ur(e.status),
									Ur(e.notes),
									Ur(u.notes)
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
									const t = c[Hr.indexOf(e)];
									if ("ggir_enmo" !== u.method || "" !== t) return "";
									if (Oi.has(e)) {
										const t = d[e];
										return null != t && Number.isFinite(t) ? "" : "source_reported_missing";
									}
									return r.has(e) && null == m[e] ? "not_computed_for_export" : "";
								}), g = i ? [
									["Epoch Length Seconds", null == u.epochLengthSeconds && "ggir_enmo" === u.method ? "not_applicable_to_row" : ""],
									["Native Epoch Seconds", null == u.nativeEpochSeconds ? "not_applicable" === u.thresholdSource ? "not_applicable_to_row" : "source_reported_missing" : ""],
									["Mask Overlap Epochs", null == u.maskOverlapEpochs ? "ggir_enmo" === u.method ? "not_applicable_to_row" : "needs_signal" === u.status ? "channel_unavailable" : "backend_required" === u.status ? "not_computed_for_export" : "" : ""]
								].map(([e, t]) => "" === c[Hr.indexOf(e)] ? t : "") : [];
								l.push([
									...c.filter((e, t) => !a.has(Hr[t])),
									...p,
									...g,
									...o.map((e) => "" !== c[Hr.indexOf(e)] ? "" : [
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
						detail: null == n ? Ws : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
						columns: 40,
						encode: (t) => t.ggirEntries[e]
					})),
					...v.map((e) => b(e, !(!w && !n?.ggirReviewEntries.includes(e)) || (null == _ ? null : _ > 0), {
						rows: null,
						detail: e.endsWith(".html") ? null == _ ? w ? "1 report" : Ws : `1 report · ${String(_)} ${1 === _ ? "file" : "files"}` : "1 GGIR report artifact",
						encode: (t) => t.ggirEntries[e]
					})),
					{
						name: Wi,
						state: "included",
						rows: null,
						detail: "1 reason per missing cell",
						estimatedBytes: 2048 + (t?.actiwareSleepWakeCsv?.reasonChunks.reduce((e, t) => e + t.byteLength, 0) ?? n?.actiwareMissingReasonBytes ?? 0),
						write: null
					},
					b("codebook.csv", !0, {
						rows: Ea.length,
						detail: `${String(Ea.length)} definitions`,
						estimatedBytes: new TextEncoder().encode(Da()).length,
						encode: () => da(Da(void 0, !0))
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
			}({
				columns: e.options.selectedColumns?.length ?? 0,
				...e.options,
				artifacts: e.artifacts
			});
			for (const n of t) if (n.write) try {
				"actiware_sleep_wake_export.csv" === n.name ? await y(n.name, async function* () {
					for await (const t of e.sleepWake) e.signal?.throwIfAborted(), g += t.reasonRows, p = Math.max(p, t.bytes.byteLength + t.reasons.byteLength), await o.write(t.reasons), yield t.bytes;
				}()) : n.name.endsWith(".csv") ? await y(n.name, async function* () {
					let t = 0, i = !1, a = !1;
					const r = "actiware_intervals_export.csv" === n.name ? function* () {
						for (const t of e.artifacts.actiwareIntervalRows ?? []) {
							const [e, n] = u(tr([t], !0)).records, i = l(n.text);
							yield new Map(l(e.text).map((e, t) => [e, i[t] ?? ""]));
						}
					} : void 0;
					for (const e of n.batches?.() ?? gr(n.write())) {
						if (e.bytes.byteLength > 4 * pr) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
						const s = zi(new TextDecoder().decode(e.bytes), n.name, !0, {
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
							if (u += ji([t.value], !1), g += 1, u.length >= pr / 2) {
								const t = new TextEncoder().encode(u);
								p = Math.max(p, e.bytes.byteLength + t.byteLength), await o.write(t), u = "";
							}
						}
						await o.write(new TextEncoder().encode(u));
						const c = i ? (a ? "" : "\n") + l.csv.slice(l.csv.indexOf("\n") + 1) : l.csv;
						i = !0, t += e.rows ?? 0, a = c.endsWith("\n");
						const d = new TextEncoder().encode(c);
						p = Math.max(p, e.bytes.byteLength + d.byteLength + 2 * u.length), yield d;
					}
				}()) : await y(n.name, [n.write()]);
			} catch (v) {
				throw new Error(`Export failed while writing ${n.name}`, { cause: v });
			}
			await o.close(), await s, await y(Wi, async function* () {
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
					contentHash: await $a(t),
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
			return await y(rr, [new TextEncoder().encode(Ca(a))]), f.end(), await _(), e.signal?.throwIfAborted(), await c.close(), {
				blob: await new Response((await i.getFile()).stream()).blob(),
				entries: h,
				peakBufferedBytes: p,
				reasonRows: g
			};
		} catch (E) {
			throw f.terminate(), await Promise.allSettled([
				o.abort(),
				c.abort(),
				s
			]), E;
		}
	}({
		artifacts: {
			importRefusalReasons: Ps(c),
			...v,
			physicalActivityRows: h,
			physicalActivityEnabledClasses: t.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: t.physicalActivity.nonwearAsClass,
			ggirEntries: b,
			eventMarkerRows: f,
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
			degradations: R,
			ggirCorrections: Object.fromEntries(I.ggirResultsBundles.filter((e) => e.ggirCorrections).map((e) => [String(e.fileId), e.ggirCorrections])),
			executionAttestationIds: I.localExecutions.map((e) => e.attestationId),
			diaryTemporalPolicyByFile: Object.fromEntries(I.files.map((e) => [String(e.id), Object.fromEntries(I.diaryEntries.filter((t) => t.fileId === e.id).map((e) => [e.analysisDate, e.importMappingProvenance?.diaryTemporalPolicy ?? null]))]))
		},
		sleepWake: dr(t.fileIds, t.dateRange, c, t.username, a),
		scratchId: n,
		...a ? { signal: a } : {}
	});
	return i.progress?.(p.length, p.length), {
		...T,
		actiwareSleepWakeRows: x,
		degradations: R,
		hasData: v.sleepRows.length > 0 || v.nonwearRows.length > 0 || h.length > 0 || Object.keys(b).length > 0,
		rowCount: v.sleepRows.length + v.nonwearRows.length + v.summaryRows.length + h.length,
		dayCount: (/* @__PURE__ */ new Set([
			...v.sleepRows.map((e) => e.studyDate),
			...v.nonwearRows.map((e) => e.studyDate),
			...h.map((e) => e.analysisDate)
		])).size,
		fileCount: c.files.length
	};
}
async function Hs(e, t, n) {
	try {
		return await n();
	} catch (i) {
		if (i instanceof DOMException && "AbortError" === i.name) throw i;
		throw new ir(e, t, i);
	}
}
t({ async build(e, t, n, i) {
	const a = new h(e);
	let r;
	try {
		return r = await (await (await (await (await navigator.storage.getDirectory()).getDirectoryHandle(nr, { create: !0 })).getDirectoryHandle(n, { create: !0 })).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await a.open(), await Gs(a, t, n, {
			...i ? { progress: i } : {},
			binaryStore: r
		});
	} catch (s) {
		if (s instanceof ir) return { failure: {
			file: s.file,
			step: s.step
		} };
		throw s;
	} finally {
		r?.close(), a.close();
	}
} });
export { cn as A, Vt as B, Sn as C, _n as D, Rn as E, sn as F, Wt as H, Qt as I, Ht as L, rn as M, un as N, Tn as O, en as P, zt as R, xn as S, vn as T, Ot as U, Jt as V, Dt as W, Un as _, Er as a, Fn as b, xr as c, Mr as d, Sr as f, Jn as g, yr as h, Tr as i, ln as j, An as k, br as l, hr as m, ds as n, Ir as o, _r as p, Gr as r, Ar as s, Qr as t, vr as u, Vn as v, kn as w, Ln as x, qn as y, Gt as z };
