import { Kt as e, Pn as t, Pt as a, Qt as n, Wt as r, Yt as s, f as i, nn as o, s as l, wn as c } from "./schema-B6UkEiVJ.js";
import { i as d, r as u, s as m } from "./workers-CrU4fDAf.js";
import { J as g, at as f, d as p, k as h, t as w, u as y } from "./workspace-db-DU4CzwX1.js";
import { l as v, r as b, u as S } from "./content-hash-CZ-UAlQR.js";
import { c as I, f as _, h as R, n as C, s as M, u as G, y as A } from "./background-jobs-DLr2X4eX.js";
import { A as D, D as N, T as x, V as T, c as F, i as k, n as z, r as E, s as U, w as P, z as O } from "./local-data-source-kXsqXoes.js";
import { a as L, i as j } from "./project-revision-CT6PGNkq.js";
import { $ as V, G as B, J as H, O as $, Q as W, V as Y, X, Y as q, Yt as Z, Z as K, c as Q, en as J, f as ee, g as te, h as ae, ht as ne, k as re, l as se, m as ie, o as oe, q as le, r as ce, s as de, u as ue, ut as me, w as ge, y as fe } from "./store-BrZppDwj.js";
import { tt as pe } from "./per-source-defaults-BIydRzBy.js";
import { r as he, t as we } from "./audit-log-ltTKXn8E.js";
import { T as ye, _ as ve, a as be, k as Se, s as Ie } from "./local-nonwear-unified-QTOZtx7w.js";
import { _ as _e, p as Re } from "./diary-local-import-contract-BWll-Z5M.js";
import { a as Ce } from "./csv-column-mapping-BSSY09yh.js";
import { a as Me, g as Ge, h as Ae, m as De, n as Ne, o as xe, p as Te, s as Fe, t as ke, v as ze } from "./ggir-results-import-7vTdWIOr.js";
import { t as Ee } from "./file-sensor-location-D3poeAvf.js";
import { F as Ue, M as Pe, O as Oe, P as Le } from "./local-export-shard-worker-Da7c2eY6.js";
import { i as je, n as Ve, r as Be } from "./local-provenance-T3RqRw_U.js";
import { i as He, n as $e } from "./lstm-model-manager-BzQLvv5T.js";
const We = f((e) => ({
	storageFull: !1,
	lastOperation: null,
	lastMessage: null,
	reportStorageFull: (t, a) => e({
		storageFull: !0,
		lastOperation: t,
		lastMessage: a ?? null
	}),
	clearStorageFull: () => e({
		storageFull: !1,
		lastOperation: null,
		lastMessage: null
	})
}));
function Ye() {
	return [
		"Could not identify file format.",
		"Use Data Settings > CSV Import for mapped vendor, GGIR, MIMS, or generic activity CSV exports.",
		"Native local ingest supports ActiGraph CSV/GT3X, GENEActiv raw CSV/.bin, GGIR meta RData, NHANES PAX80 archives, and recognized generic CSV mappings.",
		"Condor ActLumus/ActTrust TXT files require the server parser today."
	].join(" ");
}
function Xe(e, t) {
	ne(e) && We.getState().reportStorageFull(t, "Browser storage quota was exceeded while saving local results.");
}
function qe(e) {
	return "the local model runtime or its input contract rejected the operation";
}
function Ze(e) {
	return `LSTM ONNX sleep/wake scoring could not be computed for this raw file${e ? ` because ${e}` : ""}. Count-based scoring is intact.`;
}
function Ke(e) {
	if (!e || 0 === e.length) return "";
	let t = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, n = 0;
	for (const r of e) t = Math.min(t, r), a = Math.max(a, r), n += r;
	return ` (sleep probability min=${t.toFixed(3)}, mean=${(n / e.length).toFixed(3)}, max=${a.toFixed(3)})`;
}
function Qe(e, t) {
	if (!e || 0 === e.length) return null;
	let a = 0;
	for (const n of e) a += n ? 1 : 0;
	return 0 === a ? `LSTM ONNX sleep/wake scoring produced an all-wake result${Ke(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : a === e.length ? `LSTM ONNX sleep/wake scoring produced an all-sleep result${Ke(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : null;
}
function Je(e) {
	return /[",\r\n]/.test(e) ? `"${e.replace(/"/g, "\"\"")}"` : e;
}
function et(e, t) {
	if (!t) return null;
	const a = Ce(t), n = e.findIndex((e) => Ce(e) === a);
	return n >= 0 ? n : null;
}
function tt(e) {
	const t = (e ?? "").trim().toLowerCase();
	return "" === t || [
		"0",
		"false",
		"no",
		"n",
		"none",
		"nan",
		"na"
	].includes(t) ? 0 : 1;
}
function at(e, t) {
	if (e.length !== t.length) return console.warn("[local-processing] Event-marker column dropped: mapped row count differs from the parsed epoch count."), /* @__PURE__ */ new Float64Array(0);
	const a = [];
	for (let n = 0; n < e.length; n += 1) {
		const r = t[n];
		1 === e[n] && null != r && Number.isFinite(r) && a.push(r / 1e3);
	}
	return Float64Array.from(a.sort((e, t) => e - t));
}
function nt(e, t, a) {
	const n = new Uint8Array(e.length);
	let r = 0;
	for (const s of Array.from(t)) {
		for (; r + 1 < e.length && (e[r + 1] ?? 1 / 0) <= s;) r += 1;
		const t = e[r];
		null != t && s >= t && s < t + a && (n[r] = 1);
	}
	return n;
}
function rt(e, t) {
	const a = Date.parse(`${t}T00:00:00Z`) / 1e3, n = [];
	for (const r of Array.from(e)) r >= a && r < a + 86400 && n.push(r);
	return Float64Array.from(n);
}
async function st(t, n, i, o) {
	_(o, "standardizing mapped CSV");
	const l = s(await t.text());
	_(o, "standardizing mapped CSV");
	const c = e(l);
	if (c.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
	const d = c.records, u = d[n]?.text;
	if (!u) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
	const m = a(u), g = r(u, m), f = E(i, g);
	if (f.length > 0) throw new Error(T(f));
	const p = et(g, i.datetime_column), h = et(g, i.date_column), w = et(g, i.time_column), y = et(g, i.activity_column), v = et(g, i.axis_x_column), b = et(g, i.axis_z_column), S = et(g, i.vector_magnitude_column), R = [
		{
			header: "ENMO",
			idx: et(g, i.enmo_column)
		},
		{
			header: "AngleZ",
			idx: et(g, i.anglez_column)
		},
		{
			header: "GGIR_SIB",
			idx: et(g, i.ggir_sib_column)
		},
		{
			header: "GGIR_NONWEAR",
			idx: et(g, i.ggir_nonwear_column)
		},
		{
			header: "MIMS_UNIT",
			idx: et(g, i.mims_unit_column)
		},
		{
			header: "MIMS_UNIT_X",
			idx: et(g, i.mims_unit_x_column)
		},
		{
			header: "MIMS_UNIT_Y",
			idx: et(g, i.mims_unit_y_column)
		},
		{
			header: "MIMS_UNIT_Z",
			idx: et(g, i.mims_unit_z_column)
		}
	].filter((e) => null !== e.idx), C = et(g, i.event_marker_column), M = null === C ? null : [];
	if (null === y) throw new Error("Column-mapped CSV mapping requires an activity/counts column before import.");
	if (null === p && (null === h || null === w)) throw new Error("Column-mapped CSV mapping requires Date/time, or both Date and Time, before import.");
	const G = null !== p ? ["Datetime", "Axis1"] : [
		"Date",
		"Time",
		"Axis1"
	];
	null !== v && G.push("Axis2"), null !== b && G.push("Axis3"), null !== S && G.push("Vector Magnitude"), G.push(...R.map((e) => e.header));
	const A = [G.join(",")];
	for (let e = n + 1; e < d.length; e += 1) {
		(e - n - 1) % 1e3 == 0 && (await I(), _(o, "standardizing mapped CSV"));
		const t = d[e];
		if (!t.text.trim()) continue;
		const a = r(t.text, m), s = null !== p ? [a[p] ?? "", a[y] ?? ""] : [
			null === h ? "" : a[h] ?? "",
			null === w ? "" : a[w] ?? "",
			a[y] ?? ""
		];
		null !== v && s.push(a[v] ?? ""), null !== b && s.push(a[b] ?? ""), null !== S && s.push(a[S] ?? "");
		for (const e of R) s.push(a[e.idx] ?? "");
		M && null !== C && M.push(tt(a[C])), A.push(s.map(Je).join(","));
	}
	const D = new Blob([`${A.join("\n")}\n`], { type: "text/csv" });
	return {
		name: t.name,
		lastModified: t.lastModified,
		size: D.size,
		arrayBuffer: () => D.arrayBuffer(),
		text: () => D.text(),
		slice: (e, t) => D.slice(e, t),
		...M ? { eventMarkerRows: Uint8Array.from(M) } : {}
	};
}
function it(e, t, a, n) {
	if (null !== t) return e[t] ?? "";
	const r = null === a ? "" : e[a] ?? "", s = null === n ? "" : e[n] ?? "";
	return `${r.trim()} ${s.trim()}`;
}
function ot(e, t) {
	if (null === t) return NaN;
	const a = e[t]?.trim() ?? "";
	if (!a) return NaN;
	const n = Number(a);
	return Number.isFinite(n) ? n : NaN;
}
function lt(e, t) {
	return e.length === t && e.some((e) => Number.isFinite(e)) ? e : void 0;
}
function ct(e, t) {
	const a = e.headerBodySite ?? e.bodySite, n = e.headerLaterality ?? e.laterality;
	return {
		...e,
		...t,
		...e.laterality ? { laterality: e.laterality } : {},
		placementSourceReference: "study_default",
		...a ? { headerBodySite: a } : {},
		...n ? { headerLaterality: n } : {}
	};
}
async function dt(e, t) {
	return await _e((t) => t.recordingFacts(e), new Re(t)) ?? {};
}
async function ut(e, t, a, n) {
	a?.throwIfAborted();
	const r = await v(e, 65536, n);
	a?.throwIfAborted();
	const s = new TextDecoder("utf-8", { fatal: !1 }).decode(r);
	for (const i of [/measurement frequency\s*[,:\t]\s*(\d+)/i, /sample rate(?:\s*hz)?\s*[,:\t]\s*(\d+)/i]) {
		const e = i.exec(s);
		if (e && e[1]) {
			const t = Number.parseInt(e[1], 10);
			if (Number.isFinite(t) && t > 0) return t;
		}
	}
	return A[t];
}
async function mt(e, t, a, n) {
	if (t?.throwIfAborted(), function(e) {
		const t = e.name.toLowerCase();
		return t.endsWith(".rdata") || t.endsWith(".rda") || t.endsWith(".aw5") || "aw5Subject" in e;
	}(e)) return {};
	const r = Math.max(65536, 2048);
	let s;
	try {
		s = await v(e, r, n);
	} catch {
		return {};
	}
	if (t?.throwIfAborted(), e.name.toLowerCase().endsWith(".gt3x")) {
		const e = function(e) {
			const t = new DataView(e.buffer, e.byteOffset, e.byteLength);
			let a = 0;
			for (; a + 30 <= e.byteLength;) {
				if (67324752 !== t.getUint32(a, !0)) return null;
				const n = t.getUint16(a + 8, !0), r = t.getUint32(a + 18, !0), s = t.getUint16(a + 26, !0), i = a + 30 + s + t.getUint16(a + 28, !0);
				if (i > e.byteLength) return null;
				const o = i + r;
				if (new TextDecoder().decode(e.subarray(a + 30, a + 30 + s)).toLowerCase().endsWith("info.txt")) return 0 !== n || o > e.byteLength ? null : new TextDecoder("utf-8", { fatal: !1 }).decode(e.subarray(i, o));
				if (0 === r) return null;
				a = o;
			}
			return null;
		}(s);
		return null === e ? {} : await dt(e, a);
	}
	return await dt(new TextDecoder("utf-8", { fatal: !1 }).decode(s), a);
}
function gt(e) {
	return `stored_nonwear_mask:${e}`;
}
Object.freeze([]);
const ft = {
	temperature_epoch_stream: (e) => null != e.temperature && ve(new Float64Array(e.temperature)),
	sleep_wake_epoch_stream: (e) => null != e.algorithmResults?.[n.ACTIWARE_SLEEP_WAKE],
	device_wear_state_evidence_stream: (e) => !0 === e.actiwareOffWristChannel
};
function pt(e) {
	const t = [];
	for (const [a, n] of Object.entries(ft)) for (const r of e) if (n(r)) {
		t.push(a);
		break;
	}
	for (const a of Ie) e.some((e) => null != ye(e, a, "")) && t.push(gt(a));
	return t;
}
async function ht(e, t, a) {
	const n = [];
	for (const i of t) {
		const t = Ue(e, i);
		t && n.push(t.wire);
	}
	if (0 === n.length) return [];
	const { request: r, transfer: s } = Le(n);
	return (await a.computeCircadian(m(r, s))).day_summaries.filter((e) => e.has_signal).map((e) => e.analysis_date);
}
function wt(e) {
	return e instanceof Error ? e : /* @__PURE__ */ new Error("Local ingest lease renewal failed.");
}
const yt = Math.max(1e3, Math.floor(oe / 4));
async function vt(e) {
	void 0 !== e.heartbeatId && (clearInterval(e.heartbeatId), delete e.heartbeatId), await e.heartbeatPending, delete e.heartbeatPending;
}
async function bt(e, t, a) {
	const n = ce.getState(), r = {
		...e.recording,
		...t.recording
	}, s = e.placement ?? {
		bodySite: n.sensorLocation,
		laterality: n.participantLaterality
	}, i = await ue({
		...t,
		...t.ggirPart2Config ? { ggirNonwearDetector: await J(t.ggirPart2Config.csvText, a ?? C(e.signal)) } : {},
		...e.ingestProvenance ? { ingestProvenance: e.ingestProvenance } : {},
		recording: ct(r, s)
	}, e.attemptId, e.db);
	return "started" === i.kind && (e.guard = i.guard, function(e) {
		void 0 === e.heartbeatId && (e.heartbeatId = setInterval(() => function(e) {
			const t = e.guard;
			t && void 0 === e.heartbeatError && (e.heartbeatPending = (e.heartbeatPending ?? Promise.resolve()).then(() => X(t, e.db)).catch((t) => {
				e.heartbeatError = t;
			}));
		}(e), yt));
	}(e)), i;
}
async function St(e) {
	if (await e.heartbeatPending, void 0 !== e.heartbeatError) throw wt(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new Q();
	return await X(t, e.db), t;
}
async function It(e) {
	if (await vt(e), void 0 !== e.heartbeatError) throw wt(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new Q();
	await async function(e, t = w()) {
		try {
			return await async function(e, t = w(), a) {
				const n = t;
				for (;;) {
					a?.throwIfAborted();
					const [t, r] = await Promise.all([n.files.get(e), n.sensorNonwear.where("fileId").equals(e).count()]), s = (e, t) => JSON.stringify([
						e?.id,
						e?.seriesRevision ?? 0,
						e?.exportInputRevision ?? 0,
						e?.sourceContentHash,
						e?.sourceType,
						e?.sourceProfileId,
						t
					]), i = s(t, r), o = pt([...(await fe(e, n)).values()]);
					if (t && "actiware_off_wrist" === Oe(t.sourceType, t.sourceProfileId) && !o.includes("device_wear_state_evidence_stream") && r > 0 && o.push("device_wear_state_evidence_stream"), void 0 === t?.id) return o;
					if (await L(n, [
						n.files,
						n.sensorNonwear,
						n.projectMeta
					], async () => {
						const t = await n.files.get(e);
						return s(t, await n.sensorNonwear.where("fileId").equals(e).count()) === i && (t && (r = t.resolvedCapabilities, l = o, void 0 === r || r.length !== l.length || !l.every((e) => r.includes(e)) || 4 !== t.resolvedCapabilitiesRevision) && await j(n, [n.files], () => n.files.update(e, {
							resolvedCapabilities: o,
							resolvedCapabilitiesRevision: 4
						}), a), !0);
						var r, l;
					}, a)) return o;
				}
			}(e, t);
		} catch {
			return console.warn("Capability refresh failed. Stored data was kept; conditional capabilities remain unavailable until the next read."), [];
		}
	}(t.fileId, e.db), e.finalizedFileId = await ie(t, e.db, e.signal), delete e.guard;
}
async function _t(e, t) {
	try {
		await vt(e);
		const t = e.guard, a = !!t && await K(t, e.db);
		t && delete e.guard, a ? (console.warn("[local-processing] Rolled back an incomplete local ingest."), e.rollbackOutcome = "rolled_back") : e.rollbackOutcome ??= "nothing_to_roll_back";
	} catch {
		console.error("[local-processing] Incomplete local ingest rollback also failed."), e.rollbackOutcome = "failed";
	}
}
function Rt(e, t) {
	return "object" == typeof e && null !== e && void 0 !== t.rollbackOutcome && (e.__localIngestRollbackOutcome = t.rollbackOutcome), e;
}
async function Ct(e, t, a, n, r) {
	try {
		const s = await ht(e, t, n);
		await Y(e, t.map((e) => e.date), s, a, r);
	} catch {
		r?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}
}
function Mt(e, t, a, n) {
	return n <= 0 ? 0 : .9 * (e - 1 + (t - e + 1) * a / 3) / n;
}
function Gt({ scope: e, fileId: t, sourceContentHash: a, label: n, signalDates: r, onChunk: s }) {
	const i = [];
	let o = 0;
	const l = {
		saved: 0,
		activityFailed: !1,
		historyFailed: !1
	}, c = async () => {
		const c = i.splice(0);
		if (0 === c.length) return;
		const d = o - c.length + 1, u = o;
		s?.(d, u, 0), await St(e), s?.(d, u, 1);
		try {
			const t = c.map((e) => e.facts);
			await V(c.map((e) => e.day), e.db, t.every((e) => void 0 !== e) ? t : void 0, e.signal);
		} catch (f) {
			throw console.warn("[local-processing] Activity-day persistence failed."), Xe(f, `saveActivityDay (${n})`), l.activityFailed = !0, f;
		}
		l.saved += c.length;
		const m = c.map((e) => e.day.date);
		try {
			await Y(t, m, m.filter((e) => r.has(e)), e.db, e.signal);
		} catch {
			console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
		}
		s?.(d, u, 2);
		const g = c.flatMap((e) => e.history.map((t) => ({
			...t,
			date: e.day.date
		})));
		await async function(e, t, a, n, r = w(), s) {
			const i = r, o = he(), l = n.map((n) => {
				const r = {
					fileId: e,
					date: n.date ?? t,
					appVersion: o,
					results: n.results,
					...void 0 !== a ? { sourceContentHash: a } : {}
				};
				if (null === Z(n)) throw new Error(`Refused an algorithm run for ${String(n.algoKey ?? n.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
				return void 0 !== n.cubeConfig ? {
					...r,
					cubeConfig: n.cubeConfig
				} : {
					...r,
					algoKey: n.algoKey
				};
			});
			try {
				return await q(l, i, s), !0;
			} catch {
				s?.throwIfAborted(), console.error("[local-processing] Algorithm history batch write failed; retrying records individually.");
			}
			let c = !1;
			for (const d of l) try {
				await H(d, i, s);
			} catch {
				s?.throwIfAborted(), c = !0, console.error("[local-processing] An algorithm history write failed; latest scoring remains available.");
				try {
					await Dt({
						op: "algorithm_run_put",
						fileId: e,
						payload: {
							kind: "history_write_failed",
							...Z(d),
							date: d.date,
							error: "history_write_failed"
						}
					}, i, s);
				} catch {}
			}
			return !c;
		}(t, c[0].day.date, a, g, e.db, e.signal) || (l.historyFailed = !0), s?.(d, u, 3), await I();
	};
	return {
		state: l,
		flush: c,
		add: async (e, t, a) => {
			i.push({
				day: e,
				history: t,
				facts: a
			}), o += 1, i.length >= 8 && await c();
		}
	};
}
async function At(e, t = w(), a) {
	const n = t;
	try {
		const t = await e.identity(), r = await me(e.fileId, n);
		await je({
			fileId: e.fileId,
			sourceContentSha256: e.sourceContentHash,
			...e.ggirConfigSha256 ? { ggirConfigSha256: e.ggirConfigSha256 } : {},
			sourceSizeBytes: e.sourceSizeBytes,
			sourceDigestScope: e.sourceDigestScope ?? "full_file_sha256",
			computePath: "epoch_series_part3to5",
			runtimeBuild: {
				crateVersion: t.crateVersion,
				sourceRevision: t.sourceRevision,
				artifactSha256: t.artifactSha256,
				compiledFeatures: t.compiledFeatures,
				target: t.target
			},
			semanticProfile: t.semanticProfile,
			profileProofStatus: Ve(t.profileProofStatus),
			temporalBasis: Be(t.temporalBasis),
			calibration: e.calibration,
			diaryDisposition: r.length > 0 ? "present" : "absent",
			timestampGrid: e.timestampGrid ?? "epoch_5s_floor_seconds",
			dailyRows: e.rows,
			appVersion: he(),
			startedAt: e.startedAt,
			finishedAt: e.finishedAt ?? (/* @__PURE__ */ new Date()).toISOString()
		}, n, a);
	} catch {
		a?.throwIfAborted(), console.error("[local-processing] Execution attestation write failed; day summaries remain stored.");
	}
}
async function Dt(e, t = w(), a) {
	const n = t, { appendWal: r, withWalTx: s } = await import("./wal-CKT9mrFN.js").then((e) => e.r);
	await s([], async () => {
		await r(e);
	}, n, a);
}
function Nt(e, t) {
	return Ee(void 0 === t ? void 0 : { recording: t }, e?.sensorLocation ?? c.sensor_location);
}
function xt(e) {
	return z(e) ? e : 60;
}
function Tt(e) {
	const t = He(e?.lstmSelection);
	return {
		selection: t,
		descriptor: $e(t.modelId),
		scoreOptions: {
			modelId: t.modelId,
			...null != t.threshold ? { threshold: t.threshold } : {}
		}
	};
}
function Ft(e) {
	const t = Tt(e);
	return { extras: {
		lstmFeatureContract: "spectral_30s_mean_centered_v3_probabilities",
		lstmModelId: t.descriptor.id,
		lstmModelVersion: t.descriptor.version,
		lstmThreshold: String(t.selection.threshold ?? t.descriptor.defaultThreshold),
		ggirCountScorerContract: "zcy_ws3_count_epoch_v4"
	} };
}
const kt = /* @__PURE__ */ new Set([
	2,
	5,
	6
]);
function zt(e) {
	return !1 !== e.imputeTimegaps && (null == e.dataFormat || kt.has(e.dataFormat)) && (null == e.configtz || e.configtz === e.desiredtz);
}
function Et(e) {
	return `GGIR zone ${e} from the GT3X info.txt TimeZone: the app's assumption, since GGIR takes desiredtz and configtz from its own settings`;
}
async function Ut(e, t, a, n, r) {
	const s = n.anglez.length;
	return (await e.ggirDstPlaceholderCuts(t, [...a], r)).map(({ start: e, count: t, beforeTimestampSec: a }) => {
		const r = (a) => a && a.length === s ? Array.from(a.subarray(e, e + t)) : void 0, i = r(n.anglex), o = r(n.angley), l = r(n.enmo), c = r(n.zcx), d = r(n.zcy), u = r(n.zcz);
		return {
			beforeTimestampSec: a,
			anglez: r(n.anglez) ?? [],
			...i ? { anglex: i } : {},
			...o ? { angley: o } : {},
			...l ? { enmo: l } : {},
			...c ? { zcx: c } : {},
			...d ? { zcy: d } : {},
			...u ? { zcz: u } : {}
		};
	});
}
var Pt = t({
	GGIR_NO_RESULTS_TABLES: () => jt,
	GgirImportRefusal: () => Ot,
	ensureSavedGgirNonwear: () => qt,
	existingGgirRecording: () => Kt,
	ggirNightsWithData: () => Zt,
	isGeneactivEpochCsv: () => ra,
	processGgirMetaRDataFile: () => Qt,
	processMappedMimsCsvFile: () => Jt,
	refuseUnimportableGgirRecording: () => Lt
}), Ot = class extends Error {
	name = "GgirImportRefusal";
	category;
	constructor(e) {
		super(g(e)), this.category = e;
	}
};
function Lt(e, t) {
	const a = y(e);
	if (a && (a.notRead && a.notRead.length > 0 && t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR output",
		warning: a.notRead.map((e) => `not read: ${e.path}: ${e.reason}.`).join(" ")
	}), a.refusedNotRead)) throw new Ot("ggir-not-read");
}
const jt = "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.", Vt = "actoglance.source.ggir_rdata.v1";
function Bt(e, t) {
	const { username: a, selectedStudyId: n } = ce.getState();
	return we.captureWorkspaceBinding(e, {
		signal: t,
		username: a,
		studyId: n
	});
}
const Ht = /* @__PURE__ */ new WeakMap();
async function $t(e, t, a, n) {
	const r = e.timestampsMs.length;
	if (0 === r || e.enmo5s.length !== r || e.anglez5s.length !== r) throw new Error("GGIR meta RData did not contain aligned metashort timestamp, ENMO, and anglez columns.");
	const s = {
		desiredtz: e.desiredtz ?? void 0,
		dataFormat: e.inspection?.dformc ?? void 0,
		...n ? p(await a.ggirConfigValues(n)) : {}
	}, { runs: i, storedMs: o, steps: l } = await a.wallClockDstPlaceholders(e.timestampsMs, 1e3 * e.epochSeconds, zt(s)), c = o.filter((e) => !Number.isNaN(e)), d = (e.timestampsMs[0] ?? 0) / 1e3, u = t?.sources.ms2 ? t.nonwear : e.nonwearShort, m = {
		...u.length === r ? { nonwear: u } : {},
		...e.invalidShort.length === e.timestampsMs.length ? { invalid: e.invalidShort } : {}
	}, g = t ? t.sources.ms3 ? t.sib : void 0 : e.part3Sib5s?.length === r ? e.part3Sib5s : void 0, f = await N(a, o, e.enmo5s, e.anglez5s, {
		...m,
		...t?.sources.ms2 ? { invalid: t.invalid } : {},
		...g ? { sib: g } : {}
	});
	if (t && (Ne(t.sleepWindows), t.sources.ms3 && t.sib.length !== r || t.sources.ms2 && (t.invalid.length !== r || t.nonwear.length > 0 && t.nonwear.length !== r))) throw new Error("GGIR Parts 2–3 do not cover the same 5 s epochs as Part 1.");
	return {
		n: r,
		startSec: d,
		dstRuns: i,
		storedMs: o,
		clockSteps: l,
		wallClockMs: c,
		timegaps: s,
		ggirSib: g,
		ggirByDate: f
	};
}
const Wt = /* @__PURE__ */ new WeakMap();
var Yt = class extends Error {};
const Xt = /* @__PURE__ */ new WeakMap();
async function qt(e, t, a, n = !0) {
	let r = Xt.get(t);
	if (r || (r = /* @__PURE__ */ new Map(), Xt.set(t, r)), r.has(e)) {
		const t = r.get(e);
		if (!(t instanceof Yt)) return t;
		if (!n) throw t;
	}
	let s = Wt.get(t);
	s || (s = /* @__PURE__ */ new Map(), Wt.set(t, s));
	const i = s.get(e);
	if (i) return i;
	const o = (async () => {
		const n = await re(e, t);
		if (!pe(n)) return null;
		if (0 === (await ge(e, t)).length) return null;
		const r = await t.ggirResultsBundles.get(e);
		if (!r) return null;
		const s = C(a);
		if (n?.ggirSavedNonwearSettled) return Pe(r.configCsv, s);
		const i = [...(await fe(e, t)).values()].filter((e) => e.ggirTimestamps?.byteLength && e.unifiedNonwearMasks?.[h.ggir_saved]?.byteLength !== e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), o = i.filter((e) => e.vanHeesNonwear?.byteLength === e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), c = i.filter((e) => !o.includes(e)), d = c.length ? await l(t, e) : null, u = d?.ms2 ? await s.reviewGgirResults({
			part1: new Uint8Array(d.part1),
			configCsv: d.configCsv,
			ms2: new Uint8Array(d.ms2),
			edits: [],
			crossCheck: !1
		}) : null, m = d && u?.nonwear.length ? (await $t(await s.readGgirMeta(new Uint8Array(d.part1), null, !0), u, s, d.configCsv)).ggirByDate : null, g = [...o.map((e) => ({
			date: e.date,
			unifiedNonwearMasks: {
				...e.unifiedNonwearMasks,
				[h.ggir_saved]: e.vanHeesNonwear
			},
			vanHeesNonwear: null
		})), ...m ? c.map((e) => {
			const t = m.get(e.date), a = new Float64Array(e.ggirTimestamps);
			if (!t?.nonwear || t.timestamps.length !== a.length || !a.every((e, a) => e === t.timestamps[a])) throw new Yt("Saved GGIR nonwear does not match the stored epoch grid.");
			return {
				date: e.date,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					[h.ggir_saved]: new Uint8Array(t.nonwear).buffer
				},
				vanHeesNonwear: null
			};
		}) : []];
		return await L(t, [
			t.projectMeta,
			t.activityDays,
			t.physicalActivityFileSummaries,
			t.files
		], async () => {
			await Promise.all(g.map(({ date: n, ...r }) => B(e, n, r, t, a))), await t.files.update(e, { ggirSavedNonwearSettled: !0 });
		}, a), g.length, Pe(r.configCsv, s);
	})().then((t) => (r.set(e, t), t)).catch((t) => {
		throw !a?.aborted && t instanceof Yt && r.set(e, t), console.warn("[local-processing] Could not fill saved GGIR nonwear from retained ms2."), t;
	}).finally(() => {
		s.delete(e);
	});
	return s.set(e, o), o;
}
async function Zt(e, t, a) {
	const n = await Promise.all(e.map(async (e) => t.has(e) || t.has(await a(e) ?? "")));
	return e.filter((e, t) => n[t]);
}
async function Kt(e, t, a, n) {
	const r = n ?? await b(e, void 0, a), s = await ae(r.fullHash, t) ?? await te(r.prefixHash, t, r.fullHash);
	return s?.id ? s : void 0;
}
async function Qt(e, t, a, n, r, s, l) {
	const c = Ht.get(e);
	Ht.delete(e);
	const g = r?.db ?? w(), f = n?.ggirConfig ?? await O(g), p = s ?? u(), v = r ?? {
		db: g,
		attemptId: i(),
		auditBinding: Bt(g, a),
		signal: a,
		recording: await mt(e, a, p)
	};
	_(a, "processGgirMetaRDataFile"), Lt(e, t);
	const S = l ?? (() => {
		d(p);
	});
	t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR meta RData..."
	});
	const { prefixHash: I, fullHash: C } = c?.value?.hashes ?? await b(e, (e) => {
		t?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, a), A = await Kt(e, g, a, {
		prefixHash: I,
		fullHash: C
	});
	if (A?.id) {
		t?.({
			phase: "complete",
			percent: 100,
			message: "File already imported"
		});
		const a = A.availableDates;
		return await ee(e.name, g), {
			alreadyImported: !0,
			fileId: A.id,
			availableDates: a,
			sourceType: A.sourceType ?? o.GGIR_5S_UPLOAD
		};
	}
	const D = await $(e.name, g);
	if (D && "incomplete" !== D.ingestState) throw new de();
	if (t?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing GGIR metashort and metalong..."
	}), _(a, "before reading GGIR RData"), c && "error" in c) throw c.error;
	const N = y(e), x = c?.value?.input ?? (N ? await De(N) : null), T = c?.value || !x ? void 0 : await M(p, (e) => e.prepareGgirRecording(x), {
		ms: G,
		label: "prepareGgirRecording",
		signal: a,
		cancel: S
	}), k = T && x ? (z = x, null === (E = T.cleanedNightsCsv) ? z : {
		...z,
		cleanedNightsCsv: E
	}) : x;
	var z, E;
	const j = c?.value || k ? void 0 : await e.arrayBuffer();
	_(a, "after reading GGIR RData");
	const B = c?.value?.meta ?? T?.meta ?? await M(p, (e) => e.readGgirMeta(m(new Uint8Array(j), [j]), f.csvText, !1), {
		ms: 3e5,
		label: "readGgirMeta",
		signal: a,
		cancel: S
	}), H = function(e, t) {
		return t && !t.sources.ms4 && e?.notRead?.some((e) => /(?:^|\/)meta\/ms4\.out\//u.test(e.path)) ? {
			...t,
			importNotices: [...t.importNotices, ke]
		} : t;
	}(N, c?.value?.review ?? T?.review ?? null), W = c?.value?.computed ?? await async function(e, t, a, n, r) {
		const s = y(e)?.configCsv, { n: i, startSec: o, dstRuns: l, storedMs: c, clockSteps: d, wallClockMs: u, timegaps: m, ggirSib: g, ggirByDate: f } = await $t(t, a, n, await s?.text()), p = [...f.keys()].sort(), w = a ? await Zt(xe(a), f, (e) => n.nextDate(e)) : [], v = w.length > 0 ? w : await P(f, n);
		if (0 === p.length) throw new Error("GGIR meta RData did not contain any dated 5 s epochs.");
		const b = p.flatMap((e) => {
			const t = f.get(e);
			if (!t) return [];
			_(r, `saveActivityDay ${e}`);
			const n = /* @__PURE__ */ new Float64Array();
			return [{
				fileId: 0,
				date: e,
				timestamps: n.buffer,
				axisY: n.buffer,
				vectorMagnitude: n.buffer,
				ggirTimestamps: new Float64Array(t.timestamps).buffer,
				ggirEnmo: new Float64Array(t.enmo).buffer,
				ggirAnglez: new Float64Array(t.anglez).buffer,
				...t.anglex ? { ggirAnglex: new Float64Array(t.anglex).buffer } : {},
				...t.angley ? { ggirAngley: new Float64Array(t.angley).buffer } : {},
				...t.sib ? { ggirSib: new Uint8Array(t.sib).buffer } : {},
				...t.nonwear ? a ? { unifiedNonwearMasks: { [h.ggir_saved]: new Uint8Array(t.nonwear).buffer } } : { vanHeesNonwear: new Uint8Array(t.nonwear).buffer } : {},
				...t.invalid ? { ggirInvalid: new Uint8Array(t.invalid).buffer } : {},
				algorithmResults: {},
				nonwearResults: null
			}];
		});
		return {
			n: i,
			startSec: o,
			dstRuns: l,
			storedMs: c,
			clockSteps: d,
			wallClockMs: u,
			timegaps: m,
			rdataConfig: s,
			availableDates: p,
			nightDates: v,
			ggirSib: g,
			dayRecords: b,
			facts: await Promise.all(b.map((e) => se(e, n))),
			signalDates: await ht(0, b, n).catch(() => (r?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days."), null)),
			placeholders: l.length > 0 ? await Ut(n, 1e3 * o, l, {
				anglez: t.anglez5s,
				enmo: t.enmo5s
			}, u) : void 0,
			summaries: a ? await ze(a, 0, r, n) : [],
			markers: a ? await Te(a, d, n) : void 0
		};
	}(e, B, H, p, a), { n: X, startSec: q, dstRuns: Z, storedMs: K, clockSteps: Q, wallClockMs: te, timegaps: ae, rdataConfig: ne, availableDates: ie, nightDates: oe, ggirSib: ce } = W;
	t?.({
		phase: "storing",
		percent: 55,
		message: "Saving GGIR 5 s epochs..."
	});
	const ue = await bt(v, {
		filename: e.name,
		devicePreset: "ggir_5s_meta",
		epochLengthSeconds: B.epochSeconds,
		availableDates: oe,
		fileHash: I,
		sourceContentHash: C,
		sourceSizeBytes: e.size,
		source: "local",
		eventMarkerInstants: [],
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: o.GGIR_5S_UPLOAD,
		...q > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * q)).toISOString() } } : {},
		sourceProfileId: Vt,
		...B.desiredtz ? { ggirTimezone: B.desiredtz } : {},
		...Z.length + Q.length > 0 ? { ggirClockBasis: (ge = ae, fe = null != ne, zt(ge) ? `GGIR's imputed fall-back hour left out (${fe ? "config.csv: imputeTimegaps TRUE, configtz = desiredtz" : "no config.csv, so GGIR's defaults are assumed"})` : `GGIR's repeated fall-back hour kept as recorded data (${!1 === ge.imputeTimegaps ? "imputeTimegaps = FALSE" : null == ge.dataFormat || kt.has(ge.dataFormat) ? `configtz ${ge.configtz ?? ""} differs from desiredtz ${ge.desiredtz ?? ""}` : `GGIR does not gap-impute data format ${String(ge.dataFormat)}`})`) } : {},
		...Q.length > 0 ? { ggirClockSteps: Q } : {},
		...Z.length > 0 ? { ggirDstPlaceholders: W.placeholders } : {}
	}, p);
	var ge, fe;
	if ("already_complete" === ue.kind) {
		const t = ue.record.id;
		if (null == t) throw new Error("Completed local import identity is invalid.");
		return await ee(e.name, g), {
			alreadyImported: !0,
			fileId: t,
			availableDates: ue.record.availableDates,
			sourceType: ue.record.sourceType ?? o.GGIR_5S_UPLOAD
		};
	}
	const pe = ue.guard.fileId;
	let he = null, we = !1;
	const ye = !H && !ce, ve = await N?.qwindowCsv?.text();
	if (H && k) try {
		const t = k.configCsv ? await J(k.configCsv, p) : void 0;
		if (await St(v), await le(W.summaries.map((e) => ({
			...e,
			fileId: pe
		})), g, a), await L(g, [g.files, g.ggirResultsBundles], async () => {
			await g.ggirResultsBundles.put(Fe(pe, N?.recordingFile ?? e.name, k, H, {
				part2Reports: N?.part2Reports,
				personReports: N?.personReports,
				qwindowCsv: ve,
				resultsCsv: N?.resultsCsv
			})), await g.files.update(pe, {
				ggirBundleRevision: crypto.randomUUID(),
				ggirSavedNonwearSettled: !0,
				...t ? { ggirNonwearDetector: t } : {}
			});
		}, a), !await Ge(pe, H, Nt(n, v.recording), g, !0, Q, a, W.markers)) throw new Error("GGIR results markers could not be saved.");
	} catch (je) {
		throw await _t(v), je;
	}
	const Ie = B.invalidShort.length === X ? B.invalidShort : null, _e = H ? null : await M(p, (e) => e.runGgirFromEpoch({
		source: "ggir_part1_rdata",
		invalidMask: Ie ? "ggir_part2" : "none"
	}, B.anglez5s, B.enmo5s, B.epochSeconds, q, Ie ?? new Uint8Array(X), B.desiredtz ?? void 0, f.csvText).catch((e) => (R(e, a, "runGgirFromEpoch (GGIR RData)"), console.warn("[local-processing] GGIR epoch analysis failed for a local metadata import."), we = !0, null)), {
		ms: G,
		label: "runGgirFromEpoch (GGIR RData)",
		signal: a,
		cancel: S
	});
	if (_e?.days?.length) {
		const e = U(_e.days, pe, void 0, f);
		await St(v), await le(e, g, a).catch(() => {
			console.warn("[local-processing] GGIR RData daily-summary persistence failed."), we = !0;
		});
	}
	const Re = function(e, t) {
		const a = [];
		if (!t || t.length !== e.length) return a;
		let n = null;
		for (let r = 0; r < e.length; r++) {
			const s = e[r] ?? 0, i = 0 !== (t[r] ?? 0);
			if (i && null === n && (n = s), (!i || r === e.length - 1) && null !== n) {
				const t = i && r === e.length - 1 ? s + 5e3 : s;
				a.push([n / 1e3, t / 1e3]), n = null;
			}
		}
		return a;
	}(Q.length > 0 ? K : B.timestampsMs, B.nonwearShort), Ce = new Map((H ? [] : await me(pe, g)).map((e) => [e.analysisDate, e])), Ne = B.anglez5sImputed?.length === X ? B.anglez5sImputed : B.anglez5s, Ee = B.enmo5sImputed?.length === X ? B.enmo5sImputed : B.enmo5s;
	he = H ? he : await F(pe, Ne, q, Re, Ce, n?.hasptVariant, {
		activity5s: Ee,
		...Ie ? { invalid5s: Ie } : {},
		dstRuns: Z,
		wallClockMs: te,
		...B.desiredtz ? { timezone: B.desiredtz } : {}
	}, Se(n?.sleepPeriodDetectionConfig, be), Nt(n, v.recording), g, a, p, S, v.auditBinding);
	const Ue = W.dayRecords.map((e) => ({
		...e,
		fileId: pe
	}));
	let Pe = !1;
	await St(v);
	const Oe = (await V(Ue, g, W.facts, a).catch((e) => (console.warn("[local-processing] GGIR RData activity-day persistence failed."), Xe(e, "saveActivityDay (GGIR RData)"), Pe = !0, []))).length;
	if (!Pe && W.signalDates && await Y(pe, ie, W.signalDates, g, a).catch(() => {
		a?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}), Pe || Oe !== ie.length || 0 === Oe) throw await _t(v), /* @__PURE__ */ new Error("Could not save any GGIR RData epochs — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	_(a, "before completing GGIR RData ingest"), await It(v);
	const Le = [
		...H?.configWarnings ?? [],
		...H?.importNotices ?? [],
		H?.sources.ms4 && Me(H),
		N && !N.resultsCsv && "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.",
		Pe && "One or more days of GGIR RData epochs could not be saved.",
		he && (H ? "GGIR results markers could not be saved." : "Sleep window detection (HDCZA) could not place auto-markers."),
		we && (H ? "GGIR source summaries could not be saved." : "GGIR daily summaries could not be computed or saved for this GGIR RData file."),
		ye && "GGIR HASIB sleep/wake flags could not be computed."
	].filter(Boolean).join(" ");
	return t?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete",
		...Le ? { warning: Le } : {}
	}), {
		fileId: pe,
		availableDates: oe,
		sourceType: o.GGIR_5S_UPLOAD,
		...H ? { ggir: {
			...(await import("./ggir-results-import-7vTdWIOr.js").then((e) => e.u)).ggirImportCounts(H, Ae(N?.part2Reports, H, k?.recordingId)),
			bodySite: (await re(pe, g))?.recording?.bodySite
		} } : {}
	};
}
async function Jt(t, n, l, c, d, m, g) {
	const f = m?.db ?? w(), p = g ?? C(d), h = m ?? {
		db: f,
		attemptId: i(),
		auditBinding: Bt(f, d),
		signal: d,
		recording: await mt(t, d, p)
	};
	_(d, "processMappedMimsCsvFile"), c?.({
		phase: "reading",
		percent: 0,
		message: "Reading mapped MIMS CSV..."
	});
	const { prefixHash: y, fullHash: v } = await b(t, (e) => {
		c?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, d), S = await Kt(t, f, d, {
		prefixHash: y,
		fullHash: v
	});
	if (S?.id) {
		c?.({
			phase: "complete",
			percent: 100,
			message: "File already imported"
		});
		const e = S.availableDates;
		return {
			alreadyImported: !0,
			fileId: S.id,
			availableDates: e,
			sourceType: S.sourceType ?? o.EPOCHS_60S
		};
	}
	const I = await $(t.name, f);
	if (I && "incomplete" !== I.ingestState) throw new de();
	c?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing mapped MIMS columns..."
	}), _(d, "before reading mapped MIMS CSV");
	const R = await async function(t, n, i, o) {
		const l = s(await t.text()), c = e(l);
		if (c.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
		const d = c.records, m = d[n]?.text;
		if (!m) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
		const g = a(m), f = r(m, g), p = k(i, f);
		if (p.length > 0) throw new Error(T(p));
		const h = et(f, i.datetime_column), w = et(f, i.date_column), y = et(f, i.time_column), v = et(f, i.mims_unit_column), b = et(f, i.mims_unit_x_column), S = et(f, i.mims_unit_y_column), I = et(f, i.mims_unit_z_column), _ = [], R = [], C = [], M = [], G = [], A = [];
		for (let e = n + 2; e <= d.length; e++) {
			const t = d[e - 1];
			if (!t?.text.trim()) continue;
			const a = r(t.text, g);
			A.push({
				sourceRow: t.sourceRow,
				row: a,
				label: it(a, h, w, y)
			});
		}
		const D = await (o ?? u()).sourceLabelsWallClockMs(A.map(({ label: e }) => e)), N = A.findIndex((e, t) => !Number.isFinite(D[t] ?? NaN));
		if (N >= 0) throw new Error(`Could not parse timestamp on row ${String(A[N].sourceRow)} of the mapped MIMS CSV.`);
		for (const [e, { row: a }] of A.entries()) _.push(D[e]), R.push(ot(a, v)), C.push(ot(a, b)), M.push(ot(a, S)), G.push(ot(a, I));
		if (0 === _.length) throw new Error("The mapped MIMS CSV did not contain any data rows.");
		return {
			timestampsMs: new Float64Array(_),
			mimsUnit: null === v ? /* @__PURE__ */ new Float64Array() : new Float64Array(R),
			mimsUnitX: null === b ? /* @__PURE__ */ new Float64Array() : new Float64Array(C),
			mimsUnitY: null === S ? /* @__PURE__ */ new Float64Array() : new Float64Array(M),
			mimsUnitZ: null === I ? /* @__PURE__ */ new Float64Array() : new Float64Array(G)
		};
	}(t, n, l, p);
	_(d, "after reading mapped MIMS CSV");
	const M = o.EPOCHS_60S, G = await async function(e, t) {
		const a = /* @__PURE__ */ new Map(), n = t.timestampsMs.length, r = lt(t.mimsUnit, n), s = lt(t.mimsUnitX, n), i = lt(t.mimsUnitY, n), o = lt(t.mimsUnitZ, n), l = Float64Array.from(t.timestampsMs, (e) => e / 1e3);
		for (const [c, d] of await D(e, l)) a.set(c, {
			timestamps: x(l, d, 0),
			...r ? { mimsUnit: x(r, d, NaN) } : {},
			...s ? { mimsUnitX: x(s, d, NaN) } : {},
			...i ? { mimsUnitY: x(i, d, NaN) } : {},
			...o ? { mimsUnitZ: x(o, d, NaN) } : {}
		});
		return a;
	}(p, R), A = [...G.keys()].sort(), N = await P(G, p);
	c?.({
		phase: "storing",
		percent: 55,
		message: "Saving mapped MIMS epochs..."
	});
	const F = await bt(h, {
		filename: t.name,
		devicePreset: "mims_metrics",
		epochLengthSeconds: 60,
		availableDates: N,
		fileHash: y,
		sourceContentHash: v,
		sourceSizeBytes: t.size,
		source: "local",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: M,
		...(R.timestampsMs[0] ?? 0) > 0 ? { recording: { effectiveTime: new Date(R.timestampsMs[0] ?? 0).toISOString() } } : {}
	}, p);
	if ("already_complete" === F.kind) {
		const e = F.record.id;
		if (null == e) throw new Error("Completed local import identity is invalid.");
		return {
			alreadyImported: !0,
			fileId: e,
			availableDates: F.record.availableDates,
			sourceType: F.record.sourceType ?? M
		};
	}
	const z = F.guard.fileId;
	let E = !1, U = 0;
	for (const e of A) {
		const t = G.get(e);
		if (!t) continue;
		_(d, `saveActivityDay ${e}`);
		const a = /* @__PURE__ */ new Float64Array();
		await St(h);
		const n = {
			fileId: z,
			date: e,
			timestamps: a.buffer,
			axisY: a.buffer,
			vectorMagnitude: a.buffer,
			ggirTimestamps: new Float64Array(t.timestamps).buffer,
			...t.mimsUnit ? { mimsUnit: new Float64Array(t.mimsUnit).buffer } : {},
			...t.mimsUnitX ? { mimsUnitX: new Float64Array(t.mimsUnitX).buffer } : {},
			...t.mimsUnitY ? { mimsUnitY: new Float64Array(t.mimsUnitY).buffer } : {},
			...t.mimsUnitZ ? { mimsUnitZ: new Float64Array(t.mimsUnitZ).buffer } : {},
			algorithmResults: {},
			nonwearResults: null
		};
		await W(n, f, d).then(() => !0).catch((e) => (console.warn("[local-processing] Mapped MIMS activity-day persistence failed."), Xe(e, "saveActivityDay (mapped MIMS CSV)"), E = !0, !1)) && (U += 1, await Ct(z, [n], f, p, d));
	}
	if (E || U !== A.length || 0 === U) throw await _t(h), /* @__PURE__ */ new Error("Could not save any mapped MIMS data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return _(d, "before completing mapped MIMS ingest"), await It(h), c?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete"
	}), {
		fileId: z,
		availableDates: N,
		sourceType: M
	};
}
const ea = 12, ta = 16384, aa = 16777216;
function na(e) {
	const t = e.trim();
	if (!/^\d{4}-\d{2}-\d{2}/.test(t)) return null;
	const a = t.includes("	") ? "	" : ",";
	return t.split(a).length;
}
async function ra(e, t, a) {
	const n = Math.min(e.size, aa);
	let r = Math.min(ta, n);
	for (;;) {
		_(t, "before reading GeneActiv CSV header");
		const s = await S(e, r, a);
		_(t, "after reading GeneActiv CSV header");
		const i = r >= n, o = s.split("\n"), l = i && r >= e.size ? o : o.slice(0, -1);
		for (const e of l) {
			const t = na(e);
			if (null !== t) return t >= ea;
		}
		if (i) return !1;
		r = Math.min(2 * r, n);
	}
}
export { Qe as A, ct as C, st as D, nt as E, Ye as M, qe as O, ut as S, at as T, It as _, Lt as a, ht as b, Ft as c, Nt as d, St as f, Mt as g, Gt as h, Jt as i, Ze as j, Xe as k, xt as l, bt as m, ra as n, Ut as o, At as p, Qt as r, Et as s, Pt as t, Tt as u, _t as v, rt as w, mt as x, Rt as y };
