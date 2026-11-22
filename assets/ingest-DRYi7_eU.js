import { D as e, Kr as t, Mt as a, Nt as s, On as n, S as r, Tt as i, W as o, b as c, p as l, v as u, x as p } from "./background-jobs-DZ-3eyDo.js";
import { $r as w, Kt as d, Wr as h, Zt as f, an as m, hn as g, hr as _, ln as v, mt as k, on as y, pn as S, qt as W } from "./db-CgIiF5UC.js";
import { F as A, I, L as b, V as T, z as E } from "./local-export-worker-DXiNfeZJ.js";
const R = n.filter((e) => "sleep_wake" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds,
	supportedEpochSeconds: e.supportedEpochSeconds
})), N = new Map(R.map((e) => [e.id, e]));
function F(e) {
	return N.get(e);
}
const D = [
	"sadeh_1994_original",
	"sadeh_1994_actilife",
	"sadeh_1994_ggir",
	"cole_kripke_1992_original",
	"cole_kripke_1992_actilife",
	"cole_kripke_1992_ggir",
	"oakley_1997",
	"galland_2012",
	"natural_language",
	"lstm_sleep_wake",
	"manual"
];
(function(e) {
	const t = new Set(R.map((e) => e.id)), a = e.filter((e) => !t.has(e));
	if (a.length > 0) throw new Error(`LEGACY_COVERED_SLEEP_WAKE_IDS contains ids that are not sleep/wake method contracts (LinkML drift?): ${a.join(", ")}`);
})(D);
const j = new Set(D), M = R.filter((e) => !(e.needsModel || j.has(e.id) || "counts_axis_y" !== e.requiredSignal && "consensus_majority_vote" !== e.id)).map((e) => e.id);
for (const _e of M) if (!w(_e)) throw new Error(`unified sleep/wake method ${_e} is not a declared AlgorithmRunKey (core.yaml)`);
function P(e) {
	return {
		sleepWake: null,
		conformance: "needs_30s_epoch",
		available: !1,
		reason: `${e}: 30 s-native scorer is not run on the 60 s grid (feeding it 60 s counts would miscalibrate it); its native scoring is the exploratory 30 s cube surface.`,
		elementSeconds: 30
	};
}
function x(e, t) {
	const a = F(e);
	return 30 !== a?.nativeEpochSeconds || a.supportedEpochSeconds.includes(t) ? { kind: "score60s" } : {
		kind: "gate_needs_30s_epoch",
		response: P(e)
	};
}
function $(e) {
	const { counts: t } = e, a = {
		algorithm: e.algorithm,
		signals: {
			counts: t instanceof Float64Array ? t : Float64Array.from(t),
			epochSeconds: e.epochSeconds
		}
	};
	return e.postprocessing && (a.postprocessing = e.postprocessing), e.config && (a.config = e.config), a;
}
function C(e, t) {
	if (!e.available || !e.sleepWake) return null;
	if (t > 0 && e.sleepWake.length !== t) return null;
	const a = new Uint8Array(e.sleepWake.length);
	for (let s = 0; s < e.sleepWake.length; s++) a[s] = e.sleepWake[s] ? 1 : 0;
	return a;
}
function L(e, t) {
	const a = {};
	for (const [s, n] of e) {
		const e = C(n, t);
		e && (a[s] = e);
	}
	return a;
}
function O(e) {
	return "aw5" === e ? "actoglance.source.philips_actiwatch_aw5.v1" : "actoglance.source.philips_actiware_csv.v1";
}
async function q(e) {
	return function(e) {
		if (e > p()) throw new Error(u);
	}(e.size), await e.arrayBuffer();
}
async function K(e, t) {
	const a = e.timestamps_ms[0];
	if (null == a) return null;
	const s = (e.channels.find((t) => t.name === e.primary) ?? e.channels[0])?.counts ?? [], n = Array.from(s, (e) => Number.isFinite(e) && e >= 0), r = await t.roundCountStorage(Float64Array.from(s, (e, t) => n[t] ? e : 0), 0);
	return {
		start_local: (i = a / 1e3, (/* @__PURE__ */ new Date(1e3 * i)).toISOString().slice(0, 19)),
		epoch_seconds: e.epoch_seconds,
		activity: n.map((e, t) => e ? r[t] : null),
		...e.marker && e.marker.length === s.length ? { marker: e.marker } : {},
		excluded: (e.rest_intervals ?? []).filter((e) => "excluded" === e.kind)
	};
	var i;
}
async function H(e, t, a, s = 60) {
	const n = Int8Array.from(t.scores, (e) => null == e ? -1 : 0 === e ? 1 : 0);
	return e.foldSleepWakeVotes(t.startTimestamp, t.epochSeconds, n, Float64Array.from(a), s);
}
function U(e, t) {
	return e && e.length === t && t > 0 ? e : null;
}
function V(e) {
	const t = e.timestamps_ms.length, a = (t) => e.light_channels.find((e) => e.name === t)?.counts;
	return {
		white: U(e.light, t),
		red: U(a("red_light"), t),
		green: U(a("green_light"), t),
		blue: U(a("blue_light"), t)
	};
}
function B(e, t, a) {
	const s = (e) => {
		if (!e) return;
		const s = new Float64Array(a.length);
		for (let n = 0; n < a.length; n += 1) {
			const r = t.get(a[n] ?? NaN);
			s[n] = null == r ? NaN : e[r] ?? NaN;
		}
		return s.buffer;
	}, n = s(e.white), r = s(e.red), i = s(e.green), o = s(e.blue);
	return {
		...n ? { lux: n } : {},
		...r ? { redLight: r } : {},
		...i ? { greenLight: i } : {},
		...o ? { blueLight: o } : {}
	};
}
function z(e, t) {
	const a = 6e4 * (G(e, t)?.gmt_offset_minutes ?? 0);
	return 0 === a ? e.series : {
		...e.series,
		timestamps_ms: e.series.timestamps_ms.map((e) => e + a)
	};
}
function G(e, t) {
	return (void 0 === t ? void 0 : e.downloads.find((e) => e.guid === t)) ?? e.downloads.find((e) => e.is_primary) ?? e.downloads[0];
}
function J(e) {
	const t = e.channels.find((t) => t.name === e.primary) ?? e.channels[0];
	if (!t) throw new Error("The device file carries no activity count channel.");
	return t.counts;
}
var Y = class extends Error {
	name = "NativeEpochRefusal";
	category = "unsupported-epoch";
	sourceEpochSeconds;
	constructor(e) {
		super(_("unsupported-epoch")), this.sourceEpochSeconds = e;
	}
};
async function Z(e, t, n = [], r = null) {
	if (!s(e.epoch_seconds)) throw new Y(e.epoch_seconds);
	const i = function(e, t) {
		if (!t || t.length !== e.length) return /* @__PURE__ */ new Float64Array(0);
		const a = [];
		return t.forEach((t, s) => {
			t && a.push((e[s] ?? NaN) / 1e3);
		}), Float64Array.from(a.filter(Number.isFinite));
	}(e.timestamps_ms, e.marker), o = function(e) {
		const { timestamps_ms: t, off_wear: a, off_wear_invalid: s, epoch_seconds: n } = e;
		if (a.length !== t.length) return [];
		const r = [];
		let i = null;
		for (let o = 0; o <= t.length; o += 1) {
			const e = o < t.length && !0 === a[o] && !0 !== s?.[o], c = (t[o] ?? NaN) / 1e3;
			if (e && null === i && (i = c), !e && null !== i) {
				const e = (t[o - 1] ?? NaN) / 1e3;
				r.push({
					startTimestamp: i,
					endTimestamp: e + n
				}), i = null;
			}
		}
		return r;
	}(e), c = e.timestamps_ms.length > 0 && e.off_wear.length === e.timestamps_ms.length, l = a(e.epoch_seconds) ? e : await t(e), u = l.epoch_seconds;
	if (!a(u)) throw new Y(e.epoch_seconds);
	const p = 120 === u ? [...n, "This recording keeps its native 120-second scoring grid. A 60-second view, one-minute sleep scorers, Choi nonwear and finer algorithm variants are unavailable because the source contains only two-minute sums."] : n, w = l.activity_invalid ?? [];
	return {
		epochSeconds: u,
		timestampsMs: l.timestamps_ms,
		counts: J(l),
		actiwareInvalidActivityEpochs: Uint8Array.from(w.length === l.timestamps_ms.length ? w : [], (e) => e ? 1 : 0),
		actiwareStatisticsInput: r,
		sourceEpochSeconds: e.epoch_seconds,
		eventMarkerInstantsSec: i,
		offWristPeriods: o,
		hasOffWristChannel: c,
		warnings: p,
		light: V(l),
		actiwareIntervals: [],
		actiwareSleepWake: null,
		actiwareStatistics: [],
		actiwareRecording: null,
		actiwareWakeThreshold: null,
		actiwareRestProposal: null,
		actiwareIntervalsRefusal: null
	};
}
function Q(e) {
	const { proposal: t, nights: a } = e ?? {
		proposal: v,
		nights: []
	}, s = t.rest_autoscore === h.screens ? a : [];
	return JSON.stringify([
		t.use_saved_rest_intervals,
		t.rest_autoscore,
		s.map(({ timestamps: e, activity_counts: t, sleep_scores: a, ...s }) => s)
	]);
}
async function X(e, t, a, s, n = /* @__PURE__ */ new Map(), r = {}) {
	const i = Array.from(t), o = await T(i, e), c = /* @__PURE__ */ new Map();
	for (const u of i) {
		const e = o(u);
		let t = c.get(e);
		t || c.set(e, t = []), t.push(u);
	}
	const l = Array.from(a);
	return Promise.all([...c].map(async ([t, a]) => {
		const { start: i, end: o } = await E(t, void 0, void 0, e), c = n.get(t);
		return S({
			analysisDate: t,
			epochLengthSeconds: s,
			timestamps: a,
			activityCounts: [],
			sleepScores: [],
			eventMarkerTimestamps: l.filter((e) => e >= i && e < o + 21600),
			diaryBedTime: k(c, "diary_in_bed_time"),
			diaryOnsetTime: k(c, "diary_onset_time"),
			diaryOutBedTime: k(c, "diary_out_of_bed_time"),
			diaryWakeTime: k(c, "diary_wake_time"),
			nightStartHour: g(r.start),
			nightEndHour: g(r.end)
		});
	}));
}
async function ee(e, t, a, s, n, r, i, o) {
	i?.throwIfAborted();
	const c = a ? f(a, W(a, s, e)) : null, l = !a || !c || y(a, c), u = l || null !== a && null !== c && !m(a, c) ? e.filter((e) => "rest" === e.kind) : [], p = l ? e.filter((e) => "sleep" === e.kind) : [], w = {
		sleepWake: null,
		wakeThreshold: null,
		intervals: null
	}, h = t && c && n.actiwareSleepWake ? await n.actiwareSleepWake(t, c).catch((e) => (w.sleepWake = te(e), null)) : null;
	i?.throwIfAborted();
	const g = a ? d(a, s, e) : [], _ = t && c && h ? {
		startTimestamp: b(t.start_local),
		epochSeconds: t.epoch_seconds,
		scores: h,
		params: c,
		...g.length > 0 ? { paradigmDefaults: g } : {}
	} : null, v = t && c && n.actiwareWakeThreshold ? await n.actiwareWakeThreshold(t, c).catch((e) => (w.wakeThreshold = te(e), null)) : null;
	i?.throwIfAborted();
	let k = null;
	if (!(!1 !== o?.proposal.use_saved_rest_intervals && u.length > 0 && p.length > 0) && t && c && n.actiwareIntervals) try {
		k = await n.actiwareIntervals(t, u, c, ...o ? [o] : []);
	} catch (N) {
		w.intervals = te(N);
	}
	i?.throwIfAborted();
	const S = k ?? {
		intervals: [...e],
		generated: !1
	}, T = S.intervals.filter((e) => "rest" === e.kind || "sleep" === e.kind), E = r && h ? {
		...r,
		sleep_wake: h
	} : r, R = E && n.actiwareIntervalStatistics && T.length > 0 ? await n.actiwareIntervalStatistics({
		...E,
		intervals: T
	}).then((e) => I(e ?? [])).catch(ne) : [];
	return i?.throwIfAborted(), {
		intervals: A(S.intervals, S.generated),
		sleepWake: _,
		statistics: R,
		statisticsInput: E,
		wakeThreshold: v ?? null,
		restProposal: o ? {
			key: Q(o),
			...k?.nights ? { notes: Object.fromEntries(k.nights.map((e) => [e.analysis_date, e.note])) } : {}
		} : null,
		refusals: w
	};
}
function te(e) {
	return (e instanceof Error ? e.message : String(e)).replace(/\.$/, "");
}
const ae = {
	sleepWake: "Sleep/Wake",
	wakeThreshold: "wake threshold",
	intervals: "rest and sleep intervals"
};
function se(e) {
	const t = /* @__PURE__ */ new Map();
	for (const [a, s] of Object.entries(e)) null !== s && t.set(s, [...t.get(s) ?? [], ae[a]]);
	return [...t].map(([e, t]) => `Actiware could not set this recording's ${t.length > 1 ? `${t.slice(0, -1).join(", ")} and ${t.at(-1)}` : t[0]}: ${e}.`);
}
function ne() {
	return console.warn("[actiware-statistics] the core rejected this file's Statistics input"), null;
}
const re = "Actiware statistics could not be computed for this file; the Actiware statistics block stays empty.";
function ie(e, t) {
	return e ? (t ?? []).map((e) => `Actiware setting ${e.field} = '${e.raw_label}' not recognised; using default.`) : ["No Actiware analysis settings in this file; Actiware Sleep/Wake and rest intervals are not recomputed."];
}
async function oe(e, t, a) {
	if (le(e)) return "aw5";
	const s = e.name.toLowerCase();
	if (s.endsWith(".aw5")) return "aw5";
	if (!s.endsWith(".csv")) return null;
	if ("function" != typeof t.detectDeviceFormat) return null;
	const n = await o(e, 65536, a);
	return r = await t.detectDeviceFormat(n, e.name).catch(() => (console.warn("[native-epoch-sniff] the actours sniffer could not read this file; trying the other loaders"), null)), i = e.name, "actiware_csv" === r ? "actiware_csv" : "aw5" === r || i.toLowerCase().endsWith(".aw5") ? "aw5" : null;
	var r, i;
}
async function ce(a, s, n, o, l, u = { cancel: () => {} }, p) {
	const w = (t, a) => e(a, c, t, u.signal, u.cancel), d = async (e) => l && p ? {
		proposal: p.proposal,
		nights: p.proposal.rest_autoscore === h.screens ? await X(n, e.timestampsMs.map((e) => e / 1e3), e.eventMarkerInstantsSec, e.epochSeconds, void 0, {
			start: p.nightStartHour,
			end: p.nightEndHour
		}) : []
	} : null, f = async (e) => (await w("aggregateEpochSeries", () => n.aggregateEpochSeries({
		target_seconds: i,
		series: e,
		sleep_scores: [],
		event_markers: []
	}))).series;
	if ("aw5" === s) {
		const e = le(a) ? a.aw5Subject.downloadGuids[0] : void 0, t = le(a) ? await a.loadAw5(u.signal) : await w("parseAw5", async () => n.parseAw5(new Uint8Array(await q(a))));
		if (r(u.signal, "after decoding the .AW5 database"), !t) throw new Error("This build's actours core cannot read .AW5 databases yet (needs the pin that exports parseAw5). Export the recording from Actiware as CSV instead.");
		const { warnings: s } = function(e) {
			const { status: t, reasons: a } = e.alignment;
			if ("broken" === t) throw new Error(`This .AW5 recording's samples do not line up with its clock (${a.join("; ") || "alignment broken"}), so it was not imported.`);
			return "suspect" === t ? { warnings: [`.AW5 alignment is suspect: ${a.join("; ") || "no reason given"}. Check the plot against the Actiware report.`] } : { warnings: [] };
		}(t), i = G(t, e), c = t.actiware_analysis, p = c?.statistics_input ?? t.actiware_statistics_input ?? null;
		o?.(.6, "Preparing the supported native scoring grid...");
		const h = await Z(z(t, e), f, s, p);
		o?.(.8, "Actiware sleep/wake and statistics...");
		const m = c?.params ?? t.actiware_params, g = m ? {
			params: m,
			intervals: c?.intervals ?? t.series.rest_intervals ?? [],
			...c?.analysis ? { analysis: c.analysis } : {},
			...t.other_analyses ? { otherAnalyses: t.other_analyses } : {}
		} : null, _ = await ee(g?.intervals ?? [], c?.input ?? t.actiware_input ?? await K(z(t, e), n), g?.params ?? null, l, n, p, void 0, await d(h));
		return {
			...h,
			actiwareRestProposal: _.restProposal,
			actiwareIntervalsRefusal: _.refusals.intervals,
			actiwareStatisticsInput: _.statisticsInput,
			actiwareIntervals: _.intervals,
			actiwareSleepWake: _.sleepWake,
			actiwareStatistics: _.statistics ?? [],
			actiwareRecording: g,
			actiwareWakeThreshold: _.wakeThreshold,
			warnings: [
				...h.warnings,
				...ie(m, c?.params_warnings ?? t.actiware_params_warnings ?? t.series.actiware_params_warnings),
				...se(_.refusals),
				..._.statistics ? [] : [re]
			],
			...i ? { gmtOffsetMinutes: i.gmt_offset_minutes } : {}
		};
	}
	const m = await w("parseEpochSeries", async () => {
		const e = new Uint8Array(await q(a));
		return n.parseEpochSeries(t(e, [e.buffer]), a.name);
	});
	r(u.signal, "after parsing the Actiware export"), o?.(.6, "Preparing the supported native scoring grid...");
	const g = await Z(m, f, [], m.actiware_statistics_input ?? null);
	o?.(.8, "Actiware sleep/wake and statistics...");
	const _ = m.actiware_params ?? null, v = _ ? {
		params: _,
		intervals: m.rest_intervals ?? []
	} : null, k = await ee(m.rest_intervals ?? [], m.actiware_input ?? await K(m, n), _, l, n, m.actiware_statistics_input ?? null, void 0, await d(g));
	return {
		...g,
		actiwareRestProposal: k.restProposal,
		actiwareIntervalsRefusal: k.refusals.intervals,
		actiwareStatisticsInput: k.statisticsInput,
		actiwareIntervals: k.intervals,
		actiwareSleepWake: k.sleepWake,
		actiwareStatistics: k.statistics ?? [],
		actiwareRecording: v,
		actiwareWakeThreshold: k.wakeThreshold,
		warnings: [
			...g.warnings,
			...ie(_, m.actiware_params_warnings),
			...se(k.refusals),
			...k.statistics ? [] : [re]
		]
	};
}
function le(e) {
	return "aw5Subject" in e;
}
function ue(e, t) {
	const a = JSON.stringify({
		recordingKey: e.recordingKey,
		series: t.series,
		actiware_input: t.actiware_input,
		actiware_params: t.actiware_params,
		actiware_statistics_input: t.actiware_statistics_input,
		downloads: t.downloads.map(({ guid: e, ...t }) => t)
	});
	return new File([a], "aw5-subject");
}
async function pe(e, t = l()) {
	return t.actiwareFileData.get(e);
}
async function we(e, t) {
	await e.actiwareFileData.put(t);
}
async function de(e, t, a, s) {
	const n = {
		actiwareIntervals: a.intervals,
		actiwareRemovedRests: a.removedRests
	};
	await e.actiwareFileData.update(t, null === s ? {
		...n,
		actiwareStatisticsNeedsRecompute: !0
	} : {
		...n,
		actiwareStatistics: s,
		actiwareStatisticsNeedsRecompute: !1
	});
}
async function he(e, t, a, s) {
	await e.actiwareFileData.update(t, {
		actiwareStatistics: a,
		actiwareStatisticsNeedsRecompute: s
	});
}
async function fe(e, t) {
	await e.actiwareFileData.update(t, { actiwareStatisticsNeedsRecompute: !0 });
}
function me(e) {
	return {
		startTimestamp: e.startTimestamp,
		epochSeconds: e.epochSeconds,
		params: e.params,
		...e.paradigmDefaults ? { paradigmDefaults: e.paradigmDefaults } : {},
		scores: Int8Array.from(e.scores, (e) => e ?? -1).buffer
	};
}
async function ge({ fileId: e, native: t, recordingWakeThreshold: a, db: s, beforeWrite: n }) {
	t?.actiwareStatisticsInput && (await n(), await s.actiwareStatisticsInputs.put({
		fileId: e,
		input: t.actiwareStatisticsInput
	})), t && (t.actiwareIntervals.length > 0 || t.actiwareSleepWake || t.actiwareStatistics.length > 0 || t.actiwareRecording) && (await n(), await we(s, {
		fileId: e,
		...t.actiwareIntervals.length > 0 ? { actiwareIntervals: t.actiwareIntervals } : {},
		...t.actiwareSleepWake ? { actiwareSleepWake: me(t.actiwareSleepWake) } : {},
		...t.actiwareStatistics.length > 0 ? { actiwareStatistics: t.actiwareStatistics } : {},
		...t.actiwareRecording ? { actiwareRecording: t.actiwareRecording } : {},
		...null != t.actiwareWakeThreshold ? { actiwareWakeThreshold: t.actiwareWakeThreshold } : {},
		...t.actiwareRestProposal ? { actiwareRestProposal: t.actiwareRestProposal } : {},
		...t.actiwareIntervalsRefusal ? { actiwareIntervalsRefusal: t.actiwareIntervalsRefusal } : {},
		...null != a ? { oakleyThreshold: a } : {}
	}));
}
export { F as C, $ as S, C as T, q as _, we as a, M as b, ee as c, ne as d, ue as f, ce as g, B as h, fe as i, X as l, le as m, ge as n, de as o, H as p, pe as r, he as s, me as t, Q as u, oe as v, x as w, L as x, O as y };
