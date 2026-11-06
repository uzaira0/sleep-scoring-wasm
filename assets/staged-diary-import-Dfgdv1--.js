import { Ft as e, Pt as t, kt as a, t as r } from "./schema-B_tCLPTi.js";
import "./local-data-source-cNqRZhf9.js";
import { I as i, n, t as s, w as o } from "./workspace-db-C0mqPCjA.js";
import "./background-jobs-CKsUPhWg.js";
import { Bt as c, Ct as l, F as d, Tt as f, at as u, ct as p, i as m, it as g, lt as w, ot as y, st as h, ut as v, wt as _ } from "./store-DM814ES4.js";
import { T as b } from "./night-session-registry-7UYyF_Uo.js";
import { t as j } from "./audit-log-GmDCUlwq.js";
import { c as S, s as k } from "./diary-local-import-contract-DhSboCi-.js";
import "./diary-source-adapter-FMtc-tDn.js";
i.evening_onset, i.evening_onset, i.morning_offset, i.morning_offset;
const { verdictMinutes: M } = S, E = (M.spt_verdict_max_minutes, M.tib_verdict_max_minutes, M.onset_gap_verdict_max_minutes, M.sol_verdict_max_minutes, c), D = {
	upload: "upload",
	structure: "structure",
	map: "mapping",
	mapping: "mapping",
	validate: "validate"
}, K = "<destination>";
(function(e) {
	const t = k[e];
	if (void 0 === D[t.resolveStep]) throw new Error(`Diary decision rule ${e} resolves on unknown step ${t.resolveStep}.`);
	const a = t.resolveControl;
	a.includes(K) && a.replace(`-${K}`, "");
})("time_only_date_filled"), new Map(Object.entries(k).flatMap(([e, t]) => t.findingCodes.map((t) => [t, e]))), new Map(Object.entries(E).map(([e, t]) => [t, e])), Object.values(o), Object.fromEntries([
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
const C = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakSet();
async function W(i, o) {
	n() && i === s() && await async function(i, n, o = []) {
		let c;
		try {
			c = await function(i, n = s(), o, c = []) {
				const S = x.get(n);
				if (S) return i.flatMap(e).forEach((e) => S.scope.add(e)), c.forEach((e) => S.retryKeys.add(e)), 0 === i.length && (S.all = !0), S.rerun = !0, S.promise;
				const k = {
					promise: Promise.resolve({
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					}),
					scope: new Set(i.flatMap(e)),
					retryKeys: new Set(c),
					rerun: !1,
					all: 0 === i.length
				}, M = o ?? function(e) {
					const { username: t, selectedStudyId: a } = m.getState();
					return j.captureWorkspaceBinding(e, {
						signal: void 0,
						username: t,
						studyId: a
					});
				}(n);
				return k.promise = b(n, async () => {
					const i = {
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					}, s = [], o = /* @__PURE__ */ new Map();
					try {
						do {
							k.rerun = !1;
							const c = await y(n), m = [.../* @__PURE__ */ new Set([...c.filter((t) => k.all || e({ filename: t }).some((e) => k.scope.has(e))), ...k.retryKeys])];
							if (k.retryKeys.clear(), 0 === m.length) continue;
							const b = await d(n, {
								participantKeys: m,
								includeIncomplete: !0
							}), j = [.../* @__PURE__ */ new Set([...b.map(t), ...m.filter((t) => !b.some((a) => e(a).includes(t)))])];
							for (const y of j) {
								const c = b.filter((e) => t(e) === y), j = [.../* @__PURE__ */ new Set([y, ...c.flatMap(e)])];
								let S = {
									attached: 0,
									conflicted: 0,
									failed: 0,
									remaining: 0,
									receipts: []
								};
								try {
									await f(n, M), S = await n.transaction("rw", [
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
										const i = {
											attached: 0,
											conflicted: 0,
											failed: 0,
											remaining: 0,
											receipts: []
										}, s = [];
										let o;
										try {
											o = await g([y], n, M), s.push(o.receipt), i.conflicted += o.conflicted, o.deferred && i.failed++;
										} catch {
											i.failed++;
										}
										const c = await d(n, {
											participantKeys: j,
											includeIncomplete: !0
										}), f = await v(n, c), p = new Set(c.map(t)), b = [.../* @__PURE__ */ new Set([y, ...c.flatMap(e)])], S = await h(n, b), k = [];
										for (const e of S) {
											const t = w(e.sourceKey, e.analysisDate, f), r = t.status === a.MATCHED ? t.file : null;
											if (!r?.id || o?.deferred) {
												i.remaining++;
												continue;
											}
											let c;
											try {
												c = await u(e, r, n, { enclosingAudit: !0 });
											} catch {
												i.failed++, i.remaining++;
												continue;
											}
											"conflict" === c.status && (i.conflicted++, s.push(c.receipt)), "target_changed" === c.status && i.failed++, "attached" === c.status ? (s.push(c.receipt), k.push(c.receipt), i.attached++) : i.remaining++;
										}
										k.length > 0 && await l(_("attach", k), M), i.receipts = s;
										for (const e of [
											"restaged",
											"moved",
											"mirrored",
											"unrecoverable"
										]) o?.[e] && (i[e] = o[e]);
										return i.failed || i.conflicted || await n.diaryBindingDirty.bulkDelete([...[.../* @__PURE__ */ new Set([
											y,
											...m.filter((e) => b.includes(e)),
											...S.map((e) => e.normalizedSourceKey)
										])].filter((e) => e === y || !p.has(e)).map((e) => r + e), ...c.filter((e) => t(e) === y).map((e) => e.id)]), i;
									});
								} catch {
									S.failed++;
								}
								o.set(y, S), s.push(...S.receipts);
								for (const e of [
									"attached",
									"moved",
									"restaged",
									"mirrored"
								]) S[e] && (i[e] = (i[e] ?? 0) + S[e]);
							}
						} while (k.rerun);
					} catch (c) {
						console.warn("[diary] recovery pass failed after committed work", c instanceof Error ? c.name : typeof c), i.failed++;
					}
					for (const e of o.values()) for (const t of [
						"conflicted",
						"failed",
						"remaining",
						"unrecoverable"
					]) e[t] && (i[t] = (i[t] ?? 0) + e[t]);
					return x.delete(n), {
						...i,
						receipts: s
					};
				}).catch((e) => {
					throw x.get(n) === k && x.delete(n), e;
				}), x.set(n, k), k.promise;
			}([], i, n, o);
		} catch {
			c = {
				attached: 0,
				conflicted: 0,
				failed: 1,
				remaining: 0,
				receipts: []
			};
		}
		return function(e, t) {
			if (t.failed) {
				const { receipts: e, ...a } = t;
				console.warn("[diary] Workspace recovery failed; retry on the next activation.", a);
			}
			if (B.has(t)) return C.get(e) ?? t;
			B.add(t);
			const a = function(e, t) {
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
			}(C.get(e), t);
			var r = a;
			return Boolean(r.failed || r.conflicted || r.attached || r.moved || r.restaged || r.mirrored) && (C.set(e, a), "undefined" != typeof window && window.dispatchEvent(new CustomEvent("diary-recovery-receipt", { detail: e }))), a;
		}(i, c);
	}(i, j.captureWorkspaceBinding(i, o));
}
export { W as recoverWorkspaceDiaryBindings };
