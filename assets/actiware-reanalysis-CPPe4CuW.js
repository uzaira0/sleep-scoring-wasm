import { Sn as a, Wt as e } from "./schema-CoLJBY5o.js";
import { a as t, i as s, o as i, r } from "./local-data-source-CH8av8Pa.js";
import { g as n } from "./workspace-db-mwmkj659.js";
import { t as o } from "./background-jobs-BcCUQBCp.js";
import { i as l } from "./project-revision-CUvdbw1R.js";
import { a as c, dt as d, nt as u, o as w, p, qt as h, x as m } from "./store-CMG-u5eb.js";
import { x as g } from "./night-session-registry-fDkTdQOp.js";
import { w as y } from "./ggir-results-import-fU32mldC.js";
import { _ as v, a as k, d as S, f as I, h as R, r as A, s as T, u as W, y as b } from "./valid-day-criteria-wd9cIZwC.js";
import { C as F, D as x, E, S as _, T as j, k as P, v as H, w as C } from "./local-export-worker-DoLQ11xG.js";
const D = y.Oakley1997;
function L(a) {
	return (/* @__PURE__ */ new Date(1e3 * a)).toISOString().slice(0, 19);
}
async function q(a, n, o, { wasm: l, epochSeconds: c }) {
	const d = {}, u = new Float64Array(a.axisY);
	if (a.algorithmResults[e.OAKLEY_1997] && u.length > 0) {
		const a = await l.scoreEpochs(t({
			algorithm: e.OAKLEY_1997,
			counts: u,
			epochSeconds: c,
			...null != n ? { config: { oakleyThreshold: n } } : {}
		})), s = i(a, u.length);
		s && (d[e.OAKLEY_1997] = s.slice().buffer);
	}
	if (a.algorithmResults[D] && o) {
		const e = (await r(function(a) {
			const e = (a) => a ? [...new Float64Array(a)] : [];
			return {
				timestamps: e(a.timestamps),
				axisY: e(a.axisY),
				vectorMagnitude: e(a.vectorMagnitude),
				...a.axisX ? { axisX: e(a.axisX) } : {},
				...a.axisZ ? { axisZ: e(a.axisZ) } : {}
			};
		}(a), s({
			...o,
			variants: ["Oakley1997"]
		}, n), l))[D];
		e && (d[D] = e.slice().buffer);
	}
	return d;
}
async function M(t, s, i) {
	const r = await s.studySettings.where("key").equals("study").first(), f = r?.extraSettings ?? {}, y = b(f.actiware_rest_proposal);
	if (y.rest_autoscore !== n.screens) return !1;
	const D = await s.files.get(t);
	return !(null == D?.id || !v(D)) && (await async function(t, { paradigm: s, overrides: i, proposal: r, hasib: c, db: w, expectedStudyContentHash: f, signal: y, wasm: v = () => o(y) }) {
		const I = void 0 !== f ? f : (await w.studySettings.where("key").equals("study").first())?.contentHash ?? null, W = await w.actiwareFileData.get(t.id), D = W ? function(a) {
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
		}(W) : null, M = W?.actiwareSleepWake;
		if (!W || !D) return {
			changed: !1,
			unavailable: "no readable Actiware analysis settings"
		};
		const O = S(t, s), Y = k(t, s), K = O ? i : null, N = T(D.params, A(D.params, K, D.intervals)), X = O ? await async function(a, e, t) {
			if (e.rest_autoscore !== n.screens) return {
				proposal: e,
				nights: []
			};
			const s = [...(await m(a.id, t)).values()].sort((a, e) => a.date.localeCompare(e.date)), i = [], r = [];
			for (const n of s) {
				for (const a of new Float64Array(n.timestamps)) i.push(a);
				if (n.eventMarkerTimestamps) for (const a of new Float64Array(n.eventMarkerTimestamps)) r.push(a);
			}
			const o = new Map((await d(a.id, t)).map((a) => [a.analysisDate, a])), l = await t.studySettings.where("key").equals("study").first();
			return {
				proposal: e,
				nights: j(i, r, a.epochLengthSeconds, o, {
					start: l?.nightStartHour,
					end: l?.nightEndHour
				})
			};
		}(t, b(r), w) : null, Z = (W.actiwareRestProposal?.key ?? E(null)) === E(X), z = O?.wakeThresholdFromRecording ? W.actiwareWakeThreshold ?? null : null;
		if (M && Z && R(N, M.params) && (W.oakleyThreshold ?? null) === z) return { changed: !1 };
		const U = (await w.actiwareStatisticsInputs.get(t.id))?.input ?? null;
		if (!U) return {
			changed: !1,
			unavailable: "no stored Actiware grid"
		};
		const V = await a.waitFor(Promise.resolve(y ? o(y) : v())), B = await a.waitFor(C(D.intervals, U.epochs, D.params, K, V, U, y, X)), G = O?.wakeThresholdFromRecording ? B.wakeThreshold : null;
		if (M && Z && R(N, M.params) && (W.oakleyThreshold ?? null) === G) return { changed: !1 };
		if (!B.sleepWake) return {
			changed: !1,
			unavailable: "the core could not score Actiware Sleep/Wake"
		};
		const J = [...(await m(t.id, w)).values()], Q = /* @__PURE__ */ new Map();
		for (const n of J) {
			y?.throwIfAborted();
			const s = await a.waitFor(P(V, B.sleepWake, new Float64Array(n.timestamps), t.epochLengthSeconds));
			y?.throwIfAborted();
			const i = await a.waitFor(q(n, G, c, {
				wasm: V,
				epochSeconds: t.epochLengthSeconds
			})), r = {
				...h(n.algorithmResults, (a, t) => t === e.ACTIWARE_SLEEP_WAKE ? void 0 : a),
				...i,
				...s ? { [e.ACTIWARE_SLEEP_WAKE]: s.sleep.buffer } : {}
			}, o = s && s.invalid.some((a) => 1 === a) ? s.invalid.buffer : null;
			Q.set(n.date, {
				algorithmResults: r,
				invalid: o
			});
		}
		const $ = (W.actiwareIntervals ?? []).filter((a) => "rest" === a.kind && "scorer" === a.origin), aa = V.actiwareIntervals, ea = $.length > 0 && aa ? await a.waitFor(H(B.intervals, $, {
			epochs: U.epochs,
			params: B.sleepWake.params,
			grid: {
				startTimestamp: B.sleepWake.startTimestamp,
				epochSeconds: B.sleepWake.epochSeconds
			},
			core: { actiwareIntervals: (a, e, t) => aa(a, e, t) }
		})) : B.intervals, ta = {
			...W,
			actiwareIntervals: ea,
			actiwareSleepWake: x(B.sleepWake),
			actiwareStatistics: B.statistics ?? [],
			actiwareStatisticsNeedsRecompute: null === B.statistics,
			actiwareRecording: D
		};
		return null != B.wakeThreshold ? ta.actiwareWakeThreshold = B.wakeThreshold : delete ta.actiwareWakeThreshold, null != G ? ta.oakleyThreshold = G : delete ta.oakleyThreshold, B.restProposal ? ta.actiwareRestProposal = B.restProposal : delete ta.actiwareRestProposal, await l(w, [
			w.activityDays,
			w.actiwareFileData,
			w.actiwareStatisticsInputs,
			w.placementResults,
			w.files,
			w.studySettings,
			w.markers
		], async () => {
			const e = await w.files.get(t.id);
			if (!e || e.createdAt !== t.createdAt || e.sourceContentHash !== t.sourceContentHash) throw new Error("File changed during reanalysis");
			const s = await w.studySettings.where("key").equals("study").first();
			if ((e.seriesRevision ?? 0) !== (t.seriesRevision ?? 0) || (s?.contentHash ?? null) !== I) throw new Error("Reanalysis inputs changed");
			for (const [a, n] of Q) await w.activityDays.where("[fileId+date]").equals([t.id, a]).modify((a) => {
				a.algorithmResults = n.algorithmResults, n.invalid ? a.actiwareSleepWakeInvalid = n.invalid : delete a.actiwareSleepWakeInvalid;
			});
			const i = /* @__PURE__ */ new Map();
			for (const a of await w.markers.where("fileId").equals(t.id).toArray()) "auto_score" !== a.username && i.set(a.date, u(i.get(a.date), a));
			const r = [...i].filter(([, a]) => a.isInvalidNight).map(([a]) => a);
			if (Y) {
				if (r.length > 0 || ea !== B.intervals) {
					const e = await a.waitFor(_(ta.actiwareIntervals, B.statisticsInput ?? U, r, (a) => V.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null)));
					ta.actiwareStatistics = e ?? [], ta.actiwareStatisticsNeedsRecompute = null === e;
				}
			} else if (i.size > 0) {
				const e = await a.waitFor(F({
					file: ta,
					statisticsInput: B.statisticsInput ?? U
				}, i, (a) => V.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null), y));
				ta.actiwareStatistics = e ?? [], ta.actiwareStatisticsNeedsRecompute = null === e;
			}
			await w.actiwareFileData.put({
				fileId: t.id,
				...ta
			}), B.statisticsInput && await w.actiwareStatisticsInputs.put({
				fileId: t.id,
				input: B.statisticsInput
			}), await w.placementResults.delete(t.id), await p(w, [t.id]), await g([t.id], w, y);
		}, y), { changed: !0 };
	}({
		...D,
		id: D.id
	}, {
		paradigm: I(f.analysis_paradigm),
		overrides: W(f.actiware_analysis),
		proposal: y,
		hasib: w(c(f))?.hasibVariants,
		db: s,
		expectedStudyContentHash: r?.contentHash ?? null,
		...i ? { signal: i } : {}
	})).changed;
}
export { M as reproposeRestsAfterDiary };
