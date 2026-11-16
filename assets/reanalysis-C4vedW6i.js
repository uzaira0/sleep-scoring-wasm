import { Nn as a, en as e } from "./schema-MMK46mR-.js";
import { D as t, h as s } from "./workspace-db-YhWSrcvp.js";
import { n as i } from "./background-jobs-Dz-LteaG.js";
import { i as r } from "./project-revision-CUz5eq5n.js";
import { G as n, Yt as o, dt as l, y as c, yt as d } from "./store-CGm5oa9P.js";
import { T as u } from "./night-session-registry-Ds5SlWLP.js";
import { S as p, _ as h, n as m, o as f, p as g, s as v } from "./per-source-defaults-CxbMEjO8.js";
import { r as k } from "./local-ggir-hasib-variants-FTtpy3iZ.js";
import { a as y, f as S, o as I } from "./local-export-worker-_QiDE5PV.js";
import { h as R, i as A, n as T, r as W, s as F, t as b, v as E } from "./epoch-series-import-LTGNeyW2.js";
const j = k.Oakley1997;
function x(a) {
	return (/* @__PURE__ */ new Date(1e3 * a)).toISOString().slice(0, 19);
}
async function _(a, t, s, { wasm: i, epochSeconds: r, services: n }) {
	const o = {}, l = new Float64Array(a.axisY);
	if (a.algorithmResults[e.OAKLEY_1997] && l.length > 0) {
		const a = await i.scoreEpochs(R({
			algorithm: e.OAKLEY_1997,
			counts: l,
			epochSeconds: r,
			...null != t ? { config: { oakleyThreshold: t } } : {}
		})), s = E(a, l.length);
		s && (o[e.OAKLEY_1997] = s.slice().buffer);
	}
	if (a.algorithmResults[j] && s) {
		const e = (await n.warmVariantsForDay(function(a) {
			const e = (a) => a ? new Float64Array(a.slice(0)) : /* @__PURE__ */ new Float64Array();
			return {
				timestamps: e(a.timestamps),
				axisY: e(a.axisY),
				vectorMagnitude: e(a.vectorMagnitude),
				...a.axisX ? { axisX: e(a.axisX) } : {},
				...a.axisZ ? { axisZ: e(a.axisZ) } : {}
			};
		}(a), await n.withRecordingWakeThreshold({
			...s,
			variants: ["Oakley1997"]
		}, t), i))[j];
		e && (o[j] = e.slice().buffer);
	}
	return o;
}
const P = "Retained Actiware analysis could not be reconciled with restored settings.";
async function M(w, { paradigm: k, overrides: R, proposal: E, hasib: j, db: P, expectedStudyContentHash: M, signal: D, wasm: L = () => i(D), services: Y }) {
	const H = void 0 !== M ? M : (await P.studySettings.where("key").equals("study").first())?.contentHash ?? null, C = await P.actiwareFileData.get(w.id), O = C ? function(a) {
		if (a.actiwareRecording) return a.actiwareRecording;
		const e = a.actiwareSleepWake?.params;
		return e ? {
			params: e,
			intervals: (a.actiwareIntervals ?? []).filter((a) => "stored" === a.origin).map((a) => ({
				kind: a.kind,
				source: a.source,
				start: x(a.startTimestamp),
				end: x(a.endTimestamp),
				...a.analysis ? { analysis: a.analysis } : {}
			}))
		} : null;
	}(C) : null, K = C?.actiwareSleepWake;
	if (!C || !O) return {
		changed: !1,
		unavailable: "no readable Actiware analysis settings"
	};
	const N = g(w, k), q = f(w, k) === t.rest_intervals, X = N ? R : null, Z = v(O.params, m(O.params, X, O.intervals)), V = N ? await async function(a, e, t) {
		if (e.rest_autoscore !== s.screens) return {
			proposal: e,
			nights: []
		};
		const i = [...(await c(a.id, t)).values()].sort((a, e) => a.date.localeCompare(e.date)), r = [], n = [];
		for (const s of i) {
			for (const a of new Float64Array(s.timestamps)) r.push(a);
			if (s.eventMarkerTimestamps) for (const a of new Float64Array(s.eventMarkerTimestamps)) n.push(a);
		}
		const o = new Map((await l(a.id, t)).map((a) => [a.analysisDate, a])), d = await t.studySettings.where("key").equals("study").first();
		return {
			proposal: e,
			nights: T(r, n, a.epochLengthSeconds, o, {
				start: d?.nightStartHour,
				end: d?.nightEndHour
			})
		};
	}(w, p(E), P) : null, z = (C.actiwareRestProposal?.key ?? W(null)) === W(V), B = N?.wakeThresholdFromRecording ? C.actiwareWakeThreshold ?? null : null;
	if (K && z && h(Z, K.params) && (C.oakleyThreshold ?? null) === B) return { changed: !1 };
	const G = (await P.actiwareStatisticsInputs.get(w.id))?.input ?? null;
	if (!G) return {
		changed: !1,
		unavailable: "no stored Actiware grid"
	};
	const $ = await a.waitFor(Promise.resolve(D ? i(D) : L())), J = await a.waitFor(b(O.intervals, G.epochs, O.params, X, $, G, D, V)), Q = N?.wakeThresholdFromRecording ? J.wakeThreshold : null;
	if (K && z && h(Z, K.params) && (C.oakleyThreshold ?? null) === Q) return { changed: !1 };
	if (!J.sleepWake) return {
		changed: !1,
		unavailable: "the core could not score Actiware Sleep/Wake" + (J.refusals.sleepWake ? `: ${J.refusals.sleepWake}` : "")
	};
	const U = [...(await c(w.id, P)).values()], aa = /* @__PURE__ */ new Map();
	for (const t of U) {
		D?.throwIfAborted();
		const s = await a.waitFor(F($, J.sleepWake, new Float64Array(t.timestamps), w.epochLengthSeconds));
		D?.throwIfAborted();
		const i = await a.waitFor(_(t, Q, j, {
			wasm: $,
			epochSeconds: w.epochLengthSeconds,
			services: Y
		})), r = {
			...o(t.algorithmResults, (a, t) => t === e.ACTIWARE_SLEEP_WAKE ? void 0 : a),
			...i,
			...s ? { [e.ACTIWARE_SLEEP_WAKE]: s.sleep.buffer } : {}
		}, n = s && s.invalid.some((a) => 1 === a) ? s.invalid.buffer : null;
		aa.set(t.date, {
			algorithmResults: r,
			invalid: n
		});
	}
	const ea = (C.actiwareIntervals ?? []).filter((a) => "rest" === a.kind && "scorer" === a.origin), ta = $.actiwareIntervals, sa = ea.length > 0 && ta ? await a.waitFor(S(J.intervals, ea, {
		epochs: G.epochs,
		params: J.sleepWake.params,
		grid: {
			startTimestamp: J.sleepWake.startTimestamp,
			epochSeconds: J.sleepWake.epochSeconds
		},
		core: { actiwareIntervals: (a, e, t) => ta(a, e, t) }
	})) : J.intervals, ia = {
		...C,
		actiwareIntervals: sa,
		actiwareSleepWake: A(J.sleepWake),
		actiwareStatistics: J.statistics ?? [],
		actiwareStatisticsNeedsRecompute: null === J.statistics,
		actiwareRecording: O
	};
	return null != J.wakeThreshold ? ia.actiwareWakeThreshold = J.wakeThreshold : delete ia.actiwareWakeThreshold, null != Q ? ia.oakleyThreshold = Q : delete ia.oakleyThreshold, J.refusals.intervals ? ia.actiwareIntervalsRefusal = J.refusals.intervals : delete ia.actiwareIntervalsRefusal, J.restProposal ? ia.actiwareRestProposal = J.restProposal : delete ia.actiwareRestProposal, await r(P, [
		P.activityDays,
		P.scoredVariantMasks,
		P.actiwareFileData,
		P.actiwareStatisticsInputs,
		P.placementResults,
		P.files,
		P.studySettings,
		P.markers
	], async () => {
		const e = await P.files.get(w.id);
		if (!e || e.createdAt !== w.createdAt || e.sourceContentHash !== w.sourceContentHash) throw new Error("File changed during reanalysis");
		const t = await P.studySettings.where("key").equals("study").first();
		if ((e.seriesRevision ?? 0) !== (w.seriesRevision ?? 0) || (t?.contentHash ?? null) !== H) throw new Error("Reanalysis inputs changed");
		await n(w.id, new Map([...aa].map(([a, e]) => [a, {
			algorithmResults: e.algorithmResults,
			actiwareSleepWakeInvalid: e.invalid ?? void 0
		}])), P, D);
		const s = /* @__PURE__ */ new Map();
		for (const a of await P.markers.where("fileId").equals(w.id).toArray()) "auto_score" !== a.username && s.set(a.date, d(s.get(a.date), a));
		const r = [...s].filter(([, a]) => a.isInvalidNight).map(([a]) => a);
		if (q) {
			if (r.length > 0 || sa !== J.intervals) {
				const e = await a.waitFor(y(ia.actiwareIntervals, J.statisticsInput ?? G, r, (a) => $.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null)));
				ia.actiwareStatistics = e ?? [], ia.actiwareStatisticsNeedsRecompute = null === e;
			}
		} else if (s.size > 0) {
			const e = await a.waitFor(I({
				file: ia,
				statisticsInput: J.statisticsInput ?? G
			}, s, (a) => $.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null), i(D)));
			ia.actiwareStatistics = e ?? [], ia.actiwareStatisticsNeedsRecompute = null === e;
		}
		await P.actiwareFileData.put({
			fileId: w.id,
			...ia
		}), J.statisticsInput && await P.actiwareStatisticsInputs.put({
			fileId: w.id,
			input: J.statisticsInput
		}), await P.placementResults.delete(w.id), await u([w.id], P, D);
	}, D), { changed: !0 };
}
export { P as ACTIWARE_NOT_RECONCILED, M as reanalyzeActiwareFile };
