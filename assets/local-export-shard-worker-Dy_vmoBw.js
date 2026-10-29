import { n as e, r as t, s as n, t as i } from "./ggir-results-types-WB8axvb-.js";
import { c as a, i as s, u as r } from "./workers-DuRiLciz.js";
import { Dt as o, It as l, Lt as u, Rt as c, a as d, h as m, l as p, o as g, qt as h, s as f, yn as _, zt as w } from "./schema-R3Hec65Z.js";
import { A as y, M as v, N as M, P as b, b as k, j as S, k as x, m as I } from "./nonwear-display-slots-Cb5jHt-m.js";
import { B as A, T as N, d as T } from "./platform-BjmjOECj.js";
import { a as R } from "./content-hash-B-at0sOp.js";
import { a as E, n as $, t as O } from "./background-jobs-GcVsceFL.js";
import { _ as D, g as C, m as L, t as B, v as P } from "./workspace-db-CLgHcFRW.js";
import { a as F } from "./project-revision-T37J4zgb.js";
import { A as W, C as j, F as G, Ht as U, Jt as z, Lt as H, M as q, N as V, S as K, Vt as J, W as Y, b as Z, en as Q, qt as X, z as ee } from "./store-CUWcR6kX.js";
import { B as te, j as ne, m as ie, u as ae } from "./night-session-registry-2_CA4YhC.js";
import { d as se, l as re, p as oe } from "./sleep-period-detection-B0F1Stob.js";
import "./audit-hash-BdWutkgc.js";
import { c as le, d as ue, h as ce, n as de, r as me, s as pe, u as ge } from "./ggir-results-import-BhGAnQS-.js";
import { E as he, N as fe, T as _e, c as we } from "./local-nonwear-unified-CUbsWMKA.js";
import { _ as ye, b as ve, g as Me, h as be, t as ke, v as Se, x as xe, y as Ie } from "./valid-day-criteria-CoLuPGEQ.js";
import { h as Ae, m as Ne, v as Te } from "./diary-local-import-contract-xrvtvr1H.js";
var Re = Uint8Array, Ee = Uint16Array, $e = Int32Array, Oe = new Re([
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
]), De = new Re([
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
]), Ce = new Re([
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
]), Le = function(e, t) {
	for (var n = new Ee(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
	var a = new $e(n[30]);
	for (i = 1; i < 30; ++i) for (var s = n[i]; s < n[i + 1]; ++s) a[s] = s - n[i] << 5 | i;
	return {
		b: n,
		r: a
	};
}, Be = Le(Oe, 2), Pe = Be.b, Fe = Be.r;
Pe[28] = 258, Fe[258] = 28;
for (var We = Le(De, 0), je = (We.b, We.r), Ge = new Ee(32768), Ue = 0; Ue < 32768; ++Ue) {
	var ze = (43690 & Ue) >> 1 | (21845 & Ue) << 1;
	ze = (61680 & (ze = (52428 & ze) >> 2 | (13107 & ze) << 2)) >> 4 | (3855 & ze) << 4, Ge[Ue] = ((65280 & ze) >> 8 | (255 & ze) << 8) >> 1;
}
var He = function(e, t, n) {
	for (var i = e.length, a = 0, s = new Ee(t); a < i; ++a) e[a] && ++s[e[a] - 1];
	var r, o = new Ee(t);
	for (a = 1; a < t; ++a) o[a] = o[a - 1] + s[a - 1] << 1;
	if (n) {
		r = new Ee(1 << t);
		var l = 15 - t;
		for (a = 0; a < i; ++a) if (e[a]) for (var u = a << 4 | e[a], c = t - e[a], d = o[e[a] - 1]++ << c, m = d | (1 << c) - 1; d <= m; ++d) r[Ge[d] >> l] = u;
	} else for (r = new Ee(i), a = 0; a < i; ++a) e[a] && (r[a] = Ge[o[e[a] - 1]++] >> 15 - e[a]);
	return r;
}, qe = new Re(288);
for (Ue = 0; Ue < 144; ++Ue) qe[Ue] = 8;
for (Ue = 144; Ue < 256; ++Ue) qe[Ue] = 9;
for (Ue = 256; Ue < 280; ++Ue) qe[Ue] = 7;
for (Ue = 280; Ue < 288; ++Ue) qe[Ue] = 8;
var Ve = new Re(32);
for (Ue = 0; Ue < 32; ++Ue) Ve[Ue] = 5;
var Ke = He(qe, 9, 0), Je = He(Ve, 5, 0), Ye = function(e) {
	return (e + 7) / 8 | 0;
}, Ze = [
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
	var i = new Error(t || Ze[e]);
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
	var a = n.length, s = n.slice();
	if (!a) return {
		t: lt,
		l: 0
	};
	if (1 == a) {
		var r = new Re(n[0].s + 1);
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
	}; c != a - 1;) o = n[n[u].f < n[d].f ? u++ : d++], l = n[u != c && n[u].f < n[d].f ? u++ : d++], n[c++] = {
		s: -1,
		f: o.f + l.f,
		l: o,
		r: l
	};
	var m = s[0].s;
	for (i = 1; i < a; ++i) s[i].s > m && (m = s[i].s);
	var p = new Ee(m + 1), g = nt(n[c - 1], p, 0);
	if (g > t) {
		i = 0;
		var h = 0, f = g - t, _ = 1 << f;
		for (s.sort(function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		}); i < a; ++i) {
			var w = s[i].s;
			if (!(p[w] > t)) break;
			h += _ - (1 << g - p[w]), p[w] = t;
		}
		for (h >>= f; h > 0;) {
			var y = s[i].s;
			p[y] < t ? h -= 1 << t - p[y]++ - 1 : ++i;
		}
		for (; i >= 0 && h; --i) {
			var v = s[i].s;
			p[v] == t && (--p[v], ++h);
		}
		g = t;
	}
	return {
		t: new Re(p),
		l: g
	};
}, nt = function(e, t, n) {
	return -1 == e.s ? Math.max(nt(e.l, t, n + 1), nt(e.r, t, n + 1)) : t[e.s] = n;
}, it = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new Ee(++t), i = 0, a = e[0], s = 1, r = function(e) {
		n[i++] = e;
	}, o = 1; o <= t; ++o) if (e[o] == a && o != t) ++s;
	else {
		if (!a && s > 2) {
			for (; s > 138; s -= 138) r(32754);
			s > 2 && (r(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0);
		} else if (s > 3) {
			for (r(a), --s; s > 6; s -= 6) r(8304);
			s > 2 && (r(s - 3 << 5 | 8208), s = 0);
		}
		for (; s--;) r(a);
		s = 1, a = e[o];
	}
	return {
		c: n.subarray(0, i),
		n: t
	};
}, at = function(e, t) {
	for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
	return n;
}, st = function(e, t, n) {
	var i = n.length, a = Ye(t + 2);
	e[a] = 255 & i, e[a + 1] = i >> 8, e[a + 2] = 255 ^ e[a], e[a + 3] = 255 ^ e[a + 1];
	for (var s = 0; s < i; ++s) e[a + s + 4] = n[s];
	return 8 * (a + 4 + i);
}, rt = function(e, t, n, i, a, s, r, o, l, u, c) {
	Xe(t, c++, n), ++a[256];
	for (var d = tt(a, 15), m = d.t, p = d.l, g = tt(s, 15), h = g.t, f = g.l, _ = it(m), w = _.c, y = _.n, v = it(h), M = v.c, b = v.n, k = new Ee(19), S = 0; S < w.length; ++S) ++k[31 & w[S]];
	for (S = 0; S < M.length; ++S) ++k[31 & M[S]];
	for (var x = tt(k, 7), I = x.t, A = x.l, N = 19; N > 4 && !I[Ce[N - 1]]; --N);
	var T, R, E, $, O = u + 5 << 3, D = at(a, qe) + at(s, Ve) + r, C = at(a, m) + at(s, h) + r + 14 + 3 * N + at(k, I) + 2 * k[16] + 3 * k[17] + 7 * k[18];
	if (l >= 0 && O <= D && O <= C) return st(t, c, e.subarray(l, l + u));
	if (Xe(t, c, 1 + (C < D)), c += 2, C < D) {
		T = He(m, p, 0), R = m, E = He(h, f, 0), $ = h;
		var L = He(I, A, 0);
		for (Xe(t, c, y - 257), Xe(t, c + 5, b - 1), Xe(t, c + 10, N - 4), c += 14, S = 0; S < N; ++S) Xe(t, c + 3 * S, I[Ce[S]]);
		c += 3 * N;
		for (var B = [w, M], P = 0; P < 2; ++P) {
			var F = B[P];
			for (S = 0; S < F.length; ++S) {
				var W = 31 & F[S];
				Xe(t, c, L[W]), c += I[W], W > 15 && (Xe(t, c, F[S] >> 5 & 127), c += F[S] >> 12);
			}
		}
	} else T = Ke, R = qe, E = Je, $ = Ve;
	for (S = 0; S < o; ++S) {
		var j = i[S];
		if (j > 255) {
			et(t, c, T[257 + (W = j >> 18 & 31)]), c += R[W + 257], W > 7 && (Xe(t, c, j >> 23 & 31), c += Oe[W]);
			var G = 31 & j;
			et(t, c, E[G]), c += $[G], G > 3 && (et(t, c, j >> 5 & 8191), c += De[G]);
		} else et(t, c, T[j]), c += R[j];
	}
	return et(t, c, T[256]), c + R[256];
}, ot = new $e([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), lt = new Re(0), ut = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new Re(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, i, a) {
			if (!a && (a = { l: 1 }, t.dictionary)) {
				var s = t.dictionary.subarray(-32768), r = new Re(s.length + e.length);
				r.set(s), r.set(e, s.length), e = r, a.w = s.length;
			}
			return function(e, t, n, i, a, s) {
				var r = s.z || e.length, o = new Re(i + r + 5 * (1 + Math.ceil(r / 7e3)) + a), l = o.subarray(i, o.length - a), u = s.l, c = 7 & (s.r || 0);
				if (t) {
					c && (l[0] = s.r >> 3);
					for (var d = ot[t - 1], m = d >> 13, p = 8191 & d, g = (1 << n) - 1, h = s.p || new Ee(32768), f = s.h || new Ee(g + 1), _ = Math.ceil(n / 3), w = 2 * _, y = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, v = new $e(25e3), M = new Ee(288), b = new Ee(32), k = 0, S = 0, x = s.i || 0, I = 0, A = s.w || 0, N = 0; x + 2 < r; ++x) {
						var T = y(x), R = 32767 & x, E = f[T];
						if (h[R] = E, f[T] = R, A <= x) {
							var $ = r - x;
							if ((k > 7e3 || I > 24576) && ($ > 423 || !u)) {
								c = rt(e, l, 0, v, M, b, S, I, N, x - N, c), I = k = S = 0, N = x;
								for (var O = 0; O < 286; ++O) M[O] = 0;
								for (O = 0; O < 30; ++O) b[O] = 0;
							}
							var D = 2, C = 0, L = p, B = R - E & 32767;
							if ($ > 2 && T == y(x - B)) for (var P = Math.min(m, $) - 1, F = Math.min(32767, x), W = Math.min(258, $); B <= F && --L && R != E;) {
								if (e[x + D] == e[x + D - B]) {
									for (var j = 0; j < W && e[x + j] == e[x + j - B]; ++j);
									if (j > D) {
										if (D = j, C = B, j > P) break;
										var G = Math.min(B, j - 2), U = 0;
										for (O = 0; O < G; ++O) {
											var z = x - B + O & 32767, H = z - h[z] & 32767;
											H > U && (U = H, E = z);
										}
									}
								}
								B += (R = E) - (E = h[R]) & 32767;
							}
							if (C) {
								v[I++] = 268435456 | Fe[D] << 18 | je[C];
								var q = 31 & Fe[D], V = 31 & je[C];
								S += Oe[q] + De[V], ++M[257 + q], ++b[V], A = x + D, ++k;
							} else v[I++] = e[x], ++M[e[x]];
						}
					}
					for (x = Math.max(x, A); x < r; ++x) v[I++] = e[x], ++M[e[x]];
					c = rt(e, l, u, v, M, b, S, I, N, x - N, c), u || (s.r = 7 & c | l[c / 8 | 0] << 3, c -= 7, s.h = f, s.p = h, s.i = x, s.w = A);
				} else {
					for (x = s.w || 0; x < r + u; x += 65535) {
						var K = x + 65535;
						K >= r && (l[c / 8 | 0] = u, K = r), c = st(l, c + 1, e.subarray(x, K));
					}
					s.i = r;
				}
				return function(e, t, n) {
					return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new Re(e.subarray(t, n));
				}(o, 0, i + Ye(c) + a);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? a.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, 0, 0, a);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || Qe(5), this.s.l && Qe(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var i = new Re(-32768 & n);
				i.set(this.b.subarray(0, this.s.z)), this.b = i;
			}
			var a = this.b.length - this.s.z;
			this.b.set(e.subarray(0, a), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(a), 32768), this.s.z = e.length - a + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = lt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || Qe(5), this.s.l && Qe(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new Re(6);
			t[0] = this.s.r >> 3;
			var n = st(t, this.s.r, lt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), ct = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	ct.decode(lt, { stream: !0 });
} catch (Ia) {}
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
		for (const [r, o] of e.entries()) n[r + 1] = n[r] + (o[t]?.length ?? 0);
		const i = "sleep_scores" === t ? Uint8Array : Float64Array, a = e[0]?.[t], s = 1 === e.length && a instanceof i ? a : new i(n[e.length]);
		if (s !== a) for (const [r, o] of e.entries()) s.set(o[t] ?? [], n[r]);
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
		const i = new Float64Array(e.timestamps), a = new Float64Array(e.vectorMagnitude);
		return i.length > 0 && a.length > 0 ? {
			timestamps: i,
			signal: a,
			source: "vector_magnitude"
		} : null;
	}(t);
	if (!n || n.timestamps.length < 2) return null;
	const { timestamps: i, signal: a } = n, s = i[1] - i[0];
	if (!(s > 0 && Number.isInteger(s))) return null;
	for (let r = 1; r < i.length; r++) if (i[r] - i[r - 1] !== s) return null;
	return {
		wire: {
			id: `${String(e)}:${t.date}`,
			series_id: String(e),
			analysis_date: t.date,
			epoch_length_seconds: s,
			timestamps: i,
			activity: a
		},
		source: n.source
	};
}
async function gt(e, t, n, i, a = 60, s, r) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == i || n >= i) return null;
	const o = new Uint8Array(e.length);
	for (let u = 0; u < e.length; u++) o[u] = 1 === e[u] ? 1 : 0;
	const l = await ht(o, s && s.length === e.length ? s : new Float64Array(e.length), t, n, i, a, r);
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
async function ht(e, t, n, i, a, s = 60, r) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == i || null == a || i >= a) return null;
	const o = await async function(e, t, n, i) {
		const a = await O(i).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === a.length ? {
			startIdx: a[0],
			endIdx: a[1]
		} : null;
	}(n, i, a, r);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, u = o.endIdx + 1, c = e instanceof Uint8Array ? e.slice(l, u) : new Uint8Array(e.slice(l, u)), d = t instanceof Float64Array ? t.slice(l, u) : Float64Array.from(t.slice(l, u)), m = await O(r).computeSleepMetrics(c, d, s), p = n[l] ?? 0, g = n[u - 1] ?? p, h = null != m.firstSleepEpochIdx ? n[l + m.firstSleepEpochIdx] ?? p : p, f = null != m.lastSleepEpochIdx ? n[l + m.lastSleepEpochIdx] ?? g : g;
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
function ft(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const i = H(e), a = Array.from(i.timestamps);
	if (i.ggir) return {
		timestamps: a,
		algorithmResults: i.sleepScores,
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
		timestamps: a,
		algorithmResults: null,
		activity: r,
		scoresStale: n
	};
	const l = k(e, t);
	return {
		timestamps: a,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: r,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
const _t = /* @__PURE__ */ new Map();
async function wt(e, t) {
	if (_t.has(e)) return _t.get(e);
	try {
		const n = await O(t).resolveTimezone(e);
		return _t.set(e, n), n;
	} catch (Qe) {
		t?.throwIfAborted(), console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, Qe);
		return;
	}
}
function yt(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : Ne();
}
async function vt(e) {
	try {
		return yt((await V(e))?.extraSettings);
	} catch (Qe) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", Qe), Ne();
	}
}
function Mt(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const bt = {
	zone: null,
	reason: null
};
async function kt(e, t, n) {
	const i = e.ggirTimezone?.trim();
	let a = null;
	if (i) {
		const e = await wt(i, n);
		if (!e) return bt;
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
	if (null === a) return oe(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : bt;
	const s = await wt(t, n);
	if (void 0 === s) return bt;
	if ("iana" !== s?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const r = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== r && (await Te(s.zone, r, O(n))).includes(a) ? {
		zone: s.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${Mt(a)} is not a ${s.zone} offset`
	};
}
function St(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [i, a] of e.entries()) t[i + 1] = t[i] + a.length;
	const n = new Float64Array(t[e.length]);
	for (const [i, a] of e.entries()) n.set(a, t[i]);
	return [n, t];
}
const xt = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), It = [
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
var At = It.map(() => xt);
Object.fromEntries(It.map(([e], t) => [e, At[t]]));
const Nt = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values(N).filter((e) => ![
		N.choi_2012,
		N.choi_2011,
		N.van_hees_2023,
		N.detach_nonwear
	].some((t) => t === e))
];
async function Tt(e, t, n, i) {
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
async function Rt(e, t, n) {
	const i = e instanceof Float64Array ? e : Float64Array.from(e), [a, r] = await (n ?? s()).analysisWindowSlice(i, t);
	return {
		startIndex: a,
		endIndex: r
	};
}
async function Et(e, t = s()) {
	const n = [...new Set(e)], i = await t.analysisDatesOf(Float64Array.from(n)), a = new Map(n.map((e, t) => [e, i[t] ?? ""]));
	return (e) => a.get(e) ?? "";
}
function $t(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [i, a] of Object.entries(we(e, e.nonwearChoiAxis ?? he()))) a && (n[t[i] ?? i] = new Uint8Array(a));
	return n;
}
async function Ot(e, t, n, i = {}) {
	const { signal: a, includeNonwearMasks: s = !1 } = i, r = e.get(t), o = ft(r, n), l = s && r ? $t(r) : {}, u = e.get(await I(t, void 0, O(a))), c = o.timestamps[o.timestamps.length - 1], d = u ? ft(u, n) : null, m = d?.timestamps[0], p = void 0 !== u && null !== d && void 0 !== c && void 0 !== m && m > c, g = o.scoresStale ?? d?.scoresStale ?? null;
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
	const y = s ? $t(u) : {}, v = {};
	for (const M of Nt) {
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
async function Dt(e, t, n, i) {
	const a = await n.files.get(e.fileId);
	if (!a) return;
	const s = /* @__PURE__ */ new Map();
	for (const r of [e.date, await I(e.date, void 0, O(i))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, r]).first();
		t && s.set(r, t);
	}
	await async function(e, t, n, i) {
		const { date: a, file: s, activityMap: r, verdict: o } = t, l = t.spanning ?? await Ot(r, a, o, { signal: i });
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
		for (const p of e.sleepMarkers) m.push(d && c.length > 0 && p.onsetTimestamp && p.offsetTimestamp ? await ht(d, l.activity ?? new Float64Array(d.length), l.timestamps, p.onsetTimestamp, p.offsetTimestamp, s.epochLengthSeconds || 60, i) : null);
		if (void 0 !== e.id) try {
			await F(n, [n.markers], () => ie(e.id, {
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
		activityMap: s,
		verdict: t
	}, n, i);
}
Object.fromEntries(Object.values(N).map((e) => [e, e === N.ggir_saved ? re : fe(e)]));
const Ct = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], Lt = ["under-series", "over-series"], Bt = ["full-resolution-v1", "min-max-gap-envelope-v1"], Pt = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function Ft(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function Wt(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? Ft(t, "expected an object") : e;
}
function jt(e, t) {
	return Array.isArray(e) ? e : Ft(t, "expected an array");
}
function Gt(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : Ft(t, "expected a finite number");
}
function Ut(e, t) {
	const n = Gt(e, t);
	return n <= 0 ? Ft(t, "expected a positive number") : n;
}
function zt(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : Ft(t, "expected a safe integer");
}
function Ht(e, t) {
	const n = zt(e, t);
	return n < 0 ? Ft(t, "expected a non-negative safe integer") : n;
}
function qt(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? Ft(t, "expected a boolean") : { [n]: e };
}
function Vt(e, t) {
	return "string" != typeof e || 0 === e.length ? Ft(t, "expected a non-empty string") : e;
}
function Kt(e, t) {
	return "string" == typeof e && Ct.includes(e) ? e : Ft(t, "expected a supported tone");
}
function Jt(e, t) {
	return "string" == typeof e && Lt.includes(e) ? e : Ft(t, "expected a supported phase");
}
function Yt(e, t) {
	const n = Wt(e, t), i = Gt(n.min, `${t}.min`), a = Gt(n.max, `${t}.max`);
	return a <= i || !Number.isFinite(a - i) ? Ft(t, "expected a finite ascending range") : {
		min: i,
		max: a
	};
}
function Zt(e, t) {
	const n = `series[${t}]`, i = Wt(e, n), a = jt(i.points, `${n}.points`);
	let s = Number.NEGATIVE_INFINITY;
	const r = (e) => `${n}.points[${e}]`, o = a.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return Ft(r(t), "expected an object");
		const n = e, i = n.timestamp;
		if ("number" != typeof i || !Number.isFinite(i)) return Ft(`${r(t)}.timestamp`, "expected a finite number");
		if (i <= s) return Ft(`${r(t)}.timestamp`, "expected strictly ascending timestamps");
		s = i;
		const a = n.value;
		return null === a || "number" == typeof a && Number.isFinite(a) ? {
			timestamp: i,
			value: a
		} : Ft(`${r(t)}.value`, "expected a finite number");
	});
	return {
		tone: Kt(i.tone, `${n}.tone`),
		strokeWidth: Ut(i.strokeWidth, `${n}.strokeWidth`),
		valueDomain: Yt(i.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function Qt(e, t) {
	const n = `overlays[${t}]`, i = Wt(e, n), a = {
		phase: Jt(i.phase, `${n}.phase`),
		order: zt(i.order, `${n}.order`),
		tone: Kt(i.tone, `${n}.tone`)
	};
	if ("interval" === i.kind) {
		const e = Gt(i.startTimestamp, `${n}.startTimestamp`), t = Gt(i.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? Ft(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...a,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === i.kind ? {
		kind: "threshold",
		...a,
		value: Gt(i.value, `${n}.value`),
		...qt(i.draggable, `${n}.draggable`, "draggable"),
		...qt(i.selected, `${n}.selected`, "selected"),
		...qt(i.handle, `${n}.handle`, "handle"),
		...void 0 === i.label ? {} : { label: Vt(i.label, `${n}.label`) }
	} : "instant" === i.kind ? {
		kind: "instant",
		...a,
		timestamp: Gt(i.timestamp, `${n}.timestamp`)
	} : Ft(`${n}.kind`, "expected interval, threshold, or instant");
}
function Xt(e, t, n) {
	const i = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(i) ? i : Ft("projection", "expected a finite pixel coordinate");
}
function en(e, t, n) {
	const i = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(i) ? i : Ft("projection", "expected a finite pixel coordinate");
}
function tn(e) {
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
function nn(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function an(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, i = t.plotArea.height, a = Pt[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const s = nn(Xt(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), r = nn(Xt(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${tn(s)}" y="0" width="${tn(Math.max(1, r - s))}" height="${tn(i)}" fill="${a}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const s = en(e.value, t.valueDomain, i), r = !0 === e.selected, o = r ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${r ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${tn(s)}" x2="${tn(n)}" y2="${tn(s)}" stroke="${a}" stroke-width="${r ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const s = Xt(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${tn(s)}" y1="0" x2="${tn(s)}" y2="${tn(i)}" stroke="${a}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function sn(e) {
	const t = function(e) {
		const t = Wt(e, "scene");
		if (2 !== t.version) return Ft("version", "expected 2");
		const n = Wt(t.grid, "grid"), i = {
			strategy: (a = n.strategy, "string" == typeof a && Bt.includes(a) ? a : Ft("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: Ht(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: Ht(n.renderedPointCount, "grid.renderedPointCount")
		};
		var a;
		if (i.renderedPointCount > i.sourcePointCount) return Ft("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === i.strategy && i.renderedPointCount !== i.sourcePointCount) return Ft("grid", "full-resolution strategy requires equal point counts");
		const s = Wt(t.size, "size"), r = {
			width: Ut(s.width, "size.width"),
			height: Ut(s.height, "size.height")
		}, o = Wt(t.plotArea, "plotArea"), l = {
			left: Gt(o.left, "plotArea.left"),
			top: Gt(o.top, "plotArea.top"),
			width: Ut(o.width, "plotArea.width"),
			height: Ut(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > r.width || l.top + l.height > r.height) return Ft("plotArea", "expected bounds contained by size");
		const u = Yt(t.viewport, "viewport"), c = Yt(t.valueDomain, "valueDomain"), d = jt(t.series, "series").map(Zt);
		if (0 === d.length && 0 !== i.renderedPointCount) return Ft("grid.renderedPointCount", "expected zero when series is empty");
		const m = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let f = 0; f < d.length; f++) {
			const e = d[f]?.points ?? [];
			if (e.length !== i.renderedPointCount) return Ft(`series[${f}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return Ft(`series[${f}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const p = jt(t.overlays, "overlays").map(Qt), g = null === t.cursorTimestamp ? null : Gt(t.cursorTimestamp, "cursorTimestamp");
		let h = null;
		if (null !== t.selection) {
			const e = Wt(t.selection, "selection"), n = Gt(e.startTimestamp, "selection.startTimestamp"), i = Gt(e.endTimestamp, "selection.endTimestamp");
			if (i <= n) return Ft("selection", "expected a half-open ascending interval");
			h = {
				startTimestamp: n,
				endTimestamp: i
			};
		}
		return {
			version: 2,
			grid: i,
			size: r,
			plotArea: l,
			viewport: u,
			valueDomain: c,
			series: d,
			overlays: p,
			cursorTimestamp: g,
			selection: h
		};
	}(e), n = tn(t.size.width), i = tn(t.size.height), a = tn(t.plotArea.width), s = tn(t.plotArea.height), r = an(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
		let i = "", a = !1;
		const s = {
			left: 0,
			width: n.plotArea.width
		}, r = /* @__PURE__ */ new Map();
		for (const o of e.points) {
			if (null == o.value) {
				a = !1;
				continue;
			}
			const t = Xt(o.timestamp, n.viewport, s);
			let l = r.get(o.value);
			void 0 === l && (l = tn(en(o.value, e.valueDomain, n.plotArea.height)), r.set(o.value, l)), i += `${a ? "L" : "M"}${tn(t)} ${l}`, a = !0;
		}
		return 0 === i.length ? "" : `<path data-series-index="${t}" d="${i}" fill="none" stroke="${Pt[e.tone]}" stroke-width="${tn(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = an(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${i}" viewBox="0 0 ${n} ${i}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${i}" fill="#ffffff"/><svg x="${tn(t.plotArea.left)}" y="${tn(t.plotArea.top)}" width="${a}" height="${s}" viewBox="0 0 ${a} ${s}" overflow="hidden"><rect x="0" y="0" width="${a}" height="${s}" fill="#ffffff"/>${r}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = nn(Xt(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), i = nn(Xt(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${tn(n)}" y="0" width="${tn(Math.max(1, i - n))}" height="${tn(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = Xt(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${tn(n)}" y1="0" x2="${tn(n)}" y2="${tn(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${tn(t.plotArea.left)}" y="${tn(t.plotArea.top)}" width="${a}" height="${s}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
var rn = class extends Error {
	file;
	step;
	constructor(e, t, n) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t;
	}
};
const on = 65536;
function ln(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function un(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const cn = [
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
], dn = (new Set(cn.slice(16).map(([e]) => e)), "edit_recompute_requires_ms2_ms3"), mn = (S.invalid_night_row.markerTypeCell, new Set(cn.map(([, e]) => e)), y.ggir_sleepparam.header, y.ggir_guider_onset.header, y.ggir_guider_wakeup.header, y.ggir_guider_spt_duration.header, y.ggir_error_onset.header, y.ggir_error_wake.header, y.ggir_error_dur.header, y.ggir_fraction_night_invalid.header, y.ggir_duration_sib_wakinghours.header, y.ggir_number_sib_sleepperiod.header, y.ggir_number_sib_wakinghours.header, y.ggir_duration_sib_wakinghours_atleast15min.header, y.ggir_guider_onset_ts.header, y.ggir_guider_wakeup_ts.header, y.ggir_page.header, y.ggir_daysleeper.header, y.ggir_sleeplog_id.header, y.ggir_guider.header, y.ggir_longitudinal_axis.header, /* @__PURE__ */ new Set([
	y.ggir_sleep_duration_in_spt.header,
	y.ggir_waso.header,
	y.ggir_number_of_awakenings.header,
	y.ggir_sleeplatency.header,
	y.ggir_sleepefficiency.header
])), pn = /* @__PURE__ */ new Set([
	...mn,
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
]), gn = /* @__PURE__ */ new Set([
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
]), hn = (new Set(Object.values(y).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), new Set(Object.values(y).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), new Set(Object.values(M).map((e) => e.reviewSource)), [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
]), fn = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : o(String(e)), _n = (v.part4_night_review, v.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function wn(e, t, n = "") {
	return v[e].replace("{report}", n.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${M[t].filenameSuffix}.csv`);
}
function yn(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return c(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? c(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function vn(e, t) {
	const n = new Map(ue(e).map((e) => [e.night, e.nightDate]));
	return (e, i, a = !0) => {
		const s = e.columns.indexOf("nights" === t ? y.ggir_night.header : "night_number"), r = Number(e.values[s]?.[i]), o = n.get(r);
		if (a && o) return o;
		const l = e.values[e.columns.indexOf(y.ggir_calendar_date.header)]?.[i];
		return yn(l);
	};
}
async function Mn(t, n, a, s) {
	const r = "nights" === n ? y.ggir_night.header : "window_number", l = O(a), u = await Promise.all(t.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await de(e.imported, e.edits, t.night, a)])))), c = (await Promise.all(t.map(async (e, t) => {
		const i = e.current ?? e.imported, a = (e) => "nights" === n ? e.nights : e.days, s = "nights" === n ? i.nightRecomputed : i.dayRecomputed, r = "nights" === n ? e.imported.nightChecks : e.imported.dayChecks, o = u[t].filter((e) => null != e[1]), c = vn(e.imported, n), d = new Set(e.edits.map((e) => e.night)), m = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, p = /* @__PURE__ */ new Set();
		if ("days" === n && m) {
			const t = await Promise.all(ue(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), i = t.nightDate, a = n.onset < "12:00:00" ? await I(i, void 0, l) : i, s = n.wake <= n.onset ? await I(a, void 0, l) : a;
				return [Math.min(t.onsetMs, Date.parse(`${a}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${s}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: i.days.rows }, async (e, n) => {
				const a = Number(i.days.values[i.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(a)) return void p.add(n);
				const s = c(i.days, n, !1), r = i.days.values[i.days.columns.indexOf("start_end_window")]?.[n], o = "string" == typeof r ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(r) : null;
				if (!s || !o) return;
				const u = Date.parse(`${s}T${o[1]}Z`), m = o[2] < o[1] ? await I(s, void 0, l) : s, g = Date.parse(`${m}T${o[2]}Z`);
				t.some(([e, t]) => u <= t && g >= e) && p.add(n);
			}));
		}
		return {
			source: M[_n(e)].reviewSource,
			editedDayRows: p,
			editRecomputeUnavailable: m,
			editedNights: d,
			scoredDates: e.scoredDates,
			invalidDates: e.invalidDates,
			dateOf: c,
			table: a(i),
			ggir: a(e.imported),
			savedNights: e.imported.nights,
			recomputed: s,
			provenance: (e) => "nights" === n ? o.find(([t]) => t === e)?.[1] ?? "" : o.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(r.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === c.length) return null;
	const d = s ? s.filter((e) => !e.endsWith("_missing_reason") && !hn.includes(e)) : [];
	for (const e of s ? [] : c) for (const t of e.table.columns) t.endsWith("_missing_reason") || d.includes(t) || d.push(t);
	const m = new Set("nights" === n ? x.ggir_review_night_extension.map((e) => y[e].header) : []), p = s ? d.filter((e) => s.includes(e + "_missing_reason")) : d.filter((e) => m.has(e) || c.some((e) => e.editRecomputeUnavailable || e.source === M.corrected.reviewSource)), g = [[
		...d.map(o),
		...hn,
		...p.map((e) => o(e + "_missing_reason")),
		...hn.map((e) => e + "_missing_reason")
	].join(",")], h = (e, t) => {
		const n = e.columns.indexOf(r);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: f, ggir: _, recomputed: w, provenance: v, checks: M, scoredDates: b, invalidDates: k, dateOf: S, editRecomputeUnavailable: x, editedNights: I, editedDayRows: A, savedNights: N, source: T } of c) {
		const t = N.columns.filter((e) => !pn.has(e)), a = t.filter((e) => {
			const t = N.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return N.values[t].some((e, t) => {
				const i = Number(N.values[N.columns.indexOf(y.ggir_night.header)]?.[t]), a = n.has(i) && !Object.is(n.get(i), e);
				return n.set(i, e), a;
			});
		}), s = /* @__PURE__ */ new Set(), r = (e) => Array.from({ length: _.rows }, (e, t) => t).find((t) => !s.has(t) && h(_, t) === h(f, e) && a.every((n) => Object.is(_.values[_.columns.indexOf(n)]?.[t] ?? null, f.values[f.columns.indexOf(n)]?.[e] ?? null))), l = new Set(d.filter((e) => "nights" === n ? pn.has(e) : !gn.has(e) && !t.includes(e))), u = (a, s, r, u) => {
			const c = M.get(h(a, s));
			return [
				...d.map((e) => {
					if ("invalid" === r && ("nights" === n ? pn.has(e) : /sleep|spt|waso|wake|onset|guider/i.test(e) && !t.includes(e))) return "";
					const i = a.columns.indexOf(e);
					return i < 0 ? "" : fn(a.values[i]?.[s]);
				}),
				r,
				c?.status ?? "",
				o((c?.reasons ?? []).join(";")),
				o((c?.diffs ?? []).map((e) => e.column).join(";")),
				o(u),
				...p.map((t) => "invalid" !== r || m.has(t) && t !== y.ggir_nonwear_perc_spt.header ? x && r === T && l.has(t) && ("days" === n ? A.has(s) : I.has(h(a, s))) ? dn : m.has(t) ? null != e(a, t, s) ? "" : fn(i(a, t + "_missing_reason", s) ?? "source_reported_missing") : r === T ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
				"",
				c ? "" : "not_computed_for_export",
				c?.reasons.length ? "" : "not_applicable_to_row",
				c?.diffs.length ? "" : "not_applicable_to_row",
				u ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let e = 0; e < f.rows; e += 1) {
			const t = S(f, e);
			if (b && (!t || !b.has(t))) continue;
			const n = r(e);
			if (null != n && s.add(n), t && k?.has(t)) {
				null != n && g.push(u(_, n, T, "")), g.push(u(f, e, "invalid", ""));
				continue;
			}
			if (!w[e]) {
				g.push(u(f, e, T, ""));
				continue;
			}
			const i = h(f, e);
			null != n && g.push(u(_, n, T, "")), g.push(u(f, e, "recomputed", v(i)));
		}
		for (let e = 0; e < _.rows; e += 1) {
			if (s.has(e)) continue;
			const t = S(_, e);
			(!b || t && b.has(t)) && (g.push(u(_, e, T, "")), t && k?.has(t) && g.push(u(_, e, "invalid", "")));
		}
	}
	return g.length > 1 ? `${g.join("\n")}\n` : null;
}
function bn(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const i of e) for (const [e, t] of Object.entries(i.part2Reports ?? {})) {
		const a = wn("part2_report", _n(i), e);
		n.set(a, [...n.get(a) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const i = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], a = [i.map(o).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) a.push(i.map((n) => fn(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, a.join("\n") + "\n"];
	}));
}
Object.keys(M).map((e) => wn("person_summary_review", e));
const kn = (e, t) => ue(e).filter((e) => t?.has(e.nightDate));
async function Sn(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: dn,
		detail: ""
	};
	const a = e.current ?? e.imported;
	if (void 0 === a.tailExpansion) return {
		reason: "not_computed_for_export",
		detail: "the saved GGIR review predates the core's tail expansion flag; import the folder again"
	};
	const s = O(n);
	try {
		const { ggirVersion: n } = await s.ggirConfigValues(e.configCsv), { profile: r, reports: o } = await s.ggirPersonSummaries({
			ggir_version: n ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: a.nights,
			days: a.days,
			tail_expansion: a.tailExpansion,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(i(a.nights, y.ggir_id.header, 0) ?? ""),
			invalid_nights: kn(e.imported, t).map((e) => e.night),
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
async function xn(e, t, n) {
	const i = /* @__PURE__ */ new Map(), a = await Promise.all(e.map(async (e) => {
		const n = kn(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (n) => {
			const i = await de(e.imported, e.edits, n.night, t);
			return null == i ? [] : [`night ${String(n.night)} ${i}`];
		}))).flat(), ...n].join("; ");
	}));
	for (const [r, o] of e.entries()) {
		const e = _n(o), t = a[r], n = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [a, s] of Object.entries(o.personReports ?? {})) {
			if (0 === s.rows) continue;
			const r = wn("person_summary_review", e, a), o = "reason" in n ? n : n.reports[a] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${a}`
			};
			i.set(r, [...i.get(r) ?? [], {
				table: s,
				source: M[e].reviewSource,
				edit: t,
				recomputed: o
			}]);
		}
	}
	const s = /* @__PURE__ */ new Set([y.ggir_id.header, y.ggir_filename.header]);
	return Object.fromEntries([...i].map(([e, t]) => {
		const i = n?.get(e), a = [...new Set(t.flatMap(({ table: e }) => e.columns))], r = (i ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : function(e, t) {
			const n = new Set(e);
			if (t.every((e) => n.has(e))) return [...e];
			if (!t.some((e) => n.has(e))) return [...e, ...new Set(t)];
			const i = [...e];
			let a = -1;
			for (const s of t) {
				const e = i.indexOf(s);
				e >= 0 ? a = e : i.splice(++a, 0, s);
			}
			return i;
		}(e, t.columns), a)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !hn.includes(e)), l = hn.map((e) => e + "_missing_reason"), u = i?.filter((e) => e.endsWith("_missing_reason") && !l.includes(e)) ?? ["refusal_detail_missing_reason", ...r.map((e) => e + "_missing_reason")], c = [[
			...r,
			...hn,
			...u,
			...l
		].map(o).join(",")], d = (e, t) => [
			e,
			"",
			"",
			"",
			o(t)
		], m = (e) => [
			"",
			"not_computed_for_export",
			"not_applicable_to_row",
			"not_applicable_to_row",
			e ? "" : "not_applicable_to_row"
		], p = (e, t) => (n) => fn(e.values[e.columns.indexOf(n)]?.[t]), g = (e) => u.map((t) => e.get(t) ?? ""), h = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
		for (const { table: n, source: f, edit: _, recomputed: w } of t) for (let e = 0; e < n.rows; e++) {
			const t = r.map(p(n, e)), i = new Map(r.flatMap((e) => h.get(n).has(e) ? [] : [[e + "_missing_reason", "not_applicable_to_row"]]));
			if (c.push([
				...t,
				...d(f, ""),
				...g(i),
				...m("")
			].join(",")), !_) continue;
			const a = "reason" in w ? w : 0 === w.rows ? {
				reason: "no_retained_nights",
				detail: ""
			} : null, l = "reason" in w ? null : p(w, 0), u = r.map((e, n) => s.has(e) ? t[n] : l?.(e) ?? ""), y = new Map(r.flatMap((e, t) => {
				return "" === (n = u[t]).trim() || /^(?:nan|na|n\/a)$/iu.test(n.trim()) ? [[e + "_missing_reason", a?.reason ?? "not_applicable_to_row"]] : [];
				var n;
			}));
			a?.detail && y.set("refusal_detail_missing_reason", o(`ggirPersonSummaries: ${a.detail}`)), c.push([
				...u,
				...d("recomputed", _),
				...g(y),
				...m(_)
			].join(","));
		}
		return [e, c.join("\n") + "\n"];
	}));
}
const In = x.ggir_part4_nightsummary_csv, An = In.map((e) => y[e].header), Nn = [
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
], Tn = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function Rn(e, t) {
	const n = y[e], i = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof i ? o(i) : ln(i, { integral: n.ggirIntegral ?? !1 });
}
function En(e, t = "legacy-recording", n, i) {
	const a = [], s = [];
	for (const r of e) r.states && 0 !== r.timestamps.length && (s.push(r.states.subarray(0, Math.min(r.timestamps.length, r.states.length))), a.push({
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
	}) : O(i).validStateFraction(o).then(async (e) => {
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
		const s = (void 0 === n || 86400 % n == 0) && [...t].some(([e, n]) => n && t.get(e + 86400)), o = s ? null : "insufficient_pair", l = await async function(e, t) {
			const n = Array.isArray(e) ? e : [e], i = n.map((e) => ({
				...void 0 === e.seriesId ? {} : { series_id: e.seriesId },
				...void 0 === e.epochLengthSeconds ? {} : { epoch_length_seconds: e.epochLengthSeconds }
			})), [a, s] = St(n.map((e) => e.timestamps)), [o, l] = St(n.map((e) => e.states));
			return O(t).sleepRegularityIndex(r([
				JSON.stringify(i),
				a,
				s,
				o,
				l
			], [
				a.buffer,
				s.buffer,
				o.buffer,
				l.buffer
			]));
		}(a, i);
		if (s && null == l) throw new Error("SRI producer returned a blank despite valid pairs");
		return {
			sri: l,
			fractionValid: e,
			sriMissingReason: o,
			fractionValidMissingReason: null
		};
	});
}
async function $n(e, t, n, i = {}) {
	const { signal: a } = i, s = e.participantId ?? e.filename, r = J(n.values(), i.algorithm), o = [];
	for (const [h, y] of n) {
		if (!jn(h, i.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = ft(y, r);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await En(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, a), { sri: u, fractionValid: c } = l, d = "stale" === r.status ? "scores_from_another_config" : null, m = d ?? l.sriMissingReason, p = d ?? l.fractionValidMissingReason, g = [];
	for (const y of [...t.keys()].sort()) {
		const e = t.get(y);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === h.MAIN_SLEEP && null != t.onsetTimestamp && g.push({
			date: y,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const f = [[
		...An,
		...Nn.map((e) => `${y[e].header}_missing_reason`),
		...Tn.map((e) => `${y[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: h, onsetTs: y, wakeupTs: v } of g) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == v ? "not_applicable_to_row" : d ?? "no_scored_epochs"
		};
		if (null != v) {
			const { timestamps: i, algorithmResults: s } = await Ot(n, h, r, { signal: a });
			if (s && i.length > 0) {
				t.missingReason = null;
				const n = await gt(s, i, y, v, e.epochLengthSeconds || 60, null, a);
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
	const w = await O(a).ggirManualNightClocks(g.map((e) => e.date), Float64Array.from(g, (e) => e.onsetTs), Float64Array.from(g, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let h = 0; h < g.length; h++) {
		const { onsetTs: t, wakeupTs: n } = g[h], i = w[h], { tstH: a, nAwak: r, latency: o, efficiency: l } = _[h], d = {
			ggir_id: s,
			ggir_night: h + 1,
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
			...In.map((e) => Rn(e, d[e])),
			...Nn.map((e) => {
				const t = In.indexOf(e);
				return t >= 0 && null == d[In[t]] ? "not_computed_for_export" : "";
			}),
			...Tn.map((e) => {
				const t = In.indexOf(e);
				return t >= 0 && null == d[In[t]] ? _[h].missingReason ?? "" : "";
			}),
			m ?? "",
			p ?? ""
		].join(","));
	}
	return f.join("\n") + "\n";
}
function On(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function Dn(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function Cn(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function Ln(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: i } = Dn(n), a = [e, i].filter(Boolean);
		t.set(n, 0 === a.length ? "part4_nightsummary.csv" : `part4_nightsummary_${a.join("_")}.csv`);
	}
	return t;
}
function Bn(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : ae(e);
}
function Pn(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function* Fn(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let i = Math.min(e.length, n + on / 4);
		i < e.length && /[\uD800-\uDBFF]/u.test(e[i - 1]) && (i -= 1), yield t.encode(e.slice(n, i)), n = i;
	}
	yield t.encode("\n");
}
function Wn(e) {
	return new TextEncoder().encode(e);
}
function jn(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function Gn(e, t, n) {
	n?.throwIfAborted();
	const i = function(e, t) {
		const { signal: n } = t, { username: i, dateRange: a, snapshot: s } = e, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const c = fa(s, la.ggirReport, e.map((e) => e.id)), d = await Promise.all(e.map((e) => va(s, e.id, i, n)));
				for (const [i, s] of e.entries()) {
					const e = c.files.find((e) => e.id === s.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: p, sets: g, markersByAlgo: h, invalidDates: f } = d[i], _ = ba(c, e.id), w = new Map([...h].filter(([e]) => jn(e, a))), y = /* @__PURE__ */ new Map();
					for (const [t, n] of w) for (const e of n) {
						const n = Cn(e);
						let i = y.get(n);
						i || (i = /* @__PURE__ */ new Map(), y.set(n, i)), i.set(t, e);
					}
					const v = /* @__PURE__ */ new Set();
					for (const [t, n] of w) for (const e of n) m(e) && v.add(t);
					if (p) for (const t of g) u.push({
						...t,
						...a ? { scoredDates: new Set(e.availableDates.filter((e) => jn(e, a))) } : {},
						invalidDates: f
					});
					const M = [...v].sort(), b = M[0], k = M[M.length - 1], S = [], x = [];
					for (const n of t.charts ? [..._.keys()].sort() : []) if (jn(n, a) && (null == b || null == k || n >= b && n <= k)) {
						const e = _.get(n), t = H({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), i = t.timestamps, a = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < i.length; n++) S.push(i[n]), x.push(a[n]);
					}
					const I = [];
					for (const [t, i] of y) {
						const s = Dn(t).algoKey, l = p ? "" : await $n(e, i, _, {
							...s ? { algorithm: s } : {},
							...a ? { dateRange: a } : {},
							signal: n
						}), u = p ? [] : l.replace(/\n$/u, "").split("\n");
						if (u.length > 0) {
							const e = r.get(t) ?? [];
							r.set(t, e), o.has(t) ? e.push(...u.slice(1)) : (e.push(...u), o.add(t));
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
						const { algoKey: m, ruleKey: g } = Dn(t), h = [m, g].filter(Boolean).join("_"), f = J(_.values(), s || null);
						I.push([h, {
							p: c,
							n: d,
							..."stale" === f.status ? { stale: f.reason } : {}
						}]);
					}
					0 === y.size && I.push(["", {
						p: [],
						n: []
					}]), S.length > 0 && l.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: S,
						act: x,
						algos: I
					});
				}
			},
			entries: () => async function({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: i, layouts: a, only: s }) {
				const r = {}, o = (e) => void 0 === s || s === e;
				for (const [l, u] of i ?? Ln([...e.keys()])) {
					const t = e.get(l);
					t?.length && o(u) && (r[u] = Wn(`${t.join("\n")}\n`));
				}
				for (const l of Object.keys(M)) {
					const e = t.filter((e) => _n(e) === l);
					if (0 !== e.length) {
						for (const [t, n] of Object.entries(bn(e, a))) o(t) && (r[t] = Wn(n));
						for (const [t, i] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
							const s = wn(i, l), u = o(s) ? await Mn(e, t, n, a?.get(s)) : null;
							u && (r[s] = Wn(u));
						}
						for (const [t, i] of Object.entries(await xn(e, n, a))) o(t) && (r[t] = Wn(i));
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
	await i.addFiles([t]);
	const a = [...i.chartPidData].map(([t, n]) => function(e, t, n) {
		return {
			key: e,
			pid: t.pid,
			charts: t.algos.map(([i, a]) => {
				const { algoKey: s, ruleKey: r } = Dn(i), o = Pn([s, r].filter(Boolean).join("_"), "unscoped"), l = `activity-${Pn(e, "recording")}-${o}-${n}.svg`, u = function(e) {
					if (0 === e.timestamps.length) return un("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return un("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, i = 0;
					const a = e.timestamps.map((a, s) => {
						const r = e.activity[s];
						return !Number.isFinite(a) || a <= t ? un("timestamps must be finite and strictly ascending") : (t = a, null != r && Number.isFinite(r) ? (n = Math.min(n, r), i = Math.max(i, r), {
							timestamp: a,
							value: r
						}) : {
							timestamp: a,
							value: null
						});
					}), s = a[0].timestamp, r = a[a.length - 1].timestamp, o = r > s ? r : s + 1;
					if (!Number.isFinite(o) || o <= s) return un("single-epoch viewport must have a representable right edge");
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
				}), c = [...Fn(`      <div class="plot-svg">${sn(u)}</div>`)];
				return {
					algoKey: i,
					...a.stale ? { stale: a.stale } : {},
					svgFilename: l,
					plot: new Blob(c),
					plotLengths: c.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${On(Bn(u.viewport.min))} → ${On(Bn(u.viewport.max))} · activity domain ${ln(u.valueDomain.min)}–${ln(u.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), s = new Set(Ln([...i.csvLinesByAlgo.keys()]).values()), r = [];
	for (const [o, c] of Object.entries(await i.entries())) s.has(o) || r.push([o, l(u(new TextDecoder().decode(c)).records[0].text)]);
	return {
		charts: a,
		csvLinesByAlgo: i.csvLinesByAlgo,
		ggirReviews: i.ggirReviews,
		headers: r
	};
}
async function Un(e, t, n, i) {
	const a = [], s = [];
	for (const [r, o] of e) if (r) for (let e = 0; e < Math.min(r.length, o.length); e++) a.push(o[e]), s.push(r[e]);
	return await O(i).spanFiniteMean(Float64Array.from(a), Float64Array.from(s), t, n) ?? null;
}
const zn = S.invalid_night_row?.markerTypeCell ?? "", Hn = S.nonwear_row?.markerTypeCell ?? "";
function qn(e) {
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
function Vn(e) {
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
const Kn = [
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
async function Jn(e, t, n, i, a, s, r) {
	try {
		return {
			metrics: t ? await ht(e, t, n, i, a, s, r) : await gt(e, n, i, a, s, null, r),
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
async function Yn(e, t, n, i) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const a = new Set(n.filter((t) => t.markerType === h.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return a.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : En(t.filter((e) => a.has(e.date)), e, t[0]?.epochLengthSeconds, i);
}
function Zn(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const Qn = [
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
], Xn = {
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
function ei(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function ti(e, t, n, i, a) {
	const s = [], r = fa(n, la.event, e), o = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		a?.throwIfAborted();
		const e = ei(l, ba(r, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await Et(e, O(a)), u = new Set(wa(r, l.id, i).keys());
		for (const i of e) {
			const e = o(i);
			t && (e < t[0] || e > t[1]) || u.has(e) && s.push({
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
x.sleep_csv.filter((e) => "server" !== y[e].plane).map((e) => y[e].header), b("event_marker_csv", "local"), S.invalid_night_row.markerTypeCell, b("actiware_interval_csv", "local"), b("actiware_sleep_wake_csv", "local"), new Uint8Array([3, 0]);
const ni = "union_all";
function ii(e) {
	return e.nonwearDetector ?? "union_all";
}
const ai = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: ni
}, si = {
	...ai,
	minimumWakeWearMinutes: ke.minWearMinutesPerDay
};
function ri(e) {
	return e ? {
		...si,
		...e
	} : si;
}
function oi(e, t) {
	const n = [];
	for (const i of e.values()) {
		for (const e of i.sleepMarkers) {
			const t = e.markerType === h.MAIN_SLEEP ? "main_sleep" : e.markerType === h.NAP ? "nap" : null;
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
function li(e, t, n, i) {
	const a = ii(t), s = "union_all" === a ? Object.entries(we(e, n)) : [[a, _e(e, a, n)], ..."detach_nonwear" === a ? [] : [["detach_nonwear", _e(e, "detach_nonwear", n)]]], r = new Float64Array(e.timestamps);
	return s.flatMap(([e, t]) => {
		if (!t) return [];
		const n = new Uint8Array(t);
		return 0 === n.length ? [] : [n.length === r.length ? {
			kind: "algorithm_nonwear",
			source: e,
			timestamps: r,
			epochSeconds: i,
			mask: n
		} : {
			kind: "algorithm_nonwear",
			source: e,
			mask: n
		}];
	});
}
function ui(e) {
	return {
		excludeNonwear: e.excludeNonwear,
		excludeMainSleep: e.excludeMainSleep,
		excludeNaps: e.excludeNaps,
		useAlgorithmNonwear: e.useAlgorithmNonwear,
		useManualNonwear: e.useManualNonwear,
		minimumWakeWearMinutes: Number.isFinite(e.minimumWakeWearMinutes) ? Math.max(0, e.minimumWakeWearMinutes) : 0
	};
}
function ci(e) {
	return {
		totalEpochs: e.totalEpochs,
		includedEpochs: e.includedEpochs,
		nonwearEpochs: e.nonwearEpochs,
		mainSleepEpochs: e.mainSleepEpochs,
		napEpochs: e.napEpochs,
		overlapEpochs: e.overlapEpochs
	};
}
function di(e, t) {
	return O(t).summarizePhysicalActivityDays(e);
}
async function mi(e, t = s()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
const pi = T.PRESCHOOL_FREE_LIVING_RF_3_5;
function gi(e) {
	const t = e.algorithmResults[pi];
	return null != t && new Uint8Array(t).length > 0;
}
function hi(e) {
	const t = e.algorithmResults[pi];
	if (!t) return null;
	const n = new Uint8Array(t);
	return n.length > 0 ? n : null;
}
function fi(e) {
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
function _i(e) {
	return e instanceof Map ? _i([...e.entries()]) : Array.isArray(e) ? e.map(_i) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, _i(t)])) : e;
}
async function wi(e, t) {
	const { db: n, fileId: i, kind: a, inputs: s, signal: r } = e;
	r?.throwIfAborted();
	let o = n, l = null;
	if (o) try {
		const e = await o.activityDays.where("fileId").equals(i).primaryKeys();
		l = await R(JSON.stringify(_i({
			version: 1,
			core: "9e3111066519c566f8ef873ecc07d11a9fe6d7c3",
			kind: a,
			fileId: i,
			dayIds: [...e].sort((e, t) => Number(e) - Number(t)),
			inputs: s
		})));
		const t = await o.physicalActivityFileSummaries.get([i, a]);
		if (t?.inputKey === l) return t.value;
	} catch {
		o = null;
	}
	r?.throwIfAborted();
	const u = await t();
	if (r?.throwIfAborted(), o && l) try {
		await F(o, [o.physicalActivityFileSummaries], (e) => e.table(o.physicalActivityFileSummaries.name).put({
			fileId: i,
			kind: a,
			inputKey: l,
			value: u
		}), r);
	} catch {
		r?.throwIfAborted(), console.warn("[physical-activity] A file's answers could not be stored; the tab recomputes them.");
	}
	return u;
}
function yi(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function vi(e, t) {
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
function Mi(e, t, n) {
	if (!n) return e.ruleLabel;
	const i = String(t.sedentaryMax), a = String(t.lightMin), s = String(t.moderateMin - 1), r = String(t.moderateMin), o = String(t.vigorousMin - 1), l = String(t.vigorousMin);
	return t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, non-sedentary >=${a} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${i}, light ${a}-${s}, MVPA >=${r} counts/min` : `Custom cutpoints: Sed <=${i}, light ${a}-${s}, moderate ${r}-${o}, vigorous >=${l} counts/min`;
}
const bi = [
	null,
	"sedentary",
	"light",
	"moderate",
	"vigorous"
];
async function ki(e) {
	const { values: t, countsPerMinuteScale: n, method: i, date: a, maskReasons: s } = e;
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
	const l = await O(e.signal).cutpointToneCodes(Float64Array.from(o, (e) => e.countsPerMinute), yi(i));
	let u = 0;
	const c = [];
	return o.forEach((e, t) => {
		const n = bi[l[t] ?? 0];
		n && (u = Math.max(u, e.countsPerMinute), c.push({
			x: c.length,
			value: e.countsPerMinute,
			tone: n,
			maskReason: s?.[e.index] ?? "included"
		}));
	}), 0 === c.length ? null : {
		date: a,
		sourceLabel: i.sourceLabel,
		valueMax: Math.max(u, i.cutpointScaleMax ?? 1),
		points: c
	};
}
function Si(e, t) {
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
function xi(e) {
	e.mvpaMinutesPerDay = e.totalDays > 0 ? e.mvpaMinutes / e.totalDays : 0, e.totalDays > 0 && (null != e.mvpaBouts && (e.mvpaBoutsPerDay = e.mvpaBouts / e.totalDays), null != e.sedentaryBreaks && (e.sedentaryBreaksPerDay = e.sedentaryBreaks / e.totalDays));
}
function Ii(e, t) {
	e.sedentaryMinutes += t.sedentaryMinutes, e.lightMinutes += t.lightMinutes, e.moderateMinutes += t.moderateMinutes, e.vigorousMinutes += t.vigorousMinutes, e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes;
}
function Ai(e, t, n, i) {
	if (0 === t.totalDays) return;
	e.totalDays += t.totalDays, Ii(e, t.intensity), e.defaultIntensityMinutes && t.defaultIntensity && Ii(e.defaultIntensityMinutes, t.defaultIntensity), null != t.mimsUnitTotal && (e.mimsUnitTotal = (e.mimsUnitTotal ?? 0) + t.mimsUnitTotal), e.totalEpochsReviewed = (e.totalEpochsReviewed ?? 0) + t.totalEpochs, e.includedEpochsReviewed = (e.includedEpochsReviewed ?? 0) + t.includedEpochs, e.wakeWearMinutes = (e.wakeWearMinutes ?? 0) + t.wakeWearMinutes, e.excludedNonwearMinutes = (e.excludedNonwearMinutes ?? 0) + t.excludedNonwearMinutes, e.excludedMainSleepMinutes = (e.excludedMainSleepMinutes ?? 0) + t.excludedMainSleepMinutes, e.excludedNapMinutes = (e.excludedNapMinutes ?? 0) + t.excludedNapMinutes, e.maskOverlapEpochs = (e.maskOverlapEpochs ?? 0) + t.overlapEpochs, e.maskPolicy = n;
	const a = t.bouts;
	a && (e.mvpaBouts = (e.mvpaBouts ?? 0) + a.mvpaBouts, e.mvpaBoutMinutes = (e.mvpaBoutMinutes ?? 0) + a.mvpaBoutMinutes, e.sedentaryBouts = (e.sedentaryBouts ?? 0) + a.sedentaryBouts, e.sedentaryBreaks = (e.sedentaryBreaks ?? 0) + a.sedentaryBreaks, i.total += a.meanSedentaryBoutMinutes * a.sedentaryBouts, e.meanSedentaryBoutMinutes = e.sedentaryBouts > 0 ? i.total / e.sedentaryBouts : 0);
}
async function Ni(e) {
	const { file: t, days: n, summaries: i, markersByAnalysisDate: a, sensorNonwearPeriods: s, maskPolicy: r, validDayCriteria: o, cutpointMethods: l, choiAxis: u } = e, c = new Set([...a].filter(([, e]) => m(e)).map(([e]) => e)), d = Number.isFinite(t.epochLengthSeconds) && t.epochLengthSeconds > 0 ? t.epochLengthSeconds : 60, p = 60 / d, g = {
		policy: ui(r),
		intervals: oi(a, s)
	}, h = n.map((e) => li(e, r, u, d)), f = n.map((e, t) => ({
		timestamps: new Float64Array(e.timestamps),
		epochSeconds: d,
		series: h[t]
	})), { dates: _, shortfall: w } = await async function({ days: e, countDays: t, epochSeconds: n, request: i, criteria: a, scoredDates: s, signal: r }) {
		if (!a) return {
			dates: null,
			shortfall: null
		};
		if (e.some((e) => !s.has(e.date))) return {
			dates: null,
			shortfall: null
		};
		const o = await di({
			...i,
			days: [...t]
		}, r), l = 86400 / n, u = await mi(e.map((e) => e.date), O(r)), c = e.map((e, t) => {
			const n = o.days[t].mask;
			return {
				date: e.date,
				wearMinutes: n.wakeWearMinutes,
				isWeekend: u[t],
				isPartialDay: n.totalEpochs < l
			};
		}), d = await async function(e, t = ke, n) {
			return O(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
		}(c, a, r);
		if (!d.meetsCriteria) {
			const e = a.requireWeekendDay && !d.hasWeekendValidDay ? ", including a weekend day" : "";
			return {
				dates: /* @__PURE__ */ new Set(),
				shortfall: `${String(d.validDays)} of the required ${String(a.minValidDaysPerParticipant)} valid days${e}`
			};
		}
		const m = await async function(e, t = ke, n) {
			const i = await O(n).validWearDays(Float64Array.from(e), t);
			return Array.from(i, (e) => 0 !== e);
		}(c.map((e) => e.wearMinutes), a, r);
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
	}), y = i.filter((e) => !(r.minimumWakeWearMinutes > 0 && (null == e.validHours || 60 * e.validHours < r.minimumWakeWearMinutes))).filter((e) => null != e.sedentaryMinutes && null != e.lpaMinutes && null != e.mvpaMinutes).filter((e) => !_ || _.has(e.analysisDate)).map((e) => ({
		sedentaryMinutes: e.sedentaryMinutes,
		lpaMinutes: e.lpaMinutes,
		mvpaMinutes: e.mvpaMinutes
	})), v = n.map((e) => !_ || _.has(e.date)), M = [];
	for (let m = 0; m < l.length; m++) {
		e.signal?.throwIfAborted();
		const i = l[m];
		if (ve(i.method, t.sourceProfileId)) {
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
		const s = await di({
			...g,
			analysisKind: "count_cutpoint",
			thresholds: yi(i),
			defaultThresholds: yi(be[m]),
			days: a.map(({ index: e, values: t }) => ({
				...f[e],
				values: t,
				aggregate: v[e]
			}))
		}, e.signal), r = {
			signalSeen: s.days.some((e) => e.hasValidSignal),
			totals: s.totals
		}, o = a.find(({ index: e }) => v[e]);
		if (o) {
			const t = await di({
				...g,
				includeEpochDetails: !0,
				days: [f[o.index]]
			}, e.signal), a = await ki({
				values: o.values,
				countsPerMinuteScale: p,
				method: i,
				date: n[o.index].date,
				maskReasons: t.days[0].reasons,
				signal: e.signal
			});
			a && (r.previewTrace = a);
		}
		if (s.totals.totalDays > 0) {
			const t = await Se(i.method, d, e.signal);
			t && "warn" === t.severity && (r.epochMismatch = t);
		}
		M.push(r);
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
		const i = await di({
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
		preschoolRf: await k(b(hi, "classifier"), "preschool_classifier")
	};
}
async function Ti(e = {}) {
	const t = await q(e.dbOverride, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = e.username ?? "anonymous", i = e.maskPolicy ?? ai, a = e.validDayCriteria, s = ye("ggir_enmo"), r = ye("mims"), o = ye("preschool_free_living_rf_3_5"), l = Si({
		method: s.method,
		label: s.label,
		requiredSignal: s.requiredSignal,
		sourceLabel: s.signalLabel,
		ruleLabel: "Uses imported GGIR daily sedentary, LPA, and MVPA summaries",
		unavailableAction: "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."
	}, null), u = O(e.signal), c = await Promise.all(be.map((t) => async function(e, t, n) {
		const i = t[e.method];
		if (!i) return e;
		const a = await xe(i, n);
		if (!a) return e;
		const s = yi(e);
		return {
			...e,
			ruleLabel: Mi(e, a, JSON.stringify(a) !== JSON.stringify(s)),
			cutpointBands: vi(a, e.cutpointBands),
			cutpointScaleMax: Math.max(e.cutpointScaleMax ?? 1, ...Object.values(a).filter(Number.isFinite)),
			...a
		};
	}(t, e.cutpointOverrides ?? {}, u))), d = c.map((e, t) => function(e, t) {
		return {
			...Si(e, null),
			cutpointThresholds: yi(e),
			defaultCutpointThresholds: yi(t),
			cutpointEditable: !0,
			defaultIntensityMinutes: {
				sedentaryMinutes: 0,
				lightMinutes: 0,
				moderateMinutes: 0,
				vigorousMinutes: 0,
				mvpaMinutes: 0
			}
		};
	}(e, be[t])), m = new Array(c.length).fill(!1), p = [], g = Si({
		method: r.method,
		label: r.label,
		requiredSignal: r.requiredSignal,
		sourceLabel: r.signalLabel,
		ruleLabel: "Uses stored MIMS_UNIT epoch values from actours; intensity cutpoints/equating are not applied in this row.",
		unavailableAction: "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values.",
		unavailableStatus: "backend_required"
	}, null);
	g.mimsUnitTotal = 0, g.mimsUnitPerDay = 0;
	const h = Si({
		method: o.method,
		label: o.label,
		requiredSignal: o.requiredSignal,
		sourceLabel: o.signalLabel,
		ruleLabel: "Uses actimetric Preschool Wrist Random Forest Free Living Lag-Lead classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
		unavailableAction: "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.",
		unavailableStatus: "backend_required"
	}, null), f = ye("hildebrand_enmo_wrist_2014"), _ = Si({
		method: f.method,
		label: f.label,
		requiredSignal: f.requiredSignal,
		sourceLabel: f.signalLabel,
		ruleLabel: "Hildebrand 2014 non-dominant wrist ENMO (mg) cut-points: MVPA >=201 mg, vigorous >=707 mg; light near ~45 mg. Applied to a calibrated ENMO (mg) epoch signal, never to ActiGraph counts.",
		unavailableAction: "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline; the browser count pipeline does not compute ENMO mg.",
		unavailableStatus: "needs_signal"
	}, null);
	let w = !1, y = !1, v = !1, M = !1;
	const b = he(), k = c.map(() => ({ total: 0 })), S = { total: 0 };
	for (const I of t) {
		if (e.signal?.throwIfAborted(), !I.id) continue;
		const t = I.id, s = await ee(t, e.dbOverride), r = await j(t, n, e.dbOverride), o = await G(t, e.dbOverride), u = await wi({
			db: e.dbOverride ?? null,
			fileId: t,
			kind: "analysis",
			...e.signal ? { signal: e.signal } : {},
			inputs: {
				epochLengthSeconds: I.epochLengthSeconds,
				sourceProfileId: I.sourceProfileId ?? null,
				summaries: s,
				markers: fi(r),
				sensorNonwearPeriods: o,
				maskPolicy: i,
				validDayCriteria: a ?? null,
				thresholds: c.map(yi),
				choiAxis: b
			}
		}, async () => Ni({
			file: I,
			days: [...(await Z(t, e.dbOverride, e.activityDayMemo)).values()],
			summaries: s,
			markersByAnalysisDate: r,
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
			e.signalSeen && (m[t] = !0), Ai(n, e.totals, i, k[t]), e.previewTrace && !n.previewTrace && (n.previewTrace = e.previewTrace), e.epochMismatch && !n.epochMismatch && (n.epochMismatch = e.epochMismatch);
		}), u.mims && (u.mims.signalSeen && (v = !0), Ai(g, u.mims.totals, i, S)), u.preschoolRf && (u.preschoolRf.signalSeen && (M = !0), Ai(h, u.preschoolRf.totals, i, S));
	}
	for (let I = 0; I < d.length; I++) {
		const e = d[I], t = c[I];
		e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes, 0 === e.totalDays && (e.available = !1, e.status = m[I] ? "ready" : "needs_signal", e.unavailableReason = m[I] ? p.length > 0 ? `Excluded by the valid-days-per-participant rule: ${p.join("; ")}. Change it in Study Settings → valid-day criteria.` : `No local ${e.sourceLabel.toLowerCase()} days meet the minimum wake-wear rule.` : w ? `No local ${e.sourceLabel.toLowerCase()} days are available.` : "No local activity epochs are available.", e.nextStepLabel = t.unavailableAction), xi(e);
	}
	l.moderateMinutes = l.mvpaMinutes, xi(l), 0 === l.totalDays && (l.available = !1, l.status = y ? "ready" : "needs_signal", l.unavailableReason = y ? "No local GGIR daily summaries meet the current inclusion rules." : "No local GGIR daily summaries are available. Import raw/5-second-capable files to populate ENMO summaries.", l.nextStepLabel = "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."), g.totalDays > 0 ? (g.available = !0, g.status = "ready", g.unavailableReason = null, g.nextStepLabel = null, g.mimsUnitPerDay = (g.mimsUnitTotal ?? 0) / g.totalDays) : (g.available = !1, g.status = v ? "ready" : "backend_required", g.unavailableReason = v ? "No stored MIMS_UNIT epoch days meet the current inclusion rules." : "No MIMS_UNIT epoch values are stored in this workspace yet. This becomes ready when the actours MIMS backend/WASM build computes and stores MIMS_UNIT epochs.", g.nextStepLabel = "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values."), xi(_), _.available = !1, _.status = "needs_signal", _.unavailableReason = "No calibrated ENMO (mg) epoch stream is available in this workspace. ENMO (mg) is a raw/GGIR-derived signal; the browser count pipeline does not produce it, so this method cannot classify counts against Hildebrand mg thresholds.", _.nextStepLabel = "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline.", xi(h), h.totalDays > 0 ? (h.available = !0, h.status = "ready", h.unavailableReason = null, h.nextStepLabel = null) : (h.available = !1, h.status = M ? "ready" : "backend_required", h.unavailableReason = M ? "No stored preschool wrist RF class days meet the current inclusion rules." : "No actimetric-compatible preschool wrist RF class epochs are stored in this workspace yet. This becomes ready when actours/WASM computes 15 s classes for 3-5 year-old wrist data.", h.nextStepLabel = "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.");
	const x = t.map((e) => e.sourceProfileId);
	return [
		l,
		h,
		...d,
		_,
		g
	].filter((e) => Ie(e.method, x));
}
function Ri(e, t) {
	if (!t) return !0;
	const [n, i] = t;
	return e >= n && e <= i;
}
function Ei(e) {
	const t = Me.find((t) => t.method === e);
	if (t) return {
		family: t.family,
		requiredSignal: t.requiredSignal,
		computationOwner: t.backendOwner ?? "browser_workspace",
		frontendComputesMetric: t.frontendComputesMetric,
		statusWhenMissing: t.statusWhenMissing
	};
	const n = ye(e), i = "ready" === n.statusWhenMissing ? "needs_signal" : n.statusWhenMissing;
	return {
		family: n.family,
		requiredSignal: n.requiredSignal,
		computationOwner: n.backendDependency ?? "browser_workspace",
		frontendComputesMetric: "count_cutpoint" === n.family,
		statusWhenMissing: i
	};
}
function $i(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function Oi(e, t, n) {
	return "default" === n ? e.ruleLabel : t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, non-sedentary >=${String(t.lightMin)} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, MVPA >=${String(t.moderateMin)} counts/min` : `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, moderate ${String(t.moderateMin)}-${String(t.vigorousMin - 1)}, vigorous >=${String(t.vigorousMin)} counts/min`;
}
function Di(e) {
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
async function Ci(e, t, n = {}, i) {
	const a = await q(i), s = (e.length > 0 ? a.filter((t) => null != t.id && e.includes(t.id)) : a).sort((e, t) => e.filename.localeCompare(t.filename)), r = [], o = n.username ?? "anonymous", l = n.maskPolicy ?? ai, u = n.choiAxis ?? he(), c = ii(l), d = n.cutpointOverrides, m = n.cutpointPresetNames, p = O(n.signal), g = await Promise.all(be.map((e) => async function(e, t, n, i) {
		const a = t?.[e.method], s = a ? await xe(a, i) : null;
		return s ? {
			thresholds: s,
			source: "custom",
			presetName: n?.[e.method] ?? ""
		} : {
			thresholds: $i(e),
			source: "default",
			presetName: ""
		};
	}(e, d, m, p))), h = n.inclusionRulePresetName ?? "", f = n.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), _ = ye("ggir_enmo"), w = ye("mims"), y = ye("preschool_free_living_rf_3_5"), v = Ei("ggir_enmo"), M = Ei("mims"), b = Ei("preschool_free_living_rf_3_5");
	for (const k of s) {
		if (n.signal?.throwIfAborted(), !k.id) continue;
		if (!0 === k.ggirSummariesNeedRecompute) throw new Error(`${k.filename}: its GGIR summaries were not recomputed for the current study settings. In Study settings, run Rescore (offered for every file whose summaries are refused) before exporting.`);
		const e = k.participantId ?? "", a = Number.isFinite(k.epochLengthSeconds) && k.epochLengthSeconds > 0 ? k.epochLengthSeconds : 60, s = await ee(k.id, i);
		for (const n of s) Ri(n.analysisDate, t) && r.push({
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
		const d = [...(await Z(k.id, i, n.activityDayMemo)).entries()].filter(([e]) => Ri(e, t)).sort(([e], [t]) => e.localeCompare(t)).map(([, e]) => e), m = await j(k.id, o, i), p = await G(k.id, i), S = {
			policy: ui(l),
			intervals: oi(m, p)
		}, x = d.map((e) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: a,
			series: li(e, l, u, a)
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
			const s = await di({
				...S,
				...t,
				days: i.map(({ dayInput: e }) => e)
			}, n.signal);
			return n.signal?.throwIfAborted(), i.forEach(({ index: e }, t) => {
				a[e] = s.days[t];
			}), a;
		}, A = (e, t, n, i) => e && e.length > 0 ? {
			timestamps: x[i].timestamps,
			series: x[i].series ?? [],
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(e),
			grid: t,
			fallbackEpochSeconds: a
		} : null, N = [], T = be.map((e) => null !== ve(e.method, k.sourceProfileId));
		for (const [t, n] of be.entries()) T[t] ? N.push([]) : N.push(await I((e, t) => {
			const i = new Float64Array("axisY" === n.axis ? e.axisY : e.vectorMagnitude);
			return i.length > 0 && i.length === x[t].timestamps.length ? {
				...x[t],
				values: i
			} : null;
		}, {
			analysisKind: "count_cutpoint",
			thresholds: g[t].thresholds
		}));
		const R = await I((e, t) => A(hi(e), "classifier", e, t), { analysisKind: "preschool_classifier" }), E = await I((e, t) => A(e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output", e, t), { analysisKind: "mims_volume" }), $ = await Promise.all(be.map((e) => Se(e.method, a, n.signal)));
		for (const [t, n] of d.entries()) {
			const i = n.date;
			for (const [n, d] of be.entries()) {
				if (T[n]) continue;
				const s = g[n], u = Oi(d, s.thresholds, s.source), m = Ei(d.method), p = $[n], _ = Di(N[n][t]);
				r.push({
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
					thresholdSource: s.source,
					thresholdPresetName: s.presetName,
					sedentaryMax: s.thresholds.sedentaryMax,
					lightMin: s.thresholds.lightMin,
					moderateMin: s.thresholds.moderateMin,
					vigorousMin: s.thresholds.vigorousMin,
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
			const s = Di(R[t]);
			null === ve("preschool_free_living_rf_3_5", k.sourceProfileId) && r.push({
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
				epochLengthSeconds: s?.epochLengthSeconds ?? a,
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
				notes: s ? "Stored actimetric-compatible preschool class epochs summarized with the selected mask policy." : "No stored actimetric-compatible preschool class epochs for this day."
			});
			const u = Di(E[t]);
			null === ve("mims", k.sourceProfileId) && r.push({
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
].join(","), be.length;
var Li = n({
	editsFromMarkers: () => Hi,
	getGgirMarkerInputs: () => qi,
	ggirNightRecords: () => zi,
	hasGgirRecomputeFailure: () => ji,
	mergeGgirSleepMarkers: () => Ui,
	recomputeGgirResults: () => Ji,
	recoverPendingGgirRecomputes: () => Yi,
	reviewGgirResultsForMarkers: () => Qi,
	scheduleGgirRecompute: () => Ki
});
const Bi = new EventTarget(), Pi = /* @__PURE__ */ new WeakMap(), Fi = 800, Wi = "Update GGIR review";
function ji(e, t, n) {
	return C.getState().jobs[`${n.name}:${Vi(e, t)}`]?.status === P.FAILED;
}
function Gi(e, t, n, i, a) {
	if (a?.aborted || function(e) {
		return e instanceof Error && e.name === _.errnames.DatabaseClosed;
	}(i)) return;
	const s = Vi(e, t), r = `${n.name}:${s}`, o = C.getState();
	o.jobs[r]?.controller.signal.aborted || o.jobs[r]?.status === P.ELSEWHERE || (o.update(r, {
		id: r,
		key: s,
		workspaceId: n.name,
		kind: D.GGIR_RECOMPUTE,
		label: Wi,
		controller: o.jobs[r]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: P.FAILED
	}), n.isOpen() && B() === n && Bi.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function Ui(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function zi(e, t, n, i = [], a) {
	const s = Y([...n.values()].flat(), !0), r = s?.algorithm ?? me(t), o = s?.detectionRule ?? null, l = /* @__PURE__ */ new Map();
	for (const [d, m] of n) {
		const e = Y(m, !0);
		e && l.set(d, [{
			...e,
			algorithm: r,
			detectionRule: o
		}]);
	}
	const u = ge(t), c = u.length ? await O(a).ggirLabelsToStoredMs(Float64Array.from(u.flatMap((e) => [e.onsetMs, e.wakeMs])), i) : [];
	for (const [d, m] of u.entries()) {
		const t = l.get(m.nightDate)?.[0], n = se(m, t);
		"scored" !== n.kind && "invalid" !== n.kind ? l.set(m.nightDate, [{
			fileId: e,
			date: m.nightDate,
			username: te,
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
			sleepMarkers: Ui({
				markerType: h.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: c[2 * d] / 1e3,
				offsetTimestamp: c[2 * d + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : l.set(m.nightDate, t ? [t] : []);
	}
	return l;
}
async function Hi(e, t, n = [], i) {
	const a = ue(e).flatMap((e) => {
		const n = se(e, t.get(e.nightDate));
		return "scored" === n.kind && null != n.main.onsetTimestamp && null != n.main.offsetTimestamp ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === a.length) return [];
	const s = O(i), r = await s.storedToGgirLabelsMs(Float64Array.from(a.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await s.wallClockLabels(Float64Array.from([...r, ...a.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * a.length;
	return a.flatMap(({ w: e }, t) => {
		const n = o[2 * t], i = o[2 * t + 1];
		return n !== o[l + 2 * t] || i !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: i
		}] : [];
	});
}
async function qi(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [i, a] = await Promise.all([K(e, t, n), W(e, n)]), s = new Map([...i].flatMap(([e, t]) => {
			const n = Y(t, !0);
			return n ? [[e, n]] : [];
		})), r = a?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([r ?? [], [...s].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				se(void 0, t)
			])]),
			markers: s,
			clockSteps: r,
			bundleRevision: a?.ggirBundleRevision
		};
	});
}
function Vi(e, t) {
	return `${D.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function Ki(e, t, n, i) {
	if (!n.isOpen() || B() !== n || i?.aborted) return;
	let a = Pi.get(n);
	a || (a = /* @__PURE__ */ new Map(), Pi.set(n, a));
	const s = Vi(e, t);
	clearTimeout(a.get(s)), a.set(s, setTimeout(() => {
		a.delete(s), n.files.get(e).then((a) => {
			if (a?.ggirBundleRevision && n.isOpen() && B() === n && !i?.aborted) return Ji(e, t, n, i);
		}).catch((a) => {
			i?.aborted || a instanceof DOMException && "AbortError" === a.name || (Gi(e, t, n, a, i), n.isOpen() && B() === n && (console.error("[ggir-results] recompute failed."), z("error", "GGIR results recompute failed", X(a))));
		});
	}, Fi));
}
function Ji(e, t, n, i, a = !0) {
	const s = (r, o = i) => $({
		kind: D.GGIR_RECOMPUTE,
		key: Vi(e, t),
		label: Wi,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (i) => {
			i.signal.throwIfAborted();
			const o = await async function(e, t, n, i, a) {
				if (i.throwIfAborted(), !n.isOpen() || B() !== n) return null;
				const { markerInputs: s, markers: r, clockSteps: o, bundleRevision: l } = await qi(e, t, n);
				if (!l) return null;
				const u = await n.ggirScorerReviews.get([e, t]);
				if (!n.isOpen() || B() !== n) return null;
				if (i.throwIfAborted(), u?.markerInputs === s && u.bundleRevision === l) return a && Bi.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), u.current ?? null;
				const c = await f(n, e);
				if (!c) return null;
				const d = await Hi(c.imported, r, o, i);
				if (!n.isOpen() || B() !== n) return null;
				const m = Zi(u, l, d) ? u.current : (await Qi(c, r, o, d, i)).current;
				i.throwIfAborted();
				const p = (/* @__PURE__ */ new Date()).toISOString();
				if (!n.isOpen() || B() !== n) return null;
				const g = await F(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!n.isOpen() || B() !== n) return null;
					const a = await qi(e, t, n);
					return a.markerInputs === s && a.bundleRevision === l && (0 === await n.ggirResultsBundles.where(":id").equals(e).count() ? null : (i.throwIfAborted(), await n.ggirScorerReviews.put({
						fileId: e,
						scorer: t,
						...m ? { current: m } : {},
						edits: d,
						markerInputs: s,
						bundleRevision: l,
						updatedAt: p
					}), !0));
				}, i);
				return g ? (Bi.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), i.throwIfAborted(), m ?? c.imported) : (i.throwIfAborted(), !1 !== g && null);
			}(e, t, n, i.signal, a);
			return i.signal.throwIfAborted(), !1 !== o ? o : (r < 2 && s(r + 1, i.signal).catch((a) => Gi(e, t, n, a, i.signal)), null);
		}
	});
	return s(0);
}
function Yi(e, t) {
	return $({
		kind: D.GGIR_RECOVERY,
		key: D.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const i = () => !t.signal.aborted && e.isOpen() && B() === e;
			try {
				if (!i()) return;
				const s = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: r } = await import("./local-data-source-AP59IvIQ.js").then((e) => e.n);
				for (const o of s) {
					if (t.signal.throwIfAborted(), !i()) return;
					try {
						const [s] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), r(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), u = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...s.map((e) => e.scorer)]);
						u.delete(te);
						for (const r of u) {
							if (!i()) return;
							try {
								const n = ji(o, r, e);
								if (!n) {
									const { markerInputs: t, bundleRevision: n } = await qi(o, r, e), i = s.find((e) => e.scorer === r);
									if (n && i?.markerInputs === t && i.bundleRevision === n) continue;
								}
								await Ji(o, r, e, t.signal, n);
							} catch (a) {
								n = !0, Gi(o, r, e, a, t.signal);
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
				const a = Object.values(C.getState().jobs).filter((t) => L(t) && t.workspaceId === e.name && t.kind === D.GGIR_RECOMPUTE && t.status === P.FAILED);
				for (const t of a) {
					const a = t.key.slice(D.GGIR_RECOMPUTE.length + 1);
					if (!i()) break;
					const s = a.indexOf(":"), r = Number(a.slice(0, s)), o = JSON.parse(a.slice(s + 1));
					try {
						await e.transaction("r", e.ggirResultsBundles, e.markers, e.ggirScorerReviews, async () => {
							if (!i()) return;
							const [n, a, s] = await Promise.all([
								e.ggirResultsBundles.where(":id").equals(r).count(),
								e.markers.where("fileId").equals(r).filter((e) => e.username === o).count(),
								e.ggirScorerReviews.where("[fileId+scorer]").equals([r, o]).count()
							]);
							i() && (0 === n || 0 === a && 0 === s) && (C.getState().dismiss(t.id), Bi.dispatchEvent(new CustomEvent("updated", { detail: {
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
function Zi(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
async function Qi(e, t, n = [], i, a, s) {
	const r = i ?? await Hi(e.imported, t, n, a);
	let o;
	a?.throwIfAborted();
	const l = s?.review;
	if (Zi(l, s?.bundleRevision, r)) o = l.current;
	else if (r.length > 0 && e.ms2 && e.ms3) {
		const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), i = t(e.ms3), s = t(e.ms4), l = t(e.ms5), u = t(e.sleeplogRData);
		o = ce(await E(a, (t) => t.reviewGgirResults({
			part1: new Uint8Array(e.part1),
			configCsv: e.configCsv,
			recordingId: w(e.recordingFile),
			...n ? { ms2: n } : {},
			...i ? { ms3: i } : {},
			...s ? { ms4: s } : {},
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
	const u = Object.getOwnPropertyDescriptors(e);
	return delete u.current, Reflect.deleteProperty(u, "edits"), Object.defineProperties({
		...o ? { current: o } : {},
		edits: r
	}, u);
}
const Xi = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], ea = [
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
], ta = [
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
], na = [
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
], ia = ["fileId", ...d], aa = {
	files: [
		...Xi,
		"ggirTimezone",
		"recording",
		"ggirClockSteps"
	],
	markers: ea,
	activityDays: ta,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: na
}, sa = {
	files: [...Xi, "ggirClockSteps"],
	markers: ea,
	activityDays: ta,
	ggirResultsBundles: na,
	ggirResultsBlobs: ia,
	ggirScorerReviews: [
		"fileId",
		"scorer",
		"current",
		"edits",
		"bundleRevision"
	]
}, ra = {
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
}, oa = {
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
}, la = {
	sleep: aa,
	nonwear: aa,
	summary: aa,
	wide: aa,
	circadian: {
		files: Xi,
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
	ggirReport: sa,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: ea,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: Xi,
		markers: ea,
		actiwareFileData: [
			"fileId",
			"actiwareIntervals",
			"actiwareStatistics",
			"actiwareStatisticsNeedsRecompute"
		],
		actiwareStatisticsInputs: ["fileId", "input"]
	},
	actiwareSleepWake: {
		files: Xi,
		markers: ea,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: ra,
	audit: oa,
	ggirResults: {
		...ra,
		...aa,
		...sa,
		auditLog: oa.auditLog,
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
			A
		]
	}
}, ua = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap();
function da(e) {
	if (!e || "object" != typeof e) return e;
	const t = ca.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return function(e, t, n, i) {
			for (let a = 0; a < n.byteLength;) {
				const t = n.subarray(a, a + on), s = e.read(t, { at: i + a });
				if (!Number.isInteger(s) || s <= 0 || s > t.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
				a += s;
			}
		}(t.store, 0, e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(da) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, da(t)])) : structuredClone(e);
}
function ma(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(ma), Object.freeze(e)), e;
}
function pa(e) {
	return function(e) {
		const t = Object.freeze({ files: ma((e.files ?? []).map((e) => Object.fromEntries(Xi.map((t) => [t, da(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
		return ua.set(t, e), t;
	}(e);
}
var ga = class extends Error {};
function ha(e, t, n) {
	const i = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new ga(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (i(t), Reflect.get(e, t, n)),
		has: (e, t) => (i(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (i(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function fa(e, t, n = []) {
	const i = ua.get(e);
	if (!i) throw new ga("Export requires a captured input snapshot");
	const a = Object.entries(la).find(([, e]) => e === t)?.[0];
	if (!a) throw new ga("Export producer has no registered input declaration");
	const s = {};
	for (const [r, o] of Object.entries(t)) {
		const e = i[r].filter((e) => !n.length || "studySettings" === r || n.includes("files" === r ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const i of o.filter((e) => e in t)) Object.defineProperty(n, i, {
				enumerable: !0,
				get: () => ma(da(t[i]))
			});
			return ha(n, o, `${a}: undeclared field ${r}.`);
		});
		Object.assign(s, { [r]: Object.freeze(e) });
	}
	return ha(s, Object.keys(t), `${a}: undeclared table `);
}
function _a(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	for (const a of e.markers) {
		if (a.fileId !== t || a.username !== n) continue;
		const e = ne(a), s = i.get(a.date) ?? [];
		s.push(e), i.set(a.date, s);
	}
	return i;
}
function wa(e, t, n) {
	return new Map([..._a(e, t, n)].flatMap(([e, t]) => {
		const n = Y(t.filter(m));
		return n ? [[e, n]] : [];
	}));
}
const ya = /* @__PURE__ */ new WeakMap();
function va(e, t, n, i) {
	let a = ya.get(e);
	a || (a = /* @__PURE__ */ new Map(), ya.set(e, a));
	const s = JSON.stringify([t, n]);
	let r = a.get(s);
	return r || (a.clear(), r = async function(e, t, n, i) {
		const a = fa(e, la.ggirReport, [t]), s = a.files.find((e) => e.id === t), r = a.ggirResultsBundles.find((e) => e.fileId === t), o = r && p(r, a.ggirResultsBlobs.find((e) => e.fileId === t)), l = _a(a, t, n), u = o ? await zi(t, o.imported, l, s.ggirClockSteps, i) : l, c = new Map([...u].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), d = new Set([...c].filter(([, e]) => "invalid" === se(void 0, e).kind).map(([e]) => e)), m = {
			review: a.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n),
			bundleRevision: s.ggirBundleRevision
		}, g = o ? await Qi(o, c, s.ggirClockSteps, void 0, i, m) : void 0, h = g ? await Ma(g, d, i) : void 0;
		return {
			markersByAlgo: u,
			selected: c,
			bundle: h,
			sets: o && g ? await Promise.all(le(o).map(async ({ bundle: e }) => e === o ? h : Ma(await Qi(e, c, s.ggirClockSteps, g.edits, i), d, i))) : [],
			invalidDates: d
		};
	}(e, t, n, i), a.set(s, r), r.catch(() => {
		a.get(s) === r && a.delete(s);
	})), r;
}
async function Ma(e, t, n) {
	const { ggirCell: i, ggirNum: a } = await import("./ggir-results-types-WB8axvb-.js").then((e) => e.i), s = e.part2Reports?.["part2_daysummary.csv"], r = e.cleanedNightsCsv ? await O(n).readGgirReportCsv(e.cleanedNightsCsv, e.configCsv) : void 0, o = /* @__PURE__ */ new Map();
	if (s) for (let c = 0; c < s.rows; c++) {
		const e = i(s, y.ggir_id.header, c), t = yn(i(s, y.ggir_calendar_date.header, c));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		o.set(n, o.has(n) ? null : c);
	}
	const l = vn(e.imported, "nights"), u = async (e) => {
		const t = e.nights, u = await Promise.all(Array.from({ length: t.rows }, async (u, c) => {
			const d = i(t, y.ggir_id.header, c), m = o.get(JSON.stringify([null == d ? null : String(d), l(t, c, !1)])), p = s && null != m ? i(s, y.ggir_day_valid_hours.header, m) : null, g = s && null != m ? i(s, y.ggir_day_hours.header, m) : null, h = s && null != m ? a(s, y.ggir_day_valid_hours.header, m) : null, f = s && null != m ? a(s, y.ggir_day_hours.header, m) : null, _ = null != h && null != f ? await O(n).ggirDayValidFraction(h, f) : null, w = a(t, y.ggir_night.header, c), v = Array.from({ length: e.days.rows }, (e, t) => t).find((t) => "WW" === i(e.days, "window", t) && a(e.days, "night_number", t) === w), M = r ? Array.from({ length: r.rows }, (e, t) => t).find((e) => String(i(r, y.ggir_id.header, e)) === String(d) && a(r, y.ggir_night.header, e) === w) : void 0, b = {
				ggir_nonwear_perc_spt: e.nightRecomputed[c] ? void 0 === v ? null : i(e.days, y.ggir_nonwear_perc_spt.header, v) : t.columns.includes(y.ggir_nonwear_perc_spt.header) ? i(t, y.ggir_nonwear_perc_spt.header, c) : r?.columns.includes(y.ggir_nonwear_perc_spt.header) && void 0 !== M ? i(r, y.ggir_nonwear_perc_spt.header, M) : void 0 === v ? null : i(e.days, y.ggir_nonwear_perc_spt.header, v),
				ggir_day_valid_hours: p,
				ggir_day_hours: g,
				ggir_day_valid_fraction: _ ?? null
			}, k = (s ? null === m ? "duplicate_part2_day" : void 0 === m ? "no_matching_part2_day" : null : "source_reported_missing") ?? "source_reported_missing";
			return {
				values: b,
				reasons: {
					ggir_day_valid_hours: null == h ? k : null,
					ggir_day_hours: null == f ? k : null,
					ggir_day_valid_fraction: null != _ ? null : null != f && f <= 0 ? "not_applicable_to_row" : k
				}
			};
		})), c = x.ggir_review_night_extension, d = [.../* @__PURE__ */ new Set([
			...t.columns,
			...c.map((e) => y[e].header),
			...c.map((e) => y[e].header + "_missing_reason")
		])], m = d.map((e) => {
			const n = c.find((t) => y[t].header + "_missing_reason" === e);
			if (n) return u.map((e) => e.reasons[n] ?? null);
			const i = c.find((t) => y[t].header === e);
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
		...e.personReports && (e.edits.length > 0 || t.size > 0) ? { personRecomputed: await Sn(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await u(e.imported),
		...e.current ? { current: await u(e.current) } : {}
	};
}
function ba(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
async function ka(n, i, a, { db: s, signal: o }) {
	o?.throwIfAborted();
	const l = n.files.filter((e) => i.includes(e.id)), u = l.map((e) => e.id), c = /* @__PURE__ */ new Map();
	let d = !1;
	try {
		const e = await function(e, { fileIds: t, dateRange: n, signal: i }) {
			const a = fa(e, la.circadian, t);
			return async function(e, t, { dateRange: n, signal: i }) {
				const a = O(i), s = [];
				let o = 0;
				for (const l of e) {
					if (!l.id) continue;
					i?.throwIfAborted();
					const e = await t(l.id), u = [];
					for (const t of e.values()) {
						if (i?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
						o += 1;
						const e = pt(l.id, t);
						e && u.push(e);
					}
					if (0 === u.length) continue;
					const { request: c, transfer: d } = mt(u.map((e) => e.wire)), m = await a.computeCircadian(r(c, d));
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
			}(t.length > 0 ? a.files.filter((e) => null != e.id && t.includes(e.id)) : a.files, (e) => ba(a, e), {
				dateRange: n,
				signal: i
			});
		}(n, {
			fileIds: u,
			dateRange: a.dateRange,
			signal: o
		});
		for (const t of e.daySummaries) c.set(`${t.fileId}|${t.date}`, {
			l5Hour: t.l5Hour,
			m10Hour: t.m10Hour
		});
	} catch (g) {
		if (g instanceof ga) throw g;
		if (o?.throwIfAborted(), d = !0, g instanceof DOMException && "AbortError" === g.name) throw g;
	}
	const m = await Sa(l[0].filename, "computing its sleep rows", () => async function(n, i, a, s, r, o, l) {
		const u = r && r.trim().length > 0 ? r.trim() : null, c = fa(o, la.sleep, n), d = c.files, m = yt(c.studySettings[0]?.extraSettings), p = (n.length > 0 ? d.filter((e) => null != e.id && n.includes(e.id)) : [...d]).sort((e, t) => e.filename.localeCompare(t.filename)), [g, f] = a ?? ["", ""], _ = [], w = [], v = [], M = [], b = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), S = async () => {
			for (const [e, t] of b) k.set(e, await Yn(e, t, _, l));
			b.clear();
		}, x = /* @__PURE__ */ new Map(), A = (e) => {
			const t = JSON.stringify(e);
			let n = x.get(t);
			return n || (n = O(l).exportNapAggregate(e), x.set(t, n)), n;
		}, N = await Promise.all(p.map((e) => va(o, e.id, i, l)));
		for (const [R, E] of p.entries()) {
			if (l?.throwIfAborted(), R > 0 && p[R - 1].filename !== E.filename && await S(), !E.id) continue;
			const n = ba(c, E.id), { bundle: i, markersByAlgo: r } = N[R], o = i?.edits ?? [], d = i ? ue(i.imported) : [], { zone: k } = await kt(E, m, l), x = [.../* @__PURE__ */ new Set([...E.availableDates, ...d.map((e) => e.nightDate)])].sort(), T = a ? x.filter((e) => e >= g && e <= f) : x;
			if (i) {
				const e = new Set(ge(i.imported).map((e) => e.night));
				for (const t of d) {
					if (e.has(t.night) || !T.includes(t.nightDate)) continue;
					const n = se(t, r.get(t.nightDate)?.[0]).kind;
					"scored" !== n && "invalid" !== n && v.push({
						file: "sleep_export.csv",
						row: 0,
						key: `${y.filename.header}=${E.filename}|${y.study_date.header}=${t.nightDate}`,
						column: `GGIR night ${String(t.night)}: ${pe(i.imported, t.night)}`,
						reason: "ggir_night_excluded"
					});
				}
			}
			const $ = U(n.values());
			for (const a of T) {
				l?.throwIfAborted();
				const c = r.get(a);
				if (c && 0 !== c.length) for (const r of c) {
					if (!r.isInvalidNight && 0 === r.sleepMarkers.length && 0 === r.nonwearMarkers.length) continue;
					const c = E.participantId ?? null, m = E.id, p = r.algorithm ?? null, g = r.username ?? null, f = r.needsConsensus, v = r.notes, S = n.get(a), x = await I(a, void 0, O(l)), N = n.get(x), T = {
						fileId: m,
						filename: E.filename,
						participantId: c,
						studyDate: a,
						algorithm: p,
						scoredBy: g,
						needsConsensus: f,
						notes: v,
						meanTemperature: null,
						meanWhiteLight: null,
						meanRedLight: null,
						meanGreenLight: null,
						meanBlueLight: null,
						detectionRule: r.detectionRule ?? null,
						periodGuider: r.periodGuider ?? null,
						...qn(r.sleepPeriodDetectionConfig),
						algorithmVersion: r.algorithmVersion ?? null,
						verificationStatus: null,
						studyId: u,
						dstTransition: await Ae(k, a, void 0, O(l))
					}, R = await A(r.sleepMarkers.filter((e) => e.markerType === h.NAP).map((e) => ({
						start: e.onsetTimestamp,
						end: e.offsetTimestamp
					}))), D = s?.get(`${String(m)}|${a}`), C = {
						l5Hour: D?.l5Hour ?? null,
						m10Hour: D?.m10Hour ?? null,
						napCount: R.napCount,
						totalNapMinutes: R.napCount > 0 ? R.totalNapMinutes : null
					}, L = r.nonwearMarkers.map((e) => ({
						start: e.startTimestamp,
						end: e.endTimestamp
					})), B = $(p), P = ft(S, B), F = `${E.filename}\0${c ?? ""}\0${T.algorithm ?? ""}\0${T.detectionRule ?? ""}`, W = b.get(F) ?? [];
					W.push({
						date: a,
						epochLengthSeconds: E.epochLengthSeconds || 60,
						timestamps: P.timestamps,
						states: P.algorithmResults,
						stale: "stale" === B.status
					}), b.set(F, W);
					const j = S?.temperature ? new Float64Array(S.temperature) : null, G = H(S).timestamps, U = N?.temperature ? new Float64Array(N.temperature) : null, z = H(N).timestamps, q = await Ot(n, a, B, { signal: l }), V = async (e, t, n) => {
						if (!t || !n) return null;
						const i = (e) => e ? new Float64Array(e) : null;
						return Un([[i(S?.[e]), G], [i(N?.[e]), z]], t, n, l);
					}, K = (e, t) => Un([[j, G], [U, z]], e, t, l), J = async (n, s) => {
						let u = null;
						const c = d.find((e) => e.nightDate === a), m = i && c && n.markerType === h.MAIN_SLEEP && "invalid" !== se(c, r).kind, p = c && o.some((e) => e.night === c.night), g = Vn(null), f = {};
						let _ = "not_applicable_to_row";
						if (!m && n.onsetTimestamp && n.offsetTimestamp) {
							const { timestamps: e, algorithmResults: t, activity: i, scoresStale: a } = q;
							if (null !== a && 0 === M.length && M.push({
								component: "metric_computation",
								code: "unavailable",
								message: a
							}), _ = null !== a ? "scores_from_another_config" : null == t ? "no_scored_epochs" : null == i ? "channel_unavailable" : 0 === e.length ? "no_valid_epochs" : void 0, null != t && e.length > 0 && (null != i || H(S).ggir)) {
								const a = H(S).ggir ? H(S).epochSec : E.epochLengthSeconds || 60, s = await Jn(t, i, e, n.onsetTimestamp, n.offsetTimestamp, a, l);
								u = s.metrics, u || s.error || (_ = "no_valid_epochs"), s.error && (_ = "not_computed_for_export"), s.error && 0 === M.length && M.push({
									component: "metric_computation",
									code: "unavailable",
									message: "Metric computation failed for at least one selected period; those rows carry no numerics."
								});
							}
						}
						if (m) {
							_ = "channel_unavailable";
							const n = p ? i.current?.nights : i.imported.nights, a = n ? t(n, y.ggir_night.header, c.night) : -1;
							for (const [t, i, s, r] of Kn) {
								const o = n ? e(n, y[i].header, a) : null;
								g[t] = null == o ? null : o * r, f[s] = null == o ? p ? "not_computed_for_export" : "source_reported_missing" : void 0;
							}
						}
						(m || u && !("averageAwakeningLengthMinutes" in u)) && (f.average_awakening_length_minutes = "not_computed_for_export");
						const w = await O(l).exportPeriodFigures(n.onsetTimestamp, n.offsetTimestamp, L), v = Boolean(n.onsetTimestamp && n.offsetTimestamp), b = {
							...T,
							...C,
							periodIndex: n.markerIndex,
							markerType: n.markerType,
							onsetTimestamp: n.onsetTimestamp,
							offsetTimestamp: n.offsetTimestamp,
							...m ? g : Vn(u),
							metricMissingReason: _,
							isInvalidNight: s,
							meanTemperature: n.onsetTimestamp && n.offsetTimestamp ? await K(n.onsetTimestamp, n.offsetTimestamp) : null,
							meanWhiteLight: await V("lux", n.onsetTimestamp, n.offsetTimestamp),
							meanRedLight: await V("redLight", n.onsetTimestamp, n.offsetTimestamp),
							meanGreenLight: await V("greenLight", n.onsetTimestamp, n.offsetTimestamp),
							meanBlueLight: await V("blueLight", n.onsetTimestamp, n.offsetTimestamp),
							sleepMidpointTimestamp: v ? w.midpointTimestamp : null,
							sleepMidpointHour: v ? w.midpointClockHour : null,
							validWearMinutes: w.validWearMinutes
						}, k = (e, t) => null != e ? void 0 : v ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
						return b.sensorMissingReasons = {
							mean_temperature_c: k(b.meanTemperature, Boolean(S?.temperature || N?.temperature)),
							mean_white_light_lux: k(b.meanWhiteLight, Boolean(S?.lux || N?.lux)),
							mean_red_light: k(b.meanRedLight, Boolean(S?.redLight || N?.redLight)),
							mean_green_light: k(b.meanGreenLight, Boolean(S?.greenLight || N?.greenLight)),
							mean_blue_light: k(b.meanBlueLight, Boolean(S?.blueLight || N?.blueLight))
						}, b.derivedMissingReasons = {
							...f,
							l5_hour: null == b.l5Hour ? D ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							m10_hour: null == b.m10Hour ? D ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							sleep_midpoint_time: null == b.sleepMidpointTimestamp ? v ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							sleep_midpoint_hour: null == b.sleepMidpointHour ? v ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							valid_wear_minutes: null == b.validWearMinutes ? v ? "no_valid_epochs" : "not_applicable_to_row" : void 0
						}, b;
					};
					if (r.isInvalidNight) {
						_.push({
							...T,
							...C,
							periodIndex: null,
							markerType: zn,
							onsetTimestamp: null,
							offsetTimestamp: null,
							...Vn(null),
							isInvalidNight: !0,
							sleepMidpointTimestamp: null,
							sleepMidpointHour: null,
							validWearMinutes: null
						});
						for (const e of r.sleepMarkers) _.push(await J(e, !0));
					} else for (const e of r.sleepMarkers) _.push(await J(e, !1));
					for (const e of r.nonwearMarkers) w.push({
						...T,
						...C,
						periodIndex: e.markerIndex ?? 0,
						markerType: Hn,
						onsetTimestamp: e.startTimestamp,
						offsetTimestamp: e.endTimestamp,
						...Vn(null),
						isInvalidNight: !1,
						sleepMidpointTimestamp: null,
						sleepMidpointHour: null,
						validWearMinutes: null
					});
				}
			}
		}
		await S(), _.sort(Zn), w.sort(Zn);
		const T = await async function(e, t) {
			const n = e.filter((e) => e.markerType === h.MAIN_SLEEP), i = /* @__PURE__ */ new Map();
			for (const o of n) {
				const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = i.get(e);
				t ? t.push(o) : i.set(e, [o]);
			}
			const a = [...i], s = await O(t).summarizeExportGroups(a.map(([, e]) => e.map((e) => ({
				study_date: e.studyDate,
				total_nap_minutes: e.totalNapMinutes,
				values: Qn.map(([, t]) => e[t])
			})))), r = a.map(([e, t], n) => {
				const [i, a, r, o] = e.split("\0"), l = s[n], u = Object.fromEntries(Qn.map(([e], t) => [e, l.means[t] ?? null]));
				return {
					filename: i,
					participantId: a,
					algorithm: r,
					detectionRule: o,
					nNights: l.nNights,
					...u,
					meanTemperatureMissingReason: null == u.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
					metricMissingReasons: Object.fromEntries(Qn.map(([e, n]) => {
						const i = Xn[e], a = Kn.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : i), s = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[a] ?? e.metricMissingReason).find(Boolean);
						return [i, null == u[e] ? s : void 0];
					})),
					sleepRegularityIndex: null,
					meanTotalNapMinutes: l.meanTotalNapMinutes,
					studyId: t[0]?.studyId ?? null
				};
			});
			return r.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), r;
		}(_, l);
		for (const e of T) {
			const t = `${e.filename}\0${e.participantId}\0${e.algorithm}\0${e.detectionRule}`, n = k.get(t);
			e.sleepRegularityIndex = n?.sri ?? null, e.sleepRegularityMissingReason = n?.sriMissingReason ?? (n ? void 0 : "not_computed_for_export");
		}
		return {
			sleepRows: _,
			nonwearRows: w,
			summaryRows: T,
			degradations: M,
			nightReasons: v
		};
	}(u, a.username, a.dateRange, c, a.studyId, n, o)), p = await Sa(l[0].filename, "drawing its visual report", async () => {
		const e = [];
		for (const t of l) e.push(await Gn({
			...a,
			snapshot: n
		}, t, o));
		return e;
	});
	return {
		part: m,
		physicalActivityRows: await Ci(u, a.dateRange, {
			username: a.username,
			cutpointOverrides: a.physicalActivity.cutpointOverrides,
			maskPolicy: a.physicalActivity.maskPolicy,
			choiAxis: a.physicalActivity.choiAxis,
			exportedAt: a.exportedAt,
			...o ? { signal: o } : {}
		}, s),
		eventMarkerRows: await ti(u, a.dateRange, n, a.username, o),
		circadianDegraded: d,
		reports: p
	};
}
async function Sa(e, t, n) {
	try {
		return await n();
	} catch (i) {
		if (i instanceof DOMException && "AbortError" === i.name) throw i;
		throw new rn(e, t, i);
	}
}
let xa;
a({
	async group(e, t, n, i) {
		xa ??= new g(e);
		try {
			return { result: await ka(pa(n), t, i, { db: xa }) };
		} catch (a) {
			if (a instanceof rn) return { failure: {
				file: a.file,
				step: a.step
			} };
			throw a;
		}
	},
	deflate(e, t) {
		const n = function(e, t) {
			if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
			const n = [], i = new ut(t?.byteLength ? {
				level: 1,
				dictionary: t
			} : { level: 1 }, (e) => {
				n.push(e);
			});
			i.push(e, !1), i.flush(!1);
			const a = i.s.r ?? 0;
			if (!Number.isInteger(a) || a < 0 || a > 2047) throw new Error("ZIP compression state is unreadable.");
			const s = (7 & a) > 5 ? 2 : 1, r = new Uint8Array(s + 4);
			return r[0] = a >> 3, r[s + 2] = 255, r[s + 3] = 255, n.push(r), Q(n);
		}(e, t);
		return r(n, [n.buffer]);
	}
});
export { pt as C, mt as S, Tt as _, wi as a, kt as b, mi as c, li as d, ci as f, Dt as g, ri as h, fi as i, ui as l, ni as m, Ki as n, pi as o, ai as p, Ti as r, gi as s, Li as t, oi as u, Rt as v, vt as x, Et as y };
