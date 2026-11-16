import { D as e, O as t, Pn as n, S as r, dn as s, f as a, fn as o, g as i, jn as l, m as c, rn as d } from "./schema-D8rqa1Y6.js";
import { r as u } from "./workers-CrU4fDAf.js";
import { a as p, et as f, it as g, n as m, nt as h, o as w, rt as k, st as v, t as y } from "./workspace-db-tot7PUXb.js";
import { c as I, r as N, u as M } from "./legacy-invalid-night-zjKZRSNb.js";
import { a as S, i as x } from "./content-hash-CZ-UAlQR.js";
import { a as _, i as b } from "./project-revision-CRZNLUWr.js";
import { K as T, Q as C, X as R, c as A, ct as D, lt as P, nt as E, st as j, ut as O } from "./per-source-defaults-DHWdfoJI.js";
import { n as $ } from "./store-lifecycle-CBdMPA62.js";
import { t as H } from "./audit-log-RFivnbbI.js";
import { t as F } from "./audit-hash-DNLMlimm.js";
import { i as L, t as W } from "./wal-dFFTBSLU.js";
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
	const s = e[t];
	if (!s) return {
		ok: !1,
		reason: "out-of-range"
	};
	const { onsetTimestamp: a, offsetTimestamp: o } = s;
	if (null == a || null == o) return {
		ok: !1,
		reason: "no-boundaries"
	};
	if (!(r > a && r <= n && n < o)) return {
		ok: !1,
		reason: "not-strictly-inside"
	};
	const [i, l] = P(s.markerType), c = G({
		...s,
		offsetTimestamp: r,
		markerType: i
	}), d = G({
		...s,
		onsetTimestamp: n,
		markerType: l
	}), u = [...e];
	return u.splice(t, 1, c, d), {
		ok: !0,
		markers: B(u),
		newIndex: t + 1
	};
}
function X(e, t, n) {
	const r = e[t];
	if (!r) return {
		ok: !1,
		reason: "out-of-range"
	};
	const s = "next" === n ? t + 1 : t - 1, a = e[s];
	if (!a) return {
		ok: !1,
		reason: "no-neighbor"
	};
	const o = r.onsetTimestamp, i = r.offsetTimestamp, l = a.onsetTimestamp, c = a.offsetTimestamp;
	if (null == o || null == i || null == l || null == c) return {
		ok: !1,
		reason: "no-boundaries"
	};
	const u = Math.min(o, l), p = Math.max(i, c), f = j(r, a), g = Math.min(t, s), m = G({
		...f !== d.MAIN_SLEEP || E(r) ? r : a,
		onsetTimestamp: u,
		offsetTimestamp: p,
		markerType: f
	}), h = e.filter((e, n) => n !== t && n !== s);
	return h.splice(g, 0, m), {
		ok: !0,
		markers: B(h),
		mergedIndex: g
	};
}
function Y(e) {
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
function se(e) {
	const t = re(e);
	return null === t ? null : t;
}
function ae(e) {
	const t = re(e);
	return null === t ? null : t;
}
function oe(e) {
	return e.filter((e) => e.markerType === d.MAIN_SLEEP).length;
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
		const n = Y(t.periodIndex), r = Y(t.at);
		return null !== n && null !== r && !z(e.sleepMarkers, n, r, Y(t.firstOffset) ?? r).ok;
	},
	merge_no_neighbor: ({ before: e, payload: t }) => {
		const n = Y(t.periodIndex), r = Z(t.direction);
		return null !== n && ("prev" === r || "next" === r) && !X(e.sleepMarkers, n, r).ok;
	},
	mutation_on_read_only_view: ({ context: e }) => !0 === e.readOnlyView,
	undo_beyond_history: ({ context: e }) => void 0 !== e.undoDepth && e.undoDepth <= 0,
	redo_beyond_history: ({ context: e }) => void 0 !== e.redoDepth && e.redoDepth <= 0
};
function ce(e, t) {
	const n = I[e]?.guards ?? [], r = [];
	for (const s of n) {
		const e = le[s], n = M[s];
		e && n && e(t) && r.push({
			guard: s,
			severity: n.severity
		});
	}
	return r;
}
function de(e, t) {
	const { isInvalidNightImplicit: n, ...r } = e, s = Q(t.isInvalidNight) ?? e.isInvalidNight;
	return {
		...r,
		isInvalidNight: s,
		...s && !0 === Q(t.isInvalidNightImplicit) ? { isInvalidNightImplicit: !0 } : {}
	};
}
function ue(e, t) {
	const n = t.stateAfter;
	if (null === n || "object" != typeof n) return {
		state: e,
		reconstructed: !1
	};
	const r = n, s = se(r.sleepMarkers), a = ae(r.nonwearMarkers);
	return null === s || null === a ? {
		state: e,
		reconstructed: !1
	} : { state: {
		...de(e, r),
		sleepMarkers: s,
		nonwearMarkers: a,
		explicitNoNonwear: Q(r.explicitNoNonwear) ?? e.explicitNoNonwear,
		needsConsensus: Q(r.needsConsensus) ?? e.needsConsensus,
		notes: Z(r.notes) ?? e.notes
	} };
}
const pe = {
	marker_placed: (e, t) => {
		if ("nonwear" === Z(t.category)) {
			const n = Y(t.startTimestamp), r = Y(t.endTimestamp);
			if (null === n || null === r) return {
				state: e,
				reconstructed: !1
			};
			const s = [...e.nonwearMarkers, {
				startTimestamp: n,
				endTimestamp: r,
				markerIndex: e.nonwearMarkers.length + 1
			}];
			return { state: {
				...e,
				nonwearMarkers: s,
				explicitNoNonwear: !1
			} };
		}
		const n = Y(t.onsetTimestamp), r = Y(t.offsetTimestamp);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const s = Z(t.markerType) ?? D(e.sleepMarkers, e), a = [...e.sleepMarkers, {
			onsetTimestamp: n,
			offsetTimestamp: r,
			markerIndex: e.sleepMarkers.length + 1,
			markerType: s
		}];
		return { state: {
			...e,
			sleepMarkers: a
		} };
	},
	marker_moved: (e, t) => {
		const n = t.after;
		if (null === n || "object" != typeof n) return {
			state: e,
			reconstructed: !1
		};
		const r = n, s = se(r.sleepMarkers), a = ae(r.nonwearMarkers);
		return null === s || null === a ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: s,
			nonwearMarkers: a
		} };
	},
	marker_adjusted: (e, t) => {
		const n = Y(t.periodIndex), r = t.updates;
		if (null === n || null === r || "object" != typeof r) return {
			state: e,
			reconstructed: !1
		};
		const s = r;
		if ("nonwear" === Z(t.category)) {
			const t = e.nonwearMarkers.map((e, t) => t === n ? {
				...e,
				...s
			} : e);
			return { state: {
				...e,
				nonwearMarkers: t,
				explicitNoNonwear: te(t, e.explicitNoNonwear)
			} };
		}
		const a = e.sleepMarkers.map((e, t) => t === n ? {
			...e,
			...s
		} : e);
		return { state: {
			...e,
			sleepMarkers: a
		} };
	},
	marker_deleted: (e, t) => {
		const n = Y(t.periodIndex);
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
		const n = Y(t.periodIndex), r = Y(t.at);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const s = z(e.sleepMarkers, n, r, Y(t.firstOffset) ?? r);
		return s.ok && s.markers ? { state: {
			...e,
			sleepMarkers: s.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	sleep_period_merged: (e, t) => {
		const n = Y(t.periodIndex), r = Z(t.direction);
		if (null === n || "prev" !== r && "next" !== r) return {
			state: e,
			reconstructed: !1
		};
		const s = X(e.sleepMarkers, n, r);
		return s.ok && s.markers ? { state: {
			...e,
			sleepMarkers: s.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	session_start: (e, t) => {
		const n = se(t.sleepMarkers), r = ae(t.nonwearMarkers);
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
		const r = Y(t.sleepCount), s = Y(t.nonwearCount);
		return null === r || null === s ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			saved: {
				at: n.clientTimestamp ?? null,
				sleepCount: r,
				nonwearCount: s
			}
		} };
	},
	undo: ue,
	redo: ue,
	auto_score_applied: (e, t) => {
		const n = se(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: n
		} };
	},
	auto_nonwear_applied: (e, t) => {
		const n = ae(t.markers);
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
		const { isInvalidNightImplicit: r, ...s } = e;
		if (!n) return { state: {
			...s,
			isInvalidNight: !1
		} };
		const a = ee(e.sleepMarkers.filter((e) => e.markerType !== d.MAIN_SLEEP)), o = !0 === Q(t.implicit);
		return { state: {
			...s,
			isInvalidNight: !0,
			...o ? { isInvalidNightImplicit: !0 } : {},
			sleepMarkers: a
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
function fe(e, t, n = {}) {
	const r = N(t), s = r.payload ?? {}, a = pe[r.action], o = a ? a(e, s, r) : { state: e }, i = o.state;
	return {
		state: i,
		violations: ce(r.action, {
			before: e,
			after: i,
			event: r,
			payload: s,
			context: n
		}),
		reconstructed: o.reconstructed ?? !0
	};
}
function ge(e) {
	return "object" != typeof e || null === e ? null : "string" == typeof e.action ? N(e) : null;
}
function me(e, t) {
	if ("markers_saved" !== e.action) return !1;
	const n = e.payload ?? {}, r = Y(n.sleepCount), s = Y(n.nonwearCount);
	return null !== r && null !== s && (r !== t.sleepMarkers.length || s !== t.nonwearMarkers.length);
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
	for (const s of e) {
		const e = ge(s), a = e ? fe(n, e) : {
			state: n,
			violations: [],
			reconstructed: !1
		};
		n = a.state, null !== e && !0 === I[e.action]?.stateKeyframe && a.reconstructed ? r = "exact" : a.reconstructed || "exact" !== r || (r = "divergent"), "exact" === r && null !== e && me(e, n) && (r = "divergent"), t.push({
			state: n,
			basis: r,
			violations: a.violations
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
		const r = e.payload, s = n[t]?.state;
		return "session_start" === e.action && null != r && "boolean" != typeof r.manualNonwearInSleep && void 0 !== s && Array.isArray(r.sleepMarkers) && Array.isArray(r.nonwearMarkers) && r.sleepMarkers.length === s.sleepMarkers.length && r.nonwearMarkers.length === s.nonwearMarkers.length ? [t] : [];
	});
	if (0 === r.length) return n;
	const s = await async function(e, t) {
		return (await ve(e, t)).map((e) => e.removed.length > 0);
	}(r.map((e) => n[e].state), t), a = [...e];
	return r.forEach((t, n) => {
		const r = e[t];
		a[t] = {
			...r,
			payload: {
				...r.payload,
				manualNonwearInSleep: !0 === s[n]
			}
		};
	}), he(a);
}
function Ne(e) {
	return null === e ? s : e;
}
function Me(e) {
	return null == e ? o : e;
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
function be(e, { date: t, username: n }, r, s) {
	const a = e.filter((e) => e.date === t && e.username === n);
	if (void 0 !== r) {
		const e = Ne(r), t = Me(s), n = (e, t) => a.find((n) => n.algorithm === e && n.detectionRule === t);
		return n(e, t) ?? ("__legacy_dr__" !== t ? n(e, "__legacy_dr__") : void 0) ?? (null !== r ? n("__legacy__", "__legacy_dr__") : void 0);
	}
	return a.reduce((e, t) => !e || (t.id ?? 0) < (e.id ?? 0) ? t : e, void 0);
}
function Te(e, t, n, r) {
	return r.transaction("r", r.markers, async () => be(await r.markers.where("[fileId+date+username]").equals([
		e.fileId,
		e.date,
		e.username
	]).toArray(), e, t, n));
}
async function Ce(e, t, n, r, s, a = y()) {
	const o = await Te({
		fileId: e,
		date: t,
		username: n
	}, r, s, a);
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
async function De(e, t = y(), n, r) {
	const s = t;
	await b(s, [s.markers], async () => {
		if (n) {
			const t = await s.markers.get(e);
			if (!t || _e(xe(t)) !== _e(n)) return;
		}
		await Ae(e, { syncStatus: "conflict" }, s);
	}, r);
}
function Pe(e) {
	return `${k.SCORED_VARIANT_WARM}:${String(e)}`;
}
function Ee(e = h.getState().jobs) {
	if (!m()) return null;
	const t = Object.values(e).reverse().find((e) => f(e) && e.workspaceId === y().name && e.kind === k.SCORED_VARIANT_WARM && e.status !== g.DONE && e.status !== g.CANCELLED);
	return t ? {
		fileId: Number(t.key.split(":").at(-1)),
		done: t.done,
		total: t.total,
		...t.status === g.FAILED ? { failed: !0 } : {}
	} : null;
}
function je(e, t) {
	if (!m() || t && y() !== t) return;
	const n = (t ?? y()).name, r = h.getState();
	if (!e) return;
	const s = Pe(e.fileId), a = `${n}:${s}`;
	r.jobs[a] && !e.failed || r.update(a, {
		id: a,
		workspaceId: n,
		key: s,
		kind: k.SCORED_VARIANT_WARM,
		label: "Scoring variants",
		controller: r.jobs[a]?.controller ?? new AbortController(),
		done: e.done,
		total: e.total,
		status: e.failed ? g.FAILED : g.RUNNING
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
	else for (const s of Oe) n && n.size > 1 ? s(e, t, void 0, n) : s(e, t);
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
	if (r?.db !== t) for (const s of Be) s([e], t);
	else r.files.add(e);
}
const ze = /* @__PURE__ */ new WeakMap();
async function Xe(e, t = y(), n) {
	let r = l.currentTransaction;
	for (; r?.parent;) r = r.parent;
	if (await _(t, [t.projectMeta], async () => {
		const e = await t.projectMeta.get(qe);
		await t.projectMeta.put({
			key: qe,
			revision: (e?.revision ?? 0) + 1
		}), await t.projectMeta.delete(Je);
	}, n), !r || r.db !== t) {
		for (const r of new Set(e)) Ge(r, t, n);
		return;
	}
	let s = ze.get(r);
	if (!s) {
		s = /* @__PURE__ */ new Set(), ze.set(r, s);
		const e = s;
		r.idbtrans.addEventListener("complete", () => {
			for (const r of e) Ge(r, t, n);
		}, { once: !0 });
	}
	for (const a of e) s.add(a);
}
var Ye = class extends Error {
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
		const r = e.length > 0 ? Promise.all(e).then(n) : n(), s = r.then(() => {}, () => {});
		for (const a of t) nt.set(a, s), s.then(() => {
			nt.get(a) === s && nt.delete(a);
		});
		return r;
	}([nt.get(n), nt.get((r = e.store, s = e.fileId, `${tt(r, s)}*`))].filter((e) => void 0 !== e), [n], t);
	var r, s;
}
function st(e, t) {
	return e?.name ?? `${t?.sourceKey ?? "server"}:${t?.workspaceId ?? ""}`;
}
function at(e) {
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
	if (null === t) return l.Promise.resolve();
	const n = t.binding;
	if (!n) throw new Error("A local night write requires the audit binding captured at its act.");
	const r = (t) => ({
		fileId: e.fileId,
		analysisDate: e.date,
		action: t.action,
		...void 0 === t.payload ? {} : { payload: t.payload }
	}), s = lt(e, t);
	return H.appendNightEditsInTransaction([
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
	store: st(e),
	actor: t.username,
	fileId: t.fileId,
	date: t.date,
	algorithm: t.algorithm,
	detectionRule: t.detectionRule
});
function ft(e, t, n, r) {
	return rt(pt(t, e), async () => {
		const s = await Ce(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), a = await n(s ? xe(s) : null);
		if (!a) return null;
		null !== r && await H.settleWrites();
		const o = "save" === a.kind ? await mt(a.input, t, r) : await async function(e, t, n, r) {
			const { fileId: s, date: a, username: o, algorithm: i, detectionRule: l, expected: d } = e;
			let u = !1;
			const p = await dt(t, async () => {
				if (void 0 === await t.files.get(s)) throw new Ye();
				const p = await Te(e, i, l, t);
				if (void 0 !== d && !et(p, d)) return p?.id && await De(p.id, t, p), u = !0, {
					fileId: s,
					date: a,
					username: o,
					previous: null,
					committed: null,
					changed: !1
				};
				if (!p) {
					const e = {
						fileId: s,
						date: a,
						username: o,
						previous: null,
						committed: null,
						changed: !1
					};
					return await ct(e, n), e;
				}
				const f = xe(p);
				await W({
					op: "markers_delete",
					fileId: s,
					username: o,
					payload: {
						kind: "night_unscored",
						date: a,
						algorithm: p.algorithm,
						detectionRule: p.detectionRule,
						prevContentHash: p.contentHash
					}
				}), await async function(e, t, n, r) {
					const s = new Set(n.flatMap((e) => void 0 === e.id ? [] : [e.id]));
					await e.markers.bulkDelete([...s]);
					const a = await e.markerProvenance.get(t);
					a && await e.markerProvenance.put({
						fileId: t,
						rows: a.rows.filter((e) => !s.has(e.id))
					}), n.some((e) => "auto_score" === e.username || c({
						...e,
						id: e.id
					}).nonwearDecided) && await Xe([t], e, r);
				}(t, s, [p], r);
				const g = {
					fileId: s,
					date: a,
					username: o,
					previous: f,
					committed: null,
					changed: null !== it(f)
				};
				return await ct(g, n), g;
			}, r);
			if (u) throw new Qe();
			if (null !== p.previous && "auto_score" !== o) {
				const { scheduleGgirRecompute: e } = await import("./local-export-shard-worker-Bn9FW-T0.js").then((e) => e.y);
				e(s, o, t, r);
			}
			return p;
		}({
			...e,
			expected: a.expected
		}, t, r, a.signal ?? e.signal);
		return {
			record: o.committed,
			changed: o.changed
		};
	});
}
function gt(e, t, n) {
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
async function mt(e, t, n) {
	const { fileId: r, date: s, username: o, sleepMarkers: i, nonwearMarkers: u, isInvalidNight: p, isInvalidNightImplicit: f, notes: g, explicitNoNonwear: m, needsConsensus: h, algorithm: w = null, scoringContext: k, detectionRule: v = null, periodGuider: y = null, sleepPeriodDetectionConfig: I = null, algorithmVersion: N = null } = e, M = null !== w ? await l.waitFor(async function(e) {
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
		return S(_e(n));
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
	} : void 0), b = null !== w && null !== M ? await l.waitFor(S(_e(ut({
		fileId: r,
		date: s,
		username: o,
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
		const S = await t.files.get(r);
		if (void 0 === S) throw new Ye();
		const P = await Te({
			fileId: r,
			date: s,
			username: o
		}, w, v, t), E = P?.algorithm === T && P.detectionRule === R ? P : void 0, j = P ? xe(P) : void 0;
		if (A && E && E.lastModifiedAt >= A.lastModifiedAt) return {
			fileId: r,
			date: s,
			username: o,
			previous: j ?? null,
			committed: xe(E),
			changed: !1
		};
		if (void 0 !== e.expected) {
			if (!et(j, e.expected)) return P?.id && await De(P.id, t, P), D = !0, {
				fileId: r,
				date: s,
				username: o,
				previous: j ?? null,
				committed: j ?? null,
				changed: !1
			};
			if (!0 !== e.guardHashOnly && j?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
		}
		const O = A ? E : j, H = u ?? O?.nonwearMarkers ?? [], F = p ?? O?.isInvalidNight ?? !1, L = void 0 === A && C(S, j ?? { sleepMarkers: [] }, { sleepMarkers: i }), V = F || L, K = m ?? O?.explicitNoNonwear ?? !1, U = h ?? O?.needsConsensus ?? !1, J = 0 === i.length || 0 === H.length ? null : (await l.waitFor(ve([{
			sleepMarkers: i,
			nonwearMarkers: H,
			isInvalidNight: V
		}])))[0] ?? null, B = J ? ye(i, J) : i, G = V || (J?.invalidates ?? !1), z = G && !J?.invalidates && (F ? void 0 === p ? !0 === O?.isInvalidNightImplicit : !0 === f : L);
		if (G && B.some((e) => e.markerType === d.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
		const X = await l.waitFor(x({
			sleepMarkers: B,
			nonwearMarkers: H,
			isInvalidNight: G,
			explicitNoNonwear: K,
			notes: g
		})), Y = null !== w ? await async function(e, t, n) {
			const { fileId: r, date: s, username: o, algorithm: i } = t, l = e.table("scoringSessions"), c = await l.where("[fileId+date+username+algorithm]").equals([
				r,
				s,
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
			const d = a(), u = (/* @__PURE__ */ new Date()).toISOString();
			return await l.add({
				sessionId: d,
				fileId: r,
				date: s,
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
			date: s,
			username: o,
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
			fileId: r,
			date: s,
			username: o,
			algorithm: T,
			detectionRule: R,
			periodGuider: y,
			sleepPeriodDetectionConfig: I,
			algorithmVersion: N,
			scoringSessionId: Y,
			manualNonwearInSleep: !1,
			sleepMarkers: B,
			nonwearMarkers: H,
			isInvalidNight: G,
			...z ? { isInvalidNightImplicit: !0 } : {},
			explicitNoNonwear: K,
			needsConsensus: U,
			notes: g,
			contentHash: X,
			syncStatus: "pending",
			lastModifiedAt: A?.lastModifiedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
			...void 0 !== _ ? { scoringContext: _ } : {},
			...void 0 !== A ? { restoredFromBackup: A.restoreId } : {}
		}, Z = {
			fileId: r,
			date: s,
			username: o,
			previous: j ?? null,
			committed: Q,
			changed: it(j) !== it(Q)
		};
		await ct(Z, n);
		const ee = A ? E : P, te = ee && ee !== E ? {
			algorithm: ee.algorithm,
			detectionRule: ee.detectionRule
		} : void 0;
		return await W({
			op: "markers_put",
			fileId: r,
			username: o,
			...void 0 !== A ? { restoredFromBackup: A.restoreId } : {},
			payload: {
				...Q,
				prevContentHash: E?.contentHash,
				...te ? { replacedKey: te } : {}
			}
		}), await async function(e, t, { existing: n, replacement: r }, s) {
			const { fileId: a } = t;
			let o;
			n && JSON.stringify(n.sleepMarkers) === JSON.stringify(t.sleepMarkers) || await Promise.all($.map(({ table: t, field: n }) => q(e, t).where("fileId").equals(a).modify({ [n]: !0 }))), r?.id ? (o = r.id, await e.markers.update(o, (e) => {
				Object.assign(e, t), void 0 === t.isInvalidNightImplicit && delete e.isInvalidNightImplicit, void 0 === t.restoredFromBackup && delete e.restoredFromBackup;
			})) : o = await e.markers.add(t);
			const i = await e.markerProvenance.get(a), l = c({
				...t,
				id: o
			}), d = i?.rows.find((e) => e.id === o);
			return ("auto_score" === l.username || l.nonwearDecided !== (d?.nonwearDecided ?? !1) || l.nonwearDecided && l.nonwearSpans !== d?.nonwearSpans) && await Xe([a], e, s), await e.markerProvenance.put({
				fileId: a,
				rows: [...(i?.rows ?? []).filter((e) => e.id !== o), l]
			}), o;
		}(t, Q, {
			existing: E,
			replacement: ee
		}, e.signal), Z;
	}, e.signal);
	if (D) throw new Qe();
	return P;
}
async function ht(e, t, n) {
	return { changed: (await ft(e, t, () => Promise.resolve({
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
	return t[kt] ??= a();
}
function yt(e, t, n = !1) {
	return {
		...t ?? structuredClone(e),
		[kt]: n ? a() : vt(e)
	};
}
function It(e, t) {
	const n = (e) => F(Object.fromEntries(Object.entries(e).filter(([e]) => "markerIndex" !== e))), r = /* @__PURE__ */ new Map();
	for (const a of e) {
		const e = n(a), t = r.get(e) ?? [];
		t.push(a), r.set(e, t);
	}
	const s = /* @__PURE__ */ new Map();
	return t.map((e) => {
		const t = n(e), o = s.get(t) ?? 0;
		return s.set(t, o + 1), void 0 !== e[kt] ? e : {
			...e,
			[kt]: r.get(t)?.[o]?.[kt] ?? a()
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
	const e = p();
	return e && w.getState().getWorkspace(e), function(e) {
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
const Ct = 86400, Rt = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * Ct * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), At = (e) => e < 10 ? `0${String(e)}` : String(e);
function Dt(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / Ct), n = e - t * Ct;
	return `${Rt(t)} ${At(Math.floor(n / 3600))}:${At(Math.floor(n / 60) % 60)}:${At(n % 60)}`;
}
function Pt(e, t) {
	return null !== e && Number.isFinite(e) ? function(e) {
		return e % 60 == 0;
	}(t) ? function(e) {
		const t = /* @__PURE__ */ new Date(1e3 * e);
		return `${String(t.getUTCHours()).padStart(2, "0")}:${String(t.getUTCMinutes()).padStart(2, "0")}`;
	}(e) : Tt(e).slice(11) : "--:--";
}
t("epoch_5s");
const Et = Object.freeze({
	viewport: null,
	cursorTimestamp: null,
	cursorOwner: null,
	selection: null,
	renderScene: null,
	epochSeconds: null
}), jt = v(() => ({ scenes: {} }));
var Ot = n({
	bindShown: () => fn,
	buildNightData: () => Jt,
	ensureOpened: () => wn,
	fileSessionsSettled: () => Tn,
	flushCurrentNight: () => yn,
	flushSession: () => In,
	isHeldOutbox: () => Ut,
	leavesNightUnscored: () => qt,
	newNightContext: () => Wt,
	nightMarkerStepSeconds: () => Sn,
	nightSessions: () => Mn,
	nightShown: () => Gt,
	nightTokenBrand: () => $t,
	outboxKey: () => un,
	sameNight: () => pn,
	sessionToken: () => mn,
	setNightScopeChanging: () => Kt,
	withoutUntouchedProposal: () => Bt
});
const $t = Symbol("night-session"), Ht = {
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
}, Ft = Object.keys(Ht);
function Lt(e) {
	return Object.fromEntries(Ft.map((t) => [t, e[t]]));
}
function Wt(e, t = e.getState()) {
	return {
		...t,
		...Lt(e.getInitialState()),
		...cn(),
		isDirty: !1,
		isSaving: !1,
		saveError: null,
		nightLoading: !0
	};
}
let Vt = 0;
function Kt(e) {
	Vt += e ? 1 : -1;
}
function Ut(e) {
	return rn === e.key;
}
function Jt(e) {
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
function qt(e, t, n, r) {
	return !(!e || e.fileId !== t || e.date !== n || r.isInvalidNight || r.explicitNoNonwear || r.needsConsensus || r.notes || (r.nonwearMarkers?.length ?? 0) > 0 || 0 !== Bt(e, t, n, r).sleepMarkers.length);
}
function Bt(e, t, n, r) {
	return i(e, t, n, r.sleepMarkers) ? {
		...r,
		sleepMarkers: e?.authoredSleepMarkers ?? []
	} : r;
}
function Gt(e, t) {
	const n = t.availableDates[t.currentDateIndex];
	if (null === t.currentFileId || !n) return !1;
	const r = function(e) {
		const { username: t, selectedStudyId: n } = e;
		return {
			sourceKey: xt(),
			workspaceId: p(),
			actor: t || "anonymous",
			studyId: n
		};
	}(t), s = t.nightLoading ? null : bt(t.currentFileId, n, r);
	return pn(e, {
		...e,
		scope: r,
		db: "local" === r.sourceKey && m() ? y() : null,
		fileId: t.currentFileId,
		date: n,
		algorithm: s ? s.algorithm : e.algorithm,
		detectionRule: s ? s.detectionRule : e.detectionRule
	});
}
function zt(e, t, n) {
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
	return Bt(t, e.currentFileId ?? -1, e.availableDates[e.currentDateIndex] ?? "", Jt(e));
}
function Yt(e, t, n) {
	const r = n.proposalNight ?? (n.acceptingProposal !== t ? n.acceptingProposal : null), s = Xt(n, r);
	return void 0 !== e.dataSource?.unscoreNight && qt(r, e.fileId, e.date, s) ? { kind: "unscore" } : {
		kind: "save",
		data: s
	};
}
async function Qt(e, t, n, r) {
	const s = e.dataSource;
	if (!s) throw new Error("The night has no storage adapter; open its session before writing.");
	const a = e.db ?? void 0;
	let o;
	if ("unscore" === t.kind) o = await s.unscoreNight(e.fileId, e.date, e.scope.actor, e.algorithm, e.detectionRule, t.expected, a, n);
	else {
		let i = "save" === t.kind ? t.data : null;
		const l = "prepared" === t.kind ? async (n) => {
			const s = await t.prepare(n);
			i = s?.data ?? null, r.push(...s?.edits ?? []);
			const a = s?.settings ?? e.settings;
			return s ? {
				data: s.data,
				settings: {
					...a,
					expected: a?.expected ?? Ze(n),
					guardHashOnly: !0
				}
			} : null;
		} : i;
		"save" === t.kind && r.push(...t.edits ?? []);
		const c = "save" === t.kind ? t.settings ?? e.settings : e.settings, d = await s.saveMarkers(e.fileId, e.date, e.scope.actor, l, e.algorithm, e.detectionRule, c, a, n), u = i;
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
const Zt = 3, en = /* @__PURE__ */ new Map(), tn = /* @__PURE__ */ new WeakMap();
let nn = 0, rn = null, sn = 0;
const an = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakSet(), ln = /* @__PURE__ */ new WeakMap(), cn = () => ({
	sleepMarkers: [],
	nonwearMarkers: [],
	isInvalidNight: !1,
	explicitNoNonwear: !1,
	needsConsensus: !1,
	notes: ""
});
function dn(e) {
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
function un(e) {
	return e.db && !tn.has(e.db) && tn.set(e.db, nn += 1), JSON.stringify([
		e.db ? tn.get(e.db) : 0,
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
function pn(e, t) {
	return null !== e && null !== t && un(e) === un(t);
}
function fn(e) {
	if (r(e.currentFileSourceType)) return null;
	return null;
}
function gn(e) {
	const t = fn(e);
	return t ? en.get(un(t)) ?? null : null;
}
function mn(e, t, n = e.binding) {
	const r = {
		[$t]: !0,
		generation: e.generation,
		fileId: n.fileId,
		date: n.date,
		identity: n,
		context: t
	};
	return an.set(r, e), rn === e.key && sn === e.generation && Gt(n, e.store.getState()) && !e.store.getState().nightLoading && on.add(r), r;
}
function hn(e, t) {
	if (void 0 !== t && (e.context = Nt(e.context, {
		...e.context,
		lastSavedAt: Date.now(),
		saveReceipt: {
			fileId: e.binding.fileId,
			date: e.binding.date,
			text: t
		}
	})), gn(e.store.getState()) !== e) return;
	const n = e.log[0]?.failure;
	e.store.setState({
		isDirty: e.log.some((e) => null !== e.failure || null != e.prepared?.mutation) || e.drags.size > 0,
		isSaving: null !== e.runner && !n,
		saveError: n?.message ?? null,
		canDiscardNightChanges: n instanceof Qe || n instanceof Ye,
		placementRejected: e.context.placementRejected,
		placementRejectionReason: e.context.placementRejectionReason,
		lastSavedAt: e.context.lastSavedAt,
		saveReceipt: e.context.saveReceipt
	});
}
async function wn(e, t = e.binding) {
	var n;
	e.opened || (await (n = {
		fileId: t.fileId,
		date: t.date,
		actor: t.scope.actor,
		store: st(t.db, t.scope),
		algorithm: t.algorithm,
		detectionRule: t.detectionRule
	}, rt(n, () => Promise.resolve())), function(e, t) {
		const n = e.context, r = t ? dn(t) : cn(), s = Ze(t), a = void 0 !== e.saved && JSON.stringify(Ze(e.saved)) === JSON.stringify(s) && (null !== s.contentHash || F(e.saved ? dn(e.saved) : null) === F(t ? r : null));
		void 0 === e.saved || a || (e.context = Nt(n, Wt(e.store, n))), e.saved = t, e.view = Nt(n, {
			...r,
			...a ? {
				sleepMarkers: n.sleepMarkers,
				nonwearMarkers: n.nonwearMarkers
			} : {}
		});
		const o = e.context, l = !r.isInvalidNight && F(r.sleepMarkers) === F(o.proposalNight?.authoredSleepMarkers ?? []) && i(o.proposalNight, e.binding.fileId, e.binding.date, o.sleepMarkers);
		e.context = Nt(o, {
			...o,
			...e.view,
			sleepMarkers: l ? o.sleepMarkers : e.view.sleepMarkers,
			proposalNight: l ? o.proposalNight : null
		}), e.opened = !0;
	}(e, await t.dataSource.loadMarkers(t.fileId, t.date, t.scope.actor, t.algorithm, t.detectionRule, t.db ?? void 0)), function(e, t) {
		if (!Ut(e) || !e.shownOpen?.()) return;
		if (!e.opened) return void hn(e);
		const n = e.store, r = n.getState(), s = mn(e, r, t);
		if (e.identify?.(), a = {
			scope: t.scope,
			db: t.db,
			fileId: t.fileId,
			date: t.date,
			algorithm: t.algorithm,
			detectionRule: t.detectionRule,
			options: t.settings
		}, _t = a, !Mn.owns(s, r)) return;
		var a;
		const o = e.view, i = e.context;
		r.showStoredNight(s, t.fileId, t.date, {
			...o,
			sleepMarkers: i.sleepMarkers,
			view: Lt(i)
		}), e.context = Nt(e.context, n.getState()), hn(e);
	}(e, t));
}
function kn(e, t, n = e.binding) {
	if (void 0 === e.saved) throw new Error("The night has not opened; no write has a baseline.");
	const r = Ze(e.saved);
	if ("unscore" === t.kind) return {
		...t,
		expected: r
	};
	const s = t.settings ?? n.settings ?? {};
	return {
		...t,
		settings: {
			...s,
			expected: r,
			guardHashOnly: !0
		}
	};
}
function vn(e) {
	if (e.runner || e.recovering || !e.log.length || e.log[0].failure) return;
	let t;
	e.runner = new Promise((e) => {
		t = e;
	}), (async () => {
		for (; e.log.length && !e.log[0].failure;) {
			const t = e.log[0], r = mn(e, t.token.context, t.token.identity);
			ln.set(r, {
				slot: t,
				run: (e) => e()
			}), hn(e);
			try {
				if (t.prepared ??= await t.prepare(r), t.failure) throw t.prepared = null, t.failure;
				ln.delete(r);
				const n = t.prepared;
				let s;
				if (n.refusal) s = {
					status: "dropped",
					reason: n.refusal
				};
				else if (n.mutation) {
					if (!t.audit) throw new Error("An internal read cannot write a night.");
					const r = [...n.carried];
					s = await Qt(t.token.identity, kn(e, n.mutation, t.token.identity), {
						...t.audit,
						carried: r
					}, r);
				} else s = {
					status: "committed",
					night: e.saved ?? null
				};
				const a = e.saved ?? null;
				"committed" === s.status && n.mutation && (e.saved = s.night, n.accepting && (e.context = Nt(e.context, {
					...e.context,
					acceptingProposal: null
				}), e.store.getState().settleProposalAcceptance(n.accepting, !0))), e.log.shift(), "committed" !== s.status || !Mn.holds(t.token, e.store.getState()) && on.has(t.token) || t.options.onCommitted?.(s.night), t.settle(s), hn(e, "committed" === s.status && n.mutation && s.night ? bn(a, s.night, {
					date: e.binding.date,
					undone: n.undone,
					stepSec: t.step
				}) : void 0);
			} catch (n) {
				ln.delete(r), t.failure = n instanceof Error ? n : new Error(String(n)), t.prepared?.mutation || (t.prepared = null), t.settle({
					status: "dropped",
					reason: `${t.failure.message} Return to the Sleep page and use Retry.`
				}), t.failure instanceof Qe || t.failure instanceof Ye || !(t.retries < Zt) || (t.retries += 1, t.retryTimer = setTimeout(() => {
					t.retryTimer = null, t.failure = null, vn(e);
				}, 2 ** t.retries * 1e3)), hn(e);
			}
		}
		e.runner = null, hn(e), t();
	})();
}
async function yn(e) {
	const t = gn(e.getState());
	return !t || In(t);
}
async function In(e) {
	return vn(e), await Nn(e), 0 === e.log.length;
}
async function Nn(e) {
	for (; e.runner;) await e.runner;
}
const Mn = {
	executor: (e) => ln.get(e)?.run ?? null,
	fail: (e, t) => {
		const n = ln.get(e)?.slot;
		n && (n.failure = t instanceof Error ? t : new Error(String(t)));
	},
	holds: (e, t = an.get(e)?.store.getState() ?? e.context) => !t.nightLoading && Mn.owns(e, t),
	owns: (e, t = an.get(e)?.store.getState() ?? e.context) => {
		const n = an.get(e);
		return void 0 !== n && n.opened && rn === n.key && sn === e.generation && n.generation === e.generation && Gt(n.binding, t);
	},
	night: (e) => an.get(e)?.view ?? null,
	context: (e) => an.get(e)?.context ?? e.context,
	updateContext: (e, t) => {
		const n = an.get(e);
		n && (n.context = Nt(n.context ?? t, t));
	},
	write: (e, t, n, r) => {
		const s = an.get(e), a = ln.get(e);
		if (!s || !a) throw new Error("A night write requires its proposal's executor.");
		s.view = Nt(s.context ?? e.context, t), r && (s.context = Nt(s.context ?? r, {
			...r,
			...s.view
		})), a.slot.carried.push(...n);
	},
	enqueue: (e, t, n = !1, r) => {
		const s = an.get(e);
		if (!s) return Promise.reject(/* @__PURE__ */ new Error("The edit has no owning night session."));
		const a = r ?? s.store;
		let o;
		return function(e, t, n, r = {}) {
			let s;
			const a = new Promise((e) => {
				s = e;
			}), o = [], i = {
				sequence: ++e.sequence,
				token: t,
				prepare: n,
				options: r,
				settled: a,
				settle: s,
				audit: r.readOnly ? null : zt(t.identity, r.acts, o),
				baseline: null,
				prepared: null,
				failure: null,
				carried: o,
				retries: 0,
				retryTimer: null,
				step: Sn(t)
			}, l = e.log.length > 1 ? e.log[e.log.length - 1] : void 0;
			return r.noteEdit && l?.options.noteEdit && null === l.prepared && null === l.failure && (e.log.pop(), a.then(l.settle)), e.log.push(i), vn(e), hn(e), i;
		}(s, e, async (r) => {
			await wn(s, e.identity);
			const i = Mn.context(r);
			ln.get(r).slot.baseline ??= dn(Xt(i));
			const l = i._editGeneration;
			return o = await t(r), n || Mn.context(r)._editGeneration === l ? {
				mutation: null,
				accepting: null,
				carried: [],
				undone: !1
			} : function(e, t, n = e.store) {
				const r = Mn.holds(t, n.getState()), s = r ? n.getState() : e.context, a = r ? s.acceptingProposal : null;
				return {
					mutation: r ? Yt(t.identity, a, s) : {
						kind: "save",
						data: e.view
					},
					accepting: a,
					carried: r ? n.takeShownEdits(t.identity) : ln.get(t).slot.carried,
					undone: s.markerHistoryIndex < s.markerHistory.length - 1
				};
			}(s, r, a);
		}).settled.then((e) => ("dropped" !== e.status || "boolean" != typeof o) && o);
	},
	waiting: (e) => e ? (an.get(e)?.log.length ?? 0) > 0 : [...en.values()].some((e) => e.log.length > 0),
	setDragging: (e, t) => {
		const n = an.get(e);
		t ? n?.drags.add(e) : n?.drags.delete(e);
	},
	scopeChanging: () => Vt > 0,
	hasUnsavedWork: () => [...en.values()].some((e) => e.log.length > 0 || e.drags.size > 0),
	settled: async () => {
		await Promise.all([...en.values()].map(Nn));
	}
};
function Sn(t) {
	const n = an.get(t)?.key ?? null;
	return function(t, n) {
		const r = n.availableFiles.find((e) => e.id === n.currentFileId)?.countEpochSeconds;
		return t.epochSeconds ?? e(A(n), r);
	}((r = null === n ? null : function(e, t, n, r) {
		return !e || !Number.isInteger(t) || (t ?? 0) <= 0 || !n ? null : `${r ?? e}\0${String(t)}\0${n}`;
	}(n, t.fileId, t.date, n), null == r ? Et : jt.getState().scenes[r] ?? Et), t.context);
	var r;
}
function xn(e) {
	return [...e.sleepMarkers.map((e) => ({
		start: e.onsetTimestamp,
		end: e.offsetTimestamp,
		label: e.markerType === d.NAP ? "nap" : "main sleep",
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
function _n(e, t, n) {
	if (t === n || null === t || null === n) return null;
	const r = Math.abs(n - t);
	return `moved ${e} ${r >= 60 ? `${String(Math.round(r / 60))} min` : `${String(r)} s`} ${n < t ? "earlier" : "later"}`;
}
function bn(e, t, { date: n, undone: r, stepSec: s }) {
	const a = (e) => Pt(e, s), o = e ? xn(e) : [], i = xn(t), l = (e, t) => e.label === t.label && e.start === t.start && e.end === t.end, c = o.filter((e) => !i.some((t) => l(t, e))), d = i.filter((e) => !o.some((t) => l(e, t))), u = [];
	for (const f of c) {
		const e = d.findIndex((e) => e.label === f.label);
		if (-1 === e) {
			u.push(`deleted ${f.label} ${a(f.start)}–${a(f.end)}`);
			continue;
		}
		const [t] = d.splice(e, 1);
		if (!t) continue;
		const n = [_n(f.startName, f.start, t.start), _n(f.endName, f.end, t.end)].filter((e) => null !== e);
		u.push(n.length > 0 ? n.join(" and ") : `changed ${f.label}`);
	}
	for (const f of d) u.push(`${r ? "restored" : "saved"} ${f.label} ${a(f.start)}–${a(f.end)}`);
	(e?.isInvalidNight ?? !1) !== t.isInvalidNight && u.push(t.isInvalidNight ? "marked invalid night" : "cleared invalid night"), (e?.explicitNoNonwear ?? !1) !== (t.explicitNoNonwear ?? !1) && u.push(t.explicitNoNonwear ? "confirmed no nonwear" : "cleared no-nonwear"), (e?.needsConsensus ?? !1) !== t.needsConsensus && u.push(t.needsConsensus ? "flagged for consensus" : "unflagged for consensus"), (e?.notes ?? "") !== t.notes && u.push("saved note");
	const p = u.length > 0 ? u.join("; ") : "nothing changed";
	return r ? `Undid — ${p} on ${n}` : `${p.charAt(0).toUpperCase()}${p.slice(1)} on ${n}`;
}
async function Tn(e, t, n) {
	await Promise.all([...en.values()].filter((r) => r.binding.db === e && r.binding.fileId === t && (!n || r.binding.date === n.date && r.binding.scope.actor === n.username)).map(Nn));
}
export { Le as A, ye as B, ft as C, Ue as D, qe as E, Ce as F, J as G, we as H, be as I, V as J, q as K, xe as L, We as M, Pe as N, He as O, je as P, Ie as R, ht as S, Je as T, X as U, ce as V, z as W, Nt as _, Sn as a, at as b, pn as c, Tt as d, Dt as f, vt as g, yt as h, qt as i, Ke as j, Ee as k, Bt as l, Mt as m, Tn as n, Mn as o, St as p, U as q, yn as r, Ot as s, fn as t, Pt as u, wt as v, Xe as w, gt as x, Ze as y, ve as z };
