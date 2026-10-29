import { i as e } from "./workers-DwjGhrCr.js";
import { m as t, r as a } from "./nonwear-display-slots-wPOZJu0l.js";
import { M as n, t as s } from "./workspace-db-jv0UAB1p.js";
import { c as o } from "./content-hash-BtD8CeUH.js";
import { I as i, N as r, S as l, b as c, zt as u } from "./store-C-OzqH4e.js";
import { l as d, p } from "./sleep-period-detection-CcyhNiXt.js";
import { i as m } from "./audit-log-MzRCtIMD.js";
import { E as w, N as f, b as v, c as h, o as g, r as _ } from "./local-nonwear-unified-B2FhmEKw.js";
import { D as y } from "./local-export-worker-uudbMVVQ.js";
import { t as M } from "./api-errors-BMZl-7JC.js";
const b = {
	...Object.fromEntries(Object.values(n).map((e) => [e, f(e)])),
	[n.ggir_saved]: d,
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
}, D = g.map((e) => ({
	id: e.id,
	label: b[e.id] ?? e.id,
	provisional: e.provisional,
	needsModel: e.needsModel
}));
function S(e) {
	return v(e)?.provisional ?? !1;
}
function C(e) {
	return {
		getLocalFiles: () => r(e),
		getNonwearSourceLabels: a.bind(null, e),
		getAllMarkersByAlgorithmForFile: (t, a) => l(t, a, e),
		getAllActivityDaysForFile: (t) => c(t, e),
		getSensorNonwearForFile: (t) => i(t, e),
		storeNonwearReview: async (t, a) => {
			await e.files.update(t, { nonwearReview: a });
		}
	};
}
function k(e, t, a) {
	return o(JSON.stringify({
		seriesRevision: e,
		nonwearBandGeneration: t,
		evidence: a
	}));
}
function A(e) {
	const t = h(e, e.nonwearChoiAxis ?? w());
	return [...Object.keys(_), ...Object.keys(t).filter((e) => !(e in _))].map((e) => [e, t[e]]).filter(([e]) => e !== n.detach_nonwear && v(e)).map(([e, t]) => ({
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
		inputs: k(e.seriesRevision ?? 0, e.nonwearBandGeneration ?? 0, o)
	};
}
async function T(e, t, a) {
	return null == e.id ? null : (await F(e, t, a)).inputs;
}
async function N(a, n, o) {
	const i = n ?? C(s()), r = await i.getLocalFiles(), l = [], c = [], d = [], m = [], w = await Promise.all(r.filter((e) => Boolean(e.id)).map(async (e) => ({
		file: e,
		...await F(e, a, i)
	}))), f = await y(w.map(({ file: e, evidence: a, inputs: n }) => ({
		name: String(e.id),
		cost: e.availableDates.length,
		run: async (s) => {
			let o = e.nonwearReview?.inputs === n ? e.nonwearReview.review : null;
			if (!o) {
				const r = await i.getAllActivityDaysForFile(e.id), l = await Promise.all(a.map(async (e) => {
					const a = await async function(e, a) {
						const n = e.get(a);
						if (!n) return null;
						const s = u(n).timestamps, o = e.get(await t(a)), i = u(o).timestamps, r = s.length > 0 && i.length > 0 && i[0] > s[s.length - 1], l = s.length, c = l + (r ? i.length : 0), d = new Float64Array(c);
						d.set(s), r && d.set(i, l);
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
						}, m = new Map(r && o ? A(o).map((e) => [e.source, e.buffer]) : []), w = [];
						for (const { source: t, buffer: u } of A(n)) {
							const e = p(u, m.get(t));
							m.delete(t), e && w.push({
								source: t,
								mask: e
							});
						}
						for (const [t, u] of m) {
							const e = p(null, u);
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
					}(r, e.analysisDate);
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
					await i.storeNonwearReview?.(e.id, {
						inputs: n,
						review: o
					});
				} catch {
					console.warn("[nonwear-review] A file's review could not be stored; it is rebuilt on the next open.");
				}
			}
			const r = p(e) ? await i.getNonwearSourceLabels?.(e.id, s) : void 0;
			return {
				file: e,
				review: o,
				nonwearSourceLabels: r
			};
		}
	})), o ?? {
		getPrimary: e,
		extraWorkers: 0,
		cancelOperation: () => {}
	});
	for (const { file: e, review: t, nonwearSourceLabels: s } of f) {
		const a = {
			fileId: e.id,
			filename: e.filename,
			participantId: e.participantId ?? null,
			...s ? { nonwearSourceLabels: s } : {}
		};
		for (const { conflicts: e, algorithmSources: s, ...i } of t.dates) d.push({
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
		l.push({
			...a,
			...o
		}), c.push(t.totals);
	}
	const v = (e) => c.reduce((t, a) => t + (a[e] ?? 0), 0);
	return {
		totalFiles: r.length,
		totalDates: v("totalDates"),
		datesWithEvidence: v("datesWithEvidence"),
		recordedMinutes: v("recordedMinutes"),
		nonwearMinutes: v("nonwearMinutes"),
		wearMinutes: c.some((e) => null !== e.wearMinutes) ? v("wearMinutes") : null,
		manualPeriods: v("manualPeriods"),
		sensorPeriods: v("sensorPeriods"),
		algorithmEpochs: v("algorithmEpochs"),
		overlapConflicts: v("overlapConflicts"),
		files: l,
		dates: d,
		conflicts: m
	};
}
const E = {
	id: "local-indexeddb",
	label: "Browser workspace",
	description: "Summarizes stored manual markers, sensor nonwear periods, and existing algorithm masks. It does not run new detection.",
	compute: (e) => N(e)
}, j = {
	id: "server",
	label: "Server workspace",
	description: "Summarizes manual markers, sensor detach periods, and algorithm nonwear stored on the server for files you can access. It does not run new detection.",
	compute: () => async function() {
		const { data: e, error: t, response: a } = await (await m()).GET("/api/v1/nonwear/overview");
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
	return "object" == typeof (a = e) && null !== a && "function" == typeof a.compute ? e : t || ("server" === e?.sourceKey ? j : "local" === e?.sourceKey ? E : e?.server ? j : E);
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
export { D as NONWEAR_METHOD_BADGES, b as NONWEAR_SOURCE_LABELS, N as computeLocalNonwearReview, C as createLocalNonwearReviewRepository, T as currentNonwearReviewInputs, S as isProvisionalNonwearSource, E as localNonwearReviewBackend, L as resolveNonwearReviewBackend, j as serverNonwearReviewBackend, P as summarizeNonwearReviewReadiness };
