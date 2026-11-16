import { D as e, It as n, Pn as i, Qt as a, Sn as s, St as r, an as o, b as l, h as c, jn as u, nn as d, on as p, p as f, rn as m, sn as h, w as g, x as y, xt as w } from "./schema-D8rqa1Y6.js";
import { i as _, n as v, r as b, s as k } from "./workers-CrU4fDAf.js";
import { D as S, F as I, N as A, P as x, T as N, k as $, nt as T, ot as z, p as D, r as M, rt as R, s as C, t as E, ut as F } from "./workspace-db-tot7PUXb.js";
import { l as P, r as O } from "./legacy-invalid-night-zjKZRSNb.js";
import { a as j } from "./content-hash-CZ-UAlQR.js";
import { f as B, h as Z, n as q, r as G, s as H, u as J, v as U } from "./background-jobs-B2uo95VO.js";
import { a as L, i as W, n as V } from "./api-errors-D9Ekrb9I.js";
import { p as Y } from "./ggir-results-types-DHGfKmuO.js";
import { a as K } from "./project-revision-CRZNLUWr.js";
import { A as X, At as Q, B as ee, C as te, D as ne, Dt as ie, E as ae, Et as se, F as re, Ft as oe, G as le, Gt as ce, Ht as ue, I as de, It as pe, L as fe, Lt as me, M as he, Mt as ge, N as ye, Nt as we, Ot as _e, P as ve, Pt as be, R as ke, T as Se, Tt as Ie, Vt as Ae, _ as xe, _t as Ne, a as $e, b as Te, d as ze, dt as De, en as Me, ft as Re, gt as Ce, i as Ee, j as Fe, jt as Pe, k as Oe, kt as je, mt as Be, nn as Ze, nt as qe, pt as Ge, qt as He, r as Je, tn as Ue, tt as Le, ut as We, v as Ve, vt as Ye, w as Ke, wt as Xe, y as Qe, z as et, zt as tt } from "./store-StTfKmbj.js";
import { C as nt, E as it, F as at, H as st, I as rt, J as ot, L as lt, M as ct, R as ut, S as dt, T as pt, d as ft, j as mt, q as ht, w as gt, y as yt } from "./night-session-registry-Blk6S0Kz.js";
import { A as wt, B as _t, H as vt, I as bt, J as kt, L as St, N as It, P as At, R as xt, S as Nt, St as $t, V as Tt, X as zt, Y as Dt, _t as Mt, d as Rt, dt as Ct, et as Et, f as Ft, i as Pt, l as Ot, m as jt, o as Bt, q as Zt, tt as qt, u as Gt, y as Ht, z as Jt } from "./per-source-defaults-DHWdfoJI.js";
import { t as Ut } from "./audit-log-RFivnbbI.js";
import { r as Lt } from "./audit-hash-DNLMlimm.js";
import { i as Wt, t as Vt } from "./wal-dFFTBSLU.js";
import { C as Yt, D as Kt, E as Xt, S as Qt, T as en, b as tn, c as nn, d as an, h as sn, k as rn, l as on, m as ln, n as cn, p as un, s as dn, t as pn, v as fn, w as mn, x as hn } from "./local-nonwear-unified-DbYlb1Ol.js";
import { r as gn, t as yn } from "./diagnostic-log-D1tZZeTx.js";
import { f as wn } from "./physical-activity-cutpoint-presets-DYgOVqK-.js";
import { _ as _n, f as vn, g as bn, p as kn } from "./diary-local-import-contract-DCnnm6VV.js";
import { n as Sn, s as In, t as An } from "./csv-column-mapping-BSSY09yh.js";
import { y as xn } from "./ggir-results-import-hVj8g-xR.js";
import { _ as Nn, a as $n, c as Tn, d as zn, f as Dn, g as Mn, h as Rn, i as Cn, l as En, n as Fn, o as Pn, p as On, r as jn, s as Bn, t as Zn, v as qn } from "./epoch-utils-CzLU8tdl.js";
import { A as Gn, C as Hn, D as Jn, E as Un, N as Ln, O as Wn, S as Vn, T as Yn, a as Kn, b as Xn, c as Qn, d as ei, h as ti, j as ni, l as ii, m as ai, p as si, s as ri, u as oi, w as li } from "./local-export-shard-worker-Bn9FW-T0.js";
import { _ as ci, a as ui, h as di, m as pi, p as fi } from "./epoch-series-import-By49SGm_.js";
import { i as mi, r as hi } from "./night-session-D4FL2rX1.js";
const gi = "Review Data Settings > CSV Settings before opening this file.";
function yi(e) {
	return `Column-mapped CSV mapping could not be applied: ${e.map((e) => e.message).join(" ")} ${gi}`;
}
const wi = {
	[p.RULE_1_INCLUDE_ACTIVITY]: "Included mid-sleep wake activity (continuous sleep follows)",
	[p.RULE_2_SMALL_PERIODS]: "Evaluated a small sleep period near onset",
	[p.RULE_3_EXTEND_BEFORE_DIARY]: "Extended onset backward through sleep preceding the diary marker",
	[p.RULE_4_NAP_VARIATION]: "Marked a long continuous block as a nap",
	[p.RULE_5_CHOI_SPIKE]: "Tolerated Choi-only nonwear (activity spike present in period)",
	[p.RULE_6_EQUIDISTANT]: "Chose between multiple candidate boundaries",
	[p.RULE_7_CROSS_DAY_NONWEAR]: "Applied cross-day diary nonwear pattern",
	[p.RULE_8_ONSET_BEFORE_INBED]: "Clamped onset to diary in-bed time (onset reported before in-bed)",
	[p.RULE_9_NAP_REGULARITY]: "Placed nap from this child's cross-day nap regularity (no diary nap logged)",
	[p.RULE_10_REGULARITY_OVERRIDE]: "Re-centered the sleep window on this child's cross-day sleep regularity",
	[p.RULE_11_RELIABILITY_FALLBACK]: "Diary unreliable for this night — anchored to accelerometry instead"
};
function _i(e) {
	const t = e.replace(/^rule_\d+_/, "").replace(/_/g, " ").trim();
	return 0 === t.length ? e : t.charAt(0).toUpperCase() + t.slice(1);
}
function vi(e) {
	return vt(e, b);
}
async function bi(e) {
	return Ue((await ve(e))?.extraSettings);
}
async function ki(e, t = b()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
async function Si(e, t = wn, n) {
	const i = await q(n).validWearDays(Float64Array.from(e), t);
	return Array.from(i, (e) => 0 !== e);
}
async function Ii(e, t = wn, n) {
	return q(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
}
function Ai(e) {
	return !Rt(e);
}
Object.fromEntries(Object.values(p).map((e) => [e, wi[e] ?? _i(e)]));
const xi = /* @__PURE__ */ new WeakMap();
function Ni(e, t, n) {
	if (!n) return Ve(e, t);
	let i = xi.get(n);
	return i || xi.set(n, i = Ve(e, t)), i;
}
const $i = "actiware";
function Ti(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.date);
		e && "auto_score" !== e.username && "auto_score" === n.username || t.set(n.date, "auto_score" === e?.username && "auto_score" !== n.username ? n : Ye(e, n));
	}
	return [...t].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort();
}
async function zi(e, t, n) {
	try {
		const a = await t.actiwareFileData.get(e);
		if (!a?.actiwareSleepWake) return;
		const s = (await t.actiwareStatisticsInputs.get(e))?.input, r = (await t.files.get(e))?.seriesRevision ?? 0, o = Ti(await t.markers.where("fileId").equals(e).toArray());
		let l = null;
		try {
			l = await Kn(a.actiwareIntervals, s, o, (e) => q(n).actiwareIntervalStatistics(e));
		} catch (i) {
			n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), gn("error", "Actiware statistics recalculation failed", yn(i));
		}
		await K(t, [
			t.actiwareFileData,
			t.actiwareStatisticsInputs,
			t.files,
			t.markers
		], async () => {
			const n = await t.actiwareFileData.get(e), i = (await t.actiwareStatisticsInputs.get(e))?.input;
			if (!n || ((await t.files.get(e))?.seriesRevision ?? 0) !== r) return;
			if (JSON.stringify(i) !== JSON.stringify(s) || JSON.stringify(n.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
			const c = Ti(await t.markers.where("fileId").equals(e).toArray());
			JSON.stringify(c) === JSON.stringify(o) && (await t.actiwareFileData.update(e, null === l ? { actiwareStatisticsNeedsRecompute: !0 } : {
				actiwareStatistics: l,
				actiwareStatisticsNeedsRecompute: !1
			}), await ze(t, [e]));
		}, n);
	} catch (i) {
		n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), gn("error", "Actiware statistics recalculation failed", yn(i));
		try {
			await K(t, [t.actiwareFileData, t.files], async () => {
				await t.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), await ze(t, [e]);
			}, n);
		} catch {
			throw i instanceof Error ? i : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
		}
	}
}
async function Di(e, t, n, { analysisParadigm: i, signal: a, read: s }) {
	const r = s ? s.file : await Oe(e, n);
	if (Ai(r)) {
		if (Bt(r, i) === N.rest_intervals) return zi(e, n, a);
		try {
			const i = await n.actiwareFileData.get(e);
			if (!i?.actiwareSleepWake) return;
			const s = (await n.actiwareStatisticsInputs.get(e))?.input, r = (await n.files.get(e))?.seriesRevision ?? 0, l = await n.markers.where("fileId").equals(e).toArray(), c = !0 === i.actiwareStatisticsNeedsRecompute, d = (e, t) => JSON.stringify(e.filter((e) => e.date === t).map((e) => [
				e.id,
				e.contentHash,
				e.lastModifiedAt,
				e.sleepMarkers
			])), p = (e) => JSON.stringify(e.map((e) => [
				e.markerType,
				e.onsetTimestamp,
				e.offsetTimestamp
			])), f = /* @__PURE__ */ new Map();
			for (const e of l) {
				if (!c && !t.has(e.date)) continue;
				const n = f.get(e.date);
				n && "auto_score" !== n.username && "auto_score" === e.username || f.set(e.date, "auto_score" === n?.username && "auto_score" !== e.username ? e : Ye(n, e));
			}
			const m = c ? new Map([...[...f].map(([e, t]) => [e, t.sleepMarkers]), ...t]) : t, h = new Map([...m].flatMap(([e, t]) => {
				const n = f.get(e);
				return n && p(n.sleepMarkers) !== p(t) ? [] : [[e, {
					sleepMarkers: [...t],
					isInvalidNight: n?.isInvalidNight ?? !1
				}]];
			}));
			if (0 === h.size) return;
			const g = new Map([...h.keys()].map((e) => [e, d(l, e)]));
			let y = null;
			try {
				y = await Qn({
					file: i,
					statisticsInput: s
				}, h, (e) => q(a).actiwareIntervalStatistics(e), q(a));
			} catch (o) {
				a?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), gn("error", "Actiware statistics recalculation failed", yn(o));
			}
			await K(n, [
				n.actiwareFileData,
				n.actiwareStatisticsInputs,
				n.files,
				n.markers
			], async () => {
				const t = await n.actiwareFileData.get(e), o = (await n.actiwareStatisticsInputs.get(e))?.input;
				if (!t || ((await n.files.get(e))?.seriesRevision ?? 0) !== r) return;
				if (JSON.stringify(o) !== JSON.stringify(s) || JSON.stringify(t.actiwareIntervals) !== JSON.stringify(i.actiwareIntervals)) return;
				const l = await n.markers.where("fileId").equals(e).toArray(), p = new Map([...h].filter(([e]) => d(l, e) === g.get(e)));
				if (0 === p.size) return;
				if (null === y) return await n.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), void await ze(n, [e]);
				const f = ii(t, y), w = f.length > 0 ? await u.waitFor(li(f, q(a))) : void 0, _ = ri(t, y, p.keys(), w);
				await n.actiwareFileData.update(e, {
					actiwareStatistics: _,
					actiwareStatisticsNeedsRecompute: !0 === t.actiwareStatisticsNeedsRecompute && !(c && p.size === m.size)
				}), await ze(n, [e]);
			}, a);
		} catch (o) {
			a?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), gn("error", "Actiware statistics recalculation failed", yn(o));
			try {
				await K(n, [n.actiwareFileData, n.files], async () => {
					await n.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), await ze(n, [e]);
				}, a);
			} catch {
				throw o instanceof Error ? o : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
			}
		}
	}
}
const Mi = "An earlier audit record is still being written. The rest interval was not changed; try again.", Ri = {
	nightRecord: {
		sleepPeriodsToSave: async ({ fileId: e, date: t, isInvalidNight: n }, i, a) => ti(i, (await Ve(e, a))?.actiwareIntervals, t, n),
		writeEdit: async function({ fileId: e, date: t, actor: n }, i, a = E(), s) {
			const r = await a.actiwareFileData.get(e), o = (await a.actiwareStatisticsInputs.get(e))?.input, l = r?.actiwareSleepWake;
			if (!l || !o) throw new oi("This recording has no Actiware analysis settings, so its rest intervals cannot be edited.");
			const c = q(s), u = r?.actiwareIntervals ?? [], d = await ei(u, t, i, {
				epochs: o.epochs,
				params: l.params,
				grid: {
					startTimestamp: l.startTimestamp,
					epochSeconds: l.epochSeconds
				},
				core: c
			}), p = Ti(await a.markers.where("fileId").equals(e).toArray()), f = await Kn(d, o, p, (e) => c.actiwareIntervalStatistics(e)).catch(ui), m = Ut.captureWorkspaceBinding(a, {
				username: n.username,
				studyId: n.studyId
			});
			if (!await Ut.settleWritesForDb(a, m)) throw new oi(Mi);
			let h = !1;
			return await K(a, [
				a.actiwareFileData,
				a.markers,
				a.files,
				a.placementResults,
				a.projectMeta,
				a.auditLog
			], async () => {
				const n = await a.actiwareFileData.get(e);
				if (JSON.stringify(n?.actiwareIntervals ?? []) !== JSON.stringify(u)) throw new oi("That rest interval changed since it was shown; reload the night.");
				if (h = null === f || JSON.stringify(Ti(await a.markers.where("fileId").equals(e).toArray())) !== JSON.stringify(p), await a.actiwareFileData.update(e, h ? {
					actiwareIntervals: d,
					actiwareStatisticsNeedsRecompute: !0
				} : {
					actiwareIntervals: d,
					actiwareStatistics: f ?? [],
					actiwareStatisticsNeedsRecompute: !1
				}), await a.placementResults.delete(e), await gt([e], a, s), await ze(a, [e]), !await Ut.recordFileEventDurably({
					fileId: e,
					analysisDate: t,
					action: P.ACTIWARE_REST_EDITED,
					payload: {
						edit: i.kind,
						...si(u, d)
					}
				}, m)) throw new oi(Mi);
			}, s), h && await zi(e, a, s), ai(d, t, p.includes(t));
		}
	},
	sourceAnalysis: {
		id: $i,
		covers: Ai,
		followSavedNights: async function({ fileId: e, file: t, nights: n, sleepMarkersChanged: i, analysisParadigm: a, db: s, signal: r, openBatch: o }) {
			const l = i ? void 0 : await s.actiwareFileData.get(e);
			if (i || l?.actiwareStatisticsNeedsRecompute || l?.actiwareSleepWake && !l.actiwareStatistics?.length) {
				const i = o();
				if (i) {
					let e = i.savedNights.get($i);
					e || i.savedNights.set($i, e = /* @__PURE__ */ new Map());
					for (const [t, i] of n) e.set(t, i);
				} else await Di(e, n, s, {
					analysisParadigm: a,
					signal: r,
					read: { file: t }
				}).catch((e) => {
					if (!r?.aborted) throw e;
				});
			}
		},
		followDeferredNights: async function({ fileId: e, nights: t, analysisParadigm: n, db: i, signal: a }) {
			try {
				await Di(e, t, i, {
					analysisParadigm: n,
					signal: a
				});
			} catch {
				console.warn("[actiware-statistics] a batch's statistics could neither be recomputed nor flagged.");
			}
		},
		proposeNight: async function({ fileId: e, date: t, file: n, options: i, sleepPeriodDetectionConfig: s, db: r, batch: o }) {
			if (i.algorithm !== a.ACTIWARE_SLEEP_WAKE) return null;
			const l = await (Ai(n) ? Ni(e, r, o) : Promise.resolve(void 0)), c = At(l?.actiwareIntervals, t), u = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(11, 19), d = l?.actiwareRestProposal?.notes?.[t], p = (l?.actiwareIntervals ?? []).some((e) => "rest" === e.kind && "scorer" === e.origin && null !== It([e], t)), f = d && !p ? [`Rest proposal (SCREENS Autoscore): ${d}`] : [], { source_a: h, source_b: g, fusion_policy: y, apply_nonwear_gate: w } = zt(Pt({
				algorithm: i.algorithm,
				periodGuider: i.periodGuider,
				sleepPeriodDetection: i.sleepPeriodDetection
			})), _ = {
				...s,
				source_a: h,
				source_b: g,
				fusion_policy: y,
				apply_nonwear_gate: w
			};
			if (!c?.sleep) {
				const e = l?.actiwareIntervalsRefusal, t = (l?.actiwareIntervals ?? []).filter((e) => "rest" === e.kind && "scorer" !== e.origin), n = null !== c && t.some((e) => e.startTimestamp === c.rest.startTimestamp && e.endTimestamp === c.rest.endTimestamp);
				return {
					kind: "placed",
					sleep_markers: [],
					nap_markers: [],
					decisions: [],
					sleep_period_detection_config: _,
					notes: [c ? e && n ? `The Actiware sleep interval inside this night's rest interval (${u(c.rest.startTimestamp)}–${u(c.rest.endTimestamp)}) could not be set: ${e}.` : `Actiware sets no sleep interval inside this night's rest interval (${u(c.rest.startTimestamp)}–${u(c.rest.endTimestamp)}).` : e && 0 === t.length ? `Actiware rest intervals could not be set for this recording: ${e}.` : "Actiware sets no rest interval for this night.", ...f]
				};
			}
			return {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: c.sleep.startTimestamp,
					offset_timestamp: c.sleep.endTimestamp,
					marker_type: m.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: (c.additionalSleeps ?? []).map((e, t) => ({
					onset_timestamp: e.startTimestamp,
					offset_timestamp: e.endTimestamp,
					marker_type: m.NAP,
					marker_index: t + 2
				})),
				decisions: [],
				sleep_period_detection_config: _,
				notes: [`Actiware sleep interval ${u(c.sleep.startTimestamp)}–${u(c.sleep.endTimestamp)} inside rest interval ${u(c.rest.startTimestamp)}–${u(c.rest.endTimestamp)}, as Actiware sets it.`, ...f]
			};
		},
		afterDiaryChange: async function(e, t, n) {
			await async function(e, t, n) {
				const i = await t.studySettings.where("key").equals("study").first(), a = i?.extraSettings ?? {}, s = Nt(a.actiware_rest_proposal);
				if (s.rest_autoscore !== D.screens) return !1;
				const r = await t.files.get(e);
				if (null == r?.id || !Ht(r)) return !1;
				const { reanalyzeActiwareFile: o } = await import("./reanalysis-B1cB8tnY.js");
				return (await o({
					...r,
					id: r.id
				}, {
					paradigm: jt(a.analysis_paradigm),
					overrides: Ft(a.actiware_analysis),
					proposal: s,
					hasib: $e(Ee(a))?.hasibVariants,
					db: t,
					expectedStudyContentHash: i?.contentHash ?? null,
					services: n
				})).changed;
			}(e, t, n).catch(() => {
				console.warn("[local-processing] Rest proposal after the diary write failed; the study's next rescore proposes it again.");
			});
		},
		guiderWindow: async function({ fileId: e, date: t, db: n, batch: i }) {
			return It((await Ni(e, n, i))?.actiwareIntervals, t);
		},
		reanalyze: async (e, t, { db: n, expectedStudyContentHash: i, signal: a, services: s }) => {
			const { reanalyzeActiwareFile: r, ACTIWARE_NOT_RECONCILED: o } = await u.waitFor(import("./reanalysis-B1cB8tnY.js")), l = await r(e, {
				paradigm: jt(t.analysis_paradigm),
				overrides: Ft(t.actiware_analysis),
				proposal: Nt(t.actiware_rest_proposal),
				hasib: $e(Ee(t))?.hasibVariants,
				db: n,
				...void 0 !== i ? { expectedStudyContentHash: i } : {},
				...a ? { signal: a } : {},
				services: s
			});
			return l.unavailable ? {
				...l,
				notReconciled: o
			} : l;
		}
	}
}, Ci = {
	id: "ggir_saved_folder",
	covers: () => !0,
	followSavedNights: ({ fileId: e, username: t, db: n, signal: i }) => (Xn(e, t, n, i), Promise.resolve())
}, Ei = { sleepPeriodsToSave: (e, t) => Promise.resolve(t) }, Fi = {
	[N.sleep_periods]: Ei,
	[N.rest_intervals]: Ri.nightRecord
}, Pi = [Ri.sourceAnalysis, Ci], Oi = () => u.waitFor(import("./cube-variants-C_nVak0H.js")), ji = {
	warmVariantsForDay: async (...e) => (await Oi()).scoreCountBasedHasibVariantsForDay(...e),
	withRecordingWakeThreshold: async (...e) => (await Oi()).withRecordingWakeThreshold(...e)
}, Bi = [
	["axis_x", "axisX"],
	["axis_y", "axisY"],
	["axis_z", "axisZ"],
	["vector_magnitude", "vectorMagnitude"],
	["choi_axis", "choiAxis"]
];
async function Zi(e, t, n) {
	const i = Bi.filter(([, e]) => (t[e]?.length ?? 0) > 0), { series: a } = await e.aggregateEpochSeries({
		target_seconds: g,
		series: {
			timestamps_ms: Array.from(t.timestamps, (e) => 1e3 * e),
			epoch_seconds: n,
			channels: i.map(([e, n]) => ({
				name: e,
				counts: Array.from(t[n])
			})),
			light: [],
			light_channels: [],
			temperature: [],
			off_wear: [],
			device: "browser",
			primary: "vector_magnitude"
		}
	}), s = (e) => Float64Array.from(a.channels.find((t) => t.name === e)?.counts ?? []), r = {
		timestamps: Float64Array.from(a.timestamps_ms, (e) => e / 1e3),
		axisY: s("axis_y"),
		vectorMagnitude: s("vector_magnitude")
	};
	for (const [o, l] of i) "axisY" !== l && "vectorMagnitude" !== l && (r[l] = s(o));
	return r;
}
async function qi(e, t, n, i) {
	const a = n.flatMap((e) => t[e] ? [[e, t[e]]] : []), s = await Promise.all(a.map(([, t]) => Zi(e, t, i)));
	return Object.fromEntries(a.map(([e], t) => [e, s[t]]));
}
async function Gi(e, t, n, i) {
	return 0 === t.length ? new Uint8Array(i.length) : e.projectLabelsOntoGrid(t, n, g, i);
}
async function Hi(e, t, n) {
	return Array.from(await e.roundCountStorage(Float64Array.from(t), n));
}
async function Ji(e, t) {
	const { dates: n, day: i } = await e.utcDayIndex(Float64Array.from(t)), a = new Map(n.map((e) => [e, []]));
	return i.forEach((e, t) => {
		const i = n[e];
		void 0 !== i && a.get(i)?.push(t);
	}), a;
}
function Ui(e, t, n) {
	return t.map((t) => e[t] ?? n);
}
function Li(e) {
	const t = new Float64Array(e.reduce((e, t) => e + t.length, 0));
	let n = 0;
	for (const i of e) t.set(i, n), n += i.length;
	return t;
}
function Wi(e, t, n) {
	return Float64Array.from(t, (t) => e[t] ?? n);
}
async function Vi(e, t, n, i) {
	return Float64Array.from(await e.uniformTimestamps(t, 1e3 * n, i), (e) => e / 1e3);
}
async function Yi(e, t, n, i) {
	if (!Number.isFinite(t) || 0 === n.length || !Number.isFinite(i) || i <= 0) return /* @__PURE__ */ new Map();
	const a = await Ji(e, await Vi(e, t, i, n.length));
	return new Map(Array.from(a, ([e, t]) => [e, Uint8Array.from(Ui(n, t, 0))]));
}
async function Ki(e, t, n, i, a = {}) {
	const s = /* @__PURE__ */ new Map();
	if (0 === t.length) return s;
	if (n.length !== t.length || i.length !== t.length) return console.warn("[local-processing] The 5 s GGIR timestamp grid does not match its ENMO/anglez series; skipping the GGIR day split rather than fabricating zeros."), s;
	const r = void 0 !== a.sib && a.sib.length === t.length, o = void 0 !== a.anglex && a.anglex.length === t.length, l = void 0 !== a.angley && a.angley.length === t.length, c = void 0 !== a.nonwear && a.nonwear.length === t.length, u = void 0 !== a.invalid && a.invalid.length === t.length, d = void 0 !== a.mimsUnit && a.mimsUnit.length === t.length, p = void 0 !== a.mimsUnitX && a.mimsUnitX.length === t.length, f = void 0 !== a.mimsUnitY && a.mimsUnitY.length === t.length, m = void 0 !== a.mimsUnitZ && a.mimsUnitZ.length === t.length, h = (e, t) => t.map((t) => (e[t] ?? 0) > 0 ? 1 : 0), g = Float64Array.from(t, (e) => e / 1e3);
	for (const [y, w] of await Ji(e, g)) s.set(y, {
		timestamps: Ui(g, w, 0),
		enmo: Ui(n, w, 0),
		anglez: Ui(i, w, 0),
		...o ? { anglex: Ui(a.anglex, w, 0) } : {},
		...l ? { angley: Ui(a.angley, w, 0) } : {},
		...r ? { sib: Ui(a.sib, w, 0) } : {},
		...c ? { nonwear: h(a.nonwear, w) } : {},
		...u ? { invalid: h(a.invalid, w) } : {},
		...d ? { mimsUnit: Ui(a.mimsUnit, w, NaN) } : {},
		...p ? { mimsUnitX: Ui(a.mimsUnitX, w, NaN) } : {},
		...f ? { mimsUnitY: Ui(a.mimsUnitY, w, NaN) } : {},
		...m ? { mimsUnitZ: Ui(a.mimsUnitZ, w, NaN) } : {}
	});
	return s;
}
async function Xi(e, t, n, i, a, s) {
	const r = /* @__PURE__ */ new Map();
	if (0 === t.length || !Number.isFinite(n)) return r;
	for (const [o, l] of Object.entries(i)) r.set(o, await e.foldUniformOntoGrid(n / 1e3, 30, t, Float64Array.from(l.timestamps), a, s));
	return r;
}
async function Qi(e, t, n, i, a) {
	const s = await Xi(e, Float64Array.from(t), n, i, a, "majority_ties_sleep");
	return new Map(Array.from(s, ([e, t]) => [e, Uint8Array.from(t)]));
}
async function ea(e, t, n, i, a) {
	const s = await Xi(e, Float64Array.from(t), n, i, a, "mean");
	return new Map(Array.from(s, ([e, t]) => [e, Float32Array.from(t)]));
}
async function ta(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	if (!t || 0 === t.length || null === n || !Number.isFinite(n)) return i;
	const a = await Vi(e, n, 30, t.length);
	for (const [s, r] of await Ji(e, a)) i.set(s, {
		timestamps: Ui(a, r, 0),
		scores: r.map((e) => t[e] ? 1 : 0)
	});
	return i;
}
async function na(e, t, n, i, a) {
	const s = await e.foldOntoGrid(Float64Array.from(t), Float64Array.from(n), Float64Array.from(i), 1e3 * a, "finite_mean");
	return Array.from(s);
}
async function ia(e, t, n, i, a, s, r, o, l, c, u, d) {
	return async function(e, t, n, i, a, s, r, o, l, c, u, d) {
		const p = {}, f = null != a, m = null != s && s.length > 0, h = null != r && r.length > 0, g = null != o && o.length > 0, y = null != l?.unit && l.unit.length === t.length, w = null != l?.unitX && l.unitX.length === t.length, _ = null != l?.unitY && l.unitY.length === t.length, v = null != l?.unitZ && l.unitZ.length === t.length, b = null != u && u.length === t.length, k = null != c && c.length === t.length, S = null != d && d.length === t.length;
		for (const [I, A] of await Ji(e, t)) p[I] = {
			timestamps: Wi(t, A, 0),
			axisY: Wi(n, A, 0),
			vectorMagnitude: Wi(i, A, 0),
			...h ? { axisX: Wi(r, A, 0) } : {},
			...g ? { axisZ: Wi(o, A, 0) } : {},
			...f ? { choiAxis: Wi(a, A, 0) } : {},
			...m ? { temperature: Wi(s, A, NaN) } : {},
			...y ? { mimsUnit: Wi(l?.unit ?? [], A, NaN) } : {},
			...w ? { mimsUnitX: Wi(l?.unitX ?? [], A, NaN) } : {},
			..._ ? { mimsUnitY: Wi(l?.unitY ?? [], A, NaN) } : {},
			...v ? { mimsUnitZ: Wi(l?.unitZ ?? [], A, NaN) } : {},
			...b ? { zeroCrossingX: Wi(u, A, NaN) } : {},
			...k ? { zeroCrossingY: Wi(c, A, NaN) } : {},
			...S ? { zeroCrossingZ: Wi(d, A, NaN) } : {}
		};
		return p;
	}(e, t, await Hi(e, n, 0), await Hi(e, i, 2), void 0 !== r ? await Hi(e, r, 0) : void 0, o, await Hi(e, a, 0), await Hi(e, s, 0), l, c, u, d);
}
function aa(e, t) {
	return 30 !== t && (wt(e)?.hasRawAccel ?? !1);
}
async function sa(e) {
	if (e.timestampsMs) {
		const t = 1e3 / e.sampleRate, n = e.timestampsMs[0] !== e.firstTsMs, i = e.timestampsMs.some((n, i) => Math.abs(n - e.firstTsMs - i * t) > .5 * t);
		if (n || i) return console.warn("[local-processing] Native 30-second counts were skipped because raw preparation changed the sample timeline."), null;
	}
	const t = e.cancelOperation ?? (() => {
		_(e.wasmApi);
	}), n = await H(e.wasmApi, (t) => t.neishabouriCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: J,
		label: `neishabouriCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}), i = await H(e.wasmApi, (t) => t.zeroCrossingCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: J,
		label: `zeroCrossingCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}).catch((t) => (Z(t, e.signal, `zeroCrossingCounts 30s (${e.label})`), console.warn("[local-processing] The optional 30-second zero-crossing pass failed."), null));
	return {
		timestampsSec: await Vi(e.wasmApi, e.firstTsMs, 30, n.y.length),
		neishabouri: n,
		zeroCrossing: i
	};
}
async function ra(e, t, n) {
	const i = n.zeroCrossing, a = await ia(e, n.timestampsSec, n.neishabouri.y, n.neishabouri.vm, n.neishabouri.x, n.neishabouri.z, void 0, void 0, void 0, i ? await Hi(e, i.zcy, 0) : void 0, i ? await Hi(e, i.zcx, 0) : void 0, i ? await Hi(e, i.zcz, 0) : void 0);
	for (const [s, r] of Object.entries(a)) {
		const e = t[s];
		e && (e.counts30s = {
			timestamps: r.timestamps,
			axisY: r.axisY,
			vectorMagnitude: r.vectorMagnitude,
			...r.axisX ? { axisX: r.axisX } : {},
			...r.axisZ ? { axisZ: r.axisZ } : {},
			...r.zeroCrossingX ? { zeroCrossingX: r.zeroCrossingX } : {},
			...r.zeroCrossingY ? { zeroCrossingY: r.zeroCrossingY } : {},
			...r.zeroCrossingZ ? { zeroCrossingZ: r.zeroCrossingZ } : {}
		});
	}
}
const oa = "Recording crossed a timezone boundary (a 1 h jump in the device clock). Recording times are kept as the device's wall-clock time; no timezone or daylight-saving shift is applied, so local-time metrics around the jump may be off.";
async function la(e, t) {
	return await e.detectHourClockJumpMs(Float64Array.from(t)) ? oa : null;
}
async function ca(e, t, n = 60) {
	(await e.irregularInternalDays(Float64Array.from(t), n)).forEach(() => {
		console.warn("[local-processing] A possible DST transition or partial internal day was detected; review the in-app import warning.");
	});
}
async function ua(e, t, n) {
	const i = [...e], a = n && n.storedEpochSeconds < g ? n : void 0, s = a ? await Promise.all(i.map(([, e]) => async function(e, t, n) {
		const { series: i } = await e.aggregateEpochSeries({
			target_seconds: g,
			series: {
				timestamps_ms: Array.from(t, (e) => 1e3 * e),
				epoch_seconds: n,
				channels: [],
				light: [],
				light_channels: [],
				temperature: [],
				off_wear: [],
				device: "browser",
				primary: "vector_magnitude"
			}
		});
		return Float64Array.from(i.timestamps_ms, (e) => e / 1e3);
	}(a.core, e.timestamps, a.storedEpochSeconds))) : i.map(([, e]) => e.timestamps), r = [];
	let o = Number.POSITIVE_INFINITY, l = Number.NEGATIVE_INFINITY;
	for (const [c, [u]] of i.entries()) {
		const e = s[c];
		a && 0 === e.length || (r.push(u), 0 !== e.length && (o = Math.min(o, e[0] ?? o), l = Math.max(l, e[e.length - 1] ?? l)));
	}
	return r.sort(), Number.isFinite(o) && Number.isFinite(l) ? bn(r, o, l, void 0, t) : r;
}
function da(e, t) {
	if (0 === e.length) return [];
	const n = [0];
	for (let i = 1; i < e.length; i++) Math.abs(e[i] - e[i - 1] - t) > .001 && n.push(i);
	return n.map((t, i) => ({
		start: t,
		end: n[i + 1] ?? e.length
	}));
}
async function pa(e, t, n, i = dn, a = () => {
	_(e);
}) {
	const s = /* @__PURE__ */ new Map(), r = Math.min(t.x.length, t.y.length, t.z.length);
	if (0 === r || t.sampleRate <= 0) return s;
	const o = i.filter((e) => !tn(e)?.needsModel);
	if (0 === o.length) return s;
	const l = new Float64Array(3 * r);
	for (let u = 0; u < r; u++) l[3 * u] = t.x[u], l[3 * u + 1] = t.y[u], l[3 * u + 2] = t.z[u];
	B(n, `before detectNonwearUnifiedBatch(${o.join(",")})`);
	const c = await H(e, (e) => e.detectNonwearUnifiedBatch(o, {
		raw: l,
		sampleRate: t.sampleRate,
		epochSeconds: t.epochSeconds
	}), {
		ms: J,
		label: `detectNonwearUnifiedBatch(${o.join(",")})`,
		signal: n,
		cancel: a
	}).catch((e) => (Z(e, n, `detectNonwearUnifiedBatch(${o.join(",")})`), console.warn("[local-processing] A raw-signal nonwear batch failed."), null));
	if (c) for (const [u, d] of Object.entries(c)) s.set(u, d);
	return s;
}
async function fa(e, t, n, i, a, s = cn, r = () => {
	_(e);
}) {
	const o = {}, l = s.filter((e) => !tn(e)?.needsModel);
	if (0 === l.length) return o;
	const c = n.map((e) => t[e]).filter((e) => void 0 !== e), u = Li(c.map((e) => e.timestamps)), d = Li(c.map((e) => e.axisY)), p = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
	for (const { start: h, end: g } of da(u, i)) {
		const t = d.slice(h, g);
		if (0 === t.length) continue;
		B(a, "before count nonwear continuous run");
		const n = await H(e, (e) => e.detectNonwearUnifiedBatch(l, {
			counts: t,
			epochSeconds: i
		}), {
			ms: J,
			label: "count nonwear continuous run",
			signal: a,
			cancel: r
		}).catch((e) => (Z(e, a, "count nonwear continuous run"), console.warn("[local-processing] A count-based nonwear batch failed for one contiguous run."), null));
		for (const [a, s] of Object.entries(n ?? {})) {
			if (!s.available || !s.nonwear?.length) {
				p.has(a) || p.set(a, s);
				continue;
			}
			const t = await Yt(s, {
				baseTsSec: u[h],
				epochTimestampsSec: u.slice(h, g),
				epochLenSec: i
			}, e), n = p.get(a)?.nonwear ?? new Uint8Array(u.length);
			n.set(t, h), p.set(a, {
				...s,
				nonwear: n,
				elementSeconds: i
			}), f.set(a, (f.get(a) ?? 0) + t.length);
		}
	}
	let m = 0;
	for (const h of n) {
		const e = t[h]?.timestamps.length ?? 0;
		0 !== e && (o[h] = new Map([...p].map(([t, n]) => {
			const i = f.get(t) === u.length;
			return [t, {
				...n,
				available: i,
				nonwear: i ? n.nonwear.slice(m, m + e) : null
			}];
		})), m += e);
	}
	return o;
}
function ma(e) {
	return null == e ? {} : { [a.OAKLEY_1997]: { oakleyThreshold: e } };
}
async function ha(e, t, n, i, a, s, r, o = () => {
	_(e);
}, l = {}, c = fi) {
	if (0 === c.length) return;
	const u = i.flatMap((e) => n[e] ?? []), d = Li(u.map((e) => e.timestamps)), p = Li(u.map((e) => e.axisY)), f = {}, m = /* @__PURE__ */ new Map();
	for (const { start: y, end: w } of da(d, a)) {
		const t = p.slice(y, w);
		if (!t || 0 === t.length) continue;
		const n = /* @__PURE__ */ new Map();
		for (const u of c) {
			const i = ci(u, a);
			if ("gate_needs_30s_epoch" === i.kind) {
				n.set(u, i.response);
				continue;
			}
			B(s, `before scoreEpochs(${u} continuous)`);
			const c = await H(e, (e) => e.scoreEpochs(di({
				algorithm: u,
				counts: t,
				epochSeconds: a,
				...r ? { postprocessing: r } : {},
				...l[u] ? { config: l[u] } : {}
			})), {
				ms: J,
				label: `scoreEpochs(${u} continuous)`,
				signal: s,
				cancel: o
			}).catch((e) => (Z(e, s, `scoreEpochs(${u} continuous)`), console.warn("[local-processing] A descriptor-driven sleep/wake scorer failed for one contiguous run."), null));
			c && n.set(u, c);
		}
		const i = pi(n, t.length);
		for (const [e, a] of Object.entries(i)) {
			const t = f[e] ?? new Uint8Array(d.length);
			t.set(a, y), f[e] = t, m.set(e, (m.get(e) ?? 0) + a.length);
		}
	}
	const h = Object.entries(f).filter(([e]) => m.get(e) === d.length);
	let g = 0;
	for (const y of i) {
		const e = n[y], i = t[y];
		if (!e) continue;
		const a = g + e.timestamps.length;
		i && (i.unifiedSleepWake = Object.fromEntries(h.map(([e, t]) => [e, t.slice(g, a)]))), g = a;
	}
}
function ga(e, t) {
	return {
		vector_magnitude: e.vectorMagnitude,
		axis_y: e.axisY,
		axis_x: e.axisX,
		axis_z: e.axisZ
	}[t];
}
async function ya(e, t, n, i, a, s, r) {
	if (!e || !t || 0 === e.timestamps.byteLength) return;
	if ("counts_axis_y" !== tn(t)?.requiredSignal) return;
	if (en(e, t, n)) return;
	const o = new Float64Array(e.timestamps), l = a ?? q(s), c = Be(e) ?? await Re(o, 60, l), u = $t(Mt(t) ?? [], c), d = u !== c, p = async (e, t) => {
		const n = {
			timestamps: new Float64Array(e.timestamps),
			axisY: new Float64Array(t),
			vectorMagnitude: new Float64Array(t)
		};
		return d ? Zi(l, n, c) : n;
	}, f = (e, t) => d ? Gi(l, e, t, o) : t;
	let m;
	try {
		const a = [...(await Qe(e.fileId, i, r)).values()];
		if (pn.includes(t)) {
			const t = a.filter((e) => e.timestamps.byteLength > 0 && ga(e, n)).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), i = t.findIndex((t) => t.date === e.date);
			if (i < 0) return;
			const r = [];
			for (const e of t) r.push(await p(e, ga(e, n)));
			let o = i, c = i;
			const h = (e, t) => e.length > 0 && t.length > 0 && Math.abs(t[0] - e[e.length - 1] - u) < .001;
			for (; o > 0 && h(r[o - 1].timestamps, r[o].timestamps);) o--;
			for (; c + 1 < r.length && h(r[c].timestamps, r[c + 1].timestamps);) c++;
			const g = r.slice(o, c + 1), y = g.slice(0, i - o).reduce((e, t) => e + t.timestamps.length, 0), w = r[i], _ = new Float64Array(g.reduce((e, t) => e + t.axisY.length, 0));
			let v = 0;
			for (const e of g) _.set(e.axisY, v), v += e.axisY.length;
			s?.throwIfAborted();
			const b = _.length > 0 ? await l.detectNonwear(_, u) : /* @__PURE__ */ new Uint8Array(0);
			s?.throwIfAborted();
			const k = _.length > 0 ? await l.detectNonwearChoi2011(_, u) : /* @__PURE__ */ new Uint8Array(0), S = (e) => f(w.timestamps, e.slice(y, y + w.timestamps.length));
			if (!d && 0 === _.byteLength) return;
			m = {
				nonwearResults: (await S(b)).buffer,
				nonwearResultsChoi2011: (await S(k)).buffer,
				nonwearChoiAxis: n
			};
		} else {
			s?.throwIfAborted();
			const n = a.filter((e) => e.timestamps.byteLength > 0 && e.axisY.byteLength > 0).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), i = {};
			for (const e of n) i[e.date] = await p(e, e.axisY);
			const r = (await fa(l, i, n.map((e) => e.date), u, s, [t]))[e.date]?.get(t);
			if (!r?.available || !r.nonwear) return;
			const d = await on(/* @__PURE__ */ new Map([[t, {
				...r,
				nonwear: await f(i[e.date].timestamps, r.nonwear),
				elementSeconds: c
			}]]), {
				baseTsSec: o[0] ?? 0,
				epochTimestampsSec: Array.from(o),
				epochLenSec: c
			}, l);
			if (!d.unifiedNonwearMasks?.[t]) return;
			m = {
				...d,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					...d.unifiedNonwearMasks
				}
			};
		}
	} catch {
		s?.throwIfAborted(), console.warn("[local-processing] A missing nonwear mask could not be computed from stored counts.");
		return;
	}
	s?.throwIfAborted(), await le(e.fileId, e.date, m, i, s), s?.throwIfAborted(), Object.assign(e, m);
}
async function wa(e, t, n, i, a, s = () => {
	_(e);
}) {
	const r = Li(n.map((e) => t[e].timestamps)), o = Li(n.map((e) => t[e].axisY)), l = Li(n.map((e) => t[e].choiAxis ?? t[e].vectorMagnitude)), c = da(r, i), u = await H(e, (e) => e.scoreAllDays(c.map(({ start: e, end: t }) => ({
		activityF64: o.slice(e, t),
		vmF64: l.slice(e, t),
		epochSeconds: i
	}))), {
		ms: J,
		label: "scoreAllDays continuous counts",
		signal: a,
		cancel: s
	}), d = {
		sadeh_actilife: new Uint8Array(o.length),
		sadeh_original: new Uint8Array(o.length),
		ck_actilife: new Uint8Array(o.length),
		ck_original: new Uint8Array(o.length),
		nonwear: new Uint8Array(o.length),
		nonwearChoi2011: new Uint8Array(o.length)
	}, p = /* @__PURE__ */ new Set();
	for (const [m, h] of c.entries()) {
		const t = u[m];
		if (!t) throw new Error("Continuous count scoring did not return every run.");
		for (const e of [
			"sadeh_actilife",
			"sadeh_original",
			"ck_actilife",
			"ck_original",
			"nonwear"
		]) if (0 === t[e].length) p.add(e);
		else {
			if (t[e].length !== h.end - h.start) throw new Error("Continuous count scoring returned a misaligned mask.");
			d[e].set(t[e], h.start);
		}
		const n = await H(e, (e) => e.detectNonwearChoi2011(l.slice(h.start, h.end), i), {
			ms: J,
			label: "detectNonwearChoi2011 continuous counts",
			signal: a,
			cancel: s
		});
		d.nonwearChoi2011.set(n, h.start);
	}
	let f = 0;
	return n.map((e) => {
		const n = f + t[e].timestamps.length, i = {
			sadeh_actilife: p.has("sadeh_actilife") ? /* @__PURE__ */ new Uint8Array() : d.sadeh_actilife.slice(f, n),
			sadeh_original: p.has("sadeh_original") ? /* @__PURE__ */ new Uint8Array() : d.sadeh_original.slice(f, n),
			ck_actilife: p.has("ck_actilife") ? /* @__PURE__ */ new Uint8Array() : d.ck_actilife.slice(f, n),
			ck_original: p.has("ck_original") ? /* @__PURE__ */ new Uint8Array() : d.ck_original.slice(f, n),
			nonwear: d.nonwear.slice(f, n),
			nonwearChoi2011: d.nonwearChoi2011.slice(f, n)
		};
		return f = n, i;
	});
}
function _a(e, t) {
	return "number" == typeof e && "number" == typeof t && e !== t;
}
z();
let va = 0;
const ba = /* @__PURE__ */ new Set();
function ka(e, t, n) {
	if (n) {
		const e = Dt(n);
		if (!Zt(e)) return kt(e);
	}
	return t ?? o.SMART;
}
function Sa(e, t) {
	e.invalidateQueries({ queryKey: t }).catch((e) => {
		gn("warn", "Query invalidation failed", {
			...yn(e),
			query_key: t.map(String).join(":")
		});
	});
}
async function Ia(e, t, n) {
	const i = n ? await n.wearSiteHasptRouting(e, t ?? void 0) : await Ze("wearSiteHasptRouting", `${e}:${t ?? ""}`, () => b().wearSiteHasptRouting(e, t ?? void 0));
	return {
		sensorLocation: i.sensorLocation,
		variant: i.variant,
		requiresLongitudinalAxis: i.requiresLongitudinalAxis,
		routedByWearSite: null == t
	};
}
var Aa;
function xa(e, t, n) {
	function i(n, i) {
		if (n._zod || Object.defineProperty(n, "_zod", {
			value: {
				def: i,
				constr: r,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: !1
		}), n._zod.traits.has(e)) return;
		n._zod.traits.add(e), t(n, i);
		const a = r.prototype, s = Object.keys(a);
		for (let e = 0; e < s.length; e++) {
			const t = s[e];
			t in n || (n[t] = a[t].bind(n));
		}
	}
	const a = n?.Parent ?? Object;
	class s extends a {}
	function r(e) {
		var t;
		const a = n?.Parent ? new s() : this;
		i(a, e), (t = a._zod).deferred ?? (t.deferred = []);
		for (const n of a._zod.deferred) n();
		return a;
	}
	return Object.defineProperty(s, "name", { value: e }), Object.defineProperty(r, "init", { value: i }), Object.defineProperty(r, Symbol.hasInstance, { value: (t) => !!(n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e) }), Object.defineProperty(r, "name", { value: e }), r;
}
var Na = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, $a = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(Aa = globalThis).__zod_globalConfig ?? (Aa.__zod_globalConfig = {});
const Ta = globalThis.__zod_globalConfig;
function za(e) {
	return e && Object.assign(Ta, e), Ta;
}
function Da(e) {
	const t = Object.values(e).filter((e) => "number" == typeof e);
	return Object.entries(e).filter(([e, n]) => -1 === t.indexOf(+e)).map(([e, t]) => t);
}
function Ma(e, t) {
	return "bigint" == typeof t ? t.toString() : t;
}
function Ra(e) {
	return { get value() {
		{
			const t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function Ca(e) {
	return null == e;
}
function Ea(e) {
	const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
const Fa = Symbol("evaluating");
function Pa(e, t, n) {
	let i;
	Object.defineProperty(e, t, {
		get() {
			if (i !== Fa) return void 0 === i && (i = Fa, i = n()), i;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function Oa(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function ja(...e) {
	const t = {};
	for (const n of e) {
		const e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Ba(e) {
	return JSON.stringify(e);
}
const Za = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function qa(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
const Ga = Ra(() => {
	if (Ta.jitless) return !1;
	if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return new Function(""), !0;
	} catch (e) {
		return !1;
	}
});
function Ha(e) {
	if (!1 === qa(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	if ("function" != typeof t) return !0;
	const n = t.prototype;
	return !1 !== qa(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function Ja(e) {
	return Ha(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const Ua = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
function La(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Wa(e, t, n) {
	const i = new e._zod.constr(t ?? e._zod.def);
	return t && !n?.parent || (i._zod.parent = e), i;
}
function Va(e) {
	const t = e;
	if (!t) return {};
	if ("string" == typeof t) return { error: () => t };
	if (void 0 !== t?.message) {
		if (void 0 !== t?.error) throw new Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, "string" == typeof t.error ? {
		...t,
		error: () => t.error
	} : t;
}
const Ya = {
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Ka(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!0 !== e.issues[n]?.continue) return !0;
	return !1;
}
function Xa(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!1 === e.issues[n]?.continue) return !0;
	return !1;
}
function Qa(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function es(e) {
	return "string" == typeof e ? e : e?.message;
}
function ts(e, t, n) {
	const i = e.message ? e.message : es(e.inst?._zod.def?.error?.(e)) ?? es(t?.error?.(e)) ?? es(n.customError?.(e)) ?? es(n.localeError?.(e)) ?? "Invalid input", { inst: a, continue: s, input: r, ...o } = e;
	return o.path ?? (o.path = []), o.message = i, t?.reportInput && (o.input = r), o;
}
function ns(e) {
	return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function is(...e) {
	const [t, n, i] = e;
	return "string" == typeof t ? {
		message: t,
		code: "custom",
		input: n,
		inst: i
	} : { ...t };
}
const as = (e, t) => {
	e.name = "$ZodError", Object.defineProperty(e, "_zod", {
		value: e._zod,
		enumerable: !1
	}), Object.defineProperty(e, "issues", {
		value: t,
		enumerable: !1
	}), e.message = JSON.stringify(t, Ma, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, ss = xa("$ZodError", as), rs = xa("$ZodError", as, { Parent: Error }), os = (e) => (t, n, i, a) => {
	const s = i ? {
		...i,
		async: !1
	} : { async: !1 }, r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise) throw new Na();
	if (r.issues.length) {
		const t = new ((a?.Err) ?? e)(r.issues.map((e) => ts(e, s, za())));
		throw Za(t, a?.callee), t;
	}
	return r.value;
}, ls = (e) => async (t, n, i, a) => {
	const s = i ? {
		...i,
		async: !0
	} : { async: !0 };
	let r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise && (r = await r), r.issues.length) {
		const t = new ((a?.Err) ?? e)(r.issues.map((e) => ts(e, s, za())));
		throw Za(t, a?.callee), t;
	}
	return r.value;
}, cs = (e) => (t, n, i) => {
	const a = i ? {
		...i,
		async: !1
	} : { async: !1 }, s = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (s instanceof Promise) throw new Na();
	return s.issues.length ? {
		success: !1,
		error: new (e ?? ss)(s.issues.map((e) => ts(e, a, za())))
	} : {
		success: !0,
		data: s.value
	};
}, us = cs(rs), ds = (e) => async (t, n, i) => {
	const a = i ? {
		...i,
		async: !0
	} : { async: !0 };
	let s = t._zod.run({
		value: n,
		issues: []
	}, a);
	return s instanceof Promise && (s = await s), s.issues.length ? {
		success: !1,
		error: new e(s.issues.map((e) => ts(e, a, za())))
	} : {
		success: !0,
		data: s.value
	};
}, ps = ds(rs), fs = (e) => (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return os(e)(t, n, a);
}, ms = (e) => (t, n, i) => os(e)(t, n, i), hs = (e) => async (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return ls(e)(t, n, a);
}, gs = (e) => async (t, n, i) => ls(e)(t, n, i), ys = (e) => (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return cs(e)(t, n, a);
}, ws = (e) => (t, n, i) => cs(e)(t, n, i), _s = (e) => async (t, n, i) => {
	const a = i ? {
		...i,
		direction: "backward"
	} : { direction: "backward" };
	return ds(e)(t, n, a);
}, vs = (e) => async (t, n, i) => ds(e)(t, n, i), bs = /^[cC][0-9a-z]{6,}$/, ks = /^[0-9a-z]+$/, Ss = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Is = /^[0-9a-vA-V]{20}$/, As = /^[A-Za-z0-9]{27}$/, xs = /^[a-zA-Z0-9_-]{21}$/, Ns = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, $s = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ts = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, zs = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Ds = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ms = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Rs = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Cs = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Es = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Fs = /^[A-Za-z0-9_-]*$/, Ps = /^https?$/, Os = /^\+[1-9]\d{6,14}$/, js = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Bs = new RegExp(`^${js}$`);
function Zs(e) {
	const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return "number" == typeof e.precision ? -1 === e.precision ? `${t}` : 0 === e.precision ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
const qs = /^-?\d+$/, Gs = /^-?\d+(?:\.\d+)?$/, Hs = /^(?:true|false)$/i, Js = /^[^A-Z]*$/, Us = /^[^a-z]*$/, Ls = xa("$ZodCheck", (e, t) => {
	var n;
	e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Ws = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, Vs = xa("$ZodCheckLessThan", (e, t) => {
	Ls.init(e, t);
	const n = Ws[typeof t.value];
	e._zod.onattach.push((e) => {
		const n = e._zod.bag, i = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
		t.value < i && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
	}), e._zod.check = (i) => {
		(t.inclusive ? i.value <= t.value : i.value < t.value) || i.issues.push({
			origin: n,
			code: "too_big",
			maximum: "object" == typeof t.value ? t.value.getTime() : t.value,
			input: i.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Ys = xa("$ZodCheckGreaterThan", (e, t) => {
	Ls.init(e, t);
	const n = Ws[typeof t.value];
	e._zod.onattach.push((e) => {
		const n = e._zod.bag, i = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
		t.value > i && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
	}), e._zod.check = (i) => {
		(t.inclusive ? i.value >= t.value : i.value > t.value) || i.issues.push({
			origin: n,
			code: "too_small",
			minimum: "object" == typeof t.value ? t.value.getTime() : t.value,
			input: i.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Ks = xa("$ZodCheckMultipleOf", (e, t) => {
	Ls.init(e, t), e._zod.onattach.push((e) => {
		var n;
		(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
	}), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
		("bigint" == typeof n.value ? n.value % t.value !== BigInt(0) : 0 !== function(e, t) {
			const n = e / t, i = Math.round(n), a = Number.EPSILON * Math.max(Math.abs(n), 1);
			return Math.abs(n - i) < a ? 0 : n - i;
		}(n.value, t.value)) && n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Xs = xa("$ZodCheckNumberFormat", (e, t) => {
	Ls.init(e, t), t.format = t.format || "float64";
	const n = t.format?.includes("int"), i = n ? "int" : "number", [a, s] = Ya[t.format];
	e._zod.onattach.push((e) => {
		const i = e._zod.bag;
		i.format = t.format, i.minimum = a, i.maximum = s, n && (i.pattern = qs);
	}), e._zod.check = (r) => {
		const o = r.value;
		if (n) {
			if (!Number.isInteger(o)) return void r.issues.push({
				expected: i,
				format: t.format,
				code: "invalid_type",
				continue: !1,
				input: o,
				inst: e
			});
			if (!Number.isSafeInteger(o)) return void (o > 0 ? r.issues.push({
				input: o,
				code: "too_big",
				maximum: Number.MAX_SAFE_INTEGER,
				note: "Integers must be within the safe integer range.",
				inst: e,
				origin: i,
				inclusive: !0,
				continue: !t.abort
			}) : r.issues.push({
				input: o,
				code: "too_small",
				minimum: Number.MIN_SAFE_INTEGER,
				note: "Integers must be within the safe integer range.",
				inst: e,
				origin: i,
				inclusive: !0,
				continue: !t.abort
			}));
		}
		o < a && r.issues.push({
			origin: "number",
			input: o,
			code: "too_small",
			minimum: a,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), o > s && r.issues.push({
			origin: "number",
			input: o,
			code: "too_big",
			maximum: s,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), Qs = xa("$ZodCheckMaxLength", (e, t) => {
	var n;
	Ls.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !Ca(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		const i = n.value;
		if (i.length <= t.maximum) return;
		const a = ns(i);
		n.issues.push({
			origin: a,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: i,
			inst: e,
			continue: !t.abort
		});
	};
}), er = xa("$ZodCheckMinLength", (e, t) => {
	var n;
	Ls.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !Ca(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		const i = n.value;
		if (i.length >= t.minimum) return;
		const a = ns(i);
		n.issues.push({
			origin: a,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: i,
			inst: e,
			continue: !t.abort
		});
	};
}), tr = xa("$ZodCheckLengthEquals", (e, t) => {
	var n;
	Ls.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !Ca(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		const i = n.value, a = i.length;
		if (a === t.length) return;
		const s = ns(i), r = a > t.length;
		n.issues.push({
			origin: s,
			...r ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), nr = xa("$ZodCheckStringFormat", (e, t) => {
	var n, i;
	Ls.init(e, t), e._zod.onattach.push((e) => {
		const n = e._zod.bag;
		n.format = t.format, t.pattern && (n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(t.pattern));
	}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, t.pattern.test(n.value) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (i = e._zod).check ?? (i.check = () => {});
}), ir = xa("$ZodCheckRegex", (e, t) => {
	nr.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, t.pattern.test(n.value) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), ar = xa("$ZodCheckLowerCase", (e, t) => {
	t.pattern ?? (t.pattern = Js), nr.init(e, t);
}), sr = xa("$ZodCheckUpperCase", (e, t) => {
	t.pattern ?? (t.pattern = Us), nr.init(e, t);
}), rr = xa("$ZodCheckIncludes", (e, t) => {
	Ls.init(e, t);
	const n = La(t.includes), i = new RegExp("number" == typeof t.position ? `^.{${t.position}}${n}` : n);
	t.pattern = i, e._zod.onattach.push((e) => {
		const t = e._zod.bag;
		t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(i);
	}), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), or = xa("$ZodCheckStartsWith", (e, t) => {
	Ls.init(e, t);
	const n = new RegExp(`^${La(t.prefix)}.*`);
	t.pattern ?? (t.pattern = n), e._zod.onattach.push((e) => {
		const t = e._zod.bag;
		t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), lr = xa("$ZodCheckEndsWith", (e, t) => {
	Ls.init(e, t);
	const n = new RegExp(`.*${La(t.suffix)}$`);
	t.pattern ?? (t.pattern = n), e._zod.onattach.push((e) => {
		const t = e._zod.bag;
		t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), cr = xa("$ZodCheckOverwrite", (e, t) => {
	Ls.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
});
var ur = class {
	constructor(e = []) {
		this.content = [], this.indent = 0, this && (this.args = e);
	}
	indented(e) {
		this.indent += 1, e(this), this.indent -= 1;
	}
	write(e) {
		if ("function" == typeof e) return e(this, { execution: "sync" }), void e(this, { execution: "async" });
		const t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), i = t.map((e) => e.slice(n)).map((e) => " ".repeat(2 * this.indent) + e);
		for (const a of i) this.content.push(a);
	}
	compile() {
		const e = Function, t = this?.args;
		return new e(...t, [...(this?.content ?? [""]).map((e) => `  ${e}`)].join("\n"));
	}
};
const dr = {
	major: 4,
	minor: 4,
	patch: 3
}, pr = xa("$ZodType", (e, t) => {
	var n;
	e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = dr;
	const i = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && i.unshift(e);
	for (const a of i) for (const t of a._zod.onattach) t(e);
	if (0 === i.length) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		const t = (e, t, n) => {
			let i, a = Ka(e);
			for (const s of t) {
				if (s._zod.def.when) {
					if (Xa(e)) continue;
					if (!s._zod.def.when(e)) continue;
				} else if (a) continue;
				const t = e.issues.length, r = s._zod.check(e);
				if (r instanceof Promise && !1 === n?.async) throw new Na();
				if (i || r instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await r, e.issues.length !== t && (a || (a = Ka(e, t)));
				});
				else {
					if (e.issues.length === t) continue;
					a || (a = Ka(e, t));
				}
			}
			return i ? i.then(() => e) : e;
		}, n = (n, a, s) => {
			if (Ka(n)) return n.aborted = !0, n;
			const r = t(a, i, s);
			if (r instanceof Promise) {
				if (!1 === s.async) throw new Na();
				return r.then((t) => e._zod.parse(t, s));
			}
			return e._zod.parse(r, s);
		};
		e._zod.run = (a, s) => {
			if (s.skipChecks) return e._zod.parse(a, s);
			if ("backward" === s.direction) {
				const t = e._zod.parse({
					value: a.value,
					issues: []
				}, {
					...s,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, a, s)) : n(t, a, s);
			}
			const r = e._zod.parse(a, s);
			if (r instanceof Promise) {
				if (!1 === s.async) throw new Na();
				return r.then((e) => t(e, i, s));
			}
			return t(r, i, s);
		};
	}
	Pa(e, "~standard", () => ({
		validate: (t) => {
			try {
				const n = us(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch (n) {
				return ps(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), fr = xa("$ZodString", (e, t) => {
	var n;
	pr.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? (n = e._zod.bag, new RegExp(`^${n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*"}$`)), e._zod.parse = (n, i) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch (i) {}
		return "string" == typeof n.value || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), mr = xa("$ZodStringFormat", (e, t) => {
	nr.init(e, t), fr.init(e, t);
}), hr = xa("$ZodGUID", (e, t) => {
	t.pattern ?? (t.pattern = $s), mr.init(e, t);
}), gr = xa("$ZodUUID", (e, t) => {
	if (t.version) {
		const e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (void 0 === e) throw new Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ?? (t.pattern = Ts(e));
	} else t.pattern ?? (t.pattern = Ts());
	mr.init(e, t);
}), yr = xa("$ZodEmail", (e, t) => {
	t.pattern ?? (t.pattern = zs), mr.init(e, t);
}), wr = xa("$ZodURL", (e, t) => {
	mr.init(e, t), e._zod.check = (n) => {
		try {
			const i = n.value.trim();
			if (!t.normalize && t.protocol?.source === Ps.source && !/^https?:\/\//i.test(i)) return void n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid URL format",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
			const a = new URL(i);
			t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(a.hostname) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(a.protocol.endsWith(":") ? a.protocol.slice(0, -1) : a.protocol) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.normalize ? n.value = a.href : n.value = i;
			return;
		} catch (i) {
			n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), _r = xa("$ZodEmoji", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), mr.init(e, t);
}), vr = xa("$ZodNanoID", (e, t) => {
	t.pattern ?? (t.pattern = xs), mr.init(e, t);
}), br = xa("$ZodCUID", (e, t) => {
	t.pattern ?? (t.pattern = bs), mr.init(e, t);
}), kr = xa("$ZodCUID2", (e, t) => {
	t.pattern ?? (t.pattern = ks), mr.init(e, t);
}), Sr = xa("$ZodULID", (e, t) => {
	t.pattern ?? (t.pattern = Ss), mr.init(e, t);
}), Ir = xa("$ZodXID", (e, t) => {
	t.pattern ?? (t.pattern = Is), mr.init(e, t);
}), Ar = xa("$ZodKSUID", (e, t) => {
	t.pattern ?? (t.pattern = As), mr.init(e, t);
}), xr = xa("$ZodISODateTime", (e, t) => {
	t.pattern ?? (t.pattern = function(e) {
		const t = Zs({ precision: e.precision }), n = ["Z"];
		e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const i = `${t}(?:${n.join("|")})`;
		return new RegExp(`^${js}T(?:${i})$`);
	}(t)), mr.init(e, t);
}), Nr = xa("$ZodISODate", (e, t) => {
	t.pattern ?? (t.pattern = Bs), mr.init(e, t);
}), $r = xa("$ZodISOTime", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp(`^${Zs(t)}$`)), mr.init(e, t);
}), Tr = xa("$ZodISODuration", (e, t) => {
	t.pattern ?? (t.pattern = Ns), mr.init(e, t);
}), zr = xa("$ZodIPv4", (e, t) => {
	t.pattern ?? (t.pattern = Ds), mr.init(e, t), e._zod.bag.format = "ipv4";
}), Dr = xa("$ZodIPv6", (e, t) => {
	t.pattern ?? (t.pattern = Ms), mr.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
		try {
			new URL(`http://[${n.value}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), Mr = xa("$ZodCIDRv4", (e, t) => {
	t.pattern ?? (t.pattern = Rs), mr.init(e, t);
}), Rr = xa("$ZodCIDRv6", (e, t) => {
	t.pattern ?? (t.pattern = Cs), mr.init(e, t), e._zod.check = (n) => {
		const i = n.value.split("/");
		try {
			if (2 !== i.length) throw new Error();
			const [e, t] = i;
			if (!t) throw new Error();
			const n = Number(t);
			if (`${n}` !== t) throw new Error();
			if (n < 0 || n > 128) throw new Error();
			new URL(`http://[${e}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
});
function Cr(e) {
	if ("" === e) return !0;
	if (/\s/.test(e)) return !1;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
const Er = xa("$ZodBase64", (e, t) => {
	t.pattern ?? (t.pattern = Es), mr.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		Cr(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Fr = xa("$ZodBase64URL", (e, t) => {
	t.pattern ?? (t.pattern = Fs), mr.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		(function(e) {
			if (!Fs.test(e)) return !1;
			const t = e.replace(/[-_]/g, (e) => "-" === e ? "+" : "/");
			return Cr(t.padEnd(4 * Math.ceil(t.length / 4), "="));
		})(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Pr = xa("$ZodE164", (e, t) => {
	t.pattern ?? (t.pattern = Os), mr.init(e, t);
}), Or = xa("$ZodJWT", (e, t) => {
	mr.init(e, t), e._zod.check = (n) => {
		(function(e, t = null) {
			try {
				const n = e.split(".");
				if (3 !== n.length) return !1;
				const [i] = n;
				if (!i) return !1;
				const a = JSON.parse(atob(i));
				return !("typ" in a && "JWT" !== a?.typ || !a.alg || t && (!("alg" in a) || a.alg !== t));
			} catch {
				return !1;
			}
		})(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), jr = xa("$ZodNumber", (e, t) => {
	pr.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Gs, e._zod.parse = (n, i) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch (r) {}
		const a = n.value;
		if ("number" == typeof a && !Number.isNaN(a) && Number.isFinite(a)) return n;
		const s = "number" == typeof a ? Number.isNaN(a) ? "NaN" : Number.isFinite(a) ? void 0 : "Infinity" : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: a,
			inst: e,
			...s ? { received: s } : {}
		}), n;
	};
}), Br = xa("$ZodNumberFormat", (e, t) => {
	Xs.init(e, t), jr.init(e, t);
}), Zr = xa("$ZodBoolean", (e, t) => {
	pr.init(e, t), e._zod.pattern = Hs, e._zod.parse = (n, i) => {
		if (t.coerce) try {
			n.value = Boolean(n.value);
		} catch (s) {}
		const a = n.value;
		return "boolean" == typeof a || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: a,
			inst: e
		}), n;
	};
}), qr = xa("$ZodUnknown", (e, t) => {
	pr.init(e, t), e._zod.parse = (e) => e;
}), Gr = xa("$ZodNever", (e, t) => {
	pr.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function Hr(e, t, n) {
	e.issues.length && t.issues.push(...Qa(n, e.issues)), t.value[n] = e.value;
}
const Jr = xa("$ZodArray", (e, t) => {
	pr.init(e, t), e._zod.parse = (n, i) => {
		const a = n.value;
		if (!Array.isArray(a)) return n.issues.push({
			expected: "array",
			code: "invalid_type",
			input: a,
			inst: e
		}), n;
		n.value = Array(a.length);
		const s = [];
		for (let e = 0; e < a.length; e++) {
			const r = a[e], o = t.element._zod.run({
				value: r,
				issues: []
			}, i);
			o instanceof Promise ? s.push(o.then((t) => Hr(t, n, e))) : Hr(o, n, e);
		}
		return s.length ? Promise.all(s).then(() => n) : n;
	};
});
function Ur(e, t, n, i, a, s) {
	const r = n in i;
	if (e.issues.length) {
		if (a && s && !r) return;
		t.issues.push(...Qa(n, e.issues));
	}
	r || a ? void 0 === e.value ? r && (t.value[n] = void 0) : t.value[n] = e.value : e.issues.length || t.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: void 0,
		path: [n]
	});
}
function Lr(e) {
	const t = Object.keys(e.shape);
	for (const a of t) if (!e.shape?.[a]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${a}": expected a Zod schema`);
	const n = (i = e.shape, Object.keys(i).filter((e) => "optional" === i[e]._zod.optin && "optional" === i[e]._zod.optout));
	var i;
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function Wr(e, t, n, i, a, s) {
	const r = [], o = a.keySet, l = a.catchall._zod, c = l.def.type, u = "optional" === l.optin, d = "optional" === l.optout;
	for (const p in t) {
		if ("__proto__" === p) continue;
		if (o.has(p)) continue;
		if ("never" === c) {
			r.push(p);
			continue;
		}
		const a = l.run({
			value: t[p],
			issues: []
		}, i);
		a instanceof Promise ? e.push(a.then((e) => Ur(e, n, p, t, u, d))) : Ur(a, n, p, t, u, d);
	}
	return r.length && n.issues.push({
		code: "unrecognized_keys",
		keys: r,
		input: t,
		inst: s
	}), e.length ? Promise.all(e).then(() => n) : n;
}
const Vr = xa("$ZodObject", (e, t) => {
	if (pr.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		const e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			const n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	const n = Ra(() => Lr(t));
	Pa(e._zod, "propValues", () => {
		const e = t.shape, n = {};
		for (const t in e) {
			const i = e[t]._zod;
			if (i.values) {
				n[t] ?? (n[t] = /* @__PURE__ */ new Set());
				for (const e of i.values) n[t].add(e);
			}
		}
		return n;
	});
	const i = qa, a = t.catchall;
	let s;
	e._zod.parse = (t, r) => {
		s ?? (s = n.value);
		const o = t.value;
		if (!i(o)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: o,
			inst: e
		}), t;
		t.value = {};
		const l = [], c = s.shape;
		for (const e of s.keys) {
			const n = c[e], i = "optional" === n._zod.optin, a = "optional" === n._zod.optout, s = n._zod.run({
				value: o[e],
				issues: []
			}, r);
			s instanceof Promise ? l.push(s.then((n) => Ur(n, t, e, o, i, a))) : Ur(s, t, e, o, i, a);
		}
		return a ? Wr(l, o, t, r, n.value, e) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), Yr = xa("$ZodObjectJIT", (e, t) => {
	Vr.init(e, t);
	const n = e._zod.parse, i = Ra(() => Lr(t));
	let a;
	const s = qa, r = !Ta.jitless, o = r && Ga.value, l = t.catchall;
	let c;
	e._zod.parse = (u, d) => {
		c ?? (c = i.value);
		const p = u.value;
		return s(p) ? r && o && !1 === d?.async && !0 !== d.jitless ? (a || (a = ((e) => {
			const t = new ur([
				"shape",
				"payload",
				"ctx"
			]), n = i.value, a = (e) => {
				const t = Ba(e);
				return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
			};
			t.write("const input = payload.value;");
			const s = Object.create(null);
			let r = 0;
			for (const i of n.keys) s[i] = "key_" + r++;
			t.write("const newResult = {};");
			for (const i of n.keys) {
				const n = s[i], r = Ba(i), o = e[i], l = "optional" === o?._zod?.optin, c = "optional" === o?._zod?.optout;
				t.write(`const ${n} = ${a(i)};`), l && c ? t.write(`\n        if (${n}.issues.length) {\n          if (${r} in input) {\n            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [${r}, ...iss.path] : [${r}]\n            })));\n          }\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : l ? t.write(`\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : t.write(`\n        const ${n}_present = ${r} in input;\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        if (!${n}_present && !${n}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${r}]\n          });\n        }\n\n        if (${n}_present) {\n          if (${n}.value === undefined) {\n            newResult[${r}] = undefined;\n          } else {\n            newResult[${r}] = ${n}.value;\n          }\n        }\n\n      `);
			}
			t.write("payload.value = newResult;"), t.write("return payload;");
			const o = t.compile();
			return (t, n) => o(e, t, n);
		})(t.shape)), u = a(u, d), l ? Wr([], p, u, d, c, e) : u) : n(u, d) : (u.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), u);
	};
});
function Kr(e, t, n, i) {
	for (const s of e) if (0 === s.issues.length) return t.value = s.value, t;
	const a = e.filter((e) => !Ka(e));
	return 1 === a.length ? (t.value = a[0].value, a[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => ts(e, i, za())))
	}), t);
}
const Xr = xa("$ZodUnion", (e, t) => {
	pr.init(e, t), Pa(e._zod, "optin", () => t.options.some((e) => "optional" === e._zod.optin) ? "optional" : void 0), Pa(e._zod, "optout", () => t.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0), Pa(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), Pa(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			const e = t.options.map((e) => e._zod.pattern);
			return new RegExp(`^(${e.map((e) => Ea(e.source)).join("|")})$`);
		}
	});
	const n = 1 === t.options.length ? t.options[0]._zod.run : null;
	e._zod.parse = (i, a) => {
		if (n) return n(i, a);
		let s = !1;
		const r = [];
		for (const e of t.options) {
			const t = e._zod.run({
				value: i.value,
				issues: []
			}, a);
			if (t instanceof Promise) r.push(t), s = !0;
			else {
				if (0 === t.issues.length) return t;
				r.push(t);
			}
		}
		return s ? Promise.all(r).then((t) => Kr(t, i, e, a)) : Kr(r, i, e, a);
	};
}), Qr = xa("$ZodIntersection", (e, t) => {
	pr.init(e, t), e._zod.parse = (e, n) => {
		const i = e.value, a = t.left._zod.run({
			value: i,
			issues: []
		}, n), s = t.right._zod.run({
			value: i,
			issues: []
		}, n);
		return a instanceof Promise || s instanceof Promise ? Promise.all([a, s]).then(([t, n]) => to(e, t, n)) : to(e, a, s);
	};
});
function eo(e, t) {
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (e instanceof Date && t instanceof Date && +e === +t) return {
		valid: !0,
		data: e
	};
	if (Ha(e) && Ha(t)) {
		const n = Object.keys(t), i = Object.keys(e).filter((e) => -1 !== n.indexOf(e)), a = {
			...e,
			...t
		};
		for (const s of i) {
			const n = eo(e[s], t[s]);
			if (!n.valid) return {
				valid: !1,
				mergeErrorPath: [s, ...n.mergeErrorPath]
			};
			a[s] = n.data;
		}
		return {
			valid: !0,
			data: a
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		const n = [];
		for (let i = 0; i < e.length; i++) {
			const a = eo(e[i], t[i]);
			if (!a.valid) return {
				valid: !1,
				mergeErrorPath: [i, ...a.mergeErrorPath]
			};
			n.push(a.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function to(e, t, n) {
	const i = /* @__PURE__ */ new Map();
	let a;
	for (const o of t.issues) if ("unrecognized_keys" === o.code) {
		a ?? (a = o);
		for (const e of o.keys) i.has(e) || i.set(e, {}), i.get(e).l = !0;
	} else e.issues.push(o);
	for (const o of n.issues) if ("unrecognized_keys" === o.code) for (const e of o.keys) i.has(e) || i.set(e, {}), i.get(e).r = !0;
	else e.issues.push(o);
	const s = [...i].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length && a && e.issues.push({
		...a,
		keys: s
	}), Ka(e)) return e;
	const r = eo(t.value, n.value);
	if (!r.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
	return e.value = r.data, e;
}
const no = xa("$ZodRecord", (e, t) => {
	pr.init(e, t), e._zod.parse = (n, i) => {
		const a = n.value;
		if (!Ha(a)) return n.issues.push({
			expected: "record",
			code: "invalid_type",
			input: a,
			inst: e
		}), n;
		const s = [], r = t.keyType._zod.values;
		if (r) {
			n.value = {};
			const o = /* @__PURE__ */ new Set();
			for (const c of r) if ("string" == typeof c || "number" == typeof c || "symbol" == typeof c) {
				o.add("number" == typeof c ? c.toString() : c);
				const r = t.keyType._zod.run({
					value: c,
					issues: []
				}, i);
				if (r instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (r.issues.length) {
					n.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: r.issues.map((e) => ts(e, i, za())),
						input: c,
						path: [c],
						inst: e
					});
					continue;
				}
				const l = r.value, u = t.valueType._zod.run({
					value: a[c],
					issues: []
				}, i);
				u instanceof Promise ? s.push(u.then((e) => {
					e.issues.length && n.issues.push(...Qa(c, e.issues)), n.value[l] = e.value;
				})) : (u.issues.length && n.issues.push(...Qa(c, u.issues)), n.value[l] = u.value);
			}
			let l;
			for (const e in a) o.has(e) || (l = l ?? [], l.push(e));
			l && l.length > 0 && n.issues.push({
				code: "unrecognized_keys",
				input: a,
				inst: e,
				keys: l
			});
		} else {
			n.value = {};
			for (const r of Reflect.ownKeys(a)) {
				if ("__proto__" === r) continue;
				if (!Object.prototype.propertyIsEnumerable.call(a, r)) continue;
				let o = t.keyType._zod.run({
					value: r,
					issues: []
				}, i);
				if (o instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if ("string" == typeof r && Gs.test(r) && o.issues.length) {
					const e = t.keyType._zod.run({
						value: Number(r),
						issues: []
					}, i);
					if (e instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
					0 === e.issues.length && (o = e);
				}
				if (o.issues.length) {
					"loose" === t.mode ? n.value[r] = a[r] : n.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: o.issues.map((e) => ts(e, i, za())),
						input: r,
						path: [r],
						inst: e
					});
					continue;
				}
				const l = t.valueType._zod.run({
					value: a[r],
					issues: []
				}, i);
				l instanceof Promise ? s.push(l.then((e) => {
					e.issues.length && n.issues.push(...Qa(r, e.issues)), n.value[o.value] = e.value;
				})) : (l.issues.length && n.issues.push(...Qa(r, l.issues)), n.value[o.value] = l.value);
			}
		}
		return s.length ? Promise.all(s).then(() => n) : n;
	};
}), io = xa("$ZodEnum", (e, t) => {
	pr.init(e, t);
	const n = Da(t.entries), i = new Set(n);
	e._zod.values = i, e._zod.pattern = new RegExp(`^(${n.filter((e) => Ua.has(typeof e)).map((e) => "string" == typeof e ? La(e) : e.toString()).join("|")})$`), e._zod.parse = (t, a) => {
		const s = t.value;
		return i.has(s) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: s,
			inst: e
		}), t;
	};
}), ao = xa("$ZodTransform", (e, t) => {
	pr.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, i) => {
		if ("backward" === i.direction) throw new $a(e.constructor.name);
		const a = t.transform(n.value, n);
		if (i.async) return (a instanceof Promise ? a : Promise.resolve(a)).then((e) => (n.value = e, n.fallback = !0, n));
		if (a instanceof Promise) throw new Na();
		return n.value = a, n.fallback = !0, n;
	};
});
function so(e, t) {
	return void 0 === t && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e;
}
const ro = xa("$ZodOptional", (e, t) => {
	pr.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Pa(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), Pa(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${Ea(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if ("optional" === t.innerType._zod.optin) {
			const i = e.value, a = t.innerType._zod.run(e, n);
			return a instanceof Promise ? a.then((e) => so(e, i)) : so(a, i);
		}
		return void 0 === e.value ? e : t.innerType._zod.run(e, n);
	};
}), oo = xa("$ZodExactOptional", (e, t) => {
	ro.init(e, t), Pa(e._zod, "values", () => t.innerType._zod.values), Pa(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), lo = xa("$ZodNullable", (e, t) => {
	pr.init(e, t), Pa(e._zod, "optin", () => t.innerType._zod.optin), Pa(e._zod, "optout", () => t.innerType._zod.optout), Pa(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${Ea(e.source)}|null)$`) : void 0;
	}), Pa(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => null === e.value ? e : t.innerType._zod.run(e, n);
}), co = xa("$ZodDefault", (e, t) => {
	pr.init(e, t), e._zod.optin = "optional", Pa(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		if (void 0 === e.value) return e.value = t.defaultValue, e;
		const i = t.innerType._zod.run(e, n);
		return i instanceof Promise ? i.then((e) => uo(e, t)) : uo(i, t);
	};
});
function uo(e, t) {
	return void 0 === e.value && (e.value = t.defaultValue), e;
}
const po = xa("$ZodPrefault", (e, t) => {
	pr.init(e, t), e._zod.optin = "optional", Pa(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => ("backward" === n.direction || void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), fo = xa("$ZodNonOptional", (e, t) => {
	pr.init(e, t), Pa(e._zod, "values", () => {
		const e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
	}), e._zod.parse = (n, i) => {
		const a = t.innerType._zod.run(n, i);
		return a instanceof Promise ? a.then((t) => mo(t, e)) : mo(a, e);
	};
});
function mo(e, t) {
	return e.issues.length || void 0 !== e.value || e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
const ho = xa("$ZodCatch", (e, t) => {
	pr.init(e, t), e._zod.optin = "optional", Pa(e._zod, "optout", () => t.innerType._zod.optout), Pa(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const i = t.innerType._zod.run(e, n);
		return i instanceof Promise ? i.then((i) => (e.value = i.value, i.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: i.issues.map((e) => ts(e, n, za())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e)) : (e.value = i.value, i.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: i.issues.map((e) => ts(e, n, za())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e);
	};
}), go = xa("$ZodPipe", (e, t) => {
	pr.init(e, t), Pa(e._zod, "values", () => t.in._zod.values), Pa(e._zod, "optin", () => t.in._zod.optin), Pa(e._zod, "optout", () => t.out._zod.optout), Pa(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) {
			const i = t.out._zod.run(e, n);
			return i instanceof Promise ? i.then((e) => yo(e, t.in, n)) : yo(i, t.in, n);
		}
		const i = t.in._zod.run(e, n);
		return i instanceof Promise ? i.then((e) => yo(e, t.out, n)) : yo(i, t.out, n);
	};
});
function yo(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues,
		fallback: e.fallback
	}, n);
}
const wo = xa("$ZodReadonly", (e, t) => {
	pr.init(e, t), Pa(e._zod, "propValues", () => t.innerType._zod.propValues), Pa(e._zod, "values", () => t.innerType._zod.values), Pa(e._zod, "optin", () => t.innerType?._zod?.optin), Pa(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const i = t.innerType._zod.run(e, n);
		return i instanceof Promise ? i.then(_o) : _o(i);
	};
});
function _o(e) {
	return e.value = Object.freeze(e.value), e;
}
const vo = xa("$ZodCustom", (e, t) => {
	Ls.init(e, t), pr.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		const i = n.value, a = t.fn(i);
		if (a instanceof Promise) return a.then((t) => bo(t, n, i, e));
		bo(a, n, i, e);
	};
});
function bo(e, t, n, i) {
	if (!e) {
		const e = {
			code: "custom",
			input: n,
			inst: i,
			path: [...i._zod.def.path ?? []],
			continue: !i._zod.def.abort
		};
		i._zod.def.params && (e.params = i._zod.def.params), t.issues.push(is(e));
	}
}
var ko;
(ko = globalThis).__zod_globalRegistry ?? (ko.__zod_globalRegistry = new class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		const n = t[0];
		return this._map.set(e, n), n && "object" == typeof n && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		const t = this._map.get(e);
		return t && "object" == typeof t && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		const t = e._zod.parent;
		if (t) {
			const n = { ...this.get(t) ?? {} };
			delete n.id;
			const i = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(i).length ? i : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
}());
const So = globalThis.__zod_globalRegistry;
function Io(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...Va(t)
	});
}
function Ao(e, t) {
	return new Vs({
		check: "less_than",
		...Va(t),
		value: e,
		inclusive: !1
	});
}
function xo(e, t) {
	return new Vs({
		check: "less_than",
		...Va(t),
		value: e,
		inclusive: !0
	});
}
function No(e, t) {
	return new Ys({
		check: "greater_than",
		...Va(t),
		value: e,
		inclusive: !1
	});
}
function $o(e, t) {
	return new Ys({
		check: "greater_than",
		...Va(t),
		value: e,
		inclusive: !0
	});
}
function To(e, t) {
	return new Ks({
		check: "multiple_of",
		...Va(t),
		value: e
	});
}
function zo(e, t) {
	return new Qs({
		check: "max_length",
		...Va(t),
		maximum: e
	});
}
function Do(e, t) {
	return new er({
		check: "min_length",
		...Va(t),
		minimum: e
	});
}
function Mo(e, t) {
	return new tr({
		check: "length_equals",
		...Va(t),
		length: e
	});
}
function Ro(e) {
	return new cr({
		check: "overwrite",
		tx: e
	});
}
function Co(e, t) {
	const n = new Ls({
		check: "custom",
		...Va(t)
	});
	return n._zod.check = e, n;
}
function Eo(e) {
	let t = e?.target ?? "draft-2020-12";
	return "draft-4" === t && (t = "draft-04"), "draft-7" === t && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? So,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		external: e?.external ?? void 0
	};
}
function Fo(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var i;
	const a = e._zod.def, s = t.seen.get(e);
	if (s) return s.count++, n.schemaPath.includes(e) && (s.cycle = n.path), s.schema;
	const r = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, r);
	const o = e._zod.toJSONSchema?.();
	if (o) r.schema = o;
	else {
		const i = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, r.schema, i);
		else {
			const n = r.schema, s = t.processors[a.type];
			if (!s) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${a.type}`);
			s(e, t, n, i);
		}
		const s = e._zod.parent;
		s && (r.ref || (r.ref = s), Fo(s, t, i), t.seen.get(s).isParent = !0);
	}
	const l = t.metadataRegistry.get(e);
	return l && Object.assign(r.schema, l), "input" === t.io && jo(e) && (delete r.schema.examples, delete r.schema.default), "input" === t.io && "_prefault" in r.schema && ((i = r.schema).default ?? (i.default = r.schema._prefault)), delete r.schema._prefault, t.seen.get(e).schema;
}
function Po(e, t) {
	const n = e.seen.get(t);
	if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const i = /* @__PURE__ */ new Map();
	for (const s of e.seen.entries()) {
		const t = e.metadataRegistry.get(s[0])?.id;
		if (t) {
			const e = i.get(t);
			if (e && e !== s[0]) throw new Error(`Duplicate schema id "${t}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			i.set(t, s[0]);
		}
	}
	const a = (t) => {
		if (t[1].schema.$ref) return;
		const i = t[1], { ref: a, defId: s } = ((t) => {
			const i = "draft-2020-12" === e.target ? "$defs" : "definitions";
			if (e.external) {
				const n = e.external.registry.get(t[0])?.id, a = e.external.uri ?? ((e) => e);
				if (n) return { ref: a(n) };
				const s = t[1].defId ?? t[1].schema.id ?? "schema" + e.counter++;
				return t[1].defId = s, {
					defId: s,
					ref: `${a("__shared")}#/${i}/${s}`
				};
			}
			if (t[1] === n) return { ref: "#" };
			const a = `#/${i}/`, s = t[1].schema.id ?? "__schema" + e.counter++;
			return {
				defId: s,
				ref: a + s
			};
		})(t);
		i.def = { ...i.schema }, s && (i.defId = s);
		const r = i.schema;
		for (const e in r) delete r[e];
		r.$ref = a;
	};
	if ("throw" === e.cycles) for (const s of e.seen.entries()) {
		const e = s[1];
		if (e.cycle) throw new Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>\n\nSet the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (const s of e.seen.entries()) {
		const n = s[1];
		if (t !== s[0]) {
			if (e.external) {
				const n = e.external.registry.get(s[0])?.id;
				if (t !== s[0] && n) {
					a(s);
					continue;
				}
			}
			(e.metadataRegistry.get(s[0])?.id || n.cycle || n.count > 1 && "ref" === e.reused) && a(s);
		} else a(s);
	}
}
function Oo(e, t) {
	const n = e.seen.get(t);
	if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const i = (t) => {
		const n = e.seen.get(t);
		if (null === n.ref) return;
		const a = n.def ?? n.schema, s = { ...a }, r = n.ref;
		if (n.ref = null, r) {
			i(r);
			const n = e.seen.get(r), o = n.schema;
			if (!o.$ref || "draft-07" !== e.target && "draft-04" !== e.target && "openapi-3.0" !== e.target ? Object.assign(a, o) : (a.allOf = a.allOf ?? [], a.allOf.push(o)), Object.assign(a, s), t._zod.parent === r) for (const e in a) "$ref" !== e && "allOf" !== e && (e in s || delete a[e]);
			if (o.$ref && n.def) for (const e in a) "$ref" !== e && "allOf" !== e && e in n.def && JSON.stringify(a[e]) === JSON.stringify(n.def[e]) && delete a[e];
		}
		const o = t._zod.parent;
		if (o && o !== r) {
			i(o);
			const t = e.seen.get(o);
			if (t?.schema.$ref && (a.$ref = t.schema.$ref, t.def)) for (const e in a) "$ref" !== e && "allOf" !== e && e in t.def && JSON.stringify(a[e]) === JSON.stringify(t.def[e]) && delete a[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: a,
			path: n.path ?? []
		});
	};
	for (const l of [...e.seen.entries()].reverse()) i(l[0]);
	const a = {};
	if ("draft-2020-12" === e.target ? a.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === e.target ? a.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === e.target ? a.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		const n = e.external.registry.get(t)?.id;
		if (!n) throw new Error("Schema is missing an `id` property");
		a.$id = e.external.uri(n);
	}
	Object.assign(a, n.def ?? n.schema);
	const s = e.metadataRegistry.get(t)?.id;
	void 0 !== s && a.id === s && delete a.id;
	const r = e.external?.defs ?? {};
	for (const l of e.seen.entries()) {
		const e = l[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, r[e.defId] = e.def);
	}
	e.external || Object.keys(r).length > 0 && ("draft-2020-12" === e.target ? a.$defs = r : a.definitions = r);
	try {
		const n = JSON.parse(JSON.stringify(a));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Bo(t, "input", e.processors),
					output: Bo(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch (o) {
		throw new Error("Error converting schema to JSON.");
	}
}
function jo(e, t) {
	const n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	const i = e._zod.def;
	if ("transform" === i.type) return !0;
	if ("array" === i.type) return jo(i.element, n);
	if ("set" === i.type) return jo(i.valueType, n);
	if ("lazy" === i.type) return jo(i.getter(), n);
	if ("promise" === i.type || "optional" === i.type || "nonoptional" === i.type || "nullable" === i.type || "readonly" === i.type || "default" === i.type || "prefault" === i.type) return jo(i.innerType, n);
	if ("intersection" === i.type) return jo(i.left, n) || jo(i.right, n);
	if ("record" === i.type || "map" === i.type) return jo(i.keyType, n) || jo(i.valueType, n);
	if ("pipe" === i.type) return !!e._zod.traits.has("$ZodCodec") || jo(i.in, n) || jo(i.out, n);
	if ("object" === i.type) {
		for (const e in i.shape) if (jo(i.shape[e], n)) return !0;
		return !1;
	}
	if ("union" === i.type) {
		for (const e of i.options) if (jo(e, n)) return !0;
		return !1;
	}
	if ("tuple" === i.type) {
		for (const e of i.items) if (jo(e, n)) return !0;
		return !(!i.rest || !jo(i.rest, n));
	}
	return !1;
}
const Bo = (e, t, n = {}) => (i) => {
	const { libraryOptions: a, target: s } = i ?? {}, r = Eo({
		...a ?? {},
		target: s,
		io: t,
		processors: n
	});
	return Fo(e, r), Po(r, e), Oo(r, e);
}, Zo = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, qo = (e, t, n, i) => {
	const a = e._zod.def;
	Fo(a.innerType, t, i), t.seen.get(e).ref = a.innerType;
}, Go = xa("ZodISODateTime", (e, t) => {
	xr.init(e, t), fl.init(e, t);
});
const Ho = xa("ZodISODate", (e, t) => {
	Nr.init(e, t), fl.init(e, t);
});
const Jo = xa("ZodISOTime", (e, t) => {
	$r.init(e, t), fl.init(e, t);
});
const Uo = xa("ZodISODuration", (e, t) => {
	Tr.init(e, t), fl.init(e, t);
});
const Lo = (e, t) => {
	ss.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
		format: { value: (t) => function(e, t = (e) => e.message) {
			const n = { _errors: [] }, i = (e, a = []) => {
				for (const s of e.issues) if ("invalid_union" === s.code && s.errors.length) s.errors.map((e) => i({ issues: e }, [...a, ...s.path]));
				else if ("invalid_key" === s.code) i({ issues: s.issues }, [...a, ...s.path]);
				else if ("invalid_element" === s.code) i({ issues: s.issues }, [...a, ...s.path]);
				else {
					const e = [...a, ...s.path];
					if (0 === e.length) n._errors.push(t(s));
					else {
						let i = n, a = 0;
						for (; a < e.length;) {
							const n = e[a];
							a !== e.length - 1 ? i[n] = i[n] || { _errors: [] } : (i[n] = i[n] || { _errors: [] }, i[n]._errors.push(t(s))), i = i[n], a++;
						}
					}
				}
			};
			return i(e), n;
		}(e, t) },
		flatten: { value: (t) => function(e, t = (e) => e.message) {
			const n = {}, i = [];
			for (const a of e.issues) a.path.length > 0 ? (n[a.path[0]] = n[a.path[0]] || [], n[a.path[0]].push(t(a))) : i.push(t(a));
			return {
				formErrors: i,
				fieldErrors: n
			};
		}(e, t) },
		addIssue: { value: (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, Ma, 2);
		} },
		addIssues: { value: (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, Ma, 2);
		} },
		isEmpty: { get: () => 0 === e.issues.length }
	});
}, Wo = xa("ZodError", Lo, { Parent: Error }), Vo = os(Wo), Yo = ls(Wo), Ko = cs(Wo), Xo = ds(Wo), Qo = fs(Wo), el = ms(Wo), tl = hs(Wo), nl = gs(Wo), il = ys(Wo), al = ws(Wo), sl = _s(Wo), rl = vs(Wo), ol = /* @__PURE__ */ new WeakMap();
function ll(e, t, n) {
	const i = Object.getPrototypeOf(e);
	let a = ol.get(i);
	if (a || (a = /* @__PURE__ */ new Set(), ol.set(i, a)), !a.has(t)) {
		a.add(t);
		for (const e in n) {
			const t = n[e];
			Object.defineProperty(i, e, {
				configurable: !0,
				enumerable: !1,
				get() {
					const n = t.bind(this);
					return Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: n
					}), n;
				},
				set(t) {
					Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: t
					});
				}
			});
		}
	}
}
const cl = xa("ZodType", (e, t) => (pr.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: Bo(e, "input"),
	output: Bo(e, "output")
} }), e.toJSONSchema = ((e, t = {}) => (n) => {
	const i = Eo({
		...n,
		processors: t
	});
	return Fo(e, i), Po(i, e), Oo(i, e);
})(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (t, n) => Vo(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => Ko(e, t, n), e.parseAsync = async (t, n) => Yo(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => Xo(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => Qo(e, t, n), e.decode = (t, n) => el(e, t, n), e.encodeAsync = async (t, n) => tl(e, t, n), e.decodeAsync = async (t, n) => nl(e, t, n), e.safeEncode = (t, n) => il(e, t, n), e.safeDecode = (t, n) => al(e, t, n), e.safeEncodeAsync = async (t, n) => sl(e, t, n), e.safeDecodeAsync = async (t, n) => rl(e, t, n), ll(e, "ZodType", {
	check(...e) {
		const t = this.def;
		return this.clone(ja(t, { checks: [...t.checks ?? [], ...e.map((e) => "function" == typeof e ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return Wa(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(function(e, t = {}) {
			return function(e, t, n) {
				return new pc({
					type: "custom",
					check: "custom",
					fn: t,
					...Va(n)
				});
			}(0, e, t);
		}(e, t));
	},
	superRefine(e, t) {
		return this.check(function(e, t) {
			return function(e, t) {
				const n = Co((t) => (t.addIssue = (e) => {
					if ("string" == typeof e) t.issues.push(is(e, t.value, n._zod.def));
					else {
						const i = e;
						i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = t.value), i.inst ?? (i.inst = n), i.continue ?? (i.continue = !n._zod.def.abort), t.issues.push(is(i));
					}
				}, e(t.value, t)), t);
				return n;
			}(e, t);
		}(e, t));
	},
	overwrite(e) {
		return this.check(Ro(e));
	},
	optional() {
		return tc(this);
	},
	exactOptional() {
		return new nc({
			type: "optional",
			innerType: this
		});
	},
	nullable() {
		return ac(this);
	},
	nullish() {
		return tc(ac(this));
	},
	nonoptional(e) {
		return function(e, t) {
			return new oc({
				type: "nonoptional",
				innerType: e,
				...Va(t)
			});
		}(this, e);
	},
	array() {
		return Gl(this);
	},
	or(e) {
		return Ll([this, e]);
	},
	and(e) {
		return new Wl({
			type: "intersection",
			left: this,
			right: e
		});
	},
	transform(e) {
		return uc(this, new Ql({
			type: "transform",
			transform: e
		}));
	},
	default(e) {
		return t = e, new sc({
			type: "default",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Ja(t);
			}
		});
		var t;
	},
	prefault(e) {
		return t = e, new rc({
			type: "prefault",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Ja(t);
			}
		});
		var t;
	},
	catch(e) {
		return new lc({
			type: "catch",
			innerType: this,
			catchValue: "function" == typeof (t = e) ? t : () => t
		});
		var t;
	},
	pipe(e) {
		return uc(this, e);
	},
	readonly() {
		return new dc({
			type: "readonly",
			innerType: this
		});
	},
	describe(e) {
		const t = this.clone();
		return So.add(t, { description: e }), t;
	},
	meta(...e) {
		if (0 === e.length) return So.get(this);
		const t = this.clone();
		return So.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e) {
		return e(this);
	}
}), Object.defineProperty(e, "description", {
	get: () => So.get(e)?.description,
	configurable: !0
}), e)), ul = xa("_ZodString", (e, t) => {
	fr.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n) => {
		const i = n;
		i.type = "string";
		const { minimum: a, maximum: s, format: r, patterns: o, contentEncoding: l } = e._zod.bag;
		if ("number" == typeof a && (i.minLength = a), "number" == typeof s && (i.maxLength = s), r && (i.format = Zo[r] ?? r, "" === i.format && delete i.format, "time" === r && delete i.format), l && (i.contentEncoding = l), o && o.size > 0) {
			const e = [...o];
			1 === e.length ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
				..."draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	})(e, t, n);
	const n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, ll(e, "_ZodString", {
		regex(...e) {
			return this.check(function(e, t) {
				return new ir({
					check: "string_format",
					format: "regex",
					...Va(t),
					pattern: e
				});
			}(...e));
		},
		includes(...e) {
			return this.check(function(e, t) {
				return new rr({
					check: "string_format",
					format: "includes",
					...Va(t),
					includes: e
				});
			}(...e));
		},
		startsWith(...e) {
			return this.check(function(e, t) {
				return new or({
					check: "string_format",
					format: "starts_with",
					...Va(t),
					prefix: e
				});
			}(...e));
		},
		endsWith(...e) {
			return this.check(function(e, t) {
				return new lr({
					check: "string_format",
					format: "ends_with",
					...Va(t),
					suffix: e
				});
			}(...e));
		},
		min(...e) {
			return this.check(Do(...e));
		},
		max(...e) {
			return this.check(zo(...e));
		},
		length(...e) {
			return this.check(Mo(...e));
		},
		nonempty(...e) {
			return this.check(Do(1, ...e));
		},
		lowercase(e) {
			return this.check(function(e) {
				return new ar({
					check: "string_format",
					format: "lowercase",
					...Va(e)
				});
			}(e));
		},
		uppercase(e) {
			return this.check(function(e) {
				return new sr({
					check: "string_format",
					format: "uppercase",
					...Va(e)
				});
			}(e));
		},
		trim() {
			return this.check(Ro((e) => e.trim()));
		},
		normalize(...e) {
			return this.check(function(e) {
				return Ro((t) => t.normalize(e));
			}(...e));
		},
		toLowerCase() {
			return this.check(Ro((e) => e.toLowerCase()));
		},
		toUpperCase() {
			return this.check(Ro((e) => e.toUpperCase()));
		},
		slugify() {
			return this.check(Ro((e) => function(e) {
				return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
			}(e)));
		}
	});
}), dl = xa("ZodString", (e, t) => {
	fr.init(e, t), ul.init(e, t), e.email = (t) => e.check(function(e, t) {
		return new ml({
			type: "string",
			format: "email",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.url = (t) => e.check(function(e, t) {
		return new yl({
			type: "string",
			format: "url",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.jwt = (t) => e.check(function(e, t) {
		return new Ml({
			type: "string",
			format: "jwt",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.emoji = (t) => e.check(function(e, t) {
		return new wl({
			type: "string",
			format: "emoji",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.guid = (t) => e.check(Io(hl, t)), e.uuid = (t) => e.check(function(e, t) {
		return new gl({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.uuidv4 = (t) => e.check(function(e, t) {
		return new gl({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v4",
			...Va(t)
		});
	}(0, t)), e.uuidv6 = (t) => e.check(function(e, t) {
		return new gl({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v6",
			...Va(t)
		});
	}(0, t)), e.uuidv7 = (t) => e.check(function(e, t) {
		return new gl({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v7",
			...Va(t)
		});
	}(0, t)), e.nanoid = (t) => e.check(function(e, t) {
		return new _l({
			type: "string",
			format: "nanoid",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.guid = (t) => e.check(Io(hl, t)), e.cuid = (t) => e.check(function(e, t) {
		return new vl({
			type: "string",
			format: "cuid",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.cuid2 = (t) => e.check(function(e, t) {
		return new bl({
			type: "string",
			format: "cuid2",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.ulid = (t) => e.check(function(e, t) {
		return new kl({
			type: "string",
			format: "ulid",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.base64 = (t) => e.check(function(e, t) {
		return new Tl({
			type: "string",
			format: "base64",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.base64url = (t) => e.check(function(e, t) {
		return new zl({
			type: "string",
			format: "base64url",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.xid = (t) => e.check(function(e, t) {
		return new Sl({
			type: "string",
			format: "xid",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.ksuid = (t) => e.check(function(e, t) {
		return new Il({
			type: "string",
			format: "ksuid",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.ipv4 = (t) => e.check(function(e, t) {
		return new Al({
			type: "string",
			format: "ipv4",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.ipv6 = (t) => e.check(function(e, t) {
		return new xl({
			type: "string",
			format: "ipv6",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.cidrv4 = (t) => e.check(function(e, t) {
		return new Nl({
			type: "string",
			format: "cidrv4",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.cidrv6 = (t) => e.check(function(e, t) {
		return new $l({
			type: "string",
			format: "cidrv6",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.e164 = (t) => e.check(function(e, t) {
		return new Dl({
			type: "string",
			format: "e164",
			check: "string_format",
			abort: !1,
			...Va(t)
		});
	}(0, t)), e.datetime = (t) => e.check(function(e) {
		return function(e, t) {
			return new Go({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: !1,
				local: !1,
				precision: null,
				...Va(t)
			});
		}(0, e);
	}(t)), e.date = (t) => e.check(function(e) {
		return function(e, t) {
			return new Ho({
				type: "string",
				format: "date",
				check: "string_format",
				...Va(t)
			});
		}(0, e);
	}(t)), e.time = (t) => e.check(function(e) {
		return function(e, t) {
			return new Jo({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...Va(t)
			});
		}(0, e);
	}(t)), e.duration = (t) => e.check(function(e) {
		return function(e, t) {
			return new Uo({
				type: "string",
				format: "duration",
				check: "string_format",
				...Va(t)
			});
		}(0, e);
	}(t));
});
function pl(e) {
	return function(e, t) {
		return new dl({
			type: "string",
			...Va(t)
		});
	}(0, e);
}
const fl = xa("ZodStringFormat", (e, t) => {
	mr.init(e, t), ul.init(e, t);
}), ml = xa("ZodEmail", (e, t) => {
	yr.init(e, t), fl.init(e, t);
}), hl = xa("ZodGUID", (e, t) => {
	hr.init(e, t), fl.init(e, t);
}), gl = xa("ZodUUID", (e, t) => {
	gr.init(e, t), fl.init(e, t);
}), yl = xa("ZodURL", (e, t) => {
	wr.init(e, t), fl.init(e, t);
}), wl = xa("ZodEmoji", (e, t) => {
	_r.init(e, t), fl.init(e, t);
}), _l = xa("ZodNanoID", (e, t) => {
	vr.init(e, t), fl.init(e, t);
}), vl = xa("ZodCUID", (e, t) => {
	br.init(e, t), fl.init(e, t);
}), bl = xa("ZodCUID2", (e, t) => {
	kr.init(e, t), fl.init(e, t);
}), kl = xa("ZodULID", (e, t) => {
	Sr.init(e, t), fl.init(e, t);
}), Sl = xa("ZodXID", (e, t) => {
	Ir.init(e, t), fl.init(e, t);
}), Il = xa("ZodKSUID", (e, t) => {
	Ar.init(e, t), fl.init(e, t);
}), Al = xa("ZodIPv4", (e, t) => {
	zr.init(e, t), fl.init(e, t);
}), xl = xa("ZodIPv6", (e, t) => {
	Dr.init(e, t), fl.init(e, t);
}), Nl = xa("ZodCIDRv4", (e, t) => {
	Mr.init(e, t), fl.init(e, t);
}), $l = xa("ZodCIDRv6", (e, t) => {
	Rr.init(e, t), fl.init(e, t);
}), Tl = xa("ZodBase64", (e, t) => {
	Er.init(e, t), fl.init(e, t);
}), zl = xa("ZodBase64URL", (e, t) => {
	Fr.init(e, t), fl.init(e, t);
}), Dl = xa("ZodE164", (e, t) => {
	Pr.init(e, t), fl.init(e, t);
}), Ml = xa("ZodJWT", (e, t) => {
	Or.init(e, t), fl.init(e, t);
}), Rl = xa("ZodNumber", (e, t) => {
	jr.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n) => {
		const i = n, { minimum: a, maximum: s, format: r, multipleOf: o, exclusiveMaximum: l, exclusiveMinimum: c } = e._zod.bag;
		"string" == typeof r && r.includes("int") ? i.type = "integer" : i.type = "number";
		const u = "number" == typeof c && c >= (a ?? Number.NEGATIVE_INFINITY), d = "number" == typeof l && l <= (s ?? Number.POSITIVE_INFINITY), p = "draft-04" === t.target || "openapi-3.0" === t.target;
		u ? p ? (i.minimum = c, i.exclusiveMinimum = !0) : i.exclusiveMinimum = c : "number" == typeof a && (i.minimum = a), d ? p ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : "number" == typeof s && (i.maximum = s), "number" == typeof o && (i.multipleOf = o);
	})(e, t, n), ll(e, "ZodNumber", {
		gt(e, t) {
			return this.check(No(e, t));
		},
		gte(e, t) {
			return this.check($o(e, t));
		},
		min(e, t) {
			return this.check($o(e, t));
		},
		lt(e, t) {
			return this.check(Ao(e, t));
		},
		lte(e, t) {
			return this.check(xo(e, t));
		},
		max(e, t) {
			return this.check(xo(e, t));
		},
		int(e) {
			return this.check(Fl(e));
		},
		safe(e) {
			return this.check(Fl(e));
		},
		positive(e) {
			return this.check(No(0, e));
		},
		nonnegative(e) {
			return this.check($o(0, e));
		},
		negative(e) {
			return this.check(Ao(0, e));
		},
		nonpositive(e) {
			return this.check(xo(0, e));
		},
		multipleOf(e, t) {
			return this.check(To(e, t));
		},
		step(e, t) {
			return this.check(To(e, t));
		},
		finite() {
			return this;
		}
	});
	const n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function Cl(e) {
	return function(e, t) {
		return new Rl({
			type: "number",
			checks: [],
			...Va(t)
		});
	}(0, e);
}
const El = xa("ZodNumberFormat", (e, t) => {
	Br.init(e, t), Rl.init(e, t);
});
function Fl(e) {
	return function(e, t) {
		return new El({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...Va(t)
		});
	}(0, e);
}
const Pl = xa("ZodBoolean", (e, t) => {
	Zr.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.type = "boolean";
	})(0, 0, t);
});
function Ol(e) {
	return function(e, t) {
		return new Pl({
			type: "boolean",
			...Va(t)
		});
	}(0, e);
}
const jl = xa("ZodUnknown", (e, t) => {
	qr.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (e, t, n) => {};
});
function Bl() {
	return new jl({ type: "unknown" });
}
const Zl = xa("ZodNever", (e, t) => {
	Gr.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.not = {};
	})(0, 0, t);
});
const ql = xa("ZodArray", (e, t) => {
	Jr.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = n, s = e._zod.def, { minimum: r, maximum: o } = e._zod.bag;
		"number" == typeof r && (a.minItems = r), "number" == typeof o && (a.maxItems = o), a.type = "array", a.items = Fo(s.element, t, {
			...i,
			path: [...i.path, "items"]
		});
	})(e, t, n, i), e.element = t.element, ll(e, "ZodArray", {
		min(e, t) {
			return this.check(Do(e, t));
		},
		nonempty(e) {
			return this.check(Do(1, e));
		},
		max(e, t) {
			return this.check(zo(e, t));
		},
		length(e, t) {
			return this.check(Mo(e, t));
		},
		unwrap() {
			return this.element;
		}
	});
});
function Gl(e, t) {
	return function(e, t, n) {
		return new ql({
			type: "array",
			element: t,
			...Va(n)
		});
	}(0, e, t);
}
const Hl = xa("ZodObject", (e, t) => {
	Yr.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = n, s = e._zod.def;
		a.type = "object", a.properties = {};
		const r = s.shape;
		for (const c in r) a.properties[c] = Fo(r[c], t, {
			...i,
			path: [
				...i.path,
				"properties",
				c
			]
		});
		const o = new Set(Object.keys(r)), l = new Set([...o].filter((e) => {
			const n = s.shape[e]._zod;
			return "input" === t.io ? void 0 === n.optin : void 0 === n.optout;
		}));
		l.size > 0 && (a.required = Array.from(l)), "never" === s.catchall?._zod.def.type ? a.additionalProperties = !1 : s.catchall ? s.catchall && (a.additionalProperties = Fo(s.catchall, t, {
			...i,
			path: [...i.path, "additionalProperties"]
		})) : "output" === t.io && (a.additionalProperties = !1);
	})(e, t, n, i), Pa(e, "shape", () => t.shape), ll(e, "ZodObject", {
		keyof() {
			return Xl(Object.keys(this._zod.def.shape));
		},
		catchall(e) {
			return this.clone({
				...this._zod.def,
				catchall: e
			});
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: Bl()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: Bl()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: function(e, t) {
					return new Zl({
						type: "never",
						...Va(t)
					});
				}(0, e)
			});
			var e;
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(e) {
			return function(e, t) {
				if (!Ha(t)) throw new Error("Invalid input to extend: expected a plain object");
				const n = e._zod.def.checks;
				if (n && n.length > 0) {
					const n = e._zod.def.shape;
					for (const e in t) if (void 0 !== Object.getOwnPropertyDescriptor(n, e)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
				}
				return Wa(e, ja(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return Oa(this, "shape", n), n;
				} }));
			}(this, e);
		},
		safeExtend(e) {
			return function(e, t) {
				if (!Ha(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
				return Wa(e, ja(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return Oa(this, "shape", n), n;
				} }));
			}(this, e);
		},
		merge(e) {
			return function(e, t) {
				if (e._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
				return Wa(e, ja(e._zod.def, {
					get shape() {
						const n = {
							...e._zod.def.shape,
							...t._zod.def.shape
						};
						return Oa(this, "shape", n), n;
					},
					get catchall() {
						return t._zod.def.catchall;
					},
					checks: t._zod.def.checks ?? []
				}));
			}(this, e);
		},
		pick(e) {
			return function(e, t) {
				const n = e._zod.def, i = n.checks;
				if (i && i.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
				return Wa(e, ja(e._zod.def, {
					get shape() {
						const e = {};
						for (const i in t) {
							if (!(i in n.shape)) throw new Error(`Unrecognized key: "${i}"`);
							t[i] && (e[i] = n.shape[i]);
						}
						return Oa(this, "shape", e), e;
					},
					checks: []
				}));
			}(this, e);
		},
		omit(e) {
			return function(e, t) {
				const n = e._zod.def, i = n.checks;
				if (i && i.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
				return Wa(e, ja(e._zod.def, {
					get shape() {
						const i = { ...e._zod.def.shape };
						for (const e in t) {
							if (!(e in n.shape)) throw new Error(`Unrecognized key: "${e}"`);
							t[e] && delete i[e];
						}
						return Oa(this, "shape", i), i;
					},
					checks: []
				}));
			}(this, e);
		},
		partial(...e) {
			return function(e, t, n) {
				const i = t._zod.def.checks;
				if (i && i.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
				return Wa(t, ja(t._zod.def, {
					get shape() {
						const i = t._zod.def.shape, a = { ...i };
						if (n) for (const t in n) {
							if (!(t in i)) throw new Error(`Unrecognized key: "${t}"`);
							n[t] && (a[t] = e ? new e({
								type: "optional",
								innerType: i[t]
							}) : i[t]);
						}
						else for (const t in i) a[t] = e ? new e({
							type: "optional",
							innerType: i[t]
						}) : i[t];
						return Oa(this, "shape", a), a;
					},
					checks: []
				}));
			}(ec, this, e[0]);
		},
		required(...e) {
			return t = oc, n = this, i = e[0], Wa(n, ja(n._zod.def, { get shape() {
				const e = n._zod.def.shape, a = { ...e };
				if (i) for (const n in i) {
					if (!(n in a)) throw new Error(`Unrecognized key: "${n}"`);
					i[n] && (a[n] = new t({
						type: "nonoptional",
						innerType: e[n]
					}));
				}
				else for (const n in e) a[n] = new t({
					type: "nonoptional",
					innerType: e[n]
				});
				return Oa(this, "shape", a), a;
			} }));
			var t, n, i;
		}
	});
});
function Jl(e, t) {
	const n = {
		type: "object",
		shape: e ?? {},
		...Va(t)
	};
	return new Hl(n);
}
const Ul = xa("ZodUnion", (e, t) => {
	Xr.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = !1 === a.inclusive, r = a.options.map((e, n) => Fo(e, t, {
			...i,
			path: [
				...i.path,
				s ? "oneOf" : "anyOf",
				n
			]
		}));
		s ? n.oneOf = r : n.anyOf = r;
	})(e, t, n, i), e.options = t.options;
});
function Ll(e, t) {
	return new Ul({
		type: "union",
		options: e,
		...Va(t)
	});
}
const Wl = xa("ZodIntersection", (e, t) => {
	Qr.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = Fo(a.left, t, {
			...i,
			path: [
				...i.path,
				"allOf",
				0
			]
		}), r = Fo(a.right, t, {
			...i,
			path: [
				...i.path,
				"allOf",
				1
			]
		}), o = (e) => "allOf" in e && 1 === Object.keys(e).length;
		n.allOf = [...o(s) ? s.allOf : [s], ...o(r) ? r.allOf : [r]];
	})(e, t, n, i);
}), Vl = xa("ZodRecord", (e, t) => {
	no.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = n, s = e._zod.def;
		a.type = "object";
		const r = s.keyType, o = r._zod.bag?.patterns;
		if ("loose" === s.mode && o && o.size > 0) {
			const e = Fo(s.valueType, t, {
				...i,
				path: [
					...i.path,
					"patternProperties",
					"*"
				]
			});
			a.patternProperties = {};
			for (const t of o) a.patternProperties[t.source] = e;
		} else "draft-07" !== t.target && "draft-2020-12" !== t.target || (a.propertyNames = Fo(s.keyType, t, {
			...i,
			path: [...i.path, "propertyNames"]
		})), a.additionalProperties = Fo(s.valueType, t, {
			...i,
			path: [...i.path, "additionalProperties"]
		});
		const l = r._zod.values;
		if (l) {
			const e = [...l].filter((e) => "string" == typeof e || "number" == typeof e);
			e.length > 0 && (a.required = e);
		}
	})(e, t, n, i), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Yl(e, t, n) {
	return t && t._zod ? new Vl({
		type: "record",
		keyType: e,
		valueType: t,
		...Va(n)
	}) : new Vl({
		type: "record",
		keyType: pl(),
		valueType: e,
		...Va(t)
	});
}
const Kl = xa("ZodEnum", (e, t) => {
	io.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n) => {
		const i = Da(e._zod.def.entries);
		i.every((e) => "number" == typeof e) && (n.type = "number"), i.every((e) => "string" == typeof e) && (n.type = "string"), n.enum = i;
	})(e, 0, n), e.enum = t.entries, e.options = Object.values(t.entries);
	const n = new Set(Object.keys(t.entries));
	e.extract = (e, i) => {
		const a = {};
		for (const s of e) {
			if (!n.has(s)) throw new Error(`Key ${s} not found in enum`);
			a[s] = t.entries[s];
		}
		return new Kl({
			...t,
			checks: [],
			...Va(i),
			entries: a
		});
	}, e.exclude = (e, i) => {
		const a = { ...t.entries };
		for (const t of e) {
			if (!n.has(t)) throw new Error(`Key ${t} not found in enum`);
			delete a[t];
		}
		return new Kl({
			...t,
			checks: [],
			...Va(i),
			entries: a
		});
	};
});
function Xl(e, t) {
	const n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new Kl({
		type: "enum",
		entries: n,
		...Va(t)
	});
}
const Ql = xa("ZodTransform", (e, t) => {
	ao.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
	})(0, e), e._zod.parse = (n, i) => {
		if ("backward" === i.direction) throw new $a(e.constructor.name);
		n.addIssue = (i) => {
			if ("string" == typeof i) n.issues.push(is(i, n.value, t));
			else {
				const t = i;
				t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), t.input ?? (t.input = n.value), t.inst ?? (t.inst = e), n.issues.push(is(t));
			}
		};
		const a = t.transform(n.value, n);
		return a instanceof Promise ? a.then((e) => (n.value = e, n.fallback = !0, n)) : (n.value = a, n.fallback = !0, n);
	};
}), ec = xa("ZodOptional", (e, t) => {
	ro.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => qo(e, t, 0, i), e.unwrap = () => e._zod.def.innerType;
});
function tc(e) {
	return new ec({
		type: "optional",
		innerType: e
	});
}
const nc = xa("ZodExactOptional", (e, t) => {
	oo.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => qo(e, t, 0, i), e.unwrap = () => e._zod.def.innerType;
}), ic = xa("ZodNullable", (e, t) => {
	lo.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = Fo(a.innerType, t, i), r = t.seen.get(e);
		"openapi-3.0" === t.target ? (r.ref = a.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType;
});
function ac(e) {
	return new ic({
		type: "nullable",
		innerType: e
	});
}
const sc = xa("ZodDefault", (e, t) => {
	co.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		Fo(a.innerType, t, i), t.seen.get(e).ref = a.innerType, n.default = JSON.parse(JSON.stringify(a.defaultValue));
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
}), rc = xa("ZodPrefault", (e, t) => {
	po.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		Fo(a.innerType, t, i), t.seen.get(e).ref = a.innerType, "input" === t.io && (n._prefault = JSON.parse(JSON.stringify(a.defaultValue)));
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType;
}), oc = xa("ZodNonOptional", (e, t) => {
	fo.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		Fo(a.innerType, t, i), t.seen.get(e).ref = a.innerType;
	})(e, t, 0, i), e.unwrap = () => e._zod.def.innerType;
}), lc = xa("ZodCatch", (e, t) => {
	ho.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		let s;
		Fo(a.innerType, t, i), t.seen.get(e).ref = a.innerType;
		try {
			s = a.catchValue(void 0);
		} catch {
			throw new Error("Dynamic catch values are not supported in JSON Schema");
		}
		n.default = s;
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
}), cc = xa("ZodPipe", (e, t) => {
	go.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def, s = a.in._zod.traits.has("$ZodTransform"), r = "input" === t.io ? s ? a.out : a.in : a.out;
		Fo(r, t, i), t.seen.get(e).ref = r;
	})(e, t, 0, i), e.in = t.in, e.out = t.out;
});
function uc(e, t) {
	return new cc({
		type: "pipe",
		in: e,
		out: t
	});
}
const dc = xa("ZodReadonly", (e, t) => {
	wo.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (t, n, i) => ((e, t, n, i) => {
		const a = e._zod.def;
		Fo(a.innerType, t, i), t.seen.get(e).ref = a.innerType, n.readOnly = !0;
	})(e, t, n, i), e.unwrap = () => e._zod.def.innerType;
}), pc = xa("ZodCustom", (e, t) => {
	vo.init(e, t), cl.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
	})(0, e);
}), fc = Xl((mc = m, Object.values(mc)));
var mc;
Jl({
	password: pl(),
	username: pl().max(100, "Username must be 100 characters or fewer")
});
const hc = Jl({
	onset_timestamp: Cl().nullable().optional(),
	offset_timestamp: Cl().nullable().optional(),
	marker_index: Cl().int().default(1),
	marker_type: fc.default(m.MAIN_SLEEP)
}), gc = Jl({
	start_timestamp: Cl().nullable().optional(),
	end_timestamp: Cl().nullable().optional(),
	marker_index: Cl().int().default(1)
}), yc = (Jl({
	sleep_markers: Gl(hc).optional().default([]),
	nonwear_markers: Gl(gc).optional().default([]),
	explicit_no_nonwear: Ol().optional().default(!1),
	is_invalid_night: Ol().optional().default(!1),
	needs_consensus: Ol().optional().default(!1),
	notes: pl().nullable().optional(),
	sleep_period_detection_config: Yl(pl(), Bl()).nullable().optional()
}), Jl({
	timestamps: Gl(Cl()).optional().default([]),
	axis_x: Gl(Cl()).optional().default([]),
	axis_y: Gl(Cl()).optional().default([]),
	axis_z: Gl(Cl()).optional().default([]),
	vector_magnitude: Gl(Cl()).optional().default([]),
	temperature: Gl(Cl()).optional().default([]),
	lux: Gl(Cl()).optional().default([]),
	melanopic_lux: Gl(Cl()).optional().default([]),
	ggir_timestamps: Gl(Cl()).optional().default([]),
	ggir_enmo: Gl(Cl()).optional().default([]),
	ggir_anglez: Gl(Cl()).optional().default([]),
	ggir_sib: Gl(Cl()).optional().default([]),
	timestamps_30s: Gl(Cl()).optional().default([]),
	axis_x_30s: Gl(Cl()).optional().default([]),
	axis_y_30s: Gl(Cl()).optional().default([]),
	axis_z_30s: Gl(Cl()).optional().default([]),
	vector_magnitude_30s: Gl(Cl()).optional().default([])
})), wc = Jl({
	resolution_id: pl(),
	epoch_length_seconds: Cl().int().positive(),
	category: pl(),
	source_type: pl().nullable().optional(),
	derived_from_resolution_id: pl().nullable().optional(),
	aggregation_method: pl().nullable().optional(),
	data: yc,
	algorithm_results: Gl(Cl()).nullable().optional(),
	nonwear_results: Gl(Cl()).nullable().optional()
}), _c = (Jl({
	data: yc.optional(),
	epoch_resolutions: Gl(wc).optional().default([]),
	timestamps: Gl(Cl()).optional(),
	axis_x: Gl(Cl()).optional(),
	axis_y: Gl(Cl()).optional(),
	axis_z: Gl(Cl()).optional(),
	vector_magnitude: Gl(Cl()).optional(),
	temperature: Gl(Cl()).optional(),
	algorithm_results: Gl(Cl()).nullable().optional(),
	nonwear_results: Gl(Cl()).nullable().optional(),
	nonwear_results_choi_2011: Gl(Cl()).nullable().optional(),
	event_markers: Gl(Ll([Cl(), Ol()])).optional().default([]),
	event_marker_timestamps: Gl(Cl()).optional().default([]),
	view_start: Cl().nullable().optional(),
	view_end: Cl().nullable().optional(),
	sensor_nonwear_periods: Gl(Jl({
		start_timestamp: Cl(),
		end_timestamp: Cl()
	})).optional().default([]),
	device_nonwear_source: Xl([
		"gt3x_capsense",
		"detach_nonwear",
		"actiware_off_wrist",
		"uploaded_wear_sensor"
	]).nullable().optional(),
	algorithmic_nonwear_masks: Yl(pl(), Gl(Cl())).optional()
}), w.diary_tolerance_minutes, w.nap_min_consecutive_epochs, w.epoch_length_seconds, [
	"observed",
	"not_collected",
	"structurally_absent",
	"not_applicable",
	"nonresponse",
	"technically_unusable",
	"corrupt",
	"censored",
	"below_detection",
	"redacted",
	"mapping_unresolved",
	"unknown"
]), vc = _c.filter((e) => "observed" !== e && "technically_unusable" !== e && "corrupt" !== e), bc = [
	"insufficient_still_windows",
	"required_calibration_evidence_unavailable",
	"calibration_evidence_unusable"
];
function kc(e, t, n, i) {
	const a = (/* @__PURE__ */ new Date()).toISOString(), s = function(e, t) {
		if (!e) return null;
		const n = function(e) {
			const t = [], { resolution_id: n, factory_parameters_availability: i, factory_parameters_artifact: a, auto_calibration_availability: s, auto_calibration_execution: r, selected_source: o, fallback_source: l, fallback_reason: c, fallback_policy_execution: u, refusal: d } = e;
			/\S/.test(n) || t.push("resolution_id must be non-blank"), _c.includes(i) || t.push(`factory_parameters_availability '${i}' is not an ObservationAvailability`), _c.includes(s) || t.push(`auto_calibration_availability '${s}' is not an ObservationAvailability`);
			const p = [
				o,
				l,
				d
			].filter((e) => void 0 !== e).length;
			if (1 !== p && t.push(`exactly one of selected_source/fallback_source/refusal is required, found ${String(p)}`), "observed" === i && void 0 === a && t.push("observed factory_parameters requires factory_parameters_artifact"), "observed" !== i && void 0 !== a && t.push("non-observed factory_parameters must not carry factory_parameters_artifact"), "observed" === s && void 0 === r && t.push("observed auto_calibration requires auto_calibration_execution"), "observed" !== s && void 0 !== r && t.push("non-observed auto_calibration must not carry auto_calibration_execution"), "factory_parameters" === o && "observed" !== i && t.push("selected_source=factory_parameters requires observed factory evidence"), "auto_calibration" === o && "observed" !== s && t.push("selected_source=auto_calibration requires observed auto-calibration evidence"), void 0 === l || void 0 !== c && void 0 !== u || t.push("fallback_source requires fallback_reason and fallback_policy_execution"), void 0 !== l || void 0 === c && void 0 === u || t.push("fallback provenance is only allowed alongside fallback_source"), d) {
				bc.includes(d.code) || t.push(`refusal.code '${d.code}' is not a CalibrationRefusalCode`), "insufficient_still_windows" === d.code && ("auto_calibration" !== d.blocked_source && t.push("insufficient_still_windows must block auto_calibration"), "technically_unusable" !== d.availability && t.push("insufficient_still_windows must use availability technically_unusable")), "required_calibration_evidence_unavailable" !== d.code || vc.includes(d.availability) || t.push(`required_calibration_evidence_unavailable cannot use availability '${d.availability}'`), "calibration_evidence_unusable" === d.code && "technically_unusable" !== d.availability && "corrupt" !== d.availability && t.push(`calibration_evidence_unusable cannot use availability '${d.availability}'`);
				const e = "factory_parameters" === d.blocked_source ? i : s, n = "factory_parameters" === d.blocked_source ? s : i;
				e !== d.availability && t.push(`refusal blocking ${d.blocked_source} must match that channel's availability ('${e}' vs '${d.availability}')`), "observed" === n && t.push("a refusal must not coexist with an observed alternate calibration source");
			}
			if (t.length > 0) throw new Error(`CalibrationSourceResolution is invalid: ${t.join("; ")}`);
			return e;
		}(function(e, t) {
			const n = {
				resolution_id: t.resolutionId,
				factory_parameters_availability: "not_collected"
			};
			if (!e) return {
				...n,
				auto_calibration_availability: "not_collected",
				refusal: {
					code: "required_calibration_evidence_unavailable",
					blocked_source: "auto_calibration",
					availability: "not_collected"
				}
			};
			switch (e.disposition) {
				case "recalibrated":
				case "candidate_retained_below_preferred_quality": return {
					...n,
					auto_calibration_availability: "observed",
					auto_calibration_execution: t.executionId,
					selected_source: "auto_calibration"
				};
				case "skipped_disabled": return {
					...n,
					auto_calibration_availability: "not_applicable",
					refusal: {
						code: "required_calibration_evidence_unavailable",
						blocked_source: "auto_calibration",
						availability: "not_applicable"
					}
				};
				case "identity_fallback_error_increased": return {
					...n,
					auto_calibration_availability: "technically_unusable",
					refusal: {
						code: "calibration_evidence_unusable",
						blocked_source: "auto_calibration",
						availability: "technically_unusable"
					}
				};
				case "identity_fallback_no_valid_fit": return e.observed.fitAttempted ? {
					...n,
					auto_calibration_availability: "technically_unusable",
					refusal: {
						code: "insufficient_still_windows",
						blocked_source: "auto_calibration",
						availability: "technically_unusable"
					}
				} : {
					...n,
					auto_calibration_availability: "not_collected",
					refusal: {
						code: "required_calibration_evidence_unavailable",
						blocked_source: "auto_calibration",
						availability: "not_collected"
					}
				};
			}
		}(e, {
			resolutionId: `local:file-${String(t)}:calibration`,
			executionId: `local:file-${String(t)}:actours-part1-autocalibration`
		})), i = e.applied;
		return {
			scale: i.scale,
			offset: i.offset,
			errorStart: i.errorStart,
			errorEnd: i.errorEnd,
			numPoints: i.numPoints,
			hoursUsed: i.hoursUsed,
			fitAttempted: i.fitAttempted,
			success: i.success,
			disposition: e.disposition,
			message: i.message,
			resolution: n
		};
	}(n, t), r = (e, t = 0) => "number" == typeof e && Number.isFinite(e) ? e : t;
	return e.map((e) => ({
		fileId: t,
		analysisDate: e.calendarDate,
		...i ? { ggirConfigSha256: i.sha256 } : {},
		...e.lmWindows ? { lmWindows: e.lmWindows } : {},
		totalSleepTimeMinutes: r(e.tstMinutes),
		wasoMinutes: r(e.wasoMinutes),
		sleepEfficiency: 100 * r(e.sleepEfficiency),
		mvpaMinutes: r(e.mvpaMinutes),
		moderateMinutes: Number.isFinite(e.moderateMinutes) ? e.moderateMinutes : null,
		vigorousMinutes: Number.isFinite(e.vigorousMinutes) ? e.vigorousMinutes : null,
		lpaMinutes: r(e.lightMinutes),
		sedentaryMinutes: r(e.sedentaryMinutes),
		l5MidpointHour: r(e.l5MidpointHour),
		m5MidpointHour: r(e.m5MidpointHour),
		intensityGradient: Number.isFinite(e.igGradient) ? e.igGradient : null,
		nonwearMinutes: 60 * r(e.nonwearHours),
		validHours: r(e.validHours),
		cleaningCode: e.cleaningCode ?? null,
		fragmentationTpIn2Ac: Number.isFinite(e.fragTpIn2ac) ? e.fragTpIn2ac : null,
		fragmentationTpAc2In: Number.isFinite(e.fragTpAc2in) ? e.fragTpAc2in : null,
		fragmentCount: Number.isFinite(e.nFragments) ? e.nFragments : null,
		includeDayCriterionHours: e.includeDayCriterionHours,
		meetsIncludeDayCriterion: e.meetsIncludeDayCriterion,
		calibration: s,
		createdAt: a,
		updatedAt: a
	}));
}
const Sc = "Re-import this file to compute GGIR's invalid mask.", Ic = "Hip HDCZA needs the longitudinal angle (anglex or angley), which this recording lacks on GGIR's grid; no night was placed.";
function Ac(e) {
	return e.isInvalidNight || e.sleepMarkers.some((e) => function(e, t = !1) {
		return "auto" !== e.source || function(e, t = !1) {
			if (!0 === e.edited || t) return !0;
			const n = e.placement;
			return _a(e.onsetTimestamp, n?.onset_timestamp) || _a(e.offsetTimestamp, n?.offset_timestamp);
		}(e, t);
	}(e));
}
async function xc(e, t, n, i) {
	return e.nightIntervalOverlap(t, n, Float64Array.from(i, ([e]) => e), Float64Array.from(i, ([, e]) => e), Float64Array.from(i, ([, , e]) => void 0 !== e && void 0 === e.unavailable ? e.weight : 0));
}
function Nc(e, t) {
	const n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
	for (const [a, [, , s]] of t.entries()) if (s && e[a] > 0) {
		for (const e of s.detectors) n.add(e);
		for (const e of s.dropped ?? []) i.has(e.detector) || i.set(e.detector, e);
	}
	for (const a of n) i.delete(a);
	return {
		available: [...n],
		dropped: [...i.values()]
	};
}
async function $c(e, t, n, i) {
	const a = i.map(async ([, , i]) => {
		if (!i?.memberFlags || !i.timestamps) return [];
		const { memberFlags: a } = i, s = await e.epochsOverlapping(Float64Array.from(i.timestamps).subarray(0, a.length), 60, t, n);
		return s ? e.nonwearContributors([...a], bt(i.detectors), s[0], s[1]) : [];
	});
	return bt([...new Set((await Promise.all(a)).flat())]);
}
async function Tc(e, t, n, i, a, s, r) {
	const o = nn(t, n), l = Object.fromEntries(Object.entries(o).map(([e, t]) => [e, new Uint8Array(t)])), c = Be(t) ?? await Re(e, 60, r), u = await ln(a, l, {
		offPeriods: i,
		source: s
	}, {
		timestampsSec: e,
		epochLenSec: c
	}, r);
	return null === u || 0 === e.length ? [] : "unavailable" in u ? [[
		e[0],
		e[e.length - 1] + c,
		{
			detectors: [],
			weight: 0,
			unavailable: u.unavailable
		}
	]] : async function(e, t, n, i) {
		const a = await i.nonwearWeightRuns(Float64Array.from(t), Float64Array.from(e.weight), n);
		if (!a) return [];
		const s = e.available.length > 1 ? {
			memberFlags: e.memberFlags,
			timestamps: t
		} : {};
		return [[
			a.dayStart,
			a.dayEnd,
			{
				detectors: e.available,
				weight: 0,
				dropped: e.dropped,
				...s
			}
		], ...a.starts.map((t, n) => [
			t,
			a.ends[n],
			{
				detectors: e.available,
				weight: a.weights[n]
			}
		])];
	}(u, e, c, r);
}
async function zc(e, t, n = [], i = [], a = {}, s = null, r = b()) {
	const o = [], l = n.map(([e, t]) => ({
		startTimestamp: e,
		endTimestamp: t
	}));
	for (const [c, u] of Object.entries(e)) {
		const e = t[c]?.timestamps;
		e && 0 !== e.length && o.push(...await Tc(e, {
			nonwearResults: u.nonwear.buffer,
			nonwearResultsChoi2011: u.nonwearChoi2011?.buffer ?? null,
			detachNonwear: u.detachNonwear?.buffer ?? null,
			...a[c]
		}, "", l, i, s, r));
	}
	return o;
}
async function Dc(e, t, n, i = vn, a) {
	return _n((a) => {
		if (!e) return [];
		const s = [];
		for (const { start: r, end: o } of tt(e)) {
			if (!r || !o) continue;
			const e = a.resolveSpan(r, o, t, A.daytime, i);
			e && s.push({
				markerType: m.NAP,
				markerIndex: n + s.length + 1,
				onsetTimestamp: e[0],
				offsetTimestamp: e[1]
			});
		}
		return s;
	}, new kn(a));
}
function Mc(e) {
	const t = e instanceof Error ? e.message : "";
	return t.startsWith("runGgirPart3:") ? t : t.includes("timed out") ? `it timed out after ${String(J / 6e4)} minutes` : t.includes("is not a function") ? "this build's actours WASM has no runGgirPart3 export" : "the actours WASM runtime failed (out of memory or a Rust panic)";
}
async function Rc(e, t, n, i = [], s = /* @__PURE__ */ new Map(), r, o, l, c = "wrist", u = E(), d, p, f, h, g, y) {
	const w = u, v = o?.ggirConfig ?? await bi(w), k = t.length;
	if (0 === k) return null;
	const S = s.values().next().value;
	S && me(e, S.importMappingProvenance);
	const I = p ?? b(), A = f ?? (() => _(I)), x = await Ia(c, r?.variant, I), N = x.variant, $ = x.sensorLocation, T = {
		...l ?? {},
		haspt_variant: N,
		hdcza_proposal_revision: 6,
		ggir_config_sha256: v.sha256
	}, z = o?.angley5s, D = o?.anglex5s, M = z && z.length === k ? z : void 0, R = D && D.length === k ? D : void 0, C = o?.invalid5s?.length === k ? o.invalid5s : void 0, F = void 0 !== g && void 0 !== C;
	if (void 0 === C) return Sc;
	const P = "hip" === $ && !M && !R;
	if (P && (console.warn("[local-processing] Hip HDCZA was skipped because no aligned longitudinal axis was available."), !F)) return Ic;
	let O = !1;
	const j = o?.dstRuns ?? [], q = C, G = o?.activity5s?.length === k ? o.activity5s : void 0;
	B(d, "before local HASPT placement");
	const U = await H(I, (e) => e.runGgirPart3({
		anglez: t,
		ggirConfigCsv: v.csvText,
		hasibCounts: Me(v.csvText, o?.zeroCrossings5s),
		...R ? { anglex: R } : {},
		...M ? { angley: M } : {},
		...G ? { enmo: G } : {},
		invalid: q,
		startTsEpochSec: n,
		hasptAlgo: N,
		...void 0 !== r?.config ? { hasptConfig: r.config } : {},
		..."hip" !== $ || R && M ? {} : { longitudinalAxis: M ? 2 : 1 },
		...o?.timezone ? { timezone: o.timezone } : {}
	}), {
		ms: J,
		label: `local ${N} placement`,
		signal: d,
		cancel: A
	}).then((e) => ({
		result: e,
		failure: null
	}), (e) => (Z(e, d, `local ${N} placement`), console.warn("[local-processing] GGIR Part 3 failed for this recording."), {
		result: null,
		failure: Mc(e)
	}));
	if (U.result && F && g(U.result.part3Sib5s), P) return Ic;
	if (!U.result) return `GGIR Part 3 (${N}) failed: ${U.failure}`;
	const L = U.result.part3SptNights, W = await I.ggirIndicesToWallClockMs(Uint32Array.from(L.flatMap((e) => [e.onsetIdx, e.wakeIdx])), 1e3 * n, [...j], o?.wallClockMs ? Float64Array.from(o.wallClockMs) : void 0), V = L.map((e, t) => ({
		onsetTimestamp: W[2 * t] / 1e3,
		offsetTimestamp: W[2 * t + 1] / 1e3,
		analysisDate: e.analysisDate
	}));
	for (const { onsetTimestamp: _, offsetTimestamp: b, analysisDate: E } of V) {
		B(d, "before local HASPT marker placement");
		const t = await at(e, E, ot, a.VAN_HEES_2015, null, w);
		if (t && Ac(t)) continue;
		const n = await xc(I, _, b, i), r = Nc(n.seconds, i), o = 0 === r.available.length && 0 === r.dropped.length ? T : {
			...T,
			nonwear_detectors_available: r.available,
			nonwear_detectors_dropped: r.dropped.map(({ detector: e, reason: t }) => ({
				detector: e,
				reason: t
			}))
		}, u = un(r.dropped, "ggir"), p = (e) => [e, ...u].join("; "), f = n.weightedFraction, g = f > 0 && r.available.length > 1 ? await $c(I, _, b, i) : null, v = await Dc(s.get(E) ?? null, E, 1, pe(e), I), k = xn(null, c), S = [{
			markerType: m.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: _,
			offsetTimestamp: b
		}, ...v].map((e) => ({
			...e,
			source: "auto",
			settingsHash: k
		}));
		B(d, "before local HASPT marker persistence"), await hi({
			signal: d,
			fileId: e,
			date: E,
			expected: yt(t),
			username: "auto_score",
			sleepMarkers: S,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p(`${N} SPT: ${ft(_)} → ${ft(b)}` + (v.length > 0 ? `; ${v.length} diary nap(s)` : "") + (f > 0 ? `; selected-detector nonwear overlap ${Math.round(100 * f)}%` : "") + (g ? ` from ${an(g, r.available.length)}` : "")),
			algorithm: a.VAN_HEES_2015,
			sleepPeriodDetectionConfig: o
		}, w, {
			...h ? { binding: h } : {},
			events: () => h ? [{
				action: "auto_score_applied",
				payload: ht({
					algorithm: a.VAN_HEES_2015,
					sleepPeriodDetection: l ?? null,
					sleepCount: 1,
					napCount: v.length,
					markers: S
				})
			}] : []
		}).then(() => !0, (e) => (Z(e, d, "local HASPT marker persistence"), console.warn("[local-processing] HDCZA marker persistence failed."), O = !0, !1)) && y?.(E);
	}
	return O ? "one or more auto-marker writes failed" : null;
}
const Cc = [
	"analysis_date",
	"epoch_length_seconds",
	"timestamps",
	"activity_counts",
	"sleep_scores",
	"choi_nonwear",
	"sensor_nonwear",
	"diary_onset_time",
	"diary_wake_time",
	"diary_nap_count",
	"diary_naps",
	"diary_nonwear",
	"diary_in_bed_time",
	"diary_out_bed_time",
	"is_weekend",
	"guider_targets",
	"anglez",
	"light",
	"temperature",
	"heart_rate",
	"detach_nonwear",
	"calibration_error",
	"imputed_fraction",
	"hdcza_window"
];
function Ec(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function Fc(e) {
	return JSON.stringify(e);
}
function Pc(e) {
	const t = Ec(e.config), n = Ec(t?.signals) ?? t;
	return {
		...n ? { config: n } : {},
		days: e.days
	};
}
function Oc(e) {
	return JSON.stringify(Pc(e));
}
function jc(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function Bc(e) {
	const t = jc(e), n = t?.analysis_date, i = jc(t?.intrinsic), a = i?.state;
	if (!t || "string" != typeof n || 0 === n.length || !i || "string" != typeof a || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(a)) return null;
	const s = i.score, r = i.verdict, o = i.infinite_reason, l = {}, c = [], u = t.per_guider;
	if (Array.isArray(u)) for (const h of u) {
		const e = jc(h);
		if (!e) continue;
		c.push(e);
		const t = e.guider;
		if ("string" != typeof t) continue;
		const n = e.confidence;
		Object.defineProperty(l, t, {
			value: "number" == typeof n && Number.isFinite(n) ? n : null,
			enumerable: !0,
			configurable: !0,
			writable: !0
		});
	}
	const d = jc(i.features), p = d && Array.isArray(d.feature_values) ? d : null, f = jc(i.legacy_complexity_features) ?? (null === p ? d : null) ?? {}, m = t.computed_at;
	return {
		difficulty: "number" == typeof s && Number.isFinite(s) ? s : null,
		state: a,
		verdict: "string" == typeof r ? r : null,
		infiniteReason: "string" == typeof o ? o : null,
		confidenceByGuider: l,
		features: f,
		featureVector: p,
		perGuider: c,
		computedAt: "string" == typeof m ? m : null,
		canonicalResult: t,
		canonicalIntrinsic: i
	};
}
const Zc = /^[0-9a-f]{64}$/;
var qc = class extends Error {
	constructor(e = !1) {
		super(e ? "Stored complexity evidence failed integrity verification." : "Complexity evidence failed integrity verification."), this.name = "ComplexityEvidenceIntegrityError";
	}
}, Gc = class extends Error {
	constructor() {
		super("Complexity evidence diverged for an existing generation."), this.name = "ComplexityEvidenceDivergenceError";
	}
}, Hc = class extends Error {
	constructor() {
		super("Complexity evidence is older than the retained generation window."), this.name = "ComplexityEvidenceRetentionError";
	}
};
function Jc(e = !1) {
	throw new qc(e);
}
function Uc(e) {
	"string" == typeof e && Zc.test(e) || Jc();
}
function Lc(e) {
	"string" == typeof e && 0 !== e.length && Number.isFinite(Date.parse(e)) || Jc();
}
function Wc(e) {
	if (null === e) return "null";
	switch (typeof e) {
		case "string":
		case "boolean": return JSON.stringify(e);
		case "number": return Number.isFinite(e) || Jc(), JSON.stringify(Object.is(e, -0) ? 0 : e);
		case "object": {
			if (Array.isArray(e)) {
				const t = [];
				for (let n = 0; n < e.length; n += 1) n in e || Jc(), t.push(Wc(e[n]));
				return `[${t.join(",")}]`;
			}
			const t = Object.getPrototypeOf(e);
			t !== Object.prototype && null !== t && Jc(), Object.getOwnPropertySymbols(e).length > 0 && Jc();
			const n = e, i = [];
			for (const e of Object.keys(n).sort()) {
				const t = Object.getOwnPropertyDescriptor(n, e);
				t && "value" in t && t.enumerable || Jc(), i.push(`${JSON.stringify(e)}:${Wc(t.value)}`);
			}
			return `{${i.join(",")}}`;
		}
		default: return Jc();
	}
}
function Vc(e) {
	const t = Wc(e), n = JSON.parse(t);
	return (null == n || "object" != typeof n || Array.isArray(n)) && Jc(), n;
}
async function Yc(e) {
	return j(Wc(e));
}
function Kc(e) {
	const t = e;
	for (const i of [
		"contractVersion",
		"crateVersion",
		"target",
		"semanticProfile",
		"profileProofStatus",
		"temporalBasis"
	]) "string" == typeof t[i] && "" !== t[i] || Jc();
	null === t.sourceRevision || "string" == typeof t.sourceRevision && "" !== t.sourceRevision || Jc(), Uc(t.artifactSha256);
	const n = t.compiledFeatures;
	Array.isArray(n) && n.every((e) => "string" == typeof e && e.length > 0) || Jc(), Wc(e);
}
async function Xc(e, t) {
	"string" != typeof e && Jc(), void 0 !== t && Uc(t);
	let n = 0;
	for (; n < e.length && /\s/.test(e[n]);) n += 1;
	let i = e.length - 1;
	for (; i >= n && /\s/.test(e[i]);) i -= 1;
	"{" === e[n] && "}" === e[i] || Jc();
	const a = await j(e);
	return void 0 !== t && t !== a && Jc(), a;
}
function Qc(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != typeof t || null === e || null === t) return !1;
	if (Array.isArray(e) || Array.isArray(t)) return !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((e, n) => Qc(e, t[n]));
	if ("object" != typeof e || "object" != typeof t) return !1;
	const n = Object.keys(e).sort(), i = Object.keys(t).sort();
	if (n.length !== i.length || n.some((e, t) => e !== i[t])) return !1;
	const a = e, s = t;
	return n.every((e) => Qc(a[e], s[e]));
}
function eu(e) {
	try {
		const t = JSON.parse(e);
		return (null === t || "object" != typeof t || Array.isArray(t)) && Jc(), t;
	} catch {
		return Jc();
	}
}
function tu(e, t) {
	const n = Object.keys(e).sort(), i = [...t].sort();
	return n.length === i.length && n.every((e, t) => e === i[t]);
}
function nu(e) {
	return "number" == typeof e && Number.isFinite(e);
}
function iu(e) {
	return null === e || "string" == typeof e && e.length > 0;
}
function au(e) {
	return Array.isArray(e) && e.every(nu);
}
function su(e) {
	return Array.isArray(e) && e.every((e) => Number.isInteger(e) && (0 === e || 1 === e));
}
function ru(e, t) {
	return 0 === e.length || e.length === t;
}
function ou(e) {
	Array.isArray(e) || Jc();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && Jc();
		const e = t, n = e.start_ts, i = e.end_ts;
		tu(e, ["start_ts", "end_ts"]) && nu(n) && nu(i) && !(i < n) || Jc();
	}
}
function lu(e, t) {
	Array.isArray(e) && e.length === t || Jc();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && Jc();
		const e = n;
		tu(e, ["onset_time", "offset_time"]) && "string" == typeof e.onset_time && 0 !== e.onset_time.length && iu(e.offset_time) || Jc();
	}
}
function cu(e) {
	Array.isArray(e) || Jc();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && Jc();
		const e = t;
		tu(e, ["start_time", "end_time"]) && "string" == typeof e.start_time && 0 !== e.start_time.length && "string" == typeof e.end_time && 0 !== e.end_time.length || Jc();
	}
}
function uu(e) {
	Array.isArray(e) || Jc();
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && Jc();
		const e = n, i = e.guider, a = e.detector, s = e.onset_ts, r = e.offset_ts;
		(!tu(e, [
			"guider",
			"detector",
			"onset_ts",
			"offset_ts"
		]) || "string" != typeof i || 0 === i.length || t.has(i) || !iu(a) || null !== s && !nu(s) || null !== r && !nu(r) || null === s && null === r) && Jc(), t.set(i, {
			detector: a,
			onset: s,
			offset: r
		});
	}
	return t;
}
function du(e) {
	if (null === e) return null;
	Array.isArray(e) && 2 === e.length || Jc();
	const t = e[0], n = e[1];
	return (!nu(t) || !nu(n) || n <= t) && Jc(), [t, n];
}
function pu(e, t) {
	const n = eu(e), i = void 0 === n.config ? ["days"] : ["config", "days"], a = n.days;
	tu(n, i) && Array.isArray(a) || Jc(), void 0 === n.config || null !== n.config && "object" == typeof n.config && !Array.isArray(n.config) || Jc();
	const s = /* @__PURE__ */ new Set();
	for (const l of a) {
		(null === l || "object" != typeof l || Array.isArray(l)) && Jc();
		const e = l;
		tu(e, Cc) || Jc();
		const t = e.analysis_date, n = e.epoch_length_seconds, i = e.timestamps, a = e.activity_counts, r = e.sleep_scores, c = e.choi_nonwear, u = e.diary_nap_count, d = e.anglez, p = e.light, f = e.temperature, m = e.heart_rate, h = e.detach_nonwear, g = e.is_weekend, y = e.calibration_error, w = e.imputed_fraction;
		!("string" != typeof t || 0 === t.length || s.has(t) || "number" != typeof n || !Number.isInteger(n) || n <= 0) && au(i) && 0 !== i.length && au(a) && a.length === i.length && su(r) && r.length === i.length && su(c) && ru(c, i.length) && Number.isInteger(u) && !(u < 0) && iu(e.diary_onset_time) && iu(e.diary_wake_time) && iu(e.diary_in_bed_time) && iu(e.diary_out_bed_time) && (null === g || "boolean" == typeof g) && au(d) && ru(d, i.length) && au(p) && ru(p, i.length) && au(f) && ru(f, i.length) && au(m) && ru(m, i.length) && su(h) && ru(h, i.length) && (null === y || nu(y)) && (null === w || !(!nu(w) || w < 0 || w > 1)) || Jc(), ou(e.sensor_nonwear), lu(e.diary_naps, u), cu(e.diary_nonwear);
		const _ = uu(e.guider_targets), v = du(e.hdcza_window), b = _.get(o.HDCZA);
		(null === v && void 0 !== b || null !== v && (void 0 === b || null !== b.detector || b.onset !== v[0] || b.offset !== v[1])) && Jc(), s.add(t);
	}
	const r = n;
	return Qc(eu(t), Pc(r)) || Jc(), {
		difficulty: r,
		dates: s
	};
}
function fu(e, t, n, i) {
	tu(t, ["config", "days"]) || Jc(), Qc(t.config, e.difficulty.config ?? null) || Jc();
	const a = t.days;
	Array.isArray(a) && a.length === e.difficulty.days.length || Jc();
	for (let o = 0; o < a.length; o += 1) {
		const t = a[o], n = e.difficulty.days[o];
		(null === t || "object" != typeof t || Array.isArray(t) || null === n || "object" != typeof n || Array.isArray(n)) && Jc();
		const i = t, s = n;
		tu(i, [
			"analysis_date",
			"epoch_length_seconds",
			"timestamps"
		]) && i.analysis_date === s.analysis_date && i.epoch_length_seconds === s.epoch_length_seconds && Qc(i.timestamps, s.timestamps) || Jc();
	}
	const s = Object.keys(n);
	(s.length !== e.dates.size || s.some((t) => !e.dates.has(t))) && Jc();
	const r = new Map(e.difficulty.days.map((e) => [e.analysis_date, e]));
	for (const [o, l] of Object.entries(n)) {
		(null === l || "object" != typeof l || Array.isArray(l)) && Jc();
		const e = l, t = Bc(e.canonicalResult);
		null !== t && t.canonicalResult.analysis_date === o && Qc(e, t) || Jc();
	}
	if (null !== i) {
		const t = Object.keys(i);
		(t.length !== e.dates.size || t.some((t) => !e.dates.has(t))) && Jc();
		for (const [e, n] of Object.entries(i)) {
			(null === n || "object" != typeof n || Array.isArray(n)) && Jc();
			const t = n, i = r.get(e);
			t.analysis_date === e && Number.isInteger(t.epoch_length_seconds) && t.epoch_length_seconds === i?.epoch_length_seconds || Jc();
		}
	}
}
async function mu(e) {
	return Yc(function(e) {
		return {
			evidenceContractId: e.evidenceContractId,
			difficultyMethodId: e.difficultyMethodId,
			signalsMethodId: e.signalsMethodId,
			requestContractId: e.requestContractId,
			sourceContentHash: e.sourceContentHash,
			runtimeIdentity: e.runtimeIdentity,
			difficultyRequestSha256: e.difficultyRequestSha256,
			signalsRequestSha256: e.signalsRequestSha256
		};
	}(e));
}
async function hu(e) {
	try {
		Kc(e.runtimeIdentity), null !== e.sourceContentHash && Uc(e.sourceContentHash);
		const t = Vc(e.runtimeIdentity), n = await Xc(e.difficultyRequestWireJson, e.difficultyRequestSha256), i = await Xc(e.signalsRequestWireJson, e.signalsRequestSha256);
		pu(e.difficultyRequestWireJson, e.signalsRequestWireJson);
		const a = {
			evidenceContractId: "sleep-scoring.complexity-evidence.v1",
			difficultyMethodId: "actours.computeNightDifficulty",
			signalsMethodId: "actours.computeNightSignals",
			requestContractId: "FileDifficultyRequest",
			sourceContentHash: e.sourceContentHash,
			runtimeIdentity: t,
			difficultyRequestWireJson: e.difficultyRequestWireJson,
			signalsRequestWireJson: e.signalsRequestWireJson,
			difficultyRequestSha256: n,
			signalsRequestSha256: i
		};
		return {
			...a,
			generationKey: await mu(a)
		};
	} catch (t) {
		if (t instanceof qc) throw t;
		return Jc();
	}
}
async function gu(e) {
	return Yc(function(e) {
		return {
			generationKey: e.generationKey,
			evidenceContractId: e.evidenceContractId,
			difficultyMethodId: e.difficultyMethodId,
			signalsMethodId: e.signalsMethodId,
			requestContractId: e.requestContractId,
			sourceContentHash: e.sourceContentHash,
			runtimeIdentity: e.runtimeIdentity,
			difficultyRequestSha256: e.difficultyRequestSha256,
			signalsRequestSha256: e.signalsRequestSha256,
			projectionSha256: e.projectionSha256,
			difficultyResultSha256: e.difficultyResultSha256,
			signalsResultSha256: e.signalsResultSha256,
			signalsPresent: null !== e.signalsResultSha256,
			createdAt: e.createdAt,
			updatedAt: e.updatedAt
		};
	}(e));
}
function yu(e, t) {
	void 0 !== t && (null !== t && Uc(t), e !== t && Jc());
}
async function wu(e) {
	(!Number.isInteger(e.fileId) || e.fileId <= 0) && Jc(), void 0 !== e.id && (!Number.isInteger(e.id) || e.id <= 0) && Jc();
	for (const o of [
		e.generationKey,
		e.difficultyRequestSha256,
		e.signalsRequestSha256,
		e.projectionSha256,
		e.difficultyResultSha256,
		e.recordSha256
	]) Uc(o);
	null !== e.signalsResultSha256 && Uc(e.signalsResultSha256), null !== e.sourceContentHash && Uc(e.sourceContentHash), "sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || Jc(), Kc(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || Jc(), await Xc(e.difficultyRequestWireJson, e.difficultyRequestSha256), await Xc(e.signalsRequestWireJson, e.signalsRequestSha256);
	const t = pu(e.difficultyRequestWireJson, e.signalsRequestWireJson);
	Lc(e.createdAt), Lc(e.updatedAt), Date.parse(e.updatedAt) < Date.parse(e.createdAt) && Jc(), null === e.signalsByDate != (null === e.signalsResultSha256) && Jc();
	const n = Vc(e.projectionInput), i = Vc(e.difficultyByDate), a = null === e.signalsByDate ? null : Vc(e.signalsByDate);
	fu(t, n, i, a);
	const s = {
		evidenceContractId: e.evidenceContractId,
		difficultyMethodId: e.difficultyMethodId,
		signalsMethodId: e.signalsMethodId,
		requestContractId: e.requestContractId,
		sourceContentHash: e.sourceContentHash,
		runtimeIdentity: Vc(e.runtimeIdentity),
		difficultyRequestWireJson: e.difficultyRequestWireJson,
		signalsRequestWireJson: e.signalsRequestWireJson,
		difficultyRequestSha256: e.difficultyRequestSha256,
		signalsRequestSha256: e.signalsRequestSha256
	};
	await mu(s) !== e.generationKey && Jc(), await Yc(n) !== e.projectionSha256 && Jc(), await Yc(i) !== e.difficultyResultSha256 && Jc(), null !== a && await Yc(a) !== e.signalsResultSha256 && Jc();
	const r = {
		...void 0 !== e.id ? { id: e.id } : {},
		fileId: e.fileId,
		generationKey: e.generationKey,
		...s,
		projectionSha256: e.projectionSha256,
		difficultyResultSha256: e.difficultyResultSha256,
		signalsResultSha256: e.signalsResultSha256,
		recordSha256: e.recordSha256,
		projectionInput: n,
		difficultyByDate: i,
		signalsByDate: a,
		createdAt: e.createdAt,
		updatedAt: e.updatedAt
	};
	return await gu(r) !== e.recordSha256 && Jc(), r;
}
async function _u(e) {
	try {
		return await wu(e);
	} catch {
		throw new qc(!0);
	}
}
function vu(e, t, n = !1) {
	if (!t) throw new qc(n);
	if (null !== e.sourceContentHash && t.sourceContentHash !== e.sourceContentHash) throw new qc(n);
}
async function bu(e, t, n) {
	await Vt({
		op: "complexity_evidence_put",
		fileId: e.fileId,
		payload: {
			kind: t,
			sourceBound: null !== e.sourceContentHash,
			signalsPresent: null !== e.signalsByDate,
			evictedCount: n
		}
	});
}
async function ku(e, t, n = E()) {
	const [i, a] = await n.transaction("r", [n.files, n.complexityEvidence], async () => Promise.all([n.complexityEvidence.where("[fileId+generationKey]").equals([e, t]).first(), n.files.get(e)]));
	if (!i) return;
	const s = await _u(i);
	return vu(s, a, !0), s;
}
function Su(e, t) {
	const n = [
		...An(e, $u, t),
		...Sn(e, $u),
		...In(e, $u, t)
	];
	e.activity_column || n.push({
		key: "activity_column",
		message: "Map an activity/counts column."
	});
	const i = Boolean(e.datetime_column), a = Boolean(e.date_column && e.time_column);
	return i || a || n.push({
		key: "timestamp",
		message: "Map Date/time, or map both Date and Time."
	}), n;
}
function Iu(e, t) {
	const n = Au(e, t), i = Boolean(e.datetime_column), a = Boolean(e.date_column && e.time_column);
	return i || a || n.push({
		key: "timestamp",
		message: "Map Date/time, or map both Date and Time."
	}), e.mims_unit_column || n.push({
		key: "mims_unit_column",
		message: "Map a MIMS unit column."
	}), n;
}
function Au(e, t) {
	return [
		...An(e, $u, t),
		...Sn(e, $u),
		...In(e, $u, t)
	];
}
const xu = [30, 60];
function Nu(e) {
	return xu.includes(e);
}
const $u = [
	{
		key: "date_column",
		label: "Date",
		aliases: [
			"date",
			"startdate",
			"analysis_date",
			"analysisdate",
			"day"
		],
		required: !1,
		uiGroup: "Time base",
		dataType: "date",
		valueKind: "date_field"
	},
	{
		key: "time_column",
		label: "Time",
		aliases: [
			"time",
			"timestamp_time",
			"clock_time"
		],
		required: !1,
		uiGroup: "Time base",
		dataType: "time",
		valueKind: "temporal_point"
	},
	{
		key: "datetime_column",
		label: "Date/time",
		aliases: [
			"datetime",
			"timestamp",
			"date_time",
			"timestamp_ms"
		],
		required: !1,
		uiGroup: "Time base",
		dataType: "datetime",
		valueKind: "datetime"
	},
	{
		key: "activity_column",
		label: "Activity / Y axis",
		aliases: [
			"activity",
			"axis1",
			"axis_1",
			"axis_y",
			"y",
			"counts",
			"activity_count",
			"pim",
			"tat",
			"zcm"
		],
		required: !0,
		uiGroup: "Activity signal",
		dataType: "float",
		valueKind: "activity_count"
	},
	{
		key: "axis_x_column",
		label: "X axis",
		aliases: [
			"axis2",
			"axis_2",
			"axis_x",
			"x",
			"x_count",
			"x_counts"
		],
		required: !1,
		uiGroup: "Raw axes",
		dataType: "float",
		valueKind: "axis_count"
	},
	{
		key: "axis_z_column",
		label: "Z axis",
		aliases: [
			"axis3",
			"axis_3",
			"axis_z",
			"z",
			"z_count",
			"z_counts"
		],
		required: !1,
		uiGroup: "Raw axes",
		dataType: "float",
		valueKind: "axis_count"
	},
	{
		key: "vector_magnitude_column",
		label: "Vector magnitude",
		aliases: [
			"vector_magnitude",
			"vm",
			"magnitude"
		],
		required: !1,
		uiGroup: "Activity signal",
		dataType: "float",
		valueKind: "vector_magnitude"
	},
	{
		key: "enmo_column",
		label: "ENMO",
		aliases: [
			"enmo",
			"enmo_mg",
			"enmo_milli_g",
			"ENMO"
		],
		required: !1,
		uiGroup: "GGIR / derived metrics",
		dataType: "float",
		valueKind: "acceleration_metric",
		canonicalUnit: "mg",
		acceptedUnits: ["mg", "g"]
	},
	{
		key: "anglez_column",
		label: "Angle Z",
		aliases: [
			"anglez",
			"angle_z",
			"angle_z_degrees",
			"anglez_degrees"
		],
		required: !1,
		uiGroup: "GGIR / derived metrics",
		dataType: "float",
		valueKind: "angle",
		canonicalUnit: "deg",
		acceptedUnits: ["deg", "degrees"]
	},
	{
		key: "ggir_sib_column",
		label: "GGIR SIB / sleep flag",
		aliases: [
			"sib",
			"ggir_sib",
			"hasib",
			"sleep_flag",
			"sleep_wake",
			"sleepwake",
			"sleepsib"
		],
		required: !1,
		uiGroup: "Quality flags",
		dataType: "bool",
		valueKind: "sleep_flag"
	},
	{
		key: "ggir_nonwear_column",
		label: "GGIR nonwear flag",
		aliases: [
			"nonwear",
			"nonwear_flag",
			"invalid",
			"invalid_flag",
			"wear",
			"wear_flag",
			"mask"
		],
		required: !1,
		uiGroup: "Quality flags",
		dataType: "bool",
		valueKind: "nonwear_flag"
	},
	{
		key: "event_marker_column",
		label: "Event marker / button press",
		aliases: [
			"marker",
			"event_marker",
			"eventmarker",
			"event",
			"button",
			"marker_event",
			"event_marker_button"
		],
		required: !1,
		uiGroup: "Quality flags",
		dataType: "bool",
		valueKind: "event_marker"
	},
	{
		key: "mims_unit_column",
		label: "MIMS unit",
		aliases: [
			"mims_unit",
			"mims",
			"mimsunit",
			"mims_units",
			"mims_triaxial"
		],
		required: !1,
		uiGroup: "MIMS metrics",
		dataType: "float",
		valueKind: "mims"
	},
	{
		key: "mims_unit_x_column",
		label: "MIMS X",
		aliases: [
			"mims_unit_x",
			"mims_x",
			"mimsx",
			"mims_axis_x"
		],
		required: !1,
		uiGroup: "MIMS metrics",
		dataType: "float",
		valueKind: "mims_axis"
	},
	{
		key: "mims_unit_y_column",
		label: "MIMS Y",
		aliases: [
			"mims_unit_y",
			"mims_y",
			"mimsy",
			"mims_axis_y"
		],
		required: !1,
		uiGroup: "MIMS metrics",
		dataType: "float",
		valueKind: "mims_axis"
	},
	{
		key: "mims_unit_z_column",
		label: "MIMS Z",
		aliases: [
			"mims_unit_z",
			"mims_z",
			"mimsz",
			"mims_axis_z"
		],
		required: !1,
		uiGroup: "MIMS metrics",
		dataType: "float",
		valueKind: "mims_axis"
	}
];
async function Tu(e, t = b()) {
	return 0 === e.length ? [] : t.consensusDisagreements(e.map(({ usersForDate: e, kind: t }) => function(e, t) {
		const n = [];
		for (const [i, a] of e) "auto_score" !== i && n.push("sleep" === t ? {
			name: i,
			periods: a.sleepMarkers.map((e) => ({
				start: e.onsetTimestamp ?? null,
				end: e.offsetTimestamp ?? null,
				label: e.markerType
			})),
			explicitNone: a.isInvalidNight
		} : {
			name: i,
			periods: a.nonwearMarkers.map((e) => ({
				start: e.startTimestamp ?? null,
				end: e.endTimestamp ?? null,
				label: ""
			})),
			explicitNone: Boolean(a.explicitNoNonwear)
		});
		return n;
	}(e, t)));
}
function zu(e) {
	const t = Je.getState(), n = [Jn(Gt(t, e).nonwearDetectorsCounts, t.showChoiNonwear), Jn(Ot(t.nonwearDetectorsGgir, e), t.showChoiNonwear)];
	return n.filter((e, t) => n.findIndex((t) => ni(t) === ni(e)) === t);
}
function Du(e, t) {
	const n = [];
	let i = null;
	for (let a = 0; a < e.length; a++) 1 === e[a] && null === i ? i = t[a] ?? 0 : 1 !== e[a] && null !== i && (n.push({
		startTimestamp: i,
		endTimestamp: (t[a - 1] ?? i) + 60
	}), i = null);
	return null !== i && n.push({
		startTimestamp: i,
		endTimestamp: (t[e.length - 1] ?? i) + 60
	}), n;
}
function Mu(e, t) {
	return [.../* @__PURE__ */ new Set([...e.availableDates, ...t])].sort();
}
function Ru(e, t) {
	return e ? {
		detectors: [...e.detectors],
		any: Uint8Array.from(e.mask).buffer,
		weight: e.weight ? Float64Array.from(e.weight).buffer : null,
		grid: e.grid === t.timestamps ? "counts" : "ggir"
	} : null;
}
async function Cu(e, { file: t, sets: n, capsense: i, db: a, signal: s }) {
	const r = n.filter((t) => !(ni(t) in (e.displayNonwear ?? {})));
	if (0 === r.length) return;
	const o = q(s), l = await Dn(e, ue, "navigation facts", Xt(), o);
	if (!l) return;
	const c = Wn(t.sourceType, t.sourceProfileId), u = {};
	for (const [m, h] of Object.entries(l.nonwearMasksByDetector)) 0 === h.length || Gn(m) || (u[m] = h);
	const d = {
		algorithmicNonwearMasks: u,
		timestamps: l.timestamps,
		ggirTimestamps: l.ggirTimestamps,
		sensorNonwearPeriods: "detach_nonwear" === c && l.detachNonwear ? Du(l.detachNonwear, l.timestamps) : i,
		deviceNonwearSource: c
	}, p = { ...e.displayNonwear }, f = await Promise.all(r.map((e) => (s?.throwIfAborted(), Ln(d, e, o))));
	for (const [m, h] of r.entries()) p[ni(h)] = Ru(f[m], d);
	await Le(e.fileId, e.date, p, {
		seriesRevision: t.seriesRevision ?? 0,
		nonwearBandGeneration: t.nonwearBandGeneration ?? 0
	}, a, s);
}
const Eu = /* @__PURE__ */ new WeakMap();
function Fu(e, t, n) {
	let i = Eu.get(t);
	i || Eu.set(t, i = /* @__PURE__ */ new Map());
	const a = i.get(e);
	if (a) return F(a, n);
	const s = async function(e, t, n) {
		n?.throwIfAborted();
		const i = await Oe(e, t);
		if (!i || "incomplete" === i.ingestState) return;
		const a = await Ke(e, t);
		let s = i.navigationFacts;
		(function(e, t) {
			const n = e?.navigationFacts;
			if (!e || 1 !== n?.version) return !1;
			const i = Mu(e, t);
			return n.dates.length === i.length && n.dates.every((e, t) => e === i[t]);
		})(i, a) || (s = await async function(e, t, n, i) {
			const a = q(i), s = {}, r = async (e) => {
				i?.throwIfAborted();
				const t = await a.nextDate(e);
				void 0 !== t && (s[e] = t);
			};
			await Promise.all(t.map(r)), await Promise.all(Object.values(s).filter((e) => !(e in s)).map(r));
			const o = {}, l = {};
			await Promise.all(e.availableDates.map(async (e) => {
				i?.throwIfAborted();
				const [t, n] = await Promise.all([a.analysisWindowBounds(e), a.analysisWindowBounds(e, 48)]);
				t && (o[e] = [t[0], t[1]]), n && (l[e] = [n[0], n[1]]);
			}));
			const c = await Un(n), u = await Yn(e, c, i), d = [...new Set([u.zone, u.reason ? c : null].filter((e) => Boolean(e)))], p = {};
			return await _n((t) => {
				for (const n of d) {
					const i = {};
					for (const a of e.availableDates) {
						const e = t.dstTransitionOnNight(n, a);
						e && (i[a] = e);
					}
					p[n] = i;
				}
			}, new kn(a)), {
				version: 1,
				dates: [...t],
				next: s,
				window: o,
				view48: l,
				dst: p,
				dstZone: {
					...u,
					studyZone: c
				}
			};
		}(i, Mu(i, a), t, n), n?.throwIfAborted(), await t.files.update(e, { navigationFacts: s }));
		const r = zu(i), o = r.map(ni), l = i.seriesRevision ?? 0;
		if (s?.bands?.seriesRevision === l && o.every((e) => s.bands.keys.includes(e))) return;
		const c = "gt3x_capsense" === Wn(i.sourceType, i.sourceProfileId) ? (await de(e, t)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : [];
		for (const u of a) {
			n?.throwIfAborted();
			const a = await xe(e, u, t);
			a && await Cu(a, {
				file: i,
				sets: r,
				capsense: c,
				db: t,
				signal: n
			});
		}
		await t.transaction("rw", t.files, async () => {
			const a = await t.files.get(e);
			a?.navigationFacts && (a.seriesRevision ?? 0) === l && (a.nonwearBandGeneration ?? 0) === (i.nonwearBandGeneration ?? 0) && (n?.throwIfAborted(), await t.files.update(e, { navigationFacts: {
				...a.navigationFacts,
				bands: {
					keys: o,
					seriesRevision: l
				}
			} }));
		});
	}(e, t, n).catch((e) => {
		n?.throwIfAborted(), console.warn("[navigation-facts] A file's navigation facts could not be stored.", e);
	}).finally(() => {
		i.delete(e);
	});
	return i.set(e, s), s;
}
function Pu(e, t) {
	for (const n of e) {
		const e = n.epochResolutions?.find((e) => e.category === t && !e.derivedFromResolutionId);
		if (e) return e.epochLengthSeconds;
	}
	return null;
}
function Ou(e, t) {
	const n = "counts" === t ? e.timestamps : e.ggirTimestamps;
	return n ? Math.floor(n.byteLength / Float64Array.BYTES_PER_ELEMENT) : 0;
}
function ju(e) {
	return "number" != typeof e ? String(e) : (/* @__PURE__ */ new Date(1e3 * e)).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: !1,
		timeZone: "UTC"
	});
}
function Bu(e) {
	if ("object" != typeof e || null === e) return String(e).slice(0, 60);
	const t = e;
	return "onsetTimestamp" in t && "offsetTimestamp" in t ? `${ju(t.onsetTimestamp)}–${ju(t.offsetTimestamp)}` : "startTimestamp" in t && "endTimestamp" in t ? `${ju(t.startTimestamp)}–${ju(t.endTimestamp)}` : JSON.stringify(t).slice(0, 60);
}
function Zu(e, t = "(unset)") {
	if (void 0 === e) return t;
	if (null === e) return t;
	const n = "string" == typeof e ? e : JSON.stringify(e);
	return n.length > 48 ? `${n.slice(0, 45)}…` : n;
}
function qu(e) {
	const t = e.rowCount, n = e.dayCount, i = [`${Zu(e.subject, "export")} (${Zu(e.format, "?")})`, Zu(e.filename, "")].filter((e) => "" !== e), a = ["number" == typeof t ? `${t} rows` : null, "number" == typeof n ? `${n} day${1 === n ? "" : "s"}` : null].filter((e) => null !== e);
	return a.length > 0 ? `${i.join(" · ")} — ${a.join(", ")}` : i.join(" · ");
}
function Gu(e, t, n, i) {
	const a = n?.exportId;
	return "export_started" === t && "string" == typeof a && i.has(a) ? "" === e ? "outcome unknown" : `${e} · outcome unknown` : e;
}
function Hu(e, t) {
	const n = O({
		action: t ?? "",
		payload: e
	}), i = n.payload ?? e;
	switch (void 0 === t ? void 0 : n.action) {
		case "session_start": {
			const e = Array.isArray(i.sleepMarkers) ? i.sleepMarkers : [], t = Array.isArray(i.nonwearMarkers) ? i.nonwearMarkers : [];
			let n = `Loaded ${e.length} sleep, ${t.length} nonwear`;
			return i.isInvalidNight && (n += " | Invalid Night"), i.needsConsensus && (n += " | Flagged"), n;
		}
		case "session_end": return "Session ended";
		case "marker_placed": {
			const e = i.category ?? "sleep", t = i.periodIndex ?? "?", n = i.markerType ? ` (${i.markerType})` : "";
			return "onsetTimestamp" in i ? `${e} #${t}${n}: ${ju(i.onsetTimestamp)}–${ju(i.offsetTimestamp)}` : "startTimestamp" in i ? `${e} #${t}: ${ju(i.startTimestamp)}–${ju(i.endTimestamp)}` : `${e} #${t}${n}`;
		}
		case "sleep_period_split": return `sleep #${i.periodIndex ?? "?"} split at ${ju(i.at)}`;
		case "sleep_period_merged": return `sleep #${i.periodIndex ?? "?"} merged ${i.direction ?? "?"}`;
		case "marker_adjusted": {
			const e = i.updates ?? {}, t = i.category ?? "?", n = i.periodIndex ?? "?", a = [];
			return void 0 !== e.onsetTimestamp && a.push(`onset → ${ju(e.onsetTimestamp)}`), void 0 !== e.offsetTimestamp && a.push(`offset → ${ju(e.offsetTimestamp)}`), void 0 !== e.startTimestamp && a.push(`start → ${ju(e.startTimestamp)}`), void 0 !== e.endTimestamp && a.push(`end → ${ju(e.endTimestamp)}`), void 0 !== e.markerType && a.push(`type → ${e.markerType}`), `${t} #${n}: ${a.join(", ")}`;
		}
		case "marker_moved": {
			const e = i.before, t = i.after;
			if (!e || !t) return "drag completed";
			const n = Array.isArray(e.sleepMarkers) ? e.sleepMarkers : [], a = Array.isArray(t.sleepMarkers) ? t.sleepMarkers : [];
			for (let i = 0; i < Math.max(n.length, a.length); i++) {
				const e = n[i], t = a[i];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `sleep #${i}: ${Bu(e)} ⇒ ${Bu(t)}`;
			}
			const s = Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : [], r = Array.isArray(t.nonwearMarkers) ? t.nonwearMarkers : [];
			for (let i = 0; i < Math.max(s.length, r.length); i++) {
				const e = s[i], t = r[i];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `nonwear #${i}: ${Bu(e)} ⇒ ${Bu(t)}`;
			}
			return "drag completed (no visible change)";
		}
		case "marker_deleted": {
			const e = i.category ?? "?", t = i.periodIndex ?? "?", n = i.before;
			return n ? `${e} #${t}: was ${Bu(n)}` : `${e} #${t}`;
		}
		case "actiware_rest_edited": {
			const e = "string" == typeof i.edit ? i.edit : "?";
			return "add" === e ? `rest added: ${Bu(i.to)}` : "remove" === e ? `rest removed: was ${Bu(i.from)}` : `rest ${"move" === e ? "moved" : e}: ${Bu(i.from)} ⇒ ${Bu(i.to)}`;
		}
		case "markers_cleared": return `Cleared ${i.sleepCount ?? 0} sleep, ${i.nonwearCount ?? 0} nonwear`;
		case "undo":
		case "redo": {
			const e = i.sleepCount, t = i.nonwearCount;
			return "number" != typeof e && "number" != typeof t ? "" : `Restored: ${"number" == typeof e ? e : 0} sleep, ${"number" == typeof t ? t : 0} nonwear`;
		}
		case "auto_score_applied": return `${i.algorithm}: ${i.sleepCount ?? 0} sleep, ${i.napCount ?? 0} nap`;
		case "auto_nonwear_applied": {
			const e = Array.isArray(i.weights) ? i.weights.filter((e) => "string" == typeof e) : [], t = `${i.count ?? 0} nonwear periods detected`;
			return 0 === e.length ? t : `${t}: ${e.join("; ")}`;
		}
		case "markers_saved": {
			let e = `${i.sleepCount ?? 0} sleep, ${i.nonwearCount ?? 0} nonwear`;
			return i.notes && (e += ` | "${String(i.notes).slice(0, 50)}"`), i.isInvalidNight && (e += " | Invalid Night"), e;
		}
		case "invalid_night_toggled": {
			const e = i.value ? "Enabled" : "Disabled", t = i.clearedSleepMarkers, n = Array.isArray(t) ? t.length : 0;
			return 0 === n ? e : `${e} — cleared ${n} sleep marker${1 === n ? "" : "s"}`;
		}
		case "no_nonwear_toggled": return i.value ? "Confirmed no nonwear" : "No-nonwear cleared";
		case "consensus_toggled": return i.value ? "Flagged for consensus" : "Unflagged";
		case "candidate_copied": {
			const e = i.label ?? i.sourceUsername ?? "unknown", t = "nonwear" === i.kind ? `${i.nonwearCount ?? "?"} nonwear` : `${i.sleepCount ?? "?"} sleep`;
			return `From ${String(e)} (${t})`;
		}
		case "consensus_vote_cast": return null == i.candidateId ? "Vote withdrawn" : `Voted for candidate #${i.candidateId}`;
		case "consensus_resolved": {
			const e = i.kind;
			return "string" == typeof e && "" !== e ? `${e} consensus resolved` : "Consensus resolved";
		}
		case "transition_flagged": {
			const e = Zu(i.intent, "mutation"), t = Zu(i.guard, "?"), n = i.disposition, a = "refused_by_store" === n ? "refused" : "applied_with_violation" === n ? "applied anyway" : Zu(n, "");
			return "" === a ? `${e} flagged: ${t}` : `${e} flagged: ${t} — ${a}`;
		}
		case "file_uploaded":
		case "file_processed":
		case "file_reprocessed":
		case "file_deleted": {
			const e = i.filename ?? "?", t = i.dateCount;
			return null == t ? String(e) : `${String(e)} (${String(t)} days)`;
		}
		case "notes_changed":
			if (void 0 !== i.after) {
				const e = Zu(i.before, ""), t = Zu(i.after, "");
				return "" === e ? `"${t}"` : `"${e}" → "${t}"`;
			}
			return i.text ? `"${String(i.text).slice(0, 60)}"` : i.notes ? `"${String(i.notes).slice(0, 60)}"` : `${i.length ?? "?"} chars`;
		case "settings_changed": return `${Zu(i.scope, "?")} · ${Zu(i.key, "?")}: ${Zu(i.before)} → ${Zu(i.after)}`;
		case "settings_reset": {
			const e = i.changed, t = Zu(i.scope, "settings");
			if (!Array.isArray(e)) return `${t} reset to defaults`;
			if (0 === e.length) return `${t}: already at defaults`;
			const n = e.slice(0, 4).map((e) => Zu(e, "?")).join(", "), a = e.length > 4 ? ", …" : "";
			return `${t}: ${String(e.length)} reset to default (${n}${a})`;
		}
		case "app_version_changed": return `${Zu(i.before, "(first run)")} → ${Zu(i.after, "?")}`;
		case "system_migration": return `${Zu(i.subject, "schema")}: ${Zu(i.before, "?")} → ${Zu(i.after, "?")}`;
		case "data_exported": return qu(i);
		case "export_started": return `Started: ${qu(i)}`;
		case "export_cancelled": return `${Zu(i.filename, "export")} — ${Zu(i.reason, "cancelled")}`;
		case "preset_changed": {
			const e = Zu(i.family, "preset"), t = Zu(i.change, "changed"), n = Zu(i.preset, "?"), a = i.before;
			return null == a ? `${e}: ${t} ${n}` : `${e}: ${t} ${n} (was ${Zu(a)})`;
		}
		case "markers_synced": {
			const e = i.conflicts, t = i.errorCount;
			let n = `Pushed ${i.pushed ?? 0}, pulled ${i.pulled ?? 0}`;
			return "number" == typeof e && e > 0 && (n += `, ${e} conflict${1 === e ? "" : "s"}`), "number" == typeof t && t > 0 && (n += `, ${t} error${1 === t ? "" : "s"}`), n;
		}
		case "system_recalculation": return `Recalculated ${Zu(i.subject, "derived data")}`;
		case "diary_staged": return `Staged ${i.staged ?? 0}, replaced ${i.replaced ?? 0}, skipped ${i.skipped ?? 0}`;
		case "diary_decision_recorded": return `Decided ${Zu(i.ruleKind, "a rule")} → ${Zu(i.outcome, "(no outcome)")} (${Zu(i.scope, "unscoped")}, ${i.nights ?? 0} nights)`;
		case "diary_decision_state_saved": return `Saved decision state "${Zu(i.restorePoint, "untitled")}" (${i.decisions ?? 0} decisions)`;
		case "diary_session_saved": {
			const e = Zu(i.status, "saved"), t = Zu(i.step, "an unknown step"), n = Zu(i.sourceSha256Prefix, "an unnamed source");
			return "removed" === e ? `Removed the saved diary session for ${n}` : `Diary session ${n} saved as ${e} on ${t}`;
		}
		case "diary_decision_state_restored": return `Restored decision state "${Zu(i.restorePoint, "untitled")}" (${i.reflagged ?? 0} reflagged, ${i.unflagged ?? 0} unflagged, ${i.nights ?? 0} nights)`;
		case "diary_decisions_reset": return `Reset ${i.decisions ?? 0} diary decisions across ${i.nights ?? 0} nights`;
		case "diary_attached": {
			const e = i.entryCount, t = i.matchBasis, n = ["number" == typeof e ? `${e} night${1 === e ? "" : "s"}` : null, "string" == typeof t && "" !== t ? `matched by ${t}` : null].filter((e) => null !== e).join(", ");
			return "" === n ? "Attached diary" : `Attached diary (${n})`;
		}
		case "diary_discarded": {
			const e = i.analysisDate;
			return null == e ? `Discarded ${Zu(i.sourceKey, "diary")}` : `Discarded ${Zu(i.sourceKey, "diary")} for ${Zu(e, "?")}`;
		}
		case "diary_workspace_cleared": {
			const e = (e, t) => {
				const n = Number(i[e] ?? 0);
				return `${String(n)} ${t}${1 === n ? "" : "s"}`;
			};
			return `Cleared workspace diary (${e("staged", "staged night")}, ${e("occurrences", "response")})`;
		}
		case "diary_repaired": {
			const e = i.fields, t = Array.isArray(e) ? e.map((e) => Zu(e, "?")).join(", ") : "";
			return "" === t ? `Repaired ${i.applied ?? 0} field${1 === i.applied ? "" : "s"}` : `Repaired ${i.applied ?? 0}: ${t}`;
		}
		case "diary_changed": {
			const e = i.fields, t = Zu(i.change, "changed"), n = Array.isArray(e) ? e.map((e) => Zu(e, "?")).join(", ") : "";
			return "" === n ? `Diary ${t}` : `Diary ${t}: ${n}`;
		}
		case "workspace_deleted": {
			const e = i.auditRowsDestroyed;
			return `${Zu(i.displayName, "workspace")} deleted — ${i.auditRowsTotal ?? 0} audit rows, ${i.auditRowsReplicated ?? 0} replicated, ${e ?? 0} destroyed`;
		}
		case "audit_chain_reanchored": return `Restored ${i.restoredRows ?? 0} rows (restore ${String(i.restoreId ?? "?").slice(0, 8)})`;
		case "workspace_recovered": return `Recovered from backup ${Zu(i.backupSha256, "?").slice(0, 8)} — ${Zu(i.applied, "0")} changes put back, ${Zu(i.skipped, "0")} skipped, ${Zu(i.recordingsToReimport, "0")} recordings to import again`;
		case "access_changed": return `${Zu(i.subject, "access")} · ${Zu(i.scope, "?")}: ${Zu(i.before)} → ${Zu(i.after)}`;
		case "assignment_changed": {
			const e = i.fileCount, t = i.fileIds, n = "number" == typeof e ? e : Array.isArray(t) ? t.length : 0;
			return `${Zu(i.change, "changed")} ${Zu(i.subject, "assignment")} · ${Zu(i.scope, "?")} (${n} file${1 === n ? "" : "s"})`;
		}
	}
	return Object.entries(i).slice(0, 5).map(([e, t]) => "number" == typeof t && e.toLowerCase().includes("timestamp") ? `${e}: ${ju(t)}` : "string" == typeof t && t.length > 50 ? `${e}: "${t.slice(0, 47)}..."` : Array.isArray(t) ? `${e}: [${t.length} items]` : "object" == typeof t && null !== t ? `${e}: {…}` : `${e}: ${JSON.stringify(t)}`).join(", ");
}
var Ju = i({
	GGIR_NIGHT_DIFFICULTY_NOT_RANKABLE: () => Sd,
	LocalDataSource: () => Cd,
	backfillPlacementResults: () => Pd,
	refreshStoredFilePlacement: () => Ed,
	refreshStoredFilePlacements: () => Fd,
	refreshStoredNightDifficulty: () => Nd,
	storePhysicalActivityFileAnswers: () => $d
});
function Uu(e) {
	return JSON.stringify(e.map((e) => ({
		start_timestamp: e.startTimestamp,
		end_timestamp: e.endTimestamp,
		marker_index: e.markerIndex
	})));
}
function Lu(e, t) {
	const n = (a = t, "mims_metrics" === (i = e ?? "generic") ? Iu(a, s) : "ggir_part5_daysummary" === i ? function(e, t) {
		const n = Au(e, t);
		return e.date_column || e.datetime_column || n.push({
			key: "date_column",
			message: "Map a date/day column for the daily summary table."
		}), n;
	}(a, s) : Su(a, s));
	var i, a, s;
	if (0 !== n.length) throw new Error(function(e) {
		return `Column-mapped CSV settings are incomplete: ${e.map((e) => e.message).join(" ")} ${gi}`;
	}(n));
}
function Wu(e) {
	const t = /* @__PURE__ */ new Map();
	for (const i of e) "auto_score" !== i.username || i.algorithm !== a.VAN_HEES_2015 || i.isInvalidNight || t.set(i.date, Ye(t.get(i.date), i));
	const n = /* @__PURE__ */ new Map();
	for (const [i, a] of t) {
		const e = a.sleepMarkers.filter((e) => e.markerType === m.MAIN_SLEEP);
		if (1 !== e.length) continue;
		const t = e[0], s = t?.onsetTimestamp, r = t?.offsetTimestamp;
		"number" == typeof s && Number.isFinite(s) && "number" == typeof r && Number.isFinite(r) && r > s && n.set(i, [s, r]);
	}
	return n;
}
async function Vu(e, t) {
	const n = t.dailyGgirSummaries;
	if (!n) return /* @__PURE__ */ new Map();
	const i = await n.where("fileId").equals(e).toArray();
	return new Map(i.map((e) => [e.analysisDate, e]));
}
function Yu(e) {
	return {
		id: e.id ?? 0,
		file_id: e.fileId,
		analysis_date: e.analysisDate,
		total_sleep_time_minutes: e.totalSleepTimeMinutes,
		waso_minutes: e.wasoMinutes,
		sleep_efficiency: e.sleepEfficiency,
		mvpa_minutes: e.mvpaMinutes,
		lpa_minutes: e.lpaMinutes,
		sedentary_minutes: e.sedentaryMinutes,
		l5_midpoint_hour: e.l5MidpointHour,
		m5_midpoint_hour: e.m5MidpointHour,
		intensity_gradient: e.intensityGradient,
		nonwear_minutes: e.nonwearMinutes,
		valid_hours: e.validHours,
		created_at: e.createdAt,
		updated_at: e.updatedAt
	};
}
function Ku(e, t, n, i) {
	const a = t?.days.find((e) => e.analysis_date === n), s = e?.[n];
	if (!a || !s || !i) return [];
	const r = a.timestamps, o = a.epoch_length_seconds;
	if (0 === r.length || !Number.isFinite(o) || o <= 0) return [];
	const l = [];
	for (const [c, u, d] of [[
		"onset_candidates",
		"onset_candidate",
		"Onset candidate"
	], [
		"offset_candidates",
		"offset_candidate",
		"Offset candidate"
	]]) {
		const e = s[c];
		Array.isArray(e) && e.forEach((e, t) => {
			if (null == e || "object" != typeof e || Array.isArray(e)) return;
			const n = e, a = n.run_start_epoch, s = n.run_end_epoch;
			if (!Number.isInteger(a) || !Number.isInteger(s) || a < 0 || s < a || s >= r.length) return;
			const c = r[a], p = r[s];
			if (null == c || null == p || !Number.isFinite(c) || !Number.isFinite(p)) return;
			const f = p + o;
			if (f <= c) return;
			const m = "string" == typeof n.generation_execution_id ? n.generation_execution_id : null, h = `${u}:${String(a)}:${String(s)}:${String(t)}`;
			l.push({
				id: h,
				kind: u,
				start_timestamp: c,
				end_timestamp: f,
				source_start_epoch: a,
				source_end_epoch: s,
				source_index: t,
				label: `${d} ${String(t + 1)}`,
				evidence_id: `${m ?? i}#${h}`,
				projection_revision: i
			});
		});
	}
	return l;
}
const Xu = "wasm-parallel";
function Qu(e) {
	const t = e.compiledFeatures;
	return {
		...e,
		compiledFeatures: t.includes(Xu) ? t.filter((e) => e !== Xu) : [...t, Xu]
	};
}
function ed(e, t) {
	const n = e.compiledFeatures.filter((e) => e !== Xu), i = t.compiledFeatures.filter((e) => e !== Xu);
	return e.contractVersion === t.contractVersion && e.crateVersion === t.crateVersion && e.sourceRevision === t.sourceRevision && e.target === t.target && e.semanticProfile === t.semanticProfile && e.profileProofStatus === t.profileProofStatus && e.temporalBasis === t.temporalBasis && e.artifactSha256 === t.artifactSha256 && n.length === i.length && n.every((e, t) => e === i[t]);
}
async function td(e, t, n, i, a = /* @__PURE__ */ new Map()) {
	const s = [];
	for (const l of [t, await $n(t, void 0, i)]) {
		const r = e.get(l);
		if (!r) continue;
		let o = a.get(l);
		o || a.set(l, o = Dn(r, n, `listDatesStatus ${l}`, Xt(), i));
		const c = await o;
		if (!c) return null;
		s.push({
			unpacked: c,
			epochs: await Hn(c.timestamps, t, i),
			ggir: await Hn(c.ggirTimestamps, t, i)
		});
	}
	for (const l of a.keys()) l < t && a.delete(l);
	const r = (e, t) => {
		const n = [];
		for (const i of s) {
			const { startIndex: a, endIndex: s } = i[t];
			if (s <= a) continue;
			const r = e(i.unpacked), o = "epochs" === t ? i.unpacked.timestamps.length : i.unpacked.ggirTimestamps.length;
			if (null == r || r.length !== o) return null;
			for (let e = a; e < s; e += 1) n.push(r[e]);
		}
		return n;
	}, o = r((e) => e.timestamps, "epochs") ?? [];
	return 0 === o.length ? null : {
		timestamps: o,
		axisY: r((e) => e.axisY, "epochs"),
		sleepScores: r((e) => e.sleepScores, "epochs"),
		nonwearResults: r((e) => e.nonwearResults, "epochs"),
		temperature: r((e) => e.temperature, "epochs"),
		detachNonwear: r((e) => e.detachNonwear, "epochs"),
		ggirTimestamps: r((e) => e.ggirTimestamps, "ggir") ?? [],
		ggirAnglez: r((e) => e.ggirAnglez, "ggir") ?? []
	};
}
function nd(e, t) {
	const n = new Set(t.map((e) => e.analysis_date)), i = Object.keys(e);
	return n.size === t.length && i.length === n.size && i.every((e) => n.has(e));
}
function id(e) {
	const t = [...e.entries()].sort(([e], [t]) => e.localeCompare(t));
	let n = null, i = null;
	for (const [, r] of t) try {
		const e = Ae(r).timestamps;
		if (0 === e.length) continue;
		const t = e[0];
		if (null != t && Number.isFinite(t)) {
			n = t;
			break;
		}
	} catch {}
	for (let r = t.length - 1; r >= 0; r -= 1) {
		const e = t[r]?.[1];
		if (e) try {
			const t = Ae(e).timestamps;
			if (0 === t.length) continue;
			const n = t[t.length - 1];
			if (null != n && Number.isFinite(n)) {
				i = n;
				break;
			}
		} catch {}
	}
	if (null == n || null == i || i < n) return null;
	const a = 1e3 * n, s = 1e3 * i;
	return Number.isFinite(a) && Number.isFinite(s) ? {
		start: a,
		end: s
	} : null;
}
async function ad(e, t, n, i, a, s, r) {
	const o = [], l = [];
	for (const c of new Set(t)) {
		let t = null;
		for (const o of e) if (o && 0 !== Ae(o).timestamps.length && (await ya(o, c, n, a, void 0, s, r), t = mn(c, nn(o, n), i), null !== t)) break;
		null === t ? o.push(c) : l.push({
			detector: c,
			reason: t
		});
	}
	return {
		available: o,
		dropped: l
	};
}
function sd({ available: e, dropped: t }) {
	return 0 === e.length && t.length > 0 ? t.map((e) => e.reason).join("; ") : null;
}
function rd(e) {
	if (!e) return {
		choiNonwear: null,
		nonwearWeight: null,
		nonwearMemberFlags: null,
		nonwearDetectors: []
	};
	const t = e.available.length > 1;
	return {
		choiNonwear: e.flagged,
		nonwearWeight: t ? e.weight : null,
		nonwearMemberFlags: t ? e.memberFlags : null,
		nonwearDetectors: e.available
	};
}
function od(e) {
	return 1 === e.length && fn(e[0]);
}
function ld(e, t, n) {
	const i = e?.byDate[t];
	return i ? "refused" === i.kind ? i.reason : null : function(e) {
		const t = e?.sleepPeriodDetectionConfig?.nonwear_detector_unavailable;
		return "string" == typeof t ? t : null;
	}(n);
}
async function cd(e, t) {
	if (!("placementResults" in e)) return;
	const n = await e.placementResults.get(t);
	return 2 === n?.policy ? n : void 0;
}
function ud(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let i = 0; i < t; i += 1) {
		const t = e[i];
		if (null == t || !Number.isFinite(t)) return [];
		n[i] = t;
	}
	return n;
}
function dd(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let i = 0; i < t; i += 1) {
		const t = e[i];
		if (0 !== t && 1 !== t) return [];
		n[i] = t;
	}
	return n;
}
function pd(e, t, n) {
	if (t.length !== e.length || n.length !== e.length) return [];
	const i = new Array(e.length);
	for (let a = 0; a < e.length; a += 1) {
		const s = t[a], r = e[a], o = n[a];
		if (null == s || null == r || s !== r || null == o || !Number.isFinite(o)) return [];
		i[a] = o;
	}
	return i;
}
function fd(e, t, n, i, a, s) {
	const r = [], l = null == t ? null : s.resolveInstant(t, e, A.evening_onset, a), c = null == n ? null : s.resolveInstant(n, e, A.morning_offset, a);
	return null == l && null == c || r.push({
		guider: o.DIARY,
		detector: null,
		onset_ts: l,
		offset_ts: c
	}), null != i && r.push({
		guider: o.HDCZA,
		detector: null,
		onset_ts: i[0],
		offset_ts: i[1]
	}), r;
}
function md(e) {
	return `complexity-evidence:${e.generationKey}`;
}
function hd(e) {
	return {
		generationKey: e.generationKey,
		evidenceContractId: e.evidenceContractId,
		sourceContentHash: e.sourceContentHash,
		difficultyRequestSha256: e.difficultyRequestSha256,
		signalsRequestSha256: e.signalsRequestSha256,
		projectionSha256: e.projectionSha256,
		difficultyResultSha256: e.difficultyResultSha256,
		signalsResultSha256: e.signalsResultSha256,
		recordSha256: e.recordSha256
	};
}
function gd(e) {
	return e.projectionInput;
}
function yd(e) {
	return e.difficultyByDate;
}
function wd(e) {
	return e.signalsByDate;
}
function _d(e, t, n, i) {
	return {
		has_markers: c(e),
		has_nonwear: f(e),
		is_invalid_night: e?.isInvalidNight ?? !1,
		needs_consensus: e?.needsConsensus ?? !1,
		auto_flagged: t,
		has_auto_score: (n?.sleepMarkers?.length ?? 0) > 0 || !0 === n?.isInvalidNight,
		auto_score_unavailable_reason: i
	};
}
async function vd(e, t, n, i) {
	const [a, s] = await Promise.all([i.markers.where("[fileId+date+username]").between([
		e,
		t,
		""
	], [
		e,
		t,
		"￿"
	], !0, !0).toArray(), cd(i, e)]), r = /* @__PURE__ */ new Map();
	for (const c of a) r.set(c.username, Ye(r.get(c.username), c));
	const o = r.size >= 2 && (await Tu([{
		usersForDate: r,
		kind: "sleep"
	}, {
		usersForDate: r,
		kind: "nonwear"
	}])).some((e) => e.disagree), l = r.get(ot);
	return _d(r.get(n), o, l, ld(s, t, l));
}
function bd(e) {
	return JSON.stringify((e ?? []).map((e) => [e.startTimestamp ?? null, e.endTimestamp ?? null]));
}
function kd(e) {
	const t = e ? null : Je.getState(), n = e?.nightStartHour ?? t?.nightStartHour ?? s.night_start_hour, i = e?.nightEndHour ?? t?.nightEndHour ?? s.night_end_hour, a = parseInt(n.split(":")[0] ?? "21", 10), r = parseInt(i.split(":")[0] ?? "9", 10);
	return {
		nightStartHour: Number.isNaN(a) ? 21 : a,
		nightEndHour: Number.isNaN(r) ? 9 : r
	};
}
const Sd = "GGIR nights are not ranked by difficulty: the difficulty core reads 60 s activity counts and sleep scores, and a GGIR folder holds 5 s ENMO, anglez and SIB only.", Id = /* @__PURE__ */ new Set(), Ad = /* @__PURE__ */ new WeakMap();
function xd(e, t, n, i) {
	const a = Ad.get(e) ?? /* @__PURE__ */ new Map();
	Ad.set(e, a);
	const s = a.get(t);
	if (s) {
		let r;
		return {
			run: s.run.catch((o) => {
				if (!s.signal?.aborted || n?.aborted) throw o;
				return a.get(t) === s && a.delete(t), r = xd(e, t, n, i), r.run;
			}),
			release: () => r?.release()
		};
	}
	const r = {
		run: i(),
		signal: n
	};
	return a.set(t, r), {
		run: r.run,
		release: () => {
			a.get(t) === r && a.delete(t);
		}
	};
}
function Nd(e, t, n, i) {
	return G({
		kind: R.NIGHT_DIFFICULTY,
		key: `${R.NIGHT_DIFFICULTY}:${String(e)}`,
		label: "Update night difficulty",
		workspaceId: t.name,
		signal: i,
		rerun: !0,
		run: async (i) => {
			const a = new Cd();
			try {
				if (i.signal.throwIfAborted(), i.progress(0, 2), E() !== t) return;
				const s = await Oe(e, t);
				if (!s || "incomplete" === s.ingestState) return;
				await Fu(e, t, i.signal), i.signal.throwIfAborted(), i.progress(1, 2);
				const r = s.nightDifficulty, o = n ?? (r ? {
					nightStartHour: `${String(r.nightStartHour).padStart(2, "0")}:00`,
					nightEndHour: `${String(r.nightEndHour).padStart(2, "0")}:00`
				} : void 0);
				await a.computeDatesStatus(e, s.availableDates, Je.getState().username || "anonymous", o, i.signal), i.progress(2, 2);
			} finally {
				a.dispose();
			}
		}
	}).catch((e) => {
		e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] Stored night difficulty could not be refreshed.", e);
	});
}
function $d(e, t, n) {
	return G({
		kind: R.PHYSICAL_ACTIVITY,
		key: `${R.PHYSICAL_ACTIVITY}:${String(e)}`,
		label: "Store activity answers",
		workspaceId: t.name,
		signal: n,
		rerun: !0,
		run: (n) => qe(async (i) => {
			const [{ computeLocalPhysicalActivityAnalysis: a, physicalActivityStoreAnalysisOptions: s }, { createPhysicalActivityWorkspaceRepository: r, loadPhysicalActivityWorkspaceDays: o }] = await Promise.all([import("./local-physical-activity-analysis-Bb6vGtH7.js"), import("./physical-activity-workspace-days-39SQYJbD.js")]);
			if (n.signal.throwIfAborted(), n.progress(0, 2), E() !== t) return;
			const l = s(Je.getState());
			await a({
				...l,
				dbOverride: t,
				activityDayMemo: i,
				onlyFileIds: [e],
				signal: n.signal
			}), n.signal.throwIfAborted(), n.progress(1, 2), await o({
				username: l.username,
				maskPolicy: l.maskPolicy,
				repository: r(t, i),
				onlyFileIds: [e],
				signal: n.signal
			}), n.progress(2, 2);
		})
	}).catch((e) => {
		e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] A file's physical-activity answers could not be stored; the Activity tab computes them.", e);
	});
}
ct((e, t, n) => {
	Nd(e, t, void 0, n);
});
const Td = /* @__PURE__ */ new WeakMap();
function zd(e, t, n, i, a) {
	a?.throwIfAborted();
	let s = Td.get(e);
	return s || (s = /* @__PURE__ */ new Map(), Td.set(e, s)), s.set(t, {
		inputs: n,
		byDate: i
	}), i;
}
const Dd = /* @__PURE__ */ new WeakMap();
function Md(e, t) {
	let n = Dd.get(e);
	n || Dd.set(e, n = /* @__PURE__ */ new Map());
	const i = He(t);
	let a = n.get(i);
	return a || n.set(i, a = ce(e.values(), t)), a;
}
function Rd(e) {
	return {
		sleepMarkers: e.sleepMarkers,
		nonwearMarkers: e.nonwearMarkers,
		manualNonwearVerdictPending: void 0 === e.manualNonwearInSleep,
		...void 0 !== e.manualNonwearInSleep ? { manualNonwearInSleep: e.manualNonwearInSleep } : {},
		isInvalidNight: e.isInvalidNight,
		...!0 === e.isInvalidNightImplicit ? { isInvalidNightImplicit: !0 } : {},
		explicitNoNonwear: e.explicitNoNonwear ?? !1,
		notes: e.notes,
		needsConsensus: e.needsConsensus ?? !1,
		sleepPeriodDetectionConfig: e.sleepPeriodDetectionConfig ?? null,
		contentHash: e.contentHash,
		storedAlgorithm: e.algorithm,
		storedDetectionRule: e.detectionRule ?? null
	};
}
var Cd = class t {
	sourceKey = "local";
	nightRecordData = Fi;
	sourceAnalyses;
	services;
	disposed = !1;
	operationProcessingOptions;
	constructor(e, { sourceAnalyses: t = Pi, services: n = ji } = {}) {
		this.operationProcessingOptions = e, this.sourceAnalyses = t, this.services = n;
	}
	fileBatches = /* @__PURE__ */ new Map();
	beginFileBatch(e, t = E(), n) {
		let i = this.fileBatches.get(e);
		i && i.db === t || (i = {
			db: t,
			signal: n,
			depth: 0,
			savedNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map()
		}, this.fileBatches.set(e, i));
		const a = i;
		a.depth += 1;
		let s = !1;
		return { end: async () => {
			s || (s = !0, a.depth -= 1, a.depth > 0 || (this.fileBatches.get(e) === a && this.fileBatches.delete(e), 0 === a.savedNights.size || a.signal?.aborted || await this.sourceAnalyses.reduce(async (t, n) => {
				await t;
				const i = a.savedNights.get(n.id);
				i && await n.followDeferredNights?.({
					fileId: e,
					nights: i,
					analysisParadigm: Je.getState().analysisParadigm,
					db: a.db,
					signal: a.signal
				});
			}, Promise.resolve())));
		} };
	}
	reanalyze(e, t, n) {
		return this.sourceAnalyses.find((e) => e.reanalyze)?.reanalyze?.(e, t, {
			...n,
			services: this.services
		}) ?? null;
	}
	fileBatch(e, t) {
		const n = this.fileBatches.get(e);
		return n?.db === t ? n : null;
	}
	placementDiaries(e, t, n = this.fileBatch(e, t)) {
		return n?.days ? n.diaries ??= We(e, t) : We(e, t);
	}
	async placementDiary(e, t, n, i = this.fileBatch(e, n)) {
		return i?.days ? (await this.placementDiaries(e, n, i)).find((e) => e.analysisDate === t) ?? null : De(e, t, n);
	}
	async placementMarker(e, t, n, i, a = this.fileBatch(e, i)) {
		if (!a?.days) return at(e, t, ot, n, void 0, i);
		const s = await (a.markers ??= i.markers.where("fileId").equals(e).toArray()), r = rt(s, {
			date: t,
			username: ot
		}, n);
		return r ? lt(r) : void 0;
	}
	async placementDay(e, t, n, i = this.fileBatch(e, n)) {
		return i?.days ? i.days.get(t) : xe(e, t, n, i?.activityDayMemo);
	}
	async scorerVerdict(e, t, n, i, a = this.fileBatch(t, e)) {
		return a?.days ? Md(a.days, n) : a?.activityDayMemo ? Md(await Qe(t, e, a.activityDayMemo), n) : (await Fe(t, e, i))(n);
	}
	complexitySnapshotByFile = /* @__PURE__ */ new Map();
	complexityGenerationByFile = /* @__PURE__ */ new Map();
	complexitySignalGenerationByFile = /* @__PURE__ */ new Map();
	complexityFailureByFile = /* @__PURE__ */ new Map();
	latestComplexityTokenByFile = /* @__PURE__ */ new Map();
	nextComplexityGenerationToken = 0;
	publishComplexitySnapshot(e, t, n) {
		for (n?.throwIfAborted(), this.complexitySnapshotByFile.delete(e), this.complexitySnapshotByFile.set(e, t); this.complexitySnapshotByFile.size > 2;) {
			const e = this.complexitySnapshotByFile.keys().next().value;
			if (null == e) break;
			this.complexitySnapshotByFile.delete(e), this.complexitySignalGenerationByFile.delete(e);
		}
	}
	async awaitNewerComplexitySnapshot(e, t) {
		const n = this.latestComplexityTokenByFile.get(e);
		if (this.disposed || null == n || n === t) throw new Error("The local workspace changed while difficulty was being computed.");
		const i = this.complexityGenerationByFile.get(e);
		if (i?.token === n) return i.promise;
		const a = this.complexityFailureByFile.get(e);
		if (a?.token === n) throw a.error;
		const s = this.complexitySnapshotByFile.get(e);
		if (s?.token === n) return s;
		throw new Error("A newer local difficulty generation replaced this result.");
	}
	capabilities = {
		supportsConsensus: !1,
		supportsAuditLog: !0,
		supportsComplexityBreakdown: !0,
		supportsBackgroundAutoScore: !1,
		markerPollIntervalMs: 0,
		datesStatusStaleTimeMs: 3e4,
		supportsRawAxes: !0,
		requiresAuthentication: !1,
		supportsLocalAutoScorePanel: !0
	};
	async loadFileDaySeries(e, t) {
		const n = E(), i = await Qe(e, n, this.fileBatch(e, n)?.activityDayMemo), a = Md(i, t), s = [];
		for (const [r, o] of [...i].sort(([e], [t]) => e.localeCompare(t))) {
			const e = await Dn(o, a, `loadFileDaySeries ${r}`, Xt());
			e && s.push(e);
		}
		return s;
	}
	async loadActivityData(e, t, n) {
		const i = E();
		let a, s = await Oe(e, i), r = null;
		if (qt(s)) {
			const { ensureSavedGgirNonwear: t } = await import("./ggir-import-MvcFau8m.js").then((e) => e.t);
			try {
				r = await t(e, i, void 0, !1);
			} catch {
				a = "Saved GGIR nonwear recovery failed; recovered nonwear is unavailable.";
			}
			s = await Oe(e, i);
		}
		const o = s?.navigationFacts;
		o?.window[t] || Fu(e, i);
		const l = await Pn(e, t, i, void 0, o);
		if (!l) throw new Error(`No activity data found for fileId=${e} date=${t}. File may not be processed yet.`);
		const c = await this.scorerVerdict(i, e, n?.algorithm, { file: s }), u = await Dn(l, c, `loadActivityData ${t}`, Xt());
		if (!u) throw new Error(`Activity data for fileId=${e} date=${t} is corrupt; please reprocess.`);
		const d = await $n(t, o), p = 48 === n?.viewHours ? [d, await $n(d, o)] : [d], f = await Promise.all(p.map((t) => xe(e, t, i, this.fileBatch(e, i)?.activityDayMemo))), m = [l];
		for (const S of f) {
			if (!S) break;
			m.push(S);
			const e = await Dn(S, c, "loadActivityData next-day", Xt());
			if (!e) throw new Error("Next-day activity data is corrupt; please reprocess.");
			const t = u.timestamps.length, n = e.timestamps.length;
			Zn(u.timestamps, e.timestamps), Zn(u.axisY, e.axisY), Zn(u.vectorMagnitude, e.vectorMagnitude), (u.axisX.length > 0 || e.axisX.length > 0) && (u.axisX.length < t && (u.axisX = new Array(t).fill(0)), Zn(u.axisX, e.axisX.length > 0 ? e.axisX : new Array(n).fill(0))), (u.axisZ.length > 0 || e.axisZ.length > 0) && (u.axisZ.length < t && (u.axisZ = new Array(t).fill(0)), Zn(u.axisZ, e.axisZ.length > 0 ? e.axisZ : new Array(n).fill(0))), (u.temperature.length > 0 || e.temperature.length > 0) && (u.temperature.length < t && (u.temperature = new Array(t).fill(NaN)), Zn(u.temperature, e.temperature.length > 0 ? e.temperature : new Array(n).fill(NaN))), (u.eventMarkers.length > 0 || e.eventMarkers.length > 0) && (u.eventMarkers.length < t && (u.eventMarkers = new Array(t).fill(0)), Zn(u.eventMarkers, e.eventMarkers.length > 0 ? e.eventMarkers : new Array(n).fill(0))), Zn(u.eventMarkerTimestamps, e.eventMarkerTimestamps), (u.lux.length > 0 || e.lux.length > 0) && (u.lux.length < t && (u.lux = new Array(t).fill(NaN)), Zn(u.lux, e.lux.length > 0 ? e.lux : new Array(n).fill(NaN))), (u.sleepScores.length > 0 || e.sleepScores.length > 0) && (u.sleepScores.length < t && (u.sleepScores = new Array(t).fill(0)), Zn(u.sleepScores, e.sleepScores.length > 0 ? e.sleepScores : new Array(n).fill(0))), (u.sleepScoreGaps.length > 0 || e.sleepScoreGaps.length > 0) && (u.sleepScoreGaps.length < t && (u.sleepScoreGaps = new Array(t).fill(0)), Zn(u.sleepScoreGaps, e.sleepScoreGaps.length > 0 ? e.sleepScoreGaps : new Array(n).fill(0))), (u.lstmTimestamps30s.length > 0 || e.lstmTimestamps30s.length > 0) && (u.lstmTimestamps30s = Mn(u.lstmTimestamps30s, e.lstmTimestamps30s), u.lstmSleepWake30s = Nn(u.lstmSleepWake30s, e.lstmSleepWake30s)), jn(u, e, t, n), (u.ggirTimestamps.length > 0 || e.ggirTimestamps.length > 0) && (u.ggirSib = Cn(u.ggirTimestamps, u.ggirSib, e.ggirTimestamps, e.ggirSib), u.ggirTimestamps = Mn(u.ggirTimestamps, e.ggirTimestamps), u.ggirEnmo = Mn(u.ggirEnmo, e.ggirEnmo), u.ggirAnglez = Mn(u.ggirAnglez, e.ggirAnglez));
		}
		u.ggirSib = zn(u.ggirTimestamps, u.ggirSib);
		const { start: h, end: g } = await Vn(t, 48 === n?.viewHours ? 48 : void 0, o), y = Wn(s?.sourceType, s?.sourceProfileId);
		let w = [];
		fn(y) ? w = (await fe(e, h, g, i)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : "detach_nonwear" === y && u.detachNonwear && (w = Du(u.detachNonwear, u.timestamps));
		const _ = {};
		for (const [S, I] of Object.entries(u.nonwearMasksByDetector)) 0 !== I.length && (Gn(S) || (_[S] = I));
		const v = m.flatMap((e) => e.ggirTimestamps?.byteLength ? [e.ggirInvalid] : []);
		if (v.length > 0 && v.every((e) => void 0 !== e)) {
			const e = v.flatMap((e) => Array.from(new Uint8Array(e)));
			e.length === u.ggirTimestamps.length && (_[$.ggir_part2_invalid] = e);
		}
		Ge(u.timestamps, Pu(m, "count_sleep_wake")), Ge(u.ggirTimestamps, Pu(m, "ggir_sleep_period"));
		const b = function(e, t, n, i) {
			const a = {}, s = e.filter((e) => Ou(e, "counts") > 0 || Ou(e, "ggir") > 0);
			for (const r of zu(i)) {
				const e = ni(r);
				if (!s.every((t) => t.displayNonwear && e in t.displayNonwear)) continue;
				const i = s.map((t) => t.displayNonwear[e] ?? null), o = i.filter((e) => null !== e), l = o[0]?.grid;
				if (!l) {
					a[e] = null;
					continue;
				}
				if (o.some((e) => e.grid !== l)) continue;
				const c = o.some((e) => null !== e.weight), u = [], d = [];
				if (s.forEach((e, t) => {
					const n = i[t], a = n ? new Uint8Array(n.any) : new Uint8Array(Ou(e, l));
					for (const i of a) u.push(i);
					if (c) for (const i of n?.weight ? new Float64Array(n.weight) : a) d.push(i);
				}), u.length !== ("counts" === l ? t : n)) continue;
				const p = new Set(o.flatMap((e) => e.detectors));
				a[e] = {
					detectors: r.filter((e) => p.has(e)),
					mask: u,
					weight: c ? d : null,
					grid: l
				};
			}
			return a;
		}(m, u.timestamps.length, u.ggirTimestamps.length, s ?? null);
		Object.keys(b).length < zu(s ?? null).length && Fu(e, i);
		const k = await Fn(u, m, c, s?.epochLengthSeconds ?? 60);
		return {
			timestamps: u.timestamps,
			axisX: u.axisX,
			axisY: u.axisY,
			axisZ: u.axisZ,
			vectorMagnitude: u.vectorMagnitude,
			temperature: u.temperature,
			lux: u.lux,
			melanopicLux: [],
			eventMarkers: u.eventMarkers,
			eventMarkerTimestamps: u.eventMarkerTimestamps,
			ggirTimestamps: u.ggirTimestamps,
			ggirEnmo: u.ggirEnmo,
			ggirAnglez: u.ggirAnglez,
			ggirSib: u.ggirSib,
			...u.ggirTimestamps.length > 0 && 0 === u.ggirSib.length ? { ggirSibMissingReason: Bn(s, l) } : {},
			algorithmResults: u.sleepScores.length > 0 ? u.sleepScores : null,
			...u.sleepScoreGaps.length > 0 ? { algorithmResultGaps: u.sleepScoreGaps } : {},
			...n?.algorithm && !Tn(n.algorithm) && 0 === u.sleepScores.length && u.timestamps.length > 0 ? { scorerMissingReason: "stale" === c.status ? c.reason : On(n.algorithm, {
				sourceProfileId: s?.sourceProfileId,
				actiwareSleepWake: (await Ve(e, i))?.actiwareSleepWake
			}) } : {},
			lstmTimestamps30s: u.lstmTimestamps30s,
			lstmSleepWake30s: u.lstmSleepWake30s,
			nonwearResults: u.nonwearResults,
			nonwearResultsChoi2011: u.nonwearResultsChoi2011,
			vanHeesNonwear: u.vanHeesNonwear,
			algorithmicNonwearMasks: _,
			nonwearBands: b,
			...r ? { nonwearSourceLabels: { [$.ggir_saved]: r } } : {},
			...a ? { savedNonwearMissingReason: a } : {},
			epochResolutions: k,
			viewStart: h,
			viewEnd: g,
			sensorNonwearPeriods: w,
			deviceNonwearSource: y
		};
	}
	async loadMarkers(e, t, n, i, a, s) {
		const r = s ?? E(), o = await at(e, t, n, i, a, r);
		return o ? Rd(o) : null;
	}
	async saveMarkers(e, t, n, i, a, s, r, o, l) {
		const c = o ?? E(), u = Je.getState(), d = mi(c, {
			username: n,
			studyId: u.selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, l), p = r?.signal ?? this.fileBatch(e, c)?.signal;
		let f, m = null, h = null, g = !1, y = r?.sleepPeriodDetection ?? u.sleepPeriodDetection;
		const w = await nt({
			fileId: e,
			date: t,
			username: n,
			algorithm: a ?? null,
			detectionRule: s ?? null,
			signal: p
		}, c, async (o) => {
			const l = "function" == typeof i ? await i(o ? Rd(o) : null) : {
				data: i,
				settings: r
			};
			if (!l) return null;
			m = l.data;
			const d = l.settings ?? r, w = f = await Oe(e, c);
			m = {
				...m,
				sleepMarkers: await this.nightRecordData[Bt(w, u.analysisParadigm)].sleepPeriodsToSave({
					fileId: e,
					date: t,
					isInvalidNight: m.isInvalidNight ?? o?.isInvalidNight ?? !1
				}, m.sleepMarkers, c)
			}, y = Pt({
				algorithm: a ?? "",
				sleepPeriodDetection: d?.sleepPeriodDetection ?? u.sleepPeriodDetection
			});
			const _ = y ? zt(y) : null, v = void 0 === d?.periodGuider ? Gt(u, w) : null, b = d?.periodGuider ?? v?.periodGuider, k = d?.periodGuider ?? (_ && !0 !== v?.placementFromSource ? kt(Dt(_)) : v?.periodGuider), S = a ? x(a) : null, A = S ? I(S) : null, N = await at(e, t, n, a ?? null, s ?? null, c);
			g = !N || N.algorithm !== (a ?? null) || N.detectionRule !== (s ?? null) || JSON.stringify(N.sleepMarkers) !== JSON.stringify(m.sleepMarkers) || void 0 !== m.isInvalidNight && m.isInvalidNight !== N.isInvalidNight, h = void 0 !== m.nonwearMarkers && "auto_score" !== n ? bd(N?.nonwearMarkers) : null;
			let $ = m.sleepPeriodDetectionConfig ?? null;
			if (null === $) {
				const n = await De(e, t, c);
				$ = _t({
					algorithm: a ?? null,
					periodGuider: ka(0, b, y),
					sleepPeriodDetection: y,
					diaryOnsetTime: Ie(n),
					diaryWakeTime: ie(n)
				});
			}
			return {
				kind: "save",
				input: {
					signal: p,
					fileId: e,
					date: t,
					username: n,
					sleepMarkers: m.sleepMarkers,
					...void 0 !== m.nonwearMarkers ? { nonwearMarkers: m.nonwearMarkers } : {},
					...void 0 !== m.isInvalidNight ? { isInvalidNight: m.isInvalidNight } : {},
					...void 0 !== m.isInvalidNightImplicit ? { isInvalidNightImplicit: m.isInvalidNightImplicit } : {},
					...void 0 !== m.explicitNoNonwear ? { explicitNoNonwear: m.explicitNoNonwear } : {},
					notes: m.notes,
					...void 0 !== m.needsConsensus ? { needsConsensus: m.needsConsensus } : {},
					algorithm: a ?? null,
					detectionRule: s ?? null,
					periodGuider: k ?? null,
					sleepPeriodDetectionConfig: $,
					algorithmVersion: A,
					...void 0 !== d?.expected ? { expected: d.expected } : {},
					...void 0 !== d?.guardHashOnly ? { guardHashOnly: d.guardHashOnly } : {}
				}
			};
		}, null === d ? null : {
			...d,
			sleepPeriodDetection: d.sleepPeriodDetection ?? y
		});
		if (!w?.record || !m) return null;
		const _ = m, v = Rd(w.record), b = {
			fileId: e,
			file: f,
			nights: /* @__PURE__ */ new Map([[t, _.sleepMarkers]]),
			sleepMarkersChanged: g,
			username: n,
			analysisParadigm: Je.getState().analysisParadigm,
			db: c,
			signal: p,
			openBatch: () => this.fileBatch(e, c)
		};
		if (await this.sourceAnalyses.reduce(async (e, t, n) => !!(await e || n > 0 && p?.aborted) || (t.covers(f) && await t.followSavedNights(b), !1), Promise.resolve(!1))) return v;
		null !== h && h !== bd(_.nonwearMarkers) && Nd(e, c, void 0, p), g && at(e, t, n, a ?? null, s ?? null, c).then(async (t) => {
			if (!t) return;
			const { storeNightPeriodMetrics: n } = await import("./local-export-shard-worker-Bn9FW-T0.js").then((e) => e.x);
			return n(t, await this.scorerVerdict(c, e, t.algorithm), c, p);
		}).catch(() => {
			console.warn("[local-analysis] period metrics could not be stored with the saved night");
		});
		try {
			if (E() !== c) return v;
		} catch {
			return v;
		}
		const k = C();
		if (!k.capabilities.tauri) return v;
		try {
			const [i, r] = await Promise.all([Oe(e, c), at(e, t, n, a ?? null, s ?? null, c)]);
			if (!i?.fileHash || !r?.contentHash) return v;
			await k.workspace.saveMarkers({
				fileHash: i.fileHash,
				date: t,
				username: n,
				sleepMarkers: (S = _.sleepMarkers, JSON.stringify(S.map((e) => ({
					onset_timestamp: e.onsetTimestamp,
					offset_timestamp: e.offsetTimestamp,
					marker_index: e.markerIndex,
					marker_type: e.markerType
				})))),
				nonwearMarkers: Uu(r.nonwearMarkers),
				isInvalidNight: r.isInvalidNight,
				notes: _.notes,
				contentHash: r.contentHash
			});
		} catch {
			console.warn("[platform] native marker mirror failed for the active local selection");
		}
		var S;
		return v;
	}
	async listFiles() {
		const e = E();
		return (await ye(e)).map((e) => {
			const t = e.id ?? 0, n = l(e);
			return {
				id: t,
				filename: e.filename,
				source: "local",
				available_dates: e.availableDates,
				participant_id: e.participantId ?? null,
				source_type: n,
				source_profile_id: e.sourceProfileId ?? null,
				...void 0 !== e.ggirBundleRevision ? { ggir_bundle_revision: e.ggirBundleRevision } : {},
				...e.ggirNonwearDetector ? { ggir_nonwear_detector: e.ggirNonwearDetector } : {},
				views: y(t, n, /* @__PURE__ */ new Set(), e.epochLengthSeconds),
				count_epoch_seconds: e.epochLengthSeconds
			};
		});
	}
	async listDates(e) {
		const t = E();
		return (await Oe(e, t))?.availableDates ?? Ke(e, t);
	}
	async getDiaryEntry(e, t) {
		const n = E(), i = await De(e, t, n);
		return i ? be(i, await ge(e, n)) : null;
	}
	async listDiaryEntries(e) {
		const t = E(), n = await We(e, t);
		if (0 === n.length) return n;
		const i = await ge(e, t);
		return null === i ? n : oe(n, i);
	}
	async loadPlacementFileContext(e, t, n, i, a, s, r, o, l, c, u, d = this.fileBatch(e, s)) {
		if (!d) return this.readPlacementFileContext(e, t, n, i, a, s, r, o, l, c, u, null);
		const p = JSON.stringify([
			n ?? null,
			r,
			o,
			l,
			a,
			c
		]);
		let f = d.placementContexts.get(p);
		f || (f = this.readPlacementFileContext(e, null, n, i, a, s, r, o, l, c, u, d), d.placementContexts.set(p, f), f.catch(() => {
			d.placementContexts.delete(p);
		}));
		const { contextDays: m, deviceOffNonwear: h } = await f;
		return {
			contextDays: m.filter((e) => e.analysisDate !== t),
			deviceOffNonwear: h
		};
	}
	async readPlacementFileContext(t, n, i, a, s, r, o, l, c, u, d, p) {
		const f = q(d), [m, h, g] = await Promise.all([
			p?.days ? [...p.days.keys()].sort() : Ke(t, r),
			this.placementDiaries(t, r, p),
			od(o) ? ne(t, r) : Se(t, r)
		]), y = await oe(h, s, f), w = new Map(y.map((e) => [e.analysisDate, e])), _ = [], v = m.filter((e) => e !== n), b = await Promise.all(v.map((e) => this.placementDay(t, e, r, p)));
		for (const [k, S] of v.entries()) {
			const t = b[k];
			if (!t) continue;
			for (const e of o) await ya(t, e, u, r, f, d, p?.activityDayMemo);
			const n = await Dn(t, a, `autoScore context ${S}`, u, f);
			if (!n || 0 === n.timestamps.length || 0 === n.sleepScores.length) continue;
			const s = w.get(S), m = n.timestamps[0] ?? 0, h = n.timestamps[n.timestamps.length - 1] ?? m, y = await Re(n.timestamps, e(i), f), v = rd(sn(await ln(o, n.nonwearMasksByDetector, {
				offPeriods: l,
				source: c
			}, {
				timestampsSec: n.timestamps,
				epochLenSec: y
			}, f)));
			_.push({
				analysisDate: S,
				epochLengthSeconds: y,
				timestamps: n.timestamps,
				activityCounts: n.axisY,
				sleepScores: n.sleepScores,
				choiNonwear: v.choiNonwear,
				...v.nonwearWeight ? { nonwearWeight: v.nonwearWeight } : {},
				...v.nonwearMemberFlags ? { nonwearMemberFlags: v.nonwearMemberFlags } : {},
				sensorNonwear: g.filter((e) => e.startTimestamp <= h && e.endTimestamp >= m),
				diaryBedTime: Xe(s),
				diaryOnsetTime: Ie(s),
				diaryWakeTime: ie(s),
				diaryNaps: s ? je(s) : null,
				diaryNonwear: s ? Q(s) : null
			});
		}
		return {
			contextDays: _,
			deviceOffNonwear: g
		};
	}
	async autoScore(e, t, n, i) {
		const a = i ?? E();
		if (this.fileBatch(e, a)) return this.autoScoreNight(e, t, n, vi, a);
		const s = {}, r = await Qe(e, a, s), o = {
			db: a,
			signal: n.signal,
			depth: 0,
			savedNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map(),
			activityDayMemo: s,
			span: Promise.resolve(id(r))
		};
		return this.autoScoreNight(e, t, n, vi, a, void 0, void 0, void 0, o);
	}
	async autoScoreFile(e, t, n = !0, i = E(), a) {
		if (M(i.name)) return /* @__PURE__ */ new Map();
		const s = await this.filePlacementState(e, t, i);
		if (!s) return /* @__PURE__ */ new Map();
		const { file: r, inputs: o, cached: l } = s, c = Et(r);
		return c ? new Map(r.availableDates.map((e) => [e, {
			kind: "refused",
			reason: c
		}])) : l ? zd(i, e, o, l, t.signal) : n ? G({
			kind: R.AUTO_SCORE,
			key: `${R.AUTO_SCORE}:${String(e)}:${o}`,
			label: "Compute marker placement",
			workspaceId: i.name,
			signal: t.signal,
			run: async (n) => {
				const l = a?.inputs === o ? a.byDate : await this.computeFilePlacement(s, t, i, n);
				return await this.storeFilePlacement(e, o, l, i, {
					...t,
					signal: n.signal
				}) ? (n.progress(r.availableDates.length, r.availableDates.length), zd(i, e, o, l, n.signal)) : /* @__PURE__ */ new Map();
			}
		}) : /* @__PURE__ */ new Map();
	}
	async filePlacementState(e, t, n) {
		const i = await Oe(e, n), s = Td.get(n)?.get(e), [r, o, l] = await Promise.all([
			We(e, n),
			n.markerProvenance.get(e),
			s ? void 0 : cd(n, e)
		]);
		if (!i) return null;
		const c = await u.waitFor(async function(e, t, n, i) {
			const s = Je.getState(), r = t.ruleset ?? s.placementRuleset, o = /* @__PURE__ */ new Set([a.VAN_HEES_2015, ...t.algorithm && Tn(t.algorithm) ? [t.algorithm] : []]), l = (e) => "auto_score" === e.username && o.has(e.algorithm ?? ""), c = (i?.rows ?? []).filter((e) => l(e) || r !== h.LEGACY && e.nonwearDecided).map((e) => [e.id, l(e) ? e.lastModifiedAt : e.nonwearSpans ?? e.lastModifiedAt]), { signal: u, choiAxis: d, hasptVariant: p, studySettingsRevision: f, ...m } = t;
			return j(JSON.stringify({
				v: 2,
				options: m,
				ruleset: r,
				nonwearDetectors: t.nonwearDetectors ?? Kt(hn(t.algorithm)),
				choiAxis: t.choiAxis ?? s.choiAxis,
				hasptVariant: t.hasptVariant ?? s.ggirHasptVariant,
				seriesRevision: e.seriesRevision ?? 0,
				dates: e.availableDates,
				diaries: n,
				rows: c
			}));
		}(i, t, r, o));
		if (s?.inputs === c) return {
			fileId: e,
			file: i,
			diaries: r,
			inputs: c,
			cached: s.byDate
		};
		const d = s ? await cd(n, e) : l;
		return {
			fileId: e,
			file: i,
			diaries: r,
			inputs: c,
			cached: d?.inputs === c ? new Map(Object.entries(d.byDate)) : null
		};
	}
	async storeFilePlacement(e, t, n, i, a) {
		if (a.signal?.throwIfAborted(), M(i.name)) return !1;
		const s = await K(i, [
			i.files,
			i.diaryEntries,
			i.markerProvenance,
			i.placementResults,
			i.studySettings
		], async () => {
			if (void 0 !== a.studySettingsRevision && ((await ve(i))?.contentHash ?? null) !== a.studySettingsRevision) return !1;
			const s = await this.filePlacementState(e, a, i);
			return !M(i.name) && s?.inputs === t && (await i.placementResults.put({
				fileId: e,
				policy: 2,
				inputs: t,
				byDate: Object.fromEntries(n)
			}), !0);
		}, a.signal);
		return s && E() === i && mt(e, i), s;
	}
	async storeFilesPlacement(e, n, i, a, s) {
		const r = [], o = await Promise.allSettled(e.map(({ fileId: e, options: t }) => this.filePlacementState(e, t, n))), l = {
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: U()
		}, c = o.flatMap((e) => "fulfilled" === e.status && e.value ? [e.value.file] : []), u = c.flatMap((e) => e.sourceType === d.GGIR_5S_UPLOAD ? [{ size: e.sourceSizeBytes ?? 0 }] : []), p = u.length > 0 && u.length === c.length ? V(u, l) : {
			...l,
			maxExtraWorkers: Number.POSITIVE_INFINITY
		}, f = await L(e.map(({ fileId: e, options: a }, l) => ({
			name: `placement:${String(e)}`,
			cost: 1,
			run: async (c, u) => {
				try {
					const r = new t(), u = o[l];
					if ("rejected" === u.status) throw u.reason;
					const d = u.value;
					if (!d || d.cached) return null;
					const p = await r.computeFilePlacement(d, a, n, i, c, s);
					return {
						fileId: e,
						inputs: d.inputs,
						byDate: p
					};
				} catch {
					return i.signal.throwIfAborted(), u.primary || u.cancel(), r.push(e), null;
				}
			}
		})), {
			createWorker: v,
			extraWorkers: W(p),
			cancelOperation: () => {},
			...a,
			signal: i.signal
		});
		for (const [t, d] of f.entries()) {
			try {
				d && await this.storeFilePlacement(d.fileId, d.inputs, d.byDate, n, e[t].options) && zd(n, d.fileId, d.inputs, d.byDate, i.signal);
			} catch {
				i.signal.throwIfAborted(), r.push(e[t].fileId);
			}
			i.progress(t + 1, f.length);
		}
		if (r.length > 0) {
			const e = `Marker placement failed for recording ID(s) ${r.sort((e, t) => e - t).map(String).join(", ")}.`;
			throw i.progress(f.length, f.length, e), new Error(e);
		}
	}
	async storedAutoScore(e, t, n) {
		return (await this.autoScoreFile(e, n, !1)).get(t) ?? {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
	}
	async computeFilePlacement(e, t, n, i, a, s) {
		const r = e.fileId, o = e.file.availableDates, l = {
			...t,
			signal: i.signal
		};
		return qe(async (c) => {
			const u = await Qe(r, n, c), d = s ?? (await bi(n)).csvText, p = void 0 !== a && Tn(t.algorithm), f = [];
			let m, h = o.length;
			const g = new Promise((e) => {
				m = e;
			}).then(async () => {
				if (0 !== f.length) try {
					i.signal.throwIfAborted();
					const e = f.map((e) => e.opts), n = p && a ? await a.placeStoredGgirNights([...u.values()], ce([...u.values()], t.algorithm), f.map((e) => ({
						options: e.opts,
						...e.anchor
					}))) : await function(e, t = b()) {
						return Tt(e, t);
					}(e, a ?? q(i.signal));
					i.signal.throwIfAborted();
					for (const [t, i] of f.entries()) i.resolve(n[t]);
				} catch (e) {
					for (const t of f) t.reject(e);
				}
			}), y = this.beginFileBatch(r, n, i.signal), w = this.fileBatch(r, n), _ = {
				activityDayMemo: w.activityDayMemo,
				days: w.days,
				span: w.span,
				file: w.file,
				diaries: w.diaries,
				markers: w.markers
			};
			w.activityDayMemo = c, w.days = u, w.span = Promise.resolve(id(u)), w.file = Promise.resolve(e.file), w.diaries = Promise.resolve(e.diaries);
			try {
				0 === o.length && m();
				const e = await Promise.all(o.map(async (e) => {
					let t = !1;
					const i = () => {
						t || (t = !0, h -= 1, 0 === h && m());
					};
					try {
						return [e, await this.autoScoreNight(r, e, l, (e) => new Promise((t, n) => {
							f.push({
								opts: e,
								resolve: t,
								reject: n
							}), i();
						}), n, d, a, p ? (e, t, n) => new Promise((a, s) => {
							f.push({
								opts: e,
								anchor: {
									day: t,
									nextDay: n
								},
								resolve: a,
								reject: s
							}), i();
						}) : void 0)];
					} finally {
						i();
					}
				}));
				await g;
				const t = new Map(e);
				return i.signal.throwIfAborted(), t;
			} finally {
				Object.assign(w, _), await y.end();
			}
		});
	}
	async autoScoreNight(t, n, i, s, o = E(), l, c, u, d) {
		const p = c ?? q(i.signal);
		i.signal?.throwIfAborted();
		const f = d ?? this.fileBatch(t, o), g = await (f ? f.file ??= Oe(t, o) : Oe(t, o)), y = Et(g);
		if (y) return {
			kind: "refused",
			reason: y
		};
		const w = i.ruleset ?? Je.getState().placementRuleset, _ = hn(i.algorithm), v = i.nonwearDetectors ?? Kt(_), b = i.choiAxis ?? Je.getState().choiAxis, k = i.sleepPeriodDetection ? zt(i.sleepPeriodDetection) : void 0;
		let I = rn(k, {
			path: _,
			selected: v
		}) ?? null;
		const A = await Pn(t, n, o, (e) => this.placementDay(t, e, o, f), void 0, p);
		if (!A) return {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
		if ("vendor_analysis" === r.find((e) => e.id === i.algorithm)?.execution) {
			const e = {
				fileId: t,
				date: n,
				file: g,
				options: i,
				sleepPeriodDetectionConfig: I,
				db: o,
				batch: f
			}, a = await this.sourceAnalyses.reduce(async (t, n) => await t ?? n.proposeNight?.(e) ?? null, Promise.resolve(null));
			if (a) return a;
		}
		const x = await this.placementDay(t, await $n(n, void 0, p), o, f), N = await (this.sourceAnalyses.find((e) => e.guiderWindow && e.covers(g))?.guiderWindow?.({
			fileId: t,
			date: n,
			db: o,
			batch: f
		}) ?? null), $ = Wn(g?.sourceType, g?.sourceProfileId), T = await ad([A, x], v, b, $, o, i.signal, f?.activityDayMemo), z = await this.scorerVerdict(o, t, i.algorithm, { file: g }, f), D = Tn(i.algorithm), M = D && u ? { kind: "angle-deferred" } : await En({
			day: A,
			nextDay: x,
			verdict: z,
			angle: D,
			requireScores: !0,
			missingScoresReason: i.algorithm === a.LSTM_SLEEP_WAKE ? "No LSTM sleep/wake results are stored for this file. Re-import or reprocess the raw file so the app can compute spectral features and run the ONNX model." : "No algorithm results available",
			choiAxis: b,
			laterDays: async () => [...(f?.days ?? await Qe(t, o, f?.activityDayMemo)).values()].filter((e) => e.date > n).sort((e, t) => e.date.localeCompare(t.date)),
			core: p
		});
		if ("refused" === M.kind) return M;
		const R = D ? null : sd(T);
		if (null !== R) return {
			kind: "refused",
			reason: R
		};
		I = rn(k, {
			path: _,
			selected: v,
			available: T.available,
			dropped: T.dropped
		}) ?? null;
		const C = un(T.dropped, _), F = (e) => "refused" === e.kind || null === I && 0 === C.length ? e : {
			...e,
			notes: [...C, ...e.notes],
			sleep_period_detection_config: {
				...e.sleep_period_detection_config ?? {},
				...I ?? {}
			}
		};
		if ("angle" === M.kind || "angle-legacy" === M.kind || "angle-deferred" === M.kind) {
			const e = await this.placementMarker(t, n, i.algorithm ?? null, o, f) ?? await this.placementMarker(t, n, a.VAN_HEES_2015, o, f), r = e?.sleepMarkers[0], c = null != r?.onsetTimestamp && null != r.offsetTimestamp ? {
				startTimestamp: r.onsetTimestamp,
				endTimestamp: r.offsetTimestamp
			} : null, d = () => r && null != r.onsetTimestamp && null != r.offsetTimestamp ? {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: r.onsetTimestamp,
					offset_timestamp: r.offsetTimestamp,
					marker_type: m.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: [],
				notes: ["HDCZA fallback: no 5s SIB stream available for structured sleep-period fusion", `HDCZA window: ${ft(r.onsetTimestamp)} – ${ft(r.offsetTimestamp)}`],
				decisions: [],
				sleep_period_detection_config: e?.sleepPeriodDetectionConfig ?? I
			} : {
				kind: "refused",
				reason: "No HDCZA sleep window found — re-process the file to regenerate it"
			};
			if ("angle" === M.kind || "angle-deferred" === M.kind) {
				let a = {
					timestamps: /* @__PURE__ */ new Float64Array(),
					activityCounts: /* @__PURE__ */ new Float64Array(),
					sleepScores: /* @__PURE__ */ new Uint8Array()
				};
				if ("angle" === M.kind) {
					const e = await qn(M, n, p);
					if ("refused" === e.kind) return e;
					a = e.series;
				}
				const [r, m] = await Promise.all([this.placementDiary(t, n, o, f), f ? f.span ??= ge(t, o, g?.seriesRevision ?? 0) : ge(t, o, g?.seriesRevision ?? 0)]), y = r ? await be(r, m, p) : null, _ = (await Ia(i.sensorLocation ?? "wrist", i.hasptVariant ?? Je.getState().ggirHasptVariant, p)).variant, v = function(e) {
					const t = e?.sleepPeriodDetectionConfig?.haspt_variant;
					return Object.values(S).includes(t) ? t : null;
				}(e), b = null == e ? null : null == v ? `HASPT variant not recorded at import; assumed ${_} from the study setting. Reprocess the file to record it.` : v !== _ ? `HASPT variant at import was ${v}; the study setting now gives ${_}. Placed with ${v}; reprocess the file to apply ${_}.` : null, k = w === h.GGIR_PART4, I = k ? await Pe(await this.placementDiaries(t, o, f), void 0, p) : null, N = I?.wakeIsOutBed ? null : _e(y, I?.outBedIsWake ? "diary_out_of_bed_time" : "diary_wake_time"), $ = I?.outBedIsWake ? null : _e(y, I?.wakeIsOutBed ? "diary_wake_time" : "diary_out_of_bed_time"), T = {
					...a,
					choiNonwear: null,
					ggirHasptAlgo: v ?? _,
					ggirConfigCsv: l ?? (await bi(o)).csvText,
					...I?.hasBedlog ? { ggirDiaryHasBedlog: !0 } : {},
					...I?.hasSleeplog ? { ggirDiaryHasSleeplog: !0 } : {},
					diaryBedTime: k ? _e(y, "diary_in_bed_time") : Xe(y),
					diaryOutBedTime: k ? $ : se(y),
					diaryOnsetTime: k ? _e(y, "diary_onset_time") : Ie(y),
					diaryWakeTime: k ? N : ie(y),
					diaryNaps: y ? je(y) : null,
					analysisDate: n,
					onsetMinConsecutiveSleep: 1,
					offsetMinConsecutiveMinutes: 1,
					algorithm: i.algorithm,
					periodGuider: ka(i.algorithm, i.periodGuider, i.sleepPeriodDetection),
					...void 0 !== i.sleepPeriodDetection ? { sleepPeriodDetection: i.sleepPeriodDetection } : {},
					...i.scorerPostprocessing ? { scorerPostprocessing: i.scorerPostprocessing } : {},
					ruleset: w,
					epochLengthSeconds: 5,
					hdczaWindow: c
				}, z = "angle-deferred" === M.kind ? await u(T, A, x) : await s(T);
				return "angle-legacy" === z ? d() : F(b && "refused" !== z.kind ? {
					...z,
					notes: [b, ...z.notes]
				} : z);
			}
			return d();
		}
		const [P, O] = await Promise.all([this.placementDiary(t, n, o, f), f ? f.span ??= ge(t, o, g?.seriesRevision ?? 0) : ge(t, o, g?.seriesRevision ?? 0)]), j = P ? await be(P, O, p) : null, { unpacked: B } = M, { timestamps: Z, axisY: G, sleepScores: H, eventMarkerTimestamps: J } = B, U = Ct(i.detectionRule), L = ka(i.algorithm, i.periodGuider, i.sleepPeriodDetection), W = await this.placementMarker(t, n, a.VAN_HEES_2015, o, f), V = W?.sleepMarkers.find((e) => e.markerType === m.MAIN_SLEEP) ?? W?.sleepMarkers[0], Y = null != V?.onsetTimestamp && null != V.offsetTimestamp ? {
			startTimestamp: V.onsetTimestamp,
			endTimestamp: V.offsetTimestamp
		} : null, K = await Re(Z, e(i.algorithm), p), X = T.available.some(fn) ? await (f ? f.sensor ??= de(t, o) : de(t, o)) : [], ee = rd(sn(await ln(T.available, B.nonwearMasksByDetector, {
			offPeriods: X,
			source: $
		}, {
			timestampsSec: Z,
			epochLenSec: K
		}, p))), te = w !== h.LEGACY ? await this.loadPlacementFileContext(t, n, i.algorithm, z, O, o, T.available, X, $, b, i.signal, f) : null, { startIndex: ne, endIndex: ae } = await Hn(Z, n, p);
		if (ne === ae) return {
			kind: "refused",
			reason: "No activity data found for this date"
		};
		const re = Z.slice(ne, ae), oe = G.slice(ne, ae), le = H.slice(ne, ae), ce = ee.choiNonwear ? ee.choiNonwear.slice(ne, ae) : null, ue = ee.nonwearWeight ? ee.nonwearWeight.slice(ne, ae) : null, pe = ee.nonwearMemberFlags ? ee.nonwearMemberFlags.slice(ne, ae) : null, fe = re[0] ?? 0, me = re[re.length - 1] ?? fe;
		return F(await s({
			timestamps: re,
			activityCounts: oe,
			sleepScores: le,
			choiNonwear: ce,
			...ue ? { nonwearWeight: ue } : {},
			...pe ? { nonwearMemberFlags: pe } : {},
			diaryBedTime: Xe(j),
			diaryOnsetTime: Ie(j),
			diaryWakeTime: ie(j),
			diaryNaps: j ? je(j) : null,
			diaryNonwear: j ? Q(j) : null,
			analysisDate: n,
			onsetMinConsecutiveSleep: U.onsetN,
			offsetMinConsecutiveMinutes: U.offsetN,
			algorithm: i.algorithm,
			periodGuider: L,
			...void 0 !== i.sleepPeriodDetection ? { sleepPeriodDetection: i.sleepPeriodDetection } : {},
			...i.scorerPostprocessing ? { scorerPostprocessing: i.scorerPostprocessing } : {},
			ruleset: w,
			nonwearDetectors: ee.nonwearDetectors,
			epochLengthSeconds: K,
			hdczaWindow: Y,
			eventMarkerTimestamps: J.filter((e) => e >= fe && e <= me + 60),
			actiwareRestWindow: N,
			nightStartHour: St(i.nightStartHour),
			nightEndHour: St(i.nightEndHour),
			...te ? {
				sensorNonwear: te.deviceOffNonwear.filter((e) => e.startTimestamp <= me && e.endTimestamp >= fe),
				contextDays: te.contextDays
			} : {}
		}));
	}
	async autoNonwear(e, t, n) {
		if (void 0 === n.threshold) throw new Error("Local auto-nonwear requires a resolved nonwear threshold.");
		const i = E(), a = await Pn(e, t, i, (t) => xe(e, t, i, this.fileBatch(e, i)?.activityDayMemo));
		if (!a) return {
			kind: "refused",
			reason: "No activity data"
		};
		const [s, r, o, l] = await Promise.all([
			xe(e, await $n(t), i, this.fileBatch(e, i)?.activityDayMemo),
			De(e, t, i),
			de(e, i),
			Oe(e, i)
		]), c = Je.getState(), u = Gt(c, l), d = n.nonwearDetectors ?? ("ggir" === hn(u.algorithm) ? c.nonwearDetectorsGgir : u.nonwearDetectorsCounts), p = Wn(l?.sourceType, l?.sourceProfileId), f = await ad([a, s], d, Xt(), p, i, void 0, this.fileBatch(e, i)?.activityDayMemo), m = sd(f);
		if (null !== m) return {
			kind: "refused",
			reason: m
		};
		const h = await En({
			day: a,
			nextDay: s,
			verdict: ue,
			angle: !1,
			requireScores: !1,
			missingScoresReason: "",
			choiAxis: Xt(),
			laterDays: () => Promise.resolve([])
		});
		if ("counts" !== h.kind) return {
			kind: "refused",
			reason: "refused" === h.kind ? h.reason : Rn
		};
		const g = h.unpacked, { timestamps: y, axisY: w } = g, _ = y[0] ?? 0, v = y[y.length - 1] ?? _, S = sn(await ln(f.available, g.nonwearMasksByDetector, {
			offPeriods: o.filter((e) => e.startTimestamp <= v && e.endTimestamp >= _),
			source: p
		}, {
			timestampsSec: y,
			epochLenSec: Be(a, l) ?? await Re(y, 60)
		})), I = rd(S), A = od(f.available), x = r ? Q(r) : [], N = n.existingSleepMarkers, $ = await async function(e) {
			if (0 === e.timestamps.length || 0 === e.activityCounts.length) return Jt("No activity data");
			const t = {
				diary_nonwear: (e.diaryNonwear ?? []).filter(([e, t]) => null != e && null != t).map(([e, t]) => ({
					start_time: e,
					end_time: t
				})),
				choi_nonwear: null == e.choiNonwear ? null : [],
				sensor_nonwear_periods: e.sensorNonwearPeriods.map(([e, t]) => ({
					start_timestamp: e,
					end_timestamp: t
				})),
				existing_sleep_markers: e.existingSleepMarkers.map(([e, t]) => ({
					onset_timestamp: e,
					offset_timestamp: t
				})),
				analysis_date: e.analysisDate,
				epoch_length_seconds: e.epochLengthSeconds ?? 60,
				threshold: e.threshold ?? 0,
				min_duration_minutes: e.minDurationMinutes ?? 10,
				zero_activity_ratio: .65,
				diary_min_duration_minutes: e.diaryMinDurationMinutes ?? 1,
				...xt(e.nonwearDetectors, e.nonwearWeight, {
					alwaysNameSingle: !0,
					memberFlags: e.nonwearMemberFlags
				})
			}, n = [
				JSON.stringify(t),
				e.timestamps instanceof Float64Array ? e.timestamps : Float64Array.from(e.timestamps),
				e.activityCounts instanceof Float64Array ? e.activityCounts : Float64Array.from(e.activityCounts),
				e.choiNonwear instanceof Uint8Array ? e.choiNonwear : Uint8Array.from(e.choiNonwear ?? [])
			], i = n.slice(1).filter((t) => ArrayBuffer.isView(t) && t !== e.timestamps && t !== e.activityCounts && t !== e.choiNonwear), a = await b().placeNonwearMarkers(k(n, i.map((e) => e.buffer)));
			return a ? {
				kind: "placed",
				nonwear_markers: a.nonwear_markers,
				notes: a.notes
			} : Jt("Nonwear placement is unavailable in this build — reload while online to update the local engine.");
		}({
			timestamps: y,
			activityCounts: w,
			diaryNonwear: x,
			choiNonwear: A ? null : I.choiNonwear,
			nonwearDetectors: I.nonwearDetectors,
			...I.nonwearWeight ? { nonwearWeight: I.nonwearWeight } : {},
			...I.nonwearMemberFlags ? { nonwearMemberFlags: I.nonwearMemberFlags } : {},
			sensorNonwearPeriods: A ? o.filter((e) => e.startTimestamp <= v && e.endTimestamp >= _).sort((e, t) => e.startTimestamp - t.startTimestamp).map((e) => [e.startTimestamp, e.endTimestamp]) : [],
			existingSleepMarkers: N,
			analysisDate: t,
			threshold: n.threshold
		});
		return "refused" === $.kind ? $ : {
			kind: "placed",
			nonwear_markers: $.nonwear_markers.map((e) => Qt(e, S?.available.length ?? 0)),
			notes: [...un(f.dropped, hn(u.algorithm)), ...$.notes]
		};
	}
	async listFileScoringCounts(e, t, n) {
		return this.fileScoringCountsIn(E(), e, t, n);
	}
	async fileScoringCountsIn(e, t, n, i) {
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const { nightStartHour: a, nightEndHour: s } = kd(i), [r, o] = await Promise.all([e.files.bulkGet([...t]), re(t, e)]);
		return Promise.all(t.map(async (t, i) => {
			const l = r[i], c = l?.availableDates ?? await Ke(t, e), u = /* @__PURE__ */ new Map();
			for (const e of o[i]?.rows ?? []) e.username === n && u.set(e.date, Ye(u.get(e.date), e));
			const d = l?.nightDifficulty, p = d?.nightStartHour === a && d.nightEndHour === s;
			return {
				file_id: t,
				scored_dates: c.filter((e) => u.get(e)?.scored ?? !1).length,
				nonwear_scored_dates: c.filter((e) => u.get(e)?.nonwearDecided ?? !1).length,
				total_dates: c.length,
				no_diary_dates: p ? c.filter((e) => -1 === d.byDate[e]).length : 0,
				no_diary_current: p
			};
		}));
	}
	async listDatesStatus(e, t, n, i) {
		return await this.storedDatesStatus(e, t, n, i) ?? await this.computeDatesStatus(e, t, n, i);
	}
	async storedDatesStatus(e, t, n, i) {
		const a = E(), s = (await Oe(e, a))?.nightDifficulty, { nightStartHour: r, nightEndHour: o } = kd(i);
		if (s?.nightStartHour !== r || s.nightEndHour !== o || !t.every((e) => e in s.byDate)) return null;
		void 0 === s.notRankableReason && b().getComputeIdentity().then(({ sourceRevision: t }) => {
			s.sourceRevision !== String(t) && Nd(e, a, i);
		}, () => {});
		const [l, c] = await Promise.all([X(e, a), cd(a, e)]), u = Ce(l, n), d = Ce(l, ot), p = Ne(l), f = t.filter((e) => (p.get(e)?.size ?? 0) >= 2), m = await Tu(f.flatMap((e) => [{
			usersForDate: p.get(e),
			kind: "sleep"
		}, {
			usersForDate: p.get(e),
			kind: "nonwear"
		}])), h = new Set(f.filter((e, t) => m[2 * t].disagree || m[2 * t + 1].disagree));
		return t.map((e) => ({
			date: e,
			..._d(u.get(e), h.has(e), d.get(e), ld(c, e, d.get(e))),
			complexity_pre: s.byDate[e] ?? null,
			complexity_post: null
		}));
	}
	async computeDatesStatus(e, t, n, i, a) {
		let s;
		const r = new Promise((e) => {
			s = e;
		}), o = this.datesStatusGeneration(e, t, n, i, s, a);
		return o.catch(() => {}), a ? o : Promise.race([r, o]);
	}
	async datesStatusGeneration(e, t, n, i, a, s) {
		s?.throwIfAborted();
		const r = q(s);
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const o = E(), l = ++this.nextComplexityGenerationToken;
		let c, d;
		const p = new Promise((e, t) => {
			c = e, d = t;
		});
		p.catch(() => {}), this.latestComplexityTokenByFile.set(e, l), this.complexitySnapshotByFile.delete(e), this.complexitySignalGenerationByFile.delete(e), this.complexityFailureByFile.delete(e), this.complexityGenerationByFile.set(e, {
			token: l,
			promise: p
		});
		try {
			const d = async () => {
				const t = await X(e, o), [i, a, s, r, l] = await Promise.all([
					Qe(e),
					We(e),
					ne(e, o, t),
					Vu(e, o),
					Oe(e)
				]);
				return [
					Ce(t, n),
					Ce(t, ot),
					i,
					a,
					s,
					Ne(t),
					Wu(t),
					r,
					l
				];
			}, [p, m, h, g, y, w, _, v, b] = "function" == typeof o.transaction ? await o.transaction("r", [
				o.markers,
				o.activityDays,
				o.diaryEntries,
				o.sensorNonwear,
				o.dailyGgirSummaries,
				o.files
			], async () => {
				if (E() !== o) throw new Error("The local workspace changed before difficulty inputs could be read.");
				const e = await d();
				if (E() !== o) throw new Error("The local workspace changed while difficulty inputs were being read.");
				return e;
			}) : await d(), k = id(h), S = new Map((await oe(g, k, r)).map((e) => [e.analysisDate, e])), { nightStartHour: I, nightEndHour: A } = kd(i), x = t.filter((e) => (w.get(e)?.size ?? 0) >= 2), N = await Tu(x.flatMap((e) => [{
				usersForDate: w.get(e),
				kind: "sleep"
			}, {
				usersForDate: w.get(e),
				kind: "nonwear"
			}]), r), $ = new Set(x.filter((e, t) => N[2 * t].disagree || N[2 * t + 1].disagree)), T = await cd(o, e), z = (e) => t.map((t) => ({
				date: t,
				..._d(p.get(t), $.has(t), m.get(t), ld(T, t, m.get(t))),
				complexity_pre: e(t),
				complexity_post: null
			})), D = b?.nightDifficulty;
			D?.nightStartHour === I && D.nightEndHour === A && t.every((e) => e in D.byDate) && (s?.throwIfAborted(), a(z((e) => D.byDate[e] ?? null)));
			const M = [], R = [...t], C = await ki(R, r), F = new Map(R.map((e, t) => [e, C[t] ?? !1])), O = ce(h.values()), j = /* @__PURE__ */ new Map();
			for (const n of t) {
				s?.throwIfAborted();
				const t = await td(h, n, O, r, j);
				if (!t) continue;
				const { timestamps: i, axisY: a, sleepScores: o, nonwearResults: l, temperature: c, detachNonwear: u, ggirTimestamps: d, ggirAnglez: p } = t, f = ud(i, i.length), m = ud(a, f.length), g = dd(o, f.length);
				if (0 === f.length || 0 === m.length || 0 === g.length) continue;
				const w = S.get(n), b = _.get(n) ?? null, k = await _n((t) => {
					const i = we(Ie(w), t), a = we(ie(w), t);
					return {
						naps: w ? je(w).map(([e, n]) => ({
							onset_time: we(e, t),
							offset_time: we(n, t)
						})).filter((e) => null != e.onset_time) : [],
						nonwear: w ? Q(w).map(([e, n]) => [we(e, t), we(n, t)]).filter((e) => null != e[0] && null != e[1]).map(([e, t]) => ({
							start_time: e,
							end_time: t
						})) : [],
						onset: i,
						wake: a,
						inBed: we(Xe(w), t),
						outBed: we(se(w), t),
						guiderTargets: fd(n, i, a, b, pe(e), t)
					};
				}, new kn(r)), I = k.naps, A = k.nonwear, x = f[0] ?? 0, N = f[f.length - 1] ?? x, $ = k.onset, T = k.wake, z = v.get(n)?.calibration?.errorEnd;
				M.push({
					analysis_date: n,
					epoch_length_seconds: await Re(f, 60, r),
					timestamps: f,
					activity_counts: m,
					sleep_scores: g,
					choi_nonwear: dd(l, f.length),
					sensor_nonwear: y.filter((e) => e.startTimestamp <= N && e.endTimestamp >= x).map((e) => ({
						start_ts: e.startTimestamp,
						end_ts: e.endTimestamp
					})),
					diary_onset_time: $,
					diary_wake_time: T,
					diary_nap_count: I.length,
					diary_naps: I,
					diary_nonwear: A,
					diary_in_bed_time: k.inBed,
					diary_out_bed_time: k.outBed,
					is_weekend: F.get(n) ?? null,
					guider_targets: k.guiderTargets,
					anglez: pd(f, d, p),
					light: [],
					temperature: ud(c, f.length),
					heart_rate: [],
					detach_nonwear: dd(u, f.length),
					calibration_error: "number" == typeof z && Number.isFinite(z) ? z : null,
					imputed_fraction: null,
					hdcza_window: b
				});
			}
			let B, Z;
			try {
				if (M.length > 0) {
					const n = {
						config: { signals: {
							night_start_hour: I,
							night_end_hour: A
						} },
						days: M
					}, i = {
						config: n.config ?? null,
						days: n.days.map((e) => ({
							analysis_date: e.analysis_date,
							epoch_length_seconds: e.epoch_length_seconds,
							timestamps: e.timestamps
						}))
					}, a = r, c = await a.getComputeIdentity(), d = await hu({
						runtimeIdentity: c,
						difficultyRequestWireJson: Fc(n),
						signalsRequestWireJson: Oc(n),
						sourceContentHash: b?.sourceContentHash ?? null
					}), p = [
						"timestamps",
						"activity_counts",
						"sleep_scores",
						"choi_nonwear",
						"anglez",
						"light",
						"temperature",
						"heart_rate",
						"detach_nonwear"
					], f = p.flatMap((e) => {
						const t = new Uint32Array(n.days.length + 1);
						for (const [a, s] of n.days.entries()) t[a + 1] = t[a] + s[e].length;
						const i = new ("sleep_scores" === e || "choi_nonwear" === e || "detach_nonwear" === e ? Uint8Array : Float64Array)(t[n.days.length]);
						for (const [a, s] of n.days.entries()) i.set(s[e], t[a]);
						return [i, t];
					}), m = [JSON.stringify({
						config: n.config,
						days: n.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !p.includes(e))))
					}), ...f], h = await ku(e, d.generationKey, o) ?? await ku(e, (await hu({
						runtimeIdentity: Qu(c),
						difficultyRequestWireJson: d.difficultyRequestWireJson,
						difficultyRequestSha256: d.difficultyRequestSha256,
						signalsRequestWireJson: d.signalsRequestWireJson,
						signalsRequestSha256: d.signalsRequestSha256,
						sourceContentHash: d.sourceContentHash
					})).generationKey, o);
					if (h) B = {
						token: l,
						evidenceDb: o,
						coveredDates: [...new Set(t)].sort(),
						signalRequest: null == h.signalsByDate ? m : null,
						projectionInput: gd(h),
						difficultyByDate: yd(h),
						signalsByDate: wd(h),
						computeIdentity: h.runtimeIdentity,
						projectionRevision: md(h),
						evidence: hd(h)
					};
					else {
						s?.throwIfAborted();
						const p = xd(o, d.generationKey, s, () => r.computeFileDifficulty(m));
						Z = p.release;
						const f = await p.run;
						if (s?.throwIfAborted(), !ed(c, await a.getComputeIdentity())) throw new Error("The local scoring runtime changed while difficulty was being computed. Re-run the calculation.");
						if (nd(f.byDate, n.days)) {
							const n = await async function(e) {
								try {
									(!Number.isInteger(e.fileId) || e.fileId <= 0) && Jc();
									const t = await async function(e) {
										"sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || Jc(), null !== e.sourceContentHash && Uc(e.sourceContentHash), Kc(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || Jc(), Uc(e.difficultyRequestSha256), Uc(e.signalsRequestSha256), await Xc(e.difficultyRequestWireJson, e.difficultyRequestSha256), await Xc(e.signalsRequestWireJson, e.signalsRequestSha256);
										const t = pu(e.difficultyRequestWireJson, e.signalsRequestWireJson);
										Uc(e.generationKey);
										const { generationKey: n, ...i } = e;
										return await mu(i) !== e.generationKey && Jc(), t;
									}(e.identity), n = Vc(e.projectionInput), i = Vc(e.difficultyByDate), a = null == e.signalsByDate ? null : Vc(e.signalsByDate);
									fu(t, n, i, a);
									const s = await Yc(n), r = await Yc(i), o = null === a ? null : await Yc(a);
									yu(s, e.expectedHashes?.projectionSha256), yu(r, e.expectedHashes?.difficultyResultSha256), yu(o, e.expectedHashes?.signalsResultSha256);
									const l = (/* @__PURE__ */ new Date()).toISOString(), c = e.createdAt ?? l, u = e.updatedAt ?? c;
									Lc(c), Lc(u), Date.parse(u) < Date.parse(c) && Jc();
									const d = {
										fileId: e.fileId,
										generationKey: e.identity.generationKey,
										evidenceContractId: e.identity.evidenceContractId,
										difficultyMethodId: e.identity.difficultyMethodId,
										signalsMethodId: e.identity.signalsMethodId,
										requestContractId: e.identity.requestContractId,
										sourceContentHash: e.identity.sourceContentHash,
										runtimeIdentity: Vc(e.identity.runtimeIdentity),
										difficultyRequestWireJson: e.identity.difficultyRequestWireJson,
										signalsRequestWireJson: e.identity.signalsRequestWireJson,
										difficultyRequestSha256: e.identity.difficultyRequestSha256,
										signalsRequestSha256: e.identity.signalsRequestSha256,
										projectionSha256: s,
										difficultyResultSha256: r,
										signalsResultSha256: o,
										projectionInput: n,
										difficultyByDate: i,
										signalsByDate: a,
										createdAt: c,
										updatedAt: u
									}, p = await gu(d);
									return yu(p, e.expectedHashes?.recordSha256), {
										...d,
										recordSha256: p
									};
								} catch (t) {
									if (t instanceof qc) throw t;
									return Jc();
								}
							}({
								fileId: e,
								identity: d,
								projectionInput: i,
								difficultyByDate: f.byDate,
								signalsByDate: null
							});
							if (this.disposed || null == this.latestComplexityTokenByFile.get(e)) throw new Error("The local workspace changed before difficulty evidence could be saved.");
							if (this.latestComplexityTokenByFile.get(e) !== l) throw new Error("A newer local difficulty generation superseded this computation.");
							s?.throwIfAborted();
							const a = await async function(e, t = E(), n = "fresh", i) {
								"fresh" !== n && "restore" !== n && Jc();
								const a = await u.waitFor(_u(e));
								return Wt([t.files, t.complexityEvidence], async () => {
									const e = await t.files.get(a.fileId);
									vu(a, e);
									const i = await t.complexityEvidence.where("[fileId+generationKey]").equals([a.fileId, a.generationKey]).first();
									if (i) {
										const e = await u.waitFor(_u(i));
										if (r = a, (s = e).generationKey !== r.generationKey || s.projectionSha256 !== r.projectionSha256 || s.difficultyResultSha256 !== r.difficultyResultSha256 || s.difficultyRequestSha256 !== r.difficultyRequestSha256 || s.signalsRequestSha256 !== r.signalsRequestSha256 || s.sourceContentHash !== r.sourceContentHash) throw new Gc();
										if (null !== e.signalsResultSha256 && null !== a.signalsResultSha256 && e.signalsResultSha256 !== a.signalsResultSha256) throw new Gc();
										if (null === e.signalsByDate && null !== a.signalsByDate) {
											const n = new Date(Math.max(Date.now(), Date.parse(e.createdAt))).toISOString(), i = {
												...e,
												signalsByDate: a.signalsByDate,
												signalsResultSha256: a.signalsResultSha256,
												updatedAt: n
											}, s = await u.waitFor(gu(i)), r = {
												...i,
												recordSha256: s
											};
											return await t.complexityEvidence.put(r), await bu(r, "signals_enriched", 0), {
												record: r,
												disposition: "signals_enriched",
												evicted: 0
											};
										}
										return {
											record: e,
											disposition: "deduplicated",
											evicted: 0
										};
									}
									var s, r;
									await async function(e, t, n) {
										const i = await e.complexityEvidence.where("fileId").equals(t.fileId).toArray();
										if (i.length > 5) throw new qc(!0);
										if (i.length < 5) return;
										if ("fresh" === n) return;
										i.sort((e, t) => {
											const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
											return 0 !== n ? n : (t.id ?? 0) - (e.id ?? 0);
										});
										const a = i[i.length - 1];
										if (a && Date.parse(t.createdAt) < Date.parse(a.createdAt)) throw new Hc();
									}(t, a, n);
									const o = { ...a };
									delete o.id;
									const l = await t.complexityEvidence.add(o), c = {
										...o,
										id: l
									}, d = await async function(e, t, n) {
										const i = e.complexityEvidence, a = await i.where("fileId").equals(t).toArray();
										a.sort((e, t) => {
											if ("restore" === n) {
												const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
												if (0 !== n) return n;
											}
											return (t.id ?? 0) - (e.id ?? 0);
										});
										const s = a.slice(5).map((e) => e.id).filter((e) => void 0 !== e);
										return s.length > 0 && await i.bulkDelete(s), s.length;
									}(t, c.fileId, n);
									return await bu(c, "inserted", d), {
										record: c,
										disposition: "inserted",
										evicted: d
									};
								}, t, i);
							}(n, o, "fresh", s);
							"inserted" === a.disposition && await async function(e, t, n) {
								try {
									await Ut.recordWorkspaceDurably(P.SYSTEM_RECALCULATION, {
										subject: "night_complexity_generation",
										generationKey: e.generationKey,
										difficultyResultSha256: e.difficultyResultSha256,
										dateCount: Object.keys(e.difficultyByDate).length
									}, t, n) || console.warn("[local-data-source] Complexity evidence was saved, but its audit event is still pending.");
								} catch {
									console.warn("[local-data-source] Complexity evidence was saved, but its audit event could not be recorded.");
								}
							}(a.record, o, s), B = {
								token: l,
								evidenceDb: o,
								coveredDates: [...new Set(t)].sort(),
								signalRequest: null == a.record.signalsByDate ? m : null,
								projectionInput: gd(a.record),
								difficultyByDate: yd(a.record),
								signalsByDate: wd(a.record),
								computeIdentity: a.record.runtimeIdentity,
								projectionRevision: md(a.record),
								evidence: hd(a.record)
							};
						} else console.warn("[local-data-source] Night difficulty is unavailable from the current local scoring runtime."), B = {
							token: l,
							evidenceDb: null,
							coveredDates: [...new Set(t)].sort(),
							signalRequest: null,
							projectionInput: null,
							difficultyByDate: {},
							signalsByDate: null,
							computeIdentity: null,
							projectionRevision: null,
							evidence: null
						};
					}
				} else B = {
					token: l,
					evidenceDb: null,
					coveredDates: [...new Set(t)].sort(),
					signalRequest: null,
					projectionInput: null,
					difficultyByDate: {},
					signalsByDate: null,
					computeIdentity: null,
					projectionRevision: null,
					evidence: null
				};
			} catch (f) {
				s?.throwIfAborted();
				const t = this.latestComplexityTokenByFile.get(e);
				if (this.disposed || null == t || t === l) throw f;
				B = await this.awaitNewerComplexitySnapshot(e, l);
			} finally {
				Z?.();
			}
			s?.throwIfAborted(), c(B), this.latestComplexityTokenByFile.get(e) === l && (s?.throwIfAborted(), this.publishComplexitySnapshot(e, B, s), this.complexityFailureByFile.delete(e));
			let q = B;
			if (this.latestComplexityTokenByFile.get(e) !== l) {
				const t = this.complexityGenerationByFile.get(e);
				if (t && t.token !== l) q = await t.promise;
				else {
					const t = this.complexityFailureByFile.get(e);
					if (void 0 !== t && t.token === this.latestComplexityTokenByFile.get(e)) throw t.error;
					const n = this.complexitySnapshotByFile.get(e);
					if (!n) throw new Error("A newer local difficulty generation replaced this result.");
					q = n;
				}
			}
			const G = q.difficultyByDate;
			if (q === B && (0 === M.length || null !== B.computeIdentity)) {
				const n = [...h.values()].map(Ae), i = 0 === M.length && n.some((e) => e.ggir) && n.every((e) => e.ggir || 0 === e.timestamps.length), a = {
					nightStartHour: I,
					nightEndHour: A,
					byDate: Object.fromEntries(t.map((e) => [e, G[e]?.difficulty ?? null])),
					sourceRevision: String((B.computeIdentity ?? await r.getComputeIdentity()).sourceRevision),
					...i ? { notRankableReason: Sd } : {}
				};
				if (JSON.stringify(b?.nightDifficulty) !== JSON.stringify(a)) try {
					s?.throwIfAborted(), await K(o, [o.files], () => o.files.update(e, { nightDifficulty: a }), s);
					for (const t of Id) t(e, o);
					s?.throwIfAborted();
				} catch {
					s?.throwIfAborted(), console.warn("[local-data-source] Stored night difficulty could not be written.");
				}
			}
			return z((e) => G[e]?.difficulty ?? null);
		} catch (f) {
			throw this.latestComplexityTokenByFile.get(e) === l && this.complexityFailureByFile.set(e, {
				token: l,
				error: /* @__PURE__ */ new Error("The newest local difficulty generation failed.")
			}), d(f), f;
		} finally {
			this.complexityGenerationByFile.get(e)?.token === l && this.complexityGenerationByFile.delete(e);
		}
	}
	async loadAdjacentMarkers(e, t, n) {
		const i = (await Oe(e))?.availableDates?.slice().sort() ?? [], a = i.indexOf(t);
		if (a < 0) return null;
		const s = a > 0 ? i[a - 1] ?? null : null, r = a < i.length - 1 ? i[a + 1] ?? null : null, [o, l] = await Promise.all([s ? at(e, s, n) : null, r ? at(e, r, n) : null]), c = (e) => (e?.sleepMarkers ?? []).map((e) => ({
			onset_timestamp: e.onsetTimestamp,
			offset_timestamp: e.offsetTimestamp,
			marker_index: e.markerIndex
		}));
		return {
			previous_day_markers: c(o),
			next_day_markers: c(l),
			previous_date: s,
			next_date: r
		};
	}
	async auditRecordsForView(e, t) {
		const n = E(), i = await te(e, t, void 0, n);
		if (0 === e) return i;
		const a = await ke(e, t, n);
		return [...i, ...a].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
	}
	static isRecordInView(e, t, n) {
		return e.fileId === t && e.analysisDate === n || 0 !== t && et(e, t, n);
	}
	async loadAuditLog(e, t, n) {
		const i = await this.auditRecordsForView(e, t), a = (n ? i.filter((e) => e.username === n) : i).filter((e) => "number" == typeof e.id).map((e) => ({
			id: e.id,
			action: e.action,
			client_timestamp: e.clientTimestamp,
			session_id: e.sessionId,
			sequence: e.sequence,
			payload: e.payload ?? null,
			username: e.username,
			file_id: e.fileId
		})), s = [...new Set(i.map((e) => e.username))], r = new Set(i.map((e) => e.sessionId)).size;
		let o = null, l = null;
		for (const c of i) {
			const e = c.clientTimestamp;
			(null === o || e < o) && (o = e), (null === l || e > l) && (l = e);
		}
		return {
			summary: {
				total_events: i.length,
				users: s,
				sessions: r,
				first_event: o,
				last_event: l
			},
			entries: a
		};
	}
	async exportAuditLogCsv(e, t, i) {
		const a = await this.auditRecordsForView(e, t), s = (i ? a.filter((e) => e.username === i) : a).filter((e) => "number" == typeof e.id), r = Y("audit_log_csv", "local"), o = await ut(s), l = function(e) {
			const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
			for (const i of e) {
				const e = i.payload?.exportId;
				"string" == typeof e && ("export_started" === i.action ? t.add(e) : "data_exported" !== i.action && "export_cancelled" !== i.action || n.add(e));
			}
			for (const i of n) t.delete(i);
			return t;
		}(s), c = [r.join(",")];
		for (const [u, d] of s.entries()) {
			const e = d.payload ?? null, t = o[u];
			c.push([
				n(String(d.id)),
				n((/* @__PURE__ */ new Date(1e3 * d.clientTimestamp)).toISOString()),
				n(d.action),
				n(Gu(null === e ? "" : Hu(e, d.action), d.action, e, l)),
				n(d.username),
				n(String(d.fileId)),
				n(d.analysisDate ?? ""),
				n(null == d.studyId ? "" : String(d.studyId)),
				n(d.sessionId),
				n(String(d.sequence)),
				n(d.eventHash ?? ""),
				n(d.previousHash ?? ""),
				n(null === e ? "" : JSON.stringify(e)),
				n(t?.basis ?? "unanchored"),
				n(void 0 === t ? "" : st(t.state)),
				n(void 0 === t || "unanchored" === t.basis ? "" : JSON.stringify(t.state))
			].join(","));
		}
		return new Blob([`${c.join("\n")}\n`], { type: "text/csv;charset=utf-8" });
	}
	async verifyAuditChain(e, n) {
		const i = await Te();
		return {
			...await Lt(i),
			total_rows: i.length,
			rows_for_view: i.filter((i) => t.isRecordInView(i, e, n)).length
		};
	}
	getComplexityProjectionRevision(e) {
		return this.complexitySnapshotByFile.get(e)?.projectionRevision ?? null;
	}
	invalidateLocalCaches() {
		this.nextComplexityGenerationToken += 1, this.complexitySnapshotByFile.clear(), this.complexityGenerationByFile.clear(), this.complexitySignalGenerationByFile.clear(), this.complexityFailureByFile.clear(), this.latestComplexityTokenByFile.clear();
	}
	dispose() {
		this.disposed = !0, this.invalidateLocalCaches();
	}
	async attachSignalsToCurrentComplexitySnapshot(e, t) {
		const n = this.complexitySnapshotByFile.get(e) ?? null;
		if (n?.token !== t.token) return n;
		if (t.signalsByDate || !t.signalRequest || !t.computeIdentity || !t.evidence || !t.evidenceDb) return t;
		const i = t.signalRequest, a = t.computeIdentity, s = t.evidence, r = t.evidenceDb, o = this.complexitySignalGenerationByFile.get(e);
		if (o?.token === t.token) return await o.promise;
		const l = (async () => {
			const n = () => this.complexitySnapshotByFile.get(e) ?? null, o = () => {
				const i = n();
				if (!i || i.token !== t.token) return i;
				const a = {
					...i,
					signalRequest: null
				};
				return this.publishComplexitySnapshot(e, a), a;
			};
			try {
				const l = b(), c = await l.getComputeIdentity();
				if (!ed(a, c)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), o();
				const d = await l.computeFileSignals(i), p = await l.getComputeIdentity();
				if (!ed(a, p)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), o();
				if (!nd(d.byDate, JSON.parse(i[0]).days)) throw new Error("The local scoring runtime returned incomplete night-signal evidence.");
				if (this.disposed) throw new Error("The local workspace changed before night-signal evidence could be saved.");
				const f = n();
				if (!f) return null;
				if (f.token !== t.token) return f;
				if (f.signalsByDate) return f;
				const m = await async function(e, t = E(), n) {
					(!Number.isInteger(e.fileId) || e.fileId <= 0) && Jc(), Uc(e.generationKey);
					const i = Vc(e.signalsByDate), a = await Yc(i);
					return yu(a, e.signalsResultSha256), Wt([t.files, t.complexityEvidence], async () => {
						const n = await t.complexityEvidence.where("[fileId+generationKey]").equals([e.fileId, e.generationKey]).first();
						if (!n) throw new qc();
						const s = await u.waitFor(_u(n));
						if (vu(s, await t.files.get(s.fileId)), null !== s.signalsResultSha256) {
							if (s.signalsResultSha256 !== a) throw new Gc();
							return {
								record: s,
								disposition: "deduplicated",
								evicted: 0
							};
						}
						const r = new Date(Math.max(Date.now(), Date.parse(s.createdAt))).toISOString(), o = {
							...s,
							signalsByDate: i,
							signalsResultSha256: a,
							updatedAt: r
						}, l = await u.waitFor(gu(o)), c = await u.waitFor(wu({
							...o,
							recordSha256: l
						}));
						return await t.complexityEvidence.put(c), await bu(c, "signals_enriched", 0), {
							record: c,
							disposition: "signals_enriched",
							evicted: 0
						};
					}, t, n);
				}({
					fileId: e,
					generationKey: s.generationKey,
					signalsByDate: d.byDate
				}, r), h = n();
				if (!h) return null;
				if (h.token !== t.token) return h;
				if (h.signalsByDate) return h;
				const g = {
					...h,
					signalRequest: null,
					projectionInput: gd(m.record),
					difficultyByDate: yd(m.record),
					signalsByDate: wd(m.record),
					computeIdentity: m.record.runtimeIdentity,
					projectionRevision: md(m.record),
					evidence: hd(m.record)
				};
				return this.publishComplexitySnapshot(e, g), g;
			} catch {
				return console.warn("[local-data-source] Full night-signal detail is temporarily unavailable; showing the retained difficulty result."), n();
			}
		})();
		this.complexitySignalGenerationByFile.set(e, {
			token: t.token,
			promise: l
		});
		try {
			return await l;
		} finally {
			this.complexitySignalGenerationByFile.get(e)?.token === t.token && this.complexitySignalGenerationByFile.delete(e);
		}
	}
	async loadComplexityBreakdown(e, t, n) {
		let i = null;
		for (let l = 0; l < 8; l++) {
			const a = this.complexityGenerationByFile.get(e);
			if (a) {
				await a.promise;
				continue;
			}
			if (i = this.complexitySnapshotByFile.get(e) ?? null, !i || !i.coveredDates.includes(t)) {
				const i = await Oe(e), a = i?.availableDates?.includes(t) ? [...new Set(i.availableDates)].sort() : [t];
				await this.computeDatesStatus(e, a, n);
				continue;
			}
			const s = await this.attachSignalsToCurrentComplexitySnapshot(e, i), r = this.complexityGenerationByFile.get(e);
			if (r) {
				await r.promise;
				continue;
			}
			const o = this.complexitySnapshotByFile.get(e) ?? null;
			if (s && o && o.token === s.token) {
				if (o.token === i.token) {
					i = o;
					break;
				}
				i = o;
			}
		}
		i && !i.coveredDates.includes(t) && (i = null), i || console.warn("[local-data-source] Difficulty detail could not converge on a stable local generation.");
		const a = i?.difficultyByDate[t], s = i?.projectionInput ?? null, r = i?.signalsByDate ?? null, o = i?.computeIdentity ?? null;
		return {
			complexity_pre: a?.difficulty ?? null,
			complexity_post: null,
			projection_revision: i?.projectionRevision ?? null,
			features: a?.features ?? {},
			state: a?.state ?? null,
			verdict: a?.verdict ?? null,
			infinite_reason: a?.infiniteReason ?? null,
			computed_at: a?.computedAt ?? null,
			feature_vector: a?.featureVector ?? null,
			per_guider: a?.perGuider ?? [],
			signals: r?.[t] ?? null,
			explanation: null,
			calculation_provenance: s ? {
				method_export: "computeNightDifficulty",
				request_contract: "FileDifficultyRequest",
				config: s.config,
				runtime_identity: o ?? null,
				evidence_record: i?.evidence ? {
					contract_id: i.evidence.evidenceContractId,
					generation_key: i.evidence.generationKey,
					source_content_sha256: i.evidence.sourceContentHash,
					difficulty_request_sha256: i.evidence.difficultyRequestSha256,
					signals_request_sha256: i.evidence.signalsRequestSha256,
					projection_sha256: i.evidence.projectionSha256,
					difficulty_result_sha256: i.evidence.difficultyResultSha256,
					signals_result_sha256: i.evidence.signalsResultSha256,
					record_sha256: i.evidence.recordSha256
				} : null
			} : null,
			canonical_result: a?.canonicalResult ?? null,
			canonical_intrinsic: a?.canonicalIntrinsic ?? null,
			plot_intervals: Ku(r ?? void 0, s ?? void 0, t, i?.projectionRevision ?? void 0)
		};
	}
	onMarkersChanged(e, t, n, i, a, s, r, o = null, l = null, c) {
		const u = [
			"markers",
			e,
			t,
			n || "anonymous",
			this.sourceKey,
			o,
			l,
			s,
			r
		], d = i.getQueryData(u);
		i.setQueryData(u, () => a);
		const p = void 0 !== d && "auto_score" !== n && JSON.stringify(d?.nonwearMarkers ?? []) === JSON.stringify(a?.nonwearMarkers ?? []);
		(function(e, t, n, i = {}) {
			!1 !== i.datesStatus && Sa(e, ["dates-status", t]), Sa(e, ["local-dates-status", t]), !1 !== i.fileQuality && Sa(e, ["file-quality"]), Sa(e, ["analysis-summary"]), Sa(e, ["adjacent-markers"]), Sa(e, [
				"audit-log",
				t,
				n
			]), Sa(e, ["actogram-markers", t]), Sa(e, [
				"night-stored-variant",
				t,
				n
			]), Sa(e, ["local-export-file-stats"]), Sa(e, ["local-export-circadian-coverage"]), function() {
				va += 1;
				for (const e of ba) e();
			}();
		})(i, e, t, {
			datesStatus: !p,
			fileQuality: !1
		});
		const f = c ?? E();
		this.refreshFileScoringCounts(i, {
			fileId: e,
			username: n,
			workspaceScope: o,
			studyId: l
		}, f), p && this.patchDateStatus(i, {
			fileId: e,
			date: t,
			username: n,
			workspaceScope: o
		}, f);
	}
	async unscoreNight(e, t, n, i, a, s, r, o) {
		const l = r ?? E(), c = mi(l, {
			username: n || "anonymous",
			studyId: Je.getState().selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, o);
		return await dt({
			fileId: e,
			date: t,
			username: n || "anonymous",
			algorithm: i,
			detectionRule: a,
			expected: s,
			signal: this.fileBatch(e, l)?.signal
		}, l, c), null;
	}
	refreshFileScoringCounts(e, t, n) {
		const { fileId: i, username: a, workspaceScope: s, studyId: r } = t, o = [
			"file-quality",
			this.sourceKey,
			s,
			a || "anonymous",
			r
		];
		e.getQueriesData({ queryKey: o }).length > 0 && this.fileScoringCountsIn(n, [i], a).then(([t]) => {
			t && e.setQueriesData({ queryKey: o }, (e) => e && {
				...e,
				items: e.items.map((e) => e.file_id === i ? {
					...e,
					scored_dates: t.scored_dates,
					nonwear_scored_dates: t.nonwear_scored_dates,
					total_dates: t.total_dates
				} : e)
			});
		}).catch(() => {
			Sa(e, o);
		});
	}
	async patchDateStatus(e, t, n) {
		const { fileId: i, date: a, username: s, workspaceScope: r } = t;
		for (const o of e.getQueryCache().findAll({ queryKey: ["dates-status", i] })) {
			const t = o.queryKey, l = o.state.data;
			if (t[2] === this.sourceKey && (t[3] !== r || t[4] !== (s || "anonymous"))) continue;
			if (o.state.isInvalidated) continue;
			if (!o.isActive()) {
				Sa(e, t);
				continue;
			}
			const c = t[4], u = o.state.dataUpdatedAt;
			try {
				if (!l || t[2] !== this.sourceKey || "string" != typeof c) throw new Error("not a local status list");
				const s = await vd(i, a, c, n);
				if (o.state.dataUpdatedAt !== u) continue;
				e.setQueryData(t, (e) => e?.map((e) => e.date === a ? {
					...e,
					...s
				} : e));
			} catch {
				Sa(e, t);
			}
		}
	}
	async ingestFile(e, t, n) {
		const { processLocalFile: i } = await import("./local-processing-lpmsyYlW.js"), a = Je.getState(), s = this.operationProcessingOptions, r = s?.devicePreset ?? a.devicePreset, o = s?.skipRows ?? a.skipRows, l = s?.choiAxis ?? a.choiAxis, c = s?.columnMapping ?? a.columnMapping, u = s?.countEpochSeconds ?? (30 === a.epochLengthSeconds ? 30 : 60);
		e.name.toLowerCase().endsWith(".csv") && r && "actigraph" !== r && "geneactiv" !== r && Lu(r, c);
		const d = E(), p = await i(e, r ?? "actigraph", o ?? 10, t, l ?? "vector_magnitude", c, n, {
			...s ? {} : $e(a),
			countEpochSeconds: u,
			sleepPeriodDetectionConfig: zt(a.sleepPeriodDetection),
			...this.operationProcessingOptions
		});
		return p.alreadyImported || (Nd(p.fileId, d, void 0, n), $d(p.fileId, d, n)), p;
	}
	async loadDailyGgirSummary(e, t) {
		return (t ? await ae(e, t) : await ee(e)).map(Yu);
	}
};
function Ed(e, t, n) {
	return Fd([e], t, n);
}
function Fd(e, t, n, i) {
	const a = `${R.PLACEMENT}:${e.map(String).join(":")}`;
	return G({
		kind: R.PLACEMENT,
		key: a,
		label: "Store marker placement",
		workspaceId: t.name,
		signal: n,
		rerun: !0,
		run: async (n) => {
			if (M(t.name)) return;
			const { captureLocalScoringSettings: s, scoringSettingsForScope: r, autoScoreOptionsFromSettings: o } = await import("./scoped-scoring-settings-C1n8JOSk.js"), l = {
				sourceKey: "local",
				workspaceId: null,
				actor: "anonymous",
				studyId: null
			}, c = new Cd();
			try {
				n.signal.throwIfAborted();
				const [a, u] = await Promise.all([ve(t), he([...e], t)]), d = s(l, a ?? null), p = u.map((e) => {
					if (!e || "incomplete" === e.ingestState) return [];
					const t = r(d, l, e);
					return t ? [{
						fileId: e.id,
						options: {
							...o(t, e),
							signal: n.signal
						}
					}] : [];
				});
				1 === e.length && !i && p[0]?.[0] ? await c.autoScoreFile(p[0][0].fileId, p[0][0].options, !0, t) : await c.storeFilesPlacement(p.flat(), t, n, i, d.ggirConfig.csvText);
			} catch (u) {
				if (M(t.name)) return;
				throw n.signal.throwIfAborted(), T.getState().update(`${t.name}:${a}`, { visible: !0 }), u;
			}
		}
	});
}
function Pd(e, t) {
	return G({
		kind: R.PLACEMENT_RECOVERY,
		key: R.PLACEMENT_RECOVERY,
		label: "Resume marker placement",
		workspaceId: e.name,
		signal: t,
		run: async (t) => {
			const { recoverPendingGgirRecomputes: n } = await import("./local-export-shard-worker-Bn9FW-T0.js").then((e) => e.y);
			await n(e, t.signal);
			const i = await e.transaction("r", e.projectMeta, async () => {
				const [t, n] = await Promise.all([e.projectMeta.get(pt), e.projectMeta.get(it)]);
				return {
					completed: void 0 !== t,
					generation: n?.revision ?? 0
				};
			}), { backfillInterruptedScoredVariantWarms: a } = await import("./cube-variants-C_nVak0H.js");
			if (i.completed) await a(e, { signal: t.signal });
			else {
				for (const n of await ye(e)) {
					if (E() !== e) return;
					null != n.id && "incomplete" !== n.ingestState && (await Ed(n.id, e, t.signal), await t.yieldNow());
				}
				E() === e && (await a(e, { signal: t.signal }), E() === e && await K(e, [e.projectMeta], async () => {
					const t = await e.projectMeta.get(it);
					E() === e && (t?.revision ?? 0) === i.generation && await e.projectMeta.put({
						key: pt,
						revision: 1
					});
				}, t.signal));
			}
		}
	});
}
export { Ji as A, vi as B, aa as C, Ki as D, Hi as E, Pi as F, Ii as I, Si as L, Zi as M, qi as N, ta as O, Gi as P, ki as R, la as S, Ui as T, yi as V, ra as _, Sc as a, ia as b, Rc as c, ma as d, pa as f, ea as g, Qi as h, Iu as i, ca as j, Yi as k, fa as l, oa as m, Nu as n, zc as o, wa as p, Su as r, kc as s, Ju as t, ha as u, sa as v, ua as w, Li as x, na as y, bi as z };
