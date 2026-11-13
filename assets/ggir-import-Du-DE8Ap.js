import { G as e, J as t, N as a, Nn as r, St as n, U as s, Z as o, f as i, s as l, tt as c } from "./schema-Bbr1Zg5F.js";
import { i as d, r as u, s as m } from "./workers-BSP07cYu.js";
import { A as g, D as f, T as p, U as h, V as w, c as y, i as v, n as b, r as S, s as I, w as _ } from "./local-data-source-DPqi7r7Q.js";
import { A as R, d as C, dt as G, q as M, t as A, u as D } from "./workspace-db-BEYycimi.js";
import { l as N, r as x, u as T } from "./content-hash-CZ-UAlQR.js";
import { d as F, l as k, m as E, o as z, s as U, t as P, v as j } from "./background-jobs-DGv04HlX.js";
import { n as O, o as L } from "./nonwear-display-slots-BhrTaGYg.js";
import { a as V, i as B } from "./project-revision-C5TJ0HPW.js";
import { J as H, K as $, O as W, Q as X, V as Z, W as q, X as Y, Xt as K, Y as J, Z as Q, c as ee, f as te, g as ae, gt as re, h as ne, k as se, l as oe, lt as ie, m as le, o as ce, q as de, r as ue, s as me, tn as ge, u as fe, w as pe, y as he } from "./store-JiWMTGuM.js";
import { Z as we } from "./per-source-defaults-DGxXQBbZ.js";
import { r as ye, t as ve } from "./audit-log-DX_8V0K_.js";
import { a as be, g as Se, h as Ie, m as _e, n as Re, o as Ce, p as Ge, s as Me, t as Ae, v as De } from "./ggir-results-import-B_zAUkw4.js";
import { T as Ne, _ as xe, a as Te, k as Fe, s as ke } from "./local-nonwear-unified-9vIGfRaW.js";
import { _ as Ee, p as ze } from "./diary-local-import-contract-DJjW5PDa.js";
import { a as Ue } from "./csv-column-mapping-BSSY09yh.js";
import { t as Pe } from "./file-sensor-location-D3poeAvf.js";
import { A as je, j as Oe } from "./local-export-shard-worker-BTR6svpv.js";
import { i as Le, n as Ve, r as Be } from "./local-provenance-BDxj4U45.js";
import { i as He, n as $e } from "./lstm-model-manager-DU8iC5fp.js";
const We = M((e) => ({
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
	re(e) && We.getState().reportStorageFull(t, "Browser storage quota was exceeded while saving local results.");
}
function qe(e) {
	return "the local model runtime or its input contract rejected the operation";
}
function Ye(e) {
	return `LSTM ONNX sleep/wake scoring could not be computed for this raw file${e ? ` because ${e}` : ""}. Count-based scoring is intact.`;
}
function Ke(e) {
	if (!e || 0 === e.length) return "";
	let t = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, r = 0;
	for (const n of e) t = Math.min(t, n), a = Math.max(a, n), r += n;
	return ` (sleep probability min=${t.toFixed(3)}, mean=${(r / e.length).toFixed(3)}, max=${a.toFixed(3)})`;
}
function Je(e, t) {
	if (!e || 0 === e.length) return null;
	let a = 0;
	for (const r of e) a += r ? 1 : 0;
	return 0 === a ? `LSTM ONNX sleep/wake scoring produced an all-wake result${Ke(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : a === e.length ? `LSTM ONNX sleep/wake scoring produced an all-sleep result${Ke(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : null;
}
function Qe(e) {
	return /[",\r\n]/.test(e) ? `"${e.replace(/"/g, "\"\"")}"` : e;
}
function et(e, t) {
	if (!t) return null;
	const a = Ue(t), r = e.findIndex((e) => Ue(e) === a);
	return r >= 0 ? r : null;
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
	for (let r = 0; r < e.length; r += 1) {
		const n = t[r];
		1 === e[r] && null != n && Number.isFinite(n) && a.push(n / 1e3);
	}
	return Float64Array.from(a.sort((e, t) => e - t));
}
function rt(e, t, a) {
	const r = new Uint8Array(e.length);
	let n = 0;
	for (const s of Array.from(t)) {
		for (; n + 1 < e.length && (e[n + 1] ?? 1 / 0) <= s;) n += 1;
		const t = e[n];
		null != t && s >= t && s < t + a && (r[n] = 1);
	}
	return r;
}
function nt(e, t) {
	const a = Date.parse(`${t}T00:00:00Z`) / 1e3, r = [];
	for (const n of Array.from(e)) n >= a && n < a + 86400 && r.push(n);
	return Float64Array.from(r);
}
async function st(r, n, o, i) {
	F(i, "standardizing mapped CSV");
	const l = t(await r.text());
	F(i, "standardizing mapped CSV");
	const c = e(l);
	if (c.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
	const d = c.records, u = d[n]?.text;
	if (!u) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
	const m = a(u), g = s(u, m), f = S(o, g);
	if (f.length > 0) throw new Error(h(f));
	const p = et(g, o.datetime_column), w = et(g, o.date_column), y = et(g, o.time_column), v = et(g, o.activity_column), b = et(g, o.axis_x_column), I = et(g, o.axis_z_column), _ = et(g, o.vector_magnitude_column), R = [
		{
			header: "ENMO",
			idx: et(g, o.enmo_column)
		},
		{
			header: "AngleZ",
			idx: et(g, o.anglez_column)
		},
		{
			header: "GGIR_SIB",
			idx: et(g, o.ggir_sib_column)
		},
		{
			header: "GGIR_NONWEAR",
			idx: et(g, o.ggir_nonwear_column)
		},
		{
			header: "MIMS_UNIT",
			idx: et(g, o.mims_unit_column)
		},
		{
			header: "MIMS_UNIT_X",
			idx: et(g, o.mims_unit_x_column)
		},
		{
			header: "MIMS_UNIT_Y",
			idx: et(g, o.mims_unit_y_column)
		},
		{
			header: "MIMS_UNIT_Z",
			idx: et(g, o.mims_unit_z_column)
		}
	].filter((e) => null !== e.idx), C = et(g, o.event_marker_column), G = null === C ? null : [];
	if (null === v) throw new Error("Column-mapped CSV mapping requires an activity/counts column before import.");
	if (null === p && (null === w || null === y)) throw new Error("Column-mapped CSV mapping requires Date/time, or both Date and Time, before import.");
	const M = null !== p ? ["Datetime", "Axis1"] : [
		"Date",
		"Time",
		"Axis1"
	];
	null !== b && M.push("Axis2"), null !== I && M.push("Axis3"), null !== _ && M.push("Vector Magnitude"), M.push(...R.map((e) => e.header));
	const A = [M.join(",")];
	for (let e = n + 1; e < d.length; e += 1) {
		(e - n - 1) % 1e3 == 0 && (await U(), F(i, "standardizing mapped CSV"));
		const t = d[e];
		if (!t.text.trim()) continue;
		const a = s(t.text, m), r = null !== p ? [a[p] ?? "", a[v] ?? ""] : [
			null === w ? "" : a[w] ?? "",
			null === y ? "" : a[y] ?? "",
			a[v] ?? ""
		];
		null !== b && r.push(a[b] ?? ""), null !== I && r.push(a[I] ?? ""), null !== _ && r.push(a[_] ?? "");
		for (const e of R) r.push(a[e.idx] ?? "");
		G && null !== C && G.push(tt(a[C])), A.push(r.map(Qe).join(","));
	}
	const D = new Blob([`${A.join("\n")}\n`], { type: "text/csv" });
	return {
		name: r.name,
		lastModified: r.lastModified,
		size: D.size,
		arrayBuffer: () => D.arrayBuffer(),
		text: () => D.text(),
		slice: (e, t) => D.slice(e, t),
		...G ? { eventMarkerRows: Uint8Array.from(G) } : {}
	};
}
function ot(e, t, a, r) {
	if (null !== t) return e[t] ?? "";
	const n = null === a ? "" : e[a] ?? "", s = null === r ? "" : e[r] ?? "";
	return `${n.trim()} ${s.trim()}`;
}
function it(e, t) {
	if (null === t) return NaN;
	const a = e[t]?.trim() ?? "";
	if (!a) return NaN;
	const r = Number(a);
	return Number.isFinite(r) ? r : NaN;
}
function lt(e, t) {
	return e.length === t && e.some((e) => Number.isFinite(e)) ? e : void 0;
}
function ct(e, t) {
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
async function dt(e, t) {
	return await Ee((t) => t.recordingFacts(e), new ze(t)) ?? {};
}
async function ut(e, t, a, r) {
	a?.throwIfAborted();
	const n = await N(e, 65536, r);
	a?.throwIfAborted();
	const s = new TextDecoder("utf-8", { fatal: !1 }).decode(n);
	for (const o of [/measurement frequency\s*[,:\t]\s*(\d+)/i, /sample rate(?:\s*hz)?\s*[,:\t]\s*(\d+)/i]) {
		const e = o.exec(s);
		if (e && e[1]) {
			const t = Number.parseInt(e[1], 10);
			if (Number.isFinite(t) && t > 0) return t;
		}
	}
	return j[t];
}
async function mt(e, t, a, r) {
	if (t?.throwIfAborted(), function(e) {
		const t = e.name.toLowerCase();
		return t.endsWith(".rdata") || t.endsWith(".rda") || t.endsWith(".aw5") || "aw5Subject" in e;
	}(e)) return {};
	const n = Math.max(65536, 2048);
	let s;
	try {
		s = await N(e, n, r);
	} catch {
		return {};
	}
	if (t?.throwIfAborted(), e.name.toLowerCase().endsWith(".gt3x")) {
		const e = function(e) {
			const t = new DataView(e.buffer, e.byteOffset, e.byteLength);
			let a = 0;
			for (; a + 30 <= e.byteLength;) {
				if (67324752 !== t.getUint32(a, !0)) return null;
				const r = t.getUint16(a + 8, !0), n = t.getUint32(a + 18, !0), s = t.getUint16(a + 26, !0), o = a + 30 + s + t.getUint16(a + 28, !0);
				if (o > e.byteLength) return null;
				const i = o + n;
				if (new TextDecoder().decode(e.subarray(a + 30, a + 30 + s)).toLowerCase().endsWith("info.txt")) return 0 !== r || i > e.byteLength ? null : new TextDecoder("utf-8", { fatal: !1 }).decode(e.subarray(o, i));
				if (0 === n) return null;
				a = i;
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
	temperature_epoch_stream: (e) => null != e.temperature && xe(new Float64Array(e.temperature)),
	sleep_wake_epoch_stream: (e) => null != e.algorithmResults?.[o.ACTIWARE_SLEEP_WAKE],
	device_wear_state_evidence_stream: (e) => !0 === e.actiwareOffWristChannel
};
function pt(e) {
	const t = [];
	for (const [a, r] of Object.entries(ft)) for (const n of e) if (r(n)) {
		t.push(a);
		break;
	}
	for (const a of ke) e.some((e) => null != Ne(e, a, "")) && t.push(gt(a));
	return t;
}
async function ht(e, t, a) {
	const r = [];
	for (const o of t) {
		const t = Oe(e, o);
		t && r.push(t.wire);
	}
	if (0 === r.length) return [];
	const { request: n, transfer: s } = je(r);
	return (await a.computeCircadian(m(n, s))).day_summaries.filter((e) => e.has_signal).map((e) => e.analysis_date);
}
function wt(e) {
	return e instanceof Error ? e : /* @__PURE__ */ new Error("Local ingest lease renewal failed.");
}
const yt = Math.max(1e3, Math.floor(ce / 4));
async function vt(e) {
	void 0 !== e.heartbeatId && (clearInterval(e.heartbeatId), delete e.heartbeatId), await e.heartbeatPending, delete e.heartbeatPending;
}
async function bt(e, t, a) {
	const r = ue.getState(), n = {
		...e.recording,
		...t.recording
	}, s = e.placement ?? {
		bodySite: r.sensorLocation,
		laterality: r.participantLaterality
	}, o = await fe({
		...t,
		...t.ggirPart2Config ? { ggirNonwearDetector: await ge(t.ggirPart2Config.csvText, a ?? P(e.signal)) } : {},
		...e.ingestProvenance ? { ingestProvenance: e.ingestProvenance } : {},
		recording: ct(n, s)
	}, e.attemptId, e.db);
	return "started" === o.kind && (e.guard = o.guard, function(e) {
		void 0 === e.heartbeatId && (e.heartbeatId = setInterval(() => function(e) {
			const t = e.guard;
			t && void 0 === e.heartbeatError && (e.heartbeatPending = (e.heartbeatPending ?? Promise.resolve()).then(() => J(t, e.db)).catch((t) => {
				e.heartbeatError = t;
			}));
		}(e), yt));
	}(e)), o;
}
async function St(e) {
	if (await e.heartbeatPending, void 0 !== e.heartbeatError) throw wt(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new ee();
	return await J(t, e.db), t;
}
async function It(e) {
	if (await vt(e), void 0 !== e.heartbeatError) throw wt(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new ee();
	await async function(e, t = A()) {
		try {
			return await async function(e, t = A(), a) {
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
					]), o = s(t, n), i = pt([...(await he(e, r)).values()]);
					if (t && "actiware_off_wrist" === O(t.sourceType, t.sourceProfileId) && !i.includes("device_wear_state_evidence_stream") && n > 0 && i.push("device_wear_state_evidence_stream"), void 0 === t?.id) return i;
					if (await V(r, [
						r.files,
						r.sensorNonwear,
						r.projectMeta
					], async () => {
						const t = await r.files.get(e);
						return s(t, await r.sensorNonwear.where("fileId").equals(e).count()) === o && (t && (n = t.resolvedCapabilities, l = i, void 0 === n || n.length !== l.length || !l.every((e) => n.includes(e)) || 4 !== t.resolvedCapabilitiesRevision) && await B(r, [r.files], () => r.files.update(e, {
							resolvedCapabilities: i,
							resolvedCapabilitiesRevision: 4
						}), a), !0);
						var n, l;
					}, a)) return i;
				}
			}(e, t);
		} catch {
			return console.warn("Capability refresh failed. Stored data was kept; conditional capabilities remain unavailable until the next read."), [];
		}
	}(t.fileId, e.db), e.finalizedFileId = await le(t, e.db, e.signal), delete e.guard;
}
async function _t(e, t) {
	try {
		await vt(e);
		const t = e.guard, a = !!t && await Y(t, e.db);
		t && delete e.guard, a ? (console.warn("[local-processing] Rolled back an incomplete local ingest."), e.rollbackOutcome = "rolled_back") : e.rollbackOutcome ??= "nothing_to_roll_back";
	} catch {
		console.error("[local-processing] Incomplete local ingest rollback also failed."), e.rollbackOutcome = "failed";
	}
}
function Rt(e, t) {
	return "object" == typeof e && null !== e && void 0 !== t.rollbackOutcome && (e.__localIngestRollbackOutcome = t.rollbackOutcome), e;
}
async function Ct(e, t, a, r, n) {
	try {
		const s = await ht(e, t, r);
		await Z(e, t.map((e) => e.date), s, a, n);
	} catch {
		n?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}
}
function Gt(e, t, a, r) {
	return r <= 0 ? 0 : .9 * (e - 1 + (t - e + 1) * a / 3) / r;
}
function Mt({ scope: e, fileId: t, sourceContentHash: a, label: r, signalDates: n, onChunk: s }) {
	const o = [];
	let i = 0;
	const l = {
		saved: 0,
		activityFailed: !1,
		historyFailed: !1
	}, c = async () => {
		const c = o.splice(0);
		if (0 === c.length) return;
		const d = i - c.length + 1, u = i;
		s?.(d, u, 0), await St(e), s?.(d, u, 1);
		try {
			const t = c.map((e) => e.facts);
			await X(c.map((e) => e.day), e.db, t.every((e) => void 0 !== e) ? t : void 0, e.signal);
		} catch (f) {
			throw console.warn("[local-processing] Activity-day persistence failed."), Ze(f, `saveActivityDay (${r})`), l.activityFailed = !0, f;
		}
		l.saved += c.length;
		const m = c.map((e) => e.day.date);
		try {
			await Z(t, m, m.filter((e) => n.has(e)), e.db, e.signal);
		} catch {
			console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
		}
		s?.(d, u, 2);
		const g = c.flatMap((e) => e.history.map((t) => ({
			...t,
			date: e.day.date
		})));
		await async function(e, t, a, r, n = A(), s) {
			const o = n, i = ye(), l = r.map((r) => {
				const n = {
					fileId: e,
					date: r.date ?? t,
					appVersion: i,
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
				return await H(l, o, s), !0;
			} catch {
				s?.throwIfAborted(), console.error("[local-processing] Algorithm history batch write failed; retrying records individually.");
			}
			let c = !1;
			for (const d of l) try {
				await de(d, o, s);
			} catch {
				s?.throwIfAborted(), c = !0, console.error("[local-processing] An algorithm history write failed; latest scoring remains available.");
				try {
					await Dt({
						op: "algorithm_run_put",
						fileId: e,
						payload: {
							kind: "history_write_failed",
							...K(d),
							date: d.date,
							error: "history_write_failed"
						}
					}, o, s);
				} catch {}
			}
			return !c;
		}(t, c[0].day.date, a, g, e.db, e.signal) || (l.historyFailed = !0), s?.(d, u, 3), await U();
	};
	return {
		state: l,
		flush: c,
		add: async (e, t, a) => {
			o.push({
				day: e,
				history: t,
				facts: a
			}), i += 1, o.length >= 8 && await c();
		}
	};
}
async function At(e, t = A(), a) {
	const r = t;
	try {
		const t = await e.identity(), n = await ie(e.fileId, r);
		await Le({
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
async function Dt(e, t = A(), a) {
	const r = t, { appendWal: n, withWalTx: s } = await import("./wal-CX7Pr7mo.js").then((e) => e.r);
	await s([], async () => {
		await n(e);
	}, r, a);
}
function Nt(e, t) {
	return Pe(void 0 === t ? void 0 : { recording: t }, e?.sensorLocation ?? n.sensor_location);
}
function xt(e) {
	return b(e) ? e : 60;
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
async function Ut(e, t, a, r, n) {
	const s = r.anglez.length;
	return (await e.ggirDstPlaceholderCuts(t, [...a], n)).map(({ start: e, count: t, beforeTimestampSec: a }) => {
		const n = (a) => a && a.length === s ? Array.from(a.subarray(e, e + t)) : void 0, o = n(r.anglex), i = n(r.angley), l = n(r.enmo), c = n(r.zcx), d = n(r.zcy), u = n(r.zcz);
		return {
			beforeTimestampSec: a,
			anglez: n(r.anglez) ?? [],
			...o ? { anglex: o } : {},
			...i ? { angley: i } : {},
			...l ? { enmo: l } : {},
			...c ? { zcx: c } : {},
			...d ? { zcy: d } : {},
			...u ? { zcz: u } : {}
		};
	});
}
var Pt = r({
	GGIR_NO_RESULTS_TABLES: () => Lt,
	GgirImportRefusal: () => jt,
	ensureSavedGgirNonwear: () => qt,
	existingGgirRecording: () => Kt,
	ggirNightsWithData: () => Yt,
	isGeneactivEpochCsv: () => na,
	processGgirMetaRDataFile: () => Jt,
	processMappedMimsCsvFile: () => Qt,
	refuseUnimportableGgirRecording: () => Ot
}), jt = class extends Error {
	name = "GgirImportRefusal";
	category;
	constructor(e) {
		super(G(e)), this.category = e;
	}
};
function Ot(e, t) {
	const a = D(e);
	if (a && (a.notRead && a.notRead.length > 0 && t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR output",
		warning: a.notRead.map((e) => `not read: ${e.path}: ${e.reason}.`).join(" ")
	}), a.refusedNotRead)) throw new jt("ggir-not-read");
}
const Lt = "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.", Vt = "actoglance.source.ggir_rdata.v1";
function Bt(e, t) {
	const { username: a, selectedStudyId: r } = ue.getState();
	return ve.captureWorkspaceBinding(e, {
		signal: t,
		username: a,
		studyId: r
	});
}
const Ht = /* @__PURE__ */ new WeakMap();
async function $t(e, t, a, r) {
	const n = e.timestampsMs.length;
	if (0 === n || e.enmo5s.length !== n || e.anglez5s.length !== n) throw new Error("GGIR meta RData did not contain aligned metashort timestamp, ENMO, and anglez columns.");
	const s = {
		desiredtz: e.desiredtz ?? void 0,
		dataFormat: e.inspection?.dformc ?? void 0,
		...r ? C(await a.ggirConfigValues(r)) : {}
	}, { runs: o, storedMs: i, steps: l } = await a.wallClockDstPlaceholders(e.timestampsMs, 1e3 * e.epochSeconds, Et(s)), c = i.filter((e) => !Number.isNaN(e)), d = (e.timestampsMs[0] ?? 0) / 1e3, u = t?.sources.ms2 ? t.nonwear : e.nonwearShort, m = {
		...u.length === n ? { nonwear: u } : {},
		...e.invalidShort.length === e.timestampsMs.length ? { invalid: e.invalidShort } : {}
	}, g = t ? t.sources.ms3 ? t.sib : void 0 : e.part3Sib5s?.length === n ? e.part3Sib5s : void 0, p = await f(a, i, e.enmo5s, e.anglez5s, {
		...m,
		...t?.sources.ms2 ? { invalid: t.invalid } : {},
		...g ? { sib: g } : {}
	});
	if (t && (Re(t.sleepWindows), t.sources.ms3 && t.sib.length !== n || t.sources.ms2 && (t.invalid.length !== n || t.nonwear.length > 0 && t.nonwear.length !== n))) throw new Error("GGIR Parts 2–3 do not cover the same 5 s epochs as Part 1.");
	return {
		n,
		startSec: d,
		dstRuns: o,
		storedMs: i,
		clockSteps: l,
		wallClockMs: c,
		timegaps: s,
		ggirSib: g,
		ggirByDate: p
	};
}
const Wt = /* @__PURE__ */ new WeakMap();
var Xt = class extends Error {};
const Zt = /* @__PURE__ */ new WeakMap();
async function qt(e, t, a, r = !0) {
	let n = Zt.get(t);
	if (n || (n = /* @__PURE__ */ new Map(), Zt.set(t, n)), n.has(e)) {
		const t = n.get(e);
		if (!(t instanceof Xt)) return t;
		if (!r) throw t;
	}
	let s = Wt.get(t);
	s || (s = /* @__PURE__ */ new Map(), Wt.set(t, s));
	const o = s.get(e);
	if (o) return o;
	const i = (async () => {
		const r = await se(e, t);
		if (!we(r)) return null;
		if (0 === (await pe(e, t)).length) return null;
		const n = await t.ggirResultsBundles.get(e);
		if (!n) return null;
		const s = P(a);
		if (r?.ggirSavedNonwearSettled) return L(n.configCsv, s);
		const o = [...(await he(e, t)).values()].filter((e) => e.ggirTimestamps?.byteLength && e.unifiedNonwearMasks?.[R.ggir_saved]?.byteLength !== e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), i = o.filter((e) => e.vanHeesNonwear?.byteLength === e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), c = o.filter((e) => !i.includes(e)), d = c.length ? await l(t, e) : null, u = d?.ms2 ? await s.reviewGgirResults({
			part1: new Uint8Array(d.part1),
			configCsv: d.configCsv,
			ms2: new Uint8Array(d.ms2),
			edits: [],
			crossCheck: !1
		}) : null, m = d && u?.nonwear.length ? (await $t(await s.readGgirMeta(new Uint8Array(d.part1), null, !0), u, s, d.configCsv)).ggirByDate : null, g = [...i.map((e) => ({
			date: e.date,
			unifiedNonwearMasks: {
				...e.unifiedNonwearMasks,
				[R.ggir_saved]: e.vanHeesNonwear
			},
			vanHeesNonwear: null
		})), ...m ? c.map((e) => {
			const t = m.get(e.date), a = new Float64Array(e.ggirTimestamps);
			if (!t?.nonwear || t.timestamps.length !== a.length || !a.every((e, a) => e === t.timestamps[a])) throw new Xt("Saved GGIR nonwear does not match the stored epoch grid.");
			return {
				date: e.date,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					[R.ggir_saved]: new Uint8Array(t.nonwear).buffer
				},
				vanHeesNonwear: null
			};
		}) : []];
		return await V(t, [
			t.projectMeta,
			t.activityDays,
			t.physicalActivityFileSummaries,
			t.files
		], async () => {
			await Promise.all(g.map(({ date: r, ...n }) => q(e, r, n, t, a))), await t.files.update(e, { ggirSavedNonwearSettled: !0 });
		}, a), g.length, L(n.configCsv, s);
	})().then((t) => (n.set(e, t), t)).catch((t) => {
		throw !a?.aborted && t instanceof Xt && n.set(e, t), console.warn("[local-processing] Could not fill saved GGIR nonwear from retained ms2."), t;
	}).finally(() => {
		s.delete(e);
	});
	return s.set(e, i), i;
}
async function Yt(e, t, a) {
	const r = await Promise.all(e.map(async (e) => t.has(e) || t.has(await a(e) ?? "")));
	return e.filter((e, t) => r[t]);
}
async function Kt(e, t, a, r) {
	const n = r ?? await x(e, void 0, a), s = await ne(n.fullHash, t) ?? await ae(n.prefixHash, t, n.fullHash);
	return s?.id ? s : void 0;
}
async function Jt(e, t, a, r, n, s, o) {
	const l = Ht.get(e);
	Ht.delete(e);
	const g = n?.db ?? A(), f = r?.ggirConfig ?? await w(g), p = s ?? u(), h = n ?? {
		db: g,
		attemptId: i(),
		auditBinding: Bt(g, a),
		signal: a,
		recording: await mt(e, a, p)
	};
	F(a, "processGgirMetaRDataFile"), Ot(e, t);
	const v = o ?? (() => {
		d(p);
	});
	t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR meta RData..."
	});
	const { prefixHash: b, fullHash: S } = l?.value?.hashes ?? await x(e, (e) => {
		t?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, a), C = await Kt(e, g, a, {
		prefixHash: b,
		fullHash: S
	});
	if (C?.id) {
		t?.({
			phase: "complete",
			percent: 100,
			message: "File already imported"
		});
		const a = C.availableDates;
		return await te(e.name, g), {
			alreadyImported: !0,
			fileId: C.id,
			availableDates: a,
			sourceType: C.sourceType ?? c.GGIR_5S_UPLOAD
		};
	}
	const G = await W(e.name, g);
	if (G && "incomplete" !== G.ingestState) throw new me();
	if (t?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing GGIR metashort and metalong..."
	}), F(a, "before reading GGIR RData"), l && "error" in l) throw l.error;
	const M = D(e), N = l?.value?.input ?? (M ? await _e(M) : null), T = l?.value || !N ? void 0 : await z(p, (e) => e.prepareGgirRecording(N), {
		ms: k,
		label: "prepareGgirRecording",
		signal: a,
		cancel: v
	}), U = T && N ? (P = N, null === (j = T.cleanedNightsCsv) ? P : {
		...P,
		cleanedNightsCsv: j
	}) : N;
	var P, j;
	const O = l?.value || U ? void 0 : await e.arrayBuffer();
	F(a, "after reading GGIR RData");
	const L = l?.value?.meta ?? T?.meta ?? await z(p, (e) => e.readGgirMeta(m(new Uint8Array(O), [O]), f.csvText, !1), {
		ms: 3e5,
		label: "readGgirMeta",
		signal: a,
		cancel: v
	}), B = function(e, t) {
		return t && !t.sources.ms4 && e?.notRead?.some((e) => /(?:^|\/)meta\/ms4\.out\//u.test(e.path)) ? {
			...t,
			importNotices: [...t.importNotices, Ae]
		} : t;
	}(M, l?.value?.review ?? T?.review ?? null), H = l?.value?.computed ?? await async function(e, t, a, r, n) {
		const s = D(e)?.configCsv, { n: o, startSec: i, dstRuns: l, storedMs: c, clockSteps: d, wallClockMs: u, timegaps: m, ggirSib: g, ggirByDate: f } = await $t(t, a, r, await s?.text()), p = [...f.keys()].sort(), h = a ? await Yt(Ce(a), f, (e) => r.nextDate(e)) : [], w = h.length > 0 ? h : await _(f, r);
		if (0 === p.length) throw new Error("GGIR meta RData did not contain any dated 5 s epochs.");
		const y = p.flatMap((e) => {
			const t = f.get(e);
			if (!t) return [];
			F(n, `saveActivityDay ${e}`);
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
				...t.nonwear ? a ? { unifiedNonwearMasks: { [R.ggir_saved]: new Uint8Array(t.nonwear).buffer } } : { vanHeesNonwear: new Uint8Array(t.nonwear).buffer } : {},
				...t.invalid ? { ggirInvalid: new Uint8Array(t.invalid).buffer } : {},
				algorithmResults: {},
				nonwearResults: null
			}];
		});
		return {
			n: o,
			startSec: i,
			dstRuns: l,
			storedMs: c,
			clockSteps: d,
			wallClockMs: u,
			timegaps: m,
			rdataConfig: s,
			availableDates: p,
			nightDates: w,
			ggirSib: g,
			dayRecords: y,
			facts: await Promise.all(y.map((e) => oe(e, r))),
			signalDates: await ht(0, y, r).catch(() => (n?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days."), null)),
			placeholders: l.length > 0 ? await Ut(r, 1e3 * i, l, {
				anglez: t.anglez5s,
				enmo: t.enmo5s
			}, u) : void 0,
			summaries: a ? await De(a, 0, n, r) : [],
			markers: a ? await Ge(a, d, r) : void 0
		};
	}(e, L, B, p, a), { n: q, startSec: Y, dstRuns: K, storedMs: J, clockSteps: Q, wallClockMs: ee, timegaps: ae, rdataConfig: re, availableDates: ne, nightDates: le, ggirSib: ce } = H;
	t?.({
		phase: "storing",
		percent: 55,
		message: "Saving GGIR 5 s epochs..."
	});
	const de = await bt(h, {
		filename: e.name,
		devicePreset: "ggir_5s_meta",
		epochLengthSeconds: L.epochSeconds,
		availableDates: le,
		fileHash: b,
		sourceContentHash: S,
		sourceSizeBytes: e.size,
		source: "local",
		eventMarkerInstants: [],
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: c.GGIR_5S_UPLOAD,
		...Y > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * Y)).toISOString() } } : {},
		sourceProfileId: Vt,
		...L.desiredtz ? { ggirTimezone: L.desiredtz } : {},
		...K.length + Q.length > 0 ? { ggirClockBasis: (ue = ae, fe = null != re, Et(ue) ? `GGIR's imputed fall-back hour left out (${fe ? "config.csv: imputeTimegaps TRUE, configtz = desiredtz" : "no config.csv, so GGIR's defaults are assumed"})` : `GGIR's repeated fall-back hour kept as recorded data (${!1 === ue.imputeTimegaps ? "imputeTimegaps = FALSE" : null == ue.dataFormat || kt.has(ue.dataFormat) ? `configtz ${ue.configtz ?? ""} differs from desiredtz ${ue.desiredtz ?? ""}` : `GGIR does not gap-impute data format ${String(ue.dataFormat)}`})`) } : {},
		...Q.length > 0 ? { ggirClockSteps: Q } : {},
		...K.length > 0 ? { ggirDstPlaceholders: H.placeholders } : {}
	}, p);
	var ue, fe;
	if ("already_complete" === de.kind) {
		const t = de.record.id;
		if (null == t) throw new Error("Completed local import identity is invalid.");
		return await te(e.name, g), {
			alreadyImported: !0,
			fileId: t,
			availableDates: de.record.availableDates,
			sourceType: de.record.sourceType ?? c.GGIR_5S_UPLOAD
		};
	}
	const pe = de.guard.fileId;
	let he = null, we = !1;
	const ye = !B && !ce, ve = await M?.qwindowCsv?.text();
	if (B && U) try {
		const t = U.configCsv ? await ge(U.configCsv, p) : void 0;
		if (await St(h), await $(H.summaries.map((e) => ({
			...e,
			fileId: pe
		})), g, a), await V(g, [g.files, g.ggirResultsBundles], async () => {
			await g.ggirResultsBundles.put(Me(pe, M?.recordingFile ?? e.name, U, B, {
				part2Reports: M?.part2Reports,
				personReports: M?.personReports,
				qwindowCsv: ve,
				resultsCsv: M?.resultsCsv
			})), await g.files.update(pe, {
				ggirBundleRevision: crypto.randomUUID(),
				ggirSavedNonwearSettled: !0,
				...t ? { ggirNonwearDetector: t } : {}
			});
		}, a), !await Se(pe, B, Nt(r, h.recording), g, !0, Q, a, H.markers)) throw new Error("GGIR results markers could not be saved.");
	} catch (Le) {
		throw await _t(h), Le;
	}
	const Re = L.invalidShort.length === q ? L.invalidShort : null, Ne = B ? null : await z(p, (e) => e.runGgirFromEpoch({
		source: "ggir_part1_rdata",
		invalidMask: Re ? "ggir_part2" : "none"
	}, L.anglez5s, L.enmo5s, L.epochSeconds, Y, Re ?? new Uint8Array(q), L.desiredtz ?? void 0, f.csvText).catch((e) => (E(e, a, "runGgirFromEpoch (GGIR RData)"), console.warn("[local-processing] GGIR epoch analysis failed for a local metadata import."), we = !0, null)), {
		ms: k,
		label: "runGgirFromEpoch (GGIR RData)",
		signal: a,
		cancel: v
	});
	if (Ne?.days?.length) {
		const e = I(Ne.days, pe, void 0, f);
		await St(h), await $(e, g, a).catch(() => {
			console.warn("[local-processing] GGIR RData daily-summary persistence failed."), we = !0;
		});
	}
	const xe = function(e, t) {
		const a = [];
		if (!t || t.length !== e.length) return a;
		let r = null;
		for (let n = 0; n < e.length; n++) {
			const s = e[n] ?? 0, o = 0 !== (t[n] ?? 0);
			if (o && null === r && (r = s), (!o || n === e.length - 1) && null !== r) {
				const t = o && n === e.length - 1 ? s + 5e3 : s;
				a.push([r / 1e3, t / 1e3]), r = null;
			}
		}
		return a;
	}(Q.length > 0 ? J : L.timestampsMs, L.nonwearShort), ke = new Map((B ? [] : await ie(pe, g)).map((e) => [e.analysisDate, e])), Ee = L.anglez5sImputed?.length === q ? L.anglez5sImputed : L.anglez5s, ze = L.enmo5sImputed?.length === q ? L.enmo5sImputed : L.enmo5s;
	he = B ? he : await y(pe, Ee, Y, xe, ke, r?.hasptVariant, {
		activity5s: ze,
		...Re ? { invalid5s: Re } : {},
		dstRuns: K,
		wallClockMs: ee,
		...L.desiredtz ? { timezone: L.desiredtz } : {}
	}, Fe(r?.sleepPeriodDetectionConfig, Te), Nt(r, h.recording), g, a, p, v, h.auditBinding);
	const Ue = H.dayRecords.map((e) => ({
		...e,
		fileId: pe
	}));
	let Pe = !1;
	await St(h);
	const je = (await X(Ue, g, H.facts, a).catch((e) => (console.warn("[local-processing] GGIR RData activity-day persistence failed."), Ze(e, "saveActivityDay (GGIR RData)"), Pe = !0, []))).length;
	if (!Pe && H.signalDates && await Z(pe, ne, H.signalDates, g, a).catch(() => {
		a?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}), Pe || je !== ne.length || 0 === je) throw await _t(h), /* @__PURE__ */ new Error("Could not save any GGIR RData epochs — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	F(a, "before completing GGIR RData ingest"), await It(h);
	const Oe = [
		...B?.configWarnings ?? [],
		...B?.importNotices ?? [],
		B?.sources.ms4 && be(B),
		M && !M.resultsCsv && "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.",
		Pe && "One or more days of GGIR RData epochs could not be saved.",
		he && (B ? "GGIR results markers could not be saved." : "Sleep window detection (HDCZA) could not place auto-markers."),
		we && (B ? "GGIR source summaries could not be saved." : "GGIR daily summaries could not be computed or saved for this GGIR RData file."),
		ye && "GGIR HASIB sleep/wake flags could not be computed."
	].filter(Boolean).join(" ");
	return t?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete",
		...Oe ? { warning: Oe } : {}
	}), {
		fileId: pe,
		availableDates: le,
		sourceType: c.GGIR_5S_UPLOAD,
		...B ? { ggir: {
			...(await import("./ggir-results-import-B_zAUkw4.js").then((e) => e.u)).ggirImportCounts(B, Ie(M?.part2Reports, B, U?.recordingId)),
			bodySite: (await se(pe, g))?.recording?.bodySite
		} } : {}
	};
}
async function Qt(r, n, o, l, d, m, f) {
	const w = m?.db ?? A(), y = f ?? P(d), b = m ?? {
		db: w,
		attemptId: i(),
		auditBinding: Bt(w, d),
		signal: d,
		recording: await mt(r, d, y)
	};
	F(d, "processMappedMimsCsvFile"), l?.({
		phase: "reading",
		percent: 0,
		message: "Reading mapped MIMS CSV..."
	});
	const { prefixHash: S, fullHash: I } = await x(r, (e) => {
		l?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, d), R = await Kt(r, w, d, {
		prefixHash: S,
		fullHash: I
	});
	if (R?.id) {
		l?.({
			phase: "complete",
			percent: 100,
			message: "File already imported"
		});
		const e = R.availableDates;
		return {
			alreadyImported: !0,
			fileId: R.id,
			availableDates: e,
			sourceType: R.sourceType ?? c.EPOCHS_60S
		};
	}
	const C = await W(r.name, w);
	if (C && "incomplete" !== C.ingestState) throw new me();
	l?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing mapped MIMS columns..."
	}), F(d, "before reading mapped MIMS CSV");
	const G = await async function(r, n, o, i) {
		const l = t(await r.text()), c = e(l);
		if (c.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
		const d = c.records, m = d[n]?.text;
		if (!m) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
		const g = a(m), f = s(m, g), p = v(o, f);
		if (p.length > 0) throw new Error(h(p));
		const w = et(f, o.datetime_column), y = et(f, o.date_column), b = et(f, o.time_column), S = et(f, o.mims_unit_column), I = et(f, o.mims_unit_x_column), _ = et(f, o.mims_unit_y_column), R = et(f, o.mims_unit_z_column), C = [], G = [], M = [], A = [], D = [], N = [];
		for (let e = n + 2; e <= d.length; e++) {
			const t = d[e - 1];
			if (!t?.text.trim()) continue;
			const a = s(t.text, g);
			N.push({
				sourceRow: t.sourceRow,
				row: a,
				label: ot(a, w, y, b)
			});
		}
		const x = await (i ?? u()).sourceLabelsWallClockMs(N.map(({ label: e }) => e)), T = N.findIndex((e, t) => !Number.isFinite(x[t] ?? NaN));
		if (T >= 0) throw new Error(`Could not parse timestamp on row ${String(N[T].sourceRow)} of the mapped MIMS CSV.`);
		for (const [e, { row: t }] of N.entries()) C.push(x[e]), G.push(it(t, S)), M.push(it(t, I)), A.push(it(t, _)), D.push(it(t, R));
		if (0 === C.length) throw new Error("The mapped MIMS CSV did not contain any data rows.");
		return {
			timestampsMs: new Float64Array(C),
			mimsUnit: null === S ? /* @__PURE__ */ new Float64Array() : new Float64Array(G),
			mimsUnitX: null === I ? /* @__PURE__ */ new Float64Array() : new Float64Array(M),
			mimsUnitY: null === _ ? /* @__PURE__ */ new Float64Array() : new Float64Array(A),
			mimsUnitZ: null === R ? /* @__PURE__ */ new Float64Array() : new Float64Array(D)
		};
	}(r, n, o, y);
	F(d, "after reading mapped MIMS CSV");
	const M = c.EPOCHS_60S, D = await async function(e, t) {
		const a = /* @__PURE__ */ new Map(), r = t.timestampsMs.length, n = lt(t.mimsUnit, r), s = lt(t.mimsUnitX, r), o = lt(t.mimsUnitY, r), i = lt(t.mimsUnitZ, r), l = Float64Array.from(t.timestampsMs, (e) => e / 1e3);
		for (const [c, d] of await g(e, l)) a.set(c, {
			timestamps: p(l, d, 0),
			...n ? { mimsUnit: p(n, d, NaN) } : {},
			...s ? { mimsUnitX: p(s, d, NaN) } : {},
			...o ? { mimsUnitY: p(o, d, NaN) } : {},
			...i ? { mimsUnitZ: p(i, d, NaN) } : {}
		});
		return a;
	}(y, G), N = [...D.keys()].sort(), T = await _(D, y);
	l?.({
		phase: "storing",
		percent: 55,
		message: "Saving mapped MIMS epochs..."
	});
	const k = await bt(b, {
		filename: r.name,
		devicePreset: "mims_metrics",
		epochLengthSeconds: 60,
		availableDates: T,
		fileHash: S,
		sourceContentHash: I,
		sourceSizeBytes: r.size,
		source: "local",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: M,
		...(G.timestampsMs[0] ?? 0) > 0 ? { recording: { effectiveTime: new Date(G.timestampsMs[0] ?? 0).toISOString() } } : {}
	}, y);
	if ("already_complete" === k.kind) {
		const e = k.record.id;
		if (null == e) throw new Error("Completed local import identity is invalid.");
		return {
			alreadyImported: !0,
			fileId: e,
			availableDates: k.record.availableDates,
			sourceType: k.record.sourceType ?? M
		};
	}
	const E = k.guard.fileId;
	let z = !1, U = 0;
	for (const e of N) {
		const t = D.get(e);
		if (!t) continue;
		F(d, `saveActivityDay ${e}`);
		const a = /* @__PURE__ */ new Float64Array();
		await St(b);
		const r = {
			fileId: E,
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
		await Q(r, w, d).then(() => !0).catch((e) => (console.warn("[local-processing] Mapped MIMS activity-day persistence failed."), Ze(e, "saveActivityDay (mapped MIMS CSV)"), z = !0, !1)) && (U += 1, await Ct(E, [r], w, y, d));
	}
	if (z || U !== N.length || 0 === U) throw await _t(b), /* @__PURE__ */ new Error("Could not save any mapped MIMS data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return F(d, "before completing mapped MIMS ingest"), await It(b), l?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete"
	}), {
		fileId: E,
		availableDates: T,
		sourceType: M
	};
}
const ea = 12, ta = 16384, aa = 16777216;
function ra(e) {
	const t = e.trim();
	if (!/^\d{4}-\d{2}-\d{2}/.test(t)) return null;
	const a = t.includes("	") ? "	" : ",";
	return t.split(a).length;
}
async function na(e, t, a) {
	const r = Math.min(e.size, aa);
	let n = Math.min(ta, r);
	for (;;) {
		F(t, "before reading GeneActiv CSV header");
		const s = await T(e, n, a);
		F(t, "after reading GeneActiv CSV header");
		const o = n >= r, i = s.split("\n"), l = o && n >= e.size ? i : i.slice(0, -1);
		for (const e of l) {
			const t = ra(e);
			if (null !== t) return t >= ea;
		}
		if (o) return !1;
		n = Math.min(2 * n, r);
	}
}
export { Je as A, ct as C, st as D, rt as E, Xe as M, qe as O, ut as S, at as T, It as _, Ot as a, ht as b, Ft as c, Nt as d, St as f, Gt as g, Mt as h, Qt as i, Ye as j, Ze as k, xt as l, bt as m, na as n, Ut as o, At as p, Jt as r, zt as s, Pt as t, Tt as u, _t as v, nt as w, mt as x, Rt as y };
