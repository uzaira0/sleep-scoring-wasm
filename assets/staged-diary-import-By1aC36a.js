import { Dt as e, Mt as t, Nt as a, t as r } from "./schema-B0CR2EpS.js";
import "./local-data-source-Vom-dl1p.js";
import { P as i, S as n, n as s, t as o } from "./workspace-db-CwhwLMaR.js";
import "./background-jobs-BvDFFUGv.js";
import { Ct as c, P as l, Rt as d, St as f, at as u, ct as p, i as m, it as g, nt as w, ot as y, rt as h, st as v, xt as _ } from "./store-DvfXJTpe.js";
import { w as b } from "./night-session-registry-pVArsQh2.js";
import { t as S } from "./audit-log-mBb24FKg.js";
import { c as j, s as M } from "./diary-local-import-contract-tz7cH6WX.js";
import "./diary-source-adapter-CAL7xcH3.js";
i.evening_onset, i.evening_onset, i.morning_offset, i.morning_offset;
const { verdictMinutes: k } = j, E = (k.spt_verdict_max_minutes, k.tib_verdict_max_minutes, k.onset_gap_verdict_max_minutes, k.sol_verdict_max_minutes, d), D = {
	upload: "upload",
	structure: "structure",
	map: "mapping",
	mapping: "mapping",
	validate: "validate"
}, C = "<destination>";
(function(e) {
	const t = M[e];
	if (void 0 === D[t.resolveStep]) throw new Error(`Diary decision rule ${e} resolves on unknown step ${t.resolveStep}.`);
	const a = t.resolveControl;
	a.includes(C) && a.replace(`-${C}`, "");
})("time_only_date_filled"), new Map(Object.entries(M).flatMap(([e, t]) => t.findingCodes.map((t) => [t, e]))), new Map(Object.entries(E).map(([e, t]) => [t, e])), Object.values(n), Object.fromEntries([
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
const K = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakSet();
async function B(i, n) {
	s() && i === o() && await async function(i, n, s = []) {
		let d;
		try {
			d = await function(i, n = o(), s, d = []) {
				const j = x.get(n);
				if (j) return i.flatMap(a).forEach((e) => j.scope.add(e)), d.forEach((e) => j.retryKeys.add(e)), 0 === i.length && (j.all = !0), j.rerun = !0, j.promise;
				const M = {
					promise: Promise.resolve({
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					}),
					scope: new Set(i.flatMap(a)),
					retryKeys: new Set(d),
					rerun: !1,
					all: 0 === i.length
				}, k = s ?? function(e) {
					const { username: t, selectedStudyId: a } = m.getState();
					return S.captureWorkspaceBinding(e, {
						signal: void 0,
						username: t,
						studyId: a
					});
				}(n);
				return M.promise = b(n, async () => {
					const i = {
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					}, s = [], o = /* @__PURE__ */ new Map();
					try {
						do {
							M.rerun = !1;
							const d = await g(n), m = [.../* @__PURE__ */ new Set([...d.filter((e) => M.all || a({ filename: e }).some((e) => M.scope.has(e))), ...M.retryKeys])];
							if (M.retryKeys.clear(), 0 === m.length) continue;
							const b = await l(n, {
								participantKeys: m,
								includeIncomplete: !0
							}), S = [.../* @__PURE__ */ new Set([...b.map(t), ...m.filter((e) => !b.some((t) => a(t).includes(e)))])];
							for (const g of S) {
								const d = b.filter((e) => t(e) === g), S = [.../* @__PURE__ */ new Set([g, ...d.flatMap(a)])];
								let j = {
									attached: 0,
									conflicted: 0,
									failed: 0,
									remaining: 0,
									receipts: []
								};
								try {
									await c(n, k), j = await n.transaction("rw", [
										n.files,
										n.diaryEntries,
										n.stagedDiaryEntries,
										n.diaryOccurrences,
										n.diaryBindingDirty,
										n.projectMeta,
										n.walLog,
										n.auditLog,
										...y(n)
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
											o = await w([g], n, k), s.push(o.receipt), i.conflicted += o.conflicted, o.deferred && i.failed++;
										} catch {
											i.failed++;
										}
										const c = await l(n, {
											participantKeys: S,
											includeIncomplete: !0
										}), d = await p(n, c), y = new Set(c.map(t)), b = [.../* @__PURE__ */ new Set([g, ...c.flatMap(a)])], j = await u(n, b), M = [];
										for (const t of j) {
											const a = v(t.sourceKey, t.analysisDate, d), r = a.status === e.MATCHED ? a.file : null;
											if (!r?.id || o?.deferred) {
												i.remaining++;
												continue;
											}
											let c;
											try {
												c = await h(t, r, n, { enclosingAudit: !0 });
											} catch {
												i.failed++, i.remaining++;
												continue;
											}
											"conflict" === c.status && (i.conflicted++, s.push(c.receipt)), "target_changed" === c.status && i.failed++, "attached" === c.status ? (s.push(c.receipt), M.push(c.receipt), i.attached++) : i.remaining++;
										}
										M.length > 0 && await _(f("attach", M), k), i.receipts = s;
										for (const e of [
											"restaged",
											"moved",
											"mirrored",
											"unrecoverable"
										]) o?.[e] && (i[e] = o[e]);
										return i.failed || i.conflicted || await n.diaryBindingDirty.bulkDelete([...[.../* @__PURE__ */ new Set([
											g,
											...m.filter((e) => b.includes(e)),
											...j.map((e) => e.normalizedSourceKey)
										])].filter((e) => e === g || !y.has(e)).map((e) => r + e), ...c.filter((e) => t(e) === g).map((e) => e.id)]), i;
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
						} while (M.rerun);
					} catch (d) {
						console.warn("[diary] recovery pass failed after committed work", d instanceof Error ? d.name : typeof d), i.failed++;
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
					throw x.get(n) === M && x.delete(n), e;
				}), x.set(n, M), M.promise;
			}([], i, n, s);
		} catch {
			d = {
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
			if (W.has(t)) return K.get(e) ?? t;
			W.add(t);
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
			}(K.get(e), t);
			var r = a;
			return Boolean(r.failed || r.conflicted || r.attached || r.moved || r.restaged || r.mirrored) && (K.set(e, a), "undefined" != typeof window && window.dispatchEvent(new CustomEvent("diary-recovery-receipt", { detail: e }))), a;
		}(i, d);
	}(i, S.captureWorkspaceBinding(i, n));
}
export { B as recoverWorkspaceDiaryBindings };
