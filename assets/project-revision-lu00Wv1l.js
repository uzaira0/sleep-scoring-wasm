import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { bn as t } from "./schema-BTS6VNV3.js";
import "./workspace-db-V6iUJ7Hd.js";
var n = e({
	PROJECT_REVISION_APPLIED_EVENT: () => PROJECT_REVISION_APPLIED_EVENT,
	PROJECT_REVISION_CHANNEL: () => r,
	PROJECT_REVISION_KEY: () => o,
	PROJECT_REVISION_STORAGE_KEY: () => a,
	createProjectRevisionSignal: () => w,
	joinBackgroundJobCommits: () => m,
	publishWorkspaceDeletion: () => i,
	trackBackgroundJobCommits: () => f,
	withProjectRevisionTxOn: () => h,
	withSignalTxOn: () => S
});
const o = "project-revision", r = "sleep-scoring:project-revision:v1", a = "sleep-scoring:project-revision-signal:v1", s = "workspace-deleted";
function i() {
	E({ type: s });
}
const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new WeakMap();
function f(e, t) {
	const n = t ? p.get(t) : void 0;
	return p.set(e, {
		committed: /* @__PURE__ */ new Set(),
		parent: n,
		joiners: /* @__PURE__ */ new Set()
	}), () => {
		p.delete(e);
	};
}
function m(e, t) {
	const n = t ? p.get(t) : void 0;
	n && e && p.get(e)?.joiners.add(n);
}
function u(e, t, n = /* @__PURE__ */ new Set()) {
	for (let o = e; o && !n.has(o); o = o.parent) {
		n.add(o), o.committed.add(t);
		for (const e of o.joiners) u(e, t, n);
	}
}
function v(e) {
	if (!Number.isSafeInteger(e) || e < 0) throw new Error("Local project revision is invalid");
}
function w(e) {
	return v(e), Object.freeze({
		type: "project-revision",
		revision: e
	});
}
function E(e) {
	try {
		if ("undefined" != typeof BroadcastChannel) {
			const t = new BroadcastChannel(r);
			t.postMessage(e), t.close();
		}
	} catch {}
	try {
		"undefined" != typeof localStorage && (localStorage.setItem(a, JSON.stringify(e)), localStorage.removeItem(a));
	} catch {}
}
function g(e, t) {
	for (const n of c) try {
		n(e, t);
	} catch {}
	E(w(t));
}
const b = /* @__PURE__ */ new WeakSet();
async function S(e, n, o, r) {
	const a = r ?? (t.currentTransaction ? d.get(t.currentTransaction) : void 0);
	let s;
	a?.throwIfAborted();
	try {
		return s = e.transaction("rw", n.map((t) => e.table(t.name)), async (t) => {
			if (a?.throwIfAborted(), a) {
				let n = t;
				for (; n.parent;) n = n.parent;
				if (d.get(n) !== a) {
					d.set(n, a);
					const e = () => {
						n.abort();
					}, t = () => {
						a.removeEventListener("abort", e);
					};
					a.addEventListener("abort", e, { once: !0 }), n.on("complete", t), n.on("abort", t);
				}
				d.set(t, a);
				const o = p.get(a);
				o && n.on("complete", () => {
					u(o, e.name);
				});
			}
			const n = await o(t);
			return a?.throwIfAborted(), n;
		}), l.add(s), await s;
	} catch (i) {
		throw a?.throwIfAborted(), i;
	} finally {
		s && l.delete(s);
	}
}
async function h(e, n, r, a) {
	const s = /* @__PURE__ */ new Set([e.projectMeta.name]);
	for (const t of n) s.add(t.name);
	const i = [...s].map((t) => e.table(t));
	let c = t.currentTransaction;
	for (; c?.parent;) c = c.parent;
	const d = c?.db === e ? c : null;
	if (d && b.has(d) && i.every((e) => d.storeNames.includes(e.name))) return S(e, i, r, a);
	const p = S(e, i, async (t) => {
		b.add(d ?? t);
		const n = t.table(e.projectMeta.name), a = ((await n.get("project-revision"))?.revision ?? 0) + 1;
		v(a);
		const s = await r(t);
		return await n.put({
			key: o,
			revision: a
		}), {
			value: s,
			revision: a
		};
	}, a), f = d ? new Promise((e) => {
		d.on("complete", e), d.on("abort", e);
	}) : p;
	l.add(f), f.then(() => l.delete(f), () => l.delete(f));
	const m = await p;
	return d ? d.idbtrans.addEventListener("complete", () => g(e, m.revision), { once: !0 }) : g(e, m.revision), m.value;
}
export { S as a, h as i, n, f as r, m as t };
