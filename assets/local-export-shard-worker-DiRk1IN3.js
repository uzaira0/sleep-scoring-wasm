import { At as e, F as t, Ft as n, G as i, It as r, K as s, Mn as a, W as o, a as l, h as c, kt as u, l as d, nt as m, q as p } from "./schema-CuSEBD8u.js";
import { a as g, r as f, s as h } from "./workers-BSP07cYu.js";
import { A as _, G as w, H as v, K as y, W as b, at as k, lt as T, p as M, t as I } from "./workspace-db-DC1JGCSh.js";
import { l as S } from "./content-hash-CZ-UAlQR.js";
import { a as A, d as x, g as R, l as N, n as E, t as $ } from "./background-jobs-BSNZ1wOR.js";
import { A as O, D as C, E as D, O as j, _ as F, f as L, j as P, k as B } from "./nonwear-display-slots-Bdtse7dF.js";
import { a as W } from "./project-revision-L_JZqL5Z.js";
import { $t as z, G, Ht as H, Kt as U, P as V, Qt as K, an as q, k as J, kt as Y, qt as Z, x as Q } from "./store-D44nsaQj.js";
import { P as X, U as ee, d as te, h as ne } from "./night-session-registry-B15AUx0h.js";
import { F as ie, L as re, _ as se, a as ae, d as oe, m as le, n as ce, p as ue, r as de, t as me, z as pe } from "./per-source-defaults-BCxPLiaZ.js";
import { _ as ge, c as fe, d as he, f as _e, i as we, l as ve, r as ye } from "./ggir-results-import-QUf1SQPt.js";
import { B as be, E as ke, I as Te, L as Me, N as Ie, R as Se, c as Ae } from "./local-nonwear-unified-b6rWRkUf.js";
import { r as xe } from "./physical-activity-cutpoint-presets-X7xGEiL5.js";
import { h as Re, m as Ne, v as Ee } from "./diary-local-import-contract-C0t3dRw5.js";
import { n as $e, r as Oe, t as Ce } from "./ggir-results-types-BFP2YJll.js";
var De = Uint8Array, je = Uint16Array, Fe = Int32Array, Le = new De([
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
]), Pe = new De([
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
]), Be = new De([
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
]), We = function(e, t) {
	for (var n = new je(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
	var r = new Fe(n[30]);
	for (i = 1; i < 30; ++i) for (var s = n[i]; s < n[i + 1]; ++s) r[s] = s - n[i] << 5 | i;
	return {
		b: n,
		r
	};
}, ze = We(Le, 2), Ge = ze.b, He = ze.r;
Ge[28] = 258, He[258] = 28;
for (var Ue = We(Pe, 0), Ve = (Ue.b, Ue.r), Ke = new je(32768), qe = 0; qe < 32768; ++qe) {
	var Je = (43690 & qe) >> 1 | (21845 & qe) << 1;
	Je = (61680 & (Je = (52428 & Je) >> 2 | (13107 & Je) << 2)) >> 4 | (3855 & Je) << 4, Ke[qe] = ((65280 & Je) >> 8 | (255 & Je) << 8) >> 1;
}
var Ye = function(e, t, n) {
	for (var i = e.length, r = 0, s = new je(t); r < i; ++r) e[r] && ++s[e[r] - 1];
	var a, o = new je(t);
	for (r = 1; r < t; ++r) o[r] = o[r - 1] + s[r - 1] << 1;
	if (n) {
		a = new je(1 << t);
		var l = 15 - t;
		for (r = 0; r < i; ++r) if (e[r]) for (var c = r << 4 | e[r], u = t - e[r], d = o[e[r] - 1]++ << u, m = d | (1 << u) - 1; d <= m; ++d) a[Ke[d] >> l] = c;
	} else for (a = new je(i), r = 0; r < i; ++r) e[r] && (a[r] = Ke[o[e[r] - 1]++] >> 15 - e[r]);
	return a;
}, Ze = new De(288);
for (qe = 0; qe < 144; ++qe) Ze[qe] = 8;
for (qe = 144; qe < 256; ++qe) Ze[qe] = 9;
for (qe = 256; qe < 280; ++qe) Ze[qe] = 7;
for (qe = 280; qe < 288; ++qe) Ze[qe] = 8;
var Qe = new De(32);
for (qe = 0; qe < 32; ++qe) Qe[qe] = 5;
var Xe = Ye(Ze, 9, 0), et = Ye(Qe, 5, 0), tt = function(e) {
	return (e + 7) / 8 | 0;
}, nt = [
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
], it = function(e, t, n) {
	var i = new Error(t || nt[e]);
	if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, it), !n) throw i;
	return i;
}, rt = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8;
}, st = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, at = function(e, t) {
	for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
		s: i,
		f: e[i]
	});
	var r = n.length, s = n.slice();
	if (!r) return {
		t: pt,
		l: 0
	};
	if (1 == r) {
		var a = new De(n[0].s + 1);
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
	var p = new je(m + 1), g = ot(n[u - 1], p, 0);
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
		t: new De(p),
		l: g
	};
}, ot = function(e, t, n) {
	return -1 == e.s ? Math.max(ot(e.l, t, n + 1), ot(e.r, t, n + 1)) : t[e.s] = n;
}, lt = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new je(++t), i = 0, r = e[0], s = 1, a = function(e) {
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
}, ct = function(e, t) {
	for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
	return n;
}, ut = function(e, t, n) {
	var i = n.length, r = tt(t + 2);
	e[r] = 255 & i, e[r + 1] = i >> 8, e[r + 2] = 255 ^ e[r], e[r + 3] = 255 ^ e[r + 1];
	for (var s = 0; s < i; ++s) e[r + s + 4] = n[s];
	return 8 * (r + 4 + i);
}, dt = function(e, t, n, i, r, s, a, o, l, c, u) {
	rt(t, u++, n), ++r[256];
	for (var d = at(r, 15), m = d.t, p = d.l, g = at(s, 15), f = g.t, h = g.l, _ = lt(m), w = _.c, v = _.n, y = lt(f), b = y.c, k = y.n, T = new je(19), M = 0; M < w.length; ++M) ++T[31 & w[M]];
	for (M = 0; M < b.length; ++M) ++T[31 & b[M]];
	for (var I = at(T, 7), S = I.t, A = I.l, x = 19; x > 4 && !S[Be[x - 1]]; --x);
	var R, N, E, $, O = c + 5 << 3, C = ct(r, Ze) + ct(s, Qe) + a, D = ct(r, m) + ct(s, f) + a + 14 + 3 * x + ct(T, S) + 2 * T[16] + 3 * T[17] + 7 * T[18];
	if (l >= 0 && O <= C && O <= D) return ut(t, u, e.subarray(l, l + c));
	if (rt(t, u, 1 + (D < C)), u += 2, D < C) {
		R = Ye(m, p, 0), N = m, E = Ye(f, h, 0), $ = f;
		var j = Ye(S, A, 0);
		for (rt(t, u, v - 257), rt(t, u + 5, k - 1), rt(t, u + 10, x - 4), u += 14, M = 0; M < x; ++M) rt(t, u + 3 * M, S[Be[M]]);
		u += 3 * x;
		for (var F = [w, b], L = 0; L < 2; ++L) {
			var P = F[L];
			for (M = 0; M < P.length; ++M) {
				var B = 31 & P[M];
				rt(t, u, j[B]), u += S[B], B > 15 && (rt(t, u, P[M] >> 5 & 127), u += P[M] >> 12);
			}
		}
	} else R = Xe, N = Ze, E = et, $ = Qe;
	for (M = 0; M < o; ++M) {
		var W = i[M];
		if (W > 255) {
			st(t, u, R[257 + (B = W >> 18 & 31)]), u += N[B + 257], B > 7 && (rt(t, u, W >> 23 & 31), u += Le[B]);
			var z = 31 & W;
			st(t, u, E[z]), u += $[z], z > 3 && (st(t, u, W >> 5 & 8191), u += Pe[z]);
		} else st(t, u, R[W]), u += N[W];
	}
	return st(t, u, R[256]), u + N[256];
}, mt = new Fe([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), pt = new De(0), gt = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new De(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, i, r) {
			if (!r && (r = { l: 1 }, t.dictionary)) {
				var s = t.dictionary.subarray(-32768), a = new De(s.length + e.length);
				a.set(s), a.set(e, s.length), e = a, r.w = s.length;
			}
			return function(e, t, n, i, r, s) {
				var a = s.z || e.length, o = new De(i + a + 5 * (1 + Math.ceil(a / 7e3)) + r), l = o.subarray(i, o.length - r), c = s.l, u = 7 & (s.r || 0);
				if (t) {
					u && (l[0] = s.r >> 3);
					for (var d = mt[t - 1], m = d >> 13, p = 8191 & d, g = (1 << n) - 1, f = s.p || new je(32768), h = s.h || new je(g + 1), _ = Math.ceil(n / 3), w = 2 * _, v = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, y = new Fe(25e3), b = new je(288), k = new je(32), T = 0, M = 0, I = s.i || 0, S = 0, A = s.w || 0, x = 0; I + 2 < a; ++I) {
						var R = v(I), N = 32767 & I, E = h[R];
						if (f[N] = E, h[R] = N, A <= I) {
							var $ = a - I;
							if ((T > 7e3 || S > 24576) && ($ > 423 || !c)) {
								u = dt(e, l, 0, y, b, k, M, S, x, I - x, u), S = T = M = 0, x = I;
								for (var O = 0; O < 286; ++O) b[O] = 0;
								for (O = 0; O < 30; ++O) k[O] = 0;
							}
							var C = 2, D = 0, j = p, F = N - E & 32767;
							if ($ > 2 && R == v(I - F)) for (var L = Math.min(m, $) - 1, P = Math.min(32767, I), B = Math.min(258, $); F <= P && --j && N != E;) {
								if (e[I + C] == e[I + C - F]) {
									for (var W = 0; W < B && e[I + W] == e[I + W - F]; ++W);
									if (W > C) {
										if (C = W, D = F, W > L) break;
										var z = Math.min(F, W - 2), G = 0;
										for (O = 0; O < z; ++O) {
											var H = I - F + O & 32767, U = H - f[H] & 32767;
											U > G && (G = U, E = H);
										}
									}
								}
								F += (N = E) - (E = f[N]) & 32767;
							}
							if (D) {
								y[S++] = 268435456 | He[C] << 18 | Ve[D];
								var V = 31 & He[C], K = 31 & Ve[D];
								M += Le[V] + Pe[K], ++b[257 + V], ++k[K], A = I + C, ++T;
							} else y[S++] = e[I], ++b[e[I]];
						}
					}
					for (I = Math.max(I, A); I < a; ++I) y[S++] = e[I], ++b[e[I]];
					u = dt(e, l, c, y, b, k, M, S, x, I - x, u), c || (s.r = 7 & u | l[u / 8 | 0] << 3, u -= 7, s.h = h, s.p = f, s.i = I, s.w = A);
				} else {
					for (I = s.w || 0; I < a + c; I += 65535) {
						var q = I + 65535;
						q >= a && (l[u / 8 | 0] = c, q = a), u = ut(l, u + 1, e.subarray(I, q));
					}
					s.i = a;
				}
				return function(e, t, n) {
					return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new De(e.subarray(t, n));
				}(o, 0, i + tt(u) + r);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? r.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, 0, 0, r);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || it(5), this.s.l && it(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var i = new De(-32768 & n);
				i.set(this.b.subarray(0, this.s.z)), this.b = i;
			}
			var r = this.b.length - this.s.z;
			this.b.set(e.subarray(0, r), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(r), 32768), this.s.z = e.length - r + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = pt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || it(5), this.s.l && it(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new De(6);
			t[0] = this.s.r >> 3;
			var n = ut(t, this.s.r, pt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), ft = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	ft.decode(pt, { stream: !0 });
} catch (es) {}
function ht(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function _t(e) {
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
function wt(e, t) {
	const n = function(e) {
		const t = ht(e.ggirTimestamps), n = ht(e.ggirEnmo);
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
const vt = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], yt = ["under-series", "over-series"], bt = ["full-resolution-v1", "min-max-gap-envelope-v1"], kt = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function Tt(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function Mt(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? Tt(t, "expected an object") : e;
}
function It(e, t) {
	return Array.isArray(e) ? e : Tt(t, "expected an array");
}
function St(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : Tt(t, "expected a finite number");
}
function At(e, t) {
	const n = St(e, t);
	return n <= 0 ? Tt(t, "expected a positive number") : n;
}
function xt(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : Tt(t, "expected a safe integer");
}
function Rt(e, t) {
	const n = xt(e, t);
	return n < 0 ? Tt(t, "expected a non-negative safe integer") : n;
}
function Nt(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? Tt(t, "expected a boolean") : { [n]: e };
}
function Et(e, t) {
	return "string" != typeof e || 0 === e.length ? Tt(t, "expected a non-empty string") : e;
}
function $t(e, t) {
	return "string" == typeof e && vt.includes(e) ? e : Tt(t, "expected a supported tone");
}
function Ot(e, t) {
	return "string" == typeof e && yt.includes(e) ? e : Tt(t, "expected a supported phase");
}
function Ct(e, t) {
	const n = Mt(e, t), i = St(n.min, `${t}.min`), r = St(n.max, `${t}.max`);
	return r <= i || !Number.isFinite(r - i) ? Tt(t, "expected a finite ascending range") : {
		min: i,
		max: r
	};
}
function Dt(e, t) {
	const n = `series[${t}]`, i = Mt(e, n), r = It(i.points, `${n}.points`);
	let s = Number.NEGATIVE_INFINITY;
	const a = (e) => `${n}.points[${e}]`, o = r.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return Tt(a(t), "expected an object");
		const n = e, i = n.timestamp;
		if ("number" != typeof i || !Number.isFinite(i)) return Tt(`${a(t)}.timestamp`, "expected a finite number");
		if (i <= s) return Tt(`${a(t)}.timestamp`, "expected strictly ascending timestamps");
		s = i;
		const r = n.value;
		return null === r || "number" == typeof r && Number.isFinite(r) ? {
			timestamp: i,
			value: r
		} : Tt(`${a(t)}.value`, "expected a finite number");
	});
	return {
		tone: $t(i.tone, `${n}.tone`),
		strokeWidth: At(i.strokeWidth, `${n}.strokeWidth`),
		valueDomain: Ct(i.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function jt(e, t) {
	const n = `overlays[${t}]`, i = Mt(e, n), r = {
		phase: Ot(i.phase, `${n}.phase`),
		order: xt(i.order, `${n}.order`),
		tone: $t(i.tone, `${n}.tone`)
	};
	if ("interval" === i.kind) {
		const e = St(i.startTimestamp, `${n}.startTimestamp`), t = St(i.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? Tt(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...r,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === i.kind ? {
		kind: "threshold",
		...r,
		value: St(i.value, `${n}.value`),
		...Nt(i.draggable, `${n}.draggable`, "draggable"),
		...Nt(i.selected, `${n}.selected`, "selected"),
		...Nt(i.handle, `${n}.handle`, "handle"),
		...void 0 === i.label ? {} : { label: Et(i.label, `${n}.label`) }
	} : "instant" === i.kind ? {
		kind: "instant",
		...r,
		timestamp: St(i.timestamp, `${n}.timestamp`)
	} : Tt(`${n}.kind`, "expected interval, threshold, or instant");
}
function Ft(e, t, n) {
	const i = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(i) ? i : Tt("projection", "expected a finite pixel coordinate");
}
function Lt(e, t, n) {
	const i = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(i) ? i : Tt("projection", "expected a finite pixel coordinate");
}
function Pt(e) {
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
function Bt(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Wt(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, i = t.plotArea.height, r = kt[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const s = Bt(Ft(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), a = Bt(Ft(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${Pt(s)}" y="0" width="${Pt(Math.max(1, a - s))}" height="${Pt(i)}" fill="${r}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const s = Lt(e.value, t.valueDomain, i), a = !0 === e.selected, o = a ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${a ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${Pt(s)}" x2="${Pt(n)}" y2="${Pt(s)}" stroke="${r}" stroke-width="${a ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const s = Ft(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${Pt(s)}" y1="0" x2="${Pt(s)}" y2="${Pt(i)}" stroke="${r}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function zt(e) {
	const t = function(e) {
		const t = Mt(e, "scene");
		if (2 !== t.version) return Tt("version", "expected 2");
		const n = Mt(t.grid, "grid"), i = {
			strategy: (r = n.strategy, "string" == typeof r && bt.includes(r) ? r : Tt("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: Rt(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: Rt(n.renderedPointCount, "grid.renderedPointCount")
		};
		var r;
		if (i.renderedPointCount > i.sourcePointCount) return Tt("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === i.strategy && i.renderedPointCount !== i.sourcePointCount) return Tt("grid", "full-resolution strategy requires equal point counts");
		const s = Mt(t.size, "size"), a = {
			width: At(s.width, "size.width"),
			height: At(s.height, "size.height")
		}, o = Mt(t.plotArea, "plotArea"), l = {
			left: St(o.left, "plotArea.left"),
			top: St(o.top, "plotArea.top"),
			width: At(o.width, "plotArea.width"),
			height: At(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > a.width || l.top + l.height > a.height) return Tt("plotArea", "expected bounds contained by size");
		const c = Ct(t.viewport, "viewport"), u = Ct(t.valueDomain, "valueDomain"), d = It(t.series, "series").map(Dt);
		if (0 === d.length && 0 !== i.renderedPointCount) return Tt("grid.renderedPointCount", "expected zero when series is empty");
		const m = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let h = 0; h < d.length; h++) {
			const e = d[h]?.points ?? [];
			if (e.length !== i.renderedPointCount) return Tt(`series[${h}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return Tt(`series[${h}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const p = It(t.overlays, "overlays").map(jt), g = null === t.cursorTimestamp ? null : St(t.cursorTimestamp, "cursorTimestamp");
		let f = null;
		if (null !== t.selection) {
			const e = Mt(t.selection, "selection"), n = St(e.startTimestamp, "selection.startTimestamp"), i = St(e.endTimestamp, "selection.endTimestamp");
			if (i <= n) return Tt("selection", "expected a half-open ascending interval");
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
	}(e), n = Pt(t.size.width), i = Pt(t.size.height), r = Pt(t.plotArea.width), s = Pt(t.plotArea.height), a = Wt(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
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
			const t = Ft(o.timestamp, n.viewport, s);
			let l = a.get(o.value);
			void 0 === l && (l = Pt(Lt(o.value, e.valueDomain, n.plotArea.height)), a.set(o.value, l)), i += `${r ? "L" : "M"}${Pt(t)} ${l}`, r = !0;
		}
		return 0 === i.length ? "" : `<path data-series-index="${t}" d="${i}" fill="none" stroke="${kt[e.tone]}" stroke-width="${Pt(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = Wt(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${i}" viewBox="0 0 ${n} ${i}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${i}" fill="#ffffff"/><svg x="${Pt(t.plotArea.left)}" y="${Pt(t.plotArea.top)}" width="${r}" height="${s}" viewBox="0 0 ${r} ${s}" overflow="hidden"><rect x="0" y="0" width="${r}" height="${s}" fill="#ffffff"/>${a}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = Bt(Ft(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), i = Bt(Ft(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${Pt(n)}" y="0" width="${Pt(Math.max(1, i - n))}" height="${Pt(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = Ft(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${Pt(n)}" y1="0" x2="${Pt(n)}" y2="${Pt(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${Pt(t.plotArea.left)}" y="${Pt(t.plotArea.top)}" width="${r}" height="${s}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
async function Gt(e, t, n, i, r = 60, s, a) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == i || n >= i) return null;
	const o = new Uint8Array(e.length);
	for (let c = 0; c < e.length; c++) o[c] = 1 === e[c] ? 1 : 0;
	const l = await Ht(o, s && s.length === e.length ? s : new Float64Array(e.length), t, n, i, r, a);
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
async function Ht(e, t, n, i, r, s = 60, a) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == i || null == r || i >= r) return null;
	const o = await async function(e, t, n, i) {
		const r = await $(i).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === r.length ? {
			startIdx: r[0],
			endIdx: r[1]
		} : null;
	}(n, i, r, a);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, c = o.endIdx + 1, u = e instanceof Uint8Array ? e.slice(l, c) : new Uint8Array(e.slice(l, c)), d = t instanceof Float64Array ? t.slice(l, c) : Float64Array.from(t.slice(l, c)), m = await $(a).computeSleepMetrics(u, d, s), p = n[l] ?? 0, g = n[c - 1] ?? p, f = null != m.firstSleepEpochIdx ? n[l + m.firstSleepEpochIdx] ?? p : p, h = null != m.lastSleepEpochIdx ? n[l + m.lastSleepEpochIdx] ?? g : g;
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
function Ut(e, t) {
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
	const l = F(e, t);
	return {
		timestamps: r,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: a,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
const Vt = /* @__PURE__ */ new Map();
async function Kt(e, t, n = !1) {
	let i = Vt.get(e);
	const r = void 0 !== i;
	i || (i = $(t).resolveTimezone(e), Vt.set(e, i));
	try {
		return await i;
	} catch (it) {
		return Vt.get(e) === i && Vt.delete(e), t?.throwIfAborted(), r && !n ? Kt(e, t, !0) : void console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, it);
	}
}
function qt(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : Ne();
}
async function Jt(e) {
	try {
		return qt((await V(e))?.extraSettings);
	} catch (it) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", it), Ne();
	}
}
function Yt(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const Zt = {
	zone: null,
	reason: null
};
async function Qt(e, t, n) {
	const i = e.ggirTimezone?.trim();
	let r = null;
	if (i) {
		const e = await Kt(i, n);
		if (!e) return Zt;
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
	if (null === r) return pe(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : Zt;
	const s = await Kt(t, n);
	if (void 0 === s) return Zt;
	if ("iana" !== s?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const a = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== a && (await Ee(s.zone, a, $(n))).includes(r) ? {
		zone: s.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${Yt(r)} is not a ${s.zone} offset`
	};
}
function Xt(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [i, r] of e.entries()) t[i + 1] = t[i] + r.length;
	const n = new Float64Array(t[e.length]);
	for (const [i, r] of e.entries()) n.set(r, t[i]);
	return [n, t];
}
const en = Object.freeze({
	mean: NaN,
	sd: NaN,
	median: NaN,
	iqr: NaN,
	min: NaN,
	max: NaN,
	n: 0
}), tn = [
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
var nn = tn.map(() => en);
Object.fromEntries(tn.map(([e], t) => [e, nn[t]]));
const rn = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values(_).filter((e) => ![
		_.choi_2012,
		_.choi_2011,
		_.van_hees_2023,
		_.detach_nonwear
	].some((t) => t === e))
];
async function sn(e, t, n, i) {
	const r = void 0 === t ? n?.window[e] : 48 === t ? n?.view48[e] : void 0;
	if (r) return {
		start: r[0],
		end: r[1]
	};
	const s = await (i ?? f()).analysisWindowBounds(e, t);
	return s ? {
		start: s[0],
		end: s[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function an(e, t, n) {
	const i = e instanceof Float64Array ? e : Float64Array.from(e), [r, s] = await (n ?? f()).analysisWindowSlice(i, t);
	return {
		startIndex: r,
		endIndex: s
	};
}
async function on(e, t = f()) {
	const n = [...new Set(e)], i = await t.analysisDatesOf(Float64Array.from(n)), r = new Map(n.map((e, t) => [e, i[t] ?? ""]));
	return (e) => r.get(e) ?? "";
}
Object.fromEntries(Object.values(_).map((e) => [e, e === _.ggir_saved ? ie : Ie(e)]));
var ln = a({
	nightPeriodMetrics: () => dn,
	spanningSeries: () => un,
	storeNightPeriodMetrics: () => mn
});
function cn(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [i, r] of Object.entries(Ae(e, e.nonwearChoiAxis ?? ke()))) r && (n[t[i] ?? i] = new Uint8Array(r));
	return n;
}
async function un(e, t, n, i = {}) {
	const { signal: r, includeNonwearMasks: s = !1 } = i, a = e.get(t), o = Ut(a, n), l = s && a ? cn(a) : {}, c = e.get(i.nextDate ?? await L(t, void 0, $(r))), u = o.timestamps[o.timestamps.length - 1], d = c ? Ut(c, n) : null, m = d?.timestamps[0], p = void 0 !== c && null !== d && void 0 !== u && void 0 !== m && m > u, g = o.scoresStale ?? d?.scoresStale ?? null;
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
	const v = s ? cn(c) : {}, y = {};
	for (const b of rn) {
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
async function dn(e, t, n, i) {
	const { date: r, file: s, activityMap: a, verdict: o } = t, l = t.spanning ?? await un(a, r, o, { signal: i });
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
	for (const p of e.sleepMarkers) m.push(d && u.length > 0 && p.onsetTimestamp && p.offsetTimestamp ? await Ht(d, l.activity ?? new Float64Array(d.length), l.timestamps, p.onsetTimestamp, p.offsetTimestamp, s.epochLengthSeconds || 60, i) : null);
	if (void 0 !== e.id) try {
		await W(n, [n.markers], () => ne(e.id, {
			inputs: c,
			metrics: m
		}, n), i);
	} catch {
		i?.throwIfAborted();
	}
	return m;
}
async function mn(e, t, n, i) {
	const r = await n.files.get(e.fileId);
	if (!r) return;
	const s = /* @__PURE__ */ new Map();
	for (const a of [e.date, await L(e.date, void 0, $(i))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, a]).first();
		t && s.set(a, t);
	}
	await dn(e, {
		date: e.date,
		file: r,
		activityMap: s,
		verdict: t
	}, n, i);
}
var pn = class extends Error {
	name = "ExportSnapshotTooLargeError";
	reason = "snapshot_too_large";
}, gn = class e extends Error {
	file;
	step;
	reason;
	constructor(e, t, n, i = fn(n)) {
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
function fn(e) {
	return e instanceof gn || e instanceof pn ? e.reason : e instanceof Error ? e.name : typeof e;
}
const hn = 65536;
function _n(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function wn(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const vn = [
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
], yn = (new Set(vn.slice(16).map(([e]) => e)), "edit_recompute_requires_ms2_ms3"), bn = (j.invalid_night_row.markerTypeCell, new Set(vn.map(([, e]) => e)), C.ggir_sleepparam.header, C.ggir_guider_onset.header, C.ggir_guider_wakeup.header, C.ggir_guider_spt_duration.header, C.ggir_error_onset.header, C.ggir_error_wake.header, C.ggir_error_dur.header, C.ggir_fraction_night_invalid.header, C.ggir_duration_sib_wakinghours.header, C.ggir_number_sib_sleepperiod.header, C.ggir_number_sib_wakinghours.header, C.ggir_duration_sib_wakinghours_atleast15min.header, C.ggir_guider_onset_ts.header, C.ggir_guider_wakeup_ts.header, C.ggir_page.header, C.ggir_daysleeper.header, C.ggir_sleeplog_id.header, C.ggir_guider.header, C.ggir_longitudinal_axis.header, /* @__PURE__ */ new Set([
	C.ggir_sleep_duration_in_spt.header,
	C.ggir_waso.header,
	C.ggir_number_of_awakenings.header,
	C.ggir_sleeplatency.header,
	C.ggir_sleepefficiency.header
])), kn = /* @__PURE__ */ new Set([
	...bn,
	C.ggir_nonwear_perc_spt.header,
	C.ggir_sleeponset.header,
	C.ggir_wakeup.header,
	C.ggir_spt_duration.header,
	C.ggir_guider_onset.header,
	C.ggir_guider_wakeup.header,
	C.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	C.ggir_sleeponset_ts.header,
	C.ggir_wakeup_ts.header,
	C.ggir_guider_onset_ts.header,
	C.ggir_guider_wakeup_ts.header,
	C.ggir_daysleeper.header,
	C.ggir_cleaningcode.header,
	C.ggir_guider.header,
	C.ggir_error_onset.header,
	C.ggir_error_wake.header,
	C.ggir_error_dur.header,
	C.ggir_fraction_night_invalid.header,
	C.ggir_duration_sib_wakinghours.header,
	C.ggir_number_sib_sleepperiod.header,
	C.ggir_number_sib_wakinghours.header,
	C.ggir_duration_sib_wakinghours_atleast15min.header
]), Tn = /* @__PURE__ */ new Set([
	C.ggir_id.header,
	C.ggir_filename.header,
	C.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	C.ggir_sleep_regularity_index1.header,
	C.ggir_sri_fraction_valid.header,
	C.ggir_calendar_date.header,
	C.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	C.ggir_cleaningcode.header,
	C.ggir_guider.header,
	C.ggir_sleeplog_used.header,
	C.ggir_acc_available.header,
	C.ggir_daysleeper.header
]), Mn = (new Set(Object.values(C).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), new Set(Object.values(C).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), new Set(Object.values(O).map((e) => e.reviewSource)), [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
]), In = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : t(String(e)), Sn = (B.part4_night_review, B.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function An(e, t, n = "") {
	return B[e].replace("{report}", n.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${O[t].filenameSuffix}.csv`);
}
function xn(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return s(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? s(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function Rn(e, t) {
	const n = new Map(_e(e).map((e) => [e.night, e.nightDate]));
	return (e, i, r = !0) => {
		const s = e.columns.indexOf("nights" === t ? C.ggir_night.header : "night_number"), a = Number(e.values[s]?.[i]), o = n.get(a);
		if (r && o) return o;
		const l = e.values[e.columns.indexOf(C.ggir_calendar_date.header)]?.[i];
		return xn(l);
	};
}
async function Nn(e, n, i, r) {
	const s = "nights" === n ? C.ggir_night.header : "window_number", a = $(i), o = await Promise.all(e.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await ye(e.imported, e.edits, t.night, i)])))), l = (await Promise.all(e.map(async (e, t) => {
		const i = e.current ?? e.imported, r = (e) => "nights" === n ? e.nights : e.days, s = "nights" === n ? i.nightRecomputed : i.dayRecomputed, l = "nights" === n ? e.imported.nightChecks : e.imported.dayChecks, c = o[t].filter((e) => null != e[1]), u = Rn(e.imported, n), d = new Set(e.edits.map((e) => e.night)), m = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, p = /* @__PURE__ */ new Set();
		if ("days" === n && m) {
			const t = await Promise.all(_e(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), i = t.nightDate, r = n.onset < "12:00:00" ? await L(i, void 0, a) : i, s = n.wake <= n.onset ? await L(r, void 0, a) : r;
				return [Math.min(t.onsetMs, Date.parse(`${r}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${s}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: i.days.rows }, async (e, n) => {
				const r = Number(i.days.values[i.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(r)) return void p.add(n);
				const s = u(i.days, n, !1), o = i.days.values[i.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof o ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(o) : null;
				if (!s || !l) return;
				const c = Date.parse(`${s}T${l[1]}Z`), m = l[2] < l[1] ? await L(s, void 0, a) : s, g = Date.parse(`${m}T${l[2]}Z`);
				t.some(([e, t]) => c <= t && g >= e) && p.add(n);
			}));
		}
		return {
			source: O[Sn(e)].reviewSource,
			editedDayRows: p,
			editRecomputeUnavailable: m,
			editedNights: d,
			scoredDates: e.scoredDates,
			invalidDates: e.invalidDates,
			dateOf: u,
			table: r(i),
			ggir: r(e.imported),
			savedNights: e.imported.nights,
			recomputed: s,
			provenance: (e) => "nights" === n ? c.find(([t]) => t === e)?.[1] ?? "" : c.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(l.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === l.length) return null;
	const c = r ? r.filter((e) => !e.endsWith("_missing_reason") && !Mn.includes(e)) : [];
	for (const t of r ? [] : l) for (const e of t.table.columns) e.endsWith("_missing_reason") || c.includes(e) || c.push(e);
	const u = new Set("nights" === n ? D.ggir_review_night_extension.map((e) => C[e].header) : []), d = r ? c.filter((e) => r.includes(e + "_missing_reason")) : c.filter((e) => u.has(e) || l.some((e) => e.editRecomputeUnavailable || e.source === O.corrected.reviewSource)), m = [[
		...c.map(t),
		...Mn,
		...d.map((e) => t(e + "_missing_reason")),
		...Mn.map((e) => e + "_missing_reason")
	].join(",")], p = (e, t) => {
		const n = e.columns.indexOf(s);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: g, ggir: f, recomputed: h, provenance: _, checks: w, scoredDates: v, invalidDates: y, dateOf: b, editRecomputeUnavailable: k, editedNights: T, editedDayRows: M, savedNights: I, source: S } of l) {
		const e = I.columns.filter((e) => !kn.has(e)), i = e.filter((e) => {
			const t = I.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return I.values[t].some((e, t) => {
				const i = Number(I.values[I.columns.indexOf(C.ggir_night.header)]?.[t]), r = n.has(i) && !Object.is(n.get(i), e);
				return n.set(i, e), r;
			});
		}), r = /* @__PURE__ */ new Set(), s = (e) => Array.from({ length: f.rows }, (e, t) => t).find((t) => !r.has(t) && p(f, t) === p(g, e) && i.every((n) => Object.is(f.values[f.columns.indexOf(n)]?.[t] ?? null, g.values[g.columns.indexOf(n)]?.[e] ?? null))), a = new Set(c.filter((t) => "nights" === n ? kn.has(t) : !Tn.has(t) && !e.includes(t))), o = (i, r, s, o) => {
			const l = w.get(p(i, r));
			return [
				...c.map((t) => {
					if ("invalid" === s && ("nights" === n ? kn.has(t) : /sleep|spt|waso|wake|onset|guider/i.test(t) && !e.includes(t))) return "";
					const a = i.columns.indexOf(t);
					return a < 0 ? "" : In(i.values[a]?.[r]);
				}),
				s,
				l?.status ?? "",
				t((l?.reasons ?? []).join(";")),
				t((l?.diffs ?? []).map((e) => e.column).join(";")),
				t(o),
				...d.map((e) => "invalid" !== s || u.has(e) && e !== C.ggir_nonwear_perc_spt.header ? k && s === S && a.has(e) && ("days" === n ? M.has(r) : T.has(p(i, r))) ? yn : u.has(e) ? null != $e(i, e, r) ? "" : In(Ce(i, e + "_missing_reason", r) ?? "source_reported_missing") : s === S ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
				"",
				l ? "" : "not_computed_for_export",
				l?.reasons.length ? "" : "not_applicable_to_row",
				l?.diffs.length ? "" : "not_applicable_to_row",
				o ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let t = 0; t < g.rows; t += 1) {
			const e = b(g, t);
			if (v && (!e || !v.has(e))) continue;
			const n = s(t);
			if (null != n && r.add(n), e && y?.has(e)) {
				null != n && m.push(o(f, n, S, "")), m.push(o(g, t, "invalid", ""));
				continue;
			}
			if (!h[t]) {
				m.push(o(g, t, S, ""));
				continue;
			}
			const i = p(g, t);
			null != n && m.push(o(f, n, S, "")), m.push(o(g, t, "recomputed", _(i)));
		}
		for (let t = 0; t < f.rows; t += 1) {
			if (r.has(t)) continue;
			const e = b(f, t);
			(!v || e && v.has(e)) && (m.push(o(f, t, S, "")), e && y?.has(e) && m.push(o(f, t, "invalid", "")));
		}
	}
	return m.length > 1 ? `${m.join("\n")}\n` : null;
}
function En(e, n) {
	const i = /* @__PURE__ */ new Map();
	for (const t of e) for (const [e, n] of Object.entries(t.part2Reports ?? {})) {
		const r = An("part2_report", Sn(t), e);
		i.set(r, [...i.get(r) ?? [], n]);
	}
	return Object.fromEntries([...i].map(([e, i]) => {
		const r = n?.get(e) ?? [...new Set(i.flatMap((e) => e.columns))], s = [r.map(t).join(",")];
		for (const t of i) for (let e = 0; e < t.rows; e++) s.push(r.map((n) => In(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, s.join("\n") + "\n"];
	}));
}
Object.keys(O).map((e) => An("person_summary_review", e));
const $n = (e, t) => _e(e).filter((e) => t?.has(e.nightDate));
async function On(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: yn,
		detail: ""
	};
	const i = e.current ?? e.imported;
	if (void 0 === i.tailExpansion) return {
		reason: "not_computed_for_export",
		detail: "the saved GGIR review predates the core's tail expansion flag; import the folder again"
	};
	const r = $(n);
	try {
		const { ggirVersion: n } = await r.ggirConfigValues(e.configCsv), { profile: s, reports: a } = await r.ggirPersonSummaries({
			ggir_version: n ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: i.nights,
			days: i.days,
			tail_expansion: i.tailExpansion,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(Ce(i.nights, C.ggir_id.header, 0) ?? ""),
			invalid_nights: $n(e.imported, t).map((e) => e.night),
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
async function Cn(e, n, i) {
	const r = /* @__PURE__ */ new Map(), s = await Promise.all(e.map(async (e) => {
		const t = $n(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (t) => {
			const i = await ye(e.imported, e.edits, t.night, n);
			return null == i ? [] : [`night ${String(t.night)} ${i}`];
		}))).flat(), ...t].join("; ");
	}));
	for (const [t, o] of e.entries()) {
		const e = Sn(o), n = s[t], i = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [t, s] of Object.entries(o.personReports ?? {})) {
			if (0 === s.rows) continue;
			const a = An("person_summary_review", e, t), o = "reason" in i ? i : i.reports[t] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${t}`
			};
			r.set(a, [...r.get(a) ?? [], {
				table: s,
				source: O[e].reviewSource,
				edit: n,
				recomputed: o
			}]);
		}
	}
	const a = /* @__PURE__ */ new Set([C.ggir_id.header, C.ggir_filename.header]);
	return Object.fromEntries([...r].map(([e, n]) => {
		const r = i?.get(e), s = [...new Set(n.flatMap(({ table: e }) => e.columns))], o = (r ?? n.reduce((e, { recomputed: t }) => "reason" in t ? e : function(e, t) {
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
		}(e, t.columns), s)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !Mn.includes(e)), l = Mn.map((e) => e + "_missing_reason"), c = r?.filter((e) => e.endsWith("_missing_reason") && !l.includes(e)) ?? ["refusal_detail_missing_reason", ...o.map((e) => e + "_missing_reason")], u = [[
			...o,
			...Mn,
			...c,
			...l
		].map(t).join(",")], d = (e, n) => [
			e,
			"",
			"",
			"",
			t(n)
		], m = (e) => [
			"",
			"not_computed_for_export",
			"not_applicable_to_row",
			"not_applicable_to_row",
			e ? "" : "not_applicable_to_row"
		], p = (e, t) => (n) => In(e.values[e.columns.indexOf(n)]?.[t]), g = (e) => c.map((t) => e.get(t) ?? ""), f = new Map(n.map(({ table: e }) => [e, new Set(e.columns)]));
		for (const { table: i, source: h, edit: _, recomputed: w } of n) for (let e = 0; e < i.rows; e++) {
			const n = o.map(p(i, e)), r = new Map(o.flatMap((e) => f.get(i).has(e) ? [] : [[e + "_missing_reason", "not_applicable_to_row"]]));
			if (u.push([
				...n,
				...d(h, ""),
				...g(r),
				...m("")
			].join(",")), !_) continue;
			const s = "reason" in w ? w : 0 === w.rows ? {
				reason: "no_retained_nights",
				detail: ""
			} : null, l = "reason" in w ? null : p(w, 0), c = o.map((e, t) => a.has(e) ? n[t] : l?.(e) ?? ""), v = new Map(o.flatMap((e, t) => {
				return "" === (n = c[t]).trim() || /^(?:nan|na|n\/a)$/iu.test(n.trim()) ? [[e + "_missing_reason", s?.reason ?? "not_applicable_to_row"]] : [];
				var n;
			}));
			s?.detail && v.set("refusal_detail_missing_reason", t(`ggirPersonSummaries: ${s.detail}`)), u.push([
				...c,
				...d("recomputed", _),
				...g(v),
				...m(_)
			].join(","));
		}
		return [e, u.join("\n") + "\n"];
	}));
}
const Dn = D.ggir_part4_nightsummary_csv, jn = Dn.map((e) => C[e].header), Fn = [
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
], Ln = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function Pn(e, n) {
	const i = C[e], r = "number" == typeof n || "boolean" == typeof n || "string" == typeof n ? n : null;
	return "string" == typeof r ? t(r) : _n(r, { integral: i.ggirIntegral ?? !1 });
}
function Bn(e, t = "legacy-recording", n, i) {
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
	}) : $(i).validStateFraction(a).then(async (e) => {
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
			})), [r, s] = Xt(n.map((e) => e.timestamps)), [a, o] = Xt(n.map((e) => e.states));
			return $(t).sleepRegularityIndex(h([
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
async function Wn(e, t, n, i = {}) {
	const { signal: r } = i, s = e.participantId ?? e.filename, a = U(n.values(), i.algorithm), o = [];
	for (const [m, v] of n) {
		if (!Yn(m, i.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = Ut(v, a);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await Bn(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, r), { sri: c, fractionValid: u } = l, d = "stale" === a.status ? "scores_from_another_config" : null, p = d ?? l.sriMissingReason, g = d ?? l.fractionValidMissingReason, f = [];
	for (const v of [...t.keys()].sort()) {
		const e = t.get(v);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === m.MAIN_SLEEP && null != t.onsetTimestamp && f.push({
			date: v,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const h = [[
		...jn,
		...Fn.map((e) => `${C[e].header}_missing_reason`),
		...Ln.map((e) => `${C[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: m, onsetTs: v, wakeupTs: y } of f) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == y ? "not_applicable_to_row" : d ?? "no_scored_epochs"
		};
		if (null != y) {
			const { timestamps: i, algorithmResults: s } = await un(n, m, a, { signal: r });
			if (s && i.length > 0) {
				t.missingReason = null;
				const n = await Gt(s, i, v, y, e.epochLengthSeconds || 60, null, r);
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
	const w = await $(r).ggirManualNightClocks(f.map((e) => e.date), Float64Array.from(f, (e) => e.onsetTs), Float64Array.from(f, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let m = 0; m < f.length; m++) {
		const { onsetTs: t, wakeupTs: n } = f[m], i = w[m], { tstH: r, nAwak: a, latency: o, efficiency: l } = _[m], d = {
			ggir_id: s,
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
			ggir_sleep_duration_in_spt: r,
			ggir_waso: i?.waso ?? null,
			ggir_duration_sib_wakinghours: null,
			ggir_number_sib_sleepperiod: null,
			ggir_number_of_awakenings: a,
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
			ggir_sleep_regularity_index1: c,
			ggir_sri_fraction_valid: u,
			ggir_longitudinal_axis: null,
			ggir_guider_corrected: !1
		};
		h.push([
			...Dn.map((e) => Pn(e, d[e])),
			...Fn.map((e) => {
				const t = Dn.indexOf(e);
				return t >= 0 && null == d[Dn[t]] ? "not_computed_for_export" : "";
			}),
			...Ln.map((e) => {
				const t = Dn.indexOf(e);
				return t >= 0 && null == d[Dn[t]] ? _[m].missingReason ?? "" : "";
			}),
			p ?? "",
			g ?? ""
		].join(","));
	}
	return h.join("\n") + "\n";
}
function zn(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function Gn(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function Hn(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function Un(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: i } = Gn(n), r = [e, i].filter(Boolean);
		t.set(n, 0 === r.length ? "part4_nightsummary.csv" : `part4_nightsummary_${r.join("_")}.csv`);
	}
	return t;
}
function Vn(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : te(e);
}
function Kn(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function* qn(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let i = Math.min(e.length, n + hn / 4);
		i < e.length && /[\uD800-\uDBFF]/u.test(e[i - 1]) && (i -= 1), yield t.encode(e.slice(n, i)), n = i;
	}
	yield t.encode("\n");
}
function Jn(e) {
	return new TextEncoder().encode(e);
}
function Yn(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function Zn(e, t, n) {
	n?.throwIfAborted();
	const r = function(e, t) {
		const { signal: n } = t, { username: i, dateRange: r, snapshot: s } = e, a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const d = zr(s, Cr.ggirReport, e.map((e) => e.id)), m = await Promise.all(e.map((e) => qr(s, e.id, i, n)));
				for (const [i, s] of e.entries()) {
					const e = d.files.find((e) => e.id === s.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: p, sets: g, markersByAlgo: f, invalidDates: h } = m[i], _ = Zr(d, e.id), w = new Map([...f].filter(([e]) => Yn(e, r))), v = /* @__PURE__ */ new Map();
					for (const [t, n] of w) for (const e of n) {
						const n = Hn(e);
						let i = v.get(n);
						i || (i = /* @__PURE__ */ new Map(), v.set(n, i)), i.set(t, e);
					}
					const y = /* @__PURE__ */ new Set();
					for (const [t, n] of w) for (const e of n) c(e) && y.add(t);
					if (p) for (const t of g) u.push({
						...t,
						...r ? { scoredDates: new Set(e.availableDates.filter((e) => Yn(e, r))) } : {},
						invalidDates: h
					});
					const b = [...y].sort(), k = b[0], T = b[b.length - 1], M = [], I = [];
					for (const n of t.charts ? [..._.keys()].sort() : []) if (Yn(n, r) && (null == k || null == T || n >= k && n <= T)) {
						const e = _.get(n), t = H({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), i = t.timestamps, r = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < i.length; n++) M.push(i[n]), I.push(r[n]);
					}
					const S = [];
					for (const [t, i] of v) {
						const s = Gn(t).algoKey, l = p ? "" : await Wn(e, i, _, {
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
						const { algoKey: m, ruleKey: g } = Gn(t), f = [m, g].filter(Boolean).join("_"), h = U(_.values(), s || null);
						S.push([f, {
							p: u,
							n: d,
							..."stale" === h.status ? { stale: h.reason } : {}
						}]);
					}
					0 === v.size && S.push(["", {
						p: [],
						n: []
					}]), M.length > 0 && l.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: M,
						act: I,
						algos: S
					});
				}
			},
			entries: () => async function({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: i, layouts: r, only: s }) {
				const a = {}, o = (e) => void 0 === s || s === e;
				for (const [l, c] of i ?? Un([...e.keys()])) {
					const t = e.get(l);
					t?.length && o(c) && (a[c] = Jn(`${t.join("\n")}\n`));
				}
				for (const l of Object.keys(O)) {
					const e = t.filter((e) => Sn(e) === l);
					if (0 === e.length) continue;
					const i = (t, n) => void 0 === s || e.some((e) => Object.keys(n(e) ?? {}).some((e) => An(t, l, e) === s));
					if (i("part2_report", (e) => e.part2Reports)) for (const [t, n] of Object.entries(En(e, r))) o(t) && (a[t] = Jn(n));
					for (const [t, s] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
						const i = An(s, l), c = o(i) ? await Nn(e, t, n, r?.get(i)) : null;
						c && (a[i] = Jn(c));
					}
					if (i("person_summary_review", (e) => e.personReports)) for (const [t, s] of Object.entries(await Cn(e, n, r))) o(t) && (a[t] = Jn(s));
				}
				return a;
			}({
				csvLinesByAlgo: a,
				ggirReviews: u
			}, { signal: n }),
			chartPidData: l,
			csvLinesByAlgo: a,
			ggirReviews: u
		};
	}(e, {
		signal: n,
		charts: !0
	});
	await r.addFiles([t]);
	const s = [...r.chartPidData].map(([t, n]) => function(e, t, n) {
		return {
			key: e,
			pid: t.pid,
			charts: t.algos.map(([i, r]) => {
				const { algoKey: s, ruleKey: a } = Gn(i), o = Kn([s, a].filter(Boolean).join("_"), "unscoped"), l = `activity-${Kn(e, "recording")}-${o}-${n}.svg`, c = function(e) {
					if (0 === e.timestamps.length) return wn("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return wn("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, i = 0;
					const r = e.timestamps.map((r, s) => {
						const a = e.activity[s];
						return !Number.isFinite(r) || r <= t ? wn("timestamps must be finite and strictly ascending") : (t = r, null != a && Number.isFinite(a) ? (n = Math.min(n, a), i = Math.max(i, a), {
							timestamp: r,
							value: a
						}) : {
							timestamp: r,
							value: null
						});
					}), s = r[0].timestamp, a = r[r.length - 1].timestamp, o = a > s ? a : s + 1;
					if (!Number.isFinite(o) || o <= s) return wn("single-epoch viewport must have a representable right edge");
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
				}), u = [...qn(`      <div class="plot-svg">${zt(c)}</div>`)];
				return {
					algoKey: i,
					...r.stale ? { stale: r.stale } : {},
					svgFilename: l,
					plot: new Blob(u),
					plotLengths: u.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${zn(Vn(c.viewport.min))} → ${zn(Vn(c.viewport.max))} · activity domain ${_n(c.valueDomain.min)}–${_n(c.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), a = new Set(Un([...r.csvLinesByAlgo.keys()]).values()), l = [];
	for (const [c, u] of Object.entries(await r.entries())) a.has(c) || l.push([c, o(i(new TextDecoder().decode(u)).records[0].text)]);
	return {
		charts: s,
		csvLinesByAlgo: r.csvLinesByAlgo,
		ggirReviews: r.ggirReviews,
		headers: l
	};
}
function Qn(e) {
	return "aw5" === e ? "actoglance.source.philips_actiwatch_aw5.v1" : "actoglance.source.philips_actiware_csv.v1";
}
function Xn(e) {
	return Date.parse(`${e}Z`) / 1e3;
}
async function ei(e, t) {
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
async function ti(e, t, n, i = 60) {
	const r = Int8Array.from(t.scores, (e) => null == e ? -1 : 0 === e ? 1 : 0);
	return e.foldSleepWakeVotes(t.startTimestamp, t.epochSeconds, r, Float64Array.from(n), i);
}
function ni(e) {
	return {
		startTimestamp: e.startTimestamp,
		epochSeconds: e.epochSeconds,
		params: e.params,
		...e.paradigmDefaults ? { paradigmDefaults: e.paradigmDefaults } : {},
		scores: Int8Array.from(e.scores, (e) => e ?? -1).buffer
	};
}
function ii(e, t) {
	return e.filter((e) => "rest" === e.kind || "sleep" === e.kind).map((e) => ({
		kind: e.kind,
		source: e.source,
		startTimestamp: Xn(e.start),
		endTimestamp: Xn(e.end),
		origin: t ? "generated" : "stored",
		...e.analysis ? { analysis: e.analysis } : {}
	})).filter((e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.endTimestamp > e.startTimestamp).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function ri(e) {
	return e.map(({ start: e, end: t, ...n }) => ({
		...n,
		startTimestamp: Xn(e),
		endTimestamp: Xn(t)
	}));
}
function si(e, t) {
	return e && e.length === t && t > 0 ? e : null;
}
function ai(e) {
	const t = e.timestamps_ms.length, n = (t) => e.light_channels.find((e) => e.name === t)?.counts;
	return {
		white: si(e.light, t),
		red: si(n("red_light"), t),
		green: si(n("green_light"), t),
		blue: si(n("blue_light"), t)
	};
}
function oi(e, t, n) {
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
function li(e, t) {
	const n = 6e4 * (ci(e, t)?.gmt_offset_minutes ?? 0);
	return 0 === n ? e.series : {
		...e.series,
		timestamps_ms: e.series.timestamps_ms.map((e) => e + n)
	};
}
function ci(e, t) {
	return (void 0 === t ? void 0 : e.downloads.find((e) => e.guid === t)) ?? e.downloads.find((e) => e.is_primary) ?? e.downloads[0];
}
function ui(e) {
	const t = e.channels.find((t) => t.name === e.primary) ?? e.channels[0];
	if (!t) throw new Error("The device file carries no activity count channel.");
	return t.counts;
}
var di = class extends Error {
	name = "NativeEpochRefusal";
	category = "unsupported-epoch";
	sourceEpochSeconds;
	constructor(e) {
		super(T("unsupported-epoch")), this.sourceEpochSeconds = e;
	}
};
async function mi(e, t, i = [], s = null) {
	if (!r(e.epoch_seconds)) throw new di(e.epoch_seconds);
	const a = function(e, t) {
		if (!t || t.length !== e.length) return /* @__PURE__ */ new Float64Array(0);
		const n = [];
		return t.forEach((t, i) => {
			t && n.push((e[i] ?? NaN) / 1e3);
		}), Float64Array.from(n.filter(Number.isFinite));
	}(e.timestamps_ms, e.marker), o = function(e) {
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
	}(e), l = e.timestamps_ms.length > 0 && e.off_wear.length === e.timestamps_ms.length, c = n(e.epoch_seconds) ? e : await t(e), u = c.epoch_seconds;
	if (!n(u)) throw new di(e.epoch_seconds);
	const d = 120 === u ? [...i, "This recording keeps its native 120-second scoring grid. A 60-second view, one-minute sleep scorers, Choi nonwear and finer algorithm variants are unavailable because the source contains only two-minute sums."] : i, m = c.activity_invalid ?? [];
	return {
		epochSeconds: u,
		timestampsMs: c.timestamps_ms,
		counts: ui(c),
		actiwareInvalidActivityEpochs: Uint8Array.from(m.length === c.timestamps_ms.length ? m : [], (e) => e ? 1 : 0),
		actiwareStatisticsInput: s,
		sourceEpochSeconds: e.epoch_seconds,
		eventMarkerInstantsSec: a,
		offWristPeriods: o,
		hasOffWristChannel: l,
		warnings: d,
		light: ai(c),
		actiwareIntervals: [],
		actiwareSleepWake: null,
		actiwareStatistics: [],
		actiwareRecording: null,
		actiwareWakeThreshold: null,
		actiwareRestProposal: null
	};
}
function pi(e) {
	const { proposal: t, nights: n } = e ?? {
		proposal: se,
		nights: []
	}, i = t.rest_autoscore === M.screens ? n : [];
	return JSON.stringify([
		t.use_saved_rest_intervals,
		t.rest_autoscore,
		i.map(({ timestamps: e, activity_counts: t, sleep_scores: n, ...i }) => i)
	]);
}
function gi(e, t, n, i = /* @__PURE__ */ new Map(), r = {}) {
	const s = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = (/* @__PURE__ */ new Date(1e3 * (o - 43200))).toISOString().slice(0, 10);
		let t = s.get(e);
		t || s.set(e, t = []), t.push(o);
	}
	const a = Array.from(t);
	return [...s].map(([e, t]) => {
		const s = Date.parse(`${e}T00:00:00Z`) / 1e3, o = i.get(e);
		return Se({
			analysisDate: e,
			epochLengthSeconds: n,
			timestamps: t,
			activityCounts: [],
			sleepScores: [],
			eventMarkerTimestamps: a.filter((e) => e >= s + 43200 && e < s + 151200),
			diaryBedTime: Y(o, "diary_in_bed_time"),
			diaryOnsetTime: Y(o, "diary_onset_time"),
			diaryOutBedTime: Y(o, "diary_out_of_bed_time"),
			diaryWakeTime: Y(o, "diary_wake_time"),
			nightStartHour: be(r.start),
			nightEndHour: be(r.end)
		});
	});
}
async function fi(e, t, n, i, r, s, a, o) {
	a?.throwIfAborted();
	const l = n ? ae(n, ce(n, i, e)) : null, c = !n || !l || le(n, l), u = c || null !== n && null !== l && !ue(n, l) ? e.filter((e) => "rest" === e.kind) : [], d = c ? e.filter((e) => "sleep" === e.kind) : [], m = t && l && r.actiwareSleepWake ? await r.actiwareSleepWake(t, l).catch(() => null) : null;
	a?.throwIfAborted();
	const p = n ? me(n, i, e) : [], g = t && l && m ? {
		startTimestamp: Xn(t.start_local),
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
	}).then((e) => ri(e ?? [])).catch(() => (console.warn("[actiware-statistics] the core rejected this file's Statistics input"), null)) : [];
	return a?.throwIfAborted(), {
		intervals: ii(_.intervals, _.generated),
		sleepWake: g,
		statistics: y,
		statisticsInput: v,
		wakeThreshold: f ?? null,
		restProposal: o ? {
			key: pi(o),
			...h?.nights ? { notes: Object.fromEntries(h.nights.map((e) => [e.analysis_date, e.note])) } : {}
		} : null
	};
}
const hi = "Actiware statistics could not be computed for this file; the Actiware statistics block stays empty.";
function _i(e, t) {
	return e ? (t ?? []).map((e) => `Actiware setting ${e.field} = '${e.raw_label}' not recognised; using default.`) : ["No Actiware analysis settings in this file; Actiware Sleep/Wake and rest intervals are not recomputed."];
}
async function wi(e, t, n) {
	if (yi(e)) return "aw5";
	const i = e.name.toLowerCase();
	if (i.endsWith(".aw5")) return "aw5";
	if (!i.endsWith(".csv")) return null;
	if ("function" != typeof t.detectDeviceFormat) return null;
	const r = await S(e, 65536, n);
	return s = await t.detectDeviceFormat(r, e.name).catch(() => null), a = e.name, "actiware_csv" === s ? "actiware_csv" : "aw5" === s || a.toLowerCase().endsWith(".aw5") ? "aw5" : null;
	var s, a;
}
async function vi(t, n, i, r, s, a = { cancel: () => {} }, o) {
	const l = (e, t) => R(t, N, e, a.signal, a.cancel), c = (e) => s && o ? {
		proposal: o.proposal,
		nights: o.proposal.rest_autoscore === M.screens ? gi(e.timestampsMs.map((e) => e / 1e3), e.eventMarkerInstantsSec, e.epochSeconds, void 0, {
			start: o.nightStartHour,
			end: o.nightEndHour
		}) : []
	} : null, u = async (t) => (await l("aggregateEpochSeries", () => i.aggregateEpochSeries({
		target_seconds: e,
		series: t,
		sleep_scores: [],
		event_markers: []
	}))).series;
	if ("aw5" === n) {
		const e = yi(t) ? t.aw5Subject.downloadGuids[0] : void 0, n = yi(t) ? await t.loadAw5(a.signal) : await l("parseAw5", async () => i.parseAw5(new Uint8Array(await t.arrayBuffer())));
		if (x(a.signal, "after decoding the .AW5 database"), !n) throw new Error("This build's actours core cannot read .AW5 databases yet (needs the pin that exports parseAw5). Export the recording from Actiware as CSV instead.");
		const { warnings: o } = function(e) {
			const { status: t, reasons: n } = e.alignment;
			if ("broken" === t) throw new Error(`This .AW5 recording's samples do not line up with its clock (${n.join("; ") || "alignment broken"}), so it was not imported.`);
			return "suspect" === t ? { warnings: [`.AW5 alignment is suspect: ${n.join("; ") || "no reason given"}. Check the plot against the Actiware report.`] } : { warnings: [] };
		}(n), d = ci(n, e), m = n.actiware_analysis, p = m?.statistics_input ?? n.actiware_statistics_input ?? null;
		r?.(.6, "Preparing the supported native scoring grid...");
		const g = await mi(li(n, e), u, o, p);
		r?.(.8, "Actiware sleep/wake and statistics...");
		const f = m?.params ?? n.actiware_params, h = f ? {
			params: f,
			intervals: m?.intervals ?? n.series.rest_intervals ?? [],
			...m?.analysis ? { analysis: m.analysis } : {},
			...n.other_analyses ? { otherAnalyses: n.other_analyses } : {}
		} : null, _ = await fi(h?.intervals ?? [], m?.input ?? n.actiware_input ?? await ei(li(n, e), i), h?.params ?? null, s, i, p, void 0, c(g));
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
				..._i(f, m?.params_warnings ?? n.actiware_params_warnings ?? n.series.actiware_params_warnings),
				..._.statistics ? [] : [hi]
			],
			...d ? { gmtOffsetMinutes: d.gmt_offset_minutes } : {}
		};
	}
	const d = await l("parseEpochSeries", async () => {
		const e = new Uint8Array(await t.arrayBuffer());
		return i.parseEpochSeries(h(e, [e.buffer]), t.name);
	});
	x(a.signal, "after parsing the Actiware export"), r?.(.6, "Preparing the supported native scoring grid...");
	const m = await mi(d, u, [], d.actiware_statistics_input ?? null);
	r?.(.8, "Actiware sleep/wake and statistics...");
	const p = d.actiware_params ?? null, g = p ? {
		params: p,
		intervals: d.rest_intervals ?? []
	} : null, f = await fi(d.rest_intervals ?? [], d.actiware_input ?? await ei(d, i), p, s, i, d.actiware_statistics_input ?? null, void 0, c(m));
	return {
		...m,
		actiwareRestProposal: f.restProposal,
		actiwareStatisticsInput: f.statisticsInput,
		actiwareIntervals: f.intervals,
		actiwareSleepWake: f.sleepWake,
		actiwareStatistics: f.statistics ?? [],
		actiwareRecording: g,
		actiwareWakeThreshold: f.wakeThreshold,
		warnings: [
			...m.warnings,
			..._i(p, d.actiware_params_warnings),
			...f.statistics ? [] : [hi]
		]
	};
}
function yi(e) {
	return "aw5Subject" in e;
}
function bi(e, t) {
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
var ki = class extends Error {
	name = "ActiwareSleepContainmentError";
}, Ti = class extends Error {
	name = "ActiwareRestEditError";
};
const Mi = (e, t) => Math.round((t - e.startTimestamp) / e.epochSeconds);
function Ii(e, t) {
	return e.startTimestamp + Mi(e, t) * e.epochSeconds;
}
const Si = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " "), Ai = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19);
function xi(e) {
	return {
		kind: e.kind,
		source: e.source,
		start: Ai(e.startTimestamp),
		end: Ai(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	};
}
const Ri = (e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind);
function Ni(e, t) {
	return (e ?? []).filter((e) => "rest" === e.kind && null !== Te([e], t));
}
const Ei = (e, t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp;
function $i(e, t, n) {
	const i = Me(e, t);
	return i ? [...i.sleep && !n ? [{
		onsetTimestamp: i.sleep.startTimestamp,
		offsetTimestamp: i.sleep.endTimestamp,
		markerIndex: 1,
		markerType: m.MAIN_SLEEP
	}] : [], ...(i.additionalSleeps ?? []).map((e, t) => ({
		onsetTimestamp: e.startTimestamp,
		offsetTimestamp: e.endTimestamp,
		markerIndex: t + 2,
		markerType: m.NAP
	}))] : [];
}
function Oi(e, t, n, i) {
	return $i(t, n, i).map((t) => {
		const n = e.find((e) => e.markerType === t.markerType && e.onsetTimestamp === t.onsetTimestamp && e.offsetTimestamp === t.offsetTimestamp);
		return n ? {
			...n,
			markerIndex: t.markerIndex
		} : t;
	});
}
async function Ci(e, t, n, i) {
	if (!t) return null;
	const r = function(e, t) {
		const n = [...t].flatMap((t) => {
			const n = Me(e, t);
			return n?.sleep ? [n.sleep] : [];
		});
		return (e ?? []).filter((e) => "sleep" !== e.kind || !n.some((t) => t.startTimestamp === e.startTimestamp && t.endTimestamp === e.endTimestamp));
	}(e, n).map(xi).sort(Ri);
	if (0 === r.length) return [];
	const s = await i({
		...t,
		intervals: r
	});
	return s ? ri(s).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)) : null;
}
async function Di(e, t, n, i) {
	const r = Ni(e, t), s = "move" === n.kind ? r.find((e) => e.startTimestamp === n.from.startTimestamp && e.endTimestamp === n.from.endTimestamp) : "remove" === n.kind ? r.find((e) => Ei(n.holding, e)) : void 0;
	if ("add" !== n.kind && !s) throw new Ti("That rest interval changed since it was shown; reload the night.");
	const a = e.filter((e) => e !== s && !(s && "sleep" === e.kind && Ei(e, s)));
	if ("remove" === n.kind) return a;
	const { grid: o } = i, l = s?.analysis, c = {
		kind: "rest",
		source: "event_marker",
		origin: "scorer",
		startTimestamp: Ii(o, n.to.startTimestamp),
		endTimestamp: Ii(o, n.to.endTimestamp),
		...l ? { analysis: l } : {}
	};
	if (c.endTimestamp <= c.startTimestamp) throw new Ti("A rest interval must end after it starts.");
	if (a.some((e) => "rest" === e.kind && e.startTimestamp < c.endTimestamp && e.endTimestamp > c.startTimestamp)) throw new Ti("A rest interval cannot overlap another rest interval.");
	if (null === Te([c], t)) throw new Ti("That rest interval would belong to another night.");
	const u = await async function(e, { epochs: t, params: n, grid: i, core: r }) {
		if (0 === e.length) return [];
		const s = await r.actiwareIntervals(t, e.map(xi), n);
		if (!s || s.generated) throw new Error("The Actiware core did not derive the sleep inside these rest intervals.");
		const a = ii(s.intervals.filter((e) => "sleep" === e.kind), !0);
		return function(e, t) {
			const n = e.filter((e) => "rest" === e.kind);
			for (const i of e.filter((e) => "sleep" === e.kind)) {
				const e = Mi(t, i.startTimestamp), r = Mi(t, i.endTimestamp);
				if (!n.some((n) => e >= Mi(t, n.startTimestamp) && r <= Mi(t, n.endTimestamp))) throw new ki(`Actiware sleep interval ${Si(i.startTimestamp)}–${Si(i.endTimestamp)} lies outside every rest interval.`);
			}
		}([...e, ...a], i), a;
	}([c], i);
	return [
		...a,
		c,
		...u
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function ji(e, t) {
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
async function Fi({ file: e, statisticsInput: t }, n, i, r) {
	if (!t) return null;
	const s = $(r), a = e.actiwareIntervals ?? [], o = await on(a.map((e) => e.startTimestamp), s);
	let l = [...a];
	for (const p of n.keys()) {
		const e = Ni(a, p), t = a.filter((t) => "sleep" === t.kind && Li(a, t, e, () => o(t.startTimestamp) === p)), i = n.get(p), r = i?.sleepMarkers.filter((e) => (e.markerType === m.NAP || e.markerType === m.MAIN_SLEEP && !i.isInvalidNight) && null != e.onsetTimestamp && Number.isFinite(e.onsetTimestamp) && null != e.offsetTimestamp && Number.isFinite(e.offsetTimestamp) && e.offsetTimestamp > e.onsetTimestamp);
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
		intervals: l.map(xi).sort(Ri)
	});
	if (!c) return null;
	const u = ri(c), d = [...e.actiwareStatistics ?? [], ...u].map((e) => e.startTimestamp);
	return {
		calculated: u,
		rowDateOf: await on(d, s),
		datedRows: new Set(d)
	};
}
const Li = (e, t, n, i) => {
	const r = e.find((e) => "rest" === e.kind && t.startTimestamp >= e.startTimestamp && t.endTimestamp <= e.endTimestamp);
	return r ? n.includes(r) : i();
};
function Pi(e, t, n, i) {
	const r = e.actiwareIntervals ?? [], s = [...n].map((e) => ({
		date: e,
		rests: Ni(r, e)
	})), a = (e) => s.some(({ date: n, rests: s }) => "rest" === e.kind ? null !== Te([e], n) : "sleep" === e.kind && Li(r, e, s, () => {
		return r = e.startTimestamp, (t.datedRows.has(r) || !i ? t.rowDateOf(r) : i(r)) === n;
		var r;
	}));
	return [...(e.actiwareStatistics ?? []).filter((e) => !a(e)), ...t.calculated.filter(a)].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Bi(e, t) {
	return (e.actiwareStatistics ?? []).map((e) => e.startTimestamp).filter((e) => !t.datedRows.has(e));
}
const Wi = [
	"temperature",
	"lux",
	"redLight",
	"greenLight",
	"blueLight"
], zi = j.invalid_night_row?.markerTypeCell ?? "", Gi = j.nonwear_row?.markerTypeCell ?? "";
function Hi(e) {
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
function Ui(e) {
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
const Vi = [
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
], Ki = [
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
async function qi(e, t, n, i, r, s, a) {
	try {
		return {
			metrics: t ? await Ht(e, t, n, i, r, s, a) : await Gt(e, n, i, r, s, null, a),
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
async function Ji(e, t, n, i) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const r = new Set(n.filter((t) => t.markerType === m.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return r.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : Bn(t.filter((e) => r.has(e.date)), e, t[0]?.epochLengthSeconds, i);
}
function Yi(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const Zi = [
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
], Qi = {
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
function Xi(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function er(e, t, n, i, r) {
	const s = [], a = zr(n, Cr.event, e), o = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		r?.throwIfAborted();
		const e = Xi(l, Zr(a, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await on(e, $(r)), c = new Set(Ur(a, l.id, i).keys());
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
function tr(e, t) {
	if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
	const n = [], i = new gt(t?.byteLength ? {
		level: 1,
		dictionary: t
	} : { level: 1 }, (e) => {
		n.push(e);
	});
	i.push(e, !1), i.flush(!1);
	const r = i.s.r ?? 0;
	if (!Number.isInteger(r) || r < 0 || r > 2047) throw new Error("ZIP compression state is unreadable.");
	const s = (7 & r) > 5 ? 2 : 1, a = new Uint8Array(s + 4);
	return a[0] = r >> 3, a[s + 2] = 255, a[s + 3] = 255, n.push(a), q(n);
}
D.sleep_csv.filter((e) => "server" !== C[e].plane).map((e) => C[e].header), j.invalid_night_row.markerTypeCell, P("actiware_interval_csv", "local"), [
	"interval_score_count",
	"interval_score_average",
	"interval_score_manual_count",
	"interval_score_manual_average",
	"interval_score_scheduled_count",
	"interval_score_scheduled_average",
	"interval_score_no_response_count",
	"interval_score_late_count",
	"interval_score_late_average"
].map((e) => C[e].header), new Set(vn.map(([, e]) => e)), P("event_marker_csv", "local"), P("actiware_sleep_wake_csv", "local"), new Uint8Array([3, 0]);
const nr = (() => {
	const e = /* @__PURE__ */ new Int32Array(256);
	for (let t = 0; t < 256; t += 1) {
		let n = t;
		for (let e = 0; e < 8; e += 1) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
		e[t] = n;
	}
	return e;
})();
function ir(e) {
	let t = -1;
	for (const n of e) t = nr[255 & (t ^ n)] ^ t >>> 8;
	return ~t >>> 0;
}
function rr(e, t) {
	let n = 2147483648, i = 0, r = t;
	for (; !(e & n) || (i ^= r, e & n - 1);) n >>>= 1, r = 1 & r ? r >>> 1 ^ 3988292384 : r >>> 1;
	return i >>> 0;
}
(() => {
	const e = [1 << 30];
	for (let t = 1; t < 32; t += 1) e.push(rr(e[t - 1], e[t - 1]));
})(), w.GGIR_CORRECTED_WARM, [
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
].join(","), xe.length;
var sr = a({
	GgirReviewChangedError: () => br,
	editsFromMarkers: () => fr,
	getGgirMarkerInputs: () => hr,
	ggirNightEdits: () => gr,
	ggirNightRecords: () => pr,
	hasGgirRecomputeFailure: () => ur,
	mergeGgirSleepMarkers: () => mr,
	recomputeGgirResults: () => vr,
	recoverPendingGgirRecomputes: () => yr,
	reviewGgirResultsForMarkers: () => Tr,
	scheduleGgirRecompute: () => wr
});
const ar = new EventTarget(), or = /* @__PURE__ */ new WeakMap(), lr = 800, cr = "Update GGIR review";
function ur(e, t, n) {
	return b.getState().jobs[`${n.name}:${_r(e, t)}`]?.status === y.FAILED;
}
function dr(e, t, n, i, r) {
	if (r?.aborted || function(e) {
		return e instanceof Error && e.name === u.errnames.DatabaseClosed;
	}(i)) return;
	const s = _r(e, t), a = `${n.name}:${s}`, o = b.getState();
	o.jobs[a]?.controller.signal.aborted || o.jobs[a]?.status === y.ELSEWHERE || (o.update(a, {
		id: a,
		key: s,
		workspaceId: n.name,
		kind: w.GGIR_RECOMPUTE,
		label: cr,
		controller: o.jobs[a]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: y.FAILED
	}), n.isOpen() && I() === n && ar.dispatchEvent(new CustomEvent("failed", { detail: {
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
async function pr(e, t, n, i = [], r, s = $(r)) {
	const a = G([...n.values()].flat(), !0), o = a?.algorithm ?? we(t), l = a?.detectionRule ?? null, c = /* @__PURE__ */ new Map();
	for (const [m, p] of n) {
		const e = G(p, !0);
		e && c.set(m, [{
			...e,
			algorithm: o,
			detectionRule: l
		}]);
	}
	const u = he(t), d = u.length ? await s.ggirLabelsToStoredMs(Float64Array.from(u.flatMap((e) => [e.onsetMs, e.wakeMs])), i) : [];
	for (const [p, g] of u.entries()) {
		const t = c.get(g.nightDate)?.[0], n = re(g, t);
		"scored" !== n.kind && "invalid" !== n.kind ? c.set(g.nightDate, [{
			fileId: e,
			date: g.nightDate,
			username: ee,
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
			sleepMarkers: mr({
				markerType: m.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: d[2 * p] / 1e3,
				offsetTimestamp: d[2 * p + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : c.set(g.nightDate, t ? [t] : []);
	}
	return c;
}
async function gr(e, t, n, i = [], r, s = $(r)) {
	const a = await pr(e, t, n, i, r, s), o = new Map([...a].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : []));
	return {
		markersByAlgo: a,
		selected: o,
		edits: await fr(t, o, i, r, s)
	};
}
async function fr(e, t, n = [], i, r = $(i)) {
	const s = _e(e).flatMap((e) => {
		const n = re(e, t.get(e.nightDate));
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
async function hr(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [i, r] = await Promise.all([Q(e, t, n), J(e, n)]), s = new Map([...i].flatMap(([e, t]) => {
			const n = G(t, !0);
			return n ? [[e, n]] : [];
		})), a = r?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([a ?? [], [...s].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				re(void 0, t)
			])]),
			markers: s,
			clockSteps: a,
			bundleRevision: r?.ggirBundleRevision
		};
	});
}
function _r(e, t) {
	return `${w.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function wr(e, t, n, i) {
	if (!n.isOpen() || I() !== n || i?.aborted) return;
	let r = or.get(n);
	r || (r = /* @__PURE__ */ new Map(), or.set(n, r));
	const s = _r(e, t);
	clearTimeout(r.get(s)), r.set(s, setTimeout(() => {
		r.delete(s), n.files.get(e).then((r) => {
			if (r?.ggirBundleRevision && n.isOpen() && I() === n && !i?.aborted) return vr(e, t, n, i);
		}).catch((r) => {
			i?.aborted || r instanceof DOMException && "AbortError" === r.name || (dr(e, t, n, r, i), n.isOpen() && I() === n && (console.error("[ggir-results] recompute failed."), z("error", "GGIR results recompute failed", K(r))));
		});
	}, lr));
}
function vr(e, t, n, i, r = !0) {
	const s = (a, o = i) => E({
		kind: w.GGIR_RECOMPUTE,
		key: _r(e, t),
		label: cr,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (i) => {
			i.signal.throwIfAborted();
			const o = await async function(e, t, n, i, r, s = { active: () => n.isOpen() && I() === n }) {
				if (i.throwIfAborted(), !s.active()) return null;
				const { markerInputs: a, markers: o, clockSteps: l, bundleRevision: c } = await hr(e, t, n);
				if (!c) return null;
				const u = await n.ggirScorerReviews.get([e, t]);
				if (!s.active()) return null;
				i.throwIfAborted();
				if (u?.markerInputs === a && u.bundleRevision === c && (m = u, void 0 === s.correctedKey || 0 === m.edits.length || m.corrected?.key === s.correctedKey)) return r && ar.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), u.current ?? null;
				var m;
				const p = await n.ggirResultsBundles.get(e);
				if (!p) return null;
				const { edits: g } = await gr(e, p.imported, new Map([...o].map(([e, t]) => [e, [t]])), l, i, s.api);
				if (!s.active()) return null;
				const f = kr(u, c, g), h = void 0 !== s.correctedKey && g.length > 0 && !p.ggirCorrections && !(f && u.corrected?.key === s.correctedKey), _ = g.length > 0 && (!f || h) ? d(p, await n.ggirResultsBlobs.get(e)) : p, w = f ? u.current : (await Tr(_, o, l, g, i, void 0, s.api)).current;
				let v = f ? u.corrected : void 0;
				if (h) {
					const t = await n.ggirCorrectedValues.get(e);
					if (!t || t.key !== s.correctedKey) return null;
					const r = ve(_, t).find((e) => "corrected" === e.set), a = r && (await Tr(r.bundle, o, l, g, i, void 0, s.api)).current;
					v = {
						key: t.key,
						...a ? { current: a } : {}
					};
				}
				i.throwIfAborted();
				const y = (/* @__PURE__ */ new Date()).toISOString();
				if (!s.active()) return null;
				const b = await W(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!s.active()) return null;
					const r = await hr(e, t, n);
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
				return b ? (ar.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), i.throwIfAborted(), w ?? _.imported) : (i.throwIfAborted(), !1 !== b && null);
			}(e, t, n, i.signal, r);
			return i.signal.throwIfAborted(), !1 !== o ? o : (a < 2 && s(a + 1, i.signal).catch((r) => dr(e, t, n, r, i.signal)), null);
		}
	});
	return s(0);
}
function yr(e, t) {
	return E({
		kind: w.GGIR_RECOVERY,
		key: w.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const i = () => !t.signal.aborted && e.isOpen() && I() === e;
			try {
				if (!i()) return;
				const s = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: a } = await import("./ggir-import-DgfWX87E.js").then((e) => e.t);
				for (const o of s) {
					if (t.signal.throwIfAborted(), !i()) return;
					try {
						const [s] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), a(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), c = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...s.map((e) => e.scorer)]);
						c.delete(ee);
						for (const a of c) {
							if (!i()) return;
							try {
								const n = ur(o, a, e);
								if (!n) {
									const { markerInputs: t, bundleRevision: n } = await hr(o, a, e), i = s.find((e) => e.scorer === a);
									if (n && i?.markerInputs === t && i.bundleRevision === n) continue;
								}
								await vr(o, a, e, t.signal, n);
							} catch (r) {
								n = !0, dr(o, a, e, r, t.signal);
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
				const r = Object.values(b.getState().jobs).filter((t) => v(t) && t.workspaceId === e.name && t.kind === w.GGIR_RECOMPUTE && t.status === y.FAILED);
				for (const t of r) {
					const r = t.key.slice(w.GGIR_RECOMPUTE.length + 1);
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
							i() && (0 === n || 0 === r && 0 === s) && (b.getState().dismiss(t.id), ar.dispatchEvent(new CustomEvent("updated", { detail: {
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
var br = class extends Error {
	constructor() {
		super("a night of this recording was edited during the export; export again");
	}
};
function kr(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
async function Tr(e, t, n = [], i, r, s, a) {
	const o = i ?? await fr(e.imported, t, n, r, a);
	let l;
	r?.throwIfAborted();
	const c = s?.review;
	if (kr(c, s?.bundleRevision, o)) l = c.current;
	else {
		if (s && o.length > 0 && !e.part1) throw new br();
		if (o.length > 0 && e.ms2 && e.ms3) {
			const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), i = t(e.ms3), s = t(e.ms4), c = t(e.ms5), u = t(e.sleeplogRData), d = (t) => t.reviewGgirResults({
				part1: new Uint8Array(e.part1),
				configCsv: e.configCsv,
				recordingId: p(e.recordingFile),
				...n ? { ms2: n } : {},
				...i ? { ms3: i } : {},
				...s ? { ms4: s } : {},
				...c ? { ms5: c } : {},
				...u ? { sleeplogRData: u } : {},
				...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
				edits: o,
				...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
				...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
				crossCheck: !1
			});
			l = ge(await (a ? d(a) : A(r, d)));
		}
	}
	r?.throwIfAborted();
	const u = Object.getOwnPropertyDescriptors(e);
	return delete u.current, Reflect.deleteProperty(u, "edits"), Object.defineProperties({
		...l ? { current: l } : {},
		edits: o
	}, u);
}
const Mr = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], Ir = [
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
], Sr = [
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
], Ar = [
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
], xr = ["fileId", ...l], Rr = {
	files: [
		...Mr,
		"ggirTimezone",
		"recording",
		"ggirClockSteps",
		"sourceType",
		"sourceProfileId",
		"navigationFacts"
	],
	markers: Ir,
	activityDays: Sr,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: Ar,
	actiwareFileData: [
		"fileId",
		"actiwareIntervals",
		"actiwareStatistics"
	]
}, Nr = {
	files: [...Mr, "ggirClockSteps"],
	markers: Ir,
	activityDays: Sr,
	ggirResultsBundles: Ar,
	ggirResultsBlobs: xr,
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
}, Er = {
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
		k
	]
}, $r = "Also export corrected values was off at export", Or = {
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
}, Cr = {
	sleep: Rr,
	nonwear: Rr,
	summary: Rr,
	wide: Rr,
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
	ggirReport: Nr,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: Ir,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: [
			...Mr,
			"sourceType",
			"sourceProfileId"
		],
		markers: Ir,
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
		files: Mr,
		markers: Ir,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: Er,
	audit: Or,
	physicalActivity: {
		files: [
			...Mr,
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
		markers: Ir,
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
}, Dr = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap();
function Fr(e) {
	if (!e || "object" != typeof e) return e;
	const t = jr.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return function(e, t, n, i) {
			for (let r = 0; r < n.byteLength;) {
				const t = n.subarray(r, r + hn), s = e.read(t, { at: i + r });
				if (!Number.isInteger(s) || s <= 0 || s > t.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
				r += s;
			}
		}(t.store, 0, e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(Fr) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Fr(t)])) : structuredClone(e);
}
function Lr(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(Lr), Object.freeze(e)), e;
}
function Pr(e) {
	return function(e) {
		const t = Object.freeze({ files: Lr((e.files ?? []).map((e) => Object.fromEntries(Mr.map((t) => [t, Fr(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
		return Dr.set(t, e), t;
	}(e);
}
var Br = class extends Error {};
function Wr(e, t, n) {
	const i = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new Br(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (i(t), Reflect.get(e, t, n)),
		has: (e, t) => (i(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (i(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function zr(e, t, n = []) {
	const i = Dr.get(e);
	if (!i) throw new Br("Export requires a captured input snapshot");
	const r = Object.entries(Cr).find(([, e]) => e === t)?.[0];
	if (!r) throw new Br("Export producer has no registered input declaration");
	const s = {};
	for (const [a, o] of Object.entries(t)) {
		const e = i[a].filter((e) => !n.length || "studySettings" === a || n.includes("files" === a ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const i of o.filter((e) => e in t)) Object.defineProperty(n, i, {
				enumerable: !0,
				get: () => Lr(Fr(t[i]))
			});
			return Wr(n, o, `${r}: undeclared field ${a}.`);
		});
		Object.assign(s, { [a]: Object.freeze(e) });
	}
	return Wr(s, Object.keys(t), `${r}: undeclared table `);
}
function Gr(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	for (const r of e.markers) {
		if (r.fileId !== t || r.username !== n) continue;
		const e = X(r), s = i.get(r.date) ?? [];
		s.push(e), i.set(r.date, s);
	}
	return i;
}
function Hr(e, t, n) {
	return new Map([...Gr(e, t, n)].sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => [e, G(t)]));
}
function Ur(e, t, n) {
	return new Map([...Gr(e, t, n)].flatMap(([e, t]) => {
		const n = G(t.filter(c));
		return n ? [[e, n]] : [];
	}));
}
const Vr = /* @__PURE__ */ new WeakMap(), Kr = 4;
function qr(e, t, n, i) {
	let r = Vr.get(e);
	r || (r = /* @__PURE__ */ new Map(), Vr.set(e, r));
	const s = JSON.stringify([t, n]);
	let a = r.get(s);
	if (!a) {
		for (; r.size >= Kr;) r.delete(r.keys().next().value);
		a = async function(e, t, n, i) {
			const r = zr(e, Cr.ggirReport, [t]), s = r.files.find((e) => e.id === t), a = r.ggirResultsBundles.find((e) => e.fileId === t), o = a && d(a, r.ggirResultsBlobs.find((e) => e.fileId === t)), l = Gr(r, t, n), c = o ? await gr(t, o.imported, l, s.ggirClockSteps, i) : void 0, u = c?.markersByAlgo ?? l, m = c?.selected ?? new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), p = new Set([...m].filter(([, e]) => "invalid" === re(void 0, e).kind).map(([e]) => e)), g = r.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n), f = {
				review: g,
				bundleRevision: s.ggirBundleRevision
			}, h = o ? await Tr(o, m, s.ggirClockSteps, c?.edits, i, f) : void 0, _ = h ? await Yr(h, p, i) : void 0, w = r.ggirCorrectedValues.find((e) => e.fileId === t), v = g?.corrected && w && g.corrected.key === w.key ? {
				review: {
					edits: g.edits,
					bundleRevision: g.bundleRevision,
					...g.corrected.current ? { current: g.corrected.current } : {}
				},
				bundleRevision: s.ggirBundleRevision
			} : void 0;
			return {
				markersByAlgo: u,
				selected: m,
				bundle: _,
				sets: o && h ? await Promise.all(ve(o, w, w?.notApplied !== $r).map(async ({ set: e, bundle: t }) => t === o ? _ : Yr(await Tr(t, m, s.ggirClockSteps, h.edits, i, "corrected" === e ? v : void 0), p, i))) : [],
				invalidDates: p
			};
		}(e, t, n, i), r.set(s, a), a.catch(() => {
			r.get(s) === a && r.delete(s);
		});
	}
	return a;
}
let Jr;
async function Yr(e, t, n) {
	const { ggirCell: i, ggirNum: r } = await import("./ggir-results-types-BFP2YJll.js").then((e) => e.i), s = e.part2Reports?.["part2_daysummary.csv"], a = /* @__PURE__ */ new Map();
	if (s) for (let u = 0; u < s.rows; u++) {
		const e = i(s, C.ggir_id.header, u), t = xn(i(s, C.ggir_calendar_date.header, u));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		a.set(n, a.has(n) ? null : u);
	}
	const o = Rn(e.imported, "nights"), l = C.ggir_nonwear_perc_spt.header, c = async (t) => {
		const c = t.nights, u = Array.from({ length: c.rows }, (e, t) => {
			const n = i(c, C.ggir_id.header, t), l = a.get(JSON.stringify([null == n ? null : String(n), o(c, t, !1)])), u = s && null != l;
			return {
				id: n,
				day: l,
				valid: u ? i(s, C.ggir_day_valid_hours.header, l) : null,
				hours: u ? i(s, C.ggir_day_hours.header, l) : null,
				validNumber: u ? r(s, C.ggir_day_valid_hours.header, l) : null,
				hoursNumber: u ? r(s, C.ggir_day_hours.header, l) : null
			};
		}), d = u.flatMap((e, t) => null != e.validNumber && null != e.hoursNumber ? [{
			index: t,
			valid: e.validNumber,
			hours: e.hoursNumber
		}] : []), m = /* @__PURE__ */ new Map();
		if (d.length > 0) {
			const e = await $(n).ggirDayValidFractions(Float64Array.from(d, (e) => e.valid), Float64Array.from(d, (e) => e.hours));
			d.forEach((t, n) => m.set(t.index, e[n] ?? null));
		}
		const p = !c.columns.includes(l) && u.some((e, n) => !t.nightRecomputed[n]) ? await function(e, t) {
			const n = e.cleanedNightsCsv;
			if (!n) return Promise.resolve(void 0);
			if (Jr?.csv !== n || Jr.config !== e.configCsv) {
				const i = $(t).readGgirReportCsv(n, e.configCsv);
				Jr = {
					csv: n,
					config: e.configCsv,
					table: i
				}, i.catch(() => {
					Jr?.table === i && (Jr = void 0);
				});
			}
			return Jr.table;
		}(e, n) : void 0, g = u.map(({ id: e, day: n, valid: a, hours: o, validNumber: u, hoursNumber: d }, g) => {
			const f = m.get(g) ?? null, h = r(c, C.ggir_night.header, g), _ = Array.from({ length: t.days.rows }, (e, t) => t).find((e) => "WW" === i(t.days, "window", e) && r(t.days, "night_number", e) === h), w = p ? Array.from({ length: p.rows }, (e, t) => t).find((t) => String(i(p, C.ggir_id.header, t)) === String(e) && r(p, C.ggir_night.header, t) === h) : void 0, v = {
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
		}), f = D.ggir_review_night_extension, h = [.../* @__PURE__ */ new Set([
			...c.columns,
			...f.map((e) => C[e].header),
			...f.map((e) => C[e].header + "_missing_reason")
		])], _ = h.map((e) => {
			const t = f.find((t) => C[t].header + "_missing_reason" === e);
			if (t) return g.map((e) => e.reasons[t] ?? null);
			const n = f.find((t) => C[t].header === e);
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
		...e.personReports && (e.edits.length > 0 || t.size > 0) ? { personRecomputed: await On(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await c(e.imported),
		...e.current ? { current: await c(e.current) } : {}
	};
}
function Zr(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
async function Qr(e, t, n, { signal: i } = {}) {
	i?.throwIfAborted();
	const r = e.files.filter((e) => t.includes(e.id)), s = r.map((e) => e.id), a = /* @__PURE__ */ new Map();
	let o = !1;
	try {
		const t = await function(e, { fileIds: t, dateRange: n, signal: i }) {
			const r = zr(e, Cr.circadian, t);
			return async function(e, t, { dateRange: n, signal: i }) {
				const r = $(i), s = [];
				let a = 0;
				for (const o of e) {
					if (!o.id) continue;
					i?.throwIfAborted();
					const e = await t(o.id), l = [];
					for (const t of e.values()) {
						if (i?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
						a += 1;
						const e = wt(o.id, t);
						e && l.push(e);
					}
					if (0 === l.length) continue;
					const { request: c, transfer: u } = _t(l.map((e) => e.wire)), d = await r.computeCircadian(h(c, u));
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
			}(t.length > 0 ? r.files.filter((e) => null != e.id && t.includes(e.id)) : r.files, (e) => Zr(r, e), {
				dateRange: n,
				signal: i
			});
		}(e, {
			fileIds: s,
			dateRange: n.dateRange,
			signal: i
		});
		for (const e of t.daySummaries) a.set(`${e.fileId}|${e.date}`, {
			l5Hour: e.l5Hour,
			m10Hour: e.m10Hour
		});
	} catch (p) {
		if (p instanceof Br) throw p;
		if (i?.throwIfAborted(), o = !0, p instanceof DOMException && "AbortError" === p.name) throw p;
	}
	const l = await Xr(r[0].filename, "computing its sleep rows", () => async function(e, t, n, i, r, s, a) {
		const o = r && r.trim().length > 0 ? r.trim() : null, l = zr(s, Cr.sleep, e), u = l.files, d = qt(l.studySettings[0]?.extraSettings), p = oe(l.studySettings[0]?.extraSettings?.analysis_paradigm), g = (e.length > 0 ? u.filter((t) => null != t.id && e.includes(t.id)) : [...u]).sort((e, t) => e.filename.localeCompare(t.filename)), [f, h] = n ?? ["", ""], _ = [], w = [], v = [], y = [], b = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), T = async () => {
			for (const [e, t] of b) k.set(e, await Ji(e, t, _, a));
			b.clear();
		}, M = /* @__PURE__ */ new Map(), I = (e) => {
			const t = JSON.stringify(e);
			let n = M.get(t);
			return n || (n = $(a).exportNapAggregate(e), M.set(t, n)), n;
		}, S = await Promise.all(g.map((e) => qr(s, e.id, t, a)));
		for (const [x, R] of g.entries()) {
			if (a?.throwIfAborted(), x > 0 && g[x - 1].filename !== R.filename && await T(), !R.id) continue;
			const e = Zr(l, R.id), { bundle: t, markersByAlgo: r } = S[x], s = t?.edits ?? [], u = t ? _e(t.imported) : [], { zone: k } = await Qt(R, d, a), M = [.../* @__PURE__ */ new Set([...R.availableDates, ...u.map((e) => e.nightDate)])].sort(), A = n ? M.filter((e) => e >= f && e <= h) : M;
			if (t) {
				const e = new Set(he(t.imported).map((e) => e.night));
				for (const n of u) {
					if (e.has(n.night) || !A.includes(n.nightDate)) continue;
					const i = re(n, r.get(n.nightDate)?.[0]).kind;
					"scored" !== i && "invalid" !== i && v.push({
						file: "sleep_export.csv",
						row: 0,
						key: `${C.filename.header}=${R.filename}|${C.study_date.header}=${n.nightDate}`,
						column: `GGIR night ${String(n.night)}: ${fe(t.imported, n.night)}`,
						reason: "ggir_night_excluded"
					});
				}
			}
			const N = Z(e.values()), E = de(R, p) ? l.actiwareFileData.find((e) => e.fileId === R.id) ?? null : null, O = E?.actiwareIntervals ?? null, D = A.flatMap((e) => (r.get(e) ?? []).filter((e) => c(e) || e.nonwearMarkers.length > 0).map((t) => ({
				markers: t,
				sleepPeriods: O ? $i(O, e, t.isInvalidNight) : t.sleepMarkers,
				nonwear: t.nonwearMarkers.map((e) => ({
					start: e.startTimestamp,
					end: e.endTimestamp
				}))
			}))), j = [...e.keys()].sort().map((t) => e.get(t)), F = j.map((e) => H(e).timestamps), P = Wi.flatMap((e) => {
				if (!j.some((t) => t[e])) return [];
				const t = [], n = [];
				for (const [i, r] of j.entries()) {
					const s = r[e];
					if (!s) continue;
					const a = new Float64Array(s), o = F[i];
					for (let e = 0; e < Math.min(a.length, o.length); e++) t.push(o[e]), n.push(a[e]);
				}
				return [{
					field: e,
					timestamps: Float64Array.from(t),
					values: Float64Array.from(n)
				}];
			}), B = 0 === D.length ? [] : await $(a).exportFileNightFigures(D.map(({ sleepPeriods: e, nonwear: t }) => ({
				periods: e.map((e) => ({
					start: e.onsetTimestamp,
					end: e.offsetTimestamp
				})),
				nonwear: t
			})), P), W = /* @__PURE__ */ new Map();
			let z = 0;
			for (const n of D) W.set(n.markers, {
				...n,
				figures: B.slice(z, z + n.sleepPeriods.length)
			}), z += n.sleepPeriods.length;
			for (const n of A) {
				a?.throwIfAborted();
				const l = r.get(n);
				if (l && 0 !== l.length) for (const r of l) {
					const l = W.get(r);
					if (!l) continue;
					const { sleepPeriods: c, figures: d } = l, p = R.participantId ?? null, g = R.id, f = r.algorithm ?? null, h = r.username ?? null, v = r.needsConsensus, T = r.notes, M = e.get(n), S = await L(n, R.navigationFacts, $(a)), A = e.get(S), x = {
						fileId: g,
						filename: R.filename,
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
						detectionRule: r.detectionRule ?? null,
						periodGuider: r.periodGuider ?? null,
						...Hi(r.sleepPeriodDetectionConfig),
						algorithmVersion: r.algorithmVersion ?? null,
						verificationStatus: null,
						studyId: o,
						dstTransition: await Re(k, n, void 0, $(a))
					}, D = await I(c.filter((e) => e.markerType === m.NAP).map((e) => ({
						start: e.onsetTimestamp,
						end: e.offsetTimestamp
					}))), j = i?.get(`${String(g)}|${n}`), F = {
						l5Hour: j?.l5Hour ?? null,
						m10Hour: j?.m10Hour ?? null,
						napCount: D.napCount,
						totalNapMinutes: D.napCount > 0 ? D.totalNapMinutes : null
					}, B = N(f), z = Ut(M, B), G = `${R.filename}\0${p ?? ""}\0${x.algorithm ?? ""}\0${x.detectionRule ?? ""}`, U = b.get(G) ?? [];
					U.push({
						date: n,
						epochLengthSeconds: R.epochLengthSeconds || 60,
						timestamps: z.timestamps,
						states: z.algorithmResults,
						stale: "stale" === B.status
					}), b.set(G, U);
					const V = H(M), K = await un(e, n, B, {
						signal: a,
						nextDate: S
					}), q = d.map(({ means: e }) => new Map(P.map(({ field: t }, n) => [t, e[n] ?? null]))), J = async (e, i, o) => {
						let l = null;
						const c = u.find((e) => e.nightDate === n), p = t && c && e.markerType === m.MAIN_SLEEP && "invalid" !== re(c, r).kind, g = c && s.some((e) => e.night === c.night), f = Ui(null), h = {};
						let _ = "not_applicable_to_row";
						const w = O && null != e.onsetTimestamp && null != e.offsetTimestamp ? {
							onset: e.onsetTimestamp,
							offset: e.offsetTimestamp
						} : null, v = w ? O.find((e) => "rest" === e.kind && e.startTimestamp <= w.onset && e.endTimestamp >= w.offset) ?? null : null;
						if (w) {
							_ = "not_computed_for_export";
							const e = (e, t) => t ? E?.actiwareStatistics?.find((n) => n.kind === e && Math.round(n.startTimestamp) === Math.round(t.startTimestamp) && Math.round(n.endTimestamp) === Math.round(t.endTimestamp)) ?? null : null, t = {
								rest: e("rest", v),
								sleep: e("sleep", {
									startTimestamp: w.onset,
									endTimestamp: w.offset
								})
							};
							for (const [n, i, r, s] of Ki) {
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
								const r = V.epochSec ?? (R.epochLengthSeconds || 60), s = await qi(n, i, t, e.onsetTimestamp, e.offsetTimestamp, r, a);
								l = s.metrics, l || s.error || (_ = "no_valid_epochs"), s.error && (_ = "not_computed_for_export"), s.error && 0 === y.length && y.push({
									component: "metric_computation",
									code: "unavailable",
									message: "Metric computation failed for at least one selected period; those rows carry no numerics."
								});
							}
						}
						if (p) {
							_ = "channel_unavailable";
							const e = g ? t.current?.nights : t.imported.nights, n = e ? Oe(e, C.ggir_night.header, c.night) : -1;
							for (const [t, i, r, s] of Vi) {
								const a = e ? $e(e, C[i].header, n) : null;
								f[t] = null == a ? null : a * s, h[r] = null == a ? g ? "not_computed_for_export" : "source_reported_missing" : void 0;
							}
						}
						(p || w || l && !("averageAwakeningLengthMinutes" in l)) && (h.average_awakening_length_minutes = "not_computed_for_export");
						const { figures: b } = d[o], k = Boolean(e.onsetTimestamp && e.offsetTimestamp), T = (e) => k ? q[o].get(e) ?? null : null, I = {
							...x,
							...F,
							periodIndex: e.markerIndex,
							markerType: e.markerType,
							onsetTimestamp: e.onsetTimestamp,
							offsetTimestamp: e.offsetTimestamp,
							...p || w ? f : Ui(l),
							inBedTimestamp: v?.startTimestamp ?? null,
							outOfBedTimestamp: v?.endTimestamp ?? null,
							metricMissingReason: _,
							isInvalidNight: i,
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
							mean_temperature_c: S(I.meanTemperature, Boolean(M?.temperature || A?.temperature)),
							mean_white_light_lux: S(I.meanWhiteLight, Boolean(M?.lux || A?.lux)),
							mean_red_light: S(I.meanRedLight, Boolean(M?.redLight || A?.redLight)),
							mean_green_light: S(I.meanGreenLight, Boolean(M?.greenLight || A?.greenLight)),
							mean_blue_light: S(I.meanBlueLight, Boolean(M?.blueLight || A?.blueLight))
						}, I.derivedMissingReasons = {
							...h,
							l5_hour: null == I.l5Hour ? j ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							m10_hour: null == I.m10Hour ? j ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							sleep_midpoint_time: null == I.sleepMidpointTimestamp ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							sleep_midpoint_hour: null == I.sleepMidpointHour ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							valid_wear_minutes: null == I.validWearMinutes ? k ? "no_valid_epochs" : "not_applicable_to_row" : void 0
						}, I;
					};
					if (r.isInvalidNight) {
						_.push({
							...x,
							...F,
							periodIndex: null,
							markerType: zi,
							onsetTimestamp: null,
							offsetTimestamp: null,
							...Ui(null),
							isInvalidNight: !0,
							sleepMidpointTimestamp: null,
							sleepMidpointHour: null,
							validWearMinutes: null
						});
						for (const [e, t] of c.entries()) _.push(await J(t, !0, e));
					} else for (const [e, t] of c.entries()) _.push(await J(t, !1, e));
					for (const e of r.nonwearMarkers) w.push({
						...x,
						...F,
						periodIndex: e.markerIndex ?? 0,
						markerType: Gi,
						onsetTimestamp: e.startTimestamp,
						offsetTimestamp: e.endTimestamp,
						...Ui(null),
						isInvalidNight: !1,
						sleepMidpointTimestamp: null,
						sleepMidpointHour: null,
						validWearMinutes: null
					});
				}
			}
		}
		await T(), _.sort(Yi), w.sort(Yi);
		const A = await async function(e, t) {
			const n = e.filter((e) => e.markerType === m.MAIN_SLEEP), i = /* @__PURE__ */ new Map();
			for (const o of n) {
				const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = i.get(e);
				t ? t.push(o) : i.set(e, [o]);
			}
			const r = [...i], s = await $(t).summarizeExportGroups(r.map(([, e]) => e.map((e) => ({
				study_date: e.studyDate,
				total_nap_minutes: e.totalNapMinutes,
				values: Zi.map(([, t]) => e[t])
			})))), a = r.map(([e, t], n) => {
				const [i, r, a, o] = e.split("\0"), l = s[n], c = Object.fromEntries(Zi.map(([e], t) => [e, l.means[t] ?? null]));
				return {
					filename: i,
					participantId: r,
					algorithm: a,
					detectionRule: o,
					nNights: l.nNights,
					...c,
					meanTemperatureMissingReason: null == c.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
					metricMissingReasons: Object.fromEntries(Zi.map(([e, n]) => {
						const i = Qi[e], r = Vi.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : i), s = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[r] ?? e.metricMissingReason).find(Boolean);
						return [i, null == c[e] ? s : void 0];
					})),
					sleepRegularityIndex: null,
					meanTotalNapMinutes: l.meanTotalNapMinutes,
					studyId: t[0]?.studyId ?? null
				};
			});
			return a.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), a;
		}(_, a);
		for (const c of A) {
			const e = `${c.filename}\0${c.participantId}\0${c.algorithm}\0${c.detectionRule}`, t = k.get(e);
			c.sleepRegularityIndex = t?.sri ?? null, c.sleepRegularityMissingReason = t?.sriMissingReason ?? (t ? void 0 : "not_computed_for_export");
		}
		return {
			sleepRows: _,
			nonwearRows: w,
			summaryRows: A,
			degradations: y,
			nightReasons: v
		};
	}(s, n.username, n.dateRange, a, n.studyId, e, i)), u = await Xr(r[0].filename, "drawing its visual report", async () => {
		const t = [];
		for (const s of r) t.push(await Zn({
			...n,
			snapshot: e
		}, s, i));
		return t;
	}), { generateLocalPhysicalActivityExportRows: d } = await import("./local-physical-activity-export-BnSYmYbq.js");
	return {
		part: l,
		physicalActivityRows: await d(e, s, n.dateRange, {
			username: n.username,
			cutpointOverrides: n.physicalActivity.cutpointOverrides,
			maskPolicy: n.physicalActivity.maskPolicy,
			choiAxis: n.physicalActivity.choiAxis,
			exportedAt: n.exportedAt,
			...i ? { signal: i } : {}
		}),
		eventMarkerRows: await er(s, n.dateRange, e, n.username, i),
		circadianDegraded: o,
		reports: u
	};
}
async function Xr(e, t, n) {
	try {
		return await n();
	} catch (i) {
		if (i instanceof DOMException && "AbortError" === i.name) throw i;
		throw new gn(e, t, i);
	}
}
g({
	async group(e, t, n) {
		try {
			return { result: await Qr(Pr(t), e, n) };
		} catch (i) {
			if (i instanceof gn) return { failure: i.wire };
			throw i;
		}
	},
	deflate(e, t) {
		const n = function(e, t) {
			return {
				bytes: tr(e, t),
				crc: ir(e)
			};
		}(e, t);
		return h(n, [n.bytes.buffer]);
	}
});
export { _t as A, Qn as C, on as D, an as E, Qt as O, wi as S, sn as T, bi as _, sr as a, oi as b, Di as c, Oi as d, Ci as f, ni as g, Bi as h, Hr as i, wt as j, Jt as k, ji as l, Fi as m, zr as n, wr as o, Pi as p, Zr as r, Ti as s, Cr as t, $i as u, ti as v, ln as w, vi as x, yi as y };
