import { r as e } from "./workers-CrU4fDAf.js";
import { k as t, t as a } from "./workspace-db-tot7PUXb.js";
import { s as n } from "./content-hash-CZ-UAlQR.js";
import { a as s, t as o } from "./api-errors-D9Ekrb9I.js";
import { I as r, N as i, Vt as l, x as c, y as u } from "./store-StTfKmbj.js";
import { Z as d, tt as p } from "./per-source-defaults-DHWdfoJI.js";
import { i as m } from "./audit-log-RFivnbbI.js";
import { E as w, N as f, b as v, c as h, o as g, r as _ } from "./local-nonwear-unified-DbYlb1Ol.js";
import { a as y } from "./epoch-utils-CzLU8tdl.js";
import { k as M } from "./local-export-shard-worker-Bn9FW-T0.js";
const b = {
	...Object.fromEntries(Object.values(t).map((e) => [e, f(e)])),
	[t.ggir_saved]: d,
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
		getLocalFiles: () => i(e),
		getNonwearSourceLabels: M.bind(null, e),
		getAllMarkersByAlgorithmForFile: (t, a) => c(t, a, e),
		getAllActivityDaysForFile: (t) => u(t, e),
		getSensorNonwearForFile: (t) => r(t, e),
		storeNonwearReview: async (t, a) => {
			await e.files.update(t, { nonwearReview: a });
		}
	};
}
function k(e, t, a) {
	return n(JSON.stringify({
		seriesRevision: e,
		nonwearBandGeneration: t,
		evidence: a
	}));
}
function A(e) {
	const a = h(e, e.nonwearChoiAxis ?? w());
	return [...Object.keys(_), ...Object.keys(a).filter((e) => !(e in _))].map((e) => [e, a[e]]).filter(([e]) => e !== t.detach_nonwear && v(e)).map(([e, t]) => ({
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
async function N(t, n, o) {
	const r = n ?? C(a()), i = await r.getLocalFiles(), c = [], u = [], d = [], m = [], w = await Promise.all(i.filter((e) => Boolean(e.id)).map(async (e) => ({
		file: e,
		...await F(e, t, r)
	}))), f = await s(w.map(({ file: e, evidence: t, inputs: a }) => ({
		name: String(e.id),
		cost: e.availableDates.length,
		run: async (n) => {
			let s = e.nonwearReview?.inputs === a ? e.nonwearReview.review : null;
			if (!s) {
				const o = await r.getAllActivityDaysForFile(e.id), i = await Promise.all(t.map(async (e) => {
					const t = await async function(e, t) {
						const a = e.get(t);
						if (!a) return null;
						const n = l(a).timestamps, s = e.get(await y(t)), o = l(s).timestamps, r = n.length > 0 && o.length > 0 && o[0] > n[n.length - 1], i = n.length, c = i + (r ? o.length : 0), u = new Float64Array(c);
						u.set(n), r && u.set(o, i);
						const d = (e, t) => {
							if (!e && !t) return null;
							const a = new Uint8Array(c);
							if (e) {
								const t = new Uint8Array(e);
								a.set(t.subarray(0, Math.min(t.length, i)), 0);
							}
							if (t) {
								const e = new Uint8Array(t);
								a.set(e.subarray(0, Math.min(e.length, c - i)), i);
							}
							return a;
						}, p = new Map(r && s ? A(s).map((e) => [e.source, e.buffer]) : []), m = [];
						for (const { source: l, buffer: w } of A(a)) {
							const e = d(w, p.get(l));
							p.delete(l), e && m.push({
								source: l,
								mask: e
							});
						}
						for (const [l, w] of p) {
							const e = d(null, w);
							e && m.push({
								source: l,
								mask: e
							});
						}
						return {
							timestamps: u,
							masks: m,
							detach: d(a.detachNonwear, r ? s?.detachNonwear : null)
						};
					}(o, e.analysisDate);
					return {
						...e,
						hasSeries: null !== t,
						timestamps: t?.timestamps ?? /* @__PURE__ */ new Float64Array(0),
						masks: t?.masks ?? [],
						detach: t?.detach ?? null
					};
				}));
				s = await n.reviewNonwearFile(i);
				try {
					await r.storeNonwearReview?.(e.id, {
						inputs: a,
						review: s
					});
				} catch {
					console.warn("[nonwear-review] A file's review could not be stored; it is rebuilt on the next open.");
				}
			}
			const o = p(e) ? await r.getNonwearSourceLabels?.(e.id, n) : void 0;
			return {
				file: e,
				review: s,
				nonwearSourceLabels: o
			};
		}
	})), o ?? {
		getPrimary: e,
		extraWorkers: 0,
		cancelOperation: () => {}
	});
	for (const { file: e, review: a, nonwearSourceLabels: s } of f) {
		const t = {
			fileId: e.id,
			filename: e.filename,
			participantId: e.participantId ?? null,
			...s ? { nonwearSourceLabels: s } : {}
		};
		for (const { conflicts: e, algorithmSources: s, ...r } of a.dates) d.push({
			...t,
			...r,
			algorithmSources: s,
			overlapConflicts: e.length
		}), m.push(...e.map((e) => ({
			...t,
			analysisDate: r.analysisDate,
			...e,
			sources: e.sources
		})));
		const { datesWithEvidence: n, ...o } = a.totals;
		c.push({
			...t,
			...o
		}), u.push(a.totals);
	}
	const v = (e) => u.reduce((t, a) => t + (a[e] ?? 0), 0);
	return {
		totalFiles: i.length,
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
			throw new o(n, a.status);
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
