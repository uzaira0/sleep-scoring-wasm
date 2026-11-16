import { r as e } from "./workers-B1E_CQH7.js";
import { j as t, t as a } from "./workspace-db-ZwhOL3AY.js";
import { c as n } from "./content-hash-D4_ZE65l.js";
import { o as s } from "./raw-pass-pool-BioIlrK-.js";
import { a as o } from "./epoch-utils-Cjws3TDy.js";
import { Ht as r, L as i, P as l, x as c, y as u } from "./store-D5LPiRds.js";
import { Z as d, tt as p } from "./per-source-defaults-D5O6G9kE.js";
import { i as m } from "./audit-log-BT4oxwxf.js";
import { E as w, N as f, b as v, c as h, o as g, r as _ } from "./local-nonwear-unified-BwC-PW0G.js";
import { k as y } from "./local-export-worker-BqV3_TjS.js";
import { t as M } from "./api-errors-Ce7HwlYT.js";
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
		getLocalFiles: () => l(e),
		getNonwearSourceLabels: y.bind(null, e),
		getAllMarkersByAlgorithmForFile: (t, a) => c(t, a, e),
		getAllActivityDaysForFile: (t) => u(t, e),
		getSensorNonwearForFile: (t) => i(t, e),
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
async function E(t, n, i) {
	const l = n ?? C(a()), c = await l.getLocalFiles(), u = [], d = [], m = [], w = [], f = await Promise.all(c.filter((e) => Boolean(e.id)).map(async (e) => ({
		file: e,
		...await F(e, t, l)
	}))), v = await s(f.map(({ file: e, evidence: t, inputs: a }) => ({
		name: String(e.id),
		cost: e.availableDates.length,
		run: async (n) => {
			let s = e.nonwearReview?.inputs === a ? e.nonwearReview.review : null;
			if (!s) {
				const i = await l.getAllActivityDaysForFile(e.id), c = await Promise.all(t.map(async (e) => {
					const t = await async function(e, t) {
						const a = e.get(t);
						if (!a) return null;
						const n = r(a).timestamps, s = e.get(await o(t)), i = r(s).timestamps, l = n.length > 0 && i.length > 0 && i[0] > n[n.length - 1], c = n.length, u = c + (l ? i.length : 0), d = new Float64Array(u);
						d.set(n), l && d.set(i, c);
						const p = (e, t) => {
							if (!e && !t) return null;
							const a = new Uint8Array(u);
							if (e) {
								const t = new Uint8Array(e);
								a.set(t.subarray(0, Math.min(t.length, c)), 0);
							}
							if (t) {
								const e = new Uint8Array(t);
								a.set(e.subarray(0, Math.min(e.length, u - c)), c);
							}
							return a;
						}, m = new Map(l && s ? A(s).map((e) => [e.source, e.buffer]) : []), w = [];
						for (const { source: o, buffer: r } of A(a)) {
							const e = p(r, m.get(o));
							m.delete(o), e && w.push({
								source: o,
								mask: e
							});
						}
						for (const [o, r] of m) {
							const e = p(null, r);
							e && w.push({
								source: o,
								mask: e
							});
						}
						return {
							timestamps: d,
							masks: w,
							detach: p(a.detachNonwear, l ? s?.detachNonwear : null)
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
				s = await n.reviewNonwearFile(c);
				try {
					await l.storeNonwearReview?.(e.id, {
						inputs: a,
						review: s
					});
				} catch {
					console.warn("[nonwear-review] A file's review could not be stored; it is rebuilt on the next open.");
				}
			}
			const i = p(e) ? await l.getNonwearSourceLabels?.(e.id, n) : void 0;
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
		for (const { conflicts: e, algorithmSources: s, ...r } of a.dates) m.push({
			...t,
			...r,
			algorithmSources: s,
			overlapConflicts: e.length
		}), w.push(...e.map((e) => ({
			...t,
			analysisDate: r.analysisDate,
			...e,
			sources: e.sources
		})));
		const { datesWithEvidence: n, ...o } = a.totals;
		u.push({
			...t,
			...o
		}), d.push(a.totals);
	}
	const h = (e) => d.reduce((t, a) => t + (a[e] ?? 0), 0);
	return {
		totalFiles: c.length,
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
		dates: m,
		conflicts: w
	};
}
const j = {
	id: "local-indexeddb",
	label: "Browser workspace",
	description: "Summarizes stored manual markers, sensor nonwear periods, and existing algorithm masks. It does not run new detection.",
	compute: (e) => E(e)
}, N = {
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
	return "object" == typeof (a = e) && null !== a && "function" == typeof a.compute ? e : t || ("server" === e?.sourceKey ? N : "local" === e?.sourceKey ? j : e?.server ? N : j);
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
export { D as NONWEAR_METHOD_BADGES, b as NONWEAR_SOURCE_LABELS, E as computeLocalNonwearReview, C as createLocalNonwearReviewRepository, T as currentNonwearReviewInputs, S as isProvisionalNonwearSource, j as localNonwearReviewBackend, L as resolveNonwearReviewBackend, N as serverNonwearReviewBackend, P as summarizeNonwearReviewReadiness };
