import { En as e, In as t, It as a, Jt as r, Kt as n, Zt as s, en as i, in as o, m as l, s as c } from "./schema-MMK46mR-.js";
import { i as d, r as u, s as m } from "./workers-B1E_CQH7.js";
import { X as g, f, j as p, p as h, st as w, t as y, z as v } from "./workspace-db-YhWSrcvp.js";
import { d as b, f as I, i as S } from "./content-hash-D4_ZE65l.js";
import { c as _, f as R, h as C, n as G, s as M, u as A, y as D } from "./background-jobs-Dz-LteaG.js";
import { A as x, D as N, T as F, V as T, c as k, i as z, n as E, r as U, s as P, w as O, z as j } from "./local-data-source-63fZkIbT.js";
import { a as L, i as B } from "./project-revision-CUz5eq5n.js";
import { $ as V, $t as H, H as $, J as W, K as X, O as Z, Q as q, X as Y, Xt as K, Y as J, Z as Q, c as ee, d as te, dt as ae, et as re, f as ne, g as se, gt as ie, h as oe, k as le, l as ce, m as de, o as ue, r as me, s as ge, u as fe, w as pe, y as he } from "./store-CGm5oa9P.js";
import { tt as we } from "./per-source-defaults-CxbMEjO8.js";
import { r as ye, t as ve } from "./audit-log-BT8eFzV0.js";
import { T as be, _ as Ie, a as Se, k as _e, s as Re } from "./local-nonwear-unified-BZU1ydsO.js";
import { r as Ce, t as Ge } from "./diagnostic-log-DgP2mz8K.js";
import { _ as Me, p as Ae } from "./diary-local-import-contract-DjaiAxQT.js";
import { a as De } from "./csv-column-mapping-BSSY09yh.js";
import { _ as xe, b as Ne, c as Fe, g as Te, h as ke, l as ze, n as Ee, r as Ue, s as Pe, v as Oe } from "./ggir-results-import-C56nIWoz.js";
import { t as je } from "./file-sensor-location-D3poeAvf.js";
import { F as Le, M as Be, O as Ve, P as He } from "./local-export-worker-_QiDE5PV.js";
import { i as $e, n as We, r as Xe } from "./local-provenance-Cox4Da0R.js";
import { i as Ze, n as qe } from "./lstm-model-manager-Dy2CTQ-d.js";
const Ye = w((e) => ({
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
function Ke() {
	return [
		"Could not identify file format.",
		"Use Data Settings > CSV Import for mapped vendor, GGIR, MIMS, or generic activity CSV exports.",
		"Native local ingest supports ActiGraph CSV/GT3X, GENEActiv raw CSV/.bin, GGIR meta RData, NHANES PAX80 archives, and recognized generic CSV mappings.",
		"Condor ActLumus/ActTrust TXT files require the server parser today."
	].join(" ");
}
function Je(e, t) {
	ie(e) && Ye.getState().reportStorageFull(t, "Browser storage quota was exceeded while saving local results.");
}
function Qe(e) {
	return "the local model runtime or its input contract rejected the operation";
}
function et(e) {
	return `LSTM ONNX sleep/wake scoring could not be computed for this raw file${e ? ` because ${e}` : ""}. Count-based scoring is intact.`;
}
function tt(e) {
	if (!e || 0 === e.length) return "";
	let t = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, r = 0;
	for (const n of e) t = Math.min(t, n), a = Math.max(a, n), r += n;
	return ` (sleep probability min=${t.toFixed(3)}, mean=${(r / e.length).toFixed(3)}, max=${a.toFixed(3)})`;
}
function at(e, t) {
	if (!e || 0 === e.length) return null;
	let a = 0;
	for (const r of e) a += r ? 1 : 0;
	return 0 === a ? `LSTM ONNX sleep/wake scoring produced an all-wake result${tt(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : a === e.length ? `LSTM ONNX sleep/wake scoring produced an all-sleep result${tt(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : null;
}
function rt(e) {
	return /[",\r\n]/.test(e) ? `"${e.replace(/"/g, "\"\"")}"` : e;
}
function nt(e, t) {
	if (!t) return null;
	const a = De(t), r = e.findIndex((e) => De(e) === a);
	return r >= 0 ? r : null;
}
function st(e) {
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
function it(e, t) {
	if (e.length !== t.length) return console.warn("[local-processing] Event-marker column dropped: mapped row count differs from the parsed epoch count."), /* @__PURE__ */ new Float64Array(0);
	const a = [];
	for (let r = 0; r < e.length; r += 1) {
		const n = t[r];
		1 === e[r] && null != n && Number.isFinite(n) && a.push(n / 1e3);
	}
	return Float64Array.from(a.sort((e, t) => e - t));
}
function ot(e, t, a) {
	const r = new Uint8Array(e.length);
	let n = 0;
	for (const s of Array.from(t)) {
		for (; n + 1 < e.length && (e[n + 1] ?? 1 / 0) <= s;) n += 1;
		const t = e[n];
		null != t && s >= t && s < t + a && (r[n] = 1);
	}
	return r;
}
function lt(e, t) {
	const a = Date.parse(`${t}T00:00:00Z`) / 1e3, r = [];
	for (const n of Array.from(e)) n >= a && n < a + 86400 && r.push(n);
	return Float64Array.from(r);
}
async function ct(e, t, i, o) {
	R(o, "standardizing mapped CSV");
	const l = s(await e.text());
	R(o, "standardizing mapped CSV");
	const c = r(l);
	if (c.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
	const d = c.records, u = d[t]?.text;
	if (!u) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
	const m = a(u), g = n(u, m), f = U(i, g);
	if (f.length > 0) throw new Error(T(f));
	const p = nt(g, i.datetime_column), h = nt(g, i.date_column), w = nt(g, i.time_column), y = nt(g, i.activity_column), v = nt(g, i.axis_x_column), b = nt(g, i.axis_z_column), I = nt(g, i.vector_magnitude_column), S = [
		{
			header: "ENMO",
			idx: nt(g, i.enmo_column)
		},
		{
			header: "AngleZ",
			idx: nt(g, i.anglez_column)
		},
		{
			header: "GGIR_SIB",
			idx: nt(g, i.ggir_sib_column)
		},
		{
			header: "GGIR_NONWEAR",
			idx: nt(g, i.ggir_nonwear_column)
		},
		{
			header: "MIMS_UNIT",
			idx: nt(g, i.mims_unit_column)
		},
		{
			header: "MIMS_UNIT_X",
			idx: nt(g, i.mims_unit_x_column)
		},
		{
			header: "MIMS_UNIT_Y",
			idx: nt(g, i.mims_unit_y_column)
		},
		{
			header: "MIMS_UNIT_Z",
			idx: nt(g, i.mims_unit_z_column)
		}
	].filter((e) => null !== e.idx), C = nt(g, i.event_marker_column), G = null === C ? null : [];
	if (null === y) throw new Error("Column-mapped CSV mapping requires an activity/counts column before import.");
	if (null === p && (null === h || null === w)) throw new Error("Column-mapped CSV mapping requires Date/time, or both Date and Time, before import.");
	const M = null !== p ? ["Datetime", "Axis1"] : [
		"Date",
		"Time",
		"Axis1"
	];
	null !== v && M.push("Axis2"), null !== b && M.push("Axis3"), null !== I && M.push("Vector Magnitude"), M.push(...S.map((e) => e.header));
	const A = [M.join(",")];
	for (let a = t + 1; a < d.length; a += 1) {
		(a - t - 1) % 1e3 == 0 && (await _(), R(o, "standardizing mapped CSV"));
		const e = d[a];
		if (!e.text.trim()) continue;
		const r = n(e.text, m), s = null !== p ? [r[p] ?? "", r[y] ?? ""] : [
			null === h ? "" : r[h] ?? "",
			null === w ? "" : r[w] ?? "",
			r[y] ?? ""
		];
		null !== v && s.push(r[v] ?? ""), null !== b && s.push(r[b] ?? ""), null !== I && s.push(r[I] ?? "");
		for (const t of S) s.push(r[t.idx] ?? "");
		G && null !== C && G.push(st(r[C])), A.push(s.map(rt).join(","));
	}
	const D = new Blob([`${A.join("\n")}\n`], { type: "text/csv" });
	return {
		name: e.name,
		lastModified: e.lastModified,
		size: D.size,
		arrayBuffer: () => D.arrayBuffer(),
		text: () => D.text(),
		slice: (e, t) => D.slice(e, t),
		...G ? { eventMarkerRows: Uint8Array.from(G) } : {}
	};
}
function dt(e, t, a, r) {
	if (null !== t) return e[t] ?? "";
	const n = null === a ? "" : e[a] ?? "", s = null === r ? "" : e[r] ?? "";
	return `${n.trim()} ${s.trim()}`;
}
function ut(e, t) {
	if (null === t) return NaN;
	const a = e[t]?.trim() ?? "";
	if (!a) return NaN;
	const r = Number(a);
	return Number.isFinite(r) ? r : NaN;
}
function mt(e, t) {
	return e.length === t && e.some((e) => Number.isFinite(e)) ? e : void 0;
}
function gt(e, t) {
	const a = e.headerBodySite ?? e.bodySite, r = e.headerLaterality ?? e.laterality;
	return {
		...e,
		...t,
		...e.laterality ? { laterality: e.laterality } : {},
		placementSourceReference: "study_default",
		...a ? { headerBodySite: a } : {},
		...r ? { headerLaterality: r } : {}
	};
}
async function ft(e, t) {
	return await Me((t) => t.recordingFacts(e), new Ae(t)) ?? {};
}
async function pt(e, t, a, r) {
	a?.throwIfAborted();
	const n = await b(e, 65536, r);
	a?.throwIfAborted();
	const s = new TextDecoder("utf-8", { fatal: !1 }).decode(n);
	for (const i of [/measurement frequency\s*[,:\t]\s*(\d+)/i, /sample rate(?:\s*hz)?\s*[,:\t]\s*(\d+)/i]) {
		const e = i.exec(s);
		if (e && e[1]) {
			const t = Number.parseInt(e[1], 10);
			if (Number.isFinite(t) && t > 0) return t;
		}
	}
	return D[t];
}
async function ht(e, t, a, r) {
	if (t?.throwIfAborted(), function(e) {
		const t = e.name.toLowerCase();
		return t.endsWith(".rdata") || t.endsWith(".rda") || t.endsWith(".aw5") || "aw5Subject" in e;
	}(e)) return {};
	const n = Math.max(65536, 2048);
	let s;
	try {
		s = await b(e, n, r);
	} catch {
		return {};
	}
	if (t?.throwIfAborted(), e.name.toLowerCase().endsWith(".gt3x")) {
		const e = function(e) {
			const t = new DataView(e.buffer, e.byteOffset, e.byteLength);
			let a = 0;
			for (; a + 30 <= e.byteLength;) {
				if (67324752 !== t.getUint32(a, !0)) return null;
				const r = t.getUint16(a + 8, !0), n = t.getUint32(a + 18, !0), s = t.getUint16(a + 26, !0), i = a + 30 + s + t.getUint16(a + 28, !0);
				if (i > e.byteLength) return null;
				const o = i + n;
				if (new TextDecoder().decode(e.subarray(a + 30, a + 30 + s)).toLowerCase().endsWith("info.txt")) return 0 !== r || o > e.byteLength ? null : new TextDecoder("utf-8", { fatal: !1 }).decode(e.subarray(i, o));
				if (0 === n) return null;
				a = o;
			}
			return null;
		}(s);
		return null === e ? {} : await ft(e, a);
	}
	return await ft(new TextDecoder("utf-8", { fatal: !1 }).decode(s), a);
}
function wt(e) {
	return `stored_nonwear_mask:${e}`;
}
Object.freeze([]);
const yt = {
	temperature_epoch_stream: (e) => null != e.temperature && Ie(new Float64Array(e.temperature)),
	sleep_wake_epoch_stream: (e) => null != e.algorithmResults?.[i.ACTIWARE_SLEEP_WAKE],
	device_wear_state_evidence_stream: (e) => !0 === e.actiwareOffWristChannel
};
function vt(e) {
	const t = [];
	for (const [a, r] of Object.entries(yt)) for (const n of e) if (r(n)) {
		t.push(a);
		break;
	}
	for (const a of Re) e.some((e) => null != be(e, a, "")) && t.push(wt(a));
	return t;
}
async function bt(e, t, a) {
	const r = [];
	for (const i of t) {
		const t = Le(e, i);
		t && r.push(t.wire);
	}
	if (0 === r.length) return [];
	const { request: n, transfer: s } = He(r);
	return (await a.computeCircadian(m(n, s))).day_summaries.filter((e) => e.has_signal).map((e) => e.analysis_date);
}
function It(e) {
	return e instanceof Error ? e : /* @__PURE__ */ new Error("Local ingest lease renewal failed.");
}
const St = Math.max(1e3, Math.floor(ue / 4));
async function _t(e) {
	void 0 !== e.heartbeatId && (clearInterval(e.heartbeatId), delete e.heartbeatId), await e.heartbeatPending, delete e.heartbeatPending;
}
async function Rt(e, t, a) {
	const r = me.getState(), n = {
		...e.recording,
		...t.recording
	}, s = e.placement ?? {
		bodySite: r.sensorLocation,
		laterality: r.participantLaterality
	}, i = await fe({
		...t,
		...t.ggirPart2Config ? { ggirNonwearDetector: await H(t.ggirPart2Config.csvText, a ?? G(e.signal)) } : {},
		...e.ingestProvenance ? { ingestProvenance: e.ingestProvenance } : {},
		recording: gt(n, s)
	}, e.attemptId, e.db);
	return "started" === i.kind && (e.guard = i.guard, function(e) {
		void 0 === e.heartbeatId && (e.heartbeatId = setInterval(() => function(e) {
			const t = e.guard;
			t && void 0 === e.heartbeatError && (e.heartbeatPending = (e.heartbeatPending ?? Promise.resolve()).then(() => Q(t, e.db)).catch((t) => {
				e.heartbeatError = t;
			}));
		}(e), St));
	}(e)), i;
}
async function Ct(e) {
	if (await e.heartbeatPending, void 0 !== e.heartbeatError) throw It(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new ee();
	return await Q(t, e.db), t;
}
async function Gt(e) {
	if (await _t(e), void 0 !== e.heartbeatError) throw It(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new ee();
	await async function(e, t = y()) {
		try {
			return await async function(e, t = y(), a) {
				const r = t;
				for (;;) {
					a?.throwIfAborted();
					const [t, n] = await Promise.all([r.files.get(e), r.sensorNonwear.where("fileId").equals(e).count()]), s = (e, t) => JSON.stringify([
						e?.id,
						e?.seriesRevision ?? 0,
						e?.exportInputRevision ?? 0,
						e?.sourceContentHash,
						e?.sourceType,
						e?.sourceProfileId,
						t
					]), i = s(t, n), o = vt([...(await he(e, r)).values()]);
					if (t && "actiware_off_wrist" === Ve(t.sourceType, t.sourceProfileId) && !o.includes("device_wear_state_evidence_stream") && n > 0 && o.push("device_wear_state_evidence_stream"), void 0 === t?.id) return o;
					if (await L(r, [
						r.files,
						r.sensorNonwear,
						r.projectMeta
					], async () => {
						const t = await r.files.get(e);
						return s(t, await r.sensorNonwear.where("fileId").equals(e).count()) === i && (t && (n = t.resolvedCapabilities, l = o, void 0 === n || n.length !== l.length || !l.every((e) => n.includes(e)) || 4 !== t.resolvedCapabilitiesRevision) && await B(r, [r.files], () => r.files.update(e, {
							resolvedCapabilities: o,
							resolvedCapabilitiesRevision: 4
						}), a), !0);
						var n, l;
					}, a)) return o;
				}
			}(e, t);
		} catch {
			return console.warn("Capability refresh failed. Stored data was kept; conditional capabilities remain unavailable until the next read."), [];
		}
	}(t.fileId, e.db), e.finalizedFileId = await de(t, e.db, e.signal), delete e.guard;
}
async function Mt(e, t) {
	try {
		await _t(e);
		const t = e.guard, a = !!t && await q(t, e.db);
		t && delete e.guard, a ? (console.warn("[local-processing] Rolled back an incomplete local ingest."), e.rollbackOutcome = "rolled_back") : e.rollbackOutcome ??= "nothing_to_roll_back";
	} catch {
		console.error("[local-processing] Incomplete local ingest rollback also failed."), e.rollbackOutcome = "failed";
	}
}
function At(e, t) {
	return "object" == typeof e && null !== e && void 0 !== t.rollbackOutcome && (e.__localIngestRollbackOutcome = t.rollbackOutcome), e;
}
async function Dt(e, t, a, r, n) {
	try {
		const s = await bt(e, t, r);
		await $(e, t.map((e) => e.date), s, a, n);
	} catch {
		n?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}
}
function xt(e, t, a, r) {
	return r <= 0 ? 0 : .9 * (e - 1 + (t - e + 1) * a / 3) / r;
}
function Nt({ scope: e, fileId: t, sourceContentHash: a, label: r, signalDates: n, onChunk: s }) {
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
		s?.(d, u, 0), await Ct(e), s?.(d, u, 1);
		try {
			const t = c.map((e) => e.facts);
			await re(c.map((e) => e.day), e.db, t.every((e) => void 0 !== e) ? t : void 0, e.signal);
		} catch (f) {
			throw console.warn("[local-processing] Activity-day persistence failed."), Je(f, `saveActivityDay (${r})`), l.activityFailed = !0, f;
		}
		l.saved += c.length;
		const m = c.map((e) => e.day.date);
		try {
			await $(t, m, m.filter((e) => n.has(e)), e.db, e.signal);
		} catch {
			console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
		}
		s?.(d, u, 2);
		const g = c.flatMap((e) => e.history.map((t) => ({
			...t,
			date: e.day.date
		})));
		await async function(e, t, a, r, n = y(), s) {
			const i = n, o = ye(), l = r.map((r) => {
				const n = {
					fileId: e,
					date: r.date ?? t,
					appVersion: o,
					results: r.results,
					...void 0 !== a ? { sourceContentHash: a } : {}
				};
				if (null === K(r)) throw new Error(`Refused an algorithm run for ${String(r.algoKey ?? r.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
				return void 0 !== r.cubeConfig ? {
					...n,
					cubeConfig: r.cubeConfig
				} : {
					...n,
					algoKey: r.algoKey
				};
			});
			try {
				return await Y(l, i, s), !0;
			} catch {
				s?.throwIfAborted(), console.error("[local-processing] Algorithm history batch write failed; retrying records individually.");
			}
			let c = !1;
			for (const d of l) try {
				await J(d, i, s);
			} catch {
				s?.throwIfAborted(), c = !0, console.error("[local-processing] An algorithm history write failed; latest scoring remains available.");
				try {
					await Tt({
						op: "algorithm_run_put",
						fileId: e,
						payload: {
							kind: "history_write_failed",
							...K(d),
							date: d.date,
							error: "history_write_failed"
						}
					}, i, s);
				} catch {}
			}
			return !c;
		}(t, c[0].day.date, a, g, e.db, e.signal) || (l.historyFailed = !0), s?.(d, u, 3), await _();
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
async function Ft(e, t = y(), a) {
	const r = t;
	try {
		const t = await e.identity(), n = await ae(e.fileId, r);
		await $e({
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
			profileProofStatus: We(t.profileProofStatus),
			temporalBasis: Xe(t.temporalBasis),
			calibration: e.calibration,
			diaryDisposition: n.length > 0 ? "present" : "absent",
			timestampGrid: e.timestampGrid ?? "epoch_5s_floor_seconds",
			dailyRows: e.rows,
			appVersion: ye(),
			startedAt: e.startedAt,
			finishedAt: e.finishedAt ?? (/* @__PURE__ */ new Date()).toISOString()
		}, r, a);
	} catch {
		a?.throwIfAborted(), console.error("[local-processing] Execution attestation write failed; day summaries remain stored.");
	}
}
async function Tt(e, t = y(), a) {
	const r = t, { appendWal: n, withWalTx: s } = await import("./wal-Bu50KF-H.js").then((e) => e.r);
	await s([], async () => {
		await n(e);
	}, r, a);
}
function kt(t, a) {
	return je(void 0 === a ? void 0 : { recording: a }, t?.sensorLocation ?? e.sensor_location);
}
function zt(e) {
	return E(e) ? e : 60;
}
function Et(e) {
	const t = Ze(e?.lstmSelection);
	return {
		selection: t,
		descriptor: qe(t.modelId),
		scoreOptions: {
			modelId: t.modelId,
			...null != t.threshold ? { threshold: t.threshold } : {}
		}
	};
}
function Ut(e) {
	const t = Et(e);
	return { extras: {
		lstmFeatureContract: "spectral_30s_mean_centered_v3_probabilities",
		lstmModelId: t.descriptor.id,
		lstmModelVersion: t.descriptor.version,
		lstmThreshold: String(t.selection.threshold ?? t.descriptor.defaultThreshold),
		ggirCountScorerContract: "zcy_ws3_count_epoch_v4"
	} };
}
const Pt = /* @__PURE__ */ new Set([
	2,
	5,
	6
]);
function Ot(e) {
	return !1 !== e.imputeTimegaps && (null == e.dataFormat || Pt.has(e.dataFormat)) && (null == e.configtz || e.configtz === e.desiredtz);
}
function jt(e) {
	return `GGIR zone ${e} from the GT3X info.txt TimeZone: the app's assumption, since GGIR takes desiredtz and configtz from its own settings`;
}
async function Lt(e, t, a, r, n) {
	const s = r.anglez.length;
	return (await e.ggirDstPlaceholderCuts(t, [...a], n)).map(({ start: e, count: t, beforeTimestampSec: a }) => {
		const n = (a) => a && a.length === s ? Array.from(a.subarray(e, e + t)) : void 0, i = n(r.anglex), o = n(r.angley), l = n(r.enmo), c = n(r.zcx), d = n(r.zcy), u = n(r.zcz);
		return {
			beforeTimestampSec: a,
			anglez: n(r.anglez) ?? [],
			...i ? { anglex: i } : {},
			...o ? { angley: o } : {},
			...l ? { enmo: l } : {},
			...c ? { zcx: c } : {},
			...d ? { zcy: d } : {},
			...u ? { zcz: u } : {}
		};
	});
}
var Bt = t({
	GGIR_NO_RESULTS_TABLES: () => $t,
	GgirImportRefusal: () => Vt,
	ensureSavedGgirNonwear: () => Qt,
	existingGgirRecording: () => ta,
	ggirNightsWithData: () => ea,
	isGeneactivEpochCsv: () => ma,
	processGgirMetaRDataFile: () => ia,
	processMappedMimsCsvFile: () => oa,
	refuseUnimportableGgirRecording: () => Ht
}), Vt = class extends Error {
	name = "GgirImportRefusal";
	category;
	constructor(e) {
		super(g(e)), this.category = e;
	}
};
function Ht(e, t) {
	const a = f(e);
	if (a && (a.notRead && a.notRead.length > 0 && t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR output",
		warning: a.notRead.map((e) => `not read: ${e.path}: ${e.reason}.`).join(" ")
	}), a.refusedNotRead)) throw new Vt("ggir-not-read");
}
const $t = "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.", Wt = "actoglance.source.ggir_rdata.v1";
function Xt(e, t) {
	const { username: a, selectedStudyId: r } = me.getState();
	return ve.captureWorkspaceBinding(e, {
		signal: t,
		username: a,
		studyId: r
	});
}
const Zt = /* @__PURE__ */ new WeakMap();
async function qt(e, t, a, r) {
	const n = e.timestampsMs.length;
	if (0 === n || e.enmo5s.length !== n || e.anglez5s.length !== n) throw new Error("GGIR meta RData did not contain aligned metashort timestamp, ENMO, and anglez columns.");
	const s = {
		desiredtz: e.desiredtz ?? void 0,
		dataFormat: e.inspection?.dformc ?? void 0,
		...r ? h(await a.ggirConfigValues(r)) : {}
	}, { runs: i, storedMs: o, steps: l } = await a.wallClockDstPlaceholders(e.timestampsMs, 1e3 * e.epochSeconds, Ot(s)), c = o.filter((e) => !Number.isNaN(e)), d = (e.timestampsMs[0] ?? 0) / 1e3, u = t?.sources.ms2 ? t.nonwear : e.nonwearShort, m = {
		...u.length === n ? { nonwear: u } : {},
		...e.invalidShort.length === e.timestampsMs.length ? { invalid: e.invalidShort } : {}
	}, g = t ? t.sources.ms3 ? t.sib : void 0 : e.part3Sib5s?.length === n ? e.part3Sib5s : void 0, f = await N(a, o, e.enmo5s, e.anglez5s, {
		...m,
		...t?.sources.ms2 ? { invalid: t.invalid } : {},
		...g ? { sib: g } : {}
	});
	if (t && (Ue(t.sleepWindows), t.sources.ms3 && t.sib.length !== n || t.sources.ms2 && (t.invalid.length !== n || t.nonwear.length > 0 && t.nonwear.length !== n))) throw new Error("GGIR Parts 2–3 do not cover the same 5 s epochs as Part 1.");
	return {
		n,
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
const Yt = /* @__PURE__ */ new WeakMap();
var Kt = class extends Error {};
const Jt = /* @__PURE__ */ new WeakMap();
async function Qt(e, t, a, r = !0) {
	let n = Jt.get(t);
	if (n || (n = /* @__PURE__ */ new Map(), Jt.set(t, n)), n.has(e)) {
		const t = n.get(e);
		if (!(t instanceof Kt)) return t;
		if (!r) throw t;
	}
	let s = Yt.get(t);
	s || (s = /* @__PURE__ */ new Map(), Yt.set(t, s));
	const i = s.get(e);
	if (i) return i;
	const o = (async () => {
		const r = await le(e, t);
		if (!we(r)) return null;
		if (0 === (await pe(e, t)).length) return null;
		const n = await t.ggirResultsBundles.get(e);
		if (!n) return null;
		const s = G(a);
		if (r?.ggirSavedNonwearSettled) return Be(n.configCsv, s);
		const i = [...(await he(e, t)).values()].filter((e) => e.ggirTimestamps?.byteLength && e.unifiedNonwearMasks?.[p.ggir_saved]?.byteLength !== e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), o = i.filter((e) => e.vanHeesNonwear?.byteLength === e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), l = i.filter((e) => !o.includes(e)), d = l.length ? await c(t, e) : null, u = d?.ms2 ? await s.reviewGgirResults({
			part1: new Uint8Array(d.part1),
			configCsv: d.configCsv,
			ms2: new Uint8Array(d.ms2),
			edits: [],
			crossCheck: !1
		}) : null, m = d && u?.nonwear.length ? (await qt(await s.readGgirMeta(new Uint8Array(d.part1), null, !0), u, s, d.configCsv)).ggirByDate : null, g = [...o.map((e) => ({
			date: e.date,
			unifiedNonwearMasks: {
				...e.unifiedNonwearMasks,
				[p.ggir_saved]: e.vanHeesNonwear
			},
			vanHeesNonwear: null
		})), ...m ? l.map((e) => {
			const t = m.get(e.date), a = new Float64Array(e.ggirTimestamps);
			if (!t?.nonwear || t.timestamps.length !== a.length || !a.every((e, a) => e === t.timestamps[a])) throw new Kt("Saved GGIR nonwear does not match the stored epoch grid.");
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
			await Promise.all(g.map(({ date: r, ...n }) => X(e, r, n, t, a))), await t.files.update(e, { ggirSavedNonwearSettled: !0 });
		}, a), g.length, Be(n.configCsv, s);
	})().then((t) => (n.set(e, t), t)).catch((t) => {
		throw !a?.aborted && t instanceof Kt && n.set(e, t), console.warn("[local-processing] Could not fill saved GGIR nonwear from retained ms2."), t;
	}).finally(() => {
		s.delete(e);
	});
	return s.set(e, o), o;
}
async function ea(e, t, a) {
	const r = await Promise.all(e.map(async (e) => t.has(e) || t.has(await a(e) ?? "")));
	return e.filter((e, t) => r[t]);
}
async function ta(e, t, a, r) {
	const n = r ?? await S(e, void 0, a), s = await oe(n.fullHash, t) ?? await se(n.prefixHash, t, n.fullHash);
	return s?.id ? s : void 0;
}
const aa = [
	["ms2", "stockMs2"],
	["ms3", "stockMs3"],
	["ms4", "stockMs4"],
	["ms5", "stockMs5"]
], ra = (e, t) => {
	if (void 0 === e || void 0 === t) return e === t;
	const a = new Uint8Array(e), r = new Uint8Array(t);
	return a.length === r.length && a.every((e, t) => e === r[t]);
};
async function na(e, t, a) {
	const r = f(t);
	if (!r) return null;
	const [n, ...s] = await Promise.all([r.configCsv.text(), ...aa.map(([e]) => r[e]?.arrayBuffer())]), i = await r.qwindowCsv?.text();
	return a.transaction("rw", [
		a.files,
		a.ggirResultsBundles,
		a.ggirResultsBlobs,
		a.ggirCorrectedValues
	], async () => {
		const [t, o] = await Promise.all([a.ggirResultsBlobs.get(e), a.ggirResultsBundles.get(e)]);
		return t && o ? o.configCsv === n && aa.every(([e, a], r) => ra(t[a] ?? t[e], s[r])) ? !r.resultsCsv || t.resultsCsv ? null : (await a.ggirResultsBundles.update(e, {
			resultsCsv: r.resultsCsv,
			...void 0 !== i && void 0 === t.qwindowCsv ? { qwindowCsv: i } : {}
		}), await a.ggirCorrectedValues.delete(e), await te(a, [e]), "added") : "different_run" : null;
	});
}
const sa = {
	none: "File already imported",
	added: "File already imported; GGIR's results files added",
	different_run: "File already imported; this folder holds a different GGIR run of it, so the stored one was kept"
};
async function ia(e, t, a, r, n, s, i) {
	const c = Zt.get(e);
	Zt.delete(e);
	const g = n?.db ?? y(), h = r?.ggirConfig ?? await j(g), w = s ?? u(), b = n ?? {
		db: g,
		attemptId: l(),
		auditBinding: Xt(g, a),
		signal: a,
		recording: await ht(e, a, w)
	};
	R(a, "processGgirMetaRDataFile"), Ht(e, t);
	const I = i ?? (() => {
		d(w);
	});
	t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR meta RData..."
	});
	const { prefixHash: _, fullHash: G } = c?.value?.hashes ?? await S(e, (e) => {
		t?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, a), D = await ta(e, g, a, {
		prefixHash: _,
		fullHash: G
	});
	if (D?.id) {
		const a = await na(D.id, e, g);
		t?.({
			phase: "complete",
			percent: 100,
			message: sa[a ?? "none"]
		});
		const r = D.availableDates;
		return await ne(e.name, g), {
			alreadyImported: !0,
			...a ? { ggirResultsFiles: a } : {},
			fileId: D.id,
			availableDates: r,
			sourceType: D.sourceType ?? o.GGIR_5S_UPLOAD
		};
	}
	const x = await Z(e.name, g);
	if (x && "incomplete" !== x.ingestState) throw new Vt(v);
	if (t?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing GGIR metashort and metalong..."
	}), R(a, "before reading GGIR RData"), c && "error" in c) throw c.error;
	const N = f(e), F = c?.value?.input ?? (N ? await Te(N) : null), T = c?.value || !F ? void 0 : await M(w, (e) => e.prepareGgirRecording(F), {
		ms: A,
		label: "prepareGgirRecording",
		signal: a,
		cancel: I
	}), z = T && F ? (E = F, null === (U = T.cleanedNightsCsv) ? E : {
		...E,
		cleanedNightsCsv: U
	}) : F;
	var E, U;
	const B = c?.value || z ? void 0 : await e.arrayBuffer();
	R(a, "after reading GGIR RData");
	const V = c?.value?.meta ?? T?.meta ?? await M(w, (e) => e.readGgirMeta(m(new Uint8Array(B), [B]), h.csvText, !1), {
		ms: 3e5,
		label: "readGgirMeta",
		signal: a,
		cancel: I
	}), X = function(e, t) {
		return t && !t.sources.ms4 && e?.notRead?.some((e) => /(?:^|\/)meta\/ms4\.out\//u.test(e.path)) ? {
			...t,
			importNotices: [...t.importNotices, Ee]
		} : t;
	}(N, c?.value?.review ?? T?.review ?? null), q = c?.value?.computed ?? await async function(e, t, a, r, n) {
		const s = f(e)?.configCsv, { n: i, startSec: o, dstRuns: l, storedMs: c, clockSteps: d, wallClockMs: u, timegaps: m, ggirSib: g, ggirByDate: h } = await qt(t, a, r, await s?.text()), w = [...h.keys()].sort(), y = a ? await ea(Fe(a), h, (e) => r.nextDate(e)) : [], v = y.length > 0 ? y : await O(h, r);
		if (0 === w.length) throw new Error("GGIR meta RData did not contain any dated 5 s epochs.");
		const b = w.flatMap((e) => {
			const t = h.get(e);
			if (!t) return [];
			R(n, `saveActivityDay ${e}`);
			const r = /* @__PURE__ */ new Float64Array();
			return [{
				fileId: 0,
				date: e,
				timestamps: r.buffer,
				axisY: r.buffer,
				vectorMagnitude: r.buffer,
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
			facts: await Promise.all(b.map((e) => ce(e, r))),
			signalDates: await bt(0, b, r).catch((e) => (n?.throwIfAborted(), Ce("warn", "GGIR circadian coverage store failed", Ge(e)), null)),
			placeholders: l.length > 0 ? await Lt(r, 1e3 * o, l, {
				anglez: t.anglez5s,
				enmo: t.enmo5s
			}, u) : void 0,
			summaries: a ? await Ne(a, 0, n, r) : [],
			markers: a ? await ke(a, d, r) : void 0
		};
	}(e, V, X, w, a), { n: Y, startSec: K, dstRuns: J, storedMs: Q, clockSteps: ee, wallClockMs: te, timegaps: se, rdataConfig: ie, availableDates: oe, nightDates: de, ggirSib: ue } = q;
	t?.({
		phase: "storing",
		percent: 55,
		message: "Saving GGIR 5 s epochs..."
	});
	const me = await Rt(b, {
		filename: e.name,
		devicePreset: "ggir_5s_meta",
		epochLengthSeconds: V.epochSeconds,
		availableDates: de,
		fileHash: _,
		sourceContentHash: G,
		sourceSizeBytes: e.size,
		source: "local",
		eventMarkerInstants: [],
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: o.GGIR_5S_UPLOAD,
		...K > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * K)).toISOString() } } : {},
		sourceProfileId: Wt,
		...V.desiredtz ? { ggirTimezone: V.desiredtz } : {},
		...J.length + ee.length > 0 ? { ggirClockBasis: (ge = se, fe = null != ie, Ot(ge) ? `GGIR's imputed fall-back hour left out (${fe ? "config.csv: imputeTimegaps TRUE, configtz = desiredtz" : "no config.csv, so GGIR's defaults are assumed"})` : `GGIR's repeated fall-back hour kept as recorded data (${!1 === ge.imputeTimegaps ? "imputeTimegaps = FALSE" : null == ge.dataFormat || Pt.has(ge.dataFormat) ? `configtz ${ge.configtz ?? ""} differs from desiredtz ${ge.desiredtz ?? ""}` : `GGIR does not gap-impute data format ${String(ge.dataFormat)}`})`) } : {},
		...ee.length > 0 ? { ggirClockSteps: ee } : {},
		...J.length > 0 ? { ggirDstPlaceholders: q.placeholders } : {}
	}, w);
	var ge, fe;
	if ("already_complete" === me.kind) {
		const t = me.record.id;
		if (null == t) throw new Error("Completed local import identity is invalid.");
		const a = await na(t, e, g);
		return await ne(e.name, g), {
			alreadyImported: !0,
			...a ? { ggirResultsFiles: a } : {},
			fileId: t,
			availableDates: me.record.availableDates,
			sourceType: me.record.sourceType ?? o.GGIR_5S_UPLOAD
		};
	}
	const pe = me.guard.fileId;
	let he = null, we = !1;
	const ye = !X && !ue, ve = await N?.qwindowCsv?.text();
	if (X && z) try {
		const t = z.configCsv ? await H(z.configCsv, w) : void 0;
		if (await Ct(b), await W(q.summaries.map((e) => ({
			...e,
			fileId: pe
		})), g, a), await L(g, [g.files, g.ggirResultsBundles], async () => {
			await g.ggirResultsBundles.put(ze(pe, N?.recordingFile ?? e.name, z, X, {
				part2Reports: N?.part2Reports,
				personReports: N?.personReports,
				qwindowCsv: ve,
				resultsCsv: N?.resultsCsv
			})), await g.files.update(pe, {
				ggirBundleRevision: crypto.randomUUID(),
				ggirSavedNonwearSettled: !0,
				...t ? { ggirNonwearDetector: t } : {}
			});
		}, a), !await Oe(pe, X, kt(r, b.recording), g, !0, ee, a, q.markers)) throw new Error("GGIR results markers could not be saved.");
	} catch (Ve) {
		throw await Mt(b), Ve;
	}
	const be = V.invalidShort.length === Y ? V.invalidShort : null, Ie = X ? null : await M(w, (e) => e.runGgirFromEpoch({
		source: "ggir_part1_rdata",
		invalidMask: be ? "ggir_part2" : "none"
	}, V.anglez5s, V.enmo5s, V.epochSeconds, K, be ?? new Uint8Array(Y), V.desiredtz ?? void 0, h.csvText).catch((e) => (C(e, a, "runGgirFromEpoch (GGIR RData)"), Ce("warn", "GGIR epoch analysis failed", Ge(e)), we = !0, null)), {
		ms: A,
		label: "runGgirFromEpoch (GGIR RData)",
		signal: a,
		cancel: I
	});
	if (Ie?.days?.length) {
		const e = P(Ie.days, pe, void 0, h);
		await Ct(b), await W(e, g, a).catch((e) => {
			Ce("warn", "GGIR daily summary store failed", Ge(e)), we = !0;
		});
	}
	const Re = function(e, t) {
		const a = [];
		if (!t || t.length !== e.length) return a;
		let r = null;
		for (let n = 0; n < e.length; n++) {
			const s = e[n] ?? 0, i = 0 !== (t[n] ?? 0);
			if (i && null === r && (r = s), (!i || n === e.length - 1) && null !== r) {
				const t = i && n === e.length - 1 ? s + 5e3 : s;
				a.push([r / 1e3, t / 1e3]), r = null;
			}
		}
		return a;
	}(ee.length > 0 ? Q : V.timestampsMs, V.nonwearShort), Me = new Map((X ? [] : await ae(pe, g)).map((e) => [e.analysisDate, e])), Ae = V.anglez5sImputed?.length === Y ? V.anglez5sImputed : V.anglez5s, De = V.enmo5sImputed?.length === Y ? V.enmo5sImputed : V.enmo5s;
	he = X ? he : await k(pe, Ae, K, Re, Me, r?.hasptVariant, {
		activity5s: De,
		...be ? { invalid5s: be } : {},
		dstRuns: J,
		wallClockMs: te,
		...V.desiredtz ? { timezone: V.desiredtz } : {}
	}, _e(r?.sleepPeriodDetectionConfig, Se), kt(r, b.recording), g, a, w, I, b.auditBinding);
	const Ue = q.dayRecords.map((e) => ({
		...e,
		fileId: pe
	}));
	let je = !1;
	await Ct(b);
	const Le = (await re(Ue, g, q.facts, a).catch((e) => (Ce("warn", "GGIR activity day store failed", Ge(e)), Je(e, "saveActivityDay (GGIR RData)"), je = !0, []))).length;
	if (!je && q.signalDates && await $(pe, oe, q.signalDates, g, a).catch((e) => {
		a?.throwIfAborted(), Ce("warn", "GGIR circadian coverage store failed", Ge(e));
	}), je || Le !== oe.length || 0 === Le) throw await Mt(b), /* @__PURE__ */ new Error("Could not save any GGIR RData epochs — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	R(a, "before completing GGIR RData ingest"), await Gt(b);
	const Be = [
		...X?.configWarnings ?? [],
		...X?.importNotices ?? [],
		X?.sources.ms4 && Pe(X),
		N && !N.resultsCsv && "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.",
		je && "One or more days of GGIR RData epochs could not be saved.",
		he && (X ? "GGIR results markers could not be saved." : "Sleep window detection (HDCZA) could not place auto-markers."),
		we && (X ? "GGIR source summaries could not be saved." : "GGIR daily summaries could not be computed or saved for this GGIR RData file."),
		ye && "GGIR HASIB sleep/wake flags could not be computed."
	].filter(Boolean).join(" ");
	return t?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete",
		...Be ? { warning: Be } : {}
	}), {
		fileId: pe,
		availableDates: de,
		sourceType: o.GGIR_5S_UPLOAD,
		...X ? { ggir: {
			...(await import("./ggir-results-import-C56nIWoz.js").then((e) => e.f)).ggirImportCounts(X, xe(N?.part2Reports, X, N?.recordingFile ?? e.name)),
			bodySite: (await le(pe, g))?.recording?.bodySite
		} } : {}
	};
}
async function oa(e, t, i, c, d, m, g) {
	const f = m?.db ?? y(), p = g ?? G(d), h = m ?? {
		db: f,
		attemptId: l(),
		auditBinding: Xt(f, d),
		signal: d,
		recording: await ht(e, d, p)
	};
	R(d, "processMappedMimsCsvFile"), c?.({
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
	}, d), b = await ta(e, f, d, {
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
	const I = await Z(e.name, f);
	if (I && "incomplete" !== I.ingestState) throw new ge();
	c?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing mapped MIMS columns..."
	}), R(d, "before reading mapped MIMS CSV");
	const _ = await async function(e, t, i, o) {
		const l = s(await e.text()), c = r(l);
		if (c.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
		const d = c.records, m = d[t]?.text;
		if (!m) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
		const g = a(m), f = n(m, g), p = z(i, f);
		if (p.length > 0) throw new Error(T(p));
		const h = nt(f, i.datetime_column), w = nt(f, i.date_column), y = nt(f, i.time_column), v = nt(f, i.mims_unit_column), b = nt(f, i.mims_unit_x_column), I = nt(f, i.mims_unit_y_column), S = nt(f, i.mims_unit_z_column), _ = [], R = [], C = [], G = [], M = [], A = [];
		for (let a = t + 2; a <= d.length; a++) {
			const e = d[a - 1];
			if (!e?.text.trim()) continue;
			const t = n(e.text, g);
			A.push({
				sourceRow: e.sourceRow,
				row: t,
				label: dt(t, h, w, y)
			});
		}
		const D = await (o ?? u()).sourceLabelsWallClockMs(A.map(({ label: e }) => e)), x = A.findIndex((e, t) => !Number.isFinite(D[t] ?? NaN));
		if (x >= 0) throw new Error(`Could not parse timestamp on row ${String(A[x].sourceRow)} of the mapped MIMS CSV.`);
		for (const [a, { row: r }] of A.entries()) _.push(D[a]), R.push(ut(r, v)), C.push(ut(r, b)), G.push(ut(r, I)), M.push(ut(r, S));
		if (0 === _.length) throw new Error("The mapped MIMS CSV did not contain any data rows.");
		return {
			timestampsMs: new Float64Array(_),
			mimsUnit: null === v ? /* @__PURE__ */ new Float64Array() : new Float64Array(R),
			mimsUnitX: null === b ? /* @__PURE__ */ new Float64Array() : new Float64Array(C),
			mimsUnitY: null === I ? /* @__PURE__ */ new Float64Array() : new Float64Array(G),
			mimsUnitZ: null === S ? /* @__PURE__ */ new Float64Array() : new Float64Array(M)
		};
	}(e, t, i, p);
	R(d, "after reading mapped MIMS CSV");
	const C = o.EPOCHS_60S, M = await async function(e, t) {
		const a = /* @__PURE__ */ new Map(), r = t.timestampsMs.length, n = mt(t.mimsUnit, r), s = mt(t.mimsUnitX, r), i = mt(t.mimsUnitY, r), o = mt(t.mimsUnitZ, r), l = Float64Array.from(t.timestampsMs, (e) => e / 1e3);
		for (const [c, d] of await x(e, l)) a.set(c, {
			timestamps: F(l, d, 0),
			...n ? { mimsUnit: F(n, d, NaN) } : {},
			...s ? { mimsUnitX: F(s, d, NaN) } : {},
			...i ? { mimsUnitY: F(i, d, NaN) } : {},
			...o ? { mimsUnitZ: F(o, d, NaN) } : {}
		});
		return a;
	}(p, _), A = [...M.keys()].sort(), D = await O(M, p);
	c?.({
		phase: "storing",
		percent: 55,
		message: "Saving mapped MIMS epochs..."
	});
	const N = await Rt(h, {
		filename: e.name,
		devicePreset: "mims_metrics",
		epochLengthSeconds: 60,
		availableDates: D,
		fileHash: w,
		sourceContentHash: v,
		sourceSizeBytes: e.size,
		source: "local",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: C,
		...(_.timestampsMs[0] ?? 0) > 0 ? { recording: { effectiveTime: new Date(_.timestampsMs[0] ?? 0).toISOString() } } : {}
	}, p);
	if ("already_complete" === N.kind) {
		const e = N.record.id;
		if (null == e) throw new Error("Completed local import identity is invalid.");
		return {
			alreadyImported: !0,
			fileId: e,
			availableDates: N.record.availableDates,
			sourceType: N.record.sourceType ?? C
		};
	}
	const k = N.guard.fileId;
	let E = !1, U = 0;
	for (const a of A) {
		const e = M.get(a);
		if (!e) continue;
		R(d, `saveActivityDay ${a}`);
		const t = /* @__PURE__ */ new Float64Array();
		await Ct(h);
		const r = {
			fileId: k,
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
		await V(r, f, d).then(() => !0).catch((e) => (Ce("warn", "MIMS activity day store failed", Ge(e)), Je(e, "saveActivityDay (mapped MIMS CSV)"), E = !0, !1)) && (U += 1, await Dt(k, [r], f, p, d));
	}
	if (E || U !== A.length || 0 === U) throw await Mt(h), /* @__PURE__ */ new Error("Could not save any mapped MIMS data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return R(d, "before completing mapped MIMS ingest"), await Gt(h), c?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete"
	}), {
		fileId: k,
		availableDates: D,
		sourceType: C
	};
}
const la = 12, ca = 16384, da = 16777216;
function ua(e) {
	const t = e.trim();
	if (!/^\d{4}-\d{2}-\d{2}/.test(t)) return null;
	const a = t.includes("	") ? "	" : ",";
	return t.split(a).length;
}
async function ma(e, t, a) {
	const r = Math.min(e.size, da);
	let n = Math.min(ca, r);
	for (;;) {
		R(t, "before reading GeneActiv CSV header");
		const s = await I(e, n, a);
		R(t, "after reading GeneActiv CSV header");
		const i = n >= r, o = s.split("\n"), l = i && n >= e.size ? o : o.slice(0, -1);
		for (const e of l) {
			const t = ua(e);
			if (null !== t) return t >= la;
		}
		if (i) return !1;
		n = Math.min(2 * n, r);
	}
}
export { at as A, gt as C, ct as D, ot as E, Ke as M, Qe as O, pt as S, it as T, Gt as _, Ht as a, bt as b, Ut as c, kt as d, Ct as f, xt as g, Nt as h, oa as i, et as j, Je as k, zt as l, Rt as m, ma as n, Lt as o, Ft as p, ia as r, jt as s, Bt as t, Et as u, Mt as v, lt as w, ht as x, At as y };
