import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { Ct as t, Ot as a, kt as r, t as i } from "./schema-C7gdqs5I.js";
import "./local-data-source-Dl-4X8M7.js";
import { P as n, S as s, n as o, t as c } from "./workspace-db-D4drjWJA.js";
import "./background-jobs-BiNXQC0L.js";
import { M as l, Pt as d, _t as f, at as u, i as p, it as m, nt as g, ot as y, rt as w, st as h, tt as v, vt as _, yt as b } from "./store-AQT19I40.js";
import { S } from "./night-session-registry-CCtsxq6H.js";
import { t as E } from "./audit-log-DGy3L3Yu.js";
import { c as j, s as k } from "./diary-local-import-contract-4H4oml13.js";
import "./diary-source-adapter-Dd33a6hP.js";
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
var O = e({
	DIARY_RECOVERY_RECEIPT_EVENT: () => R,
	attachStagedDiaryEntriesForFiles: () => L,
	mergeDiaryRecovery: () => A,
	recordDiaryRecoveryPass: () => P,
	recoverWorkspaceDiaryBindings: () => T,
	runDiaryRecovery: () => I
});
const R = "diary-recovery-receipt", W = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
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
async function I(e, t, a = []) {
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
	if (B.has(t)) return W.get(e) ?? t;
	B.add(t);
	const a = A(W.get(e), t);
	var r = a;
	return Boolean(r.failed || r.conflicted || r.attached || r.moved || r.restaged || r.mirrored) && (W.set(e, a), "undefined" != typeof window && window.dispatchEvent(new CustomEvent(R, { detail: e }))), a;
}
async function T(e, t) {
	o() && e === c() && await I(e, E.captureWorkspaceBinding(e, t));
}
function L(e, n = c(), s, o = []) {
	const d = x.get(n);
	if (d) return e.flatMap(r).forEach((e) => d.scope.add(e)), o.forEach((e) => d.retryKeys.add(e)), 0 === e.length && (d.all = !0), d.rerun = !0, d.promise;
	const j = {
		promise: Promise.resolve({
			attached: 0,
			conflicted: 0,
			failed: 0,
			remaining: 0,
			receipts: []
		}),
		scope: new Set(e.flatMap(r)),
		retryKeys: new Set(o),
		rerun: !1,
		all: 0 === e.length
	}, k = s ?? function(e) {
		const { username: t, selectedStudyId: a } = p.getState();
		return E.captureWorkspaceBinding(e, {
			signal: void 0,
			username: t,
			studyId: a
		});
	}(n);
	return j.promise = S(n, async () => {
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
				const c = await w(n), d = [.../* @__PURE__ */ new Set([...c.filter((e) => j.all || r({ filename: e }).some((e) => j.scope.has(e))), ...j.retryKeys])];
				if (j.retryKeys.clear(), 0 === d.length) continue;
				const p = await l(n, {
					participantKeys: d,
					includeIncomplete: !0
				}), S = [.../* @__PURE__ */ new Set([...p.map(a), ...d.filter((e) => !p.some((t) => r(t).includes(e)))])];
				for (const w of S) {
					const c = p.filter((e) => a(e) === w), S = [.../* @__PURE__ */ new Set([w, ...c.flatMap(r)])];
					let E = {
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					};
					try {
						await b(n, k), E = await n.transaction("rw", [
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
								participantKeys: S,
								includeIncomplete: !0
							}), u = await h(n, c), p = new Set(c.map(a)), b = [.../* @__PURE__ */ new Set([w, ...c.flatMap(r)])], E = await m(n, b), j = [];
							for (const a of E) {
								const r = y(a.sourceKey, a.analysisDate, u), i = r.status === t.MATCHED ? r.file : null;
								if (!i?.id || o?.deferred) {
									e.remaining++;
									continue;
								}
								let c;
								try {
									c = await g(a, i, n, { enclosingAudit: !0 });
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
								...E.map((e) => e.normalizedSourceKey)
							])].filter((e) => e === w || !p.has(e)).map((e) => i + e), ...c.filter((e) => a(e) === w).map((e) => e.id)]), e;
						});
					} catch {
						E.failed++;
					}
					o.set(w, E), s.push(...E.receipts);
					for (const t of [
						"attached",
						"moved",
						"restaged",
						"mirrored"
					]) E[t] && (e[t] = (e[t] ?? 0) + E[t]);
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
		return x.delete(n), {
			...e,
			receipts: s
		};
	}).catch((e) => {
		throw x.get(n) === j && x.delete(n), e;
	}), x.set(n, j), j.promise;
}
export { O as t };
