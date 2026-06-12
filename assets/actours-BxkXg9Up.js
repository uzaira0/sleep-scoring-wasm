var e = class e {
	static __wrap(n) {
		n >>>= 0;
		const t = Object.create(e.prototype);
		return t.__wbg_ptr = n, q.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return this.__wbg_ptr = 0, q.unregister(this), e;
	}
	free() {
		const e = this.__destroy_into_raw();
		le.__wbg_streamchunkresult_free(e, 0);
	}
	get anglez5s() {
		const e = le.streamchunkresult_anglez5s(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisX() {
		const e = le.streamchunkresult_axisX(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisY() {
		const e = le.streamchunkresult_axisY(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisZ() {
		const e = le.streamchunkresult_axisZ(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get counts() {
		const e = le.streamchunkresult_counts(this.__wbg_ptr);
		var n = X(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get counts5s() {
		const e = le.streamchunkresult_counts5s(this.__wbg_ptr);
		var n = X(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get enmo5s() {
		const e = le.streamchunkresult_enmo5s(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get headerRowsSkipped() {
		return le.streamchunkresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rowCount() {
		return le.streamchunkresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get rowsDropped() {
		return le.streamchunkresult_rowsDropped(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return le.streamchunkresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get tempCounts() {
		const e = le.streamchunkresult_tempCounts(this.__wbg_ptr);
		var n = X(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 4 * e[1], 4), n;
	}
	get temperature() {
		const e = le.streamchunkresult_temperature(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs() {
		const e = le.streamchunkresult_timestampsMs(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs5s() {
		const e = le.streamchunkresult_timestampsMs5s(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get vectorMagnitude() {
		const e = le.streamchunkresult_vectorMagnitude(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var n = class e {
	static __wrap(n) {
		n >>>= 0;
		const t = Object.create(e.prototype);
		return t.__wbg_ptr = n, $.register(t, t.__wbg_ptr, t), t;
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return this.__wbg_ptr = 0, $.unregister(this), e;
	}
	free() {
		const e = this.__destroy_into_raw();
		le.__wbg_streamparseresult_free(e, 0);
	}
	get axisX() {
		const e = le.streamparseresult_axisX(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisY() {
		const e = le.streamparseresult_axisY(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get axisZ() {
		const e = le.streamparseresult_axisZ(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get headerRowsSkipped() {
		return le.streamparseresult_headerRowsSkipped(this.__wbg_ptr) >>> 0;
	}
	get rowCount() {
		return le.streamparseresult_rowCount(this.__wbg_ptr) >>> 0;
	}
	get sampleFrequency() {
		return le.streamparseresult_sampleFrequency(this.__wbg_ptr) >>> 0;
	}
	get temperature() {
		const e = le.streamparseresult_temperature(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get timestampsMs() {
		const e = le.streamparseresult_timestampsMs(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
	get vectorMagnitude() {
		const e = le.streamparseresult_vectorMagnitude(this.__wbg_ptr);
		var n = T(e[0], e[1]).slice();
		return le.__wbindgen_free(e[0], 8 * e[1], 8), n;
	}
};
function t(e, n, t, r) {
	const _ = ie(e, le.__wbindgen_malloc), i = be, o = ie(n, le.__wbindgen_malloc), s = be, c = ie(t, le.__wbindgen_malloc), a = be, u = le.computeAnglez5s(_, i, o, s, c, a, r);
	var f = T(u[0], u[1]).slice();
	return le.__wbindgen_free(u[0], 8 * u[1], 8), f;
}
function r(e, n, t, r) {
	const _ = ie(e, le.__wbindgen_malloc), i = be, o = ie(n, le.__wbindgen_malloc), s = be, c = ie(t, le.__wbindgen_malloc), a = be, u = le.computeEnmo5s(_, i, o, s, c, a, r);
	var f = T(u[0], u[1]).slice();
	return le.__wbindgen_free(u[0], 8 * u[1], 8), f;
}
function _(e, n, t) {
	const r = _e(e, le.__wbindgen_malloc), _ = be, i = ie(n, le.__wbindgen_malloc), o = be, s = le.computeSleepMetrics(r, _, i, o, t);
	if (s[2]) throw se(s[1]);
	return se(s[0]);
}
function i(e) {
	const n = _e(e, le.__wbindgen_malloc), t = be;
	le.csvBufferAppend(n, t);
}
function o(e) {
	le.csvBufferClear(e);
}
function s(e, n) {
	const t = ie(e, le.__wbindgen_malloc), r = be, _ = ie(n, le.__wbindgen_malloc), i = be, o = le.detectDetach(t, r, _, i);
	if (o[3]) throw se(o[2]);
	var s = Y(o[0], o[1]).slice();
	return le.__wbindgen_free(o[0], 1 * o[1], 1), s;
}
function c(e) {
	const n = ie(e, le.__wbindgen_malloc), t = be;
	return le.detectHdcza(n, t);
}
function a(e) {
	const n = ie(e, le.__wbindgen_malloc), t = be, r = le.detectNonwear(n, t);
	var _ = Y(r[0], r[1]).slice();
	return le.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function u(e) {
	const n = ie(e, le.__wbindgen_malloc), t = be, r = le.detectNonwearChoi2011(n, t);
	var _ = Y(r[0], r[1]).slice();
	return le.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function f(e) {
	const n = ie(e, le.__wbindgen_malloc), t = be, r = le.detectNonwearChoi2011Bouts(n, t);
	if (r[2]) throw se(r[1]);
	return se(r[0]);
}
function l(e) {
	const n = ie(e, le.__wbindgen_malloc), t = be, r = le.detectNonwearChoi2012(n, t);
	var _ = Y(r[0], r[1]).slice();
	return le.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function b(e) {
	const n = ie(e, le.__wbindgen_malloc), t = be, r = le.detectNonwearChoi2012Bouts(n, t);
	if (r[2]) throw se(r[1]);
	return se(r[0]);
}
function g(e) {
	const n = ie(e, le.__wbindgen_malloc), t = be, r = le.detectNonwearChoiBouts(n, t);
	if (r[2]) throw se(r[1]);
	return se(r[0]);
}
function w(e, n, t, r, _) {
	const i = ie(e, le.__wbindgen_malloc), o = be, s = ie(n, le.__wbindgen_malloc), c = be, a = ie(t, le.__wbindgen_malloc), u = be, f = ie(r, le.__wbindgen_malloc), l = be, b = le.epochRawData(i, o, s, c, a, u, f, l, _);
	if (b[2]) throw se(b[1]);
	return se(b[0]);
}
function d(e, n, t) {
	const r = ie(e, le.__wbindgen_malloc), _ = be, i = ie(n, le.__wbindgen_malloc), o = be, s = le.epochWithBandpass(r, _, i, o, t);
	if (s[2]) throw se(s[1]);
	return se(s[0]);
}
function p(e) {
	const n = _e(e, le.__wbindgen_malloc), t = be, r = le.extractCapsense(n, t);
	if (r[2]) throw se(r[1]);
	return se(r[0]);
}
function m() {
	le.installPanicHook();
}
function h(e) {
	const n = _e(e, le.__wbindgen_malloc), t = be;
	return 0 !== le.isGeneactivFormat(n, t);
}
function y(e, n, t, r, _) {
	const i = ie(e, le.__wbindgen_malloc), o = be, s = ie(n, le.__wbindgen_malloc), c = be, a = ie(t, le.__wbindgen_malloc), u = be, f = le.neishabouriCounts(i, o, s, c, a, u, r, _);
	if (f[2]) throw se(f[1]);
	return se(f[0]);
}
function v(e, n) {
	const t = _e(e, le.__wbindgen_malloc), r = be, _ = le.parseActigraphCsv(t, r, n);
	if (_[2]) throw se(_[1]);
	return se(_[0]);
}
function A(e) {
	const n = le.parseActigraphCsvBuffered(e);
	if (n[2]) throw se(n[1]);
	return se(n[0]);
}
function k(e) {
	const n = _e(e, le.__wbindgen_malloc), t = be, r = le.parseGeneactivBin(n, t);
	if (r[2]) throw se(r[1]);
	return se(r[0]);
}
function x(e) {
	const n = _e(e, le.__wbindgen_malloc), t = be, r = le.parseGeneactivCsv(n, t);
	if (r[2]) throw se(r[1]);
	return se(r[0]);
}
function S() {
	const e = le.parseGeneactivCsvBuffered();
	if (e[2]) throw se(e[1]);
	return se(e[0]);
}
function C(e) {
	const n = _e(e, le.__wbindgen_malloc), t = be, r = le.parseGt3x(n, t);
	if (r[2]) throw se(r[1]);
	return se(r[0]);
}
function F(e) {
	const n = _e(e, le.__wbindgen_malloc), t = be, r = le.processGt3xFull(n, t);
	if (r[2]) throw se(r[1]);
	return se(r[0]);
}
function I(e, n) {
	const t = le.runFullPipeline(e, n);
	if (t[2]) throw se(t[1]);
	return se(t[0]);
}
function j(e, n) {
	const t = le.runGgirFromEpoch(e, n);
	if (t[2]) throw se(t[1]);
	return se(t[0]);
}
function M(e) {
	const n = le.scoreAllDays(e);
	if (n[2]) throw se(n[1]);
	return se(n[0]);
}
function R(e, n) {
	const t = ie(e, le.__wbindgen_malloc), r = be, _ = le.scoreColeKripke(t, r, n);
	var i = Y(_[0], _[1]).slice();
	return le.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function B(e) {
	const n = le.scoreConsensusMajority(e);
	if (n[2]) throw se(n[1]);
	return se(n[0]);
}
function O(e) {
	const n = ie(e, le.__wbindgen_malloc), t = be, r = le.scoreGgirHasib(n, t);
	var _ = Y(r[0], r[1]).slice();
	return le.__wbindgen_free(r[0], 1 * r[1], 1), _;
}
function W(e, n, t) {
	const r = ie(e, le.__wbindgen_malloc), _ = be, i = ie(n, le.__wbindgen_malloc), o = be, s = le.scoreGgirSib(r, _, i, o, t);
	if (s[2]) throw se(s[1]);
	return se(s[0]);
}
function N(e, n) {
	const t = ie(e, le.__wbindgen_malloc), r = be, _ = le.scoreSadeh(t, r, n);
	var i = Y(_[0], _[1]).slice();
	return le.__wbindgen_free(_[0], 1 * _[1], 1), i;
}
function U(e) {
	const n = _e(e, le.__wbindgen_malloc), t = be;
	return le.streamParseFeed(n, t) >>> 0;
}
function z() {
	const e = le.streamParseFinish();
	return n.__wrap(e);
}
function D() {
	const n = le.streamParseFinishChunk();
	return e.__wrap(n);
}
function E(e, n) {
	le.streamParseStart(e, n);
}
function G(e, n) {
	le.streamParseStartData(e, n);
}
function P() {
	return {
		__proto__: null,
		"./actours_bg.js": {
			__proto__: null,
			__wbg_Error_960c155d3d49e4c2: function(e, n) {
				return Error(V(e, n));
			},
			__wbg_Number_32bf70a599af1d4b: function(e) {
				return Number(e);
			},
			__wbg_String_8564e559799eccda: function(e, n) {
				const t = oe(String(n), le.__wbindgen_malloc, le.__wbindgen_realloc), r = be;
				H().setInt32(e + 4, r, !0), H().setInt32(e + 0, t, !0);
			},
			__wbg___wbindgen_bigint_get_as_i64_3d3aba5d616c6a51: function(e, n) {
				const t = "bigint" == typeof n ? n : void 0;
				H().setBigInt64(e + 8, re(t) ? BigInt(0) : t, !0), H().setInt32(e + 0, !re(t), !0);
			},
			__wbg___wbindgen_boolean_get_6ea149f0a8dcc5ff: function(e) {
				const n = "boolean" == typeof e ? e : void 0;
				return re(n) ? 16777215 : n ? 1 : 0;
			},
			__wbg___wbindgen_debug_string_ab4b34d23d6778bd: function(e, n) {
				const t = oe(L(n), le.__wbindgen_malloc, le.__wbindgen_realloc), r = be;
				H().setInt32(e + 4, r, !0), H().setInt32(e + 0, t, !0);
			},
			__wbg___wbindgen_in_a5d8b22e52b24dd1: function(e, n) {
				return e in n;
			},
			__wbg___wbindgen_is_bigint_ec25c7f91b4d9e93: function(e) {
				return "bigint" == typeof e;
			},
			__wbg___wbindgen_is_function_3baa9db1a987f47d: function(e) {
				return "function" == typeof e;
			},
			__wbg___wbindgen_is_null_52ff4ec04186736f: function(e) {
				return null === e;
			},
			__wbg___wbindgen_is_object_63322ec0cd6ea4ef: function(e) {
				return "object" == typeof e && null !== e;
			},
			__wbg___wbindgen_is_undefined_29a43b4d42920abd: function(e) {
				return void 0 === e;
			},
			__wbg___wbindgen_jsval_eq_d3465d8a07697228: function(e, n) {
				return e === n;
			},
			__wbg___wbindgen_jsval_loose_eq_cac3565e89b4134c: function(e, n) {
				return e == n;
			},
			__wbg___wbindgen_number_get_c7f42aed0525c451: function(e, n) {
				const t = "number" == typeof n ? n : void 0;
				H().setFloat64(e + 8, re(t) ? 0 : t, !0), H().setInt32(e + 0, !re(t), !0);
			},
			__wbg___wbindgen_string_get_7ed5322991caaec5: function(e, n) {
				const t = "string" == typeof n ? n : void 0;
				var r = re(t) ? 0 : oe(t, le.__wbindgen_malloc, le.__wbindgen_realloc), _ = be;
				H().setInt32(e + 4, _, !0), H().setInt32(e + 0, r, !0);
			},
			__wbg___wbindgen_throw_6b64449b9b9ed33c: function(e, n) {
				throw new Error(V(e, n));
			},
			__wbg_call_14b169f759b26747: function() {
				return te(function(e, n) {
					return e.call(n);
				}, arguments);
			},
			__wbg_done_9158f7cc8751ba32: function(e) {
				return e.done;
			},
			__wbg_error_a6fa202b58aa1cd3: function(e, n) {
				let t, r;
				try {
					t = e, r = n, console.error(V(e, n));
				} finally {
					le.__wbindgen_free(t, r, 1);
				}
			},
			__wbg_from_0dbf29f09e7fb200: function(e) {
				return Array.from(e);
			},
			__wbg_get_1affdbdd5573b16a: function() {
				return te(function(e, n) {
					return Reflect.get(e, n);
				}, arguments);
			},
			__wbg_get_unchecked_17f53dad852b9588: function(e, n) {
				return e[n >>> 0];
			},
			__wbg_get_with_ref_key_6412cf3094599694: function(e, n) {
				return e[n];
			},
			__wbg_instanceof_ArrayBuffer_7c8433c6ed14ffe3: function(e) {
				let n;
				try {
					n = e instanceof ArrayBuffer;
				} catch (t) {
					n = !1;
				}
				return n;
			},
			__wbg_instanceof_Uint8Array_152ba1f289edcf3f: function(e) {
				let n;
				try {
					n = e instanceof Uint8Array;
				} catch (t) {
					n = !1;
				}
				return n;
			},
			__wbg_isArray_c3109d14ffc06469: function(e) {
				return Array.isArray(e);
			},
			__wbg_isSafeInteger_4fc213d1989d6d2a: function(e) {
				return Number.isSafeInteger(e);
			},
			__wbg_iterator_013bc09ec998c2a7: function() {
				return Symbol.iterator;
			},
			__wbg_length_3d4ecd04bd8d22f1: function(e) {
				return e.length;
			},
			__wbg_length_9f1775224cf1d815: function(e) {
				return e.length;
			},
			__wbg_new_0c7403db6e782f19: function(e) {
				return new Uint8Array(e);
			},
			__wbg_new_227d7c05414eb861: function() {
				return /* @__PURE__ */ new Error();
			},
			__wbg_new_682678e2f47e32bc: function() {
				return new Array();
			},
			__wbg_new_aa8d0fa9762c29bd: function() {
				return /* @__PURE__ */ new Object();
			},
			__wbg_new_from_slice_3115b094b1002246: function(e, n) {
				return new Float64Array(T(e, n));
			},
			__wbg_new_from_slice_b5ea43e23f6008c0: function(e, n) {
				return new Uint8Array(Y(e, n));
			},
			__wbg_next_0340c4ae324393c3: function() {
				return te(function(e) {
					return e.next();
				}, arguments);
			},
			__wbg_next_7646edaa39458ef7: function(e) {
				return e.next;
			},
			__wbg_prototypesetcall_a6b02eb00b0f4ce2: function(e, n, t) {
				Uint8Array.prototype.set.call(Y(e, n), t);
			},
			__wbg_push_471a5b068a5295f6: function(e, n) {
				return e.push(n);
			},
			__wbg_set_022bee52d0b05b19: function() {
				return te(function(e, n, t) {
					return Reflect.set(e, n, t);
				}, arguments);
			},
			__wbg_set_3bf1de9fab0cd644: function(e, n, t) {
				e[n >>> 0] = t;
			},
			__wbg_set_6be42768c690e380: function(e, n, t) {
				e[n] = t;
			},
			__wbg_stack_3b0d974bbf31e44f: function(e, n) {
				const t = oe(n.stack, le.__wbindgen_malloc, le.__wbindgen_realloc), r = be;
				H().setInt32(e + 4, r, !0), H().setInt32(e + 0, t, !0);
			},
			__wbg_value_ee3a06f4579184fa: function(e) {
				return e.value;
			},
			__wbindgen_cast_0000000000000001: function(e) {
				return e;
			},
			__wbindgen_cast_0000000000000002: function(e, n) {
				return Y(e, n);
			},
			__wbindgen_cast_0000000000000003: function(e, n) {
				return V(e, n);
			},
			__wbindgen_cast_0000000000000004: function(e) {
				return BigInt.asUintN(64, e);
			},
			__wbindgen_init_externref_table: function() {
				const e = le.__wbindgen_externrefs, n = e.grow(4);
				e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
			}
		}
	};
}
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
const q = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((e) => le.__wbg_streamchunkresult_free(e >>> 0, 1)), $ = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((e) => le.__wbg_streamparseresult_free(e >>> 0, 1));
function L(e) {
	const n = typeof e;
	if ("number" == n || "boolean" == n || null == e) return `${e}`;
	if ("string" == n) return `"${e}"`;
	if ("symbol" == n) {
		const n = e.description;
		return null == n ? "Symbol" : `Symbol(${n})`;
	}
	if ("function" == n) {
		const n = e.name;
		return "string" == typeof n && n.length > 0 ? `Function(${n})` : "Function";
	}
	if (Array.isArray(e)) {
		const n = e.length;
		let t = "[";
		n > 0 && (t += L(e[0]));
		for (let r = 1; r < n; r++) t += ", " + L(e[r]);
		return t += "]", t;
	}
	const t = /\[object ([^\]]+)\]/.exec(toString.call(e));
	let r;
	if (!(t && t.length > 1)) return toString.call(e);
	if (r = t[1], "Object" == r) try {
		return "Object(" + JSON.stringify(e) + ")";
	} catch (_) {
		return "Object";
	}
	return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : r;
}
function T(e, n) {
	return e >>>= 0, K().subarray(e / 8, e / 8 + n);
}
function X(e, n) {
	return e >>>= 0, (null !== Q && 0 !== Q.byteLength || (Q = new Uint32Array(le.memory.buffer)), Q).subarray(e / 4, e / 4 + n);
}
function Y(e, n) {
	return e >>>= 0, ne().subarray(e / 1, e / 1 + n);
}
let Z = null;
function H() {
	return (null === Z || !0 === Z.buffer.detached || void 0 === Z.buffer.detached && Z.buffer !== le.memory.buffer) && (Z = new DataView(le.memory.buffer)), Z;
}
let J = null;
function K() {
	return null !== J && 0 !== J.byteLength || (J = new Float64Array(le.memory.buffer)), J;
}
function V(e, n) {
	return function(e, n) {
		return ue += n, ue >= ae && (ce = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), ce.decode(), ue = n), ce.decode(ne().subarray(e, e + n));
	}(e >>>= 0, n);
}
let Q = null, ee = null;
function ne() {
	return null !== ee && 0 !== ee.byteLength || (ee = new Uint8Array(le.memory.buffer)), ee;
}
function te(e, n) {
	try {
		return e.apply(this, n);
	} catch (t) {
		const e = function(e) {
			const n = le.__externref_table_alloc();
			return le.__wbindgen_externrefs.set(n, e), n;
		}(t);
		le.__wbindgen_exn_store(e);
	}
}
function re(e) {
	return null == e;
}
function _e(e, n) {
	const t = n(1 * e.length, 1) >>> 0;
	return ne().set(e, t / 1), be = e.length, t;
}
function ie(e, n) {
	const t = n(8 * e.length, 8) >>> 0;
	return K().set(e, t / 8), be = e.length, t;
}
function oe(e, n, t) {
	if (void 0 === t) {
		const t = fe.encode(e), r = n(t.length, 1) >>> 0;
		return ne().subarray(r, r + t.length).set(t), be = t.length, r;
	}
	let r = e.length, _ = n(r, 1) >>> 0;
	const i = ne();
	let o = 0;
	for (; o < r; o++) {
		const n = e.charCodeAt(o);
		if (n > 127) break;
		i[_ + o] = n;
	}
	if (o !== r) {
		0 !== o && (e = e.slice(o)), _ = t(_, r, r = o + 3 * e.length, 1) >>> 0;
		const n = ne().subarray(_ + o, _ + r);
		o += fe.encodeInto(e, n).written, _ = t(_, r, o, 1) >>> 0;
	}
	return be = o, _;
}
function se(e) {
	const n = le.__wbindgen_externrefs.get(e);
	return le.__externref_table_dealloc(e), n;
}
let ce = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
ce.decode();
const ae = 2146435072;
let ue = 0;
const fe = new TextEncoder();
"encodeInto" in fe || (fe.encodeInto = function(e, n) {
	const t = fe.encode(e);
	return n.set(t), {
		read: e.length,
		written: t.length
	};
});
let le, be = 0;
function ge(e, n) {
	return le = e.exports, Z = null, J = null, Q = null, ee = null, le.__wbindgen_start(), le;
}
function we(e) {
	if (void 0 !== le) return le;
	void 0 !== e && (Object.getPrototypeOf(e) === Object.prototype ? {module: e} = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const n = P();
	return e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)), ge(new WebAssembly.Instance(e, n));
}
async function de(e) {
	if (void 0 !== le) return le;
	void 0 !== e && (Object.getPrototypeOf(e) === Object.prototype ? {module_or_path: e} = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === e && (e = new URL("/sleep-scoring-wasm/assets/actours_bg-s5bdSfb-.wasm", "" + import.meta.url));
	const n = P();
	("string" == typeof e || "function" == typeof Request && e instanceof Request || "function" == typeof URL && e instanceof URL) && (e = fetch(e));
	const { instance: t, module: r } = await async function(e, n) {
		if ("function" == typeof Response && e instanceof Response) {
			if ("function" == typeof WebAssembly.instantiateStreaming) try {
				return await WebAssembly.instantiateStreaming(e, n);
			} catch (t) {
				if (!e.ok || !function(e) {
					switch (e) {
						case "basic":
						case "cors":
						case "default": return !0;
					}
					return !1;
				}(e.type) || "application/wasm" === e.headers.get("Content-Type")) throw t;
				console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t);
			}
			const r = await e.arrayBuffer();
			return await WebAssembly.instantiate(r, n);
		}
		{
			const t = await WebAssembly.instantiate(e, n);
			return t instanceof WebAssembly.Instance ? {
				instance: t,
				module: e
			} : t;
		}
	}(await e, n);
	return ge(t);
}
export { e as StreamChunkResult, n as StreamParseResult, t as computeAnglez5s, r as computeEnmo5s, _ as computeSleepMetrics, i as csvBufferAppend, o as csvBufferClear, de as default, s as detectDetach, c as detectHdcza, a as detectNonwear, u as detectNonwearChoi2011, f as detectNonwearChoi2011Bouts, l as detectNonwearChoi2012, b as detectNonwearChoi2012Bouts, g as detectNonwearChoiBouts, w as epochRawData, d as epochWithBandpass, p as extractCapsense, we as initSync, m as installPanicHook, h as isGeneactivFormat, y as neishabouriCounts, v as parseActigraphCsv, A as parseActigraphCsvBuffered, k as parseGeneactivBin, x as parseGeneactivCsv, S as parseGeneactivCsvBuffered, C as parseGt3x, F as processGt3xFull, I as runFullPipeline, j as runGgirFromEpoch, M as scoreAllDays, R as scoreColeKripke, B as scoreConsensusMajority, O as scoreGgirHasib, W as scoreGgirSib, N as scoreSadeh, U as streamParseFeed, z as streamParseFinish, D as streamParseFinishChunk, E as streamParseStart, G as streamParseStartData };
