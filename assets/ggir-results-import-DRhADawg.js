import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { $ as n, J as t, Rt as r, S as s, Ut as i, W as o, Wt as a, cn as l, et as c } from "./schema-B-QId9a7.js";
import { j as u, m as g, n as d } from "./nonwear-display-slots-IZ449hOd.js";
import { _ as p, f } from "./workspace-db-CgXdciVp.js";
import { t as m } from "./background-jobs-Jdd-Cnpd.js";
import { B as h, h as w } from "./night-session-registry-C3aes2-o.js";
import { en as y, i as S } from "./store-AoVV0llU.js";
import { a as _, k as v, x as A } from "./local-nonwear-unified-Cis30YCx.js";
import { c as C, l as b, o as I, p as G, s as M } from "./valid-day-criteria-jnGVLePm.js";
import { t as k } from "./file-sensor-location-D3poeAvf.js";
const x = [
	"scoreGgirHasibVariant",
	"scoreSadeh",
	"scoreColeKripke",
	"scoreEpochs"
];
function R(e) {
	return ArrayBuffer.isView(e) ? `${e.constructor.name}[${String(e.byteLength)}]` : Array.isArray(e) ? e.map(R) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, n]) => [e, R(n)])) : e;
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
		return "function" == typeof s && x.includes(t) ? async (...r) => {
			const i = `${String(t)}|${JSON.stringify(R(r))}`, o = n.get(i) ?? [];
			n.set(i, o);
			let a = o.find((e) => $(e.args, r));
			if (!a) {
				const n = Promise.resolve(Reflect.apply(s, e, r)), t = {
					args: r,
					answer: n
				};
				a = t, o.push(t), n.catch(() => o.splice(o.indexOf(t), 1));
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
	const n = t[e];
	if (void 0 === n) throw new Error(`no generated method-family label for ${e}`);
	return n.algorithmValue;
}
const z = o.angle_hasib?.algorithmValue, N = E.filter((e) => e !== z), O = new Set(N);
function D(e) {
	const n = s.count_input_series_keys?.[e];
	if (void 0 === n) throw new Error(`Unsupported HASIB count source: ${e}`);
	return {
		family: String(n.count_family),
		axis: String(n.axis),
		epochSeconds: Number(n.epoch_seconds)
	};
}
const B = {
	vanHees2015: p.GGIR_HASIB_VAN_HEES_2015,
	Sadeh1994: p.GGIR_HASIB_SADEH_1994,
	Galland2012: p.GGIR_HASIB_GALLAND_2012,
	ColeKripke1992: p.GGIR_HASIB_COLE_KRIPKE_1992,
	Oakley1997: p.GGIR_HASIB_OAKLEY_1997,
	NotWorn: p.GGIR_HASIB_NOT_WORN
};
function T(e, n, t) {
	if (t.sib.length !== n) throw new Error(`HASIB ${e} returned ${String(t.sib.length)} epochs, expected ${String(n)}.`);
	return t;
}
function L(e, r) {
	const s = t[c];
	return void 0 !== s && e === s.algorithmValue && D(r).family === n;
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
		const s = await e.backend.zeroCrossingCounts(e.rawTriAxis.x, e.rawTriAxis.y, e.rawTriAxis.z, e.rawTriAxis.sampleRate, e.countEpochSeconds ?? n.epochSeconds), i = "x" === t ? s.zcx : "y" === t ? s.zcy : s.zcz;
		if (0 === i.length) throw new Error(`HASIB zero-crossing scoring produced an empty ${t.toUpperCase()}-axis count series.`);
		return {
			series: i,
			countSource: e.countSource,
			epochSeconds: n.epochSeconds
		};
	}(e) : null, r = [];
	for (const s of n) {
		const n = s === z, i = n ? e.anglez5s : t?.series;
		if (!i || 0 === i.length) throw new Error(`HASIB ${s} requires a non-empty ${n ? "AngleZ" : "count"} input series.`);
		const o = n ? void 0 : e.countEpochSeconds ?? t?.epochSeconds, a = !n && null !== t && L(s, t.countSource), l = void 0 !== o ? {
			ws3: o,
			...e.configs?.[s]
		} : e.configs?.[s], c = a ? {
			...l,
			neishabouriCount: !0
		} : l, u = await e.backend.scoreGgirHasibVariant(i, s, c);
		r.push({
			variant: s,
			key: B[s],
			countSource: n ? "anglez_5s" : t.countSource,
			result: T(s, i.length, u)
		});
	}
	return r;
}
function V(e) {
	return Object.keys(l).filter((n) => l[n].propagation.includes(e)).sort();
}
function W(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(W).join(",")}]` : `{${Object.entries(e).sort(([e], [n]) => e < n ? -1 : e > n ? 1 : 0).map(([e, n]) => `${e}:${W(n)}`).join(",")}}`;
}
function F(e, n, t) {
	return r = function(e, n) {
		const t = {
			...e,
			ggir_config: { sha256: y(e).sha256 }
		}, r = M(n, C(e.analysis_paradigm));
		return G(n) ? r ? (delete t.ggir_config, t.default_algorithm = r.sleepAlgorithm, r.periodGuider && (t.period_guider = r.periodGuider), t.nonwear_detectors_counts = b({
			algorithm: r.sleepAlgorithm,
			periodGuider: r.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, r.paradigm, n).nonwearDetectorsCounts, 0 === Object.keys(I(e.actiware_analysis)).length && delete t.actiware_analysis) : delete t.actiware_analysis : (delete t.analysis_paradigm, delete t.actiware_analysis), d(n?.sourceType, n?.sourceProfileId) !== a.ACTIWARE_OFF_WRIST || (delete t.ggir_config, t.extraction_path = null, "ggir" !== A(t.default_algorithm) && (t.nonwear_detectors_ggir = null)), t;
	}(function(e, n, t = S.getState()) {
		const r = t, s = {};
		for (const i of V("materialized")) {
			const e = l[i].storeKeys.zustand;
			if (void 0 === e || !(e in r)) throw new Error(`materialized setting ${i} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			s[i] = r[e];
		}
		return s.sleep_period_detection = {
			value: s.sleep_period_detection,
			resolvedSensorLocation: k(e, n)
		}, s;
	}(e, n, t), e), function(e, n) {
		const t = e.filter((e) => e in n).map((e) => `${e}=${W(n[e])}`);
		let r = 2166136261;
		for (const s of t.join("")) r ^= s.charCodeAt(0), r = Math.imul(r, 16777619) >>> 0;
		return r.toString(16).padStart(8, "0");
	}(V("materialized"), r);
	var r;
}
var K = e({
	assertUniqueGgirNightDates: () => ie,
	editProvenance: () => ae,
	ggirImportCounts: () => se,
	ggirMarkerAlgorithm: () => ne,
	ggirNightCoverage: () => re,
	ggirProposalDescription: () => te,
	ggirResultsBundleRecord: () => Z,
	markerWindows: () => ee,
	nightWindows: () => X,
	prepareGgirReviewMarkers: () => ue,
	proposalNote: () => ce,
	readGgirResultsInput: () => U,
	saveGgirReviewMarkers: () => ge,
	stripMasks: () => Y,
	summariesFromReview: () => le
});
const q = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function U(e, n = []) {
	const [t, r, s, i, o, a] = await Promise.all([
		q(e.part1),
		q(e.ms2),
		q(e.ms3),
		q(e.ms4),
		q(e.ms5),
		q(e.sleeplogRData)
	]);
	return {
		part1: t,
		configCsv: await e.configCsv.text(),
		...e.part2Reports ? { part2Reports: e.part2Reports } : {},
		...r ? { ms2: r } : {},
		...s ? { ms3: s } : {},
		...i ? { ms4: i } : {},
		...o ? { ms5: o } : {},
		...a ? { sleeplogRData: a } : {},
		...e.sleeplogCsv ? { sleeplogCsv: await e.sleeplogCsv.text() } : {},
		recordingId: f(e.recordingFile),
		...e.cleanedNightsCsv ? { cleanedNightsCsv: await e.cleanedNightsCsv.text() } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: await e.dataCleaningCsv.text() } : {},
		edits: n,
		crossCheck: !1
	};
}
function Y(e) {
	const { sib: n, invalid: t, nonwear: r, ...s } = e;
	return s;
}
const J = (e) => e ? e.slice().buffer : void 0;
function Z(e, n, t, r, s) {
	const i = J(t.ms2), o = J(t.ms3), a = J(t.ms4), l = J(t.ms5), c = J(t.sleeplogRData);
	return {
		fileId: e,
		recordingFile: n,
		part1: J(t.part1),
		configCsv: t.configCsv,
		part2Reports: Object.fromEntries(Object.entries(t.part2Reports ?? {}).map(([e, n]) => {
			const t = new Set((r.nights.values[r.nights.columns.indexOf(u.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), s = new Set((r.nights.values[r.nights.columns.indexOf(u.ggir_filename.header)] ?? []).map((e) => f(String(e)))), i = Array.from({ length: n.rows }, (e, n) => n).filter((e) => null != n.values[n.columns.indexOf(u.ggir_id.header)]?.[e] && t.has(String(n.values[n.columns.indexOf(u.ggir_id.header)][e])) && (!n.columns.includes(u.ggir_filename.header) || 0 === s.size || s.has(f(String(n.values[n.columns.indexOf(u.ggir_filename.header)]?.[e])))));
			return [e, {
				columns: n.columns,
				rows: i.length,
				values: n.values.map((e) => i.map((n) => e[n]))
			}];
		})),
		...t.cleanedNightsCsv ? { cleanedNightsCsv: t.cleanedNightsCsv } : {},
		...t.dataCleaningCsv ? { dataCleaningCsv: t.dataCleaningCsv } : {},
		...i ? { ms2: i } : {},
		...o ? { ms3: o } : {},
		...a ? { ms4: a } : {},
		...l ? { ms5: l } : {},
		...c ? { sleeplogRData: c } : {},
		...t.sleeplogCsv ? { sleeplogCsv: t.sleeplogCsv } : {},
		...s ? { ggirCorrections: s } : {},
		imported: Y(r),
		edits: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
const Q = (e) => {
	const n = /* @__PURE__ */ new Set();
	return e.filter((e) => !n.has(e.night) && (n.add(e.night), !0));
};
function X(e) {
	return Q(e.sleepWindows);
}
function ee(e) {
	const n = new Set(e.markerNights ?? []), t = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return X(e).filter((r) => n.has(r.night) && r.onsetMs >= e.startMs && r.wakeMs <= t && r.wakeMs > r.onsetMs);
}
function ne(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case z: return r.VAN_HEES_2015;
		case j("cole_kripke_1992"): return r.COLE_KRIPKE_1992_GGIR;
		case j("sadeh_1994"): return r.SADEH_1994_GGIR;
		case j("galland_2012"): return r.GALLAND_2012;
		case j("oakley_1997"): return r.OAKLEY_1997;
		default: return null;
	}
}
function te(e) {
	return null == ne(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${re(e)}`;
}
function re(e) {
	const n = X(e).length;
	return `${String(ee(e).length)} of ${String(n)} ${1 === n ? "night" : "nights"} GGIR reported got a GGIR marker.`;
}
function se(e) {
	const n = /* @__PURE__ */ new Set([...X(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), t = new Set(null == ne(e) ? [] : ee(e).map((e) => e.night)), r = {
		excluded_by_ggir_cleaning: "excluded by GGIR cleaning",
		window_is_other_nights_average: "window is other nights' average",
		sleep_times_are_guider_fill: "sleep times filled from a guide",
		window_outside_recording: "window falls outside the recording",
		missing_ggir_window: "GGIR did not supply a sleep window"
	}, s = /* @__PURE__ */ new Map();
	for (const i of n) {
		if (t.has(i)) continue;
		const n = (e.bugAwareness ?? []).find((e) => e.night === i && r[e.name]), o = n ? r[n.name] : null == ne(e) ? "GGIR sleep algorithm has no marker mapping" : "GGIR supplied no usable window";
		s.set(o, (s.get(o) ?? 0) + 1);
	}
	return {
		reportedNights: n.size,
		markedNights: t.size,
		exclusions: [...s].map(([e, n]) => ({
			reason: e,
			count: n
		}))
	};
}
function ie(e) {
	const n = /* @__PURE__ */ new Map();
	for (const t of e) {
		const e = n.get(t.nightDate);
		if (null != e && e !== t.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		n.set(t.nightDate, t.night);
	}
}
const oe = (e, n) => m(n).wallClockLabels(Float64Array.from(e));
async function ae(e, n, t, r, s = !1) {
	const i = n.find((e) => e.night === t), o = X(e).find((e) => e.night === t);
	if (!i || !o) return null;
	const [a, l] = await oe([o.onsetMs, o.wakeMs], r), c = [i.onset !== a ? `onset moved ${s ? `${a} → ` : ""}${i.onset}` : null, i.wake !== l ? `wake moved ${s ? `${l} → ` : ""}${i.wake}` : null].filter((e) => null != e);
	return c.length > 0 ? `edited: ${c.join(", ")}` : null;
}
async function le(e, n, t, r = m(t)) {
	if (ie(e.sleepWindows), !e.sources.ms5) return [];
	const s = (/* @__PURE__ */ new Date()).toISOString(), i = e.nightSummaries ?? [], o = new Map(X(e).map((e) => [e.night, e.nightDate])), a = (e) => e.nightDate ?? (null == e.night ? void 0 : o.get(e.night)), l = new Map(await Promise.all([...new Set(i.map(a).filter((e) => null != e))].map(async (e) => [e, await g(e, void 0, r)]))), c = Float64Array.from(i, (e) => e.validHours ?? NaN), u = e.includeDayCriterionHours ?? await r.ggirIncludeDayCriterionHours(null), d = Float64Array.from(i, () => u), p = await r.ggirDaysIncluded(c, d, null);
	return i.flatMap((e, t) => {
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
async function ce(e, n, t, r = m(t)) {
	const [s, i] = await r.wallClockLabels(Float64Array.of(n.onsetMs, n.wakeMs));
	return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(n.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${s} → ${i}`;
}
async function ue(e, n, t) {
	return Promise.all(ee(e).map(async (r) => {
		const [s, i] = await t.ggirLabelsToStoredMs(Float64Array.of(r.onsetMs, r.wakeMs), n), o = await ce(e, r, void 0, t);
		return {
			date: r.nightDate,
			onsetTimestamp: s / 1e3,
			offsetTimestamp: i / 1e3,
			notes: o
		};
	}));
}
async function ge(e, n, t, r, s, o = [], a, l) {
	ie(n.sleepWindows);
	const c = ne(n);
	if (null == c) return !0;
	const u = F(null, t), g = m(a);
	let d = !0;
	for (const p of l ?? await ue(n, o, g)) {
		const n = [{
			markerType: i.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: p.onsetTimestamp,
			offsetTimestamp: p.offsetTimestamp,
			source: "auto",
			settingsHash: u
		}];
		await (await import("./night-session-DShln9H6.js").then((e) => e.t)).writeHeadlessNight({
			signal: a,
			fileId: e,
			...s ? { expected: w(null) } : {},
			date: p.date,
			username: h,
			sleepMarkers: n,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p.notes,
			algorithm: c,
			sleepPeriodDetectionConfig: v(void 0, _) ?? null
		}, r, null).catch(() => {
			a?.throwIfAborted(), console.warn("[local-processing] GGIR results marker persistence failed."), d = !1;
		});
	}
	return d;
}
export { D as _, Z as a, ue as c, Y as d, le as f, j as g, N as h, te as i, U as l, z as m, ae as n, K as o, F as p, ne as r, X as s, ie as t, ge as u, P as v, H as y };
