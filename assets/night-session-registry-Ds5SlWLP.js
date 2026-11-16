import { A as e, In as t, Nn as n, an as r, g as a, k as s, m as o, mn as i, pn as l, v as c, w as d } from "./schema-MMK46mR-.js";
import { r as u } from "./workers-B1E_CQH7.js";
import { c as p, r as g, u as f } from "./legacy-invalid-night-zjKZRSNb.js";
import { a as m, at as h, it as w, lt as k, n as v, nt as y, o as I, ot as N, t as M } from "./workspace-db-YhWSrcvp.js";
import { a as S, o as x } from "./content-hash-D4_ZE65l.js";
import { a as _, i as b } from "./project-revision-CUz5eq5n.js";
import { K as T, Q as C, X as R, c as A, ct as D, lt as P, nt as E, st as j, ut as O } from "./per-source-defaults-CxbMEjO8.js";
import { n as $ } from "./store-lifecycle-CBdMPA62.js";
import { t as H } from "./audit-log-BT8eFzV0.js";
import { t as F } from "./audit-hash-B_VayGEe.js";
import { i as L, t as W } from "./wal-Bu50KF-H.js";
const V = "auto_score";
function K(e, t) {
	return {
		sleepPeriodDetectionConfig: R(e),
		sleepPeriodDetectionSummary: t ?? T(e)
	};
}
function U(e) {
	return {
		algorithm: e.algorithm,
		...K(e.sleepPeriodDetection, e.sleepPeriodDetectionSummary),
		sleepCount: e.sleepCount,
		napCount: e.napCount,
		markers: e.markers
	};
}
const J = /* @__PURE__ */ new Set([
	"diaryEntries",
	"diaryOccurrences",
	"stagedDiaryEntries"
]);
function q(e, t) {
	if (J.has(t)) throw new Error(`The diary store ${t} is written only by db/diary.`);
	return e[t];
}
function B(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function G(e) {
	return {
		...e,
		edited: !0
	};
}
function z(e, t, n, r) {
	const a = e[t];
	if (!a) return {
		ok: !1,
		reason: "out-of-range"
	};
	const { onsetTimestamp: s, offsetTimestamp: o } = a;
	if (null == s || null == o) return {
		ok: !1,
		reason: "no-boundaries"
	};
	if (!(r > s && r <= n && n < o)) return {
		ok: !1,
		reason: "not-strictly-inside"
	};
	const [i, l] = P(a.markerType), c = G({
		...a,
		offsetTimestamp: r,
		markerType: i
	}), d = G({
		...a,
		onsetTimestamp: n,
		markerType: l
	}), u = [...e];
	return u.splice(t, 1, c, d), {
		ok: !0,
		markers: B(u),
		newIndex: t + 1
	};
}
function Y(e, t, n) {
	const a = e[t];
	if (!a) return {
		ok: !1,
		reason: "out-of-range"
	};
	const s = "next" === n ? t + 1 : t - 1, o = e[s];
	if (!o) return {
		ok: !1,
		reason: "no-neighbor"
	};
	const i = a.onsetTimestamp, l = a.offsetTimestamp, c = o.onsetTimestamp, d = o.offsetTimestamp;
	if (null == i || null == l || null == c || null == d) return {
		ok: !1,
		reason: "no-boundaries"
	};
	const u = Math.min(i, c), p = Math.max(l, d), g = j(a, o), f = Math.min(t, s), m = G({
		...g !== r.MAIN_SLEEP || E(a) ? a : o,
		onsetTimestamp: u,
		offsetTimestamp: p,
		markerType: g
	}), h = e.filter((e, n) => n !== t && n !== s);
	return h.splice(f, 0, m), {
		ok: !0,
		markers: B(h),
		mergedIndex: f
	};
}
function X(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function Q(e) {
	return "boolean" == typeof e ? e : null;
}
function Z(e) {
	return "string" == typeof e ? e : null;
}
function ee(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function te(e, t) {
	return !(e.length > 0) && t;
}
function ne(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
function re(e) {
	const t = function(e) {
		return Array.isArray(e) ? e : null;
	}(e);
	return null === t ? null : t.every(ne) ? t : null;
}
function ae(e) {
	const t = re(e);
	return null === t ? null : t;
}
function se(e) {
	const t = re(e);
	return null === t ? null : t;
}
function oe(e) {
	return e.filter((e) => e.markerType === r.MAIN_SLEEP).length;
}
function ie(e) {
	return e.every((e, t) => e.markerIndex === t + 1);
}
const le = {
	main_sleep_on_invalid_night: ({ after: e }) => e.isInvalidNight && oe(e.sleepMarkers) > 0,
	multiple_main_sleep: ({ after: e }) => oe(e.sleepMarkers) > 1,
	first_marker_not_main_sleep: ({ after: e }) => !e.isInvalidNight && e.sleepMarkers.length > 0 && 0 === oe(e.sleepMarkers),
	marker_index_noncontiguous: ({ after: e }) => !ie(e.sleepMarkers) || !ie(e.nonwearMarkers),
	boundaries_disordered: ({ after: e }) => e.sleepMarkers.some((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && e.onsetTimestamp >= e.offsetTimestamp) || e.nonwearMarkers.some((e) => null != e.startTimestamp && null != e.endTimestamp && e.startTimestamp >= e.endTimestamp),
	nonwear_flag_with_markers: ({ after: e }) => e.explicitNoNonwear && e.nonwearMarkers.length > 0,
	manual_nonwear_in_sleep: ({ payload: e }) => !0 === e.manualNonwearInSleep,
	marker_limit_exceeded: ({ after: e }) => e.sleepMarkers.length > O.MAX_SLEEP_PERIODS_PER_DAY || e.nonwearMarkers.length > O.MAX_NONWEAR_PERIODS_PER_DAY,
	split_not_strictly_inside: ({ before: e, payload: t }) => {
		const n = X(t.periodIndex), r = X(t.at);
		return null !== n && null !== r && !z(e.sleepMarkers, n, r, X(t.firstOffset) ?? r).ok;
	},
	merge_no_neighbor: ({ before: e, payload: t }) => {
		const n = X(t.periodIndex), r = Z(t.direction);
		return null !== n && ("prev" === r || "next" === r) && !Y(e.sleepMarkers, n, r).ok;
	},
	mutation_on_read_only_view: ({ context: e }) => !0 === e.readOnlyView,
	undo_beyond_history: ({ context: e }) => void 0 !== e.undoDepth && e.undoDepth <= 0,
	redo_beyond_history: ({ context: e }) => void 0 !== e.redoDepth && e.redoDepth <= 0
};
function ce(e, t) {
	const n = p[e]?.guards ?? [], r = [];
	for (const a of n) {
		const e = le[a], n = f[a];
		e && n && e(t) && r.push({
			guard: a,
			severity: n.severity
		});
	}
	return r;
}
function de(e, t) {
	const { isInvalidNightImplicit: n, ...r } = e, a = Q(t.isInvalidNight) ?? e.isInvalidNight;
	return {
		...r,
		isInvalidNight: a,
		...a && !0 === Q(t.isInvalidNightImplicit) ? { isInvalidNightImplicit: !0 } : {}
	};
}
function ue(e, t) {
	const n = t.stateAfter;
	if (null === n || "object" != typeof n) return {
		state: e,
		reconstructed: !1
	};
	const r = n, a = ae(r.sleepMarkers), s = se(r.nonwearMarkers);
	return null === a || null === s ? {
		state: e,
		reconstructed: !1
	} : { state: {
		...de(e, r),
		sleepMarkers: a,
		nonwearMarkers: s,
		explicitNoNonwear: Q(r.explicitNoNonwear) ?? e.explicitNoNonwear,
		needsConsensus: Q(r.needsConsensus) ?? e.needsConsensus,
		notes: Z(r.notes) ?? e.notes
	} };
}
const pe = {
	marker_placed: (e, t) => {
		if ("nonwear" === Z(t.category)) {
			const n = X(t.startTimestamp), r = X(t.endTimestamp);
			if (null === n || null === r) return {
				state: e,
				reconstructed: !1
			};
			const a = [...e.nonwearMarkers, {
				startTimestamp: n,
				endTimestamp: r,
				markerIndex: e.nonwearMarkers.length + 1
			}];
			return { state: {
				...e,
				nonwearMarkers: a,
				explicitNoNonwear: !1
			} };
		}
		const n = X(t.onsetTimestamp), r = X(t.offsetTimestamp);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = Z(t.markerType) ?? D(e.sleepMarkers, e), s = [...e.sleepMarkers, {
			onsetTimestamp: n,
			offsetTimestamp: r,
			markerIndex: e.sleepMarkers.length + 1,
			markerType: a
		}];
		return { state: {
			...e,
			sleepMarkers: s
		} };
	},
	marker_moved: (e, t) => {
		const n = t.after;
		if (null === n || "object" != typeof n) return {
			state: e,
			reconstructed: !1
		};
		const r = n, a = ae(r.sleepMarkers), s = se(r.nonwearMarkers);
		return null === a || null === s ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: a,
			nonwearMarkers: s
		} };
	},
	marker_adjusted: (e, t) => {
		const n = X(t.periodIndex), r = t.updates;
		if (null === n || null === r || "object" != typeof r) return {
			state: e,
			reconstructed: !1
		};
		const a = r;
		if ("nonwear" === Z(t.category)) {
			const t = e.nonwearMarkers.map((e, t) => t === n ? {
				...e,
				...a
			} : e);
			return { state: {
				...e,
				nonwearMarkers: t,
				explicitNoNonwear: te(t, e.explicitNoNonwear)
			} };
		}
		const s = e.sleepMarkers.map((e, t) => t === n ? {
			...e,
			...a
		} : e);
		return { state: {
			...e,
			sleepMarkers: s
		} };
	},
	marker_deleted: (e, t) => {
		const n = X(t.periodIndex);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : "nonwear" === Z(t.category) ? { state: {
			...e,
			nonwearMarkers: ee(e.nonwearMarkers.filter((e, t) => t !== n))
		} } : { state: {
			...e,
			sleepMarkers: ee(e.sleepMarkers.filter((e, t) => t !== n))
		} };
	},
	markers_cleared: (e) => ({ state: {
		...e,
		sleepMarkers: [],
		nonwearMarkers: []
	} }),
	sleep_period_split: (e, t) => {
		const n = X(t.periodIndex), r = X(t.at);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = z(e.sleepMarkers, n, r, X(t.firstOffset) ?? r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	sleep_period_merged: (e, t) => {
		const n = X(t.periodIndex), r = Z(t.direction);
		if (null === n || "prev" !== r && "next" !== r) return {
			state: e,
			reconstructed: !1
		};
		const a = Y(e.sleepMarkers, n, r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	session_start: (e, t) => {
		const n = ae(t.sleepMarkers), r = se(t.nonwearMarkers);
		return null === n || null === r ? {
			state: e,
			reconstructed: !1
		} : {
			state: {
				...de(e, t),
				sleepMarkers: n,
				nonwearMarkers: r,
				explicitNoNonwear: Q(t.explicitNoNonwear) ?? e.explicitNoNonwear,
				needsConsensus: Q(t.needsConsensus) ?? e.needsConsensus,
				notes: Z(t.notes) ?? e.notes
			},
			reconstructed: void 0 !== t.notes
		};
	},
	markers_saved: (e, t, n) => {
		const r = X(t.sleepCount), a = X(t.nonwearCount);
		return null === r || null === a ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			saved: {
				at: n.clientTimestamp ?? null,
				sleepCount: r,
				nonwearCount: a
			}
		} };
	},
	undo: ue,
	redo: ue,
	auto_score_applied: (e, t) => {
		const n = ae(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: n
		} };
	},
	auto_nonwear_applied: (e, t) => {
		const n = se(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			nonwearMarkers: n,
			explicitNoNonwear: te(n, e.explicitNoNonwear)
		} };
	},
	consensus_toggled: (e, t) => {
		const n = Q(t.value);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			needsConsensus: n
		} };
	},
	invalid_night_toggled: (e, t) => {
		const n = Q(t.value);
		if (null === n) return {
			state: e,
			reconstructed: !1
		};
		const { isInvalidNightImplicit: a, ...s } = e;
		if (!n) return { state: {
			...s,
			isInvalidNight: !1
		} };
		const o = ee(e.sleepMarkers.filter((e) => e.markerType !== r.MAIN_SLEEP)), i = !0 === Q(t.implicit);
		return { state: {
			...s,
			isInvalidNight: !0,
			...i ? { isInvalidNightImplicit: !0 } : {},
			sleepMarkers: o
		} };
	},
	no_nonwear_toggled: (e, t) => {
		const n = Q(t.value);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			explicitNoNonwear: n,
			nonwearMarkers: n ? [] : e.nonwearMarkers
		} };
	},
	notes_changed: (e, t) => {
		const n = Z(t.after);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			notes: n
		} };
	},
	candidate_copied: ue
};
function ge(e, t, n = {}) {
	const r = g(t), a = r.payload ?? {}, s = pe[r.action], o = s ? s(e, a, r) : { state: e }, i = o.state;
	return {
		state: i,
		violations: ce(r.action, {
			before: e,
			after: i,
			event: r,
			payload: a,
			context: n
		}),
		reconstructed: o.reconstructed ?? !0
	};
}
function fe(e) {
	return "object" != typeof e || null === e ? null : "string" == typeof e.action ? g(e) : null;
}
function me(e, t) {
	if ("markers_saved" !== e.action) return !1;
	const n = e.payload ?? {}, r = X(n.sleepCount), a = X(n.nonwearCount);
	return null !== r && null !== a && (r !== t.sleepMarkers.length || a !== t.nonwearMarkers.length);
}
function he(e) {
	if (!Array.isArray(e)) return [];
	const t = [];
	let n = {
		sleepMarkers: [],
		nonwearMarkers: [],
		isInvalidNight: !1,
		explicitNoNonwear: !1,
		needsConsensus: !1,
		notes: "",
		saved: null
	}, r = "unanchored";
	for (const a of e) {
		const e = fe(a), s = e ? ge(n, e) : {
			state: n,
			violations: [],
			reconstructed: !1
		};
		n = s.state, null !== e && !0 === p[e.action]?.stateKeyframe && s.reconstructed ? r = "exact" : s.reconstructed || "exact" !== r || (r = "divergent"), "exact" === r && null !== e && me(e, n) && (r = "divergent"), t.push({
			state: n,
			basis: r,
			violations: s.violations
		});
	}
	return t;
}
function we(e) {
	const t = [
		`${String(e.sleepMarkers.length)} sleep`,
		`${String(e.nonwearMarkers.length)} nonwear`,
		`invalid-night:${String(e.isInvalidNight)}`
	];
	return e.explicitNoNonwear && t.push("no-nonwear"), e.needsConsensus && t.push("needs-consensus"), e.notes.length > 0 && t.push(`notes ${String(e.notes.length)}ch`), t.join(", ");
}
function ke(e) {
	return {
		sleep: e.sleepMarkers.map((e) => ({
			onset: e.onsetTimestamp,
			offset: e.offsetTimestamp,
			main: E(e)
		})),
		nonwear: (e.nonwearMarkers ?? []).map((e) => ({
			start: e.startTimestamp,
			end: e.endTimestamp
		})),
		isInvalidNight: e.isInvalidNight ?? !1
	};
}
async function ve(e, t = u()) {
	if (0 === e.length) return [];
	const n = await t.settleManualNonwearNights(e.map(ke));
	if (n.length !== e.length) throw new Error(`The manual-nonwear night rule answered ${String(n.length)} settle(s) for ${String(e.length)} night(s).`);
	return n;
}
function ye(e, t) {
	return 0 === t.removed.length ? e : t.kept.map((t, n) => ({
		...e[t],
		markerIndex: n + 1
	}));
}
async function Ie(e, t) {
	const n = he(e), r = e.flatMap((e, t) => {
		const r = e.payload, a = n[t]?.state;
		return "session_start" === e.action && null != r && "boolean" != typeof r.manualNonwearInSleep && void 0 !== a && Array.isArray(r.sleepMarkers) && Array.isArray(r.nonwearMarkers) && r.sleepMarkers.length === a.sleepMarkers.length && r.nonwearMarkers.length === a.nonwearMarkers.length ? [t] : [];
	});
	if (0 === r.length) return n;
	const a = await async function(e, t) {
		return (await ve(e, t)).map((e) => e.removed.length > 0);
	}(r.map((e) => n[e].state), t), s = [...e];
	return r.forEach((t, n) => {
		const r = e[t];
		s[t] = {
			...r,
			payload: {
				...r.payload,
				manualNonwearInSleep: !0 === a[n]
			}
		};
	}), he(s);
}
function Ne(e) {
	return null === e ? l : e;
}
function Me(e) {
	return null == e ? i : e;
}
function Se(e) {
	return "__legacy_dr__" === e ? null : e;
}
function xe(e) {
	return {
		...e,
		algorithm: (t = e.algorithm, "__legacy__" === t ? null : t),
		detectionRule: Se(e.detectionRule)
	};
	var t;
}
function _e(e) {
	const t = (e) => Array.isArray(e) ? e.map(t) : e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, n]) => [e, t(n)])) : e;
	return JSON.stringify(t(e));
}
function be(e, { date: t, username: n }, r, a) {
	const s = e.filter((e) => e.date === t && e.username === n);
	if (void 0 !== r) {
		const e = Ne(r), t = Me(a), n = (e, t) => s.find((n) => n.algorithm === e && n.detectionRule === t);
		return n(e, t) ?? ("__legacy_dr__" !== t ? n(e, "__legacy_dr__") : void 0) ?? (null !== r ? n("__legacy__", "__legacy_dr__") : void 0);
	}
	return s.reduce((e, t) => !e || (t.id ?? 0) < (e.id ?? 0) ? t : e, void 0);
}
function Te(e, t, n, r) {
	return r.transaction("r", r.markers, async () => be(await r.markers.where("[fileId+date+username]").equals([
		e.fileId,
		e.date,
		e.username
	]).toArray(), e, t, n));
}
async function Ce(e, t, n, r, a, s = M()) {
	const o = await Te({
		fileId: e,
		date: t,
		username: n
	}, r, a, s);
	return o ? xe(o) : void 0;
}
const Re = [
	"manualNonwearInSleep",
	"periodMetrics",
	"syncStatus"
];
function Ae(e, t, n) {
	const r = Object.fromEntries(Re.filter((e) => e in t).map((e) => [e, t[e]]));
	return n.markers.update(e, r);
}
async function De(e, t = M(), n, r) {
	const a = t;
	await b(a, [a.markers], async () => {
		if (n) {
			const t = await a.markers.get(e);
			if (!t || _e(xe(t)) !== _e(n)) return;
		}
		await Ae(e, { syncStatus: "conflict" }, a);
	}, r);
}
function Pe(e) {
	return `${h.SCORED_VARIANT_WARM}:${String(e)}`;
}
function Ee(e = w.getState().jobs) {
	if (!v()) return null;
	const t = Object.values(e).reverse().find((e) => y(e) && e.workspaceId === M().name && e.kind === h.SCORED_VARIANT_WARM && e.status !== N.DONE && e.status !== N.CANCELLED);
	return t ? {
		fileId: Number(t.key.split(":").at(-1)),
		done: t.done,
		total: t.total,
		...t.status === N.FAILED ? { failed: !0 } : {}
	} : null;
}
function je(e, t) {
	if (!v() || t && M() !== t) return;
	const n = (t ?? M()).name, r = w.getState();
	if (!e) return;
	const a = Pe(e.fileId), s = `${n}:${a}`;
	r.jobs[s] && !e.failed || r.update(s, {
		id: s,
		workspaceId: n,
		key: a,
		kind: h.SCORED_VARIANT_WARM,
		label: "Scoring variants",
		controller: r.jobs[s]?.controller ?? new AbortController(),
		done: e.done,
		total: e.total,
		status: e.failed ? N.FAILED : N.RUNNING
	});
}
const Oe = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new WeakMap();
async function He(e, t) {
	const n = $e.get(e) ?? {
		depth: 0,
		files: /* @__PURE__ */ new Set()
	};
	$e.set(e, n), n.depth++;
	try {
		return await t();
	} finally {
		if (0 === --n.depth) {
			$e.delete(e);
			for (const t of n.files) Le(t, e, n.files);
		}
	}
}
const Fe = /* @__PURE__ */ new WeakMap();
function Le(e, t, n) {
	const r = $e.get(t);
	if (r) r.files.add(e);
	else for (const a of Oe) n && n.size > 1 ? a(e, t, void 0, n) : a(e, t);
}
function We(e) {
	return Oe.add(e), () => Oe.delete(e);
}
const Ve = /* @__PURE__ */ new Set();
function Ke(e, t) {
	for (const n of Ve) n(e, t);
}
const Ue = "scored-variant-warm-backfill-v1", Je = `placement-results-backfill-v${String(2)}`, qe = "placement-results-backfill-generation-v1", Be = /* @__PURE__ */ new Set();
function Ge(e, t, n) {
	const r = n ? Fe.get(n) : void 0;
	if (r?.db !== t) for (const a of Be) a([e], t);
	else r.files.add(e);
}
const ze = /* @__PURE__ */ new WeakMap();
async function Ye(e, t = M(), r) {
	let a = n.currentTransaction;
	for (; a?.parent;) a = a.parent;
	if (await _(t, [t.projectMeta], async () => {
		const e = await t.projectMeta.get(qe);
		await t.projectMeta.put({
			key: qe,
			revision: (e?.revision ?? 0) + 1
		}), await t.projectMeta.delete(Je);
	}, r), !a || a.db !== t) {
		for (const n of new Set(e)) Ge(n, t, r);
		return;
	}
	let s = ze.get(a);
	if (!s) {
		s = /* @__PURE__ */ new Set(), ze.set(a, s);
		const e = s;
		a.idbtrans.addEventListener("complete", () => {
			for (const n of e) Ge(n, t, r);
		}, { once: !0 });
	}
	for (const n of e) s.add(n);
}
var Xe = class extends Error {
	constructor() {
		super("The recording was deleted; this night was not saved."), this.name = "RecordingDeletedError";
	}
}, Qe = class extends Error {
	constructor() {
		super("Markers changed during rescore or in another tab. Retry keeps the night on screen; reopening the night shows the stored one."), this.name = "NightConflictError";
	}
};
function Ze(e) {
	return {
		contentHash: e?.contentHash ?? null,
		needsConsensus: e?.needsConsensus ?? !1
	};
}
function et(e, t) {
	const n = Ze(e);
	return n.contentHash === t.contentHash && n.needsConsensus === t.needsConsensus;
}
const tt = (e, t) => JSON.stringify([e, t]), nt = /* @__PURE__ */ new Map();
function rt(e, t) {
	const n = ((e) => tt(e.store, e.fileId) + JSON.stringify([
		e.actor,
		e.date,
		Ne(e.algorithm),
		Me(e.detectionRule)
	]))(e);
	return function(e, t, n) {
		const r = e.length > 0 ? Promise.all(e).then(n) : n(), a = r.then(() => {}, () => {});
		for (const s of t) nt.set(s, a), a.then(() => {
			nt.get(s) === a && nt.delete(s);
		});
		return r;
	}([nt.get(n), nt.get((r = e.store, a = e.fileId, `${tt(r, a)}*`))].filter((e) => void 0 !== e), [n], t);
	var r, a;
}
function at(e, t) {
	return e?.name ?? `${t?.sourceKey ?? "server"}:${t?.workspaceId ?? ""}`;
}
function st(e) {
	ot(e.binding, e, e);
}
function ot(e, t, n) {
	H.recordNightEdit(e, {
		fileId: t.fileId,
		analysisDate: t.date,
		action: n.action,
		...void 0 === n.payload ? {} : { payload: n.payload }
	});
}
function it(e) {
	return e && (0 !== (e.sleepMarkers?.length ?? 0) || 0 !== (e.nonwearMarkers?.length ?? 0) || e.isInvalidNight || e.explicitNoNonwear || e.needsConsensus || e.notes) ? function(e) {
		const t = (e) => Number(e.onsetTimestamp ?? e.startTimestamp ?? 0), n = (e, n) => Number(e.markerIndex ?? 0) - Number(n.markerIndex ?? 0) || t(e) - t(n), r = (e) => Array.isArray(e) ? (e.every((e) => null !== e && "object" == typeof e && !Array.isArray(e)) ? [...e].sort(n) : e).map(r) : null === e || "object" != typeof e ? e : Object.fromEntries(Object.keys(e).sort().map((t) => [t, r(e[t])]));
		return JSON.stringify(r(e));
	}([
		e.sleepMarkers ?? [],
		e.nonwearMarkers ?? [],
		e.isInvalidNight ?? !1,
		e.explicitNoNonwear ?? !1,
		e.notes ?? "",
		e.needsConsensus ?? !1
	]) : null;
}
const lt = (e, t) => {
	if (!e.changed) return null;
	if (null === e.committed) return {
		action: "markers_cleared",
		payload: {
			sleepCount: e.previous?.sleepMarkers?.length ?? 0,
			nonwearCount: e.previous?.nonwearMarkers?.length ?? 0
		}
	};
	const n = e.committed;
	return {
		action: "markers_saved",
		payload: (r = {
			sleepCount: n.sleepMarkers.length,
			nonwearCount: n.nonwearMarkers?.length ?? 0,
			notes: n.notes || null,
			isInvalidNight: n.isInvalidNight,
			explicitNoNonwear: n.explicitNoNonwear ?? !1,
			sleepPeriodDetection: t?.sleepPeriodDetection ?? n.sleepPeriodDetectionConfig ?? null
		}, {
			sleepCount: r.sleepCount,
			nonwearCount: r.nonwearCount,
			notes: r.notes,
			isInvalidNight: r.isInvalidNight,
			explicitNoNonwear: r.explicitNoNonwear,
			...K(r.sleepPeriodDetection, r.sleepPeriodDetectionSummary)
		})
	};
	var r;
};
function ct(e, t) {
	if (null === t) return n.Promise.resolve();
	const r = t.binding;
	if (!r) throw new Error("A local night write requires the audit binding captured at its act.");
	const a = (t) => ({
		fileId: e.fileId,
		analysisDate: e.date,
		action: t.action,
		...void 0 === t.payload ? {} : { payload: t.payload }
	}), s = lt(e, t);
	return H.appendNightEditsInTransaction([
		...(t?.carried ?? []).map((e) => ({
			binding: e.binding ?? r,
			input: a(e)
		})),
		...(t?.events?.(e.committed) ?? []).map((e) => ({
			binding: r,
			input: a(e)
		})),
		...s ? [{
			binding: r,
			input: a(s)
		}] : []
	]).then(() => {});
}
function dt(e, t, n) {
	return L([
		e.markers,
		e.scoringSessions,
		e.markerProvenance,
		...$.map(({ table: t }) => e.table(t)),
		e.auditLog,
		e.files
	], t, e, n);
}
function ut(e) {
	if (Array.isArray(e)) return e.map(ut);
	if (e && "object" == typeof e) {
		const t = {};
		for (const [n, r] of Object.entries(e)) null != r && (t[n] = ut(r));
		return t;
	}
	return e;
}
const pt = (e, t) => ({
	store: at(e),
	actor: t.username,
	fileId: t.fileId,
	date: t.date,
	algorithm: t.algorithm,
	detectionRule: t.detectionRule
});
function gt(e, t, n, r) {
	return rt(pt(t, e), async () => {
		const s = await Ce(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), o = await n(s ? xe(s) : null);
		if (!o) return null;
		null !== r && await H.settleWrites();
		const i = "save" === o.kind ? await mt(o.input, t, r) : await async function(e, t, n, r) {
			const { fileId: s, date: o, username: i, algorithm: l, detectionRule: c, expected: d } = e;
			let u = !1;
			const p = await dt(t, async () => {
				if (void 0 === await t.files.get(s)) throw new Xe();
				const p = await Te(e, l, c, t);
				if (void 0 !== d && !et(p, d)) return p?.id && await De(p.id, t, p), u = !0, {
					fileId: s,
					date: o,
					username: i,
					previous: null,
					committed: null,
					changed: !1
				};
				if (!p) {
					const e = {
						fileId: s,
						date: o,
						username: i,
						previous: null,
						committed: null,
						changed: !1
					};
					return await ct(e, n), e;
				}
				const g = xe(p);
				await W({
					op: "markers_delete",
					fileId: s,
					username: i,
					payload: {
						kind: "night_unscored",
						date: o,
						algorithm: p.algorithm,
						detectionRule: p.detectionRule,
						prevContentHash: p.contentHash
					}
				}), await async function(e, t, n, r) {
					const s = new Set(n.flatMap((e) => void 0 === e.id ? [] : [e.id]));
					await e.markers.bulkDelete([...s]);
					const o = await e.markerProvenance.get(t);
					o && await e.markerProvenance.put({
						fileId: t,
						rows: o.rows.filter((e) => !s.has(e.id))
					}), n.some((e) => "auto_score" === e.username || a({
						...e,
						id: e.id
					}).nonwearDecided) && await Ye([t], e, r);
				}(t, s, [p], r);
				const f = {
					fileId: s,
					date: o,
					username: i,
					previous: g,
					committed: null,
					changed: null !== it(g)
				};
				return await ct(f, n), f;
			}, r);
			if (u) throw new Qe();
			if (null !== p.previous && "auto_score" !== i) {
				const { scheduleGgirRecompute: e } = await import("./local-export-worker-_QiDE5PV.js").then((e) => e.y);
				e(s, i, t, r);
			}
			return p;
		}({
			...e,
			expected: o.expected
		}, t, r, o.signal ?? e.signal);
		return {
			record: i.committed,
			changed: i.changed
		};
	});
}
function ft(e, t, n) {
	return rt(pt(t, {
		fileId: e.fileId,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm ?? null,
		detectionRule: e.detectionRule ?? null
	}), async () => {
		null !== n && await H.settleWrites();
		const r = await mt(e, t, n);
		return {
			record: r.committed,
			changed: r.changed
		};
	});
}
async function mt(e, t, s) {
	const { fileId: i, date: l, username: c, sleepMarkers: d, nonwearMarkers: u, isInvalidNight: p, isInvalidNightImplicit: g, notes: f, explicitNoNonwear: m, needsConsensus: h, algorithm: w = null, scoringContext: k, detectionRule: v = null, periodGuider: y = null, sleepPeriodDetectionConfig: I = null, algorithmVersion: N = null } = e, M = null !== w ? await n.waitFor(async function(e) {
		let t;
		if (e.extraParams) try {
			t = JSON.parse(e.extraParams);
		} catch {
			t = e.extraParams;
		}
		const n = ut({
			algorithm: e.algorithm,
			detector: e.detector,
			guider: e.guider,
			sleep_period_detection_config: e.sleepPeriodDetectionConfig,
			scorer_version: e.scorerVersion,
			extra_params: t
		});
		return x(_e(n));
	}({
		algorithm: w,
		detector: v,
		guider: y,
		sleepPeriodDetectionConfig: I,
		scorerVersion: N
	})) : null, _ = k ?? (null !== w && null !== M ? {
		appVersion: "local",
		algorithmVersions: { [w]: N ?? "1" },
		paramsHash: M,
		stampedAt: (/* @__PURE__ */ new Date()).toISOString()
	} : void 0), b = null !== w && null !== M ? await n.waitFor(x(_e(ut({
		fileId: i,
		date: l,
		username: c,
		algorithm: w,
		scorerVersion: N,
		detector: v,
		guider: y,
		sleepPeriodDetection: I,
		params: null,
		parameterSetHash: M
	})))) : null, T = Ne(w), R = Me(v), A = e.restoredFromBackup;
	let D = !1;
	const P = await dt(t, async (k) => {
		const x = await t.files.get(i);
		if (void 0 === x) throw new Xe();
		const P = await Te({
			fileId: i,
			date: l,
			username: c
		}, w, v, t), E = P?.algorithm === T && P.detectionRule === R ? P : void 0, j = P ? xe(P) : void 0;
		if (A && E && E.lastModifiedAt >= A.lastModifiedAt) return {
			fileId: i,
			date: l,
			username: c,
			previous: j ?? null,
			committed: xe(E),
			changed: !1
		};
		if (void 0 !== e.expected) {
			if (!et(j, e.expected)) return P?.id && await De(P.id, t, P), D = !0, {
				fileId: i,
				date: l,
				username: c,
				previous: j ?? null,
				committed: j ?? null,
				changed: !1
			};
			if (!0 !== e.guardHashOnly && j?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
		}
		const O = A ? E : j, H = u ?? O?.nonwearMarkers ?? [], F = p ?? O?.isInvalidNight ?? !1, L = void 0 === A && C(x, j ?? { sleepMarkers: [] }, { sleepMarkers: d }), V = F || L, K = m ?? O?.explicitNoNonwear ?? !1, U = h ?? O?.needsConsensus ?? !1, J = 0 === d.length || 0 === H.length ? null : (await n.waitFor(ve([{
			sleepMarkers: d,
			nonwearMarkers: H,
			isInvalidNight: V
		}])))[0] ?? null, B = J ? ye(d, J) : d, G = V || (J?.invalidates ?? !1), z = G && !J?.invalidates && (F ? void 0 === p ? !0 === O?.isInvalidNightImplicit : !0 === g : L);
		if (G && B.some((e) => e.markerType === r.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
		const Y = await n.waitFor(S({
			sleepMarkers: B,
			nonwearMarkers: H,
			isInvalidNight: G,
			explicitNoNonwear: K,
			notes: f
		})), X = null !== w ? await async function(e, t, n) {
			const { fileId: r, date: a, username: s, algorithm: i } = t, l = e.table("scoringSessions"), c = await l.where("[fileId+date+username+algorithm]").equals([
				r,
				a,
				s,
				i
			]).first();
			if (c) return await l.update(c.sessionId, {
				scorerVersion: n.scorerVersion ?? null,
				detector: n.detector ?? null,
				guider: n.guider ?? null,
				sleepPeriodDetection: n.sleepPeriodDetectionConfig ?? null,
				params: n.params ?? null,
				parameterSetHash: n.parameterSetHash,
				contentHash: n.contentHash,
				lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
			}), c.sessionId;
			const d = o(), u = (/* @__PURE__ */ new Date()).toISOString();
			return await l.add({
				sessionId: d,
				fileId: r,
				date: a,
				username: s,
				algorithm: i,
				scorerVersion: n.scorerVersion ?? null,
				detector: n.detector ?? null,
				guider: n.guider ?? null,
				sleepPeriodDetection: n.sleepPeriodDetectionConfig ?? null,
				params: n.params ?? null,
				parameterSetHash: n.parameterSetHash,
				startedAt: u,
				syncStatus: "pending",
				contentHash: n.contentHash,
				lastModifiedAt: u
			}), d;
		}(k, {
			fileId: i,
			date: l,
			username: c,
			algorithm: w
		}, {
			scorerVersion: N,
			detector: v,
			guider: y,
			sleepPeriodDetectionConfig: I,
			params: null,
			parameterSetHash: M,
			contentHash: b
		}) : null, Q = {
			fileId: i,
			date: l,
			username: c,
			algorithm: T,
			detectionRule: R,
			periodGuider: y,
			sleepPeriodDetectionConfig: I,
			algorithmVersion: N,
			scoringSessionId: X,
			manualNonwearInSleep: !1,
			sleepMarkers: B,
			nonwearMarkers: H,
			isInvalidNight: G,
			...z ? { isInvalidNightImplicit: !0 } : {},
			explicitNoNonwear: K,
			needsConsensus: U,
			notes: f,
			contentHash: Y,
			syncStatus: "pending",
			lastModifiedAt: A?.lastModifiedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
			...void 0 !== _ ? { scoringContext: _ } : {},
			...void 0 !== A ? { restoredFromBackup: A.restoreId } : {}
		}, Z = {
			fileId: i,
			date: l,
			username: c,
			previous: j ?? null,
			committed: Q,
			changed: it(j) !== it(Q)
		};
		await ct(Z, s);
		const ee = A ? E : P, te = ee && ee !== E ? {
			algorithm: ee.algorithm,
			detectionRule: ee.detectionRule
		} : void 0;
		return await W({
			op: "markers_put",
			fileId: i,
			username: c,
			...void 0 !== A ? { restoredFromBackup: A.restoreId } : {},
			payload: {
				...Q,
				prevContentHash: E?.contentHash,
				...te ? { replacedKey: te } : {}
			}
		}), await async function(e, t, { existing: n, replacement: r }, s) {
			const { fileId: o } = t;
			let i;
			n && JSON.stringify(n.sleepMarkers) === JSON.stringify(t.sleepMarkers) || await Promise.all($.map(({ table: t, field: n }) => q(e, t).where("fileId").equals(o).modify({ [n]: !0 }))), r?.id ? (i = r.id, await e.markers.update(i, (e) => {
				Object.assign(e, t), void 0 === t.isInvalidNightImplicit && delete e.isInvalidNightImplicit, void 0 === t.restoredFromBackup && delete e.restoredFromBackup;
			})) : i = await e.markers.add(t);
			const l = await e.markerProvenance.get(o), c = a({
				...t,
				id: i
			}), d = l?.rows.find((e) => e.id === i);
			return ("auto_score" === c.username || c.nonwearDecided !== (d?.nonwearDecided ?? !1) || c.nonwearDecided && c.nonwearSpans !== d?.nonwearSpans) && await Ye([o], e, s), await e.markerProvenance.put({
				fileId: o,
				rows: [...(l?.rows ?? []).filter((e) => e.id !== i), c]
			}), i;
		}(t, Q, {
			existing: E,
			replacement: ee
		}, e.signal), Z;
	}, e.signal);
	if (D) throw new Qe();
	return P;
}
async function ht(e, t, n) {
	return { changed: (await gt(e, t, () => Promise.resolve({
		kind: "unscore",
		expected: e.expected
	}), n)).changed };
}
function wt(e, t, n) {
	return Ae(e, { periodMetrics: t }, n);
}
const kt = Symbol("marker-id");
function vt(e) {
	const t = e;
	return t[kt] ??= o();
}
function yt(e, t, n = !1) {
	return {
		...t ?? structuredClone(e),
		[kt]: n ? o() : vt(e)
	};
}
function It(e, t) {
	const n = (e) => F(Object.fromEntries(Object.entries(e).filter(([e]) => "markerIndex" !== e))), r = /* @__PURE__ */ new Map();
	for (const s of e) {
		const e = n(s), t = r.get(e) ?? [];
		t.push(s), r.set(e, t);
	}
	const a = /* @__PURE__ */ new Map();
	return t.map((e) => {
		const t = n(e), s = a.get(t) ?? 0;
		return a.set(t, s + 1), void 0 !== e[kt] ? e : {
			...e,
			[kt]: r.get(t)?.[s]?.[kt] ?? o()
		};
	});
}
function Nt(e, t) {
	return {
		...t,
		...void 0 !== t.sleepMarkers && t.sleepMarkers !== e.sleepMarkers ? { sleepMarkers: It(e.sleepMarkers, t.sleepMarkers) } : {},
		...void 0 !== t.nonwearMarkers && t.nonwearMarkers !== e.nonwearMarkers ? { nonwearMarkers: It(e.nonwearMarkers, t.nonwearMarkers) } : {}
	};
}
const Mt = {
	selectedActiwareRest: "transient selection",
	actiwareRestPreview: "transient drag preview of a rest edge; the release writes through the rest owner"
}, St = { selectedActiwareRest: null };
function xt() {
	const e = m();
	return e && I.getState().getWorkspace(e), function(e) {
		try {
			return localStorage.getItem(e);
		} catch {
			return null;
		}
	}("__e2eLocalMode"), "local";
}
let _t = null;
function bt(e, t, n) {
	return !_t || _t.scope.workspaceId === n.workspaceId && _t.scope.actor === n.actor && _t.scope.studyId === n.studyId && _t.scope.sourceKey === n.sourceKey || (_t = null), null !== _t && _t.fileId === e && _t.date === t ? _t : null;
}
function Tt(e) {
	return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " ");
}
function Ct(e) {
	return `${String(e.getFullYear()).padStart(4, "0")}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
const Rt = 86400, At = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * Rt * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), Dt = (e) => e < 10 ? `0${String(e)}` : String(e);
function Pt(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / Rt), n = e - t * Rt;
	return `${At(t)} ${Dt(Math.floor(n / 3600))}:${Dt(Math.floor(n / 60) % 60)}:${Dt(n % 60)}`;
}
function Et(e, t) {
	return null !== e && Number.isFinite(e) ? function(e) {
		return e % 60 == 0;
	}(t) ? function(e) {
		const t = /* @__PURE__ */ new Date(1e3 * e);
		return `${String(t.getUTCHours()).padStart(2, "0")}:${String(t.getUTCMinutes()).padStart(2, "0")}`;
	}(e) : Tt(e).slice(11) : "--:--";
}
e("epoch_5s");
const jt = Object.freeze({
	viewport: null,
	cursorTimestamp: null,
	cursorOwner: null,
	selection: null,
	renderScene: null,
	epochSeconds: null
}), Ot = k(() => ({ scenes: {} }));
var $t = t({
	bindShown: () => fn,
	buildNightData: () => qt,
	ensureOpened: () => kn,
	fileSessionsSettled: () => Cn,
	flushCurrentNight: () => In,
	flushSession: () => Nn,
	isHeldOutbox: () => Jt,
	leavesNightUnscored: () => Bt,
	newNightContext: () => Vt,
	nightMarkerStepSeconds: () => xn,
	nightSessions: () => Sn,
	nightShown: () => zt,
	nightTokenBrand: () => Ht,
	outboxKey: () => pn,
	sameNight: () => gn,
	sessionToken: () => hn,
	setNightScopeChanging: () => Ut,
	withoutUntouchedProposal: () => Gt
});
const Ht = Symbol("night-session"), Ft = {
	markerHistory: !0,
	markerHistoryIndex: !0,
	selectedPeriodIndex: !0,
	...Object.fromEntries(["selectedActiwareRest", "actiwareRestPreview"].map((e) => [e, !0])),
	_editGeneration: !0,
	lastSavedAt: !0,
	saveReceipt: !0,
	proposalNight: !0,
	acceptingProposal: !0,
	markerMode: !0,
	creationMode: !0,
	pendingOnsetTimestamp: !0,
	placementRejected: !0,
	placementRejectionReason: !0,
	nightRuleReceipt: !0,
	_isDragTransaction: !0,
	_dragSnapshotForAudit: !0,
	_dataRange: !0,
	_viewWindow: !0
}, Lt = Object.keys(Ft);
function Wt(e) {
	return Object.fromEntries(Lt.map((t) => [t, e[t]]));
}
function Vt(e, t = e.getState()) {
	return {
		...t,
		...Wt(e.getInitialState()),
		...dn(),
		isDirty: !1,
		isSaving: !1,
		saveError: null,
		nightLoading: !0
	};
}
let Kt = 0;
function Ut(e) {
	Kt += e ? 1 : -1;
}
function Jt(e) {
	return an === e.key;
}
function qt(e) {
	return {
		sleepMarkers: e.sleepMarkers.map((e) => yt(e, {
			onsetTimestamp: e.onsetTimestamp,
			offsetTimestamp: e.offsetTimestamp,
			markerIndex: e.markerIndex,
			markerType: e.markerType,
			...e.source ? { source: e.source } : {},
			...!0 === e.edited ? { edited: !0 } : {},
			...e.placement ? { placement: e.placement } : {},
			...e.settingsHash ? { settingsHash: e.settingsHash } : {},
			...e.scoredUnderAlgorithm ? { scoredUnderAlgorithm: e.scoredUnderAlgorithm } : {},
			...e.sourceRecordReference ? { sourceRecordReference: e.sourceRecordReference } : {}
		})),
		nonwearMarkers: e.nonwearMarkers.map((e) => yt(e, {
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp,
			markerIndex: e.markerIndex,
			...e.provenance ? { provenance: e.provenance } : {},
			...e.detector ? { detector: e.detector } : {}
		})),
		isInvalidNight: e.isInvalidNight,
		...e.isInvalidNight && e.isInvalidNightImplicit ? { isInvalidNightImplicit: !0 } : {},
		explicitNoNonwear: e.explicitNoNonwear,
		notes: e.notes || "",
		needsConsensus: e.needsConsensus
	};
}
function Bt(e, t, n, r) {
	return !(!e || e.fileId !== t || e.date !== n || r.isInvalidNight || r.explicitNoNonwear || r.needsConsensus || r.notes || (r.nonwearMarkers?.length ?? 0) > 0 || 0 !== Gt(e, t, n, r).sleepMarkers.length);
}
function Gt(e, t, n, r) {
	return c(e, t, n, r.sleepMarkers) ? {
		...r,
		sleepMarkers: e?.authoredSleepMarkers ?? []
	} : r;
}
function zt(e, t) {
	const n = t.availableDates[t.currentDateIndex];
	if (null === t.currentFileId || !n) return !1;
	const r = function(e) {
		const { username: t, selectedStudyId: n } = e;
		return {
			sourceKey: xt(),
			workspaceId: m(),
			actor: t || "anonymous",
			studyId: n
		};
	}(t), a = t.nightLoading ? null : bt(t.currentFileId, n, r);
	return gn(e, {
		...e,
		scope: r,
		db: "local" === r.sourceKey && v() ? M() : null,
		fileId: t.currentFileId,
		date: n,
		algorithm: a ? a.algorithm : e.algorithm,
		detectionRule: a ? a.detectionRule : e.detectionRule
	});
}
function Yt(e, t, n) {
	return {
		binding: e.db ? H.captureWorkspaceBinding(e.db, {
			username: e.scope.actor,
			studyId: e.scope.studyId
		}, {
			fileId: e.fileId,
			analysisDate: e.date
		}) : null,
		events: (e) => (t ?? []).flatMap((t) => {
			const n = t.payload(e);
			return null === n ? [] : [{
				action: t.action,
				payload: n
			}];
		}),
		...e.settings?.sleepPeriodDetection ? { sleepPeriodDetection: e.settings.sleepPeriodDetection } : {},
		carried: n
	};
}
function Xt(e, t = e.proposalNight ?? e.acceptingProposal) {
	return Gt(t, e.currentFileId ?? -1, e.availableDates[e.currentDateIndex] ?? "", qt(e));
}
function Qt(e, t, n) {
	const r = n.proposalNight ?? (n.acceptingProposal !== t ? n.acceptingProposal : null), a = Xt(n, r);
	return void 0 !== e.dataSource?.unscoreNight && Bt(r, e.fileId, e.date, a) ? { kind: "unscore" } : {
		kind: "save",
		data: a
	};
}
async function Zt(e, t, n, r) {
	const a = e.dataSource;
	if (!a) throw new Error("The night has no storage adapter; open its session before writing.");
	const s = e.db ?? void 0;
	let o;
	if ("unscore" === t.kind) o = await a.unscoreNight(e.fileId, e.date, e.scope.actor, e.algorithm, e.detectionRule, t.expected, s, n);
	else {
		let i = "save" === t.kind ? t.data : null;
		const l = "prepared" === t.kind ? async (n) => {
			const a = await t.prepare(n);
			i = a?.data ?? null, r.push(...a?.edits ?? []);
			const s = a?.settings ?? e.settings;
			return a ? {
				data: a.data,
				settings: {
					...s,
					expected: s?.expected ?? Ze(n),
					guardHashOnly: !0
				}
			} : null;
		} : i;
		"save" === t.kind && r.push(...t.edits ?? []);
		const c = "save" === t.kind ? t.settings ?? e.settings : e.settings, d = await a.saveMarkers(e.fileId, e.date, e.scope.actor, l, e.algorithm, e.detectionRule, c, s, n), u = i;
		if (!u) return {
			status: "dropped",
			reason: "The operation made no marker changes."
		};
		o = d ?? {
			isInvalidNight: !1,
			explicitNoNonwear: !1,
			needsConsensus: !1,
			...u
		};
	}
	return "local" !== e.scope.sourceKey && function(e, t, n) {
		(function(e, t) {
			for (const r of t?.carried ?? []) ot(null, e, r);
			for (const r of t?.events?.(e.committed) ?? []) ot(null, e, r);
			const n = lt(e, t);
			n && ot(null, e, n);
		})({
			...e,
			previous: null,
			committed: t,
			changed: null !== t
		}, n);
	}({
		fileId: e.fileId,
		date: e.date,
		username: e.scope.actor
	}, o, n), function(e, t) {
		e.dataSource?.onMarkersChanged(e.fileId, e.date, e.scope.actor, e.queryClient, t, e.algorithm, e.detectionRule, e.scope.workspaceId, e.scope.studyId, e.db ?? void 0);
	}(e, o), {
		status: "committed",
		night: o
	};
}
const en = 3, tn = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new WeakMap();
let rn = 0, an = null, sn = 0;
const on = /* @__PURE__ */ new WeakMap(), ln = /* @__PURE__ */ new WeakSet(), cn = /* @__PURE__ */ new WeakMap(), dn = () => ({
	sleepMarkers: [],
	nonwearMarkers: [],
	isInvalidNight: !1,
	explicitNoNonwear: !1,
	needsConsensus: !1,
	notes: ""
});
function un(e) {
	return {
		sleepMarkers: e.sleepMarkers,
		nonwearMarkers: e.nonwearMarkers ?? [],
		isInvalidNight: e.isInvalidNight ?? !1,
		...!0 === e.isInvalidNight && !0 === e.isInvalidNightImplicit ? { isInvalidNightImplicit: !0 } : {},
		explicitNoNonwear: e.explicitNoNonwear ?? !1,
		needsConsensus: e.needsConsensus ?? !1,
		notes: e.notes
	};
}
function pn(e) {
	return e.db && !nn.has(e.db) && nn.set(e.db, rn += 1), JSON.stringify([
		e.db ? nn.get(e.db) : 0,
		e.scope.sourceKey,
		e.scope.workspaceId,
		e.scope.actor,
		e.scope.studyId,
		e.fileId,
		e.date,
		e.algorithm,
		e.detectionRule
	]);
}
function gn(e, t) {
	return null !== e && null !== t && pn(e) === pn(t);
}
function fn(e) {
	if (d(e.currentFileSourceType)) return null;
	return null;
}
function mn(e) {
	const t = fn(e);
	return t ? tn.get(pn(t)) ?? null : null;
}
function hn(e, t, n = e.binding) {
	const r = {
		[Ht]: !0,
		generation: e.generation,
		fileId: n.fileId,
		date: n.date,
		identity: n,
		context: t
	};
	return on.set(r, e), an === e.key && sn === e.generation && zt(n, e.store.getState()) && !e.store.getState().nightLoading && ln.add(r), r;
}
function wn(e, t) {
	if (void 0 !== t && (e.context = Nt(e.context, {
		...e.context,
		lastSavedAt: Date.now(),
		saveReceipt: {
			fileId: e.binding.fileId,
			date: e.binding.date,
			text: t
		}
	})), mn(e.store.getState()) !== e) return;
	const n = e.log[0]?.failure;
	e.store.setState({
		isDirty: e.log.some((e) => null !== e.failure || null != e.prepared?.mutation) || e.drags.size > 0,
		isSaving: null !== e.runner && !n,
		saveError: n?.message ?? null,
		canDiscardNightChanges: n instanceof Qe || n instanceof Xe,
		placementRejected: e.context.placementRejected,
		placementRejectionReason: e.context.placementRejectionReason,
		lastSavedAt: e.context.lastSavedAt,
		saveReceipt: e.context.saveReceipt
	});
}
async function kn(e, t = e.binding) {
	var n;
	e.opened || (await (n = {
		fileId: t.fileId,
		date: t.date,
		actor: t.scope.actor,
		store: at(t.db, t.scope),
		algorithm: t.algorithm,
		detectionRule: t.detectionRule
	}, rt(n, () => Promise.resolve())), function(e, t) {
		const n = e.context, r = t ? un(t) : dn(), a = Ze(t), s = void 0 !== e.saved && JSON.stringify(Ze(e.saved)) === JSON.stringify(a) && (null !== a.contentHash || F(e.saved ? un(e.saved) : null) === F(t ? r : null));
		void 0 === e.saved || s || (e.context = Nt(n, Vt(e.store, n))), e.saved = t, e.view = Nt(n, {
			...r,
			...s ? {
				sleepMarkers: n.sleepMarkers,
				nonwearMarkers: n.nonwearMarkers
			} : {}
		});
		const o = e.context, i = !r.isInvalidNight && F(r.sleepMarkers) === F(o.proposalNight?.authoredSleepMarkers ?? []) && c(o.proposalNight, e.binding.fileId, e.binding.date, o.sleepMarkers);
		e.context = Nt(o, {
			...o,
			...e.view,
			sleepMarkers: i ? o.sleepMarkers : e.view.sleepMarkers,
			proposalNight: i ? o.proposalNight : null
		}), e.opened = !0;
	}(e, await t.dataSource.loadMarkers(t.fileId, t.date, t.scope.actor, t.algorithm, t.detectionRule, t.db ?? void 0)), function(e, t) {
		if (!Jt(e) || !e.shownOpen?.()) return;
		if (!e.opened) return void wn(e);
		const n = e.store, r = n.getState(), a = hn(e, r, t);
		if (e.identify?.(), s = {
			scope: t.scope,
			db: t.db,
			fileId: t.fileId,
			date: t.date,
			algorithm: t.algorithm,
			detectionRule: t.detectionRule,
			options: t.settings
		}, _t = s, !Sn.owns(a, r)) return;
		var s;
		const o = e.view, i = e.context;
		r.showStoredNight(a, t.fileId, t.date, {
			...o,
			sleepMarkers: i.sleepMarkers,
			view: Wt(i)
		}), e.context = Nt(e.context, n.getState()), wn(e);
	}(e, t));
}
function vn(e, t, n = e.binding) {
	if (void 0 === e.saved) throw new Error("The night has not opened; no write has a baseline.");
	const r = Ze(e.saved);
	if ("unscore" === t.kind) return {
		...t,
		expected: r
	};
	const a = t.settings ?? n.settings ?? {};
	return {
		...t,
		settings: {
			...a,
			expected: r,
			guardHashOnly: !0
		}
	};
}
function yn(e) {
	if (e.runner || e.recovering || !e.log.length || e.log[0].failure) return;
	let t;
	e.runner = new Promise((e) => {
		t = e;
	}), (async () => {
		for (; e.log.length && !e.log[0].failure;) {
			const t = e.log[0], r = hn(e, t.token.context, t.token.identity);
			cn.set(r, {
				slot: t,
				run: (e) => e()
			}), wn(e);
			try {
				if (t.prepared ??= await t.prepare(r), t.failure) throw t.prepared = null, t.failure;
				cn.delete(r);
				const n = t.prepared;
				let a;
				if (n.refusal) a = {
					status: "dropped",
					reason: n.refusal
				};
				else if (n.mutation) {
					if (!t.audit) throw new Error("An internal read cannot write a night.");
					const r = [...n.carried];
					a = await Zt(t.token.identity, vn(e, n.mutation, t.token.identity), {
						...t.audit,
						carried: r
					}, r);
				} else a = {
					status: "committed",
					night: e.saved ?? null
				};
				const s = e.saved ?? null;
				"committed" === a.status && n.mutation && (e.saved = a.night, n.accepting && (e.context = Nt(e.context, {
					...e.context,
					acceptingProposal: null
				}), e.store.getState().settleProposalAcceptance(n.accepting, !0))), e.log.shift(), "committed" !== a.status || !Sn.holds(t.token, e.store.getState()) && ln.has(t.token) || t.options.onCommitted?.(a.night), t.settle(a), wn(e, "committed" === a.status && n.mutation && a.night ? Tn(s, a.night, {
					date: e.binding.date,
					undone: n.undone,
					stepSec: t.step
				}) : void 0);
			} catch (n) {
				cn.delete(r), t.failure = n instanceof Error ? n : new Error(String(n)), t.prepared?.mutation || (t.prepared = null), t.settle({
					status: "dropped",
					reason: `${t.failure.message} Return to the Sleep page and use Retry.`
				}), t.failure instanceof Qe || t.failure instanceof Xe || !(t.retries < en) || (t.retries += 1, t.retryTimer = setTimeout(() => {
					t.retryTimer = null, t.failure = null, yn(e);
				}, 2 ** t.retries * 1e3)), wn(e);
			}
		}
		e.runner = null, wn(e), t();
	})();
}
async function In(e) {
	const t = mn(e.getState());
	return !t || Nn(t);
}
async function Nn(e) {
	return yn(e), await Mn(e), 0 === e.log.length;
}
async function Mn(e) {
	for (; e.runner;) await e.runner;
}
const Sn = {
	executor: (e) => cn.get(e)?.run ?? null,
	fail: (e, t) => {
		const n = cn.get(e)?.slot;
		n && (n.failure = t instanceof Error ? t : new Error(String(t)));
	},
	holds: (e, t = on.get(e)?.store.getState() ?? e.context) => !t.nightLoading && Sn.owns(e, t),
	owns: (e, t = on.get(e)?.store.getState() ?? e.context) => {
		const n = on.get(e);
		return void 0 !== n && n.opened && an === n.key && sn === e.generation && n.generation === e.generation && zt(n.binding, t);
	},
	night: (e) => on.get(e)?.view ?? null,
	context: (e) => on.get(e)?.context ?? e.context,
	updateContext: (e, t) => {
		const n = on.get(e);
		n && (n.context = Nt(n.context ?? t, t));
	},
	write: (e, t, n, r) => {
		const a = on.get(e), s = cn.get(e);
		if (!a || !s) throw new Error("A night write requires its proposal's executor.");
		a.view = Nt(a.context ?? e.context, t), r && (a.context = Nt(a.context ?? r, {
			...r,
			...a.view
		})), s.slot.carried.push(...n);
	},
	enqueue: (e, t, n = !1, r) => {
		const a = on.get(e);
		if (!a) return Promise.reject(/* @__PURE__ */ new Error("The edit has no owning night session."));
		const s = r ?? a.store;
		let o;
		return function(e, t, n, r = {}) {
			let a;
			const s = new Promise((e) => {
				a = e;
			}), o = [], i = {
				sequence: ++e.sequence,
				token: t,
				prepare: n,
				options: r,
				settled: s,
				settle: a,
				audit: r.readOnly ? null : Yt(t.identity, r.acts, o),
				baseline: null,
				prepared: null,
				failure: null,
				carried: o,
				retries: 0,
				retryTimer: null,
				step: xn(t)
			}, l = e.log.length > 1 ? e.log[e.log.length - 1] : void 0;
			return r.noteEdit && l?.options.noteEdit && null === l.prepared && null === l.failure && (e.log.pop(), s.then(l.settle)), e.log.push(i), yn(e), wn(e), i;
		}(a, e, async (r) => {
			await kn(a, e.identity);
			const i = Sn.context(r);
			cn.get(r).slot.baseline ??= un(Xt(i));
			const l = i._editGeneration;
			return o = await t(r), n || Sn.context(r)._editGeneration === l ? {
				mutation: null,
				accepting: null,
				carried: [],
				undone: !1
			} : function(e, t, n = e.store) {
				const r = Sn.holds(t, n.getState()), a = r ? n.getState() : e.context, s = r ? a.acceptingProposal : null;
				return {
					mutation: r ? Qt(t.identity, s, a) : {
						kind: "save",
						data: e.view
					},
					accepting: s,
					carried: r ? n.takeShownEdits(t.identity) : cn.get(t).slot.carried,
					undone: a.markerHistoryIndex < a.markerHistory.length - 1
				};
			}(a, r, s);
		}).settled.then((e) => ("dropped" !== e.status || "boolean" != typeof o) && o);
	},
	waiting: (e) => e ? (on.get(e)?.log.length ?? 0) > 0 : [...tn.values()].some((e) => e.log.length > 0),
	setDragging: (e, t) => {
		const n = on.get(e);
		t ? n?.drags.add(e) : n?.drags.delete(e);
	},
	scopeChanging: () => Kt > 0,
	hasUnsavedWork: () => [...tn.values()].some((e) => e.log.length > 0 || e.drags.size > 0),
	settled: async () => {
		await Promise.all([...tn.values()].map(Mn));
	}
};
function xn(e) {
	const t = on.get(e)?.key ?? null;
	return function(e, t) {
		const n = t.availableFiles.find((e) => e.id === t.currentFileId)?.countEpochSeconds;
		return e.epochSeconds ?? s(A(t), n);
	}((n = null === t ? null : function(e, t, n, r) {
		return !e || !Number.isInteger(t) || (t ?? 0) <= 0 || !n ? null : `${r ?? e}\0${String(t)}\0${n}`;
	}(t, e.fileId, e.date, t), null == n ? jt : Ot.getState().scenes[n] ?? jt), e.context);
	var n;
}
function _n(e) {
	return [...e.sleepMarkers.map((e) => ({
		start: e.onsetTimestamp,
		end: e.offsetTimestamp,
		label: e.markerType === r.NAP ? "nap" : "main sleep",
		startName: "onset",
		endName: "offset"
	})), ...(e.nonwearMarkers ?? []).map((e) => ({
		start: e.startTimestamp,
		end: e.endTimestamp,
		label: "nonwear",
		startName: "start",
		endName: "end"
	}))];
}
function bn(e, t, n) {
	if (t === n || null === t || null === n) return null;
	const r = Math.abs(n - t);
	return `moved ${e} ${r >= 60 ? `${String(Math.round(r / 60))} min` : `${String(r)} s`} ${n < t ? "earlier" : "later"}`;
}
function Tn(e, t, { date: n, undone: r, stepSec: a }) {
	const s = (e) => Et(e, a), o = e ? _n(e) : [], i = _n(t), l = (e, t) => e.label === t.label && e.start === t.start && e.end === t.end, c = o.filter((e) => !i.some((t) => l(t, e))), d = i.filter((e) => !o.some((t) => l(e, t))), u = [];
	for (const g of c) {
		const e = d.findIndex((e) => e.label === g.label);
		if (-1 === e) {
			u.push(`deleted ${g.label} ${s(g.start)}–${s(g.end)}`);
			continue;
		}
		const [t] = d.splice(e, 1);
		if (!t) continue;
		const n = [bn(g.startName, g.start, t.start), bn(g.endName, g.end, t.end)].filter((e) => null !== e);
		u.push(n.length > 0 ? n.join(" and ") : `changed ${g.label}`);
	}
	for (const g of d) u.push(`${r ? "restored" : "saved"} ${g.label} ${s(g.start)}–${s(g.end)}`);
	(e?.isInvalidNight ?? !1) !== t.isInvalidNight && u.push(t.isInvalidNight ? "marked invalid night" : "cleared invalid night"), (e?.explicitNoNonwear ?? !1) !== (t.explicitNoNonwear ?? !1) && u.push(t.explicitNoNonwear ? "confirmed no nonwear" : "cleared no-nonwear"), (e?.needsConsensus ?? !1) !== t.needsConsensus && u.push(t.needsConsensus ? "flagged for consensus" : "unflagged for consensus"), (e?.notes ?? "") !== t.notes && u.push("saved note");
	const p = u.length > 0 ? u.join("; ") : "nothing changed";
	return r ? `Undid — ${p} on ${n}` : `${p.charAt(0).toUpperCase()}${p.slice(1)} on ${n}`;
}
async function Cn(e, t, n) {
	await Promise.all([...tn.values()].filter((r) => r.binding.db === e && r.binding.fileId === t && (!n || r.binding.date === n.date && r.binding.scope.actor === n.username)).map(Mn));
}
export { Ee as A, ve as B, ht as C, qe as D, Je as E, je as F, z as G, ce as H, Ce as I, U as J, J as K, be as L, Ke as M, We as N, Ue as O, Pe as P, xe as R, ft as S, Ye as T, we as U, ye as V, Y as W, V as Y, vt as _, xn as a, Ze as b, gn as c, Tt as d, Pt as f, yt as g, Mt as h, Bt as i, Le as j, He as k, Gt as l, St as m, Cn as n, Sn as o, Ct as p, q, In as r, $t as s, fn as t, Et as u, Nt as v, gt as w, st as x, wt as y, Ie as z };
