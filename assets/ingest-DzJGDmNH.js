import { J as e, Tr as t, V as a, Wt as s, Y as r, ar as n, ir as i, p as o, rr as c, tr as l, ur as u, zr as p } from "./background-jobs-C4kUffcM.js";
import { Gt as w, Kt as d, Vr as h, Xr as f, Xt as m, an as g, cn as _, fn as v, fr as k, in as y, mn as S, pt as A } from "./db-P0fJzp73.js";
import { F as W, I, L as b, V as T, z as E } from "./local-export-shard-worker-DqLh-J6Z.js";
const R = s.filter((e) => "sleep_wake" === e.kind).map((e) => ({
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
const j = [
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
})(j);
const D = new Set(j), P = R.filter((e) => !(e.needsModel || D.has(e.id) || "counts_axis_y" !== e.requiredSignal && "consensus_majority_vote" !== e.id)).map((e) => e.id);
for (const _e of P) if (!f(_e)) throw new Error(`unified sleep/wake method ${_e} is not a declared AlgorithmRunKey (core.yaml)`);
function M(e) {
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
		response: M(e)
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
	for (const [s, r] of e) {
		const e = C(r, t);
		e && (a[s] = e);
	}
	return a;
}
function O(e) {
	return "aw5" === e ? "actoglance.source.philips_actiwatch_aw5.v1" : "actoglance.source.philips_actiware_csv.v1";
}
async function V(e) {
	return function(e) {
		if (e > i()) throw new Error(l);
	}(e.size), await e.arrayBuffer();
}
async function q(e, t) {
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
async function K(e, t, a, s = 60) {
	const r = Int8Array.from(t.scores, (e) => null == e ? -1 : 0 === e ? 1 : 0);
	return e.foldSleepWakeVotes(t.startTimestamp, t.epochSeconds, r, Float64Array.from(a), s);
}
function H(e, t) {
	return e && e.length === t && t > 0 ? e : null;
}
function U(e) {
	const t = e.timestamps_ms.length, a = (t) => e.light_channels.find((e) => e.name === t)?.counts;
	return {
		white: H(e.light, t),
		red: H(a("red_light"), t),
		green: H(a("green_light"), t),
		blue: H(a("blue_light"), t)
	};
}
function z(e, t, a) {
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
function J(e) {
	const t = e.channels.find((t) => t.name === e.primary) ?? e.channels[0];
	if (!t) throw new Error("The device file carries no activity count channel.");
	return t.counts;
}
var X = class extends Error {
	name = "NativeEpochRefusal";
	category = "unsupported-epoch";
	sourceEpochSeconds;
	constructor(e) {
		super(k("unsupported-epoch")), this.sourceEpochSeconds = e;
	}
};
async function Y(t, a, s = [], n = null) {
	if (!r(t.epoch_seconds)) throw new X(t.epoch_seconds);
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
	}(t), c = t.timestamps_ms.length > 0 && t.off_wear.length === t.timestamps_ms.length, l = e(t.epoch_seconds) ? t : await a(t), u = l.epoch_seconds;
	if (!e(u)) throw new X(t.epoch_seconds);
	const p = 120 === u ? [...s, "This recording keeps its native 120-second scoring grid. A 60-second view, one-minute sleep scorers, Choi nonwear and finer algorithm variants are unavailable because the source contains only two-minute sums."] : s, w = l.activity_invalid ?? [];
	return {
		epochSeconds: u,
		timestampsMs: l.timestamps_ms,
		counts: J(l),
		actiwareInvalidActivityEpochs: Uint8Array.from(w.length === l.timestamps_ms.length ? w : [], (e) => e ? 1 : 0),
		actiwareStatisticsInput: n,
		sourceEpochSeconds: t.epoch_seconds,
		eventMarkerInstantsSec: i,
		offWristPeriods: o,
		hasOffWristChannel: c,
		warnings: p,
		light: U(l),
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
		proposal: _,
		nights: []
	}, s = t.rest_autoscore === h.screens ? a : [];
	return JSON.stringify([
		t.use_saved_rest_intervals,
		t.rest_autoscore,
		s.map(({ timestamps: e, activity_counts: t, sleep_scores: a, ...s }) => s)
	]);
}
async function Z(e, t, a, s, r = /* @__PURE__ */ new Map(), n = {}) {
	const i = Array.from(t), o = await T(i, e), c = /* @__PURE__ */ new Map();
	for (const u of i) {
		const e = o(u);
		let t = c.get(e);
		t || c.set(e, t = []), t.push(u);
	}
	const l = Array.from(a);
	return Promise.all([...c].map(async ([t, a]) => {
		const { start: i, end: o } = await E(t, void 0, void 0, e), c = r.get(t);
		return v({
			analysisDate: t,
			epochLengthSeconds: s,
			timestamps: a,
			activityCounts: [],
			sleepScores: [],
			eventMarkerTimestamps: l.filter((e) => e >= i && e < o + 21600),
			diaryBedTime: A(c, "diary_in_bed_time"),
			diaryOnsetTime: A(c, "diary_onset_time"),
			diaryOutBedTime: A(c, "diary_out_of_bed_time"),
			diaryWakeTime: A(c, "diary_wake_time"),
			nightStartHour: S(n.start),
			nightEndHour: S(n.end)
		});
	}));
}
async function ee(e, t, a, s, r, n, i, o) {
	i?.throwIfAborted();
	const c = a ? m(a, d(a, s, e)) : null, l = !a || !c || g(a, c), u = l || null !== a && null !== c && !y(a, c) ? e.filter((e) => "rest" === e.kind) : [], p = l ? e.filter((e) => "sleep" === e.kind) : [], h = {
		sleepWake: null,
		wakeThreshold: null,
		intervals: null
	}, f = t && c && r.actiwareSleepWake ? await r.actiwareSleepWake(t, c).catch((e) => (h.sleepWake = te(e), null)) : null;
	i?.throwIfAborted();
	const _ = a ? w(a, s, e) : [], v = t && c && f ? {
		startTimestamp: b(t.start_local),
		epochSeconds: t.epoch_seconds,
		scores: f,
		params: c,
		..._.length > 0 ? { paradigmDefaults: _ } : {}
	} : null, k = t && c && r.actiwareWakeThreshold ? await r.actiwareWakeThreshold(t, c).catch((e) => (h.wakeThreshold = te(e), null)) : null;
	i?.throwIfAborted();
	let S = null;
	if (!(!1 !== o?.proposal.use_saved_rest_intervals && u.length > 0 && p.length > 0) && t && c && r.actiwareIntervals) try {
		S = await r.actiwareIntervals(t, u, c, ...o ? [o] : []);
	} catch (N) {
		h.intervals = te(N);
	}
	i?.throwIfAborted();
	const A = S ?? {
		intervals: [...e],
		generated: !1
	}, T = A.intervals.filter((e) => "rest" === e.kind || "sleep" === e.kind), E = n && f ? {
		...n,
		sleep_wake: f
	} : n, R = E && r.actiwareIntervalStatistics && T.length > 0 ? await r.actiwareIntervalStatistics({
		...E,
		intervals: T
	}).then((e) => I(e ?? [])).catch(re) : [];
	return i?.throwIfAborted(), {
		intervals: W(A.intervals, A.generated),
		sleepWake: v,
		statistics: R,
		statisticsInput: E,
		wakeThreshold: k ?? null,
		restProposal: o ? {
			key: Q(o),
			...S?.nights ? { notes: Object.fromEntries(S.nights.map((e) => [e.analysis_date, e.note])) } : {}
		} : null,
		refusals: h
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
function re() {
	return console.warn("[actiware-statistics] the core rejected this file's Statistics input"), null;
}
const ne = "Actiware statistics could not be computed for this file; the Actiware statistics block stays empty.";
function ie(e, t) {
	return e ? (t ?? []).map((e) => `Actiware setting ${e.field} = '${e.raw_label}' not recognised; using default.`) : ["No Actiware analysis settings in this file; Actiware Sleep/Wake and rest intervals are not recomputed."];
}
async function oe(e, a, s) {
	if (le(e)) return "aw5";
	const r = e.name.toLowerCase();
	if (r.endsWith(".aw5")) return "aw5";
	if (!r.endsWith(".csv")) return null;
	if ("function" != typeof a.detectDeviceFormat) return null;
	const n = await t(e, 65536, s);
	return i = await a.detectDeviceFormat(n, e.name).catch(() => (console.warn("[native-epoch-sniff] the actours sniffer could not read this file; trying the other loaders"), null)), o = e.name, "actiware_csv" === i ? "actiware_csv" : "aw5" === i || o.toLowerCase().endsWith(".aw5") ? "aw5" : null;
	var i, o;
}
async function ce(e, t, s, r, i, o = { cancel: () => {} }, l) {
	const w = (e, t) => u(t, c, e, o.signal, o.cancel), d = async (e) => i && l ? {
		proposal: l.proposal,
		nights: l.proposal.rest_autoscore === h.screens ? await Z(s, e.timestampsMs.map((e) => e / 1e3), e.eventMarkerInstantsSec, e.epochSeconds, void 0, {
			start: l.nightStartHour,
			end: l.nightEndHour
		}) : []
	} : null, f = async (e) => (await w("aggregateEpochSeries", () => s.aggregateEpochSeries({
		target_seconds: a,
		series: e,
		sleep_scores: [],
		event_markers: []
	}))).series;
	if ("aw5" === t) {
		const t = le(e) ? e.aw5Subject.downloadGuids[0] : void 0, a = le(e) ? await e.loadAw5(o.signal) : await w("parseAw5", async () => s.parseAw5(new Uint8Array(await V(e))));
		if (n(o.signal, "after decoding the .AW5 database"), !a) throw new Error("This build's actours core cannot read .AW5 databases yet (needs the pin that exports parseAw5). Export the recording from Actiware as CSV instead.");
		const { warnings: c } = function(e) {
			const { status: t, reasons: a } = e.alignment;
			if ("broken" === t) throw new Error(`This .AW5 recording's samples do not line up with its clock (${a.join("; ") || "alignment broken"}), so it was not imported.`);
			return "suspect" === t ? { warnings: [`.AW5 alignment is suspect: ${a.join("; ") || "no reason given"}. Check the plot against the Actiware report.`] } : { warnings: [] };
		}(a), l = G(a, t), u = a.actiware_analysis, p = u?.statistics_input ?? a.actiware_statistics_input ?? null;
		r?.(.6, "Preparing the supported native scoring grid...");
		const h = await Y(B(a, t), f, c, p);
		r?.(.8, "Actiware sleep/wake and statistics...");
		const m = u?.params ?? a.actiware_params, g = m ? {
			params: m,
			intervals: u?.intervals ?? a.series.rest_intervals ?? [],
			...u?.analysis ? { analysis: u.analysis } : {},
			...a.other_analyses ? { otherAnalyses: a.other_analyses } : {}
		} : null, _ = await ee(g?.intervals ?? [], u?.input ?? a.actiware_input ?? await q(B(a, t), s), g?.params ?? null, i, s, p, void 0, await d(h));
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
				...ie(m, u?.params_warnings ?? a.actiware_params_warnings ?? a.series.actiware_params_warnings),
				...se(_.refusals),
				..._.statistics ? [] : [ne]
			],
			...l ? { gmtOffsetMinutes: l.gmt_offset_minutes } : {}
		};
	}
	const m = await w("parseEpochSeries", async () => {
		const t = new Uint8Array(await V(e));
		return s.parseEpochSeries(p(t, [t.buffer]), e.name);
	});
	n(o.signal, "after parsing the Actiware export"), r?.(.6, "Preparing the supported native scoring grid...");
	const g = await Y(m, f, [], m.actiware_statistics_input ?? null);
	r?.(.8, "Actiware sleep/wake and statistics...");
	const _ = m.actiware_params ?? null, v = _ ? {
		params: _,
		intervals: m.rest_intervals ?? []
	} : null, k = await ee(m.rest_intervals ?? [], m.actiware_input ?? await q(m, s), _, i, s, m.actiware_statistics_input ?? null, void 0, await d(g));
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
			...k.statistics ? [] : [ne]
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
async function pe(e, t = o()) {
	return t.actiwareFileData.get(e);
}
async function we(e, t) {
	await e.actiwareFileData.put(t);
}
async function de(e, t, a, s) {
	const r = {
		actiwareIntervals: a.intervals,
		actiwareRemovedRests: a.removedRests
	};
	await e.actiwareFileData.update(t, null === s ? {
		...r,
		actiwareStatisticsNeedsRecompute: !0
	} : {
		...r,
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
async function ge({ fileId: e, native: t, recordingWakeThreshold: a, db: s, beforeWrite: r }) {
	t?.actiwareStatisticsInput && (await r(), await s.actiwareStatisticsInputs.put({
		fileId: e,
		input: t.actiwareStatisticsInput
	})), t && (t.actiwareIntervals.length > 0 || t.actiwareSleepWake || t.actiwareStatistics.length > 0 || t.actiwareRecording) && (await r(), await we(s, {
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
export { F as C, $ as S, C as T, V as _, we as a, P as b, ee as c, re as d, ue as f, ce as g, z as h, fe as i, Z as l, le as m, ge as n, de as o, K as p, pe as r, he as s, me as t, Q as u, oe as v, x as w, L as x, O as y };
