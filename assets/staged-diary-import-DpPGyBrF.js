import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { Et as t, Tt as a, bt as r, t as i } from "./schema-GIDIbrNv.js";
import "./local-data-source-DcxTxWmN.js";
import { P as n, S as s, n as o, t as c } from "./workspace-db-JjnY804x.js";
import "./background-jobs-D_gayUyT.js";
import { M as l, Pt as d, _t as f, at as u, i as p, it as m, nt as g, ot as y, rt as w, st as h, tt as v, vt as _, yt as b } from "./store-M9Z2jo4l.js";
import { S as E } from "./night-session-registry-D7LYfZK-.js";
import { t as S } from "./audit-log-DUqmszre.js";
import { c as j, s as k } from "./diary-local-import-contract-BEuUbor2.js";
import "./diary-source-adapter-DIr0xJUf.js";
n.evening_onset, n.evening_onset, n.morning_offset, n.morning_offset;
const { verdictMinutes: D } = j, M = (D.spt_verdict_max_minutes, D.tib_verdict_max_minutes, D.onset_gap_verdict_max_minutes, D.sol_verdict_max_minutes, d), C = {
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
var R = e({
	DIARY_RECOVERY_RECEIPT_EVENT: () => W,
	attachStagedDiaryEntriesForFiles: () => L,
	mergeDiaryRecovery: () => B,
	recordDiaryRecoveryPass: () => P,
	recoverWorkspaceDiaryBindings: () => T,
	runDiaryRecovery: () => O
});
const W = "diary-recovery-receipt", x = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap();
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
	return P(e, r);
}
function P(e, t) {
	if (t.failed) {
		const { receipts: e, ...a } = t;
		console.warn("[diary] Workspace recovery failed; retry on the next activation.", a);
	}
	if (I.has(t)) return x.get(e) ?? t;
	I.add(t);
	const a = B(x.get(e), t);
	var r = a;
	return Boolean(r.failed || r.conflicted || r.attached || r.moved || r.restaged || r.mirrored) && (x.set(e, a), "undefined" != typeof window && window.dispatchEvent(new CustomEvent(W, { detail: e }))), a;
}
async function T(e, t) {
	o() && e === c() && await O(e, S.captureWorkspaceBinding(e, t));
}
function L(e, n = c(), s, o = []) {
	const d = A.get(n);
	if (d) return e.flatMap(t).forEach((e) => d.scope.add(e)), o.forEach((e) => d.retryKeys.add(e)), 0 === e.length && (d.all = !0), d.rerun = !0, d.promise;
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
		const { username: t, selectedStudyId: a } = p.getState();
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
				const c = await w(n), d = [.../* @__PURE__ */ new Set([...c.filter((e) => j.all || t({ filename: e }).some((e) => j.scope.has(e))), ...j.retryKeys])];
				if (j.retryKeys.clear(), 0 === d.length) continue;
				const p = await l(n, {
					participantKeys: d,
					includeIncomplete: !0
				}), E = [.../* @__PURE__ */ new Set([...p.map(a), ...d.filter((e) => !p.some((a) => t(a).includes(e)))])];
				for (const w of E) {
					const c = p.filter((e) => a(e) === w), E = [.../* @__PURE__ */ new Set([w, ...c.flatMap(t)])];
					let S = {
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					};
					try {
						await b(n, k), S = await n.transaction("rw", [
							n.files,
							n.diaryEntries,
							n.stagedDiaryEntries,
							n.diaryOccurrences,
							n.diaryBindingDirty,
							n.projectMeta,
							n.walLog,
							n.auditLog,
							...u(n)
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
								o = await v([w], n, k), s.push(o.receipt), e.conflicted += o.conflicted, o.deferred && e.failed++;
							} catch {
								e.failed++;
							}
							const c = await l(n, {
								participantKeys: E,
								includeIncomplete: !0
							}), u = await h(n, c), p = new Set(c.map(a)), b = [.../* @__PURE__ */ new Set([w, ...c.flatMap(t)])], S = await m(n, b), j = [];
							for (const t of S) {
								const a = y(t.sourceKey, t.analysisDate, u), i = a.status === r.MATCHED ? a.file : null;
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
							j.length > 0 && await f(_("attach", j), k), e.receipts = s;
							for (const t of [
								"restaged",
								"moved",
								"mirrored",
								"unrecoverable"
							]) o?.[t] && (e[t] = o[t]);
							return e.failed || e.conflicted || await n.diaryBindingDirty.bulkDelete([...[.../* @__PURE__ */ new Set([
								w,
								...d.filter((e) => b.includes(e)),
								...S.map((e) => e.normalizedSourceKey)
							])].filter((e) => e === w || !p.has(e)).map((e) => i + e), ...c.filter((e) => a(e) === w).map((e) => e.id)]), e;
						});
					} catch {
						S.failed++;
					}
					o.set(w, S), s.push(...S.receipts);
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
		return A.delete(n), {
			...e,
			receipts: s
		};
	}).catch((e) => {
		throw A.get(n) === j && A.delete(n), e;
	}), A.set(n, j), j.promise;
}
export { R as t };
