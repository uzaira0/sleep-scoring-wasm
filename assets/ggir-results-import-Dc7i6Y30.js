import { Ct as e, Nn as t, Z as n, _n as r, dn as s, gn as o, nt as i, q as a, rt as l, sn as c, xt as u, zt as g } from "./schema-CW31RTk8.js";
import { g as d } from "./workspace-db-C2H_4Sk8.js";
import { t as p } from "./background-jobs-DG1vunp7.js";
import { D as m, f, n as h } from "./nonwear-display-slots-Bv4xwq4k.js";
import { r as w, rn as _ } from "./store-Bx-glhNc.js";
import { U as y, g as S } from "./night-session-registry-DBzmcC1j.js";
import { _ as v, d as C, f as A, g as G, l as b, u as I, v as R } from "./per-source-defaults-DJ-KZgL-.js";
import { a as k, k as M, x } from "./local-nonwear-unified-rskJ48ju.js";
import { t as $ } from "./file-sensor-location-D3poeAvf.js";
import { n as N } from "./ggir-results-types-D1neUpH4.js";
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
function z(e, t) {
	if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
		if (e.byteLength !== t.byteLength) return !1;
		const n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
		return n.every((e, t) => e === r[t]);
	}
	if (null !== e && null !== t && "object" == typeof e && "object" == typeof t) {
		const n = Object.entries(e);
		return n.length === Object.keys(t).length && n.every(([e, n]) => z(n, t[e]));
	}
	return Object.is(e, t);
}
function O(e) {
	const t = /* @__PURE__ */ new Map();
	return new Proxy(e, { get(e, n, r) {
		const s = Reflect.get(e, n, r);
		return "function" == typeof s && H.includes(n) ? async (...r) => {
			const o = `${String(n)}|${JSON.stringify(E(r))}`, i = t.get(o) ?? [];
			t.set(o, i);
			let a = i.find((e) => z(e.args, r));
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
	const t = s[e];
	if (void 0 === t) throw new Error(`no generated method-family label for ${e}`);
	return t.algorithmValue;
}
const B = c.angle_hasib?.algorithmValue, T = j.filter((e) => e !== B), P = new Set(T);
function L(e) {
	const t = g.count_input_series_keys?.[e];
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
function q(e, t, n) {
	if (n.sib.length !== t) throw new Error(`HASIB ${e} returned ${String(n.sib.length)} epochs, expected ${String(t)}.`);
	return n;
}
async function W(e) {
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
	}(e) : null, i = t.map((t) => {
		const i = t === B, a = i ? e.anglez5s : n?.series;
		if (!a || 0 === a.length) throw new Error(`HASIB ${t} requires a non-empty ${i ? "AngleZ" : "count"} input series.`);
		const l = i ? void 0 : e.countEpochSeconds ?? n?.epochSeconds, c = !i && null !== n && function(e, t) {
			const n = s[r];
			return void 0 !== n && e === n.algorithmValue && L(t).family === o;
		}(t, n.countSource), u = void 0 !== l ? {
			ws3: l,
			...e.configs?.[t]
		} : e.configs?.[t];
		return {
			variant: t,
			usesAnglez: i,
			series: a,
			config: c ? {
				...u,
				neishabouriCount: !0
			} : u
		};
	}), a = await async function(e, t) {
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
	}(e.backend, i);
	return i.map(({ variant: e, usesAnglez: t, series: r }, s) => ({
		variant: e,
		key: V[e],
		countSource: t ? "anglez_5s" : n.countSource,
		result: q(e, r.length, a[s])
	}));
}
function F(e) {
	return Object.keys(u).filter((t) => u[t].propagation.includes(e)).sort();
}
function K(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(K).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${K(t)}`).join(",")}}`;
}
function U(e, t, n) {
	return r = function(e, t) {
		const n = {
			...e,
			ggir_config: { sha256: _(e).sha256 }
		}, r = I(t, C(e.analysis_paradigm));
		var s;
		return G(t) ? r ? (delete n.ggir_config, n.default_algorithm = r.sleepAlgorithm, r.periodGuider && (n.period_guider = r.periodGuider), n.nonwear_detectors_counts = A({
			algorithm: r.sleepAlgorithm,
			periodGuider: r.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, r.paradigm, t).nonwearDetectorsCounts, 0 === Object.keys(b(e.actiware_analysis)).length && delete n.actiware_analysis, s = e.actiware_rest_proposal, JSON.stringify(R(s)) === JSON.stringify(v) && delete n.actiware_rest_proposal) : (delete n.actiware_analysis, delete n.actiware_rest_proposal) : (delete n.analysis_paradigm, delete n.actiware_analysis, delete n.actiware_rest_proposal), h(t?.sourceType, t?.sourceProfileId) !== l.ACTIWARE_OFF_WRIST || (delete n.ggir_config, n.extraction_path = null, "ggir" !== x(n.default_algorithm) && (n.nonwear_detectors_ggir = null)), n;
	}(function(e, t, n = w.getState()) {
		const r = n, s = {};
		for (const o of F("materialized")) {
			const e = u[o].storeKeys.zustand;
			if (void 0 === e || !(e in r)) throw new Error(`materialized setting ${o} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			s[o] = r[e];
		}
		return s.sleep_period_detection = {
			value: s.sleep_period_detection,
			resolvedSensorLocation: $(e, t)
		}, s;
	}(e, t, n), e), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${K(t[e])}`);
		let r = 2166136261;
		for (const s of n.join("")) r ^= s.charCodeAt(0), r = Math.imul(r, 16777619) >>> 0;
		return r.toString(16).padStart(8, "0");
	}(F("materialized"), r);
	var r;
}
new Set(e.filter((e) => {
	const t = u[e].range;
	return "analysis_paradigm_type" === t || t.startsWith("actiware_");
}));
var J = t({
	GGIR_NO_PART4: () => me,
	GGIR_NO_PART4_NOTE: () => fe,
	GGIR_PART4_NOT_READ: () => he,
	assertUniqueGgirNightDates: () => ye,
	editProvenance: () => ve,
	ggirImportCounts: () => _e,
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
const Y = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function Z(e, t = []) {
	const [n, r, s, o, i, l] = await Promise.all([
		Y(e.part1),
		Y(e.ms2),
		Y(e.ms3),
		Y(e.ms4),
		Y(e.ms5),
		Y(e.sleeplogRData)
	]);
	return {
		part1: n,
		configCsv: await e.configCsv.text(),
		...r ? { ms2: r } : {},
		...s ? { ms3: s } : {},
		...o ? { ms4: o } : {},
		...i ? { ms5: i } : {},
		...l ? { sleeplogRData: l } : {},
		...e.sleeplogCsv ? { sleeplogCsv: await e.sleeplogCsv.text() } : {},
		recordingId: a(e.recordingFile),
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
	const r = new Set((t.nights.values[t.nights.columns.indexOf(m.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), s = new Set((t.nights.values[t.nights.columns.indexOf(m.ggir_filename.header)] ?? []).map((e) => a(String(e)))), o = (t) => e.values[e.columns.indexOf(m.ggir_id.header)]?.[t], i = (t) => a(String(e.values[e.columns.indexOf(m.ggir_filename.header)]?.[t])), l = Array.from({ length: e.rows }, (e, t) => t).filter(0 === r.size && void 0 !== n ? (t) => e.columns.includes(m.ggir_filename.header) && i(t) === n : (t) => null != o(t) && r.has(String(o(t))) && (!e.columns.includes(m.ggir_filename.header) || 0 === s.size || s.has(i(t))));
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
	const { stock: r, stockMs2: s, stockMs3: o, stockMs4: i, stockMs5: a, ggirCorrections: l, ms2: c, ms3: u, ms4: g, ms5: d, cleanedNightsCsv: p, part2Reports: m, personReports: f, current: h, ...w } = e, _ = r ? [{
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
	return _.length > 0 && !n ? _ : [..._, {
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
function le(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case B: return n.VAN_HEES_2015;
		case D("cole_kripke_1992"): return n.COLE_KRIPKE_1992_GGIR;
		case D("sadeh_1994"): return n.SADEH_1994_GGIR;
		case D("galland_2012"): return n.GALLAND_2012;
		case D("oakley_1997"): return n.OAKLEY_1997;
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
function _e(e, t) {
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
function ye(e) {
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
	if (ye(e.sleepWindows), !e.sources.ms5) return [];
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
async function be(e, t, n, r, s, o = [], a, l) {
	ye(t.sleepWindows);
	const c = le(t);
	if (null == c) return !0;
	const u = U(null, n), g = p(a);
	let d = !0;
	for (const p of l ?? await Ge(t, o, g)) {
		const t = [{
			markerType: i.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: p.onsetTimestamp,
			offsetTimestamp: p.offsetTimestamp,
			source: "auto",
			settingsHash: u
		}];
		await (await import("./night-session-Y_HKSfx7.js").then((e) => e.t)).writeHeadlessNight({
			signal: a,
			fileId: e,
			...s ? { expected: S(null) } : {},
			date: p.date,
			username: y,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p.notes,
			algorithm: c,
			sleepPeriodDetectionConfig: M(void 0, k) ?? null
		}, r, null).catch(() => {
			a?.throwIfAborted(), console.warn("[local-processing] GGIR results marker persistence failed."), d = !1;
		});
	}
	return d;
}
export { L as C, D as S, O as T, Q as _, ce as a, B as b, de as c, ae as d, oe as f, be as g, te as h, le as i, re as l, Z as m, ye as n, ie as o, Ge as p, ve as r, ne as s, he as t, J as u, Ce as v, W as w, T as x, U as y };
