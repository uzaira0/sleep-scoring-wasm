import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import { Tt as t, bt as a, t as r, wt as i } from "./schema-B_gLylrK.js";
import "./local-data-source-DwAWATk8.js";
import { C as n, F as s, n as o, t as c } from "./workspace-db-Df2TUNS4.js";
import "./background-jobs-OpyHc-MO.js";
import { S as l } from "./night-session-registry-CsStE3Cb.js";
import { t as d } from "./audit-log-BBuIaYr5.js";
import { Ft as f, N as u, at as p, bt as m, ct as g, i as y, it as w, lt as h, ot as v, rt as _, st as b, yt as E } from "./store-DfF35Y-t.js";
import { c as S, s as j } from "./diary-local-import-contract-DTHKLA-P.js";
import "./diary-source-adapter-_gC8IqoM.js";
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
	attachStagedDiaryEntriesForFiles: () => T,
	mergeDiaryRecovery: () => B,
	recordDiaryRecoveryPass: () => A,
	recoverWorkspaceDiaryBindings: () => F,
	runDiaryRecovery: () => O
});
const W = "diary-recovery-receipt", R = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
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
		r = await T([], e, t, a);
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
	if (I.has(t)) return R.get(e) ?? t;
	I.add(t);
	const a = B(R.get(e), t);
	var r = a;
	return Boolean(r.failed || r.conflicted || r.attached || r.moved || r.restaged || r.mirrored) && (R.set(e, a), "undefined" != typeof window && window.dispatchEvent(new CustomEvent(W, { detail: e }))), a;
}
async function F(e, t) {
	o() && e === c() && await O(e, d.captureWorkspaceBinding(e, t));
}
function T(e, n = c(), s, o = []) {
	const f = x.get(n);
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
							D.length > 0 && await E(m("attach", D), j), e.receipts = s;
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
		return x.delete(n), {
			...e,
			receipts: s
		};
	}).catch((e) => {
		throw x.get(n) === S && x.delete(n), e;
	}), x.set(n, S), S.promise;
}
export { K as t };
