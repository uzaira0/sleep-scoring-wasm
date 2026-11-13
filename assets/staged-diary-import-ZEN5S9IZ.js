import { I as e, L as t, j as a, t as r } from "./schema-CW31RTk8.js";
import "./local-data-source-C9V9WZmd.js";
import { P as n, S as i, n as s, t as o } from "./workspace-db-C2H_4Sk8.js";
import "./background-jobs-DG1vunp7.js";
import { Ct as c, N as l, St as d, at as f, ct as u, it as p, nt as m, ot as g, r as w, rt as y, st as h, wt as v, zt as _ } from "./store-Bx-glhNc.js";
import { T as b } from "./night-session-registry-DBzmcC1j.js";
import { t as S } from "./audit-log-DvNHwdy6.js";
import { c as j, s as k } from "./diary-local-import-contract-Cp_UkaIT.js";
import "./diary-source-adapter-BspW5xBQ.js";
n.evening_onset, n.evening_onset, n.morning_offset, n.morning_offset;
const { verdictMinutes: M } = j, E = (M.spt_verdict_max_minutes, M.tib_verdict_max_minutes, M.onset_gap_verdict_max_minutes, M.sol_verdict_max_minutes, _), C = {
	upload: "upload",
	structure: "structure",
	map: "mapping",
	mapping: "mapping",
	validate: "validate"
}, D = "<destination>";
(function(e) {
	const t = k[e];
	if (void 0 === C[t.resolveStep]) throw new Error(`Diary decision rule ${e} resolves on unknown step ${t.resolveStep}.`);
	const a = t.resolveControl;
	a.includes(D) && a.replace(`-${D}`, "");
})("time_only_date_filled"), new Map(Object.entries(k).flatMap(([e, t]) => t.findingCodes.map((t) => [t, e]))), new Map(Object.entries(E).map(([e, t]) => [t, e])), Object.values(i), Object.fromEntries([
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
async function B(n, i) {
	s() && n === o() && await async function(n, i, s = []) {
		let _;
		try {
			_ = await function(n, i = o(), s, _ = []) {
				const j = x.get(i);
				if (j) return n.flatMap(t).forEach((e) => j.scope.add(e)), _.forEach((e) => j.retryKeys.add(e)), 0 === n.length && (j.all = !0), j.rerun = !0, j.promise;
				const k = {
					promise: Promise.resolve({
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					}),
					scope: new Set(n.flatMap(t)),
					retryKeys: new Set(_),
					rerun: !1,
					all: 0 === n.length
				}, M = s ?? function(e) {
					const { username: t, selectedStudyId: a } = w.getState();
					return S.captureWorkspaceBinding(e, {
						signal: void 0,
						username: t,
						studyId: a
					});
				}(i);
				return k.promise = b(i, async () => {
					const n = {
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					}, s = [], o = /* @__PURE__ */ new Map();
					try {
						do {
							k.rerun = !1;
							const w = await p(i), _ = [.../* @__PURE__ */ new Set([...w.filter((e) => k.all || t({ filename: e }).some((e) => k.scope.has(e))), ...k.retryKeys])];
							if (k.retryKeys.clear(), 0 === _.length) continue;
							const b = await l(i, {
								participantKeys: _,
								includeIncomplete: !0
							}), S = [.../* @__PURE__ */ new Set([...b.map(e), ..._.filter((e) => !b.some((a) => t(a).includes(e)))])];
							for (const p of S) {
								const w = b.filter((t) => e(t) === p), S = [.../* @__PURE__ */ new Set([p, ...w.flatMap(t)])];
								let j = {
									attached: 0,
									conflicted: 0,
									failed: 0,
									remaining: 0,
									receipts: []
								};
								try {
									await v(i, M), j = await i.transaction("rw", [
										i.files,
										i.diaryEntries,
										i.stagedDiaryEntries,
										i.diaryOccurrences,
										i.diaryBindingDirty,
										i.projectMeta,
										i.walLog,
										i.auditLog,
										...g(i)
									], async () => {
										const n = {
											attached: 0,
											conflicted: 0,
											failed: 0,
											remaining: 0,
											receipts: []
										}, s = [];
										let o;
										try {
											o = await m([p], i, M), s.push(o.receipt), n.conflicted += o.conflicted, o.deferred && n.failed++;
										} catch {
											n.failed++;
										}
										const g = await l(i, {
											participantKeys: S,
											includeIncomplete: !0
										}), w = await u(i, g), v = new Set(g.map(e)), b = [.../* @__PURE__ */ new Set([p, ...g.flatMap(t)])], j = await f(i, b), k = [];
										for (const e of j) {
											const t = h(e.sourceKey, e.analysisDate, w), r = t.status === a.MATCHED ? t.file : null;
											if (!r?.id || o?.deferred) {
												n.remaining++;
												continue;
											}
											let c;
											try {
												c = await y(e, r, i, { enclosingAudit: !0 });
											} catch {
												n.failed++, n.remaining++;
												continue;
											}
											"conflict" === c.status && (n.conflicted++, s.push(c.receipt)), "target_changed" === c.status && n.failed++, "attached" === c.status ? (s.push(c.receipt), k.push(c.receipt), n.attached++) : n.remaining++;
										}
										k.length > 0 && await d(c("attach", k), M), n.receipts = s;
										for (const e of [
											"restaged",
											"moved",
											"mirrored",
											"unrecoverable"
										]) o?.[e] && (n[e] = o[e]);
										return n.failed || n.conflicted || await i.diaryBindingDirty.bulkDelete([...[.../* @__PURE__ */ new Set([
											p,
											..._.filter((e) => b.includes(e)),
											...j.map((e) => e.normalizedSourceKey)
										])].filter((e) => e === p || !v.has(e)).map((e) => r + e), ...g.filter((t) => e(t) === p).map((e) => e.id)]), n;
									});
								} catch {
									j.failed++;
								}
								o.set(p, j), s.push(...j.receipts);
								for (const e of [
									"attached",
									"moved",
									"restaged",
									"mirrored"
								]) j[e] && (n[e] = (n[e] ?? 0) + j[e]);
							}
						} while (k.rerun);
					} catch (w) {
						console.warn("[diary] recovery pass failed after committed work", w instanceof Error ? w.name : typeof w), n.failed++;
					}
					for (const e of o.values()) for (const t of [
						"conflicted",
						"failed",
						"remaining",
						"unrecoverable"
					]) e[t] && (n[t] = (n[t] ?? 0) + e[t]);
					return x.delete(i), {
						...n,
						receipts: s
					};
				}).catch((e) => {
					throw x.get(i) === k && x.delete(i), e;
				}), x.set(i, k), k.promise;
			}([], n, i, s);
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
			if (W.has(t)) return K.get(e) ?? t;
			W.add(t);
			const a = function(e, t) {
				if (!e) return t;
				const a = (a) => (e[a] ?? 0) + (t[a] ?? 0), r = t.failed > 0 ? e : t, n = {
					attached: a("attached"),
					conflicted: r.conflicted,
					failed: t.failed,
					remaining: r.remaining,
					receipts: [...e.receipts, ...t.receipts]
				};
				for (const i of [
					"moved",
					"restaged",
					"mirrored"
				]) a(i) && (n[i] = a(i));
				return r.unrecoverable && (n.unrecoverable = r.unrecoverable), n;
			}(K.get(e), t);
			var r = a;
			return Boolean(r.failed || r.conflicted || r.attached || r.moved || r.restaged || r.mirrored) && (K.set(e, a), "undefined" != typeof window && window.dispatchEvent(new CustomEvent("diary-recovery-receipt", { detail: e }))), a;
		}(n, _);
	}(n, S.captureWorkspaceBinding(n, i));
}
export { B as recoverWorkspaceDiaryBindings };
