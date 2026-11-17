import { Sn as a, Zn as e, d as t, n as s } from "./background-jobs-BvgoU31P.js";
import { $t as i, F as r, J as n, Pn as o, Qt as l, Wr as c, Yt as d, cn as u, f as w, in as p, ot as h, pn as m, qr as f, qt as g } from "./db-qymA_MI3.js";
import { r as v } from "./local-ggir-hasib-variants-CBVkpTsu.js";
import { E as k, m as y, p as S, w as I } from "./local-export-shard-worker-B9aPVtk9.js";
import { S as R, T as A, a as T, c as W, l as F, p as b, t as E, u as x } from "./ingest-DFaoPBCc.js";
const P = v.Oakley1997;
function _(a) {
	return (/* @__PURE__ */ new Date(1e3 * a)).toISOString().slice(0, 19);
}
async function L(e, t, s, { wasm: i, epochSeconds: r, services: n }) {
	const o = {}, l = new Float64Array(e.axisY);
	if (e.algorithmResults[a.OAKLEY_1997] && l.length > 0) {
		const e = await i.scoreEpochs(R({
			algorithm: a.OAKLEY_1997,
			counts: l,
			epochSeconds: r,
			...null != t ? { config: { oakleyThreshold: t } } : {}
		})), s = A(e, l.length);
		s && (o[a.OAKLEY_1997] = s.slice().buffer);
	}
	if (e.algorithmResults[P] && s) {
		const a = (await n.warmVariantsForDay(function(a) {
			const e = (a) => a ? new Float64Array(a.slice(0)) : /* @__PURE__ */ new Float64Array();
			return {
				timestamps: e(a.timestamps),
				axisY: e(a.axisY),
				vectorMagnitude: e(a.vectorMagnitude),
				...a.axisX ? { axisX: e(a.axisX) } : {},
				...a.axisZ ? { axisZ: e(a.axisZ) } : {}
			};
		}(e), await n.withRecordingWakeThreshold({
			...s,
			variants: ["Oakley1997"]
		}, t), i))[P];
		a && (o[P] = a.slice().buffer);
	}
	return o;
}
const M = "Retained Actiware analysis could not be reconciled with restored settings.";
async function H(v, { paradigm: R, overrides: A, proposal: P, hasib: M, db: H, expectedStudyContentHash: Y, signal: j, wasm: q = () => s(j), services: C }) {
	const D = void 0 !== Y ? Y : (await H.studySettings.where("key").equals("study").first())?.contentHash ?? null, O = await H.actiwareFileData.get(v.id), K = O ? function(a) {
		if (a.actiwareRecording) return a.actiwareRecording;
		const e = a.actiwareSleepWake?.params;
		return e ? {
			params: e,
			intervals: (a.actiwareIntervals ?? []).filter((a) => "stored" === a.origin).map((a) => ({
				kind: a.kind,
				source: a.source,
				start: _(a.startTimestamp),
				end: _(a.endTimestamp),
				...a.analysis ? { analysis: a.analysis } : {}
			}))
		} : null;
	}(O) : null, N = O?.actiwareSleepWake;
	if (!O || !K) return {
		changed: !1,
		unavailable: "no readable Actiware analysis settings"
	};
	const Z = p(v, R), X = l(v, R) === f.rest_intervals, V = Z ? A : null, $ = i(K.params, d(K.params, V, K.intervals)), z = Z ? await async function(a, e, t) {
		if (e.rest_autoscore !== c.screens) return {
			proposal: e,
			nights: []
		};
		const s = [...(await w(a.id, t)).values()].sort((a, e) => a.date.localeCompare(e.date)), i = [], r = [];
		for (const n of s) {
			for (const a of new Float64Array(n.timestamps)) i.push(a);
			if (n.eventMarkerTimestamps) for (const a of new Float64Array(n.eventMarkerTimestamps)) r.push(a);
		}
		const o = new Map((await n(a.id, t)).map((a) => [a.analysisDate, a])), l = await t.studySettings.where("key").equals("study").first();
		return {
			proposal: e,
			nights: F(i, r, a.epochLengthSeconds, o, {
				start: l?.nightStartHour,
				end: l?.nightEndHour
			})
		};
	}(v, m(P), H) : null, J = (O.actiwareRestProposal?.key ?? x(null)) === x(z), Q = Z?.wakeThresholdFromRecording ? O.actiwareWakeThreshold ?? null : null;
	if (N && J && u($, N.params) && (O.oakleyThreshold ?? null) === Q) return { changed: !1 };
	const B = (await H.actiwareStatisticsInputs.get(v.id))?.input ?? null;
	if (!B) return {
		changed: !1,
		unavailable: "no stored Actiware grid"
	};
	const G = await e.waitFor(Promise.resolve(j ? s(j) : q())), U = await e.waitFor(W(K.intervals, B.epochs, K.params, V, G, B, j, z)), aa = Z?.wakeThresholdFromRecording ? U.wakeThreshold : null;
	if (N && J && u($, N.params) && (O.oakleyThreshold ?? null) === aa) return { changed: !1 };
	if (!U.sleepWake) return {
		changed: !1,
		unavailable: "the core could not score Actiware Sleep/Wake" + (U.refusals.sleepWake ? `: ${U.refusals.sleepWake}` : "")
	};
	const ea = [...(await w(v.id, H)).values()], ta = /* @__PURE__ */ new Map();
	for (const t of ea) {
		j?.throwIfAborted();
		const s = await e.waitFor(b(G, U.sleepWake, new Float64Array(t.timestamps), v.epochLengthSeconds));
		j?.throwIfAborted();
		const i = await e.waitFor(L(t, aa, M, {
			wasm: G,
			epochSeconds: v.epochLengthSeconds,
			services: C
		})), r = {
			...g(t.algorithmResults, (e, t) => t === a.ACTIWARE_SLEEP_WAKE ? void 0 : e),
			...i,
			...s ? { [a.ACTIWARE_SLEEP_WAKE]: s.sleep.buffer } : {}
		}, n = s && s.invalid.some((a) => 1 === a) ? s.invalid.buffer : null;
		ta.set(t.date, {
			algorithmResults: r,
			invalid: n
		});
	}
	const sa = (O.actiwareIntervals ?? []).filter((a) => "rest" === a.kind && "scorer" === a.origin), ia = G.actiwareIntervals, ra = sa.length > 0 && ia ? await e.waitFor(I(U.intervals, sa, {
		epochs: B.epochs,
		params: U.sleepWake.params,
		grid: {
			startTimestamp: U.sleepWake.startTimestamp,
			epochSeconds: U.sleepWake.epochSeconds
		},
		core: { actiwareIntervals: (a, e, t) => ia(a, e, t) }
	})) : U.intervals, na = {
		...O,
		actiwareIntervals: ra,
		actiwareSleepWake: E(U.sleepWake),
		actiwareStatistics: U.statistics ?? [],
		actiwareStatisticsNeedsRecompute: null === U.statistics,
		actiwareRecording: K
	};
	return null != U.wakeThreshold ? na.actiwareWakeThreshold = U.wakeThreshold : delete na.actiwareWakeThreshold, null != aa ? na.oakleyThreshold = aa : delete na.oakleyThreshold, U.refusals.intervals ? na.actiwareIntervalsRefusal = U.refusals.intervals : delete na.actiwareIntervalsRefusal, U.restProposal ? na.actiwareRestProposal = U.restProposal : delete na.actiwareRestProposal, await t(H, [
		H.activityDays,
		H.scoredVariantMasks,
		H.actiwareFileData,
		H.actiwareStatisticsInputs,
		H.placementResults,
		H.files,
		H.studySettings,
		H.markers
	], async () => {
		const a = await H.files.get(v.id);
		if (!a || a.createdAt !== v.createdAt || a.sourceContentHash !== v.sourceContentHash) throw new Error("File changed during reanalysis");
		const t = await H.studySettings.where("key").equals("study").first();
		if ((a.seriesRevision ?? 0) !== (v.seriesRevision ?? 0) || (t?.contentHash ?? null) !== D) throw new Error("Reanalysis inputs changed");
		await r(v.id, new Map([...ta].map(([a, e]) => [a, {
			algorithmResults: e.algorithmResults,
			actiwareSleepWakeInvalid: e.invalid ?? void 0
		}])), H, j);
		const i = h(await H.markers.where("fileId").equals(v.id).toArray()), n = [...i].filter(([, a]) => a.isInvalidNight).map(([a]) => a);
		if (X) {
			if (n.length > 0 || ra !== U.intervals) {
				const a = await e.waitFor(k(na.actiwareIntervals, s(j)).then((a) => S(a, U.statisticsInput ?? B, n, (a) => G.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null))));
				na.actiwareStatistics = a ?? [], na.actiwareStatisticsNeedsRecompute = null === a;
			}
		} else if (i.size > 0) {
			const a = await e.waitFor(y({
				file: na,
				statisticsInput: U.statisticsInput ?? B
			}, i, (a) => G.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null), s(j)));
			na.actiwareStatistics = a ?? [], na.actiwareStatisticsNeedsRecompute = null === a;
		}
		await T(H, {
			fileId: v.id,
			...na
		}), U.statisticsInput && await H.actiwareStatisticsInputs.put({
			fileId: v.id,
			input: U.statisticsInput
		}), await H.placementResults.delete(v.id), await o([v.id], H, j);
	}, j), { changed: !0 };
}
export { M as ACTIWARE_NOT_RECONCILED, H as reanalyzeActiwareFile };
