import { Fr as a, d as e, lr as t, n as s } from "./background-jobs-DUPAIf6B.js";
import { I as i, Ln as r, Qr as n, Qt as o, Xt as l, Y as c, Yr as d, dn as u, f as w, gn as p, lt as h, nn as m, sn as f, tn as g } from "./db-BYjE9wuK.js";
import { r as v } from "./local-ggir-hasib-variants-D3DaYJUe.js";
import { E as k, m as y, p as S, w as R } from "./local-export-worker-Bfbe3q0w.js";
import { S as I, T as A, a as T, c as W, l as F, p as b, t as E, u as x } from "./ingest-YC6Wl-9X.js";
const P = v.Oakley1997;
function L(a) {
	return (/* @__PURE__ */ new Date(1e3 * a)).toISOString().slice(0, 19);
}
async function _(a, e, s, { wasm: i, epochSeconds: r, services: n }) {
	const o = {}, l = new Float64Array(a.axisY);
	if (a.algorithmResults[t.OAKLEY_1997] && l.length > 0) {
		const a = await i.scoreEpochs(I({
			algorithm: t.OAKLEY_1997,
			counts: l,
			epochSeconds: r,
			...null != e ? { config: { oakleyThreshold: e } } : {}
		})), s = A(a, l.length);
		s && (o[t.OAKLEY_1997] = s.slice().buffer);
	}
	if (a.algorithmResults[P] && s) {
		const t = (await n.warmVariantsForDay(function(a) {
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
		}, e), i))[P];
		t && (o[P] = t.slice().buffer);
	}
	return o;
}
const M = "Retained Actiware analysis could not be reconciled with restored settings.";
async function Y(v, { paradigm: I, overrides: A, proposal: P, hasib: M, db: Y, expectedStudyContentHash: H, signal: j, wasm: C = () => s(j), services: D }) {
	const O = void 0 !== H ? H : (await Y.studySettings.where("key").equals("study").first())?.contentHash ?? null, K = await Y.actiwareFileData.get(v.id), q = K ? function(a) {
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
	}(K) : null, N = K?.actiwareSleepWake;
	if (!K || !q) return {
		changed: !1,
		unavailable: "no readable Actiware analysis settings"
	};
	const X = f(v, I), Z = g(v, I) === n.rest_intervals, Q = X ? A : null, V = m(q.params, o(q.params, Q, q.intervals)), z = X ? await async function(a, e, t) {
		if (e.rest_autoscore !== d.screens) return {
			proposal: e,
			nights: []
		};
		const s = [...(await w(a.id, t)).values()].sort((a, e) => a.date.localeCompare(e.date)), i = [], r = [];
		for (const l of s) {
			for (const a of new Float64Array(l.timestamps)) i.push(a);
			if (l.eventMarkerTimestamps) for (const a of new Float64Array(l.eventMarkerTimestamps)) r.push(a);
		}
		const n = new Map((await c(a.id, t)).map((a) => [a.analysisDate, a])), o = await t.studySettings.where("key").equals("study").first();
		return {
			proposal: e,
			nights: F(i, r, a.epochLengthSeconds, n, {
				start: o?.nightStartHour,
				end: o?.nightEndHour
			})
		};
	}(v, p(P), Y) : null, $ = (K.actiwareRestProposal?.key ?? x(null)) === x(z), B = X?.wakeThresholdFromRecording ? K.actiwareWakeThreshold ?? null : null;
	if (N && $ && u(V, N.params) && (K.oakleyThreshold ?? null) === B) return { changed: !1 };
	const G = (await Y.actiwareStatisticsInputs.get(v.id))?.input ?? null;
	if (!G) return {
		changed: !1,
		unavailable: "no stored Actiware grid"
	};
	const J = await a.waitFor(Promise.resolve(j ? s(j) : C())), U = await a.waitFor(W(q.intervals, G.epochs, q.params, Q, J, G, j, z)), aa = X?.wakeThresholdFromRecording ? U.wakeThreshold : null;
	if (N && $ && u(V, N.params) && (K.oakleyThreshold ?? null) === aa) return { changed: !1 };
	if (!U.sleepWake) return {
		changed: !1,
		unavailable: "the core could not score Actiware Sleep/Wake" + (U.refusals.sleepWake ? `: ${U.refusals.sleepWake}` : "")
	};
	const ea = [...(await w(v.id, Y)).values()], ta = /* @__PURE__ */ new Map();
	for (const e of ea) {
		j?.throwIfAborted();
		const s = await a.waitFor(b(J, U.sleepWake, new Float64Array(e.timestamps), v.epochLengthSeconds));
		j?.throwIfAborted();
		const i = await a.waitFor(_(e, aa, M, {
			wasm: J,
			epochSeconds: v.epochLengthSeconds,
			services: D
		})), r = {
			...l(e.algorithmResults, (a, e) => e === t.ACTIWARE_SLEEP_WAKE ? void 0 : a),
			...i,
			...s ? { [t.ACTIWARE_SLEEP_WAKE]: s.sleep.buffer } : {}
		}, n = s && s.invalid.some((a) => 1 === a) ? s.invalid.buffer : null;
		ta.set(e.date, {
			algorithmResults: r,
			invalid: n
		});
	}
	const sa = (K.actiwareIntervals ?? []).filter((a) => "rest" === a.kind && "scorer" === a.origin), ia = K.actiwareRemovedRests ?? [], ra = sa.length > 0 || ia.length > 0 ? await a.waitFor(R(U.intervals, sa, ia, {
		epochs: G.epochs,
		params: U.sleepWake.params,
		grid: {
			startTimestamp: U.sleepWake.startTimestamp,
			epochSeconds: U.sleepWake.epochSeconds
		},
		core: { actiwareIntervals: (a, e, t) => J.actiwareIntervals(a, e, t) }
	})) : U.intervals, na = {
		...K,
		actiwareIntervals: ra,
		actiwareSleepWake: E(U.sleepWake),
		actiwareStatistics: U.statistics ?? [],
		actiwareStatisticsNeedsRecompute: null === U.statistics,
		actiwareRecording: q
	};
	return null != U.wakeThreshold ? na.actiwareWakeThreshold = U.wakeThreshold : delete na.actiwareWakeThreshold, null != aa ? na.oakleyThreshold = aa : delete na.oakleyThreshold, U.refusals.intervals ? na.actiwareIntervalsRefusal = U.refusals.intervals : delete na.actiwareIntervalsRefusal, U.restProposal ? na.actiwareRestProposal = U.restProposal : delete na.actiwareRestProposal, await e(Y, [
		Y.activityDays,
		Y.scoredVariantMasks,
		Y.actiwareFileData,
		Y.actiwareStatisticsInputs,
		Y.placementResults,
		Y.files,
		Y.studySettings,
		Y.markers
	], async () => {
		const e = await Y.files.get(v.id);
		if (!e || e.createdAt !== v.createdAt || e.sourceContentHash !== v.sourceContentHash) throw new Error("File changed during reanalysis");
		const t = await Y.studySettings.where("key").equals("study").first();
		if ((e.seriesRevision ?? 0) !== (v.seriesRevision ?? 0) || (t?.contentHash ?? null) !== O) throw new Error("Reanalysis inputs changed");
		await i(v.id, new Map([...ta].map(([a, e]) => [a, {
			algorithmResults: e.algorithmResults,
			actiwareSleepWakeInvalid: e.invalid ?? void 0
		}])), Y, j);
		const n = h(await Y.markers.where("fileId").equals(v.id).toArray()), o = [...n].filter(([, a]) => a.isInvalidNight).map(([a]) => a);
		if (Z) {
			if (o.length > 0 || ra !== U.intervals) {
				const e = await a.waitFor(k(na.actiwareIntervals, s(j)).then((a) => S(a, U.statisticsInput ?? G, o, (a) => J.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null))));
				na.actiwareStatistics = e ?? [], na.actiwareStatisticsNeedsRecompute = null === e;
			}
		} else if (n.size > 0) {
			const e = await a.waitFor(y({
				file: na,
				statisticsInput: U.statisticsInput ?? G
			}, n, (a) => J.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null), s(j)));
			na.actiwareStatistics = e ?? [], na.actiwareStatisticsNeedsRecompute = null === e;
		}
		await T(Y, {
			fileId: v.id,
			...na
		}), U.statisticsInput && await Y.actiwareStatisticsInputs.put({
			fileId: v.id,
			input: U.statisticsInput
		}), await Y.placementResults.delete(v.id), await r([v.id], Y, j);
	}, j), { changed: !0 };
}
export { M as ACTIWARE_NOT_RECONCILED, Y as reanalyzeActiwareFile };
