import { n as e, s as t } from "./ggir-results-types-WB8axvb-.js";
import { Bt as n, E as s, J as r, Q as o, Wt as i, Xt as a, Yt as l, it as c, mn as u, rt as g } from "./schema-DheLOO14.js";
import { j as d, m as p, n as m } from "./nonwear-display-slots-z4V3Hcdi.js";
import { v as f } from "./workspace-db-BkgAmWWL.js";
import { t as h } from "./background-jobs-CUpMApti.js";
import { en as w, i as y } from "./store-Bt3VuaP8.js";
import { B as _, h as v } from "./night-session-registry-BrPkZE6_.js";
import { a as S, k as C, x as A } from "./local-nonwear-unified-Cf66fDIM.js";
import { c as G, l as b, o as I, p as R, s as k } from "./valid-day-criteria-DvY-H45U.js";
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
		const n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), s = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
		return n.every((e, t) => e === s[t]);
	}
	if (null !== e && null !== t && "object" == typeof e && "object" == typeof t) {
		const n = Object.entries(e);
		return n.length === Object.keys(t).length && n.every(([e, n]) => N(n, t[e]));
	}
	return Object.is(e, t);
}
function H(e) {
	const t = /* @__PURE__ */ new Map();
	return new Proxy(e, { get(e, n, s) {
		const r = Reflect.get(e, n, s);
		return "function" == typeof r && x.includes(n) ? async (...s) => {
			const o = `${String(n)}|${JSON.stringify($(s))}`, i = t.get(o) ?? [];
			t.set(o, i);
			let a = i.find((e) => N(e.args, s));
			if (!a) {
				const t = Promise.resolve(Reflect.apply(r, e, s)), n = {
					args: s,
					answer: t
				};
				a = n, i.push(n), t.catch(() => i.splice(i.indexOf(n), 1));
			}
			return structuredClone(await a.answer);
		} : r;
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
const z = r.angle_hasib?.algorithmValue, O = E.filter((e) => e !== z), D = new Set(O);
function T(e) {
	const t = s.count_input_series_keys?.[e];
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
		const n = t.axis, s = e.zeroCrossingCountsByAxis?.[n] ?? ("y" === n && 60 === t.epochSeconds ? e.zeroCrossingY60s : void 0);
		if (!e.backend.zeroCrossingCounts) {
			if (s && s.length > 0) return {
				series: s,
				countSource: e.countSource,
				epochSeconds: t.epochSeconds
			};
			throw new Error("HASIB zero-crossing scoring requires a backend zeroCrossingCounts implementation or precomputed axis counts.");
		}
		if (s && s.length > 0) return {
			series: s,
			countSource: e.countSource,
			epochSeconds: t.epochSeconds
		};
		if (!e.rawTriAxis) throw new Error("HASIB zero-crossing scoring requires raw tri-axial samples or precomputed axis counts.");
		(function(e) {
			if (e.sampleRate <= 0 || !Number.isFinite(e.sampleRate)) throw new Error("HASIB zero-crossing scoring requires a positive raw sample rate.");
			if (e.x.length !== e.y.length || e.x.length !== e.z.length) throw new Error(`HASIB zero-crossing scoring requires aligned raw x/y/z arrays (got x=${String(e.x.length)}, y=${String(e.y.length)}, z=${String(e.z.length)}).`);
			if (0 === e.x.length) throw new Error("HASIB zero-crossing scoring requires at least one raw sample.");
		})(e.rawTriAxis);
		const r = await e.backend.zeroCrossingCounts(e.rawTriAxis.x, e.rawTriAxis.y, e.rawTriAxis.z, e.rawTriAxis.sampleRate, e.countEpochSeconds ?? t.epochSeconds), o = "x" === n ? r.zcx : "y" === n ? r.zcy : r.zcz;
		if (0 === o.length) throw new Error(`HASIB zero-crossing scoring produced an empty ${n.toUpperCase()}-axis count series.`);
		return {
			series: o,
			countSource: e.countSource,
			epochSeconds: t.epochSeconds
		};
	}(e) : null, s = [];
	for (const r of t) {
		const t = r === z, o = t ? e.anglez5s : n?.series;
		if (!o || 0 === o.length) throw new Error(`HASIB ${r} requires a non-empty ${t ? "AngleZ" : "count"} input series.`);
		const i = t ? void 0 : e.countEpochSeconds ?? n?.epochSeconds, a = !t && null !== n && L(r, n.countSource), l = void 0 !== i ? {
			ws3: i,
			...e.configs?.[r]
		} : e.configs?.[r], c = a ? {
			...l,
			neishabouriCount: !0
		} : l, u = await e.backend.scoreGgirHasibVariant(o, r, c);
		s.push({
			variant: r,
			key: B[r],
			countSource: t ? "anglez_5s" : n.countSource,
			result: P(r, o.length, u)
		});
	}
	return s;
}
function W(e) {
	return Object.keys(u).filter((t) => u[t].propagation.includes(e)).sort();
}
function q(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(q).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${q(t)}`).join(",")}}`;
}
function F(e, t, n) {
	return s = function(e, t) {
		const n = {
			...e,
			ggir_config: { sha256: w(e).sha256 }
		}, s = k(t, G(e.analysis_paradigm));
		return R(t) ? s ? (delete n.ggir_config, n.default_algorithm = s.sleepAlgorithm, s.periodGuider && (n.period_guider = s.periodGuider), n.nonwear_detectors_counts = b({
			algorithm: s.sleepAlgorithm,
			periodGuider: s.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, s.paradigm, t).nonwearDetectorsCounts, 0 === Object.keys(I(e.actiware_analysis)).length && delete n.actiware_analysis) : delete n.actiware_analysis : (delete n.analysis_paradigm, delete n.actiware_analysis), m(t?.sourceType, t?.sourceProfileId) !== a.ACTIWARE_OFF_WRIST || (delete n.ggir_config, n.extraction_path = null, "ggir" !== A(n.default_algorithm) && (n.nonwear_detectors_ggir = null)), n;
	}(function(e, t, n = y.getState()) {
		const s = n, r = {};
		for (const o of W("materialized")) {
			const e = u[o].storeKeys.zustand;
			if (void 0 === e || !(e in s)) throw new Error(`materialized setting ${o} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			r[o] = s[e];
		}
		return r.sleep_period_detection = {
			value: r.sleep_period_detection,
			resolvedSensorLocation: M(e, t)
		}, r;
	}(e, t, n), e), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${q(t[e])}`);
		let s = 2166136261;
		for (const r of n.join("")) s ^= r.charCodeAt(0), s = Math.imul(s, 16777619) >>> 0;
		return s.toString(16).padStart(8, "0");
	}(W("materialized"), s);
	var s;
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
	ggirReportedNightDates: () => re,
	ggirResultsBundleRecord: () => ee,
	ggirUnmarkedNightReason: () => ue,
	ggirValueSets: () => te,
	markerWindows: () => oe,
	nightWindows: () => se,
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
	const [s, r, o, i, a, l] = await Promise.all([
		U(e.part1),
		U(e.ms2),
		U(e.ms3),
		U(e.ms4),
		U(e.ms5),
		U(e.sleeplogRData)
	]);
	return {
		part1: s,
		configCsv: await e.configCsv.text(),
		...e.part2Reports ? { part2Reports: e.part2Reports } : {},
		...r ? { ms2: r } : {},
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
	const { sib: t, invalid: n, nonwear: s, ...r } = e;
	return r;
}
const Q = (e) => e ? e.slice().buffer : void 0;
function X(e, t, s) {
	const r = new Set((t.nights.values[t.nights.columns.indexOf(d.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), o = new Set((t.nights.values[t.nights.columns.indexOf(d.ggir_filename.header)] ?? []).map((e) => n(String(e)))), i = (t) => e.values[e.columns.indexOf(d.ggir_id.header)]?.[t], a = (t) => n(String(e.values[e.columns.indexOf(d.ggir_filename.header)]?.[t])), l = Array.from({ length: e.rows }, (e, t) => t).filter(0 === r.size && void 0 !== s ? (t) => e.columns.includes(d.ggir_filename.header) && a(t) === s : (t) => null != i(t) && r.has(String(i(t))) && (!e.columns.includes(d.ggir_filename.header) || 0 === o.size || o.has(a(t))));
	return {
		columns: e.columns,
		rows: l.length,
		values: e.values.map((e) => l.map((t) => e[t]))
	};
}
const Z = (e, t, n) => Object.fromEntries(Object.entries(e ?? {}).map(([e, s]) => [e, X(s, t, n)]));
function ee(e, t, n, s, r = {}) {
	const o = Q(n.ms2), i = Q(n.ms3), a = Q(n.ms4), l = Q(n.ms5), c = Q(n.sleeplogRData);
	return {
		fileId: e,
		recordingFile: t,
		part1: Q(n.part1),
		configCsv: n.configCsv,
		part2Reports: Z(n.part2Reports, s, n.recordingId),
		...r.personReports ? { personReports: Z(r.personReports, s, n.recordingId) } : {},
		...n.cleanedNightsCsv ? { cleanedNightsCsv: n.cleanedNightsCsv } : {},
		...n.dataCleaningCsv ? { dataCleaningCsv: n.dataCleaningCsv } : {},
		...o ? { ms2: o } : {},
		...i ? { ms3: i } : {},
		...a ? { ms4: a } : {},
		...l ? { ms5: l } : {},
		...c ? { sleeplogRData: c } : {},
		...n.sleeplogCsv ? { sleeplogCsv: n.sleeplogCsv } : {},
		...void 0 !== r.qwindowCsv ? { qwindowCsv: r.qwindowCsv } : {},
		...r.resultsCsv ? { resultsCsv: r.resultsCsv } : {},
		imported: J(s),
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
		const { current: s, ms2: r, ms3: o, ms4: i, ms5: a, cleanedNightsCsv: l, part2Reports: c, personReports: u, ...g } = e;
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
	const { stock: s, stockMs2: r, stockMs3: o, stockMs4: i, stockMs5: a, ggirCorrections: l, ms2: c, ms3: u, ms4: g, ms5: d, cleanedNightsCsv: p, part2Reports: m, personReports: f, current: h, ...w } = e, y = s ? [{
		set: "default",
		bundle: {
			...w,
			...s,
			...r ? { ms2: r } : {},
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
function se(e) {
	return ne(e.sleepWindows);
}
function re(e) {
	return [...new Set(se(e).map((e) => e.nightDate))].sort();
}
function oe(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return se(e).filter((s) => t.has(s.night) && s.onsetMs >= e.startMs && s.wakeMs <= n && s.wakeMs > s.onsetMs);
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
	const t = se(e).length;
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
	const s = n?.["part2_summary.csv"], r = 1 === s?.rows ? ge.map((t) => e(s, t, 0)) : [];
	return r.length > 0 && r.every((e) => 0 === e) ? `${pe} (it found no valid days)` : pe;
}
function he(e, t) {
	const n = /* @__PURE__ */ new Set([...se(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), s = new Set(null == ie(e) ? [] : oe(e).map((e) => e.night)), r = /* @__PURE__ */ new Map();
	for (const i of n) {
		if (s.has(i)) continue;
		const t = ue(e, i);
		r.set(t, (r.get(t) ?? 0) + 1);
	}
	const o = fe(e, t);
	return {
		reportedNights: n.size,
		markedNights: s.size,
		exclusions: [...r].map(([e, t]) => ({
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
async function _e(e, t, n, s, r = !1) {
	const o = t.find((e) => e.night === n), i = se(e).find((e) => e.night === n);
	if (!o || !i) return null;
	const [a, l] = await ye([i.onsetMs, i.wakeMs], s), c = [o.onset !== a ? `onset moved ${r ? `${a} → ` : ""}${o.onset}` : null, o.wake !== l ? `wake moved ${r ? `${l} → ` : ""}${o.wake}` : null].filter((e) => null != e);
	return c.length > 0 ? `edited: ${c.join(", ")}` : null;
}
async function ve(e, t, n, s = h(n)) {
	if (we(e.sleepWindows), !e.sources.ms5) return [];
	const r = (/* @__PURE__ */ new Date()).toISOString(), o = e.nightSummaries ?? [], i = new Map(se(e).map((e) => [e.night, e.nightDate])), a = (e) => e.nightDate ?? (null == e.night ? void 0 : i.get(e.night)), l = new Map(await Promise.all([...new Set(o.map(a).filter((e) => null != e))].map(async (e) => [e, await p(e, void 0, s)]))), c = Float64Array.from(o, (e) => e.validHours ?? NaN), u = e.includeDayCriterionHours ?? await s.ggirIncludeDayCriterionHours(null), g = Float64Array.from(o, () => u), d = await s.ggirDaysIncluded(c, g, null);
	return o.flatMap((e, n) => {
		const s = a(e);
		return null == s ? [] : [{
			fileId: t,
			analysisDate: l.get(s),
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
			createdAt: r,
			updatedAt: r
		}];
	});
}
async function Se(e, t, n, s = h(n)) {
	const [r, o] = await s.wallClockLabels(Float64Array.of(t.onsetMs, t.wakeMs));
	return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(t.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${r} → ${o}`;
}
async function Ce(e, t, n) {
	return Promise.all(oe(e).map(async (s) => {
		const [r, o] = await n.ggirLabelsToStoredMs(Float64Array.of(s.onsetMs, s.wakeMs), t), i = await Se(e, s, void 0, n);
		return {
			date: s.nightDate,
			onsetTimestamp: r / 1e3,
			offsetTimestamp: o / 1e3,
			notes: i
		};
	}));
}
async function Ae(e, t, n, s, r, o = [], i, a) {
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
		await (await import("./night-session-CvB0m302.js").then((e) => e.t)).writeHeadlessNight({
			signal: i,
			fileId: e,
			...r ? { expected: v(null) } : {},
			date: p.date,
			username: _,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p.notes,
			algorithm: c,
			sleepPeriodDetectionConfig: C(void 0, S) ?? null
		}, s, null).catch(() => {
			i?.throwIfAborted(), console.warn("[local-processing] GGIR results marker persistence failed."), d = !1;
		});
	}
	return d;
}
export { O as C, H as D, V as E, z as S, T, Z as _, ie as a, ve as b, re as c, te as d, K as f, Y as g, Ce as h, _e as i, ee as l, se as m, me as n, fe as o, oe as p, we as r, ae as s, de as t, ue as u, Ae as v, j as w, F as x, J as y };
