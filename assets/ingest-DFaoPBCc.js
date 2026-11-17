import { G as e, Ir as t, K as a, Qn as s, R as r, Sr as n, Vt as i, er as o, nr as c, p as l, sr as u, tr as p } from "./background-jobs-BvgoU31P.js";
import { $r as w, $t as d, Jt as h, Wr as f, Yt as m, _n as g, cn as _, dn as v, gt as k, hn as S, hr as y, sn as I } from "./db-qymA_MI3.js";
import { F as W, I as A, P as b } from "./local-export-shard-worker-B9aPVtk9.js";
const T = i.filter((e) => "sleep_wake" === e.kind).map((e) => ({
	id: e.id,
	requiredSignal: e.requiredSignal,
	conformance: e.conformance,
	needsModel: "needs_model" === e.conformance,
	provisional: "provisional" === e.conformance,
	requiresTemperature: e.requiresTemperature,
	nativeEpochSeconds: e.nativeEpochSeconds,
	supportedEpochSeconds: e.supportedEpochSeconds
})), E = new Map(T.map((e) => [e.id, e]));
function R(e) {
	return E.get(e);
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
	const t = new Set(T.map((e) => e.id)), a = e.filter((e) => !t.has(e));
	if (a.length > 0) throw new Error(`LEGACY_COVERED_SLEEP_WAKE_IDS contains ids that are not sleep/wake method contracts (LinkML drift?): ${a.join(", ")}`);
})(N);
const F = new Set(N), D = T.filter((e) => !(e.needsModel || F.has(e.id) || "counts_axis_y" !== e.requiredSignal && "consensus_majority_vote" !== e.id)).map((e) => e.id);
for (const me of D) if (!w(me)) throw new Error(`unified sleep/wake method ${me} is not a declared AlgorithmRunKey (core.yaml)`);
function j(e) {
	return {
		sleepWake: null,
		conformance: "needs_30s_epoch",
		available: !1,
		reason: `${e}: 30 s-native scorer is not run on the 60 s grid (feeding it 60 s counts would miscalibrate it); its native scoring is the exploratory 30 s cube surface.`,
		elementSeconds: 30
	};
}
function $(e, t) {
	const a = R(e);
	return 30 !== a?.nativeEpochSeconds || a.supportedEpochSeconds.includes(t) ? { kind: "score60s" } : {
		kind: "gate_needs_30s_epoch",
		response: j(e)
	};
}
function P(e) {
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
function x(e, t) {
	const a = {};
	for (const [s, r] of e) {
		const e = M(r, t);
		e && (a[s] = e);
	}
	return a;
}
function C(e) {
	return "aw5" === e ? "actoglance.source.philips_actiwatch_aw5.v1" : "actoglance.source.philips_actiware_csv.v1";
}
async function O(e) {
	return function(e) {
		if (e > p()) throw new Error(s);
	}(e.size), await e.arrayBuffer();
}
async function L(e, t) {
	const a = e.timestamps_ms[0];
	if (null == a) return null;
	const s = (e.channels.find((t) => t.name === e.primary) ?? e.channels[0])?.counts ?? [], r = Array.from(s, (e) => Number.isFinite(e) && e >= 0), n = await t.roundCountStorage(Float64Array.from(s, (e, t) => r[t] ? e : 0), 0);
	return {
		start_local: (i = a / 1e3, (/* @__PURE__ */ new Date(1e3 * i)).toISOString().slice(0, 19)),
		epoch_seconds: e.epoch_seconds,
		activity: r.map((e, t) => e ? n[t] : null),
		...e.marker && e.marker.length === s.length ? { marker: e.marker } : {},
		excluded: (e.rest_intervals ?? []).filter((e) => "excluded" === e.kind)
	};
	var i;
}
async function q(e, t, a, s = 60) {
	const r = Int8Array.from(t.scores, (e) => null == e ? -1 : 0 === e ? 1 : 0);
	return e.foldSleepWakeVotes(t.startTimestamp, t.epochSeconds, r, Float64Array.from(a), s);
}
function K(e, t) {
	return e && e.length === t && t > 0 ? e : null;
}
function H(e) {
	const t = e.timestamps_ms.length, a = (t) => e.light_channels.find((e) => e.name === t)?.counts;
	return {
		white: K(e.light, t),
		red: K(a("red_light"), t),
		green: K(a("green_light"), t),
		blue: K(a("blue_light"), t)
	};
}
function U(e, t, a) {
	const s = (e) => {
		if (!e) return;
		const s = new Float64Array(a.length);
		for (let r = 0; r < a.length; r += 1) {
			const n = t.get(a[r] ?? NaN);
			s[r] = null == n ? NaN : e[n] ?? NaN;
		}
		return s.buffer;
	}, r = s(e.white), n = s(e.red), i = s(e.green), o = s(e.blue);
	return {
		...r ? { lux: r } : {},
		...n ? { redLight: n } : {},
		...i ? { greenLight: i } : {},
		...o ? { blueLight: o } : {}
	};
}
function V(e, t) {
	const a = 6e4 * (B(e, t)?.gmt_offset_minutes ?? 0);
	return 0 === a ? e.series : {
		...e.series,
		timestamps_ms: e.series.timestamps_ms.map((e) => e + a)
	};
}
function B(e, t) {
	return (void 0 === t ? void 0 : e.downloads.find((e) => e.guid === t)) ?? e.downloads.find((e) => e.is_primary) ?? e.downloads[0];
}
function G(e) {
	const t = e.channels.find((t) => t.name === e.primary) ?? e.channels[0];
	if (!t) throw new Error("The device file carries no activity count channel.");
	return t.counts;
}
var J = class extends Error {
	name = "NativeEpochRefusal";
	category = "unsupported-epoch";
	sourceEpochSeconds;
	constructor(e) {
		super(y("unsupported-epoch")), this.sourceEpochSeconds = e;
	}
};
async function Y(t, s, r = [], n = null) {
	if (!a(t.epoch_seconds)) throw new J(t.epoch_seconds);
	const i = function(e, t) {
		if (!t || t.length !== e.length) return /* @__PURE__ */ new Float64Array(0);
		const a = [];
		return t.forEach((t, s) => {
			t && a.push((e[s] ?? NaN) / 1e3);
		}), Float64Array.from(a.filter(Number.isFinite));
	}(t.timestamps_ms, t.marker), o = function(e) {
		const { timestamps_ms: t, off_wear: a, off_wear_invalid: s, epoch_seconds: r } = e;
		if (a.length !== t.length) return [];
		const n = [];
		let i = null;
		for (let o = 0; o <= t.length; o += 1) {
			const e = o < t.length && !0 === a[o] && !0 !== s?.[o], c = (t[o] ?? NaN) / 1e3;
			if (e && null === i && (i = c), !e && null !== i) {
				const e = (t[o - 1] ?? NaN) / 1e3;
				n.push({
					startTimestamp: i,
					endTimestamp: e + r
				}), i = null;
			}
		}
		return n;
	}(t), c = t.timestamps_ms.length > 0 && t.off_wear.length === t.timestamps_ms.length, l = e(t.epoch_seconds) ? t : await s(t), u = l.epoch_seconds;
	if (!e(u)) throw new J(t.epoch_seconds);
	const p = 120 === u ? [...r, "This recording keeps its native 120-second scoring grid. A 60-second view, one-minute sleep scorers, Choi nonwear and finer algorithm variants are unavailable because the source contains only two-minute sums."] : r, w = l.activity_invalid ?? [];
	return {
		epochSeconds: u,
		timestampsMs: l.timestamps_ms,
		counts: G(l),
		actiwareInvalidActivityEpochs: Uint8Array.from(w.length === l.timestamps_ms.length ? w : [], (e) => e ? 1 : 0),
		actiwareStatisticsInput: n,
		sourceEpochSeconds: t.epoch_seconds,
		eventMarkerInstantsSec: i,
		offWristPeriods: o,
		hasOffWristChannel: c,
		warnings: p,
		light: H(l),
		actiwareIntervals: [],
		actiwareSleepWake: null,
		actiwareStatistics: [],
		actiwareRecording: null,
		actiwareWakeThreshold: null,
		actiwareRestProposal: null,
		actiwareIntervalsRefusal: null
	};
}
function z(e) {
	const { proposal: t, nights: a } = e ?? {
		proposal: v,
		nights: []
	}, s = t.rest_autoscore === f.screens ? a : [];
	return JSON.stringify([
		t.use_saved_rest_intervals,
		t.rest_autoscore,
		s.map(({ timestamps: e, activity_counts: t, sleep_scores: a, ...s }) => s)
	]);
}
function Q(e, t, a, s = /* @__PURE__ */ new Map(), r = {}) {
	const n = /* @__PURE__ */ new Map();
	for (const o of e) {
		const e = (/* @__PURE__ */ new Date(1e3 * (o - 43200))).toISOString().slice(0, 10);
		let t = n.get(e);
		t || n.set(e, t = []), t.push(o);
	}
	const i = Array.from(t);
	return [...n].map(([e, t]) => {
		const n = Date.parse(`${e}T00:00:00Z`) / 1e3, o = s.get(e);
		return S({
			analysisDate: e,
			epochLengthSeconds: a,
			timestamps: t,
			activityCounts: [],
			sleepScores: [],
			eventMarkerTimestamps: i.filter((e) => e >= n + 43200 && e < n + 151200),
			diaryBedTime: k(o, "diary_in_bed_time"),
			diaryOnsetTime: k(o, "diary_onset_time"),
			diaryOutBedTime: k(o, "diary_out_of_bed_time"),
			diaryWakeTime: k(o, "diary_wake_time"),
			nightStartHour: g(r.start),
			nightEndHour: g(r.end)
		});
	});
}
async function Z(e, t, a, s, r, n, i, o) {
	i?.throwIfAborted();
	const c = a ? d(a, m(a, s, e)) : null, l = !a || !c || _(a, c), u = l || null !== a && null !== c && !I(a, c) ? e.filter((e) => "rest" === e.kind) : [], p = l ? e.filter((e) => "sleep" === e.kind) : [], w = {
		sleepWake: null,
		wakeThreshold: null,
		intervals: null
	}, f = t && c && r.actiwareSleepWake ? await r.actiwareSleepWake(t, c).catch((e) => (w.sleepWake = X(e), null)) : null;
	i?.throwIfAborted();
	const g = a ? h(a, s, e) : [], v = t && c && f ? {
		startTimestamp: A(t.start_local),
		epochSeconds: t.epoch_seconds,
		scores: f,
		params: c,
		...g.length > 0 ? { paradigmDefaults: g } : {}
	} : null, k = t && c && r.actiwareWakeThreshold ? await r.actiwareWakeThreshold(t, c).catch((e) => (w.wakeThreshold = X(e), null)) : null;
	i?.throwIfAborted();
	let S = null;
	if (!(!1 !== o?.proposal.use_saved_rest_intervals && u.length > 0 && p.length > 0) && t && c && r.actiwareIntervals) try {
		S = await r.actiwareIntervals(t, u, c, ...o ? [o] : []);
	} catch (N) {
		w.intervals = X(N);
	}
	i?.throwIfAborted();
	const y = S ?? {
		intervals: [...e],
		generated: !1
	}, T = y.intervals.filter((e) => "rest" === e.kind || "sleep" === e.kind), E = n && f ? {
		...n,
		sleep_wake: f
	} : n, R = E && r.actiwareIntervalStatistics && T.length > 0 ? await r.actiwareIntervalStatistics({
		...E,
		intervals: T
	}).then((e) => W(e ?? [])).catch(ae) : [];
	return i?.throwIfAborted(), {
		intervals: b(y.intervals, y.generated),
		sleepWake: v,
		statistics: R,
		statisticsInput: E,
		wakeThreshold: k ?? null,
		restProposal: o ? {
			key: z(o),
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
function re(e, t) {
	return e ? (t ?? []).map((e) => `Actiware setting ${e.field} = '${e.raw_label}' not recognised; using default.`) : ["No Actiware analysis settings in this file; Actiware Sleep/Wake and rest intervals are not recomputed."];
}
async function ne(e, t, a) {
	if (oe(e)) return "aw5";
	const s = e.name.toLowerCase();
	if (s.endsWith(".aw5")) return "aw5";
	if (!s.endsWith(".csv")) return null;
	if ("function" != typeof t.detectDeviceFormat) return null;
	const r = await n(e, 65536, a);
	return i = await t.detectDeviceFormat(r, e.name).catch(() => (console.warn("[native-epoch-sniff] the actours sniffer could not read this file; trying the other loaders"), null)), o = e.name, "actiware_csv" === i ? "actiware_csv" : "aw5" === i || o.toLowerCase().endsWith(".aw5") ? "aw5" : null;
	var i, o;
}
async function ie(e, a, s, n, i, l = { cancel: () => {} }, p) {
	const w = (e, t) => u(t, o, e, l.signal, l.cancel), d = (e) => i && p ? {
		proposal: p.proposal,
		nights: p.proposal.rest_autoscore === f.screens ? Q(e.timestampsMs.map((e) => e / 1e3), e.eventMarkerInstantsSec, e.epochSeconds, void 0, {
			start: p.nightStartHour,
			end: p.nightEndHour
		}) : []
	} : null, h = async (e) => (await w("aggregateEpochSeries", () => s.aggregateEpochSeries({
		target_seconds: r,
		series: e,
		sleep_scores: [],
		event_markers: []
	}))).series;
	if ("aw5" === a) {
		const t = oe(e) ? e.aw5Subject.downloadGuids[0] : void 0, a = oe(e) ? await e.loadAw5(l.signal) : await w("parseAw5", async () => s.parseAw5(new Uint8Array(await O(e))));
		if (c(l.signal, "after decoding the .AW5 database"), !a) throw new Error("This build's actours core cannot read .AW5 databases yet (needs the pin that exports parseAw5). Export the recording from Actiware as CSV instead.");
		const { warnings: r } = function(e) {
			const { status: t, reasons: a } = e.alignment;
			if ("broken" === t) throw new Error(`This .AW5 recording's samples do not line up with its clock (${a.join("; ") || "alignment broken"}), so it was not imported.`);
			return "suspect" === t ? { warnings: [`.AW5 alignment is suspect: ${a.join("; ") || "no reason given"}. Check the plot against the Actiware report.`] } : { warnings: [] };
		}(a), o = B(a, t), u = a.actiware_analysis, p = u?.statistics_input ?? a.actiware_statistics_input ?? null;
		n?.(.6, "Preparing the supported native scoring grid...");
		const f = await Y(V(a, t), h, r, p);
		n?.(.8, "Actiware sleep/wake and statistics...");
		const m = u?.params ?? a.actiware_params, g = m ? {
			params: m,
			intervals: u?.intervals ?? a.series.rest_intervals ?? [],
			...u?.analysis ? { analysis: u.analysis } : {},
			...a.other_analyses ? { otherAnalyses: a.other_analyses } : {}
		} : null, _ = await Z(g?.intervals ?? [], u?.input ?? a.actiware_input ?? await L(V(a, t), s), g?.params ?? null, i, s, p, void 0, d(f));
		return {
			...f,
			actiwareRestProposal: _.restProposal,
			actiwareIntervalsRefusal: _.refusals.intervals,
			actiwareStatisticsInput: _.statisticsInput,
			actiwareIntervals: _.intervals,
			actiwareSleepWake: _.sleepWake,
			actiwareStatistics: _.statistics ?? [],
			actiwareRecording: g,
			actiwareWakeThreshold: _.wakeThreshold,
			warnings: [
				...f.warnings,
				...re(m, u?.params_warnings ?? a.actiware_params_warnings ?? a.series.actiware_params_warnings),
				...te(_.refusals),
				..._.statistics ? [] : [se]
			],
			...o ? { gmtOffsetMinutes: o.gmt_offset_minutes } : {}
		};
	}
	const m = await w("parseEpochSeries", async () => {
		const a = new Uint8Array(await O(e));
		return s.parseEpochSeries(t(a, [a.buffer]), e.name);
	});
	c(l.signal, "after parsing the Actiware export"), n?.(.6, "Preparing the supported native scoring grid...");
	const g = await Y(m, h, [], m.actiware_statistics_input ?? null);
	n?.(.8, "Actiware sleep/wake and statistics...");
	const _ = m.actiware_params ?? null, v = _ ? {
		params: _,
		intervals: m.rest_intervals ?? []
	} : null, k = await Z(m.rest_intervals ?? [], m.actiware_input ?? await L(m, s), _, i, s, m.actiware_statistics_input ?? null, void 0, d(g));
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
			...re(_, m.actiware_params_warnings),
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
async function le(e, t = l()) {
	return t.actiwareFileData.get(e);
}
async function ue(e, t) {
	await e.actiwareFileData.put(t);
}
async function pe(e, t, a, s) {
	await e.actiwareFileData.update(t, null === s ? {
		actiwareIntervals: a,
		actiwareStatisticsNeedsRecompute: !0
	} : {
		actiwareIntervals: a,
		actiwareStatistics: s,
		actiwareStatisticsNeedsRecompute: !1
	});
}
async function we(e, t, a, s) {
	await e.actiwareFileData.update(t, {
		actiwareStatistics: a,
		actiwareStatisticsNeedsRecompute: s
	});
}
async function de(e, t) {
	await e.actiwareFileData.update(t, { actiwareStatisticsNeedsRecompute: !0 });
}
function he(e) {
	return {
		startTimestamp: e.startTimestamp,
		epochSeconds: e.epochSeconds,
		params: e.params,
		...e.paradigmDefaults ? { paradigmDefaults: e.paradigmDefaults } : {},
		scores: Int8Array.from(e.scores, (e) => e ?? -1).buffer
	};
}
async function fe({ fileId: e, native: t, recordingWakeThreshold: a, db: s, beforeWrite: r }) {
	t?.actiwareStatisticsInput && (await r(), await s.actiwareStatisticsInputs.put({
		fileId: e,
		input: t.actiwareStatisticsInput
	})), t && (t.actiwareIntervals.length > 0 || t.actiwareSleepWake || t.actiwareStatistics.length > 0 || t.actiwareRecording) && (await r(), await ue(s, {
		fileId: e,
		...t.actiwareIntervals.length > 0 ? { actiwareIntervals: t.actiwareIntervals } : {},
		...t.actiwareSleepWake ? { actiwareSleepWake: he(t.actiwareSleepWake) } : {},
		...t.actiwareStatistics.length > 0 ? { actiwareStatistics: t.actiwareStatistics } : {},
		...t.actiwareRecording ? { actiwareRecording: t.actiwareRecording } : {},
		...null != t.actiwareWakeThreshold ? { actiwareWakeThreshold: t.actiwareWakeThreshold } : {},
		...t.actiwareRestProposal ? { actiwareRestProposal: t.actiwareRestProposal } : {},
		...t.actiwareIntervalsRefusal ? { actiwareIntervalsRefusal: t.actiwareIntervalsRefusal } : {},
		...null != a ? { oakleyThreshold: a } : {}
	}));
}
export { R as C, P as S, M as T, O as _, ue as a, D as b, Z as c, ae as d, ce as f, ie as g, U as h, de as i, Q as l, oe as m, fe as n, pe as o, q as p, le as r, we as s, he as t, z as u, ne as v, $ as w, x, C as y };
