import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { Tt as t, bt as a, t as r, wt as i } from "./schema-B-QId9a7.js";
import "./local-data-source-B14q0zng.js";
import { C as n, F as s, n as o, t as c } from "./workspace-db-CgXdciVp.js";
import "./background-jobs-Jdd-Cnpd.js";
import { S as l } from "./night-session-registry-C3aes2-o.js";
import { t as d } from "./audit-log-Byf_Sdj9.js";
import { It as f, N as u, at as p, bt as m, ct as g, i as y, it as w, lt as h, ot as v, rt as _, st as b, xt as E } from "./store-AoVV0llU.js";
import { c as S, s as j } from "./diary-local-import-contract-BsbwMBCu.js";
import "./diary-source-adapter-B81pqp8e.js";
s.evening_onset, s.evening_onset, s.morning_offset, s.morning_offset;
const { verdictMinutes: D } = S, k = (D.spt_verdict_max_minutes, D.tib_verdict_max_minutes, D.onset_gap_verdict_max_minutes, D.sol_verdict_max_minutes, f), M = {
	upload: "upload",
	structure: "structure",
	map: "mapping",
	mapping: "mapping",
	validate: "validate"
}, C = "<destination>";
(function(e) {
	const t = j[e];
	if (void 0 === M[t.resolveStep]) throw new Error(`Diary decision rule ${e} resolves on unknown step ${t.resolveStep}.`);
	const a = t.resolveControl;
	a.includes(C) && a.replace(`-${C}`, "");
})("time_only_date_filled"), new Map(Object.entries(j).flatMap(([e, t]) => t.findingCodes.map((t) => [t, e]))), new Map(Object.entries(k).map(([e, t]) => [t, e])), Object.values(n), Object.fromEntries([
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
var K = e({
	DIARY_RECOVERY_RECEIPT_EVENT: () => W,
	attachStagedDiaryEntriesForFiles: () => F,
	mergeDiaryRecovery: () => R,
	recordDiaryRecoveryPass: () => O,
	recoverWorkspaceDiaryBindings: () => T,
	runDiaryRecovery: () => B
});
const W = "diary-recovery-receipt", x = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap();
function R(e, t) {
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
const A = /* @__PURE__ */ new WeakSet();
async function B(e, t, a = []) {
	let r;
	try {
		r = await F([], e, t, a);
	} catch {
		r = {
			attached: 0,
			conflicted: 0,
			failed: 1,
			remaining: 0,
			receipts: []
		};
	}
	return O(e, r);
}
function O(e, t) {
	if (t.failed) {
		const { receipts: e, ...a } = t;
		console.warn("[diary] Workspace recovery failed; retry on the next activation.", a);
	}
	if (A.has(t)) return x.get(e) ?? t;
	A.add(t);
	const a = R(x.get(e), t);
	var r = a;
	return Boolean(r.failed || r.conflicted || r.attached || r.moved || r.restaged || r.mirrored) && (x.set(e, a), "undefined" != typeof window && window.dispatchEvent(new CustomEvent(W, { detail: e }))), a;
}
async function T(e, t) {
	o() && e === c() && await B(e, d.captureWorkspaceBinding(e, t));
}
function F(e, n = c(), s, o = []) {
	const f = I.get(n);
	if (f) return e.flatMap(t).forEach((e) => f.scope.add(e)), o.forEach((e) => f.retryKeys.add(e)), 0 === e.length && (f.all = !0), f.rerun = !0, f.promise;
	const S = {
		promise: Promise.resolve({
			attached: 0,
			conflicted: 0,
			failed: 0,
			remaining: 0,
			receipts: []
		}),
		scope: new Set(e.flatMap(t)),
		retryKeys: new Set(o),
		rerun: !1,
		all: 0 === e.length
	}, j = s ?? function(e) {
		const { username: t, selectedStudyId: a } = y.getState();
		return d.captureWorkspaceBinding(e, {
			signal: void 0,
			username: t,
			studyId: a
		});
	}(n);
	return S.promise = l(n, async () => {
		const e = {
			attached: 0,
			conflicted: 0,
			failed: 0,
			remaining: 0,
			receipts: []
		}, s = [], o = /* @__PURE__ */ new Map();
		try {
			do {
				S.rerun = !1;
				const c = await p(n), l = [.../* @__PURE__ */ new Set([...c.filter((e) => S.all || t({ filename: e }).some((e) => S.scope.has(e))), ...S.retryKeys])];
				if (S.retryKeys.clear(), 0 === l.length) continue;
				const f = await u(n, {
					participantKeys: l,
					includeIncomplete: !0
				}), y = [.../* @__PURE__ */ new Set([...f.map(i), ...l.filter((e) => !f.some((a) => t(a).includes(e)))])];
				for (const p of y) {
					const c = f.filter((e) => i(e) === p), y = [.../* @__PURE__ */ new Set([p, ...c.flatMap(t)])];
					let S = {
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					};
					try {
						if (!await d.settleWritesForDb(n)) throw new Error("Diary audit predecessor could not be settled.");
						S = await n.transaction("rw", [
							n.files,
							n.diaryEntries,
							n.stagedDiaryEntries,
							n.diaryOccurrences,
							n.diaryBindingDirty,
							n.projectMeta,
							n.walLog,
							n.auditLog,
							...b(n)
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
								o = await _([p], n, j), s.push(o.receipt), e.conflicted += o.conflicted, o.deferred && e.failed++;
							} catch {
								e.failed++;
							}
							const c = await u(n, {
								participantKeys: y,
								includeIncomplete: !0
							}), d = await h(n, c), f = new Set(c.map(i)), b = [.../* @__PURE__ */ new Set([p, ...c.flatMap(t)])], S = await v(n, b), D = [];
							for (const t of S) {
								const r = g(t.sourceKey, t.analysisDate, d), i = r.status === a.MATCHED ? r.file : null;
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
							D.length > 0 && await m(E("attach", D), j), e.receipts = s;
							for (const t of [
								"restaged",
								"moved",
								"mirrored",
								"unrecoverable"
							]) o?.[t] && (e[t] = o[t]);
							return e.failed || e.conflicted || await n.diaryBindingDirty.bulkDelete([...[.../* @__PURE__ */ new Set([
								p,
								...l.filter((e) => b.includes(e)),
								...S.map((e) => e.normalizedSourceKey)
							])].filter((e) => e === p || !f.has(e)).map((e) => r + e), ...c.filter((e) => i(e) === p).map((e) => e.id)]), e;
						});
					} catch {
						S.failed++;
					}
					o.set(p, S), s.push(...S.receipts);
					for (const t of [
						"attached",
						"moved",
						"restaged",
						"mirrored"
					]) S[t] && (e[t] = (e[t] ?? 0) + S[t]);
				}
			} while (S.rerun);
		} catch (c) {
			console.warn("[diary] recovery pass failed after committed work", c instanceof Error ? c.name : typeof c), e.failed++;
		}
		for (const t of o.values()) for (const a of [
			"conflicted",
			"failed",
			"remaining",
			"unrecoverable"
		]) t[a] && (e[a] = (e[a] ?? 0) + t[a]);
		return I.delete(n), {
			...e,
			receipts: s
		};
	}).catch((e) => {
		throw I.get(n) === S && I.delete(n), e;
	}), I.set(n, S), S.promise;
}
export { K as t };
