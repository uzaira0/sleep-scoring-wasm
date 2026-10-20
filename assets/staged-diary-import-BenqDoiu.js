import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import { Tt as t, bt as a, t as r, wt as i } from "./schema-DrnhCpDE.js";
import { N as n, n as s, t as o, x as c } from "./workspace-db-_xyOoViw.js";
import "./background-jobs-CCnkyy5_.js";
import { _ as l } from "./night-session-registry-DVlyMa49.js";
import { t as d } from "./audit-log-UYWQ_PY2.js";
import { Lt as f, St as u, at as p, i as m, it as g, j as y, nt as w, ot as h, rt as v, st as _, tt as b, xt as E } from "./store-B5F9spZt.js";
import { c as j, s as S } from "./diary-local-import-contract-Dr7lRJXr.js";
import "./local-data-source-D_2otkg7.js";
import "./diary-source-adapter-CIZ_Qp46.js";
n.evening_onset, n.evening_onset, n.morning_offset, n.morning_offset;
const { verdictMinutes: D } = j, k = (D.spt_verdict_max_minutes, D.tib_verdict_max_minutes, D.onset_gap_verdict_max_minutes, D.sol_verdict_max_minutes, f), M = {
	upload: "upload",
	structure: "structure",
	map: "mapping",
	mapping: "mapping",
	validate: "validate"
}, x = "<destination>";
(function(e) {
	const t = S[e];
	if (void 0 === M[t.resolveStep]) throw new Error(`Diary decision rule ${e} resolves on unknown step ${t.resolveStep}.`);
	const a = t.resolveControl;
	a.includes(x) && a.replace(`-${x}`, "");
})("time_only_date_filled"), new Map(Object.entries(S).flatMap(([e, t]) => t.findingCodes.map((t) => [t, e]))), new Map(Object.entries(k).map(([e, t]) => [t, e])), Object.values(c), Object.fromEntries([
	{
		result: null,
		label: "All nights",
		tone: "neutral"
	},
	{
		result: "as_written",
		label: "As written",
		tone: "ok"
	},
	{
		result: "date_filled",
		label: "Date filled in",
		tone: "derived"
	},
	{
		result: "sources_agree",
		label: "Two sources agree",
		tone: "ok"
	},
	{
		result: "needs_decision",
		label: "Needs a decision",
		tone: "warning"
	},
	{
		result: "sources_disagree",
		label: "Sources disagree",
		tone: "danger"
	},
	{
		result: "cannot_be_read",
		label: "Cannot be read",
		tone: "danger"
	}
].filter((e) => null !== e.result).map((e) => [e.result, e.label.toLowerCase()]));
var C = e({
	DIARY_RECOVERY_RECEIPT_EVENT: () => K,
	attachStagedDiaryEntriesForFiles: () => L,
	mergeDiaryRecovery: () => B,
	recordDiaryRecoveryPass: () => A,
	recoverWorkspaceDiaryBindings: () => T,
	runDiaryRecovery: () => O
});
const K = "diary-recovery-receipt", W = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap();
function B(e, t) {
	if (!e) return t;
	const a = (a) => (e[a] ?? 0) + (t[a] ?? 0), r = t.failed > 0 ? e : t, i = {
		attached: a("attached"),
		conflicted: r.conflicted,
		failed: t.failed,
		remaining: r.remaining,
		receipts: [...e.receipts, ...t.receipts]
	};
	for (const n of [
		"moved",
		"restaged",
		"mirrored"
	]) a(n) && (i[n] = a(n));
	return r.unrecoverable && (i.unrecoverable = r.unrecoverable), i;
}
const I = /* @__PURE__ */ new WeakSet();
async function O(e, t, a = []) {
	let r;
	try {
		r = await L([], e, t, a);
	} catch {
		r = {
			attached: 0,
			conflicted: 0,
			failed: 1,
			remaining: 0,
			receipts: []
		};
	}
	return A(e, r);
}
function A(e, t) {
	if (t.failed) {
		const { receipts: e, ...a } = t;
		console.warn("[diary] Workspace recovery failed; retry on the next activation.", a);
	}
	if (I.has(t)) return W.get(e) ?? t;
	I.add(t);
	const a = B(W.get(e), t);
	var r = a;
	return Boolean(r.failed || r.conflicted || r.attached || r.moved || r.restaged || r.mirrored) && (W.set(e, a), "undefined" != typeof window && window.dispatchEvent(new CustomEvent(K, { detail: e }))), a;
}
async function T(e, t) {
	s() && e === o() && await O(e, d.captureWorkspaceBinding(e, t));
}
function L(e, n = o(), s, c = []) {
	const f = R.get(n);
	if (f) return e.flatMap(t).forEach((e) => f.scope.add(e)), c.forEach((e) => f.retryKeys.add(e)), 0 === e.length && (f.all = !0), f.rerun = !0, f.promise;
	const j = {
		promise: Promise.resolve({
			attached: 0,
			conflicted: 0,
			failed: 0,
			remaining: 0,
			receipts: []
		}),
		scope: new Set(e.flatMap(t)),
		retryKeys: new Set(c),
		rerun: !1,
		all: 0 === e.length
	}, S = s ?? function(e) {
		const { username: t, selectedStudyId: a } = m.getState();
		return d.captureWorkspaceBinding(e, {
			signal: void 0,
			username: t,
			studyId: a
		});
	}(n);
	return j.promise = l(n, async () => {
		const e = {
			attached: 0,
			conflicted: 0,
			failed: 0,
			remaining: 0,
			receipts: []
		}, s = [], o = /* @__PURE__ */ new Map();
		try {
			do {
				j.rerun = !1;
				const c = await v(n), l = [.../* @__PURE__ */ new Set([...c.filter((e) => j.all || t({ filename: e }).some((e) => j.scope.has(e))), ...j.retryKeys])];
				if (j.retryKeys.clear(), 0 === l.length) continue;
				const f = await y(n, {
					participantKeys: l,
					includeIncomplete: !0
				}), m = [.../* @__PURE__ */ new Set([...f.map(i), ...l.filter((e) => !f.some((a) => t(a).includes(e)))])];
				for (const v of m) {
					const c = f.filter((e) => i(e) === v), m = [.../* @__PURE__ */ new Set([v, ...c.flatMap(t)])];
					let j = {
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					};
					try {
						if (!await d.settleWritesForDb(n)) throw new Error("Diary audit predecessor could not be settled.");
						j = await n.transaction("rw", [
							n.files,
							n.diaryEntries,
							n.stagedDiaryEntries,
							n.diaryOccurrences,
							n.diaryBindingDirty,
							n.projectMeta,
							n.walLog,
							n.auditLog,
							...p(n)
						], async () => {
							const e = {
								attached: 0,
								conflicted: 0,
								failed: 0,
								remaining: 0,
								receipts: []
							}, s = [];
							let o;
							try {
								o = await b([v], n, S), s.push(o.receipt), e.conflicted += o.conflicted, o.deferred && e.failed++;
							} catch {
								e.failed++;
							}
							const c = await y(n, {
								participantKeys: m,
								includeIncomplete: !0
							}), d = await _(n, c), f = new Set(c.map(i)), p = [.../* @__PURE__ */ new Set([v, ...c.flatMap(t)])], j = await g(n, p), D = [];
							for (const t of j) {
								const r = h(t.sourceKey, t.analysisDate, d), i = r.status === a.MATCHED ? r.file : null;
								if (!i?.id || o?.deferred) {
									e.remaining++;
									continue;
								}
								let c;
								try {
									c = await w(t, i, n, { enclosingAudit: !0 });
								} catch {
									e.failed++, e.remaining++;
									continue;
								}
								"conflict" === c.status && (e.conflicted++, s.push(c.receipt)), "target_changed" === c.status && e.failed++, "attached" === c.status ? (s.push(c.receipt), D.push(c.receipt), e.attached++) : e.remaining++;
							}
							D.length > 0 && await E(u("attach", D), S), e.receipts = s;
							for (const t of [
								"restaged",
								"moved",
								"mirrored",
								"unrecoverable"
							]) o?.[t] && (e[t] = o[t]);
							return e.failed || e.conflicted || await n.diaryBindingDirty.bulkDelete([...[.../* @__PURE__ */ new Set([
								v,
								...l.filter((e) => p.includes(e)),
								...j.map((e) => e.normalizedSourceKey)
							])].filter((e) => e === v || !f.has(e)).map((e) => r + e), ...c.filter((e) => i(e) === v).map((e) => e.id)]), e;
						});
					} catch {
						j.failed++;
					}
					o.set(v, j), s.push(...j.receipts);
					for (const t of [
						"attached",
						"moved",
						"restaged",
						"mirrored"
					]) j[t] && (e[t] = (e[t] ?? 0) + j[t]);
				}
			} while (j.rerun);
		} catch (c) {
			console.warn("[diary] recovery pass failed after committed work", c instanceof Error ? c.name : typeof c), e.failed++;
		}
		for (const t of o.values()) for (const a of [
			"conflicted",
			"failed",
			"remaining",
			"unrecoverable"
		]) t[a] && (e[a] = (e[a] ?? 0) + t[a]);
		return R.delete(n), {
			...e,
			receipts: s
		};
	}).catch((e) => {
		throw R.get(n) === j && R.delete(n), e;
	}), R.set(n, j), j.promise;
}
export { C as t };
