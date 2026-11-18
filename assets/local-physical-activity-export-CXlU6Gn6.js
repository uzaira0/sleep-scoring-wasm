import { n as e } from "./background-jobs-XKgiZRrI.js";
import { w as n } from "./local-nonwear-unified-qM9YQyQW.js";
import { a as t, c as s, d as a, f as i, i as o, l, o as u, t as r, u as m } from "./local-export-shard-worker-DdTxvVF5.js";
import { a as d, c, n as p, o as M, r as h, t as g } from "./physical-activity-days-C2_dFJW3.js";
import { r as y } from "./physical-activity-classifier-output-Co3Pg1Ee.js";
import { t as f } from "./cutpoint-edit-BYUY-tQw.js";
function w(e, n) {
	if (!n) return !0;
	const [t, s] = n;
	return e >= t && e <= s;
}
function S(e) {
	const n = o.find((n) => n.method === e);
	if (n) return {
		family: n.family,
		requiredSignal: n.requiredSignal,
		computationOwner: n.backendOwner ?? "browser_workspace",
		frontendComputesMetric: n.frontendComputesMetric,
		statusWhenMissing: n.statusWhenMissing
	};
	const s = t(e), a = "ready" === s.statusWhenMissing ? "needs_signal" : s.statusWhenMissing;
	return {
		family: s.family,
		requiredSignal: s.requiredSignal,
		computationOwner: s.backendDependency ?? "browser_workspace",
		frontendComputesMetric: "count_cutpoint" === s.family,
		statusWhenMissing: a
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
async function b(o, b, _, I = {}) {
	const B = m(o, l.physicalActivity, b), W = [...B.files].sort((e, n) => e.filename.localeCompare(n.filename)), E = [], C = I.username ?? "anonymous", A = I.maskPolicy ?? M, U = I.choiAxis ?? n(), O = c(A), R = I.cutpointOverrides, L = I.cutpointPresetNames, P = e(I.signal), T = await Promise.all(r.map((e) => async function(e, n, t, s) {
		const a = n?.[e.method], i = a ? await f(a, s) : null;
		return i ? {
			thresholds: i,
			source: "custom",
			presetName: t?.[e.method] ?? ""
		} : {
			thresholds: v(e),
			source: "default",
			presetName: ""
		};
	}(e, R, L, P))), D = I.inclusionRulePresetName ?? "", H = I.exportedAt ?? (/* @__PURE__ */ new Date()).toISOString(), $ = t("ggir_enmo"), F = t("mims"), q = t("preschool_free_living_rf_3_5"), G = S("ggir_enmo"), j = S("mims"), V = S("preschool_free_living_rf_3_5");
	for (const e of W) {
		if (I.signal?.throwIfAborted(), !e.id) continue;
		if (!0 === e.ggirSummariesNeedRecompute) throw new Error(`${e.filename}: its GGIR summaries were not recomputed for the current study settings. In Study settings, run Rescore (offered for every file whose summaries are refused) before exporting.`);
		const n = e.participantId ?? "", t = Number.isFinite(e.epochLengthSeconds) && e.epochLengthSeconds > 0 ? e.epochLengthSeconds : 60, o = e.id, l = B.dailyGgirSummaries.filter((e) => e.fileId === o).sort((e, n) => x(e.analysisDate, n.analysisDate));
		for (const s of l) w(s.analysisDate, _) && E.push({
			filename: e.filename,
			participantId: n,
			analysisDate: s.analysisDate,
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
			sedentaryMinutes: s.sedentaryMinutes,
			lightMinutes: s.lpaMinutes,
			moderateMinutes: s.moderateMinutes ?? null,
			vigorousMinutes: s.vigorousMinutes ?? null,
			mvpaMinutes: s.mvpaMinutes,
			mimsUnitTotal: null,
			epochLengthSeconds: null,
			epochsReviewed: 0,
			wakeWearMinutes: null == s.validHours ? null : 60 * s.validHours,
			excludedNonwearMinutes: s.nonwearMinutes,
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
			maskNonwearDetector: O,
			maskMinimumWakeWearMinutes: A.minimumWakeWearMinutes,
			scoredUsername: C,
			sourceContentHash: e.sourceContentHash ?? e.fileHash,
			exportedAt: H,
			notes: "Stored GGIR daily summary values."
		});
		const m = [...a(B, o).entries()].filter(([e]) => w(e, _)).sort(([e], [n]) => e.localeCompare(n)).map(([, e]) => ({ ...e })), c = i(B, o, C), M = B.sensorNonwear.filter((e) => e.fileId === o), f = {
			policy: g(A),
			intervals: p(c, M)
		}, v = m.map((e) => ({
			timestamps: new Float64Array(e.timestamps),
			epochSeconds: t,
			series: h(e, A, U, t)
		})), b = async (e, n) => {
			I.signal?.throwIfAborted();
			const t = m.flatMap((n, t) => {
				const s = e(n, t);
				return s ? [{
					index: t,
					dayInput: s
				}] : [];
			}), s = m.map(() => {});
			if (0 === t.length) return s;
			const a = await d({
				...f,
				...n,
				days: t.map(({ dayInput: e }) => e)
			}, I.signal);
			return I.signal?.throwIfAborted(), t.forEach(({ index: e }, n) => {
				s[e] = a.days[n];
			}), s;
		}, W = (e, n, s, a) => e && e.length > 0 ? {
			timestamps: v[a].timestamps,
			series: v[a].series ?? [],
			...s.ggirTimestamps ? { ggirTimestamps: new Float64Array(s.ggirTimestamps) } : {},
			values: Float64Array.from(e),
			grid: n,
			fallbackEpochSeconds: t
		} : null, R = [], L = r.map((n) => null !== s(n.method, e.sourceProfileId));
		for (const [e, s] of r.entries()) L[e] ? R.push([]) : R.push(await b((e, n) => {
			const t = new Float64Array("axisY" === s.axis ? e.axisY : e.vectorMagnitude);
			return t.length > 0 && t.length === v[n].timestamps.length ? {
				...v[n],
				values: t
			} : null;
		}, {
			analysisKind: "count_cutpoint",
			thresholds: T[e].thresholds
		}));
		const P = await b((e, n) => W(y(e), "classifier", e, n), { analysisKind: "preschool_classifier" }), Y = await b((e, n) => W(e.mimsUnit ? new Float64Array(e.mimsUnit) : null, "backend_output", e, n), { analysisKind: "mims_volume" }), K = await Promise.all(r.map((e) => u(e.method, t, I.signal)));
		for (const [a, i] of m.entries()) {
			const o = i.date;
			for (const [s, i] of r.entries()) {
				if (L[s]) continue;
				const l = T[s], u = N(i, l.thresholds, l.source), r = S(i.method), m = K[s], d = k(R[s][a]);
				E.push({
					filename: e.filename,
					participantId: n,
					analysisDate: o,
					method: i.method,
					methodLabel: i.label,
					methodFamily: r.family,
					requiredSignalContract: r.requiredSignal,
					computationOwner: r.computationOwner,
					frontendComputesMetric: r.frontendComputesMetric,
					sourceSignal: i.sourceLabel,
					status: d ? "ready" : r.statusWhenMissing,
					methodRule: u,
					thresholdSource: l.source,
					thresholdPresetName: l.presetName,
					sedentaryMax: l.thresholds.sedentaryMax,
					lightMin: l.thresholds.lightMin,
					moderateMin: l.thresholds.moderateMin,
					vigorousMin: l.thresholds.vigorousMin,
					sedentaryMinutes: d?.sedentaryMinutes ?? null,
					lightMinutes: d?.lightMinutes ?? null,
					moderateMinutes: d?.moderateMinutes ?? null,
					vigorousMinutes: d?.vigorousMinutes ?? null,
					mvpaMinutes: d?.mvpaMinutes ?? null,
					mimsUnitTotal: null,
					epochLengthSeconds: t,
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
					maskNonwearDetector: O,
					maskMinimumWakeWearMinutes: A.minimumWakeWearMinutes,
					scoredUsername: C,
					sourceContentHash: e.sourceContentHash ?? e.fileHash,
					exportedAt: H,
					notes: d ? u : `No finite ${i.sourceLabel.toLowerCase()} values for this day.`
				});
			}
			const l = k(P[a]);
			null === s("preschool_free_living_rf_3_5", e.sourceProfileId) && E.push({
				filename: e.filename,
				participantId: n,
				analysisDate: o,
				method: "preschool_free_living_rf_3_5",
				methodLabel: q.label,
				methodFamily: V.family,
				requiredSignalContract: V.requiredSignal,
				computationOwner: V.computationOwner,
				frontendComputesMetric: V.frontendComputesMetric,
				sourceSignal: q.signalLabel,
				status: l ? "ready" : V.statusWhenMissing,
				methodRule: "Stored actimetric preschool wrist RF classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
				thresholdSource: "not_applicable",
				thresholdPresetName: "",
				sedentaryMax: null,
				lightMin: null,
				moderateMin: null,
				vigorousMin: null,
				sedentaryMinutes: l?.sedentaryMinutes ?? null,
				lightMinutes: l?.lightMinutes ?? null,
				moderateMinutes: l?.moderateMinutes ?? null,
				vigorousMinutes: l?.vigorousMinutes ?? null,
				mvpaMinutes: l?.mvpaMinutes ?? null,
				mimsUnitTotal: null,
				epochLengthSeconds: l?.epochLengthSeconds ?? t,
				epochsReviewed: l?.epochsReviewed ?? 0,
				wakeWearMinutes: l?.wakeWearMinutes ?? null,
				excludedNonwearMinutes: l?.excludedNonwearMinutes ?? null,
				excludedMainSleepMinutes: l?.excludedMainSleepMinutes ?? null,
				excludedNapMinutes: l?.excludedNapMinutes ?? null,
				maskOverlapEpochs: l?.maskOverlapEpochs ?? null,
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
				maskNonwearDetector: O,
				maskMinimumWakeWearMinutes: A.minimumWakeWearMinutes,
				scoredUsername: C,
				sourceContentHash: e.sourceContentHash ?? e.fileHash,
				exportedAt: H,
				notes: l ? "Stored actimetric-compatible preschool class epochs summarized with the selected mask policy." : "No stored actimetric-compatible preschool class epochs for this day."
			});
			const u = k(Y[a]);
			null === s("mims", e.sourceProfileId) && E.push({
				filename: e.filename,
				participantId: n,
				analysisDate: o,
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
				epochLengthSeconds: u?.epochLengthSeconds ?? t,
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
				maskNonwearDetector: O,
				maskMinimumWakeWearMinutes: A.minimumWakeWearMinutes,
				scoredUsername: C,
				sourceContentHash: e.sourceContentHash ?? e.fileHash,
				exportedAt: H,
				notes: u ? "Stored MIMS_UNIT epoch values; intensity cutpoints are not applied." : "No stored MIMS_UNIT epoch values for this day."
			});
		}
	}
	return E;
}
export { b as generateLocalPhysicalActivityExportRows };
