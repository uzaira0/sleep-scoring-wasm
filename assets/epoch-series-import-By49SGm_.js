import { A as e, St as t, j as a, w as s } from "./schema-D8rqa1Y6.js";
import { s as n } from "./workers-CrU4fDAf.js";
import { K as r, P as i, p as o } from "./workspace-db-tot7PUXb.js";
import { l as c } from "./content-hash-CZ-UAlQR.js";
import { _ as l, f as u, u as p } from "./background-jobs-B2uo95VO.js";
import { Ot as d } from "./store-StTfKmbj.js";
import { F as h, L as w, _ as f, b as m, g, n as _, s as v, t as k } from "./per-source-defaults-DHWdfoJI.js";
import { _ as y, g as S, v as A } from "./local-export-shard-worker-Bn9FW-T0.js";
const b = t.filter((e) => "sleep_wake" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds,
	supportedEpochSeconds: e.supportedEpochSeconds
})), W = new Map(b.map((e) => [e.id, e]));
function E(e) {
	return W.get(e);
}
const I = [
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
	const t = new Set(b.map((e) => e.id)), a = e.filter((e) => !t.has(e));
	if (a.length > 0) throw new Error(`LEGACY_COVERED_SLEEP_WAKE_IDS contains ids that are not sleep/wake method contracts (LinkML drift?): ${a.join(", ")}`);
})(I);
const T = new Set(I), j = b.filter((e) => !(e.needsModel || T.has(e.id) || "counts_axis_y" !== e.requiredSignal && "consensus_majority_vote" !== e.id)).map((e) => e.id);
for (const ie of j) if (!i(ie)) throw new Error(`unified sleep/wake method ${ie} is not a declared AlgorithmRunKey (core.yaml)`);
function N(e) {
	return {
		sleepWake: null,
		conformance: "needs_30s_epoch",
		available: !1,
		reason: `${e}: 30 s-native scorer is not run on the 60 s grid (feeding it 60 s counts would miscalibrate it); its native scoring is the exploratory 30 s cube surface.`,
		elementSeconds: 30
	};
}
function F(e, t) {
	const a = E(e);
	return 30 !== a?.nativeEpochSeconds || a.supportedEpochSeconds.includes(t) ? { kind: "score60s" } : {
		kind: "gate_needs_30s_epoch",
		response: N(e)
	};
}
function M(e) {
	const { counts: t } = e, a = {
		algorithm: e.algorithm,
		signals: {
			counts: t instanceof Float64Array ? t : Float64Array.from(t),
			epochSeconds: e.epochSeconds
		}
	};
	return e.postprocessing && (a.postprocessing = e.postprocessing), e.config && (a.config = e.config), a;
}
function $(e, t) {
	if (!e.available || !e.sleepWake) return null;
	if (t > 0 && e.sleepWake.length !== t) return null;
	const a = new Uint8Array(e.sleepWake.length);
	for (let s = 0; s < e.sleepWake.length; s++) a[s] = e.sleepWake[s] ? 1 : 0;
	return a;
}
function D(e, t) {
	const a = {};
	for (const [s, n] of e) {
		const e = $(n, t);
		e && (a[s] = e);
	}
	return a;
}
function O(e) {
	return "aw5" === e ? "actoglance.source.philips_actiwatch_aw5.v1" : "actoglance.source.philips_actiware_csv.v1";
}
async function R(e, t) {
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
async function x(e, t, a, s = 60) {
	const n = Int8Array.from(t.scores, (e) => null == e ? -1 : 0 === e ? 1 : 0);
	return e.foldSleepWakeVotes(t.startTimestamp, t.epochSeconds, n, Float64Array.from(a), s);
}
function L(e) {
	return {
		startTimestamp: e.startTimestamp,
		epochSeconds: e.epochSeconds,
		params: e.params,
		...e.paradigmDefaults ? { paradigmDefaults: e.paradigmDefaults } : {},
		scores: Int8Array.from(e.scores, (e) => e ?? -1).buffer
	};
}
function P(e, t) {
	return e && e.length === t && t > 0 ? e : null;
}
function C(e) {
	const t = e.timestamps_ms.length, a = (t) => e.light_channels.find((e) => e.name === t)?.counts;
	return {
		white: P(e.light, t),
		red: P(a("red_light"), t),
		green: P(a("green_light"), t),
		blue: P(a("blue_light"), t)
	};
}
function q(e, t, a) {
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
function K(e, t) {
	const a = 6e4 * (B(e, t)?.gmt_offset_minutes ?? 0);
	return 0 === a ? e.series : {
		...e.series,
		timestamps_ms: e.series.timestamps_ms.map((e) => e + a)
	};
}
function B(e, t) {
	return (void 0 === t ? void 0 : e.downloads.find((e) => e.guid === t)) ?? e.downloads.find((e) => e.is_primary) ?? e.downloads[0];
}
function H(e) {
	const t = e.channels.find((t) => t.name === e.primary) ?? e.channels[0];
	if (!t) throw new Error("The device file carries no activity count channel.");
	return t.counts;
}
var U = class extends Error {
	name = "NativeEpochRefusal";
	category = "unsupported-epoch";
	sourceEpochSeconds;
	constructor(e) {
		super(r("unsupported-epoch")), this.sourceEpochSeconds = e;
	}
};
async function V(t, s, n = [], r = null) {
	if (!a(t.epoch_seconds)) throw new U(t.epoch_seconds);
	const i = function(e, t) {
		if (!t || t.length !== e.length) return /* @__PURE__ */ new Float64Array(0);
		const a = [];
		return t.forEach((t, s) => {
			t && a.push((e[s] ?? NaN) / 1e3);
		}), Float64Array.from(a.filter(Number.isFinite));
	}(t.timestamps_ms, t.marker), o = function(e) {
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
	}(t), c = t.timestamps_ms.length > 0 && t.off_wear.length === t.timestamps_ms.length, l = e(t.epoch_seconds) ? t : await s(t), u = l.epoch_seconds;
	if (!e(u)) throw new U(t.epoch_seconds);
	const p = 120 === u ? [...n, "This recording keeps its native 120-second scoring grid. A 60-second view, one-minute sleep scorers, Choi nonwear and finer algorithm variants are unavailable because the source contains only two-minute sums."] : n, d = l.activity_invalid ?? [];
	return {
		epochSeconds: u,
		timestampsMs: l.timestamps_ms,
		counts: H(l),
		actiwareInvalidActivityEpochs: Uint8Array.from(d.length === l.timestamps_ms.length ? d : [], (e) => e ? 1 : 0),
		actiwareStatisticsInput: r,
		sourceEpochSeconds: t.epoch_seconds,
		eventMarkerInstantsSec: i,
		offWristPeriods: o,
		hasOffWristChannel: c,
		warnings: p,
		light: C(l),
		actiwareIntervals: [],
		actiwareSleepWake: null,
		actiwareStatistics: [],
		actiwareRecording: null,
		actiwareWakeThreshold: null,
		actiwareRestProposal: null,
		actiwareIntervalsRefusal: null
	};
}
function G(e) {
	const { proposal: t, nights: a } = e ?? {
		proposal: m,
		nights: []
	}, s = t.rest_autoscore === o.screens ? a : [];
	return JSON.stringify([
		t.use_saved_rest_intervals,
		t.rest_autoscore,
		s.map(({ timestamps: e, activity_counts: t, sleep_scores: a, ...s }) => s)
	]);
}
function J(e, t, a, s = /* @__PURE__ */ new Map(), n = {}) {
	const r = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = (/* @__PURE__ */ new Date(1e3 * (o - 43200))).toISOString().slice(0, 10);
		let t = r.get(e);
		t || r.set(e, t = []), t.push(o);
	}
	const i = Array.from(t);
	return [...r].map(([e, t]) => {
		const r = Date.parse(`${e}T00:00:00Z`) / 1e3, o = s.get(e);
		return h({
			analysisDate: e,
			epochLengthSeconds: a,
			timestamps: t,
			activityCounts: [],
			sleepScores: [],
			eventMarkerTimestamps: i.filter((e) => e >= r + 43200 && e < r + 151200),
			diaryBedTime: d(o, "diary_in_bed_time"),
			diaryOnsetTime: d(o, "diary_onset_time"),
			diaryOutBedTime: d(o, "diary_out_of_bed_time"),
			diaryWakeTime: d(o, "diary_wake_time"),
			nightStartHour: w(n.start),
			nightEndHour: w(n.end)
		});
	});
}
async function Y(e, t, a, s, n, r, i, o) {
	i?.throwIfAborted();
	const c = a ? v(a, _(a, s, e)) : null, l = !a || !c || f(a, c), u = l || null !== a && null !== c && !g(a, c) ? e.filter((e) => "rest" === e.kind) : [], p = l ? e.filter((e) => "sleep" === e.kind) : [], d = {
		sleepWake: null,
		wakeThreshold: null,
		intervals: null
	}, h = t && c && n.actiwareSleepWake ? await n.actiwareSleepWake(t, c).catch((e) => (d.sleepWake = Z(e), null)) : null;
	i?.throwIfAborted();
	const w = a ? k(a, s, e) : [], m = t && c && h ? {
		startTimestamp: A(t.start_local),
		epochSeconds: t.epoch_seconds,
		scores: h,
		params: c,
		...w.length > 0 ? { paradigmDefaults: w } : {}
	} : null, b = t && c && n.actiwareWakeThreshold ? await n.actiwareWakeThreshold(t, c).catch((e) => (d.wakeThreshold = Z(e), null)) : null;
	i?.throwIfAborted();
	let W = null;
	if (!(!1 !== o?.proposal.use_saved_rest_intervals && u.length > 0 && p.length > 0) && t && c && n.actiwareIntervals) try {
		W = await n.actiwareIntervals(t, u, c, ...o ? [o] : []);
	} catch (N) {
		d.intervals = Z(N);
	}
	i?.throwIfAborted();
	const E = W ?? {
		intervals: [...e],
		generated: !1
	}, I = E.intervals.filter((e) => "rest" === e.kind || "sleep" === e.kind), T = r && h ? {
		...r,
		sleep_wake: h
	} : r, j = T && n.actiwareIntervalStatistics && I.length > 0 ? await n.actiwareIntervalStatistics({
		...T,
		intervals: I
	}).then((e) => y(e ?? [])).catch(X) : [];
	return i?.throwIfAborted(), {
		intervals: S(E.intervals, E.generated),
		sleepWake: m,
		statistics: j,
		statisticsInput: T,
		wakeThreshold: b ?? null,
		restProposal: o ? {
			key: G(o),
			...W?.nights ? { notes: Object.fromEntries(W.nights.map((e) => [e.analysis_date, e.note])) } : {}
		} : null,
		refusals: d
	};
}
function Z(e) {
	return (e instanceof Error ? e.message : String(e)).replace(/\.$/, "");
}
const z = {
	sleepWake: "Sleep/Wake",
	wakeThreshold: "wake threshold",
	intervals: "rest and sleep intervals"
};
function Q(e) {
	const t = /* @__PURE__ */ new Map();
	for (const [a, s] of Object.entries(e)) null !== s && t.set(s, [...t.get(s) ?? [], z[a]]);
	return [...t].map(([e, t]) => `Actiware could not set this recording's ${t.length > 1 ? `${t.slice(0, -1).join(", ")} and ${t.at(-1)}` : t[0]}: ${e}.`);
}
function X() {
	return console.warn("[actiware-statistics] the core rejected this file's Statistics input"), null;
}
const ee = "Actiware statistics could not be computed for this file; the Actiware statistics block stays empty.";
function te(e, t) {
	return e ? (t ?? []).map((e) => `Actiware setting ${e.field} = '${e.raw_label}' not recognised; using default.`) : ["No Actiware analysis settings in this file; Actiware Sleep/Wake and rest intervals are not recomputed."];
}
async function ae(e, t, a) {
	if (ne(e)) return "aw5";
	const s = e.name.toLowerCase();
	if (s.endsWith(".aw5")) return "aw5";
	if (!s.endsWith(".csv")) return null;
	if ("function" != typeof t.detectDeviceFormat) return null;
	const n = await c(e, 65536, a);
	return r = await t.detectDeviceFormat(n, e.name).catch(() => (console.warn("[native-epoch-sniff] the actours sniffer could not read this file; trying the other loaders"), null)), i = e.name, "actiware_csv" === r ? "actiware_csv" : "aw5" === r || i.toLowerCase().endsWith(".aw5") ? "aw5" : null;
	var r, i;
}
async function se(e, t, a, r, i, c = { cancel: () => {} }, d) {
	const h = (e, t) => l(t, p, e, c.signal, c.cancel), w = (e) => i && d ? {
		proposal: d.proposal,
		nights: d.proposal.rest_autoscore === o.screens ? J(e.timestampsMs.map((e) => e / 1e3), e.eventMarkerInstantsSec, e.epochSeconds, void 0, {
			start: d.nightStartHour,
			end: d.nightEndHour
		}) : []
	} : null, f = async (e) => (await h("aggregateEpochSeries", () => a.aggregateEpochSeries({
		target_seconds: s,
		series: e,
		sleep_scores: [],
		event_markers: []
	}))).series;
	if ("aw5" === t) {
		const t = ne(e) ? e.aw5Subject.downloadGuids[0] : void 0, s = ne(e) ? await e.loadAw5(c.signal) : await h("parseAw5", async () => a.parseAw5(new Uint8Array(await e.arrayBuffer())));
		if (u(c.signal, "after decoding the .AW5 database"), !s) throw new Error("This build's actours core cannot read .AW5 databases yet (needs the pin that exports parseAw5). Export the recording from Actiware as CSV instead.");
		const { warnings: n } = function(e) {
			const { status: t, reasons: a } = e.alignment;
			if ("broken" === t) throw new Error(`This .AW5 recording's samples do not line up with its clock (${a.join("; ") || "alignment broken"}), so it was not imported.`);
			return "suspect" === t ? { warnings: [`.AW5 alignment is suspect: ${a.join("; ") || "no reason given"}. Check the plot against the Actiware report.`] } : { warnings: [] };
		}(s), o = B(s, t), l = s.actiware_analysis, p = l?.statistics_input ?? s.actiware_statistics_input ?? null;
		r?.(.6, "Preparing the supported native scoring grid...");
		const d = await V(K(s, t), f, n, p);
		r?.(.8, "Actiware sleep/wake and statistics...");
		const m = l?.params ?? s.actiware_params, g = m ? {
			params: m,
			intervals: l?.intervals ?? s.series.rest_intervals ?? [],
			...l?.analysis ? { analysis: l.analysis } : {},
			...s.other_analyses ? { otherAnalyses: s.other_analyses } : {}
		} : null, _ = await Y(g?.intervals ?? [], l?.input ?? s.actiware_input ?? await R(K(s, t), a), g?.params ?? null, i, a, p, void 0, w(d));
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
				...te(m, l?.params_warnings ?? s.actiware_params_warnings ?? s.series.actiware_params_warnings),
				...Q(_.refusals),
				..._.statistics ? [] : [ee]
			],
			...o ? { gmtOffsetMinutes: o.gmt_offset_minutes } : {}
		};
	}
	const m = await h("parseEpochSeries", async () => {
		const t = new Uint8Array(await e.arrayBuffer());
		return a.parseEpochSeries(n(t, [t.buffer]), e.name);
	});
	u(c.signal, "after parsing the Actiware export"), r?.(.6, "Preparing the supported native scoring grid...");
	const g = await V(m, f, [], m.actiware_statistics_input ?? null);
	r?.(.8, "Actiware sleep/wake and statistics...");
	const _ = m.actiware_params ?? null, v = _ ? {
		params: _,
		intervals: m.rest_intervals ?? []
	} : null, k = await Y(m.rest_intervals ?? [], m.actiware_input ?? await R(m, a), _, i, a, m.actiware_statistics_input ?? null, void 0, w(g));
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
			...te(_, m.actiware_params_warnings),
			...Q(k.refusals),
			...k.statistics ? [] : [ee]
		]
	};
}
function ne(e) {
	return "aw5Subject" in e;
}
function re(e, t) {
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
export { F as _, X as a, ne as c, ae as d, O as f, E as g, M as h, L as i, q as l, D as m, J as n, re as o, j as p, G as r, x as s, Y as t, se as u, $ as v };
