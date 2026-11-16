import { Bt as e, Pt as t, t as a, zt as r } from "./schema-MMK46mR-.js";
import { F as i, S as n, n as s, t as o } from "./workspace-db-YhWSrcvp.js";
import "./background-jobs-Dz-LteaG.js";
import "./local-data-source-63fZkIbT.js";
import { Ct as c, P as l, St as d, at as f, ct as u, it as p, lt as m, ot as g, r as w, st as y, ut as h, wt as v, zt as _ } from "./store-CGm5oa9P.js";
import { k as b } from "./night-session-registry-Ds5SlWLP.js";
import { t as S } from "./audit-log-BT8eFzV0.js";
import { c as j, s as k } from "./diary-local-import-contract-DjaiAxQT.js";
import "./diary-source-adapter-DV894YDw.js";
i.evening_onset, i.evening_onset, i.morning_offset, i.morning_offset;
const { verdictMinutes: M } = j, E = (M.spt_verdict_max_minutes, M.tib_verdict_max_minutes, M.onset_gap_verdict_max_minutes, M.sol_verdict_max_minutes, _), D = {
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
})("time_only_date_filled"), new Map(Object.entries(k).flatMap(([e, t]) => t.findingCodes.map((t) => [t, e]))), new Map(Object.entries(E).map(([e, t]) => [t, e])), Object.values(n), Object.fromEntries([
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
async function W(i, n) {
	s() && i === o() && await async function(i, n, s = []) {
		let _;
		try {
			_ = await function(i, n = o(), s, _ = []) {
				const j = x.get(n);
				if (j) return i.flatMap(e).forEach((e) => j.scope.add(e)), _.forEach((e) => j.retryKeys.add(e)), 0 === i.length && (j.all = !0), j.rerun = !0, j.promise;
				const k = {
					promise: Promise.resolve({
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					}),
					scope: new Set(i.flatMap(e)),
					retryKeys: new Set(_),
					rerun: !1,
					all: 0 === i.length
				}, M = s ?? function(e) {
					const { username: t, selectedStudyId: a } = w.getState();
					return S.captureWorkspaceBinding(e, {
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
							const w = await g(n), _ = [.../* @__PURE__ */ new Set([...w.filter((t) => k.all || e({ filename: t }).some((e) => k.scope.has(e))), ...k.retryKeys])];
							if (k.retryKeys.clear(), 0 === _.length) continue;
							const b = await l(n, {
								participantKeys: _,
								includeIncomplete: !0
							}), S = [.../* @__PURE__ */ new Set([...b.map(r), ..._.filter((t) => !b.some((a) => e(a).includes(t)))])];
							for (const g of S) {
								const w = b.filter((e) => r(e) === g), S = [.../* @__PURE__ */ new Set([g, ...w.flatMap(e)])];
								let j = {
									attached: 0,
									conflicted: 0,
									failed: 0,
									remaining: 0,
									receipts: []
								};
								try {
									await v(n, M), j = await n.transaction("rw", [
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
										const i = {
											attached: 0,
											conflicted: 0,
											failed: 0,
											remaining: 0,
											receipts: []
										}, s = [];
										let o;
										try {
											o = await p([g], n, M), s.push(o.receipt), i.conflicted += o.conflicted, o.deferred && i.failed++;
										} catch {
											i.failed++;
										}
										const u = await l(n, {
											participantKeys: S,
											includeIncomplete: !0
										}), w = await h(n, u), v = new Set(u.map(r)), b = [.../* @__PURE__ */ new Set([g, ...u.flatMap(e)])], j = await y(n, b), k = [];
										for (const e of j) {
											const a = m(e.sourceKey, e.analysisDate, w), r = a.status === t.MATCHED ? a.file : null;
											if (!r?.id || o?.deferred) {
												i.remaining++;
												continue;
											}
											let c;
											try {
												c = await f(e, r, n, { enclosingAudit: !0 });
											} catch {
												i.failed++, i.remaining++;
												continue;
											}
											"conflict" === c.status && (i.conflicted++, s.push(c.receipt)), "target_changed" === c.status && i.failed++, "attached" === c.status ? (s.push(c.receipt), k.push(c.receipt), i.attached++) : i.remaining++;
										}
										k.length > 0 && await d(c("attach", k), M), i.receipts = s;
										for (const e of [
											"restaged",
											"moved",
											"mirrored",
											"unrecoverable"
										]) o?.[e] && (i[e] = o[e]);
										return i.failed || i.conflicted || await n.diaryBindingDirty.bulkDelete([...[.../* @__PURE__ */ new Set([
											g,
											..._.filter((e) => b.includes(e)),
											...j.map((e) => e.normalizedSourceKey)
										])].filter((e) => e === g || !v.has(e)).map((e) => a + e), ...u.filter((e) => r(e) === g).map((e) => e.id)]), i;
									});
								} catch {
									j.failed++;
								}
								o.set(g, j), s.push(...j.receipts);
								for (const e of [
									"attached",
									"moved",
									"restaged",
									"mirrored"
								]) j[e] && (i[e] = (i[e] ?? 0) + j[e]);
							}
						} while (k.rerun);
					} catch (w) {
						console.warn("[diary] recovery pass failed after committed work", w instanceof Error ? w.name : typeof w), i.failed++;
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
			}([], i, n, s);
		} catch {
			_ = {
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
		}(i, _);
	}(i, S.captureWorkspaceBinding(i, n));
}
export { W as recoverWorkspaceDiaryBindings };
