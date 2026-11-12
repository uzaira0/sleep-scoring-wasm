import { t } from "./legacy-invalid-night-zjKZRSNb.js";
async function r(t) {
	return {
		source: t,
		bytes: new Uint8Array(await t.slice(0, Math.min(t.size, 65536)).arrayBuffer())
	};
}
async function n(t, r, n) {
	const e = Math.min(t.size, r);
	return n?.source === t && n.bytes.length >= e ? n.bytes.subarray(0, e) : new Uint8Array(await t.slice(0, e).arrayBuffer());
}
async function e(t, r, e) {
	return new TextDecoder("utf-8", { fatal: !1 }).decode(await n(t, r, e));
}
function a(t) {
	const r = t instanceof Uint8Array ? t : new Uint8Array(t);
	let n = "";
	for (const e of r) n += e.toString(16).padStart(2, "0");
	return n;
}
const i = new Int32Array([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]), s = /* @__PURE__ */ new Int32Array(64);
function o(t, r, n, e) {
	let a = 0 | t[0], o = 0 | t[1], c = 0 | t[2], f = 0 | t[3], y = 0 | t[4], h = 0 | t[5], w = 0 | t[6], u = 0 | t[7];
	for (let l = n; l + 64 <= e; l += 64) {
		for (let a = 0, i = l; a < 16; a++, i += 4) s[a] = r[i] << 24 | r[i + 1] << 16 | r[i + 2] << 8 | r[i + 3];
		for (let r = 16; r < 64; r++) {
			const t = s[r - 15], n = s[r - 2], e = (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3, a = (n >>> 17 | n << 15) ^ (n >>> 19 | n << 13) ^ n >>> 10;
			s[r] = s[r - 16] + e + s[r - 7] + a | 0;
		}
		let t = a, n = o, e = c, A = f, d = y, g = h, b = w, U = u;
		for (let r = 0; r < 64; r++) {
			const a = U + ((d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & g ^ ~d & b) + i[r] + s[r] | 0, o = ((t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)) + (t & n ^ t & e ^ n & e) | 0;
			U = b, b = g, g = d, d = A + a | 0, A = e, e = n, n = t, t = a + o | 0;
		}
		a = a + t | 0, o = o + n | 0, c = c + e | 0, f = f + A | 0, y = y + d | 0, h = h + g | 0, w = w + b | 0, u = u + U | 0;
	}
	t[0] = a, t[1] = o, t[2] = c, t[3] = f, t[4] = y, t[5] = h, t[6] = w, t[7] = u;
}
function c(t) {
	const r = new Uint32Array([
		1779033703,
		3144134277,
		1013904242,
		2773480762,
		1359893119,
		2600822924,
		528734635,
		1541459225
	]), n = 8n * BigInt(t.length), e = 64 * Math.ceil((t.length + 9) / 64), a = new Uint8Array(e);
	a.set(t), a[t.length] = 128, new DataView(a.buffer).setBigUint64(e - 8, n, !1), o(r, a, 0, e);
	const i = /* @__PURE__ */ new Uint8Array(32), s = new DataView(i.buffer);
	for (let o = 0; o < 8; o++) s.setUint32(4 * o, r[o], !1);
	return i;
}
function f(t) {
	return a(c(new TextEncoder().encode(t)));
}
async function y(t) {
	const r = void 0 !== globalThis.crypto ? globalThis.crypto.subtle : void 0;
	if (r?.digest) {
		const n = t.slice(), e = await r.digest("SHA-256", n);
		return new Uint8Array(e);
	}
	return c(t);
}
async function h(t) {
	return a(await y(new TextEncoder().encode(t)));
}
async function w(t) {
	return a(await y(t instanceof Uint8Array ? t : new Uint8Array(t)));
}
async function u(r) {
	const { isInvalidNight: n, ...e } = r, a = {
		...e,
		[t]: n
	}, i = {};
	for (const t of Object.keys(a).sort()) {
		const r = a[t];
		Array.isArray(r) ? i[t] = [...r].sort((t, r) => {
			const n = t, e = r, a = (n.markerIndex ?? 0) - (e.markerIndex ?? 0);
			return 0 !== a ? a : (n.onsetTimestamp ?? n.startTimestamp ?? 0) - (e.onsetTimestamp ?? e.startTimestamp ?? 0);
		}) : i[t] = r;
	}
	return h(JSON.stringify(i));
}
async function l(t, r) {
	return a(await y(await n(t, 65536, r)));
}
var A = class {
	H = new Uint32Array([
		1779033703,
		3144134277,
		1013904242,
		2773480762,
		1359893119,
		2600822924,
		528734635,
		1541459225
	]);
	carry = /* @__PURE__ */ new Uint8Array(64);
	carryLen = 0;
	totalLen = 0n;
	update(t) {
		this.totalLen += BigInt(t.length);
		let r = 0;
		if (this.carryLen > 0) {
			const n = 64 - this.carryLen, e = Math.min(n, t.length);
			this.carry.set(t.subarray(0, e), this.carryLen), this.carryLen += e, r += e, 64 === this.carryLen && (o(this.H, this.carry, 0, 64), this.carryLen = 0);
		}
		const n = r + 64 * Math.floor((t.length - r) / 64);
		o(this.H, t, r, n), r = n, r < t.length && (this.carry.set(t.subarray(r), 0), this.carryLen = t.length - r);
	}
	finalize() {
		const t = 8n * this.totalLen;
		if (this.carry[this.carryLen] = 128, this.carryLen++, this.carryLen > 56) {
			for (; this.carryLen < 64;) this.carry[this.carryLen++] = 0;
			o(this.H, this.carry, 0, 64), this.carryLen = 0;
		}
		for (; this.carryLen < 56;) this.carry[this.carryLen++] = 0;
		new DataView(this.carry.buffer).setBigUint64(56, t, !1), o(this.H, this.carry, 0, 64);
		const r = /* @__PURE__ */ new Uint8Array(32), n = new DataView(r.buffer);
		for (let e = 0; e < 8; e++) n.setUint32(4 * e, this.H[e], !1);
		return r;
	}
};
const d = 65536;
async function g(t, r, n, e) {
	const i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = t instanceof ArrayBuffer ? (r, n) => Promise.resolve(new Uint8Array(t.slice(r, n))) : async (r, n) => new Uint8Array(await t.slice(r, n).arrayBuffer());
	if (n?.throwIfAborted(), await e?.start(), n?.throwIfAborted(), 0 === i) {
		const t = a(await y(/* @__PURE__ */ new Uint8Array(0))), i = e ? await e.finish() : t;
		return n?.throwIfAborted(), r?.(1), {
			prefixHash: t,
			fullHash: i
		};
	}
	const o = new Uint8Array(Math.min(65536, i)), c = new A();
	let f = 0;
	for (; f < i;) {
		n?.throwIfAborted();
		const t = Math.min(f + 2097152, i), a = await s(f, t);
		if (n?.throwIfAborted(), f < o.length) {
			const r = Math.min(o.length, t);
			o.set(a.subarray(0, r - f), f);
		}
		e ? (await e.feed(a), n?.throwIfAborted()) : c.update(a), f = t, r?.(f / i);
	}
	n?.throwIfAborted();
	const h = e ? await e.finish() : a(c.finalize()), w = i <= 65536 && !e ? h : a(await y(o));
	return n?.throwIfAborted(), {
		prefixHash: w,
		fullHash: h
	};
}
export { h as a, r as c, u as i, n as l, l as n, w as o, g as r, f as s, d as t, e as u };
