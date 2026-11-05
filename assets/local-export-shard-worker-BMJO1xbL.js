import { n as e, r as t, s as n, t as a } from "./ggir-results-types-WB8axvb-.js";
import { c as i, i as s, u as r } from "./workers-BJY_aGrI.js";
import { Bt as o, Lt as l, Ot as u, Rt as c, Yt as d, a as m, g as p, l as g, o as f, s as h, xn as w, zt as _ } from "./schema-pjCtvTl3.js";
import { A as y, M as v, N as M, P as b, b as k, j as S, k as T, m as I } from "./nonwear-display-slots-CkRogAfe.js";
import { G as x, K as A, U as N, _ as R, it as E, j as $, m as O, q as C, t as D } from "./workspace-db-BGLMk_xQ.js";
import { a as L } from "./content-hash-DLHDa8U_.js";
import { a as B, d as P, g as F, l as W, n as j, t as G } from "./background-jobs-Bw-sr73X.js";
import { a as U } from "./project-revision-BybjU3q4.js";
import { B as z, C as H, G as V, Ht as q, I as K, Jt as J, N as Y, P as Z, Rt as Q, Tt as X, Ut as ee, Yt as te, j as ne, tn as ae, w as ie, x as se } from "./store-BKMHiWc9.js";
import { H as re, N as oe, m as le, u as ue } from "./night-session-registry-BxoMUVbe.js";
import { d as ce, l as de, p as me } from "./sleep-period-detection-fRVpitfd.js";
import "./audit-hash-DC-tONR6.js";
import { _ as pe, c as ge, d as fe, f as he, i as we, l as _e, r as ye } from "./ggir-results-import-Bo67_9KJ.js";
import { B as ve, E as Me, I as be, L as ke, N as Se, R as Te, T as Ie, c as xe } from "./local-nonwear-unified-BaLzJ0A4.js";
import { C as Ae, D as Ne, E as Re, S as Ee, T as $e, _ as Oe, d as Ce, i as De, m as Le, n as Be, o as Pe, p as Fe, r as We, t as je, w as Ge, x as Ue } from "./valid-day-criteria-DA1LBKOr.js";
import { h as ze, m as He, v as Ve } from "./diary-local-import-contract-BWlUaWfv.js";
var qe = Uint8Array, Ke = Uint16Array, Je = Int32Array, Ye = new qe([
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
]), Ze = new qe([
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
]), Qe = new qe([
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
]), Xe = function(e, t) {
	for (var n = new Ke(31), a = 0; a < 31; ++a) n[a] = t += 1 << e[a - 1];
	var i = new Je(n[30]);
	for (a = 1; a < 30; ++a) for (var s = n[a]; s < n[a + 1]; ++s) i[s] = s - n[a] << 5 | a;
	return {
		b: n,
		r: i
	};
}, et = Xe(Ye, 2), tt = et.b, nt = et.r;
tt[28] = 258, nt[258] = 28;
for (var at = Xe(Ze, 0), it = (at.b, at.r), st = new Ke(32768), rt = 0; rt < 32768; ++rt) {
	var ot = (43690 & rt) >> 1 | (21845 & rt) << 1;
	ot = (61680 & (ot = (52428 & ot) >> 2 | (13107 & ot) << 2)) >> 4 | (3855 & ot) << 4, st[rt] = ((65280 & ot) >> 8 | (255 & ot) << 8) >> 1;
}
var lt = function(e, t, n) {
	for (var a = e.length, i = 0, s = new Ke(t); i < a; ++i) e[i] && ++s[e[i] - 1];
	var r, o = new Ke(t);
	for (i = 1; i < t; ++i) o[i] = o[i - 1] + s[i - 1] << 1;
	if (n) {
		r = new Ke(1 << t);
		var l = 15 - t;
		for (i = 0; i < a; ++i) if (e[i]) for (var u = i << 4 | e[i], c = t - e[i], d = o[e[i] - 1]++ << c, m = d | (1 << c) - 1; d <= m; ++d) r[st[d] >> l] = u;
	} else for (r = new Ke(a), i = 0; i < a; ++i) e[i] && (r[i] = st[o[e[i] - 1]++] >> 15 - e[i]);
	return r;
}, ut = new qe(288);
for (rt = 0; rt < 144; ++rt) ut[rt] = 8;
for (rt = 144; rt < 256; ++rt) ut[rt] = 9;
for (rt = 256; rt < 280; ++rt) ut[rt] = 7;
for (rt = 280; rt < 288; ++rt) ut[rt] = 8;
var ct = new qe(32);
for (rt = 0; rt < 32; ++rt) ct[rt] = 5;
var dt = lt(ut, 9, 0), mt = lt(ct, 5, 0), pt = function(e) {
	return (e + 7) / 8 | 0;
}, gt = [
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
], ft = function(e, t, n) {
	var a = new Error(t || gt[e]);
	if (a.code = e, Error.captureStackTrace && Error.captureStackTrace(a, ft), !n) throw a;
	return a;
}, ht = function(e, t, n) {
	n <<= 7 & t;
	var a = t / 8 | 0;
	e[a] |= n, e[a + 1] |= n >> 8;
}, wt = function(e, t, n) {
	n <<= 7 & t;
	var a = t / 8 | 0;
	e[a] |= n, e[a + 1] |= n >> 8, e[a + 2] |= n >> 16;
}, _t = function(e, t) {
	for (var n = [], a = 0; a < e.length; ++a) e[a] && n.push({
		s: a,
		f: e[a]
	});
	var i = n.length, s = n.slice();
	if (!i) return {
		t: Tt,
		l: 0
	};
	if (1 == i) {
		var r = new qe(n[0].s + 1);
		return r[n[0].s] = 1, {
			t: r,
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
	var m = s[0].s;
	for (a = 1; a < i; ++a) s[a].s > m && (m = s[a].s);
	var p = new Ke(m + 1), g = yt(n[c - 1], p, 0);
	if (g > t) {
		a = 0;
		var f = 0, h = g - t, w = 1 << h;
		for (s.sort(function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		}); a < i; ++a) {
			var _ = s[a].s;
			if (!(p[_] > t)) break;
			f += w - (1 << g - p[_]), p[_] = t;
		}
		for (f >>= h; f > 0;) {
			var y = s[a].s;
			p[y] < t ? f -= 1 << t - p[y]++ - 1 : ++a;
		}
		for (; a >= 0 && f; --a) {
			var v = s[a].s;
			p[v] == t && (--p[v], ++f);
		}
		g = t;
	}
	return {
		t: new qe(p),
		l: g
	};
}, yt = function(e, t, n) {
	return -1 == e.s ? Math.max(yt(e.l, t, n + 1), yt(e.r, t, n + 1)) : t[e.s] = n;
}, vt = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new Ke(++t), a = 0, i = e[0], s = 1, r = function(e) {
		n[a++] = e;
	}, o = 1; o <= t; ++o) if (e[o] == i && o != t) ++s;
	else {
		if (!i && s > 2) {
			for (; s > 138; s -= 138) r(32754);
			s > 2 && (r(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0);
		} else if (s > 3) {
			for (r(i), --s; s > 6; s -= 6) r(8304);
			s > 2 && (r(s - 3 << 5 | 8208), s = 0);
		}
		for (; s--;) r(i);
		s = 1, i = e[o];
	}
	return {
		c: n.subarray(0, a),
		n: t
	};
}, Mt = function(e, t) {
	for (var n = 0, a = 0; a < t.length; ++a) n += e[a] * t[a];
	return n;
}, bt = function(e, t, n) {
	var a = n.length, i = pt(t + 2);
	e[i] = 255 & a, e[i + 1] = a >> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
	for (var s = 0; s < a; ++s) e[i + s + 4] = n[s];
	return 8 * (i + 4 + a);
}, kt = function(e, t, n, a, i, s, r, o, l, u, c) {
	ht(t, c++, n), ++i[256];
	for (var d = _t(i, 15), m = d.t, p = d.l, g = _t(s, 15), f = g.t, h = g.l, w = vt(m), _ = w.c, y = w.n, v = vt(f), M = v.c, b = v.n, k = new Ke(19), S = 0; S < _.length; ++S) ++k[31 & _[S]];
	for (S = 0; S < M.length; ++S) ++k[31 & M[S]];
	for (var T = _t(k, 7), I = T.t, x = T.l, A = 19; A > 4 && !I[Qe[A - 1]]; --A);
	var N, R, E, $, O = u + 5 << 3, C = Mt(i, ut) + Mt(s, ct) + r, D = Mt(i, m) + Mt(s, f) + r + 14 + 3 * A + Mt(k, I) + 2 * k[16] + 3 * k[17] + 7 * k[18];
	if (l >= 0 && O <= C && O <= D) return bt(t, c, e.subarray(l, l + u));
	if (ht(t, c, 1 + (D < C)), c += 2, D < C) {
		N = lt(m, p, 0), R = m, E = lt(f, h, 0), $ = f;
		var L = lt(I, x, 0);
		for (ht(t, c, y - 257), ht(t, c + 5, b - 1), ht(t, c + 10, A - 4), c += 14, S = 0; S < A; ++S) ht(t, c + 3 * S, I[Qe[S]]);
		c += 3 * A;
		for (var B = [_, M], P = 0; P < 2; ++P) {
			var F = B[P];
			for (S = 0; S < F.length; ++S) {
				var W = 31 & F[S];
				ht(t, c, L[W]), c += I[W], W > 15 && (ht(t, c, F[S] >> 5 & 127), c += F[S] >> 12);
			}
		}
	} else N = dt, R = ut, E = mt, $ = ct;
	for (S = 0; S < o; ++S) {
		var j = a[S];
		if (j > 255) {
			wt(t, c, N[257 + (W = j >> 18 & 31)]), c += R[W + 257], W > 7 && (ht(t, c, j >> 23 & 31), c += Ye[W]);
			var G = 31 & j;
			wt(t, c, E[G]), c += $[G], G > 3 && (wt(t, c, j >> 5 & 8191), c += Ze[G]);
		} else wt(t, c, N[j]), c += R[j];
	}
	return wt(t, c, N[256]), c + R[256];
}, St = new Je([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), Tt = new qe(0), It = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new qe(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, a, i) {
			if (!i && (i = { l: 1 }, t.dictionary)) {
				var s = t.dictionary.subarray(-32768), r = new qe(s.length + e.length);
				r.set(s), r.set(e, s.length), e = r, i.w = s.length;
			}
			return function(e, t, n, a, i, s) {
				var r = s.z || e.length, o = new qe(a + r + 5 * (1 + Math.ceil(r / 7e3)) + i), l = o.subarray(a, o.length - i), u = s.l, c = 7 & (s.r || 0);
				if (t) {
					c && (l[0] = s.r >> 3);
					for (var d = St[t - 1], m = d >> 13, p = 8191 & d, g = (1 << n) - 1, f = s.p || new Ke(32768), h = s.h || new Ke(g + 1), w = Math.ceil(n / 3), _ = 2 * w, y = function(t) {
						return (e[t] ^ e[t + 1] << w ^ e[t + 2] << _) & g;
					}, v = new Je(25e3), M = new Ke(288), b = new Ke(32), k = 0, S = 0, T = s.i || 0, I = 0, x = s.w || 0, A = 0; T + 2 < r; ++T) {
						var N = y(T), R = 32767 & T, E = h[N];
						if (f[R] = E, h[N] = R, x <= T) {
							var $ = r - T;
							if ((k > 7e3 || I > 24576) && ($ > 423 || !u)) {
								c = kt(e, l, 0, v, M, b, S, I, A, T - A, c), I = k = S = 0, A = T;
								for (var O = 0; O < 286; ++O) M[O] = 0;
								for (O = 0; O < 30; ++O) b[O] = 0;
							}
							var C = 2, D = 0, L = p, B = R - E & 32767;
							if ($ > 2 && N == y(T - B)) for (var P = Math.min(m, $) - 1, F = Math.min(32767, T), W = Math.min(258, $); B <= F && --L && R != E;) {
								if (e[T + C] == e[T + C - B]) {
									for (var j = 0; j < W && e[T + j] == e[T + j - B]; ++j);
									if (j > C) {
										if (C = j, D = B, j > P) break;
										var G = Math.min(B, j - 2), U = 0;
										for (O = 0; O < G; ++O) {
											var z = T - B + O & 32767, H = z - f[z] & 32767;
											H > U && (U = H, E = z);
										}
									}
								}
								B += (R = E) - (E = f[R]) & 32767;
							}
							if (D) {
								v[I++] = 268435456 | nt[C] << 18 | it[D];
								var V = 31 & nt[C], q = 31 & it[D];
								S += Ye[V] + Ze[q], ++M[257 + V], ++b[q], x = T + C, ++k;
							} else v[I++] = e[T], ++M[e[T]];
						}
					}
					for (T = Math.max(T, x); T < r; ++T) v[I++] = e[T], ++M[e[T]];
					c = kt(e, l, u, v, M, b, S, I, A, T - A, c), u || (s.r = 7 & c | l[c / 8 | 0] << 3, c -= 7, s.h = h, s.p = f, s.i = T, s.w = x);
				} else {
					for (T = s.w || 0; T < r + u; T += 65535) {
						var K = T + 65535;
						K >= r && (l[c / 8 | 0] = u, K = r), c = bt(l, c + 1, e.subarray(T, K));
					}
					s.i = r;
				}
				return function(e, t, n) {
					return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new qe(e.subarray(t, n));
				}(o, 0, a + pt(c) + i);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? i.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, 0, 0, i);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || ft(5), this.s.l && ft(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var a = new qe(-32768 & n);
				a.set(this.b.subarray(0, this.s.z)), this.b = a;
			}
			var i = this.b.length - this.s.z;
			this.b.set(e.subarray(0, i), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(i), 32768), this.s.z = e.length - i + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = Tt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || ft(5), this.s.l && ft(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new qe(6);
			t[0] = this.s.r >> 3;
			var n = bt(t, this.s.r, Tt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), xt = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	xt.decode(Tt, { stream: !0 });
} catch ($s) {}
function At(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function Nt(e) {
	const t = [
		"timestamps",
		"activity",
		"sleep_scores"
	].flatMap((t) => {
		const n = new Uint32Array(e.length + 1);
		for (const [r, o] of e.entries()) n[r + 1] = n[r] + (o[t]?.length ?? 0);
		const a = "sleep_scores" === t ? Uint8Array : Float64Array, i = e[0]?.[t], s = 1 === e.length && i instanceof a ? i : new a(n[e.length]);
		if (s !== i) for (const [r, o] of e.entries()) s.set(o[t] ?? [], n[r]);
		return [s, n];
	});
	return {
		request: [JSON.stringify({ days: e.map(({ timestamps: e, activity: t, sleep_scores: n, ...a }) => a) }), ...t],
		transfer: t.filter((t) => !e.some((e) => t === e.timestamps || t === e.activity)).map((e) => e.buffer)
	};
}
function Rt(e, t) {
	const n = function(e) {
		const t = At(e.ggirTimestamps), n = At(e.ggirEnmo);
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
	const { timestamps: a, signal: i } = n, s = a[1] - a[0];
	if (!(s > 0 && Number.isInteger(s))) return null;
	for (let r = 1; r < a.length; r++) if (a[r] - a[r - 1] !== s) return null;
	return {
		wire: {
			id: `${String(e)}:${t.date}`,
			series_id: String(e),
			analysis_date: t.date,
			epoch_length_seconds: s,
			timestamps: a,
			activity: i
		},
		source: n.source
	};
}
async function Et(e, t, n, a, i = 60, s, r) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == a || n >= a) return null;
	const o = new Uint8Array(e.length);
	for (let u = 0; u < e.length; u++) o[u] = 1 === e[u] ? 1 : 0;
	const l = await $t(o, s && s.length === e.length ? s : new Float64Array(e.length), t, n, a, i, r);
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
async function $t(e, t, n, a, i, s = 60, r) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == a || null == i || a >= i) return null;
	const o = await async function(e, t, n, a) {
		const i = await G(a).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === i.length ? {
			startIdx: i[0],
			endIdx: i[1]
		} : null;
	}(n, a, i, r);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, u = o.endIdx + 1, c = e instanceof Uint8Array ? e.slice(l, u) : new Uint8Array(e.slice(l, u)), d = t instanceof Float64Array ? t.slice(l, u) : Float64Array.from(t.slice(l, u)), m = await G(r).computeSleepMetrics(c, d, s), p = n[l] ?? 0, g = n[u - 1] ?? p, f = null != m.firstSleepEpochIdx ? n[l + m.firstSleepEpochIdx] ?? p : p, h = null != m.lastSleepEpochIdx ? n[l + m.lastSleepEpochIdx] ?? g : g;
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
function Ot(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const a = Q(e), i = Array.from(a.timestamps);
	if (a.ggir) return {
		timestamps: i,
		algorithmResults: a.sleepScores,
		activity: null,
		scoresStale: null
	};
	const s = e.axisY;
	let r = s ? new Float64Array(s) : null;
	const o = r ? e.actiwareActivityInvalid : void 0;
	if (r && o) {
		const e = new Uint8Array(o);
		if (e.length === r.length && e.some((e) => 1 === e)) {
			r = r.slice();
			for (let t = 0; t < e.length; t += 1) 1 === e[t] && (r[t] = NaN);
		}
	}
	if (!e.algorithmResults || "object" != typeof e.algorithmResults) return console.warn(`[loadActivityForMetrics] Missing algorithmResults for activity day id=${e.id}`), {
		timestamps: i,
		algorithmResults: null,
		activity: r,
		scoresStale: n
	};
	const l = k(e, t);
	return {
		timestamps: i,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: r,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
const Ct = /* @__PURE__ */ new Map();
async function Dt(e, t) {
	if (Ct.has(e)) return Ct.get(e);
	try {
		const n = await G(t).resolveTimezone(e);
		return Ct.set(e, n), n;
	} catch (ft) {
		t?.throwIfAborted(), console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, ft);
		return;
	}
}
function Lt(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : He();
}
async function Bt(e) {
	try {
		return Lt((await Z(e))?.extraSettings);
	} catch (ft) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", ft), He();
	}
}
function Pt(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const Ft = {
	zone: null,
	reason: null
};
async function Wt(e, t, n) {
	const a = e.ggirTimezone?.trim();
	let i = null;
	if (a) {
		const e = await Dt(a, n);
		if (!e) return Ft;
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
	if (null === i) return me(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : Ft;
	const s = await Dt(t, n);
	if (void 0 === s) return Ft;
	if ("iana" !== s?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const r = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== r && (await Ve(s.zone, r, G(n))).includes(i) ? {
		zone: s.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${Pt(i)} is not a ${s.zone} offset`
	};
}
function jt(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [a, i] of e.entries()) t[a + 1] = t[a] + i.length;
	const n = new Float64Array(t[e.length]);
	for (const [a, i] of e.entries()) n.set(i, t[a]);
	return [n, t];
}
const Gt = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), Ut = [
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
var zt = Ut.map(() => Gt);
Object.fromEntries(Ut.map(([e], t) => [e, zt[t]]));
const Ht = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values($).filter((e) => ![
		$.choi_2012,
		$.choi_2011,
		$.van_hees_2023,
		$.detach_nonwear
	].some((t) => t === e))
];
async function Vt(e, t, n, a) {
	const i = void 0 === t ? n?.window[e] : 48 === t ? n?.view48[e] : void 0;
	if (i) return {
		start: i[0],
		end: i[1]
	};
	const r = await (a ?? s()).analysisWindowBounds(e, t);
	return r ? {
		start: r[0],
		end: r[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function qt(e, t, n) {
	const a = e instanceof Float64Array ? e : Float64Array.from(e), [i, r] = await (n ?? s()).analysisWindowSlice(a, t);
	return {
		startIndex: i,
		endIndex: r
	};
}
async function Kt(e, t = s()) {
	const n = [...new Set(e)], a = await t.analysisDatesOf(Float64Array.from(n)), i = new Map(n.map((e, t) => [e, a[t] ?? ""]));
	return (e) => i.get(e) ?? "";
}
function Jt(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [a, i] of Object.entries(xe(e, e.nonwearChoiAxis ?? Me()))) i && (n[t[a] ?? a] = new Uint8Array(i));
	return n;
}
async function Yt(e, t, n, a = {}) {
	const { signal: i, includeNonwearMasks: s = !1 } = a, r = e.get(t), o = Ot(r, n), l = s && r ? Jt(r) : {}, u = e.get(await I(t, void 0, G(i))), c = o.timestamps[o.timestamps.length - 1], d = u ? Ot(u, n) : null, m = d?.timestamps[0], p = void 0 !== u && null !== d && void 0 !== c && void 0 !== m && m > c, g = o.scoresStale ?? d?.scoresStale ?? null;
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
	const f = o.timestamps.length, h = f + d.timestamps.length, w = o.algorithmResults.length >= f && d.algorithmResults && d.algorithmResults.length >= d.timestamps.length ? new Uint8Array(h) : null;
	w?.set(o.algorithmResults.subarray(0, f)), d.algorithmResults && w?.set(d.algorithmResults.subarray(0, h - f), f);
	const _ = o.activity && d.activity ? new Float64Array(h) : null;
	o.activity && _?.set(o.activity.subarray(0, f)), d.activity && _?.set(d.activity.subarray(0, h - f), f);
	const y = s ? Jt(u) : {}, v = {};
	for (const M of Ht) {
		const e = l[M], t = y[M];
		if (!e && !t) continue;
		const n = new Uint8Array(h);
		e && n.set(e.subarray(0, f)), t && n.set(t.subarray(0, h - f), f), v[M] = n;
	}
	return {
		timestamps: [...o.timestamps, ...d.timestamps],
		algorithmResults: w,
		activity: _,
		masks: v,
		scoresStale: null
	};
}
async function Zt(e, t, n, a) {
	const i = await n.files.get(e.fileId);
	if (!i) return;
	const s = /* @__PURE__ */ new Map();
	for (const r of [e.date, await I(e.date, void 0, G(a))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, r]).first();
		t && s.set(r, t);
	}
	await async function(e, t, n, a) {
		const { date: i, file: s, activityMap: r, verdict: o } = t, l = t.spanning ?? await Yt(r, i, o, { signal: a });
		if (null !== l.scoresStale || !l.algorithmResults) return e.sleepMarkers.map(() => null);
		const u = function(e, t) {
			return JSON.stringify([
				t.seriesRevision ?? 0,
				t.epochLengthSeconds || 60,
				e.algorithm,
				e.sleepMarkers.map((e) => [e.onsetTimestamp ?? null, e.offsetTimestamp ?? null])
			]);
		}(e, s);
		if (e.periodMetrics?.inputs === u) return e.periodMetrics.metrics;
		const { timestamps: c, algorithmResults: d } = l, m = [];
		for (const p of e.sleepMarkers) m.push(d && c.length > 0 && p.onsetTimestamp && p.offsetTimestamp ? await $t(d, l.activity ?? new Float64Array(d.length), l.timestamps, p.onsetTimestamp, p.offsetTimestamp, s.epochLengthSeconds || 60, a) : null);
		if (void 0 !== e.id) try {
			await U(n, [n.markers], () => le(e.id, {
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
		activityMap: s,
		verdict: t
	}, n, a);
}
Object.fromEntries(Object.values($).map((e) => [e, e === $.ggir_saved ? de : Se(e)]));
const Qt = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], Xt = ["under-series", "over-series"], en = ["full-resolution-v1", "min-max-gap-envelope-v1"], tn = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function nn(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function an(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? nn(t, "expected an object") : e;
}
function sn(e, t) {
	return Array.isArray(e) ? e : nn(t, "expected an array");
}
function rn(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : nn(t, "expected a finite number");
}
function on(e, t) {
	const n = rn(e, t);
	return n <= 0 ? nn(t, "expected a positive number") : n;
}
function ln(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : nn(t, "expected a safe integer");
}
function un(e, t) {
	const n = ln(e, t);
	return n < 0 ? nn(t, "expected a non-negative safe integer") : n;
}
function cn(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? nn(t, "expected a boolean") : { [n]: e };
}
function dn(e, t) {
	return "string" != typeof e || 0 === e.length ? nn(t, "expected a non-empty string") : e;
}
function mn(e, t) {
	return "string" == typeof e && Qt.includes(e) ? e : nn(t, "expected a supported tone");
}
function pn(e, t) {
	return "string" == typeof e && Xt.includes(e) ? e : nn(t, "expected a supported phase");
}
function gn(e, t) {
	const n = an(e, t), a = rn(n.min, `${t}.min`), i = rn(n.max, `${t}.max`);
	return i <= a || !Number.isFinite(i - a) ? nn(t, "expected a finite ascending range") : {
		min: a,
		max: i
	};
}
function fn(e, t) {
	const n = `series[${t}]`, a = an(e, n), i = sn(a.points, `${n}.points`);
	let s = Number.NEGATIVE_INFINITY;
	const r = (e) => `${n}.points[${e}]`, o = i.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return nn(r(t), "expected an object");
		const n = e, a = n.timestamp;
		if ("number" != typeof a || !Number.isFinite(a)) return nn(`${r(t)}.timestamp`, "expected a finite number");
		if (a <= s) return nn(`${r(t)}.timestamp`, "expected strictly ascending timestamps");
		s = a;
		const i = n.value;
		return null === i || "number" == typeof i && Number.isFinite(i) ? {
			timestamp: a,
			value: i
		} : nn(`${r(t)}.value`, "expected a finite number");
	});
	return {
		tone: mn(a.tone, `${n}.tone`),
		strokeWidth: on(a.strokeWidth, `${n}.strokeWidth`),
		valueDomain: gn(a.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function hn(e, t) {
	const n = `overlays[${t}]`, a = an(e, n), i = {
		phase: pn(a.phase, `${n}.phase`),
		order: ln(a.order, `${n}.order`),
		tone: mn(a.tone, `${n}.tone`)
	};
	if ("interval" === a.kind) {
		const e = rn(a.startTimestamp, `${n}.startTimestamp`), t = rn(a.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? nn(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...i,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === a.kind ? {
		kind: "threshold",
		...i,
		value: rn(a.value, `${n}.value`),
		...cn(a.draggable, `${n}.draggable`, "draggable"),
		...cn(a.selected, `${n}.selected`, "selected"),
		...cn(a.handle, `${n}.handle`, "handle"),
		...void 0 === a.label ? {} : { label: dn(a.label, `${n}.label`) }
	} : "instant" === a.kind ? {
		kind: "instant",
		...i,
		timestamp: rn(a.timestamp, `${n}.timestamp`)
	} : nn(`${n}.kind`, "expected interval, threshold, or instant");
}
function wn(e, t, n) {
	const a = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(a) ? a : nn("projection", "expected a finite pixel coordinate");
}
function _n(e, t, n) {
	const a = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(a) ? a : nn("projection", "expected a finite pixel coordinate");
}
function yn(e) {
	if (!(e < 1e9 && e > -1e9)) {
		const t = Number(e.toFixed(6));
		return Object.is(t, -0) ? "0" : String(t);
	}
	const t = e.toFixed(6);
	let n = t.length;
	for (; 48 === t.charCodeAt(n - 1);) n -= 1;
	46 === t.charCodeAt(n - 1) && (n -= 1);
	const a = n === t.length ? t : t.slice(0, n);
	return "-0" === a ? "0" : a;
}
function vn(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Mn(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, a = t.plotArea.height, i = tn[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const s = vn(wn(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), r = vn(wn(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${yn(s)}" y="0" width="${yn(Math.max(1, r - s))}" height="${yn(a)}" fill="${i}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const s = _n(e.value, t.valueDomain, a), r = !0 === e.selected, o = r ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${r ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${yn(s)}" x2="${yn(n)}" y2="${yn(s)}" stroke="${i}" stroke-width="${r ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const s = wn(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${yn(s)}" y1="0" x2="${yn(s)}" y2="${yn(a)}" stroke="${i}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function bn(e) {
	const t = function(e) {
		const t = an(e, "scene");
		if (2 !== t.version) return nn("version", "expected 2");
		const n = an(t.grid, "grid"), a = {
			strategy: (i = n.strategy, "string" == typeof i && en.includes(i) ? i : nn("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: un(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: un(n.renderedPointCount, "grid.renderedPointCount")
		};
		var i;
		if (a.renderedPointCount > a.sourcePointCount) return nn("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === a.strategy && a.renderedPointCount !== a.sourcePointCount) return nn("grid", "full-resolution strategy requires equal point counts");
		const s = an(t.size, "size"), r = {
			width: on(s.width, "size.width"),
			height: on(s.height, "size.height")
		}, o = an(t.plotArea, "plotArea"), l = {
			left: rn(o.left, "plotArea.left"),
			top: rn(o.top, "plotArea.top"),
			width: on(o.width, "plotArea.width"),
			height: on(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > r.width || l.top + l.height > r.height) return nn("plotArea", "expected bounds contained by size");
		const u = gn(t.viewport, "viewport"), c = gn(t.valueDomain, "valueDomain"), d = sn(t.series, "series").map(fn);
		if (0 === d.length && 0 !== a.renderedPointCount) return nn("grid.renderedPointCount", "expected zero when series is empty");
		const m = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let h = 0; h < d.length; h++) {
			const e = d[h]?.points ?? [];
			if (e.length !== a.renderedPointCount) return nn(`series[${h}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return nn(`series[${h}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const p = sn(t.overlays, "overlays").map(hn), g = null === t.cursorTimestamp ? null : rn(t.cursorTimestamp, "cursorTimestamp");
		let f = null;
		if (null !== t.selection) {
			const e = an(t.selection, "selection"), n = rn(e.startTimestamp, "selection.startTimestamp"), a = rn(e.endTimestamp, "selection.endTimestamp");
			if (a <= n) return nn("selection", "expected a half-open ascending interval");
			f = {
				startTimestamp: n,
				endTimestamp: a
			};
		}
		return {
			version: 2,
			grid: a,
			size: r,
			plotArea: l,
			viewport: u,
			valueDomain: c,
			series: d,
			overlays: p,
			cursorTimestamp: g,
			selection: f
		};
	}(e), n = yn(t.size.width), a = yn(t.size.height), i = yn(t.plotArea.width), s = yn(t.plotArea.height), r = Mn(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
		let a = "", i = !1;
		const s = {
			left: 0,
			width: n.plotArea.width
		}, r = /* @__PURE__ */ new Map();
		for (const o of e.points) {
			if (null == o.value) {
				i = !1;
				continue;
			}
			const t = wn(o.timestamp, n.viewport, s);
			let l = r.get(o.value);
			void 0 === l && (l = yn(_n(o.value, e.valueDomain, n.plotArea.height)), r.set(o.value, l)), a += `${i ? "L" : "M"}${yn(t)} ${l}`, i = !0;
		}
		return 0 === a.length ? "" : `<path data-series-index="${t}" d="${a}" fill="none" stroke="${tn[e.tone]}" stroke-width="${yn(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = Mn(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${a}" viewBox="0 0 ${n} ${a}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${a}" fill="#ffffff"/><svg x="${yn(t.plotArea.left)}" y="${yn(t.plotArea.top)}" width="${i}" height="${s}" viewBox="0 0 ${i} ${s}" overflow="hidden"><rect x="0" y="0" width="${i}" height="${s}" fill="#ffffff"/>${r}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = vn(wn(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), a = vn(wn(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${yn(n)}" y="0" width="${yn(Math.max(1, a - n))}" height="${yn(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = wn(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${yn(n)}" y1="0" x2="${yn(n)}" y2="${yn(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${yn(t.plotArea.left)}" y="${yn(t.plotArea.top)}" width="${i}" height="${s}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
var kn = class extends Error {
	name = "ExportSnapshotTooLargeError";
	reason = "snapshot_too_large";
}, Sn = class e extends Error {
	file;
	step;
	reason;
	constructor(e, t, n, a = Tn(n)) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t, this.reason = a;
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
function Tn(e) {
	return e instanceof Sn || e instanceof kn ? e.reason : e instanceof Error ? e.name : typeof e;
}
const In = 65536;
function xn(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function An(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
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
], Rn = (new Set(Nn.slice(16).map(([e]) => e)), "edit_recompute_requires_ms2_ms3"), En = (S.invalid_night_row.markerTypeCell, new Set(Nn.map(([, e]) => e)), y.ggir_sleepparam.header, y.ggir_guider_onset.header, y.ggir_guider_wakeup.header, y.ggir_guider_spt_duration.header, y.ggir_error_onset.header, y.ggir_error_wake.header, y.ggir_error_dur.header, y.ggir_fraction_night_invalid.header, y.ggir_duration_sib_wakinghours.header, y.ggir_number_sib_sleepperiod.header, y.ggir_number_sib_wakinghours.header, y.ggir_duration_sib_wakinghours_atleast15min.header, y.ggir_guider_onset_ts.header, y.ggir_guider_wakeup_ts.header, y.ggir_page.header, y.ggir_daysleeper.header, y.ggir_sleeplog_id.header, y.ggir_guider.header, y.ggir_longitudinal_axis.header, /* @__PURE__ */ new Set([
	y.ggir_sleep_duration_in_spt.header,
	y.ggir_waso.header,
	y.ggir_number_of_awakenings.header,
	y.ggir_sleeplatency.header,
	y.ggir_sleepefficiency.header
])), $n = /* @__PURE__ */ new Set([
	...En,
	y.ggir_nonwear_perc_spt.header,
	y.ggir_sleeponset.header,
	y.ggir_wakeup.header,
	y.ggir_spt_duration.header,
	y.ggir_guider_onset.header,
	y.ggir_guider_wakeup.header,
	y.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	y.ggir_sleeponset_ts.header,
	y.ggir_wakeup_ts.header,
	y.ggir_guider_onset_ts.header,
	y.ggir_guider_wakeup_ts.header,
	y.ggir_daysleeper.header,
	y.ggir_cleaningcode.header,
	y.ggir_guider.header,
	y.ggir_error_onset.header,
	y.ggir_error_wake.header,
	y.ggir_error_dur.header,
	y.ggir_fraction_night_invalid.header,
	y.ggir_duration_sib_wakinghours.header,
	y.ggir_number_sib_sleepperiod.header,
	y.ggir_number_sib_wakinghours.header,
	y.ggir_duration_sib_wakinghours_atleast15min.header
]), On = /* @__PURE__ */ new Set([
	y.ggir_id.header,
	y.ggir_filename.header,
	y.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	y.ggir_sleep_regularity_index1.header,
	y.ggir_sri_fraction_valid.header,
	y.ggir_calendar_date.header,
	y.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	y.ggir_cleaningcode.header,
	y.ggir_guider.header,
	y.ggir_sleeplog_used.header,
	y.ggir_acc_available.header,
	y.ggir_daysleeper.header
]), Cn = (new Set(Object.values(y).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), new Set(Object.values(y).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), new Set(Object.values(M).map((e) => e.reviewSource)), [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
]), Dn = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : u(String(e)), Ln = (v.part4_night_review, v.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function Bn(e, t, n = "") {
	return v[e].replace("{report}", n.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${M[t].filenameSuffix}.csv`);
}
function Pn(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return _(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? _(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function Fn(e, t) {
	const n = new Map(he(e).map((e) => [e.night, e.nightDate]));
	return (e, a, i = !0) => {
		const s = e.columns.indexOf("nights" === t ? y.ggir_night.header : "night_number"), r = Number(e.values[s]?.[a]), o = n.get(r);
		if (i && o) return o;
		const l = e.values[e.columns.indexOf(y.ggir_calendar_date.header)]?.[a];
		return Pn(l);
	};
}
async function Wn(t, n, i, s) {
	const r = "nights" === n ? y.ggir_night.header : "window_number", o = G(i), l = await Promise.all(t.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await ye(e.imported, e.edits, t.night, i)])))), c = (await Promise.all(t.map(async (e, t) => {
		const a = e.current ?? e.imported, i = (e) => "nights" === n ? e.nights : e.days, s = "nights" === n ? a.nightRecomputed : a.dayRecomputed, r = "nights" === n ? e.imported.nightChecks : e.imported.dayChecks, u = l[t].filter((e) => null != e[1]), c = Fn(e.imported, n), d = new Set(e.edits.map((e) => e.night)), m = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, p = /* @__PURE__ */ new Set();
		if ("days" === n && m) {
			const t = await Promise.all(he(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), a = t.nightDate, i = n.onset < "12:00:00" ? await I(a, void 0, o) : a, s = n.wake <= n.onset ? await I(i, void 0, o) : i;
				return [Math.min(t.onsetMs, Date.parse(`${i}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${s}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: a.days.rows }, async (e, n) => {
				const i = Number(a.days.values[a.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(i)) return void p.add(n);
				const s = c(a.days, n, !1), r = a.days.values[a.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof r ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(r) : null;
				if (!s || !l) return;
				const u = Date.parse(`${s}T${l[1]}Z`), m = l[2] < l[1] ? await I(s, void 0, o) : s, g = Date.parse(`${m}T${l[2]}Z`);
				t.some(([e, t]) => u <= t && g >= e) && p.add(n);
			}));
		}
		return {
			source: M[Ln(e)].reviewSource,
			editedDayRows: p,
			editRecomputeUnavailable: m,
			editedNights: d,
			scoredDates: e.scoredDates,
			invalidDates: e.invalidDates,
			dateOf: c,
			table: i(a),
			ggir: i(e.imported),
			savedNights: e.imported.nights,
			recomputed: s,
			provenance: (e) => "nights" === n ? u.find(([t]) => t === e)?.[1] ?? "" : u.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(r.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === c.length) return null;
	const d = s ? s.filter((e) => !e.endsWith("_missing_reason") && !Cn.includes(e)) : [];
	for (const e of s ? [] : c) for (const t of e.table.columns) t.endsWith("_missing_reason") || d.includes(t) || d.push(t);
	const m = new Set("nights" === n ? T.ggir_review_night_extension.map((e) => y[e].header) : []), p = s ? d.filter((e) => s.includes(e + "_missing_reason")) : d.filter((e) => m.has(e) || c.some((e) => e.editRecomputeUnavailable || e.source === M.corrected.reviewSource)), g = [[
		...d.map(u),
		...Cn,
		...p.map((e) => u(e + "_missing_reason")),
		...Cn.map((e) => e + "_missing_reason")
	].join(",")], f = (e, t) => {
		const n = e.columns.indexOf(r);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: h, ggir: w, recomputed: _, provenance: v, checks: M, scoredDates: b, invalidDates: k, dateOf: S, editRecomputeUnavailable: T, editedNights: I, editedDayRows: x, savedNights: A, source: N } of c) {
		const t = A.columns.filter((e) => !$n.has(e)), i = t.filter((e) => {
			const t = A.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return A.values[t].some((e, t) => {
				const a = Number(A.values[A.columns.indexOf(y.ggir_night.header)]?.[t]), i = n.has(a) && !Object.is(n.get(a), e);
				return n.set(a, e), i;
			});
		}), s = /* @__PURE__ */ new Set(), r = (e) => Array.from({ length: w.rows }, (e, t) => t).find((t) => !s.has(t) && f(w, t) === f(h, e) && i.every((n) => Object.is(w.values[w.columns.indexOf(n)]?.[t] ?? null, h.values[h.columns.indexOf(n)]?.[e] ?? null))), o = new Set(d.filter((e) => "nights" === n ? $n.has(e) : !On.has(e) && !t.includes(e))), l = (i, s, r, l) => {
			const c = M.get(f(i, s));
			return [
				...d.map((e) => {
					if ("invalid" === r && ("nights" === n ? $n.has(e) : /sleep|spt|waso|wake|onset|guider/i.test(e) && !t.includes(e))) return "";
					const a = i.columns.indexOf(e);
					return a < 0 ? "" : Dn(i.values[a]?.[s]);
				}),
				r,
				c?.status ?? "",
				u((c?.reasons ?? []).join(";")),
				u((c?.diffs ?? []).map((e) => e.column).join(";")),
				u(l),
				...p.map((t) => "invalid" !== r || m.has(t) && t !== y.ggir_nonwear_perc_spt.header ? T && r === N && o.has(t) && ("days" === n ? x.has(s) : I.has(f(i, s))) ? Rn : m.has(t) ? null != e(i, t, s) ? "" : Dn(a(i, t + "_missing_reason", s) ?? "source_reported_missing") : r === N ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
				"",
				c ? "" : "not_computed_for_export",
				c?.reasons.length ? "" : "not_applicable_to_row",
				c?.diffs.length ? "" : "not_applicable_to_row",
				l ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let e = 0; e < h.rows; e += 1) {
			const t = S(h, e);
			if (b && (!t || !b.has(t))) continue;
			const n = r(e);
			if (null != n && s.add(n), t && k?.has(t)) {
				null != n && g.push(l(w, n, N, "")), g.push(l(h, e, "invalid", ""));
				continue;
			}
			if (!_[e]) {
				g.push(l(h, e, N, ""));
				continue;
			}
			const a = f(h, e);
			null != n && g.push(l(w, n, N, "")), g.push(l(h, e, "recomputed", v(a)));
		}
		for (let e = 0; e < w.rows; e += 1) {
			if (s.has(e)) continue;
			const t = S(w, e);
			(!b || t && b.has(t)) && (g.push(l(w, e, N, "")), t && k?.has(t) && g.push(l(w, e, "invalid", "")));
		}
	}
	return g.length > 1 ? `${g.join("\n")}\n` : null;
}
function jn(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const a of e) for (const [e, t] of Object.entries(a.part2Reports ?? {})) {
		const i = Bn("part2_report", Ln(a), e);
		n.set(i, [...n.get(i) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const a = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], i = [a.map(u).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) i.push(a.map((n) => Dn(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, i.join("\n") + "\n"];
	}));
}
Object.keys(M).map((e) => Bn("person_summary_review", e));
const Gn = (e, t) => he(e).filter((e) => t?.has(e.nightDate));
async function Un(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: Rn,
		detail: ""
	};
	const i = e.current ?? e.imported;
	if (void 0 === i.tailExpansion) return {
		reason: "not_computed_for_export",
		detail: "the saved GGIR review predates the core's tail expansion flag; import the folder again"
	};
	const s = G(n);
	try {
		const { ggirVersion: n } = await s.ggirConfigValues(e.configCsv), { profile: r, reports: o } = await s.ggirPersonSummaries({
			ggir_version: n ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: i.nights,
			days: i.days,
			tail_expansion: i.tailExpansion,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(a(i.nights, y.ggir_id.header, 0) ?? ""),
			invalid_nights: Gn(e.imported, t).map((e) => e.night),
			person_columns: Object.fromEntries(Object.entries(e.personReports ?? {}).flatMap(([e, t]) => t.rows > 0 ? [[e, t.columns]] : []))
		});
		return {
			profile: r,
			reports: o
		};
	} catch (r) {
		return n?.throwIfAborted(), {
			reason: "not_computed_for_export",
			detail: r instanceof Error ? r.message : String(r)
		};
	}
}
async function zn(e, t, n) {
	const a = /* @__PURE__ */ new Map(), i = await Promise.all(e.map(async (e) => {
		const n = Gn(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (n) => {
			const a = await ye(e.imported, e.edits, n.night, t);
			return null == a ? [] : [`night ${String(n.night)} ${a}`];
		}))).flat(), ...n].join("; ");
	}));
	for (const [r, o] of e.entries()) {
		const e = Ln(o), t = i[r], n = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [i, s] of Object.entries(o.personReports ?? {})) {
			if (0 === s.rows) continue;
			const r = Bn("person_summary_review", e, i), o = "reason" in n ? n : n.reports[i] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${i}`
			};
			a.set(r, [...a.get(r) ?? [], {
				table: s,
				source: M[e].reviewSource,
				edit: t,
				recomputed: o
			}]);
		}
	}
	const s = /* @__PURE__ */ new Set([y.ggir_id.header, y.ggir_filename.header]);
	return Object.fromEntries([...a].map(([e, t]) => {
		const a = n?.get(e), i = [...new Set(t.flatMap(({ table: e }) => e.columns))], r = (a ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : function(e, t) {
			const n = new Set(e);
			if (t.every((e) => n.has(e))) return [...e];
			if (!t.some((e) => n.has(e))) return [...e, ...new Set(t)];
			const a = [...e];
			let i = -1;
			for (const s of t) {
				const e = a.indexOf(s);
				e >= 0 ? i = e : a.splice(++i, 0, s);
			}
			return a;
		}(e, t.columns), i)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !Cn.includes(e)), o = Cn.map((e) => e + "_missing_reason"), l = a?.filter((e) => e.endsWith("_missing_reason") && !o.includes(e)) ?? ["refusal_detail_missing_reason", ...r.map((e) => e + "_missing_reason")], c = [[
			...r,
			...Cn,
			...l,
			...o
		].map(u).join(",")], d = (e, t) => [
			e,
			"",
			"",
			"",
			u(t)
		], m = (e) => [
			"",
			"not_computed_for_export",
			"not_applicable_to_row",
			"not_applicable_to_row",
			e ? "" : "not_applicable_to_row"
		], p = (e, t) => (n) => Dn(e.values[e.columns.indexOf(n)]?.[t]), g = (e) => l.map((t) => e.get(t) ?? ""), f = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
		for (const { table: n, source: h, edit: w, recomputed: _ } of t) for (let e = 0; e < n.rows; e++) {
			const t = r.map(p(n, e)), a = new Map(r.flatMap((e) => f.get(n).has(e) ? [] : [[e + "_missing_reason", "not_applicable_to_row"]]));
			if (c.push([
				...t,
				...d(h, ""),
				...g(a),
				...m("")
			].join(",")), !w) continue;
			const i = "reason" in _ ? _ : 0 === _.rows ? {
				reason: "no_retained_nights",
				detail: ""
			} : null, o = "reason" in _ ? null : p(_, 0), l = r.map((e, n) => s.has(e) ? t[n] : o?.(e) ?? ""), y = new Map(r.flatMap((e, t) => {
				return "" === (n = l[t]).trim() || /^(?:nan|na|n\/a)$/iu.test(n.trim()) ? [[e + "_missing_reason", i?.reason ?? "not_applicable_to_row"]] : [];
				var n;
			}));
			i?.detail && y.set("refusal_detail_missing_reason", u(`ggirPersonSummaries: ${i.detail}`)), c.push([
				...l,
				...d("recomputed", w),
				...g(y),
				...m(w)
			].join(","));
		}
		return [e, c.join("\n") + "\n"];
	}));
}
const Hn = T.ggir_part4_nightsummary_csv, Vn = Hn.map((e) => y[e].header), qn = [
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
], Kn = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function Jn(e, t) {
	const n = y[e], a = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof a ? u(a) : xn(a, { integral: n.ggirIntegral ?? !1 });
}
function Yn(e, t = "legacy-recording", n, a) {
	const i = [], s = [];
	for (const r of e) r.states && 0 !== r.timestamps.length && (s.push(r.states.subarray(0, Math.min(r.timestamps.length, r.states.length))), i.push({
		seriesId: t,
		...void 0 === n ? {} : { epochLengthSeconds: n },
		timestamps: r.timestamps,
		states: r.states
	}));
	const o = new Uint8Array(s.reduce((e, t) => e + t.length, 0));
	s.reduce((e, t) => (o.set(t, e), e + t.length), 0);
	const l = e.length > 0 && e.every((e) => null == e.states) ? "no_scored_epochs" : "no_valid_epochs";
	return 0 === o.length ? Promise.resolve({
		sri: null,
		fractionValid: null,
		sriMissingReason: l,
		fractionValidMissingReason: l
	}) : G(a).validStateFraction(o).then(async (e) => {
		if (!e) return {
			sri: null,
			fractionValid: e ?? null,
			sriMissingReason: "no_valid_epochs",
			fractionValidMissingReason: null == e ? "no_valid_epochs" : null
		};
		const t = /* @__PURE__ */ new Map();
		for (const n of i) for (let e = 0; e < Math.min(n.timestamps.length, n.states.length); e++) {
			const a = n.timestamps[e];
			Number.isFinite(a) && t.set(Math.round(a), 0 === n.states[e] || 1 === n.states[e]);
		}
		const s = (void 0 === n || 86400 % n == 0) && [...t].some(([e, n]) => n && t.get(e + 86400)), o = s ? null : "insufficient_pair", l = await async function(e, t) {
			const n = Array.isArray(e) ? e : [e], a = n.map((e) => ({
				...void 0 === e.seriesId ? {} : { series_id: e.seriesId },
				...void 0 === e.epochLengthSeconds ? {} : { epoch_length_seconds: e.epochLengthSeconds }
			})), [i, s] = jt(n.map((e) => e.timestamps)), [o, l] = jt(n.map((e) => e.states));
			return G(t).sleepRegularityIndex(r([
				JSON.stringify(a),
				i,
				s,
				o,
				l
			], [
				i.buffer,
				s.buffer,
				o.buffer,
				l.buffer
			]));
		}(i, a);
		if (s && null == l) throw new Error("SRI producer returned a blank despite valid pairs");
		return {
			sri: l,
			fractionValid: e,
			sriMissingReason: o,
			fractionValidMissingReason: null
		};
	});
}
async function Zn(e, t, n, a = {}) {
	const { signal: i } = a, s = e.participantId ?? e.filename, r = q(n.values(), a.algorithm), o = [];
	for (const [d, y] of n) {
		if (!ra(d, a.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = Ot(y, r);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await Yn(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, i), { sri: u, fractionValid: c } = l, m = "stale" === r.status ? "scores_from_another_config" : null, p = m ?? l.sriMissingReason, g = m ?? l.fractionValidMissingReason, f = [];
	for (const y of [...t.keys()].sort()) {
		const e = t.get(y);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === d.MAIN_SLEEP && null != t.onsetTimestamp && f.push({
			date: y,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const h = [[
		...Vn,
		...qn.map((e) => `${y[e].header}_missing_reason`),
		...Kn.map((e) => `${y[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], w = [];
	for (const { date: d, onsetTs: y, wakeupTs: v } of f) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == v ? "not_applicable_to_row" : m ?? "no_scored_epochs"
		};
		if (null != v) {
			const { timestamps: a, algorithmResults: s } = await Yt(n, d, r, { signal: i });
			if (s && a.length > 0) {
				t.missingReason = null;
				const n = await Et(s, a, y, v, e.epochLengthSeconds || 60, null, i);
				n && (t = {
					tstH: n.ggirSleepDurationInSptMinutes / 60,
					nAwak: n.numberOfAwakenings,
					latency: n.sleepOnsetLatencyMinutes / 60,
					efficiency: n.sleepEfficiency / 100,
					missingReason: null
				});
			}
		}
		w.push(t);
	}
	const _ = await G(i).ggirManualNightClocks(f.map((e) => e.date), Float64Array.from(f, (e) => e.onsetTs), Float64Array.from(f, (e) => e.wakeupTs ?? NaN), Float64Array.from(w, (e) => e.tstH ?? NaN));
	for (let d = 0; d < f.length; d++) {
		const { onsetTs: t, wakeupTs: n } = f[d], a = _[d], { tstH: i, nAwak: r, latency: o, efficiency: l } = w[d], m = {
			ggir_id: s,
			ggir_night: d + 1,
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
			ggir_number_of_awakenings: r,
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
			ggir_weekday: a?.weekday ?? null,
			ggir_calendar_date: a?.calendarDate ?? null,
			ggir_filename: e.filename,
			ggir_cleaningcode: a?.cleaningcode ?? null,
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
			...Hn.map((e) => Jn(e, m[e])),
			...qn.map((e) => {
				const t = Hn.indexOf(e);
				return t >= 0 && null == m[Hn[t]] ? "not_computed_for_export" : "";
			}),
			...Kn.map((e) => {
				const t = Hn.indexOf(e);
				return t >= 0 && null == m[Hn[t]] ? w[d].missingReason ?? "" : "";
			}),
			p ?? "",
			g ?? ""
		].join(","));
	}
	return h.join("\n") + "\n";
}
function Qn(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function Xn(e) {
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
		const { algoKey: e, ruleKey: a } = Xn(n), i = [e, a].filter(Boolean);
		t.set(n, 0 === i.length ? "part4_nightsummary.csv" : `part4_nightsummary_${i.join("_")}.csv`);
	}
	return t;
}
function na(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : ue(e);
}
function aa(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function* ia(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let a = Math.min(e.length, n + In / 4);
		a < e.length && /[\uD800-\uDBFF]/u.test(e[a - 1]) && (a -= 1), yield t.encode(e.slice(n, a)), n = a;
	}
	yield t.encode("\n");
}
function sa(e) {
	return new TextEncoder().encode(e);
}
function ra(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function oa(e, t, n) {
	n?.throwIfAborted();
	const a = function(e, t) {
		const { signal: n } = t, { username: a, dateRange: i, snapshot: s } = e, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const c = bs(s, gs.ggirReport, e.map((e) => e.id)), d = await Promise.all(e.map((e) => Is(s, e.id, a, n)));
				for (const [a, s] of e.entries()) {
					const e = c.files.find((e) => e.id === s.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: m, sets: g, markersByAlgo: f, invalidDates: h } = d[a], w = As(c, e.id), _ = new Map([...f].filter(([e]) => ra(e, i))), y = /* @__PURE__ */ new Map();
					for (const [t, n] of _) for (const e of n) {
						const n = ea(e);
						let a = y.get(n);
						a || (a = /* @__PURE__ */ new Map(), y.set(n, a)), a.set(t, e);
					}
					const v = /* @__PURE__ */ new Set();
					for (const [t, n] of _) for (const e of n) p(e) && v.add(t);
					if (m) for (const t of g) u.push({
						...t,
						...i ? { scoredDates: new Set(e.availableDates.filter((e) => ra(e, i))) } : {},
						invalidDates: h
					});
					const M = [...v].sort(), b = M[0], k = M[M.length - 1], S = [], T = [];
					for (const n of t.charts ? [...w.keys()].sort() : []) if (ra(n, i) && (null == b || null == k || n >= b && n <= k)) {
						const e = w.get(n), t = Q({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), a = t.timestamps, i = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < a.length; n++) S.push(a[n]), T.push(i[n]);
					}
					const I = [];
					for (const [t, a] of y) {
						const s = Xn(t).algoKey, l = m ? "" : await Zn(e, a, w, {
							...s ? { algorithm: s } : {},
							...i ? { dateRange: i } : {},
							signal: n
						}), u = m ? [] : l.replace(/\n$/u, "").split("\n");
						if (u.length > 0) {
							const e = r.get(t) ?? [];
							r.set(t, e), o.has(t) ? e.push(...u.slice(1)) : (e.push(...u), o.add(t));
						}
						const c = [], d = [];
						for (const e of a.values()) {
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
						const { algoKey: p, ruleKey: g } = Xn(t), f = [p, g].filter(Boolean).join("_"), h = q(w.values(), s || null);
						I.push([f, {
							p: c,
							n: d,
							..."stale" === h.status ? { stale: h.reason } : {}
						}]);
					}
					0 === y.size && I.push(["", {
						p: [],
						n: []
					}]), S.length > 0 && l.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: S,
						act: T,
						algos: I
					});
				}
			},
			entries: () => async function({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: a, layouts: i, only: s }) {
				const r = {}, o = (e) => void 0 === s || s === e;
				for (const [l, u] of a ?? ta([...e.keys()])) {
					const t = e.get(l);
					t?.length && o(u) && (r[u] = sa(`${t.join("\n")}\n`));
				}
				for (const l of Object.keys(M)) {
					const e = t.filter((e) => Ln(e) === l);
					if (0 !== e.length) {
						for (const [t, n] of Object.entries(jn(e, i))) o(t) && (r[t] = sa(n));
						for (const [t, a] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
							const s = Bn(a, l), u = o(s) ? await Wn(e, t, n, i?.get(s)) : null;
							u && (r[s] = sa(u));
						}
						for (const [t, a] of Object.entries(await zn(e, n, i))) o(t) && (r[t] = sa(a));
					}
				}
				return r;
			}({
				csvLinesByAlgo: r,
				ggirReviews: u
			}, { signal: n }),
			chartPidData: l,
			csvLinesByAlgo: r,
			ggirReviews: u
		};
	}(e, {
		signal: n,
		charts: !0
	});
	await a.addFiles([t]);
	const i = [...a.chartPidData].map(([t, n]) => function(e, t, n) {
		return {
			key: e,
			pid: t.pid,
			charts: t.algos.map(([a, i]) => {
				const { algoKey: s, ruleKey: r } = Xn(a), o = aa([s, r].filter(Boolean).join("_"), "unscoped"), l = `activity-${aa(e, "recording")}-${o}-${n}.svg`, u = function(e) {
					if (0 === e.timestamps.length) return An("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return An("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, a = 0;
					const i = e.timestamps.map((i, s) => {
						const r = e.activity[s];
						return !Number.isFinite(i) || i <= t ? An("timestamps must be finite and strictly ascending") : (t = i, null != r && Number.isFinite(r) ? (n = Math.min(n, r), a = Math.max(a, r), {
							timestamp: i,
							value: r
						}) : {
							timestamp: i,
							value: null
						});
					}), s = i[0].timestamp, r = i[i.length - 1].timestamp, o = r > s ? r : s + 1;
					if (!Number.isFinite(o) || o <= s) return An("single-epoch viewport must have a representable right edge");
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
				}), c = [...ia(`      <div class="plot-svg">${bn(u)}</div>`)];
				return {
					algoKey: a,
					...i.stale ? { stale: i.stale } : {},
					svgFilename: l,
					plot: new Blob(c),
					plotLengths: c.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${Qn(na(u.viewport.min))} → ${Qn(na(u.viewport.max))} · activity domain ${xn(u.valueDomain.min)}–${xn(u.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), s = new Set(ta([...a.csvLinesByAlgo.keys()]).values()), r = [];
	for (const [o, u] of Object.entries(await a.entries())) s.has(o) || r.push([o, l(c(new TextDecoder().decode(u)).records[0].text)]);
	return {
		charts: i,
		csvLinesByAlgo: a.csvLinesByAlgo,
		ggirReviews: a.ggirReviews,
		headers: r
	};
}
function la(e) {
	return "aw5" === e ? "actoglance.source.philips_actiwatch_aw5.v1" : "actoglance.source.philips_actiware_csv.v1";
}
function ua(e) {
	return Date.parse(`${e}Z`) / 1e3;
}
async function ca(e, t) {
	const n = e.timestamps_ms[0];
	if (null == n) return null;
	const a = (e.channels.find((t) => t.name === e.primary) ?? e.channels[0])?.counts ?? [], i = Array.from(a, (e) => Number.isFinite(e) && e >= 0), s = await t.roundCountStorage(Float64Array.from(a, (e, t) => i[t] ? e : 0), 0);
	return {
		start_local: (r = n / 1e3, (/* @__PURE__ */ new Date(1e3 * r)).toISOString().slice(0, 19)),
		epoch_seconds: e.epoch_seconds,
		activity: i.map((e, t) => e ? s[t] : null),
		...e.marker && e.marker.length === a.length ? { marker: e.marker } : {},
		excluded: (e.rest_intervals ?? []).filter((e) => "excluded" === e.kind)
	};
	var r;
}
async function da(e, t, n, a = 60) {
	const i = Int8Array.from(t.scores, (e) => null == e ? -1 : 0 === e ? 1 : 0);
	return e.foldSleepWakeVotes(t.startTimestamp, t.epochSeconds, i, Float64Array.from(n), a);
}
function ma(e) {
	return {
		startTimestamp: e.startTimestamp,
		epochSeconds: e.epochSeconds,
		params: e.params,
		...e.paradigmDefaults ? { paradigmDefaults: e.paradigmDefaults } : {},
		scores: Int8Array.from(e.scores, (e) => e ?? -1).buffer
	};
}
function pa(e, t) {
	return e.filter((e) => "rest" === e.kind || "sleep" === e.kind).map((e) => ({
		kind: e.kind,
		source: e.source,
		startTimestamp: ua(e.start),
		endTimestamp: ua(e.end),
		origin: t ? "generated" : "stored",
		...e.analysis ? { analysis: e.analysis } : {}
	})).filter((e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.endTimestamp > e.startTimestamp).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function ga(e) {
	return e.map(({ start: e, end: t, ...n }) => ({
		...n,
		startTimestamp: ua(e),
		endTimestamp: ua(t)
	}));
}
function fa(e, t) {
	return e && e.length === t && t > 0 ? e : null;
}
function ha(e) {
	const t = e.timestamps_ms.length, n = (t) => e.light_channels.find((e) => e.name === t)?.counts;
	return {
		white: fa(e.light, t),
		red: fa(n("red_light"), t),
		green: fa(n("green_light"), t),
		blue: fa(n("blue_light"), t)
	};
}
function wa(e, t, n) {
	const a = (e) => {
		if (!e) return;
		const a = new Float64Array(n.length);
		for (let i = 0; i < n.length; i += 1) {
			const s = t.get(n[i] ?? NaN);
			a[i] = null == s ? NaN : e[s] ?? NaN;
		}
		return a.buffer;
	}, i = a(e.white), s = a(e.red), r = a(e.green), o = a(e.blue);
	return {
		...i ? { lux: i } : {},
		...s ? { redLight: s } : {},
		...r ? { greenLight: r } : {},
		...o ? { blueLight: o } : {}
	};
}
function _a(e, t) {
	const n = 6e4 * (ya(e, t)?.gmt_offset_minutes ?? 0);
	return 0 === n ? e.series : {
		...e.series,
		timestamps_ms: e.series.timestamps_ms.map((e) => e + n)
	};
}
function ya(e, t) {
	return (void 0 === t ? void 0 : e.downloads.find((e) => e.guid === t)) ?? e.downloads.find((e) => e.is_primary) ?? e.downloads[0];
}
function va(e) {
	const t = e.channels.find((t) => t.name === e.primary) ?? e.channels[0];
	if (!t) throw new Error("The device file carries no activity count channel.");
	return t.counts;
}
async function Ma(e, t, n = [], a = null) {
	const i = function(e, t) {
		if (!t || t.length !== e.length) return /* @__PURE__ */ new Float64Array(0);
		const n = [];
		return t.forEach((t, a) => {
			t && n.push((e[a] ?? NaN) / 1e3);
		}), Float64Array.from(n.filter(Number.isFinite));
	}(e.timestamps_ms, e.marker), s = function(e) {
		const { timestamps_ms: t, off_wear: n, off_wear_invalid: a, epoch_seconds: i } = e;
		if (n.length !== t.length) return [];
		const s = [];
		let r = null;
		for (let o = 0; o <= t.length; o += 1) {
			const e = o < t.length && !0 === n[o] && !0 !== a?.[o], l = (t[o] ?? NaN) / 1e3;
			if (e && null === r && (r = l), !e && null !== r) {
				const e = (t[o - 1] ?? NaN) / 1e3;
				s.push({
					startTimestamp: r,
					endTimestamp: e + i
				}), r = null;
			}
		}
		return s;
	}(e), r = e.timestamps_ms.length > 0 && e.off_wear.length === e.timestamps_ms.length, o = e.epoch_seconds >= 60 ? e : await t(e);
	if (60 !== o.epoch_seconds && 120 !== o.epoch_seconds) throw new Error("Native import requires a 60- or 120-second scoring grid");
	const l = 120 === o.epoch_seconds ? [...n, "This recording keeps its native 120-second scoring grid. A 60-second view, one-minute sleep scorers, Choi nonwear and finer algorithm variants are unavailable because the source contains only two-minute sums."] : n, u = o.activity_invalid ?? [], c = Uint8Array.from(u.length === o.timestamps_ms.length ? u : [], (e) => e ? 1 : 0);
	return {
		epochSeconds: o.epoch_seconds,
		timestampsMs: o.timestamps_ms,
		counts: va(o),
		actiwareInvalidActivityMinutes: c,
		actiwareStatisticsInput: a,
		sourceEpochSeconds: e.epoch_seconds,
		eventMarkerInstantsSec: i,
		offWristPeriods: s,
		hasOffWristChannel: r,
		warnings: l,
		light: ha(o),
		actiwareIntervals: [],
		actiwareSleepWake: null,
		actiwareStatistics: [],
		actiwareRecording: null,
		actiwareWakeThreshold: null,
		actiwareRestProposal: null
	};
}
function ba(e) {
	const { proposal: t, nights: n } = e ?? {
		proposal: Oe,
		nights: []
	}, a = t.rest_autoscore === O.screens ? n : [];
	return JSON.stringify([
		t.use_saved_rest_intervals,
		t.rest_autoscore,
		a.map(({ timestamps: e, activity_counts: t, sleep_scores: n, ...a }) => a)
	]);
}
function ka(e, t, n, a = /* @__PURE__ */ new Map(), i = {}) {
	const s = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = (/* @__PURE__ */ new Date(1e3 * (o - 43200))).toISOString().slice(0, 10);
		let t = s.get(e);
		t || s.set(e, t = []), t.push(o);
	}
	const r = Array.from(t);
	return [...s].map(([e, t]) => {
		const s = Date.parse(`${e}T00:00:00Z`) / 1e3, o = a.get(e);
		return Te({
			analysisDate: e,
			epochLengthSeconds: n,
			timestamps: t,
			activityCounts: [],
			sleepScores: [],
			eventMarkerTimestamps: r.filter((e) => e >= s + 43200 && e < s + 151200),
			diaryBedTime: X(o, "diary_in_bed_time"),
			diaryOnsetTime: X(o, "diary_onset_time"),
			diaryOutBedTime: X(o, "diary_out_of_bed_time"),
			diaryWakeTime: X(o, "diary_wake_time"),
			nightStartHour: ve(i.start),
			nightEndHour: ve(i.end)
		});
	});
}
async function Sa(e, t, n, a, i, s, r, o) {
	r?.throwIfAborted();
	const l = n ? Pe(n, We(n, a, e)) : null, u = !n || !l || Le(n, l), c = u || null !== n && null !== l && !Fe(n, l) ? e.filter((e) => "rest" === e.kind) : [], d = u ? e.filter((e) => "sleep" === e.kind) : [], m = t && l && i.actiwareSleepWake ? await i.actiwareSleepWake(t, l).catch(() => null) : null;
	r?.throwIfAborted();
	const p = n ? Be(n, a, e) : [], g = t && l && m ? {
		startTimestamp: ua(t.start_local),
		epochSeconds: t.epoch_seconds,
		scores: m,
		params: l,
		...p.length > 0 ? { paradigmDefaults: p } : {}
	} : null, f = t && l && i.actiwareWakeThreshold ? await i.actiwareWakeThreshold(t, l).catch(() => null) : null;
	r?.throwIfAborted();
	const h = !1 !== o?.proposal.use_saved_rest_intervals && c.length > 0 && d.length > 0 ? null : t && l && i.actiwareIntervals ? await i.actiwareIntervals(t, c, l, ...o ? [o] : []).catch(() => null) : null;
	r?.throwIfAborted();
	const w = h ?? {
		intervals: [...e],
		generated: !1
	}, _ = w.intervals.filter((e) => "rest" === e.kind || "sleep" === e.kind), y = s && m ? {
		...s,
		sleep_wake: m
	} : s, v = y && i.actiwareIntervalStatistics && _.length > 0 ? await i.actiwareIntervalStatistics({
		...y,
		intervals: _
	}).then((e) => ga(e ?? [])).catch(() => (console.warn("[actiware-statistics] the core rejected this file's Statistics input"), null)) : [];
	return r?.throwIfAborted(), {
		intervals: pa(w.intervals, w.generated),
		sleepWake: g,
		statistics: v,
		statisticsInput: y,
		wakeThreshold: f ?? null,
		restProposal: o ? {
			key: ba(o),
			...h?.nights ? { notes: Object.fromEntries(h.nights.map((e) => [e.analysis_date, e.note])) } : {}
		} : null
	};
}
const Ta = "Actiware statistics could not be computed for this file; the Actiware statistics block stays empty.";
function Ia(e, t) {
	return e ? (t ?? []).map((e) => `Actiware setting ${e.field} = '${e.raw_label}' not recognised; using default.`) : ["No Actiware analysis settings in this file; Actiware Sleep/Wake and rest intervals are not recomputed."];
}
async function xa(e, t) {
	if (Na(e)) return "aw5";
	const n = e.name.toLowerCase();
	if (n.endsWith(".aw5")) return "aw5";
	if (!n.endsWith(".csv")) return null;
	if ("function" != typeof t.detectDeviceFormat) return null;
	const a = new Uint8Array(await e.slice(0, 65536).arrayBuffer());
	return i = await t.detectDeviceFormat(a, e.name).catch(() => null), s = e.name, "actiware_csv" === i ? "actiware_csv" : "aw5" === i || s.toLowerCase().endsWith(".aw5") ? "aw5" : null;
	var i, s;
}
async function Aa(e, t, n, a, i, s = { cancel: () => {} }, r) {
	const o = (e, t) => F(t, W, e, s.signal, s.cancel), l = (e) => i && r ? {
		proposal: r.proposal,
		nights: r.proposal.rest_autoscore === O.screens ? ka(e.timestampsMs.map((e) => e / 1e3), e.eventMarkerInstantsSec, e.epochSeconds, void 0, {
			start: r.nightStartHour,
			end: r.nightEndHour
		}) : []
	} : null, u = async (e) => (await o("aggregateEpochSeries", () => n.aggregateEpochSeries({
		target_seconds: 60,
		series: e,
		sleep_scores: [],
		event_markers: []
	}))).series;
	if ("aw5" === t) {
		const t = Na(e) ? e.aw5Subject.downloadGuids[0] : void 0, r = Na(e) ? await e.loadAw5(s.signal) : await o("parseAw5", async () => n.parseAw5(new Uint8Array(await e.arrayBuffer())));
		if (P(s.signal, "after decoding the .AW5 database"), !r) throw new Error("This build's actours core cannot read .AW5 databases yet (needs the pin that exports parseAw5). Export the recording from Actiware as CSV instead.");
		const { warnings: c } = function(e) {
			const { status: t, reasons: n } = e.alignment;
			if ("broken" === t) throw new Error(`This .AW5 recording's samples do not line up with its clock (${n.join("; ") || "alignment broken"}), so it was not imported.`);
			return "suspect" === t ? { warnings: [`.AW5 alignment is suspect: ${n.join("; ") || "no reason given"}. Check the plot against the Actiware report.`] } : { warnings: [] };
		}(r), d = ya(r, t), m = r.actiware_analysis, p = m?.statistics_input ?? r.actiware_statistics_input ?? null;
		a?.(.6, "Preparing the supported native scoring grid...");
		const g = await Ma(_a(r, t), u, c, p);
		a?.(.8, "Actiware sleep/wake and statistics...");
		const f = m?.params ?? r.actiware_params, h = f ? {
			params: f,
			intervals: m?.intervals ?? r.series.rest_intervals ?? [],
			...m?.analysis ? { analysis: m.analysis } : {},
			...r.other_analyses ? { otherAnalyses: r.other_analyses } : {}
		} : null, w = await Sa(h?.intervals ?? [], m?.input ?? r.actiware_input ?? await ca(_a(r, t), n), h?.params ?? null, i, n, p, void 0, l(g));
		return {
			...g,
			actiwareRestProposal: w.restProposal,
			actiwareStatisticsInput: w.statisticsInput,
			actiwareIntervals: w.intervals,
			actiwareSleepWake: w.sleepWake,
			actiwareStatistics: w.statistics ?? [],
			actiwareRecording: h,
			actiwareWakeThreshold: w.wakeThreshold,
			warnings: [
				...g.warnings,
				...Ia(f, m?.params_warnings ?? r.actiware_params_warnings ?? r.series.actiware_params_warnings),
				...w.statistics ? [] : [Ta]
			],
			...d ? { gmtOffsetMinutes: d.gmt_offset_minutes } : {}
		};
	}
	const c = await o("parseEpochSeries", async () => n.parseEpochSeries(new Uint8Array(await e.arrayBuffer()), e.name));
	P(s.signal, "after parsing the Actiware export"), a?.(.6, "Preparing the supported native scoring grid...");
	const d = await Ma(c, u, [], c.actiware_statistics_input ?? null);
	a?.(.8, "Actiware sleep/wake and statistics...");
	const m = c.actiware_params ?? null, p = m ? {
		params: m,
		intervals: c.rest_intervals ?? []
	} : null, g = await Sa(c.rest_intervals ?? [], c.actiware_input ?? await ca(c, n), m, i, n, c.actiware_statistics_input ?? null, void 0, l(d));
	return {
		...d,
		actiwareRestProposal: g.restProposal,
		actiwareStatisticsInput: g.statisticsInput,
		actiwareIntervals: g.intervals,
		actiwareSleepWake: g.sleepWake,
		actiwareStatistics: g.statistics ?? [],
		actiwareRecording: p,
		actiwareWakeThreshold: g.wakeThreshold,
		warnings: [
			...d.warnings,
			...Ia(m, c.actiware_params_warnings),
			...g.statistics ? [] : [Ta]
		]
	};
}
function Na(e) {
	return "aw5Subject" in e;
}
function Ra(e, t) {
	const n = JSON.stringify({
		recordingKey: e.recordingKey,
		series: t.series,
		actiware_input: t.actiware_input,
		actiware_params: t.actiware_params,
		actiware_statistics_input: t.actiware_statistics_input,
		downloads: t.downloads.map(({ guid: e, ...t }) => t)
	});
	return new File([n], "aw5-subject");
}
var Ea = class extends Error {
	name = "ActiwareSleepContainmentError";
}, $a = class extends Error {
	name = "ActiwareRestEditError";
};
const Oa = (e, t) => Math.round((t - e.startTimestamp) / e.epochSeconds);
function Ca(e, t) {
	return e.startTimestamp + Oa(e, t) * e.epochSeconds;
}
const Da = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " "), La = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19);
function Ba(e) {
	return {
		kind: e.kind,
		source: e.source,
		start: La(e.startTimestamp),
		end: La(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	};
}
async function Pa(e, { epochs: t, params: n, grid: a, core: i }) {
	if (0 === e.length) return [];
	const s = await i.actiwareIntervals(t, e.map(Ba), n);
	if (!s || s.generated) throw new Error("The Actiware core did not derive the sleep inside these rest intervals.");
	const r = pa(s.intervals.filter((e) => "sleep" === e.kind), !0);
	return function(e, t) {
		const n = e.filter((e) => "rest" === e.kind);
		for (const a of e.filter((e) => "sleep" === e.kind)) {
			const e = Oa(t, a.startTimestamp), i = Oa(t, a.endTimestamp);
			if (!n.some((n) => e >= Oa(t, n.startTimestamp) && i <= Oa(t, n.endTimestamp))) throw new Ea(`Actiware sleep interval ${Da(a.startTimestamp)}–${Da(a.endTimestamp)} lies outside every rest interval.`);
		}
	}([...e, ...r], a), r;
}
const Fa = (e, t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp;
function Wa(e, t, n) {
	const a = ke(e, t);
	return a ? [...a.sleep && !n ? [{
		onsetTimestamp: a.sleep.startTimestamp,
		offsetTimestamp: a.sleep.endTimestamp,
		markerIndex: 1,
		markerType: d.MAIN_SLEEP
	}] : [], ...(a.additionalSleeps ?? []).map((e, t) => ({
		onsetTimestamp: e.startTimestamp,
		offsetTimestamp: e.endTimestamp,
		markerIndex: t + 2,
		markerType: d.NAP
	}))] : [];
}
function ja(e, t, n, a) {
	return Wa(t, n, a).map((t) => {
		const n = e.find((e) => e.markerType === t.markerType && e.onsetTimestamp === t.onsetTimestamp && e.offsetTimestamp === t.offsetTimestamp);
		return n ? {
			...n,
			markerIndex: t.markerIndex
		} : t;
	});
}
async function Ga(e, t, n, a) {
	if (!t) return null;
	const i = function(e, t) {
		const n = [...t].flatMap((t) => {
			const n = ke(e, t);
			return n?.sleep ? [n.sleep] : [];
		});
		return (e ?? []).filter((e) => "sleep" !== e.kind || !n.some((t) => t.startTimestamp === e.startTimestamp && t.endTimestamp === e.endTimestamp));
	}(e, n).map(Ba).sort((e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind));
	if (0 === i.length) return [];
	const s = await a({
		...t,
		intervals: i
	});
	return s ? ga(s).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)) : null;
}
async function Ua(e, t, n, a) {
	const i = function(e, t) {
		return (e ?? []).filter((e) => "rest" === e.kind && null !== be([e], t));
	}(e, t), s = "move" === n.kind ? i.find((e) => e.startTimestamp === n.from.startTimestamp && e.endTimestamp === n.from.endTimestamp) : "remove" === n.kind ? i.find((e) => Fa(n.holding, e)) : void 0;
	if ("add" !== n.kind && !s) throw new $a("That rest interval changed since it was shown; reload the night.");
	const r = e.filter((e) => e !== s && !(s && "sleep" === e.kind && Fa(e, s)));
	if ("remove" === n.kind) return r;
	const { grid: o } = a, l = s?.analysis, u = {
		kind: "rest",
		source: "event_marker",
		origin: "scorer",
		startTimestamp: Ca(o, n.to.startTimestamp),
		endTimestamp: Ca(o, n.to.endTimestamp),
		...l ? { analysis: l } : {}
	};
	if (u.endTimestamp <= u.startTimestamp) throw new $a("A rest interval must end after it starts.");
	if (r.some((e) => "rest" === e.kind && e.startTimestamp < u.endTimestamp && e.endTimestamp > u.startTimestamp)) throw new $a("A rest interval cannot overlap another rest interval.");
	if (null === be([u], t)) throw new $a("That rest interval would belong to another night.");
	const c = await Pa([u], a);
	return [
		...r,
		u,
		...c
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function za(e, t) {
	const n = (e) => [
		e.startTimestamp,
		e.endTimestamp,
		e.origin
	].join(":"), a = (e) => e ? {
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	} : null, i = (e) => e.filter((e) => "rest" === e.kind), s = new Set(i(e).map(n)), r = new Set(i(t).map(n));
	return {
		from: a(i(e).find((e) => !r.has(n(e)))),
		to: a(i(t).find((e) => !s.has(n(e))))
	};
}
async function Ha(e, t, n) {
	if (0 === t.length) return [...e];
	const a = e.filter((e) => {
		return "rest" === e.kind && (n = e, t.some((e) => n.startTimestamp < e.endTimestamp && n.endTimestamp > e.startTimestamp));
		var n;
	}), i = e.filter((e) => !(a.includes(e) || "sleep" === e.kind && a.some((t) => Fa(e, t)))), s = await Pa(t, n);
	return [
		...i,
		...t,
		...s
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
async function Va({ file: e, statisticsInput: t }, n, a, i) {
	if (!t) return null;
	const s = G(i), r = e.actiwareIntervals ?? [], o = await Kt(r.map((e) => e.startTimestamp), s), l = [...n.keys()].map((e) => ({
		date: e,
		rests: r.filter((t) => "rest" === t.kind && null !== be([t], e))
	}));
	let u = [...r];
	for (const { date: w, rests: _ } of l) {
		const e = r.filter((e) => {
			if ("sleep" !== e.kind) return !1;
			const t = r.find((t) => "rest" === t.kind && e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp);
			return t ? _.includes(t) : o(e.startTimestamp) === w;
		}), t = n.get(w), a = t?.sleepMarkers.filter((e) => (e.markerType === d.NAP || e.markerType === d.MAIN_SLEEP && !t.isInvalidNight) && null != e.onsetTimestamp && Number.isFinite(e.onsetTimestamp) && null != e.offsetTimestamp && Number.isFinite(e.offsetTimestamp) && e.offsetTimestamp > e.onsetTimestamp);
		if (t?.isInvalidNight || a?.length) {
			u = u.filter((t) => !e.includes(t));
			const t = e[0]?.analysis;
			for (const e of a ?? []) u.push({
				kind: "sleep",
				source: "event_marker",
				startTimestamp: e.onsetTimestamp,
				endTimestamp: e.offsetTimestamp,
				origin: "scorer",
				...t ? { analysis: t } : {}
			});
		}
	}
	const c = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19), m = u.map((e) => ({
		kind: e.kind,
		source: e.source,
		start: c(e.startTimestamp),
		end: c(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	})).sort((e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind)), p = await a({
		...t,
		intervals: m
	});
	if (!p) return null;
	const g = ga(p), f = await Kt([...e.actiwareStatistics ?? [], ...g].map((e) => e.startTimestamp), s), h = (e) => l.some(({ date: t, rests: n }) => {
		if ("rest" === e.kind) return null !== be([e], t);
		if ("sleep" !== e.kind) return !1;
		const a = r.find((t) => "rest" === t.kind && e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp);
		return a ? n.includes(a) : f(e.startTimestamp) === t;
	});
	return [...(e.actiwareStatistics ?? []).filter((e) => !h(e)), ...g.filter(h)].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
async function qa(e, t, n, a) {
	const i = [], s = [];
	for (const [r, o] of e) if (r) for (let e = 0; e < Math.min(r.length, o.length); e++) i.push(o[e]), s.push(r[e]);
	return await G(a).spanFiniteMean(Float64Array.from(i), Float64Array.from(s), t, n) ?? null;
}
const Ka = S.invalid_night_row?.markerTypeCell ?? "", Ja = S.nonwear_row?.markerTypeCell ?? "";
function Ya(e) {
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
function Za(e) {
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
const Qa = [
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
], Xa = [
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
];
async function ei(e, t, n, a, i, s, r) {
	try {
		return {
			metrics: t ? await $t(e, t, n, a, i, s, r) : await Et(e, n, a, i, s, null, r),
			error: null
		};
	} catch {
		r?.throwIfAborted();
		return console.warn("[local-export] metric computation failed for a selected period"), {
			metrics: null,
			error: "Metric computation failed for one selected period."
		};
	}
}
async function ti(e, t, n, a) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const i = new Set(n.filter((t) => t.markerType === d.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return i.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : Yn(t.filter((e) => i.has(e.date)), e, t[0]?.epochLengthSeconds, a);
}
function ni(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const ai = [
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
], ii = {
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
function si(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function ri(e, t, n, a, i) {
	const s = [], r = bs(n, gs.event, e), o = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		i?.throwIfAborted();
		const e = si(l, As(r, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await Kt(e, G(i)), u = new Set(Ss(r, l.id, a).keys());
		for (const a of e) {
			const e = o(a);
			t && (e < t[0] || e > t[1]) || u.has(e) && s.push({
				filename: l.filename,
				participantId: l.participantId ?? null,
				studyDate: e,
				localTimestamp: a,
				gmtOffsetMinutes: n
			});
		}
	}
	return s;
}
T.sleep_csv.filter((e) => "server" !== y[e].plane).map((e) => y[e].header), S.invalid_night_row.markerTypeCell, b("actiware_interval_csv", "local"), [
	"interval_score_count",
	"interval_score_average",
	"interval_score_manual_count",
	"interval_score_manual_average",
	"interval_score_scheduled_count",
	"interval_score_scheduled_average",
	"interval_score_no_response_count",
	"interval_score_late_count",
	"interval_score_late_average"
].map((e) => y[e].header), new Set(Nn.map(([, e]) => e)), b("event_marker_csv", "local"), b("actiware_sleep_wake_csv", "local"), new Uint8Array([3, 0]), A.GGIR_CORRECTED_WARM;
const oi = "union_all";
function li(e) {
	return e.nonwearDetector ?? "union_all";
}
const ui = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: oi
}, ci = {
	...ui,
	minimumWakeWearMinutes: je.minWearMinutesPerDay
};
function di(e) {
	return e ? {
		...ci,
		...e
	} : ci;
}
function mi(e, t) {
	const n = [];
	for (const a of e.values()) {
		for (const e of a.sleepMarkers) {
			const t = e.markerType === d.MAIN_SLEEP ? "main_sleep" : e.markerType === d.NAP ? "nap" : null;
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
function pi(e, t, n, a) {
	const i = li(t), s = "union_all" === i ? Object.entries(xe(e, n)) : [[i, Ie(e, i, n)], ..."detach_nonwear" === i ? [] : [["detach_nonwear", Ie(e, "detach_nonwear", n)]]], r = new Float64Array(e.timestamps);
	return s.flatMap(([e, t]) => {
		if (!t) return [];
		const n = new Uint8Array(t);
		return 0 === n.length ? [] : [n.length === r.length ? {
			kind: "algorithm_nonwear",
			source: e,
			timestamps: r,
			epochSeconds: a,
			mask: n
		} : {
			kind: "algorithm_nonwear",
			source: e,
			mask: n
		}];
	});
}
function gi(e) {
	return {
		excludeNonwear: e.excludeNonwear,
		excludeMainSleep: e.excludeMainSleep,
		excludeNaps: e.excludeNaps,
		useAlgorithmNonwear: e.useAlgorithmNonwear,
		useManualNonwear: e.useManualNonwear,
		minimumWakeWearMinutes: Number.isFinite(e.minimumWakeWearMinutes) ? Math.max(0, e.minimumWakeWearMinutes) : 0
	};
}
function fi(e) {
	return {
		totalEpochs: e.totalEpochs,
		includedEpochs: e.includedEpochs,
		nonwearEpochs: e.nonwearEpochs,
		mainSleepEpochs: e.mainSleepEpochs,
		napEpochs: e.napEpochs,
		overlapEpochs: e.overlapEpochs
	};
}
function hi(e, t) {
	return G(t).summarizePhysicalActivityDays(e);
}
async function wi(e, t = s()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
const _i = R.PRESCHOOL_FREE_LIVING_RF_3_5;
function yi(e) {
	const t = e.algorithmResults[_i];
	return null != t && new Uint8Array(t).length > 0;
}
function vi(e) {
	const t = e.algorithmResults[_i];
	if (!t) return null;
	const n = new Uint8Array(t);
	return n.length > 0 ? n : null;
}
function Mi(e) {
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
function bi(e) {
	return e instanceof Map ? bi([...e.entries()]) : Array.isArray(e) ? e.map(bi) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, bi(t)])) : e;
}
async function ki(e, t) {
	const { db: n, fileId: a, kind: i, inputs: s, signal: r } = e;
	r?.throwIfAborted();
	let o = n, l = null;
	if (o) try {
		const e = await o.activityDays.where("fileId").equals(a).primaryKeys();
		l = await L(JSON.stringify(bi({
			version: 1,
			core: "13d368371d67297234aca2ef548d23657abb31f7",
			kind: i,
			fileId: a,
			dayIds: [...e].sort((e, t) => Number(e) - Number(t)),
			inputs: s
		})));
		const t = await o.physicalActivityFileSummaries.get([a, i]);
		if (t?.inputKey === l) return t.value;
	} catch {
		o = null;
	}
	r?.throwIfAborted();
	const u = await t();
	if (r?.throwIfAborted(), o && l) try {
		await U(o, [o.physicalActivityFileSummaries], (e) => e.table(o.physicalActivityFileSummaries.name).put({
			fileId: a,
			kind: i,
			inputKey: l,
			value: u
		}), r);
	} catch {
		r?.throwIfAborted(), console.warn("[physical-activity] A file's answers could not be stored; the tab recomputes them.");
	}
	return u;
}
function Si(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function Ti(e, t) {
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
function Ii(e, t, n) {
	if (!n) return e.ruleLabel;
	const a = String(t.sedentaryMax), i = String(t.lightMin), s = String(t.moderateMin - 1), r = String(t.moderateMin), o = String(t.vigorousMin - 1), l = String(t.vigorousMin);
	return t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${a}, non-sedentary >=${i} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${a}, light ${i}-${s}, MVPA >=${r} counts/min` : `Custom cutpoints: Sed <=${a}, light ${i}-${s}, moderate ${r}-${o}, vigorous >=${l} counts/min`;
}
const xi = [
	null,
	"sedentary",
	"light",
	"moderate",
	"vigorous"
];
async function Ai(e) {
	const { values: t, countsPerMinuteScale: n, method: a, date: i, maskReasons: s } = e;
	if (0 === t.length) return null;
	const r = Math.max(1, Math.ceil(t.length / 180)), o = [];
	for (let d = 0; d < t.length; d += r) {
		const e = t[d] ?? NaN;
		Number.isFinite(e) && o.push({
			index: d,
			countsPerMinute: e * n
		});
	}
	if (0 === o.length) return null;
	const l = await G(e.signal).cutpointToneCodes(Float64Array.from(o, (e) => e.countsPerMinute), Si(a));
	let u = 0;
	const c = [];
	return o.forEach((e, t) => {
		const n = xi[l[t] ?? 0];
		n && (u = Math.max(u, e.countsPerMinute), c.push({
			x: c.length,
			value: e.countsPerMinute,
			tone: n,
			maskReason: s?.[e.index] ?? "included"
		}));
	}), 0 === c.length ? null : {
		date: i,
		sourceLabel: a.sourceLabel,
		valueMax: Math.max(u, a.cutpointScaleMax ?? 1),
		points: c
	};
}
function Ni(e, t) {
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
function Ri(e) {
	e.mvpaMinutesPerDay = e.totalDays > 0 ? e.mvpaMinutes / e.totalDays : 0, e.totalDays > 0 && (null != e.mvpaBouts && (e.mvpaBoutsPerDay = e.mvpaBouts / e.totalDays), null != e.sedentaryBreaks && (e.sedentaryBreaksPerDay = e.sedentaryBreaks / e.totalDays));
}
function Ei(e, t) {
	e.sedentaryMinutes += t.sedentaryMinutes, e.lightMinutes += t.lightMinutes, e.moderateMinutes += t.moderateMinutes, e.vigorousMinutes += t.vigorousMinutes, e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes;
}
function $i(e, t, n, a) {
	if (0 === t.totalDays) return;
	e.totalDays += t.totalDays, Ei(e, t.intensity), e.defaultIntensityMinutes && t.defaultIntensity && Ei(e.defaultIntensityMinutes, t.defaultIntensity), null != t.mimsUnitTotal && (e.mimsUnitTotal = (e.mimsUnitTotal ?? 0) + t.mimsUnitTotal), e.totalEpochsReviewed = (e.totalEpochsReviewed ?? 0) + t.totalEpochs, e.includedEpochsReviewed = (e.includedEpochsReviewed ?? 0) + t.includedEpochs, e.wakeWearMinutes = (e.wakeWearMinutes ?? 0) + t.wakeWearMinutes, e.excludedNonwearMinutes = (e.excludedNonwearMinutes ?? 0) + t.excludedNonwearMinutes, e.excludedMainSleepMinutes = (e.excludedMainSleepMinutes ?? 0) + t.excludedMainSleepMinutes, e.excludedNapMinutes = (e.excludedNapMinutes ?? 0) + t.excludedNapMinutes, e.maskOverlapEpochs = (e.maskOverlapEpochs ?? 0) + t.overlapEpochs, e.maskPolicy = n;
	const i = t.bouts;
	i && (e.mvpaBouts = (e.mvpaBouts ?? 0) + i.mvpaBouts, e.mvpaBoutMinutes = (e.mvpaBoutMinutes ?? 0) + i.mvpaBoutMinutes, e.sedentaryBouts = (e.sedentaryBouts ?? 0) + i.sedentaryBouts, e.sedentaryBreaks = (e.sedentaryBreaks ?? 0) + i.sedentaryBreaks, a.total += i.meanSedentaryBoutMinutes * i.sedentaryBouts, e.meanSedentaryBoutMinutes = e.sedentaryBouts > 0 ? a.total / e.sedentaryBouts : 0);
}
async function Oi(e) {
	const { file: t, days: n, summaries: a, markersByAnalysisDate: i, sensorNonwearPeriods: s, maskPolicy: r, validDayCriteria: o, cutpointMethods: l, choiAxis: u } = e, c = new Set([...i].filter(([, e]) => p(e)).map(([e]) => e)), d = Number.isFinite(t.epochLengthSeconds) && t.epochLengthSeconds > 0 ? t.epochLengthSeconds : 60, m = 60 / d, g = {
		policy: gi(r),
		intervals: mi(i, s)
	}, f = n.map((e) => pi(e, r, u, d)), h = n.map((e, t) => ({
		timestamps: new Float64Array(e.timestamps),
		epochSeconds: d,
		series: f[t]
	})), { dates: w, shortfall: _ } = await async function({ days: e, countDays: t, epochSeconds: n, request: a, criteria: i, scoredDates: s, signal: r }) {
		if (!i) return {
			dates: null,
			shortfall: null
		};
		if (e.some((e) => !s.has(e.date))) return {
			dates: null,
			shortfall: null
		};
		const o = await hi({
			...a,
			days: [...t]
		}, r), l = 86400 / n, u = await wi(e.map((e) => e.date), G(r)), c = e.map((e, t) => {
			const n = o.days[t].mask;
			return {
				date: e.date,
				wearMinutes: n.wakeWearMinutes,
				isWeekend: u[t],
				isPartialDay: n.totalEpochs < l
			};
		}), d = await async function(e, t = je, n) {
			return G(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
		}(c, i, r);
		if (!d.meetsCriteria) {
			const e = i.requireWeekendDay && !d.hasWeekendValidDay ? ", including a weekend day" : "";
			return {
				dates: /* @__PURE__ */ new Set(),
				shortfall: `${String(d.validDays)} of the required ${String(i.minValidDaysPerParticipant)} valid days${e}`
			};
		}
		const m = await async function(e, t = je, n) {
			const a = await G(n).validWearDays(Float64Array.from(e), t);
			return Array.from(a, (e) => 0 !== e);
		}(c.map((e) => e.wearMinutes), i, r);
		return {
			dates: new Set(c.filter((e, t) => m[t]).map((e) => e.date)),
			shortfall: null
		};
	}({
		days: n,
		countDays: h,
		epochSeconds: d,
		request: g,
		criteria: o,
		scoredDates: c,
		signal: e.signal
	}), y = a.filter((e) => !(r.minimumWakeWearMinutes > 0 && (null == e.validHours || 60 * e.validHours < r.minimumWakeWearMinutes))).filter((e) => null != e.sedentaryMinutes && null != e.lpaMinutes && null != e.mvpaMinutes).filter((e) => !w || w.has(e.analysisDate)).map((e) => ({
		sedentaryMinutes: e.sedentaryMinutes,
		lpaMinutes: e.lpaMinutes,
		mvpaMinutes: e.mvpaMinutes
	})), v = n.map((e) => !w || w.has(e.date)), M = [];
	for (let p = 0; p < l.length; p++) {
		e.signal?.throwIfAborted();
		const a = l[p];
		if (Re(a.method, t.sourceProfileId)) {
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
		const s = await hi({
			...g,
			analysisKind: "count_cutpoint",
			thresholds: Si(a),
			defaultThresholds: Si(Ue[p]),
			days: i.map(({ index: e, values: t }) => ({
				...h[e],
				values: t,
				aggregate: v[e]
			}))
		}, e.signal), r = {
			signalSeen: s.days.some((e) => e.hasValidSignal),
			totals: s.totals
		}, o = i.find(({ index: e }) => v[e]);
		if (o) {
			const t = await hi({
				...g,
				includeEpochDetails: !0,
				days: [h[o.index]]
			}, e.signal), i = await Ai({
				values: o.values,
				countsPerMinuteScale: m,
				method: a,
				date: n[o.index].date,
				maskReasons: t.days[0].reasons,
				signal: e.signal
			});
			i && (r.previewTrace = i);
		}
		if (s.totals.totalDays > 0) {
			const t = await Ge(a.method, d, e.signal);
			t && "warn" === t.severity && (r.epochMismatch = t);
		}
		M.push(r);
	}
	const b = (e, t) => n.flatMap((n, a) => {
		const i = e(n);
		return i && 0 !== i.length ? [{
			timestamps: h[a].timestamps,
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(i),
			grid: t,
			fallbackEpochSeconds: d,
			series: f[a],
			aggregate: v[a]
		}] : [];
	}), k = async (t, n) => {
		if (e.signal?.throwIfAborted(), 0 === t.length) return null;
		const a = await hi({
			...g,
			analysisKind: n,
			days: t
		}, e.signal);
		return {
			signalSeen: a.days.some((e) => e.hasValidSignal),
			totals: a.totals
		};
	};
	return {
		shortfall: _,
		ggirSummarySeen: a.length > 0,
		ggirRows: y,
		hasAnyActivity: v.some(Boolean),
		cutpoints: M,
		mims: await k(b((e) => e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output"), "mims_volume"),
		preschoolRf: await k(b(vi, "classifier"), "preschool_classifier")
	};
}
async function Ci(e = {}) {
	const t = await Y(e.dbOverride, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = e.username ?? "anonymous", a = e.maskPolicy ?? ui, i = e.validDayCriteria, s = Ae("ggir_enmo"), r = Ae("mims"), o = Ae("preschool_free_living_rf_3_5"), l = Ni({
		method: s.method,
		label: s.label,
		requiredSignal: s.requiredSignal,
		sourceLabel: s.signalLabel,
		ruleLabel: "Uses imported GGIR daily sedentary, LPA, and MVPA summaries",
		unavailableAction: "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."
	}, null), u = G(e.signal), c = await Promise.all(Ue.map((t) => async function(e, t, n) {
		const a = t[e.method];
		if (!a) return e;
		const i = await Ne(a, n);
		if (!i) return e;
		const s = Si(e);
		return {
			...e,
			ruleLabel: Ii(e, i, JSON.stringify(i) !== JSON.stringify(s)),
			cutpointBands: Ti(i, e.cutpointBands),
			cutpointScaleMax: Math.max(e.cutpointScaleMax ?? 1, ...Object.values(i).filter(Number.isFinite)),
			...i
		};
	}(t, e.cutpointOverrides ?? {}, u))), d = c.map((e, t) => function(e, t) {
		return {
			...Ni(e, null),
			cutpointThresholds: Si(e),
			defaultCutpointThresholds: Si(t),
			cutpointEditable: !0,
			defaultIntensityMinutes: {
				sedentaryMinutes: 0,
				lightMinutes: 0,
				moderateMinutes: 0,
				vigorousMinutes: 0,
				mvpaMinutes: 0
			}
		};
	}(e, Ue[t])), m = new Array(c.length).fill(!1), p = [], g = Ni({
		method: r.method,
		label: r.label,
		requiredSignal: r.requiredSignal,
		sourceLabel: r.signalLabel,
		ruleLabel: "Uses stored MIMS_UNIT epoch values from actours; intensity cutpoints/equating are not applied in this row.",
		unavailableAction: "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values.",
		unavailableStatus: "backend_required"
	}, null);
	g.mimsUnitTotal = 0, g.mimsUnitPerDay = 0;
	const f = Ni({
		method: o.method,
		label: o.label,
		requiredSignal: o.requiredSignal,
		sourceLabel: o.signalLabel,
		ruleLabel: "Uses actimetric Preschool Wrist Random Forest Free Living Lag-Lead classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
		unavailableAction: "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.",
		unavailableStatus: "backend_required"
	}, null), h = Ae("hildebrand_enmo_wrist_2014"), w = Ni({
		method: h.method,
		label: h.label,
		requiredSignal: h.requiredSignal,
		sourceLabel: h.signalLabel,
		ruleLabel: "Hildebrand 2014 non-dominant wrist ENMO (mg) cut-points: MVPA >=201 mg, vigorous >=707 mg; light near ~45 mg. Applied to a calibrated ENMO (mg) epoch signal, never to ActiGraph counts.",
		unavailableAction: "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline; the browser count pipeline does not compute ENMO mg.",
		unavailableStatus: "needs_signal"
	}, null);
	let _ = !1, y = !1, v = !1, M = !1;
	const b = Me(), k = c.map(() => ({ total: 0 })), S = { total: 0 };
	for (const I of t) {
		if (e.signal?.throwIfAborted(), !I.id) continue;
		const t = I.id, s = await z(t, e.dbOverride), r = await ie(t, n, e.dbOverride), o = await K(t, e.dbOverride), u = await ki({
			db: e.dbOverride ?? null,
			fileId: t,
			kind: "analysis",
			...e.signal ? { signal: e.signal } : {},
			inputs: {
				epochLengthSeconds: I.epochLengthSeconds,
				sourceProfileId: I.sourceProfileId ?? null,
				summaries: s,
				markers: Mi(r),
				sensorNonwearPeriods: o,
				maskPolicy: a,
				validDayCriteria: i ?? null,
				thresholds: c.map(Si),
				choiAxis: b
			}
		}, async () => Oi({
			file: I,
			days: [...(await se(t, e.dbOverride, e.activityDayMemo)).values()],
			summaries: s,
			markersByAnalysisDate: r,
			sensorNonwearPeriods: o,
			maskPolicy: a,
			validDayCriteria: i,
			cutpointMethods: c,
			choiAxis: b,
			...e.signal ? { signal: e.signal } : {}
		}));
		u.shortfall && p.push(u.shortfall), u.ggirSummarySeen && (y = !0);
		for (const e of u.ggirRows) l.totalDays += 1, l.sedentaryMinutes += e.sedentaryMinutes, l.lightMinutes += e.lpaMinutes, l.mvpaMinutes += e.mvpaMinutes;
		u.hasAnyActivity && (_ = !0), u.cutpoints.forEach((e, t) => {
			if (!e) return;
			const n = d[t];
			e.signalSeen && (m[t] = !0), $i(n, e.totals, a, k[t]), e.previewTrace && !n.previewTrace && (n.previewTrace = e.previewTrace), e.epochMismatch && !n.epochMismatch && (n.epochMismatch = e.epochMismatch);
		}), u.mims && (u.mims.signalSeen && (v = !0), $i(g, u.mims.totals, a, S)), u.preschoolRf && (u.preschoolRf.signalSeen && (M = !0), $i(f, u.preschoolRf.totals, a, S));
	}
	for (let I = 0; I < d.length; I++) {
		const e = d[I], t = c[I];
		e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes, 0 === e.totalDays && (e.available = !1, e.status = m[I] ? "ready" : "needs_signal", e.unavailableReason = m[I] ? p.length > 0 ? `Excluded by the valid-days-per-participant rule: ${p.join("; ")}. Change it in Study Settings → valid-day criteria.` : `No local ${e.sourceLabel.toLowerCase()} days meet the minimum wake-wear rule.` : _ ? `No local ${e.sourceLabel.toLowerCase()} days are available.` : "No local activity epochs are available.", e.nextStepLabel = t.unavailableAction), Ri(e);
	}
	l.moderateMinutes = l.mvpaMinutes, Ri(l), 0 === l.totalDays && (l.available = !1, l.status = y ? "ready" : "needs_signal", l.unavailableReason = y ? "No local GGIR daily summaries meet the current inclusion rules." : "No local GGIR daily summaries are available. Import raw/5-second-capable files to populate ENMO summaries.", l.nextStepLabel = "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."), g.totalDays > 0 ? (g.available = !0, g.status = "ready", g.unavailableReason = null, g.nextStepLabel = null, g.mimsUnitPerDay = (g.mimsUnitTotal ?? 0) / g.totalDays) : (g.available = !1, g.status = v ? "ready" : "backend_required", g.unavailableReason = v ? "No stored MIMS_UNIT epoch days meet the current inclusion rules." : "No MIMS_UNIT epoch values are stored in this workspace yet. This becomes ready when the actours MIMS backend/WASM build computes and stores MIMS_UNIT epochs.", g.nextStepLabel = "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values."), Ri(w), w.available = !1, w.status = "needs_signal", w.unavailableReason = "No calibrated ENMO (mg) epoch stream is available in this workspace. ENMO (mg) is a raw/GGIR-derived signal; the browser count pipeline does not produce it, so this method cannot classify counts against Hildebrand mg thresholds.", w.nextStepLabel = "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline.", Ri(f), f.totalDays > 0 ? (f.available = !0, f.status = "ready", f.unavailableReason = null, f.nextStepLabel = null) : (f.available = !1, f.status = M ? "ready" : "backend_required", f.unavailableReason = M ? "No stored preschool wrist RF class days meet the current inclusion rules." : "No actimetric-compatible preschool wrist RF class epochs are stored in this workspace yet. This becomes ready when actours/WASM computes 15 s classes for 3-5 year-old wrist data.", f.nextStepLabel = "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.");
	const T = t.map((e) => e.sourceProfileId);
	return [
		l,
		f,
		...d,
		w,
		g
	].filter((e) => $e(e.method, T));
}
function Di(e, t) {
	if (!t) return !0;
	const [n, a] = t;
	return e >= n && e <= a;
}
function Li(e) {
	const t = Ee.find((t) => t.method === e);
	if (t) return {
		family: t.family,
		requiredSignal: t.requiredSignal,
		computationOwner: t.backendOwner ?? "browser_workspace",
		frontendComputesMetric: t.frontendComputesMetric,
		statusWhenMissing: t.statusWhenMissing
	};
	const n = Ae(e), a = "ready" === n.statusWhenMissing ? "needs_signal" : n.statusWhenMissing;
	return {
		family: n.family,
		requiredSignal: n.requiredSignal,
		computationOwner: n.backendDependency ?? "browser_workspace",
		frontendComputesMetric: "count_cutpoint" === n.family,
		statusWhenMissing: a
	};
}
function Bi(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function Pi(e, t, n) {
	return "default" === n ? e.ruleLabel : t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, non-sedentary >=${String(t.lightMin)} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, MVPA >=${String(t.moderateMin)} counts/min` : `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, moderate ${String(t.moderateMin)}-${String(t.vigorousMin - 1)}, vigorous >=${String(t.vigorousMin)} counts/min`;
}
function Fi(e) {
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
async function Wi(e, t, n = {}, a) {
	const i = await Y(a), s = (e.length > 0 ? i.filter((t) => null != t.id && e.includes(t.id)) : i).sort((e, t) => e.filename.localeCompare(t.filename)), r = [], o = n.username ?? "anonymous", l = n.maskPolicy ?? ui, u = n.choiAxis ?? Me(), c = li(l), d = n.cutpointOverrides, m = n.cutpointPresetNames, p = G(n.signal), g = await Promise.all(Ue.map((e) => async function(e, t, n, a) {
		const i = t?.[e.method], s = i ? await Ne(i, a) : null;
		return s ? {
			thresholds: s,
			source: "custom",
			presetName: n?.[e.method] ?? ""
		} : {
			thresholds: Bi(e),
			source: "default",
			presetName: ""
		};
	}(e, d, m, p))), f = n.inclusionRulePresetName ?? "", h = n.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), w = Ae("ggir_enmo"), _ = Ae("mims"), y = Ae("preschool_free_living_rf_3_5"), v = Li("ggir_enmo"), M = Li("mims"), b = Li("preschool_free_living_rf_3_5");
	for (const k of s) {
		if (n.signal?.throwIfAborted(), !k.id) continue;
		if (!0 === k.ggirSummariesNeedRecompute) throw new Error(`${k.filename}: its GGIR summaries were not recomputed for the current study settings. In Study settings, run Rescore (offered for every file whose summaries are refused) before exporting.`);
		const e = k.participantId ?? "", i = Number.isFinite(k.epochLengthSeconds) && k.epochLengthSeconds > 0 ? k.epochLengthSeconds : 60, s = await z(k.id, a);
		for (const n of s) Di(n.analysisDate, t) && r.push({
			filename: k.filename,
			participantId: e,
			analysisDate: n.analysisDate,
			method: "ggir_enmo",
			methodLabel: w.label,
			methodFamily: v.family,
			requiredSignalContract: v.requiredSignal,
			computationOwner: v.computationOwner,
			frontendComputesMetric: v.frontendComputesMetric,
			sourceSignal: w.signalLabel,
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
			sourceContentHash: k.sourceContentHash ?? k.fileHash,
			exportedAt: h,
			notes: "Stored GGIR daily summary values."
		});
		const d = [...(await se(k.id, a, n.activityDayMemo)).entries()].filter(([e]) => Di(e, t)).sort(([e], [t]) => e.localeCompare(t)).map(([, e]) => e), m = await ie(k.id, o, a), p = await K(k.id, a), S = {
			policy: gi(l),
			intervals: mi(m, p)
		}, T = d.map((e) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: i,
			series: pi(e, l, u, i)
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
			const s = await hi({
				...S,
				...t,
				days: a.map(({ dayInput: e }) => e)
			}, n.signal);
			return n.signal?.throwIfAborted(), a.forEach(({ index: e }, t) => {
				i[e] = s.days[t];
			}), i;
		}, x = (e, t, n, a) => e && e.length > 0 ? {
			timestamps: T[a].timestamps,
			series: T[a].series ?? [],
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(e),
			grid: t,
			fallbackEpochSeconds: i
		} : null, A = [], N = Ue.map((e) => null !== Re(e.method, k.sourceProfileId));
		for (const [t, n] of Ue.entries()) N[t] ? A.push([]) : A.push(await I((e, t) => {
			const a = new Float64Array("axisY" === n.axis ? e.axisY : e.vectorMagnitude);
			return a.length > 0 && a.length === T[t].timestamps.length ? {
				...T[t],
				values: a
			} : null;
		}, {
			analysisKind: "count_cutpoint",
			thresholds: g[t].thresholds
		}));
		const R = await I((e, t) => x(vi(e), "classifier", e, t), { analysisKind: "preschool_classifier" }), E = await I((e, t) => x(e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output", e, t), { analysisKind: "mims_volume" }), $ = await Promise.all(Ue.map((e) => Ge(e.method, i, n.signal)));
		for (const [t, n] of d.entries()) {
			const a = n.date;
			for (const [n, d] of Ue.entries()) {
				if (N[n]) continue;
				const s = g[n], u = Pi(d, s.thresholds, s.source), m = Li(d.method), p = $[n], w = Fi(A[n][t]);
				r.push({
					filename: k.filename,
					participantId: e,
					analysisDate: a,
					method: d.method,
					methodLabel: d.label,
					methodFamily: m.family,
					requiredSignalContract: m.requiredSignal,
					computationOwner: m.computationOwner,
					frontendComputesMetric: m.frontendComputesMetric,
					sourceSignal: d.sourceLabel,
					status: w ? "ready" : m.statusWhenMissing,
					methodRule: u,
					thresholdSource: s.source,
					thresholdPresetName: s.presetName,
					sedentaryMax: s.thresholds.sedentaryMax,
					lightMin: s.thresholds.lightMin,
					moderateMin: s.thresholds.moderateMin,
					vigorousMin: s.thresholds.vigorousMin,
					sedentaryMinutes: w?.sedentaryMinutes ?? null,
					lightMinutes: w?.lightMinutes ?? null,
					moderateMinutes: w?.moderateMinutes ?? null,
					vigorousMinutes: w?.vigorousMinutes ?? null,
					mvpaMinutes: w?.mvpaMinutes ?? null,
					mimsUnitTotal: null,
					epochLengthSeconds: i,
					epochsReviewed: w?.epochsReviewed ?? 0,
					wakeWearMinutes: w?.wakeWearMinutes ?? null,
					excludedNonwearMinutes: w?.excludedNonwearMinutes ?? null,
					excludedMainSleepMinutes: w?.excludedMainSleepMinutes ?? null,
					excludedNapMinutes: w?.excludedNapMinutes ?? null,
					maskOverlapEpochs: w?.maskOverlapEpochs ?? null,
					mvpaBouts: w?.mvpaBouts ?? null,
					mvpaBoutMinutes: w?.mvpaBoutMinutes ?? null,
					sedentaryBouts: w?.sedentaryBouts ?? null,
					sedentaryBreaks: w?.sedentaryBreaks ?? null,
					meanSedentaryBoutMinutes: w?.meanSedentaryBoutMinutes ?? null,
					nativeEpochSeconds: p?.nativeEpochSeconds ?? null,
					epochMismatch: "warn" === p?.severity,
					inclusionRulePresetName: f,
					maskExcludeNonwear: l.excludeNonwear,
					maskExcludeMainSleep: l.excludeMainSleep,
					maskExcludeNaps: l.excludeNaps,
					maskUseManualNonwear: l.useManualNonwear,
					maskUseAlgorithmNonwear: l.useAlgorithmNonwear,
					maskNonwearDetector: c,
					maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
					scoredUsername: o,
					sourceContentHash: k.sourceContentHash ?? k.fileHash,
					exportedAt: h,
					notes: w ? u : `No finite ${d.sourceLabel.toLowerCase()} values for this day.`
				});
			}
			const s = Fi(R[t]);
			null === Re("preschool_free_living_rf_3_5", k.sourceProfileId) && r.push({
				filename: k.filename,
				participantId: e,
				analysisDate: a,
				method: "preschool_free_living_rf_3_5",
				methodLabel: y.label,
				methodFamily: b.family,
				requiredSignalContract: b.requiredSignal,
				computationOwner: b.computationOwner,
				frontendComputesMetric: b.frontendComputesMetric,
				sourceSignal: y.signalLabel,
				status: s ? "ready" : b.statusWhenMissing,
				methodRule: "Stored actimetric preschool wrist RF classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
				thresholdSource: "not_applicable",
				thresholdPresetName: "",
				sedentaryMax: null,
				lightMin: null,
				moderateMin: null,
				vigorousMin: null,
				sedentaryMinutes: s?.sedentaryMinutes ?? null,
				lightMinutes: s?.lightMinutes ?? null,
				moderateMinutes: s?.moderateMinutes ?? null,
				vigorousMinutes: s?.vigorousMinutes ?? null,
				mvpaMinutes: s?.mvpaMinutes ?? null,
				mimsUnitTotal: null,
				epochLengthSeconds: s?.epochLengthSeconds ?? i,
				epochsReviewed: s?.epochsReviewed ?? 0,
				wakeWearMinutes: s?.wakeWearMinutes ?? null,
				excludedNonwearMinutes: s?.excludedNonwearMinutes ?? null,
				excludedMainSleepMinutes: s?.excludedMainSleepMinutes ?? null,
				excludedNapMinutes: s?.excludedNapMinutes ?? null,
				maskOverlapEpochs: s?.maskOverlapEpochs ?? null,
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
				sourceContentHash: k.sourceContentHash ?? k.fileHash,
				exportedAt: h,
				notes: s ? "Stored actimetric-compatible preschool class epochs summarized with the selected mask policy." : "No stored actimetric-compatible preschool class epochs for this day."
			});
			const u = Fi(E[t]);
			null === Re("mims", k.sourceProfileId) && r.push({
				filename: k.filename,
				participantId: e,
				analysisDate: a,
				method: "mims",
				methodLabel: _.label,
				methodFamily: M.family,
				requiredSignalContract: M.requiredSignal,
				computationOwner: M.computationOwner,
				frontendComputesMetric: M.frontendComputesMetric,
				sourceSignal: _.signalLabel,
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
				inclusionRulePresetName: f,
				maskExcludeNonwear: l.excludeNonwear,
				maskExcludeMainSleep: l.excludeMainSleep,
				maskExcludeNaps: l.excludeNaps,
				maskUseManualNonwear: l.useManualNonwear,
				maskUseAlgorithmNonwear: l.useAlgorithmNonwear,
				maskNonwearDetector: c,
				maskMinimumWakeWearMinutes: l.minimumWakeWearMinutes,
				scoredUsername: o,
				sourceContentHash: k.sourceContentHash ?? k.fileHash,
				exportedAt: h,
				notes: u ? "Stored MIMS_UNIT epoch values; intensity cutpoints are not applied." : "No stored MIMS_UNIT epoch values for this day."
			});
		}
	}
	return r;
}
[
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
].join(","), Ue.length;
var ji = n({
	editsFromMarkers: () => Yi,
	getGgirMarkerInputs: () => Zi,
	ggirNightRecords: () => Ji,
	hasGgirRecomputeFailure: () => Vi,
	mergeGgirSleepMarkers: () => Ki,
	recomputeGgirResults: () => es,
	recoverPendingGgirRecomputes: () => ts,
	reviewGgirResultsForMarkers: () => as,
	scheduleGgirRecompute: () => Xi
});
const Gi = new EventTarget(), Ui = /* @__PURE__ */ new WeakMap(), zi = 800, Hi = "Update GGIR review";
function Vi(e, t, n) {
	return x.getState().jobs[`${n.name}:${Qi(e, t)}`]?.status === C.FAILED;
}
function qi(e, t, n, a, i) {
	if (i?.aborted || function(e) {
		return e instanceof Error && e.name === w.errnames.DatabaseClosed;
	}(a)) return;
	const s = Qi(e, t), r = `${n.name}:${s}`, o = x.getState();
	o.jobs[r]?.controller.signal.aborted || o.jobs[r]?.status === C.ELSEWHERE || (o.update(r, {
		id: r,
		key: s,
		workspaceId: n.name,
		kind: A.GGIR_RECOMPUTE,
		label: Hi,
		controller: o.jobs[r]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: C.FAILED
	}), n.isOpen() && D() === n && Gi.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function Ki(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function Ji(e, t, n, a = [], i) {
	const s = V([...n.values()].flat(), !0), r = s?.algorithm ?? we(t), o = s?.detectionRule ?? null, l = /* @__PURE__ */ new Map();
	for (const [d, m] of n) {
		const e = V(m, !0);
		e && l.set(d, [{
			...e,
			algorithm: r,
			detectionRule: o
		}]);
	}
	const u = fe(t), c = u.length ? await G(i).ggirLabelsToStoredMs(Float64Array.from(u.flatMap((e) => [e.onsetMs, e.wakeMs])), a) : [];
	for (const [m, p] of u.entries()) {
		const t = l.get(p.nightDate)?.[0], n = ce(p, t);
		"scored" !== n.kind && "invalid" !== n.kind ? l.set(p.nightDate, [{
			fileId: e,
			date: p.nightDate,
			username: re,
			scoringSessionId: null,
			contentHash: "",
			syncStatus: "synced",
			lastModifiedAt: "",
			isInvalidNight: !1,
			needsConsensus: !1,
			notes: "",
			nonwearMarkers: [],
			...t,
			algorithm: r,
			detectionRule: o,
			sleepMarkers: Ki({
				markerType: d.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: c[2 * m] / 1e3,
				offsetTimestamp: c[2 * m + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : l.set(p.nightDate, t ? [t] : []);
	}
	return l;
}
async function Yi(e, t, n = [], a) {
	const i = he(e).flatMap((e) => {
		const n = ce(e, t.get(e.nightDate));
		return "scored" === n.kind && null != n.main.onsetTimestamp && null != n.main.offsetTimestamp ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === i.length) return [];
	const s = G(a), r = await s.storedToGgirLabelsMs(Float64Array.from(i.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await s.wallClockLabels(Float64Array.from([...r, ...i.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * i.length;
	return i.flatMap(({ w: e }, t) => {
		const n = o[2 * t], a = o[2 * t + 1];
		return n !== o[l + 2 * t] || a !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: a
		}] : [];
	});
}
async function Zi(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [a, i] = await Promise.all([H(e, t, n), ne(e, n)]), s = new Map([...a].flatMap(([e, t]) => {
			const n = V(t, !0);
			return n ? [[e, n]] : [];
		})), r = i?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([r ?? [], [...s].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				ce(void 0, t)
			])]),
			markers: s,
			clockSteps: r,
			bundleRevision: i?.ggirBundleRevision
		};
	});
}
function Qi(e, t) {
	return `${A.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function Xi(e, t, n, a) {
	if (!n.isOpen() || D() !== n || a?.aborted) return;
	let i = Ui.get(n);
	i || (i = /* @__PURE__ */ new Map(), Ui.set(n, i));
	const s = Qi(e, t);
	clearTimeout(i.get(s)), i.set(s, setTimeout(() => {
		i.delete(s), n.files.get(e).then((i) => {
			if (i?.ggirBundleRevision && n.isOpen() && D() === n && !a?.aborted) return es(e, t, n, a);
		}).catch((i) => {
			a?.aborted || i instanceof DOMException && "AbortError" === i.name || (qi(e, t, n, i, a), n.isOpen() && D() === n && (console.error("[ggir-results] recompute failed."), te("error", "GGIR results recompute failed", J(i))));
		});
	}, zi));
}
function es(e, t, n, a, i = !0) {
	const s = (r, o = a) => j({
		kind: A.GGIR_RECOMPUTE,
		key: Qi(e, t),
		label: Hi,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (a) => {
			a.signal.throwIfAborted();
			const o = await async function(e, t, n, a, i) {
				if (a.throwIfAborted(), !n.isOpen() || D() !== n) return null;
				const { markerInputs: s, markers: r, clockSteps: o, bundleRevision: l } = await Zi(e, t, n);
				if (!l) return null;
				const u = await n.ggirScorerReviews.get([e, t]);
				if (!n.isOpen() || D() !== n) return null;
				if (a.throwIfAborted(), u?.markerInputs === s && u.bundleRevision === l) return i && Gi.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), u.current ?? null;
				const c = await h(n, e);
				if (!c) return null;
				const d = await Yi(c.imported, r, o, a);
				if (!n.isOpen() || D() !== n) return null;
				const m = ns(u, l, d) ? u.current : (await as(c, r, o, d, a)).current;
				a.throwIfAborted();
				const p = (/* @__PURE__ */ new Date()).toISOString();
				if (!n.isOpen() || D() !== n) return null;
				const g = await U(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!n.isOpen() || D() !== n) return null;
					const i = await Zi(e, t, n);
					return i.markerInputs === s && i.bundleRevision === l && (0 === await n.ggirResultsBundles.where(":id").equals(e).count() ? null : (a.throwIfAborted(), await n.ggirScorerReviews.put({
						fileId: e,
						scorer: t,
						...m ? { current: m } : {},
						edits: d,
						markerInputs: s,
						bundleRevision: l,
						updatedAt: p
					}), !0));
				}, a);
				return g ? (Gi.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), a.throwIfAborted(), m ?? c.imported) : (a.throwIfAborted(), !1 !== g && null);
			}(e, t, n, a.signal, i);
			return a.signal.throwIfAborted(), !1 !== o ? o : (r < 2 && s(r + 1, a.signal).catch((i) => qi(e, t, n, i, a.signal)), null);
		}
	});
	return s(0);
}
function ts(e, t) {
	return j({
		kind: A.GGIR_RECOVERY,
		key: A.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const a = () => !t.signal.aborted && e.isOpen() && D() === e;
			try {
				if (!a()) return;
				const s = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: r } = await import("./local-data-source-JzDPSUga.js").then((e) => e.n);
				for (const o of s) {
					if (t.signal.throwIfAborted(), !a()) return;
					try {
						const [s] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), r(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), u = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...s.map((e) => e.scorer)]);
						u.delete(re);
						for (const r of u) {
							if (!a()) return;
							try {
								const n = Vi(o, r, e);
								if (!n) {
									const { markerInputs: t, bundleRevision: n } = await Zi(o, r, e), a = s.find((e) => e.scorer === r);
									if (n && a?.markerInputs === t && a.bundleRevision === n) continue;
								}
								await es(o, r, e, t.signal, n);
							} catch (i) {
								n = !0, qi(o, r, e, i, t.signal);
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
				const i = Object.values(x.getState().jobs).filter((t) => N(t) && t.workspaceId === e.name && t.kind === A.GGIR_RECOMPUTE && t.status === C.FAILED);
				for (const t of i) {
					const i = t.key.slice(A.GGIR_RECOMPUTE.length + 1);
					if (!a()) break;
					const s = i.indexOf(":"), r = Number(i.slice(0, s)), o = JSON.parse(i.slice(s + 1));
					try {
						await e.transaction("r", e.ggirResultsBundles, e.markers, e.ggirScorerReviews, async () => {
							if (!a()) return;
							const [n, i, s] = await Promise.all([
								e.ggirResultsBundles.where(":id").equals(r).count(),
								e.markers.where("fileId").equals(r).filter((e) => e.username === o).count(),
								e.ggirScorerReviews.where("[fileId+scorer]").equals([r, o]).count()
							]);
							a() && (0 === n || 0 === i && 0 === s) && (x.getState().dismiss(t.id), Gi.dispatchEvent(new CustomEvent("updated", { detail: {
								fileId: r,
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
function ns(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
async function as(e, t, n = [], a, i, s) {
	const r = a ?? await Yi(e.imported, t, n, i);
	let l;
	i?.throwIfAborted();
	const u = s?.review;
	if (ns(u, s?.bundleRevision, r)) l = u.current;
	else if (r.length > 0 && e.ms2 && e.ms3) {
		const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), a = t(e.ms3), s = t(e.ms4), u = t(e.ms5), c = t(e.sleeplogRData);
		l = pe(await B(i, (t) => t.reviewGgirResults({
			part1: new Uint8Array(e.part1),
			configCsv: e.configCsv,
			recordingId: o(e.recordingFile),
			...n ? { ms2: n } : {},
			...a ? { ms3: a } : {},
			...s ? { ms4: s } : {},
			...u ? { ms5: u } : {},
			...c ? { sleeplogRData: c } : {},
			...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
			edits: r,
			...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
			...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
			crossCheck: !1
		})));
	}
	i?.throwIfAborted();
	const c = Object.getOwnPropertyDescriptors(e);
	return delete c.current, Reflect.deleteProperty(c, "edits"), Object.defineProperties({
		...l ? { current: l } : {},
		edits: r
	}, c);
}
const is = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], ss = [
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
], os = [
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
], ls = ["fileId", ...m], us = {
	files: [
		...is,
		"ggirTimezone",
		"recording",
		"ggirClockSteps",
		"sourceType",
		"sourceProfileId"
	],
	markers: ss,
	activityDays: rs,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: os,
	actiwareFileData: [
		"fileId",
		"actiwareIntervals",
		"actiwareStatistics"
	]
}, cs = {
	files: [...is, "ggirClockSteps"],
	markers: ss,
	activityDays: rs,
	ggirResultsBundles: os,
	ggirResultsBlobs: ls,
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
}, ds = {
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
}, ms = "Also export corrected values was off at export", ps = {
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
	sleep: us,
	nonwear: us,
	summary: us,
	wide: us,
	circadian: {
		files: is,
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
	ggirReport: cs,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: ss,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: [
			...is,
			"sourceType",
			"sourceProfileId"
		],
		markers: ss,
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
		files: is,
		markers: ss,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: ds,
	audit: ps,
	ggirResults: {
		...ds,
		...us,
		...cs,
		auditLog: ps.auditLog,
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
			E
		]
	}
}, fs = /* @__PURE__ */ new WeakMap(), hs = /* @__PURE__ */ new WeakMap();
function ws(e) {
	if (!e || "object" != typeof e) return e;
	const t = hs.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return function(e, t, n, a) {
			for (let i = 0; i < n.byteLength;) {
				const t = n.subarray(i, i + In), s = e.read(t, { at: a + i });
				if (!Number.isInteger(s) || s <= 0 || s > t.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
				i += s;
			}
		}(t.store, 0, e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(ws) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, ws(t)])) : structuredClone(e);
}
function _s(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(_s), Object.freeze(e)), e;
}
function ys(e) {
	return function(e) {
		const t = Object.freeze({ files: _s((e.files ?? []).map((e) => Object.fromEntries(is.map((t) => [t, ws(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
		return fs.set(t, e), t;
	}(e);
}
var vs = class extends Error {};
function Ms(e, t, n) {
	const a = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new vs(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (a(t), Reflect.get(e, t, n)),
		has: (e, t) => (a(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (a(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function bs(e, t, n = []) {
	const a = fs.get(e);
	if (!a) throw new vs("Export requires a captured input snapshot");
	const i = Object.entries(gs).find(([, e]) => e === t)?.[0];
	if (!i) throw new vs("Export producer has no registered input declaration");
	const s = {};
	for (const [r, o] of Object.entries(t)) {
		const e = a[r].filter((e) => !n.length || "studySettings" === r || n.includes("files" === r ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const a of o.filter((e) => e in t)) Object.defineProperty(n, a, {
				enumerable: !0,
				get: () => _s(ws(t[a]))
			});
			return Ms(n, o, `${i}: undeclared field ${r}.`);
		});
		Object.assign(s, { [r]: Object.freeze(e) });
	}
	return Ms(s, Object.keys(t), `${i}: undeclared table `);
}
function ks(e, t, n) {
	const a = /* @__PURE__ */ new Map();
	for (const i of e.markers) {
		if (i.fileId !== t || i.username !== n) continue;
		const e = oe(i), s = a.get(i.date) ?? [];
		s.push(e), a.set(i.date, s);
	}
	return a;
}
function Ss(e, t, n) {
	return new Map([...ks(e, t, n)].flatMap(([e, t]) => {
		const n = V(t.filter(p));
		return n ? [[e, n]] : [];
	}));
}
const Ts = /* @__PURE__ */ new WeakMap();
function Is(e, t, n, a) {
	let i = Ts.get(e);
	i || (i = /* @__PURE__ */ new Map(), Ts.set(e, i));
	const s = JSON.stringify([t, n]);
	let r = i.get(s);
	return r || (i.clear(), r = async function(e, t, n, a) {
		const i = bs(e, gs.ggirReport, [t]), s = i.files.find((e) => e.id === t), r = i.ggirResultsBundles.find((e) => e.fileId === t), o = r && g(r, i.ggirResultsBlobs.find((e) => e.fileId === t)), l = ks(i, t, n), u = o ? await Ji(t, o.imported, l, s.ggirClockSteps, a) : l, c = new Map([...u].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), d = new Set([...c].filter(([, e]) => "invalid" === ce(void 0, e).kind).map(([e]) => e)), m = {
			review: i.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n),
			bundleRevision: s.ggirBundleRevision
		}, p = o ? await as(o, c, s.ggirClockSteps, void 0, a, m) : void 0, f = p ? await xs(p, d, a) : void 0, h = i.ggirCorrectedValues.find((e) => e.fileId === t);
		return {
			markersByAlgo: u,
			selected: c,
			bundle: f,
			sets: o && p ? await Promise.all(_e(o, h, h?.notApplied !== ms).map(async ({ bundle: e }) => e === o ? f : xs(await as(e, c, s.ggirClockSteps, p.edits, a), d, a))) : [],
			invalidDates: d
		};
	}(e, t, n, a), i.set(s, r), r.catch(() => {
		i.get(s) === r && i.delete(s);
	})), r;
}
async function xs(e, t, n) {
	const { ggirCell: a, ggirNum: i } = await import("./ggir-results-types-WB8axvb-.js").then((e) => e.i), s = e.part2Reports?.["part2_daysummary.csv"], r = e.cleanedNightsCsv ? await G(n).readGgirReportCsv(e.cleanedNightsCsv, e.configCsv) : void 0, o = /* @__PURE__ */ new Map();
	if (s) for (let c = 0; c < s.rows; c++) {
		const e = a(s, y.ggir_id.header, c), t = Pn(a(s, y.ggir_calendar_date.header, c));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		o.set(n, o.has(n) ? null : c);
	}
	const l = Fn(e.imported, "nights"), u = async (e) => {
		const t = e.nights, u = await Promise.all(Array.from({ length: t.rows }, async (u, c) => {
			const d = a(t, y.ggir_id.header, c), m = o.get(JSON.stringify([null == d ? null : String(d), l(t, c, !1)])), p = s && null != m ? a(s, y.ggir_day_valid_hours.header, m) : null, g = s && null != m ? a(s, y.ggir_day_hours.header, m) : null, f = s && null != m ? i(s, y.ggir_day_valid_hours.header, m) : null, h = s && null != m ? i(s, y.ggir_day_hours.header, m) : null, w = null != f && null != h ? await G(n).ggirDayValidFraction(f, h) : null, _ = i(t, y.ggir_night.header, c), v = Array.from({ length: e.days.rows }, (e, t) => t).find((t) => "WW" === a(e.days, "window", t) && i(e.days, "night_number", t) === _), M = r ? Array.from({ length: r.rows }, (e, t) => t).find((e) => String(a(r, y.ggir_id.header, e)) === String(d) && i(r, y.ggir_night.header, e) === _) : void 0, b = {
				ggir_nonwear_perc_spt: e.nightRecomputed[c] ? void 0 === v ? null : a(e.days, y.ggir_nonwear_perc_spt.header, v) : t.columns.includes(y.ggir_nonwear_perc_spt.header) ? a(t, y.ggir_nonwear_perc_spt.header, c) : r?.columns.includes(y.ggir_nonwear_perc_spt.header) && void 0 !== M ? a(r, y.ggir_nonwear_perc_spt.header, M) : void 0 === v ? null : a(e.days, y.ggir_nonwear_perc_spt.header, v),
				ggir_day_valid_hours: p,
				ggir_day_hours: g,
				ggir_day_valid_fraction: w ?? null
			}, k = (s ? null === m ? "duplicate_part2_day" : void 0 === m ? "no_matching_part2_day" : null : "source_reported_missing") ?? "source_reported_missing";
			return {
				values: b,
				reasons: {
					ggir_day_valid_hours: null == f ? k : null,
					ggir_day_hours: null == h ? k : null,
					ggir_day_valid_fraction: null != w ? null : null != h && h <= 0 ? "not_applicable_to_row" : k
				}
			};
		})), c = T.ggir_review_night_extension, d = [.../* @__PURE__ */ new Set([
			...t.columns,
			...c.map((e) => y[e].header),
			...c.map((e) => y[e].header + "_missing_reason")
		])], m = d.map((e) => {
			const n = c.find((t) => y[t].header + "_missing_reason" === e);
			if (n) return u.map((e) => e.reasons[n] ?? null);
			const a = c.find((t) => y[t].header === e);
			return a ? u.map((e) => e.values[a] ?? null) : t.values[t.columns.indexOf(e)];
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
		...e.personReports && (e.edits.length > 0 || t.size > 0) ? { personRecomputed: await Un(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await u(e.imported),
		...e.current ? { current: await u(e.current) } : {}
	};
}
function As(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
async function Ns(n, a, i, { db: s, signal: o }) {
	o?.throwIfAborted();
	const l = n.files.filter((e) => a.includes(e.id)), u = l.map((e) => e.id), c = /* @__PURE__ */ new Map();
	let m = !1;
	try {
		const e = await function(e, { fileIds: t, dateRange: n, signal: a }) {
			const i = bs(e, gs.circadian, t);
			return async function(e, t, { dateRange: n, signal: a }) {
				const i = G(a), s = [];
				let o = 0;
				for (const l of e) {
					if (!l.id) continue;
					a?.throwIfAborted();
					const e = await t(l.id), u = [];
					for (const t of e.values()) {
						if (a?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
						o += 1;
						const e = Rt(l.id, t);
						e && u.push(e);
					}
					if (0 === u.length) continue;
					const { request: c, transfer: d } = Nt(u.map((e) => e.wire)), m = await i.computeCircadian(r(c, d));
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
			}(t.length > 0 ? i.files.filter((e) => null != e.id && t.includes(e.id)) : i.files, (e) => As(i, e), {
				dateRange: n,
				signal: a
			});
		}(n, {
			fileIds: u,
			dateRange: i.dateRange,
			signal: o
		});
		for (const t of e.daySummaries) c.set(`${t.fileId}|${t.date}`, {
			l5Hour: t.l5Hour,
			m10Hour: t.m10Hour
		});
	} catch (f) {
		if (f instanceof vs) throw f;
		if (o?.throwIfAborted(), m = !0, f instanceof DOMException && "AbortError" === f.name) throw f;
	}
	const p = await Rs(l[0].filename, "computing its sleep rows", () => async function(n, a, i, s, r, o, l) {
		const u = r && r.trim().length > 0 ? r.trim() : null, c = bs(o, gs.sleep, n), m = c.files, p = Lt(c.studySettings[0]?.extraSettings), g = Ce(c.studySettings[0]?.extraSettings?.analysis_paradigm), f = (n.length > 0 ? m.filter((e) => null != e.id && n.includes(e.id)) : [...m]).sort((e, t) => e.filename.localeCompare(t.filename)), [h, w] = i ?? ["", ""], _ = [], v = [], M = [], b = [], k = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), T = async () => {
			for (const [e, t] of k) S.set(e, await ti(e, t, _, l));
			k.clear();
		}, x = /* @__PURE__ */ new Map(), A = (e) => {
			const t = JSON.stringify(e);
			let n = x.get(t);
			return n || (n = G(l).exportNapAggregate(e), x.set(t, n)), n;
		}, N = await Promise.all(f.map((e) => Is(o, e.id, a, l)));
		for (const [E, $] of f.entries()) {
			if (l?.throwIfAborted(), E > 0 && f[E - 1].filename !== $.filename && await T(), !$.id) continue;
			const n = As(c, $.id), { bundle: a, markersByAlgo: r } = N[E], o = a?.edits ?? [], m = a ? he(a.imported) : [], { zone: S } = await Wt($, p, l), x = [.../* @__PURE__ */ new Set([...$.availableDates, ...m.map((e) => e.nightDate)])].sort(), R = i ? x.filter((e) => e >= h && e <= w) : x;
			if (a) {
				const e = new Set(fe(a.imported).map((e) => e.night));
				for (const t of m) {
					if (e.has(t.night) || !R.includes(t.nightDate)) continue;
					const n = ce(t, r.get(t.nightDate)?.[0]).kind;
					"scored" !== n && "invalid" !== n && M.push({
						file: "sleep_export.csv",
						row: 0,
						key: `${y.filename.header}=${$.filename}|${y.study_date.header}=${t.nightDate}`,
						column: `GGIR night ${String(t.night)}: ${ge(a.imported, t.night)}`,
						reason: "ggir_night_excluded"
					});
				}
			}
			const O = ee(n.values()), C = De($, g) ? c.actiwareFileData.find((e) => e.fileId === $.id) ?? null : null, D = C?.actiwareIntervals ?? null;
			for (const i of R) {
				l?.throwIfAborted();
				const c = r.get(i);
				if (c && 0 !== c.length) for (const r of c) {
					if (!r.isInvalidNight && 0 === r.sleepMarkers.length && 0 === r.nonwearMarkers.length) continue;
					const c = $.participantId ?? null, p = $.id, g = r.algorithm ?? null, f = r.username ?? null, h = r.needsConsensus, w = r.notes, M = n.get(i), T = await I(i, void 0, G(l)), x = n.get(T), N = {
						fileId: p,
						filename: $.filename,
						participantId: c,
						studyDate: i,
						algorithm: g,
						scoredBy: f,
						needsConsensus: h,
						notes: w,
						meanTemperature: null,
						meanWhiteLight: null,
						meanRedLight: null,
						meanGreenLight: null,
						meanBlueLight: null,
						detectionRule: r.detectionRule ?? null,
						periodGuider: r.periodGuider ?? null,
						...Ya(r.sleepPeriodDetectionConfig),
						algorithmVersion: r.algorithmVersion ?? null,
						verificationStatus: null,
						studyId: u,
						dstTransition: await ze(S, i, void 0, G(l))
					}, R = D ? Wa(D, i, r.isInvalidNight) : r.sleepMarkers, E = await A(R.filter((e) => e.markerType === d.NAP).map((e) => ({
						start: e.onsetTimestamp,
						end: e.offsetTimestamp
					}))), L = s?.get(`${String(p)}|${i}`), B = {
						l5Hour: L?.l5Hour ?? null,
						m10Hour: L?.m10Hour ?? null,
						napCount: E.napCount,
						totalNapMinutes: E.napCount > 0 ? E.totalNapMinutes : null
					}, P = r.nonwearMarkers.map((e) => ({
						start: e.startTimestamp,
						end: e.endTimestamp
					})), F = O(g), W = Ot(M, F), j = `${$.filename}\0${c ?? ""}\0${N.algorithm ?? ""}\0${N.detectionRule ?? ""}`, U = k.get(j) ?? [];
					U.push({
						date: i,
						epochLengthSeconds: $.epochLengthSeconds || 60,
						timestamps: W.timestamps,
						states: W.algorithmResults,
						stale: "stale" === F.status
					}), k.set(j, U);
					const z = M?.temperature ? new Float64Array(M.temperature) : null, H = Q(M).timestamps, V = x?.temperature ? new Float64Array(x.temperature) : null, q = Q(x).timestamps, K = await Yt(n, i, F, { signal: l }), J = async (e, t, n) => {
						if (!t || !n) return null;
						const a = (e) => e ? new Float64Array(e) : null;
						return qa([[a(M?.[e]), H], [a(x?.[e]), q]], t, n, l);
					}, Y = (e, t) => qa([[z, H], [V, q]], e, t, l), Z = async (n, s) => {
						let u = null;
						const c = m.find((e) => e.nightDate === i), p = a && c && n.markerType === d.MAIN_SLEEP && "invalid" !== ce(c, r).kind, g = c && o.some((e) => e.night === c.night), f = Za(null), h = {};
						let w = "not_applicable_to_row";
						const _ = D && null != n.onsetTimestamp && null != n.offsetTimestamp ? {
							onset: n.onsetTimestamp,
							offset: n.offsetTimestamp
						} : null, v = _ ? D.find((e) => "rest" === e.kind && e.startTimestamp <= _.onset && e.endTimestamp >= _.offset) ?? null : null;
						if (_) {
							w = "not_computed_for_export";
							const e = (e, t) => t ? C?.actiwareStatistics?.find((n) => n.kind === e && Math.round(n.startTimestamp) === Math.round(t.startTimestamp) && Math.round(n.endTimestamp) === Math.round(t.endTimestamp)) ?? null : null, t = {
								rest: e("rest", v),
								sleep: e("sleep", {
									startTimestamp: _.onset,
									endTimestamp: _.offset
								})
							};
							for (const [n, a, i, s] of Xa) {
								const e = t[a]?.[i] ?? null;
								f[n] = e, h[s] = null == e ? t[a] ? "source_reported_missing" : "not_computed_for_export" : void 0;
							}
						}
						if (!p && !_ && n.onsetTimestamp && n.offsetTimestamp) {
							const { timestamps: e, algorithmResults: t, activity: a, scoresStale: i } = K;
							if (null !== i && 0 === b.length && b.push({
								component: "metric_computation",
								code: "unavailable",
								message: i
							}), w = null !== i ? "scores_from_another_config" : null == t ? "no_scored_epochs" : null == a ? "channel_unavailable" : 0 === e.length ? "no_valid_epochs" : void 0, null != t && e.length > 0 && (null != a || Q(M).ggir)) {
								const i = Q(M).ggir ? Q(M).epochSec : $.epochLengthSeconds || 60, s = await ei(t, a, e, n.onsetTimestamp, n.offsetTimestamp, i, l);
								u = s.metrics, u || s.error || (w = "no_valid_epochs"), s.error && (w = "not_computed_for_export"), s.error && 0 === b.length && b.push({
									component: "metric_computation",
									code: "unavailable",
									message: "Metric computation failed for at least one selected period; those rows carry no numerics."
								});
							}
						}
						if (p) {
							w = "channel_unavailable";
							const n = g ? a.current?.nights : a.imported.nights, i = n ? t(n, y.ggir_night.header, c.night) : -1;
							for (const [t, a, s, r] of Qa) {
								const o = n ? e(n, y[a].header, i) : null;
								f[t] = null == o ? null : o * r, h[s] = null == o ? g ? "not_computed_for_export" : "source_reported_missing" : void 0;
							}
						}
						(p || _ || u && !("averageAwakeningLengthMinutes" in u)) && (h.average_awakening_length_minutes = "not_computed_for_export");
						const k = await G(l).exportPeriodFigures(n.onsetTimestamp, n.offsetTimestamp, P), S = Boolean(n.onsetTimestamp && n.offsetTimestamp), T = {
							...N,
							...B,
							periodIndex: n.markerIndex,
							markerType: n.markerType,
							onsetTimestamp: n.onsetTimestamp,
							offsetTimestamp: n.offsetTimestamp,
							...p || _ ? f : Za(u),
							inBedTimestamp: v?.startTimestamp ?? null,
							outOfBedTimestamp: v?.endTimestamp ?? null,
							metricMissingReason: w,
							isInvalidNight: s,
							meanTemperature: n.onsetTimestamp && n.offsetTimestamp ? await Y(n.onsetTimestamp, n.offsetTimestamp) : null,
							meanWhiteLight: await J("lux", n.onsetTimestamp, n.offsetTimestamp),
							meanRedLight: await J("redLight", n.onsetTimestamp, n.offsetTimestamp),
							meanGreenLight: await J("greenLight", n.onsetTimestamp, n.offsetTimestamp),
							meanBlueLight: await J("blueLight", n.onsetTimestamp, n.offsetTimestamp),
							sleepMidpointTimestamp: S ? k.midpointTimestamp : null,
							sleepMidpointHour: S ? k.midpointClockHour : null,
							validWearMinutes: k.validWearMinutes
						}, I = (e, t) => null != e ? void 0 : S ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
						return T.sensorMissingReasons = {
							mean_temperature_c: I(T.meanTemperature, Boolean(M?.temperature || x?.temperature)),
							mean_white_light_lux: I(T.meanWhiteLight, Boolean(M?.lux || x?.lux)),
							mean_red_light: I(T.meanRedLight, Boolean(M?.redLight || x?.redLight)),
							mean_green_light: I(T.meanGreenLight, Boolean(M?.greenLight || x?.greenLight)),
							mean_blue_light: I(T.meanBlueLight, Boolean(M?.blueLight || x?.blueLight))
						}, T.derivedMissingReasons = {
							...h,
							l5_hour: null == T.l5Hour ? L ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							m10_hour: null == T.m10Hour ? L ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							sleep_midpoint_time: null == T.sleepMidpointTimestamp ? S ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							sleep_midpoint_hour: null == T.sleepMidpointHour ? S ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							valid_wear_minutes: null == T.validWearMinutes ? S ? "no_valid_epochs" : "not_applicable_to_row" : void 0
						}, T;
					};
					if (r.isInvalidNight) {
						_.push({
							...N,
							...B,
							periodIndex: null,
							markerType: Ka,
							onsetTimestamp: null,
							offsetTimestamp: null,
							...Za(null),
							isInvalidNight: !0,
							sleepMidpointTimestamp: null,
							sleepMidpointHour: null,
							validWearMinutes: null
						});
						for (const e of R) _.push(await Z(e, !0));
					} else for (const e of R) _.push(await Z(e, !1));
					for (const e of r.nonwearMarkers) v.push({
						...N,
						...B,
						periodIndex: e.markerIndex ?? 0,
						markerType: Ja,
						onsetTimestamp: e.startTimestamp,
						offsetTimestamp: e.endTimestamp,
						...Za(null),
						isInvalidNight: !1,
						sleepMidpointTimestamp: null,
						sleepMidpointHour: null,
						validWearMinutes: null
					});
				}
			}
		}
		await T(), _.sort(ni), v.sort(ni);
		const R = await async function(e, t) {
			const n = e.filter((e) => e.markerType === d.MAIN_SLEEP), a = /* @__PURE__ */ new Map();
			for (const o of n) {
				const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = a.get(e);
				t ? t.push(o) : a.set(e, [o]);
			}
			const i = [...a], s = await G(t).summarizeExportGroups(i.map(([, e]) => e.map((e) => ({
				study_date: e.studyDate,
				total_nap_minutes: e.totalNapMinutes,
				values: ai.map(([, t]) => e[t])
			})))), r = i.map(([e, t], n) => {
				const [a, i, r, o] = e.split("\0"), l = s[n], u = Object.fromEntries(ai.map(([e], t) => [e, l.means[t] ?? null]));
				return {
					filename: a,
					participantId: i,
					algorithm: r,
					detectionRule: o,
					nNights: l.nNights,
					...u,
					meanTemperatureMissingReason: null == u.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
					metricMissingReasons: Object.fromEntries(ai.map(([e, n]) => {
						const a = ii[e], i = Qa.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : a), s = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[i] ?? e.metricMissingReason).find(Boolean);
						return [a, null == u[e] ? s : void 0];
					})),
					sleepRegularityIndex: null,
					meanTotalNapMinutes: l.meanTotalNapMinutes,
					studyId: t[0]?.studyId ?? null
				};
			});
			return r.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), r;
		}(_, l);
		for (const e of R) {
			const t = `${e.filename}\0${e.participantId}\0${e.algorithm}\0${e.detectionRule}`, n = S.get(t);
			e.sleepRegularityIndex = n?.sri ?? null, e.sleepRegularityMissingReason = n?.sriMissingReason ?? (n ? void 0 : "not_computed_for_export");
		}
		return {
			sleepRows: _,
			nonwearRows: v,
			summaryRows: R,
			degradations: b,
			nightReasons: M
		};
	}(u, i.username, i.dateRange, c, i.studyId, n, o)), g = await Rs(l[0].filename, "drawing its visual report", async () => {
		const e = [];
		for (const t of l) e.push(await oa({
			...i,
			snapshot: n
		}, t, o));
		return e;
	});
	return {
		part: p,
		physicalActivityRows: await Wi(u, i.dateRange, {
			username: i.username,
			cutpointOverrides: i.physicalActivity.cutpointOverrides,
			maskPolicy: i.physicalActivity.maskPolicy,
			choiAxis: i.physicalActivity.choiAxis,
			exportedAt: i.exportedAt,
			...o ? { signal: o } : {}
		}, s),
		eventMarkerRows: await ri(u, i.dateRange, n, i.username, o),
		circadianDegraded: m,
		reports: g
	};
}
async function Rs(e, t, n) {
	try {
		return await n();
	} catch (a) {
		if (a instanceof DOMException && "AbortError" === a.name) throw a;
		throw new Sn(e, t, a);
	}
}
let Es;
i({
	async group(e, t, n, a) {
		Es ??= new f(e);
		try {
			return { result: await Ns(ys(n), t, a, { db: Es }) };
		} catch (i) {
			if (i instanceof Sn) return { failure: i.wire };
			throw i;
		}
	},
	deflate(e, t) {
		const n = function(e, t) {
			if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
			const n = [], a = new It(t?.byteLength ? {
				level: 1,
				dictionary: t
			} : { level: 1 }, (e) => {
				n.push(e);
			});
			a.push(e, !1), a.flush(!1);
			const i = a.s.r ?? 0;
			if (!Number.isInteger(i) || i < 0 || i > 2047) throw new Error("ZIP compression state is unreadable.");
			const s = (7 & i) > 5 ? 2 : 1, r = new Uint8Array(s + 4);
			return r[0] = i >> 3, r[s + 2] = 255, r[s + 3] = 255, n.push(r), ae(n);
		}(e, t);
		return r(n, [n.buffer]);
	}
});
export { Na as A, Nt as B, Va as C, ma as D, ba as E, Zt as F, Vt as I, qt as L, Aa as M, xa as N, Ra as O, la as P, Wt as R, Ga as S, ka as T, Rt as V, Ua as _, ki as a, Wa as b, wi as c, pi as d, fi as f, $a as g, di as h, Mi as i, wa as j, da as k, gi as l, oi as m, Xi as n, _i as o, ui as p, Ci as r, yi as s, ji as t, mi as u, Ha as v, Sa as w, ja as x, za as y, Bt as z };
