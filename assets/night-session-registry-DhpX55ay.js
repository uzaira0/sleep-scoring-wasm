import { A as e, In as t, Nn as n, an as r, g as a, k as s, m as o, mn as i, pn as l, v as c, w as d } from "./schema-BGRflpdS.js";
import { r as u } from "./workers-B1E_CQH7.js";
import { c as p, r as g, u as f } from "./legacy-invalid-night-zjKZRSNb.js";
import { a as m, at as w, it as k, lt as h, n as v, nt as I, o as y, ot as N, t as M } from "./workspace-db-ZwhOL3AY.js";
import { a as b, o as S } from "./content-hash-D4_ZE65l.js";
import { a as x, i as _ } from "./project-revision-CwL8VPmR.js";
import { K as O, Q as T, X as R, c as C, ct as D, lt as A, nt as E, st as P, ut as j } from "./per-source-defaults-D5O6G9kE.js";
import { t as $ } from "./audit-log-BT4oxwxf.js";
import { t as H } from "./audit-hash-B_VayGEe.js";
import { i as F, t as L } from "./wal-eDWFo4nR.js";
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
function Z(e, t, n, r) {
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
function Q(e, t, n) {
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
	const u = Math.min(i, c), p = Math.max(l, d), g = P(a, o), f = Math.min(t, s), m = Y({
		...g !== r.MAIN_SLEEP || E(a) ? a : o,
		onsetTimestamp: u,
		offsetTimestamp: p,
		markerType: g
	}), w = e.filter((e, n) => n !== t && n !== s);
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
	return e.filter((e) => e.markerType === r.MAIN_SLEEP).length;
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
		return null !== n && null !== r && !Z(e.sleepMarkers, n, r, ee(t.firstOffset) ?? r).ok;
	},
	merge_no_neighbor: ({ before: e, payload: t }) => {
		const n = ee(t.periodIndex), r = ne(t.direction);
		return null !== n && ("prev" === r || "next" === r) && !Q(e.sleepMarkers, n, r).ok;
	},
	mutation_on_read_only_view: ({ context: e }) => !0 === e.readOnlyView,
	undo_beyond_history: ({ context: e }) => void 0 !== e.undoDepth && e.undoDepth <= 0,
	redo_beyond_history: ({ context: e }) => void 0 !== e.redoDepth && e.redoDepth <= 0
};
function pe(e, t) {
	const n = p[e]?.guards ?? [], r = [];
	for (const a of n) {
		const e = ue[a], n = f[a];
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
		const a = Z(e.sleepMarkers, n, r, ee(t.firstOffset) ?? r);
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
		const a = Q(e.sleepMarkers, n, r);
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
		const { isInvalidNightImplicit: a, ...s } = e;
		if (!n) return { state: {
			...s,
			isInvalidNight: !1
		} };
		const o = re(e.sleepMarkers.filter((e) => e.markerType !== r.MAIN_SLEEP)), i = !0 === te(t.implicit);
		return { state: {
			...s,
			isInvalidNight: !0,
			...i ? { isInvalidNightImplicit: !0 } : {},
			sleepMarkers: o
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
	const r = g(t), a = r.payload ?? {}, s = me[r.action], o = s ? s(e, a, r) : { state: e }, i = o.state;
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
	return "object" != typeof e || null === e ? null : "string" == typeof e.action ? g(e) : null;
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
		n = s.state, null !== e && !0 === p[e.action]?.stateKeyframe && s.reconstructed ? r = "exact" : s.reconstructed || "exact" !== r || (r = "divergent"), "exact" === r && null !== e && he(e, n) && (r = "divergent"), t.push({
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
	return null === e ? l : e;
}
function xe(e) {
	return null == e ? i : e;
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
async function De(e, t, n, r, a, s = M()) {
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
async function Pe(e, t = M(), n, r) {
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
	return `${w.SCORED_VARIANT_WARM}:${String(e)}`;
}
function $e(e = k.getState().jobs) {
	if (!v()) return null;
	const t = Object.values(e).reverse().find((e) => I(e) && e.workspaceId === M().name && e.kind === w.SCORED_VARIANT_WARM && e.status !== N.DONE && e.status !== N.CANCELLED);
	return t ? {
		fileId: Number(t.key.split(":").at(-1)),
		done: t.done,
		total: t.total,
		...t.status === N.FAILED ? { failed: !0 } : {}
	} : null;
}
function He(e, t) {
	if (!v() || t && M() !== t) return;
	const n = (t ?? M()).name, r = k.getState();
	if (!e) return;
	const a = je(e.fileId), s = `${n}:${a}`;
	r.jobs[s] && !e.failed || r.update(s, {
		id: s,
		workspaceId: n,
		key: a,
		kind: w.SCORED_VARIANT_WARM,
		label: "Scoring variants",
		controller: r.jobs[s]?.controller ?? new AbortController(),
		done: e.done,
		total: e.total,
		status: e.failed ? N.FAILED : N.RUNNING
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
const Ze = /* @__PURE__ */ new WeakMap();
async function Qe(e, t = M(), r) {
	let a = n.currentTransaction;
	for (; a?.parent;) a = a.parent;
	if (await x(t, [t.projectMeta], async () => {
		const e = await t.projectMeta.get(ze);
		await t.projectMeta.put({
			key: ze,
			revision: (e?.revision ?? 0) + 1
		}), await t.projectMeta.delete(Ge);
	}, r), !a || a.db !== t) {
		for (const n of new Set(e)) Ye(n, t, r);
		return;
	}
	let s = Ze.get(a);
	if (!s) {
		s = /* @__PURE__ */ new Set(), Ze.set(a, s);
		const e = s;
		a.idbtrans.addEventListener("complete", () => {
			for (const n of e) Ye(n, t, r);
		}, { once: !0 });
	}
	for (const n of e) s.add(n);
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
	if (null === t) return n.Promise.resolve();
	const r = t.binding;
	if (!r) throw new Error("A local night write requires the audit binding captured at its act.");
	const a = (t) => ({
		fileId: e.fileId,
		analysisDate: e.date,
		action: t.action,
		...void 0 === t.payload ? {} : { payload: t.payload }
	}), s = ut(e, t);
	return $.appendNightEditsInTransaction([
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
		const s = await De(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), o = await n(s ? Oe(s) : null);
		if (!o) return null;
		null !== r && await $.settleWrites();
		const i = "save" === o.kind ? await ht(o.input, t, r) : await async function(e, t, n, r) {
			const { fileId: s, date: o, username: i, algorithm: l, detectionRule: c, expected: d } = e;
			let u = !1;
			const p = await gt(t, async () => {
				if (void 0 === await t.files.get(s)) throw new et();
				const p = await Ce(e, l, c, t);
				if (void 0 !== d && !rt(p, d)) return p?.id && await Pe(p.id, t, p), u = !0, {
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
					return await pt(e, n), e;
				}
				const g = Oe(p);
				await L({
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
					}).nonwearDecided) && await Qe([t], e, r);
				}(t, s, [p], r);
				const f = {
					fileId: s,
					date: o,
					username: i,
					previous: g,
					committed: null,
					changed: null !== dt(g)
				};
				return await pt(f, n), f;
			}, r);
			if (u) throw new tt();
			if (null !== p.previous && "auto_score" !== i) {
				const { scheduleGgirRecompute: e } = await import("./local-export-worker-BqV3_TjS.js").then((e) => e.t);
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
async function ht(e, t, s) {
	const { fileId: i, date: l, username: c, sleepMarkers: d, nonwearMarkers: u, isInvalidNight: p, isInvalidNightImplicit: g, notes: f, explicitNoNonwear: m, needsConsensus: w, algorithm: k = null, scoringContext: h, detectionRule: v = null, periodGuider: I = null, sleepPeriodDetectionConfig: y = null, algorithmVersion: N = null } = e, M = null !== k ? await n.waitFor(async function(e) {
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
		return S(Te(n));
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
	} : void 0), _ = null !== k && null !== M ? await n.waitFor(S(Te(ft({
		fileId: i,
		date: l,
		username: c,
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
		const S = await t.files.get(i);
		if (void 0 === S) throw new et();
		const A = await Ce({
			fileId: i,
			date: l,
			username: c
		}, k, v, t), E = A?.algorithm === O && A.detectionRule === R ? A : void 0, P = A ? Oe(A) : void 0;
		if (C && E && E.lastModifiedAt >= C.lastModifiedAt) return {
			fileId: i,
			date: l,
			username: c,
			previous: P ?? null,
			committed: Oe(E),
			changed: !1
		};
		if (void 0 !== e.expected) {
			if (!rt(P, e.expected)) return A?.id && await Pe(A.id, t, A), D = !0, {
				fileId: i,
				date: l,
				username: c,
				previous: P ?? null,
				committed: P ?? null,
				changed: !1
			};
			if (!0 !== e.guardHashOnly && P?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
		}
		const j = C ? E : P, $ = u ?? j?.nonwearMarkers ?? [], H = p ?? j?.isInvalidNight ?? !1, F = void 0 === C && T(S, P ?? { sleepMarkers: [] }, { sleepMarkers: d }), V = H || F, W = m ?? j?.explicitNoNonwear ?? !1, B = w ?? j?.needsConsensus ?? !1, K = 0 === d.length || 0 === $.length ? null : (await n.waitFor(Ne([{
			sleepMarkers: d,
			nonwearMarkers: $,
			isInvalidNight: V
		}])))[0] ?? null, U = K ? Me(d, K) : d, J = V || (K?.invalidates ?? !1), G = J && !K?.invalidates && (H ? void 0 === p ? !0 === j?.isInvalidNightImplicit : !0 === g : F);
		if (J && U.some((e) => e.markerType === r.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
		const X = await n.waitFor(b({
			sleepMarkers: U,
			nonwearMarkers: $,
			isInvalidNight: J,
			explicitNoNonwear: W,
			notes: f
		})), Y = null !== k ? await async function(e, t, n) {
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
		}(h, {
			fileId: i,
			date: l,
			username: c,
			algorithm: k
		}, {
			scorerVersion: N,
			detector: v,
			guider: I,
			sleepPeriodDetectionConfig: y,
			params: null,
			parameterSetHash: M,
			contentHash: _
		}) : null, Z = {
			fileId: i,
			date: l,
			username: c,
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
		}, Q = {
			fileId: i,
			date: l,
			username: c,
			previous: P ?? null,
			committed: Z,
			changed: dt(P) !== dt(Z)
		};
		await pt(Q, s);
		const ee = C ? E : A, te = ee && ee !== E ? {
			algorithm: ee.algorithm,
			detectionRule: ee.detectionRule
		} : void 0;
		return await L({
			op: "markers_put",
			fileId: i,
			username: c,
			...void 0 !== C ? { restoredFromBackup: C.restoreId } : {},
			payload: {
				...Z,
				prevContentHash: E?.contentHash,
				...te ? { replacedKey: te } : {}
			}
		}), await async function(e, t, { existing: n, replacement: r }, s) {
			const { fileId: o } = t;
			let i;
			n && JSON.stringify(n.sleepMarkers) === JSON.stringify(t.sleepMarkers) || await Promise.all(q.map(({ table: t, field: n }) => z(e, t).where("fileId").equals(o).modify({ [n]: !0 }))), r?.id ? (i = r.id, await e.markers.update(i, (e) => {
				Object.assign(e, t), void 0 === t.isInvalidNightImplicit && delete e.isInvalidNightImplicit, void 0 === t.restoredFromBackup && delete e.restoredFromBackup;
			})) : i = await e.markers.add(t);
			const l = await e.markerProvenance.get(o), c = a({
				...t,
				id: i
			}), d = l?.rows.find((e) => e.id === i);
			return ("auto_score" === c.username || c.nonwearDecided !== (d?.nonwearDecided ?? !1) || c.nonwearDecided && c.nonwearSpans !== d?.nonwearSpans) && await Qe([o], e, s), await e.markerProvenance.put({
				fileId: o,
				rows: [...(l?.rows ?? []).filter((e) => e.id !== i), c]
			}), i;
		}(t, Z, {
			existing: E,
			replacement: ee
		}, e.signal), Q;
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
	return t[yt] ??= o();
}
function Mt(e, t, n = !1) {
	return {
		...t ?? structuredClone(e),
		[yt]: n ? o() : Nt(e)
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
		const t = n(e), s = a.get(t) ?? 0;
		return a.set(t, s + 1), void 0 !== e[yt] ? e : {
			...e,
			[yt]: r.get(t)?.[s]?.[yt] ?? o()
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
	const e = m();
	return e && y.getState().getWorkspace(e), function(e) {
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
function Dt(e) {
	return `${String(e.getFullYear()).padStart(4, "0")}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
const At = 86400, Et = function() {
	let e = NaN, t = "";
	return (n) => (n !== e && (t = (/* @__PURE__ */ new Date(n * At * 1e3)).toISOString().slice(0, 10), e = n), t);
}(), Pt = (e) => e < 10 ? `0${String(e)}` : String(e);
function jt(e) {
	if (!Number.isInteger(e)) return (/* @__PURE__ */ new Date(1e3 * e)).toISOString().replace(".000Z", "").replace("T", " ");
	const t = Math.floor(e / At), n = e - t * At;
	return `${Et(t)} ${Pt(Math.floor(n / 3600))}:${Pt(Math.floor(n / 60) % 60)}:${Pt(n % 60)}`;
}
function $t(e, t) {
	return null !== e && Number.isFinite(e) ? function(e) {
		return e % 60 == 0;
	}(t) ? function(e) {
		const t = /* @__PURE__ */ new Date(1e3 * e);
		return `${String(t.getUTCHours()).padStart(2, "0")}:${String(t.getUTCMinutes()).padStart(2, "0")}`;
	}(e) : Ct(e).slice(11) : "--:--";
}
e("epoch_5s");
const Ht = Object.freeze({
	viewport: null,
	cursorTimestamp: null,
	cursorOwner: null,
	selection: null,
	renderScene: null,
	epochSeconds: null
}), Ft = h(() => ({ scenes: {} }));
var Lt = t({
	bindShown: () => kn,
	buildNightData: () => zt,
	ensureOpened: () => yn,
	fileSessionsSettled: () => Dn,
	flushCurrentNight: () => bn,
	flushSession: () => Sn,
	isHeldOutbox: () => Gt,
	leavesNightUnscored: () => Xt,
	newNightContext: () => Ut,
	nightMarkerStepSeconds: () => On,
	nightSessions: () => _n,
	nightShown: () => Zt,
	nightTokenBrand: () => Vt,
	outboxKey: () => mn,
	sameNight: () => wn,
	sessionToken: () => vn,
	setNightScopeChanging: () => qt,
	withoutUntouchedProposal: () => Yt
});
const Vt = Symbol("night-session"), Wt = {
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
}, Bt = Object.keys(Wt);
function Kt(e) {
	return Object.fromEntries(Bt.map((t) => [t, e[t]]));
}
function Ut(e, t = e.getState()) {
	return {
		...t,
		...Kt(e.getInitialState()),
		...gn(),
		isDirty: !1,
		isSaving: !1,
		saveError: null,
		nightLoading: !0
	};
}
let Jt = 0;
function qt(e) {
	Jt += e ? 1 : -1;
}
function Gt(e) {
	return ln === e.key;
}
function zt(e) {
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
function Xt(e, t, n, r) {
	return !(!e || e.fileId !== t || e.date !== n || r.isInvalidNight || r.explicitNoNonwear || r.needsConsensus || r.notes || (r.nonwearMarkers?.length ?? 0) > 0 || 0 !== Yt(e, t, n, r).sleepMarkers.length);
}
function Yt(e, t, n, r) {
	return c(e, t, n, r.sleepMarkers) ? {
		...r,
		sleepMarkers: e?.authoredSleepMarkers ?? []
	} : r;
}
function Zt(e, t) {
	const n = t.availableDates[t.currentDateIndex];
	if (null === t.currentFileId || !n) return !1;
	const r = function(e) {
		const { username: t, selectedStudyId: n } = e;
		return {
			sourceKey: Ot(),
			workspaceId: m(),
			actor: t || "anonymous",
			studyId: n
		};
	}(t), a = t.nightLoading ? null : Rt(t.currentFileId, n, r);
	return wn(e, {
		...e,
		scope: r,
		db: "local" === r.sourceKey && v() ? M() : null,
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
function en(e, t = e.proposalNight ?? e.acceptingProposal) {
	return Yt(t, e.currentFileId ?? -1, e.availableDates[e.currentDateIndex] ?? "", zt(e));
}
function tn(e, t, n) {
	const r = n.proposalNight ?? (n.acceptingProposal !== t ? n.acceptingProposal : null), a = en(n, r);
	return void 0 !== e.dataSource?.unscoreNight && Xt(r, e.fileId, e.date, a) ? { kind: "unscore" } : {
		kind: "save",
		data: a
	};
}
async function nn(e, t, n, r) {
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
const rn = 3, an = /* @__PURE__ */ new Map(), sn = /* @__PURE__ */ new WeakMap();
let on = 0, ln = null, cn = 0;
const dn = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakSet(), pn = /* @__PURE__ */ new WeakMap(), gn = () => ({
	sleepMarkers: [],
	nonwearMarkers: [],
	isInvalidNight: !1,
	explicitNoNonwear: !1,
	needsConsensus: !1,
	notes: ""
});
function fn(e) {
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
function mn(e) {
	return e.db && !sn.has(e.db) && sn.set(e.db, on += 1), JSON.stringify([
		e.db ? sn.get(e.db) : 0,
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
function wn(e, t) {
	return null !== e && null !== t && mn(e) === mn(t);
}
function kn(e) {
	if (d(e.currentFileSourceType)) return null;
	return null;
}
function hn(e) {
	const t = kn(e);
	return t ? an.get(mn(t)) ?? null : null;
}
function vn(e, t, n = e.binding) {
	const r = {
		[Vt]: !0,
		generation: e.generation,
		fileId: n.fileId,
		date: n.date,
		identity: n,
		context: t
	};
	return dn.set(r, e), ln === e.key && cn === e.generation && Zt(n, e.store.getState()) && !e.store.getState().nightLoading && un.add(r), r;
}
function In(e, t) {
	if (void 0 !== t && (e.context = St(e.context, {
		...e.context,
		lastSavedAt: Date.now(),
		saveReceipt: {
			fileId: e.binding.fileId,
			date: e.binding.date,
			text: t
		}
	})), hn(e.store.getState()) !== e) return;
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
async function yn(e, t = e.binding) {
	var n;
	e.opened || (await (n = {
		fileId: t.fileId,
		date: t.date,
		actor: t.scope.actor,
		store: it(t.db, t.scope),
		algorithm: t.algorithm,
		detectionRule: t.detectionRule
	}, ot(n, () => Promise.resolve())), function(e, t) {
		const n = e.context, r = t ? fn(t) : gn(), a = nt(t), s = void 0 !== e.saved && JSON.stringify(nt(e.saved)) === JSON.stringify(a) && (null !== a.contentHash || H(e.saved ? fn(e.saved) : null) === H(t ? r : null));
		void 0 === e.saved || s || (e.context = St(n, Ut(e.store, n))), e.saved = t, e.view = St(n, {
			...r,
			...s ? {
				sleepMarkers: n.sleepMarkers,
				nonwearMarkers: n.nonwearMarkers
			} : {}
		});
		const o = e.context, i = !r.isInvalidNight && H(r.sleepMarkers) === H(o.proposalNight?.authoredSleepMarkers ?? []) && c(o.proposalNight, e.binding.fileId, e.binding.date, o.sleepMarkers);
		e.context = St(o, {
			...o,
			...e.view,
			sleepMarkers: i ? o.sleepMarkers : e.view.sleepMarkers,
			proposalNight: i ? o.proposalNight : null
		}), e.opened = !0;
	}(e, await t.dataSource.loadMarkers(t.fileId, t.date, t.scope.actor, t.algorithm, t.detectionRule, t.db ?? void 0)), function(e, t) {
		if (!Gt(e) || !e.shownOpen?.()) return;
		if (!e.opened) return void In(e);
		const n = e.store, r = n.getState(), a = vn(e, r, t);
		if (e.identify?.(), s = {
			scope: t.scope,
			db: t.db,
			fileId: t.fileId,
			date: t.date,
			algorithm: t.algorithm,
			detectionRule: t.detectionRule,
			options: t.settings
		}, Tt = s, !_n.owns(a, r)) return;
		var s;
		const o = e.view, i = e.context;
		r.showStoredNight(a, t.fileId, t.date, {
			...o,
			sleepMarkers: i.sleepMarkers,
			view: Kt(i)
		}), e.context = St(e.context, n.getState()), In(e);
	}(e, t));
}
function Nn(e, t, n = e.binding) {
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
function Mn(e) {
	if (e.runner || e.recovering || !e.log.length || e.log[0].failure) return;
	let t;
	e.runner = new Promise((e) => {
		t = e;
	}), (async () => {
		for (; e.log.length && !e.log[0].failure;) {
			const t = e.log[0], r = vn(e, t.token.context, t.token.identity);
			pn.set(r, {
				slot: t,
				run: (e) => e()
			}), In(e);
			try {
				if (t.prepared ??= await t.prepare(r), t.failure) throw t.prepared = null, t.failure;
				pn.delete(r);
				const n = t.prepared;
				let a;
				if (n.refusal) a = {
					status: "dropped",
					reason: n.refusal
				};
				else if (n.mutation) {
					if (!t.audit) throw new Error("An internal read cannot write a night.");
					const r = [...n.carried];
					a = await nn(t.token.identity, Nn(e, n.mutation, t.token.identity), {
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
				}), e.store.getState().settleProposalAcceptance(n.accepting, !0))), e.log.shift(), "committed" !== a.status || !_n.holds(t.token, e.store.getState()) && un.has(t.token) || t.options.onCommitted?.(a.night), t.settle(a), In(e, "committed" === a.status && n.mutation && a.night ? Cn(s, a.night, {
					date: e.binding.date,
					undone: n.undone,
					stepSec: t.step
				}) : void 0);
			} catch (n) {
				pn.delete(r), t.failure = n instanceof Error ? n : new Error(String(n)), t.prepared?.mutation || (t.prepared = null), t.settle({
					status: "dropped",
					reason: `${t.failure.message} Return to the Sleep page and use Retry.`
				}), t.failure instanceof tt || t.failure instanceof et || !(t.retries < rn) || (t.retries += 1, t.retryTimer = setTimeout(() => {
					t.retryTimer = null, t.failure = null, Mn(e);
				}, 2 ** t.retries * 1e3)), In(e);
			}
		}
		e.runner = null, In(e), t();
	})();
}
async function bn(e) {
	const t = hn(e.getState());
	return !t || Sn(t);
}
async function Sn(e) {
	return Mn(e), await xn(e), 0 === e.log.length;
}
async function xn(e) {
	for (; e.runner;) await e.runner;
}
const _n = {
	executor: (e) => pn.get(e)?.run ?? null,
	fail: (e, t) => {
		const n = pn.get(e)?.slot;
		n && (n.failure = t instanceof Error ? t : new Error(String(t)));
	},
	holds: (e, t = dn.get(e)?.store.getState() ?? e.context) => !t.nightLoading && _n.owns(e, t),
	owns: (e, t = dn.get(e)?.store.getState() ?? e.context) => {
		const n = dn.get(e);
		return void 0 !== n && n.opened && ln === n.key && cn === e.generation && n.generation === e.generation && Zt(n.binding, t);
	},
	night: (e) => dn.get(e)?.view ?? null,
	context: (e) => dn.get(e)?.context ?? e.context,
	updateContext: (e, t) => {
		const n = dn.get(e);
		n && (n.context = St(n.context ?? t, t));
	},
	write: (e, t, n, r) => {
		const a = dn.get(e), s = pn.get(e);
		if (!a || !s) throw new Error("A night write requires its proposal's executor.");
		a.view = St(a.context ?? e.context, t), r && (a.context = St(a.context ?? r, {
			...r,
			...a.view
		})), s.slot.carried.push(...n);
	},
	enqueue: (e, t, n = !1, r) => {
		const a = dn.get(e);
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
				step: On(t)
			}, l = e.log.length > 1 ? e.log[e.log.length - 1] : void 0;
			return r.noteEdit && l?.options.noteEdit && null === l.prepared && null === l.failure && (e.log.pop(), s.then(l.settle)), e.log.push(i), Mn(e), In(e), i;
		}(a, e, async (r) => {
			await yn(a, e.identity);
			const i = _n.context(r);
			pn.get(r).slot.baseline ??= fn(en(i));
			const l = i._editGeneration;
			return o = await t(r), n || _n.context(r)._editGeneration === l ? {
				mutation: null,
				accepting: null,
				carried: [],
				undone: !1
			} : function(e, t, n = e.store) {
				const r = _n.holds(t, n.getState()), a = r ? n.getState() : e.context, s = r ? a.acceptingProposal : null;
				return {
					mutation: r ? tn(t.identity, s, a) : {
						kind: "save",
						data: e.view
					},
					accepting: s,
					carried: r ? n.takeShownEdits(t.identity) : pn.get(t).slot.carried,
					undone: a.markerHistoryIndex < a.markerHistory.length - 1
				};
			}(a, r, s);
		}).settled.then((e) => ("dropped" !== e.status || "boolean" != typeof o) && o);
	},
	waiting: (e) => e ? (dn.get(e)?.log.length ?? 0) > 0 : [...an.values()].some((e) => e.log.length > 0),
	setDragging: (e, t) => {
		const n = dn.get(e);
		t ? n?.drags.add(e) : n?.drags.delete(e);
	},
	scopeChanging: () => Jt > 0,
	hasUnsavedWork: () => [...an.values()].some((e) => e.log.length > 0 || e.drags.size > 0),
	settled: async () => {
		await Promise.all([...an.values()].map(xn));
	}
};
function On(e) {
	const t = dn.get(e)?.key ?? null;
	return function(e, t) {
		const n = t.availableFiles.find((e) => e.id === t.currentFileId)?.countEpochSeconds;
		return e.epochSeconds ?? s(C(t), n);
	}((n = null === t ? null : function(e, t, n, r) {
		return !e || !Number.isInteger(t) || (t ?? 0) <= 0 || !n ? null : `${r ?? e}\0${String(t)}\0${n}`;
	}(t, e.fileId, e.date, t), null == n ? Ht : Ft.getState().scenes[n] ?? Ht), e.context);
	var n;
}
function Tn(e) {
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
function Rn(e, t, n) {
	if (t === n || null === t || null === n) return null;
	const r = Math.abs(n - t);
	return `moved ${e} ${r >= 60 ? `${String(Math.round(r / 60))} min` : `${String(r)} s`} ${n < t ? "earlier" : "later"}`;
}
function Cn(e, t, { date: n, undone: r, stepSec: a }) {
	const s = (e) => $t(e, a), o = e ? Tn(e) : [], i = Tn(t), l = (e, t) => e.label === t.label && e.start === t.start && e.end === t.end, c = o.filter((e) => !i.some((t) => l(t, e))), d = i.filter((e) => !o.some((t) => l(e, t))), u = [];
	for (const g of c) {
		const e = d.findIndex((e) => e.label === g.label);
		if (-1 === e) {
			u.push(`deleted ${g.label} ${s(g.start)}–${s(g.end)}`);
			continue;
		}
		const [t] = d.splice(e, 1);
		if (!t) continue;
		const n = [Rn(g.startName, g.start, t.start), Rn(g.endName, g.end, t.end)].filter((e) => null !== e);
		u.push(n.length > 0 ? n.join(" and ") : `changed ${g.label}`);
	}
	for (const g of d) u.push(`${r ? "restored" : "saved"} ${g.label} ${s(g.start)}–${s(g.end)}`);
	(e?.isInvalidNight ?? !1) !== t.isInvalidNight && u.push(t.isInvalidNight ? "marked invalid night" : "cleared invalid night"), (e?.explicitNoNonwear ?? !1) !== (t.explicitNoNonwear ?? !1) && u.push(t.explicitNoNonwear ? "confirmed no nonwear" : "cleared no-nonwear"), (e?.needsConsensus ?? !1) !== t.needsConsensus && u.push(t.needsConsensus ? "flagged for consensus" : "unflagged for consensus"), (e?.notes ?? "") !== t.notes && u.push("saved note");
	const p = u.length > 0 ? u.join("; ") : "nothing changed";
	return r ? `Undid — ${p} on ${n}` : `${p.charAt(0).toUpperCase()}${p.slice(1)} on ${n}`;
}
async function Dn(e, t, n) {
	await Promise.all([...an.values()].filter((r) => r.binding.db === e && r.binding.fileId === t && (!n || r.binding.date === n.date && r.binding.scope.actor === n.username)).map(xn));
}
export { $e as A, Ne as B, vt as C, ze as D, Ge as E, He as F, Z as G, pe as H, De as I, U as J, G as K, Re as L, Je as M, Ke as N, qe as O, je as P, Oe as R, kt as S, Qe as T, Ie as U, Me as V, Q as W, B as X, J as Y, V as Z, Nt as _, On as a, nt as b, wn as c, Ct as d, jt as f, Mt as g, xt as h, Xt as i, Be as j, Ve as k, Yt as l, _t as m, Dn as n, _n as o, Dt as p, z as q, bn as r, Lt as s, kn as t, $t as u, St as v, wt as w, lt as x, It as y, be as z };
