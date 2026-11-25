import { G as e, Lr as a, P as s, n as i, z as t } from "./background-jobs-CkfFAB3h.js";
import { Dr as n, M as r, O as o, Or as l, T as u, f as m, h as c } from "./db-BOSZ3ZCP.js";
import { o as d, w as h } from "./local-nonwear-unified-C8cWY_VJ.js";
import { a as p } from "./epoch-utils-C_YLPNox.js";
import { a as y, t as g } from "./local-export-shard-worker-Cgy9R1ac.js";
import { i as f, n as w, o as v, r as I, t as M } from "./physical-activity-days-RgtFI_jU.js";
import { n as F, r as S } from "./physical-activity-classifier-output-CCX1D9cy.js";
import { n as k, t as A } from "./physical-activity-file-store-BgzYIaoC.js";
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
	getLocalFiles: u,
	getAllActivityDaysForFile: m,
	getAllMarkersForFile: c,
	getSensorNonwearForFile: o,
	listDailyGgirSummaries: r
});
function T(e, a) {
	return {
		getLocalFiles: (a, s) => u(e, s),
		getAllActivityDaysForFile: (s) => m(s, e, a),
		getAllMarkersForFile: (a, s) => c(a, s, e),
		getSensorNonwearForFile: (a) => o(a, e),
		listDailyGgirSummaries: (a) => r(a, e),
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
function L(e) {
	return e ? new Float64Array(e).length : 0;
}
function W(e) {
	const a = [];
	return L(e.axisY) > 0 && a.push("Y-axis counts"), L(e.vectorMagnitude) > 0 && a.push("Vector magnitude counts"), L(e.mimsUnit) > 0 && a.push("MIMS_UNIT"), F(e) && a.push("actimetric preschool class epochs"), L(e.ggirEnmo) > 0 && a.push("GGIR ENMO"), a;
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
	return (e?.sleepMarkers ?? []).some(l);
}
function G(e) {
	return (e?.sleepMarkers ?? []).some(n);
}
function j(e) {
	return (e?.nonwearMarkers ?? []).some((e) => null != e.startTimestamp && null != e.endTimestamp);
}
async function C(e) {
	const { file: a, activityDays: s, markersByDate: t, sensorNonwearPeriods: n, ggirSummaries: r, maskPolicy: o, choiAxis: l } = e, u = [], m = new Map(r.map((e) => [e.analysisDate, e])), c = Number.isFinite(a.epochLengthSeconds) && a.epochLengthSeconds > 0 ? a.epochLengthSeconds : 60, h = [...s.entries()].sort(([e], [a]) => e.localeCompare(a)), p = 0 === h.length ? null : await i(e.signal).summarizePhysicalActivityDays({
		policy: M(o),
		intervals: w(t, n),
		days: h.map(([, e]) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: c,
			series: I(e, o, l, c)
		}))
	});
	for (const [i, [w, v]] of h.entries()) {
		e.signal?.throwIfAborted();
		const s = new Float64Array(v.timestamps), n = t.get(w), r = p.days[i].mask;
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
			signalLabels: m.has(w) ? [.../* @__PURE__ */ new Set([...W(v), "GGIR daily summary"])] : W(v),
			hasAxisY: L(v.axisY) > 0,
			hasVectorMagnitude: L(v.vectorMagnitude) > 0,
			hasMims: L(v.mimsUnit) > 0,
			hasPreschoolRf: F(v),
			hasGgirDailySummary: m.has(w),
			hasManualSleep: G(n),
			hasManualNaps: V(n),
			hasManualNonwear: j(n),
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
async function O(e = {}) {
	const a = e.repository ?? b(), s = e.username ?? "anonymous", i = e.maskPolicy ?? v, t = await a.getLocalFiles(a.db, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = [];
	for (const r of t) {
		if (e.signal?.throwIfAborted(), !r.id) continue;
		const t = r.id, o = await a.getAllMarkersForFile(t, s), l = await a.getSensorNonwearForFile(t), u = await a.listDailyGgirSummaries(t), m = h(), c = await k({
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
		}, async () => C({
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
async function R(i) {
	const [n, r] = i.dayKey.split(":"), o = Number(n);
	if (!Number.isInteger(o) || !r) return null;
	const l = (u = i.method, g.find((e) => e.method === u) ?? null);
	var u;
	const m = y(i.method), c = i.repository ?? b(), d = i.username ?? "anonymous", p = i.maskPolicy ?? v, F = (await c.getLocalFiles()).find((e) => e.id === o);
	if (!F) return null;
	const k = Number.isFinite(F.epochLengthSeconds) && F.epochLengthSeconds > 0 ? F.epochLengthSeconds : 60, A = (await c.getAllActivityDaysForFile(o)).get(r);
	if (!A) return null;
	const N = "mims" === i.method ? A.mimsUnit : "ggir_enmo" === i.method ? A.ggirEnmo : void 0, T = "preschool_free_living_rf_3_5" === i.method ? S(A) : null, L = l ? "cutpoint" : T ? "classifier" : "backend_output";
	if ("cutpoint" === L && !i.thresholds) return null;
	if ("backend_output" === L && !N) return null;
	const W = l ? new Float64Array("axisY" === l.axis ? A.axisY : A.vectorMagnitude) : T ?? (N ? new Float64Array(N) : /* @__PURE__ */ new Float64Array());
	if (0 === W.length) return null;
	const V = i.source ? A[e(i.source).seriesKey] : void 0, G = V instanceof ArrayBuffer ? new Float64Array(V) : null, j = null !== G && G.length === W.length, C = j && G ? G : W, O = await c.getAllMarkersForFile(o, d), R = await c.getSensorNonwearForFile(o), Y = (await a().summarizePhysicalActivityDays({
		policy: M(p),
		intervals: w(O, R),
		includeEpochDetails: !0,
		days: [{
			timestamps: new Float64Array(A.timestamps),
			..."cutpoint" === L ? { epochSeconds: k } : {
				values: Float64Array.from(W),
				grid: L,
				fallbackEpochSeconds: k,
				...A.ggirTimestamps ? { ggirTimestamps: new Float64Array(A.ggirTimestamps) } : {}
			},
			series: I(A, p, h(), k)
		}]
	})).days[0], q = "cutpoint" === L ? new Float64Array(A.timestamps) : Float64Array.from(Y.timestamps), H = Y.epochSeconds, B = {
		reasons: Y.reasons,
		nonwearSources: Y.nonwearSources,
		summary: f(Y.mask)
	}, K = {
		kind: L,
		values: Float64Array.from(W),
		displayValues: Float64Array.from(C),
		countsPerMinuteScale: 60 / k,
		included: Array.from({ length: W.length }, (e, a) => "included" === (B.reasons[a] ?? "included")),
		epochSeconds: H,
		thresholds: i.thresholds ? _(i.thresholds) : null,
		defaultThresholds: l && i.thresholds ? _(l) : null
	}, U = await a().summarizePhysicalActivityTrace(K), $ = [], z = [], J = [], Q = [], X = [], Z = [], ee = [], ae = [], se = [];
	let ie = Number.POSITIVE_INFINITY, te = Number.NEGATIVE_INFINITY;
	for (let e = 0; e < W.length; e++) {
		const a = W[e] ?? NaN, s = q[e] ?? NaN, i = B.reasons[e] ?? "included", t = U.displayValues[e] ?? NaN;
		if (Number.isFinite(s)) {
			const a = Z[Z.length - 1];
			(null == a || s > a) && (Z.push(s), ee.push(t), ae.push("included" === i && Number.isFinite(t) ? 1 : 0));
			const n = s + H;
			ie = Math.min(ie, s), te = Math.max(te, n), x(X, s, n, i);
			const r = B.nonwearSources[e] ?? [];
			r.some((e) => "algorithm" === D([e])) && P(J, s, n, "nonwear", "algorithm"), r.some((e) => "device" === D([e])) && P(Q, s, n, "nonwear", "device"), "included" !== i && P(z, s, n, i, D(B.nonwearSources[e]));
		}
		if (!Number.isFinite(a)) continue;
		const n = U.tones[e] ?? null, r = "unclassified" === n ? null : n;
		("classifier" !== L || r) && Number.isFinite(s) && ("included" === i && r && E(se, s, s + H, r), $.push({
			index: e,
			timestamp: s,
			value: t,
			tone: r,
			maskReason: i
		}));
	}
	return $.length < 2 || !Number.isFinite(ie) || !Number.isFinite(te) || te <= ie ? null : {
		trace: {
			traceKind: L,
			dayKey: i.dayKey,
			fileId: o,
			filename: F.filename,
			participantId: F.participantId ?? "",
			date: r,
			method: i.method,
			methodLabel: l?.label ?? m.label,
			sourceLabel: j && i.source ? t(i.source, F.sourceProfileId ? s[F.sourceProfileId] : void 0) ?? e(i.source).label : l?.sourceLabel ?? m.signalLabel,
			epochLengthSeconds: H,
			valueMax: Math.max(U.valueMax, l?.cutpointScaleMax ?? ("classifier" === L ? 5 : 1)),
			originalEpochCount: W.length,
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
			...i.thresholds ? { thresholds: i.thresholds } : {},
			thresholdDelta: U.thresholdDelta
		},
		request: K
	};
}
async function Y(e) {
	const s = await R(e);
	if (!s) return null;
	const { trace: i } = s;
	if (48 !== e.viewHours) return i;
	const t = await p(i.date), n = await R({
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
export { T as createPhysicalActivityWorkspaceRepository, Y as loadPhysicalActivityFullDayTrace, O as loadPhysicalActivityWorkspaceDays };
