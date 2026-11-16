import { Cn as e, Jt as t, Pn as n, Qt as s, bn as r, rn as i } from "./schema-D8rqa1Y6.js";
import "./workspace-db-tot7PUXb.js";
import { n as a } from "./background-jobs-B2uo95VO.js";
import { a as o, c as l, n as u, r as g } from "./ggir-results-types-DHGfKmuO.js";
import { r as d, tn as c } from "./store-StTfKmbj.js";
import { J as m, y as p } from "./night-session-registry-Blk6S0Kz.js";
import { h as f, m as h, p as w, x as v, y as _ } from "./per-source-defaults-DHWdfoJI.js";
import { i as C, t as M } from "./local-ggir-hasib-variants-TGeoq31A.js";
import { a as G, k as y, x as R } from "./local-nonwear-unified-DbYlb1Ol.js";
import { r as k, t as I } from "./diagnostic-log-D1tZZeTx.js";
import { t as b } from "./file-sensor-location-D3poeAvf.js";
import { a as A } from "./epoch-utils-CzLU8tdl.js";
function S(t) {
	return Object.keys(e).filter((n) => e[n].propagation.includes(t)).sort();
}
function N(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(N).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${N(t)}`).join(",")}}`;
}
const j = "analysis_paradigm", $ = Object.values(r).flat();
function D(t, n, s) {
	return r = function(t, n) {
		const s = w(n, h(t[j])), r = new Set($.filter((n) => e[n].appliesUnderParadigm !== s?.paradigm || function(t, n) {
			const s = v[e[t].range];
			return void 0 !== s && s(n);
		}(n, t[n])));
		_(n) || r.add(j);
		const i = {
			...Object.fromEntries(Object.entries(t).filter(([e]) => !r.has(e))),
			ggir_config: { sha256: c(t).sha256 }
		};
		return s && (delete i.ggir_config, i.default_algorithm = s.sleepAlgorithm, s.periodGuider && (i.period_guider = s.periodGuider), i.nonwear_detectors_counts = f({
			algorithm: s.sleepAlgorithm,
			periodGuider: s.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(t.nonwear_detectors_counts) ? t.nonwear_detectors_counts : []
		}, s.paradigm, n).nonwearDetectorsCounts), _(n) ? (delete i.ggir_config, i.extraction_path = null, "ggir" !== R(i.default_algorithm) && (i.nonwear_detectors_ggir = null), i) : i;
	}(function(t, n, s = d.getState()) {
		const r = s, i = {};
		for (const a of S("materialized")) {
			const t = e[a].storeKeys.zustand;
			if (void 0 === t || !(t in r)) throw new Error(`materialized setting ${a} has no live value to hash (zustand projection: ${t ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			i[a] = r[t];
		}
		return i.sleep_period_detection = {
			value: i.sleep_period_detection,
			resolvedSensorLocation: b(t, n)
		}, i;
	}(t, n, s), t), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${N(t[e])}`);
		let s = 2166136261;
		for (const r of n.join("")) s ^= r.charCodeAt(0), s = Math.imul(s, 16777619) >>> 0;
		return s.toString(16).padStart(8, "0");
	}(S("materialized"), r);
	var r;
}
var P = n({
	GGIR_NO_PART4: () => Z,
	GGIR_NO_PART4_NOTE: () => ee,
	GGIR_PART4_NOT_READ: () => te,
	assertUniqueGgirNightDates: () => re,
	editProvenance: () => oe,
	editProvenanceFromLabels: () => le,
	ggirImportCounts: () => se,
	ggirMarkerAlgorithm: () => V,
	ggirNightCoverage: () => J,
	ggirNoPart4Note: () => ne,
	ggirProposalDescription: () => B,
	ggirReportedNightDates: () => q,
	ggirResultsBundleRecord: () => L,
	ggirUnmarkedNightReason: () => Y,
	ggirValueSets: () => F,
	labelEntries: () => ie,
	markerWindows: () => U,
	nightWindows: () => K,
	prepareGgirReviewMarkers: () => de,
	proposalNote: () => ge,
	readGgirResultsInput: () => E,
	recordingReports: () => z,
	saveGgirReviewMarkers: () => ce,
	stripMasks: () => O,
	summariesFromReview: () => ue
});
const H = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function E(e, n = []) {
	const [s, r, i, a, o, l] = await Promise.all([
		H(e.part1),
		H(e.ms2),
		H(e.ms3),
		H(e.ms4),
		H(e.ms5),
		H(e.sleeplogRData)
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
function O(e) {
	const { sib: t, invalid: n, nonwear: s, ...r } = e;
	return r;
}
const T = (e) => e ? e.slice().buffer : void 0;
function x(e, t, n) {
	const s = new Set((t.nights.values[t.nights.columns.indexOf(l.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), r = new Set(Array.from({ length: t.nights.rows }, (e, n) => o(t.nights, n)).filter((e) => null !== e)), i = (t) => e.values[e.columns.indexOf(l.ggir_id.header)]?.[t], a = void 0 === n ? null : g(n), u = Array.from({ length: e.rows }, (e, t) => t).filter(0 === s.size && null !== a ? (t) => o(e, t) === a : (t) => null != i(t) && s.has(String(i(t))) && (!e.columns.includes(l.ggir_filename.header) || 0 === r.size || r.has(o(e, t) ?? "")));
	return {
		columns: e.columns,
		rows: u.length,
		values: e.values.map((e) => u.map((t) => e[t]))
	};
}
const z = (e, t, n) => Object.fromEntries(Object.entries(e ?? {}).map(([e, s]) => [e, x(s, t, n)]));
function L(e, t, n, s, r = {}) {
	const i = T(n.ms2), a = T(n.ms3), o = T(n.ms4), l = T(n.ms5), u = T(n.sleeplogRData);
	return {
		fileId: e,
		recordingFile: t,
		part1: T(n.part1),
		configCsv: n.configCsv,
		part2Reports: z(r.part2Reports, s, t),
		...r.personReports ? { personReports: z(r.personReports, s, t) } : {},
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
		imported: O(s),
		edits: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function F(e, t, n = !0) {
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
const W = (e) => {
	const t = /* @__PURE__ */ new Set();
	return e.filter((e) => !t.has(e.night) && (t.add(e.night), !0));
};
function K(e) {
	return W(e.sleepWindows);
}
function q(e) {
	return [...new Set(K(e).map((e) => e.nightDate))].sort();
}
function U(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return K(e).filter((s) => t.has(s.night) && s.onsetMs >= e.startMs && s.wakeMs <= n && s.wakeMs > s.onsetMs);
}
function V(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case M: return s.VAN_HEES_2015;
		case C("cole_kripke_1992"): return s.COLE_KRIPKE_1992_GGIR;
		case C("sadeh_1994"): return s.SADEH_1994_GGIR;
		case C("galland_2012"): return s.GALLAND_2012;
		case C("oakley_1997"): return s.OAKLEY_1997;
		default: return null;
	}
}
function B(e) {
	return null == V(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${J(e)}`;
}
function J(e) {
	const t = K(e).length;
	return `${String(U(e).length)} of ${String(t)} ${1 === t ? "night" : "nights"} GGIR reported got a GGIR marker.`;
}
const Q = {
	excluded_by_ggir_cleaning: "excluded by GGIR cleaning",
	window_is_other_nights_average: "window is other nights' average",
	sleep_times_are_guider_fill: "sleep times filled from a guide",
	window_outside_recording: "window falls outside the recording",
	missing_ggir_window: "GGIR did not supply a sleep window"
};
function Y(e, t) {
	const n = (e.bugAwareness ?? []).find((e) => e.night === t && Q[e.name]);
	return n ? Q[n.name] : null == V(e) ? "GGIR sleep algorithm has no marker mapping" : "GGIR supplied no usable window";
}
const X = ["N valid WEdays", "N valid WKdays"], Z = "GGIR made no Part 4 for this recording", ee = `imported without GGIR sleep windows: ${Z}`, te = "GGIR’s Part 4 milestone (meta/ms4.out) could not be read.";
function ne(e, t) {
	if (e.sources.ms4) return null;
	if (e.importNotices.includes("GGIR’s Part 4 milestone (meta/ms4.out) could not be read.")) return "imported without GGIR sleep windows: its GGIR Part 4 milestone could not be read";
	const n = t?.["part2_summary.csv"], s = 1 === n?.rows ? X.map((e) => u(n, e, 0)) : [];
	return s.length > 0 && s.every((e) => 0 === e) ? `${ee} (it found no valid days)` : ee;
}
function se(e, t) {
	const n = /* @__PURE__ */ new Set([...K(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), s = new Set(null == V(e) ? [] : U(e).map((e) => e.night)), r = /* @__PURE__ */ new Map();
	for (const a of n) {
		if (s.has(a)) continue;
		const t = Y(e, a);
		r.set(t, (r.get(t) ?? 0) + 1);
	}
	const i = ne(e, t);
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
function re(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.nightDate);
		if (null != e && e !== n.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		t.set(n.nightDate, n.night);
	}
}
const ie = (e, t) => e.flatMap((e, n) => void 0 === t[n] ? [] : [[e, t[n]]]), ae = (e, t) => a(t).wallClockLabels(Float64Array.from(e));
async function oe(e, t, n, s, r = !1) {
	const i = K(e).find((e) => e.night === n);
	if (!i || !t.some((e) => e.night === n)) return null;
	const a = [i.onsetMs, i.wakeMs];
	return le(e, t, n, new Map(ie(a, await ae(a, s))), r);
}
function le(e, t, n, s, r = !1) {
	const i = t.find((e) => e.night === n), a = K(e).find((e) => e.night === n), o = a && s.get(a.onsetMs), l = a && s.get(a.wakeMs);
	if (!i || void 0 === o || void 0 === l) return null;
	const u = [i.onset !== o ? `onset moved ${r ? `${o} → ` : ""}${i.onset}` : null, i.wake !== l ? `wake moved ${r ? `${l} → ` : ""}${i.wake}` : null].filter((e) => null != e);
	return u.length > 0 ? `edited: ${u.join(", ")}` : null;
}
async function ue(e, t, n, s = a(n)) {
	if (re(e.sleepWindows), !e.sources.ms5) return [];
	const r = (/* @__PURE__ */ new Date()).toISOString(), i = e.nightSummaries ?? [], o = new Map(K(e).map((e) => [e.night, e.nightDate])), l = (e) => e.nightDate ?? (null == e.night ? void 0 : o.get(e.night)), u = new Map(await Promise.all([...new Set(i.map(l).filter((e) => null != e))].map(async (e) => [e, await A(e, void 0, s)]))), g = Float64Array.from(i, (e) => e.validHours ?? NaN), d = e.includeDayCriterionHours ?? await s.ggirIncludeDayCriterionHours(null), c = Float64Array.from(i, () => d), m = await s.ggirDaysIncluded(g, c, null);
	return i.flatMap((e, n) => {
		const s = l(e);
		return null == s ? [] : [{
			fileId: t,
			analysisDate: u.get(s),
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
			includeDayCriterionHours: d,
			...null == e.validHours ? {} : { meetsIncludeDayCriterion: 1 === m[n] },
			calibration: null,
			createdAt: r,
			updatedAt: r
		}];
	});
}
async function ge(e, t, n, s = a(n)) {
	const [r, i] = await s.wallClockLabels(Float64Array.of(t.onsetMs, t.wakeMs));
	return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(t.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${r} → ${i}`;
}
async function de(e, t, n) {
	return Promise.all(U(e).map(async (s) => {
		const [r, i] = await n.ggirLabelsToStoredMs(Float64Array.of(s.onsetMs, s.wakeMs), t), a = await ge(e, s, void 0, n);
		return {
			date: s.nightDate,
			onsetTimestamp: r / 1e3,
			offsetTimestamp: i / 1e3,
			notes: a
		};
	}));
}
async function ce(e, t, n, s, r, o = [], l, u) {
	re(t.sleepWindows);
	const g = V(t);
	if (null == g) return !0;
	const d = D(null, n), c = a(l);
	let f = !0;
	for (const a of u ?? await de(t, o, c)) {
		const t = [{
			markerType: i.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: a.onsetTimestamp,
			offsetTimestamp: a.offsetTimestamp,
			source: "auto",
			settingsHash: d
		}];
		await (await import("./night-session-D4FL2rX1.js").then((e) => e.t)).writeHeadlessNight({
			signal: l,
			fileId: e,
			...r ? { expected: p(null) } : {},
			date: a.date,
			username: m,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: a.notes,
			algorithm: g,
			sleepPeriodDetectionConfig: y(void 0, G) ?? null
		}, s, null).catch((e) => {
			l?.throwIfAborted(), k("warn", "GGIR results marker store failed", I(e)), f = !1;
		});
	}
	return f;
}
export { O as _, B as a, Y as c, U as d, K as f, ce as g, z as h, V as i, F as l, E as m, re as n, q as o, de as p, oe as r, L as s, te as t, P as u, ue as v, D as y };
