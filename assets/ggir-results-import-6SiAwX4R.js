import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { Bt as n, E as t, J as r, Q as s, Wt as o, Xt as i, Yt as a, it as l, mn as c, rt as u } from "./schema-DyCcUf1Q.js";
import { j as g, m as d, n as p } from "./nonwear-display-slots-c0aOr3GA.js";
import { v as m } from "./workspace-db-n33IRPWq.js";
import { t as f } from "./background-jobs-Da3KO9WM.js";
import { en as h, i as w } from "./store-BK1A5UuX.js";
import { B as y, h as S } from "./night-session-registry-MyK-rWdk.js";
import { a as v, k as _, x as C } from "./local-nonwear-unified-CCqmUl_j.js";
import { c as A, l as b, o as I, p as k, s as G } from "./valid-day-criteria-BdLWNF3Q.js";
import { t as M } from "./file-sensor-location-D3poeAvf.js";
const R = [
	"scoreGgirHasibVariant",
	"scoreSadeh",
	"scoreColeKripke",
	"scoreEpochs"
];
function x(e) {
	return ArrayBuffer.isView(e) ? `${e.constructor.name}[${String(e.byteLength)}]` : Array.isArray(e) ? e.map(x) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, n]) => [e, x(n)])) : e;
}
function $(e, n) {
	if (ArrayBuffer.isView(e) && ArrayBuffer.isView(n)) {
		if (e.byteLength !== n.byteLength) return !1;
		const t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
		return t.every((e, n) => e === r[n]);
	}
	if (null !== e && null !== n && "object" == typeof e && "object" == typeof n) {
		const t = Object.entries(e);
		return t.length === Object.keys(n).length && t.every(([e, t]) => $(t, n[e]));
	}
	return Object.is(e, n);
}
function H(e) {
	const n = /* @__PURE__ */ new Map();
	return new Proxy(e, { get(e, t, r) {
		const s = Reflect.get(e, t, r);
		return "function" == typeof s && R.includes(t) ? async (...r) => {
			const o = `${String(t)}|${JSON.stringify(x(r))}`, i = n.get(o) ?? [];
			n.set(o, i);
			let a = i.find((e) => $(e.args, r));
			if (!a) {
				const n = Promise.resolve(Reflect.apply(s, e, r)), t = {
					args: r,
					answer: n
				};
				a = t, i.push(t), n.catch(() => i.splice(i.indexOf(t), 1));
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
function N(e) {
	const n = s[e];
	if (void 0 === n) throw new Error(`no generated method-family label for ${e}`);
	return n.algorithmValue;
}
const j = r.angle_hasib?.algorithmValue, z = E.filter((e) => e !== j), O = new Set(z);
function D(e) {
	const n = t.count_input_series_keys?.[e];
	if (void 0 === n) throw new Error(`Unsupported HASIB count source: ${e}`);
	return {
		family: String(n.count_family),
		axis: String(n.axis),
		epochSeconds: Number(n.epoch_seconds)
	};
}
const B = {
	vanHees2015: m.GGIR_HASIB_VAN_HEES_2015,
	Sadeh1994: m.GGIR_HASIB_SADEH_1994,
	Galland2012: m.GGIR_HASIB_GALLAND_2012,
	ColeKripke1992: m.GGIR_HASIB_COLE_KRIPKE_1992,
	Oakley1997: m.GGIR_HASIB_OAKLEY_1997,
	NotWorn: m.GGIR_HASIB_NOT_WORN
};
function T(e, n, t) {
	if (t.sib.length !== n) throw new Error(`HASIB ${e} returned ${String(t.sib.length)} epochs, expected ${String(n)}.`);
	return t;
}
function L(e, n) {
	const t = s[l];
	return void 0 !== t && e === t.algorithmValue && D(n).family === u;
}
async function P(e) {
	const n = e.variants ?? E, t = n.filter((e) => O.has(e)).length > 0 ? await async function(e) {
		const n = D(e.countSource);
		if ("neishabouri" === n.family) {
			const t = e.neishabouriCounts?.[n.axis] ?? ("vm" === n.axis && 60 === n.epochSeconds ? e.neishabouriVm60s : void 0);
			if (!t || 0 === t.length) throw new Error(`HASIB Neishabouri scoring requires a non-empty ${String(n.epochSeconds)}s ${n.axis.toUpperCase()} count series.`);
			return {
				series: t,
				countSource: e.countSource,
				epochSeconds: n.epochSeconds
			};
		}
		const t = n.axis, r = e.zeroCrossingCountsByAxis?.[t] ?? ("y" === t && 60 === n.epochSeconds ? e.zeroCrossingY60s : void 0);
		if (!e.backend.zeroCrossingCounts) {
			if (r && r.length > 0) return {
				series: r,
				countSource: e.countSource,
				epochSeconds: n.epochSeconds
			};
			throw new Error("HASIB zero-crossing scoring requires a backend zeroCrossingCounts implementation or precomputed axis counts.");
		}
		if (r && r.length > 0) return {
			series: r,
			countSource: e.countSource,
			epochSeconds: n.epochSeconds
		};
		if (!e.rawTriAxis) throw new Error("HASIB zero-crossing scoring requires raw tri-axial samples or precomputed axis counts.");
		(function(e) {
			if (e.sampleRate <= 0 || !Number.isFinite(e.sampleRate)) throw new Error("HASIB zero-crossing scoring requires a positive raw sample rate.");
			if (e.x.length !== e.y.length || e.x.length !== e.z.length) throw new Error(`HASIB zero-crossing scoring requires aligned raw x/y/z arrays (got x=${String(e.x.length)}, y=${String(e.y.length)}, z=${String(e.z.length)}).`);
			if (0 === e.x.length) throw new Error("HASIB zero-crossing scoring requires at least one raw sample.");
		})(e.rawTriAxis);
		const s = await e.backend.zeroCrossingCounts(e.rawTriAxis.x, e.rawTriAxis.y, e.rawTriAxis.z, e.rawTriAxis.sampleRate, e.countEpochSeconds ?? n.epochSeconds), o = "x" === t ? s.zcx : "y" === t ? s.zcy : s.zcz;
		if (0 === o.length) throw new Error(`HASIB zero-crossing scoring produced an empty ${t.toUpperCase()}-axis count series.`);
		return {
			series: o,
			countSource: e.countSource,
			epochSeconds: n.epochSeconds
		};
	}(e) : null, r = [];
	for (const s of n) {
		const n = s === j, o = n ? e.anglez5s : t?.series;
		if (!o || 0 === o.length) throw new Error(`HASIB ${s} requires a non-empty ${n ? "AngleZ" : "count"} input series.`);
		const i = n ? void 0 : e.countEpochSeconds ?? t?.epochSeconds, a = !n && null !== t && L(s, t.countSource), l = void 0 !== i ? {
			ws3: i,
			...e.configs?.[s]
		} : e.configs?.[s], c = a ? {
			...l,
			neishabouriCount: !0
		} : l, u = await e.backend.scoreGgirHasibVariant(o, s, c);
		r.push({
			variant: s,
			key: B[s],
			countSource: n ? "anglez_5s" : t.countSource,
			result: T(s, o.length, u)
		});
	}
	return r;
}
function V(e) {
	return Object.keys(c).filter((n) => c[n].propagation.includes(e)).sort();
}
function q(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(q).join(",")}]` : `{${Object.entries(e).sort(([e], [n]) => e < n ? -1 : e > n ? 1 : 0).map(([e, n]) => `${e}:${q(n)}`).join(",")}}`;
}
function F(e, n, t) {
	return r = function(e, n) {
		const t = {
			...e,
			ggir_config: { sha256: h(e).sha256 }
		}, r = G(n, A(e.analysis_paradigm));
		return k(n) ? r ? (delete t.ggir_config, t.default_algorithm = r.sleepAlgorithm, r.periodGuider && (t.period_guider = r.periodGuider), t.nonwear_detectors_counts = b({
			algorithm: r.sleepAlgorithm,
			periodGuider: r.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, r.paradigm, n).nonwearDetectorsCounts, 0 === Object.keys(I(e.actiware_analysis)).length && delete t.actiware_analysis) : delete t.actiware_analysis : (delete t.analysis_paradigm, delete t.actiware_analysis), p(n?.sourceType, n?.sourceProfileId) !== i.ACTIWARE_OFF_WRIST || (delete t.ggir_config, t.extraction_path = null, "ggir" !== C(t.default_algorithm) && (t.nonwear_detectors_ggir = null)), t;
	}(function(e, n, t = w.getState()) {
		const r = t, s = {};
		for (const o of V("materialized")) {
			const e = c[o].storeKeys.zustand;
			if (void 0 === e || !(e in r)) throw new Error(`materialized setting ${o} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			s[o] = r[e];
		}
		return s.sleep_period_detection = {
			value: s.sleep_period_detection,
			resolvedSensorLocation: M(e, n)
		}, s;
	}(e, n, t), e), function(e, n) {
		const t = e.filter((e) => e in n).map((e) => `${e}=${q(n[e])}`);
		let r = 2166136261;
		for (const s of t.join("")) r ^= s.charCodeAt(0), r = Math.imul(r, 16777619) >>> 0;
		return r.toString(16).padStart(8, "0");
	}(V("materialized"), r);
	var r;
}
var W = e({
	assertUniqueGgirNightDates: () => ge,
	editProvenance: () => pe,
	ggirImportCounts: () => ue,
	ggirMarkerAlgorithm: () => oe,
	ggirNightCoverage: () => ae,
	ggirProposalDescription: () => ie,
	ggirReportedNightDates: () => re,
	ggirResultsBundleRecord: () => Z,
	ggirUnmarkedNightReason: () => ce,
	ggirValueSets: () => ee,
	markerWindows: () => se,
	nightWindows: () => te,
	prepareGgirReviewMarkers: () => he,
	proposalNote: () => fe,
	readGgirResultsInput: () => U,
	recordingReports: () => X,
	saveGgirReviewMarkers: () => we,
	stripMasks: () => Y,
	summariesFromReview: () => me
});
const K = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function U(e, t = []) {
	const [r, s, o, i, a, l] = await Promise.all([
		K(e.part1),
		K(e.ms2),
		K(e.ms3),
		K(e.ms4),
		K(e.ms5),
		K(e.sleeplogRData)
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
function Y(e) {
	const { sib: n, invalid: t, nonwear: r, ...s } = e;
	return s;
}
const J = (e) => e ? e.slice().buffer : void 0;
function Q(e, t) {
	const r = new Set((t.nights.values[t.nights.columns.indexOf(g.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), s = new Set((t.nights.values[t.nights.columns.indexOf(g.ggir_filename.header)] ?? []).map((e) => n(String(e)))), o = Array.from({ length: e.rows }, (e, n) => n).filter((t) => null != e.values[e.columns.indexOf(g.ggir_id.header)]?.[t] && r.has(String(e.values[e.columns.indexOf(g.ggir_id.header)][t])) && (!e.columns.includes(g.ggir_filename.header) || 0 === s.size || s.has(n(String(e.values[e.columns.indexOf(g.ggir_filename.header)]?.[t])))));
	return {
		columns: e.columns,
		rows: o.length,
		values: e.values.map((e) => o.map((n) => e[n]))
	};
}
const X = (e, n) => Object.fromEntries(Object.entries(e ?? {}).map(([e, t]) => [e, Q(t, n)]));
function Z(e, n, t, r, s = {}) {
	const o = J(t.ms2), i = J(t.ms3), a = J(t.ms4), l = J(t.ms5), c = J(t.sleeplogRData);
	return {
		fileId: e,
		recordingFile: n,
		part1: J(t.part1),
		configCsv: t.configCsv,
		part2Reports: X(t.part2Reports, r),
		...s.personReports ? { personReports: X(s.personReports, r) } : {},
		...t.cleanedNightsCsv ? { cleanedNightsCsv: t.cleanedNightsCsv } : {},
		...t.dataCleaningCsv ? { dataCleaningCsv: t.dataCleaningCsv } : {},
		...o ? { ms2: o } : {},
		...i ? { ms3: i } : {},
		...a ? { ms4: a } : {},
		...l ? { ms5: l } : {},
		...c ? { sleeplogRData: c } : {},
		...t.sleeplogCsv ? { sleeplogCsv: t.sleeplogCsv } : {},
		...void 0 !== s.qwindowCsv ? { qwindowCsv: s.qwindowCsv } : {},
		...s.resultsCsv ? { resultsCsv: s.resultsCsv } : {},
		imported: Y(r),
		edits: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function ee(e, n, t = !0) {
	if (!e.ggirCorrections) {
		if (!t || !n?.values || !n.ggirCorrections) return [{
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
				...n.values,
				ggirCorrections: n.ggirCorrections
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
	return y.length > 0 && !t ? y : [...y, {
		set: "corrected",
		bundle: e
	}];
}
const ne = (e) => {
	const n = /* @__PURE__ */ new Set();
	return e.filter((e) => !n.has(e.night) && (n.add(e.night), !0));
};
function te(e) {
	return ne(e.sleepWindows);
}
function re(e) {
	return [...new Set(te(e).map((e) => e.nightDate))].sort();
}
function se(e) {
	const n = new Set(e.markerNights ?? []), t = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return te(e).filter((r) => n.has(r.night) && r.onsetMs >= e.startMs && r.wakeMs <= t && r.wakeMs > r.onsetMs);
}
function oe(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case j: return o.VAN_HEES_2015;
		case N("cole_kripke_1992"): return o.COLE_KRIPKE_1992_GGIR;
		case N("sadeh_1994"): return o.SADEH_1994_GGIR;
		case N("galland_2012"): return o.GALLAND_2012;
		case N("oakley_1997"): return o.OAKLEY_1997;
		default: return null;
	}
}
function ie(e) {
	return null == oe(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${ae(e)}`;
}
function ae(e) {
	const n = te(e).length;
	return `${String(se(e).length)} of ${String(n)} ${1 === n ? "night" : "nights"} GGIR reported got a GGIR marker.`;
}
const le = {
	excluded_by_ggir_cleaning: "excluded by GGIR cleaning",
	window_is_other_nights_average: "window is other nights' average",
	sleep_times_are_guider_fill: "sleep times filled from a guide",
	window_outside_recording: "window falls outside the recording",
	missing_ggir_window: "GGIR did not supply a sleep window"
};
function ce(e, n) {
	const t = (e.bugAwareness ?? []).find((e) => e.night === n && le[e.name]);
	return t ? le[t.name] : null == oe(e) ? "GGIR sleep algorithm has no marker mapping" : "GGIR supplied no usable window";
}
function ue(e) {
	const n = /* @__PURE__ */ new Set([...te(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), t = new Set(null == oe(e) ? [] : se(e).map((e) => e.night)), r = /* @__PURE__ */ new Map();
	for (const s of n) {
		if (t.has(s)) continue;
		const n = ce(e, s);
		r.set(n, (r.get(n) ?? 0) + 1);
	}
	return {
		reportedNights: n.size,
		markedNights: t.size,
		exclusions: [...r].map(([e, n]) => ({
			reason: e,
			count: n
		}))
	};
}
function ge(e) {
	const n = /* @__PURE__ */ new Map();
	for (const t of e) {
		const e = n.get(t.nightDate);
		if (null != e && e !== t.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		n.set(t.nightDate, t.night);
	}
}
const de = (e, n) => f(n).wallClockLabels(Float64Array.from(e));
async function pe(e, n, t, r, s = !1) {
	const o = n.find((e) => e.night === t), i = te(e).find((e) => e.night === t);
	if (!o || !i) return null;
	const [a, l] = await de([i.onsetMs, i.wakeMs], r), c = [o.onset !== a ? `onset moved ${s ? `${a} → ` : ""}${o.onset}` : null, o.wake !== l ? `wake moved ${s ? `${l} → ` : ""}${o.wake}` : null].filter((e) => null != e);
	return c.length > 0 ? `edited: ${c.join(", ")}` : null;
}
async function me(e, n, t, r = f(t)) {
	if (ge(e.sleepWindows), !e.sources.ms5) return [];
	const s = (/* @__PURE__ */ new Date()).toISOString(), o = e.nightSummaries ?? [], i = new Map(te(e).map((e) => [e.night, e.nightDate])), a = (e) => e.nightDate ?? (null == e.night ? void 0 : i.get(e.night)), l = new Map(await Promise.all([...new Set(o.map(a).filter((e) => null != e))].map(async (e) => [e, await d(e, void 0, r)]))), c = Float64Array.from(o, (e) => e.validHours ?? NaN), u = e.includeDayCriterionHours ?? await r.ggirIncludeDayCriterionHours(null), g = Float64Array.from(o, () => u), p = await r.ggirDaysIncluded(c, g, null);
	return o.flatMap((e, t) => {
		const r = a(e);
		return null == r ? [] : [{
			fileId: n,
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
			...null == e.validHours ? {} : { meetsIncludeDayCriterion: 1 === p[t] },
			calibration: null,
			createdAt: s,
			updatedAt: s
		}];
	});
}
async function fe(e, n, t, r = f(t)) {
	const [s, o] = await r.wallClockLabels(Float64Array.of(n.onsetMs, n.wakeMs));
	return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(n.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${s} → ${o}`;
}
async function he(e, n, t) {
	return Promise.all(se(e).map(async (r) => {
		const [s, o] = await t.ggirLabelsToStoredMs(Float64Array.of(r.onsetMs, r.wakeMs), n), i = await fe(e, r, void 0, t);
		return {
			date: r.nightDate,
			onsetTimestamp: s / 1e3,
			offsetTimestamp: o / 1e3,
			notes: i
		};
	}));
}
async function we(e, n, t, r, s, o = [], i, l) {
	ge(n.sleepWindows);
	const c = oe(n);
	if (null == c) return !0;
	const u = F(null, t), g = f(i);
	let d = !0;
	for (const p of l ?? await he(n, o, g)) {
		const n = [{
			markerType: a.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: p.onsetTimestamp,
			offsetTimestamp: p.offsetTimestamp,
			source: "auto",
			settingsHash: u
		}];
		await (await import("./night-session-CNnEEvLC.js").then((e) => e.t)).writeHeadlessNight({
			signal: i,
			fileId: e,
			...s ? { expected: S(null) } : {},
			date: p.date,
			username: y,
			sleepMarkers: n,
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
export { P as C, D as S, me as _, re as a, z as b, ee as c, te as d, he as f, Y as g, we as h, ie as i, W as l, X as m, pe as n, Z as o, U as p, oe as r, ce as s, ge as t, se as u, F as v, H as w, N as x, j as y };
