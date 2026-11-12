import { Pn as e, fn as t, g as n, in as r, jn as a, k as s, m as o, pn as i, v as l, w as c } from "./schema-BhIoHe9M.js";
import { r as d } from "./workers-DmTzGLlL.js";
import { c as u, r as p, u as g } from "./legacy-invalid-night-zjKZRSNb.js";
import { J as f, K as m, W as h, Z as w, a as k, n as v, o as I, q as y, t as N } from "./workspace-db-B23VU-DP.js";
import { a as M, o as S } from "./content-hash-D4_ZE65l.js";
import { a as x, i as _ } from "./project-revision-BjsdF3mV.js";
import { F as b, J as T, K as C, L as R, V as A, Y as D, j as P, q as E, s as j } from "./per-source-defaults-aJZ8Uk6V.js";
import { t as O } from "./audit-log-D2qIxr9k.js";
import { t as $ } from "./audit-hash-B_VayGEe.js";
import { i as H, t as F } from "./wal-BnGcVSmY.js";
const L = "auto_score";
function W(e, t) {
	return {
		sleepPeriodDetectionConfig: b(e),
		sleepPeriodDetectionSummary: t ?? P(e)
	};
}
function V(e) {
	return {
		algorithm: e.algorithm,
		...W(e.sleepPeriodDetection, e.sleepPeriodDetectionSummary),
		sleepCount: e.sleepCount,
		napCount: e.napCount,
		markers: e.markers
	};
}
function J(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function K(e) {
	return {
		...e,
		edited: !0
	};
}
function U(e, t, n, r) {
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
	const [i, l] = T(a.markerType), c = K({
		...a,
		offsetTimestamp: r,
		markerType: i
	}), d = K({
		...a,
		onsetTimestamp: n,
		markerType: l
	}), u = [...e];
	return u.splice(t, 1, c, d), {
		ok: !0,
		markers: J(u),
		newIndex: t + 1
	};
}
function q(e, t, n) {
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
	const u = Math.min(i, c), p = Math.max(l, d), g = C(a, o), f = Math.min(t, s), m = K({
		...g !== r.MAIN_SLEEP || A(a) ? a : o,
		onsetTimestamp: u,
		offsetTimestamp: p,
		markerType: g
	}), h = e.filter((e, n) => n !== t && n !== s);
	return h.splice(f, 0, m), {
		ok: !0,
		markers: J(h),
		mergedIndex: f
	};
}
function B(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function G(e) {
	return "boolean" == typeof e ? e : null;
}
function z(e) {
	return "string" == typeof e ? e : null;
}
function Y(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function X(e, t) {
	return !(e.length > 0) && t;
}
function Z(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
function Q(e) {
	const t = function(e) {
		return Array.isArray(e) ? e : null;
	}(e);
	return null === t ? null : t.every(Z) ? t : null;
}
function ee(e) {
	const t = Q(e);
	return null === t ? null : t;
}
function te(e) {
	const t = Q(e);
	return null === t ? null : t;
}
function ne(e) {
	return e.filter((e) => e.markerType === r.MAIN_SLEEP).length;
}
function re(e) {
	return e.every((e, t) => e.markerIndex === t + 1);
}
const ae = {
	main_sleep_on_invalid_night: ({ after: e }) => e.isInvalidNight && ne(e.sleepMarkers) > 0,
	multiple_main_sleep: ({ after: e }) => ne(e.sleepMarkers) > 1,
	first_marker_not_main_sleep: ({ after: e }) => !e.isInvalidNight && e.sleepMarkers.length > 0 && 0 === ne(e.sleepMarkers),
	marker_index_noncontiguous: ({ after: e }) => !re(e.sleepMarkers) || !re(e.nonwearMarkers),
	boundaries_disordered: ({ after: e }) => e.sleepMarkers.some((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && e.onsetTimestamp >= e.offsetTimestamp) || e.nonwearMarkers.some((e) => null != e.startTimestamp && null != e.endTimestamp && e.startTimestamp >= e.endTimestamp),
	nonwear_flag_with_markers: ({ after: e }) => e.explicitNoNonwear && e.nonwearMarkers.length > 0,
	manual_nonwear_in_sleep: ({ payload: e }) => !0 === e.manualNonwearInSleep,
	marker_limit_exceeded: ({ after: e }) => e.sleepMarkers.length > D.MAX_SLEEP_PERIODS_PER_DAY || e.nonwearMarkers.length > D.MAX_NONWEAR_PERIODS_PER_DAY,
	split_not_strictly_inside: ({ before: e, payload: t }) => {
		const n = B(t.periodIndex), r = B(t.at);
		return null !== n && null !== r && !U(e.sleepMarkers, n, r, B(t.firstOffset) ?? r).ok;
	},
	merge_no_neighbor: ({ before: e, payload: t }) => {
		const n = B(t.periodIndex), r = z(t.direction);
		return null !== n && ("prev" === r || "next" === r) && !q(e.sleepMarkers, n, r).ok;
	},
	mutation_on_read_only_view: ({ context: e }) => !0 === e.readOnlyView,
	undo_beyond_history: ({ context: e }) => void 0 !== e.undoDepth && e.undoDepth <= 0,
	redo_beyond_history: ({ context: e }) => void 0 !== e.redoDepth && e.redoDepth <= 0
};
function se(e, t) {
	const n = u[e]?.guards ?? [], r = [];
	for (const a of n) {
		const e = ae[a], n = g[a];
		e && n && e(t) && r.push({
			guard: a,
			severity: n.severity
		});
	}
	return r;
}
function oe(e, t) {
	const { isInvalidNightImplicit: n, ...r } = e, a = G(t.isInvalidNight) ?? e.isInvalidNight;
	return {
		...r,
		isInvalidNight: a,
		...a && !0 === G(t.isInvalidNightImplicit) ? { isInvalidNightImplicit: !0 } : {}
	};
}
function ie(e, t) {
	const n = t.stateAfter;
	if (null === n || "object" != typeof n) return {
		state: e,
		reconstructed: !1
	};
	const r = n, a = ee(r.sleepMarkers), s = te(r.nonwearMarkers);
	return null === a || null === s ? {
		state: e,
		reconstructed: !1
	} : { state: {
		...oe(e, r),
		sleepMarkers: a,
		nonwearMarkers: s,
		explicitNoNonwear: G(r.explicitNoNonwear) ?? e.explicitNoNonwear,
		needsConsensus: G(r.needsConsensus) ?? e.needsConsensus,
		notes: z(r.notes) ?? e.notes
	} };
}
const le = {
	marker_placed: (e, t) => {
		if ("nonwear" === z(t.category)) {
			const n = B(t.startTimestamp), r = B(t.endTimestamp);
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
		const n = B(t.onsetTimestamp), r = B(t.offsetTimestamp);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = z(t.markerType) ?? E(e.sleepMarkers, e), s = [...e.sleepMarkers, {
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
		const r = n, a = ee(r.sleepMarkers), s = te(r.nonwearMarkers);
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
		const n = B(t.periodIndex), r = t.updates;
		if (null === n || null === r || "object" != typeof r) return {
			state: e,
			reconstructed: !1
		};
		const a = r;
		if ("nonwear" === z(t.category)) {
			const t = e.nonwearMarkers.map((e, t) => t === n ? {
				...e,
				...a
			} : e);
			return { state: {
				...e,
				nonwearMarkers: t,
				explicitNoNonwear: X(t, e.explicitNoNonwear)
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
		const n = B(t.periodIndex);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : "nonwear" === z(t.category) ? { state: {
			...e,
			nonwearMarkers: Y(e.nonwearMarkers.filter((e, t) => t !== n))
		} } : { state: {
			...e,
			sleepMarkers: Y(e.sleepMarkers.filter((e, t) => t !== n))
		} };
	},
	markers_cleared: (e) => ({ state: {
		...e,
		sleepMarkers: [],
		nonwearMarkers: []
	} }),
	sleep_period_split: (e, t) => {
		const n = B(t.periodIndex), r = B(t.at);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = U(e.sleepMarkers, n, r, B(t.firstOffset) ?? r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	sleep_period_merged: (e, t) => {
		const n = B(t.periodIndex), r = z(t.direction);
		if (null === n || "prev" !== r && "next" !== r) return {
			state: e,
			reconstructed: !1
		};
		const a = q(e.sleepMarkers, n, r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	session_start: (e, t) => {
		const n = ee(t.sleepMarkers), r = te(t.nonwearMarkers);
		return null === n || null === r ? {
			state: e,
			reconstructed: !1
		} : {
			state: {
				...oe(e, t),
				sleepMarkers: n,
				nonwearMarkers: r,
				explicitNoNonwear: G(t.explicitNoNonwear) ?? e.explicitNoNonwear,
				needsConsensus: G(t.needsConsensus) ?? e.needsConsensus,
				notes: z(t.notes) ?? e.notes
			},
			reconstructed: void 0 !== t.notes
		};
	},
	markers_saved: (e, t, n) => {
		const r = B(t.sleepCount), a = B(t.nonwearCount);
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
	undo: ie,
	redo: ie,
	auto_score_applied: (e, t) => {
		const n = ee(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: n
		} };
	},
	auto_nonwear_applied: (e, t) => {
		const n = te(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			nonwearMarkers: n,
			explicitNoNonwear: X(n, e.explicitNoNonwear)
		} };
	},
	consensus_toggled: (e, t) => {
		const n = G(t.value);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			needsConsensus: n
		} };
	},
	invalid_night_toggled: (e, t) => {
		const n = G(t.value);
		if (null === n) return {
			state: e,
			reconstructed: !1
		};
		const { isInvalidNightImplicit: a, ...s } = e;
		if (!n) return { state: {
			...s,
			isInvalidNight: !1
		} };
		const o = Y(e.sleepMarkers.filter((e) => e.markerType !== r.MAIN_SLEEP)), i = !0 === G(t.implicit);
		return { state: {
			...s,
			isInvalidNight: !0,
			...i ? { isInvalidNightImplicit: !0 } : {},
			sleepMarkers: o
		} };
	},
	no_nonwear_toggled: (e, t) => {
		const n = G(t.value);
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
		const n = z(t.after);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			notes: n
		} };
	},
	candidate_copied: ie
};
function ce(e, t, n = {}) {
	const r = p(t), a = r.payload ?? {}, s = le[r.action], o = s ? s(e, a, r) : { state: e }, i = o.state;
	return {
		state: i,
		violations: se(r.action, {
			before: e,
			after: i,
			event: r,
			payload: a,
			context: n
		}),
		reconstructed: o.reconstructed ?? !0
	};
}
function de(e) {
	return "object" != typeof e || null === e ? null : "string" == typeof e.action ? p(e) : null;
}
function ue(e, t) {
	if ("markers_saved" !== e.action) return !1;
	const n = e.payload ?? {}, r = B(n.sleepCount), a = B(n.nonwearCount);
	return null !== r && null !== a && (r !== t.sleepMarkers.length || a !== t.nonwearMarkers.length);
}
function pe(e) {
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
		const e = de(a), s = e ? ce(n, e) : {
			state: n,
			violations: [],
			reconstructed: !1
		};
		n = s.state, null !== e && !0 === u[e.action]?.stateKeyframe && s.reconstructed ? r = "exact" : s.reconstructed || "exact" !== r || (r = "divergent"), "exact" === r && null !== e && ue(e, n) && (r = "divergent"), t.push({
			state: n,
			basis: r,
			violations: s.violations
		});
	}
	return t;
}
function ge(e) {
	const t = [
		`${String(e.sleepMarkers.length)} sleep`,
		`${String(e.nonwearMarkers.length)} nonwear`,
		`invalid-night:${String(e.isInvalidNight)}`
	];
	return e.explicitNoNonwear && t.push("no-nonwear"), e.needsConsensus && t.push("needs-consensus"), e.notes.length > 0 && t.push(`notes ${String(e.notes.length)}ch`), t.join(", ");
}
function fe(e) {
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
async function me(e, t = d()) {
	if (0 === e.length) return [];
	const n = await t.settleManualNonwearNights(e.map(fe));
	if (n.length !== e.length) throw new Error(`The manual-nonwear night rule answered ${String(n.length)} settle(s) for ${String(e.length)} night(s).`);
	return n;
}
function he(e, t) {
	return 0 === t.removed.length ? e : t.kept.map((t, n) => ({
		...e[t],
		markerIndex: n + 1
	}));
}
async function we(e, t) {
	const n = pe(e), r = e.flatMap((e, t) => {
		const r = e.payload, a = n[t]?.state;
		return "session_start" === e.action && null != r && "boolean" != typeof r.manualNonwearInSleep && void 0 !== a && Array.isArray(r.sleepMarkers) && Array.isArray(r.nonwearMarkers) && r.sleepMarkers.length === a.sleepMarkers.length && r.nonwearMarkers.length === a.nonwearMarkers.length ? [t] : [];
	});
	if (0 === r.length) return n;
	const a = await async function(e, t) {
		return (await me(e, t)).map((e) => e.removed.length > 0);
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
	}), pe(s);
}
function ke(e) {
	return null === e ? t : e;
}
function ve(e) {
	return null == e ? i : e;
}
function Ie(e) {
	return "__legacy_dr__" === e ? null : e;
}
function ye(e) {
	return {
		...e,
		algorithm: (t = e.algorithm, "__legacy__" === t ? null : t),
		detectionRule: Ie(e.detectionRule)
	};
	var t;
}
function Ne(e) {
	const t = (e) => Array.isArray(e) ? e.map(t) : e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, n]) => [e, t(n)])) : e;
	return JSON.stringify(t(e));
}
function Me(e, { date: t, username: n }, r, a) {
	const s = e.filter((e) => e.date === t && e.username === n);
	if (void 0 !== r) {
		const e = ke(r), t = ve(a), n = (e, t) => s.find((n) => n.algorithm === e && n.detectionRule === t);
		return n(e, t) ?? ("__legacy_dr__" !== t ? n(e, "__legacy_dr__") : void 0) ?? (null !== r ? n("__legacy__", "__legacy_dr__") : void 0);
	}
	return s.reduce((e, t) => !e || (t.id ?? 0) < (e.id ?? 0) ? t : e, void 0);
}
function Se(e, t, n, r) {
	return r.transaction("r", r.markers, async () => Me(await r.markers.where("[fileId+date+username]").equals([
		e.fileId,
		e.date,
		e.username
	]).toArray(), e, t, n));
}
async function xe(e, t, n, r, a, s = N()) {
	const o = await Se({
		fileId: e,
		date: t,
		username: n
	}, r, a, s);
	return o ? ye(o) : void 0;
}
const _e = [
	"manualNonwearInSleep",
	"periodMetrics",
	"syncStatus"
];
function be(e, t, n) {
	const r = Object.fromEntries(_e.filter((e) => e in t).map((e) => [e, t[e]]));
	return n.markers.update(e, r);
}
async function Te(e, t = N(), n, r) {
	const a = t;
	await _(a, [a.markers], async () => {
		if (n) {
			const t = await a.markers.get(e);
			if (!t || Ne(ye(t)) !== Ne(n)) return;
		}
		await be(e, { syncStatus: "conflict" }, a);
	}, r);
}
function Ce(e) {
	return `${y.SCORED_VARIANT_WARM}:${String(e)}`;
}
function Re(e = m.getState().jobs) {
	if (!v()) return null;
	const t = Object.values(e).reverse().find((e) => h(e) && e.workspaceId === N().name && e.kind === y.SCORED_VARIANT_WARM && e.status !== f.DONE && e.status !== f.CANCELLED);
	return t ? {
		fileId: Number(t.key.split(":").at(-1)),
		done: t.done,
		total: t.total,
		...t.status === f.FAILED ? { failed: !0 } : {}
	} : null;
}
function Ae(e, t) {
	if (!v() || t && N() !== t) return;
	const n = (t ?? N()).name, r = m.getState();
	if (!e) return;
	const a = Ce(e.fileId), s = `${n}:${a}`;
	r.jobs[s] && !e.failed || r.update(s, {
		id: s,
		workspaceId: n,
		key: a,
		kind: y.SCORED_VARIANT_WARM,
		label: "Scoring variants",
		controller: r.jobs[s]?.controller ?? new AbortController(),
		done: e.done,
		total: e.total,
		status: e.failed ? f.FAILED : f.RUNNING
	});
}
const De = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new WeakMap();
async function Ee(e, t) {
	const n = Pe.get(e) ?? {
		depth: 0,
		files: /* @__PURE__ */ new Set()
	};
	Pe.set(e, n), n.depth++;
	try {
		return await t();
	} finally {
		if (0 === --n.depth) {
			Pe.delete(e);
			for (const t of n.files) Oe(t, e, n.files);
		}
	}
}
const je = /* @__PURE__ */ new WeakMap();
function Oe(e, t, n) {
	const r = Pe.get(t);
	if (r) r.files.add(e);
	else for (const a of De) n && n.size > 1 ? a(e, t, void 0, n) : a(e, t);
}
function $e(e) {
	return De.add(e), () => De.delete(e);
}
const He = /* @__PURE__ */ new Set();
function Fe(e, t) {
	for (const n of He) n(e, t);
}
const Le = "scored-variant-warm-backfill-v1", We = `placement-results-backfill-v${String(2)}`, Ve = "placement-results-backfill-generation-v1", Je = /* @__PURE__ */ new Set();
function Ke(e, t, n) {
	const r = n ? je.get(n) : void 0;
	if (r?.db !== t) for (const a of Je) a([e], t);
	else r.files.add(e);
}
const Ue = /* @__PURE__ */ new WeakMap();
async function qe(e, t = N(), n) {
	let r = a.currentTransaction;
	for (; r?.parent;) r = r.parent;
	if (await x(t, [t.projectMeta], async () => {
		const e = await t.projectMeta.get(Ve);
		await t.projectMeta.put({
			key: Ve,
			revision: (e?.revision ?? 0) + 1
		}), await t.projectMeta.delete(We);
	}, n), !r || r.db !== t) {
		for (const r of new Set(e)) Ke(r, t, n);
		return;
	}
	let s = Ue.get(r);
	if (!s) {
		s = /* @__PURE__ */ new Set(), Ue.set(r, s);
		const e = s;
		r.idbtrans.addEventListener("complete", () => {
			for (const r of e) Ke(r, t, n);
		}, { once: !0 });
	}
	for (const a of e) s.add(a);
}
var Be = class extends Error {
	constructor() {
		super("The recording was deleted; this night was not saved."), this.name = "RecordingDeletedError";
	}
}, Ge = class extends Error {
	constructor() {
		super("Markers changed during rescore or in another tab. Retry keeps the night on screen; reopening the night shows the stored one."), this.name = "NightConflictError";
	}
};
function ze(e) {
	return {
		contentHash: e?.contentHash ?? null,
		needsConsensus: e?.needsConsensus ?? !1
	};
}
function Ye(e, t) {
	const n = ze(e);
	return n.contentHash === t.contentHash && n.needsConsensus === t.needsConsensus;
}
const Xe = (e, t) => JSON.stringify([e, t]), Ze = /* @__PURE__ */ new Map();
function Qe(e, t) {
	const n = ((e) => Xe(e.store, e.fileId) + JSON.stringify([
		e.actor,
		e.date,
		ke(e.algorithm),
		ve(e.detectionRule)
	]))(e);
	return function(e, t, n) {
		const r = e.length > 0 ? Promise.all(e).then(n) : n(), a = r.then(() => {}, () => {});
		for (const s of t) Ze.set(s, a), a.then(() => {
			Ze.get(s) === a && Ze.delete(s);
		});
		return r;
	}([Ze.get(n), Ze.get((r = e.store, a = e.fileId, `${Xe(r, a)}*`))].filter((e) => void 0 !== e), [n], t);
	var r, a;
}
function et(e, t) {
	return e?.name ?? `${t?.sourceKey ?? "server"}:${t?.workspaceId ?? ""}`;
}
function tt(e) {
	nt(e.binding, e, e);
}
function nt(e, t, n) {
	O.recordNightEdit(e, {
		fileId: t.fileId,
		analysisDate: t.date,
		action: n.action,
		...void 0 === n.payload ? {} : { payload: n.payload }
	});
}
function rt(e) {
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
const at = (e, t) => {
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
			...W(r.sleepPeriodDetection, r.sleepPeriodDetectionSummary)
		})
	};
	var r;
};
function st(e, t) {
	if (null === t) return a.Promise.resolve();
	const n = t.binding;
	if (!n) throw new Error("A local night write requires the audit binding captured at its act.");
	const r = (t) => ({
		fileId: e.fileId,
		analysisDate: e.date,
		action: t.action,
		...void 0 === t.payload ? {} : { payload: t.payload }
	}), s = at(e, t);
	return O.appendNightEditsInTransaction([
		...(t?.carried ?? []).map((e) => ({
			binding: e.binding ?? n,
			input: r(e)
		})),
		...(t?.events?.(e.committed) ?? []).map((e) => ({
			binding: n,
			input: r(e)
		})),
		...s ? [{
			binding: n,
			input: r(s)
		}] : []
	]).then(() => {});
}
function ot(e, t, n) {
	return H([
		e.markers,
		e.scoringSessions,
		e.markerProvenance,
		e.actiwareFileData,
		e.auditLog,
		e.files
	], t, e, n);
}
function it(e) {
	if (Array.isArray(e)) return e.map(it);
	if (e && "object" == typeof e) {
		const t = {};
		for (const [n, r] of Object.entries(e)) null != r && (t[n] = it(r));
		return t;
	}
	return e;
}
const lt = (e, t) => ({
	store: et(e),
	actor: t.username,
	fileId: t.fileId,
	date: t.date,
	algorithm: t.algorithm,
	detectionRule: t.detectionRule
});
function ct(e, t, r, a) {
	return Qe(lt(t, e), async () => {
		const s = await xe(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), o = await r(s ? ye(s) : null);
		if (!o) return null;
		null !== a && await O.settleWrites();
		const i = "save" === o.kind ? await ut(o.input, t, a) : await async function(e, t, r, a) {
			const { fileId: s, date: o, username: i, algorithm: l, detectionRule: c, expected: d } = e;
			let u = !1;
			const p = await ot(t, async () => {
				if (void 0 === await t.files.get(s)) throw new Be();
				const p = await Se(e, l, c, t);
				if (void 0 !== d && !Ye(p, d)) return p?.id && await Te(p.id, t, p), u = !0, {
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
					return await st(e, r), e;
				}
				const g = ye(p);
				await F({
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
				}), await async function(e, t, r, a) {
					const s = new Set(r.flatMap((e) => void 0 === e.id ? [] : [e.id]));
					await e.markers.bulkDelete([...s]);
					const o = await e.markerProvenance.get(t);
					o && await e.markerProvenance.put({
						fileId: t,
						rows: o.rows.filter((e) => !s.has(e.id))
					}), r.some((e) => "auto_score" === e.username || n({
						...e,
						id: e.id
					}).nonwearDecided) && await qe([t], e, a);
				}(t, s, [p], a);
				const f = {
					fileId: s,
					date: o,
					username: i,
					previous: g,
					committed: null,
					changed: null !== rt(g)
				};
				return await st(f, r), f;
			}, a);
			if (u) throw new Ge();
			if (null !== p.previous && "auto_score" !== i) {
				const { scheduleGgirRecompute: e } = await import("./local-export-worker-DjsNNmt7.js").then((e) => e.a);
				e(s, i, t, a);
			}
			return p;
		}({
			...e,
			expected: o.expected
		}, t, a, o.signal ?? e.signal);
		return {
			record: i.committed,
			changed: i.changed
		};
	});
}
function dt(e, t, n) {
	return Qe(lt(t, {
		fileId: e.fileId,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm ?? null,
		detectionRule: e.detectionRule ?? null
	}), async () => {
		null !== n && await O.settleWrites();
		const r = await ut(e, t, n);
		return {
			record: r.committed,
			changed: r.changed
		};
	});
}
async function ut(e, t, s) {
	const { fileId: i, date: l, username: c, sleepMarkers: d, nonwearMarkers: u, isInvalidNight: p, isInvalidNightImplicit: g, notes: f, explicitNoNonwear: m, needsConsensus: h, algorithm: w = null, scoringContext: k, detectionRule: v = null, periodGuider: I = null, sleepPeriodDetectionConfig: y = null, algorithmVersion: N = null } = e, x = null !== w ? await a.waitFor(async function(e) {
		let t;
		if (e.extraParams) try {
			t = JSON.parse(e.extraParams);
		} catch {
			t = e.extraParams;
		}
		const n = it({
			algorithm: e.algorithm,
			detector: e.detector,
			guider: e.guider,
			sleep_period_detection_config: e.sleepPeriodDetectionConfig,
			scorer_version: e.scorerVersion,
			extra_params: t
		});
		return S(Ne(n));
	}({
		algorithm: w,
		detector: v,
		guider: I,
		sleepPeriodDetectionConfig: y,
		scorerVersion: N
	})) : null, _ = k ?? (null !== w && null !== x ? {
		appVersion: "local",
		algorithmVersions: { [w]: N ?? "1" },
		paramsHash: x,
		stampedAt: (/* @__PURE__ */ new Date()).toISOString()
	} : void 0), b = null !== w && null !== x ? await a.waitFor(S(Ne(it({
		fileId: i,
		date: l,
		username: c,
		algorithm: w,
		scorerVersion: N,
		detector: v,
		guider: I,
		sleepPeriodDetection: y,
		params: null,
		parameterSetHash: x
	})))) : null, T = ke(w), C = ve(v), A = e.restoredFromBackup;
	let D = !1;
	const P = await ot(t, async (k) => {
		const S = await t.files.get(i);
		if (void 0 === S) throw new Be();
		const P = await Se({
			fileId: i,
			date: l,
			username: c
		}, w, v, t), E = P?.algorithm === T && P.detectionRule === C ? P : void 0, j = P ? ye(P) : void 0;
		if (A && E && E.lastModifiedAt >= A.lastModifiedAt) return {
			fileId: i,
			date: l,
			username: c,
			previous: j ?? null,
			committed: ye(E),
			changed: !1
		};
		if (void 0 !== e.expected) {
			if (!Ye(j, e.expected)) return P?.id && await Te(P.id, t, P), D = !0, {
				fileId: i,
				date: l,
				username: c,
				previous: j ?? null,
				committed: j ?? null,
				changed: !1
			};
			if (!0 !== e.guardHashOnly && j?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
		}
		const O = A ? E : j, $ = u ?? O?.nonwearMarkers ?? [], H = p ?? O?.isInvalidNight ?? !1, L = void 0 === A && R(S, j ?? { sleepMarkers: [] }, { sleepMarkers: d }), W = H || L, V = m ?? O?.explicitNoNonwear ?? !1, J = h ?? O?.needsConsensus ?? !1, K = 0 === d.length || 0 === $.length ? null : (await a.waitFor(me([{
			sleepMarkers: d,
			nonwearMarkers: $,
			isInvalidNight: W
		}])))[0] ?? null, U = K ? he(d, K) : d, q = W || (K?.invalidates ?? !1), B = q && !K?.invalidates && (H ? void 0 === p ? !0 === O?.isInvalidNightImplicit : !0 === g : L);
		if (q && U.some((e) => e.markerType === r.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
		const G = await a.waitFor(M({
			sleepMarkers: U,
			nonwearMarkers: $,
			isInvalidNight: q,
			explicitNoNonwear: V,
			notes: f
		})), z = null !== w ? await async function(e, t, n) {
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
			guider: I,
			sleepPeriodDetectionConfig: y,
			params: null,
			parameterSetHash: x,
			contentHash: b
		}) : null, Y = {
			fileId: i,
			date: l,
			username: c,
			algorithm: T,
			detectionRule: C,
			periodGuider: I,
			sleepPeriodDetectionConfig: y,
			algorithmVersion: N,
			scoringSessionId: z,
			manualNonwearInSleep: !1,
			sleepMarkers: U,
			nonwearMarkers: $,
			isInvalidNight: q,
			...B ? { isInvalidNightImplicit: !0 } : {},
			explicitNoNonwear: V,
			needsConsensus: J,
			notes: f,
			contentHash: G,
			syncStatus: "pending",
			lastModifiedAt: A?.lastModifiedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
			...void 0 !== _ ? { scoringContext: _ } : {},
			...void 0 !== A ? { restoredFromBackup: A.restoreId } : {}
		}, X = {
			fileId: i,
			date: l,
			username: c,
			previous: j ?? null,
			committed: Y,
			changed: rt(j) !== rt(Y)
		};
		await st(X, s);
		const Z = A ? E : P, Q = Z && Z !== E ? {
			algorithm: Z.algorithm,
			detectionRule: Z.detectionRule
		} : void 0;
		return await F({
			op: "markers_put",
			fileId: i,
			username: c,
			...void 0 !== A ? { restoredFromBackup: A.restoreId } : {},
			payload: {
				...Y,
				prevContentHash: E?.contentHash,
				...Q ? { replacedKey: Q } : {}
			}
		}), await async function(e, t, { existing: r, replacement: a }, s) {
			const { fileId: o } = t;
			let i;
			r && JSON.stringify(r.sleepMarkers) === JSON.stringify(t.sleepMarkers) || await e.actiwareFileData.where("fileId").equals(o).modify({ actiwareStatisticsNeedsRecompute: !0 }), a?.id ? (i = a.id, await e.markers.update(i, (e) => {
				Object.assign(e, t), void 0 === t.isInvalidNightImplicit && delete e.isInvalidNightImplicit, void 0 === t.restoredFromBackup && delete e.restoredFromBackup;
			})) : i = await e.markers.add(t);
			const l = await e.markerProvenance.get(o), c = n({
				...t,
				id: i
			}), d = l?.rows.find((e) => e.id === i);
			return ("auto_score" === c.username || c.nonwearDecided !== (d?.nonwearDecided ?? !1) || c.nonwearDecided && c.nonwearSpans !== d?.nonwearSpans) && await qe([o], e, s), await e.markerProvenance.put({
				fileId: o,
				rows: [...(l?.rows ?? []).filter((e) => e.id !== i), c]
			}), i;
		}(t, Y, {
			existing: E,
			replacement: Z
		}, e.signal), X;
	}, e.signal);
	if (D) throw new Ge();
	return P;
}
async function pt(e, t, n) {
	return { changed: (await ct(e, t, () => Promise.resolve({
		kind: "unscore",
		expected: e.expected
	}), n)).changed };
}
function gt(e, t, n) {
	return be(e, { periodMetrics: t }, n);
}
const ft = Symbol("marker-id");
function mt(e) {
	const t = e;
	return t[ft] ??= o();
}
function ht(e, t, n = !1) {
	return {
		...t ?? structuredClone(e),
		[ft]: n ? o() : mt(e)
	};
}
function wt(e, t) {
	const n = (e) => $(Object.fromEntries(Object.entries(e).filter(([e]) => "markerIndex" !== e))), r = /* @__PURE__ */ new Map();
	for (const s of e) {
		const e = n(s), t = r.get(e) ?? [];
		t.push(s), r.set(e, t);
	}
	const a = /* @__PURE__ */ new Map();
	return t.map((e) => {
		const t = n(e), s = a.get(t) ?? 0;
		return a.set(t, s + 1), void 0 !== e[ft] ? e : {
			...e,
			[ft]: r.get(t)?.[s]?.[ft] ?? o()
		};
	});
}
function kt(e, t) {
	return {
		...t,
		...void 0 !== t.sleepMarkers && t.sleepMarkers !== e.sleepMarkers ? { sleepMarkers: wt(e.sleepMarkers, t.sleepMarkers) } : {},
		...void 0 !== t.nonwearMarkers && t.nonwearMarkers !== e.nonwearMarkers ? { nonwearMarkers: wt(e.nonwearMarkers, t.nonwearMarkers) } : {}
	};
}
function vt() {
	const e = k();
	return e && I.getState().getWorkspace(e), function(e) {
		try {
			return localStorage.getItem(e);
		} catch {
			return null;
		}
	}("__e2eLocalMode"), "local";
}
let It = null;
function yt(e, t, n) {
	return !It || It.scope.workspaceId === n.workspaceId && It.scope.actor === n.actor && It.scope.studyId === n.studyId && It.scope.sourceKey === n.sourceKey || (It = null), null !== It && It.fileId === e && It.date === t ? It : null;
}
function Nt(e) {
	return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " ");
}
function Mt(e) {
	return `${String(e.getFullYear()).padStart(4, "0")}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function St(e, t) {
	return null !== e && Number.isFinite(e) ? function(e) {
		return e % 60 == 0;
	}(t) ? function(e) {
		const t = /* @__PURE__ */ new Date(1e3 * e);
		return `${String(t.getUTCHours()).padStart(2, "0")}:${String(t.getUTCMinutes()).padStart(2, "0")}`;
	}(e) : Nt(e).slice(11) : "--:--";
}
const xt = Object.freeze({
	viewport: null,
	cursorTimestamp: null,
	cursorOwner: null,
	selection: null,
	renderScene: null,
	epochSeconds: null
}), _t = w(() => ({ scenes: {} }));
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
	pendingRestSelection: !0,
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
		...Zt(),
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
		sleepMarkers: e.sleepMarkers.map((e) => ht(e, {
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
		nonwearMarkers: e.nonwearMarkers.map((e) => ht(e, {
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
	return l(e, t, n, r.sleepMarkers) ? {
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
			sourceKey: vt(),
			workspaceId: k(),
			actor: t || "anonymous",
			studyId: n
		};
	}(t), a = t.nightLoading ? null : yt(t.currentFileId, n, r);
	return tn(e, {
		...e,
		scope: r,
		db: "local" === r.sourceKey && v() ? N() : null,
		fileId: t.currentFileId,
		date: n,
		algorithm: a ? a.algorithm : e.algorithm,
		detectionRule: a ? a.detectionRule : e.detectionRule
	});
}
function Ft(e, t, n) {
	return {
		binding: e.db ? O.captureWorkspaceBinding(e.db, {
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
					expected: s?.expected ?? ze(n),
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
			for (const r of t?.carried ?? []) nt(null, e, r);
			for (const r of t?.events?.(e.committed) ?? []) nt(null, e, r);
			const n = at(e, t);
			n && nt(null, e, n);
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
const Jt = 3, Kt = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new WeakMap();
let qt = 0, Bt = null, Gt = 0;
const zt = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakSet(), Xt = /* @__PURE__ */ new WeakMap(), Zt = () => ({
	sleepMarkers: [],
	nonwearMarkers: [],
	isInvalidNight: !1,
	explicitNoNonwear: !1,
	needsConsensus: !1,
	notes: ""
});
function Qt(e) {
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
	return e.db && !Ut.has(e.db) && Ut.set(e.db, qt += 1), JSON.stringify([
		e.db ? Ut.get(e.db) : 0,
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
	if (c(e.currentFileSourceType)) return null;
	return null;
}
function rn(e) {
	const t = nn(e);
	return t ? Kt.get(en(t)) ?? null : null;
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
	if (void 0 !== t && (e.context = kt(e.context, {
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
		canDiscardNightChanges: n instanceof Ge || n instanceof Be,
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
		store: et(t.db, t.scope),
		algorithm: t.algorithm,
		detectionRule: t.detectionRule
	}, Qe(n, () => Promise.resolve())), function(e, t) {
		const n = e.context, r = t ? Qt(t) : Zt(), a = ze(t), s = void 0 !== e.saved && JSON.stringify(ze(e.saved)) === JSON.stringify(a) && (null !== a.contentHash || $(e.saved ? Qt(e.saved) : null) === $(t ? r : null));
		void 0 === e.saved || s || (e.context = kt(n, At(e.store, n))), e.saved = t, e.view = kt(n, {
			...r,
			...s ? {
				sleepMarkers: n.sleepMarkers,
				nonwearMarkers: n.nonwearMarkers
			} : {}
		});
		const o = e.context, i = !r.isInvalidNight && $(r.sleepMarkers) === $(o.proposalNight?.authoredSleepMarkers ?? []) && l(o.proposalNight, e.binding.fileId, e.binding.date, o.sleepMarkers);
		e.context = kt(o, {
			...o,
			...e.view,
			sleepMarkers: i ? o.sleepMarkers : e.view.sleepMarkers,
			proposalNight: i ? o.proposalNight : null
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
		}, It = s, !gn.owns(a, r)) return;
		var s;
		const o = e.view, i = e.context;
		r.showStoredNight(a, t.fileId, t.date, {
			...o,
			sleepMarkers: i.sleepMarkers,
			view: Rt(i)
		}), e.context = kt(e.context, n.getState()), sn(e);
	}(e, t));
}
function ln(e, t, n = e.binding) {
	if (void 0 === e.saved) throw new Error("The night has not opened; no write has a baseline.");
	const r = ze(e.saved);
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
				"committed" === a.status && n.mutation && (e.saved = a.night, n.accepting && (e.context = kt(e.context, {
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
				}), t.failure instanceof Ge || t.failure instanceof Be || !(t.retries < Jt) || (t.retries += 1, t.retryTimer = setTimeout(() => {
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
		n && (n.context = kt(n.context ?? t, t));
	},
	write: (e, t, n, r) => {
		const a = zt.get(e), s = Xt.get(e);
		if (!a || !s) throw new Error("A night write requires its proposal's executor.");
		a.view = kt(a.context ?? e.context, t), r && (a.context = kt(a.context ?? r, {
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
			Xt.get(r).slot.baseline ??= Qt(Lt(i));
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
	waiting: (e) => e ? (zt.get(e)?.log.length ?? 0) > 0 : [...Kt.values()].some((e) => e.log.length > 0),
	setDragging: (e, t) => {
		const n = zt.get(e);
		t ? n?.drags.add(e) : n?.drags.delete(e);
	},
	scopeChanging: () => Dt > 0,
	hasUnsavedWork: () => [...Kt.values()].some((e) => e.log.length > 0 || e.drags.size > 0),
	settled: async () => {
		await Promise.all([...Kt.values()].map(pn));
	}
};
function fn(e) {
	const t = zt.get(e)?.key ?? null;
	return function(e, t) {
		const n = t.availableFiles.find((e) => e.id === t.currentFileId)?.countEpochSeconds;
		return e.epochSeconds ?? s(j(t), n);
	}((n = null === t ? null : function(e, t, n, r) {
		return !e || !Number.isInteger(t) || (t ?? 0) <= 0 || !n ? null : `${r ?? e}\0${String(t)}\0${n}`;
	}(t, e.fileId, e.date, t), null == n ? xt : _t.getState().scenes[n] ?? xt), e.context);
	var n;
}
function mn(e) {
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
function hn(e, t, n) {
	if (t === n || null === t || null === n) return null;
	const r = Math.abs(n - t);
	return `moved ${e} ${r >= 60 ? `${String(Math.round(r / 60))} min` : `${String(r)} s`} ${n < t ? "earlier" : "later"}`;
}
function wn(e, t, { date: n, undone: r, stepSec: a }) {
	const s = (e) => St(e, a), o = e ? mn(e) : [], i = mn(t), l = (e, t) => e.label === t.label && e.start === t.start && e.end === t.end, c = o.filter((e) => !i.some((t) => l(t, e))), d = i.filter((e) => !o.some((t) => l(e, t))), u = [];
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
	await Promise.all([...Kt.values()].filter((r) => r.binding.db === e && r.binding.fileId === t && (!n || r.binding.date === n.date && r.binding.scope.actor === n.username)).map(pn));
}
export { $e as A, ge as B, We as C, Re as D, Ee as E, ye as F, U as H, we as I, me as L, Ae as M, xe as N, Oe as O, Me as P, he as R, qe as S, Le as T, V as U, q as V, L as W, ze as _, fn as a, pt as b, tn as c, Nt as d, Mt as f, gt as g, kt as h, Ot as i, Ce as j, Fe as k, $t as l, mt as m, kn as n, gn as o, ht as p, dn as r, bt as s, nn as t, St as u, tt as v, Ve as w, ct as x, dt as y, se as z };
