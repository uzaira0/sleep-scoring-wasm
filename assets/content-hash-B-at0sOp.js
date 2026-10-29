import { t } from "./legacy-invalid-night-BxvRkrkV.js";
function r(t) {
	const r = t instanceof Uint8Array ? t : new Uint8Array(t);
	let n = "";
	for (const i of r) n += i.toString(16).padStart(2, "0");
	return n;
}
const n = new Uint32Array([
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
]);
function i(t, r) {
	return (t >>> r | t << 32 - r) >>> 0;
}
function e(t) {
	const r = new Uint32Array([
		1779033703,
		3144134277,
		1013904242,
		2773480762,
		1359893119,
		2600822924,
		528734635,
		1541459225
	]), e = 8n * BigInt(t.length), s = 64 * Math.ceil((t.length + 9) / 64), a = new Uint8Array(s);
	a.set(t), a[t.length] = 128;
	const o = new DataView(a.buffer);
	o.setBigUint64(s - 8, e, !1);
	const c = /* @__PURE__ */ new Uint32Array(64);
	for (let y = 0; y < s; y += 64) {
		for (let r = 0; r < 16; r++) c[r] = o.getUint32(y + 4 * r, !1);
		for (let r = 16; r < 64; r++) {
			const t = c[r - 15], n = c[r - 2], e = i(t, 7) ^ i(t, 18) ^ t >>> 3, s = i(n, 17) ^ i(n, 19) ^ n >>> 10;
			c[r] = c[r - 16] + e + c[r - 7] + s >>> 0;
		}
		let t = r[0], e = r[1], s = r[2], a = r[3], h = r[4], f = r[5], l = r[6], w = r[7];
		for (let r = 0; r < 64; r++) {
			const o = w + (i(h, 6) ^ i(h, 11) ^ i(h, 25)) + (h & f ^ ~h & l) + n[r] + c[r] >>> 0, y = (i(t, 2) ^ i(t, 13) ^ i(t, 22)) + (t & e ^ t & s ^ e & s) >>> 0;
			w = l, l = f, f = h, h = a + o >>> 0, a = s, s = e, e = t, t = o + y >>> 0;
		}
		r[0] = r[0] + t >>> 0, r[1] = r[1] + e >>> 0, r[2] = r[2] + s >>> 0, r[3] = r[3] + a >>> 0, r[4] = r[4] + h >>> 0, r[5] = r[5] + f >>> 0, r[6] = r[6] + l >>> 0, r[7] = r[7] + w >>> 0;
	}
	const h = /* @__PURE__ */ new Uint8Array(32), f = new DataView(h.buffer);
	for (let n = 0; n < 8; n++) f.setUint32(4 * n, r[n], !1);
	return h;
}
function s(t) {
	return r(e(new TextEncoder().encode(t)));
}
async function a(t) {
	const r = void 0 !== globalThis.crypto ? globalThis.crypto.subtle : void 0;
	if (r?.digest) {
		const n = t.slice(), i = await r.digest("SHA-256", n);
		return new Uint8Array(i);
	}
	return e(t);
}
async function o(t) {
	return r(await a(new TextEncoder().encode(t)));
}
async function c(t) {
	return r(await a(t instanceof Uint8Array ? t : new Uint8Array(t)));
}
async function h(r) {
	const { isInvalidNight: n, ...i } = r, e = {
		...i,
		[t]: n
	}, s = {};
	for (const t of Object.keys(e).sort()) {
		const r = e[t];
		Array.isArray(r) ? s[t] = [...r].sort((t, r) => {
			const n = t, i = r, e = (n.markerIndex ?? 0) - (i.markerIndex ?? 0);
			return 0 !== e ? e : (n.onsetTimestamp ?? n.startTimestamp ?? 0) - (i.onsetTimestamp ?? i.startTimestamp ?? 0);
		}) : s[t] = r;
	}
	return o(JSON.stringify(s));
}
async function f(t) {
	const n = await t.slice(0, 65536).arrayBuffer();
	return r(await a(new Uint8Array(n)));
}
var y = class {
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
	W = /* @__PURE__ */ new Uint32Array(64);
	carry = /* @__PURE__ */ new Uint8Array(64);
	carryLen = 0;
	totalLen = 0n;
	update(t) {
		this.totalLen += BigInt(t.length);
		let r = 0;
		if (this.carryLen > 0) {
			const n = 64 - this.carryLen, i = Math.min(n, t.length);
			this.carry.set(t.subarray(0, i), this.carryLen), this.carryLen += i, r += i, 64 === this.carryLen && (this.processBlock(this.carry, 0), this.carryLen = 0);
		}
		for (; r + 64 <= t.length;) this.processBlock(t, r), r += 64;
		r < t.length && (this.carry.set(t.subarray(r), 0), this.carryLen = t.length - r);
	}
	finalize() {
		const t = 8n * this.totalLen;
		if (this.carry[this.carryLen] = 128, this.carryLen++, this.carryLen > 56) {
			for (; this.carryLen < 64;) this.carry[this.carryLen++] = 0;
			this.processBlock(this.carry, 0), this.carryLen = 0;
		}
		for (; this.carryLen < 56;) this.carry[this.carryLen++] = 0;
		new DataView(this.carry.buffer).setBigUint64(56, t, !1), this.processBlock(this.carry, 0);
		const r = /* @__PURE__ */ new Uint8Array(32), n = new DataView(r.buffer);
		for (let i = 0; i < 8; i++) n.setUint32(4 * i, this.H[i], !1);
		return r;
	}
	processBlock(t, r) {
		const e = new DataView(t.buffer, t.byteOffset + r, 64), s = this.W;
		for (let n = 0; n < 16; n++) s[n] = e.getUint32(4 * n, !1);
		for (let n = 16; n < 64; n++) {
			const t = s[n - 15], r = s[n - 2], e = i(t, 7) ^ i(t, 18) ^ t >>> 3, a = i(r, 17) ^ i(r, 19) ^ r >>> 10;
			s[n] = s[n - 16] + e + s[n - 7] + a >>> 0;
		}
		let a = this.H[0], o = this.H[1], c = this.H[2], h = this.H[3], f = this.H[4], y = this.H[5], l = this.H[6], w = this.H[7];
		for (let u = 0; u < 64; u++) {
			const t = w + (i(f, 6) ^ i(f, 11) ^ i(f, 25)) + (f & y ^ ~f & l) + n[u] + s[u] >>> 0, r = (i(a, 2) ^ i(a, 13) ^ i(a, 22)) + (a & o ^ a & c ^ o & c) >>> 0;
			w = l, l = y, y = f, f = h + t >>> 0, h = c, c = o, o = a, a = t + r >>> 0;
		}
		this.H[0] = this.H[0] + a >>> 0, this.H[1] = this.H[1] + o >>> 0, this.H[2] = this.H[2] + c >>> 0, this.H[3] = this.H[3] + h >>> 0, this.H[4] = this.H[4] + f >>> 0, this.H[5] = this.H[5] + y >>> 0, this.H[6] = this.H[6] + l >>> 0, this.H[7] = this.H[7] + w >>> 0;
	}
};
const l = 65536;
async function w(t, n, i, e) {
	const s = t.size;
	if (i?.throwIfAborted(), await e?.start(), i?.throwIfAborted(), 0 === s) {
		const t = r(await a(/* @__PURE__ */ new Uint8Array(0))), s = e ? await e.finish() : t;
		return i?.throwIfAborted(), n?.(1), {
			prefixHash: t,
			fullHash: s
		};
	}
	const o = new Uint8Array(Math.min(65536, s)), c = new y();
	let h = 0;
	for (; h < s;) {
		i?.throwIfAborted();
		const r = Math.min(h + 2097152, s), a = new Uint8Array(await t.slice(h, r).arrayBuffer());
		if (i?.throwIfAborted(), h < o.length) {
			const t = Math.min(o.length, r);
			o.set(a.subarray(0, t - h), h);
		}
		e ? (await e.feed(a), i?.throwIfAborted()) : c.update(a), h = r, n?.(h / s);
	}
	i?.throwIfAborted();
	const f = e ? await e.finish() : r(c.finalize()), l = s <= 65536 && !e ? f : r(await a(o));
	return i?.throwIfAborted(), {
		prefixHash: l,
		fullHash: f
	};
}
export { o as a, h as i, f as n, c as o, w as r, s, l as t };
