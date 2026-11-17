import { c as e, d as t, f as n, h as i, i as r, l as s, m as a, n as o, p as l, s as c, t as d, u, v as p } from "./ggir-results-types-kmrkPkJO.js";
import { $ as m, An as g, B as f, Br as h, Ct as _, Dn as w, En as v, F as y, Fr as b, H as k, Ir as x, J as M, Lr as S, Mn as I, Nn as T, Nr as R, O as A, On as E, Qn as N, Rr as C, Sn as $, V as O, Vr as L, _n as j, a as B, ar as D, at as P, c as F, et as G, f as W, gn as z, hn as V, ir as U, it as H, jn as q, kn as J, l as K, lt as Y, n as Q, nt as Z, or as X, p as ee, pr as te, q as ne, r as ie, sr as re, tt as se, u as ae, vn as oe, wt as le, zr as ce } from "./background-jobs-DUPAIf6B.js";
import { $t as de, Ar as ue, Cr as pe, D as me, E as ge, Ft as fe, Ht as he, In as _e, It as we, Jr as ve, Jt as ye, Mr as be, Pr as ke, Q as xe, Qn as Me, Qr as Se, R as Ie, S as Te, T as Re, Z as Ae, at as Ee, cn as Ne, cr as Ce, ct as $e, et as Oe, hr as Le, lr as je, lt as Be, m as De, mr as Pe, oi as Fe, ot as Ge, qt as We, st as ze, ti as Ve, tn as Ue, vr as He, zt as qe } from "./db-BYjE9wuK.js";
import { C as Je, _ as Ke, a as Ye, d as Qe, i as Ze, m as Xe, o as et, p as tt, t as nt, u as it, y as rt } from "./ggir-results-import-B4LEWTYh.js";
import { N as st, j as at, o as ot, w as lt } from "./local-nonwear-unified-BkYef4aY.js";
import { a as ct, u as dt } from "./epoch-utils-BNU9Vmn8.js";
const ut = function() {
	const e = (e) => () => {
		throw new x(e, "an export worker holds none of the page's state; pass the value in with the export request");
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
}();
function pt(e) {
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
function gt(e, t) {
	const n = function(e) {
		const t = pt(e.ggirTimestamps), n = pt(e.ggirEnmo);
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
var ft = Uint8Array, ht = Uint16Array, _t = Int32Array, wt = new ft([
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
]), vt = new ft([
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
]), yt = new ft([
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
]), bt = function(e, t) {
	for (var n = new ht(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
	var r = new _t(n[30]);
	for (i = 1; i < 30; ++i) for (var s = n[i]; s < n[i + 1]; ++s) r[s] = s - n[i] << 5 | i;
	return {
		b: n,
		r
	};
}, kt = bt(wt, 2), xt = kt.b, Mt = kt.r;
xt[28] = 258, Mt[258] = 28;
for (var St = bt(vt, 0), It = (St.b, St.r), Tt = new ht(32768), Rt = 0; Rt < 32768; ++Rt) {
	var At = (43690 & Rt) >> 1 | (21845 & Rt) << 1;
	At = (61680 & (At = (52428 & At) >> 2 | (13107 & At) << 2)) >> 4 | (3855 & At) << 4, Tt[Rt] = ((65280 & At) >> 8 | (255 & At) << 8) >> 1;
}
var Et = function(e, t, n) {
	for (var i = e.length, r = 0, s = new ht(t); r < i; ++r) e[r] && ++s[e[r] - 1];
	var a, o = new ht(t);
	for (r = 1; r < t; ++r) o[r] = o[r - 1] + s[r - 1] << 1;
	if (n) {
		a = new ht(1 << t);
		var l = 15 - t;
		for (r = 0; r < i; ++r) if (e[r]) for (var c = r << 4 | e[r], d = t - e[r], u = o[e[r] - 1]++ << d, p = u | (1 << d) - 1; u <= p; ++u) a[Tt[u] >> l] = c;
	} else for (a = new ht(i), r = 0; r < i; ++r) e[r] && (a[r] = Tt[o[e[r] - 1]++] >> 15 - e[r]);
	return a;
}, Nt = new ft(288);
for (Rt = 0; Rt < 144; ++Rt) Nt[Rt] = 8;
for (Rt = 144; Rt < 256; ++Rt) Nt[Rt] = 9;
for (Rt = 256; Rt < 280; ++Rt) Nt[Rt] = 7;
for (Rt = 280; Rt < 288; ++Rt) Nt[Rt] = 8;
var Ct = new ft(32);
for (Rt = 0; Rt < 32; ++Rt) Ct[Rt] = 5;
var $t = Et(Nt, 9, 0), Ot = Et(Ct, 5, 0), Lt = function(e) {
	return (e + 7) / 8 | 0;
}, jt = function(e, t, n) {
	return (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length), new ft(e.subarray(t, n));
}, Bt = [
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
], Dt = function(e, t, n) {
	var i = new Error(t || Bt[e]);
	if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, Dt), !n) throw i;
	return i;
}, Pt = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8;
}, Ft = function(e, t, n) {
	n <<= 7 & t;
	var i = t / 8 | 0;
	e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, Gt = function(e, t) {
	for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
		s: i,
		f: e[i]
	});
	var r = n.length, s = n.slice();
	if (!r) return {
		t: Jt,
		l: 0
	};
	if (1 == r) {
		var a = new ft(n[0].s + 1);
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
	var p = s[0].s;
	for (i = 1; i < r; ++i) s[i].s > p && (p = s[i].s);
	var m = new ht(p + 1), g = Wt(n[d - 1], m, 0);
	if (g > t) {
		i = 0;
		var f = 0, h = g - t, _ = 1 << h;
		for (s.sort(function(e, t) {
			return m[t.s] - m[e.s] || e.f - t.f;
		}); i < r; ++i) {
			var w = s[i].s;
			if (!(m[w] > t)) break;
			f += _ - (1 << g - m[w]), m[w] = t;
		}
		for (f >>= h; f > 0;) {
			var v = s[i].s;
			m[v] < t ? f -= 1 << t - m[v]++ - 1 : ++i;
		}
		for (; i >= 0 && f; --i) {
			var y = s[i].s;
			m[y] == t && (--m[y], ++f);
		}
		g = t;
	}
	return {
		t: new ft(m),
		l: g
	};
}, Wt = function(e, t, n) {
	return -1 == e.s ? Math.max(Wt(e.l, t, n + 1), Wt(e.r, t, n + 1)) : t[e.s] = n;
}, zt = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new ht(++t), i = 0, r = e[0], s = 1, a = function(e) {
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
}, Vt = function(e, t) {
	for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
	return n;
}, Ut = function(e, t, n) {
	var i = n.length, r = Lt(t + 2);
	e[r] = 255 & i, e[r + 1] = i >> 8, e[r + 2] = 255 ^ e[r], e[r + 3] = 255 ^ e[r + 1];
	for (var s = 0; s < i; ++s) e[r + s + 4] = n[s];
	return 8 * (r + 4 + i);
}, Ht = function(e, t, n, i, r, s, a, o, l, c, d) {
	Pt(t, d++, n), ++r[256];
	for (var u = Gt(r, 15), p = u.t, m = u.l, g = Gt(s, 15), f = g.t, h = g.l, _ = zt(p), w = _.c, v = _.n, y = zt(f), b = y.c, k = y.n, x = new ht(19), M = 0; M < w.length; ++M) ++x[31 & w[M]];
	for (M = 0; M < b.length; ++M) ++x[31 & b[M]];
	for (var S = Gt(x, 7), I = S.t, T = S.l, R = 19; R > 4 && !I[yt[R - 1]]; --R);
	var A, E, N, C, $ = c + 5 << 3, O = Vt(r, Nt) + Vt(s, Ct) + a, L = Vt(r, p) + Vt(s, f) + a + 14 + 3 * R + Vt(x, I) + 2 * x[16] + 3 * x[17] + 7 * x[18];
	if (l >= 0 && $ <= O && $ <= L) return Ut(t, d, e.subarray(l, l + c));
	if (Pt(t, d, 1 + (L < O)), d += 2, L < O) {
		A = Et(p, m, 0), E = p, N = Et(f, h, 0), C = f;
		var j = Et(I, T, 0);
		for (Pt(t, d, v - 257), Pt(t, d + 5, k - 1), Pt(t, d + 10, R - 4), d += 14, M = 0; M < R; ++M) Pt(t, d + 3 * M, I[yt[M]]);
		d += 3 * R;
		for (var B = [w, b], D = 0; D < 2; ++D) {
			var P = B[D];
			for (M = 0; M < P.length; ++M) {
				var F = 31 & P[M];
				Pt(t, d, j[F]), d += I[F], F > 15 && (Pt(t, d, P[M] >> 5 & 127), d += P[M] >> 12);
			}
		}
	} else A = $t, E = Nt, N = Ot, C = Ct;
	for (M = 0; M < o; ++M) {
		var G = i[M];
		if (G > 255) {
			Ft(t, d, A[257 + (F = G >> 18 & 31)]), d += E[F + 257], F > 7 && (Pt(t, d, G >> 23 & 31), d += wt[F]);
			var W = 31 & G;
			Ft(t, d, N[W]), d += C[W], W > 3 && (Ft(t, d, G >> 5 & 8191), d += vt[W]);
		} else Ft(t, d, A[G]), d += E[G];
	}
	return Ft(t, d, A[256]), d + E[256];
}, qt = new _t([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), Jt = new ft(0), Kt = function() {
	for (var e = /* @__PURE__ */ new Int32Array(256), t = 0; t < 256; ++t) {
		for (var n = t, i = 9; --i;) n = (1 & n && -306674912) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), Yt = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
}, Qt = function() {
	function e(e, t) {
		if ("function" == typeof e && (t = e, e = {}), this.ondata = t, this.o = e || {}, this.s = {
			l: 0,
			i: 32768,
			w: 32768,
			z: 32768
		}, this.b = new ft(98304), this.o.dictionary) {
			var n = this.o.dictionary.subarray(-32768);
			this.b.set(n, 32768 - n.length), this.s.i = 32768 - n.length;
		}
	}
	return e.prototype.p = function(e, t) {
		this.ondata(function(e, t, n, i, r) {
			if (!r && (r = { l: 1 }, t.dictionary)) {
				var s = t.dictionary.subarray(-32768), a = new ft(s.length + e.length);
				a.set(s), a.set(e, s.length), e = a, r.w = s.length;
			}
			return function(e, t, n, i, r, s) {
				var a = s.z || e.length, o = new ft(i + a + 5 * (1 + Math.ceil(a / 7e3)) + r), l = o.subarray(i, o.length - r), c = s.l, d = 7 & (s.r || 0);
				if (t) {
					d && (l[0] = s.r >> 3);
					for (var u = qt[t - 1], p = u >> 13, m = 8191 & u, g = (1 << n) - 1, f = s.p || new ht(32768), h = s.h || new ht(g + 1), _ = Math.ceil(n / 3), w = 2 * _, v = function(t) {
						return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << w) & g;
					}, y = new _t(25e3), b = new ht(288), k = new ht(32), x = 0, M = 0, S = s.i || 0, I = 0, T = s.w || 0, R = 0; S + 2 < a; ++S) {
						var A = v(S), E = 32767 & S, N = h[A];
						if (f[E] = N, h[A] = E, T <= S) {
							var C = a - S;
							if ((x > 7e3 || I > 24576) && (C > 423 || !c)) {
								d = Ht(e, l, 0, y, b, k, M, I, R, S - R, d), I = x = M = 0, R = S;
								for (var $ = 0; $ < 286; ++$) b[$] = 0;
								for ($ = 0; $ < 30; ++$) k[$] = 0;
							}
							var O = 2, L = 0, j = m, B = E - N & 32767;
							if (C > 2 && A == v(S - B)) for (var D = Math.min(p, C) - 1, P = Math.min(32767, S), F = Math.min(258, C); B <= P && --j && E != N;) {
								if (e[S + O] == e[S + O - B]) {
									for (var G = 0; G < F && e[S + G] == e[S + G - B]; ++G);
									if (G > O) {
										if (O = G, L = B, G > D) break;
										var W = Math.min(B, G - 2), z = 0;
										for ($ = 0; $ < W; ++$) {
											var V = S - B + $ & 32767, U = V - f[V] & 32767;
											U > z && (z = U, N = V);
										}
									}
								}
								B += (E = N) - (N = f[E]) & 32767;
							}
							if (L) {
								y[I++] = 268435456 | Mt[O] << 18 | It[L];
								var H = 31 & Mt[O], q = 31 & It[L];
								M += wt[H] + vt[q], ++b[257 + H], ++k[q], T = S + O, ++x;
							} else y[I++] = e[S], ++b[e[S]];
						}
					}
					for (S = Math.max(S, T); S < a; ++S) y[I++] = e[S], ++b[e[S]];
					d = Ht(e, l, c, y, b, k, M, I, R, S - R, d), c || (s.r = 7 & d | l[d / 8 | 0] << 3, d -= 7, s.h = h, s.p = f, s.i = S, s.w = T);
				} else {
					for (S = s.w || 0; S < a + c; S += 65535) {
						var J = S + 65535;
						J >= a && (l[d / 8 | 0] = c, J = a), d = Ut(l, d + 1, e.subarray(S, J));
					}
					s.i = a;
				}
				return jt(o, 0, i + Lt(d) + r);
			}(e, null == t.level ? 6 : t.level, null == t.mem ? r.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, n, i, r);
		}(e, this.o, 0, 0, this.s), t);
	}, e.prototype.push = function(e, t) {
		this.ondata || Dt(5), this.s.l && Dt(4);
		var n = e.length + this.s.z;
		if (n > this.b.length) {
			if (n > 2 * this.b.length - 32768) {
				var i = new ft(-32768 & n);
				i.set(this.b.subarray(0, this.s.z)), this.b = i;
			}
			var r = this.b.length - this.s.z;
			this.b.set(e.subarray(0, r), this.s.z), this.s.z = this.b.length, this.p(this.b, !1), this.b.set(this.b.subarray(-32768)), this.b.set(e.subarray(r), 32768), this.s.z = e.length - r + 32768, this.s.i = 32766, this.s.w = 32768;
		} else this.b.set(e, this.s.z), this.s.z += e.length;
		this.s.l = 1 & t, (this.s.z > this.s.w + 8191 || t) && (this.p(this.b, t || !1), this.s.w = this.s.i, this.s.i -= 2), t && (this.s = this.o = {}, this.b = Jt);
	}, e.prototype.flush = function(e) {
		if (this.ondata || Dt(5), this.s.l && Dt(4), this.p(this.b, !1), this.s.w = this.s.i, this.s.i -= 2, e) {
			var t = new ft(6);
			t[0] = this.s.r >> 3;
			var n = Ut(t, this.s.r, Jt);
			this.s.r = 0, this.ondata(t.subarray(0, n >> 3), !1);
		}
	}, e;
}(), Zt = "undefined" != typeof TextEncoder && new TextEncoder(), Xt = "undefined" != typeof TextDecoder && new TextDecoder();
try {
	Xt.decode(Jt, { stream: !0 });
} catch ($l) {}
function en(e, t) {
	if (t) {
		for (var n = new ft(e.length), i = 0; i < e.length; ++i) n[i] = e.charCodeAt(i);
		return n;
	}
	if (Zt) return Zt.encode(e);
	var r = e.length, s = new ft(e.length + (e.length >> 1)), a = 0, o = function(e) {
		s[a++] = e;
	};
	for (i = 0; i < r; ++i) {
		if (a + 5 > s.length) {
			var l = new ft(a + 8 + (r - i << 1));
			l.set(s), s = l;
		}
		var c = e.charCodeAt(i);
		c < 128 || t ? o(c) : c < 2048 ? (o(192 | c >> 6), o(128 | 63 & c)) : c > 55295 && c < 57344 ? (o(240 | (c = 65536 + (1047552 & c) | 1023 & e.charCodeAt(++i)) >> 18), o(128 | c >> 12 & 63), o(128 | c >> 6 & 63), o(128 | 63 & c)) : (o(224 | c >> 12), o(128 | c >> 6 & 63), o(128 | 63 & c));
	}
	return jt(s, 0, a);
}
var tn = function(e) {
	var t = 0;
	if (e) for (var n in e) {
		var i = e[n].length;
		i > 65535 && Dt(9), t += i + 4;
	}
	return t;
}, nn = function(e, t, n, i, r, s, a, o) {
	var l = i.length, c = n.extra, d = o && o.length, u = tn(c);
	Yt(e, t, null != a ? 33639248 : 67324752), t += 4, null != a && (e[t++] = 20, e[t++] = n.os), e[t] = 20, t += 2, e[t++] = n.flag << 1 | (s < 0 && 8), e[t++] = r && 8, e[t++] = 255 & n.compression, e[t++] = n.compression >> 8;
	var p = new Date(null == n.mtime ? Date.now() : n.mtime), m = p.getFullYear() - 1980;
	if ((m < 0 || m > 119) && Dt(10), Yt(e, t, m << 25 | p.getMonth() + 1 << 21 | p.getDate() << 16 | p.getHours() << 11 | p.getMinutes() << 5 | p.getSeconds() >> 1), t += 4, -1 != s && (Yt(e, t, n.crc), Yt(e, t + 4, s < 0 ? -s - 2 : s), Yt(e, t + 8, n.size)), Yt(e, t + 12, l), Yt(e, t + 14, u), t += 16, null != a && (Yt(e, t, d), Yt(e, t + 6, n.attrs), Yt(e, t + 10, a), t += 14), e.set(i, t), t += l, u) for (var g in c) {
		var f = c[g], h = f.length;
		Yt(e, t, +g), Yt(e, t + 2, h), e.set(f, t + 4), t += 4 + h;
	}
	return d && (e.set(o, t), t += d), t;
}, rn = function() {
	function e(e) {
		var t;
		this.filename = e, this.c = (t = -1, {
			p: function(e) {
				for (var n = t, i = 0; i < e.length; ++i) n = Kt[255 & n ^ e[i]] ^ n >>> 8;
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
		this.ondata || Dt(5), this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1);
	}, e;
}(), sn = function() {
	function e(e) {
		this.ondata = e, this.u = [], this.d = 1;
	}
	return e.prototype.add = function(e) {
		var t = this;
		if (this.ondata || Dt(5), 2 & this.d) this.ondata(Dt(4 + 8 * (1 & this.d), 0, 1), null, !1);
		else {
			var n = en(e.filename), i = n.length, r = e.comment, s = r && en(r), a = i != e.filename.length || s && r.length != s.length, o = i + tn(e.extra) + 30;
			i > 65535 && this.ondata(Dt(11, 0, 1), null, !1);
			var l = new ft(o);
			nn(l, 0, e, n, a, -1);
			var c = [l], d = function() {
				for (var e = 0, n = c; e < n.length; e++) {
					var i = n[e];
					t.ondata(null, i, !1);
				}
				c = [];
			}, u = this.d;
			this.d = 0;
			var p = this.u.length, m = function(e, t) {
				var n = {};
				for (var i in e) n[i] = e[i];
				for (var i in t) n[i] = t[i];
				return n;
			}(e, {
				f: n,
				u: a,
				o: s,
				t: function() {
					e.terminate && e.terminate();
				},
				r: function() {
					if (d(), u) {
						var e = t.u[p + 1];
						e ? e.r() : t.d = 1;
					}
					u = 1;
				}
			}), g = 0;
			e.ondata = function(n, i, r) {
				if (n) t.ondata(n, i, r), t.terminate();
				else if (g += i.length, c.push(i), r) {
					var s = new ft(16);
					Yt(s, 0, 134695760), Yt(s, 4, e.crc), Yt(s, 8, g), Yt(s, 12, e.size), c.push(s), m.c = g, m.b = o + g + 16, m.crc = e.crc, m.size = e.size, u && m.r(), u = 1;
				} else u && d();
			}, this.u.push(m);
		}
	}, e.prototype.end = function() {
		var e = this;
		2 & this.d ? this.ondata(Dt(4 + 8 * (1 & this.d), 0, 1), null, !0) : (this.d ? this.e() : this.u.push({
			r: function() {
				1 & e.d && (e.u.splice(-1, 1), e.e());
			},
			t: function() {}
		}), this.d = 3);
	}, e.prototype.e = function() {
		for (var e = 0, t = 0, n = 0, i = 0, r = this.u; i < r.length; i++) n += 46 + (m = r[i]).f.length + tn(m.extra) + (m.o ? m.o.length : 0);
		for (var s, a, o, l, c, d = new ft(n + 22), u = 0, p = this.u; u < p.length; u++) {
			var m = p[u];
			nn(d, e, m, m.f, m.u, -m.c - 2, t, m.o), e += 46 + m.f.length + tn(m.extra) + (m.o ? m.o.length : 0), t += m.b;
		}
		s = d, a = e, o = this.u.length, l = n, c = t, Yt(s, a, 101010256), Yt(s, a + 8, o), Yt(s, a + 10, o), Yt(s, a + 12, l), Yt(s, a + 16, c), this.ondata(null, d, !0), this.d = 2;
	}, e.prototype.terminate = function() {
		for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
		this.d = 2;
	}, e;
}();
function an(e, t) {
	return {
		...t,
		maxExtraWorkers: Number.POSITIVE_INFINITY,
		workerMemoryGib: (n = e.reduce((e, t) => Math.max(e, t.size), 0), .25 * Math.max(1, n / 968617))
	};
	var n;
}
function on(e) {
	return (140 + 130 * Math.max(0, e) / 1e6) / 1024;
}
function ln({ cores: e, deviceMemoryGib: t }) {
	const n = Number.isFinite(e) ? Math.floor(e) - 3 : 0;
	return n > 0 && Number.isFinite(t) && t > 0 ? {
		extraWorkers: n,
		memoryBudgetGib: t / 2
	} : { extraWorkers: 0 };
}
function cn({ cores: e, deviceMemoryGib: t, maxExtraWorkers: n = 3, workerMemoryGib: i = 1, minDeviceMemoryGib: r = 8 }) {
	return !Number.isFinite(t) || (t ?? 0) < r || !Number.isFinite(e) || (e ?? 0) <= 2 ? 0 : Math.max(0, Math.min(n, Math.floor(e) - 2, Math.floor(t / 2 / i) - 1));
}
function dn(e, t) {
	return t.primary && e instanceof Error && e.message.includes("timed out during");
}
let un = 0;
async function pn(e, { primary: t, getPrimary: n, extraWorkers: i, memoryBudgetGib: r, signal: s, cancelOperation: a = () => {}, createWorker: o }) {
	if (s?.aborted) throw new DOMException("Aborted: raw passes", "AbortError");
	if (0 === e.length) return [];
	if (e.some((e) => {
		const t = Function.prototype.toString.call(e.run);
		return !t.includes("[native code]") && /^(?:async\s*)?(?:function(?:\s+\w+)?\s*|[\w$]+\s*)?\(\s*\)/u.test(t);
	})) throw new Error("A raw pass must receive its pool worker");
	if (0 === i && !t && !n && !o) throw new Error("A single-worker pass must borrow or inject its worker");
	const l = o ?? ne, c = e.map((e, t) => ({
		pass: e,
		index: t
	})), d = new Array(e.length), u = /* @__PURE__ */ new Map(), p = {
		stopped: !1,
		done: !1
	}, m = (e, t) => {
		const n = u.get(e);
		void 0 !== n && (u.delete(e), un = Math.max(0, un - n), !t && e.release ? e.release() : e.terminate());
	};
	let g;
	const f = new Promise((e, t) => {
		g = () => {
			p.stopped = !0, t(new DOMException("Aborted: raw passes", "AbortError"));
		}, s?.addEventListener("abort", g, { once: !0 }), s?.aborted && g();
	}), h = async (e, i, r, s) => {
		let o, c, g = r, f = !1;
		const h = 0 === e && (void 0 !== t || void 0 !== n), _ = new Proxy({}, { get: (e, i) => {
			if (p.done) throw new Error("Raw pass pool finished");
			if (p.stopped) throw new DOMException("Aborted: raw passes", "AbortError");
			if (!c && !o) if (h) c = t ?? n();
			else if (un + g <= 1 + 4 * Number.EPSILON) {
				un += g;
				try {
					o = l({ singleThread: !0 });
				} catch (r) {
					throw un = Math.max(0, un - g), r;
				}
				u.set(o, g);
			} else c = t ?? n?.() ?? M();
			return Reflect.get(c ?? o.api, i);
		} }), w = {
			cancel: () => {
				c ? a() : (f = !0, o && m(o, !0));
			},
			get primary() {
				return void 0 !== c || Boolean(h);
			}
		};
		let v = !1;
		try {
			for (let e = i(); e; e = i()) {
				if (p.stopped) return;
				f && (o = void 0, f = !1);
				const t = o ? s?.(e) : void 0;
				o && void 0 !== t && (m(o, !0), o = void 0, g = t);
				const { pass: n, index: i } = e;
				d[i] = await n.run(_, w);
			}
		} catch (y) {
			throw v = !0, p.stopped = !0, y;
		} finally {
			o && m(o, v || p.stopped);
		}
	}, _ = Math.min(e.length, i + 1);
	let w;
	if (void 0 === r) {
		const e = Array.from({ length: _ }, () => ({
			cost: 0,
			passes: []
		}));
		i > 0 && c.sort((e, t) => t.pass.cost - e.pass.cost);
		for (const t of c) {
			const n = e.reduce((e, t) => t.cost < e.cost ? t : e);
			n.passes.push(t), n.cost += t.pass.cost;
		}
		w = Promise.all(e.map((e, t) => h(t, () => e.passes.shift(), 1 / (i + 1))));
	} else {
		const e = (e) => e?.pass.memoryGib ?? 0;
		c.sort((t, n) => e(n) - e(t) || n.pass.cost - t.pass.cost);
		let t = 0, n = 0, i = 0;
		w = new Promise((s, a) => {
			let o = 0;
			const l = () => {
				for (; n < _ && t < c.length && (0 === n || i + e(c[t]) <= r);) {
					let u = e(c[t]);
					i += u, o += 1;
					const p = (t) => {
						const n = e(t);
						if (!(2 * n > u)) return i -= u - n, u = n, queueMicrotask(l), Math.min(1, n / r);
					};
					h(n++, d, Math.min(1, u / r), p).then(() => {
						0 === --o && s();
					}, a);
				}
			}, d = () => {
				const e = c[t++];
				return e && l(), e;
			};
			l();
		});
	}
	try {
		await Promise.race([f, w]);
	} catch (v) {
		p.stopped = !0;
		try {
			a();
		} catch {}
		throw v;
	} finally {
		p.done = !0, g && s?.removeEventListener("abort", g);
		for (const e of [...u.keys()]) m(e, !0);
	}
	return d;
}
async function mn(e, t, n, i, r = 60, s, a) {
	if (!e || 0 === e.length || 0 === t.length) return null;
	if (null == n || null == i || n >= i) return null;
	const o = new Uint8Array(e.length);
	for (let c = 0; c < e.length; c++) o[c] = 1 === e[c] ? 1 : 0;
	const l = await gn(o, s && s.length === e.length ? s : new Float64Array(e.length), t, n, i, r, a);
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
async function gn(e, t, n, i, r, s = 60, a) {
	if (!e || 0 === e.length || 0 === n.length) return null;
	if (null == i || null == r || i >= r) return null;
	const o = await async function(e, t, n, i) {
		const r = await Q(i).markerIndexRange(Float64Array.from(e), t, n);
		return 2 === r.length ? {
			startIdx: r[0],
			endIdx: r[1]
		} : null;
	}(n, i, r, a);
	if (!o || o.startIdx >= o.endIdx) return null;
	const l = o.startIdx, c = o.endIdx + 1, d = e instanceof Uint8Array ? e.slice(l, c) : new Uint8Array(e.slice(l, c)), u = t instanceof Float64Array ? t.slice(l, c) : Float64Array.from(t.slice(l, c)), p = await Q(a).computeSleepMetrics(d, u, s), m = n[l] ?? 0, g = n[c - 1] ?? m, f = null != p.firstSleepEpochIdx ? n[l + p.firstSleepEpochIdx] ?? m : m, h = null != p.lastSleepEpochIdx ? n[l + p.lastSleepEpochIdx] ?? g : g;
	return {
		timeInBedMinutes: p.timeInBedMinutes,
		totalSleepTimeMinutes: p.totalSleepTimeMinutes,
		sleepOnsetLatencyMinutes: p.sleepOnsetLatencyMinutes,
		wasoMinutes: p.wasoMinutes,
		numberOfAwakenings: p.numberOfAwakenings,
		ggirSleepDurationInSptMinutes: p.ggirSleepDurationInSptMinutes,
		averageAwakeningLengthMinutes: p.averageAwakeningLengthMinutes,
		sleepEfficiency: p.sleepEfficiency,
		movementIndex: p.movementIndex,
		fragmentationIndex: p.fragmentationIndex,
		sleepFragmentationIndex: p.sleepFragmentationIndex,
		totalActivity: p.totalActivity,
		nonzeroEpochs: p.nonzeroEpochs,
		inBedTime: m,
		outBedTime: g,
		sleepOnset: f,
		sleepOffset: h
	};
}
function fn(e, t) {
	const n = "stale" === t.status ? t.reason : null;
	if (!e) return {
		timestamps: [],
		algorithmResults: null,
		activity: null,
		scoresStale: n
	};
	const i = he(e), r = Array.from(i.timestamps);
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
	const l = dt(e, t);
	return {
		timestamps: r,
		algorithmResults: "ok" === l.status && l.bytes ? new Uint8Array(l.bytes) : null,
		activity: a,
		scoresStale: "stale" === l.status ? l.reason : null
	};
}
function hn(e) {
	return JSON.stringify([...new Set(e ?? [])]);
}
function _n(e, t, n) {
	return e === t.ggirTimestamps ? Oe(e, Ae, n) : xe(e, {}, n);
}
function wn(e, t) {
	if (0 === e.length) return null;
	if (e.length === t.timestamps.length && t.timestamps.length > 0) return t.timestamps;
	const n = t.ggirTimestamps;
	return n && e.length === n.length && n.length > 0 ? n : null;
}
const vn = new Set(j);
function yn(e, t) {
	const n = t ? T[t]?.[0] : void 0;
	return void 0 !== (i = n) && vn.has(i) ? n : e ? V[e] ?? null : null;
	var i;
}
function bn(e) {
	const t = e ? z[e] : null;
	return t?.fusedIntoBand && t.detector ? "detach_mask" === oe[t.detector].storedAs ? "detach_mask" : "sensor_rows" : null;
}
async function kn(e, t, n = M()) {
	const i = e.nonwearBands?.[hn(t)];
	if (null === i) return null;
	if (i) {
		const t = "counts" === i.grid ? e.timestamps : e.ggirTimestamps, [r] = i.detectors;
		if (t && r && t.length === i.mask.length) return {
			detector: r,
			detectors: i.detectors,
			...e.nonwearSourceLabels ? { label: i.detectors.map((t) => e.nonwearSourceLabels?.[t] ?? at(t)).join(" + ") } : {},
			mask: i.mask,
			...i.weight ? { weight: i.weight } : {},
			grid: t,
			epochSeconds: await _n(t, e, n)
		};
	}
	const r = [];
	let s = null;
	for (const d of new Set(t ?? [])) {
		if (In(d)) continue;
		const t = e.algorithmicNonwearMasks?.[d];
		if (!t) continue;
		const n = wn(t, e);
		!n || null !== s && n !== s || (s = n, r.push({
			detector: d,
			mask: t
		}));
	}
	const a = r[0];
	if (!a || !s) return null;
	const o = await _n(s, e, n), l = [...r, ...await xn(e, t, {
		grid: s,
		epochSeconds: o
	}, n)];
	if (1 === l.length) return {
		detector: a.detector,
		detectors: [a.detector],
		mask: a.mask,
		grid: s,
		epochSeconds: o,
		...e.nonwearSourceLabels?.[a.detector] ? { label: e.nonwearSourceLabels[a.detector] } : {}
	};
	const c = await n.fuseNonwearMasks(l.map((e) => Uint8Array.from(e.mask)));
	return {
		detector: a.detector,
		detectors: l.map((e) => e.detector),
		...e.nonwearSourceLabels ? { label: l.map(({ detector: t }) => e.nonwearSourceLabels?.[t] ?? at(t)).join(" + ") } : {},
		mask: c.any,
		weight: c.weight,
		grid: s,
		epochSeconds: o
	};
}
async function xn(e, t, { grid: n, epochSeconds: i }, r) {
	const s = e.deviceNonwearSource ? z[e.deviceNonwearSource] : null, a = s?.fusedIntoBand ? s.detector : null;
	if (null === a || !(t ?? []).includes(a)) return [];
	const o = (e.sensorNonwearPeriods ?? []).map((e) => ({
		startTsSec: e.startTimestamp,
		endTsSec: e.endTimestamp
	}));
	return [{
		detector: a,
		mask: await st(o, n, i, r)
	}];
}
function Mn(e, t) {
	return t ? e : e.filter((e) => e !== Ve.choi_2011 && e !== Ve.choi_2012);
}
Object.freeze([]), new Set($.filter((e) => "device_statement" === e.execution).map((e) => e.id)), Object.freeze([Ve.ggir_part2_invalid]);
const Sn = new Set(Object.values(z).flatMap((e) => e.fusedIntoBand && e.detector ? [e.detector] : []));
function In(e) {
	return Sn.has(e);
}
async function Tn(e, t) {
	return _e("ggir-saved-nonwear-label", O(e), async () => {
		const n = await t.ggirNonwearApproach(e).catch((e) => {
			if (e instanceof Error && "AbortError" === e.name) throw e;
			return null;
		});
		return n ? `GGIR nonwear (van Hees ${n})` : ue;
	});
}
Ve.ggir_saved, Ve.ggir_part2_invalid, Ve.choi_2011, Ve.choi_2012, Ve.van_hees_2013, Ve.van_hees_2023, Ve.troiano_2008, Ve.ahmadi_2020;
const Rn = /* @__PURE__ */ new Map();
async function An(e, t, n = !1) {
	let i = Rn.get(e);
	const r = void 0 !== i;
	i || (i = Q(t).resolveTimezone(e), Rn.set(e, i));
	try {
		return await i;
	} catch (Dt) {
		return Rn.get(e) === i && Rn.delete(e), t?.throwIfAborted(), r && !n ? An(e, t, !0) : void console.warn(`dst-zone: could not resolve timezone "${e}"; no DST flag`, Dt);
	}
}
function En(e) {
	const t = e?.study_timezone;
	return "string" == typeof t && "" !== t.trim() ? t.trim() : fe();
}
async function Nn(e) {
	try {
		return En((await me(e))?.extraSettings);
	} catch (Dt) {
		return console.warn("dst-zone: could not read the study time zone; using the browser's", Dt), fe();
	}
}
function Cn(e) {
	const t = Math.abs(e);
	return `${e < 0 ? "−" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
const $n = {
	zone: null,
	reason: null
};
async function On(e, t, n) {
	const i = e.ggirTimezone?.trim();
	let r = null;
	if (i) {
		const e = await An(i, n);
		if (!e) return $n;
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
	if (null === r) return ke(e) ? {
		zone: null,
		reason: "GGIR folder has no saved timezone (desiredtz is empty and no recording offset is stored); DST nights cannot be flagged"
	} : $n;
	const s = await An(t, n);
	if (void 0 === s) return $n;
	if ("iana" !== s?.kind) return {
		zone: null,
		reason: `the study time zone "${t}" is not an IANA zone`
	};
	const a = function(e) {
		const t = e.recording?.effectiveTime ?? e.availableDates[0], n = t ? Number(t.slice(0, 4)) : NaN;
		return Number.isInteger(n) ? n : null;
	}(e);
	return null !== a && (await qe(s.zone, a, Q(n))).includes(r) ? {
		zone: s.zone,
		reason: null
	} : {
		zone: null,
		reason: `recording offset ${Cn(r)} is not a ${s.zone} offset`
	};
}
function Ln(e) {
	const t = new Uint32Array(e.length + 1);
	for (const [i, r] of e.entries()) t[i + 1] = t[i] + r.length;
	const n = new Float64Array(t[e.length]);
	for (const [i, r] of e.entries()) n.set(r, t[i]);
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
}), Bn = [
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
var Dn = Bn.map(() => jn);
Object.fromEntries(Bn.map(([e], t) => [e, Dn[t]]));
const Pn = [
	"choi90",
	"choi60",
	"vanHees",
	"sensor",
	...Object.values(Ve).filter((e) => ![
		Ve.choi_2012,
		Ve.choi_2011,
		Ve.van_hees_2023,
		Ve.detach_nonwear
	].some((t) => t === e))
];
async function Fn(e, t, n, i) {
	const r = void 0 === t ? n?.window[e] : 48 === t ? n?.view48[e] : void 0;
	if (r) return {
		start: r[0],
		end: r[1]
	};
	const s = await (i ?? M()).analysisWindowBounds(e, t);
	return s ? {
		start: s[0],
		end: s[1]
	} : {
		start: NaN,
		end: NaN
	};
}
async function Gn(e, t, n) {
	const i = e instanceof Float64Array ? e : Float64Array.from(e), [r, s] = await (n ?? M()).analysisWindowSlice(i, t);
	return {
		startIndex: r,
		endIndex: s
	};
}
async function Wn(e, t = M()) {
	const n = [...new Set(e)], i = await t.analysisDatesOf(Float64Array.from(n)), r = new Map(n.map((e, t) => [e, i[t] ?? ""]));
	return (e) => r.get(e) ?? "";
}
Object.fromEntries(Object.values(Ve).map((e) => [e, e === Ve.ggir_saved ? ue : at(e)]));
var zn = p({
	nightPeriodMetrics: () => Hn,
	spanningSeries: () => Un,
	storeNightPeriodMetrics: () => qn
});
function Vn(e) {
	const t = {
		choi_2012: "choi90",
		choi_2011: "choi60",
		van_hees_2023: "vanHees",
		detach_nonwear: "sensor"
	}, n = {};
	for (const [i, r] of Object.entries(ot(e, e.nonwearChoiAxis ?? lt()))) r && (n[t[i] ?? i] = new Uint8Array(r));
	return n;
}
async function Un(e, t, n, i = {}) {
	const { signal: r, includeNonwearMasks: s = !1 } = i, a = e.get(t), o = fn(a, n), l = s && a ? Vn(a) : {}, c = e.get(i.nextDate ?? await ct(t, void 0, Q(r))), d = o.timestamps[o.timestamps.length - 1], u = c ? fn(c, n) : null, p = u?.timestamps[0], m = void 0 !== c && null !== u && void 0 !== d && void 0 !== p && p > d, g = o.scoresStale ?? u?.scoresStale ?? null;
	if (null !== g) return {
		...o,
		algorithmResults: null,
		masks: l,
		scoresStale: g
	};
	if (!m || !o.algorithmResults) return {
		...o,
		masks: l,
		scoresStale: null
	};
	const f = o.timestamps.length, h = f + u.timestamps.length, _ = o.algorithmResults.length >= f && u.algorithmResults && u.algorithmResults.length >= u.timestamps.length ? new Uint8Array(h) : null;
	_?.set(o.algorithmResults.subarray(0, f)), u.algorithmResults && _?.set(u.algorithmResults.subarray(0, h - f), f);
	const w = o.activity && u.activity ? new Float64Array(h) : null;
	o.activity && w?.set(o.activity.subarray(0, f)), u.activity && w?.set(u.activity.subarray(0, h - f), f);
	const v = s ? Vn(c) : {}, y = {};
	for (const b of Pn) {
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
async function Hn(e, t, n, i) {
	const { date: r, file: s, activityMap: a, verdict: o } = t, l = t.spanning ?? await Un(a, r, o, { signal: i });
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
	const { timestamps: d, algorithmResults: u } = l, p = [];
	for (const m of e.sleepMarkers) p.push(u && d.length > 0 && m.onsetTimestamp && m.offsetTimestamp ? await gn(u, l.activity ?? new Float64Array(u.length), l.timestamps, m.onsetTimestamp, m.offsetTimestamp, s.epochLengthSeconds || 60, i) : null);
	if (void 0 !== e.id) try {
		await W(n, [n.markers], () => Je(e.id, {
			inputs: c,
			metrics: p
		}, n), i);
	} catch {
		i?.throwIfAborted();
	}
	return p;
}
async function qn(e, t, n, i) {
	const r = await n.files.get(e.fileId);
	if (!r) return;
	const s = /* @__PURE__ */ new Map();
	for (const a of [e.date, await ct(e.date, void 0, Q(i))]) {
		const t = await n.activityDays.where("[fileId+date]").equals([e.fileId, a]).first();
		t && s.set(a, t);
	}
	await Hn(e, {
		date: e.date,
		file: r,
		activityMap: s,
		verdict: t
	}, n, i);
}
const Jn = [
	"primary",
	"secondary",
	"accent",
	"neutral",
	"warning",
	"critical"
], Kn = ["under-series", "over-series"], Yn = ["full-resolution-v1", "min-max-gap-envelope-v1"], Qn = {
	primary: "#2563eb",
	secondary: "#7c3aed",
	accent: "#16a34a",
	neutral: "#64748b",
	warning: "#d97706",
	critical: "#dc2626"
};
function Zn(e, t) {
	throw new TypeError(`Invalid ActivityPlotRenderScene ${e}: ${t}`);
}
function Xn(e, t) {
	return "object" != typeof e || null == e || Array.isArray(e) ? Zn(t, "expected an object") : e;
}
function ei(e, t) {
	return Array.isArray(e) ? e : Zn(t, "expected an array");
}
function ti(e, t) {
	return "number" == typeof e && Number.isFinite(e) ? e : Zn(t, "expected a finite number");
}
function ni(e, t) {
	const n = ti(e, t);
	return n <= 0 ? Zn(t, "expected a positive number") : n;
}
function ii(e, t) {
	return "number" == typeof e && Number.isSafeInteger(e) ? e : Zn(t, "expected a safe integer");
}
function ri(e, t) {
	const n = ii(e, t);
	return n < 0 ? Zn(t, "expected a non-negative safe integer") : n;
}
function si(e, t, n) {
	return void 0 === e ? {} : "boolean" != typeof e ? Zn(t, "expected a boolean") : { [n]: e };
}
function ai(e, t) {
	return "string" != typeof e || 0 === e.length ? Zn(t, "expected a non-empty string") : e;
}
function oi(e, t) {
	return "string" == typeof e && Jn.includes(e) ? e : Zn(t, "expected a supported tone");
}
function li(e, t) {
	return "string" == typeof e && Kn.includes(e) ? e : Zn(t, "expected a supported phase");
}
function ci(e, t) {
	const n = Xn(e, t), i = ti(n.min, `${t}.min`), r = ti(n.max, `${t}.max`);
	return r <= i || !Number.isFinite(r - i) ? Zn(t, "expected a finite ascending range") : {
		min: i,
		max: r
	};
}
function di(e, t) {
	const n = `series[${t}]`, i = Xn(e, n), r = ei(i.points, `${n}.points`);
	let s = Number.NEGATIVE_INFINITY;
	const a = (e) => `${n}.points[${e}]`, o = r.map((e, t) => {
		if ("object" != typeof e || null == e || Array.isArray(e)) return Zn(a(t), "expected an object");
		const n = e, i = n.timestamp;
		if ("number" != typeof i || !Number.isFinite(i)) return Zn(`${a(t)}.timestamp`, "expected a finite number");
		if (i <= s) return Zn(`${a(t)}.timestamp`, "expected strictly ascending timestamps");
		s = i;
		const r = n.value;
		return null === r || "number" == typeof r && Number.isFinite(r) ? {
			timestamp: i,
			value: r
		} : Zn(`${a(t)}.value`, "expected a finite number");
	});
	return {
		tone: oi(i.tone, `${n}.tone`),
		strokeWidth: ni(i.strokeWidth, `${n}.strokeWidth`),
		valueDomain: ci(i.valueDomain, `${n}.valueDomain`),
		points: o
	};
}
function ui(e, t) {
	const n = `overlays[${t}]`, i = Xn(e, n), r = {
		phase: li(i.phase, `${n}.phase`),
		order: ii(i.order, `${n}.order`),
		tone: oi(i.tone, `${n}.tone`)
	};
	if ("interval" === i.kind) {
		const e = ti(i.startTimestamp, `${n}.startTimestamp`), t = ti(i.endTimestamp, `${n}.endTimestamp`);
		return t <= e ? Zn(n, "expected a half-open ascending interval") : {
			kind: "interval",
			...r,
			startTimestamp: e,
			endTimestamp: t
		};
	}
	return "threshold" === i.kind ? {
		kind: "threshold",
		...r,
		value: ti(i.value, `${n}.value`),
		...si(i.draggable, `${n}.draggable`, "draggable"),
		...si(i.selected, `${n}.selected`, "selected"),
		...si(i.handle, `${n}.handle`, "handle"),
		...void 0 === i.label ? {} : { label: ai(i.label, `${n}.label`) }
	} : "instant" === i.kind ? {
		kind: "instant",
		...r,
		timestamp: ti(i.timestamp, `${n}.timestamp`)
	} : Zn(`${n}.kind`, "expected interval, threshold, or instant");
}
function pi(e, t, n) {
	const i = n.left + (e - t.min) / (t.max - t.min) * n.width;
	return Number.isFinite(i) ? i : Zn("projection", "expected a finite pixel coordinate");
}
function mi(e, t, n) {
	const i = (t.max - e) / (t.max - t.min) * n;
	return Number.isFinite(i) ? i : Zn("projection", "expected a finite pixel coordinate");
}
function gi(e) {
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
function fi(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function hi(e, t) {
	return e.overlays.map((e, t) => ({
		overlay: e,
		index: t
	})).filter(({ overlay: e }) => e.phase === t).sort((e, t) => e.overlay.order - t.overlay.order || e.index - t.index).map(({ overlay: t }) => function(e, t) {
		const n = t.plotArea.width, i = t.plotArea.height, r = Qn[e.tone];
		if ("interval" === e.kind) {
			if (e.endTimestamp <= t.viewport.min || e.startTimestamp >= t.viewport.max) return "";
			const s = fi(pi(e.startTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n), a = fi(pi(e.endTimestamp, t.viewport, {
				left: 0,
				width: n
			}), 0, n);
			return `<rect data-overlay-kind="interval" x="${gi(s)}" y="0" width="${gi(Math.max(1, a - s))}" height="${gi(i)}" fill="${r}" fill-opacity="0.16"/>`;
		}
		if ("threshold" === e.kind) {
			if (e.value < t.valueDomain.min || e.value > t.valueDomain.max) return "";
			const s = mi(e.value, t.valueDomain, i), a = !0 === e.selected, o = a ? "" : " stroke-dasharray=\"4 3\"";
			return `<line data-overlay-kind="threshold"${a ? " data-overlay-selected=\"true\"" : ""} x1="0" y1="${gi(s)}" x2="${gi(n)}" y2="${gi(s)}" stroke="${r}" stroke-width="${a ? "2" : "1"}"${o}/>`;
		}
		if (e.timestamp < t.viewport.min || e.timestamp > t.viewport.max) return "";
		const s = pi(e.timestamp, t.viewport, {
			left: 0,
			width: n
		});
		return `<line data-overlay-kind="instant" x1="${gi(s)}" y1="0" x2="${gi(s)}" y2="${gi(i)}" stroke="${r}" stroke-width="1" stroke-dasharray="2 3"/>`;
	}(t, e)).join("");
}
function _i(e) {
	const t = function(e) {
		const t = Xn(e, "scene");
		if (2 !== t.version) return Zn("version", "expected 2");
		const n = Xn(t.grid, "grid"), i = {
			strategy: (r = n.strategy, "string" == typeof r && Yn.includes(r) ? r : Zn("grid.strategy", "expected a supported render-grid strategy")),
			sourcePointCount: ri(n.sourcePointCount, "grid.sourcePointCount"),
			renderedPointCount: ri(n.renderedPointCount, "grid.renderedPointCount")
		};
		var r;
		if (i.renderedPointCount > i.sourcePointCount) return Zn("grid", "renderedPointCount cannot exceed sourcePointCount");
		if ("full-resolution-v1" === i.strategy && i.renderedPointCount !== i.sourcePointCount) return Zn("grid", "full-resolution strategy requires equal point counts");
		const s = Xn(t.size, "size"), a = {
			width: ni(s.width, "size.width"),
			height: ni(s.height, "size.height")
		}, o = Xn(t.plotArea, "plotArea"), l = {
			left: ti(o.left, "plotArea.left"),
			top: ti(o.top, "plotArea.top"),
			width: ni(o.width, "plotArea.width"),
			height: ni(o.height, "plotArea.height")
		};
		if (l.left < 0 || l.top < 0 || l.left + l.width > a.width || l.top + l.height > a.height) return Zn("plotArea", "expected bounds contained by size");
		const c = ci(t.viewport, "viewport"), d = ci(t.valueDomain, "valueDomain"), u = ei(t.series, "series").map(di);
		if (0 === u.length && 0 !== i.renderedPointCount) return Zn("grid.renderedPointCount", "expected zero when series is empty");
		const p = u[0]?.points.map((e) => e.timestamp) ?? [];
		for (let h = 0; h < u.length; h++) {
			const e = u[h]?.points ?? [];
			if (e.length !== i.renderedPointCount) return Zn(`series[${h}].points`, "expected renderedPointCount aligned points");
			for (let t = 0; t < e.length; t++) if (e[t]?.timestamp !== p[t]) return Zn(`series[${h}].points[${t}].timestamp`, "expected the shared render grid timestamp");
		}
		const m = ei(t.overlays, "overlays").map(ui), g = null === t.cursorTimestamp ? null : ti(t.cursorTimestamp, "cursorTimestamp");
		let f = null;
		if (null !== t.selection) {
			const e = Xn(t.selection, "selection"), n = ti(e.startTimestamp, "selection.startTimestamp"), i = ti(e.endTimestamp, "selection.endTimestamp");
			if (i <= n) return Zn("selection", "expected a half-open ascending interval");
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
			valueDomain: d,
			series: u,
			overlays: m,
			cursorTimestamp: g,
			selection: f
		};
	}(e), n = gi(t.size.width), i = gi(t.size.height), r = gi(t.plotArea.width), s = gi(t.plotArea.height), a = hi(t, "under-series"), o = t.series.map((e, n) => function(e, t, n) {
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
			const t = pi(o.timestamp, n.viewport, s);
			let l = a.get(o.value);
			void 0 === l && (l = gi(mi(o.value, e.valueDomain, n.plotArea.height)), a.set(o.value, l)), i += `${r ? "L" : "M"}${gi(t)} ${l}`, r = !0;
		}
		return 0 === i.length ? "" : `<path data-series-index="${t}" d="${i}" fill="none" stroke="${Qn[e.tone]}" stroke-width="${gi(e.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"/>`;
	}(e, n, t)).join(""), l = hi(t, "over-series");
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${i}" viewBox="0 0 ${n} ${i}" role="img"><title>Activity plot</title><rect x="0" y="0" width="${n}" height="${i}" fill="#ffffff"/><svg x="${gi(t.plotArea.left)}" y="${gi(t.plotArea.top)}" width="${r}" height="${s}" viewBox="0 0 ${r} ${s}" overflow="hidden"><rect x="0" y="0" width="${r}" height="${s}" fill="#ffffff"/>${a}${o}${l}${function(e) {
		const t = e.selection;
		if (null == t || t.endTimestamp <= e.viewport.min || t.startTimestamp >= e.viewport.max) return "";
		const n = fi(pi(t.startTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width), i = fi(pi(t.endTimestamp, e.viewport, {
			left: 0,
			width: e.plotArea.width
		}), 0, e.plotArea.width);
		return `<rect data-activity-plot-selection="true" x="${gi(n)}" y="0" width="${gi(Math.max(1, i - n))}" height="${gi(e.plotArea.height)}" fill="#0284c7" fill-opacity="0.14" stroke="#0284c7" stroke-opacity="0.85" stroke-width="1"/>`;
	}(t)}${function(e) {
		const t = e.cursorTimestamp;
		if (null == t || t < e.viewport.min || t > e.viewport.max) return "";
		const n = pi(t, e.viewport, {
			left: 0,
			width: e.plotArea.width
		});
		return `<line data-activity-plot-cursor="true" x1="${gi(n)}" y1="0" x2="${gi(n)}" y2="${gi(e.plotArea.height)}" stroke="#0f172a" stroke-width="1" stroke-dasharray="1 3"/>`;
	}(t)}</svg><rect x="${gi(t.plotArea.left)}" y="${gi(t.plotArea.top)}" width="${r}" height="${s}" fill="none" stroke="#cbd5e1" stroke-width="1"/></svg>`;
}
var wi = class extends Error {
	name = "ExportSnapshotTooLargeError";
	reason = "snapshot_too_large";
}, vi = class e extends Error {
	file;
	step;
	reason;
	constructor(e, t, n, i = yi(n)) {
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
function yi(e) {
	return e instanceof vi || e instanceof wi ? e.reason : e instanceof Error ? e.name : typeof e;
}
const bi = 65536, ki = "manifest.json";
var xi = class extends Error {
	name = "ExportEntryWriteError";
	entry;
	constructor(e, t) {
		super(`Export failed while writing ${e}`, void 0 === t ? void 0 : { cause: t }), this.entry = e;
	}
};
const Mi = "Checking the export inputs", Si = "Reading recordings", Ii = "Writing ZIP";
function Ti(e, t = {}) {
	return null == e ? "NA" : "boolean" == typeof e ? e ? "TRUE" : "FALSE" : "number" == typeof e ? Number.isFinite(e) ? t.integral ? String(e) : e.toFixed(4) : "NA" : e;
}
function Ri(e) {
	return String(e).padStart(2, "0");
}
function Ai(e) {
	throw new TypeError(`Invalid GGIR report render input: ${e}`);
}
function Ei(e) {
	return Date.parse(`${e}Z`) / 1e3;
}
function Ni(e, t) {
	return e.filter((e) => "rest" === e.kind || "sleep" === e.kind).map((e) => ({
		kind: e.kind,
		source: e.source,
		startTimestamp: Ei(e.start),
		endTimestamp: Ei(e.end),
		origin: t ? "generated" : "stored",
		...e.analysis ? { analysis: e.analysis } : {}
	})).filter((e) => Number.isFinite(e.startTimestamp) && Number.isFinite(e.endTimestamp) && e.endTimestamp > e.startTimestamp).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
function Ci(e) {
	return e.map(({ start: e, end: t, ...n }) => ({
		...n,
		startTimestamp: Ei(e),
		endTimestamp: Ei(t)
	}));
}
le("epoch_5s");
var $i = class extends Error {
	name = "ActiwareSleepContainmentError";
}, Oi = class extends Error {
	name = "ActiwareRestEditError";
};
const Li = (e, t) => Math.round((t - e.startTimestamp) / e.epochSeconds);
function ji(e, t) {
	return e.startTimestamp + Li(e, t) * e.epochSeconds;
}
const Bi = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " "), Di = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19);
function Pi(e) {
	return {
		kind: e.kind,
		source: e.source,
		start: Di(e.startTimestamp),
		end: Di(e.endTimestamp),
		...e.analysis ? { analysis: e.analysis } : {}
	};
}
async function Fi(e, { epochs: t, params: n, grid: i, core: r }) {
	if (0 === e.length) return [];
	const s = await r.actiwareIntervals(t, e.map(Pi), n);
	if (!s || s.generated) throw new Error("The Actiware core did not derive the sleep inside these rest intervals.");
	const a = Ni(s.intervals.filter((e) => "sleep" === e.kind), !0);
	return function(e, t) {
		const n = e.filter((e) => "rest" === e.kind);
		for (const i of e.filter((e) => "sleep" === e.kind)) {
			const e = Li(t, i.startTimestamp), r = Li(t, i.endTimestamp);
			if (!n.some((n) => e >= Li(t, n.startTimestamp) && r <= Li(t, n.endTimestamp))) throw new $i(`Actiware sleep interval ${Bi(i.startTimestamp)}–${Bi(i.endTimestamp)} lies outside every rest interval.`);
		}
	}([...e, ...a], i), a;
}
const Gi = /* @__PURE__ */ new Map();
function Wi(e, t) {
	const n = JSON.stringify(e), i = Gi.get(n);
	if (i) return Gi.delete(n), Gi.set(n, i), i.catch(() => (zi(n, i), Wi(e, t)));
	const r = t.actiwareNights(e);
	Gi.set(n, r);
	const s = Gi.keys().next();
	return Gi.size > 8 && !s.done && Gi.delete(s.value), r.catch(() => {
		zi(n, r);
	}), r;
}
function zi(e, t) {
	Gi.get(e) === t && Gi.delete(e);
}
async function Vi(e, t) {
	const n = e ?? [], i = 0 === n.length ? [] : await Wi(n.map(({ kind: e, startTimestamp: t, endTimestamp: n }) => ({
		kind: e,
		start: t,
		end: n
	})), t);
	return {
		intervals: n,
		byDate: new Map(i.map((e) => [e.date, e]))
	};
}
function Ui(e, t) {
	return e.byDate.get(t)?.rests.map((t) => e.intervals[t]) ?? [];
}
const Hi = ({ startTimestamp: e, endTimestamp: t }) => ({
	startTimestamp: e,
	endTimestamp: t
});
function qi(e, t) {
	const n = e.byDate.get(t);
	return n ? Hi(e.intervals[n.main_rest]) : null;
}
function Ji(e, t) {
	const n = e.byDate.get(t);
	if (!n) return null;
	const i = (t) => Hi(e.intervals[t]);
	return {
		rest: i(n.main_rest),
		sleep: null === n.sleep ? null : i(n.sleep),
		...n.additional_sleeps.length > 0 ? { additionalSleeps: n.additional_sleeps.map(i) } : {}
	};
}
function Ki(e, t) {
	const n = e.intervals.findIndex((e) => "rest" === e.kind && e.startTimestamp === t.startTimestamp && e.endTimestamp === t.endTimestamp);
	if (!(n < 0)) {
		for (const t of e.byDate.values()) if (t.rests.includes(n)) return t.date;
		return null;
	}
}
const Yi = (e, t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp;
function Qi(e, t, n) {
	const i = Ji(e, t);
	return i ? [...i.sleep && !n ? [{
		onsetTimestamp: i.sleep.startTimestamp,
		offsetTimestamp: i.sleep.endTimestamp,
		markerIndex: 1,
		markerType: te.MAIN_SLEEP
	}] : [], ...(i.additionalSleeps ?? []).map((e, t) => ({
		onsetTimestamp: e.startTimestamp,
		offsetTimestamp: e.endTimestamp,
		markerIndex: t + 2,
		markerType: te.NAP
	}))] : [];
}
function Zi(e, t, n, i) {
	return Qi(t, n, i).map((t) => {
		const n = e.find((e) => e.markerType === t.markerType && e.onsetTimestamp === t.onsetTimestamp && e.offsetTimestamp === t.offsetTimestamp);
		return n ? {
			...n,
			markerIndex: t.markerIndex
		} : t;
	});
}
function Xi(e, t) {
	return {
		take: e.filter((e) => !t.includes(e)),
		put: t.filter((t) => !e.includes(t))
	};
}
const er = (e, t) => e.startTimestamp < t.endTimestamp && e.endTimestamp > t.startTimestamp;
function tr(e, t, n) {
	const i = n.filter((e) => "rest" === e.kind), r = /* @__PURE__ */ new Map();
	for (const { startTimestamp: s, endTimestamp: a } of [...e, ...t.take.filter((e) => "rest" === e.kind)]) i.some((e) => er(e, {
		startTimestamp: s,
		endTimestamp: a
	})) || r.set(`${String(s)}:${String(a)}`, {
		startTimestamp: s,
		endTimestamp: a
	});
	return [...r.values()];
}
function nr({ take: e, put: t }) {
	return {
		take: t,
		put: e
	};
}
const ir = (e) => JSON.stringify([
	e.kind,
	e.source,
	e.origin,
	e.startTimestamp,
	e.endTimestamp,
	e.analysis ?? null,
	e.subjectiveScores ?? null
]);
async function rr(e, t, n, i) {
	const { intervals: r } = e, s = /* @__PURE__ */ new Set();
	for (const c of n.take) {
		const e = r.find((e) => !s.has(e) && ir(e) === ir(c));
		if (!e) throw new Oi("That rest interval changed since it was shown; reload the night.");
		s.add(e);
	}
	const a = r.filter((e) => !s.has(e)), o = n.put.filter((e) => "rest" === e.kind);
	for (const c of o) if (a.some((e) => "rest" === e.kind && e.startTimestamp < c.endTimestamp && e.endTimestamp > c.startTimestamp)) throw new Oi("A rest interval cannot overlap another rest interval.");
	const l = await Vi([...a, ...n.put].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), i);
	if (o.some((e) => Ki(l, e) !== t)) throw new Oi("That rest interval would belong to another night.");
	return l;
}
function sr({ take: e, put: t }) {
	const n = (e) => ({
		startTimestamp: e.startTimestamp,
		endTimestamp: e.endTimestamp
	}), [i, r] = [e, t].map((e) => e.filter((e) => "rest" === e.kind).map(n)), [s] = i ?? [], [a] = r ?? [];
	return 1 === i?.length && 1 === r?.length && s && a ? [{
		edit: "move",
		from: s,
		to: a
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
async function ar(e, t, n, i) {
	const { intervals: r } = e, s = Ui(e, t);
	if ("clear" === n.kind) return Vi(r.filter((e) => !(s.includes(e) || "sleep" === e.kind && s.some((t) => Yi(e, t)))), i.core);
	const a = "move" === n.kind ? function(e, { from: t, to: n }) {
		const i = e.find((e) => e.startTimestamp === t.startTimestamp && e.endTimestamp === t.endTimestamp);
		if (i) return i;
		const r = e.filter((e) => n.startTimestamp === t.startTimestamp && e.startTimestamp === n.startTimestamp || n.endTimestamp === t.endTimestamp && e.endTimestamp === n.endTimestamp);
		return 1 === r.length ? r[0] : void 0;
	}(s, n) : "remove" === n.kind ? s.find((e) => Yi(n.holding, e)) : void 0;
	if ("add" !== n.kind && !a) throw new Oi("That rest interval changed since it was shown; reload the night.");
	const o = r.filter((e) => e !== a && !(a && "sleep" === e.kind && Yi(e, a)));
	if ("remove" === n.kind) return Vi(o, i.core);
	const { grid: l } = i, c = a?.analysis, d = {
		kind: "rest",
		source: "event_marker",
		origin: "scorer",
		startTimestamp: ji(l, n.to.startTimestamp),
		endTimestamp: ji(l, n.to.endTimestamp),
		...c ? { analysis: c } : {}
	};
	if (d.endTimestamp <= d.startTimestamp) throw new Oi("A rest interval must end after it starts.");
	if (o.some((e) => "rest" === e.kind && e.startTimestamp < d.endTimestamp && e.endTimestamp > d.startTimestamp)) throw new Oi("A rest interval cannot overlap another rest interval.");
	const u = await Fi([d], i), p = await Vi([
		...o,
		d,
		...u
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), i.core);
	if (Ki(p, d) !== t) throw new Oi("That rest interval would belong to another night.");
	return p;
}
async function or(e, t, n, i) {
	const r = [...t, ...n];
	if (0 === r.length) return [...e];
	const s = e.filter((e) => "rest" === e.kind && r.some((t) => er(e, t))), a = e.filter((e) => !(s.includes(e) || "sleep" === e.kind && s.some((t) => Yi(e, t)))), o = await Fi(t, i);
	return [
		...a,
		...t,
		...o
	].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
const lr = [
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
], cr = (new Set(lr.slice(16).map(([e]) => e)), "actiware_intervals_export.csv"), dr = "actiware_sleep_wake_export.csv", ur = u.invalid_night_row.markerTypeCell, pr = new Set(lr.map(([, e]) => e));
function mr(e, t) {
	const n = e(s["start" === t ? "interval_start_date" : "interval_end_date"].header), i = e(s["start" === t ? "interval_start_time" : "interval_end_time"].header);
	return n && i ? `${n}T${i}` : "";
}
const gr = {
	metricColumn: (e) => pr.has(e),
	invalidNightRow: (e) => e(s.interval_kind.header) === ur,
	reasonFor({ column: e, value: t, producerReason: n, invalidNightRow: i, allRows: r, missing: a }) {
		if (i) return "invalid_night";
		const o = t(s.interval_kind.header).toLowerCase(), l = mr(t, "start");
		if ("daily" === o && l && l === mr(t, "end")) return "zero_interval_rows";
		if ([
			s.actiware_onset_latency.header,
			s.actiware_efficiency.header,
			s.actiware_waso.header
		].includes(e)) {
			if ("sleep" !== o) return "not_applicable_to_row";
			if (a(t(s.actiware_duration.header))) return null;
			const e = mr(t, "start"), n = mr(t, "end");
			if (!e || !n) return null;
			let i = !1;
			for (const a of r) if (a.get(s.filename.header) === t(s.filename.header) && "rest" === a.get(s.interval_kind.header) && mr((e) => a.get(e) ?? "", "start") <= e && n <= mr((e) => a.get(e) ?? "", "end")) {
				i = !0;
				break;
			}
			return i ? null : "no_eligible_rest";
		}
		if (a(t(s.actiware_duration.header))) return null;
		if (e === s.actiware_off_wrist.header || e === s.actiware_off_wrist_percent.header) return e === s.actiware_off_wrist_percent.header && "0.00" === t(s.actiware_duration.header) ? "zero_interval_rows" : "source_reported_missing" === n ? n : null;
		if (e === s.actiware_avg_ac_per_min.header) return 100 === Number(t(s.actiware_invalid_sw_percent.header)) ? "no_valid_epochs" : null;
		if ([
			s.actiware_invalid_sw_percent.header,
			s.actiware_wake_percent.header,
			s.actiware_sleep_percent.header
		].includes(e)) {
			if ("0.00" === t(s.actiware_duration.header)) return "zero_interval_rows";
			const n = !a(t(s.actiware_wake_time.header)) && !a(t(s.actiware_sleep_time.header)) && 0 === Number(t(s.actiware_wake_time.header)) && 0 === Number(t(s.actiware_sleep_time.header));
			return e === s.actiware_invalid_sw_percent.header || 100 !== Number(t(s.actiware_invalid_sw_percent.header)) && !n ? null : "no_scored_epochs";
		}
		const c = /^(?:Exposure|Avg|Max|TALT|%Invalid) (White|Red|Green|Blue)$/u.exec(e);
		if (c) {
			const i = c[1];
			return "0.00" === t(s.actiware_duration.header) ? "zero_interval_rows" : a(t("%Invalid " + i)) ? "source_reported_missing" === n ? n : null : e.startsWith("TALT ") && !a(t("Exposure " + i)) ? "threshold_unconfigured" : 100 === Number(t("%Invalid " + i)) ? "no_valid_epochs" : null;
		}
		return null;
	}
}, fr = {
	metricColumn: (e) => e === s.actiware_sleep_wake.header || e === s.actiware_wake_threshold.header,
	reasonFor: ({ column: e, producerReason: t }) => e === s.actiware_sleep_wake.header ? "no_valid_epochs" === t ? t : null : e === s.actiware_wake_threshold.header && "not_computed_for_export" === t ? t : null
}, _r = new Map(Object.entries({
	[cr]: gr,
	[dr]: fr
}));
var wr = class extends Error {};
const vr = "edit_recompute_requires_ms2_ms3", yr = /* @__PURE__ */ new Set([
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
]), br = u.invalid_night_row.markerTypeCell, kr = /* @__PURE__ */ new Set([
	s.ggir_sleepparam.header,
	s.ggir_guider_onset.header,
	s.ggir_guider_wakeup.header,
	s.ggir_guider_spt_duration.header,
	s.ggir_error_onset.header,
	s.ggir_error_wake.header,
	s.ggir_error_dur.header,
	s.ggir_fraction_night_invalid.header,
	s.ggir_duration_sib_wakinghours.header,
	s.ggir_number_sib_sleepperiod.header,
	s.ggir_number_sib_wakinghours.header,
	s.ggir_duration_sib_wakinghours_atleast15min.header,
	s.ggir_guider_onset_ts.header,
	s.ggir_guider_wakeup_ts.header,
	s.ggir_page.header,
	s.ggir_daysleeper.header,
	s.ggir_sleeplog_id.header,
	s.ggir_guider.header,
	s.ggir_longitudinal_axis.header
]), xr = /* @__PURE__ */ new Set([
	s.ggir_sleep_duration_in_spt.header,
	s.ggir_waso.header,
	s.ggir_number_of_awakenings.header,
	s.ggir_sleeplatency.header,
	s.ggir_sleepefficiency.header
]), Mr = /* @__PURE__ */ new Set([
	...xr,
	s.ggir_nonwear_perc_spt.header,
	s.ggir_sleeponset.header,
	s.ggir_wakeup.header,
	s.ggir_spt_duration.header,
	s.ggir_guider_onset.header,
	s.ggir_guider_wakeup.header,
	s.ggir_guider_spt_duration.header,
	"sleeponset_idx",
	"wakeup_idx",
	s.ggir_sleeponset_ts.header,
	s.ggir_wakeup_ts.header,
	s.ggir_guider_onset_ts.header,
	s.ggir_guider_wakeup_ts.header,
	s.ggir_daysleeper.header,
	s.ggir_cleaningcode.header,
	s.ggir_guider.header,
	s.ggir_error_onset.header,
	s.ggir_error_wake.header,
	s.ggir_error_dur.header,
	s.ggir_fraction_night_invalid.header,
	s.ggir_duration_sib_wakinghours.header,
	s.ggir_number_sib_sleepperiod.header,
	s.ggir_number_sib_wakinghours.header,
	s.ggir_duration_sib_wakinghours_atleast15min.header
]), Sr = /* @__PURE__ */ new Set([
	s.ggir_id.header,
	s.ggir_filename.header,
	s.ggir_longitudinal_axis.header,
	"GGIRversion",
	"SleepRegularityIndex",
	s.ggir_sleep_regularity_index1.header,
	s.ggir_sri_fraction_valid.header,
	s.ggir_calendar_date.header,
	s.ggir_weekday.header,
	"window_number",
	"night_number",
	"window",
	"start_end_window",
	s.ggir_cleaningcode.header,
	s.ggir_guider.header,
	s.ggir_sleeplog_used.header,
	s.ggir_acc_available.header,
	s.ggir_daysleeper.header
]), Ir = /* @__PURE__ */ new Set([
	"Sedentary Minutes",
	"Light Minutes",
	"Moderate Minutes",
	"Vigorous Minutes",
	"MVPA Minutes",
	"Wake Wear Minutes",
	"Excluded Nonwear Minutes"
]), Tr = /* @__PURE__ */ new Set([
	"Excluded Main Sleep Minutes",
	"Excluded Nap Minutes",
	"MVPA Bouts",
	"MVPA Bout Minutes",
	"Sedentary Bouts",
	"Sedentary Breaks",
	"Mean Sedentary Bout Minutes"
]), Rr = new Set(Object.values(s).filter((e) => "number" === e.dataType && ("metric_field" === e.sourceBinding || "aggregate" === e.sourceBinding || "device_series_aggregate" === e.sourceBinding || "derived" === e.sourceBinding)).map((e) => e.header)), Ar = new Set(Object.values(s).filter((e) => "verbatim_string" === e.formatter).map((e) => e.header)), Er = new Set(Object.values(l).map((e) => e.reviewSource)), Nr = (e) => "" === e.trim() || /^(?:nan|na|n\/a)$/iu.test(e.trim()), Cr = Nr, $r = "refusal_detail_missing_reason";
function Or(e, t, n, i) {
	const r = (e) => n.get(e) ?? "", a = r(t + "_missing_reason");
	if (a && !yr.has(a)) return null;
	const o = a || null;
	if (e.startsWith("part2_")) return "source_reported_missing";
	if (e.includes("_ggir_review")) {
		if (o) return o;
		const e = r("review_source");
		return Er.has(e) ? "source_reported_missing" : "invalid" === e ? "invalid_night" : "recomputed" === e ? "not_computed_for_export" : null;
	}
	const l = _r.get(e), c = r(s.marker_type.header) === br || (l?.invalidNightRow?.(r) ?? !1);
	if (!function(e, t) {
		const n = _r.get(e);
		return n ? n.metricColumn(t) : "physical_activity_export.csv" === e ? /(?:Minutes|Bouts|Breaks|Total|Max|Min|Epochs Reviewed|Epoch Length Seconds|Native Epoch Seconds|Mask Overlap Epochs)$/u.test(t) : "sleep_export_wide.csv" === e ? /^night[0-9]+_(?:tst_min|sleep_efficiency|waso_min)$/u.test(t) : /^(?:ggir_|part4_nightsummary|part5_)/u.test(e) ? !/^(?:review_|crosscheck_|edit_provenance|ggir_id|ggir_filename|ggir_calendar_date)/u.test(t) && ![
			s.ggir_id.header,
			s.ggir_filename.header,
			s.ggir_calendar_date.header,
			s.ggir_weekday.header,
			s.ggir_sleeplog_id.header,
			s.ggir_guider_corrected.header,
			s.ggir_cleaningcode.header
		].includes(t) : Rr.has(t);
	}(e, t)) return o || (c ? "invalid_night" : "Manual Nonwear" === r(s.marker_type.header) ? "manual_nonwear_period" : null);
	if (l) return l.reasonFor({
		column: t,
		value: r,
		producerReason: o,
		invalidNightRow: c,
		allRows: i,
		missing: Cr
	});
	if (/^(?:ggir_|part4_nightsummary|part5_)/u.test(e)) return kr.has(t) ? "not_computed_for_export" === o ? o : null : xr.has(t) ? "no_scored_epochs" === o || "not_applicable_to_row" === o || "scores_from_another_config" === o ? o : null : o;
	if ("sleep_export_wide.csv" === e) return o;
	if ("summary_export.csv" === e && t === s.sleep_regularity_index.header) return o && [
		"insufficient_pair",
		"no_scored_epochs",
		"no_valid_epochs",
		"not_computed_for_export",
		"scores_from_another_config"
	].includes(o) ? o : null;
	if ("physical_activity_export.csv" === e) {
		const e = r("Status"), n = r("Method");
		if ([
			"Epoch Length Seconds",
			"Native Epoch Seconds",
			"Mask Overlap Epochs"
		].includes(t)) return "Epoch Length Seconds" === t ? "ggir_enmo" === n ? "not_applicable_to_row" : null : "Native Epoch Seconds" === t ? "not_applicable" === r("Threshold Source") ? "not_applicable_to_row" : "source_reported_missing" === o ? o : null : "ggir_enmo" === n ? "not_applicable_to_row" : "needs_signal" === e ? "channel_unavailable" : "backend_required" === e ? "not_computed_for_export" : null;
		const i = {
			"Sedentary Max": "sedentaryMax",
			"Light Min": "lightMin",
			"Moderate Min": "moderateMin",
			"Vigorous Min": "vigorousMin"
		}[t];
		if (i && "not_applicable" === r("Threshold Source")) return "device_not_applicable";
		if ("needs_signal" === e) return "channel_unavailable";
		if ("backend_required" === e) return "not_computed_for_export";
		if ("ready" !== e) return null;
		const s = E.find((e) => e.method === n);
		return i && s?.cutpoint && !Number.isFinite(s.cutpoint[i]) || "MIMS Unit Total" === t && "mims" !== n ? "not_applicable_to_row" : "ggir_enmo" === n ? Ir.has(t) ? "source_reported_missing" === o ? o : null : Tr.has(t) && "not_computed_for_export" === o ? o : null : "mims" === n && [
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
		].includes(t) ? "0.00" === r("Wake Wear Minutes") ? "no_valid_epochs" : null : "not_computed_for_export";
	}
	return /^nonwear_export(?:_|\.)/u.test(e) ? "Manual Nonwear" === r(s.marker_type.header) ? "manual_nonwear_period" : null : "true" === r(s.is_invalid_night.header).toLowerCase() && r(s.marker_type.header) === br ? "invalid_night" : t === s.total_nap_minutes.header && "0" === r(s.nap_count.header) ? "not_applicable_to_row" : [
		s.l5_hour.header,
		s.m10_hour.header,
		s.sleep_midpoint_hour.header,
		s.valid_wear_minutes.header
	].includes(t) ? o && [
		"not_computed_for_export",
		"no_valid_epochs",
		"not_applicable_to_row"
	].includes(o) ? o : null : /^Mean (?:Temperature|White Light|Red Light|Green Light|Blue Light)/u.test(t) ? o && [
		"channel_unavailable",
		"no_valid_epochs",
		"not_applicable_to_row"
	].includes(o) ? o : null : o;
}
const Lr = "missing_reasons.csv";
function jr(e, t = !0) {
	return [...t ? ["file,row,key,column,reason"] : [], ...e.map((e) => [
		e.file,
		String(e.row),
		e.key,
		e.column,
		e.reason
	].map(N).join(","))].map((e) => e + "\n").join("");
}
function Br(e, t) {
	const n = [
		s.filename.header,
		s.ggir_filename.header,
		"ggir_filename",
		s.participant_id.header,
		s.ggir_id.header,
		s.study_date.header,
		"Analysis Date",
		s.ggir_calendar_date.header,
		"ggir_calendar_date",
		s.interval_kind.header,
		s.marker_type.header,
		s.interval_start_date.header,
		s.interval_start_time.header,
		s.epoch_local.header,
		"Method"
	].flatMap((t) => {
		const n = e.get(t);
		return n ? [t + "=" + n] : [];
	});
	return n.length ? n.join("|") : "row=" + String(t);
}
function Dr(e, t) {
	let n = !1, i = 0;
	for (let r = 0; r < e.length; r += 1) if ("\"" === e[r]) n && "\"" === e[r + 1] ? r += 1 : n = !n;
	else if ("," === e[r] && !n && ++i === t) return e.slice(0, r);
	return e;
}
function* Pr(e, t, n = !0, i) {
	const { headerlessColumns: r, fullRowCsv: s, rowOffset: a = 0, contextRows: o } = i ?? {}, l = r?.length ? r.join(",") + "\n" + e : e, c = D(l);
	if (c.unterminatedQuotedField) throw new Error(t + ": unterminated CSV cell");
	const [d, ...u] = c.records;
	if (!d) return {
		csv: e,
		withReason: 0,
		withoutReason: 0
	};
	const p = U(d.text), m = p.findIndex((e) => e.endsWith("_missing_reason"));
	if (m >= 0 && p.slice(m).some((e) => !e.endsWith("_missing_reason"))) throw new Error(t + ": internal reason fields must trail data fields");
	const g = p.map((e, t) => ({
		header: e,
		index: t
	})).filter(({ header: e }) => "" !== e && !e.endsWith("_missing_reason")), f = u.map((e) => U(e.text)), h = f.map((e) => new Map(p.map((t, n) => [t, e[n] ?? ""]))), _ = s ? D(s).records : [], w = _[0] ? U(_[0].text) : [], v = s ? _.slice(1).map((e) => U(e.text)) : [];
	if (s && g.length > 0 && v.length !== f.length) throw new Error(t + ": complete-row evidence count differs");
	const y = s ? v.map((e) => new Map(w.map((t, n) => [t, e[n] ?? ""]))) : h;
	let b = 0, k = 0;
	for (let x = 0; x < f.length; x += 1) {
		const e = f[x], n = h[x];
		for (const { header: r, index: s } of g) {
			if ("edit_recompute_requires_ms2_ms3" === y[x].get(r + "_missing_reason") && /^(?:part4_nightsummary|part5_)/u.test(t)) {
				yield {
					file: t,
					row: a + x + 1,
					key: Br(n, a + x + 1),
					column: r,
					reason: vr
				}, b += 1;
				continue;
			}
			const i = e[s] ?? "";
			if (!Cr(i) || "" !== i.trim() && Ar.has(r)) continue;
			const l = Or(t, r, y[x], o?.() ?? y);
			l ? (b += 1, yield {
				file: t,
				row: a + x + 1,
				key: Br(n, a + x + 1),
				column: r,
				reason: l
			}) : (k += 1, console.warn("WARNING: unreasoned missing export cell"));
		}
		const i = n.get($r);
		i && (yield {
			file: t,
			row: a + x + 1,
			key: Br(n, a + x + 1),
			column: i,
			reason: "not_computed_for_export"
		});
	}
	if (n && k > 0) throw new wr(t + ": " + String(k) + " unreasoned missing metric cells");
	return m < 0 ? {
		csv: e,
		withReason: b,
		withoutReason: k
	} : {
		csv: [Dr(d.text, m), ...u.map((e) => Dr(e.text, m))].join("\n") + (e.endsWith("\n") ? "\n" : ""),
		withReason: b,
		withoutReason: k
	};
}
var Fr = p({
	GgirReviewChangedError: () => os,
	editsFromMarkers: () => Yr,
	getGgirMarkerInputs: () => Qr,
	ggirInvalidNightDates: () => is,
	ggirNightEdits: () => Kr,
	ggirNightRecords: () => Jr,
	ggirPersonReportsRecomputed: () => rs,
	hasGgirRecomputeFailure: () => Ur,
	mergeGgirSleepMarkers: () => qr,
	recomputeGgirResults: () => es,
	recoverPendingGgirRecomputes: () => as,
	reviewGgirResultsForMarkers: () => us,
	scheduleGgirRecompute: () => Xr,
	settleGgirScorerReviews: () => ns,
	storedGgirTailExpansion: () => ds
});
const Gr = new EventTarget(), Wr = /* @__PURE__ */ new WeakMap(), zr = 800, Vr = "Update GGIR review";
function Ur(e, t, n) {
	return S().jobs().jobs[`${n.name}:${Zr(e, t)}`]?.status === ae.FAILED;
}
function Hr(e, t, n, i, r) {
	if (r?.aborted || function(e) {
		return e instanceof Error && e.name === b.errnames.DatabaseClosed;
	}(i)) return;
	const s = Zr(e, t), a = `${n.name}:${s}`, o = S().jobs();
	o.jobs[a]?.controller.signal.aborted || o.jobs[a]?.status === ae.ELSEWHERE || (o.update(a, {
		id: a,
		key: s,
		workspaceId: n.name,
		kind: K.GGIR_RECOMPUTE,
		label: Vr,
		controller: o.jobs[a]?.controller ?? new AbortController(),
		done: 0,
		total: 0,
		status: ae.FAILED
	}), n.isOpen() && ee() === n && Gr.dispatchEvent(new CustomEvent("failed", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })));
}
function qr(e, t) {
	return [e, ...t].sort((e, t) => (e.onsetTimestamp ?? 0) - (t.onsetTimestamp ?? 0)).map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
async function Jr(e, t, n, i = [], r, s = Q(r)) {
	const a = Ie([...n.values()].flat(), !0), o = a?.algorithm ?? Ye(t), l = a?.detectionRule ?? null, c = /* @__PURE__ */ new Map();
	for (const [p, m] of n) {
		const e = Ie(m, !0);
		e && c.set(p, [{
			...e,
			algorithm: o,
			detectionRule: l
		}]);
	}
	const d = tt(t), u = d.length ? await s.ggirLabelsToStoredMs(Float64Array.from(d.flatMap((e) => [e.onsetMs, e.wakeMs])), i) : [];
	for (const [p, m] of d.entries()) {
		const t = c.get(m.nightDate)?.[0], n = be(m, t);
		"scored" !== n.kind && "invalid" !== n.kind ? c.set(m.nightDate, [{
			fileId: e,
			date: m.nightDate,
			username: ve,
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
			sleepMarkers: qr({
				markerType: te.MAIN_SLEEP,
				markerIndex: 1,
				onsetTimestamp: u[2 * p] / 1e3,
				offsetTimestamp: u[2 * p + 1] / 1e3
			}, t?.sleepMarkers ?? [])
		}]) : c.set(m.nightDate, t ? [t] : []);
	}
	return c;
}
async function Kr(e, t, n, i = [], r, s = Q(r)) {
	const a = await Jr(e, t, n, i, r, s), o = new Map([...a].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : []));
	return {
		markersByAlgo: a,
		selected: o,
		edits: await Yr(t, o, i, r, s)
	};
}
async function Yr(e, t, n = [], i, r = Q(i)) {
	const s = Xe(e).flatMap((e) => {
		const n = be(e, t.get(e.nightDate));
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
async function Qr(e, t, n) {
	return n.transaction("r", n.markers, n.files, async () => {
		const [i, r] = await Promise.all([De(e, t, n), Te(e, n)]), s = new Map([...i].flatMap(([e, t]) => {
			const n = Ie(t, !0);
			return n ? [[e, n]] : [];
		})), a = r?.ggirClockSteps;
		return {
			markerInputs: JSON.stringify([a ?? [], [...s].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [
				e,
				t.isInvalidNight ?? !1,
				be(void 0, t)
			])]),
			markers: s,
			clockSteps: a,
			bundleRevision: r?.ggirBundleRevision
		};
	});
}
function Zr(e, t) {
	return `${K.GGIR_RECOMPUTE}:${String(e)}:${JSON.stringify(t)}`;
}
function Xr(e, t, n, i) {
	if (!n.isOpen() || ee() !== n || i?.aborted) return;
	let r = Wr.get(n);
	r || (r = /* @__PURE__ */ new Map(), Wr.set(n, r));
	const s = Zr(e, t);
	clearTimeout(r.get(s)), r.set(s, setTimeout(() => {
		r.delete(s), n.files.get(e).then((r) => {
			if (r?.ggirBundleRevision && n.isOpen() && ee() === n && !i?.aborted) return es(e, t, n, i);
		}).catch((r) => {
			i?.aborted || r instanceof DOMException && "AbortError" === r.name || (Hr(e, t, n, r, i), n.isOpen() && ee() === n && Le("error", "GGIR results recompute failed", Pe(r)));
		});
	}, zr));
}
function es(e, t, n, i, r = !0) {
	const s = (a, o = i) => ie({
		kind: K.GGIR_RECOMPUTE,
		key: Zr(e, t),
		label: Vr,
		workspaceId: n.name,
		signal: o,
		rerun: !0,
		run: async (i) => {
			i.signal.throwIfAborted();
			const o = await ts(e, t, n, i.signal, r);
			if (i.signal.throwIfAborted(), !1 !== o) return o;
			if (a < 2) s(a + 1, i.signal).catch((r) => Hr(e, t, n, r, i.signal));
			else {
				const r = /* @__PURE__ */ new Error("The markers changed during every GGIR review attempt.");
				Le("error", "GGIR results recompute failed", Pe(r)), Hr(e, t, n, r, i.signal);
			}
			return null;
		}
	});
	return s(0);
}
async function ts(e, t, n, i, r, s = { active: () => n.isOpen() && ee() === n }) {
	if (i.throwIfAborted(), !s.active()) return null;
	const { markerInputs: a, markers: o, clockSteps: l, bundleRevision: c } = await Qr(e, t, n);
	if (!c) return null;
	const d = await n.ggirScorerReviews.get([e, t]);
	if (!s.active()) return null;
	if (i.throwIfAborted(), d?.markerInputs === a && d.bundleRevision === c && (u = d, void 0 === s.correctedKey || 0 === u.edits.length || u.corrected?.key === s.correctedKey)) return r && Gr.dispatchEvent(new CustomEvent("updated", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })), d.current ?? null;
	var u;
	const p = await n.ggirResultsBundles.get(e);
	if (!p) return null;
	const { edits: m } = await Kr(e, p.imported, new Map([...o].map(([e, t]) => [e, [t]])), l, i, s.api);
	if (!s.active()) return null;
	const g = ls(d, c, m), f = void 0 !== s.correctedKey && m.length > 0 && !p.ggirCorrections && !(g && d.corrected?.key === s.correctedKey), h = m.length > 0 && (!g || f) ? H(p, await n.ggirResultsBlobs.get(e)) : p, _ = g ? d.current : (await us(h, o, l, m, i, void 0, s.api)).current;
	let w = g ? d.corrected : void 0;
	if (f) {
		const t = await n.ggirCorrectedValues.get(e);
		if (!t || t.key !== s.correctedKey) return null;
		const r = Qe(h, t).find((e) => "corrected" === e.set), a = r && (await us(r.bundle, o, l, m, i, void 0, s.api)).current;
		w = {
			key: t.key,
			...a ? { current: a } : {}
		};
	}
	i.throwIfAborted();
	const v = (/* @__PURE__ */ new Date()).toISOString();
	if (!s.active()) return null;
	const y = await W(n, [
		n.ggirResultsBundles,
		n.ggirScorerReviews,
		n.markers,
		n.files
	], async () => {
		if (!s.active()) return null;
		const r = await Qr(e, t, n);
		return r.markerInputs === a && r.bundleRevision === c && (0 === await n.ggirResultsBundles.where(":id").equals(e).count() ? null : (i.throwIfAborted(), await n.ggirScorerReviews.put({
			fileId: e,
			scorer: t,
			..._ ? { current: _ } : {},
			edits: m,
			markerInputs: a,
			bundleRevision: c,
			updatedAt: v,
			...w ? { corrected: w } : {}
		}), !0));
	}, i);
	return y ? (Gr.dispatchEvent(new CustomEvent("updated", { detail: {
		fileId: e,
		scorer: t,
		db: n
	} })), i.throwIfAborted(), _ ?? h.imported) : (i.throwIfAborted(), !1 !== y && null);
}
async function ns(e, t, n, i, r = {}) {
	const s = await (t.length ? e.ggirResultsBundles.where(":id").anyOf([...t]) : e.ggirResultsBundles.toCollection()).primaryKeys(), a = (e) => {
		const t = i?.get(e);
		return t && "key" in t ? t.key : void 0;
	}, o = async (t) => {
		const i = await Promise.all(t.map((t) => async function(e, t, n, i) {
			const [{ markerInputs: r, bundleRevision: s }, a] = await Promise.all([Qr(t, n, e), e.ggirScorerReviews.get([t, n])]);
			return !(!a || !s || a.markerInputs !== r || a.bundleRevision !== s || 0 !== a.edits.length && ((await e.ggirResultsBundles.get(t))?.ggirCorrections || void 0 !== i && a.corrected?.key !== i));
		}(e, t, n, a(t))));
		return t.filter((e, t) => !i[t]);
	}, l = await o(s);
	if (0 === l.length) return new Set(await ss(e, s, n, r.signal));
	const c = r.signal ?? new AbortController().signal, d = (await e.files.bulkGet(l)).map((e) => e?.sourceSizeBytes ?? 0);
	return await pn(l.map((t, i) => ({
		name: String(t),
		cost: d[i],
		memoryGib: on(d[i]),
		run: async (i, r) => {
			try {
				await ts(t, n, e, c, !1, {
					active: () => e.isOpen(),
					api: i,
					correctedKey: a(t)
				});
			} catch (s) {
				c.throwIfAborted(), Le("warn", "GGIR review settle before export failed", Pe(s)), r.primary || r.cancel();
			}
		}
	})), {
		signal: r.signal,
		createWorker: ne,
		cancelOperation: () => {},
		...ln({
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: A()
		}),
		...r.workerPool
	}), /* @__PURE__ */ new Set([...await o(l), ...await ss(e, s, n, r.signal)]);
}
function is(e) {
	return new Set([...e].filter(([, e]) => "invalid" === be(void 0, e).kind).map(([e]) => e));
}
function rs(e, t, n) {
	return void 0 !== e && (t.length > 0 || n.size > 0);
}
function ss(e, t, n, i) {
	return t.reduce(async (t, r) => {
		const s = await t, [a, o] = await Promise.all([e.ggirResultsBundles.get(r), e.ggirScorerReviews.get([r, n])]);
		if (!a?.personReports || void 0 !== a.imported.tailExpansion || void 0 !== o?.current?.tailExpansion) return s;
		const { markers: l, clockSteps: c } = await Qr(r, n, e), { selected: d, edits: u } = await Kr(r, a.imported, new Map([...l].map(([e, t]) => [e, [t]])), c, i);
		return rs(a.personReports, u, is(d)) ? [...s, r] : s;
	}, Promise.resolve([]));
}
function as(e, t) {
	return ie({
		kind: K.GGIR_RECOVERY,
		key: K.GGIR_RECOVERY,
		label: "Resume GGIR reviews",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			let n = null;
			const i = () => !t.signal.aborted && e.isOpen() && ee() === e;
			try {
				if (!i()) return;
				const s = await e.ggirResultsBundles.toCollection().primaryKeys(), { ensureSavedGgirNonwear: a } = await import("./ggir-import-CLfM4H3g.js");
				for (const o of s) {
					if (t.signal.throwIfAborted(), !i()) return;
					try {
						const [n] = await Promise.all([e.ggirScorerReviews.where("fileId").equals(o).toArray(), a(o, e, t.signal)]), s = await e.markers.where("fileId").equals(o).toArray(), l = /* @__PURE__ */ new Set([...s.map((e) => e.username), ...n.map((e) => e.scorer)]);
						l.delete(ve);
						for (const a of l) {
							if (!i()) return;
							try {
								const i = Ur(o, a, e);
								if (!i) {
									const { markerInputs: t, bundleRevision: i } = await Qr(o, a, e), r = n.find((e) => e.scorer === a);
									if (i && r?.markerInputs === t && r.bundleRevision === i) continue;
								}
								await es(o, a, e, t.signal, i);
							} catch (r) {
								Hr(o, a, e, r, t.signal);
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
				const s = Object.values(S().jobs().jobs).filter((t) => F(t) && t.workspaceId === e.name && t.kind === K.GGIR_RECOMPUTE && t.status === ae.FAILED);
				for (const t of s) {
					const s = t.key.slice(K.GGIR_RECOMPUTE.length + 1);
					if (!i()) break;
					const a = s.indexOf(":"), o = Number(s.slice(0, a)), l = JSON.parse(s.slice(a + 1));
					try {
						await e.transaction("r", e.ggirResultsBundles, e.markers, e.ggirScorerReviews, async () => {
							if (!i()) return;
							const [n, r, s] = await Promise.all([
								e.ggirResultsBundles.where(":id").equals(o).count(),
								e.markers.where("fileId").equals(o).filter((e) => e.username === l).count(),
								e.ggirScorerReviews.where("[fileId+scorer]").equals([o, l]).count()
							]);
							i() && (0 === n || 0 === r && 0 === s) && (S().jobs().dismiss(t.id), Gr.dispatchEvent(new CustomEvent("updated", { detail: {
								fileId: o,
								scorer: l,
								db: e
							} })));
						});
					} catch (r) {
						n ??= r;
					}
				}
				null !== n && i() && (Le("error", "GGIR review recovery failed", Pe(n)), S().jobs().update(`${e.name}:${K.GGIR_RECOVERY}`, { status: ae.FAILED }));
			}
		}
	});
}
var os = class extends Error {
	constructor() {
		super("a night of this recording was edited during the export; export again");
	}
};
function ls(e, t, n) {
	return void 0 !== e && void 0 !== t && e.bundleRevision === t && JSON.stringify(e.edits) === JSON.stringify(n);
}
function cs(e, t) {
	const n = (e) => e ? new Uint8Array(e) : void 0, i = n(e.ms2), r = n(e.ms3), s = n(e.ms4), a = n(e.ms5), o = n(e.sleeplogRData);
	return {
		part1: new Uint8Array(e.part1),
		configCsv: e.configCsv,
		recordingId: re(e.recordingFile),
		...i ? { ms2: i } : {},
		...r ? { ms3: r } : {},
		...s ? { ms4: s } : {},
		...a ? { ms5: a } : {},
		...o ? { sleeplogRData: o } : {},
		...e.sleeplogCsv ? { sleeplogCsv: e.sleeplogCsv } : {},
		edits: t,
		...e.cleanedNightsCsv ? { cleanedNightsCsv: e.cleanedNightsCsv } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: e.dataCleaningCsv } : {},
		crossCheck: !1
	};
}
async function ds(e, t) {
	return Object.hasOwn(e, "part1") ? (await B(t, (t) => t.reviewGgirResults(cs(e, [])))).tailExpansion : null;
}
async function us(e, t, n = [], i, r, s, a) {
	const o = i ?? await Yr(e.imported, t, n, r, a);
	let l;
	r?.throwIfAborted();
	const c = s?.review;
	if (ls(c, s?.bundleRevision, o)) l = c.current;
	else {
		if (s && o.length > 0 && !e.part1) throw new os();
		if (o.length > 0 && e.ms2 && e.ms3) {
			const t = (t) => t.reviewGgirResults(cs(e, o));
			l = rt(await (a ? t(a) : B(r, t)));
		}
	}
	r?.throwIfAborted();
	const d = Object.getOwnPropertyDescriptors(e);
	return delete d.current, Reflect.deleteProperty(d, "edits"), Object.defineProperties({
		...l ? { current: l } : {},
		edits: o
	}, d);
}
const ps = [
	"review_source",
	"crosscheck_status",
	"crosscheck_reasons",
	"crosscheck_diff_columns",
	"edit_provenance"
], ms = (e) => null == e ? "" : "number" == typeof e ? Number.isFinite(e) ? String(e) : "" : "string" == typeof e && "" !== e.trim() && Number.isFinite(Number(e)) ? e : N(String(e)), gs = (n.part4_night_review, n.part5_day_review, (e) => e.ggirCorrections ? "corrected" : "default");
function fs(e, t, i = "") {
	return n[e].replace("{report}", i.replace(/\.csv$/u, "")).replace(/\.csv$/u, `${l[t].filenameSuffix}.csv`);
}
const hs = Object.keys(l).map((e) => fs("person_summary_review", e)), _s = (e) => hs.some((t) => e.endsWith(t));
function ws(e) {
	if ("string" != typeof e) return;
	const t = e.trim().split(/[T ]/u)[0];
	if (/^\d{4}-\d{2}-\d{2}$/u.test(t)) return X(t) ?? void 0;
	const n = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/u.exec(t);
	return n ? X(`${n[3]}-${n[2].padStart(2, "0")}-${n[1].padStart(2, "0")}`) ?? void 0 : void 0;
}
function vs(e, t) {
	const n = new Map(Xe(e).map((e) => [e.night, e.nightDate]));
	return (e, i, r = !0) => {
		const a = e.columns.indexOf("nights" === t ? s.ggir_night.header : "night_number"), o = Number(e.values[a]?.[i]), l = n.get(o);
		if (r && l) return l;
		const c = e.values[e.columns.indexOf(s.ggir_calendar_date.header)]?.[i];
		return ws(c);
	};
}
function ys(e, t, n) {
	const i = /* @__PURE__ */ new Map(), r = (e, t) => {
		void 0 !== e && i.set(e, [i.get(e), t].filter(Boolean).join(" "));
	}, s = e.unreadableWindowRows.filter(n);
	var a;
	s.length > 0 && r(s[0], (a = s.length, `${String(a)} ${1 === a ? "day row of this recording has a GGIR window (start_end_window) that cannot be read, so it is" : "day rows of this recording have a GGIR window (start_end_window) that cannot be read, so each is"} marked not recomputed after a night edit.`));
	const l = e.rows.filter((i) => n(i) && e.undatedEditNights.includes(o(t, "night_number", i) ?? NaN)), c = e.undatedEditNights.filter((e) => l.some((n) => o(t, "night_number", n) === e));
	var d;
	return c.length > 0 && r(l[0], `${1 === (d = c).length ? "Night" : "Nights"} ${d.join(", ")} of this recording ${1 === d.length ? "was" : "were"} edited, but GGIR saved no window for ${1 === d.length ? "it" : "them"} to date the edit on, so only ${1 === d.length ? "that night's" : "those nights'"} own day rows are marked not recomputed.`), i;
}
async function bs(e, t, n, i) {
	const r = "nights" === t ? s.ggir_night.header : "window_number", a = Q(n), u = await Promise.all(e.map((e) => Promise.all(e.edits.map(async (t) => [t.night, await Ze(e.imported, e.edits, t.night, n)])))), p = (await Promise.all(e.map(async (e, n) => {
		const i = e.current ?? e.imported, r = (e) => "nights" === t ? e.nights : e.days, s = "nights" === t ? i.nightRecomputed : i.dayRecomputed, o = "nights" === t ? e.imported.nightChecks : e.imported.dayChecks, c = u[n].filter((e) => null != e[1]), d = vs(e.imported, t), p = new Set(e.edits.map((e) => e.night)), m = e.edits.length > 0 && !(e.recomputeAvailable ?? Boolean(e.ms2 && e.ms3)) && !e.current, g = "days" === t && m ? await a.ggirDayRowsTouchedByEdits({
			days: i.days,
			sleepWindows: e.imported.sleepWindows,
			edits: e.edits
		}) : null;
		return {
			source: l[gs(e)].reviewSource,
			editedDayRows: new Set(g?.rows),
			refusalDetails: g ? ys(g, i.days, (t) => {
				const n = d(i.days, t);
				return !e.scoredDates || void 0 !== n && e.scoredDates.has(n);
			}) : /* @__PURE__ */ new Map(),
			editRecomputeUnavailable: m,
			editedNights: p,
			scoredDates: e.scoredDates,
			invalidDates: e.invalidDates,
			dateOf: d,
			table: r(i),
			ggir: r(e.imported),
			savedNights: e.imported.nights,
			recomputed: s,
			provenance: (e) => "nights" === t ? c.find(([t]) => t === e)?.[1] ?? "" : c.map(([e, t]) => `night ${String(e)} ${t}`).join("; "),
			checks: new Map(o.map((e) => [e.key, e]))
		};
	}))).filter((e) => e.table.rows > 0);
	if (0 === p.length) return null;
	const m = i ? i.filter((e) => !e.endsWith("_missing_reason") && !ps.includes(e)) : [];
	for (const s of i ? [] : p) for (const e of s.table.columns) e.endsWith("_missing_reason") || m.includes(e) || m.push(e);
	const g = new Set("nights" === t ? c.ggir_review_night_extension.map((e) => s[e].header) : []), f = ps.map((e) => e + "_missing_reason"), h = i ? i.filter((e) => e.endsWith("_missing_reason") && !f.includes(e)) : [...m.filter((e) => g.has(e) || p.some((e) => e.editRecomputeUnavailable || e.source === l.corrected.reviewSource)).map((e) => e + "_missing_reason"), ...p.some((e) => e.refusalDetails.size > 0) ? [$r] : []], _ = [[
		...m.map(N),
		...ps,
		...h.map(N),
		...f
	].join(",")], w = (e, t) => {
		const n = e.columns.indexOf(r);
		return Number(n < 0 ? NaN : e.values[n]?.[t]);
	};
	for (const { table: l, ggir: c, recomputed: v, provenance: y, checks: b, scoredDates: k, invalidDates: x, dateOf: M, editRecomputeUnavailable: S, editedNights: I, editedDayRows: T, refusalDetails: R, savedNights: A, source: E } of p) {
		const e = A.columns.filter((e) => !Mr.has(e)), n = e.filter((e) => {
			const t = A.columns.indexOf(e), n = /* @__PURE__ */ new Map();
			return A.values[t].some((e, t) => {
				const i = Number(A.values[A.columns.indexOf(s.ggir_night.header)]?.[t]), r = n.has(i) && !Object.is(n.get(i), e);
				return n.set(i, e), r;
			});
		}), i = /* @__PURE__ */ new Set(), r = (e) => Array.from({ length: c.rows }, (e, t) => t).find((t) => !i.has(t) && w(c, t) === w(l, e) && n.every((n) => Object.is(c.values[c.columns.indexOf(n)]?.[t] ?? null, l.values[l.columns.indexOf(n)]?.[e] ?? null))), a = new Set(m.filter((n) => "nights" === t ? Mr.has(n) : !Sr.has(n) && !e.includes(n))), u = (n, i, r, l) => {
			const u = b.get(w(n, i));
			return [
				...m.map((s) => {
					if ("invalid" === r && ("nights" === t ? Mr.has(s) : /sleep|spt|waso|wake|onset|guider/i.test(s) && !e.includes(s))) return "";
					const a = n.columns.indexOf(s);
					return a < 0 ? "" : ms(n.values[a]?.[i]);
				}),
				r,
				u?.status ?? "",
				N((u?.reasons ?? []).join(";")),
				N((u?.diffs ?? []).map((e) => e.column).join(";")),
				N(l),
				...h.map((e) => {
					if ("refusal_detail_missing_reason" === e) return r === E && n === c ? N(R.get(i) ?? "") : "";
					const l = e.slice(0, -15);
					return "invalid" !== r || g.has(l) && l !== s.ggir_nonwear_perc_spt.header ? S && r === E && a.has(l) && ("days" === t ? T.has(i) : I.has(w(n, i))) ? vr : g.has(l) ? null != o(n, l, i) ? "" : ms(d(n, l + "_missing_reason", i) ?? "source_reported_missing") : r === E ? "source_reported_missing" : "not_computed_for_export" : "invalid_night";
				}),
				"",
				u ? "" : "not_computed_for_export",
				u?.reasons.length ? "" : "not_applicable_to_row",
				u?.diffs.length ? "" : "not_applicable_to_row",
				l ? "" : "not_applicable_to_row"
			].join(",");
		};
		for (let t = 0; t < l.rows; t += 1) {
			const e = M(l, t);
			if (k && (!e || !k.has(e))) continue;
			const n = r(t);
			if (null != n && i.add(n), e && x?.has(e)) {
				null != n && _.push(u(c, n, E, "")), _.push(u(l, t, "invalid", ""));
				continue;
			}
			if (!v[t]) {
				_.push(u(l, t, E, ""));
				continue;
			}
			const s = w(l, t);
			null != n && _.push(u(c, n, E, "")), _.push(u(l, t, "recomputed", y(s)));
		}
		for (let t = 0; t < c.rows; t += 1) {
			if (i.has(t)) continue;
			const e = M(c, t);
			(!k || e && k.has(e)) && (_.push(u(c, t, E, "")), e && x?.has(e) && _.push(u(c, t, "invalid", "")));
		}
	}
	return _.length > 1 ? `${_.join("\n")}\n` : null;
}
function ks(e, t) {
	const n = /* @__PURE__ */ new Map();
	for (const i of e) for (const [e, t] of Object.entries(i.part2Reports ?? {})) {
		const r = fs("part2_report", gs(i), e);
		n.set(r, [...n.get(r) ?? [], t]);
	}
	return Object.fromEntries([...n].map(([e, n]) => {
		const i = t?.get(e) ?? [...new Set(n.flatMap((e) => e.columns))], r = [i.map(N).join(",")];
		for (const t of n) for (let e = 0; e < t.rows; e++) r.push(i.map((n) => ms(t.values[t.columns.indexOf(n)]?.[e])).join(","));
		return [e, r.join("\n") + "\n"];
	}));
}
function xs(e, t) {
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
}
const Ms = (e, t) => Xe(e).filter((e) => t?.has(e.nightDate));
async function Ss(e, t, n) {
	if (e.edits.length > 0 && !e.current) return {
		reason: vr,
		detail: ""
	};
	const i = e.current ?? e.imported, r = Q(n);
	try {
		const a = i.tailExpansion ?? e.imported.tailExpansion ?? await ds(e, n);
		if (null === a) throw new Error("The export snapshot did not carry the GGIR milestones this person report reads its tail expansion from.");
		const { ggirVersion: o } = await r.ggirConfigValues(e.configCsv), { profile: l, reports: c } = await r.ggirPersonSummaries({
			ggir_version: o ?? "",
			corrections: e.ggirCorrections ? "corrected" : "stock",
			config_csv: e.configCsv,
			nights: i.nights,
			days: i.days,
			tail_expansion: a,
			data_cleaning_csv: e.dataCleaningCsv ?? null,
			recording_id: String(d(i.nights, s.ggir_id.header, 0) ?? ""),
			invalid_nights: Ms(e.imported, t).map((e) => e.night),
			person_columns: Object.fromEntries(Object.entries(e.personReports ?? {}).flatMap(([e, t]) => t.rows > 0 ? [[e, t.columns]] : []))
		});
		return {
			profile: l,
			reports: c
		};
	} catch (a) {
		return n?.throwIfAborted(), Le("error", "GGIR person summary recompute failed", Pe(a)), {
			reason: "not_computed_for_export",
			detail: "the GGIR engine could not aggregate this recording's person-level report from its night and day rows"
		};
	}
}
async function Is(e, t, n) {
	const i = /* @__PURE__ */ new Map(), r = await Promise.all(e.map(async (e) => {
		const n = Ms(e.imported, e.invalidDates).map((e) => `night ${String(e.night)} Invalid night`);
		return [...(await Promise.all(e.edits.map(async (n) => {
			const i = await Ze(e.imported, e.edits, n.night, t);
			return null == i ? [] : [`night ${String(n.night)} ${i}`];
		}))).flat(), ...n].join("; ");
	}));
	for (const [s, o] of e.entries()) {
		const e = gs(o), t = r[s], n = o.personRecomputed ?? {
			reason: "not_computed_for_export",
			detail: ""
		};
		for (const [r, s] of Object.entries(o.personReports ?? {})) {
			if (0 === s.rows) continue;
			const a = fs("person_summary_review", e, r), o = "reason" in n ? n : n.reports[r] ?? {
				reason: "not_computed_for_export",
				detail: `the core returned no ${r}`
			};
			i.set(a, [...i.get(a) ?? [], {
				table: s,
				source: l[e].reviewSource,
				edit: t,
				recomputed: o
			}]);
		}
	}
	const a = /* @__PURE__ */ new Set([s.ggir_id.header, s.ggir_filename.header]);
	return Object.fromEntries([...i].map(([e, t]) => {
		const i = n?.get(e), r = [...new Set(t.flatMap(({ table: e }) => e.columns))], s = (i ?? t.reduce((e, { recomputed: t }) => "reason" in t ? e : xs(e, t.columns), r)).filter((e) => "refusal_detail_missing_reason" !== e && !e.endsWith("_missing_reason") && !ps.includes(e)), o = ps.map((e) => e + "_missing_reason"), l = i?.filter((e) => e.endsWith("_missing_reason") && !o.includes(e)) ?? ["refusal_detail_missing_reason", ...s.map((e) => e + "_missing_reason")], c = [[
			...s,
			...ps,
			...l,
			...o
		].map(N).join(",")], d = (e, t) => [
			e,
			"",
			"",
			"",
			N(t)
		], u = (e) => [
			"",
			"not_computed_for_export",
			"not_applicable_to_row",
			"not_applicable_to_row",
			e ? "" : "not_applicable_to_row"
		], p = (e, t) => (n) => ms(e.values[e.columns.indexOf(n)]?.[t]), m = (e) => l.map((t) => e.get(t) ?? ""), g = new Map(t.map(({ table: e }) => [e, new Set(e.columns)]));
		for (const { table: n, source: f, edit: h, recomputed: _ } of t) for (let e = 0; e < n.rows; e++) {
			const t = s.map(p(n, e)), i = new Map(s.flatMap((e) => g.get(n).has(e) ? [] : [[e + "_missing_reason", "not_applicable_to_row"]]));
			if (c.push([
				...t,
				...d(f, ""),
				...m(i),
				...u("")
			].join(",")), !h) continue;
			const r = "reason" in _ ? _ : 0 === _.rows ? {
				reason: "no_retained_nights",
				detail: ""
			} : null, o = "reason" in _ ? null : p(_, 0), l = s.map((e, n) => a.has(e) ? t[n] : o?.(e) ?? ""), w = new Map(s.flatMap((e, t) => Nr(l[t]) ? [[e + "_missing_reason", r?.reason ?? "not_applicable_to_row"]] : []));
			r?.detail && w.set($r, N(`ggirPersonSummaries: ${r.detail}`)), c.push([
				...l,
				...d("recomputed", h),
				...m(w),
				...u(h)
			].join(","));
		}
		return [e, c.join("\n") + "\n"];
	}));
}
const Ts = c.ggir_part4_nightsummary_csv, Rs = Ts.map((e) => s[e].header), As = [
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
], Es = [
	"ggir_sleep_duration_in_spt",
	"ggir_waso",
	"ggir_number_of_awakenings",
	"ggir_sleeplatency",
	"ggir_sleepefficiency",
	"ggir_cleaningcode"
];
function Ns(e, t) {
	const n = s[e], i = "number" == typeof t || "boolean" == typeof t || "string" == typeof t ? t : null;
	return "string" == typeof i ? N(i) : Ti(i, { integral: n.ggirIntegral ?? !1 });
}
function Cs(e, t = "legacy-recording", n, i) {
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
	}) : Q(i).validStateFraction(a).then(async (e) => {
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
			})), [r, s] = Ln(n.map((e) => e.timestamps)), [a, o] = Ln(n.map((e) => e.states));
			return Q(t).sleepRegularityIndex(h([
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
async function $s(e, t, n, i = {}) {
	const { signal: r } = i, a = e.participantId ?? e.filename, o = We(n.values(), i.algorithm), l = [];
	for (const [s, v] of n) {
		if (!Hs(s, i.dateRange)) continue;
		const { timestamps: e, algorithmResults: t } = fn(v, o);
		l.push({
			timestamps: e,
			states: t
		});
	}
	const c = await Cs(l, null != e.id ? String(e.id) : e.filename, e.epochLengthSeconds || 60, r), { sri: d, fractionValid: u } = c, p = "stale" === o.status ? "scores_from_another_config" : null, m = p ?? c.sriMissingReason, g = p ?? c.fractionValidMissingReason, f = [];
	for (const s of [...t.keys()].sort()) {
		const e = t.get(s);
		if (!e.isInvalidNight) for (const t of e.sleepMarkers) t.markerType === te.MAIN_SLEEP && null != t.onsetTimestamp && f.push({
			date: s,
			onsetTs: t.onsetTimestamp,
			wakeupTs: t.offsetTimestamp ?? null
		});
	}
	const h = [[
		...Rs,
		...As.map((e) => `${s[e].header}_missing_reason`),
		...Es.map((e) => `${s[e].header}_missing_reason`),
		"SleepRegularityIndex1_missing_reason",
		"SriFractionValid_missing_reason"
	].join(",")], _ = [];
	for (const { date: s, onsetTs: v, wakeupTs: y } of f) {
		let t = {
			tstH: null,
			nAwak: null,
			latency: null,
			efficiency: null,
			missingReason: null == y ? "not_applicable_to_row" : p ?? "no_scored_epochs"
		};
		if (null != y) {
			const { timestamps: i, algorithmResults: a } = await Un(n, s, o, { signal: r });
			if (a && i.length > 0) {
				t.missingReason = null;
				const n = await mn(a, i, v, y, e.epochLengthSeconds || 60, null, r);
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
	const w = await Q(r).ggirManualNightClocks(f.map((e) => e.date), Float64Array.from(f, (e) => e.onsetTs), Float64Array.from(f, (e) => e.wakeupTs ?? NaN), Float64Array.from(_, (e) => e.tstH ?? NaN));
	for (let s = 0; s < f.length; s++) {
		const { onsetTs: t, wakeupTs: n } = f[s], i = w[s], { tstH: r, nAwak: o, latency: l, efficiency: c } = _[s], p = {
			ggir_id: a,
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
			ggir_sleep_duration_in_spt: r,
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
			ggir_sleepefficiency: c,
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
			ggir_sleep_regularity_index1: d,
			ggir_sri_fraction_valid: u,
			ggir_longitudinal_axis: null,
			ggir_guider_corrected: !1
		};
		h.push([
			...Ts.map((e) => Ns(e, p[e])),
			...As.map((e) => {
				const t = Ts.indexOf(e);
				return t >= 0 && null == p[Ts[t]] ? "not_computed_for_export" : "";
			}),
			...Es.map((e) => {
				const t = Ts.indexOf(e);
				return t >= 0 && null == p[Ts[t]] ? _[s].missingReason ?? "" : "";
			}),
			m ?? "",
			g ?? ""
		].join(","));
	}
	return h.join("\n") + "\n";
}
function Os(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
const Ls = "actogram_report.html";
function js(e) {
	const t = e.indexOf("	");
	return -1 === t ? {
		algoKey: e,
		ruleKey: ""
	} : {
		algoKey: e.slice(0, t),
		ruleKey: e.slice(t + 1)
	};
}
function Bs(e) {
	return `${e.algorithm ?? ""}\t${e.detectionRule ?? ""}`;
}
function Ds(e) {
	const t = /* @__PURE__ */ new Map();
	if (1 === e.length) return t.set(e[0], "part4_nightsummary.csv"), t;
	for (const n of e) {
		const { algoKey: e, ruleKey: i } = js(n), r = [e, i].filter(Boolean);
		t.set(n, 0 === r.length ? "part4_nightsummary.csv" : `part4_nightsummary_${r.join("_")}.csv`);
	}
	return t;
}
function Ps(e) {
	const { algoKey: t, ruleKey: n } = js(e), i = (e) => e.replace(/_/g, " ").replace(/\b\w/g, (e) => e.toUpperCase());
	return t || n ? n ? `${i(t)} / ${i(n)}` : i(t) : "Legacy / Unscoped";
}
function Fs(e) {
	return Number.isNaN((/* @__PURE__ */ new Date(1e3 * e)).getTime()) ? String(e) : Ge(e);
}
function Gs(e, t) {
	return e.replace(/[^a-zA-Z0-9_-]/g, "_") || t;
}
function Ws(e, t) {
	const n = [], i = [], r = (e) => {
		for (const t of Vs(e)) n.push(t), i.push(t.byteLength);
	};
	r(`<section class="pid-sec${0 === e ? " initial" : ""}" id="sec-${e}">`), r(`  <h2 class="pid-lbl">${Os(t.pid)}</h2>`);
	for (const [s, a] of t.charts.entries()) r(`  <div class="algo-block" data-algorithm-key="${Os(a.algoKey)}">`), r(`    <div class="algo-lbl">${Os(Ps(a.algoKey))}</div>`), a.stale && r(`    <div class="algo-stale" role="status">${Os(a.stale)}</div>`), r(`    <div class="cwrap" id="c${e}_${s}">`), n.push(a.plot), i.push(...a.plotLengths), r(`      <button type="button" class="svg-btn" data-download-name="${Os(a.svgFilename)}">Download SVG</button>`), r(a.meta), r("    </div>"), r("  </div>");
	return r("</section>"), {
		blob: new Blob(n),
		lengths: i
	};
}
const zs = ["<script>(function(){\nfunction showParticipant(index){\n  var sections=document.querySelectorAll('.pid-sec');\n  var buttons=document.querySelectorAll('.pid-btn');\n  for(var i=0;i<sections.length;i++){\n    sections[i].style.display=i===index?'block':'none';\n  }\n  for(var j=0;j<buttons.length;j++){\n    buttons[j].classList.toggle('active',j===index);\n  }\n}\n\nvar participantButtons=document.querySelectorAll('.pid-btn');\nfor(var i=0;i<participantButtons.length;i++){\n  (function(index){\n    participantButtons[index].addEventListener('click',function(){showParticipant(index);});\n  })(i);\n}\n\nvar downloadButtons=document.querySelectorAll('.svg-btn');\nfor(var j=0;j<downloadButtons.length;j++){\n  downloadButtons[j].addEventListener('click',function(){\n    var wrap=this.closest('.cwrap');\n    var svg=wrap&&wrap.querySelector('svg');\n    if(!svg)return;\n    var source=new XMLSerializer().serializeToString(svg);\n    var blob=new Blob([source],{type:'image/svg+xml;charset=utf-8'});\n    var url=URL.createObjectURL(blob);\n    var anchor=document.createElement('a');\n    anchor.href=url;\n    anchor.download=this.getAttribute('data-download-name')||'activity-plot.svg';\n    anchor.click();\n    setTimeout(function(){URL.revokeObjectURL(url);},0);\n  });\n}\n\nif(participantButtons.length>0)showParticipant(0);\nwindow._showReportParticipant=showParticipant;\n})();<\/script>", "</body>\n</html>"];
function* Vs(e) {
	const t = new TextEncoder();
	for (let n = 0; n < e.length;) {
		let i = Math.min(e.length, n + bi / 4);
		i < e.length && /[\uD800-\uDBFF]/u.test(e[i - 1]) && (i -= 1), yield t.encode(e.slice(n, i)), n = i;
	}
	yield t.encode("\n");
}
function Us(e) {
	return new TextEncoder().encode(e);
}
function Hs(e, t) {
	return !t || e >= t[0] && e <= t[1];
}
async function qs({ csvLinesByAlgo: e, ggirReviews: t }, { signal: n, names: i, layouts: r, only: s }) {
	const a = {}, o = (e) => void 0 === s || s === e;
	for (const [l, c] of i ?? Ds([...e.keys()])) {
		const t = e.get(l);
		t?.length && o(c) && (a[c] = Us(`${t.join("\n")}\n`));
	}
	for (const c of Object.keys(l)) {
		const e = t.filter((e) => gs(e) === c);
		if (0 === e.length) continue;
		const i = (t, n) => void 0 === s || e.some((e) => Object.keys(n(e) ?? {}).some((e) => fs(t, c, e) === s));
		if (i("part2_report", (e) => e.part2Reports)) for (const [t, n] of Object.entries(ks(e, r))) o(t) && (a[t] = Us(n));
		for (const [t, s] of [["nights", "part4_night_review"], ["days", "part5_day_review"]]) {
			const i = fs(s, c), l = o(i) ? await bs(e, t, n, r?.get(i)) : null;
			l && (a[i] = Us(l));
		}
		if (i("person_summary_review", (e) => e.personReports)) for (const [t, s] of Object.entries(await Is(e, n, r))) o(t) && (a[t] = Us(s));
	}
	return a;
}
async function Js(e, t, n) {
	n?.throwIfAborted();
	const i = function(e, t) {
		const { signal: n } = t, { username: i, dateRange: r, snapshot: s } = e, a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), c = [];
		return {
			addFiles: async (e) => {
				const d = Do(s, Ao.ggirReport, e.map((e) => e.id)), u = await Promise.all(e.map((e) => bl(s, e.id, i, n)));
				for (const [i, s] of e.entries()) {
					const e = d.files.find((e) => e.id === s.id);
					if (!e) throw new Error("GGIR file is outside the export snapshot");
					if (n?.throwIfAborted(), !e.id) continue;
					const { bundle: p, sets: m, markersByAlgo: g, invalidDates: f } = u[i], h = Wo(d, e.id), _ = new Map([...g].filter(([e]) => Hs(e, r))), w = /* @__PURE__ */ new Map();
					for (const [t, n] of _) for (const e of n) {
						const n = Bs(e);
						let i = w.get(n);
						i || (i = /* @__PURE__ */ new Map(), w.set(n, i)), i.set(t, e);
					}
					const v = /* @__PURE__ */ new Set();
					for (const [t, n] of _) for (const e of n) Y(e) && v.add(t);
					if (p) for (const t of m) c.push({
						...t,
						...r ? { scoredDates: new Set(e.availableDates.filter((e) => Hs(e, r))) } : {},
						invalidDates: f
					});
					const y = [...v].sort(), b = y[0], k = y[y.length - 1], x = [], M = [];
					for (const n of t.charts ? [...h.keys()].sort() : []) if (Hs(n, r) && (null == b || null == k || n >= b && n <= k)) {
						const e = h.get(n), t = he({
							timestamps: e.timestamps,
							ggirTimestamps: e.ggirTimestamps
						}), i = t.timestamps, r = new Float64Array(t.ggir ? e.ggirEnmo ?? /* @__PURE__ */ new ArrayBuffer(0) : e.axisY);
						for (let n = 0; n < i.length; n++) x.push(i[n]), M.push(r[n]);
					}
					const S = [];
					for (const [t, i] of w) {
						const s = js(t).algoKey, l = p ? "" : await $s(e, i, h, {
							...s ? { algorithm: s } : {},
							...r ? { dateRange: r } : {},
							signal: n
						}), c = p ? [] : l.replace(/\n$/u, "").split("\n");
						if (c.length > 0) {
							const e = a.get(t) ?? [];
							a.set(t, e), o.has(t) ? e.push(...c.slice(1)) : (e.push(...c), o.add(t));
						}
						const d = [], u = [];
						for (const e of i.values()) {
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
						const { algoKey: m, ruleKey: g } = js(t), f = [m, g].filter(Boolean).join("_"), _ = We(h.values(), s || null);
						S.push([f, {
							p: d,
							n: u,
							..."stale" === _.status ? { stale: _.reason } : {}
						}]);
					}
					0 === w.size && S.push(["", {
						p: [],
						n: []
					}]), x.length > 0 && l.set(String(e.id), {
						pid: e.participantId ?? e.filename,
						ts: x,
						act: M,
						algos: S
					});
				}
			},
			entries: () => qs({
				csvLinesByAlgo: a,
				ggirReviews: c
			}, { signal: n }),
			chartPidData: l,
			csvLinesByAlgo: a,
			ggirReviews: c
		};
	}(e, {
		signal: n,
		charts: !0
	});
	await i.addFiles([t]);
	const r = [...i.chartPidData].map(([t, n]) => function(e, t, n) {
		return {
			key: e,
			pid: t.pid,
			charts: t.algos.map(([i, r]) => {
				const { algoKey: s, ruleKey: a } = js(i), o = Gs([s, a].filter(Boolean).join("_"), "unscoped"), l = `activity-${Gs(e, "recording")}-${o}-${n}.svg`, c = function(e) {
					if (0 === e.timestamps.length) return Ai("expected at least one epoch");
					if (e.timestamps.length !== e.activity.length) return Ai("timestamp and activity lengths must match");
					let t = Number.NEGATIVE_INFINITY, n = 0, i = 0;
					const r = e.timestamps.map((r, s) => {
						const a = e.activity[s];
						return !Number.isFinite(r) || r <= t ? Ai("timestamps must be finite and strictly ascending") : (t = r, null != a && Number.isFinite(a) ? (n = Math.min(n, a), i = Math.max(i, a), {
							timestamp: r,
							value: a
						}) : {
							timestamp: r,
							value: null
						});
					}), s = r[0].timestamp, a = r[r.length - 1].timestamp, o = a > s ? a : s + 1;
					if (!Number.isFinite(o) || o <= s) return Ai("single-epoch viewport must have a representable right edge");
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
				}), d = [...Vs(`      <div class="plot-svg">${_i(c)}</div>`)];
				return {
					algoKey: i,
					...r.stale ? { stale: r.stale } : {},
					svgFilename: l,
					plot: new Blob(d),
					plotLengths: d.map((e) => e.byteLength),
					meta: `      <div class="scene-meta">${Os(Fs(c.viewport.min))} → ${Os(Fs(c.viewport.max))} · activity domain ${Ti(c.valueDomain.min)}–${Ti(c.valueDomain.max)}</div>`
				};
			})
		};
	}(t, n, e.generatedAt)), s = new Set(Ds([...i.csvLinesByAlgo.keys()]).values()), a = [];
	for (const [o, l] of Object.entries(await i.entries())) s.has(o) || a.push([o, U(D(new TextDecoder().decode(l)).records[0].text)]);
	return {
		charts: r,
		csvLinesByAlgo: i.csvLinesByAlgo,
		ggirReviews: i.ggirReviews,
		headers: a
	};
}
const Ks = (e, t) => e.start.localeCompare(t.start) || e.kind.localeCompare(t.kind);
function Ys(e, t) {
	const n = [...t].flatMap((t) => {
		const n = Ji(e, t);
		return n?.sleep ? [n.sleep] : [];
	});
	return e.intervals.filter((e) => "sleep" !== e.kind || !n.some((t) => t.startTimestamp === e.startTimestamp && t.endTimestamp === e.endTimestamp));
}
async function Qs(e, t, n, i) {
	if (!t) return null;
	const r = Ys(e, n).map(Pi).sort(Ks);
	if (0 === r.length) return [];
	const s = await i({
		...t,
		intervals: r
	});
	return s ? Ci(s).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)) : null;
}
async function Zs(e, t, n, i) {
	const r = await Xs(e, t, n, i);
	return r ? ta(e.file, r, t.keys()) : null;
}
async function Xs({ file: e, statisticsInput: t }, n, i, r) {
	if (!t) return null;
	const s = e.actiwareIntervals ?? [], a = await Vi(s, r), o = await Wn(s.map((e) => e.startTimestamp), r);
	let l = [...s];
	for (const m of n.keys()) {
		const e = Ui(a, m), t = s.filter((t) => "sleep" === t.kind && ea(s, t, e, () => o(t.startTimestamp) === m)), i = n.get(m), r = i?.sleepMarkers.filter((e) => (e.markerType === te.NAP || e.markerType === te.MAIN_SLEEP && !i.isInvalidNight) && null != e.onsetTimestamp && Number.isFinite(e.onsetTimestamp) && null != e.offsetTimestamp && Number.isFinite(e.offsetTimestamp) && e.offsetTimestamp > e.onsetTimestamp);
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
		intervals: l.map(Pi).sort(Ks)
	});
	if (!c) return null;
	const d = Ci(c), u = [...e.actiwareStatistics ?? [], ...d], p = u.map((e) => e.startTimestamp);
	return {
		calculated: d,
		rowDateOf: await Wn(p, r),
		datedRows: new Set(p),
		intervalNights: a,
		rowNights: await Vi(u.filter((e) => "rest" === e.kind && void 0 === Ki(a, e)), r)
	};
}
const ea = (e, t, n, i) => {
	const r = e.find((e) => "rest" === e.kind && t.startTimestamp >= e.startTimestamp && t.endTimestamp <= e.endTimestamp);
	return r ? n.includes(r) : i();
};
function ta(e, t, n, i = {}) {
	const { intervalNights: r } = t, s = [...n].map((e) => ({
		date: e,
		rests: Ui(r, e)
	})), a = (e) => s.some(({ date: n, rests: s }) => "rest" === e.kind ? ((e) => {
		const n = na(t, e);
		return void 0 !== n ? n : i.rowNights ? Ki(i.rowNights, e) ?? null : null;
	})(e) === n : "sleep" === e.kind && ea(r.intervals, e, s, () => {
		return r = e.startTimestamp, (t.datedRows.has(r) || !i.rowDateOf ? t.rowDateOf(r) : i.rowDateOf(r)) === n;
		var r;
	}));
	return [...(e.actiwareStatistics ?? []).filter((e) => !a(e)), ...t.calculated.filter(a)].sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind));
}
const na = (e, t) => {
	const n = Ki(e.intervalNights, t);
	return void 0 !== n ? n : Ki(e.rowNights, t);
};
function ia(e, t) {
	return (e.actiwareStatistics ?? []).filter((e) => "rest" === e.kind && void 0 === na(t, e));
}
function ra(e, t) {
	return (e.actiwareStatistics ?? []).map((e) => e.startTimestamp).filter((e) => !t.datedRows.has(e));
}
const sa = u.invalid_night_row.markerTypeCell, aa = i("actiware_interval_csv", "local"), oa = [
	"interval_score_count",
	"interval_score_average",
	"interval_score_manual_count",
	"interval_score_manual_average",
	"interval_score_scheduled_count",
	"interval_score_scheduled_average",
	"interval_score_no_response_count",
	"interval_score_late_count",
	"interval_score_late_average"
].map((e) => s[e].header), la = (e, t) => Math.round(e) === Math.round(t);
async function ca(e, t, n, i) {
	const r = i ? Ys(i.nights, i.invalidDates) : (e.actiwareIntervals ?? []).filter((e) => "rest" === e.kind), s = r.filter((e) => "rest" === e.kind), a = r.filter((e) => "rest" === e.kind || "sleep" === e.kind && s.some((t) => e.startTimestamp >= t.startTimestamp && e.endTimestamp <= t.endTimestamp)).sort((e, t) => e.startTimestamp - t.startTimestamp || e.kind.localeCompare(t.kind)), o = e.actiwareStatistics ?? [], l = await Wn([...a.map((e) => e.startTimestamp), ...o.map((e) => e.startTimestamp)], n), c = /* @__PURE__ */ new Set(), d = (t, n) => ({
		filename: e.filename,
		participantId: e.participantId ?? null,
		studyDate: l(t.startTimestamp),
		intervalNumber: null,
		interval: t,
		statistics: n
	}), u = a.map((e) => {
		const t = o.findIndex((t, n) => !c.has(n) && t.kind === e.kind && la(t.startTimestamp, e.startTimestamp) && la(t.endTimestamp, e.endTimestamp));
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
function da(e, t, n) {
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
const ua = new Set(lr.map(([, e]) => e)), pa = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
function ma(e) {
	if (!Number.isFinite(e)) return [
		"",
		"",
		""
	];
	const t = /* @__PURE__ */ new Date(1e3 * Math.round(e)), n = t.toISOString();
	return [
		n.slice(0, 10),
		pa[t.getUTCDay()],
		n.slice(11, 19)
	];
}
const ga = i("actiware_sleep_wake_csv", "local");
async function fa(e, t, n, i) {
	if (0 === e.scores.byteLength) return [];
	const r = e.startTimestamp + (e.scores.byteLength - 1) * e.epochSeconds, s = n ?? new Set(await i.analysisDatesOf(Float64Array.from([...Array.from({ length: Math.ceil((r - e.startTimestamp) / 86400) }, (t, n) => e.startTimestamp + 86400 * n), r])));
	return (await Promise.all([...s].sort().filter((e) => !t || e >= t[0] && e <= t[1]).map(async (t) => {
		const n = await Fn(t, void 0, void 0, i);
		return {
			date: t,
			start: Math.max(0, Math.ceil((n.start - e.startTimestamp) / e.epochSeconds)),
			end: Math.min(e.scores.byteLength, Math.ceil((n.end - e.startTimestamp) / e.epochSeconds))
		};
	}))).filter(({ start: e, end: t }) => t > e);
}
async function ha(e, t, n, i) {
	return t || n ? (await fa(e, t, n, i)).reduce((e, t) => e + t.end - t.start, 0) : e.scores.byteLength;
}
function _a(e, t, n, i) {
	return [
		e.filename,
		e.participantId ?? "",
		e.studyDate,
		ze(t),
		null == n ? "" : String(n),
		e.sleepDetection,
		e.wakeThresholdSelection,
		null == e.wakeThreshold ? "" : String(e.wakeThreshold),
		null == n ? "no_valid_epochs" : "",
		null == e.wakeThreshold ? e.wakeThresholdMissingReason ?? "" : "",
		...i ? [e.participantId ? "" : "source_reported_missing"] : []
	].map((e) => N(e)).join(",");
}
const wa = {
	sleepPeriodsOf: (e, t) => t.sleepMarkers,
	sleepRowMetrics: null
}, va = { forFile: () => Promise.resolve(wa) }, ya = [
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
], xa = {
	nightRecord: { async forFile(e, t, n) {
		const i = e.actiwareFileData.find((e) => e.fileId === t) ?? null, r = i?.actiwareIntervals ?? null;
		if (!r) return va.forFile(e, t, n);
		const s = await Vi(r, n);
		return {
			sleepPeriodsOf: (e, t) => Qi(s, e, t.isInvalidNight),
			sleepRowMetrics: { cells(e) {
				const t = null != e.onsetTimestamp && null != e.offsetTimestamp ? {
					onset: e.onsetTimestamp,
					offset: e.offsetTimestamp
				} : null;
				if (!t) return null;
				const n = r.find((e) => "rest" === e.kind && e.startTimestamp <= t.onset && e.endTimestamp >= t.offset) ?? null, s = (e, t) => t ? i?.actiwareStatistics?.find((n) => n.kind === e && Math.round(n.startTimestamp) === Math.round(t.startTimestamp) && Math.round(n.endTimestamp) === Math.round(t.endTimestamp)) ?? null : null, a = {
					rest: s("rest", n),
					sleep: s("sleep", {
						startTimestamp: t.onset,
						endTimestamp: t.offset
					})
				}, o = {}, l = {};
				for (const [i, r, c, d] of ya) {
					const e = a[r]?.[c] ?? null;
					o[i] = e, l[d] = null == e ? a[r] ? "source_reported_missing" : "not_computed_for_export" : void 0;
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
			entry: cr,
			rows: (e) => e.actiwareIntervalRows?.length ?? 0,
			fileRows: (e) => e.actiwareIntervalRows,
			detail: (e) => `${String(e)} Actiware intervals`,
			columns: aa.length,
			write: {
				kind: "rows",
				chunkField: "actiwareIntervalRows",
				csv: (e) => function(e, t = !1) {
					const n = t ? lr.filter(([e]) => e.startsWith("off_wrist") || /^(?:exposure|avg|max|talt|invalid)_(?:white|red|green|blue)/u.test(e)) : [], i = [[
						...aa,
						...n.map(([, e]) => e + "_missing_reason"),
						...t ? [
							"Participant ID_missing_reason",
							"Origin_missing_reason",
							"Analysis_missing_reason",
							...oa.map((e) => e + "_missing_reason")
						] : []
					].join(",")], r = (e) => s[e].header;
					for (const { filename: s, participantId: a, studyDate: o, intervalNumber: l, interval: c, statistics: d, invalidNight: u } of e) {
						const e = !0 === u && !Number.isFinite(c.startTimestamp), [p, m, g] = ma(c.startTimestamp), [f, h, _] = ma(c.endTimestamp), w = new Map([
							[r("filename"), s],
							[r("participant_id"), a ?? ""],
							[r("study_date"), o],
							[r("interval_kind"), u ? sa : c.kind],
							[r("interval_number"), null == l ? "" : String(l)],
							[r("interval_source"), e ? "" : c.source],
							[r("interval_start_date"), p],
							[r("interval_start_day"), m],
							[r("interval_start_time"), g],
							[r("interval_end_date"), f],
							[r("interval_end_day"), h],
							[r("interval_end_time"), _],
							[r("interval_origin"), e ? "" : c.origin],
							[r("interval_analysis"), c.analysis ?? ""],
							...lr.map(([, e]) => [e, d?.printed?.[e] ?? ""]),
							...oa.map((e) => [e, u ? "" : c.subjectiveScores?.[e] ?? ""])
						]), v = n.map(([e]) => {
							if (u) return "invalid_night";
							if (!d || null != d[e]) return "";
							if (e.startsWith("off_wrist")) return "source_reported_missing";
							const t = /_(white|red|green|blue)(?:_percent)?$/u.exec(e)?.[1];
							return t && null == d["invalid_" + t + "_percent"] ? "source_reported_missing" : "";
						}), y = oa.map((e) => u ? "invalid_night" : c.subjectiveScores?.[e] ? "" : "source_no_subjective_scores");
						i.push([
							...aa.map((e) => ua.has(e) ? w.get(e) ?? "" : N(w.get(e) ?? "")),
							...v,
							...t ? [
								a ? "" : "source_reported_missing",
								e ? "invalid_night" : c.origin ? "" : "source_reported_missing",
								c.analysis ? "" : u ? "invalid_night" : "not_applicable_to_row",
								...y
							] : []
						].join(","));
					}
					return `${i.join("\n")}\n`;
				}(e.actiwareIntervalRows ?? [], !0),
				validatesAgainstOwnRows: !0
			}
		}, {
			entry: dr,
			rows: (e) => e.actiwareSleepWakeRows ?? 0,
			fileRows: (e) => e.actiwareSleepWakeRows,
			detail: (e) => `${String(e)} Actiware Sleep/Wake epochs`,
			columns: ga.length,
			write: { kind: "streamed" }
		}],
		async fileStats({ file: e, fileId: t, dateRange: n, scoredDates: i }, r, s) {
			const a = await r.actiwareFileData.get(t);
			return {
				actiwareIntervalRows: a ? (await ca({
					...e,
					...a
				}, n, s)).length : 0,
				actiwareSleepWakeRows: a?.actiwareSleepWake ? await ha(a.actiwareSleepWake, n, new Set(i), s) : 0,
				...!0 === a?.actiwareStatisticsNeedsRecompute ? { actiwareStatisticsStale: !0 } : {}
			};
		},
		preflight: (e, t) => !0 !== e.actiwareStatisticsStale ? null : {
			severity: "blocker",
			title: `${t()}: Actiware statistics need reprocessing`,
			body: "A marker save could not recompute this file's Actiware statistics, so actiware_intervals_export.csv would print values for intervals the scorer has since moved. Make any edit on one of its nights in the Sleep tab (a note is enough): the next save that succeeds recomputes every night. Or deselect the file."
		},
		plannedMissingReasonBytes: (e) => 3 * (e.actiwareSleepWakeRows ?? 0) * (256 + 4 * (e.filename.length + (e.participantId?.length ?? 0))),
		async produceEntries(e, t, n) {
			const i = await async function({ fileIds: e, dateRange: t, username: n, signal: i }, r, s) {
				i?.throwIfAborted();
				const a = r.inputs("actiwareInterval", e), o = a.studySettings[0]?.extraSettings?.analysis_paradigm, l = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), c = [];
				for (const d of l) {
					i?.throwIfAborted();
					const e = a.actiwareFileData.find((e) => e.fileId === d.id), l = r.scoredMarkers(a, d.id, n), u = [...l].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort(), p = a.actiwareStatisticsInputs.find((e) => e.fileId === d.id), m = (e) => s.actiwareIntervalStatistics(e), g = Ue(d, o) === Se.rest_intervals ? Vi(e?.actiwareIntervals, s) : null, f = g ? await Qs(await g, p?.input, u, m) : await Zs({
						file: e ?? {},
						statisticsInput: p?.input
					}, l, m, s);
					i?.throwIfAborted();
					const h = await ca({
						...d,
						...e,
						actiwareStatistics: f ?? []
					}, t, s, g ? {
						invalidDates: u,
						nights: await g
					} : void 0), _ = new Set(l.keys()), w = new Set(u.filter((e) => !t || e >= t[0] && e <= t[1]));
					c.push(...da(h.filter((e) => _.has(e.studyDate)), w, d));
				}
				return c;
			}(e, t, n), r = async function* ({ fileIds: e, dateRange: t, username: n, signal: i }, r, s) {
				i?.throwIfAborted();
				const a = r.inputs("actiwareSleepWake", e), o = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename)), l = o.map((e) => a.actiwareFileData.find((t) => t.fileId === e.id)), c = function(e, t = !1) {
					const n = [[
						...ga,
						"Sleep/Wake_missing_reason",
						"Wake Threshold_missing_reason",
						...t ? ["Participant ID_missing_reason"] : []
					].join(",")];
					for (const i of e) n.push(_a(i, i.epochTimestamp, i.sleepWake, t));
					return `${n.join("\n")}\n`;
				}([], !0);
				let d = [], u = 0, p = 0;
				const m = () => {
					i?.throwIfAborted();
					const e = function(...e) {
						const t = Pr(...e), n = [];
						for (;;) {
							const e = t.next();
							if (e.done) return {
								...e.value,
								reasons: n
							};
							n.push(e.value);
						}
					}(c + d.join("\n") + "\n", dr, !0, { rowOffset: u }), t = u ? e.csv.slice(e.csv.indexOf("\n") + 1) : e.csv, n = {
						bytes: new TextEncoder().encode(t),
						rows: d.length,
						reasonRows: e.reasons.length,
						reasons: new TextEncoder().encode(jr(e.reasons, !1))
					};
					return u += d.length, d = [], p = 0, n;
				};
				for (const [g, f] of o.entries()) {
					i?.throwIfAborted();
					const e = l[g]?.actiwareSleepWake;
					if (!e) continue;
					const o = l[g]?.actiwareWakeThreshold, c = null != o && Number.isFinite(o) ? o : null, u = new Int8Array(e.scores), h = await fa(e, t, new Set(r.scoredMarkers(a, f.id, n).keys()), s);
					i?.throwIfAborted();
					for (const { date: t, start: n, end: i } of h) {
						const r = {
							filename: f.filename,
							participantId: f.participantId ?? null,
							studyDate: t,
							sleepDetection: de(e.params, "sleep_detection"),
							wakeThresholdSelection: de(e.params, "wake_threshold_selection"),
							wakeThreshold: c,
							...null === c ? { wakeThresholdMissingReason: "not_computed_for_export" } : {}
						};
						for (let t = n; t < i; t += 1) {
							const n = u[t], i = _a(r, e.startTimestamp + t * e.epochSeconds, 0 === n || 1 === n ? n : null, !0);
							if (i.length > 65536) throw new Error("Actiware CSV record exceeds the export buffer limit. Shorten recording identity fields before exporting.");
							d.push(i), p += i.length, (512 === d.length || p >= 32768) && (yield m());
						}
					}
				}
				d.length && (yield m()), i?.throwIfAborted();
			}(e, t, n), s = await r.next();
			let a = s.done ? 0 : s.value.rows;
			const o = async function* () {
				if (!s.done) {
					yield s.value;
					for await (const e of r) a += e.rows, yield e;
				}
			}();
			return {
				artifacts: {
					actiwareIntervalRows: i,
					actiwareSleepWakeRows: a
				},
				streams: { [dr]: o },
				receipt: () => ({ actiwareSleepWakeRows: a })
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
}, Ma = {
	sleep_periods: va,
	rest_intervals: xa.nightRecord
}, Sa = [xa.sourceAnalysis], Ia = Sa.flatMap((e) => e.artifacts), Ta = xa.modules, Ra = [
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
], Aa = [
	"temperature",
	"lux",
	"redLight",
	"greenLight",
	"blueLight"
];
function Ea(e) {
	return "string" == typeof e ? e : null;
}
function Na(e) {
	return "number" == typeof e ? e : null;
}
function Ca(e, n) {
	const i = function(e, t) {
		switch (e.formatter) {
			case "verbatim_string": return function(e) {
				return e ? N(e) : "";
			}(Ea(t));
			case "display_label": {
				const n = Ea(t);
				return n ? function(e) {
					return e ? N(e) : "";
				}(e.labelEnum ? a(e.labelEnum, n) : n) : "";
			}
			case "core_printed_text":
			case "date_iso": return function(e) {
				return e ?? "";
			}(Ea(t));
			case "integer": return function(e) {
				return null == e ? "" : String(Math.trunc(e));
			}(Na(t));
			case "fixed2": return function(e) {
				return null == e ? "" : e.toFixed(2);
			}(Na(t));
			case "python_scalar_str": return function(e) {
				return null == e ? "" : String(e);
			}("boolean" == typeof t || "object" == typeof t ? null : t);
			case "python_float_repr": return function(e) {
				if (null == e) return "";
				if (!Number.isFinite(e)) return String(e);
				const t = String(e);
				return t.includes(".") || t.includes("e") ? t : `${t}.0`;
			}(Na(t));
			case "python_bool": return function(e) {
				return null == e ? "" : e ? "True" : "False";
			}("boolean" == typeof t ? t : null);
			case "clock_at_marker_step": return function(e) {
				return null == e?.timestamp ? "" : (t = e.timestamp, n = e.stepSeconds, null !== t && Number.isFinite(t) ? function(e) {
					return e % 60 == 0;
				}(n) ? Ee(t) : Ge(t).slice(11) : "--:--");
				var t, n;
			}("object" == typeof t ? t : null);
			case "datetime_seconds": return function(e) {
				if (null == e) return "";
				const t = /* @__PURE__ */ new Date(1e3 * e);
				return `${String(t.getUTCFullYear())}-${Ri(t.getUTCMonth() + 1)}-${Ri(t.getUTCDate())} ${Ri(t.getUTCHours())}:${Ri(t.getUTCMinutes())}:${Ri(t.getUTCSeconds())}`;
			}(Na(t));
			case "ggir_value": return Ti("object" == typeof t ? null : t, { integral: e.ggirIntegral ?? !1 });
		}
	}(e, n);
	return "" === i ? t[e.sentinel] : i;
}
function $a(e, t) {
	if (!t) return "";
	const { labelEnum: n } = s[e];
	return n ? a(n, t) : t;
}
const Oa = u.invalid_night_row?.markerTypeCell ?? "", La = u.nonwear_row?.markerTypeCell ?? "";
function ja(e) {
	return c[e].filter((e) => "server" !== s[e].plane);
}
function Ba(e) {
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
function Da(e) {
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
async function Pa(e, t, n, i, r, s, a) {
	try {
		return {
			metrics: t ? await gn(e, t, n, i, r, s, a) : await mn(e, n, i, r, s, null, a),
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
async function Fa(e, t, n, i) {
	if (t.some((e) => e.stale)) return {
		sri: null,
		sriMissingReason: "scores_from_another_config"
	};
	const r = new Set(n.filter((t) => t.markerType === te.MAIN_SLEEP && `${t.filename}\0${t.participantId ?? ""}\0${t.algorithm ?? ""}\0${t.detectionRule ?? ""}` === e).map((e) => e.studyDate));
	return r.size < 2 ? {
		sri: null,
		sriMissingReason: "insufficient_pair"
	} : Cs(t.filter((e) => r.has(e.date)), e, t[0]?.epochLengthSeconds, i);
}
function Ga(e, t) {
	return e.filename.localeCompare(t.filename) || e.studyDate.localeCompare(t.studyDate) || (e.periodIndex ?? -1) - (t.periodIndex ?? -1);
}
const Wa = [
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
], za = {
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
}, Va = {
	summary_filename: (e) => e.filename,
	summary_participant_id: (e) => e.participantId,
	summary_algorithm: (e) => $a("algorithm", e.algorithm),
	summary_detection_rule: (e) => $a("detection_rule", e.detectionRule),
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
}, Ua = e;
function Ha(e) {
	return f(e);
}
function qa(e) {
	return JSON.stringify(e, null, 2);
}
const Ja = {
	codebook_column: (e) => e.column,
	codebook_unit: (e) => e.unit,
	codebook_description_column: (e) => e.description
};
function Ka(e = Ua, t = !1) {
	return ro("codebook_csv", e, Ja, void 0, t);
}
const Ya = [
	"study_id",
	"file_id",
	"filename",
	"participant_id",
	"algorithm",
	"detection_rule"
], Qa = [
	["date", "study_date"],
	["tst_min", "total_sleep_time_minutes"],
	["sleep_efficiency", "sleep_efficiency"],
	["waso_min", "waso_minutes"]
];
function Za(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		if (n.markerType !== te.MAIN_SLEEP) continue;
		const e = Ya.map((e) => no(e, n)).join("\0"), i = t.get(e);
		i ? i.push(n) : t.set(e, [n]);
	}
	return t;
}
function* Xa(e, t = !1) {
	const n = Za(e);
	let i = 0;
	const r = [...n.values()].map((e) => {
		const t = [...e].sort((e, t) => e.studyDate.localeCompare(t.studyDate));
		return t.length > i && (i = t.length), t;
	}), a = Ya.map((e) => s[e].header);
	for (let s = 1; s <= i; s++) for (const [e] of Qa) a.push(`night${String(s)}_${e}`);
	const o = a;
	yield t ? [...a, ...o.map((e) => e + "_missing_reason")].join(",") : a.join(",");
	for (const s of r) {
		const e = s[0], n = Ya.map((t) => no(t, e)), r = Ya.map((t) => to[t]?.(e) ? "" : io[t] ?? "");
		for (let t = 0; t < i; t++) {
			const e = s[t];
			for (const [t, i] of Qa) {
				const s = e ? no(i, e) : "";
				n.push(s), r.push(s ? "" : e ? "date" === t ? "" : e.derivedMissingReasons?.[i] ?? e.metricMissingReason ?? "" : "not_applicable_to_row");
			}
		}
		yield [...n, ...t ? r : []].join(",");
	}
}
function eo(e, t) {
	return null == e ? null : {
		timestamp: e,
		stepSeconds: t.markerStepSeconds
	};
}
const to = {
	filename: (e) => e.filename,
	file_id: (e) => e.fileId,
	participant_id: (e) => e.participantId,
	study_date: (e) => e.studyDate,
	period_index: (e) => e.periodIndex,
	marker_type: (e) => e.markerType,
	onset_time: (e) => eo(e.onsetTimestamp, e),
	offset_time: (e) => eo(e.offsetTimestamp, e),
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
	sleep_midpoint_time: (e) => eo(e.sleepMidpointTimestamp, e),
	sleep_midpoint_hour: (e) => e.sleepMidpointHour,
	l5_hour: (e) => e.l5Hour,
	m10_hour: (e) => e.m10Hour,
	nap_count: (e) => e.napCount,
	total_nap_minutes: (e) => e.totalNapMinutes,
	valid_wear_minutes: (e) => e.validWearMinutes,
	study_id: (e) => e.studyId,
	dst_transition: (e) => e.dstTransition,
	in_bed_datetime: (e) => e.inBedTimestamp ?? null,
	out_of_bed_datetime: (e) => e.outOfBedTimestamp ?? null
};
function no(e, t) {
	return Ca(s[e], to[e]?.(t) ?? null);
}
const io = {
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
function ro(e, t, n, i, r = !1) {
	const a = i && i.length > 0 ? new Set(i) : null, o = ja(e).filter((e) => null == a || a.has(s[e].header)), l = r ? o.filter((e) => io[e]) : [], c = [[...o.map((e) => s[e].header), ...l.map((e) => s[e].header + "_missing_reason")].join(",")];
	for (const d of t) c.push([...o.map((e) => Ca(s[e], n[e]?.(d) ?? null)), ...l.map((e) => {
		const t = n[e]?.(d);
		return null == t || "" === t ? io[e] ?? "" : "";
	})].join(","));
	return c.join("\n");
}
function so(e, t, n = !1) {
	const i = ro("sleep_csv", e, to, t, n), r = t?.length ? new Set(t) : null, a = [
		"onset_time",
		"offset_time",
		"onset_datetime",
		"offset_datetime"
	], o = ["in_bed_datetime", "out_of_bed_datetime"], l = [
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
	], c = [
		...a,
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
		...o,
		...l
	].filter((t) => (!r || r.has(s[t].header)) && e.some((e) => [...a, ...o].includes(t) && null == to[t]?.(e) || e.sensorMissingReasons?.[t] || e.derivedMissingReasons?.[t] || "sleep_midpoint_time" === t && e.derivedMissingReasons?.sleep_midpoint_hour || l.includes(t) && e.metricMissingReason));
	return 0 === c.length ? i : D(i).records.map((t, n) => {
		if (0 === n) return t.text + "," + c.map((e) => `${s[e].header}_missing_reason`).join(",");
		const i = e[n - 1];
		return t.text + "," + c.map((e) => i.markerType === La ? "manual_nonwear_period" : i.markerType === Oa ? "invalid_night" : a.includes(e) ? null == to[e]?.(i) ? "source_reported_missing" : "" : o.includes(e) ? null == to[e]?.(i) ? "not_applicable_to_row" : "" : i.sensorMissingReasons?.[e] ?? i.derivedMissingReasons?.[e] ?? ("sleep_midpoint_time" === e ? i.derivedMissingReasons?.sleep_midpoint_hour : void 0) ?? (l.includes(e) ? i.metricMissingReason : void 0) ?? "").join(",");
	}).join("\n");
}
ja("sleep_csv").map((e) => s[e].header);
const ao = bi, oo = new Uint8Array([3, 0]);
function lo(e, t) {
	if (!e.byteLength) return /* @__PURE__ */ new Uint8Array();
	const n = [], i = new Qt(t?.byteLength ? {
		level: 1,
		dictionary: t
	} : { level: 1 }, (e) => {
		n.push(e);
	});
	i.push(e, !1), i.flush(!1);
	const r = i.s.r ?? 0;
	if (!Number.isInteger(r) || r < 0 || r > 2047) throw new Error("ZIP compression state is unreadable.");
	const s = (7 & r) > 5 ? 2 : 1, a = new Uint8Array(s + 4);
	return a[0] = r >> 3, a[s + 2] = 255, a[s + 3] = 255, n.push(a), Fe(n);
}
const co = (() => {
	const e = /* @__PURE__ */ new Int32Array(256);
	for (let t = 0; t < 256; t += 1) {
		let n = t;
		for (let e = 0; e < 8; e += 1) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
		e[t] = n;
	}
	return e;
})();
function uo(e) {
	let t = -1;
	for (const n of e) t = co[255 & (t ^ n)] ^ t >>> 8;
	return ~t >>> 0;
}
function po(e, t) {
	let n = 2147483648, i = 0, r = t;
	for (; !(e & n) || (i ^= r, e & n - 1);) n >>>= 1, r = 1 & r ? r >>> 1 ^ 3988292384 : r >>> 1;
	return i >>> 0;
}
const mo = (() => {
	const e = [1 << 30];
	for (let t = 1; t < 32; t += 1) e.push(po(e[t - 1], e[t - 1]));
	return e;
})();
async function go(e) {
	if (!navigator.storage?.getDirectory) throw new Error("Streaming export requires temporary workspace storage (OPFS).");
	return (await (await navigator.storage.getDirectory()).getDirectoryHandle("local-export-streams", { create: !0 })).getDirectoryHandle(e, { create: !0 });
}
function fo() {
	const e = new y();
	return {
		hashChunk: (t) => {
			e.update(t);
		},
		hexDigest: () => Promise.resolve(k(e.finalize()))
	};
}
var ho = class extends rn {
	flag = 3;
	constructor(e) {
		super(e), this.compression = 8;
	}
	process() {}
	emit(e) {
		this.ondata(null, e, !1);
	}
	finish(e, t) {
		this.crc = e, this.size = t, this.ondata(null, oo, !0);
	}
};
async function _o(e) {
	const t = e.deflate ?? {
		lanes: 1,
		block: (e, t) => Promise.resolve(function(e, t) {
			return {
				bytes: lo(e, t),
				crc: uo(e)
			};
		}(e, t))
	}, n = await go(e.scratchId), i = await n.getFileHandle(Lr, { create: !0 }), r = await n.getFileHandle("bundle.zip", { create: !0 }), s = new CompressionStream("gzip"), a = s.readable.pipeTo(await i.createWritable());
	a.catch(() => {});
	const o = s.writable.getWriter(), l = await r.createWritable();
	let c = [], d = 0, u = 0, p = e.artifacts.importRefusalReasons?.length ?? 0;
	const m = [], g = new sn((e, t) => {
		if (e) throw e;
		c.push(t), d += t.byteLength;
	}), f = async (e = 0, t) => {
		if (u = Math.max(u, e + d), !(void 0 !== t && d + t < 262144)) {
			if (1 === c.length) await l.write(c[0]);
			else if (c.length > 1) {
				const e = new Uint8Array(d);
				let t = 0;
				for (const n of c) e.set(n, t), t += n.byteLength;
				await l.write(e);
			}
			c = [], d = 0;
		}
	}, h = /* @__PURE__ */ new Set();
	let _ = 0;
	const w = async (n, i) => {
		if (h.has(n)) throw new Error(`Duplicate export entry: ${n}`);
		h.add(n);
		const r = new ho(n), s = (e.hash ?? fo)();
		let a = 0;
		g.add(r);
		const { blockBytes: o, inFlight: l } = function(e) {
			const t = Math.min(2 * e + 1, Math.floor(24)), n = Math.floor(1572864 / t) - 32768;
			return {
				blockBytes: n - n % 4096,
				inFlight: t - 1
			};
		}(t.lanes), c = [], d = [];
		let p = 0, w = new Uint8Array(o), v = 0, y = /* @__PURE__ */ new Uint8Array(0), b = 0;
		const k = () => b + v + y.byteLength + c.length * (o + 32768), x = async () => {
			const e = await c.shift();
			p = function(e, t, n) {
				let i = 2147483648;
				for (let r = n, s = 3; r; r = Math.floor(r / 2), s += 1) r % 2 && (i = po(mo[31 & s], i));
				return (po(i, e) ^ t) >>> 0;
			}(p, e.crc, d.shift()), r.emit(e.bytes), await f(k(), o + 1024);
		}, M = async () => {
			const e = w.subarray(0, v), n = e.slice(-32768);
			for (c.push(t.block(e, y)), d.push(e.byteLength), y = n, w = new Uint8Array(o), v = 0; c.length > l;) await x();
		};
		try {
			for await (const t of i) {
				b = t.byteLength;
				for (let n = 0; n < t.byteLength; n += ao) {
					e.signal?.throwIfAborted();
					const i = t.subarray(n, n + ao), r = s.hashChunk(i, e.signal);
					r && await r, a += i.byteLength;
					for (let e = 0; e < i.byteLength;) {
						const t = Math.min(i.byteLength - e, o - v);
						w.set(i.subarray(e, e + t), v), v += t, e += t, v === o && await M();
					}
					u = Math.max(u, k());
				}
			}
			for (b = 0, v && await M(); c.length;) await x();
		} finally {
			for (const e of c) e.catch(() => {});
		}
		r.finish(p, a), await f(), m.push({
			name: n,
			contentHash: await s.hexDigest(e.signal),
			byteLength: a
		}), e.progress?.(m.length, _, Ii);
	};
	try {
		await o.write(new TextEncoder().encode(jr(e.artifacts.importRefusalReasons ?? [])));
		const t = [...Tl({
			columns: e.options.selectedColumns?.length ?? 0,
			...e.options,
			artifacts: e.artifacts
		}).map((e) => ({
			...e,
			chunks: void 0
		})), ...[...e.extraEntries ?? []].map((e) => ({
			name: e.name,
			write: () => /* @__PURE__ */ new Uint8Array(),
			batches: void 0,
			chunks: e.chunks
		}))];
		_ = t.filter((e) => e.write).length + 2, e.progress?.(0, _, Ii);
		for (const i of t) if (i.write) try {
			const t = Ia.find((e) => e.entry === i.name)?.write;
			"streamed" === t?.kind ? await w(i.name, async function* () {
				for await (const t of e.entryStreams[i.name]) e.signal?.throwIfAborted(), p += t.reasonRows, u = Math.max(u, t.bytes.byteLength + t.reasons.byteLength), await o.write(t.reasons), yield t.bytes;
			}()) : i.name.endsWith(".csv") ? await w(i.name, async function* () {
				let n = 0, r = !1, s = !1;
				const a = "rows" === t?.kind && t.validatesAgainstOwnRows ? t : void 0, l = a ? function* () {
					const t = a.chunkField, n = (n) => a.csv({
						...e.artifacts,
						[t]: n
					}), i = U(D(n([])).records[0].text);
					for (const r of e.artifacts[t] ?? []) {
						const e = U(D(n([r])).records[1].text);
						yield new Map(i.map((t, n) => [t, e[n] ?? ""]));
					}
				} : void 0;
				for await (const e of i.batches?.() ?? wo(i.chunks ?? [i.write()])) {
					if (e.bytes.byteLength > 4 * ao) throw new Error("CSV batch exceeds the export buffer limit. Select fewer columns or a narrower date range.");
					const t = Pr(e.text ?? new TextDecoder().decode(e.bytes), i.name, !0, {
						fullRowCsv: e.fullRowCsv,
						rowOffset: n,
						...l ? { contextRows: l } : {}
					});
					let a, c = "";
					for (;;) {
						const n = t.next();
						if (n.done) {
							a = n.value;
							break;
						}
						if (c += jr([n.value], !1), p += 1, c.length >= ao / 2) {
							const t = new TextEncoder().encode(c);
							u = Math.max(u, e.bytes.byteLength + t.byteLength), await o.write(t), c = "";
						}
					}
					await o.write(new TextEncoder().encode(c));
					const d = r ? (s ? "" : "\n") + a.csv.slice(a.csv.indexOf("\n") + 1) : a.csv;
					r = !0, n += e.rows ?? 0, s = d.endsWith("\n");
					const m = new TextEncoder().encode(d);
					u = Math.max(u, e.bytes.byteLength + m.byteLength + 2 * c.length), yield m;
				}
			}()) : await w(i.name, i.chunks ?? [i.write()]);
		} catch (v) {
			throw new xi(i.name, v);
		}
		await o.close(), await a, await w(Lr, async function* () {
			const e = (await i.getFile()).stream().pipeThrough(new DecompressionStream("gzip")).getReader();
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
		const n = await async function(e) {
			const t = Object.entries(e.entries).sort(([e], [t]) => e.localeCompare(t)), n = Array.isArray(e.entries) ? [...e.entries].sort((e, t) => e.name.localeCompare(t.name)) : await Promise.all(t.map(async ([e, t]) => ({
				name: e,
				contentHash: await Ha(t),
				byteLength: t.length
			})));
			return {
				schemaVersion: 7,
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
				ggirCorrectionProfiles: e.ggirCorrectionProfiles ?? {},
				ggirCorrectionsNotApplied: e.ggirCorrectionsNotApplied ?? {},
				executionAttestationIds: [...e.executionAttestationIds ?? []].sort(),
				degradations: [...e.degradations ?? []],
				files: n
			};
		}({
			...e.manifest,
			entries: m
		});
		return await w(ki, [new TextEncoder().encode(qa(n))]), g.end(), await f(), e.signal?.throwIfAborted(), await l.close(), {
			blob: await new Response((await r.getFile()).stream()).blob(),
			entries: m,
			peakBufferedBytes: u,
			reasonRows: p
		};
	} catch (y) {
		throw g.terminate(), await Promise.allSettled([
			o.abort(),
			l.abort(),
			a
		]), y;
	}
}
async function* wo(e) {
	const t = new TextDecoder();
	let n, i = "";
	for await (const r of async function* () {
		for await (const t of e) for (let e = 0; e < t.byteLength; e += ao) yield t.subarray(e, e + ao);
		yield null;
	}()) {
		const e = null === r;
		i += e ? t.decode() : t.decode(r, { stream: !0 });
		const s = D(i, e);
		if (e && s.unterminatedQuotedField) throw new Error("Unterminated export CSV cell.");
		const a = s.remainder ?? "";
		if (a.length > ao || s.records.some((e) => e.text.length > ao)) throw new Error("CSV record exceeds the export buffer limit. Select fewer columns or a narrower date range.");
		if (s.records.length) {
			const e = void 0 === n;
			n ??= s.records[0].text + "\n";
			const t = (e ? "" : n) + i.slice(0, i.length - a.length);
			yield {
				bytes: new TextEncoder().encode(t),
				text: t,
				rows: s.records.length - (e ? 1 : 0)
			};
		}
		i = a;
	}
}
const vo = [
	"id",
	"filename",
	"participantId",
	"availableDates",
	"epochLengthSeconds",
	"ggirBundleRevision"
], yo = [
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
], bo = {
	dayFields: ["actiwareSleepWakeInvalid", "actiwareActivityInvalid"],
	sleep: { actiwareFileData: [
		"fileId",
		"actiwareIntervals",
		"actiwareStatistics"
	] },
	producers: {
		actiwareInterval: {
			files: [...(Co = {
				fileIdentity: vo,
				markerFields: yo
			}).fileIdentity, ...["sourceType", "sourceProfileId"]],
			markers: Co.markerFields,
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
			files: Co.fileIdentity,
			markers: Co.markerFields,
			actiwareFileData: [
				"fileId",
				"actiwareSleepWake",
				"actiwareWakeThreshold"
			]
		}
	}
}, ko = [
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
	...bo.dayFields
], xo = [
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
], Mo = ["fileId", ...m], So = {
	files: [
		...vo,
		"ggirTimezone",
		"recording",
		"ggirClockSteps",
		"sourceType",
		"sourceProfileId",
		"navigationFacts"
	],
	markers: yo,
	activityDays: ko,
	studySettings: ["key", "extraSettings"],
	ggirResultsBundles: xo,
	...bo.sleep
}, Io = {
	files: [...vo, "ggirClockSteps"],
	markers: yo,
	activityDays: ko,
	ggirResultsBundles: xo,
	ggirResultsBlobs: Mo,
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
}, To = {
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
		He
	]
}, Ro = {
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
}, Ao = {
	sleep: So,
	nonwear: So,
	summary: So,
	wide: So,
	circadian: {
		files: vo,
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
	ggirReport: Io,
	event: {
		files: [
			"id",
			"filename",
			"participantId",
			"eventMarkerInstants",
			"recording"
		],
		markers: yo,
		activityDays: [
			"fileId",
			"date",
			"eventMarkerTimestamps"
		]
	},
	...bo.producers,
	codebook: {},
	manifest: To,
	audit: Ro,
	physicalActivity: {
		files: [
			...vo,
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
		markers: yo,
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
}, Eo = /* @__PURE__ */ new WeakMap(), No = /* @__PURE__ */ new WeakMap();
var Co;
function $o(e, t, n, i) {
	for (let r = 0; r < n.byteLength;) {
		const s = n.subarray(r, r + bi), a = e[t](s, { at: i + r });
		if (!Number.isInteger(a) || a <= 0 || a > s.byteLength) throw new Error("Export temporary storage could not complete binary I/O.");
		r += a;
	}
}
function Oo(e) {
	if (!e || "object" != typeof e) return e;
	const t = No.get(e);
	if (t) {
		if (t.length > 268435456) throw new Error("One export input exceeds 256 MiB. Select a shorter recording before exporting.");
		const e = new Uint8Array(t.length);
		return $o(t.store, "read", e, t.at), t.restore(e.buffer);
	}
	return Array.isArray(e) ? e.map(Oo) : Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Oo(t)])) : structuredClone(e);
}
function Lo(e) {
	return !e || "object" != typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || (Object.values(e).forEach(Lo), Object.freeze(e)), e;
}
var jo = class extends Error {};
function Bo(e, t, n) {
	const i = (e) => {
		if ("string" == typeof e && "toJSON" !== e && !t.includes(e)) throw new jo(n + e);
	};
	return new Proxy(Object.freeze(e), {
		get: (e, t, n) => (i(t), Reflect.get(e, t, n)),
		has: (e, t) => (i(t), Reflect.has(e, t)),
		getOwnPropertyDescriptor: (e, t) => (i(t), Reflect.getOwnPropertyDescriptor(e, t))
	});
}
function Do(e, t, n = []) {
	const i = Eo.get(e);
	if (!i) throw new jo("Export requires a captured input snapshot");
	const r = Object.entries(Ao).find(([, e]) => e === t)?.[0];
	if (!r) throw new jo("Export producer has no registered input declaration");
	const s = {};
	for (const [a, o] of Object.entries(t)) {
		const e = i[a].filter((e) => !n.length || "studySettings" === a || n.includes("files" === a ? e.id : e.fileId)).map((e) => {
			const t = e, n = {};
			for (const i of o.filter((e) => e in t)) Object.defineProperty(n, i, {
				enumerable: !0,
				get: () => Lo(Oo(t[i]))
			});
			return Bo(n, o, `${r}: undeclared field ${a}.`);
		});
		Object.assign(s, { [a]: Object.freeze(e) });
	}
	return Bo(s, Object.keys(t), `${r}: undeclared table `);
}
function Po(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	for (const r of e.markers) {
		if (r.fileId !== t || r.username !== n) continue;
		const e = Me(r), s = i.get(r.date) ?? [];
		s.push(e), i.set(r.date, s);
	}
	return i;
}
function Fo(e, t, n) {
	return new Map([...Po(e, t, n)].sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => [e, Ie(t)]));
}
function Go(e, t, n) {
	return Be([...Po(e, t, n).values()].flat().filter(Y));
}
function Wo(e, t) {
	return new Map(e.activityDays.filter((e) => e.fileId === t).map((e) => [e.date, e]));
}
function zo(e) {
	return {
		inputs: (t, n) => Do(e, Ao[t], n),
		scoredMarkers: Go
	};
}
const Vo = i("event_marker_csv", "local");
function Uo(e, t) {
	return e.eventMarkerInstants ?? [...t.values()].flatMap((e) => e.eventMarkerTimestamps ? Array.from(new Float64Array(e.eventMarkerTimestamps)) : []).filter(Number.isFinite).sort((e, t) => e - t);
}
async function Ho(e, t, n, i, r) {
	const s = [], a = Do(n, Ao.event, e), o = [...a.files].filter((t) => null != t.id && e.includes(t.id)).sort((e, t) => e.filename.localeCompare(t.filename));
	for (const l of o) {
		r?.throwIfAborted();
		const e = Uo(l, Wo(a, l.id)), n = l.recording?.gmtOffsetMinutes ?? null, o = await Wn(e, Q(r)), c = new Set(Go(a, l.id, i).keys());
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
const qo = (e) => e.slice(e.lastIndexOf("/") + 1), Jo = /* @__PURE__ */ new Map();
K.GGIR_CORRECTED_WARM;
const Ko = (e) => `${e.name}:ggir-corrected-values`, Yo = () => "undefined" == typeof navigator ? void 0 : navigator.locks;
async function Qo(e, t, n, i) {
	const r = await async function(e, t, n, i) {
		if (r = (await me(e))?.extraSettings, !0 !== R("ggir_export_corrected_values", r?.ggir_export_corrected_values).value) return null;
		var r;
		const s = /* @__PURE__ */ new Map(), a = await ge(e, t.length ? { onlyFileIds: t } : void 0), o = new Map(a.map((e) => [e.id, e])), l = await e.ggirResultsBundles.where("fileId").anyOf([...o.keys()]).toArray(), c = await Z(e, l.map((e) => e.fileId)), d = l.filter((e) => !e.ggirCorrections), u = [...new Set(d.map((e) => e.configCsv))], p = await Promise.all(u.map((e) => async function(e, t) {
			const n = Jo.get(t);
			if (n) return n;
			const i = await async function(e, t) {
				const { ggirVersion: n } = await e.ggirConfigValues(t), i = await e.rerunGgirResults({
					ggir_version: n ?? "",
					corrections: "corrected",
					config_csv: t,
					sleeplog_csv_index: null,
					sleeplog_rdata_index: null,
					data_cleaning_csv_index: null,
					qwindow_csv_index: null,
					recordings: [],
					original_files: [],
					outputs: []
				}, []);
				return "ok" === i.status ? {
					profile: i.profile,
					revision: i.actours_revision
				} : { notApplied: i.reason ?? `GGIR ${n ?? "(unknown version)"} has no corrected profile` };
			}(e, t);
			return Jo.set(t, i), i;
		}(n, e)));
		i?.throwIfAborted();
		const m = [];
		for (const g of d.sort((e, t) => o.get(e.fileId).filename.localeCompare(o.get(t.fileId).filename))) {
			const e = p[u.indexOf(g.configCsv)];
			if ("notApplied" in e) {
				s.set(g.fileId, e);
				continue;
			}
			const t = o.get(g.fileId), n = JSON.stringify([
				t.ggirBundleRevision ?? null,
				e.revision,
				e.profile
			]);
			s.set(g.fileId, {
				key: n,
				revision: t.ggirBundleRevision
			}), c.get(g.fileId) !== n && m.push({
				fileId: g.fileId,
				key: n,
				revision: t.ggirBundleRevision,
				size: t.sourceSizeBytes ?? 0,
				name: t.filename
			});
		}
		return {
			plans: s,
			misses: m
		};
	}(e, t, Q(n.signal), n.signal);
	if (!r) return null;
	const { plans: s, misses: a } = r;
	if (0 === a.length) return s;
	let o = 0;
	n.onProgress?.(o, a.length);
	const l = ln({
		cores: navigator.hardwareConcurrency,
		deviceMemoryGib: A()
	}), c = await pn(a.map((t) => ({
		name: t.name,
		cost: t.size,
		memoryGib: on(t.size),
		run: async (r, s) => {
			if (i && await async function(e) {
				const t = await Yo()?.query(), n = (t) => t.name === Ko(e);
				return (t?.pending?.some(n) ?? !1) || !1;
			}(e)) return { miss: t };
			try {
				const n = await se(e, t.fileId);
				if (!n) return {
					miss: t,
					notApplied: "the recording was deleted during the export"
				};
				const i = await async function(e, t) {
					if (!e.resultsCsv) return { notApplied: "imported before the app kept GGIR's results/ files; import the same GGIR output folder again to add them (the recording's markers and reviews stay as they are)" };
					if (!e.ms4) return { notApplied: nt };
					const n = [], i = (e) => void 0 === e ? null : (n.push("string" == typeof e ? new TextEncoder().encode(e) : new Uint8Array(e)), n.length - 1), r = e.recordingFile, s = re(r), a = {
						config_csv: e.configCsv,
						recording_id: s,
						filename: r,
						sleeplog_csv_index: i(e.sleeplogCsv),
						sleeplog_rdata_index: i(e.sleeplogRData),
						data_cleaning_csv_index: i(e.dataCleaningCsv),
						qwindow_csv_index: i(e.qwindowCsv),
						part1_index: i(e.part1),
						ms2_index: i(e.ms2),
						ms3_index: i(e.ms3),
						ms4_index: i(e.ms4),
						ms5_index: i(e.ms5),
						original_files: Object.entries(e.resultsCsv).map(([e, t]) => ({
							path: e,
							bytes_index: i(t)
						})),
						table_names: Object.keys(e.resultsCsv).flatMap((e) => {
							const t = e.slice(8);
							return e.startsWith("results/") && (Ce.test(t) || je.test(t)) ? [t] : [];
						})
					}, { milestones: o, reports: l, cleaned_nights_csv: c, tables: d, review: u } = await t.correctGgirRecording(a, n);
					if ("ok" !== o.status) return { notApplied: o.reason ?? "the GGIR engine refused this recording" };
					const p = Object.fromEntries([
						"ms2",
						"ms3",
						"ms4",
						"ms5"
					].flatMap((e) => {
						const t = o.files.find((t) => t.path === `meta/${e}.out/${r}`);
						return t ? [[e, t.bytes.slice().buffer]] : [];
					}));
					if (!p.ms4) return { notApplied: "the GGIR engine returned no corrected Part 4 milestone" };
					if (!l || "ok" !== l.status) return { notApplied: l?.reason ?? "the GGIR engine refused this recording's reports" };
					if (null == c || !u) return { notApplied: "the GGIR engine gave no Part 4 cleaned night summary" };
					const m = {}, g = /* @__PURE__ */ new Map();
					for (const b of [o, l]) {
						for (const { file: e } of b.changes) {
							const t = /^meta\/(ms\d)\.out\//u.exec(e)?.[1] ?? qo(e);
							m[t] = (m[t] ?? 0) + 1;
						}
						for (const e of b.corrections_not_applied) g.set(e.correction, e.reason);
					}
					const f = p.ms2 ?? e.ms2, h = p.ms3 ?? e.ms3, _ = p.ms5 ?? e.ms5, w = (e) => Object.fromEntries(d.filter(({ name: t }) => e.test(t)).map(({ name: e, table: t }) => [e, t])), v = w(Ce), y = w(je);
					return {
						values: {
							...f ? { ms2: f } : {},
							...h ? { ms3: h } : {},
							ms4: p.ms4,
							..._ ? { ms5: _ } : {},
							cleanedNightsCsv: c,
							part2Reports: Ke(v, u),
							personReports: Ke(y, u),
							imported: rt(u)
						},
						ggirCorrections: {
							profile: l.profile || o.profile,
							changedCells: Object.values(m).reduce((e, t) => e + t, 0),
							changedCellsByPart: m,
							...g.size > 0 ? { notApplied: [...g].map(([e, t]) => ({
								correction: e,
								reason: t
							})) } : {}
						}
					};
				}(n, r);
				return await e.transaction("rw", [e.files, e.ggirCorrectedValues], async () => {
					(await e.files.get(t.fileId))?.ggirBundleRevision === t.revision && await e.ggirCorrectedValues.put({
						fileId: t.fileId,
						key: t.key,
						...i
					});
				}).catch((e) => {
					Le("warn", "GGIR corrected values cache write failed", Pe(e));
				}), { miss: t };
			} catch (l) {
				return n.signal?.throwIfAborted(), s.primary || s.cancel(), Le("error", "GGIR corrected values failed", Pe(l)), {
					miss: t,
					notApplied: "the corrected values could not be computed for this recording in this export; export again to retry"
				};
			} finally {
				n.signal?.aborted || n.onProgress?.(++o, a.length);
			}
		}
	})), {
		signal: n.signal,
		createWorker: ne,
		...i ? {
			extraWorkers: Math.floor(l.extraWorkers / 2),
			memoryBudgetGib: l.memoryBudgetGib && l.memoryBudgetGib / 2
		} : l,
		cancelOperation: () => {},
		...n.workerPool
	});
	for (const { miss: d, notApplied: u } of c) void 0 !== u && s.set(d.fileId, { notApplied: u });
	return s;
}
const Zo = E, Xo = J, el = w, tl = {
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
}, nl = Object.fromEntries(Zo.flatMap((e) => e.cutpoint ? [[e.method, e.cutpoint.nativeEpochSeconds]] : []));
async function il(e, t, n) {
	const i = nl[e];
	if (null == i) return null;
	const r = await Q(n).cutpointEpochCompatibility(i, t), s = {
		method: e,
		nativeEpochSeconds: i,
		fileEpochSeconds: t,
		compatible: r.compatible
	};
	if (!r.readable) return {
		...s,
		severity: "warn",
		message: `Unknown or invalid file epoch length; ${String(i)}s-calibrated cut-point counts cannot be verified.`
	};
	if (r.compatible) return {
		...s,
		severity: "ok",
		message: null
	};
	const a = (r.countsPerMinuteScale ?? NaN).toFixed(2);
	return {
		...s,
		severity: "warn",
		message: `Cut-point calibrated at ${String(i)}s epochs but this file uses ${String(t)}s epochs. Counts are linearly rescaled (x${a} to counts/min), which is not equivalent to native-epoch calibration; interpret intensity minutes with caution.`
	};
}
function rl(e, t) {
	const n = Zo.find((t) => t.method === e), i = t ? I[t] : void 0;
	if (n && i && !g[n.requiredSignal].some((e) => i.includes(e))) {
		const t = al(e);
		return `${t.label} needs ${t.signalLabel.toLowerCase()}, which this file's source does not carry.`;
	}
	const r = n?.cutpoint?.countScale, s = t ? q[t] : void 0;
	return r && s && "source_declared" !== s && s !== r ? `${al(e).label} is calibrated on ${v[r]}; this file carries ${v[s]}, which are on a different scale.` : null;
}
function sl(e, t) {
	return 0 === t.length || t.some((t) => null === rl(e, t));
}
function al(e) {
	return tl[e];
}
function ol(e, t, n) {
	const i = al(e);
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
const ll = Zo.filter(function(e) {
	return null != e.cutpoint;
}).map((e) => function(e) {
	return {
		...ol(e.method, e.cutpoint.ruleLabel, e.cutpoint.unavailableAction),
		axis: e.cutpoint.axis,
		sedentaryMax: e.cutpoint.sedentaryMax,
		lightMin: e.cutpoint.lightMin,
		moderateMin: e.cutpoint.moderateMin,
		vigorousMin: e.cutpoint.vigorousMin,
		cutpointBands: e.cutpoint.cutpointBands,
		cutpointScaleMax: e.cutpoint.cutpointScaleMax
	};
}(e)), cl = [
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
function dl(e) {
	const t = e ?? "", n = /^[=+\-@\t\r]/.test(t) ? `'${t}` : t;
	return /[",\r\n]/.test(n) ? `"${n.replace(/"/g, "\"\"")}"` : n;
}
function ul(e) {
	return null != e && Number.isFinite(e) ? e.toFixed(2) : "";
}
function pl(e) {
	const t = [];
	return "ready" !== e.status && t.push(`missing ${e.requiredSignalContract}`), "ready" === e.status && null != e.wakeWearMinutes && e.wakeWearMinutes <= 0 && t.push("zero wake-wear denominator"), "ready" === e.status && null != e.wakeWearMinutes && Number.isFinite(e.maskMinimumWakeWearMinutes) && e.maskMinimumWakeWearMinutes > 0 && e.wakeWearMinutes < e.maskMinimumWakeWearMinutes && t.push(`wake-wear below ${String(e.maskMinimumWakeWearMinutes)} min minimum`), (e.maskOverlapEpochs ?? 0) > 0 && t.push(`${String(e.maskOverlapEpochs)} overlapping mask epoch${1 === e.maskOverlapEpochs ? "" : "s"}`), e.epochMismatch && null != e.nativeEpochSeconds && t.push(`epoch mismatch: cut-point calibrated at ${String(e.nativeEpochSeconds)}s, file epochs ${null == e.epochLengthSeconds ? "unknown" : `${String(e.epochLengthSeconds)}s`}`), t.length > 0 ? {
		status: "review",
		notes: t.join("; ")
	} : {
		status: "clean",
		notes: ""
	};
}
cl.join(","), ll.length;
const ml = "Also export corrected values was off at export";
function gl(e) {
	const t = Object.values(e.ggirCorrectionsNotApplied).filter((e) => e !== ml).length, n = Object.keys(e.ggirCorrectionProfiles);
	if (0 === n.length && 0 === t) return null;
	const i = Object.keys(e.ggirCorrections).length;
	return `Corrected values: ${n.length > 0 ? `profile ${n.join(", ")}; ` : ""}${String(i)} ${1 === i ? "recording" : "recordings"} corrected, ${String(t)} left out (see manifest.json).`;
}
function fl(e) {
	const t = Do(e, Ao.manifest), n = new Map(t.ggirResultsBundles.map((e) => [e.fileId, e.recordingFile]));
	return t.ggirCorrectedValues.flatMap((e) => void 0 !== e.notApplied && "Also export corrected values was off at export" !== e.notApplied && n.has(e.fileId) ? [{
		file: fs("part4_night_review", "corrected"),
		row: 0,
		key: n.get(e.fileId),
		column: `corrected values: ${e.notApplied}`,
		reason: "not_computed_for_export"
	}] : []);
}
function hl(e) {
	return Do(e, Ao.ggirReport).ggirResultsBundles.flatMap((e) => {
		const t = et(e.imported, e.part2Reports);
		return t ? [{
			file: fs("part4_night_review", "default"),
			row: 0,
			key: e.recordingFile,
			column: t,
			reason: "source_reported_missing"
		}] : [];
	});
}
Ta.sleep;
async function _l(e, t = ee(), n = {}) {
	const i = await Al(null, "computing the corrected GGIR values", () => async function(e, t, n = {}) {
		const i = Yo();
		return i?.request ? i.request(Ko(e), n.signal ? { signal: n.signal } : {}, () => Qo(e, t, n, !1)) : Qo(e, t, n, !1);
	}(t, e, {
		signal: n.signal,
		onProgress: (e, t) => n.progress?.(e, t, "Computing corrected values"),
		...n.workerPool ? { workerPool: n.workerPool } : {}
	})), { username: r } = n, s = void 0 === r ? void 0 : await Al(null, "updating the GGIR night reviews", () => ns(t, e, r, i, {
		signal: n.signal,
		...n.workerPool ? { workerPool: n.workerPool } : {}
	}));
	return n.progress?.(0, 0, Mi), Al(null, "checking the export inputs", () => async function(e, t = ee(), n = {}) {
		const i = /* @__PURE__ */ new Map();
		for (const g of (n.readPlan ?? Object.keys(Ao)).map((e) => Ao[e])) for (const [e, t] of Object.entries(g)) {
			const n = e;
			i.set(n, /* @__PURE__ */ new Set([...i.get(n) ?? [], ...t]));
		}
		if (!i.size) {
			const e = Object.freeze({ files: Object.freeze([]) });
			return Eo.set(e, {}), e;
		}
		let r = 268435456;
		const s = (e) => {
			if (e instanceof ArrayBuffer ? r -= e.byteLength : "string" == typeof e ? r -= 2 * e.length : e && "object" == typeof e ? Object.values(e).forEach(s) : r -= 8, r < 0) throw new wi("Export snapshot exceeds 256 MiB. Select fewer recordings or a narrower workspace before exporting.");
		};
		let a = 0;
		const o = /* @__PURE__ */ new Map(), l = (e, t, n) => {
			const i = Object.freeze({});
			return $o(e, "write", t, a), No.set(i, {
				at: a,
				length: t.byteLength,
				store: e,
				restore: n
			}), a += t.byteLength, s(0), i;
		}, c = (e) => {
			if ("string" == typeof e && e.length >= 4096) {
				const t = o.get(e);
				if (void 0 !== t) return t;
				o.set(e, e);
			}
			if (n.binaryStore && (e instanceof ArrayBuffer || ArrayBuffer.isView(e))) {
				const t = e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), i = e instanceof ArrayBuffer ? null : e.constructor;
				return l(n.binaryStore, t, i ? (e) => new i(e) : (e) => e);
			}
			return n.binaryStore && function(e) {
				if (!Array.isArray(e) || e.length < 4096) return !1;
				for (const t of e) if (null !== t && "boolean" != typeof t && ("number" != typeof t || !Number.isFinite(t) || Object.is(t, -0))) return !1;
				return !0;
			}(e) ? l(n.binaryStore, new TextEncoder().encode(JSON.stringify(e)), (e) => JSON.parse(new TextDecoder().decode(e))) : Array.isArray(e) ? e.map(c) : e && "object" == typeof e && Object.getPrototypeOf(e) === Object.prototype ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, c(t)])) : (s(e), e);
		}, { ggirBinaries: d } = n, u = await t.transaction("r", [...i.keys()].map((e) => t[e]), async () => {
			const n = i.has("files") ? await ge(t, e.length ? { onlyFileIds: e } : void 0) : [], r = new Set(n.flatMap((e) => e.id ? [e.id] : [])), s = {};
			return await Promise.all([...i].map(async ([e, i]) => {
				const a = (e) => Object.fromEntries([...i].filter((t) => t in e).map((t) => [t, c(e[t])]));
				if (s[e] = [], "files" === e) return void (s[e] = n.map((e) => a(e)));
				const o = "diaryEntries" === e ? t.diaryEntries : pe(t, e), l = "studySettings" === e ? o.where("key").equals("study") : o.where("fileId").anyOf([...r]);
				await P(l, (t) => {
					s[e].push(a(((e, t) => {
						if (!d || d.has(t.fileId)) return t;
						if ("ggirResultsBlobs" === e) return { fileId: t.fileId };
						if ("ggirCorrectedValues" !== e || !t.values) return t;
						const { ms2: n, ms3: i, ms4: r, ms5: s, ...a } = t.values;
						return {
							...t,
							values: a
						};
					})(e, t)));
				});
			})), s;
		}), p = new Set((u.ggirResultsBundles ?? []).map((e) => e.fileId));
		u.markers = (u.markers ?? []).map((e) => p.has(e.fileId) && "invalid" === be(void 0, Me(e)).kind ? {
			...e,
			isInvalidNight: !0
		} : e);
		const m = function(e) {
			const t = Object.freeze({ files: Lo((e.files ?? []).map((e) => Object.fromEntries(vo.map((t) => [t, Oo(e[t])]))).sort((e, t) => e.filename.localeCompare(t.filename))) });
			return Eo.set(t, e), t;
		}(u);
		return function(e, t) {
			const n = Eo.get(e);
			if (!n.ggirResultsBundles) return;
			const i = new Set(n.ggirResultsBundles.map((e) => e.fileId));
			if (void 0 === t) return void (n.ggirCorrectedValues && (n.ggirCorrectedValues = n.ggirCorrectedValues.filter((e) => !i.has(e.fileId))));
			const r = new Map((n.files ?? []).map((e) => [e.id, e.ggirBundleRevision])), s = new Map((n.ggirCorrectedValues ?? []).map((e) => [e.fileId, e]));
			n.ggirCorrectedValues = n.ggirResultsBundles.flatMap((e) => {
				if (!t) return e.ggirCorrections && !e.stock ? [] : [{
					fileId: e.fileId,
					key: "",
					notApplied: ml
				}];
				if (e.ggirCorrections) return [];
				const n = t.get(e.fileId);
				if (!n) return [{
					fileId: e.fileId,
					key: "",
					notApplied: "the recording was added during the export; export again for its corrected values"
				}];
				if ("notApplied" in n) return [{
					fileId: e.fileId,
					key: "",
					notApplied: n.notApplied
				}];
				const i = s.get(e.fileId);
				return [i && i.key === n.key && r.get(e.fileId) === n.revision ? i : {
					fileId: e.fileId,
					key: "",
					notApplied: "the recording changed during the export; export again for its corrected values"
				}];
			});
		}(m, n.ggirCorrected), m;
	}(e, t, {
		...n,
		ggirCorrected: i,
		...s ? { ggirBinaries: s } : {}
	}));
}
Ta.producers, Ta.archive;
const wl = [
	"sleep",
	"circadian",
	"ggirReport",
	"event",
	"physicalActivity"
], vl = /* @__PURE__ */ new WeakMap(), yl = 4;
function bl(e, t, n, i) {
	let r = vl.get(e);
	r || (r = /* @__PURE__ */ new Map(), vl.set(e, r));
	const s = JSON.stringify([t, n]);
	let a = r.get(s);
	if (!a) {
		for (; r.size >= yl;) r.delete(r.keys().next().value);
		a = async function(e, t, n, i) {
			const r = Do(e, Ao.ggirReport, [t]), s = r.files.find((e) => e.id === t), a = r.ggirResultsBundles.find((e) => e.fileId === t), o = a && H(a, r.ggirResultsBlobs.find((e) => e.fileId === t)), l = Po(r, t, n), c = o ? await Kr(t, o.imported, l, s.ggirClockSteps, i) : void 0, d = c?.markersByAlgo ?? l, u = c?.selected ?? new Map([...l].flatMap(([e, t]) => t[0] ? [[e, t[0]]] : [])), p = is(u), m = r.ggirScorerReviews.find((e) => e.fileId === t && e.scorer === n), g = {
				review: m,
				bundleRevision: s.ggirBundleRevision
			}, f = o ? await us(o, u, s.ggirClockSteps, c?.edits, i, g) : void 0, h = f ? await xl(f, p, i) : void 0, _ = r.ggirCorrectedValues.find((e) => e.fileId === t), w = m?.corrected && _ && m.corrected.key === _.key ? {
				review: {
					edits: m.edits,
					bundleRevision: m.bundleRevision,
					...m.corrected.current ? { current: m.corrected.current } : {}
				},
				bundleRevision: s.ggirBundleRevision
			} : void 0;
			return {
				markersByAlgo: d,
				selected: u,
				bundle: h,
				sets: o && f ? await Promise.all(Qe(o, _, _?.notApplied !== ml).map(async ({ set: e, bundle: t }) => t === o ? h : xl(await us(t, u, s.ggirClockSteps, f.edits, i, "corrected" === e ? w : void 0), p, i))) : [],
				invalidDates: p
			};
		}(e, t, n, i), r.set(s, a), a.catch(() => {
			r.get(s) === a && r.delete(s);
		});
	}
	return a;
}
let kl;
async function xl(e, t, n) {
	const { ggirCell: i, ggirNum: r } = await import("./ggir-results-types-kmrkPkJO.js").then((e) => e.o), a = e.part2Reports?.["part2_daysummary.csv"], o = /* @__PURE__ */ new Map();
	if (a) for (let c = 0; c < a.rows; c++) {
		const e = i(a, s.ggir_id.header, c), t = ws(i(a, s.ggir_calendar_date.header, c));
		if (null == e || !t) continue;
		const n = JSON.stringify([String(e), t]);
		o.set(n, o.has(n) ? null : c);
	}
	const l = vs(e.imported, "nights"), d = s.ggir_nonwear_perc_spt.header, u = async (t) => {
		const u = t.nights, p = Array.from({ length: u.rows }, (e, t) => {
			const n = i(u, s.ggir_id.header, t), c = o.get(JSON.stringify([null == n ? null : String(n), l(u, t, !1)])), d = a && null != c;
			return {
				id: n,
				day: c,
				valid: d ? i(a, s.ggir_day_valid_hours.header, c) : null,
				hours: d ? i(a, s.ggir_day_hours.header, c) : null,
				validNumber: d ? r(a, s.ggir_day_valid_hours.header, c) : null,
				hoursNumber: d ? r(a, s.ggir_day_hours.header, c) : null
			};
		}), m = p.flatMap((e, t) => null != e.validNumber && null != e.hoursNumber ? [{
			index: t,
			valid: e.validNumber,
			hours: e.hoursNumber
		}] : []), g = /* @__PURE__ */ new Map();
		if (m.length > 0) {
			const e = await Q(n).ggirDayValidFractions(Float64Array.from(m, (e) => e.valid), Float64Array.from(m, (e) => e.hours));
			m.forEach((t, n) => g.set(t.index, e[n] ?? null));
		}
		const f = !u.columns.includes(d) && p.some((e, n) => !t.nightRecomputed[n]) ? await function(e, t) {
			const n = e.cleanedNightsCsv;
			if (!n) return Promise.resolve(void 0);
			if (kl?.csv !== n || kl.config !== e.configCsv) {
				const i = Q(t).readGgirReportCsv(n, e.configCsv);
				kl = {
					csv: n,
					config: e.configCsv,
					table: i
				}, i.catch(() => {
					kl?.table === i && (kl = void 0);
				});
			}
			return kl.table;
		}(e, n) : void 0, h = p.map(({ id: e, day: n, valid: o, hours: l, validNumber: c, hoursNumber: p }, m) => {
			const h = g.get(m) ?? null, _ = r(u, s.ggir_night.header, m), w = Array.from({ length: t.days.rows }, (e, t) => t).find((e) => "WW" === i(t.days, "window", e) && r(t.days, "night_number", e) === _), v = f ? Array.from({ length: f.rows }, (e, t) => t).find((t) => String(i(f, s.ggir_id.header, t)) === String(e) && r(f, s.ggir_night.header, t) === _) : void 0, y = {
				ggir_nonwear_perc_spt: t.nightRecomputed[m] ? void 0 === w ? null : i(t.days, d, w) : u.columns.includes(d) ? i(u, d, m) : f?.columns.includes(d) && void 0 !== v ? i(f, d, v) : void 0 === w ? null : i(t.days, d, w),
				ggir_day_valid_hours: o,
				ggir_day_hours: l,
				ggir_day_valid_fraction: h
			}, b = (a ? null === n ? "duplicate_part2_day" : void 0 === n ? "no_matching_part2_day" : null : "source_reported_missing") ?? "source_reported_missing";
			return {
				values: y,
				reasons: {
					ggir_day_valid_hours: null == c ? b : null,
					ggir_day_hours: null == p ? b : null,
					ggir_day_valid_fraction: null != h ? null : null != p && p <= 0 ? "not_applicable_to_row" : b
				}
			};
		}), _ = c.ggir_review_night_extension, w = [.../* @__PURE__ */ new Set([
			...u.columns,
			..._.map((e) => s[e].header),
			..._.map((e) => s[e].header + "_missing_reason")
		])], v = w.map((e) => {
			const t = _.find((t) => s[t].header + "_missing_reason" === e);
			if (t) return h.map((e) => e.reasons[t] ?? null);
			const n = _.find((t) => s[t].header === e);
			return n ? h.map((e) => e.values[n] ?? null) : u.values[u.columns.indexOf(e)];
		});
		return {
			...t,
			nights: {
				...u,
				columns: w,
				values: v
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
		...rs(e.personReports, e.edits, t) ? { personRecomputed: await Ss(e, t, n) } : {},
		...e.ggirCorrections ? { ggirCorrections: e.ggirCorrections } : {},
		recomputeAvailable: Boolean(e.ms2 && e.ms3),
		imported: await u(e.imported),
		...e.current ? { current: await u(e.current) } : {}
	};
}
function Ml(e) {
	return Do(e, Ao.manifest).studySettings.flatMap((e) => Re(e).map((e) => ({
		file: "sleep_export.csv",
		row: 0,
		key: e.filename,
		column: `${e.category}: ${e.reason}`,
		reason: "not_computed_for_export"
	})));
}
const Sl = "not included", Il = "included if produced";
function Tl(e) {
	const t = e.artifacts ?? null, n = t ? null : e.planned ?? null, i = e.columns, r = t ? t.sleepRows.length : n?.sleepRows ?? null, a = t ? t.sleepRows.filter((e) => e.markerType === te.MAIN_SLEEP).length : n?.mainSleepRows ?? null, o = t ? Za(t.sleepRows).size : n?.wideRows ?? null, l = t ? t.summaryRows.length : n?.summaryRows ?? null, c = t ? t.nonwearRows.length : n?.nonwearRows ?? null, d = t ? t.physicalActivityRows.length : n?.activityRows ?? null, u = t ? new Set(t.physicalActivityRows.map((e) => e.analysisDate)).size : n?.activityDates ?? null, p = t ? t.eventMarkerRows?.length ?? 0 : n?.eventMarkerRows ?? null, m = n?.actogramFiles ?? null, g = t ? Object.keys(t.ggirEntries) : null, f = (g ? g.filter((e) => e.startsWith("part4_nightsummary")).map((e) => {
		const n = Math.max(0, D(new TextDecoder().decode(t.ggirEntries[e])).records.length - 1);
		return {
			name: e,
			include: n > 0,
			rows: n
		};
	}) : n ? [...Ds([...n.part4Rows.keys()])].map(([e, t]) => ({
		name: t,
		include: n.ggirMainSleepGroupKeys.includes(e),
		rows: n.part4Rows.get(e) ?? null
	})) : []).sort((e, t) => e.name.localeCompare(t.name)), h = g ? g.filter((e) => !e.startsWith("part4_nightsummary")).sort((e, t) => e.localeCompare(t)) : [Ls, ...n?.ggirReviewEntries ?? []], _ = (e) => null == e ? null : e > 0, w = (n, r, s) => {
		const a = null == r ? "unknown" : r ? "included" : "not_included";
		return "included" !== a ? {
			name: n,
			state: a,
			rows: null,
			detail: "unknown" === a ? s.detail : Sl,
			estimatedBytes: 0,
			write: null
		} : {
			name: n,
			state: a,
			rows: s.rows,
			detail: s.detail,
			estimatedBytes: s.estimatedBytes ?? ((s.rows ?? 0) + 1) * (s.columns ?? i) * 12,
			write: t ? () => s.csv ? Us(s.csv(t)) : s.encode(t) : null,
			...t && (s.chunkField || s.wide) ? { batches: function* () {
				if (s.wide) {
					const e = Xa(t.sleepRows, !0), n = e.next().value;
					for (const t of e) {
						const e = n + "\n" + t;
						yield {
							bytes: Us(e),
							text: e,
							rows: 1
						};
					}
				} else if (s.chunkField) {
					const n = t[s.chunkField] ?? [];
					for (let i = 0; i < n.length; i += 256) {
						const r = {
							...t,
							[s.chunkField]: n.slice(i, i + 256)
						}, a = !e.selectedColumns?.length || "sleepRows" !== s.chunkField && "nonwearRows" !== s.chunkField ? void 0 : so(r[s.chunkField], void 0, !0), o = s.csv(r);
						yield {
							bytes: Us(o),
							text: o,
							rows: Math.min(256, n.length - i),
							...a ? { fullRowCsv: a } : {}
						};
					}
				}
			} } : {}
		};
	};
	return [
		w("sleep_export.csv", _(r), {
			rows: r,
			detail: null == r ? Il : `${String(r)} rows · ${String(i)} columns`,
			chunkField: "sleepRows",
			csv: (t) => so(t.sleepRows, e.selectedColumns ?? void 0, !0)
		}),
		w("sleep_export_wide.csv", !!e.includeWideFormat && _(o ?? a), {
			rows: o,
			detail: null == o ? Il : `${String(o)} participant group ${1 === o ? "row" : "rows"}`,
			wide: !0,
			csv: (e) => function(e, t = !1) {
				return [...Xa(e, t)].join("\n");
			}(e.sleepRows, !0)
		}),
		w("summary_export.csv", _(l ?? a), {
			rows: l,
			detail: null == l ? Il : `${String(l)} participant ${1 === l ? "row" : "rows"}`,
			chunkField: "summaryRows",
			csv: (e) => function(e, t = !1) {
				const n = ro("summary_csv", e, Va, void 0, t), i = [
					"summary_mean_temperature_c",
					"sleep_regularity_index",
					...Object.values(za).filter((t) => "summary_mean_temperature_c" !== t && e.some((e) => e.metricMissingReasons?.[t]))
				];
				return e.some((e) => null == e.meanTemperature || null == e.sleepRegularityIndex || Object.values(e.metricMissingReasons ?? {}).some(Boolean)) ? D(n).records.map((t, n) => 0 === n ? t.text + "," + i.map((e) => s[e].header + "_missing_reason").join(",") : t.text + "," + i.map((t) => {
					const i = e[n - 1];
					return "summary_mean_temperature_c" === t ? null == i.meanTemperature ? i.meanTemperatureMissingReason ?? "" : "" : "sleep_regularity_index" === t ? i.sleepRegularityMissingReason ?? "" : i.metricMissingReasons?.[t] ?? "";
				}).join(",")).join("\n") : n;
			}(e.summaryRows, !0)
		}),
		w("nonwear_export.csv", _(c), {
			rows: c,
			detail: null == c ? Il : `${String(c)} periods`,
			chunkField: "nonwearRows",
			csv: (t) => so(t.nonwearRows, e.selectedColumns ?? void 0, !0)
		}),
		w("event_markers_export.csv", _(p), {
			rows: p,
			detail: null == p ? Il : `${String(p)} button ${1 === p ? "press" : "presses"}`,
			columns: Vo.length,
			chunkField: "eventMarkerRows",
			csv: (e) => function(e, t = !1) {
				const n = [[...Vo, ...t ? ["Participant ID_missing_reason", "Event Marker UTC_missing_reason"] : []].join(",")];
				for (const i of e) n.push([
					i.filename,
					i.participantId ?? "",
					i.studyDate,
					ze(i.localTimestamp),
					null == i.gmtOffsetMinutes ? "" : (/* @__PURE__ */ new Date(1e3 * (i.localTimestamp - 60 * i.gmtOffsetMinutes))).toISOString().replace(".000Z", "Z"),
					...t ? [i.participantId ? "" : "source_reported_missing", null == i.gmtOffsetMinutes ? "source_reported_missing" : ""] : []
				].map((e) => N(e)).join(","));
				return `${n.join("\n")}\n`;
			}(e.eventMarkerRows ?? [], !0)
		}),
		...Ia.map((e) => {
			const i = t ? e.rows(t) : n?.sourceAnalysisRows.get(e.entry) ?? null, { write: r } = e;
			let s;
			switch (r.kind) {
				case "rows":
					s = {
						chunkField: r.chunkField,
						csv: (e) => r.csv(e)
					};
					break;
				case "streamed":
					s = { encode: () => {
						throw new Error(`${e.entry} is written from its production's stream`);
					} };
					break;
				default: throw new Error(`unhandled export write ${JSON.stringify(r)}`);
			}
			return w(e.entry, _(i), {
				rows: i,
				detail: null == i ? Il : e.detail(i),
				columns: e.columns,
				...s
			});
		}),
		w("physical_activity_export.csv", _(d), {
			rows: d,
			detail: null == d || null == u ? Il : `${String(d)} rows · ${String(u)} distinct dates`,
			chunkField: "physicalActivityRows",
			csv: (e) => function(e, t, n, i = !1) {
				const r = /* @__PURE__ */ new Set();
				t.includes("sedentary") || (r.add("Sedentary Minutes"), r.add("Sedentary Bouts"), r.add("Sedentary Breaks"), r.add("Mean Sedentary Bout Minutes")), t.includes("light") || r.add("Light Minutes"), t.includes("moderate") || r.add("Moderate Minutes"), t.includes("vigorous") || r.add("Vigorous Minutes"), t.includes("moderate") && t.includes("vigorous") || (r.add("MVPA Minutes"), r.add("MVPA Bouts"), r.add("MVPA Bout Minutes")), n && t.includes("nonwear") || r.add("Excluded Nonwear Minutes");
				const s = /* @__PURE__ */ new Set([
					"Excluded Main Sleep Minutes",
					"Excluded Nap Minutes",
					"MVPA Bouts",
					"MVPA Bout Minutes",
					"Sedentary Bouts",
					"Sedentary Breaks",
					"Mean Sedentary Bout Minutes"
				]), a = e.some((e) => "ggir_enmo" === e.method) ? cl.filter((e) => !r.has(e) && (Ir.has(e) || s.has(e))) : [], o = [
					"Participant ID",
					"Threshold Preset Name",
					"Inclusion Rule Preset Name",
					"Scored Username",
					"Source Content Hash",
					"Validation Notes",
					"Notes"
				], l = [[
					...cl.filter((e) => !r.has(e)),
					...a.map((e) => `${e}_missing_reason`),
					...i ? [
						"Epoch Length Seconds",
						"Native Epoch Seconds",
						"Mask Overlap Epochs"
					].map((e) => e + "_missing_reason") : [],
					...o.map((e) => e + "_missing_reason")
				].join(",")];
				for (const c of e) {
					const e = pl(c), t = null == c.sedentaryMinutes || !n && null == c.excludedNonwearMinutes ? null : c.sedentaryMinutes + (n ? 0 : c.excludedNonwearMinutes), d = [
						dl(c.filename),
						dl(c.participantId),
						dl(c.analysisDate),
						dl(c.method),
						dl(c.methodLabel),
						dl(c.methodFamily),
						dl(c.requiredSignalContract),
						dl(c.computationOwner),
						String(c.frontendComputesMetric),
						dl(c.sourceSignal),
						dl(c.status),
						dl(c.methodRule),
						dl(c.thresholdSource),
						dl(c.thresholdPresetName),
						ul(c.sedentaryMax),
						ul(c.lightMin),
						ul(c.moderateMin),
						ul(c.vigorousMin),
						ul(t),
						ul(c.lightMinutes),
						ul(c.moderateMinutes),
						ul(c.vigorousMinutes),
						ul(c.mvpaMinutes),
						ul(c.mimsUnitTotal),
						null == c.epochLengthSeconds ? "" : String(c.epochLengthSeconds),
						String(c.epochsReviewed),
						ul(c.wakeWearMinutes),
						ul(c.excludedNonwearMinutes),
						ul(c.excludedMainSleepMinutes),
						ul(c.excludedNapMinutes),
						null == c.maskOverlapEpochs ? "" : String(c.maskOverlapEpochs),
						null == c.mvpaBouts ? "" : String(c.mvpaBouts),
						ul(c.mvpaBoutMinutes),
						null == c.sedentaryBouts ? "" : String(c.sedentaryBouts),
						null == c.sedentaryBreaks ? "" : String(c.sedentaryBreaks),
						ul(c.meanSedentaryBoutMinutes),
						null == c.nativeEpochSeconds ? "" : String(c.nativeEpochSeconds),
						String(c.epochMismatch),
						dl(c.inclusionRulePresetName),
						String(c.maskExcludeNonwear),
						String(c.maskExcludeMainSleep),
						String(c.maskExcludeNaps),
						String(c.maskUseManualNonwear),
						String(c.maskUseAlgorithmNonwear),
						dl(c.maskNonwearDetector),
						ul(c.maskMinimumWakeWearMinutes),
						dl(c.scoredUsername),
						dl(c.sourceContentHash),
						dl(c.exportedAt),
						dl(e.status),
						dl(e.notes),
						dl(c.notes)
					], u = {
						"Sedentary Minutes": null == t ? null : c.sedentaryMinutes,
						"Light Minutes": c.lightMinutes,
						"Moderate Minutes": c.moderateMinutes,
						"Vigorous Minutes": c.vigorousMinutes,
						"MVPA Minutes": c.mvpaMinutes,
						"Wake Wear Minutes": c.wakeWearMinutes,
						"Excluded Nonwear Minutes": c.excludedNonwearMinutes
					}, p = {
						"Excluded Main Sleep Minutes": c.excludedMainSleepMinutes,
						"Excluded Nap Minutes": c.excludedNapMinutes,
						"MVPA Bouts": c.mvpaBouts,
						"MVPA Bout Minutes": c.mvpaBoutMinutes,
						"Sedentary Bouts": c.sedentaryBouts,
						"Sedentary Breaks": c.sedentaryBreaks,
						"Mean Sedentary Bout Minutes": c.meanSedentaryBoutMinutes
					}, m = a.map((e) => {
						const t = d[cl.indexOf(e)];
						if ("ggir_enmo" !== c.method || "" !== t) return "";
						if (Ir.has(e)) {
							const t = u[e];
							return null != t && Number.isFinite(t) ? "" : "source_reported_missing";
						}
						return s.has(e) && null == p[e] ? "not_computed_for_export" : "";
					}), g = i ? [
						["Epoch Length Seconds", null == c.epochLengthSeconds && "ggir_enmo" === c.method ? "not_applicable_to_row" : ""],
						["Native Epoch Seconds", null == c.nativeEpochSeconds ? "not_applicable" === c.thresholdSource ? "not_applicable_to_row" : "source_reported_missing" : ""],
						["Mask Overlap Epochs", null == c.maskOverlapEpochs ? "ggir_enmo" === c.method ? "not_applicable_to_row" : "needs_signal" === c.status ? "channel_unavailable" : "backend_required" === c.status ? "not_computed_for_export" : "" : ""]
					].map(([e, t]) => "" === d[cl.indexOf(e)] ? t : "") : [];
					l.push([
						...d.filter((e, t) => !r.has(cl[t])),
						...m,
						...g,
						...o.map((e) => "" !== d[cl.indexOf(e)] ? "" : [
							"Participant ID",
							"Scored Username",
							"Source Content Hash"
						].includes(e) ? "source_reported_missing" : "not_applicable_to_row")
					].join(","));
				}
				return `${l.join("\n")}\n`;
			}(e.physicalActivityRows, e.physicalActivityEnabledClasses, e.physicalActivityNonwearAsClass, !0)
		}),
		...f.map(({ name: e, include: t, rows: n }) => w(e, t, {
			rows: n,
			detail: null == n ? Il : `${String(n)} ${1 === n ? "night" : "nights"} · GGIR 40 fields`,
			columns: 40,
			encode: (t) => t.ggirEntries[e]
		})),
		...h.map((e) => w(e, !(!g && !n?.ggirReviewEntries.includes(e)) || (null == m ? null : m > 0), {
			rows: null,
			detail: e.endsWith(".html") ? null == m ? g ? "1 report" : Il : `1 report · ${String(m)} ${1 === m ? "file" : "files"}` : "1 GGIR report artifact",
			encode: (t) => t.ggirEntries[e]
		})),
		{
			name: Lr,
			state: "included",
			rows: null,
			detail: "1 reason per missing cell",
			estimatedBytes: 2048 + (n?.sourceAnalysisMissingReasonBytes ?? 0),
			write: null
		},
		w("codebook.csv", !0, {
			rows: Ua.length,
			detail: `${String(Ua.length)} definitions`,
			estimatedBytes: new TextEncoder().encode(Ka()).length,
			encode: () => Us(Ka(void 0, !0))
		}),
		{
			name: ki,
			state: "included",
			rows: null,
			detail: "1 manifest · run, settings, entry hashes",
			estimatedBytes: 2048,
			write: null
		}
	];
}
async function Rl(e, t, n, i = {}) {
	const { signal: a } = i;
	a?.throwIfAborted(), i.progress?.(0, 0, Mi);
	const l = await _l(t.fileIds, e, {
		...i,
		signal: a,
		username: t.username
	}), c = function(e, t, n, i) {
		const r = [], s = [], a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = [], c = $e(/* @__PURE__ */ new Date()), d = (e) => {
			for (const t of e.charts) l.push({
				key: t.key,
				pid: t.pid,
				charts: t.charts.length
			}), s.push(Ws(s.length, t));
			for (const [t, n] of e.csvLinesByAlgo) o.set(t, U(n[0]));
			for (const [t, n] of e.headers) a.set(t, xs(a.get(t) ?? [], n));
			r.push({
				csvLinesByAlgo: e.csvLinesByAlgo,
				ggirReviews: e.ggirReviews
			});
		};
		async function* u(e, t) {
			for (const n of r) i?.throwIfAborted(), yield qs(n, {
				signal: i,
				names: t,
				layouts: a,
				only: e
			}).then((t) => t[e]);
		}
		return {
			add: d,
			addFiles: async (r) => {
				for (const s of r) d(await Js({
					username: e,
					dateRange: t,
					snapshot: n,
					generatedAt: c
				}, s, i));
			},
			streamEntries: function* () {
				const e = Ds([...o.keys()]);
				for (const [t, n] of o) a.set(e.get(t), n);
				for (const t of [...a.keys()].filter(_s)) {
					const e = a.get(t);
					e && a.set(t, [
						...e.filter((e) => !e.endsWith("_missing_reason") && !ps.includes(e)),
						...ps,
						...e.filter((e) => e.endsWith("_missing_reason") && !ps.some((t) => e === t + "_missing_reason")),
						...ps.map((e) => e + "_missing_reason")
					]);
				}
				for (const [t, n] of a) yield {
					name: t,
					chunks: async function* () {
						yield Us(n.map(N).join(",") + "\n");
						for await (const n of u(t, e)) {
							if (!n) continue;
							const e = new TextDecoder().decode(n), t = D(e).records[0], i = Us(e.slice(t.text.length + 1));
							for (let n = 0; n < i.byteLength; n += bi) yield i.subarray(n, n + bi);
						}
					}()
				};
				l.length && (yield {
					name: Ls,
					chunks: async function* () {
						yield* Vs(function(e, t) {
							const n = e.map((e) => e.key), i = e.reduce((e, t) => e + t.charts, 0);
							return `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Visual Report — ${Os(t)}</title>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:system-ui,-apple-system,sans-serif;background:#f0f2f5;color:#222}\n.hdr{background:#1a1a2e;color:#fff;padding:0 24px;position:sticky;top:0;z-index:20;\n     display:flex;align-items:center;gap:16px;box-shadow:0 2px 6px rgba(0,0,0,.4);height:48px;min-height:48px}\n.hdr h1{font-size:15px;font-weight:700;white-space:nowrap}\n.hdr small{color:#9ca3af;font-size:11px}\n.toolbar{background:#fff;border-bottom:2px solid #ddd;padding:8px 24px;position:sticky;top:48px;z-index:19;\n         display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.toolbar label{font-size:12px;font-weight:600;color:#374151}\n.pid-btn{padding:5px 14px;border-radius:20px;border:1px solid #d1d5db;background:#fff;color:#374151;\n         font-size:12px;font-weight:600;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}\n.pid-btn:hover{background:#e0e7ff;border-color:#93c5fd}\n.pid-btn.active{background:#1d4ed8;color:#fff;border-color:#1d4ed8}\n.pid-sec{padding:20px 24px;display:none}\n.pid-sec.initial{display:block}\n.pid-lbl{font-size:19px;font-weight:700;margin-bottom:16px}\n.algo-block{margin-bottom:18px}\n.algo-lbl{font-size:12px;font-weight:600;color:#374151;background:#fff;border:1px solid #e5e7eb;\n          border-bottom:none;padding:5px 12px;border-radius:5px 5px 0 0;display:inline-block}\n.cwrap{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:0 5px 5px 5px;\n       box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}\n.plot-svg{width:100%;overflow:hidden;background:#fff}\n.plot-svg svg{display:block;width:100%;height:auto}\n.scene-meta{font-size:10px;color:#6b7280;padding:5px 10px;border-top:1px solid #e5e7eb}\n.algo-stale{font-size:12px;color:#b45309;padding:4px 10px}\n.svg-btn{font-size:10px;color:#374151;background:#fff;border:1px solid #d1d5db;border-radius:3px;\n         padding:2px 8px;cursor:pointer;margin:5px 8px 5px 0;float:right}\n.svg-btn:hover{background:#eef2ff;color:#1d4ed8;border-color:#93c5fd}\n.report-note{font-size:11px;line-height:1.45;color:#4b5563;background:#fffbeb;border-bottom:1px solid #fde68a;\n             padding:7px 24px}\n.legend{padding:8px 24px;display:flex;gap:14px;align-items:center;background:#fff;border-bottom:1px solid #e5e7eb}\n.leg-item{display:flex;align-items:center;gap:5px;font-size:11px;color:#555}\n.leg-box{width:14px;height:10px;border-radius:2px}\n.leg-line{width:16px;height:2px;background:#7c3aed}\n</style>\n</head>\n<body>\n<div class="hdr">\n  <h1>Visual Report</h1>\n  <small>Generated ${Os(t)} · ${n.length} recording${1 !== n.length ? "s" : ""} · ${i} chart${1 !== i ? "s" : ""}</small>\n</div>\n<div class="toolbar">\n  <label>Recording:</label>\n  <div id="pid-nav">${n.map((t, n) => `<button type="button" class="pid-btn${0 === n ? " active" : ""}">${Os(e[n].pid)}</button>`).join("")}</div>\n</div>\n<div class="report-note">Full-resolution activity and interval overlays are rendered through the shared deterministic SVG scene. Pan, pinch, hover, cursor inspection, and the former 48-hour canvas view are intentionally omitted until they can share the application plot kernel without a second report-only engine.</div>\n<div class="legend">\n  <div class="leg-item"><div class="leg-line"></div>Activity</div>\n  <div class="leg-item"><div class="leg-box" style="background:#2563eb;opacity:.16"></div>Sleep</div>\n  <div class="leg-item"><div class="leg-box" style="background:#64748b;opacity:.16"></div>Nonwear</div>\n</div>`;
						}(l, c));
						for await (const { bytes: e, lengths: t } of async function* () {
							for (const { blob: e, lengths: t } of s) i?.throwIfAborted(), yield e.arrayBuffer().then((e) => ({
								bytes: new Uint8Array(e),
								lengths: t
							}));
						}()) {
							let n = 0;
							for (const i of t) yield e.subarray(n, n += i);
						}
						for (const e of zs) yield* Vs(e);
					}()
				});
			},
			generatedAt: c
		};
	}(t.username, t.dateRange, l, a), d = [];
	for (const r of l.files) {
		const e = d.at(-1);
		e?.[0]?.filename === r.filename ? e.push(r) : d.push([r]);
	}
	const u = [], p = [], m = [];
	let g = !1;
	const f = t.manifest.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), w = i.groups ?? {
		size: 1,
		run: (e, t, n) => async function(e, t, n, { signal: i } = {}) {
			i?.throwIfAborted();
			const a = e.files.filter((e) => t.includes(e.id)), l = a.map((e) => e.id), c = /* @__PURE__ */ new Map();
			let d = !1;
			try {
				const t = await function(e, { fileIds: t, dateRange: n, signal: i }) {
					const r = Do(e, Ao.circadian, t);
					return async function(e, t, { dateRange: n, signal: i }) {
						const r = Q(i), s = [];
						let a = 0;
						for (const o of e) {
							if (!o.id) continue;
							i?.throwIfAborted();
							const e = await t(o.id), l = [];
							for (const t of e.values()) {
								if (i?.throwIfAborted(), n && (t.date < n[0] || t.date > n[1])) continue;
								a += 1;
								const e = gt(o.id, t);
								e && l.push(e);
							}
							if (0 === l.length) continue;
							const { request: c, transfer: d } = mt(l.map((e) => e.wire)), u = await r.computeCircadian(h(c, d));
							i?.throwIfAborted();
							const p = new Map(l.map((e) => [e.wire.id, e.source]));
							for (const t of u.day_summaries) {
								const e = p.get(t.id);
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
					}(t.length > 0 ? r.files.filter((e) => null != e.id && t.includes(e.id)) : r.files, (e) => Wo(r, e), {
						dateRange: n,
						signal: i
					});
				}(e, {
					fileIds: l,
					dateRange: n.dateRange,
					signal: i
				});
				for (const e of t.daySummaries) c.set(`${e.fileId}|${e.date}`, {
					l5Hour: e.l5Hour,
					m10Hour: e.m10Hour
				});
			} catch (g) {
				if (g instanceof jo) throw g;
				if (i?.throwIfAborted(), d = !0, g instanceof DOMException && "AbortError" === g.name) throw g;
			}
			const u = await Al(a[0].filename, "computing its sleep rows", () => async function(e, t, n, i, a, l, c) {
				const d = a && a.trim().length > 0 ? a.trim() : null, u = Do(l, Ao.sleep, e), p = u.files, m = En(u.studySettings[0]?.extraSettings), g = Ne(u.studySettings[0]?.extraSettings?.analysis_paradigm), f = (e.length > 0 ? p.filter((t) => null != t.id && e.includes(t.id)) : [...p]).sort((e, t) => e.filename.localeCompare(t.filename)), [h, w] = n ?? ["", ""], v = [], y = [], b = [], k = [], x = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), S = async () => {
					for (const [e, t] of x) M.set(e, await Fa(e, t, v, c));
					x.clear();
				}, I = /* @__PURE__ */ new Map(), T = (e) => {
					const t = JSON.stringify(e);
					let n = I.get(t);
					return n || (n = Q(c).exportNapAggregate(e), I.set(t, n)), n;
				}, R = await Promise.all(f.map((e) => bl(l, e.id, t, c))), A = await Promise.all(f.map((e) => Ma[Ue(e, g)].forFile(u, e.id, Q(c))));
				for (const [N, C] of f.entries()) {
					if (c?.throwIfAborted(), N > 0 && f[N - 1].filename !== C.filename && await S(), !C.id) continue;
					const e = Wo(u, C.id), { bundle: t, markersByAlgo: a } = R[N], l = t?.edits ?? [], p = t ? Xe(t.imported) : [], { zone: g } = await On(C, m, c), M = [.../* @__PURE__ */ new Set([...C.availableDates, ...p.map((e) => e.nightDate)])].sort(), I = n ? M.filter((e) => e >= h && e <= w) : M;
					if (t) {
						const e = new Set(tt(t.imported).map((e) => e.night));
						for (const n of p) {
							if (e.has(n.night) || !I.includes(n.nightDate)) continue;
							const i = be(n, a.get(n.nightDate)?.[0]).kind;
							"scored" !== i && "invalid" !== i && b.push({
								file: "sleep_export.csv",
								row: 0,
								key: `${s.filename.header}=${C.filename}|${s.study_date.header}=${n.nightDate}`,
								column: `GGIR night ${String(n.night)}: ${it(t.imported, n.night)}`,
								reason: "ggir_night_excluded"
							});
						}
					}
					const E = ye(e.values()), $ = A[N], O = I.flatMap((e) => (a.get(e) ?? []).filter((e) => Y(e) || e.nonwearMarkers.length > 0).map((t) => ({
						markers: t,
						sleepPeriods: $.sleepPeriodsOf(e, t),
						nonwear: t.nonwearMarkers.map((e) => ({
							start: e.startTimestamp,
							end: e.endTimestamp
						}))
					}))), L = [...e.keys()].sort().map((t) => e.get(t)), j = L.map((e) => he(e).timestamps), B = Aa.flatMap((e) => {
						if (!L.some((t) => t[e])) return [];
						const t = [], n = [];
						for (const [i, r] of L.entries()) {
							const s = r[e];
							if (!s) continue;
							const a = new Float64Array(s), o = j[i];
							for (let e = 0; e < Math.min(a.length, o.length); e++) t.push(o[e]), n.push(a[e]);
						}
						return [{
							field: e,
							timestamps: Float64Array.from(t),
							values: Float64Array.from(n)
						}];
					}), D = 0 === O.length ? [] : await Q(c).exportFileNightFigures(O.map(({ sleepPeriods: e, nonwear: t }) => ({
						periods: e.map((e) => ({
							start: e.onsetTimestamp,
							end: e.offsetTimestamp
						})),
						nonwear: t
					})), B), P = /* @__PURE__ */ new Map();
					let F = 0;
					for (const n of O) P.set(n.markers, {
						...n,
						figures: D.slice(F, F + n.sleepPeriods.length)
					}), F += n.sleepPeriods.length;
					for (const n of I) {
						c?.throwIfAborted();
						const u = a.get(n);
						if (u && 0 !== u.length) for (const a of u) {
							const u = P.get(a);
							if (!u) continue;
							const { sleepPeriods: m, figures: f } = u, h = C.participantId ?? null, w = C.id, b = a.algorithm ?? null, M = a.username ?? null, S = a.needsConsensus, I = a.notes, R = e.get(n), A = await ct(n, C.navigationFacts, Q(c)), N = e.get(A), O = {
								fileId: w,
								filename: C.filename,
								participantId: h,
								studyDate: n,
								algorithm: b,
								scoredBy: M,
								needsConsensus: S,
								notes: I,
								meanTemperature: null,
								meanWhiteLight: null,
								meanRedLight: null,
								meanGreenLight: null,
								meanBlueLight: null,
								detectionRule: a.detectionRule ?? null,
								periodGuider: a.periodGuider ?? null,
								...Ba(a.sleepPeriodDetectionConfig),
								algorithmVersion: a.algorithmVersion ?? null,
								verificationStatus: null,
								studyId: d,
								markerStepSeconds: _(b, C.epochLengthSeconds),
								dstTransition: await we(g, n, void 0, Q(c))
							}, L = await T(m.filter((e) => e.markerType === te.NAP).map((e) => ({
								start: e.onsetTimestamp,
								end: e.offsetTimestamp
							}))), j = i?.get(`${String(w)}|${n}`), D = {
								l5Hour: j?.l5Hour ?? null,
								m10Hour: j?.m10Hour ?? null,
								napCount: L.napCount,
								totalNapMinutes: L.napCount > 0 ? L.totalNapMinutes : null
							}, F = E(b), G = fn(R, F), W = `${C.filename}\0${h ?? ""}\0${O.algorithm ?? ""}\0${O.detectionRule ?? ""}`, z = x.get(W) ?? [];
							z.push({
								date: n,
								epochLengthSeconds: C.epochLengthSeconds || 60,
								timestamps: G.timestamps,
								states: G.algorithmResults,
								stale: "stale" === F.status
							}), x.set(W, z);
							const V = he(R), U = await Un(e, n, F, {
								signal: c,
								nextDate: A
							}), H = f.map(({ means: e }) => new Map(B.map(({ field: t }, n) => [t, e[n] ?? null]))), q = async (e, i, d) => {
								let u = null;
								const m = p.find((e) => e.nightDate === n), g = t && m && e.markerType === te.MAIN_SLEEP && "invalid" !== be(m, a).kind, h = m && l.some((e) => e.night === m.night), _ = Da(null), w = {};
								let v = "not_applicable_to_row";
								const y = $.sleepRowMetrics?.cells(e) ?? null;
								if (y && (v = y.metricMissingReason, Object.assign(_, y.metrics), Object.assign(w, y.reasons)), !g && !y && e.onsetTimestamp && e.offsetTimestamp) {
									const { timestamps: t, algorithmResults: n, activity: i, scoresStale: r } = U;
									if (null !== r && 0 === k.length && k.push({
										component: "metric_computation",
										code: "unavailable",
										message: r
									}), v = null !== r ? "scores_from_another_config" : null == n ? "no_scored_epochs" : null == i ? "channel_unavailable" : 0 === t.length ? "no_valid_epochs" : void 0, null != n && t.length > 0 && (null != i || V.ggir)) {
										const r = V.epochSec ?? (C.epochLengthSeconds || 60), s = await Pa(n, i, t, e.onsetTimestamp, e.offsetTimestamp, r, c);
										u = s.metrics, u || s.error || (v = "no_valid_epochs"), s.error && (v = "not_computed_for_export"), s.error && 0 === k.length && k.push({
											component: "metric_computation",
											code: "unavailable",
											message: "Metric computation failed for at least one selected period; those rows carry no numerics."
										});
									}
								}
								if (g) {
									v = "channel_unavailable";
									const e = h ? t.current?.nights : t.imported.nights, n = e ? r(e, s.ggir_night.header, m.night) : -1;
									for (const [t, i, r, a] of Ra) {
										const l = e ? o(e, s[i].header, n) : null;
										_[t] = null == l ? null : l * a, w[r] = null == l ? h ? "not_computed_for_export" : "source_reported_missing" : void 0;
									}
								}
								(g || y || u && !("averageAwakeningLengthMinutes" in u)) && (w.average_awakening_length_minutes = "not_computed_for_export");
								const { figures: b } = f[d], x = Boolean(e.onsetTimestamp && e.offsetTimestamp), M = (e) => x ? H[d].get(e) ?? null : null, S = {
									...O,
									...D,
									periodIndex: e.markerIndex,
									markerType: e.markerType,
									onsetTimestamp: e.onsetTimestamp,
									offsetTimestamp: e.offsetTimestamp,
									...g || y ? _ : Da(u),
									inBedTimestamp: y?.inBedSpan?.startTimestamp ?? null,
									outOfBedTimestamp: y?.inBedSpan?.endTimestamp ?? null,
									metricMissingReason: v,
									isInvalidNight: i,
									meanTemperature: M("temperature"),
									meanWhiteLight: M("lux"),
									meanRedLight: M("redLight"),
									meanGreenLight: M("greenLight"),
									meanBlueLight: M("blueLight"),
									sleepMidpointTimestamp: x ? b.midpointTimestamp : null,
									sleepMidpointHour: x ? b.midpointClockHour : null,
									validWearMinutes: b.validWearMinutes
								}, I = (e, t) => null != e ? void 0 : x ? t ? "no_valid_epochs" : "channel_unavailable" : "not_applicable_to_row";
								return S.sensorMissingReasons = {
									mean_temperature_c: I(S.meanTemperature, Boolean(R?.temperature || N?.temperature)),
									mean_white_light_lux: I(S.meanWhiteLight, Boolean(R?.lux || N?.lux)),
									mean_red_light: I(S.meanRedLight, Boolean(R?.redLight || N?.redLight)),
									mean_green_light: I(S.meanGreenLight, Boolean(R?.greenLight || N?.greenLight)),
									mean_blue_light: I(S.meanBlueLight, Boolean(R?.blueLight || N?.blueLight))
								}, S.derivedMissingReasons = {
									...w,
									l5_hour: null == S.l5Hour ? j ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									m10_hour: null == S.m10Hour ? j ? "no_valid_epochs" : "not_computed_for_export" : void 0,
									sleep_midpoint_time: null == S.sleepMidpointTimestamp ? x ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									sleep_midpoint_hour: null == S.sleepMidpointHour ? x ? "no_valid_epochs" : "not_applicable_to_row" : void 0,
									valid_wear_minutes: null == S.validWearMinutes ? x ? "no_valid_epochs" : "not_applicable_to_row" : void 0
								}, S;
							};
							if (a.isInvalidNight) {
								v.push({
									...O,
									...D,
									periodIndex: null,
									markerType: Oa,
									onsetTimestamp: null,
									offsetTimestamp: null,
									...Da(null),
									isInvalidNight: !0,
									sleepMidpointTimestamp: null,
									sleepMidpointHour: null,
									validWearMinutes: null
								});
								for (const [e, t] of m.entries()) v.push(await q(t, !0, e));
							} else for (const [e, t] of m.entries()) v.push(await q(t, !1, e));
							for (const e of a.nonwearMarkers) y.push({
								...O,
								...D,
								periodIndex: e.markerIndex ?? 0,
								markerType: La,
								onsetTimestamp: e.startTimestamp,
								offsetTimestamp: e.endTimestamp,
								...Da(null),
								isInvalidNight: !1,
								sleepMidpointTimestamp: null,
								sleepMidpointHour: null,
								validWearMinutes: null
							});
						}
					}
				}
				await S(), v.sort(Ga), y.sort(Ga);
				const E = await async function(e, t) {
					const n = e.filter((e) => e.markerType === te.MAIN_SLEEP), i = /* @__PURE__ */ new Map();
					for (const o of n) {
						const e = `${o.filename}\0${o.participantId ?? ""}\0${o.algorithm ?? ""}\0${o.detectionRule ?? ""}`, t = i.get(e);
						t ? t.push(o) : i.set(e, [o]);
					}
					const r = [...i], s = await Q(t).summarizeExportGroups(r.map(([, e]) => e.map((e) => ({
						study_date: e.studyDate,
						total_nap_minutes: e.totalNapMinutes,
						values: Wa.map(([, t]) => e[t])
					})))), a = r.map(([e, t], n) => {
						const [i, r, a, o] = e.split("\0"), l = s[n], c = Object.fromEntries(Wa.map(([e], t) => [e, l.means[t] ?? null]));
						return {
							filename: i,
							participantId: r,
							algorithm: a,
							detectionRule: o,
							nNights: l.nNights,
							...c,
							meanTemperatureMissingReason: null == c.meanTemperature ? t.some((e) => "no_valid_epochs" === e.sensorMissingReasons?.mean_temperature_c) ? "no_valid_epochs" : t.some((e) => "channel_unavailable" === e.sensorMissingReasons?.mean_temperature_c) ? "channel_unavailable" : t.every((e) => "not_applicable_to_row" === e.sensorMissingReasons?.mean_temperature_c) ? "not_applicable_to_row" : void 0 : void 0,
							metricMissingReasons: Object.fromEntries(Wa.map(([e, n]) => {
								const i = za[e], r = Ra.find(([e]) => e === n)?.[2] ?? ("avgAwakeningLength" === n ? "average_awakening_length_minutes" : i), s = t.map((e) => "sleepMidpointHour" === n ? e.derivedMissingReasons?.sleep_midpoint_hour : "validWearMinutes" === n ? e.derivedMissingReasons?.valid_wear_minutes : e.derivedMissingReasons?.[r] ?? e.metricMissingReason).find(Boolean);
								return [i, null == c[e] ? s : void 0];
							})),
							sleepRegularityIndex: null,
							meanTotalNapMinutes: l.meanTotalNapMinutes,
							studyId: t[0]?.studyId ?? null
						};
					});
					return a.sort((e, t) => e.filename.localeCompare(t.filename) || e.participantId.localeCompare(t.participantId) || e.algorithm.localeCompare(t.algorithm) || e.detectionRule.localeCompare(t.detectionRule)), a;
				}(v, c);
				for (const r of E) {
					const e = `${r.filename}\0${r.participantId}\0${r.algorithm}\0${r.detectionRule}`, t = M.get(e);
					r.sleepRegularityIndex = t?.sri ?? null, r.sleepRegularityMissingReason = t?.sriMissingReason ?? (t ? void 0 : "not_computed_for_export");
				}
				return {
					sleepRows: v,
					nonwearRows: y,
					summaryRows: E,
					degradations: k,
					nightReasons: b
				};
			}(l, n.username, n.dateRange, c, n.studyId, e, i)), p = await Al(a[0].filename, "drawing its visual report", async () => {
				const t = [];
				for (const r of a) t.push(await Js({
					...n,
					snapshot: e
				}, r, i));
				return t;
			}), { generateLocalPhysicalActivityExportRows: m } = await import("./local-physical-activity-export-D9twSx3c.js");
			return {
				part: u,
				physicalActivityRows: await m(e, l, n.dateRange, {
					username: n.username,
					cutpointOverrides: n.physicalActivity.cutpointOverrides,
					maskPolicy: n.physicalActivity.maskPolicy,
					choiAxis: n.physicalActivity.choiAxis,
					exportedAt: n.exportedAt,
					...i ? { signal: i } : {}
				}),
				eventMarkerRows: await Ho(l, n.dateRange, e, n.username, i),
				circadianDegraded: d,
				reports: p
			};
		}(e, t, n, { signal: a })
	}, v = {
		username: t.username,
		studyId: t.studyId,
		dateRange: t.dateRange,
		physicalActivity: t.physicalActivity,
		exportedAt: f,
		generatedAt: c.generatedAt
	}, y = d.map(() => {
		const e = {};
		return e.promise = new Promise((t, n) => {
			e.resolve = t, e.reject = n;
		}), e.promise.catch(() => {}), e;
	});
	let b = 0, k = d.length, x = 0;
	i.progress?.(0, d.length, Si), Promise.all(Array.from({ length: Math.min(w.size, d.length) }, async () => {
		for (; b < k;) {
			const t = b++;
			try {
				y[t].resolve(await w.run(l, d[t].map((e) => e.id), v)), i.progress?.(++x, d.length, Si);
			} catch (e) {
				k = Math.min(k, t), y[t].reject(e);
			}
		}
	}));
	try {
		for (const e of y) {
			a?.throwIfAborted();
			const t = await e.promise;
			u.push(t.part);
			for (const e of t.reports) c.add(e);
			p.push(...t.physicalActivityRows), m.push(...t.eventMarkerRows), g ||= t.circadianDegraded;
		}
	} finally {
		k = 0;
	}
	i.progress?.(0, 0, Ii), a?.throwIfAborted();
	const M = function(e) {
		return {
			sleepRows: e.flatMap((e) => e.sleepRows),
			nonwearRows: e.flatMap((e) => e.nonwearRows),
			summaryRows: e.flatMap((e) => e.summaryRows),
			degradations: e.flatMap((e) => e.degradations).slice(0, 1),
			nightReasons: e.flatMap((e) => e.nightReasons ?? [])
		};
	}(u), S = {}, I = function(e) {
		const t = Do(e, Ao.audit);
		if (0 === t.ggirResultsBundles.length) return null;
		const n = [...t.auditLog].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
		return new TextEncoder().encode(n.map((e) => JSON.stringify(e)).join("\n") + (n.length ? "\n" : ""));
	}(l);
	I && (S["audit_log.jsonl"] = I);
	const T = {
		fileIds: t.fileIds,
		dateRange: t.dateRange,
		username: t.username,
		signal: a
	}, R = [];
	for (const r of Sa) R.push(await r.produceEntries(T, zo(l), Q(a)));
	const A = Do(l, Ao.manifest), E = Object.fromEntries(M.sleepRows.filter((e) => e.algorithm && e.algorithmVersion).map((e) => [e.algorithm, e.algorithmVersion]));
	g ||= M.sleepRows.some((e) => null == e.l5Hour || null == e.m10Hour);
	const C = [...g ? [{
		component: "circadian_analysis",
		code: "unavailable",
		message: "Circadian analysis was unavailable for one or more selected days. L5 and M10 fields are blank where unavailable."
	}] : [], ...M.degradations], $ = function(e, t) {
		const n = {}, i = {}, r = {}, s = new Map(t.map((e) => [e.fileId, e]));
		for (const a of e) {
			const e = s.get(a.fileId), t = void 0 === e?.notApplied ? a.ggirCorrections ?? e?.ggirCorrections : void 0;
			if (!t) {
				void 0 !== e?.notApplied && (r[String(a.fileId)] = e.notApplied);
				continue;
			}
			const { notApplied: o, ...l } = t;
			n[String(a.fileId)] = l;
			const c = i[t.profile] ??= { notApplied: [] };
			for (const n of o ?? []) c.notApplied.some((e) => e.correction === n.correction) || c.notApplied.push({ ...n });
		}
		return {
			ggirCorrections: n,
			ggirCorrectionProfiles: i,
			ggirCorrectionsNotApplied: r
		};
	}(A.ggirResultsBundles, A.ggirCorrectedValues), O = await Al(null, "reading saved GGIR source provenance", () => async function(e, t) {
		const n = /* @__PURE__ */ new Map();
		return Object.fromEntries(await Promise.all(e.map(async (e) => {
			return [String(e.fileId), await (i = e.configCsv, n.get(i) ?? n.set(i, (async (e) => {
				const [n, i] = await Promise.all([t.ggirAppConfigSummary(e, !1), t.ggirNonwearApproach(e)]);
				return {
					configGgirVersion: n.configGgirVersion,
					nonwearApproach: i ?? null
				};
			})(i)).get(i))];
			var i;
		})));
	}(A.ggirResultsBundles, Q(a))), L = [...c.streamEntries()], j = await _o({
		artifacts: {
			importRefusalReasons: [
				...Ml(l),
				...hl(l),
				...fl(l),
				...M.nightReasons ?? []
			],
			...M,
			physicalActivityRows: p,
			physicalActivityEnabledClasses: t.physicalActivity.enabledClasses,
			physicalActivityNonwearAsClass: t.physicalActivity.nonwearAsClass,
			ggirEntries: S,
			eventMarkerRows: m,
			...Object.assign({}, ...R.map((e) => e.artifacts))
		},
		extraEntries: L,
		options: t,
		manifest: {
			...t.manifest,
			physicalActivity: t.physicalActivity,
			exportedAt: f,
			algorithmVersions: E,
			degradations: C,
			ggirSources: O,
			...$,
			executionAttestationIds: A.localExecutions.map((e) => e.attestationId),
			diaryTemporalPolicyByFile: Object.fromEntries(A.files.map((e) => [String(e.id), Object.fromEntries(A.diaryEntries.filter((t) => t.fileId === e.id).map((e) => [e.analysisDate, e.importMappingProvenance?.diaryTemporalPolicy ?? null]))]))
		},
		entryStreams: Object.assign({}, ...R.map((e) => e.streams)),
		scratchId: n,
		...a ? { signal: a } : {},
		...w.deflate ? { deflate: w.deflate } : {},
		...w.hash ? { hash: w.hash } : {},
		...i.progress ? { progress: i.progress } : {}
	});
	return {
		...j,
		...Object.assign({}, ...R.map((e) => e.receipt())),
		degradations: C,
		ggirCorrected: gl($),
		hasData: M.sleepRows.length > 0 || M.nonwearRows.length > 0 || p.length > 0 || j.entries.some((e) => L.some((t) => t.name === e.name)) || Object.keys(S).length > 0,
		rowCount: M.sleepRows.length + M.nonwearRows.length + M.summaryRows.length + p.length,
		dayCount: (/* @__PURE__ */ new Set([
			...M.sleepRows.map((e) => e.studyDate),
			...M.nonwearRows.map((e) => e.studyDate),
			...p.map((e) => e.analysisDate)
		])).size,
		fileCount: l.files.length
	};
}
async function Al(e, t, n) {
	try {
		return await n();
	} catch (i) {
		if (i instanceof DOMException && "AbortError" === i.name) throw i;
		throw new vi(e, t, i);
	}
}
function El(e, t = /* @__PURE__ */ new Set()) {
	if (e instanceof ArrayBuffer) t.add(e);
	else if (ArrayBuffer.isView(e)) t.add(e.buffer);
	else if (e && "object" == typeof e) for (const n of Object.values(e)) El(n, t);
	return [...t];
}
function Nl(e) {
	const t = [], n = [], i = [];
	let r;
	const s = new Promise((e, t) => {
		r = t;
	});
	s.catch(() => {});
	const a = (e) => {
		const t = e.message;
		r(/* @__PURE__ */ new Error(`An export shard stopped before finishing its work: ${"messageerror" === e.type ? "a message from it could not be read" : t?.length ? t : "its script failed to load"}.`));
	}, o = async (r) => {
		const o = await (() => {
			const r = n.pop();
			if (r) return Promise.resolve(r);
			if (t.length < e) {
				const e = new Worker(new URL("/sleep-scoring-wasm/assets/local-export-shard-worker-Bc5pptxZ.js", "" + import.meta.url), { type: "module" });
				return e.addEventListener("error", a), e.addEventListener("messageerror", a), t.push(e), Promise.resolve(L(e));
			}
			return new Promise((e) => {
				i.push(e);
			});
		})();
		try {
			return await Promise.race([r(o), s]);
		} finally {
			const e = i.shift();
			e ? e(o) : n.push(o);
		}
	};
	return {
		runner: {
			size: e,
			run: (e, t, n) => o(async (i) => {
				const r = function(e, t) {
					const n = Eo.get(e);
					if (!n) throw new jo("Export requires a captured input snapshot");
					const i = new Set(wl.flatMap((e) => Object.keys(Ao[e])));
					return Object.fromEntries([...i].map((e) => [e, (n[e] ?? []).filter((n) => "studySettings" === e || t.includes("files" === e ? n.id : n.fileId)).map(Oo)]));
				}(e, t), s = await i.group(t, h(r, El(r)), n);
				if ("failure" in s) throw vi.fromWire(s.failure);
				return s.result;
			}),
			deflate: {
				lanes: e,
				block: (e, t) => o((n) => n.deflate(h(e, [e.buffer]), h(t, [t.buffer])))
			}
		},
		terminate: () => {
			for (const e of t) e.terminate();
		}
	};
}
new Set(Ia.filter((e) => "streamed" === e.write.kind).map((e) => e.entry));
C(ut), ce({ async build(e, t, n, i) {
	const r = new G(e), s = Nl(Math.max(1, Math.min(8, (navigator.hardwareConcurrency || 2) - 2))), a = function() {
		let e;
		return {
			hash: () => {
				const { api: t } = e ??= ne({ singleThread: !0 });
				return function(e) {
					const t = [], n = (e) => {
						e.catch(() => {}), t.push(e);
					};
					return n(e.sha256Start()), {
						async hashChunk(i, r) {
							r?.throwIfAborted(), n(e.sha256Feed(i.slice())), t.length > 8 && await t.shift();
						},
						hexDigest: async (n) => (await Promise.all(t.splice(0)), n?.throwIfAborted(), e.sha256Finish())
					};
				}({
					sha256Start: () => t.sha256Start(),
					sha256Feed: (e) => t.sha256Feed(h(e, [e.buffer])),
					sha256Finish: () => t.sha256Finish()
				});
			},
			terminate: () => {
				e?.terminate();
			}
		};
	}();
	let o;
	try {
		return o = await (await (await go(n)).getFileHandle("inputs.bin", { create: !0 })).createSyncAccessHandle(), await r.open(), await Rl(r, t, n, {
			...i ? { progress: i } : {},
			binaryStore: o,
			groups: {
				...s.runner,
				hash: a.hash
			}
		});
	} catch (l) {
		if (l instanceof vi) return { failure: l.wire };
		if (l instanceof xi) return { entryWriteFailure: l.entry };
		throw l;
	} finally {
		s.terminate(), a.terminate(), o?.close(), r.close();
	}
} });
export { cn as $, Ui as A, Gn as B, ar as C, tr as D, Vi as E, Ni as F, bn as G, On as H, Ci as I, hn as J, yn as K, Ei as L, Zi as M, Ji as N, Xi as O, nr as P, dn as Q, zn as R, rr as S, qi as T, Nn as U, Wn as V, Mn as W, kn as X, Tn as Y, an as Z, ra as _, al as a, Xr as b, rl as c, Wo as d, pn as et, Fo as f, Xs as g, ta as h, Zo as i, Qi as j, sr as k, Ao as l, Zs as m, el as n, gt as nt, il as o, Qs as p, In as q, Xo as r, sl as s, ll as t, mt as tt, Do as u, ia as v, or as w, Oi as x, Fr as y, Fn as z };
