import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { Ct as t, Ot as a, kt as r, t as i } from "./schema-CubsPrjz.js";
import "./local-data-source-_0c00IIq.js";
import { _ as n, k as s } from "./platform-ClAsKoQQ.js";
import "./background-jobs-gFrAYxTf.js";
import { n as o, t as c } from "./workspace-db-BRMmWdCa.js";
import { It as l, N as d, at as f, bt as p, ct as u, i as m, it as g, lt as y, ot as w, rt as h, st as v, xt as _, yt as b } from "./store-esIhChio.js";
import { S as j } from "./night-session-registry-CySK1p-U.js";
import { t as E } from "./audit-log-XaMzFaoe.js";
import { c as S, s as k } from "./diary-local-import-contract-CtsxFTLX.js";
import "./diary-source-adapter-DU6F_D4J.js";
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
var x = e({
	DIARY_RECOVERY_RECEIPT_EVENT: () => I,
	attachStagedDiaryEntriesForFiles: () => N,
	mergeDiaryRecovery: () => W,
	recordDiaryRecoveryPass: () => T,
	recoverWorkspaceDiaryBindings: () => L,
	runDiaryRecovery: () => A
});
const I = "diary-recovery-receipt", O = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap();
function W(e, t) {
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
async function A(e, t, a = []) {
	let r;
	try {
		r = await N([], e, t, a);
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
	if (B.has(t)) return O.get(e) ?? t;
	B.add(t);
	const a = W(O.get(e), t);
	var r = a;
	return Boolean(r.failed || r.conflicted || r.attached || r.moved || r.restaged || r.mirrored) && (O.set(e, a), "undefined" != typeof window && window.dispatchEvent(new CustomEvent(I, { detail: e }))), a;
}
async function L(e, t) {
	o() && e === c() && await A(e, E.captureWorkspaceBinding(e, t));
}
function N(e, n = c(), s, o = []) {
	const l = R.get(n);
	if (l) return e.flatMap(r).forEach((e) => l.scope.add(e)), o.forEach((e) => l.retryKeys.add(e)), 0 === e.length && (l.all = !0), l.rerun = !0, l.promise;
	const S = {
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
		const { username: t, selectedStudyId: a } = m.getState();
		return E.captureWorkspaceBinding(e, {
			signal: void 0,
			username: t,
			studyId: a
		});
	}(n);
	return S.promise = j(n, async () => {
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
				const c = await f(n), l = [.../* @__PURE__ */ new Set([...c.filter((e) => S.all || r({ filename: e }).some((e) => S.scope.has(e))), ...S.retryKeys])];
				if (S.retryKeys.clear(), 0 === l.length) continue;
				const m = await d(n, {
					participantKeys: l,
					includeIncomplete: !0
				}), j = [.../* @__PURE__ */ new Set([...m.map(a), ...l.filter((e) => !m.some((t) => r(t).includes(e)))])];
				for (const f of j) {
					const c = m.filter((e) => a(e) === f), j = [.../* @__PURE__ */ new Set([f, ...c.flatMap(r)])];
					let E = {
						attached: 0,
						conflicted: 0,
						failed: 0,
						remaining: 0,
						receipts: []
					};
					try {
						await _(n, k), E = await n.transaction("rw", [
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
								participantKeys: j,
								includeIncomplete: !0
							}), m = await y(n, c), v = new Set(c.map(a)), _ = [.../* @__PURE__ */ new Set([f, ...c.flatMap(r)])], E = await w(n, _), S = [];
							for (const a of E) {
								const r = u(a.sourceKey, a.analysisDate, m), i = r.status === t.MATCHED ? r.file : null;
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
								"conflict" === c.status && (e.conflicted++, s.push(c.receipt)), "target_changed" === c.status && e.failed++, "attached" === c.status ? (s.push(c.receipt), S.push(c.receipt), e.attached++) : e.remaining++;
							}
							S.length > 0 && await b(p("attach", S), k), e.receipts = s;
							for (const t of [
								"restaged",
								"moved",
								"mirrored",
								"unrecoverable"
							]) o?.[t] && (e[t] = o[t]);
							return e.failed || e.conflicted || await n.diaryBindingDirty.bulkDelete([...[.../* @__PURE__ */ new Set([
								f,
								...l.filter((e) => _.includes(e)),
								...E.map((e) => e.normalizedSourceKey)
							])].filter((e) => e === f || !v.has(e)).map((e) => i + e), ...c.filter((e) => a(e) === f).map((e) => e.id)]), e;
						});
					} catch {
						E.failed++;
					}
					o.set(f, E), s.push(...E.receipts);
					for (const t of [
						"attached",
						"moved",
						"restaged",
						"mirrored"
					]) E[t] && (e[t] = (e[t] ?? 0) + E[t]);
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
		return R.delete(n), {
			...e,
			receipts: s
		};
	}).catch((e) => {
		throw R.get(n) === S && R.delete(n), e;
	}), R.set(n, S), S.promise;
}
export { x as t };
