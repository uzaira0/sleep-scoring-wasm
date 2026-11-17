import { c as e, d as t, g as n, i, l as r, n as a, p as s, s as o, t as l, u as c } from "./ggir-results-types-e7JA7N7O.js";
import { C as d, En as u, Fr as m, Ft as p, Gt as g, H as f, Ir as h, It as _, Jn as w, Jt as v, Kt as y, Lt as b, Mr as k, O as M, Pt as S, Qt as T, U as x, Vt as I, Xn as A, Xt as R, Yn as N, Yt as E, Zn as $, Zt as L, _n as C, a as O, bn as D, br as F, c as j, dn as P, f as G, l as B, n as W, p as z, qt as U, r as V, u as q, vn as H, y as K, yn as J } from "./background-jobs-BvgoU31P.js";
import { $ as Y, Dr as Z, E as X, Gt as Q, It as ee, L as te, Mt as ne, Nn as ie, Nt as re, Qt as ae, S as se, Tr as oe, Ur as le, Wt as ce, X as de, Xr as ue, Xt as me, Yn as pe, Z as ge, an as fe, at as he, it as _e, kr as we, lr as ve, m as ye, ot as be, pr as ke, qr as Me, ti as Se, ur as Te, zt as xe } from "./db-qymA_MI3.js";
import { _ as Ie, c as Ae, d as Re, f as Ne, i as Ee, l as $e, r as Le, x as Ce } from "./ggir-results-import-BydpHCxX.js";
import { N as Oe, j as De, o as Fe, w as je } from "./local-nonwear-unified-Ci4kBhtJ.js";
import { a as Pe, u as Ge } from "./epoch-utils-DQ0hQG24.js";
function Be(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function We(e) {
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
function ze(e, t) {
	const n = function(e) {
		const t = Be(e.ggirTimestamps), n = Be(e.ggirEnmo);
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
var Ue = Uint8Array, Ve = Uint16Array, qe = Int32Array, He = new Ue([
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
]), Ke = new Ue([
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
]), Je = new Ue([
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
]), Ye = function(e, t) {
	for (var n = new Ve(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
	var r = new qe(n[30]);
	for (i = 1; i < 30; ++i) for (var a = n[i]; a < n[i + 1]; ++a) r[a] = a - n[i] << 5 | i;
	return {
		b: n,
		r
	};
}, Ze = Ye(He, 2), Xe = Ze.b, Qe = Ze.r;
Xe[28] = 258, Qe[258] = 28;
for (var et = Ye(Ke, 0), tt = (et.b, et.r), nt = new Ve(32768), it = 0; it < 32768; ++it) {
	var rt = (43690 & it) >> 1 | (21845 & it) << 1;
	rt = (61680 & (rt = (52428 & rt) >> 2 | (13107 & rt) << 2)) >> 4 | (3855 & rt) << 4, nt[it] = ((65280 & rt) >> 8 | (255 & rt) << 8) >> 1;
}
var at = function(e, t, n) {
	for (var i = e.length, r = 0, a = new Ve(t); r < i; ++r) e[r] && ++a[e[r] - 1];
	var s, o = new Ve(t);
	for (r = 1; r < t; ++r) o[r] = o[r - 1] + a[r - 1] << 1;
	if (n) {
		s = new Ve(1 << t);
		var l = 15 - t;
		for (r = 0; r < i; ++r) if (e[r]) for (var c = r << 4 | e[r], d = t - e[r], u = o[e[r] - 1]++ << d, m = u | (1 << d) - 1; u <= m; ++u) s[nt[u] >> l] = c;
	} else for (s = new Ve(i), r = 0; r < i; ++r) e[r] && (s[r] = nt[o[e[r] - 1]++] >> 15 - e[r]);
	return s;
}, st = new Ue(288);
for (it = 0; it < 144; ++it) st[it] = 8;
for (it = 144; it < 256; ++it) st[it] = 9;
for (it = 256; it < 280; ++it) st[it] = 7;
for (it = 280; it < 288; ++it) st[it] = 8;
var ot = new Ue(32);
for (it = 0; it < 32; ++it) ot[it] = 5;
var lt = at(st, 9, 0), ct = at(ot, 5, 0), dt = function(e) {
	return (e + 7) / 8 | 0;
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
], mt = function(e, t, n) {
	var i = new Error(t || ut[e]);
	if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, mt), !n) throw i;
	return i;
}, pt = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8;
}, gt = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, ft = function(e, t) {
	for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
		s: i,
		f: e[i]
	});
	var r = n.length, a = n.slice();
	if (!r) return {
		t: kt,
		l: 0
	};
	if (1 == r) {
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
	var o = n[0], l = n[1], c = 0, d = 1, u = 2;
	for (n[0] = {
		s: -1,
		f: o.f + l.f,
		l: o,
		r: l
	}; d != r - 1;) o = n[n[c].f < n[u].f ? c++ : u++], l = n[c != d && n[c].f < n[u].f ? c++ : u++], n[d++] = {
		s: -1,
		f: o.f + l.f,
		l: o,
		r: l
	};
	var m = a[0].s;
	for (i = 1; i < r; ++i) a[i].s > m && (m = a[i].s);
	var p = new Ve(m + 1), g = ht(n[d - 1], p, 0);
	if (g > t) {
		i = 0;
		var f = 0, h = g - t, _ = 1 << h;
		for (a.sort(function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		}); i < r; ++i) {
			var w = a[i].s;
			if (!(p[w] > t)) break;
			f += _ - (1 << g - p[w]), p[w] = t;
		}
		for (f >>= h; f > 0;) {
			var v = a[i].s;
			p[v] < t ? f -= 1 << t - p[v]++ - 1 : ++i;
		}
		for (; i >= 0 && f; --i) {
			var y = a[i].s;
			p[y] == t && (--p[y], ++f);
		}
		g = t;
	}
	return {
		t: new Ue(p),
		l: g
	};
}, ht = function(e, t, n) {
	return -1 == e.s ? Math.max(ht(e.l, t, n + 1), ht(e.r, t, n + 1)) : t[e.s] = n;
}, _t = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new Ve(++t), i = 0, r = e[0], a = 1, s = function(e) {
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
}, wt = function(e, t) {
	for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
	return n;
}, vt = function(e, t, n) {
	var i = n.length, r = dt(t + 2);
	e[r] = 255 & i, e[r + 1] = i >> 8, e[r + 2] = 255 ^ e[r], e[r + 3] = 255 ^ e[r + 1];
	for (var a = 0; a < i; ++a) e[r + a + 4] = n[a];
	return 8 * (r + 4 + i);
}, yt = function(e, t, n, i, r, a, s, o, l, c, d) {
	pt(t, d++, n), ++r[256];
	for (var u = ft(r, 15), m = u.t, p = u.l, g = ft(a, 15), f = g.t, h = g.l, _ = _t(m), w = _.c, v = _.n, y = _t(f), b = y.c, k = y.n, M = new Ve(19), S = 0; S < w.length; ++S) ++M[31 & w[S]];
	for (S = 0; S < b.length; ++S) ++M[31 & b[S]];
	for (var T = ft(M, 7), x = T.t, I = T.l, A = 19; A > 4 && !x[Je[A - 1]]; --A);
	var R, N, E, $, L = c + 5 << 3, C = wt(r, st) + wt(a, ot) + s, O = wt(r, m) + wt(a, f) + s + 14 + 3 * A + wt(M, x) + 2 * M[16] + 3 * M[17] + 7 * M[18];
	if (l >= 0 && L <= C && L <= O) return vt(t, d, e.subarray(l, l + c));
	if (pt(t, d, 1 + (O < C)), d += 2, O < C) {
		R = at(m, p, 0), N = m, E = at(f, h, 0), $ = f;
		var D = at(x, I, 0);
		for (pt(t, d, v - 257), pt(t, d + 5, k - 1), pt(t, d + 10, A - 4), d += 14, S = 0; S < A; ++S) pt(t, d + 3 * S, x[Je[S]]);
		d += 3 * A;
		for (var F = [w, b], j = 0; j < 2; ++j) {
			var P = F[j];
			for (S = 0; S < P.length; ++S) {
				var G = 31 & P[S];
				pt(t, d, D[G]), d += x[G], G > 15 && (pt(t, d, P[S] >> 5 & 127), d += P[S] >> 12);
			}
		}
	} else R = lt, N = st, E = ct, $ = ot;
	for (S = 0; S < o; ++S) {
		var B = i[S];
		if (B > 255) {
			gt(t, d, R[257 + (G = B >> 18 & 31)]), d += N[G + 257], G > 7 && (pt(t, d, B >> 23 & 31), d += He[G]);
			var W = 31 & B;
			gt(t, d, E[W]), d += $[W], W > 3 && (gt(t, d, B >> 5 & 8191), d += Ke[W]);
		} else gt(t, d, R[B]), d += N[B];
	}
	return gt(t, d, R[256]), d + N[256];
}, bt = new qe([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), kt = new Ue(0), Mt = function() {
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
		this.ondata(function(e, t, n, i, r) {
			if (!r && (r = { l: 1 }, t.dictionary)) {
				var a = t.dictionary.subarray(-32768), s = new Ue(a.length + e.length);
				s.set(a), s.set(e, a.length), e = s, r.w = a.length;
			}
			return function(e, t, n, i, r, a) {
				var s = a.z || e.length, o = new Ue(i + s + 5 * (1 + Math.ceil(s / 7e3)) + r), l = o.subarray(i, o.length - r), c = a.l, d = 7 & (a.r || 0);
				if (t) {
					d && (l[0] = a.r >> 3);
					for (var u = bt[t - 1], m = u >> 13, p = 8191 & u, g = (1 << n) - 1, f = a.p || new Ve(32768), h = a.h || new Ve(g + 1), _ = Math.ceil(n / 3), w = 2 * _, v = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, y = new qe(25e3), b = new Ve(288), k = new Ve(32), M = 0, S = 0, T = a.i || 0, x = 0, I = a.w || 0, A = 0; T + 2 < s; ++T) {
						var R = v(T), N = 32767 & T, E = h[R];
						if (f[N] = E, h[R] = N, I <= T) {
							var $ = s - T;
							if ((M > 7e3 || x > 24576) && ($ > 423 || !c)) {
								d = yt(e, l, 0, y, b, k, S, x, A, T - A, d), x = M = S = 0, A = T;
								for (var L = 0; L < 286; ++L) b[L] = 0;
								for (L = 0; L < 30; ++L) k[L] = 0;
							}
							var C = 2, O = 0, D = p, F = N - E & 32767;
							if ($ > 2 && R == v(T - F)) for (var j = Math.min(m, $) - 1, P = Math.min(32767, T), G = Math.min(258, $); F <= P && --D && N != E;) {
								if (e[T + C] == e[T + C - F]) {
									for (var B = 0; B < G && e[T + B] == e[T + B - F]; ++B);
									if (B > C) {
										if (C = B, O = F, B > j) break;
										var W = Math.min(F, B - 2), z = 0;
										for (L = 0; L < W; ++L) {
											var U = T - F + L & 32767, V = U - f[U] & 32767;
											V > z && (z = V, E = U);
										}
									}
								}
								F += (N = E) - (E = f[N]) & 32767;
							}
							if (O) {
								y[x++] = 268435456 | Qe[C] << 18 | tt[O];
								var q = 31 & Qe[C], H = 31 & tt[O];
								S += He[q] + Ke[H], ++b[257 + q], ++k[H], I = T + C, ++M;
							} else y[x++] = e[T], ++b[e[T]];
						}
					}
					for (T = Math.max(T, I); T < s; ++T) y[x++] = e[T], ++b[e[T]];
					d = yt(e, l, c, y, b, k, S, x, A, T - A, d), c || (a.r = 7 & d | l[d / 8 | 0] << 3, d -= 7, a.h = h, a.p = f, a.i = T, a.w = I);
				} else {
					for (T = a.w || 0; T < s + c; T += 65535) {
						var K = T + 65535;
						K >= s && (l[d / 8 | 0] = c, K = s), d = vt(l, d + 1, e.subarray(T, K));
					}
					a.i = s;
				}
				return function(e, t, n) {
					return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new Ue(e.subarray(t, n));
				}(o, 0, i + dt(d) + r);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? r.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, 0, 0, r);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || mt(5), this.s.l && mt(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var i = new Ue(-32768 & n);
				i.set(this.b.subarray(0, this.s.z)), this.b = i;
			}
			var r = this.b.length - this.s.z;
			this.b.set(e.subarray(0, r), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(r), 32768), this.s.z = e.length - r + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = kt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || mt(5), this.s.l && mt(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new Ue(6);
			t[0] = this.s.r >> 3;
			var n = vt(t, this.s.r, kt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), St = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	St.decode(kt, { stream: !0 });
} catch (xs) {}
async function Tt(e, t, n, i, r = 60, a, s) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == i || n >= i) return null;
	const o = new Uint8Array(e.length);
	for (let c = 0; c < e.length; c++) o[c] = 1 === e[c] ? 1 : 0;
	const l = await xt(o, a && a.length === e.length ? a : new Float64Array(e.length), t, n, i, r, s);
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
async function xt(e, t, n, i, r, a = 60, s) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == i || null == r || i >= r) return null;
	const o = await async function(e, t, n, i) {
		const r = await W(i).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === r.length ? {
			startIdx: r[0],
			endIdx: r[1]
		} : null;
	}(n, i, r, s);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, c = o.endIdx + 1, d = e instanceof Uint8Array ? e.slice(l, c) : new Uint8Array(e.slice(l, c)), u = t instanceof Float64Array ? t.slice(l, c) : Float64Array.from(t.slice(l, c)), m = await W(s).computeSleepMetrics(d, u, a), p = n[l] ?? 0, g = n[c - 1] ?? p, f = null != m.firstSleepEpochIdx ? n[l + m.firstSleepEpochIdx] ?? p : p, h = null != m.lastSleepEpochIdx ? n[l + m.lastSleepEpochIdx] ?? g : g;
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
		sleepOnset: f,
		sleepOffset: h
	};
}
function It(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const i = xe(e), r = Array.from(i.timestamps);
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
	const l = Ge(e, t);
	return {
		timestamps: r,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: s,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
function At(e) {
	return JSON.stringify([...new Set(e ?? [])]);
}
function Rt(e, t, n) {
	return e === t.ggirTimestamps ? Y(e, de, n) : ge(e, {}, n);
}
function Nt(e, t) {
	if (0 === e.length) return null;
	if (e.length === t.timestamps.length && t.timestamps.length > 0) return t.timestamps;
	const n = t.ggirTimestamps;
	return n && e.length === n.length && n.length > 0 ? n : null;
}
const Et = new Set(_);
function $t(e, t) {
	const n = t ? T[t]?.[0] : void 0;
	return void 0 !== (i = n) && Et.has(i) ? n : e ? S[e] ?? null : null;
	var i;
}
function Lt(e) {
	const t = e ? p[e] : null;
	return t?.fusedIntoBand && t.detector ? "detach_mask" === b[t.detector].storedAs ? "detach_mask" : "sensor_rows" : null;
}
async function Ct(e, t, n = k()) {
	const i = e.nonwearBands?.[At(t)];
	if (null === i) return null;
	if (i) {
		const t = "counts" === i.grid ? e.timestamps : e.ggirTimestamps, [r] = i.detectors;
		if (t && r && t.length === i.mask.length) return {
			detector: r,
			detectors: i.detectors,
			...e.nonwearSourceLabels ? { label: i.detectors.map((t) => e.nonwearSourceLabels?.[t] ?? De(t)).join(" + ") } : {},
			mask: i.mask,
			...i.weight ? { weight: i.weight } : {},
			grid: t,
			epochSeconds: await Rt(t, e, n)
		};
	}
	const r = [];
	let a = null;
	for (const d of new Set(t ?? [])) {
		if (jt(d)) continue;
		const t = e.algorithmicNonwearMasks?.[d];
		if (!t) continue;
		const n = Nt(t, e);
		!n || null !== a && n !== a || (a = n, r.push({
			detector: d,
			mask: t
		}));
	}
	const s = r[0];
	if (!s || !a) return null;
	const o = await Rt(a, e, n), l = [...r, ...await Ot(e, t, {
		grid: a,
		epochSeconds: o
	}, n)];
	if (1 === l.length) return {
		detector: s.detector,
		detectors: [s.detector],
		mask: s.mask,
		grid: a,
		epochSeconds: o,
		...e.nonwearSourceLabels?.[s.detector] ? { label: e.nonwearSourceLabels[s.detector] } : {}
	};
	const c = await n.fuseNonwearMasks(l.map((e) => Uint8Array.from(e.mask)));
	return {
		detector: s.detector,
		detectors: l.map((e) => e.detector),
		...e.nonwearSourceLabels ? { label: l.map(({ detector: t }) => e.nonwearSourceLabels?.[t] ?? De(t)).join(" + ") } : {},
		mask: c.any,
		weight: c.weight,
		grid: a,
		epochSeconds: o
	};
}
async function Ot(e, t, { grid: n, epochSeconds: i }, r) {
	const a = e.deviceNonwearSource ? p[e.deviceNonwearSource] : null, s = a?.fusedIntoBand ? a.detector : null;
	if (null === s || !(t ?? []).includes(s)) return [];
	const o = (e.sensorNonwearPeriods ?? []).map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	}));
	return [{
		detector: s,
		mask: await Oe(o, n, i, r)
	}];
}
function Dt(e, t) {
	return t ? e : e.filter((e) => e !== ue.choi_2011 && e !== ue.choi_2012);
}
Object.freeze([]), new Set(I.filter((e) => "device_statement" === e.execution).map((e) => e.id)), Object.freeze([ue.ggir_part2_invalid]);
const Ft = new Set(Object.values(p).flatMap((e) => e.fusedIntoBand && e.detector ? [e.detector] : []));
function jt(e) {
	return Ft.has(e);
}
async function Pt(e, t) {
	return ie("ggir-saved-nonwear-label", F(e), async () => {
		const n = await t.ggirNonwearApproach(e).catch((e) => {
			if (e instanceof Error && "AbortError" === e.name) throw e;
			return null;
		});
		return n ? `GGIR nonwear (van Hees ${n})` : oe;
	});
}
ue.ggir_saved, ue.ggir_part2_invalid, ue.choi_2011, ue.choi_2012, ue.van_hees_2013, ue.van_hees_2023, ue.troiano_2008, ue.ahmadi_2020;
const Gt = /* @__PURE__ */ new Map();
async function Bt(e, t, n = !1) {
	let i = Gt.get(e);
	const r = void 0 !== i;
	i || (i = W(t).resolveTimezone(e), Gt.set(e, i));
	try {
		return await i;
	} catch (mt) {
		return Gt.get(e) === i && Gt.delete(e), t?.throwIfAborted(), r && !n ? Bt(e, t, !0) : void console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, mt);
	}
}
function Wt(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : ne();
}
async function zt(e) {
	try {
		return Wt((await X(e))?.extraSettings);
	} catch (mt) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", mt), ne();
	}
}
function Ut(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const Vt = {
	zone: null,
	reason: null
};
async function qt(e, t, n) {
	const i = e.ggirTimezone?.trim();
	let r = null;
	if (i) {
		const e = await Bt(i, n);
		if (!e) return Vt;
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
	if (null === r) return we(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : Vt;
	const a = await Bt(t, n);
	if (void 0 === a) return Vt;
	if ("iana" !== a?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const s = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== s && (await ee(a.zone, s, W(n))).includes(r) ? {
		zone: a.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${Ut(r)} is not a ${a.zone} offset`
	};
}
function Ht(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [i, r] of e.entries()) t[i + 1] = t[i] + r.length;
	const n = new Float64Array(t[e.length]);
	for (const [i, r] of e.entries()) n.set(r, t[i]);
	return [n, t];
}
const Kt = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), Jt = [
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
var Yt = Jt.map(() => Kt);
Object.fromEntries(Jt.map(([e], t) => [e, Yt[t]]));
const Zt = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values(ue).filter((e) => ![
		ue.choi_2012,
		ue.choi_2011,
		ue.van_hees_2023,
		ue.detach_nonwear
	].some((t) => t === e))
];
async function Xt(e, t, n, i) {
	const r = void 0 === t ? n?.window[e] : 48 === t ? n?.view48[e] : void 0;
	if (r) return {
		start: r[0],
		end: r[1]
	};
	const a = await (i ?? k()).analysisWindowBounds(e, t);
	return a ? {
		start: a[0],
		end: a[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function Qt(e, t, n) {
	const i = e instanceof Float64Array ? e : Float64Array.from(e), [r, a] = await (n ?? k()).analysisWindowSlice(i, t);
	return {
		startIndex: r,
		endIndex: a
	};
}
async function en(e, t = k()) {
	const n = [...new Set(e)], i = await t.analysisDatesOf(Float64Array.from(n)), r = new Map(n.map((e, t) => [e, i[t] ?? ""]));
	return (e) => r.get(e) ?? "";
}
Object.fromEntries(Object.values(ue).map((e) => [e, e === ue.ggir_saved ? oe : De(e)]));
var tn = n({
	nightPeriodMetrics: () => an,
	spanningSeries: () => rn,
	storeNightPeriodMetrics: () => sn
});
function nn(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [i, r] of Object.entries(Fe(e, e.nonwearChoiAxis ?? je()))) r && (n[t[i] ?? i] = new Uint8Array(r));
	return n;
}
async function rn(e, t, n, i = {}) {
	const { signal: r, includeNonwearMasks: a = !1 } = i, s = e.get(t), o = It(s, n), l = a && s ? nn(s) : {}, c = e.get(i.nextDate ?? await Pe(t, void 0, W(r))), d = o.timestamps[o.timestamps.length - 1], u = c ? It(c, n) : null, m = u?.timestamps[0], p = void 0 !== c && null !== u && void 0 !== d && void 0 !== m && m > d, g = o.scoresStale ?? u?.scoresStale ?? null;
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
	const f = o.timestamps.length, h = f + u.timestamps.length, _ = o.algorithmResults.length >= f && u.algorithmResults && u.algorithmResults.length >= u.timestamps.length ? new Uint8Array(h) : null;
	_?.set(o.algorithmResults.subarray(0, f)), u.algorithmResults && _?.set(u.algorithmResults.subarray(0, h - f), f);
	const w = o.activity && u.activity ? new Float64Array(h) : null;
	o.activity && w?.set(o.activity.subarray(0, f)), u.activity && w?.set(u.activity.subarray(0, h - f), f);
	const v = a ? nn(c) : {}, y = {};
	for (const b of Zt) {
		const e = l[b], t = v[b];
		if (!e && !t) continue;
		const n = new Uint8Array(h);
		e && n.set(e.subarray(0, f)), t && n.set(t.subarray(0, h - f), f), y[b] = n;
	}
	return {
		timestamps: [...o.timestamps, ...u.timestamps],
		algorithmResults: _,
		activity: w,
		masks: y,
		scoresStale: null
	};
}
async function an(e, t, n, i) {
	const { date: r, file: a, activityMap: s, verdict: o } = t, l = t.spanning ?? await rn(s, r, o, { signal: i });
	if (null !== l.scoresStale || !l.algorithmResults) return e.sleepMarkers.map(() => null);
	const c = function(e, t) {
		return JSON.stringify([
			t.seriesRevision ?? 0,
			t.epochLengthSeconds || 60,
			e.algorithm,
			e.sleepMarkers.map((e) => [e.onsetTimestamp ?? null, e.offsetTimestamp ?? null])
		]);
	}(e, a);
	if (e.periodMetrics?.inputs === c) return e.periodMetrics.metrics;
	const { timestamps: d, algorithmResults: u } = l, m = [];
	for (const p of e.sleepMarkers) m.push(u && d.length > 0 && p.onsetTimestamp && p.offsetTimestamp ? await xt(u, l.activity ?? new Float64Array(u.length), l.timestamps, p.onsetTimestamp, p.offsetTimestamp, a.epochLengthSeconds || 60, i) : null);
	if (void 0 !== e.id) try {
		await G(n, [n.markers], () => Ce(e.id, {
			inputs: c,
			metrics: m
		}, n), i);
	} catch {
		i?.throwIfAborted();
	}
	return m;
}
async function sn(e, t, n, i) {
	const r = await n.files.get(e.fileId);
	if (!r) return;
	const a = /* @__PURE__ */ new Map();
	for (const s of [e.date, await Pe(e.date, void 0, W(i))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, s]).first();
		t && a.set(s, t);
	}
	await an(e, {
		date: e.date,
		file: r,
		activityMap: a,
		verdict: t
	}, n, i);
}
const on = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], ln = ["under-series", "over-series"], cn = ["full-resolution-v1", "min-max-gap-envelope-v1"], dn = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function un(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function mn(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? un(t, "expected an object") : e;
}
function pn(e, t) {
	return Array.isArray(e) ? e : un(t, "expected an array");
}
function gn(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : un(t, "expected a finite number");
}
function fn(e, t) {
	const n = gn(e, t);
	return n <= 0 ? un(t, "expected a positive number") : n;
}
function hn(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : un(t, "expected a safe integer");
}
function _n(e, t) {
	const n = hn(e, t);
	return n < 0 ? un(t, "expected a non-negative safe integer") : n;
}
function wn(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? un(t, "expected a boolean") : { [n]: e };
}
function vn(e, t) {
	return "string" != typeof e || 0 === e.length ? un(t, "expected a non-empty string") : e;
}
function yn(e, t) {
	return "string" == typeof e && on.includes(e) ? e : un(t, "expected a supported tone");
}
function bn(e, t) {
	return "string" == typeof e && ln.includes(e) ? e : un(t, "expected a supported phase");
}
function kn(e, t) {
	const n = mn(e, t), i = gn(n.min, `${t}.min`), r = gn(n.max, `${t}.max`);
	return r <= i || !Number.isFinite(r - i) ? un(t, "expected a finite ascending range") : {
		min: i,
		max: r
	};
}
function Mn(e, t) {
	const n = `series[${t}]`, i = mn(e, n), r = pn(i.points, `${n}.points`);
	let a = Number.NEGATIVE_INFINITY;
	const s = (e) => `${n}.points[${e}]`, o = r.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return un(s(t), "expected an object");
		const n = e, i = n.timestamp;
		if ("number" != typeof i || !Number.isFinite(i)) return un(`${s(t)}.timestamp`, "expected a finite number");
		if (i <= a) return un(`${s(t)}.timestamp`, "expected strictly ascending timestamps");
		a = i;
		const r = n.value;
		return null === r || "number" == typeof r && Number.isFinite(r) ? {
			timestamp: i,
			value: r
		} : un(`${s(t)}.value`, "expected a finite number");
	});
	return {
		tone: yn(i.tone, `${n}.tone`),
		strokeWidth: fn(i.strokeWidth, `${n}.strokeWidth`),
		valueDomain: kn(i.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function Sn(e, t) {
	const n = `overlays[${t}]`, i = mn(e, n), r = {
		phase: bn(i.phase, `${n}.phase`),
		order: hn(i.order, `${n}.order`),
		tone: yn(i.tone, `${n}.tone`)
	};
	if ("interval" === i.kind) {
		const e = gn(i.startTimestamp, `${n}.startTimestamp`), t = gn(i.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? un(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...r,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === i.kind ? {
		kind: "threshold",
		...r,
		value: gn(i.value, `${n}.value`),
		...wn(i.draggable, `${n}.draggable`, "draggable"),
		...wn(i.selected, `${n}.selected`, "selected"),
		...wn(i.handle, `${n}.handle`, "handle"),
		...void 0 === i.label ? {} : { label: vn(i.label, `${n}.label`) }
	} : "instant" === i.kind ? {
		kind: "instant",
		...r,
		timestamp: gn(i.timestamp, `${n}.timestamp`)
	} : un(`${n}.kind`, "expected interval, threshold, or instant");
}
function Tn(e, t, n) {
	const i = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(i) ? i : un("projection", "expected a finite pixel coordinate");
}
function xn(e, t, n) {
	const i = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(i) ? i : un("projection", "expected a finite pixel coordinate");
}
function In(e) {
	if (!(e < 1e9 && e > -1e9)) {
		const t = Number(e.toFixed(2));
		return Object.is(t, -0) ? "0" : String(t);
	}
	const t = e.toFixed(2);
	let n = t.length;
	for (; 48 === t.charCodeAt(n - 1);) n -= 1;
	46 === t.charCodeAt(n - 1) && (n -= 1);
	const i = n === t.length ? t : t.slice(0, n);
	return "-0" === i ? "0" : i;
}
function An(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Rn(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, i = t.plotArea.height, r = dn[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const a = An(Tn(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), s = An(Tn(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${In(a)}" y="0" width="${In(Math.max(1, s - a))}" height="${In(i)}" fill="${r}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const a = xn(e.value, t.valueDomain, i), s = !0 === e.selected, o = s ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${s ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${In(a)}" x2="${In(n)}" y2="${In(a)}" stroke="${r}" stroke-width="${s ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const a = Tn(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${In(a)}" y1="0" x2="${In(a)}" y2="${In(i)}" stroke="${r}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function Nn(e) {
	const t = function(e) {
		const t = mn(e, "scene");
		if (2 !== t.version) return un("version", "expected 2");
		const n = mn(t.grid, "grid"), i = {
			strategy: (r = n.strategy, "string" == typeof r && cn.includes(r) ? r : un("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: _n(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: _n(n.renderedPointCount, "grid.renderedPointCount")
		};
		var r;
		if (i.renderedPointCount > i.sourcePointCount) return un("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === i.strategy && i.renderedPointCount !== i.sourcePointCount) return un("grid", "full-resolution strategy requires equal point counts");
		const a = mn(t.size, "size"), s = {
			width: fn(a.width, "size.width"),
			height: fn(a.height, "size.height")
		}, o = mn(t.plotArea, "plotArea"), l = {
			left: gn(o.left, "plotArea.left"),
			top: gn(o.top, "plotArea.top"),
			width: fn(o.width, "plotArea.width"),
			height: fn(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > s.width || l.top + l.height > s.height) return un("plotArea", "expected bounds contained by size");
		const c = kn(t.viewport, "viewport"), d = kn(t.valueDomain, "valueDomain"), u = pn(t.series, "series").map(Mn);
		if (0 === u.length && 0 !== i.renderedPointCount) return un("grid.renderedPointCount", "expected zero when series is empty");
		const m = u[0]?.points.map((e) => e.timestamp) ?? [];
		for (let h = 0; h < u.length; h++) {
			const e = u[h]?.points ?? [];
			if (e.length !== i.renderedPointCount) return un(`series[${h}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return un(`series[${h}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const p = pn(t.overlays, "overlays").map(Sn), g = null === t.cursorTimestamp ? null : gn(t.cursorTimestamp, "cursorTimestamp");
		let f = null;
		if (null !== t.selection) {
			const e = mn(t.selection, "selection"), n = gn(e.startTimestamp, "selection.startTimestamp"), i = gn(e.endTimestamp, "selection.endTimestamp");
			if (i <= n) return un("selection", "expected a half-open ascending interval");
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
			viewport: c,
			valueDomain: d,
			series: u,
			overlays: p,
			cursorTimestamp: g,
			selection: f
		};
	}(e), n = In(t.size.width), i = In(t.size.height), r = In(t.plotArea.width), a = In(t.plotArea.height), s = Rn(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
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
			const t = Tn(o.timestamp, n.viewport, a);
			let l = s.get(o.value);
			void 0 === l && (l = In(xn(o.value, e.valueDomain, n.plotArea.height)), s.set(o.value, l)), i += `${r ? "L" : "M"}${In(t)} ${l}`, r = !0;
		}
		return 0 === i.length ? "" : `<path data-series-index="${t}" d="${i}" fill="none" stroke="${dn[e.tone]}" stroke-width="${In(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = Rn(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${i}" viewBox="0 0 ${n} ${i}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${i}" fill="#ffffff"/><svg x="${In(t.plotArea.left)}" y="${In(t.plotArea.top)}" width="${r}" height="${a}" viewBox="0 0 ${r} ${a}" overflow="hidden"><rect x="0" y="0" width="${r}" height="${a}" fill="#ffffff"/>${s}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = An(Tn(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), i = An(Tn(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${In(n)}" y="0" width="${In(Math.max(1, i - n))}" height="${In(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = Tn(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${In(n)}" y1="0" x2="${In(n)}" y2="${In(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${In(t.plotArea.left)}" y="${In(t.plotArea.top)}" width="${r}" height="${a}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
var En = class extends Error {
	name = "ExportSnapshotTooLargeError";
	reason = "snapshot_too_large";
}, $n = class e extends Error {
	file;
	step;
	reason;
	constructor(e, t, n, i = Ln(n)) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t, this.reason = i;
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
function Ln(e) {
	return e instanceof $n || e instanceof En ? e.reason : e instanceof Error ? e.name : typeof e;
}
const Cn = 65536;
function On(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function Dn(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
function Fn(e) {
	return Date.parse(`${e}Z`) / 1e3;
}
function jn(e, t) {
	return e.filter((e) => "rest" === e.kind || "sleep" === e.kind).map((e) => ({
		kind: e.kind,
		source: e.source,
		startTimestamp: Fn(e.start),
		endTimestamp: Fn(e.end),
		origin: t ? "generated" : "stored",
		...e.analysis ? { analysis: e.analysis } : {}
	})).filter((e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.endTimestamp > e.startTimestamp).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Pn(e) {
	return e.map(({ start: e, end: t, ...n }) => ({
		...n,
		startTimestamp: Fn(e),
		endTimestamp: Fn(t)
	}));
}
x("epoch_5s");
var Gn = class extends Error {
	name = "ActiwareSleepContainmentError";
}, Bn = class extends Error {
	name = "ActiwareRestEditError";
};
const Wn = (e, t) => Math.round((t - e.startTimestamp) / e.epochSeconds);
function zn(e, t) {
	return e.startTimestamp + Wn(e, t) * e.epochSeconds;
}
const Un = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " "), Vn = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19);
function qn(e) {
	return {
		kind: e.kind,
		source: e.source,
		start: Vn(e.startTimestamp),
		end: Vn(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	};
}
async function Hn(e, { epochs: t, params: n, grid: i, core: r }) {
	if (0 === e.length) return [];
	const a = await r.actiwareIntervals(t, e.map(qn), n);
	if (!a || a.generated) throw new Error("The Actiware core did not derive the sleep inside these rest intervals.");
	const s = jn(a.intervals.filter((e) => "sleep" === e.kind), !0);
	return function(e, t) {
		const n = e.filter((e) => "rest" === e.kind);
		for (const i of e.filter((e) => "sleep" === e.kind)) {
			const e = Wn(t, i.startTimestamp), r = Wn(t, i.endTimestamp);
			if (!n.some((n) => e >= Wn(t, n.startTimestamp) && r <= Wn(t, n.endTimestamp))) throw new Gn(`Actiware sleep interval ${Un(i.startTimestamp)}–${Un(i.endTimestamp)} lies outside every rest interval.`);
		}
	}([...e, ...s], i), s;
}
const Kn = /* @__PURE__ */ new Map();
function Jn(e, t) {
	const n = JSON.stringify(e), i = Kn.get(n);
	if (i) return Kn.delete(n), Kn.set(n, i), i.catch(() => (Yn(n, i), Jn(e, t)));
	const r = t.actiwareNights(e);
	Kn.set(n, r);
	const a = Kn.keys().next();
	return Kn.size > 8 && !a.done && Kn.delete(a.value), r.catch(() => {
		Yn(n, r);
	}), r;
}
function Yn(e, t) {
	Kn.get(e) === t && Kn.delete(e);
}
async function Zn(e, t) {
	const n = e ?? [], i = 0 === n.length ? [] : await Jn(n.map(({ kind: e, startTimestamp: t, endTimestamp: n }) => ({
		kind: e,
		start: t,
		end: n
	})), t);
	return {
		intervals: n,
		byDate: new Map(i.map((e) => [e.date, e]))
	};
}
function Xn(e, t) {
	return e.byDate.get(t)?.rests.map((t) => e.intervals[t]) ?? [];
}
const Qn = ({ startTimestamp: e, endTimestamp: t }) => ({
	startTimestamp: e,
	endTimestamp: t
});
function ei(e, t) {
	const n = e.byDate.get(t);
	return n ? Qn(e.intervals[n.main_rest]) : null;
}
function ti(e, t) {
	const n = e.byDate.get(t);
	if (!n) return null;
	const i = (t) => Qn(e.intervals[t]);
	return {
		rest: i(n.main_rest),
		sleep: null === n.sleep ? null : i(n.sleep),
		...n.additional_sleeps.length > 0 ? { additionalSleeps: n.additional_sleeps.map(i) } : {}
	};
}
function ni(e, t) {
	const n = e.intervals.findIndex((e) => "rest" === e.kind && e.startTimestamp === t.startTimestamp && e.endTimestamp === t.endTimestamp);
	if (!(n < 0)) {
		for (const t of e.byDate.values()) if (t.rests.includes(n)) return t.date;
		return null;
	}
}
const ii = (e, t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp;
function ri(e, t, n) {
	const i = ti(e, t);
	return i ? [...i.sleep && !n ? [{
		onsetTimestamp: i.sleep.startTimestamp,
		offsetTimestamp: i.sleep.endTimestamp,
		markerIndex: 1,
		markerType: u.MAIN_SLEEP
	}] : [], ...(i.additionalSleeps ?? []).map((e, t) => ({
		onsetTimestamp: e.startTimestamp,
		offsetTimestamp: e.endTimestamp,
		markerIndex: t + 2,
		markerType: u.NAP
	}))] : [];
}
function ai(e, t, n, i) {
	return ri(t, n, i).map((t) => {
		const n = e.find((e) => e.markerType === t.markerType && e.onsetTimestamp === t.onsetTimestamp && e.offsetTimestamp === t.offsetTimestamp);
		return n ? {
			...n,
			markerIndex: t.markerIndex
		} : t;
	});
}
function si(e, t) {
	return {
		take: e.filter((e) => !t.includes(e)),
		put: t.filter((t) => !e.includes(t))
	};
}
function oi({ take: e, put: t }) {
	return {
		take: t,
		put: e
	};
}
const li = (e) => JSON.stringify([
	e.kind,
	e.source,
	e.origin,
	e.startTimestamp,
	e.endTimestamp,
	e.analysis ?? null,
	e.subjectiveScores ?? null
]);
async function ci(e, t, n, i) {
	const { intervals: r } = e, a = /* @__PURE__ */ new Set();
	for (const c of n.take) {
		const e = r.find((e) => !a.has(e) && li(e) === li(c));
		if (!e) throw new Bn("That rest interval changed since it was shown; reload the night.");
		a.add(e);
	}
	const s = r.filter((e) => !a.has(e)), o = n.put.filter((e) => "rest" === e.kind);
	for (const c of o) if (s.some((e) => "rest" === e.kind && e.startTimestamp < c.endTimestamp && e.endTimestamp > c.startTimestamp)) throw new Bn("A rest interval cannot overlap another rest interval.");
	const l = await Zn([...s, ...n.put].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), i);
	if (o.some((e) => ni(l, e) !== t)) throw new Bn("That rest interval would belong to another night.");
	return l;
}
function di({ take: e, put: t }) {
	const n = (e) => ({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	}), [i, r] = [e, t].map((e) => e.filter((e) => "rest" === e.kind).map(n)), [a] = i ?? [], [s] = r ?? [];
	return 1 === i?.length && 1 === r?.length && a && s ? [{
		edit: "move",
		from: a,
		to: s
	}] : [...(i ?? []).map((e) => ({
		edit: "remove",
		from: e,
		to: null
	})), ...(r ?? []).map((e) => ({
		edit: "add",
		from: null,
		to: e
	}))];
}
async function ui(e, t, n, i) {
	const { intervals: r } = e, a = Xn(e, t);
	if ("clear" === n.kind) return Zn(r.filter((e) => !(a.includes(e) || "sleep" === e.kind && a.some((t) => ii(e, t)))), i.core);
	const s = "move" === n.kind ? function(e, { from: t, to: n }) {
		const i = e.find((e) => e.startTimestamp === t.startTimestamp && e.endTimestamp === t.endTimestamp);
		if (i) return i;
		const r = e.filter((e) => n.startTimestamp === t.startTimestamp && e.startTimestamp === n.startTimestamp || n.endTimestamp === t.endTimestamp && e.endTimestamp === n.endTimestamp);
		return 1 === r.length ? r[0] : void 0;
	}(a, n) : "remove" === n.kind ? a.find((e) => ii(n.holding, e)) : void 0;
	if ("add" !== n.kind && !s) throw new Bn("That rest interval changed since it was shown; reload the night.");
	const o = r.filter((e) => e !== s && !(s && "sleep" === e.kind && ii(e, s)));
	if ("remove" === n.kind) return Zn(o, i.core);
	const { grid: l } = i, c = s?.analysis, d = {
		kind: "rest",
		source: "event_marker",
		origin: "scorer",
		startTimestamp: zn(l, n.to.startTimestamp),
		endTimestamp: zn(l, n.to.endTimestamp),
		...c ? { analysis: c } : {}
	};
	if (d.endTimestamp <= d.startTimestamp) throw new Bn("A rest interval must end after it starts.");
	if (o.some((e) => "rest" === e.kind && e.startTimestamp < d.endTimestamp && e.endTimestamp > d.startTimestamp)) throw new Bn("A rest interval cannot overlap another rest interval.");
	const u = await Hn([d], i), m = await Zn([
		...o,
		d,
		...u
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), i.core);
	if (ni(m, d) !== t) throw new Bn("That rest interval would belong to another night.");
	return m;
}
async function mi(e, t, n) {
	if (0 === t.length) return [...e];
	const i = e.filter((e) => {
		return "rest" === e.kind && (n = e, t.some((e) => n.startTimestamp < e.endTimestamp && n.endTimestamp > e.startTimestamp));
		var n;
	}), r = e.filter((e) => !(i.includes(e) || "sleep" === e.kind && i.some((t) => ii(e, t)))), a = await Hn(t, n);
	return [
		...r,
		...t,
		...a
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
const pi = [
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
], gi = (new Set(pi.slice(16).map(([e]) => e)), "actiware_intervals_export.csv"), fi = "actiware_sleep_wake_export.csv", hi = r.invalid_night_row.markerTypeCell, _i = new Set(pi.map(([, e]) => e));
function wi(t, n) {
	const i = t(e["start" === n ? "interval_start_date" : "interval_end_date"].header), r = t(e["start" === n ? "interval_start_time" : "interval_end_time"].header);
	return i && r ? `${i}T${r}` : "";
}
const vi = {
	metricColumn: (e) => _i.has(e),
	invalidNightRow: (t) => t(e.interval_kind.header) === hi,
	reasonFor({ column: t, value: n, producerReason: i, invalidNightRow: r, allRows: a, missing: s }) {
		if (r) return "invalid_night";
		const o = n(e.interval_kind.header).toLowerCase(), l = wi(n, "start");
		if ("daily" === o && l && l === wi(n, "end")) return "zero_interval_rows";
		if ([
			e.actiware_onset_latency.header,
			e.actiware_efficiency.header,
			e.actiware_waso.header
		].includes(t)) {
			if ("sleep" !== o) return "not_applicable_to_row";
			if (s(n(e.actiware_duration.header))) return null;
			const t = wi(n, "start"), i = wi(n, "end");
			if (!t || !i) return null;
			let r = !1;
			for (const s of a) if (s.get(e.filename.header) === n(e.filename.header) && "rest" === s.get(e.interval_kind.header) && wi((e) => s.get(e) ?? "", "start") <= t && i <= wi((e) => s.get(e) ?? "", "end")) {
				r = !0;
				break;
			}
			return r ? null : "no_eligible_rest";
		}
		if (s(n(e.actiware_duration.header))) return null;
		if (t === e.actiware_off_wrist.header || t === e.actiware_off_wrist_percent.header) return t === e.actiware_off_wrist_percent.header && "0.00" === n(e.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === i ? i : null;
		if (t === e.actiware_avg_ac_per_min.header) return 100 === Number(n(e.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			e.actiware_invalid_sw_percent.header,
			e.actiware_wake_percent.header,
			e.actiware_sleep_percent.header
		].includes(t)) {
			if ("0.00" === n(e.actiware_duration.header)) return "zero_interval_rows";
			const i = !s(n(e.actiware_wake_time.header)) && !s(n(e.actiware_sleep_time.header)) && 0 === Number(n(e.actiware_wake_time.header)) && 0 === Number(n(e.actiware_sleep_time.header));
			return t === e.actiware_invalid_sw_percent.header || 100 !== Number(n(e.actiware_invalid_sw_percent.header)) && !i ? null : "no_scored_epochs";
		}
		const c = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(t);
		if (c) {
			const r = c[1];
			return "0.00" === n(e.actiware_duration.header) ? "zero_interval_rows" : s(n("%Invalid " + r)) ? "source_reported_missing" === i ? i : null : t.startsWith("TALT ") && !s(n("Exposure " + r)) ? "threshold_unconfigured" : 100 === Number(n("%Invalid " + r)) ? "no_valid_epochs" : null;
		}
		return null;
	}
}, yi = {
	metricColumn: (t) => t === e.actiware_sleep_wake.header || t === e.actiware_wake_threshold.header,
	reasonFor: ({ column: t, producerReason: n }) => t === e.actiware_sleep_wake.header ? "no_valid_epochs" === n ? n : null : t === e.actiware_wake_threshold.header && "not_computed_for_export" === n ? n : null
}, ki = new Map(Object.entries({
	[gi]: vi,
	[fi]: yi
}));
var Mi = class extends Error {};
const Si = "edit_recompute_requires_ms2_ms3", Ti = /* @__PURE__ */ new Set([
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
]), xi = r.invalid_night_row.markerTypeCell, Ii = /* @__PURE__ */ new Set([
	e.ggir_sleepparam.header,
	e.ggir_guider_onset.header,
	e.ggir_guider_wakeup.header,
	e.ggir_guider_spt_duration.header,
	e.ggir_error_onset.header,
	e.ggir_error_wake.header,
	e.ggir_error_dur.header,
	e.ggir_fraction_night_invalid.header,
	e.ggir_duration_sib_wakinghours.header,
	e.ggir_number_sib_sleepperiod.header,
	e.ggir_number_sib_wakinghours.header,
	e.ggir_duration_sib_wakinghours_atleast15min.header,
	e.ggir_guider_onset_ts.header,
	e.ggir_guider_wakeup_ts.header,
	e.ggir_page.header,
	e.ggir_daysleeper.header,
	e.ggir_sleeplog_id.header,
	e.ggir_guider.header,
	e.ggir_longitudinal_axis.header
]), Ai = /* @__PURE__ */ new Set([
	e.ggir_sleep_duration_in_spt.header,
	e.ggir_waso.header,
	e.ggir_number_of_awakenings.header,
	e.ggir_sleeplatency.header,
	e.ggir_sleepefficiency.header
]), Ri = /* @__PURE__ */ new Set([
	...Ai,
	e.ggir_nonwear_perc_spt.header,
	e.ggir_sleeponset.header,
	e.ggir_wakeup.header,
	e.ggir_spt_duration.header,
	e.ggir_guider_onset.header,
	e.ggir_guider_wakeup.header,
	e.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	e.ggir_sleeponset_ts.header,
	e.ggir_wakeup_ts.header,
	e.ggir_guider_onset_ts.header,
	e.ggir_guider_wakeup_ts.header,
	e.ggir_daysleeper.header,
	e.ggir_cleaningcode.header,
	e.ggir_guider.header,
	e.ggir_error_onset.header,
	e.ggir_error_wake.header,
	e.ggir_error_dur.header,
	e.ggir_fraction_night_invalid.header,
	e.ggir_duration_sib_wakinghours.header,
	e.ggir_number_sib_sleepperiod.header,
	e.ggir_number_sib_wakinghours.header,
	e.ggir_duration_sib_wakinghours_atleast15min.header
]), Ni = /* @__PURE__ */ new Set([
	e.ggir_id.header,
	e.ggir_filename.header,
	e.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	e.ggir_sleep_regularity_index1.header,
	e.ggir_sri_fraction_valid.header,
	e.ggir_calendar_date.header,
	e.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	e.ggir_cleaningcode.header,
	e.ggir_guider.header,
	e.ggir_sleeplog_used.header,
	e.ggir_acc_available.header,
	e.ggir_daysleeper.header
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
]), Li = new Set(Object.values(e).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), Ci = new Set(Object.values(e).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), Oi = new Set(Object.values(t).map((e) => e.reviewSource)), Di = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim()), Fi = Di, ji = "refusal_detail_missing_reason";
function Pi(t, n, i, r) {
	const a = (e) => i.get(e) ?? "", s = a(n + "_missing_reason");
	if (s && !Ti.has(s)) return null;
	const o = s || null;
	if (t.startsWith("part2_")) return "source_reported_missing";
	if (t.includes("_ggir_review")) {
		if (o) return o;
		const e = a("review_source");
		return Oi.has(e) ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const l = ki.get(t), c = a(e.marker_type.header) === xi || (l?.invalidNightRow?.(a) ?? !1);
	if (!function(t, n) {
		const i = ki.get(t);
		return i ? i.metricColumn(n) : "physical_activity_export.csv" === t ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(n) : "sleep_export_wide.csv" === t ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(n) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(t) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(n) && ![
			e.ggir_id.header,
			e.ggir_filename.header,
			e.ggir_calendar_date.header,
			e.ggir_weekday.header,
			e.ggir_sleeplog_id.header,
			e.ggir_guider_corrected.header,
			e.ggir_cleaningcode.header
		].includes(n) : Li.has(n);
	}(t, n)) return o || (c ? "invalid_night" : "Manual Nonwear" === a(e.marker_type.header) ? "manual_nonwear_period" : null);
	if (l) return l.reasonFor({
		column: n,
		value: a,
		producerReason: o,
		invalidNightRow: c,
		allRows: r,
		missing: Fi
	});
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(t)) return Ii.has(n) ? "not_computed_for_export" === o ? o : null : Ai.has(n) ? "no_scored_epochs" === o || "not_applicable_to_row" === o || "scores_from_another_config" === o ? o : null : o;
	if ("sleep_export_wide.csv" === t) return o;
	if ("summary_export.csv" === t && n === e.sleep_regularity_index.header) return o && [
		"insufficient_pair",
		"no_scored_epochs",
		"no_valid_epochs",
		"not_computed_for_export",
		"scores_from_another_config"
	].includes(o) ? o : null;
	if ("physical_activity_export.csv" === t) {
		const e = a("Status"), t = a("Method");
		if ([
			"Epoch Length Seconds",
			"Native Epoch Seconds",
			"Mask Overlap Epochs"
		].includes(n)) return "Epoch Length Seconds" === n ? "ggir_enmo" === t ? "not_applicable_to_row" : null : "Native Epoch Seconds" === n ? "not_applicable" === a("Threshold Source") ? "not_applicable_to_row" : "source_reported_missing" === o ? o : null : "ggir_enmo" === t ? "not_applicable_to_row" : "needs_signal" === e ? "channel_unavailable" : "backend_required" === e ? "not_computed_for_export" : null;
		const i = {
			"Sedentary Max": "sedentaryMax",
			"Light Min": "lightMin",
			"Moderate Min": "moderateMin",
			"Vigorous Min": "vigorousMin"
		}[n];
		if (i && "not_applicable" === a("Threshold Source")) return "device_not_applicable";
		if ("needs_signal" === e) return "channel_unavailable";
		if ("backend_required" === e) return "not_computed_for_export";
		if ("ready" !== e) return null;
		const r = U.find((e) => e.method === t);
		return i && r?.cutpoint && !Number.isFinite(r.cutpoint[i]) || "MIMS Unit Total" === n && "mims" !== t ? "not_applicable_to_row" : "ggir_enmo" === t ? Ei.has(n) ? "source_reported_missing" === o ? o : null : $i.has(n) && "not_computed_for_export" === o ? o : null : "mims" === t && [
			"Sedentary Minutes",
			"Light Minutes",
			"Moderate Minutes",
			"Vigorous Minutes",
			"MVPA Minutes"
		].includes(n) ? "not_applicable_to_row" : "mims" !== t && "preschool_free_living_rf_3_5" !== t || ![
			"MVPA Bouts",
			"MVPA Bout Minutes",
			"Sedentary Bouts",
			"Sedentary Breaks",
			"Mean Sedentary Bout Minutes"
		].includes(n) ? "0.00" === a("Wake Wear Minutes") ? "no_valid_epochs" : null : "not_computed_for_export";
	}
	return /^nonwear_export(?:_|\.)/u.test(t) ? "Manual Nonwear" === a(e.marker_type.header) ? "manual_nonwear_period" : null : "true" === a(e.is_invalid_night.header).toLowerCase() && a(e.marker_type.header) === xi ? "invalid_night" : n === e.total_nap_minutes.header && "0" === a(e.nap_count.header) ? "not_applicable_to_row" : [
		e.l5_hour.header,
		e.m10_hour.header,
		e.sleep_midpoint_hour.header,
		e.valid_wear_minutes.header
	].includes(n) ? o && [
		"not_computed_for_export",
		"no_valid_epochs",
		"not_applicable_to_row"
	].includes(o) ? o : null : /^Mean (?:Temperature|White Light|Red Light|Green Light|Blue Light)/u.test(n) ? o && [
		"channel_unavailable",
		"no_valid_epochs",
		"not_applicable_to_row"
	].includes(o) ? o : null : o;
}
function Gi(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(P).join(","))].map((e) => e + "\n").join("");
}
function Bi(t, n) {
	const i = [
		e.filename.header,
		e.ggir_filename.header,
		"ggir_filename",
		e.participant_id.header,
		e.ggir_id.header,
		e.study_date.header,
		"Analysis Date",
		e.ggir_calendar_date.header,
		"ggir_calendar_date",
		e.interval_kind.header,
		e.marker_type.header,
		e.interval_start_date.header,
		e.interval_start_time.header,
		e.epoch_local.header,
		"Method"
	].flatMap((e) => {
		const n = t.get(e);
		return n ? [e + "=" + n] : [];
	});
	return i.length ? i.join("|") : "row=" + String(n);
}
function Wi(e, t) {
	let n = !1, i = 0;
	for (let r = 0; r < e.length; r += 1) if ("\"" === e[r]) n && "\"" === e[r + 1] ? r += 1 : n = !n;
	else if ("," === e[r] && !n && ++i === t) return e.slice(0, r);
	return e;
}
var zi = n({
	GgirReviewChangedError: () => or,
	editsFromMarkers: () => Qi,
	getGgirMarkerInputs: () => er,
	ggirInvalidNightDates: () => rr,
	ggirNightEdits: () => Xi,
	ggirNightRecords: () => Zi,
	ggirPersonReportsRecomputed: () => ar,
	hasGgirRecomputeFailure: () => Ki,
	mergeGgirSleepMarkers: () => Yi,
	recomputeGgirResults: () => ir,
	recoverPendingGgirRecomputes: () => sr,
	reviewGgirResultsForMarkers: () => ur,
	scheduleGgirRecompute: () => nr,
	storedGgirTailExpansion: () => dr
});
const Ui = new EventTarget(), Vi = /* @__PURE__ */ new WeakMap(), qi = 800, Hi = "Update GGIR review";
function Ki(e, t, n) {
	return N().jobs().jobs[`${n.name}:${tr(e, t)}`]?.status === q.FAILED;
}
function Ji(e, t, n, i, r) {
	if (r?.aborted || function(e) {
		return e instanceof Error && e.name === $.errnames.DatabaseClosed;
	}(i)) return;
	const a = tr(e, t), s = `${n.name}:${a}`, o = N().jobs();
	o.jobs[s]?.controller.signal.aborted || o.jobs[s]?.status === q.ELSEWHERE || (o.update(s, {
		id: s,
		key: a,
		workspaceId: n.name,
		kind: B.GGIR_RECOMPUTE,
		label: Hi,
		controller: o.jobs[s]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: q.FAILED
	}), n.isOpen() && z() === n && Ui.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function Yi(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function Zi(e, t, n, i = [], r, a = W(r)) {
	const s = te([...n.values()].flat(), !0), o = s?.algorithm ?? Ee(t), l = s?.detectionRule ?? null, c = /* @__PURE__ */ new Map();
	for (const [u, p] of n) {
		const e = te(p, !0);
		e && c.set(u, [{
			...e,
			algorithm: o,
			detectionRule: l
		}]);
	}
	const d = Re(t), m = d.length ? await a.ggirLabelsToStoredMs(Float64Array.from(d.flatMap((e) => [e.onsetMs, e.wakeMs])), i) : [];
	for (const [p, g] of d.entries()) {
		const t = c.get(g.nightDate)?.[0], n = Z(g, t);
		"scored" !== n.kind && "invalid" !== n.kind ? c.set(g.nightDate, [{
			fileId: e,
			date: g.nightDate,
			username: le,
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
			sleepMarkers: Yi({
				markerType: u.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: m[2 * p] / 1e3,
				offsetTimestamp: m[2 * p + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : c.set(g.nightDate, t ? [t] : []);
	}
	return c;
}
async function Xi(e, t, n, i = [], r, a = W(r)) {
	const s = await Zi(e, t, n, i, r, a), o = new Map([...s].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : []));
	return {
		markersByAlgo: s,
		selected: o,
		edits: await Qi(t, o, i, r, a)
	};
}
async function Qi(e, t, n = [], i, r = W(i)) {
	const a = Ne(e).flatMap((e) => {
		const n = Z(e, t.get(e.nightDate));
		return "scored" === n.kind && null != n.main.onsetTimestamp && null != n.main.offsetTimestamp ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === a.length) return [];
	const s = await r.storedToGgirLabelsMs(Float64Array.from(a.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await r.wallClockLabels(Float64Array.from([...s, ...a.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * a.length;
	return a.flatMap(({ w: e }, t) => {
		const n = o[2 * t], i = o[2 * t + 1];
		return n !== o[l + 2 * t] || i !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: i
		}] : [];
	});
}
async function er(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [i, r] = await Promise.all([ye(e, t, n), se(e, n)]), a = new Map([...i].flatMap(([e, t]) => {
			const n = te(t, !0);
			return n ? [[e, n]] : [];
		})), s = r?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([s ?? [], [...a].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				Z(void 0, t)
			])]),
			markers: a,
			clockSteps: s,
			bundleRevision: r?.ggirBundleRevision
		};
	});
}
function tr(e, t) {
	return `${B.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function nr(e, t, n, i) {
	if (!n.isOpen() || z() !== n || i?.aborted) return;
	let r = Vi.get(n);
	r || (r = /* @__PURE__ */ new Map(), Vi.set(n, r));
	const a = tr(e, t);
	clearTimeout(r.get(a)), r.set(a, setTimeout(() => {
		r.delete(a), n.files.get(e).then((r) => {
			if (r?.ggirBundleRevision && n.isOpen() && z() === n && !i?.aborted) return ir(e, t, n, i);
		}).catch((r) => {
			i?.aborted || r instanceof DOMException && "AbortError" === r.name || (Ji(e, t, n, r, i), n.isOpen() && z() === n && Te("error", "GGIR results recompute failed", ve(r)));
		});
	}, qi));
}
function ir(e, t, n, i, r = !0) {
	const a = (s, o = i) => V({
		kind: B.GGIR_RECOMPUTE,
		key: tr(e, t),
		label: Hi,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (i) => {
			i.signal.throwIfAborted();
			const o = await async function(e, t, n, i, r, a = { active: () => n.isOpen() && z() === n }) {
				if (i.throwIfAborted(), !a.active()) return null;
				const { markerInputs: s, markers: o, clockSteps: l, bundleRevision: c } = await er(e, t, n);
				if (!c) return null;
				const u = await n.ggirScorerReviews.get([e, t]);
				if (!a.active()) return null;
				i.throwIfAborted();
				if (u?.markerInputs === s && u.bundleRevision === c && (m = u, void 0 === a.correctedKey || 0 === m.edits.length || m.corrected?.key === a.correctedKey)) return r && Ui.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), u.current ?? null;
				var m;
				const p = await n.ggirResultsBundles.get(e);
				if (!p) return null;
				const { edits: g } = await Xi(e, p.imported, new Map([...o].map(([e, t]) => [e, [t]])), l, i, a.api);
				if (!a.active()) return null;
				const f = lr(u, c, g), h = void 0 !== a.correctedKey && g.length > 0 && !p.ggirCorrections && !(f && u.corrected?.key === a.correctedKey), _ = g.length > 0 && (!f || h) ? d(p, await n.ggirResultsBlobs.get(e)) : p, w = f ? u.current : (await ur(_, o, l, g, i, void 0, a.api)).current;
				let v = f ? u.corrected : void 0;
				if (h) {
					const t = await n.ggirCorrectedValues.get(e);
					if (!t || t.key !== a.correctedKey) return null;
					const r = $e(_, t).find((e) => "corrected" === e.set), s = r && (await ur(r.bundle, o, l, g, i, void 0, a.api)).current;
					v = {
						key: t.key,
						...s ? { current: s } : {}
					};
				}
				i.throwIfAborted();
				const y = (/* @__PURE__ */ new Date()).toISOString();
				if (!a.active()) return null;
				const b = await G(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!a.active()) return null;
					const r = await er(e, t, n);
					return r.markerInputs === s && r.bundleRevision === c && (0 === await n.ggirResultsBundles.where(":id").equals(e).count() ? null : (i.throwIfAborted(), await n.ggirScorerReviews.put({
						fileId: e,
						scorer: t,
						...w ? { current: w } : {},
						edits: g,
						markerInputs: s,
						bundleRevision: c,
						updatedAt: y,
						...v ? { corrected: v } : {}
					}), !0));
				}, i);
				return b ? (Ui.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), i.throwIfAborted(), w ?? _.imported) : (i.throwIfAborted(), !1 !== b && null);
			}(e, t, n, i.signal, r);
			if (i.signal.throwIfAborted(), !1 !== o) return o;
			if (s < 2) a(s + 1, i.signal).catch((r) => Ji(e, t, n, r, i.signal));
			else {
				const r = /* @__PURE__ */ new Error("The markers changed during every GGIR review attempt.");
				Te("error", "GGIR results recompute failed", ve(r)), Ji(e, t, n, r, i.signal);
			}
			return null;
		}
	});
	return a(0);
}
function rr(e) {
	return new Set([...e].filter(([, e]) => "invalid" === Z(void 0, e).kind).map(([e]) => e));
}
function ar(e, t, n) {
	return void 0 !== e && (t.length > 0 || n.size > 0);
}
function sr(e, t) {
	return V({
		kind: B.GGIR_RECOVERY,
		key: B.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = null;
			const i = () => !t.signal.aborted && e.isOpen() && z() === e;
			try {
				if (!i()) return;
				const a = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: s } = await import("./ggir-import-DOmLaZqR.js");
				for (const o of a) {
					if (t.signal.throwIfAborted(), !i()) return;
					try {
						const [n] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), s(o, e, t.signal)]), a = await e.markers.where("fileId").equals(o).toArray(), l = /* @__PURE__ */ new Set([...a.map((e) => e.username), ...n.map((e) => e.scorer)]);
						l.delete(le);
						for (const s of l) {
							if (!i()) return;
							try {
								const i = Ki(o, s, e);
								if (!i) {
									const { markerInputs: t, bundleRevision: i } = await er(o, s, e), r = n.find((e) => e.scorer === s);
									if (i && r?.markerInputs === t && r.bundleRevision === i) continue;
								}
								await ir(o, s, e, t.signal, i);
							} catch (r) {
								Ji(o, s, e, r, t.signal);
							}
						}
					} catch (r) {
						n ??= r;
					}
				}
			} catch (r) {
				n ??= r;
			} finally {
				t.signal.throwIfAborted();
				const a = Object.values(N().jobs().jobs).filter((t) => j(t) && t.workspaceId === e.name && t.kind === B.GGIR_RECOMPUTE && t.status === q.FAILED);
				for (const t of a) {
					const a = t.key.slice(B.GGIR_RECOMPUTE.length + 1);
					if (!i()) break;
					const s = a.indexOf(":"), o = Number(a.slice(0, s)), l = JSON.parse(a.slice(s + 1));
					try {
						await e.transaction("r", e.ggirResultsBundles, e.markers, e.ggirScorerReviews, async () => {
							if (!i()) return;
							const [n, r, a] = await Promise.all([
								e.ggirResultsBundles.where(":id").equals(o).count(),
								e.markers.where("fileId").equals(o).filter((e) => e.username === l).count(),
								e.ggirScorerReviews.where("[fileId+scorer]").equals([o, l]).count()
							]);
							i() && (0 === n || 0 === r && 0 === a) && (N().jobs().dismiss(t.id), Ui.dispatchEvent(new CustomEvent("updated", { detail: {
								fileId: o,
								scorer: l,
								db: e
							} })));
						});
					} catch (r) {
						n ??= r;
					}
				}
				null !== n && i() && (Te("error", "GGIR review recovery failed", ve(n)), N().jobs().update(`${e.name}:${B.GGIR_RECOVERY}`, { status: q.FAILED }));
			}
		}
	});
}
var or = class extends Error {
	constructor() {
		super("a night of this recording was edited during the export; export again");
	}
};
function lr(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
function cr(e, t) {
	const n = (e) => e ? new Uint8Array(e) : void 0, i = n(e.ms2), r = n(e.ms3), a = n(e.ms4), s = n(e.ms5), o = n(e.sleeplogRData);
	return {
		part1: new Uint8Array(e.part1),
		configCsv: e.configCsv,
		recordingId: D(e.recordingFile),
		...i ? { ms2: i } : {},
		...r ? { ms3: r } : {},
		...a ? { ms4: a } : {},
		...s ? { ms5: s } : {},
		...o ? { sleeplogRData: o } : {},
		...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
		edits: t,
		...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
		crossCheck: !1
	};
}
async function dr(e, t) {
	return Object.hasOwn(e, "part1") ? (await O(t, (t) => t.reviewGgirResults(cr(e, [])))).tailExpansion : null;
}
async function ur(e, t, n = [], i, r, a, s) {
	const o = i ?? await Qi(e.imported, t, n, r, s);
	let l;
	r?.throwIfAborted();
	const c = a?.review;
	if (lr(c, a?.bundleRevision, o)) l = c.current;
	else {
		if (a && o.length > 0 && !e.part1) throw new or();
		if (o.length > 0 && e.ms2 && e.ms3) {
			const t = (t) => t.reviewGgirResults(cr(e, o));
			l = Ie(await (s ? t(s) : O(r, t)));
		}
	}
	r?.throwIfAborted();
	const d = Object.getOwnPropertyDescriptors(e);
	return delete d.current, Reflect.deleteProperty(d, "edits"), Object.defineProperties({
		...l ? { current: l } : {},
		edits: o
	}, d);
}
const mr = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], pr = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : P(String(e)), gr = (c.part4_night_review, c.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function fr(e, n, i = "") {
	return c[e].replace("{report}", i.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${t[n].filenameSuffix}.csv`);
}
function hr(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return J(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? J(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function _r(t, n) {
	const i = new Map(Ne(t).map((e) => [e.night, e.nightDate]));
	return (t, r, a = !0) => {
		const s = t.columns.indexOf("nights" === n ? e.ggir_night.header : "night_number"), o = Number(t.values[s]?.[r]), l = i.get(o);
		if (a && l) return l;
		const c = t.values[t.columns.indexOf(e.ggir_calendar_date.header)]?.[r];
		return hr(c);
	};
}
function wr(e, t, n) {
	const i = /* @__PURE__ */ new Map(), r = (e, t) => {
		void 0 !== e && i.set(e, [i.get(e), t].filter(Boolean).join(" "));
	}, s = e.unreadableWindowRows.filter(n);
	var o;
	s.length > 0 && r(s[0], (o = s.length, `${String(o)} ${1 === o ? "day row of this recording has a GGIR window (start_end_window) that cannot be read, so it is" : "day rows of this recording have a GGIR window (start_end_window) that cannot be read, so each is"} marked not recomputed after a night edit.`));
	const l = e.rows.filter((i) => n(i) && e.undatedEditNights.includes(a(t, "night_number", i) ?? NaN)), c = e.undatedEditNights.filter((e) => l.some((n) => a(t, "night_number", n) === e));
	var d;
	return c.length > 0 && r(l[0], `${1 === (d = c).length ? "Night" : "Nights"} ${d.join(", ")} of this recording ${1 === d.length ? "was" : "were"} edited, but GGIR saved no window for ${1 === d.length ? "it" : "them"} to date the edit on, so only ${1 === d.length ? "that night's" : "those nights'"} own day rows are marked not recomputed.`), i;
}
async function vr(n, i, r, s) {
	const c = "nights" === i ? e.ggir_night.header : "window_number", d = W(r), u = await Promise.all(n.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await Le(e.imported, e.edits, t.night, r)])))), m = (await Promise.all(n.map(async (e, n) => {
		const r = e.current ?? e.imported, a = (e) => "nights" === i ? e.nights : e.days, s = "nights" === i ? r.nightRecomputed : r.dayRecomputed, o = "nights" === i ? e.imported.nightChecks : e.imported.dayChecks, l = u[n].filter((e) => null != e[1]), c = _r(e.imported, i), m = new Set(e.edits.map((e) => e.night)), p = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, g = "days" === i && p ? await d.ggirDayRowsTouchedByEdits({
			days: r.days,
			sleepWindows: e.imported.sleepWindows,
			edits: e.edits
		}) : null;
		return {
			source: t[gr(e)].reviewSource,
			editedDayRows: new Set(g?.rows),
			refusalDetails: g ? wr(g, r.days, (t) => {
				const n = c(r.days, t);
				return !e.scoredDates || void 0 !== n && e.scoredDates.has(n);
			}) : /* @__PURE__ */ new Map(),
			editRecomputeUnavailable: p,
			editedNights: m,
			scoredDates: e.scoredDates,
			invalidDates: e.invalidDates,
			dateOf: c,
			table: a(r),
			ggir: a(e.imported),
			savedNights: e.imported.nights,
			recomputed: s,
			provenance: (e) => "nights" === i ? l.find(([t]) => t === e)?.[1] ?? "" : l.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(o.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === m.length) return null;
	const p = s ? s.filter((e) => !e.endsWith("_missing_reason") && !mr.includes(e)) : [];
	for (const e of s ? [] : m) for (const t of e.table.columns) t.endsWith("_missing_reason") || p.includes(t) || p.push(t);
	const g = new Set("nights" === i ? o.ggir_review_night_extension.map((t) => e[t].header) : []), f = mr.map((e) => e + "_missing_reason"), h = s ? s.filter((e) => e.endsWith("_missing_reason") && !f.includes(e)) : [...p.filter((e) => g.has(e) || m.some((e) => e.editRecomputeUnavailable || e.source === t.corrected.reviewSource)).map((e) => e + "_missing_reason"), ...m.some((e) => e.refusalDetails.size > 0) ? [ji] : []], _ = [[
		...p.map(P),
		...mr,
		...h.map(P),
		...f
	].join(",")], w = (e, t) => {
		const n = e.columns.indexOf(c);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: t, ggir: o, recomputed: v, provenance: y, checks: b, scoredDates: k, invalidDates: M, dateOf: S, editRecomputeUnavailable: T, editedNights: x, editedDayRows: I, refusalDetails: A, savedNights: R, source: N } of m) {
		const n = R.columns.filter((e) => !Ri.has(e)), r = n.filter((t) => {
			const n = R.columns.indexOf(t), i = /* @__PURE__ */ new Map();
			return R.values[n].some((t, n) => {
				const r = Number(R.values[R.columns.indexOf(e.ggir_night.header)]?.[n]), a = i.has(r) && !Object.is(i.get(r), t);
				return i.set(r, t), a;
			});
		}), s = /* @__PURE__ */ new Set(), c = (e) => Array.from({ length: o.rows }, (e, t) => t).find((n) => !s.has(n) && w(o, n) === w(t, e) && r.every((i) => Object.is(o.values[o.columns.indexOf(i)]?.[n] ?? null, t.values[t.columns.indexOf(i)]?.[e] ?? null))), d = new Set(p.filter((e) => "nights" === i ? Ri.has(e) : !Ni.has(e) && !n.includes(e))), u = (t, r, s, c) => {
			const u = b.get(w(t, r));
			return [
				...p.map((e) => {
					if ("invalid" === s && ("nights" === i ? Ri.has(e) : /sleep|spt|waso|wake|onset|guider/i.test(e) && !n.includes(e))) return "";
					const a = t.columns.indexOf(e);
					return a < 0 ? "" : pr(t.values[a]?.[r]);
				}),
				s,
				u?.status ?? "",
				P((u?.reasons ?? []).join(";")),
				P((u?.diffs ?? []).map((e) => e.column).join(";")),
				P(c),
				...h.map((n) => {
					if ("refusal_detail_missing_reason" === n) return s === N && t === o ? P(A.get(r) ?? "") : "";
					const c = n.slice(0, -15);
					return "invalid" !== s || g.has(c) && c !== e.ggir_nonwear_perc_spt.header ? T && s === N && d.has(c) && ("days" === i ? I.has(r) : x.has(w(t, r))) ? Si : g.has(c) ? null != a(t, c, r) ? "" : pr(l(t, c + "_missing_reason", r) ?? "source_reported_missing") : s === N ? "source_reported_missing" : "not_computed_for_export" : "invalid_night";
				}),
				"",
				u ? "" : "not_computed_for_export",
				u?.reasons.length ? "" : "not_applicable_to_row",
				u?.diffs.length ? "" : "not_applicable_to_row",
				c ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let e = 0; e < t.rows; e += 1) {
			const n = S(t, e);
			if (k && (!n || !k.has(n))) continue;
			const i = c(e);
			if (null != i && s.add(i), n && M?.has(n)) {
				null != i && _.push(u(o, i, N, "")), _.push(u(t, e, "invalid", ""));
				continue;
			}
			if (!v[e]) {
				_.push(u(t, e, N, ""));
				continue;
			}
			const r = w(t, e);
			null != i && _.push(u(o, i, N, "")), _.push(u(t, e, "recomputed", y(r)));
		}
		for (let e = 0; e < o.rows; e += 1) {
			if (s.has(e)) continue;
			const t = S(o, e);
			(!k || t && k.has(t)) && (_.push(u(o, e, N, "")), t && M?.has(t) && _.push(u(o, e, "invalid", "")));
		}
	}
	return _.length > 1 ? `${_.join("\n")}\n` : null;
}
function yr(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const i of e) for (const [e, t] of Object.entries(i.part2Reports ?? {})) {
		const r = fr("part2_report", gr(i), e);
		n.set(r, [...n.get(r) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const i = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], r = [i.map(P).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) r.push(i.map((n) => pr(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, r.join("\n") + "\n"];
	}));
}
Object.keys(t).map((e) => fr("person_summary_review", e));
const br = (e, t) => Ne(e).filter((e) => t?.has(e.nightDate));
async function kr(t, n, i) {
	if (t.edits.length > 0 && !t.current) return {
		reason: Si,
		detail: ""
	};
	const r = t.current ?? t.imported, a = W(i);
	try {
		const s = r.tailExpansion ?? t.imported.tailExpansion ?? await dr(t, i);
		if (null === s) throw new Error("The export snapshot did not carry the GGIR milestones this person report reads its tail expansion from.");
		const { ggirVersion: o } = await a.ggirConfigValues(t.configCsv), { profile: c, reports: d } = await a.ggirPersonSummaries({
			ggir_version: o ?? "",
			corrections: t.ggirCorrections ? "corrected" : "stock",
			config_csv: t.configCsv,
			nights: r.nights,
			days: r.days,
			tail_expansion: s,
			data_cleaning_csv: t.dataCleaningCsv ?? null,
			recording_id: String(l(r.nights, e.ggir_id.header, 0) ?? ""),
			invalid_nights: br(t.imported, n).map((e) => e.night),
			person_columns: Object.fromEntries(Object.entries(t.personReports ?? {}).flatMap(([e, t]) => t.rows > 0 ? [[e, t.columns]] : []))
		});
		return {
			profile: c,
			reports: d
		};
	} catch (s) {
		return i?.throwIfAborted(), Te("error", "GGIR person summary recompute failed", ve(s)), {
			reason: "not_computed_for_export",
			detail: "the GGIR engine could not aggregate this recording's person-level report from its night and day rows"
		};
	}
}
async function Mr(n, i, r) {
	const a = /* @__PURE__ */ new Map(), s = await Promise.all(n.map(async (e) => {
		const t = br(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (t) => {
			const n = await Le(e.imported, e.edits, t.night, i);
			return null == n ? [] : [`night ${String(t.night)} ${n}`];
		}))).flat(), ...t].join("; ");
	}));
	for (const [e, l] of n.entries()) {
		const n = gr(l), i = s[e], r = l.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [e, s] of Object.entries(l.personReports ?? {})) {
			if (0 === s.rows) continue;
			const o = fr("person_summary_review", n, e), l = "reason" in r ? r : r.reports[e] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${e}`
			};
			a.set(o, [...a.get(o) ?? [], {
				table: s,
				source: t[n].reviewSource,
				edit: i,
				recomputed: l
			}]);
		}
	}
	const o = /* @__PURE__ */ new Set([e.ggir_id.header, e.ggir_filename.header]);
	return Object.fromEntries([...a].map(([e, t]) => {
		const n = r?.get(e), i = [...new Set(t.flatMap(({ table: e }) => e.columns))], a = (n ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : function(e, t) {
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
		}(e, t.columns), i)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !mr.includes(e)), s = mr.map((e) => e + "_missing_reason"), l = n?.filter((e) => e.endsWith("_missing_reason") && !s.includes(e)) ?? ["refusal_detail_missing_reason", ...a.map((e) => e + "_missing_reason")], c = [[
			...a,
			...mr,
			...l,
			...s
		].map(P).join(",")], d = (e, t) => [
			e,
			"",
			"",
			"",
			P(t)
		], u = (e) => [
			"",
			"not_computed_for_export",
			"not_applicable_to_row",
			"not_applicable_to_row",
			e ? "" : "not_applicable_to_row"
		], m = (e, t) => (n) => pr(e.values[e.columns.indexOf(n)]?.[t]), p = (e) => l.map((t) => e.get(t) ?? ""), g = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
		for (const { table: r, source: f, edit: h, recomputed: _ } of t) for (let e = 0; e < r.rows; e++) {
			const t = a.map(m(r, e)), n = new Map(a.flatMap((e) => g.get(r).has(e) ? [] : [[e + "_missing_reason", "not_applicable_to_row"]]));
			if (c.push([
				...t,
				...d(f, ""),
				...p(n),
				...u("")
			].join(",")), !h) continue;
			const i = "reason" in _ ? _ : 0 === _.rows ? {
				reason: "no_retained_nights",
				detail: ""
			} : null, s = "reason" in _ ? null : m(_, 0), l = a.map((e, n) => o.has(e) ? t[n] : s?.(e) ?? ""), w = new Map(a.flatMap((e, t) => Di(l[t]) ? [[e + "_missing_reason", i?.reason ?? "not_applicable_to_row"]] : []));
			i?.detail && w.set(ji, P(`ggirPersonSummaries: ${i.detail}`)), c.push([
				...l,
				...d("recomputed", h),
				...p(w),
				...u(h)
			].join(","));
		}
		return [e, c.join("\n") + "\n"];
	}));
}
const Sr = o.ggir_part4_nightsummary_csv, Tr = Sr.map((t) => e[t].header), xr = [
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
], Ir = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function Ar(t, n) {
	const i = e[t], r = "number" == typeof n || "boolean" == typeof n || "string" == typeof n ? n : null;
	return "string" == typeof r ? P(r) : On(r, { integral: i.ggirIntegral ?? !1 });
}
function Rr(e, t = "legacy-recording", n, i) {
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
	}) : W(i).validStateFraction(s).then(async (e) => {
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
			})), [r, a] = Ht(n.map((e) => e.timestamps)), [s, o] = Ht(n.map((e) => e.states));
			return W(t).sleepRegularityIndex(h([
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
async function Nr(t, n, i, r = {}) {
	const { signal: a } = r, s = t.participantId ?? t.filename, o = ce(i.values(), r.algorithm), l = [];
	for (const [e, u] of i) {
		if (!Pr(e, r.dateRange)) continue;
		const { timestamps: t, algorithmResults: n } = It(u, o);
		l.push({
			timestamps: t,
			states: n
		});
	}
	const c = await Rr(l, null != t.id ? String(t.id) : t.filename, t.epochLengthSeconds || 60, a), { sri: d, fractionValid: m } = c, p = "stale" === o.status ? "scores_from_another_config" : null, g = p ?? c.sriMissingReason, f = p ?? c.fractionValidMissingReason, h = [];
	for (const e of [...n.keys()].sort()) {
		const t = n.get(e);
		if (!t.isInvalidNight) for (const n of t.sleepMarkers) n.markerType === u.MAIN_SLEEP && null != n.onsetTimestamp && h.push({
			date: e,
			onsetTs: n.onsetTimestamp,
			wakeupTs: n.offsetTimestamp ?? null
		});
	}
	const _ = [[
		...Tr,
		...xr.map((t) => `${e[t].header}_missing_reason`),
		...Ir.map((t) => `${e[t].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], w = [];
	for (const { date: e, onsetTs: u, wakeupTs: y } of h) {
		let n = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == y ? "not_applicable_to_row" : p ?? "no_scored_epochs"
		};
		if (null != y) {
			const { timestamps: r, algorithmResults: s } = await rn(i, e, o, { signal: a });
			if (s && r.length > 0) {
				n.missingReason = null;
				const e = await Tt(s, r, u, y, t.epochLengthSeconds || 60, null, a);
				e && (n = {
					tstH: e.ggirSleepDurationInSptMinutes / 60,
					nAwak: e.numberOfAwakenings,
					latency: e.sleepOnsetLatencyMinutes / 60,
					efficiency: e.sleepEfficiency / 100,
					missingReason: null
				});
			}
		}
		w.push(n);
	}
	const v = await W(a).ggirManualNightClocks(h.map((e) => e.date), Float64Array.from(h, (e) => e.onsetTs), Float64Array.from(h, (e) => e.wakeupTs ?? NaN), Float64Array.from(w, (e) => e.tstH ?? NaN));
	for (let e = 0; e < h.length; e++) {
		const { onsetTs: n, wakeupTs: i } = h[e], r = v[e], { tstH: a, nAwak: o, latency: l, efficiency: c } = w[e], u = {
			ggir_id: s,
			ggir_night: e + 1,
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
			ggir_sleep_duration_in_spt: a,
			ggir_waso: r?.waso ?? null,
			ggir_duration_sib_wakinghours: null,
			ggir_number_sib_sleepperiod: null,
			ggir_number_of_awakenings: o,
			ggir_number_sib_wakinghours: null,
			ggir_duration_sib_wakinghours_atleast15min: null,
			ggir_sleeponset_ts: n,
			ggir_wakeup_ts: i,
			ggir_guider_onset_ts: null,
			ggir_guider_wakeup_ts: null,
			ggir_sleeplatency: l,
			ggir_sleepefficiency: c,
			ggir_page: null,
			ggir_daysleeper: null,
			ggir_weekday: r?.weekday ?? null,
			ggir_calendar_date: r?.calendarDate ?? null,
			ggir_filename: t.filename,
			ggir_cleaningcode: r?.cleaningcode ?? null,
			ggir_sleeplog_used: !1,
			ggir_sleeplog_id: null,
			ggir_acc_available: !0,
			ggir_guider: null,
			ggir_sleep_regularity_index1: d,
			ggir_sri_fraction_valid: m,
			ggir_longitudinal_axis: null,
			ggir_guider_corrected: !1
		};
		_.push([
			...Sr.map((e) => Ar(e, u[e])),
			...xr.map((e) => {
				const t = Sr.indexOf(e);
				return t >= 0 && null == u[Sr[t]] ? "not_computed_for_export" : "";
			}),
			...Ir.map((t) => {
				const n = Sr.indexOf(t);
				return n >= 0 && null == u[Sr[n]] ? w[e].missingReason ?? "" : "";
			}),
			g ?? "",
			f ?? ""
		].join(","));
	}
	return _.join("\n") + "\n";
}
function Er(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function $r(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function Lr(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function Cr(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: i } = $r(n), r = [e, i].filter(Boolean);
		t.set(n, 0 === r.length ? "part4_nightsummary.csv" : `part4_nightsummary_${r.join("_")}.csv`);
	}
	return t;
}
function Or(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : _e(e);
}
function Dr(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function* Fr(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let i = Math.min(e.length, n + Cn / 4);
		i < e.length && /[\uD800-\uDBFF]/u.test(e[i - 1]) && (i -= 1), yield t.encode(e.slice(n, i)), n = i;
	}
	yield t.encode("\n");
}
function jr(e) {
	return new TextEncoder().encode(e);
}
function Pr(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function Gr(e, n, i) {
	i?.throwIfAborted();
	const r = function(e, n) {
		const { signal: i } = n, { username: r, dateRange: a, snapshot: s } = e, o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = [];
		return {
			addFiles: async (e) => {
				const t = Qa(s, Va.ggirReport, e.map((e) => e.id)), u = await Promise.all(e.map((e) => bs(s, e.id, r, i)));
				for (const [r, s] of e.entries()) {
					const e = t.files.find((e) => e.id === s.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (i?.throwIfAborted(), !e.id) continue;
					const { bundle: m, sets: p, markersByAlgo: g, invalidDates: f } = u[r], h = is(t, e.id), _ = new Map([...g].filter(([e]) => Pr(e, a))), w = /* @__PURE__ */ new Map();
					for (const [t, n] of _) for (const e of n) {
						const n = Lr(e);
						let i = w.get(n);
						i || (i = /* @__PURE__ */ new Map(), w.set(n, i)), i.set(t, e);
					}
					const v = /* @__PURE__ */ new Set();
					for (const [t, n] of _) for (const e of n) M(e) && v.add(t);
					if (m) for (const t of p) d.push({
						...t,
						...a ? { scoredDates: new Set(e.availableDates.filter((e) => Pr(e, a))) } : {},
						invalidDates: f
					});
					const y = [...v].sort(), b = y[0], k = y[y.length - 1], S = [], T = [];
					for (const t of n.charts ? [...h.keys()].sort() : []) if (Pr(t, a) && (null == b || null == k || t >= b && t <= k)) {
						const e = h.get(t), n = xe({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), i = n.timestamps, r = new Float64Array(n.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let t = 0; t < i.length; t++) S.push(i[t]), T.push(r[t]);
					}
					const x = [];
					for (const [t, n] of w) {
						const r = $r(t).algoKey, s = m ? "" : await Nr(e, n, h, {
							...r ? { algorithm: r } : {},
							...a ? { dateRange: a } : {},
							signal: i
						}), c = m ? [] : s.replace(/\n$/u, "").split("\n");
						if (c.length > 0) {
							const e = o.get(t) ?? [];
							o.set(t, e), l.has(t) ? e.push(...c.slice(1)) : (e.push(...c), l.add(t));
						}
						const d = [], u = [];
						for (const e of n.values()) {
							for (const t of e.sleepMarkers) null != t.onsetTimestamp && null != t.offsetTimestamp && d.push({
								o: t.onsetTimestamp,
								f: t.offsetTimestamp,
								t: t.markerType
							});
							for (const t of e.nonwearMarkers) null != t.startTimestamp && null != t.endTimestamp && u.push({
								s: t.startTimestamp,
								e: t.endTimestamp
							});
						}
						if (0 === d.length && 0 === u.length) continue;
						const { algoKey: p, ruleKey: g } = $r(t), f = [p, g].filter(Boolean).join("_"), _ = ce(h.values(), r || null);
						x.push([f, {
							p: d,
							n: u,
							..."stale" === _.status ? { stale: _.reason } : {}
						}]);
					}
					0 === w.size && x.push(["", {
						p: [],
						n: []
					}]), S.length > 0 && c.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: S,
						act: T,
						algos: x
					});
				}
			},
			entries: () => async function({ csvLinesByAlgo: e, ggirReviews: n }, { signal: i, names: r, layouts: a, only: s }) {
				const o = {}, l = (e) => void 0 === s || s === e;
				for (const [t, c] of r ?? Cr([...e.keys()])) {
					const n = e.get(t);
					n?.length && l(c) && (o[c] = jr(`${n.join("\n")}\n`));
				}
				for (const c of Object.keys(t)) {
					const e = n.filter((e) => gr(e) === c);
					if (0 === e.length) continue;
					const t = (t, n) => void 0 === s || e.some((e) => Object.keys(n(e) ?? {}).some((e) => fr(t, c, e) === s));
					if (t("part2_report", (e) => e.part2Reports)) for (const [n, i] of Object.entries(yr(e, a))) l(n) && (o[n] = jr(i));
					for (const [n, r] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
						const t = fr(r, c), s = l(t) ? await vr(e, n, i, a?.get(t)) : null;
						s && (o[t] = jr(s));
					}
					if (t("person_summary_review", (e) => e.personReports)) for (const [n, r] of Object.entries(await Mr(e, i, a))) l(n) && (o[n] = jr(r));
				}
				return o;
			}({
				csvLinesByAlgo: o,
				ggirReviews: d
			}, { signal: i }),
			chartPidData: c,
			csvLinesByAlgo: o,
			ggirReviews: d
		};
	}(e, {
		signal: i,
		charts: !0
	});
	await r.addFiles([n]);
	const a = [...r.chartPidData].map(([t, n]) => function(e, t, n) {
		return {
			key: e,
			pid: t.pid,
			charts: t.algos.map(([i, r]) => {
				const { algoKey: a, ruleKey: s } = $r(i), o = Dr([a, s].filter(Boolean).join("_"), "unscoped"), l = `activity-${Dr(e, "recording")}-${o}-${n}.svg`, c = function(e) {
					if (0 === e.timestamps.length) return Dn("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return Dn("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, i = 0;
					const r = e.timestamps.map((r, a) => {
						const s = e.activity[a];
						return !Number.isFinite(r) || r <= t ? Dn("timestamps must be finite and strictly ascending") : (t = r, null != s && Number.isFinite(s) ? (n = Math.min(n, s), i = Math.max(i, s), {
							timestamp: r,
							value: s
						}) : {
							timestamp: r,
							value: null
						});
					}), a = r[0].timestamp, s = r[r.length - 1].timestamp, o = s > a ? s : a + 1;
					if (!Number.isFinite(o) || o <= a) return Dn("single-epoch viewport must have a representable right edge");
					i <= n && (i = n + 1);
					const l = (e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.startTimestamp < e.endTimestamp, c = e.nonwearIntervals.filter(l).map((e, t) => ({
						kind: "interval",
						phase: "under-series",
						order: t,
						tone: "neutral",
						startTimestamp: e.startTimestamp,
						endTimestamp: e.endTimestamp
					})), d = c.length, u = e.sleepIntervals.filter(l).map((e, t) => ({
						kind: "interval",
						phase: "under-series",
						order: d + t,
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
							...c,
							...u,
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
				}), d = [...Fr(`      <div class="plot-svg">${Nn(c)}</div>`)];
				return {
					algoKey: i,
					...r.stale ? { stale: r.stale } : {},
					svgFilename: l,
					plot: new Blob(d),
					plotLengths: d.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${Er(Or(c.viewport.min))} → ${Er(Or(c.viewport.max))} · activity domain ${On(c.valueDomain.min)}–${On(c.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), s = new Set(Cr([...r.csvLinesByAlgo.keys()]).values()), o = [];
	for (const [t, l] of Object.entries(await r.entries())) s.has(t) || o.push([t, C(H(new TextDecoder().decode(l)).records[0].text)]);
	return {
		charts: a,
		csvLinesByAlgo: r.csvLinesByAlgo,
		ggirReviews: r.ggirReviews,
		headers: o
	};
}
const Br = (e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind);
function Wr(e, t) {
	const n = [...t].flatMap((t) => {
		const n = ti(e, t);
		return n?.sleep ? [n.sleep] : [];
	});
	return e.intervals.filter((e) => "sleep" !== e.kind || !n.some((t) => t.startTimestamp === e.startTimestamp && t.endTimestamp === e.endTimestamp));
}
async function zr(e, t, n, i) {
	if (!t) return null;
	const r = Wr(e, n).map(qn).sort(Br);
	if (0 === r.length) return [];
	const a = await i({
		...t,
		intervals: r
	});
	return a ? Pn(a).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)) : null;
}
async function Ur(e, t, n, i) {
	const r = await Vr(e, t, n, i);
	return r ? Hr(e.file, r, t.keys()) : null;
}
async function Vr({ file: e, statisticsInput: t }, n, i, r) {
	if (!t) return null;
	const a = e.actiwareIntervals ?? [], s = await Zn(a, r), o = await en(a.map((e) => e.startTimestamp), r);
	let l = [...a];
	for (const g of n.keys()) {
		const e = Xn(s, g), t = a.filter((t) => "sleep" === t.kind && qr(a, t, e, () => o(t.startTimestamp) === g)), i = n.get(g), r = i?.sleepMarkers.filter((e) => (e.markerType === u.NAP || e.markerType === u.MAIN_SLEEP && !i.isInvalidNight) && null != e.onsetTimestamp && Number.isFinite(e.onsetTimestamp) && null != e.offsetTimestamp && Number.isFinite(e.offsetTimestamp) && e.offsetTimestamp > e.onsetTimestamp);
		if (i?.isInvalidNight || r?.length) {
			l = l.filter((e) => !t.includes(e));
			const e = t[0]?.analysis;
			for (const t of r ?? []) l.push({
				kind: "sleep",
				source: "event_marker",
				startTimestamp: t.onsetTimestamp,
				endTimestamp: t.offsetTimestamp,
				origin: "scorer",
				...e ? { analysis: e } : {}
			});
		}
	}
	const c = await i({
		...t,
		intervals: l.map(qn).sort(Br)
	});
	if (!c) return null;
	const d = Pn(c), m = [...e.actiwareStatistics ?? [], ...d], p = m.map((e) => e.startTimestamp);
	return {
		calculated: d,
		rowDateOf: await en(p, r),
		datedRows: new Set(p),
		intervalNights: s,
		rowNights: await Zn(m.filter((e) => "rest" === e.kind && void 0 === ni(s, e)), r)
	};
}
const qr = (e, t, n, i) => {
	const r = e.find((e) => "rest" === e.kind && t.startTimestamp >= e.startTimestamp && t.endTimestamp <= e.endTimestamp);
	return r ? n.includes(r) : i();
};
function Hr(e, t, n, i = {}) {
	const { intervalNights: r } = t, a = [...n].map((e) => ({
		date: e,
		rests: Xn(r, e)
	})), s = (e) => a.some(({ date: n, rests: a }) => "rest" === e.kind ? ((e) => {
		const n = Kr(t, e);
		return void 0 !== n ? n : i.rowNights ? ni(i.rowNights, e) ?? null : null;
	})(e) === n : "sleep" === e.kind && qr(r.intervals, e, a, () => {
		return r = e.startTimestamp, (t.datedRows.has(r) || !i.rowDateOf ? t.rowDateOf(r) : i.rowDateOf(r)) === n;
		var r;
	}));
	return [...(e.actiwareStatistics ?? []).filter((e) => !s(e)), ...t.calculated.filter(s)].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
const Kr = (e, t) => {
	const n = ni(e.intervalNights, t);
	return void 0 !== n ? n : ni(e.rowNights, t);
};
function Jr(e, t) {
	return (e.actiwareStatistics ?? []).filter((e) => "rest" === e.kind && void 0 === Kr(t, e));
}
function Yr(e, t) {
	return (e.actiwareStatistics ?? []).map((e) => e.startTimestamp).filter((e) => !t.datedRows.has(e));
}
const Zr = r.invalid_night_row.markerTypeCell, Xr = s("actiware_interval_csv", "local"), Qr = [
	"interval_score_count",
	"interval_score_average",
	"interval_score_manual_count",
	"interval_score_manual_average",
	"interval_score_scheduled_count",
	"interval_score_scheduled_average",
	"interval_score_no_response_count",
	"interval_score_late_count",
	"interval_score_late_average"
].map((t) => e[t].header), ea = (e, t) => Math.round(e) === Math.round(t);
async function ta(e, t, n, i) {
	const r = i ? Wr(i.nights, i.invalidDates) : (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind), a = r.filter((e) => "rest" === e.kind), s = r.filter((e) => "rest" === e.kind || "sleep" === e.kind && a.some((t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp)).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), o = e.actiwareStatistics ?? [], l = await en([...s.map((e) => e.startTimestamp), ...o.map((e) => e.startTimestamp)], n), c = /* @__PURE__ */ new Set(), d = (t, n) => ({
		filename: e.filename,
		participantId: e.participantId ?? null,
		studyDate: l(t.startTimestamp),
		intervalNumber: null,
		interval: t,
		statistics: n
	}), u = s.map((e) => {
		const t = o.findIndex((t, n) => !c.has(n) && t.kind === e.kind && ea(t.startTimestamp, e.startTimestamp) && ea(t.endTimestamp, e.endTimestamp));
		return t >= 0 && c.add(t), d(e, t >= 0 ? o[t] ?? null : null);
	});
	return o.forEach((e, t) => {
		c.has(t) || u.push(d({
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
	}(u).filter((e) => !t || e.studyDate >= t[0] && e.studyDate <= t[1]).sort((e, t) => e.interval.startTimestamp - t.interval.startTimestamp || e.interval.kind.localeCompare(t.interval.kind));
}
function na(e, t, n) {
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
const ia = new Set(pi.map(([, e]) => e)), ra = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
function aa(e) {
	if (!Number.isFinite(e)) return [
		"",
		"",
		""
	];
	const t = /* @__PURE__ */ new Date(1e3 * Math.round(e)), n = t.toISOString();
	return [
		n.slice(0, 10),
		ra[t.getUTCDay()],
		n.slice(11, 19)
	];
}
const sa = s("actiware_sleep_wake_csv", "local");
async function oa(e, t, n, i) {
	if (0 === e.scores.byteLength) return [];
	const r = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, a = n ?? new Set(await i.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((r - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), r])));
	return (await Promise.all([...a].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await Xt(t, void 0, void 0, i);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
async function la(e, t, n, i) {
	return t || n ? (await oa(e, t, n, i)).reduce((e, t) => e + t.end - t.start, 0) : e.scores.byteLength;
}
async function* ca({ fileIds: e, dateRange: t, username: n, signal: i }, r, a) {
	i?.throwIfAborted();
	const s = r.inputs("actiwareSleepWake", e), o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), l = o.map((e) => s.actiwareFileData.find((t) => t.fileId === e.id)), c = function(e, t = !1) {
		const n = [[
			...sa,
			"Sleep/Wake_missing_reason",
			"Wake Threshold_missing_reason",
			...t ? ["Participant ID_missing_reason"] : []
		].join(",")];
		for (const i of e) n.push(da(i, i.epochTimestamp, i.sleepWake, t));
		return `${n.join("\n")}\n`;
	}([], !0);
	let d = [], u = 0, m = 0;
	const p = () => {
		i?.throwIfAborted();
		const e = function(...e) {
			const t = function* (e, t, n = !0, i) {
				const { headerlessColumns: r, fullRowCsv: a, rowOffset: s = 0, contextRows: o } = i ?? {}, l = r?.length ? r.join(",") + "\n" + e : e, c = H(l);
				if (c.unterminatedQuotedField) throw new Error(t + ": unterminated CSV cell");
				const [d, ...u] = c.records;
				if (!d) return {
					csv: e,
					withReason: 0,
					withoutReason: 0
				};
				const m = C(d.text), p = m.findIndex((e) => e.endsWith("_missing_reason"));
				if (p >= 0 && m.slice(p).some((e) => !e.endsWith("_missing_reason"))) throw new Error(t + ": internal reason fields must trail data fields");
				const g = m.map((e, t) => ({
					header: e,
					index: t
				})).filter(({ header: e }) => "" !== e && !e.endsWith("_missing_reason")), f = u.map((e) => C(e.text)), h = f.map((e) => new Map(m.map((t, n) => [t, e[n] ?? ""]))), _ = a ? H(a).records : [], w = _[0] ? C(_[0].text) : [], v = a ? _.slice(1).map((e) => C(e.text)) : [];
				if (a && g.length > 0 && v.length !== f.length) throw new Error(t + ": complete-row evidence count differs");
				const y = a ? v.map((e) => new Map(w.map((t, n) => [t, e[n] ?? ""]))) : h;
				let b = 0, k = 0;
				for (let M = 0; M < f.length; M += 1) {
					const e = f[M], n = h[M];
					for (const { header: r, index: a } of g) {
						if ("edit_recompute_requires_ms2_ms3" === y[M].get(r + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
							yield {
								file: t,
								row: s + M + 1,
								key: Bi(n, s + M + 1),
								column: r,
								reason: Si
							}, b += 1;
							continue;
						}
						const i = e[a] ?? "";
						if (!Fi(i) || "" !== i.trim() && Ci.has(r)) continue;
						const l = Pi(t, r, y[M], o?.() ?? y);
						l ? (b += 1, yield {
							file: t,
							row: s + M + 1,
							key: Bi(n, s + M + 1),
							column: r,
							reason: l
						}) : (k += 1, console.warn("WARNING: unreasoned missing export cell"));
					}
					const i = n.get(ji);
					i && (yield {
						file: t,
						row: s + M + 1,
						key: Bi(n, s + M + 1),
						column: i,
						reason: "not_computed_for_export"
					});
				}
				if (n && k > 0) throw new Mi(t + ": " + String(k) + " unreasoned missing metric cells");
				return p < 0 ? {
					csv: e,
					withReason: b,
					withoutReason: k
				} : {
					csv: [Wi(d.text, p), ...u.map((e) => Wi(e.text, p))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
					withReason: b,
					withoutReason: k
				};
			}(...e), n = [];
			for (;;) {
				const e = t.next();
				if (e.done) return {
					...e.value,
					reasons: n
				};
				n.push(e.value);
			}
		}(c + d.join("\n") + "\n", fi, !0, { rowOffset: u }), t = u ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
			bytes: new TextEncoder().encode(t),
			rows: d.length,
			reasonRows: e.reasons.length,
			reasons: new TextEncoder().encode(Gi(e.reasons, !1))
		};
		return u += d.length, d = [], m = 0, n;
	};
	for (const [g, f] of o.entries()) {
		i?.throwIfAborted();
		const e = l[g]?.actiwareSleepWake;
		if (!e) continue;
		const o = l[g]?.actiwareWakeThreshold, c = null != o && Number.isFinite(o) ? o : null, u = new Int8Array(e.scores), h = await oa(e, t, new Set(r.scoredMarkers(s, f.id, n).keys()), a);
		i?.throwIfAborted();
		for (const { date: t, start: n, end: i } of h) {
			const r = {
				filename: f.filename,
				participantId: f.participantId ?? null,
				studyDate: t,
				sleepDetection: me(e.params, "sleep_detection"),
				wakeThresholdSelection: me(e.params, "wake_threshold_selection"),
				wakeThreshold: c,
				...null === c ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
			};
			for (let t = n; t < i; t += 1) {
				const n = u[t], i = da(r, e.startTimestamp + t * e.epochSeconds, 0 === n || 1 === n ? n : null, !0);
				if (i.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
				d.push(i), m += i.length, (512 === d.length || m >= 32768) && (yield p());
			}
		}
	}
	d.length && (yield p()), i?.throwIfAborted();
}
function da(e, t, n, i) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		he(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...i ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => P(e)).join(",");
}
const ua = {
	sleepPeriodsOf: (e, t) => t.sleepMarkers,
	sleepRowMetrics: null
}, ma = { forFile: () => Promise.resolve(ua) }, pa = [
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
], ha = {
	nightRecord: { async forFile(e, t, n) {
		const i = e.actiwareFileData.find((e) => e.fileId === t) ?? null, r = i?.actiwareIntervals ?? null;
		if (!r) return ma.forFile(e, t, n);
		const a = await Zn(r, n);
		return {
			sleepPeriodsOf: (e, t) => ri(a, e, t.isInvalidNight),
			sleepRowMetrics: { cells(e) {
				const t = null != e.onsetTimestamp && null != e.offsetTimestamp ? {
					onset: e.onsetTimestamp,
					offset: e.offsetTimestamp
				} : null;
				if (!t) return null;
				const n = r.find((e) => "rest" === e.kind && e.startTimestamp <= t.onset && e.endTimestamp >= t.offset) ?? null, a = (e, t) => t ? i?.actiwareStatistics?.find((n) => n.kind === e && Math.round(n.startTimestamp) === Math.round(t.startTimestamp) && Math.round(n.endTimestamp) === Math.round(t.endTimestamp)) ?? null : null, s = {
					rest: a("rest", n),
					sleep: a("sleep", {
						startTimestamp: t.onset,
						endTimestamp: t.offset
					})
				}, o = {}, l = {};
				for (const [i, r, c, d] of pa) {
					const e = s[r]?.[c] ?? null;
					o[i] = e, l[d] = null == e ? s[r] ? "source_reported_missing" : "not_computed_for_export" : void 0;
				}
				return {
					metrics: o,
					reasons: l,
					metricMissingReason: "not_computed_for_export",
					inBedSpan: n
				};
			} }
		};
	} },
	sourceAnalysis: {
		artifacts: [{
			entry: gi,
			rows: (e) => e.actiwareIntervalRows?.length ?? 0,
			fileRows: (e) => e.actiwareIntervalRows,
			detail: (e) => `${String(e)} Actiware intervals`,
			columns: Xr.length,
			write: {
				kind: "rows",
				chunkField: "actiwareIntervalRows",
				csv: (t) => function(t, n = !1) {
					const i = n ? pi.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], r = [[
						...Xr,
						...i.map(([, e]) => e + "_missing_reason"),
						...n ? [
							"Participant ID_missing_reason",
							"Origin_missing_reason",
							"Analysis_missing_reason",
							...Qr.map((e) => e + "_missing_reason")
						] : []
					].join(",")], a = (t) => e[t].header;
					for (const { filename: e, participantId: s, studyDate: o, intervalNumber: l, interval: c, statistics: d, invalidNight: u } of t) {
						const t = !0 === u && !Number.isFinite(c.startTimestamp), [m, p, g] = aa(c.startTimestamp), [f, h, _] = aa(c.endTimestamp), w = new Map([
							[a("filename"), e],
							[a("participant_id"), s ?? ""],
							[a("study_date"), o],
							[a("interval_kind"), u ? Zr : c.kind],
							[a("interval_number"), null == l ? "" : String(l)],
							[a("interval_source"), t ? "" : c.source],
							[a("interval_start_date"), m],
							[a("interval_start_day"), p],
							[a("interval_start_time"), g],
							[a("interval_end_date"), f],
							[a("interval_end_day"), h],
							[a("interval_end_time"), _],
							[a("interval_origin"), t ? "" : c.origin],
							[a("interval_analysis"), c.analysis ?? ""],
							...pi.map(([, e]) => [e, d?.printed?.[e] ?? ""]),
							...Qr.map((e) => [e, u ? "" : c.subjectiveScores?.[e] ?? ""])
						]), v = i.map(([e]) => {
							if (u) return "invalid_night";
							if (!d || null != d[e]) return "";
							if (e.startsWith("off_wrist")) return "source_reported_missing";
							const t = /_(white|red|green|blue)(?:_percent)?$/u.exec(e)?.[1];
							return t && null == d["invalid_" + t + "_percent"] ? "source_reported_missing" : "";
						}), y = Qr.map((e) => u ? "invalid_night" : c.subjectiveScores?.[e] ? "" : "source_no_subjective_scores");
						r.push([
							...Xr.map((e) => ia.has(e) ? w.get(e) ?? "" : P(w.get(e) ?? "")),
							...v,
							...n ? [
								s ? "" : "source_reported_missing",
								t ? "invalid_night" : c.origin ? "" : "source_reported_missing",
								c.analysis ? "" : u ? "invalid_night" : "not_applicable_to_row",
								...y
							] : []
						].join(","));
					}
					return `${r.join("\n")}\n`;
				}(t.actiwareIntervalRows ?? [], !0),
				validatesAgainstOwnRows: !0
			}
		}, {
			entry: fi,
			rows: (e) => e.actiwareSleepWakeRows ?? 0,
			fileRows: (e) => e.actiwareSleepWakeRows,
			detail: (e) => `${String(e)} Actiware Sleep/Wake epochs`,
			columns: sa.length,
			write: { kind: "streamed" }
		}],
		async fileStats({ file: e, fileId: t, dateRange: n, scoredDates: i }, r, a) {
			const s = await r.actiwareFileData.get(t);
			return {
				actiwareIntervalRows: s ? (await ta({
					...e,
					...s
				}, n, a)).length : 0,
				actiwareSleepWakeRows: s?.actiwareSleepWake ? await la(s.actiwareSleepWake, n, new Set(i), a) : 0,
				...!0 === s?.actiwareStatisticsNeedsRecompute ? { actiwareStatisticsStale: !0 } : {}
			};
		},
		preflight: (e, t) => !0 !== e.actiwareStatisticsStale ? null : {
			severity: "blocker",
			title: `${t()}: Actiware statistics need reprocessing`,
			body: "A marker save could not recompute this file's Actiware statistics, so actiware_intervals_export.csv would print values for intervals the scorer has since moved. Make any edit on one of its nights in the Sleep tab (a note is enough): the next save that succeeds recomputes every night. Or deselect the file."
		},
		plannedMissingReasonBytes: (e) => 3 * (e.actiwareSleepWakeRows ?? 0) * (256 + 4 * (e.filename.length + (e.participantId?.length ?? 0))),
		async produceEntries(e, t, n) {
			const i = await async function({ fileIds: e, dateRange: t, username: n, signal: i }, r, a) {
				i?.throwIfAborted();
				const s = r.inputs("actiwareInterval", e), o = s.studySettings[0]?.extraSettings?.analysis_paradigm, l = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), c = [];
				for (const d of l) {
					i?.throwIfAborted();
					const e = s.actiwareFileData.find((e) => e.fileId === d.id), l = r.scoredMarkers(s, d.id, n), u = [...l].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort(), m = s.actiwareStatisticsInputs.find((e) => e.fileId === d.id), p = (e) => a.actiwareIntervalStatistics(e), g = ae(d, o) === Me.rest_intervals ? Zn(e?.actiwareIntervals, a) : null, f = g ? await zr(await g, m?.input, u, p) : await Ur({
						file: e ?? {},
						statisticsInput: m?.input
					}, l, p, a);
					i?.throwIfAborted();
					const h = await ta({
						...d,
						...e,
						actiwareStatistics: f ?? []
					}, t, a, g ? {
						invalidDates: u,
						nights: await g
					} : void 0), _ = new Set(l.keys()), w = new Set(u.filter((e) => !t || e >= t[0] && e <= t[1]));
					c.push(...na(h.filter((e) => _.has(e.studyDate)), w, d));
				}
				return c;
			}(e, t, n), r = ca(e, t, n), a = await r.next();
			let s = a.done ? 0 : a.value.rows;
			const o = async function* () {
				if (!a.done) {
					yield a.value;
					for await (const e of r) s += e.rows, yield e;
				}
			}();
			return {
				artifacts: {
					actiwareIntervalRows: i,
					actiwareSleepWakeRows: s
				},
				streams: { [fi]: o },
				receipt: () => ({ actiwareSleepWakeRows: s })
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
}, _a = {
	sleep_periods: ma,
	rest_intervals: ha.nightRecord
}, wa = [ha.sourceAnalysis].flatMap((e) => e.artifacts), va = ha.modules, ya = [
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
], ba = [
	"temperature",
	"lux",
	"redLight",
	"greenLight",
	"blueLight"
], ka = r.invalid_night_row?.markerTypeCell ?? "", Ma = r.nonwear_row?.markerTypeCell ?? "";
function Sa(e) {
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
function Ta(e) {
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
async function xa(e, t, n, i, r, a, s) {
	try {
		return {
			metrics: t ? await xt(e, t, n, i, r, a, s) : await Tt(e, n, i, r, a, null, s),
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
async function Ia(e, t, n, i) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const r = new Set(n.filter((t) => t.markerType === u.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return r.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : Rr(t.filter((e) => r.has(e.date)), e, t[0]?.epochLengthSeconds, i);
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
], Na = {
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
};
function Ea(e, t) {
	if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
	const n = [], i = new Mt(t?.byteLength ? {
		level: 1,
		dictionary: t
	} : { level: 1 }, (e) => {
		n.push(e);
	});
	i.push(e, !1), i.flush(!1);
	const r = i.s.r ?? 0;
	if (!Number.isInteger(r) || r < 0 || r > 2047) throw new Error("ZIP compression state is unreadable.");
	const a = (7 & r) > 5 ? 2 : 1, s = new Uint8Array(a + 4);
	return s[0] = r >> 3, s[a + 2] = 255, s[a + 3] = 255, n.push(s), Se(n);
}
o.sleep_csv.filter((t) => "server" !== e[t].plane).map((t) => e[t].header), new Uint8Array([3, 0]);
const $a = (() => {
	const e = /* @__PURE__ */ new Int32Array(256);
	for (let t = 0; t < 256; t += 1) {
		let n = t;
		for (let e = 0; e < 8; e += 1) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
		e[t] = n;
	}
	return e;
})();
function La(e) {
	let t = -1;
	for (const n of e) t = $a[255 & (t ^ n)] ^ t >>> 8;
	return ~t >>> 0;
}
function Ca(e, t) {
	let n = 2147483648, i = 0, r = t;
	for (; !(e & n) || (i ^= r, e & n - 1);) n >>>= 1, r = 1 & r ? r >>> 1 ^ 3988292384 : r >>> 1;
	return i >>> 0;
}
(() => {
	const e = [1 << 30];
	for (let t = 1; t < 32; t += 1) e.push(Ca(e[t - 1], e[t - 1]));
})();
const Oa = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], Da = [
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
], Fa = {
	dayFields: ["actiwareSleepWakeInvalid", "actiwareActivityInvalid"],
	sleep: { actiwareFileData: [
		"fileId",
		"actiwareIntervals",
		"actiwareStatistics"
	] },
	producers: {
		actiwareInterval: {
			files: [...(Ka = {
				fileIdentity: Oa,
				markerFields: Da
			}).fileIdentity, ...["sourceType", "sourceProfileId"]],
			markers: Ka.markerFields,
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
			files: Ka.fileIdentity,
			markers: Ka.markerFields,
			actiwareFileData: [
				"fileId",
				"actiwareSleepWake",
				"actiwareWakeThreshold"
			]
		}
	}
}, ja = [
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
	...Fa.dayFields
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
], Ga = ["fileId", ...K], Ba = {
	files: [
		...Oa,
		"ggirTimezone",
		"recording",
		"ggirClockSteps",
		"sourceType",
		"sourceProfileId",
		"navigationFacts"
	],
	markers: Da,
	activityDays: ja,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: Pa,
	...Fa.sleep
}, Wa = {
	files: [...Oa, "ggirClockSteps"],
	markers: Da,
	activityDays: ja,
	ggirResultsBundles: Pa,
	ggirResultsBlobs: Ga,
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
}, za = {
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
		ke
	]
}, Ua = {
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
	sleep: Ba,
	nonwear: Ba,
	summary: Ba,
	wide: Ba,
	circadian: {
		files: Oa,
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
	ggirReport: Wa,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: Da,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	...Fa.producers,
	codebook: {},
	manifest: za,
	audit: Ua,
	physicalActivity: {
		files: [
			...Oa,
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
		markers: Da,
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
}, qa = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap();
var Ka;
function Ja(e) {
	if (!e || "object" != typeof e) return e;
	const t = Ha.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return function(e, t, n, i) {
			for (let r = 0; r < n.byteLength;) {
				const t = n.subarray(r, r + Cn), a = e.read(t, { at: i + r });
				if (!Number.isInteger(a) || a <= 0 || a > t.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
				r += a;
			}
		}(t.store, 0, e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(Ja) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ja(t)])) : structuredClone(e);
}
function Ya(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(Ya), Object.freeze(e)), e;
}
var Za = class extends Error {};
function Xa(e, t, n) {
	const i = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new Za(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (i(t), Reflect.get(e, t, n)),
		has: (e, t) => (i(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (i(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function Qa(e, t, n = []) {
	const i = qa.get(e);
	if (!i) throw new Za("Export requires a captured input snapshot");
	const r = Object.entries(Va).find(([, e]) => e === t)?.[0];
	if (!r) throw new Za("Export producer has no registered input declaration");
	const a = {};
	for (const [s, o] of Object.entries(t)) {
		const e = i[s].filter((e) => !n.length || "studySettings" === s || n.includes("files" === s ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const i of o.filter((e) => e in t)) Object.defineProperty(n, i, {
				enumerable: !0,
				get: () => Ya(Ja(t[i]))
			});
			return Xa(n, o, `${r}: undeclared field ${s}.`);
		});
		Object.assign(a, { [s]: Object.freeze(e) });
	}
	return Xa(a, Object.keys(t), `${r}: undeclared table `);
}
function es(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	for (const r of e.markers) {
		if (r.fileId !== t || r.username !== n) continue;
		const e = pe(r), a = i.get(r.date) ?? [];
		a.push(e), i.set(r.date, a);
	}
	return i;
}
function ts(e, t, n) {
	return new Map([...es(e, t, n)].sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => [e, te(t)]));
}
function ns(e, t, n) {
	return be([...es(e, t, n).values()].flat().filter(M));
}
function is(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function rs(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function as(e, t, n, i, r) {
	const a = [], s = Qa(n, Va.event, e), o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		r?.throwIfAborted();
		const e = rs(l, is(s, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await en(e, W(r)), c = new Set(ns(s, l.id, i).keys());
		for (const i of e) {
			const e = o(i);
			t && (e < t[0] || e > t[1]) || c.has(e) && a.push({
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
s("event_marker_csv", "local"), B.GGIR_CORRECTED_WARM;
const ss = U, os = v, ls = y, cs = {
	ggir_enmo: {
		method: "ggir_enmo",
		label: "GGIR ENMO thresholds",
		family: "daily_summary",
		requiredSignal: "ggir_daily_summary",
		signalLabel: "GGIR daily summary",
		outcomeLabel: "Stored sedentary, LPA, and MVPA daily minutes",
		selectionGuidance: "Use when GGIR already produced daily intensity totals and browser import should preserve those summaries.",
		evidenceLabel: "Imported daily totals from an upstream GGIR-compatible summary.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	freedson_adult_1952: {
		method: "freedson_adult_1952",
		label: "Freedson adult vertical-axis cutpoints",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Y-axis counts",
		outcomeLabel: "Sedentary, light, moderate, and vigorous thresholds",
		selectionGuidance: "Use only when the source signal and study assumptions match adult vertical-axis count calibration.",
		evidenceLabel: "Adult vertical-axis count thresholds on ActiGraph-style counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	sasaki_vm_2011: {
		method: "sasaki_vm_2011",
		label: "Sasaki vector-magnitude cutpoints",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		signalLabel: "Vector magnitude counts",
		outcomeLabel: "Sedentary, light, moderate, and vigorous thresholds",
		selectionGuidance: "Use for adult vector-magnitude count summaries, not pediatric wrist-specific interpretation.",
		evidenceLabel: "Adult vector-magnitude count thresholds on counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	chandler_wrist_va_8_12_2015: {
		method: "chandler_wrist_va_8_12_2015",
		label: "Chandler youth wrist vertical-axis cutpoints",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Y-axis counts",
		outcomeLabel: "Non-dominant wrist vertical-axis ROC thresholds",
		selectionGuidance: "Use for school-age wrist projects when Chandler vertical-axis counts are the study contract.",
		evidenceLabel: "Chandler ROC vertical-axis wrist bands converted from 5 s thresholds to counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	johansson_preschool_wrist_vm_2016: {
		method: "johansson_preschool_wrist_vm_2016",
		label: "Johansson preschool wrist vector-magnitude cutpoints",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		signalLabel: "Vector magnitude counts",
		outcomeLabel: "Sedentary, light, and MVPA thresholds",
		selectionGuidance: "Use only as a compatibility cutpoint option when the actimetric-compatible preschool classifier is unavailable and the study explicitly accepts threshold-based wrist limits.",
		evidenceLabel: "Preschool wrist vector-magnitude cutpoints converted to counts/min for comparable threshold display.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	preschool_free_living_rf_3_5: {
		method: "preschool_free_living_rf_3_5",
		label: "actimetric preschool wrist RF lag-lead classifier",
		family: "backend_classifier",
		requiredSignal: "preschool_activity_class_epochs",
		signalLabel: "actimetric preschool class epochs",
		outcomeLabel: "actimetric classes: sedentary, lightGames, moderatetovigorousGames, walk, run",
		selectionGuidance: "Recommended first for exact 3-5 year-old wrist studies when actours/WASM provides actimetric-compatible lag-lead 15 s class epochs.",
		evidenceLabel: "Apache-licensed actimetric route: Preschool Wrist Random Forest Free Living Lag-Lead uses actimetricModels::PS.RF.FL.Wrist15.LagLead with 15 s epochs.",
		statusWhenMissing: "backend_required",
		backendDependency: "Requires actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs."
	},
	chandler_wrist_vm_8_12_2015: {
		method: "chandler_wrist_vm_8_12_2015",
		label: "Chandler youth wrist vector-magnitude cutpoints",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		signalLabel: "Vector magnitude counts",
		outcomeLabel: "Sedentary, light, moderate, and vigorous thresholds",
		selectionGuidance: "Use for school-age wrist vector-magnitude count projects when full intensity bands are needed.",
		evidenceLabel: "Chandler wrist vector-magnitude intensity bands converted from 5 s thresholds to counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	chandler_wrist_sedentary_5_11_2018: {
		method: "chandler_wrist_sedentary_5_11_2018",
		label: "Chandler 5-11 non-dominant wrist VM sedentary threshold",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		signalLabel: "Vector magnitude counts",
		outcomeLabel: "Non-dominant wrist sedentary versus non-sedentary threshold",
		selectionGuidance: "Use when the primary pediatric wrist question is sedentary versus non-sedentary time and VM counts are available from the non-dominant wrist.",
		evidenceLabel: "Chandler 5-11 wrist sedentary threshold converted from 5 s vector-magnitude counts.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	chandler_wrist_axis1_sedentary_5_11_2018: {
		method: "chandler_wrist_axis1_sedentary_5_11_2018",
		label: "Chandler 5-11 non-dominant wrist axis-1 sedentary threshold",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Y-axis counts",
		outcomeLabel: "Non-dominant wrist axis-1 sedentary versus non-sedentary threshold",
		selectionGuidance: "Use for 5-11 year-old non-dominant wrist ActiGraph axis-1 counts when sedentary time is the primary endpoint.",
		evidenceLabel: "Chandler 5-11 non-dominant wrist axis-1 threshold converted from 5 s counts to counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	chandler_wrist_axis1_sedentary_dominant_5_11_2018: {
		method: "chandler_wrist_axis1_sedentary_dominant_5_11_2018",
		label: "Chandler 5-11 dominant wrist axis-1 sedentary threshold",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Y-axis counts",
		outcomeLabel: "Dominant wrist axis-1 sedentary versus non-sedentary threshold",
		selectionGuidance: "Use only when the study intentionally scores dominant-wrist axis-1 counts.",
		evidenceLabel: "Chandler 5-11 dominant wrist axis-1 threshold converted from 5 s counts to counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	chandler_wrist_vm_sedentary_dominant_5_11_2018: {
		method: "chandler_wrist_vm_sedentary_dominant_5_11_2018",
		label: "Chandler 5-11 dominant wrist VM sedentary threshold",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		signalLabel: "Vector magnitude counts",
		outcomeLabel: "Dominant wrist vector-magnitude sedentary versus non-sedentary threshold",
		selectionGuidance: "Use only when the study intentionally scores dominant-wrist vector-magnitude counts.",
		evidenceLabel: "Chandler 5-11 dominant wrist VM threshold converted from 5 s counts to counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	evenson_children_2008: {
		method: "evenson_children_2008",
		label: "Evenson children vertical-axis cutpoints",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Y-axis counts",
		outcomeLabel: "Sedentary, light, moderate, and vigorous thresholds",
		selectionGuidance: "Use for child/youth vertical-axis count studies that adopt the Evenson 2008 calibration; validated originally at 15 s epochs.",
		evidenceLabel: "Evenson 2008 children vertical-axis 15 s cut-points (sed <=25, light 26-573, moderate 574-1002, vigorous >=1003 counts/15 s) converted x4 to counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	neil_sztramko_actiwatch2_adult_2017: {
		method: "neil_sztramko_actiwatch2_adult_2017",
		label: "Neil-Sztramko Actiwatch 2 adult cutpoints",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Actiwatch activity counts",
		outcomeLabel: "Sedentary, light, moderate, and vigorous thresholds",
		selectionGuidance: "Use for adult Philips Actiwatch 2 wrist data; calibrated in adult women (40 +/- 15 years).",
		evidenceLabel: "Neil-Sztramko 2017, Physiol Behav 173:95-100: Actiwatch 2 sedentary <145, moderate >=274, vigorous >=597 counts/min (30 women, ROC thresholds).",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	kemp_actiwatch2_adult_2020: {
		method: "kemp_actiwatch2_adult_2020",
		label: "Kemp Actiwatch 2 adult cutpoints",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Actiwatch activity counts",
		outcomeLabel: "Sedentary, light, moderate, and vigorous thresholds",
		selectionGuidance: "Use for adult Philips Actiwatch 2 wrist data from men and women; the moderate boundary was weakly characterized.",
		evidenceLabel: "Kemp 2020, Physiol Meas 41(8):085001: Actiwatch 2 sedentary <256, moderate >=418, vigorous >=720 counts/min (28 men, 22 women, ROC cut-points).",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	hildebrand_enmo_wrist_2014: {
		method: "hildebrand_enmo_wrist_2014",
		label: "Hildebrand wrist ENMO (mg) cut-points",
		family: "enmo_cutpoint",
		requiredSignal: "enmo_mg_epochs",
		signalLabel: "ENMO (mg) epochs",
		outcomeLabel: "ENMO mg thresholds: moderate >=201 mg, vigorous >=707 mg (light near ~45 mg)",
		selectionGuidance: "Use when a calibrated ENMO (mg) epoch stream is available from the raw/GGIR pipeline; the browser count pipeline cannot produce ENMO mg, so this method waits on that signal.",
		evidenceLabel: "Hildebrand 2014 non-dominant wrist ENMO cut-points (Med Sci Sports Exerc 2014;46(9):1816-1824): MVPA >=201 mg, vigorous >=707 mg.",
		statusWhenMissing: "needs_signal",
		backendDependency: "Requires a raw/GGIR pipeline (actours/WASM) that emits calibrated ENMO (mg) epoch values."
	},
	mims: {
		method: "mims",
		label: "MIMS unit volume",
		family: "backend_volume",
		requiredSignal: "mims_epoch_values",
		signalLabel: "MIMS_UNIT epochs",
		outcomeLabel: "Volume summary; intensity cutpoints are not applied yet",
		selectionGuidance: "Use when actours/WASM has computed or preserved MIMS_UNIT epochs for volume-style scoring.",
		evidenceLabel: "MIMS_UNIT epoch values supplied by the injected actours/WASM backend.",
		statusWhenMissing: "backend_required",
		backendDependency: "Requires an actours/WASM build that stores MIMS_UNIT epochs."
	}
}, ds = Object.fromEntries(ss.flatMap((e) => e.cutpoint ? [[e.method, e.cutpoint.nativeEpochSeconds]] : []));
async function us(e, t, n) {
	const i = ds[e];
	if (null == i) return null;
	const r = await W(n).cutpointEpochCompatibility(i, t), a = {
		method: e,
		nativeEpochSeconds: i,
		fileEpochSeconds: t,
		compatible: r.compatible
	};
	if (!r.readable) return {
		...a,
		severity: "warn",
		message: `Unknown or invalid file epoch length; ${String(i)}s-calibrated cut-point counts cannot be verified.`
	};
	if (r.compatible) return {
		...a,
		severity: "ok",
		message: null
	};
	const s = (r.countsPerMinuteScale ?? NaN).toFixed(2);
	return {
		...a,
		severity: "warn",
		message: `Cut-point calibrated at ${String(i)}s epochs but this file uses ${String(t)}s epochs. Counts are linearly rescaled (x${s} to counts/min), which is not equivalent to native-epoch calibration; interpret intensity minutes with caution.`
	};
}
function ms(e, t) {
	const n = ss.find((t) => t.method === e), i = t ? L[t] : void 0;
	if (n && i && !E[n.requiredSignal].some((e) => i.includes(e))) {
		const t = gs(e);
		return `${t.label} needs ${t.signalLabel.toLowerCase()}, which this file's source does not carry.`;
	}
	const r = n?.cutpoint?.countScale, a = t ? R[t] : void 0;
	return r && a && "source_declared" !== a && a !== r ? `${gs(e).label} is calibrated on ${g[r]}; this file carries ${g[a]}, which are on a different scale.` : null;
}
function ps(e, t) {
	return 0 === t.length || t.some((t) => null === ms(e, t));
}
function gs(e) {
	return cs[e];
}
function fs(e, t, n) {
	const i = gs(e);
	return {
		method: e,
		label: i.label,
		requiredSignal: i.requiredSignal,
		sourceLabel: i.signalLabel,
		ruleLabel: t,
		unavailableAction: n,
		unavailableStatus: i.statusWhenMissing
	};
}
const hs = ss.filter(function(e) {
	return null != e.cutpoint;
}).map((e) => function(e) {
	return {
		...fs(e.method, e.cutpoint.ruleLabel, e.cutpoint.unavailableAction),
		axis: e.cutpoint.axis,
		sedentaryMax: e.cutpoint.sedentaryMax,
		lightMin: e.cutpoint.lightMin,
		moderateMin: e.cutpoint.moderateMin,
		vigorousMin: e.cutpoint.vigorousMin,
		cutpointBands: e.cutpoint.cutpointBands,
		cutpointScaleMax: e.cutpoint.cutpointScaleMax
	};
}(e)), _s = ([
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
].join(","), hs.length, "Also export corrected values was off at export");
va.sleep;
function ws(e) {
	return function(e) {
		const t = Object.freeze({ files: Ya((e.files ?? []).map((e) => Object.fromEntries(Oa.map((t) => [t, Ja(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
		return qa.set(t, e), t;
	}(e);
}
va.producers, va.archive;
const vs = /* @__PURE__ */ new WeakMap(), ys = 4;
function bs(e, t, n, i) {
	let r = vs.get(e);
	r || (r = /* @__PURE__ */ new Map(), vs.set(e, r));
	const a = JSON.stringify([t, n]);
	let s = r.get(a);
	if (!s) {
		for (; r.size >= ys;) r.delete(r.keys().next().value);
		s = async function(e, t, n, i) {
			const r = Qa(e, Va.ggirReport, [t]), a = r.files.find((e) => e.id === t), s = r.ggirResultsBundles.find((e) => e.fileId === t), o = s && d(s, r.ggirResultsBlobs.find((e) => e.fileId === t)), l = es(r, t, n), c = o ? await Xi(t, o.imported, l, a.ggirClockSteps, i) : void 0, u = c?.markersByAlgo ?? l, m = c?.selected ?? new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), p = rr(m), g = r.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n), f = {
				review: g,
				bundleRevision: a.ggirBundleRevision
			}, h = o ? await ur(o, m, a.ggirClockSteps, c?.edits, i, f) : void 0, _ = h ? await Ms(h, p, i) : void 0, w = r.ggirCorrectedValues.find((e) => e.fileId === t), v = g?.corrected && w && g.corrected.key === w.key ? {
				review: {
					edits: g.edits,
					bundleRevision: g.bundleRevision,
					...g.corrected.current ? { current: g.corrected.current } : {}
				},
				bundleRevision: a.ggirBundleRevision
			} : void 0;
			return {
				markersByAlgo: u,
				selected: m,
				bundle: _,
				sets: o && h ? await Promise.all($e(o, w, w?.notApplied !== _s).map(async ({ set: e, bundle: t }) => t === o ? _ : Ms(await ur(t, m, a.ggirClockSteps, h.edits, i, "corrected" === e ? v : void 0), p, i))) : [],
				invalidDates: p
			};
		}(e, t, n, i), r.set(a, s), s.catch(() => {
			r.get(a) === s && r.delete(a);
		});
	}
	return s;
}
let ks;
async function Ms(t, n, i) {
	const { ggirCell: r, ggirNum: a } = await import("./ggir-results-types-e7JA7N7O.js").then((e) => e.o), s = t.part2Reports?.["part2_daysummary.csv"], l = /* @__PURE__ */ new Map();
	if (s) for (let o = 0; o < s.rows; o++) {
		const t = r(s, e.ggir_id.header, o), n = hr(r(s, e.ggir_calendar_date.header, o));
		if (null == t || !n) continue;
		const i = JSON.stringify([String(t), n]);
		l.set(i, l.has(i) ? null : o);
	}
	const c = _r(t.imported, "nights"), d = e.ggir_nonwear_perc_spt.header, u = async (n) => {
		const u = n.nights, m = Array.from({ length: u.rows }, (t, n) => {
			const i = r(u, e.ggir_id.header, n), o = l.get(JSON.stringify([null == i ? null : String(i), c(u, n, !1)])), d = s && null != o;
			return {
				id: i,
				day: o,
				valid: d ? r(s, e.ggir_day_valid_hours.header, o) : null,
				hours: d ? r(s, e.ggir_day_hours.header, o) : null,
				validNumber: d ? a(s, e.ggir_day_valid_hours.header, o) : null,
				hoursNumber: d ? a(s, e.ggir_day_hours.header, o) : null
			};
		}), p = m.flatMap((e, t) => null != e.validNumber && null != e.hoursNumber ? [{
			index: t,
			valid: e.validNumber,
			hours: e.hoursNumber
		}] : []), g = /* @__PURE__ */ new Map();
		if (p.length > 0) {
			const e = await W(i).ggirDayValidFractions(Float64Array.from(p, (e) => e.valid), Float64Array.from(p, (e) => e.hours));
			p.forEach((t, n) => g.set(t.index, e[n] ?? null));
		}
		const f = !u.columns.includes(d) && m.some((e, t) => !n.nightRecomputed[t]) ? await function(e, t) {
			const n = e.cleanedNightsCsv;
			if (!n) return Promise.resolve(void 0);
			if (ks?.csv !== n || ks.config !== e.configCsv) {
				const i = W(t).readGgirReportCsv(n, e.configCsv);
				ks = {
					csv: n,
					config: e.configCsv,
					table: i
				}, i.catch(() => {
					ks?.table === i && (ks = void 0);
				});
			}
			return ks.table;
		}(t, i) : void 0, h = m.map(({ id: t, day: i, valid: o, hours: l, validNumber: c, hoursNumber: m }, p) => {
			const h = g.get(p) ?? null, _ = a(u, e.ggir_night.header, p), w = Array.from({ length: n.days.rows }, (e, t) => t).find((e) => "WW" === r(n.days, "window", e) && a(n.days, "night_number", e) === _), v = f ? Array.from({ length: f.rows }, (e, t) => t).find((n) => String(r(f, e.ggir_id.header, n)) === String(t) && a(f, e.ggir_night.header, n) === _) : void 0, y = {
				ggir_nonwear_perc_spt: n.nightRecomputed[p] ? void 0 === w ? null : r(n.days, d, w) : u.columns.includes(d) ? r(u, d, p) : f?.columns.includes(d) && void 0 !== v ? r(f, d, v) : void 0 === w ? null : r(n.days, d, w),
				ggir_day_valid_hours: o,
				ggir_day_hours: l,
				ggir_day_valid_fraction: h
			}, b = (s ? null === i ? "duplicate_part2_day" : void 0 === i ? "no_matching_part2_day" : null : "source_reported_missing") ?? "source_reported_missing";
			return {
				values: y,
				reasons: {
					ggir_day_valid_hours: null == c ? b : null,
					ggir_day_hours: null == m ? b : null,
					ggir_day_valid_fraction: null != h ? null : null != m && m <= 0 ? "not_applicable_to_row" : b
				}
			};
		}), _ = o.ggir_review_night_extension, w = [.../* @__PURE__ */ new Set([
			...u.columns,
			..._.map((t) => e[t].header),
			..._.map((t) => e[t].header + "_missing_reason")
		])], v = w.map((t) => {
			const n = _.find((n) => e[n].header + "_missing_reason" === t);
			if (n) return h.map((e) => e.reasons[n] ?? null);
			const i = _.find((n) => e[n].header === t);
			return i ? h.map((e) => e.values[i] ?? null) : u.values[u.columns.indexOf(t)];
		});
		return {
			...n,
			nights: {
				...u,
				columns: w,
				values: v
			}
		};
	};
	return {
		fileId: t.fileId,
		recordingFile: t.recordingFile,
		updatedAt: t.updatedAt,
		...t.part2Reports ? { part2Reports: t.part2Reports } : {},
		edits: t.edits,
		...t.personReports ? { personReports: t.personReports } : {},
		...ar(t.personReports, t.edits, n) ? { personRecomputed: await kr(t, n, i) } : {},
		...t.ggirCorrections ? { ggirCorrections: t.ggirCorrections } : {},
		recomputeAvailable: Boolean(t.ms2 && t.ms3),
		imported: await u(t.imported),
		...t.current ? { current: await u(t.current) } : {}
	};
}
async function Ss(t, n, r, { signal: s } = {}) {
	s?.throwIfAborted();
	const o = t.files.filter((e) => n.includes(e.id)), l = o.map((e) => e.id), c = /* @__PURE__ */ new Map();
	let d = !1;
	try {
		const e = await function(e, { fileIds: t, dateRange: n, signal: i }) {
			const r = Qa(e, Va.circadian, t);
			return async function(e, t, { dateRange: n, signal: i }) {
				const r = W(i), a = [];
				let s = 0;
				for (const o of e) {
					if (!o.id) continue;
					i?.throwIfAborted();
					const e = await t(o.id), l = [];
					for (const t of e.values()) {
						if (i?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
						s += 1;
						const e = ze(o.id, t);
						e && l.push(e);
					}
					if (0 === l.length) continue;
					const { request: c, transfer: d } = We(l.map((e) => e.wire)), u = await r.computeCircadian(h(c, d));
					i?.throwIfAborted();
					const m = new Map(l.map((e) => [e.wire.id, e.source]));
					for (const t of u.day_summaries) {
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
			}(t.length > 0 ? r.files.filter((e) => null != e.id && t.includes(e.id)) : r.files, (e) => is(r, e), {
				dateRange: n,
				signal: i
			});
		}(t, {
			fileIds: l,
			dateRange: r.dateRange,
			signal: s
		});
		for (const t of e.daySummaries) c.set(`${t.fileId}|${t.date}`, {
			l5Hour: t.l5Hour,
			m10Hour: t.m10Hour
		});
	} catch (_) {
		if (_ instanceof Za) throw _;
		if (s?.throwIfAborted(), d = !0, _ instanceof DOMException && "AbortError" === _.name) throw _;
	}
	const m = await Ts(o[0].filename, "computing its sleep rows", () => async function(t, n, r, s, o, l, c) {
		const d = o && o.trim().length > 0 ? o.trim() : null, m = Qa(l, Va.sleep, t), p = m.files, g = Wt(m.studySettings[0]?.extraSettings), h = fe(m.studySettings[0]?.extraSettings?.analysis_paradigm), _ = (t.length > 0 ? p.filter((e) => null != e.id && t.includes(e.id)) : [...p]).sort((e, t) => e.filename.localeCompare(t.filename)), [w, v] = r ?? ["", ""], y = [], b = [], k = [], S = [], T = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), I = async () => {
			for (const [e, t] of T) x.set(e, await Ia(e, t, y, c));
			T.clear();
		}, A = /* @__PURE__ */ new Map(), R = (e) => {
			const t = JSON.stringify(e);
			let n = A.get(t);
			return n || (n = W(c).exportNapAggregate(e), A.set(t, n)), n;
		}, N = await Promise.all(_.map((e) => bs(l, e.id, n, c))), E = await Promise.all(_.map((e) => _a[ae(e, h)].forFile(m, e.id, W(c))));
		for (const [L, C] of _.entries()) {
			if (c?.throwIfAborted(), L > 0 && _[L - 1].filename !== C.filename && await I(), !C.id) continue;
			const t = is(m, C.id), { bundle: n, markersByAlgo: o } = N[L], l = n?.edits ?? [], p = n ? Ne(n.imported) : [], { zone: h } = await qt(C, g, c), x = [.../* @__PURE__ */ new Set([...C.availableDates, ...p.map((e) => e.nightDate)])].sort(), A = r ? x.filter((e) => e >= w && e <= v) : x;
			if (n) {
				const t = new Set(Re(n.imported).map((e) => e.night));
				for (const i of p) {
					if (t.has(i.night) || !A.includes(i.nightDate)) continue;
					const r = Z(i, o.get(i.nightDate)?.[0]).kind;
					"scored" !== r && "invalid" !== r && k.push({
						file: "sleep_export.csv",
						row: 0,
						key: `${e.filename.header}=${C.filename}|${e.study_date.header}=${i.nightDate}`,
						column: `GGIR night ${String(i.night)}: ${Ae(n.imported, i.night)}`,
						reason: "ggir_night_excluded"
					});
				}
			}
			const $ = Q(t.values()), O = E[L], D = A.flatMap((e) => (o.get(e) ?? []).filter((e) => M(e) || e.nonwearMarkers.length > 0).map((t) => ({
				markers: t,
				sleepPeriods: O.sleepPeriodsOf(e, t),
				nonwear: t.nonwearMarkers.map((e) => ({
					start: e.startTimestamp,
					end: e.endTimestamp
				}))
			}))), F = [...t.keys()].sort().map((e) => t.get(e)), j = F.map((e) => xe(e).timestamps), P = ba.flatMap((e) => {
				if (!F.some((t) => t[e])) return [];
				const t = [], n = [];
				for (const [i, r] of F.entries()) {
					const a = r[e];
					if (!a) continue;
					const s = new Float64Array(a), o = j[i];
					for (let e = 0; e < Math.min(s.length, o.length); e++) t.push(o[e]), n.push(s[e]);
				}
				return [{
					field: e,
					timestamps: Float64Array.from(t),
					values: Float64Array.from(n)
				}];
			}), G = 0 === D.length ? [] : await W(c).exportFileNightFigures(D.map(({ sleepPeriods: e, nonwear: t }) => ({
				periods: e.map((e) => ({
					start: e.onsetTimestamp,
					end: e.offsetTimestamp
				})),
				nonwear: t
			})), P), B = /* @__PURE__ */ new Map();
			let z = 0;
			for (const e of D) B.set(e.markers, {
				...e,
				figures: G.slice(z, z + e.sleepPeriods.length)
			}), z += e.sleepPeriods.length;
			for (const r of A) {
				c?.throwIfAborted();
				const m = o.get(r);
				if (m && 0 !== m.length) for (const o of m) {
					const m = B.get(o);
					if (!m) continue;
					const { sleepPeriods: g, figures: _ } = m, w = C.participantId ?? null, v = C.id, k = o.algorithm ?? null, M = o.username ?? null, x = o.needsConsensus, I = o.notes, A = t.get(r), N = await Pe(r, C.navigationFacts, W(c)), E = t.get(N), L = {
						fileId: v,
						filename: C.filename,
						participantId: w,
						studyDate: r,
						algorithm: k,
						scoredBy: M,
						needsConsensus: x,
						notes: I,
						meanTemperature: null,
						meanWhiteLight: null,
						meanRedLight: null,
						meanGreenLight: null,
						meanBlueLight: null,
						detectionRule: o.detectionRule ?? null,
						periodGuider: o.periodGuider ?? null,
						...Sa(o.sleepPeriodDetectionConfig),
						algorithmVersion: o.algorithmVersion ?? null,
						verificationStatus: null,
						studyId: d,
						markerStepSeconds: f(k, C.epochLengthSeconds),
						dstTransition: await re(h, r, void 0, W(c))
					}, D = await R(g.filter((e) => e.markerType === u.NAP).map((e) => ({
						start: e.onsetTimestamp,
						end: e.offsetTimestamp
					}))), F = s?.get(`${String(v)}|${r}`), j = {
						l5Hour: F?.l5Hour ?? null,
						m10Hour: F?.m10Hour ?? null,
						napCount: D.napCount,
						totalNapMinutes: D.napCount > 0 ? D.totalNapMinutes : null
					}, G = $(k), z = It(A, G), U = `${C.filename}\0${w ?? ""}\0${L.algorithm ?? ""}\0${L.detectionRule ?? ""}`, V = T.get(U) ?? [];
					V.push({
						date: r,
						epochLengthSeconds: C.epochLengthSeconds || 60,
						timestamps: z.timestamps,
						states: z.algorithmResults,
						stale: "stale" === G.status
					}), T.set(U, V);
					const q = xe(A), H = await rn(t, r, G, {
						signal: c,
						nextDate: N
					}), K = _.map(({ means: e }) => new Map(P.map(({ field: t }, n) => [t, e[n] ?? null]))), J = async (t, s, d) => {
						let m = null;
						const g = p.find((e) => e.nightDate === r), f = n && g && t.markerType === u.MAIN_SLEEP && "invalid" !== Z(g, o).kind, h = g && l.some((e) => e.night === g.night), w = Ta(null), v = {};
						let y = "not_applicable_to_row";
						const b = O.sleepRowMetrics?.cells(t) ?? null;
						if (b && (y = b.metricMissingReason, Object.assign(w, b.metrics), Object.assign(v, b.reasons)), !f && !b && t.onsetTimestamp && t.offsetTimestamp) {
							const { timestamps: e, algorithmResults: n, activity: i, scoresStale: r } = H;
							if (null !== r && 0 === S.length && S.push({
								component: "metric_computation",
								code: "unavailable",
								message: r
							}), y = null !== r ? "scores_from_another_config" : null == n ? "no_scored_epochs" : null == i ? "channel_unavailable" : 0 === e.length ? "no_valid_epochs" : void 0, null != n && e.length > 0 && (null != i || q.ggir)) {
								const r = q.epochSec ?? (C.epochLengthSeconds || 60), a = await xa(n, i, e, t.onsetTimestamp, t.offsetTimestamp, r, c);
								m = a.metrics, m || a.error || (y = "no_valid_epochs"), a.error && (y = "not_computed_for_export"), a.error && 0 === S.length && S.push({
									component: "metric_computation",
									code: "unavailable",
									message: "Metric computation failed for at least one selected period; those rows carry no numerics."
								});
							}
						}
						if (f) {
							y = "channel_unavailable";
							const t = h ? n.current?.nights : n.imported.nights, r = t ? i(t, e.ggir_night.header, g.night) : -1;
							for (const [n, i, s, o] of ya) {
								const l = t ? a(t, e[i].header, r) : null;
								w[n] = null == l ? null : l * o, v[s] = null == l ? h ? "not_computed_for_export" : "source_reported_missing" : void 0;
							}
						}
						(f || b || m && !("averageAwakeningLengthMinutes" in m)) && (v.average_awakening_length_minutes = "not_computed_for_export");
						const { figures: k } = _[d], M = Boolean(t.onsetTimestamp && t.offsetTimestamp), T = (e) => M ? K[d].get(e) ?? null : null, x = {
							...L,
							...j,
							periodIndex: t.markerIndex,
							markerType: t.markerType,
							onsetTimestamp: t.onsetTimestamp,
							offsetTimestamp: t.offsetTimestamp,
							...f || b ? w : Ta(m),
							inBedTimestamp: b?.inBedSpan?.startTimestamp ?? null,
							outOfBedTimestamp: b?.inBedSpan?.endTimestamp ?? null,
							metricMissingReason: y,
							isInvalidNight: s,
							meanTemperature: T("temperature"),
							meanWhiteLight: T("lux"),
							meanRedLight: T("redLight"),
							meanGreenLight: T("greenLight"),
							meanBlueLight: T("blueLight"),
							sleepMidpointTimestamp: M ? k.midpointTimestamp : null,
							sleepMidpointHour: M ? k.midpointClockHour : null,
							validWearMinutes: k.validWearMinutes
						}, I = (e, t) => null != e ? void 0 : M ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
						return x.sensorMissingReasons = {
							mean_temperature_c: I(x.meanTemperature, Boolean(A?.temperature || E?.temperature)),
							mean_white_light_lux: I(x.meanWhiteLight, Boolean(A?.lux || E?.lux)),
							mean_red_light: I(x.meanRedLight, Boolean(A?.redLight || E?.redLight)),
							mean_green_light: I(x.meanGreenLight, Boolean(A?.greenLight || E?.greenLight)),
							mean_blue_light: I(x.meanBlueLight, Boolean(A?.blueLight || E?.blueLight))
						}, x.derivedMissingReasons = {
							...v,
							l5_hour: null == x.l5Hour ? F ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							m10_hour: null == x.m10Hour ? F ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							sleep_midpoint_time: null == x.sleepMidpointTimestamp ? M ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							sleep_midpoint_hour: null == x.sleepMidpointHour ? M ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							valid_wear_minutes: null == x.validWearMinutes ? M ? "no_valid_epochs" : "not_applicable_to_row" : void 0
						}, x;
					};
					if (o.isInvalidNight) {
						y.push({
							...L,
							...j,
							periodIndex: null,
							markerType: ka,
							onsetTimestamp: null,
							offsetTimestamp: null,
							...Ta(null),
							isInvalidNight: !0,
							sleepMidpointTimestamp: null,
							sleepMidpointHour: null,
							validWearMinutes: null
						});
						for (const [e, t] of g.entries()) y.push(await J(t, !0, e));
					} else for (const [e, t] of g.entries()) y.push(await J(t, !1, e));
					for (const e of o.nonwearMarkers) b.push({
						...L,
						...j,
						periodIndex: e.markerIndex ?? 0,
						markerType: Ma,
						onsetTimestamp: e.startTimestamp,
						offsetTimestamp: e.endTimestamp,
						...Ta(null),
						isInvalidNight: !1,
						sleepMidpointTimestamp: null,
						sleepMidpointHour: null,
						validWearMinutes: null
					});
				}
			}
		}
		await I(), y.sort(Aa), b.sort(Aa);
		const $ = await async function(e, t) {
			const n = e.filter((e) => e.markerType === u.MAIN_SLEEP), i = /* @__PURE__ */ new Map();
			for (const o of n) {
				const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = i.get(e);
				t ? t.push(o) : i.set(e, [o]);
			}
			const r = [...i], a = await W(t).summarizeExportGroups(r.map(([, e]) => e.map((e) => ({
				study_date: e.studyDate,
				total_nap_minutes: e.totalNapMinutes,
				values: Ra.map(([, t]) => e[t])
			})))), s = r.map(([e, t], n) => {
				const [i, r, s, o] = e.split("\0"), l = a[n], c = Object.fromEntries(Ra.map(([e], t) => [e, l.means[t] ?? null]));
				return {
					filename: i,
					participantId: r,
					algorithm: s,
					detectionRule: o,
					nNights: l.nNights,
					...c,
					meanTemperatureMissingReason: null == c.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
					metricMissingReasons: Object.fromEntries(Ra.map(([e, n]) => {
						const i = Na[e], r = ya.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : i), a = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[r] ?? e.metricMissingReason).find(Boolean);
						return [i, null == c[e] ? a : void 0];
					})),
					sleepRegularityIndex: null,
					meanTotalNapMinutes: l.meanTotalNapMinutes,
					studyId: t[0]?.studyId ?? null
				};
			});
			return s.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), s;
		}(y, c);
		for (const e of $) {
			const t = `${e.filename}\0${e.participantId}\0${e.algorithm}\0${e.detectionRule}`, n = x.get(t);
			e.sleepRegularityIndex = n?.sri ?? null, e.sleepRegularityMissingReason = n?.sriMissingReason ?? (n ? void 0 : "not_computed_for_export");
		}
		return {
			sleepRows: y,
			nonwearRows: b,
			summaryRows: $,
			degradations: S,
			nightReasons: k
		};
	}(l, r.username, r.dateRange, c, r.studyId, t, s)), p = await Ts(o[0].filename, "drawing its visual report", async () => {
		const e = [];
		for (const n of o) e.push(await Gr({
			...r,
			snapshot: t
		}, n, s));
		return e;
	}), { generateLocalPhysicalActivityExportRows: g } = await import("./local-physical-activity-export-r1D_DejU.js");
	return {
		part: m,
		physicalActivityRows: await g(t, l, r.dateRange, {
			username: r.username,
			cutpointOverrides: r.physicalActivity.cutpointOverrides,
			maskPolicy: r.physicalActivity.maskPolicy,
			choiAxis: r.physicalActivity.choiAxis,
			exportedAt: r.exportedAt,
			...s ? { signal: s } : {}
		}),
		eventMarkerRows: await as(l, r.dateRange, t, r.username, s),
		circadianDegraded: d,
		reports: p
	};
}
async function Ts(e, t, n) {
	try {
		return await n();
	} catch (i) {
		if (i instanceof DOMException && "AbortError" === i.name) throw i;
		throw new $n(e, t, i);
	}
}
new Set(wa.filter((e) => "streamed" === e.write.kind).map((e) => e.entry)), A(function() {
	const e = (e) => () => {
		throw new w(e, "an export worker holds none of the page's state; pass the value in with the export request");
	};
	return {
		scoring: e("scoring"),
		auth: { clear: e("auth.clear") },
		jobs: e("jobs"),
		workspaces: {
			activeId: e("workspaces.activeId"),
			clearActiveId: e("workspaces.clearActiveId"),
			workspace: e("workspaces.workspace"),
			hasDatabase: e("workspaces.hasDatabase"),
			forgetDatabases: e("workspaces.forgetDatabases")
		},
		capabilities: {
			serverAvailable: e("capabilities.serverAvailable"),
			onServerAvailable: e("capabilities.onServerAvailable")
		},
		sync: { recordAuditQuarantine: e("sync.recordAuditQuarantine") },
		storage: { reportFull: e("storage.reportFull") },
		flushPendingSave: e("flushPendingSave"),
		nights: { writeHeadless: e("nights.writeHeadless") }
	};
}()), m({
	async group(e, t, n) {
		try {
			return { result: await Ss(ws(t), e, n) };
		} catch (i) {
			if (i instanceof $n) return { failure: i.wire };
			throw i;
		}
	},
	deflate(e, t) {
		const n = function(e, t) {
			return {
				bytes: Ea(e, t),
				crc: La(e)
			};
		}(e, t);
		return h(n, [n.bytes.buffer]);
	}
});
export { ri as A, en as B, ui as C, si as D, Zn as E, Pn as F, $t as G, zt as H, Fn as I, Pt as J, jt as K, tn as L, ti as M, oi as N, di as O, jn as P, Xt as R, ci as S, ei as T, Dt as U, qt as V, Lt as W, We as X, Ct as Y, ze as Z, Yr as _, gs as a, nr as b, ms as c, is as d, ts as f, Vr as g, Hr as h, ss as i, ai as j, Xn as k, Va as l, Ur as m, ls as n, us as o, zr as p, At as q, os as r, ps as s, hs as t, Qa as u, Jr as v, mi as w, Bn as x, zi as y, Qt as z };
