import { p as e } from "./ggir-results-types-e7JA7N7O.js";
import { Ar as t, B as n, Bn as a, Bt as i, Cn as s, Cr as r, Dn as o, E as l, En as c, Er as u, Ft as d, Hn as p, In as f, It as m, L as h, Ln as g, M as y, Mr as w, N as _, O as v, On as b, P as S, Pr as k, Qn as I, R as A, Rn as x, Sn as N, T, Vt as M, Yn as R, bn as z, br as E, cn as D, d as $, er as C, f as F, gn as P, gr as O, h as j, j as B, jr as G, kr as L, l as U, ln as H, mn as Z, mr as q, n as V, o as W, on as J, or as K, p as Y, qn as X, r as Q, rr as ee, s as te, sr as ne, wn as ae, x as ie, xn as se, xr as re, yn as oe } from "./background-jobs-CPaTeltP.js";
import { $n as le, $t as ce, A as ue, An as de, At as pe, B as fe, Br as me, Bt as he, C as ge, Cn as ye, Ct as we, D as _e, Dn as ve, Dt as be, E as Se, Et as ke, Ft as Ie, G as Ae, Gn as xe, Gr as Ne, Gt as Te, H as Me, Ht as Re, It as ze, J as Ee, Jr as De, Kn as $e, Kr as Ce, L as Fe, Lr as Pe, M as Oe, Mt as je, N as Be, Nn as Ge, Nr as Le, O as Ue, On as He, Or as Ze, Ot as qe, P as Ve, Pn as We, Q as Je, Qn as Ke, Qt as Ye, Rt as Xe, S as Qe, Sn as et, St as tt, T as nt, Tn as at, Tr as it, Tt as st, U as rt, Un as ot, Ur as lt, V as ct, Vn as ut, Vt as dt, W as pt, X as ft, Xn as mt, Xr as ht, Y as gt, Yn as yt, Yr as wt, Zn as _t, _ as vt, _n as bt, _r as St, _t as kt, a as It, ar as At, at as xt, b as Nt, bn as Tt, br as Mt, bt as Rt, c as zt, ct as Et, d as Dt, dn as $t, er as Ct, et as Ft, f as Pt, gt as Ot, ht as jt, i as Bt, in as Gt, ir as Lt, it as Ut, j as Ht, jt as Zt, k as qt, kn as Vt, kt as Wt, l as Jt, lt as Kt, m as Yt, mn as Xt, mt as Qt, n as en, nn as tn, nt as nn, o as an, on as sn, or as rn, p as on, pr as ln, pt as cn, q as un, qt as dn, r as pn, rn as fn, rr as mn, rt as hn, s as gn, sr as yn, st as wn, t as _n, tn as vn, tt as bn, u as Sn, ut as kn, v as In, vn as An, vr as xn, vt as Nn, w as Tn, wr as Mn, wt as Rn, x as zn, xn as En, xt as Dn, y as $n, yn as Cn, yr as Fn, yt as Pn, z as On, zr as jn } from "./db-DGizvZzX.js";
import { n as Bn, t as Gn } from "./valid-day-criteria-CQgofCi6.js";
import { C as Ln, S as Un, T as Hn, a as Zn, b as qn, g as Vn, h as Wn, m as Jn, n as Kn, o as Yn, p as Xn, s as Qn, t as ea, v as ta, w as na, y as aa } from "./ggir-results-import-XPThbWOd.js";
import { i as ia, t as sa } from "./wal-FsmBbqFa.js";
import { C as ra, D as oa, S as la, T as ca, a as ua, b as da, d as pa, f as fa, g as ma, h as ha, i as ga, l as ya, n as wa, o as _a, p as va, s as ba, t as Sa, v as ka, w as Ia, x as Aa, y as xa } from "./local-nonwear-unified-DWWAm6ze.js";
import { _ as Na, a as Ta, c as Ma, d as Ra, f as za, g as Ea, h as Da, i as $a, l as Ca, n as Fa, o as Pa, p as Oa, r as ja, s as Ba, t as Ga, v as La } from "./epoch-utils-Cj4dIHgK.js";
import { A as Ua, B as Ha, C as Za, D as qa, E as Va, G as Wa, H as Ja, J as Ka, K as Ya, M as Xa, N as Qa, O as ei, R as ti, S as ni, T as ai, U as ii, V as si, W as ri, X as oi, Y as li, Z as ci, _ as ui, b as di, g as pi, h as fi, j as mi, k as hi, p as gi, q as yi, v as wi, x as _i, z as vi } from "./local-export-shard-worker-Okf1DPvY.js";
import { a as bi, c as Si, g as ki, h as Ii, m as Ai, p as xi, v as Ni } from "./epoch-series-import-DiJ-G1_4.js";
const Ti = "Review Data Settings > CSV Settings before opening this file.";
function Mi(e) {
	return `Column-mapped CSV mapping could not be applied: ${e.map((e) => e.message).join(" ")} ${Ti}`;
}
function Ri({ cores: e, deviceMemoryGib: t, maxExtraWorkers: n = 3, workerMemoryGib: a = 1, minDeviceMemoryGib: i = 8 }) {
	return !Number.isFinite(t) || (t ?? 0) < i || !Number.isFinite(e) || (e ?? 0) <= 2 ? 0 : Math.max(0, Math.min(n, Math.floor(e) - 2, Math.floor(t / 2 / a) - 1));
}
function zi(e, t) {
	return t.primary && e instanceof Error && e.message.includes("timed out during");
}
Bn();
let Ei = 0;
async function Di(e, { primary: n, getPrimary: a, extraWorkers: i, memoryBudgetGib: s, signal: r, cancelOperation: o = () => {}, createWorker: l }) {
	if (r?.aborted) throw new DOMException("Aborted: raw passes", "AbortError");
	if (0 === e.length) return [];
	if (e.some((e) => {
		const t = Function.prototype.toString.call(e.run);
		return !t.includes("[native code]") && /^(?:async\s*)?(?:function(?:\s+\w+)?\s*|[\w$]+\s*)?\(\s*\)/u.test(t);
	})) throw new Error("A raw pass must receive its pool worker");
	if (0 === i && !n && !a && !l) throw new Error("A single-worker pass must borrow or inject its worker");
	const c = l ?? L, u = e.map((e, t) => ({
		pass: e,
		index: t
	})), d = new Array(e.length), p = /* @__PURE__ */ new Map(), f = {
		stopped: !1,
		done: !1
	}, m = (e, t) => {
		const n = p.get(e);
		void 0 !== n && (p.delete(e), Ei = Math.max(0, Ei - n), !t && e.release ? e.release() : e.terminate());
	};
	let h;
	const g = new Promise((e, t) => {
		h = () => {
			f.stopped = !0, t(new DOMException("Aborted: raw passes", "AbortError"));
		}, r?.addEventListener("abort", h, { once: !0 }), r?.aborted && h();
	}), y = async (e, i, s, r) => {
		let l, u, h = s, g = !1;
		const y = 0 === e && (void 0 !== n || void 0 !== a), w = new Proxy({}, { get: (e, i) => {
			if (f.done) throw new Error("Raw pass pool finished");
			if (f.stopped) throw new DOMException("Aborted: raw passes", "AbortError");
			if (!u && !l) if (y) u = n ?? a();
			else if (Ei + h <= 1 + 4 * Number.EPSILON) {
				Ei += h;
				try {
					l = c({ singleThread: !0 });
				} catch (s) {
					throw Ei = Math.max(0, Ei - h), s;
				}
				p.set(l, h);
			} else u = n ?? a?.() ?? t();
			return Reflect.get(u ?? l.api, i);
		} }), _ = {
			cancel: () => {
				u ? o() : (g = !0, l && m(l, !0));
			},
			get primary() {
				return void 0 !== u || Boolean(y);
			}
		};
		let v = !1;
		try {
			for (let e = i(); e; e = i()) {
				if (f.stopped) return;
				g && (l = void 0, g = !1);
				const t = l ? r?.(e) : void 0;
				l && void 0 !== t && (m(l, !0), l = void 0, h = t);
				const { pass: n, index: a } = e;
				d[a] = await n.run(w, _);
			}
		} catch (b) {
			throw v = !0, f.stopped = !0, b;
		} finally {
			l && m(l, v || f.stopped);
		}
	}, w = Math.min(e.length, i + 1);
	let _;
	if (void 0 === s) {
		const e = Array.from({ length: w }, () => ({
			cost: 0,
			passes: []
		}));
		i > 0 && u.sort((e, t) => t.pass.cost - e.pass.cost);
		for (const t of u) {
			const n = e.reduce((e, t) => t.cost < e.cost ? t : e);
			n.passes.push(t), n.cost += t.pass.cost;
		}
		_ = Promise.all(e.map((e, t) => y(t, () => e.passes.shift(), 1 / (i + 1))));
	} else {
		const e = (e) => e?.pass.memoryGib ?? 0;
		u.sort((t, n) => e(n) - e(t) || n.pass.cost - t.pass.cost);
		let t = 0, n = 0, a = 0;
		_ = new Promise((i, r) => {
			let o = 0;
			const l = () => {
				for (; n < w && t < u.length && (0 === n || a + e(u[t]) <= s);) {
					let d = e(u[t]);
					a += d, o += 1;
					const p = (t) => {
						const n = e(t);
						if (!(2 * n > d)) return a -= d - n, d = n, queueMicrotask(l), Math.min(1, n / s);
					};
					y(n++, c, Math.min(1, d / s), p).then(() => {
						0 === --o && i();
					}, r);
				}
			}, c = () => {
				const e = u[t++];
				return e && l(), e;
			};
			l();
		});
	}
	try {
		await Promise.race([g, _]);
	} catch (v) {
		f.stopped = !0;
		try {
			o();
		} catch {}
		throw v;
	} finally {
		f.done = !0, h && r?.removeEventListener("abort", h);
		for (const e of [...p.keys()]) m(e, !0);
	}
	return d;
}
function $i(e, t, n) {
	const a = Object.values(t);
	if (!a.includes(e)) throw new Error(`${n} must be one of ${a.join(", ")} (bundle reported "${e}")`);
	return e;
}
function Ci(e) {
	return $i(e, N, "temporalBasis");
}
const Fi = {
	full_calibrated_signal: "https://w3id.org/sleep-scoring-ontology/method/actours/full-pipeline-file/1",
	epoch_series_part3to5: "https://w3id.org/sleep-scoring-ontology/method/actours/ggir-epoch-parts-3-to-5/1"
}, Pi = "actours.compute.file.v1", Oi = Number.MAX_SAFE_INTEGER;
function ji(e) {
	if (null == e) return null;
	if ("string" == typeof e) {
		for (let t = 0; t < e.length; t++) {
			const n = e.charCodeAt(t);
			if (n >= 55296 && n <= 56319) {
				const n = e.charCodeAt(t + 1);
				if (!(n >= 56320 && n <= 57343)) throw new TypeError("method parameter strings must contain only Unicode scalar values");
				t++;
			} else if (n >= 56320 && n <= 57343) throw new TypeError("method parameter strings must contain only Unicode scalar values");
		}
		return e;
	}
	if ("boolean" == typeof e) return e;
	if ("number" == typeof e) {
		if (!Number.isFinite(e)) throw new TypeError("method parameter numbers must be finite");
		if (Number.isInteger(e) && Math.abs(e) > Oi) throw new TypeError("method parameter integers must be exactly representable in IEEE-754 binary64");
		return e;
	}
	if (Array.isArray(e)) return e.map(ji);
	if ("object" == typeof e) {
		const t = {};
		for (const [n, a] of Object.entries(e)) null != a && (t[n] = ji(a));
		return t;
	}
	throw new TypeError("unsupported method parameter type: " + typeof e);
}
const Bi = /* @__PURE__ */ new Set([
	"id",
	"fileId",
	"createdAt",
	"updatedAt"
]);
async function Gi(e) {
	const t = [...e].sort((e, t) => e.analysisDate.localeCompare(t.analysisDate)).map((e) => Ke(ji(function(e) {
		const t = {};
		for (const [n, a] of Object.entries(e)) Bi.has(n) || void 0 !== a && (t[n] = a);
		return t;
	}(e))));
	return O(`[${t.join(",")}]`);
}
const Li = {
	accelerator: "cpu_only",
	concurrency: {
		mode: "serial",
		max_threads: null
	},
	vectorization: "baseline"
};
async function Ui(e, t = Y(), n) {
	const a = t, i = await async function(e) {
		if (!/^[0-9a-f]{64}$/.test(e.sourceContentSha256)) throw new Error("sourceContentSha256 must be 64 lowercase hex characters");
		if (!Number.isInteger(e.sourceSizeBytes) || e.sourceSizeBytes < 1) throw new Error("sourceSizeBytes must be a positive integer");
		if (!/^[0-9a-f]{64}$/.test(e.runtimeBuild.artifactSha256)) throw new Error("runtimeBuild.artifactSha256 must be 64 lowercase hex characters");
		const t = e.dailyRows.length, n = 0 === t ? [] : [`daily_summary_stream:sha256:${await Gi(e.dailyRows)}`], a = Li, i = Fi[e.computePath], s = await async function(e) {
			if (!e.methodSpecificationId.trim()) throw new Error("methodSpecificationId must be nonblank");
			const t = (n = e.params, Ke(ji(n)));
			var n;
			return {
				parameter_set_hash: await O(t),
				method_specification_id: e.methodSpecificationId,
				canonicalization_version: "rfc8785_jcs_v1",
				canonical_parameters_json: t,
				parameter_schema_reference: e.parameterSchemaReference ?? null
			};
		}({
			methodSpecificationId: i,
			params: {
				file_compute_contract: Pi,
				...e.ggirConfigSha256 ? { ggir_config_sha256: e.ggirConfigSha256 } : {},
				execution: {
					accelerator: a.accelerator,
					concurrency: {
						mode: a.concurrency.mode,
						maxThreads: a.concurrency.max_threads
					},
					vectorization: a.vectorization
				}
			}
		}), r = e.runtimeBuild, o = r.sourceRevision ?? `${r.crateVersion}+${[...r.compiledFeatures].sort().join("+")}`, l = {
			execution_id: (c = e.fileId, u = e.computePath, `local:file-${String(c)}:actours-${u.replace(/_/g, "-")}-v1`),
			method_specification_id: i,
			method_implementation_id: `actours:${r.target}:${o}:artifact-sha256-${r.artifactSha256}:${e.computePath}`,
			parameter_set_hash: s.parameter_set_hash,
			input_entity_ids: [`urn:sha256:${e.sourceContentSha256}`],
			output_entity_ids: n,
			started_at: e.startedAt,
			completed_at: e.finishedAt
		};
		var c, u;
		return {
			result_contract_version: "sleep-scoring-web.local-content-bound-daily-summary/v1",
			file_compute_contract_version: Pi,
			compute_contract_version: "actours.compute.v1",
			source_content_sha256: e.sourceContentSha256,
			source_size_bytes: e.sourceSizeBytes,
			source_revision: r.sourceRevision,
			semantic_profile: e.semanticProfile,
			profile_proof_status: e.profileProofStatus,
			temporal_basis: e.temporalBasis,
			compute_path: e.computePath,
			target: "wasm",
			calibration_disposition: e.calibration?.disposition ?? "skipped_disabled",
			daily_output_disposition: 0 === t ? "no_complete_daily_interval" : "complete_daily_outputs",
			diary_disposition: e.diaryDisposition,
			timestamp_grid: e.timestampGrid,
			parameter_set: s,
			execution_request: a,
			method_execution: l,
			output_row_count: t,
			runtime_build: r,
			source_digest_scope: e.sourceDigestScope
		};
	}(e), s = await async function(e) {
		return O(Ke({
			execution_id: e.method_execution.execution_id,
			source_content_sha256: e.source_content_sha256,
			source_digest_scope: e.source_digest_scope,
			method_specification_id: e.method_execution.method_specification_id,
			method_implementation_id: e.method_execution.method_implementation_id,
			parameter_set_hash: e.parameter_set.parameter_set_hash,
			output_entity_ids: e.method_execution.output_entity_ids ?? [],
			output_row_count: e.output_row_count
		}));
	}(i), r = {
		attestationId: s,
		fileId: e.fileId,
		importStatus: 0 === e.dailyRows.length ? "completed_partial" : "committed",
		contractStatus: "valid",
		importerName: "sleep-scoring-web-wasm",
		importerVersion: e.appVersion,
		startedAt: e.startedAt,
		finishedAt: e.finishedAt,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		attestation: i
	};
	return $(a, [a.localExecutions], async () => {
		const e = await a.localExecutions.where("attestationId").equals(s).first();
		if (void 0 !== e?.id) {
			const t = {
				...r,
				id: e.id,
				createdAt: e.createdAt
			};
			return await a.localExecutions.put(t), t;
		}
		const t = await a.localExecutions.add(r);
		return {
			...r,
			id: t
		};
	}, n);
}
async function Hi(e, n = t()) {
	const a = await n.weekendDates([...e]);
	return Array.from(a, (e) => 0 !== e);
}
async function Zi(e, t = Gn, n) {
	const a = await V(n).validWearDays(Float64Array.from(e), t);
	return Array.from(a, (e) => 0 !== e);
}
async function qi(e, t = Gn, n) {
	return V(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
}
function Vi() {
	return [
		"Could not identify file format.",
		"Use Data Settings > CSV Import for mapped vendor, GGIR, MIMS, or generic activity CSV exports.",
		"Native local ingest supports ActiGraph CSV/GT3X, GENEActiv raw CSV/.bin, GGIR meta RData, NHANES PAX80 archives, and recognized generic CSV mappings.",
		"Condor ActLumus/ActTrust TXT files require the server parser today."
	].join(" ");
}
function Wi(e, t) {
	Ut(e) && X().storage.reportFull(t, "Browser storage quota was exceeded while saving local results.");
}
function Ji(e) {
	return "the local model runtime or its input contract rejected the operation";
}
function Ki(e) {
	return `LSTM ONNX sleep/wake scoring could not be computed for this raw file${e ? ` because ${e}` : ""}. Count-based scoring is intact.`;
}
function Yi(e) {
	if (!e || 0 === e.length) return "";
	let t = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY, a = 0;
	for (const i of e) t = Math.min(t, i), n = Math.max(n, i), a += i;
	return ` (sleep probability min=${t.toFixed(3)}, mean=${(a / e.length).toFixed(3)}, max=${n.toFixed(3)})`;
}
function Xi(e, t) {
	if (!e || 0 === e.length) return null;
	let n = 0;
	for (const a of e) n += a ? 1 : 0;
	return 0 === n ? `LSTM ONNX sleep/wake scoring produced an all-wake result${Yi(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : n === e.length ? `LSTM ONNX sleep/wake scoring produced an all-sleep result${Yi(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : null;
}
function Qi(e, t) {
	const n = [
		...be(e, as, t),
		...qe(e, as),
		...pe(e, as, t)
	];
	e.activity_column || n.push({
		key: "activity_column",
		message: "Map an activity/counts column."
	});
	const a = Boolean(e.datetime_column), i = Boolean(e.date_column && e.time_column);
	return a || i || n.push({
		key: "timestamp",
		message: "Map Date/time, or map both Date and Time."
	}), n;
}
function es(e, t) {
	const n = ts(e, t), a = Boolean(e.datetime_column), i = Boolean(e.date_column && e.time_column);
	return a || i || n.push({
		key: "timestamp",
		message: "Map Date/time, or map both Date and Time."
	}), e.mims_unit_column || n.push({
		key: "mims_unit_column",
		message: "Map a MIMS unit column."
	}), n;
}
function ts(e, t) {
	return [
		...be(e, as, t),
		...qe(e, as),
		...pe(e, as, t)
	];
}
const ns = [30, 60], as = [
	{
		key: "date_column",
		label: "Date",
		aliases: [
			"date",
			"startdate",
			"analysis_date",
			"analysisdate",
			"day"
		],
		required: !1,
		uiGroup: "Time base",
		dataType: "date",
		valueKind: "date_field"
	},
	{
		key: "time_column",
		label: "Time",
		aliases: [
			"time",
			"timestamp_time",
			"clock_time"
		],
		required: !1,
		uiGroup: "Time base",
		dataType: "time",
		valueKind: "temporal_point"
	},
	{
		key: "datetime_column",
		label: "Date/time",
		aliases: [
			"datetime",
			"timestamp",
			"date_time",
			"timestamp_ms"
		],
		required: !1,
		uiGroup: "Time base",
		dataType: "datetime",
		valueKind: "datetime"
	},
	{
		key: "activity_column",
		label: "Activity / Y axis",
		aliases: [
			"activity",
			"axis1",
			"axis_1",
			"axis_y",
			"y",
			"counts",
			"activity_count",
			"pim",
			"tat",
			"zcm"
		],
		required: !0,
		uiGroup: "Activity signal",
		dataType: "float",
		valueKind: "activity_count"
	},
	{
		key: "axis_x_column",
		label: "X axis",
		aliases: [
			"axis2",
			"axis_2",
			"axis_x",
			"x",
			"x_count",
			"x_counts"
		],
		required: !1,
		uiGroup: "Raw axes",
		dataType: "float",
		valueKind: "axis_count"
	},
	{
		key: "axis_z_column",
		label: "Z axis",
		aliases: [
			"axis3",
			"axis_3",
			"axis_z",
			"z",
			"z_count",
			"z_counts"
		],
		required: !1,
		uiGroup: "Raw axes",
		dataType: "float",
		valueKind: "axis_count"
	},
	{
		key: "vector_magnitude_column",
		label: "Vector magnitude",
		aliases: [
			"vector_magnitude",
			"vm",
			"magnitude"
		],
		required: !1,
		uiGroup: "Activity signal",
		dataType: "float",
		valueKind: "vector_magnitude"
	},
	{
		key: "enmo_column",
		label: "ENMO",
		aliases: [
			"enmo",
			"enmo_mg",
			"enmo_milli_g",
			"ENMO"
		],
		required: !1,
		uiGroup: "GGIR / derived metrics",
		dataType: "float",
		valueKind: "acceleration_metric",
		canonicalUnit: "mg",
		acceptedUnits: ["mg", "g"]
	},
	{
		key: "anglez_column",
		label: "Angle Z",
		aliases: [
			"anglez",
			"angle_z",
			"angle_z_degrees",
			"anglez_degrees"
		],
		required: !1,
		uiGroup: "GGIR / derived metrics",
		dataType: "float",
		valueKind: "angle",
		canonicalUnit: "deg",
		acceptedUnits: ["deg", "degrees"]
	},
	{
		key: "ggir_sib_column",
		label: "GGIR SIB / sleep flag",
		aliases: [
			"sib",
			"ggir_sib",
			"hasib",
			"sleep_flag",
			"sleep_wake",
			"sleepwake",
			"sleepsib"
		],
		required: !1,
		uiGroup: "Quality flags",
		dataType: "bool",
		valueKind: "sleep_flag"
	},
	{
		key: "ggir_nonwear_column",
		label: "GGIR nonwear flag",
		aliases: [
			"nonwear",
			"nonwear_flag",
			"invalid",
			"invalid_flag",
			"wear",
			"wear_flag",
			"mask"
		],
		required: !1,
		uiGroup: "Quality flags",
		dataType: "bool",
		valueKind: "nonwear_flag"
	},
	{
		key: "event_marker_column",
		label: "Event marker / button press",
		aliases: [
			"marker",
			"event_marker",
			"eventmarker",
			"event",
			"button",
			"marker_event",
			"event_marker_button"
		],
		required: !1,
		uiGroup: "Quality flags",
		dataType: "bool",
		valueKind: "event_marker"
	},
	{
		key: "mims_unit_column",
		label: "MIMS unit",
		aliases: [
			"mims_unit",
			"mims",
			"mimsunit",
			"mims_units",
			"mims_triaxial"
		],
		required: !1,
		uiGroup: "MIMS metrics",
		dataType: "float",
		valueKind: "mims"
	},
	{
		key: "mims_unit_x_column",
		label: "MIMS X",
		aliases: [
			"mims_unit_x",
			"mims_x",
			"mimsx",
			"mims_axis_x"
		],
		required: !1,
		uiGroup: "MIMS metrics",
		dataType: "float",
		valueKind: "mims_axis"
	},
	{
		key: "mims_unit_y_column",
		label: "MIMS Y",
		aliases: [
			"mims_unit_y",
			"mims_y",
			"mimsy",
			"mims_axis_y"
		],
		required: !1,
		uiGroup: "MIMS metrics",
		dataType: "float",
		valueKind: "mims_axis"
	},
	{
		key: "mims_unit_z_column",
		label: "MIMS Z",
		aliases: [
			"mims_unit_z",
			"mims_z",
			"mimsz",
			"mims_axis_z"
		],
		required: !1,
		uiGroup: "MIMS metrics",
		dataType: "float",
		valueKind: "mims_axis"
	}
], is = [
	["axis_x", "axisX"],
	["axis_y", "axisY"],
	["axis_z", "axisZ"],
	["vector_magnitude", "vectorMagnitude"],
	["choi_axis", "choiAxis"]
];
async function ss(e, t, n) {
	const a = is.filter(([, e]) => (t[e]?.length ?? 0) > 0), { series: i } = await e.aggregateEpochSeries({
		target_seconds: A,
		series: {
			timestamps_ms: Array.from(t.timestamps, (e) => 1e3 * e),
			epoch_seconds: n,
			channels: a.map(([e, n]) => ({
				name: e,
				counts: Array.from(t[n])
			})),
			light: [],
			light_channels: [],
			temperature: [],
			off_wear: [],
			device: "browser",
			primary: "vector_magnitude"
		}
	}), s = (e) => Float64Array.from(i.channels.find((t) => t.name === e)?.counts ?? []), r = {
		timestamps: Float64Array.from(i.timestamps_ms, (e) => e / 1e3),
		axisY: s("axis_y"),
		vectorMagnitude: s("vector_magnitude")
	};
	for (const [o, l] of a) "axisY" !== l && "vectorMagnitude" !== l && (r[l] = s(o));
	return r;
}
async function rs(e, t, n, a) {
	const i = n.flatMap((e) => t[e] ? [[e, t[e]]] : []), s = await Promise.all(i.map(([, t]) => ss(e, t, a)));
	return Object.fromEntries(i.map(([e], t) => [e, s[t]]));
}
async function os(e, t, n, a) {
	return 0 === t.length ? new Uint8Array(a.length) : e.projectLabelsOntoGrid(t, n, A, a);
}
async function ls(e, t, n) {
	return Array.from(await e.roundCountStorage(Float64Array.from(t), n));
}
async function cs(e, t) {
	const { dates: n, day: a } = await e.utcDayIndex(Float64Array.from(t)), i = new Map(n.map((e) => [e, []]));
	return a.forEach((e, t) => {
		const a = n[e];
		void 0 !== a && i.get(a)?.push(t);
	}), i;
}
function us(e, t, n) {
	return t.map((t) => e[t] ?? n);
}
function ds(e) {
	const t = new Float64Array(e.reduce((e, t) => e + t.length, 0));
	let n = 0;
	for (const a of e) t.set(a, n), n += a.length;
	return t;
}
function ps(e, t, n) {
	return Float64Array.from(t, (t) => e[t] ?? n);
}
async function fs(e, t, n, a) {
	return Float64Array.from(await e.uniformTimestamps(t, 1e3 * n, a), (e) => e / 1e3);
}
async function ms(e, t, n, a) {
	if (!Number.isFinite(t) || 0 === n.length || !Number.isFinite(a) || a <= 0) return /* @__PURE__ */ new Map();
	const i = await cs(e, await fs(e, t, a, n.length));
	return new Map(Array.from(i, ([e, t]) => [e, Uint8Array.from(us(n, t, 0))]));
}
async function hs(e, t, n, a, i = {}) {
	const s = /* @__PURE__ */ new Map();
	if (0 === t.length) return s;
	if (n.length !== t.length || a.length !== t.length) return console.warn("[local-processing] The 5 s GGIR timestamp grid does not match its ENMO/anglez series; skipping the GGIR day split rather than fabricating zeros."), s;
	const r = void 0 !== i.sib && i.sib.length === t.length, o = void 0 !== i.anglex && i.anglex.length === t.length, l = void 0 !== i.angley && i.angley.length === t.length, c = void 0 !== i.nonwear && i.nonwear.length === t.length, u = void 0 !== i.invalid && i.invalid.length === t.length, d = void 0 !== i.mimsUnit && i.mimsUnit.length === t.length, p = void 0 !== i.mimsUnitX && i.mimsUnitX.length === t.length, f = void 0 !== i.mimsUnitY && i.mimsUnitY.length === t.length, m = void 0 !== i.mimsUnitZ && i.mimsUnitZ.length === t.length, h = (e, t) => t.map((t) => (e[t] ?? 0) > 0 ? 1 : 0), g = Float64Array.from(t, (e) => e / 1e3);
	for (const [y, w] of await cs(e, g)) s.set(y, {
		timestamps: us(g, w, 0),
		enmo: us(n, w, 0),
		anglez: us(a, w, 0),
		...o ? { anglex: us(i.anglex, w, 0) } : {},
		...l ? { angley: us(i.angley, w, 0) } : {},
		...r ? { sib: us(i.sib, w, 0) } : {},
		...c ? { nonwear: h(i.nonwear, w) } : {},
		...u ? { invalid: h(i.invalid, w) } : {},
		...d ? { mimsUnit: us(i.mimsUnit, w, NaN) } : {},
		...p ? { mimsUnitX: us(i.mimsUnitX, w, NaN) } : {},
		...f ? { mimsUnitY: us(i.mimsUnitY, w, NaN) } : {},
		...m ? { mimsUnitZ: us(i.mimsUnitZ, w, NaN) } : {}
	});
	return s;
}
async function gs(e, t, n, a, i, s) {
	const r = /* @__PURE__ */ new Map();
	if (0 === t.length || !Number.isFinite(n)) return r;
	for (const [o, l] of Object.entries(a)) r.set(o, await e.foldUniformOntoGrid(n / 1e3, 30, t, Float64Array.from(l.timestamps), i, s));
	return r;
}
async function ys(e, t, n, a, i) {
	const s = await gs(e, Float64Array.from(t), n, a, i, "majority_ties_sleep");
	return new Map(Array.from(s, ([e, t]) => [e, Uint8Array.from(t)]));
}
async function ws(e, t, n, a, i) {
	const s = await gs(e, Float64Array.from(t), n, a, i, "mean");
	return new Map(Array.from(s, ([e, t]) => [e, Float32Array.from(t)]));
}
async function _s(e, t, n) {
	const a = /* @__PURE__ */ new Map();
	if (!t || 0 === t.length || null === n || !Number.isFinite(n)) return a;
	const i = await fs(e, n, 30, t.length);
	for (const [s, r] of await cs(e, i)) a.set(s, {
		timestamps: us(i, r, 0),
		scores: r.map((e) => t[e] ? 1 : 0)
	});
	return a;
}
async function vs(e, t, n, a, i) {
	const s = await e.foldOntoGrid(Float64Array.from(t), Float64Array.from(n), Float64Array.from(a), 1e3 * i, "finite_mean");
	return Array.from(s);
}
async function bs(e, t, n, a, i, s, r, o, l, c, u, d) {
	return async function(e, t, n, a, i, s, r, o, l, c, u, d) {
		const p = {}, f = null != i, m = null != s && s.length > 0, h = null != r && r.length > 0, g = null != o && o.length > 0, y = null != l?.unit && l.unit.length === t.length, w = null != l?.unitX && l.unitX.length === t.length, _ = null != l?.unitY && l.unitY.length === t.length, v = null != l?.unitZ && l.unitZ.length === t.length, b = null != u && u.length === t.length, S = null != c && c.length === t.length, k = null != d && d.length === t.length;
		for (const [I, A] of await cs(e, t)) p[I] = {
			timestamps: ps(t, A, 0),
			axisY: ps(n, A, 0),
			vectorMagnitude: ps(a, A, 0),
			...h ? { axisX: ps(r, A, 0) } : {},
			...g ? { axisZ: ps(o, A, 0) } : {},
			...f ? { choiAxis: ps(i, A, 0) } : {},
			...m ? { temperature: ps(s, A, NaN) } : {},
			...y ? { mimsUnit: ps(l?.unit ?? [], A, NaN) } : {},
			...w ? { mimsUnitX: ps(l?.unitX ?? [], A, NaN) } : {},
			..._ ? { mimsUnitY: ps(l?.unitY ?? [], A, NaN) } : {},
			...v ? { mimsUnitZ: ps(l?.unitZ ?? [], A, NaN) } : {},
			...b ? { zeroCrossingX: ps(u, A, NaN) } : {},
			...S ? { zeroCrossingY: ps(c, A, NaN) } : {},
			...k ? { zeroCrossingZ: ps(d, A, NaN) } : {}
		};
		return p;
	}(e, t, await ls(e, n, 0), await ls(e, a, 2), void 0 !== r ? await ls(e, r, 0) : void 0, o, await ls(e, i, 0), await ls(e, s, 0), l, c, u, d);
}
function Ss(e, t) {
	return 30 !== t && (J(e)?.hasRawAccel ?? !1);
}
async function ks(e) {
	if (e.timestampsMs) {
		const t = 1e3 / e.sampleRate, n = e.timestampsMs[0] !== e.firstTsMs, a = e.timestampsMs.some((n, a) => Math.abs(n - e.firstTsMs - a * t) > .5 * t);
		if (n || a) return console.warn("[local-processing] Native 30-second counts were skipped because raw preparation changed the sample timeline."), null;
	}
	const t = e.cancelOperation ?? (() => {
		G(e.wasmApi);
	}), n = await W(e.wasmApi, (t) => t.neishabouriCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: I,
		label: `neishabouriCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}), a = await W(e.wasmApi, (t) => t.zeroCrossingCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: I,
		label: `zeroCrossingCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}).catch((t) => (ee(t, e.signal, `zeroCrossingCounts 30s (${e.label})`), console.warn("[local-processing] The optional 30-second zero-crossing pass failed."), null));
	return {
		timestampsSec: await fs(e.wasmApi, e.firstTsMs, 30, n.y.length),
		neishabouri: n,
		zeroCrossing: a
	};
}
async function Is(e, t, n) {
	const a = n.zeroCrossing, i = await bs(e, n.timestampsSec, n.neishabouri.y, n.neishabouri.vm, n.neishabouri.x, n.neishabouri.z, void 0, void 0, void 0, a ? await ls(e, a.zcy, 0) : void 0, a ? await ls(e, a.zcx, 0) : void 0, a ? await ls(e, a.zcz, 0) : void 0);
	for (const [s, r] of Object.entries(i)) {
		const e = t[s];
		e && (e.counts30s = {
			timestamps: r.timestamps,
			axisY: r.axisY,
			vectorMagnitude: r.vectorMagnitude,
			...r.axisX ? { axisX: r.axisX } : {},
			...r.axisZ ? { axisZ: r.axisZ } : {},
			...r.zeroCrossingX ? { zeroCrossingX: r.zeroCrossingX } : {},
			...r.zeroCrossingY ? { zeroCrossingY: r.zeroCrossingY } : {},
			...r.zeroCrossingZ ? { zeroCrossingZ: r.zeroCrossingZ } : {}
		});
	}
}
const As = "Recording crossed a timezone boundary (a 1 h jump in the device clock). Recording times are kept as the device's wall-clock time; no timezone or daylight-saving shift is applied, so local-time metrics around the jump may be off.";
async function xs(e, t) {
	return await e.detectHourClockJumpMs(Float64Array.from(t)) ? As : null;
}
async function Ns(e, t, n = 60) {
	(await e.irregularInternalDays(Float64Array.from(t), n)).forEach(() => {
		console.warn("[local-processing] A possible DST transition or partial internal day was detected; review the in-app import warning.");
	});
}
async function Ts(e, t, n) {
	const a = [...e], i = n && n.storedEpochSeconds < A ? n : void 0, s = i ? await Promise.all(a.map(([, e]) => async function(e, t, n) {
		const { series: a } = await e.aggregateEpochSeries({
			target_seconds: A,
			series: {
				timestamps_ms: Array.from(t, (e) => 1e3 * e),
				epoch_seconds: n,
				channels: [],
				light: [],
				light_channels: [],
				temperature: [],
				off_wear: [],
				device: "browser",
				primary: "vector_magnitude"
			}
		});
		return Float64Array.from(a.timestamps_ms, (e) => e / 1e3);
	}(i.core, e.timestamps, i.storedEpochSeconds))) : a.map(([, e]) => e.timestamps), r = [];
	let o = Number.POSITIVE_INFINITY, l = Number.NEGATIVE_INFINITY;
	for (const [c, [u]] of a.entries()) {
		const e = s[c];
		i && 0 === e.length || (r.push(u), 0 !== e.length && (o = Math.min(o, e[0] ?? o), l = Math.max(l, e[e.length - 1] ?? l)));
	}
	return r.sort(), Number.isFinite(o) && Number.isFinite(l) ? Ie(r, o, l, void 0, t) : r;
}
function Ms(e) {
	return /[",\r\n]/.test(e) ? `"${e.replace(/"/g, "\"\"")}"` : e;
}
function Rs(e, t) {
	if (!t) return null;
	const n = Wt(t), a = e.findIndex((e) => Wt(e) === n);
	return a >= 0 ? a : null;
}
function zs(e) {
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
function Es(e, t) {
	if (e.length !== t.length) return console.warn("[local-processing] Event-marker column dropped: mapped row count differs from the parsed epoch count."), /* @__PURE__ */ new Float64Array(0);
	const n = [];
	for (let a = 0; a < e.length; a += 1) {
		const i = t[a];
		1 === e[a] && null != i && Number.isFinite(i) && n.push(i / 1e3);
	}
	return Float64Array.from(n.sort((e, t) => e - t));
}
function Ds(e, t, n) {
	const a = new Uint8Array(e.length);
	let i = 0;
	for (const s of Array.from(t)) {
		for (; i + 1 < e.length && (e[i + 1] ?? 1 / 0) <= s;) i += 1;
		const t = e[i];
		null != t && s >= t && s < t + n && (a[i] = 1);
	}
	return a;
}
function $s(e, t) {
	const n = Date.parse(`${t}T00:00:00Z`) / 1e3, a = [];
	for (const i of Array.from(e)) i >= n && i < n + 86400 && a.push(i);
	return Float64Array.from(a);
}
async function Cs(e, t, n, a) {
	C(a, "standardizing mapped CSV");
	const i = oe(await e.text());
	C(a, "standardizing mapped CSV");
	const s = P(i);
	if (s.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
	const r = s.records, o = r[t]?.text;
	if (!o) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
	const l = D(o), c = Z(o, l), u = Qi(n, c);
	if (u.length > 0) throw new Error(Mi(u));
	const d = Rs(c, n.datetime_column), p = Rs(c, n.date_column), f = Rs(c, n.time_column), m = Rs(c, n.activity_column), h = Rs(c, n.axis_x_column), g = Rs(c, n.axis_z_column), y = Rs(c, n.vector_magnitude_column), w = [
		{
			header: "ENMO",
			idx: Rs(c, n.enmo_column)
		},
		{
			header: "AngleZ",
			idx: Rs(c, n.anglez_column)
		},
		{
			header: "GGIR_SIB",
			idx: Rs(c, n.ggir_sib_column)
		},
		{
			header: "GGIR_NONWEAR",
			idx: Rs(c, n.ggir_nonwear_column)
		},
		{
			header: "MIMS_UNIT",
			idx: Rs(c, n.mims_unit_column)
		},
		{
			header: "MIMS_UNIT_X",
			idx: Rs(c, n.mims_unit_x_column)
		},
		{
			header: "MIMS_UNIT_Y",
			idx: Rs(c, n.mims_unit_y_column)
		},
		{
			header: "MIMS_UNIT_Z",
			idx: Rs(c, n.mims_unit_z_column)
		}
	].filter((e) => null !== e.idx), _ = Rs(c, n.event_marker_column), v = null === _ ? null : [];
	if (null === m) throw new Error("Column-mapped CSV mapping requires an activity/counts column before import.");
	if (null === d && (null === p || null === f)) throw new Error("Column-mapped CSV mapping requires Date/time, or both Date and Time, before import.");
	const b = null !== d ? ["Datetime", "Axis1"] : [
		"Date",
		"Time",
		"Axis1"
	];
	null !== h && b.push("Axis2"), null !== g && b.push("Axis3"), null !== y && b.push("Vector Magnitude"), b.push(...w.map((e) => e.header));
	const S = [b.join(",")];
	for (let I = t + 1; I < r.length; I += 1) {
		(I - t - 1) % 1e3 == 0 && (await te(), C(a, "standardizing mapped CSV"));
		const e = r[I];
		if (!e.text.trim()) continue;
		const n = Z(e.text, l), i = null !== d ? [n[d] ?? "", n[m] ?? ""] : [
			null === p ? "" : n[p] ?? "",
			null === f ? "" : n[f] ?? "",
			n[m] ?? ""
		];
		null !== h && i.push(n[h] ?? ""), null !== g && i.push(n[g] ?? ""), null !== y && i.push(n[y] ?? "");
		for (const t of w) i.push(n[t.idx] ?? "");
		v && null !== _ && v.push(zs(n[_])), S.push(i.map(Ms).join(","));
	}
	const k = new Blob([`${S.join("\n")}\n`], { type: "text/csv" });
	return {
		name: e.name,
		lastModified: e.lastModified,
		size: k.size,
		arrayBuffer: () => k.arrayBuffer(),
		text: () => k.text(),
		slice: (e, t) => k.slice(e, t),
		...v ? { eventMarkerRows: Uint8Array.from(v) } : {}
	};
}
function Fs(e, t, n, a) {
	if (null !== t) return e[t] ?? "";
	const i = null === n ? "" : e[n] ?? "", s = null === a ? "" : e[a] ?? "";
	return `${i.trim()} ${s.trim()}`;
}
function Ps(e, t) {
	if (null === t) return NaN;
	const n = e[t]?.trim() ?? "";
	if (!n) return NaN;
	const a = Number(n);
	return Number.isFinite(a) ? a : NaN;
}
function Os(e, t) {
	return e.length === t && e.some((e) => Number.isFinite(e)) ? e : void 0;
}
const js = Object.assign({
	"../assets/models/lstm_sleep_wake.onnx": "/sleep-scoring-wasm/assets/lstm_sleep_wake-CMNVV_Rk.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba-DjoYpGzg.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa--Jn4_6Dd.onnx",
	"../assets/models/student_lstm_h64_g128_from_lstm_ba.onnx": "/sleep-scoring-wasm/assets/student_lstm_h64_g128_from_lstm_ba-BZ4I7SAE.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_ba.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_ba-CK3CNFjI.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_kappa.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_kappa-Cb_N5vbO.onnx",
	"../assets/models/teacher_lstm_h128_g256_ba.onnx": "/sleep-scoring-wasm/assets/teacher_lstm_h128_g256_ba-CbSChb-h.onnx"
}), Bs = js["../assets/models/lstm_sleep_wake.onnx"] ?? null, Gs = "lstm_sleep_wake_regular_best_20260626", Ls = "bcaf0f2b3f35638a324fd0058ce4cbab03d8f6574cec33a7a07e3e4e0139a908", Us = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_URL, Hs = "configured-url", Zs = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_VERSION ?? Gs, qs = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SHA256 ?? (!Us && Bs ? Ls : ""), Vs = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SIZE_LABEL ?? "7.4 MB model file", Ws = [
	{
		id: "student-cnnlstm-ba",
		assetKey: "../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba.onnx",
		label: "Student CNN-LSTM",
		description: "Fast distilled CNN-LSTM weights with local context.",
		version: "student_cnnlstm_h64_g128_ctx3_ba_20260629",
		sha256: "9126c9e0995fc40d521fd2611067a5dc85a9b625d477476f3df1ead4a1709679",
		sizeLabel: "1.0 MB model file",
		defaultThreshold: .54,
		objective: "balanced_accuracy",
		thresholdPresets: [{
			id: "ba",
			label: "Balanced accuracy",
			threshold: .54,
			description: "Leakage-free BA operating point from the frontier sweep."
		}, {
			id: "kappa-like",
			label: "Higher sleep agreement",
			threshold: .36,
			description: "Lower threshold in the kappa range; use when continuity of sleep labels matters more than wake specificity."
		}],
		metricsLabel: "BA preset: AUC 0.912, BA 0.827, kappa 0.520",
		speedLabel: "CPU benchmark 43.7 ms for 2,880 epochs"
	},
	{
		id: "student-cnnlstm-kappa",
		assetKey: "../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa.onnx",
		label: "Student CNN-LSTM, agreement-tuned weights",
		description: "Fast distilled CNN-LSTM weights trained for stronger sleep/wake agreement.",
		version: "student_cnnlstm_h64_g128_ctx3_kappa_20260629",
		sha256: "323c4302c3600a7b49971d339a35c0237de1f89c4aaeaf835feca0a49732eaa0",
		sizeLabel: "1.0 MB model file",
		defaultThreshold: .36,
		objective: "kappa",
		thresholdPresets: [{
			id: "kappa",
			label: "Kappa",
			threshold: .36,
			description: "Leakage-free kappa operating point from the frontier sweep."
		}, {
			id: "ba-like",
			label: "More wake-specific",
			threshold: .54,
			description: "Raises the sleep probability cut point toward the BA operating range."
		}],
		metricsLabel: "Kappa preset: AUC 0.898, BA 0.781, kappa 0.590",
		speedLabel: "CPU benchmark 43.7 ms for 2,880 epochs"
	},
	{
		id: "student-lstm",
		assetKey: "../assets/models/student_lstm_h64_g128_from_lstm_ba.onnx",
		label: "Student LSTM",
		description: "Distilled pure LSTM weights. Smaller local-browser option; BA and kappa behavior is controlled by the threshold presets.",
		version: "student_lstm_h64_g128_ba_20260629",
		sha256: "93eae5c1262cee6f2c8b3e22f34b4786761ffa172032e5f9f46c262ff7dcf719",
		sizeLabel: "1.9 MB model file",
		defaultThreshold: .51,
		objective: "balanced_accuracy",
		thresholdPresets: [{
			id: "ba",
			label: "Balanced accuracy",
			threshold: .51,
			description: "Pure-LSTM BA operating point."
		}, {
			id: "kappa",
			label: "Kappa",
			threshold: .31,
			description: "Pure-LSTM kappa operating point on the same ONNX weights."
		}],
		metricsLabel: "BA preset: AUC 0.908, BA 0.822, kappa 0.520; kappa preset: AUC 0.901, BA 0.781, kappa 0.597",
		speedLabel: "CPU benchmark 162.6 ms for 2,880 epochs"
	},
	{
		id: "teacher-lstm",
		assetKey: "../assets/models/teacher_lstm_h128_g256_ba.onnx",
		label: "Teacher LSTM",
		description: "Full pure LSTM teacher weights. BA and kappa behavior is controlled by the threshold presets.",
		version: "teacher_lstm_h128_g256_ba_20260629",
		sha256: "04028035efc7498b9fac6f170081b1870511662db45e2d2dec472290e1bd007f",
		sizeLabel: "7.4 MB model file",
		defaultThreshold: .5,
		objective: "balanced_accuracy",
		thresholdPresets: [{
			id: "ba",
			label: "Balanced accuracy",
			threshold: .5,
			description: "Teacher-LSTM BA operating point."
		}, {
			id: "kappa",
			label: "Kappa",
			threshold: .4,
			description: "Teacher-LSTM kappa operating point on the same ONNX weights."
		}],
		metricsLabel: "BA preset: AUC 0.896, BA 0.815, kappa 0.514; kappa preset: AUC 0.889, BA 0.779, kappa 0.590",
		speedLabel: "CPU benchmark 509.2 ms for 2,880 epochs"
	},
	{
		id: "teacher-cnnlstm-ba",
		assetKey: "../assets/models/teacher_cnnlstm_h128_g256_ctx3_ba.onnx",
		label: "Teacher CNN-LSTM",
		description: "Full CNN-LSTM teacher weights with local context.",
		version: "teacher_cnnlstm_h128_g256_ctx3_ba_20260629",
		sha256: "54ea0408df8383fe9233920ee0bb96b0a225df7b1235bdd1ae9950911a9afe55",
		sizeLabel: "3.9 MB model file",
		defaultThreshold: .51,
		objective: "balanced_accuracy",
		thresholdPresets: [{
			id: "ba",
			label: "Balanced accuracy",
			threshold: .51,
			description: "Leakage-free BA operating point from the frontier sweep."
		}, {
			id: "kappa-like",
			label: "Higher sleep agreement",
			threshold: .39,
			description: "Lower threshold in the kappa range; use when continuity of sleep labels matters more than wake specificity."
		}],
		metricsLabel: "BA preset: AUC 0.894, BA 0.813, kappa 0.508",
		speedLabel: "CPU benchmark 167.1 ms for 2,880 epochs"
	},
	{
		id: "teacher-cnnlstm-kappa",
		assetKey: "../assets/models/teacher_cnnlstm_h128_g256_ctx3_kappa.onnx",
		label: "Teacher CNN-LSTM, agreement-tuned weights",
		description: "Full CNN-LSTM teacher weights trained for stronger sleep/wake agreement.",
		version: "teacher_cnnlstm_h128_g256_ctx3_kappa_20260629",
		sha256: "4dad75a37ca19d098a9d8a1c83acc11115ca031d024988b3bba9f396dc33eab2",
		sizeLabel: "3.9 MB model file",
		defaultThreshold: .39,
		objective: "kappa",
		thresholdPresets: [{
			id: "kappa",
			label: "Kappa",
			threshold: .39,
			description: "Leakage-free kappa operating point from the frontier sweep."
		}, {
			id: "ba-like",
			label: "More wake-specific",
			threshold: .51,
			description: "Raises the sleep probability cut point toward the BA operating range."
		}],
		metricsLabel: "Kappa preset: AUC 0.888, BA 0.775, kappa 0.576",
		speedLabel: "CPU benchmark 167.4 ms for 2,880 epochs"
	},
	{
		id: "legacy-lstm-ba",
		assetKey: "../assets/models/lstm_sleep_wake.onnx",
		label: "Legacy bundled LSTM",
		description: "Original bundled pure LSTM export; current recommended default after public-cohort holdout validation.",
		version: Gs,
		sha256: Ls,
		sizeLabel: "7.4 MB model file",
		defaultThreshold: .5,
		objective: "legacy",
		thresholdPresets: [{
			id: "default",
			label: "Default",
			threshold: .5,
			description: "Legacy bundled-model threshold."
		}],
		metricsLabel: "Full public-cohort holdout: AUC 0.932, BA 0.842, kappa 0.598",
		speedLabel: "Pure LSTM teacher-size model",
		recommended: !0
	}
];
var Js = class extends Error {
	constructor(e) {
		super(e), this.name = "LstmModelUnavailableError";
	}
};
function Ks() {
	const e = Ws.flatMap((e) => {
		const t = js[e.assetKey];
		return t ? [{
			...e,
			url: t,
			source: "bundled"
		}] : [];
	}), t = Us ? {
		id: Hs,
		label: "Configured URL",
		description: "ONNX model configured by VITE_LSTM_SLEEP_WAKE_ONNX_URL.",
		url: Us,
		version: Zs,
		sha256: qs || null,
		sizeLabel: Vs,
		defaultThreshold: Number.parseFloat({
			BASE_URL: "/sleep-scoring-wasm/",
			DEV: !1,
			MODE: "production",
			PROD: !0,
			SSR: !1,
			VITE_BASE_PATH: "/sleep-scoring-wasm/",
			VITE_FORCE_LOCAL_MODE: "true"
		}.VITE_LSTM_SLEEP_WAKE_THRESHOLD ?? "0.5"),
		objective: "custom",
		thresholdPresets: [],
		source: "env"
	} : null;
	return t ? [t, ...e] : e;
}
function Ys(e = Ks()) {
	return Us && Us.length > 0 ? Hs : e.find((e) => e.recommended)?.id ?? e[0]?.id ?? null;
}
function Xs(e) {
	const t = Ks(), n = e ?? Ys(t);
	return (t.find((e) => e.id === n) ?? t.find((e) => e.id === Ys(t))) || {
		id: "unconfigured",
		label: "Unconfigured LSTM model",
		description: "No bundled or configured ONNX model was found.",
		url: null,
		version: "unconfigured",
		sha256: null,
		sizeLabel: "model file",
		defaultThreshold: .5,
		objective: "unconfigured",
		thresholdPresets: [],
		source: "unconfigured"
	};
}
function Qs(e) {
	if (!Number.isFinite(e)) throw new Js("LSTM threshold must be a finite number between 0 and 1.");
	return Math.min(1, Math.max(0, e));
}
function er(e) {
	const t = Number.parseFloat({
		BASE_URL: "/sleep-scoring-wasm/",
		DEV: !1,
		MODE: "production",
		PROD: !0,
		SSR: !1,
		VITE_BASE_PATH: "/sleep-scoring-wasm/",
		VITE_FORCE_LOCAL_MODE: "true"
	}.VITE_LSTM_SLEEP_WAKE_THRESHOLD ?? "NaN");
	return Number.isFinite(t) ? Qs(t) : e.defaultThreshold;
}
function tr(e) {
	return null != e ? Xs(e) : Us && Us.length > 0 ? Xs(Hs) : Xs();
}
async function nr(e) {
	(function() {
		if (!("caches" in globalThis)) throw new Js("Browser Cache Storage is unavailable, so the LSTM ONNX model cannot be cached.");
	})();
	const t = tr(e), n = function(e) {
		const { url: t } = tr(e);
		if (!t) throw new Js("LSTM ONNX model is not configured. Add frontend/src/assets/models/lstm_sleep_wake.onnx or set VITE_LSTM_SLEEP_WAKE_ONNX_URL.");
		return t;
	}(t.id), a = await (await caches.open(function(e) {
		return `sleep-scoring-lstm-onnx-${e.version}`;
	}(t))).match(n);
	if (!a) throw new Js("LSTM ONNX model has not been downloaded yet.");
	return new Uint8Array(await a.arrayBuffer());
}
function ar(e) {
	const t = Ks(), n = e && "object" == typeof e ? e : null, a = "string" == typeof n?.modelId ? n.modelId : null, i = a && t.some((e) => e.id === a) ? a : Ys(t);
	if (!i) return {
		modelId: null,
		threshold: null
	};
	const s = Xs(i), r = n?.threshold;
	return {
		modelId: i,
		threshold: "number" == typeof r && Number.isFinite(r) ? Qs(r) : er(s)
	};
}
function ir(e) {
	return ar({
		modelId: e,
		threshold: null
	}).threshold ?? .5;
}
const sr = {
	ggirHasptVariant: p.ggir_haspt_variant,
	ggirHasibVariantsEnabled: p.ggir_hasib_variants_enabled,
	ggirHasibVariants: [...p.ggir_hasib_variants],
	ggirHasibCountSource: p.ggir_hasib_count_source,
	ggirHasibCountEpochSeconds: p.ggir_hasib_count_epoch_seconds
}, rr = new Set(x), or = new Set(g), lr = new Set(f);
function cr(e) {
	const t = e ?? {}, n = t.ggir_haspt_variant, a = t.ggir_hasib_variants_enabled, i = t.ggir_hasib_variants, s = t.ggir_hasib_count_source, r = t.ggir_hasib_count_epoch_seconds, o = Array.isArray(i) ? Array.from(new Set(i.filter((e) => "string" == typeof e && or.has(e)))) : [...sr.ggirHasibVariants];
	return {
		ggirHasptVariant: "string" == typeof n && rr.has(n) ? n : sr.ggirHasptVariant,
		ggirHasibVariantsEnabled: "boolean" == typeof a ? a : sr.ggirHasibVariantsEnabled,
		ggirHasibVariants: o,
		ggirHasibCountSource: "string" == typeof s && lr.has(s) ? s : sr.ggirHasibCountSource,
		ggirHasibCountEpochSeconds: "number" == typeof r && Number.isInteger(r) && r >= 1 ? r : sr.ggirHasibCountEpochSeconds
	};
}
function ur(e) {
	const t = "HDCZA" === e.ggirHasptVariant ? void 0 : { variant: e.ggirHasptVariant }, n = e.ggirHasibVariantsEnabled && e.ggirHasibVariants.length > 0 ? {
		variants: [...e.ggirHasibVariants],
		countSource: e.ggirHasibCountSource,
		countEpochSeconds: e.ggirHasibCountEpochSeconds
	} : void 0;
	if (t || n) return {
		...t ? { hasptVariant: t } : {},
		...n ? { hasibVariants: n } : {}
	};
}
function dr(e) {
	return !fn(e);
}
const pr = /* @__PURE__ */ new WeakMap();
async function fr(e, t) {
	const n = await Pt(e, t);
	return {
		data: n,
		nights: await Va(n?.actiwareIntervals, V())
	};
}
function mr(e, t, n) {
	if (!n) return fr(e, t);
	let a = pr.get(n);
	return a || pr.set(n, a = fr(e, t)), a;
}
const hr = "actiware";
function gr(e) {
	return [...wn(e)].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort();
}
async function yr(e, t, n) {
	try {
		const i = await t.actiwareFileData.get(e);
		if (!i?.actiwareSleepWake) return;
		const s = (await t.actiwareStatisticsInputs.get(e))?.input, r = (await t.files.get(e))?.seriesRevision ?? 0, o = gr(await t.markers.where("fileId").equals(e).toArray());
		let l = null;
		try {
			l = await gi(await Va(i.actiwareIntervals, V(n)), s, o, (e) => V(n).actiwareIntervalStatistics(e));
		} catch (a) {
			n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), rn("error", "Actiware statistics recalculation failed", {
				...At(a),
				file_id: e
			});
		}
		await F(t, [
			t.actiwareFileData,
			t.actiwareStatisticsInputs,
			t.files,
			t.markers
		], async () => {
			const n = await t.actiwareFileData.get(e), a = (await t.actiwareStatisticsInputs.get(e))?.input;
			if (!n || ((await t.files.get(e))?.seriesRevision ?? 0) !== r) return;
			if (JSON.stringify(a) !== JSON.stringify(s) || JSON.stringify(n.actiwareIntervals) !== JSON.stringify(i.actiwareIntervals)) return;
			const c = gr(await t.markers.where("fileId").equals(e).toArray());
			JSON.stringify(c) === JSON.stringify(o) && (await t.actiwareFileData.update(e, null === l ? { actiwareStatisticsNeedsRecompute: !0 } : {
				actiwareStatistics: l,
				actiwareStatisticsNeedsRecompute: !1
			}), await an(t, [e]));
		}, n);
	} catch (a) {
		n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), rn("error", "Actiware statistics recalculation failed", {
			...At(a),
			file_id: e
		});
		try {
			await F(t, [t.actiwareFileData, t.files], async () => {
				await t.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), await an(t, [e]);
			}, n);
		} catch {
			throw a instanceof Error ? a : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
		}
	}
}
async function wr(e, t, n, { analysisParadigm: a, signal: i, read: s }) {
	const r = s ? s.file : await ge(e, n);
	if (dr(r)) {
		if (ce(r, a) === lt.rest_intervals) return yr(e, n, i);
		try {
			const a = await n.actiwareFileData.get(e);
			if (!a?.actiwareSleepWake) return;
			const s = (await n.actiwareStatisticsInputs.get(e))?.input, r = (await n.files.get(e))?.seriesRevision ?? 0, l = await n.markers.where("fileId").equals(e).toArray(), c = !0 === a.actiwareStatisticsNeedsRecompute, u = (e, t) => JSON.stringify(e.filter((e) => e.date === t).map((e) => [
				e.id,
				e.contentHash,
				e.lastModifiedAt,
				e.sleepMarkers
			])), d = (e) => JSON.stringify(e.map((e) => [
				e.markerType,
				e.onsetTimestamp,
				e.offsetTimestamp
			])), p = wn(l.filter((e) => c || t.has(e.date))), f = c ? new Map([...[...p].map(([e, t]) => [e, t.sleepMarkers]), ...t]) : t, m = new Map([...f].flatMap(([e, t]) => {
				const n = p.get(e);
				return n && d(n.sleepMarkers) !== d(t) ? [] : [[e, {
					sleepMarkers: [...t],
					isInvalidNight: n?.isInvalidNight ?? !1
				}]];
			}));
			if (0 === m.size) return;
			const h = new Map([...m.keys()].map((e) => [e, u(l, e)]));
			let g = null;
			try {
				g = await pi({
					file: a,
					statisticsInput: s
				}, m, (e) => V(i).actiwareIntervalStatistics(e), V(i));
			} catch (o) {
				i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), rn("error", "Actiware statistics recalculation failed", {
					...At(o),
					file_id: e
				});
			}
			await F(n, [
				n.actiwareFileData,
				n.actiwareStatisticsInputs,
				n.files,
				n.markers
			], async () => {
				const t = await n.actiwareFileData.get(e), o = (await n.actiwareStatisticsInputs.get(e))?.input;
				if (!t || ((await n.files.get(e))?.seriesRevision ?? 0) !== r) return;
				if (JSON.stringify(o) !== JSON.stringify(s) || JSON.stringify(t.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
				const l = await n.markers.where("fileId").equals(e).toArray(), d = new Map([...m].filter(([e]) => u(l, e) === h.get(e)));
				if (0 === d.size) return;
				if (null === g) return await n.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), void await an(n, [e]);
				const p = ui(t, g), y = p.length > 0 ? await R.waitFor(Ha(p, V(i))) : void 0, w = wi(t, g), _ = w.length > 0 ? await R.waitFor(Va(w, V(i))) : void 0, v = fi(t, g, d.keys(), {
					rowDateOf: y,
					rowNights: _
				});
				await n.actiwareFileData.update(e, {
					actiwareStatistics: v,
					actiwareStatisticsNeedsRecompute: !0 === t.actiwareStatisticsNeedsRecompute && !(c && d.size === f.size)
				}), await an(n, [e]);
			}, i);
		} catch (o) {
			i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), rn("error", "Actiware statistics recalculation failed", {
				...At(o),
				file_id: e
			});
			try {
				await F(n, [n.actiwareFileData, n.files], async () => {
					await n.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), await an(n, [e]);
				}, i);
			} catch {
				throw o instanceof Error ? o : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
			}
		}
	}
}
const _r = "An earlier audit record is still being written. The rest interval was not changed; try again.";
async function vr(e, t, n, a) {
	return (await br(e, n, a, (n, { core: a }) => ni(n, e.date, t, a))).sleepMarkers;
}
async function br({ fileId: e, date: t, actor: n }, a, i, s) {
	const r = await a.actiwareFileData.get(e), o = (await a.actiwareStatisticsInputs.get(e))?.input, l = r?.actiwareSleepWake;
	if (!l || !o) throw new _i("This recording has no Actiware analysis settings, so its rest intervals cannot be edited.");
	const c = V(i), d = r?.actiwareIntervals ?? [], p = await Va(d, c), f = await s(p, {
		epochs: o.epochs,
		params: l.params,
		grid: {
			startTimestamp: l.startTimestamp,
			epochSeconds: l.epochSeconds
		},
		core: c
	}), m = [...f.intervals], h = gr(await a.markers.where("fileId").equals(e).toArray()), g = qa(d, m), y = ei(g);
	if (0 === y.length) return {
		sleepMarkers: Ua(p, t, h.includes(t)),
		removed: 0,
		history: null
	};
	const w = await gi(f, o, h, (e) => c.actiwareIntervalStatistics(e)).catch(bi), _ = mt.captureWorkspaceBinding(a, {
		username: n.username,
		studyId: n.studyId
	});
	if (!await mt.settleWritesForDb(a, _)) throw new _i(_r);
	let v = !1;
	return await F(a, [
		a.actiwareFileData,
		a.markers,
		a.files,
		a.placementResults,
		a.projectMeta,
		a.auditLog
	], async () => {
		const n = await a.actiwareFileData.get(e);
		if (JSON.stringify(n?.actiwareIntervals ?? []) !== JSON.stringify(d)) throw new _i("That rest interval changed since it was shown; reload the night.");
		v = null === w || JSON.stringify(gr(await a.markers.where("fileId").equals(e).toArray())) !== JSON.stringify(h), await a.actiwareFileData.update(e, v ? {
			actiwareIntervals: m,
			actiwareStatisticsNeedsRecompute: !0
		} : {
			actiwareIntervals: m,
			actiwareStatistics: w ?? [],
			actiwareStatisticsNeedsRecompute: !1
		}), await a.placementResults.delete(e), await de([e], a, i), await an(a, [e]), await y.reduce(async (n, a) => {
			if (await n, !await mt.recordFileEventDurably({
				fileId: e,
				analysisDate: t,
				action: u.ACTIWARE_REST_EDITED,
				payload: { ...a }
			}, _)) throw new _i(_r);
		}, Promise.resolve());
	}, i), v && await yr(e, a, i), {
		sleepMarkers: Ua(f, t, h.includes(t)),
		removed: g.take.filter((e) => "rest" === e.kind).length,
		history: {
			undo: (e, t = a, n) => vr(e, Qa(g), t, n),
			redo: (e, t = a, n) => vr(e, g, t, n)
		}
	};
}
const Sr = {
	nightRecord: {
		sleepPeriodsToSave: async ({ fileId: e, date: t, isInvalidNight: n }, a, i) => mi(a, await Va((await Pt(e, i))?.actiwareIntervals, V()), t, n),
		writeEdit: function(e, t, n = Y(), a) {
			return br(e, n, a, (n, a) => Za(n, e.date, t, a));
		}
	},
	sourceAnalysis: {
		id: hr,
		covers: dr,
		followSavedNights: async function({ fileId: e, file: t, nights: n, sleepMarkersChanged: a, analysisParadigm: i, db: s, signal: r, openBatch: o }) {
			const l = a ? void 0 : await s.actiwareFileData.get(e);
			if (a || l?.actiwareStatisticsNeedsRecompute || l?.actiwareSleepWake && !l.actiwareStatistics?.length) {
				const a = o();
				if (a) {
					let e = a.savedNights.get(hr);
					e || a.savedNights.set(hr, e = /* @__PURE__ */ new Map());
					for (const [t, a] of n) e.set(t, a);
				} else await wr(e, n, s, {
					analysisParadigm: i,
					signal: r,
					read: { file: t }
				}).catch((e) => {
					if (!r?.aborted) throw e;
				});
			}
		},
		followDeferredNights: async function({ fileId: e, nights: t, analysisParadigm: n, db: a, signal: i }) {
			try {
				await wr(e, t, a, {
					analysisParadigm: n,
					signal: i
				});
			} catch (s) {
				rn("error", "Actiware statistics recalculation failed", {
					...At(s),
					file_id: e
				});
			}
		},
		proposeNight: async function({ fileId: e, date: t, file: n, options: a, sleepPeriodDetectionConfig: i, db: s, batch: r }) {
			if (a.algorithm !== z.ACTIWARE_SLEEP_WAKE) return null;
			const o = dr(n) ? await mr(e, s, r) : null, l = o?.data, c = o ? Xa(o.nights, t) : null, u = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(11, 19), d = l?.actiwareRestProposal?.notes?.[t], p = null !== o && hi(o.nights, t).some((e) => "scorer" === e.origin), f = d && !p ? [`Rest proposal (SCREENS Autoscore): ${d}`] : [], { source_a: m, source_b: h, fusion_policy: g, apply_nonwear_gate: y } = Mt(Ye({
				algorithm: a.algorithm,
				periodGuider: a.periodGuider,
				sleepPeriodDetection: a.sleepPeriodDetection
			})), w = {
				...i,
				source_a: m,
				source_b: h,
				fusion_policy: g,
				apply_nonwear_gate: y
			};
			if (!c?.sleep) {
				const e = l?.actiwareIntervalsRefusal, t = (l?.actiwareIntervals ?? []).filter((e) => "rest" === e.kind && "scorer" !== e.origin), n = null !== c && t.some((e) => e.startTimestamp === c.rest.startTimestamp && e.endTimestamp === c.rest.endTimestamp);
				return {
					kind: "placed",
					sleep_markers: [],
					nap_markers: [],
					decisions: [],
					sleep_period_detection_config: w,
					notes: [c ? e && n ? `The Actiware sleep interval inside this night's rest interval (${u(c.rest.startTimestamp)}–${u(c.rest.endTimestamp)}) could not be set: ${e}.` : `Actiware sets no sleep interval inside this night's rest interval (${u(c.rest.startTimestamp)}–${u(c.rest.endTimestamp)}).` : e && 0 === t.length ? `Actiware rest intervals could not be set for this recording: ${e}.` : "Actiware sets no rest interval for this night.", ...f]
				};
			}
			return {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: c.sleep.startTimestamp,
					offset_timestamp: c.sleep.endTimestamp,
					marker_type: ae.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: (c.additionalSleeps ?? []).map((e, t) => ({
					onset_timestamp: e.startTimestamp,
					offset_timestamp: e.endTimestamp,
					marker_type: ae.NAP,
					marker_index: t + 2
				})),
				decisions: [],
				sleep_period_detection_config: w,
				notes: [`Actiware sleep interval ${u(c.sleep.startTimestamp)}–${u(c.sleep.endTimestamp)} inside rest interval ${u(c.rest.startTimestamp)}–${u(c.rest.endTimestamp)}, as Actiware sets it.`, ...f]
			};
		},
		afterDiaryChange: {
			label: "Propose rest intervals from the new diary",
			run: async function(e, t, n) {
				try {
					await async function(e, t, n) {
						const a = await t.studySettings.where("key").equals("study").first(), i = a?.extraSettings ?? {}, s = Xt(i.actiware_rest_proposal);
						if (s.rest_autoscore !== me.screens) return !1;
						const r = await t.files.get(e);
						if (null == r?.id || !$t(r)) return !1;
						const { reanalyzeActiwareFile: o } = await import("./reanalysis-fjPg_G16.js");
						return (await o({
							...r,
							id: r.id
						}, {
							paradigm: sn(i.analysis_paradigm),
							overrides: Gt(i.actiware_analysis),
							proposal: s,
							hasib: ur(cr(i))?.hasibVariants,
							db: t,
							expectedStudyContentHash: a?.contentHash ?? null,
							services: n
						})).changed;
					}(e, t, n);
				} catch (a) {
					throw rn("error", "Rest proposal after the diary write failed", {
						...At(a),
						file_id: e
					}), new Error("The rest intervals were not proposed again from the new diary; they still follow the previous diary. Save the study settings to propose them again.", { cause: a });
				}
			}
		},
		guiderWindow: async function({ fileId: e, date: t, db: n, batch: a }) {
			return ai((await mr(e, n, a)).nights, t);
		},
		reanalyze: async (e, t, { db: n, expectedStudyContentHash: a, signal: i, services: s }) => {
			if (!$t(e)) return { changed: !1 };
			const { reanalyzeActiwareFile: r, ACTIWARE_NOT_RECONCILED: o } = await R.waitFor(import("./reanalysis-fjPg_G16.js")), l = await r(e, {
				paradigm: sn(t.analysis_paradigm),
				overrides: Gt(t.actiware_analysis),
				proposal: Xt(t.actiware_rest_proposal),
				hasib: ur(cr(t))?.hasibVariants,
				db: n,
				...void 0 !== a ? { expectedStudyContentHash: a } : {},
				...i ? { signal: i } : {},
				services: s
			});
			return l.unavailable ? {
				...l,
				notReconciled: o
			} : l;
		}
	}
}, kr = {
	id: "ggir_saved_folder",
	covers: () => !0,
	followSavedNights: ({ fileId: e, username: t, db: n, signal: a }) => (di(e, t, n, a), Promise.resolve())
}, Ir = { sleepPeriodsToSave: (e, t) => Promise.resolve(t) }, Ar = {
	[lt.sleep_periods]: Ir,
	[lt.rest_intervals]: Sr.nightRecord
}, xr = [Sr.sourceAnalysis, kr];
function Nr(e, t, n) {
	return null != e[n] && e.covers(t);
}
function Tr(e, t, n) {
	return e.find((e) => Nr(e, t, n));
}
function Mr(e, t) {
	if (0 === e.length) return [];
	const n = [0];
	for (let a = 1; a < e.length; a++) Math.abs(e[a] - e[a - 1] - t) > .001 && n.push(a);
	return n.map((t, a) => ({
		start: t,
		end: n[a + 1] ?? e.length
	}));
}
async function Rr(e, t, n, a = ua, i = () => {
	G(e);
}) {
	const s = /* @__PURE__ */ new Map(), r = Math.min(t.x.length, t.y.length, t.z.length);
	if (0 === r || t.sampleRate <= 0) return s;
	const o = a.filter((e) => !ka(e)?.needsModel);
	if (0 === o.length) return s;
	const l = new Float64Array(3 * r);
	for (let u = 0; u < r; u++) l[3 * u] = t.x[u], l[3 * u + 1] = t.y[u], l[3 * u + 2] = t.z[u];
	C(n, `before detectNonwearUnifiedBatch(${o.join(",")})`);
	const c = await W(e, (e) => e.detectNonwearUnifiedBatch(o, {
		raw: l,
		sampleRate: t.sampleRate,
		epochSeconds: t.epochSeconds
	}), {
		ms: I,
		label: `detectNonwearUnifiedBatch(${o.join(",")})`,
		signal: n,
		cancel: i
	}).catch((e) => (ee(e, n, `detectNonwearUnifiedBatch(${o.join(",")})`), console.warn("[local-processing] A raw-signal nonwear batch failed."), null));
	if (c) for (const [u, d] of Object.entries(c)) s.set(u, d);
	return s;
}
async function zr(e, t, n, a, i, s = wa, r = () => {
	G(e);
}) {
	const o = {}, l = s.filter((e) => !ka(e)?.needsModel);
	if (0 === l.length) return o;
	const c = n.map((e) => t[e]).filter((e) => void 0 !== e), u = ds(c.map((e) => e.timestamps)), d = ds(c.map((e) => e.axisY)), p = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
	for (const { start: h, end: g } of Mr(u, a)) {
		const t = d.slice(h, g);
		if (0 === t.length) continue;
		C(i, "before count nonwear continuous run");
		const n = await W(e, (e) => e.detectNonwearUnifiedBatch(l, {
			counts: t,
			epochSeconds: a
		}), {
			ms: I,
			label: "count nonwear continuous run",
			signal: i,
			cancel: r
		}).catch((e) => (ee(e, i, "count nonwear continuous run"), console.warn("[local-processing] A count-based nonwear batch failed for one contiguous run."), null));
		for (const [i, s] of Object.entries(n ?? {})) {
			if (!s.available || !s.nonwear?.length) {
				p.has(i) || p.set(i, s);
				continue;
			}
			const t = await Aa(s, {
				baseTsSec: u[h],
				epochTimestampsSec: u.slice(h, g),
				epochLenSec: a
			}, e), n = p.get(i)?.nonwear ?? new Uint8Array(u.length);
			n.set(t, h), p.set(i, {
				...s,
				nonwear: n,
				elementSeconds: a
			}), f.set(i, (f.get(i) ?? 0) + t.length);
		}
	}
	let m = 0;
	for (const h of n) {
		const e = t[h]?.timestamps.length ?? 0;
		0 !== e && (o[h] = new Map([...p].map(([t, n]) => {
			const a = f.get(t) === u.length;
			return [t, {
				...n,
				available: a,
				nonwear: a ? n.nonwear.slice(m, m + e) : null
			}];
		})), m += e);
	}
	return o;
}
function Er(e) {
	return null == e ? {} : { [z.OAKLEY_1997]: { oakleyThreshold: e } };
}
async function Dr(e, t, n, a, i, s, r, o = () => {
	G(e);
}, l = {}, c = Ai) {
	if (0 === c.length) return;
	const u = a.flatMap((e) => n[e] ?? []), d = ds(u.map((e) => e.timestamps)), p = ds(u.map((e) => e.axisY)), f = {}, m = /* @__PURE__ */ new Map();
	for (const { start: y, end: w } of Mr(d, i)) {
		const t = p.slice(y, w);
		if (!t || 0 === t.length) continue;
		const n = /* @__PURE__ */ new Map();
		for (const u of c) {
			const a = Ni(u, i);
			if ("gate_needs_30s_epoch" === a.kind) {
				n.set(u, a.response);
				continue;
			}
			C(s, `before scoreEpochs(${u} continuous)`);
			const c = await W(e, (e) => e.scoreEpochs(ki({
				algorithm: u,
				counts: t,
				epochSeconds: i,
				...r ? { postprocessing: r } : {},
				...l[u] ? { config: l[u] } : {}
			})), {
				ms: I,
				label: `scoreEpochs(${u} continuous)`,
				signal: s,
				cancel: o
			}).catch((e) => (ee(e, s, `scoreEpochs(${u} continuous)`), console.warn("[local-processing] A descriptor-driven sleep/wake scorer failed for one contiguous run."), null));
			c && n.set(u, c);
		}
		const a = Ii(n, t.length);
		for (const [e, i] of Object.entries(a)) {
			const t = f[e] ?? new Uint8Array(d.length);
			t.set(i, y), f[e] = t, m.set(e, (m.get(e) ?? 0) + i.length);
		}
	}
	const h = Object.entries(f).filter(([e]) => m.get(e) === d.length);
	let g = 0;
	for (const y of a) {
		const e = n[y], a = t[y];
		if (!e) continue;
		const i = g + e.timestamps.length;
		a && (a.unifiedSleepWake = Object.fromEntries(h.map(([e, t]) => [e, t.slice(g, i)]))), g = i;
	}
}
function $r(e, t) {
	return {
		vector_magnitude: e.vectorMagnitude,
		axis_y: e.axisY,
		axis_x: e.axisX,
		axis_z: e.axisZ
	}[t];
}
async function Cr(e, t, n, a, i, s, r) {
	if (!e || !t || 0 === e.timestamps.byteLength) return;
	if ("counts_axis_y" !== ka(t)?.requiredSignal) return;
	if (ra(e, t, n)) return;
	const o = new Float64Array(e.timestamps), l = i ?? V(s), c = await Je(o, { day: e }, l), u = Pe(Le(t) ?? [], c), d = u !== c, p = async (e, t) => {
		const n = {
			timestamps: new Float64Array(e.timestamps),
			axisY: new Float64Array(t),
			vectorMagnitude: new Float64Array(t)
		};
		return d ? ss(l, n, c) : n;
	}, f = (e, t) => d ? os(l, e, t, o) : t;
	let m;
	try {
		const i = [...(await on(e.fileId, a, r)).values()];
		if (Sa.includes(t)) {
			const t = i.filter((e) => e.timestamps.byteLength > 0 && $r(e, n)).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), a = t.findIndex((t) => t.date === e.date);
			if (a < 0) return;
			const r = [];
			for (const e of t) r.push(await p(e, $r(e, n)));
			let o = a, c = a;
			const h = (e, t) => e.length > 0 && t.length > 0 && Math.abs(t[0] - e[e.length - 1] - u) < .001;
			for (; o > 0 && h(r[o - 1].timestamps, r[o].timestamps);) o--;
			for (; c + 1 < r.length && h(r[c].timestamps, r[c + 1].timestamps);) c++;
			const g = r.slice(o, c + 1), y = g.slice(0, a - o).reduce((e, t) => e + t.timestamps.length, 0), w = r[a], _ = new Float64Array(g.reduce((e, t) => e + t.axisY.length, 0));
			let v = 0;
			for (const e of g) _.set(e.axisY, v), v += e.axisY.length;
			s?.throwIfAborted();
			const b = _.length > 0 ? await l.detectNonwear(_, u) : /* @__PURE__ */ new Uint8Array(0);
			s?.throwIfAborted();
			const S = _.length > 0 ? await l.detectNonwearChoi2011(_, u) : /* @__PURE__ */ new Uint8Array(0), k = (e) => f(w.timestamps, e.slice(y, y + w.timestamps.length));
			if (!d && 0 === _.byteLength) return;
			m = {
				nonwearResults: (await k(b)).buffer,
				nonwearResultsChoi2011: (await k(S)).buffer,
				nonwearChoiAxis: n
			};
		} else {
			s?.throwIfAborted();
			const n = i.filter((e) => e.timestamps.byteLength > 0 && e.axisY.byteLength > 0).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), a = {};
			for (const e of n) a[e.date] = await p(e, e.axisY);
			const r = (await zr(l, a, n.map((e) => e.date), u, s, [t]))[e.date]?.get(t);
			if (!r?.available || !r.nonwear) return;
			const d = await ba(/* @__PURE__ */ new Map([[t, {
				...r,
				nonwear: await f(a[e.date].timestamps, r.nonwear),
				elementSeconds: c
			}]]), {
				baseTsSec: o[0] ?? 0,
				epochTimestampsSec: Array.from(o),
				epochLenSec: c
			}, l);
			if (!d.unifiedNonwearMasks?.[t]) return;
			m = {
				...d,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					...d.unifiedNonwearMasks
				}
			};
		}
	} catch {
		s?.throwIfAborted(), console.warn("[local-processing] A missing nonwear mask could not be computed from stored counts.");
		return;
	}
	s?.throwIfAborted(), await Fe(e.fileId, e.date, m, a, s), s?.throwIfAborted(), Object.assign(e, m);
}
async function Fr(e, t, n, a, i, s = () => {
	G(e);
}) {
	const r = ds(n.map((e) => t[e].timestamps)), o = ds(n.map((e) => t[e].axisY)), l = ds(n.map((e) => t[e].choiAxis ?? t[e].vectorMagnitude)), c = Mr(r, a), u = await W(e, (e) => e.scoreAllDays(c.map(({ start: e, end: t }) => ({
		activityF64: o.slice(e, t),
		vmF64: l.slice(e, t),
		epochSeconds: a
	}))), {
		ms: I,
		label: "scoreAllDays continuous counts",
		signal: i,
		cancel: s
	}), d = {
		sadeh_actilife: new Uint8Array(o.length),
		sadeh_original: new Uint8Array(o.length),
		ck_actilife: new Uint8Array(o.length),
		ck_original: new Uint8Array(o.length),
		nonwear: new Uint8Array(o.length),
		nonwearChoi2011: new Uint8Array(o.length)
	}, p = /* @__PURE__ */ new Set();
	for (const [m, h] of c.entries()) {
		const t = u[m];
		if (!t) throw new Error("Continuous count scoring did not return every run.");
		for (const e of [
			"sadeh_actilife",
			"sadeh_original",
			"ck_actilife",
			"ck_original",
			"nonwear"
		]) if (0 === t[e].length) p.add(e);
		else {
			if (t[e].length !== h.end - h.start) throw new Error("Continuous count scoring returned a misaligned mask.");
			d[e].set(t[e], h.start);
		}
		const n = await W(e, (e) => e.detectNonwearChoi2011(l.slice(h.start, h.end), a), {
			ms: I,
			label: "detectNonwearChoi2011 continuous counts",
			signal: i,
			cancel: s
		});
		d.nonwearChoi2011.set(n, h.start);
	}
	let f = 0;
	return n.map((e) => {
		const n = f + t[e].timestamps.length, a = {
			sadeh_actilife: p.has("sadeh_actilife") ? /* @__PURE__ */ new Uint8Array() : d.sadeh_actilife.slice(f, n),
			sadeh_original: p.has("sadeh_original") ? /* @__PURE__ */ new Uint8Array() : d.sadeh_original.slice(f, n),
			ck_actilife: p.has("ck_actilife") ? /* @__PURE__ */ new Uint8Array() : d.ck_actilife.slice(f, n),
			ck_original: p.has("ck_original") ? /* @__PURE__ */ new Uint8Array() : d.ck_original.slice(f, n),
			nonwear: d.nonwear.slice(f, n),
			nonwearChoi2011: d.nonwearChoi2011.slice(f, n)
		};
		return f = n, a;
	});
}
function Pr(e, t) {
	const n = e.headerBodySite ?? e.bodySite, a = e.headerLaterality ?? e.laterality;
	return {
		...e,
		...t,
		...e.laterality ? { laterality: e.laterality } : {},
		placementSourceReference: "study_default",
		...n ? { headerBodySite: n } : {},
		...a ? { headerLaterality: a } : {}
	};
}
async function Or(e, t) {
	return await ze((t) => t.recordingFacts(e), new je(t)) ?? {};
}
async function jr(e) {
	return He((await _e(e))?.extraSettings);
}
async function Br(e, t, n, a) {
	n?.throwIfAborted();
	const i = await E(e, 65536, a);
	n?.throwIfAborted();
	const s = new TextDecoder("utf-8", { fatal: !1 }).decode(i);
	for (const r of [/measurement frequency\s*[,:\t]\s*(\d+)/i, /sample rate(?:\s*hz)?\s*[,:\t]\s*(\d+)/i]) {
		const e = r.exec(s);
		if (e && e[1]) {
			const t = Number.parseInt(e[1], 10);
			if (Number.isFinite(t) && t > 0) return t;
		}
	}
	return ne[t];
}
async function Gr(e, t, n, a) {
	t?.throwIfAborted();
	const i = Si(e) ? S(xi("aw5")) : _(e.name);
	if ("none" === i) return {};
	const s = Math.max(65536, 2048);
	let r;
	try {
		r = await E(e, s, a);
	} catch {
		return {};
	}
	if (t?.throwIfAborted(), "gt3x_info_entry" === i) {
		const e = function(e) {
			const t = new DataView(e.buffer, e.byteOffset, e.byteLength);
			let n = 0;
			for (; n + 30 <= e.byteLength;) {
				if (67324752 !== t.getUint32(n, !0)) return null;
				const a = t.getUint16(n + 8, !0), i = t.getUint32(n + 18, !0), s = t.getUint16(n + 26, !0), r = n + 30 + s + t.getUint16(n + 28, !0);
				if (r > e.byteLength) return null;
				const o = r + i;
				if (new TextDecoder().decode(e.subarray(n + 30, n + 30 + s)).toLowerCase().endsWith("info.txt")) return 0 !== a || o > e.byteLength ? null : new TextDecoder("utf-8", { fatal: !1 }).decode(e.subarray(r, o));
				if (0 === i) return null;
				n = o;
			}
			return null;
		}(r);
		return null === e ? {} : await Or(e, n);
	}
	return await Or(new TextDecoder("utf-8", { fatal: !1 }).decode(r), n);
}
function Lr(e) {
	return `stored_nonwear_mask:${e}`;
}
Object.freeze([]);
const Ur = {
	temperature_epoch_stream: (e) => null != e.temperature && ha(new Float64Array(e.temperature)),
	sleep_wake_epoch_stream: (e) => null != e.algorithmResults?.[z.ACTIWARE_SLEEP_WAKE],
	device_wear_state_evidence_stream: (e) => !0 === e.actiwareOffWristChannel
};
function Hr(e) {
	const t = [];
	for (const [n, a] of Object.entries(Ur)) for (const i of e) if (a(i)) {
		t.push(n);
		break;
	}
	for (const n of ua) e.some((e) => null != ra(e, n, "")) && t.push(Lr(n));
	return t;
}
async function Zr(e, t, n) {
	const a = [];
	for (const r of t) {
		const t = ci(e, r);
		t && a.push(t.wire);
	}
	if (0 === a.length) return [];
	const { request: i, transfer: s } = oi(a);
	return (await n.computeCircadian(k(i, s))).day_summaries.filter((e) => e.has_signal).map((e) => e.analysis_date);
}
function qr(e) {
	return e instanceof Error ? e : /* @__PURE__ */ new Error("Local ingest lease renewal failed.");
}
const Vr = Math.max(1e3, Math.floor(_n / 4));
async function Wr(e) {
	void 0 !== e.heartbeatId && (clearInterval(e.heartbeatId), delete e.heartbeatId), await e.heartbeatPending, delete e.heartbeatPending;
}
async function Jr(e, t, n) {
	const a = X().scoring(), i = {
		...e.recording,
		...t.recording
	}, s = e.placement ?? {
		bodySite: a.sensorLocation,
		laterality: a.participantLaterality
	}, r = await It({
		...t,
		...t.ggirPart2Config ? { ggirNonwearDetector: await at(t.ggirPart2Config.csvText, n ?? V(e.signal)) } : {},
		...e.ingestProvenance ? { ingestProvenance: e.ingestProvenance } : {},
		recording: Pr(i, s)
	}, e.attemptId, e.db);
	return "started" === r.kind && (e.guard = r.guard, function(e) {
		void 0 === e.heartbeatId && (e.heartbeatId = setInterval(() => function(e) {
			const t = e.guard;
			t && void 0 === e.heartbeatError && (e.heartbeatPending = (e.heartbeatPending ?? Promise.resolve()).then(() => Me(t, e.db)).catch((t) => {
				e.heartbeatError = t;
			}));
		}(e), Vr));
	}(e)), r;
}
async function Kr(e) {
	if (await e.heartbeatPending, void 0 !== e.heartbeatError) throw qr(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new pn();
	return await Me(t, e.db), t;
}
async function Yr(e) {
	if (await Wr(e), void 0 !== e.heartbeatError) throw qr(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new pn();
	await async function(e, t = Y()) {
		try {
			return await async function(e, t = Y(), n) {
				const a = t;
				for (;;) {
					n?.throwIfAborted();
					const [t, i] = await Promise.all([a.files.get(e), a.sensorNonwear.where("fileId").equals(e).count()]), s = (e, t) => JSON.stringify([
						e?.id,
						e?.seriesRevision ?? 0,
						e?.exportInputRevision ?? 0,
						e?.sourceContentHash,
						e?.sourceType,
						e?.sourceProfileId,
						t
					]), r = s(t, i), o = Hr([...(await on(e, a)).values()]), l = t ? Wa(t.sourceType, t.sourceProfileId) : null;
					if (l && d[l].capabilityFromSensorRows && !o.includes("device_wear_state_evidence_stream") && i > 0 && o.push("device_wear_state_evidence_stream"), void 0 === t?.id) return o;
					if (await F(a, [
						a.files,
						a.sensorNonwear,
						a.projectMeta
					], async () => {
						const t = await a.files.get(e);
						return s(t, await a.sensorNonwear.where("fileId").equals(e).count()) === r && (t && (i = t.resolvedCapabilities, l = o, void 0 === i || i.length !== l.length || !l.every((e) => i.includes(e)) || 4 !== t.resolvedCapabilitiesRevision) && await $(a, [a.files], () => a.files.update(e, {
							resolvedCapabilities: o,
							resolvedCapabilitiesRevision: 4
						}), n), !0);
						var i, l;
					}, n)) return o;
				}
			}(e, t);
		} catch {
			return console.warn("Capability refresh failed. Stored data was kept; conditional capabilities remain unavailable until the next read."), [];
		}
	}(t.fileId, e.db), e.finalizedFileId = await zt(t, e.db, e.signal), delete e.guard;
}
async function Xr(e, t) {
	try {
		await Wr(e);
		const t = e.guard, n = !!t && await rt(t, e.db);
		t && delete e.guard, n ? (console.warn("[local-processing] Rolled back an incomplete local ingest."), e.rollbackOutcome = "rolled_back") : e.rollbackOutcome ??= "nothing_to_roll_back";
	} catch {
		console.error("[local-processing] Incomplete local ingest rollback also failed."), e.rollbackOutcome = "failed";
	}
}
function Qr(e, t) {
	return "object" == typeof e && null !== e && void 0 !== t.rollbackOutcome && (e.__localIngestRollbackOutcome = t.rollbackOutcome), e;
}
async function eo(e, t, n, a, i) {
	try {
		const s = await Zr(e, t, a);
		await Ve(e, t.map((e) => e.date), s, n, i);
	} catch {
		i?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}
}
function to(e, t, n, a) {
	return a <= 0 ? 0 : .9 * (e - 1 + (t - e + 1) * n / 3) / a;
}
function no({ scope: e, fileId: t, sourceContentHash: n, label: a, signalDates: i, onChunk: s }) {
	const r = [];
	let o = 0;
	const l = {
		saved: 0,
		activityFailed: !1,
		historyFailed: !1
	}, c = async () => {
		const c = r.splice(0);
		if (0 === c.length) return;
		const u = o - c.length + 1, d = o;
		s?.(u, d, 0), await Kr(e), s?.(u, d, 1);
		try {
			const t = c.map((e) => e.facts);
			await Ae(c.map((e) => e.day), e.db, t.every((e) => void 0 !== e) ? t : void 0, e.signal);
		} catch (m) {
			throw console.warn("[local-processing] Activity-day persistence failed."), Wi(m, `saveActivityDay (${a})`), l.activityFailed = !0, m;
		}
		l.saved += c.length;
		const p = c.map((e) => e.day.date);
		try {
			await Ve(t, p, p.filter((e) => i.has(e)), e.db, e.signal);
		} catch {
			console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
		}
		s?.(u, d, 2);
		const f = c.flatMap((e) => e.history.map((t) => ({
			...t,
			date: e.day.date
		})));
		await async function(e, t, n, a, i = Y(), s) {
			const r = i, o = _t(), l = a.map((a) => {
				const i = {
					fileId: e,
					date: a.date ?? t,
					appVersion: o,
					results: a.results,
					...void 0 !== n ? { sourceContentHash: n } : {}
				};
				if (null === dt(a)) throw new Error(`Refused an algorithm run for ${String(a.algoKey ?? a.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
				return void 0 !== a.cubeConfig ? {
					...i,
					cubeConfig: a.cubeConfig
				} : {
					...i,
					algoKey: a.algoKey
				};
			});
			try {
				return await ct(l, r, s), !0;
			} catch {
				s?.throwIfAborted(), console.error("[local-processing] Algorithm history batch write failed; retrying records individually.");
			}
			let c = !1;
			for (const u of l) try {
				await fe(u, r, s);
			} catch {
				s?.throwIfAborted(), c = !0, console.error("[local-processing] An algorithm history write failed; latest scoring remains available.");
				try {
					await io({
						op: "algorithm_run_put",
						fileId: e,
						payload: {
							kind: "history_write_failed",
							...dt(u),
							date: u.date,
							error: "history_write_failed"
						}
					}, r, s);
				} catch {}
			}
			return !c;
		}(t, c[0].day.date, n, f, e.db, e.signal) || (l.historyFailed = !0), s?.(u, d, 3), await te();
	};
	return {
		state: l,
		flush: c,
		add: async (e, t, n) => {
			r.push({
				day: e,
				history: t,
				facts: n
			}), o += 1, r.length >= 8 && await c();
		}
	};
}
async function ao(e, t = Y(), n) {
	const a = t;
	try {
		const t = await e.identity(), s = await gt(e.fileId, a);
		await Ui({
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
			profileProofStatus: (i = t.profileProofStatus, $i(i, se, "profileProofStatus")),
			temporalBasis: Ci(t.temporalBasis),
			calibration: e.calibration,
			diaryDisposition: s.length > 0 ? "present" : "absent",
			timestampGrid: e.timestampGrid ?? "epoch_5s_floor_seconds",
			dailyRows: e.rows,
			appVersion: _t(),
			startedAt: e.startedAt,
			finishedAt: e.finishedAt ?? (/* @__PURE__ */ new Date()).toISOString()
		}, a, n);
	} catch {
		n?.throwIfAborted(), console.error("[local-processing] Execution attestation write failed; day summaries remain stored.");
	}
	var i;
}
async function io(e, t = Y(), n) {
	const a = t, { appendWal: i, withWalTx: s } = await import("./wal-FsmBbqFa.js").then((e) => e.r);
	await s([], async () => {
		await i(e);
	}, a, n);
}
function so(e, t) {
	return qn(void 0 === t ? void 0 : { recording: t }, e?.sensorLocation ?? p.sensor_location);
}
function ro(e) {
	return function(e) {
		return ns.includes(e);
	}(e) ? e : 60;
}
function oo(e) {
	const t = ar(e?.lstmSelection);
	return {
		selection: t,
		descriptor: tr(t.modelId),
		scoreOptions: {
			modelId: t.modelId,
			...null != t.threshold ? { threshold: t.threshold } : {}
		}
	};
}
function lo(e) {
	const t = oo(e);
	return { extras: {
		lstmFeatureContract: "spectral_30s_mean_centered_v3_probabilities",
		lstmModelId: t.descriptor.id,
		lstmModelVersion: t.descriptor.version,
		lstmThreshold: String(t.selection.threshold ?? t.descriptor.defaultThreshold),
		ggirCountScorerContract: "zcy_ws3_count_epoch_v4"
	} };
}
function co(e, t) {
	return "number" == typeof e && "number" == typeof t && e !== t;
}
let uo = 0;
const po = /* @__PURE__ */ new Set();
function fo(e, t, n) {
	if (n) {
		const e = Fn(n);
		if (!St(e)) return xn(e);
	}
	return t ?? c.SMART;
}
function mo(e, t) {
	e.invalidateQueries({ queryKey: t }).catch((e) => {
		rn("warn", "Query invalidation failed", {
			...At(e),
			query_key: t.map(String).join(":")
		});
	});
}
const ho = {
	[o.RULE_1_INCLUDE_ACTIVITY]: "Included mid-sleep wake activity (continuous sleep follows)",
	[o.RULE_2_SMALL_PERIODS]: "Evaluated a small sleep period near onset",
	[o.RULE_3_EXTEND_BEFORE_DIARY]: "Extended onset backward through sleep preceding the diary marker",
	[o.RULE_4_NAP_VARIATION]: "Marked a long continuous block as a nap",
	[o.RULE_5_CHOI_SPIKE]: "Tolerated Choi-only nonwear (activity spike present in period)",
	[o.RULE_6_EQUIDISTANT]: "Chose between multiple candidate boundaries",
	[o.RULE_7_CROSS_DAY_NONWEAR]: "Applied cross-day diary nonwear pattern",
	[o.RULE_8_ONSET_BEFORE_INBED]: "Clamped onset to diary in-bed time (onset reported before in-bed)",
	[o.RULE_9_NAP_REGULARITY]: "Placed nap from this child's cross-day nap regularity (no diary nap logged)",
	[o.RULE_10_REGULARITY_OVERRIDE]: "Re-centered the sleep window on this child's cross-day sleep regularity",
	[o.RULE_11_RELIABILITY_FALLBACK]: "Diary unreliable for this night — anchored to accelerometry instead"
};
function go(e) {
	const t = e.replace(/^rule_\d+_/, "").replace(/_/g, " ").trim();
	return 0 === t.length ? e : t.charAt(0).toUpperCase() + t.slice(1);
}
function yo(e) {
	return ye(e, t);
}
async function wo(e, n, a) {
	const i = a ? await a.wearSiteHasptRouting(e, n ?? void 0) : await Vt("wearSiteHasptRouting", `${e}:${n ?? ""}`, () => t().wearSiteHasptRouting(e, n ?? void 0));
	return {
		sensorLocation: i.sensorLocation,
		variant: i.variant,
		requiresLongitudinalAxis: i.requiresLongitudinalAxis,
		routedByWearSite: null == n
	};
}
var _o;
function vo(e, t, n) {
	function a(n, a) {
		if (n._zod || Object.defineProperty(n, "_zod", {
			value: {
				def: a,
				constr: r,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: !1
		}), n._zod.traits.has(e)) return;
		n._zod.traits.add(e), t(n, a);
		const i = r.prototype, s = Object.keys(i);
		for (let e = 0; e < s.length; e++) {
			const t = s[e];
			t in n || (n[t] = i[t].bind(n));
		}
	}
	const i = n?.Parent ?? Object;
	class s extends i {}
	function r(e) {
		var t;
		const i = n?.Parent ? new s() : this;
		a(i, e), (t = i._zod).deferred ?? (t.deferred = []);
		for (const n of i._zod.deferred) n();
		return i;
	}
	return Object.defineProperty(s, "name", { value: e }), Object.defineProperty(r, "init", { value: a }), Object.defineProperty(r, Symbol.hasInstance, { value: (t) => !!(n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e) }), Object.defineProperty(r, "name", { value: e }), r;
}
Object.fromEntries(Object.values(o).map((e) => [e, ho[e] ?? go(e)]));
var bo = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, So = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(_o = globalThis).__zod_globalConfig ?? (_o.__zod_globalConfig = {});
const ko = globalThis.__zod_globalConfig;
function Io(e) {
	return e && Object.assign(ko, e), ko;
}
function Ao(e) {
	const t = Object.values(e).filter((e) => "number" == typeof e);
	return Object.entries(e).filter(([e, n]) => -1 === t.indexOf(+e)).map(([e, t]) => t);
}
function xo(e, t) {
	return "bigint" == typeof t ? t.toString() : t;
}
function No(e) {
	return { get value() {
		{
			const t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function To(e) {
	return null == e;
}
function Mo(e) {
	const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
const Ro = Symbol("evaluating");
function zo(e, t, n) {
	let a;
	Object.defineProperty(e, t, {
		get() {
			if (a !== Ro) return void 0 === a && (a = Ro, a = n()), a;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function Eo(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function Do(...e) {
	const t = {};
	for (const n of e) {
		const e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function $o(e) {
	return JSON.stringify(e);
}
const Co = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Fo(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
const Po = No(() => {
	if (ko.jitless) return !1;
	if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return new Function(""), !0;
	} catch (e) {
		return !1;
	}
});
function Oo(e) {
	if (!1 === Fo(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	if ("function" != typeof t) return !0;
	const n = t.prototype;
	return !1 !== Fo(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function jo(e) {
	return Oo(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const Bo = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
function Go(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Lo(e, t, n) {
	const a = new e._zod.constr(t ?? e._zod.def);
	return t && !n?.parent || (a._zod.parent = e), a;
}
function Uo(e) {
	const t = e;
	if (!t) return {};
	if ("string" == typeof t) return { error: () => t };
	if (void 0 !== t?.message) {
		if (void 0 !== t?.error) throw new Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, "string" == typeof t.error ? {
		...t,
		error: () => t.error
	} : t;
}
const Ho = {
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Zo(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!0 !== e.issues[n]?.continue) return !0;
	return !1;
}
function qo(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!1 === e.issues[n]?.continue) return !0;
	return !1;
}
function Vo(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function Wo(e) {
	return "string" == typeof e ? e : e?.message;
}
function Jo(e, t, n) {
	const a = e.message ? e.message : Wo(e.inst?._zod.def?.error?.(e)) ?? Wo(t?.error?.(e)) ?? Wo(n.customError?.(e)) ?? Wo(n.localeError?.(e)) ?? "Invalid input", { inst: i, continue: s, input: r, ...o } = e;
	return o.path ?? (o.path = []), o.message = a, t?.reportInput && (o.input = r), o;
}
function Ko(e) {
	return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function Yo(...e) {
	const [t, n, a] = e;
	return "string" == typeof t ? {
		message: t,
		code: "custom",
		input: n,
		inst: a
	} : { ...t };
}
const Xo = (e, t) => {
	e.name = "$ZodError", Object.defineProperty(e, "_zod", {
		value: e._zod,
		enumerable: !1
	}), Object.defineProperty(e, "issues", {
		value: t,
		enumerable: !1
	}), e.message = JSON.stringify(t, xo, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, Qo = vo("$ZodError", Xo), el = vo("$ZodError", Xo, { Parent: Error }), tl = (e) => (t, n, a, i) => {
	const s = a ? {
		...a,
		async: !1
	} : { async: !1 }, r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise) throw new bo();
	if (r.issues.length) {
		const t = new ((i?.Err) ?? e)(r.issues.map((e) => Jo(e, s, Io())));
		throw Co(t, i?.callee), t;
	}
	return r.value;
}, nl = (e) => async (t, n, a, i) => {
	const s = a ? {
		...a,
		async: !0
	} : { async: !0 };
	let r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise && (r = await r), r.issues.length) {
		const t = new ((i?.Err) ?? e)(r.issues.map((e) => Jo(e, s, Io())));
		throw Co(t, i?.callee), t;
	}
	return r.value;
}, al = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		async: !1
	} : { async: !1 }, s = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (s instanceof Promise) throw new bo();
	return s.issues.length ? {
		success: !1,
		error: new (e ?? Qo)(s.issues.map((e) => Jo(e, i, Io())))
	} : {
		success: !0,
		data: s.value
	};
}, il = al(el), sl = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		async: !0
	} : { async: !0 };
	let s = t._zod.run({
		value: n,
		issues: []
	}, i);
	return s instanceof Promise && (s = await s), s.issues.length ? {
		success: !1,
		error: new e(s.issues.map((e) => Jo(e, i, Io())))
	} : {
		success: !0,
		data: s.value
	};
}, rl = sl(el), ol = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return tl(e)(t, n, i);
}, ll = (e) => (t, n, a) => tl(e)(t, n, a), cl = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return nl(e)(t, n, i);
}, ul = (e) => async (t, n, a) => nl(e)(t, n, a), dl = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return al(e)(t, n, i);
}, pl = (e) => (t, n, a) => al(e)(t, n, a), fl = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return sl(e)(t, n, i);
}, ml = (e) => async (t, n, a) => sl(e)(t, n, a), hl = /^[cC][0-9a-z]{6,}$/, gl = /^[0-9a-z]+$/, yl = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, wl = /^[0-9a-vA-V]{20}$/, _l = /^[A-Za-z0-9]{27}$/, vl = /^[a-zA-Z0-9_-]{21}$/, bl = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Sl = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, kl = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Il = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Al = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, xl = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Nl = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Tl = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ml = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Rl = /^[A-Za-z0-9_-]*$/, zl = /^https?$/, El = /^\+[1-9]\d{6,14}$/, Dl = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", $l = new RegExp(`^${Dl}$`);
function Cl(e) {
	const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return "number" == typeof e.precision ? -1 === e.precision ? `${t}` : 0 === e.precision ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
const Fl = /^-?\d+$/, Pl = /^-?\d+(?:\.\d+)?$/, Ol = /^(?:true|false)$/i, jl = /^[^A-Z]*$/, Bl = /^[^a-z]*$/, Gl = vo("$ZodCheck", (e, t) => {
	var n;
	e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Ll = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, Ul = vo("$ZodCheckLessThan", (e, t) => {
	Gl.init(e, t);
	const n = Ll[typeof t.value];
	e._zod.onattach.push((e) => {
		const n = e._zod.bag, a = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
		t.value < a && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
	}), e._zod.check = (a) => {
		(t.inclusive ? a.value <= t.value : a.value < t.value) || a.issues.push({
			origin: n,
			code: "too_big",
			maximum: "object" == typeof t.value ? t.value.getTime() : t.value,
			input: a.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Hl = vo("$ZodCheckGreaterThan", (e, t) => {
	Gl.init(e, t);
	const n = Ll[typeof t.value];
	e._zod.onattach.push((e) => {
		const n = e._zod.bag, a = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
		t.value > a && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
	}), e._zod.check = (a) => {
		(t.inclusive ? a.value >= t.value : a.value > t.value) || a.issues.push({
			origin: n,
			code: "too_small",
			minimum: "object" == typeof t.value ? t.value.getTime() : t.value,
			input: a.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Zl = vo("$ZodCheckMultipleOf", (e, t) => {
	Gl.init(e, t), e._zod.onattach.push((e) => {
		var n;
		(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
	}), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
		("bigint" == typeof n.value ? n.value % t.value !== BigInt(0) : 0 !== function(e, t) {
			const n = e / t, a = Math.round(n), i = Number.EPSILON * Math.max(Math.abs(n), 1);
			return Math.abs(n - a) < i ? 0 : n - a;
		}(n.value, t.value)) && n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), ql = vo("$ZodCheckNumberFormat", (e, t) => {
	Gl.init(e, t), t.format = t.format || "float64";
	const n = t.format?.includes("int"), a = n ? "int" : "number", [i, s] = Ho[t.format];
	e._zod.onattach.push((e) => {
		const a = e._zod.bag;
		a.format = t.format, a.minimum = i, a.maximum = s, n && (a.pattern = Fl);
	}), e._zod.check = (r) => {
		const o = r.value;
		if (n) {
			if (!Number.isInteger(o)) return void r.issues.push({
				expected: a,
				format: t.format,
				code: "invalid_type",
				continue: !1,
				input: o,
				inst: e
			});
			if (!Number.isSafeInteger(o)) return void (o > 0 ? r.issues.push({
				input: o,
				code: "too_big",
				maximum: Number.MAX_SAFE_INTEGER,
				note: "Integers must be within the safe integer range.",
				inst: e,
				origin: a,
				inclusive: !0,
				continue: !t.abort
			}) : r.issues.push({
				input: o,
				code: "too_small",
				minimum: Number.MIN_SAFE_INTEGER,
				note: "Integers must be within the safe integer range.",
				inst: e,
				origin: a,
				inclusive: !0,
				continue: !t.abort
			}));
		}
		o < i && r.issues.push({
			origin: "number",
			input: o,
			code: "too_small",
			minimum: i,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), o > s && r.issues.push({
			origin: "number",
			input: o,
			code: "too_big",
			maximum: s,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), Vl = vo("$ZodCheckMaxLength", (e, t) => {
	var n;
	Gl.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !To(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		const a = n.value;
		if (a.length <= t.maximum) return;
		const i = Ko(a);
		n.issues.push({
			origin: i,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: a,
			inst: e,
			continue: !t.abort
		});
	};
}), Wl = vo("$ZodCheckMinLength", (e, t) => {
	var n;
	Gl.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !To(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		const a = n.value;
		if (a.length >= t.minimum) return;
		const i = Ko(a);
		n.issues.push({
			origin: i,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: a,
			inst: e,
			continue: !t.abort
		});
	};
}), Jl = vo("$ZodCheckLengthEquals", (e, t) => {
	var n;
	Gl.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !To(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		const a = n.value, i = a.length;
		if (i === t.length) return;
		const s = Ko(a), r = i > t.length;
		n.issues.push({
			origin: s,
			...r ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Kl = vo("$ZodCheckStringFormat", (e, t) => {
	var n, a;
	Gl.init(e, t), e._zod.onattach.push((e) => {
		const n = e._zod.bag;
		n.format = t.format, t.pattern && (n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(t.pattern));
	}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, t.pattern.test(n.value) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (a = e._zod).check ?? (a.check = () => {});
}), Yl = vo("$ZodCheckRegex", (e, t) => {
	Kl.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, t.pattern.test(n.value) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), Xl = vo("$ZodCheckLowerCase", (e, t) => {
	t.pattern ?? (t.pattern = jl), Kl.init(e, t);
}), Ql = vo("$ZodCheckUpperCase", (e, t) => {
	t.pattern ?? (t.pattern = Bl), Kl.init(e, t);
}), ec = vo("$ZodCheckIncludes", (e, t) => {
	Gl.init(e, t);
	const n = Go(t.includes), a = new RegExp("number" == typeof t.position ? `^.{${t.position}}${n}` : n);
	t.pattern = a, e._zod.onattach.push((e) => {
		const t = e._zod.bag;
		t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(a);
	}), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), tc = vo("$ZodCheckStartsWith", (e, t) => {
	Gl.init(e, t);
	const n = new RegExp(`^${Go(t.prefix)}.*`);
	t.pattern ?? (t.pattern = n), e._zod.onattach.push((e) => {
		const t = e._zod.bag;
		t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), nc = vo("$ZodCheckEndsWith", (e, t) => {
	Gl.init(e, t);
	const n = new RegExp(`.*${Go(t.suffix)}$`);
	t.pattern ?? (t.pattern = n), e._zod.onattach.push((e) => {
		const t = e._zod.bag;
		t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), ac = vo("$ZodCheckOverwrite", (e, t) => {
	Gl.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
});
var ic = class {
	constructor(e = []) {
		this.content = [], this.indent = 0, this && (this.args = e);
	}
	indented(e) {
		this.indent += 1, e(this), this.indent -= 1;
	}
	write(e) {
		if ("function" == typeof e) return e(this, { execution: "sync" }), void e(this, { execution: "async" });
		const t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), a = t.map((e) => e.slice(n)).map((e) => " ".repeat(2 * this.indent) + e);
		for (const i of a) this.content.push(i);
	}
	compile() {
		const e = Function, t = this?.args;
		return new e(...t, [...(this?.content ?? [""]).map((e) => `  ${e}`)].join("\n"));
	}
};
const sc = {
	major: 4,
	minor: 4,
	patch: 3
}, rc = vo("$ZodType", (e, t) => {
	var n;
	e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = sc;
	const a = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && a.unshift(e);
	for (const i of a) for (const t of i._zod.onattach) t(e);
	if (0 === a.length) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		const t = (e, t, n) => {
			let a, i = Zo(e);
			for (const s of t) {
				if (s._zod.def.when) {
					if (qo(e)) continue;
					if (!s._zod.def.when(e)) continue;
				} else if (i) continue;
				const t = e.issues.length, r = s._zod.check(e);
				if (r instanceof Promise && !1 === n?.async) throw new bo();
				if (a || r instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
					await r, e.issues.length !== t && (i || (i = Zo(e, t)));
				});
				else {
					if (e.issues.length === t) continue;
					i || (i = Zo(e, t));
				}
			}
			return a ? a.then(() => e) : e;
		}, n = (n, i, s) => {
			if (Zo(n)) return n.aborted = !0, n;
			const r = t(i, a, s);
			if (r instanceof Promise) {
				if (!1 === s.async) throw new bo();
				return r.then((t) => e._zod.parse(t, s));
			}
			return e._zod.parse(r, s);
		};
		e._zod.run = (i, s) => {
			if (s.skipChecks) return e._zod.parse(i, s);
			if ("backward" === s.direction) {
				const t = e._zod.parse({
					value: i.value,
					issues: []
				}, {
					...s,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, i, s)) : n(t, i, s);
			}
			const r = e._zod.parse(i, s);
			if (r instanceof Promise) {
				if (!1 === s.async) throw new bo();
				return r.then((e) => t(e, a, s));
			}
			return t(r, a, s);
		};
	}
	zo(e, "~standard", () => ({
		validate: (t) => {
			try {
				const n = il(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch (n) {
				return rl(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), oc = vo("$ZodString", (e, t) => {
	var n;
	rc.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? (n = e._zod.bag, new RegExp(`^${n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*"}$`)), e._zod.parse = (n, a) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch (a) {}
		return "string" == typeof n.value || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), lc = vo("$ZodStringFormat", (e, t) => {
	Kl.init(e, t), oc.init(e, t);
}), cc = vo("$ZodGUID", (e, t) => {
	t.pattern ?? (t.pattern = Sl), lc.init(e, t);
}), uc = vo("$ZodUUID", (e, t) => {
	if (t.version) {
		const e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (void 0 === e) throw new Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ?? (t.pattern = kl(e));
	} else t.pattern ?? (t.pattern = kl());
	lc.init(e, t);
}), dc = vo("$ZodEmail", (e, t) => {
	t.pattern ?? (t.pattern = Il), lc.init(e, t);
}), pc = vo("$ZodURL", (e, t) => {
	lc.init(e, t), e._zod.check = (n) => {
		try {
			const a = n.value.trim();
			if (!t.normalize && t.protocol?.source === zl.source && !/^https?:\/\//i.test(a)) return void n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid URL format",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
			const i = new URL(a);
			t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(i.hostname) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.normalize ? n.value = i.href : n.value = a;
			return;
		} catch (a) {
			n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), fc = vo("$ZodEmoji", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), lc.init(e, t);
}), mc = vo("$ZodNanoID", (e, t) => {
	t.pattern ?? (t.pattern = vl), lc.init(e, t);
}), hc = vo("$ZodCUID", (e, t) => {
	t.pattern ?? (t.pattern = hl), lc.init(e, t);
}), gc = vo("$ZodCUID2", (e, t) => {
	t.pattern ?? (t.pattern = gl), lc.init(e, t);
}), yc = vo("$ZodULID", (e, t) => {
	t.pattern ?? (t.pattern = yl), lc.init(e, t);
}), wc = vo("$ZodXID", (e, t) => {
	t.pattern ?? (t.pattern = wl), lc.init(e, t);
}), _c = vo("$ZodKSUID", (e, t) => {
	t.pattern ?? (t.pattern = _l), lc.init(e, t);
}), vc = vo("$ZodISODateTime", (e, t) => {
	t.pattern ?? (t.pattern = function(e) {
		const t = Cl({ precision: e.precision }), n = ["Z"];
		e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const a = `${t}(?:${n.join("|")})`;
		return new RegExp(`^${Dl}T(?:${a})$`);
	}(t)), lc.init(e, t);
}), bc = vo("$ZodISODate", (e, t) => {
	t.pattern ?? (t.pattern = $l), lc.init(e, t);
}), Sc = vo("$ZodISOTime", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp(`^${Cl(t)}$`)), lc.init(e, t);
}), kc = vo("$ZodISODuration", (e, t) => {
	t.pattern ?? (t.pattern = bl), lc.init(e, t);
}), Ic = vo("$ZodIPv4", (e, t) => {
	t.pattern ?? (t.pattern = Al), lc.init(e, t), e._zod.bag.format = "ipv4";
}), Ac = vo("$ZodIPv6", (e, t) => {
	t.pattern ?? (t.pattern = xl), lc.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
		try {
			new URL(`http://[${n.value}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), xc = vo("$ZodCIDRv4", (e, t) => {
	t.pattern ?? (t.pattern = Nl), lc.init(e, t);
}), Nc = vo("$ZodCIDRv6", (e, t) => {
	t.pattern ?? (t.pattern = Tl), lc.init(e, t), e._zod.check = (n) => {
		const a = n.value.split("/");
		try {
			if (2 !== a.length) throw new Error();
			const [e, t] = a;
			if (!t) throw new Error();
			const n = Number(t);
			if (`${n}` !== t) throw new Error();
			if (n < 0 || n > 128) throw new Error();
			new URL(`http://[${e}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
});
function Tc(e) {
	if ("" === e) return !0;
	if (/\s/.test(e)) return !1;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
const Mc = vo("$ZodBase64", (e, t) => {
	t.pattern ?? (t.pattern = Ml), lc.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		Tc(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Rc = vo("$ZodBase64URL", (e, t) => {
	t.pattern ?? (t.pattern = Rl), lc.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		(function(e) {
			if (!Rl.test(e)) return !1;
			const t = e.replace(/[-_]/g, (e) => "-" === e ? "+" : "/");
			return Tc(t.padEnd(4 * Math.ceil(t.length / 4), "="));
		})(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), zc = vo("$ZodE164", (e, t) => {
	t.pattern ?? (t.pattern = El), lc.init(e, t);
}), Ec = vo("$ZodJWT", (e, t) => {
	lc.init(e, t), e._zod.check = (n) => {
		(function(e, t = null) {
			try {
				const n = e.split(".");
				if (3 !== n.length) return !1;
				const [a] = n;
				if (!a) return !1;
				const i = JSON.parse(atob(a));
				return !("typ" in i && "JWT" !== i?.typ || !i.alg || t && (!("alg" in i) || i.alg !== t));
			} catch {
				return !1;
			}
		})(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Dc = vo("$ZodNumber", (e, t) => {
	rc.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Pl, e._zod.parse = (n, a) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch (r) {}
		const i = n.value;
		if ("number" == typeof i && !Number.isNaN(i) && Number.isFinite(i)) return n;
		const s = "number" == typeof i ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : "Infinity" : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...s ? { received: s } : {}
		}), n;
	};
}), $c = vo("$ZodNumberFormat", (e, t) => {
	ql.init(e, t), Dc.init(e, t);
}), Cc = vo("$ZodBoolean", (e, t) => {
	rc.init(e, t), e._zod.pattern = Ol, e._zod.parse = (n, a) => {
		if (t.coerce) try {
			n.value = Boolean(n.value);
		} catch (s) {}
		const i = n.value;
		return "boolean" == typeof i || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
	};
}), Fc = vo("$ZodUnknown", (e, t) => {
	rc.init(e, t), e._zod.parse = (e) => e;
}), Pc = vo("$ZodNever", (e, t) => {
	rc.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function Oc(e, t, n) {
	e.issues.length && t.issues.push(...Vo(n, e.issues)), t.value[n] = e.value;
}
const jc = vo("$ZodArray", (e, t) => {
	rc.init(e, t), e._zod.parse = (n, a) => {
		const i = n.value;
		if (!Array.isArray(i)) return n.issues.push({
			expected: "array",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
		n.value = Array(i.length);
		const s = [];
		for (let e = 0; e < i.length; e++) {
			const r = i[e], o = t.element._zod.run({
				value: r,
				issues: []
			}, a);
			o instanceof Promise ? s.push(o.then((t) => Oc(t, n, e))) : Oc(o, n, e);
		}
		return s.length ? Promise.all(s).then(() => n) : n;
	};
});
function Bc(e, t, n, a, i, s) {
	const r = n in a;
	if (e.issues.length) {
		if (i && s && !r) return;
		t.issues.push(...Vo(n, e.issues));
	}
	r || i ? void 0 === e.value ? r && (t.value[n] = void 0) : t.value[n] = e.value : e.issues.length || t.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: void 0,
		path: [n]
	});
}
function Gc(e) {
	const t = Object.keys(e.shape);
	for (const i of t) if (!e.shape?.[i]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
	const n = (a = e.shape, Object.keys(a).filter((e) => "optional" === a[e]._zod.optin && "optional" === a[e]._zod.optout));
	var a;
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function Lc(e, t, n, a, i, s) {
	const r = [], o = i.keySet, l = i.catchall._zod, c = l.def.type, u = "optional" === l.optin, d = "optional" === l.optout;
	for (const p in t) {
		if ("__proto__" === p) continue;
		if (o.has(p)) continue;
		if ("never" === c) {
			r.push(p);
			continue;
		}
		const i = l.run({
			value: t[p],
			issues: []
		}, a);
		i instanceof Promise ? e.push(i.then((e) => Bc(e, n, p, t, u, d))) : Bc(i, n, p, t, u, d);
	}
	return r.length && n.issues.push({
		code: "unrecognized_keys",
		keys: r,
		input: t,
		inst: s
	}), e.length ? Promise.all(e).then(() => n) : n;
}
const Uc = vo("$ZodObject", (e, t) => {
	if (rc.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		const e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			const n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	const n = No(() => Gc(t));
	zo(e._zod, "propValues", () => {
		const e = t.shape, n = {};
		for (const t in e) {
			const a = e[t]._zod;
			if (a.values) {
				n[t] ?? (n[t] = /* @__PURE__ */ new Set());
				for (const e of a.values) n[t].add(e);
			}
		}
		return n;
	});
	const a = Fo, i = t.catchall;
	let s;
	e._zod.parse = (t, r) => {
		s ?? (s = n.value);
		const o = t.value;
		if (!a(o)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: o,
			inst: e
		}), t;
		t.value = {};
		const l = [], c = s.shape;
		for (const e of s.keys) {
			const n = c[e], a = "optional" === n._zod.optin, i = "optional" === n._zod.optout, s = n._zod.run({
				value: o[e],
				issues: []
			}, r);
			s instanceof Promise ? l.push(s.then((n) => Bc(n, t, e, o, a, i))) : Bc(s, t, e, o, a, i);
		}
		return i ? Lc(l, o, t, r, n.value, e) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), Hc = vo("$ZodObjectJIT", (e, t) => {
	Uc.init(e, t);
	const n = e._zod.parse, a = No(() => Gc(t));
	let i;
	const s = Fo, r = !ko.jitless, o = r && Po.value, l = t.catchall;
	let c;
	e._zod.parse = (u, d) => {
		c ?? (c = a.value);
		const p = u.value;
		return s(p) ? r && o && !1 === d?.async && !0 !== d.jitless ? (i || (i = ((e) => {
			const t = new ic([
				"shape",
				"payload",
				"ctx"
			]), n = a.value, i = (e) => {
				const t = $o(e);
				return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
			};
			t.write("const input = payload.value;");
			const s = Object.create(null);
			let r = 0;
			for (const a of n.keys) s[a] = "key_" + r++;
			t.write("const newResult = {};");
			for (const a of n.keys) {
				const n = s[a], r = $o(a), o = e[a], l = "optional" === o?._zod?.optin, c = "optional" === o?._zod?.optout;
				t.write(`const ${n} = ${i(a)};`), l && c ? t.write(`\n        if (${n}.issues.length) {\n          if (${r} in input) {\n            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [${r}, ...iss.path] : [${r}]\n            })));\n          }\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : l ? t.write(`\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : t.write(`\n        const ${n}_present = ${r} in input;\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        if (!${n}_present && !${n}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${r}]\n          });\n        }\n\n        if (${n}_present) {\n          if (${n}.value === undefined) {\n            newResult[${r}] = undefined;\n          } else {\n            newResult[${r}] = ${n}.value;\n          }\n        }\n\n      `);
			}
			t.write("payload.value = newResult;"), t.write("return payload;");
			const o = t.compile();
			return (t, n) => o(e, t, n);
		})(t.shape)), u = i(u, d), l ? Lc([], p, u, d, c, e) : u) : n(u, d) : (u.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), u);
	};
});
function Zc(e, t, n, a) {
	for (const s of e) if (0 === s.issues.length) return t.value = s.value, t;
	const i = e.filter((e) => !Zo(e));
	return 1 === i.length ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => Jo(e, a, Io())))
	}), t);
}
const qc = vo("$ZodUnion", (e, t) => {
	rc.init(e, t), zo(e._zod, "optin", () => t.options.some((e) => "optional" === e._zod.optin) ? "optional" : void 0), zo(e._zod, "optout", () => t.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0), zo(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), zo(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			const e = t.options.map((e) => e._zod.pattern);
			return new RegExp(`^(${e.map((e) => Mo(e.source)).join("|")})$`);
		}
	});
	const n = 1 === t.options.length ? t.options[0]._zod.run : null;
	e._zod.parse = (a, i) => {
		if (n) return n(a, i);
		let s = !1;
		const r = [];
		for (const e of t.options) {
			const t = e._zod.run({
				value: a.value,
				issues: []
			}, i);
			if (t instanceof Promise) r.push(t), s = !0;
			else {
				if (0 === t.issues.length) return t;
				r.push(t);
			}
		}
		return s ? Promise.all(r).then((t) => Zc(t, a, e, i)) : Zc(r, a, e, i);
	};
}), Vc = vo("$ZodIntersection", (e, t) => {
	rc.init(e, t), e._zod.parse = (e, n) => {
		const a = e.value, i = t.left._zod.run({
			value: a,
			issues: []
		}, n), s = t.right._zod.run({
			value: a,
			issues: []
		}, n);
		return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([t, n]) => Jc(e, t, n)) : Jc(e, i, s);
	};
});
function Wc(e, t) {
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (e instanceof Date && t instanceof Date && +e === +t) return {
		valid: !0,
		data: e
	};
	if (Oo(e) && Oo(t)) {
		const n = Object.keys(t), a = Object.keys(e).filter((e) => -1 !== n.indexOf(e)), i = {
			...e,
			...t
		};
		for (const s of a) {
			const n = Wc(e[s], t[s]);
			if (!n.valid) return {
				valid: !1,
				mergeErrorPath: [s, ...n.mergeErrorPath]
			};
			i[s] = n.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		const n = [];
		for (let a = 0; a < e.length; a++) {
			const i = Wc(e[a], t[a]);
			if (!i.valid) return {
				valid: !1,
				mergeErrorPath: [a, ...i.mergeErrorPath]
			};
			n.push(i.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function Jc(e, t, n) {
	const a = /* @__PURE__ */ new Map();
	let i;
	for (const o of t.issues) if ("unrecognized_keys" === o.code) {
		i ?? (i = o);
		for (const e of o.keys) a.has(e) || a.set(e, {}), a.get(e).l = !0;
	} else e.issues.push(o);
	for (const o of n.issues) if ("unrecognized_keys" === o.code) for (const e of o.keys) a.has(e) || a.set(e, {}), a.get(e).r = !0;
	else e.issues.push(o);
	const s = [...a].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length && i && e.issues.push({
		...i,
		keys: s
	}), Zo(e)) return e;
	const r = Wc(t.value, n.value);
	if (!r.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
	return e.value = r.data, e;
}
const Kc = vo("$ZodRecord", (e, t) => {
	rc.init(e, t), e._zod.parse = (n, a) => {
		const i = n.value;
		if (!Oo(i)) return n.issues.push({
			expected: "record",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
		const s = [], r = t.keyType._zod.values;
		if (r) {
			n.value = {};
			const o = /* @__PURE__ */ new Set();
			for (const c of r) if ("string" == typeof c || "number" == typeof c || "symbol" == typeof c) {
				o.add("number" == typeof c ? c.toString() : c);
				const r = t.keyType._zod.run({
					value: c,
					issues: []
				}, a);
				if (r instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (r.issues.length) {
					n.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: r.issues.map((e) => Jo(e, a, Io())),
						input: c,
						path: [c],
						inst: e
					});
					continue;
				}
				const l = r.value, u = t.valueType._zod.run({
					value: i[c],
					issues: []
				}, a);
				u instanceof Promise ? s.push(u.then((e) => {
					e.issues.length && n.issues.push(...Vo(c, e.issues)), n.value[l] = e.value;
				})) : (u.issues.length && n.issues.push(...Vo(c, u.issues)), n.value[l] = u.value);
			}
			let l;
			for (const e in i) o.has(e) || (l = l ?? [], l.push(e));
			l && l.length > 0 && n.issues.push({
				code: "unrecognized_keys",
				input: i,
				inst: e,
				keys: l
			});
		} else {
			n.value = {};
			for (const r of Reflect.ownKeys(i)) {
				if ("__proto__" === r) continue;
				if (!Object.prototype.propertyIsEnumerable.call(i, r)) continue;
				let o = t.keyType._zod.run({
					value: r,
					issues: []
				}, a);
				if (o instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if ("string" == typeof r && Pl.test(r) && o.issues.length) {
					const e = t.keyType._zod.run({
						value: Number(r),
						issues: []
					}, a);
					if (e instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
					0 === e.issues.length && (o = e);
				}
				if (o.issues.length) {
					"loose" === t.mode ? n.value[r] = i[r] : n.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: o.issues.map((e) => Jo(e, a, Io())),
						input: r,
						path: [r],
						inst: e
					});
					continue;
				}
				const l = t.valueType._zod.run({
					value: i[r],
					issues: []
				}, a);
				l instanceof Promise ? s.push(l.then((e) => {
					e.issues.length && n.issues.push(...Vo(r, e.issues)), n.value[o.value] = e.value;
				})) : (l.issues.length && n.issues.push(...Vo(r, l.issues)), n.value[o.value] = l.value);
			}
		}
		return s.length ? Promise.all(s).then(() => n) : n;
	};
}), Yc = vo("$ZodEnum", (e, t) => {
	rc.init(e, t);
	const n = Ao(t.entries), a = new Set(n);
	e._zod.values = a, e._zod.pattern = new RegExp(`^(${n.filter((e) => Bo.has(typeof e)).map((e) => "string" == typeof e ? Go(e) : e.toString()).join("|")})$`), e._zod.parse = (t, i) => {
		const s = t.value;
		return a.has(s) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: s,
			inst: e
		}), t;
	};
}), Xc = vo("$ZodTransform", (e, t) => {
	rc.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, a) => {
		if ("backward" === a.direction) throw new So(e.constructor.name);
		const i = t.transform(n.value, n);
		if (a.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n.fallback = !0, n));
		if (i instanceof Promise) throw new bo();
		return n.value = i, n.fallback = !0, n;
	};
});
function Qc(e, t) {
	return void 0 === t && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e;
}
const eu = vo("$ZodOptional", (e, t) => {
	rc.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", zo(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), zo(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${Mo(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if ("optional" === t.innerType._zod.optin) {
			const a = e.value, i = t.innerType._zod.run(e, n);
			return i instanceof Promise ? i.then((e) => Qc(e, a)) : Qc(i, a);
		}
		return void 0 === e.value ? e : t.innerType._zod.run(e, n);
	};
}), tu = vo("$ZodExactOptional", (e, t) => {
	eu.init(e, t), zo(e._zod, "values", () => t.innerType._zod.values), zo(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), nu = vo("$ZodNullable", (e, t) => {
	rc.init(e, t), zo(e._zod, "optin", () => t.innerType._zod.optin), zo(e._zod, "optout", () => t.innerType._zod.optout), zo(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${Mo(e.source)}|null)$`) : void 0;
	}), zo(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => null === e.value ? e : t.innerType._zod.run(e, n);
}), au = vo("$ZodDefault", (e, t) => {
	rc.init(e, t), e._zod.optin = "optional", zo(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		if (void 0 === e.value) return e.value = t.defaultValue, e;
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then((e) => iu(e, t)) : iu(a, t);
	};
});
function iu(e, t) {
	return void 0 === e.value && (e.value = t.defaultValue), e;
}
const su = vo("$ZodPrefault", (e, t) => {
	rc.init(e, t), e._zod.optin = "optional", zo(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => ("backward" === n.direction || void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), ru = vo("$ZodNonOptional", (e, t) => {
	rc.init(e, t), zo(e._zod, "values", () => {
		const e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
	}), e._zod.parse = (n, a) => {
		const i = t.innerType._zod.run(n, a);
		return i instanceof Promise ? i.then((t) => ou(t, e)) : ou(i, e);
	};
});
function ou(e, t) {
	return e.issues.length || void 0 !== e.value || e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
const lu = vo("$ZodCatch", (e, t) => {
	rc.init(e, t), e._zod.optin = "optional", zo(e._zod, "optout", () => t.innerType._zod.optout), zo(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then((a) => (e.value = a.value, a.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: a.issues.map((e) => Jo(e, n, Io())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e)) : (e.value = a.value, a.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: a.issues.map((e) => Jo(e, n, Io())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e);
	};
}), cu = vo("$ZodPipe", (e, t) => {
	rc.init(e, t), zo(e._zod, "values", () => t.in._zod.values), zo(e._zod, "optin", () => t.in._zod.optin), zo(e._zod, "optout", () => t.out._zod.optout), zo(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) {
			const a = t.out._zod.run(e, n);
			return a instanceof Promise ? a.then((e) => uu(e, t.in, n)) : uu(a, t.in, n);
		}
		const a = t.in._zod.run(e, n);
		return a instanceof Promise ? a.then((e) => uu(e, t.out, n)) : uu(a, t.out, n);
	};
});
function uu(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues,
		fallback: e.fallback
	}, n);
}
const du = vo("$ZodReadonly", (e, t) => {
	rc.init(e, t), zo(e._zod, "propValues", () => t.innerType._zod.propValues), zo(e._zod, "values", () => t.innerType._zod.values), zo(e._zod, "optin", () => t.innerType?._zod?.optin), zo(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then(pu) : pu(a);
	};
});
function pu(e) {
	return e.value = Object.freeze(e.value), e;
}
const fu = vo("$ZodCustom", (e, t) => {
	Gl.init(e, t), rc.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		const a = n.value, i = t.fn(a);
		if (i instanceof Promise) return i.then((t) => mu(t, n, a, e));
		mu(i, n, a, e);
	};
});
function mu(e, t, n, a) {
	if (!e) {
		const e = {
			code: "custom",
			input: n,
			inst: a,
			path: [...a._zod.def.path ?? []],
			continue: !a._zod.def.abort
		};
		a._zod.def.params && (e.params = a._zod.def.params), t.issues.push(Yo(e));
	}
}
var hu;
(hu = globalThis).__zod_globalRegistry ?? (hu.__zod_globalRegistry = new class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		const n = t[0];
		return this._map.set(e, n), n && "object" == typeof n && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		const t = this._map.get(e);
		return t && "object" == typeof t && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		const t = e._zod.parent;
		if (t) {
			const n = { ...this.get(t) ?? {} };
			delete n.id;
			const a = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(a).length ? a : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
}());
const gu = globalThis.__zod_globalRegistry;
function yu(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...Uo(t)
	});
}
function wu(e, t) {
	return new Ul({
		check: "less_than",
		...Uo(t),
		value: e,
		inclusive: !1
	});
}
function _u(e, t) {
	return new Ul({
		check: "less_than",
		...Uo(t),
		value: e,
		inclusive: !0
	});
}
function vu(e, t) {
	return new Hl({
		check: "greater_than",
		...Uo(t),
		value: e,
		inclusive: !1
	});
}
function bu(e, t) {
	return new Hl({
		check: "greater_than",
		...Uo(t),
		value: e,
		inclusive: !0
	});
}
function Su(e, t) {
	return new Zl({
		check: "multiple_of",
		...Uo(t),
		value: e
	});
}
function ku(e, t) {
	return new Vl({
		check: "max_length",
		...Uo(t),
		maximum: e
	});
}
function Iu(e, t) {
	return new Wl({
		check: "min_length",
		...Uo(t),
		minimum: e
	});
}
function Au(e, t) {
	return new Jl({
		check: "length_equals",
		...Uo(t),
		length: e
	});
}
function xu(e) {
	return new ac({
		check: "overwrite",
		tx: e
	});
}
function Nu(e, t) {
	const n = new Gl({
		check: "custom",
		...Uo(t)
	});
	return n._zod.check = e, n;
}
function Tu(e) {
	let t = e?.target ?? "draft-2020-12";
	return "draft-4" === t && (t = "draft-04"), "draft-7" === t && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? gu,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		external: e?.external ?? void 0
	};
}
function Mu(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var a;
	const i = e._zod.def, s = t.seen.get(e);
	if (s) return s.count++, n.schemaPath.includes(e) && (s.cycle = n.path), s.schema;
	const r = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, r);
	const o = e._zod.toJSONSchema?.();
	if (o) r.schema = o;
	else {
		const a = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, r.schema, a);
		else {
			const n = r.schema, s = t.processors[i.type];
			if (!s) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			s(e, t, n, a);
		}
		const s = e._zod.parent;
		s && (r.ref || (r.ref = s), Mu(s, t, a), t.seen.get(s).isParent = !0);
	}
	const l = t.metadataRegistry.get(e);
	return l && Object.assign(r.schema, l), "input" === t.io && Eu(e) && (delete r.schema.examples, delete r.schema.default), "input" === t.io && "_prefault" in r.schema && ((a = r.schema).default ?? (a.default = r.schema._prefault)), delete r.schema._prefault, t.seen.get(e).schema;
}
function Ru(e, t) {
	const n = e.seen.get(t);
	if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const a = /* @__PURE__ */ new Map();
	for (const s of e.seen.entries()) {
		const t = e.metadataRegistry.get(s[0])?.id;
		if (t) {
			const e = a.get(t);
			if (e && e !== s[0]) throw new Error(`Duplicate schema id "${t}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			a.set(t, s[0]);
		}
	}
	const i = (t) => {
		if (t[1].schema.$ref) return;
		const a = t[1], { ref: i, defId: s } = ((t) => {
			const a = "draft-2020-12" === e.target ? "$defs" : "definitions";
			if (e.external) {
				const n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
				if (n) return { ref: i(n) };
				const s = t[1].defId ?? t[1].schema.id ?? "schema" + e.counter++;
				return t[1].defId = s, {
					defId: s,
					ref: `${i("__shared")}#/${a}/${s}`
				};
			}
			if (t[1] === n) return { ref: "#" };
			const i = `#/${a}/`, s = t[1].schema.id ?? "__schema" + e.counter++;
			return {
				defId: s,
				ref: i + s
			};
		})(t);
		a.def = { ...a.schema }, s && (a.defId = s);
		const r = a.schema;
		for (const e in r) delete r[e];
		r.$ref = i;
	};
	if ("throw" === e.cycles) for (const s of e.seen.entries()) {
		const e = s[1];
		if (e.cycle) throw new Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>\n\nSet the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (const s of e.seen.entries()) {
		const n = s[1];
		if (t !== s[0]) {
			if (e.external) {
				const n = e.external.registry.get(s[0])?.id;
				if (t !== s[0] && n) {
					i(s);
					continue;
				}
			}
			(e.metadataRegistry.get(s[0])?.id || n.cycle || n.count > 1 && "ref" === e.reused) && i(s);
		} else i(s);
	}
}
function zu(e, t) {
	const n = e.seen.get(t);
	if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const a = (t) => {
		const n = e.seen.get(t);
		if (null === n.ref) return;
		const i = n.def ?? n.schema, s = { ...i }, r = n.ref;
		if (n.ref = null, r) {
			a(r);
			const n = e.seen.get(r), o = n.schema;
			if (!o.$ref || "draft-07" !== e.target && "draft-04" !== e.target && "openapi-3.0" !== e.target ? Object.assign(i, o) : (i.allOf = i.allOf ?? [], i.allOf.push(o)), Object.assign(i, s), t._zod.parent === r) for (const e in i) "$ref" !== e && "allOf" !== e && (e in s || delete i[e]);
			if (o.$ref && n.def) for (const e in i) "$ref" !== e && "allOf" !== e && e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		const o = t._zod.parent;
		if (o && o !== r) {
			a(o);
			const t = e.seen.get(o);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (const e in i) "$ref" !== e && "allOf" !== e && e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	for (const l of [...e.seen.entries()].reverse()) a(l[0]);
	const i = {};
	if ("draft-2020-12" === e.target ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === e.target ? i.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === e.target ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		const n = e.external.registry.get(t)?.id;
		if (!n) throw new Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Object.assign(i, n.def ?? n.schema);
	const s = e.metadataRegistry.get(t)?.id;
	void 0 !== s && i.id === s && delete i.id;
	const r = e.external?.defs ?? {};
	for (const l of e.seen.entries()) {
		const e = l[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, r[e.defId] = e.def);
	}
	e.external || Object.keys(r).length > 0 && ("draft-2020-12" === e.target ? i.$defs = r : i.definitions = r);
	try {
		const n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Du(t, "input", e.processors),
					output: Du(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch (o) {
		throw new Error("Error converting schema to JSON.");
	}
}
function Eu(e, t) {
	const n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	const a = e._zod.def;
	if ("transform" === a.type) return !0;
	if ("array" === a.type) return Eu(a.element, n);
	if ("set" === a.type) return Eu(a.valueType, n);
	if ("lazy" === a.type) return Eu(a.getter(), n);
	if ("promise" === a.type || "optional" === a.type || "nonoptional" === a.type || "nullable" === a.type || "readonly" === a.type || "default" === a.type || "prefault" === a.type) return Eu(a.innerType, n);
	if ("intersection" === a.type) return Eu(a.left, n) || Eu(a.right, n);
	if ("record" === a.type || "map" === a.type) return Eu(a.keyType, n) || Eu(a.valueType, n);
	if ("pipe" === a.type) return !!e._zod.traits.has("$ZodCodec") || Eu(a.in, n) || Eu(a.out, n);
	if ("object" === a.type) {
		for (const e in a.shape) if (Eu(a.shape[e], n)) return !0;
		return !1;
	}
	if ("union" === a.type) {
		for (const e of a.options) if (Eu(e, n)) return !0;
		return !1;
	}
	if ("tuple" === a.type) {
		for (const e of a.items) if (Eu(e, n)) return !0;
		return !(!a.rest || !Eu(a.rest, n));
	}
	return !1;
}
const Du = (e, t, n = {}) => (a) => {
	const { libraryOptions: i, target: s } = a ?? {}, r = Tu({
		...i ?? {},
		target: s,
		io: t,
		processors: n
	});
	return Mu(e, r), Ru(r, e), zu(r, e);
}, $u = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, Cu = (e, t, n, a) => {
	const i = e._zod.def;
	Mu(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
}, Fu = vo("ZodISODateTime", (e, t) => {
	vc.init(e, t), rd.init(e, t);
});
const Pu = vo("ZodISODate", (e, t) => {
	bc.init(e, t), rd.init(e, t);
});
const Ou = vo("ZodISOTime", (e, t) => {
	Sc.init(e, t), rd.init(e, t);
});
const ju = vo("ZodISODuration", (e, t) => {
	kc.init(e, t), rd.init(e, t);
});
const Bu = (e, t) => {
	Qo.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
		format: { value: (t) => function(e, t = (e) => e.message) {
			const n = { _errors: [] }, a = (e, i = []) => {
				for (const s of e.issues) if ("invalid_union" === s.code && s.errors.length) s.errors.map((e) => a({ issues: e }, [...i, ...s.path]));
				else if ("invalid_key" === s.code) a({ issues: s.issues }, [...i, ...s.path]);
				else if ("invalid_element" === s.code) a({ issues: s.issues }, [...i, ...s.path]);
				else {
					const e = [...i, ...s.path];
					if (0 === e.length) n._errors.push(t(s));
					else {
						let a = n, i = 0;
						for (; i < e.length;) {
							const n = e[i];
							i !== e.length - 1 ? a[n] = a[n] || { _errors: [] } : (a[n] = a[n] || { _errors: [] }, a[n]._errors.push(t(s))), a = a[n], i++;
						}
					}
				}
			};
			return a(e), n;
		}(e, t) },
		flatten: { value: (t) => function(e, t = (e) => e.message) {
			const n = {}, a = [];
			for (const i of e.issues) i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : a.push(t(i));
			return {
				formErrors: a,
				fieldErrors: n
			};
		}(e, t) },
		addIssue: { value: (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, xo, 2);
		} },
		addIssues: { value: (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, xo, 2);
		} },
		isEmpty: { get: () => 0 === e.issues.length }
	});
}, Gu = vo("ZodError", Bu, { Parent: Error }), Lu = tl(Gu), Uu = nl(Gu), Hu = al(Gu), Zu = sl(Gu), qu = ol(Gu), Vu = ll(Gu), Wu = cl(Gu), Ju = ul(Gu), Ku = dl(Gu), Yu = pl(Gu), Xu = fl(Gu), Qu = ml(Gu), ed = /* @__PURE__ */ new WeakMap();
function td(e, t, n) {
	const a = Object.getPrototypeOf(e);
	let i = ed.get(a);
	if (i || (i = /* @__PURE__ */ new Set(), ed.set(a, i)), !i.has(t)) {
		i.add(t);
		for (const e in n) {
			const t = n[e];
			Object.defineProperty(a, e, {
				configurable: !0,
				enumerable: !1,
				get() {
					const n = t.bind(this);
					return Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: n
					}), n;
				},
				set(t) {
					Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: t
					});
				}
			});
		}
	}
}
const nd = vo("ZodType", (e, t) => (rc.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: Du(e, "input"),
	output: Du(e, "output")
} }), e.toJSONSchema = ((e, t = {}) => (n) => {
	const a = Tu({
		...n,
		processors: t
	});
	return Mu(e, a), Ru(a, e), zu(a, e);
})(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (t, n) => Lu(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => Hu(e, t, n), e.parseAsync = async (t, n) => Uu(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => Zu(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => qu(e, t, n), e.decode = (t, n) => Vu(e, t, n), e.encodeAsync = async (t, n) => Wu(e, t, n), e.decodeAsync = async (t, n) => Ju(e, t, n), e.safeEncode = (t, n) => Ku(e, t, n), e.safeDecode = (t, n) => Yu(e, t, n), e.safeEncodeAsync = async (t, n) => Xu(e, t, n), e.safeDecodeAsync = async (t, n) => Qu(e, t, n), td(e, "ZodType", {
	check(...e) {
		const t = this.def;
		return this.clone(Do(t, { checks: [...t.checks ?? [], ...e.map((e) => "function" == typeof e ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return Lo(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(function(e, t = {}) {
			return function(e, t, n) {
				return new sp({
					type: "custom",
					check: "custom",
					fn: t,
					...Uo(n)
				});
			}(0, e, t);
		}(e, t));
	},
	superRefine(e, t) {
		return this.check(function(e, t) {
			return function(e, t) {
				const n = Nu((t) => (t.addIssue = (e) => {
					if ("string" == typeof e) t.issues.push(Yo(e, t.value, n._zod.def));
					else {
						const a = e;
						a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = t.value), a.inst ?? (a.inst = n), a.continue ?? (a.continue = !n._zod.def.abort), t.issues.push(Yo(a));
					}
				}, e(t.value, t)), t);
				return n;
			}(e, t);
		}(e, t));
	},
	overwrite(e) {
		return this.check(xu(e));
	},
	optional() {
		return Wd(this);
	},
	exactOptional() {
		return new Jd({
			type: "optional",
			innerType: this
		});
	},
	nullable() {
		return Yd(this);
	},
	nullish() {
		return Wd(Yd(this));
	},
	nonoptional(e) {
		return function(e, t) {
			return new ep({
				type: "nonoptional",
				innerType: e,
				...Uo(t)
			});
		}(this, e);
	},
	array() {
		return Fd(this);
	},
	or(e) {
		return Bd([this, e]);
	},
	and(e) {
		return new Gd({
			type: "intersection",
			left: this,
			right: e
		});
	},
	transform(e) {
		return ap(this, new qd({
			type: "transform",
			transform: e
		}));
	},
	default(e) {
		return t = e, new Xd({
			type: "default",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : jo(t);
			}
		});
		var t;
	},
	prefault(e) {
		return t = e, new Qd({
			type: "prefault",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : jo(t);
			}
		});
		var t;
	},
	catch(e) {
		return new tp({
			type: "catch",
			innerType: this,
			catchValue: "function" == typeof (t = e) ? t : () => t
		});
		var t;
	},
	pipe(e) {
		return ap(this, e);
	},
	readonly() {
		return new ip({
			type: "readonly",
			innerType: this
		});
	},
	describe(e) {
		const t = this.clone();
		return gu.add(t, { description: e }), t;
	},
	meta(...e) {
		if (0 === e.length) return gu.get(this);
		const t = this.clone();
		return gu.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e) {
		return e(this);
	}
}), Object.defineProperty(e, "description", {
	get: () => gu.get(e)?.description,
	configurable: !0
}), e)), ad = vo("_ZodString", (e, t) => {
	oc.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = n;
		a.type = "string";
		const { minimum: i, maximum: s, format: r, patterns: o, contentEncoding: l } = e._zod.bag;
		if ("number" == typeof i && (a.minLength = i), "number" == typeof s && (a.maxLength = s), r && (a.format = $u[r] ?? r, "" === a.format && delete a.format, "time" === r && delete a.format), l && (a.contentEncoding = l), o && o.size > 0) {
			const e = [...o];
			1 === e.length ? a.pattern = e[0].source : e.length > 1 && (a.allOf = [...e.map((e) => ({
				..."draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	})(e, t, n);
	const n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, td(e, "_ZodString", {
		regex(...e) {
			return this.check(function(e, t) {
				return new Yl({
					check: "string_format",
					format: "regex",
					...Uo(t),
					pattern: e
				});
			}(...e));
		},
		includes(...e) {
			return this.check(function(e, t) {
				return new ec({
					check: "string_format",
					format: "includes",
					...Uo(t),
					includes: e
				});
			}(...e));
		},
		startsWith(...e) {
			return this.check(function(e, t) {
				return new tc({
					check: "string_format",
					format: "starts_with",
					...Uo(t),
					prefix: e
				});
			}(...e));
		},
		endsWith(...e) {
			return this.check(function(e, t) {
				return new nc({
					check: "string_format",
					format: "ends_with",
					...Uo(t),
					suffix: e
				});
			}(...e));
		},
		min(...e) {
			return this.check(Iu(...e));
		},
		max(...e) {
			return this.check(ku(...e));
		},
		length(...e) {
			return this.check(Au(...e));
		},
		nonempty(...e) {
			return this.check(Iu(1, ...e));
		},
		lowercase(e) {
			return this.check(function(e) {
				return new Xl({
					check: "string_format",
					format: "lowercase",
					...Uo(e)
				});
			}(e));
		},
		uppercase(e) {
			return this.check(function(e) {
				return new Ql({
					check: "string_format",
					format: "uppercase",
					...Uo(e)
				});
			}(e));
		},
		trim() {
			return this.check(xu((e) => e.trim()));
		},
		normalize(...e) {
			return this.check(function(e) {
				return xu((t) => t.normalize(e));
			}(...e));
		},
		toLowerCase() {
			return this.check(xu((e) => e.toLowerCase()));
		},
		toUpperCase() {
			return this.check(xu((e) => e.toUpperCase()));
		},
		slugify() {
			return this.check(xu((e) => function(e) {
				return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
			}(e)));
		}
	});
}), id = vo("ZodString", (e, t) => {
	oc.init(e, t), ad.init(e, t), e.email = (t) => e.check(function(e, t) {
		return new od({
			type: "string",
			format: "email",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.url = (t) => e.check(function(e, t) {
		return new ud({
			type: "string",
			format: "url",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.jwt = (t) => e.check(function(e, t) {
		return new Ad({
			type: "string",
			format: "jwt",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.emoji = (t) => e.check(function(e, t) {
		return new dd({
			type: "string",
			format: "emoji",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.guid = (t) => e.check(yu(ld, t)), e.uuid = (t) => e.check(function(e, t) {
		return new cd({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.uuidv4 = (t) => e.check(function(e, t) {
		return new cd({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v4",
			...Uo(t)
		});
	}(0, t)), e.uuidv6 = (t) => e.check(function(e, t) {
		return new cd({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v6",
			...Uo(t)
		});
	}(0, t)), e.uuidv7 = (t) => e.check(function(e, t) {
		return new cd({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v7",
			...Uo(t)
		});
	}(0, t)), e.nanoid = (t) => e.check(function(e, t) {
		return new pd({
			type: "string",
			format: "nanoid",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.guid = (t) => e.check(yu(ld, t)), e.cuid = (t) => e.check(function(e, t) {
		return new fd({
			type: "string",
			format: "cuid",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.cuid2 = (t) => e.check(function(e, t) {
		return new md({
			type: "string",
			format: "cuid2",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.ulid = (t) => e.check(function(e, t) {
		return new hd({
			type: "string",
			format: "ulid",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.base64 = (t) => e.check(function(e, t) {
		return new Sd({
			type: "string",
			format: "base64",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.base64url = (t) => e.check(function(e, t) {
		return new kd({
			type: "string",
			format: "base64url",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.xid = (t) => e.check(function(e, t) {
		return new gd({
			type: "string",
			format: "xid",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.ksuid = (t) => e.check(function(e, t) {
		return new yd({
			type: "string",
			format: "ksuid",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.ipv4 = (t) => e.check(function(e, t) {
		return new wd({
			type: "string",
			format: "ipv4",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.ipv6 = (t) => e.check(function(e, t) {
		return new _d({
			type: "string",
			format: "ipv6",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.cidrv4 = (t) => e.check(function(e, t) {
		return new vd({
			type: "string",
			format: "cidrv4",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.cidrv6 = (t) => e.check(function(e, t) {
		return new bd({
			type: "string",
			format: "cidrv6",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.e164 = (t) => e.check(function(e, t) {
		return new Id({
			type: "string",
			format: "e164",
			check: "string_format",
			abort: !1,
			...Uo(t)
		});
	}(0, t)), e.datetime = (t) => e.check(function(e) {
		return function(e, t) {
			return new Fu({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: !1,
				local: !1,
				precision: null,
				...Uo(t)
			});
		}(0, e);
	}(t)), e.date = (t) => e.check(function(e) {
		return function(e, t) {
			return new Pu({
				type: "string",
				format: "date",
				check: "string_format",
				...Uo(t)
			});
		}(0, e);
	}(t)), e.time = (t) => e.check(function(e) {
		return function(e, t) {
			return new Ou({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...Uo(t)
			});
		}(0, e);
	}(t)), e.duration = (t) => e.check(function(e) {
		return function(e, t) {
			return new ju({
				type: "string",
				format: "duration",
				check: "string_format",
				...Uo(t)
			});
		}(0, e);
	}(t));
});
function sd(e) {
	return function(e, t) {
		return new id({
			type: "string",
			...Uo(t)
		});
	}(0, e);
}
const rd = vo("ZodStringFormat", (e, t) => {
	lc.init(e, t), ad.init(e, t);
}), od = vo("ZodEmail", (e, t) => {
	dc.init(e, t), rd.init(e, t);
}), ld = vo("ZodGUID", (e, t) => {
	cc.init(e, t), rd.init(e, t);
}), cd = vo("ZodUUID", (e, t) => {
	uc.init(e, t), rd.init(e, t);
}), ud = vo("ZodURL", (e, t) => {
	pc.init(e, t), rd.init(e, t);
}), dd = vo("ZodEmoji", (e, t) => {
	fc.init(e, t), rd.init(e, t);
}), pd = vo("ZodNanoID", (e, t) => {
	mc.init(e, t), rd.init(e, t);
}), fd = vo("ZodCUID", (e, t) => {
	hc.init(e, t), rd.init(e, t);
}), md = vo("ZodCUID2", (e, t) => {
	gc.init(e, t), rd.init(e, t);
}), hd = vo("ZodULID", (e, t) => {
	yc.init(e, t), rd.init(e, t);
}), gd = vo("ZodXID", (e, t) => {
	wc.init(e, t), rd.init(e, t);
}), yd = vo("ZodKSUID", (e, t) => {
	_c.init(e, t), rd.init(e, t);
}), wd = vo("ZodIPv4", (e, t) => {
	Ic.init(e, t), rd.init(e, t);
}), _d = vo("ZodIPv6", (e, t) => {
	Ac.init(e, t), rd.init(e, t);
}), vd = vo("ZodCIDRv4", (e, t) => {
	xc.init(e, t), rd.init(e, t);
}), bd = vo("ZodCIDRv6", (e, t) => {
	Nc.init(e, t), rd.init(e, t);
}), Sd = vo("ZodBase64", (e, t) => {
	Mc.init(e, t), rd.init(e, t);
}), kd = vo("ZodBase64URL", (e, t) => {
	Rc.init(e, t), rd.init(e, t);
}), Id = vo("ZodE164", (e, t) => {
	zc.init(e, t), rd.init(e, t);
}), Ad = vo("ZodJWT", (e, t) => {
	Ec.init(e, t), rd.init(e, t);
}), xd = vo("ZodNumber", (e, t) => {
	Dc.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = n, { minimum: i, maximum: s, format: r, multipleOf: o, exclusiveMaximum: l, exclusiveMinimum: c } = e._zod.bag;
		"string" == typeof r && r.includes("int") ? a.type = "integer" : a.type = "number";
		const u = "number" == typeof c && c >= (i ?? Number.NEGATIVE_INFINITY), d = "number" == typeof l && l <= (s ?? Number.POSITIVE_INFINITY), p = "draft-04" === t.target || "openapi-3.0" === t.target;
		u ? p ? (a.minimum = c, a.exclusiveMinimum = !0) : a.exclusiveMinimum = c : "number" == typeof i && (a.minimum = i), d ? p ? (a.maximum = l, a.exclusiveMaximum = !0) : a.exclusiveMaximum = l : "number" == typeof s && (a.maximum = s), "number" == typeof o && (a.multipleOf = o);
	})(e, t, n), td(e, "ZodNumber", {
		gt(e, t) {
			return this.check(vu(e, t));
		},
		gte(e, t) {
			return this.check(bu(e, t));
		},
		min(e, t) {
			return this.check(bu(e, t));
		},
		lt(e, t) {
			return this.check(wu(e, t));
		},
		lte(e, t) {
			return this.check(_u(e, t));
		},
		max(e, t) {
			return this.check(_u(e, t));
		},
		int(e) {
			return this.check(Md(e));
		},
		safe(e) {
			return this.check(Md(e));
		},
		positive(e) {
			return this.check(vu(0, e));
		},
		nonnegative(e) {
			return this.check(bu(0, e));
		},
		negative(e) {
			return this.check(wu(0, e));
		},
		nonpositive(e) {
			return this.check(_u(0, e));
		},
		multipleOf(e, t) {
			return this.check(Su(e, t));
		},
		step(e, t) {
			return this.check(Su(e, t));
		},
		finite() {
			return this;
		}
	});
	const n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function Nd(e) {
	return function(e, t) {
		return new xd({
			type: "number",
			checks: [],
			...Uo(t)
		});
	}(0, e);
}
const Td = vo("ZodNumberFormat", (e, t) => {
	$c.init(e, t), xd.init(e, t);
});
function Md(e) {
	return function(e, t) {
		return new Td({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...Uo(t)
		});
	}(0, e);
}
const Rd = vo("ZodBoolean", (e, t) => {
	Cc.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.type = "boolean";
	})(0, 0, t);
});
function zd(e) {
	return function(e, t) {
		return new Rd({
			type: "boolean",
			...Uo(t)
		});
	}(0, e);
}
const Ed = vo("ZodUnknown", (e, t) => {
	Fc.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (e, t, n) => {};
});
function Dd() {
	return new Ed({ type: "unknown" });
}
const $d = vo("ZodNever", (e, t) => {
	Pc.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.not = {};
	})(0, 0, t);
});
const Cd = vo("ZodArray", (e, t) => {
	jc.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, s = e._zod.def, { minimum: r, maximum: o } = e._zod.bag;
		"number" == typeof r && (i.minItems = r), "number" == typeof o && (i.maxItems = o), i.type = "array", i.items = Mu(s.element, t, {
			...a,
			path: [...a.path, "items"]
		});
	})(e, t, n, a), e.element = t.element, td(e, "ZodArray", {
		min(e, t) {
			return this.check(Iu(e, t));
		},
		nonempty(e) {
			return this.check(Iu(1, e));
		},
		max(e, t) {
			return this.check(ku(e, t));
		},
		length(e, t) {
			return this.check(Au(e, t));
		},
		unwrap() {
			return this.element;
		}
	});
});
function Fd(e, t) {
	return function(e, t, n) {
		return new Cd({
			type: "array",
			element: t,
			...Uo(n)
		});
	}(0, e, t);
}
const Pd = vo("ZodObject", (e, t) => {
	Hc.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, s = e._zod.def;
		i.type = "object", i.properties = {};
		const r = s.shape;
		for (const c in r) i.properties[c] = Mu(r[c], t, {
			...a,
			path: [
				...a.path,
				"properties",
				c
			]
		});
		const o = new Set(Object.keys(r)), l = new Set([...o].filter((e) => {
			const n = s.shape[e]._zod;
			return "input" === t.io ? void 0 === n.optin : void 0 === n.optout;
		}));
		l.size > 0 && (i.required = Array.from(l)), "never" === s.catchall?._zod.def.type ? i.additionalProperties = !1 : s.catchall ? s.catchall && (i.additionalProperties = Mu(s.catchall, t, {
			...a,
			path: [...a.path, "additionalProperties"]
		})) : "output" === t.io && (i.additionalProperties = !1);
	})(e, t, n, a), zo(e, "shape", () => t.shape), td(e, "ZodObject", {
		keyof() {
			return Zd(Object.keys(this._zod.def.shape));
		},
		catchall(e) {
			return this.clone({
				...this._zod.def,
				catchall: e
			});
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: Dd()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: Dd()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: function(e, t) {
					return new $d({
						type: "never",
						...Uo(t)
					});
				}(0, e)
			});
			var e;
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(e) {
			return function(e, t) {
				if (!Oo(t)) throw new Error("Invalid input to extend: expected a plain object");
				const n = e._zod.def.checks;
				if (n && n.length > 0) {
					const n = e._zod.def.shape;
					for (const e in t) if (void 0 !== Object.getOwnPropertyDescriptor(n, e)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
				}
				return Lo(e, Do(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return Eo(this, "shape", n), n;
				} }));
			}(this, e);
		},
		safeExtend(e) {
			return function(e, t) {
				if (!Oo(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
				return Lo(e, Do(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return Eo(this, "shape", n), n;
				} }));
			}(this, e);
		},
		merge(e) {
			return function(e, t) {
				if (e._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
				return Lo(e, Do(e._zod.def, {
					get shape() {
						const n = {
							...e._zod.def.shape,
							...t._zod.def.shape
						};
						return Eo(this, "shape", n), n;
					},
					get catchall() {
						return t._zod.def.catchall;
					},
					checks: t._zod.def.checks ?? []
				}));
			}(this, e);
		},
		pick(e) {
			return function(e, t) {
				const n = e._zod.def, a = n.checks;
				if (a && a.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
				return Lo(e, Do(e._zod.def, {
					get shape() {
						const e = {};
						for (const a in t) {
							if (!(a in n.shape)) throw new Error(`Unrecognized key: "${a}"`);
							t[a] && (e[a] = n.shape[a]);
						}
						return Eo(this, "shape", e), e;
					},
					checks: []
				}));
			}(this, e);
		},
		omit(e) {
			return function(e, t) {
				const n = e._zod.def, a = n.checks;
				if (a && a.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
				return Lo(e, Do(e._zod.def, {
					get shape() {
						const a = { ...e._zod.def.shape };
						for (const e in t) {
							if (!(e in n.shape)) throw new Error(`Unrecognized key: "${e}"`);
							t[e] && delete a[e];
						}
						return Eo(this, "shape", a), a;
					},
					checks: []
				}));
			}(this, e);
		},
		partial(...e) {
			return function(e, t, n) {
				const a = t._zod.def.checks;
				if (a && a.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
				return Lo(t, Do(t._zod.def, {
					get shape() {
						const a = t._zod.def.shape, i = { ...a };
						if (n) for (const t in n) {
							if (!(t in a)) throw new Error(`Unrecognized key: "${t}"`);
							n[t] && (i[t] = e ? new e({
								type: "optional",
								innerType: a[t]
							}) : a[t]);
						}
						else for (const t in a) i[t] = e ? new e({
							type: "optional",
							innerType: a[t]
						}) : a[t];
						return Eo(this, "shape", i), i;
					},
					checks: []
				}));
			}(Vd, this, e[0]);
		},
		required(...e) {
			return t = ep, n = this, a = e[0], Lo(n, Do(n._zod.def, { get shape() {
				const e = n._zod.def.shape, i = { ...e };
				if (a) for (const n in a) {
					if (!(n in i)) throw new Error(`Unrecognized key: "${n}"`);
					a[n] && (i[n] = new t({
						type: "nonoptional",
						innerType: e[n]
					}));
				}
				else for (const n in e) i[n] = new t({
					type: "nonoptional",
					innerType: e[n]
				});
				return Eo(this, "shape", i), i;
			} }));
			var t, n, a;
		}
	});
});
function Od(e, t) {
	const n = {
		type: "object",
		shape: e ?? {},
		...Uo(t)
	};
	return new Pd(n);
}
const jd = vo("ZodUnion", (e, t) => {
	qc.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = !1 === i.inclusive, r = i.options.map((e, n) => Mu(e, t, {
			...a,
			path: [
				...a.path,
				s ? "oneOf" : "anyOf",
				n
			]
		}));
		s ? n.oneOf = r : n.anyOf = r;
	})(e, t, n, a), e.options = t.options;
});
function Bd(e, t) {
	return new jd({
		type: "union",
		options: e,
		...Uo(t)
	});
}
const Gd = vo("ZodIntersection", (e, t) => {
	Vc.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = Mu(i.left, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				0
			]
		}), r = Mu(i.right, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				1
			]
		}), o = (e) => "allOf" in e && 1 === Object.keys(e).length;
		n.allOf = [...o(s) ? s.allOf : [s], ...o(r) ? r.allOf : [r]];
	})(e, t, n, a);
}), Ld = vo("ZodRecord", (e, t) => {
	Kc.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, s = e._zod.def;
		i.type = "object";
		const r = s.keyType, o = r._zod.bag?.patterns;
		if ("loose" === s.mode && o && o.size > 0) {
			const e = Mu(s.valueType, t, {
				...a,
				path: [
					...a.path,
					"patternProperties",
					"*"
				]
			});
			i.patternProperties = {};
			for (const t of o) i.patternProperties[t.source] = e;
		} else "draft-07" !== t.target && "draft-2020-12" !== t.target || (i.propertyNames = Mu(s.keyType, t, {
			...a,
			path: [...a.path, "propertyNames"]
		})), i.additionalProperties = Mu(s.valueType, t, {
			...a,
			path: [...a.path, "additionalProperties"]
		});
		const l = r._zod.values;
		if (l) {
			const e = [...l].filter((e) => "string" == typeof e || "number" == typeof e);
			e.length > 0 && (i.required = e);
		}
	})(e, t, n, a), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Ud(e, t, n) {
	return t && t._zod ? new Ld({
		type: "record",
		keyType: e,
		valueType: t,
		...Uo(n)
	}) : new Ld({
		type: "record",
		keyType: sd(),
		valueType: e,
		...Uo(t)
	});
}
const Hd = vo("ZodEnum", (e, t) => {
	Yc.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = Ao(e._zod.def.entries);
		a.every((e) => "number" == typeof e) && (n.type = "number"), a.every((e) => "string" == typeof e) && (n.type = "string"), n.enum = a;
	})(e, 0, n), e.enum = t.entries, e.options = Object.values(t.entries);
	const n = new Set(Object.keys(t.entries));
	e.extract = (e, a) => {
		const i = {};
		for (const s of e) {
			if (!n.has(s)) throw new Error(`Key ${s} not found in enum`);
			i[s] = t.entries[s];
		}
		return new Hd({
			...t,
			checks: [],
			...Uo(a),
			entries: i
		});
	}, e.exclude = (e, a) => {
		const i = { ...t.entries };
		for (const t of e) {
			if (!n.has(t)) throw new Error(`Key ${t} not found in enum`);
			delete i[t];
		}
		return new Hd({
			...t,
			checks: [],
			...Uo(a),
			entries: i
		});
	};
});
function Zd(e, t) {
	const n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new Hd({
		type: "enum",
		entries: n,
		...Uo(t)
	});
}
const qd = vo("ZodTransform", (e, t) => {
	Xc.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
	})(0, e), e._zod.parse = (n, a) => {
		if ("backward" === a.direction) throw new So(e.constructor.name);
		n.addIssue = (a) => {
			if ("string" == typeof a) n.issues.push(Yo(a, n.value, t));
			else {
				const t = a;
				t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), t.input ?? (t.input = n.value), t.inst ?? (t.inst = e), n.issues.push(Yo(t));
			}
		};
		const i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n.fallback = !0, n)) : (n.value = i, n.fallback = !0, n);
	};
}), Vd = vo("ZodOptional", (e, t) => {
	eu.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => Cu(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
});
function Wd(e) {
	return new Vd({
		type: "optional",
		innerType: e
	});
}
const Jd = vo("ZodExactOptional", (e, t) => {
	tu.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => Cu(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), Kd = vo("ZodNullable", (e, t) => {
	nu.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = Mu(i.innerType, t, a), r = t.seen.get(e);
		"openapi-3.0" === t.target ? (r.ref = i.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
});
function Yd(e) {
	return new Kd({
		type: "nullable",
		innerType: e
	});
}
const Xd = vo("ZodDefault", (e, t) => {
	au.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Mu(i.innerType, t, a), t.seen.get(e).ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
}), Qd = vo("ZodPrefault", (e, t) => {
	su.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Mu(i.innerType, t, a), t.seen.get(e).ref = i.innerType, "input" === t.io && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
}), ep = vo("ZodNonOptional", (e, t) => {
	ru.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Mu(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
	})(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), tp = vo("ZodCatch", (e, t) => {
	lu.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		let s;
		Mu(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
		try {
			s = i.catchValue(void 0);
		} catch {
			throw new Error("Dynamic catch values are not supported in JSON Schema");
		}
		n.default = s;
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
}), np = vo("ZodPipe", (e, t) => {
	cu.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = i.in._zod.traits.has("$ZodTransform"), r = "input" === t.io ? s ? i.out : i.in : i.out;
		Mu(r, t, a), t.seen.get(e).ref = r;
	})(e, t, 0, a), e.in = t.in, e.out = t.out;
});
function ap(e, t) {
	return new np({
		type: "pipe",
		in: e,
		out: t
	});
}
const ip = vo("ZodReadonly", (e, t) => {
	du.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Mu(i.innerType, t, a), t.seen.get(e).ref = i.innerType, n.readOnly = !0;
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
}), sp = vo("ZodCustom", (e, t) => {
	fu.init(e, t), nd.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
	})(0, e);
}), rp = Zd((op = ae, Object.values(op)));
var op;
Od({
	password: sd(),
	username: sd().max(100, "Username must be 100 characters or fewer")
});
const lp = Od({
	onset_timestamp: Nd().nullable().optional(),
	offset_timestamp: Nd().nullable().optional(),
	marker_index: Nd().int().default(1),
	marker_type: rp.default(ae.MAIN_SLEEP)
}), cp = Od({
	start_timestamp: Nd().nullable().optional(),
	end_timestamp: Nd().nullable().optional(),
	marker_index: Nd().int().default(1)
}), up = (Od({
	sleep_markers: Fd(lp).optional().default([]),
	nonwear_markers: Fd(cp).optional().default([]),
	explicit_no_nonwear: zd().optional().default(!1),
	is_invalid_night: zd().optional().default(!1),
	needs_consensus: zd().optional().default(!1),
	notes: sd().nullable().optional(),
	sleep_period_detection_config: Ud(sd(), Dd()).nullable().optional()
}), Od({
	timestamps: Fd(Nd()).optional().default([]),
	axis_x: Fd(Nd()).optional().default([]),
	axis_y: Fd(Nd()).optional().default([]),
	axis_z: Fd(Nd()).optional().default([]),
	vector_magnitude: Fd(Nd()).optional().default([]),
	temperature: Fd(Nd()).optional().default([]),
	lux: Fd(Nd()).optional().default([]),
	melanopic_lux: Fd(Nd()).optional().default([]),
	ggir_timestamps: Fd(Nd()).optional().default([]),
	ggir_enmo: Fd(Nd()).optional().default([]),
	ggir_anglez: Fd(Nd()).optional().default([]),
	ggir_sib: Fd(Nd()).optional().default([]),
	timestamps_30s: Fd(Nd()).optional().default([]),
	axis_x_30s: Fd(Nd()).optional().default([]),
	axis_y_30s: Fd(Nd()).optional().default([]),
	axis_z_30s: Fd(Nd()).optional().default([]),
	vector_magnitude_30s: Fd(Nd()).optional().default([])
})), dp = Od({
	resolution_id: sd(),
	epoch_length_seconds: Nd().int().positive(),
	category: sd(),
	source_type: sd().nullable().optional(),
	derived_from_resolution_id: sd().nullable().optional(),
	aggregation_method: sd().nullable().optional(),
	data: up,
	algorithm_results: Fd(Nd()).nullable().optional(),
	nonwear_results: Fd(Nd()).nullable().optional()
}), pp = (Od({
	data: up.optional(),
	epoch_resolutions: Fd(dp).optional().default([]),
	timestamps: Fd(Nd()).optional(),
	axis_x: Fd(Nd()).optional(),
	axis_y: Fd(Nd()).optional(),
	axis_z: Fd(Nd()).optional(),
	vector_magnitude: Fd(Nd()).optional(),
	temperature: Fd(Nd()).optional(),
	algorithm_results: Fd(Nd()).nullable().optional(),
	nonwear_results: Fd(Nd()).nullable().optional(),
	nonwear_results_choi_2011: Fd(Nd()).nullable().optional(),
	event_markers: Fd(Bd([Nd(), zd()])).optional().default([]),
	event_marker_timestamps: Fd(Nd()).optional().default([]),
	view_start: Nd().nullable().optional(),
	view_end: Nd().nullable().optional(),
	sensor_nonwear_periods: Fd(Od({
		start_timestamp: Nd(),
		end_timestamp: Nd()
	})).optional().default([]),
	device_nonwear_source: Zd(m).nullable().optional(),
	algorithmic_nonwear_masks: Ud(sd(), Fd(Nd())).optional()
}), i.diary_tolerance_minutes, i.nap_min_consecutive_epochs, i.epoch_length_seconds, () => R.waitFor(import("./cube-variants-DMYtElt7.js"))), fp = {
	warmVariantsForDay: async (...e) => (await pp()).scoreCountBasedHasibVariantsForDay(...e),
	withRecordingWakeThreshold: async (...e) => (await pp()).withRecordingWakeThreshold(...e)
}, mp = [
	"analysis_date",
	"epoch_length_seconds",
	"timestamps",
	"activity_counts",
	"sleep_scores",
	"choi_nonwear",
	"sensor_nonwear",
	"diary_onset_time",
	"diary_wake_time",
	"diary_nap_count",
	"diary_naps",
	"diary_nonwear",
	"diary_in_bed_time",
	"diary_out_bed_time",
	"is_weekend",
	"guider_targets",
	"anglez",
	"light",
	"temperature",
	"heart_rate",
	"detach_nonwear",
	"calibration_error",
	"imputed_fraction",
	"hdcza_window"
];
function hp(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function gp(e) {
	return JSON.stringify(e);
}
function yp(e) {
	const t = hp(e.config), n = hp(t?.signals) ?? t;
	return {
		...n ? { config: n } : {},
		days: e.days
	};
}
function wp(e) {
	return JSON.stringify(yp(e));
}
function _p(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function vp(e) {
	const t = _p(e), n = t?.analysis_date, a = _p(t?.intrinsic), i = a?.state;
	if (!t || "string" != typeof n || 0 === n.length || !a || "string" != typeof i || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(i)) return null;
	const s = a.score, r = a.verdict, o = a.infinite_reason, l = {}, c = [], u = t.per_guider;
	if (Array.isArray(u)) for (const h of u) {
		const e = _p(h);
		if (!e) continue;
		c.push(e);
		const t = e.guider;
		if ("string" != typeof t) continue;
		const n = e.confidence;
		Object.defineProperty(l, t, {
			value: "number" == typeof n && Number.isFinite(n) ? n : null,
			enumerable: !0,
			configurable: !0,
			writable: !0
		});
	}
	const d = _p(a.features), p = d && Array.isArray(d.feature_values) ? d : null, f = _p(a.legacy_complexity_features) ?? (null === p ? d : null) ?? {}, m = t.computed_at;
	return {
		difficulty: "number" == typeof s && Number.isFinite(s) ? s : null,
		state: i,
		verdict: "string" == typeof r ? r : null,
		infiniteReason: "string" == typeof o ? o : null,
		confidenceByGuider: l,
		features: f,
		featureVector: p,
		perGuider: c,
		computedAt: "string" == typeof m ? m : null,
		canonicalResult: t,
		canonicalIntrinsic: a
	};
}
const bp = /^[0-9a-f]{64}$/;
var Sp = class extends Error {
	constructor(e = !1) {
		super(e ? "Stored complexity evidence failed integrity verification." : "Complexity evidence failed integrity verification."), this.name = "ComplexityEvidenceIntegrityError";
	}
}, kp = class extends Error {
	constructor() {
		super("Complexity evidence diverged for an existing generation."), this.name = "ComplexityEvidenceDivergenceError";
	}
}, Ip = class extends Error {
	constructor() {
		super("Complexity evidence is older than the retained generation window."), this.name = "ComplexityEvidenceRetentionError";
	}
};
function Ap(e = !1) {
	throw new Sp(e);
}
function xp(e) {
	"string" == typeof e && bp.test(e) || Ap();
}
function Np(e) {
	"string" == typeof e && 0 !== e.length && Number.isFinite(Date.parse(e)) || Ap();
}
function Tp(e) {
	if (null === e) return "null";
	switch (typeof e) {
		case "string":
		case "boolean": return JSON.stringify(e);
		case "number": return Number.isFinite(e) || Ap(), JSON.stringify(Object.is(e, -0) ? 0 : e);
		case "object": {
			if (Array.isArray(e)) {
				const t = [];
				for (let n = 0; n < e.length; n += 1) n in e || Ap(), t.push(Tp(e[n]));
				return `[${t.join(",")}]`;
			}
			const t = Object.getPrototypeOf(e);
			t !== Object.prototype && null !== t && Ap(), Object.getOwnPropertySymbols(e).length > 0 && Ap();
			const n = e, a = [];
			for (const e of Object.keys(n).sort()) {
				const t = Object.getOwnPropertyDescriptor(n, e);
				t && "value" in t && t.enumerable || Ap(), a.push(`${JSON.stringify(e)}:${Tp(t.value)}`);
			}
			return `{${a.join(",")}}`;
		}
		default: return Ap();
	}
}
function Mp(e) {
	const t = Tp(e), n = JSON.parse(t);
	return (null == n || "object" != typeof n || Array.isArray(n)) && Ap(), n;
}
async function Rp(e) {
	return O(Tp(e));
}
function zp(e) {
	const t = e;
	for (const a of [
		"contractVersion",
		"crateVersion",
		"target",
		"semanticProfile",
		"profileProofStatus",
		"temporalBasis"
	]) "string" == typeof t[a] && "" !== t[a] || Ap();
	null === t.sourceRevision || "string" == typeof t.sourceRevision && "" !== t.sourceRevision || Ap(), xp(t.artifactSha256);
	const n = t.compiledFeatures;
	Array.isArray(n) && n.every((e) => "string" == typeof e && e.length > 0) || Ap(), Tp(e);
}
async function Ep(e, t) {
	"string" != typeof e && Ap(), void 0 !== t && xp(t);
	let n = 0;
	for (; n < e.length && /\s/.test(e[n]);) n += 1;
	let a = e.length - 1;
	for (; a >= n && /\s/.test(e[a]);) a -= 1;
	"{" === e[n] && "}" === e[a] || Ap();
	const i = await O(e);
	return void 0 !== t && t !== i && Ap(), i;
}
function Dp(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != typeof t || null === e || null === t) return !1;
	if (Array.isArray(e) || Array.isArray(t)) return !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((e, n) => Dp(e, t[n]));
	if ("object" != typeof e || "object" != typeof t) return !1;
	const n = Object.keys(e).sort(), a = Object.keys(t).sort();
	if (n.length !== a.length || n.some((e, t) => e !== a[t])) return !1;
	const i = e, s = t;
	return n.every((e) => Dp(i[e], s[e]));
}
function $p(e) {
	try {
		const t = JSON.parse(e);
		return (null === t || "object" != typeof t || Array.isArray(t)) && Ap(), t;
	} catch {
		return Ap();
	}
}
function Cp(e, t) {
	const n = Object.keys(e).sort(), a = [...t].sort();
	return n.length === a.length && n.every((e, t) => e === a[t]);
}
function Fp(e) {
	return "number" == typeof e && Number.isFinite(e);
}
function Pp(e) {
	return null === e || "string" == typeof e && e.length > 0;
}
function Op(e) {
	return Array.isArray(e) && e.every(Fp);
}
function jp(e) {
	return Array.isArray(e) && e.every((e) => Number.isInteger(e) && (0 === e || 1 === e));
}
function Bp(e, t) {
	return 0 === e.length || e.length === t;
}
function Gp(e) {
	Array.isArray(e) || Ap();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && Ap();
		const e = t, n = e.start_ts, a = e.end_ts;
		Cp(e, ["start_ts", "end_ts"]) && Fp(n) && Fp(a) && !(a < n) || Ap();
	}
}
function Lp(e, t) {
	Array.isArray(e) && e.length === t || Ap();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && Ap();
		const e = n;
		Cp(e, ["onset_time", "offset_time"]) && "string" == typeof e.onset_time && 0 !== e.onset_time.length && Pp(e.offset_time) || Ap();
	}
}
function Up(e) {
	Array.isArray(e) || Ap();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && Ap();
		const e = t;
		Cp(e, ["start_time", "end_time"]) && "string" == typeof e.start_time && 0 !== e.start_time.length && "string" == typeof e.end_time && 0 !== e.end_time.length || Ap();
	}
}
function Hp(e) {
	Array.isArray(e) || Ap();
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && Ap();
		const e = n, a = e.guider, i = e.detector, s = e.onset_ts, r = e.offset_ts;
		(!Cp(e, [
			"guider",
			"detector",
			"onset_ts",
			"offset_ts"
		]) || "string" != typeof a || 0 === a.length || t.has(a) || !Pp(i) || null !== s && !Fp(s) || null !== r && !Fp(r) || null === s && null === r) && Ap(), t.set(a, {
			detector: i,
			onset: s,
			offset: r
		});
	}
	return t;
}
function Zp(e) {
	if (null === e) return null;
	Array.isArray(e) && 2 === e.length || Ap();
	const t = e[0], n = e[1];
	return (!Fp(t) || !Fp(n) || n <= t) && Ap(), [t, n];
}
function qp(e, t) {
	const n = $p(e), a = void 0 === n.config ? ["days"] : ["config", "days"], i = n.days;
	Cp(n, a) && Array.isArray(i) || Ap(), void 0 === n.config || null !== n.config && "object" == typeof n.config && !Array.isArray(n.config) || Ap();
	const s = /* @__PURE__ */ new Set();
	for (const o of i) {
		(null === o || "object" != typeof o || Array.isArray(o)) && Ap();
		const e = o;
		Cp(e, mp) || Ap();
		const t = e.analysis_date, n = e.epoch_length_seconds, a = e.timestamps, i = e.activity_counts, r = e.sleep_scores, l = e.choi_nonwear, u = e.diary_nap_count, d = e.anglez, p = e.light, f = e.temperature, m = e.heart_rate, h = e.detach_nonwear, g = e.is_weekend, y = e.calibration_error, w = e.imputed_fraction;
		!("string" != typeof t || 0 === t.length || s.has(t) || "number" != typeof n || !Number.isInteger(n) || n <= 0) && Op(a) && 0 !== a.length && Op(i) && i.length === a.length && jp(r) && r.length === a.length && jp(l) && Bp(l, a.length) && Number.isInteger(u) && !(u < 0) && Pp(e.diary_onset_time) && Pp(e.diary_wake_time) && Pp(e.diary_in_bed_time) && Pp(e.diary_out_bed_time) && (null === g || "boolean" == typeof g) && Op(d) && Bp(d, a.length) && Op(p) && Bp(p, a.length) && Op(f) && Bp(f, a.length) && Op(m) && Bp(m, a.length) && jp(h) && Bp(h, a.length) && (null === y || Fp(y)) && (null === w || !(!Fp(w) || w < 0 || w > 1)) || Ap(), Gp(e.sensor_nonwear), Lp(e.diary_naps, u), Up(e.diary_nonwear);
		const _ = Hp(e.guider_targets), v = Zp(e.hdcza_window), b = _.get(c.HDCZA);
		(null === v && void 0 !== b || null !== v && (void 0 === b || null !== b.detector || b.onset !== v[0] || b.offset !== v[1])) && Ap(), s.add(t);
	}
	const r = n;
	return Dp($p(t), yp(r)) || Ap(), {
		difficulty: r,
		dates: s
	};
}
function Vp(e, t, n, a) {
	Cp(t, ["config", "days"]) || Ap(), Dp(t.config, e.difficulty.config ?? null) || Ap();
	const i = t.days;
	Array.isArray(i) && i.length === e.difficulty.days.length || Ap();
	for (let o = 0; o < i.length; o += 1) {
		const t = i[o], n = e.difficulty.days[o];
		(null === t || "object" != typeof t || Array.isArray(t) || null === n || "object" != typeof n || Array.isArray(n)) && Ap();
		const a = t, s = n;
		Cp(a, [
			"analysis_date",
			"epoch_length_seconds",
			"timestamps"
		]) && a.analysis_date === s.analysis_date && a.epoch_length_seconds === s.epoch_length_seconds && Dp(a.timestamps, s.timestamps) || Ap();
	}
	const s = Object.keys(n);
	(s.length !== e.dates.size || s.some((t) => !e.dates.has(t))) && Ap();
	const r = new Map(e.difficulty.days.map((e) => [e.analysis_date, e]));
	for (const [o, l] of Object.entries(n)) {
		(null === l || "object" != typeof l || Array.isArray(l)) && Ap();
		const e = l, t = vp(e.canonicalResult);
		null !== t && t.canonicalResult.analysis_date === o && Dp(e, t) || Ap();
	}
	if (null !== a) {
		const t = Object.keys(a);
		(t.length !== e.dates.size || t.some((t) => !e.dates.has(t))) && Ap();
		for (const [e, n] of Object.entries(a)) {
			(null === n || "object" != typeof n || Array.isArray(n)) && Ap();
			const t = n, a = r.get(e);
			t.analysis_date === e && Number.isInteger(t.epoch_length_seconds) && t.epoch_length_seconds === a?.epoch_length_seconds || Ap();
		}
	}
}
async function Wp(e) {
	return Rp(function(e) {
		return {
			evidenceContractId: e.evidenceContractId,
			difficultyMethodId: e.difficultyMethodId,
			signalsMethodId: e.signalsMethodId,
			requestContractId: e.requestContractId,
			sourceContentHash: e.sourceContentHash,
			runtimeIdentity: e.runtimeIdentity,
			difficultyRequestSha256: e.difficultyRequestSha256,
			signalsRequestSha256: e.signalsRequestSha256
		};
	}(e));
}
async function Jp(e) {
	try {
		zp(e.runtimeIdentity), null !== e.sourceContentHash && xp(e.sourceContentHash);
		const t = Mp(e.runtimeIdentity), n = await Ep(e.difficultyRequestWireJson, e.difficultyRequestSha256), a = await Ep(e.signalsRequestWireJson, e.signalsRequestSha256);
		qp(e.difficultyRequestWireJson, e.signalsRequestWireJson);
		const i = {
			evidenceContractId: "sleep-scoring.complexity-evidence.v1",
			difficultyMethodId: "actours.computeNightDifficulty",
			signalsMethodId: "actours.computeNightSignals",
			requestContractId: "FileDifficultyRequest",
			sourceContentHash: e.sourceContentHash,
			runtimeIdentity: t,
			difficultyRequestWireJson: e.difficultyRequestWireJson,
			signalsRequestWireJson: e.signalsRequestWireJson,
			difficultyRequestSha256: n,
			signalsRequestSha256: a
		};
		return {
			...i,
			generationKey: await Wp(i)
		};
	} catch (t) {
		if (t instanceof Sp) throw t;
		return Ap();
	}
}
async function Kp(e) {
	return Rp(function(e) {
		return {
			generationKey: e.generationKey,
			evidenceContractId: e.evidenceContractId,
			difficultyMethodId: e.difficultyMethodId,
			signalsMethodId: e.signalsMethodId,
			requestContractId: e.requestContractId,
			sourceContentHash: e.sourceContentHash,
			runtimeIdentity: e.runtimeIdentity,
			difficultyRequestSha256: e.difficultyRequestSha256,
			signalsRequestSha256: e.signalsRequestSha256,
			projectionSha256: e.projectionSha256,
			difficultyResultSha256: e.difficultyResultSha256,
			signalsResultSha256: e.signalsResultSha256,
			signalsPresent: null !== e.signalsResultSha256,
			createdAt: e.createdAt,
			updatedAt: e.updatedAt
		};
	}(e));
}
function Yp(e, t) {
	void 0 !== t && (null !== t && xp(t), e !== t && Ap());
}
async function Xp(e) {
	(!Number.isInteger(e.fileId) || e.fileId <= 0) && Ap(), void 0 !== e.id && (!Number.isInteger(e.id) || e.id <= 0) && Ap();
	for (const o of [
		e.generationKey,
		e.difficultyRequestSha256,
		e.signalsRequestSha256,
		e.projectionSha256,
		e.difficultyResultSha256,
		e.recordSha256
	]) xp(o);
	null !== e.signalsResultSha256 && xp(e.signalsResultSha256), null !== e.sourceContentHash && xp(e.sourceContentHash), "sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || Ap(), zp(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || Ap(), await Ep(e.difficultyRequestWireJson, e.difficultyRequestSha256), await Ep(e.signalsRequestWireJson, e.signalsRequestSha256);
	const t = qp(e.difficultyRequestWireJson, e.signalsRequestWireJson);
	Np(e.createdAt), Np(e.updatedAt), Date.parse(e.updatedAt) < Date.parse(e.createdAt) && Ap(), null === e.signalsByDate != (null === e.signalsResultSha256) && Ap();
	const n = Mp(e.projectionInput), a = Mp(e.difficultyByDate), i = null === e.signalsByDate ? null : Mp(e.signalsByDate);
	Vp(t, n, a, i);
	const s = {
		evidenceContractId: e.evidenceContractId,
		difficultyMethodId: e.difficultyMethodId,
		signalsMethodId: e.signalsMethodId,
		requestContractId: e.requestContractId,
		sourceContentHash: e.sourceContentHash,
		runtimeIdentity: Mp(e.runtimeIdentity),
		difficultyRequestWireJson: e.difficultyRequestWireJson,
		signalsRequestWireJson: e.signalsRequestWireJson,
		difficultyRequestSha256: e.difficultyRequestSha256,
		signalsRequestSha256: e.signalsRequestSha256
	};
	await Wp(s) !== e.generationKey && Ap(), await Rp(n) !== e.projectionSha256 && Ap(), await Rp(a) !== e.difficultyResultSha256 && Ap(), null !== i && await Rp(i) !== e.signalsResultSha256 && Ap();
	const r = {
		...void 0 !== e.id ? { id: e.id } : {},
		fileId: e.fileId,
		generationKey: e.generationKey,
		...s,
		projectionSha256: e.projectionSha256,
		difficultyResultSha256: e.difficultyResultSha256,
		signalsResultSha256: e.signalsResultSha256,
		recordSha256: e.recordSha256,
		projectionInput: n,
		difficultyByDate: a,
		signalsByDate: i,
		createdAt: e.createdAt,
		updatedAt: e.updatedAt
	};
	return await Kp(r) !== e.recordSha256 && Ap(), r;
}
async function Qp(e) {
	try {
		return await Xp(e);
	} catch {
		throw new Sp(!0);
	}
}
function ef(e, t, n = !1) {
	if (!t) throw new Sp(n);
	if (null !== e.sourceContentHash && t.sourceContentHash !== e.sourceContentHash) throw new Sp(n);
}
async function tf(e, t, n) {
	await sa({
		op: "complexity_evidence_put",
		fileId: e.fileId,
		payload: {
			kind: t,
			sourceBound: null !== e.sourceContentHash,
			signalsPresent: null !== e.signalsByDate,
			evictedCount: n
		}
	});
}
async function nf(e, t, n = Y()) {
	const [a, i] = await n.transaction("r", [n.files, n.complexityEvidence], async () => Promise.all([n.complexityEvidence.where("[fileId+generationKey]").equals([e, t]).first(), n.files.get(e)]));
	if (!a) return;
	const s = await Qp(a);
	return ef(s, i, !0), s;
}
function af(e, t, n, a) {
	return null === a ? null : {
		...a,
		binding: a?.binding ?? mt.captureWorkspaceBinding(e, t, n)
	};
}
async function sf(e, n = t()) {
	return 0 === e.length ? [] : n.consensusDisagreements(e.map(({ usersForDate: e, kind: t }) => function(e, t) {
		const n = [];
		for (const [a, i] of e) "auto_score" !== a && n.push("sleep" === t ? {
			name: a,
			periods: i.sleepMarkers.map((e) => ({
				start: e.onsetTimestamp ?? null,
				end: e.offsetTimestamp ?? null,
				label: e.markerType
			})),
			explicitNone: i.isInvalidNight
		} : {
			name: a,
			periods: i.nonwearMarkers.map((e) => ({
				start: e.startTimestamp ?? null,
				end: e.endTimestamp ?? null,
				label: ""
			})),
			explicitNone: Boolean(i.explicitNoNonwear)
		});
		return n;
	}(e, t)));
}
function rf(e) {
	const t = X().scoring(), n = [ii(tn(t, e).nonwearDetectorsCounts, t.showChoiNonwear), ii(vn(t.nonwearDetectorsGgir, e), t.showChoiNonwear)];
	return n.filter((e, t) => n.findIndex((t) => yi(t) === yi(e)) === t);
}
function of(e, t) {
	const n = [];
	let a = null;
	for (let i = 0; i < e.length; i++) 1 === e[i] && null === a ? a = t[i] ?? 0 : 1 !== e[i] && null !== a && (n.push({
		startTimestamp: a,
		endTimestamp: (t[i - 1] ?? a) + 60
	}), a = null);
	return null !== a && n.push({
		startTimestamp: a,
		endTimestamp: (t[e.length - 1] ?? a) + 60
	}), n;
}
function lf(e, t) {
	return [.../* @__PURE__ */ new Set([...e.availableDates, ...t])].sort();
}
function cf(e, t) {
	return e ? {
		detectors: [...e.detectors],
		any: Uint8Array.from(e.mask).buffer,
		weight: e.weight ? Float64Array.from(e.weight).buffer : null,
		grid: e.grid === t.timestamps ? "counts" : "ggir"
	} : null;
}
async function uf(e, { file: t, sets: n, capsense: a, db: i, signal: s }) {
	const r = n.filter((t) => !(yi(t) in (e.displayNonwear ?? {})));
	if (0 === r.length) return;
	const o = V(s), l = await za(e, Re, "navigation facts", Ia(), o);
	if (!l) return;
	bn(l.timestamps, nn(e, t));
	const c = Wa(t.sourceType, t.sourceProfileId), u = {};
	for (const [m, h] of Object.entries(l.nonwearMasksByDetector)) 0 === h.length || Ya(m) || (u[m] = h);
	const d = {
		algorithmicNonwearMasks: u,
		timestamps: l.timestamps,
		ggirTimestamps: l.ggirTimestamps,
		sensorNonwearPeriods: "detach_mask" === ri(c) && l.detachNonwear ? of(l.detachNonwear, l.timestamps) : a,
		deviceNonwearSource: c
	}, p = { ...e.displayNonwear }, f = await Promise.all(r.map((e) => (s?.throwIfAborted(), li(d, e, o))));
	for (const [m, h] of r.entries()) p[yi(h)] = cf(f[m], d);
	await un(e.fileId, e.date, p, {
		seriesRevision: t.seriesRevision ?? 0,
		nonwearBandGeneration: t.nonwearBandGeneration ?? 0
	}, i, s);
}
const df = /* @__PURE__ */ new WeakMap();
function pf(e, t, n) {
	let a = df.get(t);
	a || df.set(t, a = /* @__PURE__ */ new Map());
	const i = a.get(e);
	if (i) return w(i, n);
	const s = async function(e, t, n) {
		n?.throwIfAborted();
		const a = await ge(e, t);
		if (!a || "incomplete" === a.ingestState) return;
		const i = await In(e, t);
		let s = a.navigationFacts;
		(function(e, t) {
			const n = e?.navigationFacts;
			if (!e || 1 !== n?.version) return !1;
			const a = lf(e, t);
			return n.dates.length === a.length && n.dates.every((e, t) => e === a[t]);
		})(a, i) || (s = await async function(e, t, n, a) {
			const i = V(a), s = {}, r = async (e) => {
				a?.throwIfAborted();
				const t = await i.nextDate(e);
				void 0 !== t && (s[e] = t);
			};
			await Promise.all(t.map(r)), await Promise.all(Object.values(s).filter((e) => !(e in s)).map(r));
			const o = {}, l = {};
			await Promise.all(e.availableDates.map(async (e) => {
				a?.throwIfAborted();
				const [t, n] = await Promise.all([i.analysisWindowBounds(e), i.analysisWindowBounds(e, 48)]);
				t && (o[e] = [t[0], t[1]]), n && (l[e] = [n[0], n[1]]);
			}));
			const c = await Ja(n), u = await si(e, c, a), d = [...new Set([u.zone, u.reason ? c : null].filter((e) => Boolean(e)))], p = {};
			return await ze((t) => {
				for (const n of d) {
					const a = {};
					for (const i of e.availableDates) {
						const e = t.dstTransitionOnNight(n, i);
						e && (a[i] = e);
					}
					p[n] = a;
				}
			}, new je(i)), {
				version: 1,
				dates: [...t],
				next: s,
				window: o,
				view48: l,
				dst: p,
				dstZone: {
					...u,
					studyZone: c
				}
			};
		}(a, lf(a, i), t, n), n?.throwIfAborted(), await t.files.update(e, { navigationFacts: s }));
		const r = rf(a), o = r.map(yi), l = a.seriesRevision ?? 0;
		if (s?.bands?.seriesRevision === l && o.every((e) => s.bands.keys.includes(e))) return;
		const c = "sensor_rows" === ri(Wa(a.sourceType, a.sourceProfileId)) ? (await qt(e, t)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : [];
		for (const u of i) {
			n?.throwIfAborted();
			const i = await Dt(e, u, t);
			i && await uf(i, {
				file: a,
				sets: r,
				capsense: c,
				db: t,
				signal: n
			});
		}
		await t.transaction("rw", t.files, async () => {
			const i = await t.files.get(e);
			i?.navigationFacts && (i.seriesRevision ?? 0) === l && (i.nonwearBandGeneration ?? 0) === (a.nonwearBandGeneration ?? 0) && (n?.throwIfAborted(), await t.files.update(e, { navigationFacts: {
				...i.navigationFacts,
				bands: {
					keys: o,
					seriesRevision: l
				}
			} }));
		});
	}(e, t, n).catch((e) => {
		n?.throwIfAborted(), console.warn("[navigation-facts] A file's navigation facts could not be stored.", e);
	}).finally(() => {
		a.delete(e);
	});
	return a.set(e, s), s;
}
function ff(e, t) {
	for (const n of e) {
		const e = n.epochResolutions?.find((e) => e.category === t && !e.derivedFromResolutionId);
		if (e) return e.epochLengthSeconds;
	}
	return null;
}
function mf(e, t) {
	const n = "counts" === t ? e.timestamps : e.ggirTimestamps;
	return n ? Math.floor(n.byteLength / Float64Array.BYTES_PER_ELEMENT) : 0;
}
function hf(e) {
	return "number" != typeof e ? String(e) : (/* @__PURE__ */ new Date(1e3 * e)).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: !1,
		timeZone: "UTC"
	});
}
function gf(e) {
	if ("object" != typeof e || null === e) return String(e).slice(0, 60);
	const t = e;
	return "onsetTimestamp" in t && "offsetTimestamp" in t ? `${hf(t.onsetTimestamp)}–${hf(t.offsetTimestamp)}` : "startTimestamp" in t && "endTimestamp" in t ? `${hf(t.startTimestamp)}–${hf(t.endTimestamp)}` : JSON.stringify(t).slice(0, 60);
}
function yf(e, t = "(unset)") {
	if (void 0 === e) return t;
	if (null === e) return t;
	const n = "string" == typeof e ? e : JSON.stringify(e);
	return n.length > 48 ? `${n.slice(0, 45)}…` : n;
}
function wf(e) {
	const t = e.rowCount, n = e.dayCount, a = [`${yf(e.subject, "export")} (${yf(e.format, "?")})`, yf(e.filename, "")].filter((e) => "" !== e), i = ["number" == typeof t ? `${t} rows` : null, "number" == typeof n ? `${n} day${1 === n ? "" : "s"}` : null].filter((e) => null !== e);
	return i.length > 0 ? `${a.join(" · ")} — ${i.join(", ")}` : a.join(" · ");
}
function _f(e, t, n, a) {
	const i = n?.exportId;
	return "export_started" === t && "string" == typeof i && a.has(i) ? "" === e ? "outcome unknown" : `${e} · outcome unknown` : e;
}
function vf(e, t) {
	const n = r({
		action: t ?? "",
		payload: e
	}), a = n.payload ?? e;
	switch (void 0 === t ? void 0 : n.action) {
		case "session_start": {
			const e = Array.isArray(a.sleepMarkers) ? a.sleepMarkers : [], t = Array.isArray(a.nonwearMarkers) ? a.nonwearMarkers : [];
			let n = `Loaded ${e.length} sleep, ${t.length} nonwear`;
			return a.isInvalidNight && (n += " | Invalid Night"), a.needsConsensus && (n += " | Flagged"), n;
		}
		case "session_end": return "Session ended";
		case "marker_placed": {
			const e = a.category ?? "sleep", t = a.periodIndex ?? "?", n = a.markerType ? ` (${a.markerType})` : "";
			return "onsetTimestamp" in a ? `${e} #${t}${n}: ${hf(a.onsetTimestamp)}–${hf(a.offsetTimestamp)}` : "startTimestamp" in a ? `${e} #${t}: ${hf(a.startTimestamp)}–${hf(a.endTimestamp)}` : `${e} #${t}${n}`;
		}
		case "sleep_period_split": return `sleep #${a.periodIndex ?? "?"} split at ${hf(a.at)}`;
		case "sleep_period_merged": return `sleep #${a.periodIndex ?? "?"} merged ${a.direction ?? "?"}`;
		case "marker_adjusted": {
			const e = a.updates ?? {}, t = a.category ?? "?", n = a.periodIndex ?? "?", i = [];
			return void 0 !== e.onsetTimestamp && i.push(`onset → ${hf(e.onsetTimestamp)}`), void 0 !== e.offsetTimestamp && i.push(`offset → ${hf(e.offsetTimestamp)}`), void 0 !== e.startTimestamp && i.push(`start → ${hf(e.startTimestamp)}`), void 0 !== e.endTimestamp && i.push(`end → ${hf(e.endTimestamp)}`), void 0 !== e.markerType && i.push(`type → ${e.markerType}`), `${t} #${n}: ${i.join(", ")}`;
		}
		case "marker_moved": {
			const e = a.before, t = a.after;
			if (!e || !t) return "drag completed";
			const n = Array.isArray(e.sleepMarkers) ? e.sleepMarkers : [], i = Array.isArray(t.sleepMarkers) ? t.sleepMarkers : [];
			for (let a = 0; a < Math.max(n.length, i.length); a++) {
				const e = n[a], t = i[a];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `sleep #${a}: ${gf(e)} ⇒ ${gf(t)}`;
			}
			const s = Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : [], r = Array.isArray(t.nonwearMarkers) ? t.nonwearMarkers : [];
			for (let a = 0; a < Math.max(s.length, r.length); a++) {
				const e = s[a], t = r[a];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `nonwear #${a}: ${gf(e)} ⇒ ${gf(t)}`;
			}
			return "drag completed (no visible change)";
		}
		case "marker_deleted": {
			const e = a.category ?? "?", t = a.periodIndex ?? "?", n = a.before;
			return n ? `${e} #${t}: was ${gf(n)}` : `${e} #${t}`;
		}
		case "actiware_rest_edited": {
			const e = "string" == typeof a.edit ? a.edit : "?";
			return "add" === e ? `rest added: ${gf(a.to)}` : "remove" === e ? `rest removed: was ${gf(a.from)}` : `rest ${"move" === e ? "moved" : e}: ${gf(a.from)} ⇒ ${gf(a.to)}`;
		}
		case "markers_cleared": return `Cleared ${a.sleepCount ?? 0} sleep, ${a.nonwearCount ?? 0} nonwear`;
		case "undo":
		case "redo": {
			const e = a.sleepCount, t = a.nonwearCount;
			return "number" != typeof e && "number" != typeof t ? "" : `Restored: ${"number" == typeof e ? e : 0} sleep, ${"number" == typeof t ? t : 0} nonwear`;
		}
		case "auto_score_applied": return `${a.algorithm}: ${a.sleepCount ?? 0} sleep, ${a.napCount ?? 0} nap`;
		case "auto_nonwear_applied": {
			const e = Array.isArray(a.weights) ? a.weights.filter((e) => "string" == typeof e) : [], t = `${a.count ?? 0} nonwear periods detected`;
			return 0 === e.length ? t : `${t}: ${e.join("; ")}`;
		}
		case "markers_saved": {
			let e = `${a.sleepCount ?? 0} sleep, ${a.nonwearCount ?? 0} nonwear`;
			return a.notes && (e += ` | "${String(a.notes).slice(0, 50)}"`), a.isInvalidNight && (e += " | Invalid Night"), e;
		}
		case "invalid_night_toggled": {
			const e = a.value ? "Enabled" : "Disabled", t = a.clearedSleepMarkers, n = Array.isArray(t) ? t.length : 0;
			return 0 === n ? e : `${e} — cleared ${n} sleep marker${1 === n ? "" : "s"}`;
		}
		case "no_nonwear_toggled": return a.value ? "Confirmed no nonwear" : "No-nonwear cleared";
		case "consensus_toggled": return a.value ? "Flagged for consensus" : "Unflagged";
		case "candidate_copied": {
			const e = a.label ?? a.sourceUsername ?? "unknown", t = "nonwear" === a.kind ? `${a.nonwearCount ?? "?"} nonwear` : `${a.sleepCount ?? "?"} sleep`;
			return `From ${String(e)} (${t})`;
		}
		case "consensus_vote_cast": return null == a.candidateId ? "Vote withdrawn" : `Voted for candidate #${a.candidateId}`;
		case "consensus_resolved": {
			const e = a.kind;
			return "string" == typeof e && "" !== e ? `${e} consensus resolved` : "Consensus resolved";
		}
		case "transition_flagged": {
			const e = yf(a.intent, "mutation"), t = yf(a.guard, "?"), n = a.disposition, i = "refused_by_store" === n ? "refused" : "applied_with_violation" === n ? "applied anyway" : yf(n, "");
			return "" === i ? `${e} flagged: ${t}` : `${e} flagged: ${t} — ${i}`;
		}
		case "file_uploaded":
		case "file_processed":
		case "file_reprocessed":
		case "file_deleted": {
			const e = a.filename ?? "?", t = a.dateCount;
			return null == t ? String(e) : `${String(e)} (${String(t)} days)`;
		}
		case "notes_changed":
			if (void 0 !== a.after) {
				const e = yf(a.before, ""), t = yf(a.after, "");
				return "" === e ? `"${t}"` : `"${e}" → "${t}"`;
			}
			return a.text ? `"${String(a.text).slice(0, 60)}"` : a.notes ? `"${String(a.notes).slice(0, 60)}"` : `${a.length ?? "?"} chars`;
		case "settings_changed": return `${yf(a.scope, "?")} · ${yf(a.key, "?")}: ${yf(a.before)} → ${yf(a.after)}`;
		case "settings_reset": {
			const e = a.changed, t = yf(a.scope, "settings");
			if (!Array.isArray(e)) return `${t} reset to defaults`;
			if (0 === e.length) return `${t}: already at defaults`;
			const n = e.slice(0, 4).map((e) => yf(e, "?")).join(", "), i = e.length > 4 ? ", …" : "";
			return `${t}: ${String(e.length)} reset to default (${n}${i})`;
		}
		case "app_version_changed": return `${yf(a.before, "(first run)")} → ${yf(a.after, "?")}`;
		case "system_migration": return `${yf(a.subject, "schema")}: ${yf(a.before, "?")} → ${yf(a.after, "?")}`;
		case "data_exported": return wf(a);
		case "export_started": return `Started: ${wf(a)}`;
		case "export_cancelled": return `${yf(a.filename, "export")} — ${yf(a.reason, "cancelled")}`;
		case "preset_changed": {
			const e = yf(a.family, "preset"), t = yf(a.change, "changed"), n = yf(a.preset, "?"), i = a.before;
			return null == i ? `${e}: ${t} ${n}` : `${e}: ${t} ${n} (was ${yf(i)})`;
		}
		case "markers_synced": {
			const e = a.conflicts, t = a.errorCount;
			let n = `Pushed ${a.pushed ?? 0}, pulled ${a.pulled ?? 0}`;
			return "number" == typeof e && e > 0 && (n += `, ${e} conflict${1 === e ? "" : "s"}`), "number" == typeof t && t > 0 && (n += `, ${t} error${1 === t ? "" : "s"}`), n;
		}
		case "system_recalculation": return `Recalculated ${yf(a.subject, "derived data")}`;
		case "diary_staged": return `Staged ${a.staged ?? 0}, replaced ${a.replaced ?? 0}, skipped ${a.skipped ?? 0}`;
		case "diary_decision_recorded": return `Decided ${yf(a.ruleKind, "a rule")} → ${yf(a.outcome, "(no outcome)")} (${yf(a.scope, "unscoped")}, ${a.nights ?? 0} nights)`;
		case "diary_decision_state_saved": return `Saved decision state "${yf(a.restorePoint, "untitled")}" (${a.decisions ?? 0} decisions)`;
		case "diary_session_saved": {
			const e = yf(a.status, "saved"), t = yf(a.step, "an unknown step"), n = yf(a.sourceSha256Prefix, "an unnamed source");
			return "removed" === e ? `Removed the saved diary session for ${n}` : `Diary session ${n} saved as ${e} on ${t}`;
		}
		case "diary_decision_state_restored": return `Restored decision state "${yf(a.restorePoint, "untitled")}" (${a.reflagged ?? 0} reflagged, ${a.unflagged ?? 0} unflagged, ${a.nights ?? 0} nights)`;
		case "diary_decisions_reset": return `Reset ${a.decisions ?? 0} diary decisions across ${a.nights ?? 0} nights`;
		case "diary_attached": {
			const e = a.entryCount, t = a.matchBasis, n = ["number" == typeof e ? `${e} night${1 === e ? "" : "s"}` : null, "string" == typeof t && "" !== t ? `matched by ${t}` : null].filter((e) => null !== e).join(", ");
			return "" === n ? "Attached diary" : `Attached diary (${n})`;
		}
		case "diary_discarded": {
			const e = a.analysisDate;
			return null == e ? `Discarded ${yf(a.sourceKey, "diary")}` : `Discarded ${yf(a.sourceKey, "diary")} for ${yf(e, "?")}`;
		}
		case "diary_workspace_cleared": {
			const e = (e, t) => {
				const n = Number(a[e] ?? 0);
				return `${String(n)} ${t}${1 === n ? "" : "s"}`;
			};
			return `Cleared workspace diary (${e("staged", "staged night")}, ${e("occurrences", "response")})`;
		}
		case "diary_repaired": {
			const e = a.fields, t = Array.isArray(e) ? e.map((e) => yf(e, "?")).join(", ") : "";
			return "" === t ? `Repaired ${a.applied ?? 0} field${1 === a.applied ? "" : "s"}` : `Repaired ${a.applied ?? 0}: ${t}`;
		}
		case "diary_changed": {
			const e = a.fields, t = yf(a.change, "changed"), n = Array.isArray(e) ? e.map((e) => yf(e, "?")).join(", ") : "";
			return "" === n ? `Diary ${t}` : `Diary ${t}: ${n}`;
		}
		case "workspace_deleted": {
			const e = a.auditRowsDestroyed;
			return `${yf(a.displayName, "workspace")} deleted — ${a.auditRowsTotal ?? 0} audit rows, ${a.auditRowsReplicated ?? 0} replicated, ${e ?? 0} destroyed`;
		}
		case "audit_chain_reanchored": return `Restored ${a.restoredRows ?? 0} rows (restore ${String(a.restoreId ?? "?").slice(0, 8)})`;
		case "workspace_recovered": return `Recovered from backup ${yf(a.backupSha256, "?").slice(0, 8)} — ${yf(a.applied, "0")} changes put back, ${yf(a.skipped, "0")} skipped, ${yf(a.recordingsToReimport, "0")} recordings to import again`;
		case "access_changed": return `${yf(a.subject, "access")} · ${yf(a.scope, "?")}: ${yf(a.before)} → ${yf(a.after)}`;
		case "assignment_changed": {
			const e = a.fileCount, t = a.fileIds, n = "number" == typeof e ? e : Array.isArray(t) ? t.length : 0;
			return `${yf(a.change, "changed")} ${yf(a.subject, "assignment")} · ${yf(a.scope, "?")} (${n} file${1 === n ? "" : "s"})`;
		}
	}
	return Object.entries(a).slice(0, 5).map(([e, t]) => "number" == typeof t && e.toLowerCase().includes("timestamp") ? `${e}: ${hf(t)}` : "string" == typeof t && t.length > 50 ? `${e}: "${t.slice(0, 47)}..."` : Array.isArray(t) ? `${e}: [${t.length} items]` : "object" == typeof t && null !== t ? `${e}: {…}` : `${e}: ${JSON.stringify(t)}`).join(", ");
}
function bf(e) {
	return JSON.stringify(e.map((e) => ({
		start_timestamp: e.startTimestamp,
		end_timestamp: e.endTimestamp,
		marker_index: e.markerIndex
	})));
}
function Sf(e, t) {
	const n = (i = t, "mims_metrics" === (a = e ?? "generic") ? es(i, s) : "ggir_part5_daysummary" === a ? function(e, t) {
		const n = ts(e, t);
		return e.date_column || e.datetime_column || n.push({
			key: "date_column",
			message: "Map a date/day column for the daily summary table."
		}), n;
	}(i, s) : Qi(i, s));
	var a, i, s;
	if (0 !== n.length) throw new Error(function(e) {
		return `Column-mapped CSV settings are incomplete: ${e.map((e) => e.message).join(" ")} ${Ti}`;
	}(n));
}
function kf(e) {
	const t = /* @__PURE__ */ new Map();
	for (const a of e) "auto_score" !== a.username || a.algorithm !== z.VAN_HEES_2015 || a.isInvalidNight || t.set(a.date, kn(t.get(a.date), a));
	const n = /* @__PURE__ */ new Map();
	for (const [a, i] of t) {
		const e = i.sleepMarkers.filter((e) => e.markerType === ae.MAIN_SLEEP);
		if (1 !== e.length) continue;
		const t = e[0], s = t?.onsetTimestamp, r = t?.offsetTimestamp;
		"number" == typeof s && Number.isFinite(s) && "number" == typeof r && Number.isFinite(r) && r > s && n.set(a, [s, r]);
	}
	return n;
}
async function If(e, t) {
	const n = t.dailyGgirSummaries;
	if (!n) return /* @__PURE__ */ new Map();
	const a = await n.where("fileId").equals(e).toArray();
	return new Map(a.map((e) => [e.analysisDate, e]));
}
function Af(e) {
	return {
		id: e.id ?? 0,
		file_id: e.fileId,
		analysis_date: e.analysisDate,
		total_sleep_time_minutes: e.totalSleepTimeMinutes,
		waso_minutes: e.wasoMinutes,
		sleep_efficiency: e.sleepEfficiency,
		mvpa_minutes: e.mvpaMinutes,
		lpa_minutes: e.lpaMinutes,
		sedentary_minutes: e.sedentaryMinutes,
		l5_midpoint_hour: e.l5MidpointHour,
		m5_midpoint_hour: e.m5MidpointHour,
		intensity_gradient: e.intensityGradient,
		nonwear_minutes: e.nonwearMinutes,
		valid_hours: e.validHours,
		created_at: e.createdAt,
		updated_at: e.updatedAt
	};
}
function xf(e, t, n, a) {
	const i = t?.days.find((e) => e.analysis_date === n), s = e?.[n];
	if (!i || !s || !a) return [];
	const r = i.timestamps, o = i.epoch_length_seconds;
	if (0 === r.length || !Number.isFinite(o) || o <= 0) return [];
	const l = [];
	for (const [c, u, d] of [[
		"onset_candidates",
		"onset_candidate",
		"Onset candidate"
	], [
		"offset_candidates",
		"offset_candidate",
		"Offset candidate"
	]]) {
		const e = s[c];
		Array.isArray(e) && e.forEach((e, t) => {
			if (null == e || "object" != typeof e || Array.isArray(e)) return;
			const n = e, i = n.run_start_epoch, s = n.run_end_epoch;
			if (!Number.isInteger(i) || !Number.isInteger(s) || i < 0 || s < i || s >= r.length) return;
			const c = r[i], p = r[s];
			if (null == c || null == p || !Number.isFinite(c) || !Number.isFinite(p)) return;
			const f = p + o;
			if (f <= c) return;
			const m = "string" == typeof n.generation_execution_id ? n.generation_execution_id : null, h = `${u}:${String(i)}:${String(s)}:${String(t)}`;
			l.push({
				id: h,
				kind: u,
				start_timestamp: c,
				end_timestamp: f,
				source_start_epoch: i,
				source_end_epoch: s,
				source_index: t,
				label: `${d} ${String(t + 1)}`,
				evidence_id: `${m ?? a}#${h}`,
				projection_revision: a
			});
		});
	}
	return l;
}
const Nf = "wasm-parallel";
function Tf(e) {
	const t = e.compiledFeatures;
	return {
		...e,
		compiledFeatures: t.includes(Nf) ? t.filter((e) => e !== Nf) : [...t, Nf]
	};
}
function Mf(e, t) {
	const n = e.compiledFeatures.filter((e) => e !== Nf), a = t.compiledFeatures.filter((e) => e !== Nf);
	return e.contractVersion === t.contractVersion && e.crateVersion === t.crateVersion && e.sourceRevision === t.sourceRevision && e.target === t.target && e.semanticProfile === t.semanticProfile && e.profileProofStatus === t.profileProofStatus && e.temporalBasis === t.temporalBasis && e.artifactSha256 === t.artifactSha256 && n.length === a.length && n.every((e, t) => e === a[t]);
}
async function Rf(e, t, n, a, i = /* @__PURE__ */ new Map()) {
	const s = [];
	for (const l of [t, await Ta(t, void 0, a)]) {
		const r = e.get(l);
		if (!r) continue;
		let o = i.get(l);
		o || i.set(l, o = za(r, n, `listDatesStatus ${l}`, Ia(), a));
		const c = await o;
		if (!c) return null;
		s.push({
			unpacked: c,
			epochs: await vi(c.timestamps, t, a),
			ggir: await vi(c.ggirTimestamps, t, a)
		});
	}
	for (const l of i.keys()) l < t && i.delete(l);
	const r = (e, t) => {
		const n = [];
		for (const a of s) {
			const { startIndex: i, endIndex: s } = a[t];
			if (s <= i) continue;
			const r = e(a.unpacked), o = "epochs" === t ? a.unpacked.timestamps.length : a.unpacked.ggirTimestamps.length;
			if (null == r || r.length !== o) return null;
			for (let e = i; e < s; e += 1) n.push(r[e]);
		}
		return n;
	}, o = r((e) => e.timestamps, "epochs") ?? [];
	return 0 === o.length ? null : {
		timestamps: o,
		axisY: r((e) => e.axisY, "epochs"),
		sleepScores: r((e) => e.sleepScores, "epochs"),
		nonwearResults: r((e) => e.nonwearResults, "epochs"),
		temperature: r((e) => e.temperature, "epochs"),
		detachNonwear: r((e) => e.detachNonwear, "epochs"),
		ggirTimestamps: r((e) => e.ggirTimestamps, "ggir") ?? [],
		ggirAnglez: r((e) => e.ggirAnglez, "ggir") ?? []
	};
}
function zf(e, t) {
	const n = new Set(t.map((e) => e.analysis_date)), a = Object.keys(e);
	return n.size === t.length && a.length === n.size && a.every((e) => n.has(e));
}
function Ef(e) {
	const t = [...e.entries()].sort(([e], [t]) => e.localeCompare(t));
	let n = null, a = null;
	for (const [, r] of t) try {
		const e = he(r).timestamps;
		if (0 === e.length) continue;
		const t = e[0];
		if (null != t && Number.isFinite(t)) {
			n = t;
			break;
		}
	} catch {}
	for (let r = t.length - 1; r >= 0; r -= 1) {
		const e = t[r]?.[1];
		if (e) try {
			const t = he(e).timestamps;
			if (0 === t.length) continue;
			const n = t[t.length - 1];
			if (null != n && Number.isFinite(n)) {
				a = n;
				break;
			}
		} catch {}
	}
	if (null == n || null == a || a < n) return null;
	const i = 1e3 * n, s = 1e3 * a;
	return Number.isFinite(i) && Number.isFinite(s) ? {
		start: i,
		end: s
	} : null;
}
async function Df(e, t, n, a, i, s, r) {
	const o = [], l = [];
	for (const c of new Set(t)) {
		let t = null;
		for (const o of e) if (o && 0 !== he(o).timestamps.length && (await Cr(o, c, n, i, void 0, s, r), t = la(c, _a(o, n), a), null !== t)) break;
		null === t ? o.push(c) : l.push({
			detector: c,
			reason: t
		});
	}
	return {
		available: o,
		dropped: l
	};
}
function $f({ available: e, dropped: t }) {
	return 0 === e.length && t.length > 0 ? t.map((e) => e.reason).join("; ") : null;
}
function Cf(e) {
	if (!e) return {
		choiNonwear: null,
		nonwearWeight: null,
		nonwearMemberFlags: null,
		nonwearDetectors: []
	};
	const t = e.available.length > 1;
	return {
		choiNonwear: e.flagged,
		nonwearWeight: t ? e.weight : null,
		nonwearMemberFlags: t ? e.memberFlags : null,
		nonwearDetectors: e.available
	};
}
function Ff(e) {
	return 1 === e.length && ma(e[0]);
}
function Pf(e, t, n) {
	const a = e?.byDate[t];
	return a ? "refused" === a.kind ? a.reason : null : function(e) {
		const t = e?.sleepPeriodDetectionConfig?.[mm];
		return "string" == typeof t ? t : null;
	}(n);
}
async function Of(e, t) {
	if (!("placementResults" in e)) return;
	const n = await e.placementResults.get(t);
	return 2 === n?.policy ? n : void 0;
}
function jf(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let a = 0; a < t; a += 1) {
		const t = e[a];
		if (null == t || !Number.isFinite(t)) return [];
		n[a] = t;
	}
	return n;
}
function Bf(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let a = 0; a < t; a += 1) {
		const t = e[a];
		if (0 !== t && 1 !== t) return [];
		n[a] = t;
	}
	return n;
}
function Gf(e, t, n) {
	if (t.length !== e.length || n.length !== e.length) return [];
	const a = new Array(e.length);
	for (let i = 0; i < e.length; i += 1) {
		const s = t[i], r = e[i], o = n[i];
		if (null == s || null == r || s !== r || null == o || !Number.isFinite(o)) return [];
		a[i] = o;
	}
	return a;
}
function Lf(e, t, n, a, i, s) {
	const r = [], o = null == t ? null : s.resolveInstant(t, e, De.evening_onset, i), l = null == n ? null : s.resolveInstant(n, e, De.morning_offset, i);
	return null == o && null == l || r.push({
		guider: c.DIARY,
		detector: null,
		onset_ts: o,
		offset_ts: l
	}), null != a && r.push({
		guider: c.HDCZA,
		detector: null,
		onset_ts: a[0],
		offset_ts: a[1]
	}), r;
}
function Uf(e) {
	return `complexity-evidence:${e.generationKey}`;
}
function Hf(e) {
	return {
		generationKey: e.generationKey,
		evidenceContractId: e.evidenceContractId,
		sourceContentHash: e.sourceContentHash,
		difficultyRequestSha256: e.difficultyRequestSha256,
		signalsRequestSha256: e.signalsRequestSha256,
		projectionSha256: e.projectionSha256,
		difficultyResultSha256: e.difficultyResultSha256,
		signalsResultSha256: e.signalsResultSha256,
		recordSha256: e.recordSha256
	};
}
function Zf(e) {
	return e.projectionInput;
}
function qf(e) {
	return e.difficultyByDate;
}
function Vf(e) {
	return e.signalsByDate;
}
function Wf(e, t, n, a) {
	return {
		has_markers: v(e),
		has_nonwear: l(e),
		is_invalid_night: e?.isInvalidNight ?? !1,
		needs_consensus: e?.needsConsensus ?? !1,
		auto_flagged: t,
		has_auto_score: (n?.sleepMarkers?.length ?? 0) > 0 || !0 === n?.isInvalidNight,
		auto_score_unavailable_reason: a
	};
}
async function Jf(e, t, n, a) {
	const [i, s] = await Promise.all([a.markers.where("[fileId+date+username]").between([
		e,
		t,
		""
	], [
		e,
		t,
		"￿"
	], !0, !0).toArray(), Of(a, e)]), r = /* @__PURE__ */ new Map();
	for (const c of i) r.set(c.username, kn(r.get(c.username), c));
	const o = r.size >= 2 && (await sf([{
		usersForDate: r,
		kind: "sleep"
	}, {
		usersForDate: r,
		kind: "nonwear"
	}])).some((e) => e.disagree), l = r.get(jn);
	return Wf(r.get(n), o, l, Pf(s, t, l));
}
function Kf(e) {
	return JSON.stringify((e ?? []).map((e) => [e.startTimestamp ?? null, e.endTimestamp ?? null]));
}
function Yf(e) {
	const t = e ? null : X().scoring(), n = e?.nightStartHour ?? t?.nightStartHour ?? a.night_start_hour, i = e?.nightEndHour ?? t?.nightEndHour ?? a.night_end_hour, s = parseInt(n.split(":")[0] ?? "21", 10), r = parseInt(i.split(":")[0] ?? "9", 10);
	return {
		nightStartHour: Number.isNaN(s) ? 21 : s,
		nightEndHour: Number.isNaN(r) ? 9 : r
	};
}
const Xf = /* @__PURE__ */ new Set(), Qf = /* @__PURE__ */ new WeakMap();
function em(e, t, n, a) {
	const i = Qf.get(e) ?? /* @__PURE__ */ new Map();
	Qf.set(e, i);
	const s = i.get(t);
	if (s) {
		let r;
		return {
			run: s.run.catch((o) => {
				if (!s.signal?.aborted || n?.aborted) throw o;
				return i.get(t) === s && i.delete(t), r = em(e, t, n, a), r.run;
			}),
			release: () => r?.release()
		};
	}
	const r = {
		run: a(),
		signal: n
	};
	return i.set(t, r), {
		run: r.run,
		release: () => {
			i.get(t) === r && i.delete(t);
		}
	};
}
function tm(e, t, n, a) {
	return Q({
		kind: U.NIGHT_DIFFICULTY,
		key: `${U.NIGHT_DIFFICULTY}:${String(e)}`,
		label: "Update night difficulty",
		workspaceId: t.name,
		signal: a,
		rerun: !0,
		run: async (a) => {
			const i = new om();
			try {
				if (a.signal.throwIfAborted(), a.progress(0, 2), Y() !== t) return;
				const s = await ge(e, t);
				if (!s || "incomplete" === s.ingestState) return;
				await pf(e, t, a.signal), a.signal.throwIfAborted(), a.progress(1, 2);
				const r = s.nightDifficulty, o = n ?? (r ? {
					nightStartHour: `${String(r.nightStartHour).padStart(2, "0")}:00`,
					nightEndHour: `${String(r.nightEndHour).padStart(2, "0")}:00`
				} : void 0);
				await i.computeDatesStatus(e, s.availableDates, X().scoring().username || "anonymous", o, a.signal), a.progress(2, 2);
			} finally {
				i.dispose();
			}
		}
	}).catch((e) => {
		e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] Stored night difficulty could not be refreshed.", e);
	});
}
We((e, t, n) => {
	tm(e, t, void 0, n);
});
const nm = /* @__PURE__ */ new WeakMap();
function am(e, t, n, a, i) {
	i?.throwIfAborted();
	let s = nm.get(e);
	return s || (s = /* @__PURE__ */ new Map(), nm.set(e, s)), s.set(t, {
		inputs: n,
		byDate: a
	}), a;
}
const im = /* @__PURE__ */ new WeakMap();
function sm(e, t) {
	let n = im.get(e);
	n || im.set(e, n = /* @__PURE__ */ new Map());
	const a = dn(t);
	let i = n.get(a);
	return i || n.set(a, i = Te(e.values(), t)), i;
}
function rm(e) {
	return {
		sleepMarkers: e.sleepMarkers,
		nonwearMarkers: e.nonwearMarkers,
		manualNonwearVerdictPending: void 0 === e.manualNonwearInSleep,
		...void 0 !== e.manualNonwearInSleep ? { manualNonwearInSleep: e.manualNonwearInSleep } : {},
		isInvalidNight: e.isInvalidNight,
		...!0 === e.isInvalidNightImplicit ? { isInvalidNightImplicit: !0 } : {},
		explicitNoNonwear: e.explicitNoNonwear ?? !1,
		notes: e.notes,
		needsConsensus: e.needsConsensus ?? !1,
		sleepPeriodDetectionConfig: e.sleepPeriodDetectionConfig ?? null,
		contentHash: e.contentHash,
		storedAlgorithm: e.algorithm,
		storedDetectionRule: e.detectionRule ?? null
	};
}
var om = class a {
	sourceKey = "local";
	nightRecordData = Ar;
	sourceAnalyses;
	services;
	disposed = !1;
	operationProcessingOptions;
	constructor(e, { sourceAnalyses: t = xr, services: n = fp } = {}) {
		this.operationProcessingOptions = e, this.sourceAnalyses = t, this.services = n;
	}
	fileBatches = /* @__PURE__ */ new Map();
	beginFileBatch(e, t = Y(), n) {
		let a = this.fileBatches.get(e);
		a && a.db === t || (a = {
			db: t,
			signal: n,
			depth: 0,
			savedNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map()
		}, this.fileBatches.set(e, a));
		const i = a;
		i.depth += 1;
		let s = !1;
		return { end: async () => {
			s || (s = !0, i.depth -= 1, i.depth > 0 || (this.fileBatches.get(e) === i && this.fileBatches.delete(e), 0 === i.savedNights.size || i.signal?.aborted || await this.sourceAnalyses.reduce(async (t, n) => {
				await t;
				const a = i.savedNights.get(n.id);
				a && await n.followDeferredNights?.({
					fileId: e,
					nights: a,
					analysisParadigm: X().scoring().analysisParadigm,
					db: i.db,
					signal: i.signal
				});
			}, Promise.resolve())));
		} };
	}
	reanalyze(e, t, n) {
		return Tr(this.sourceAnalyses, e, "reanalyze")?.reanalyze(e, t, {
			...n,
			services: this.services
		}) ?? null;
	}
	fileBatch(e, t) {
		const n = this.fileBatches.get(e);
		return n?.db === t ? n : null;
	}
	placementDiaries(e, t, n = this.fileBatch(e, t)) {
		return n?.days ? n.diaries ??= gt(e, t) : gt(e, t);
	}
	async placementDiary(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? (await this.placementDiaries(e, n, a)).find((e) => e.analysisDate === t) ?? null : ft(e, t, n);
	}
	async placementMarker(e, t, n, a, i = this.fileBatch(e, a)) {
		if (!i?.days) return ut(e, t, jn, n, void 0, a);
		const s = await (i.markers ??= a.markers.where("fileId").equals(e).toArray()), r = ot(s, {
			date: t,
			username: jn
		}, n);
		return r ? xe(r) : void 0;
	}
	async placementDay(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? a.days.get(t) : Dt(e, t, n, a?.activityDayMemo);
	}
	async scorerVerdict(e, t, n, a, i = this.fileBatch(t, e)) {
		return i?.days ? sm(i.days, n) : i?.activityDayMemo ? sm(await on(t, e, i.activityDayMemo), n) : (await nt(t, e, a))(n);
	}
	complexitySnapshotByFile = /* @__PURE__ */ new Map();
	complexityGenerationByFile = /* @__PURE__ */ new Map();
	complexitySignalGenerationByFile = /* @__PURE__ */ new Map();
	complexityFailureByFile = /* @__PURE__ */ new Map();
	latestComplexityTokenByFile = /* @__PURE__ */ new Map();
	nextComplexityGenerationToken = 0;
	publishComplexitySnapshot(e, t, n) {
		for (n?.throwIfAborted(), this.complexitySnapshotByFile.delete(e), this.complexitySnapshotByFile.set(e, t); this.complexitySnapshotByFile.size > 2;) {
			const e = this.complexitySnapshotByFile.keys().next().value;
			if (null == e) break;
			this.complexitySnapshotByFile.delete(e), this.complexitySignalGenerationByFile.delete(e);
		}
	}
	async awaitNewerComplexitySnapshot(e, t) {
		const n = this.latestComplexityTokenByFile.get(e);
		if (this.disposed || null == n || n === t) throw new Error("The local workspace changed while difficulty was being computed.");
		const a = this.complexityGenerationByFile.get(e);
		if (a?.token === n) return a.promise;
		const i = this.complexityFailureByFile.get(e);
		if (i?.token === n) throw i.error;
		const s = this.complexitySnapshotByFile.get(e);
		if (s?.token === n) return s;
		throw new Error("A newer local difficulty generation replaced this result.");
	}
	capabilities = {
		supportsConsensus: !1,
		supportsAuditLog: !0,
		supportsComplexityBreakdown: !0,
		supportsBackgroundAutoScore: !1,
		markerPollIntervalMs: 0,
		datesStatusStaleTimeMs: 3e4,
		supportsRawAxes: !0,
		requiresAuthentication: !1,
		supportsLocalAutoScorePanel: !0
	};
	async loadFileDaySeries(e, t) {
		const n = Y(), a = await on(e, n, this.fileBatch(e, n)?.activityDayMemo), i = sm(a, t), s = [];
		for (const [r, o] of [...a].sort(([e], [t]) => e.localeCompare(t))) {
			const e = await za(o, i, `loadFileDaySeries ${r}`, Ia());
			e && s.push(e);
		}
		return s;
	}
	async loadActivityData(e, t, n) {
		const a = Y();
		let i, s = await ge(e, a), r = null;
		if (it(s)) {
			const { ensureSavedGgirNonwear: t } = await import("./ggir-import-DwL2Ybg_.js");
			try {
				r = await t(e, a, void 0, !1);
			} catch {
				i = "Saved GGIR nonwear recovery failed; recovered nonwear is unavailable.";
			}
			s = await ge(e, a);
		}
		const o = s?.navigationFacts;
		o?.window[t] || pf(e, a);
		const l = await Pa(e, t, a, void 0, o);
		if (!l) throw new Error(`No activity data found for fileId=${e} date=${t}. File may not be processed yet.`);
		const c = await this.scorerVerdict(a, e, n?.algorithm, { file: s }), u = await za(l, c, `loadActivityData ${t}`, Ia());
		if (!u) throw new Error(`Activity data for fileId=${e} date=${t} is corrupt; please reprocess.`);
		const d = await Ta(t, o), p = 48 === n?.viewHours ? [d, await Ta(d, o)] : [d], f = await Promise.all(p.map((t) => Dt(e, t, a, this.fileBatch(e, a)?.activityDayMemo))), m = [l];
		for (const k of f) {
			if (!k) break;
			m.push(k);
			const e = await za(k, c, "loadActivityData next-day", Ia());
			if (!e) throw new Error("Next-day activity data is corrupt; please reprocess.");
			const t = u.timestamps.length, n = e.timestamps.length;
			Ga(u.timestamps, e.timestamps), Ga(u.axisY, e.axisY), Ga(u.vectorMagnitude, e.vectorMagnitude), (u.axisX.length > 0 || e.axisX.length > 0) && (u.axisX.length < t && (u.axisX = new Array(t).fill(0)), Ga(u.axisX, e.axisX.length > 0 ? e.axisX : new Array(n).fill(0))), (u.axisZ.length > 0 || e.axisZ.length > 0) && (u.axisZ.length < t && (u.axisZ = new Array(t).fill(0)), Ga(u.axisZ, e.axisZ.length > 0 ? e.axisZ : new Array(n).fill(0))), (u.temperature.length > 0 || e.temperature.length > 0) && (u.temperature.length < t && (u.temperature = new Array(t).fill(NaN)), Ga(u.temperature, e.temperature.length > 0 ? e.temperature : new Array(n).fill(NaN))), (u.eventMarkers.length > 0 || e.eventMarkers.length > 0) && (u.eventMarkers.length < t && (u.eventMarkers = new Array(t).fill(0)), Ga(u.eventMarkers, e.eventMarkers.length > 0 ? e.eventMarkers : new Array(n).fill(0))), Ga(u.eventMarkerTimestamps, e.eventMarkerTimestamps), (u.lux.length > 0 || e.lux.length > 0) && (u.lux.length < t && (u.lux = new Array(t).fill(NaN)), Ga(u.lux, e.lux.length > 0 ? e.lux : new Array(n).fill(NaN))), (u.sleepScores.length > 0 || e.sleepScores.length > 0) && (u.sleepScores.length < t && (u.sleepScores = new Array(t).fill(0)), Ga(u.sleepScores, e.sleepScores.length > 0 ? e.sleepScores : new Array(n).fill(0))), (u.sleepScoreGaps.length > 0 || e.sleepScoreGaps.length > 0) && (u.sleepScoreGaps.length < t && (u.sleepScoreGaps = new Array(t).fill(0)), Ga(u.sleepScoreGaps, e.sleepScoreGaps.length > 0 ? e.sleepScoreGaps : new Array(n).fill(0))), (u.lstmTimestamps30s.length > 0 || e.lstmTimestamps30s.length > 0) && (u.lstmTimestamps30s = Ea(u.lstmTimestamps30s, e.lstmTimestamps30s), u.lstmSleepWake30s = Na(u.lstmSleepWake30s, e.lstmSleepWake30s)), ja(u, e, t, n), (u.ggirTimestamps.length > 0 || e.ggirTimestamps.length > 0) && (u.ggirSib = $a(u.ggirTimestamps, u.ggirSib, e.ggirTimestamps, e.ggirSib), u.ggirTimestamps = Ea(u.ggirTimestamps, e.ggirTimestamps), u.ggirEnmo = Ea(u.ggirEnmo, e.ggirEnmo), u.ggirAnglez = Ea(u.ggirAnglez, e.ggirAnglez));
		}
		u.ggirSib = Ra(u.ggirTimestamps, u.ggirSib);
		const { start: h, end: g } = await ti(t, 48 === n?.viewHours ? 48 : void 0, o), y = Wa(s?.sourceType, s?.sourceProfileId);
		let w = [];
		ma(y) ? w = (await ue(e, h, g, a)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : "detach_mask" === ri(y) && u.detachNonwear && (w = of(u.detachNonwear, u.timestamps));
		const _ = {};
		for (const [k, I] of Object.entries(u.nonwearMasksByDetector)) 0 !== I.length && (Ya(k) || (_[k] = I));
		const v = m.flatMap((e) => e.ggirTimestamps?.byteLength ? [e.ggirInvalid] : []);
		if (v.length > 0 && v.every((e) => void 0 !== e)) {
			const e = v.flatMap((e) => Array.from(new Uint8Array(e)));
			e.length === u.ggirTimestamps.length && (_[Ce.ggir_part2_invalid] = e);
		}
		bn(u.timestamps, ff(m, "count_sleep_wake")), bn(u.ggirTimestamps, ff(m, "ggir_sleep_period"));
		const b = function(e, t, n, a) {
			const i = {}, s = e.filter((e) => mf(e, "counts") > 0 || mf(e, "ggir") > 0);
			for (const r of rf(a)) {
				const e = yi(r);
				if (!s.every((t) => t.displayNonwear && e in t.displayNonwear)) continue;
				const a = s.map((t) => t.displayNonwear[e] ?? null), o = a.filter((e) => null !== e), l = o[0]?.grid;
				if (!l) {
					i[e] = null;
					continue;
				}
				if (o.some((e) => e.grid !== l)) continue;
				const c = o.some((e) => null !== e.weight), u = [], d = [];
				if (s.forEach((e, t) => {
					const n = a[t], i = n ? new Uint8Array(n.any) : new Uint8Array(mf(e, l));
					for (const a of i) u.push(a);
					if (c) for (const a of n?.weight ? new Float64Array(n.weight) : i) d.push(a);
				}), u.length !== ("counts" === l ? t : n)) continue;
				const p = new Set(o.flatMap((e) => e.detectors));
				i[e] = {
					detectors: r.filter((e) => p.has(e)),
					mask: u,
					weight: c ? d : null,
					grid: l
				};
			}
			return i;
		}(m, u.timestamps.length, u.ggirTimestamps.length, s ?? null);
		Object.keys(b).length < rf(s ?? null).length && pf(e, a);
		const S = await Fa(u, m, c, s);
		return {
			timestamps: u.timestamps,
			axisX: u.axisX,
			axisY: u.axisY,
			axisZ: u.axisZ,
			vectorMagnitude: u.vectorMagnitude,
			temperature: u.temperature,
			lux: u.lux,
			melanopicLux: [],
			eventMarkers: u.eventMarkers,
			eventMarkerTimestamps: u.eventMarkerTimestamps,
			ggirTimestamps: u.ggirTimestamps,
			ggirEnmo: u.ggirEnmo,
			ggirAnglez: u.ggirAnglez,
			ggirSib: u.ggirSib,
			...u.ggirTimestamps.length > 0 && 0 === u.ggirSib.length ? { ggirSibMissingReason: Ba(s, l) } : {},
			algorithmResults: u.sleepScores.length > 0 ? u.sleepScores : null,
			...u.sleepScoreGaps.length > 0 ? { algorithmResultGaps: u.sleepScoreGaps } : {},
			...n?.algorithm && !Ma(n.algorithm) && 0 === u.sleepScores.length && u.timestamps.length > 0 ? { scorerMissingReason: "stale" === c.status ? c.reason : Oa(n.algorithm, {
				sourceProfileId: s?.sourceProfileId,
				actiwareSleepWake: (await Pt(e, a))?.actiwareSleepWake
			}) } : {},
			lstmTimestamps30s: u.lstmTimestamps30s,
			lstmSleepWake30s: u.lstmSleepWake30s,
			nonwearResults: u.nonwearResults,
			nonwearResultsChoi2011: u.nonwearResultsChoi2011,
			vanHeesNonwear: u.vanHeesNonwear,
			algorithmicNonwearMasks: _,
			nonwearBands: b,
			...r ? { nonwearSourceLabels: { [Ce.ggir_saved]: r } } : {},
			...i ? { savedNonwearMissingReason: i } : {},
			epochResolutions: S,
			viewStart: h,
			viewEnd: g,
			sensorNonwearPeriods: w,
			deviceNonwearSource: y
		};
	}
	async loadMarkers(e, t, n, a, i, s) {
		const r = s ?? Y(), o = await ut(e, t, n, a, i, r);
		return o ? rm(o) : null;
	}
	async saveMarkers(e, t, n, a, i, s, r, o, l) {
		const c = o ?? Y(), u = X().scoring(), d = af(c, {
			username: n,
			studyId: u.selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, l), p = r?.signal ?? this.fileBatch(e, c)?.signal;
		let f, m = null, h = null, g = !1, y = r?.sleepPeriodDetection ?? u.sleepPeriodDetection;
		const w = await na({
			fileId: e,
			date: t,
			username: n,
			algorithm: i ?? null,
			detectionRule: s ?? null,
			signal: p
		}, c, async (o) => {
			const l = "function" == typeof a ? await a(o ? rm(o) : null) : {
				data: a,
				settings: r
			};
			if (!l) return null;
			m = l.data;
			const d = l.settings ?? r, w = f = await ge(e, c);
			m = {
				...m,
				sleepMarkers: await this.nightRecordData[ce(w, u.analysisParadigm)].sleepPeriodsToSave({
					fileId: e,
					date: t,
					isInvalidNight: m.isInvalidNight ?? o?.isInvalidNight ?? !1
				}, m.sleepMarkers, c)
			}, y = Ye({
				algorithm: i ?? "",
				sleepPeriodDetection: d?.sleepPeriodDetection ?? u.sleepPeriodDetection
			});
			const _ = y ? Mt(y) : null, v = void 0 === d?.periodGuider ? tn(u, w) : null, b = d?.periodGuider ?? v?.periodGuider, S = d?.periodGuider ?? (_ && !0 !== v?.placementFromSource ? xn(Fn(_)) : v?.periodGuider), k = i ? wt(i) : null, I = k ? ht(k) : null, A = await ut(e, t, n, i ?? null, s ?? null, c);
			g = !A || A.algorithm !== (i ?? null) || A.detectionRule !== (s ?? null) || JSON.stringify(A.sleepMarkers) !== JSON.stringify(m.sleepMarkers) || void 0 !== m.isInvalidNight && m.isInvalidNight !== A.isInvalidNight, h = void 0 !== m.nonwearMarkers && "auto_score" !== n ? Kf(A?.nonwearMarkers) : null;
			let x = m.sleepPeriodDetectionConfig ?? null;
			if (null === x) {
				const n = await ft(e, t, c);
				x = En({
					algorithm: i ?? null,
					periodGuider: fo(0, b, y),
					sleepPeriodDetection: y,
					diaryOnsetTime: Qt(n),
					diaryWakeTime: Ot(n)
				});
			}
			return {
				kind: "save",
				input: {
					signal: p,
					fileId: e,
					date: t,
					username: n,
					sleepMarkers: m.sleepMarkers,
					...void 0 !== m.nonwearMarkers ? { nonwearMarkers: m.nonwearMarkers } : {},
					...void 0 !== m.isInvalidNight ? { isInvalidNight: m.isInvalidNight } : {},
					...void 0 !== m.isInvalidNightImplicit ? { isInvalidNightImplicit: m.isInvalidNightImplicit } : {},
					...void 0 !== m.explicitNoNonwear ? { explicitNoNonwear: m.explicitNoNonwear } : {},
					notes: m.notes,
					...void 0 !== m.needsConsensus ? { needsConsensus: m.needsConsensus } : {},
					algorithm: i ?? null,
					detectionRule: s ?? null,
					periodGuider: S ?? null,
					sleepPeriodDetectionConfig: x,
					algorithmVersion: I,
					...void 0 !== d?.expected ? { expected: d.expected } : {},
					...void 0 !== d?.guardHashOnly ? { guardHashOnly: d.guardHashOnly } : {}
				}
			};
		}, null === d ? null : {
			...d,
			sleepPeriodDetection: d.sleepPeriodDetection ?? y
		});
		if (!w?.record || !m) return null;
		const _ = m, v = rm(w.record), b = {
			fileId: e,
			file: f,
			nights: /* @__PURE__ */ new Map([[t, _.sleepMarkers]]),
			sleepMarkersChanged: g,
			username: n,
			analysisParadigm: X().scoring().analysisParadigm,
			db: c,
			signal: p,
			openBatch: () => this.fileBatch(e, c)
		};
		if (await this.sourceAnalyses.reduce(async (e, t, n) => !!(await e || n > 0 && p?.aborted) || (Nr(t, f, "followSavedNights") && await t.followSavedNights(b), !1), Promise.resolve(!1))) return v;
		null !== h && h !== Kf(_.nonwearMarkers) && tm(e, c, void 0, p), g && ut(e, t, n, i ?? null, s ?? null, c).then(async (t) => {
			if (!t) return;
			const { storeNightPeriodMetrics: n } = await import("./local-export-shard-worker-Okf1DPvY.js").then((e) => e.L);
			return n(t, await this.scorerVerdict(c, e, t.algorithm), c, p);
		}).catch(() => {
			console.warn("[local-analysis] period metrics could not be stored with the saved night");
		});
		try {
			if (Y() !== c) return v;
		} catch {
			return v;
		}
		const S = Ct();
		if (!S.capabilities.tauri) return v;
		try {
			const [a, r] = await Promise.all([ge(e, c), ut(e, t, n, i ?? null, s ?? null, c)]);
			if (!a?.fileHash || !r?.contentHash) return v;
			await S.workspace.saveMarkers({
				fileHash: a.fileHash,
				date: t,
				username: n,
				sleepMarkers: (k = _.sleepMarkers, JSON.stringify(k.map((e) => ({
					onset_timestamp: e.onsetTimestamp,
					offset_timestamp: e.offsetTimestamp,
					marker_index: e.markerIndex,
					marker_type: e.markerType
				})))),
				nonwearMarkers: bf(r.nonwearMarkers),
				isInvalidNight: r.isInvalidNight,
				notes: _.notes,
				contentHash: r.contentHash
			});
		} catch {
			console.warn("[platform] native marker mirror failed for the active local selection");
		}
		var k;
		return v;
	}
	async listFiles() {
		const e = Y();
		return (await Se(e)).map((e) => {
			const t = e.id ?? 0, n = B(e);
			return {
				id: t,
				filename: e.filename,
				source: "local",
				available_dates: e.availableDates,
				participant_id: e.participantId ?? null,
				source_type: n,
				source_profile_id: e.sourceProfileId ?? null,
				...void 0 !== e.ggirBundleRevision ? { ggir_bundle_revision: e.ggirBundleRevision } : {},
				...e.ggirNonwearDetector ? { ggir_nonwear_detector: e.ggirNonwearDetector } : {},
				views: y(t, n, /* @__PURE__ */ new Set(), e.epochLengthSeconds),
				count_epoch_seconds: e.epochLengthSeconds
			};
		});
	}
	async listDates(e) {
		const t = Y();
		return (await ge(e, t))?.availableDates ?? In(e, t);
	}
	async getDiaryEntry(e, t) {
		const n = Y(), a = await ft(e, t, n);
		return a ? we(a, await Dn(e, n)) : null;
	}
	async listDiaryEntries(e) {
		const t = Y(), n = await gt(e, t);
		if (0 === n.length) return n;
		const a = await Dn(e, t);
		return null === a ? n : Rn(n, a);
	}
	async loadPlacementFileContext(e, t, n, a, i, s, r, o, l, c, u, d = this.fileBatch(e, s)) {
		if (!d) return this.readPlacementFileContext(e, t, a, i, s, r, o, l, c, u, null);
		const p = JSON.stringify([
			n ?? null,
			r,
			o,
			l,
			i,
			c
		]);
		let f = d.placementContexts.get(p);
		f || (f = this.readPlacementFileContext(e, null, a, i, s, r, o, l, c, u, d), d.placementContexts.set(p, f), f.catch(() => {
			d.placementContexts.delete(p);
		}));
		const { contextDays: m, deviceOffNonwear: h } = await f;
		return {
			contextDays: m.filter((e) => e.analysisDate !== t),
			deviceOffNonwear: h
		};
	}
	async readPlacementFileContext(e, t, n, a, i, s, r, o, l, c, u) {
		const d = V(c), [p, f, m, h] = await Promise.all([
			u?.days ? [...u.days.keys()].sort() : In(e, i),
			this.placementDiaries(e, i, u),
			Ff(s) ? zn(e, i) : $n(e, i),
			i.files.get(e)
		]), g = await Rn(f, a, d), y = new Map(g.map((e) => [e.analysisDate, e])), w = [], _ = p.filter((e) => e !== t), v = await Promise.all(_.map((t) => this.placementDay(e, t, i, u)));
		for (const [b, S] of _.entries()) {
			const e = v[b];
			if (!e) continue;
			for (const n of s) await Cr(e, n, l, i, d, c, u?.activityDayMemo);
			const t = await za(e, n, `autoScore context ${S}`, l, d);
			if (!t || 0 === t.timestamps.length || 0 === t.sleepScores.length) continue;
			const a = y.get(S), p = t.timestamps[0] ?? 0, f = t.timestamps[t.timestamps.length - 1] ?? p, g = await Ft(t.timestamps, hn({
				day: e,
				file: h
			}), d), _ = Cf(va(await fa(s, t.nonwearMasksByDetector, {
				offPeriods: r,
				source: o
			}, {
				timestampsSec: t.timestamps,
				epochLenSec: g
			}, d)));
			w.push({
				analysisDate: S,
				epochLengthSeconds: g,
				timestamps: t.timestamps,
				activityCounts: t.axisY,
				sleepScores: t.sleepScores,
				choiNonwear: _.choiNonwear,
				..._.nonwearWeight ? { nonwearWeight: _.nonwearWeight } : {},
				..._.nonwearMemberFlags ? { nonwearMemberFlags: _.nonwearMemberFlags } : {},
				sensorNonwear: m.filter((e) => e.startTimestamp <= f && e.endTimestamp >= p),
				diaryBedTime: cn(a),
				diaryOnsetTime: Qt(a),
				diaryWakeTime: Ot(a),
				diaryNaps: a ? Nn(a) : null,
				diaryNonwear: a ? Pn(a) : null
			});
		}
		return {
			contextDays: w,
			deviceOffNonwear: m
		};
	}
	async autoScore(e, t, n, a) {
		const i = a ?? Y();
		if (this.fileBatch(e, i)) return this.autoScoreNight(e, t, n, yo, i);
		const s = {}, r = await on(e, i, s), o = {
			db: i,
			signal: n.signal,
			depth: 0,
			savedNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map(),
			activityDayMemo: s,
			span: Promise.resolve(Ef(r))
		};
		return this.autoScoreNight(e, t, n, yo, i, void 0, void 0, void 0, o);
	}
	async autoScoreFile(e, t, n = !0, a = Y(), i) {
		if (j(a.name)) return /* @__PURE__ */ new Map();
		const s = await this.filePlacementState(e, t, a);
		if (!s) return /* @__PURE__ */ new Map();
		const { file: r, inputs: o, cached: l } = s, c = Mn(r);
		return c ? new Map(r.availableDates.map((e) => [e, {
			kind: "refused",
			reason: c
		}])) : l ? am(a, e, o, l, t.signal) : n ? Q({
			kind: U.AUTO_SCORE,
			key: `${U.AUTO_SCORE}:${String(e)}:${o}`,
			label: "Compute marker placement",
			workspaceId: a.name,
			signal: t.signal,
			run: async (n) => {
				const l = i?.inputs === o ? i.byDate : await this.computeFilePlacement(s, t, a, n);
				return await this.storeFilePlacement(e, o, l, a, {
					...t,
					signal: n.signal
				}) ? (n.progress(r.availableDates.length, r.availableDates.length), am(a, e, o, l, n.signal)) : /* @__PURE__ */ new Map();
			}
		}) : /* @__PURE__ */ new Map();
	}
	async filePlacementState(e, t, n) {
		const a = await ge(e, n), i = nm.get(n)?.get(e), [s, r, o] = await Promise.all([
			gt(e, n),
			n.markerProvenance.get(e),
			i ? void 0 : Of(n, e)
		]);
		if (!a) return null;
		const l = await R.waitFor(async function(e, t, n, a) {
			const i = X().scoring(), s = t.ruleset ?? i.placementRuleset, r = /* @__PURE__ */ new Set([z.VAN_HEES_2015, ...t.algorithm && Ma(t.algorithm) ? [t.algorithm] : []]), o = (e) => "auto_score" === e.username && r.has(e.algorithm ?? ""), l = (a?.rows ?? []).filter((e) => o(e) || s !== b.LEGACY && e.nonwearDecided).map((e) => [e.id, o(e) ? e.lastModifiedAt : e.nonwearSpans ?? e.lastModifiedAt]), { signal: c, choiAxis: u, hasptVariant: d, studySettingsRevision: p, ...f } = t;
			return O(JSON.stringify({
				v: 2,
				options: f,
				ruleset: s,
				nonwearDetectors: t.nonwearDetectors ?? ca(xa(t.algorithm)),
				choiAxis: t.choiAxis ?? i.choiAxis,
				hasptVariant: t.hasptVariant ?? i.ggirHasptVariant,
				seriesRevision: e.seriesRevision ?? 0,
				dates: e.availableDates,
				diaries: n,
				rows: l
			}));
		}(a, t, s, r));
		if (i?.inputs === l) return {
			fileId: e,
			file: a,
			diaries: s,
			inputs: l,
			cached: i.byDate
		};
		const c = i ? await Of(n, e) : o;
		return {
			fileId: e,
			file: a,
			diaries: s,
			inputs: l,
			cached: c?.inputs === l ? new Map(Object.entries(c.byDate)) : null
		};
	}
	async storeFilePlacement(e, t, n, a, i) {
		if (i.signal?.throwIfAborted(), j(a.name)) return !1;
		const s = await F(a, [
			a.files,
			a.diaryEntries,
			a.markerProvenance,
			a.placementResults,
			a.studySettings
		], async () => {
			if (void 0 !== i.studySettingsRevision && ((await _e(a))?.contentHash ?? null) !== i.studySettingsRevision) return !1;
			const s = await this.filePlacementState(e, i, a);
			return !j(a.name) && s?.inputs === t && (await a.placementResults.put({
				fileId: e,
				policy: 2,
				inputs: t,
				byDate: Object.fromEntries(n)
			}), !0);
		}, i.signal);
		return s && Y() === a && Ge(e, a), s;
	}
	async storeFilesPlacement(e, t, n, i, s) {
		const r = [], o = await Promise.allSettled(e.map(({ fileId: e, options: n }) => this.filePlacementState(e, n, t))), l = {
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: K()
		}, c = o.flatMap((e) => "fulfilled" === e.status && e.value ? [e.value.file] : []), u = c.flatMap((e) => "ggir_part1" === h(e.sourceType)?.importWorkerBudget ? [{ size: e.sourceSizeBytes ?? 0 }] : []), d = u.length > 0 && u.length === c.length ? function(e, t) {
			return {
				...t,
				maxExtraWorkers: Number.POSITIVE_INFINITY,
				workerMemoryGib: (n = e.reduce((e, t) => Math.max(e, t.size), 0), .25 * Math.max(1, n / 968617))
			};
			var n;
		}(u, l) : {
			...l,
			maxExtraWorkers: Number.POSITIVE_INFINITY
		}, p = await Di(e.map(({ fileId: e, options: i }, l) => ({
			name: `placement:${String(e)}`,
			cost: 1,
			run: async (c, u) => {
				try {
					const r = new a(), u = o[l];
					if ("rejected" === u.status) throw u.reason;
					const d = u.value;
					if (!d || d.cached) return null;
					const p = await r.computeFilePlacement(d, i, t, n, c, s);
					return {
						fileId: e,
						inputs: d.inputs,
						byDate: p
					};
				} catch {
					return n.signal.throwIfAborted(), u.primary || u.cancel(), r.push(e), null;
				}
			}
		})), {
			createWorker: L,
			extraWorkers: Ri(d),
			cancelOperation: () => {},
			...i,
			signal: n.signal
		});
		for (const [a, f] of p.entries()) {
			try {
				f && await this.storeFilePlacement(f.fileId, f.inputs, f.byDate, t, e[a].options) && am(t, f.fileId, f.inputs, f.byDate, n.signal);
			} catch {
				n.signal.throwIfAborted(), r.push(e[a].fileId);
			}
			n.progress(a + 1, p.length);
		}
		if (r.length > 0) {
			const e = `Marker placement failed for recording ID(s) ${r.sort((e, t) => e - t).map(String).join(", ")}.`;
			throw n.progress(p.length, p.length, e), new Error(e);
		}
	}
	async storedAutoScore(e, t, n) {
		return (await this.autoScoreFile(e, n, !1)).get(t) ?? {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
	}
	async computeFilePlacement(e, n, a, i, s, r) {
		const o = e.fileId, l = e.file.availableDates, c = {
			...n,
			signal: i.signal
		};
		return Ee(async (u) => {
			const d = await on(o, a, u), p = r ?? (await jr(a)).csvText, f = void 0 !== s && Ma(n.algorithm), m = [];
			let h, g = l.length;
			const y = new Promise((e) => {
				h = e;
			}).then(async () => {
				if (0 !== m.length) try {
					i.signal.throwIfAborted();
					const e = m.map((e) => e.opts), a = f && s ? await s.placeStoredGgirNights([...d.values()], Te([...d.values()], n.algorithm), m.map((e) => ({
						options: e.opts,
						...e.anchor
					}))) : await function(e, n = t()) {
						return et(e, n);
					}(e, s ?? V(i.signal));
					i.signal.throwIfAborted();
					for (const [t, n] of m.entries()) n.resolve(a[t]);
				} catch (e) {
					for (const t of m) t.reject(e);
				}
			}), w = this.beginFileBatch(o, a, i.signal), _ = this.fileBatch(o, a), v = {
				activityDayMemo: _.activityDayMemo,
				days: _.days,
				span: _.span,
				file: _.file,
				diaries: _.diaries,
				markers: _.markers
			};
			_.activityDayMemo = u, _.days = d, _.span = Promise.resolve(Ef(d)), _.file = Promise.resolve(e.file), _.diaries = Promise.resolve(e.diaries);
			try {
				0 === l.length && h();
				const e = await Promise.all(l.map(async (e) => {
					let t = !1;
					const n = () => {
						t || (t = !0, g -= 1, 0 === g && h());
					};
					try {
						return [e, await this.autoScoreNight(o, e, c, (e) => new Promise((t, a) => {
							m.push({
								opts: e,
								resolve: t,
								reject: a
							}), n();
						}), a, p, s, f ? (e, t, a) => new Promise((i, s) => {
							m.push({
								opts: e,
								anchor: {
									day: t,
									nextDay: a
								},
								resolve: i,
								reject: s
							}), n();
						}) : void 0)];
					} finally {
						n();
					}
				}));
				await y;
				const t = new Map(e);
				return i.signal.throwIfAborted(), t;
			} finally {
				Object.assign(_, v), await w.end();
			}
		});
	}
	async autoScoreNight(e, t, n, a, i = Y(), s, r, o, l) {
		const c = r ?? V(n.signal);
		n.signal?.throwIfAborted();
		const u = l ?? this.fileBatch(e, i), d = await (u ? u.file ??= ge(e, i) : ge(e, i)), p = Mn(d);
		if (p) return {
			kind: "refused",
			reason: p
		};
		const f = n.ruleset ?? X().scoring().placementRuleset, m = xa(n.algorithm), h = n.nonwearDetectors ?? ca(m), g = n.choiAxis ?? X().scoring().choiAxis, y = n.sleepPeriodDetection ? Mt(n.sleepPeriodDetection) : void 0;
		let w = oa(y, {
			path: m,
			selected: h
		}) ?? null;
		const _ = await Pa(e, t, i, (t) => this.placementDay(e, t, i, u), void 0, c);
		if (!_) return {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
		if ("vendor_analysis" === M.find((e) => e.id === n.algorithm)?.execution) {
			const a = {
				fileId: e,
				date: t,
				file: d,
				options: n,
				sleepPeriodDetectionConfig: w,
				db: i,
				batch: u
			}, s = await this.sourceAnalyses.reduce(async (e, t) => await e ?? t.proposeNight?.(a) ?? null, Promise.resolve(null));
			if (s) return s;
		}
		const v = await this.placementDay(e, await Ta(t, void 0, c), i, u), S = await (Tr(this.sourceAnalyses, d, "guiderWindow")?.guiderWindow({
			fileId: e,
			date: t,
			db: i,
			batch: u
		}) ?? null), k = Wa(d?.sourceType, d?.sourceProfileId), I = await Df([_, v], h, g, k, i, n.signal, u?.activityDayMemo), A = await this.scorerVerdict(i, e, n.algorithm, { file: d }, u), x = Ma(n.algorithm), N = x && o ? { kind: "angle-deferred" } : await Ca({
			day: _,
			nextDay: v,
			verdict: A,
			angle: x,
			requireScores: !0,
			missingScoresReason: n.algorithm === z.LSTM_SLEEP_WAKE ? "No LSTM sleep/wake results are stored for this file. Re-import or reprocess the raw file so the app can compute spectral features and run the ONNX model." : "No algorithm results available",
			choiAxis: g,
			laterDays: async () => [...(u?.days ?? await on(e, i, u?.activityDayMemo)).values()].filter((e) => e.date > t).sort((e, t) => e.date.localeCompare(t.date)),
			core: c
		});
		if ("refused" === N.kind) return N;
		const T = x ? null : $f(I);
		if (null !== T) return {
			kind: "refused",
			reason: T
		};
		w = oa(y, {
			path: m,
			selected: h,
			available: I.available,
			dropped: I.dropped
		}) ?? null;
		const R = pa(I.dropped, m), E = (e) => "refused" === e.kind || null === w && 0 === R.length ? e : {
			...e,
			notes: [...R, ...e.notes],
			sleep_period_detection_config: {
				...e.sleep_period_detection_config ?? {},
				...w ?? {}
			}
		};
		if ("angle" === N.kind || "angle-legacy" === N.kind || "angle-deferred" === N.kind) {
			const r = await this.placementMarker(e, t, n.algorithm ?? null, i, u) ?? await this.placementMarker(e, t, z.VAN_HEES_2015, i, u), l = r?.sleepMarkers[0], p = null != l?.onsetTimestamp && null != l.offsetTimestamp ? {
				startTimestamp: l.onsetTimestamp,
				endTimestamp: l.offsetTimestamp
			} : null, m = () => l && null != l.onsetTimestamp && null != l.offsetTimestamp ? {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: l.onsetTimestamp,
					offset_timestamp: l.offsetTimestamp,
					marker_type: ae.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: [],
				notes: ["HDCZA fallback: no 5s SIB stream available for structured sleep-period fusion", `HDCZA window: ${xt(l.onsetTimestamp)} – ${xt(l.offsetTimestamp)}`],
				decisions: [],
				sleep_period_detection_config: r?.sleepPeriodDetectionConfig ?? w
			} : {
				kind: "refused",
				reason: "No HDCZA sleep window found — re-process the file to regenerate it"
			};
			if ("angle" === N.kind || "angle-deferred" === N.kind) {
				let l = {
					timestamps: /* @__PURE__ */ new Float64Array(),
					activityCounts: /* @__PURE__ */ new Float64Array(),
					sleepScores: /* @__PURE__ */ new Uint8Array()
				};
				if ("angle" === N.kind) {
					const e = await La(N, t, c);
					if ("refused" === e.kind) return e;
					l = e.series;
				}
				const [h, g] = await Promise.all([this.placementDiary(e, t, i, u), u ? u.span ??= Dn(e, i, d?.seriesRevision ?? 0) : Dn(e, i, d?.seriesRevision ?? 0)]), y = h ? await we(h, g, c) : null, w = (await wo(n.sensorLocation ?? "wrist", n.hasptVariant ?? X().scoring().ggirHasptVariant, c)).variant, S = function(e) {
					const t = e?.sleepPeriodDetectionConfig?.haspt_variant;
					return Object.values(Ne).includes(t) ? t : null;
				}(r), k = null == r ? null : null == S ? `HASPT variant not recorded at import; assumed ${w} from the study setting. Reprocess the file to record it.` : S !== w ? `HASPT variant at import was ${S}; the study setting now gives ${w}. Placed with ${S}; reprocess the file to apply ${w}.` : null, I = f === b.GGIR_PART4, A = I ? await Rt(await this.placementDiaries(e, i, u), void 0, c) : null, x = A?.wakeIsOutBed ? null : kt(y, A?.outBedIsWake ? "diary_out_of_bed_time" : "diary_wake_time"), T = A?.outBedIsWake ? null : kt(y, A?.wakeIsOutBed ? "diary_wake_time" : "diary_out_of_bed_time"), M = {
					...l,
					choiNonwear: null,
					ggirHasptAlgo: S ?? w,
					ggirConfigCsv: s ?? (await jr(i)).csvText,
					...A?.hasBedlog ? { ggirDiaryHasBedlog: !0 } : {},
					...A?.hasSleeplog ? { ggirDiaryHasSleeplog: !0 } : {},
					diaryBedTime: I ? kt(y, "diary_in_bed_time") : cn(y),
					diaryOutBedTime: I ? T : jt(y),
					diaryOnsetTime: I ? kt(y, "diary_onset_time") : Qt(y),
					diaryWakeTime: I ? x : Ot(y),
					diaryNaps: y ? Nn(y) : null,
					analysisDate: t,
					onsetMinConsecutiveSleep: 1,
					offsetMinConsecutiveMinutes: 1,
					algorithm: n.algorithm,
					periodGuider: fo(n.algorithm, n.periodGuider, n.sleepPeriodDetection),
					...void 0 !== n.sleepPeriodDetection ? { sleepPeriodDetection: n.sleepPeriodDetection } : {},
					...n.scorerPostprocessing ? { scorerPostprocessing: n.scorerPostprocessing } : {},
					ruleset: f,
					epochLengthSeconds: 5,
					hdczaWindow: p
				}, R = "angle-deferred" === N.kind ? await o(M, _, v) : await a(M);
				return "angle-legacy" === R ? m() : E(k && "refused" !== R.kind ? {
					...R,
					notes: [k, ...R.notes]
				} : R);
			}
			return m();
		}
		const [D, $] = await Promise.all([this.placementDiary(e, t, i, u), u ? u.span ??= Dn(e, i, d?.seriesRevision ?? 0) : Dn(e, i, d?.seriesRevision ?? 0)]), C = D ? await we(D, $, c) : null, { unpacked: F } = N, { timestamps: P, axisY: O, sleepScores: j, eventMarkerTimestamps: B } = F, G = Ze(n.detectionRule), L = fo(n.algorithm, n.periodGuider, n.sleepPeriodDetection), U = await this.placementMarker(e, t, z.VAN_HEES_2015, i, u), H = U?.sleepMarkers.find((e) => e.markerType === ae.MAIN_SLEEP) ?? U?.sleepMarkers[0], Z = null != H?.onsetTimestamp && null != H.offsetTimestamp ? {
			startTimestamp: H.onsetTimestamp,
			endTimestamp: H.offsetTimestamp
		} : null, q = await Ft(P, hn({
			day: _,
			file: d
		}), c), W = I.available.some(ma) ? await (u ? u.sensor ??= qt(e, i) : qt(e, i)) : [], J = Cf(va(await fa(I.available, F.nonwearMasksByDetector, {
			offPeriods: W,
			source: k
		}, {
			timestampsSec: P,
			epochLenSec: q
		}, c))), K = f !== b.LEGACY ? await this.loadPlacementFileContext(e, t, n.algorithm, A, $, i, I.available, W, k, g, n.signal, u) : null, { startIndex: Q, endIndex: ee } = await vi(P, t, c);
		if (Q === ee) return {
			kind: "refused",
			reason: "No activity data found for this date"
		};
		const te = P.slice(Q, ee), ne = O.slice(Q, ee), ie = j.slice(Q, ee), se = J.choiNonwear ? J.choiNonwear.slice(Q, ee) : null, re = J.nonwearWeight ? J.nonwearWeight.slice(Q, ee) : null, oe = J.nonwearMemberFlags ? J.nonwearMemberFlags.slice(Q, ee) : null, le = te[0] ?? 0, ce = te[te.length - 1] ?? le;
		return E(await a({
			timestamps: te,
			activityCounts: ne,
			sleepScores: ie,
			choiNonwear: se,
			...re ? { nonwearWeight: re } : {},
			...oe ? { nonwearMemberFlags: oe } : {},
			diaryBedTime: cn(C),
			diaryOnsetTime: Qt(C),
			diaryWakeTime: Ot(C),
			diaryNaps: C ? Nn(C) : null,
			diaryNonwear: C ? Pn(C) : null,
			analysisDate: t,
			onsetMinConsecutiveSleep: G.onsetN,
			offsetMinConsecutiveMinutes: G.offsetN,
			algorithm: n.algorithm,
			periodGuider: L,
			...void 0 !== n.sleepPeriodDetection ? { sleepPeriodDetection: n.sleepPeriodDetection } : {},
			...n.scorerPostprocessing ? { scorerPostprocessing: n.scorerPostprocessing } : {},
			ruleset: f,
			nonwearDetectors: J.nonwearDetectors,
			epochLengthSeconds: q,
			hdczaWindow: Z,
			eventMarkerTimestamps: B.filter((e) => e >= le && e <= ce + 60),
			actiwareRestWindow: S,
			nightStartHour: An(n.nightStartHour),
			nightEndHour: An(n.nightEndHour),
			...K ? {
				sensorNonwear: K.deviceOffNonwear.filter((e) => e.startTimestamp <= ce && e.endTimestamp >= le),
				contextDays: K.contextDays
			} : {}
		}));
	}
	async autoNonwear(e, a, i) {
		if (void 0 === i.threshold) throw new Error("Local auto-nonwear requires a resolved nonwear threshold.");
		const s = Y(), r = await Pa(e, a, s, (t) => Dt(e, t, s, this.fileBatch(e, s)?.activityDayMemo));
		if (!r) return {
			kind: "refused",
			reason: "No activity data"
		};
		const [o, l, c, u] = await Promise.all([
			Dt(e, await Ta(a), s, this.fileBatch(e, s)?.activityDayMemo),
			ft(e, a, s),
			qt(e, s),
			ge(e, s)
		]), d = X().scoring(), p = tn(d, u), f = i.nonwearDetectors ?? ("ggir" === xa(p.algorithm) ? d.nonwearDetectorsGgir : p.nonwearDetectorsCounts), m = Wa(u?.sourceType, u?.sourceProfileId), h = await Df([r, o], f, Ia(), m, s, void 0, this.fileBatch(e, s)?.activityDayMemo), g = $f(h);
		if (null !== g) return {
			kind: "refused",
			reason: g
		};
		const y = await Ca({
			day: r,
			nextDay: o,
			verdict: Re,
			angle: !1,
			requireScores: !1,
			missingScoresReason: "",
			choiAxis: Ia(),
			laterDays: () => Promise.resolve([])
		});
		if ("counts" !== y.kind) return {
			kind: "refused",
			reason: "refused" === y.kind ? y.reason : Da
		};
		const w = y.unpacked, { timestamps: _, axisY: v } = w, b = _[0] ?? 0, S = _[_.length - 1] ?? b, I = va(await fa(h.available, w.nonwearMasksByDetector, {
			offPeriods: c.filter((e) => e.startTimestamp <= S && e.endTimestamp >= b),
			source: m
		}, {
			timestampsSec: _,
			epochLenSec: await Je(_, {
				day: r,
				file: u
			})
		})), A = Cf(I), x = Ff(h.available), N = l ? Pn(l) : [], T = i.existingSleepMarkers, M = await async function(e) {
			if (0 === e.timestamps.length || 0 === e.activityCounts.length) return Tt("No activity data");
			const a = {
				diary_nonwear: (e.diaryNonwear ?? []).filter(([e, t]) => null != e && null != t).map(([e, t]) => ({
					start_time: e,
					end_time: t
				})),
				choi_nonwear: null == e.choiNonwear ? null : [],
				sensor_nonwear_periods: e.sensorNonwearPeriods.map(([e, t]) => ({
					start_timestamp: e,
					end_timestamp: t
				})),
				existing_sleep_markers: e.existingSleepMarkers.map(([e, t]) => ({
					onset_timestamp: e,
					offset_timestamp: t
				})),
				analysis_date: e.analysisDate,
				epoch_length_seconds: e.epochLengthSeconds ?? n,
				threshold: e.threshold ?? 0,
				min_duration_minutes: e.minDurationMinutes ?? 10,
				zero_activity_ratio: .65,
				diary_min_duration_minutes: e.diaryMinDurationMinutes ?? 1,
				...Cn(e.nonwearDetectors, e.nonwearWeight, {
					alwaysNameSingle: !0,
					memberFlags: e.nonwearMemberFlags
				})
			}, i = [
				JSON.stringify(a),
				e.timestamps instanceof Float64Array ? e.timestamps : Float64Array.from(e.timestamps),
				e.activityCounts instanceof Float64Array ? e.activityCounts : Float64Array.from(e.activityCounts),
				e.choiNonwear instanceof Uint8Array ? e.choiNonwear : Uint8Array.from(e.choiNonwear ?? [])
			], s = i.slice(1).filter((t) => ArrayBuffer.isView(t) && t !== e.timestamps && t !== e.activityCounts && t !== e.choiNonwear), r = await t().placeNonwearMarkers(k(i, s.map((e) => e.buffer)));
			return r ? {
				kind: "placed",
				nonwear_markers: r.nonwear_markers,
				notes: r.notes
			} : Tt("Nonwear placement is unavailable in this build — reload while online to update the local engine.");
		}({
			timestamps: _,
			activityCounts: v,
			diaryNonwear: N,
			choiNonwear: x ? null : A.choiNonwear,
			nonwearDetectors: A.nonwearDetectors,
			...A.nonwearWeight ? { nonwearWeight: A.nonwearWeight } : {},
			...A.nonwearMemberFlags ? { nonwearMemberFlags: A.nonwearMemberFlags } : {},
			sensorNonwearPeriods: x ? c.filter((e) => e.startTimestamp <= S && e.endTimestamp >= b).sort((e, t) => e.startTimestamp - t.startTimestamp).map((e) => [e.startTimestamp, e.endTimestamp]) : [],
			existingSleepMarkers: T,
			analysisDate: a,
			threshold: i.threshold
		});
		return "refused" === M.kind ? M : {
			kind: "placed",
			nonwear_markers: M.nonwear_markers.map((e) => da(e, I?.available.length ?? 0)),
			notes: [...pa(h.dropped, xa(p.algorithm)), ...M.notes]
		};
	}
	async listFileScoringCounts(e, t, n) {
		return this.fileScoringCountsIn(Y(), e, t, n);
	}
	async fileScoringCountsIn(e, t, n, a) {
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const { nightStartHour: i, nightEndHour: s } = Yf(a), [r, o] = await Promise.all([e.files.bulkGet([...t]), Ue(t, e)]);
		return Promise.all(t.map(async (t, a) => {
			const l = r[a], c = l?.availableDates ?? await In(t, e), u = /* @__PURE__ */ new Map();
			for (const e of o[a]?.rows ?? []) e.username === n && u.set(e.date, kn(u.get(e.date), e));
			const d = l?.nightDifficulty, p = d?.nightStartHour === i && d.nightEndHour === s;
			return {
				file_id: t,
				scored_dates: c.filter((e) => u.get(e)?.scored ?? !1).length,
				nonwear_scored_dates: c.filter((e) => u.get(e)?.nonwearDecided ?? !1).length,
				total_dates: c.length,
				no_diary_dates: p ? c.filter((e) => -1 === d.byDate[e]).length : 0,
				no_diary_current: p
			};
		}));
	}
	async listDatesStatus(e, t, n, a) {
		return await this.storedDatesStatus(e, t, n, a) ?? await this.computeDatesStatus(e, t, n, a);
	}
	async storedDatesStatus(e, n, a, i) {
		const s = Y(), r = (await ge(e, s))?.nightDifficulty, { nightStartHour: o, nightEndHour: l } = Yf(i);
		if (r?.nightStartHour !== o || r.nightEndHour !== l || !n.every((e) => e in r.byDate)) return null;
		void 0 === r.notRankableReason && t().getComputeIdentity().then(({ sourceRevision: t }) => {
			r.sourceRevision !== String(t) && tm(e, s, i);
		}, () => {});
		const [c, u] = await Promise.all([Tn(e, s), Of(s, e)]), d = Et(c, a), p = Et(c, jn), f = Kt(c), m = n.filter((e) => (f.get(e)?.size ?? 0) >= 2), h = await sf(m.flatMap((e) => [{
			usersForDate: f.get(e),
			kind: "sleep"
		}, {
			usersForDate: f.get(e),
			kind: "nonwear"
		}])), g = new Set(m.filter((e, t) => h[2 * t].disagree || h[2 * t + 1].disagree));
		return n.map((e) => ({
			date: e,
			...Wf(d.get(e), g.has(e), p.get(e), Pf(u, e, p.get(e))),
			complexity_pre: r.byDate[e] ?? null,
			complexity_post: null
		}));
	}
	async computeDatesStatus(e, t, n, a, i) {
		let s;
		const r = new Promise((e) => {
			s = e;
		}), o = this.datesStatusGeneration(e, t, n, a, s, i);
		return o.catch(() => {}), i ? o : Promise.race([r, o]);
	}
	async datesStatusGeneration(e, t, n, a, i, s) {
		s?.throwIfAborted();
		const r = V(s);
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const o = Y(), l = ++this.nextComplexityGenerationToken;
		let c, d;
		const p = new Promise((e, t) => {
			c = e, d = t;
		});
		p.catch(() => {}), this.latestComplexityTokenByFile.set(e, l), this.complexitySnapshotByFile.delete(e), this.complexitySignalGenerationByFile.delete(e), this.complexityFailureByFile.delete(e), this.complexityGenerationByFile.set(e, {
			token: l,
			promise: p
		});
		try {
			const d = async () => {
				const t = await Tn(e, o), [a, i, s, r, l] = await Promise.all([
					on(e),
					gt(e),
					zn(e, o, t),
					If(e, o),
					ge(e)
				]);
				return [
					Et(t, n),
					Et(t, jn),
					a,
					i,
					s,
					Kt(t),
					kf(t),
					r,
					l
				];
			}, [p, m, h, g, y, w, _, v, b] = "function" == typeof o.transaction ? await o.transaction("r", [
				o.markers,
				o.activityDays,
				o.diaryEntries,
				o.sensorNonwear,
				o.dailyGgirSummaries,
				o.files
			], async () => {
				if (Y() !== o) throw new Error("The local workspace changed before difficulty inputs could be read.");
				const e = await d();
				if (Y() !== o) throw new Error("The local workspace changed while difficulty inputs were being read.");
				return e;
			}) : await d(), S = Ef(h), k = new Map((await Rn(g, S, r)).map((e) => [e.analysisDate, e])), { nightStartHour: I, nightEndHour: A } = Yf(a), x = t.filter((e) => (w.get(e)?.size ?? 0) >= 2), N = await sf(x.flatMap((e) => [{
				usersForDate: w.get(e),
				kind: "sleep"
			}, {
				usersForDate: w.get(e),
				kind: "nonwear"
			}]), r), T = new Set(x.filter((e, t) => N[2 * t].disagree || N[2 * t + 1].disagree)), M = await Of(o, e), z = (e) => t.map((t) => ({
				date: t,
				...Wf(p.get(t), T.has(t), m.get(t), Pf(M, t, m.get(t))),
				complexity_pre: e(t),
				complexity_post: null
			})), E = b?.nightDifficulty;
			E?.nightStartHour === I && E.nightEndHour === A && t.every((e) => e in E.byDate) && (s?.throwIfAborted(), i(z((e) => E.byDate[e] ?? null)));
			const D = [], $ = [...t], C = await Hi($, r), P = new Map($.map((e, t) => [e, C[t] ?? !1])), O = Te(h.values()), j = /* @__PURE__ */ new Map();
			for (const n of t) {
				s?.throwIfAborted();
				const t = await Rf(h, n, O, r, j);
				if (!t) continue;
				const { timestamps: a, axisY: i, sleepScores: o, nonwearResults: l, temperature: c, detachNonwear: u, ggirTimestamps: d, ggirAnglez: p } = t, f = jf(a, a.length), m = jf(i, f.length), g = Bf(o, f.length);
				if (0 === f.length || 0 === m.length || 0 === g.length) continue;
				const w = k.get(n), S = _.get(n) ?? null, I = await ze((t) => {
					const a = tt(Qt(w), t), i = tt(Ot(w), t);
					return {
						naps: w ? Nn(w).map(([e, n]) => ({
							onset_time: tt(e, t),
							offset_time: tt(n, t)
						})).filter((e) => null != e.onset_time) : [],
						nonwear: w ? Pn(w).map(([e, n]) => [tt(e, t), tt(n, t)]).filter((e) => null != e[0] && null != e[1]).map(([e, t]) => ({
							start_time: e,
							end_time: t
						})) : [],
						onset: a,
						wake: i,
						inBed: tt(cn(w), t),
						outBed: tt(jt(w), t),
						guiderTargets: Lf(n, a, i, S, st(e), t)
					};
				}, new je(r)), A = I.naps, x = I.nonwear, N = f[0] ?? 0, T = f[f.length - 1] ?? N, M = I.onset, R = I.wake, z = v.get(n)?.calibration?.errorEnd;
				D.push({
					analysis_date: n,
					epoch_length_seconds: await Ft(f, hn({
						day: h.get(n),
						file: b
					}), r),
					timestamps: f,
					activity_counts: m,
					sleep_scores: g,
					choi_nonwear: Bf(l, f.length),
					sensor_nonwear: y.filter((e) => e.startTimestamp <= T && e.endTimestamp >= N).map((e) => ({
						start_ts: e.startTimestamp,
						end_ts: e.endTimestamp
					})),
					diary_onset_time: M,
					diary_wake_time: R,
					diary_nap_count: A.length,
					diary_naps: A,
					diary_nonwear: x,
					diary_in_bed_time: I.inBed,
					diary_out_bed_time: I.outBed,
					is_weekend: P.get(n) ?? null,
					guider_targets: I.guiderTargets,
					anglez: Gf(f, d, p),
					light: [],
					temperature: jf(c, f.length),
					heart_rate: [],
					detach_nonwear: Bf(u, f.length),
					calibration_error: "number" == typeof z && Number.isFinite(z) ? z : null,
					imputed_fraction: null,
					hdcza_window: S
				});
			}
			let B, G;
			try {
				if (D.length > 0) {
					const n = {
						config: { signals: {
							night_start_hour: I,
							night_end_hour: A
						} },
						days: D
					}, a = {
						config: n.config ?? null,
						days: n.days.map((e) => ({
							analysis_date: e.analysis_date,
							epoch_length_seconds: e.epoch_length_seconds,
							timestamps: e.timestamps
						}))
					}, i = r, c = await i.getComputeIdentity(), d = await Jp({
						runtimeIdentity: c,
						difficultyRequestWireJson: gp(n),
						signalsRequestWireJson: wp(n),
						sourceContentHash: b?.sourceContentHash ?? null
					}), p = [
						"timestamps",
						"activity_counts",
						"sleep_scores",
						"choi_nonwear",
						"anglez",
						"light",
						"temperature",
						"heart_rate",
						"detach_nonwear"
					], f = p.flatMap((e) => {
						const t = new Uint32Array(n.days.length + 1);
						for (const [i, s] of n.days.entries()) t[i + 1] = t[i] + s[e].length;
						const a = new ("sleep_scores" === e || "choi_nonwear" === e || "detach_nonwear" === e ? Uint8Array : Float64Array)(t[n.days.length]);
						for (const [i, s] of n.days.entries()) a.set(s[e], t[i]);
						return [a, t];
					}), m = [JSON.stringify({
						config: n.config,
						days: n.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !p.includes(e))))
					}), ...f], h = await nf(e, d.generationKey, o) ?? await nf(e, (await Jp({
						runtimeIdentity: Tf(c),
						difficultyRequestWireJson: d.difficultyRequestWireJson,
						difficultyRequestSha256: d.difficultyRequestSha256,
						signalsRequestWireJson: d.signalsRequestWireJson,
						signalsRequestSha256: d.signalsRequestSha256,
						sourceContentHash: d.sourceContentHash
					})).generationKey, o);
					if (h) B = {
						token: l,
						evidenceDb: o,
						coveredDates: [...new Set(t)].sort(),
						signalRequest: null == h.signalsByDate ? m : null,
						projectionInput: Zf(h),
						difficultyByDate: qf(h),
						signalsByDate: Vf(h),
						computeIdentity: h.runtimeIdentity,
						projectionRevision: Uf(h),
						evidence: Hf(h)
					};
					else {
						s?.throwIfAborted();
						const p = em(o, d.generationKey, s, () => r.computeFileDifficulty(m));
						G = p.release;
						const f = await p.run;
						if (s?.throwIfAborted(), !Mf(c, await i.getComputeIdentity())) throw new Error("The local scoring runtime changed while difficulty was being computed. Re-run the calculation.");
						if (zf(f.byDate, n.days)) {
							const n = await async function(e) {
								try {
									(!Number.isInteger(e.fileId) || e.fileId <= 0) && Ap();
									const t = await async function(e) {
										"sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || Ap(), null !== e.sourceContentHash && xp(e.sourceContentHash), zp(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || Ap(), xp(e.difficultyRequestSha256), xp(e.signalsRequestSha256), await Ep(e.difficultyRequestWireJson, e.difficultyRequestSha256), await Ep(e.signalsRequestWireJson, e.signalsRequestSha256);
										const t = qp(e.difficultyRequestWireJson, e.signalsRequestWireJson);
										xp(e.generationKey);
										const { generationKey: n, ...a } = e;
										return await Wp(a) !== e.generationKey && Ap(), t;
									}(e.identity), n = Mp(e.projectionInput), a = Mp(e.difficultyByDate), i = null == e.signalsByDate ? null : Mp(e.signalsByDate);
									Vp(t, n, a, i);
									const s = await Rp(n), r = await Rp(a), o = null === i ? null : await Rp(i);
									Yp(s, e.expectedHashes?.projectionSha256), Yp(r, e.expectedHashes?.difficultyResultSha256), Yp(o, e.expectedHashes?.signalsResultSha256);
									const l = (/* @__PURE__ */ new Date()).toISOString(), c = e.createdAt ?? l, u = e.updatedAt ?? c;
									Np(c), Np(u), Date.parse(u) < Date.parse(c) && Ap();
									const d = {
										fileId: e.fileId,
										generationKey: e.identity.generationKey,
										evidenceContractId: e.identity.evidenceContractId,
										difficultyMethodId: e.identity.difficultyMethodId,
										signalsMethodId: e.identity.signalsMethodId,
										requestContractId: e.identity.requestContractId,
										sourceContentHash: e.identity.sourceContentHash,
										runtimeIdentity: Mp(e.identity.runtimeIdentity),
										difficultyRequestWireJson: e.identity.difficultyRequestWireJson,
										signalsRequestWireJson: e.identity.signalsRequestWireJson,
										difficultyRequestSha256: e.identity.difficultyRequestSha256,
										signalsRequestSha256: e.identity.signalsRequestSha256,
										projectionSha256: s,
										difficultyResultSha256: r,
										signalsResultSha256: o,
										projectionInput: n,
										difficultyByDate: a,
										signalsByDate: i,
										createdAt: c,
										updatedAt: u
									}, p = await Kp(d);
									return Yp(p, e.expectedHashes?.recordSha256), {
										...d,
										recordSha256: p
									};
								} catch (t) {
									if (t instanceof Sp) throw t;
									return Ap();
								}
							}({
								fileId: e,
								identity: d,
								projectionInput: a,
								difficultyByDate: f.byDate,
								signalsByDate: null
							});
							if (this.disposed || null == this.latestComplexityTokenByFile.get(e)) throw new Error("The local workspace changed before difficulty evidence could be saved.");
							if (this.latestComplexityTokenByFile.get(e) !== l) throw new Error("A newer local difficulty generation superseded this computation.");
							s?.throwIfAborted();
							const i = await async function(e, t = Y(), n = "fresh", a) {
								"fresh" !== n && "restore" !== n && Ap();
								const i = await R.waitFor(Qp(e));
								return ia([t.files, t.complexityEvidence], async () => {
									const e = await t.files.get(i.fileId);
									ef(i, e);
									const a = await t.complexityEvidence.where("[fileId+generationKey]").equals([i.fileId, i.generationKey]).first();
									if (a) {
										const e = await R.waitFor(Qp(a));
										if (r = i, (s = e).generationKey !== r.generationKey || s.projectionSha256 !== r.projectionSha256 || s.difficultyResultSha256 !== r.difficultyResultSha256 || s.difficultyRequestSha256 !== r.difficultyRequestSha256 || s.signalsRequestSha256 !== r.signalsRequestSha256 || s.sourceContentHash !== r.sourceContentHash) throw new kp();
										if (null !== e.signalsResultSha256 && null !== i.signalsResultSha256 && e.signalsResultSha256 !== i.signalsResultSha256) throw new kp();
										if (null === e.signalsByDate && null !== i.signalsByDate) {
											const n = new Date(Math.max(Date.now(), Date.parse(e.createdAt))).toISOString(), a = {
												...e,
												signalsByDate: i.signalsByDate,
												signalsResultSha256: i.signalsResultSha256,
												updatedAt: n
											}, s = await R.waitFor(Kp(a)), r = {
												...a,
												recordSha256: s
											};
											return await t.complexityEvidence.put(r), await tf(r, "signals_enriched", 0), {
												record: r,
												disposition: "signals_enriched",
												evicted: 0
											};
										}
										return {
											record: e,
											disposition: "deduplicated",
											evicted: 0
										};
									}
									var s, r;
									await async function(e, t, n) {
										const a = await e.complexityEvidence.where("fileId").equals(t.fileId).toArray();
										if (a.length > 5) throw new Sp(!0);
										if (a.length < 5) return;
										if ("fresh" === n) return;
										a.sort((e, t) => {
											const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
											return 0 !== n ? n : (t.id ?? 0) - (e.id ?? 0);
										});
										const i = a[a.length - 1];
										if (i && Date.parse(t.createdAt) < Date.parse(i.createdAt)) throw new Ip();
									}(t, i, n);
									const o = { ...i };
									delete o.id;
									const l = await t.complexityEvidence.add(o), c = {
										...o,
										id: l
									}, u = await async function(e, t, n) {
										const a = e.complexityEvidence, i = await a.where("fileId").equals(t).toArray();
										i.sort((e, t) => {
											if ("restore" === n) {
												const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
												if (0 !== n) return n;
											}
											return (t.id ?? 0) - (e.id ?? 0);
										});
										const s = i.slice(5).map((e) => e.id).filter((e) => void 0 !== e);
										return s.length > 0 && await a.bulkDelete(s), s.length;
									}(t, c.fileId, n);
									return await tf(c, "inserted", u), {
										record: c,
										disposition: "inserted",
										evicted: u
									};
								}, t, a);
							}(n, o, "fresh", s);
							"inserted" === i.disposition && await async function(e, t, n) {
								try {
									await mt.recordWorkspaceDurably(u.SYSTEM_RECALCULATION, {
										subject: "night_complexity_generation",
										generationKey: e.generationKey,
										difficultyResultSha256: e.difficultyResultSha256,
										dateCount: Object.keys(e.difficultyByDate).length
									}, t, n) || console.warn("[local-data-source] Complexity evidence was saved, but its audit event is still pending.");
								} catch {
									console.warn("[local-data-source] Complexity evidence was saved, but its audit event could not be recorded.");
								}
							}(i.record, o, s), B = {
								token: l,
								evidenceDb: o,
								coveredDates: [...new Set(t)].sort(),
								signalRequest: null == i.record.signalsByDate ? m : null,
								projectionInput: Zf(i.record),
								difficultyByDate: qf(i.record),
								signalsByDate: Vf(i.record),
								computeIdentity: i.record.runtimeIdentity,
								projectionRevision: Uf(i.record),
								evidence: Hf(i.record)
							};
						} else console.warn("[local-data-source] Night difficulty is unavailable from the current local scoring runtime."), B = {
							token: l,
							evidenceDb: null,
							coveredDates: [...new Set(t)].sort(),
							signalRequest: null,
							projectionInput: null,
							difficultyByDate: {},
							signalsByDate: null,
							computeIdentity: null,
							projectionRevision: null,
							evidence: null
						};
					}
				} else B = {
					token: l,
					evidenceDb: null,
					coveredDates: [...new Set(t)].sort(),
					signalRequest: null,
					projectionInput: null,
					difficultyByDate: {},
					signalsByDate: null,
					computeIdentity: null,
					projectionRevision: null,
					evidence: null
				};
			} catch (f) {
				s?.throwIfAborted();
				const t = this.latestComplexityTokenByFile.get(e);
				if (this.disposed || null == t || t === l) throw f;
				B = await this.awaitNewerComplexitySnapshot(e, l);
			} finally {
				G?.();
			}
			s?.throwIfAborted(), c(B), this.latestComplexityTokenByFile.get(e) === l && (s?.throwIfAborted(), this.publishComplexitySnapshot(e, B, s), this.complexityFailureByFile.delete(e));
			let L = B;
			if (this.latestComplexityTokenByFile.get(e) !== l) {
				const t = this.complexityGenerationByFile.get(e);
				if (t && t.token !== l) L = await t.promise;
				else {
					const t = this.complexityFailureByFile.get(e);
					if (void 0 !== t && t.token === this.latestComplexityTokenByFile.get(e)) throw t.error;
					const n = this.complexitySnapshotByFile.get(e);
					if (!n) throw new Error("A newer local difficulty generation replaced this result.");
					L = n;
				}
			}
			const U = L.difficultyByDate;
			if (L === B && (0 === D.length || null !== B.computeIdentity)) {
				const n = [...h.values()].map(he), a = 0 === D.length && n.some((e) => e.ggir) && n.every((e) => e.ggir || 0 === e.timestamps.length), i = {
					nightStartHour: I,
					nightEndHour: A,
					byDate: Object.fromEntries(t.map((e) => [e, U[e]?.difficulty ?? null])),
					sourceRevision: String((B.computeIdentity ?? await r.getComputeIdentity()).sourceRevision),
					...a ? { notRankableReason: "GGIR nights are not ranked by difficulty: the difficulty core reads 60 s activity counts and sleep scores, and a GGIR folder holds 5 s ENMO, anglez and SIB only." } : {}
				};
				if (JSON.stringify(b?.nightDifficulty) !== JSON.stringify(i)) try {
					s?.throwIfAborted(), await F(o, [o.files], () => o.files.update(e, { nightDifficulty: i }), s);
					for (const t of Xf) t(e, o);
					s?.throwIfAborted();
				} catch {
					s?.throwIfAborted(), console.warn("[local-data-source] Stored night difficulty could not be written.");
				}
			}
			return z((e) => U[e]?.difficulty ?? null);
		} catch (f) {
			throw this.latestComplexityTokenByFile.get(e) === l && this.complexityFailureByFile.set(e, {
				token: l,
				error: /* @__PURE__ */ new Error("The newest local difficulty generation failed.")
			}), d(f), f;
		} finally {
			this.complexityGenerationByFile.get(e)?.token === l && this.complexityGenerationByFile.delete(e);
		}
	}
	async loadAdjacentMarkers(e, t, n) {
		const a = (await ge(e))?.availableDates?.slice().sort() ?? [], i = a.indexOf(t);
		if (i < 0) return null;
		const s = i > 0 ? a[i - 1] ?? null : null, r = i < a.length - 1 ? a[i + 1] ?? null : null, [o, l] = await Promise.all([s ? ut(e, s, n) : null, r ? ut(e, r, n) : null]), c = (e) => (e?.sleepMarkers ?? []).map((e) => ({
			onset_timestamp: e.onsetTimestamp,
			offset_timestamp: e.offsetTimestamp,
			marker_index: e.markerIndex
		}));
		return {
			previous_day_markers: c(o),
			next_day_markers: c(l),
			previous_date: s,
			next_date: r
		};
	}
	async auditRecordsForView(e, t) {
		const n = Y(), a = await vt(e, t, void 0, n);
		if (0 === e) return a;
		const i = await Ht(e, t, n);
		return [...a, ...i].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
	}
	static isRecordInView(e, t, n) {
		return e.fileId === t && e.analysisDate === n || 0 !== t && Oe(e, t, n);
	}
	async loadAuditLog(e, t, n) {
		const a = await this.auditRecordsForView(e, t), i = (n ? a.filter((e) => e.username === n) : a).filter((e) => "number" == typeof e.id).map((e) => ({
			id: e.id,
			action: e.action,
			client_timestamp: e.clientTimestamp,
			session_id: e.sessionId,
			sequence: e.sequence,
			payload: e.payload ?? null,
			username: e.username,
			file_id: e.fileId
		})), s = [...new Set(a.map((e) => e.username))], r = new Set(a.map((e) => e.sessionId)).size;
		let o = null, l = null;
		for (const c of a) {
			const e = c.clientTimestamp;
			(null === o || e < o) && (o = e), (null === l || e > l) && (l = e);
		}
		return {
			summary: {
				total_events: a.length,
				users: s,
				sessions: r,
				first_event: o,
				last_event: l
			},
			entries: i
		};
	}
	async exportAuditLogCsv(t, n, a) {
		const i = await this.auditRecordsForView(t, n), s = (a ? i.filter((e) => e.username === a) : i).filter((e) => "number" == typeof e.id), r = e("audit_log_csv", "local"), o = await $e(s), l = function(e) {
			const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
			for (const a of e) {
				const e = a.payload?.exportId;
				"string" == typeof e && ("export_started" === a.action ? t.add(e) : "data_exported" !== a.action && "export_cancelled" !== a.action || n.add(e));
			}
			for (const a of n) t.delete(a);
			return t;
		}(s), c = [r.join(",")];
		for (const [e, u] of s.entries()) {
			const t = u.payload ?? null, n = o[e];
			c.push([
				H(String(u.id)),
				H((/* @__PURE__ */ new Date(1e3 * u.clientTimestamp)).toISOString()),
				H(u.action),
				H(_f(null === t ? "" : vf(t, u.action), u.action, t, l)),
				H(u.username),
				H(String(u.fileId)),
				H(u.analysisDate ?? ""),
				H(null == u.studyId ? "" : String(u.studyId)),
				H(u.sessionId),
				H(String(u.sequence)),
				H(u.eventHash ?? ""),
				H(u.previousHash ?? ""),
				H(null === t ? "" : JSON.stringify(t)),
				H(n?.basis ?? "unanchored"),
				H(void 0 === n ? "" : yt(n.state)),
				H(void 0 === n || "unanchored" === n.basis ? "" : JSON.stringify(n.state))
			].join(","));
		}
		return new Blob([`${c.join("\n")}\n`], { type: "text/csv;charset=utf-8" });
	}
	async verifyAuditChain(e, t) {
		const n = await Yt();
		return {
			...await le(n),
			total_rows: n.length,
			rows_for_view: n.filter((n) => a.isRecordInView(n, e, t)).length
		};
	}
	getComplexityProjectionRevision(e) {
		return this.complexitySnapshotByFile.get(e)?.projectionRevision ?? null;
	}
	invalidateLocalCaches() {
		this.nextComplexityGenerationToken += 1, this.complexitySnapshotByFile.clear(), this.complexityGenerationByFile.clear(), this.complexitySignalGenerationByFile.clear(), this.complexityFailureByFile.clear(), this.latestComplexityTokenByFile.clear();
	}
	dispose() {
		this.disposed = !0, this.invalidateLocalCaches();
	}
	async attachSignalsToCurrentComplexitySnapshot(e, n) {
		const a = this.complexitySnapshotByFile.get(e) ?? null;
		if (a?.token !== n.token) return a;
		if (n.signalsByDate || !n.signalRequest || !n.computeIdentity || !n.evidence || !n.evidenceDb) return n;
		const i = n.signalRequest, s = n.computeIdentity, r = n.evidence, o = n.evidenceDb, l = this.complexitySignalGenerationByFile.get(e);
		if (l?.token === n.token) return await l.promise;
		const c = (async () => {
			const a = () => this.complexitySnapshotByFile.get(e) ?? null, l = () => {
				const t = a();
				if (!t || t.token !== n.token) return t;
				const i = {
					...t,
					signalRequest: null
				};
				return this.publishComplexitySnapshot(e, i), i;
			};
			try {
				const c = t(), u = await c.getComputeIdentity();
				if (!Mf(s, u)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), l();
				const d = await c.computeFileSignals(i), p = await c.getComputeIdentity();
				if (!Mf(s, p)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), l();
				if (!zf(d.byDate, JSON.parse(i[0]).days)) throw new Error("The local scoring runtime returned incomplete night-signal evidence.");
				if (this.disposed) throw new Error("The local workspace changed before night-signal evidence could be saved.");
				const f = a();
				if (!f) return null;
				if (f.token !== n.token) return f;
				if (f.signalsByDate) return f;
				const m = await async function(e, t = Y(), n) {
					(!Number.isInteger(e.fileId) || e.fileId <= 0) && Ap(), xp(e.generationKey);
					const a = Mp(e.signalsByDate), i = await Rp(a);
					return Yp(i, e.signalsResultSha256), ia([t.files, t.complexityEvidence], async () => {
						const n = await t.complexityEvidence.where("[fileId+generationKey]").equals([e.fileId, e.generationKey]).first();
						if (!n) throw new Sp();
						const s = await R.waitFor(Qp(n));
						if (ef(s, await t.files.get(s.fileId)), null !== s.signalsResultSha256) {
							if (s.signalsResultSha256 !== i) throw new kp();
							return {
								record: s,
								disposition: "deduplicated",
								evicted: 0
							};
						}
						const r = new Date(Math.max(Date.now(), Date.parse(s.createdAt))).toISOString(), o = {
							...s,
							signalsByDate: a,
							signalsResultSha256: i,
							updatedAt: r
						}, l = await R.waitFor(Kp(o)), c = await R.waitFor(Xp({
							...o,
							recordSha256: l
						}));
						return await t.complexityEvidence.put(c), await tf(c, "signals_enriched", 0), {
							record: c,
							disposition: "signals_enriched",
							evicted: 0
						};
					}, t, n);
				}({
					fileId: e,
					generationKey: r.generationKey,
					signalsByDate: d.byDate
				}, o), h = a();
				if (!h) return null;
				if (h.token !== n.token) return h;
				if (h.signalsByDate) return h;
				const g = {
					...h,
					signalRequest: null,
					projectionInput: Zf(m.record),
					difficultyByDate: qf(m.record),
					signalsByDate: Vf(m.record),
					computeIdentity: m.record.runtimeIdentity,
					projectionRevision: Uf(m.record),
					evidence: Hf(m.record)
				};
				return this.publishComplexitySnapshot(e, g), g;
			} catch {
				return console.warn("[local-data-source] Full night-signal detail is temporarily unavailable; showing the retained difficulty result."), a();
			}
		})();
		this.complexitySignalGenerationByFile.set(e, {
			token: n.token,
			promise: c
		});
		try {
			return await c;
		} finally {
			this.complexitySignalGenerationByFile.get(e)?.token === n.token && this.complexitySignalGenerationByFile.delete(e);
		}
	}
	async loadComplexityBreakdown(e, t, n) {
		let a = null;
		for (let l = 0; l < 8; l++) {
			const i = this.complexityGenerationByFile.get(e);
			if (i) {
				await i.promise;
				continue;
			}
			if (a = this.complexitySnapshotByFile.get(e) ?? null, !a || !a.coveredDates.includes(t)) {
				const a = await ge(e), i = a?.availableDates?.includes(t) ? [...new Set(a.availableDates)].sort() : [t];
				await this.computeDatesStatus(e, i, n);
				continue;
			}
			const s = await this.attachSignalsToCurrentComplexitySnapshot(e, a), r = this.complexityGenerationByFile.get(e);
			if (r) {
				await r.promise;
				continue;
			}
			const o = this.complexitySnapshotByFile.get(e) ?? null;
			if (s && o && o.token === s.token) {
				if (o.token === a.token) {
					a = o;
					break;
				}
				a = o;
			}
		}
		a && !a.coveredDates.includes(t) && (a = null), a || console.warn("[local-data-source] Difficulty detail could not converge on a stable local generation.");
		const i = a?.difficultyByDate[t], s = a?.projectionInput ?? null, r = a?.signalsByDate ?? null, o = a?.computeIdentity ?? null;
		return {
			complexity_pre: i?.difficulty ?? null,
			complexity_post: null,
			projection_revision: a?.projectionRevision ?? null,
			features: i?.features ?? {},
			state: i?.state ?? null,
			verdict: i?.verdict ?? null,
			infinite_reason: i?.infiniteReason ?? null,
			computed_at: i?.computedAt ?? null,
			feature_vector: i?.featureVector ?? null,
			per_guider: i?.perGuider ?? [],
			signals: r?.[t] ?? null,
			explanation: null,
			calculation_provenance: s ? {
				method_export: "computeNightDifficulty",
				request_contract: "FileDifficultyRequest",
				config: s.config,
				runtime_identity: o ?? null,
				evidence_record: a?.evidence ? {
					contract_id: a.evidence.evidenceContractId,
					generation_key: a.evidence.generationKey,
					source_content_sha256: a.evidence.sourceContentHash,
					difficulty_request_sha256: a.evidence.difficultyRequestSha256,
					signals_request_sha256: a.evidence.signalsRequestSha256,
					projection_sha256: a.evidence.projectionSha256,
					difficulty_result_sha256: a.evidence.difficultyResultSha256,
					signals_result_sha256: a.evidence.signalsResultSha256,
					record_sha256: a.evidence.recordSha256
				} : null
			} : null,
			canonical_result: i?.canonicalResult ?? null,
			canonical_intrinsic: i?.canonicalIntrinsic ?? null,
			plot_intervals: xf(r ?? void 0, s ?? void 0, t, a?.projectionRevision ?? void 0)
		};
	}
	onMarkersChanged(e, t, n, a, i, s, r, o = null, l = null, c) {
		const u = [
			"markers",
			e,
			t,
			n || "anonymous",
			this.sourceKey,
			o,
			l,
			s,
			r
		], d = a.getQueryData(u);
		a.setQueryData(u, () => i);
		const p = void 0 !== d && "auto_score" !== n && JSON.stringify(d?.nonwearMarkers ?? []) === JSON.stringify(i?.nonwearMarkers ?? []);
		(function(e, t, n, a = {}) {
			!1 !== a.datesStatus && mo(e, ["dates-status", t]), mo(e, ["local-dates-status", t]), !1 !== a.fileQuality && mo(e, ["file-quality"]), mo(e, ["analysis-summary"]), mo(e, ["adjacent-markers"]), mo(e, [
				"audit-log",
				t,
				n
			]), mo(e, ["actogram-markers", t]), mo(e, [
				"night-stored-variant",
				t,
				n
			]), mo(e, ["local-export-file-stats"]), mo(e, ["local-export-circadian-coverage"]), function() {
				uo += 1;
				for (const e of po) e();
			}();
		})(a, e, t, {
			datesStatus: !p,
			fileQuality: !1
		});
		const f = c ?? Y();
		this.refreshFileScoringCounts(a, {
			fileId: e,
			username: n,
			workspaceScope: o,
			studyId: l
		}, f), p && this.patchDateStatus(a, {
			fileId: e,
			date: t,
			username: n,
			workspaceScope: o
		}, f);
	}
	async unscoreNight(e, t, n, a, i, s, r, o) {
		const l = r ?? Y(), c = af(l, {
			username: n || "anonymous",
			studyId: X().scoring().selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, o);
		return await Ln({
			fileId: e,
			date: t,
			username: n || "anonymous",
			algorithm: a,
			detectionRule: i,
			expected: s,
			signal: this.fileBatch(e, l)?.signal
		}, l, c), null;
	}
	refreshFileScoringCounts(e, t, n) {
		const { fileId: a, username: i, workspaceScope: s, studyId: r } = t, o = [
			"file-quality",
			this.sourceKey,
			s,
			i || "anonymous",
			r
		];
		e.getQueriesData({ queryKey: o }).length > 0 && this.fileScoringCountsIn(n, [a], i).then(([t]) => {
			t && e.setQueriesData({ queryKey: o }, (e) => e && {
				...e,
				items: e.items.map((e) => e.file_id === a ? {
					...e,
					scored_dates: t.scored_dates,
					nonwear_scored_dates: t.nonwear_scored_dates,
					total_dates: t.total_dates
				} : e)
			});
		}).catch(() => {
			mo(e, o);
		});
	}
	async patchDateStatus(e, t, n) {
		const { fileId: a, date: i, username: s, workspaceScope: r } = t;
		for (const o of e.getQueryCache().findAll({ queryKey: ["dates-status", a] })) {
			const t = o.queryKey, l = o.state.data;
			if (t[2] === this.sourceKey && (t[3] !== r || t[4] !== (s || "anonymous"))) continue;
			if (o.state.isInvalidated) continue;
			if (!o.isActive()) {
				mo(e, t);
				continue;
			}
			const c = t[4], u = o.state.dataUpdatedAt;
			try {
				if (!l || t[2] !== this.sourceKey || "string" != typeof c) throw new Error("not a local status list");
				const s = await Jf(a, i, c, n);
				if (o.state.dataUpdatedAt !== u) continue;
				e.setQueryData(t, (e) => e?.map((e) => e.date === i ? {
					...e,
					...s
				} : e));
			} catch {
				mo(e, t);
			}
		}
	}
	async ingestFile(e, t, n) {
		const { processLocalFile: a } = await import("./local-processing-DcKpsxHz.js"), i = X().scoring(), s = this.operationProcessingOptions, r = s?.devicePreset ?? i.devicePreset, o = s?.skipRows ?? i.skipRows, l = s?.choiAxis ?? i.choiAxis, c = s?.columnMapping ?? i.columnMapping, u = s?.countEpochSeconds ?? (30 === i.epochLengthSeconds ? 30 : 60);
		e.name.toLowerCase().endsWith(".csv") && r && "actigraph" !== r && "geneactiv" !== r && Sf(r, c);
		const d = Y(), p = await a(e, r ?? "actigraph", o ?? 10, t, l ?? "vector_magnitude", c, n, {
			...s ? {} : ur(i),
			countEpochSeconds: u,
			sleepPeriodDetectionConfig: Mt(i.sleepPeriodDetection),
			...this.operationProcessingOptions
		});
		return p.alreadyImported || (tm(p.fileId, d, void 0, n), function(e, t, n) {
			Q({
				kind: U.PHYSICAL_ACTIVITY,
				key: `${U.PHYSICAL_ACTIVITY}:${String(e)}`,
				label: "Store activity answers",
				workspaceId: t.name,
				signal: n,
				rerun: !0,
				run: (n) => Ee(async (a) => {
					const [{ computeLocalPhysicalActivityAnalysis: i, physicalActivityStoreAnalysisOptions: s }, { createPhysicalActivityWorkspaceRepository: r, loadPhysicalActivityWorkspaceDays: o }] = await Promise.all([import("./local-physical-activity-analysis-D3o00Up6.js"), import("./physical-activity-workspace-days-CilLtYHD.js")]);
					if (n.signal.throwIfAborted(), n.progress(0, 2), Y() !== t) return;
					const l = s(X().scoring());
					await i({
						...l,
						dbOverride: t,
						activityDayMemo: a,
						onlyFileIds: [e],
						signal: n.signal
					}), n.signal.throwIfAborted(), n.progress(1, 2), await o({
						username: l.username,
						maskPolicy: l.maskPolicy,
						repository: r(t, a),
						onlyFileIds: [e],
						signal: n.signal
					}), n.progress(2, 2);
				})
			}).catch((e) => {
				e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] A file's physical-activity answers could not be stored; the Activity tab computes them.", e);
			});
		}(p.fileId, d, n)), p;
	}
	async loadDailyGgirSummary(e, t) {
		return (t ? await Nt(e, t) : await Be(e)).map(Af);
	}
};
const lm = [
	"observed",
	"not_collected",
	"structurally_absent",
	"not_applicable",
	"nonresponse",
	"technically_unusable",
	"corrupt",
	"censored",
	"below_detection",
	"redacted",
	"mapping_unresolved",
	"unknown"
], cm = lm.filter((e) => "observed" !== e && "technically_unusable" !== e && "corrupt" !== e), um = [
	"insufficient_still_windows",
	"required_calibration_evidence_unavailable",
	"calibration_evidence_unusable"
];
function dm(e, t, n, a) {
	const i = (/* @__PURE__ */ new Date()).toISOString(), s = function(e, t) {
		if (!e) return null;
		const n = function(e) {
			const t = [], { resolution_id: n, factory_parameters_availability: a, factory_parameters_artifact: i, auto_calibration_availability: s, auto_calibration_execution: r, selected_source: o, fallback_source: l, fallback_reason: c, fallback_policy_execution: u, refusal: d } = e;
			/\S/.test(n) || t.push("resolution_id must be non-blank"), lm.includes(a) || t.push(`factory_parameters_availability '${a}' is not an ObservationAvailability`), lm.includes(s) || t.push(`auto_calibration_availability '${s}' is not an ObservationAvailability`);
			const p = [
				o,
				l,
				d
			].filter((e) => void 0 !== e).length;
			if (1 !== p && t.push(`exactly one of selected_source/fallback_source/refusal is required, found ${String(p)}`), "observed" === a && void 0 === i && t.push("observed factory_parameters requires factory_parameters_artifact"), "observed" !== a && void 0 !== i && t.push("non-observed factory_parameters must not carry factory_parameters_artifact"), "observed" === s && void 0 === r && t.push("observed auto_calibration requires auto_calibration_execution"), "observed" !== s && void 0 !== r && t.push("non-observed auto_calibration must not carry auto_calibration_execution"), "factory_parameters" === o && "observed" !== a && t.push("selected_source=factory_parameters requires observed factory evidence"), "auto_calibration" === o && "observed" !== s && t.push("selected_source=auto_calibration requires observed auto-calibration evidence"), void 0 === l || void 0 !== c && void 0 !== u || t.push("fallback_source requires fallback_reason and fallback_policy_execution"), void 0 !== l || void 0 === c && void 0 === u || t.push("fallback provenance is only allowed alongside fallback_source"), d) {
				um.includes(d.code) || t.push(`refusal.code '${d.code}' is not a CalibrationRefusalCode`), "insufficient_still_windows" === d.code && ("auto_calibration" !== d.blocked_source && t.push("insufficient_still_windows must block auto_calibration"), "technically_unusable" !== d.availability && t.push("insufficient_still_windows must use availability technically_unusable")), "required_calibration_evidence_unavailable" !== d.code || cm.includes(d.availability) || t.push(`required_calibration_evidence_unavailable cannot use availability '${d.availability}'`), "calibration_evidence_unusable" === d.code && "technically_unusable" !== d.availability && "corrupt" !== d.availability && t.push(`calibration_evidence_unusable cannot use availability '${d.availability}'`);
				const e = "factory_parameters" === d.blocked_source ? a : s, n = "factory_parameters" === d.blocked_source ? s : a;
				e !== d.availability && t.push(`refusal blocking ${d.blocked_source} must match that channel's availability ('${e}' vs '${d.availability}')`), "observed" === n && t.push("a refusal must not coexist with an observed alternate calibration source");
			}
			if (t.length > 0) throw new Error(`CalibrationSourceResolution is invalid: ${t.join("; ")}`);
			return e;
		}(function(e, t) {
			const n = {
				resolution_id: t.resolutionId,
				factory_parameters_availability: "not_collected"
			};
			if (!e) return {
				...n,
				auto_calibration_availability: "not_collected",
				refusal: {
					code: "required_calibration_evidence_unavailable",
					blocked_source: "auto_calibration",
					availability: "not_collected"
				}
			};
			switch (e.disposition) {
				case "recalibrated":
				case "candidate_retained_below_preferred_quality": return {
					...n,
					auto_calibration_availability: "observed",
					auto_calibration_execution: t.executionId,
					selected_source: "auto_calibration"
				};
				case "skipped_disabled": return {
					...n,
					auto_calibration_availability: "not_applicable",
					refusal: {
						code: "required_calibration_evidence_unavailable",
						blocked_source: "auto_calibration",
						availability: "not_applicable"
					}
				};
				case "identity_fallback_error_increased": return {
					...n,
					auto_calibration_availability: "technically_unusable",
					refusal: {
						code: "calibration_evidence_unusable",
						blocked_source: "auto_calibration",
						availability: "technically_unusable"
					}
				};
				case "identity_fallback_no_valid_fit": return e.observed.fitAttempted ? {
					...n,
					auto_calibration_availability: "technically_unusable",
					refusal: {
						code: "insufficient_still_windows",
						blocked_source: "auto_calibration",
						availability: "technically_unusable"
					}
				} : {
					...n,
					auto_calibration_availability: "not_collected",
					refusal: {
						code: "required_calibration_evidence_unavailable",
						blocked_source: "auto_calibration",
						availability: "not_collected"
					}
				};
			}
		}(e, {
			resolutionId: `local:file-${String(t)}:calibration`,
			executionId: `local:file-${String(t)}:actours-part1-autocalibration`
		})), a = e.applied;
		return {
			scale: a.scale,
			offset: a.offset,
			errorStart: a.errorStart,
			errorEnd: a.errorEnd,
			numPoints: a.numPoints,
			hoursUsed: a.hoursUsed,
			fitAttempted: a.fitAttempted,
			success: a.success,
			disposition: e.disposition,
			message: a.message,
			resolution: n
		};
	}(n, t), r = (e, t = 0) => "number" == typeof e && Number.isFinite(e) ? e : t;
	return e.map((e) => ({
		fileId: t,
		analysisDate: e.calendarDate,
		...a ? { ggirConfigSha256: a.sha256 } : {},
		...e.lmWindows ? { lmWindows: e.lmWindows } : {},
		totalSleepTimeMinutes: r(e.tstMinutes),
		wasoMinutes: r(e.wasoMinutes),
		sleepEfficiency: 100 * r(e.sleepEfficiency),
		mvpaMinutes: r(e.mvpaMinutes),
		moderateMinutes: Number.isFinite(e.moderateMinutes) ? e.moderateMinutes : null,
		vigorousMinutes: Number.isFinite(e.vigorousMinutes) ? e.vigorousMinutes : null,
		lpaMinutes: r(e.lightMinutes),
		sedentaryMinutes: r(e.sedentaryMinutes),
		l5MidpointHour: r(e.l5MidpointHour),
		m5MidpointHour: r(e.m5MidpointHour),
		intensityGradient: Number.isFinite(e.igGradient) ? e.igGradient : null,
		nonwearMinutes: 60 * r(e.nonwearHours),
		validHours: r(e.validHours),
		cleaningCode: e.cleaningCode ?? null,
		fragmentationTpIn2Ac: Number.isFinite(e.fragTpIn2ac) ? e.fragTpIn2ac : null,
		fragmentationTpAc2In: Number.isFinite(e.fragTpAc2in) ? e.fragTpAc2in : null,
		fragmentCount: Number.isFinite(e.nFragments) ? e.nFragments : null,
		includeDayCriterionHours: e.includeDayCriterionHours,
		meetsIncludeDayCriterion: e.meetsIncludeDayCriterion,
		calibration: s,
		createdAt: i,
		updatedAt: i
	}));
}
const pm = "Re-import this file to compute GGIR's invalid mask.", fm = "Hip HDCZA needs the longitudinal angle (anglex or angley), which this recording lacks on GGIR's grid; no night was placed.", mm = "nonwear_detector_unavailable";
function hm(e) {
	return e.isInvalidNight || e.sleepMarkers.some((e) => function(e, t = !1) {
		return "auto" !== e.source || function(e, t = !1) {
			if (!0 === e.edited || t) return !0;
			const n = e.placement;
			return co(e.onsetTimestamp, n?.onset_timestamp) || co(e.offsetTimestamp, n?.offset_timestamp);
		}(e, t);
	}(e));
}
async function gm(e, t, n, a) {
	return e.nightIntervalOverlap(t, n, Float64Array.from(a, ([e]) => e), Float64Array.from(a, ([, e]) => e), Float64Array.from(a, ([, , e]) => void 0 !== e && void 0 === e.unavailable ? e.weight : 0));
}
function ym(e, t) {
	const n = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
	for (const [i, [, , s]] of t.entries()) if (s && e[i] > 0) {
		for (const e of s.detectors) n.add(e);
		for (const e of s.dropped ?? []) a.has(e.detector) || a.set(e.detector, e);
	}
	for (const i of n) a.delete(i);
	return {
		available: [...n],
		dropped: [...a.values()]
	};
}
async function wm(e, t, n, a) {
	const i = a.map(async ([, , a]) => {
		if (!a?.memberFlags || !a.timestamps) return [];
		const { memberFlags: i } = a, s = await e.epochsOverlapping(Float64Array.from(a.timestamps).subarray(0, i.length), 60, t, n);
		return s ? e.nonwearContributors([...i], bt(a.detectors), s[0], s[1]) : [];
	});
	return bt([...new Set((await Promise.all(i)).flat())]);
}
async function _m(e, t, n, a, i, s, r) {
	const o = _a(t, n), l = Object.fromEntries(Object.entries(o).map(([e, t]) => [e, new Uint8Array(t)])), c = await Je(e, { day: t }, r), u = await fa(i, l, {
		offPeriods: a,
		source: s
	}, {
		timestampsSec: e,
		epochLenSec: c
	}, r);
	return null === u || 0 === e.length ? [] : "unavailable" in u ? [[
		e[0],
		e[e.length - 1] + c,
		{
			detectors: [],
			weight: 0,
			unavailable: u.unavailable
		}
	]] : async function(e, t, n, a) {
		const i = await a.nonwearWeightRuns(Float64Array.from(t), Float64Array.from(e.weight), n);
		if (!i) return [];
		const s = e.available.length > 1 ? {
			memberFlags: e.memberFlags,
			timestamps: t
		} : {};
		return [[
			i.dayStart,
			i.dayEnd,
			{
				detectors: e.available,
				weight: 0,
				dropped: e.dropped,
				...s
			}
		], ...i.starts.map((t, n) => [
			t,
			i.ends[n],
			{
				detectors: e.available,
				weight: i.weights[n]
			}
		])];
	}(u, e, c, r);
}
async function vm(e, n, a = [], i = [], s = {}, r = null, o = t()) {
	const l = [], c = a.map(([e, t]) => ({
		startTimestamp: e,
		endTimestamp: t
	}));
	for (const [t, u] of Object.entries(e)) {
		const e = n[t]?.timestamps;
		e && 0 !== e.length && l.push(...await _m(e, {
			nonwearResults: u.nonwear.buffer,
			nonwearResultsChoi2011: u.nonwearChoi2011?.buffer ?? null,
			detachNonwear: u.detachNonwear?.buffer ?? null,
			...s[t]
		}, "", c, i, r, o));
	}
	return l;
}
async function bm(e, t, n, a = Zt, i) {
	return ze((i) => {
		if (!e) return [];
		const s = [];
		for (const { start: r, end: o } of Xe(e)) {
			if (!r || !o) continue;
			const e = i.resolveSpan(r, o, t, De.daytime, a);
			e && s.push({
				markerType: ae.NAP,
				markerIndex: n + s.length + 1,
				onsetTimestamp: e[0],
				offsetTimestamp: e[1]
			});
		}
		return s;
	}, new je(i));
}
function Sm(e) {
	const t = e instanceof Error ? e.message : "";
	return t.startsWith("runGgirPart3:") ? t : t.includes("timed out") ? `it timed out after ${String(I / 6e4)} minutes` : t.includes("is not a function") ? "this build's actours WASM has no runGgirPart3 export" : "the actours WASM runtime failed (out of memory or a Rust panic)";
}
async function km(e, n, a, i = [], s = /* @__PURE__ */ new Map(), r, o, l, c = "wrist", u = Y(), d, p, f, m, h, g) {
	const y = u, w = o?.ggirConfig ?? await jr(y), _ = n.length;
	if (0 === _) return null;
	const v = s.values().next().value;
	v && ke(e, v.importMappingProvenance);
	const b = p ?? t(), S = f ?? (() => G(b)), k = await wo(c, r?.variant, b), A = k.variant, x = k.sensorLocation, N = {
		...l ?? {},
		haspt_variant: A,
		hdcza_proposal_revision: 6,
		ggir_config_sha256: w.sha256
	}, T = o?.angley5s, M = o?.anglex5s, R = T && T.length === _ ? T : void 0, E = M && M.length === _ ? M : void 0, D = o?.invalid5s?.length === _ ? o.invalid5s : void 0, $ = void 0 !== h && void 0 !== D;
	if (void 0 === D) return pm;
	const F = "hip" === x && !R && !E;
	if (F && (console.warn("[local-processing] Hip HDCZA was skipped because no aligned longitudinal axis was available."), !$)) return fm;
	let P = !1;
	const O = o?.dstRuns ?? [], j = D, B = o?.activity5s?.length === _ ? o.activity5s : void 0;
	C(d, "before local HASPT placement");
	const L = await W(b, (e) => e.runGgirPart3({
		anglez: n,
		ggirConfigCsv: w.csvText,
		hasibCounts: ve(w.csvText, o?.zeroCrossings5s),
		...E ? { anglex: E } : {},
		...R ? { angley: R } : {},
		...B ? { enmo: B } : {},
		invalid: j,
		startTsEpochSec: a,
		hasptAlgo: A,
		...void 0 !== r?.config ? { hasptConfig: r.config } : {},
		..."hip" !== x || E && R ? {} : { longitudinalAxis: R ? 2 : 1 },
		...o?.timezone ? { timezone: o.timezone } : {}
	}), {
		ms: I,
		label: `local ${A} placement`,
		signal: d,
		cancel: S
	}).then((e) => ({
		result: e,
		failure: null
	}), (e) => (ee(e, d, `local ${A} placement`), console.warn("[local-processing] GGIR Part 3 failed for this recording."), {
		result: null,
		failure: Sm(e)
	}));
	if (L.result && $ && h(L.result.part3Sib5s), F) return fm;
	if (!L.result) return `GGIR Part 3 (${A}) failed: ${L.failure}`;
	const U = L.result.part3SptNights, H = await b.ggirIndicesToWallClockMs(Uint32Array.from(U.flatMap((e) => [e.onsetIdx, e.wakeIdx])), 1e3 * a, [...O], o?.wallClockMs ? Float64Array.from(o.wallClockMs) : void 0), Z = U.map((e, t) => ({
		onsetTimestamp: H[2 * t] / 1e3,
		offsetTimestamp: H[2 * t + 1] / 1e3,
		analysisDate: e.analysisDate
	}));
	for (const { onsetTimestamp: t, offsetTimestamp: I, analysisDate: G } of Z) {
		C(d, "before local HASPT marker placement");
		const n = await ut(e, G, jn, z.VAN_HEES_2015, null, y);
		if (n && hm(n)) continue;
		const a = await gm(b, t, I, i), r = ym(a.seconds, i), o = 0 === r.available.length && 0 === r.dropped.length ? N : {
			...N,
			nonwear_detectors_available: r.available,
			nonwear_detectors_dropped: r.dropped.map(({ detector: e, reason: t }) => ({
				detector: e,
				reason: t
			}))
		}, u = pa(r.dropped, "ggir"), p = (e) => [e, ...u].join("; "), f = a.weightedFraction, h = f > 0 && r.available.length > 1 ? await wm(b, t, I, i) : null, w = await bm(s.get(G) ?? null, G, 1, st(e), b), _ = aa(null, c), v = [{
			markerType: ae.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: t,
			offsetTimestamp: I
		}, ...w].map((e) => ({
			...e,
			source: "auto",
			settingsHash: _
		}));
		C(d, "before local HASPT marker persistence"), await X().nights.writeHeadless({
			signal: d,
			fileId: e,
			date: G,
			expected: Un(n),
			username: "auto_score",
			sleepMarkers: v,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p(`${A} SPT: ${xt(t)} → ${xt(I)}` + (w.length > 0 ? `; ${w.length} diary nap(s)` : "") + (f > 0 ? `; selected-detector nonwear overlap ${Math.round(100 * f)}%` : "") + (h ? ` from ${ya(h, r.available.length)}` : "")),
			algorithm: z.VAN_HEES_2015,
			sleepPeriodDetectionConfig: o
		}, y, {
			...m ? { binding: m } : {},
			events: () => m ? [{
				action: "auto_score_applied",
				payload: Hn({
					algorithm: z.VAN_HEES_2015,
					sleepPeriodDetection: l ?? null,
					sleepCount: 1,
					napCount: w.length,
					markers: v
				})
			}] : []
		}).then(() => !0, (e) => (ee(e, d, "local HASPT marker persistence"), console.warn("[local-processing] HDCZA marker persistence failed."), P = !0, !1)) && g?.(G);
	}
	return P ? "one or more auto-marker writes failed" : null;
}
const Im = /* @__PURE__ */ new Set([
	2,
	5,
	6
]);
function Am(e) {
	return !1 !== e.imputeTimegaps && (null == e.dataFormat || Im.has(e.dataFormat)) && (null == e.configtz || e.configtz === e.desiredtz);
}
function xm(e) {
	return `GGIR zone ${e} from the GT3X info.txt TimeZone: the app's assumption, since GGIR takes desiredtz and configtz from its own settings`;
}
async function Nm(e, t, n, a, i) {
	const s = a.anglez.length;
	return (await e.ggirDstPlaceholderCuts(t, [...n], i)).map(({ start: e, count: t, beforeTimestampSec: n }) => {
		const i = (n) => n && n.length === s ? Array.from(n.subarray(e, e + t)) : void 0, r = i(a.anglex), o = i(a.angley), l = i(a.enmo), c = i(a.zcx), u = i(a.zcy), d = i(a.zcz);
		return {
			beforeTimestampSec: n,
			anglez: i(a.anglez) ?? [],
			...r ? { anglex: r } : {},
			...o ? { angley: o } : {},
			...l ? { enmo: l } : {},
			...c ? { zcx: c } : {},
			...u ? { zcy: u } : {},
			...d ? { zcz: d } : {}
		};
	});
}
var Tm = class extends Error {
	name = "GgirImportRefusal";
	category;
	constructor(e) {
		super(ln(e)), this.category = e;
	}
};
function Mm(e, t) {
	const n = mn(e);
	if (n && (n.notRead && n.notRead.length > 0 && t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR output",
		warning: n.notRead.map((e) => `not read: ${e.path}: ${e.reason}.`).join(" ")
	}), n.refusedNotRead)) throw new Tm("ggir-not-read");
}
function Rm(e, t) {
	const { username: n, selectedStudyId: a } = X().scoring();
	return mt.captureWorkspaceBinding(e, {
		signal: t,
		username: n,
		studyId: a
	});
}
const zm = /* @__PURE__ */ new WeakMap();
async function Em(e, t, n, a) {
	const i = e.timestampsMs.length;
	if (0 === i || e.enmo5s.length !== i || e.anglez5s.length !== i) throw new Error("GGIR meta RData did not contain aligned metashort timestamp, ENMO, and anglez columns.");
	const s = {
		desiredtz: e.desiredtz ?? void 0,
		dataFormat: e.inspection?.dformc ?? void 0,
		...a ? Lt(await n.ggirConfigValues(a)) : {}
	}, { runs: r, storedMs: o, steps: l } = await n.wallClockDstPlaceholders(e.timestampsMs, 1e3 * e.epochSeconds, Am(s)), c = o.filter((e) => !Number.isNaN(e)), u = (e.timestampsMs[0] ?? 0) / 1e3, d = t?.sources.ms2 ? t.nonwear : e.nonwearShort, p = {
		...d.length === i ? { nonwear: d } : {},
		...e.invalidShort.length === e.timestampsMs.length ? { invalid: e.invalidShort } : {}
	}, f = t ? t.sources.ms3 ? t.sib : void 0 : e.part3Sib5s?.length === i ? e.part3Sib5s : void 0, m = await hs(n, o, e.enmo5s, e.anglez5s, {
		...p,
		...t?.sources.ms2 ? { invalid: t.invalid } : {},
		...f ? { sib: f } : {}
	});
	if (t && (Kn(t.sleepWindows), t.sources.ms3 && t.sib.length !== i || t.sources.ms2 && (t.invalid.length !== i || t.nonwear.length > 0 && t.nonwear.length !== i))) throw new Error("GGIR Parts 2–3 do not cover the same 5 s epochs as Part 1.");
	return {
		n: i,
		startSec: u,
		dstRuns: r,
		storedMs: o,
		clockSteps: l,
		wallClockMs: c,
		timegaps: s,
		ggirSib: f,
		ggirByDate: m
	};
}
const Dm = /* @__PURE__ */ new WeakMap();
var $m = class extends Error {};
const Cm = /* @__PURE__ */ new WeakMap();
async function Fm(e, t, n, a = !0) {
	let i = Cm.get(t);
	if (i || (i = /* @__PURE__ */ new Map(), Cm.set(t, i)), i.has(e)) {
		const t = i.get(e);
		if (!(t instanceof $m)) return t;
		if (!a) throw t;
	}
	let s = Dm.get(t);
	s || (s = /* @__PURE__ */ new Map(), Dm.set(t, s));
	const r = s.get(e);
	if (r) return r;
	const o = (async () => {
		const a = await ge(e, t);
		if (!it(a)) return null;
		if (0 === (await In(e, t)).length) return null;
		const i = await t.ggirResultsBundles.get(e);
		if (!i) return null;
		const s = V(n);
		if (a?.ggirSavedNonwearSettled) return Ka(i.configCsv, s);
		const r = [...(await on(e, t)).values()].filter((e) => e.ggirTimestamps?.byteLength && e.unifiedNonwearMasks?.[Ce.ggir_saved]?.byteLength !== e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), o = r.filter((e) => e.vanHeesNonwear?.byteLength === e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), l = r.filter((e) => !o.includes(e)), c = l.length ? await ie(t, e) : null, u = c?.ms2 ? await s.reviewGgirResults({
			part1: new Uint8Array(c.part1),
			configCsv: c.configCsv,
			ms2: new Uint8Array(c.ms2),
			edits: [],
			crossCheck: !1
		}) : null, d = c && u?.nonwear.length ? (await Em(await s.readGgirMeta(new Uint8Array(c.part1), null, !0), u, s, c.configCsv)).ggirByDate : null, p = [...o.map((e) => ({
			date: e.date,
			unifiedNonwearMasks: {
				...e.unifiedNonwearMasks,
				[Ce.ggir_saved]: e.vanHeesNonwear
			},
			vanHeesNonwear: null
		})), ...d ? l.map((e) => {
			const t = d.get(e.date), n = new Float64Array(e.ggirTimestamps);
			if (!t?.nonwear || t.timestamps.length !== n.length || !n.every((e, n) => e === t.timestamps[n])) throw new $m("Saved GGIR nonwear does not match the stored epoch grid.");
			return {
				date: e.date,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					[Ce.ggir_saved]: new Uint8Array(t.nonwear).buffer
				},
				vanHeesNonwear: null
			};
		}) : []];
		return await F(t, [
			t.projectMeta,
			t.activityDays,
			t.physicalActivityFileSummaries,
			t.files
		], async () => {
			await Promise.all(p.map(({ date: a, ...i }) => Fe(e, a, i, t, n))), await t.files.update(e, { ggirSavedNonwearSettled: !0 });
		}, n), p.length, Ka(i.configCsv, s);
	})().then((t) => (i.set(e, t), t)).catch((t) => {
		throw !n?.aborted && t instanceof $m && i.set(e, t), console.warn("[local-processing] Could not fill saved GGIR nonwear from retained ms2."), t;
	}).finally(() => {
		s.delete(e);
	});
	return s.set(e, o), o;
}
async function Pm(e, t, n, a, i) {
	const s = mn(e)?.configCsv, { n: r, startSec: o, dstRuns: l, storedMs: c, clockSteps: u, wallClockMs: d, timegaps: p, ggirSib: f, ggirByDate: m } = await Em(t, n, a, await s?.text()), h = [...m.keys()].sort(), g = n ? await async function(e, t) {
		const n = await Promise.all(e.map(async (e) => t.has(e) || t.has(await ((e) => a.nextDate(e))(e) ?? "")));
		return e.filter((e, t) => n[t]);
	}(Yn(n), m) : [], y = g.length > 0 ? g : await Ts(m, a);
	if (0 === h.length) throw new Error("GGIR meta RData did not contain any dated 5 s epochs.");
	const w = h.flatMap((e) => {
		const t = m.get(e);
		if (!t) return [];
		C(i, `saveActivityDay ${e}`);
		const a = /* @__PURE__ */ new Float64Array();
		return [{
			fileId: 0,
			date: e,
			timestamps: a.buffer,
			axisY: a.buffer,
			vectorMagnitude: a.buffer,
			ggirTimestamps: new Float64Array(t.timestamps).buffer,
			ggirEnmo: new Float64Array(t.enmo).buffer,
			ggirAnglez: new Float64Array(t.anglez).buffer,
			...t.anglex ? { ggirAnglex: new Float64Array(t.anglex).buffer } : {},
			...t.angley ? { ggirAngley: new Float64Array(t.angley).buffer } : {},
			...t.sib ? { ggirSib: new Uint8Array(t.sib).buffer } : {},
			...t.nonwear ? n ? { unifiedNonwearMasks: { [Ce.ggir_saved]: new Uint8Array(t.nonwear).buffer } } : { vanHeesNonwear: new Uint8Array(t.nonwear).buffer } : {},
			...t.invalid ? { ggirInvalid: new Uint8Array(t.invalid).buffer } : {},
			algorithmResults: {},
			nonwearResults: null
		}];
	});
	return {
		n: r,
		startSec: o,
		dstRuns: l,
		storedMs: c,
		clockSteps: u,
		wallClockMs: d,
		timegaps: p,
		rdataConfig: s,
		availableDates: h,
		nightDates: y,
		ggirSib: f,
		dayRecords: w,
		facts: await Promise.all(w.map((e) => Bt(e, a))),
		signalDates: await Zr(0, w, a).catch((e) => (i?.throwIfAborted(), rn("warn", "GGIR circadian coverage store failed", At(e)), null)),
		placeholders: l.length > 0 ? await Nm(a, 1e3 * o, l, {
			anglez: t.anglez5s,
			enmo: t.enmo5s
		}, d) : void 0,
		summaries: n ? await ta(n, 0, i, a) : [],
		markers: n ? await Xn(n, u, a) : void 0
	};
}
async function Om(e, t, n, a) {
	const i = a ?? await q(e, void 0, n), s = await Jt(i.fullHash, t) ?? await Sn(i.prefixHash, t, i.fullHash);
	return s?.id ? s : void 0;
}
const jm = [
	["ms2", "stockMs2"],
	["ms3", "stockMs3"],
	["ms4", "stockMs4"],
	["ms5", "stockMs5"]
];
async function Bm(e, t, n) {
	const a = mn(t);
	if (!a) return null;
	const [i, ...s] = await Promise.all([a.configCsv.text(), ...jm.map(([e]) => a[e]?.arrayBuffer())]), r = await a.qwindowCsv?.text();
	return n.transaction("rw", [
		n.files,
		n.ggirResultsBundles,
		n.ggirResultsBlobs,
		n.ggirCorrectedValues
	], async () => {
		const [t, o] = await Promise.all([n.ggirResultsBlobs.get(e), n.ggirResultsBundles.get(e)]);
		return t && o ? o.configCsv === i && jm.every(([e, n], a) => ((e, t) => {
			if (void 0 === e || void 0 === t) return e === t;
			const n = new Uint8Array(e), a = new Uint8Array(t);
			return n.length === a.length && n.every((e, t) => e === a[t]);
		})(t[n] ?? t[e], s[a])) ? !a.resultsCsv || t.resultsCsv ? null : (await n.ggirResultsBundles.update(e, {
			resultsCsv: a.resultsCsv,
			...void 0 !== r && void 0 === t.qwindowCsv ? { qwindowCsv: r } : {}
		}), await n.ggirCorrectedValues.delete(e), await an(n, [e]), "added") : "different_run" : null;
	});
}
const Gm = {
	none: "File already imported",
	added: "File already imported; GGIR's results files added",
	different_run: "File already imported; this folder holds a different GGIR run of it, so the stored one was kept"
};
async function Lm(e, n, a, i, r, o, l) {
	const c = zm.get(e);
	zm.delete(e);
	const u = r?.db ?? Y(), d = i?.ggirConfig ?? await jr(u), p = o ?? t(), f = r ?? {
		db: u,
		attemptId: T(),
		auditBinding: Rm(u, a),
		signal: a,
		recording: await Gr(e, a, p)
	};
	C(a, "processGgirMetaRDataFile"), Mm(e, n);
	const m = l ?? (() => {
		G(p);
	});
	n?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR meta RData..."
	});
	const { prefixHash: h, fullHash: g } = c?.value?.hashes ?? await q(e, (e) => {
		n?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, a), y = await Om(e, u, a, {
		prefixHash: h,
		fullHash: g
	});
	if (y?.id) {
		const t = await Bm(y.id, e, u);
		n?.({
			phase: "complete",
			percent: 100,
			message: Gm[t ?? "none"]
		});
		const a = y.availableDates;
		return await gn(e.name, u), {
			alreadyImported: !0,
			...t ? { ggirResultsFiles: t } : {},
			fileId: y.id,
			availableDates: a,
			sourceType: y.sourceType ?? s.GGIR_5S_UPLOAD
		};
	}
	const w = await Qe(e.name, u);
	if (w && "incomplete" !== w.ingestState) throw new Tm(yn);
	if (n?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing GGIR metashort and metalong..."
	}), C(a, "before reading GGIR RData"), c && "error" in c) throw c.error;
	const _ = mn(e), v = c?.value?.input ?? (_ ? await Jn(_) : null), b = c?.value || !v ? void 0 : await W(p, (e) => e.prepareGgirRecording(v), {
		ms: I,
		label: "prepareGgirRecording",
		signal: a,
		cancel: m
	}), S = b && v ? (A = v, null === (x = b.cleanedNightsCsv) ? A : {
		...A,
		cleanedNightsCsv: x
	}) : v;
	var A, x;
	const N = c?.value || S ? void 0 : await e.arrayBuffer();
	C(a, "after reading GGIR RData");
	const M = c?.value?.meta ?? b?.meta ?? await W(p, (e) => e.readGgirMeta(k(new Uint8Array(N), [N]), d.csvText, !1), {
		ms: 3e5,
		label: "readGgirMeta",
		signal: a,
		cancel: m
	}), R = function(e, t) {
		return t && !t.sources.ms4 && e?.notRead?.some((e) => /(?:^|\/)meta\/ms4\.out\//u.test(e.path)) ? {
			...t,
			importNotices: [...t.importNotices, ea]
		} : t;
	}(_, c?.value?.review ?? b?.review ?? null), z = c?.value?.computed ?? await Pm(e, M, R, p, a), { n: E, startSec: D, dstRuns: $, storedMs: P, clockSteps: O, wallClockMs: j, timegaps: B, rdataConfig: L, availableDates: U, nightDates: H, ggirSib: Z } = z;
	n?.({
		phase: "storing",
		percent: 55,
		message: "Saving GGIR 5 s epochs..."
	});
	const V = await Jr(f, {
		filename: e.name,
		devicePreset: "ggir_5s_meta",
		epochLengthSeconds: M.epochSeconds,
		availableDates: H,
		fileHash: h,
		sourceContentHash: g,
		sourceSizeBytes: e.size,
		source: "local",
		eventMarkerInstants: [],
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: s.GGIR_5S_UPLOAD,
		...D > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * D)).toISOString() } } : {},
		sourceProfileId: "actoglance.source.ggir_rdata.v1",
		...M.desiredtz ? { ggirTimezone: M.desiredtz } : {},
		...$.length + O.length > 0 ? { ggirClockBasis: (J = B, K = null != L, Am(J) ? `GGIR's imputed fall-back hour left out (${K ? "config.csv: imputeTimegaps TRUE, configtz = desiredtz" : "no config.csv, so GGIR's defaults are assumed"})` : `GGIR's repeated fall-back hour kept as recorded data (${!1 === J.imputeTimegaps ? "imputeTimegaps = FALSE" : null == J.dataFormat || Im.has(J.dataFormat) ? `configtz ${J.configtz ?? ""} differs from desiredtz ${J.desiredtz ?? ""}` : `GGIR does not gap-impute data format ${String(J.dataFormat)}`})`) } : {},
		...O.length > 0 ? { ggirClockSteps: O } : {},
		...$.length > 0 ? { ggirDstPlaceholders: z.placeholders } : {}
	}, p);
	var J, K;
	if ("already_complete" === V.kind) {
		const t = V.record.id;
		if (null == t) throw new Error("Completed local import identity is invalid.");
		const n = await Bm(t, e, u);
		return await gn(e.name, u), {
			alreadyImported: !0,
			...n ? { ggirResultsFiles: n } : {},
			fileId: t,
			availableDates: V.record.availableDates,
			sourceType: V.record.sourceType ?? s.GGIR_5S_UPLOAD
		};
	}
	const X = V.guard.fileId;
	let Q = null, te = !1;
	const ne = !R && !Z, ae = await _?.qwindowCsv?.text();
	if (R && S) try {
		const t = S.configCsv ? await at(S.configCsv, p) : void 0;
		if (await Kr(f), await On(z.summaries.map((e) => ({
			...e,
			fileId: X
		})), u, a), await F(u, [u.files, u.ggirResultsBundles], async () => {
			await u.ggirResultsBundles.put(Qn(X, _?.recordingFile ?? e.name, S, R, {
				part2Reports: _?.part2Reports,
				personReports: _?.personReports,
				qwindowCsv: ae,
				resultsCsv: _?.resultsCsv
			})), await u.files.update(X, {
				ggirBundleRevision: crypto.randomUUID(),
				ggirSavedNonwearSettled: !0,
				...t ? { ggirNonwearDetector: t } : {}
			});
		}, a), !await Vn(X, R, so(i, f.recording), u, !0, O, a, z.markers)) throw new Error("GGIR results markers could not be saved.");
	} catch (me) {
		throw await Xr(f), me;
	}
	const ie = M.invalidShort.length === E ? M.invalidShort : null, se = R ? null : await W(p, (e) => e.runGgirFromEpoch({
		source: "ggir_part1_rdata",
		invalidMask: ie ? "ggir_part2" : "none"
	}, M.anglez5s, M.enmo5s, M.epochSeconds, D, ie ?? new Uint8Array(E), M.desiredtz ?? void 0, d.csvText).catch((e) => (ee(e, a, "runGgirFromEpoch (GGIR RData)"), rn("warn", "GGIR epoch analysis failed", At(e)), te = !0, null)), {
		ms: I,
		label: "runGgirFromEpoch (GGIR RData)",
		signal: a,
		cancel: m
	});
	if (se?.days?.length) {
		const e = dm(se.days, X, void 0, d);
		await Kr(f), await On(e, u, a).catch((e) => {
			rn("warn", "GGIR daily summary store failed", At(e)), te = !0;
		});
	}
	const re = function(e, t) {
		const n = [];
		if (!t || t.length !== e.length) return n;
		let a = null;
		for (let i = 0; i < e.length; i++) {
			const s = e[i] ?? 0, r = 0 !== (t[i] ?? 0);
			if (r && null === a && (a = s), (!r || i === e.length - 1) && null !== a) {
				const t = r && i === e.length - 1 ? s + 5e3 : s;
				n.push([a / 1e3, t / 1e3]), a = null;
			}
		}
		return n;
	}(O.length > 0 ? P : M.timestampsMs, M.nonwearShort), oe = new Map((R ? [] : await gt(X, u)).map((e) => [e.analysisDate, e])), le = M.anglez5sImputed?.length === E ? M.anglez5sImputed : M.anglez5s, ce = M.enmo5sImputed?.length === E ? M.enmo5sImputed : M.enmo5s;
	Q = R ? Q : await km(X, le, D, re, oe, i?.hasptVariant, {
		activity5s: ce,
		...ie ? { invalid5s: ie } : {},
		dstRuns: $,
		wallClockMs: j,
		...M.desiredtz ? { timezone: M.desiredtz } : {}
	}, oa(i?.sleepPeriodDetectionConfig, ga), so(i, f.recording), u, a, p, m, f.auditBinding);
	const ue = z.dayRecords.map((e) => ({
		...e,
		fileId: X
	}));
	let de = !1;
	await Kr(f);
	const pe = (await Ae(ue, u, z.facts, a).catch((e) => (rn("warn", "GGIR activity day store failed", At(e)), Wi(e, "saveActivityDay (GGIR RData)"), de = !0, []))).length;
	if (!de && z.signalDates && await Ve(X, U, z.signalDates, u, a).catch((e) => {
		a?.throwIfAborted(), rn("warn", "GGIR circadian coverage store failed", At(e));
	}), de || pe !== U.length || 0 === pe) throw await Xr(f), /* @__PURE__ */ new Error("Could not save any GGIR RData epochs — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	C(a, "before completing GGIR RData ingest"), await Yr(f);
	const fe = [
		...R?.configWarnings ?? [],
		...R?.importNotices ?? [],
		R?.sources.ms4 && Zn(R),
		_ && !_.resultsCsv && "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.",
		de && "One or more days of GGIR RData epochs could not be saved.",
		Q && (R ? "GGIR results markers could not be saved." : "Sleep window detection (HDCZA) could not place auto-markers."),
		te && (R ? "GGIR source summaries could not be saved." : "GGIR daily summaries could not be computed or saved for this GGIR RData file."),
		ne && "GGIR HASIB sleep/wake flags could not be computed."
	].filter(Boolean).join(" ");
	return n?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete",
		...fe ? { warning: fe } : {}
	}), {
		fileId: X,
		availableDates: H,
		sourceType: s.GGIR_5S_UPLOAD,
		...R ? { ggir: {
			...(await import("./ggir-results-import-XPThbWOd.js").then((e) => e.u)).ggirImportCounts(R, Wn(_?.part2Reports, R, _?.recordingFile ?? e.name)),
			bodySite: (await ge(X, u))?.recording?.bodySite
		} } : {}
	};
}
async function Um(e, n, a, i, r, o, l) {
	const c = o?.db ?? Y(), u = l ?? V(r), d = o ?? {
		db: c,
		attemptId: T(),
		auditBinding: Rm(c, r),
		signal: r,
		recording: await Gr(e, r, u)
	};
	C(r, "processMappedMimsCsvFile"), i?.({
		phase: "reading",
		percent: 0,
		message: "Reading mapped MIMS CSV..."
	});
	const { prefixHash: p, fullHash: f } = await q(e, (e) => {
		i?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, r), m = await Om(e, c, r, {
		prefixHash: p,
		fullHash: f
	});
	if (m?.id) {
		i?.({
			phase: "complete",
			percent: 100,
			message: "File already imported"
		});
		const e = m.availableDates;
		return {
			alreadyImported: !0,
			fileId: m.id,
			availableDates: e,
			sourceType: m.sourceType ?? s.EPOCHS_60S
		};
	}
	const h = await Qe(e.name, c);
	if (h && "incomplete" !== h.ingestState) throw new en();
	i?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing mapped MIMS columns..."
	}), C(r, "before reading mapped MIMS CSV");
	const g = await async function(e, n, a, i) {
		const s = oe(await e.text()), r = P(s);
		if (r.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
		const o = r.records, l = o[n]?.text;
		if (!l) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
		const c = D(l), u = Z(l, c), d = es(a, u);
		if (d.length > 0) throw new Error(Mi(d));
		const p = Rs(u, a.datetime_column), f = Rs(u, a.date_column), m = Rs(u, a.time_column), h = Rs(u, a.mims_unit_column), g = Rs(u, a.mims_unit_x_column), y = Rs(u, a.mims_unit_y_column), w = Rs(u, a.mims_unit_z_column), _ = [], v = [], b = [], S = [], k = [], I = [];
		for (let t = n + 2; t <= o.length; t++) {
			const e = o[t - 1];
			if (!e?.text.trim()) continue;
			const n = Z(e.text, c);
			I.push({
				sourceRow: e.sourceRow,
				row: n,
				label: Fs(n, p, f, m)
			});
		}
		const A = await (i ?? t()).sourceLabelsWallClockMs(I.map(({ label: e }) => e)), x = I.findIndex((e, t) => !Number.isFinite(A[t] ?? NaN));
		if (x >= 0) throw new Error(`Could not parse timestamp on row ${String(I[x].sourceRow)} of the mapped MIMS CSV.`);
		for (const [t, { row: N }] of I.entries()) _.push(A[t]), v.push(Ps(N, h)), b.push(Ps(N, g)), S.push(Ps(N, y)), k.push(Ps(N, w));
		if (0 === _.length) throw new Error("The mapped MIMS CSV did not contain any data rows.");
		return {
			timestampsMs: new Float64Array(_),
			mimsUnit: null === h ? /* @__PURE__ */ new Float64Array() : new Float64Array(v),
			mimsUnitX: null === g ? /* @__PURE__ */ new Float64Array() : new Float64Array(b),
			mimsUnitY: null === y ? /* @__PURE__ */ new Float64Array() : new Float64Array(S),
			mimsUnitZ: null === w ? /* @__PURE__ */ new Float64Array() : new Float64Array(k)
		};
	}(e, n, a, u);
	C(r, "after reading mapped MIMS CSV");
	const y = s.EPOCHS_60S, w = await async function(e, t) {
		const n = /* @__PURE__ */ new Map(), a = t.timestampsMs.length, i = Os(t.mimsUnit, a), s = Os(t.mimsUnitX, a), r = Os(t.mimsUnitY, a), o = Os(t.mimsUnitZ, a), l = Float64Array.from(t.timestampsMs, (e) => e / 1e3);
		for (const [c, u] of await cs(e, l)) n.set(c, {
			timestamps: us(l, u, 0),
			...i ? { mimsUnit: us(i, u, NaN) } : {},
			...s ? { mimsUnitX: us(s, u, NaN) } : {},
			...r ? { mimsUnitY: us(r, u, NaN) } : {},
			...o ? { mimsUnitZ: us(o, u, NaN) } : {}
		});
		return n;
	}(u, g), _ = [...w.keys()].sort(), v = await Ts(w, u);
	i?.({
		phase: "storing",
		percent: 55,
		message: "Saving mapped MIMS epochs..."
	});
	const b = await Jr(d, {
		filename: e.name,
		devicePreset: "mims_metrics",
		epochLengthSeconds: 60,
		availableDates: v,
		fileHash: p,
		sourceContentHash: f,
		sourceSizeBytes: e.size,
		source: "local",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: y,
		...(g.timestampsMs[0] ?? 0) > 0 ? { recording: { effectiveTime: new Date(g.timestampsMs[0] ?? 0).toISOString() } } : {}
	}, u);
	if ("already_complete" === b.kind) {
		const e = b.record.id;
		if (null == e) throw new Error("Completed local import identity is invalid.");
		return {
			alreadyImported: !0,
			fileId: e,
			availableDates: b.record.availableDates,
			sourceType: b.record.sourceType ?? y
		};
	}
	const S = b.guard.fileId;
	let k = !1, I = 0;
	for (const t of _) {
		const e = w.get(t);
		if (!e) continue;
		C(r, `saveActivityDay ${t}`);
		const n = /* @__PURE__ */ new Float64Array();
		await Kr(d);
		const a = {
			fileId: S,
			date: t,
			timestamps: n.buffer,
			axisY: n.buffer,
			vectorMagnitude: n.buffer,
			ggirTimestamps: new Float64Array(e.timestamps).buffer,
			...e.mimsUnit ? { mimsUnit: new Float64Array(e.mimsUnit).buffer } : {},
			...e.mimsUnitX ? { mimsUnitX: new Float64Array(e.mimsUnitX).buffer } : {},
			...e.mimsUnitY ? { mimsUnitY: new Float64Array(e.mimsUnitY).buffer } : {},
			...e.mimsUnitZ ? { mimsUnitZ: new Float64Array(e.mimsUnitZ).buffer } : {},
			algorithmResults: {},
			nonwearResults: null
		};
		await pt(a, c, r).then(() => !0).catch((e) => (rn("warn", "MIMS activity day store failed", At(e)), Wi(e, "saveActivityDay (mapped MIMS CSV)"), k = !0, !1)) && (I += 1, await eo(S, [a], c, u, r));
	}
	if (k || I !== _.length || 0 === I) throw await Xr(d), /* @__PURE__ */ new Error("Could not save any mapped MIMS data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return C(r, "before completing mapped MIMS ingest"), await Yr(d), i?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete"
	}), {
		fileId: S,
		availableDates: v,
		sourceType: y
	};
}
function Hm(e) {
	const t = e.trim();
	if (!/^\d{4}-\d{2}-\d{2}/.test(t)) return null;
	const n = t.includes("	") ? "	" : ",";
	return t.split(n).length;
}
async function Zm(e, t, n) {
	const a = Math.min(e.size, 16777216);
	let i = Math.min(16384, a);
	for (;;) {
		C(t, "before reading GeneActiv CSV header");
		const s = await re(e, i, n);
		C(t, "after reading GeneActiv CSV header");
		const r = i >= a, o = s.split("\n"), l = r && i >= e.size ? o : o.slice(0, -1);
		for (const e of l) {
			const t = Hm(e);
			if (null !== t) return t >= 12;
		}
		if (r) return !1;
		i = Math.min(2 * i, a);
	}
}
export { ms as $, xr as A, ys as B, Pr as C, Rr as D, Er as E, $s as F, bs as G, Is as H, Es as I, Ss as J, ds as K, Ds as L, tr as M, nr as N, Fr as O, ar as P, _s as Q, Cs as R, jr as S, Dr as T, ks as U, ws as V, vs as W, ls as X, Ts as Y, hs as Z, Xr as _, dm as a, Wi as at, Gr as b, ro as c, Vi as ct, Kr as d, Hi as dt, Fm as ensureSavedGgirNonwear, Ns as et, ao as f, zi as ft, Yr as g, to as h, vm as i, Zm as isGeneactivEpochCsv, Ji as it, ir as j, Tr as k, oo as l, qi as lt, no as m, Di as mt, xm as n, rs as nt, km as o, Xi as ot, Jr as p, Lm as processGgirMetaRDataFile, Um as processMappedMimsCsvFile, Ri as pt, xs as q, pm as r, Mm as refuseUnimportableGgirRecording, os as rt, lo as s, Ki as st, Nm as t, ss as tt, so as u, Zi as ut, Qr as v, zr as w, Br as x, Zr as y, As as z };
