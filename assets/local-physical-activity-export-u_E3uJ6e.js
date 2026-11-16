import { n as e } from "./background-jobs-B2uo95VO.js";
import { E as n } from "./local-nonwear-unified-DbYlb1Ol.js";
import { c as t, d as s, o as a, r as i, s as o, u as l } from "./physical-activity-cutpoint-presets-DYgOVqK-.js";
import { i as r, n as u, r as m, t as d } from "./local-export-shard-worker-Bn9FW-T0.js";
import { i as c, t as p } from "./physical-activity-mask-Bmz5hQtK.js";
import { a as M, n as h, r as g, t as y } from "./physical-activity-days-B6uHULh8.js";
import { r as f } from "./physical-activity-classifier-output-CI3fUHFc.js";
function w(e, n) {
	if (!n) return !0;
	const [t, s] = n;
	return e >= t && e <= s;
}
function S(e) {
	const n = a.find((n) => n.method === e);
	if (n) return {
		family: n.family,
		requiredSignal: n.requiredSignal,
		computationOwner: n.backendOwner ?? "browser_workspace",
		frontendComputesMetric: n.frontendComputesMetric,
		statusWhenMissing: n.statusWhenMissing
	};
	const t = o(e), s = "ready" === t.statusWhenMissing ? "needs_signal" : t.statusWhenMissing;
	return {
		family: t.family,
		requiredSignal: t.requiredSignal,
		computationOwner: t.backendDependency ?? "browser_workspace",
		frontendComputesMetric: "count_cutpoint" === t.family,
		statusWhenMissing: s
	};
}
function v(e) {
	return {
		sedentaryMax: e.sedentaryMax,
		lightMin: e.lightMin,
		moderateMin: e.moderateMin,
		vigorousMin: e.vigorousMin
	};
}
function N(e, n, t) {
	return "default" === t ? e.ruleLabel : n.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(n.sedentaryMax)}, non-sedentary >=${String(n.lightMin)} counts/min` : n.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${String(n.sedentaryMax)}, light ${String(n.lightMin)}-${String(n.moderateMin - 1)}, MVPA >=${String(n.moderateMin)} counts/min` : `Custom cutpoints: Sed <=${String(n.sedentaryMax)}, light ${String(n.lightMin)}-${String(n.moderateMin - 1)}, moderate ${String(n.moderateMin)}-${String(n.vigorousMin - 1)}, vigorous >=${String(n.vigorousMin)} counts/min`;
}
function k(e) {
	return e?.hasValidSignal ? {
		sedentaryMinutes: e.intensity?.sedentaryMinutes ?? null,
		lightMinutes: e.intensity?.lightMinutes ?? null,
		moderateMinutes: e.intensity?.moderateMinutes ?? null,
		vigorousMinutes: e.intensity?.vigorousMinutes ?? null,
		mvpaMinutes: e.intensity?.mvpaMinutes ?? null,
		epochLengthSeconds: e.epochSeconds,
		epochsReviewed: e.mask.includedEpochs,
		wakeWearMinutes: e.mask.wakeWearMinutes,
		excludedNonwearMinutes: e.mask.excludedNonwearMinutes,
		excludedMainSleepMinutes: e.mask.excludedMainSleepMinutes,
		excludedNapMinutes: e.mask.excludedNapMinutes,
		maskOverlapEpochs: e.mask.overlapEpochs,
		mvpaBouts: e.bouts?.mvpaBouts ?? null,
		mvpaBoutMinutes: e.bouts?.mvpaBoutMinutes ?? null,
		sedentaryBouts: e.bouts?.sedentaryBouts ?? null,
		sedentaryBreaks: e.bouts?.sedentaryBreaks ?? null,
		meanSedentaryBoutMinutes: e.bouts?.meanSedentaryBoutMinutes ?? null,
		mimsUnitTotal: e.mimsUnitTotal
	} : null;
}
function x(e, n) {
	return e < n ? -1 : e > n ? 1 : 0;
}
async function b(a, b, _, I = {}) {
	const B = u(a, d.physicalActivity, b), E = [...B.files].sort((e, n) => e.filename.localeCompare(n.filename)), W = [], C = I.username ?? "anonymous", A = I.maskPolicy ?? p, R = I.choiAxis ?? n(), U = c(A), O = I.cutpointOverrides, L = I.cutpointPresetNames, P = e(I.signal), T = await Promise.all(i.map((e) => async function(e, n, t, a) {
		const i = n?.[e.method], o = i ? await s(i, a) : null;
		return o ? {
			thresholds: o,
			source: "custom",
			presetName: t?.[e.method] ?? ""
		} : {
			thresholds: v(e),
			source: "default",
			presetName: ""
		};
	}(e, O, L, P))), D = I.inclusionRulePresetName ?? "", H = I.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), $ = o("ggir_enmo"), F = o("mims"), q = o("preschool_free_living_rf_3_5"), G = S("ggir_enmo"), j = S("mims"), V = S("preschool_free_living_rf_3_5");
	for (const e of E) {
		if (I.signal?.throwIfAborted(), !e.id) continue;
		if (!0 === e.ggirSummariesNeedRecompute) throw new Error(`${e.filename}: its GGIR summaries were not recomputed for the current study settings. In Study settings, run Rescore (offered for every file whose summaries are refused) before exporting.`);
		const n = e.participantId ?? "", s = Number.isFinite(e.epochLengthSeconds) && e.epochLengthSeconds > 0 ? e.epochLengthSeconds : 60, a = e.id, o = B.dailyGgirSummaries.filter((e) => e.fileId === a).sort((e, n) => x(e.analysisDate, n.analysisDate));
		for (const t of o) w(t.analysisDate, _) && W.push({
			filename: e.filename,
			participantId: n,
			analysisDate: t.analysisDate,
			method: "ggir_enmo",
			methodLabel: $.label,
			methodFamily: G.family,
			requiredSignalContract: G.requiredSignal,
			computationOwner: G.computationOwner,
			frontendComputesMetric: G.frontendComputesMetric,
			sourceSignal: $.signalLabel,
			status: "ready",
			methodRule: "Stored GGIR daily summary values.",
			thresholdSource: "not_applicable",
			thresholdPresetName: "",
			sedentaryMax: null,
			lightMin: null,
			moderateMin: null,
			vigorousMin: null,
			sedentaryMinutes: t.sedentaryMinutes,
			lightMinutes: t.lpaMinutes,
			moderateMinutes: t.moderateMinutes ?? null,
			vigorousMinutes: t.vigorousMinutes ?? null,
			mvpaMinutes: t.mvpaMinutes,
			mimsUnitTotal: null,
			epochLengthSeconds: null,
			epochsReviewed: 0,
			wakeWearMinutes: null == t.validHours ? null : 60 * t.validHours,
			excludedNonwearMinutes: t.nonwearMinutes,
			excludedMainSleepMinutes: null,
			excludedNapMinutes: null,
			maskOverlapEpochs: null,
			mvpaBouts: null,
			mvpaBoutMinutes: null,
			sedentaryBouts: null,
			sedentaryBreaks: null,
			meanSedentaryBoutMinutes: null,
			nativeEpochSeconds: null,
			epochMismatch: !1,
			inclusionRulePresetName: D,
			maskExcludeNonwear: A.excludeNonwear,
			maskExcludeMainSleep: A.excludeMainSleep,
			maskExcludeNaps: A.excludeNaps,
			maskUseManualNonwear: A.useManualNonwear,
			maskUseAlgorithmNonwear: A.useAlgorithmNonwear,
			maskNonwearDetector: U,
			maskMinimumWakeWearMinutes: A.minimumWakeWearMinutes,
			scoredUsername: C,
			sourceContentHash: e.sourceContentHash ?? e.fileHash,
			exportedAt: H,
			notes: "Stored GGIR daily summary values."
		});
		const u = [...m(B, a).entries()].filter(([e]) => w(e, _)).sort(([e], [n]) => e.localeCompare(n)).map(([, e]) => ({ ...e })), d = r(B, a, C), c = B.sensorNonwear.filter((e) => e.fileId === a), p = {
			policy: y(A),
			intervals: h(d, c)
		}, v = u.map((e) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: s,
			series: g(e, A, R, s)
		})), b = async (e, n) => {
			I.signal?.throwIfAborted();
			const t = u.flatMap((n, t) => {
				const s = e(n, t);
				return s ? [{
					index: t,
					dayInput: s
				}] : [];
			}), s = u.map(() => {});
			if (0 === t.length) return s;
			const a = await M({
				...p,
				...n,
				days: t.map(({ dayInput: e }) => e)
			}, I.signal);
			return I.signal?.throwIfAborted(), t.forEach(({ index: e }, n) => {
				s[e] = a.days[n];
			}), s;
		}, E = (e, n, t, a) => e && e.length > 0 ? {
			timestamps: v[a].timestamps,
			series: v[a].series ?? [],
			...t.ggirTimestamps ? { ggirTimestamps: new Float64Array(t.ggirTimestamps) } : {},
			values: Float64Array.from(e),
			grid: n,
			fallbackEpochSeconds: s
		} : null, O = [], L = i.map((n) => null !== l(n.method, e.sourceProfileId));
		for (const [e, t] of i.entries()) L[e] ? O.push([]) : O.push(await b((e, n) => {
			const s = new Float64Array("axisY" === t.axis ? e.axisY : e.vectorMagnitude);
			return s.length > 0 && s.length === v[n].timestamps.length ? {
				...v[n],
				values: s
			} : null;
		}, {
			analysisKind: "count_cutpoint",
			thresholds: T[e].thresholds
		}));
		const P = await b((e, n) => E(f(e), "classifier", e, n), { analysisKind: "preschool_classifier" }), Y = await b((e, n) => E(e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output", e, n), { analysisKind: "mims_volume" }), K = await Promise.all(i.map((e) => t(e.method, s, I.signal)));
		for (const [t, r] of u.entries()) {
			const a = r.date;
			for (const [l, r] of i.entries()) {
				if (L[l]) continue;
				const i = T[l], o = N(r, i.thresholds, i.source), u = S(r.method), m = K[l], d = k(O[l][t]);
				W.push({
					filename: e.filename,
					participantId: n,
					analysisDate: a,
					method: r.method,
					methodLabel: r.label,
					methodFamily: u.family,
					requiredSignalContract: u.requiredSignal,
					computationOwner: u.computationOwner,
					frontendComputesMetric: u.frontendComputesMetric,
					sourceSignal: r.sourceLabel,
					status: d ? "ready" : u.statusWhenMissing,
					methodRule: o,
					thresholdSource: i.source,
					thresholdPresetName: i.presetName,
					sedentaryMax: i.thresholds.sedentaryMax,
					lightMin: i.thresholds.lightMin,
					moderateMin: i.thresholds.moderateMin,
					vigorousMin: i.thresholds.vigorousMin,
					sedentaryMinutes: d?.sedentaryMinutes ?? null,
					lightMinutes: d?.lightMinutes ?? null,
					moderateMinutes: d?.moderateMinutes ?? null,
					vigorousMinutes: d?.vigorousMinutes ?? null,
					mvpaMinutes: d?.mvpaMinutes ?? null,
					mimsUnitTotal: null,
					epochLengthSeconds: s,
					epochsReviewed: d?.epochsReviewed ?? 0,
					wakeWearMinutes: d?.wakeWearMinutes ?? null,
					excludedNonwearMinutes: d?.excludedNonwearMinutes ?? null,
					excludedMainSleepMinutes: d?.excludedMainSleepMinutes ?? null,
					excludedNapMinutes: d?.excludedNapMinutes ?? null,
					maskOverlapEpochs: d?.maskOverlapEpochs ?? null,
					mvpaBouts: d?.mvpaBouts ?? null,
					mvpaBoutMinutes: d?.mvpaBoutMinutes ?? null,
					sedentaryBouts: d?.sedentaryBouts ?? null,
					sedentaryBreaks: d?.sedentaryBreaks ?? null,
					meanSedentaryBoutMinutes: d?.meanSedentaryBoutMinutes ?? null,
					nativeEpochSeconds: m?.nativeEpochSeconds ?? null,
					epochMismatch: "warn" === m?.severity,
					inclusionRulePresetName: D,
					maskExcludeNonwear: A.excludeNonwear,
					maskExcludeMainSleep: A.excludeMainSleep,
					maskExcludeNaps: A.excludeNaps,
					maskUseManualNonwear: A.useManualNonwear,
					maskUseAlgorithmNonwear: A.useAlgorithmNonwear,
					maskNonwearDetector: U,
					maskMinimumWakeWearMinutes: A.minimumWakeWearMinutes,
					scoredUsername: C,
					sourceContentHash: e.sourceContentHash ?? e.fileHash,
					exportedAt: H,
					notes: d ? o : `No finite ${r.sourceLabel.toLowerCase()} values for this day.`
				});
			}
			const o = k(P[t]);
			null === l("preschool_free_living_rf_3_5", e.sourceProfileId) && W.push({
				filename: e.filename,
				participantId: n,
				analysisDate: a,
				method: "preschool_free_living_rf_3_5",
				methodLabel: q.label,
				methodFamily: V.family,
				requiredSignalContract: V.requiredSignal,
				computationOwner: V.computationOwner,
				frontendComputesMetric: V.frontendComputesMetric,
				sourceSignal: q.signalLabel,
				status: o ? "ready" : V.statusWhenMissing,
				methodRule: "Stored actimetric preschool wrist RF classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
				thresholdSource: "not_applicable",
				thresholdPresetName: "",
				sedentaryMax: null,
				lightMin: null,
				moderateMin: null,
				vigorousMin: null,
				sedentaryMinutes: o?.sedentaryMinutes ?? null,
				lightMinutes: o?.lightMinutes ?? null,
				moderateMinutes: o?.moderateMinutes ?? null,
				vigorousMinutes: o?.vigorousMinutes ?? null,
				mvpaMinutes: o?.mvpaMinutes ?? null,
				mimsUnitTotal: null,
				epochLengthSeconds: o?.epochLengthSeconds ?? s,
				epochsReviewed: o?.epochsReviewed ?? 0,
				wakeWearMinutes: o?.wakeWearMinutes ?? null,
				excludedNonwearMinutes: o?.excludedNonwearMinutes ?? null,
				excludedMainSleepMinutes: o?.excludedMainSleepMinutes ?? null,
				excludedNapMinutes: o?.excludedNapMinutes ?? null,
				maskOverlapEpochs: o?.maskOverlapEpochs ?? null,
				mvpaBouts: null,
				mvpaBoutMinutes: null,
				sedentaryBouts: null,
				sedentaryBreaks: null,
				meanSedentaryBoutMinutes: null,
				nativeEpochSeconds: null,
				epochMismatch: !1,
				inclusionRulePresetName: D,
				maskExcludeNonwear: A.excludeNonwear,
				maskExcludeMainSleep: A.excludeMainSleep,
				maskExcludeNaps: A.excludeNaps,
				maskUseManualNonwear: A.useManualNonwear,
				maskUseAlgorithmNonwear: A.useAlgorithmNonwear,
				maskNonwearDetector: U,
				maskMinimumWakeWearMinutes: A.minimumWakeWearMinutes,
				scoredUsername: C,
				sourceContentHash: e.sourceContentHash ?? e.fileHash,
				exportedAt: H,
				notes: o ? "Stored actimetric-compatible preschool class epochs summarized with the selected mask policy." : "No stored actimetric-compatible preschool class epochs for this day."
			});
			const u = k(Y[t]);
			null === l("mims", e.sourceProfileId) && W.push({
				filename: e.filename,
				participantId: n,
				analysisDate: a,
				method: "mims",
				methodLabel: F.label,
				methodFamily: j.family,
				requiredSignalContract: j.requiredSignal,
				computationOwner: j.computationOwner,
				frontendComputesMetric: j.frontendComputesMetric,
				sourceSignal: F.signalLabel,
				status: u ? "ready" : j.statusWhenMissing,
				methodRule: "Stored MIMS_UNIT epoch values; intensity cutpoints are not applied.",
				thresholdSource: "not_applicable",
				thresholdPresetName: "",
				sedentaryMax: null,
				lightMin: null,
				moderateMin: null,
				vigorousMin: null,
				sedentaryMinutes: null,
				lightMinutes: null,
				moderateMinutes: null,
				vigorousMinutes: null,
				mvpaMinutes: null,
				mimsUnitTotal: u?.mimsUnitTotal ?? null,
				epochLengthSeconds: u?.epochLengthSeconds ?? s,
				epochsReviewed: u?.epochsReviewed ?? 0,
				wakeWearMinutes: u?.wakeWearMinutes ?? null,
				excludedNonwearMinutes: u?.excludedNonwearMinutes ?? null,
				excludedMainSleepMinutes: u?.excludedMainSleepMinutes ?? null,
				excludedNapMinutes: u?.excludedNapMinutes ?? null,
				maskOverlapEpochs: u?.maskOverlapEpochs ?? null,
				mvpaBouts: null,
				mvpaBoutMinutes: null,
				sedentaryBouts: null,
				sedentaryBreaks: null,
				meanSedentaryBoutMinutes: null,
				nativeEpochSeconds: null,
				epochMismatch: !1,
				inclusionRulePresetName: D,
				maskExcludeNonwear: A.excludeNonwear,
				maskExcludeMainSleep: A.excludeMainSleep,
				maskExcludeNaps: A.excludeNaps,
				maskUseManualNonwear: A.useManualNonwear,
				maskUseAlgorithmNonwear: A.useAlgorithmNonwear,
				maskNonwearDetector: U,
				maskMinimumWakeWearMinutes: A.minimumWakeWearMinutes,
				scoredUsername: C,
				sourceContentHash: e.sourceContentHash ?? e.fileHash,
				exportedAt: H,
				notes: u ? "Stored MIMS_UNIT epoch values; intensity cutpoints are not applied." : "No stored MIMS_UNIT epoch values for this day."
			});
		}
	}
	return W;
}
export { b as generateLocalPhysicalActivityExportRows };
