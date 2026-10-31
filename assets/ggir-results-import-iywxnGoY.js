import { n as e, s as t } from "./ggir-results-types-WB8axvb-.js";
import { Bt as n, E as r, J as s, Q as o, Wt as i, Xt as a, Yt as l, it as c, mn as u, rt as g } from "./schema-C_b4aWdD.js";
import { j as d, m as p, n as m } from "./nonwear-display-slots-DxUzNHze.js";
import { v as f } from "./workspace-db-38_2RzO4.js";
import { t as h } from "./background-jobs-LH2raQtb.js";
import { en as w, i as y } from "./store-m6cKhgSO.js";
import { B as _, h as v } from "./night-session-registry-CUf7nvnM.js";
import { a as S, k as C, x as A } from "./local-nonwear-unified-CQQTMzTm.js";
import { _ as G, d as b, f as I, p as R, u as k } from "./valid-day-criteria-CsOqBoav.js";
import { t as M } from "./file-sensor-location-D3poeAvf.js";
const x = [
	"scoreGgirHasibVariant",
	"scoreSadeh",
	"scoreColeKripke",
	"scoreEpochs"
];
function $(e) {
	return ArrayBuffer.isView(e) ? `${e.constructor.name}[${String(e.byteLength)}]` : Array.isArray(e) ? e.map($) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, $(t)])) : e;
}
function N(e, t) {
	if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
		if (e.byteLength !== t.byteLength) return !1;
		const n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
		return n.every((e, t) => e === r[t]);
	}
	if (null !== e && null !== t && "object" == typeof e && "object" == typeof t) {
		const n = Object.entries(e);
		return n.length === Object.keys(t).length && n.every(([e, n]) => N(n, t[e]));
	}
	return Object.is(e, t);
}
function H(e) {
	const t = /* @__PURE__ */ new Map();
	return new Proxy(e, { get(e, n, r) {
		const s = Reflect.get(e, n, r);
		return "function" == typeof s && x.includes(n) ? async (...r) => {
			const o = `${String(n)}|${JSON.stringify($(r))}`, i = t.get(o) ?? [];
			t.set(o, i);
			let a = i.find((e) => N(e.args, r));
			if (!a) {
				const t = Promise.resolve(Reflect.apply(s, e, r)), n = {
					args: r,
					answer: t
				};
				a = n, i.push(n), t.catch(() => i.splice(i.indexOf(n), 1));
			}
			return structuredClone(await a.answer);
		} : s;
	} });
}
const E = [
	"vanHees2015",
	"Sadeh1994",
	"Galland2012",
	"ColeKripke1992",
	"Oakley1997",
	"NotWorn"
];
function j(e) {
	const t = o[e];
	if (void 0 === t) throw new Error(`no generated method-family label for ${e}`);
	return t.algorithmValue;
}
const z = s.angle_hasib?.algorithmValue, O = E.filter((e) => e !== z), D = new Set(O);
function T(e) {
	const t = r.count_input_series_keys?.[e];
	if (void 0 === t) throw new Error(`Unsupported HASIB count source: ${e}`);
	return {
		family: String(t.count_family),
		axis: String(t.axis),
		epochSeconds: Number(t.epoch_seconds)
	};
}
const B = {
	vanHees2015: f.GGIR_HASIB_VAN_HEES_2015,
	Sadeh1994: f.GGIR_HASIB_SADEH_1994,
	Galland2012: f.GGIR_HASIB_GALLAND_2012,
	ColeKripke1992: f.GGIR_HASIB_COLE_KRIPKE_1992,
	Oakley1997: f.GGIR_HASIB_OAKLEY_1997,
	NotWorn: f.GGIR_HASIB_NOT_WORN
};
function P(e, t, n) {
	if (n.sib.length !== t) throw new Error(`HASIB ${e} returned ${String(n.sib.length)} epochs, expected ${String(t)}.`);
	return n;
}
function L(e, t) {
	const n = o[c];
	return void 0 !== n && e === n.algorithmValue && T(t).family === g;
}
async function V(e) {
	const t = e.variants ?? E, n = t.filter((e) => D.has(e)).length > 0 ? await async function(e) {
		const t = T(e.countSource);
		if ("neishabouri" === t.family) {
			const n = e.neishabouriCounts?.[t.axis] ?? ("vm" === t.axis && 60 === t.epochSeconds ? e.neishabouriVm60s : void 0);
			if (!n || 0 === n.length) throw new Error(`HASIB Neishabouri scoring requires a non-empty ${String(t.epochSeconds)}s ${t.axis.toUpperCase()} count series.`);
			return {
				series: n,
				countSource: e.countSource,
				epochSeconds: t.epochSeconds
			};
		}
		const n = t.axis, r = e.zeroCrossingCountsByAxis?.[n] ?? ("y" === n && 60 === t.epochSeconds ? e.zeroCrossingY60s : void 0);
		if (!e.backend.zeroCrossingCounts) {
			if (r && r.length > 0) return {
				series: r,
				countSource: e.countSource,
				epochSeconds: t.epochSeconds
			};
			throw new Error("HASIB zero-crossing scoring requires a backend zeroCrossingCounts implementation or precomputed axis counts.");
		}
		if (r && r.length > 0) return {
			series: r,
			countSource: e.countSource,
			epochSeconds: t.epochSeconds
		};
		if (!e.rawTriAxis) throw new Error("HASIB zero-crossing scoring requires raw tri-axial samples or precomputed axis counts.");
		(function(e) {
			if (e.sampleRate <= 0 || !Number.isFinite(e.sampleRate)) throw new Error("HASIB zero-crossing scoring requires a positive raw sample rate.");
			if (e.x.length !== e.y.length || e.x.length !== e.z.length) throw new Error(`HASIB zero-crossing scoring requires aligned raw x/y/z arrays (got x=${String(e.x.length)}, y=${String(e.y.length)}, z=${String(e.z.length)}).`);
			if (0 === e.x.length) throw new Error("HASIB zero-crossing scoring requires at least one raw sample.");
		})(e.rawTriAxis);
		const s = await e.backend.zeroCrossingCounts(e.rawTriAxis.x, e.rawTriAxis.y, e.rawTriAxis.z, e.rawTriAxis.sampleRate, e.countEpochSeconds ?? t.epochSeconds), o = "x" === n ? s.zcx : "y" === n ? s.zcy : s.zcz;
		if (0 === o.length) throw new Error(`HASIB zero-crossing scoring produced an empty ${n.toUpperCase()}-axis count series.`);
		return {
			series: o,
			countSource: e.countSource,
			epochSeconds: t.epochSeconds
		};
	}(e) : null, r = [];
	for (const s of t) {
		const t = s === z, o = t ? e.anglez5s : n?.series;
		if (!o || 0 === o.length) throw new Error(`HASIB ${s} requires a non-empty ${t ? "AngleZ" : "count"} input series.`);
		const i = t ? void 0 : e.countEpochSeconds ?? n?.epochSeconds, a = !t && null !== n && L(s, n.countSource), l = void 0 !== i ? {
			ws3: i,
			...e.configs?.[s]
		} : e.configs?.[s], c = a ? {
			...l,
			neishabouriCount: !0
		} : l, u = await e.backend.scoreGgirHasibVariant(o, s, c);
		r.push({
			variant: s,
			key: B[s],
			countSource: t ? "anglez_5s" : n.countSource,
			result: P(s, o.length, u)
		});
	}
	return r;
}
function W(e) {
	return Object.keys(u).filter((t) => u[t].propagation.includes(e)).sort();
}
function q(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(q).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${q(t)}`).join(",")}}`;
}
function F(e, t, n) {
	return r = function(e, t) {
		const n = {
			...e,
			ggir_config: { sha256: w(e).sha256 }
		}, r = b(t, I(e.analysis_paradigm));
		return G(t) ? r ? (delete n.ggir_config, n.default_algorithm = r.sleepAlgorithm, r.periodGuider && (n.period_guider = r.periodGuider), n.nonwear_detectors_counts = R({
			algorithm: r.sleepAlgorithm,
			periodGuider: r.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, r.paradigm, t).nonwearDetectorsCounts, 0 === Object.keys(k(e.actiware_analysis)).length && delete n.actiware_analysis) : delete n.actiware_analysis : (delete n.analysis_paradigm, delete n.actiware_analysis), m(t?.sourceType, t?.sourceProfileId) !== a.ACTIWARE_OFF_WRIST || (delete n.ggir_config, n.extraction_path = null, "ggir" !== A(n.default_algorithm) && (n.nonwear_detectors_ggir = null)), n;
	}(function(e, t, n = y.getState()) {
		const r = n, s = {};
		for (const o of W("materialized")) {
			const e = u[o].storeKeys.zustand;
			if (void 0 === e || !(e in r)) throw new Error(`materialized setting ${o} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			s[o] = r[e];
		}
		return s.sleep_period_detection = {
			value: s.sleep_period_detection,
			resolvedSensorLocation: M(e, t)
		}, s;
	}(e, t, n), e), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${q(t[e])}`);
		let r = 2166136261;
		for (const s of n.join("")) r ^= s.charCodeAt(0), r = Math.imul(r, 16777619) >>> 0;
		return r.toString(16).padStart(8, "0");
	}(W("materialized"), r);
	var r;
}
var K = t({
	GGIR_NO_PART4: () => de,
	GGIR_NO_PART4_NOTE: () => pe,
	GGIR_PART4_NOT_READ: () => me,
	assertUniqueGgirNightDates: () => we,
	editProvenance: () => _e,
	ggirImportCounts: () => he,
	ggirMarkerAlgorithm: () => ie,
	ggirNightCoverage: () => le,
	ggirNoPart4Note: () => fe,
	ggirProposalDescription: () => ae,
	ggirReportedNightDates: () => se,
	ggirResultsBundleRecord: () => ee,
	ggirUnmarkedNightReason: () => ue,
	ggirValueSets: () => te,
	markerWindows: () => oe,
	nightWindows: () => re,
	prepareGgirReviewMarkers: () => Ce,
	proposalNote: () => Se,
	readGgirResultsInput: () => Y,
	recordingReports: () => Z,
	saveGgirReviewMarkers: () => Ae,
	stripMasks: () => J,
	summariesFromReview: () => ve
});
const U = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function Y(e, t = []) {
	const [r, s, o, i, a, l] = await Promise.all([
		U(e.part1),
		U(e.ms2),
		U(e.ms3),
		U(e.ms4),
		U(e.ms5),
		U(e.sleeplogRData)
	]);
	return {
		part1: r,
		configCsv: await e.configCsv.text(),
		...e.part2Reports ? { part2Reports: e.part2Reports } : {},
		...s ? { ms2: s } : {},
		...o ? { ms3: o } : {},
		...i ? { ms4: i } : {},
		...a ? { ms5: a } : {},
		...l ? { sleeplogRData: l } : {},
		...e.sleeplogCsv ? { sleeplogCsv: await e.sleeplogCsv.text() } : {},
		recordingId: n(e.recordingFile),
		...e.cleanedNightsCsv ? { cleanedNightsCsv: await e.cleanedNightsCsv.text() } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: await e.dataCleaningCsv.text() } : {},
		edits: t,
		crossCheck: !1
	};
}
function J(e) {
	const { sib: t, invalid: n, nonwear: r, ...s } = e;
	return s;
}
const Q = (e) => e ? e.slice().buffer : void 0;
function X(e, t, r) {
	const s = new Set((t.nights.values[t.nights.columns.indexOf(d.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), o = new Set((t.nights.values[t.nights.columns.indexOf(d.ggir_filename.header)] ?? []).map((e) => n(String(e)))), i = (t) => e.values[e.columns.indexOf(d.ggir_id.header)]?.[t], a = (t) => n(String(e.values[e.columns.indexOf(d.ggir_filename.header)]?.[t])), l = Array.from({ length: e.rows }, (e, t) => t).filter(0 === s.size && void 0 !== r ? (t) => e.columns.includes(d.ggir_filename.header) && a(t) === r : (t) => null != i(t) && s.has(String(i(t))) && (!e.columns.includes(d.ggir_filename.header) || 0 === o.size || o.has(a(t))));
	return {
		columns: e.columns,
		rows: l.length,
		values: e.values.map((e) => l.map((t) => e[t]))
	};
}
const Z = (e, t, n) => Object.fromEntries(Object.entries(e ?? {}).map(([e, r]) => [e, X(r, t, n)]));
function ee(e, t, n, r, s = {}) {
	const o = Q(n.ms2), i = Q(n.ms3), a = Q(n.ms4), l = Q(n.ms5), c = Q(n.sleeplogRData);
	return {
		fileId: e,
		recordingFile: t,
		part1: Q(n.part1),
		configCsv: n.configCsv,
		part2Reports: Z(n.part2Reports, r, n.recordingId),
		...s.personReports ? { personReports: Z(s.personReports, r, n.recordingId) } : {},
		...n.cleanedNightsCsv ? { cleanedNightsCsv: n.cleanedNightsCsv } : {},
		...n.dataCleaningCsv ? { dataCleaningCsv: n.dataCleaningCsv } : {},
		...o ? { ms2: o } : {},
		...i ? { ms3: i } : {},
		...a ? { ms4: a } : {},
		...l ? { ms5: l } : {},
		...c ? { sleeplogRData: c } : {},
		...n.sleeplogCsv ? { sleeplogCsv: n.sleeplogCsv } : {},
		...void 0 !== s.qwindowCsv ? { qwindowCsv: s.qwindowCsv } : {},
		...s.resultsCsv ? { resultsCsv: s.resultsCsv } : {},
		imported: J(r),
		edits: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function te(e, t, n = !0) {
	if (!e.ggirCorrections) {
		if (!n || !t?.values || !t.ggirCorrections) return [{
			set: "default",
			bundle: e
		}];
		const { current: r, ms2: s, ms3: o, ms4: i, ms5: a, cleanedNightsCsv: l, part2Reports: c, personReports: u, ...g } = e;
		return [{
			set: "default",
			bundle: e
		}, {
			set: "corrected",
			bundle: {
				...g,
				...t.values,
				ggirCorrections: t.ggirCorrections
			}
		}];
	}
	const { stock: r, stockMs2: s, stockMs3: o, stockMs4: i, stockMs5: a, ggirCorrections: l, ms2: c, ms3: u, ms4: g, ms5: d, cleanedNightsCsv: p, part2Reports: m, personReports: f, current: h, ...w } = e, y = r ? [{
		set: "default",
		bundle: {
			...w,
			...r,
			...s ? { ms2: s } : {},
			...o ? { ms3: o } : {},
			...i ? { ms4: i } : {},
			...a ? { ms5: a } : {}
		}
	}] : [];
	return y.length > 0 && !n ? y : [...y, {
		set: "corrected",
		bundle: e
	}];
}
const ne = (e) => {
	const t = /* @__PURE__ */ new Set();
	return e.filter((e) => !t.has(e.night) && (t.add(e.night), !0));
};
function re(e) {
	return ne(e.sleepWindows);
}
function se(e) {
	return [...new Set(re(e).map((e) => e.nightDate))].sort();
}
function oe(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return re(e).filter((r) => t.has(r.night) && r.onsetMs >= e.startMs && r.wakeMs <= n && r.wakeMs > r.onsetMs);
}
function ie(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case z: return i.VAN_HEES_2015;
		case j("cole_kripke_1992"): return i.COLE_KRIPKE_1992_GGIR;
		case j("sadeh_1994"): return i.SADEH_1994_GGIR;
		case j("galland_2012"): return i.GALLAND_2012;
		case j("oakley_1997"): return i.OAKLEY_1997;
		default: return null;
	}
}
function ae(e) {
	return null == ie(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${le(e)}`;
}
function le(e) {
	const t = re(e).length;
	return `${String(oe(e).length)} of ${String(t)} ${1 === t ? "night" : "nights"} GGIR reported got a GGIR marker.`;
}
const ce = {
	excluded_by_ggir_cleaning: "excluded by GGIR cleaning",
	window_is_other_nights_average: "window is other nights' average",
	sleep_times_are_guider_fill: "sleep times filled from a guide",
	window_outside_recording: "window falls outside the recording",
	missing_ggir_window: "GGIR did not supply a sleep window"
};
function ue(e, t) {
	const n = (e.bugAwareness ?? []).find((e) => e.night === t && ce[e.name]);
	return n ? ce[n.name] : null == ie(e) ? "GGIR sleep algorithm has no marker mapping" : "GGIR supplied no usable window";
}
const ge = ["N valid WEdays", "N valid WKdays"], de = "GGIR made no Part 4 for this recording", pe = `imported without GGIR sleep windows: ${de}`, me = "GGIR’s Part 4 milestone (meta/ms4.out) could not be read.";
function fe(t, n) {
	if (t.sources.ms4) return null;
	if (t.importNotices.includes("GGIR’s Part 4 milestone (meta/ms4.out) could not be read.")) return "imported without GGIR sleep windows: its GGIR Part 4 milestone could not be read";
	const r = n?.["part2_summary.csv"], s = 1 === r?.rows ? ge.map((t) => e(r, t, 0)) : [];
	return s.length > 0 && s.every((e) => 0 === e) ? `${pe} (it found no valid days)` : pe;
}
function he(e, t) {
	const n = /* @__PURE__ */ new Set([...re(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), r = new Set(null == ie(e) ? [] : oe(e).map((e) => e.night)), s = /* @__PURE__ */ new Map();
	for (const i of n) {
		if (r.has(i)) continue;
		const t = ue(e, i);
		s.set(t, (s.get(t) ?? 0) + 1);
	}
	const o = fe(e, t);
	return {
		reportedNights: n.size,
		markedNights: r.size,
		exclusions: [...s].map(([e, t]) => ({
			reason: e,
			count: t
		})),
		...o ? { note: o } : {}
	};
}
function we(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.nightDate);
		if (null != e && e !== n.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		t.set(n.nightDate, n.night);
	}
}
const ye = (e, t) => h(t).wallClockLabels(Float64Array.from(e));
async function _e(e, t, n, r, s = !1) {
	const o = t.find((e) => e.night === n), i = re(e).find((e) => e.night === n);
	if (!o || !i) return null;
	const [a, l] = await ye([i.onsetMs, i.wakeMs], r), c = [o.onset !== a ? `onset moved ${s ? `${a} → ` : ""}${o.onset}` : null, o.wake !== l ? `wake moved ${s ? `${l} → ` : ""}${o.wake}` : null].filter((e) => null != e);
	return c.length > 0 ? `edited: ${c.join(", ")}` : null;
}
async function ve(e, t, n, r = h(n)) {
	if (we(e.sleepWindows), !e.sources.ms5) return [];
	const s = (/* @__PURE__ */ new Date()).toISOString(), o = e.nightSummaries ?? [], i = new Map(re(e).map((e) => [e.night, e.nightDate])), a = (e) => e.nightDate ?? (null == e.night ? void 0 : i.get(e.night)), l = new Map(await Promise.all([...new Set(o.map(a).filter((e) => null != e))].map(async (e) => [e, await p(e, void 0, r)]))), c = Float64Array.from(o, (e) => e.validHours ?? NaN), u = e.includeDayCriterionHours ?? await r.ggirIncludeDayCriterionHours(null), g = Float64Array.from(o, () => u), d = await r.ggirDaysIncluded(c, g, null);
	return o.flatMap((e, n) => {
		const r = a(e);
		return null == r ? [] : [{
			fileId: t,
			analysisDate: l.get(r),
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
			includeDayCriterionHours: u,
			...null == e.validHours ? {} : { meetsIncludeDayCriterion: 1 === d[n] },
			calibration: null,
			createdAt: s,
			updatedAt: s
		}];
	});
}
async function Se(e, t, n, r = h(n)) {
	const [s, o] = await r.wallClockLabels(Float64Array.of(t.onsetMs, t.wakeMs));
	return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(t.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${s} → ${o}`;
}
async function Ce(e, t, n) {
	return Promise.all(oe(e).map(async (r) => {
		const [s, o] = await n.ggirLabelsToStoredMs(Float64Array.of(r.onsetMs, r.wakeMs), t), i = await Se(e, r, void 0, n);
		return {
			date: r.nightDate,
			onsetTimestamp: s / 1e3,
			offsetTimestamp: o / 1e3,
			notes: i
		};
	}));
}
async function Ae(e, t, n, r, s, o = [], i, a) {
	we(t.sleepWindows);
	const c = ie(t);
	if (null == c) return !0;
	const u = F(null, n), g = h(i);
	let d = !0;
	for (const p of a ?? await Ce(t, o, g)) {
		const t = [{
			markerType: l.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: p.onsetTimestamp,
			offsetTimestamp: p.offsetTimestamp,
			source: "auto",
			settingsHash: u
		}];
		await (await import("./night-session-BmDocqyZ.js").then((e) => e.t)).writeHeadlessNight({
			signal: i,
			fileId: e,
			...s ? { expected: v(null) } : {},
			date: p.date,
			username: _,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p.notes,
			algorithm: c,
			sleepPeriodDetectionConfig: C(void 0, S) ?? null
		}, r, null).catch(() => {
			i?.throwIfAborted(), console.warn("[local-processing] GGIR results marker persistence failed."), d = !1;
		});
	}
	return d;
}
export { O as C, H as D, V as E, z as S, T, Z as _, ie as a, ve as b, se as c, te as d, K as f, Y as g, Ce as h, _e as i, ee as l, re as m, me as n, fe as o, oe as p, we as r, ae as s, de as t, ue as u, Ae as v, j as w, F as x, J as y };
