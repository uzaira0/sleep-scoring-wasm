import { Nr as a, d as e, n as t, sr as s } from "./background-jobs-BCPfjgGQ.js";
import { $t as i, Gr as r, Jr as n, L as o, Nn as l, X as c, Zt as d, _n as u, cn as w, fn as p, nn as h, p as m, rn as f, ut as g } from "./db-D_ccV0o1.js";
import { r as v } from "./local-ggir-hasib-variants-2ONU_Y-p.js";
import { E as k, m as y, p as S, w as I } from "./local-export-worker-DRuJMI8r.js";
import { g as R, i as A, n as T, r as W, s as F, t as b, y as E } from "./epoch-series-import-CSjcBhZB.js";
const x = v.Oakley1997;
function P(a) {
	return (/* @__PURE__ */ new Date(1e3 * a)).toISOString().slice(0, 19);
}
async function _(a, e, t, { wasm: i, epochSeconds: r, services: n }) {
	const o = {}, l = new Float64Array(a.axisY);
	if (a.algorithmResults[s.OAKLEY_1997] && l.length > 0) {
		const a = await i.scoreEpochs(R({
			algorithm: s.OAKLEY_1997,
			counts: l,
			epochSeconds: r,
			...null != e ? { config: { oakleyThreshold: e } } : {}
		})), t = E(a, l.length);
		t && (o[s.OAKLEY_1997] = t.slice().buffer);
	}
	if (a.algorithmResults[x] && t) {
		const s = (await n.warmVariantsForDay(function(a) {
			const e = (a) => a ? new Float64Array(a.slice(0)) : /* @__PURE__ */ new Float64Array();
			return {
				timestamps: e(a.timestamps),
				axisY: e(a.axisY),
				vectorMagnitude: e(a.vectorMagnitude),
				...a.axisX ? { axisX: e(a.axisX) } : {},
				...a.axisZ ? { axisZ: e(a.axisZ) } : {}
			};
		}(a), await n.withRecordingWakeThreshold({
			...t,
			variants: ["Oakley1997"]
		}, e), i))[x];
		s && (o[x] = s.slice().buffer);
	}
	return o;
}
const L = "Retained Actiware analysis could not be reconciled with restored settings.";
async function M(v, { paradigm: R, overrides: E, proposal: x, hasib: L, db: M, expectedStudyContentHash: D, signal: H, wasm: j = () => t(H), services: C }) {
	const N = void 0 !== D ? D : (await M.studySettings.where("key").equals("study").first())?.contentHash ?? null, O = await M.actiwareFileData.get(v.id), Y = O ? function(a) {
		if (a.actiwareRecording) return a.actiwareRecording;
		const e = a.actiwareSleepWake?.params;
		return e ? {
			params: e,
			intervals: (a.actiwareIntervals ?? []).filter((a) => "stored" === a.origin).map((a) => ({
				kind: a.kind,
				source: a.source,
				start: P(a.startTimestamp),
				end: P(a.endTimestamp),
				...a.analysis ? { analysis: a.analysis } : {}
			}))
		} : null;
	}(O) : null, K = O?.actiwareSleepWake;
	if (!O || !Y) return {
		changed: !1,
		unavailable: "no readable Actiware analysis settings"
	};
	const q = w(v, R), X = h(v, R) === n.rest_intervals, Z = q ? E : null, V = f(Y.params, i(Y.params, Z, Y.intervals)), $ = q ? await async function(a, e, t) {
		if (e.rest_autoscore !== r.screens) return {
			proposal: e,
			nights: []
		};
		const s = [...(await m(a.id, t)).values()].sort((a, e) => a.date.localeCompare(e.date)), i = [], n = [];
		for (const r of s) {
			for (const a of new Float64Array(r.timestamps)) i.push(a);
			if (r.eventMarkerTimestamps) for (const a of new Float64Array(r.eventMarkerTimestamps)) n.push(a);
		}
		const o = new Map((await c(a.id, t)).map((a) => [a.analysisDate, a])), l = await t.studySettings.where("key").equals("study").first();
		return {
			proposal: e,
			nights: T(i, n, a.epochLengthSeconds, o, {
				start: l?.nightStartHour,
				end: l?.nightEndHour
			})
		};
	}(v, u(x), M) : null, z = (O.actiwareRestProposal?.key ?? W(null)) === W($), G = q?.wakeThresholdFromRecording ? O.actiwareWakeThreshold ?? null : null;
	if (K && z && p(V, K.params) && (O.oakleyThreshold ?? null) === G) return { changed: !1 };
	const J = (await M.actiwareStatisticsInputs.get(v.id))?.input ?? null;
	if (!J) return {
		changed: !1,
		unavailable: "no stored Actiware grid"
	};
	const B = await a.waitFor(Promise.resolve(H ? t(H) : j())), Q = await a.waitFor(b(Y.intervals, J.epochs, Y.params, Z, B, J, H, $)), U = q?.wakeThresholdFromRecording ? Q.wakeThreshold : null;
	if (K && z && p(V, K.params) && (O.oakleyThreshold ?? null) === U) return { changed: !1 };
	if (!Q.sleepWake) return {
		changed: !1,
		unavailable: "the core could not score Actiware Sleep/Wake" + (Q.refusals.sleepWake ? `: ${Q.refusals.sleepWake}` : "")
	};
	const aa = [...(await m(v.id, M)).values()], ea = /* @__PURE__ */ new Map();
	for (const e of aa) {
		H?.throwIfAborted();
		const t = await a.waitFor(F(B, Q.sleepWake, new Float64Array(e.timestamps), v.epochLengthSeconds));
		H?.throwIfAborted();
		const i = await a.waitFor(_(e, U, L, {
			wasm: B,
			epochSeconds: v.epochLengthSeconds,
			services: C
		})), r = {
			...d(e.algorithmResults, (a, e) => e === s.ACTIWARE_SLEEP_WAKE ? void 0 : a),
			...i,
			...t ? { [s.ACTIWARE_SLEEP_WAKE]: t.sleep.buffer } : {}
		}, n = t && t.invalid.some((a) => 1 === a) ? t.invalid.buffer : null;
		ea.set(e.date, {
			algorithmResults: r,
			invalid: n
		});
	}
	const ta = (O.actiwareIntervals ?? []).filter((a) => "rest" === a.kind && "scorer" === a.origin), sa = B.actiwareIntervals, ia = ta.length > 0 && sa ? await a.waitFor(I(Q.intervals, ta, {
		epochs: J.epochs,
		params: Q.sleepWake.params,
		grid: {
			startTimestamp: Q.sleepWake.startTimestamp,
			epochSeconds: Q.sleepWake.epochSeconds
		},
		core: { actiwareIntervals: (a, e, t) => sa(a, e, t) }
	})) : Q.intervals, ra = {
		...O,
		actiwareIntervals: ia,
		actiwareSleepWake: A(Q.sleepWake),
		actiwareStatistics: Q.statistics ?? [],
		actiwareStatisticsNeedsRecompute: null === Q.statistics,
		actiwareRecording: Y
	};
	return null != Q.wakeThreshold ? ra.actiwareWakeThreshold = Q.wakeThreshold : delete ra.actiwareWakeThreshold, null != U ? ra.oakleyThreshold = U : delete ra.oakleyThreshold, Q.refusals.intervals ? ra.actiwareIntervalsRefusal = Q.refusals.intervals : delete ra.actiwareIntervalsRefusal, Q.restProposal ? ra.actiwareRestProposal = Q.restProposal : delete ra.actiwareRestProposal, await e(M, [
		M.activityDays,
		M.scoredVariantMasks,
		M.actiwareFileData,
		M.actiwareStatisticsInputs,
		M.placementResults,
		M.files,
		M.studySettings,
		M.markers
	], async () => {
		const e = await M.files.get(v.id);
		if (!e || e.createdAt !== v.createdAt || e.sourceContentHash !== v.sourceContentHash) throw new Error("File changed during reanalysis");
		const s = await M.studySettings.where("key").equals("study").first();
		if ((e.seriesRevision ?? 0) !== (v.seriesRevision ?? 0) || (s?.contentHash ?? null) !== N) throw new Error("Reanalysis inputs changed");
		await o(v.id, new Map([...ea].map(([a, e]) => [a, {
			algorithmResults: e.algorithmResults,
			actiwareSleepWakeInvalid: e.invalid ?? void 0
		}])), M, H);
		const i = g(await M.markers.where("fileId").equals(v.id).toArray()), r = [...i].filter(([, a]) => a.isInvalidNight).map(([a]) => a);
		if (X) {
			if (r.length > 0 || ia !== Q.intervals) {
				const e = await a.waitFor(k(ra.actiwareIntervals, t(H)).then((a) => S(a, Q.statisticsInput ?? J, r, (a) => B.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null))));
				ra.actiwareStatistics = e ?? [], ra.actiwareStatisticsNeedsRecompute = null === e;
			}
		} else if (i.size > 0) {
			const e = await a.waitFor(y({
				file: ra,
				statisticsInput: Q.statisticsInput ?? J
			}, i, (a) => B.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null), t(H)));
			ra.actiwareStatistics = e ?? [], ra.actiwareStatisticsNeedsRecompute = null === e;
		}
		await M.actiwareFileData.put({
			fileId: v.id,
			...ra
		}), Q.statisticsInput && await M.actiwareStatisticsInputs.put({
			fileId: v.id,
			input: Q.statisticsInput
		}), await M.placementResults.delete(v.id), await l([v.id], M, H);
	}, H), { changed: !0 };
}
export { L as ACTIWARE_NOT_RECONCILED, M as reanalyzeActiwareFile };
