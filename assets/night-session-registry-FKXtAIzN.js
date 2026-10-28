import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { i as t } from "./workers-BHTWDuMW.js";
import { Qt as n, Ut as r, Zt as a, d as s, hn as o, l as i, p as l, v as c } from "./schema-CR2XP9Ya.js";
import { c as d, r as u, u as p } from "./legacy-invalid-night-BxvRkrkV.js";
import { G as f, K as g, U as m, a as h, n as w, o as k, q as v, t as y } from "./workspace-db-ogWQfUX1.js";
import { a as M, o as I } from "./content-hash-BtD8CeUH.js";
import { a as N, i as x } from "./project-revision-CoEk0UcK.js";
import { S as _, b as S, c as b, i as C, m as T, u as R, x as D, y as A } from "./sleep-period-detection-sU39gOLg.js";
import { t as P } from "./audit-log-B0nK6Rnj.js";
import { t as E } from "./audit-hash-rfcCP1yx.js";
import { i as j, t as O } from "./wal-B2YB4K8w.js";
const H = "auto_score";
function $(e, t) {
	return {
		sleepPeriodDetectionConfig: b(e),
		sleepPeriodDetectionSummary: t ?? C(e)
	};
}
function F(e) {
	return {
		algorithm: e.algorithm,
		...$(e.sleepPeriodDetection, e.sleepPeriodDetectionSummary),
		sleepCount: e.sleepCount,
		napCount: e.napCount,
		markers: e.markers
	};
}
function L(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function W(e) {
	return {
		...e,
		edited: !0
	};
}
function V(e, t, n, r) {
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
	const [i, l] = D(a.markerType), c = W({
		...a,
		offsetTimestamp: r,
		markerType: i
	}), d = W({
		...a,
		onsetTimestamp: n,
		markerType: l
	}), u = [...e];
	return u.splice(t, 1, c, d), {
		ok: !0,
		markers: L(u),
		newIndex: t + 1
	};
}
function U(e, t, n) {
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
	const u = Math.min(i, c), p = Math.max(l, d), f = A(a, o), g = Math.min(t, s), m = W({
		...f !== r.MAIN_SLEEP || T(a) ? a : o,
		onsetTimestamp: u,
		offsetTimestamp: p,
		markerType: f
	}), h = e.filter((e, n) => n !== t && n !== s);
	return h.splice(g, 0, m), {
		ok: !0,
		markers: L(h),
		mergedIndex: g
	};
}
function q(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function J(e) {
	return "boolean" == typeof e ? e : null;
}
function K(e) {
	return "string" == typeof e ? e : null;
}
function G(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function B(e, t) {
	return !(e.length > 0) && t;
}
function z(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
function X(e) {
	const t = function(e) {
		return Array.isArray(e) ? e : null;
	}(e);
	return null === t ? null : t.every(z) ? t : null;
}
function Y(e) {
	const t = X(e);
	return null === t ? null : t;
}
function Q(e) {
	const t = X(e);
	return null === t ? null : t;
}
function Z(e) {
	return e.filter((e) => e.markerType === r.MAIN_SLEEP).length;
}
function ee(e) {
	return e.every((e, t) => e.markerIndex === t + 1);
}
const te = {
	main_sleep_on_invalid_night: ({ after: e }) => e.isInvalidNight && Z(e.sleepMarkers) > 0,
	multiple_main_sleep: ({ after: e }) => Z(e.sleepMarkers) > 1,
	first_marker_not_main_sleep: ({ after: e }) => !e.isInvalidNight && e.sleepMarkers.length > 0 && 0 === Z(e.sleepMarkers),
	marker_index_noncontiguous: ({ after: e }) => !ee(e.sleepMarkers) || !ee(e.nonwearMarkers),
	boundaries_disordered: ({ after: e }) => e.sleepMarkers.some((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && e.onsetTimestamp >= e.offsetTimestamp) || e.nonwearMarkers.some((e) => null != e.startTimestamp && null != e.endTimestamp && e.startTimestamp >= e.endTimestamp),
	nonwear_flag_with_markers: ({ after: e }) => e.explicitNoNonwear && e.nonwearMarkers.length > 0,
	manual_nonwear_in_sleep: ({ payload: e }) => !0 === e.manualNonwearInSleep,
	marker_limit_exceeded: ({ after: e }) => e.sleepMarkers.length > _.MAX_SLEEP_PERIODS_PER_DAY || e.nonwearMarkers.length > _.MAX_NONWEAR_PERIODS_PER_DAY,
	split_not_strictly_inside: ({ before: e, payload: t }) => {
		const n = q(t.periodIndex), r = q(t.at);
		return null !== n && null !== r && !V(e.sleepMarkers, n, r, q(t.firstOffset) ?? r).ok;
	},
	merge_no_neighbor: ({ before: e, payload: t }) => {
		const n = q(t.periodIndex), r = K(t.direction);
		return null !== n && ("prev" === r || "next" === r) && !U(e.sleepMarkers, n, r).ok;
	},
	mutation_on_read_only_view: ({ context: e }) => !0 === e.readOnlyView,
	undo_beyond_history: ({ context: e }) => void 0 !== e.undoDepth && e.undoDepth <= 0,
	redo_beyond_history: ({ context: e }) => void 0 !== e.redoDepth && e.redoDepth <= 0
};
function ne(e, t) {
	const n = d[e]?.guards ?? [], r = [];
	for (const a of n) {
		const e = te[a], n = p[a];
		e && n && e(t) && r.push({
			guard: a,
			severity: n.severity
		});
	}
	return r;
}
function re(e, t) {
	const n = t.stateAfter;
	if (null === n || "object" != typeof n) return {
		state: e,
		reconstructed: !1
	};
	const r = n, a = Y(r.sleepMarkers), s = Q(r.nonwearMarkers);
	return null === a || null === s ? {
		state: e,
		reconstructed: !1
	} : { state: {
		...e,
		sleepMarkers: a,
		nonwearMarkers: s,
		isInvalidNight: J(r.isInvalidNight) ?? e.isInvalidNight,
		explicitNoNonwear: J(r.explicitNoNonwear) ?? e.explicitNoNonwear,
		needsConsensus: J(r.needsConsensus) ?? e.needsConsensus,
		notes: K(r.notes) ?? e.notes
	} };
}
const ae = {
	marker_placed: (e, t) => {
		if ("nonwear" === K(t.category)) {
			const n = q(t.startTimestamp), r = q(t.endTimestamp);
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
		const n = q(t.onsetTimestamp), r = q(t.offsetTimestamp);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = K(t.markerType) ?? S(e.sleepMarkers, e.isInvalidNight), s = [...e.sleepMarkers, {
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
		const r = n, a = Y(r.sleepMarkers), s = Q(r.nonwearMarkers);
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
		const n = q(t.periodIndex), r = t.updates;
		if (null === n || null === r || "object" != typeof r) return {
			state: e,
			reconstructed: !1
		};
		const a = r;
		if ("nonwear" === K(t.category)) {
			const t = e.nonwearMarkers.map((e, t) => t === n ? {
				...e,
				...a
			} : e);
			return { state: {
				...e,
				nonwearMarkers: t,
				explicitNoNonwear: B(t, e.explicitNoNonwear)
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
		const n = q(t.periodIndex);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : "nonwear" === K(t.category) ? { state: {
			...e,
			nonwearMarkers: G(e.nonwearMarkers.filter((e, t) => t !== n))
		} } : { state: {
			...e,
			sleepMarkers: G(e.sleepMarkers.filter((e, t) => t !== n))
		} };
	},
	markers_cleared: (e) => ({ state: {
		...e,
		sleepMarkers: [],
		nonwearMarkers: []
	} }),
	sleep_period_split: (e, t) => {
		const n = q(t.periodIndex), r = q(t.at);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = V(e.sleepMarkers, n, r, q(t.firstOffset) ?? r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	sleep_period_merged: (e, t) => {
		const n = q(t.periodIndex), r = K(t.direction);
		if (null === n || "prev" !== r && "next" !== r) return {
			state: e,
			reconstructed: !1
		};
		const a = U(e.sleepMarkers, n, r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	session_start: (e, t) => {
		const n = Y(t.sleepMarkers), r = Q(t.nonwearMarkers);
		return null === n || null === r ? {
			state: e,
			reconstructed: !1
		} : {
			state: {
				...e,
				sleepMarkers: n,
				nonwearMarkers: r,
				isInvalidNight: J(t.isInvalidNight) ?? e.isInvalidNight,
				explicitNoNonwear: J(t.explicitNoNonwear) ?? e.explicitNoNonwear,
				needsConsensus: J(t.needsConsensus) ?? e.needsConsensus,
				notes: K(t.notes) ?? e.notes
			},
			reconstructed: void 0 !== t.notes
		};
	},
	markers_saved: (e, t, n) => {
		const r = q(t.sleepCount), a = q(t.nonwearCount);
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
	undo: re,
	redo: re,
	auto_score_applied: (e, t) => {
		const n = Y(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: n
		} };
	},
	auto_nonwear_applied: (e, t) => {
		const n = Q(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			nonwearMarkers: n,
			explicitNoNonwear: B(n, e.explicitNoNonwear)
		} };
	},
	consensus_toggled: (e, t) => {
		const n = J(t.value);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			needsConsensus: n
		} };
	},
	invalid_night_toggled: (e, t) => {
		const n = J(t.value);
		if (null === n) return {
			state: e,
			reconstructed: !1
		};
		if (!n) return { state: {
			...e,
			isInvalidNight: !1
		} };
		const a = G(e.sleepMarkers.filter((e) => e.markerType !== r.MAIN_SLEEP));
		return { state: {
			...e,
			isInvalidNight: !0,
			sleepMarkers: a
		} };
	},
	no_nonwear_toggled: (e, t) => {
		const n = J(t.value);
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
		const n = K(t.after);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			notes: n
		} };
	},
	candidate_copied: re
};
function se(e, t, n = {}) {
	const r = u(t), a = r.payload ?? {}, s = ae[r.action], o = s ? s(e, a, r) : { state: e }, i = o.state;
	return {
		state: i,
		violations: ne(r.action, {
			before: e,
			after: i,
			event: r,
			payload: a,
			context: n
		}),
		reconstructed: o.reconstructed ?? !0
	};
}
function oe(e) {
	return "object" != typeof e || null === e ? null : "string" == typeof e.action ? u(e) : null;
}
function ie(e, t) {
	if ("markers_saved" !== e.action) return !1;
	const n = e.payload ?? {}, r = q(n.sleepCount), a = q(n.nonwearCount);
	return null !== r && null !== a && (r !== t.sleepMarkers.length || a !== t.nonwearMarkers.length);
}
function le(e) {
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
		const e = oe(a), s = e ? se(n, e) : {
			state: n,
			violations: [],
			reconstructed: !1
		};
		n = s.state, null !== e && !0 === d[e.action]?.stateKeyframe && s.reconstructed ? r = "exact" : s.reconstructed || "exact" !== r || (r = "divergent"), "exact" === r && null !== e && ie(e, n) && (r = "divergent"), t.push({
			state: n,
			basis: r,
			violations: s.violations
		});
	}
	return t;
}
function ce(e) {
	const t = [
		`${String(e.sleepMarkers.length)} sleep`,
		`${String(e.nonwearMarkers.length)} nonwear`,
		`invalid-night:${String(e.isInvalidNight)}`
	];
	return e.explicitNoNonwear && t.push("no-nonwear"), e.needsConsensus && t.push("needs-consensus"), e.notes.length > 0 && t.push(`notes ${String(e.notes.length)}ch`), t.join(", ");
}
function de(e) {
	return {
		sleep: e.sleepMarkers.map((e) => ({
			onset: e.onsetTimestamp,
			offset: e.offsetTimestamp,
			main: T(e)
		})),
		nonwear: (e.nonwearMarkers ?? []).map((e) => ({
			start: e.startTimestamp,
			end: e.endTimestamp
		})),
		isInvalidNight: e.isInvalidNight ?? !1
	};
}
async function ue(e, n = t()) {
	if (0 === e.length) return [];
	const r = await n.settleManualNonwearNights(e.map(de));
	if (r.length !== e.length) throw new Error(`The manual-nonwear night rule answered ${String(r.length)} settle(s) for ${String(e.length)} night(s).`);
	return r;
}
function pe(e, t) {
	return 0 === t.removed.length ? e : t.kept.map((t, n) => ({
		...e[t],
		markerIndex: n + 1
	}));
}
async function fe(e, t) {
	const n = le(e), r = e.flatMap((e, t) => {
		const r = e.payload, a = n[t]?.state;
		return "session_start" === e.action && null != r && "boolean" != typeof r.manualNonwearInSleep && void 0 !== a && Array.isArray(r.sleepMarkers) && Array.isArray(r.nonwearMarkers) && r.sleepMarkers.length === a.sleepMarkers.length && r.nonwearMarkers.length === a.nonwearMarkers.length ? [t] : [];
	});
	if (0 === r.length) return n;
	const a = await async function(e, t) {
		return (await ue(e, t)).map((e) => e.removed.length > 0);
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
	}), le(s);
}
function ge(e) {
	return null === e ? a : e;
}
function me(e) {
	return null == e ? n : e;
}
function he(e) {
	return "__legacy_dr__" === e ? null : e;
}
function we(e) {
	return {
		...e,
		algorithm: (t = e.algorithm, "__legacy__" === t ? null : t),
		detectionRule: he(e.detectionRule)
	};
	var t;
}
function ke(e) {
	const t = (e) => Array.isArray(e) ? e.map(t) : e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, n]) => [e, t(n)])) : e;
	return JSON.stringify(t(e));
}
function ve(e, { date: t, username: n }, r, a) {
	const s = e.filter((e) => e.date === t && e.username === n);
	if (void 0 !== r) {
		const e = ge(r), t = me(a), n = (e, t) => s.find((n) => n.algorithm === e && n.detectionRule === t);
		return n(e, t) ?? ("__legacy_dr__" !== t ? n(e, "__legacy_dr__") : void 0) ?? (null !== r ? n("__legacy__", "__legacy_dr__") : void 0);
	}
	return s.reduce((e, t) => !e || (t.id ?? 0) < (e.id ?? 0) ? t : e, void 0);
}
function ye(e, t, n, r) {
	return r.transaction("r", r.markers, async () => ve(await r.markers.where("[fileId+date+username]").equals([
		e.fileId,
		e.date,
		e.username
	]).toArray(), e, t, n));
}
async function Me(e, t, n, r, a, s = y()) {
	const o = await ye({
		fileId: e,
		date: t,
		username: n
	}, r, a, s);
	return o ? we(o) : void 0;
}
const Ie = [
	"manualNonwearInSleep",
	"periodMetrics",
	"syncStatus"
];
function Ne(e, t, n) {
	const r = Object.fromEntries(Ie.filter((e) => e in t).map((e) => [e, t[e]]));
	return n.markers.update(e, r);
}
async function xe(e, t = y(), n, r) {
	const a = t;
	await x(a, [a.markers], async () => {
		if (n) {
			const t = await a.markers.get(e);
			if (!t || ke(we(t)) !== ke(n)) return;
		}
		await Ne(e, { syncStatus: "conflict" }, a);
	}, r);
}
function _e(e) {
	return `${g.SCORED_VARIANT_WARM}:${String(e)}`;
}
function Se(e = f.getState().jobs) {
	if (!w()) return null;
	const t = Object.values(e).reverse().find((e) => m(e) && e.workspaceId === y().name && e.kind === g.SCORED_VARIANT_WARM && e.status !== v.DONE && e.status !== v.CANCELLED);
	return t ? {
		fileId: Number(t.key.split(":").at(-1)),
		done: t.done,
		total: t.total,
		...t.status === v.FAILED ? { failed: !0 } : {}
	} : null;
}
function be(e, t) {
	if (!w() || t && y() !== t) return;
	const n = (t ?? y()).name, r = f.getState();
	if (!e) return;
	const a = _e(e.fileId), s = `${n}:${a}`;
	r.jobs[s] && !e.failed || r.update(s, {
		id: s,
		workspaceId: n,
		key: a,
		kind: g.SCORED_VARIANT_WARM,
		label: "Scoring variants",
		controller: r.jobs[s]?.controller ?? new AbortController(),
		done: e.done,
		total: e.total,
		status: e.failed ? v.FAILED : v.RUNNING
	});
}
const Ce = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new WeakMap();
async function Re(e, t) {
	const n = Te.get(e) ?? {
		depth: 0,
		files: /* @__PURE__ */ new Set()
	};
	Te.set(e, n), n.depth++;
	try {
		return await t();
	} finally {
		if (0 === --n.depth) {
			Te.delete(e);
			for (const t of n.files) Ae(t, e, n.files);
		}
	}
}
const De = /* @__PURE__ */ new WeakMap();
function Ae(e, t, n) {
	const r = Te.get(t);
	if (r) r.files.add(e);
	else for (const a of Ce) n && n.size > 1 ? a(e, t, void 0, n) : a(e, t);
}
function Pe(e) {
	return Ce.add(e), () => Ce.delete(e);
}
const Ee = /* @__PURE__ */ new Set();
function je(e, t) {
	for (const n of Ee) n(e, t);
}
const Oe = "scored-variant-warm-backfill-v1", He = `placement-results-backfill-v${String(2)}`, $e = "placement-results-backfill-generation-v1", Fe = /* @__PURE__ */ new Set();
function Le(e, t, n) {
	const r = n ? De.get(n) : void 0;
	if (r?.db !== t) for (const a of Fe) a([e], t);
	else r.files.add(e);
}
const We = /* @__PURE__ */ new WeakMap();
async function Ve(e, t = y(), n) {
	let r = o.currentTransaction;
	for (; r?.parent;) r = r.parent;
	if (await N(t, [t.projectMeta], async () => {
		const e = await t.projectMeta.get($e);
		await t.projectMeta.put({
			key: $e,
			revision: (e?.revision ?? 0) + 1
		}), await t.projectMeta.delete(He);
	}, n), !r || r.db !== t) {
		for (const r of new Set(e)) Le(r, t, n);
		return;
	}
	let a = We.get(r);
	if (!a) {
		a = /* @__PURE__ */ new Set(), We.set(r, a);
		const e = a;
		r.idbtrans.addEventListener("complete", () => {
			for (const r of e) Le(r, t, n);
		}, { once: !0 });
	}
	for (const s of e) a.add(s);
}
var Ue = class extends Error {
	constructor() {
		super("The recording was deleted; this night was not saved."), this.name = "RecordingDeletedError";
	}
}, qe = class extends Error {
	constructor() {
		super("Markers changed during rescore or in another tab. Retry keeps the night on screen; reopening the night shows the stored one."), this.name = "NightConflictError";
	}
};
function Je(e) {
	return {
		contentHash: e?.contentHash ?? null,
		needsConsensus: e?.needsConsensus ?? !1
	};
}
function Ke(e, t) {
	const n = Je(e);
	return n.contentHash === t.contentHash && n.needsConsensus === t.needsConsensus;
}
const Ge = (e, t) => JSON.stringify([e, t]), Be = /* @__PURE__ */ new Map();
function ze(e, t) {
	const n = ((e) => Ge(e.store, e.fileId) + JSON.stringify([
		e.actor,
		e.date,
		ge(e.algorithm),
		me(e.detectionRule)
	]))(e);
	return function(e, t, n) {
		const r = e.length > 0 ? Promise.all(e).then(n) : n(), a = r.then(() => {}, () => {});
		for (const s of t) Be.set(s, a), a.then(() => {
			Be.get(s) === a && Be.delete(s);
		});
		return r;
	}([Be.get(n), Be.get((r = e.store, a = e.fileId, `${Ge(r, a)}*`))].filter((e) => void 0 !== e), [n], t);
	var r, a;
}
function Xe(e, t) {
	return e?.name ?? `${t?.sourceKey ?? "server"}:${t?.workspaceId ?? ""}`;
}
function Ye(e) {
	Qe(e.binding, e, e);
}
function Qe(e, t, n) {
	P.recordNightEdit(e, {
		fileId: t.fileId,
		analysisDate: t.date,
		action: n.action,
		...void 0 === n.payload ? {} : { payload: n.payload }
	});
}
function Ze(e) {
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
const et = (e, t) => {
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
			...$(r.sleepPeriodDetection, r.sleepPeriodDetectionSummary)
		})
	};
	var r;
};
function tt(e, t) {
	if (null === t) return o.Promise.resolve();
	const n = t.binding;
	if (!n) throw new Error("A local night write requires the audit binding captured at its act.");
	const r = (t) => ({
		fileId: e.fileId,
		analysisDate: e.date,
		action: t.action,
		...void 0 === t.payload ? {} : { payload: t.payload }
	}), a = et(e, t);
	return P.appendNightEditsInTransaction([
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
function nt(e, t, n) {
	return j([
		e.markers,
		e.scoringSessions,
		e.markerProvenance,
		e.actiwareFileData,
		e.auditLog,
		e.files
	], t, e, n);
}
function rt(e) {
	if (Array.isArray(e)) return e.map(rt);
	if (e && "object" == typeof e) {
		const t = {};
		for (const [n, r] of Object.entries(e)) null != r && (t[n] = rt(r));
		return t;
	}
	return e;
}
const at = (e, t) => ({
	store: Xe(e),
	actor: t.username,
	fileId: t.fileId,
	date: t.date,
	algorithm: t.algorithm,
	detectionRule: t.detectionRule
});
function st(e, t, n, r) {
	return ze(at(t, e), async () => {
		const a = await Me(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), o = await n(a ? we(a) : null);
		if (!o) return null;
		null !== r && await P.settleWrites();
		const i = "save" === o.kind ? await it(o.input, t, r) : await async function(e, t, n, r) {
			const { fileId: a, date: o, username: i, algorithm: l, detectionRule: c, expected: d } = e;
			let u = !1;
			const p = await nt(t, async () => {
				if (void 0 === await t.files.get(a)) throw new Ue();
				const p = await ye(e, l, c, t);
				if (void 0 !== d && !Ke(p, d)) return p?.id && await xe(p.id, t, p), u = !0, {
					fileId: a,
					date: o,
					username: i,
					previous: null,
					committed: null,
					changed: !1
				};
				if (!p) {
					const e = {
						fileId: a,
						date: o,
						username: i,
						previous: null,
						committed: null,
						changed: !1
					};
					return await tt(e, n), e;
				}
				const f = we(p), g = [p];
				await O({
					op: "markers_delete",
					fileId: a,
					username: i,
					payload: {
						kind: "night_unscored",
						date: o,
						prevContentHash: g[0]?.contentHash
					}
				});
				const m = new Set(g.flatMap((e) => void 0 === e.id ? [] : [e.id]));
				await t.markers.bulkDelete([...m]);
				const h = await t.markerProvenance.get(a);
				h && await t.markerProvenance.put({
					fileId: a,
					rows: h.rows.filter((e) => !m.has(e.id))
				}), g.some((e) => "auto_score" === e.username || s({
					...e,
					id: e.id
				}).nonwearDecided) && await Ve([a], t, r);
				const w = {
					fileId: a,
					date: o,
					username: i,
					previous: f,
					committed: null,
					changed: null !== Ze(f)
				};
				return await tt(w, n), w;
			}, r);
			if (u) throw new qe();
			if (null !== p.previous && "auto_score" !== i) {
				const { scheduleGgirRecompute: e } = await import("./local-export-worker-T-jnoiW8.js").then((e) => e.t);
				e(a, i, t, r);
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
function ot(e, t, n) {
	return ze(at(t, {
		fileId: e.fileId,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm ?? null,
		detectionRule: e.detectionRule ?? null
	}), async () => {
		null !== n && await P.settleWrites();
		const r = await it(e, t, n);
		return {
			record: r.committed,
			changed: r.changed
		};
	});
}
async function it(e, t, n) {
	const { fileId: a, date: l, username: c, sleepMarkers: d, nonwearMarkers: u, isInvalidNight: p, notes: f, explicitNoNonwear: g, needsConsensus: m, algorithm: h = null, scoringContext: w, detectionRule: k = null, periodGuider: v = null, sleepPeriodDetectionConfig: y = null, algorithmVersion: N = null } = e, x = null !== h ? await o.waitFor(async function(e) {
		let t;
		if (e.extraParams) try {
			t = JSON.parse(e.extraParams);
		} catch {
			t = e.extraParams;
		}
		const n = rt({
			algorithm: e.algorithm,
			detector: e.detector,
			guider: e.guider,
			sleep_period_detection_config: e.sleepPeriodDetectionConfig,
			scorer_version: e.scorerVersion,
			extra_params: t
		});
		return I(ke(n));
	}({
		algorithm: h,
		detector: k,
		guider: v,
		sleepPeriodDetectionConfig: y,
		scorerVersion: N
	})) : null, _ = w ?? (null !== h && null !== x ? {
		appVersion: "local",
		algorithmVersions: { [h]: N ?? "1" },
		paramsHash: x,
		stampedAt: (/* @__PURE__ */ new Date()).toISOString()
	} : void 0), S = null !== h && null !== x ? await o.waitFor(I(ke(rt({
		fileId: a,
		date: l,
		username: c,
		algorithm: h,
		scorerVersion: N,
		detector: k,
		guider: v,
		sleepPeriodDetection: y,
		params: null,
		parameterSetHash: x
	})))) : null, b = ge(h), C = me(k), T = e.restoredFromBackup;
	let D = !1;
	const A = await nt(t, async (w) => {
		const I = await t.files.get(a);
		if (void 0 === I) throw new Ue();
		const A = await ye({
			fileId: a,
			date: l,
			username: c
		}, h, k, t), P = A?.algorithm === b && A.detectionRule === C ? A : void 0, E = A ? we(A) : void 0;
		if (T && P && P.lastModifiedAt >= T.lastModifiedAt) return {
			fileId: a,
			date: l,
			username: c,
			previous: E ?? null,
			committed: we(P),
			changed: !1
		};
		if (void 0 !== e.expected) {
			if (!Ke(E, e.expected)) return A?.id && await xe(A.id, t, A), D = !0, {
				fileId: a,
				date: l,
				username: c,
				previous: E ?? null,
				committed: E ?? null,
				changed: !1
			};
			if (!0 !== e.guardHashOnly && E?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
		}
		const j = T ? P : E, H = u ?? j?.nonwearMarkers ?? [], $ = (p ?? j?.isInvalidNight ?? !1) || void 0 === T && R(I, E ?? { sleepMarkers: [] }, { sleepMarkers: d }), F = g ?? j?.explicitNoNonwear ?? !1, L = m ?? j?.needsConsensus ?? !1, W = 0 === d.length || 0 === H.length ? null : (await o.waitFor(ue([{
			sleepMarkers: d,
			nonwearMarkers: H,
			isInvalidNight: $
		}])))[0] ?? null, V = W ? pe(d, W) : d, U = $ || (W?.invalidates ?? !1);
		if (U && V.some((e) => e.markerType === r.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
		const q = await o.waitFor(M({
			sleepMarkers: V,
			nonwearMarkers: H,
			isInvalidNight: U,
			explicitNoNonwear: F,
			notes: f
		})), J = null !== h ? await async function(e, t, n) {
			const { fileId: r, date: a, username: s, algorithm: o } = t, l = e.table("scoringSessions"), c = await l.where("[fileId+date+username+algorithm]").equals([
				r,
				a,
				s,
				o
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
			const d = i(), u = (/* @__PURE__ */ new Date()).toISOString();
			return await l.add({
				sessionId: d,
				fileId: r,
				date: a,
				username: s,
				algorithm: o,
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
		}(w, {
			fileId: a,
			date: l,
			username: c,
			algorithm: h
		}, {
			scorerVersion: N,
			detector: k,
			guider: v,
			sleepPeriodDetectionConfig: y,
			params: null,
			parameterSetHash: x,
			contentHash: S
		}) : null, K = {
			fileId: a,
			date: l,
			username: c,
			algorithm: b,
			detectionRule: C,
			periodGuider: v,
			sleepPeriodDetectionConfig: y,
			algorithmVersion: N,
			scoringSessionId: J,
			manualNonwearInSleep: !1,
			sleepMarkers: V,
			nonwearMarkers: H,
			isInvalidNight: U,
			explicitNoNonwear: F,
			needsConsensus: L,
			notes: f,
			contentHash: q,
			syncStatus: "pending",
			lastModifiedAt: T?.lastModifiedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
			...void 0 !== _ ? { scoringContext: _ } : {},
			...void 0 !== T ? { restoredFromBackup: T.restoreId } : {}
		}, G = {
			fileId: a,
			date: l,
			username: c,
			previous: E ?? null,
			committed: K,
			changed: Ze(E) !== Ze(K)
		};
		await tt(G, n), P && JSON.stringify(P.sleepMarkers) === JSON.stringify(V) || await t.actiwareFileData.where("fileId").equals(a).modify({ actiwareStatisticsNeedsRecompute: !0 }), await O({
			op: "markers_put",
			fileId: a,
			username: c,
			...void 0 !== T ? { restoredFromBackup: T.restoreId } : {},
			payload: {
				date: l,
				sleepMarkers: V,
				nonwearMarkers: H,
				isInvalidNight: U,
				explicitNoNonwear: F,
				notes: f,
				needsConsensus: L,
				sleepPeriodDetectionConfig: y,
				contentHash: q,
				prevContentHash: P?.contentHash
			}
		});
		const B = T ? P : A, z = B?.id ? await (async (e) => (await t.markers.update(e, (e) => {
			Object.assign(e, K), void 0 === T && delete e.restoredFromBackup;
		}), e))(B.id) : await t.markers.add(K), X = await t.markerProvenance.get(a), Y = s({
			...K,
			id: z
		}), Q = X?.rows.find((e) => e.id === z);
		return ("auto_score" === Y.username || Y.nonwearDecided !== (Q?.nonwearDecided ?? !1) || Y.nonwearDecided && Y.nonwearSpans !== Q?.nonwearSpans) && await Ve([a], t, e.signal), await t.markerProvenance.put({
			fileId: a,
			rows: [...(X?.rows ?? []).filter((e) => e.id !== z), Y]
		}), G;
	}, e.signal);
	if (D) throw new qe();
	return A;
}
async function lt(e, t, n) {
	return { changed: (await st(e, t, () => Promise.resolve({
		kind: "unscore",
		expected: e.expected
	}), n)).changed };
}
function ct(e, t, n) {
	return Ne(e, { periodMetrics: t }, n);
}
const dt = Symbol("marker-id");
function ut(e) {
	const t = e;
	return t[dt] ??= i();
}
function pt(e, t, n = !1) {
	return {
		...t ?? structuredClone(e),
		[dt]: n ? i() : ut(e)
	};
}
function ft(e, t) {
	const n = (e) => E(Object.fromEntries(Object.entries(e).filter(([e]) => "markerIndex" !== e))), r = /* @__PURE__ */ new Map();
	for (const s of e) {
		const e = n(s), t = r.get(e) ?? [];
		t.push(s), r.set(e, t);
	}
	const a = /* @__PURE__ */ new Map();
	return t.map((e) => {
		const t = n(e), s = a.get(t) ?? 0;
		return a.set(t, s + 1), void 0 !== e[dt] ? e : {
			...e,
			[dt]: r.get(t)?.[s]?.[dt] ?? i()
		};
	});
}
function gt(e, t) {
	return {
		...t,
		...void 0 !== t.sleepMarkers && t.sleepMarkers !== e.sleepMarkers ? { sleepMarkers: ft(e.sleepMarkers, t.sleepMarkers) } : {},
		...void 0 !== t.nonwearMarkers && t.nonwearMarkers !== e.nonwearMarkers ? { nonwearMarkers: ft(e.nonwearMarkers, t.nonwearMarkers) } : {}
	};
}
function mt() {
	const e = h();
	return e && k.getState().getWorkspace(e), function(e) {
		try {
			return localStorage.getItem(e);
		} catch {
			return null;
		}
	}("__e2eLocalMode"), "local";
}
let ht = null;
function wt(e, t, n) {
	return !ht || ht.scope.workspaceId === n.workspaceId && ht.scope.actor === n.actor && ht.scope.studyId === n.studyId && ht.scope.sourceKey === n.sourceKey || (ht = null), null !== ht && ht.fileId === e && ht.date === t ? ht : null;
}
function kt(e) {
	const t = /* @__PURE__ */ new Date(1e3 * e);
	return `${String(t.getUTCHours()).padStart(2, "0")}:${String(t.getUTCMinutes()).padStart(2, "0")}`;
}
function vt(e) {
	return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " ");
}
var yt = e({
	bindShown: () => zt,
	buildNightData: () => Ct,
	ensureOpened: () => Zt,
	fileSessionsSettled: () => un,
	flushCurrentNight: () => nn,
	flushSession: () => rn,
	isHeldOutbox: () => bt,
	leavesNightUnscored: () => Tt,
	newNightContext: () => xt,
	nightSessions: () => sn,
	nightShown: () => Dt,
	nightTokenBrand: () => Mt,
	outboxKey: () => Gt,
	sameNight: () => Bt,
	sessionToken: () => Yt,
	setNightScopeChanging: () => St,
	withoutUntouchedProposal: () => Rt
});
const Mt = Symbol("night-session"), It = Object.keys({
	markerHistory: !0,
	markerHistoryIndex: !0,
	selectedPeriodIndex: !0,
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
function Nt(e) {
	return Object.fromEntries(It.map((t) => [t, e[t]]));
}
function xt(e, t = e.getState()) {
	return {
		...t,
		...Nt(e.getInitialState()),
		...Jt(),
		isDirty: !1,
		isSaving: !1,
		saveError: null,
		nightLoading: !0
	};
}
let _t = 0;
function St(e) {
	_t += e ? 1 : -1;
}
function bt(e) {
	return Lt === e.key;
}
function Ct(e) {
	return {
		sleepMarkers: e.sleepMarkers.map((e) => pt(e, {
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
		nonwearMarkers: e.nonwearMarkers.map((e) => pt(e, {
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp,
			markerIndex: e.markerIndex,
			...e.provenance ? { provenance: e.provenance } : {},
			...e.detector ? { detector: e.detector } : {}
		})),
		isInvalidNight: e.isInvalidNight,
		explicitNoNonwear: e.explicitNoNonwear,
		notes: e.notes || "",
		needsConsensus: e.needsConsensus
	};
}
function Tt(e, t, n, r) {
	return !(!e || e.fileId !== t || e.date !== n || r.isInvalidNight || r.explicitNoNonwear || r.needsConsensus || r.notes || (r.nonwearMarkers?.length ?? 0) > 0 || 0 !== Rt(e, t, n, r).sleepMarkers.length);
}
function Rt(e, t, n, r) {
	return l(e, t, n, r.sleepMarkers) ? {
		...r,
		sleepMarkers: e?.authoredSleepMarkers ?? []
	} : r;
}
function Dt(e, t) {
	const n = t.availableDates[t.currentDateIndex];
	if (null === t.currentFileId || !n) return !1;
	const r = function(e) {
		const { username: t, selectedStudyId: n } = e;
		return {
			sourceKey: mt(),
			workspaceId: h(),
			actor: t || "anonymous",
			studyId: n
		};
	}(t), a = t.nightLoading ? null : wt(t.currentFileId, n, r);
	return Bt(e, {
		...e,
		scope: r,
		db: "local" === r.sourceKey && w() ? y() : null,
		fileId: t.currentFileId,
		date: n,
		algorithm: a ? a.algorithm : e.algorithm,
		detectionRule: a ? a.detectionRule : e.detectionRule
	});
}
function At(e, t, n) {
	return {
		binding: e.db ? P.captureWorkspaceBinding(e.db, {
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
function Pt(e, t = e.proposalNight ?? e.acceptingProposal) {
	return Rt(t, e.currentFileId ?? -1, e.availableDates[e.currentDateIndex] ?? "", Ct(e));
}
function Et(e, t, n) {
	const r = n.proposalNight ?? (n.acceptingProposal !== t ? n.acceptingProposal : null), a = Pt(n, r);
	return void 0 !== e.dataSource?.unscoreNight && Tt(r, e.fileId, e.date, a) ? { kind: "unscore" } : {
		kind: "save",
		data: a
	};
}
async function jt(e, t, n, r) {
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
					expected: s?.expected ?? Je(n),
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
			for (const r of t?.carried ?? []) Qe(null, e, r);
			for (const r of t?.events?.(e.committed) ?? []) Qe(null, e, r);
			const n = et(e, t);
			n && Qe(null, e, n);
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
const Ot = 3, Ht = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new WeakMap();
let Ft = 0, Lt = null, Wt = 0;
const Vt = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakSet(), qt = /* @__PURE__ */ new WeakMap(), Jt = () => ({
	sleepMarkers: [],
	nonwearMarkers: [],
	isInvalidNight: !1,
	explicitNoNonwear: !1,
	needsConsensus: !1,
	notes: ""
});
function Kt(e) {
	return {
		sleepMarkers: e.sleepMarkers,
		nonwearMarkers: e.nonwearMarkers ?? [],
		isInvalidNight: e.isInvalidNight ?? !1,
		explicitNoNonwear: e.explicitNoNonwear ?? !1,
		needsConsensus: e.needsConsensus ?? !1,
		notes: e.notes
	};
}
function Gt(e) {
	return e.db && !$t.has(e.db) && $t.set(e.db, Ft += 1), JSON.stringify([
		e.db ? $t.get(e.db) : 0,
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
function Bt(e, t) {
	return null !== e && null !== t && Gt(e) === Gt(t);
}
function zt(e) {
	if (c(e.currentFileSourceType)) return null;
	return null;
}
function Xt(e) {
	const t = zt(e);
	return t ? Ht.get(Gt(t)) ?? null : null;
}
function Yt(e, t, n = e.binding) {
	const r = {
		[Mt]: !0,
		generation: e.generation,
		fileId: n.fileId,
		date: n.date,
		identity: n,
		context: t
	};
	return Vt.set(r, e), Lt === e.key && Wt === e.generation && Dt(n, e.store.getState()) && !e.store.getState().nightLoading && Ut.add(r), r;
}
function Qt(e, t) {
	if (void 0 !== t && (e.context = gt(e.context, {
		...e.context,
		lastSavedAt: Date.now(),
		saveReceipt: {
			fileId: e.binding.fileId,
			date: e.binding.date,
			text: t
		}
	})), Xt(e.store.getState()) !== e) return;
	const n = e.log[0]?.failure;
	e.store.setState({
		isDirty: e.log.some((e) => null !== e.failure || null != e.prepared?.mutation) || e.drags.size > 0,
		isSaving: null !== e.runner && !n,
		saveError: n?.message ?? null,
		canDiscardNightChanges: n instanceof qe || n instanceof Ue,
		placementRejected: e.context.placementRejected,
		placementRejectionReason: e.context.placementRejectionReason,
		lastSavedAt: e.context.lastSavedAt,
		saveReceipt: e.context.saveReceipt
	});
}
async function Zt(e, t = e.binding) {
	var n;
	e.opened || (await (n = {
		fileId: t.fileId,
		date: t.date,
		actor: t.scope.actor,
		store: Xe(t.db, t.scope),
		algorithm: t.algorithm,
		detectionRule: t.detectionRule
	}, ze(n, () => Promise.resolve())), function(e, t) {
		const n = e.context, r = t ? Kt(t) : Jt(), a = Je(t), s = void 0 !== e.saved && JSON.stringify(Je(e.saved)) === JSON.stringify(a) && (null !== a.contentHash || E(e.saved ? Kt(e.saved) : null) === E(t ? r : null));
		void 0 === e.saved || s || (e.context = gt(n, xt(e.store, n))), e.saved = t, e.view = gt(n, {
			...r,
			...s ? {
				sleepMarkers: n.sleepMarkers,
				nonwearMarkers: n.nonwearMarkers
			} : {}
		});
		const o = e.context, i = !r.isInvalidNight && E(r.sleepMarkers) === E(o.proposalNight?.authoredSleepMarkers ?? []) && l(o.proposalNight, e.binding.fileId, e.binding.date, o.sleepMarkers);
		e.context = gt(o, {
			...o,
			...e.view,
			sleepMarkers: i ? o.sleepMarkers : e.view.sleepMarkers,
			proposalNight: i ? o.proposalNight : null
		}), e.opened = !0;
	}(e, await t.dataSource.loadMarkers(t.fileId, t.date, t.scope.actor, t.algorithm, t.detectionRule, t.db ?? void 0)), function(e, t) {
		if (!bt(e) || !e.shownOpen?.()) return;
		if (!e.opened) return void Qt(e);
		const n = e.store, r = n.getState(), a = Yt(e, r, t);
		if (e.identify?.(), s = {
			scope: t.scope,
			db: t.db,
			fileId: t.fileId,
			date: t.date,
			algorithm: t.algorithm,
			detectionRule: t.detectionRule,
			options: t.settings
		}, ht = s, !sn.owns(a, r)) return;
		var s;
		const o = e.view, i = e.context;
		r.showStoredNight(a, t.fileId, t.date, {
			...o,
			sleepMarkers: i.sleepMarkers,
			view: Nt(i)
		}), e.context = gt(e.context, n.getState()), Qt(e);
	}(e, t));
}
function en(e, t, n = e.binding) {
	if (void 0 === e.saved) throw new Error("The night has not opened; no write has a baseline.");
	const r = Je(e.saved);
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
function tn(e) {
	if (e.runner || e.recovering || !e.log.length || e.log[0].failure) return;
	let t;
	e.runner = new Promise((e) => {
		t = e;
	}), (async () => {
		for (; e.log.length && !e.log[0].failure;) {
			const t = e.log[0], r = Yt(e, t.token.context, t.token.identity);
			qt.set(r, {
				slot: t,
				run: (e) => e()
			}), Qt(e);
			try {
				if (t.prepared ??= await t.prepare(r), t.failure) throw t.prepared = null, t.failure;
				qt.delete(r);
				const n = t.prepared;
				let a;
				if (n.refusal) a = {
					status: "dropped",
					reason: n.refusal
				};
				else if (n.mutation) {
					if (!t.audit) throw new Error("An internal read cannot write a night.");
					const r = [...n.carried];
					a = await jt(t.token.identity, en(e, n.mutation, t.token.identity), {
						...t.audit,
						carried: r
					}, r);
				} else a = {
					status: "committed",
					night: e.saved ?? null
				};
				const s = e.saved ?? null;
				"committed" === a.status && n.mutation && (e.saved = a.night, n.accepting && (e.context = gt(e.context, {
					...e.context,
					acceptingProposal: null
				}), e.store.getState().settleProposalAcceptance(n.accepting, !0))), e.log.shift(), "committed" !== a.status || !sn.holds(t.token, e.store.getState()) && Ut.has(t.token) || t.options.onCommitted?.(a.night), t.settle(a), Qt(e, "committed" === a.status && n.mutation && a.night ? dn(s, a.night, e.binding.date, n.undone) : void 0);
			} catch (n) {
				qt.delete(r), t.failure = n instanceof Error ? n : new Error(String(n)), t.prepared?.mutation || (t.prepared = null), t.settle({
					status: "dropped",
					reason: `${t.failure.message} Return to the Sleep page and use Retry.`
				}), t.failure instanceof qe || t.failure instanceof Ue || !(t.retries < Ot) || (t.retries += 1, t.retryTimer = setTimeout(() => {
					t.retryTimer = null, t.failure = null, tn(e);
				}, 2 ** t.retries * 1e3)), Qt(e);
			}
		}
		e.runner = null, Qt(e), t();
	})();
}
async function nn(e) {
	const t = Xt(e.getState());
	return !t || rn(t);
}
async function rn(e) {
	return tn(e), await an(e), 0 === e.log.length;
}
async function an(e) {
	for (; e.runner;) await e.runner;
}
const sn = {
	executor: (e) => qt.get(e)?.run ?? null,
	fail: (e, t) => {
		const n = qt.get(e)?.slot;
		n && (n.failure = t instanceof Error ? t : new Error(String(t)));
	},
	holds: (e, t = Vt.get(e)?.store.getState() ?? e.context) => !t.nightLoading && sn.owns(e, t),
	owns: (e, t = Vt.get(e)?.store.getState() ?? e.context) => {
		const n = Vt.get(e);
		return void 0 !== n && n.opened && Lt === n.key && Wt === e.generation && n.generation === e.generation && Dt(n.binding, t);
	},
	night: (e) => Vt.get(e)?.view ?? null,
	context: (e) => Vt.get(e)?.context ?? e.context,
	updateContext: (e, t) => {
		const n = Vt.get(e);
		n && (n.context = gt(n.context ?? t, t));
	},
	write: (e, t, n, r) => {
		const a = Vt.get(e), s = qt.get(e);
		if (!a || !s) throw new Error("A night write requires its proposal's executor.");
		a.view = gt(a.context ?? e.context, t), r && (a.context = gt(a.context ?? r, {
			...r,
			...a.view
		})), s.slot.carried.push(...n);
	},
	enqueue: (e, t, n = !1, r) => {
		const a = Vt.get(e);
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
				audit: r.readOnly ? null : At(t.identity, r.acts, o),
				baseline: null,
				prepared: null,
				failure: null,
				carried: o,
				retries: 0,
				retryTimer: null
			};
			return e.log.push(i), tn(e), Qt(e), i;
		}(a, e, async (r) => {
			await Zt(a, e.identity);
			const i = sn.context(r);
			qt.get(r).slot.baseline ??= Kt(Pt(i));
			const l = i._editGeneration;
			return o = await t(r), n || sn.context(r)._editGeneration === l ? {
				mutation: null,
				accepting: null,
				carried: [],
				undone: !1
			} : function(e, t, n = e.store) {
				const r = sn.holds(t, n.getState()), a = r ? n.getState() : e.context, s = r ? a.acceptingProposal : null;
				return {
					mutation: r ? Et(t.identity, s, a) : {
						kind: "save",
						data: e.view
					},
					accepting: s,
					carried: r ? n.takeShownEdits(t.identity) : qt.get(t).slot.carried,
					undone: a.markerHistoryIndex < a.markerHistory.length - 1
				};
			}(a, r, s);
		}).settled.then((e) => ("dropped" !== e.status || "boolean" != typeof o) && o);
	},
	waiting: (e) => e ? (Vt.get(e)?.log.length ?? 0) > 0 : [...Ht.values()].some((e) => e.log.length > 0),
	setDragging: (e, t) => {
		const n = Vt.get(e);
		t ? n?.drags.add(e) : n?.drags.delete(e);
	},
	scopeChanging: () => _t > 0,
	hasUnsavedWork: () => [...Ht.values()].some((e) => e.log.length > 0 || e.drags.size > 0),
	settled: async () => {
		await Promise.all([...Ht.values()].map(an));
	}
}, on = (e) => null === e ? "--:--" : kt(e);
function ln(e) {
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
function cn(e, t, n) {
	if (t === n || null === t || null === n) return null;
	const r = Math.abs(n - t);
	return `moved ${e} ${r >= 60 ? `${String(Math.round(r / 60))} min` : `${String(r)} s`} ${n < t ? "earlier" : "later"}`;
}
function dn(e, t, n, r) {
	const a = e ? ln(e) : [], s = ln(t), o = (e, t) => e.label === t.label && e.start === t.start && e.end === t.end, i = a.filter((e) => !s.some((t) => o(t, e))), l = s.filter((e) => !a.some((t) => o(e, t))), c = [];
	for (const u of i) {
		const e = l.findIndex((e) => e.label === u.label);
		if (-1 === e) {
			c.push(`deleted ${u.label} ${on(u.start)}–${on(u.end)}`);
			continue;
		}
		const [t] = l.splice(e, 1);
		if (!t) continue;
		const n = [cn(u.startName, u.start, t.start), cn(u.endName, u.end, t.end)].filter((e) => null !== e);
		c.push(n.length > 0 ? n.join(" and ") : `changed ${u.label}`);
	}
	for (const u of l) c.push(`${r ? "restored" : "saved"} ${u.label} ${on(u.start)}–${on(u.end)}`);
	(e?.isInvalidNight ?? !1) !== t.isInvalidNight && c.push(t.isInvalidNight ? "marked invalid night" : "cleared invalid night"), (e?.explicitNoNonwear ?? !1) !== (t.explicitNoNonwear ?? !1) && c.push(t.explicitNoNonwear ? "confirmed no nonwear" : "cleared no-nonwear"), (e?.needsConsensus ?? !1) !== t.needsConsensus && c.push(t.needsConsensus ? "flagged for consensus" : "unflagged for consensus"), (e?.notes ?? "") !== t.notes && c.push("saved note");
	const d = c.length > 0 ? c.join("; ") : "nothing changed";
	return r ? `Undid — ${d} on ${n}` : `${d.charAt(0).toUpperCase()}${d.slice(1)} on ${n}`;
}
async function un(e, t, n) {
	await Promise.all([...Ht.values()].filter((r) => r.binding.db === e && r.binding.fileId === t && (!n || r.binding.date === n.date && r.binding.scope.actor === n.username)).map(an));
}
export { ve as A, H as B, Se as C, _e as D, Pe as E, ne as F, ce as I, U as L, fe as M, ue as N, be as O, pe as P, V as R, Re as S, je as T, ot as _, sn as a, Ve as b, Rt as c, pt as d, ut as f, Ye as g, Je as h, Tt as i, we as j, Me as k, kt as l, ct as m, un as n, yt as o, gt as p, nn as r, Bt as s, zt as t, vt as u, lt as v, Ae as w, Oe as x, st as y, F as z };
