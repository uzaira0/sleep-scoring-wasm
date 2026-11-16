import { En as e, In as t, It as a, Jt as n, Kt as r, Zt as s, en as i, in as o, m as l, s as c } from "./schema-BGRflpdS.js";
import { i as d, r as u, s as m } from "./workers-B1E_CQH7.js";
import { X as g, f, j as p, p as h, st as w, t as y } from "./workspace-db-ZwhOL3AY.js";
import { d as v, f as b, i as S } from "./content-hash-D4_ZE65l.js";
import { c as I, f as _, h as R, n as C, s as M, u as G, y as A } from "./background-jobs-BXSYSixL.js";
import { A as D, D as N, T as x, V as T, c as F, i as k, n as E, r as z, s as U, w as P, z as O } from "./local-data-source-nap9Nenj.js";
import { a as L, i as j } from "./project-revision-CwL8VPmR.js";
import { $ as V, H as B, J as H, K as $, O as W, Q as X, X as Z, Xt as Y, Y as q, Z as K, c as J, dt as Q, et as ee, f as te, g as ae, gt as ne, h as re, k as se, l as ie, m as oe, o as le, r as ce, s as de, tn as ue, u as me, w as ge, y as fe } from "./store-D5LPiRds.js";
import { tt as pe } from "./per-source-defaults-D5O6G9kE.js";
import { r as he, t as we } from "./audit-log-BT4oxwxf.js";
import { T as ye, _ as ve, a as be, k as Se, s as Ie } from "./local-nonwear-unified-BwC-PW0G.js";
import { _ as _e, p as Re } from "./diary-local-import-contract-BFl05J8E.js";
import { a as Ce } from "./csv-column-mapping-BSSY09yh.js";
import { _ as Me, b as Ge, c as Ae, g as De, h as Ne, l as xe, n as Te, r as Fe, s as ke, v as Ee } from "./ggir-results-import-kY4EWIDH.js";
import { t as ze } from "./file-sensor-location-D3poeAvf.js";
import { F as Ue, M as Pe, O as Oe, P as Le } from "./local-export-worker-BqV3_TjS.js";
import { i as je, n as Ve, r as Be } from "./local-provenance-VByulDLT.js";
import { i as He, n as $e } from "./lstm-model-manager-DgI-Jm53.js";
const We = w((e) => ({
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
function Xe() {
	return [
		"Could not identify file format.",
		"Use Data Settings > CSV Import for mapped vendor, GGIR, MIMS, or generic activity CSV exports.",
		"Native local ingest supports ActiGraph CSV/GT3X, GENEActiv raw CSV/.bin, GGIR meta RData, NHANES PAX80 archives, and recognized generic CSV mappings.",
		"Condor ActLumus/ActTrust TXT files require the server parser today."
	].join(" ");
}
function Ze(e, t) {
	ne(e) && We.getState().reportStorageFull(t, "Browser storage quota was exceeded while saving local results.");
}
function Ye(e) {
	return "the local model runtime or its input contract rejected the operation";
}
function qe(e) {
	return `LSTM ONNX sleep/wake scoring could not be computed for this raw file${e ? ` because ${e}` : ""}. Count-based scoring is intact.`;
}
function Ke(e) {
	if (!e || 0 === e.length) return "";
	let t = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, n = 0;
	for (const r of e) t = Math.min(t, r), a = Math.max(a, r), n += r;
	return ` (sleep probability min=${t.toFixed(3)}, mean=${(n / e.length).toFixed(3)}, max=${a.toFixed(3)})`;
}
function Je(e, t) {
	if (!e || 0 === e.length) return null;
	let a = 0;
	for (const n of e) a += n ? 1 : 0;
	return 0 === a ? `LSTM ONNX sleep/wake scoring produced an all-wake result${Ke(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : a === e.length ? `LSTM ONNX sleep/wake scoring produced an all-sleep result${Ke(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : null;
}
function Qe(e) {
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
async function st(e, t, i, o) {
	_(o, "standardizing mapped CSV");
	const l = s(await e.text());
	_(o, "standardizing mapped CSV");
	const c = n(l);
	if (c.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
	const d = c.records, u = d[t]?.text;
	if (!u) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
	const m = a(u), g = r(u, m), f = z(i, g);
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
	for (let a = t + 1; a < d.length; a += 1) {
		(a - t - 1) % 1e3 == 0 && (await I(), _(o, "standardizing mapped CSV"));
		const e = d[a];
		if (!e.text.trim()) continue;
		const n = r(e.text, m), s = null !== p ? [n[p] ?? "", n[y] ?? ""] : [
			null === h ? "" : n[h] ?? "",
			null === w ? "" : n[w] ?? "",
			n[y] ?? ""
		];
		null !== v && s.push(n[v] ?? ""), null !== b && s.push(n[b] ?? ""), null !== S && s.push(n[S] ?? "");
		for (const t of R) s.push(n[t.idx] ?? "");
		M && null !== C && M.push(tt(n[C])), A.push(s.map(Qe).join(","));
	}
	const D = new Blob([`${A.join("\n")}\n`], { type: "text/csv" });
	return {
		name: e.name,
		lastModified: e.lastModified,
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
	sleep_wake_epoch_stream: (e) => null != e.algorithmResults?.[i.ACTIWARE_SLEEP_WAKE],
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
const yt = Math.max(1e3, Math.floor(le / 4));
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
	}, i = await me({
		...t,
		...t.ggirPart2Config ? { ggirNonwearDetector: await ue(t.ggirPart2Config.csvText, a ?? C(e.signal)) } : {},
		...e.ingestProvenance ? { ingestProvenance: e.ingestProvenance } : {},
		recording: ct(r, s)
	}, e.attemptId, e.db);
	return "started" === i.kind && (e.guard = i.guard, function(e) {
		void 0 === e.heartbeatId && (e.heartbeatId = setInterval(() => function(e) {
			const t = e.guard;
			t && void 0 === e.heartbeatError && (e.heartbeatPending = (e.heartbeatPending ?? Promise.resolve()).then(() => K(t, e.db)).catch((t) => {
				e.heartbeatError = t;
			}));
		}(e), yt));
	}(e)), i;
}
async function St(e) {
	if (await e.heartbeatPending, void 0 !== e.heartbeatError) throw wt(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new J();
	return await K(t, e.db), t;
}
async function It(e) {
	if (await vt(e), void 0 !== e.heartbeatError) throw wt(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new J();
	await async function(e, t = y()) {
		try {
			return await async function(e, t = y(), a) {
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
	}(t.fileId, e.db), e.finalizedFileId = await oe(t, e.db, e.signal), delete e.guard;
}
async function _t(e, t) {
	try {
		await vt(e);
		const t = e.guard, a = !!t && await X(t, e.db);
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
		await B(e, t.map((e) => e.date), s, a, r);
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
			await ee(c.map((e) => e.day), e.db, t.every((e) => void 0 !== e) ? t : void 0, e.signal);
		} catch (f) {
			throw console.warn("[local-processing] Activity-day persistence failed."), Ze(f, `saveActivityDay (${n})`), l.activityFailed = !0, f;
		}
		l.saved += c.length;
		const m = c.map((e) => e.day.date);
		try {
			await B(t, m, m.filter((e) => r.has(e)), e.db, e.signal);
		} catch {
			console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
		}
		s?.(d, u, 2);
		const g = c.flatMap((e) => e.history.map((t) => ({
			...t,
			date: e.day.date
		})));
		await async function(e, t, a, n, r = y(), s) {
			const i = r, o = he(), l = n.map((n) => {
				const r = {
					fileId: e,
					date: n.date ?? t,
					appVersion: o,
					results: n.results,
					...void 0 !== a ? { sourceContentHash: a } : {}
				};
				if (null === Y(n)) throw new Error(`Refused an algorithm run for ${String(n.algoKey ?? n.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
				return void 0 !== n.cubeConfig ? {
					...r,
					cubeConfig: n.cubeConfig
				} : {
					...r,
					algoKey: n.algoKey
				};
			});
			try {
				return await Z(l, i, s), !0;
			} catch {
				s?.throwIfAborted(), console.error("[local-processing] Algorithm history batch write failed; retrying records individually.");
			}
			let c = !1;
			for (const d of l) try {
				await q(d, i, s);
			} catch {
				s?.throwIfAborted(), c = !0, console.error("[local-processing] An algorithm history write failed; latest scoring remains available.");
				try {
					await Dt({
						op: "algorithm_run_put",
						fileId: e,
						payload: {
							kind: "history_write_failed",
							...Y(d),
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
async function At(e, t = y(), a) {
	const n = t;
	try {
		const t = await e.identity(), r = await Q(e.fileId, n);
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
async function Dt(e, t = y(), a) {
	const n = t, { appendWal: r, withWalTx: s } = await import("./wal-eDWFo4nR.js").then((e) => e.r);
	await s([], async () => {
		await r(e);
	}, n, a);
}
function Nt(t, a) {
	return ze(void 0 === a ? void 0 : { recording: a }, t?.sensorLocation ?? e.sensor_location);
}
function xt(e) {
	return E(e) ? e : 60;
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
function Et(e) {
	return !1 !== e.imputeTimegaps && (null == e.dataFormat || kt.has(e.dataFormat)) && (null == e.configtz || e.configtz === e.desiredtz);
}
function zt(e) {
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
	ensureSavedGgirNonwear: () => Yt,
	existingGgirRecording: () => Kt,
	ggirNightsWithData: () => qt,
	isGeneactivEpochCsv: () => ra,
	processGgirMetaRDataFile: () => Jt,
	processMappedMimsCsvFile: () => Qt,
	refuseUnimportableGgirRecording: () => Lt
}), Ot = class extends Error {
	name = "GgirImportRefusal";
	category;
	constructor(e) {
		super(g(e)), this.category = e;
	}
};
function Lt(e, t) {
	const a = f(e);
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
		...n ? h(await a.ggirConfigValues(n)) : {}
	}, { runs: i, storedMs: o, steps: l } = await a.wallClockDstPlaceholders(e.timestampsMs, 1e3 * e.epochSeconds, Et(s)), c = o.filter((e) => !Number.isNaN(e)), d = (e.timestampsMs[0] ?? 0) / 1e3, u = t?.sources.ms2 ? t.nonwear : e.nonwearShort, m = {
		...u.length === r ? { nonwear: u } : {},
		...e.invalidShort.length === e.timestampsMs.length ? { invalid: e.invalidShort } : {}
	}, g = t ? t.sources.ms3 ? t.sib : void 0 : e.part3Sib5s?.length === r ? e.part3Sib5s : void 0, f = await N(a, o, e.enmo5s, e.anglez5s, {
		...m,
		...t?.sources.ms2 ? { invalid: t.invalid } : {},
		...g ? { sib: g } : {}
	});
	if (t && (Fe(t.sleepWindows), t.sources.ms3 && t.sib.length !== r || t.sources.ms2 && (t.invalid.length !== r || t.nonwear.length > 0 && t.nonwear.length !== r))) throw new Error("GGIR Parts 2–3 do not cover the same 5 s epochs as Part 1.");
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
var Xt = class extends Error {};
const Zt = /* @__PURE__ */ new WeakMap();
async function Yt(e, t, a, n = !0) {
	let r = Zt.get(t);
	if (r || (r = /* @__PURE__ */ new Map(), Zt.set(t, r)), r.has(e)) {
		const t = r.get(e);
		if (!(t instanceof Xt)) return t;
		if (!n) throw t;
	}
	let s = Wt.get(t);
	s || (s = /* @__PURE__ */ new Map(), Wt.set(t, s));
	const i = s.get(e);
	if (i) return i;
	const o = (async () => {
		const n = await se(e, t);
		if (!pe(n)) return null;
		if (0 === (await ge(e, t)).length) return null;
		const r = await t.ggirResultsBundles.get(e);
		if (!r) return null;
		const s = C(a);
		if (n?.ggirSavedNonwearSettled) return Pe(r.configCsv, s);
		const i = [...(await fe(e, t)).values()].filter((e) => e.ggirTimestamps?.byteLength && e.unifiedNonwearMasks?.[p.ggir_saved]?.byteLength !== e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), o = i.filter((e) => e.vanHeesNonwear?.byteLength === e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), l = i.filter((e) => !o.includes(e)), d = l.length ? await c(t, e) : null, u = d?.ms2 ? await s.reviewGgirResults({
			part1: new Uint8Array(d.part1),
			configCsv: d.configCsv,
			ms2: new Uint8Array(d.ms2),
			edits: [],
			crossCheck: !1
		}) : null, m = d && u?.nonwear.length ? (await $t(await s.readGgirMeta(new Uint8Array(d.part1), null, !0), u, s, d.configCsv)).ggirByDate : null, g = [...o.map((e) => ({
			date: e.date,
			unifiedNonwearMasks: {
				...e.unifiedNonwearMasks,
				[p.ggir_saved]: e.vanHeesNonwear
			},
			vanHeesNonwear: null
		})), ...m ? l.map((e) => {
			const t = m.get(e.date), a = new Float64Array(e.ggirTimestamps);
			if (!t?.nonwear || t.timestamps.length !== a.length || !a.every((e, a) => e === t.timestamps[a])) throw new Xt("Saved GGIR nonwear does not match the stored epoch grid.");
			return {
				date: e.date,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					[p.ggir_saved]: new Uint8Array(t.nonwear).buffer
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
			await Promise.all(g.map(({ date: n, ...r }) => $(e, n, r, t, a))), await t.files.update(e, { ggirSavedNonwearSettled: !0 });
		}, a), g.length, Pe(r.configCsv, s);
	})().then((t) => (r.set(e, t), t)).catch((t) => {
		throw !a?.aborted && t instanceof Xt && r.set(e, t), console.warn("[local-processing] Could not fill saved GGIR nonwear from retained ms2."), t;
	}).finally(() => {
		s.delete(e);
	});
	return s.set(e, o), o;
}
async function qt(e, t, a) {
	const n = await Promise.all(e.map(async (e) => t.has(e) || t.has(await a(e) ?? "")));
	return e.filter((e, t) => n[t]);
}
async function Kt(e, t, a, n) {
	const r = n ?? await S(e, void 0, a), s = await re(r.fullHash, t) ?? await ae(r.prefixHash, t, r.fullHash);
	return s?.id ? s : void 0;
}
async function Jt(e, t, a, n, r, s, i) {
	const c = Ht.get(e);
	Ht.delete(e);
	const g = r?.db ?? y(), h = n?.ggirConfig ?? await O(g), w = s ?? u(), v = r ?? {
		db: g,
		attemptId: l(),
		auditBinding: Bt(g, a),
		signal: a,
		recording: await mt(e, a, w)
	};
	_(a, "processGgirMetaRDataFile"), Lt(e, t);
	const b = i ?? (() => {
		d(w);
	});
	t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR meta RData..."
	});
	const { prefixHash: I, fullHash: C } = c?.value?.hashes ?? await S(e, (e) => {
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
		return await te(e.name, g), {
			alreadyImported: !0,
			fileId: A.id,
			availableDates: a,
			sourceType: A.sourceType ?? o.GGIR_5S_UPLOAD
		};
	}
	const D = await W(e.name, g);
	if (D && "incomplete" !== D.ingestState) throw new de();
	if (t?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing GGIR metashort and metalong..."
	}), _(a, "before reading GGIR RData"), c && "error" in c) throw c.error;
	const N = f(e), x = c?.value?.input ?? (N ? await De(N) : null), T = c?.value || !x ? void 0 : await M(w, (e) => e.prepareGgirRecording(x), {
		ms: G,
		label: "prepareGgirRecording",
		signal: a,
		cancel: b
	}), k = T && x ? (E = x, null === (z = T.cleanedNightsCsv) ? E : {
		...E,
		cleanedNightsCsv: z
	}) : x;
	var E, z;
	const j = c?.value || k ? void 0 : await e.arrayBuffer();
	_(a, "after reading GGIR RData");
	const V = c?.value?.meta ?? T?.meta ?? await M(w, (e) => e.readGgirMeta(m(new Uint8Array(j), [j]), h.csvText, !1), {
		ms: 3e5,
		label: "readGgirMeta",
		signal: a,
		cancel: b
	}), $ = function(e, t) {
		return t && !t.sources.ms4 && e?.notRead?.some((e) => /(?:^|\/)meta\/ms4\.out\//u.test(e.path)) ? {
			...t,
			importNotices: [...t.importNotices, Te]
		} : t;
	}(N, c?.value?.review ?? T?.review ?? null), X = c?.value?.computed ?? await async function(e, t, a, n, r) {
		const s = f(e)?.configCsv, { n: i, startSec: o, dstRuns: l, storedMs: c, clockSteps: d, wallClockMs: u, timegaps: m, ggirSib: g, ggirByDate: h } = await $t(t, a, n, await s?.text()), w = [...h.keys()].sort(), y = a ? await qt(Ae(a), h, (e) => n.nextDate(e)) : [], v = y.length > 0 ? y : await P(h, n);
		if (0 === w.length) throw new Error("GGIR meta RData did not contain any dated 5 s epochs.");
		const b = w.flatMap((e) => {
			const t = h.get(e);
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
				...t.nonwear ? a ? { unifiedNonwearMasks: { [p.ggir_saved]: new Uint8Array(t.nonwear).buffer } } : { vanHeesNonwear: new Uint8Array(t.nonwear).buffer } : {},
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
			availableDates: w,
			nightDates: v,
			ggirSib: g,
			dayRecords: b,
			facts: await Promise.all(b.map((e) => ie(e, n))),
			signalDates: await ht(0, b, n).catch(() => (r?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days."), null)),
			placeholders: l.length > 0 ? await Ut(n, 1e3 * o, l, {
				anglez: t.anglez5s,
				enmo: t.enmo5s
			}, u) : void 0,
			summaries: a ? await Ge(a, 0, r, n) : [],
			markers: a ? await Ne(a, d, n) : void 0
		};
	}(e, V, $, w, a), { n: Z, startSec: Y, dstRuns: q, storedMs: K, clockSteps: J, wallClockMs: ae, timegaps: ne, rdataConfig: re, availableDates: oe, nightDates: le, ggirSib: ce } = X;
	t?.({
		phase: "storing",
		percent: 55,
		message: "Saving GGIR 5 s epochs..."
	});
	const me = await bt(v, {
		filename: e.name,
		devicePreset: "ggir_5s_meta",
		epochLengthSeconds: V.epochSeconds,
		availableDates: le,
		fileHash: I,
		sourceContentHash: C,
		sourceSizeBytes: e.size,
		source: "local",
		eventMarkerInstants: [],
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: o.GGIR_5S_UPLOAD,
		...Y > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * Y)).toISOString() } } : {},
		sourceProfileId: Vt,
		...V.desiredtz ? { ggirTimezone: V.desiredtz } : {},
		...q.length + J.length > 0 ? { ggirClockBasis: (ge = ne, fe = null != re, Et(ge) ? `GGIR's imputed fall-back hour left out (${fe ? "config.csv: imputeTimegaps TRUE, configtz = desiredtz" : "no config.csv, so GGIR's defaults are assumed"})` : `GGIR's repeated fall-back hour kept as recorded data (${!1 === ge.imputeTimegaps ? "imputeTimegaps = FALSE" : null == ge.dataFormat || kt.has(ge.dataFormat) ? `configtz ${ge.configtz ?? ""} differs from desiredtz ${ge.desiredtz ?? ""}` : `GGIR does not gap-impute data format ${String(ge.dataFormat)}`})`) } : {},
		...J.length > 0 ? { ggirClockSteps: J } : {},
		...q.length > 0 ? { ggirDstPlaceholders: X.placeholders } : {}
	}, w);
	var ge, fe;
	if ("already_complete" === me.kind) {
		const t = me.record.id;
		if (null == t) throw new Error("Completed local import identity is invalid.");
		return await te(e.name, g), {
			alreadyImported: !0,
			fileId: t,
			availableDates: me.record.availableDates,
			sourceType: me.record.sourceType ?? o.GGIR_5S_UPLOAD
		};
	}
	const pe = me.guard.fileId;
	let he = null, we = !1;
	const ye = !$ && !ce, ve = await N?.qwindowCsv?.text();
	if ($ && k) try {
		const t = k.configCsv ? await ue(k.configCsv, w) : void 0;
		if (await St(v), await H(X.summaries.map((e) => ({
			...e,
			fileId: pe
		})), g, a), await L(g, [g.files, g.ggirResultsBundles], async () => {
			await g.ggirResultsBundles.put(xe(pe, N?.recordingFile ?? e.name, k, $, {
				part2Reports: N?.part2Reports,
				personReports: N?.personReports,
				qwindowCsv: ve,
				resultsCsv: N?.resultsCsv
			})), await g.files.update(pe, {
				ggirBundleRevision: crypto.randomUUID(),
				ggirSavedNonwearSettled: !0,
				...t ? { ggirNonwearDetector: t } : {}
			});
		}, a), !await Ee(pe, $, Nt(n, v.recording), g, !0, J, a, X.markers)) throw new Error("GGIR results markers could not be saved.");
	} catch (je) {
		throw await _t(v), je;
	}
	const Ie = V.invalidShort.length === Z ? V.invalidShort : null, _e = $ ? null : await M(w, (e) => e.runGgirFromEpoch({
		source: "ggir_part1_rdata",
		invalidMask: Ie ? "ggir_part2" : "none"
	}, V.anglez5s, V.enmo5s, V.epochSeconds, Y, Ie ?? new Uint8Array(Z), V.desiredtz ?? void 0, h.csvText).catch((e) => (R(e, a, "runGgirFromEpoch (GGIR RData)"), console.warn("[local-processing] GGIR epoch analysis failed for a local metadata import."), we = !0, null)), {
		ms: G,
		label: "runGgirFromEpoch (GGIR RData)",
		signal: a,
		cancel: b
	});
	if (_e?.days?.length) {
		const e = U(_e.days, pe, void 0, h);
		await St(v), await H(e, g, a).catch(() => {
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
	}(J.length > 0 ? K : V.timestampsMs, V.nonwearShort), Ce = new Map(($ ? [] : await Q(pe, g)).map((e) => [e.analysisDate, e])), Fe = V.anglez5sImputed?.length === Z ? V.anglez5sImputed : V.anglez5s, ze = V.enmo5sImputed?.length === Z ? V.enmo5sImputed : V.enmo5s;
	he = $ ? he : await F(pe, Fe, Y, Re, Ce, n?.hasptVariant, {
		activity5s: ze,
		...Ie ? { invalid5s: Ie } : {},
		dstRuns: q,
		wallClockMs: ae,
		...V.desiredtz ? { timezone: V.desiredtz } : {}
	}, Se(n?.sleepPeriodDetectionConfig, be), Nt(n, v.recording), g, a, w, b, v.auditBinding);
	const Ue = X.dayRecords.map((e) => ({
		...e,
		fileId: pe
	}));
	let Pe = !1;
	await St(v);
	const Oe = (await ee(Ue, g, X.facts, a).catch((e) => (console.warn("[local-processing] GGIR RData activity-day persistence failed."), Ze(e, "saveActivityDay (GGIR RData)"), Pe = !0, []))).length;
	if (!Pe && X.signalDates && await B(pe, oe, X.signalDates, g, a).catch(() => {
		a?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}), Pe || Oe !== oe.length || 0 === Oe) throw await _t(v), /* @__PURE__ */ new Error("Could not save any GGIR RData epochs — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	_(a, "before completing GGIR RData ingest"), await It(v);
	const Le = [
		...$?.configWarnings ?? [],
		...$?.importNotices ?? [],
		$?.sources.ms4 && ke($),
		N && !N.resultsCsv && "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.",
		Pe && "One or more days of GGIR RData epochs could not be saved.",
		he && ($ ? "GGIR results markers could not be saved." : "Sleep window detection (HDCZA) could not place auto-markers."),
		we && ($ ? "GGIR source summaries could not be saved." : "GGIR daily summaries could not be computed or saved for this GGIR RData file."),
		ye && "GGIR HASIB sleep/wake flags could not be computed."
	].filter(Boolean).join(" ");
	return t?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete",
		...Le ? { warning: Le } : {}
	}), {
		fileId: pe,
		availableDates: le,
		sourceType: o.GGIR_5S_UPLOAD,
		...$ ? { ggir: {
			...(await import("./ggir-results-import-kY4EWIDH.js").then((e) => e.f)).ggirImportCounts($, Me(N?.part2Reports, $, k?.recordingId)),
			bodySite: (await se(pe, g))?.recording?.bodySite
		} } : {}
	};
}
async function Qt(e, t, i, c, d, m, g) {
	const f = m?.db ?? y(), p = g ?? C(d), h = m ?? {
		db: f,
		attemptId: l(),
		auditBinding: Bt(f, d),
		signal: d,
		recording: await mt(e, d, p)
	};
	_(d, "processMappedMimsCsvFile"), c?.({
		phase: "reading",
		percent: 0,
		message: "Reading mapped MIMS CSV..."
	});
	const { prefixHash: w, fullHash: v } = await S(e, (e) => {
		c?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, d), b = await Kt(e, f, d, {
		prefixHash: w,
		fullHash: v
	});
	if (b?.id) {
		c?.({
			phase: "complete",
			percent: 100,
			message: "File already imported"
		});
		const e = b.availableDates;
		return {
			alreadyImported: !0,
			fileId: b.id,
			availableDates: e,
			sourceType: b.sourceType ?? o.EPOCHS_60S
		};
	}
	const I = await W(e.name, f);
	if (I && "incomplete" !== I.ingestState) throw new de();
	c?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing mapped MIMS columns..."
	}), _(d, "before reading mapped MIMS CSV");
	const R = await async function(e, t, i, o) {
		const l = s(await e.text()), c = n(l);
		if (c.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
		const d = c.records, m = d[t]?.text;
		if (!m) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
		const g = a(m), f = r(m, g), p = k(i, f);
		if (p.length > 0) throw new Error(T(p));
		const h = et(f, i.datetime_column), w = et(f, i.date_column), y = et(f, i.time_column), v = et(f, i.mims_unit_column), b = et(f, i.mims_unit_x_column), S = et(f, i.mims_unit_y_column), I = et(f, i.mims_unit_z_column), _ = [], R = [], C = [], M = [], G = [], A = [];
		for (let a = t + 2; a <= d.length; a++) {
			const e = d[a - 1];
			if (!e?.text.trim()) continue;
			const t = r(e.text, g);
			A.push({
				sourceRow: e.sourceRow,
				row: t,
				label: it(t, h, w, y)
			});
		}
		const D = await (o ?? u()).sourceLabelsWallClockMs(A.map(({ label: e }) => e)), N = A.findIndex((e, t) => !Number.isFinite(D[t] ?? NaN));
		if (N >= 0) throw new Error(`Could not parse timestamp on row ${String(A[N].sourceRow)} of the mapped MIMS CSV.`);
		for (const [a, { row: n }] of A.entries()) _.push(D[a]), R.push(ot(n, v)), C.push(ot(n, b)), M.push(ot(n, S)), G.push(ot(n, I));
		if (0 === _.length) throw new Error("The mapped MIMS CSV did not contain any data rows.");
		return {
			timestampsMs: new Float64Array(_),
			mimsUnit: null === v ? /* @__PURE__ */ new Float64Array() : new Float64Array(R),
			mimsUnitX: null === b ? /* @__PURE__ */ new Float64Array() : new Float64Array(C),
			mimsUnitY: null === S ? /* @__PURE__ */ new Float64Array() : new Float64Array(M),
			mimsUnitZ: null === I ? /* @__PURE__ */ new Float64Array() : new Float64Array(G)
		};
	}(e, t, i, p);
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
		filename: e.name,
		devicePreset: "mims_metrics",
		epochLengthSeconds: 60,
		availableDates: N,
		fileHash: w,
		sourceContentHash: v,
		sourceSizeBytes: e.size,
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
	const E = F.guard.fileId;
	let z = !1, U = 0;
	for (const a of A) {
		const e = G.get(a);
		if (!e) continue;
		_(d, `saveActivityDay ${a}`);
		const t = /* @__PURE__ */ new Float64Array();
		await St(h);
		const n = {
			fileId: E,
			date: a,
			timestamps: t.buffer,
			axisY: t.buffer,
			vectorMagnitude: t.buffer,
			ggirTimestamps: new Float64Array(e.timestamps).buffer,
			...e.mimsUnit ? { mimsUnit: new Float64Array(e.mimsUnit).buffer } : {},
			...e.mimsUnitX ? { mimsUnitX: new Float64Array(e.mimsUnitX).buffer } : {},
			...e.mimsUnitY ? { mimsUnitY: new Float64Array(e.mimsUnitY).buffer } : {},
			...e.mimsUnitZ ? { mimsUnitZ: new Float64Array(e.mimsUnitZ).buffer } : {},
			algorithmResults: {},
			nonwearResults: null
		};
		await V(n, f, d).then(() => !0).catch((e) => (console.warn("[local-processing] Mapped MIMS activity-day persistence failed."), Ze(e, "saveActivityDay (mapped MIMS CSV)"), z = !0, !1)) && (U += 1, await Ct(E, [n], f, p, d));
	}
	if (z || U !== A.length || 0 === U) throw await _t(h), /* @__PURE__ */ new Error("Could not save any mapped MIMS data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return _(d, "before completing mapped MIMS ingest"), await It(h), c?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete"
	}), {
		fileId: E,
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
		const s = await b(e, r, a);
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
export { Je as A, ct as C, st as D, nt as E, Xe as M, Ye as O, ut as S, at as T, It as _, Lt as a, ht as b, Ft as c, Nt as d, St as f, Mt as g, Gt as h, Qt as i, qe as j, Ze as k, xt as l, bt as m, ra as n, Ut as o, At as p, Jt as r, zt as s, Pt as t, Tt as u, _t as v, rt as w, mt as x, Rt as y };
