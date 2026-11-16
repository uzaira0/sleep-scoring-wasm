import { D as e, O as t, Pn as n, S as r, dn as a, f as s, fn as o, g as i, jn as l, m as c, rn as d } from "./schema-B6UkEiVJ.js";
import { r as u } from "./workers-CrU4fDAf.js";
import { a as p, et as g, it as f, n as m, nt as w, o as k, rt as h, st as v, t as I } from "./workspace-db-DU4CzwX1.js";
import { c as y, r as N, u as M } from "./legacy-invalid-night-zjKZRSNb.js";
import { a as b, i as S } from "./content-hash-CZ-UAlQR.js";
import { a as x, i as _ } from "./project-revision-CT6PGNkq.js";
import { K as O, Q as T, X as R, c as C, ct as D, lt as A, nt as E, st as P, ut as j } from "./per-source-defaults-BIydRzBy.js";
import { t as $ } from "./audit-log-ltTKXn8E.js";
import { t as H } from "./audit-hash-DNLMlimm.js";
import { i as F, t as L } from "./wal-CKT9mrFN.js";
const V = "auto_score";
function W(e, t) {
	return {
		sleepPeriodDetectionConfig: R(e),
		sleepPeriodDetectionSummary: t ?? O(e)
	};
}
function B(e) {
	return {
		algorithm: e.algorithm,
		...W(e.sleepPeriodDetection, e.sleepPeriodDetectionSummary),
		sleepCount: e.sleepCount,
		napCount: e.napCount,
		markers: e.markers
	};
}
const K = {
	files: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "none",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: null
	},
	activityDays: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 1,
		workspaceOrder: null
	},
	scoredVariantMasks: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 2,
		workspaceOrder: null
	},
	markers: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 3,
		workspaceOrder: null
	},
	studySettings: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: 4
	},
	sensorNonwear: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 4,
		workspaceOrder: null
	},
	diaryEntries: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "diary",
		cascadeOrder: 5,
		workspaceOrder: null
	},
	stagedDiaryEntries: {
		class: "canonical",
		backup: !0,
		cascade: "attachedFileId",
		workspace: "unattached",
		aggregate: "diary",
		cascadeOrder: 7,
		workspaceOrder: 7
	},
	auditLog: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "none",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: null
	},
	scoringSessions: {
		class: "operational",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 8,
		workspaceOrder: null
	},
	walLog: {
		class: "operational",
		backup: !0,
		cascade: "fileId",
		workspace: "all",
		aggregate: "file",
		cascadeOrder: 20,
		workspaceOrder: 9
	},
	algorithmRuns: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 9,
		workspaceOrder: null
	},
	dailyGgirSummaries: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 12,
		workspaceOrder: null
	},
	viewLogs: {
		class: "operational",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: 6
	},
	localExecutions: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 10,
		workspaceOrder: null
	},
	complexityEvidence: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 11,
		workspaceOrder: null
	},
	projectMeta: {
		class: "operational",
		backup: !1,
		cascade: null,
		workspace: "none",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: null
	},
	diaryBindingDirty: {
		class: "operational",
		backup: !1,
		cascade: null,
		workspace: "none",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: null
	},
	presetFamilies: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: 5
	},
	diaryOccurrences: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "unattached",
		aggregate: "diary",
		cascadeOrder: 6,
		workspaceOrder: 8
	},
	diaryDecisionLogs: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: 3
	},
	diaryImportSessions: {
		class: "operational",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: 1
	},
	diaryImportSessionBytes: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: 2
	},
	ggirResultsBundles: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 13,
		workspaceOrder: null
	},
	ggirResultsBlobs: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 21,
		workspaceOrder: null
	},
	ggirCorrectedValues: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 22,
		workspaceOrder: null
	},
	ggirScorerReviews: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 14,
		workspaceOrder: null
	},
	actiwareStatisticsInputs: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 15,
		workspaceOrder: null
	},
	physicalActivityFileSummaries: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 16,
		workspaceOrder: null
	},
	markerProvenance: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 17,
		workspaceOrder: null
	},
	actiwareFileData: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 18,
		workspaceOrder: null
	},
	placementResults: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 19,
		workspaceOrder: null
	}
}, U = Object.fromEntries(Object.entries(K).filter(([, e]) => null !== e.cascade).sort(([, e], [, t]) => e.cascadeOrder - t.cascadeOrder).map(([e, t]) => [e, t.cascade])), J = Object.entries(K).filter(([, e]) => "none" !== e.workspace).sort(([, e], [, t]) => e.workspaceOrder - t.workspaceOrder).map(([e]) => e), q = (Object.entries(K).filter(([, e]) => "unattached" === e.workspace).map(([e]) => e), Object.entries(K).filter(([, e]) => e.backup).map(([e]) => e), J.filter((e) => "diary" === K[e].aggregate), [{
	table: "actiwareFileData",
	field: "actiwareStatisticsNeedsRecompute"
}]), G = /* @__PURE__ */ new Set([
	"diaryEntries",
	"diaryOccurrences",
	"stagedDiaryEntries"
]);
function z(e, t) {
	if (G.has(t)) throw new Error(`The diary store ${t} is written only by db/diary.`);
	return e[t];
}
function X(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function Y(e) {
	return {
		...e,
		edited: !0
	};
}
function Q(e, t, n, r) {
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
	const [i, l] = A(a.markerType), c = Y({
		...a,
		offsetTimestamp: r,
		markerType: i
	}), d = Y({
		...a,
		onsetTimestamp: n,
		markerType: l
	}), u = [...e];
	return u.splice(t, 1, c, d), {
		ok: !0,
		markers: X(u),
		newIndex: t + 1
	};
}
function Z(e, t, n) {
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
	const o = r.onsetTimestamp, i = r.offsetTimestamp, l = s.onsetTimestamp, c = s.offsetTimestamp;
	if (null == o || null == i || null == l || null == c) return {
		ok: !1,
		reason: "no-boundaries"
	};
	const u = Math.min(o, l), p = Math.max(i, c), g = P(r, s), f = Math.min(t, a), m = Y({
		...g !== d.MAIN_SLEEP || E(r) ? r : s,
		onsetTimestamp: u,
		offsetTimestamp: p,
		markerType: g
	}), w = e.filter((e, n) => n !== t && n !== a);
	return w.splice(f, 0, m), {
		ok: !0,
		markers: X(w),
		mergedIndex: f
	};
}
function ee(e) {
	return "number" == typeof e && Number.isFinite(e) ? e : null;
}
function te(e) {
	return "boolean" == typeof e ? e : null;
}
function ne(e) {
	return "string" == typeof e ? e : null;
}
function re(e) {
	return e.map((e, t) => ({
		...e,
		markerIndex: t + 1
	}));
}
function ae(e, t) {
	return !(e.length > 0) && t;
}
function se(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
function oe(e) {
	const t = function(e) {
		return Array.isArray(e) ? e : null;
	}(e);
	return null === t ? null : t.every(se) ? t : null;
}
function ie(e) {
	const t = oe(e);
	return null === t ? null : t;
}
function le(e) {
	const t = oe(e);
	return null === t ? null : t;
}
function ce(e) {
	return e.filter((e) => e.markerType === d.MAIN_SLEEP).length;
}
function de(e) {
	return e.every((e, t) => e.markerIndex === t + 1);
}
const ue = {
	main_sleep_on_invalid_night: ({ after: e }) => e.isInvalidNight && ce(e.sleepMarkers) > 0,
	multiple_main_sleep: ({ after: e }) => ce(e.sleepMarkers) > 1,
	first_marker_not_main_sleep: ({ after: e }) => !e.isInvalidNight && e.sleepMarkers.length > 0 && 0 === ce(e.sleepMarkers),
	marker_index_noncontiguous: ({ after: e }) => !de(e.sleepMarkers) || !de(e.nonwearMarkers),
	boundaries_disordered: ({ after: e }) => e.sleepMarkers.some((e) => null != e.onsetTimestamp && null != e.offsetTimestamp && e.onsetTimestamp >= e.offsetTimestamp) || e.nonwearMarkers.some((e) => null != e.startTimestamp && null != e.endTimestamp && e.startTimestamp >= e.endTimestamp),
	nonwear_flag_with_markers: ({ after: e }) => e.explicitNoNonwear && e.nonwearMarkers.length > 0,
	manual_nonwear_in_sleep: ({ payload: e }) => !0 === e.manualNonwearInSleep,
	marker_limit_exceeded: ({ after: e }) => e.sleepMarkers.length > j.MAX_SLEEP_PERIODS_PER_DAY || e.nonwearMarkers.length > j.MAX_NONWEAR_PERIODS_PER_DAY,
	split_not_strictly_inside: ({ before: e, payload: t }) => {
		const n = ee(t.periodIndex), r = ee(t.at);
		return null !== n && null !== r && !Q(e.sleepMarkers, n, r, ee(t.firstOffset) ?? r).ok;
	},
	merge_no_neighbor: ({ before: e, payload: t }) => {
		const n = ee(t.periodIndex), r = ne(t.direction);
		return null !== n && ("prev" === r || "next" === r) && !Z(e.sleepMarkers, n, r).ok;
	},
	mutation_on_read_only_view: ({ context: e }) => !0 === e.readOnlyView,
	undo_beyond_history: ({ context: e }) => void 0 !== e.undoDepth && e.undoDepth <= 0,
	redo_beyond_history: ({ context: e }) => void 0 !== e.redoDepth && e.redoDepth <= 0
};
function pe(e, t) {
	const n = y[e]?.guards ?? [], r = [];
	for (const a of n) {
		const e = ue[a], n = M[a];
		e && n && e(t) && r.push({
			guard: a,
			severity: n.severity
		});
	}
	return r;
}
function ge(e, t) {
	const { isInvalidNightImplicit: n, ...r } = e, a = te(t.isInvalidNight) ?? e.isInvalidNight;
	return {
		...r,
		isInvalidNight: a,
		...a && !0 === te(t.isInvalidNightImplicit) ? { isInvalidNightImplicit: !0 } : {}
	};
}
function fe(e, t) {
	const n = t.stateAfter;
	if (null === n || "object" != typeof n) return {
		state: e,
		reconstructed: !1
	};
	const r = n, a = ie(r.sleepMarkers), s = le(r.nonwearMarkers);
	return null === a || null === s ? {
		state: e,
		reconstructed: !1
	} : { state: {
		...ge(e, r),
		sleepMarkers: a,
		nonwearMarkers: s,
		explicitNoNonwear: te(r.explicitNoNonwear) ?? e.explicitNoNonwear,
		needsConsensus: te(r.needsConsensus) ?? e.needsConsensus,
		notes: ne(r.notes) ?? e.notes
	} };
}
const me = {
	marker_placed: (e, t) => {
		if ("nonwear" === ne(t.category)) {
			const n = ee(t.startTimestamp), r = ee(t.endTimestamp);
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
		const n = ee(t.onsetTimestamp), r = ee(t.offsetTimestamp);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = ne(t.markerType) ?? D(e.sleepMarkers, e), s = [...e.sleepMarkers, {
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
		const r = n, a = ie(r.sleepMarkers), s = le(r.nonwearMarkers);
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
		const n = ee(t.periodIndex), r = t.updates;
		if (null === n || null === r || "object" != typeof r) return {
			state: e,
			reconstructed: !1
		};
		const a = r;
		if ("nonwear" === ne(t.category)) {
			const t = e.nonwearMarkers.map((e, t) => t === n ? {
				...e,
				...a
			} : e);
			return { state: {
				...e,
				nonwearMarkers: t,
				explicitNoNonwear: ae(t, e.explicitNoNonwear)
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
		const n = ee(t.periodIndex);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : "nonwear" === ne(t.category) ? { state: {
			...e,
			nonwearMarkers: re(e.nonwearMarkers.filter((e, t) => t !== n))
		} } : { state: {
			...e,
			sleepMarkers: re(e.sleepMarkers.filter((e, t) => t !== n))
		} };
	},
	markers_cleared: (e) => ({ state: {
		...e,
		sleepMarkers: [],
		nonwearMarkers: []
	} }),
	sleep_period_split: (e, t) => {
		const n = ee(t.periodIndex), r = ee(t.at);
		if (null === n || null === r) return {
			state: e,
			reconstructed: !1
		};
		const a = Q(e.sleepMarkers, n, r, ee(t.firstOffset) ?? r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	sleep_period_merged: (e, t) => {
		const n = ee(t.periodIndex), r = ne(t.direction);
		if (null === n || "prev" !== r && "next" !== r) return {
			state: e,
			reconstructed: !1
		};
		const a = Z(e.sleepMarkers, n, r);
		return a.ok && a.markers ? { state: {
			...e,
			sleepMarkers: a.markers
		} } : {
			state: e,
			reconstructed: !1
		};
	},
	session_start: (e, t) => {
		const n = ie(t.sleepMarkers), r = le(t.nonwearMarkers);
		return null === n || null === r ? {
			state: e,
			reconstructed: !1
		} : {
			state: {
				...ge(e, t),
				sleepMarkers: n,
				nonwearMarkers: r,
				explicitNoNonwear: te(t.explicitNoNonwear) ?? e.explicitNoNonwear,
				needsConsensus: te(t.needsConsensus) ?? e.needsConsensus,
				notes: ne(t.notes) ?? e.notes
			},
			reconstructed: void 0 !== t.notes
		};
	},
	markers_saved: (e, t, n) => {
		const r = ee(t.sleepCount), a = ee(t.nonwearCount);
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
	undo: fe,
	redo: fe,
	auto_score_applied: (e, t) => {
		const n = ie(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			sleepMarkers: n
		} };
	},
	auto_nonwear_applied: (e, t) => {
		const n = le(t.markers);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			nonwearMarkers: n,
			explicitNoNonwear: ae(n, e.explicitNoNonwear)
		} };
	},
	consensus_toggled: (e, t) => {
		const n = te(t.value);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			needsConsensus: n
		} };
	},
	invalid_night_toggled: (e, t) => {
		const n = te(t.value);
		if (null === n) return {
			state: e,
			reconstructed: !1
		};
		const { isInvalidNightImplicit: r, ...a } = e;
		if (!n) return { state: {
			...a,
			isInvalidNight: !1
		} };
		const s = re(e.sleepMarkers.filter((e) => e.markerType !== d.MAIN_SLEEP)), o = !0 === te(t.implicit);
		return { state: {
			...a,
			isInvalidNight: !0,
			...o ? { isInvalidNightImplicit: !0 } : {},
			sleepMarkers: s
		} };
	},
	no_nonwear_toggled: (e, t) => {
		const n = te(t.value);
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
		const n = ne(t.after);
		return null === n ? {
			state: e,
			reconstructed: !1
		} : { state: {
			...e,
			notes: n
		} };
	},
	candidate_copied: fe
};
function we(e, t, n = {}) {
	const r = N(t), a = r.payload ?? {}, s = me[r.action], o = s ? s(e, a, r) : { state: e }, i = o.state;
	return {
		state: i,
		violations: pe(r.action, {
			before: e,
			after: i,
			event: r,
			payload: a,
			context: n
		}),
		reconstructed: o.reconstructed ?? !0
	};
}
function ke(e) {
	return "object" != typeof e || null === e ? null : "string" == typeof e.action ? N(e) : null;
}
function he(e, t) {
	if ("markers_saved" !== e.action) return !1;
	const n = e.payload ?? {}, r = ee(n.sleepCount), a = ee(n.nonwearCount);
	return null !== r && null !== a && (r !== t.sleepMarkers.length || a !== t.nonwearMarkers.length);
}
function ve(e) {
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
		const e = ke(a), s = e ? we(n, e) : {
			state: n,
			violations: [],
			reconstructed: !1
		};
		n = s.state, null !== e && !0 === y[e.action]?.stateKeyframe && s.reconstructed ? r = "exact" : s.reconstructed || "exact" !== r || (r = "divergent"), "exact" === r && null !== e && he(e, n) && (r = "divergent"), t.push({
			state: n,
			basis: r,
			violations: s.violations
		});
	}
	return t;
}
function Ie(e) {
	const t = [
		`${String(e.sleepMarkers.length)} sleep`,
		`${String(e.nonwearMarkers.length)} nonwear`,
		`invalid-night:${String(e.isInvalidNight)}`
	];
	return e.explicitNoNonwear && t.push("no-nonwear"), e.needsConsensus && t.push("needs-consensus"), e.notes.length > 0 && t.push(`notes ${String(e.notes.length)}ch`), t.join(", ");
}
function ye(e) {
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
async function Ne(e, t = u()) {
	if (0 === e.length) return [];
	const n = await t.settleManualNonwearNights(e.map(ye));
	if (n.length !== e.length) throw new Error(`The manual-nonwear night rule answered ${String(n.length)} settle(s) for ${String(e.length)} night(s).`);
	return n;
}
function Me(e, t) {
	return 0 === t.removed.length ? e : t.kept.map((t, n) => ({
		...e[t],
		markerIndex: n + 1
	}));
}
async function be(e, t) {
	const n = ve(e), r = e.flatMap((e, t) => {
		const r = e.payload, a = n[t]?.state;
		return "session_start" === e.action && null != r && "boolean" != typeof r.manualNonwearInSleep && void 0 !== a && Array.isArray(r.sleepMarkers) && Array.isArray(r.nonwearMarkers) && r.sleepMarkers.length === a.sleepMarkers.length && r.nonwearMarkers.length === a.nonwearMarkers.length ? [t] : [];
	});
	if (0 === r.length) return n;
	const a = await async function(e, t) {
		return (await Ne(e, t)).map((e) => e.removed.length > 0);
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
	}), ve(s);
}
function Se(e) {
	return null === e ? a : e;
}
function xe(e) {
	return null == e ? o : e;
}
function _e(e) {
	return "__legacy_dr__" === e ? null : e;
}
function Oe(e) {
	return {
		...e,
		algorithm: (t = e.algorithm, "__legacy__" === t ? null : t),
		detectionRule: _e(e.detectionRule)
	};
	var t;
}
function Te(e) {
	const t = (e) => Array.isArray(e) ? e.map(t) : e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, n]) => [e, t(n)])) : e;
	return JSON.stringify(t(e));
}
function Re(e, { date: t, username: n }, r, a) {
	const s = e.filter((e) => e.date === t && e.username === n);
	if (void 0 !== r) {
		const e = Se(r), t = xe(a), n = (e, t) => s.find((n) => n.algorithm === e && n.detectionRule === t);
		return n(e, t) ?? ("__legacy_dr__" !== t ? n(e, "__legacy_dr__") : void 0) ?? (null !== r ? n("__legacy__", "__legacy_dr__") : void 0);
	}
	return s.reduce((e, t) => !e || (t.id ?? 0) < (e.id ?? 0) ? t : e, void 0);
}
function Ce(e, t, n, r) {
	return r.transaction("r", r.markers, async () => Re(await r.markers.where("[fileId+date+username]").equals([
		e.fileId,
		e.date,
		e.username
	]).toArray(), e, t, n));
}
async function De(e, t, n, r, a, s = I()) {
	const o = await Ce({
		fileId: e,
		date: t,
		username: n
	}, r, a, s);
	return o ? Oe(o) : void 0;
}
const Ae = [
	"manualNonwearInSleep",
	"periodMetrics",
	"syncStatus"
];
function Ee(e, t, n) {
	const r = Object.fromEntries(Ae.filter((e) => e in t).map((e) => [e, t[e]]));
	return n.markers.update(e, r);
}
async function Pe(e, t = I(), n, r) {
	const a = t;
	await _(a, [a.markers], async () => {
		if (n) {
			const t = await a.markers.get(e);
			if (!t || Te(Oe(t)) !== Te(n)) return;
		}
		await Ee(e, { syncStatus: "conflict" }, a);
	}, r);
}
function je(e) {
	return `${h.SCORED_VARIANT_WARM}:${String(e)}`;
}
function $e(e = w.getState().jobs) {
	if (!m()) return null;
	const t = Object.values(e).reverse().find((e) => g(e) && e.workspaceId === I().name && e.kind === h.SCORED_VARIANT_WARM && e.status !== f.DONE && e.status !== f.CANCELLED);
	return t ? {
		fileId: Number(t.key.split(":").at(-1)),
		done: t.done,
		total: t.total,
		...t.status === f.FAILED ? { failed: !0 } : {}
	} : null;
}
function He(e, t) {
	if (!m() || t && I() !== t) return;
	const n = (t ?? I()).name, r = w.getState();
	if (!e) return;
	const a = je(e.fileId), s = `${n}:${a}`;
	r.jobs[s] && !e.failed || r.update(s, {
		id: s,
		workspaceId: n,
		key: a,
		kind: h.SCORED_VARIANT_WARM,
		label: "Scoring variants",
		controller: r.jobs[s]?.controller ?? new AbortController(),
		done: e.done,
		total: e.total,
		status: e.failed ? f.FAILED : f.RUNNING
	});
}
const Fe = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new WeakMap();
async function Ve(e, t) {
	const n = Le.get(e) ?? {
		depth: 0,
		files: /* @__PURE__ */ new Set()
	};
	Le.set(e, n), n.depth++;
	try {
		return await t();
	} finally {
		if (0 === --n.depth) {
			Le.delete(e);
			for (const t of n.files) Be(t, e, n.files);
		}
	}
}
const We = /* @__PURE__ */ new WeakMap();
function Be(e, t, n) {
	const r = Le.get(t);
	if (r) r.files.add(e);
	else for (const a of Fe) n && n.size > 1 ? a(e, t, void 0, n) : a(e, t);
}
function Ke(e) {
	return Fe.add(e), () => Fe.delete(e);
}
const Ue = /* @__PURE__ */ new Set();
function Je(e, t) {
	for (const n of Ue) n(e, t);
}
const qe = "scored-variant-warm-backfill-v1", Ge = `placement-results-backfill-v${String(2)}`, ze = "placement-results-backfill-generation-v1", Xe = /* @__PURE__ */ new Set();
function Ye(e, t, n) {
	const r = n ? We.get(n) : void 0;
	if (r?.db !== t) for (const a of Xe) a([e], t);
	else r.files.add(e);
}
const Qe = /* @__PURE__ */ new WeakMap();
async function Ze(e, t = I(), n) {
	let r = l.currentTransaction;
	for (; r?.parent;) r = r.parent;
	if (await x(t, [t.projectMeta], async () => {
		const e = await t.projectMeta.get(ze);
		await t.projectMeta.put({
			key: ze,
			revision: (e?.revision ?? 0) + 1
		}), await t.projectMeta.delete(Ge);
	}, n), !r || r.db !== t) {
		for (const r of new Set(e)) Ye(r, t, n);
		return;
	}
	let a = Qe.get(r);
	if (!a) {
		a = /* @__PURE__ */ new Set(), Qe.set(r, a);
		const e = a;
		r.idbtrans.addEventListener("complete", () => {
			for (const r of e) Ye(r, t, n);
		}, { once: !0 });
	}
	for (const s of e) a.add(s);
}
var et = class extends Error {
	constructor() {
		super("The recording was deleted; this night was not saved."), this.name = "RecordingDeletedError";
	}
}, tt = class extends Error {
	constructor() {
		super("Markers changed during rescore or in another tab. Retry keeps the night on screen; reopening the night shows the stored one."), this.name = "NightConflictError";
	}
};
function nt(e) {
	return {
		contentHash: e?.contentHash ?? null,
		needsConsensus: e?.needsConsensus ?? !1
	};
}
function rt(e, t) {
	const n = nt(e);
	return n.contentHash === t.contentHash && n.needsConsensus === t.needsConsensus;
}
const at = (e, t) => JSON.stringify([e, t]), st = /* @__PURE__ */ new Map();
function ot(e, t) {
	const n = ((e) => at(e.store, e.fileId) + JSON.stringify([
		e.actor,
		e.date,
		Se(e.algorithm),
		xe(e.detectionRule)
	]))(e);
	return function(e, t, n) {
		const r = e.length > 0 ? Promise.all(e).then(n) : n(), a = r.then(() => {}, () => {});
		for (const s of t) st.set(s, a), a.then(() => {
			st.get(s) === a && st.delete(s);
		});
		return r;
	}([st.get(n), st.get((r = e.store, a = e.fileId, `${at(r, a)}*`))].filter((e) => void 0 !== e), [n], t);
	var r, a;
}
function it(e, t) {
	return e?.name ?? `${t?.sourceKey ?? "server"}:${t?.workspaceId ?? ""}`;
}
function lt(e) {
	ct(e.binding, e, e);
}
function ct(e, t, n) {
	$.recordNightEdit(e, {
		fileId: t.fileId,
		analysisDate: t.date,
		action: n.action,
		...void 0 === n.payload ? {} : { payload: n.payload }
	});
}
function dt(e) {
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
const ut = (e, t) => {
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
function pt(e, t) {
	if (null === t) return l.Promise.resolve();
	const n = t.binding;
	if (!n) throw new Error("A local night write requires the audit binding captured at its act.");
	const r = (t) => ({
		fileId: e.fileId,
		analysisDate: e.date,
		action: t.action,
		...void 0 === t.payload ? {} : { payload: t.payload }
	}), a = ut(e, t);
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
function gt(e, t, n) {
	return F([
		e.markers,
		e.scoringSessions,
		e.markerProvenance,
		...q.map(({ table: t }) => e.table(t)),
		e.auditLog,
		e.files
	], t, e, n);
}
function ft(e) {
	if (Array.isArray(e)) return e.map(ft);
	if (e && "object" == typeof e) {
		const t = {};
		for (const [n, r] of Object.entries(e)) null != r && (t[n] = ft(r));
		return t;
	}
	return e;
}
const mt = (e, t) => ({
	store: it(e),
	actor: t.username,
	fileId: t.fileId,
	date: t.date,
	algorithm: t.algorithm,
	detectionRule: t.detectionRule
});
function wt(e, t, n, r) {
	return ot(mt(t, e), async () => {
		const a = await De(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), s = await n(a ? Oe(a) : null);
		if (!s) return null;
		null !== r && await $.settleWrites();
		const o = "save" === s.kind ? await ht(s.input, t, r) : await async function(e, t, n, r) {
			const { fileId: a, date: s, username: o, algorithm: i, detectionRule: l, expected: d } = e;
			let u = !1;
			const p = await gt(t, async () => {
				if (void 0 === await t.files.get(a)) throw new et();
				const p = await Ce(e, i, l, t);
				if (void 0 !== d && !rt(p, d)) return p?.id && await Pe(p.id, t, p), u = !0, {
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
					return await pt(e, n), e;
				}
				const g = Oe(p);
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
					}), n.some((e) => "auto_score" === e.username || c({
						...e,
						id: e.id
					}).nonwearDecided) && await Ze([t], e, r);
				}(t, a, [p], r);
				const f = {
					fileId: a,
					date: s,
					username: o,
					previous: g,
					committed: null,
					changed: null !== dt(g)
				};
				return await pt(f, n), f;
			}, r);
			if (u) throw new tt();
			if (null !== p.previous && "auto_score" !== o) {
				const { scheduleGgirRecompute: e } = await import("./local-export-shard-worker-Da7c2eY6.js").then((e) => e.t);
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
function kt(e, t, n) {
	return ot(mt(t, {
		fileId: e.fileId,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm ?? null,
		detectionRule: e.detectionRule ?? null
	}), async () => {
		null !== n && await $.settleWrites();
		const r = await ht(e, t, n);
		return {
			record: r.committed,
			changed: r.changed
		};
	});
}
async function ht(e, t, n) {
	const { fileId: r, date: a, username: o, sleepMarkers: i, nonwearMarkers: u, isInvalidNight: p, isInvalidNightImplicit: g, notes: f, explicitNoNonwear: m, needsConsensus: w, algorithm: k = null, scoringContext: h, detectionRule: v = null, periodGuider: I = null, sleepPeriodDetectionConfig: y = null, algorithmVersion: N = null } = e, M = null !== k ? await l.waitFor(async function(e) {
		let t;
		if (e.extraParams) try {
			t = JSON.parse(e.extraParams);
		} catch {
			t = e.extraParams;
		}
		const n = ft({
			algorithm: e.algorithm,
			detector: e.detector,
			guider: e.guider,
			sleep_period_detection_config: e.sleepPeriodDetectionConfig,
			scorer_version: e.scorerVersion,
			extra_params: t
		});
		return b(Te(n));
	}({
		algorithm: k,
		detector: v,
		guider: I,
		sleepPeriodDetectionConfig: y,
		scorerVersion: N
	})) : null, x = h ?? (null !== k && null !== M ? {
		appVersion: "local",
		algorithmVersions: { [k]: N ?? "1" },
		paramsHash: M,
		stampedAt: (/* @__PURE__ */ new Date()).toISOString()
	} : void 0), _ = null !== k && null !== M ? await l.waitFor(b(Te(ft({
		fileId: r,
		date: a,
		username: o,
		algorithm: k,
		scorerVersion: N,
		detector: v,
		guider: I,
		sleepPeriodDetection: y,
		params: null,
		parameterSetHash: M
	})))) : null, O = Se(k), R = xe(v), C = e.restoredFromBackup;
	let D = !1;
	const A = await gt(t, async (h) => {
		const b = await t.files.get(r);
		if (void 0 === b) throw new et();
		const A = await Ce({
			fileId: r,
			date: a,
			username: o
		}, k, v, t), E = A?.algorithm === O && A.detectionRule === R ? A : void 0, P = A ? Oe(A) : void 0;
		if (C && E && E.lastModifiedAt >= C.lastModifiedAt) return {
			fileId: r,
			date: a,
			username: o,
			previous: P ?? null,
			committed: Oe(E),
			changed: !1
		};
		if (void 0 !== e.expected) {
			if (!rt(P, e.expected)) return A?.id && await Pe(A.id, t, A), D = !0, {
				fileId: r,
				date: a,
				username: o,
				previous: P ?? null,
				committed: P ?? null,
				changed: !1
			};
			if (!0 !== e.guardHashOnly && P?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
		}
		const j = C ? E : P, $ = u ?? j?.nonwearMarkers ?? [], H = p ?? j?.isInvalidNight ?? !1, F = void 0 === C && T(b, P ?? { sleepMarkers: [] }, { sleepMarkers: i }), V = H || F, W = m ?? j?.explicitNoNonwear ?? !1, B = w ?? j?.needsConsensus ?? !1, K = 0 === i.length || 0 === $.length ? null : (await l.waitFor(Ne([{
			sleepMarkers: i,
			nonwearMarkers: $,
			isInvalidNight: V
		}])))[0] ?? null, U = K ? Me(i, K) : i, J = V || (K?.invalidates ?? !1), G = J && !K?.invalidates && (H ? void 0 === p ? !0 === j?.isInvalidNightImplicit : !0 === g : F);
		if (J && U.some((e) => e.markerType === d.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
		const X = await l.waitFor(S({
			sleepMarkers: U,
			nonwearMarkers: $,
			isInvalidNight: J,
			explicitNoNonwear: W,
			notes: f
		})), Y = null !== k ? await async function(e, t, n) {
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
		}(h, {
			fileId: r,
			date: a,
			username: o,
			algorithm: k
		}, {
			scorerVersion: N,
			detector: v,
			guider: I,
			sleepPeriodDetectionConfig: y,
			params: null,
			parameterSetHash: M,
			contentHash: _
		}) : null, Q = {
			fileId: r,
			date: a,
			username: o,
			algorithm: O,
			detectionRule: R,
			periodGuider: I,
			sleepPeriodDetectionConfig: y,
			algorithmVersion: N,
			scoringSessionId: Y,
			manualNonwearInSleep: !1,
			sleepMarkers: U,
			nonwearMarkers: $,
			isInvalidNight: J,
			...G ? { isInvalidNightImplicit: !0 } : {},
			explicitNoNonwear: W,
			needsConsensus: B,
			notes: f,
			contentHash: X,
			syncStatus: "pending",
			lastModifiedAt: C?.lastModifiedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
			...void 0 !== x ? { scoringContext: x } : {},
			...void 0 !== C ? { restoredFromBackup: C.restoreId } : {}
		}, Z = {
			fileId: r,
			date: a,
			username: o,
			previous: P ?? null,
			committed: Q,
			changed: dt(P) !== dt(Q)
		};
		await pt(Z, n);
		const ee = C ? E : A, te = ee && ee !== E ? {
			algorithm: ee.algorithm,
			detectionRule: ee.detectionRule
		} : void 0;
		return await L({
			op: "markers_put",
			fileId: r,
			username: o,
			...void 0 !== C ? { restoredFromBackup: C.restoreId } : {},
			payload: {
				...Q,
				prevContentHash: E?.contentHash,
				...te ? { replacedKey: te } : {}
			}
		}), await async function(e, t, { existing: n, replacement: r }, a) {
			const { fileId: s } = t;
			let o;
			n && JSON.stringify(n.sleepMarkers) === JSON.stringify(t.sleepMarkers) || await Promise.all(q.map(({ table: t, field: n }) => z(e, t).where("fileId").equals(s).modify({ [n]: !0 }))), r?.id ? (o = r.id, await e.markers.update(o, (e) => {
				Object.assign(e, t), void 0 === t.isInvalidNightImplicit && delete e.isInvalidNightImplicit, void 0 === t.restoredFromBackup && delete e.restoredFromBackup;
			})) : o = await e.markers.add(t);
			const i = await e.markerProvenance.get(s), l = c({
				...t,
				id: o
			}), d = i?.rows.find((e) => e.id === o);
			return ("auto_score" === l.username || l.nonwearDecided !== (d?.nonwearDecided ?? !1) || l.nonwearDecided && l.nonwearSpans !== d?.nonwearSpans) && await Ze([s], e, a), await e.markerProvenance.put({
				fileId: s,
				rows: [...(i?.rows ?? []).filter((e) => e.id !== o), l]
			}), o;
		}(t, Q, {
			existing: E,
			replacement: ee
		}, e.signal), Z;
	}, e.signal);
	if (D) throw new tt();
	return A;
}
async function vt(e, t, n) {
	return { changed: (await wt(e, t, () => Promise.resolve({
		kind: "unscore",
		expected: e.expected
	}), n)).changed };
}
function It(e, t, n) {
	return Ee(e, { periodMetrics: t }, n);
}
const yt = Symbol("marker-id");
function Nt(e) {
	const t = e;
	return t[yt] ??= s();
}
function Mt(e, t, n = !1) {
	return {
		...t ?? structuredClone(e),
		[yt]: n ? s() : Nt(e)
	};
}
function bt(e, t) {
	const n = (e) => H(Object.fromEntries(Object.entries(e).filter(([e]) => "markerIndex" !== e))), r = /* @__PURE__ */ new Map();
	for (const s of e) {
		const e = n(s), t = r.get(e) ?? [];
		t.push(s), r.set(e, t);
	}
	const a = /* @__PURE__ */ new Map();
	return t.map((e) => {
		const t = n(e), o = a.get(t) ?? 0;
		return a.set(t, o + 1), void 0 !== e[yt] ? e : {
			...e,
			[yt]: r.get(t)?.[o]?.[yt] ?? s()
		};
	});
}
function St(e, t) {
	return {
		...t,
		...void 0 !== t.sleepMarkers && t.sleepMarkers !== e.sleepMarkers ? { sleepMarkers: bt(e.sleepMarkers, t.sleepMarkers) } : {},
		...void 0 !== t.nonwearMarkers && t.nonwearMarkers !== e.nonwearMarkers ? { nonwearMarkers: bt(e.nonwearMarkers, t.nonwearMarkers) } : {}
	};
}
const xt = {
	selectedActiwareRest: "transient selection",
	actiwareRestPreview: "transient drag preview of a rest edge; the release writes through the rest owner"
}, _t = { selectedActiwareRest: null };
function Ot() {
	const e = p();
	return e && k.getState().getWorkspace(e), function(e) {
		try {
			return localStorage.getItem(e);
		} catch {
			return null;
		}
	}("__e2eLocalMode"), "local";
}
let Tt = null;
function Rt(e, t, n) {
	return !Tt || Tt.scope.workspaceId === n.workspaceId && Tt.scope.actor === n.actor && Tt.scope.studyId === n.studyId && Tt.scope.sourceKey === n.sourceKey || (Tt = null), null !== Tt && Tt.fileId === e && Tt.date === t ? Tt : null;
}
function Ct(e) {
	return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(0, 19).replace("T", " ");
}
const Dt = 86400, At = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * Dt * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), Et = (e) => e < 10 ? `0${String(e)}` : String(e);
function Pt(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / Dt), n = e - t * Dt;
	return `${At(t)} ${Et(Math.floor(n / 3600))}:${Et(Math.floor(n / 60) % 60)}:${Et(n % 60)}`;
}
function jt(e, t) {
	return null !== e && Number.isFinite(e) ? function(e) {
		return e % 60 == 0;
	}(t) ? function(e) {
		const t = /* @__PURE__ */ new Date(1e3 * e);
		return `${String(t.getUTCHours()).padStart(2, "0")}:${String(t.getUTCMinutes()).padStart(2, "0")}`;
	}(e) : Ct(e).slice(11) : "--:--";
}
t("epoch_5s");
const $t = Object.freeze({
	viewport: null,
	cursorTimestamp: null,
	cursorOwner: null,
	selection: null,
	renderScene: null,
	epochSeconds: null
}), Ht = v(() => ({ scenes: {} }));
var Ft = n({
	bindShown: () => wn,
	buildNightData: () => Gt,
	ensureOpened: () => In,
	fileSessionsSettled: () => Cn,
	flushCurrentNight: () => Mn,
	flushSession: () => bn,
	isHeldOutbox: () => qt,
	leavesNightUnscored: () => zt,
	newNightContext: () => Kt,
	nightMarkerStepSeconds: () => _n,
	nightSessions: () => xn,
	nightShown: () => Yt,
	nightTokenBrand: () => Lt,
	outboxKey: () => fn,
	sameNight: () => mn,
	sessionToken: () => hn,
	setNightScopeChanging: () => Jt,
	withoutUntouchedProposal: () => Xt
});
const Lt = Symbol("night-session"), Vt = {
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
}, Wt = Object.keys(Vt);
function Bt(e) {
	return Object.fromEntries(Wt.map((t) => [t, e[t]]));
}
function Kt(e, t = e.getState()) {
	return {
		...t,
		...Bt(e.getInitialState()),
		...pn(),
		isDirty: !1,
		isSaving: !1,
		saveError: null,
		nightLoading: !0
	};
}
let Ut = 0;
function Jt(e) {
	Ut += e ? 1 : -1;
}
function qt(e) {
	return on === e.key;
}
function Gt(e) {
	return {
		sleepMarkers: e.sleepMarkers.map((e) => Mt(e, {
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
		nonwearMarkers: e.nonwearMarkers.map((e) => Mt(e, {
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
function zt(e, t, n, r) {
	return !(!e || e.fileId !== t || e.date !== n || r.isInvalidNight || r.explicitNoNonwear || r.needsConsensus || r.notes || (r.nonwearMarkers?.length ?? 0) > 0 || 0 !== Xt(e, t, n, r).sleepMarkers.length);
}
function Xt(e, t, n, r) {
	return i(e, t, n, r.sleepMarkers) ? {
		...r,
		sleepMarkers: e?.authoredSleepMarkers ?? []
	} : r;
}
function Yt(e, t) {
	const n = t.availableDates[t.currentDateIndex];
	if (null === t.currentFileId || !n) return !1;
	const r = function(e) {
		const { username: t, selectedStudyId: n } = e;
		return {
			sourceKey: Ot(),
			workspaceId: p(),
			actor: t || "anonymous",
			studyId: n
		};
	}(t), a = t.nightLoading ? null : Rt(t.currentFileId, n, r);
	return mn(e, {
		...e,
		scope: r,
		db: "local" === r.sourceKey && m() ? I() : null,
		fileId: t.currentFileId,
		date: n,
		algorithm: a ? a.algorithm : e.algorithm,
		detectionRule: a ? a.detectionRule : e.detectionRule
	});
}
function Qt(e, t, n) {
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
function Zt(e, t = e.proposalNight ?? e.acceptingProposal) {
	return Xt(t, e.currentFileId ?? -1, e.availableDates[e.currentDateIndex] ?? "", Gt(e));
}
function en(e, t, n) {
	const r = n.proposalNight ?? (n.acceptingProposal !== t ? n.acceptingProposal : null), a = Zt(n, r);
	return void 0 !== e.dataSource?.unscoreNight && zt(r, e.fileId, e.date, a) ? { kind: "unscore" } : {
		kind: "save",
		data: a
	};
}
async function tn(e, t, n, r) {
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
					expected: s?.expected ?? nt(n),
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
			for (const r of t?.carried ?? []) ct(null, e, r);
			for (const r of t?.events?.(e.committed) ?? []) ct(null, e, r);
			const n = ut(e, t);
			n && ct(null, e, n);
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
const nn = 3, rn = /* @__PURE__ */ new Map(), an = /* @__PURE__ */ new WeakMap();
let sn = 0, on = null, ln = 0;
const cn = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakSet(), un = /* @__PURE__ */ new WeakMap(), pn = () => ({
	sleepMarkers: [],
	nonwearMarkers: [],
	isInvalidNight: !1,
	explicitNoNonwear: !1,
	needsConsensus: !1,
	notes: ""
});
function gn(e) {
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
function fn(e) {
	return e.db && !an.has(e.db) && an.set(e.db, sn += 1), JSON.stringify([
		e.db ? an.get(e.db) : 0,
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
function mn(e, t) {
	return null !== e && null !== t && fn(e) === fn(t);
}
function wn(e) {
	if (r(e.currentFileSourceType)) return null;
	return null;
}
function kn(e) {
	const t = wn(e);
	return t ? rn.get(fn(t)) ?? null : null;
}
function hn(e, t, n = e.binding) {
	const r = {
		[Lt]: !0,
		generation: e.generation,
		fileId: n.fileId,
		date: n.date,
		identity: n,
		context: t
	};
	return cn.set(r, e), on === e.key && ln === e.generation && Yt(n, e.store.getState()) && !e.store.getState().nightLoading && dn.add(r), r;
}
function vn(e, t) {
	if (void 0 !== t && (e.context = St(e.context, {
		...e.context,
		lastSavedAt: Date.now(),
		saveReceipt: {
			fileId: e.binding.fileId,
			date: e.binding.date,
			text: t
		}
	})), kn(e.store.getState()) !== e) return;
	const n = e.log[0]?.failure;
	e.store.setState({
		isDirty: e.log.some((e) => null !== e.failure || null != e.prepared?.mutation) || e.drags.size > 0,
		isSaving: null !== e.runner && !n,
		saveError: n?.message ?? null,
		canDiscardNightChanges: n instanceof tt || n instanceof et,
		placementRejected: e.context.placementRejected,
		placementRejectionReason: e.context.placementRejectionReason,
		lastSavedAt: e.context.lastSavedAt,
		saveReceipt: e.context.saveReceipt
	});
}
async function In(e, t = e.binding) {
	var n;
	e.opened || (await (n = {
		fileId: t.fileId,
		date: t.date,
		actor: t.scope.actor,
		store: it(t.db, t.scope),
		algorithm: t.algorithm,
		detectionRule: t.detectionRule
	}, ot(n, () => Promise.resolve())), function(e, t) {
		const n = e.context, r = t ? gn(t) : pn(), a = nt(t), s = void 0 !== e.saved && JSON.stringify(nt(e.saved)) === JSON.stringify(a) && (null !== a.contentHash || H(e.saved ? gn(e.saved) : null) === H(t ? r : null));
		void 0 === e.saved || s || (e.context = St(n, Kt(e.store, n))), e.saved = t, e.view = St(n, {
			...r,
			...s ? {
				sleepMarkers: n.sleepMarkers,
				nonwearMarkers: n.nonwearMarkers
			} : {}
		});
		const o = e.context, l = !r.isInvalidNight && H(r.sleepMarkers) === H(o.proposalNight?.authoredSleepMarkers ?? []) && i(o.proposalNight, e.binding.fileId, e.binding.date, o.sleepMarkers);
		e.context = St(o, {
			...o,
			...e.view,
			sleepMarkers: l ? o.sleepMarkers : e.view.sleepMarkers,
			proposalNight: l ? o.proposalNight : null
		}), e.opened = !0;
	}(e, await t.dataSource.loadMarkers(t.fileId, t.date, t.scope.actor, t.algorithm, t.detectionRule, t.db ?? void 0)), function(e, t) {
		if (!qt(e) || !e.shownOpen?.()) return;
		if (!e.opened) return void vn(e);
		const n = e.store, r = n.getState(), a = hn(e, r, t);
		if (e.identify?.(), s = {
			scope: t.scope,
			db: t.db,
			fileId: t.fileId,
			date: t.date,
			algorithm: t.algorithm,
			detectionRule: t.detectionRule,
			options: t.settings
		}, Tt = s, !xn.owns(a, r)) return;
		var s;
		const o = e.view, i = e.context;
		r.showStoredNight(a, t.fileId, t.date, {
			...o,
			sleepMarkers: i.sleepMarkers,
			view: Bt(i)
		}), e.context = St(e.context, n.getState()), vn(e);
	}(e, t));
}
function yn(e, t, n = e.binding) {
	if (void 0 === e.saved) throw new Error("The night has not opened; no write has a baseline.");
	const r = nt(e.saved);
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
function Nn(e) {
	if (e.runner || e.recovering || !e.log.length || e.log[0].failure) return;
	let t;
	e.runner = new Promise((e) => {
		t = e;
	}), (async () => {
		for (; e.log.length && !e.log[0].failure;) {
			const t = e.log[0], r = hn(e, t.token.context, t.token.identity);
			un.set(r, {
				slot: t,
				run: (e) => e()
			}), vn(e);
			try {
				if (t.prepared ??= await t.prepare(r), t.failure) throw t.prepared = null, t.failure;
				un.delete(r);
				const n = t.prepared;
				let a;
				if (n.refusal) a = {
					status: "dropped",
					reason: n.refusal
				};
				else if (n.mutation) {
					if (!t.audit) throw new Error("An internal read cannot write a night.");
					const r = [...n.carried];
					a = await tn(t.token.identity, yn(e, n.mutation, t.token.identity), {
						...t.audit,
						carried: r
					}, r);
				} else a = {
					status: "committed",
					night: e.saved ?? null
				};
				const s = e.saved ?? null;
				"committed" === a.status && n.mutation && (e.saved = a.night, n.accepting && (e.context = St(e.context, {
					...e.context,
					acceptingProposal: null
				}), e.store.getState().settleProposalAcceptance(n.accepting, !0))), e.log.shift(), "committed" !== a.status || !xn.holds(t.token, e.store.getState()) && dn.has(t.token) || t.options.onCommitted?.(a.night), t.settle(a), vn(e, "committed" === a.status && n.mutation && a.night ? Rn(s, a.night, {
					date: e.binding.date,
					undone: n.undone,
					stepSec: t.step
				}) : void 0);
			} catch (n) {
				un.delete(r), t.failure = n instanceof Error ? n : new Error(String(n)), t.prepared?.mutation || (t.prepared = null), t.settle({
					status: "dropped",
					reason: `${t.failure.message} Return to the Sleep page and use Retry.`
				}), t.failure instanceof tt || t.failure instanceof et || !(t.retries < nn) || (t.retries += 1, t.retryTimer = setTimeout(() => {
					t.retryTimer = null, t.failure = null, Nn(e);
				}, 2 ** t.retries * 1e3)), vn(e);
			}
		}
		e.runner = null, vn(e), t();
	})();
}
async function Mn(e) {
	const t = kn(e.getState());
	return !t || bn(t);
}
async function bn(e) {
	return Nn(e), await Sn(e), 0 === e.log.length;
}
async function Sn(e) {
	for (; e.runner;) await e.runner;
}
const xn = {
	executor: (e) => un.get(e)?.run ?? null,
	fail: (e, t) => {
		const n = un.get(e)?.slot;
		n && (n.failure = t instanceof Error ? t : new Error(String(t)));
	},
	holds: (e, t = cn.get(e)?.store.getState() ?? e.context) => !t.nightLoading && xn.owns(e, t),
	owns: (e, t = cn.get(e)?.store.getState() ?? e.context) => {
		const n = cn.get(e);
		return void 0 !== n && n.opened && on === n.key && ln === e.generation && n.generation === e.generation && Yt(n.binding, t);
	},
	night: (e) => cn.get(e)?.view ?? null,
	context: (e) => cn.get(e)?.context ?? e.context,
	updateContext: (e, t) => {
		const n = cn.get(e);
		n && (n.context = St(n.context ?? t, t));
	},
	write: (e, t, n, r) => {
		const a = cn.get(e), s = un.get(e);
		if (!a || !s) throw new Error("A night write requires its proposal's executor.");
		a.view = St(a.context ?? e.context, t), r && (a.context = St(a.context ?? r, {
			...r,
			...a.view
		})), s.slot.carried.push(...n);
	},
	enqueue: (e, t, n = !1, r) => {
		const a = cn.get(e);
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
				audit: r.readOnly ? null : Qt(t.identity, r.acts, o),
				baseline: null,
				prepared: null,
				failure: null,
				carried: o,
				retries: 0,
				retryTimer: null,
				step: _n(t)
			}, l = e.log.length > 1 ? e.log[e.log.length - 1] : void 0;
			return r.noteEdit && l?.options.noteEdit && null === l.prepared && null === l.failure && (e.log.pop(), s.then(l.settle)), e.log.push(i), Nn(e), vn(e), i;
		}(a, e, async (r) => {
			await In(a, e.identity);
			const i = xn.context(r);
			un.get(r).slot.baseline ??= gn(Zt(i));
			const l = i._editGeneration;
			return o = await t(r), n || xn.context(r)._editGeneration === l ? {
				mutation: null,
				accepting: null,
				carried: [],
				undone: !1
			} : function(e, t, n = e.store) {
				const r = xn.holds(t, n.getState()), a = r ? n.getState() : e.context, s = r ? a.acceptingProposal : null;
				return {
					mutation: r ? en(t.identity, s, a) : {
						kind: "save",
						data: e.view
					},
					accepting: s,
					carried: r ? n.takeShownEdits(t.identity) : un.get(t).slot.carried,
					undone: a.markerHistoryIndex < a.markerHistory.length - 1
				};
			}(a, r, s);
		}).settled.then((e) => ("dropped" !== e.status || "boolean" != typeof o) && o);
	},
	waiting: (e) => e ? (cn.get(e)?.log.length ?? 0) > 0 : [...rn.values()].some((e) => e.log.length > 0),
	setDragging: (e, t) => {
		const n = cn.get(e);
		t ? n?.drags.add(e) : n?.drags.delete(e);
	},
	scopeChanging: () => Ut > 0,
	hasUnsavedWork: () => [...rn.values()].some((e) => e.log.length > 0 || e.drags.size > 0),
	settled: async () => {
		await Promise.all([...rn.values()].map(Sn));
	}
};
function _n(t) {
	const n = cn.get(t)?.key ?? null;
	return function(t, n) {
		const r = n.availableFiles.find((e) => e.id === n.currentFileId)?.countEpochSeconds;
		return t.epochSeconds ?? e(C(n), r);
	}((r = null === n ? null : function(e, t, n, r) {
		return !e || !Number.isInteger(t) || (t ?? 0) <= 0 || !n ? null : `${r ?? e}\0${String(t)}\0${n}`;
	}(n, t.fileId, t.date, n), null == r ? $t : Ht.getState().scenes[r] ?? $t), t.context);
	var r;
}
function On(e) {
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
function Tn(e, t, n) {
	if (t === n || null === t || null === n) return null;
	const r = Math.abs(n - t);
	return `moved ${e} ${r >= 60 ? `${String(Math.round(r / 60))} min` : `${String(r)} s`} ${n < t ? "earlier" : "later"}`;
}
function Rn(e, t, { date: n, undone: r, stepSec: a }) {
	const s = (e) => jt(e, a), o = e ? On(e) : [], i = On(t), l = (e, t) => e.label === t.label && e.start === t.start && e.end === t.end, c = o.filter((e) => !i.some((t) => l(t, e))), d = i.filter((e) => !o.some((t) => l(e, t))), u = [];
	for (const g of c) {
		const e = d.findIndex((e) => e.label === g.label);
		if (-1 === e) {
			u.push(`deleted ${g.label} ${s(g.start)}–${s(g.end)}`);
			continue;
		}
		const [t] = d.splice(e, 1);
		if (!t) continue;
		const n = [Tn(g.startName, g.start, t.start), Tn(g.endName, g.end, t.end)].filter((e) => null !== e);
		u.push(n.length > 0 ? n.join(" and ") : `changed ${g.label}`);
	}
	for (const g of d) u.push(`${r ? "restored" : "saved"} ${g.label} ${s(g.start)}–${s(g.end)}`);
	(e?.isInvalidNight ?? !1) !== t.isInvalidNight && u.push(t.isInvalidNight ? "marked invalid night" : "cleared invalid night"), (e?.explicitNoNonwear ?? !1) !== (t.explicitNoNonwear ?? !1) && u.push(t.explicitNoNonwear ? "confirmed no nonwear" : "cleared no-nonwear"), (e?.needsConsensus ?? !1) !== t.needsConsensus && u.push(t.needsConsensus ? "flagged for consensus" : "unflagged for consensus"), (e?.notes ?? "") !== t.notes && u.push("saved note");
	const p = u.length > 0 ? u.join("; ") : "nothing changed";
	return r ? `Undid — ${p} on ${n}` : `${p.charAt(0).toUpperCase()}${p.slice(1)} on ${n}`;
}
async function Cn(e, t, n) {
	await Promise.all([...rn.values()].filter((r) => r.binding.db === e && r.binding.fileId === t && (!n || r.binding.date === n.date && r.binding.scope.actor === n.username)).map(Sn));
}
export { Be as A, Me as B, wt as C, qe as D, ze as E, De as F, G, Ie as H, Re as I, J, z as K, Oe as L, Ke as M, je as N, Ve as O, He as P, be as R, vt as S, Ge as T, Z as U, pe as V, Q as W, V as X, B as Y, St as _, _n as a, lt as b, mn as c, Ct as d, Pt as f, Nt as g, Mt as h, zt as i, Je as j, $e as k, Xt as l, xt as m, Cn as n, xn as o, _t as p, U as q, Mn as r, Ft as s, wn as t, jt as u, It as v, Ze as w, kt as x, nt as y, Ne as z };
