import { A as e, Ar as a, F as s, V as i, n as t } from "./background-jobs-CPaTeltP.js";
import { Dr as n, E as r, Er as o, N as l, g as u, k as m, p as c } from "./db-DGizvZzX.js";
import { o as d, w as p } from "./local-nonwear-unified-DWWAm6ze.js";
import { a as h } from "./epoch-utils-Cj4dIHgK.js";
import { a as y, t as g } from "./local-export-shard-worker-Okf1DPvY.js";
import { i as f, n as w, o as v, r as I, t as F } from "./physical-activity-days-DmFLR_Kr.js";
import { n as M, r as k } from "./physical-activity-classifier-output-3cEqraCE.js";
import { n as S, t as A } from "./physical-activity-file-store-DH6j8PYT.js";
function N(e) {
	return "epochLengthSeconds" in e ? {
		ggirNonwearDetector: e.ggirNonwearDetector,
		ggirBundleRevision: e.ggirBundleRevision,
		sourceType: e.sourceType ?? null,
		sourceProfileId: e.sourceProfileId ?? null,
		resolvedCapabilities: e.resolvedCapabilities
	} : {
		ggirNonwearDetector: e.ggir_nonwear_detector,
		ggirBundleRevision: e.ggir_bundle_revision,
		sourceType: e.source_type ?? null,
		sourceProfileId: e.source_profile_id ?? null,
		resolvedCapabilities: void 0
	};
}
const b = () => ({
	getLocalFiles: r,
	getAllActivityDaysForFile: c,
	getAllMarkersForFile: u,
	getSensorNonwearForFile: m,
	listDailyGgirSummaries: l
});
function T(e, a) {
	return {
		getLocalFiles: (a, s) => r(e, s),
		getAllActivityDaysForFile: (s) => c(s, e, a),
		getAllMarkersForFile: (a, s) => u(a, s, e),
		getSensorNonwearForFile: (a) => m(a, e),
		listDailyGgirSummaries: (a) => l(a, e),
		db: e
	};
}
function D(e) {
	if (e && 0 !== e.length) return e.includes("human") ? "human" : e.includes("device") || e.includes("detach_nonwear") ? "device" : "algorithm";
}
function P(e, a, s, i, t) {
	const n = e[e.length - 1];
	n && n.reason === i && n.nonwearSource === t && Math.abs(n.endTimestamp - a) < 1e-6 ? n.endTimestamp = s : e.push({
		startTimestamp: a,
		endTimestamp: s,
		reason: i,
		nonwearSource: t
	});
}
function x(e, a, s, i) {
	const t = e[e.length - 1];
	t && t.reason === i && Math.abs(t.endTimestamp - a) < 1e-6 ? t.endTimestamp = s : e.push({
		startTimestamp: a,
		endTimestamp: s,
		reason: i
	});
}
function E(e, a, s, i) {
	const t = e[e.length - 1];
	t && t.tone === i && Math.abs(t.endTimestamp - a) < 1e-6 ? t.endTimestamp = s : e.push({
		startTimestamp: a,
		endTimestamp: s,
		tone: i
	});
}
function W(e) {
	return e ? new Float64Array(e).length : 0;
}
function L(e) {
	const a = [];
	return W(e.axisY) > 0 && a.push("Y-axis counts"), W(e.vectorMagnitude) > 0 && a.push("Vector magnitude counts"), W(e.mimsUnit) > 0 && a.push("MIMS_UNIT"), M(e) && a.push("actimetric preschool class epochs"), W(e.ggirEnmo) > 0 && a.push("GGIR ENMO"), a;
}
function _(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function V(e) {
	return (e?.sleepMarkers ?? []).some(n);
}
function j(e) {
	return (e?.sleepMarkers ?? []).some(o);
}
function C(e) {
	return (e?.nonwearMarkers ?? []).some((e) => null != e.startTimestamp && null != e.endTimestamp);
}
async function G(e) {
	const { file: a, activityDays: s, markersByDate: i, sensorNonwearPeriods: n, ggirSummaries: r, maskPolicy: o, choiAxis: l } = e, u = [], m = new Map(r.map((e) => [e.analysisDate, e])), c = Number.isFinite(a.epochLengthSeconds) && a.epochLengthSeconds > 0 ? a.epochLengthSeconds : 60, p = [...s.entries()].sort(([e], [a]) => e.localeCompare(a)), h = 0 === p.length ? null : await t(e.signal).summarizePhysicalActivityDays({
		policy: F(o),
		intervals: w(i, n),
		days: p.map(([, e]) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: c,
			series: I(e, o, l, c)
		}))
	});
	for (const [t, [w, v]] of p.entries()) {
		e.signal?.throwIfAborted();
		const s = new Float64Array(v.timestamps), n = i.get(w), r = h.days[t].mask;
		u.push({
			key: `${String(a.id)}:${w}`,
			fileId: a.id,
			filename: a.filename,
			participantId: a.participantId ?? "",
			scoringIdentity: N(a),
			sourceProfileId: a.sourceProfileId ?? null,
			date: w,
			epochLengthSeconds: c,
			epochCount: s.length,
			signalLabels: m.has(w) ? [.../* @__PURE__ */ new Set([...L(v), "GGIR daily summary"])] : L(v),
			hasAxisY: W(v.axisY) > 0,
			hasVectorMagnitude: W(v.vectorMagnitude) > 0,
			hasMims: W(v.mimsUnit) > 0,
			hasPreschoolRf: M(v),
			hasGgirDailySummary: m.has(w),
			hasManualSleep: j(n),
			hasManualNaps: V(n),
			hasManualNonwear: C(n),
			storedNonwearDetectors: Object.keys(d(v, l)),
			maskSummary: f(r),
			wakeWearMinutes: r.wakeWearMinutes,
			validWearHours: m.get(w)?.validHours ?? null,
			minimumWakeWearMinutes: o.minimumWakeWearMinutes,
			meetsMinimumWakeWear: r.meetsMinimumWakeWear
		});
	}
	const y = r.filter((e) => !s.has(e.analysisDate)), g = await Promise.all(y.map((a) => (e.signal?.throwIfAborted(), t(e.signal).ggirSummaryDenominator(a.validHours ?? NaN, a.nonwearMinutes ?? NaN))));
	for (const [t, d] of y.entries()) {
		e.signal?.throwIfAborted();
		const s = g[t], i = {
			totalEpochs: s.totalEpochs,
			includedEpochs: s.includedEpochs,
			nonwearEpochs: s.nonwearEpochs,
			mainSleepEpochs: 0,
			napEpochs: 0,
			overlapEpochs: 0
		};
		u.push({
			key: `${String(a.id)}:${d.analysisDate}`,
			fileId: a.id,
			filename: a.filename,
			participantId: a.participantId ?? "",
			scoringIdentity: N(a),
			sourceProfileId: a.sourceProfileId ?? null,
			date: d.analysisDate,
			epochLengthSeconds: 60,
			epochCount: i.totalEpochs,
			signalLabels: ["GGIR daily summary"],
			hasAxisY: !1,
			hasVectorMagnitude: !1,
			hasMims: !1,
			hasPreschoolRf: !1,
			hasGgirDailySummary: !0,
			hasManualSleep: !1,
			hasManualNaps: !1,
			hasManualNonwear: !1,
			storedNonwearDetectors: [],
			maskSummary: i,
			wakeWearMinutes: null == d.validHours ? null : s.wakeWearMinutes,
			validWearHours: d.validHours,
			minimumWakeWearMinutes: o.minimumWakeWearMinutes,
			meetsMinimumWakeWear: null != d.validHours && !(s.wakeWearMinutes < o.minimumWakeWearMinutes)
		});
	}
	return u;
}
async function R(e = {}) {
	const a = e.repository ?? b(), s = e.username ?? "anonymous", i = e.maskPolicy ?? v, t = await a.getLocalFiles(a.db, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = [];
	for (const r of t) {
		if (e.signal?.throwIfAborted(), !r.id) continue;
		const t = r.id, o = await a.getAllMarkersForFile(t, s), l = await a.getSensorNonwearForFile(t), u = await a.listDailyGgirSummaries(t), m = p(), c = await S({
			db: a.db ?? null,
			fileId: t,
			kind: "workspace_days",
			...e.signal ? { signal: e.signal } : {},
			inputs: {
				file: {
					filename: r.filename,
					participantId: r.participantId ?? "",
					epochLengthSeconds: r.epochLengthSeconds,
					sourceProfileId: r.sourceProfileId ?? null
				},
				markers: A(o),
				sensorNonwearPeriods: l,
				ggirSummaries: u,
				maskPolicy: i,
				choiAxis: m
			}
		}, async () => G({
			signal: e.signal,
			file: {
				...r,
				id: t
			},
			activityDays: await a.getAllActivityDaysForFile(t),
			markersByDate: o,
			sensorNonwearPeriods: l,
			ggirSummaries: u,
			maskPolicy: i,
			choiAxis: m
		}));
		n.push(...c);
	}
	return n.sort((e, a) => e.filename.localeCompare(a.filename) || e.date.localeCompare(a.date));
}
async function Y(t) {
	const [n, r] = t.dayKey.split(":"), o = Number(n);
	if (!Number.isInteger(o) || !r) return null;
	const l = (u = t.method, g.find((e) => e.method === u) ?? null);
	var u;
	const m = y(t.method), c = t.repository ?? b(), d = t.username ?? "anonymous", h = t.maskPolicy ?? v, M = (await c.getLocalFiles()).find((e) => e.id === o);
	if (!M) return null;
	const S = Number.isFinite(M.epochLengthSeconds) && M.epochLengthSeconds > 0 ? M.epochLengthSeconds : 60, A = (await c.getAllActivityDaysForFile(o)).get(r);
	if (!A) return null;
	const N = "mims" === t.method ? A.mimsUnit : "ggir_enmo" === t.method ? A.ggirEnmo : void 0, T = "preschool_free_living_rf_3_5" === t.method ? k(A) : null, W = l ? "cutpoint" : T ? "classifier" : "backend_output";
	if ("cutpoint" === W && !t.thresholds) return null;
	if ("backend_output" === W && !N) return null;
	const L = l ? new Float64Array("axisY" === l.axis ? A.axisY : A.vectorMagnitude) : T ?? (N ? new Float64Array(N) : /* @__PURE__ */ new Float64Array());
	if (0 === L.length) return null;
	const V = t.source ? A[i(t.source).seriesKey] : void 0, j = V instanceof ArrayBuffer ? new Float64Array(V) : null, C = null !== j && j.length === L.length, G = C && j ? j : L, R = await c.getAllMarkersForFile(o, d), Y = await c.getSensorNonwearForFile(o), q = (await a().summarizePhysicalActivityDays({
		policy: F(h),
		intervals: w(R, Y),
		includeEpochDetails: !0,
		days: [{
			timestamps: new Float64Array(A.timestamps),
			..."cutpoint" === W ? { epochSeconds: S } : {
				values: Float64Array.from(L),
				grid: W,
				fallbackEpochSeconds: S,
				...A.ggirTimestamps ? { ggirTimestamps: new Float64Array(A.ggirTimestamps) } : {}
			},
			series: I(A, h, p(), S)
		}]
	})).days[0], H = "cutpoint" === W ? new Float64Array(A.timestamps) : Float64Array.from(q.timestamps), O = q.epochSeconds, B = {
		reasons: q.reasons,
		nonwearSources: q.nonwearSources,
		summary: f(q.mask)
	}, K = {
		kind: W,
		values: Float64Array.from(L),
		displayValues: Float64Array.from(G),
		countsPerMinuteScale: 60 / S,
		included: Array.from({ length: L.length }, (e, a) => "included" === (B.reasons[a] ?? "included")),
		epochSeconds: O,
		thresholds: t.thresholds ? _(t.thresholds) : null,
		defaultThresholds: l && t.thresholds ? _(l) : null
	}, U = await a().summarizePhysicalActivityTrace(K), $ = [], z = [], J = [], Q = [], X = [], Z = [], ee = [], ae = [], se = [];
	let ie = Number.POSITIVE_INFINITY, te = Number.NEGATIVE_INFINITY;
	for (let e = 0; e < L.length; e++) {
		const a = L[e] ?? NaN, s = H[e] ?? NaN, i = B.reasons[e] ?? "included", t = U.displayValues[e] ?? NaN;
		if (Number.isFinite(s)) {
			const a = Z[Z.length - 1];
			(null == a || s > a) && (Z.push(s), ee.push(t), ae.push("included" === i && Number.isFinite(t) ? 1 : 0));
			const n = s + O;
			ie = Math.min(ie, s), te = Math.max(te, n), x(X, s, n, i);
			const r = B.nonwearSources[e] ?? [];
			r.some((e) => "algorithm" === D([e])) && P(J, s, n, "nonwear", "algorithm"), r.some((e) => "device" === D([e])) && P(Q, s, n, "nonwear", "device"), "included" !== i && P(z, s, n, i, D(B.nonwearSources[e]));
		}
		if (!Number.isFinite(a)) continue;
		const n = U.tones[e] ?? null, r = "unclassified" === n ? null : n;
		("classifier" !== W || r) && Number.isFinite(s) && ("included" === i && r && E(se, s, s + O, r), $.push({
			index: e,
			timestamp: s,
			value: t,
			tone: r,
			maskReason: i
		}));
	}
	return $.length < 2 || !Number.isFinite(ie) || !Number.isFinite(te) || te <= ie ? null : {
		trace: {
			traceKind: W,
			dayKey: t.dayKey,
			fileId: o,
			filename: M.filename,
			participantId: M.participantId ?? "",
			date: r,
			method: t.method,
			methodLabel: l?.label ?? m.label,
			sourceLabel: C && t.source ? s(t.source, M.sourceProfileId ? e[M.sourceProfileId] : void 0) ?? i(t.source).label : l?.sourceLabel ?? m.signalLabel,
			epochLengthSeconds: O,
			valueMax: Math.max(U.valueMax, l?.cutpointScaleMax ?? ("classifier" === W ? 5 : 1)),
			originalEpochCount: L.length,
			selectionTimestamps: Float64Array.from(Z),
			selectionValues: Float64Array.from(ee),
			selectionIncluded: Uint8Array.from(ae),
			viewportStartTimestamp: ie,
			viewportEndTimestamp: te,
			maskIntervals: z,
			algorithmNonwearIntervals: J,
			sensorNonwearIntervals: Q,
			denominatorIntervals: X,
			intensityIntervals: se,
			maskSummary: B.summary,
			intensitySummary: U.intensity,
			backendOutputSummary: U.backendOutput,
			points: $,
			...t.thresholds ? { thresholds: t.thresholds } : {},
			thresholdDelta: U.thresholdDelta
		},
		request: K
	};
}
async function q(e) {
	const s = await Y(e);
	if (!s) return null;
	const { trace: i } = s;
	if (48 !== e.viewHours) return i;
	const t = await h(i.date), n = await Y({
		...e,
		dayKey: `${String(i.fileId)}:${t}`
	});
	if (!n) return i;
	const r = n.trace;
	i.points.push(...r.points.map((e) => ({
		...e,
		index: e.index + i.originalEpochCount
	}))), i.originalEpochCount += r.originalEpochCount, i.selectionTimestamps = Float64Array.from([...i.selectionTimestamps, ...r.selectionTimestamps]), i.selectionValues = Float64Array.from([...i.selectionValues, ...r.selectionValues]), i.selectionIncluded = Uint8Array.from([...i.selectionIncluded, ...r.selectionIncluded]), i.viewportEndTimestamp = r.viewportEndTimestamp, i.maskIntervals.push(...r.maskIntervals), i.algorithmNonwearIntervals?.push(...r.algorithmNonwearIntervals ?? []), i.sensorNonwearIntervals?.push(...r.sensorNonwearIntervals ?? []), i.denominatorIntervals?.push(...r.denominatorIntervals ?? []), i.intensityIntervals.push(...r.intensityIntervals);
	for (const a of Object.keys(i.maskSummary)) i.maskSummary[a] += r.maskSummary[a];
	const o = await a().summarizePhysicalActivityTrace({
		...s.request,
		values: [...Array.from(s.request.values), ...Array.from(n.request.values)],
		displayValues: [...Array.from(s.request.displayValues), ...Array.from(n.request.displayValues)],
		included: [...s.request.included, ...n.request.included]
	});
	return i.valueMax = Math.max(i.valueMax, o.valueMax), i.intensitySummary = o.intensity, i.backendOutputSummary = o.backendOutput, i.thresholdDelta = o.thresholdDelta, i;
}
export { T as createPhysicalActivityWorkspaceRepository, q as loadPhysicalActivityFullDayTrace, R as loadPhysicalActivityWorkspaceDays };
