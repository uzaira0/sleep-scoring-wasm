/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: Apache-2.0
*/
const e = Symbol("Comlink.proxy"), r = Symbol("Comlink.endpoint"), t = Symbol("Comlink.releaseProxy"), n = Symbol("Comlink.finalizer"), a = Symbol("Comlink.thrown"), s = (e) => "object" == typeof e && null !== e || "function" == typeof e, o = new Map([["proxy", {
	canHandle: (r) => s(r) && r[e],
	serialize(e) {
		const { port1: r, port2: t } = new MessageChannel();
		return i(e, r), [t, [t]];
	},
	deserialize: (e) => (e.start(), function(e) {
		const r = /* @__PURE__ */ new Map();
		return e.addEventListener("message", function(e) {
			const { data: t } = e;
			if (!t || !t.id) return;
			const n = r.get(t.id);
			if (n) try {
				n(t);
			} finally {
				r.delete(t.id);
			}
		}), y(e, r, [], void 0);
	}(e))
}], ["throw", {
	canHandle: (e) => s(e) && a in e,
	serialize({ value: e }) {
		let r;
		return r = e instanceof Error ? {
			isError: !0,
			value: {
				message: e.message,
				name: e.name,
				stack: e.stack
			}
		} : {
			isError: !1,
			value: e
		}, [r, []];
	},
	deserialize(e) {
		if (e.isError) throw Object.assign(new Error(e.value.message), e.value);
		throw e.value;
	}
}]]);
function i(r, t = globalThis, s = ["*"]) {
	t.addEventListener("message", function o(u) {
		if (!u || !u.data) return;
		if (!function(e, r) {
			for (const t of e) {
				if (r === t || "*" === t) return !0;
				if (t instanceof RegExp && t.test(r)) return !0;
			}
			return !1;
		}(s, u.origin)) return void console.warn(`Invalid origin '${u.origin}' for comlink proxy`);
		const { id: f, type: l, path: p } = Object.assign({ path: [] }, u.data), y = (u.data.argumentList || []).map(g);
		let w;
		try {
			const t = p.slice(0, -1).reduce((e, r) => e[r], r), n = p.reduce((e, r) => e[r], r);
			switch (l) {
				case "GET":
					w = n;
					break;
				case "SET":
					t[p.slice(-1)[0]] = g(u.data.value), w = !0;
					break;
				case "APPLY":
					w = n.apply(t, y);
					break;
				case "CONSTRUCT":
					w = function(r) {
						return Object.assign(r, { [e]: !0 });
					}(new n(...y));
					break;
				case "ENDPOINT":
					{
						const { port1: e, port2: t } = new MessageChannel();
						i(r, t), w = d(e, [e]);
					}
					break;
				case "RELEASE":
					w = void 0;
					break;
				default: return;
			}
		} catch (h) {
			w = {
				value: h,
				[a]: 0
			};
		}
		Promise.resolve(w).catch((e) => ({
			value: e,
			[a]: 0
		})).then((e) => {
			const [a, s] = m(e);
			t.postMessage(Object.assign(Object.assign({}, a), { id: f }), s), "RELEASE" === l && (t.removeEventListener("message", o), c(t), n in r && "function" == typeof r[n] && r[n]());
		}).catch((e) => {
			const [r, n] = m({
				value: /* @__PURE__ */ new TypeError("Unserializable return value"),
				[a]: 0
			});
			t.postMessage(Object.assign(Object.assign({}, r), { id: f }), n);
		});
	}), t.start && t.start();
}
function c(e) {
	(function(e) {
		return "MessagePort" === e.constructor.name;
	})(e) && e.close();
}
function u(e) {
	if (e) throw new Error("Proxy has been released and is not useable");
}
function f(e) {
	return b(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
		c(e);
	});
}
const l = /* @__PURE__ */ new WeakMap(), p = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
	const r = (l.get(e) || 0) - 1;
	l.set(e, r), 0 === r && f(e);
});
function y(e, n, a = [], s = function() {}) {
	let o = !1;
	const i = new Proxy(s, {
		get(r, s) {
			if (u(o), s === t) return () => {
				(function(e) {
					p && p.unregister(e);
				})(i), f(e), n.clear(), o = !0;
			};
			if ("then" === s) {
				if (0 === a.length) return { then: () => i };
				const r = b(e, n, {
					type: "GET",
					path: a.map((e) => e.toString())
				}).then(g);
				return r.then.bind(r);
			}
			return y(e, n, [...a, s]);
		},
		set(r, t, s) {
			u(o);
			const [i, c] = m(s);
			return b(e, n, {
				type: "SET",
				path: [...a, t].map((e) => e.toString()),
				value: i
			}, c).then(g);
		},
		apply(t, s, i) {
			u(o);
			const c = a[a.length - 1];
			if (c === r) return b(e, n, { type: "ENDPOINT" }).then(g);
			if ("bind" === c) return y(e, n, a.slice(0, -1));
			const [f, l] = w(i);
			return b(e, n, {
				type: "APPLY",
				path: a.map((e) => e.toString()),
				argumentList: f
			}, l).then(g);
		},
		construct(r, t) {
			u(o);
			const [s, i] = w(t);
			return b(e, n, {
				type: "CONSTRUCT",
				path: a.map((e) => e.toString()),
				argumentList: s
			}, i).then(g);
		}
	});
	return function(e, r) {
		const t = (l.get(r) || 0) + 1;
		l.set(r, t), p && p.register(e, r, e);
	}(i, e), i;
}
function w(e) {
	const r = e.map(m);
	return [r.map((e) => e[0]), (t = r.map((e) => e[1]), Array.prototype.concat.apply([], t))];
	var t;
}
const h = /* @__PURE__ */ new WeakMap();
function d(e, r) {
	return h.set(e, r), e;
}
function m(e) {
	for (const [r, t] of o) if (t.canHandle(e)) {
		const [n, a] = t.serialize(e);
		return [{
			type: "HANDLER",
			name: r,
			value: n
		}, a];
	}
	return [{
		type: "RAW",
		value: e
	}, h.get(e) || []];
}
function g(e) {
	switch (e.type) {
		case "HANDLER": return o.get(e.name).deserialize(e.value);
		case "RAW": return e.value;
	}
}
function b(e, r, t, n) {
	return new Promise((a) => {
		const s = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
		r.set(s, a), e.start && e.start(), e.postMessage(Object.assign({ id: s }, t), n);
	});
}
let A = null, v = !1;
function S() {
	return A || (A = (async () => {
		const e = await import("./actours-BxkXg9Up.js");
		return await e.default(), "initThreadPool" in e && "function" == typeof e.initThreadPool && "undefined" != typeof SharedArrayBuffer && "undefined" != typeof navigator && navigator.hardwareConcurrency > 1 && await e.initThreadPool(navigator.hardwareConcurrency), v || (await async function(e) {
			const r = new Float64Array(16), t = new Uint8Array(e.scoreSadeh(r, -4));
			if (16 !== t.length) throw new Error(`WASM integrity check failed: scoreSadeh length ${t.length}, expected 16`);
			for (let n = 0; n < 16; n++) if (1 !== t[n]) throw new Error(`WASM integrity check failed: scoreSadeh(zeros)[${n}] = ${t[n]}, expected 1. Bundle may be corrupt — clear the site cache and reload.`);
		}(e), v = !0), e;
	})().catch((e) => {
		throw A = null, e;
	})), A;
}
function E(e) {
	if (e instanceof Float64Array) return new Float64Array(e);
	if (ArrayBuffer.isView(e)) {
		const r = e;
		if ("number" == typeof r.length) return new Float64Array(Array.from(r, Number));
	}
	return Array.isArray(e) ? new Float64Array(e) : null;
}
function F(e, r) {
	if ("object" != typeof e || null === e) throw new Error(`${r}: unexpected WASM return shape — got ${JSON.stringify(e)}`);
	const t = e, n = {}, a = [];
	for (const s of Object.keys(t)) {
		const e = t[s];
		if (Array.isArray(e)) {
			const r = new Float64Array(e);
			n[s] = r, a.push(r.buffer);
		} else n[s] = e;
	}
	return d(n, a);
}
"undefined" != typeof self && "undefined" == typeof window && i({
	async scoreSadeh(e, r) {
		const t = await S(), n = new Uint8Array(t.scoreSadeh(e, r));
		return d(n, [n.buffer]);
	},
	async scoreColeKripke(e, r) {
		const t = await S(), n = new Uint8Array(t.scoreColeKripke(e, r));
		return d(n, [n.buffer]);
	},
	async detectNonwear(e) {
		const r = await S(), t = new Uint8Array(r.detectNonwear(e));
		return d(t, [t.buffer]);
	},
	async detectNonwearChoi2011(e) {
		const r = await S(), t = new Uint8Array(r.detectNonwearChoi2011(e));
		return d(t, [t.buffer]);
	},
	parseActigraphCsv: async (e, r) => F((await S()).parseActigraphCsv(e, r), "parseActigraphCsv"),
	parseGeneactivCsv: async (e) => F((await S()).parseGeneactivCsv(e), "parseGeneactivCsv"),
	isGeneactivFormat: async (e) => (await S()).isGeneactivFormat(e),
	async csvBufferClear(e) {
		(await S()).csvBufferClear(e);
	},
	async csvBufferAppend(e) {
		(await S()).csvBufferAppend(e);
	},
	parseGeneactivCsvBuffered: async () => F((await S()).parseGeneactivCsvBuffered(), "parseGeneactivCsvBuffered"),
	parseActigraphCsvBuffered: async (e) => F((await S()).parseActigraphCsvBuffered(e), "parseActigraphCsvBuffered"),
	async streamParseStart(e, r) {
		(await S()).streamParseStart(e, r);
	},
	async streamParseStartData(e, r) {
		(await S()).streamParseStartData(e, r);
	},
	streamParseFeed: async (e) => (await S()).streamParseFeed(e),
	async streamParseFinish() {
		const e = (await S()).streamParseFinish();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinish: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const r = new Float64Array(e.timestampsMs), t = new Float64Array(e.axisX), n = new Float64Array(e.axisY), a = new Float64Array(e.axisZ), s = new Float64Array(e.vectorMagnitude), o = new Float64Array(e.temperature);
		return d({
			timestampsMs: r,
			axisX: t,
			axisY: n,
			axisZ: a,
			vectorMagnitude: s,
			temperature: o,
			sampleFrequency: e.sampleFrequency,
			headerRowsSkipped: e.headerRowsSkipped
		}, [
			r.buffer,
			t.buffer,
			n.buffer,
			a.buffer,
			s.buffer,
			o.buffer
		]);
	},
	async streamParseFinishChunk() {
		const e = (await S()).streamParseFinishChunk();
		if (null == e || "object" != typeof e) throw new Error(`streamParseFinishChunk: unexpected WASM return shape (${typeof e}) — bundle may be corrupt`);
		const r = new Float64Array(e.timestampsMs), t = new Float64Array(e.axisX), n = new Float64Array(e.axisY), a = new Float64Array(e.axisZ), s = new Float64Array(e.vectorMagnitude), o = new Float64Array(e.temperature), i = new Uint32Array(e.counts), c = new Uint32Array(e.tempCounts), u = new Float64Array(e.timestampsMs5s), f = new Float64Array(e.enmo5s), l = new Float64Array(e.anglez5s), p = new Uint32Array(e.counts5s);
		return d({
			timestampsMs: r,
			axisX: t,
			axisY: n,
			axisZ: a,
			vectorMagnitude: s,
			temperature: o,
			counts: i,
			tempCounts: c,
			timestampsMs5s: u,
			enmo5s: f,
			anglez5s: l,
			counts5s: p,
			sampleFrequency: e.sampleFrequency,
			headerRowsSkipped: e.headerRowsSkipped,
			rowsDropped: e.rowsDropped
		}, [
			r.buffer,
			t.buffer,
			n.buffer,
			a.buffer,
			s.buffer,
			o.buffer,
			i.buffer,
			c.buffer,
			u.buffer,
			f.buffer,
			l.buffer,
			p.buffer
		]);
	},
	async neishabouriCounts(e, r, t, n, a) {
		const s = (await S()).neishabouriCounts(e, r, t, n, a), o = "object" == typeof s && null !== s ? s : null, i = o ? E(o.x) : null, c = o ? E(o.y) : null, u = o ? E(o.z) : null, f = o ? E(o.vm) : null;
		if (!(i && c && u && f)) throw new Error(`neishabouriCounts: unexpected WASM return shape — got ${JSON.stringify(s)}`);
		return d({
			x: i,
			y: c,
			z: u,
			vm: f
		}, [
			i.buffer,
			c.buffer,
			u.buffer,
			f.buffer
		]);
	},
	async scoreConsensusMajority(e) {
		const r = (await S()).scoreConsensusMajority(e), t = r instanceof Uint8Array ? r : new Uint8Array(r);
		return d(t, [t.buffer]);
	},
	async computeSleepMetrics(e, r, t) {
		const n = (await S()).computeSleepMetrics(e, r, t);
		if (null == n || "object" != typeof n || "number" != typeof n.totalSleepTimeMinutes || "number" != typeof n.sleepEfficiency) throw new Error(`computeSleepMetrics: unexpected WASM return shape ${JSON.stringify(n)}`);
		return n;
	},
	epochRawData: async (e, r, t, n, a) => F((await S()).epochRawData(e, r, t, n, a), "epochRawData"),
	async epochWithBandpass(e, r, t) {
		const n = (await S()).epochWithBandpass(e, r, t), a = "object" == typeof n && null !== n ? n : null, s = E(a?.timestamps), o = E(a?.counts);
		if (!s || !o) throw new Error("epochWithBandpass: unexpected WASM return shape");
		return d({
			timestamps: s,
			counts: o
		}, [s.buffer, o.buffer]);
	},
	async computeEnmo5s(e, r, t, n) {
		const a = await S();
		return new Float64Array(a.computeEnmo5s(e, r, t, n));
	},
	async computeAnglez5s(e, r, t, n) {
		const a = await S();
		return new Float64Array(a.computeAnglez5s(e, r, t, n));
	},
	async detectDetach(e, r) {
		const t = await S(), n = new Uint8Array(t.detectDetach(e, r));
		return d(n, [n.buffer]);
	},
	detectHdcza: async (e) => function(e) {
		if (!e) return null;
		const r = e;
		if ("object" != typeof e || "number" != typeof r.start_epoch || "number" != typeof r.end_epoch) throw new Error(`detectHdcza: unexpected WASM return shape — expected {start_epoch, end_epoch}, got ${JSON.stringify(e)}`);
		return {
			startEpoch: r.start_epoch,
			endEpoch: r.end_epoch
		};
	}((await S()).detectHdcza(e)),
	runFullPipeline: async (e, r, t, n, a) => (await S()).runFullPipeline({
		x: e,
		y: r,
		z: t,
		sampleRateHz: n,
		startTsEpochSec: a
	}, { ws3: 5 }),
	runGgirFromEpoch: async (e, r, t, n, a) => (await S()).runGgirFromEpoch({
		anglez: e,
		enmo: r,
		sampleRateHz: t,
		startTsEpochSec: n,
		...a ? { invalid: a } : {}
	}, { ws3: 5 }),
	async scoreGgirSib(e, r, t) {
		const n = (await S()).scoreGgirSib(e, r, t);
		if ("object" != typeof n || null === n || !n.sadeh_ggir || !n.ck_ggir) throw new Error(`scoreGgirSib: unexpected WASM return shape — got ${JSON.stringify(n)}`);
		const a = n, s = new Uint8Array(a.sadeh_ggir), o = new Uint8Array(a.ck_ggir);
		return d({
			sadeh_ggir: s,
			ck_ggir: o
		}, [s.buffer, o.buffer]);
	},
	async scoreGgirHasib(e) {
		const r = (await S()).scoreGgirHasib(e);
		if (!(r instanceof Uint8Array)) throw new Error("scoreGgirHasib: unexpected WASM return shape — expected Uint8Array, got " + typeof r);
		const t = new Uint8Array(r);
		return d(t, [t.buffer]);
	},
	async scoreAllDays(e) {
		const r = (await S()).scoreAllDays(e);
		if (!Array.isArray(r)) throw new Error("scoreAllDays: expected array from WASM, got " + typeof r);
		const t = r[0];
		if (r.length > 0 && !("object" == typeof t && null !== t && t.sadeh_actilife instanceof Uint8Array && t.nonwear instanceof Uint8Array)) throw new Error(`scoreAllDays: unexpected element shape — got ${JSON.stringify(t)}`);
		const n = r.map((e) => ({
			sadeh_actilife: new Uint8Array(e.sadeh_actilife),
			sadeh_original: new Uint8Array(e.sadeh_original),
			ck_actilife: new Uint8Array(e.ck_actilife),
			ck_original: new Uint8Array(e.ck_original),
			nonwear: new Uint8Array(e.nonwear)
		}));
		return d(n, n.flatMap((e) => [
			e.sadeh_actilife.buffer,
			e.sadeh_original.buffer,
			e.ck_actilife.buffer,
			e.ck_original.buffer,
			e.nonwear.buffer
		]));
	}
});
