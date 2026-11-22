import { Vr as a, Y as e, d as t, hr as s, n as i } from "./background-jobs-CXps6j4v.js";
import { Gt as r, I as n, Mn as o, Wr as l, Xt as c, Y as d, Zt as u, dn as w, f as p, it as h, nn as m, on as f, qr as g, qt as v } from "./db-ylhhNiJn.js";
import { r as k } from "./local-ggir-hasib-variants-2K3APKLs.js";
import { E as y, m as S, p as R, w as I } from "./local-export-worker-CjBDcX0Y.js";
import { S as A, T, a as W, c as F, l as b, p as E, t as x, u as P } from "./ingest-kLoVn8B1.js";
const M = k.Oakley1997;
function _(a) {
	return (/* @__PURE__ */ new Date(1e3 * a)).toISOString().slice(0, 19);
}
async function L(a, e, t, { wasm: i, epochSeconds: r, services: n }) {
	const o = {}, l = new Float64Array(a.axisY);
	if (a.algorithmResults[s.OAKLEY_1997] && l.length > 0) {
		const a = await i.scoreEpochs(A({
			algorithm: s.OAKLEY_1997,
			counts: l,
			epochSeconds: r,
			...null != e ? { config: { oakleyThreshold: e } } : {}
		})), t = T(a, l.length);
		t && (o[s.OAKLEY_1997] = t.slice().buffer);
	}
	if (a.algorithmResults[M] && t) {
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
		}, e), i))[M];
		s && (o[M] = s.slice().buffer);
	}
	return o;
}
const Y = "Retained Actiware analysis could not be reconciled with restored settings.";
async function H(k, { paradigm: A, overrides: T, proposal: M, hasib: Y, db: H, expectedStudyContentHash: j, signal: q, wasm: C = () => i(q), services: D }) {
	const O = void 0 !== j ? j : (await H.studySettings.where("key").equals("study").first())?.contentHash ?? null, K = await H.actiwareFileData.get(k.id), N = K ? function(a) {
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
	}(K) : null, X = K?.actiwareSleepWake;
	if (!K || !N) return {
		changed: !1,
		unavailable: "no readable Actiware analysis settings"
	};
	const Z = m(k, A), V = c(k, A) === g.rest_intervals, z = Z ? T : null, G = u(N.params, v(N.params, z, N.intervals)), $ = Z ? await async function(a, e, t, s) {
		if (e.rest_autoscore !== l.screens) return {
			proposal: e,
			nights: []
		};
		const i = [...(await p(a.id, t)).values()].sort((a, e) => a.date.localeCompare(e.date)), r = [], n = [];
		for (const l of i) {
			for (const a of new Float64Array(l.timestamps)) r.push(a);
			if (l.eventMarkerTimestamps) for (const a of new Float64Array(l.eventMarkerTimestamps)) n.push(a);
		}
		const o = new Map((await d(a.id, t)).map((a) => [a.analysisDate, a])), c = await t.studySettings.where("key").equals("study").first();
		return {
			proposal: e,
			nights: await b(s, r, n, a.epochLengthSeconds, o, {
				start: c?.nightStartHour,
				end: c?.nightEndHour
			})
		};
	}(k, w(M), H, e()) : null, B = (K.actiwareRestProposal?.key ?? P(null)) === P($), J = Z?.wakeThresholdFromRecording ? K.actiwareWakeThreshold ?? null : null;
	if (X && B && f(G, X.params) && (K.oakleyThreshold ?? null) === J) return { changed: !1 };
	const Q = (await H.actiwareStatisticsInputs.get(k.id))?.input ?? null;
	if (!Q) return {
		changed: !1,
		unavailable: "no stored Actiware grid"
	};
	const U = await a.waitFor(Promise.resolve(q ? i(q) : C())), aa = await a.waitFor(F(N.intervals, Q.epochs, N.params, z, U, Q, q, $)), ea = Z?.wakeThresholdFromRecording ? aa.wakeThreshold : null;
	if (X && B && f(G, X.params) && (K.oakleyThreshold ?? null) === ea) return { changed: !1 };
	if (!aa.sleepWake) return {
		changed: !1,
		unavailable: "the core could not score Actiware Sleep/Wake" + (aa.refusals.sleepWake ? `: ${aa.refusals.sleepWake}` : "")
	};
	const ta = [...(await p(k.id, H)).values()], sa = /* @__PURE__ */ new Map();
	for (const e of ta) {
		q?.throwIfAborted();
		const t = await a.waitFor(E(U, aa.sleepWake, new Float64Array(e.timestamps), k.epochLengthSeconds));
		q?.throwIfAborted();
		const i = await a.waitFor(L(e, ea, Y, {
			wasm: U,
			epochSeconds: k.epochLengthSeconds,
			services: D
		})), n = {
			...r(e.algorithmResults, (a, e) => e === s.ACTIWARE_SLEEP_WAKE ? void 0 : a),
			...i,
			...t ? { [s.ACTIWARE_SLEEP_WAKE]: t.sleep.buffer } : {}
		}, o = t && t.invalid.some((a) => 1 === a) ? t.invalid.buffer : null;
		sa.set(e.date, {
			algorithmResults: n,
			invalid: o
		});
	}
	const ia = (K.actiwareIntervals ?? []).filter((a) => "rest" === a.kind && "scorer" === a.origin), ra = K.actiwareRemovedRests ?? [], na = ia.length > 0 || ra.length > 0 ? await a.waitFor(I(aa.intervals, ia, ra, {
		epochs: Q.epochs,
		params: aa.sleepWake.params,
		grid: {
			startTimestamp: aa.sleepWake.startTimestamp,
			epochSeconds: aa.sleepWake.epochSeconds
		},
		core: { actiwareIntervals: (a, e, t) => U.actiwareIntervals(a, e, t) }
	})) : aa.intervals, oa = {
		...K,
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
		const e = await H.files.get(k.id);
		if (!e || e.createdAt !== k.createdAt || e.sourceContentHash !== k.sourceContentHash) throw new Error("File changed during reanalysis");
		const t = await H.studySettings.where("key").equals("study").first();
		if ((e.seriesRevision ?? 0) !== (k.seriesRevision ?? 0) || (t?.contentHash ?? null) !== O) throw new Error("Reanalysis inputs changed");
		await n(k.id, new Map([...sa].map(([a, e]) => [a, {
			algorithmResults: e.algorithmResults,
			actiwareSleepWakeInvalid: e.invalid ?? void 0
		}])), H, q);
		const s = h(await H.markers.where("fileId").equals(k.id).toArray()), r = [...s].filter(([, a]) => a.isInvalidNight).map(([a]) => a);
		if (V) {
			if (r.length > 0 || na !== aa.intervals) {
				const e = await a.waitFor(y(oa.actiwareIntervals, i(q)).then((a) => R(a, aa.statisticsInput ?? Q, r, (a) => U.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null))));
				oa.actiwareStatistics = e ?? [], oa.actiwareStatisticsNeedsRecompute = null === e;
			}
		} else if (s.size > 0) {
			const e = await a.waitFor(S({
				file: oa,
				statisticsInput: aa.statisticsInput ?? Q
			}, s, (a) => U.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null), i(q)));
			oa.actiwareStatistics = e ?? [], oa.actiwareStatisticsNeedsRecompute = null === e;
		}
		await W(H, {
			fileId: k.id,
			...oa
		}), aa.statisticsInput && await H.actiwareStatisticsInputs.put({
			fileId: k.id,
			input: aa.statisticsInput
		}), await H.placementResults.delete(k.id), await o([k.id], H, q);
	}, q), { changed: !0 };
}
export { Y as ACTIWARE_NOT_RECONCILED, H as reanalyzeActiwareFile };
