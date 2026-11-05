import { Wt as a, xn as e } from "./schema-pjCtvTl3.js";
import { a as t, i as s, o as i, r } from "./local-data-source-JzDPSUga.js";
import { m as o } from "./workspace-db-BGLMk_xQ.js";
import { t as n } from "./background-jobs-Bw-sr73X.js";
import { i as l } from "./project-revision-BybjU3q4.js";
import { Gt as c, a as d, et as u, lt as w, o as p, p as h, x as m } from "./store-BKMHiWc9.js";
import { b as g } from "./night-session-registry-BxoMUVbe.js";
import { S as y } from "./ggir-results-import-Bo67_9KJ.js";
import { d as v, g as k, i as S, l as I, m as R, o as A, r as T, u as b, v as W } from "./valid-day-criteria-DA1LBKOr.js";
import { C as F, D as x, E, S as _, T as j, k as H, v as P, w as C } from "./local-export-shard-worker-BMJO1xbL.js";
const D = y.Oakley1997;
function L(a) {
	return (/* @__PURE__ */ new Date(1e3 * a)).toISOString().slice(0, 19);
}
async function M(e, o, n, { wasm: l, epochSeconds: c }) {
	const d = {}, u = new Float64Array(e.axisY);
	if (e.algorithmResults[a.OAKLEY_1997] && u.length > 0) {
		const e = await l.scoreEpochs(t({
			algorithm: a.OAKLEY_1997,
			counts: u,
			epochSeconds: c,
			...null != o ? { config: { oakleyThreshold: o } } : {}
		})), s = i(e, u.length);
		s && (d[a.OAKLEY_1997] = s.slice().buffer);
	}
	if (e.algorithmResults[D] && n) {
		const a = (await r(function(a) {
			const e = (a) => a ? [...new Float64Array(a)] : [];
			return {
				timestamps: e(a.timestamps),
				axisY: e(a.axisY),
				vectorMagnitude: e(a.vectorMagnitude),
				...a.axisX ? { axisX: e(a.axisX) } : {},
				...a.axisZ ? { axisZ: e(a.axisZ) } : {}
			};
		}(e), s({
			...n,
			variants: ["Oakley1997"]
		}, o), l))[D];
		a && (d[D] = a.slice().buffer);
	}
	return d;
}
async function q(t, s, i) {
	const r = await s.studySettings.where("key").equals("study").first(), f = r?.extraSettings ?? {}, y = W(f.actiware_rest_proposal);
	if (y.rest_autoscore !== o.screens) return !1;
	const D = await s.files.get(t);
	return !(null == D?.id || !k(D)) && (await async function(t, { paradigm: s, overrides: i, proposal: r, hasib: d, db: p, expectedStudyContentHash: f, signal: y, wasm: v = () => n(y) }) {
		const k = void 0 !== f ? f : (await p.studySettings.where("key").equals("study").first())?.contentHash ?? null, I = await p.actiwareFileData.get(t.id), D = I ? function(a) {
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
		}(I) : null, q = I?.actiwareSleepWake;
		if (!I || !D) return {
			changed: !1,
			unavailable: "no readable Actiware analysis settings"
		};
		const O = b(t, s), Y = S(t, s), K = O ? i : null, N = A(D.params, T(D.params, K, D.intervals)), X = O ? await async function(a, e, t) {
			if (e.rest_autoscore !== o.screens) return {
				proposal: e,
				nights: []
			};
			const s = [...(await m(a.id, t)).values()].sort((a, e) => a.date.localeCompare(e.date)), i = [], r = [];
			for (const o of s) {
				for (const a of new Float64Array(o.timestamps)) i.push(a);
				if (o.eventMarkerTimestamps) for (const a of new Float64Array(o.eventMarkerTimestamps)) r.push(a);
			}
			const n = new Map((await w(a.id, t)).map((a) => [a.analysisDate, a])), l = await t.studySettings.where("key").equals("study").first();
			return {
				proposal: e,
				nights: j(i, r, a.epochLengthSeconds, n, {
					start: l?.nightStartHour,
					end: l?.nightEndHour
				})
			};
		}(t, W(r), p) : null, Z = (I.actiwareRestProposal?.key ?? E(null)) === E(X), z = O?.wakeThresholdFromRecording ? I.actiwareWakeThreshold ?? null : null;
		if (q && Z && R(N, q.params) && (I.oakleyThreshold ?? null) === z) return { changed: !1 };
		const G = (await p.actiwareStatisticsInputs.get(t.id))?.input ?? null;
		if (!G) return {
			changed: !1,
			unavailable: "no stored Actiware grid"
		};
		const V = await e.waitFor(Promise.resolve(y ? n(y) : v())), B = await e.waitFor(C(D.intervals, G.epochs, D.params, K, V, G, y, X)), J = O?.wakeThresholdFromRecording ? B.wakeThreshold : null;
		if (q && Z && R(N, q.params) && (I.oakleyThreshold ?? null) === J) return { changed: !1 };
		if (!B.sleepWake) return {
			changed: !1,
			unavailable: "the core could not score Actiware Sleep/Wake"
		};
		const Q = [...(await m(t.id, p)).values()], U = /* @__PURE__ */ new Map();
		for (const o of Q) {
			y?.throwIfAborted();
			const s = await e.waitFor(H(V, B.sleepWake, new Float64Array(o.timestamps), t.epochLengthSeconds));
			y?.throwIfAborted();
			const i = await e.waitFor(M(o, J, d, {
				wasm: V,
				epochSeconds: t.epochLengthSeconds
			})), r = {
				...c(o.algorithmResults, (e, t) => t === a.ACTIWARE_SLEEP_WAKE ? void 0 : e),
				...i,
				...s ? { [a.ACTIWARE_SLEEP_WAKE]: s.sleep.buffer } : {}
			}, n = s && s.invalid.some((a) => 1 === a) ? s.invalid.buffer : null;
			U.set(o.date, {
				algorithmResults: r,
				invalid: n
			});
		}
		const $ = (I.actiwareIntervals ?? []).filter((a) => "rest" === a.kind && "scorer" === a.origin), aa = V.actiwareIntervals, ea = $.length > 0 && aa ? await e.waitFor(P(B.intervals, $, {
			epochs: G.epochs,
			params: B.sleepWake.params,
			grid: {
				startTimestamp: B.sleepWake.startTimestamp,
				epochSeconds: B.sleepWake.epochSeconds
			},
			core: { actiwareIntervals: (a, e, t) => aa(a, e, t) }
		})) : B.intervals, ta = {
			...I,
			actiwareIntervals: ea,
			actiwareSleepWake: x(B.sleepWake),
			actiwareStatistics: B.statistics ?? [],
			actiwareStatisticsNeedsRecompute: null === B.statistics,
			actiwareRecording: D
		};
		return null != B.wakeThreshold ? ta.actiwareWakeThreshold = B.wakeThreshold : delete ta.actiwareWakeThreshold, null != J ? ta.oakleyThreshold = J : delete ta.oakleyThreshold, B.restProposal ? ta.actiwareRestProposal = B.restProposal : delete ta.actiwareRestProposal, await l(p, [
			p.activityDays,
			p.actiwareFileData,
			p.actiwareStatisticsInputs,
			p.placementResults,
			p.files,
			p.studySettings,
			p.markers
		], async () => {
			const a = await p.files.get(t.id);
			if (!a || a.createdAt !== t.createdAt || a.sourceContentHash !== t.sourceContentHash) throw new Error("File changed during reanalysis");
			const s = await p.studySettings.where("key").equals("study").first();
			if ((a.seriesRevision ?? 0) !== (t.seriesRevision ?? 0) || (s?.contentHash ?? null) !== k) throw new Error("Reanalysis inputs changed");
			for (const [e, o] of U) await p.activityDays.where("[fileId+date]").equals([t.id, e]).modify((a) => {
				a.algorithmResults = o.algorithmResults, o.invalid ? a.actiwareSleepWakeInvalid = o.invalid : delete a.actiwareSleepWakeInvalid;
			});
			const i = /* @__PURE__ */ new Map();
			for (const e of await p.markers.where("fileId").equals(t.id).toArray()) "auto_score" !== e.username && i.set(e.date, u(i.get(e.date), e));
			const r = [...i].filter(([, a]) => a.isInvalidNight).map(([a]) => a);
			if (Y) {
				if (r.length > 0 || ea !== B.intervals) {
					const a = await e.waitFor(_(ta.actiwareIntervals, B.statisticsInput ?? G, r, (a) => V.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null)));
					ta.actiwareStatistics = a ?? [], ta.actiwareStatisticsNeedsRecompute = null === a;
				}
			} else if (i.size > 0) {
				const a = await e.waitFor(F({
					file: ta,
					statisticsInput: B.statisticsInput ?? G
				}, i, (a) => V.actiwareIntervalStatistics?.(a) ?? Promise.resolve(null), y));
				ta.actiwareStatistics = a ?? [], ta.actiwareStatisticsNeedsRecompute = null === a;
			}
			await p.actiwareFileData.put({
				fileId: t.id,
				...ta
			}), B.statisticsInput && await p.actiwareStatisticsInputs.put({
				fileId: t.id,
				input: B.statisticsInput
			}), await p.placementResults.delete(t.id), await h(p, [t.id]), await g([t.id], p, y);
		}, y), { changed: !0 };
	}({
		...D,
		id: D.id
	}, {
		paradigm: v(f.analysis_paradigm),
		overrides: I(f.actiware_analysis),
		proposal: y,
		hasib: p(d(f))?.hasibVariants,
		db: s,
		expectedStudyContentHash: r?.contentHash ?? null,
		...i ? { signal: i } : {}
	})).changed;
}
export { q as reproposeRestsAfterDiary };
