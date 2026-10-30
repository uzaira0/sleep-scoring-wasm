import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { Sn as t, p as a } from "./schema-DheLOO14.js";
import { q as o, t as n } from "./workspace-db-BkgAmWWL.js";
import { n as r } from "./background-jobs-CUpMApti.js";
import { i as s } from "./project-revision-COtFK2fV.js";
var i = e({
	WAL_PAYLOAD_VERSION: () => 1,
	WAL_SOFT_MAX_ENTRIES: () => c,
	WAL_TAIL_KEY: () => u,
	appendWal: () => q,
	appendWalMany: () => k,
	getSessionId: () => I,
	trimWalWhenIdle: () => h,
	withWalTx: () => g
});
const c = 5e4, l = 5e3, u = "wal-tail";
async function d(e, t) {
	const [a, o] = await Promise.all([t ? t.get(u) : Promise.resolve(void 0), e.orderBy("seq").lastKey()]), n = "number" == typeof o ? o : 0;
	return {
		lastSeq: Math.max(a?.lastSeq ?? 0, n),
		count: a?.count ?? await e.count()
	};
}
async function p(e, a) {
	var o;
	e.meta && await e.meta.put({
		key: u,
		lastSeq: a.lastSeq,
		count: a.count
	}), a.count >= 5e4 && (o = e.db, t.ignoreTransaction(() => h(o).catch(() => 0)));
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
async function f(e, t) {
	if (t <= 0) return 0;
	const a = await e.orderBy(":id").limit(t).primaryKeys(), o = a[a.length - 1];
	return void 0 === o ? 0 : e.where(":id").belowOrEqual(o).delete();
}
const y = 2e3;
function h(e) {
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
					if (!o && (n.count = await t.count(), o = !0, n.count < 5e4)) return await a.put({
						key: u,
						lastSeq: n.lastSeq,
						count: n.count
					}), 0;
					const r = n.count - 45e3, s = await f(t, Math.min(y, r));
					return n.count = Math.max(0, n.count - s), await a.put({
						key: u,
						lastSeq: n.lastSeq,
						count: n.count
					}), s;
				});
				if (a += n, 0 === n) return a;
				t.progress(a, l), await t.yieldNow();
			}
		}(e, t))
	});
}
async function g(e, t, a = n(), o) {
	return s(a, [a.walLog, ...e], t, o);
}
let S;
function I() {
	if (void 0 !== S) return S;
	try {
		const e = globalThis.sessionStorage?.getItem("wal_session_id");
		if (e) return S = e, e;
	} catch {}
	const e = `wal_${a()}`;
	try {
		globalThis.sessionStorage?.setItem("wal_session_id", e);
	} catch {}
	return S = e, e;
}
function b(e) {
	return `${I()}@${e.db.name}`;
}
function q(e) {
	const t = m(), a = t.appendChain.then(async () => {
		const a = await t.tail, o = t.walLog, n = a.lastSeq + 1, r = {
			seq: n,
			ts: Math.floor(Date.now() / 1e3),
			sessionId: b(t),
			username: e.username ?? "",
			op: e.op,
			payload: e.payload,
			payloadVersion: e.payloadVersion ?? 1,
			...void 0 !== e.fileId ? { fileId: e.fileId } : {},
			...void 0 !== e.restoredSource ? { restoredSource: e.restoredSource } : {},
			...void 0 !== e.restoredFromBackup ? { restoredFromBackup: e.restoredFromBackup } : {}
		}, s = await o.add(r);
		return a.lastSeq = n, a.count += 1, await p(t, a), {
			...r,
			id: s
		};
	});
	return t.appendChain = a.then(() => {}, () => {}), a;
}
function k(e) {
	const t = m(), a = t.appendChain.then(async () => {
		if (0 === e.length) return [];
		const a = await t.tail, o = t.walLog, n = Math.floor(Date.now() / 1e3), r = b(t), s = e.map((e, t) => ({
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
		return a.lastSeq += s.length, a.count += s.length, await p(t, a), s.map((e, t) => ({
			...e,
			id: i[t]
		}));
	});
	return t.appendChain = a.then(() => {}, () => {}), a;
}
export { g as i, k as n, i as r, q as t };
