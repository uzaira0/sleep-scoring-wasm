import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { i as t } from "./workers-1tjevR35.js";
import { f as n, g as r, m as a, nn as s, qt as o, tn as i, x as l, yn as c } from "./schema-CubsPrjz.js";
import { c as d, r as u, u as p } from "./legacy-invalid-night-BxvRkrkV.js";
import { a as g, o as f } from "./content-hash-BtD8CeUH.js";
import { _ as m, g as h, m as w, n as k, o as v, s as y, t as I, v as N } from "./workspace-db-BRMmWdCa.js";
import { a as M, i as x } from "./project-revision-BvAwTwFG.js";
import { S as _, b as S, c as b, i as C, m as T, u as R, x as D, y as A } from "./sleep-period-detection-BiQXNMp7.js";
import { t as P } from "./audit-log-XaMzFaoe.js";
import { t as E } from "./audit-hash-rfcCP1yx.js";
import { i as j, t as O } from "./wal-CFwBORS3.js";
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
	const i = r.onsetTimestamp, l = r.offsetTimestamp, c = s.onsetTimestamp, d = s.offsetTimestamp;
	if (null == i || null == l || null == c || null == d) return {
		ok: !1,
		reason: "no-boundaries"
	};
	const u = Math.min(i, c), p = Math.max(l, d), g = A(r, s), f = Math.min(t, a), m = W({
		...g !== o.MAIN_SLEEP || T(r) ? r : s,
		onsetTimestamp: u,
		offsetTimestamp: p,
		markerType: g
	}), h = e.filter((e, n) => n !== t && n !== a);
	return h.splice(f, 0, m), {
		ok: !0,
		markers: L(h),
		mergedIndex: f
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
function B(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function G(e, t) {
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
	return e.filter((e) => e.markerType === o.MAIN_SLEEP).length;
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
	const { isInvalidNightImplicit: n, ...r } = e, a = J(t.isInvalidNight) ?? e.isInvalidNight;
	return {
		...r,
		isInvalidNight: a,
		...a && !0 === J(t.isInvalidNightImplicit) ? { isInvalidNightImplicit: !0 } : {}
	};
}
function ae(e, t) {
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
		...re(e, r),
		sleepMarkers: a,
		nonwearMarkers: s,
		explicitNoNonwear: J(r.explicitNoNonwear) ?? e.explicitNoNonwear,
		needsConsensus: J(r.needsConsensus) ?? e.needsConsensus,
		notes: K(r.notes) ?? e.notes
	} };
}
const se = {
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
		const a = K(t.markerType) ?? S(e.sleepMarkers, e), s = [...e.sleepMarkers, {
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
				explicitNoNonwear: G(t, e.explicitNoNonwear)
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
			nonwearMarkers: B(e.nonwearMarkers.filter((e, t) => t !== n))
		} } : { state: {
			...e,
			sleepMarkers: B(e.sleepMarkers.filter((e, t) => t !== n))
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
				...re(e, t),
				sleepMarkers: n,
				nonwearMarkers: r,
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
	undo: ae,
	redo: ae,
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
			explicitNoNonwear: G(n, e.explicitNoNonwear)
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
		const { isInvalidNightImplicit: r, ...a } = e;
		if (!n) return { state: {
			...a,
			isInvalidNight: !1
		} };
		const s = B(e.sleepMarkers.filter((e) => e.markerType !== o.MAIN_SLEEP)), i = !0 === J(t.implicit);
		return { state: {
			...a,
			isInvalidNight: !0,
			...i ? { isInvalidNightImplicit: !0 } : {},
			sleepMarkers: s
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
	candidate_copied: ae
};
function oe(e, t, n = {}) {
	const r = u(t), a = r.payload ?? {}, s = se[r.action], o = s ? s(e, a, r) : { state: e }, i = o.state;
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
function ie(e) {
	return "object" != typeof e || null === e ? null : "string" == typeof e.action ? u(e) : null;
}
function le(e, t) {
	if ("markers_saved" !== e.action) return !1;
	const n = e.payload ?? {}, r = q(n.sleepCount), a = q(n.nonwearCount);
	return null !== r && null !== a && (r !== t.sleepMarkers.length || a !== t.nonwearMarkers.length);
}
function ce(e) {
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
		const e = ie(a), s = e ? oe(n, e) : {
			state: n,
			violations: [],
			reconstructed: !1
		};
		n = s.state, null !== e && !0 === d[e.action]?.stateKeyframe && s.reconstructed ? r = "exact" : s.reconstructed || "exact" !== r || (r = "divergent"), "exact" === r && null !== e && le(e, n) && (r = "divergent"), t.push({
			state: n,
			basis: r,
			violations: s.violations
		});
	}
	return t;
}
function de(e) {
	const t = [
		`${String(e.sleepMarkers.length)} sleep`,
		`${String(e.nonwearMarkers.length)} nonwear`,
		`invalid-night:${String(e.isInvalidNight)}`
	];
	return e.explicitNoNonwear && t.push("no-nonwear"), e.needsConsensus && t.push("needs-consensus"), e.notes.length > 0 && t.push(`notes ${String(e.notes.length)}ch`), t.join(", ");
}
function ue(e) {
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
async function pe(e, n = t()) {
	if (0 === e.length) return [];
	const r = await n.settleManualNonwearNights(e.map(ue));
	if (r.length !== e.length) throw new Error(`The manual-nonwear night rule answered ${String(r.length)} settle(s) for ${String(e.length)} night(s).`);
	return r;
}
function ge(e, t) {
	return 0 === t.removed.length ? e : t.kept.map((t, n) => ({
		...e[t],
		markerIndex: n + 1
	}));
}
async function fe(e, t) {
	const n = ce(e), r = e.flatMap((e, t) => {
		const r = e.payload, a = n[t]?.state;
		return "session_start" === e.action && null != r && "boolean" != typeof r.manualNonwearInSleep && void 0 !== a && Array.isArray(r.sleepMarkers) && Array.isArray(r.nonwearMarkers) && r.sleepMarkers.length === a.sleepMarkers.length && r.nonwearMarkers.length === a.nonwearMarkers.length ? [t] : [];
	});
	if (0 === r.length) return n;
	const a = await async function(e, t) {
		return (await pe(e, t)).map((e) => e.removed.length > 0);
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
	}), ce(s);
}
function me(e) {
	return null === e ? i : e;
}
function he(e) {
	return null == e ? s : e;
}
function we(e) {
	return "__legacy_dr__" === e ? null : e;
}
function ke(e) {
	return {
		...e,
		algorithm: (t = e.algorithm, "__legacy__" === t ? null : t),
		detectionRule: we(e.detectionRule)
	};
	var t;
}
function ve(e) {
	const t = (e) => Array.isArray(e) ? e.map(t) : e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, n]) => [e, t(n)])) : e;
	return JSON.stringify(t(e));
}
function ye(e, { date: t, username: n }, r, a) {
	const s = e.filter((e) => e.date === t && e.username === n);
	if (void 0 !== r) {
		const e = me(r), t = he(a), n = (e, t) => s.find((n) => n.algorithm === e && n.detectionRule === t);
		return n(e, t) ?? ("__legacy_dr__" !== t ? n(e, "__legacy_dr__") : void 0) ?? (null !== r ? n("__legacy__", "__legacy_dr__") : void 0);
	}
	return s.reduce((e, t) => !e || (t.id ?? 0) < (e.id ?? 0) ? t : e, void 0);
}
function Ie(e, t, n, r) {
	return r.transaction("r", r.markers, async () => ye(await r.markers.where("[fileId+date+username]").equals([
		e.fileId,
		e.date,
		e.username
	]).toArray(), e, t, n));
}
async function Ne(e, t, n, r, a, s = I()) {
	const o = await Ie({
		fileId: e,
		date: t,
		username: n
	}, r, a, s);
	return o ? ke(o) : void 0;
}
const Me = [
	"manualNonwearInSleep",
	"periodMetrics",
	"syncStatus"
];
function xe(e, t, n) {
	const r = Object.fromEntries(Me.filter((e) => e in t).map((e) => [e, t[e]]));
	return n.markers.update(e, r);
}
async function _e(e, t = I(), n, r) {
	const a = t;
	await x(a, [a.markers], async () => {
		if (n) {
			const t = await a.markers.get(e);
			if (!t || ve(ke(t)) !== ve(n)) return;
		}
		await xe(e, { syncStatus: "conflict" }, a);
	}, r);
}
function Se(e) {
	return `${m.SCORED_VARIANT_WARM}:${String(e)}`;
}
function be(e = h.getState().jobs) {
	if (!k()) return null;
	const t = Object.values(e).reverse().find((e) => w(e) && e.workspaceId === I().name && e.kind === m.SCORED_VARIANT_WARM && e.status !== N.DONE && e.status !== N.CANCELLED);
	return t ? {
		fileId: Number(t.key.split(":").at(-1)),
		done: t.done,
		total: t.total,
		...t.status === N.FAILED ? { failed: !0 } : {}
	} : null;
}
function Ce(e, t) {
	if (!k() || t && I() !== t) return;
	const n = (t ?? I()).name, r = h.getState();
	if (!e) return;
	const a = Se(e.fileId), s = `${n}:${a}`;
	r.jobs[s] && !e.failed || r.update(s, {
		id: s,
		workspaceId: n,
		key: a,
		kind: m.SCORED_VARIANT_WARM,
		label: "Scoring variants",
		controller: r.jobs[s]?.controller ?? new AbortController(),
		done: e.done,
		total: e.total,
		status: e.failed ? N.FAILED : N.RUNNING
	});
}
const Te = /* @__PURE__ */ new Set(), Re = /* @__PURE__ */ new WeakMap();
async function De(e, t) {
	const n = Re.get(e) ?? {
		depth: 0,
		files: /* @__PURE__ */ new Set()
	};
	Re.set(e, n), n.depth++;
	try {
		return await t();
	} finally {
		if (0 === --n.depth) {
			Re.delete(e);
			for (const t of n.files) Pe(t, e, n.files);
		}
	}
}
const Ae = /* @__PURE__ */ new WeakMap();
function Pe(e, t, n) {
	const r = Re.get(t);
	if (r) r.files.add(e);
	else for (const a of Te) n && n.size > 1 ? a(e, t, void 0, n) : a(e, t);
}
function Ee(e) {
	return Te.add(e), () => Te.delete(e);
}
const je = /* @__PURE__ */ new Set();
function Oe(e, t) {
	for (const n of je) n(e, t);
}
const He = "scored-variant-warm-backfill-v1", $e = `placement-results-backfill-v${String(2)}`, Fe = "placement-results-backfill-generation-v1", Le = /* @__PURE__ */ new Set();
function We(e, t, n) {
	const r = n ? Ae.get(n) : void 0;
	if (r?.db !== t) for (const a of Le) a([e], t);
	else r.files.add(e);
}
const Ve = /* @__PURE__ */ new WeakMap();
async function Ue(e, t = I(), n) {
	let r = c.currentTransaction;
	for (; r?.parent;) r = r.parent;
	if (await M(t, [t.projectMeta], async () => {
		const e = await t.projectMeta.get(Fe);
		await t.projectMeta.put({
			key: Fe,
			revision: (e?.revision ?? 0) + 1
		}), await t.projectMeta.delete($e);
	}, n), !r || r.db !== t) {
		for (const r of new Set(e)) We(r, t, n);
		return;
	}
	let a = Ve.get(r);
	if (!a) {
		a = /* @__PURE__ */ new Set(), Ve.set(r, a);
		const e = a;
		r.idbtrans.addEventListener("complete", () => {
			for (const r of e) We(r, t, n);
		}, { once: !0 });
	}
	for (const s of e) a.add(s);
}
var qe = class extends Error {
	constructor() {
		super("The recording was deleted; this night was not saved."), this.name = "RecordingDeletedError";
	}
}, Je = class extends Error {
	constructor() {
		super("Markers changed during rescore or in another tab. Retry keeps the night on screen; reopening the night shows the stored one."), this.name = "NightConflictError";
	}
};
function Ke(e) {
	return {
		contentHash: e?.contentHash ?? null,
		needsConsensus: e?.needsConsensus ?? !1
	};
}
function Be(e, t) {
	const n = Ke(e);
	return n.contentHash === t.contentHash && n.needsConsensus === t.needsConsensus;
}
const Ge = (e, t) => JSON.stringify([e, t]), ze = /* @__PURE__ */ new Map();
function Xe(e, t) {
	const n = ((e) => Ge(e.store, e.fileId) + JSON.stringify([
		e.actor,
		e.date,
		me(e.algorithm),
		he(e.detectionRule)
	]))(e);
	return function(e, t, n) {
		const r = e.length > 0 ? Promise.all(e).then(n) : n(), a = r.then(() => {}, () => {});
		for (const s of t) ze.set(s, a), a.then(() => {
			ze.get(s) === a && ze.delete(s);
		});
		return r;
	}([ze.get(n), ze.get((r = e.store, a = e.fileId, `${Ge(r, a)}*`))].filter((e) => void 0 !== e), [n], t);
	var r, a;
}
function Ye(e, t) {
	return e?.name ?? `${t?.sourceKey ?? "server"}:${t?.workspaceId ?? ""}`;
}
function Qe(e) {
	Ze(e.binding, e, e);
}
function Ze(e, t, n) {
	P.recordNightEdit(e, {
		fileId: t.fileId,
		analysisDate: t.date,
		action: n.action,
		...void 0 === n.payload ? {} : { payload: n.payload }
	});
}
function et(e) {
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
const tt = (e, t) => {
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
function nt(e, t) {
	if (null === t) return c.Promise.resolve();
	const n = t.binding;
	if (!n) throw new Error("A local night write requires the audit binding captured at its act.");
	const r = (t) => ({
		fileId: e.fileId,
		analysisDate: e.date,
		action: t.action,
		...void 0 === t.payload ? {} : { payload: t.payload }
	}), a = tt(e, t);
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
function rt(e, t, n) {
	return j([
		e.markers,
		e.scoringSessions,
		e.markerProvenance,
		e.actiwareFileData,
		e.auditLog,
		e.files
	], t, e, n);
}
function at(e) {
	if (Array.isArray(e)) return e.map(at);
	if (e && "object" == typeof e) {
		const t = {};
		for (const [n, r] of Object.entries(e)) null != r && (t[n] = at(r));
		return t;
	}
	return e;
}
const st = (e, t) => ({
	store: Ye(e),
	actor: t.username,
	fileId: t.fileId,
	date: t.date,
	algorithm: t.algorithm,
	detectionRule: t.detectionRule
});
function ot(e, t, n, r) {
	return Xe(st(t, e), async () => {
		const s = await Ne(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), o = await n(s ? ke(s) : null);
		if (!o) return null;
		null !== r && await P.settleWrites();
		const i = "save" === o.kind ? await lt(o.input, t, r) : await async function(e, t, n, r) {
			const { fileId: s, date: o, username: i, algorithm: l, detectionRule: c, expected: d } = e;
			let u = !1;
			const p = await rt(t, async () => {
				if (void 0 === await t.files.get(s)) throw new qe();
				const p = await Ie(e, l, c, t);
				if (void 0 !== d && !Be(p, d)) return p?.id && await _e(p.id, t, p), u = !0, {
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
					return await nt(e, n), e;
				}
				const g = ke(p), f = [p];
				await O({
					op: "markers_delete",
					fileId: s,
					username: i,
					payload: {
						kind: "night_unscored",
						date: o,
						prevContentHash: f[0]?.contentHash
					}
				});
				const m = new Set(f.flatMap((e) => void 0 === e.id ? [] : [e.id]));
				await t.markers.bulkDelete([...m]);
				const h = await t.markerProvenance.get(s);
				h && await t.markerProvenance.put({
					fileId: s,
					rows: h.rows.filter((e) => !m.has(e.id))
				}), f.some((e) => "auto_score" === e.username || a({
					...e,
					id: e.id
				}).nonwearDecided) && await Ue([s], t, r);
				const w = {
					fileId: s,
					date: o,
					username: i,
					previous: g,
					committed: null,
					changed: null !== et(g)
				};
				return await nt(w, n), w;
			}, r);
			if (u) throw new Je();
			if (null !== p.previous && "auto_score" !== i) {
				const { scheduleGgirRecompute: e } = await import("./local-export-worker-CE384ciz.js").then((e) => e.t);
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
function it(e, t, n) {
	return Xe(st(t, {
		fileId: e.fileId,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm ?? null,
		detectionRule: e.detectionRule ?? null
	}), async () => {
		null !== n && await P.settleWrites();
		const r = await lt(e, t, n);
		return {
			record: r.committed,
			changed: r.changed
		};
	});
}
async function lt(e, t, r) {
	const { fileId: s, date: i, username: l, sleepMarkers: d, nonwearMarkers: u, isInvalidNight: p, isInvalidNightImplicit: m, notes: h, explicitNoNonwear: w, needsConsensus: k, algorithm: v = null, scoringContext: y, detectionRule: I = null, periodGuider: N = null, sleepPeriodDetectionConfig: M = null, algorithmVersion: x = null } = e, _ = null !== v ? await c.waitFor(async function(e) {
		let t;
		if (e.extraParams) try {
			t = JSON.parse(e.extraParams);
		} catch {
			t = e.extraParams;
		}
		const n = at({
			algorithm: e.algorithm,
			detector: e.detector,
			guider: e.guider,
			sleep_period_detection_config: e.sleepPeriodDetectionConfig,
			scorer_version: e.scorerVersion,
			extra_params: t
		});
		return f(ve(n));
	}({
		algorithm: v,
		detector: I,
		guider: N,
		sleepPeriodDetectionConfig: M,
		scorerVersion: x
	})) : null, S = y ?? (null !== v && null !== _ ? {
		appVersion: "local",
		algorithmVersions: { [v]: x ?? "1" },
		paramsHash: _,
		stampedAt: (/* @__PURE__ */ new Date()).toISOString()
	} : void 0), b = null !== v && null !== _ ? await c.waitFor(f(ve(at({
		fileId: s,
		date: i,
		username: l,
		algorithm: v,
		scorerVersion: x,
		detector: I,
		guider: N,
		sleepPeriodDetection: M,
		params: null,
		parameterSetHash: _
	})))) : null, C = me(v), T = he(I), D = e.restoredFromBackup;
	let A = !1;
	const P = await rt(t, async (f) => {
		const y = await t.files.get(s);
		if (void 0 === y) throw new qe();
		const P = await Ie({
			fileId: s,
			date: i,
			username: l
		}, v, I, t), E = P?.algorithm === C && P.detectionRule === T ? P : void 0, j = P ? ke(P) : void 0;
		if (D && E && E.lastModifiedAt >= D.lastModifiedAt) return {
			fileId: s,
			date: i,
			username: l,
			previous: j ?? null,
			committed: ke(E),
			changed: !1
		};
		if (void 0 !== e.expected) {
			if (!Be(j, e.expected)) return P?.id && await _e(P.id, t, P), A = !0, {
				fileId: s,
				date: i,
				username: l,
				previous: j ?? null,
				committed: j ?? null,
				changed: !1
			};
			if (!0 !== e.guardHashOnly && j?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
		}
		const H = D ? E : j, $ = u ?? H?.nonwearMarkers ?? [], F = p ?? H?.isInvalidNight ?? !1, L = void 0 === D && R(y, j ?? { sleepMarkers: [] }, { sleepMarkers: d }), W = F || L, V = w ?? H?.explicitNoNonwear ?? !1, U = k ?? H?.needsConsensus ?? !1, q = 0 === d.length || 0 === $.length ? null : (await c.waitFor(pe([{
			sleepMarkers: d,
			nonwearMarkers: $,
			isInvalidNight: W
		}])))[0] ?? null, J = q ? ge(d, q) : d, K = W || (q?.invalidates ?? !1), B = K && !q?.invalidates && (F ? void 0 === p ? !0 === H?.isInvalidNightImplicit : !0 === m : L);
		if (K && J.some((e) => e.markerType === o.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
		const G = await c.waitFor(g({
			sleepMarkers: J,
			nonwearMarkers: $,
			isInvalidNight: K,
			explicitNoNonwear: V,
			notes: h
		})), z = null !== v ? await async function(e, t, r) {
			const { fileId: a, date: s, username: o, algorithm: i } = t, l = e.table("scoringSessions"), c = await l.where("[fileId+date+username+algorithm]").equals([
				a,
				s,
				o,
				i
			]).first();
			if (c) return await l.update(c.sessionId, {
				scorerVersion: r.scorerVersion ?? null,
				detector: r.detector ?? null,
				guider: r.guider ?? null,
				sleepPeriodDetection: r.sleepPeriodDetectionConfig ?? null,
				params: r.params ?? null,
				parameterSetHash: r.parameterSetHash,
				contentHash: r.contentHash,
				lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
			}), c.sessionId;
			const d = n(), u = (/* @__PURE__ */ new Date()).toISOString();
			return await l.add({
				sessionId: d,
				fileId: a,
				date: s,
				username: o,
				algorithm: i,
				scorerVersion: r.scorerVersion ?? null,
				detector: r.detector ?? null,
				guider: r.guider ?? null,
				sleepPeriodDetection: r.sleepPeriodDetectionConfig ?? null,
				params: r.params ?? null,
				parameterSetHash: r.parameterSetHash,
				startedAt: u,
				syncStatus: "pending",
				contentHash: r.contentHash,
				lastModifiedAt: u
			}), d;
		}(f, {
			fileId: s,
			date: i,
			username: l,
			algorithm: v
		}, {
			scorerVersion: x,
			detector: I,
			guider: N,
			sleepPeriodDetectionConfig: M,
			params: null,
			parameterSetHash: _,
			contentHash: b
		}) : null, X = {
			fileId: s,
			date: i,
			username: l,
			algorithm: C,
			detectionRule: T,
			periodGuider: N,
			sleepPeriodDetectionConfig: M,
			algorithmVersion: x,
			scoringSessionId: z,
			manualNonwearInSleep: !1,
			sleepMarkers: J,
			nonwearMarkers: $,
			isInvalidNight: K,
			...B ? { isInvalidNightImplicit: !0 } : {},
			explicitNoNonwear: V,
			needsConsensus: U,
			notes: h,
			contentHash: G,
			syncStatus: "pending",
			lastModifiedAt: D?.lastModifiedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
			...void 0 !== S ? { scoringContext: S } : {},
			...void 0 !== D ? { restoredFromBackup: D.restoreId } : {}
		}, Y = {
			fileId: s,
			date: i,
			username: l,
			previous: j ?? null,
			committed: X,
			changed: et(j) !== et(X)
		};
		await nt(Y, r), E && JSON.stringify(E.sleepMarkers) === JSON.stringify(J) || await t.actiwareFileData.where("fileId").equals(s).modify({ actiwareStatisticsNeedsRecompute: !0 }), await O({
			op: "markers_put",
			fileId: s,
			username: l,
			...void 0 !== D ? { restoredFromBackup: D.restoreId } : {},
			payload: {
				date: i,
				sleepMarkers: J,
				nonwearMarkers: $,
				isInvalidNight: K,
				explicitNoNonwear: V,
				notes: h,
				needsConsensus: U,
				sleepPeriodDetectionConfig: M,
				contentHash: G,
				prevContentHash: E?.contentHash
			}
		});
		const Q = D ? E : P, Z = Q?.id ? await (async (e) => (await t.markers.update(e, (e) => {
			Object.assign(e, X), B || delete e.isInvalidNightImplicit, void 0 === D && delete e.restoredFromBackup;
		}), e))(Q.id) : await t.markers.add(X), ee = await t.markerProvenance.get(s), te = a({
			...X,
			id: Z
		}), ne = ee?.rows.find((e) => e.id === Z);
		return ("auto_score" === te.username || te.nonwearDecided !== (ne?.nonwearDecided ?? !1) || te.nonwearDecided && te.nonwearSpans !== ne?.nonwearSpans) && await Ue([s], t, e.signal), await t.markerProvenance.put({
			fileId: s,
			rows: [...(ee?.rows ?? []).filter((e) => e.id !== Z), te]
		}), Y;
	}, e.signal);
	if (A) throw new Je();
	return P;
}
async function ct(e, t, n) {
	return { changed: (await ot(e, t, () => Promise.resolve({
		kind: "unscore",
		expected: e.expected
	}), n)).changed };
}
function dt(e, t, n) {
	return xe(e, { periodMetrics: t }, n);
}
const ut = Symbol("marker-id");
function pt(e) {
	const t = e;
	return t[ut] ??= n();
}
function gt(e, t, r = !1) {
	return {
		...t ?? structuredClone(e),
		[ut]: r ? n() : pt(e)
	};
}
function ft(e, t) {
	const r = (e) => E(Object.fromEntries(Object.entries(e).filter(([e]) => "markerIndex" !== e))), a = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = r(n), t = a.get(e) ?? [];
		t.push(n), a.set(e, t);
	}
	const s = /* @__PURE__ */ new Map();
	return t.map((e) => {
		const t = r(e), o = s.get(t) ?? 0;
		return s.set(t, o + 1), void 0 !== e[ut] ? e : {
			...e,
			[ut]: a.get(t)?.[o]?.[ut] ?? n()
		};
	});
}
function mt(e, t) {
	return {
		...t,
		...void 0 !== t.sleepMarkers && t.sleepMarkers !== e.sleepMarkers ? { sleepMarkers: ft(e.sleepMarkers, t.sleepMarkers) } : {},
		...void 0 !== t.nonwearMarkers && t.nonwearMarkers !== e.nonwearMarkers ? { nonwearMarkers: ft(e.nonwearMarkers, t.nonwearMarkers) } : {}
	};
}
function ht() {
	const e = v();
	return e && y.getState().getWorkspace(e), function(e) {
		try {
			return localStorage.getItem(e);
		} catch {
			return null;
		}
	}("__e2eLocalMode"), "local";
}
let wt = null;
function kt(e, t, n) {
	return !wt || wt.scope.workspaceId === n.workspaceId && wt.scope.actor === n.actor && wt.scope.studyId === n.studyId && wt.scope.sourceKey === n.sourceKey || (wt = null), null !== wt && wt.fileId === e && wt.date === t ? wt : null;
}
function vt(e) {
	const t = /* @__PURE__ */ new Date(1e3 * e);
	return `${String(t.getUTCHours()).padStart(2, "0")}:${String(t.getUTCMinutes()).padStart(2, "0")}`;
}
function yt(e) {
	return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " ");
}
var It = e({
	bindShown: () => Xt,
	buildNightData: () => Tt,
	ensureOpened: () => en,
	fileSessionsSettled: () => pn,
	flushCurrentNight: () => rn,
	flushSession: () => an,
	isHeldOutbox: () => Ct,
	leavesNightUnscored: () => Rt,
	newNightContext: () => _t,
	nightSessions: () => on,
	nightShown: () => At,
	nightTokenBrand: () => Nt,
	outboxKey: () => Gt,
	sameNight: () => zt,
	sessionToken: () => Qt,
	setNightScopeChanging: () => bt,
	withoutUntouchedProposal: () => Dt
});
const Nt = Symbol("night-session"), Mt = Object.keys({
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
function xt(e) {
	return Object.fromEntries(Mt.map((t) => [t, e[t]]));
}
function _t(e, t = e.getState()) {
	return {
		...t,
		...xt(e.getInitialState()),
		...Kt(),
		isDirty: !1,
		isSaving: !1,
		saveError: null,
		nightLoading: !0
	};
}
let St = 0;
function bt(e) {
	St += e ? 1 : -1;
}
function Ct(e) {
	return Wt === e.key;
}
function Tt(e) {
	return {
		sleepMarkers: e.sleepMarkers.map((e) => gt(e, {
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
		nonwearMarkers: e.nonwearMarkers.map((e) => gt(e, {
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
function Rt(e, t, n, r) {
	return !(!e || e.fileId !== t || e.date !== n || r.isInvalidNight || r.explicitNoNonwear || r.needsConsensus || r.notes || (r.nonwearMarkers?.length ?? 0) > 0 || 0 !== Dt(e, t, n, r).sleepMarkers.length);
}
function Dt(e, t, n, a) {
	return r(e, t, n, a.sleepMarkers) ? {
		...a,
		sleepMarkers: e?.authoredSleepMarkers ?? []
	} : a;
}
function At(e, t) {
	const n = t.availableDates[t.currentDateIndex];
	if (null === t.currentFileId || !n) return !1;
	const r = function(e) {
		const { username: t, selectedStudyId: n } = e;
		return {
			sourceKey: ht(),
			workspaceId: v(),
			actor: t || "anonymous",
			studyId: n
		};
	}(t), a = t.nightLoading ? null : kt(t.currentFileId, n, r);
	return zt(e, {
		...e,
		scope: r,
		db: "local" === r.sourceKey && k() ? I() : null,
		fileId: t.currentFileId,
		date: n,
		algorithm: a ? a.algorithm : e.algorithm,
		detectionRule: a ? a.detectionRule : e.detectionRule
	});
}
function Pt(e, t, n) {
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
function Et(e, t = e.proposalNight ?? e.acceptingProposal) {
	return Dt(t, e.currentFileId ?? -1, e.availableDates[e.currentDateIndex] ?? "", Tt(e));
}
function jt(e, t, n) {
	const r = n.proposalNight ?? (n.acceptingProposal !== t ? n.acceptingProposal : null), a = Et(n, r);
	return void 0 !== e.dataSource?.unscoreNight && Rt(r, e.fileId, e.date, a) ? { kind: "unscore" } : {
		kind: "save",
		data: a
	};
}
async function Ot(e, t, n, r) {
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
					expected: s?.expected ?? Ke(n),
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
			for (const r of t?.carried ?? []) Ze(null, e, r);
			for (const r of t?.events?.(e.committed) ?? []) Ze(null, e, r);
			const n = tt(e, t);
			n && Ze(null, e, n);
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
const Ht = 3, $t = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new WeakMap();
let Lt = 0, Wt = null, Vt = 0;
const Ut = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakSet(), Jt = /* @__PURE__ */ new WeakMap(), Kt = () => ({
	sleepMarkers: [],
	nonwearMarkers: [],
	isInvalidNight: !1,
	explicitNoNonwear: !1,
	needsConsensus: !1,
	notes: ""
});
function Bt(e) {
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
function Gt(e) {
	return e.db && !Ft.has(e.db) && Ft.set(e.db, Lt += 1), JSON.stringify([
		e.db ? Ft.get(e.db) : 0,
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
function zt(e, t) {
	return null !== e && null !== t && Gt(e) === Gt(t);
}
function Xt(e) {
	if (l(e.currentFileSourceType)) return null;
	return null;
}
function Yt(e) {
	const t = Xt(e);
	return t ? $t.get(Gt(t)) ?? null : null;
}
function Qt(e, t, n = e.binding) {
	const r = {
		[Nt]: !0,
		generation: e.generation,
		fileId: n.fileId,
		date: n.date,
		identity: n,
		context: t
	};
	return Ut.set(r, e), Wt === e.key && Vt === e.generation && At(n, e.store.getState()) && !e.store.getState().nightLoading && qt.add(r), r;
}
function Zt(e, t) {
	if (void 0 !== t && (e.context = mt(e.context, {
		...e.context,
		lastSavedAt: Date.now(),
		saveReceipt: {
			fileId: e.binding.fileId,
			date: e.binding.date,
			text: t
		}
	})), Yt(e.store.getState()) !== e) return;
	const n = e.log[0]?.failure;
	e.store.setState({
		isDirty: e.log.some((e) => null !== e.failure || null != e.prepared?.mutation) || e.drags.size > 0,
		isSaving: null !== e.runner && !n,
		saveError: n?.message ?? null,
		canDiscardNightChanges: n instanceof Je || n instanceof qe,
		placementRejected: e.context.placementRejected,
		placementRejectionReason: e.context.placementRejectionReason,
		lastSavedAt: e.context.lastSavedAt,
		saveReceipt: e.context.saveReceipt
	});
}
async function en(e, t = e.binding) {
	var n;
	e.opened || (await (n = {
		fileId: t.fileId,
		date: t.date,
		actor: t.scope.actor,
		store: Ye(t.db, t.scope),
		algorithm: t.algorithm,
		detectionRule: t.detectionRule
	}, Xe(n, () => Promise.resolve())), function(e, t) {
		const n = e.context, a = t ? Bt(t) : Kt(), s = Ke(t), o = void 0 !== e.saved && JSON.stringify(Ke(e.saved)) === JSON.stringify(s) && (null !== s.contentHash || E(e.saved ? Bt(e.saved) : null) === E(t ? a : null));
		void 0 === e.saved || o || (e.context = mt(n, _t(e.store, n))), e.saved = t, e.view = mt(n, {
			...a,
			...o ? {
				sleepMarkers: n.sleepMarkers,
				nonwearMarkers: n.nonwearMarkers
			} : {}
		});
		const i = e.context, l = !a.isInvalidNight && E(a.sleepMarkers) === E(i.proposalNight?.authoredSleepMarkers ?? []) && r(i.proposalNight, e.binding.fileId, e.binding.date, i.sleepMarkers);
		e.context = mt(i, {
			...i,
			...e.view,
			sleepMarkers: l ? i.sleepMarkers : e.view.sleepMarkers,
			proposalNight: l ? i.proposalNight : null
		}), e.opened = !0;
	}(e, await t.dataSource.loadMarkers(t.fileId, t.date, t.scope.actor, t.algorithm, t.detectionRule, t.db ?? void 0)), function(e, t) {
		if (!Ct(e) || !e.shownOpen?.()) return;
		if (!e.opened) return void Zt(e);
		const n = e.store, r = n.getState(), a = Qt(e, r, t);
		if (e.identify?.(), s = {
			scope: t.scope,
			db: t.db,
			fileId: t.fileId,
			date: t.date,
			algorithm: t.algorithm,
			detectionRule: t.detectionRule,
			options: t.settings
		}, wt = s, !on.owns(a, r)) return;
		var s;
		const o = e.view, i = e.context;
		r.showStoredNight(a, t.fileId, t.date, {
			...o,
			sleepMarkers: i.sleepMarkers,
			view: xt(i)
		}), e.context = mt(e.context, n.getState()), Zt(e);
	}(e, t));
}
function tn(e, t, n = e.binding) {
	if (void 0 === e.saved) throw new Error("The night has not opened; no write has a baseline.");
	const r = Ke(e.saved);
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
function nn(e) {
	if (e.runner || e.recovering || !e.log.length || e.log[0].failure) return;
	let t;
	e.runner = new Promise((e) => {
		t = e;
	}), (async () => {
		for (; e.log.length && !e.log[0].failure;) {
			const t = e.log[0], r = Qt(e, t.token.context, t.token.identity);
			Jt.set(r, {
				slot: t,
				run: (e) => e()
			}), Zt(e);
			try {
				if (t.prepared ??= await t.prepare(r), t.failure) throw t.prepared = null, t.failure;
				Jt.delete(r);
				const n = t.prepared;
				let a;
				if (n.refusal) a = {
					status: "dropped",
					reason: n.refusal
				};
				else if (n.mutation) {
					if (!t.audit) throw new Error("An internal read cannot write a night.");
					const r = [...n.carried];
					a = await Ot(t.token.identity, tn(e, n.mutation, t.token.identity), {
						...t.audit,
						carried: r
					}, r);
				} else a = {
					status: "committed",
					night: e.saved ?? null
				};
				const s = e.saved ?? null;
				"committed" === a.status && n.mutation && (e.saved = a.night, n.accepting && (e.context = mt(e.context, {
					...e.context,
					acceptingProposal: null
				}), e.store.getState().settleProposalAcceptance(n.accepting, !0))), e.log.shift(), "committed" !== a.status || !on.holds(t.token, e.store.getState()) && qt.has(t.token) || t.options.onCommitted?.(a.night), t.settle(a), Zt(e, "committed" === a.status && n.mutation && a.night ? un(s, a.night, e.binding.date, n.undone) : void 0);
			} catch (n) {
				Jt.delete(r), t.failure = n instanceof Error ? n : new Error(String(n)), t.prepared?.mutation || (t.prepared = null), t.settle({
					status: "dropped",
					reason: `${t.failure.message} Return to the Sleep page and use Retry.`
				}), t.failure instanceof Je || t.failure instanceof qe || !(t.retries < Ht) || (t.retries += 1, t.retryTimer = setTimeout(() => {
					t.retryTimer = null, t.failure = null, nn(e);
				}, 2 ** t.retries * 1e3)), Zt(e);
			}
		}
		e.runner = null, Zt(e), t();
	})();
}
async function rn(e) {
	const t = Yt(e.getState());
	return !t || an(t);
}
async function an(e) {
	return nn(e), await sn(e), 0 === e.log.length;
}
async function sn(e) {
	for (; e.runner;) await e.runner;
}
const on = {
	executor: (e) => Jt.get(e)?.run ?? null,
	fail: (e, t) => {
		const n = Jt.get(e)?.slot;
		n && (n.failure = t instanceof Error ? t : new Error(String(t)));
	},
	holds: (e, t = Ut.get(e)?.store.getState() ?? e.context) => !t.nightLoading && on.owns(e, t),
	owns: (e, t = Ut.get(e)?.store.getState() ?? e.context) => {
		const n = Ut.get(e);
		return void 0 !== n && n.opened && Wt === n.key && Vt === e.generation && n.generation === e.generation && At(n.binding, t);
	},
	night: (e) => Ut.get(e)?.view ?? null,
	context: (e) => Ut.get(e)?.context ?? e.context,
	updateContext: (e, t) => {
		const n = Ut.get(e);
		n && (n.context = mt(n.context ?? t, t));
	},
	write: (e, t, n, r) => {
		const a = Ut.get(e), s = Jt.get(e);
		if (!a || !s) throw new Error("A night write requires its proposal's executor.");
		a.view = mt(a.context ?? e.context, t), r && (a.context = mt(a.context ?? r, {
			...r,
			...a.view
		})), s.slot.carried.push(...n);
	},
	enqueue: (e, t, n = !1, r) => {
		const a = Ut.get(e);
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
				audit: r.readOnly ? null : Pt(t.identity, r.acts, o),
				baseline: null,
				prepared: null,
				failure: null,
				carried: o,
				retries: 0,
				retryTimer: null
			};
			return e.log.push(i), nn(e), Zt(e), i;
		}(a, e, async (r) => {
			await en(a, e.identity);
			const i = on.context(r);
			Jt.get(r).slot.baseline ??= Bt(Et(i));
			const l = i._editGeneration;
			return o = await t(r), n || on.context(r)._editGeneration === l ? {
				mutation: null,
				accepting: null,
				carried: [],
				undone: !1
			} : function(e, t, n = e.store) {
				const r = on.holds(t, n.getState()), a = r ? n.getState() : e.context, s = r ? a.acceptingProposal : null;
				return {
					mutation: r ? jt(t.identity, s, a) : {
						kind: "save",
						data: e.view
					},
					accepting: s,
					carried: r ? n.takeShownEdits(t.identity) : Jt.get(t).slot.carried,
					undone: a.markerHistoryIndex < a.markerHistory.length - 1
				};
			}(a, r, s);
		}).settled.then((e) => ("dropped" !== e.status || "boolean" != typeof o) && o);
	},
	waiting: (e) => e ? (Ut.get(e)?.log.length ?? 0) > 0 : [...$t.values()].some((e) => e.log.length > 0),
	setDragging: (e, t) => {
		const n = Ut.get(e);
		t ? n?.drags.add(e) : n?.drags.delete(e);
	},
	scopeChanging: () => St > 0,
	hasUnsavedWork: () => [...$t.values()].some((e) => e.log.length > 0 || e.drags.size > 0),
	settled: async () => {
		await Promise.all([...$t.values()].map(sn));
	}
}, ln = (e) => null === e ? "--:--" : vt(e);
function cn(e) {
	return [...e.sleepMarkers.map((e) => ({
		start: e.onsetTimestamp,
		end: e.offsetTimestamp,
		label: e.markerType === o.NAP ? "nap" : "main sleep",
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
function dn(e, t, n) {
	if (t === n || null === t || null === n) return null;
	const r = Math.abs(n - t);
	return `moved ${e} ${r >= 60 ? `${String(Math.round(r / 60))} min` : `${String(r)} s`} ${n < t ? "earlier" : "later"}`;
}
function un(e, t, n, r) {
	const a = e ? cn(e) : [], s = cn(t), o = (e, t) => e.label === t.label && e.start === t.start && e.end === t.end, i = a.filter((e) => !s.some((t) => o(t, e))), l = s.filter((e) => !a.some((t) => o(e, t))), c = [];
	for (const u of i) {
		const e = l.findIndex((e) => e.label === u.label);
		if (-1 === e) {
			c.push(`deleted ${u.label} ${ln(u.start)}–${ln(u.end)}`);
			continue;
		}
		const [t] = l.splice(e, 1);
		if (!t) continue;
		const n = [dn(u.startName, u.start, t.start), dn(u.endName, u.end, t.end)].filter((e) => null !== e);
		c.push(n.length > 0 ? n.join(" and ") : `changed ${u.label}`);
	}
	for (const u of l) c.push(`${r ? "restored" : "saved"} ${u.label} ${ln(u.start)}–${ln(u.end)}`);
	(e?.isInvalidNight ?? !1) !== t.isInvalidNight && c.push(t.isInvalidNight ? "marked invalid night" : "cleared invalid night"), (e?.explicitNoNonwear ?? !1) !== (t.explicitNoNonwear ?? !1) && c.push(t.explicitNoNonwear ? "confirmed no nonwear" : "cleared no-nonwear"), (e?.needsConsensus ?? !1) !== t.needsConsensus && c.push(t.needsConsensus ? "flagged for consensus" : "unflagged for consensus"), (e?.notes ?? "") !== t.notes && c.push("saved note");
	const d = c.length > 0 ? c.join("; ") : "nothing changed";
	return r ? `Undid — ${d} on ${n}` : `${d.charAt(0).toUpperCase()}${d.slice(1)} on ${n}`;
}
async function pn(e, t, n) {
	await Promise.all([...$t.values()].filter((r) => r.binding.db === e && r.binding.fileId === t && (!n || r.binding.date === n.date && r.binding.scope.actor === n.username)).map(sn));
}
export { ye as A, H as B, be as C, Se as D, Ee as E, ne as F, de as I, U as L, fe as M, pe as N, Ce as O, ge as P, V as R, De as S, Oe as T, it as _, on as a, Ue as b, Dt as c, gt as d, pt as f, Qe as g, Ke as h, Rt as i, ke as j, Ne as k, vt as l, dt as m, pn as n, It as o, mt as p, rn as r, zt as s, Xt as t, yt as u, ct as v, Pe as w, He as x, ot as y, F as z };
