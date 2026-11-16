import { C as e, E as a, v as s } from "./schema-D8rqa1Y6.js";
import { r as t } from "./workers-CrU4fDAf.js";
import { n as i } from "./background-jobs-B2uo95VO.js";
import { B as n, I as r, N as o, S as l, y as m } from "./store-StTfKmbj.js";
import { nt as u, rt as c } from "./per-source-defaults-DHWdfoJI.js";
import { E as d, c as h } from "./local-nonwear-unified-DbYlb1Ol.js";
import { r as p, s as y } from "./physical-activity-cutpoint-presets-DYgOVqK-.js";
import { a as f } from "./epoch-utils-CzLU8tdl.js";
import { n as g } from "./night-session-D4FL2rX1.js";
import { t as w } from "./physical-activity-mask-Bmz5hQtK.js";
import { i as v, n as I, r as M, t as F } from "./physical-activity-days-B6uHULh8.js";
import { n as S, r as k } from "./physical-activity-classifier-output-CI3fUHFc.js";
import { n as A, t as N } from "./physical-activity-file-store-CT-GFJFk.js";
const b = () => ({
	getLocalFiles: o,
	getAllActivityDaysForFile: m,
	getAllMarkersForFile: l,
	getSensorNonwearForFile: r,
	listDailyGgirSummaries: n
});
function T(e, a) {
	return {
		getLocalFiles: (a, s) => o(e, s),
		getAllActivityDaysForFile: (s) => m(s, e, a),
		getAllMarkersForFile: (a, s) => l(a, s, e),
		getSensorNonwearForFile: (a) => r(a, e),
		listDailyGgirSummaries: (a) => n(a, e),
		db: e
	};
}
function D(e) {
	if (e && 0 !== e.length) return e.includes("human") ? "human" : e.includes("device") || e.includes("detach_nonwear") ? "device" : "algorithm";
}
function E(e, a, s, t, i) {
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
	return W(e.axisY) > 0 && a.push("Y-axis counts"), W(e.vectorMagnitude) > 0 && a.push("Vector magnitude counts"), W(e.mimsUnit) > 0 && a.push("MIMS_UNIT"), S(e) && a.push("actimetric preschool class epochs"), W(e.ggirEnmo) > 0 && a.push("GGIR ENMO"), a;
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
function G(e) {
	return (e?.sleepMarkers ?? []).some(u);
}
function _(e) {
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
			hasPreschoolRf: S(I),
			hasGgirDailySummary: u.has(w),
			hasManualSleep: G(n),
			hasManualNaps: V(n),
			hasManualNonwear: _(n),
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
async function Y(e = {}) {
	const a = e.repository ?? b(), s = e.username ?? "anonymous", t = e.maskPolicy ?? w, i = await a.getLocalFiles(a.db, { ...e.onlyFileIds ? { onlyFileIds: e.onlyFileIds } : {} }), n = [];
	for (const r of i) {
		if (e.signal?.throwIfAborted(), !r.id) continue;
		const i = r.id, o = await a.getAllMarkersForFile(i, s), l = await a.getSensorNonwearForFile(i), m = await a.listDailyGgirSummaries(i), u = d(), c = await A({
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
async function q(i) {
	const [n, r] = i.dayKey.split(":"), o = Number(n);
	if (!Number.isInteger(o) || !r) return null;
	const l = (m = i.method, p.find((e) => e.method === m) ?? null);
	var m;
	const u = y(i.method), c = i.repository ?? b(), h = i.username ?? "anonymous", f = i.maskPolicy ?? w, g = (await c.getLocalFiles()).find((e) => e.id === o);
	if (!g) return null;
	const S = Number.isFinite(g.epochLengthSeconds) && g.epochLengthSeconds > 0 ? g.epochLengthSeconds : 60, A = (await c.getAllActivityDaysForFile(o)).get(r);
	if (!A) return null;
	const N = "mims" === i.method ? A.mimsUnit : "ggir_enmo" === i.method ? A.ggirEnmo : void 0, T = "preschool_free_living_rf_3_5" === i.method ? k(A) : null, W = l ? "cutpoint" : T ? "classifier" : "backend_output";
	if ("cutpoint" === W && !i.thresholds) return null;
	if ("backend_output" === W && !N) return null;
	const L = l ? new Float64Array("axisY" === l.axis ? A.axisY : A.vectorMagnitude) : T ?? (N ? new Float64Array(N) : /* @__PURE__ */ new Float64Array());
	if (0 === L.length) return null;
	const V = i.source ? A[a(i.source).seriesKey] : void 0, G = V instanceof ArrayBuffer ? new Float64Array(V) : null, _ = null !== G && G.length === L.length, C = _ && G ? G : L, Y = await c.getAllMarkersForFile(o, h), q = await c.getSensorNonwearForFile(o), H = (await t().summarizePhysicalActivityDays({
		policy: F(f),
		intervals: I(Y, q),
		includeEpochDetails: !0,
		days: [{
			timestamps: new Float64Array(A.timestamps),
			..."cutpoint" === W ? { epochSeconds: S } : {
				values: Float64Array.from(L),
				grid: W,
				fallbackEpochSeconds: S,
				...A.ggirTimestamps ? { ggirTimestamps: new Float64Array(A.ggirTimestamps) } : {}
			},
			series: M(A, f, d(), S)
		}]
	})).days[0], O = "cutpoint" === W ? new Float64Array(A.timestamps) : Float64Array.from(H.timestamps), R = H.epochSeconds, U = {
		reasons: H.reasons,
		nonwearSources: H.nonwearSources,
		summary: v(H.mask)
	}, K = {
		kind: W,
		values: Float64Array.from(L),
		displayValues: Float64Array.from(C),
		countsPerMinuteScale: 60 / S,
		included: Array.from({ length: L.length }, (e, a) => "included" === (U.reasons[a] ?? "included")),
		epochSeconds: R,
		thresholds: i.thresholds ? j(i.thresholds) : null,
		defaultThresholds: l && i.thresholds ? j(l) : null
	}, $ = await t().summarizePhysicalActivityTrace(K), z = [], B = [], J = [], Q = [], X = [], Z = [], ee = [], ae = [], se = [];
	let te = Number.POSITIVE_INFINITY, ie = Number.NEGATIVE_INFINITY;
	for (let e = 0; e < L.length; e++) {
		const a = L[e] ?? NaN, s = O[e] ?? NaN, t = U.reasons[e] ?? "included", i = $.displayValues[e] ?? NaN;
		if (Number.isFinite(s)) {
			const a = Z[Z.length - 1];
			(null == a || s > a) && (Z.push(s), ee.push(i), ae.push("included" === t && Number.isFinite(i) ? 1 : 0));
			const n = s + R;
			te = Math.min(te, s), ie = Math.max(ie, n), x(X, s, n, t);
			const r = U.nonwearSources[e] ?? [];
			r.some((e) => "algorithm" === D([e])) && E(J, s, n, "nonwear", "algorithm"), r.some((e) => "device" === D([e])) && E(Q, s, n, "nonwear", "device"), "included" !== t && E(B, s, n, t, D(U.nonwearSources[e]));
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
			filename: g.filename,
			participantId: g.participantId ?? "",
			date: r,
			method: i.method,
			methodLabel: l?.label ?? u.label,
			sourceLabel: _ && i.source ? e(i.source, g.sourceProfileId ? s[g.sourceProfileId] : void 0) ?? a(i.source).label : l?.sourceLabel ?? u.signalLabel,
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
			maskSummary: U.summary,
			intensitySummary: $.intensity,
			backendOutputSummary: $.backendOutput,
			points: z,
			...i.thresholds ? { thresholds: i.thresholds } : {},
			thresholdDelta: $.thresholdDelta
		},
		request: K
	};
}
async function H(e) {
	const a = await q(e);
	if (!a) return null;
	const { trace: s } = a;
	if (48 !== e.viewHours) return s;
	const i = await f(s.date), n = await q({
		...e,
		dayKey: `${String(s.fileId)}:${i}`
	});
	if (!n) return s;
	const r = n.trace;
	s.points.push(...r.points.map((e) => ({
		...e,
		index: e.index + s.originalEpochCount
	}))), s.originalEpochCount += r.originalEpochCount, s.selectionTimestamps = Float64Array.from([...s.selectionTimestamps, ...r.selectionTimestamps]), s.selectionValues = Float64Array.from([...s.selectionValues, ...r.selectionValues]), s.selectionIncluded = Uint8Array.from([...s.selectionIncluded, ...r.selectionIncluded]), s.viewportEndTimestamp = r.viewportEndTimestamp, s.maskIntervals.push(...r.maskIntervals), s.algorithmNonwearIntervals?.push(...r.algorithmNonwearIntervals ?? []), s.sensorNonwearIntervals?.push(...r.sensorNonwearIntervals ?? []), s.denominatorIntervals?.push(...r.denominatorIntervals ?? []), s.intensityIntervals.push(...r.intensityIntervals);
	for (const t of Object.keys(s.maskSummary)) s.maskSummary[t] += r.maskSummary[t];
	const o = await t().summarizePhysicalActivityTrace({
		...a.request,
		values: [...Array.from(a.request.values), ...Array.from(n.request.values)],
		displayValues: [...Array.from(a.request.displayValues), ...Array.from(n.request.displayValues)],
		included: [...a.request.included, ...n.request.included]
	});
	return s.valueMax = Math.max(s.valueMax, o.valueMax), s.intensitySummary = o.intensity, s.backendOutputSummary = o.backendOutput, s.thresholdDelta = o.thresholdDelta, s;
}
export { T as createPhysicalActivityWorkspaceRepository, H as loadPhysicalActivityFullDayTrace, Y as loadPhysicalActivityWorkspaceDays };
