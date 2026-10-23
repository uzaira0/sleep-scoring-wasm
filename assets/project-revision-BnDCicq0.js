import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import { mn as t } from "./schema-CYmiFjVW.js";
import "./workspace-db-DmdvN4sJ.js";
var n = e({
	PROJECT_REVISION_APPLIED_EVENT: () => PROJECT_REVISION_APPLIED_EVENT,
	PROJECT_REVISION_CHANNEL: () => r,
	PROJECT_REVISION_KEY: () => o,
	PROJECT_REVISION_STORAGE_KEY: () => a,
	createProjectRevisionSignal: () => v,
	joinBackgroundJobCommits: () => m,
	publishWorkspaceDeletion: () => s,
	trackBackgroundJobCommits: () => p,
	withProjectRevisionTxOn: () => h,
	withSignalTxOn: () => S
});
const o = "project-revision", r = "sleep-scoring:project-revision:v1", a = "sleep-scoring:project-revision-signal:v1", i = "workspace-deleted";
function s() {
	E({ type: i });
}
const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new WeakMap();
function p(e, t) {
	const n = t ? f.get(t) : void 0;
	return f.set(e, {
		committed: /* @__PURE__ */ new Set(),
		parent: n,
		joiners: /* @__PURE__ */ new Set()
	}), () => {
		f.delete(e);
	};
}
function m(e, t) {
	const n = t ? f.get(t) : void 0;
	n && e && f.get(e)?.joiners.add(n);
}
function u(e, t, n = /* @__PURE__ */ new Set()) {
	for (let o = e; o && !n.has(o); o = o.parent) {
		n.add(o), o.committed.add(t);
		for (const e of o.joiners) u(e, t, n);
	}
}
function w(e) {
	if (!Number.isSafeInteger(e) || e < 0) throw new Error("Local project revision is invalid");
}
function v(e) {
	return w(e), Object.freeze({
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
function b(e, t) {
	for (const n of c) try {
		n(e, t);
	} catch {}
	E(v(t));
}
const g = /* @__PURE__ */ new WeakSet();
async function S(e, n, o, r) {
	const a = r ?? (t.currentTransaction ? d.get(t.currentTransaction) : void 0);
	let i;
	a?.throwIfAborted();
	try {
		return i = e.transaction("rw", n.map((t) => e.table(t.name)), async (t) => {
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
				const o = f.get(a);
				o && n.on("complete", () => {
					u(o, e.name);
				});
			}
			const n = await o(t);
			return a?.throwIfAborted(), n;
		}), l.add(i), await i;
	} catch (s) {
		throw a?.throwIfAborted(), s;
	} finally {
		i && l.delete(i);
	}
}
async function h(e, n, r, a) {
	const i = /* @__PURE__ */ new Set([e.projectMeta.name]);
	for (const t of n) i.add(t.name);
	const s = [...i].map((t) => e.table(t));
	let c = t.currentTransaction;
	for (; c?.parent;) c = c.parent;
	const d = c?.db === e ? c : null;
	if (d && g.has(d) && s.every((e) => d.storeNames.includes(e.name))) return S(e, s, r, a);
	const f = S(e, s, async (t) => {
		g.add(d ?? t);
		const n = t.table(e.projectMeta.name), a = ((await n.get("project-revision"))?.revision ?? 0) + 1;
		w(a);
		const i = await r(t);
		return await n.put({
			key: o,
			revision: a
		}), {
			value: i,
			revision: a
		};
	}, a), p = d ? new Promise((e) => {
		d.on("complete", e), d.on("abort", e);
	}) : f;
	l.add(p), p.then(() => l.delete(p), () => l.delete(p));
	const m = await f;
	return d ? d.idbtrans.addEventListener("complete", () => b(e, m.revision), { once: !0 }) : b(e, m.revision), m.value;
}
export { S as a, h as i, n, p as r, m as t };
