import { In as e, Sn as t, Tn as n, Xt as s, an as r, en as i } from "./schema-BGRflpdS.js";
import "./workspace-db-ZwhOL3AY.js";
import { n as a } from "./background-jobs-BXSYSixL.js";
import { a as o, x as l } from "./epoch-utils-Cjws3TDy.js";
import { in as u, r as g } from "./store-D5LPiRds.js";
import { Z as d, b as c } from "./night-session-registry-DhpX55ay.js";
import { h as m, m as p, p as f, x as h, y as w } from "./per-source-defaults-D5O6G9kE.js";
import { i as v, t as _ } from "./local-ggir-hasib-variants-BosU6Z8w.js";
import { a as C, k as G, x as M } from "./local-nonwear-unified-BwC-PW0G.js";
import { t as y } from "./file-sensor-location-D3poeAvf.js";
import { n as R } from "./ggir-results-types-BFGvoGkk.js";
function I(e) {
	return Object.keys(n).filter((t) => n[t].propagation.includes(e)).sort();
}
function k(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(k).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${k(t)}`).join(",")}}`;
}
const b = "analysis_paradigm", A = Object.values(t).flat();
function S(e, t, s) {
	return r = function(e, t) {
		const s = f(t, p(e[b])), r = new Set(A.filter((t) => n[t].appliesUnderParadigm !== s?.paradigm || function(e, t) {
			const s = h[n[e].range];
			return void 0 !== s && s(t);
		}(t, e[t])));
		w(t) || r.add(b);
		const i = {
			...Object.fromEntries(Object.entries(e).filter(([e]) => !r.has(e))),
			ggir_config: { sha256: u(e).sha256 }
		};
		return s && (delete i.ggir_config, i.default_algorithm = s.sleepAlgorithm, s.periodGuider && (i.period_guider = s.periodGuider), i.nonwear_detectors_counts = m({
			algorithm: s.sleepAlgorithm,
			periodGuider: s.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, s.paradigm, t).nonwearDetectorsCounts), w(t) ? (delete i.ggir_config, i.extraction_path = null, "ggir" !== M(i.default_algorithm) && (i.nonwear_detectors_ggir = null), i) : i;
	}(function(e, t, s = g.getState()) {
		const r = s, i = {};
		for (const a of I("materialized")) {
			const e = n[a].storeKeys.zustand;
			if (void 0 === e || !(e in r)) throw new Error(`materialized setting ${a} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			i[a] = r[e];
		}
		return i.sleep_period_detection = {
			value: i.sleep_period_detection,
			resolvedSensorLocation: y(e, t)
		}, i;
	}(e, t, s), e), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${k(t[e])}`);
		let s = 2166136261;
		for (const r of n.join("")) s ^= r.charCodeAt(0), s = Math.imul(s, 16777619) >>> 0;
		return s.toString(16).padStart(8, "0");
	}(I("materialized"), r);
	var r;
}
var N = e({
	GGIR_NO_PART4: () => X,
	GGIR_NO_PART4_NOTE: () => Y,
	GGIR_PART4_NOT_READ: () => Z,
	assertUniqueGgirNightDates: () => ee,
	editProvenance: () => ne,
	ggirImportCounts: () => Q,
	ggirMarkerAlgorithm: () => W,
	ggirNightCoverage: () => K,
	ggirNoPart4Note: () => J,
	ggirProposalDescription: () => q,
	ggirReportedNightDates: () => F,
	ggirResultsBundleRecord: () => O,
	ggirUnmarkedNightReason: () => V,
	ggirValueSets: () => E,
	markerWindows: () => L,
	nightWindows: () => z,
	prepareGgirReviewMarkers: () => ie,
	proposalNote: () => re,
	readGgirResultsInput: () => $,
	recordingReports: () => x,
	saveGgirReviewMarkers: () => ae,
	stripMasks: () => D,
	summariesFromReview: () => se
});
const j = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function $(e, t = []) {
	const [n, r, i, a, o, l] = await Promise.all([
		j(e.part1),
		j(e.ms2),
		j(e.ms3),
		j(e.ms4),
		j(e.ms5),
		j(e.sleeplogRData)
	]);
	return {
		part1: n,
		configCsv: await e.configCsv.text(),
		...r ? { ms2: r } : {},
		...i ? { ms3: i } : {},
		...a ? { ms4: a } : {},
		...o ? { ms5: o } : {},
		...l ? { sleeplogRData: l } : {},
		...e.sleeplogCsv ? { sleeplogCsv: await e.sleeplogCsv.text() } : {},
		recordingId: s(e.recordingFile),
		...e.cleanedNightsCsv ? { cleanedNightsCsv: await e.cleanedNightsCsv.text() } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: await e.dataCleaningCsv.text() } : {},
		edits: t,
		crossCheck: !1
	};
}
function D(e) {
	const { sib: t, invalid: n, nonwear: s, ...r } = e;
	return r;
}
const H = (e) => e ? e.slice().buffer : void 0;
function P(e, t, n) {
	const r = new Set((t.nights.values[t.nights.columns.indexOf(l.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), i = new Set((t.nights.values[t.nights.columns.indexOf(l.ggir_filename.header)] ?? []).map((e) => s(String(e)))), a = (t) => e.values[e.columns.indexOf(l.ggir_id.header)]?.[t], o = (t) => s(String(e.values[e.columns.indexOf(l.ggir_filename.header)]?.[t])), u = Array.from({ length: e.rows }, (e, t) => t).filter(0 === r.size && void 0 !== n ? (t) => e.columns.includes(l.ggir_filename.header) && o(t) === n : (t) => null != a(t) && r.has(String(a(t))) && (!e.columns.includes(l.ggir_filename.header) || 0 === i.size || i.has(o(t))));
	return {
		columns: e.columns,
		rows: u.length,
		values: e.values.map((e) => u.map((t) => e[t]))
	};
}
const x = (e, t, n) => Object.fromEntries(Object.entries(e ?? {}).map(([e, s]) => [e, P(s, t, n)]));
function O(e, t, n, s, r = {}) {
	const i = H(n.ms2), a = H(n.ms3), o = H(n.ms4), l = H(n.ms5), u = H(n.sleeplogRData);
	return {
		fileId: e,
		recordingFile: t,
		part1: H(n.part1),
		configCsv: n.configCsv,
		part2Reports: x(r.part2Reports, s, n.recordingId),
		...r.personReports ? { personReports: x(r.personReports, s, n.recordingId) } : {},
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
function E(e, t, n = !0) {
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
function F(e) {
	return [...new Set(z(e).map((e) => e.nightDate))].sort();
}
function L(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return z(e).filter((s) => t.has(s.night) && s.onsetMs >= e.startMs && s.wakeMs <= n && s.wakeMs > s.onsetMs);
}
function W(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case _: return i.VAN_HEES_2015;
		case v("cole_kripke_1992"): return i.COLE_KRIPKE_1992_GGIR;
		case v("sadeh_1994"): return i.SADEH_1994_GGIR;
		case v("galland_2012"): return i.GALLAND_2012;
		case v("oakley_1997"): return i.OAKLEY_1997;
		default: return null;
	}
}
function q(e) {
	return null == W(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${K(e)}`;
}
function K(e) {
	const t = z(e).length;
	return `${String(L(e).length)} of ${String(t)} ${1 === t ? "night" : "nights"} GGIR reported got a GGIR marker.`;
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
const B = ["N valid WEdays", "N valid WKdays"], X = "GGIR made no Part 4 for this recording", Y = `imported without GGIR sleep windows: ${X}`, Z = "GGIR’s Part 4 milestone (meta/ms4.out) could not be read.";
function J(e, t) {
	if (e.sources.ms4) return null;
	if (e.importNotices.includes("GGIR’s Part 4 milestone (meta/ms4.out) could not be read.")) return "imported without GGIR sleep windows: its GGIR Part 4 milestone could not be read";
	const n = t?.["part2_summary.csv"], s = 1 === n?.rows ? B.map((e) => R(n, e, 0)) : [];
	return s.length > 0 && s.every((e) => 0 === e) ? `${Y} (it found no valid days)` : Y;
}
function Q(e, t) {
	const n = /* @__PURE__ */ new Set([...z(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), s = new Set(null == W(e) ? [] : L(e).map((e) => e.night)), r = /* @__PURE__ */ new Map();
	for (const a of n) {
		if (s.has(a)) continue;
		const t = V(e, a);
		r.set(t, (r.get(t) ?? 0) + 1);
	}
	const i = J(e, t);
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
	return Promise.all(L(e).map(async (s) => {
		const [r, i] = await n.ggirLabelsToStoredMs(Float64Array.of(s.onsetMs, s.wakeMs), t), a = await re(e, s, void 0, n);
		return {
			date: s.nightDate,
			onsetTimestamp: r / 1e3,
			offsetTimestamp: i / 1e3,
			notes: a
		};
	}));
}
async function ae(e, t, n, s, i, o = [], l, u) {
	ee(t.sleepWindows);
	const g = W(t);
	if (null == g) return !0;
	const m = S(null, n), p = a(l);
	let f = !0;
	for (const a of u ?? await ie(t, o, p)) {
		const t = [{
			markerType: r.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: a.onsetTimestamp,
			offsetTimestamp: a.offsetTimestamp,
			source: "auto",
			settingsHash: m
		}];
		await (await import("./night-session-BqCoIqx_.js").then((e) => e.t)).writeHeadlessNight({
			signal: l,
			fileId: e,
			...i ? { expected: c(null) } : {},
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
export { x as _, W as a, se as b, F as c, E as d, N as f, $ as g, ie as h, ne as i, O as l, z as m, Z as n, J as o, L as p, ee as r, q as s, X as t, V as u, ae as v, S as x, D as y };
