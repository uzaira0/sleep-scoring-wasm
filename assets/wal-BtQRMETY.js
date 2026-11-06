import { On as e, Tn as t, f as a } from "./schema-B0CR2EpS.js";
import { G as o, t as n } from "./workspace-db-CwhwLMaR.js";
import { n as r } from "./background-jobs-BvDFFUGv.js";
import { i as s } from "./project-revision-D6MjEMMu.js";
var i = e({
	WAL_PAYLOAD_VERSION: () => 1,
	WAL_SOFT_MAX_ENTRIES: () => c,
	WAL_TAIL_KEY: () => l,
	appendWal: () => b,
	appendWalMany: () => I,
	getSessionId: () => T,
	trimWalWhenIdle: () => S,
	withWalTx: () => y
});
const c = 5e4, u = 5e3, l = "wal-tail";
async function d(e, t) {
	const [a, o] = await Promise.all([t ? t.get(l) : Promise.resolve(void 0), e.orderBy("seq").lastKey()]), n = "number" == typeof o ? o : 0;
	return {
		lastSeq: Math.max(a?.lastSeq ?? 0, n),
		count: a?.count ?? await e.count(),
		checkpointThroughSeq: a?.checkpointThroughSeq ?? 0,
		prunedThroughSeq: a?.prunedThroughSeq ?? 0
	};
}
function p(e) {
	return {
		key: l,
		lastSeq: e.lastSeq,
		count: e.count,
		checkpointThroughSeq: e.checkpointThroughSeq,
		prunedThroughSeq: e.prunedThroughSeq
	};
}
async function h(e, a) {
	var o;
	e.meta && await e.meta.put(p(a)), a.count >= 5e4 && a.checkpointThroughSeq > a.prunedThroughSeq && (o = e.db, t.ignoreTransaction(() => S(o).catch(() => 0)));
}
const w = /* @__PURE__ */ new WeakMap();
function m() {
	const e = t.currentTransaction;
	if (!e || !e.storeNames.includes("walLog")) throw new Error("appendWal must run inside a write transaction scoped to walLog");
	const a = w.get(e);
	if (a) return a;
	const o = e.table("walLog"), n = e.storeNames.includes("projectMeta") ? e.table("projectMeta") : null, r = {
		walLog: o,
		meta: n,
		db: e.db,
		tail: d(o, n),
		appendChain: Promise.resolve()
	};
	return w.set(e, r), r;
}
async function g(e, t, a) {
	if (t <= 0 || a <= 0) return 0;
	const o = await e.where("seq").belowOrEqual(a).limit(t).primaryKeys();
	if (0 === o.length) return 0;
	const n = o.reduce((e, t) => Math.min(e, t), 1 / 0), r = o.reduce((e, t) => Math.max(e, t), -1 / 0), s = e.where(":id").between(n, r, !0, !0);
	return await s.count() === o.length ? await s.delete() : await e.bulkDelete(o), o.length;
}
const f = 2e3;
function S(e) {
	return r({
		kind: o.WAL_TRIM,
		key: o.WAL_TRIM,
		label: "Compact recovery log",
		workspaceId: e.name,
		run: async (t) => (await t.yieldNow(), async function(e, t) {
			let a = 0, o = !1;
			for (;;) {
				const n = await e.transaction("rw", ["walLog", "projectMeta"], async (e) => {
					const t = e.table("walLog"), a = e.table("projectMeta"), n = await d(t, a);
					if (!o && n.count < 5e4) return 0;
					if (!o && (n.count = await t.count(), o = !0, n.count < 5e4)) return await a.put(p(n)), 0;
					const r = n.count - 45e3;
					if (r <= 0) return 0;
					const s = await g(t, Math.min(f, r), n.checkpointThroughSeq);
					return n.count = Math.max(0, n.count - s), 0 === s && (n.prunedThroughSeq = n.checkpointThroughSeq), await a.put(p(n)), s;
				});
				if (a += n, 0 === n) return a;
				t.progress(a, u), await t.yieldNow();
			}
		}(e, t))
	});
}
async function y(e, t, a = n(), o) {
	return s(a, [a.walLog, ...e], t, o);
}
let q;
function T() {
	if (void 0 !== q) return q;
	try {
		const e = globalThis.sessionStorage?.getItem("wal_session_id");
		if (e) return q = e, e;
	} catch {}
	const e = `wal_${a()}`;
	try {
		globalThis.sessionStorage?.setItem("wal_session_id", e);
	} catch {}
	return q = e, e;
}
function k(e) {
	return `${T()}@${e.db.name}`;
}
function b(e) {
	const t = m(), a = t.appendChain.then(async () => {
		const a = await t.tail, o = t.walLog, n = a.lastSeq + 1, r = {
			seq: n,
			ts: Math.floor(Date.now() / 1e3),
			sessionId: k(t),
			username: e.username ?? "",
			op: e.op,
			payload: e.payload,
			payloadVersion: e.payloadVersion ?? 1,
			...void 0 !== e.fileId ? { fileId: e.fileId } : {},
			...void 0 !== e.restoredSource ? { restoredSource: e.restoredSource } : {},
			...void 0 !== e.restoredFromBackup ? { restoredFromBackup: e.restoredFromBackup } : {}
		}, s = await o.add(r);
		return a.lastSeq = n, a.count += 1, await h(t, a), {
			...r,
			id: s
		};
	});
	return t.appendChain = a.then(() => {}, () => {}), a;
}
function I(e) {
	const t = m(), a = t.appendChain.then(async () => {
		if (0 === e.length) return [];
		const a = await t.tail, o = t.walLog, n = Math.floor(Date.now() / 1e3), r = k(t), s = e.map((e, t) => ({
			seq: a.lastSeq + 1 + t,
			ts: n,
			sessionId: r,
			username: e.username ?? "",
			op: e.op,
			payload: e.payload,
			payloadVersion: e.payloadVersion ?? 1,
			...void 0 !== e.fileId ? { fileId: e.fileId } : {},
			...void 0 !== e.restoredSource ? { restoredSource: e.restoredSource } : {},
			...void 0 !== e.restoredFromBackup ? { restoredFromBackup: e.restoredFromBackup } : {}
		})), i = await o.bulkAdd(s, { allKeys: !0 });
		return a.lastSeq += s.length, a.count += s.length, await h(t, a), s.map((e, t) => ({
			...e,
			id: i[t]
		}));
	});
	return t.appendChain = a.then(() => {}, () => {}), a;
}
export { y as i, I as n, i as r, b as t };
