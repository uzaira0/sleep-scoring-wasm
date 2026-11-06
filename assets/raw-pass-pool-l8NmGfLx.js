import { n as r, r as e } from "./workers-ChOvAmOP.js";
function t(r) {
	return .25 * Math.max(1, r / 968617);
}
function o(r, e) {
	return {
		...e,
		maxExtraWorkers: Number.POSITIVE_INFINITY,
		workerMemoryGib: t(r.reduce((r, e) => Math.max(r, e.size), 0))
	};
}
function s(r, e) {
	return n({
		...e,
		maxExtraWorkers: Number.POSITIVE_INFINITY,
		workerMemoryGib: t(r),
		minDeviceMemoryGib: 0
	});
}
function n({ cores: r, deviceMemoryGib: e, maxExtraWorkers: t = 3, workerMemoryGib: o = 1, minDeviceMemoryGib: s = 8 }) {
	return !Number.isFinite(e) || (e ?? 0) < s || !Number.isFinite(r) || (r ?? 0) <= 2 ? 0 : Math.max(0, Math.min(t, Math.floor(r) - 2, Math.floor(e / 2 / o) - 1));
}
function a(r, e) {
	return e.primary && r instanceof Error && r.message.includes("timed out during");
}
let i = 0;
async function c(t, { primary: o, getPrimary: s, extraWorkers: n, signal: a, cancelOperation: c = () => {}, createWorker: p }) {
	if (a?.aborted) throw new DOMException("Aborted: raw passes", "AbortError");
	if (0 === t.length) return [];
	if (t.some((r) => {
		const e = Function.prototype.toString.call(r.run);
		return !e.includes("[native code]") && /^(?:async\s*)?(?:function(?:\s+\w+)?\s*|[\w$]+\s*)?\(\s*\)/u.test(e);
	})) throw new Error("A raw pass must receive its pool worker");
	if (0 === n && !o && !s && !p) throw new Error("A single-worker pass must borrow or inject its worker");
	const m = p ?? r, u = Array.from({ length: Math.min(t.length, n + 1) }, () => ({
		cost: 0,
		passes: []
	})), d = t.map((r, e) => ({
		pass: r,
		index: e
	}));
	n > 0 && d.sort((r, e) => e.pass.cost - r.pass.cost);
	for (const r of d) {
		const e = u.reduce((r, e) => e.cost < r.cost ? e : r);
		e.passes.push(r), e.cost += r.pass.cost;
	}
	const l = new Array(t.length), w = /* @__PURE__ */ new Set(), f = {
		stopped: !1,
		done: !1
	}, h = 1 / (n + 1), y = (r, e) => {
		w.delete(r) && (i = Math.max(0, i - h), !e && r.release ? r.release() : r.terminate());
	};
	let b;
	const x = new Promise((r, e) => {
		b = () => {
			f.stopped = !0, e(new DOMException("Aborted: raw passes", "AbortError"));
		}, a?.addEventListener("abort", b, { once: !0 }), a?.aborted && b();
	});
	try {
		await Promise.race([x, Promise.all(u.map(async (r, t) => {
			if (0 === r.passes.length) return;
			let n, a, p = !1;
			const u = 0 === t && (void 0 !== o || void 0 !== s), d = new Proxy({}, { get: (r, t) => {
				if (f.done) throw new Error("Raw pass pool finished");
				if (f.stopped) throw new DOMException("Aborted: raw passes", "AbortError");
				if (!a && !n) if (u) a = o ?? s();
				else if (i + h <= 1 + 4 * Number.EPSILON) {
					i += h;
					try {
						n = m({ singleThread: !0 });
					} catch (c) {
						throw i = Math.max(0, i - h), c;
					}
					w.add(n);
				} else a = o ?? s?.() ?? e();
				return Reflect.get(a ?? n.api, t);
			} }), b = {
				cancel: () => {
					a ? c() : (p = !0, n && y(n, !0));
				},
				get primary() {
					return void 0 !== a || Boolean(u);
				}
			};
			let x = !1;
			try {
				for (const { pass: e, index: t } of r.passes) {
					if (f.stopped) return;
					p && (n = void 0, p = !1), l[t] = await e.run(d, b);
				}
			} catch (E) {
				throw x = !0, f.stopped = !0, E;
			} finally {
				n && y(n, x || f.stopped);
			}
		}))]);
	} catch (E) {
		f.stopped = !0;
		try {
			c();
		} catch {}
		throw E;
	} finally {
		f.done = !0, b && a?.removeEventListener("abort", b);
		for (const r of w) y(r, !0);
	}
	return l;
}
export { c as a, n as i, s as n, a as r, o as t };
