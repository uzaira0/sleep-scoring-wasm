import { J as e, St as a, dt as s, gt as t, n as i } from "./background-jobs-DUPAIf6B.js";
import { E as n, Fr as r, Ir as o, N as l, f as u, h as m, k as c } from "./db-BYjE9wuK.js";
import { o as d, w as p } from "./local-nonwear-unified-BkYef4aY.js";
import { a as h } from "./epoch-utils-BNU9Vmn8.js";
import { a as y, t as g } from "./local-export-worker-DdHOxKzi.js";
import { i as f, n as w, o as v, r as I, t as F } from "./physical-activity-days-BokCYqs_.js";
import { n as M, r as S } from "./physical-activity-classifier-output-DgsYFYTi.js";
import { n as k, t as A } from "./physical-activity-file-store-C53JeP6Y.js";
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
	getLocalFiles: n,
	getAllActivityDaysForFile: u,
	getAllMarkersForFile: m,
	getSensorNonwearForFile: c,
	listDailyGgirSummaries: l
});
function T(e, a) {
	return {
		getLocalFiles: (a, s) => n(e, s),
		getAllActivityDaysForFile: (s) => u(s, e, a),
		getAllMarkersForFile: (a, s) => m(a, s, e),
		getSensorNonwearForFile: (a) => c(a, e),
		listDailyGgirSummaries: (a) => l(a, e),
		db: e
	};
}
function D(e) {
	if (e && 0 !== e.length) return e.includes("human") ? "human" : e.includes("device") || e.includes("detach_nonwear") ? "device" : "algorithm";
}
function P(e, a, s, t, i) {
	const n = e[e.length - 1];
	n && n.reason === t && n.nonwearSource === i && Math.abs(n.endTimestamp - a) < 1e-6 ? n.endTimestamp = s : e.push({
		startTimestamp: a,
		endTimestamp: s,
		reason: t,
		nonwearSource: i
	});
}
function x(e, a, s, t) {
	const i = e[e.length - 1];
	i && i.reason === t && Math.abs(i.endTimestamp - a) < 1e-6 ? i.endTimestamp = s : e.push({
		startTimestamp: a,
		endTimestamp: s,
		reason: t
	});
}
function E(e, a, s, t) {
	const i = e[e.length - 1];
	i && i.tone === t && Math.abs(i.endTimestamp - a) < 1e-6 ? i.endTimestamp = s : e.push({
		startTimestamp: a,
		endTimestamp: s,
		tone: t
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
	return (e?.sleepMarkers ?? []).some(o);
}
function j(e) {
	return (e?.sleepMarkers ?? []).some(r);
}
function C(e) {
	return (e?.nonwearMarkers ?? []).some((e) => null != e.startTimestamp && null != e.endTimestamp);
}
async function G(e) {
	const { file: a, activityDays: s, markersByDate: t, sensorNonwearPeriods: n, ggirSummaries: r, maskPolicy: o, choiAxis: l } = e, u = [], m = new Map(r.map((e) => [e.analysisDate, e])), c = Number.isFinite(a.epochLengthSeconds) && a.epochLengthSeconds > 0 ? a.epochLengthSeconds : 60, p = [...s.entries()].sort(([e], [a]) => e.localeCompare(a)), h = 0 === p.length ? null : await i(e.signal).summarizePhysicalActivityDays({
		policy: F(o),
		intervals: w(t, n),
		days: p.map(([, e]) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: c,
			series: I(e, o, l, c)
		}))
	});
	for (const [i, [w, v]] of p.entries()) {
		e.signal?.throwIfAborted();
		const s = new Float64Array(v.timestamps), n = t.get(w), r = h.days[i].mask;
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
	const y = r.filter((e) => !s.has(e.analysisDate)), g = await Promise.all(y.map((a) => (e.signal?.throwIfAborted(), i(e.signal).ggirSummaryDenominator(a.validHours ?? NaN, a.nonwearMinutes ?? NaN))));
	for (const [i, d] of y.entries()) {
		e.signal?.throwIfAborted();
		const s = g[i], t = {
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
			epochCount: t.totalEpochs,
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
			maskSummary: t,
			wakeWearMinutes: null == d.validHours ? null : s.wakeWearMinutes,
			validWearHours: d.validHours,
			minimumWakeWearMinutes: o.minimumWakeWearMinutes,
			meetsMinimumWakeWear: null != d.validHours && !(s.wakeWearMinutes < o.minimumWakeWearMinutes)
		});
	}
	return u;
}
async function R(e = {}) {
	const a = e.repository ?? b(), s = e.username ?? "anonymous", t = e.maskPolicy ?? v, i = await a.getLocalFiles(a.db, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = [];
	for (const r of i) {
		if (e.signal?.throwIfAborted(), !r.id) continue;
		const i = r.id, o = await a.getAllMarkersForFile(i, s), l = await a.getSensorNonwearForFile(i), u = await a.listDailyGgirSummaries(i), m = p(), c = await k({
			db: a.db ?? null,
			fileId: i,
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
				maskPolicy: t,
				choiAxis: m
			}
		}, async () => G({
			signal: e.signal,
			file: {
				...r,
				id: i
			},
			activityDays: await a.getAllActivityDaysForFile(i),
			markersByDate: o,
			sensorNonwearPeriods: l,
			ggirSummaries: u,
			maskPolicy: t,
			choiAxis: m
		}));
		n.push(...c);
	}
	return n.sort((e, a) => e.filename.localeCompare(a.filename) || e.date.localeCompare(a.date));
}
async function Y(i) {
	const [n, r] = i.dayKey.split(":"), o = Number(n);
	if (!Number.isInteger(o) || !r) return null;
	const l = (u = i.method, g.find((e) => e.method === u) ?? null);
	var u;
	const m = y(i.method), c = i.repository ?? b(), d = i.username ?? "anonymous", h = i.maskPolicy ?? v, M = (await c.getLocalFiles()).find((e) => e.id === o);
	if (!M) return null;
	const k = Number.isFinite(M.epochLengthSeconds) && M.epochLengthSeconds > 0 ? M.epochLengthSeconds : 60, A = (await c.getAllActivityDaysForFile(o)).get(r);
	if (!A) return null;
	const N = "mims" === i.method ? A.mimsUnit : "ggir_enmo" === i.method ? A.ggirEnmo : void 0, T = "preschool_free_living_rf_3_5" === i.method ? S(A) : null, W = l ? "cutpoint" : T ? "classifier" : "backend_output";
	if ("cutpoint" === W && !i.thresholds) return null;
	if ("backend_output" === W && !N) return null;
	const L = l ? new Float64Array("axisY" === l.axis ? A.axisY : A.vectorMagnitude) : T ?? (N ? new Float64Array(N) : /* @__PURE__ */ new Float64Array());
	if (0 === L.length) return null;
	const V = i.source ? A[a(i.source).seriesKey] : void 0, j = V instanceof ArrayBuffer ? new Float64Array(V) : null, C = null !== j && j.length === L.length, G = C && j ? j : L, R = await c.getAllMarkersForFile(o, d), Y = await c.getSensorNonwearForFile(o), q = (await e().summarizePhysicalActivityDays({
		policy: F(h),
		intervals: w(R, Y),
		includeEpochDetails: !0,
		days: [{
			timestamps: new Float64Array(A.timestamps),
			..."cutpoint" === W ? { epochSeconds: k } : {
				values: Float64Array.from(L),
				grid: W,
				fallbackEpochSeconds: k,
				...A.ggirTimestamps ? { ggirTimestamps: new Float64Array(A.ggirTimestamps) } : {}
			},
			series: I(A, h, p(), k)
		}]
	})).days[0], H = "cutpoint" === W ? new Float64Array(A.timestamps) : Float64Array.from(q.timestamps), O = q.epochSeconds, B = {
		reasons: q.reasons,
		nonwearSources: q.nonwearSources,
		summary: f(q.mask)
	}, K = {
		kind: W,
		values: Float64Array.from(L),
		displayValues: Float64Array.from(G),
		countsPerMinuteScale: 60 / k,
		included: Array.from({ length: L.length }, (e, a) => "included" === (B.reasons[a] ?? "included")),
		epochSeconds: O,
		thresholds: i.thresholds ? _(i.thresholds) : null,
		defaultThresholds: l && i.thresholds ? _(l) : null
	}, U = await e().summarizePhysicalActivityTrace(K), $ = [], z = [], J = [], Q = [], X = [], Z = [], ee = [], ae = [], se = [];
	let te = Number.POSITIVE_INFINITY, ie = Number.NEGATIVE_INFINITY;
	for (let e = 0; e < L.length; e++) {
		const a = L[e] ?? NaN, s = H[e] ?? NaN, t = B.reasons[e] ?? "included", i = U.displayValues[e] ?? NaN;
		if (Number.isFinite(s)) {
			const a = Z[Z.length - 1];
			(null == a || s > a) && (Z.push(s), ee.push(i), ae.push("included" === t && Number.isFinite(i) ? 1 : 0));
			const n = s + O;
			te = Math.min(te, s), ie = Math.max(ie, n), x(X, s, n, t);
			const r = B.nonwearSources[e] ?? [];
			r.some((e) => "algorithm" === D([e])) && P(J, s, n, "nonwear", "algorithm"), r.some((e) => "device" === D([e])) && P(Q, s, n, "nonwear", "device"), "included" !== t && P(z, s, n, t, D(B.nonwearSources[e]));
		}
		if (!Number.isFinite(a)) continue;
		const n = U.tones[e] ?? null, r = "unclassified" === n ? null : n;
		("classifier" !== W || r) && Number.isFinite(s) && ("included" === t && r && E(se, s, s + O, r), $.push({
			index: e,
			timestamp: s,
			value: i,
			tone: r,
			maskReason: t
		}));
	}
	return $.length < 2 || !Number.isFinite(te) || !Number.isFinite(ie) || ie <= te ? null : {
		trace: {
			traceKind: W,
			dayKey: i.dayKey,
			fileId: o,
			filename: M.filename,
			participantId: M.participantId ?? "",
			date: r,
			method: i.method,
			methodLabel: l?.label ?? m.label,
			sourceLabel: C && i.source ? t(i.source, M.sourceProfileId ? s[M.sourceProfileId] : void 0) ?? a(i.source).label : l?.sourceLabel ?? m.signalLabel,
			epochLengthSeconds: O,
			valueMax: Math.max(U.valueMax, l?.cutpointScaleMax ?? ("classifier" === W ? 5 : 1)),
			originalEpochCount: L.length,
			selectionTimestamps: Float64Array.from(Z),
			selectionValues: Float64Array.from(ee),
			selectionIncluded: Uint8Array.from(ae),
			viewportStartTimestamp: te,
			viewportEndTimestamp: ie,
			maskIntervals: z,
			algorithmNonwearIntervals: J,
			sensorNonwearIntervals: Q,
			denominatorIntervals: X,
			intensityIntervals: se,
			maskSummary: B.summary,
			intensitySummary: U.intensity,
			backendOutputSummary: U.backendOutput,
			points: $,
			...i.thresholds ? { thresholds: i.thresholds } : {},
			thresholdDelta: U.thresholdDelta
		},
		request: K
	};
}
async function q(a) {
	const s = await Y(a);
	if (!s) return null;
	const { trace: t } = s;
	if (48 !== a.viewHours) return t;
	const i = await h(t.date), n = await Y({
		...a,
		dayKey: `${String(t.fileId)}:${i}`
	});
	if (!n) return t;
	const r = n.trace;
	t.points.push(...r.points.map((e) => ({
		...e,
		index: e.index + t.originalEpochCount
	}))), t.originalEpochCount += r.originalEpochCount, t.selectionTimestamps = Float64Array.from([...t.selectionTimestamps, ...r.selectionTimestamps]), t.selectionValues = Float64Array.from([...t.selectionValues, ...r.selectionValues]), t.selectionIncluded = Uint8Array.from([...t.selectionIncluded, ...r.selectionIncluded]), t.viewportEndTimestamp = r.viewportEndTimestamp, t.maskIntervals.push(...r.maskIntervals), t.algorithmNonwearIntervals?.push(...r.algorithmNonwearIntervals ?? []), t.sensorNonwearIntervals?.push(...r.sensorNonwearIntervals ?? []), t.denominatorIntervals?.push(...r.denominatorIntervals ?? []), t.intensityIntervals.push(...r.intensityIntervals);
	for (const e of Object.keys(t.maskSummary)) t.maskSummary[e] += r.maskSummary[e];
	const o = await e().summarizePhysicalActivityTrace({
		...s.request,
		values: [...Array.from(s.request.values), ...Array.from(n.request.values)],
		displayValues: [...Array.from(s.request.displayValues), ...Array.from(n.request.displayValues)],
		included: [...s.request.included, ...n.request.included]
	});
	return t.valueMax = Math.max(t.valueMax, o.valueMax), t.intensitySummary = o.intensity, t.backendOutputSummary = o.backendOutput, t.thresholdDelta = o.thresholdDelta, t;
}
export { T as createPhysicalActivityWorkspaceRepository, q as loadPhysicalActivityFullDayTrace, R as loadPhysicalActivityWorkspaceDays };
