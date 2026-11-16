import { D as e, Dt as t, Gt as n, It as r, Jt as i, Kt as a, Pn as s, St as o, a as l, h as c, jn as u, l as d, qt as m, rn as p, y as g } from "./schema-B6UkEiVJ.js";
import { a as f, r as h, s as _ } from "./workers-CrU4fDAf.js";
import { H as w, T as v, et as y, it as b, k, nt as T, rt as M, t as S } from "./workspace-db-DU4CzwX1.js";
import { s as x } from "./content-hash-CZ-UAlQR.js";
import { n as I, o as A, r as R } from "./background-jobs-DLr2X4eX.js";
import { C as N, S as E, a as $, b as C, u as O, w as D, x as j, y as L } from "./epoch-utils-DKhxpU_X.js";
import { a as F } from "./project-revision-CT6PGNkq.js";
import { $t as B, Gt as P, K as W, Kt as z, P as G, Qt as V, Vt as H, an as U, ft as q, in as K, k as J, x as Y } from "./store-BrZppDwj.js";
import { L as Z, X as Q, d as X, f as ee, v as te } from "./night-session-registry-DJqsXW29.js";
import { $ as ne, C as re, N as ie, P as ae, Z as se, m as oe, o as le, r as ce, tt as ue } from "./per-source-defaults-BIydRzBy.js";
import { E as de, F as me, N as pe, c as ge } from "./local-nonwear-unified-QTOZtx7w.js";
import { r as fe } from "./physical-activity-cutpoint-presets-D3tv7-UR.js";
import { h as he, m as _e, v as we } from "./diary-local-import-contract-BWll-Z5M.js";
import { _ as ve, c as ye, d as be, f as ke, i as Te, l as Me, r as Se } from "./ggir-results-import-7vTdWIOr.js";
import { n as xe, r as Ie, t as Ae } from "./ggir-results-types-zXnmQuny.js";
var Re = Uint8Array, Ne = Uint16Array, Ee = Int32Array, $e = new Re([
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
]), Ce = new Re([
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
]), Oe = new Re([
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
]), De = function(e, t) {
	for (var n = new Ne(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
	var i = new Ee(n[30]);
	for (r = 1; r < 30; ++r) for (var a = n[r]; a < n[r + 1]; ++a) i[a] = a - n[r] << 5 | r;
	return {
		b: n,
		r: i
	};
}, je = De($e, 2), Le = je.b, Fe = je.r;
Le[28] = 258, Fe[258] = 28;
for (var Be = De(Ce, 0), Pe = (Be.b, Be.r), We = new Ne(32768), ze = 0; ze < 32768; ++ze) {
	var Ge = (43690 & ze) >> 1 | (21845 & ze) << 1;
	Ge = (61680 & (Ge = (52428 & Ge) >> 2 | (13107 & Ge) << 2)) >> 4 | (3855 & Ge) << 4, We[ze] = ((65280 & Ge) >> 8 | (255 & Ge) << 8) >> 1;
}
var Ve = function(e, t, n) {
	for (var r = e.length, i = 0, a = new Ne(t); i < r; ++i) e[i] && ++a[e[i] - 1];
	var s, o = new Ne(t);
	for (i = 1; i < t; ++i) o[i] = o[i - 1] + a[i - 1] << 1;
	if (n) {
		s = new Ne(1 << t);
		var l = 15 - t;
		for (i = 0; i < r; ++i) if (e[i]) for (var c = i << 4 | e[i], u = t - e[i], d = o[e[i] - 1]++ << u, m = d | (1 << u) - 1; d <= m; ++d) s[We[d] >> l] = c;
	} else for (s = new Ne(r), i = 0; i < r; ++i) e[i] && (s[i] = We[o[e[i] - 1]++] >> 15 - e[i]);
	return s;
}, He = new Re(288);
for (ze = 0; ze < 144; ++ze) He[ze] = 8;
for (ze = 144; ze < 256; ++ze) He[ze] = 9;
for (ze = 256; ze < 280; ++ze) He[ze] = 7;
for (ze = 280; ze < 288; ++ze) He[ze] = 8;
var Ue = new Re(32);
for (ze = 0; ze < 32; ++ze) Ue[ze] = 5;
var qe = Ve(He, 9, 0), Ke = Ve(Ue, 5, 0), Je = function(e) {
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
], Ze = function(e, t, n) {
	var r = new Error(t || Ye[e]);
	if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, Ze), !n) throw r;
	return r;
}, Qe = function(e, t, n) {
	n <<= 7 & t;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8;
}, Xe = function(e, t, n) {
	n <<= 7 & t;
	var r = t / 8 | 0;
	e[r] |= n, e[r + 1] |= n >> 8, e[r + 2] |= n >> 16;
}, et = function(e, t) {
	for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({
		s: r,
		f: e[r]
	});
	var i = n.length, a = n.slice();
	if (!i) return {
		t: ot,
		l: 0
	};
	if (1 == i) {
		var s = new Re(n[0].s + 1);
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
	var o = n[0], l = n[1], c = 0, u = 1, d = 2;
	for (n[0] = {
		s: -1,
		f: o.f + l.f,
		l: o,
		r: l
	}; u != i - 1;) o = n[n[c].f < n[d].f ? c++ : d++], l = n[c != u && n[c].f < n[d].f ? c++ : d++], n[u++] = {
		s: -1,
		f: o.f + l.f,
		l: o,
		r: l
	};
	var m = a[0].s;
	for (r = 1; r < i; ++r) a[r].s > m && (m = a[r].s);
	var p = new Ne(m + 1), g = tt(n[u - 1], p, 0);
	if (g > t) {
		r = 0;
		var f = 0, h = g - t, _ = 1 << h;
		for (a.sort(function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		}); r < i; ++r) {
			var w = a[r].s;
			if (!(p[w] > t)) break;
			f += _ - (1 << g - p[w]), p[w] = t;
		}
		for (f >>= h; f > 0;) {
			var v = a[r].s;
			p[v] < t ? f -= 1 << t - p[v]++ - 1 : ++r;
		}
		for (; r >= 0 && f; --r) {
			var y = a[r].s;
			p[y] == t && (--p[y], ++f);
		}
		g = t;
	}
	return {
		t: new Re(p),
		l: g
	};
}, tt = function(e, t, n) {
	return -1 == e.s ? Math.max(tt(e.l, t, n + 1), tt(e.r, t, n + 1)) : t[e.s] = n;
}, nt = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new Ne(++t), r = 0, i = e[0], a = 1, s = function(e) {
		n[r++] = e;
	}, o = 1; o <= t; ++o) if (e[o] == i && o != t) ++a;
	else {
		if (!i && a > 2) {
			for (; a > 138; a -= 138) s(32754);
			a > 2 && (s(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
		} else if (a > 3) {
			for (s(i), --a; a > 6; a -= 6) s(8304);
			a > 2 && (s(a - 3 << 5 | 8208), a = 0);
		}
		for (; a--;) s(i);
		a = 1, i = e[o];
	}
	return {
		c: n.subarray(0, r),
		n: t
	};
}, rt = function(e, t) {
	for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
	return n;
}, it = function(e, t, n) {
	var r = n.length, i = Je(t + 2);
	e[i] = 255 & r, e[i + 1] = r >> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
	for (var a = 0; a < r; ++a) e[i + a + 4] = n[a];
	return 8 * (i + 4 + r);
}, at = function(e, t, n, r, i, a, s, o, l, c, u) {
	Qe(t, u++, n), ++i[256];
	for (var d = et(i, 15), m = d.t, p = d.l, g = et(a, 15), f = g.t, h = g.l, _ = nt(m), w = _.c, v = _.n, y = nt(f), b = y.c, k = y.n, T = new Ne(19), M = 0; M < w.length; ++M) ++T[31 & w[M]];
	for (M = 0; M < b.length; ++M) ++T[31 & b[M]];
	for (var S = et(T, 7), x = S.t, I = S.l, A = 19; A > 4 && !x[Oe[A - 1]]; --A);
	var R, N, E, $, C = c + 5 << 3, O = rt(i, He) + rt(a, Ue) + s, D = rt(i, m) + rt(a, f) + s + 14 + 3 * A + rt(T, x) + 2 * T[16] + 3 * T[17] + 7 * T[18];
	if (l >= 0 && C <= O && C <= D) return it(t, u, e.subarray(l, l + c));
	if (Qe(t, u, 1 + (D < O)), u += 2, D < O) {
		R = Ve(m, p, 0), N = m, E = Ve(f, h, 0), $ = f;
		var j = Ve(x, I, 0);
		for (Qe(t, u, v - 257), Qe(t, u + 5, k - 1), Qe(t, u + 10, A - 4), u += 14, M = 0; M < A; ++M) Qe(t, u + 3 * M, x[Oe[M]]);
		u += 3 * A;
		for (var L = [w, b], F = 0; F < 2; ++F) {
			var B = L[F];
			for (M = 0; M < B.length; ++M) {
				var P = 31 & B[M];
				Qe(t, u, j[P]), u += x[P], P > 15 && (Qe(t, u, B[M] >> 5 & 127), u += B[M] >> 12);
			}
		}
	} else R = qe, N = He, E = Ke, $ = Ue;
	for (M = 0; M < o; ++M) {
		var W = r[M];
		if (W > 255) {
			Xe(t, u, R[257 + (P = W >> 18 & 31)]), u += N[P + 257], P > 7 && (Qe(t, u, W >> 23 & 31), u += $e[P]);
			var z = 31 & W;
			Xe(t, u, E[z]), u += $[z], z > 3 && (Xe(t, u, W >> 5 & 8191), u += Ce[z]);
		} else Xe(t, u, R[W]), u += N[W];
	}
	return Xe(t, u, R[256]), u + N[256];
}, st = new Ee([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), ot = new Re(0), lt = function() {
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
		this.ondata(function(e, t, n, r, i) {
			if (!i && (i = { l: 1 }, t.dictionary)) {
				var a = t.dictionary.subarray(-32768), s = new Re(a.length + e.length);
				s.set(a), s.set(e, a.length), e = s, i.w = a.length;
			}
			return function(e, t, n, r, i, a) {
				var s = a.z || e.length, o = new Re(r + s + 5 * (1 + Math.ceil(s / 7e3)) + i), l = o.subarray(r, o.length - i), c = a.l, u = 7 & (a.r || 0);
				if (t) {
					u && (l[0] = a.r >> 3);
					for (var d = st[t - 1], m = d >> 13, p = 8191 & d, g = (1 << n) - 1, f = a.p || new Ne(32768), h = a.h || new Ne(g + 1), _ = Math.ceil(n / 3), w = 2 * _, v = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, y = new Ee(25e3), b = new Ne(288), k = new Ne(32), T = 0, M = 0, S = a.i || 0, x = 0, I = a.w || 0, A = 0; S + 2 < s; ++S) {
						var R = v(S), N = 32767 & S, E = h[R];
						if (f[N] = E, h[R] = N, I <= S) {
							var $ = s - S;
							if ((T > 7e3 || x > 24576) && ($ > 423 || !c)) {
								u = at(e, l, 0, y, b, k, M, x, A, S - A, u), x = T = M = 0, A = S;
								for (var C = 0; C < 286; ++C) b[C] = 0;
								for (C = 0; C < 30; ++C) k[C] = 0;
							}
							var O = 2, D = 0, j = p, L = N - E & 32767;
							if ($ > 2 && R == v(S - L)) for (var F = Math.min(m, $) - 1, B = Math.min(32767, S), P = Math.min(258, $); L <= B && --j && N != E;) {
								if (e[S + O] == e[S + O - L]) {
									for (var W = 0; W < P && e[S + W] == e[S + W - L]; ++W);
									if (W > O) {
										if (O = W, D = L, W > F) break;
										var z = Math.min(L, W - 2), G = 0;
										for (C = 0; C < z; ++C) {
											var V = S - L + C & 32767, H = V - f[V] & 32767;
											H > G && (G = H, E = V);
										}
									}
								}
								L += (N = E) - (E = f[N]) & 32767;
							}
							if (D) {
								y[x++] = 268435456 | Fe[O] << 18 | Pe[D];
								var U = 31 & Fe[O], q = 31 & Pe[D];
								M += $e[U] + Ce[q], ++b[257 + U], ++k[q], I = S + O, ++T;
							} else y[x++] = e[S], ++b[e[S]];
						}
					}
					for (S = Math.max(S, I); S < s; ++S) y[x++] = e[S], ++b[e[S]];
					u = at(e, l, c, y, b, k, M, x, A, S - A, u), c || (a.r = 7 & u | l[u / 8 | 0] << 3, u -= 7, a.h = h, a.p = f, a.i = S, a.w = I);
				} else {
					for (S = a.w || 0; S < s + c; S += 65535) {
						var K = S + 65535;
						K >= s && (l[u / 8 | 0] = c, K = s), u = it(l, u + 1, e.subarray(S, K));
					}
					a.i = s;
				}
				return function(e, t, n) {
					return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new Re(e.subarray(t, n));
				}(o, 0, r + Je(u) + i);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? i.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, 0, 0, i);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || Ze(5), this.s.l && Ze(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var r = new Re(-32768 & n);
				r.set(this.b.subarray(0, this.s.z)), this.b = r;
			}
			var i = this.b.length - this.s.z;
			this.b.set(e.subarray(0, i), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(i), 32768), this.s.z = e.length - i + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = ot);
	}, e.prototype.flush = function(e) {
		if (this.ondata || Ze(5), this.s.l && Ze(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new Re(6);
			t[0] = this.s.r >> 3;
			var n = it(t, this.s.r, ot);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), ct = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	ct.decode(ot, { stream: !0 });
} catch (Oa) {}
function ut(e) {
	return e ? new Float64Array(e) : /* @__PURE__ */ new Float64Array();
}
function dt(e) {
	const t = [
		"timestamps",
		"activity",
		"sleep_scores"
	].flatMap((t) => {
		const n = new Uint32Array(e.length + 1);
		for (const [s, o] of e.entries()) n[s + 1] = n[s] + (o[t]?.length ?? 0);
		const r = "sleep_scores" === t ? Uint8Array : Float64Array, i = e[0]?.[t], a = 1 === e.length && i instanceof r ? i : new r(n[e.length]);
		if (a !== i) for (const [s, o] of e.entries()) a.set(o[t] ?? [], n[s]);
		return [a, n];
	});
	return {
		request: [JSON.stringify({ days: e.map(({ timestamps: e, activity: t, sleep_scores: n, ...r }) => r) }), ...t],
		transfer: t.filter((t) => !e.some((e) => t === e.timestamps || t === e.activity)).map((e) => e.buffer)
	};
}
function mt(e, t) {
	const n = function(e) {
		const t = ut(e.ggirTimestamps), n = ut(e.ggirEnmo);
		if (t.length > 0 && n.length > 0 && function(e) {
			for (const t of e) if (Number.isFinite(t)) return !0;
			return !1;
		}(n)) return {
			timestamps: t,
			signal: n,
			source: "ggir_enmo"
		};
		const r = new Float64Array(e.timestamps), i = new Float64Array(e.vectorMagnitude);
		return r.length > 0 && i.length > 0 ? {
			timestamps: r,
			signal: i,
			source: "vector_magnitude"
		} : null;
	}(t);
	if (!n || n.timestamps.length < 2) return null;
	const { timestamps: r, signal: i } = n, a = r[1] - r[0];
	if (!(a > 0 && Number.isInteger(a))) return null;
	for (let s = 1; s < r.length; s++) if (r[s] - r[s - 1] !== a) return null;
	return {
		wire: {
			id: `${String(e)}:${t.date}`,
			series_id: String(e),
			analysis_date: t.date,
			epoch_length_seconds: a,
			timestamps: r,
			activity: i
		},
		source: n.source
	};
}
const pt = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], gt = ["under-series", "over-series"], ft = ["full-resolution-v1", "min-max-gap-envelope-v1"], ht = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function _t(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function wt(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? _t(t, "expected an object") : e;
}
function vt(e, t) {
	return Array.isArray(e) ? e : _t(t, "expected an array");
}
function yt(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : _t(t, "expected a finite number");
}
function bt(e, t) {
	const n = yt(e, t);
	return n <= 0 ? _t(t, "expected a positive number") : n;
}
function kt(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : _t(t, "expected a safe integer");
}
function Tt(e, t) {
	const n = kt(e, t);
	return n < 0 ? _t(t, "expected a non-negative safe integer") : n;
}
function Mt(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? _t(t, "expected a boolean") : { [n]: e };
}
function St(e, t) {
	return "string" != typeof e || 0 === e.length ? _t(t, "expected a non-empty string") : e;
}
function xt(e, t) {
	return "string" == typeof e && pt.includes(e) ? e : _t(t, "expected a supported tone");
}
function It(e, t) {
	return "string" == typeof e && gt.includes(e) ? e : _t(t, "expected a supported phase");
}
function At(e, t) {
	const n = wt(e, t), r = yt(n.min, `${t}.min`), i = yt(n.max, `${t}.max`);
	return i <= r || !Number.isFinite(i - r) ? _t(t, "expected a finite ascending range") : {
		min: r,
		max: i
	};
}
function Rt(e, t) {
	const n = `series[${t}]`, r = wt(e, n), i = vt(r.points, `${n}.points`);
	let a = Number.NEGATIVE_INFINITY;
	const s = (e) => `${n}.points[${e}]`, o = i.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return _t(s(t), "expected an object");
		const n = e, r = n.timestamp;
		if ("number" != typeof r || !Number.isFinite(r)) return _t(`${s(t)}.timestamp`, "expected a finite number");
		if (r <= a) return _t(`${s(t)}.timestamp`, "expected strictly ascending timestamps");
		a = r;
		const i = n.value;
		return null === i || "number" == typeof i && Number.isFinite(i) ? {
			timestamp: r,
			value: i
		} : _t(`${s(t)}.value`, "expected a finite number");
	});
	return {
		tone: xt(r.tone, `${n}.tone`),
		strokeWidth: bt(r.strokeWidth, `${n}.strokeWidth`),
		valueDomain: At(r.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function Nt(e, t) {
	const n = `overlays[${t}]`, r = wt(e, n), i = {
		phase: It(r.phase, `${n}.phase`),
		order: kt(r.order, `${n}.order`),
		tone: xt(r.tone, `${n}.tone`)
	};
	if ("interval" === r.kind) {
		const e = yt(r.startTimestamp, `${n}.startTimestamp`), t = yt(r.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? _t(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...i,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === r.kind ? {
		kind: "threshold",
		...i,
		value: yt(r.value, `${n}.value`),
		...Mt(r.draggable, `${n}.draggable`, "draggable"),
		...Mt(r.selected, `${n}.selected`, "selected"),
		...Mt(r.handle, `${n}.handle`, "handle"),
		...void 0 === r.label ? {} : { label: St(r.label, `${n}.label`) }
	} : "instant" === r.kind ? {
		kind: "instant",
		...i,
		timestamp: yt(r.timestamp, `${n}.timestamp`)
	} : _t(`${n}.kind`, "expected interval, threshold, or instant");
}
function Et(e, t, n) {
	const r = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(r) ? r : _t("projection", "expected a finite pixel coordinate");
}
function $t(e, t, n) {
	const r = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(r) ? r : _t("projection", "expected a finite pixel coordinate");
}
function Ct(e) {
	if (!(e < 1e9 && e > -1e9)) {
		const t = Number(e.toFixed(2));
		return Object.is(t, -0) ? "0" : String(t);
	}
	const t = e.toFixed(2);
	let n = t.length;
	for (; 48 === t.charCodeAt(n - 1);) n -= 1;
	46 === t.charCodeAt(n - 1) && (n -= 1);
	const r = n === t.length ? t : t.slice(0, n);
	return "-0" === r ? "0" : r;
}
function Ot(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Dt(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, r = t.plotArea.height, i = ht[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const a = Ot(Et(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), s = Ot(Et(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${Ct(a)}" y="0" width="${Ct(Math.max(1, s - a))}" height="${Ct(r)}" fill="${i}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const a = $t(e.value, t.valueDomain, r), s = !0 === e.selected, o = s ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${s ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${Ct(a)}" x2="${Ct(n)}" y2="${Ct(a)}" stroke="${i}" stroke-width="${s ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const a = Et(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${Ct(a)}" y1="0" x2="${Ct(a)}" y2="${Ct(r)}" stroke="${i}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function jt(e) {
	const t = function(e) {
		const t = wt(e, "scene");
		if (2 !== t.version) return _t("version", "expected 2");
		const n = wt(t.grid, "grid"), r = {
			strategy: (i = n.strategy, "string" == typeof i && ft.includes(i) ? i : _t("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: Tt(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: Tt(n.renderedPointCount, "grid.renderedPointCount")
		};
		var i;
		if (r.renderedPointCount > r.sourcePointCount) return _t("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === r.strategy && r.renderedPointCount !== r.sourcePointCount) return _t("grid", "full-resolution strategy requires equal point counts");
		const a = wt(t.size, "size"), s = {
			width: bt(a.width, "size.width"),
			height: bt(a.height, "size.height")
		}, o = wt(t.plotArea, "plotArea"), l = {
			left: yt(o.left, "plotArea.left"),
			top: yt(o.top, "plotArea.top"),
			width: bt(o.width, "plotArea.width"),
			height: bt(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > s.width || l.top + l.height > s.height) return _t("plotArea", "expected bounds contained by size");
		const c = At(t.viewport, "viewport"), u = At(t.valueDomain, "valueDomain"), d = vt(t.series, "series").map(Rt);
		if (0 === d.length && 0 !== r.renderedPointCount) return _t("grid.renderedPointCount", "expected zero when series is empty");
		const m = d[0]?.points.map((e) => e.timestamp) ?? [];
		for (let h = 0; h < d.length; h++) {
			const e = d[h]?.points ?? [];
			if (e.length !== r.renderedPointCount) return _t(`series[${h}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== m[t]) return _t(`series[${h}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const p = vt(t.overlays, "overlays").map(Nt), g = null === t.cursorTimestamp ? null : yt(t.cursorTimestamp, "cursorTimestamp");
		let f = null;
		if (null !== t.selection) {
			const e = wt(t.selection, "selection"), n = yt(e.startTimestamp, "selection.startTimestamp"), r = yt(e.endTimestamp, "selection.endTimestamp");
			if (r <= n) return _t("selection", "expected a half-open ascending interval");
			f = {
				startTimestamp: n,
				endTimestamp: r
			};
		}
		return {
			version: 2,
			grid: r,
			size: s,
			plotArea: l,
			viewport: c,
			valueDomain: u,
			series: d,
			overlays: p,
			cursorTimestamp: g,
			selection: f
		};
	}(e), n = Ct(t.size.width), r = Ct(t.size.height), i = Ct(t.plotArea.width), a = Ct(t.plotArea.height), s = Dt(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
		let r = "", i = !1;
		const a = {
			left: 0,
			width: n.plotArea.width
		}, s = /* @__PURE__ */ new Map();
		for (const o of e.points) {
			if (null == o.value) {
				i = !1;
				continue;
			}
			const t = Et(o.timestamp, n.viewport, a);
			let l = s.get(o.value);
			void 0 === l && (l = Ct($t(o.value, e.valueDomain, n.plotArea.height)), s.set(o.value, l)), r += `${i ? "L" : "M"}${Ct(t)} ${l}`, i = !0;
		}
		return 0 === r.length ? "" : `<path data-series-index="${t}" d="${r}" fill="none" stroke="${ht[e.tone]}" stroke-width="${Ct(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = Dt(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${r}" viewBox="0 0 ${n} ${r}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${r}" fill="#ffffff"/><svg x="${Ct(t.plotArea.left)}" y="${Ct(t.plotArea.top)}" width="${i}" height="${a}" viewBox="0 0 ${i} ${a}" overflow="hidden"><rect x="0" y="0" width="${i}" height="${a}" fill="#ffffff"/>${s}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = Ot(Et(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), r = Ot(Et(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${Ct(n)}" y="0" width="${Ct(Math.max(1, r - n))}" height="${Ct(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = Et(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${Ct(n)}" y1="0" x2="${Ct(n)}" y2="${Ct(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${Ct(t.plotArea.left)}" y="${Ct(t.plotArea.top)}" width="${i}" height="${a}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
async function Lt(e, t, n, r, i = 60, a, s) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == r || n >= r) return null;
	const o = new Uint8Array(e.length);
	for (let c = 0; c < e.length; c++) o[c] = 1 === e[c] ? 1 : 0;
	const l = await Ft(o, a && a.length === e.length ? a : new Float64Array(e.length), t, n, r, i, s);
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
async function Ft(e, t, n, r, i, a = 60, s) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == r || null == i || r >= i) return null;
	const o = await async function(e, t, n, r) {
		const i = await I(r).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === i.length ? {
			startIdx: i[0],
			endIdx: i[1]
		} : null;
	}(n, r, i, s);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, c = o.endIdx + 1, u = e instanceof Uint8Array ? e.slice(l, c) : new Uint8Array(e.slice(l, c)), d = t instanceof Float64Array ? t.slice(l, c) : Float64Array.from(t.slice(l, c)), m = await I(s).computeSleepMetrics(u, d, a), p = n[l] ?? 0, g = n[c - 1] ?? p, f = null != m.firstSleepEpochIdx ? n[l + m.firstSleepEpochIdx] ?? p : p, h = null != m.lastSleepEpochIdx ? n[l + m.lastSleepEpochIdx] ?? g : g;
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
function Bt(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const r = H(e), i = Array.from(r.timestamps);
	if (r.ggir) return {
		timestamps: i,
		algorithmResults: r.sleepScores,
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
		timestamps: i,
		algorithmResults: null,
		activity: s,
		scoresStale: n
	};
	const l = O(e, t);
	return {
		timestamps: i,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: s,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
function Pt(e) {
	return JSON.stringify([...new Set(e ?? [])]);
}
function Wt(e, t) {
	if (0 === e.length) return null;
	if (e.length === t.timestamps.length && t.timestamps.length > 0) return t.timestamps;
	const n = t.ggirTimestamps;
	return n && e.length === n.length && n.length > 0 ? n : null;
}
const zt = {
	[g.GT3X_BINARY]: "gt3x_capsense",
	[g.GENEACTIV_BIN]: "detach_nonwear"
};
function Gt(e, t) {
	return (t ? re[t]?.[0] : void 0) || (e ? zt[e] ?? null : null);
}
async function Vt(e, t, n = h()) {
	const r = e.nonwearBands?.[Pt(t)];
	if (null === r) return null;
	if (r) {
		const t = "counts" === r.grid ? e.timestamps : e.ggirTimestamps, [i] = r.detectors;
		if (t && i && t.length === r.mask.length) return {
			detector: i,
			detectors: r.detectors,
			...e.nonwearSourceLabels ? { label: r.detectors.map((t) => e.nonwearSourceLabels?.[t] ?? pe(t)).join(" + ") } : {},
			mask: r.mask,
			...r.weight ? { weight: r.weight } : {},
			grid: t,
			epochSeconds: await q(t, 60, n)
		};
	}
	const i = [];
	let a = null;
	for (const u of new Set(t ?? [])) {
		if (qt(u)) continue;
		const t = e.algorithmicNonwearMasks?.[u];
		if (!t) continue;
		const n = Wt(t, e);
		!n || null !== a && n !== a || (a = n, i.push({
			detector: u,
			mask: t
		}));
	}
	const s = i[0];
	if (!s || !a) return null;
	const o = await q(a, 60, n), l = [...i, ...await Ht(e, t, {
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
		...e.nonwearSourceLabels ? { label: l.map(({ detector: t }) => e.nonwearSourceLabels?.[t] ?? pe(t)).join(" + ") } : {},
		mask: c.any,
		weight: c.weight,
		grid: a,
		epochSeconds: o
	};
}
async function Ht(e, t, { grid: n, epochSeconds: r }, i) {
	const a = e.deviceNonwearSource, s = "gt3x_capsense" === a ? k.gt3x_capsense : "detach_nonwear" === a ? k.detach_nonwear : null;
	if (null === s || !(t ?? []).includes(s)) return [];
	const o = (e.sensorNonwearPeriods ?? []).map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	}));
	return [{
		detector: s,
		mask: await me(o, n, r, i)
	}];
}
function Ut(e, t) {
	return t ? e : e.filter((e) => e !== k.choi_2011 && e !== k.choi_2012);
}
function qt(e) {
	return e === k.gt3x_capsense || e === k.detach_nonwear;
}
async function Kt(e, t) {
	return K("ggir-saved-nonwear-label", x(e), async () => {
		const n = await (t ?? I()).ggirNonwearApproach(e).catch((e) => {
			if (e instanceof Error && "AbortError" === e.name) throw e;
			return null;
		});
		return n ? `GGIR nonwear (van Hees ${n})` : se;
	});
}
async function Jt(e, t, n) {
	const r = await e.ggirResultsBundles.get(t);
	return r ? { [k.ggir_saved]: await Kt(r.configCsv, n) } : {};
}
Object.freeze([]), new Set(o.filter((e) => "device_statement" === e.execution).map((e) => e.id)), Object.freeze([k.ggir_part2_invalid]), k.ggir_saved, k.ggir_part2_invalid, k.choi_2011, k.choi_2012, k.van_hees_2013, k.van_hees_2023, k.troiano_2008, k.ahmadi_2020;
const Yt = /* @__PURE__ */ new Map();
async function Zt(e, t, n = !1) {
	let r = Yt.get(e);
	const i = void 0 !== r;
	r || (r = I(t).resolveTimezone(e), Yt.set(e, r));
	try {
		return await r;
	} catch (Ze) {
		return Yt.get(e) === r && Yt.delete(e), t?.throwIfAborted(), i && !n ? Zt(e, t, !0) : void console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, Ze);
	}
}
function Qt(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : _e();
}
async function Xt(e) {
	try {
		return Qt((await G(e))?.extraSettings);
	} catch (Ze) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", Ze), _e();
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
	const r = e.ggirTimezone?.trim();
	let i = null;
	if (r) {
		const e = await Zt(r, n);
		if (!e) return tn;
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
	if (null === i) return ue(e) ? {
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
	return null !== s && (await we(a.zone, s, I(n))).includes(i) ? {
		zone: a.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${en(i)} is not a ${a.zone} offset`
	};
}
function rn(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [r, i] of e.entries()) t[r + 1] = t[r] + i.length;
	const n = new Float64Array(t[e.length]);
	for (const [r, i] of e.entries()) n.set(i, t[r]);
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
	...Object.values(k).filter((e) => ![
		k.choi_2012,
		k.choi_2011,
		k.van_hees_2023,
		k.detach_nonwear
	].some((t) => t === e))
];
async function cn(e, t, n, r) {
	const i = void 0 === t ? n?.window[e] : 48 === t ? n?.view48[e] : void 0;
	if (i) return {
		start: i[0],
		end: i[1]
	};
	const a = await (r ?? h()).analysisWindowBounds(e, t);
	return a ? {
		start: a[0],
		end: a[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function un(e, t, n) {
	const r = e instanceof Float64Array ? e : Float64Array.from(e), [i, a] = await (n ?? h()).analysisWindowSlice(r, t);
	return {
		startIndex: i,
		endIndex: a
	};
}
async function dn(e, t = h()) {
	const n = [...new Set(e)], r = await t.analysisDatesOf(Float64Array.from(n)), i = new Map(n.map((e, t) => [e, r[t] ?? ""]));
	return (e) => i.get(e) ?? "";
}
Object.fromEntries(Object.values(k).map((e) => [e, e === k.ggir_saved ? se : pe(e)]));
var mn = s({
	nightPeriodMetrics: () => fn,
	spanningSeries: () => gn,
	storeNightPeriodMetrics: () => hn
});
function pn(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [r, i] of Object.entries(ge(e, e.nonwearChoiAxis ?? de()))) i && (n[t[r] ?? r] = new Uint8Array(i));
	return n;
}
async function gn(e, t, n, r = {}) {
	const { signal: i, includeNonwearMasks: a = !1 } = r, s = e.get(t), o = Bt(s, n), l = a && s ? pn(s) : {}, c = e.get(r.nextDate ?? await $(t, void 0, I(i))), u = o.timestamps[o.timestamps.length - 1], d = c ? Bt(c, n) : null, m = d?.timestamps[0], p = void 0 !== c && null !== d && void 0 !== u && void 0 !== m && m > u, g = o.scoresStale ?? d?.scoresStale ?? null;
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
	const v = a ? pn(c) : {}, y = {};
	for (const b of ln) {
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
async function fn(e, t, n, r) {
	const { date: i, file: a, activityMap: s, verdict: o } = t, l = t.spanning ?? await gn(s, i, o, { signal: r });
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
	const { timestamps: u, algorithmResults: d } = l, m = [];
	for (const p of e.sleepMarkers) m.push(d && u.length > 0 && p.onsetTimestamp && p.offsetTimestamp ? await Ft(d, l.activity ?? new Float64Array(d.length), l.timestamps, p.onsetTimestamp, p.offsetTimestamp, a.epochLengthSeconds || 60, r) : null);
	if (void 0 !== e.id) try {
		await F(n, [n.markers], () => te(e.id, {
			inputs: c,
			metrics: m
		}, n), r);
	} catch {
		r?.throwIfAborted();
	}
	return m;
}
async function hn(e, t, n, r) {
	const i = await n.files.get(e.fileId);
	if (!i) return;
	const a = /* @__PURE__ */ new Map();
	for (const s of [e.date, await $(e.date, void 0, I(r))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, s]).first();
		t && a.set(s, t);
	}
	await fn(e, {
		date: e.date,
		file: i,
		activityMap: a,
		verdict: t
	}, n, r);
}
var _n = class extends Error {
	name = "ExportSnapshotTooLargeError";
	reason = "snapshot_too_large";
}, wn = class e extends Error {
	file;
	step;
	reason;
	constructor(e, t, n, r = vn(n)) {
		super("Export producer failed.", { cause: n }), this.file = e, this.step = t, this.reason = r;
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
function vn(e) {
	return e instanceof wn || e instanceof _n ? e.reason : e instanceof Error ? e.name : typeof e;
}
const yn = 65536;
function bn(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function kn(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
const Tn = [
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
], Mn = (new Set(Tn.slice(16).map(([e]) => e)), "actiware_intervals_export.csv"), Sn = "actiware_sleep_wake_export.csv", xn = j.invalid_night_row.markerTypeCell, In = new Set(Tn.map(([, e]) => e));
function An(e, t) {
	const n = e(C["start" === t ? "interval_start_date" : "interval_end_date"].header), r = e(C["start" === t ? "interval_start_time" : "interval_end_time"].header);
	return n && r ? `${n}T${r}` : "";
}
const Rn = {
	metricColumn: (e) => In.has(e),
	invalidNightRow: (e) => e(C.interval_kind.header) === xn,
	reasonFor({ column: e, value: t, producerReason: n, invalidNightRow: r, allRows: i, missing: a }) {
		if (r) return "invalid_night";
		const s = t(C.interval_kind.header).toLowerCase(), o = An(t, "start");
		if ("daily" === s && o && o === An(t, "end")) return "zero_interval_rows";
		if ([
			C.actiware_onset_latency.header,
			C.actiware_efficiency.header,
			C.actiware_waso.header
		].includes(e)) {
			if ("sleep" !== s) return "not_applicable_to_row";
			if (a(t(C.actiware_duration.header))) return null;
			const e = An(t, "start"), n = An(t, "end");
			if (!e || !n) return null;
			let r = !1;
			for (const a of i) if (a.get(C.filename.header) === t(C.filename.header) && "rest" === a.get(C.interval_kind.header) && An((e) => a.get(e) ?? "", "start") <= e && n <= An((e) => a.get(e) ?? "", "end")) {
				r = !0;
				break;
			}
			return r ? null : "no_eligible_rest";
		}
		if (a(t(C.actiware_duration.header))) return null;
		if (e === C.actiware_off_wrist.header || e === C.actiware_off_wrist_percent.header) return e === C.actiware_off_wrist_percent.header && "0.00" === t(C.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === n ? n : null;
		if (e === C.actiware_avg_ac_per_min.header) return 100 === Number(t(C.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			C.actiware_invalid_sw_percent.header,
			C.actiware_wake_percent.header,
			C.actiware_sleep_percent.header
		].includes(e)) {
			if ("0.00" === t(C.actiware_duration.header)) return "zero_interval_rows";
			const n = !a(t(C.actiware_wake_time.header)) && !a(t(C.actiware_sleep_time.header)) && 0 === Number(t(C.actiware_wake_time.header)) && 0 === Number(t(C.actiware_sleep_time.header));
			return e === C.actiware_invalid_sw_percent.header || 100 !== Number(t(C.actiware_invalid_sw_percent.header)) && !n ? null : "no_scored_epochs";
		}
		const l = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(e);
		if (l) {
			const r = l[1];
			return "0.00" === t(C.actiware_duration.header) ? "zero_interval_rows" : a(t("%Invalid " + r)) ? "source_reported_missing" === n ? n : null : e.startsWith("TALT ") && !a(t("Exposure " + r)) ? "threshold_unconfigured" : 100 === Number(t("%Invalid " + r)) ? "no_valid_epochs" : null;
		}
		return null;
	}
}, Nn = {
	metricColumn: (e) => e === C.actiware_sleep_wake.header || e === C.actiware_wake_threshold.header,
	reasonFor: ({ column: e, producerReason: t }) => e === C.actiware_sleep_wake.header ? "no_valid_epochs" === t ? t : null : e === C.actiware_wake_threshold.header && "not_computed_for_export" === t ? t : null
}, $n = new Map(Object.entries({
	[Mn]: Rn,
	[Sn]: Nn
}));
var Cn = class extends Error {};
const On = "edit_recompute_requires_ms2_ms3", Dn = /* @__PURE__ */ new Set([
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
]), jn = j.invalid_night_row.markerTypeCell, Ln = /* @__PURE__ */ new Set([
	C.ggir_sleepparam.header,
	C.ggir_guider_onset.header,
	C.ggir_guider_wakeup.header,
	C.ggir_guider_spt_duration.header,
	C.ggir_error_onset.header,
	C.ggir_error_wake.header,
	C.ggir_error_dur.header,
	C.ggir_fraction_night_invalid.header,
	C.ggir_duration_sib_wakinghours.header,
	C.ggir_number_sib_sleepperiod.header,
	C.ggir_number_sib_wakinghours.header,
	C.ggir_duration_sib_wakinghours_atleast15min.header,
	C.ggir_guider_onset_ts.header,
	C.ggir_guider_wakeup_ts.header,
	C.ggir_page.header,
	C.ggir_daysleeper.header,
	C.ggir_sleeplog_id.header,
	C.ggir_guider.header,
	C.ggir_longitudinal_axis.header
]), Fn = /* @__PURE__ */ new Set([
	C.ggir_sleep_duration_in_spt.header,
	C.ggir_waso.header,
	C.ggir_number_of_awakenings.header,
	C.ggir_sleeplatency.header,
	C.ggir_sleepefficiency.header
]), Bn = /* @__PURE__ */ new Set([
	...Fn,
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
]), Pn = /* @__PURE__ */ new Set([
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
]), Wn = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), zn = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), Gn = new Set(Object.values(C).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), Vn = new Set(Object.values(C).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), Hn = new Set(Object.values(N).map((e) => e.reviewSource)), Un = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim()), qn = Un, Kn = "refusal_detail_missing_reason";
function Jn(e, n, r, i) {
	const a = (e) => r.get(e) ?? "", s = a(n + "_missing_reason");
	if (s && !Dn.has(s)) return null;
	const o = s || null;
	if (e.startsWith("part2_")) return "source_reported_missing";
	if (e.includes("_ggir_review")) {
		if (o) return o;
		const e = a("review_source");
		return Hn.has(e) ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const l = $n.get(e), c = a(C.marker_type.header) === jn || (l?.invalidNightRow?.(a) ?? !1);
	if (!function(e, t) {
		const n = $n.get(e);
		return n ? n.metricColumn(t) : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			C.ggir_id.header,
			C.ggir_filename.header,
			C.ggir_calendar_date.header,
			C.ggir_weekday.header,
			C.ggir_sleeplog_id.header,
			C.ggir_guider_corrected.header,
			C.ggir_cleaningcode.header
		].includes(t) : Gn.has(t);
	}(e, n)) return o || (c ? "invalid_night" : "Manual Nonwear" === a(C.marker_type.header) ? "manual_nonwear_period" : null);
	if (l) return l.reasonFor({
		column: n,
		value: a,
		producerReason: o,
		invalidNightRow: c,
		allRows: i,
		missing: qn
	});
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return Ln.has(n) ? "not_computed_for_export" === o ? o : null : Fn.has(n) ? "no_scored_epochs" === o || "not_applicable_to_row" === o || "scores_from_another_config" === o ? o : null : o;
	if ("sleep_export_wide.csv" === e) return o;
	if ("summary_export.csv" === e && n === C.sleep_regularity_index.header) return o && [
		"insufficient_pair",
		"no_scored_epochs",
		"no_valid_epochs",
		"not_computed_for_export",
		"scores_from_another_config"
	].includes(o) ? o : null;
	if ("physical_activity_export.csv" === e) {
		const e = a("Status"), r = a("Method");
		if ([
			"Epoch Length Seconds",
			"Native Epoch Seconds",
			"Mask Overlap Epochs"
		].includes(n)) return "Epoch Length Seconds" === n ? "ggir_enmo" === r ? "not_applicable_to_row" : null : "Native Epoch Seconds" === n ? "not_applicable" === a("Threshold Source") ? "not_applicable_to_row" : "source_reported_missing" === o ? o : null : "ggir_enmo" === r ? "not_applicable_to_row" : "needs_signal" === e ? "channel_unavailable" : "backend_required" === e ? "not_computed_for_export" : null;
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
		const s = t.find((e) => e.method === r);
		return i && s?.cutpoint && !Number.isFinite(s.cutpoint[i]) || "MIMS Unit Total" === n && "mims" !== r ? "not_applicable_to_row" : "ggir_enmo" === r ? Wn.has(n) ? "source_reported_missing" === o ? o : null : zn.has(n) && "not_computed_for_export" === o ? o : null : "mims" === r && [
			"Sedentary Minutes",
			"Light Minutes",
			"Moderate Minutes",
			"Vigorous Minutes",
			"MVPA Minutes"
		].includes(n) ? "not_applicable_to_row" : "mims" !== r && "preschool_free_living_rf_3_5" !== r || ![
			"MVPA Bouts",
			"MVPA Bout Minutes",
			"Sedentary Bouts",
			"Sedentary Breaks",
			"Mean Sedentary Bout Minutes"
		].includes(n) ? "0.00" === a("Wake Wear Minutes") ? "no_valid_epochs" : null : "not_computed_for_export";
	}
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === a(C.marker_type.header) ? "manual_nonwear_period" : null : "true" === a(C.is_invalid_night.header).toLowerCase() && a(C.marker_type.header) === jn ? "invalid_night" : n === C.total_nap_minutes.header && "0" === a(C.nap_count.header) ? "not_applicable_to_row" : [
		C.l5_hour.header,
		C.m10_hour.header,
		C.sleep_midpoint_hour.header,
		C.valid_wear_minutes.header
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
function Yn(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(r).join(","))].map((e) => e + "\n").join("");
}
function Zn(e, t) {
	const n = [
		C.filename.header,
		C.ggir_filename.header,
		"ggir_filename",
		C.participant_id.header,
		C.ggir_id.header,
		C.study_date.header,
		"Analysis Date",
		C.ggir_calendar_date.header,
		"ggir_calendar_date",
		C.interval_kind.header,
		C.marker_type.header,
		C.interval_start_date.header,
		C.interval_start_time.header,
		C.epoch_local.header,
		"Method"
	].flatMap((t) => {
		const n = e.get(t);
		return n ? [t + "=" + n] : [];
	});
	return n.length ? n.join("|") : "row=" + String(t);
}
function Qn(e, t) {
	let n = !1, r = 0;
	for (let i = 0; i < e.length; i += 1) if ("\"" === e[i]) n && "\"" === e[i + 1] ? i += 1 : n = !n;
	else if ("," === e[i] && !n && ++r === t) return e.slice(0, i);
	return e;
}
const Xn = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], er = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : r(String(e)), tr = (E.part4_night_review, E.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function nr(e, t, n = "") {
	return E[e].replace("{report}", n.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${N[t].filenameSuffix}.csv`);
}
function rr(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return m(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? m(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function ir(e, t) {
	const n = new Map(ke(e).map((e) => [e.night, e.nightDate]));
	return (e, r, i = !0) => {
		const a = e.columns.indexOf("nights" === t ? C.ggir_night.header : "night_number"), s = Number(e.values[a]?.[r]), o = n.get(s);
		if (i && o) return o;
		const l = e.values[e.columns.indexOf(C.ggir_calendar_date.header)]?.[r];
		return rr(l);
	};
}
async function ar(e, t, n, i) {
	const a = "nights" === t ? C.ggir_night.header : "window_number", s = I(n), o = await Promise.all(e.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await Se(e.imported, e.edits, t.night, n)])))), l = (await Promise.all(e.map(async (e, n) => {
		const r = e.current ?? e.imported, i = (e) => "nights" === t ? e.nights : e.days, a = "nights" === t ? r.nightRecomputed : r.dayRecomputed, l = "nights" === t ? e.imported.nightChecks : e.imported.dayChecks, c = o[n].filter((e) => null != e[1]), u = ir(e.imported, t), d = new Set(e.edits.map((e) => e.night)), m = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, p = /* @__PURE__ */ new Set();
		if ("days" === t && m) {
			const t = await Promise.all(ke(e.imported).filter((e) => d.has(e.night)).map(async (t) => {
				const n = e.edits.find((e) => e.night === t.night), r = t.nightDate, i = n.onset < "12:00:00" ? await $(r, void 0, s) : r, a = n.wake <= n.onset ? await $(i, void 0, s) : i;
				return [Math.min(t.onsetMs, Date.parse(`${i}T${n.onset}Z`)), Math.max(t.wakeMs, Date.parse(`${a}T${n.wake}Z`))];
			}));
			await Promise.all(Array.from({ length: r.days.rows }, async (e, n) => {
				const i = Number(r.days.values[r.days.columns.indexOf("night_number")]?.[n]);
				if (d.has(i)) return void p.add(n);
				const a = u(r.days, n, !1), o = r.days.values[r.days.columns.indexOf("start_end_window")]?.[n], l = "string" == typeof o ? /^(\d{2}:\d{2}:\d{2})-(\d{2}:\d{2}:\d{2})$/.exec(o) : null;
				if (!a || !l) return;
				const c = Date.parse(`${a}T${l[1]}Z`), m = l[2] < l[1] ? await $(a, void 0, s) : a, g = Date.parse(`${m}T${l[2]}Z`);
				t.some(([e, t]) => c <= t && g >= e) && p.add(n);
			}));
		}
		return {
			source: N[tr(e)].reviewSource,
			editedDayRows: p,
			editRecomputeUnavailable: m,
			editedNights: d,
			scoredDates: e.scoredDates,
			invalidDates: e.invalidDates,
			dateOf: u,
			table: i(r),
			ggir: i(e.imported),
			savedNights: e.imported.nights,
			recomputed: a,
			provenance: (e) => "nights" === t ? c.find(([t]) => t === e)?.[1] ?? "" : c.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(l.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === l.length) return null;
	const c = i ? i.filter((e) => !e.endsWith("_missing_reason") && !Xn.includes(e)) : [];
	for (const r of i ? [] : l) for (const e of r.table.columns) e.endsWith("_missing_reason") || c.includes(e) || c.push(e);
	const u = new Set("nights" === t ? L.ggir_review_night_extension.map((e) => C[e].header) : []), d = i ? c.filter((e) => i.includes(e + "_missing_reason")) : c.filter((e) => u.has(e) || l.some((e) => e.editRecomputeUnavailable || e.source === N.corrected.reviewSource)), m = [[
		...c.map(r),
		...Xn,
		...d.map((e) => r(e + "_missing_reason")),
		...Xn.map((e) => e + "_missing_reason")
	].join(",")], p = (e, t) => {
		const n = e.columns.indexOf(a);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: g, ggir: f, recomputed: h, provenance: _, checks: w, scoredDates: v, invalidDates: y, dateOf: b, editRecomputeUnavailable: k, editedNights: T, editedDayRows: M, savedNights: S, source: x } of l) {
		const e = S.columns.filter((e) => !Bn.has(e)), n = e.filter((e) => {
			const t = S.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return S.values[t].some((e, t) => {
				const r = Number(S.values[S.columns.indexOf(C.ggir_night.header)]?.[t]), i = n.has(r) && !Object.is(n.get(r), e);
				return n.set(r, e), i;
			});
		}), i = /* @__PURE__ */ new Set(), a = (e) => Array.from({ length: f.rows }, (e, t) => t).find((t) => !i.has(t) && p(f, t) === p(g, e) && n.every((n) => Object.is(f.values[f.columns.indexOf(n)]?.[t] ?? null, g.values[g.columns.indexOf(n)]?.[e] ?? null))), s = new Set(c.filter((n) => "nights" === t ? Bn.has(n) : !Pn.has(n) && !e.includes(n))), o = (n, i, a, o) => {
			const l = w.get(p(n, i));
			return [
				...c.map((r) => {
					if ("invalid" === a && ("nights" === t ? Bn.has(r) : /sleep|spt|waso|wake|onset|guider/i.test(r) && !e.includes(r))) return "";
					const s = n.columns.indexOf(r);
					return s < 0 ? "" : er(n.values[s]?.[i]);
				}),
				a,
				l?.status ?? "",
				r((l?.reasons ?? []).join(";")),
				r((l?.diffs ?? []).map((e) => e.column).join(";")),
				r(o),
				...d.map((e) => "invalid" !== a || u.has(e) && e !== C.ggir_nonwear_perc_spt.header ? k && a === x && s.has(e) && ("days" === t ? M.has(i) : T.has(p(n, i))) ? On : u.has(e) ? null != xe(n, e, i) ? "" : er(Ae(n, e + "_missing_reason", i) ?? "source_reported_missing") : a === x ? "source_reported_missing" : "not_computed_for_export" : "invalid_night"),
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
			const n = a(t);
			if (null != n && i.add(n), e && y?.has(e)) {
				null != n && m.push(o(f, n, x, "")), m.push(o(g, t, "invalid", ""));
				continue;
			}
			if (!h[t]) {
				m.push(o(g, t, x, ""));
				continue;
			}
			const r = p(g, t);
			null != n && m.push(o(f, n, x, "")), m.push(o(g, t, "recomputed", _(r)));
		}
		for (let t = 0; t < f.rows; t += 1) {
			if (i.has(t)) continue;
			const e = b(f, t);
			(!v || e && v.has(e)) && (m.push(o(f, t, x, "")), e && y?.has(e) && m.push(o(f, t, "invalid", "")));
		}
	}
	return m.length > 1 ? `${m.join("\n")}\n` : null;
}
function sr(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const r of e) for (const [e, t] of Object.entries(r.part2Reports ?? {})) {
		const i = nr("part2_report", tr(r), e);
		n.set(i, [...n.get(i) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const i = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], a = [i.map(r).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) a.push(i.map((n) => er(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, a.join("\n") + "\n"];
	}));
}
Object.keys(N).map((e) => nr("person_summary_review", e));
const or = (e, t) => ke(e).filter((e) => t?.has(e.nightDate));
async function lr(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: On,
		detail: ""
	};
	const r = e.current ?? e.imported;
	if (void 0 === r.tailExpansion) return {
		reason: "not_computed_for_export",
		detail: "the saved GGIR review predates the core's tail expansion flag; import the folder again"
	};
	const i = I(n);
	try {
		const { ggirVersion: n } = await i.ggirConfigValues(e.configCsv), { profile: a, reports: s } = await i.ggirPersonSummaries({
			ggir_version: n ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: r.nights,
			days: r.days,
			tail_expansion: r.tailExpansion,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(Ae(r.nights, C.ggir_id.header, 0) ?? ""),
			invalid_nights: or(e.imported, t).map((e) => e.night),
			person_columns: Object.fromEntries(Object.entries(e.personReports ?? {}).flatMap(([e, t]) => t.rows > 0 ? [[e, t.columns]] : []))
		});
		return {
			profile: a,
			reports: s
		};
	} catch (a) {
		return n?.throwIfAborted(), {
			reason: "not_computed_for_export",
			detail: a instanceof Error ? a.message : String(a)
		};
	}
}
async function cr(e, t, n) {
	const i = /* @__PURE__ */ new Map(), a = await Promise.all(e.map(async (e) => {
		const n = or(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (n) => {
			const r = await Se(e.imported, e.edits, n.night, t);
			return null == r ? [] : [`night ${String(n.night)} ${r}`];
		}))).flat(), ...n].join("; ");
	}));
	for (const [r, o] of e.entries()) {
		const e = tr(o), t = a[r], n = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [r, a] of Object.entries(o.personReports ?? {})) {
			if (0 === a.rows) continue;
			const s = nr("person_summary_review", e, r), o = "reason" in n ? n : n.reports[r] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${r}`
			};
			i.set(s, [...i.get(s) ?? [], {
				table: a,
				source: N[e].reviewSource,
				edit: t,
				recomputed: o
			}]);
		}
	}
	const s = /* @__PURE__ */ new Set([C.ggir_id.header, C.ggir_filename.header]);
	return Object.fromEntries([...i].map(([e, t]) => {
		const i = n?.get(e), a = [...new Set(t.flatMap(({ table: e }) => e.columns))], o = (i ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : function(e, t) {
			const n = new Set(e);
			if (t.every((e) => n.has(e))) return [...e];
			if (!t.some((e) => n.has(e))) return [...e, ...new Set(t)];
			const r = [...e];
			let i = -1;
			for (const a of t) {
				const e = r.indexOf(a);
				e >= 0 ? i = e : r.splice(++i, 0, a);
			}
			return r;
		}(e, t.columns), a)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !Xn.includes(e)), l = Xn.map((e) => e + "_missing_reason"), c = i?.filter((e) => e.endsWith("_missing_reason") && !l.includes(e)) ?? ["refusal_detail_missing_reason", ...o.map((e) => e + "_missing_reason")], u = [[
			...o,
			...Xn,
			...c,
			...l
		].map(r).join(",")], d = (e, t) => [
			e,
			"",
			"",
			"",
			r(t)
		], m = (e) => [
			"",
			"not_computed_for_export",
			"not_applicable_to_row",
			"not_applicable_to_row",
			e ? "" : "not_applicable_to_row"
		], p = (e, t) => (n) => er(e.values[e.columns.indexOf(n)]?.[t]), g = (e) => c.map((t) => e.get(t) ?? ""), f = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
		for (const { table: n, source: h, edit: _, recomputed: w } of t) for (let e = 0; e < n.rows; e++) {
			const t = o.map(p(n, e)), i = new Map(o.flatMap((e) => f.get(n).has(e) ? [] : [[e + "_missing_reason", "not_applicable_to_row"]]));
			if (u.push([
				...t,
				...d(h, ""),
				...g(i),
				...m("")
			].join(",")), !_) continue;
			const a = "reason" in w ? w : 0 === w.rows ? {
				reason: "no_retained_nights",
				detail: ""
			} : null, l = "reason" in w ? null : p(w, 0), c = o.map((e, n) => s.has(e) ? t[n] : l?.(e) ?? ""), v = new Map(o.flatMap((e, t) => Un(c[t]) ? [[e + "_missing_reason", a?.reason ?? "not_applicable_to_row"]] : []));
			a?.detail && v.set(Kn, r(`ggirPersonSummaries: ${a.detail}`)), u.push([
				...c,
				...d("recomputed", _),
				...g(v),
				...m(_)
			].join(","));
		}
		return [e, u.join("\n") + "\n"];
	}));
}
const ur = L.ggir_part4_nightsummary_csv, dr = ur.map((e) => C[e].header), mr = [
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
], pr = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function gr(e, t) {
	const n = C[e], i = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof i ? r(i) : bn(i, { integral: n.ggirIntegral ?? !1 });
}
function fr(e, t = "legacy-recording", n, r) {
	const i = [], a = [];
	for (const l of e) l.states && 0 !== l.timestamps.length && (a.push(l.states.subarray(0, Math.min(l.timestamps.length, l.states.length))), i.push({
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
	}) : I(r).validStateFraction(s).then(async (e) => {
		if (!e) return {
			sri: null,
			fractionValid: e ?? null,
			sriMissingReason: "no_valid_epochs",
			fractionValidMissingReason: null == e ? "no_valid_epochs" : null
		};
		const t = /* @__PURE__ */ new Map();
		for (const n of i) for (let e = 0; e < Math.min(n.timestamps.length, n.states.length); e++) {
			const r = n.timestamps[e];
			Number.isFinite(r) && t.set(Math.round(r), 0 === n.states[e] || 1 === n.states[e]);
		}
		const a = (void 0 === n || 86400 % n == 0) && [...t].some(([e, n]) => n && t.get(e + 86400)), s = a ? null : "insufficient_pair", o = await async function(e, t) {
			const n = Array.isArray(e) ? e : [e], r = n.map((e) => ({
				...void 0 === e.seriesId ? {} : { series_id: e.seriesId },
				...void 0 === e.epochLengthSeconds ? {} : { epoch_length_seconds: e.epochLengthSeconds }
			})), [i, a] = rn(n.map((e) => e.timestamps)), [s, o] = rn(n.map((e) => e.states));
			return I(t).sleepRegularityIndex(_([
				JSON.stringify(r),
				i,
				a,
				s,
				o
			], [
				i.buffer,
				a.buffer,
				s.buffer,
				o.buffer
			]));
		}(i, r);
		if (a && null == o) throw new Error("SRI producer returned a blank despite valid pairs");
		return {
			sri: o,
			fractionValid: e,
			sriMissingReason: s,
			fractionValidMissingReason: null
		};
	});
}
async function hr(e, t, n, r = {}) {
	const { signal: i } = r, a = e.participantId ?? e.filename, s = P(n.values(), r.algorithm), o = [];
	for (const [p, v] of n) {
		if (!Sr(p, r.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = Bt(v, s);
		o.push({
			timestamps: e,
			states: t
		});
	}
	const l = await fr(o, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, i), { sri: c, fractionValid: u } = l, d = "stale" === s.status ? "scores_from_another_config" : null, m = d ?? l.sriMissingReason, g = d ?? l.fractionValidMissingReason, f = [];
	for (const v of [...t.keys()].sort()) {
		const e = t.get(v);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === p.MAIN_SLEEP && null != t.onsetTimestamp && f.push({
			date: v,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const h = [[
		...dr,
		...mr.map((e) => `${C[e].header}_missing_reason`),
		...pr.map((e) => `${C[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: p, onsetTs: v, wakeupTs: y } of f) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == y ? "not_applicable_to_row" : d ?? "no_scored_epochs"
		};
		if (null != y) {
			const { timestamps: r, algorithmResults: a } = await gn(n, p, s, { signal: i });
			if (a && r.length > 0) {
				t.missingReason = null;
				const n = await Lt(a, r, v, y, e.epochLengthSeconds || 60, null, i);
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
	const w = await I(i).ggirManualNightClocks(f.map((e) => e.date), Float64Array.from(f, (e) => e.onsetTs), Float64Array.from(f, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let p = 0; p < f.length; p++) {
		const { onsetTs: t, wakeupTs: n } = f[p], r = w[p], { tstH: i, nAwak: s, latency: o, efficiency: l } = _[p], d = {
			ggir_id: a,
			ggir_night: p + 1,
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
			ggir_sleep_duration_in_spt: i,
			ggir_waso: r?.waso ?? null,
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
			ggir_weekday: r?.weekday ?? null,
			ggir_calendar_date: r?.calendarDate ?? null,
			ggir_filename: e.filename,
			ggir_cleaningcode: r?.cleaningcode ?? null,
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
			...ur.map((e) => gr(e, d[e])),
			...mr.map((e) => {
				const t = ur.indexOf(e);
				return t >= 0 && null == d[ur[t]] ? "not_computed_for_export" : "";
			}),
			...pr.map((e) => {
				const t = ur.indexOf(e);
				return t >= 0 && null == d[ur[t]] ? _[p].missingReason ?? "" : "";
			}),
			m ?? "",
			g ?? ""
		].join(","));
	}
	return h.join("\n") + "\n";
}
function _r(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function wr(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function vr(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function yr(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: r } = wr(n), i = [e, r].filter(Boolean);
		t.set(n, 0 === i.length ? "part4_nightsummary.csv" : `part4_nightsummary_${i.join("_")}.csv`);
	}
	return t;
}
function br(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : X(e);
}
function kr(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function* Tr(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let r = Math.min(e.length, n + yn / 4);
		r < e.length && /[\uD800-\uDBFF]/u.test(e[r - 1]) && (r -= 1), yield t.encode(e.slice(n, r)), n = r;
	}
	yield t.encode("\n");
}
function Mr(e) {
	return new TextEncoder().encode(e);
}
function Sr(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function xr(e, t, r) {
	r?.throwIfAborted();
	const i = function(e, t) {
		const { signal: n } = t, { username: r, dateRange: i, snapshot: a } = e, s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = [];
		return {
			addFiles: async (e) => {
				const d = Xi(a, Ui.ggirReport, e.map((e) => e.id)), m = await Promise.all(e.map((e) => Ra(a, e.id, r, n)));
				for (const [r, a] of e.entries()) {
					const e = d.files.find((e) => e.id === a.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: p, sets: g, markersByAlgo: f, invalidDates: h } = m[r], _ = ra(d, e.id), w = new Map([...f].filter(([e]) => Sr(e, i))), v = /* @__PURE__ */ new Map();
					for (const [t, n] of w) for (const e of n) {
						const n = vr(e);
						let r = v.get(n);
						r || (r = /* @__PURE__ */ new Map(), v.set(n, r)), r.set(t, e);
					}
					const y = /* @__PURE__ */ new Set();
					for (const [t, n] of w) for (const e of n) c(e) && y.add(t);
					if (p) for (const t of g) u.push({
						...t,
						...i ? { scoredDates: new Set(e.availableDates.filter((e) => Sr(e, i))) } : {},
						invalidDates: h
					});
					const b = [...y].sort(), k = b[0], T = b[b.length - 1], M = [], S = [];
					for (const n of t.charts ? [..._.keys()].sort() : []) if (Sr(n, i) && (null == k || null == T || n >= k && n <= T)) {
						const e = _.get(n), t = H({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), r = t.timestamps, i = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < r.length; n++) M.push(r[n]), S.push(i[n]);
					}
					const x = [];
					for (const [t, r] of v) {
						const a = wr(t).algoKey, l = p ? "" : await hr(e, r, _, {
							...a ? { algorithm: a } : {},
							...i ? { dateRange: i } : {},
							signal: n
						}), c = p ? [] : l.replace(/\n$/u, "").split("\n");
						if (c.length > 0) {
							const e = s.get(t) ?? [];
							s.set(t, e), o.has(t) ? e.push(...c.slice(1)) : (e.push(...c), o.add(t));
						}
						const u = [], d = [];
						for (const e of r.values()) {
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
						const { algoKey: m, ruleKey: g } = wr(t), f = [m, g].filter(Boolean).join("_"), h = P(_.values(), a || null);
						x.push([f, {
							p: u,
							n: d,
							..."stale" === h.status ? { stale: h.reason } : {}
						}]);
					}
					0 === v.size && x.push(["", {
						p: [],
						n: []
					}]), M.length > 0 && l.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: M,
						act: S,
						algos: x
					});
				}
			},
			entries: () => async function({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: r, layouts: i, only: a }) {
				const s = {}, o = (e) => void 0 === a || a === e;
				for (const [l, c] of r ?? yr([...e.keys()])) {
					const t = e.get(l);
					t?.length && o(c) && (s[c] = Mr(`${t.join("\n")}\n`));
				}
				for (const l of Object.keys(N)) {
					const e = t.filter((e) => tr(e) === l);
					if (0 === e.length) continue;
					const r = (t, n) => void 0 === a || e.some((e) => Object.keys(n(e) ?? {}).some((e) => nr(t, l, e) === a));
					if (r("part2_report", (e) => e.part2Reports)) for (const [t, n] of Object.entries(sr(e, i))) o(t) && (s[t] = Mr(n));
					for (const [t, a] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
						const r = nr(a, l), c = o(r) ? await ar(e, t, n, i?.get(r)) : null;
						c && (s[r] = Mr(c));
					}
					if (r("person_summary_review", (e) => e.personReports)) for (const [t, a] of Object.entries(await cr(e, n, i))) o(t) && (s[t] = Mr(a));
				}
				return s;
			}({
				csvLinesByAlgo: s,
				ggirReviews: u
			}, { signal: n }),
			chartPidData: l,
			csvLinesByAlgo: s,
			ggirReviews: u
		};
	}(e, {
		signal: r,
		charts: !0
	});
	await i.addFiles([t]);
	const s = [...i.chartPidData].map(([t, n]) => function(e, t, n) {
		return {
			key: e,
			pid: t.pid,
			charts: t.algos.map(([r, i]) => {
				const { algoKey: a, ruleKey: s } = wr(r), o = kr([a, s].filter(Boolean).join("_"), "unscoped"), l = `activity-${kr(e, "recording")}-${o}-${n}.svg`, c = function(e) {
					if (0 === e.timestamps.length) return kn("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return kn("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, r = 0;
					const i = e.timestamps.map((i, a) => {
						const s = e.activity[a];
						return !Number.isFinite(i) || i <= t ? kn("timestamps must be finite and strictly ascending") : (t = i, null != s && Number.isFinite(s) ? (n = Math.min(n, s), r = Math.max(r, s), {
							timestamp: i,
							value: s
						}) : {
							timestamp: i,
							value: null
						});
					}), a = i[0].timestamp, s = i[i.length - 1].timestamp, o = s > a ? s : a + 1;
					if (!Number.isFinite(o) || o <= a) return kn("single-epoch viewport must have a representable right edge");
					r <= n && (r = n + 1);
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
							min: a,
							max: o
						},
						valueDomain: {
							min: n,
							max: r
						},
						series: [{
							tone: "secondary",
							strokeWidth: 1.5,
							valueDomain: {
								min: n,
								max: r
							},
							points: i
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
				}), u = [...Tr(`      <div class="plot-svg">${jt(c)}</div>`)];
				return {
					algoKey: r,
					...i.stale ? { stale: i.stale } : {},
					svgFilename: l,
					plot: new Blob(u),
					plotLengths: u.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${_r(br(c.viewport.min))} → ${_r(br(c.viewport.max))} · activity domain ${bn(c.valueDomain.min)}–${bn(c.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), o = new Set(yr([...i.csvLinesByAlgo.keys()]).values()), l = [];
	for (const [c, u] of Object.entries(await i.entries())) o.has(c) || l.push([c, n(a(new TextDecoder().decode(u)).records[0].text)]);
	return {
		charts: s,
		csvLinesByAlgo: i.csvLinesByAlgo,
		ggirReviews: i.ggirReviews,
		headers: l
	};
}
function Ir(e) {
	return Date.parse(`${e}Z`) / 1e3;
}
function Ar(e, t) {
	return e.filter((e) => "rest" === e.kind || "sleep" === e.kind).map((e) => ({
		kind: e.kind,
		source: e.source,
		startTimestamp: Ir(e.start),
		endTimestamp: Ir(e.end),
		origin: t ? "generated" : "stored",
		...e.analysis ? { analysis: e.analysis } : {}
	})).filter((e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.endTimestamp > e.startTimestamp).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Rr(e) {
	return e.map(({ start: e, end: t, ...n }) => ({
		...n,
		startTimestamp: Ir(e),
		endTimestamp: Ir(t)
	}));
}
var Nr = class extends Error {
	name = "ActiwareSleepContainmentError";
}, Er = class extends Error {
	name = "ActiwareRestEditError";
};
const $r = (e, t) => Math.round((t - e.startTimestamp) / e.epochSeconds);
function Cr(e, t) {
	return e.startTimestamp + $r(e, t) * e.epochSeconds;
}
const Or = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " "), Dr = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19);
function jr(e) {
	return {
		kind: e.kind,
		source: e.source,
		start: Dr(e.startTimestamp),
		end: Dr(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	};
}
async function Lr(e, { epochs: t, params: n, grid: r, core: i }) {
	if (0 === e.length) return [];
	const a = await i.actiwareIntervals(t, e.map(jr), n);
	if (!a || a.generated) throw new Error("The Actiware core did not derive the sleep inside these rest intervals.");
	const s = Ar(a.intervals.filter((e) => "sleep" === e.kind), !0);
	return function(e, t) {
		const n = e.filter((e) => "rest" === e.kind);
		for (const r of e.filter((e) => "sleep" === e.kind)) {
			const e = $r(t, r.startTimestamp), i = $r(t, r.endTimestamp);
			if (!n.some((n) => e >= $r(t, n.startTimestamp) && i <= $r(t, n.endTimestamp))) throw new Nr(`Actiware sleep interval ${Or(r.startTimestamp)}–${Or(r.endTimestamp)} lies outside every rest interval.`);
		}
	}([...e, ...s], r), s;
}
function Fr(e, t) {
	return (e ?? []).filter((e) => "rest" === e.kind && null !== ie([e], t));
}
const Br = (e, t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp;
function Pr(e, t, n) {
	const r = ae(e, t);
	return r ? [...r.sleep && !n ? [{
		onsetTimestamp: r.sleep.startTimestamp,
		offsetTimestamp: r.sleep.endTimestamp,
		markerIndex: 1,
		markerType: p.MAIN_SLEEP
	}] : [], ...(r.additionalSleeps ?? []).map((e, t) => ({
		onsetTimestamp: e.startTimestamp,
		offsetTimestamp: e.endTimestamp,
		markerIndex: t + 2,
		markerType: p.NAP
	}))] : [];
}
function Wr(e, t, n, r) {
	return Pr(t, n, r).map((t) => {
		const n = e.find((e) => e.markerType === t.markerType && e.onsetTimestamp === t.onsetTimestamp && e.offsetTimestamp === t.offsetTimestamp);
		return n ? {
			...n,
			markerIndex: t.markerIndex
		} : t;
	});
}
async function zr(e, t, n, r) {
	const i = Fr(e, t), a = "move" === n.kind ? function(e, { from: t, to: n }) {
		const r = e.find((e) => e.startTimestamp === t.startTimestamp && e.endTimestamp === t.endTimestamp);
		if (r) return r;
		const i = e.filter((e) => n.startTimestamp === t.startTimestamp && e.startTimestamp === n.startTimestamp || n.endTimestamp === t.endTimestamp && e.endTimestamp === n.endTimestamp);
		return 1 === i.length ? i[0] : void 0;
	}(i, n) : "remove" === n.kind ? i.find((e) => Br(n.holding, e)) : void 0;
	if ("add" !== n.kind && !a) throw new Er("That rest interval changed since it was shown; reload the night.");
	const s = e.filter((e) => e !== a && !(a && "sleep" === e.kind && Br(e, a)));
	if ("remove" === n.kind) return s;
	const { grid: o } = r, l = a?.analysis, c = {
		kind: "rest",
		source: "event_marker",
		origin: "scorer",
		startTimestamp: Cr(o, n.to.startTimestamp),
		endTimestamp: Cr(o, n.to.endTimestamp),
		...l ? { analysis: l } : {}
	};
	if (c.endTimestamp <= c.startTimestamp) throw new Er("A rest interval must end after it starts.");
	if (s.some((e) => "rest" === e.kind && e.startTimestamp < c.endTimestamp && e.endTimestamp > c.startTimestamp)) throw new Er("A rest interval cannot overlap another rest interval.");
	if (null === ie([c], t)) throw new Er("That rest interval would belong to another night.");
	const u = await Lr([c], r);
	return [
		...s,
		c,
		...u
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Gr(e, t) {
	const n = (e) => [
		e.startTimestamp,
		e.endTimestamp,
		e.origin
	].join(":"), r = (e) => e ? {
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	} : null, i = (e) => e.filter((e) => "rest" === e.kind), a = new Set(i(e).map(n)), s = new Set(i(t).map(n));
	return {
		from: r(i(e).find((e) => !s.has(n(e)))),
		to: r(i(t).find((e) => !a.has(n(e))))
	};
}
async function Vr(e, t, n) {
	if (0 === t.length) return [...e];
	const r = e.filter((e) => {
		return "rest" === e.kind && (n = e, t.some((e) => n.startTimestamp < e.endTimestamp && n.endTimestamp > e.startTimestamp));
		var n;
	}), i = e.filter((e) => !(r.includes(e) || "sleep" === e.kind && r.some((t) => Br(e, t)))), a = await Lr(t, n);
	return [
		...i,
		...t,
		...a
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
const Hr = (e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind);
function Ur(e, t) {
	const n = [...t].flatMap((t) => {
		const n = ae(e, t);
		return n?.sleep ? [n.sleep] : [];
	});
	return (e ?? []).filter((e) => "sleep" !== e.kind || !n.some((t) => t.startTimestamp === e.startTimestamp && t.endTimestamp === e.endTimestamp));
}
async function qr(e, t, n, r) {
	if (!t) return null;
	const i = Ur(e, n).map(jr).sort(Hr);
	if (0 === i.length) return [];
	const a = await r({
		...t,
		intervals: i
	});
	return a ? Rr(a).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)) : null;
}
async function Kr(e, t, n, r) {
	const i = await Jr(e, t, n, r);
	return i ? Zr(e.file, i, t.keys()) : null;
}
async function Jr({ file: e, statisticsInput: t }, n, r, i) {
	if (!t) return null;
	const a = e.actiwareIntervals ?? [], s = await dn(a.map((e) => e.startTimestamp), i);
	let o = [...a];
	for (const d of n.keys()) {
		const e = Fr(a, d), t = a.filter((t) => "sleep" === t.kind && Yr(a, t, e, () => s(t.startTimestamp) === d)), r = n.get(d), i = r?.sleepMarkers.filter((e) => (e.markerType === p.NAP || e.markerType === p.MAIN_SLEEP && !r.isInvalidNight) && null != e.onsetTimestamp && Number.isFinite(e.onsetTimestamp) && null != e.offsetTimestamp && Number.isFinite(e.offsetTimestamp) && e.offsetTimestamp > e.onsetTimestamp);
		if (r?.isInvalidNight || i?.length) {
			o = o.filter((e) => !t.includes(e));
			const e = t[0]?.analysis;
			for (const t of i ?? []) o.push({
				kind: "sleep",
				source: "event_marker",
				startTimestamp: t.onsetTimestamp,
				endTimestamp: t.offsetTimestamp,
				origin: "scorer",
				...e ? { analysis: e } : {}
			});
		}
	}
	const l = await r({
		...t,
		intervals: o.map(jr).sort(Hr)
	});
	if (!l) return null;
	const c = Rr(l), u = [...e.actiwareStatistics ?? [], ...c].map((e) => e.startTimestamp);
	return {
		calculated: c,
		rowDateOf: await dn(u, i),
		datedRows: new Set(u)
	};
}
const Yr = (e, t, n, r) => {
	const i = e.find((e) => "rest" === e.kind && t.startTimestamp >= e.startTimestamp && t.endTimestamp <= e.endTimestamp);
	return i ? n.includes(i) : r();
};
function Zr(e, t, n, r) {
	const i = e.actiwareIntervals ?? [], a = [...n].map((e) => ({
		date: e,
		rests: Fr(i, e)
	})), s = (e) => a.some(({ date: n, rests: a }) => "rest" === e.kind ? null !== ie([e], n) : "sleep" === e.kind && Yr(i, e, a, () => {
		return i = e.startTimestamp, (t.datedRows.has(i) || !r ? t.rowDateOf(i) : r(i)) === n;
		var i;
	}));
	return [...(e.actiwareStatistics ?? []).filter((e) => !s(e)), ...t.calculated.filter(s)].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Qr(e, t) {
	return (e.actiwareStatistics ?? []).map((e) => e.startTimestamp).filter((e) => !t.datedRows.has(e));
}
const Xr = j.invalid_night_row.markerTypeCell, ei = D("actiware_interval_csv", "local"), ti = [
	"interval_score_count",
	"interval_score_average",
	"interval_score_manual_count",
	"interval_score_manual_average",
	"interval_score_scheduled_count",
	"interval_score_scheduled_average",
	"interval_score_no_response_count",
	"interval_score_late_count",
	"interval_score_late_average"
].map((e) => C[e].header), ni = (e, t) => Math.round(e) === Math.round(t);
async function ri(e, t, n, r) {
	const i = r ? Ur(e.actiwareIntervals, r.invalidDates) : (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind), a = i.filter((e) => "rest" === e.kind), s = i.filter((e) => "rest" === e.kind || "sleep" === e.kind && a.some((t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp)).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), o = e.actiwareStatistics ?? [], l = await dn([...s.map((e) => e.startTimestamp), ...o.map((e) => e.startTimestamp)], n), c = /* @__PURE__ */ new Set(), u = (t, n) => ({
		filename: e.filename,
		participantId: e.participantId ?? null,
		studyDate: l(t.startTimestamp),
		intervalNumber: null,
		interval: t,
		statistics: n
	}), d = s.map((e) => {
		const t = o.findIndex((t, n) => !c.has(n) && t.kind === e.kind && ni(t.startTimestamp, e.startTimestamp) && ni(t.endTimestamp, e.endTimestamp));
		return t >= 0 && c.add(t), u(e, t >= 0 ? o[t] ?? null : null);
	});
	return o.forEach((e, t) => {
		c.has(t) || d.push(u({
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
	}(d).filter((e) => !t || e.studyDate >= t[0] && e.studyDate <= t[1]).sort((e, t) => e.interval.startTimestamp - t.interval.startTimestamp || e.interval.kind.localeCompare(t.interval.kind));
}
function ii(e, t, n) {
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
const ai = new Set(Tn.map(([, e]) => e)), si = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
function oi(e) {
	if (!Number.isFinite(e)) return [
		"",
		"",
		""
	];
	const t = /* @__PURE__ */ new Date(1e3 * Math.round(e)), n = t.toISOString();
	return [
		n.slice(0, 10),
		si[t.getUTCDay()],
		n.slice(11, 19)
	];
}
const li = D("actiware_sleep_wake_csv", "local");
async function ci(e, t, n, r) {
	if (0 === e.scores.byteLength) return [];
	const i = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, a = n ?? new Set(await r.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((i - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), i])));
	return (await Promise.all([...a].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await cn(t, void 0, void 0, r);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
async function ui(e, t, n, r) {
	return t || n ? (await ci(e, t, n, r)).reduce((e, t) => e + t.end - t.start, 0) : e.scores.byteLength;
}
async function* di({ fileIds: e, dateRange: t, username: r, signal: i }, s, o) {
	i?.throwIfAborted();
	const l = s.inputs("actiwareSleepWake", e), c = [...l.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), u = c.map((e) => l.actiwareFileData.find((t) => t.fileId === e.id)), d = function(e, t = !1) {
		const n = [[
			...li,
			"Sleep/Wake_missing_reason",
			"Wake Threshold_missing_reason",
			...t ? ["Participant ID_missing_reason"] : []
		].join(",")];
		for (const r of e) n.push(mi(r, r.epochTimestamp, r.sleepWake, t));
		return `${n.join("\n")}\n`;
	}([], !0);
	let m = [], p = 0, g = 0;
	const f = () => {
		i?.throwIfAborted();
		const e = function(...e) {
			const t = function* (e, t, r = !0, i) {
				const { headerlessColumns: s, fullRowCsv: o, rowOffset: l = 0, contextRows: c } = i ?? {}, u = s?.length ? s.join(",") + "\n" + e : e, d = a(u);
				if (d.unterminatedQuotedField) throw new Error(t + ": unterminated CSV cell");
				const [m, ...p] = d.records;
				if (!m) return {
					csv: e,
					withReason: 0,
					withoutReason: 0
				};
				const g = n(m.text), f = g.findIndex((e) => e.endsWith("_missing_reason"));
				if (f >= 0 && g.slice(f).some((e) => !e.endsWith("_missing_reason"))) throw new Error(t + ": internal reason fields must trail data fields");
				const h = g.map((e, t) => ({
					header: e,
					index: t
				})).filter(({ header: e }) => "" !== e && !e.endsWith("_missing_reason")), _ = p.map((e) => n(e.text)), w = _.map((e) => new Map(g.map((t, n) => [t, e[n] ?? ""]))), v = o ? a(o).records : [], y = v[0] ? n(v[0].text) : [], b = o ? v.slice(1).map((e) => n(e.text)) : [];
				if (o && h.length > 0 && b.length !== _.length) throw new Error(t + ": complete-row evidence count differs");
				const k = o ? b.map((e) => new Map(y.map((t, n) => [t, e[n] ?? ""]))) : w;
				let T = 0, M = 0;
				for (let n = 0; n < _.length; n += 1) {
					const e = _[n], r = w[n];
					for (const { header: a, index: s } of h) {
						if ("edit_recompute_requires_ms2_ms3" === k[n].get(a + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
							yield {
								file: t,
								row: l + n + 1,
								key: Zn(r, l + n + 1),
								column: a,
								reason: On
							}, T += 1;
							continue;
						}
						const i = e[s] ?? "";
						if (!qn(i) || "" !== i.trim() && Vn.has(a)) continue;
						const o = Jn(t, a, k[n], c?.() ?? k);
						o ? (T += 1, yield {
							file: t,
							row: l + n + 1,
							key: Zn(r, l + n + 1),
							column: a,
							reason: o
						}) : (M += 1, console.warn("WARNING: unreasoned missing export cell"));
					}
					const i = r.get(Kn);
					i && (yield {
						file: t,
						row: l + n + 1,
						key: Zn(r, l + n + 1),
						column: i,
						reason: "not_computed_for_export"
					});
				}
				if (r && M > 0) throw new Cn(t + ": " + String(M) + " unreasoned missing metric cells");
				return f < 0 ? {
					csv: e,
					withReason: T,
					withoutReason: M
				} : {
					csv: [Qn(m.text, f), ...p.map((e) => Qn(e.text, f))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
					withReason: T,
					withoutReason: M
				};
			}(...e), r = [];
			for (;;) {
				const e = t.next();
				if (e.done) return {
					...e.value,
					reasons: r
				};
				r.push(e.value);
			}
		}(d + m.join("\n") + "\n", Sn, !0, { rowOffset: p }), t = p ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, r = {
			bytes: new TextEncoder().encode(t),
			rows: m.length,
			reasonRows: e.reasons.length,
			reasons: new TextEncoder().encode(Yn(e.reasons, !1))
		};
		return p += m.length, m = [], g = 0, r;
	};
	for (const [n, a] of c.entries()) {
		i?.throwIfAborted();
		const e = u[n]?.actiwareSleepWake;
		if (!e) continue;
		const c = u[n]?.actiwareWakeThreshold, d = null != c && Number.isFinite(c) ? c : null, p = new Int8Array(e.scores), h = await ci(e, t, new Set(s.scoredMarkers(l, a.id, r).keys()), o);
		i?.throwIfAborted();
		for (const { date: t, start: n, end: r } of h) {
			const i = {
				filename: a.filename,
				participantId: a.participantId ?? null,
				studyDate: t,
				sleepDetection: ce(e.params, "sleep_detection"),
				wakeThresholdSelection: ce(e.params, "wake_threshold_selection"),
				wakeThreshold: d,
				...null === d ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
			};
			for (let t = n; t < r; t += 1) {
				const n = p[t], r = mi(i, e.startTimestamp + t * e.epochSeconds, 0 === n || 1 === n ? n : null, !0);
				if (r.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
				m.push(r), g += r.length, (512 === m.length || g >= 32768) && (yield f());
			}
		}
	}
	m.length && (yield f()), i?.throwIfAborted();
}
function mi(e, t, n, i) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		ee(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...i ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => r(e)).join(",");
}
const pi = {
	sleepPeriodsOf: (e, t) => t.sleepMarkers,
	sleepRowMetrics: null
}, gi = { forFile: () => pi }, fi = [
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
], wi = {
	nightRecord: { forFile(e, t) {
		const n = e.actiwareFileData.find((e) => e.fileId === t) ?? null, r = n?.actiwareIntervals ?? null;
		return r ? {
			sleepPeriodsOf: (e, t) => Pr(r, e, t.isInvalidNight),
			sleepRowMetrics: { cells(e) {
				const t = null != e.onsetTimestamp && null != e.offsetTimestamp ? {
					onset: e.onsetTimestamp,
					offset: e.offsetTimestamp
				} : null;
				if (!t) return null;
				const i = r.find((e) => "rest" === e.kind && e.startTimestamp <= t.onset && e.endTimestamp >= t.offset) ?? null, a = (e, t) => t ? n?.actiwareStatistics?.find((n) => n.kind === e && Math.round(n.startTimestamp) === Math.round(t.startTimestamp) && Math.round(n.endTimestamp) === Math.round(t.endTimestamp)) ?? null : null, s = {
					rest: a("rest", i),
					sleep: a("sleep", {
						startTimestamp: t.onset,
						endTimestamp: t.offset
					})
				}, o = {}, l = {};
				for (const [n, r, c, u] of fi) {
					const e = s[r]?.[c] ?? null;
					o[n] = e, l[u] = null == e ? s[r] ? "source_reported_missing" : "not_computed_for_export" : void 0;
				}
				return {
					metrics: o,
					reasons: l,
					metricMissingReason: "not_computed_for_export",
					inBedSpan: i
				};
			} }
		} : gi.forFile(e, t);
	} },
	sourceAnalysis: {
		artifacts: [{
			entry: Mn,
			rows: (e) => e.actiwareIntervalRows?.length ?? 0,
			fileRows: (e) => e.actiwareIntervalRows,
			detail: (e) => `${String(e)} Actiware intervals`,
			columns: ei.length,
			chunkField: "actiwareIntervalRows",
			csv: (e) => function(e, t = !1) {
				const n = t ? Tn.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], i = [[
					...ei,
					...n.map(([, e]) => e + "_missing_reason"),
					...t ? [
						"Participant ID_missing_reason",
						"Origin_missing_reason",
						"Analysis_missing_reason",
						...ti.map((e) => e + "_missing_reason")
					] : []
				].join(",")], a = (e) => C[e].header;
				for (const { filename: s, participantId: o, studyDate: l, intervalNumber: c, interval: u, statistics: d, invalidNight: m } of e) {
					const e = !0 === m && !Number.isFinite(u.startTimestamp), [p, g, f] = oi(u.startTimestamp), [h, _, w] = oi(u.endTimestamp), v = new Map([
						[a("filename"), s],
						[a("participant_id"), o ?? ""],
						[a("study_date"), l],
						[a("interval_kind"), m ? Xr : u.kind],
						[a("interval_number"), null == c ? "" : String(c)],
						[a("interval_source"), e ? "" : u.source],
						[a("interval_start_date"), p],
						[a("interval_start_day"), g],
						[a("interval_start_time"), f],
						[a("interval_end_date"), h],
						[a("interval_end_day"), _],
						[a("interval_end_time"), w],
						[a("interval_origin"), e ? "" : u.origin],
						[a("interval_analysis"), u.analysis ?? ""],
						...Tn.map(([, e]) => [e, d?.printed?.[e] ?? ""]),
						...ti.map((e) => [e, m ? "" : u.subjectiveScores?.[e] ?? ""])
					]), y = n.map(([e]) => {
						if (m) return "invalid_night";
						if (!d || null != d[e]) return "";
						if (e.startsWith("off_wrist")) return "source_reported_missing";
						const t = /_(white|red|green|blue)(?:_percent)?$/u.exec(e)?.[1];
						return t && null == d["invalid_" + t + "_percent"] ? "source_reported_missing" : "";
					}), b = ti.map((e) => m ? "invalid_night" : u.subjectiveScores?.[e] ? "" : "source_no_subjective_scores");
					i.push([
						...ei.map((e) => ai.has(e) ? v.get(e) ?? "" : r(v.get(e) ?? "")),
						...y,
						...t ? [
							o ? "" : "source_reported_missing",
							e ? "invalid_night" : u.origin ? "" : "source_reported_missing",
							u.analysis ? "" : m ? "invalid_night" : "not_applicable_to_row",
							...b
						] : []
					].join(","));
				}
				return `${i.join("\n")}\n`;
			}(e.actiwareIntervalRows ?? [], !0),
			validatesAgainstOwnRows: !0
		}, {
			entry: Sn,
			rows: (e) => e.actiwareSleepWakeCsv?.rows ?? 0,
			fileRows: (e) => e.actiwareSleepWakeRows,
			detail: (e) => `${String(e)} Actiware Sleep/Wake epochs`,
			columns: li.length,
			encode: (e) => e.actiwareSleepWakeCsv.bytes,
			streamed: !0
		}],
		async fileStats({ file: e, fileId: t, dateRange: n, scoredDates: r }, i, a) {
			const s = await i.actiwareFileData.get(t);
			return {
				actiwareIntervalRows: s ? (await ri({
					...e,
					...s
				}, n, a)).length : 0,
				actiwareSleepWakeRows: s?.actiwareSleepWake ? await ui(s.actiwareSleepWake, n, new Set(r), a) : 0,
				...!0 === s?.actiwareStatisticsNeedsRecompute ? { actiwareStatisticsStale: !0 } : {}
			};
		},
		preflight: (e, t) => !0 !== e.actiwareStatisticsStale ? null : {
			severity: "blocker",
			title: `${t()}: Actiware statistics need reprocessing`,
			body: "A marker save could not recompute this file's Actiware statistics, so actiware_intervals_export.csv would print values for intervals the scorer has since moved. Make any edit on one of its nights in the Sleep tab (a note is enough): the next save that succeeds recomputes every night. Or deselect the file."
		},
		plannedMissingReasonBytes: (e) => 3 * (e.actiwareSleepWakeRows ?? 0) * (256 + 4 * (e.filename.length + (e.participantId?.length ?? 0))),
		missingReasonBytes: (e) => e.actiwareSleepWakeCsv?.reasonChunks.reduce((e, t) => e + t.byteLength, 0),
		async produceEntries(e, t, n) {
			const r = await async function({ fileIds: e, dateRange: t, username: n, signal: r }, i, a) {
				r?.throwIfAborted();
				const s = i.inputs("actiwareInterval", e), o = s.studySettings[0]?.extraSettings?.analysis_paradigm, l = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), c = [];
				for (const u of l) {
					r?.throwIfAborted();
					const e = s.actiwareFileData.find((e) => e.fileId === u.id), l = i.scoredMarkers(s, u.id, n), d = [...l].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort(), m = s.actiwareStatisticsInputs.find((e) => e.fileId === u.id), p = (e) => a.actiwareIntervalStatistics(e), g = le(u, o) === v.rest_intervals, f = g ? await qr(e?.actiwareIntervals, m?.input, d, p) : await Kr({
						file: e ?? {},
						statisticsInput: m?.input
					}, l, p, a);
					r?.throwIfAborted();
					const h = await ri({
						...u,
						...e,
						actiwareStatistics: f ?? []
					}, t, a, g ? { invalidDates: d } : void 0), _ = new Set(l.keys()), w = new Set(d.filter((e) => !t || e >= t[0] && e <= t[1]));
					c.push(...ii(h.filter((e) => _.has(e.studyDate)), w, u));
				}
				return c;
			}(e, t, n), i = di(e, t, n), a = await i.next();
			let s = a.done ? 0 : a.value.rows;
			const o = async function* () {
				if (!a.done) {
					yield a.value;
					for await (const e of i) s += e.rows, yield e;
				}
			}();
			return {
				artifacts: {
					actiwareIntervalRows: r,
					actiwareSleepWakeCsv: {
						rows: s,
						bytes: /* @__PURE__ */ new Uint8Array(),
						reasonChunks: []
					}
				},
				streams: { [Sn]: o },
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
}, vi = {
	sleep_periods: gi,
	rest_intervals: wi.nightRecord
}, yi = [wi.sourceAnalysis].flatMap((e) => e.artifacts), bi = wi.modules, ki = [
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
], Ti = [
	"temperature",
	"lux",
	"redLight",
	"greenLight",
	"blueLight"
], Mi = j.invalid_night_row?.markerTypeCell ?? "", Si = j.nonwear_row?.markerTypeCell ?? "";
function xi(e) {
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
function Ii(e) {
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
async function Ai(e, t, n, r, i, a, s) {
	try {
		return {
			metrics: t ? await Ft(e, t, n, r, i, a, s) : await Lt(e, n, r, i, a, null, s),
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
async function Ri(e, t, n, r) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const i = new Set(n.filter((t) => t.markerType === p.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return i.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : fr(t.filter((e) => i.has(e.date)), e, t[0]?.epochLengthSeconds, r);
}
function Ni(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const Ei = [
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
], $i = {
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
function Ci(e, t) {
	if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
	const n = [], r = new lt(t?.byteLength ? {
		level: 1,
		dictionary: t
	} : { level: 1 }, (e) => {
		n.push(e);
	});
	r.push(e, !1), r.flush(!1);
	const i = r.s.r ?? 0;
	if (!Number.isInteger(i) || i < 0 || i > 2047) throw new Error("ZIP compression state is unreadable.");
	const a = (7 & i) > 5 ? 2 : 1, s = new Uint8Array(a + 4);
	return s[0] = i >> 3, s[a + 2] = 255, s[a + 3] = 255, n.push(s), U(n);
}
L.sleep_csv.filter((e) => "server" !== C[e].plane).map((e) => C[e].header), new Uint8Array([3, 0]);
const Oi = (() => {
	const e = /* @__PURE__ */ new Int32Array(256);
	for (let t = 0; t < 256; t += 1) {
		let n = t;
		for (let e = 0; e < 8; e += 1) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
		e[t] = n;
	}
	return e;
})();
function Di(e) {
	let t = -1;
	for (const n of e) t = Oi[255 & (t ^ n)] ^ t >>> 8;
	return ~t >>> 0;
}
function ji(e, t) {
	let n = 2147483648, r = 0, i = t;
	for (; !(e & n) || (r ^= i, e & n - 1);) n >>>= 1, i = 1 & i ? i >>> 1 ^ 3988292384 : i >>> 1;
	return r >>> 0;
}
(() => {
	const e = [1 << 30];
	for (let t = 1; t < 32; t += 1) e.push(ji(e[t - 1], e[t - 1]));
})();
const Li = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], Fi = [
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
], Bi = [
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
], Pi = [
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
], Wi = ["fileId", ...l], zi = {
	files: [
		...Li,
		"ggirTimezone",
		"recording",
		"ggirClockSteps",
		"sourceType",
		"sourceProfileId",
		"navigationFacts"
	],
	markers: Fi,
	activityDays: Bi,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: Pi,
	actiwareFileData: [
		"fileId",
		"actiwareIntervals",
		"actiwareStatistics"
	]
}, Gi = {
	files: [...Li, "ggirClockSteps"],
	markers: Fi,
	activityDays: Bi,
	ggirResultsBundles: Pi,
	ggirResultsBlobs: Wi,
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
}, Vi = {
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
		w
	]
}, Hi = {
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
}, Ui = {
	sleep: zi,
	nonwear: zi,
	summary: zi,
	wide: zi,
	circadian: {
		files: Li,
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
	ggirReport: Gi,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: Fi,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	actiwareInterval: {
		files: [
			...Li,
			"sourceType",
			"sourceProfileId"
		],
		markers: Fi,
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
		files: Li,
		markers: Fi,
		actiwareFileData: [
			"fileId",
			"actiwareSleepWake",
			"actiwareWakeThreshold"
		]
	},
	codebook: {},
	manifest: Vi,
	audit: Hi,
	physicalActivity: {
		files: [
			...Li,
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
		markers: Fi,
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
}, qi = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakMap();
function Ji(e) {
	if (!e || "object" != typeof e) return e;
	const t = Ki.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return function(e, t, n, r) {
			for (let i = 0; i < n.byteLength;) {
				const t = n.subarray(i, i + yn), a = e.read(t, { at: r + i });
				if (!Number.isInteger(a) || a <= 0 || a > t.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
				i += a;
			}
		}(t.store, 0, e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(Ji) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ji(t)])) : structuredClone(e);
}
function Yi(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(Yi), Object.freeze(e)), e;
}
var Zi = class extends Error {};
function Qi(e, t, n) {
	const r = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new Zi(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (r(t), Reflect.get(e, t, n)),
		has: (e, t) => (r(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (r(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function Xi(e, t, n = []) {
	const r = qi.get(e);
	if (!r) throw new Zi("Export requires a captured input snapshot");
	const i = Object.entries(Ui).find(([, e]) => e === t)?.[0];
	if (!i) throw new Zi("Export producer has no registered input declaration");
	const a = {};
	for (const [s, o] of Object.entries(t)) {
		const e = r[s].filter((e) => !n.length || "studySettings" === s || n.includes("files" === s ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const r of o.filter((e) => e in t)) Object.defineProperty(n, r, {
				enumerable: !0,
				get: () => Yi(Ji(t[r]))
			});
			return Qi(n, o, `${i}: undeclared field ${s}.`);
		});
		Object.assign(a, { [s]: Object.freeze(e) });
	}
	return Qi(a, Object.keys(t), `${i}: undeclared table `);
}
function ea(e, t, n) {
	const r = /* @__PURE__ */ new Map();
	for (const i of e.markers) {
		if (i.fileId !== t || i.username !== n) continue;
		const e = Z(i), a = r.get(i.date) ?? [];
		a.push(e), r.set(i.date, a);
	}
	return r;
}
function ta(e, t, n) {
	return new Map([...ea(e, t, n)].sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => [e, W(t)]));
}
function na(e, t, n) {
	return new Map([...ea(e, t, n)].flatMap(([e, t]) => {
		const n = W(t.filter(c));
		return n ? [[e, n]] : [];
	}));
}
function ra(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function ia(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function aa(e, t, n, r, i) {
	const a = [], s = Xi(n, Ui.event, e), o = [...s.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		i?.throwIfAborted();
		const e = ia(l, ra(s, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await dn(e, I(i)), c = new Set(na(s, l.id, r).keys());
		for (const r of e) {
			const e = o(r);
			t && (e < t[0] || e > t[1]) || c.has(e) && a.push({
				filename: l.filename,
				participantId: l.participantId ?? null,
				studyDate: e,
				localTimestamp: r,
				gmtOffsetMinutes: n
			});
		}
	}
	return a;
}
D("event_marker_csv", "local"), M.GGIR_CORRECTED_WARM, [
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
].join(","), fe.length;
var sa = s({
	GgirReviewChangedError: () => ka,
	editsFromMarkers: () => ha,
	getGgirMarkerInputs: () => _a,
	ggirNightEdits: () => fa,
	ggirNightRecords: () => ga,
	hasGgirRecomputeFailure: () => da,
	mergeGgirSleepMarkers: () => pa,
	recomputeGgirResults: () => ya,
	recoverPendingGgirRecomputes: () => ba,
	reviewGgirResultsForMarkers: () => Ma,
	scheduleGgirRecompute: () => va
});
const oa = new EventTarget(), la = /* @__PURE__ */ new WeakMap(), ca = 800, ua = "Update GGIR review";
function da(e, t, n) {
	return T.getState().jobs[`${n.name}:${wa(e, t)}`]?.status === b.FAILED;
}
function ma(e, t, n, r, i) {
	if (i?.aborted || function(e) {
		return e instanceof Error && e.name === u.errnames.DatabaseClosed;
	}(r)) return;
	const a = wa(e, t), s = `${n.name}:${a}`, o = T.getState();
	o.jobs[s]?.controller.signal.aborted || o.jobs[s]?.status === b.ELSEWHERE || (o.update(s, {
		id: s,
		key: a,
		workspaceId: n.name,
		kind: M.GGIR_RECOMPUTE,
		label: ua,
		controller: o.jobs[s]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: b.FAILED
	}), n.isOpen() && S() === n && oa.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function pa(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function ga(e, t, n, r = [], i, a = I(i)) {
	const s = W([...n.values()].flat(), !0), o = s?.algorithm ?? Te(t), l = s?.detectionRule ?? null, c = /* @__PURE__ */ new Map();
	for (const [m, p] of n) {
		const e = W(p, !0);
		e && c.set(m, [{
			...e,
			algorithm: o,
			detectionRule: l
		}]);
	}
	const u = be(t), d = u.length ? await a.ggirLabelsToStoredMs(Float64Array.from(u.flatMap((e) => [e.onsetMs, e.wakeMs])), r) : [];
	for (const [m, g] of u.entries()) {
		const t = c.get(g.nightDate)?.[0], n = ne(g, t);
		"scored" !== n.kind && "invalid" !== n.kind ? c.set(g.nightDate, [{
			fileId: e,
			date: g.nightDate,
			username: Q,
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
			sleepMarkers: pa({
				markerType: p.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: d[2 * m] / 1e3,
				offsetTimestamp: d[2 * m + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : c.set(g.nightDate, t ? [t] : []);
	}
	return c;
}
async function fa(e, t, n, r = [], i, a = I(i)) {
	const s = await ga(e, t, n, r, i, a), o = new Map([...s].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : []));
	return {
		markersByAlgo: s,
		selected: o,
		edits: await ha(t, o, r, i, a)
	};
}
async function ha(e, t, n = [], r, i = I(r)) {
	const a = ke(e).flatMap((e) => {
		const n = ne(e, t.get(e.nightDate));
		return "scored" === n.kind && null != n.main.onsetTimestamp && null != n.main.offsetTimestamp ? [{
			w: e,
			onsetSec: n.main.onsetTimestamp,
			wakeSec: n.main.offsetTimestamp
		}] : [];
	});
	if (0 === a.length) return [];
	const s = await i.storedToGgirLabelsMs(Float64Array.from(a.flatMap(({ onsetSec: e, wakeSec: t }) => [1e3 * e, 1e3 * t])), n), o = await i.wallClockLabels(Float64Array.from([...s, ...a.flatMap(({ w: e }) => [e.onsetMs, e.wakeMs])])), l = 2 * a.length;
	return a.flatMap(({ w: e }, t) => {
		const n = o[2 * t], r = o[2 * t + 1];
		return n !== o[l + 2 * t] || r !== o[l + 2 * t + 1] ? [{
			night: e.night,
			onset: n,
			wake: r
		}] : [];
	});
}
async function _a(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [r, i] = await Promise.all([Y(e, t, n), J(e, n)]), a = new Map([...r].flatMap(([e, t]) => {
			const n = W(t, !0);
			return n ? [[e, n]] : [];
		})), s = i?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([s ?? [], [...a].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				ne(void 0, t)
			])]),
			markers: a,
			clockSteps: s,
			bundleRevision: i?.ggirBundleRevision
		};
	});
}
function wa(e, t) {
	return `${M.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function va(e, t, n, r) {
	if (!n.isOpen() || S() !== n || r?.aborted) return;
	let i = la.get(n);
	i || (i = /* @__PURE__ */ new Map(), la.set(n, i));
	const a = wa(e, t);
	clearTimeout(i.get(a)), i.set(a, setTimeout(() => {
		i.delete(a), n.files.get(e).then((i) => {
			if (i?.ggirBundleRevision && n.isOpen() && S() === n && !r?.aborted) return ya(e, t, n, r);
		}).catch((i) => {
			r?.aborted || i instanceof DOMException && "AbortError" === i.name || (ma(e, t, n, i, r), n.isOpen() && S() === n && (console.error("[ggir-results] recompute failed."), B("error", "GGIR results recompute failed", V(i))));
		});
	}, ca));
}
function ya(e, t, n, r, i = !0) {
	const a = (s, o = r) => R({
		kind: M.GGIR_RECOMPUTE,
		key: wa(e, t),
		label: ua,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (r) => {
			r.signal.throwIfAborted();
			const o = await async function(e, t, n, r, i, a = { active: () => n.isOpen() && S() === n }) {
				if (r.throwIfAborted(), !a.active()) return null;
				const { markerInputs: s, markers: o, clockSteps: l, bundleRevision: c } = await _a(e, t, n);
				if (!c) return null;
				const u = await n.ggirScorerReviews.get([e, t]);
				if (!a.active()) return null;
				r.throwIfAborted();
				if (u?.markerInputs === s && u.bundleRevision === c && (m = u, void 0 === a.correctedKey || 0 === m.edits.length || m.corrected?.key === a.correctedKey)) return i && oa.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), u.current ?? null;
				var m;
				const p = await n.ggirResultsBundles.get(e);
				if (!p) return null;
				const { edits: g } = await fa(e, p.imported, new Map([...o].map(([e, t]) => [e, [t]])), l, r, a.api);
				if (!a.active()) return null;
				const f = Ta(u, c, g), h = void 0 !== a.correctedKey && g.length > 0 && !p.ggirCorrections && !(f && u.corrected?.key === a.correctedKey), _ = g.length > 0 && (!f || h) ? d(p, await n.ggirResultsBlobs.get(e)) : p, w = f ? u.current : (await Ma(_, o, l, g, r, void 0, a.api)).current;
				let v = f ? u.corrected : void 0;
				if (h) {
					const t = await n.ggirCorrectedValues.get(e);
					if (!t || t.key !== a.correctedKey) return null;
					const i = Me(_, t).find((e) => "corrected" === e.set), s = i && (await Ma(i.bundle, o, l, g, r, void 0, a.api)).current;
					v = {
						key: t.key,
						...s ? { current: s } : {}
					};
				}
				r.throwIfAborted();
				const y = (/* @__PURE__ */ new Date()).toISOString();
				if (!a.active()) return null;
				const b = await F(n, [
					n.ggirResultsBundles,
					n.ggirScorerReviews,
					n.markers,
					n.files
				], async () => {
					if (!a.active()) return null;
					const i = await _a(e, t, n);
					return i.markerInputs === s && i.bundleRevision === c && (0 === await n.ggirResultsBundles.where(":id").equals(e).count() ? null : (r.throwIfAborted(), await n.ggirScorerReviews.put({
						fileId: e,
						scorer: t,
						...w ? { current: w } : {},
						edits: g,
						markerInputs: s,
						bundleRevision: c,
						updatedAt: y,
						...v ? { corrected: v } : {}
					}), !0));
				}, r);
				return b ? (oa.dispatchEvent(new CustomEvent("updated", { detail: {
					fileId: e,
					scorer: t,
					db: n
				} })), r.throwIfAborted(), w ?? _.imported) : (r.throwIfAborted(), !1 !== b && null);
			}(e, t, n, r.signal, i);
			return r.signal.throwIfAborted(), !1 !== o ? o : (s < 2 && a(s + 1, r.signal).catch((i) => ma(e, t, n, i, r.signal)), null);
		}
	});
	return a(0);
}
function ba(e, t) {
	return R({
		kind: M.GGIR_RECOVERY,
		key: M.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = !1;
			const r = () => !t.signal.aborted && e.isOpen() && S() === e;
			try {
				if (!r()) return;
				const a = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: s } = await import("./ggir-import-BVUz9d2B.js").then((e) => e.t);
				for (const o of a) {
					if (t.signal.throwIfAborted(), !r()) return;
					try {
						const [a] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), s(o, e, t.signal)]), l = await e.markers.where("fileId").equals(o).toArray(), c = /* @__PURE__ */ new Set([...l.map((e) => e.username), ...a.map((e) => e.scorer)]);
						c.delete(Q);
						for (const s of c) {
							if (!r()) return;
							try {
								const n = da(o, s, e);
								if (!n) {
									const { markerInputs: t, bundleRevision: n } = await _a(o, s, e), r = a.find((e) => e.scorer === s);
									if (n && r?.markerInputs === t && r.bundleRevision === n) continue;
								}
								await ya(o, s, e, t.signal, n);
							} catch (i) {
								n = !0, ma(o, s, e, i, t.signal);
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
				const i = Object.values(T.getState().jobs).filter((t) => y(t) && t.workspaceId === e.name && t.kind === M.GGIR_RECOMPUTE && t.status === b.FAILED);
				for (const t of i) {
					const i = t.key.slice(M.GGIR_RECOMPUTE.length + 1);
					if (!r()) break;
					const a = i.indexOf(":"), s = Number(i.slice(0, a)), o = JSON.parse(i.slice(a + 1));
					try {
						await e.transaction("r", e.ggirResultsBundles, e.markers, e.ggirScorerReviews, async () => {
							if (!r()) return;
							const [n, i, a] = await Promise.all([
								e.ggirResultsBundles.where(":id").equals(s).count(),
								e.markers.where("fileId").equals(s).filter((e) => e.username === o).count(),
								e.ggirScorerReviews.where("[fileId+scorer]").equals([s, o]).count()
							]);
							r() && (0 === n || 0 === i && 0 === a) && (T.getState().dismiss(t.id), oa.dispatchEvent(new CustomEvent("updated", { detail: {
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
var ka = class extends Error {
	constructor() {
		super("a night of this recording was edited during the export; export again");
	}
};
function Ta(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
async function Ma(e, t, n = [], r, a, s, o) {
	const l = r ?? await ha(e.imported, t, n, a, o);
	let c;
	a?.throwIfAborted();
	const u = s?.review;
	if (Ta(u, s?.bundleRevision, l)) c = u.current;
	else {
		if (s && l.length > 0 && !e.part1) throw new ka();
		if (l.length > 0 && e.ms2 && e.ms3) {
			const t = (e) => e ? new Uint8Array(e) : void 0, n = t(e.ms2), r = t(e.ms3), s = t(e.ms4), u = t(e.ms5), d = t(e.sleeplogRData), m = (t) => t.reviewGgirResults({
				part1: new Uint8Array(e.part1),
				configCsv: e.configCsv,
				recordingId: i(e.recordingFile),
				...n ? { ms2: n } : {},
				...r ? { ms3: r } : {},
				...s ? { ms4: s } : {},
				...u ? { ms5: u } : {},
				...d ? { sleeplogRData: d } : {},
				...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
				edits: l,
				...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
				...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
				crossCheck: !1
			});
			c = ve(await (o ? m(o) : A(a, m)));
		}
	}
	a?.throwIfAborted();
	const d = Object.getOwnPropertyDescriptors(e);
	return delete d.current, Reflect.deleteProperty(d, "edits"), Object.defineProperties({
		...c ? { current: c } : {},
		edits: l
	}, d);
}
const Sa = "Also export corrected values was off at export";
bi.sleep;
function xa(e) {
	return function(e) {
		const t = Object.freeze({ files: Yi((e.files ?? []).map((e) => Object.fromEntries(Li.map((t) => [t, Ji(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
		return qi.set(t, e), t;
	}(e);
}
bi.producers, bi.archive;
const Ia = /* @__PURE__ */ new WeakMap(), Aa = 4;
function Ra(e, t, n, r) {
	let i = Ia.get(e);
	i || (i = /* @__PURE__ */ new Map(), Ia.set(e, i));
	const a = JSON.stringify([t, n]);
	let s = i.get(a);
	if (!s) {
		for (; i.size >= Aa;) i.delete(i.keys().next().value);
		s = async function(e, t, n, r) {
			const i = Xi(e, Ui.ggirReport, [t]), a = i.files.find((e) => e.id === t), s = i.ggirResultsBundles.find((e) => e.fileId === t), o = s && d(s, i.ggirResultsBlobs.find((e) => e.fileId === t)), l = ea(i, t, n), c = o ? await fa(t, o.imported, l, a.ggirClockSteps, r) : void 0, u = c?.markersByAlgo ?? l, m = c?.selected ?? new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), p = new Set([...m].filter(([, e]) => "invalid" === ne(void 0, e).kind).map(([e]) => e)), g = i.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n), f = {
				review: g,
				bundleRevision: a.ggirBundleRevision
			}, h = o ? await Ma(o, m, a.ggirClockSteps, c?.edits, r, f) : void 0, _ = h ? await Ea(h, p, r) : void 0, w = i.ggirCorrectedValues.find((e) => e.fileId === t), v = g?.corrected && w && g.corrected.key === w.key ? {
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
				sets: o && h ? await Promise.all(Me(o, w, w?.notApplied !== Sa).map(async ({ set: e, bundle: t }) => t === o ? _ : Ea(await Ma(t, m, a.ggirClockSteps, h.edits, r, "corrected" === e ? v : void 0), p, r))) : [],
				invalidDates: p
			};
		}(e, t, n, r), i.set(a, s), s.catch(() => {
			i.get(a) === s && i.delete(a);
		});
	}
	return s;
}
let Na;
async function Ea(e, t, n) {
	const { ggirCell: r, ggirNum: i } = await import("./ggir-results-types-zXnmQuny.js").then((e) => e.i), a = e.part2Reports?.["part2_daysummary.csv"], s = /* @__PURE__ */ new Map();
	if (a) for (let u = 0; u < a.rows; u++) {
		const e = r(a, C.ggir_id.header, u), t = rr(r(a, C.ggir_calendar_date.header, u));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		s.set(n, s.has(n) ? null : u);
	}
	const o = ir(e.imported, "nights"), l = C.ggir_nonwear_perc_spt.header, c = async (t) => {
		const c = t.nights, u = Array.from({ length: c.rows }, (e, t) => {
			const n = r(c, C.ggir_id.header, t), l = s.get(JSON.stringify([null == n ? null : String(n), o(c, t, !1)])), u = a && null != l;
			return {
				id: n,
				day: l,
				valid: u ? r(a, C.ggir_day_valid_hours.header, l) : null,
				hours: u ? r(a, C.ggir_day_hours.header, l) : null,
				validNumber: u ? i(a, C.ggir_day_valid_hours.header, l) : null,
				hoursNumber: u ? i(a, C.ggir_day_hours.header, l) : null
			};
		}), d = u.flatMap((e, t) => null != e.validNumber && null != e.hoursNumber ? [{
			index: t,
			valid: e.validNumber,
			hours: e.hoursNumber
		}] : []), m = /* @__PURE__ */ new Map();
		if (d.length > 0) {
			const e = await I(n).ggirDayValidFractions(Float64Array.from(d, (e) => e.valid), Float64Array.from(d, (e) => e.hours));
			d.forEach((t, n) => m.set(t.index, e[n] ?? null));
		}
		const p = !c.columns.includes(l) && u.some((e, n) => !t.nightRecomputed[n]) ? await function(e, t) {
			const n = e.cleanedNightsCsv;
			if (!n) return Promise.resolve(void 0);
			if (Na?.csv !== n || Na.config !== e.configCsv) {
				const r = I(t).readGgirReportCsv(n, e.configCsv);
				Na = {
					csv: n,
					config: e.configCsv,
					table: r
				}, r.catch(() => {
					Na?.table === r && (Na = void 0);
				});
			}
			return Na.table;
		}(e, n) : void 0, g = u.map(({ id: e, day: n, valid: s, hours: o, validNumber: u, hoursNumber: d }, g) => {
			const f = m.get(g) ?? null, h = i(c, C.ggir_night.header, g), _ = Array.from({ length: t.days.rows }, (e, t) => t).find((e) => "WW" === r(t.days, "window", e) && i(t.days, "night_number", e) === h), w = p ? Array.from({ length: p.rows }, (e, t) => t).find((t) => String(r(p, C.ggir_id.header, t)) === String(e) && i(p, C.ggir_night.header, t) === h) : void 0, v = {
				ggir_nonwear_perc_spt: t.nightRecomputed[g] ? void 0 === _ ? null : r(t.days, l, _) : c.columns.includes(l) ? r(c, l, g) : p?.columns.includes(l) && void 0 !== w ? r(p, l, w) : void 0 === _ ? null : r(t.days, l, _),
				ggir_day_valid_hours: s,
				ggir_day_hours: o,
				ggir_day_valid_fraction: f
			}, y = (a ? null === n ? "duplicate_part2_day" : void 0 === n ? "no_matching_part2_day" : null : "source_reported_missing") ?? "source_reported_missing";
			return {
				values: v,
				reasons: {
					ggir_day_valid_hours: null == u ? y : null,
					ggir_day_hours: null == d ? y : null,
					ggir_day_valid_fraction: null != f ? null : null != d && d <= 0 ? "not_applicable_to_row" : y
				}
			};
		}), f = L.ggir_review_night_extension, h = [.../* @__PURE__ */ new Set([
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
		...e.personReports && (e.edits.length > 0 || t.size > 0) ? { personRecomputed: await lr(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await c(e.imported),
		...e.current ? { current: await c(e.current) } : {}
	};
}
async function $a(t, n, r, { signal: i } = {}) {
	i?.throwIfAborted();
	const a = t.files.filter((e) => n.includes(e.id)), s = a.map((e) => e.id), o = /* @__PURE__ */ new Map();
	let l = !1;
	try {
		const e = await function(e, { fileIds: t, dateRange: n, signal: r }) {
			const i = Xi(e, Ui.circadian, t);
			return async function(e, t, { dateRange: n, signal: r }) {
				const i = I(r), a = [];
				let s = 0;
				for (const o of e) {
					if (!o.id) continue;
					r?.throwIfAborted();
					const e = await t(o.id), l = [];
					for (const t of e.values()) {
						if (r?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
						s += 1;
						const e = mt(o.id, t);
						e && l.push(e);
					}
					if (0 === l.length) continue;
					const { request: c, transfer: u } = dt(l.map((e) => e.wire)), d = await i.computeCircadian(_(c, u));
					r?.throwIfAborted();
					const m = new Map(l.map((e) => [e.wire.id, e.source]));
					for (const t of d.day_summaries) {
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
			}(t.length > 0 ? i.files.filter((e) => null != e.id && t.includes(e.id)) : i.files, (e) => ra(i, e), {
				dateRange: n,
				signal: r
			});
		}(t, {
			fileIds: s,
			dateRange: r.dateRange,
			signal: i
		});
		for (const t of e.daySummaries) o.set(`${t.fileId}|${t.date}`, {
			l5Hour: t.l5Hour,
			m10Hour: t.m10Hour
		});
	} catch (g) {
		if (g instanceof Zi) throw g;
		if (i?.throwIfAborted(), l = !0, g instanceof DOMException && "AbortError" === g.name) throw g;
	}
	const u = await Ca(a[0].filename, "computing its sleep rows", () => async function(t, n, r, i, a, s, o) {
		const l = a && a.trim().length > 0 ? a.trim() : null, u = Xi(s, Ui.sleep, t), d = u.files, m = Qt(u.studySettings[0]?.extraSettings), g = oe(u.studySettings[0]?.extraSettings?.analysis_paradigm), f = (t.length > 0 ? d.filter((e) => null != e.id && t.includes(e.id)) : [...d]).sort((e, t) => e.filename.localeCompare(t.filename)), [h, _] = r ?? ["", ""], w = [], v = [], y = [], b = [], k = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), M = async () => {
			for (const [e, t] of k) T.set(e, await Ri(e, t, w, o));
			k.clear();
		}, S = /* @__PURE__ */ new Map(), x = (e) => {
			const t = JSON.stringify(e);
			let n = S.get(t);
			return n || (n = I(o).exportNapAggregate(e), S.set(t, n)), n;
		}, A = await Promise.all(f.map((e) => Ra(s, e.id, n, o)));
		for (const [N, E] of f.entries()) {
			if (o?.throwIfAborted(), N > 0 && f[N - 1].filename !== E.filename && await M(), !E.id) continue;
			const t = ra(u, E.id), { bundle: n, markersByAlgo: a } = A[N], s = n?.edits ?? [], d = n ? ke(n.imported) : [], { zone: T } = await nn(E, m, o), S = [.../* @__PURE__ */ new Set([...E.availableDates, ...d.map((e) => e.nightDate)])].sort(), R = r ? S.filter((e) => e >= h && e <= _) : S;
			if (n) {
				const e = new Set(be(n.imported).map((e) => e.night));
				for (const t of d) {
					if (e.has(t.night) || !R.includes(t.nightDate)) continue;
					const r = ne(t, a.get(t.nightDate)?.[0]).kind;
					"scored" !== r && "invalid" !== r && y.push({
						file: "sleep_export.csv",
						row: 0,
						key: `${C.filename.header}=${E.filename}|${C.study_date.header}=${t.nightDate}`,
						column: `GGIR night ${String(t.night)}: ${ye(n.imported, t.night)}`,
						reason: "ggir_night_excluded"
					});
				}
			}
			const O = z(t.values()), D = vi[le(E, g)].forFile(u, E.id), j = R.flatMap((e) => (a.get(e) ?? []).filter((e) => c(e) || e.nonwearMarkers.length > 0).map((t) => ({
				markers: t,
				sleepPeriods: D.sleepPeriodsOf(e, t),
				nonwear: t.nonwearMarkers.map((e) => ({
					start: e.startTimestamp,
					end: e.endTimestamp
				}))
			}))), L = [...t.keys()].sort().map((e) => t.get(e)), F = L.map((e) => H(e).timestamps), B = Ti.flatMap((e) => {
				if (!L.some((t) => t[e])) return [];
				const t = [], n = [];
				for (const [r, i] of L.entries()) {
					const a = i[e];
					if (!a) continue;
					const s = new Float64Array(a), o = F[r];
					for (let e = 0; e < Math.min(s.length, o.length); e++) t.push(o[e]), n.push(s[e]);
				}
				return [{
					field: e,
					timestamps: Float64Array.from(t),
					values: Float64Array.from(n)
				}];
			}), P = 0 === j.length ? [] : await I(o).exportFileNightFigures(j.map(({ sleepPeriods: e, nonwear: t }) => ({
				periods: e.map((e) => ({
					start: e.onsetTimestamp,
					end: e.offsetTimestamp
				})),
				nonwear: t
			})), B), W = /* @__PURE__ */ new Map();
			let G = 0;
			for (const e of j) W.set(e.markers, {
				...e,
				figures: P.slice(G, G + e.sleepPeriods.length)
			}), G += e.sleepPeriods.length;
			for (const r of R) {
				o?.throwIfAborted();
				const c = a.get(r);
				if (c && 0 !== c.length) for (const a of c) {
					const c = W.get(a);
					if (!c) continue;
					const { sleepPeriods: u, figures: m } = c, g = E.participantId ?? null, f = E.id, h = a.algorithm ?? null, _ = a.username ?? null, y = a.needsConsensus, M = a.notes, S = t.get(r), A = await $(r, E.navigationFacts, I(o)), R = t.get(A), N = {
						fileId: f,
						filename: E.filename,
						participantId: g,
						studyDate: r,
						algorithm: h,
						scoredBy: _,
						needsConsensus: y,
						notes: M,
						meanTemperature: null,
						meanWhiteLight: null,
						meanRedLight: null,
						meanGreenLight: null,
						meanBlueLight: null,
						detectionRule: a.detectionRule ?? null,
						periodGuider: a.periodGuider ?? null,
						...xi(a.sleepPeriodDetectionConfig),
						algorithmVersion: a.algorithmVersion ?? null,
						verificationStatus: null,
						studyId: l,
						markerStepSeconds: e(h, E.epochLengthSeconds),
						dstTransition: await he(T, r, void 0, I(o))
					}, j = await x(u.filter((e) => e.markerType === p.NAP).map((e) => ({
						start: e.onsetTimestamp,
						end: e.offsetTimestamp
					}))), L = i?.get(`${String(f)}|${r}`), F = {
						l5Hour: L?.l5Hour ?? null,
						m10Hour: L?.m10Hour ?? null,
						napCount: j.napCount,
						totalNapMinutes: j.napCount > 0 ? j.totalNapMinutes : null
					}, P = O(h), z = Bt(S, P), G = `${E.filename}\0${g ?? ""}\0${N.algorithm ?? ""}\0${N.detectionRule ?? ""}`, V = k.get(G) ?? [];
					V.push({
						date: r,
						epochLengthSeconds: E.epochLengthSeconds || 60,
						timestamps: z.timestamps,
						states: z.algorithmResults,
						stale: "stale" === P.status
					}), k.set(G, V);
					const U = H(S), q = await gn(t, r, P, {
						signal: o,
						nextDate: A
					}), K = m.map(({ means: e }) => new Map(B.map(({ field: t }, n) => [t, e[n] ?? null]))), J = async (e, t, i) => {
						let l = null;
						const c = d.find((e) => e.nightDate === r), u = n && c && e.markerType === p.MAIN_SLEEP && "invalid" !== ne(c, a).kind, g = c && s.some((e) => e.night === c.night), f = Ii(null), h = {};
						let _ = "not_applicable_to_row";
						const w = D.sleepRowMetrics?.cells(e) ?? null;
						if (w && (_ = w.metricMissingReason, Object.assign(f, w.metrics), Object.assign(h, w.reasons)), !u && !w && e.onsetTimestamp && e.offsetTimestamp) {
							const { timestamps: t, algorithmResults: n, activity: r, scoresStale: i } = q;
							if (null !== i && 0 === b.length && b.push({
								component: "metric_computation",
								code: "unavailable",
								message: i
							}), _ = null !== i ? "scores_from_another_config" : null == n ? "no_scored_epochs" : null == r ? "channel_unavailable" : 0 === t.length ? "no_valid_epochs" : void 0, null != n && t.length > 0 && (null != r || U.ggir)) {
								const i = U.epochSec ?? (E.epochLengthSeconds || 60), a = await Ai(n, r, t, e.onsetTimestamp, e.offsetTimestamp, i, o);
								l = a.metrics, l || a.error || (_ = "no_valid_epochs"), a.error && (_ = "not_computed_for_export"), a.error && 0 === b.length && b.push({
									component: "metric_computation",
									code: "unavailable",
									message: "Metric computation failed for at least one selected period; those rows carry no numerics."
								});
							}
						}
						if (u) {
							_ = "channel_unavailable";
							const e = g ? n.current?.nights : n.imported.nights, t = e ? Ie(e, C.ggir_night.header, c.night) : -1;
							for (const [n, r, i, a] of ki) {
								const s = e ? xe(e, C[r].header, t) : null;
								f[n] = null == s ? null : s * a, h[i] = null == s ? g ? "not_computed_for_export" : "source_reported_missing" : void 0;
							}
						}
						(u || w || l && !("averageAwakeningLengthMinutes" in l)) && (h.average_awakening_length_minutes = "not_computed_for_export");
						const { figures: v } = m[i], y = Boolean(e.onsetTimestamp && e.offsetTimestamp), k = (e) => y ? K[i].get(e) ?? null : null, T = {
							...N,
							...F,
							periodIndex: e.markerIndex,
							markerType: e.markerType,
							onsetTimestamp: e.onsetTimestamp,
							offsetTimestamp: e.offsetTimestamp,
							...u || w ? f : Ii(l),
							inBedTimestamp: w?.inBedSpan?.startTimestamp ?? null,
							outOfBedTimestamp: w?.inBedSpan?.endTimestamp ?? null,
							metricMissingReason: _,
							isInvalidNight: t,
							meanTemperature: k("temperature"),
							meanWhiteLight: k("lux"),
							meanRedLight: k("redLight"),
							meanGreenLight: k("greenLight"),
							meanBlueLight: k("blueLight"),
							sleepMidpointTimestamp: y ? v.midpointTimestamp : null,
							sleepMidpointHour: y ? v.midpointClockHour : null,
							validWearMinutes: v.validWearMinutes
						}, M = (e, t) => null != e ? void 0 : y ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
						return T.sensorMissingReasons = {
							mean_temperature_c: M(T.meanTemperature, Boolean(S?.temperature || R?.temperature)),
							mean_white_light_lux: M(T.meanWhiteLight, Boolean(S?.lux || R?.lux)),
							mean_red_light: M(T.meanRedLight, Boolean(S?.redLight || R?.redLight)),
							mean_green_light: M(T.meanGreenLight, Boolean(S?.greenLight || R?.greenLight)),
							mean_blue_light: M(T.meanBlueLight, Boolean(S?.blueLight || R?.blueLight))
						}, T.derivedMissingReasons = {
							...h,
							l5_hour: null == T.l5Hour ? L ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							m10_hour: null == T.m10Hour ? L ? "no_valid_epochs" : "not_computed_for_export" : void 0,
							sleep_midpoint_time: null == T.sleepMidpointTimestamp ? y ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							sleep_midpoint_hour: null == T.sleepMidpointHour ? y ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
							valid_wear_minutes: null == T.validWearMinutes ? y ? "no_valid_epochs" : "not_applicable_to_row" : void 0
						}, T;
					};
					if (a.isInvalidNight) {
						w.push({
							...N,
							...F,
							periodIndex: null,
							markerType: Mi,
							onsetTimestamp: null,
							offsetTimestamp: null,
							...Ii(null),
							isInvalidNight: !0,
							sleepMidpointTimestamp: null,
							sleepMidpointHour: null,
							validWearMinutes: null
						});
						for (const [e, t] of u.entries()) w.push(await J(t, !0, e));
					} else for (const [e, t] of u.entries()) w.push(await J(t, !1, e));
					for (const e of a.nonwearMarkers) v.push({
						...N,
						...F,
						periodIndex: e.markerIndex ?? 0,
						markerType: Si,
						onsetTimestamp: e.startTimestamp,
						offsetTimestamp: e.endTimestamp,
						...Ii(null),
						isInvalidNight: !1,
						sleepMidpointTimestamp: null,
						sleepMidpointHour: null,
						validWearMinutes: null
					});
				}
			}
		}
		await M(), w.sort(Ni), v.sort(Ni);
		const R = await async function(e, t) {
			const n = e.filter((e) => e.markerType === p.MAIN_SLEEP), r = /* @__PURE__ */ new Map();
			for (const o of n) {
				const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = r.get(e);
				t ? t.push(o) : r.set(e, [o]);
			}
			const i = [...r], a = await I(t).summarizeExportGroups(i.map(([, e]) => e.map((e) => ({
				study_date: e.studyDate,
				total_nap_minutes: e.totalNapMinutes,
				values: Ei.map(([, t]) => e[t])
			})))), s = i.map(([e, t], n) => {
				const [r, i, s, o] = e.split("\0"), l = a[n], c = Object.fromEntries(Ei.map(([e], t) => [e, l.means[t] ?? null]));
				return {
					filename: r,
					participantId: i,
					algorithm: s,
					detectionRule: o,
					nNights: l.nNights,
					...c,
					meanTemperatureMissingReason: null == c.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
					metricMissingReasons: Object.fromEntries(Ei.map(([e, n]) => {
						const r = $i[e], i = ki.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : r), a = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[i] ?? e.metricMissingReason).find(Boolean);
						return [r, null == c[e] ? a : void 0];
					})),
					sleepRegularityIndex: null,
					meanTotalNapMinutes: l.meanTotalNapMinutes,
					studyId: t[0]?.studyId ?? null
				};
			});
			return s.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), s;
		}(w, o);
		for (const e of R) {
			const t = `${e.filename}\0${e.participantId}\0${e.algorithm}\0${e.detectionRule}`, n = T.get(t);
			e.sleepRegularityIndex = n?.sri ?? null, e.sleepRegularityMissingReason = n?.sriMissingReason ?? (n ? void 0 : "not_computed_for_export");
		}
		return {
			sleepRows: w,
			nonwearRows: v,
			summaryRows: R,
			degradations: b,
			nightReasons: y
		};
	}(s, r.username, r.dateRange, o, r.studyId, t, i)), d = await Ca(a[0].filename, "drawing its visual report", async () => {
		const e = [];
		for (const n of a) e.push(await xr({
			...r,
			snapshot: t
		}, n, i));
		return e;
	}), { generateLocalPhysicalActivityExportRows: m } = await import("./local-physical-activity-export-Cuhs_H6I.js");
	return {
		part: u,
		physicalActivityRows: await m(t, s, r.dateRange, {
			username: r.username,
			cutpointOverrides: r.physicalActivity.cutpointOverrides,
			maskPolicy: r.physicalActivity.maskPolicy,
			choiAxis: r.physicalActivity.choiAxis,
			exportedAt: r.exportedAt,
			...i ? { signal: i } : {}
		}),
		eventMarkerRows: await aa(s, r.dateRange, t, r.username, i),
		circadianDegraded: l,
		reports: d
	};
}
async function Ca(e, t, n) {
	try {
		return await n();
	} catch (r) {
		if (r instanceof DOMException && "AbortError" === r.name) throw r;
		throw new wn(e, t, r);
	}
}
new Set(yi.filter((e) => e.streamed).map((e) => e.entry)), f({
	async group(e, t, n) {
		try {
			return { result: await $a(xa(t), e, n) };
		} catch (r) {
			if (r instanceof wn) return { failure: r.wire };
			throw r;
		}
	},
	deflate(e, t) {
		const n = function(e, t) {
			return {
				bytes: Ci(e, t),
				crc: Di(e)
			};
		}(e, t);
		return _(n, [n.bytes.buffer]);
	}
});
export { qt as A, un as C, Ut as D, Xt as E, mt as F, Kt as M, Vt as N, Gt as O, dt as P, cn as S, nn as T, Wr as _, ra as a, Ir as b, Kr as c, Qr as d, Er as f, Pr as g, Gr as h, Xi as i, Pt as j, Jt as k, Zr as l, Vr as m, va as n, ta as o, zr as p, Ui as r, qr as s, sa as t, Jr as u, Ar as v, dn as w, mn as x, Rr as y };
