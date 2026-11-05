import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { At as t, kt as a, t as r, wt as i } from "./schema-pjCtvTl3.js";
import "./local-data-source-JzDPSUga.js";
import { C as n, F as s, n as o, t as c } from "./workspace-db-BGLMk_xQ.js";
import "./background-jobs-Bw-sr73X.js";
import { Ft as l, N as d, at as f, bt as u, ct as p, i as m, it as g, nt as y, ot as w, rt as h, st as v, vt as _, yt as b } from "./store-BKMHiWc9.js";
import { w as E } from "./night-session-registry-BxoMUVbe.js";
import { t as j } from "./audit-log-i6jhSixT.js";
import { c as S, s as k } from "./diary-local-import-contract-BWlUaWfv.js";
import "./diary-source-adapter-ClEejpfv.js";
s.evening_onset, s.evening_onset, s.morning_offset, s.morning_offset;
const { verdictMinutes: D } = S, M = (D.spt_verdict_max_minutes, D.tib_verdict_max_minutes, D.onset_gap_verdict_max_minutes, D.sol_verdict_max_minutes, l), C = {
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
})("time_only_date_filled"), new Map(Object.entries(k).flatMap(([e, t]) => t.findingCodes.map((t) => [t, e]))), new Map(Object.entries(M).map(([e, t]) => [t, e])), Object.values(n), Object.fromEntries([
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
var A = e({
	DIARY_RECOVERY_RECEIPT_EVENT: () => R,
	attachStagedDiaryEntriesForFiles: () => L,
	mergeDiaryRecovery: () => B,
	recordDiaryRecoveryPass: () => F,
	recoverWorkspaceDiaryBindings: () => T,
	runDiaryRecovery: () => O
});
const R = "diary-recovery-receipt", W = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
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
	return F(e, r);
}
function F(e, t) {
	if (t.failed) {
		const { receipts: e, ...a } = t;
		console.warn("[diary] Workspace recovery failed; retry on the next activation.", a);
	}
	if (I.has(t)) return W.get(e) ?? t;
	I.add(t);
	const a = B(W.get(e), t);
	var r = a;
	return Boolean(r.failed || r.conflicted || r.attached || r.moved || r.restaged || r.mirrored) && (W.set(e, a), "undefined" != typeof window && window.dispatchEvent(new CustomEvent(R, { detail: e }))), a;
}
async function T(e, t) {
	o() && e === c() && await O(e, j.captureWorkspaceBinding(e, t));
}
function L(e, n = c(), s, o = []) {
	const l = x.get(n);
	if (l) return e.flatMap(t).forEach((e) => l.scope.add(e)), o.forEach((e) => l.retryKeys.add(e)), 0 === e.length && (l.all = !0), l.rerun = !0, l.promise;
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
	}, k = s ?? function(e) {
		const { username: t, selectedStudyId: a } = m.getState();
		return j.captureWorkspaceBinding(e, {
			signal: void 0,
			username: t,
			studyId: a
		});
	}(n);
	return S.promise = E(n, async () => {
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
				const c = await g(n), l = [.../* @__PURE__ */ new Set([...c.filter((e) => S.all || t({ filename: e }).some((e) => S.scope.has(e))), ...S.retryKeys])];
				if (S.retryKeys.clear(), 0 === l.length) continue;
				const m = await d(n, {
					participantKeys: l,
					includeIncomplete: !0
				}), E = [.../* @__PURE__ */ new Set([...m.map(a), ...l.filter((e) => !m.some((a) => t(a).includes(e)))])];
				for (const g of E) {
					const c = m.filter((e) => a(e) === g), E = [.../* @__PURE__ */ new Set([g, ...c.flatMap(t)])];
					let j = {
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					};
					try {
						await u(n, k), j = await n.transaction("rw", [
							n.files,
							n.diaryEntries,
							n.stagedDiaryEntries,
							n.diaryOccurrences,
							n.diaryBindingDirty,
							n.projectMeta,
							n.walLog,
							n.auditLog,
							...w(n)
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
								o = await y([g], n, k), s.push(o.receipt), e.conflicted += o.conflicted, o.deferred && e.failed++;
							} catch {
								e.failed++;
							}
							const c = await d(n, {
								participantKeys: E,
								includeIncomplete: !0
							}), u = await p(n, c), m = new Set(c.map(a)), w = [.../* @__PURE__ */ new Set([g, ...c.flatMap(t)])], j = await f(n, w), S = [];
							for (const t of j) {
								const a = v(t.sourceKey, t.analysisDate, u), r = a.status === i.MATCHED ? a.file : null;
								if (!r?.id || o?.deferred) {
									e.remaining++;
									continue;
								}
								let c;
								try {
									c = await h(t, r, n, { enclosingAudit: !0 });
								} catch {
									e.failed++, e.remaining++;
									continue;
								}
								"conflict" === c.status && (e.conflicted++, s.push(c.receipt)), "target_changed" === c.status && e.failed++, "attached" === c.status ? (s.push(c.receipt), S.push(c.receipt), e.attached++) : e.remaining++;
							}
							S.length > 0 && await _(b("attach", S), k), e.receipts = s;
							for (const t of [
								"restaged",
								"moved",
								"mirrored",
								"unrecoverable"
							]) o?.[t] && (e[t] = o[t]);
							return e.failed || e.conflicted || await n.diaryBindingDirty.bulkDelete([...[.../* @__PURE__ */ new Set([
								g,
								...l.filter((e) => w.includes(e)),
								...j.map((e) => e.normalizedSourceKey)
							])].filter((e) => e === g || !m.has(e)).map((e) => r + e), ...c.filter((e) => a(e) === g).map((e) => e.id)]), e;
						});
					} catch {
						j.failed++;
					}
					o.set(g, j), s.push(...j.receipts);
					for (const t of [
						"attached",
						"moved",
						"restaged",
						"mirrored"
					]) j[t] && (e[t] = (e[t] ?? 0) + j[t]);
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
export { A as t };
