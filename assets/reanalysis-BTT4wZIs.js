import { Ir as a, Tn as e, d as t, er as s, n as i } from "./background-jobs-BxSD4ZPh.js";
import { F as r, J as n, Kt as o, Vr as l, Wr as c, Wt as d, Xt as u, Yt as w, an as p, f as h, jn as m, rt as f, tn as g, un as v } from "./db-Cz_Pn9FU.js";
import { r as k } from "./local-ggir-hasib-variants-BvbrBcdI.js";
import { E as y, m as S, p as R, w as I } from "./local-export-shard-worker-ChwlExsO.js";
import { S as A, T, a as W, c as F, l as b, p as E, t as x, u as P } from "./ingest-DJfSJ8Ya.js";
const _ = k.Oakley1997;
function L(a) {
	return (/* @__PURE__ */ new Date(1e3 * a)).toISOString().slice(0, 19);
}
async function M(a, t, s, { wasm: i, epochSeconds: r, services: n }) {
	const o = {}, l = new Float64Array(a.axisY);
	if (a.algorithmResults[e.OAKLEY_1997] && l.length > 0) {
		const a = await i.scoreEpochs(A({
			algorithm: e.OAKLEY_1997,
			counts: l,
			epochSeconds: r,
			...null != t ? { config: { oakleyThreshold: t } } : {}
		})), s = T(a, l.length);
		s && (o[e.OAKLEY_1997] = s.slice().buffer);
	}
	if (a.algorithmResults[_] && s) {
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
		}, t), i))[_];
		e && (o[_] = e.slice().buffer);
	}
	return o;
}
const j = "Retained Actiware analysis could not be reconciled with restored settings.";
async function H(k, { paradigm: A, overrides: T, proposal: _, hasib: j, db: H, expectedStudyContentHash: Y, signal: C, wasm: D = () => i(C), services: K }) {
	const O = void 0 !== Y ? Y : (await H.studySettings.where("key").equals("study").first())?.contentHash ?? null, q = await H.actiwareFileData.get(k.id), N = q ? function(a) {
		if (a.actiwareRecording) return a.actiwareRecording;
		const e = a.actiwareSleepWake?.params;
		return e ? {
			params: e,
			intervals: (a.actiwareIntervals ?? []).filter((a) => "stored" === a.origin).map((a) => ({
				kind: a.kind,
				source: a.source,
				start: L(a.startTimestamp),
				end: L(a.endTimestamp),
				...a.analysis ? { analysis: a.analysis } : {}
			}))
		} : null;
	}(q) : null, X = q?.actiwareSleepWake;
	if (!q || !N) return {
		changed: !1,
		unavailable: "no readable Actiware analysis settings"
	};
	const V = g(k, A), Z = w(k, A) === c.rest_intervals, z = V ? T : null, J = u(N.params, o(N.params, z, N.intervals)), $ = V ? await async function(a, e, t, s) {
		if (e.rest_autoscore !== l.screens) return {
			proposal: e,
			nights: []
		};
		const i = [...(await h(a.id, t)).values()].sort((a, e) => a.date.localeCompare(e.date)), r = [], o = [];
		for (const n of i) {
			for (const a of new Float64Array(n.timestamps)) r.push(a);
			if (n.eventMarkerTimestamps) for (const a of new Float64Array(n.eventMarkerTimestamps)) o.push(a);
		}
		const c = new Map((await n(a.id, t)).map((a) => [a.analysisDate, a])), d = await t.studySettings.where("key").equals("study").first();
		return {
			proposal: e,
			nights: await b(s, r, o, a.epochLengthSeconds, c, {
				start: d?.nightStartHour,
				end: d?.nightEndHour
			})
		};
	}(k, v(_), H, a()) : null, B = (q.actiwareRestProposal?.key ?? P(null)) === P($), G = V?.wakeThresholdFromRecording ? q.actiwareWakeThreshold ?? null : null;
	if (X && B && p(J, X.params) && (q.oakleyThreshold ?? null) === G) return { changed: !1 };
	const Q = (await H.actiwareStatisticsInputs.get(k.id))?.input ?? null;
	if (!Q) return {
		changed: !1,
		unavailable: "no stored Actiware grid"
	};
	const U = await s.waitFor(Promise.resolve(C ? i(C) : D())), aa = await s.waitFor(F(N.intervals, Q.epochs, N.params, z, U, Q, C, $)), ea = V?.wakeThresholdFromRecording ? aa.wakeThreshold : null;
	if (X && B && p(J, X.params) && (q.oakleyThreshold ?? null) === ea) return { changed: !1 };
	if (!aa.sleepWake) return {
		changed: !1,
		unavailable: "the core could not score Actiware Sleep/Wake" + (aa.refusals.sleepWake ? `: ${aa.refusals.sleepWake}` : "")
	};
	const ta = [...(await h(k.id, H)).values()], sa = /* @__PURE__ */ new Map();
	for (const a of ta) {
		C?.throwIfAborted();
		const t = await s.waitFor(E(U, aa.sleepWake, new Float64Array(a.timestamps), k.epochLengthSeconds));
		C?.throwIfAborted();
		const i = await s.waitFor(M(a, ea, j, {
			wasm: U,
			epochSeconds: k.epochLengthSeconds,
			services: K
		})), r = {
			...d(a.algorithmResults, (a, t) => t === e.ACTIWARE_SLEEP_WAKE ? void 0 : a),
			...i,
			...t ? { [e.ACTIWARE_SLEEP_WAKE]: t.sleep.buffer } : {}
		}, n = t && t.invalid.some((a) => 1 === a) ? t.invalid.buffer : null;
		sa.set(a.date, {
			algorithmResults: r,
			invalid: n
		});
	}
	const ia = (q.actiwareIntervals ?? []).filter((a) => "rest" === a.kind && "scorer" === a.origin), ra = q.actiwareRemovedRests ?? [], na = ia.length > 0 || ra.length > 0 ? await s.waitFor(I(aa.intervals, ia, ra, {
		epochs: Q.epochs,
		params: aa.sleepWake.params,
		grid: {
			startTimestamp: aa.sleepWake.startTimestamp,
			epochSeconds: aa.sleepWake.epochSeconds
		},
		core: { actiwareIntervals: (a, e, t) => U.actiwareIntervals(a, e, t) }
	})) : aa.intervals, oa = {
		...q,
		actiwareIntervals: na,
		actiwareSleepWake: x(aa.sleepWake),
		actiwareStatistics: aa.statistics ?? [],
		actiwareStatisticsNeedsRecompute: null === aa.statistics,
		actiwareRecording: N
	};
	return null != aa.wakeThreshold ? oa.actiwareWakeThreshold = aa.wakeThreshold : delete oa.actiwareWakeThreshold, null != ea ? oa.oakleyThreshold = ea : delete oa.oakleyThreshold, aa.refusals.intervals ? oa.actiwareIntervalsRefusal = aa.refusals.intervals : delete oa.actiwareIntervalsRefusal, aa.restProposal ? oa.actiwareRestProposal = aa.restProposal : delete oa.actiwareRestProposal, await t(H, [
		H.activityDays,
		H.scoredVariantMasks,
		H.actiwareFileData,
		H.actiwareStatisticsInputs,
		H.placementResults,
		H.files,
		H.studySettings,
		H.markers
	], async () => {
		const a = await H.files.get(k.id);
		if (!a || a.createdAt !== k.createdAt || a.sourceContentHash !== k.sourceContentHash) throw new Error("File changed during reanalysis");
		const e = await H.studySettings.where("key").equals("study").first();
		if ((a.seriesRevision ?? 0) !== (k.seriesRevision ?? 0) || (e?.contentHash ?? null) !== O) throw new Error("Reanalysis inputs changed");
		await r(k.id, new Map([...sa].map(([a, e]) => [a, {
			algorithmResults: e.algorithmResults,
			actiwareSleepWakeInvalid: e.invalid ?? void 0
		}])), H, C);
		const t = f(await H.markers.where("fileId").equals(k.id).toArray()), n = [...t].filter(([, a]) => a.isInvalidNight).map(([a]) => a);
		if (Z) {
			if (n.length > 0 || na !== aa.intervals) {
				const a = await s.waitFor(y(oa.actiwareIntervals, i(C)).then((a) => R(a, aa.statisticsInput ?? Q, n, (a) => U.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null))));
				oa.actiwareStatistics = a ?? [], oa.actiwareStatisticsNeedsRecompute = null === a;
			}
		} else if (t.size > 0) {
			const a = await s.waitFor(S({
				file: oa,
				statisticsInput: aa.statisticsInput ?? Q
			}, t, (a) => U.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null), i(C)));
			oa.actiwareStatistics = a ?? [], oa.actiwareStatisticsNeedsRecompute = null === a;
		}
		await W(H, {
			fileId: k.id,
			...oa
		}), aa.statisticsInput && await H.actiwareStatisticsInputs.put({
			fileId: k.id,
			input: aa.statisticsInput
		}), await H.placementResults.delete(k.id), await m([k.id], H, C);
	}, C), { changed: !0 };
}
export { j as ACTIWARE_NOT_RECONCILED, H as reanalyzeActiwareFile };
