import { D as e, Dt as t, Et as a, Rr as s, S as n, Sn as r, W as i, b as o, v as c, x as l, yt as u } from "./background-jobs-BCPfjgGQ.js";
import { $t as p, Gr as d, Qt as h, bt as w, dn as f, ei as m, fn as g, gr as _, hn as v, rn as k, xn as y, yn as S } from "./db-D_ccV0o1.js";
import { F as A, I as b, P as W } from "./local-export-worker-DRuJMI8r.js";
const E = r.filter((e) => "sleep_wake" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds,
	supportedEpochSeconds: e.supportedEpochSeconds
})), I = new Map(E.map((e) => [e.id, e]));
function T(e) {
	return I.get(e);
}
const N = [
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
	const t = new Set(E.map((e) => e.id)), a = e.filter((e) => !t.has(e));
	if (a.length > 0) throw new Error(`LEGACY_COVERED_SLEEP_WAKE_IDS contains ids that are not sleep/wake method contracts (LinkML drift?): ${a.join(", ")}`);
})(N);
const j = new Set(N), D = E.filter((e) => !(e.needsModel || j.has(e.id) || "counts_axis_y" !== e.requiredSignal && "consensus_majority_vote" !== e.id)).map((e) => e.id);
for (const le of D) if (!m(le)) throw new Error(`unified sleep/wake method ${le} is not a declared AlgorithmRunKey (core.yaml)`);
function $(e) {
	return {
		sleepWake: null,
		conformance: "needs_30s_epoch",
		available: !1,
		reason: `${e}: 30 s-native scorer is not run on the 60 s grid (feeding it 60 s counts would miscalibrate it); its native scoring is the exploratory 30 s cube surface.`,
		elementSeconds: 30
	};
}
function x(e, t) {
	const a = T(e);
	return 30 !== a?.nativeEpochSeconds || a.supportedEpochSeconds.includes(t) ? { kind: "score60s" } : {
		kind: "gate_needs_30s_epoch",
		response: $(e)
	};
}
function F(e) {
	const { counts: t } = e, a = {
		algorithm: e.algorithm,
		signals: {
			counts: t instanceof Float64Array ? t : Float64Array.from(t),
			epochSeconds: e.epochSeconds
		}
	};
	return e.postprocessing && (a.postprocessing = e.postprocessing), e.config && (a.config = e.config), a;
}
function M(e, t) {
	if (!e.available || !e.sleepWake) return null;
	if (t > 0 && e.sleepWake.length !== t) return null;
	const a = new Uint8Array(e.sleepWake.length);
	for (let s = 0; s < e.sleepWake.length; s++) a[s] = e.sleepWake[s] ? 1 : 0;
	return a;
}
function R(e, t) {
	const a = {};
	for (const [s, n] of e) {
		const e = M(n, t);
		e && (a[s] = e);
	}
	return a;
}
function O(e) {
	return "aw5" === e ? "actoglance.source.philips_actiwatch_aw5.v1" : "actoglance.source.philips_actiware_csv.v1";
}
async function P(e) {
	return function(e) {
		if (e > l()) throw new Error(c);
	}(e.size), await e.arrayBuffer();
}
async function C(e, t) {
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
async function L(e, t, a, s = 60) {
	const n = Int8Array.from(t.scores, (e) => null == e ? -1 : 0 === e ? 1 : 0);
	return e.foldSleepWakeVotes(t.startTimestamp, t.epochSeconds, n, Float64Array.from(a), s);
}
function q(e) {
	return {
		startTimestamp: e.startTimestamp,
		epochSeconds: e.epochSeconds,
		params: e.params,
		...e.paradigmDefaults ? { paradigmDefaults: e.paradigmDefaults } : {},
		scores: Int8Array.from(e.scores, (e) => e ?? -1).buffer
	};
}
function H(e, t) {
	return e && e.length === t && t > 0 ? e : null;
}
function K(e) {
	const t = e.timestamps_ms.length, a = (t) => e.light_channels.find((e) => e.name === t)?.counts;
	return {
		white: H(e.light, t),
		red: H(a("red_light"), t),
		green: H(a("green_light"), t),
		blue: H(a("blue_light"), t)
	};
}
function U(e, t, a) {
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
function B(e, t) {
	const a = 6e4 * (G(e, t)?.gmt_offset_minutes ?? 0);
	return 0 === a ? e.series : {
		...e.series,
		timestamps_ms: e.series.timestamps_ms.map((e) => e + a)
	};
}
function G(e, t) {
	return (void 0 === t ? void 0 : e.downloads.find((e) => e.guid === t)) ?? e.downloads.find((e) => e.is_primary) ?? e.downloads[0];
}
function V(e) {
	const t = e.channels.find((t) => t.name === e.primary) ?? e.channels[0];
	if (!t) throw new Error("The device file carries no activity count channel.");
	return t.counts;
}
var J = class extends Error {
	name = "NativeEpochRefusal";
	category = "unsupported-epoch";
	sourceEpochSeconds;
	constructor(e) {
		super(_("unsupported-epoch")), this.sourceEpochSeconds = e;
	}
};
async function z(e, s, n = [], r = null) {
	if (!t(e.epoch_seconds)) throw new J(e.epoch_seconds);
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
	}(e), c = e.timestamps_ms.length > 0 && e.off_wear.length === e.timestamps_ms.length, l = a(e.epoch_seconds) ? e : await s(e), u = l.epoch_seconds;
	if (!a(u)) throw new J(e.epoch_seconds);
	const p = 120 === u ? [...n, "This recording keeps its native 120-second scoring grid. A 60-second view, one-minute sleep scorers, Choi nonwear and finer algorithm variants are unavailable because the source contains only two-minute sums."] : n, d = l.activity_invalid ?? [];
	return {
		epochSeconds: u,
		timestampsMs: l.timestamps_ms,
		counts: V(l),
		actiwareInvalidActivityEpochs: Uint8Array.from(d.length === l.timestamps_ms.length ? d : [], (e) => e ? 1 : 0),
		actiwareStatisticsInput: r,
		sourceEpochSeconds: e.epoch_seconds,
		eventMarkerInstantsSec: i,
		offWristPeriods: o,
		hasOffWristChannel: c,
		warnings: p,
		light: K(l),
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
	}, s = t.rest_autoscore === d.screens ? a : [];
	return JSON.stringify([
		t.use_saved_rest_intervals,
		t.rest_autoscore,
		s.map(({ timestamps: e, activity_counts: t, sleep_scores: a, ...s }) => s)
	]);
}
function Y(e, t, a, s = /* @__PURE__ */ new Map(), n = {}) {
	const r = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = (/* @__PURE__ */ new Date(1e3 * (o - 43200))).toISOString().slice(0, 10);
		let t = r.get(e);
		t || r.set(e, t = []), t.push(o);
	}
	const i = Array.from(t);
	return [...r].map(([e, t]) => {
		const r = Date.parse(`${e}T00:00:00Z`) / 1e3, o = s.get(e);
		return S({
			analysisDate: e,
			epochLengthSeconds: a,
			timestamps: t,
			activityCounts: [],
			sleepScores: [],
			eventMarkerTimestamps: i.filter((e) => e >= r + 43200 && e < r + 151200),
			diaryBedTime: w(o, "diary_in_bed_time"),
			diaryOnsetTime: w(o, "diary_onset_time"),
			diaryOutBedTime: w(o, "diary_out_of_bed_time"),
			diaryWakeTime: w(o, "diary_wake_time"),
			nightStartHour: y(n.start),
			nightEndHour: y(n.end)
		});
	});
}
async function Z(e, t, a, s, n, r, i, o) {
	i?.throwIfAborted();
	const c = a ? k(a, p(a, s, e)) : null, l = !a || !c || g(a, c), u = l || null !== a && null !== c && !f(a, c) ? e.filter((e) => "rest" === e.kind) : [], d = l ? e.filter((e) => "sleep" === e.kind) : [], w = {
		sleepWake: null,
		wakeThreshold: null,
		intervals: null
	}, m = t && c && n.actiwareSleepWake ? await n.actiwareSleepWake(t, c).catch((e) => (w.sleepWake = X(e), null)) : null;
	i?.throwIfAborted();
	const _ = a ? h(a, s, e) : [], v = t && c && m ? {
		startTimestamp: b(t.start_local),
		epochSeconds: t.epoch_seconds,
		scores: m,
		params: c,
		..._.length > 0 ? { paradigmDefaults: _ } : {}
	} : null, y = t && c && n.actiwareWakeThreshold ? await n.actiwareWakeThreshold(t, c).catch((e) => (w.wakeThreshold = X(e), null)) : null;
	i?.throwIfAborted();
	let S = null;
	if (!(!1 !== o?.proposal.use_saved_rest_intervals && u.length > 0 && d.length > 0) && t && c && n.actiwareIntervals) try {
		S = await n.actiwareIntervals(t, u, c, ...o ? [o] : []);
	} catch (j) {
		w.intervals = X(j);
	}
	i?.throwIfAborted();
	const E = S ?? {
		intervals: [...e],
		generated: !1
	}, I = E.intervals.filter((e) => "rest" === e.kind || "sleep" === e.kind), T = r && m ? {
		...r,
		sleep_wake: m
	} : r, N = T && n.actiwareIntervalStatistics && I.length > 0 ? await n.actiwareIntervalStatistics({
		...T,
		intervals: I
	}).then((e) => A(e ?? [])).catch(ae) : [];
	return i?.throwIfAborted(), {
		intervals: W(E.intervals, E.generated),
		sleepWake: v,
		statistics: N,
		statisticsInput: T,
		wakeThreshold: y ?? null,
		restProposal: o ? {
			key: Q(o),
			...S?.nights ? { notes: Object.fromEntries(S.nights.map((e) => [e.analysis_date, e.note])) } : {}
		} : null,
		refusals: w
	};
}
function X(e) {
	return (e instanceof Error ? e.message : String(e)).replace(/\.$/, "");
}
const ee = {
	sleepWake: "Sleep/Wake",
	wakeThreshold: "wake threshold",
	intervals: "rest and sleep intervals"
};
function te(e) {
	const t = /* @__PURE__ */ new Map();
	for (const [a, s] of Object.entries(e)) null !== s && t.set(s, [...t.get(s) ?? [], ee[a]]);
	return [...t].map(([e, t]) => `Actiware could not set this recording's ${t.length > 1 ? `${t.slice(0, -1).join(", ")} and ${t.at(-1)}` : t[0]}: ${e}.`);
}
function ae() {
	return console.warn("[actiware-statistics] the core rejected this file's Statistics input"), null;
}
const se = "Actiware statistics could not be computed for this file; the Actiware statistics block stays empty.";
function ne(e, t) {
	return e ? (t ?? []).map((e) => `Actiware setting ${e.field} = '${e.raw_label}' not recognised; using default.`) : ["No Actiware analysis settings in this file; Actiware Sleep/Wake and rest intervals are not recomputed."];
}
async function re(e, t, a) {
	if (oe(e)) return "aw5";
	const s = e.name.toLowerCase();
	if (s.endsWith(".aw5")) return "aw5";
	if (!s.endsWith(".csv")) return null;
	if ("function" != typeof t.detectDeviceFormat) return null;
	const n = await i(e, 65536, a);
	return r = await t.detectDeviceFormat(n, e.name).catch(() => (console.warn("[native-epoch-sniff] the actours sniffer could not read this file; trying the other loaders"), null)), o = e.name, "actiware_csv" === r ? "actiware_csv" : "aw5" === r || o.toLowerCase().endsWith(".aw5") ? "aw5" : null;
	var r, o;
}
async function ie(t, a, r, i, c, l = { cancel: () => {} }, p) {
	const h = (t, a) => e(a, o, t, l.signal, l.cancel), w = (e) => c && p ? {
		proposal: p.proposal,
		nights: p.proposal.rest_autoscore === d.screens ? Y(e.timestampsMs.map((e) => e / 1e3), e.eventMarkerInstantsSec, e.epochSeconds, void 0, {
			start: p.nightStartHour,
			end: p.nightEndHour
		}) : []
	} : null, f = async (e) => (await h("aggregateEpochSeries", () => r.aggregateEpochSeries({
		target_seconds: u,
		series: e,
		sleep_scores: [],
		event_markers: []
	}))).series;
	if ("aw5" === a) {
		const e = oe(t) ? t.aw5Subject.downloadGuids[0] : void 0, a = oe(t) ? await t.loadAw5(l.signal) : await h("parseAw5", async () => r.parseAw5(new Uint8Array(await P(t))));
		if (n(l.signal, "after decoding the .AW5 database"), !a) throw new Error("This build's actours core cannot read .AW5 databases yet (needs the pin that exports parseAw5). Export the recording from Actiware as CSV instead.");
		const { warnings: s } = function(e) {
			const { status: t, reasons: a } = e.alignment;
			if ("broken" === t) throw new Error(`This .AW5 recording's samples do not line up with its clock (${a.join("; ") || "alignment broken"}), so it was not imported.`);
			return "suspect" === t ? { warnings: [`.AW5 alignment is suspect: ${a.join("; ") || "no reason given"}. Check the plot against the Actiware report.`] } : { warnings: [] };
		}(a), o = G(a, e), u = a.actiware_analysis, p = u?.statistics_input ?? a.actiware_statistics_input ?? null;
		i?.(.6, "Preparing the supported native scoring grid...");
		const d = await z(B(a, e), f, s, p);
		i?.(.8, "Actiware sleep/wake and statistics...");
		const m = u?.params ?? a.actiware_params, g = m ? {
			params: m,
			intervals: u?.intervals ?? a.series.rest_intervals ?? [],
			...u?.analysis ? { analysis: u.analysis } : {},
			...a.other_analyses ? { otherAnalyses: a.other_analyses } : {}
		} : null, _ = await Z(g?.intervals ?? [], u?.input ?? a.actiware_input ?? await C(B(a, e), r), g?.params ?? null, c, r, p, void 0, w(d));
		return {
			...d,
			actiwareRestProposal: _.restProposal,
			actiwareIntervalsRefusal: _.refusals.intervals,
			actiwareStatisticsInput: _.statisticsInput,
			actiwareIntervals: _.intervals,
			actiwareSleepWake: _.sleepWake,
			actiwareStatistics: _.statistics ?? [],
			actiwareRecording: g,
			actiwareWakeThreshold: _.wakeThreshold,
			warnings: [
				...d.warnings,
				...ne(m, u?.params_warnings ?? a.actiware_params_warnings ?? a.series.actiware_params_warnings),
				...te(_.refusals),
				..._.statistics ? [] : [se]
			],
			...o ? { gmtOffsetMinutes: o.gmt_offset_minutes } : {}
		};
	}
	const m = await h("parseEpochSeries", async () => {
		const e = new Uint8Array(await P(t));
		return r.parseEpochSeries(s(e, [e.buffer]), t.name);
	});
	n(l.signal, "after parsing the Actiware export"), i?.(.6, "Preparing the supported native scoring grid...");
	const g = await z(m, f, [], m.actiware_statistics_input ?? null);
	i?.(.8, "Actiware sleep/wake and statistics...");
	const _ = m.actiware_params ?? null, v = _ ? {
		params: _,
		intervals: m.rest_intervals ?? []
	} : null, k = await Z(m.rest_intervals ?? [], m.actiware_input ?? await C(m, r), _, c, r, m.actiware_statistics_input ?? null, void 0, w(g));
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
			...ne(_, m.actiware_params_warnings),
			...te(k.refusals),
			...k.statistics ? [] : [se]
		]
	};
}
function oe(e) {
	return "aw5Subject" in e;
}
function ce(e, t) {
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
export { T as _, ae as a, oe as c, P as d, re as f, F as g, R as h, q as i, U as l, D as m, Y as n, ce as o, O as p, Q as r, L as s, Z as t, ie as u, x as v, M as y };
