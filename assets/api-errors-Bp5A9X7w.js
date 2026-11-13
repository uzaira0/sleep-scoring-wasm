import { n as e, r } from "./workers-BSP07cYu.js";
import "./store-Bx-glhNc.js";
function t(e, r) {
	return {
		...r,
		maxExtraWorkers: Number.POSITIVE_INFINITY,
		workerMemoryGib: (t = e.reduce((e, r) => Math.max(e, r.size), 0), .25 * Math.max(1, t / 968617))
	};
	var t;
}
function o({ cores: e, deviceMemoryGib: r, maxExtraWorkers: t = 3, workerMemoryGib: o = 1, minDeviceMemoryGib: s = 8 }) {
	return !Number.isFinite(r) || (r ?? 0) < s || !Number.isFinite(e) || (e ?? 0) <= 2 ? 0 : Math.max(0, Math.min(t, Math.floor(e) - 2, Math.floor(r / 2 / o) - 1));
}
function s(e, r) {
	return r.primary && e instanceof Error && e.message.includes("timed out during");
}
let n = 0;
async function a(t, { primary: o, getPrimary: s, extraWorkers: a, memoryBudgetGib: i, signal: c, cancelOperation: p = () => {}, createWorker: m }) {
	if (c?.aborted) throw new DOMException("Aborted: raw passes", "AbortError");
	if (0 === t.length) return [];
	if (t.some((e) => {
		const r = Function.prototype.toString.call(e.run);
		return !r.includes("[native code]") && /^(?:async\s*)?(?:function(?:\s+\w+)?\s*|[\w$]+\s*)?\(\s*\)/u.test(r);
	})) throw new Error("A raw pass must receive its pool worker");
	if (0 === a && !o && !s && !m) throw new Error("A single-worker pass must borrow or inject its worker");
	const l = m ?? e, d = t.map((e, r) => ({
		pass: e,
		index: r
	})), u = new Array(t.length), h = /* @__PURE__ */ new Map(), w = {
		stopped: !1,
		done: !1
	}, f = (e, r) => {
		const t = h.get(e);
		void 0 !== t && (h.delete(e), n = Math.max(0, n - t), !r && e.release ? e.release() : e.terminate());
	};
	let y;
	const b = new Promise((e, r) => {
		y = () => {
			w.stopped = !0, r(new DOMException("Aborted: raw passes", "AbortError"));
		}, c?.addEventListener("abort", y, { once: !0 }), c?.aborted && y();
	}), M = async (e, t, a, i) => {
		let c, m, d = a, y = !1;
		const b = 0 === e && (void 0 !== o || void 0 !== s), M = new Proxy({}, { get: (e, t) => {
			if (w.done) throw new Error("Raw pass pool finished");
			if (w.stopped) throw new DOMException("Aborted: raw passes", "AbortError");
			if (!m && !c) if (b) m = o ?? s();
			else if (n + d <= 1 + 4 * Number.EPSILON) {
				n += d;
				try {
					c = l({ singleThread: !0 });
				} catch (a) {
					throw n = Math.max(0, n - d), a;
				}
				h.set(c, d);
			} else m = o ?? s?.() ?? r();
			return Reflect.get(m ?? c.api, t);
		} }), v = {
			cancel: () => {
				m ? p() : (y = !0, c && f(c, !0));
			},
			get primary() {
				return void 0 !== m || Boolean(b);
			}
		};
		let x = !1;
		try {
			for (let e = t(); e; e = t()) {
				if (w.stopped) return;
				y && (c = void 0, y = !1);
				const r = c ? i?.(e) : void 0;
				c && void 0 !== r && (f(c, !0), c = void 0, d = r);
				const { pass: t, index: o } = e;
				u[o] = await t.run(M, v);
			}
		} catch (E) {
			throw x = !0, w.stopped = !0, E;
		} finally {
			c && f(c, x || w.stopped);
		}
	}, v = Math.min(t.length, a + 1);
	let x;
	if (void 0 === i) {
		const e = Array.from({ length: v }, () => ({
			cost: 0,
			passes: []
		}));
		a > 0 && d.sort((e, r) => r.pass.cost - e.pass.cost);
		for (const r of d) {
			const t = e.reduce((e, r) => r.cost < e.cost ? r : e);
			t.passes.push(r), t.cost += r.pass.cost;
		}
		x = Promise.all(e.map((e, r) => M(r, () => e.passes.shift(), 1 / (a + 1))));
	} else {
		const e = (e) => e?.pass.memoryGib ?? 0;
		d.sort((r, t) => e(t) - e(r) || t.pass.cost - r.pass.cost);
		let r = 0, t = 0, o = 0;
		x = new Promise((s, n) => {
			let a = 0;
			const c = () => {
				for (; t < v && r < d.length && (0 === t || o + e(d[r]) <= i);) {
					let m = e(d[r]);
					o += m, a += 1;
					const l = (r) => {
						const t = e(r);
						if (!(2 * t > m)) return o -= m - t, m = t, queueMicrotask(c), Math.min(1, t / i);
					};
					M(t++, p, Math.min(1, m / i), l).then(() => {
						0 === --a && s();
					}, n);
				}
			}, p = () => {
				const e = d[r++];
				return e && c(), e;
			};
			c();
		});
	}
	try {
		await Promise.race([b, x]);
	} catch (E) {
		w.stopped = !0;
		try {
			p();
		} catch {}
		throw E;
	} finally {
		w.done = !0, y && c?.removeEventListener("abort", y);
		for (const e of [...h.keys()]) f(e, !0);
	}
	return u;
}
var i = class extends Error {
	status;
	constructor(e, r) {
		super(e), this.name = "ApiError", this.status = r;
	}
};
export { a, o as i, t as n, s as r, i as t };
