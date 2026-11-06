import { r as e } from "./workers-ChOvAmOP.js";
import { M as t, t as a } from "./workspace-db-C0mqPCjA.js";
import { c as n } from "./content-hash-LIzlxz9S.js";
import { a as s } from "./raw-pass-pool-l8NmGfLx.js";
import { p as o, r as i } from "./nonwear-display-slots-DjTz9tyY.js";
import { F as r, R as l, S as c, Ut as u, b as d } from "./store-DM814ES4.js";
import { l as p, p as m } from "./sleep-period-detection-DACRcT22.js";
import { i as w } from "./audit-log-GmDCUlwq.js";
import { E as f, N as v, b as h, c as g, o as _, r as y } from "./local-nonwear-unified-BxFayBM2.js";
import { t as M } from "./api-errors-Wwr_UmbY.js";
const b = {
	...Object.fromEntries(Object.values(t).map((e) => [e, v(e)])),
	[t.ggir_saved]: p,
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
}, D = _.map((e) => ({
	id: e.id,
	label: b[e.id] ?? e.id,
	provisional: e.provisional,
	needsModel: e.needsModel
}));
function S(e) {
	return h(e)?.provisional ?? !1;
}
function C(e) {
	return {
		getLocalFiles: () => r(e),
		getNonwearSourceLabels: i.bind(null, e),
		getAllMarkersByAlgorithmForFile: (t, a) => c(t, a, e),
		getAllActivityDaysForFile: (t) => d(t, e),
		getSensorNonwearForFile: (t) => l(t, e),
		storeNonwearReview: async (t, a) => {
			await e.files.update(t, { nonwearReview: a });
		}
	};
}
function A(e, t, a) {
	return n(JSON.stringify({
		seriesRevision: e,
		nonwearBandGeneration: t,
		evidence: a
	}));
}
function k(e) {
	const a = g(e, e.nonwearChoiAxis ?? f());
	return [...Object.keys(y), ...Object.keys(a).filter((e) => !(e in y))].map((e) => [e, a[e]]).filter(([e]) => e !== t.detach_nonwear && h(e)).map(([e, t]) => ({
		source: e,
		buffer: t
	}));
}
async function F(e, t, a) {
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
	return null == e.id ? null : (await F(e, t, a)).inputs;
}
async function E(t, n, i) {
	const r = n ?? C(a()), l = await r.getLocalFiles(), c = [], d = [], p = [], w = [], f = await Promise.all(l.filter((e) => Boolean(e.id)).map(async (e) => ({
		file: e,
		...await F(e, t, r)
	}))), v = await s(f.map(({ file: e, evidence: t, inputs: a }) => ({
		name: String(e.id),
		cost: e.availableDates.length,
		run: async (n) => {
			let s = e.nonwearReview?.inputs === a ? e.nonwearReview.review : null;
			if (!s) {
				const i = await r.getAllActivityDaysForFile(e.id), l = await Promise.all(t.map(async (e) => {
					const t = await async function(e, t) {
						const a = e.get(t);
						if (!a) return null;
						const n = u(a).timestamps, s = e.get(await o(t)), i = u(s).timestamps, r = n.length > 0 && i.length > 0 && i[0] > n[n.length - 1], l = n.length, c = l + (r ? i.length : 0), d = new Float64Array(c);
						d.set(n), r && d.set(i, l);
						const p = (e, t) => {
							if (!e && !t) return null;
							const a = new Uint8Array(c);
							if (e) {
								const t = new Uint8Array(e);
								a.set(t.subarray(0, Math.min(t.length, l)), 0);
							}
							if (t) {
								const e = new Uint8Array(t);
								a.set(e.subarray(0, Math.min(e.length, c - l)), l);
							}
							return a;
						}, m = new Map(r && s ? k(s).map((e) => [e.source, e.buffer]) : []), w = [];
						for (const { source: o, buffer: u } of k(a)) {
							const e = p(u, m.get(o));
							m.delete(o), e && w.push({
								source: o,
								mask: e
							});
						}
						for (const [o, u] of m) {
							const e = p(null, u);
							e && w.push({
								source: o,
								mask: e
							});
						}
						return {
							timestamps: d,
							masks: w,
							detach: p(a.detachNonwear, r ? s?.detachNonwear : null)
						};
					}(i, e.analysisDate);
					return {
						...e,
						hasSeries: null !== t,
						timestamps: t?.timestamps ?? /* @__PURE__ */ new Float64Array(0),
						masks: t?.masks ?? [],
						detach: t?.detach ?? null
					};
				}));
				s = await n.reviewNonwearFile(l);
				try {
					await r.storeNonwearReview?.(e.id, {
						inputs: a,
						review: s
					});
				} catch {
					console.warn("[nonwear-review] A file's review could not be stored; it is rebuilt on the next open.");
				}
			}
			const i = m(e) ? await r.getNonwearSourceLabels?.(e.id, n) : void 0;
			return {
				file: e,
				review: s,
				nonwearSourceLabels: i
			};
		}
	})), i ?? {
		getPrimary: e,
		extraWorkers: 0,
		cancelOperation: () => {}
	});
	for (const { file: e, review: a, nonwearSourceLabels: s } of v) {
		const t = {
			fileId: e.id,
			filename: e.filename,
			participantId: e.participantId ?? null,
			...s ? { nonwearSourceLabels: s } : {}
		};
		for (const { conflicts: e, algorithmSources: s, ...i } of a.dates) p.push({
			...t,
			...i,
			algorithmSources: s,
			overlapConflicts: e.length
		}), w.push(...e.map((e) => ({
			...t,
			analysisDate: i.analysisDate,
			...e,
			sources: e.sources
		})));
		const { datesWithEvidence: n, ...o } = a.totals;
		c.push({
			...t,
			...o
		}), d.push(a.totals);
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
		files: c,
		dates: p,
		conflicts: w
	};
}
const N = {
	id: "local-indexeddb",
	label: "Browser workspace",
	description: "Summarizes stored manual markers, sensor nonwear periods, and existing algorithm masks. It does not run new detection.",
	compute: (e) => E(e)
}, j = {
	id: "server",
	label: "Server workspace",
	description: "Summarizes manual markers, sensor detach periods, and algorithm nonwear stored on the server for files you can access. It does not run new detection.",
	compute: () => async function() {
		const { data: e, error: t, response: a } = await (await w()).GET("/api/v1/nonwear/overview");
		if (null == e) {
			const e = "object" == typeof t && null !== t ? t.detail : void 0, n = "string" == typeof e ? e : `HTTP ${String(a.status)}`;
			throw new M(n, a.status);
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
function L(e, t) {
	return "object" == typeof (a = e) && null !== a && "function" == typeof a.compute ? e : t || ("server" === e?.sourceKey ? j : "local" === e?.sourceKey ? N : e?.server ? j : N);
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
export { D as NONWEAR_METHOD_BADGES, b as NONWEAR_SOURCE_LABELS, E as computeLocalNonwearReview, C as createLocalNonwearReviewRepository, T as currentNonwearReviewInputs, S as isProvisionalNonwearSource, N as localNonwearReviewBackend, L as resolveNonwearReviewBackend, j as serverNonwearReviewBackend, P as summarizeNonwearReviewReadiness };
