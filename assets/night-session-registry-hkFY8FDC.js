import { Nn as e, Nt as t, Pt as n, S as r, dt as a, f as s, g as o, kt as i, m as l, nt as c, ut as d } from "./schema-Bbr1Zg5F.js";
import { r as u } from "./workers-BSP07cYu.js";
import { G as p, H as g, K as f, W as m, Y as h, a as w, n as k, o as v, t as I } from "./workspace-db-BEYycimi.js";
import { c as y, r as N, u as M } from "./legacy-invalid-night-zjKZRSNb.js";
import { a as x, i as S } from "./content-hash-CZ-UAlQR.js";
import { a as _, i as b } from "./project-revision-C5TJ0HPW.js";
import { H as T, J as C, K as R, Q as A, at as D, it as P, o as E, ot as j, rt as O } from "./per-source-defaults-DGxXQBbZ.js";
import { t as $ } from "./audit-log-DX_8V0K_.js";
import { t as H } from "./audit-hash-DNLMlimm.js";
import { i as F, t as L } from "./wal-CX7Pr7mo.js";
const W = "auto_score";
function V(e, t) {
	return {
		sleepPeriodDetectionConfig: R(e),
		sleepPeriodDetectionSummary: t ?? T(e)
	};
}
function K(e) {
	return {
		algorithm: e.algorithm,
		...V(e.sleepPeriodDetection, e.sleepPeriodDetectionSummary),
		sleepCount: e.sleepCount,
		napCount: e.napCount,
		markers: e.markers
	};
}
function U(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function J(e) {
	return {
		...e,
		edited: !0
	};
}
function q(e, t, n, r) {
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
	const [i, l] = D(a.markerType), c = J({
		...a,
		offsetTimestamp: r,
		markerType: i
	}), d = J({
		...a,
		onsetTimestamp: n,
		markerType: l
	}), u = [...e];
	return u.splice(t, 1, c, d), {
		ok: !0,
		markers: U(u),
		newIndex: t + 1
	};
}
function B(e, t, n) {
	const r = e[t];
	if (!r) return {
		ok: !1,
		reason: "out-of-range"
	};
	const a = "next" === n ? t + 1 : t - 1, s = e[a];
	if (!s) return {
		ok: !1,
		reason: "no-neighbor"
	};
	const o = r.onsetTimestamp, i = r.offsetTimestamp, l = s.onsetTimestamp, d = s.offsetTimestamp;
	if (null == o || null == i || null == l || null == d) return {
		ok: !1,
		reason: "no-boundaries"
	};
	const u = Math.min(o, l), p = Math.max(i, d), g = O(r, s), f = Math.min(t, a), m = J({
		...g !== c.MAIN_SLEEP || A(r) ? r : s,
		onsetTimestamp: u,
		offsetTimestamp: p,
		markerType: g
	}), h = e.filter((e, n) => n !== t && n !== a);
	return h.splice(f, 0, m), {
		ok: !0,
		markers: U(h),
		mergedIndex: f
	};
}
function G(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function z(e) {
	return "boolean" == typeof e ? e : null;
}
function Y(e) {
	return "string" == typeof e ? e : null;
}
function X(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function Q(e, t) {
	return !(e.length > 0) && t;
}
function Z(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
function ee(e) {
	const t = function(e) {
		return Array.isArray(e) ? e : null;
	}(e);
	return null === t ? null : t.every(Z) ? t : null;
}
function te(e) {
	const t = ee(e);
	return null === t ? null : t;
}
function ne(e) {
	const t = ee(e);
	return null === t ? null : t;
}
function re(e) {
	return e.filter((e) => e.markerType === c.MAIN_SLEEP).length;
}
function ae(e) {
	return e.every((e, t) => e.markerIndex === t + 1);
}
const se = {
	main_sleep_on_invalid_night: ({ after: e }) => e.isInvalidNight && re(e.sleepMarkers) > 0,
	multiple_main_sleep: ({ after: e }) => re(e.sleepMarkers) > 1,
	first_marker_not_main_sleep: ({ after: e }) => !e.isInvalidNight && e.sleepMarkers.length > 0 && 0 === re(e.sleepMarkers),
	marker_index_noncontiguous: ({ after: e }) => !ae(e.sleepMarkers) || !ae(e.nonwearMarkers),
	boundaries_disordered: ({ after: e }) => e.sleepMarkers.some((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && e.onsetTimestamp >= e.offsetTimestamp) || e.nonwearMarkers.some((e) => null != e.startTimestamp && null != e.endTimestamp && e.startTimestamp >= e.endTimestamp),
	nonwear_flag_with_markers: ({ after: e }) => e.explicitNoNonwear && e.nonwearMarkers.length > 0,
	manual_nonwear_in_sleep: ({ payload: e }) => !0 === e.manualNonwearInSleep,
	marker_limit_exceeded: ({ after: e }) => e.sleepMarkers.length > j.MAX_SLEEP_PERIODS_PER_DAY || e.nonwearMarkers.length > j.MAX_NONWEAR_PERIODS_PER_DAY,
	split_not_strictly_inside: ({ before: e, payload: t }) => {
		const n = G(t.periodIndex), r = G(t.at);
		return null !== n && null !== r && !q(e.sleepMarkers, n, r, G(t.firstOffset) ?? r).ok;
	},
	merge_no_neighbor: ({ before: e, payload: t }) => {
		const n = G(t.periodIndex), r = Y(t.direction);
		return null !== n && ("prev" === r || "next" === r) && !B(e.sleepMarkers, n, r).ok;
	},
	mutation_on_read_only_view: ({ context: e }) => !0 === e.readOnlyView,
	undo_beyond_history: ({ context: e }) => void 0 !== e.undoDepth && e.undoDepth <= 0,
	redo_beyond_history: ({ context: e }) => void 0 !== e.redoDepth && e.redoDepth <= 0
};
function oe(e, t) {
	const n = y[e]?.guards ?? [], r = [];
	for (const a of n) {
		const e = se[a], n = M[a];
		e && n && e(t) && r.push({
			guard: a,
			severity: n.severity
		});
	}
	return r;
}
function ie(e, t) {
	const { isInvalidNightImplicit: n, ...r } = e, a = z(t.isInvalidNight) ?? e.isInvalidNight;
	return {
		...r,
		isInvalidNight: a,
		...a && !0 === z(t.isInvalidNightImplicit) ? { isInvalidNightImplicit: !0 } : {}
	};
}
function le(e, t) {
	const n = t.stateAfter;
	if (null === n || "object" != typeof n) return {
		state: e,
		reconstructed: !1
	};
	const r = n, a = te(r.sleepMarkers), s = ne(r.nonwearMarkers);
	return null === a || null === s ? {
		state: e,
		reconstructed: !1
	} : { state: {
		...ie(e, r),
		sleepMarkers: a,
		nonwearMarkers: s,
		explicitNoNonwear: z(r.explicitNoNonwear) ?? e.explicitNoNonwear,
		needsConsensus: z(r.needsConsensus) ?? e.needsConsensus,
		notes: Y(r.notes) ?? e.notes
	} };
}
const ce = {
	marker_placed: (e, t) => {
		if ("nonwear" === Y(t.category)) {
			const n = G(t.startTimestamp), r = G(t.endTimestamp);
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
		const n = G(t.onsetTimestamp), r = G(t.offsetTimestamp);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = Y(t.markerType) ?? P(e.sleepMarkers, e), s = [...e.sleepMarkers, {
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
		const r = n, a = te(r.sleepMarkers), s = ne(r.nonwearMarkers);
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
		const n = G(t.periodIndex), r = t.updates;
		if (null === n || null === r || "object" != typeof r) return {
			state: e,
			reconstructed: !1
		};
		const a = r;
		if ("nonwear" === Y(t.category)) {
			const t = e.nonwearMarkers.map((e, t) => t === n ? {
				...e,
				...a
			} : e);
			return { state: {
				...e,
				nonwearMarkers: t,
				explicitNoNonwear: Q(t, e.explicitNoNonwear)
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
		const n = G(t.periodIndex);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : "nonwear" === Y(t.category) ? { state: {
			...e,
			nonwearMarkers: X(e.nonwearMarkers.filter((e, t) => t !== n))
		} } : { state: {
			...e,
			sleepMarkers: X(e.sleepMarkers.filter((e, t) => t !== n))
		} };
	},
	markers_cleared: (e) => ({ state: {
		...e,
		sleepMarkers: [],
		nonwearMarkers: []
	} }),
	sleep_period_split: (e, t) => {
		const n = G(t.periodIndex), r = G(t.at);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = q(e.sleepMarkers, n, r, G(t.firstOffset) ?? r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	sleep_period_merged: (e, t) => {
		const n = G(t.periodIndex), r = Y(t.direction);
		if (null === n || "prev" !== r && "next" !== r) return {
			state: e,
			reconstructed: !1
		};
		const a = B(e.sleepMarkers, n, r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	session_start: (e, t) => {
		const n = te(t.sleepMarkers), r = ne(t.nonwearMarkers);
		return null === n || null === r ? {
			state: e,
			reconstructed: !1
		} : {
			state: {
				...ie(e, t),
				sleepMarkers: n,
				nonwearMarkers: r,
				explicitNoNonwear: z(t.explicitNoNonwear) ?? e.explicitNoNonwear,
				needsConsensus: z(t.needsConsensus) ?? e.needsConsensus,
				notes: Y(t.notes) ?? e.notes
			},
			reconstructed: void 0 !== t.notes
		};
	},
	markers_saved: (e, t, n) => {
		const r = G(t.sleepCount), a = G(t.nonwearCount);
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
	undo: le,
	redo: le,
	auto_score_applied: (e, t) => {
		const n = te(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: n
		} };
	},
	auto_nonwear_applied: (e, t) => {
		const n = ne(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			nonwearMarkers: n,
			explicitNoNonwear: Q(n, e.explicitNoNonwear)
		} };
	},
	consensus_toggled: (e, t) => {
		const n = z(t.value);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			needsConsensus: n
		} };
	},
	invalid_night_toggled: (e, t) => {
		const n = z(t.value);
		if (null === n) return {
			state: e,
			reconstructed: !1
		};
		const { isInvalidNightImplicit: r, ...a } = e;
		if (!n) return { state: {
			...a,
			isInvalidNight: !1
		} };
		const s = X(e.sleepMarkers.filter((e) => e.markerType !== c.MAIN_SLEEP)), o = !0 === z(t.implicit);
		return { state: {
			...a,
			isInvalidNight: !0,
			...o ? { isInvalidNightImplicit: !0 } : {},
			sleepMarkers: s
		} };
	},
	no_nonwear_toggled: (e, t) => {
		const n = z(t.value);
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
		const n = Y(t.after);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			notes: n
		} };
	},
	candidate_copied: le
};
function de(e, t, n = {}) {
	const r = N(t), a = r.payload ?? {}, s = ce[r.action], o = s ? s(e, a, r) : { state: e }, i = o.state;
	return {
		state: i,
		violations: oe(r.action, {
			before: e,
			after: i,
			event: r,
			payload: a,
			context: n
		}),
		reconstructed: o.reconstructed ?? !0
	};
}
function ue(e) {
	return "object" != typeof e || null === e ? null : "string" == typeof e.action ? N(e) : null;
}
function pe(e, t) {
	if ("markers_saved" !== e.action) return !1;
	const n = e.payload ?? {}, r = G(n.sleepCount), a = G(n.nonwearCount);
	return null !== r && null !== a && (r !== t.sleepMarkers.length || a !== t.nonwearMarkers.length);
}
function ge(e) {
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
		const e = ue(a), s = e ? de(n, e) : {
			state: n,
			violations: [],
			reconstructed: !1
		};
		n = s.state, null !== e && !0 === y[e.action]?.stateKeyframe && s.reconstructed ? r = "exact" : s.reconstructed || "exact" !== r || (r = "divergent"), "exact" === r && null !== e && pe(e, n) && (r = "divergent"), t.push({
			state: n,
			basis: r,
			violations: s.violations
		});
	}
	return t;
}
function fe(e) {
	const t = [
		`${String(e.sleepMarkers.length)} sleep`,
		`${String(e.nonwearMarkers.length)} nonwear`,
		`invalid-night:${String(e.isInvalidNight)}`
	];
	return e.explicitNoNonwear && t.push("no-nonwear"), e.needsConsensus && t.push("needs-consensus"), e.notes.length > 0 && t.push(`notes ${String(e.notes.length)}ch`), t.join(", ");
}
function me(e) {
	return {
		sleep: e.sleepMarkers.map((e) => ({
			onset: e.onsetTimestamp,
			offset: e.offsetTimestamp,
			main: A(e)
		})),
		nonwear: (e.nonwearMarkers ?? []).map((e) => ({
			start: e.startTimestamp,
			end: e.endTimestamp
		})),
		isInvalidNight: e.isInvalidNight ?? !1
	};
}
async function he(e, t = u()) {
	if (0 === e.length) return [];
	const n = await t.settleManualNonwearNights(e.map(me));
	if (n.length !== e.length) throw new Error(`The manual-nonwear night rule answered ${String(n.length)} settle(s) for ${String(e.length)} night(s).`);
	return n;
}
function we(e, t) {
	return 0 === t.removed.length ? e : t.kept.map((t, n) => ({
		...e[t],
		markerIndex: n + 1
	}));
}
async function ke(e, t) {
	const n = ge(e), r = e.flatMap((e, t) => {
		const r = e.payload, a = n[t]?.state;
		return "session_start" === e.action && null != r && "boolean" != typeof r.manualNonwearInSleep && void 0 !== a && Array.isArray(r.sleepMarkers) && Array.isArray(r.nonwearMarkers) && r.sleepMarkers.length === a.sleepMarkers.length && r.nonwearMarkers.length === a.nonwearMarkers.length ? [t] : [];
	});
	if (0 === r.length) return n;
	const a = await async function(e, t) {
		return (await he(e, t)).map((e) => e.removed.length > 0);
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
	}), ge(s);
}
function ve(e) {
	return null === e ? d : e;
}
function Ie(e) {
	return null == e ? a : e;
}
function ye(e) {
	return "__legacy_dr__" === e ? null : e;
}
function Ne(e) {
	return {
		...e,
		algorithm: (t = e.algorithm, "__legacy__" === t ? null : t),
		detectionRule: ye(e.detectionRule)
	};
	var t;
}
function Me(e) {
	const t = (e) => Array.isArray(e) ? e.map(t) : e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, n]) => [e, t(n)])) : e;
	return JSON.stringify(t(e));
}
function xe(e, { date: t, username: n }, r, a) {
	const s = e.filter((e) => e.date === t && e.username === n);
	if (void 0 !== r) {
		const e = ve(r), t = Ie(a), n = (e, t) => s.find((n) => n.algorithm === e && n.detectionRule === t);
		return n(e, t) ?? ("__legacy_dr__" !== t ? n(e, "__legacy_dr__") : void 0) ?? (null !== r ? n("__legacy__", "__legacy_dr__") : void 0);
	}
	return s.reduce((e, t) => !e || (t.id ?? 0) < (e.id ?? 0) ? t : e, void 0);
}
function Se(e, t, n, r) {
	return r.transaction("r", r.markers, async () => xe(await r.markers.where("[fileId+date+username]").equals([
		e.fileId,
		e.date,
		e.username
	]).toArray(), e, t, n));
}
async function _e(e, t, n, r, a, s = I()) {
	const o = await Se({
		fileId: e,
		date: t,
		username: n
	}, r, a, s);
	return o ? Ne(o) : void 0;
}
const be = [
	"manualNonwearInSleep",
	"periodMetrics",
	"syncStatus"
];
function Te(e, t, n) {
	const r = Object.fromEntries(be.filter((e) => e in t).map((e) => [e, t[e]]));
	return n.markers.update(e, r);
}
async function Ce(e, t = I(), n, r) {
	const a = t;
	await b(a, [a.markers], async () => {
		if (n) {
			const t = await a.markers.get(e);
			if (!t || Me(Ne(t)) !== Me(n)) return;
		}
		await Te(e, { syncStatus: "conflict" }, a);
	}, r);
}
function Re(e) {
	return `${p.SCORED_VARIANT_WARM}:${String(e)}`;
}
function Ae(e = m.getState().jobs) {
	if (!k()) return null;
	const t = Object.values(e).reverse().find((e) => g(e) && e.workspaceId === I().name && e.kind === p.SCORED_VARIANT_WARM && e.status !== f.DONE && e.status !== f.CANCELLED);
	return t ? {
		fileId: Number(t.key.split(":").at(-1)),
		done: t.done,
		total: t.total,
		...t.status === f.FAILED ? { failed: !0 } : {}
	} : null;
}
function De(e, t) {
	if (!k() || t && I() !== t) return;
	const n = (t ?? I()).name, r = m.getState();
	if (!e) return;
	const a = Re(e.fileId), s = `${n}:${a}`;
	r.jobs[s] && !e.failed || r.update(s, {
		id: s,
		workspaceId: n,
		key: a,
		kind: p.SCORED_VARIANT_WARM,
		label: "Scoring variants",
		controller: r.jobs[s]?.controller ?? new AbortController(),
		done: e.done,
		total: e.total,
		status: e.failed ? f.FAILED : f.RUNNING
	});
}
const Pe = /* @__PURE__ */ new Set(), Ee = /* @__PURE__ */ new WeakMap();
async function je(e, t) {
	const n = Ee.get(e) ?? {
		depth: 0,
		files: /* @__PURE__ */ new Set()
	};
	Ee.set(e, n), n.depth++;
	try {
		return await t();
	} finally {
		if (0 === --n.depth) {
			Ee.delete(e);
			for (const t of n.files) $e(t, e, n.files);
		}
	}
}
const Oe = /* @__PURE__ */ new WeakMap();
function $e(e, t, n) {
	const r = Ee.get(t);
	if (r) r.files.add(e);
	else for (const a of Pe) n && n.size > 1 ? a(e, t, void 0, n) : a(e, t);
}
function He(e) {
	return Pe.add(e), () => Pe.delete(e);
}
const Fe = /* @__PURE__ */ new Set();
function Le(e, t) {
	for (const n of Fe) n(e, t);
}
const We = "scored-variant-warm-backfill-v1", Ve = `placement-results-backfill-v${String(2)}`, Ke = "placement-results-backfill-generation-v1", Ue = /* @__PURE__ */ new Set();
function Je(e, t, n) {
	const r = n ? Oe.get(n) : void 0;
	if (r?.db !== t) for (const a of Ue) a([e], t);
	else r.files.add(e);
}
const qe = /* @__PURE__ */ new WeakMap();
async function Be(e, t = I(), n) {
	let r = i.currentTransaction;
	for (; r?.parent;) r = r.parent;
	if (await _(t, [t.projectMeta], async () => {
		const e = await t.projectMeta.get(Ke);
		await t.projectMeta.put({
			key: Ke,
			revision: (e?.revision ?? 0) + 1
		}), await t.projectMeta.delete(Ve);
	}, n), !r || r.db !== t) {
		for (const r of new Set(e)) Je(r, t, n);
		return;
	}
	let a = qe.get(r);
	if (!a) {
		a = /* @__PURE__ */ new Set(), qe.set(r, a);
		const e = a;
		r.idbtrans.addEventListener("complete", () => {
			for (const r of e) Je(r, t, n);
		}, { once: !0 });
	}
	for (const s of e) a.add(s);
}
var Ge = class extends Error {
	constructor() {
		super("The recording was deleted; this night was not saved."), this.name = "RecordingDeletedError";
	}
}, ze = class extends Error {
	constructor() {
		super("Markers changed during rescore or in another tab. Retry keeps the night on screen; reopening the night shows the stored one."), this.name = "NightConflictError";
	}
};
function Ye(e) {
	return {
		contentHash: e?.contentHash ?? null,
		needsConsensus: e?.needsConsensus ?? !1
	};
}
function Xe(e, t) {
	const n = Ye(e);
	return n.contentHash === t.contentHash && n.needsConsensus === t.needsConsensus;
}
const Qe = (e, t) => JSON.stringify([e, t]), Ze = /* @__PURE__ */ new Map();
function et(e, t) {
	const n = ((e) => Qe(e.store, e.fileId) + JSON.stringify([
		e.actor,
		e.date,
		ve(e.algorithm),
		Ie(e.detectionRule)
	]))(e);
	return function(e, t, n) {
		const r = e.length > 0 ? Promise.all(e).then(n) : n(), a = r.then(() => {}, () => {});
		for (const s of t) Ze.set(s, a), a.then(() => {
			Ze.get(s) === a && Ze.delete(s);
		});
		return r;
	}([Ze.get(n), Ze.get((r = e.store, a = e.fileId, `${Qe(r, a)}*`))].filter((e) => void 0 !== e), [n], t);
	var r, a;
}
function tt(e, t) {
	return e?.name ?? `${t?.sourceKey ?? "server"}:${t?.workspaceId ?? ""}`;
}
function nt(e) {
	rt(e.binding, e, e);
}
function rt(e, t, n) {
	$.recordNightEdit(e, {
		fileId: t.fileId,
		analysisDate: t.date,
		action: n.action,
		...void 0 === n.payload ? {} : { payload: n.payload }
	});
}
function at(e) {
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
const st = (e, t) => {
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
			...V(r.sleepPeriodDetection, r.sleepPeriodDetectionSummary)
		})
	};
	var r;
};
function ot(e, t) {
	if (null === t) return i.Promise.resolve();
	const n = t.binding;
	if (!n) throw new Error("A local night write requires the audit binding captured at its act.");
	const r = (t) => ({
		fileId: e.fileId,
		analysisDate: e.date,
		action: t.action,
		...void 0 === t.payload ? {} : { payload: t.payload }
	}), a = st(e, t);
	return $.appendNightEditsInTransaction([
		...(t?.carried ?? []).map((e) => ({
			binding: e.binding ?? n,
			input: r(e)
		})),
		...(t?.events?.(e.committed) ?? []).map((e) => ({
			binding: n,
			input: r(e)
		})),
		...a ? [{
			binding: n,
			input: r(a)
		}] : []
	]).then(() => {});
}
function it(e, t, n) {
	return F([
		e.markers,
		e.scoringSessions,
		e.markerProvenance,
		e.actiwareFileData,
		e.auditLog,
		e.files
	], t, e, n);
}
function lt(e) {
	if (Array.isArray(e)) return e.map(lt);
	if (e && "object" == typeof e) {
		const t = {};
		for (const [n, r] of Object.entries(e)) null != r && (t[n] = lt(r));
		return t;
	}
	return e;
}
const ct = (e, t) => ({
	store: tt(e),
	actor: t.username,
	fileId: t.fileId,
	date: t.date,
	algorithm: t.algorithm,
	detectionRule: t.detectionRule
});
function dt(e, t, n, r) {
	return et(ct(t, e), async () => {
		const a = await _e(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), s = await n(a ? Ne(a) : null);
		if (!s) return null;
		null !== r && await $.settleWrites();
		const o = "save" === s.kind ? await pt(s.input, t, r) : await async function(e, t, n, r) {
			const { fileId: a, date: s, username: o, algorithm: i, detectionRule: c, expected: d } = e;
			let u = !1;
			const p = await it(t, async () => {
				if (void 0 === await t.files.get(a)) throw new Ge();
				const p = await Se(e, i, c, t);
				if (void 0 !== d && !Xe(p, d)) return p?.id && await Ce(p.id, t, p), u = !0, {
					fileId: a,
					date: s,
					username: o,
					previous: null,
					committed: null,
					changed: !1
				};
				if (!p) {
					const e = {
						fileId: a,
						date: s,
						username: o,
						previous: null,
						committed: null,
						changed: !1
					};
					return await ot(e, n), e;
				}
				const g = Ne(p);
				await L({
					op: "markers_delete",
					fileId: a,
					username: o,
					payload: {
						kind: "night_unscored",
						date: s,
						algorithm: p.algorithm,
						detectionRule: p.detectionRule,
						prevContentHash: p.contentHash
					}
				}), await async function(e, t, n, r) {
					const a = new Set(n.flatMap((e) => void 0 === e.id ? [] : [e.id]));
					await e.markers.bulkDelete([...a]);
					const s = await e.markerProvenance.get(t);
					s && await e.markerProvenance.put({
						fileId: t,
						rows: s.rows.filter((e) => !a.has(e.id))
					}), n.some((e) => "auto_score" === e.username || l({
						...e,
						id: e.id
					}).nonwearDecided) && await Be([t], e, r);
				}(t, a, [p], r);
				const f = {
					fileId: a,
					date: s,
					username: o,
					previous: g,
					committed: null,
					changed: null !== at(g)
				};
				return await ot(f, n), f;
			}, r);
			if (u) throw new ze();
			if (null !== p.previous && "auto_score" !== o) {
				const { scheduleGgirRecompute: e } = await import("./local-export-shard-worker-BTR6svpv.js").then((e) => e.a);
				e(a, o, t, r);
			}
			return p;
		}({
			...e,
			expected: s.expected
		}, t, r, s.signal ?? e.signal);
		return {
			record: o.committed,
			changed: o.changed
		};
	});
}
function ut(e, t, n) {
	return et(ct(t, {
		fileId: e.fileId,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm ?? null,
		detectionRule: e.detectionRule ?? null
	}), async () => {
		null !== n && await $.settleWrites();
		const r = await pt(e, t, n);
		return {
			record: r.committed,
			changed: r.changed
		};
	});
}
async function pt(e, t, n) {
	const { fileId: r, date: a, username: o, sleepMarkers: d, nonwearMarkers: u, isInvalidNight: p, isInvalidNightImplicit: g, notes: f, explicitNoNonwear: m, needsConsensus: h, algorithm: w = null, scoringContext: k, detectionRule: v = null, periodGuider: I = null, sleepPeriodDetectionConfig: y = null, algorithmVersion: N = null } = e, M = null !== w ? await i.waitFor(async function(e) {
		let t;
		if (e.extraParams) try {
			t = JSON.parse(e.extraParams);
		} catch {
			t = e.extraParams;
		}
		const n = lt({
			algorithm: e.algorithm,
			detector: e.detector,
			guider: e.guider,
			sleep_period_detection_config: e.sleepPeriodDetectionConfig,
			scorer_version: e.scorerVersion,
			extra_params: t
		});
		return x(Me(n));
	}({
		algorithm: w,
		detector: v,
		guider: I,
		sleepPeriodDetectionConfig: y,
		scorerVersion: N
	})) : null, _ = k ?? (null !== w && null !== M ? {
		appVersion: "local",
		algorithmVersions: { [w]: N ?? "1" },
		paramsHash: M,
		stampedAt: (/* @__PURE__ */ new Date()).toISOString()
	} : void 0), b = null !== w && null !== M ? await i.waitFor(x(Me(lt({
		fileId: r,
		date: a,
		username: o,
		algorithm: w,
		scorerVersion: N,
		detector: v,
		guider: I,
		sleepPeriodDetection: y,
		params: null,
		parameterSetHash: M
	})))) : null, T = ve(w), R = Ie(v), A = e.restoredFromBackup;
	let D = !1;
	const P = await it(t, async (k) => {
		const x = await t.files.get(r);
		if (void 0 === x) throw new Ge();
		const P = await Se({
			fileId: r,
			date: a,
			username: o
		}, w, v, t), E = P?.algorithm === T && P.detectionRule === R ? P : void 0, j = P ? Ne(P) : void 0;
		if (A && E && E.lastModifiedAt >= A.lastModifiedAt) return {
			fileId: r,
			date: a,
			username: o,
			previous: j ?? null,
			committed: Ne(E),
			changed: !1
		};
		if (void 0 !== e.expected) {
			if (!Xe(j, e.expected)) return P?.id && await Ce(P.id, t, P), D = !0, {
				fileId: r,
				date: a,
				username: o,
				previous: j ?? null,
				committed: j ?? null,
				changed: !1
			};
			if (!0 !== e.guardHashOnly && j?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
		}
		const O = A ? E : j, $ = u ?? O?.nonwearMarkers ?? [], H = p ?? O?.isInvalidNight ?? !1, F = void 0 === A && C(x, j ?? { sleepMarkers: [] }, { sleepMarkers: d }), W = H || F, V = m ?? O?.explicitNoNonwear ?? !1, K = h ?? O?.needsConsensus ?? !1, U = 0 === d.length || 0 === $.length ? null : (await i.waitFor(he([{
			sleepMarkers: d,
			nonwearMarkers: $,
			isInvalidNight: W
		}])))[0] ?? null, J = U ? we(d, U) : d, q = W || (U?.invalidates ?? !1), B = q && !U?.invalidates && (H ? void 0 === p ? !0 === O?.isInvalidNightImplicit : !0 === g : F);
		if (q && J.some((e) => e.markerType === c.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
		const G = await i.waitFor(S({
			sleepMarkers: J,
			nonwearMarkers: $,
			isInvalidNight: q,
			explicitNoNonwear: V,
			notes: f
		})), z = null !== w ? await async function(e, t, n) {
			const { fileId: r, date: a, username: o, algorithm: i } = t, l = e.table("scoringSessions"), c = await l.where("[fileId+date+username+algorithm]").equals([
				r,
				a,
				o,
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
			const d = s(), u = (/* @__PURE__ */ new Date()).toISOString();
			return await l.add({
				sessionId: d,
				fileId: r,
				date: a,
				username: o,
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
			fileId: r,
			date: a,
			username: o,
			algorithm: w
		}, {
			scorerVersion: N,
			detector: v,
			guider: I,
			sleepPeriodDetectionConfig: y,
			params: null,
			parameterSetHash: M,
			contentHash: b
		}) : null, Y = {
			fileId: r,
			date: a,
			username: o,
			algorithm: T,
			detectionRule: R,
			periodGuider: I,
			sleepPeriodDetectionConfig: y,
			algorithmVersion: N,
			scoringSessionId: z,
			manualNonwearInSleep: !1,
			sleepMarkers: J,
			nonwearMarkers: $,
			isInvalidNight: q,
			...B ? { isInvalidNightImplicit: !0 } : {},
			explicitNoNonwear: V,
			needsConsensus: K,
			notes: f,
			contentHash: G,
			syncStatus: "pending",
			lastModifiedAt: A?.lastModifiedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
			...void 0 !== _ ? { scoringContext: _ } : {},
			...void 0 !== A ? { restoredFromBackup: A.restoreId } : {}
		}, X = {
			fileId: r,
			date: a,
			username: o,
			previous: j ?? null,
			committed: Y,
			changed: at(j) !== at(Y)
		};
		await ot(X, n);
		const Q = A ? E : P, Z = Q && Q !== E ? {
			algorithm: Q.algorithm,
			detectionRule: Q.detectionRule
		} : void 0;
		return await L({
			op: "markers_put",
			fileId: r,
			username: o,
			...void 0 !== A ? { restoredFromBackup: A.restoreId } : {},
			payload: {
				...Y,
				prevContentHash: E?.contentHash,
				...Z ? { replacedKey: Z } : {}
			}
		}), await async function(e, t, { existing: n, replacement: r }, a) {
			const { fileId: s } = t;
			let o;
			n && JSON.stringify(n.sleepMarkers) === JSON.stringify(t.sleepMarkers) || await e.actiwareFileData.where("fileId").equals(s).modify({ actiwareStatisticsNeedsRecompute: !0 }), r?.id ? (o = r.id, await e.markers.update(o, (e) => {
				Object.assign(e, t), void 0 === t.isInvalidNightImplicit && delete e.isInvalidNightImplicit, void 0 === t.restoredFromBackup && delete e.restoredFromBackup;
			})) : o = await e.markers.add(t);
			const i = await e.markerProvenance.get(s), c = l({
				...t,
				id: o
			}), d = i?.rows.find((e) => e.id === o);
			return ("auto_score" === c.username || c.nonwearDecided !== (d?.nonwearDecided ?? !1) || c.nonwearDecided && c.nonwearSpans !== d?.nonwearSpans) && await Be([s], e, a), await e.markerProvenance.put({
				fileId: s,
				rows: [...(i?.rows ?? []).filter((e) => e.id !== o), c]
			}), o;
		}(t, Y, {
			existing: E,
			replacement: Q
		}, e.signal), X;
	}, e.signal);
	if (D) throw new ze();
	return P;
}
async function gt(e, t, n) {
	return { changed: (await dt(e, t, () => Promise.resolve({
		kind: "unscore",
		expected: e.expected
	}), n)).changed };
}
function ft(e, t, n) {
	return Te(e, { periodMetrics: t }, n);
}
const mt = Symbol("marker-id");
function ht(e) {
	const t = e;
	return t[mt] ??= s();
}
function wt(e, t, n = !1) {
	return {
		...t ?? structuredClone(e),
		[mt]: n ? s() : ht(e)
	};
}
function kt(e, t) {
	const n = (e) => H(Object.fromEntries(Object.entries(e).filter(([e]) => "markerIndex" !== e))), r = /* @__PURE__ */ new Map();
	for (const s of e) {
		const e = n(s), t = r.get(e) ?? [];
		t.push(s), r.set(e, t);
	}
	const a = /* @__PURE__ */ new Map();
	return t.map((e) => {
		const t = n(e), o = a.get(t) ?? 0;
		return a.set(t, o + 1), void 0 !== e[mt] ? e : {
			...e,
			[mt]: r.get(t)?.[o]?.[mt] ?? s()
		};
	});
}
function vt(e, t) {
	return {
		...t,
		...void 0 !== t.sleepMarkers && t.sleepMarkers !== e.sleepMarkers ? { sleepMarkers: kt(e.sleepMarkers, t.sleepMarkers) } : {},
		...void 0 !== t.nonwearMarkers && t.nonwearMarkers !== e.nonwearMarkers ? { nonwearMarkers: kt(e.nonwearMarkers, t.nonwearMarkers) } : {}
	};
}
function It() {
	const e = w();
	return e && v.getState().getWorkspace(e), function(e) {
		try {
			return localStorage.getItem(e);
		} catch {
			return null;
		}
	}("__e2eLocalMode"), "local";
}
let yt = null;
function Nt(e, t, n) {
	return !yt || yt.scope.workspaceId === n.workspaceId && yt.scope.actor === n.actor && yt.scope.studyId === n.studyId && yt.scope.sourceKey === n.sourceKey || (yt = null), null !== yt && yt.fileId === e && yt.date === t ? yt : null;
}
function Mt(e) {
	return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " ");
}
function xt(e, t) {
	return null !== e && Number.isFinite(e) ? function(e) {
		return e % 60 == 0;
	}(t) ? function(e) {
		const t = /* @__PURE__ */ new Date(1e3 * e);
		return `${String(t.getUTCHours()).padStart(2, "0")}:${String(t.getUTCMinutes()).padStart(2, "0")}`;
	}(e) : Mt(e).slice(11) : "--:--";
}
n("epoch_5s");
const St = Object.freeze({
	viewport: null,
	cursorTimestamp: null,
	cursorOwner: null,
	selection: null,
	renderScene: null,
	epochSeconds: null
}), _t = h(() => ({ scenes: {} }));
var bt = e({
	bindShown: () => nn,
	buildNightData: () => jt,
	ensureOpened: () => on,
	fileSessionsSettled: () => kn,
	flushCurrentNight: () => dn,
	flushSession: () => un,
	isHeldOutbox: () => Et,
	leavesNightUnscored: () => Ot,
	newNightContext: () => At,
	nightMarkerStepSeconds: () => fn,
	nightSessions: () => gn,
	nightShown: () => Ht,
	nightTokenBrand: () => Tt,
	outboxKey: () => en,
	sameNight: () => tn,
	sessionToken: () => an,
	setNightScopeChanging: () => Pt,
	withoutUntouchedProposal: () => $t
});
const Tt = Symbol("night-session"), Ct = Object.keys({
	markerHistory: !0,
	markerHistoryIndex: !0,
	selectedPeriodIndex: !0,
	selectedActiwareRest: !0,
	actiwareRestPreview: !0,
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
});
function Rt(e) {
	return Object.fromEntries(Ct.map((t) => [t, e[t]]));
}
function At(e, t = e.getState()) {
	return {
		...t,
		...Rt(e.getInitialState()),
		...Qt(),
		isDirty: !1,
		isSaving: !1,
		saveError: null,
		nightLoading: !0
	};
}
let Dt = 0;
function Pt(e) {
	Dt += e ? 1 : -1;
}
function Et(e) {
	return Bt === e.key;
}
function jt(e) {
	return {
		sleepMarkers: e.sleepMarkers.map((e) => wt(e, {
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
		nonwearMarkers: e.nonwearMarkers.map((e) => wt(e, {
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
function Ot(e, t, n, r) {
	return !(!e || e.fileId !== t || e.date !== n || r.isInvalidNight || r.explicitNoNonwear || r.needsConsensus || r.notes || (r.nonwearMarkers?.length ?? 0) > 0 || 0 !== $t(e, t, n, r).sleepMarkers.length);
}
function $t(e, t, n, r) {
	return o(e, t, n, r.sleepMarkers) ? {
		...r,
		sleepMarkers: e?.authoredSleepMarkers ?? []
	} : r;
}
function Ht(e, t) {
	const n = t.availableDates[t.currentDateIndex];
	if (null === t.currentFileId || !n) return !1;
	const r = function(e) {
		const { username: t, selectedStudyId: n } = e;
		return {
			sourceKey: It(),
			workspaceId: w(),
			actor: t || "anonymous",
			studyId: n
		};
	}(t), a = t.nightLoading ? null : Nt(t.currentFileId, n, r);
	return tn(e, {
		...e,
		scope: r,
		db: "local" === r.sourceKey && k() ? I() : null,
		fileId: t.currentFileId,
		date: n,
		algorithm: a ? a.algorithm : e.algorithm,
		detectionRule: a ? a.detectionRule : e.detectionRule
	});
}
function Ft(e, t, n) {
	return {
		binding: e.db ? $.captureWorkspaceBinding(e.db, {
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
function Lt(e, t = e.proposalNight ?? e.acceptingProposal) {
	return $t(t, e.currentFileId ?? -1, e.availableDates[e.currentDateIndex] ?? "", jt(e));
}
function Wt(e, t, n) {
	const r = n.proposalNight ?? (n.acceptingProposal !== t ? n.acceptingProposal : null), a = Lt(n, r);
	return void 0 !== e.dataSource?.unscoreNight && Ot(r, e.fileId, e.date, a) ? { kind: "unscore" } : {
		kind: "save",
		data: a
	};
}
async function Vt(e, t, n, r) {
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
					expected: s?.expected ?? Ye(n),
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
			for (const r of t?.carried ?? []) rt(null, e, r);
			for (const r of t?.events?.(e.committed) ?? []) rt(null, e, r);
			const n = st(e, t);
			n && rt(null, e, n);
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
const Kt = 3, Ut = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new WeakMap();
let qt = 0, Bt = null, Gt = 0;
const zt = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakSet(), Xt = /* @__PURE__ */ new WeakMap(), Qt = () => ({
	sleepMarkers: [],
	nonwearMarkers: [],
	isInvalidNight: !1,
	explicitNoNonwear: !1,
	needsConsensus: !1,
	notes: ""
});
function Zt(e) {
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
function en(e) {
	return e.db && !Jt.has(e.db) && Jt.set(e.db, qt += 1), JSON.stringify([
		e.db ? Jt.get(e.db) : 0,
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
function tn(e, t) {
	return null !== e && null !== t && en(e) === en(t);
}
function nn(e) {
	if (r(e.currentFileSourceType)) return null;
	return null;
}
function rn(e) {
	const t = nn(e);
	return t ? Ut.get(en(t)) ?? null : null;
}
function an(e, t, n = e.binding) {
	const r = {
		[Tt]: !0,
		generation: e.generation,
		fileId: n.fileId,
		date: n.date,
		identity: n,
		context: t
	};
	return zt.set(r, e), Bt === e.key && Gt === e.generation && Ht(n, e.store.getState()) && !e.store.getState().nightLoading && Yt.add(r), r;
}
function sn(e, t) {
	if (void 0 !== t && (e.context = vt(e.context, {
		...e.context,
		lastSavedAt: Date.now(),
		saveReceipt: {
			fileId: e.binding.fileId,
			date: e.binding.date,
			text: t
		}
	})), rn(e.store.getState()) !== e) return;
	const n = e.log[0]?.failure;
	e.store.setState({
		isDirty: e.log.some((e) => null !== e.failure || null != e.prepared?.mutation) || e.drags.size > 0,
		isSaving: null !== e.runner && !n,
		saveError: n?.message ?? null,
		canDiscardNightChanges: n instanceof ze || n instanceof Ge,
		placementRejected: e.context.placementRejected,
		placementRejectionReason: e.context.placementRejectionReason,
		lastSavedAt: e.context.lastSavedAt,
		saveReceipt: e.context.saveReceipt
	});
}
async function on(e, t = e.binding) {
	var n;
	e.opened || (await (n = {
		fileId: t.fileId,
		date: t.date,
		actor: t.scope.actor,
		store: tt(t.db, t.scope),
		algorithm: t.algorithm,
		detectionRule: t.detectionRule
	}, et(n, () => Promise.resolve())), function(e, t) {
		const n = e.context, r = t ? Zt(t) : Qt(), a = Ye(t), s = void 0 !== e.saved && JSON.stringify(Ye(e.saved)) === JSON.stringify(a) && (null !== a.contentHash || H(e.saved ? Zt(e.saved) : null) === H(t ? r : null));
		void 0 === e.saved || s || (e.context = vt(n, At(e.store, n))), e.saved = t, e.view = vt(n, {
			...r,
			...s ? {
				sleepMarkers: n.sleepMarkers,
				nonwearMarkers: n.nonwearMarkers
			} : {}
		});
		const i = e.context, l = !r.isInvalidNight && H(r.sleepMarkers) === H(i.proposalNight?.authoredSleepMarkers ?? []) && o(i.proposalNight, e.binding.fileId, e.binding.date, i.sleepMarkers);
		e.context = vt(i, {
			...i,
			...e.view,
			sleepMarkers: l ? i.sleepMarkers : e.view.sleepMarkers,
			proposalNight: l ? i.proposalNight : null
		}), e.opened = !0;
	}(e, await t.dataSource.loadMarkers(t.fileId, t.date, t.scope.actor, t.algorithm, t.detectionRule, t.db ?? void 0)), function(e, t) {
		if (!Et(e) || !e.shownOpen?.()) return;
		if (!e.opened) return void sn(e);
		const n = e.store, r = n.getState(), a = an(e, r, t);
		if (e.identify?.(), s = {
			scope: t.scope,
			db: t.db,
			fileId: t.fileId,
			date: t.date,
			algorithm: t.algorithm,
			detectionRule: t.detectionRule,
			options: t.settings
		}, yt = s, !gn.owns(a, r)) return;
		var s;
		const o = e.view, i = e.context;
		r.showStoredNight(a, t.fileId, t.date, {
			...o,
			sleepMarkers: i.sleepMarkers,
			view: Rt(i)
		}), e.context = vt(e.context, n.getState()), sn(e);
	}(e, t));
}
function ln(e, t, n = e.binding) {
	if (void 0 === e.saved) throw new Error("The night has not opened; no write has a baseline.");
	const r = Ye(e.saved);
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
function cn(e) {
	if (e.runner || e.recovering || !e.log.length || e.log[0].failure) return;
	let t;
	e.runner = new Promise((e) => {
		t = e;
	}), (async () => {
		for (; e.log.length && !e.log[0].failure;) {
			const t = e.log[0], r = an(e, t.token.context, t.token.identity);
			Xt.set(r, {
				slot: t,
				run: (e) => e()
			}), sn(e);
			try {
				if (t.prepared ??= await t.prepare(r), t.failure) throw t.prepared = null, t.failure;
				Xt.delete(r);
				const n = t.prepared;
				let a;
				if (n.refusal) a = {
					status: "dropped",
					reason: n.refusal
				};
				else if (n.mutation) {
					if (!t.audit) throw new Error("An internal read cannot write a night.");
					const r = [...n.carried];
					a = await Vt(t.token.identity, ln(e, n.mutation, t.token.identity), {
						...t.audit,
						carried: r
					}, r);
				} else a = {
					status: "committed",
					night: e.saved ?? null
				};
				const s = e.saved ?? null;
				"committed" === a.status && n.mutation && (e.saved = a.night, n.accepting && (e.context = vt(e.context, {
					...e.context,
					acceptingProposal: null
				}), e.store.getState().settleProposalAcceptance(n.accepting, !0))), e.log.shift(), "committed" !== a.status || !gn.holds(t.token, e.store.getState()) && Yt.has(t.token) || t.options.onCommitted?.(a.night), t.settle(a), sn(e, "committed" === a.status && n.mutation && a.night ? wn(s, a.night, {
					date: e.binding.date,
					undone: n.undone,
					stepSec: t.step
				}) : void 0);
			} catch (n) {
				Xt.delete(r), t.failure = n instanceof Error ? n : new Error(String(n)), t.prepared?.mutation || (t.prepared = null), t.settle({
					status: "dropped",
					reason: `${t.failure.message} Return to the Sleep page and use Retry.`
				}), t.failure instanceof ze || t.failure instanceof Ge || !(t.retries < Kt) || (t.retries += 1, t.retryTimer = setTimeout(() => {
					t.retryTimer = null, t.failure = null, cn(e);
				}, 2 ** t.retries * 1e3)), sn(e);
			}
		}
		e.runner = null, sn(e), t();
	})();
}
async function dn(e) {
	const t = rn(e.getState());
	return !t || un(t);
}
async function un(e) {
	return cn(e), await pn(e), 0 === e.log.length;
}
async function pn(e) {
	for (; e.runner;) await e.runner;
}
const gn = {
	executor: (e) => Xt.get(e)?.run ?? null,
	fail: (e, t) => {
		const n = Xt.get(e)?.slot;
		n && (n.failure = t instanceof Error ? t : new Error(String(t)));
	},
	holds: (e, t = zt.get(e)?.store.getState() ?? e.context) => !t.nightLoading && gn.owns(e, t),
	owns: (e, t = zt.get(e)?.store.getState() ?? e.context) => {
		const n = zt.get(e);
		return void 0 !== n && n.opened && Bt === n.key && Gt === e.generation && n.generation === e.generation && Ht(n.binding, t);
	},
	night: (e) => zt.get(e)?.view ?? null,
	context: (e) => zt.get(e)?.context ?? e.context,
	updateContext: (e, t) => {
		const n = zt.get(e);
		n && (n.context = vt(n.context ?? t, t));
	},
	write: (e, t, n, r) => {
		const a = zt.get(e), s = Xt.get(e);
		if (!a || !s) throw new Error("A night write requires its proposal's executor.");
		a.view = vt(a.context ?? e.context, t), r && (a.context = vt(a.context ?? r, {
			...r,
			...a.view
		})), s.slot.carried.push(...n);
	},
	enqueue: (e, t, n = !1, r) => {
		const a = zt.get(e);
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
				audit: r.readOnly ? null : Ft(t.identity, r.acts, o),
				baseline: null,
				prepared: null,
				failure: null,
				carried: o,
				retries: 0,
				retryTimer: null,
				step: fn(t)
			}, l = e.log.length > 1 ? e.log[e.log.length - 1] : void 0;
			return r.noteEdit && l?.options.noteEdit && null === l.prepared && null === l.failure && (e.log.pop(), s.then(l.settle)), e.log.push(i), cn(e), sn(e), i;
		}(a, e, async (r) => {
			await on(a, e.identity);
			const i = gn.context(r);
			Xt.get(r).slot.baseline ??= Zt(Lt(i));
			const l = i._editGeneration;
			return o = await t(r), n || gn.context(r)._editGeneration === l ? {
				mutation: null,
				accepting: null,
				carried: [],
				undone: !1
			} : function(e, t, n = e.store) {
				const r = gn.holds(t, n.getState()), a = r ? n.getState() : e.context, s = r ? a.acceptingProposal : null;
				return {
					mutation: r ? Wt(t.identity, s, a) : {
						kind: "save",
						data: e.view
					},
					accepting: s,
					carried: r ? n.takeShownEdits(t.identity) : Xt.get(t).slot.carried,
					undone: a.markerHistoryIndex < a.markerHistory.length - 1
				};
			}(a, r, s);
		}).settled.then((e) => ("dropped" !== e.status || "boolean" != typeof o) && o);
	},
	waiting: (e) => e ? (zt.get(e)?.log.length ?? 0) > 0 : [...Ut.values()].some((e) => e.log.length > 0),
	setDragging: (e, t) => {
		const n = zt.get(e);
		t ? n?.drags.add(e) : n?.drags.delete(e);
	},
	scopeChanging: () => Dt > 0,
	hasUnsavedWork: () => [...Ut.values()].some((e) => e.log.length > 0 || e.drags.size > 0),
	settled: async () => {
		await Promise.all([...Ut.values()].map(pn));
	}
};
function fn(e) {
	const n = zt.get(e)?.key ?? null;
	return function(e, n) {
		const r = n.availableFiles.find((e) => e.id === n.currentFileId)?.countEpochSeconds;
		return e.epochSeconds ?? t(E(n), r);
	}((r = null === n ? null : function(e, t, n, r) {
		return !e || !Number.isInteger(t) || (t ?? 0) <= 0 || !n ? null : `${r ?? e}\0${String(t)}\0${n}`;
	}(n, e.fileId, e.date, n), null == r ? St : _t.getState().scenes[r] ?? St), e.context);
	var r;
}
function mn(e) {
	return [...e.sleepMarkers.map((e) => ({
		start: e.onsetTimestamp,
		end: e.offsetTimestamp,
		label: e.markerType === c.NAP ? "nap" : "main sleep",
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
function hn(e, t, n) {
	if (t === n || null === t || null === n) return null;
	const r = Math.abs(n - t);
	return `moved ${e} ${r >= 60 ? `${String(Math.round(r / 60))} min` : `${String(r)} s`} ${n < t ? "earlier" : "later"}`;
}
function wn(e, t, { date: n, undone: r, stepSec: a }) {
	const s = (e) => xt(e, a), o = e ? mn(e) : [], i = mn(t), l = (e, t) => e.label === t.label && e.start === t.start && e.end === t.end, c = o.filter((e) => !i.some((t) => l(t, e))), d = i.filter((e) => !o.some((t) => l(e, t))), u = [];
	for (const g of c) {
		const e = d.findIndex((e) => e.label === g.label);
		if (-1 === e) {
			u.push(`deleted ${g.label} ${s(g.start)}–${s(g.end)}`);
			continue;
		}
		const [t] = d.splice(e, 1);
		if (!t) continue;
		const n = [hn(g.startName, g.start, t.start), hn(g.endName, g.end, t.end)].filter((e) => null !== e);
		u.push(n.length > 0 ? n.join(" and ") : `changed ${g.label}`);
	}
	for (const g of d) u.push(`${r ? "restored" : "saved"} ${g.label} ${s(g.start)}–${s(g.end)}`);
	(e?.isInvalidNight ?? !1) !== t.isInvalidNight && u.push(t.isInvalidNight ? "marked invalid night" : "cleared invalid night"), (e?.explicitNoNonwear ?? !1) !== (t.explicitNoNonwear ?? !1) && u.push(t.explicitNoNonwear ? "confirmed no nonwear" : "cleared no-nonwear"), (e?.needsConsensus ?? !1) !== t.needsConsensus && u.push(t.needsConsensus ? "flagged for consensus" : "unflagged for consensus"), (e?.notes ?? "") !== t.notes && u.push("saved note");
	const p = u.length > 0 ? u.join("; ") : "nothing changed";
	return r ? `Undid — ${p} on ${n}` : `${p.charAt(0).toUpperCase()}${p.slice(1)} on ${n}`;
}
async function kn(e, t, n) {
	await Promise.all([...Ut.values()].filter((r) => r.binding.db === e && r.binding.fileId === t && (!n || r.binding.date === n.date && r.binding.scope.actor === n.username)).map(pn));
}
export { Re as A, B, Ke as C, $e as D, Ae as E, ke as F, K as H, he as I, we as L, _e as M, xe as N, Le as O, Ne as P, oe as R, Ve as S, je as T, W as U, q as V, nt as _, fn as a, dt as b, tn as c, Mt as d, wt as f, Ye as g, ft as h, Ot as i, De as j, He as k, $t as l, vt as m, kn as n, gn as o, ht as p, dn as r, bt as s, nn as t, xt as u, ut as v, We as w, Be as x, gt as y, fe as z };
