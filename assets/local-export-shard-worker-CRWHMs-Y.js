import { Bt as e, Ht as t, On as n, Qt as i, Tn as r, Ut as s, Vt as a, a as o, h as l, jt as c, l as u } from "./schema-B0CR2EpS.js";
import { a as d, r as m, s as p } from "./workers-D4og5Jak.js";
import { A as g, G as f, H as h, K as _, W as w, it as v, p as y, t as b } from "./workspace-db-CwhwLMaR.js";
import "./content-hash-SuSXU120.js";
import { a as k, d as T, g as M, l as I, n as S, t as A } from "./background-jobs-BvDFFUGv.js";
import { A as x, D as R, E as N, O as $, j as E, k as O, p as C, v as D } from "./nonwear-display-slots-3gROIlhe.js";
import { a as j } from "./project-revision-D6MjEMMu.js";
import { A as F, F as L, Gt as P, K as B, Kt as W, Ot as z, S as G, Vt as H, Xt as U, Zt as V, rn as K } from "./store-DvfXJTpe.js";
import { H as q, N as J, m as Z, u as Y } from "./night-session-registry-pVArsQh2.js";
import { d as Q, l as X, p as ee } from "./sleep-period-detection-BnH8xZoy.js";
import { _ as te, c as ne, d as ie, f as re, i as se, l as ae, r as oe } from "./ggir-results-import-DD2olz8s.js";
import { B as le, E as ce, I as ue, L as de, N as me, R as pe, c as ge } from "./local-nonwear-unified-DPuDqwyk.js";
import { _ as fe, d as he, i as _e, m as we, n as ve, o as ye, p as be, r as ke, x as Te } from "./valid-day-criteria-CIJnTk0q.js";
import { h as Me, m as Ie, v as Se } from "./diary-local-import-contract-tz7cH6WX.js";
import { n as Ae, r as xe, t as Re } from "./ggir-results-types-Ce913aBc.js";
var Ne = Uint8Array, $e = Uint16Array, Ee = Int32Array, Oe = new Ne([
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
]), Ce = new Ne([
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
]), De = new Ne([
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
]), je = function(e, t) {
	for (var n = new $e(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
	var r = new Ee(n[30]);
	for (i = 1; i < 30; ++i) for (var s = n[i]; s < n[i + 1]; ++s) r[s] = s - n[i] << 5 | i;
	return {
		b: n,
		r
	};
}, Fe = je(Oe, 2), Le = Fe.b, Pe = Fe.r;
Le[28] = 258, Pe[258] = 28;
for (var Be = je(Ce, 0), We = (Be.b, Be.r), ze = new $e(32768), Ge = 0; Ge < 32768; ++Ge) {
	var He = (43690 & Ge) >> 1 | (21845 & Ge) << 1;
	He = (61680 & (He = (52428 & He) >> 2 | (13107 & He) << 2)) >> 4 | (3855 & He) << 4, ze[Ge] = ((65280 & He) >> 8 | (255 & He) << 8) >> 1;
}
var Ue = function(e, t, n) {
	for (var i = e.length, r = 0, s = new $e(t); r < i; ++r) e[r] && ++s[e[r] - 1];
	var a, o = new $e(t);
	for (r = 1; r < t; ++r) o[r] = o[r - 1] + s[r - 1] << 1;
	if (n) {
		a = new $e(1 << t);
		var l = 15 - t;
		for (r = 0; r < i; ++r) if (e[r]) for (var c = r << 4 | e[r], u = t - e[r], d = o[e[r] - 1]++ << u, m = d | (1 << u) - 1; d <= m; ++d) a[ze[d] >> l] = c;
	} else for (a = new $e(i), r = 0; r < i; ++r) e[r] && (a[r] = ze[o[e[r] - 1]++] >> 15 - e[r]);
	return a;
}, Ve = new Ne(288);
for (Ge = 0; Ge < 144; ++Ge) Ve[Ge] = 8;
for (Ge = 144; Ge < 256; ++Ge) Ve[Ge] = 9;
for (Ge = 256; Ge < 280; ++Ge) Ve[Ge] = 7;
for (Ge = 280; Ge < 288; ++Ge) Ve[Ge] = 8;
var Ke = new Ne(32);
for (Ge = 0; Ge < 32; ++Ge) Ke[Ge] = 5;
var qe = Ue(Ve, 9, 0), Je = Ue(Ke, 5, 0), Ze = function(e) {
	return (e + 7) / 8 | 0;
}, Ye = [
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
], Qe = function(e, t, n) {
	var i = new Error(t || Ye[e]);
	if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, Qe), !n) throw i;
	return i;
}, Xe = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8;
}, et = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, tt = function(e, t) {
	for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
		s: i,
		f: e[i]
	});
	var r = n.length, s = n.slice();
	if (!r) return {
		t: lt,
		l: 0
	};
	if (1 == r) {
		var a = new Ne(n[0].s + 1);
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
	}; u != r - 1;) o = n[n[c].f < n[d].f ? c++ : d++], l = n[c != u && n[c].f < n[d].f ? c++ : d++], n[u++] = {
		s: -1,
		f: o.f + l.f,
		l: o,
		r: l
	};
	var m = s[0].s;
	for (i = 1; i < r; ++i) s[i].s > m && (m = s[i].s);
	var p = new $e(m + 1), g = nt(n[u - 1], p, 0);
	if (g > t) {
		i = 0;
		var f = 0, h = g - t, _ = 1 << h;
		for (s.sort(function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		}); i < r; ++i) {
			var w = s[i].s;
			if (!(p[w] > t)) break;
			f += _ - (1 << g - p[w]), p[w] = t;
		}
		for (f >>= h; f > 0;) {
			var v = s[i].s;
			p[v] < t ? f -= 1 << t - p[v]++ - 1 : ++i;
		}
		for (; i >= 0 && f; --i) {
			var y = s[i].s;
			p[y] == t && (--p[y], ++f);
		}
		g = t;
	}
	return {
		t: new Ne(p),
		l: g
	};
}, nt = function(e, t, n) {
	return -1 == e.s ? Math.max(nt(e.l, t, n + 1), nt(e.r, t, n + 1)) : t[e.s] = n;
}, it = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new $e(++t), i = 0, r = e[0], s = 1, a = function(e) {
		n[i++] = e;
	}, o = 1; o <= t; ++o) if (e[o] == r && o != t) ++s;
	else {
		if (!r && s > 2) {
			for (; s > 138; s -= 138) a(32754);
			s > 2 && (a(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0);
		} else if (s > 3) {
			for (a(r), --s; s > 6; s -= 6) a(8304);
			s > 2 && (a(s - 3 << 5 | 8208), s = 0);
		}
		for (; s--;) a(r);
		s = 1, r = e[o];
	}
	return {
		c: n.subarray(0, i),
		n: t
	};
}, rt = function(e, t) {
	for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
	return n;
}, st = function(e, t, n) {
	var i = n.length, r = Ze(t + 2);
	e[r] = 255 & i, e[r + 1] = i >> 8, e[r + 2] = 255 ^ e[r], e[r + 3] = 255 ^ e[r + 1];
	for (var s = 0; s < i; ++s) e[r + s + 4] = n[s];
	return 8 * (r + 4 + i);
}, at = function(e, t, n, i, r, s, a, o, l, c, u) {
	Xe(t, u++, n), ++r[256];
	for (var d = tt(r, 15), m = d.t, p = d.l, g = tt(s, 15), f = g.t, h = g.l, _ = it(m), w = _.c, v = _.n, y = it(f), b = y.c, k = y.n, T = new $e(19), M = 0; M < w.length; ++M) ++T[31 & w[M]];
	for (M = 0; M < b.length; ++M) ++T[31 & b[M]];
	for (var I = tt(T, 7), S = I.t, A = I.l, x = 19; x > 4 && !S[De[x - 1]]; --x);
	var R, N, $, E, O = c + 5 << 3, C = rt(r, Ve) + rt(s, Ke) + a, D = rt(r, m) + rt(s, f) + a + 14 + 3 * x + rt(T, S) + 2 * T[16] + 3 * T[17] + 7 * T[18];
	if (l >= 0 && O <= C && O <= D) return st(t, u, e.subarray(l, l + c));
	if (Xe(t, u, 1 + (D < C)), u += 2, D < C) {
		R = Ue(m, p, 0), N = m, $ = Ue(f, h, 0), E = f;
		var j = Ue(S, A, 0);
		for (Xe(t, u, v - 257), Xe(t, u + 5, k - 1), Xe(t, u + 10, x - 4), u += 14, M = 0; M < x; ++M) Xe(t, u + 3 * M, S[De[M]]);
		u += 3 * x;
		for (var F = [w, b], L = 0; L < 2; ++L) {
			var P = F[L];
			for (M = 0; M < P.length; ++M) {
				var B = 31 & P[M];
				Xe(t, u, j[B]), u += S[B], B > 15 && (Xe(t, u, P[M] >> 5 & 127), u += P[M] >> 12);
			}
		}
	} else R = qe, N = Ve, $ = Je, E = Ke;
	for (M = 0; M < o; ++M) {
		var W = i[M];
		if (W > 255) {
			et(t, u, R[257 + (B = W >> 18 & 31)]), u += N[B + 257], B > 7 && (Xe(t, u, W >> 23 & 31), u += Oe[B]);
			var z = 31 & W;
			et(t, u, $[z]), u += E[z], z > 3 && (et(t, u, W >> 5 & 8191), u += Ce[z]);
		} else et(t, u, R[W]), u += N[W];
	}
	return et(t, u, R[256]), u + N[256];
}, ot = new Ee([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), lt = new Ne(0), ct = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new Ne(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, i, r) {
			if (!r && (r = { l: 1 }, t.dictionary)) {
				var s = t.dictionary.subarray(-32768), a = new Ne(s.length + e.length);
				a.set(s), a.set(e, s.length), e = a, r.w = s.length;
			}
			return function(e, t, n, i, r, s) {
				var a = s.z || e.length, o = new Ne(i + a + 5 * (1 + Math.ceil(a / 7e3)) + r), l = o.subarray(i, o.length - r), c = s.l, u = 7 & (s.r || 0);
				if (t) {
					u && (l[0] = s.r >> 3);
					for (var d = ot[t - 1], m = d >> 13, p = 8191 & d, g = (1 << n) - 1, f = s.p || new $e(32768), h = s.h || new $e(g + 1), _ = Math.ceil(n / 3), w = 2 * _, v = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, y = new Ee(25e3), b = new $e(288), k = new $e(32), T = 0, M = 0, I = s.i || 0, S = 0, A = s.w || 0, x = 0; I + 2 < a; ++I) {
						var R = v(I), N = 32767 & I, $ = h[R];
						if (f[N] = $, h[R] = N, A <= I) {
							var E = a - I;
							if ((T > 7e3 || S > 24576) && (E > 423 || !c)) {
								u = at(e, l, 0, y, b, k, M, S, x, I - x, u), S = T = M = 0, x = I;
								for (var O = 0; O < 286; ++O) b[O] = 0;
								for (O = 0; O < 30; ++O) k[O] = 0;
							}
							var C = 2, D = 0, j = p, F = N - $ & 32767;
							if (E > 2 && R == v(I - F)) for (var L = Math.min(m, E) - 1, P = Math.min(32767, I), B = Math.min(258, E); F <= P && --j && N != $;) {
								if (e[I + C] == e[I + C - F]) {
									for (var W = 0; W < B && e[I + W] == e[I + W - F]; ++W);
									if (W > C) {
										if (C = W, D = F, W > L) break;
										var z = Math.min(F, W - 2), G = 0;
										for (O = 0; O < z; ++O) {
											var H = I - F + O & 32767, U = H - f[H] & 32767;
											U > G && (G = U, $ = H);
										}
									}
								}
								F += (N = $) - ($ = f[N]) & 32767;
							}
							if (D) {
								y[S++] = 268435456 | Pe[C] << 18 | We[D];
								var V = 31 & Pe[C], K = 31 & We[D];
								M += Oe[V] + Ce[K], ++b[257 + V], ++k[K], A = I + C, ++T;
							} else y[S++] = e[I], ++b[e[I]];
						}
					}
					for (I = Math.max(I, A); I < a; ++I) y[S++] = e[I], ++b[e[I]];
					u = at(e, l, c, y, b, k, M, S, x, I - x, u), c || (s.r = 7 & u | l[u / 8 | 0] << 3, u -= 7, s.h = h, s.p = f, s.i = I, s.w = A);
				} else {
					for (I = s.w || 0; I < a + c; I += 65535) {
						var q = I + 65535;
						q >= a && (l[u / 8 | 0] = c, q = a), u = st(l, u + 1, e.subarray(I, q));
					}
					s.i = a;
				}
				return function(e, t, n) {
					return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new Ne(e.subarray(t, n));
				}(o, 0, i + Ze(u) + r);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? r.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, 0, 0, r);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || Qe(5), this.s.l && Qe(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var i = new Ne(-32768 & n);
				i.set(this.b.subarray(0, this.s.z)), this.b = i;
			}
			var r = this.b.length - this.s.z;
			this.b.set(e.subarray(0, r), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(r), 32768), this.s.z = e.length - r + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = lt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || Qe(5), this.s.l && Qe(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new Ne(6);
			t[0] = this.s.r >> 3;
			var n = st(t, this.s.r, lt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), ut = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	ut.decode(lt, { stream: !0 });
} catch (Hr) {}
function dt(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function mt(e) {
	const t = [
		"timestamps",
		"activity",
		"sleep_scores"
	].flatMap((t) => {
		const n = new Uint32Array(e.length + 1);
		for (const [a, o] of e.entries()) n[a + 1] = n[a] + (o[t]?.length ?? 0);
		const i = "sleep_scores" === t ? Uint8Array : Float64Array, r = e[0]?.[t], s = 1 === e.length && r instanceof i ? r : new i(n[e.length]);
		if (s !== r) for (const [a, o] of e.entries()) s.set(o[t] ?? [], n[a]);
		return [s, n];
	});
	return {
		request: [JSON.stringify({ days: e.map(({ timestamps: e, activity: t, sleep_scores: n, ...i }) => i) }), ...t],
		transfer: t.filter((t) => !e.some((e) => t === e.timestamps || t === e.activity)).map((e) => e.buffer)
	};
}
function pt(e, t) {
	const n = function(e) {
		const t = dt(e.ggirTimestamps), n = dt(e.ggirEnmo);
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
	const { timestamps: i, signal: r } = n, s = i[1] - i[0];
	if (!(s > 0 && Number.isInteger(s))) return null;
	for (let a = 1; a < i.length; a++) if (i[a] - i[a - 1] !== s) return null;
	return {
		wire: {
			id: `${String(e)}:${t.date}`,
			series_id: String(e),
			analysis_date: t.date,
			epoch_length_seconds: s,
			timestamps: i,
			activity: r
		},
		source: n.source
	};
}
async function gt(e, t, n, i, r = 60, s, a) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == i || n >= i) return null;
	const o = new Uint8Array(e.length);
	for (let c = 0; c < e.length; c++) o[c] = 1 === e[c] ? 1 : 0;
	const l = await ft(o, s && s.length === e.length ? s : new Float64Array(e.length), t, n, i, r, a);
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
async function ft(e, t, n, i, r, s = 60, a) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == i || null == r || i >= r) return null;
	const o = await async function(e, t, n, i) {
		const r = await A(i).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === r.length ? {
			startIdx: r[0],
			endIdx: r[1]
		} : null;
	}(n, i, r, a);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, c = o.endIdx + 1, u = e instanceof Uint8Array ? e.slice(l, c) : new Uint8Array(e.slice(l, c)), d = t instanceof Float64Array ? t.slice(l, c) : Float64Array.from(t.slice(l, c)), m = await A(a).computeSleepMetrics(u, d, s), p = n[l] ?? 0, g = n[c - 1] ?? p, f = null != m.firstSleepEpochIdx ? n[l + m.firstSleepEpochIdx] ?? p : p, h = null != m.lastSleepEpochIdx ? n[l + m.lastSleepEpochIdx] ?? g : g;
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
function ht(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const i = H(e), r = Array.from(i.timestamps);
	if (i.ggir) return {
		timestamps: r,
		algorithmResults: i.sleepScores,
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
		timestamps: r,
		algorithmResults: null,
		activity: a,
		scoresStale: n
	};
	const l = D(e, t);
	return {
		timestamps: r,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: a,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
const _t = /* @__PURE__ */ new Map();
async function wt(e, t) {
	if (_t.has(e)) return _t.get(e);
	try {
		const n = await A(t).resolveTimezone(e);
		return _t.set(e, n), n;
	} catch (Qe) {
		t?.throwIfAborted(), console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, Qe);
		return;
	}
}
function vt(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : Ie();
}
async function yt(e) {
	try {
		return vt((await L(e))?.extraSettings);
	} catch (Qe) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", Qe), Ie();
	}
}
function bt(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const kt = {
	zone: null,
	reason: null
};
async function Tt(e, t, n) {
	const i = e.ggirTimezone?.trim();
	let r = null;
	if (i) {
		const e = await wt(i, n);
		if (!e) return kt;
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
	if (null === r) return ee(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : kt;
	const s = await wt(t, n);
	if (void 0 === s) return kt;
	if ("iana" !== s?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const a = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== a && (await Se(s.zone, a, A(n))).includes(r) ? {
		zone: s.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${bt(r)} is not a ${s.zone} offset`
	};
}
function Mt(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [i, r] of e.entries()) t[i + 1] = t[i] + r.length;
	const n = new Float64Array(t[e.length]);
	for (const [i, r] of e.entries()) n.set(r, t[i]);
	return [n, t];
}
const It = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), St = [
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
var At = St.map(() => It);
Object.fromEntries(St.map(([e], t) => [e, At[t]]));
const xt = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values(g).filter((e) => ![
		g.choi_2012,
		g.choi_2011,
		g.van_hees_2023,
		g.detach_nonwear
	].some((t) => t === e))
];
async function Rt(e, t, n, i) {
	const r = void 0 === t ? n?.window[e] : 48 === t ? n?.view48[e] : void 0;
	if (r) return {
		start: r[0],
		end: r[1]
	};
	const s = await (i ?? m()).analysisWindowBounds(e, t);
	return s ? {
		start: s[0],
		end: s[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function Nt(e, t, n) {
	const i = e instanceof Float64Array ? e : Float64Array.from(e), [r, s] = await (n ?? m()).analysisWindowSlice(i, t);
	return {
		startIndex: r,
		endIndex: s
	};
}
async function $t(e, t = m()) {
	const n = [...new Set(e)], i = await t.analysisDatesOf(Float64Array.from(n)), r = new Map(n.map((e, t) => [e, i[t] ?? ""]));
	return (e) => r.get(e) ?? "";
}
Object.fromEntries(Object.values(g).map((e) => [e, e === g.ggir_saved ? X : me(e)]));
var Et = n({
	nightPeriodMetrics: () => Dt,
	spanningSeries: () => Ct,
	storeNightPeriodMetrics: () => jt
});
function Ot(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [i, r] of Object.entries(ge(e, e.nonwearChoiAxis ?? ce()))) r && (n[t[i] ?? i] = new Uint8Array(r));
	return n;
}
async function Ct(e, t, n, i = {}) {
	const { signal: r, includeNonwearMasks: s = !1 } = i, a = e.get(t), o = ht(a, n), l = s && a ? Ot(a) : {}, c = e.get(i.nextDate ?? await C(t, void 0, A(r))), u = o.timestamps[o.timestamps.length - 1], d = c ? ht(c, n) : null, m = d?.timestamps[0], p = void 0 !== c && null !== d && void 0 !== u && void 0 !== m && m > u, g = o.scoresStale ?? d?.scoresStale ?? null;
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
	const f = o.timestamps.length, h = f + d.timestamps.length, _ = o.algorithmResults.length >= f && d.algorithmResults && d.algorithmResults.length >= d.timestamps.length ? new Uint8Array(h) : null;
	_?.set(o.algorithmResults.subarray(0, f)), d.algorithmResults && _?.set(d.algorithmResults.subarray(0, h - f), f);
	const w = o.activity && d.activity ? new Float64Array(h) : null;
	o.activity && w?.set(o.activity.subarray(0, f)), d.activity && w?.set(d.activity.subarray(0, h - f), f);
	const v = s ? Ot(c) : {}, y = {};
	for (const b of xt) {
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
async function Dt(e, t, n, i) {
	const { date: r, file: s, activityMap: a, verdict: o } = t, l = t.spanning ?? await Ct(a, r, o, { signal: i });
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
	const { timestamps: u, algorithmResults: d } = l, m = [];
	for (const p of e.sleepMarkers) m.push(d && u.length > 0 && p.onsetTimestamp && p.offsetTimestamp ? await ft(d, l.activity ?? new Float64Array(d.length), l.timestamps, p.onsetTimestamp, p.offsetTimestamp, s.epochLengthSeconds || 60, i) : null);
	if (void 0 !== e.id) try {
		await j(n, [n.markers], () => Z(e.id, {
			inputs: c,
			metrics: m
		}, n), i);
	} catch {
		i?.throwIfAborted();
	}
	return m;
}
async function jt(e, t, n, i) {
	const r = await n.files.get(e.fileId);
	if (!r) return;
	const s = /* @__PURE__ */ new Map();
	for (const a of [e.date, await C(e.date, void 0, A(i))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, a]).first();
		t && s.set(a, t);
	}
	await Dt(e, {
		date: e.date,
		file: r,
		activityMap: s,
		verdict: t
	}, n, i);
}
const Ft = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], Lt = ["under-series", "over-series"], Pt = ["full-resolution-v1", "min-max-gap-envelope-v1"], Bt = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function Wt(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function zt(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? Wt(t, "expected an object") : e;
}
function Gt(e, t) {
	return Array.isArray(e) ? e : Wt(t, "expected an array");
}
function Ht(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : Wt(t, "expected a finite number");
}
function Ut(e, t) {
	const n = Ht(e, t);
	return n <= 0 ? Wt(t, "expected a positive number") : n;
}
function Vt(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : Wt(t, "expected a safe integer");
}
function Kt(e, t) {
	const n = Vt(e, t);
	return n < 0 ? Wt(t, "expected a non-negative safe integer") : n;
}
function qt(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? Wt(t, "expected a boolean") : { [n]: e };
}
function Jt(e, t) {
	return "string" != typeof e || 0 === e.length ? Wt(t, "expected a non-empty string") : e;
}
function Zt(e, t) {
	return "string" == typeof e && Ft.includes(e) ? e : Wt(t, "expected a supported tone");
}
function Yt(e, t) {
	return "string" == typeof e && Lt.includes(e) ? e : Wt(t, "expected a supported phase");
}
function Qt(e, t) {
	const n = zt(e, t), i = Ht(n.min, `${t}.min`), r = Ht(n.max, `${t}.max`);
	return r <= i || !Number.isFinite(r - i) ? Wt(t, "expected a finite ascending range") : {
		min: i,
		max: r
	};
}
function Xt(e, t) {
	const n = `series[${t}]`, i = zt(e, n), r = Gt(i.points, `${n}.points`);
	let s = Number.NEGATIVE_INFINITY;
	const a = (e) => `${n}.points[${e}]`, o = r.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return Wt(a(t), "expected an object");
		const n = e, i = n.timestamp;
		if ("number" != typeof i || !Number.isFinite(i)) return Wt(`${a(t)}.timestamp`, "expected a finite number");
		if (i <= s) return Wt(`${a(t)}.timestamp`, "expected strictly ascending timestamps");
		s = i;
		const r = n.value;
		return null === r || "number" == typeof r && Number.isFinite(r) ? {
			timestamp: i,
			value: r
		} : Wt(`${a(t)}.value`, "expected a finite number");
	});
	return {
		tone: Zt(i.tone, `${n}.tone`),
		strokeWidth: Ut(i.strokeWidth, `${n}.strokeWidth`),
		valueDomain: Qt(i.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function en(e, t) {
	const n = `overlays[${t}]`, i = zt(e, n), r = {
		phase: Yt(i.phase, `${n}.phase`),
		order: Vt(i.order, `${n}.order`),
		tone: Zt(i.tone, `${n}.tone`)
	};
	if ("interval" === i.kind) {
		const e = Ht(i.startTimestamp, `${n}.startTimestamp`), t = Ht(i.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? Wt(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...r,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === i.kind ? {
		kind: "threshold",
		...r,
		value: Ht(i.value, `${n}.value`),
		...qt(i.draggable, `${n}.draggable`, "draggable"),
		...qt(i.selected, `${n}.selected`, "selected"),
		...qt(i.handle, `${n}.handle`, "handle"),
		...void 0 === i.label ? {} : { label: Jt(i.label, `${n}.label`) }
	} : "instant" === i.kind ? {
		kind: "instant",
		...r,
		timestamp: Ht(i.timestamp, `${n}.timestamp`)
	} : Wt(`${n}.kind`, "expected interval, threshold, or instant");
}
function tn(e, t, n) {
	const i = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(i) ? i : Wt("projection", "expected a finite pixel coordinate");
}
function nn(e, t, n) {
	const i = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(i) ? i : Wt("projection", "expected a finite pixel coordinate");
}
function rn(e) {
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
function sn(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function an(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, i = t.plotArea.height, r = Bt[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const s = sn(tn(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), a = sn(tn(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${rn(s)}" y="0" width="${rn(Math.max(1, a - s))}" height="${rn(i)}" fill="${r}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const s = nn(e.value, t.valueDomain, i), a = !0 === e.selected, o = a ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${a ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${rn(s)}" x2="${rn(n)}" y2="${rn(s)}" stroke="${r}" stroke-width="${a ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const s = tn(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${rn(s)}" y1="0" x2="${rn(s)}" y2="${rn(i)}" stroke="${r}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function on(e) {
	const t = function(e) {
		const t = zt(e, "scene");
		if (2 !== t.version) return Wt("version", "expected 2");
		const n = zt(t.grid, "grid"), i = {
			strategy: (r = n.strategy, "string" == typeof r && Pt.includes(r) ? r : Wt("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: Kt(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: Kt(n.renderedPointCount, "grid.renderedPointCount")
		};
		var r;
		if (i.renderedPointCount > i.sourcePointCount) return Wt("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === i.strategy && i.renderedPointCount !== i.sourcePointCount) return Wt("grid", "full-resolution strategy requires equal point counts");
		const s = zt(t.size, "size"), a = {
			width: Ut(s.width, "size.width"),
			height: Ut(s.height, "size.height")
		}, o = zt(t.plotArea, "plotArea"), l = {
			left: Ht(o.left, "plotArea.left"),
			top: Ht(o.top, "plotArea.top"),
			width: Ut(o.width, "plotArea.width"),
			height: Ut(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > a.width || l.top + l.height > a.height) return Wt("plotArea", "expected bounds contained by size");
		const c = Qt(t.viewport, "viewport"), u = Qt(t.valueDomain, "valueDomain"), d = Gt(t.series, "series").map(Xt);
		if (0 === d.length && 0 !== i.renderedPointCount) return Wt("grid.renderedPointCount", "expected zero when series is empty");
		const m = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let h = 0; h < d.length; h++) {
			const e = d[h]?.points ?? [];
			if (e.length !== i.renderedPointCount) return Wt(`series[${h}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return Wt(`series[${h}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const p = Gt(t.overlays, "overlays").map(en), g = null === t.cursorTimestamp ? null : Ht(t.cursorTimestamp, "cursorTimestamp");
		let f = null;
		if (null !== t.selection) {
			const e = zt(t.selection, "selection"), n = Ht(e.startTimestamp, "selection.startTimestamp"), i = Ht(e.endTimestamp, "selection.endTimestamp");
			if (i <= n) return Wt("selection", "expected a half-open ascending interval");
			f = {
				startTimestamp: n,
				endTimestamp: i
			};
		}
		return {
			version: 2,
			grid: i,
			size: a,
			plotArea: l,
			viewport: c,
			valueDomain: u,
			series: d,
			overlays: p,
			cursorTimestamp: g,
			selection: f
		};
	}(e), n = rn(t.size.width), i = rn(t.size.height), r = rn(t.plotArea.width), s = rn(t.plotArea.height), a = an(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
		let i = "", r = !1;
		const s = {
			left: 0,
			width: n.plotArea.width
		}, a = /* @__PURE__ */ new Map();
		for (const o of e.points) {
			if (null == o.value) {
				r = !1;
				continue;
			}
			const t = tn(o.timestamp, n.viewport, s);
			let l = a.get(o.value);
			void 0 === l && (l = rn(nn(o.value, e.valueDomain, n.plotArea.height)), a.set(o.value, l)), i += `${r ? "L" : "M"}${rn(t)} ${l}`, r = !0;
		}
		return 0 === i.length ? "" : `<path data-series-index="${t}" d="${i}" fill="none" stroke="${Bt[e.tone]}" stroke-width="${rn(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = an(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${i}" viewBox="0 0 ${n} ${i}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${i}" fill="#ffffff"/><svg x="${rn(t.plotArea.left)}" y="${rn(t.plotArea.top)}" width="${r}" height="${s}" viewBox="0 0 ${r} ${s}" overflow="hidden"><rect x="0" y="0" width="${r}" height="${s}" fill="#ffffff"/>${a}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = sn(tn(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), i = sn(tn(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${rn(n)}" y="0" width="${rn(Math.max(1, i - n))}" height="${rn(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = tn(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${rn(n)}" y1="0" x2="${rn(n)}" y2="${rn(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${rn(t.plotArea.left)}" y="${rn(t.plotArea.top)}" width="${r}" height="${s}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
var ln = class extends Error {
	name = "ExportSnapshotTooLargeError";
	reason = "snapshot_too_large";
}, cn = class e extends Error {
	file;
	step;
	reason;
	constructor(e, t, n, i = un(n)) {
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
function un(e) {
	return e instanceof cn || e instanceof ln ? e.reason : e instanceof Error ? e.name : typeof e;
}
const dn = 65536;
function mn(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function pn(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const gn = [
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
], fn = (new Set(gn.slice(16).map(([e]) => e)), "edit_recompute_requires_ms2_ms3"), hn = ($.invalid_night_row.markerTypeCell, new Set(gn.map(([, e]) => e)), R.ggir_sleepparam.header, R.ggir_guider_onset.header, R.ggir_guider_wakeup.header, R.ggir_guider_spt_duration.header, R.ggir_error_onset.header, R.ggir_error_wake.header, R.ggir_error_dur.header, R.ggir_fraction_night_invalid.header, R.ggir_duration_sib_wakinghours.header, R.ggir_number_sib_sleepperiod.header, R.ggir_number_sib_wakinghours.header, R.ggir_duration_sib_wakinghours_atleast15min.header, R.ggir_guider_onset_ts.header, R.ggir_guider_wakeup_ts.header, R.ggir_page.header, R.ggir_daysleeper.header, R.ggir_sleeplog_id.header, R.ggir_guider.header, R.ggir_longitudinal_axis.header, /* @__PURE__ */ new Set([
	R.ggir_sleep_duration_in_spt.header,
	R.ggir_waso.header,
	R.ggir_number_of_awakenings.header,
	R.ggir_sleeplatency.header,
	R.ggir_sleepefficiency.header
])), _n = /* @__PURE__ */ new Set([
	...hn,
	R.ggir_nonwear_perc_spt.header,
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
]), wn = /* @__PURE__ */ new Set([
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
]), vn = (new Set(Object.values(R).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), new Set(Object.values(R).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), new Set(Object.values(x).map((e) => e.reviewSource)), [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
]), yn = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : c(String(e)), bn = (O.part4_night_review, O.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function kn(e, t, n = "") {
	return O[e].replace("{report}", n.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${x[t].filenameSuffix}.csv`);
}
function Tn(e) {
	if ("string" != typeof e) return;
	const n = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(n)) return t(n) ?? void 0;
	const i = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(n);
	return i ? t(`${i[3]}-${i[2].padStart(2, "0")}-${i[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function Mn(e, t) {
	const n = new Map(re(e).map((e) => [e.night, e.nightDate]));
	return (e, i, r = !0) => {
		const s = e.columns.indexOf("nights" === t ? R.ggir_night.header : "night_number"), a = Number(e.values[s]?.[i]), o = n.get(a);
		if (r && o) return o;
		const l = e.values[e.columns.indexOf(R.ggir_calendar_date.header)]?.[i];
		return Tn(l);
	};
}
async function In(e, t, n, i) {
	const r = "nights" === t ? R.ggir_night.header : "window_number", s = A(n), a = await Promise.all(e.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await oe(e.imported, e.edits, t.night, n)])))), o = (await Promise.all(e.map(async (e, n) => {
		const i = e.current ?? e.imported, r = (e) => "nights" === t ? e.nights : e.days, o = "nights" === t ? i.nightRecomputed : i.dayRecomputed, l = "nights" === t ? e.imported.nightChecks : e.imported.dayChecks, c = a[n].filter((e) => null != e[1]), u = Mn(e.imported, t), d = new Set(e.edits.map((e) => e.night)), m = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, p = /* @__PURE__ */ new Set();
		if ("days" === t && m) {
			const t = await Promise.all(re(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), i = t.nightDate, r = n.onset < "12:00:00" ? await C(i, void 0, s) : i, a = n.wake <= n.onset ? await C(r, void 0, s) : r;
				return [Math.min(t.onsetMs, Date.parse(`${r}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${a}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: i.days.rows }, async (e, n) => {
				const r = Number(i.days.values[i.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(r)) return void p.add(n);
				const a = u(i.days, n, !1), o = i.days.values[i.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof o ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(o) : null;
				if (!a || !l) return;
				const c = Date.parse(`${a}T${l[1]}Z`), m = l[2] < l[1] ? await C(a, void 0, s) : a, g = Date.parse(`${m}T${l[2]}Z`);
				t.some(([e, t]) => c <= t && g >= e) && p.add(n);
			}));
		}
		return {
			source: x[bn(e)].reviewSource,
			editedDayRows: p,
			editRecomputeUnavailable: m,
			editedNights: d,
			scoredDates: e.scoredDates,
			invalidDates: e.invalidDates,
			dateOf: u,
			table: r(i),
			ggir: r(e.imported),
			savedNights: e.imported.nights,
			recomputed: o,
			provenance: (e) => "nights" === t ? c.find(([t]) => t === e)?.[1] ?? "" : c.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(l.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === o.length) return null;
	const l = i ? i.filter((e) => !e.endsWith("_missing_reason") && !vn.includes(e)) : [];
	for (const c of i ? [] : o) for (const e of c.table.columns) e.endsWith("_missing_reason") || l.includes(e) || l.push(e);
	const u = new Set("nights" === t ? N.ggir_review_night_extension.map((e) => R[e].header) : []), d = i ? l.filter((e) => i.includes(e + "_missing_reason")) : l.filter((e) => u.has(e) || o.some((e) => e.editRecomputeUnavailable || e.source === x.corrected.reviewSource)), m = [[
		...l.map(c),
		...vn,
		...d.map((e) => c(e + "_missing_reason")),
		...vn.map((e) => e + "_missing_reason")
	].join(",")], p = (e, t) => {
		const n = e.columns.indexOf(r);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: g, ggir: f, recomputed: h, provenance: _, checks: w, scoredDates: v, invalidDates: y, dateOf: b, editRecomputeUnavailable: k, editedNights: T, editedDayRows: M, savedNights: I, source: S } of o) {
		const e = I.columns.filter((e) => !_n.has(e)), n = e.filter((e) => {
			const t = I.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return I.values[t].some((e, t) => {
				const i = Number(I.values[I.columns.indexOf(R.ggir_night.header)]?.[t]), r = n.has(i) && !Object.is(n.get(i), e);
				return n.set(i, e), r;
			});
		}), i = /* @__PURE__ */ new Set(), r = (e) => Array.from({ length: f.rows }, (e, t) => t).find((t) => !i.has(t) && p(f, t) === p(g, e) && n.every((n) => Object.is(f.values[f.columns.indexOf(n)]?.[t] ?? null, g.values[g.columns.indexOf(n)]?.[e] ?? null))), s = new Set(l.filter((n) => "nights" === t ? _n.has(n) : !wn.has(n) && !e.includes(n))), a = (n, i, r, a) => {
			const o = w.get(p(n, i));
			return [
				...l.map((s) => {
					if ("invalid" === r && ("nights" === t ? _n.has(s) : /sleep|spt|waso|wake|onset|guider/i.test(s) && !e.includes(s))) return "";
					const a = n.columns.indexOf(s);
					return a < 0 ? "" : yn(n.values[a]?.[i]);
				}),
				r,
				o?.status ?? "",
				c((o?.reasons ?? []).join(";")),
				c((o?.diffs ?? []).map((e) => e.column).join(";")),
				c(a),
				...d.map((e) => "invalid" !== r || u.has(e) && e !== R.ggir_nonwear_perc_spt.header ? k && r === S && s.has(e) && ("days" === t ? M.has(i) : T.has(p(n, i))) ? fn : u.has(e) ? null != Ae(n, e, i) ? "" : yn(Re(n, e + "_missing_reason", i) ?? "source_reported_missing") : r === S ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
				"",
				o ? "" : "not_computed_for_export",
				o?.reasons.length ? "" : "not_applicable_to_row",
				o?.diffs.length ? "" : "not_applicable_to_row",
				a ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let t = 0; t < g.rows; t += 1) {
			const e = b(g, t);
			if (v && (!e || !v.has(e))) continue;
			const n = r(t);
			if (null != n && i.add(n), e && y?.has(e)) {
				null != n && m.push(a(f, n, S, "")), m.push(a(g, t, "invalid", ""));
				continue;
			}
			if (!h[t]) {
				m.push(a(g, t, S, ""));
				continue;
			}
			const s = p(g, t);
			null != n && m.push(a(f, n, S, "")), m.push(a(g, t, "recomputed", _(s)));
		}
		for (let t = 0; t < f.rows; t += 1) {
			if (i.has(t)) continue;
			const e = b(f, t);
			(!v || e && v.has(e)) && (m.push(a(f, t, S, "")), e && y?.has(e) && m.push(a(f, t, "invalid", "")));
		}
	}
	return m.length > 1 ? `${m.join("\n")}\n` : null;
}
function Sn(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const i of e) for (const [e, t] of Object.entries(i.part2Reports ?? {})) {
		const r = kn("part2_report", bn(i), e);
		n.set(r, [...n.get(r) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const i = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], r = [i.map(c).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) r.push(i.map((n) => yn(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, r.join("\n") + "\n"];
	}));
}
Object.keys(x).map((e) => kn("person_summary_review", e));
const An = (e, t) => re(e).filter((e) => t?.has(e.nightDate));
async function xn(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: fn,
		detail: ""
	};
	const i = e.current ?? e.imported;
	if (void 0 === i.tailExpansion) return {
		reason: "not_computed_for_export",
		detail: "the saved GGIR review predates the core's tail expansion flag; import the folder again"
	};
	const r = A(n);
	try {
		const { ggirVersion: n } = await r.ggirConfigValues(e.configCsv), { profile: s, reports: a } = await r.ggirPersonSummaries({
			ggir_version: n ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: i.nights,
			days: i.days,
			tail_expansion: i.tailExpansion,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(Re(i.nights, R.ggir_id.header, 0) ?? ""),
			invalid_nights: An(e.imported, t).map((e) => e.night),
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
async function Rn(e, t, n) {
	const i = /* @__PURE__ */ new Map(), r = await Promise.all(e.map(async (e) => {
		const n = An(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (n) => {
			const i = await oe(e.imported, e.edits, n.night, t);
			return null == i ? [] : [`night ${String(n.night)} ${i}`];
		}))).flat(), ...n].join("; ");
	}));
	for (const [a, o] of e.entries()) {
		const e = bn(o), t = r[a], n = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [r, s] of Object.entries(o.personReports ?? {})) {
			if (0 === s.rows) continue;
			const a = kn("person_summary_review", e, r), o = "reason" in n ? n : n.reports[r] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${r}`
			};
			i.set(a, [...i.get(a) ?? [], {
				table: s,
				source: x[e].reviewSource,
				edit: t,
				recomputed: o
			}]);
		}
	}
	const s = /* @__PURE__ */ new Set([R.ggir_id.header, R.ggir_filename.header]);
	return Object.fromEntries([...i].map(([e, t]) => {
		const i = n?.get(e), r = [...new Set(t.flatMap(({ table: e }) => e.columns))], a = (i ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : function(e, t) {
			const n = new Set(e);
			if (t.every((e) => n.has(e))) return [...e];
			if (!t.some((e) => n.has(e))) return [...e, ...new Set(t)];
			const i = [...e];
			let r = -1;
			for (const s of t) {
				const e = i.indexOf(s);
				e >= 0 ? r = e : i.splice(++r, 0, s);
			}
			return i;
		}(e, t.columns), r)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !vn.includes(e)), o = vn.map((e) => e + "_missing_reason"), l = i?.filter((e) => e.endsWith("_missing_reason") && !o.includes(e)) ?? ["refusal_detail_missing_reason", ...a.map((e) => e + "_missing_reason")], u = [[
			...a,
			...vn,
			...l,
			...o
		].map(c).join(",")], d = (e, t) => [
			e,
			"",
			"",
			"",
			c(t)
		], m = (e) => [
			"",
			"not_computed_for_export",
			"not_applicable_to_row",
			"not_applicable_to_row",
			e ? "" : "not_applicable_to_row"
		], p = (e, t) => (n) => yn(e.values[e.columns.indexOf(n)]?.[t]), g = (e) => l.map((t) => e.get(t) ?? ""), f = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
		for (const { table: n, source: h, edit: _, recomputed: w } of t) for (let e = 0; e < n.rows; e++) {
			const t = a.map(p(n, e)), i = new Map(a.flatMap((e) => f.get(n).has(e) ? [] : [[e + "_missing_reason", "not_applicable_to_row"]]));
			if (u.push([
				...t,
				...d(h, ""),
				...g(i),
				...m("")
			].join(",")), !_) continue;
			const r = "reason" in w ? w : 0 === w.rows ? {
				reason: "no_retained_nights",
				detail: ""
			} : null, o = "reason" in w ? null : p(w, 0), l = a.map((e, n) => s.has(e) ? t[n] : o?.(e) ?? ""), v = new Map(a.flatMap((e, t) => {
				return "" === (n = l[t]).trim() || /^(?:nan|na|n\/a)$/iu.test(n.trim()) ? [[e + "_missing_reason", r?.reason ?? "not_applicable_to_row"]] : [];
				var n;
			}));
			r?.detail && v.set("refusal_detail_missing_reason", c(`ggirPersonSummaries: ${r.detail}`)), u.push([
				...l,
				...d("recomputed", _),
				...g(v),
				...m(_)
			].join(","));
		}
		return [e, u.join("\n") + "\n"];
	}));
}
const Nn = N.ggir_part4_nightsummary_csv, $n = Nn.map((e) => R[e].header), En = [
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
], On = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function Cn(e, t) {
	const n = R[e], i = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof i ? c(i) : mn(i, { integral: n.ggirIntegral ?? !1 });
}
function Dn(e, t = "legacy-recording", n, i) {
	const r = [], s = [];
	for (const l of e) l.states && 0 !== l.timestamps.length && (s.push(l.states.subarray(0, Math.min(l.timestamps.length, l.states.length))), r.push({
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
	}) : A(i).validStateFraction(a).then(async (e) => {
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
		const s = (void 0 === n || 86400 % n == 0) && [...t].some(([e, n]) => n && t.get(e + 86400)), a = s ? null : "insufficient_pair", o = await async function(e, t) {
			const n = Array.isArray(e) ? e : [e], i = n.map((e) => ({
				...void 0 === e.seriesId ? {} : { series_id: e.seriesId },
				...void 0 === e.epochLengthSeconds ? {} : { epoch_length_seconds: e.epochLengthSeconds }
			})), [r, s] = Mt(n.map((e) => e.timestamps)), [a, o] = Mt(n.map((e) => e.states));
			return A(t).sleepRegularityIndex(p([
				JSON.stringify(i),
				r,
				s,
				a,
				o
			], [
				r.buffer,
				s.buffer,
				a.buffer,
				o.buffer
			]));
		}(r, i);
		if (s && null == o) throw new Error("SRI producer returned a blank despite valid pairs");
		return {
			sri: o,
			fractionValid: e,
			sriMissingReason: a,
			fractionValidMissingReason: null
		};
	});
}
async function jn(e, t, n, r = {}) {
	const { signal: s } = r, a = e.participantId ?? e.filename, o = P(n.values(), r.algorithm), l = [];
	for (const [i, v] of n) {
		if (!Un(i, r.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = ht(v, o);
		l.push({
			timestamps: e,
			states: t
		});
	}
	const c = await Dn(l, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, s), { sri: u, fractionValid: d } = c, m = "stale" === o.status ? "scores_from_another_config" : null, p = m ?? c.sriMissingReason, g = m ?? c.fractionValidMissingReason, f = [];
	for (const v of [...t.keys()].sort()) {
		const e = t.get(v);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === i.MAIN_SLEEP && null != t.onsetTimestamp && f.push({
			date: v,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const h = [[
		...$n,
		...En.map((e) => `${R[e].header}_missing_reason`),
		...On.map((e) => `${R[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: i, onsetTs: v, wakeupTs: y } of f) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == y ? "not_applicable_to_row" : m ?? "no_scored_epochs"
		};
		if (null != y) {
			const { timestamps: r, algorithmResults: a } = await Ct(n, i, o, { signal: s });
			if (a && r.length > 0) {
				t.missingReason = null;
				const n = await gt(a, r, v, y, e.epochLengthSeconds || 60, null, s);
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
	const w = await A(s).ggirManualNightClocks(f.map((e) => e.date), Float64Array.from(f, (e) => e.onsetTs), Float64Array.from(f, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let i = 0; i < f.length; i++) {
		const { onsetTs: t, wakeupTs: n } = f[i], r = w[i], { tstH: s, nAwak: o, latency: l, efficiency: c } = _[i], m = {
			ggir_id: a,
			ggir_night: i + 1,
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
			ggir_sleep_duration_in_spt: s,
			ggir_waso: r?.waso ?? null,
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
			ggir_sleepefficiency: c,
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
			...Nn.map((e) => Cn(e, m[e])),
			...En.map((e) => {
				const t = Nn.indexOf(e);
				return t >= 0 && null == m[Nn[t]] ? "not_computed_for_export" : "";
			}),
			...On.map((e) => {
				const t = Nn.indexOf(e);
				return t >= 0 && null == m[Nn[t]] ? _[i].missingReason ?? "" : "";
			}),
			p ?? "",
			g ?? ""
		].join(","));
	}
	return h.join("\n") + "\n";
}
function Fn(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function Ln(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function Pn(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function Bn(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: i } = Ln(n), r = [e, i].filter(Boolean);
		t.set(n, 0 === r.length ? "part4_nightsummary.csv" : `part4_nightsummary_${r.join("_")}.csv`);
	}
	return t;
}
function Wn(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : Y(e);
}
function zn(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function* Gn(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let i = Math.min(e.length, n + dn / 4);
		i < e.length && /[\uD800-\uDBFF]/u.test(e[i - 1]) && (i -= 1), yield t.encode(e.slice(n, i)), n = i;
	}
	yield t.encode("\n");
}
function Hn(e) {
	return new TextEncoder().encode(e);
}
function Un(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function Vn(t, n, i) {
	i?.throwIfAborted();
	const r = function(e, t) {
		const { signal: n } = t, { username: i, dateRange: r, snapshot: s } = e, a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const d = Er(s, Mr.ggirReport, e.map((e) => e.id)), m = await Promise.all(e.map((e) => Lr(s, e.id, i, n)));
				for (const [i, s] of e.entries()) {
					const e = d.files.find((e) => e.id === s.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: p, sets: g, markersByAlgo: f, invalidDates: h } = m[i], _ = Wr(d, e.id), w = new Map([...f].filter(([e]) => Un(e, r))), v = /* @__PURE__ */ new Map();
					for (const [t, n] of w) for (const e of n) {
						const n = Pn(e);
						let i = v.get(n);
						i || (i = /* @__PURE__ */ new Map(), v.set(n, i)), i.set(t, e);
					}
					const y = /* @__PURE__ */ new Set();
					for (const [t, n] of w) for (const e of n) l(e) && y.add(t);
					if (p) for (const t of g) u.push({
						...t,
						...r ? { scoredDates: new Set(e.availableDates.filter((e) => Un(e, r))) } : {},
						invalidDates: h
					});
					const b = [...y].sort(), k = b[0], T = b[b.length - 1], M = [], I = [];
					for (const n of t.charts ? [..._.keys()].sort() : []) if (Un(n, r) && (null == k || null == T || n >= k && n <= T)) {
						const e = _.get(n), t = H({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), i = t.timestamps, r = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < i.length; n++) M.push(i[n]), I.push(r[n]);
					}
					const S = [];
					for (const [t, i] of v) {
						const s = Ln(t).algoKey, l = p ? "" : await jn(e, i, _, {
							...s ? { algorithm: s } : {},
							...r ? { dateRange: r } : {},
							signal: n
						}), c = p ? [] : l.replace(/\n$/u, "").split("\n");
						if (c.length > 0) {
							const e = a.get(t) ?? [];
							a.set(t, e), o.has(t) ? e.push(...c.slice(1)) : (e.push(...c), o.add(t));
						}
						const u = [], d = [];
						for (const e of i.values()) {
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
						const { algoKey: m, ruleKey: g } = Ln(t), f = [m, g].filter(Boolean).join("_"), h = P(_.values(), s || null);
						S.push([f, {
							p: u,
							n: d,
							..."stale" === h.status ? { stale: h.reason } : {}
						}]);
					}
					0 === v.size && S.push(["", {
						p: [],
						n: []
					}]), M.length > 0 && c.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: M,
						act: I,
						algos: S
					});
				}
			},
			entries: () => async function({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: i, layouts: r, only: s }) {
				const a = {}, o = (e) => void 0 === s || s === e;
				for (const [l, c] of i ?? Bn([...e.keys()])) {
					const t = e.get(l);
					t?.length && o(c) && (a[c] = Hn(`${t.join("\n")}\n`));
				}
				for (const l of Object.keys(x)) {
					const e = t.filter((e) => bn(e) === l);
					if (0 === e.length) continue;
					const i = (t, n) => void 0 === s || e.some((e) => Object.keys(n(e) ?? {}).some((e) => kn(t, l, e) === s));
					if (i("part2_report", (e) => e.part2Reports)) for (const [t, n] of Object.entries(Sn(e, r))) o(t) && (a[t] = Hn(n));
					for (const [t, s] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
						const i = kn(s, l), c = o(i) ? await In(e, t, n, r?.get(i)) : null;
						c && (a[i] = Hn(c));
					}
					if (i("person_summary_review", (e) => e.personReports)) for (const [t, s] of Object.entries(await Rn(e, n, r))) o(t) && (a[t] = Hn(s));
				}
				return a;
			}({
				csvLinesByAlgo: a,
				ggirReviews: u
			}, { signal: n }),
			chartPidData: c,
			csvLinesByAlgo: a,
			ggirReviews: u
		};
	}(t, {
		signal: i,
		charts: !0
	});
	await r.addFiles([n]);
	const s = [...r.chartPidData].map(([e, n]) => function(e, t, n) {
		return {
			key: e,
			pid: t.pid,
			charts: t.algos.map(([i, r]) => {
				const { algoKey: s, ruleKey: a } = Ln(i), o = zn([s, a].filter(Boolean).join("_"), "unscoped"), l = `activity-${zn(e, "recording")}-${o}-${n}.svg`, c = function(e) {
					if (0 === e.timestamps.length) return pn("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return pn("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, i = 0;
					const r = e.timestamps.map((r, s) => {
						const a = e.activity[s];
						return !Number.isFinite(r) || r <= t ? pn("timestamps must be finite and strictly ascending") : (t = r, null != a && Number.isFinite(a) ? (n = Math.min(n, a), i = Math.max(i, a), {
							timestamp: r,
							value: a
						}) : {
							timestamp: r,
							value: null
						});
					}), s = r[0].timestamp, a = r[r.length - 1].timestamp, o = a > s ? a : s + 1;
					if (!Number.isFinite(o) || o <= s) return pn("single-epoch viewport must have a representable right edge");
					i <= n && (i = n + 1);
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
							min: s,
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
				}), u = [...Gn(`      <div class="plot-svg">${on(c)}</div>`)];
				return {
					algoKey: i,
					...r.stale ? { stale: r.stale } : {},
					svgFilename: l,
					plot: new Blob(u),
					plotLengths: u.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${Fn(Wn(c.viewport.min))} → ${Fn(Wn(c.viewport.max))} · activity domain ${mn(c.valueDomain.min)}–${mn(c.valueDomain.max)}</div>`
				};
			})
		};
	}(e, n, t.generatedAt)), o = new Set(Bn([...r.csvLinesByAlgo.keys()]).values()), c = [];
	for (const [l, u] of Object.entries(await r.entries())) o.has(l) || c.push([l, e(a(new TextDecoder().decode(u)).records[0].text)]);
	return {
		charts: s,
		csvLinesByAlgo: r.csvLinesByAlgo,
		ggirReviews: r.ggirReviews,
		headers: c
	};
}
function Kn(e) {
	return "aw5" === e ? "actoglance.source.philips_actiwatch_aw5.v1" : "actoglance.source.philips_actiware_csv.v1";
}
function qn(e) {
	return Date.parse(`${e}Z`) / 1e3;
}
async function Jn(e, t) {
	const n = e.timestamps_ms[0];
	if (null == n) return null;
	const i = (e.channels.find((t) => t.name === e.primary) ?? e.channels[0])?.counts ?? [], r = Array.from(i, (e) => Number.isFinite(e) && e >= 0), s = await t.roundCountStorage(Float64Array.from(i, (e, t) => r[t] ? e : 0), 0);
	return {
		start_local: (a = n / 1e3, (/* @__PURE__ */ new Date(1e3 * a)).toISOString().slice(0, 19)),
		epoch_seconds: e.epoch_seconds,
		activity: r.map((e, t) => e ? s[t] : null),
		...e.marker && e.marker.length === i.length ? { marker: e.marker } : {},
		excluded: (e.rest_intervals ?? []).filter((e) => "excluded" === e.kind)
	};
	var a;
}
async function Zn(e, t, n, i = 60) {
	const r = Int8Array.from(t.scores, (e) => null == e ? -1 : 0 === e ? 1 : 0);
	return e.foldSleepWakeVotes(t.startTimestamp, t.epochSeconds, r, Float64Array.from(n), i);
}
function Yn(e) {
	return {
		startTimestamp: e.startTimestamp,
		epochSeconds: e.epochSeconds,
		params: e.params,
		...e.paradigmDefaults ? { paradigmDefaults: e.paradigmDefaults } : {},
		scores: Int8Array.from(e.scores, (e) => e ?? -1).buffer
	};
}
function Qn(e, t) {
	return e.filter((e) => "rest" === e.kind || "sleep" === e.kind).map((e) => ({
		kind: e.kind,
		source: e.source,
		startTimestamp: qn(e.start),
		endTimestamp: qn(e.end),
		origin: t ? "generated" : "stored",
		...e.analysis ? { analysis: e.analysis } : {}
	})).filter((e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.endTimestamp > e.startTimestamp).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Xn(e) {
	return e.map(({ start: e, end: t, ...n }) => ({
		...n,
		startTimestamp: qn(e),
		endTimestamp: qn(t)
	}));
}
function ei(e, t) {
	return e && e.length === t && t > 0 ? e : null;
}
function ti(e) {
	const t = e.timestamps_ms.length, n = (t) => e.light_channels.find((e) => e.name === t)?.counts;
	return {
		white: ei(e.light, t),
		red: ei(n("red_light"), t),
		green: ei(n("green_light"), t),
		blue: ei(n("blue_light"), t)
	};
}
function ni(e, t, n) {
	const i = (e) => {
		if (!e) return;
		const i = new Float64Array(n.length);
		for (let r = 0; r < n.length; r += 1) {
			const s = t.get(n[r] ?? NaN);
			i[r] = null == s ? NaN : e[s] ?? NaN;
		}
		return i.buffer;
	}, r = i(e.white), s = i(e.red), a = i(e.green), o = i(e.blue);
	return {
		...r ? { lux: r } : {},
		...s ? { redLight: s } : {},
		...a ? { greenLight: a } : {},
		...o ? { blueLight: o } : {}
	};
}
function ii(e, t) {
	const n = 6e4 * (ri(e, t)?.gmt_offset_minutes ?? 0);
	return 0 === n ? e.series : {
		...e.series,
		timestamps_ms: e.series.timestamps_ms.map((e) => e + n)
	};
}
function ri(e, t) {
	return (void 0 === t ? void 0 : e.downloads.find((e) => e.guid === t)) ?? e.downloads.find((e) => e.is_primary) ?? e.downloads[0];
}
function si(e) {
	const t = e.channels.find((t) => t.name === e.primary) ?? e.channels[0];
	if (!t) throw new Error("The device file carries no activity count channel.");
	return t.counts;
}
async function ai(e, t, n = [], i = null) {
	const r = function(e, t) {
		if (!t || t.length !== e.length) return /* @__PURE__ */ new Float64Array(0);
		const n = [];
		return t.forEach((t, i) => {
			t && n.push((e[i] ?? NaN) / 1e3);
		}), Float64Array.from(n.filter(Number.isFinite));
	}(e.timestamps_ms, e.marker), s = function(e) {
		const { timestamps_ms: t, off_wear: n, off_wear_invalid: i, epoch_seconds: r } = e;
		if (n.length !== t.length) return [];
		const s = [];
		let a = null;
		for (let o = 0; o <= t.length; o += 1) {
			const e = o < t.length && !0 === n[o] && !0 !== i?.[o], l = (t[o] ?? NaN) / 1e3;
			if (e && null === a && (a = l), !e && null !== a) {
				const e = (t[o - 1] ?? NaN) / 1e3;
				s.push({
					startTimestamp: a,
					endTimestamp: e + r
				}), a = null;
			}
		}
		return s;
	}(e), a = e.timestamps_ms.length > 0 && e.off_wear.length === e.timestamps_ms.length, o = e.epoch_seconds >= 60 ? e : await t(e);
	if (60 !== o.epoch_seconds && 120 !== o.epoch_seconds) throw new Error("Native import requires a 60- or 120-second scoring grid");
	const l = 120 === o.epoch_seconds ? [...n, "This recording keeps its native 120-second scoring grid. A 60-second view, one-minute sleep scorers, Choi nonwear and finer algorithm variants are unavailable because the source contains only two-minute sums."] : n, c = o.activity_invalid ?? [], u = Uint8Array.from(c.length === o.timestamps_ms.length ? c : [], (e) => e ? 1 : 0);
	return {
		epochSeconds: o.epoch_seconds,
		timestampsMs: o.timestamps_ms,
		counts: si(o),
		actiwareInvalidActivityMinutes: u,
		actiwareStatisticsInput: i,
		sourceEpochSeconds: e.epoch_seconds,
		eventMarkerInstantsSec: r,
		offWristPeriods: s,
		hasOffWristChannel: a,
		warnings: l,
		light: ti(o),
		actiwareIntervals: [],
		actiwareSleepWake: null,
		actiwareStatistics: [],
		actiwareRecording: null,
		actiwareWakeThreshold: null,
		actiwareRestProposal: null
	};
}
function oi(e) {
	const { proposal: t, nights: n } = e ?? {
		proposal: fe,
		nights: []
	}, i = t.rest_autoscore === y.screens ? n : [];
	return JSON.stringify([
		t.use_saved_rest_intervals,
		t.rest_autoscore,
		i.map(({ timestamps: e, activity_counts: t, sleep_scores: n, ...i }) => i)
	]);
}
function li(e, t, n, i = /* @__PURE__ */ new Map(), r = {}) {
	const s = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = (/* @__PURE__ */ new Date(1e3 * (o - 43200))).toISOString().slice(0, 10);
		let t = s.get(e);
		t || s.set(e, t = []), t.push(o);
	}
	const a = Array.from(t);
	return [...s].map(([e, t]) => {
		const s = Date.parse(`${e}T00:00:00Z`) / 1e3, o = i.get(e);
		return pe({
			analysisDate: e,
			epochLengthSeconds: n,
			timestamps: t,
			activityCounts: [],
			sleepScores: [],
			eventMarkerTimestamps: a.filter((e) => e >= s + 43200 && e < s + 151200),
			diaryBedTime: z(o, "diary_in_bed_time"),
			diaryOnsetTime: z(o, "diary_onset_time"),
			diaryOutBedTime: z(o, "diary_out_of_bed_time"),
			diaryWakeTime: z(o, "diary_wake_time"),
			nightStartHour: le(r.start),
			nightEndHour: le(r.end)
		});
	});
}
async function ci(e, t, n, i, r, s, a, o) {
	a?.throwIfAborted();
	const l = n ? ye(n, ke(n, i, e)) : null, c = !n || !l || we(n, l), u = c || null !== n && null !== l && !be(n, l) ? e.filter((e) => "rest" === e.kind) : [], d = c ? e.filter((e) => "sleep" === e.kind) : [], m = t && l && r.actiwareSleepWake ? await r.actiwareSleepWake(t, l).catch(() => null) : null;
	a?.throwIfAborted();
	const p = n ? ve(n, i, e) : [], g = t && l && m ? {
		startTimestamp: qn(t.start_local),
		epochSeconds: t.epoch_seconds,
		scores: m,
		params: l,
		...p.length > 0 ? { paradigmDefaults: p } : {}
	} : null, f = t && l && r.actiwareWakeThreshold ? await r.actiwareWakeThreshold(t, l).catch(() => null) : null;
	a?.throwIfAborted();
	const h = !1 !== o?.proposal.use_saved_rest_intervals && u.length > 0 && d.length > 0 ? null : t && l && r.actiwareIntervals ? await r.actiwareIntervals(t, u, l, ...o ? [o] : []).catch(() => null) : null;
	a?.throwIfAborted();
	const _ = h ?? {
		intervals: [...e],
		generated: !1
	}, w = _.intervals.filter((e) => "rest" === e.kind || "sleep" === e.kind), v = s && m ? {
		...s,
		sleep_wake: m
	} : s, y = v && r.actiwareIntervalStatistics && w.length > 0 ? await r.actiwareIntervalStatistics({
		...v,
		intervals: w
	}).then((e) => Xn(e ?? [])).catch(() => (console.warn("[actiware-statistics] the core rejected this file's Statistics input"), null)) : [];
	return a?.throwIfAborted(), {
		intervals: Qn(_.intervals, _.generated),
		sleepWake: g,
		statistics: y,
		statisticsInput: v,
		wakeThreshold: f ?? null,
		restProposal: o ? {
			key: oi(o),
			...h?.nights ? { notes: Object.fromEntries(h.nights.map((e) => [e.analysis_date, e.note])) } : {}
		} : null
	};
}
const ui = "Actiware statistics could not be computed for this file; the Actiware statistics block stays empty.";
function di(e, t) {
	return e ? (t ?? []).map((e) => `Actiware setting ${e.field} = '${e.raw_label}' not recognised; using default.`) : ["No Actiware analysis settings in this file; Actiware Sleep/Wake and rest intervals are not recomputed."];
}
async function mi(e, t) {
	if (gi(e)) return "aw5";
	const n = e.name.toLowerCase();
	if (n.endsWith(".aw5")) return "aw5";
	if (!n.endsWith(".csv")) return null;
	if ("function" != typeof t.detectDeviceFormat) return null;
	const i = new Uint8Array(await e.slice(0, 65536).arrayBuffer());
	return r = await t.detectDeviceFormat(i, e.name).catch(() => null), s = e.name, "actiware_csv" === r ? "actiware_csv" : "aw5" === r || s.toLowerCase().endsWith(".aw5") ? "aw5" : null;
	var r, s;
}
async function pi(e, t, n, i, r, s = { cancel: () => {} }, a) {
	const o = (e, t) => M(t, I, e, s.signal, s.cancel), l = (e) => r && a ? {
		proposal: a.proposal,
		nights: a.proposal.rest_autoscore === y.screens ? li(e.timestampsMs.map((e) => e / 1e3), e.eventMarkerInstantsSec, e.epochSeconds, void 0, {
			start: a.nightStartHour,
			end: a.nightEndHour
		}) : []
	} : null, c = async (e) => (await o("aggregateEpochSeries", () => n.aggregateEpochSeries({
		target_seconds: 60,
		series: e,
		sleep_scores: [],
		event_markers: []
	}))).series;
	if ("aw5" === t) {
		const t = gi(e) ? e.aw5Subject.downloadGuids[0] : void 0, a = gi(e) ? await e.loadAw5(s.signal) : await o("parseAw5", async () => n.parseAw5(new Uint8Array(await e.arrayBuffer())));
		if (T(s.signal, "after decoding the .AW5 database"), !a) throw new Error("This build's actours core cannot read .AW5 databases yet (needs the pin that exports parseAw5). Export the recording from Actiware as CSV instead.");
		const { warnings: u } = function(e) {
			const { status: t, reasons: n } = e.alignment;
			if ("broken" === t) throw new Error(`This .AW5 recording's samples do not line up with its clock (${n.join("; ") || "alignment broken"}), so it was not imported.`);
			return "suspect" === t ? { warnings: [`.AW5 alignment is suspect: ${n.join("; ") || "no reason given"}. Check the plot against the Actiware report.`] } : { warnings: [] };
		}(a), d = ri(a, t), m = a.actiware_analysis, p = m?.statistics_input ?? a.actiware_statistics_input ?? null;
		i?.(.6, "Preparing the supported native scoring grid...");
		const g = await ai(ii(a, t), c, u, p);
		i?.(.8, "Actiware sleep/wake and statistics...");
		const f = m?.params ?? a.actiware_params, h = f ? {
			params: f,
			intervals: m?.intervals ?? a.series.rest_intervals ?? [],
			...m?.analysis ? { analysis: m.analysis } : {},
			...a.other_analyses ? { otherAnalyses: a.other_analyses } : {}
		} : null, _ = await ci(h?.intervals ?? [], m?.input ?? a.actiware_input ?? await Jn(ii(a, t), n), h?.params ?? null, r, n, p, void 0, l(g));
		return {
			...g,
			actiwareRestProposal: _.restProposal,
			actiwareStatisticsInput: _.statisticsInput,
			actiwareIntervals: _.intervals,
			actiwareSleepWake: _.sleepWake,
			actiwareStatistics: _.statistics ?? [],
			actiwareRecording: h,
			actiwareWakeThreshold: _.wakeThreshold,
			warnings: [
				...g.warnings,
				...di(f, m?.params_warnings ?? a.actiware_params_warnings ?? a.series.actiware_params_warnings),
				..._.statistics ? [] : [ui]
			],
			...d ? { gmtOffsetMinutes: d.gmt_offset_minutes } : {}
		};
	}
	const u = await o("parseEpochSeries", async () => n.parseEpochSeries(new Uint8Array(await e.arrayBuffer()), e.name));
	T(s.signal, "after parsing the Actiware export"), i?.(.6, "Preparing the supported native scoring grid...");
	const d = await ai(u, c, [], u.actiware_statistics_input ?? null);
	i?.(.8, "Actiware sleep/wake and statistics...");
	const m = u.actiware_params ?? null, p = m ? {
		params: m,
		intervals: u.rest_intervals ?? []
	} : null, g = await ci(u.rest_intervals ?? [], u.actiware_input ?? await Jn(u, n), m, r, n, u.actiware_statistics_input ?? null, void 0, l(d));
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
			...di(m, u.actiware_params_warnings),
			...g.statistics ? [] : [ui]
		]
	};
}
function gi(e) {
	return "aw5Subject" in e;
}
function fi(e, t) {
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
var hi = class extends Error {
	name = "ActiwareSleepContainmentError";
}, _i = class extends Error {
	name = "ActiwareRestEditError";
};
const wi = (e, t) => Math.round((t - e.startTimestamp) / e.epochSeconds);
function vi(e, t) {
	return e.startTimestamp + wi(e, t) * e.epochSeconds;
}
const yi = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " "), bi = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19);
function ki(e) {
	return {
		kind: e.kind,
		source: e.source,
		start: bi(e.startTimestamp),
		end: bi(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	};
}
const Ti = (e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind);
function Mi(e, t) {
	return (e ?? []).filter((e) => "rest" === e.kind && null !== ue([e], t));
}
const Ii = (e, t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp;
function Si(e, t, n) {
	const r = de(e, t);
	return r ? [...r.sleep && !n ? [{
		onsetTimestamp: r.sleep.startTimestamp,
		offsetTimestamp: r.sleep.endTimestamp,
		markerIndex: 1,
		markerType: i.MAIN_SLEEP
	}] : [], ...(r.additionalSleeps ?? []).map((e, t) => ({
		onsetTimestamp: e.startTimestamp,
		offsetTimestamp: e.endTimestamp,
		markerIndex: t + 2,
		markerType: i.NAP
	}))] : [];
}
function Ai(e, t, n, i) {
	return Si(t, n, i).map((t) => {
		const n = e.find((e) => e.markerType === t.markerType && e.onsetTimestamp === t.onsetTimestamp && e.offsetTimestamp === t.offsetTimestamp);
		return n ? {
			...n,
			markerIndex: t.markerIndex
		} : t;
	});
}
async function xi(e, t, n, i) {
	if (!t) return null;
	const r = function(e, t) {
		const n = [...t].flatMap((t) => {
			const n = de(e, t);
			return n?.sleep ? [n.sleep] : [];
		});
		return (e ?? []).filter((e) => "sleep" !== e.kind || !n.some((t) => t.startTimestamp === e.startTimestamp && t.endTimestamp === e.endTimestamp));
	}(e, n).map(ki).sort(Ti);
	if (0 === r.length) return [];
	const s = await i({
		...t,
		intervals: r
	});
	return s ? Xn(s).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)) : null;
}
async function Ri(e, t, n, i) {
	const r = Mi(e, t), s = "move" === n.kind ? r.find((e) => e.startTimestamp === n.from.startTimestamp && e.endTimestamp === n.from.endTimestamp) : "remove" === n.kind ? r.find((e) => Ii(n.holding, e)) : void 0;
	if ("add" !== n.kind && !s) throw new _i("That rest interval changed since it was shown; reload the night.");
	const a = e.filter((e) => e !== s && !(s && "sleep" === e.kind && Ii(e, s)));
	if ("remove" === n.kind) return a;
	const { grid: o } = i, l = s?.analysis, c = {
		kind: "rest",
		source: "event_marker",
		origin: "scorer",
		startTimestamp: vi(o, n.to.startTimestamp),
		endTimestamp: vi(o, n.to.endTimestamp),
		...l ? { analysis: l } : {}
	};
	if (c.endTimestamp <= c.startTimestamp) throw new _i("A rest interval must end after it starts.");
	if (a.some((e) => "rest" === e.kind && e.startTimestamp < c.endTimestamp && e.endTimestamp > c.startTimestamp)) throw new _i("A rest interval cannot overlap another rest interval.");
	if (null === ue([c], t)) throw new _i("That rest interval would belong to another night.");
	const u = await async function(e, { epochs: t, params: n, grid: i, core: r }) {
		if (0 === e.length) return [];
		const s = await r.actiwareIntervals(t, e.map(ki), n);
		if (!s || s.generated) throw new Error("The Actiware core did not derive the sleep inside these rest intervals.");
		const a = Qn(s.intervals.filter((e) => "sleep" === e.kind), !0);
		return function(e, t) {
			const n = e.filter((e) => "rest" === e.kind);
			for (const i of e.filter((e) => "sleep" === e.kind)) {
				const e = wi(t, i.startTimestamp), r = wi(t, i.endTimestamp);
				if (!n.some((n) => e >= wi(t, n.startTimestamp) && r <= wi(t, n.endTimestamp))) throw new hi(`Actiware sleep interval ${yi(i.startTimestamp)}–${yi(i.endTimestamp)} lies outside every rest interval.`);
			}
		}([...e, ...a], i), a;
	}([c], i);
	return [
		...a,
		c,
		...u
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Ni(e, t) {
	const n = (e) => [
		e.startTimestamp,
		e.endTimestamp,
		e.origin
	].join(":"), i = (e) => e ? {
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	} : null, r = (e) => e.filter((e) => "rest" === e.kind), s = new Set(r(e).map(n)), a = new Set(r(t).map(n));
	return {
		from: i(r(e).find((e) => !a.has(n(e)))),
		to: i(r(t).find((e) => !s.has(n(e))))
	};
}
async function $i({ file: e, statisticsInput: t }, n, r, s) {
	if (!t) return null;
	const a = A(s), o = e.actiwareIntervals ?? [], l = await $t(o.map((e) => e.startTimestamp), a);
	let c = [...o];
	for (const p of n.keys()) {
		const e = Mi(o, p), t = o.filter((t) => "sleep" === t.kind && Ei(o, t, e, () => l(t.startTimestamp) === p)), r = n.get(p), s = r?.sleepMarkers.filter((e) => (e.markerType === i.NAP || e.markerType === i.MAIN_SLEEP && !r.isInvalidNight) && null != e.onsetTimestamp && Number.isFinite(e.onsetTimestamp) && null != e.offsetTimestamp && Number.isFinite(e.offsetTimestamp) && e.offsetTimestamp > e.onsetTimestamp);
		if (r?.isInvalidNight || s?.length) {
			c = c.filter((e) => !t.includes(e));
			const e = t[0]?.analysis;
			for (const t of s ?? []) c.push({
				kind: "sleep",
				source: "event_marker",
				startTimestamp: t.onsetTimestamp,
				endTimestamp: t.offsetTimestamp,
				origin: "scorer",
				...e ? { analysis: e } : {}
			});
		}
	}
	const u = await r({
		...t,
		intervals: c.map(ki).sort(Ti)
	});
	if (!u) return null;
	const d = Xn(u), m = [...e.actiwareStatistics ?? [], ...d].map((e) => e.startTimestamp);
	return {
		calculated: d,
		rowDateOf: await $t(m, a),
		datedRows: new Set(m)
	};
}
const Ei = (e, t, n, i) => {
	const r = e.find((e) => "rest" === e.kind && t.startTimestamp >= e.startTimestamp && t.endTimestamp <= e.endTimestamp);
	return r ? n.includes(r) : i();
};
function Oi(e, t, n, i) {
	const r = e.actiwareIntervals ?? [], s = [...n].map((e) => ({
		date: e,
		rests: Mi(r, e)
	})), a = (e) => s.some(({ date: n, rests: s }) => "rest" === e.kind ? null !== ue([e], n) : "sleep" === e.kind && Ei(r, e, s, () => {
		return r = e.startTimestamp, (t.datedRows.has(r) || !i ? t.rowDateOf(r) : i(r)) === n;
		var r;
	}));
	return [...(e.actiwareStatistics ?? []).filter((e) => !a(e)), ...t.calculated.filter(a)].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Ci(e, t) {
	return (e.actiwareStatistics ?? []).map((e) => e.startTimestamp).filter((e) => !t.datedRows.has(e));
}
const Di = [
	"temperature",
	"lux",
	"redLight",
	"greenLight",
	"blueLight"
], ji = $.invalid_night_row?.markerTypeCell ?? "", Fi = $.nonwear_row?.markerTypeCell ?? "";
function Li(e) {
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
function Pi(e) {
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
const Bi = [
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
], Wi = [
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
async function zi(e, t, n, i, r, s, a) {
	try {
		return {
			metrics: t ? await ft(e, t, n, i, r, s, a) : await gt(e, n, i, r, s, null, a),
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
async function Gi(e, t, n, r) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const s = new Set(n.filter((t) => t.markerType === i.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return s.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : Dn(t.filter((e) => s.has(e.date)), e, t[0]?.epochLengthSeconds, r);
}
function Hi(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const Ui = [
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
], Vi = {
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
function Ki(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function qi(e, t, n, i, r) {
	const s = [], a = Er(n, Mr.event, e), o = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		r?.throwIfAborted();
		const e = Ki(l, Wr(a, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await $t(e, A(r)), c = new Set(Dr(a, l.id, i).keys());
		for (const i of e) {
			const e = o(i);
			t && (e < t[0] || e > t[1]) || c.has(e) && s.push({
				filename: l.filename,
				participantId: l.participantId ?? null,
				studyDate: e,
				localTimestamp: i,
				gmtOffsetMinutes: n
			});
		}
	}
	return s;
}
N.sleep_csv.filter((e) => "server" !== R[e].plane).map((e) => R[e].header), $.invalid_night_row.markerTypeCell, E("actiware_interval_csv", "local"), [
	"interval_score_count",
	"interval_score_average",
	"interval_score_manual_count",
	"interval_score_manual_average",
	"interval_score_scheduled_count",
	"interval_score_scheduled_average",
	"interval_score_no_response_count",
	"interval_score_late_count",
	"interval_score_late_average"
].map((e) => R[e].header), new Set(gn.map(([, e]) => e)), E("event_marker_csv", "local"), E("actiware_sleep_wake_csv", "local"), new Uint8Array([3, 0]), f.GGIR_CORRECTED_WARM, [
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
].join(","), Te.length;
var Ji = n({
	GgirReviewChangedError: () => dr,
	editsFromMarkers: () => sr,
	getGgirMarkerInputs: () => ar,
	ggirNightEdits: () => rr,
	ggirNightRecords: () => ir,
	hasGgirRecomputeFailure: () => er,
	mergeGgirSleepMarkers: () => nr,
	recomputeGgirResults: () => cr,
	recoverPendingGgirRecomputes: () => ur,
	reviewGgirResultsForMarkers: () => pr,
	scheduleGgirRecompute: () => lr
});
const Zi = new EventTarget(), Yi = /* @__PURE__ */ new WeakMap(), Qi = 800, Xi = "Update GGIR review";
function er(e, t, n) {
	return w.getState().jobs[`${n.name}:${or(e, t)}`]?.status === _.FAILED;
}
function tr(e, t, n, i, s) {
	if (s?.aborted || function(e) {
		return e instanceof Error && e.name === r.errnames.DatabaseClosed;
	}(i)) return;
	const a = or(e, t), o = `${n.name}:${a}`, l = w.getState();
	l.jobs[o]?.controller.signal.aborted || l.jobs[o]?.status === _.ELSEWHERE || (l.update(o, {
		id: o,
		key: a,
		workspaceId: n.name,
		kind: f.GGIR_RECOMPUTE,
		label: Xi,
		controller: l.jobs[o]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: _.FAILED
	}), n.isOpen() && b() === n && Zi.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function nr(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function ir(e, t, n, r = [], s, a = A(s)) {
	const o = B([...n.values()].flat(), !0), l = o?.algorithm ?? se(t), c = o?.detectionRule ?? null, u = /* @__PURE__ */ new Map();
	for (const [i, p] of n) {
		const e = B(p, !0);
		e && u.set(i, [{
			...e,
			algorithm: l,
			detectionRule: c
		}]);
	}
	const d = ie(t), m = d.length ? await a.ggirLabelsToStoredMs(Float64Array.from(d.flatMap((e) => [e.onsetMs, e.wakeMs])), r) : [];
	for (const [p, g] of d.entries()) {
		const t = u.get(g.nightDate)?.[0], n = Q(g, t);
		"scored" !== n.kind && "invalid" !== n.kind ? u.set(g.nightDate, [{
			fileId: e,
			date: g.nightDate,
			username: q,
			scoringSessionId: null,
			contentHash: "",
			syncStatus: "synced",
			lastModifiedAt: "",
			isInvalidNight: !1,
			needsConsensus: !1,
			notes: "",
			nonwearMarkers: [],
			...t,
			algorithm: l,
			detectionRule: c,
			sleepMarkers: nr({
				markerType: i.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: m[2 * p] / 1e3,
				offsetTimestamp: m[2 * p + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : u.set(g.nightDate, t ? [t] : []);
	}
	return u;
}
async function rr(e, t, n, i = [], r, s = A(r)) {
	const a = await ir(e, t, n, i, r, s), o = new Map([...a].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : []));
	return {
		markersByAlgo: a,
		selected: o,
		edits: await sr(t, o, i, r, s)
	};
}
async function sr(e, t, n = [], i, r = A(i)) {
	const s = re(e).flatMap((e) => {
		const n = Q(e, t.get(e.nightDate));
		return "scored" === n.kind && null != n.main.onsetTimestamp && null != n.main.offsetTimestamp ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === s.length) return [];
	const a = await r.storedToGgirLabelsMs(Float64Array.from(s.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await r.wallClockLabels(Float64Array.from([...a, ...s.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * s.length;
	return s.flatMap(({ w: e }, t) => {
		const n = o[2 * t], i = o[2 * t + 1];
		return n !== o[l + 2 * t] || i !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: i
		}] : [];
	});
}
async function ar(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [i, r] = await Promise.all([G(e, t, n), F(e, n)]), s = new Map([...i].flatMap(([e, t]) => {
			const n = B(t, !0);
			return n ? [[e, n]] : [];
		})), a = r?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([a ?? [], [...s].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				Q(void 0, t)
			])]),
			markers: s,
			clockSteps: a,
			bundleRevision: r?.ggirBundleRevision
		};
	});
}
function or(e, t) {
	return `${f.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function lr(e, t, n, i) {
	if (!n.isOpen() || b() !== n || i?.aborted) return;
	let r = Yi.get(n);
	r || (r = /* @__PURE__ */ new Map(), Yi.set(n, r));
	const s = or(e, t);
	clearTimeout(r.get(s)), r.set(s, setTimeout(() => {
		r.delete(s), n.files.get(e).then((r) => {
			if (r?.ggirBundleRevision && n.isOpen() && b() === n && !i?.aborted) return cr(e, t, n, i);
		}).catch((r) => {
			i?.aborted || r instanceof DOMException && "AbortError" === r.name || (tr(e, t, n, r, i), n.isOpen() && b() === n && (console.error("[ggir-results] recompute failed."), V("error", "GGIR results recompute failed", U(r))));
		});
	}, Qi));
}
function cr(e, t, n, i, r = !0) {
	const s = (a, o = i) => S({
		kind: f.GGIR_RECOMPUTE,
		key: or(e, t),
		label: Xi,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (i) => {
			i.signal.throwIfAborted();
			const o = await async function(e, t, n, i, r, s = { active: () => n.isOpen() && b() === n }) {
				if (i.throwIfAborted(), !s.active()) return null;
				const { markerInputs: a, markers: o, clockSteps: l, bundleRevision: c } = await ar(e, t, n);
				if (!c) return null;
				const d = await n.ggirScorerReviews.get([e, t]);
				if (!s.active()) return null;
				i.throwIfAborted();
				if (d?.markerInputs === a && d.bundleRevision === c && (m = d, void 0 === s.correctedKey || 0 === m.edits.length || m.corrected?.key === s.correctedKey)) return r && Zi.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), d.current ?? null;
				var m;
				const p = await n.ggirResultsBundles.get(e);
				if (!p) return null;
				const { edits: g } = await rr(e, p.imported, new Map([...o].map(([e, t]) => [e, [t]])), l, i, s.api);
				if (!s.active()) return null;
				const f = mr(d, c, g), h = void 0 !== s.correctedKey && g.length > 0 && !p.ggirCorrections && !(f && d.corrected?.key === s.correctedKey), _ = g.length > 0 && (!f || h) ? u(p, await n.ggirResultsBlobs.get(e)) : p, w = f ? d.current : (await pr(_, o, l, g, i, void 0, s.api)).current;
				let v = f ? d.corrected : void 0;
				if (h) {
					const t = await n.ggirCorrectedValues.get(e);
					if (!t || t.key !== s.correctedKey) return null;
					const r = ae(_, t).find((e) => "corrected" === e.set), a = r && (await pr(r.bundle, o, l, g, i, void 0, s.api)).current;
					v = {
						key: t.key,
						...a ? { current: a } : {}
					};
				}
				i.throwIfAborted();
				const y = (/* @__PURE__ */ new Date()).toISOString();
				if (!s.active()) return null;
				const k = await j(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!s.active()) return null;
					const r = await ar(e, t, n);
					return r.markerInputs === a && r.bundleRevision === c && (0 === await n.ggirResultsBundles.where(":id").equals(e).count() ? null : (i.throwIfAborted(), await n.ggirScorerReviews.put({
						fileId: e,
						scorer: t,
						...w ? { current: w } : {},
						edits: g,
						markerInputs: a,
						bundleRevision: c,
						updatedAt: y,
						...v ? { corrected: v } : {}
					}), !0));
				}, i);
				return k ? (Zi.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), i.throwIfAborted(), w ?? _.imported) : (i.throwIfAborted(), !1 !== k && null);
			}(e, t, n, i.signal, r);
			return i.signal.throwIfAborted(), !1 !== o ? o : (a < 2 && s(a + 1, i.signal).catch((r) => tr(e, t, n, r, i.signal)), null);
		}
	});
	return s(0);
}
function ur(e, t) {
	return S({
		kind: f.GGIR_RECOVERY,
		key: f.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const i = () => !t.signal.aborted && e.isOpen() && b() === e;
			try {
				if (!i()) return;
				const s = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: a } = await import("./ggir-import-CoXrw_Cd.js").then((e) => e.t);
				for (const o of s) {
					if (t.signal.throwIfAborted(), !i()) return;
					try {
						const [s] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), a(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), c = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...s.map((e) => e.scorer)]);
						c.delete(q);
						for (const a of c) {
							if (!i()) return;
							try {
								const n = er(o, a, e);
								if (!n) {
									const { markerInputs: t, bundleRevision: n } = await ar(o, a, e), i = s.find((e) => e.scorer === a);
									if (n && i?.markerInputs === t && i.bundleRevision === n) continue;
								}
								await cr(o, a, e, t.signal, n);
							} catch (r) {
								n = !0, tr(o, a, e, r, t.signal);
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
				const r = Object.values(w.getState().jobs).filter((t) => h(t) && t.workspaceId === e.name && t.kind === f.GGIR_RECOMPUTE && t.status === _.FAILED);
				for (const t of r) {
					const r = t.key.slice(f.GGIR_RECOMPUTE.length + 1);
					if (!i()) break;
					const s = r.indexOf(":"), a = Number(r.slice(0, s)), o = JSON.parse(r.slice(s + 1));
					try {
						await e.transaction("r", e.ggirResultsBundles, e.markers, e.ggirScorerReviews, async () => {
							if (!i()) return;
							const [n, r, s] = await Promise.all([
								e.ggirResultsBundles.where(":id").equals(a).count(),
								e.markers.where("fileId").equals(a).filter((e) => e.username === o).count(),
								e.ggirScorerReviews.where("[fileId+scorer]").equals([a, o]).count()
							]);
							i() && (0 === n || 0 === r && 0 === s) && (w.getState().dismiss(t.id), Zi.dispatchEvent(new CustomEvent("updated", { detail: {
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
var dr = class extends Error {
	constructor() {
		super("a night of this recording was edited during the export; export again");
	}
};
function mr(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
async function pr(e, t, n = [], i, r, a, o) {
	const l = i ?? await sr(e.imported, t, n, r, o);
	let c;
	r?.throwIfAborted();
	const u = a?.review;
	if (mr(u, a?.bundleRevision, l)) c = u.current;
	else {
		if (a && l.length > 0 && !e.part1) throw new dr();
		if (l.length > 0 && e.ms2 && e.ms3) {
			const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), i = t(e.ms3), a = t(e.ms4), u = t(e.ms5), d = t(e.sleeplogRData), m = (t) => t.reviewGgirResults({
				part1: new Uint8Array(e.part1),
				configCsv: e.configCsv,
				recordingId: s(e.recordingFile),
				...n ? { ms2: n } : {},
				...i ? { ms3: i } : {},
				...a ? { ms4: a } : {},
				...u ? { ms5: u } : {},
				...d ? { sleeplogRData: d } : {},
				...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
				edits: l,
				...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
				...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
				crossCheck: !1
			});
			c = te(await (o ? m(o) : k(r, m)));
		}
	}
	r?.throwIfAborted();
	const d = Object.getOwnPropertyDescriptors(e);
	return delete d.current, Reflect.deleteProperty(d, "edits"), Object.defineProperties({
		...c ? { current: c } : {},
		edits: l
	}, d);
}
const gr = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], fr = [
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
], hr = [
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
], _r = [
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
], wr = ["fileId", ...o], vr = {
	files: [
		...gr,
		"ggirTimezone",
		"recording",
		"ggirClockSteps",
		"sourceType",
		"sourceProfileId",
		"navigationFacts"
	],
	markers: fr,
	activityDays: hr,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: _r,
	actiwareFileData: [
		"fileId",
		"actiwareIntervals",
		"actiwareStatistics"
	]
}, yr = {
	files: [...gr, "ggirClockSteps"],
	markers: fr,
	activityDays: hr,
	ggirResultsBundles: _r,
	ggirResultsBlobs: wr,
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
}, br = {
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
		v
	]
}, kr = "Also export corrected values was off at export", Tr = {
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
}, Mr = {
	sleep: vr,
	nonwear: vr,
	summary: vr,
	wide: vr,
	circadian: {
		files: gr,
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
	ggirReport: yr,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: fr,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: [
			...gr,
			"sourceType",
			"sourceProfileId"
		],
		markers: fr,
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
		files: gr,
		markers: fr,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: br,
	audit: Tr,
	physicalActivity: {
		files: [
			...gr,
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
		markers: fr,
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
}, Ir = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap();
function Ar(e) {
	if (!e || "object" != typeof e) return e;
	const t = Sr.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return function(e, t, n, i) {
			for (let r = 0; r < n.byteLength;) {
				const t = n.subarray(r, r + dn), s = e.read(t, { at: i + r });
				if (!Number.isInteger(s) || s <= 0 || s > t.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
				r += s;
			}
		}(t.store, 0, e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(Ar) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ar(t)])) : structuredClone(e);
}
function xr(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(xr), Object.freeze(e)), e;
}
function Rr(e) {
	return function(e) {
		const t = Object.freeze({ files: xr((e.files ?? []).map((e) => Object.fromEntries(gr.map((t) => [t, Ar(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
		return Ir.set(t, e), t;
	}(e);
}
var Nr = class extends Error {};
function $r(e, t, n) {
	const i = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new Nr(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (i(t), Reflect.get(e, t, n)),
		has: (e, t) => (i(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (i(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function Er(e, t, n = []) {
	const i = Ir.get(e);
	if (!i) throw new Nr("Export requires a captured input snapshot");
	const r = Object.entries(Mr).find(([, e]) => e === t)?.[0];
	if (!r) throw new Nr("Export producer has no registered input declaration");
	const s = {};
	for (const [a, o] of Object.entries(t)) {
		const e = i[a].filter((e) => !n.length || "studySettings" === a || n.includes("files" === a ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const i of o.filter((e) => e in t)) Object.defineProperty(n, i, {
				enumerable: !0,
				get: () => xr(Ar(t[i]))
			});
			return $r(n, o, `${r}: undeclared field ${a}.`);
		});
		Object.assign(s, { [a]: Object.freeze(e) });
	}
	return $r(s, Object.keys(t), `${r}: undeclared table `);
}
function Or(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	for (const r of e.markers) {
		if (r.fileId !== t || r.username !== n) continue;
		const e = J(r), s = i.get(r.date) ?? [];
		s.push(e), i.set(r.date, s);
	}
	return i;
}
function Cr(e, t, n) {
	return new Map([...Or(e, t, n)].sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => [e, B(t)]));
}
function Dr(e, t, n) {
	return new Map([...Or(e, t, n)].flatMap(([e, t]) => {
		const n = B(t.filter(l));
		return n ? [[e, n]] : [];
	}));
}
const jr = /* @__PURE__ */ new WeakMap(), Fr = 4;
function Lr(e, t, n, i) {
	let r = jr.get(e);
	r || (r = /* @__PURE__ */ new Map(), jr.set(e, r));
	const s = JSON.stringify([t, n]);
	let a = r.get(s);
	if (!a) {
		for (; r.size >= Fr;) r.delete(r.keys().next().value);
		a = async function(e, t, n, i) {
			const r = Er(e, Mr.ggirReport, [t]), s = r.files.find((e) => e.id === t), a = r.ggirResultsBundles.find((e) => e.fileId === t), o = a && u(a, r.ggirResultsBlobs.find((e) => e.fileId === t)), l = Or(r, t, n), c = o ? await rr(t, o.imported, l, s.ggirClockSteps, i) : void 0, d = c?.markersByAlgo ?? l, m = c?.selected ?? new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), p = new Set([...m].filter(([, e]) => "invalid" === Q(void 0, e).kind).map(([e]) => e)), g = r.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n), f = {
				review: g,
				bundleRevision: s.ggirBundleRevision
			}, h = o ? await pr(o, m, s.ggirClockSteps, c?.edits, i, f) : void 0, _ = h ? await Br(h, p, i) : void 0, w = r.ggirCorrectedValues.find((e) => e.fileId === t), v = g?.corrected && w && g.corrected.key === w.key ? {
				review: {
					edits: g.edits,
					bundleRevision: g.bundleRevision,
					...g.corrected.current ? { current: g.corrected.current } : {}
				},
				bundleRevision: s.ggirBundleRevision
			} : void 0;
			return {
				markersByAlgo: d,
				selected: m,
				bundle: _,
				sets: o && h ? await Promise.all(ae(o, w, w?.notApplied !== kr).map(async ({ set: e, bundle: t }) => t === o ? _ : Br(await pr(t, m, s.ggirClockSteps, h.edits, i, "corrected" === e ? v : void 0), p, i))) : [],
				invalidDates: p
			};
		}(e, t, n, i), r.set(s, a), a.catch(() => {
			r.get(s) === a && r.delete(s);
		});
	}
	return a;
}
let Pr;
async function Br(e, t, n) {
	const { ggirCell: i, ggirNum: r } = await import("./ggir-results-types-Ce913aBc.js").then((e) => e.i), s = e.part2Reports?.["part2_daysummary.csv"], a = /* @__PURE__ */ new Map();
	if (s) for (let u = 0; u < s.rows; u++) {
		const e = i(s, R.ggir_id.header, u), t = Tn(i(s, R.ggir_calendar_date.header, u));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		a.set(n, a.has(n) ? null : u);
	}
	const o = Mn(e.imported, "nights"), l = R.ggir_nonwear_perc_spt.header, c = async (t) => {
		const c = t.nights, u = Array.from({ length: c.rows }, (e, t) => {
			const n = i(c, R.ggir_id.header, t), l = a.get(JSON.stringify([null == n ? null : String(n), o(c, t, !1)])), u = s && null != l;
			return {
				id: n,
				day: l,
				valid: u ? i(s, R.ggir_day_valid_hours.header, l) : null,
				hours: u ? i(s, R.ggir_day_hours.header, l) : null,
				validNumber: u ? r(s, R.ggir_day_valid_hours.header, l) : null,
				hoursNumber: u ? r(s, R.ggir_day_hours.header, l) : null
			};
		}), d = u.flatMap((e, t) => null != e.validNumber && null != e.hoursNumber ? [{
			index: t,
			valid: e.validNumber,
			hours: e.hoursNumber
		}] : []), m = /* @__PURE__ */ new Map();
		if (d.length > 0) {
			const e = await A(n).ggirDayValidFractions(Float64Array.from(d, (e) => e.valid), Float64Array.from(d, (e) => e.hours));
			d.forEach((t, n) => m.set(t.index, e[n] ?? null));
		}
		const p = !c.columns.includes(l) && u.some((e, n) => !t.nightRecomputed[n]) ? await function(e, t) {
			const n = e.cleanedNightsCsv;
			if (!n) return Promise.resolve(void 0);
			if (Pr?.csv !== n || Pr.config !== e.configCsv) {
				const i = A(t).readGgirReportCsv(n, e.configCsv);
				Pr = {
					csv: n,
					config: e.configCsv,
					table: i
				}, i.catch(() => {
					Pr?.table === i && (Pr = void 0);
				});
			}
			return Pr.table;
		}(e, n) : void 0, g = u.map(({ id: e, day: n, valid: a, hours: o, validNumber: u, hoursNumber: d }, g) => {
			const f = m.get(g) ?? null, h = r(c, R.ggir_night.header, g), _ = Array.from({ length: t.days.rows }, (e, t) => t).find((e) => "WW" === i(t.days, "window", e) && r(t.days, "night_number", e) === h), w = p ? Array.from({ length: p.rows }, (e, t) => t).find((t) => String(i(p, R.ggir_id.header, t)) === String(e) && r(p, R.ggir_night.header, t) === h) : void 0, v = {
				ggir_nonwear_perc_spt: t.nightRecomputed[g] ? void 0 === _ ? null : i(t.days, l, _) : c.columns.includes(l) ? i(c, l, g) : p?.columns.includes(l) && void 0 !== w ? i(p, l, w) : void 0 === _ ? null : i(t.days, l, _),
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
		}), f = N.ggir_review_night_extension, h = [.../* @__PURE__ */ new Set([
			...c.columns,
			...f.map((e) => R[e].header),
			...f.map((e) => R[e].header + "_missing_reason")
		])], _ = h.map((e) => {
			const t = f.find((t) => R[t].header + "_missing_reason" === e);
			if (t) return g.map((e) => e.reasons[t] ?? null);
			const n = f.find((t) => R[t].header === e);
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
		...e.personReports && (e.edits.length > 0 || t.size > 0) ? { personRecomputed: await xn(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await c(e.imported),
		...e.current ? { current: await c(e.current) } : {}
	};
}
function Wr(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
async function zr(e, t, n, { signal: r } = {}) {
	r?.throwIfAborted();
	const s = e.files.filter((e) => t.includes(e.id)), a = s.map((e) => e.id), o = /* @__PURE__ */ new Map();
	let c = !1;
	try {
		const t = await function(e, { fileIds: t, dateRange: n, signal: i }) {
			const r = Er(e, Mr.circadian, t);
			return async function(e, t, { dateRange: n, signal: i }) {
				const r = A(i), s = [];
				let a = 0;
				for (const o of e) {
					if (!o.id) continue;
					i?.throwIfAborted();
					const e = await t(o.id), l = [];
					for (const t of e.values()) {
						if (i?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
						a += 1;
						const e = pt(o.id, t);
						e && l.push(e);
					}
					if (0 === l.length) continue;
					const { request: c, transfer: u } = mt(l.map((e) => e.wire)), d = await r.computeCircadian(p(c, u));
					i?.throwIfAborted();
					const m = new Map(l.map((e) => [e.wire.id, e.source]));
					for (const t of d.day_summaries) {
						const e = m.get(t.id);
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
			}(t.length > 0 ? r.files.filter((e) => null != e.id && t.includes(e.id)) : r.files, (e) => Wr(r, e), {
				dateRange: n,
				signal: i
			});
		}(e, {
			fileIds: a,
			dateRange: n.dateRange,
			signal: r
		});
		for (const e of t.daySummaries) o.set(`${e.fileId}|${e.date}`, {
			l5Hour: e.l5Hour,
			m10Hour: e.m10Hour
		});
	} catch (g) {
		if (g instanceof Nr) throw g;
		if (r?.throwIfAborted(), c = !0, g instanceof DOMException && "AbortError" === g.name) throw g;
	}
	const u = await Gr(s[0].filename, "computing its sleep rows", () => async function(e, t, n, r, s, a, o) {
		const c = s && s.trim().length > 0 ? s.trim() : null, u = Er(a, Mr.sleep, e), d = u.files, m = vt(u.studySettings[0]?.extraSettings), p = he(u.studySettings[0]?.extraSettings?.analysis_paradigm), g = (e.length > 0 ? d.filter((t) => null != t.id && e.includes(t.id)) : [...d]).sort((e, t) => e.filename.localeCompare(t.filename)), [f, h] = n ?? ["", ""], _ = [], w = [], v = [], y = [], b = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), T = async () => {
			for (const [e, t] of b) k.set(e, await Gi(e, t, _, o));
			b.clear();
		}, M = /* @__PURE__ */ new Map(), I = (e) => {
			const t = JSON.stringify(e);
			let n = M.get(t);
			return n || (n = A(o).exportNapAggregate(e), M.set(t, n)), n;
		}, S = await Promise.all(g.map((e) => Lr(a, e.id, t, o)));
		for (const [N, $] of g.entries()) {
			if (o?.throwIfAborted(), N > 0 && g[N - 1].filename !== $.filename && await T(), !$.id) continue;
			const e = Wr(u, $.id), { bundle: t, markersByAlgo: s } = S[N], a = t?.edits ?? [], d = t ? re(t.imported) : [], { zone: k } = await Tt($, m, o), M = [.../* @__PURE__ */ new Set([...$.availableDates, ...d.map((e) => e.nightDate)])].sort(), x = n ? M.filter((e) => e >= f && e <= h) : M;
			if (t) {
				const e = new Set(ie(t.imported).map((e) => e.night));
				for (const n of d) {
					if (e.has(n.night) || !x.includes(n.nightDate)) continue;
					const i = Q(n, s.get(n.nightDate)?.[0]).kind;
					"scored" !== i && "invalid" !== i && v.push({
						file: "sleep_export.csv",
						row: 0,
						key: `${R.filename.header}=${$.filename}|${R.study_date.header}=${n.nightDate}`,
						column: `GGIR night ${String(n.night)}: ${ne(t.imported, n.night)}`,
						reason: "ggir_night_excluded"
					});
				}
			}
			const E = W(e.values()), O = _e($, p) ? u.actiwareFileData.find((e) => e.fileId === $.id) ?? null : null, D = O?.actiwareIntervals ?? null, j = x.flatMap((e) => (s.get(e) ?? []).filter((e) => l(e) || e.nonwearMarkers.length > 0).map((t) => ({
				markers: t,
				sleepPeriods: D ? Si(D, e, t.isInvalidNight) : t.sleepMarkers,
				nonwear: t.nonwearMarkers.map((e) => ({
					start: e.startTimestamp,
					end: e.endTimestamp
				}))
			}))), F = [...e.keys()].sort().map((t) => e.get(t)), L = F.map((e) => H(e).timestamps), P = Di.flatMap((e) => {
				if (!F.some((t) => t[e])) return [];
				const t = [], n = [];
				for (const [i, r] of F.entries()) {
					const s = r[e];
					if (!s) continue;
					const a = new Float64Array(s), o = L[i];
					for (let e = 0; e < Math.min(a.length, o.length); e++) t.push(o[e]), n.push(a[e]);
				}
				return [{
					field: e,
					timestamps: Float64Array.from(t),
					values: Float64Array.from(n)
				}];
			}), B = 0 === j.length ? [] : await A(o).exportFileNightFigures(j.map(({ sleepPeriods: e, nonwear: t }) => ({
				periods: e.map((e) => ({
					start: e.onsetTimestamp,
					end: e.offsetTimestamp
				})),
				nonwear: t
			})), P), z = /* @__PURE__ */ new Map();
			let G = 0;
			for (const n of j) z.set(n.markers, {
				...n,
				figures: B.slice(G, G + n.sleepPeriods.length)
			}), G += n.sleepPeriods.length;
			for (const n of x) {
				o?.throwIfAborted();
				const l = s.get(n);
				if (l && 0 !== l.length) for (const s of l) {
					const l = z.get(s);
					if (!l) continue;
					const { sleepPeriods: u, figures: m } = l, p = $.participantId ?? null, g = $.id, f = s.algorithm ?? null, h = s.username ?? null, v = s.needsConsensus, T = s.notes, M = e.get(n), S = await C(n, $.navigationFacts, A(o)), x = e.get(S), N = {
						fileId: g,
						filename: $.filename,
						participantId: p,
						studyDate: n,
						algorithm: f,
						scoredBy: h,
						needsConsensus: v,
						notes: T,
						meanTemperature: null,
						meanWhiteLight: null,
						meanRedLight: null,
						meanGreenLight: null,
						meanBlueLight: null,
						detectionRule: s.detectionRule ?? null,
						periodGuider: s.periodGuider ?? null,
						...Li(s.sleepPeriodDetectionConfig),
						algorithmVersion: s.algorithmVersion ?? null,
						verificationStatus: null,
						studyId: c,
						dstTransition: await Me(k, n, void 0, A(o))
					}, j = await I(u.filter((e) => e.markerType === i.NAP).map((e) => ({
						start: e.onsetTimestamp,
						end: e.offsetTimestamp
					}))), F = r?.get(`${String(g)}|${n}`), L = {
						l5Hour: F?.l5Hour ?? null,
						m10Hour: F?.m10Hour ?? null,
						napCount: j.napCount,
						totalNapMinutes: j.napCount > 0 ? j.totalNapMinutes : null
					}, B = E(f), W = ht(M, B), G = `${$.filename}\0${p ?? ""}\0${N.algorithm ?? ""}\0${N.detectionRule ?? ""}`, U = b.get(G) ?? [];
					U.push({
						date: n,
						epochLengthSeconds: $.epochLengthSeconds || 60,
						timestamps: W.timestamps,
						states: W.algorithmResults,
						stale: "stale" === B.status
					}), b.set(G, U);
					const V = H(M), K = await Ct(e, n, B, {
						signal: o,
						nextDate: S
					}), q = m.map(({ means: e }) => new Map(P.map(({ field: t }, n) => [t, e[n] ?? null]))), J = async (e, r, l) => {
						let c = null;
						const u = d.find((e) => e.nightDate === n), p = t && u && e.markerType === i.MAIN_SLEEP && "invalid" !== Q(u, s).kind, g = u && a.some((e) => e.night === u.night), f = Pi(null), h = {};
						let _ = "not_applicable_to_row";
						const w = D && null != e.onsetTimestamp && null != e.offsetTimestamp ? {
							onset: e.onsetTimestamp,
							offset: e.offsetTimestamp
						} : null, v = w ? D.find((e) => "rest" === e.kind && e.startTimestamp <= w.onset && e.endTimestamp >= w.offset) ?? null : null;
						if (w) {
							_ = "not_computed_for_export";
							const e = (e, t) => t ? O?.actiwareStatistics?.find((n) => n.kind === e && Math.round(n.startTimestamp) === Math.round(t.startTimestamp) && Math.round(n.endTimestamp) === Math.round(t.endTimestamp)) ?? null : null, t = {
								rest: e("rest", v),
								sleep: e("sleep", {
									startTimestamp: w.onset,
									endTimestamp: w.offset
								})
							};
							for (const [n, i, r, s] of Wi) {
								const e = t[i]?.[r] ?? null;
								f[n] = e, h[s] = null == e ? t[i] ? "source_reported_missing" : "not_computed_for_export" : void 0;
							}
						}
						if (!p && !w && e.onsetTimestamp && e.offsetTimestamp) {
							const { timestamps: t, algorithmResults: n, activity: i, scoresStale: r } = K;
							if (null !== r && 0 === y.length && y.push({
								component: "metric_computation",
								code: "unavailable",
								message: r
							}), _ = null !== r ? "scores_from_another_config" : null == n ? "no_scored_epochs" : null == i ? "channel_unavailable" : 0 === t.length ? "no_valid_epochs" : void 0, null != n && t.length > 0 && (null != i || V.ggir)) {
								const r = V.ggir ? V.epochSec : $.epochLengthSeconds || 60, s = await zi(n, i, t, e.onsetTimestamp, e.offsetTimestamp, r, o);
								c = s.metrics, c || s.error || (_ = "no_valid_epochs"), s.error && (_ = "not_computed_for_export"), s.error && 0 === y.length && y.push({
									component: "metric_computation",
									code: "unavailable",
									message: "Metric computation failed for at least one selected period; those rows carry no numerics."
								});
							}
						}
						if (p) {
							_ = "channel_unavailable";
							const e = g ? t.current?.nights : t.imported.nights, n = e ? xe(e, R.ggir_night.header, u.night) : -1;
							for (const [t, i, r, s] of Bi) {
								const a = e ? Ae(e, R[i].header, n) : null;
								f[t] = null == a ? null : a * s, h[r] = null == a ? g ? "not_computed_for_export" : "source_reported_missing" : void 0;
							}
						}
						(p || w || c && !("averageAwakeningLengthMinutes" in c)) && (h.average_awakening_length_minutes = "not_computed_for_export");
						const { figures: b } = m[l], k = Boolean(e.onsetTimestamp && e.offsetTimestamp), T = (e) => k ? q[l].get(e) ?? null : null, I = {
							...N,
							...L,
							periodIndex: e.markerIndex,
							markerType: e.markerType,
							onsetTimestamp: e.onsetTimestamp,
							offsetTimestamp: e.offsetTimestamp,
							...p || w ? f : Pi(c),
							inBedTimestamp: v?.startTimestamp ?? null,
							outOfBedTimestamp: v?.endTimestamp ?? null,
							metricMissingReason: _,
							isInvalidNight: r,
							meanTemperature: T("temperature"),
							meanWhiteLight: T("lux"),
							meanRedLight: T("redLight"),
							meanGreenLight: T("greenLight"),
							meanBlueLight: T("blueLight"),
							sleepMidpointTimestamp: k ? b.midpointTimestamp : null,
							sleepMidpointHour: k ? b.midpointClockHour : null,
							validWearMinutes: b.validWearMinutes
						}, S = (e, t) => null != e ? void 0 : k ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
						return I.sensorMissingReasons = {
							mean_temperature_c: S(I.meanTemperature, Boolean(M?.temperature || x?.temperature)),
							mean_white_light_lux: S(I.meanWhiteLight, Boolean(M?.lux || x?.lux)),
							mean_red_light: S(I.meanRedLight, Boolean(M?.redLight || x?.redLight)),
							mean_green_light: S(I.meanGreenLight, Boolean(M?.greenLight || x?.greenLight)),
							mean_blue_light: S(I.meanBlueLight, Boolean(M?.blueLight || x?.blueLight))
						}, I.derivedMissingReasons = {
							...h,
							l5_hour: null == I.l5Hour ? F ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							m10_hour: null == I.m10Hour ? F ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							sleep_midpoint_time: null == I.sleepMidpointTimestamp ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							sleep_midpoint_hour: null == I.sleepMidpointHour ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							valid_wear_minutes: null == I.validWearMinutes ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0
						}, I;
					};
					if (s.isInvalidNight) {
						_.push({
							...N,
							...L,
							periodIndex: null,
							markerType: ji,
							onsetTimestamp: null,
							offsetTimestamp: null,
							...Pi(null),
							isInvalidNight: !0,
							sleepMidpointTimestamp: null,
							sleepMidpointHour: null,
							validWearMinutes: null
						});
						for (const [e, t] of u.entries()) _.push(await J(t, !0, e));
					} else for (const [e, t] of u.entries()) _.push(await J(t, !1, e));
					for (const e of s.nonwearMarkers) w.push({
						...N,
						...L,
						periodIndex: e.markerIndex ?? 0,
						markerType: Fi,
						onsetTimestamp: e.startTimestamp,
						offsetTimestamp: e.endTimestamp,
						...Pi(null),
						isInvalidNight: !1,
						sleepMidpointTimestamp: null,
						sleepMidpointHour: null,
						validWearMinutes: null
					});
				}
			}
		}
		await T(), _.sort(Hi), w.sort(Hi);
		const x = await async function(e, t) {
			const n = e.filter((e) => e.markerType === i.MAIN_SLEEP), r = /* @__PURE__ */ new Map();
			for (const i of n) {
				const e = `${i.filename}\0${i.participantId ?? ""}\0${i.algorithm ?? ""}\0${i.detectionRule ?? ""}`, t = r.get(e);
				t ? t.push(i) : r.set(e, [i]);
			}
			const s = [...r], a = await A(t).summarizeExportGroups(s.map(([, e]) => e.map((e) => ({
				study_date: e.studyDate,
				total_nap_minutes: e.totalNapMinutes,
				values: Ui.map(([, t]) => e[t])
			})))), o = s.map(([e, t], n) => {
				const [i, r, s, o] = e.split("\0"), l = a[n], c = Object.fromEntries(Ui.map(([e], t) => [e, l.means[t] ?? null]));
				return {
					filename: i,
					participantId: r,
					algorithm: s,
					detectionRule: o,
					nNights: l.nNights,
					...c,
					meanTemperatureMissingReason: null == c.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
					metricMissingReasons: Object.fromEntries(Ui.map(([e, n]) => {
						const i = Vi[e], r = Bi.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : i), s = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[r] ?? e.metricMissingReason).find(Boolean);
						return [i, null == c[e] ? s : void 0];
					})),
					sleepRegularityIndex: null,
					meanTotalNapMinutes: l.meanTotalNapMinutes,
					studyId: t[0]?.studyId ?? null
				};
			});
			return o.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), o;
		}(_, o);
		for (const i of x) {
			const e = `${i.filename}\0${i.participantId}\0${i.algorithm}\0${i.detectionRule}`, t = k.get(e);
			i.sleepRegularityIndex = t?.sri ?? null, i.sleepRegularityMissingReason = t?.sriMissingReason ?? (t ? void 0 : "not_computed_for_export");
		}
		return {
			sleepRows: _,
			nonwearRows: w,
			summaryRows: x,
			degradations: y,
			nightReasons: v
		};
	}(a, n.username, n.dateRange, o, n.studyId, e, r)), d = await Gr(s[0].filename, "drawing its visual report", async () => {
		const t = [];
		for (const i of s) t.push(await Vn({
			...n,
			snapshot: e
		}, i, r));
		return t;
	}), { generateLocalPhysicalActivityExportRows: m } = await import("./local-physical-activity-export-CXvYYnaj.js");
	return {
		part: u,
		physicalActivityRows: await m(e, a, n.dateRange, {
			username: n.username,
			cutpointOverrides: n.physicalActivity.cutpointOverrides,
			maskPolicy: n.physicalActivity.maskPolicy,
			choiAxis: n.physicalActivity.choiAxis,
			exportedAt: n.exportedAt,
			...r ? { signal: r } : {}
		}),
		eventMarkerRows: await qi(a, n.dateRange, e, n.username, r),
		circadianDegraded: c,
		reports: d
	};
}
async function Gr(e, t, n) {
	try {
		return await n();
	} catch (i) {
		if (i instanceof DOMException && "AbortError" === i.name) throw i;
		throw new cn(e, t, i);
	}
}
d({
	async group(e, t, n) {
		try {
			return { result: await zr(Rr(t), e, n) };
		} catch (i) {
			if (i instanceof cn) return { failure: i.wire };
			throw i;
		}
	},
	deflate(e, t) {
		const n = function(e, t) {
			if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
			const n = [], i = new ct(t?.byteLength ? {
				level: 1,
				dictionary: t
			} : { level: 1 }, (e) => {
				n.push(e);
			});
			i.push(e, !1), i.flush(!1);
			const r = i.s.r ?? 0;
			if (!Number.isInteger(r) || r < 0 || r > 2047) throw new Error("ZIP compression state is unreadable.");
			const s = (7 & r) > 5 ? 2 : 1, a = new Uint8Array(s + 4);
			return a[0] = r >> 3, a[s + 2] = 255, a[s + 3] = 255, n.push(a), K(n);
		}(e, t);
		return p(n, [n.buffer]);
	}
});
export { mt as A, Kn as C, $t as D, Nt as E, Tt as O, mi as S, Rt as T, fi as _, Ji as a, ni as b, Ri as c, Ai as d, xi as f, Yn as g, Ci as h, Cr as i, pt as j, yt as k, Ni as l, $i as m, Er as n, lr as o, Oi as p, Wr as r, _i as s, Mr as t, Si as u, Zn as v, Et as w, pi as x, gi as y };
