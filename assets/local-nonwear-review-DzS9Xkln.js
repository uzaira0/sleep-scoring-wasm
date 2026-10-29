import { i as e } from "./workers-KVEaoFbf.js";
import { m as t, r as a } from "./nonwear-display-slots-DRp3LJ_4.js";
import { A as n, t as s } from "./workspace-db-D4drjWJA.js";
import { s as o } from "./content-hash-B-at0sOp.js";
import { a as i, t as r } from "./api-errors-suMzNlTy.js";
import { F as l, Lt as c, M as u, S as d, b as p } from "./store-AQT19I40.js";
import { l as m, p as w } from "./sleep-period-detection-Ce0A08lW.js";
import { i as f } from "./audit-log-DGy3L3Yu.js";
import { E as v, N as h, b as g, c as _, o as y, r as M } from "./local-nonwear-unified-9Oz9fE3C.js";
const b = {
	...Object.fromEntries(Object.values(n).map((e) => [e, h(e)])),
	[n.ggir_saved]: m,
	uploaded_wear_sensor: "Uploaded wear sensor",
	manual: "Manual",
	sensor: "Sensor",
	choi_2012: "Choi 2012",
	choi_2011: "Choi 2011",
	detach_nonwear: "DETACH",
	van_hees_2023: "van Hees 2023",
	van_hees_2013: "van Hees 2013",
	troiano_2008: "Troiano 2008",
	ahmadi_2020: "Ahmadi 2020"
}, D = y.map((e) => ({
	id: e.id,
	label: b[e.id] ?? e.id,
	provisional: e.provisional,
	needsModel: e.needsModel
}));
function S(e) {
	return g(e)?.provisional ?? !1;
}
function C(e) {
	return {
		getLocalFiles: () => u(e),
		getNonwearSourceLabels: a.bind(null, e),
		getAllMarkersByAlgorithmForFile: (t, a) => d(t, a, e),
		getAllActivityDaysForFile: (t) => p(t, e),
		getSensorNonwearForFile: (t) => l(t, e),
		storeNonwearReview: async (t, a) => {
			await e.files.update(t, { nonwearReview: a });
		}
	};
}
function A(e, t, a) {
	return o(JSON.stringify({
		seriesRevision: e,
		nonwearBandGeneration: t,
		evidence: a
	}));
}
function F(e) {
	const t = _(e, e.nonwearChoiAxis ?? v());
	return [...Object.keys(M), ...Object.keys(t).filter((e) => !(e in M))].map((e) => [e, t[e]]).filter(([e]) => e !== n.detach_nonwear && g(e)).map(([e, t]) => ({
		source: e,
		buffer: t
	}));
}
async function k(e, t, a) {
	const [n, s] = await Promise.all([a.getAllMarkersByAlgorithmForFile(e.id, t), a.getSensorNonwearForFile(e.id)]), o = e.availableDates.map((e) => {
		const t = n.get(e) ?? [];
		return {
			analysisDate: e,
			manual: t.flatMap((e) => (e.nonwearMarkers ?? []).flatMap((e) => null == e.startTimestamp || null == e.endTimestamp ? [] : [{
				start: e.startTimestamp,
				end: e.endTimestamp
			}])),
			sensor: s.filter((t) => t.analysisDate === e).map((e) => ({
				start: e.startTimestamp,
				end: e.endTimestamp
			})),
			sleep: t.flatMap((e) => (e.sleepMarkers ?? []).flatMap((e) => null == e.onsetTimestamp || null == e.offsetTimestamp ? [] : [{
				start: e.onsetTimestamp,
				end: e.offsetTimestamp
			}]))
		};
	});
	return {
		evidence: o,
		inputs: A(e.seriesRevision ?? 0, e.nonwearBandGeneration ?? 0, o)
	};
}
async function T(e, t, a) {
	return null == e.id ? null : (await k(e, t, a)).inputs;
}
async function E(a, n, o) {
	const r = n ?? C(s()), l = await r.getLocalFiles(), u = [], d = [], p = [], m = [], f = await Promise.all(l.filter((e) => Boolean(e.id)).map(async (e) => ({
		file: e,
		...await k(e, a, r)
	}))), v = await i(f.map(({ file: e, evidence: a, inputs: n }) => ({
		name: String(e.id),
		cost: e.availableDates.length,
		run: async (s) => {
			let o = e.nonwearReview?.inputs === n ? e.nonwearReview.review : null;
			if (!o) {
				const i = await r.getAllActivityDaysForFile(e.id), l = await Promise.all(a.map(async (e) => {
					const a = await async function(e, a) {
						const n = e.get(a);
						if (!n) return null;
						const s = c(n).timestamps, o = e.get(await t(a)), i = c(o).timestamps, r = s.length > 0 && i.length > 0 && i[0] > s[s.length - 1], l = s.length, u = l + (r ? i.length : 0), d = new Float64Array(u);
						d.set(s), r && d.set(i, l);
						const p = (e, t) => {
							if (!e && !t) return null;
							const a = new Uint8Array(u);
							if (e) {
								const t = new Uint8Array(e);
								a.set(t.subarray(0, Math.min(t.length, l)), 0);
							}
							if (t) {
								const e = new Uint8Array(t);
								a.set(e.subarray(0, Math.min(e.length, u - l)), l);
							}
							return a;
						}, m = new Map(r && o ? F(o).map((e) => [e.source, e.buffer]) : []), w = [];
						for (const { source: t, buffer: c } of F(n)) {
							const e = p(c, m.get(t));
							m.delete(t), e && w.push({
								source: t,
								mask: e
							});
						}
						for (const [t, c] of m) {
							const e = p(null, c);
							e && w.push({
								source: t,
								mask: e
							});
						}
						return {
							timestamps: d,
							masks: w,
							detach: p(n.detachNonwear, r ? o?.detachNonwear : null)
						};
					}(i, e.analysisDate);
					return {
						...e,
						hasSeries: null !== a,
						timestamps: a?.timestamps ?? /* @__PURE__ */ new Float64Array(0),
						masks: a?.masks ?? [],
						detach: a?.detach ?? null
					};
				}));
				o = await s.reviewNonwearFile(l);
				try {
					await r.storeNonwearReview?.(e.id, {
						inputs: n,
						review: o
					});
				} catch {
					console.warn("[nonwear-review] A file's review could not be stored; it is rebuilt on the next open.");
				}
			}
			const i = w(e) ? await r.getNonwearSourceLabels?.(e.id, s) : void 0;
			return {
				file: e,
				review: o,
				nonwearSourceLabels: i
			};
		}
	})), o ?? {
		getPrimary: e,
		extraWorkers: 0,
		cancelOperation: () => {}
	});
	for (const { file: e, review: t, nonwearSourceLabels: s } of v) {
		const a = {
			fileId: e.id,
			filename: e.filename,
			participantId: e.participantId ?? null,
			...s ? { nonwearSourceLabels: s } : {}
		};
		for (const { conflicts: e, algorithmSources: s, ...i } of t.dates) p.push({
			...a,
			...i,
			algorithmSources: s,
			overlapConflicts: e.length
		}), m.push(...e.map((e) => ({
			...a,
			analysisDate: i.analysisDate,
			...e,
			sources: e.sources
		})));
		const { datesWithEvidence: n, ...o } = t.totals;
		u.push({
			...a,
			...o
		}), d.push(t.totals);
	}
	const h = (e) => d.reduce((t, a) => t + (a[e] ?? 0), 0);
	return {
		totalFiles: l.length,
		totalDates: h("totalDates"),
		datesWithEvidence: h("datesWithEvidence"),
		recordedMinutes: h("recordedMinutes"),
		nonwearMinutes: h("nonwearMinutes"),
		wearMinutes: d.some((e) => null !== e.wearMinutes) ? h("wearMinutes") : null,
		manualPeriods: h("manualPeriods"),
		sensorPeriods: h("sensorPeriods"),
		algorithmEpochs: h("algorithmEpochs"),
		overlapConflicts: h("overlapConflicts"),
		files: u,
		dates: p,
		conflicts: m
	};
}
const N = {
	id: "local-indexeddb",
	label: "Browser workspace",
	description: "Summarizes stored manual markers, sensor nonwear periods, and existing algorithm masks. It does not run new detection.",
	compute: (e) => E(e)
}, L = {
	id: "server",
	label: "Server workspace",
	description: "Summarizes manual markers, sensor detach periods, and algorithm nonwear stored on the server for files you can access. It does not run new detection.",
	compute: () => async function() {
		const { data: e, error: t, response: a } = await (await f()).GET("/api/v1/nonwear/overview");
		if (null == e) {
			const e = "object" == typeof t && null !== t ? t.detail : void 0, n = "string" == typeof e ? e : `HTTP ${String(a.status)}`;
			throw new r(n, a.status);
		}
		return function(e) {
			return {
				totalFiles: e.total_files,
				totalDates: e.total_dates,
				datesWithEvidence: e.dates_with_evidence,
				recordedMinutes: e.recorded_minutes,
				nonwearMinutes: e.nonwear_minutes,
				wearMinutes: e.wear_minutes,
				manualPeriods: e.manual_periods,
				sensorPeriods: e.sensor_periods,
				algorithmEpochs: e.algorithm_epochs,
				overlapConflicts: e.overlap_conflicts,
				files: e.files.map((e) => ({
					fileId: e.file_id,
					filename: e.filename,
					participantId: e.participant_id,
					totalDates: e.total_dates,
					recordedMinutes: e.recorded_minutes,
					nonwearMinutes: e.nonwear_minutes,
					wearMinutes: e.wear_minutes,
					datesWithManualEvidence: e.dates_with_manual_evidence,
					datesWithSensorEvidence: e.dates_with_sensor_evidence,
					datesWithAlgorithmEvidence: e.dates_with_algorithm_evidence,
					manualPeriods: e.manual_periods,
					sensorPeriods: e.sensor_periods,
					algorithmEpochs: e.algorithm_epochs,
					overlapConflicts: e.overlap_conflicts
				})),
				dates: e.dates.map((e) => ({
					fileId: e.file_id,
					filename: e.filename,
					participantId: e.participant_id,
					analysisDate: e.analysis_date,
					recordedMinutes: e.recorded_minutes,
					nonwearMinutes: e.nonwear_minutes,
					wearMinutes: e.wear_minutes,
					manualPeriods: e.manual_periods,
					sensorPeriods: e.sensor_periods,
					algorithmSources: e.algorithm_sources,
					algorithmEpochs: e.algorithm_epochs,
					overlapConflicts: e.overlap_conflicts
				})),
				conflicts: e.conflicts.map((e) => ({
					fileId: e.file_id,
					filename: e.filename,
					participantId: e.participant_id,
					analysisDate: e.analysis_date,
					sources: e.sources,
					overlapStart: e.overlap_start,
					overlapEnd: e.overlap_end
				}))
			};
		}(e);
	}()
};
function j(e, t) {
	return "object" == typeof (a = e) && null !== a && "function" == typeof a.compute ? e : t || ("server" === e?.sourceKey ? L : "local" === e?.sourceKey ? N : e?.server ? L : N);
	var a;
}
function P(e) {
	const t = e?.totalDates ?? 0, a = e?.datesWithEvidence ?? 0, n = e?.overlapConflicts ?? 0, s = e?.wearMinutes ?? null, o = e?.nonwearMinutes ?? 0;
	return e && 0 !== e.totalFiles && 0 !== e.totalDates ? 0 === a ? {
		ready: !1,
		status: "no_evidence",
		statusLabel: "Needs evidence",
		calloutTitle: "No nonwear evidence saved",
		calloutMessage: "This workspace has activity dates, but no stored manual, sensor, or algorithm nonwear evidence to review yet.",
		nextActionLabel: "Import Nonwear CSV",
		totalDateCount: t,
		evidenceDateCount: a,
		conflictCount: n,
		wearMinutes: s,
		nonwearMinutes: o
	} : n > 0 ? {
		ready: !1,
		status: "conflict_review",
		statusLabel: "Review conflicts",
		calloutTitle: "Nonwear overlaps scored sleep",
		calloutMessage: `${String(n)} nonwear interval${1 === n ? "" : "s"} overlap scored sleep. Review these conflicts before export or summary interpretation.`,
		nextActionLabel: "Open Sleep",
		totalDateCount: t,
		evidenceDateCount: a,
		conflictCount: n,
		wearMinutes: s,
		nonwearMinutes: o
	} : {
		ready: !0,
		status: "ready",
		statusLabel: "Ready",
		calloutTitle: "Nonwear evidence ready",
		calloutMessage: `${String(a)} of ${String(e.totalDates)} dates have stored nonwear evidence and no sleep-overlap conflicts were found.`,
		nextActionLabel: "Review evidence",
		totalDateCount: t,
		evidenceDateCount: a,
		conflictCount: n,
		wearMinutes: s,
		nonwearMinutes: o
	} : {
		ready: !1,
		status: "empty",
		statusLabel: "No files",
		calloutTitle: "No activity files loaded",
		calloutMessage: "Open supported wearable files or configure a generic CSV import before reviewing nonwear evidence.",
		nextActionLabel: "Open Data Settings",
		totalDateCount: t,
		evidenceDateCount: a,
		conflictCount: n,
		wearMinutes: s,
		nonwearMinutes: o
	};
}
export { D as NONWEAR_METHOD_BADGES, b as NONWEAR_SOURCE_LABELS, E as computeLocalNonwearReview, C as createLocalNonwearReviewRepository, T as currentNonwearReviewInputs, S as isProvisionalNonwearSource, N as localNonwearReviewBackend, j as resolveNonwearReviewBackend, L as serverNonwearReviewBackend, P as summarizeNonwearReviewReadiness };
