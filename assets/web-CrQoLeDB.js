var t = class t {
	static __wrap(e) {
		const r = Object.create(t.prototype);
		return r.__wbg_ptr = e, q.register(r, r.__wbg_ptr, r), r;
	}
	__destroy_into_raw() {
		const t = this.__wbg_ptr;
		return this.__wbg_ptr = 0, q.unregister(this), t;
	}
	free() {
		const t = this.__destroy_into_raw();
		Y.__wbg_asyncparseriterator_free(t, 0);
	}
	next() {
		return Y.asyncparseriterator_next(this.__wbg_ptr);
	}
};
Symbol.dispose && (t.prototype[Symbol.dispose] = t.prototype.free);
var e = class t {
	static __wrap(e) {
		const r = Object.create(t.prototype);
		return r.__wbg_ptr = e, j.register(r, r.__wbg_ptr, r), r;
	}
	__destroy_into_raw() {
		const t = this.__wbg_ptr;
		return this.__wbg_ptr = 0, j.unregister(this), t;
	}
	free() {
		const t = this.__destroy_into_raw();
		Y.__wbg_blanknode_free(t, 0);
	}
	equals(t) {
		return 0 !== Y.blanknode_equals(this.__wbg_ptr, t);
	}
	get termType() {
		let t, e;
		try {
			const r = Y.blanknode_term_type(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	toString() {
		let t, e;
		try {
			const r = Y.blanknode_toString(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	get value() {
		let t, e;
		try {
			const r = Y.blanknode_value(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
};
Symbol.dispose && (e.prototype[Symbol.dispose] = e.prototype.free);
var r = class t {
	static __wrap(e) {
		const r = Object.create(t.prototype);
		return r.__wbg_ptr = e, z.register(r, r.__wbg_ptr, r), r;
	}
	__destroy_into_raw() {
		const t = this.__wbg_ptr;
		return this.__wbg_ptr = 0, z.unregister(this), t;
	}
	free() {
		const t = this.__destroy_into_raw();
		Y.__wbg_defaultgraph_free(t, 0);
	}
	equals(t) {
		return 0 !== Y.defaultgraph_equals(this.__wbg_ptr, t);
	}
	get termType() {
		let t, e;
		try {
			const r = Y.defaultgraph_term_type(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	toString() {
		let t, e;
		try {
			const r = Y.defaultgraph_toString(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	get value() {
		let t, e;
		try {
			const r = Y.defaultgraph_value(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
};
Symbol.dispose && (r.prototype[Symbol.dispose] = r.prototype.free);
var n = class t {
	static __wrap(e) {
		const r = Object.create(t.prototype);
		return r.__wbg_ptr = e, F.register(r, r.__wbg_ptr, r), r;
	}
	__destroy_into_raw() {
		const t = this.__wbg_ptr;
		return this.__wbg_ptr = 0, F.unregister(this), t;
	}
	free() {
		const t = this.__destroy_into_raw();
		Y.__wbg_literal_free(t, 0);
	}
	get datatype() {
		const t = Y.literal_datatype(this.__wbg_ptr);
		return _.__wrap(t);
	}
	get direction() {
		let t, e;
		try {
			const r = Y.literal_direction(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	equals(t) {
		return 0 !== Y.literal_equals(this.__wbg_ptr, t);
	}
	get language() {
		let t, e;
		try {
			const r = Y.literal_language(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	get termType() {
		let t, e;
		try {
			const r = Y.literal_term_type(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	toString() {
		let t, e;
		try {
			const r = Y.literal_toString(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	get value() {
		let t, e;
		try {
			const r = Y.literal_value(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
};
Symbol.dispose && (n.prototype[Symbol.dispose] = n.prototype.free);
var _ = class t {
	static __wrap(e) {
		const r = Object.create(t.prototype);
		return r.__wbg_ptr = e, x.register(r, r.__wbg_ptr, r), r;
	}
	__destroy_into_raw() {
		const t = this.__wbg_ptr;
		return this.__wbg_ptr = 0, x.unregister(this), t;
	}
	free() {
		const t = this.__destroy_into_raw();
		Y.__wbg_namednode_free(t, 0);
	}
	equals(t) {
		return 0 !== Y.namednode_equals(this.__wbg_ptr, t);
	}
	get termType() {
		let t, e;
		try {
			const r = Y.namednode_term_type(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	toString() {
		let t, e;
		try {
			const r = Y.namednode_toString(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	get value() {
		let t, e;
		try {
			const r = Y.namednode_value(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
};
Symbol.dispose && (_.prototype[Symbol.dispose] = _.prototype.free);
var i = class t {
	static __wrap(e) {
		const r = Object.create(t.prototype);
		return r.__wbg_ptr = e, O.register(r, r.__wbg_ptr, r), r;
	}
	__destroy_into_raw() {
		const t = this.__wbg_ptr;
		return this.__wbg_ptr = 0, O.unregister(this), t;
	}
	free() {
		const t = this.__destroy_into_raw();
		Y.__wbg_parseriterator_free(t, 0);
	}
	next() {
		const t = Y.parseriterator_next(this.__wbg_ptr);
		if (t[2]) throw J(t[1]);
		return o.__wrap(t[0]);
	}
};
Symbol.dispose && (i.prototype[Symbol.dispose] = i.prototype.free);
var o = class t {
	static __wrap(e) {
		const r = Object.create(t.prototype);
		return r.__wbg_ptr = e, k.register(r, r.__wbg_ptr, r), r;
	}
	__destroy_into_raw() {
		const t = this.__wbg_ptr;
		return this.__wbg_ptr = 0, k.unregister(this), t;
	}
	free() {
		const t = this.__destroy_into_raw();
		Y.__wbg_parseriteratorresult_free(t, 0);
	}
	get done() {
		return 0 !== Y.parseriteratorresult_done(this.__wbg_ptr);
	}
	get value() {
		const t = Y.parseriteratorresult_value(this.__wbg_ptr);
		return 0 === t ? void 0 : s.__wrap(t);
	}
};
Symbol.dispose && (o.prototype[Symbol.dispose] = o.prototype.free);
var s = class t {
	static __wrap(e) {
		const r = Object.create(t.prototype);
		return r.__wbg_ptr = e, A.register(r, r.__wbg_ptr, r), r;
	}
	__destroy_into_raw() {
		const t = this.__wbg_ptr;
		return this.__wbg_ptr = 0, A.unregister(this), t;
	}
	free() {
		const t = this.__destroy_into_raw();
		Y.__wbg_quad_free(t, 0);
	}
	equals(t) {
		return 0 !== Y.quad_equals(this.__wbg_ptr, t);
	}
	get graph() {
		return Y.quad_graph(this.__wbg_ptr);
	}
	get object() {
		return Y.quad_object(this.__wbg_ptr);
	}
	get predicate() {
		return Y.quad_predicate(this.__wbg_ptr);
	}
	get subject() {
		return Y.quad_subject(this.__wbg_ptr);
	}
	get termType() {
		let t, e;
		try {
			const r = Y.quad_term_type(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	toString() {
		let t, e;
		try {
			const r = Y.quad_toString(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	get value() {
		let t, e;
		try {
			const r = Y.quad_value(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
};
Symbol.dispose && (s.prototype[Symbol.dispose] = s.prototype.free);
var a = class {
	__destroy_into_raw() {
		const t = this.__wbg_ptr;
		return this.__wbg_ptr = 0, I.unregister(this), t;
	}
	free() {
		const t = this.__destroy_into_raw();
		Y.__wbg_store_free(t, 0);
	}
	add(t) {
		const e = Y.store_add(this.__wbg_ptr, t);
		if (e[1]) throw J(e[0]);
	}
	delete(t) {
		const e = Y.store_delete(this.__wbg_ptr, t);
		if (e[1]) throw J(e[0]);
	}
	dump(t, e) {
		let r, n;
		try {
			const o = Y.store_dump(this.__wbg_ptr, t, e);
			var _ = o[0], i = o[1];
			if (o[3]) throw _ = 0, i = 0, J(o[2]);
			return r = _, n = i, D(_, i);
		} finally {
			Y.__wbindgen_free(r, n, 1);
		}
	}
	has(t) {
		const e = Y.store_has(this.__wbg_ptr, t);
		if (e[2]) throw J(e[1]);
		return 0 !== e[0];
	}
	load(t, e, r, n) {
		const _ = Y.store_load(this.__wbg_ptr, t, e, r, n);
		if (_[1]) throw J(_[0]);
	}
	match(t, e, r, n) {
		const _ = Y.store_match(this.__wbg_ptr, t, e, r, n);
		if (_[3]) throw J(_[2]);
		var i = L(_[0], _[1]).slice();
		return Y.__wbindgen_free(_[0], 4 * _[1], 4), i;
	}
	constructor(t) {
		const e = Y.store_new(t);
		if (e[2]) throw J(e[1]);
		return this.__wbg_ptr = e[0], I.register(this, this.__wbg_ptr, this), this;
	}
	query(t, e) {
		const r = V(t, Y.__wbindgen_malloc, Y.__wbindgen_realloc), n = Z, _ = Y.store_query(this.__wbg_ptr, r, n, e);
		if (_[2]) throw J(_[1]);
		return J(_[0]);
	}
	get size() {
		const t = Y.store_size(this.__wbg_ptr);
		if (t[2]) throw J(t[1]);
		return t[0] >>> 0;
	}
	update(t, e) {
		const r = V(t, Y.__wbindgen_malloc, Y.__wbindgen_realloc), n = Z, _ = Y.store_update(this.__wbg_ptr, r, n, e);
		if (_[1]) throw J(_[0]);
	}
};
Symbol.dispose && (a.prototype[Symbol.dispose] = a.prototype.free);
var c = class t {
	static __wrap(e) {
		const r = Object.create(t.prototype);
		return r.__wbg_ptr = e, T.register(r, r.__wbg_ptr, r), r;
	}
	__destroy_into_raw() {
		const t = this.__wbg_ptr;
		return this.__wbg_ptr = 0, T.unregister(this), t;
	}
	free() {
		const t = this.__destroy_into_raw();
		Y.__wbg_variable_free(t, 0);
	}
	equals(t) {
		return 0 !== Y.variable_equals(this.__wbg_ptr, t);
	}
	get termType() {
		let t, e;
		try {
			const r = Y.variable_term_type(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	toString() {
		let t, e;
		try {
			const r = Y.variable_toString(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
	get value() {
		let t, e;
		try {
			const r = Y.variable_value(this.__wbg_ptr);
			return t = r[0], e = r[1], D(r[0], r[1]);
		} finally {
			Y.__wbindgen_free(t, e, 1);
		}
	}
};
function u(t) {
	var r = G(t) ? 0 : V(t, Y.__wbindgen_malloc, Y.__wbindgen_realloc), n = Z;
	const _ = Y.blankNode(r, n);
	if (_[2]) throw J(_[1]);
	return e.__wrap(_[0]);
}
function b() {
	const t = Y.defaultGraph();
	return r.__wrap(t);
}
function g(t) {
	const e = Y.fromQuad(t);
	if (e[2]) throw J(e[1]);
	return J(e[0]);
}
function l(t) {
	const e = Y.fromTerm(t);
	if (e[2]) throw J(e[1]);
	return J(e[0]);
}
function f(t, e) {
	var r = G(t) ? 0 : V(t, Y.__wbindgen_malloc, Y.__wbindgen_realloc), _ = Z;
	const i = Y.literal(r, _, e);
	if (i[2]) throw J(i[1]);
	return n.__wrap(i[0]);
}
function w() {
	Y.main();
}
function d(t) {
	const e = V(t, Y.__wbindgen_malloc, Y.__wbindgen_realloc), r = Z, n = Y.namedNode(e, r);
	if (n[2]) throw J(n[1]);
	return _.__wrap(n[0]);
}
function p(t, e) {
	const r = Y.parse(t, e);
	if (r[2]) throw J(r[1]);
	return J(r[0]);
}
function y(t, e, r, n) {
	const _ = Y.quad(t, e, r, n);
	if (_[2]) throw J(_[1]);
	return s.__wrap(_[0]);
}
function h(t, e, r) {
	const n = Y.triple(t, e, r);
	if (n[2]) throw J(n[1]);
	return s.__wrap(n[0]);
}
function m(t) {
	const e = V(t, Y.__wbindgen_malloc, Y.__wbindgen_realloc), r = Z, n = Y.variable(e, r);
	if (n[2]) throw J(n[1]);
	return c.__wrap(n[0]);
}
function v() {
	return {
		__proto__: null,
		"./web_bg.js": {
			__proto__: null,
			__wbg_Error_fdd633d4bb5dd76a: function(t, e) {
				return Error(D(t, e));
			},
			__wbg___wbindgen_debug_string_8a447059637473e2: function(t, e) {
				const r = V(E(e), Y.__wbindgen_malloc, Y.__wbindgen_realloc), n = Z;
				B().setInt32(t + 4, n, !0), B().setInt32(t + 0, r, !0);
			},
			__wbg___wbindgen_is_falsy_863e44ed68df4b26: function(t) {
				return !t;
			},
			__wbg___wbindgen_is_function_acc5528be2b923f2: function(t) {
				return "function" == typeof t;
			},
			__wbg___wbindgen_is_null_6d937fbfb6478470: function(t) {
				return null === t;
			},
			__wbg___wbindgen_is_object_0beba4a1980d3eea: function(t) {
				return "object" == typeof t && null !== t;
			},
			__wbg___wbindgen_is_string_1fca8072260dd261: function(t) {
				return "string" == typeof t;
			},
			__wbg___wbindgen_is_undefined_721f8decd50c87a3: function(t) {
				return void 0 === t;
			},
			__wbg___wbindgen_string_get_71bb4348194e31f0: function(t, e) {
				const r = "string" == typeof e ? e : void 0;
				var n = G(r) ? 0 : V(r, Y.__wbindgen_malloc, Y.__wbindgen_realloc), _ = Z;
				B().setInt32(t + 4, _, !0), B().setInt32(t + 0, n, !0);
			},
			__wbg___wbindgen_throw_ea4887a5f8f9a9db: function(t, e) {
				throw new Error(D(t, e));
			},
			__wbg__wbg_cb_unref_33c39e13d73b25f6: function(t) {
				t._wbg_cb_unref();
			},
			__wbg_asyncIterator_523a9858481ea9a3: function() {
				return Symbol.asyncIterator;
			},
			__wbg_asyncparseriterator_new: function(e) {
				return t.__wrap(e);
			},
			__wbg_blanknode_new: function(t) {
				return e.__wrap(t);
			},
			__wbg_call_5575218572ead796: function() {
				return C(function(t, e, r) {
					return t.call(e, r);
				}, arguments);
			},
			__wbg_call_8e98ed2f3c86c4b5: function() {
				return C(function(t, e) {
					return t.call(e);
				}, arguments);
			},
			__wbg_defaultgraph_new: function(t) {
				return r.__wrap(t);
			},
			__wbg_done_b62d4a7d2286852a: function(t) {
				return t.done;
			},
			__wbg_error_a6fa202b58aa1cd3: function(t, e) {
				let r, n;
				try {
					r = t, n = e, console.error(D(t, e));
				} finally {
					Y.__wbindgen_free(r, n, 1);
				}
			},
			__wbg_getRandomValues_3f44b700395062e5: function() {
				return C(function(t, e) {
					globalThis.crypto.getRandomValues(U(t, e));
				}, arguments);
			},
			__wbg_get_9a29be2cb383ed9a: function() {
				return C(function(t, e) {
					return Reflect.get(t, e);
				}, arguments);
			},
			__wbg_get_dddb90ff5d27a080: function() {
				return C(function(t, e) {
					return Reflect.get(t, e);
				}, arguments);
			},
			__wbg_has_4f060fe202ad7e87: function() {
				return C(function(t, e) {
					return Reflect.has(t, e);
				}, arguments);
			},
			__wbg_instanceof_Uint8Array_f080092dc70f5d58: function(t) {
				let e;
				try {
					e = t instanceof Uint8Array;
				} catch (r) {
					e = !1;
				}
				return e;
			},
			__wbg_iterator_cc47ba25a2be735a: function() {
				return Symbol.iterator;
			},
			__wbg_length_589238bdcf171f0e: function(t) {
				return t.length;
			},
			__wbg_literal_new: function(t) {
				return n.__wrap(t);
			},
			__wbg_namednode_new: function(t) {
				return _.__wrap(t);
			},
			__wbg_new_227d7c05414eb861: function() {
				return /* @__PURE__ */ new Error();
			},
			__wbg_new_3444eb7412549f0b: function() {
				return /* @__PURE__ */ new Map();
			},
			__wbg_new_36e147a8ced3c6e0: function() {
				return new Array();
			},
			__wbg_new_aafdf86a292b3ca7: function(t, e) {
				return new URIError(D(t, e));
			},
			__wbg_new_e66a4b7758dd2e5c: function(t, e) {
				return new Error(D(t, e));
			},
			__wbg_new_typed_00a409eb4ec4f2d9: function(t, e) {
				try {
					var r = {
						a: t,
						b: e
					};
					return new Promise((t, e) => {
						const n = r.a;
						r.a = 0;
						try {
							return function(t, e, r, n) {
								Y.wasm_bindgen__convert__closures_____invoke__h7d511748289f464d(t, e, r, n);
							}(n, r.b, t, e);
						} finally {
							r.a = n;
						}
					});
				} finally {
					r.a = 0;
				}
			},
			__wbg_next_0c4066e251d2eff9: function() {
				return C(function(t) {
					return t.next();
				}, arguments);
			},
			__wbg_next_402fa10b59ab20c3: function(t) {
				return t.next;
			},
			__wbg_next_e8d68f27c98c4764: function() {
				return C(function(t) {
					return t.next();
				}, arguments);
			},
			__wbg_now_d2e0afbad4edbe82: function() {
				return Date.now();
			},
			__wbg_parseriterator_new: function(t) {
				return i.__wrap(t);
			},
			__wbg_parseriteratorresult_new: function(t) {
				return o.__wrap(t);
			},
			__wbg_prototypesetcall_d721637c7ca66eb8: function(t, e, r) {
				Uint8Array.prototype.set.call(U(t, e), r);
			},
			__wbg_push_f724b5db8acf89d2: function(t, e) {
				return t.push(e);
			},
			__wbg_quad_new: function(t) {
				return s.__wrap(t);
			},
			__wbg_queueMicrotask_1c9b3800e321a967: function(t) {
				return t.queueMicrotask;
			},
			__wbg_queueMicrotask_311744e534a929a3: function(t) {
				queueMicrotask(t);
			},
			__wbg_resolve_d82363d90af6928a: function(t) {
				return Promise.resolve(t);
			},
			__wbg_set_4564f7dc44fcb0c9: function() {
				return C(function(t, e, r) {
					return Reflect.set(t, e, r);
				}, arguments);
			},
			__wbg_set_9a1d61e17de7054c: function(t, e, r) {
				return t.set(e, r);
			},
			__wbg_stack_3b0d974bbf31e44f: function(t, e) {
				const r = V(e.stack, Y.__wbindgen_malloc, Y.__wbindgen_realloc), n = Z;
				B().setInt32(t + 4, n, !0), B().setInt32(t + 0, r, !0);
			},
			__wbg_static_accessor_GLOBAL_THIS_2fee5048bcca5938: function() {
				const t = "undefined" == typeof globalThis ? null : globalThis;
				return G(t) ? 0 : W(t);
			},
			__wbg_static_accessor_GLOBAL_ce44e66a4935da8c: function() {
				const t = "undefined" == typeof global ? null : global;
				return G(t) ? 0 : W(t);
			},
			__wbg_static_accessor_SELF_44f6e0cb5e67cdad: function() {
				const t = "undefined" == typeof self ? null : self;
				return G(t) ? 0 : W(t);
			},
			__wbg_static_accessor_WINDOW_168f178805d978fe: function() {
				const t = "undefined" == typeof window ? null : window;
				return G(t) ? 0 : W(t);
			},
			__wbg_then_05edfc8a4fea5106: function(t, e, r) {
				return t.then(e, r);
			},
			__wbg_then_591b6b3a75ee817a: function(t, e) {
				return t.then(e);
			},
			__wbg_value_49f783bb59765962: function(t) {
				return t.value;
			},
			__wbg_variable_new: function(t) {
				return c.__wrap(t);
			},
			__wbg_warn_baec951c23a3aca4: function(t, e) {
				console.warn(D(t, e));
			},
			__wbindgen_cast_0000000000000001: function(t, e) {
				return function(t, e, r) {
					const n = {
						a: t,
						b: e,
						cnt: 1
					}, _ = (...t) => {
						n.cnt++;
						const e = n.a;
						n.a = 0;
						try {
							return r(e, n.b, ...t);
						} finally {
							n.a = e, _._wbg_cb_unref();
						}
					};
					return _._wbg_cb_unref = () => {
						0 === --n.cnt && (Y.__wbindgen_destroy_closure(n.a, n.b), n.a = 0, M.unregister(n));
					}, M.register(_, n, n), _;
				}(t, e, R);
			},
			__wbindgen_cast_0000000000000002: function(t, e) {
				return function(t, e, r) {
					const n = {
						a: t,
						b: e,
						cnt: 1
					}, _ = (...t) => {
						n.cnt++;
						try {
							return r(n.a, n.b, ...t);
						} finally {
							_._wbg_cb_unref();
						}
					};
					return _._wbg_cb_unref = () => {
						0 === --n.cnt && (Y.__wbindgen_destroy_closure(n.a, n.b), n.a = 0, M.unregister(n));
					}, M.register(_, n, n), _;
				}(t, e, S);
			},
			__wbindgen_cast_0000000000000003: function(t, e) {
				return D(t, e);
			},
			__wbindgen_cast_0000000000000004: function(t, e) {
				var r = L(t, e).slice();
				return Y.__wbindgen_free(t, 4 * e, 4), r;
			},
			__wbindgen_init_externref_table: function() {
				const t = Y.__wbindgen_externrefs, e = t.grow(4);
				t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, !0), t.set(e + 3, !1);
			}
		}
	};
}
function S(t, e) {
	return Y.wasm_bindgen__convert__closures_____invoke__h3f89ba00404b93a7(t, e);
}
function R(t, e, r) {
	const n = Y.wasm_bindgen__convert__closures_____invoke__h40096fcfa36cf41c(t, e, r);
	if (n[1]) throw J(n[0]);
}
Symbol.dispose && (c.prototype[Symbol.dispose] = c.prototype.free);
const q = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((t) => Y.__wbg_asyncparseriterator_free(t, 1)), j = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((t) => Y.__wbg_blanknode_free(t, 1)), z = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((t) => Y.__wbg_defaultgraph_free(t, 1)), F = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((t) => Y.__wbg_literal_free(t, 1)), x = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((t) => Y.__wbg_namednode_free(t, 1)), O = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((t) => Y.__wbg_parseriterator_free(t, 1)), k = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((t) => Y.__wbg_parseriteratorresult_free(t, 1)), A = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((t) => Y.__wbg_quad_free(t, 1)), I = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((t) => Y.__wbg_store_free(t, 1)), T = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((t) => Y.__wbg_variable_free(t, 1));
function W(t) {
	const e = Y.__externref_table_alloc();
	return Y.__wbindgen_externrefs.set(e, t), e;
}
const M = "undefined" == typeof FinalizationRegistry ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((t) => Y.__wbindgen_destroy_closure(t.a, t.b));
function E(t) {
	const e = typeof t;
	if ("number" == e || "boolean" == e || null == t) return `${t}`;
	if ("string" == e) return `"${t}"`;
	if ("symbol" == e) {
		const e = t.description;
		return null == e ? "Symbol" : `Symbol(${e})`;
	}
	if ("function" == e) {
		const e = t.name;
		return "string" == typeof e && e.length > 0 ? `Function(${e})` : "Function";
	}
	if (Array.isArray(t)) {
		const e = t.length;
		let r = "[";
		e > 0 && (r += E(t[0]));
		for (let n = 1; n < e; n++) r += ", " + E(t[n]);
		return r += "]", r;
	}
	const r = /\[object ([^\]]+)\]/.exec(toString.call(t));
	let n;
	if (!(r && r.length > 1)) return toString.call(t);
	if (n = r[1], "Object" == n) try {
		return "Object(" + JSON.stringify(t) + ")";
	} catch (_) {
		return "Object";
	}
	return t instanceof Error ? `${t.name}: ${t.message}\n${t.stack}` : n;
}
function L(t, e) {
	t >>>= 0;
	const r = B(), n = [];
	for (let _ = t; _ < t + 4 * e; _ += 4) n.push(Y.__wbindgen_externrefs.get(r.getUint32(_, !0)));
	return Y.__externref_drop_slice(t, e), n;
}
function U(t, e) {
	return t >>>= 0, P().subarray(t / 1, t / 1 + e);
}
let $ = null;
function B() {
	return (null === $ || !0 === $.buffer.detached || void 0 === $.buffer.detached && $.buffer !== Y.memory.buffer) && ($ = new DataView(Y.memory.buffer)), $;
}
function D(t, e) {
	return function(t, e) {
		return K += e, K >= Q && (H = new TextDecoder("utf-8", {
			ignoreBOM: !0,
			fatal: !0
		}), H.decode(), K = e), H.decode(P().subarray(t, t + e));
	}(t >>> 0, e);
}
let N = null;
function P() {
	return null !== N && 0 !== N.byteLength || (N = new Uint8Array(Y.memory.buffer)), N;
}
function C(t, e) {
	try {
		return t.apply(this, e);
	} catch (r) {
		const t = W(r);
		Y.__wbindgen_exn_store(t);
	}
}
function G(t) {
	return null == t;
}
function V(t, e, r) {
	if (void 0 === r) {
		const r = X.encode(t), n = e(r.length, 1) >>> 0;
		return P().subarray(n, n + r.length).set(r), Z = r.length, n;
	}
	let n = t.length, _ = e(n, 1) >>> 0;
	const i = P();
	let o = 0;
	for (; o < n; o++) {
		const e = t.charCodeAt(o);
		if (e > 127) break;
		i[_ + o] = e;
	}
	if (o !== n) {
		0 !== o && (t = t.slice(o)), _ = r(_, n, n = o + 3 * t.length, 1) >>> 0;
		const e = P().subarray(_ + o, _ + n);
		o += X.encodeInto(t, e).written, _ = r(_, n, o, 1) >>> 0;
	}
	return Z = o, _;
}
function J(t) {
	const e = Y.__wbindgen_externrefs.get(t);
	return Y.__externref_table_dealloc(t), e;
}
let H = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
H.decode();
const Q = 2146435072;
let K = 0;
const X = new TextEncoder();
"encodeInto" in X || (X.encodeInto = function(t, e) {
	const r = X.encode(t);
	return e.set(r), {
		read: t.length,
		written: r.length
	};
});
let Y, Z = 0;
function tt(t, e) {
	return Y = t.exports, $ = null, N = null, Y.__wbindgen_start(), Y;
}
function et(t) {
	if (void 0 !== Y) return Y;
	void 0 !== t && (Object.getPrototypeOf(t) === Object.prototype ? {module: t} = t : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
	const e = v();
	return t instanceof WebAssembly.Module || (t = new WebAssembly.Module(t)), tt(new WebAssembly.Instance(t, e));
}
async function rt(t) {
	if (void 0 !== Y) return Y;
	void 0 !== t && (Object.getPrototypeOf(t) === Object.prototype ? {module_or_path: t} = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 === t && (t = new URL("/sleep-scoring-wasm/assets/web_bg-CvbzJ0B-.wasm", "" + import.meta.url));
	const e = v();
	("string" == typeof t || "function" == typeof Request && t instanceof Request || "function" == typeof URL && t instanceof URL) && (t = fetch(t));
	const { instance: r, module: n } = await async function(t, e) {
		if ("function" == typeof Response && t instanceof Response) {
			if ("function" == typeof WebAssembly.instantiateStreaming) try {
				return await WebAssembly.instantiateStreaming(t, e);
			} catch (r) {
				if (!t.ok || !function(t) {
					switch (t) {
						case "basic":
						case "cors":
						case "default": return !0;
					}
					return !1;
				}(t.type) || "application/wasm" === t.headers.get("Content-Type")) throw r;
				console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
			}
			const n = await t.arrayBuffer();
			return await WebAssembly.instantiate(n, e);
		}
		{
			const r = await WebAssembly.instantiate(t, e);
			return r instanceof WebAssembly.Instance ? {
				instance: r,
				module: t
			} : r;
		}
	}(await t, e);
	return tt(r);
}
export { e as BlankNode, r as DefaultGraph, n as Literal, _ as NamedNode, s as Quad, a as Store, c as Variable, u as blankNode, rt as default, b as defaultGraph, g as fromQuad, l as fromTerm, et as initSync, f as literal, w as main, d as namedNode, p as parse, y as quad, h as triple, m as variable };
