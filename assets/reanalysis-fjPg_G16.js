import { Yn as a, bn as e, d as t, n as s } from "./background-jobs-CPaTeltP.js";
import { $t as i, An as r, Br as n, I as o, Jt as l, Ur as c, Xt as d, Y as u, an as w, en as p, ln as h, mn as m, p as f, st as g } from "./db-DGizvZzX.js";
import { r as v } from "./local-ggir-hasib-variants-COlfVs-O.js";
import { E as k, m as y, p as S, w as I } from "./local-export-shard-worker-Okf1DPvY.js";
import { g as R, i as A, n as T, r as W, s as F, t as b, y as E } from "./epoch-series-import-DiJ-G1_4.js";
const x = v.Oakley1997;
function P(a) {
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
	if (a.algorithmResults[x] && s) {
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
		}, t), i))[x];
		e && (o[x] = e.slice().buffer);
	}
	return o;
}
const L = "Retained Actiware analysis could not be reconciled with restored settings.";
async function M(v, { paradigm: R, overrides: E, proposal: x, hasib: L, db: M, expectedStudyContentHash: Y, signal: D, wasm: H = () => s(D), services: j }) {
	const C = void 0 !== Y ? Y : (await M.studySettings.where("key").equals("study").first())?.contentHash ?? null, O = await M.actiwareFileData.get(v.id), K = O ? function(a) {
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
	}(O) : null, q = O?.actiwareSleepWake;
	if (!O || !K) return {
		changed: !1,
		unavailable: "no readable Actiware analysis settings"
	};
	const N = w(v, R), X = i(v, R) === c.rest_intervals, Z = N ? E : null, V = p(K.params, d(K.params, Z, K.intervals)), $ = N ? await async function(a, e, t) {
		if (e.rest_autoscore !== n.screens) return {
			proposal: e,
			nights: []
		};
		const s = [...(await f(a.id, t)).values()].sort((a, e) => a.date.localeCompare(e.date)), i = [], r = [];
		for (const n of s) {
			for (const a of new Float64Array(n.timestamps)) i.push(a);
			if (n.eventMarkerTimestamps) for (const a of new Float64Array(n.eventMarkerTimestamps)) r.push(a);
		}
		const o = new Map((await u(a.id, t)).map((a) => [a.analysisDate, a])), l = await t.studySettings.where("key").equals("study").first();
		return {
			proposal: e,
			nights: T(i, r, a.epochLengthSeconds, o, {
				start: l?.nightStartHour,
				end: l?.nightEndHour
			})
		};
	}(v, m(x), M) : null, z = (O.actiwareRestProposal?.key ?? W(null)) === W($), B = N?.wakeThresholdFromRecording ? O.actiwareWakeThreshold ?? null : null;
	if (q && z && h(V, q.params) && (O.oakleyThreshold ?? null) === B) return { changed: !1 };
	const J = (await M.actiwareStatisticsInputs.get(v.id))?.input ?? null;
	if (!J) return {
		changed: !1,
		unavailable: "no stored Actiware grid"
	};
	const U = await a.waitFor(Promise.resolve(D ? s(D) : H())), G = await a.waitFor(b(K.intervals, J.epochs, K.params, Z, U, J, D, $)), Q = N?.wakeThresholdFromRecording ? G.wakeThreshold : null;
	if (q && z && h(V, q.params) && (O.oakleyThreshold ?? null) === Q) return { changed: !1 };
	if (!G.sleepWake) return {
		changed: !1,
		unavailable: "the core could not score Actiware Sleep/Wake" + (G.refusals.sleepWake ? `: ${G.refusals.sleepWake}` : "")
	};
	const aa = [...(await f(v.id, M)).values()], ea = /* @__PURE__ */ new Map();
	for (const t of aa) {
		D?.throwIfAborted();
		const s = await a.waitFor(F(U, G.sleepWake, new Float64Array(t.timestamps), v.epochLengthSeconds));
		D?.throwIfAborted();
		const i = await a.waitFor(_(t, Q, L, {
			wasm: U,
			epochSeconds: v.epochLengthSeconds,
			services: j
		})), r = {
			...l(t.algorithmResults, (a, t) => t === e.ACTIWARE_SLEEP_WAKE ? void 0 : a),
			...i,
			...s ? { [e.ACTIWARE_SLEEP_WAKE]: s.sleep.buffer } : {}
		}, n = s && s.invalid.some((a) => 1 === a) ? s.invalid.buffer : null;
		ea.set(t.date, {
			algorithmResults: r,
			invalid: n
		});
	}
	const ta = (O.actiwareIntervals ?? []).filter((a) => "rest" === a.kind && "scorer" === a.origin), sa = U.actiwareIntervals, ia = ta.length > 0 && sa ? await a.waitFor(I(G.intervals, ta, {
		epochs: J.epochs,
		params: G.sleepWake.params,
		grid: {
			startTimestamp: G.sleepWake.startTimestamp,
			epochSeconds: G.sleepWake.epochSeconds
		},
		core: { actiwareIntervals: (a, e, t) => sa(a, e, t) }
	})) : G.intervals, ra = {
		...O,
		actiwareIntervals: ia,
		actiwareSleepWake: A(G.sleepWake),
		actiwareStatistics: G.statistics ?? [],
		actiwareStatisticsNeedsRecompute: null === G.statistics,
		actiwareRecording: K
	};
	return null != G.wakeThreshold ? ra.actiwareWakeThreshold = G.wakeThreshold : delete ra.actiwareWakeThreshold, null != Q ? ra.oakleyThreshold = Q : delete ra.oakleyThreshold, G.refusals.intervals ? ra.actiwareIntervalsRefusal = G.refusals.intervals : delete ra.actiwareIntervalsRefusal, G.restProposal ? ra.actiwareRestProposal = G.restProposal : delete ra.actiwareRestProposal, await t(M, [
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
		const t = await M.studySettings.where("key").equals("study").first();
		if ((e.seriesRevision ?? 0) !== (v.seriesRevision ?? 0) || (t?.contentHash ?? null) !== C) throw new Error("Reanalysis inputs changed");
		await o(v.id, new Map([...ea].map(([a, e]) => [a, {
			algorithmResults: e.algorithmResults,
			actiwareSleepWakeInvalid: e.invalid ?? void 0
		}])), M, D);
		const i = g(await M.markers.where("fileId").equals(v.id).toArray()), n = [...i].filter(([, a]) => a.isInvalidNight).map(([a]) => a);
		if (X) {
			if (n.length > 0 || ia !== G.intervals) {
				const e = await a.waitFor(k(ra.actiwareIntervals, s(D)).then((a) => S(a, G.statisticsInput ?? J, n, (a) => U.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null))));
				ra.actiwareStatistics = e ?? [], ra.actiwareStatisticsNeedsRecompute = null === e;
			}
		} else if (i.size > 0) {
			const e = await a.waitFor(y({
				file: ra,
				statisticsInput: G.statisticsInput ?? J
			}, i, (a) => U.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null), s(D)));
			ra.actiwareStatistics = e ?? [], ra.actiwareStatisticsNeedsRecompute = null === e;
		}
		await M.actiwareFileData.put({
			fileId: v.id,
			...ra
		}), G.statisticsInput && await M.actiwareStatisticsInputs.put({
			fileId: v.id,
			input: G.statisticsInput
		}), await M.placementResults.delete(v.id), await r([v.id], M, D);
	}, D), { changed: !0 };
}
export { L as ACTIWARE_NOT_RECONCILED, M as reanalyzeActiwareFile };
