import { n as e, r } from "./workers-B1E_CQH7.js";
function t(e, r) {
	return {
		...r,
		maxExtraWorkers: Number.POSITIVE_INFINITY,
		workerMemoryGib: (t = e.reduce((e, r) => Math.max(e, r.size), 0), .25 * Math.max(1, t / 968617))
	};
	var t;
}
function o(e) {
	return (140 + 130 * Math.max(0, e) / 1e6) / 1024;
}
function s({ cores: e, deviceMemoryGib: r }) {
	const t = Number.isFinite(e) ? Math.floor(e) - 3 : 0;
	return t > 0 && Number.isFinite(r) && r > 0 ? {
		extraWorkers: t,
		memoryBudgetGib: r / 2
	} : { extraWorkers: 0 };
}
function n({ cores: e, deviceMemoryGib: r, maxExtraWorkers: t = 3, workerMemoryGib: o = 1, minDeviceMemoryGib: s = 8 }) {
	return !Number.isFinite(r) || (r ?? 0) < s || !Number.isFinite(e) || (e ?? 0) <= 2 ? 0 : Math.max(0, Math.min(t, Math.floor(e) - 2, Math.floor(r / 2 / o) - 1));
}
function a(e, r) {
	return r.primary && e instanceof Error && e.message.includes("timed out during");
}
let i = 0;
async function c(t, { primary: o, getPrimary: s, extraWorkers: n, memoryBudgetGib: a, signal: c, cancelOperation: m = () => {}, createWorker: p }) {
	if (c?.aborted) throw new DOMException("Aborted: raw passes", "AbortError");
	if (0 === t.length) return [];
	if (t.some((e) => {
		const r = Function.prototype.toString.call(e.run);
		return !r.includes("[native code]") && /^(?:async\s*)?(?:function(?:\s+\w+)?\s*|[\w$]+\s*)?\(\s*\)/u.test(r);
	})) throw new Error("A raw pass must receive its pool worker");
	if (0 === n && !o && !s && !p) throw new Error("A single-worker pass must borrow or inject its worker");
	const u = p ?? e, d = t.map((e, r) => ({
		pass: e,
		index: r
	})), l = new Array(t.length), f = /* @__PURE__ */ new Map(), h = {
		stopped: !1,
		done: !1
	}, w = (e, r) => {
		const t = f.get(e);
		void 0 !== t && (f.delete(e), i = Math.max(0, i - t), !r && e.release ? e.release() : e.terminate());
	};
	let y;
	const b = new Promise((e, r) => {
		y = () => {
			h.stopped = !0, r(new DOMException("Aborted: raw passes", "AbortError"));
		}, c?.addEventListener("abort", y, { once: !0 }), c?.aborted && y();
	}), M = async (e, t, n, a) => {
		let c, p, d = n, y = !1;
		const b = 0 === e && (void 0 !== o || void 0 !== s), M = new Proxy({}, { get: (e, t) => {
			if (h.done) throw new Error("Raw pass pool finished");
			if (h.stopped) throw new DOMException("Aborted: raw passes", "AbortError");
			if (!p && !c) if (b) p = o ?? s();
			else if (i + d <= 1 + 4 * Number.EPSILON) {
				i += d;
				try {
					c = u({ singleThread: !0 });
				} catch (n) {
					throw i = Math.max(0, i - d), n;
				}
				f.set(c, d);
			} else p = o ?? s?.() ?? r();
			return Reflect.get(p ?? c.api, t);
		} }), x = {
			cancel: () => {
				p ? m() : (y = !0, c && w(c, !0));
			},
			get primary() {
				return void 0 !== p || Boolean(b);
			}
		};
		let g = !1;
		try {
			for (let e = t(); e; e = t()) {
				if (h.stopped) return;
				y && (c = void 0, y = !1);
				const r = c ? a?.(e) : void 0;
				c && void 0 !== r && (w(c, !0), c = void 0, d = r);
				const { pass: t, index: o } = e;
				l[o] = await t.run(M, x);
			}
		} catch (v) {
			throw g = !0, h.stopped = !0, v;
		} finally {
			c && w(c, g || h.stopped);
		}
	}, x = Math.min(t.length, n + 1);
	let g;
	if (void 0 === a) {
		const e = Array.from({ length: x }, () => ({
			cost: 0,
			passes: []
		}));
		n > 0 && d.sort((e, r) => r.pass.cost - e.pass.cost);
		for (const r of d) {
			const t = e.reduce((e, r) => r.cost < e.cost ? r : e);
			t.passes.push(r), t.cost += r.pass.cost;
		}
		g = Promise.all(e.map((e, r) => M(r, () => e.passes.shift(), 1 / (n + 1))));
	} else {
		const e = (e) => e?.pass.memoryGib ?? 0;
		d.sort((r, t) => e(t) - e(r) || t.pass.cost - r.pass.cost);
		let r = 0, t = 0, o = 0;
		g = new Promise((s, n) => {
			let i = 0;
			const c = () => {
				for (; t < x && r < d.length && (0 === t || o + e(d[r]) <= a);) {
					let p = e(d[r]);
					o += p, i += 1;
					const u = (r) => {
						const t = e(r);
						if (!(2 * t > p)) return o -= p - t, p = t, queueMicrotask(c), Math.min(1, t / a);
					};
					M(t++, m, Math.min(1, p / a), u).then(() => {
						0 === --i && s();
					}, n);
				}
			}, m = () => {
				const e = d[r++];
				return e && c(), e;
			};
			c();
		});
	}
	try {
		await Promise.race([b, g]);
	} catch (v) {
		h.stopped = !0;
		try {
			m();
		} catch {}
		throw v;
	} finally {
		h.done = !0, y && c?.removeEventListener("abort", y);
		for (const e of [...f.keys()]) w(e, !0);
	}
	return l;
}
export { n as a, a as i, o as n, c as o, s as r, t };
