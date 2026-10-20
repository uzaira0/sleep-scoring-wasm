function t(t, e, i, s) {
	if ("a" === i && !s) throw new TypeError("Private accessor was defined without a getter");
	if ("function" == typeof e ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return "m" === i ? s : "a" === i ? s.call(t) : s ? s.value : e.get(t);
}
function e(t, e, i, s, r) {
	if ("m" === s) throw new TypeError("Private method is not writable");
	if ("a" === s && !r) throw new TypeError("Private accessor was defined without a setter");
	if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return "a" === s ? r.call(t, i) : r ? r.value = i : e.set(t, i), i;
}
var i, s, r, a, n;
const o = "__TAURI_TO_IPC_KEY__";
function h(t, e = !1) {
	return window.__TAURI_INTERNALS__.transformCallback(t, e);
}
var c = class {
	constructor(n) {
		i.set(this, void 0), s.set(this, 0), r.set(this, []), a.set(this, void 0), e(this, i, n || (() => {}), "f"), this.id = h((n) => {
			const o = n.index;
			if ("end" in n) return void (o == t(this, s, "f") ? this.cleanupCallback() : e(this, a, o, "f"));
			const h = n.message;
			if (o == t(this, s, "f")) {
				for (t(this, i, "f").call(this, h), e(this, s, t(this, s, "f") + 1, "f"); t(this, s, "f") in t(this, r, "f");) {
					const a = t(this, r, "f")[t(this, s, "f")];
					t(this, i, "f").call(this, a), delete t(this, r, "f")[t(this, s, "f")], e(this, s, t(this, s, "f") + 1, "f");
				}
				t(this, s, "f") === t(this, a, "f") && this.cleanupCallback();
			} else t(this, r, "f")[o] = h;
		});
	}
	cleanupCallback() {
		window.__TAURI_INTERNALS__.unregisterCallback(this.id);
	}
	set onmessage(t) {
		e(this, i, t, "f");
	}
	get onmessage() {
		return t(this, i, "f");
	}
	[(i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o)]() {
		return `__CHANNEL__:${this.id}`;
	}
	toJSON() {
		return this[o]();
	}
};
async function f(t, e = {}, i) {
	return window.__TAURI_INTERNALS__.invoke(t, e, i);
}
var l = class {
	get rid() {
		return t(this, n, "f");
	}
	constructor(t) {
		n.set(this, void 0), e(this, n, t, "f");
	}
	async close() {
		return f("plugin:resources|close", { rid: this.rid });
	}
};
n = /* @__PURE__ */ new WeakMap();
export { c as Channel, l as Resource, o as SERIALIZE_TO_IPC_FN, f as invoke, h as transformCallback };
