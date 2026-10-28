import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { Et as t, Tt as a, bt as r, t as i } from "./schema-ovLsLXAy.js";
import "./local-data-source-BTHqwkBW.js";
import { P as n, S as s, n as o, t as c } from "./workspace-db-BfwRi1Vg.js";
import "./background-jobs-BBI4xtX0.js";
import { S as l } from "./night-session-registry-n5vYDk0x.js";
import { t as d } from "./audit-log-B3QI5LTe.js";
import { Lt as f, N as u, St as p, at as m, bt as g, ct as y, i as w, it as h, lt as v, ot as _, rt as b, st as S, xt as E } from "./store-BhYkkFjA.js";
import { c as j, s as k } from "./diary-local-import-contract-BlEvNVVk.js";
import "./diary-source-adapter-QraHKp0f.js";
n.evening_onset, n.evening_onset, n.morning_offset, n.morning_offset;
const { verdictMinutes: D } = j, M = (D.spt_verdict_max_minutes, D.tib_verdict_max_minutes, D.onset_gap_verdict_max_minutes, D.sol_verdict_max_minutes, f), C = {
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
	DIARY_RECOVERY_RECEIPT_EVENT: () => R,
	attachStagedDiaryEntriesForFiles: () => P,
	mergeDiaryRecovery: () => B,
	recordDiaryRecoveryPass: () => T,
	recoverWorkspaceDiaryBindings: () => L,
	runDiaryRecovery: () => O
});
const R = "diary-recovery-receipt", W = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap();
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
		r = await P([], e, t, a);
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
	if (I.has(t)) return W.get(e) ?? t;
	I.add(t);
	const a = B(W.get(e), t);
	var r = a;
	return Boolean(r.failed || r.conflicted || r.attached || r.moved || r.restaged || r.mirrored) && (W.set(e, a), "undefined" != typeof window && window.dispatchEvent(new CustomEvent(R, { detail: e }))), a;
}
async function L(e, t) {
	o() && e === c() && await O(e, d.captureWorkspaceBinding(e, t));
}
function P(e, n = c(), s, o = []) {
	const f = A.get(n);
	if (f) return e.flatMap(t).forEach((e) => f.scope.add(e)), o.forEach((e) => f.retryKeys.add(e)), 0 === e.length && (f.all = !0), f.rerun = !0, f.promise;
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
		const { username: t, selectedStudyId: a } = w.getState();
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
				const c = await m(n), l = [.../* @__PURE__ */ new Set([...c.filter((e) => j.all || t({ filename: e }).some((e) => j.scope.has(e))), ...j.retryKeys])];
				if (j.retryKeys.clear(), 0 === l.length) continue;
				const d = await u(n, {
					participantKeys: l,
					includeIncomplete: !0
				}), f = [.../* @__PURE__ */ new Set([...d.map(a), ...l.filter((e) => !d.some((a) => t(a).includes(e)))])];
				for (const m of f) {
					const c = d.filter((e) => a(e) === m), f = [.../* @__PURE__ */ new Set([m, ...c.flatMap(t)])];
					let w = {
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					};
					try {
						await p(n, k), w = await n.transaction("rw", [
							n.files,
							n.diaryEntries,
							n.stagedDiaryEntries,
							n.diaryOccurrences,
							n.diaryBindingDirty,
							n.projectMeta,
							n.walLog,
							n.auditLog,
							...S(n)
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
								o = await b([m], n, k), s.push(o.receipt), e.conflicted += o.conflicted, o.deferred && e.failed++;
							} catch {
								e.failed++;
							}
							const c = await u(n, {
								participantKeys: f,
								includeIncomplete: !0
							}), d = await v(n, c), p = new Set(c.map(a)), w = [.../* @__PURE__ */ new Set([m, ...c.flatMap(t)])], S = await _(n, w), j = [];
							for (const t of S) {
								const a = y(t.sourceKey, t.analysisDate, d), i = a.status === r.MATCHED ? a.file : null;
								if (!i?.id || o?.deferred) {
									e.remaining++;
									continue;
								}
								let c;
								try {
									c = await h(t, i, n, { enclosingAudit: !0 });
								} catch {
									e.failed++, e.remaining++;
									continue;
								}
								"conflict" === c.status && (e.conflicted++, s.push(c.receipt)), "target_changed" === c.status && e.failed++, "attached" === c.status ? (s.push(c.receipt), j.push(c.receipt), e.attached++) : e.remaining++;
							}
							j.length > 0 && await g(E("attach", j), k), e.receipts = s;
							for (const t of [
								"restaged",
								"moved",
								"mirrored",
								"unrecoverable"
							]) o?.[t] && (e[t] = o[t]);
							return e.failed || e.conflicted || await n.diaryBindingDirty.bulkDelete([...[.../* @__PURE__ */ new Set([
								m,
								...l.filter((e) => w.includes(e)),
								...S.map((e) => e.normalizedSourceKey)
							])].filter((e) => e === m || !p.has(e)).map((e) => i + e), ...c.filter((e) => a(e) === m).map((e) => e.id)]), e;
						});
					} catch {
						w.failed++;
					}
					o.set(m, w), s.push(...w.receipts);
					for (const t of [
						"attached",
						"moved",
						"restaged",
						"mirrored"
					]) w[t] && (e[t] = (e[t] ?? 0) + w[t]);
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
		return A.delete(n), {
			...e,
			receipts: s
		};
	}).catch((e) => {
		throw A.get(n) === j && A.delete(n), e;
	}), A.set(n, j), j.promise;
}
export { x as t };
