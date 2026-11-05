import { n as e, s as t } from "./ggir-results-types-WB8axvb-.js";
import { Bt as n, E as r, J as s, Q as o, Wt as i, Xt as a, Yt as l, gn as c, it as u, mn as g, rt as d } from "./schema-pjCtvTl3.js";
import { A as p, m, n as f } from "./nonwear-display-slots-CkRogAfe.js";
import { _ as h } from "./workspace-db-BGLMk_xQ.js";
import { t as w } from "./background-jobs-Bw-sr73X.js";
import { $t as _, i as y } from "./store-BKMHiWc9.js";
import { H as S, h as v } from "./night-session-registry-BxoMUVbe.js";
import { a as C, k as A, x as G } from "./local-nonwear-unified-BaLzJ0A4.js";
import { _ as I, d as b, f as R, g as k, l as M, u as x, v as $ } from "./valid-day-criteria-DA1LBKOr.js";
import { t as N } from "./file-sensor-location-D3poeAvf.js";
const H = [
	"scoreGgirHasibVariant",
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
	const t = o[e];
	if (void 0 === t) throw new Error(`no generated method-family label for ${e}`);
	return t.algorithmValue;
}
const T = s.angle_hasib?.algorithmValue, B = j.filter((e) => e !== T), P = new Set(B);
function L(e) {
	const t = r.count_input_series_keys?.[e];
	if (void 0 === t) throw new Error(`Unsupported HASIB count source: ${e}`);
	return {
		family: String(t.count_family),
		axis: String(t.axis),
		epochSeconds: Number(t.epoch_seconds)
	};
}
const V = {
	vanHees2015: h.GGIR_HASIB_VAN_HEES_2015,
	Sadeh1994: h.GGIR_HASIB_SADEH_1994,
	Galland2012: h.GGIR_HASIB_GALLAND_2012,
	ColeKripke1992: h.GGIR_HASIB_COLE_KRIPKE_1992,
	Oakley1997: h.GGIR_HASIB_OAKLEY_1997,
	NotWorn: h.GGIR_HASIB_NOT_WORN
};
function W(e, t, n) {
	if (n.sib.length !== t) throw new Error(`HASIB ${e} returned ${String(n.sib.length)} epochs, expected ${String(t)}.`);
	return n;
}
function q(e, t) {
	const n = o[u];
	return void 0 !== n && e === n.algorithmValue && L(t).family === d;
}
async function F(e) {
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
	}(e) : null, r = [];
	for (const s of t) {
		const t = s === T, o = t ? e.anglez5s : n?.series;
		if (!o || 0 === o.length) throw new Error(`HASIB ${s} requires a non-empty ${t ? "AngleZ" : "count"} input series.`);
		const i = t ? void 0 : e.countEpochSeconds ?? n?.epochSeconds, a = !t && null !== n && q(s, n.countSource), l = void 0 !== i ? {
			ws3: i,
			...e.configs?.[s]
		} : e.configs?.[s], c = a ? {
			...l,
			neishabouriCount: !0
		} : l, u = await e.backend.scoreGgirHasibVariant(o, s, c);
		r.push({
			variant: s,
			key: V[s],
			countSource: t ? "anglez_5s" : n.countSource,
			result: W(s, o.length, u)
		});
	}
	return r;
}
function K(e) {
	return Object.keys(g).filter((t) => g[t].propagation.includes(e)).sort();
}
function U(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(U).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${U(t)}`).join(",")}}`;
}
function J(e, t, n) {
	return r = function(e, t) {
		const n = {
			...e,
			ggir_config: { sha256: _(e).sha256 }
		}, r = x(t, b(e.analysis_paradigm));
		var s;
		return k(t) ? r ? (delete n.ggir_config, n.default_algorithm = r.sleepAlgorithm, r.periodGuider && (n.period_guider = r.periodGuider), n.nonwear_detectors_counts = R({
			algorithm: r.sleepAlgorithm,
			periodGuider: r.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, r.paradigm, t).nonwearDetectorsCounts, 0 === Object.keys(M(e.actiware_analysis)).length && delete n.actiware_analysis, s = e.actiware_rest_proposal, JSON.stringify($(s)) === JSON.stringify(I) && delete n.actiware_rest_proposal) : (delete n.actiware_analysis, delete n.actiware_rest_proposal) : (delete n.analysis_paradigm, delete n.actiware_analysis, delete n.actiware_rest_proposal), f(t?.sourceType, t?.sourceProfileId) !== a.ACTIWARE_OFF_WRIST || (delete n.ggir_config, n.extraction_path = null, "ggir" !== G(n.default_algorithm) && (n.nonwear_detectors_ggir = null)), n;
	}(function(e, t, n = y.getState()) {
		const r = n, s = {};
		for (const o of K("materialized")) {
			const e = g[o].storeKeys.zustand;
			if (void 0 === e || !(e in r)) throw new Error(`materialized setting ${o} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			s[o] = r[e];
		}
		return s.sleep_period_detection = {
			value: s.sleep_period_detection,
			resolvedSensorLocation: N(e, t)
		}, s;
	}(e, t, n), e), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${U(t[e])}`);
		let r = 2166136261;
		for (const s of n.join("")) r ^= s.charCodeAt(0), r = Math.imul(r, 16777619) >>> 0;
		return r.toString(16).padStart(8, "0");
	}(K("materialized"), r);
	var r;
}
new Set(c.filter((e) => {
	const t = g[e].range;
	return "analysis_paradigm_type" === t || t.startsWith("actiware_");
}));
var Y = t({
	GGIR_NO_PART4: () => fe,
	GGIR_NO_PART4_NOTE: () => he,
	GGIR_PART4_NOT_READ: () => we,
	assertUniqueGgirNightDates: () => Se,
	editProvenance: () => Ce,
	ggirImportCounts: () => ye,
	ggirMarkerAlgorithm: () => ce,
	ggirNightCoverage: () => ge,
	ggirNoPart4Note: () => _e,
	ggirProposalDescription: () => ue,
	ggirReportedNightDates: () => ae,
	ggirResultsBundleRecord: () => re,
	ggirUnmarkedNightReason: () => pe,
	ggirValueSets: () => se,
	markerWindows: () => le,
	nightWindows: () => ie,
	prepareGgirReviewMarkers: () => Ie,
	proposalNote: () => Ge,
	readGgirResultsInput: () => X,
	recordingReports: () => ne,
	saveGgirReviewMarkers: () => be,
	stripMasks: () => Z,
	summariesFromReview: () => Ae
});
const Q = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function X(e, t = []) {
	const [r, s, o, i, a, l] = await Promise.all([
		Q(e.part1),
		Q(e.ms2),
		Q(e.ms3),
		Q(e.ms4),
		Q(e.ms5),
		Q(e.sleeplogRData)
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
function Z(e) {
	const { sib: t, invalid: n, nonwear: r, ...s } = e;
	return s;
}
const ee = (e) => e ? e.slice().buffer : void 0;
function te(e, t, r) {
	const s = new Set((t.nights.values[t.nights.columns.indexOf(p.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), o = new Set((t.nights.values[t.nights.columns.indexOf(p.ggir_filename.header)] ?? []).map((e) => n(String(e)))), i = (t) => e.values[e.columns.indexOf(p.ggir_id.header)]?.[t], a = (t) => n(String(e.values[e.columns.indexOf(p.ggir_filename.header)]?.[t])), l = Array.from({ length: e.rows }, (e, t) => t).filter(0 === s.size && void 0 !== r ? (t) => e.columns.includes(p.ggir_filename.header) && a(t) === r : (t) => null != i(t) && s.has(String(i(t))) && (!e.columns.includes(p.ggir_filename.header) || 0 === o.size || o.has(a(t))));
	return {
		columns: e.columns,
		rows: l.length,
		values: e.values.map((e) => l.map((t) => e[t]))
	};
}
const ne = (e, t, n) => Object.fromEntries(Object.entries(e ?? {}).map(([e, r]) => [e, te(r, t, n)]));
function re(e, t, n, r, s = {}) {
	const o = ee(n.ms2), i = ee(n.ms3), a = ee(n.ms4), l = ee(n.ms5), c = ee(n.sleeplogRData);
	return {
		fileId: e,
		recordingFile: t,
		part1: ee(n.part1),
		configCsv: n.configCsv,
		part2Reports: ne(n.part2Reports, r, n.recordingId),
		...s.personReports ? { personReports: ne(s.personReports, r, n.recordingId) } : {},
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
		imported: Z(r),
		edits: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function se(e, t, n = !0) {
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
const oe = (e) => {
	const t = /* @__PURE__ */ new Set();
	return e.filter((e) => !t.has(e.night) && (t.add(e.night), !0));
};
function ie(e) {
	return oe(e.sleepWindows);
}
function ae(e) {
	return [...new Set(ie(e).map((e) => e.nightDate))].sort();
}
function le(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return ie(e).filter((r) => t.has(r.night) && r.onsetMs >= e.startMs && r.wakeMs <= n && r.wakeMs > r.onsetMs);
}
function ce(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case T: return i.VAN_HEES_2015;
		case D("cole_kripke_1992"): return i.COLE_KRIPKE_1992_GGIR;
		case D("sadeh_1994"): return i.SADEH_1994_GGIR;
		case D("galland_2012"): return i.GALLAND_2012;
		case D("oakley_1997"): return i.OAKLEY_1997;
		default: return null;
	}
}
function ue(e) {
	return null == ce(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${ge(e)}`;
}
function ge(e) {
	const t = ie(e).length;
	return `${String(le(e).length)} of ${String(t)} ${1 === t ? "night" : "nights"} GGIR reported got a GGIR marker.`;
}
const de = {
	excluded_by_ggir_cleaning: "excluded by GGIR cleaning",
	window_is_other_nights_average: "window is other nights' average",
	sleep_times_are_guider_fill: "sleep times filled from a guide",
	window_outside_recording: "window falls outside the recording",
	missing_ggir_window: "GGIR did not supply a sleep window"
};
function pe(e, t) {
	const n = (e.bugAwareness ?? []).find((e) => e.night === t && de[e.name]);
	return n ? de[n.name] : null == ce(e) ? "GGIR sleep algorithm has no marker mapping" : "GGIR supplied no usable window";
}
const me = ["N valid WEdays", "N valid WKdays"], fe = "GGIR made no Part 4 for this recording", he = `imported without GGIR sleep windows: ${fe}`, we = "GGIR’s Part 4 milestone (meta/ms4.out) could not be read.";
function _e(t, n) {
	if (t.sources.ms4) return null;
	if (t.importNotices.includes("GGIR’s Part 4 milestone (meta/ms4.out) could not be read.")) return "imported without GGIR sleep windows: its GGIR Part 4 milestone could not be read";
	const r = n?.["part2_summary.csv"], s = 1 === r?.rows ? me.map((t) => e(r, t, 0)) : [];
	return s.length > 0 && s.every((e) => 0 === e) ? `${he} (it found no valid days)` : he;
}
function ye(e, t) {
	const n = /* @__PURE__ */ new Set([...ie(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), r = new Set(null == ce(e) ? [] : le(e).map((e) => e.night)), s = /* @__PURE__ */ new Map();
	for (const i of n) {
		if (r.has(i)) continue;
		const t = pe(e, i);
		s.set(t, (s.get(t) ?? 0) + 1);
	}
	const o = _e(e, t);
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
function Se(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.nightDate);
		if (null != e && e !== n.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		t.set(n.nightDate, n.night);
	}
}
const ve = (e, t) => w(t).wallClockLabels(Float64Array.from(e));
async function Ce(e, t, n, r, s = !1) {
	const o = t.find((e) => e.night === n), i = ie(e).find((e) => e.night === n);
	if (!o || !i) return null;
	const [a, l] = await ve([i.onsetMs, i.wakeMs], r), c = [o.onset !== a ? `onset moved ${s ? `${a} → ` : ""}${o.onset}` : null, o.wake !== l ? `wake moved ${s ? `${l} → ` : ""}${o.wake}` : null].filter((e) => null != e);
	return c.length > 0 ? `edited: ${c.join(", ")}` : null;
}
async function Ae(e, t, n, r = w(n)) {
	if (Se(e.sleepWindows), !e.sources.ms5) return [];
	const s = (/* @__PURE__ */ new Date()).toISOString(), o = e.nightSummaries ?? [], i = new Map(ie(e).map((e) => [e.night, e.nightDate])), a = (e) => e.nightDate ?? (null == e.night ? void 0 : i.get(e.night)), l = new Map(await Promise.all([...new Set(o.map(a).filter((e) => null != e))].map(async (e) => [e, await m(e, void 0, r)]))), c = Float64Array.from(o, (e) => e.validHours ?? NaN), u = e.includeDayCriterionHours ?? await r.ggirIncludeDayCriterionHours(null), g = Float64Array.from(o, () => u), d = await r.ggirDaysIncluded(c, g, null);
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
async function Ge(e, t, n, r = w(n)) {
	const [s, o] = await r.wallClockLabels(Float64Array.of(t.onsetMs, t.wakeMs));
	return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(t.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${s} → ${o}`;
}
async function Ie(e, t, n) {
	return Promise.all(le(e).map(async (r) => {
		const [s, o] = await n.ggirLabelsToStoredMs(Float64Array.of(r.onsetMs, r.wakeMs), t), i = await Ge(e, r, void 0, n);
		return {
			date: r.nightDate,
			onsetTimestamp: s / 1e3,
			offsetTimestamp: o / 1e3,
			notes: i
		};
	}));
}
async function be(e, t, n, r, s, o = [], i, a) {
	Se(t.sleepWindows);
	const c = ce(t);
	if (null == c) return !0;
	const u = J(null, n), g = w(i);
	let d = !0;
	for (const p of a ?? await Ie(t, o, g)) {
		const t = [{
			markerType: l.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: p.onsetTimestamp,
			offsetTimestamp: p.offsetTimestamp,
			source: "auto",
			settingsHash: u
		}];
		await (await import("./night-session-CHZE6JC8.js").then((e) => e.t)).writeHeadlessNight({
			signal: i,
			fileId: e,
			...s ? { expected: v(null) } : {},
			date: p.date,
			username: S,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p.notes,
			algorithm: c,
			sleepPeriodDetectionConfig: A(void 0, C) ?? null
		}, r, null).catch(() => {
			i?.throwIfAborted(), console.warn("[local-processing] GGIR results marker persistence failed."), d = !1;
		});
	}
	return d;
}
export { D as C, z as E, V as S, F as T, Z as _, ue as a, T as b, pe as c, le as d, ie as f, be as g, ne as h, ce as i, se as l, X as m, Se as n, ae as o, Ie as p, Ce as r, re as s, we as t, Y as u, Ae as v, L as w, B as x, J as y };
