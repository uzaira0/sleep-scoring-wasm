import { E as e, T as a, b as s } from "./schema-B_tCLPTi.js";
import { r as t } from "./workers-ChOvAmOP.js";
import { t as i } from "./background-jobs-CKsUPhWg.js";
import { p as n } from "./nonwear-display-slots-DjTz9tyY.js";
import { C as r, F as o, H as l, R as m, b as u } from "./store-DM814ES4.js";
import { h as c, m as d } from "./sleep-period-detection-DACRcT22.js";
import { E as h, c as p } from "./local-nonwear-unified-BxFayBM2.js";
import { E as y, S as g } from "./valid-day-criteria-BvWW5KT6.js";
import { n as f } from "./night-session-H5PR5Feu.js";
import { t as w } from "./physical-activity-mask-vt0u0WMt.js";
import { i as v, n as I, r as M, t as F } from "./physical-activity-days-urwnpMuF.js";
import { n as k, r as S } from "./physical-activity-classifier-output-3O9IaNfA.js";
import { n as A, t as N } from "./physical-activity-file-store-DcXoDumA.js";
const b = () => ({
	getLocalFiles: o,
	getAllActivityDaysForFile: u,
	getAllMarkersForFile: r,
	getSensorNonwearForFile: m,
	listDailyGgirSummaries: l
});
function T(e, a) {
	return {
		getLocalFiles: (a, s) => o(e, s),
		getAllActivityDaysForFile: (s) => u(s, e, a),
		getAllMarkersForFile: (a, s) => r(a, s, e),
		getSensorNonwearForFile: (a) => m(a, e),
		listDailyGgirSummaries: (a) => l(a, e),
		db: e
	};
}
function E(e) {
	if (e && 0 !== e.length) return e.includes("human") ? "human" : e.includes("device") || e.includes("detach_nonwear") ? "device" : "algorithm";
}
function D(e, a, s, t, i) {
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
function P(e, a, s, t) {
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
	return W(e.axisY) > 0 && a.push("Y-axis counts"), W(e.vectorMagnitude) > 0 && a.push("Vector magnitude counts"), W(e.mimsUnit) > 0 && a.push("MIMS_UNIT"), k(e) && a.push("actimetric preschool class epochs"), W(e.ggirEnmo) > 0 && a.push("GGIR ENMO"), a;
}
function j(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function V(e) {
	return (e?.sleepMarkers ?? []).some(c);
}
function _(e) {
	return (e?.sleepMarkers ?? []).some(d);
}
function G(e) {
	return (e?.nonwearMarkers ?? []).some((e) => null != e.startTimestamp && null != e.endTimestamp);
}
async function C(e) {
	const { file: a, activityDays: s, markersByDate: t, sensorNonwearPeriods: n, ggirSummaries: r, maskPolicy: o, choiAxis: l } = e, m = [], u = new Map(r.map((e) => [e.analysisDate, e])), c = Number.isFinite(a.epochLengthSeconds) && a.epochLengthSeconds > 0 ? a.epochLengthSeconds : 60, d = [...s.entries()].sort(([e], [a]) => e.localeCompare(a)), h = 0 === d.length ? null : await i(e.signal).summarizePhysicalActivityDays({
		policy: F(o),
		intervals: I(t, n),
		days: d.map(([, e]) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: c,
			series: M(e, o, l, c)
		}))
	});
	for (const [i, [w, I]] of d.entries()) {
		e.signal?.throwIfAborted();
		const s = new Float64Array(I.timestamps), n = t.get(w), r = h.days[i].mask;
		m.push({
			key: `${String(a.id)}:${w}`,
			fileId: a.id,
			filename: a.filename,
			participantId: a.participantId ?? "",
			scoringIdentity: f(a),
			sourceProfileId: a.sourceProfileId ?? null,
			date: w,
			epochLengthSeconds: c,
			epochCount: s.length,
			signalLabels: u.has(w) ? [.../* @__PURE__ */ new Set([...L(I), "GGIR daily summary"])] : L(I),
			hasAxisY: W(I.axisY) > 0,
			hasVectorMagnitude: W(I.vectorMagnitude) > 0,
			hasMims: W(I.mimsUnit) > 0,
			hasPreschoolRf: k(I),
			hasGgirDailySummary: u.has(w),
			hasManualSleep: _(n),
			hasManualNaps: V(n),
			hasManualNonwear: G(n),
			storedNonwearDetectors: Object.keys(p(I, l)),
			maskSummary: v(r),
			wakeWearMinutes: r.wakeWearMinutes,
			validWearHours: u.get(w)?.validHours ?? null,
			minimumWakeWearMinutes: o.minimumWakeWearMinutes,
			meetsMinimumWakeWear: r.meetsMinimumWakeWear
		});
	}
	const y = r.filter((e) => !s.has(e.analysisDate)), g = await Promise.all(y.map((a) => (e.signal?.throwIfAborted(), i(e.signal).ggirSummaryDenominator(a.validHours ?? NaN, a.nonwearMinutes ?? NaN))));
	for (const [i, p] of y.entries()) {
		e.signal?.throwIfAborted();
		const s = g[i], t = {
			totalEpochs: s.totalEpochs,
			includedEpochs: s.includedEpochs,
			nonwearEpochs: s.nonwearEpochs,
			mainSleepEpochs: 0,
			napEpochs: 0,
			overlapEpochs: 0
		};
		m.push({
			key: `${String(a.id)}:${p.analysisDate}`,
			fileId: a.id,
			filename: a.filename,
			participantId: a.participantId ?? "",
			scoringIdentity: f(a),
			sourceProfileId: a.sourceProfileId ?? null,
			date: p.analysisDate,
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
			wakeWearMinutes: null == p.validHours ? null : s.wakeWearMinutes,
			validWearHours: p.validHours,
			minimumWakeWearMinutes: o.minimumWakeWearMinutes,
			meetsMinimumWakeWear: null != p.validHours && !(s.wakeWearMinutes < o.minimumWakeWearMinutes)
		});
	}
	return m;
}
async function H(e = {}) {
	const a = e.repository ?? b(), s = e.username ?? "anonymous", t = e.maskPolicy ?? w, i = await a.getLocalFiles(a.db, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = [];
	for (const r of i) {
		if (e.signal?.throwIfAborted(), !r.id) continue;
		const i = r.id, o = await a.getAllMarkersForFile(i, s), l = await a.getSensorNonwearForFile(i), m = await a.listDailyGgirSummaries(i), u = h(), c = await A({
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
				markers: N(o),
				sensorNonwearPeriods: l,
				ggirSummaries: m,
				maskPolicy: t,
				choiAxis: u
			}
		}, async () => C({
			signal: e.signal,
			file: {
				...r,
				id: i
			},
			activityDays: await a.getAllActivityDaysForFile(i),
			markersByDate: o,
			sensorNonwearPeriods: l,
			ggirSummaries: m,
			maskPolicy: t,
			choiAxis: u
		}));
		n.push(...c);
	}
	return n.sort((e, a) => e.filename.localeCompare(a.filename) || e.date.localeCompare(a.date));
}
async function O(i) {
	const [n, r] = i.dayKey.split(":"), o = Number(n);
	if (!Number.isInteger(o) || !r) return null;
	const l = (m = i.method, g.find((e) => e.method === m) ?? null);
	var m;
	const u = y(i.method), c = i.repository ?? b(), d = i.username ?? "anonymous", p = i.maskPolicy ?? w, f = (await c.getLocalFiles()).find((e) => e.id === o);
	if (!f) return null;
	const k = Number.isFinite(f.epochLengthSeconds) && f.epochLengthSeconds > 0 ? f.epochLengthSeconds : 60, A = (await c.getAllActivityDaysForFile(o)).get(r);
	if (!A) return null;
	const N = "mims" === i.method ? A.mimsUnit : "ggir_enmo" === i.method ? A.ggirEnmo : void 0, T = "preschool_free_living_rf_3_5" === i.method ? S(A) : null, W = l ? "cutpoint" : T ? "classifier" : "backend_output";
	if ("cutpoint" === W && !i.thresholds) return null;
	if ("backend_output" === W && !N) return null;
	const L = l ? new Float64Array("axisY" === l.axis ? A.axisY : A.vectorMagnitude) : T ?? (N ? new Float64Array(N) : /* @__PURE__ */ new Float64Array());
	if (0 === L.length) return null;
	const V = i.source ? A[e(i.source).seriesKey] : void 0, _ = V instanceof ArrayBuffer ? new Float64Array(V) : null, G = null !== _ && _.length === L.length, C = G && _ ? _ : L, H = await c.getAllMarkersForFile(o, d), O = await c.getSensorNonwearForFile(o), Y = (await t().summarizePhysicalActivityDays({
		policy: F(p),
		intervals: I(H, O),
		includeEpochDetails: !0,
		days: [{
			timestamps: new Float64Array(A.timestamps),
			..."cutpoint" === W ? { epochSeconds: k } : {
				values: Float64Array.from(L),
				grid: W,
				fallbackEpochSeconds: k,
				...A.ggirTimestamps ? { ggirTimestamps: new Float64Array(A.ggirTimestamps) } : {}
			},
			series: M(A, p, h(), k)
		}]
	})).days[0], q = "cutpoint" === W ? new Float64Array(A.timestamps) : Float64Array.from(Y.timestamps), R = Y.epochSeconds, K = {
		reasons: Y.reasons,
		nonwearSources: Y.nonwearSources,
		summary: v(Y.mask)
	}, U = {
		kind: W,
		values: Float64Array.from(L),
		displayValues: Float64Array.from(C),
		countsPerMinuteScale: 60 / k,
		included: Array.from({ length: L.length }, (e, a) => "included" === (K.reasons[a] ?? "included")),
		epochSeconds: R,
		thresholds: i.thresholds ? j(i.thresholds) : null,
		defaultThresholds: l && i.thresholds ? j(l) : null
	}, $ = await t().summarizePhysicalActivityTrace(U), z = [], B = [], J = [], Q = [], X = [], Z = [], ee = [], ae = [], se = [];
	let te = Number.POSITIVE_INFINITY, ie = Number.NEGATIVE_INFINITY;
	for (let e = 0; e < L.length; e++) {
		const a = L[e] ?? NaN, s = q[e] ?? NaN, t = K.reasons[e] ?? "included", i = $.displayValues[e] ?? NaN;
		if (Number.isFinite(s)) {
			const a = Z[Z.length - 1];
			(null == a || s > a) && (Z.push(s), ee.push(i), ae.push("included" === t && Number.isFinite(i) ? 1 : 0));
			const n = s + R;
			te = Math.min(te, s), ie = Math.max(ie, n), x(X, s, n, t);
			const r = K.nonwearSources[e] ?? [];
			r.some((e) => "algorithm" === E([e])) && D(J, s, n, "nonwear", "algorithm"), r.some((e) => "device" === E([e])) && D(Q, s, n, "nonwear", "device"), "included" !== t && D(B, s, n, t, E(K.nonwearSources[e]));
		}
		if (!Number.isFinite(a)) continue;
		const n = $.tones[e] ?? null, r = "unclassified" === n ? null : n;
		("classifier" !== W || r) && Number.isFinite(s) && ("included" === t && r && P(se, s, s + R, r), z.push({
			index: e,
			timestamp: s,
			value: i,
			tone: r,
			maskReason: t
		}));
	}
	return z.length < 2 || !Number.isFinite(te) || !Number.isFinite(ie) || ie <= te ? null : {
		trace: {
			traceKind: W,
			dayKey: i.dayKey,
			fileId: o,
			filename: f.filename,
			participantId: f.participantId ?? "",
			date: r,
			method: i.method,
			methodLabel: l?.label ?? u.label,
			sourceLabel: G && i.source ? a(i.source, f.sourceProfileId ? s[f.sourceProfileId] : void 0) ?? e(i.source).label : l?.sourceLabel ?? u.signalLabel,
			epochLengthSeconds: R,
			valueMax: Math.max($.valueMax, l?.cutpointScaleMax ?? ("classifier" === W ? 5 : 1)),
			originalEpochCount: L.length,
			selectionTimestamps: Float64Array.from(Z),
			selectionValues: Float64Array.from(ee),
			selectionIncluded: Uint8Array.from(ae),
			viewportStartTimestamp: te,
			viewportEndTimestamp: ie,
			maskIntervals: B,
			algorithmNonwearIntervals: J,
			sensorNonwearIntervals: Q,
			denominatorIntervals: X,
			intensityIntervals: se,
			maskSummary: K.summary,
			intensitySummary: $.intensity,
			backendOutputSummary: $.backendOutput,
			points: z,
			...i.thresholds ? { thresholds: i.thresholds } : {},
			thresholdDelta: $.thresholdDelta
		},
		request: U
	};
}
async function Y(e) {
	const a = await O(e);
	if (!a) return null;
	const { trace: s } = a;
	if (48 !== e.viewHours) return s;
	const i = await n(s.date), r = await O({
		...e,
		dayKey: `${String(s.fileId)}:${i}`
	});
	if (!r) return s;
	const o = r.trace;
	s.points.push(...o.points.map((e) => ({
		...e,
		index: e.index + s.originalEpochCount
	}))), s.originalEpochCount += o.originalEpochCount, s.selectionTimestamps = Float64Array.from([...s.selectionTimestamps, ...o.selectionTimestamps]), s.selectionValues = Float64Array.from([...s.selectionValues, ...o.selectionValues]), s.selectionIncluded = Uint8Array.from([...s.selectionIncluded, ...o.selectionIncluded]), s.viewportEndTimestamp = o.viewportEndTimestamp, s.maskIntervals.push(...o.maskIntervals), s.algorithmNonwearIntervals?.push(...o.algorithmNonwearIntervals ?? []), s.sensorNonwearIntervals?.push(...o.sensorNonwearIntervals ?? []), s.denominatorIntervals?.push(...o.denominatorIntervals ?? []), s.intensityIntervals.push(...o.intensityIntervals);
	for (const t of Object.keys(s.maskSummary)) s.maskSummary[t] += o.maskSummary[t];
	const l = await t().summarizePhysicalActivityTrace({
		...a.request,
		values: [...Array.from(a.request.values), ...Array.from(r.request.values)],
		displayValues: [...Array.from(a.request.displayValues), ...Array.from(r.request.displayValues)],
		included: [...a.request.included, ...r.request.included]
	});
	return s.valueMax = Math.max(s.valueMax, l.valueMax), s.intensitySummary = l.intensity, s.backendOutputSummary = l.backendOutput, s.thresholdDelta = l.thresholdDelta, s;
}
export { T as createPhysicalActivityWorkspaceRepository, Y as loadPhysicalActivityFullDayTrace, H as loadPhysicalActivityWorkspaceDays };
