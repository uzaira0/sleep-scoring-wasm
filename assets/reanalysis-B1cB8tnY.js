import { Qt as a, jn as e } from "./schema-D8rqa1Y6.js";
import { T as t, p as s } from "./workspace-db-tot7PUXb.js";
import { n as i } from "./background-jobs-B2uo95VO.js";
import { i as r } from "./project-revision-CRZNLUWr.js";
import { Jt as o, W as n, ut as l, vt as c, y as d } from "./store-StTfKmbj.js";
import { w } from "./night-session-registry-Blk6S0Kz.js";
import { S as p, _ as h, n as m, o as f, p as g, s as v } from "./per-source-defaults-DHWdfoJI.js";
import { r as k } from "./local-ggir-hasib-variants-TGeoq31A.js";
import { a as y, f as S, o as I } from "./local-export-shard-worker-Bn9FW-T0.js";
import { h as R, i as A, n as T, r as W, s as F, t as b, v as E } from "./epoch-series-import-By49SGm_.js";
const j = k.Oakley1997;
function x(a) {
	return (/* @__PURE__ */ new Date(1e3 * a)).toISOString().slice(0, 19);
}
async function _(e, t, s, { wasm: i, epochSeconds: r, services: o }) {
	const n = {}, l = new Float64Array(e.axisY);
	if (e.algorithmResults[a.OAKLEY_1997] && l.length > 0) {
		const e = await i.scoreEpochs(R({
			algorithm: a.OAKLEY_1997,
			counts: l,
			epochSeconds: r,
			...null != t ? { config: { oakleyThreshold: t } } : {}
		})), s = E(e, l.length);
		s && (n[a.OAKLEY_1997] = s.slice().buffer);
	}
	if (e.algorithmResults[j] && s) {
		const a = (await o.warmVariantsForDay(function(a) {
			const e = (a) => a ? new Float64Array(a.slice(0)) : /* @__PURE__ */ new Float64Array();
			return {
				timestamps: e(a.timestamps),
				axisY: e(a.axisY),
				vectorMagnitude: e(a.vectorMagnitude),
				...a.axisX ? { axisX: e(a.axisX) } : {},
				...a.axisZ ? { axisZ: e(a.axisZ) } : {}
			};
		}(e), await o.withRecordingWakeThreshold({
			...s,
			variants: ["Oakley1997"]
		}, t), i))[j];
		a && (n[j] = a.slice().buffer);
	}
	return n;
}
const P = "Retained Actiware analysis could not be reconciled with restored settings.";
async function M(u, { paradigm: k, overrides: R, proposal: E, hasib: j, db: P, expectedStudyContentHash: M, signal: L, wasm: D = () => i(L), services: H }) {
	const C = void 0 !== M ? M : (await P.studySettings.where("key").equals("study").first())?.contentHash ?? null, O = await P.actiwareFileData.get(u.id), Y = O ? function(a) {
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
	}(O) : null, K = O?.actiwareSleepWake;
	if (!O || !Y) return {
		changed: !1,
		unavailable: "no readable Actiware analysis settings"
	};
	const q = g(u, k), N = f(u, k) === t.rest_intervals, X = q ? R : null, Z = v(Y.params, m(Y.params, X, Y.intervals)), J = q ? await async function(a, e, t) {
		if (e.rest_autoscore !== s.screens) return {
			proposal: e,
			nights: []
		};
		const i = [...(await d(a.id, t)).values()].sort((a, e) => a.date.localeCompare(e.date)), r = [], o = [];
		for (const s of i) {
			for (const a of new Float64Array(s.timestamps)) r.push(a);
			if (s.eventMarkerTimestamps) for (const a of new Float64Array(s.eventMarkerTimestamps)) o.push(a);
		}
		const n = new Map((await l(a.id, t)).map((a) => [a.analysisDate, a])), c = await t.studySettings.where("key").equals("study").first();
		return {
			proposal: e,
			nights: T(r, o, a.epochLengthSeconds, n, {
				start: c?.nightStartHour,
				end: c?.nightEndHour
			})
		};
	}(u, p(E), P) : null, V = (O.actiwareRestProposal?.key ?? W(null)) === W(J), z = q?.wakeThresholdFromRecording ? O.actiwareWakeThreshold ?? null : null;
	if (K && V && h(Z, K.params) && (O.oakleyThreshold ?? null) === z) return { changed: !1 };
	const B = (await P.actiwareStatisticsInputs.get(u.id))?.input ?? null;
	if (!B) return {
		changed: !1,
		unavailable: "no stored Actiware grid"
	};
	const Q = await e.waitFor(Promise.resolve(L ? i(L) : D())), $ = await e.waitFor(b(Y.intervals, B.epochs, Y.params, X, Q, B, L, J)), G = q?.wakeThresholdFromRecording ? $.wakeThreshold : null;
	if (K && V && h(Z, K.params) && (O.oakleyThreshold ?? null) === G) return { changed: !1 };
	if (!$.sleepWake) return {
		changed: !1,
		unavailable: "the core could not score Actiware Sleep/Wake" + ($.refusals.sleepWake ? `: ${$.refusals.sleepWake}` : "")
	};
	const U = [...(await d(u.id, P)).values()], aa = /* @__PURE__ */ new Map();
	for (const t of U) {
		L?.throwIfAborted();
		const s = await e.waitFor(F(Q, $.sleepWake, new Float64Array(t.timestamps), u.epochLengthSeconds));
		L?.throwIfAborted();
		const i = await e.waitFor(_(t, G, j, {
			wasm: Q,
			epochSeconds: u.epochLengthSeconds,
			services: H
		})), r = {
			...o(t.algorithmResults, (e, t) => t === a.ACTIWARE_SLEEP_WAKE ? void 0 : e),
			...i,
			...s ? { [a.ACTIWARE_SLEEP_WAKE]: s.sleep.buffer } : {}
		}, n = s && s.invalid.some((a) => 1 === a) ? s.invalid.buffer : null;
		aa.set(t.date, {
			algorithmResults: r,
			invalid: n
		});
	}
	const ea = (O.actiwareIntervals ?? []).filter((a) => "rest" === a.kind && "scorer" === a.origin), ta = Q.actiwareIntervals, sa = ea.length > 0 && ta ? await e.waitFor(S($.intervals, ea, {
		epochs: B.epochs,
		params: $.sleepWake.params,
		grid: {
			startTimestamp: $.sleepWake.startTimestamp,
			epochSeconds: $.sleepWake.epochSeconds
		},
		core: { actiwareIntervals: (a, e, t) => ta(a, e, t) }
	})) : $.intervals, ia = {
		...O,
		actiwareIntervals: sa,
		actiwareSleepWake: A($.sleepWake),
		actiwareStatistics: $.statistics ?? [],
		actiwareStatisticsNeedsRecompute: null === $.statistics,
		actiwareRecording: Y
	};
	return null != $.wakeThreshold ? ia.actiwareWakeThreshold = $.wakeThreshold : delete ia.actiwareWakeThreshold, null != G ? ia.oakleyThreshold = G : delete ia.oakleyThreshold, $.refusals.intervals ? ia.actiwareIntervalsRefusal = $.refusals.intervals : delete ia.actiwareIntervalsRefusal, $.restProposal ? ia.actiwareRestProposal = $.restProposal : delete ia.actiwareRestProposal, await r(P, [
		P.activityDays,
		P.scoredVariantMasks,
		P.actiwareFileData,
		P.actiwareStatisticsInputs,
		P.placementResults,
		P.files,
		P.studySettings,
		P.markers
	], async () => {
		const a = await P.files.get(u.id);
		if (!a || a.createdAt !== u.createdAt || a.sourceContentHash !== u.sourceContentHash) throw new Error("File changed during reanalysis");
		const t = await P.studySettings.where("key").equals("study").first();
		if ((a.seriesRevision ?? 0) !== (u.seriesRevision ?? 0) || (t?.contentHash ?? null) !== C) throw new Error("Reanalysis inputs changed");
		await n(u.id, new Map([...aa].map(([a, e]) => [a, {
			algorithmResults: e.algorithmResults,
			actiwareSleepWakeInvalid: e.invalid ?? void 0
		}])), P, L);
		const s = /* @__PURE__ */ new Map();
		for (const e of await P.markers.where("fileId").equals(u.id).toArray()) "auto_score" !== e.username && s.set(e.date, c(s.get(e.date), e));
		const r = [...s].filter(([, a]) => a.isInvalidNight).map(([a]) => a);
		if (N) {
			if (r.length > 0 || sa !== $.intervals) {
				const a = await e.waitFor(y(ia.actiwareIntervals, $.statisticsInput ?? B, r, (a) => Q.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null)));
				ia.actiwareStatistics = a ?? [], ia.actiwareStatisticsNeedsRecompute = null === a;
			}
		} else if (s.size > 0) {
			const a = await e.waitFor(I({
				file: ia,
				statisticsInput: $.statisticsInput ?? B
			}, s, (a) => Q.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null), i(L)));
			ia.actiwareStatistics = a ?? [], ia.actiwareStatisticsNeedsRecompute = null === a;
		}
		await P.actiwareFileData.put({
			fileId: u.id,
			...ia
		}), $.statisticsInput && await P.actiwareStatisticsInputs.put({
			fileId: u.id,
			input: $.statisticsInput
		}), await P.placementResults.delete(u.id), await w([u.id], P, L);
	}, L), { changed: !0 };
}
export { P as ACTIWARE_NOT_RECONCILED, M as reanalyzeActiwareFile };
