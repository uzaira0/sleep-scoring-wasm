import { Fn as e, It as t, Jt as a, Kt as n, Tn as r, Zt as s, en as i, in as o, m as l, s as c } from "./schema-BHdDgVmx.js";
import { i as d, r as u, s as m } from "./workers-DmTzGLlL.js";
import { A as g, D as f, T as p, U as h, V as w, c as y, i as v, n as b, r as S, s as I, w as _ } from "./local-data-source-DA97v67F.js";
import { M as R, Y as M, f as C, p as G, pt as A, t as D } from "./workspace-db-MESLoRZb.js";
import { d as N, f as x, i as T } from "./content-hash-D4_ZE65l.js";
import { d as F, l as k, m as E, o as z, s as U, t as P, v as j } from "./background-jobs-DEvUJdJD.js";
import { n as O, o as L } from "./nonwear-display-slots-B482bvPl.js";
import { a as V, i as B } from "./project-revision-dp76cOtH.js";
import { $ as H, H as $, J as W, K as X, O as Y, Q as Z, Qt as q, X as K, Y as Q, Z as J, c as ee, dt as te, et as ae, f as ne, g as re, h as se, k as ie, l as oe, m as le, o as ce, r as de, rn as ue, s as me, u as ge, vt as fe, w as pe, y as he } from "./store-Ws1lFj33.js";
import { Q as we } from "./per-source-defaults-sZh2GVm_.js";
import { r as ye, t as ve } from "./audit-log-Cn9vPjEI.js";
import { _ as be, b as Se, c as Ie, g as _e, h as Re, l as Me, n as Ce, r as Ge, s as Ae, v as De } from "./ggir-results-import-DXQWdK-M.js";
import { T as Ne, _ as xe, a as Te, k as Fe, s as ke } from "./local-nonwear-unified-Czq-0way.js";
import { _ as Ee, p as ze } from "./diary-local-import-contract-fQgt3inx.js";
import { a as Ue } from "./csv-column-mapping-BSSY09yh.js";
import { t as Pe } from "./file-sensor-location-D3poeAvf.js";
import { M as je, j as Oe } from "./local-export-worker-BcfT00U8.js";
import { i as Le, n as Ve, r as Be } from "./local-provenance-AHY2ER-6.js";
import { i as He, n as $e } from "./lstm-model-manager-B4DhcI1h.js";
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
function Ye(e, t) {
	fe(e) && We.getState().reportStorageFull(t, "Browser storage quota was exceeded while saving local results.");
}
function Ze(e) {
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
	const a = Ue(t), n = e.findIndex((e) => Ue(e) === a);
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
async function st(e, r, i, o) {
	F(o, "standardizing mapped CSV");
	const l = s(await e.text());
	F(o, "standardizing mapped CSV");
	const c = a(l);
	if (c.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
	const d = c.records, u = d[r]?.text;
	if (!u) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
	const m = t(u), g = n(u, m), f = S(i, g);
	if (f.length > 0) throw new Error(h(f));
	const p = et(g, i.datetime_column), w = et(g, i.date_column), y = et(g, i.time_column), v = et(g, i.activity_column), b = et(g, i.axis_x_column), I = et(g, i.axis_z_column), _ = et(g, i.vector_magnitude_column), R = [
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
	].filter((e) => null !== e.idx), M = et(g, i.event_marker_column), C = null === M ? null : [];
	if (null === v) throw new Error("Column-mapped CSV mapping requires an activity/counts column before import.");
	if (null === p && (null === w || null === y)) throw new Error("Column-mapped CSV mapping requires Date/time, or both Date and Time, before import.");
	const G = null !== p ? ["Datetime", "Axis1"] : [
		"Date",
		"Time",
		"Axis1"
	];
	null !== b && G.push("Axis2"), null !== I && G.push("Axis3"), null !== _ && G.push("Vector Magnitude"), G.push(...R.map((e) => e.header));
	const A = [G.join(",")];
	for (let t = r + 1; t < d.length; t += 1) {
		(t - r - 1) % 1e3 == 0 && (await U(), F(o, "standardizing mapped CSV"));
		const e = d[t];
		if (!e.text.trim()) continue;
		const a = n(e.text, m), s = null !== p ? [a[p] ?? "", a[v] ?? ""] : [
			null === w ? "" : a[w] ?? "",
			null === y ? "" : a[y] ?? "",
			a[v] ?? ""
		];
		null !== b && s.push(a[b] ?? ""), null !== I && s.push(a[I] ?? ""), null !== _ && s.push(a[_] ?? "");
		for (const t of R) s.push(a[t.idx] ?? "");
		C && null !== M && C.push(tt(a[M])), A.push(s.map(Je).join(","));
	}
	const D = new Blob([`${A.join("\n")}\n`], { type: "text/csv" });
	return {
		name: e.name,
		lastModified: e.lastModified,
		size: D.size,
		arrayBuffer: () => D.arrayBuffer(),
		text: () => D.text(),
		slice: (e, t) => D.slice(e, t),
		...C ? { eventMarkerRows: Uint8Array.from(C) } : {}
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
	return await Ee((t) => t.recordingFacts(e), new ze(t)) ?? {};
}
async function ut(e, t, a, n) {
	a?.throwIfAborted();
	const r = await N(e, 65536, n);
	a?.throwIfAborted();
	const s = new TextDecoder("utf-8", { fatal: !1 }).decode(r);
	for (const i of [/measurement frequency\s*[,:\t]\s*(\d+)/i, /sample rate(?:\s*hz)?\s*[,:\t]\s*(\d+)/i]) {
		const e = i.exec(s);
		if (e && e[1]) {
			const t = Number.parseInt(e[1], 10);
			if (Number.isFinite(t) && t > 0) return t;
		}
	}
	return j[t];
}
async function mt(e, t, a, n) {
	if (t?.throwIfAborted(), function(e) {
		const t = e.name.toLowerCase();
		return t.endsWith(".rdata") || t.endsWith(".rda") || t.endsWith(".aw5") || "aw5Subject" in e;
	}(e)) return {};
	const r = Math.max(65536, 2048);
	let s;
	try {
		s = await N(e, r, n);
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
	temperature_epoch_stream: (e) => null != e.temperature && xe(new Float64Array(e.temperature)),
	sleep_wake_epoch_stream: (e) => null != e.algorithmResults?.[i.ACTIWARE_SLEEP_WAKE],
	device_wear_state_evidence_stream: (e) => !0 === e.actiwareOffWristChannel
};
function pt(e) {
	const t = [];
	for (const [a, n] of Object.entries(ft)) for (const r of e) if (n(r)) {
		t.push(a);
		break;
	}
	for (const a of ke) e.some((e) => null != Ne(e, a, "")) && t.push(gt(a));
	return t;
}
async function ht(e, t, a) {
	const n = [];
	for (const i of t) {
		const t = je(e, i);
		t && n.push(t.wire);
	}
	if (0 === n.length) return [];
	const { request: r, transfer: s } = Oe(n);
	return (await a.computeCircadian(m(r, s))).day_summaries.filter((e) => e.has_signal).map((e) => e.analysis_date);
}
function wt(e) {
	return e instanceof Error ? e : /* @__PURE__ */ new Error("Local ingest lease renewal failed.");
}
const yt = Math.max(1e3, Math.floor(ce / 4));
async function vt(e) {
	void 0 !== e.heartbeatId && (clearInterval(e.heartbeatId), delete e.heartbeatId), await e.heartbeatPending, delete e.heartbeatPending;
}
async function bt(e, t, a) {
	const n = de.getState(), r = {
		...e.recording,
		...t.recording
	}, s = e.placement ?? {
		bodySite: n.sensorLocation,
		laterality: n.participantLaterality
	}, i = await ge({
		...t,
		...t.ggirPart2Config ? { ggirNonwearDetector: await ue(t.ggirPart2Config.csvText, a ?? P(e.signal)) } : {},
		...e.ingestProvenance ? { ingestProvenance: e.ingestProvenance } : {},
		recording: ct(r, s)
	}, e.attemptId, e.db);
	return "started" === i.kind && (e.guard = i.guard, function(e) {
		void 0 === e.heartbeatId && (e.heartbeatId = setInterval(() => function(e) {
			const t = e.guard;
			t && void 0 === e.heartbeatError && (e.heartbeatPending = (e.heartbeatPending ?? Promise.resolve()).then(() => J(t, e.db)).catch((t) => {
				e.heartbeatError = t;
			}));
		}(e), yt));
	}(e)), i;
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
	await async function(e, t = D()) {
		try {
			return await async function(e, t = D(), a) {
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
					]), i = s(t, r), o = pt([...(await he(e, n)).values()]);
					if (t && "actiware_off_wrist" === O(t.sourceType, t.sourceProfileId) && !o.includes("device_wear_state_evidence_stream") && r > 0 && o.push("device_wear_state_evidence_stream"), void 0 === t?.id) return o;
					if (await V(n, [
						n.files,
						n.sensorNonwear,
						n.projectMeta
					], async () => {
						const t = await n.files.get(e);
						return s(t, await n.sensorNonwear.where("fileId").equals(e).count()) === i && (t && (r = t.resolvedCapabilities, l = o, void 0 === r || r.length !== l.length || !l.every((e) => r.includes(e)) || 4 !== t.resolvedCapabilitiesRevision) && await B(n, [n.files], () => n.files.update(e, {
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
	}(t.fileId, e.db), e.finalizedFileId = await le(t, e.db, e.signal), delete e.guard;
}
async function _t(e, t) {
	try {
		await vt(e);
		const t = e.guard, a = !!t && await Z(t, e.db);
		t && delete e.guard, a ? (console.warn("[local-processing] Rolled back an incomplete local ingest."), e.rollbackOutcome = "rolled_back") : e.rollbackOutcome ??= "nothing_to_roll_back";
	} catch {
		console.error("[local-processing] Incomplete local ingest rollback also failed."), e.rollbackOutcome = "failed";
	}
}
function Rt(e, t) {
	return "object" == typeof e && null !== e && void 0 !== t.rollbackOutcome && (e.__localIngestRollbackOutcome = t.rollbackOutcome), e;
}
async function Mt(e, t, a, n, r) {
	try {
		const s = await ht(e, t, n);
		await $(e, t.map((e) => e.date), s, a, r);
	} catch {
		r?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}
}
function Ct(e, t, a, n) {
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
			await ae(c.map((e) => e.day), e.db, t.every((e) => void 0 !== e) ? t : void 0, e.signal);
		} catch (f) {
			throw console.warn("[local-processing] Activity-day persistence failed."), Ye(f, `saveActivityDay (${n})`), l.activityFailed = !0, f;
		}
		l.saved += c.length;
		const m = c.map((e) => e.day.date);
		try {
			await $(t, m, m.filter((e) => r.has(e)), e.db, e.signal);
		} catch {
			console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
		}
		s?.(d, u, 2);
		const g = c.flatMap((e) => e.history.map((t) => ({
			...t,
			date: e.day.date
		})));
		await async function(e, t, a, n, r = D(), s) {
			const i = r, o = ye(), l = n.map((n) => {
				const r = {
					fileId: e,
					date: n.date ?? t,
					appVersion: o,
					results: n.results,
					...void 0 !== a ? { sourceContentHash: a } : {}
				};
				if (null === q(n)) throw new Error(`Refused an algorithm run for ${String(n.algoKey ?? n.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
				return void 0 !== n.cubeConfig ? {
					...r,
					cubeConfig: n.cubeConfig
				} : {
					...r,
					algoKey: n.algoKey
				};
			});
			try {
				return await K(l, i, s), !0;
			} catch {
				s?.throwIfAborted(), console.error("[local-processing] Algorithm history batch write failed; retrying records individually.");
			}
			let c = !1;
			for (const d of l) try {
				await Q(d, i, s);
			} catch {
				s?.throwIfAborted(), c = !0, console.error("[local-processing] An algorithm history write failed; latest scoring remains available.");
				try {
					await Dt({
						op: "algorithm_run_put",
						fileId: e,
						payload: {
							kind: "history_write_failed",
							...q(d),
							date: d.date,
							error: "history_write_failed"
						}
					}, i, s);
				} catch {}
			}
			return !c;
		}(t, c[0].day.date, a, g, e.db, e.signal) || (l.historyFailed = !0), s?.(d, u, 3), await U();
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
async function At(e, t = D(), a) {
	const n = t;
	try {
		const t = await e.identity(), r = await te(e.fileId, n);
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
			diaryDisposition: r.length > 0 ? "present" : "absent",
			timestampGrid: e.timestampGrid ?? "epoch_5s_floor_seconds",
			dailyRows: e.rows,
			appVersion: ye(),
			startedAt: e.startedAt,
			finishedAt: e.finishedAt ?? (/* @__PURE__ */ new Date()).toISOString()
		}, n, a);
	} catch {
		a?.throwIfAborted(), console.error("[local-processing] Execution attestation write failed; day summaries remain stored.");
	}
}
async function Dt(e, t = D(), a) {
	const n = t, { appendWal: r, withWalTx: s } = await import("./wal-D0tMCgoe.js").then((e) => e.r);
	await s([], async () => {
		await r(e);
	}, n, a);
}
function Nt(e, t) {
	return Pe(void 0 === t ? void 0 : { recording: t }, e?.sensorLocation ?? r.sensor_location);
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
var Pt = e({
	GGIR_NO_RESULTS_TABLES: () => Lt,
	GgirImportRefusal: () => jt,
	ensureSavedGgirNonwear: () => Zt,
	existingGgirRecording: () => Kt,
	ggirNightsWithData: () => qt,
	isGeneactivEpochCsv: () => ra,
	processGgirMetaRDataFile: () => Qt,
	processMappedMimsCsvFile: () => Jt,
	refuseUnimportableGgirRecording: () => Ot
}), jt = class extends Error {
	name = "GgirImportRefusal";
	category;
	constructor(e) {
		super(A(e)), this.category = e;
	}
};
function Ot(e, t) {
	const a = C(e);
	if (a && (a.notRead && a.notRead.length > 0 && t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR output",
		warning: a.notRead.map((e) => `not read: ${e.path}: ${e.reason}.`).join(" ")
	}), a.refusedNotRead)) throw new jt("ggir-not-read");
}
const Lt = "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.", Vt = "actoglance.source.ggir_rdata.v1";
function Bt(e, t) {
	const { username: a, selectedStudyId: n } = de.getState();
	return ve.captureWorkspaceBinding(e, {
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
		...n ? G(await a.ggirConfigValues(n)) : {}
	}, { runs: i, storedMs: o, steps: l } = await a.wallClockDstPlaceholders(e.timestampsMs, 1e3 * e.epochSeconds, Et(s)), c = o.filter((e) => !Number.isNaN(e)), d = (e.timestampsMs[0] ?? 0) / 1e3, u = t?.sources.ms2 ? t.nonwear : e.nonwearShort, m = {
		...u.length === r ? { nonwear: u } : {},
		...e.invalidShort.length === e.timestampsMs.length ? { invalid: e.invalidShort } : {}
	}, g = t ? t.sources.ms3 ? t.sib : void 0 : e.part3Sib5s?.length === r ? e.part3Sib5s : void 0, p = await f(a, o, e.enmo5s, e.anglez5s, {
		...m,
		...t?.sources.ms2 ? { invalid: t.invalid } : {},
		...g ? { sib: g } : {}
	});
	if (t && (Ge(t.sleepWindows), t.sources.ms3 && t.sib.length !== r || t.sources.ms2 && (t.invalid.length !== r || t.nonwear.length > 0 && t.nonwear.length !== r))) throw new Error("GGIR Parts 2–3 do not cover the same 5 s epochs as Part 1.");
	return {
		n: r,
		startSec: d,
		dstRuns: i,
		storedMs: o,
		clockSteps: l,
		wallClockMs: c,
		timegaps: s,
		ggirSib: g,
		ggirByDate: p
	};
}
const Wt = /* @__PURE__ */ new WeakMap();
var Xt = class extends Error {};
const Yt = /* @__PURE__ */ new WeakMap();
async function Zt(e, t, a, n = !0) {
	let r = Yt.get(t);
	if (r || (r = /* @__PURE__ */ new Map(), Yt.set(t, r)), r.has(e)) {
		const t = r.get(e);
		if (!(t instanceof Xt)) return t;
		if (!n) throw t;
	}
	let s = Wt.get(t);
	s || (s = /* @__PURE__ */ new Map(), Wt.set(t, s));
	const i = s.get(e);
	if (i) return i;
	const o = (async () => {
		const n = await ie(e, t);
		if (!we(n)) return null;
		if (0 === (await pe(e, t)).length) return null;
		const r = await t.ggirResultsBundles.get(e);
		if (!r) return null;
		const s = P(a);
		if (n?.ggirSavedNonwearSettled) return L(r.configCsv, s);
		const i = [...(await he(e, t)).values()].filter((e) => e.ggirTimestamps?.byteLength && e.unifiedNonwearMasks?.[R.ggir_saved]?.byteLength !== e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), o = i.filter((e) => e.vanHeesNonwear?.byteLength === e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), l = i.filter((e) => !o.includes(e)), d = l.length ? await c(t, e) : null, u = d?.ms2 ? await s.reviewGgirResults({
			part1: new Uint8Array(d.part1),
			configCsv: d.configCsv,
			ms2: new Uint8Array(d.ms2),
			edits: [],
			crossCheck: !1
		}) : null, m = d && u?.nonwear.length ? (await $t(await s.readGgirMeta(new Uint8Array(d.part1), null, !0), u, s, d.configCsv)).ggirByDate : null, g = [...o.map((e) => ({
			date: e.date,
			unifiedNonwearMasks: {
				...e.unifiedNonwearMasks,
				[R.ggir_saved]: e.vanHeesNonwear
			},
			vanHeesNonwear: null
		})), ...m ? l.map((e) => {
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
			await Promise.all(g.map(({ date: n, ...r }) => X(e, n, r, t, a))), await t.files.update(e, { ggirSavedNonwearSettled: !0 });
		}, a), g.length, L(r.configCsv, s);
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
	const r = n ?? await T(e, void 0, a), s = await se(r.fullHash, t) ?? await re(r.prefixHash, t, r.fullHash);
	return s?.id ? s : void 0;
}
async function Qt(e, t, a, n, r, s, i) {
	const c = Ht.get(e);
	Ht.delete(e);
	const g = r?.db ?? D(), f = n?.ggirConfig ?? await w(g), p = s ?? u(), h = r ?? {
		db: g,
		attemptId: l(),
		auditBinding: Bt(g, a),
		signal: a,
		recording: await mt(e, a, p)
	};
	F(a, "processGgirMetaRDataFile"), Ot(e, t);
	const v = i ?? (() => {
		d(p);
	});
	t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR meta RData..."
	});
	const { prefixHash: b, fullHash: S } = c?.value?.hashes ?? await T(e, (e) => {
		t?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, a), M = await Kt(e, g, a, {
		prefixHash: b,
		fullHash: S
	});
	if (M?.id) {
		t?.({
			phase: "complete",
			percent: 100,
			message: "File already imported"
		});
		const a = M.availableDates;
		return await ne(e.name, g), {
			alreadyImported: !0,
			fileId: M.id,
			availableDates: a,
			sourceType: M.sourceType ?? o.GGIR_5S_UPLOAD
		};
	}
	const G = await Y(e.name, g);
	if (G && "incomplete" !== G.ingestState) throw new me();
	if (t?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing GGIR metashort and metalong..."
	}), F(a, "before reading GGIR RData"), c && "error" in c) throw c.error;
	const A = C(e), N = c?.value?.input ?? (A ? await _e(A) : null), x = c?.value || !N ? void 0 : await z(p, (e) => e.prepareGgirRecording(N), {
		ms: k,
		label: "prepareGgirRecording",
		signal: a,
		cancel: v
	}), U = x && N ? (P = N, null === (j = x.cleanedNightsCsv) ? P : {
		...P,
		cleanedNightsCsv: j
	}) : N;
	var P, j;
	const O = c?.value || U ? void 0 : await e.arrayBuffer();
	F(a, "after reading GGIR RData");
	const L = c?.value?.meta ?? x?.meta ?? await z(p, (e) => e.readGgirMeta(m(new Uint8Array(O), [O]), f.csvText, !1), {
		ms: 3e5,
		label: "readGgirMeta",
		signal: a,
		cancel: v
	}), B = function(e, t) {
		return t && !t.sources.ms4 && e?.notRead?.some((e) => /(?:^|\/)meta\/ms4\.out\//u.test(e.path)) ? {
			...t,
			importNotices: [...t.importNotices, Ce]
		} : t;
	}(A, c?.value?.review ?? x?.review ?? null), H = c?.value?.computed ?? await async function(e, t, a, n, r) {
		const s = C(e)?.configCsv, { n: i, startSec: o, dstRuns: l, storedMs: c, clockSteps: d, wallClockMs: u, timegaps: m, ggirSib: g, ggirByDate: f } = await $t(t, a, n, await s?.text()), p = [...f.keys()].sort(), h = a ? await qt(Ie(a), f, (e) => n.nextDate(e)) : [], w = h.length > 0 ? h : await _(f, n);
		if (0 === p.length) throw new Error("GGIR meta RData did not contain any dated 5 s epochs.");
		const y = p.flatMap((e) => {
			const t = f.get(e);
			if (!t) return [];
			F(r, `saveActivityDay ${e}`);
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
				...t.nonwear ? a ? { unifiedNonwearMasks: { [R.ggir_saved]: new Uint8Array(t.nonwear).buffer } } : { vanHeesNonwear: new Uint8Array(t.nonwear).buffer } : {},
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
			nightDates: w,
			ggirSib: g,
			dayRecords: y,
			facts: await Promise.all(y.map((e) => oe(e, n))),
			signalDates: await ht(0, y, n).catch(() => (r?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days."), null)),
			placeholders: l.length > 0 ? await Ut(n, 1e3 * o, l, {
				anglez: t.anglez5s,
				enmo: t.enmo5s
			}, u) : void 0,
			summaries: a ? await Se(a, 0, r, n) : [],
			markers: a ? await Re(a, d, n) : void 0
		};
	}(e, L, B, p, a), { n: X, startSec: Z, dstRuns: q, storedMs: K, clockSteps: Q, wallClockMs: J, timegaps: ee, rdataConfig: re, availableDates: se, nightDates: le, ggirSib: ce } = H;
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
		sourceType: o.GGIR_5S_UPLOAD,
		...Z > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * Z)).toISOString() } } : {},
		sourceProfileId: Vt,
		...L.desiredtz ? { ggirTimezone: L.desiredtz } : {},
		...q.length + Q.length > 0 ? { ggirClockBasis: (ge = ee, fe = null != re, Et(ge) ? `GGIR's imputed fall-back hour left out (${fe ? "config.csv: imputeTimegaps TRUE, configtz = desiredtz" : "no config.csv, so GGIR's defaults are assumed"})` : `GGIR's repeated fall-back hour kept as recorded data (${!1 === ge.imputeTimegaps ? "imputeTimegaps = FALSE" : null == ge.dataFormat || kt.has(ge.dataFormat) ? `configtz ${ge.configtz ?? ""} differs from desiredtz ${ge.desiredtz ?? ""}` : `GGIR does not gap-impute data format ${String(ge.dataFormat)}`})`) } : {},
		...Q.length > 0 ? { ggirClockSteps: Q } : {},
		...q.length > 0 ? { ggirDstPlaceholders: H.placeholders } : {}
	}, p);
	var ge, fe;
	if ("already_complete" === de.kind) {
		const t = de.record.id;
		if (null == t) throw new Error("Completed local import identity is invalid.");
		return await ne(e.name, g), {
			alreadyImported: !0,
			fileId: t,
			availableDates: de.record.availableDates,
			sourceType: de.record.sourceType ?? o.GGIR_5S_UPLOAD
		};
	}
	const pe = de.guard.fileId;
	let he = null, we = !1;
	const ye = !B && !ce, ve = await A?.qwindowCsv?.text();
	if (B && U) try {
		const t = U.configCsv ? await ue(U.configCsv, p) : void 0;
		if (await St(h), await W(H.summaries.map((e) => ({
			...e,
			fileId: pe
		})), g, a), await V(g, [g.files, g.ggirResultsBundles], async () => {
			await g.ggirResultsBundles.put(Me(pe, A?.recordingFile ?? e.name, U, B, {
				part2Reports: A?.part2Reports,
				personReports: A?.personReports,
				qwindowCsv: ve,
				resultsCsv: A?.resultsCsv
			})), await g.files.update(pe, {
				ggirBundleRevision: crypto.randomUUID(),
				ggirSavedNonwearSettled: !0,
				...t ? { ggirNonwearDetector: t } : {}
			});
		}, a), !await De(pe, B, Nt(n, h.recording), g, !0, Q, a, H.markers)) throw new Error("GGIR results markers could not be saved.");
	} catch (Le) {
		throw await _t(h), Le;
	}
	const Ge = L.invalidShort.length === X ? L.invalidShort : null, Ne = B ? null : await z(p, (e) => e.runGgirFromEpoch({
		source: "ggir_part1_rdata",
		invalidMask: Ge ? "ggir_part2" : "none"
	}, L.anglez5s, L.enmo5s, L.epochSeconds, Z, Ge ?? new Uint8Array(X), L.desiredtz ?? void 0, f.csvText).catch((e) => (E(e, a, "runGgirFromEpoch (GGIR RData)"), console.warn("[local-processing] GGIR epoch analysis failed for a local metadata import."), we = !0, null)), {
		ms: k,
		label: "runGgirFromEpoch (GGIR RData)",
		signal: a,
		cancel: v
	});
	if (Ne?.days?.length) {
		const e = I(Ne.days, pe, void 0, f);
		await St(h), await W(e, g, a).catch(() => {
			console.warn("[local-processing] GGIR RData daily-summary persistence failed."), we = !0;
		});
	}
	const xe = function(e, t) {
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
	}(Q.length > 0 ? K : L.timestampsMs, L.nonwearShort), ke = new Map((B ? [] : await te(pe, g)).map((e) => [e.analysisDate, e])), Ee = L.anglez5sImputed?.length === X ? L.anglez5sImputed : L.anglez5s, ze = L.enmo5sImputed?.length === X ? L.enmo5sImputed : L.enmo5s;
	he = B ? he : await y(pe, Ee, Z, xe, ke, n?.hasptVariant, {
		activity5s: ze,
		...Ge ? { invalid5s: Ge } : {},
		dstRuns: q,
		wallClockMs: J,
		...L.desiredtz ? { timezone: L.desiredtz } : {}
	}, Fe(n?.sleepPeriodDetectionConfig, Te), Nt(n, h.recording), g, a, p, v, h.auditBinding);
	const Ue = H.dayRecords.map((e) => ({
		...e,
		fileId: pe
	}));
	let Pe = !1;
	await St(h);
	const je = (await ae(Ue, g, H.facts, a).catch((e) => (console.warn("[local-processing] GGIR RData activity-day persistence failed."), Ye(e, "saveActivityDay (GGIR RData)"), Pe = !0, []))).length;
	if (!Pe && H.signalDates && await $(pe, se, H.signalDates, g, a).catch(() => {
		a?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}), Pe || je !== se.length || 0 === je) throw await _t(h), /* @__PURE__ */ new Error("Could not save any GGIR RData epochs — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	F(a, "before completing GGIR RData ingest"), await It(h);
	const Oe = [
		...B?.configWarnings ?? [],
		...B?.importNotices ?? [],
		B?.sources.ms4 && Ae(B),
		A && !A.resultsCsv && "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.",
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
		sourceType: o.GGIR_5S_UPLOAD,
		...B ? { ggir: {
			...(await import("./ggir-results-import-DXQWdK-M.js").then((e) => e.f)).ggirImportCounts(B, be(A?.part2Reports, B, U?.recordingId)),
			bodySite: (await ie(pe, g))?.recording?.bodySite
		} } : {}
	};
}
async function Jt(e, r, i, c, d, m, f) {
	const w = m?.db ?? D(), y = f ?? P(d), b = m ?? {
		db: w,
		attemptId: l(),
		auditBinding: Bt(w, d),
		signal: d,
		recording: await mt(e, d, y)
	};
	F(d, "processMappedMimsCsvFile"), c?.({
		phase: "reading",
		percent: 0,
		message: "Reading mapped MIMS CSV..."
	});
	const { prefixHash: S, fullHash: I } = await T(e, (e) => {
		c?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, d), R = await Kt(e, w, d, {
		prefixHash: S,
		fullHash: I
	});
	if (R?.id) {
		c?.({
			phase: "complete",
			percent: 100,
			message: "File already imported"
		});
		const e = R.availableDates;
		return {
			alreadyImported: !0,
			fileId: R.id,
			availableDates: e,
			sourceType: R.sourceType ?? o.EPOCHS_60S
		};
	}
	const M = await Y(e.name, w);
	if (M && "incomplete" !== M.ingestState) throw new me();
	c?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing mapped MIMS columns..."
	}), F(d, "before reading mapped MIMS CSV");
	const C = await async function(e, r, i, o) {
		const l = s(await e.text()), c = a(l);
		if (c.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
		const d = c.records, m = d[r]?.text;
		if (!m) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
		const g = t(m), f = n(m, g), p = v(i, f);
		if (p.length > 0) throw new Error(h(p));
		const w = et(f, i.datetime_column), y = et(f, i.date_column), b = et(f, i.time_column), S = et(f, i.mims_unit_column), I = et(f, i.mims_unit_x_column), _ = et(f, i.mims_unit_y_column), R = et(f, i.mims_unit_z_column), M = [], C = [], G = [], A = [], D = [], N = [];
		for (let t = r + 2; t <= d.length; t++) {
			const e = d[t - 1];
			if (!e?.text.trim()) continue;
			const a = n(e.text, g);
			N.push({
				sourceRow: e.sourceRow,
				row: a,
				label: it(a, w, y, b)
			});
		}
		const x = await (o ?? u()).sourceLabelsWallClockMs(N.map(({ label: e }) => e)), T = N.findIndex((e, t) => !Number.isFinite(x[t] ?? NaN));
		if (T >= 0) throw new Error(`Could not parse timestamp on row ${String(N[T].sourceRow)} of the mapped MIMS CSV.`);
		for (const [t, { row: a }] of N.entries()) M.push(x[t]), C.push(ot(a, S)), G.push(ot(a, I)), A.push(ot(a, _)), D.push(ot(a, R));
		if (0 === M.length) throw new Error("The mapped MIMS CSV did not contain any data rows.");
		return {
			timestampsMs: new Float64Array(M),
			mimsUnit: null === S ? /* @__PURE__ */ new Float64Array() : new Float64Array(C),
			mimsUnitX: null === I ? /* @__PURE__ */ new Float64Array() : new Float64Array(G),
			mimsUnitY: null === _ ? /* @__PURE__ */ new Float64Array() : new Float64Array(A),
			mimsUnitZ: null === R ? /* @__PURE__ */ new Float64Array() : new Float64Array(D)
		};
	}(e, r, i, y);
	F(d, "after reading mapped MIMS CSV");
	const G = o.EPOCHS_60S, A = await async function(e, t) {
		const a = /* @__PURE__ */ new Map(), n = t.timestampsMs.length, r = lt(t.mimsUnit, n), s = lt(t.mimsUnitX, n), i = lt(t.mimsUnitY, n), o = lt(t.mimsUnitZ, n), l = Float64Array.from(t.timestampsMs, (e) => e / 1e3);
		for (const [c, d] of await g(e, l)) a.set(c, {
			timestamps: p(l, d, 0),
			...r ? { mimsUnit: p(r, d, NaN) } : {},
			...s ? { mimsUnitX: p(s, d, NaN) } : {},
			...i ? { mimsUnitY: p(i, d, NaN) } : {},
			...o ? { mimsUnitZ: p(o, d, NaN) } : {}
		});
		return a;
	}(y, C), N = [...A.keys()].sort(), x = await _(A, y);
	c?.({
		phase: "storing",
		percent: 55,
		message: "Saving mapped MIMS epochs..."
	});
	const k = await bt(b, {
		filename: e.name,
		devicePreset: "mims_metrics",
		epochLengthSeconds: 60,
		availableDates: x,
		fileHash: S,
		sourceContentHash: I,
		sourceSizeBytes: e.size,
		source: "local",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: G,
		...(C.timestampsMs[0] ?? 0) > 0 ? { recording: { effectiveTime: new Date(C.timestampsMs[0] ?? 0).toISOString() } } : {}
	}, y);
	if ("already_complete" === k.kind) {
		const e = k.record.id;
		if (null == e) throw new Error("Completed local import identity is invalid.");
		return {
			alreadyImported: !0,
			fileId: e,
			availableDates: k.record.availableDates,
			sourceType: k.record.sourceType ?? G
		};
	}
	const E = k.guard.fileId;
	let z = !1, U = 0;
	for (const t of N) {
		const e = A.get(t);
		if (!e) continue;
		F(d, `saveActivityDay ${t}`);
		const a = /* @__PURE__ */ new Float64Array();
		await St(b);
		const n = {
			fileId: E,
			date: t,
			timestamps: a.buffer,
			axisY: a.buffer,
			vectorMagnitude: a.buffer,
			ggirTimestamps: new Float64Array(e.timestamps).buffer,
			...e.mimsUnit ? { mimsUnit: new Float64Array(e.mimsUnit).buffer } : {},
			...e.mimsUnitX ? { mimsUnitX: new Float64Array(e.mimsUnitX).buffer } : {},
			...e.mimsUnitY ? { mimsUnitY: new Float64Array(e.mimsUnitY).buffer } : {},
			...e.mimsUnitZ ? { mimsUnitZ: new Float64Array(e.mimsUnitZ).buffer } : {},
			algorithmResults: {},
			nonwearResults: null
		};
		await H(n, w, d).then(() => !0).catch((e) => (console.warn("[local-processing] Mapped MIMS activity-day persistence failed."), Ye(e, "saveActivityDay (mapped MIMS CSV)"), z = !0, !1)) && (U += 1, await Mt(E, [n], w, y, d));
	}
	if (z || U !== N.length || 0 === U) throw await _t(b), /* @__PURE__ */ new Error("Could not save any mapped MIMS data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return F(d, "before completing mapped MIMS ingest"), await It(b), c?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete"
	}), {
		fileId: E,
		availableDates: x,
		sourceType: G
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
		F(t, "before reading GeneActiv CSV header");
		const s = await x(e, r, a);
		F(t, "after reading GeneActiv CSV header");
		const i = r >= n, o = s.split("\n"), l = i && r >= e.size ? o : o.slice(0, -1);
		for (const e of l) {
			const t = na(e);
			if (null !== t) return t >= ea;
		}
		if (i) return !1;
		r = Math.min(2 * r, n);
	}
}
export { Qe as A, ct as C, st as D, nt as E, Xe as M, Ze as O, ut as S, at as T, It as _, Ot as a, ht as b, Ft as c, Nt as d, St as f, Ct as g, Gt as h, Jt as i, qe as j, Ye as k, xt as l, bt as m, ra as n, Ut as o, At as p, Qt as r, zt as s, Pt as t, Tt as u, _t as v, rt as w, mt as x, Rt as y };
