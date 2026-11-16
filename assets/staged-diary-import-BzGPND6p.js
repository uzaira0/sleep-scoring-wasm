import { Lt as e, Mt as t, Rt as a, t as r } from "./schema-B6UkEiVJ.js";
import { N as i, b as n, n as s, t as o } from "./workspace-db-DU4CzwX1.js";
import "./background-jobs-DLr2X4eX.js";
import "./local-data-source-kXsqXoes.js";
import { Ct as c, N as l, Rt as d, St as f, at as u, ct as p, it as m, lt as g, ot as w, r as y, rt as h, st as v, xt as _ } from "./store-BrZppDwj.js";
import { O as b } from "./night-session-registry-DJqsXW29.js";
import { t as S } from "./audit-log-ltTKXn8E.js";
import { c as j, s as M } from "./diary-local-import-contract-BWll-Z5M.js";
import "./diary-source-adapter-CraiewYe.js";
i.evening_onset, i.evening_onset, i.morning_offset, i.morning_offset;
const { verdictMinutes: k } = j, E = (k.spt_verdict_max_minutes, k.tib_verdict_max_minutes, k.onset_gap_verdict_max_minutes, k.sol_verdict_max_minutes, d), D = {
	upload: "upload",
	structure: "structure",
	map: "mapping",
	mapping: "mapping",
	validate: "validate"
}, K = "<destination>";
(function(e) {
	const t = M[e];
	if (void 0 === D[t.resolveStep]) throw new Error(`Diary decision rule ${e} resolves on unknown step ${t.resolveStep}.`);
	const a = t.resolveControl;
	a.includes(K) && a.replace(`-${K}`, "");
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
const x = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakSet();
async function W(i, n) {
	s() && i === o() && await async function(i, n, s = []) {
		let d;
		try {
			d = await function(i, n = o(), s, d = []) {
				const j = C.get(n);
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
					const { username: t, selectedStudyId: a } = y.getState();
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
							const d = await u(n), y = [.../* @__PURE__ */ new Set([...d.filter((e) => M.all || a({ filename: e }).some((e) => M.scope.has(e))), ...M.retryKeys])];
							if (M.retryKeys.clear(), 0 === y.length) continue;
							const b = await l(n, {
								participantKeys: y,
								includeIncomplete: !0
							}), S = [.../* @__PURE__ */ new Set([...b.map(e), ...y.filter((e) => !b.some((t) => a(t).includes(e)))])];
							for (const u of S) {
								const d = b.filter((t) => e(t) === u), S = [.../* @__PURE__ */ new Set([u, ...d.flatMap(a)])];
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
										...v(n)
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
											o = await h([u], n, k), s.push(o.receipt), i.conflicted += o.conflicted, o.deferred && i.failed++;
										} catch {
											i.failed++;
										}
										const c = await l(n, {
											participantKeys: S,
											includeIncomplete: !0
										}), d = await g(n, c), v = new Set(c.map(e)), b = [.../* @__PURE__ */ new Set([u, ...c.flatMap(a)])], j = await w(n, b), M = [];
										for (const e of j) {
											const a = p(e.sourceKey, e.analysisDate, d), r = a.status === t.MATCHED ? a.file : null;
											if (!r?.id || o?.deferred) {
												i.remaining++;
												continue;
											}
											let c;
											try {
												c = await m(e, r, n, { enclosingAudit: !0 });
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
											u,
											...y.filter((e) => b.includes(e)),
											...j.map((e) => e.normalizedSourceKey)
										])].filter((e) => e === u || !v.has(e)).map((e) => r + e), ...c.filter((t) => e(t) === u).map((e) => e.id)]), i;
									});
								} catch {
									j.failed++;
								}
								o.set(u, j), s.push(...j.receipts);
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
					return C.delete(n), {
						...i,
						receipts: s
					};
				}).catch((e) => {
					throw C.get(n) === M && C.delete(n), e;
				}), C.set(n, M), M.promise;
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
			if (O.has(t)) return x.get(e) ?? t;
			O.add(t);
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
			}(x.get(e), t);
			var r = a;
			return Boolean(r.failed || r.conflicted || r.attached || r.moved || r.restaged || r.mirrored) && (x.set(e, a), "undefined" != typeof window && window.dispatchEvent(new CustomEvent("diary-recovery-receipt", { detail: e }))), a;
		}(i, d);
	}(i, S.captureWorkspaceBinding(i, n));
}
export { W as recoverWorkspaceDiaryBindings };
