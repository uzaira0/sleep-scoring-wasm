import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { Ht as t, Jt as n, T as r, Z as s, fn as o, nt as i, q as a, qt as l, rt as c, zt as u } from "./schema-CubsPrjz.js";
import { j as g, m as d, n as p } from "./nonwear-display-slots-Ci-dNMvx.js";
import { d as f } from "./platform-ClAsKoQQ.js";
import { t as m } from "./background-jobs-gFrAYxTf.js";
import { en as h, i as w } from "./store-esIhChio.js";
import { B as y, h as S } from "./night-session-registry-CySK1p-U.js";
import { a as v, k as _, x as A } from "./local-nonwear-unified-2O-d7P9f.js";
import { c as C, l as b, o as k, p as I, s as M } from "./valid-day-criteria-BgtgT6oq.js";
import { t as R } from "./file-sensor-location-D3poeAvf.js";
const G = [
	"scoreGgirHasibVariant",
	"scoreSadeh",
	"scoreColeKripke",
	"scoreEpochs"
];
function x(e) {
	return ArrayBuffer.isView(e) ? `${e.constructor.name}[${String(e.byteLength)}]` : Array.isArray(e) ? e.map(x) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, x(t)])) : e;
}
function H(e, t) {
	if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
		if (e.byteLength !== t.byteLength) return !1;
		const n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
		return n.every((e, t) => e === r[t]);
	}
	if (null !== e && null !== t && "object" == typeof e && "object" == typeof t) {
		const n = Object.entries(e);
		return n.length === Object.keys(t).length && n.every(([e, n]) => H(n, t[e]));
	}
	return Object.is(e, t);
}
function $(e) {
	const t = /* @__PURE__ */ new Map();
	return new Proxy(e, { get(e, n, r) {
		const s = Reflect.get(e, n, r);
		return "function" == typeof s && G.includes(n) ? async (...r) => {
			const o = `${String(n)}|${JSON.stringify(x(r))}`, i = t.get(o) ?? [];
			t.set(o, i);
			let a = i.find((e) => H(e.args, r));
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
const N = [
	"vanHees2015",
	"Sadeh1994",
	"Galland2012",
	"ColeKripke1992",
	"Oakley1997",
	"NotWorn"
];
function E(e) {
	const t = s[e];
	if (void 0 === t) throw new Error(`no generated method-family label for ${e}`);
	return t.algorithmValue;
}
const j = a.angle_hasib?.algorithmValue, z = N.filter((e) => e !== j), O = new Set(z);
function D(e) {
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
function T(e, t, n) {
	if (n.sib.length !== t) throw new Error(`HASIB ${e} returned ${String(n.sib.length)} epochs, expected ${String(t)}.`);
	return n;
}
function L(e, t) {
	const n = s[c];
	return void 0 !== n && e === n.algorithmValue && D(t).family === i;
}
async function P(e) {
	const t = e.variants ?? N, n = t.filter((e) => O.has(e)).length > 0 ? await async function(e) {
		const t = D(e.countSource);
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
		const t = s === j, o = t ? e.anglez5s : n?.series;
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
			result: T(s, o.length, u)
		});
	}
	return r;
}
function V(e) {
	return Object.keys(o).filter((t) => o[t].propagation.includes(e)).sort();
}
function F(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(F).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${F(t)}`).join(",")}}`;
}
function q(e, t, r) {
	return s = function(e, t) {
		const r = {
			...e,
			ggir_config: { sha256: h(e).sha256 }
		}, s = M(t, C(e.analysis_paradigm));
		return I(t) ? s ? (delete r.ggir_config, r.default_algorithm = s.sleepAlgorithm, s.periodGuider && (r.period_guider = s.periodGuider), r.nonwear_detectors_counts = b({
			algorithm: s.sleepAlgorithm,
			periodGuider: s.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, s.paradigm, t).nonwearDetectorsCounts, 0 === Object.keys(k(e.actiware_analysis)).length && delete r.actiware_analysis) : delete r.actiware_analysis : (delete r.analysis_paradigm, delete r.actiware_analysis), p(t?.sourceType, t?.sourceProfileId) !== n.ACTIWARE_OFF_WRIST || (delete r.ggir_config, r.extraction_path = null, "ggir" !== A(r.default_algorithm) && (r.nonwear_detectors_ggir = null)), r;
	}(function(e, t, n = w.getState()) {
		const r = n, s = {};
		for (const i of V("materialized")) {
			const e = o[i].storeKeys.zustand;
			if (void 0 === e || !(e in r)) throw new Error(`materialized setting ${i} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			s[i] = r[e];
		}
		return s.sleep_period_detection = {
			value: s.sleep_period_detection,
			resolvedSensorLocation: R(e, t)
		}, s;
	}(e, t, r), e), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${F(t[e])}`);
		let r = 2166136261;
		for (const s of n.join("")) r ^= s.charCodeAt(0), r = Math.imul(r, 16777619) >>> 0;
		return r.toString(16).padStart(8, "0");
	}(V("materialized"), s);
	var s;
}
var K = e({
	assertUniqueGgirNightDates: () => ge,
	editProvenance: () => pe,
	ggirImportCounts: () => ue,
	ggirMarkerAlgorithm: () => oe,
	ggirNightCoverage: () => ae,
	ggirProposalDescription: () => ie,
	ggirReportedNightDates: () => re,
	ggirResultsBundleRecord: () => X,
	ggirUnmarkedNightReason: () => ce,
	ggirValueSets: () => ee,
	markerWindows: () => se,
	nightWindows: () => ne,
	prepareGgirReviewMarkers: () => he,
	proposalNote: () => me,
	readGgirResultsInput: () => U,
	saveGgirReviewMarkers: () => we,
	stripMasks: () => Y,
	summariesFromReview: () => fe
});
const W = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function U(e, t = []) {
	const [n, r, s, o, i, a] = await Promise.all([
		W(e.part1),
		W(e.ms2),
		W(e.ms3),
		W(e.ms4),
		W(e.ms5),
		W(e.sleeplogRData)
	]);
	return {
		part1: n,
		configCsv: await e.configCsv.text(),
		...e.part2Reports ? { part2Reports: e.part2Reports } : {},
		...r ? { ms2: r } : {},
		...s ? { ms3: s } : {},
		...o ? { ms4: o } : {},
		...i ? { ms5: i } : {},
		...a ? { sleeplogRData: a } : {},
		...e.sleeplogCsv ? { sleeplogCsv: await e.sleeplogCsv.text() } : {},
		recordingId: u(e.recordingFile),
		...e.cleanedNightsCsv ? { cleanedNightsCsv: await e.cleanedNightsCsv.text() } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: await e.dataCleaningCsv.text() } : {},
		edits: t,
		crossCheck: !1
	};
}
function Y(e) {
	const { sib: t, invalid: n, nonwear: r, ...s } = e;
	return s;
}
const J = (e) => e ? e.slice().buffer : void 0;
function Z(e, t) {
	const n = new Set((t.nights.values[t.nights.columns.indexOf(g.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), r = new Set((t.nights.values[t.nights.columns.indexOf(g.ggir_filename.header)] ?? []).map((e) => u(String(e)))), s = Array.from({ length: e.rows }, (e, t) => t).filter((t) => null != e.values[e.columns.indexOf(g.ggir_id.header)]?.[t] && n.has(String(e.values[e.columns.indexOf(g.ggir_id.header)][t])) && (!e.columns.includes(g.ggir_filename.header) || 0 === r.size || r.has(u(String(e.values[e.columns.indexOf(g.ggir_filename.header)]?.[t])))));
	return {
		columns: e.columns,
		rows: s.length,
		values: e.values.map((e) => s.map((t) => e[t]))
	};
}
const Q = (e, t) => Object.fromEntries(Object.entries(e ?? {}).map(([e, n]) => [e, Z(n, t)]));
function X(e, t, n, r, s, o = {}) {
	const i = J(n.ms2), a = J(n.ms3), l = J(n.ms4), c = J(n.ms5), u = J(n.sleeplogRData), g = s ? o.stock : void 0, d = g ? {
		stockMs2: J(g.input.ms2),
		stockMs3: J(g.input.ms3),
		stockMs4: J(g.input.ms4),
		stockMs5: J(g.input.ms5)
	} : {};
	return {
		fileId: e,
		recordingFile: t,
		part1: J(n.part1),
		configCsv: n.configCsv,
		part2Reports: Q(n.part2Reports, r),
		...o.personReports ? { personReports: Q(o.personReports, r) } : {},
		...n.cleanedNightsCsv ? { cleanedNightsCsv: n.cleanedNightsCsv } : {},
		...n.dataCleaningCsv ? { dataCleaningCsv: n.dataCleaningCsv } : {},
		...i ? { ms2: i } : {},
		...a ? { ms3: a } : {},
		...l ? { ms4: l } : {},
		...c ? { ms5: c } : {},
		...u ? { sleeplogRData: u } : {},
		...n.sleeplogCsv ? { sleeplogCsv: n.sleeplogCsv } : {},
		...s ? { ggirCorrections: s } : {},
		...s || void 0 === o.correctionsNotApplied ? {} : { ggirCorrectionsNotApplied: o.correctionsNotApplied },
		...g ? {
			stock: {
				...g.input.cleanedNightsCsv ? { cleanedNightsCsv: g.input.cleanedNightsCsv } : {},
				part2Reports: Q(g.input.part2Reports, g.review),
				...g.personReports ? { personReports: Q(g.personReports, g.review) } : {},
				imported: Y(g.review)
			},
			...Object.fromEntries(Object.entries(d).filter(([, e]) => e))
		} : {},
		imported: Y(r),
		edits: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function ee(e) {
	if (!e.ggirCorrections) return [{
		set: "default",
		bundle: e
	}];
	const { stock: t, stockMs2: n, stockMs3: r, stockMs4: s, stockMs5: o, ggirCorrections: i, ms2: a, ms3: l, ms4: c, ms5: u, cleanedNightsCsv: g, part2Reports: d, personReports: p, current: f, ...m } = e;
	return [...t ? [{
		set: "default",
		bundle: {
			...m,
			...t,
			...n ? { ms2: n } : {},
			...r ? { ms3: r } : {},
			...s ? { ms4: s } : {},
			...o ? { ms5: o } : {}
		}
	}] : [], {
		set: "corrected",
		bundle: e
	}];
}
const te = (e) => {
	const t = /* @__PURE__ */ new Set();
	return e.filter((e) => !t.has(e.night) && (t.add(e.night), !0));
};
function ne(e) {
	return te(e.sleepWindows);
}
function re(e) {
	return [...new Set(ne(e).map((e) => e.nightDate))].sort();
}
function se(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return ne(e).filter((r) => t.has(r.night) && r.onsetMs >= e.startMs && r.wakeMs <= n && r.wakeMs > r.onsetMs);
}
function oe(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case j: return t.VAN_HEES_2015;
		case E("cole_kripke_1992"): return t.COLE_KRIPKE_1992_GGIR;
		case E("sadeh_1994"): return t.SADEH_1994_GGIR;
		case E("galland_2012"): return t.GALLAND_2012;
		case E("oakley_1997"): return t.OAKLEY_1997;
		default: return null;
	}
}
function ie(e) {
	return null == oe(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${ae(e)}`;
}
function ae(e) {
	const t = ne(e).length;
	return `${String(se(e).length)} of ${String(t)} ${1 === t ? "night" : "nights"} GGIR reported got a GGIR marker.`;
}
const le = {
	excluded_by_ggir_cleaning: "excluded by GGIR cleaning",
	window_is_other_nights_average: "window is other nights' average",
	sleep_times_are_guider_fill: "sleep times filled from a guide",
	window_outside_recording: "window falls outside the recording",
	missing_ggir_window: "GGIR did not supply a sleep window"
};
function ce(e, t) {
	const n = (e.bugAwareness ?? []).find((e) => e.night === t && le[e.name]);
	return n ? le[n.name] : null == oe(e) ? "GGIR sleep algorithm has no marker mapping" : "GGIR supplied no usable window";
}
function ue(e) {
	const t = /* @__PURE__ */ new Set([...ne(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), n = new Set(null == oe(e) ? [] : se(e).map((e) => e.night)), r = /* @__PURE__ */ new Map();
	for (const s of t) {
		if (n.has(s)) continue;
		const t = ce(e, s);
		r.set(t, (r.get(t) ?? 0) + 1);
	}
	return {
		reportedNights: t.size,
		markedNights: n.size,
		exclusions: [...r].map(([e, t]) => ({
			reason: e,
			count: t
		}))
	};
}
function ge(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.nightDate);
		if (null != e && e !== n.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		t.set(n.nightDate, n.night);
	}
}
const de = (e, t) => m(t).wallClockLabels(Float64Array.from(e));
async function pe(e, t, n, r, s = !1) {
	const o = t.find((e) => e.night === n), i = ne(e).find((e) => e.night === n);
	if (!o || !i) return null;
	const [a, l] = await de([i.onsetMs, i.wakeMs], r), c = [o.onset !== a ? `onset moved ${s ? `${a} → ` : ""}${o.onset}` : null, o.wake !== l ? `wake moved ${s ? `${l} → ` : ""}${o.wake}` : null].filter((e) => null != e);
	return c.length > 0 ? `edited: ${c.join(", ")}` : null;
}
async function fe(e, t, n, r = m(n)) {
	if (ge(e.sleepWindows), !e.sources.ms5) return [];
	const s = (/* @__PURE__ */ new Date()).toISOString(), o = e.nightSummaries ?? [], i = new Map(ne(e).map((e) => [e.night, e.nightDate])), a = (e) => e.nightDate ?? (null == e.night ? void 0 : i.get(e.night)), l = new Map(await Promise.all([...new Set(o.map(a).filter((e) => null != e))].map(async (e) => [e, await d(e, void 0, r)]))), c = Float64Array.from(o, (e) => e.validHours ?? NaN), u = e.includeDayCriterionHours ?? await r.ggirIncludeDayCriterionHours(null), g = Float64Array.from(o, () => u), p = await r.ggirDaysIncluded(c, g, null);
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
			...null == e.validHours ? {} : { meetsIncludeDayCriterion: 1 === p[n] },
			calibration: null,
			createdAt: s,
			updatedAt: s
		}];
	});
}
async function me(e, t, n, r = m(n)) {
	const [s, o] = await r.wallClockLabels(Float64Array.of(t.onsetMs, t.wakeMs));
	return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(t.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${s} → ${o}`;
}
async function he(e, t, n) {
	return Promise.all(se(e).map(async (r) => {
		const [s, o] = await n.ggirLabelsToStoredMs(Float64Array.of(r.onsetMs, r.wakeMs), t), i = await me(e, r, void 0, n);
		return {
			date: r.nightDate,
			onsetTimestamp: s / 1e3,
			offsetTimestamp: o / 1e3,
			notes: i
		};
	}));
}
async function we(e, t, n, r, s, o = [], i, a) {
	ge(t.sleepWindows);
	const c = oe(t);
	if (null == c) return !0;
	const u = q(null, n), g = m(i);
	let d = !0;
	for (const p of a ?? await he(t, o, g)) {
		const t = [{
			markerType: l.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: p.onsetTimestamp,
			offsetTimestamp: p.offsetTimestamp,
			source: "auto",
			settingsHash: u
		}];
		await (await import("./night-session-DCkz7izl.js").then((e) => e.t)).writeHeadlessNight({
			signal: i,
			fileId: e,
			...s ? { expected: S(null) } : {},
			date: p.date,
			username: y,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p.notes,
			algorithm: c,
			sleepPeriodDetectionConfig: _(void 0, v) ?? null
		}, r, null).catch(() => {
			i?.throwIfAborted(), console.warn("[local-processing] GGIR results marker persistence failed."), d = !1;
		});
	}
	return d;
}
export { $ as C, P as S, q as _, re as a, E as b, ee as c, ne as d, he as f, fe as g, Y as h, ie as i, K as l, we as m, pe as n, X as o, U as p, oe as r, ce as s, ge as t, se as u, j as v, D as x, z as y };
