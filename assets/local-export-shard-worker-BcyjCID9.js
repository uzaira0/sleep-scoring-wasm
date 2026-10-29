import { n as e, r as t, s as n, t as a } from "./ggir-results-types-WB8axvb-.js";
import { c as i, i as s, u as r } from "./workers-BHTWDuMW.js";
import { Ft as o, Gt as l, It as u, Nt as c, Pt as d, _n as m, a as p, f as g, wt as h } from "./schema-GIDIbrNv.js";
import { A as f, M as w, b as y, j as _, k as v, m as M } from "./nonwear-display-slots-Dm0sk80Z.js";
import { A as b, G as k, H as S, K as x, W as I, g as A, rt as N, t as T } from "./workspace-db-JjnY804x.js";
import { a as R } from "./content-hash-B-at0sOp.js";
import { a as E, n as $, t as O } from "./background-jobs-D_gayUyT.js";
import { a as L } from "./project-revision-DYY2xrRg.js";
import { A as D, C, F as B, Ht as F, Jt as P, Lt as W, M as j, N as U, S as G, Vt as z, W as H, b as q, en as V, qt as K, z as J } from "./store-M9Z2jo4l.js";
import { B as Y, j as Z, m as Q, u as X } from "./night-session-registry-D7LYfZK-.js";
import { d as ee, l as te, p as ne } from "./sleep-period-detection-D85RJDGi.js";
import "./audit-hash-BdWutkgc.js";
import { d as ae, n as ie, r as se, s as re } from "./ggir-results-import-v-t1jO8G.js";
import { E as oe, N as le, T as ue, c as ce } from "./local-nonwear-unified-qcto_jHn.js";
import { _ as de, b as me, g as pe, h as ge, t as he, v as fe, x as we, y as ye } from "./valid-day-criteria-Cm3qMybY.js";
import { h as _e, m as ve, v as Me } from "./diary-local-import-contract-BEuUbor2.js";
var be = Uint8Array, ke = Uint16Array, Se = Int32Array, xe = new be([
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
]), Ie = new be([
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
]), Ae = new be([
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
]), Ne = function(e, t) {
	for (var n = new ke(31), a = 0; a < 31; ++a) n[a] = t += 1 << e[a - 1];
	var i = new Se(n[30]);
	for (a = 1; a < 30; ++a) for (var s = n[a]; s < n[a + 1]; ++s) i[s] = s - n[a] << 5 | a;
	return {
		b: n,
		r: i
	};
}, Te = Ne(xe, 2), Re = Te.b, Ee = Te.r;
Re[28] = 258, Ee[258] = 28;
for (var $e = Ne(Ie, 0), Oe = ($e.b, $e.r), Le = new ke(32768), De = 0; De < 32768; ++De) {
	var Ce = (43690 & De) >> 1 | (21845 & De) << 1;
	Ce = (61680 & (Ce = (52428 & Ce) >> 2 | (13107 & Ce) << 2)) >> 4 | (3855 & Ce) << 4, Le[De] = ((65280 & Ce) >> 8 | (255 & Ce) << 8) >> 1;
}
var Be = function(e, t, n) {
	for (var a = e.length, i = 0, s = new ke(t); i < a; ++i) e[i] && ++s[e[i] - 1];
	var r, o = new ke(t);
	for (i = 1; i < t; ++i) o[i] = o[i - 1] + s[i - 1] << 1;
	if (n) {
		r = new ke(1 << t);
		var l = 15 - t;
		for (i = 0; i < a; ++i) if (e[i]) for (var u = i << 4 | e[i], c = t - e[i], d = o[e[i] - 1]++ << c, m = d | (1 << c) - 1; d <= m; ++d) r[Le[d] >> l] = u;
	} else for (r = new ke(a), i = 0; i < a; ++i) e[i] && (r[i] = Le[o[e[i] - 1]++] >> 15 - e[i]);
	return r;
}, Fe = new be(288);
for (De = 0; De < 144; ++De) Fe[De] = 8;
for (De = 144; De < 256; ++De) Fe[De] = 9;
for (De = 256; De < 280; ++De) Fe[De] = 7;
for (De = 280; De < 288; ++De) Fe[De] = 8;
var Pe = new be(32);
for (De = 0; De < 32; ++De) Pe[De] = 5;
var We = Be(Fe, 9, 0), je = Be(Pe, 5, 0), Ue = function(e) {
	return (e + 7) / 8 | 0;
}, Ge = [
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
], ze = function(e, t, n) {
	var a = new Error(t || Ge[e]);
	if (a.code = e, Error.captureStackTrace && Error.captureStackTrace(a, ze), !n) throw a;
	return a;
}, He = function(e, t, n) {
	n <<= 7 & t;
	var a = t / 8 | 0;
	e[a] |= n, e[a + 1] |= n >> 8;
}, qe = function(e, t, n) {
	n <<= 7 & t;
	var a = t / 8 | 0;
	e[a] |= n, e[a + 1] |= n >> 8, e[a + 2] |= n >> 16;
}, Ve = function(e, t) {
	for (var n = [], a = 0; a < e.length; ++a) e[a] && n.push({
		s: a,
		f: e[a]
	});
	var i = n.length, s = n.slice();
	if (!i) return {
		t: et,
		l: 0
	};
	if (1 == i) {
		var r = new be(n[0].s + 1);
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
	var p = new ke(m + 1), g = Ke(n[c - 1], p, 0);
	if (g > t) {
		a = 0;
		var h = 0, f = g - t, w = 1 << f;
		for (s.sort(function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		}); a < i; ++a) {
			var y = s[a].s;
			if (!(p[y] > t)) break;
			h += w - (1 << g - p[y]), p[y] = t;
		}
		for (h >>= f; h > 0;) {
			var _ = s[a].s;
			p[_] < t ? h -= 1 << t - p[_]++ - 1 : ++a;
		}
		for (; a >= 0 && h; --a) {
			var v = s[a].s;
			p[v] == t && (--p[v], ++h);
		}
		g = t;
	}
	return {
		t: new be(p),
		l: g
	};
}, Ke = function(e, t, n) {
	return -1 == e.s ? Math.max(Ke(e.l, t, n + 1), Ke(e.r, t, n + 1)) : t[e.s] = n;
}, Je = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new ke(++t), a = 0, i = e[0], s = 1, r = function(e) {
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
}, Ye = function(e, t) {
	for (var n = 0, a = 0; a < t.length; ++a) n += e[a] * t[a];
	return n;
}, Ze = function(e, t, n) {
	var a = n.length, i = Ue(t + 2);
	e[i] = 255 & a, e[i + 1] = a >> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
	for (var s = 0; s < a; ++s) e[i + s + 4] = n[s];
	return 8 * (i + 4 + a);
}, Qe = function(e, t, n, a, i, s, r, o, l, u, c) {
	He(t, c++, n), ++i[256];
	for (var d = Ve(i, 15), m = d.t, p = d.l, g = Ve(s, 15), h = g.t, f = g.l, w = Je(m), y = w.c, _ = w.n, v = Je(h), M = v.c, b = v.n, k = new ke(19), S = 0; S < y.length; ++S) ++k[31 & y[S]];
	for (S = 0; S < M.length; ++S) ++k[31 & M[S]];
	for (var x = Ve(k, 7), I = x.t, A = x.l, N = 19; N > 4 && !I[Ae[N - 1]]; --N);
	var T, R, E, $, O = u + 5 << 3, L = Ye(i, Fe) + Ye(s, Pe) + r, D = Ye(i, m) + Ye(s, h) + r + 14 + 3 * N + Ye(k, I) + 2 * k[16] + 3 * k[17] + 7 * k[18];
	if (l >= 0 && O <= L && O <= D) return Ze(t, c, e.subarray(l, l + u));
	if (He(t, c, 1 + (D < L)), c += 2, D < L) {
		T = Be(m, p, 0), R = m, E = Be(h, f, 0), $ = h;
		var C = Be(I, A, 0);
		for (He(t, c, _ - 257), He(t, c + 5, b - 1), He(t, c + 10, N - 4), c += 14, S = 0; S < N; ++S) He(t, c + 3 * S, I[Ae[S]]);
		c += 3 * N;
		for (var B = [y, M], F = 0; F < 2; ++F) {
			var P = B[F];
			for (S = 0; S < P.length; ++S) {
				var W = 31 & P[S];
				He(t, c, C[W]), c += I[W], W > 15 && (He(t, c, P[S] >> 5 & 127), c += P[S] >> 12);
			}
		}
	} else T = We, R = Fe, E = je, $ = Pe;
	for (S = 0; S < o; ++S) {
		var j = a[S];
		if (j > 255) {
			qe(t, c, T[257 + (W = j >> 18 & 31)]), c += R[W + 257], W > 7 && (He(t, c, j >> 23 & 31), c += xe[W]);
			var U = 31 & j;
			qe(t, c, E[U]), c += $[U], U > 3 && (qe(t, c, j >> 5 & 8191), c += Ie[U]);
		} else qe(t, c, T[j]), c += R[j];
	}
	return qe(t, c, T[256]), c + R[256];
}, Xe = new Se([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), et = new be(0), tt = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new be(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, a, i) {
			if (!i && (i = { l: 1 }, t.dictionary)) {
				var s = t.dictionary.subarray(-32768), r = new be(s.length + e.length);
				r.set(s), r.set(e, s.length), e = r, i.w = s.length;
			}
			return function(e, t, n, a, i, s) {
				var r = s.z || e.length, o = new be(a + r + 5 * (1 + Math.ceil(r / 7e3)) + i), l = o.subarray(a, o.length - i), u = s.l, c = 7 & (s.r || 0);
				if (t) {
					c && (l[0] = s.r >> 3);
					for (var d = Xe[t - 1], m = d >> 13, p = 8191 & d, g = (1 << n) - 1, h = s.p || new ke(32768), f = s.h || new ke(g + 1), w = Math.ceil(n / 3), y = 2 * w, _ = function(t) {
						return (e[t] ^ e[t + 1] << w ^ e[t + 2] << y) & g;
					}, v = new Se(25e3), M = new ke(288), b = new ke(32), k = 0, S = 0, x = s.i || 0, I = 0, A = s.w || 0, N = 0; x + 2 < r; ++x) {
						var T = _(x), R = 32767 & x, E = f[T];
						if (h[R] = E, f[T] = R, A <= x) {
							var $ = r - x;
							if ((k > 7e3 || I > 24576) && ($ > 423 || !u)) {
								c = Qe(e, l, 0, v, M, b, S, I, N, x - N, c), I = k = S = 0, N = x;
								for (var O = 0; O < 286; ++O) M[O] = 0;
								for (O = 0; O < 30; ++O) b[O] = 0;
							}
							var L = 2, D = 0, C = p, B = R - E & 32767;
							if ($ > 2 && T == _(x - B)) for (var F = Math.min(m, $) - 1, P = Math.min(32767, x), W = Math.min(258, $); B <= P && --C && R != E;) {
								if (e[x + L] == e[x + L - B]) {
									for (var j = 0; j < W && e[x + j] == e[x + j - B]; ++j);
									if (j > L) {
										if (L = j, D = B, j > F) break;
										var U = Math.min(B, j - 2), G = 0;
										for (O = 0; O < U; ++O) {
											var z = x - B + O & 32767, H = z - h[z] & 32767;
											H > G && (G = H, E = z);
										}
									}
								}
								B += (R = E) - (E = h[R]) & 32767;
							}
							if (D) {
								v[I++] = 268435456 | Ee[L] << 18 | Oe[D];
								var q = 31 & Ee[L], V = 31 & Oe[D];
								S += xe[q] + Ie[V], ++M[257 + q], ++b[V], A = x + L, ++k;
							} else v[I++] = e[x], ++M[e[x]];
						}
					}
					for (x = Math.max(x, A); x < r; ++x) v[I++] = e[x], ++M[e[x]];
					c = Qe(e, l, u, v, M, b, S, I, N, x - N, c), u || (s.r = 7 & c | l[c / 8 | 0] << 3, c -= 7, s.h = f, s.p = h, s.i = x, s.w = A);
				} else {
					for (x = s.w || 0; x < r + u; x += 65535) {
						var K = x + 65535;
						K >= r && (l[c / 8 | 0] = u, K = r), c = Ze(l, c + 1, e.subarray(x, K));
					}
					s.i = r;
				}
				return function(e, t, n) {
					return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new be(e.subarray(t, n));
				}(o, 0, a + Ue(c) + i);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? i.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, 0, 0, i);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || ze(5), this.s.l && ze(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var a = new be(-32768 & n);
				a.set(this.b.subarray(0, this.s.z)), this.b = a;
			}
			var i = this.b.length - this.s.z;
			this.b.set(e.subarray(0, i), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(i), 32768), this.s.z = e.length - i + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = et);
	}, e.prototype.flush = function(e) {
		if (this.ondata || ze(5), this.s.l && ze(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new be(6);
			t[0] = this.s.r >> 3;
			var n = Ze(t, this.s.r, et);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), nt = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	nt.decode(et, { stream: !0 });
} catch (di) {}
function at(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function it(e) {
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
function st(e, t) {
	const n = function(e) {
		const t = at(e.ggirTimestamps), n = at(e.ggirEnmo);
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
async function rt(e, t, n, a, i = 60, s, r) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == a || n >= a) return null;
	const o = new Uint8Array(e.length);
	for (let u = 0; u < e.length; u++) o[u] = 1 === e[u] ? 1 : 0;
	const l = await ot(o, s && s.length === e.length ? s : new Float64Array(e.length), t, n, a, i, r);
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
async function ot(e, t, n, a, i, s = 60, r) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == a || null == i || a >= i) return null;
	const o = await async function(e, t, n, a) {
		const i = await O(a).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === i.length ? {
			startIdx: i[0],
			endIdx: i[1]
		} : null;
	}(n, a, i, r);
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
function lt(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const a = W(e), i = Array.from(a.timestamps);
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
	const l = y(e, t);
	return {
		timestamps: i,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: r,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
const ut = /* @__PURE__ */ new Map();
async function ct(e, t) {
	if (ut.has(e)) return ut.get(e);
	try {
		const n = await O(t).resolveTimezone(e);
		return ut.set(e, n), n;
	} catch (ze) {
		t?.throwIfAborted(), console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, ze);
		return;
	}
}
function dt(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : ve();
}
async function mt(e) {
	try {
		return dt((await U(e))?.extraSettings);
	} catch (ze) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", ze), ve();
	}
}
function pt(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const gt = {
	zone: null,
	reason: null
};
async function ht(e, t, n) {
	const a = e.ggirTimezone?.trim();
	let i = null;
	if (a) {
		const e = await ct(a, n);
		if (!e) return gt;
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
	if (null === i) return ne(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : gt;
	const s = await ct(t, n);
	if (void 0 === s) return gt;
	if ("iana" !== s?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const r = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== r && (await Me(s.zone, r, O(n))).includes(i) ? {
		zone: s.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${pt(i)} is not a ${s.zone} offset`
	};
}
function ft(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [a, i] of e.entries()) t[a + 1] = t[a] + i.length;
	const n = new Float64Array(t[e.length]);
	for (const [a, i] of e.entries()) n.set(i, t[a]);
	return [n, t];
}
const wt = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), yt = [
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
var _t = yt.map(() => wt);
Object.fromEntries(yt.map(([e], t) => [e, _t[t]]));
const vt = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values(b).filter((e) => ![
		b.choi_2012,
		b.choi_2011,
		b.van_hees_2023,
		b.detach_nonwear
	].some((t) => t === e))
];
async function Mt(e, t, n, a) {
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
async function bt(e, t, n) {
	const a = e instanceof Float64Array ? e : Float64Array.from(e), [i, r] = await (n ?? s()).analysisWindowSlice(a, t);
	return {
		startIndex: i,
		endIndex: r
	};
}
async function kt(e, t = s()) {
	const n = [...new Set(e)], a = await t.analysisDatesOf(Float64Array.from(n)), i = new Map(n.map((e, t) => [e, a[t] ?? ""]));
	return (e) => i.get(e) ?? "";
}
function St(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [a, i] of Object.entries(ce(e, e.nonwearChoiAxis ?? oe()))) i && (n[t[a] ?? a] = new Uint8Array(i));
	return n;
}
async function xt(e, t, n, a = {}) {
	const { signal: i, includeNonwearMasks: s = !1 } = a, r = e.get(t), o = lt(r, n), l = s && r ? St(r) : {}, u = e.get(await M(t, void 0, O(i))), c = o.timestamps[o.timestamps.length - 1], d = u ? lt(u, n) : null, m = d?.timestamps[0], p = void 0 !== u && null !== d && void 0 !== c && void 0 !== m && m > c, g = o.scoresStale ?? d?.scoresStale ?? null;
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
	const h = o.timestamps.length, f = h + d.timestamps.length, w = o.algorithmResults.length >= h && d.algorithmResults && d.algorithmResults.length >= d.timestamps.length ? new Uint8Array(f) : null;
	w?.set(o.algorithmResults.subarray(0, h)), d.algorithmResults && w?.set(d.algorithmResults.subarray(0, f - h), h);
	const y = o.activity && d.activity ? new Float64Array(f) : null;
	o.activity && y?.set(o.activity.subarray(0, h)), d.activity && y?.set(d.activity.subarray(0, f - h), h);
	const _ = s ? St(u) : {}, v = {};
	for (const M of vt) {
		const e = l[M], t = _[M];
		if (!e && !t) continue;
		const n = new Uint8Array(f);
		e && n.set(e.subarray(0, h)), t && n.set(t.subarray(0, f - h), h), v[M] = n;
	}
	return {
		timestamps: [...o.timestamps, ...d.timestamps],
		algorithmResults: w,
		activity: y,
		masks: v,
		scoresStale: null
	};
}
async function It(e, t, n, a) {
	const i = await n.files.get(e.fileId);
	if (!i) return;
	const s = /* @__PURE__ */ new Map();
	for (const r of [e.date, await M(e.date, void 0, O(a))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, r]).first();
		t && s.set(r, t);
	}
	await async function(e, t, n, a) {
		const { date: i, file: s, activityMap: r, verdict: o } = t, l = t.spanning ?? await xt(r, i, o, { signal: a });
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
		for (const p of e.sleepMarkers) m.push(d && c.length > 0 && p.onsetTimestamp && p.offsetTimestamp ? await ot(d, l.activity ?? new Float64Array(d.length), l.timestamps, p.onsetTimestamp, p.offsetTimestamp, s.epochLengthSeconds || 60, a) : null);
		if (void 0 !== e.id) try {
			await L(n, [n.markers], () => Q(e.id, {
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
Object.fromEntries(Object.values(b).map((e) => [e, e === b.ggir_saved ? te : le(e)]));
const At = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], Nt = ["under-series", "over-series"], Tt = ["full-resolution-v1", "min-max-gap-envelope-v1"], Rt = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function Et(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function $t(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? Et(t, "expected an object") : e;
}
function Ot(e, t) {
	return Array.isArray(e) ? e : Et(t, "expected an array");
}
function Lt(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : Et(t, "expected a finite number");
}
function Dt(e, t) {
	const n = Lt(e, t);
	return n <= 0 ? Et(t, "expected a positive number") : n;
}
function Ct(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : Et(t, "expected a safe integer");
}
function Bt(e, t) {
	const n = Ct(e, t);
	return n < 0 ? Et(t, "expected a non-negative safe integer") : n;
}
function Ft(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? Et(t, "expected a boolean") : { [n]: e };
}
function Pt(e, t) {
	return "string" != typeof e || 0 === e.length ? Et(t, "expected a non-empty string") : e;
}
function Wt(e, t) {
	return "string" == typeof e && At.includes(e) ? e : Et(t, "expected a supported tone");
}
function jt(e, t) {
	return "string" == typeof e && Nt.includes(e) ? e : Et(t, "expected a supported phase");
}
function Ut(e, t) {
	const n = $t(e, t), a = Lt(n.min, `${t}.min`), i = Lt(n.max, `${t}.max`);
	return i <= a || !Number.isFinite(i - a) ? Et(t, "expected a finite ascending range") : {
		min: a,
		max: i
	};
}
function Gt(e, t) {
	const n = `series[${t}]`, a = $t(e, n), i = Ot(a.points, `${n}.points`);
	let s = Number.NEGATIVE_INFINITY;
	const r = (e) => `${n}.points[${e}]`, o = i.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return Et(r(t), "expected an object");
		const n = e, a = n.timestamp;
		if ("number" != typeof a || !Number.isFinite(a)) return Et(`${r(t)}.timestamp`, "expected a finite number");
		if (a <= s) return Et(`${r(t)}.timestamp`, "expected strictly ascending timestamps");
		s = a;
		const i = n.value;
		return null === i || "number" == typeof i && Number.isFinite(i) ? {
			timestamp: a,
			value: i
		} : Et(`${r(t)}.value`, "expected a finite number");
	});
	return {
		tone: Wt(a.tone, `${n}.tone`),
		strokeWidth: Dt(a.strokeWidth, `${n}.strokeWidth`),
		valueDomain: Ut(a.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function zt(e, t) {
	const n = `overlays[${t}]`, a = $t(e, n), i = {
		phase: jt(a.phase, `${n}.phase`),
		order: Ct(a.order, `${n}.order`),
		tone: Wt(a.tone, `${n}.tone`)
	};
	if ("interval" === a.kind) {
		const e = Lt(a.startTimestamp, `${n}.startTimestamp`), t = Lt(a.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? Et(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...i,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === a.kind ? {
		kind: "threshold",
		...i,
		value: Lt(a.value, `${n}.value`),
		...Ft(a.draggable, `${n}.draggable`, "draggable"),
		...Ft(a.selected, `${n}.selected`, "selected"),
		...Ft(a.handle, `${n}.handle`, "handle"),
		...void 0 === a.label ? {} : { label: Pt(a.label, `${n}.label`) }
	} : "instant" === a.kind ? {
		kind: "instant",
		...i,
		timestamp: Lt(a.timestamp, `${n}.timestamp`)
	} : Et(`${n}.kind`, "expected interval, threshold, or instant");
}
function Ht(e, t, n) {
	const a = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(a) ? a : Et("projection", "expected a finite pixel coordinate");
}
function qt(e, t, n) {
	const a = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(a) ? a : Et("projection", "expected a finite pixel coordinate");
}
function Vt(e) {
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
function Kt(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Jt(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, a = t.plotArea.height, i = Rt[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const s = Kt(Ht(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), r = Kt(Ht(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${Vt(s)}" y="0" width="${Vt(Math.max(1, r - s))}" height="${Vt(a)}" fill="${i}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const s = qt(e.value, t.valueDomain, a), r = !0 === e.selected, o = r ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${r ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${Vt(s)}" x2="${Vt(n)}" y2="${Vt(s)}" stroke="${i}" stroke-width="${r ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const s = Ht(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${Vt(s)}" y1="0" x2="${Vt(s)}" y2="${Vt(a)}" stroke="${i}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function Yt(e) {
	const t = function(e) {
		const t = $t(e, "scene");
		if (2 !== t.version) return Et("version", "expected 2");
		const n = $t(t.grid, "grid"), a = {
			strategy: (i = n.strategy, "string" == typeof i && Tt.includes(i) ? i : Et("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: Bt(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: Bt(n.renderedPointCount, "grid.renderedPointCount")
		};
		var i;
		if (a.renderedPointCount > a.sourcePointCount) return Et("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === a.strategy && a.renderedPointCount !== a.sourcePointCount) return Et("grid", "full-resolution strategy requires equal point counts");
		const s = $t(t.size, "size"), r = {
			width: Dt(s.width, "size.width"),
			height: Dt(s.height, "size.height")
		}, o = $t(t.plotArea, "plotArea"), l = {
			left: Lt(o.left, "plotArea.left"),
			top: Lt(o.top, "plotArea.top"),
			width: Dt(o.width, "plotArea.width"),
			height: Dt(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > r.width || l.top + l.height > r.height) return Et("plotArea", "expected bounds contained by size");
		const u = Ut(t.viewport, "viewport"), c = Ut(t.valueDomain, "valueDomain"), d = Ot(t.series, "series").map(Gt);
		if (0 === d.length && 0 !== a.renderedPointCount) return Et("grid.renderedPointCount", "expected zero when series is empty");
		const m = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let f = 0; f < d.length; f++) {
			const e = d[f]?.points ?? [];
			if (e.length !== a.renderedPointCount) return Et(`series[${f}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return Et(`series[${f}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const p = Ot(t.overlays, "overlays").map(zt), g = null === t.cursorTimestamp ? null : Lt(t.cursorTimestamp, "cursorTimestamp");
		let h = null;
		if (null !== t.selection) {
			const e = $t(t.selection, "selection"), n = Lt(e.startTimestamp, "selection.startTimestamp"), a = Lt(e.endTimestamp, "selection.endTimestamp");
			if (a <= n) return Et("selection", "expected a half-open ascending interval");
			h = {
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
			selection: h
		};
	}(e), n = Vt(t.size.width), a = Vt(t.size.height), i = Vt(t.plotArea.width), s = Vt(t.plotArea.height), r = Jt(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
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
			const t = Ht(o.timestamp, n.viewport, s);
			let l = r.get(o.value);
			void 0 === l && (l = Vt(qt(o.value, e.valueDomain, n.plotArea.height)), r.set(o.value, l)), a += `${i ? "L" : "M"}${Vt(t)} ${l}`, i = !0;
		}
		return 0 === a.length ? "" : `<path data-series-index="${t}" d="${a}" fill="none" stroke="${Rt[e.tone]}" stroke-width="${Vt(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = Jt(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${a}" viewBox="0 0 ${n} ${a}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${a}" fill="#ffffff"/><svg x="${Vt(t.plotArea.left)}" y="${Vt(t.plotArea.top)}" width="${i}" height="${s}" viewBox="0 0 ${i} ${s}" overflow="hidden"><rect x="0" y="0" width="${i}" height="${s}" fill="#ffffff"/>${r}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = Kt(Ht(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), a = Kt(Ht(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${Vt(n)}" y="0" width="${Vt(Math.max(1, a - n))}" height="${Vt(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = Ht(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${Vt(n)}" y1="0" x2="${Vt(n)}" y2="${Vt(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${Vt(t.plotArea.left)}" y="${Vt(t.plotArea.top)}" width="${i}" height="${s}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
var Zt = class extends Error {
	file;
	step;
	constructor(e, t, n) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t;
	}
};
const Qt = 65536;
function Xt(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function en(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const tn = [
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
], nn = (new Set(tn.slice(16).map(([e]) => e)), _.invalid_night_row.markerTypeCell, new Set(tn.map(([, e]) => e)), f.ggir_sleepparam.header, f.ggir_guider_onset.header, f.ggir_guider_wakeup.header, f.ggir_guider_spt_duration.header, f.ggir_error_onset.header, f.ggir_error_wake.header, f.ggir_error_dur.header, f.ggir_fraction_night_invalid.header, f.ggir_duration_sib_wakinghours.header, f.ggir_number_sib_sleepperiod.header, f.ggir_number_sib_wakinghours.header, f.ggir_duration_sib_wakinghours_atleast15min.header, f.ggir_guider_onset_ts.header, f.ggir_guider_wakeup_ts.header, f.ggir_page.header, f.ggir_daysleeper.header, f.ggir_sleeplog_id.header, f.ggir_guider.header, f.ggir_longitudinal_axis.header, /* @__PURE__ */ new Set([
	f.ggir_sleep_duration_in_spt.header,
	f.ggir_waso.header,
	f.ggir_number_of_awakenings.header,
	f.ggir_sleeplatency.header,
	f.ggir_sleepefficiency.header
])), an = /* @__PURE__ */ new Set([
	...nn,
	f.ggir_nonwear_perc_spt.header,
	f.ggir_sleeponset.header,
	f.ggir_wakeup.header,
	f.ggir_spt_duration.header,
	f.ggir_guider_onset.header,
	f.ggir_guider_wakeup.header,
	f.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	f.ggir_sleeponset_ts.header,
	f.ggir_wakeup_ts.header,
	f.ggir_guider_onset_ts.header,
	f.ggir_guider_wakeup_ts.header,
	f.ggir_daysleeper.header,
	f.ggir_cleaningcode.header,
	f.ggir_guider.header,
	f.ggir_error_onset.header,
	f.ggir_error_wake.header,
	f.ggir_error_dur.header,
	f.ggir_fraction_night_invalid.header,
	f.ggir_duration_sib_wakinghours.header,
	f.ggir_number_sib_sleepperiod.header,
	f.ggir_number_sib_wakinghours.header,
	f.ggir_duration_sib_wakinghours_atleast15min.header
]), sn = /* @__PURE__ */ new Set([
	f.ggir_id.header,
	f.ggir_filename.header,
	f.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	f.ggir_sleep_regularity_index1.header,
	f.ggir_sri_fraction_valid.header,
	f.ggir_calendar_date.header,
	f.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	f.ggir_cleaningcode.header,
	f.ggir_guider.header,
	f.ggir_sleeplog_used.header,
	f.ggir_acc_available.header,
	f.ggir_daysleeper.header
]), rn = (new Set(Object.values(f).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), new Set(Object.values(f).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
]), on = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : h(String(e)), ln = "part4_nightsummary_ggir_review.csv", un = "part5_daysummary_ggir_review.csv";
function cn(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return o(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? o(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function dn(e, t) {
	const n = new Map(re(e).map((e) => [e.night, e.nightDate]));
	return (e, a, i = !0) => {
		const s = e.columns.indexOf("nights" === t ? f.ggir_night.header : "night_number"), r = Number(e.values[s]?.[a]), o = n.get(r);
		if (i && o) return o;
		const l = e.values[e.columns.indexOf(f.ggir_calendar_date.header)]?.[a];
		return cn(l);
	};
}
async function mn(t, n, i, s) {
	const r = "nights" === n ? f.ggir_night.header : "window_number", o = O(i), l = await Promise.all(t.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await ie(e.imported, e.edits, t.night, i)])))), u = (await Promise.all(t.map(async (e, t) => {
		const a = e.current ?? e.imported, i = (e) => "nights" === n ? e.nights : e.days, s = "nights" === n ? a.nightRecomputed : a.dayRecomputed, r = "nights" === n ? e.imported.nightChecks : e.imported.dayChecks, u = l[t].filter((e) => null != e[1]), c = dn(e.imported, n), d = new Set(e.edits.map((e) => e.night)), m = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, p = /* @__PURE__ */ new Set();
		if ("days" === n && m) {
			const t = await Promise.all(re(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), a = t.nightDate, i = n.onset < "12:00:00" ? await M(a, void 0, o) : a, s = n.wake <= n.onset ? await M(i, void 0, o) : i;
				return [Math.min(t.onsetMs, Date.parse(`${i}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${s}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: a.days.rows }, async (e, n) => {
				const i = Number(a.days.values[a.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(i)) return void p.add(n);
				const s = c(a.days, n, !1), r = a.days.values[a.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof r ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(r) : null;
				if (!s || !l) return;
				const u = Date.parse(`${s}T${l[1]}Z`), m = l[2] < l[1] ? await M(s, void 0, o) : s, g = Date.parse(`${m}T${l[2]}Z`);
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
			table: i(a),
			ggir: i(e.imported),
			savedNights: e.imported.nights,
			recomputed: s,
			provenance: (e) => "nights" === n ? u.find(([t]) => t === e)?.[1] ?? "" : u.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(r.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === u.length) return null;
	const c = s ? s.filter((e) => !e.endsWith("_missing_reason") && !rn.includes(e)) : [];
	for (const e of s ? [] : u) for (const t of e.table.columns) t.endsWith("_missing_reason") || c.includes(t) || c.push(t);
	const d = new Set("nights" === n ? v.ggir_review_night_extension.map((e) => f[e].header) : []), m = s ? c.filter((e) => s.includes(e + "_missing_reason")) : c.filter((e) => d.has(e) || u.some((e) => e.editRecomputeUnavailable || "ggir_corrected" === e.source)), p = [[
		...c.map(h),
		...rn,
		...m.map((e) => h(e + "_missing_reason")),
		...rn.map((e) => e + "_missing_reason")
	].join(",")], g = (e, t) => {
		const n = e.columns.indexOf(r);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: w, ggir: y, recomputed: _, provenance: v, checks: M, scoredDates: b, invalidDates: k, dateOf: S, editRecomputeUnavailable: x, editedNights: I, editedDayRows: A, savedNights: N, source: T } of u) {
		const t = N.columns.filter((e) => !an.has(e)), i = t.filter((e) => {
			const t = N.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return N.values[t].some((e, t) => {
				const a = Number(N.values[N.columns.indexOf(f.ggir_night.header)]?.[t]), i = n.has(a) && !Object.is(n.get(a), e);
				return n.set(a, e), i;
			});
		}), s = /* @__PURE__ */ new Set(), r = (e) => Array.from({ length: y.rows }, (e, t) => t).find((t) => !s.has(t) && g(y, t) === g(w, e) && i.every((n) => Object.is(y.values[y.columns.indexOf(n)]?.[t] ?? null, w.values[w.columns.indexOf(n)]?.[e] ?? null))), o = new Set(c.filter((e) => "nights" === n ? an.has(e) : !sn.has(e) && !t.includes(e))), l = (i, s, r, l) => {
			const u = M.get(g(i, s));
			return [
				...c.map((e) => {
					if ("invalid" === r && ("nights" === n ? an.has(e) : /sleep|spt|waso|wake|onset|guider/i.test(e) && !t.includes(e))) return "";
					const a = i.columns.indexOf(e);
					return a < 0 ? "" : on(i.values[a]?.[s]);
				}),
				r,
				u?.status ?? "",
				h((u?.reasons ?? []).join(";")),
				h((u?.diffs ?? []).map((e) => e.column).join(";")),
				h(l),
				...m.map((t) => "invalid" !== r || d.has(t) && t !== f.ggir_nonwear_perc_spt.header ? x && r === T && o.has(t) && ("days" === n ? A.has(s) : I.has(g(i, s))) ? "edit_recompute_requires_ms2_ms3" : d.has(t) ? null != e(i, t, s) ? "" : on(a(i, t + "_missing_reason", s) ?? "source_reported_missing") : r === T ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
				"",
				u ? "" : "not_computed_for_export",
				u?.reasons.length ? "" : "not_applicable_to_row",
				u?.diffs.length ? "" : "not_applicable_to_row",
				l ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let e = 0; e < w.rows; e += 1) {
			const t = S(w, e);
			if (b && (!t || !b.has(t))) continue;
			const n = r(e);
			if (null != n && s.add(n), t && k?.has(t)) {
				null != n && p.push(l(y, n, T, "")), p.push(l(w, e, "invalid", ""));
				continue;
			}
			if (!_[e]) {
				p.push(l(w, e, T, ""));
				continue;
			}
			const a = g(w, e);
			null != n && p.push(l(y, n, T, "")), p.push(l(w, e, "recomputed", v(a)));
		}
		for (let e = 0; e < y.rows; e += 1) {
			if (s.has(e)) continue;
			const t = S(y, e);
			(!b || t && b.has(t)) && (p.push(l(y, e, T, "")), t && k?.has(t) && p.push(l(y, e, "invalid", "")));
		}
	}
	return p.length > 1 ? `${p.join("\n")}\n` : null;
}
const pn = v.ggir_part4_nightsummary_csv, gn = pn.map((e) => f[e].header), hn = [
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
], fn = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function wn(e, t) {
	const n = f[e], a = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof a ? h(a) : Xt(a, { integral: n.ggirIntegral ?? !1 });
}
function yn(e, t = "legacy-recording", n, a) {
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
	}) : O(a).validStateFraction(o).then(async (e) => {
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
			})), [i, s] = ft(n.map((e) => e.timestamps)), [o, l] = ft(n.map((e) => e.states));
			return O(t).sleepRegularityIndex(r([
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
async function _n(e, t, n, a = {}) {
	const { signal: i } = a, s = e.participantId ?? e.filename, r = z(n.values(), a.algorithm), o = [];
	for (const [l, f] of n) {
		if (!Nn(l, a.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = lt(f, r);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const u = await yn(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, i), { sri: c, fractionValid: d } = u, m = "stale" === r.status ? "scores_from_another_config" : null, p = m ?? u.sriMissingReason, g = m ?? u.fractionValidMissingReason, h = [];
	for (const f of [...t.keys()].sort()) {
		const e = t.get(f);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === l.MAIN_SLEEP && null != t.onsetTimestamp && h.push({
			date: f,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const w = [[
		...gn,
		...hn.map((e) => `${f[e].header}_missing_reason`),
		...fn.map((e) => `${f[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], y = [];
	for (const { date: l, onsetTs: f, wakeupTs: v } of h) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == v ? "not_applicable_to_row" : m ?? "no_scored_epochs"
		};
		if (null != v) {
			const { timestamps: a, algorithmResults: s } = await xt(n, l, r, { signal: i });
			if (s && a.length > 0) {
				t.missingReason = null;
				const n = await rt(s, a, f, v, e.epochLengthSeconds || 60, null, i);
				n && (t = {
					tstH: n.ggirSleepDurationInSptMinutes / 60,
					nAwak: n.numberOfAwakenings,
					latency: n.sleepOnsetLatencyMinutes / 60,
					efficiency: n.sleepEfficiency / 100,
					missingReason: null
				});
			}
		}
		y.push(t);
	}
	const _ = await O(i).ggirManualNightClocks(h.map((e) => e.date), Float64Array.from(h, (e) => e.onsetTs), Float64Array.from(h, (e) => e.wakeupTs ?? NaN), Float64Array.from(y, (e) => e.tstH ?? NaN));
	for (let l = 0; l < h.length; l++) {
		const { onsetTs: t, wakeupTs: n } = h[l], a = _[l], { tstH: i, nAwak: r, latency: o, efficiency: u } = y[l], m = {
			ggir_id: s,
			ggir_night: l + 1,
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
		w.push([
			...pn.map((e) => wn(e, m[e])),
			...hn.map((e) => {
				const t = pn.indexOf(e);
				return t >= 0 && null == m[pn[t]] ? "not_computed_for_export" : "";
			}),
			...fn.map((e) => {
				const t = pn.indexOf(e);
				return t >= 0 && null == m[pn[t]] ? y[l].missingReason ?? "" : "";
			}),
			p ?? "",
			g ?? ""
		].join(","));
	}
	return w.join("\n") + "\n";
}
function vn(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function Mn(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function bn(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function kn(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: a } = Mn(n), i = [e, a].filter(Boolean);
		t.set(n, 0 === i.length ? "part4_nightsummary.csv" : `part4_nightsummary_${i.join("_")}.csv`);
	}
	return t;
}
function Sn(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : X(e);
}
function xn(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function* In(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let a = Math.min(e.length, n + Qt / 4);
		a < e.length && /[\uD800-\uDBFF]/u.test(e[a - 1]) && (a -= 1), yield t.encode(e.slice(n, a)), n = a;
	}
	yield t.encode("\n");
}
function An(e) {
	return new TextEncoder().encode(e);
}
function Nn(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function Tn(e, t, n) {
	n?.throwIfAborted();
	const a = function(e, t) {
		const { signal: n } = t, { username: a, dateRange: i, snapshot: s } = e, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const c = ti(s, Va.ggirReport, e.map((e) => e.id)), d = await Promise.all(e.map((e) => si(s, e.id, a, n)));
				for (const [a, s] of e.entries()) {
					const e = c.files.find((e) => e.id === s.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: m, markersByAlgo: p, selected: h } = d[a], f = oi(c, e.id), w = new Map([...p].filter(([e]) => Nn(e, i))), y = /* @__PURE__ */ new Map();
					for (const [t, n] of w) for (const e of n) {
						const n = bn(e);
						let a = y.get(n);
						a || (a = /* @__PURE__ */ new Map(), y.set(n, a)), a.set(t, e);
					}
					const _ = /* @__PURE__ */ new Set();
					for (const [t, n] of w) for (const e of n) g(e) && _.add(t);
					if (m) {
						const t = new Set([...h].filter(([, e]) => "invalid" === ee(void 0, e).kind).map(([e]) => e)), n = m;
						u.push({
							...n,
							...i ? { scoredDates: new Set(e.availableDates.filter((e) => Nn(e, i))) } : {},
							invalidDates: t
						});
					}
					const v = [..._].sort(), M = v[0], b = v[v.length - 1], k = [], S = [];
					for (const n of t.charts ? [...f.keys()].sort() : []) if (Nn(n, i) && (null == M || null == b || n >= M && n <= b)) {
						const e = f.get(n), t = W({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), a = t.timestamps, i = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < a.length; n++) k.push(a[n]), S.push(i[n]);
					}
					const x = [];
					for (const [t, a] of y) {
						const s = Mn(t).algoKey, l = m ? "" : await _n(e, a, f, {
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
						const { algoKey: p, ruleKey: g } = Mn(t), h = [p, g].filter(Boolean).join("_"), w = z(f.values(), s || null);
						x.push([h, {
							p: c,
							n: d,
							..."stale" === w.status ? { stale: w.reason } : {}
						}]);
					}
					0 === y.size && x.push(["", {
						p: [],
						n: []
					}]), k.length > 0 && l.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: k,
						act: S,
						algos: x
					});
				}
			},
			entries: () => async function({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: a, layouts: i, only: s }) {
				const r = {}, o = (e) => void 0 === s || s === e;
				for (const [c, d] of a ?? kn([...e.keys()])) {
					const t = e.get(c);
					t?.length && o(d) && (r[d] = An(`${t.join("\n")}\n`));
				}
				for (const [c, d] of Object.entries(function(e, t) {
					const n = /* @__PURE__ */ new Map();
					for (const a of e) for (const [e, t] of Object.entries(a.part2Reports ?? {})) n.set(e, [...n.get(e) ?? [], t]);
					return Object.fromEntries([...n].map(([e, n]) => {
						const a = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], i = [a.map(h).join(",")];
						for (const t of n) for (let e = 0; e < t.rows; e++) i.push(a.map((n) => on(t.values[t.columns.indexOf(n)]?.[e])).join(","));
						return [e, i.join("\n") + "\n"];
					}));
				}(t, i))) o(c) && (r[c] = An(d));
				const l = o(ln) ? await mn(t, "nights", n, i?.get(ln)) : null;
				l && (r[ln] = An(l));
				const u = o(un) ? await mn(t, "days", n, i?.get(un)) : null;
				return u && (r[un] = An(u)), r;
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
				const { algoKey: s, ruleKey: r } = Mn(a), o = xn([s, r].filter(Boolean).join("_"), "unscoped"), l = `activity-${xn(e, "recording")}-${o}-${n}.svg`, u = function(e) {
					if (0 === e.timestamps.length) return en("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return en("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, a = 0;
					const i = e.timestamps.map((i, s) => {
						const r = e.activity[s];
						return !Number.isFinite(i) || i <= t ? en("timestamps must be finite and strictly ascending") : (t = i, null != r && Number.isFinite(r) ? (n = Math.min(n, r), a = Math.max(a, r), {
							timestamp: i,
							value: r
						}) : {
							timestamp: i,
							value: null
						});
					}), s = i[0].timestamp, r = i[i.length - 1].timestamp, o = r > s ? r : s + 1;
					if (!Number.isFinite(o) || o <= s) return en("single-epoch viewport must have a representable right edge");
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
				}), c = [...In(`      <div class="plot-svg">${Yt(u)}</div>`)];
				return {
					algoKey: a,
					...i.stale ? { stale: i.stale } : {},
					svgFilename: l,
					plot: new Blob(c),
					plotLengths: c.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${vn(Sn(u.viewport.min))} → ${vn(Sn(u.viewport.max))} · activity domain ${Xt(u.valueDomain.min)}–${Xt(u.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), s = new Set(kn([...a.csvLinesByAlgo.keys()]).values()), r = [];
	for (const [o, l] of Object.entries(await a.entries())) s.has(o) || r.push([o, c(d(new TextDecoder().decode(l)).records[0].text)]);
	return {
		charts: i,
		csvLinesByAlgo: a.csvLinesByAlgo,
		ggirReviews: a.ggirReviews,
		headers: r
	};
}
async function Rn(e, t, n, a) {
	const i = [], s = [];
	for (const [r, o] of e) if (r) for (let e = 0; e < Math.min(r.length, o.length); e++) i.push(o[e]), s.push(r[e]);
	return await O(a).spanFiniteMean(Float64Array.from(i), Float64Array.from(s), t, n) ?? null;
}
const En = _.invalid_night_row?.markerTypeCell ?? "", $n = _.nonwear_row?.markerTypeCell ?? "";
function On(e) {
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
function Ln(e) {
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
const Dn = [
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
async function Cn(e, t, n, a, i, s, r) {
	try {
		return {
			metrics: t ? await ot(e, t, n, a, i, s, r) : await rt(e, n, a, i, s, null, r),
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
async function Bn(e, t, n, a) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const i = new Set(n.filter((t) => t.markerType === l.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return i.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : yn(t.filter((e) => i.has(e.date)), e, t[0]?.epochLengthSeconds, a);
}
function Fn(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const Pn = [
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
], Wn = {
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
function jn(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function Un(e, t, n, a, i) {
	const s = [], r = ti(n, Va.event, e), o = [...r.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		i?.throwIfAborted();
		const e = jn(l, oi(r, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await kt(e, O(i)), u = new Set(ai(r, l.id, a).keys());
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
v.sleep_csv.filter((e) => "server" !== f[e].plane).map((e) => f[e].header), w("event_marker_csv", "local"), _.invalid_night_row.markerTypeCell, w("actiware_interval_csv", "local"), w("actiware_sleep_wake_csv", "local"), new Uint8Array([3, 0]);
const Gn = "union_all";
function zn(e) {
	return e.nonwearDetector ?? "union_all";
}
const Hn = {
	excludeNonwear: !0,
	excludeMainSleep: !0,
	excludeNaps: !0,
	useAlgorithmNonwear: !1,
	useManualNonwear: !0,
	minimumWakeWearMinutes: 0,
	nonwearDetector: Gn
}, qn = {
	...Hn,
	minimumWakeWearMinutes: he.minWearMinutesPerDay
};
function Vn(e) {
	return e ? {
		...qn,
		...e
	} : qn;
}
function Kn(e, t) {
	const n = [];
	for (const a of e.values()) {
		for (const e of a.sleepMarkers) {
			const t = e.markerType === l.MAIN_SLEEP ? "main_sleep" : e.markerType === l.NAP ? "nap" : null;
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
function Jn(e, t, n, a) {
	const i = zn(t), s = "union_all" === i ? Object.entries(ce(e, n)) : [[i, ue(e, i, n)], ..."detach_nonwear" === i ? [] : [["detach_nonwear", ue(e, "detach_nonwear", n)]]], r = new Float64Array(e.timestamps);
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
function Yn(e) {
	return {
		excludeNonwear: e.excludeNonwear,
		excludeMainSleep: e.excludeMainSleep,
		excludeNaps: e.excludeNaps,
		useAlgorithmNonwear: e.useAlgorithmNonwear,
		useManualNonwear: e.useManualNonwear,
		minimumWakeWearMinutes: Number.isFinite(e.minimumWakeWearMinutes) ? Math.max(0, e.minimumWakeWearMinutes) : 0
	};
}
function Zn(e) {
	return {
		totalEpochs: e.totalEpochs,
		includedEpochs: e.includedEpochs,
		nonwearEpochs: e.nonwearEpochs,
		mainSleepEpochs: e.mainSleepEpochs,
		napEpochs: e.napEpochs,
		overlapEpochs: e.overlapEpochs
	};
}
function Qn(e, t) {
	return O(t).summarizePhysicalActivityDays(e);
}
async function Xn(e, t = s()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
const ea = A.PRESCHOOL_FREE_LIVING_RF_3_5;
function ta(e) {
	const t = e.algorithmResults[ea];
	return null != t && new Uint8Array(t).length > 0;
}
function na(e) {
	const t = e.algorithmResults[ea];
	if (!t) return null;
	const n = new Uint8Array(t);
	return n.length > 0 ? n : null;
}
function aa(e) {
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
function ia(e) {
	return e instanceof Map ? ia([...e.entries()]) : Array.isArray(e) ? e.map(ia) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, ia(t)])) : e;
}
async function sa(e, t) {
	const { db: n, fileId: a, kind: i, inputs: s, signal: r } = e;
	r?.throwIfAborted();
	let o = n, l = null;
	if (o) try {
		const e = await o.activityDays.where("fileId").equals(a).primaryKeys();
		l = await R(JSON.stringify(ia({
			version: 1,
			core: "82704a2c80a328a8f09fe3ad2c5d30aabc003b1d",
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
		await L(o, [o.physicalActivityFileSummaries], (e) => e.table(o.physicalActivityFileSummaries.name).put({
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
function ra(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function oa(e, t) {
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
function la(e, t, n) {
	if (!n) return e.ruleLabel;
	const a = String(t.sedentaryMax), i = String(t.lightMin), s = String(t.moderateMin - 1), r = String(t.moderateMin), o = String(t.vigorousMin - 1), l = String(t.vigorousMin);
	return t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${a}, non-sedentary >=${i} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${a}, light ${i}-${s}, MVPA >=${r} counts/min` : `Custom cutpoints: Sed <=${a}, light ${i}-${s}, moderate ${r}-${o}, vigorous >=${l} counts/min`;
}
const ua = [
	null,
	"sedentary",
	"light",
	"moderate",
	"vigorous"
];
async function ca(e) {
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
	const l = await O(e.signal).cutpointToneCodes(Float64Array.from(o, (e) => e.countsPerMinute), ra(a));
	let u = 0;
	const c = [];
	return o.forEach((e, t) => {
		const n = ua[l[t] ?? 0];
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
function da(e, t) {
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
function ma(e) {
	e.mvpaMinutesPerDay = e.totalDays > 0 ? e.mvpaMinutes / e.totalDays : 0, e.totalDays > 0 && (null != e.mvpaBouts && (e.mvpaBoutsPerDay = e.mvpaBouts / e.totalDays), null != e.sedentaryBreaks && (e.sedentaryBreaksPerDay = e.sedentaryBreaks / e.totalDays));
}
function pa(e, t) {
	e.sedentaryMinutes += t.sedentaryMinutes, e.lightMinutes += t.lightMinutes, e.moderateMinutes += t.moderateMinutes, e.vigorousMinutes += t.vigorousMinutes, e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes;
}
function ga(e, t, n, a) {
	if (0 === t.totalDays) return;
	e.totalDays += t.totalDays, pa(e, t.intensity), e.defaultIntensityMinutes && t.defaultIntensity && pa(e.defaultIntensityMinutes, t.defaultIntensity), null != t.mimsUnitTotal && (e.mimsUnitTotal = (e.mimsUnitTotal ?? 0) + t.mimsUnitTotal), e.totalEpochsReviewed = (e.totalEpochsReviewed ?? 0) + t.totalEpochs, e.includedEpochsReviewed = (e.includedEpochsReviewed ?? 0) + t.includedEpochs, e.wakeWearMinutes = (e.wakeWearMinutes ?? 0) + t.wakeWearMinutes, e.excludedNonwearMinutes = (e.excludedNonwearMinutes ?? 0) + t.excludedNonwearMinutes, e.excludedMainSleepMinutes = (e.excludedMainSleepMinutes ?? 0) + t.excludedMainSleepMinutes, e.excludedNapMinutes = (e.excludedNapMinutes ?? 0) + t.excludedNapMinutes, e.maskOverlapEpochs = (e.maskOverlapEpochs ?? 0) + t.overlapEpochs, e.maskPolicy = n;
	const i = t.bouts;
	i && (e.mvpaBouts = (e.mvpaBouts ?? 0) + i.mvpaBouts, e.mvpaBoutMinutes = (e.mvpaBoutMinutes ?? 0) + i.mvpaBoutMinutes, e.sedentaryBouts = (e.sedentaryBouts ?? 0) + i.sedentaryBouts, e.sedentaryBreaks = (e.sedentaryBreaks ?? 0) + i.sedentaryBreaks, a.total += i.meanSedentaryBoutMinutes * i.sedentaryBouts, e.meanSedentaryBoutMinutes = e.sedentaryBouts > 0 ? a.total / e.sedentaryBouts : 0);
}
async function ha(e) {
	const { file: t, days: n, summaries: a, markersByAnalysisDate: i, sensorNonwearPeriods: s, maskPolicy: r, validDayCriteria: o, cutpointMethods: l, choiAxis: u } = e, c = new Set([...i].filter(([, e]) => g(e)).map(([e]) => e)), d = Number.isFinite(t.epochLengthSeconds) && t.epochLengthSeconds > 0 ? t.epochLengthSeconds : 60, m = 60 / d, p = {
		policy: Yn(r),
		intervals: Kn(i, s)
	}, h = n.map((e) => Jn(e, r, u, d)), f = n.map((e, t) => ({
		timestamps: new Float64Array(e.timestamps),
		epochSeconds: d,
		series: h[t]
	})), { dates: w, shortfall: y } = await async function({ days: e, countDays: t, epochSeconds: n, request: a, criteria: i, scoredDates: s, signal: r }) {
		if (!i) return {
			dates: null,
			shortfall: null
		};
		if (e.some((e) => !s.has(e.date))) return {
			dates: null,
			shortfall: null
		};
		const o = await Qn({
			...a,
			days: [...t]
		}, r), l = 86400 / n, u = await Xn(e.map((e) => e.date), O(r)), c = e.map((e, t) => {
			const n = o.days[t].mask;
			return {
				date: e.date,
				wearMinutes: n.wakeWearMinutes,
				isWeekend: u[t],
				isPartialDay: n.totalEpochs < l
			};
		}), d = await async function(e, t = he, n) {
			return O(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
		}(c, i, r);
		if (!d.meetsCriteria) {
			const e = i.requireWeekendDay && !d.hasWeekendValidDay ? ", including a weekend day" : "";
			return {
				dates: /* @__PURE__ */ new Set(),
				shortfall: `${String(d.validDays)} of the required ${String(i.minValidDaysPerParticipant)} valid days${e}`
			};
		}
		const m = await async function(e, t = he, n) {
			const a = await O(n).validWearDays(Float64Array.from(e), t);
			return Array.from(a, (e) => 0 !== e);
		}(c.map((e) => e.wearMinutes), i, r);
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
	}), _ = a.filter((e) => !(r.minimumWakeWearMinutes > 0 && (null == e.validHours || 60 * e.validHours < r.minimumWakeWearMinutes))).filter((e) => null != e.sedentaryMinutes && null != e.lpaMinutes && null != e.mvpaMinutes).filter((e) => !w || w.has(e.analysisDate)).map((e) => ({
		sedentaryMinutes: e.sedentaryMinutes,
		lpaMinutes: e.lpaMinutes,
		mvpaMinutes: e.mvpaMinutes
	})), v = n.map((e) => !w || w.has(e.date)), M = [];
	for (let g = 0; g < l.length; g++) {
		e.signal?.throwIfAborted();
		const a = l[g];
		if (me(a.method, t.sourceProfileId)) {
			M.push(null);
			continue;
		}
		const i = [];
		if (n.forEach((e, t) => {
			const n = new Float64Array("axisY" === a.axis ? e.axisY : e.vectorMagnitude);
			n.length > 0 && n.length === f[t].timestamps.length && i.push({
				index: t,
				values: n
			});
		}), 0 === i.length) {
			M.push(null);
			continue;
		}
		const s = await Qn({
			...p,
			analysisKind: "count_cutpoint",
			thresholds: ra(a),
			defaultThresholds: ra(ge[g]),
			days: i.map(({ index: e, values: t }) => ({
				...f[e],
				values: t,
				aggregate: v[e]
			}))
		}, e.signal), r = {
			signalSeen: s.days.some((e) => e.hasValidSignal),
			totals: s.totals
		}, o = i.find(({ index: e }) => v[e]);
		if (o) {
			const t = await Qn({
				...p,
				includeEpochDetails: !0,
				days: [f[o.index]]
			}, e.signal), i = await ca({
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
			const t = await fe(a.method, d, e.signal);
			t && "warn" === t.severity && (r.epochMismatch = t);
		}
		M.push(r);
	}
	const b = (e, t) => n.flatMap((n, a) => {
		const i = e(n);
		return i && 0 !== i.length ? [{
			timestamps: f[a].timestamps,
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(i),
			grid: t,
			fallbackEpochSeconds: d,
			series: h[a],
			aggregate: v[a]
		}] : [];
	}), k = async (t, n) => {
		if (e.signal?.throwIfAborted(), 0 === t.length) return null;
		const a = await Qn({
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
		shortfall: y,
		ggirSummarySeen: a.length > 0,
		ggirRows: _,
		hasAnyActivity: v.some(Boolean),
		cutpoints: M,
		mims: await k(b((e) => e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output"), "mims_volume"),
		preschoolRf: await k(b(na, "classifier"), "preschool_classifier")
	};
}
async function fa(e = {}) {
	const t = await j(e.dbOverride, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = e.username ?? "anonymous", a = e.maskPolicy ?? Hn, i = e.validDayCriteria, s = de("ggir_enmo"), r = de("mims"), o = de("preschool_free_living_rf_3_5"), l = da({
		method: s.method,
		label: s.label,
		requiredSignal: s.requiredSignal,
		sourceLabel: s.signalLabel,
		ruleLabel: "Uses imported GGIR daily sedentary, LPA, and MVPA summaries",
		unavailableAction: "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."
	}, null), u = O(e.signal), c = await Promise.all(ge.map((t) => async function(e, t, n) {
		const a = t[e.method];
		if (!a) return e;
		const i = await we(a, n);
		if (!i) return e;
		const s = ra(e);
		return {
			...e,
			ruleLabel: la(e, i, JSON.stringify(i) !== JSON.stringify(s)),
			cutpointBands: oa(i, e.cutpointBands),
			cutpointScaleMax: Math.max(e.cutpointScaleMax ?? 1, ...Object.values(i).filter(Number.isFinite)),
			...i
		};
	}(t, e.cutpointOverrides ?? {}, u))), d = c.map((e, t) => function(e, t) {
		return {
			...da(e, null),
			cutpointThresholds: ra(e),
			defaultCutpointThresholds: ra(t),
			cutpointEditable: !0,
			defaultIntensityMinutes: {
				sedentaryMinutes: 0,
				lightMinutes: 0,
				moderateMinutes: 0,
				vigorousMinutes: 0,
				mvpaMinutes: 0
			}
		};
	}(e, ge[t])), m = new Array(c.length).fill(!1), p = [], g = da({
		method: r.method,
		label: r.label,
		requiredSignal: r.requiredSignal,
		sourceLabel: r.signalLabel,
		ruleLabel: "Uses stored MIMS_UNIT epoch values from actours; intensity cutpoints/equating are not applied in this row.",
		unavailableAction: "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values.",
		unavailableStatus: "backend_required"
	}, null);
	g.mimsUnitTotal = 0, g.mimsUnitPerDay = 0;
	const h = da({
		method: o.method,
		label: o.label,
		requiredSignal: o.requiredSignal,
		sourceLabel: o.signalLabel,
		ruleLabel: "Uses actimetric Preschool Wrist Random Forest Free Living Lag-Lead classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
		unavailableAction: "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.",
		unavailableStatus: "backend_required"
	}, null), f = de("hildebrand_enmo_wrist_2014"), w = da({
		method: f.method,
		label: f.label,
		requiredSignal: f.requiredSignal,
		sourceLabel: f.signalLabel,
		ruleLabel: "Hildebrand 2014 non-dominant wrist ENMO (mg) cut-points: MVPA >=201 mg, vigorous >=707 mg; light near ~45 mg. Applied to a calibrated ENMO (mg) epoch signal, never to ActiGraph counts.",
		unavailableAction: "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline; the browser count pipeline does not compute ENMO mg.",
		unavailableStatus: "needs_signal"
	}, null);
	let y = !1, _ = !1, v = !1, M = !1;
	const b = oe(), k = c.map(() => ({ total: 0 })), S = { total: 0 };
	for (const I of t) {
		if (e.signal?.throwIfAborted(), !I.id) continue;
		const t = I.id, s = await J(t, e.dbOverride), r = await C(t, n, e.dbOverride), o = await B(t, e.dbOverride), u = await sa({
			db: e.dbOverride ?? null,
			fileId: t,
			kind: "analysis",
			...e.signal ? { signal: e.signal } : {},
			inputs: {
				epochLengthSeconds: I.epochLengthSeconds,
				sourceProfileId: I.sourceProfileId ?? null,
				summaries: s,
				markers: aa(r),
				sensorNonwearPeriods: o,
				maskPolicy: a,
				validDayCriteria: i ?? null,
				thresholds: c.map(ra),
				choiAxis: b
			}
		}, async () => ha({
			file: I,
			days: [...(await q(t, e.dbOverride, e.activityDayMemo)).values()],
			summaries: s,
			markersByAnalysisDate: r,
			sensorNonwearPeriods: o,
			maskPolicy: a,
			validDayCriteria: i,
			cutpointMethods: c,
			choiAxis: b,
			...e.signal ? { signal: e.signal } : {}
		}));
		u.shortfall && p.push(u.shortfall), u.ggirSummarySeen && (_ = !0);
		for (const e of u.ggirRows) l.totalDays += 1, l.sedentaryMinutes += e.sedentaryMinutes, l.lightMinutes += e.lpaMinutes, l.mvpaMinutes += e.mvpaMinutes;
		u.hasAnyActivity && (y = !0), u.cutpoints.forEach((e, t) => {
			if (!e) return;
			const n = d[t];
			e.signalSeen && (m[t] = !0), ga(n, e.totals, a, k[t]), e.previewTrace && !n.previewTrace && (n.previewTrace = e.previewTrace), e.epochMismatch && !n.epochMismatch && (n.epochMismatch = e.epochMismatch);
		}), u.mims && (u.mims.signalSeen && (v = !0), ga(g, u.mims.totals, a, S)), u.preschoolRf && (u.preschoolRf.signalSeen && (M = !0), ga(h, u.preschoolRf.totals, a, S));
	}
	for (let I = 0; I < d.length; I++) {
		const e = d[I], t = c[I];
		e.mvpaMinutes = e.moderateMinutes + e.vigorousMinutes, 0 === e.totalDays && (e.available = !1, e.status = m[I] ? "ready" : "needs_signal", e.unavailableReason = m[I] ? p.length > 0 ? `Excluded by the valid-days-per-participant rule: ${p.join("; ")}. Change it in Study Settings → valid-day criteria.` : `No local ${e.sourceLabel.toLowerCase()} days meet the minimum wake-wear rule.` : y ? `No local ${e.sourceLabel.toLowerCase()} days are available.` : "No local activity epochs are available.", e.nextStepLabel = t.unavailableAction), ma(e);
	}
	l.moderateMinutes = l.mvpaMinutes, ma(l), 0 === l.totalDays && (l.available = !1, l.status = _ ? "ready" : "needs_signal", l.unavailableReason = _ ? "No local GGIR daily summaries meet the current inclusion rules." : "No local GGIR daily summaries are available. Import raw/5-second-capable files to populate ENMO summaries.", l.nextStepLabel = "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."), g.totalDays > 0 ? (g.available = !0, g.status = "ready", g.unavailableReason = null, g.nextStepLabel = null, g.mimsUnitPerDay = (g.mimsUnitTotal ?? 0) / g.totalDays) : (g.available = !1, g.status = v ? "ready" : "backend_required", g.unavailableReason = v ? "No stored MIMS_UNIT epoch days meet the current inclusion rules." : "No MIMS_UNIT epoch values are stored in this workspace yet. This becomes ready when the actours MIMS backend/WASM build computes and stores MIMS_UNIT epochs.", g.nextStepLabel = "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values."), ma(w), w.available = !1, w.status = "needs_signal", w.unavailableReason = "No calibrated ENMO (mg) epoch stream is available in this workspace. ENMO (mg) is a raw/GGIR-derived signal; the browser count pipeline does not produce it, so this method cannot classify counts against Hildebrand mg thresholds.", w.nextStepLabel = "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline.", ma(h), h.totalDays > 0 ? (h.available = !0, h.status = "ready", h.unavailableReason = null, h.nextStepLabel = null) : (h.available = !1, h.status = M ? "ready" : "backend_required", h.unavailableReason = M ? "No stored preschool wrist RF class days meet the current inclusion rules." : "No actimetric-compatible preschool wrist RF class epochs are stored in this workspace yet. This becomes ready when actours/WASM computes 15 s classes for 3-5 year-old wrist data.", h.nextStepLabel = "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.");
	const x = t.map((e) => e.sourceProfileId);
	return [
		l,
		h,
		...d,
		w,
		g
	].filter((e) => ye(e.method, x));
}
function wa(e, t) {
	if (!t) return !0;
	const [n, a] = t;
	return e >= n && e <= a;
}
function ya(e) {
	const t = pe.find((t) => t.method === e);
	if (t) return {
		family: t.family,
		requiredSignal: t.requiredSignal,
		computationOwner: t.backendOwner ?? "browser_workspace",
		frontendComputesMetric: t.frontendComputesMetric,
		statusWhenMissing: t.statusWhenMissing
	};
	const n = de(e), a = "ready" === n.statusWhenMissing ? "needs_signal" : n.statusWhenMissing;
	return {
		family: n.family,
		requiredSignal: n.requiredSignal,
		computationOwner: n.backendDependency ?? "browser_workspace",
		frontendComputesMetric: "count_cutpoint" === n.family,
		statusWhenMissing: a
	};
}
function _a(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function va(e, t, n) {
	return "default" === n ? e.ruleLabel : t.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, non-sedentary >=${String(t.lightMin)} counts/min` : t.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, MVPA >=${String(t.moderateMin)} counts/min` : `Custom cutpoints: Sed <=${String(t.sedentaryMax)}, light ${String(t.lightMin)}-${String(t.moderateMin - 1)}, moderate ${String(t.moderateMin)}-${String(t.vigorousMin - 1)}, vigorous >=${String(t.vigorousMin)} counts/min`;
}
function Ma(e) {
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
async function ba(e, t, n = {}, a) {
	const i = await j(a), s = (e.length > 0 ? i.filter((t) => null != t.id && e.includes(t.id)) : i).sort((e, t) => e.filename.localeCompare(t.filename)), r = [], o = n.username ?? "anonymous", l = n.maskPolicy ?? Hn, u = n.choiAxis ?? oe(), c = zn(l), d = n.cutpointOverrides, m = n.cutpointPresetNames, p = O(n.signal), g = await Promise.all(ge.map((e) => async function(e, t, n, a) {
		const i = t?.[e.method], s = i ? await we(i, a) : null;
		return s ? {
			thresholds: s,
			source: "custom",
			presetName: n?.[e.method] ?? ""
		} : {
			thresholds: _a(e),
			source: "default",
			presetName: ""
		};
	}(e, d, m, p))), h = n.inclusionRulePresetName ?? "", f = n.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), w = de("ggir_enmo"), y = de("mims"), _ = de("preschool_free_living_rf_3_5"), v = ya("ggir_enmo"), M = ya("mims"), b = ya("preschool_free_living_rf_3_5");
	for (const k of s) {
		if (n.signal?.throwIfAborted(), !k.id) continue;
		if (!0 === k.ggirSummariesNeedRecompute) throw new Error(`${k.filename}: its GGIR summaries were not recomputed for the current study settings. In Study settings, run Rescore (offered for every file whose summaries are refused) before exporting.`);
		const e = k.participantId ?? "", i = Number.isFinite(k.epochLengthSeconds) && k.epochLengthSeconds > 0 ? k.epochLengthSeconds : 60, s = await J(k.id, a);
		for (const n of s) wa(n.analysisDate, t) && r.push({
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
		const d = [...(await q(k.id, a, n.activityDayMemo)).entries()].filter(([e]) => wa(e, t)).sort(([e], [t]) => e.localeCompare(t)).map(([, e]) => e), m = await C(k.id, o, a), p = await B(k.id, a), S = {
			policy: Yn(l),
			intervals: Kn(m, p)
		}, x = d.map((e) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: i,
			series: Jn(e, l, u, i)
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
			const s = await Qn({
				...S,
				...t,
				days: a.map(({ dayInput: e }) => e)
			}, n.signal);
			return n.signal?.throwIfAborted(), a.forEach(({ index: e }, t) => {
				i[e] = s.days[t];
			}), i;
		}, A = (e, t, n, a) => e && e.length > 0 ? {
			timestamps: x[a].timestamps,
			series: x[a].series ?? [],
			...n.ggirTimestamps ? { ggirTimestamps: new Float64Array(n.ggirTimestamps) } : {},
			values: Float64Array.from(e),
			grid: t,
			fallbackEpochSeconds: i
		} : null, N = [], T = ge.map((e) => null !== me(e.method, k.sourceProfileId));
		for (const [t, n] of ge.entries()) T[t] ? N.push([]) : N.push(await I((e, t) => {
			const a = new Float64Array("axisY" === n.axis ? e.axisY : e.vectorMagnitude);
			return a.length > 0 && a.length === x[t].timestamps.length ? {
				...x[t],
				values: a
			} : null;
		}, {
			analysisKind: "count_cutpoint",
			thresholds: g[t].thresholds
		}));
		const R = await I((e, t) => A(na(e), "classifier", e, t), { analysisKind: "preschool_classifier" }), E = await I((e, t) => A(e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output", e, t), { analysisKind: "mims_volume" }), $ = await Promise.all(ge.map((e) => fe(e.method, i, n.signal)));
		for (const [t, n] of d.entries()) {
			const a = n.date;
			for (const [n, d] of ge.entries()) {
				if (T[n]) continue;
				const s = g[n], u = va(d, s.thresholds, s.source), m = ya(d.method), p = $[n], w = Ma(N[n][t]);
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
					notes: w ? u : `No finite ${d.sourceLabel.toLowerCase()} values for this day.`
				});
			}
			const s = Ma(R[t]);
			null === me("preschool_free_living_rf_3_5", k.sourceProfileId) && r.push({
				filename: k.filename,
				participantId: e,
				analysisDate: a,
				method: "preschool_free_living_rf_3_5",
				methodLabel: _.label,
				methodFamily: b.family,
				requiredSignalContract: b.requiredSignal,
				computationOwner: b.computationOwner,
				frontendComputesMetric: b.frontendComputesMetric,
				sourceSignal: _.signalLabel,
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
			const u = Ma(E[t]);
			null === me("mims", k.sourceProfileId) && r.push({
				filename: k.filename,
				participantId: e,
				analysisDate: a,
				method: "mims",
				methodLabel: y.label,
				methodFamily: M.family,
				requiredSignalContract: M.requiredSignal,
				computationOwner: M.computationOwner,
				frontendComputesMetric: M.frontendComputesMetric,
				sourceSignal: y.signalLabel,
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
].join(","), ge.length;
var ka = n({
	editsFromMarkers: () => $a,
	getGgirMarkerInputs: () => Oa,
	ggirNightRecords: () => Ea,
	hasGgirRecomputeFailure: () => Na,
	mergeGgirSleepMarkers: () => Ra,
	recomputeGgirResults: () => Ca,
	recoverPendingGgirRecomputes: () => Ba,
	reviewGgirResultsForMarkers: () => Fa,
	scheduleGgirRecompute: () => Da
});
const Sa = new EventTarget(), xa = /* @__PURE__ */ new WeakMap(), Ia = 800, Aa = "Update GGIR review";
function Na(e, t, n) {
	return I.getState().jobs[`${n.name}:${La(e, t)}`]?.status === x.FAILED;
}
function Ta(e, t, n, a, i) {
	if (i?.aborted || function(e) {
		return e instanceof Error && e.name === m.errnames.DatabaseClosed;
	}(a)) return;
	const s = La(e, t), r = `${n.name}:${s}`, o = I.getState();
	o.jobs[r]?.controller.signal.aborted || o.jobs[r]?.status === x.ELSEWHERE || (o.update(r, {
		id: r,
		key: s,
		workspaceId: n.name,
		kind: k.GGIR_RECOMPUTE,
		label: Aa,
		controller: o.jobs[r]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: x.FAILED
	}), n.isOpen() && T() === n && Sa.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function Ra(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function Ea(e, t, n, a = [], i) {
	const s = H([...n.values()].flat(), !0), r = s?.algorithm ?? se(t), o = s?.detectionRule ?? null, u = /* @__PURE__ */ new Map();
	for (const [l, m] of n) {
		const e = H(m, !0);
		e && u.set(l, [{
			...e,
			algorithm: r,
			detectionRule: o
		}]);
	}
	const c = re(t), d = c.length ? await O(i).ggirLabelsToStoredMs(Float64Array.from(c.flatMap((e) => [e.onsetMs, e.wakeMs])), a) : [];
	for (const [m, p] of c.entries()) {
		const t = u.get(p.nightDate)?.[0], n = ee(p, t);
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
			algorithm: r,
			detectionRule: o,
			sleepMarkers: Ra({
				markerType: l.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: d[2 * m] / 1e3,
				offsetTimestamp: d[2 * m + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : u.set(p.nightDate, t ? [t] : []);
	}
	return u;
}
async function $a(e, t, n = [], a) {
	const i = re(e).flatMap((e) => {
		const n = ee(e, t.get(e.nightDate));
		return "scored" === n.kind && null != n.main.onsetTimestamp && null != n.main.offsetTimestamp ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === i.length) return [];
	const s = O(a), r = await s.storedToGgirLabelsMs(Float64Array.from(i.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await s.wallClockLabels(Float64Array.from([...r, ...i.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * i.length;
	return i.flatMap(({ w: e }, t) => {
		const n = o[2 * t], a = o[2 * t + 1];
		return n !== o[l + 2 * t] || a !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: a
		}] : [];
	});
}
async function Oa(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [a, i] = await Promise.all([G(e, t, n), D(e, n)]), s = new Map([...a].flatMap(([e, t]) => {
			const n = H(t, !0);
			return n ? [[e, n]] : [];
		})), r = i?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([r ?? [], [...s].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				ee(void 0, t)
			])]),
			markers: s,
			clockSteps: r,
			bundleRevision: i?.ggirBundleRevision
		};
	});
}
function La(e, t) {
	return `${k.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function Da(e, t, n, a) {
	if (!n.isOpen() || T() !== n || a?.aborted) return;
	let i = xa.get(n);
	i || (i = /* @__PURE__ */ new Map(), xa.set(n, i));
	const s = La(e, t);
	clearTimeout(i.get(s)), i.set(s, setTimeout(() => {
		i.delete(s), n.files.get(e).then((i) => {
			if (i?.ggirBundleRevision && n.isOpen() && T() === n && !a?.aborted) return Ca(e, t, n, a);
		}).catch((i) => {
			a?.aborted || i instanceof DOMException && "AbortError" === i.name || (Ta(e, t, n, i, a), n.isOpen() && T() === n && (console.error("[ggir-results] recompute failed."), P("error", "GGIR results recompute failed", K(i))));
		});
	}, Ia));
}
function Ca(e, t, n, a, i = !0) {
	const s = (r, o = a) => $({
		kind: k.GGIR_RECOMPUTE,
		key: La(e, t),
		label: Aa,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (a) => {
			a.signal.throwIfAborted();
			const o = await async function(e, t, n, a, i) {
				if (a.throwIfAborted(), !n.isOpen() || T() !== n) return null;
				const { markerInputs: s, markers: r, clockSteps: o, bundleRevision: l } = await Oa(e, t, n);
				if (!l) return null;
				const u = await n.ggirScorerReviews.get([e, t]);
				if (!n.isOpen() || T() !== n) return null;
				if (a.throwIfAborted(), u?.markerInputs === s && u.bundleRevision === l) return i && Sa.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), u.current ?? null;
				const c = await n.ggirResultsBundles.get(e);
				if (!c) return null;
				const d = await $a(c.imported, r, o, a);
				if (!n.isOpen() || T() !== n) return null;
				const m = u?.bundleRevision === l && JSON.stringify(u.edits) === JSON.stringify(d) ? u.current : (await Fa(c, r, o, d, a)).current;
				a.throwIfAborted();
				const p = (/* @__PURE__ */ new Date()).toISOString();
				if (!n.isOpen() || T() !== n) return null;
				const g = await L(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!n.isOpen() || T() !== n) return null;
					const i = await Oa(e, t, n);
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
				return g ? (Sa.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), a.throwIfAborted(), m ?? c.imported) : (a.throwIfAborted(), !1 !== g && null);
			}(e, t, n, a.signal, i);
			return a.signal.throwIfAborted(), !1 !== o ? o : (r < 2 && s(r + 1, a.signal).catch((i) => Ta(e, t, n, i, a.signal)), null);
		}
	});
	return s(0);
}
function Ba(e, t) {
	return $({
		kind: k.GGIR_RECOVERY,
		key: k.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const a = () => !t.signal.aborted && e.isOpen() && T() === e;
			try {
				if (!a()) return;
				const s = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: r } = await import("./local-data-source-DcxTxWmN.js").then((e) => e.n);
				for (const o of s) {
					if (t.signal.throwIfAborted(), !a()) return;
					try {
						const [s] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), r(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), u = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...s.map((e) => e.scorer)]);
						u.delete(Y);
						for (const r of u) {
							if (!a()) return;
							try {
								await Ca(o, r, e, t.signal, Na(o, r, e));
							} catch (i) {
								n = !0, Ta(o, r, e, i, t.signal);
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
				const i = Object.values(I.getState().jobs).filter((t) => S(t) && t.workspaceId === e.name && t.kind === k.GGIR_RECOMPUTE && t.status === x.FAILED);
				for (const t of i) {
					const i = t.key.slice(k.GGIR_RECOMPUTE.length + 1);
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
							a() && (0 === n || 0 === i && 0 === s) && (I.getState().dismiss(t.id), Sa.dispatchEvent(new CustomEvent("updated", { detail: {
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
async function Fa(e, t, n = [], a, i) {
	const s = a ?? await $a(e.imported, t, n, i);
	let r;
	if (i?.throwIfAborted(), s.length > 0 && e.ms2 && e.ms3) {
		const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), a = t(e.ms3), o = t(e.ms4), l = t(e.ms5), c = t(e.sleeplogRData);
		r = ae(await E(i, (t) => t.reviewGgirResults({
			part1: new Uint8Array(e.part1),
			configCsv: e.configCsv,
			recordingId: u(e.recordingFile),
			...n ? { ms2: n } : {},
			...a ? { ms3: a } : {},
			...o ? { ms4: o } : {},
			...l ? { ms5: l } : {},
			...c ? { sleeplogRData: c } : {},
			...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
			edits: s,
			...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
			...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
			crossCheck: !1
		})));
	}
	i?.throwIfAborted();
	const o = Object.getOwnPropertyDescriptors(e);
	return delete o.current, Reflect.deleteProperty(o, "edits"), Object.defineProperties({
		...r ? { current: r } : {},
		edits: s
	}, o);
}
const Pa = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], Wa = [
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
], ja = [
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
], Ua = [
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
], Ga = {
	files: [
		...Pa,
		"ggirTimezone",
		"recording",
		"ggirClockSteps"
	],
	markers: Wa,
	activityDays: ja,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: Ua
}, za = {
	files: [...Pa, "ggirClockSteps"],
	markers: Wa,
	activityDays: ja,
	ggirResultsBundles: Ua
}, Ha = {
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
}, qa = {
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
	sleep: Ga,
	nonwear: Ga,
	summary: Ga,
	wide: Ga,
	circadian: {
		files: Pa,
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
	ggirReport: za,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: Wa,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: Pa,
		markers: Wa,
		actiwareFileData: [
			"fileId",
			"actiwareIntervals",
			"actiwareStatistics",
			"actiwareStatisticsNeedsRecompute"
		],
		actiwareStatisticsInputs: ["fileId", "input"]
	},
	actiwareSleepWake: {
		files: Pa,
		markers: Wa,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: Ha,
	audit: qa,
	ggirResults: {
		...Ha,
		...Ga,
		...za,
		auditLog: qa.auditLog,
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
			N
		]
	}
}, Ka = /* @__PURE__ */ new WeakMap(), Ja = /* @__PURE__ */ new WeakMap();
function Ya(e) {
	if (!e || "object" != typeof e) return e;
	const t = Ja.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return function(e, t, n, a) {
			for (let i = 0; i < n.byteLength;) {
				const t = n.subarray(i, i + Qt), s = e.read(t, { at: a + i });
				if (!Number.isInteger(s) || s <= 0 || s > t.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
				i += s;
			}
		}(t.store, 0, e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(Ya) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ya(t)])) : structuredClone(e);
}
function Za(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(Za), Object.freeze(e)), e;
}
function Qa(e) {
	return function(e) {
		const t = Object.freeze({ files: Za((e.files ?? []).map((e) => Object.fromEntries(Pa.map((t) => [t, Ya(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
		return Ka.set(t, e), t;
	}(e);
}
var Xa = class extends Error {};
function ei(e, t, n) {
	const a = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new Xa(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (a(t), Reflect.get(e, t, n)),
		has: (e, t) => (a(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (a(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function ti(e, t, n = []) {
	const a = Ka.get(e);
	if (!a) throw new Xa("Export requires a captured input snapshot");
	const i = Object.entries(Va).find(([, e]) => e === t)?.[0];
	if (!i) throw new Xa("Export producer has no registered input declaration");
	const s = {};
	for (const [r, o] of Object.entries(t)) {
		const e = a[r].filter((e) => !n.length || "studySettings" === r || n.includes("files" === r ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const a of o.filter((e) => e in t)) Object.defineProperty(n, a, {
				enumerable: !0,
				get: () => Za(Ya(t[a]))
			});
			return ei(n, o, `${i}: undeclared field ${r}.`);
		});
		Object.assign(s, { [r]: Object.freeze(e) });
	}
	return ei(s, Object.keys(t), `${i}: undeclared table `);
}
function ni(e, t, n) {
	const a = /* @__PURE__ */ new Map();
	for (const i of e.markers) {
		if (i.fileId !== t || i.username !== n) continue;
		const e = Z(i), s = a.get(i.date) ?? [];
		s.push(e), a.set(i.date, s);
	}
	return a;
}
function ai(e, t, n) {
	return new Map([...ni(e, t, n)].flatMap(([e, t]) => {
		const n = H(t.filter(g));
		return n ? [[e, n]] : [];
	}));
}
const ii = /* @__PURE__ */ new WeakMap();
function si(e, t, n, a) {
	let i = ii.get(e);
	i || (i = /* @__PURE__ */ new Map(), ii.set(e, i));
	const s = JSON.stringify([t, n]);
	let r = i.get(s);
	return r || (i.clear(), r = async function(e, t, n, a) {
		const i = ti(e, Va.ggirReport, [t]), s = i.files.find((e) => e.id === t), r = i.ggirResultsBundles.find((e) => e.fileId === t), o = ni(i, t, n), l = r ? await Ea(t, r.imported, o, s.ggirClockSteps, a) : o, u = new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), c = r ? await Fa(r, u, s.ggirClockSteps, void 0, a) : void 0;
		return {
			markersByAlgo: l,
			selected: u,
			bundle: c ? await ri(c, a) : void 0
		};
	}(e, t, n, a), i.set(s, r), r.catch(() => {
		i.get(s) === r && i.delete(s);
	})), r;
}
async function ri(e, t) {
	const { ggirCell: n, ggirNum: a } = await import("./ggir-results-types-WB8axvb-.js").then((e) => e.i), i = e.part2Reports?.["part2_daysummary.csv"], s = e.cleanedNightsCsv ? await O(t).readGgirReportCsv(e.cleanedNightsCsv, e.configCsv) : void 0, r = /* @__PURE__ */ new Map();
	if (i) for (let u = 0; u < i.rows; u++) {
		const e = n(i, f.ggir_id.header, u), t = cn(n(i, f.ggir_calendar_date.header, u));
		if (null == e || !t) continue;
		const a = JSON.stringify([String(e), t]);
		r.set(a, r.has(a) ? null : u);
	}
	const o = dn(e.imported, "nights"), l = async (e) => {
		const l = e.nights, u = await Promise.all(Array.from({ length: l.rows }, async (u, c) => {
			const d = n(l, f.ggir_id.header, c), m = r.get(JSON.stringify([null == d ? null : String(d), o(l, c, !1)])), p = i && null != m ? n(i, f.ggir_day_valid_hours.header, m) : null, g = i && null != m ? n(i, f.ggir_day_hours.header, m) : null, h = i && null != m ? a(i, f.ggir_day_valid_hours.header, m) : null, w = i && null != m ? a(i, f.ggir_day_hours.header, m) : null, y = null != h && null != w ? await O(t).ggirDayValidFraction(h, w) : null, _ = a(l, f.ggir_night.header, c), v = Array.from({ length: e.days.rows }, (e, t) => t).find((t) => "WW" === n(e.days, "window", t) && a(e.days, "night_number", t) === _), M = s ? Array.from({ length: s.rows }, (e, t) => t).find((e) => String(n(s, f.ggir_id.header, e)) === String(d) && a(s, f.ggir_night.header, e) === _) : void 0, b = {
				ggir_nonwear_perc_spt: e.nightRecomputed[c] ? void 0 === v ? null : n(e.days, f.ggir_nonwear_perc_spt.header, v) : l.columns.includes(f.ggir_nonwear_perc_spt.header) ? n(l, f.ggir_nonwear_perc_spt.header, c) : s?.columns.includes(f.ggir_nonwear_perc_spt.header) && void 0 !== M ? n(s, f.ggir_nonwear_perc_spt.header, M) : void 0 === v ? null : n(e.days, f.ggir_nonwear_perc_spt.header, v),
				ggir_day_valid_hours: p,
				ggir_day_hours: g,
				ggir_day_valid_fraction: y ?? null
			}, k = (i ? null === m ? "duplicate_part2_day" : void 0 === m ? "no_matching_part2_day" : null : "source_reported_missing") ?? "source_reported_missing";
			return {
				values: b,
				reasons: {
					ggir_day_valid_hours: null == h ? k : null,
					ggir_day_hours: null == w ? k : null,
					ggir_day_valid_fraction: null != y ? null : null != w && w <= 0 ? "not_applicable_to_row" : k
				}
			};
		})), c = v.ggir_review_night_extension, d = [.../* @__PURE__ */ new Set([
			...l.columns,
			...c.map((e) => f[e].header),
			...c.map((e) => f[e].header + "_missing_reason")
		])], m = d.map((e) => {
			const t = c.find((t) => f[t].header + "_missing_reason" === e);
			if (t) return u.map((e) => e.reasons[t] ?? null);
			const n = c.find((t) => f[t].header === e);
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
function oi(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
async function li(n, a, i, { db: s, signal: o }) {
	o?.throwIfAborted();
	const u = n.files.filter((e) => a.includes(e.id)), c = u.map((e) => e.id), d = /* @__PURE__ */ new Map();
	let m = !1;
	try {
		const e = await function(e, { fileIds: t, dateRange: n, signal: a }) {
			const i = ti(e, Va.circadian, t);
			return async function(e, t, { dateRange: n, signal: a }) {
				const i = O(a), s = [];
				let o = 0;
				for (const l of e) {
					if (!l.id) continue;
					a?.throwIfAborted();
					const e = await t(l.id), u = [];
					for (const t of e.values()) {
						if (a?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
						o += 1;
						const e = st(l.id, t);
						e && u.push(e);
					}
					if (0 === u.length) continue;
					const { request: c, transfer: d } = it(u.map((e) => e.wire)), m = await i.computeCircadian(r(c, d));
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
			}(t.length > 0 ? i.files.filter((e) => null != e.id && t.includes(e.id)) : i.files, (e) => oi(i, e), {
				dateRange: n,
				signal: a
			});
		}(n, {
			fileIds: c,
			dateRange: i.dateRange,
			signal: o
		});
		for (const t of e.daySummaries) d.set(`${t.fileId}|${t.date}`, {
			l5Hour: t.l5Hour,
			m10Hour: t.m10Hour
		});
	} catch (h) {
		if (h instanceof Xa) throw h;
		if (o?.throwIfAborted(), m = !0, h instanceof DOMException && "AbortError" === h.name) throw h;
	}
	const p = await ui(u[0].filename, "computing its sleep rows", () => async function(n, a, i, s, r, o, u) {
		const c = r && r.trim().length > 0 ? r.trim() : null, d = ti(o, Va.sleep, n), m = d.files, p = dt(d.studySettings[0]?.extraSettings), g = (n.length > 0 ? m.filter((e) => null != e.id && n.includes(e.id)) : [...m]).sort((e, t) => e.filename.localeCompare(t.filename)), [h, w] = i ?? ["", ""], y = [], _ = [], v = [], b = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), S = async () => {
			for (const [e, t] of b) k.set(e, await Bn(e, t, y, u));
			b.clear();
		}, x = /* @__PURE__ */ new Map(), I = (e) => {
			const t = JSON.stringify(e);
			let n = x.get(t);
			return n || (n = O(u).exportNapAggregate(e), x.set(t, n)), n;
		}, A = await Promise.all(g.map((e) => si(o, e.id, a, u)));
		for (const [T, R] of g.entries()) {
			if (u?.throwIfAborted(), T > 0 && g[T - 1].filename !== R.filename && await S(), !R.id) continue;
			const n = oi(d, R.id), { bundle: a, markersByAlgo: r } = A[T], o = a?.edits ?? [], m = a ? re(a.imported) : [], { zone: k } = await ht(R, p, u), x = [.../* @__PURE__ */ new Set([...R.availableDates, ...m.map((e) => e.nightDate)])].sort(), N = i ? x.filter((e) => e >= h && e <= w) : x, E = F(n.values());
			for (const i of N) {
				u?.throwIfAborted();
				const d = r.get(i);
				if (d && 0 !== d.length) for (const r of d) {
					if (!r.isInvalidNight && 0 === r.sleepMarkers.length && 0 === r.nonwearMarkers.length) continue;
					const d = R.participantId ?? null, p = R.id, g = r.algorithm ?? null, h = r.username ?? null, w = r.needsConsensus, S = r.notes, x = n.get(i), A = await M(i, void 0, O(u)), N = n.get(A), T = {
						fileId: p,
						filename: R.filename,
						participantId: d,
						studyDate: i,
						algorithm: g,
						scoredBy: h,
						needsConsensus: w,
						notes: S,
						meanTemperature: null,
						meanWhiteLight: null,
						meanRedLight: null,
						meanGreenLight: null,
						meanBlueLight: null,
						detectionRule: r.detectionRule ?? null,
						periodGuider: r.periodGuider ?? null,
						...On(r.sleepPeriodDetectionConfig),
						algorithmVersion: r.algorithmVersion ?? null,
						verificationStatus: null,
						studyId: c,
						dstTransition: await _e(k, i, void 0, O(u))
					}, $ = await I(r.sleepMarkers.filter((e) => e.markerType === l.NAP).map((e) => ({
						start: e.onsetTimestamp,
						end: e.offsetTimestamp
					}))), L = s?.get(`${String(p)}|${i}`), D = {
						l5Hour: L?.l5Hour ?? null,
						m10Hour: L?.m10Hour ?? null,
						napCount: $.napCount,
						totalNapMinutes: $.napCount > 0 ? $.totalNapMinutes : null
					}, C = r.nonwearMarkers.map((e) => ({
						start: e.startTimestamp,
						end: e.endTimestamp
					})), B = E(g), F = lt(x, B), P = `${R.filename}\0${d ?? ""}\0${T.algorithm ?? ""}\0${T.detectionRule ?? ""}`, j = b.get(P) ?? [];
					j.push({
						date: i,
						epochLengthSeconds: R.epochLengthSeconds || 60,
						timestamps: F.timestamps,
						states: F.algorithmResults,
						stale: "stale" === B.status
					}), b.set(P, j);
					const U = x?.temperature ? new Float64Array(x.temperature) : null, G = W(x).timestamps, z = N?.temperature ? new Float64Array(N.temperature) : null, H = W(N).timestamps, q = await xt(n, i, B, { signal: u }), V = async (e, t, n) => {
						if (!t || !n) return null;
						const a = (e) => e ? new Float64Array(e) : null;
						return Rn([[a(x?.[e]), G], [a(N?.[e]), H]], t, n, u);
					}, K = (e, t) => Rn([[U, G], [z, H]], e, t, u), J = async (n, s) => {
						let c = null;
						const d = m.find((e) => e.nightDate === i), p = a && d && n.markerType === l.MAIN_SLEEP && "invalid" !== ee(d, r).kind, g = d && o.some((e) => e.night === d.night), h = Ln(null), w = {};
						let y = "not_applicable_to_row";
						if (!p && n.onsetTimestamp && n.offsetTimestamp) {
							const { timestamps: e, algorithmResults: t, activity: a, scoresStale: i } = q;
							if (null !== i && 0 === v.length && v.push({
								component: "metric_computation",
								code: "unavailable",
								message: i
							}), y = null !== i ? "scores_from_another_config" : null == t ? "no_scored_epochs" : null == a ? "channel_unavailable" : 0 === e.length ? "no_valid_epochs" : void 0, null != t && e.length > 0 && (null != a || W(x).ggir)) {
								const i = W(x).ggir ? W(x).epochSec : R.epochLengthSeconds || 60, s = await Cn(t, a, e, n.onsetTimestamp, n.offsetTimestamp, i, u);
								c = s.metrics, c || s.error || (y = "no_valid_epochs"), s.error && (y = "not_computed_for_export"), s.error && 0 === v.length && v.push({
									component: "metric_computation",
									code: "unavailable",
									message: "Metric computation failed for at least one selected period; those rows carry no numerics."
								});
							}
						}
						if (p) {
							y = "channel_unavailable";
							const n = g ? a.current?.nights : a.imported.nights, i = n ? t(n, f.ggir_night.header, d.night) : -1;
							for (const [t, a, s, r] of Dn) {
								const o = n ? e(n, f[a].header, i) : null;
								h[t] = null == o ? null : o * r, w[s] = null == o ? g ? "not_computed_for_export" : "source_reported_missing" : void 0;
							}
						}
						(p || c && !("averageAwakeningLengthMinutes" in c)) && (w.average_awakening_length_minutes = "not_computed_for_export");
						const _ = await O(u).exportPeriodFigures(n.onsetTimestamp, n.offsetTimestamp, C), M = Boolean(n.onsetTimestamp && n.offsetTimestamp), b = {
							...T,
							...D,
							periodIndex: n.markerIndex,
							markerType: n.markerType,
							onsetTimestamp: n.onsetTimestamp,
							offsetTimestamp: n.offsetTimestamp,
							...p ? h : Ln(c),
							metricMissingReason: y,
							isInvalidNight: s,
							meanTemperature: n.onsetTimestamp && n.offsetTimestamp ? await K(n.onsetTimestamp, n.offsetTimestamp) : null,
							meanWhiteLight: await V("lux", n.onsetTimestamp, n.offsetTimestamp),
							meanRedLight: await V("redLight", n.onsetTimestamp, n.offsetTimestamp),
							meanGreenLight: await V("greenLight", n.onsetTimestamp, n.offsetTimestamp),
							meanBlueLight: await V("blueLight", n.onsetTimestamp, n.offsetTimestamp),
							sleepMidpointTimestamp: M ? _.midpointTimestamp : null,
							sleepMidpointHour: M ? _.midpointClockHour : null,
							validWearMinutes: _.validWearMinutes
						}, k = (e, t) => null != e ? void 0 : M ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
						return b.sensorMissingReasons = {
							mean_temperature_c: k(b.meanTemperature, Boolean(x?.temperature || N?.temperature)),
							mean_white_light_lux: k(b.meanWhiteLight, Boolean(x?.lux || N?.lux)),
							mean_red_light: k(b.meanRedLight, Boolean(x?.redLight || N?.redLight)),
							mean_green_light: k(b.meanGreenLight, Boolean(x?.greenLight || N?.greenLight)),
							mean_blue_light: k(b.meanBlueLight, Boolean(x?.blueLight || N?.blueLight))
						}, b.derivedMissingReasons = {
							...w,
							l5_hour: null == b.l5Hour ? L ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							m10_hour: null == b.m10Hour ? L ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							sleep_midpoint_time: null == b.sleepMidpointTimestamp ? M ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							sleep_midpoint_hour: null == b.sleepMidpointHour ? M ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							valid_wear_minutes: null == b.validWearMinutes ? M ? "no_valid_epochs" : "not_applicable_to_row" : void 0
						}, b;
					};
					if (r.isInvalidNight) {
						y.push({
							...T,
							...D,
							periodIndex: null,
							markerType: En,
							onsetTimestamp: null,
							offsetTimestamp: null,
							...Ln(null),
							isInvalidNight: !0,
							sleepMidpointTimestamp: null,
							sleepMidpointHour: null,
							validWearMinutes: null
						});
						for (const e of r.sleepMarkers) y.push(await J(e, !0));
					} else for (const e of r.sleepMarkers) y.push(await J(e, !1));
					for (const e of r.nonwearMarkers) _.push({
						...T,
						...D,
						periodIndex: e.markerIndex ?? 0,
						markerType: $n,
						onsetTimestamp: e.startTimestamp,
						offsetTimestamp: e.endTimestamp,
						...Ln(null),
						isInvalidNight: !1,
						sleepMidpointTimestamp: null,
						sleepMidpointHour: null,
						validWearMinutes: null
					});
				}
			}
		}
		await S(), y.sort(Fn), _.sort(Fn);
		const N = await async function(e, t) {
			const n = e.filter((e) => e.markerType === l.MAIN_SLEEP), a = /* @__PURE__ */ new Map();
			for (const o of n) {
				const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = a.get(e);
				t ? t.push(o) : a.set(e, [o]);
			}
			const i = [...a], s = await O(t).summarizeExportGroups(i.map(([, e]) => e.map((e) => ({
				study_date: e.studyDate,
				total_nap_minutes: e.totalNapMinutes,
				values: Pn.map(([, t]) => e[t])
			})))), r = i.map(([e, t], n) => {
				const [a, i, r, o] = e.split("\0"), l = s[n], u = Object.fromEntries(Pn.map(([e], t) => [e, l.means[t] ?? null]));
				return {
					filename: a,
					participantId: i,
					algorithm: r,
					detectionRule: o,
					nNights: l.nNights,
					...u,
					meanTemperatureMissingReason: null == u.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
					metricMissingReasons: Object.fromEntries(Pn.map(([e, n]) => {
						const a = Wn[e], i = Dn.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : a), s = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[i] ?? e.metricMissingReason).find(Boolean);
						return [a, null == u[e] ? s : void 0];
					})),
					sleepRegularityIndex: null,
					meanTotalNapMinutes: l.meanTotalNapMinutes,
					studyId: t[0]?.studyId ?? null
				};
			});
			return r.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), r;
		}(y, u);
		for (const e of N) {
			const t = `${e.filename}\0${e.participantId}\0${e.algorithm}\0${e.detectionRule}`, n = k.get(t);
			e.sleepRegularityIndex = n?.sri ?? null, e.sleepRegularityMissingReason = n?.sriMissingReason ?? (n ? void 0 : "not_computed_for_export");
		}
		return {
			sleepRows: y,
			nonwearRows: _,
			summaryRows: N,
			degradations: v
		};
	}(c, i.username, i.dateRange, d, i.studyId, n, o)), g = await ui(u[0].filename, "drawing its visual report", async () => {
		const e = [];
		for (const t of u) e.push(await Tn({
			...i,
			snapshot: n
		}, t, o));
		return e;
	});
	return {
		part: p,
		physicalActivityRows: await ba(c, i.dateRange, {
			username: i.username,
			cutpointOverrides: i.physicalActivity.cutpointOverrides,
			maskPolicy: i.physicalActivity.maskPolicy,
			choiAxis: i.physicalActivity.choiAxis,
			exportedAt: i.exportedAt,
			...o ? { signal: o } : {}
		}, s),
		eventMarkerRows: await Un(c, i.dateRange, n, i.username, o),
		circadianDegraded: m,
		reports: g
	};
}
async function ui(e, t, n) {
	try {
		return await n();
	} catch (a) {
		if (a instanceof DOMException && "AbortError" === a.name) throw a;
		throw new Zt(e, t, a);
	}
}
let ci;
i({
	async group(e, t, n, a) {
		ci ??= new p(e);
		try {
			return { result: await li(Qa(n), t, a, { db: ci }) };
		} catch (i) {
			if (i instanceof Zt) return { failure: {
				file: i.file,
				step: i.step
			} };
			throw i;
		}
	},
	deflate(e, t) {
		const n = function(e, t) {
			if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
			const n = [], a = new tt(t?.byteLength ? {
				level: 1,
				dictionary: t
			} : { level: 1 }, (e) => {
				n.push(e);
			});
			a.push(e, !1), a.flush(!1);
			const i = a.s.r ?? 0;
			if (!Number.isInteger(i) || i < 0 || i > 2047) throw new Error("ZIP compression state is unreadable.");
			const s = (7 & i) > 5 ? 2 : 1, r = new Uint8Array(s + 4);
			return r[0] = i >> 3, r[s + 2] = 255, r[s + 3] = 255, n.push(r), V(n);
		}(e, t);
		return r(n, [n.buffer]);
	}
});
export { st as C, it as S, Mt as _, sa as a, ht as b, Xn as c, Jn as d, Zn as f, It as g, Vn as h, aa as i, Yn as l, Gn as m, Da as n, ea as o, Hn as p, fa as r, ta as s, ka as t, Kn as u, bt as v, mt as x, kt as y };
