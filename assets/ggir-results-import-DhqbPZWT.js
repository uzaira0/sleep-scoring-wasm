import { $t as e, Cn as t, P as n, Pn as r, Tn as s, Yt as o, an as i, dt as a, ft as l, in as c, nt as u, ot as g } from "./schema-BhIoHe9M.js";
import { v as d } from "./workspace-db-B23VU-DP.js";
import { t as p } from "./background-jobs-BuvVRgh1.js";
import { O as m, f, n as h } from "./nonwear-display-slots-BFsz5AaU.js";
import { an as w, r as y } from "./store-B8Nrfol3.js";
import { W as _, _ as S } from "./night-session-registry-IIptBbXj.js";
import { _ as v, d as C, f as A, p as G, u as b, v as I, y as R } from "./per-source-defaults-aJZ8Uk6V.js";
import { a as k, k as M, x as $ } from "./local-nonwear-unified-M0U_VgvH.js";
import { t as x } from "./file-sensor-location-D3poeAvf.js";
import { n as N } from "./ggir-results-types-CLFzM135.js";
const H = [
	"scoreGgirHasibVariant",
	"scoreCountScorerBatch",
	"scoreSadeh",
	"scoreColeKripke",
	"scoreEpochs"
];
function E(e) {
	return ArrayBuffer.isView(e) ? `${e.constructor.name}[${String(e.byteLength)}]` : Array.isArray(e) ? e.map(E) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, E(t)])) : e;
}
function O(e, t) {
	if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
		if (e.byteLength !== t.byteLength) return !1;
		const n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
		return n.every((e, t) => e === r[t]);
	}
	if (null !== e && null !== t && "object" == typeof e && "object" == typeof t) {
		const n = Object.entries(e);
		return n.length === Object.keys(t).length && n.every(([e, n]) => O(n, t[e]));
	}
	return Object.is(e, t);
}
function z(e) {
	const t = /* @__PURE__ */ new Map();
	return new Proxy(e, { get(e, n, r) {
		const s = Reflect.get(e, n, r);
		return "function" == typeof s && H.includes(n) ? async (...r) => {
			const o = `${String(n)}|${JSON.stringify(E(r))}`, i = t.get(o) ?? [];
			t.set(o, i);
			let a = i.find((e) => O(e.args, r));
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
const j = [
	"vanHees2015",
	"Sadeh1994",
	"Galland2012",
	"ColeKripke1992",
	"Oakley1997",
	"NotWorn"
];
function D(e) {
	const t = g[e];
	if (void 0 === t) throw new Error(`no generated method-family label for ${e}`);
	return t.algorithmValue;
}
const B = u.angle_hasib?.algorithmValue, T = j.filter((e) => e !== B), P = new Set(T);
function L(e) {
	const t = n.count_input_series_keys?.[e];
	if (void 0 === t) throw new Error(`Unsupported HASIB count source: ${e}`);
	return {
		family: String(t.count_family),
		axis: String(t.axis),
		epochSeconds: Number(t.epoch_seconds)
	};
}
const V = {
	vanHees2015: d.GGIR_HASIB_VAN_HEES_2015,
	Sadeh1994: d.GGIR_HASIB_SADEH_1994,
	Galland2012: d.GGIR_HASIB_GALLAND_2012,
	ColeKripke1992: d.GGIR_HASIB_COLE_KRIPKE_1992,
	Oakley1997: d.GGIR_HASIB_OAKLEY_1997,
	NotWorn: d.GGIR_HASIB_NOT_WORN
};
function W(e, t, n) {
	if (n.sib.length !== t) throw new Error(`HASIB ${e} returned ${String(n.sib.length)} epochs, expected ${String(t)}.`);
	return n;
}
async function q(e) {
	const t = e.variants ?? j, n = t.filter((e) => P.has(e)).length > 0 ? await async function(e) {
		const t = L(e.countSource);
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
	}(e) : null, r = t.map((t) => {
		const r = t === B, s = r ? e.anglez5s : n?.series;
		if (!s || 0 === s.length) throw new Error(`HASIB ${t} requires a non-empty ${r ? "AngleZ" : "count"} input series.`);
		const o = r ? void 0 : e.countEpochSeconds ?? n?.epochSeconds, i = !r && null !== n && function(e, t) {
			const n = g[l];
			return void 0 !== n && e === n.algorithmValue && L(t).family === a;
		}(t, n.countSource), c = void 0 !== o ? {
			ws3: o,
			...e.configs?.[t]
		} : e.configs?.[t];
		return {
			variant: t,
			usesAnglez: r,
			series: s,
			config: i ? {
				...c,
				neishabouriCount: !0
			} : c
		};
	}), s = await async function(e, t) {
		if (!e.scoreCountScorerBatch) return Promise.all(t.map(({ variant: t, series: n, config: r }) => e.scoreGgirHasibVariant(n, t, r)));
		const n = await e.scoreCountScorerBatch(t.map(({ variant: e, series: t, config: n }) => ({
			kind: "hasib",
			data: t,
			algo: e,
			...n ? { config: n } : {}
		})));
		if (n.length !== t.length) throw new Error(`HASIB batch returned ${String(n.length)} outcomes for ${String(t.length)} variants.`);
		return n.map((e) => {
			if ("error" in e) throw new Error(e.error);
			return e.result;
		});
	}(e.backend, r);
	return r.map(({ variant: e, usesAnglez: t, series: r }, o) => ({
		variant: e,
		key: V[e],
		countSource: t ? "anglez_5s" : n.countSource,
		result: W(e, r.length, s[o])
	}));
}
function F(e) {
	return Object.keys(t).filter((n) => t[n].propagation.includes(e)).sort();
}
function K(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(K).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${K(t)}`).join(",")}}`;
}
function U(e, n, r) {
	return s = function(e, t) {
		const n = {
			...e,
			ggir_config: { sha256: w(e).sha256 }
		}, r = C(t, A(e.analysis_paradigm));
		var s;
		return v(t) ? r ? (delete n.ggir_config, n.default_algorithm = r.sleepAlgorithm, r.periodGuider && (n.period_guider = r.periodGuider), n.nonwear_detectors_counts = G({
			algorithm: r.sleepAlgorithm,
			periodGuider: r.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, r.paradigm, t).nonwearDetectorsCounts, 0 === Object.keys(b(e.actiware_analysis)).length && delete n.actiware_analysis, s = e.actiware_rest_proposal, JSON.stringify(R(s)) === JSON.stringify(I) && delete n.actiware_rest_proposal) : (delete n.actiware_analysis, delete n.actiware_rest_proposal) : (delete n.analysis_paradigm, delete n.actiware_analysis, delete n.actiware_rest_proposal), h(t?.sourceType, t?.sourceProfileId) !== i.ACTIWARE_OFF_WRIST || (delete n.ggir_config, n.extraction_path = null, "ggir" !== $(n.default_algorithm) && (n.nonwear_detectors_ggir = null)), n;
	}(function(e, n, r = y.getState()) {
		const s = r, o = {};
		for (const i of F("materialized")) {
			const e = t[i].storeKeys.zustand;
			if (void 0 === e || !(e in s)) throw new Error(`materialized setting ${i} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			o[i] = s[e];
		}
		return o.sleep_period_detection = {
			value: o.sleep_period_detection,
			resolvedSensorLocation: x(e, n)
		}, o;
	}(e, n, r), e), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${K(t[e])}`);
		let r = 2166136261;
		for (const s of n.join("")) r ^= s.charCodeAt(0), r = Math.imul(r, 16777619) >>> 0;
		return r.toString(16).padStart(8, "0");
	}(F("materialized"), s);
	var s;
}
new Set(s.filter((e) => {
	const n = t[e].range;
	return "analysis_paradigm_type" === n || n.startsWith("actiware_");
}));
var Y = r({
	GGIR_NO_PART4: () => me,
	GGIR_NO_PART4_NOTE: () => fe,
	GGIR_PART4_NOT_READ: () => he,
	assertUniqueGgirNightDates: () => _e,
	editProvenance: () => ve,
	ggirImportCounts: () => ye,
	ggirMarkerAlgorithm: () => le,
	ggirNightCoverage: () => ue,
	ggirNoPart4Note: () => we,
	ggirProposalDescription: () => ce,
	ggirReportedNightDates: () => ie,
	ggirResultsBundleRecord: () => ne,
	ggirUnmarkedNightReason: () => de,
	ggirValueSets: () => re,
	markerWindows: () => ae,
	nightWindows: () => oe,
	prepareGgirReviewMarkers: () => Ge,
	proposalNote: () => Ae,
	readGgirResultsInput: () => Z,
	recordingReports: () => te,
	saveGgirReviewMarkers: () => be,
	stripMasks: () => Q,
	summariesFromReview: () => Ce
});
const J = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function Z(e, t = []) {
	const [n, r, s, i, a, l] = await Promise.all([
		J(e.part1),
		J(e.ms2),
		J(e.ms3),
		J(e.ms4),
		J(e.ms5),
		J(e.sleeplogRData)
	]);
	return {
		part1: n,
		configCsv: await e.configCsv.text(),
		...r ? { ms2: r } : {},
		...s ? { ms3: s } : {},
		...i ? { ms4: i } : {},
		...a ? { ms5: a } : {},
		...l ? { sleeplogRData: l } : {},
		...e.sleeplogCsv ? { sleeplogCsv: await e.sleeplogCsv.text() } : {},
		recordingId: o(e.recordingFile),
		...e.cleanedNightsCsv ? { cleanedNightsCsv: await e.cleanedNightsCsv.text() } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: await e.dataCleaningCsv.text() } : {},
		edits: t,
		crossCheck: !1
	};
}
function Q(e) {
	const { sib: t, invalid: n, nonwear: r, ...s } = e;
	return s;
}
const X = (e) => e ? e.slice().buffer : void 0;
function ee(e, t, n) {
	const r = new Set((t.nights.values[t.nights.columns.indexOf(m.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), s = new Set((t.nights.values[t.nights.columns.indexOf(m.ggir_filename.header)] ?? []).map((e) => o(String(e)))), i = (t) => e.values[e.columns.indexOf(m.ggir_id.header)]?.[t], a = (t) => o(String(e.values[e.columns.indexOf(m.ggir_filename.header)]?.[t])), l = Array.from({ length: e.rows }, (e, t) => t).filter(0 === r.size && void 0 !== n ? (t) => e.columns.includes(m.ggir_filename.header) && a(t) === n : (t) => null != i(t) && r.has(String(i(t))) && (!e.columns.includes(m.ggir_filename.header) || 0 === s.size || s.has(a(t))));
	return {
		columns: e.columns,
		rows: l.length,
		values: e.values.map((e) => l.map((t) => e[t]))
	};
}
const te = (e, t, n) => Object.fromEntries(Object.entries(e ?? {}).map(([e, r]) => [e, ee(r, t, n)]));
function ne(e, t, n, r, s = {}) {
	const o = X(n.ms2), i = X(n.ms3), a = X(n.ms4), l = X(n.ms5), c = X(n.sleeplogRData);
	return {
		fileId: e,
		recordingFile: t,
		part1: X(n.part1),
		configCsv: n.configCsv,
		part2Reports: te(s.part2Reports, r, n.recordingId),
		...s.personReports ? { personReports: te(s.personReports, r, n.recordingId) } : {},
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
		imported: Q(r),
		edits: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function re(e, t, n = !0) {
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
const se = (e) => {
	const t = /* @__PURE__ */ new Set();
	return e.filter((e) => !t.has(e.night) && (t.add(e.night), !0));
};
function oe(e) {
	return se(e.sleepWindows);
}
function ie(e) {
	return [...new Set(oe(e).map((e) => e.nightDate))].sort();
}
function ae(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return oe(e).filter((r) => t.has(r.night) && r.onsetMs >= e.startMs && r.wakeMs <= n && r.wakeMs > r.onsetMs);
}
function le(t) {
	if (null == t.appliedHasibAlgo) return null;
	switch (t.appliedHasibAlgo) {
		case B: return e.VAN_HEES_2015;
		case D("cole_kripke_1992"): return e.COLE_KRIPKE_1992_GGIR;
		case D("sadeh_1994"): return e.SADEH_1994_GGIR;
		case D("galland_2012"): return e.GALLAND_2012;
		case D("oakley_1997"): return e.OAKLEY_1997;
		default: return null;
	}
}
function ce(e) {
	return null == le(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${ue(e)}`;
}
function ue(e) {
	const t = oe(e).length;
	return `${String(ae(e).length)} of ${String(t)} ${1 === t ? "night" : "nights"} GGIR reported got a GGIR marker.`;
}
const ge = {
	excluded_by_ggir_cleaning: "excluded by GGIR cleaning",
	window_is_other_nights_average: "window is other nights' average",
	sleep_times_are_guider_fill: "sleep times filled from a guide",
	window_outside_recording: "window falls outside the recording",
	missing_ggir_window: "GGIR did not supply a sleep window"
};
function de(e, t) {
	const n = (e.bugAwareness ?? []).find((e) => e.night === t && ge[e.name]);
	return n ? ge[n.name] : null == le(e) ? "GGIR sleep algorithm has no marker mapping" : "GGIR supplied no usable window";
}
const pe = ["N valid WEdays", "N valid WKdays"], me = "GGIR made no Part 4 for this recording", fe = `imported without GGIR sleep windows: ${me}`, he = "GGIR’s Part 4 milestone (meta/ms4.out) could not be read.";
function we(e, t) {
	if (e.sources.ms4) return null;
	if (e.importNotices.includes("GGIR’s Part 4 milestone (meta/ms4.out) could not be read.")) return "imported without GGIR sleep windows: its GGIR Part 4 milestone could not be read";
	const n = t?.["part2_summary.csv"], r = 1 === n?.rows ? pe.map((e) => N(n, e, 0)) : [];
	return r.length > 0 && r.every((e) => 0 === e) ? `${fe} (it found no valid days)` : fe;
}
function ye(e, t) {
	const n = /* @__PURE__ */ new Set([...oe(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), r = new Set(null == le(e) ? [] : ae(e).map((e) => e.night)), s = /* @__PURE__ */ new Map();
	for (const i of n) {
		if (r.has(i)) continue;
		const t = de(e, i);
		s.set(t, (s.get(t) ?? 0) + 1);
	}
	const o = we(e, t);
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
function _e(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.nightDate);
		if (null != e && e !== n.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		t.set(n.nightDate, n.night);
	}
}
const Se = (e, t) => p(t).wallClockLabels(Float64Array.from(e));
async function ve(e, t, n, r, s = !1) {
	const o = t.find((e) => e.night === n), i = oe(e).find((e) => e.night === n);
	if (!o || !i) return null;
	const [a, l] = await Se([i.onsetMs, i.wakeMs], r), c = [o.onset !== a ? `onset moved ${s ? `${a} → ` : ""}${o.onset}` : null, o.wake !== l ? `wake moved ${s ? `${l} → ` : ""}${o.wake}` : null].filter((e) => null != e);
	return c.length > 0 ? `edited: ${c.join(", ")}` : null;
}
async function Ce(e, t, n, r = p(n)) {
	if (_e(e.sleepWindows), !e.sources.ms5) return [];
	const s = (/* @__PURE__ */ new Date()).toISOString(), o = e.nightSummaries ?? [], i = new Map(oe(e).map((e) => [e.night, e.nightDate])), a = (e) => e.nightDate ?? (null == e.night ? void 0 : i.get(e.night)), l = new Map(await Promise.all([...new Set(o.map(a).filter((e) => null != e))].map(async (e) => [e, await f(e, void 0, r)]))), c = Float64Array.from(o, (e) => e.validHours ?? NaN), u = e.includeDayCriterionHours ?? await r.ggirIncludeDayCriterionHours(null), g = Float64Array.from(o, () => u), d = await r.ggirDaysIncluded(c, g, null);
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
async function Ae(e, t, n, r = p(n)) {
	const [s, o] = await r.wallClockLabels(Float64Array.of(t.onsetMs, t.wakeMs));
	return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(t.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${s} → ${o}`;
}
async function Ge(e, t, n) {
	return Promise.all(ae(e).map(async (r) => {
		const [s, o] = await n.ggirLabelsToStoredMs(Float64Array.of(r.onsetMs, r.wakeMs), t), i = await Ae(e, r, void 0, n);
		return {
			date: r.nightDate,
			onsetTimestamp: s / 1e3,
			offsetTimestamp: o / 1e3,
			notes: i
		};
	}));
}
async function be(e, t, n, r, s, o = [], i, a) {
	_e(t.sleepWindows);
	const l = le(t);
	if (null == l) return !0;
	const u = U(null, n), g = p(i);
	let d = !0;
	for (const p of a ?? await Ge(t, o, g)) {
		const t = [{
			markerType: c.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: p.onsetTimestamp,
			offsetTimestamp: p.offsetTimestamp,
			source: "auto",
			settingsHash: u
		}];
		await (await import("./night-session-XbiuoP3g.js").then((e) => e.t)).writeHeadlessNight({
			signal: i,
			fileId: e,
			...s ? { expected: S(null) } : {},
			date: p.date,
			username: _,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p.notes,
			algorithm: l,
			sleepPeriodDetectionConfig: M(void 0, k) ?? null
		}, r, null).catch(() => {
			i?.throwIfAborted(), console.warn("[local-processing] GGIR results marker persistence failed."), d = !1;
		});
	}
	return d;
}
export { T as C, z as D, q as E, B as S, L as T, te as _, le as a, Ce as b, ie as c, re as d, Y as f, Z as g, Ge as h, ve as i, ne as l, oe as m, he as n, we as o, ae as p, _e as r, ce as s, me as t, de as u, be as v, D as w, U as x, Q as y };
