import { Cn as e, Jt as t, Pn as n, Qt as s, bn as r, rn as i } from "./schema-B6UkEiVJ.js";
import "./workspace-db-DU4CzwX1.js";
import { n as a } from "./background-jobs-DLr2X4eX.js";
import { a as o, b as l } from "./epoch-utils-DKhxpU_X.js";
import { r as u, rn as g } from "./store-BrZppDwj.js";
import { X as d, y as c } from "./night-session-registry-DJqsXW29.js";
import { h as m, m as p, p as f, x as h, y as w } from "./per-source-defaults-BIydRzBy.js";
import { i as v, t as _ } from "./local-ggir-hasib-variants-DCQrXS7v.js";
import { a as C, k as G, x as M } from "./local-nonwear-unified-QTOZtx7w.js";
import { t as y } from "./file-sensor-location-D3poeAvf.js";
import { n as R } from "./ggir-results-types-zXnmQuny.js";
function I(t) {
	return Object.keys(e).filter((n) => e[n].propagation.includes(t)).sort();
}
function k(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(k).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${k(t)}`).join(",")}}`;
}
const b = "analysis_paradigm", A = Object.values(r).flat();
function S(t, n, s) {
	return r = function(t, n) {
		const s = f(n, p(t[b])), r = new Set(A.filter((n) => e[n].appliesUnderParadigm !== s?.paradigm || function(t, n) {
			const s = h[e[t].range];
			return void 0 !== s && s(n);
		}(n, t[n])));
		w(n) || r.add(b);
		const i = {
			...Object.fromEntries(Object.entries(t).filter(([e]) => !r.has(e))),
			ggir_config: { sha256: g(t).sha256 }
		};
		return s && (delete i.ggir_config, i.default_algorithm = s.sleepAlgorithm, s.periodGuider && (i.period_guider = s.periodGuider), i.nonwear_detectors_counts = m({
			algorithm: s.sleepAlgorithm,
			periodGuider: s.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(t.nonwear_detectors_counts) ? t.nonwear_detectors_counts : []
		}, s.paradigm, n).nonwearDetectorsCounts), w(n) ? (delete i.ggir_config, i.extraction_path = null, "ggir" !== M(i.default_algorithm) && (i.nonwear_detectors_ggir = null), i) : i;
	}(function(t, n, s = u.getState()) {
		const r = s, i = {};
		for (const a of I("materialized")) {
			const t = e[a].storeKeys.zustand;
			if (void 0 === t || !(t in r)) throw new Error(`materialized setting ${a} has no live value to hash (zustand projection: ${t ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			i[a] = r[t];
		}
		return i.sleep_period_detection = {
			value: i.sleep_period_detection,
			resolvedSensorLocation: y(t, n)
		}, i;
	}(t, n, s), t), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${k(t[e])}`);
		let s = 2166136261;
		for (const r of n.join("")) s ^= r.charCodeAt(0), s = Math.imul(s, 16777619) >>> 0;
		return s.toString(16).padStart(8, "0");
	}(I("materialized"), r);
	var r;
}
var N = n({
	GGIR_NO_PART4: () => J,
	GGIR_NO_PART4_NOTE: () => Q,
	GGIR_PART4_NOT_READ: () => X,
	assertUniqueGgirNightDates: () => ee,
	editProvenance: () => ne,
	ggirImportCounts: () => Z,
	ggirMarkerAlgorithm: () => W,
	ggirNightCoverage: () => K,
	ggirNoPart4Note: () => Y,
	ggirProposalDescription: () => q,
	ggirReportedNightDates: () => L,
	ggirResultsBundleRecord: () => O,
	ggirUnmarkedNightReason: () => V,
	ggirValueSets: () => x,
	markerWindows: () => F,
	nightWindows: () => z,
	prepareGgirReviewMarkers: () => ie,
	proposalNote: () => re,
	readGgirResultsInput: () => $,
	recordingReports: () => E,
	saveGgirReviewMarkers: () => ae,
	stripMasks: () => D,
	summariesFromReview: () => se
});
const j = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function $(e, n = []) {
	const [s, r, i, a, o, l] = await Promise.all([
		j(e.part1),
		j(e.ms2),
		j(e.ms3),
		j(e.ms4),
		j(e.ms5),
		j(e.sleeplogRData)
	]);
	return {
		part1: s,
		configCsv: await e.configCsv.text(),
		...r ? { ms2: r } : {},
		...i ? { ms3: i } : {},
		...a ? { ms4: a } : {},
		...o ? { ms5: o } : {},
		...l ? { sleeplogRData: l } : {},
		...e.sleeplogCsv ? { sleeplogCsv: await e.sleeplogCsv.text() } : {},
		recordingId: t(e.recordingFile),
		...e.cleanedNightsCsv ? { cleanedNightsCsv: await e.cleanedNightsCsv.text() } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: await e.dataCleaningCsv.text() } : {},
		edits: n,
		crossCheck: !1
	};
}
function D(e) {
	const { sib: t, invalid: n, nonwear: s, ...r } = e;
	return r;
}
const P = (e) => e ? e.slice().buffer : void 0;
function H(e, n, s) {
	const r = new Set((n.nights.values[n.nights.columns.indexOf(l.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), i = new Set((n.nights.values[n.nights.columns.indexOf(l.ggir_filename.header)] ?? []).map((e) => t(String(e)))), a = (t) => e.values[e.columns.indexOf(l.ggir_id.header)]?.[t], o = (n) => t(String(e.values[e.columns.indexOf(l.ggir_filename.header)]?.[n])), u = Array.from({ length: e.rows }, (e, t) => t).filter(0 === r.size && void 0 !== s ? (t) => e.columns.includes(l.ggir_filename.header) && o(t) === s : (t) => null != a(t) && r.has(String(a(t))) && (!e.columns.includes(l.ggir_filename.header) || 0 === i.size || i.has(o(t))));
	return {
		columns: e.columns,
		rows: u.length,
		values: e.values.map((e) => u.map((t) => e[t]))
	};
}
const E = (e, t, n) => Object.fromEntries(Object.entries(e ?? {}).map(([e, s]) => [e, H(s, t, n)]));
function O(e, t, n, s, r = {}) {
	const i = P(n.ms2), a = P(n.ms3), o = P(n.ms4), l = P(n.ms5), u = P(n.sleeplogRData);
	return {
		fileId: e,
		recordingFile: t,
		part1: P(n.part1),
		configCsv: n.configCsv,
		part2Reports: E(r.part2Reports, s, n.recordingId),
		...r.personReports ? { personReports: E(r.personReports, s, n.recordingId) } : {},
		...n.cleanedNightsCsv ? { cleanedNightsCsv: n.cleanedNightsCsv } : {},
		...n.dataCleaningCsv ? { dataCleaningCsv: n.dataCleaningCsv } : {},
		...i ? { ms2: i } : {},
		...a ? { ms3: a } : {},
		...o ? { ms4: o } : {},
		...l ? { ms5: l } : {},
		...u ? { sleeplogRData: u } : {},
		...n.sleeplogCsv ? { sleeplogCsv: n.sleeplogCsv } : {},
		...void 0 !== r.qwindowCsv ? { qwindowCsv: r.qwindowCsv } : {},
		...r.resultsCsv ? { resultsCsv: r.resultsCsv } : {},
		imported: D(s),
		edits: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function x(e, t, n = !0) {
	if (!e.ggirCorrections) {
		if (!n || !t?.values || !t.ggirCorrections) return [{
			set: "default",
			bundle: e
		}];
		const { current: s, ms2: r, ms3: i, ms4: a, ms5: o, cleanedNightsCsv: l, part2Reports: u, personReports: g, ...d } = e;
		return [{
			set: "default",
			bundle: e
		}, {
			set: "corrected",
			bundle: {
				...d,
				...t.values,
				ggirCorrections: t.ggirCorrections
			}
		}];
	}
	const { stock: s, stockMs2: r, stockMs3: i, stockMs4: a, stockMs5: o, ggirCorrections: l, ms2: u, ms3: g, ms4: d, ms5: c, cleanedNightsCsv: m, part2Reports: p, personReports: f, current: h, ...w } = e, v = s ? [{
		set: "default",
		bundle: {
			...w,
			...s,
			...r ? { ms2: r } : {},
			...i ? { ms3: i } : {},
			...a ? { ms4: a } : {},
			...o ? { ms5: o } : {}
		}
	}] : [];
	return v.length > 0 && !n ? v : [...v, {
		set: "corrected",
		bundle: e
	}];
}
const T = (e) => {
	const t = /* @__PURE__ */ new Set();
	return e.filter((e) => !t.has(e.night) && (t.add(e.night), !0));
};
function z(e) {
	return T(e.sleepWindows);
}
function L(e) {
	return [...new Set(z(e).map((e) => e.nightDate))].sort();
}
function F(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return z(e).filter((s) => t.has(s.night) && s.onsetMs >= e.startMs && s.wakeMs <= n && s.wakeMs > s.onsetMs);
}
function W(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case _: return s.VAN_HEES_2015;
		case v("cole_kripke_1992"): return s.COLE_KRIPKE_1992_GGIR;
		case v("sadeh_1994"): return s.SADEH_1994_GGIR;
		case v("galland_2012"): return s.GALLAND_2012;
		case v("oakley_1997"): return s.OAKLEY_1997;
		default: return null;
	}
}
function q(e) {
	return null == W(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${K(e)}`;
}
function K(e) {
	const t = z(e).length;
	return `${String(F(e).length)} of ${String(t)} ${1 === t ? "night" : "nights"} GGIR reported got a GGIR marker.`;
}
const U = {
	excluded_by_ggir_cleaning: "excluded by GGIR cleaning",
	window_is_other_nights_average: "window is other nights' average",
	sleep_times_are_guider_fill: "sleep times filled from a guide",
	window_outside_recording: "window falls outside the recording",
	missing_ggir_window: "GGIR did not supply a sleep window"
};
function V(e, t) {
	const n = (e.bugAwareness ?? []).find((e) => e.night === t && U[e.name]);
	return n ? U[n.name] : null == W(e) ? "GGIR sleep algorithm has no marker mapping" : "GGIR supplied no usable window";
}
const B = ["N valid WEdays", "N valid WKdays"], J = "GGIR made no Part 4 for this recording", Q = `imported without GGIR sleep windows: ${J}`, X = "GGIR’s Part 4 milestone (meta/ms4.out) could not be read.";
function Y(e, t) {
	if (e.sources.ms4) return null;
	if (e.importNotices.includes("GGIR’s Part 4 milestone (meta/ms4.out) could not be read.")) return "imported without GGIR sleep windows: its GGIR Part 4 milestone could not be read";
	const n = t?.["part2_summary.csv"], s = 1 === n?.rows ? B.map((e) => R(n, e, 0)) : [];
	return s.length > 0 && s.every((e) => 0 === e) ? `${Q} (it found no valid days)` : Q;
}
function Z(e, t) {
	const n = /* @__PURE__ */ new Set([...z(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), s = new Set(null == W(e) ? [] : F(e).map((e) => e.night)), r = /* @__PURE__ */ new Map();
	for (const a of n) {
		if (s.has(a)) continue;
		const t = V(e, a);
		r.set(t, (r.get(t) ?? 0) + 1);
	}
	const i = Y(e, t);
	return {
		reportedNights: n.size,
		markedNights: s.size,
		exclusions: [...r].map(([e, t]) => ({
			reason: e,
			count: t
		})),
		...i ? { note: i } : {}
	};
}
function ee(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.nightDate);
		if (null != e && e !== n.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		t.set(n.nightDate, n.night);
	}
}
const te = (e, t) => a(t).wallClockLabels(Float64Array.from(e));
async function ne(e, t, n, s, r = !1) {
	const i = t.find((e) => e.night === n), a = z(e).find((e) => e.night === n);
	if (!i || !a) return null;
	const [o, l] = await te([a.onsetMs, a.wakeMs], s), u = [i.onset !== o ? `onset moved ${r ? `${o} → ` : ""}${i.onset}` : null, i.wake !== l ? `wake moved ${r ? `${l} → ` : ""}${i.wake}` : null].filter((e) => null != e);
	return u.length > 0 ? `edited: ${u.join(", ")}` : null;
}
async function se(e, t, n, s = a(n)) {
	if (ee(e.sleepWindows), !e.sources.ms5) return [];
	const r = (/* @__PURE__ */ new Date()).toISOString(), i = e.nightSummaries ?? [], l = new Map(z(e).map((e) => [e.night, e.nightDate])), u = (e) => e.nightDate ?? (null == e.night ? void 0 : l.get(e.night)), g = new Map(await Promise.all([...new Set(i.map(u).filter((e) => null != e))].map(async (e) => [e, await o(e, void 0, s)]))), d = Float64Array.from(i, (e) => e.validHours ?? NaN), c = e.includeDayCriterionHours ?? await s.ggirIncludeDayCriterionHours(null), m = Float64Array.from(i, () => c), p = await s.ggirDaysIncluded(d, m, null);
	return i.flatMap((e, n) => {
		const s = u(e);
		return null == s ? [] : [{
			fileId: t,
			analysisDate: g.get(s),
			totalSleepTimeMinutes: e.totalSleepMinutes ?? null,
			wasoMinutes: e.wasoMinutes ?? null,
			sleepEfficiency: e.sleepEfficiencyPct ?? null,
			mvpaMinutes: e.mvpaMinutes ?? null,
			moderateMinutes: e.moderateMinutes ?? null,
			vigorousMinutes: e.vigorousMinutes ?? null,
			lpaMinutes: e.lpaMinutes ?? null,
			sedentaryMinutes: e.sedentaryMinutes ?? null,
			l5MidpointHour: e.l5MidpointHour ?? null,
			m5MidpointHour: e.m5MidpointHour ?? null,
			intensityGradient: e.intensityGradient,
			nonwearMinutes: e.nonwearMinutes ?? null,
			validHours: e.validHours ?? null,
			cleaningCode: e.cleaningCode ?? null,
			fragmentationTpIn2Ac: null,
			fragmentationTpAc2In: null,
			fragmentCount: null,
			includeDayCriterionHours: c,
			...null == e.validHours ? {} : { meetsIncludeDayCriterion: 1 === p[n] },
			calibration: null,
			createdAt: r,
			updatedAt: r
		}];
	});
}
async function re(e, t, n, s = a(n)) {
	const [r, i] = await s.wallClockLabels(Float64Array.of(t.onsetMs, t.wakeMs));
	return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(t.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${r} → ${i}`;
}
async function ie(e, t, n) {
	return Promise.all(F(e).map(async (s) => {
		const [r, i] = await n.ggirLabelsToStoredMs(Float64Array.of(s.onsetMs, s.wakeMs), t), a = await re(e, s, void 0, n);
		return {
			date: s.nightDate,
			onsetTimestamp: r / 1e3,
			offsetTimestamp: i / 1e3,
			notes: a
		};
	}));
}
async function ae(e, t, n, s, r, o = [], l, u) {
	ee(t.sleepWindows);
	const g = W(t);
	if (null == g) return !0;
	const m = S(null, n), p = a(l);
	let f = !0;
	for (const a of u ?? await ie(t, o, p)) {
		const t = [{
			markerType: i.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: a.onsetTimestamp,
			offsetTimestamp: a.offsetTimestamp,
			source: "auto",
			settingsHash: m
		}];
		await (await import("./night-session-D49XNI8x.js").then((e) => e.t)).writeHeadlessNight({
			signal: l,
			fileId: e,
			...r ? { expected: c(null) } : {},
			date: a.date,
			username: d,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: a.notes,
			algorithm: g,
			sleepPeriodDetectionConfig: G(void 0, C) ?? null
		}, s, null).catch(() => {
			l?.throwIfAborted(), console.warn("[local-processing] GGIR results marker persistence failed."), f = !1;
		});
	}
	return f;
}
export { D as _, q as a, V as c, F as d, z as f, ae as g, E as h, W as i, x as l, $ as m, ee as n, L as o, ie as p, ne as r, O as s, X as t, N as u, se as v, S as y };
