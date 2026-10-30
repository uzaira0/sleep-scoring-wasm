import { i as r, n as e } from "./workers-x5pLIA5h.js";
import "./store-CkN9mDtd.js";
function t(r, e) {
	return {
		...e,
		maxExtraWorkers: Number.POSITIVE_INFINITY,
		workerMemoryGib: (t = r.reduce((r, e) => Math.max(r, e.size), 0), .25 * Math.max(1, t / 968617))
	};
	var t;
}
function o({ cores: r, deviceMemoryGib: e, maxExtraWorkers: t = 3, workerMemoryGib: o = 1, minDeviceMemoryGib: s = 8 }) {
	return !Number.isFinite(e) || (e ?? 0) < s || !Number.isFinite(r) || (r ?? 0) <= 2 ? 0 : Math.max(0, Math.min(t, Math.floor(r) - 2, Math.floor(e / 2 / o) - 1));
}
function s(r, e) {
	return e.primary && r instanceof Error && r.message.includes("timed out during");
}
let a = 0;
async function n(t, { primary: o, getPrimary: s, extraWorkers: n, signal: i, cancelOperation: c = () => {}, createWorker: p }) {
	if (i?.aborted) throw new DOMException("Aborted: raw passes", "AbortError");
	if (0 === t.length) return [];
	if (t.some((r) => {
		const e = Function.prototype.toString.call(r.run);
		return !e.includes("[native code]") && /^(?:async\s*)?(?:function(?:\s+\w+)?\s*|[\w$]+\s*)?\(\s*\)/u.test(e);
	})) throw new Error("A raw pass must receive its pool worker");
	if (0 === n && !o && !s && !p) throw new Error("A single-worker pass must borrow or inject its worker");
	const m = p ?? e, d = Array.from({ length: Math.min(t.length, n + 1) }, () => ({
		cost: 0,
		passes: []
	})), u = t.map((r, e) => ({
		pass: r,
		index: e
	}));
	n > 0 && u.sort((r, e) => e.pass.cost - r.pass.cost);
	for (const r of u) {
		const e = d.reduce((r, e) => e.cost < r.cost ? e : r);
		e.passes.push(r), e.cost += r.pass.cost;
	}
	const w = new Array(t.length), l = /* @__PURE__ */ new Set(), f = {
		stopped: !1,
		done: !1
	}, h = 1 / (n + 1), y = (r) => {
		l.delete(r) && (a = Math.max(0, a - h), r.terminate());
	};
	let b;
	const x = new Promise((r, e) => {
		b = () => {
			f.stopped = !0, e(new DOMException("Aborted: raw passes", "AbortError"));
		}, i?.addEventListener("abort", b, { once: !0 }), i?.aborted && b();
	});
	try {
		await Promise.race([x, Promise.all(d.map(async (e, t) => {
			if (0 === e.passes.length) return;
			let n, i, p = !1;
			const d = 0 === t && (void 0 !== o || void 0 !== s), u = new Proxy({}, { get: (e, t) => {
				if (f.done) throw new Error("Raw pass pool finished");
				if (f.stopped) throw new DOMException("Aborted: raw passes", "AbortError");
				if (!i && !n) if (d) i = o ?? s();
				else if (a + h <= 1 + 4 * Number.EPSILON) {
					a += h;
					try {
						n = m({ singleThread: !0 });
					} catch (c) {
						throw a = Math.max(0, a - h), c;
					}
					l.add(n);
				} else i = o ?? s?.() ?? r();
				return Reflect.get(i ?? n.api, t);
			} }), b = {
				cancel: () => {
					i ? c() : (p = !0, n && y(n));
				},
				get primary() {
					return void 0 !== i || Boolean(d);
				}
			};
			try {
				for (const { pass: r, index: t } of e.passes) {
					if (f.stopped) return;
					p && (n = void 0, p = !1), w[t] = await r.run(u, b);
				}
			} catch (x) {
				throw f.stopped = !0, x;
			} finally {
				n && y(n);
			}
		}))]);
	} catch (E) {
		f.stopped = !0;
		try {
			c();
		} catch {}
		throw E;
	} finally {
		f.done = !0, b && i?.removeEventListener("abort", b);
		for (const r of l) y(r);
	}
	return w;
}
var i = class extends Error {
	status;
	constructor(r, e) {
		super(r), this.name = "ApiError", this.status = e;
	}
};
export { n as a, o as i, t as n, s as r, i as t };
