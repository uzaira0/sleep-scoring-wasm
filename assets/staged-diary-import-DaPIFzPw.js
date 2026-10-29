import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { Et as t, Tt as a, bt as r, t as i } from "./schema-CyUnUnE_.js";
import "./local-data-source-Tt2pzSDA.js";
import { P as n, S as s, n as o, t as c } from "./workspace-db-BQvvwDug.js";
import "./background-jobs-h7korJeC.js";
import { It as l, N as d, at as f, bt as u, ct as p, i as m, it as g, lt as y, ot as w, rt as h, st as v, xt as _, yt as b } from "./store-lJ6KVo7V.js";
import { S as E } from "./night-session-registry-xcC-CBc7.js";
import { t as S } from "./audit-log-BccWKNFM.js";
import { c as j, s as k } from "./diary-local-import-contract-CEOMJhpC.js";
import "./diary-source-adapter-CC2NP2AR.js";
n.evening_onset, n.evening_onset, n.morning_offset, n.morning_offset;
const { verdictMinutes: D } = j, M = (D.spt_verdict_max_minutes, D.tib_verdict_max_minutes, D.onset_gap_verdict_max_minutes, D.sol_verdict_max_minutes, l), C = {
	upload: "upload",
	structure: "structure",
	map: "mapping",
	mapping: "mapping",
	validate: "validate"
}, K = "<destination>";
(function(e) {
	const t = k[e];
	if (void 0 === C[t.resolveStep]) throw new Error(`Diary decision rule ${e} resolves on unknown step ${t.resolveStep}.`);
	const a = t.resolveControl;
	a.includes(K) && a.replace(`-${K}`, "");
})("time_only_date_filled"), new Map(Object.entries(k).flatMap(([e, t]) => t.findingCodes.map((t) => [t, e]))), new Map(Object.entries(M).map(([e, t]) => [t, e])), Object.values(s), Object.fromEntries([
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
var x = e({
	DIARY_RECOVERY_RECEIPT_EVENT: () => I,
	attachStagedDiaryEntriesForFiles: () => L,
	mergeDiaryRecovery: () => A,
	recordDiaryRecoveryPass: () => T,
	recoverWorkspaceDiaryBindings: () => P,
	runDiaryRecovery: () => O
});
const I = "diary-recovery-receipt", R = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap();
function A(e, t) {
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
const B = /* @__PURE__ */ new WeakSet();
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
	return T(e, r);
}
function T(e, t) {
	if (t.failed) {
		const { receipts: e, ...a } = t;
		console.warn("[diary] Workspace recovery failed; retry on the next activation.", a);
	}
	if (B.has(t)) return R.get(e) ?? t;
	B.add(t);
	const a = A(R.get(e), t);
	var r = a;
	return Boolean(r.failed || r.conflicted || r.attached || r.moved || r.restaged || r.mirrored) && (R.set(e, a), "undefined" != typeof window && window.dispatchEvent(new CustomEvent(I, { detail: e }))), a;
}
async function P(e, t) {
	o() && e === c() && await O(e, S.captureWorkspaceBinding(e, t));
}
function L(e, n = c(), s, o = []) {
	const l = W.get(n);
	if (l) return e.flatMap(t).forEach((e) => l.scope.add(e)), o.forEach((e) => l.retryKeys.add(e)), 0 === e.length && (l.all = !0), l.rerun = !0, l.promise;
	const j = {
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
	}, k = s ?? function(e) {
		const { username: t, selectedStudyId: a } = m.getState();
		return S.captureWorkspaceBinding(e, {
			signal: void 0,
			username: t,
			studyId: a
		});
	}(n);
	return j.promise = E(n, async () => {
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
				const c = await f(n), l = [.../* @__PURE__ */ new Set([...c.filter((e) => j.all || t({ filename: e }).some((e) => j.scope.has(e))), ...j.retryKeys])];
				if (j.retryKeys.clear(), 0 === l.length) continue;
				const m = await d(n, {
					participantKeys: l,
					includeIncomplete: !0
				}), E = [.../* @__PURE__ */ new Set([...m.map(a), ...l.filter((e) => !m.some((a) => t(a).includes(e)))])];
				for (const f of E) {
					const c = m.filter((e) => a(e) === f), E = [.../* @__PURE__ */ new Set([f, ...c.flatMap(t)])];
					let S = {
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					};
					try {
						await _(n, k), S = await n.transaction("rw", [
							n.files,
							n.diaryEntries,
							n.stagedDiaryEntries,
							n.diaryOccurrences,
							n.diaryBindingDirty,
							n.projectMeta,
							n.walLog,
							n.auditLog,
							...v(n)
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
								o = await h([f], n, k), s.push(o.receipt), e.conflicted += o.conflicted, o.deferred && e.failed++;
							} catch {
								e.failed++;
							}
							const c = await d(n, {
								participantKeys: E,
								includeIncomplete: !0
							}), m = await y(n, c), v = new Set(c.map(a)), _ = [.../* @__PURE__ */ new Set([f, ...c.flatMap(t)])], S = await w(n, _), j = [];
							for (const t of S) {
								const a = p(t.sourceKey, t.analysisDate, m), i = a.status === r.MATCHED ? a.file : null;
								if (!i?.id || o?.deferred) {
									e.remaining++;
									continue;
								}
								let c;
								try {
									c = await g(t, i, n, { enclosingAudit: !0 });
								} catch {
									e.failed++, e.remaining++;
									continue;
								}
								"conflict" === c.status && (e.conflicted++, s.push(c.receipt)), "target_changed" === c.status && e.failed++, "attached" === c.status ? (s.push(c.receipt), j.push(c.receipt), e.attached++) : e.remaining++;
							}
							j.length > 0 && await b(u("attach", j), k), e.receipts = s;
							for (const t of [
								"restaged",
								"moved",
								"mirrored",
								"unrecoverable"
							]) o?.[t] && (e[t] = o[t]);
							return e.failed || e.conflicted || await n.diaryBindingDirty.bulkDelete([...[.../* @__PURE__ */ new Set([
								f,
								...l.filter((e) => _.includes(e)),
								...S.map((e) => e.normalizedSourceKey)
							])].filter((e) => e === f || !v.has(e)).map((e) => i + e), ...c.filter((e) => a(e) === f).map((e) => e.id)]), e;
						});
					} catch {
						S.failed++;
					}
					o.set(f, S), s.push(...S.receipts);
					for (const t of [
						"attached",
						"moved",
						"restaged",
						"mirrored"
					]) S[t] && (e[t] = (e[t] ?? 0) + S[t]);
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
		return W.delete(n), {
			...e,
			receipts: s
		};
	}).catch((e) => {
		throw W.get(n) === j && W.delete(n), e;
	}), W.set(n, j), j.promise;
}
export { x as t };
