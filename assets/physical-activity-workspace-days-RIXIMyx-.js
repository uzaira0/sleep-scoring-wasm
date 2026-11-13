import { O as e, T as a, b as s } from "./schema-BHdDgVmx.js";
import { r as t } from "./workers-DmTzGLlL.js";
import { t as i } from "./background-jobs-DEvUJdJD.js";
import { f as n } from "./nonwear-display-slots-B482bvPl.js";
import { L as r, P as o, S as l, V as m, y as u } from "./store-Ws1lFj33.js";
import { $ as c, et as d } from "./per-source-defaults-sZh2GVm_.js";
import { E as p, c as h } from "./local-nonwear-unified-Czq-0way.js";
import { r as y, s as f } from "./physical-activity-cutpoint-presets-C2Egk9G9.js";
import { n as g } from "./night-session-Da3pLkP9.js";
import { t as w } from "./physical-activity-mask-DhuGxJ4q.js";
import { i as v, n as I, r as M, t as F } from "./physical-activity-days-DVpC7e2W.js";
import { n as k, r as S } from "./physical-activity-classifier-output-UPWRpoUn.js";
import { n as A, t as N } from "./physical-activity-file-store-CrjDowK4.js";
const b = () => ({
	getLocalFiles: o,
	getAllActivityDaysForFile: u,
	getAllMarkersForFile: l,
	getSensorNonwearForFile: r,
	listDailyGgirSummaries: m
});
function T(e, a) {
	return {
		getLocalFiles: (a, s) => o(e, s),
		getAllActivityDaysForFile: (s) => u(s, e, a),
		getAllMarkersForFile: (a, s) => l(a, s, e),
		getSensorNonwearForFile: (a) => r(a, e),
		listDailyGgirSummaries: (a) => m(a, e),
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
	return (e?.sleepMarkers ?? []).some(d);
}
function _(e) {
	return (e?.sleepMarkers ?? []).some(c);
}
function G(e) {
	return (e?.nonwearMarkers ?? []).some((e) => null != e.startTimestamp && null != e.endTimestamp);
}
async function C(e) {
	const { file: a, activityDays: s, markersByDate: t, sensorNonwearPeriods: n, ggirSummaries: r, maskPolicy: o, choiAxis: l } = e, m = [], u = new Map(r.map((e) => [e.analysisDate, e])), c = Number.isFinite(a.epochLengthSeconds) && a.epochLengthSeconds > 0 ? a.epochLengthSeconds : 60, d = [...s.entries()].sort(([e], [a]) => e.localeCompare(a)), p = 0 === d.length ? null : await i(e.signal).summarizePhysicalActivityDays({
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
		const s = new Float64Array(I.timestamps), n = t.get(w), r = p.days[i].mask;
		m.push({
			key: `${String(a.id)}:${w}`,
			fileId: a.id,
			filename: a.filename,
			participantId: a.participantId ?? "",
			scoringIdentity: g(a),
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
			storedNonwearDetectors: Object.keys(h(I, l)),
			maskSummary: v(r),
			wakeWearMinutes: r.wakeWearMinutes,
			validWearHours: u.get(w)?.validHours ?? null,
			minimumWakeWearMinutes: o.minimumWakeWearMinutes,
			meetsMinimumWakeWear: r.meetsMinimumWakeWear
		});
	}
	const y = r.filter((e) => !s.has(e.analysisDate)), f = await Promise.all(y.map((a) => (e.signal?.throwIfAborted(), i(e.signal).ggirSummaryDenominator(a.validHours ?? NaN, a.nonwearMinutes ?? NaN))));
	for (const [i, h] of y.entries()) {
		e.signal?.throwIfAborted();
		const s = f[i], t = {
			totalEpochs: s.totalEpochs,
			includedEpochs: s.includedEpochs,
			nonwearEpochs: s.nonwearEpochs,
			mainSleepEpochs: 0,
			napEpochs: 0,
			overlapEpochs: 0
		};
		m.push({
			key: `${String(a.id)}:${h.analysisDate}`,
			fileId: a.id,
			filename: a.filename,
			participantId: a.participantId ?? "",
			scoringIdentity: g(a),
			sourceProfileId: a.sourceProfileId ?? null,
			date: h.analysisDate,
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
			wakeWearMinutes: null == h.validHours ? null : s.wakeWearMinutes,
			validWearHours: h.validHours,
			minimumWakeWearMinutes: o.minimumWakeWearMinutes,
			meetsMinimumWakeWear: null != h.validHours && !(s.wakeWearMinutes < o.minimumWakeWearMinutes)
		});
	}
	return m;
}
async function O(e = {}) {
	const a = e.repository ?? b(), s = e.username ?? "anonymous", t = e.maskPolicy ?? w, i = await a.getLocalFiles(a.db, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = [];
	for (const r of i) {
		if (e.signal?.throwIfAborted(), !r.id) continue;
		const i = r.id, o = await a.getAllMarkersForFile(i, s), l = await a.getSensorNonwearForFile(i), m = await a.listDailyGgirSummaries(i), u = p(), c = await A({
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
async function Y(i) {
	const [n, r] = i.dayKey.split(":"), o = Number(n);
	if (!Number.isInteger(o) || !r) return null;
	const l = (m = i.method, y.find((e) => e.method === m) ?? null);
	var m;
	const u = f(i.method), c = i.repository ?? b(), d = i.username ?? "anonymous", h = i.maskPolicy ?? w, g = (await c.getLocalFiles()).find((e) => e.id === o);
	if (!g) return null;
	const k = Number.isFinite(g.epochLengthSeconds) && g.epochLengthSeconds > 0 ? g.epochLengthSeconds : 60, A = (await c.getAllActivityDaysForFile(o)).get(r);
	if (!A) return null;
	const N = "mims" === i.method ? A.mimsUnit : "ggir_enmo" === i.method ? A.ggirEnmo : void 0, T = "preschool_free_living_rf_3_5" === i.method ? S(A) : null, W = l ? "cutpoint" : T ? "classifier" : "backend_output";
	if ("cutpoint" === W && !i.thresholds) return null;
	if ("backend_output" === W && !N) return null;
	const L = l ? new Float64Array("axisY" === l.axis ? A.axisY : A.vectorMagnitude) : T ?? (N ? new Float64Array(N) : /* @__PURE__ */ new Float64Array());
	if (0 === L.length) return null;
	const V = i.source ? A[e(i.source).seriesKey] : void 0, _ = V instanceof ArrayBuffer ? new Float64Array(V) : null, G = null !== _ && _.length === L.length, C = G && _ ? _ : L, O = await c.getAllMarkersForFile(o, d), Y = await c.getSensorNonwearForFile(o), q = (await t().summarizePhysicalActivityDays({
		policy: F(h),
		intervals: I(O, Y),
		includeEpochDetails: !0,
		days: [{
			timestamps: new Float64Array(A.timestamps),
			..."cutpoint" === W ? { epochSeconds: k } : {
				values: Float64Array.from(L),
				grid: W,
				fallbackEpochSeconds: k,
				...A.ggirTimestamps ? { ggirTimestamps: new Float64Array(A.ggirTimestamps) } : {}
			},
			series: M(A, h, p(), k)
		}]
	})).days[0], H = "cutpoint" === W ? new Float64Array(A.timestamps) : Float64Array.from(q.timestamps), $ = q.epochSeconds, K = {
		reasons: q.reasons,
		nonwearSources: q.nonwearSources,
		summary: v(q.mask)
	}, R = {
		kind: W,
		values: Float64Array.from(L),
		displayValues: Float64Array.from(C),
		countsPerMinuteScale: 60 / k,
		included: Array.from({ length: L.length }, (e, a) => "included" === (K.reasons[a] ?? "included")),
		epochSeconds: $,
		thresholds: i.thresholds ? j(i.thresholds) : null,
		defaultThresholds: l && i.thresholds ? j(l) : null
	}, U = await t().summarizePhysicalActivityTrace(R), z = [], B = [], Q = [], J = [], X = [], Z = [], ee = [], ae = [], se = [];
	let te = Number.POSITIVE_INFINITY, ie = Number.NEGATIVE_INFINITY;
	for (let e = 0; e < L.length; e++) {
		const a = L[e] ?? NaN, s = H[e] ?? NaN, t = K.reasons[e] ?? "included", i = U.displayValues[e] ?? NaN;
		if (Number.isFinite(s)) {
			const a = Z[Z.length - 1];
			(null == a || s > a) && (Z.push(s), ee.push(i), ae.push("included" === t && Number.isFinite(i) ? 1 : 0));
			const n = s + $;
			te = Math.min(te, s), ie = Math.max(ie, n), x(X, s, n, t);
			const r = K.nonwearSources[e] ?? [];
			r.some((e) => "algorithm" === D([e])) && P(Q, s, n, "nonwear", "algorithm"), r.some((e) => "device" === D([e])) && P(J, s, n, "nonwear", "device"), "included" !== t && P(B, s, n, t, D(K.nonwearSources[e]));
		}
		if (!Number.isFinite(a)) continue;
		const n = U.tones[e] ?? null, r = "unclassified" === n ? null : n;
		("classifier" !== W || r) && Number.isFinite(s) && ("included" === t && r && E(se, s, s + $, r), z.push({
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
			filename: g.filename,
			participantId: g.participantId ?? "",
			date: r,
			method: i.method,
			methodLabel: l?.label ?? u.label,
			sourceLabel: G && i.source ? a(i.source, g.sourceProfileId ? s[g.sourceProfileId] : void 0) ?? e(i.source).label : l?.sourceLabel ?? u.signalLabel,
			epochLengthSeconds: $,
			valueMax: Math.max(U.valueMax, l?.cutpointScaleMax ?? ("classifier" === W ? 5 : 1)),
			originalEpochCount: L.length,
			selectionTimestamps: Float64Array.from(Z),
			selectionValues: Float64Array.from(ee),
			selectionIncluded: Uint8Array.from(ae),
			viewportStartTimestamp: te,
			viewportEndTimestamp: ie,
			maskIntervals: B,
			algorithmNonwearIntervals: Q,
			sensorNonwearIntervals: J,
			denominatorIntervals: X,
			intensityIntervals: se,
			maskSummary: K.summary,
			intensitySummary: U.intensity,
			backendOutputSummary: U.backendOutput,
			points: z,
			...i.thresholds ? { thresholds: i.thresholds } : {},
			thresholdDelta: U.thresholdDelta
		},
		request: R
	};
}
async function q(e) {
	const a = await Y(e);
	if (!a) return null;
	const { trace: s } = a;
	if (48 !== e.viewHours) return s;
	const i = await n(s.date), r = await Y({
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
export { T as createPhysicalActivityWorkspaceRepository, q as loadPhysicalActivityFullDayTrace, O as loadPhysicalActivityWorkspaceDays };
