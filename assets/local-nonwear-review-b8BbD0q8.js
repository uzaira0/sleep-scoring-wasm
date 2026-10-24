import { i as e } from "./workers-p3B9jYXf.js";
import { s as t } from "./epoch-utils-C8zEkd8n.js";
import { j as a, t as n } from "./workspace-db-Df2TUNS4.js";
import { c as s } from "./content-hash-BtD8CeUH.js";
import { a as o, t as i } from "./api-errors-CM3XlA13.js";
import { i as r } from "./audit-log-BBuIaYr5.js";
import { a as l, y as c } from "./local-nonwear-unified-CQf8Na3k.js";
import { I as u, N as d, S as p, b as m, zt as f } from "./store-DfF35Y-t.js";
const w = {
	manual: "Manual",
	sensor: "Sensor",
	choi_2012: "Choi 2012",
	choi_2011: "Choi 2011",
	detach_nonwear: "DETACH",
	van_hees_2023: "van Hees 2023",
	van_hees_2013: "van Hees 2013",
	troiano_2008: "Troiano 2008",
	ahmadi_2020: "Ahmadi 2020"
}, v = l.map((e) => ({
	id: e.id,
	label: w[e.id] ?? e.id,
	provisional: e.provisional,
	needsModel: e.needsModel
}));
function h(e) {
	return c(e)?.provisional ?? !1;
}
function _(e) {
	return {
		getLocalFiles: () => d(e),
		getAllMarkersByAlgorithmForFile: (t, a) => p(t, a, e),
		getAllActivityDaysForFile: (t) => m(t, e),
		getSensorNonwearForFile: (t) => u(t, e),
		storeNonwearReview: async (t, a) => {
			await e.files.update(t, { nonwearReview: a });
		}
	};
}
function g(e, t) {
	return s(JSON.stringify({
		seriesRevision: e,
		evidence: t
	}));
}
function y(e) {
	const t = [
		{
			source: "choi_2012",
			buffer: e.nonwearResults
		},
		{
			source: "choi_2011",
			buffer: e.nonwearResultsChoi2011
		},
		{
			source: "van_hees_2023",
			buffer: e.vanHeesNonwear
		}
	], n = e.unifiedNonwearMasks;
	if (n) for (const [s, o] of Object.entries(n)) s !== a.van_hees_2023 && s !== a.detach_nonwear && c(s) && t.push({
		source: s,
		buffer: o
	});
	return t;
}
async function M(e, t, a) {
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
		inputs: g(e.seriesRevision ?? 0, o)
	};
}
async function b(e, t, a) {
	return null == e.id ? null : (await M(e, t, a)).inputs;
}
async function D(a, s, i) {
	const r = s ?? _(n()), l = await r.getLocalFiles(), c = [], u = [], d = [], p = [], m = await Promise.all(l.filter((e) => Boolean(e.id)).map(async (e) => ({
		file: e,
		...await M(e, a, r)
	}))), w = await o(m.map(({ file: e, evidence: a, inputs: n }) => ({
		name: String(e.id),
		cost: e.availableDates.length,
		run: async (s) => {
			let o = e.nonwearReview?.inputs === n ? e.nonwearReview.review : null;
			if (!o) {
				const i = await r.getAllActivityDaysForFile(e.id), l = await Promise.all(a.map(async (e) => {
					const a = await async function(e, a) {
						const n = e.get(a);
						if (!n) return null;
						const s = f(n).timestamps, o = e.get(await t(a)), i = f(o).timestamps, r = s.length > 0 && i.length > 0 && i[0] > s[s.length - 1], l = s.length, c = l + (r ? i.length : 0), u = new Float64Array(c);
						u.set(s), r && u.set(i, l);
						const d = (e, t) => {
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
						}, p = new Map(r && o ? y(o).map((e) => [e.source, e.buffer]) : []), m = [];
						for (const { source: t, buffer: f } of y(n)) {
							const e = d(f, p.get(t));
							p.delete(t), e && m.push({
								source: t,
								mask: e
							});
						}
						for (const [t, f] of p) {
							const e = d(null, f);
							e && m.push({
								source: t,
								mask: e
							});
						}
						return {
							timestamps: u,
							masks: m,
							detach: d(n.detachNonwear, r ? o?.detachNonwear : null)
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
			return {
				file: e,
				review: o
			};
		}
	})), i ?? {
		getPrimary: e,
		extraWorkers: 0,
		cancelOperation: () => {}
	});
	for (const { file: e, review: t } of w) {
		const a = {
			fileId: e.id,
			filename: e.filename,
			participantId: e.participantId ?? null
		};
		for (const { conflicts: e, algorithmSources: o, ...i } of t.dates) d.push({
			...a,
			...i,
			algorithmSources: o,
			overlapConflicts: e.length
		}), p.push(...e.map((e) => ({
			...a,
			analysisDate: i.analysisDate,
			...e,
			sources: e.sources
		})));
		const { datesWithEvidence: n, ...s } = t.totals;
		c.push({
			...a,
			...s
		}), u.push(t.totals);
	}
	const v = (e) => u.reduce((t, a) => t + (a[e] ?? 0), 0);
	return {
		totalFiles: l.length,
		totalDates: v("totalDates"),
		datesWithEvidence: v("datesWithEvidence"),
		recordedMinutes: v("recordedMinutes"),
		nonwearMinutes: v("nonwearMinutes"),
		wearMinutes: u.some((e) => null !== e.wearMinutes) ? v("wearMinutes") : null,
		manualPeriods: v("manualPeriods"),
		sensorPeriods: v("sensorPeriods"),
		algorithmEpochs: v("algorithmEpochs"),
		overlapConflicts: v("overlapConflicts"),
		files: c,
		dates: d,
		conflicts: p
	};
}
const C = {
	id: "local-indexeddb",
	label: "Browser workspace",
	description: "Summarizes stored manual markers, sensor nonwear periods, and existing algorithm masks. It does not run new detection.",
	compute: (e) => D(e)
}, S = {
	id: "server",
	label: "Server workspace",
	description: "Summarizes manual markers, sensor detach periods, and algorithm nonwear stored on the server for files you can access. It does not run new detection.",
	compute: () => async function() {
		const { data: e, error: t, response: a } = await (await r()).GET("/api/v1/nonwear/overview");
		if (null == e) {
			const e = "object" == typeof t && null !== t ? t.detail : void 0, n = "string" == typeof e ? e : `HTTP ${String(a.status)}`;
			throw new i(n, a.status);
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
function A(e, t) {
	return "object" == typeof (a = e) && null !== a && "function" == typeof a.compute ? e : t || ("server" === e?.sourceKey ? S : "local" === e?.sourceKey ? C : e?.server ? S : C);
	var a;
}
function F(e) {
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
export { v as NONWEAR_METHOD_BADGES, w as NONWEAR_SOURCE_LABELS, D as computeLocalNonwearReview, _ as createLocalNonwearReviewRepository, b as currentNonwearReviewInputs, h as isProvisionalNonwearSource, C as localNonwearReviewBackend, A as resolveNonwearReviewBackend, S as serverNonwearReviewBackend, F as summarizeNonwearReviewReadiness };
