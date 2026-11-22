import { Br as a, J as e, d as t, mr as s, n as i } from "./background-jobs-BxZgJi0P.js";
import { Gt as r, I as n, Mn as o, Wr as l, Xt as c, Y as d, Zt as u, dn as w, f as p, it as h, nn as m, on as f, qr as g, qt as v } from "./db-DycBgaC2.js";
import { r as k } from "./local-ggir-hasib-variants-CijIGRol.js";
import { E as y, m as S, p as R, w as I } from "./local-export-worker-aqJeBnha.js";
import { S as A, T, a as W, c as F, l as b, p as E, t as x, u as P } from "./ingest-CAPZHpgw.js";
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
const H = "Retained Actiware analysis could not be reconciled with restored settings.";
async function Y(k, { paradigm: A, overrides: T, proposal: M, hasib: H, db: Y, expectedStudyContentHash: j, signal: q, wasm: C = () => i(q), services: D }) {
	const O = void 0 !== j ? j : (await Y.studySettings.where("key").equals("study").first())?.contentHash ?? null, K = await Y.actiwareFileData.get(k.id), N = K ? function(a) {
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
	const Z = m(k, A), V = c(k, A) === g.rest_intervals, z = Z ? T : null, B = u(N.params, v(N.params, z, N.intervals)), G = Z ? await async function(a, e, t, s) {
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
	}(k, w(M), Y, e()) : null, J = (K.actiwareRestProposal?.key ?? P(null)) === P(G), $ = Z?.wakeThresholdFromRecording ? K.actiwareWakeThreshold ?? null : null;
	if (X && J && f(B, X.params) && (K.oakleyThreshold ?? null) === $) return { changed: !1 };
	const Q = (await Y.actiwareStatisticsInputs.get(k.id))?.input ?? null;
	if (!Q) return {
		changed: !1,
		unavailable: "no stored Actiware grid"
	};
	const U = await a.waitFor(Promise.resolve(q ? i(q) : C())), aa = await a.waitFor(F(N.intervals, Q.epochs, N.params, z, U, Q, q, G)), ea = Z?.wakeThresholdFromRecording ? aa.wakeThreshold : null;
	if (X && J && f(B, X.params) && (K.oakleyThreshold ?? null) === ea) return { changed: !1 };
	if (!aa.sleepWake) return {
		changed: !1,
		unavailable: "the core could not score Actiware Sleep/Wake" + (aa.refusals.sleepWake ? `: ${aa.refusals.sleepWake}` : "")
	};
	const ta = [...(await p(k.id, Y)).values()], sa = /* @__PURE__ */ new Map();
	for (const e of ta) {
		q?.throwIfAborted();
		const t = await a.waitFor(E(U, aa.sleepWake, new Float64Array(e.timestamps), k.epochLengthSeconds));
		q?.throwIfAborted();
		const i = await a.waitFor(L(e, ea, H, {
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
	return null != aa.wakeThreshold ? oa.actiwareWakeThreshold = aa.wakeThreshold : delete oa.actiwareWakeThreshold, null != ea ? oa.oakleyThreshold = ea : delete oa.oakleyThreshold, aa.refusals.intervals ? oa.actiwareIntervalsRefusal = aa.refusals.intervals : delete oa.actiwareIntervalsRefusal, aa.restProposal ? oa.actiwareRestProposal = aa.restProposal : delete oa.actiwareRestProposal, await t(Y, [
		Y.activityDays,
		Y.scoredVariantMasks,
		Y.actiwareFileData,
		Y.actiwareStatisticsInputs,
		Y.placementResults,
		Y.files,
		Y.studySettings,
		Y.markers
	], async () => {
		const e = await Y.files.get(k.id);
		if (!e || e.createdAt !== k.createdAt || e.sourceContentHash !== k.sourceContentHash) throw new Error("File changed during reanalysis");
		const t = await Y.studySettings.where("key").equals("study").first();
		if ((e.seriesRevision ?? 0) !== (k.seriesRevision ?? 0) || (t?.contentHash ?? null) !== O) throw new Error("Reanalysis inputs changed");
		await n(k.id, new Map([...sa].map(([a, e]) => [a, {
			algorithmResults: e.algorithmResults,
			actiwareSleepWakeInvalid: e.invalid ?? void 0
		}])), Y, q);
		const s = h(await Y.markers.where("fileId").equals(k.id).toArray()), r = [...s].filter(([, a]) => a.isInvalidNight).map(([a]) => a);
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
		await W(Y, {
			fileId: k.id,
			...oa
		}), aa.statisticsInput && await Y.actiwareStatisticsInputs.put({
			fileId: k.id,
			input: aa.statisticsInput
		}), await Y.placementResults.delete(k.id), await o([k.id], Y, q);
	}, q), { changed: !0 };
}
export { H as ACTIWARE_NOT_RECONCILED, Y as reanalyzeActiwareFile };
